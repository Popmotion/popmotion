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
	
	var _framesync = __webpack_require__(17);
	
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
	
	var _easing2 = __webpack_require__(2);
	
	var _easing = _interopRequireWildcard(_easing2);
	
	var _transformers2 = __webpack_require__(3);
	
	var _transformers = _interopRequireWildcard(_transformers2);
	
	var _valueTypes2 = __webpack_require__(4);
	
	var _valueTypes = _interopRequireWildcard(_valueTypes2);
	
	var _actions = __webpack_require__(18);
	
	var _actions2 = _interopRequireDefault(_actions);
	
	var _blendTweens2 = __webpack_require__(5);
	
	var _blendTweens3 = _interopRequireDefault(_blendTweens2);
	
	var _chain2 = __webpack_require__(6);
	
	var _chain3 = _interopRequireDefault(_chain2);
	
	var _composite2 = __webpack_require__(7);
	
	var _composite3 = _interopRequireDefault(_composite2);
	
	var _crossFade2 = __webpack_require__(8);
	
	var _crossFade3 = _interopRequireDefault(_crossFade2);
	
	var _delay2 = __webpack_require__(9);
	
	var _delay3 = _interopRequireDefault(_delay2);
	
	var _parallel2 = __webpack_require__(10);
	
	var _parallel3 = _interopRequireDefault(_parallel2);
	
	var _physics2 = __webpack_require__(11);
	
	var _physics3 = _interopRequireDefault(_physics2);
	
	var _pointer2 = __webpack_require__(12);
	
	var _pointer3 = _interopRequireDefault(_pointer2);
	
	var _tween2 = __webpack_require__(13);
	
	var _tween3 = _interopRequireDefault(_tween2);
	
	var _track2 = __webpack_require__(14);
	
	var _track3 = _interopRequireDefault(_track2);
	
	var _stagger2 = __webpack_require__(15);
	
	var _stagger3 = _interopRequireDefault(_stagger2);
	
	var _value2 = __webpack_require__(16);
	
	var _value3 = _interopRequireDefault(_value2);
	
	var _renderers = __webpack_require__(19);
	
	var _renderers2 = _interopRequireDefault(_renderers);
	
	var _css2 = __webpack_require__(20);
	
	var _css3 = _interopRequireDefault(_css2);
	
	var _svg2 = __webpack_require__(21);
	
	var _svg3 = _interopRequireDefault(_svg2);
	
	var _svgPath2 = __webpack_require__(22);
	
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
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.transformChildValues = exports.steps = exports.interpolate = exports.flow = exports.clamp = exports.clampMin = exports.clampMax = exports.appendUnit = undefined;
	
	var _calc = __webpack_require__(23);
	
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
	  return flow(clampMin(min), clampMax(max));
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvdHJhbnNmb3JtZXJzLmpzIl0sIm5hbWVzIjpbImFwcGVuZFVuaXQiLCJ1bml0IiwidiIsImNsYW1wTWF4IiwibWF4IiwiTWF0aCIsIm1pbiIsImNsYW1wTWluIiwiY2xhbXAiLCJmbG93IiwidHJhbnNmb3JtZXJzIiwibnVtVHJhbnNmb3JtZXJzIiwibGVuZ3RoIiwiaSIsImFjYyIsImFyZ3MiLCJpbnRlcnBvbGF0ZSIsImlucHV0Iiwib3V0cHV0IiwicmFuZ2VFYXNpbmciLCJyYW5nZUxlbmd0aCIsImZpbmFsSW5kZXgiLCJwcm9ncmVzc0luUmFuZ2UiLCJlYXNlZFByb2dyZXNzIiwic3RlcHMiLCJwcm9ncmVzcyIsInRyYW5zZm9ybUNoaWxkVmFsdWVzIiwiY2hpbGRUcmFuc2Zvcm1lcnMiLCJrZXkiLCJjaGlsZFRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBOzs7Ozs7O0FBT08sSUFBTUEsa0NBQWEsVUFBQ0MsSUFBRDtBQUFBLFNBQVUsVUFBQ0MsQ0FBRDtBQUFBLGdCQUFVQSxDQUFWLEdBQWNELElBQWQ7QUFBQSxHQUFWO0FBQUEsQ0FBbkI7O0FBRVA7Ozs7Ozs7QUFPTyxJQUFNRSw4QkFBVyxVQUFDQyxHQUFEO0FBQUEsU0FBUyxVQUFDRixDQUFEO0FBQUEsV0FBT0csS0FBS0MsR0FBTCxDQUFTSixDQUFULEVBQVlFLEdBQVosQ0FBUDtBQUFBLEdBQVQ7QUFBQSxDQUFqQjtBQUNBLElBQU1HLDhCQUFXLFVBQUNELEdBQUQ7QUFBQSxTQUFTLFVBQUNKLENBQUQ7QUFBQSxXQUFPRyxLQUFLRCxHQUFMLENBQVNGLENBQVQsRUFBWUksR0FBWixDQUFQO0FBQUEsR0FBVDtBQUFBLENBQWpCO0FBQ0EsSUFBTUUsd0JBQVEsVUFBQ0YsR0FBRCxFQUFNRixHQUFOO0FBQUEsU0FBY0ssS0FBS0YsU0FBU0QsR0FBVCxDQUFMLEVBQW9CSCxTQUFTQyxHQUFULENBQXBCLENBQWQ7QUFBQSxDQUFkOztBQUVQOzs7Ozs7O0FBT08sSUFBTUssc0JBQU8sWUFBcUI7QUFBQSxvQ0FBakJDLFlBQWlCO0FBQWpCQSxnQkFBaUI7QUFBQTs7QUFDdkMsTUFBTUMsa0JBQWtCRCxhQUFhRSxNQUFyQztBQUNBLE1BQUlDLElBQUksQ0FBUjs7QUFFQSxTQUFPLFVBQUNDLEdBQUQsRUFBa0I7QUFBQSx1Q0FBVEMsSUFBUztBQUFUQSxVQUFTO0FBQUE7O0FBQ3ZCLFFBQUliLElBQUlZLEdBQVI7QUFDQSxTQUFLRCxJQUFJLENBQVQsRUFBWUEsSUFBSUYsZUFBaEIsRUFBaUNFLEdBQWpDLEVBQXNDO0FBQ3BDWCxVQUFJUSxhQUFhRyxDQUFiLHVCQUFnQlgsQ0FBaEIsU0FBc0JhLElBQXRCLEVBQUo7QUFDRDs7QUFFRCxXQUFPYixDQUFQO0FBQ0QsR0FQRDtBQVFELENBWk07O0FBY0EsSUFBTWMsb0NBQWMsVUFBQ0MsS0FBRCxFQUFRQyxNQUFSLEVBQWdCQyxXQUFoQixFQUFnQztBQUN6RCxNQUFNQyxjQUFjSCxNQUFNTCxNQUExQjtBQUNBLE1BQU1TLGFBQWFELGNBQWMsQ0FBakM7O0FBRUEsU0FBTyxVQUFDbEIsQ0FBRCxFQUFPO0FBQ1o7QUFDQSxRQUFJQSxLQUFLZSxNQUFNLENBQU4sQ0FBVCxFQUFtQjtBQUNqQixhQUFPQyxPQUFPLENBQVAsQ0FBUDtBQUNEOztBQUVEO0FBQ0EsUUFBSWhCLEtBQUtlLE1BQU1JLFVBQU4sQ0FBVCxFQUE0QjtBQUMxQixhQUFPSCxPQUFPRyxVQUFQLENBQVA7QUFDRDs7QUFFRCxRQUFJUixJQUFJLENBQVI7O0FBRUE7QUFDQSxXQUFPQSxJQUFJTyxXQUFYLEVBQXdCUCxHQUF4QixFQUE2QjtBQUMzQixVQUFJSSxNQUFNSixDQUFOLElBQVdYLENBQVgsSUFBZ0JXLE1BQU1RLFVBQTFCLEVBQXNDO0FBQ3BDO0FBQ0Q7QUFDRjs7QUFFRCxRQUFNQyxrQkFBa0IsZ0NBQXFCTCxNQUFNSixJQUFJLENBQVYsQ0FBckIsRUFBbUNJLE1BQU1KLENBQU4sQ0FBbkMsRUFBNkNYLENBQTdDLENBQXhCO0FBQ0EsUUFBTXFCLGdCQUFpQkosV0FBRCxHQUFnQkEsWUFBWU4sQ0FBWixFQUFlUyxlQUFmLENBQWhCLEdBQWtEQSxlQUF4RTtBQUNBLFdBQU8sZ0NBQXFCSixPQUFPTCxJQUFJLENBQVgsQ0FBckIsRUFBb0NLLE9BQU9MLENBQVAsQ0FBcEMsRUFBK0NVLGFBQS9DLENBQVA7QUFDRCxHQXZCRDtBQXdCRCxDQTVCTTs7QUE4QkEsSUFBTUMsd0JBQVEsVUFBQ0EsS0FBRCxFQUFRbEIsR0FBUixFQUFhRixHQUFiO0FBQUEsU0FBcUIsVUFBQ0YsQ0FBRCxFQUFPO0FBQy9DLFFBQU11QixXQUFXLGdDQUFxQm5CLEdBQXJCLEVBQTBCRixHQUExQixFQUErQkYsQ0FBL0IsQ0FBakI7QUFDQSxXQUFPLHdCQUFhc0IsS0FBYixFQUFvQkMsUUFBcEIsQ0FBUDtBQUNELEdBSG9CO0FBQUEsQ0FBZDs7QUFLQSxJQUFNQyxzREFBdUIsVUFBQ0MsaUJBQUQ7QUFBQSxTQUF1QixVQUFDekIsQ0FBRCxFQUFPO0FBQ2hFLFNBQUssSUFBSTBCLEdBQVQsSUFBZ0IxQixDQUFoQixFQUFtQjtBQUNqQixVQUFNMkIsbUJBQW1CRixrQkFBa0JDLEdBQWxCLENBQXpCO0FBQ0EsVUFBSUMsZ0JBQUosRUFBc0I7QUFDcEIzQixVQUFFMEIsR0FBRixJQUFTQyxpQkFBaUIzQixFQUFFMEIsR0FBRixDQUFqQixDQUFUO0FBQ0Q7QUFDRjs7QUFFRCxXQUFPMUIsQ0FBUDtBQUNELEdBVG1DO0FBQUEsQ0FBN0IiLCJmaWxlIjoidHJhbnNmb3JtZXJzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUsIGdldFZhbHVlRnJvbVByb2dyZXNzLCBzdGVwUHJvZ3Jlc3MgfSBmcm9tICcuL2NhbGMnO1xuXG4vKipcbiAqIEFwcGVuZCBVbml0XG4gKiBBIGZ1bmN0aW9uIHRoYXQgd2lsbCBhcHBlbmRcbiAqIGFwcGVuZFVuaXQoJ3B4JywgMjApIC0+ICcyMHB4J1xuICogQHBhcmFtICB7c3RyaW5nfSB1bml0KVxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5leHBvcnQgY29uc3QgYXBwZW5kVW5pdCA9ICh1bml0KSA9PiAodikgPT4gYCR7dn0ke3VuaXR9YDtcblxuLyoqXG4gKiBDbGFtcCB2YWx1ZSBiZXR3ZWVuXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCB3aWxsIHJlc3RyaWN0IGEgZ2l2ZW4gdmFsdWUgYmV0d2VlbiBgbWluYCBhbmQgYG1heGBcbiAqIEBwYXJhbSAge251bWJlcn0gbWluXG4gKiBAcGFyYW0gIHtudW1iZXJ9IG1heFxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5leHBvcnQgY29uc3QgY2xhbXBNYXggPSAobWF4KSA9PiAodikgPT4gTWF0aC5taW4odiwgbWF4KTtcbmV4cG9ydCBjb25zdCBjbGFtcE1pbiA9IChtaW4pID0+ICh2KSA9PiBNYXRoLm1heCh2LCBtaW4pO1xuZXhwb3J0IGNvbnN0IGNsYW1wID0gKG1pbiwgbWF4KSA9PiBmbG93KGNsYW1wTWluKG1pbiksIGNsYW1wTWF4KG1heCkpO1xuXG4vKipcbiAqIEZsb3dcbiAqIENvbXBvc2Ugb3RoZXIgdHJhbnNmb3JtZXJzIHRvIHJ1biBsaW5lYXJpbHlcbiAqIGZsb3cobWluKDIwKSwgbWF4KDQwKSlcbiAqIEBwYXJhbSAgey4uLmZ1bmN0aW9uc30gdHJhbnNmb3JtZXJzXG4gKiBAcmV0dXJuIHtmdW5jdGlvbn1cbiAqL1xuZXhwb3J0IGNvbnN0IGZsb3cgPSAoLi4udHJhbnNmb3JtZXJzKSA9PiB7XG4gIGNvbnN0IG51bVRyYW5zZm9ybWVycyA9IHRyYW5zZm9ybWVycy5sZW5ndGg7XG4gIGxldCBpID0gMDtcblxuICByZXR1cm4gKGFjYywgLi4uYXJncykgPT4ge1xuICAgIGxldCB2ID0gYWNjO1xuICAgIGZvciAoaSA9IDA7IGkgPCBudW1UcmFuc2Zvcm1lcnM7IGkrKykge1xuICAgICAgdiA9IHRyYW5zZm9ybWVyc1tpXSh2LCAuLi5hcmdzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdjtcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBpbnRlcnBvbGF0ZSA9IChpbnB1dCwgb3V0cHV0LCByYW5nZUVhc2luZykgPT4ge1xuICBjb25zdCByYW5nZUxlbmd0aCA9IGlucHV0Lmxlbmd0aDtcbiAgY29uc3QgZmluYWxJbmRleCA9IHJhbmdlTGVuZ3RoIC0gMTtcblxuICByZXR1cm4gKHYpID0+IHtcbiAgICAvLyBJZiB2YWx1ZSBvdXRzaWRlIG1pbmltdW0gcmFuZ2UsIHF1aWNrbHkgcmV0dXJuXG4gICAgaWYgKHYgPD0gaW5wdXRbMF0pIHtcbiAgICAgIHJldHVybiBvdXRwdXRbMF07XG4gICAgfVxuXG4gICAgLy8gSWYgdmFsdWUgb3V0c2lkZSBtYXhpbXVtIHJhbmdlLCBxdWlja2x5IHJldHVyblxuICAgIGlmICh2ID49IGlucHV0W2ZpbmFsSW5kZXhdKSB7XG4gICAgICByZXR1cm4gb3V0cHV0W2ZpbmFsSW5kZXhdO1xuICAgIH1cblxuICAgIGxldCBpID0gMTtcblxuICAgIC8vIEZpbmQgaW5kZXggb2YgcmFuZ2Ugc3RhcnRcbiAgICBmb3IgKDsgaSA8IHJhbmdlTGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChpbnB1dFtpXSA+IHYgfHwgaSA9PT0gZmluYWxJbmRleCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwcm9ncmVzc0luUmFuZ2UgPSBnZXRQcm9ncmVzc0Zyb21WYWx1ZShpbnB1dFtpIC0gMV0sIGlucHV0W2ldLCB2KTtcbiAgICBjb25zdCBlYXNlZFByb2dyZXNzID0gKHJhbmdlRWFzaW5nKSA/IHJhbmdlRWFzaW5nW2ldKHByb2dyZXNzSW5SYW5nZSkgOiBwcm9ncmVzc0luUmFuZ2U7XG4gICAgcmV0dXJuIGdldFZhbHVlRnJvbVByb2dyZXNzKG91dHB1dFtpIC0gMV0sIG91dHB1dFtpXSwgZWFzZWRQcm9ncmVzcyk7XG4gIH07XG59O1xuXG5leHBvcnQgY29uc3Qgc3RlcHMgPSAoc3RlcHMsIG1pbiwgbWF4KSA9PiAodikgPT4ge1xuICBjb25zdCBwcm9ncmVzcyA9IGdldFByb2dyZXNzRnJvbVZhbHVlKG1pbiwgbWF4LCB2KTtcbiAgcmV0dXJuIHN0ZXBQcm9ncmVzcyhzdGVwcywgcHJvZ3Jlc3MpO1xufTtcblxuZXhwb3J0IGNvbnN0IHRyYW5zZm9ybUNoaWxkVmFsdWVzID0gKGNoaWxkVHJhbnNmb3JtZXJzKSA9PiAodikgPT4ge1xuICBmb3IgKGxldCBrZXkgaW4gdikge1xuICAgIGNvbnN0IGNoaWxkVHJhbnNmb3JtZXIgPSBjaGlsZFRyYW5zZm9ybWVyc1trZXldO1xuICAgIGlmIChjaGlsZFRyYW5zZm9ybWVyKSB7XG4gICAgICB2W2tleV0gPSBjaGlsZFRyYW5zZm9ybWVyKHZba2V5XSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHY7XG59O1xuIl19

/***/ },
/* 4 */
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
	
	
	var _transformers = __webpack_require__(3);
	
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
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _ = __webpack_require__(18);
	
	var _2 = _interopRequireDefault(_);
	
	var _calc = __webpack_require__(23);
	
	var _transformers = __webpack_require__(3);
	
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
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _ = __webpack_require__(18);
	
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
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _ = __webpack_require__(18);
	
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
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _ = __webpack_require__(18);
	
	var _2 = _interopRequireDefault(_);
	
	var _tween = __webpack_require__(13);
	
	var _tween2 = _interopRequireDefault(_tween);
	
	var _easing = __webpack_require__(2);
	
	var _calc = __webpack_require__(23);
	
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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _tween = __webpack_require__(13);
	
	var _tween2 = _interopRequireDefault(_tween);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (duration) {
	  return (0, _tween2.default)({ duration: duration });
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2RlbGF5LmpzIl0sIm5hbWVzIjpbImR1cmF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7OztrQkFFZSxVQUFDQSxRQUFEO0FBQUEsU0FBYyxxQkFBTSxFQUFFQSxrQkFBRixFQUFOLENBQWQ7QUFBQSxDIiwiZmlsZSI6ImRlbGF5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR3ZWVuIGZyb20gJy4vdHdlZW4nO1xuXG5leHBvcnQgZGVmYXVsdCAoZHVyYXRpb24pID0+IHR3ZWVuKHsgZHVyYXRpb24gfSk7XG4iXX0=

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _ = __webpack_require__(18);
	
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _ = __webpack_require__(18);
	
	var _2 = _interopRequireDefault(_);
	
	var _framesync = __webpack_require__(17);
	
	var _calc = __webpack_require__(23);
	
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
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _value = __webpack_require__(16);
	
	var _value2 = _interopRequireDefault(_value);
	
	var _composite = __webpack_require__(7);
	
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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _ = __webpack_require__(18);
	
	var _2 = _interopRequireDefault(_);
	
	var _framesync = __webpack_require__(17);
	
	var _transformers = __webpack_require__(3);
	
	var _calc = __webpack_require__(23);
	
	var _easing = __webpack_require__(2);
	
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
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _ = __webpack_require__(18);
	
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
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _chain = __webpack_require__(6);
	
	var _chain2 = _interopRequireDefault(_chain);
	
	var _parallel = __webpack_require__(10);
	
	var _parallel2 = _interopRequireDefault(_parallel);
	
	var _delay = __webpack_require__(9);
	
	var _delay2 = _interopRequireDefault(_delay);
	
	var _utils = __webpack_require__(24);
	
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

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _ = __webpack_require__(18);
	
	var _2 = _interopRequireDefault(_);
	
	var _framesync = __webpack_require__(17);
	
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
	
	exports.default = function (current, onUpdate) {
	  return new Value({ current: current, onUpdate: onUpdate });
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL3ZhbHVlLmpzIl0sIm5hbWVzIjpbIlZhbHVlIiwic2V0IiwidiIsImN1cnJlbnQiLCJ1cGRhdGUiLCJkZWZhdWx0UHJvcHMiLCJwYXNzaXZlIiwib25VcGRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRU1BLEs7Ozs7Ozs7OztrQkFLSkMsRyxnQkFBSUMsQyxFQUFHO0FBQ0wsU0FBS0MsT0FBTCxHQUFlRCxDQUFmO0FBQ0Esa0NBQWMsS0FBS0UsTUFBbkI7QUFDRCxHOzs7OztBQVJHSixLLENBQ0dLLFksR0FBZTtBQUNwQkMsV0FBUztBQURXLEM7O2tCQVVULFVBQUNILE9BQUQsRUFBVUksUUFBVjtBQUFBLFNBQXVCLElBQUlQLEtBQUosQ0FBVSxFQUFFRyxnQkFBRixFQUFXSSxrQkFBWCxFQUFWLENBQXZCO0FBQUEsQyIsImZpbGUiOiJ2YWx1ZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY3Rpb24gZnJvbSAnLi8nO1xuaW1wb3J0IHsgb25GcmFtZVVwZGF0ZSB9IGZyb20gJy4uL2ZyYW1lc3luYyc7XG5cbmNsYXNzIFZhbHVlIGV4dGVuZHMgQWN0aW9uIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBwYXNzaXZlOiB0cnVlXG4gIH07XG5cbiAgc2V0KHYpIHtcbiAgICB0aGlzLmN1cnJlbnQgPSB2O1xuICAgIG9uRnJhbWVVcGRhdGUodGhpcy51cGRhdGUpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IChjdXJyZW50LCBvblVwZGF0ZSkgPT4gbmV3IFZhbHVlKHsgY3VycmVudCwgb25VcGRhdGUgfSk7XG4iXX0=

/***/ },
/* 17 */
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
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _framesync = __webpack_require__(17);
	
	var _calc = __webpack_require__(23);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2luZGV4LmpzIl0sIm5hbWVzIjpbIkFjdGlvbiIsInByb3BzIiwidXBkYXRlIiwiYmluZCIsImNvbnN0cnVjdG9yIiwiZGVmYXVsdFByb3BzIiwic2V0UHJvcHMiLCJjdXJyZW50Iiwic3RhcnQiLCJvblN0YXJ0IiwiX29uU3RhcnQiLCJwYXNzaXZlIiwiaXNBY3RpdmUiLCJzdG9wIiwib25TdG9wIiwiX29uU3RvcCIsImNvbXBsZXRlIiwib25Db21wbGV0ZSIsIl9vbkNvbXBsZXRlIiwibGFzdFVwZGF0ZWQiLCJwcmV2Iiwib25VcGRhdGUiLCJmaXJlTGlzdGVuZXJzIiwiaXNBY3Rpb25Db21wbGV0ZSIsImdldCIsImdldFByb3AiLCJrZXkiLCJnZXRWZWxvY2l0eSIsImFkZExpc3RlbmVyIiwibGlzdGVuZXIiLCJsaXN0ZW5lcnMiLCJudW1MaXN0ZW5lcnMiLCJpbmRleE9mIiwicHVzaCIsInJlbW92ZUxpc3RlbmVyIiwibGlzdGVuZXJJbmRleCIsInNwbGljZSIsImkiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUNBOzs7O0lBRU1BLE07QUFDSixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLQyxNQUFMLEdBQWMsS0FBS0EsTUFBTCxDQUFZQyxJQUFaLENBQWlCLElBQWpCLENBQWQ7O0FBRUEsU0FBS0YsS0FBTCxnQkFDSyxLQUFLRyxXQUFMLENBQWlCQyxZQUR0Qjs7QUFJQSxTQUFLQyxRQUFMLENBQWNMLEtBQWQ7O0FBRUEsU0FBS00sT0FBTCxHQUFlTixNQUFNTSxPQUFOLElBQWlCLENBQWhDO0FBQ0Q7O21CQUVEQyxLLG9CQUFRO0FBQUEsaUJBQ2lDLEtBQUtQLEtBRHRDO0FBQUEsUUFDRVEsT0FERixVQUNFQSxPQURGO0FBQUEsUUFDV0MsUUFEWCxVQUNXQSxRQURYO0FBQUEsUUFDcUJDLE9BRHJCLFVBQ3FCQSxPQURyQjs7O0FBR04sUUFBSSxDQUFDQSxPQUFMLEVBQWM7QUFDWixXQUFLQyxRQUFMLEdBQWdCLElBQWhCO0FBQ0Esb0NBQWMsS0FBS1YsTUFBbkI7QUFDRDs7QUFFRCxRQUFJLEtBQUtPLE9BQVQsRUFBa0IsS0FBS0EsT0FBTDtBQUNsQixRQUFJQSxPQUFKLEVBQWFBLFFBQVEsSUFBUjtBQUNiLFFBQUlDLFFBQUosRUFBY0EsU0FBUyxJQUFUOztBQUVkLFdBQU8sSUFBUDtBQUNELEc7O21CQUVERyxJLG1CQUFPO0FBQUEsa0JBQ2dDLEtBQUtaLEtBRHJDO0FBQUEsUUFDR2EsTUFESCxXQUNHQSxNQURIO0FBQUEsUUFDV0MsT0FEWCxXQUNXQSxPQURYO0FBQUEsUUFDb0JKLE9BRHBCLFdBQ29CQSxPQURwQjs7O0FBR0wsUUFBSSxDQUFDQSxPQUFMLEVBQWM7QUFDWixXQUFLQyxRQUFMLEdBQWdCLEtBQWhCO0FBQ0EsMENBQW9CLEtBQUtWLE1BQXpCO0FBQ0Q7O0FBRUQsUUFBSSxLQUFLWSxNQUFULEVBQWlCLEtBQUtBLE1BQUw7QUFDakIsUUFBSUEsTUFBSixFQUFZQSxPQUFPLElBQVA7QUFDWixRQUFJQyxPQUFKLEVBQWFBLFFBQVEsSUFBUjs7QUFFYixXQUFPLElBQVA7QUFDRCxHOzttQkFFREMsUSx1QkFBVztBQUFBLGtCQUMyQixLQUFLZixLQURoQztBQUFBLFFBQ0RnQixVQURDLFdBQ0RBLFVBREM7QUFBQSxRQUNXQyxXQURYLFdBQ1dBLFdBRFg7OztBQUdULFFBQUksS0FBS0QsVUFBVCxFQUFxQixLQUFLQSxVQUFMO0FBQ3JCLFFBQUlBLFVBQUosRUFBZ0JBLFdBQVcsSUFBWDtBQUNoQixRQUFJQyxXQUFKLEVBQWlCQSxZQUFZLElBQVo7O0FBRWpCLFNBQUtMLElBQUw7O0FBRUEsV0FBTyxJQUFQO0FBQ0QsRzs7bUJBRURYLE0scUJBQVM7QUFDUCxTQUFLaUIsV0FBTCxHQUFtQixvQ0FBbkI7QUFDQSxTQUFLQyxJQUFMLEdBQVksS0FBS2IsT0FBakI7O0FBRk8sa0JBSXVCLEtBQUtOLEtBSjVCO0FBQUEsUUFJQ29CLFFBSkQsV0FJQ0EsUUFKRDtBQUFBLFFBSVdWLE9BSlgsV0FJV0EsT0FKWDs7O0FBTVAsUUFBSSxLQUFLVSxRQUFULEVBQW1CO0FBQ2pCLFdBQUtkLE9BQUwsR0FBZSxLQUFLYyxRQUFMLEVBQWY7QUFDRDs7QUFFRCxRQUFJQSxRQUFKLEVBQWNBLFNBQVMsS0FBS2QsT0FBZCxFQUF1QixJQUF2QjtBQUNkLFNBQUtlLGFBQUw7O0FBRUEsUUFBSSxDQUFDWCxPQUFELElBQVksS0FBS0MsUUFBckIsRUFBK0I7QUFDN0Isb0NBQWMsS0FBS1YsTUFBbkI7QUFDRDs7QUFFRCxRQUFJLEtBQUtxQixnQkFBTCxJQUF5QixLQUFLQSxnQkFBTCxFQUE3QixFQUFzRDtBQUNwRCxXQUFLUCxRQUFMO0FBQ0Q7O0FBRUQsV0FBTyxJQUFQO0FBQ0QsRzs7bUJBRURWLFEscUJBQVNMLEssRUFBTztBQUNkLFNBQUtBLEtBQUwsZ0JBQ0ssS0FBS0EsS0FEVixFQUVLQSxLQUZMO0FBSUEsV0FBTyxJQUFQO0FBQ0QsRzs7bUJBRUR1QixHLGtCQUFNO0FBQ0osV0FBTyxLQUFLakIsT0FBWjtBQUNELEc7O21CQUVEa0IsTyxvQkFBUUMsRyxFQUFLO0FBQ1gsV0FBTyxLQUFLekIsS0FBTCxDQUFXeUIsR0FBWCxDQUFQO0FBQ0QsRzs7bUJBRURDLFcsMEJBQWM7QUFDWixXQUFPLDBCQUFlLEtBQUtQLElBQUwsR0FBWSxLQUFLYixPQUFoQyxFQUF5QyxLQUFLWSxXQUE5QyxDQUFQO0FBQ0QsRzs7bUJBRURTLFcsd0JBQVlDLFEsRUFBVTtBQUNwQixTQUFLQyxTQUFMLEdBQWlCLEtBQUtBLFNBQUwsSUFBa0IsRUFBbkM7QUFDQSxTQUFLQyxZQUFMLEdBQW9CLEtBQUtBLFlBQUwsSUFBcUIsQ0FBekM7QUFDQSxRQUFJLEtBQUtELFNBQUwsQ0FBZUUsT0FBZixDQUF1QkgsUUFBdkIsTUFBcUMsQ0FBQyxDQUExQyxFQUE2QztBQUMzQyxXQUFLQyxTQUFMLENBQWVHLElBQWYsQ0FBb0JKLFFBQXBCO0FBQ0EsV0FBS0UsWUFBTDtBQUNEO0FBQ0QsV0FBTyxJQUFQO0FBQ0QsRzs7bUJBRURHLGMsMkJBQWVMLFEsRUFBVTtBQUN2QixRQUFNTSxnQkFBaUIsS0FBS0wsU0FBTixHQUFtQixLQUFLQSxTQUFMLENBQWVFLE9BQWYsQ0FBdUJILFFBQXZCLENBQW5CLEdBQXNELENBQUMsQ0FBN0U7QUFDQSxRQUFJTSxrQkFBa0IsQ0FBQyxDQUF2QixFQUEwQjtBQUN4QixXQUFLSixZQUFMO0FBQ0EsV0FBS0QsU0FBTCxDQUFlTSxNQUFmLENBQXNCRCxhQUF0QixFQUFxQyxDQUFyQztBQUNEO0FBQ0QsV0FBTyxJQUFQO0FBQ0QsRzs7bUJBRURiLGEsNEJBQWdCO0FBQ2QsUUFBTWYsVUFBVSxLQUFLaUIsR0FBTCxFQUFoQjtBQUNBLFNBQUssSUFBSWEsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEtBQUtOLFlBQXpCLEVBQXVDTSxHQUF2QyxFQUE0QztBQUMxQyxXQUFLUCxTQUFMLENBQWVPLENBQWYsRUFBa0I5QixPQUFsQixFQUEyQixJQUEzQjtBQUNEO0FBQ0QsV0FBTyxJQUFQO0FBQ0QsRzs7Ozs7a0JBR1lQLE0iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBvbkZyYW1lVXBkYXRlLCBjYW5jZWxPbkZyYW1lVXBkYXRlLCB0aW1lU2luY2VMYXN0RnJhbWUgfSBmcm9tICcuLi9mcmFtZXN5bmMnO1xuaW1wb3J0IHsgc3BlZWRQZXJTZWNvbmQgfSBmcm9tICcuLi9pbmMvY2FsYyc7XG5cbmNsYXNzIEFjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgdGhpcy51cGRhdGUgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5wcm9wcyA9IHtcbiAgICAgIC4uLnRoaXMuY29uc3RydWN0b3IuZGVmYXVsdFByb3BzXG4gICAgfTtcblxuICAgIHRoaXMuc2V0UHJvcHMocHJvcHMpO1xuXG4gICAgdGhpcy5jdXJyZW50ID0gcHJvcHMuY3VycmVudCB8fCAwO1xuICB9XG5cbiAgc3RhcnQoKSB7XG4gICAgY29uc3QgeyBvblN0YXJ0LCBfb25TdGFydCwgcGFzc2l2ZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmICghcGFzc2l2ZSkge1xuICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICBvbkZyYW1lVXBkYXRlKHRoaXMudXBkYXRlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vblN0YXJ0KSB0aGlzLm9uU3RhcnQoKTtcbiAgICBpZiAob25TdGFydCkgb25TdGFydCh0aGlzKTtcbiAgICBpZiAoX29uU3RhcnQpIF9vblN0YXJ0KHRoaXMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzdG9wKCkge1xuICAgIGNvbnN0IHsgb25TdG9wLCBfb25TdG9wLCBwYXNzaXZlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKCFwYXNzaXZlKSB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICBjYW5jZWxPbkZyYW1lVXBkYXRlKHRoaXMudXBkYXRlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vblN0b3ApIHRoaXMub25TdG9wKCk7XG4gICAgaWYgKG9uU3RvcCkgb25TdG9wKHRoaXMpO1xuICAgIGlmIChfb25TdG9wKSBfb25TdG9wKHRoaXMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjb21wbGV0ZSgpIHtcbiAgICBjb25zdCB7IG9uQ29tcGxldGUsIF9vbkNvbXBsZXRlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKHRoaXMub25Db21wbGV0ZSkgdGhpcy5vbkNvbXBsZXRlKCk7XG4gICAgaWYgKG9uQ29tcGxldGUpIG9uQ29tcGxldGUodGhpcyk7XG4gICAgaWYgKF9vbkNvbXBsZXRlKSBfb25Db21wbGV0ZSh0aGlzKTtcblxuICAgIHRoaXMuc3RvcCgpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy5sYXN0VXBkYXRlZCA9IHRpbWVTaW5jZUxhc3RGcmFtZSgpO1xuICAgIHRoaXMucHJldiA9IHRoaXMuY3VycmVudDtcblxuICAgIGNvbnN0IHsgb25VcGRhdGUsIHBhc3NpdmUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAodGhpcy5vblVwZGF0ZSkge1xuICAgICAgdGhpcy5jdXJyZW50ID0gdGhpcy5vblVwZGF0ZSgpO1xuICAgIH1cblxuICAgIGlmIChvblVwZGF0ZSkgb25VcGRhdGUodGhpcy5jdXJyZW50LCB0aGlzKTtcbiAgICB0aGlzLmZpcmVMaXN0ZW5lcnMoKTtcblxuICAgIGlmICghcGFzc2l2ZSAmJiB0aGlzLmlzQWN0aXZlKSB7XG4gICAgICBvbkZyYW1lVXBkYXRlKHRoaXMudXBkYXRlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc0FjdGlvbkNvbXBsZXRlICYmIHRoaXMuaXNBY3Rpb25Db21wbGV0ZSgpKSB7XG4gICAgICB0aGlzLmNvbXBsZXRlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRQcm9wcyhwcm9wcykge1xuICAgIHRoaXMucHJvcHMgPSB7XG4gICAgICAuLi50aGlzLnByb3BzLFxuICAgICAgLi4ucHJvcHNcbiAgICB9O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0KCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnQ7XG4gIH1cblxuICBnZXRQcm9wKGtleSkge1xuICAgIHJldHVybiB0aGlzLnByb3BzW2tleV07XG4gIH1cblxuICBnZXRWZWxvY2l0eSgpIHtcbiAgICByZXR1cm4gc3BlZWRQZXJTZWNvbmQodGhpcy5wcmV2IC0gdGhpcy5jdXJyZW50LCB0aGlzLmxhc3RVcGRhdGVkKTtcbiAgfVxuXG4gIGFkZExpc3RlbmVyKGxpc3RlbmVyKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVycyB8fCBbXTtcbiAgICB0aGlzLm51bUxpc3RlbmVycyA9IHRoaXMubnVtTGlzdGVuZXJzIHx8IDA7XG4gICAgaWYgKHRoaXMubGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpID09PSAtMSkge1xuICAgICAgdGhpcy5saXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgICB0aGlzLm51bUxpc3RlbmVycysrO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlbW92ZUxpc3RlbmVyKGxpc3RlbmVyKSB7XG4gICAgY29uc3QgbGlzdGVuZXJJbmRleCA9ICh0aGlzLmxpc3RlbmVycykgPyB0aGlzLmxpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKSA6IC0xO1xuICAgIGlmIChsaXN0ZW5lckluZGV4ICE9PSAtMSkge1xuICAgICAgdGhpcy5udW1MaXN0ZW5lcnMtLTtcbiAgICAgIHRoaXMubGlzdGVuZXJzLnNwbGljZShsaXN0ZW5lckluZGV4LCAxKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBmaXJlTGlzdGVuZXJzKCkge1xuICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLmdldCgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1MaXN0ZW5lcnM7IGkrKykge1xuICAgICAgdGhpcy5saXN0ZW5lcnNbaV0oY3VycmVudCwgdGhpcyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFjdGlvbjtcbiJdfQ==

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _framesync = __webpack_require__(17);
	
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
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = function (element, props) {
	  return new CSSRenderer(_extends({
	    element: element
	  }, props));
	};
	
	var _ = __webpack_require__(19);
	
	var _2 = _interopRequireDefault(_);
	
	var _render = __webpack_require__(30);
	
	var _render2 = _interopRequireDefault(_render);
	
	var _transformProps = __webpack_require__(28);
	
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
	      return valueType.default || 0;
	    }
	  };
	
	  return CSSRenderer;
	}(_2.default);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvY3NzL2luZGV4LmpzIl0sIm5hbWVzIjpbImVsZW1lbnQiLCJwcm9wcyIsIkNTU1JlbmRlcmVyIiwib25SZW5kZXIiLCJlbmFibGVIYXJkd2FyZUFjY2VsZXJhdGlvbiIsInN0YXRlIiwiY2hhbmdlZFZhbHVlcyIsIm9uUmVhZCIsImtleSIsInZhbHVlVHlwZSIsImRvbVZhbHVlIiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInBhcnNlIiwiZGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O2tCQXlCZSxVQUFVQSxPQUFWLEVBQW1CQyxLQUFuQixFQUEwQjtBQUN2QyxTQUFPLElBQUlDLFdBQUo7QUFDTEY7QUFESyxLQUVGQyxLQUZFLEVBQVA7QUFJRCxDOztBQTlCRDs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUMsVzs7Ozs7Ozs7O3dCQUNKQyxRLHVCQUFXO0FBQUEsaUJBQ3VDLEtBQUtGLEtBRDVDO0FBQUEsUUFDREQsT0FEQyxVQUNEQSxPQURDO0FBQUEsUUFDUUksMEJBRFIsVUFDUUEsMEJBRFI7O0FBRVQsMEJBQVVKLE9BQVYsRUFBbUIsS0FBS0ssS0FBeEIsRUFBK0IsS0FBS0MsYUFBcEMsRUFBbURGLDBCQUFuRDtBQUNELEc7O3dCQUVERyxNLG1CQUFPQyxHLEVBQUs7QUFDVixRQUFNQyxZQUFZLHFCQUFjRCxHQUFkLENBQWxCOztBQUVBLFFBQUksQ0FBQyx5QkFBZUEsR0FBZixDQUFMLEVBQTBCO0FBQUEsVUFDaEJSLE9BRGdCLEdBQ0osS0FBS0MsS0FERCxDQUNoQkQsT0FEZ0I7O0FBRXhCLFVBQU1VLFdBQVdDLE9BQU9DLGdCQUFQLENBQXdCWixPQUF4QixFQUFpQyxJQUFqQyxFQUF1Qyx3QkFBU1EsR0FBVCxDQUF2QyxLQUF5RCxDQUExRTtBQUNBLGFBQVFDLGFBQWFBLFVBQVVJLEtBQXhCLEdBQWlDSixVQUFVSSxLQUFWLENBQWdCSCxRQUFoQixDQUFqQyxHQUE2REEsUUFBcEU7QUFDRCxLQUpELE1BSU87QUFDTCxhQUFPRCxVQUFVSyxPQUFWLElBQXFCLENBQTVCO0FBQ0Q7QUFDRixHIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4uLyc7XG5pbXBvcnQgcmVuZGVyQ1NTIGZyb20gJy4vcmVuZGVyJztcbmltcG9ydCB0cmFuc2Zvcm1Qcm9wcyBmcm9tICcuL3RyYW5zZm9ybS1wcm9wcyc7XG5pbXBvcnQgdmFsdWVUeXBlc01hcCBmcm9tICcuL3ZhbHVlLXR5cGVzJztcbmltcG9ydCBwcmVmaXhlciBmcm9tICcuL3ByZWZpeGVyJztcblxuY2xhc3MgQ1NTUmVuZGVyZXIgZXh0ZW5kcyBSZW5kZXJlciB7XG4gIG9uUmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZWxlbWVudCwgZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24gfSA9IHRoaXMucHJvcHM7XG4gICAgcmVuZGVyQ1NTKGVsZW1lbnQsIHRoaXMuc3RhdGUsIHRoaXMuY2hhbmdlZFZhbHVlcywgZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pO1xuICB9XG5cbiAgb25SZWFkKGtleSkge1xuICAgIGNvbnN0IHZhbHVlVHlwZSA9IHZhbHVlVHlwZXNNYXBba2V5XTtcblxuICAgIGlmICghdHJhbnNmb3JtUHJvcHNba2V5XSkge1xuICAgICAgY29uc3QgeyBlbGVtZW50IH0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3QgZG9tVmFsdWUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCBudWxsKVtwcmVmaXhlcihrZXkpXSB8fCAwO1xuICAgICAgcmV0dXJuICh2YWx1ZVR5cGUgJiYgdmFsdWVUeXBlLnBhcnNlKSA/IHZhbHVlVHlwZS5wYXJzZShkb21WYWx1ZSkgOiBkb21WYWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHZhbHVlVHlwZS5kZWZhdWx0IHx8IDA7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlbGVtZW50LCBwcm9wcykge1xuICByZXR1cm4gbmV3IENTU1JlbmRlcmVyKHtcbiAgICBlbGVtZW50LFxuICAgIC4uLnByb3BzXG4gIH0pO1xufVxuIl19

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = function (element, props) {
	  return new SVGRenderer(_extends({
	    element: element
	  }, props));
	};
	
	var _ = __webpack_require__(19);
	
	var _2 = _interopRequireDefault(_);
	
	var _build = __webpack_require__(27);
	
	var _build2 = _interopRequireDefault(_build);
	
	var _transformProps = __webpack_require__(28);
	
	var _transformProps2 = _interopRequireDefault(_transformProps);
	
	var _valueTypes = __webpack_require__(29);
	
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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = function (element, props) {
	  return new SVGPathRenderer(_extends({
	    element: element
	  }, props));
	};
	
	var _ = __webpack_require__(19);
	
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
/* 23 */
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
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.getColorValues = exports.findValueAndUnit = exports.createUnitType = exports.isFirstChars = exports.contains = exports.splitCommaDelimited = exports.setDOMAttrs = exports.isString = exports.isObj = exports.isNum = exports.isFunc = exports.isArray = exports.hasProperty = exports.currentTime = exports.camelToDash = undefined;
	exports.splitColorValues = splitColorValues;
	
	var _transformers = __webpack_require__(3);
	
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
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _transformProps = __webpack_require__(28);
	
	var _transformProps2 = _interopRequireDefault(_transformProps);
	
	var _valueTypes = __webpack_require__(31);
	
	var _valueTypes2 = _interopRequireDefault(_valueTypes);
	
	var _prefixer = __webpack_require__(32);
	
	var _prefixer2 = _interopRequireDefault(_prefixer);
	
	var _utils = __webpack_require__(24);
	
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
/* 31 */
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
/* 32 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGI0MjZlM2E5Mzk0MjBhZDk5NDQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9wbW90aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvZWFzaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvdHJhbnNmb3JtZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvdmFsdWUtdHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvYmxlbmQtdHdlZW5zLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2NoYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2NvbXBvc2l0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9jcm9zcy1mYWRlLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2RlbGF5LmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3BhcmFsbGVsLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3BoeXNpY3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvcG9pbnRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy90d2Vlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy90cmFjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9zdGFnZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3ZhbHVlLmpzIiwid2VicGFjazovLy8uL3NyYy9mcmFtZXN5bmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXJzL2Nzcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXJzL3N2Zy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXJzL3N2Zy1wYXRoL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvY2FsYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9mcmFtZXN5bmMvb24tbmV4dC1mcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJhbWVzeW5jL2NyZWF0ZS1yZW5kZXItc3RlcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXJzL3N2Zy9idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXJzL2Nzcy90cmFuc2Zvcm0tcHJvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVycy9zdmcvdmFsdWUtdHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVycy9jc3MvcmVuZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvY3NzL3ZhbHVlLXR5cGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvY3NzL3ByZWZpeGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvc3ZnLXBhdGgvYnVpbGQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esd0M7Ozs7Ozs7QUN0Q0E7O0FBRUE7O0FBRUE7O0FBRUEsd0NBQXVDLDZCQUE2QixZQUFZLEVBQUUsT0FBTyxpQkFBaUIsbUJBQW1CLHVCQUF1Qiw0RUFBNEUsRUFBRSxFQUFFLHNCQUFzQixlQUFlLEVBQUU7O0FBRTNRO0FBQ0EsNENBQTJDLG1aOzs7Ozs7QUNUM0M7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFD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OztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBMkMsdXlWOzs7Ozs7QUNqTjNDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9CQUFtQixjQUFjO0FBQ2pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWdCOztBQUVoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsYUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFD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QUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUEyQyx1K0Y7Ozs7OztBQzFDM0M7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUEyQywrc0YiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCAwYjQyNmUzYTkzOTQyMGFkOTk0NFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9wb3Btb3Rpb24gPSByZXF1aXJlKCcuL3BvcG1vdGlvbicpO1xuXG52YXIgcG9wbW90aW9uID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3BvcG1vdGlvbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbndpbmRvdy5wb3Btb3Rpb24gPSBwb3Btb3Rpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OW5iRzlpWVd3dWFuTWlYU3dpYm1GdFpYTWlPbHNpY0c5d2JXOTBhVzl1SWl3aWQybHVaRzkzSWwwc0ltMWhjSEJwYm1keklqb2lPenRCUVVGQk96dEpRVUZaUVN4VE96czdPMEZCUTFwRExFOUJRVTlFTEZOQlFWQXNSMEZCYlVKQkxGTkJRVzVDSWl3aVptbHNaU0k2SW1kc2IySmhiQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0YwZEhCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQXFJR0Z6SUhCdmNHMXZkR2x2YmlCbWNtOXRJQ2N1TDNCdmNHMXZkR2x2YmljN1hHNTNhVzVrYjNjdWNHOXdiVzkwYVc5dUlEMGdjRzl3Ylc5MGFXOXVPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvZ2xvYmFsLmpzXG4gKiogbW9kdWxlIGlkID0gMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5zdmdQYXRoID0gZXhwb3J0cy5zdmcgPSBleHBvcnRzLmNzcyA9IGV4cG9ydHMuUmVuZGVyZXIgPSBleHBvcnRzLnZhbHVlID0gZXhwb3J0cy5zdGFnZ2VyID0gZXhwb3J0cy50cmFjayA9IGV4cG9ydHMudHdlZW4gPSBleHBvcnRzLnBvaW50ZXIgPSBleHBvcnRzLnBoeXNpY3MgPSBleHBvcnRzLnBhcmFsbGVsID0gZXhwb3J0cy5kZWxheSA9IGV4cG9ydHMuY3Jvc3NGYWRlID0gZXhwb3J0cy5jb21wb3NpdGUgPSBleHBvcnRzLmNoYWluID0gZXhwb3J0cy5ibGVuZFR3ZWVucyA9IGV4cG9ydHMuQWN0aW9uID0gZXhwb3J0cy52YWx1ZVR5cGVzID0gZXhwb3J0cy50cmFuc2Zvcm1lcnMgPSBleHBvcnRzLmVhc2luZyA9IGV4cG9ydHMuY3VycmVudEZyYW1lVGltZXN0YW1wID0gZXhwb3J0cy50aW1lU2luY2VMYXN0RnJhbWUgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVFbmQgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVSZW5kZXIgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVVcGRhdGUgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVTdGFydCA9IGV4cG9ydHMub25GcmFtZUVuZCA9IGV4cG9ydHMub25GcmFtZVJlbmRlciA9IGV4cG9ydHMub25GcmFtZVVwZGF0ZSA9IGV4cG9ydHMub25GcmFtZVN0YXJ0ID0gdW5kZWZpbmVkO1xuXG52YXIgX2ZyYW1lc3luYyA9IHJlcXVpcmUoJy4vZnJhbWVzeW5jJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnb25GcmFtZVN0YXJ0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ZyYW1lc3luYy5vbkZyYW1lU3RhcnQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdvbkZyYW1lVXBkYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ZyYW1lc3luYy5vbkZyYW1lVXBkYXRlO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnb25GcmFtZVJlbmRlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9mcmFtZXN5bmMub25GcmFtZVJlbmRlcjtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ29uRnJhbWVFbmQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZnJhbWVzeW5jLm9uRnJhbWVFbmQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjYW5jZWxPbkZyYW1lU3RhcnQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZnJhbWVzeW5jLmNhbmNlbE9uRnJhbWVTdGFydDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NhbmNlbE9uRnJhbWVVcGRhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZnJhbWVzeW5jLmNhbmNlbE9uRnJhbWVVcGRhdGU7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjYW5jZWxPbkZyYW1lUmVuZGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ZyYW1lc3luYy5jYW5jZWxPbkZyYW1lUmVuZGVyO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY2FuY2VsT25GcmFtZUVuZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9mcmFtZXN5bmMuY2FuY2VsT25GcmFtZUVuZDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3RpbWVTaW5jZUxhc3RGcmFtZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9mcmFtZXN5bmMudGltZVNpbmNlTGFzdEZyYW1lO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3VycmVudEZyYW1lVGltZXN0YW1wJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ZyYW1lc3luYy5jdXJyZW50RnJhbWVUaW1lc3RhbXA7XG4gIH1cbn0pO1xuXG52YXIgX2Vhc2luZzIgPSByZXF1aXJlKCcuL2luYy9lYXNpbmcnKTtcblxudmFyIF9lYXNpbmcgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfZWFzaW5nMik7XG5cbnZhciBfdHJhbnNmb3JtZXJzMiA9IHJlcXVpcmUoJy4vaW5jL3RyYW5zZm9ybWVycycpO1xuXG52YXIgX3RyYW5zZm9ybWVycyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF90cmFuc2Zvcm1lcnMyKTtcblxudmFyIF92YWx1ZVR5cGVzMiA9IHJlcXVpcmUoJy4vaW5jL3ZhbHVlLXR5cGVzJyk7XG5cbnZhciBfdmFsdWVUeXBlcyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF92YWx1ZVR5cGVzMik7XG5cbnZhciBfYWN0aW9ucyA9IHJlcXVpcmUoJy4vYWN0aW9ucycpO1xuXG52YXIgX2FjdGlvbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWN0aW9ucyk7XG5cbnZhciBfYmxlbmRUd2VlbnMyID0gcmVxdWlyZSgnLi9hY3Rpb25zL2JsZW5kLXR3ZWVucycpO1xuXG52YXIgX2JsZW5kVHdlZW5zMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2JsZW5kVHdlZW5zMik7XG5cbnZhciBfY2hhaW4yID0gcmVxdWlyZSgnLi9hY3Rpb25zL2NoYWluJyk7XG5cbnZhciBfY2hhaW4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hhaW4yKTtcblxudmFyIF9jb21wb3NpdGUyID0gcmVxdWlyZSgnLi9hY3Rpb25zL2NvbXBvc2l0ZScpO1xuXG52YXIgX2NvbXBvc2l0ZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21wb3NpdGUyKTtcblxudmFyIF9jcm9zc0ZhZGUyID0gcmVxdWlyZSgnLi9hY3Rpb25zL2Nyb3NzLWZhZGUnKTtcblxudmFyIF9jcm9zc0ZhZGUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3Jvc3NGYWRlMik7XG5cbnZhciBfZGVsYXkyID0gcmVxdWlyZSgnLi9hY3Rpb25zL2RlbGF5Jyk7XG5cbnZhciBfZGVsYXkzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVsYXkyKTtcblxudmFyIF9wYXJhbGxlbDIgPSByZXF1aXJlKCcuL2FjdGlvbnMvcGFyYWxsZWwnKTtcblxudmFyIF9wYXJhbGxlbDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXJhbGxlbDIpO1xuXG52YXIgX3BoeXNpY3MyID0gcmVxdWlyZSgnLi9hY3Rpb25zL3BoeXNpY3MnKTtcblxudmFyIF9waHlzaWNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BoeXNpY3MyKTtcblxudmFyIF9wb2ludGVyMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy9wb2ludGVyJyk7XG5cbnZhciBfcG9pbnRlcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb2ludGVyMik7XG5cbnZhciBfdHdlZW4yID0gcmVxdWlyZSgnLi9hY3Rpb25zL3R3ZWVuJyk7XG5cbnZhciBfdHdlZW4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHdlZW4yKTtcblxudmFyIF90cmFjazIgPSByZXF1aXJlKCcuL2FjdGlvbnMvdHJhY2snKTtcblxudmFyIF90cmFjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFjazIpO1xuXG52YXIgX3N0YWdnZXIyID0gcmVxdWlyZSgnLi9hY3Rpb25zL3N0YWdnZXInKTtcblxudmFyIF9zdGFnZ2VyMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0YWdnZXIyKTtcblxudmFyIF92YWx1ZTIgPSByZXF1aXJlKCcuL2FjdGlvbnMvdmFsdWUnKTtcblxudmFyIF92YWx1ZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF92YWx1ZTIpO1xuXG52YXIgX3JlbmRlcmVycyA9IHJlcXVpcmUoJy4vcmVuZGVyZXJzJyk7XG5cbnZhciBfcmVuZGVyZXJzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlbmRlcmVycyk7XG5cbnZhciBfY3NzMiA9IHJlcXVpcmUoJy4vcmVuZGVyZXJzL2NzcycpO1xuXG52YXIgX2NzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jc3MyKTtcblxudmFyIF9zdmcyID0gcmVxdWlyZSgnLi9yZW5kZXJlcnMvc3ZnJyk7XG5cbnZhciBfc3ZnMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N2ZzIpO1xuXG52YXIgX3N2Z1BhdGgyID0gcmVxdWlyZSgnLi9yZW5kZXJlcnMvc3ZnLXBhdGgnKTtcblxudmFyIF9zdmdQYXRoMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N2Z1BhdGgyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZXhwb3J0cy5lYXNpbmcgPSBfZWFzaW5nO1xuZXhwb3J0cy50cmFuc2Zvcm1lcnMgPSBfdHJhbnNmb3JtZXJzO1xuZXhwb3J0cy52YWx1ZVR5cGVzID0gX3ZhbHVlVHlwZXM7XG5cbi8vIEFjdGlvbnNcblxuZXhwb3J0cy5BY3Rpb24gPSBfYWN0aW9uczIuZGVmYXVsdDtcbmV4cG9ydHMuYmxlbmRUd2VlbnMgPSBfYmxlbmRUd2VlbnMzLmRlZmF1bHQ7XG5leHBvcnRzLmNoYWluID0gX2NoYWluMy5kZWZhdWx0O1xuZXhwb3J0cy5jb21wb3NpdGUgPSBfY29tcG9zaXRlMy5kZWZhdWx0O1xuZXhwb3J0cy5jcm9zc0ZhZGUgPSBfY3Jvc3NGYWRlMy5kZWZhdWx0O1xuZXhwb3J0cy5kZWxheSA9IF9kZWxheTMuZGVmYXVsdDtcbmV4cG9ydHMucGFyYWxsZWwgPSBfcGFyYWxsZWwzLmRlZmF1bHQ7XG5leHBvcnRzLnBoeXNpY3MgPSBfcGh5c2ljczMuZGVmYXVsdDtcbmV4cG9ydHMucG9pbnRlciA9IF9wb2ludGVyMy5kZWZhdWx0O1xuZXhwb3J0cy50d2VlbiA9IF90d2VlbjMuZGVmYXVsdDtcbmV4cG9ydHMudHJhY2sgPSBfdHJhY2szLmRlZmF1bHQ7XG5leHBvcnRzLnN0YWdnZXIgPSBfc3RhZ2dlcjMuZGVmYXVsdDtcbmV4cG9ydHMudmFsdWUgPSBfdmFsdWUzLmRlZmF1bHQ7XG5cbi8vIFJlbmRlcmVyc1xuXG5leHBvcnRzLlJlbmRlcmVyID0gX3JlbmRlcmVyczIuZGVmYXVsdDtcbmV4cG9ydHMuY3NzID0gX2NzczMuZGVmYXVsdDtcbmV4cG9ydHMuc3ZnID0gX3N2ZzMuZGVmYXVsdDtcbmV4cG9ydHMuc3ZnUGF0aCA9IF9zdmdQYXRoMy5kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl3YjNCdGIzUnBiMjR1YW5NaVhTd2libUZ0WlhNaU9sc2liMjVHY21GdFpWTjBZWEowSWl3aWIyNUdjbUZ0WlZWd1pHRjBaU0lzSW05dVJuSmhiV1ZTWlc1a1pYSWlMQ0p2YmtaeVlXMWxSVzVrSWl3aVkyRnVZMlZzVDI1R2NtRnRaVk4wWVhKMElpd2lZMkZ1WTJWc1QyNUdjbUZ0WlZWd1pHRjBaU0lzSW1OaGJtTmxiRTl1Um5KaGJXVlNaVzVrWlhJaUxDSmpZVzVqWld4UGJrWnlZVzFsUlc1a0lpd2lkR2x0WlZOcGJtTmxUR0Z6ZEVaeVlXMWxJaXdpWTNWeWNtVnVkRVp5WVcxbFZHbHRaWE4wWVcxd0lpd2laV0Z6YVc1bklpd2lkSEpoYm5ObWIzSnRaWEp6SWl3aWRtRnNkV1ZVZVhCbGN5SXNJa0ZqZEdsdmJpSXNJbUpzWlc1a1ZIZGxaVzV6SWl3aVkyaGhhVzRpTENKamIyMXdiM05wZEdVaUxDSmpjbTl6YzBaaFpHVWlMQ0prWld4aGVTSXNJbkJoY21Gc2JHVnNJaXdpY0doNWMybGpjeUlzSW5CdmFXNTBaWElpTENKMGQyVmxiaUlzSW5SeVlXTnJJaXdpYzNSaFoyZGxjaUlzSW5aaGJIVmxJaXdpVW1WdVpHVnlaWElpTENKamMzTWlMQ0p6ZG1jaUxDSnpkbWRRWVhSb0lsMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3TzNOQ1FVVkZRU3haT3pzN096czdjMEpCUTBGRExHRTdPenM3T3p0elFrRkRRVU1zWVRzN096czdPM05DUVVOQlF5eFZPenM3T3pzN2MwSkJRMEZETEd0Q096czdPenM3YzBKQlEwRkRMRzFDT3pzN096czdjMEpCUTBGRExHMUNPenM3T3pzN2MwSkJRMEZETEdkQ096czdPenM3YzBKQlEwRkRMR3RDT3pzN096czdjMEpCUTBGRExIRkNPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN08xRkJSMVZETEUwN1VVRkRRVU1zV1R0UlFVTkJReXhWT3p0QlFVVmFPenRSUVVOUFF5eE5PMUZCUTBGRExGYzdVVUZEUVVNc1N6dFJRVU5CUXl4VE8xRkJRMEZETEZNN1VVRkRRVU1zU3p0UlFVTkJReXhSTzFGQlEwRkRMRTg3VVVGRFFVTXNUenRSUVVOQlF5eExPMUZCUTBGRExFczdVVUZEUVVNc1R6dFJRVU5CUXl4TE96dEJRVVZRT3p0UlFVTlBReXhSTzFGQlEwRkRMRWM3VVVGRFFVTXNSenRSUVVOQlF5eFBJaXdpWm1sc1pTSTZJbkJ2Y0cxdmRHbHZiaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0YwZEhCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaTh2SUVaeVlXMWxjM2x1WXlCelkyaGxaSFZzWlhKelhHNWxlSEJ2Y25RZ2UxeHVJQ0J2YmtaeVlXMWxVM1JoY25Rc1hHNGdJRzl1Um5KaGJXVlZjR1JoZEdVc1hHNGdJRzl1Um5KaGJXVlNaVzVrWlhJc1hHNGdJRzl1Um5KaGJXVkZibVFzWEc0Z0lHTmhibU5sYkU5dVJuSmhiV1ZUZEdGeWRDeGNiaUFnWTJGdVkyVnNUMjVHY21GdFpWVndaR0YwWlN4Y2JpQWdZMkZ1WTJWc1QyNUdjbUZ0WlZKbGJtUmxjaXhjYmlBZ1kyRnVZMlZzVDI1R2NtRnRaVVZ1WkN4Y2JpQWdkR2x0WlZOcGJtTmxUR0Z6ZEVaeVlXMWxMRnh1SUNCamRYSnlaVzUwUm5KaGJXVlVhVzFsYzNSaGJYQmNibjBnWm5KdmJTQW5MaTltY21GdFpYTjVibU1uTzF4dVhHNWxlSEJ2Y25RZ0tpQmhjeUJsWVhOcGJtY2dabkp2YlNBbkxpOXBibU12WldGemFXNW5KenRjYm1WNGNHOXlkQ0FxSUdGeklIUnlZVzV6Wm05eWJXVnljeUJtY205dElDY3VMMmx1WXk5MGNtRnVjMlp2Y20xbGNuTW5PMXh1Wlhod2IzSjBJQ29nWVhNZ2RtRnNkV1ZVZVhCbGN5Qm1jbTl0SUNjdUwybHVZeTkyWVd4MVpTMTBlWEJsY3ljN1hHNWNiaTh2SUVGamRHbHZibk5jYm1WNGNHOXlkQ0JCWTNScGIyNGdabkp2YlNBbkxpOWhZM1JwYjI1ekp6dGNibVY0Y0c5eWRDQmliR1Z1WkZSM1pXVnVjeUJtY205dElDY3VMMkZqZEdsdmJuTXZZbXhsYm1RdGRIZGxaVzV6Snp0Y2JtVjRjRzl5ZENCamFHRnBiaUJtY205dElDY3VMMkZqZEdsdmJuTXZZMmhoYVc0bk8xeHVaWGh3YjNKMElHTnZiWEJ2YzJsMFpTQm1jbTl0SUNjdUwyRmpkR2x2Ym5NdlkyOXRjRzl6YVhSbEp6dGNibVY0Y0c5eWRDQmpjbTl6YzBaaFpHVWdabkp2YlNBbkxpOWhZM1JwYjI1ekwyTnliM056TFdaaFpHVW5PMXh1Wlhod2IzSjBJR1JsYkdGNUlHWnliMjBnSnk0dllXTjBhVzl1Y3k5a1pXeGhlU2M3WEc1bGVIQnZjblFnY0dGeVlXeHNaV3dnWm5KdmJTQW5MaTloWTNScGIyNXpMM0JoY21Gc2JHVnNKenRjYm1WNGNHOXlkQ0J3YUhsemFXTnpJR1p5YjIwZ0p5NHZZV04wYVc5dWN5OXdhSGx6YVdOekp6dGNibVY0Y0c5eWRDQndiMmx1ZEdWeUlHWnliMjBnSnk0dllXTjBhVzl1Y3k5d2IybHVkR1Z5Snp0Y2JtVjRjRzl5ZENCMGQyVmxiaUJtY205dElDY3VMMkZqZEdsdmJuTXZkSGRsWlc0bk8xeHVaWGh3YjNKMElIUnlZV05ySUdaeWIyMGdKeTR2WVdOMGFXOXVjeTkwY21GamF5YzdYRzVsZUhCdmNuUWdjM1JoWjJkbGNpQm1jbTl0SUNjdUwyRmpkR2x2Ym5NdmMzUmhaMmRsY2ljN1hHNWxlSEJ2Y25RZ2RtRnNkV1VnWm5KdmJTQW5MaTloWTNScGIyNXpMM1poYkhWbEp6dGNibHh1THk4Z1VtVnVaR1Z5WlhKelhHNWxlSEJ2Y25RZ1VtVnVaR1Z5WlhJZ1puSnZiU0FuTGk5eVpXNWtaWEpsY25Nbk8xeHVaWGh3YjNKMElHTnpjeUJtY205dElDY3VMM0psYm1SbGNtVnljeTlqYzNNbk8xeHVaWGh3YjNKMElITjJaeUJtY205dElDY3VMM0psYm1SbGNtVnljeTl6ZG1jbk8xeHVaWGh3YjNKMElITjJaMUJoZEdnZ1puSnZiU0FuTGk5eVpXNWtaWEpsY25NdmMzWm5MWEJoZEdnbk8xeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9wb3Btb3Rpb24uanNcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBERUZBVUxUX09WRVJTSE9PVF9TVFJFTkdUSCA9IDEuNTI1O1xuXG52YXIgY3JlYXRlUmV2ZXJzZWRFYXNpbmcgPSBleHBvcnRzLmNyZWF0ZVJldmVyc2VkRWFzaW5nID0gZnVuY3Rpb24gKGVhc2luZykge1xuICByZXR1cm4gZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gMSAtIGVhc2luZygxIC0gcCk7XG4gIH07XG59O1xudmFyIGNyZWF0ZU1pcnJvcmVkRWFzaW5nID0gZXhwb3J0cy5jcmVhdGVNaXJyb3JlZEVhc2luZyA9IGZ1bmN0aW9uIChlYXNpbmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIHAgPD0gMC41ID8gZWFzaW5nKDIgKiBwKSAvIDIgOiAoMiAtIGVhc2luZygyICogKDEgLSBwKSkpIC8gMjtcbiAgfTtcbn07XG5cbnZhciBsaW5lYXIgPSBleHBvcnRzLmxpbmVhciA9IGZ1bmN0aW9uIChwKSB7XG4gIHJldHVybiBwO1xufTtcblxudmFyIGNyZWF0ZUVhc2VJbiA9IGV4cG9ydHMuY3JlYXRlRWFzZUluID0gZnVuY3Rpb24gKHBvd2VyKSB7XG4gIHJldHVybiBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiBNYXRoLnBvdyhwLCBwb3dlcik7XG4gIH07XG59O1xudmFyIGVhc2VJbiA9IGV4cG9ydHMuZWFzZUluID0gY3JlYXRlRWFzZUluKDIpO1xudmFyIGVhc2VPdXQgPSBleHBvcnRzLmVhc2VPdXQgPSBjcmVhdGVSZXZlcnNlZEVhc2luZyhlYXNlSW4pO1xudmFyIGVhc2VJbk91dCA9IGV4cG9ydHMuZWFzZUluT3V0ID0gY3JlYXRlTWlycm9yZWRFYXNpbmcoZWFzZUluKTtcblxudmFyIGNpcmNJbiA9IGV4cG9ydHMuY2lyY0luID0gZnVuY3Rpb24gKHApIHtcbiAgcmV0dXJuIDEgLSBNYXRoLnNpbihNYXRoLmFjb3MocCkpO1xufTtcbnZhciBjaXJjT3V0ID0gZXhwb3J0cy5jaXJjT3V0ID0gY3JlYXRlUmV2ZXJzZWRFYXNpbmcoY2lyY0luKTtcbnZhciBjaXJjSW5PdXQgPSBleHBvcnRzLmNpcmNJbk91dCA9IGNyZWF0ZU1pcnJvcmVkRWFzaW5nKGNpcmNPdXQpO1xuXG52YXIgY3JlYXRlQmFja0luID0gZXhwb3J0cy5jcmVhdGVCYWNrSW4gPSBmdW5jdGlvbiAocG93ZXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIHAgKiBwICogKChwb3dlciArIDEpICogcCAtIHBvd2VyKTtcbiAgfTtcbn07XG52YXIgYmFja0luID0gZXhwb3J0cy5iYWNrSW4gPSBjcmVhdGVCYWNrSW4oREVGQVVMVF9PVkVSU0hPT1RfU1RSRU5HVEgpO1xudmFyIGJhY2tPdXQgPSBleHBvcnRzLmJhY2tPdXQgPSBjcmVhdGVSZXZlcnNlZEVhc2luZyhiYWNrSW4pO1xudmFyIGJhY2tJbk91dCA9IGV4cG9ydHMuYmFja0luT3V0ID0gY3JlYXRlTWlycm9yZWRFYXNpbmcoYmFja0luKTtcblxudmFyIGNyZWF0ZUFudGljaXBhdGVFYXNpbmcgPSBleHBvcnRzLmNyZWF0ZUFudGljaXBhdGVFYXNpbmcgPSBmdW5jdGlvbiAocG93ZXIpIHtcbiAgdmFyIGJhY2tFYXNpbmcgPSBjcmVhdGVCYWNrSW4ocG93ZXIpO1xuICByZXR1cm4gZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gKHAgKj0gMikgPCAxID8gMC41ICogYmFja0Vhc2luZyhwKSA6IDAuNSAqICgyIC0gTWF0aC5wb3coMiwgLTEwICogKHAgLSAxKSkpO1xuICB9O1xufTtcblxudmFyIGFudGljaXBhdGUgPSBleHBvcnRzLmFudGljaXBhdGUgPSBjcmVhdGVBbnRpY2lwYXRlRWFzaW5nKERFRkFVTFRfT1ZFUlNIT09UX1NUUkVOR1RIKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJtTXZaV0Z6YVc1bkxtcHpJbDBzSW01aGJXVnpJanBiSWtSRlJrRlZURlJmVDFaRlVsTklUMDlVWDFOVVVrVk9SMVJJSWl3aVkzSmxZWFJsVW1WMlpYSnpaV1JGWVhOcGJtY2lMQ0psWVhOcGJtY2lMQ0p3SWl3aVkzSmxZWFJsVFdseWNtOXlaV1JGWVhOcGJtY2lMQ0pzYVc1bFlYSWlMQ0pqY21WaGRHVkZZWE5sU1c0aUxDSndiM2RsY2lJc0ltVmhjMlZKYmlJc0ltVmhjMlZQZFhRaUxDSmxZWE5sU1c1UGRYUWlMQ0pqYVhKalNXNGlMQ0pOWVhSb0lpd2ljMmx1SWl3aVlXTnZjeUlzSW1OcGNtTlBkWFFpTENKamFYSmpTVzVQZFhRaUxDSmpjbVZoZEdWQ1lXTnJTVzRpTENKaVlXTnJTVzRpTENKaVlXTnJUM1YwSWl3aVltRmphMGx1VDNWMElpd2lZM0psWVhSbFFXNTBhV05wY0dGMFpVVmhjMmx1WnlJc0ltSmhZMnRGWVhOcGJtY2lMQ0p3YjNjaUxDSmhiblJwWTJsd1lYUmxJbDBzSW0xaGNIQnBibWR6SWpvaU96czdRVUZCUVN4SlFVRk5RU3cyUWtGQk5rSXNTMEZCYmtNN08wRkJSVThzU1VGQlRVTXNjMFJCUVhWQ0xGVkJRVU5ETEUxQlFVUTdRVUZCUVN4VFFVRlpMRlZCUVVORExFTkJRVVE3UVVGQlFTeFhRVUZQTEVsQlFVbEVMRTlCUVU4c1NVRkJTVU1zUTBGQldDeERRVUZZTzBGQlFVRXNSMEZCV2p0QlFVRkJMRU5CUVRkQ08wRkJRMEVzU1VGQlRVTXNjMFJCUVhWQ0xGVkJRVU5HTEUxQlFVUTdRVUZCUVN4VFFVRlpMRlZCUVVORExFTkJRVVE3UVVGQlFTeFhRVUZSUVN4TFFVRkxMRWRCUVU0c1IwRkJZVVFzVDBGQlR5eEpRVUZKUXl4RFFVRllMRWxCUVdkQ0xFTkJRVGRDTEVkQlFXbERMRU5CUVVNc1NVRkJTVVFzVDBGQlR5eExRVUZMTEVsQlFVbERMRU5CUVZRc1EwRkJVQ3hEUVVGTUxFbEJRVFJDTEVOQlFYQkZPMEZCUVVFc1IwRkJXanRCUVVGQkxFTkJRVGRDT3p0QlFVVkJMRWxCUVUxRkxEQkNRVUZUTEZWQlFVTkdMRU5CUVVRN1FVRkJRU3hUUVVGUFFTeERRVUZRTzBGQlFVRXNRMEZCWmpzN1FVRkZRU3hKUVVGTlJ5eHpRMEZCWlN4VlFVRkRReXhMUVVGRU8wRkJRVUVzVTBGQlZ5eFZRVUZEU2l4RFFVRkVPMEZCUVVFc2IwSkJRVTlCTEVOQlFWQXNSVUZCV1Vrc1MwRkJXanRCUVVGQkxFZEJRVmc3UVVGQlFTeERRVUZ5UWp0QlFVTkJMRWxCUVUxRExEQkNRVUZUUml4aFFVRmhMRU5CUVdJc1EwRkJaanRCUVVOQkxFbEJRVTFITERSQ1FVRlZVaXh4UWtGQmNVSlBMRTFCUVhKQ0xFTkJRV2hDTzBGQlEwRXNTVUZCVFVVc1owTkJRVmxPTEhGQ1FVRnhRa2tzVFVGQmNrSXNRMEZCYkVJN08wRkJSVUVzU1VGQlRVY3NNRUpCUVZNc1ZVRkJRMUlzUTBGQlJEdEJRVUZCTEZOQlFVOHNTVUZCU1ZNc1MwRkJTME1zUjBGQlRDeERRVUZUUkN4TFFVRkxSU3hKUVVGTUxFTkJRVlZZTEVOQlFWWXNRMEZCVkN4RFFVRllPMEZCUVVFc1EwRkJaanRCUVVOQkxFbEJRVTFaTERSQ1FVRlZaQ3h4UWtGQmNVSlZMRTFCUVhKQ0xFTkJRV2hDTzBGQlEwRXNTVUZCVFVzc1owTkJRVmxhTEhGQ1FVRnhRbGNzVDBGQmNrSXNRMEZCYkVJN08wRkJSVUVzU1VGQlRVVXNjME5CUVdVc1ZVRkJRMVlzUzBGQlJEdEJRVUZCTEZOQlFWY3NWVUZCUTBvc1EwRkJSRHRCUVVGQkxGZEJRVkZCTEVsQlFVbEJMRU5CUVV3c1NVRkJWeXhEUVVGRFNTeFJRVUZSTEVOQlFWUXNTVUZCWTBvc1EwRkJaQ3hIUVVGclFra3NTMEZCTjBJc1EwRkJVRHRCUVVGQkxFZEJRVmc3UVVGQlFTeERRVUZ5UWp0QlFVTkJMRWxCUVUxWExEQkNRVUZUUkN4aFFVRmhha0lzTUVKQlFXSXNRMEZCWmp0QlFVTkJMRWxCUVUxdFFpdzBRa0ZCVld4Q0xIRkNRVUZ4UW1sQ0xFMUJRWEpDTEVOQlFXaENPMEZCUTBFc1NVRkJUVVVzWjBOQlFWbG9RaXh4UWtGQmNVSmpMRTFCUVhKQ0xFTkJRV3hDT3p0QlFVVkJMRWxCUVUxSExEQkVRVUY1UWl4VlFVRkRaQ3hMUVVGRUxFVkJRVmM3UVVGREwwTXNUVUZCVFdVc1lVRkJZVXdzWVVGQllWWXNTMEZCWWl4RFFVRnVRanRCUVVOQkxGTkJRVThzVlVGQlEwb3NRMEZCUkR0QlFVRkJMRmRCUVZFc1EwRkJRMEVzUzBGQlN5eERRVUZPTEVsQlFWY3NRMEZCV2l4SFFVRnBRaXhOUVVGTmJVSXNWMEZCVjI1Q0xFTkJRVmdzUTBGQmRrSXNSMEZCZFVNc1QwRkJUeXhKUVVGSlV5eExRVUZMVnl4SFFVRk1MRU5CUVZNc1EwRkJWQ3hGUVVGWkxFTkJRVU1zUlVGQlJDeEpRVUZQY0VJc1NVRkJTU3hEUVVGWUxFTkJRVm9zUTBGQldDeERRVUU1UXp0QlFVRkJMRWRCUVZBN1FVRkRSQ3hEUVVoTk96dEJRVXRCTEVsQlFVMXhRaXhyUTBGQllVZ3NkVUpCUVhWQ2NrSXNNRUpCUVhaQ0xFTkJRVzVDSWl3aVptbHNaU0k2SW1WaGMybHVaeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0YwZEhCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbU52Ym5OMElFUkZSa0ZWVEZSZlQxWkZVbE5JVDA5VVgxTlVVa1ZPUjFSSUlEMGdNUzQxTWpVN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCamNtVmhkR1ZTWlhabGNuTmxaRVZoYzJsdVp5QTlJQ2hsWVhOcGJtY3BJRDArSUNod0tTQTlQaUF4SUMwZ1pXRnphVzVuS0RFZ0xTQndLVHRjYm1WNGNHOXlkQ0JqYjI1emRDQmpjbVZoZEdWTmFYSnliM0psWkVWaGMybHVaeUE5SUNobFlYTnBibWNwSUQwK0lDaHdLU0E5UGlBb2NDQThQU0F3TGpVcElEOGdaV0Z6YVc1bktESWdLaUJ3S1NBdklESWdPaUFvTWlBdElHVmhjMmx1WnlneUlDb2dLREVnTFNCd0tTa3BJQzhnTWp0Y2JseHVaWGh3YjNKMElHTnZibk4wSUd4cGJtVmhjaUE5SUNod0tTQTlQaUJ3TzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnWTNKbFlYUmxSV0Z6WlVsdUlEMGdLSEJ2ZDJWeUtTQTlQaUFvY0NrZ1BUNGdjQ0FxS2lCd2IzZGxjanRjYm1WNGNHOXlkQ0JqYjI1emRDQmxZWE5sU1c0Z1BTQmpjbVZoZEdWRllYTmxTVzRvTWlrN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnWldGelpVOTFkQ0E5SUdOeVpXRjBaVkpsZG1WeWMyVmtSV0Z6YVc1bktHVmhjMlZKYmlrN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnWldGelpVbHVUM1YwSUQwZ1kzSmxZWFJsVFdseWNtOXlaV1JGWVhOcGJtY29aV0Z6WlVsdUtUdGNibHh1Wlhod2IzSjBJR052Ym5OMElHTnBjbU5KYmlBOUlDaHdLU0E5UGlBeElDMGdUV0YwYUM1emFXNG9UV0YwYUM1aFkyOXpLSEFwS1R0Y2JtVjRjRzl5ZENCamIyNXpkQ0JqYVhKalQzVjBJRDBnWTNKbFlYUmxVbVYyWlhKelpXUkZZWE5wYm1jb1kybHlZMGx1S1R0Y2JtVjRjRzl5ZENCamIyNXpkQ0JqYVhKalNXNVBkWFFnUFNCamNtVmhkR1ZOYVhKeWIzSmxaRVZoYzJsdVp5aGphWEpqVDNWMEtUdGNibHh1Wlhod2IzSjBJR052Ym5OMElHTnlaV0YwWlVKaFkydEpiaUE5SUNod2IzZGxjaWtnUFQ0Z0tIQXBJRDArSUNod0lDb2djQ2tnS2lBb0tIQnZkMlZ5SUNzZ01Ta2dLaUJ3SUMwZ2NHOTNaWElwTzF4dVpYaHdiM0owSUdOdmJuTjBJR0poWTJ0SmJpQTlJR055WldGMFpVSmhZMnRKYmloRVJVWkJWVXhVWDA5V1JWSlRTRTlQVkY5VFZGSkZUa2RVU0NrN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnWW1GamEwOTFkQ0E5SUdOeVpXRjBaVkpsZG1WeWMyVmtSV0Z6YVc1bktHSmhZMnRKYmlrN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnWW1GamEwbHVUM1YwSUQwZ1kzSmxZWFJsVFdseWNtOXlaV1JGWVhOcGJtY29ZbUZqYTBsdUtUdGNibHh1Wlhod2IzSjBJR052Ym5OMElHTnlaV0YwWlVGdWRHbGphWEJoZEdWRllYTnBibWNnUFNBb2NHOTNaWElwSUQwK0lIdGNiaUFnWTI5dWMzUWdZbUZqYTBWaGMybHVaeUE5SUdOeVpXRjBaVUpoWTJ0SmJpaHdiM2RsY2lrN1hHNGdJSEpsZEhWeWJpQW9jQ2tnUFQ0Z0tDaHdJQ285SURJcElEd2dNU2tnUHlBd0xqVWdLaUJpWVdOclJXRnphVzVuS0hBcElEb2dNQzQxSUNvZ0tESWdMU0JOWVhSb0xuQnZkeWd5TENBdE1UQWdLaUFvY0NBdElERXBLU2s3WEc1OU8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ1lXNTBhV05wY0dGMFpTQTlJR055WldGMFpVRnVkR2xqYVhCaGRHVkZZWE5wYm1jb1JFVkdRVlZNVkY5UFZrVlNVMGhQVDFSZlUxUlNSVTVIVkVncE8xeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvZWFzaW5nLmpzXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy50cmFuc2Zvcm1DaGlsZFZhbHVlcyA9IGV4cG9ydHMuc3RlcHMgPSBleHBvcnRzLmludGVycG9sYXRlID0gZXhwb3J0cy5mbG93ID0gZXhwb3J0cy5jbGFtcCA9IGV4cG9ydHMuY2xhbXBNaW4gPSBleHBvcnRzLmNsYW1wTWF4ID0gZXhwb3J0cy5hcHBlbmRVbml0ID0gdW5kZWZpbmVkO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuL2NhbGMnKTtcblxuLyoqXG4gKiBBcHBlbmQgVW5pdFxuICogQSBmdW5jdGlvbiB0aGF0IHdpbGwgYXBwZW5kXG4gKiBhcHBlbmRVbml0KCdweCcsIDIwKSAtPiAnMjBweCdcbiAqIEBwYXJhbSAge3N0cmluZ30gdW5pdClcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xudmFyIGFwcGVuZFVuaXQgPSBleHBvcnRzLmFwcGVuZFVuaXQgPSBmdW5jdGlvbiAodW5pdCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gJycgKyB2ICsgdW5pdDtcbiAgfTtcbn07XG5cbi8qKlxuICogQ2xhbXAgdmFsdWUgYmV0d2VlblxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCByZXN0cmljdCBhIGdpdmVuIHZhbHVlIGJldHdlZW4gYG1pbmAgYW5kIGBtYXhgXG4gKiBAcGFyYW0gIHtudW1iZXJ9IG1pblxuICogQHBhcmFtICB7bnVtYmVyfSBtYXhcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xudmFyIGNsYW1wTWF4ID0gZXhwb3J0cy5jbGFtcE1heCA9IGZ1bmN0aW9uIChtYXgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIE1hdGgubWluKHYsIG1heCk7XG4gIH07XG59O1xudmFyIGNsYW1wTWluID0gZXhwb3J0cy5jbGFtcE1pbiA9IGZ1bmN0aW9uIChtaW4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIE1hdGgubWF4KHYsIG1pbik7XG4gIH07XG59O1xudmFyIGNsYW1wID0gZXhwb3J0cy5jbGFtcCA9IGZ1bmN0aW9uIChtaW4sIG1heCkge1xuICByZXR1cm4gZmxvdyhjbGFtcE1pbihtaW4pLCBjbGFtcE1heChtYXgpKTtcbn07XG5cbi8qKlxuICogRmxvd1xuICogQ29tcG9zZSBvdGhlciB0cmFuc2Zvcm1lcnMgdG8gcnVuIGxpbmVhcmlseVxuICogZmxvdyhtaW4oMjApLCBtYXgoNDApKVxuICogQHBhcmFtICB7Li4uZnVuY3Rpb25zfSB0cmFuc2Zvcm1lcnNcbiAqIEByZXR1cm4ge2Z1bmN0aW9ufVxuICovXG52YXIgZmxvdyA9IGV4cG9ydHMuZmxvdyA9IGZ1bmN0aW9uICgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHRyYW5zZm9ybWVycyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHRyYW5zZm9ybWVyc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHZhciBudW1UcmFuc2Zvcm1lcnMgPSB0cmFuc2Zvcm1lcnMubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChhY2MpIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHZhciB2ID0gYWNjO1xuICAgIGZvciAoaSA9IDA7IGkgPCBudW1UcmFuc2Zvcm1lcnM7IGkrKykge1xuICAgICAgdiA9IHRyYW5zZm9ybWVyc1tpXS5hcHBseSh0cmFuc2Zvcm1lcnMsIFt2XS5jb25jYXQoYXJncykpO1xuICAgIH1cblxuICAgIHJldHVybiB2O1xuICB9O1xufTtcblxudmFyIGludGVycG9sYXRlID0gZXhwb3J0cy5pbnRlcnBvbGF0ZSA9IGZ1bmN0aW9uIChpbnB1dCwgb3V0cHV0LCByYW5nZUVhc2luZykge1xuICB2YXIgcmFuZ2VMZW5ndGggPSBpbnB1dC5sZW5ndGg7XG4gIHZhciBmaW5hbEluZGV4ID0gcmFuZ2VMZW5ndGggLSAxO1xuXG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIC8vIElmIHZhbHVlIG91dHNpZGUgbWluaW11bSByYW5nZSwgcXVpY2tseSByZXR1cm5cbiAgICBpZiAodiA8PSBpbnB1dFswXSkge1xuICAgICAgcmV0dXJuIG91dHB1dFswXTtcbiAgICB9XG5cbiAgICAvLyBJZiB2YWx1ZSBvdXRzaWRlIG1heGltdW0gcmFuZ2UsIHF1aWNrbHkgcmV0dXJuXG4gICAgaWYgKHYgPj0gaW5wdXRbZmluYWxJbmRleF0pIHtcbiAgICAgIHJldHVybiBvdXRwdXRbZmluYWxJbmRleF07XG4gICAgfVxuXG4gICAgdmFyIGkgPSAxO1xuXG4gICAgLy8gRmluZCBpbmRleCBvZiByYW5nZSBzdGFydFxuICAgIGZvciAoOyBpIDwgcmFuZ2VMZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGlucHV0W2ldID4gdiB8fCBpID09PSBmaW5hbEluZGV4KSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcm9ncmVzc0luUmFuZ2UgPSAoMCwgX2NhbGMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUpKGlucHV0W2kgLSAxXSwgaW5wdXRbaV0sIHYpO1xuICAgIHZhciBlYXNlZFByb2dyZXNzID0gcmFuZ2VFYXNpbmcgPyByYW5nZUVhc2luZ1tpXShwcm9ncmVzc0luUmFuZ2UpIDogcHJvZ3Jlc3NJblJhbmdlO1xuICAgIHJldHVybiAoMCwgX2NhbGMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MpKG91dHB1dFtpIC0gMV0sIG91dHB1dFtpXSwgZWFzZWRQcm9ncmVzcyk7XG4gIH07XG59O1xuXG52YXIgc3RlcHMgPSBleHBvcnRzLnN0ZXBzID0gZnVuY3Rpb24gKHN0ZXBzLCBtaW4sIG1heCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICB2YXIgcHJvZ3Jlc3MgPSAoMCwgX2NhbGMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUpKG1pbiwgbWF4LCB2KTtcbiAgICByZXR1cm4gKDAsIF9jYWxjLnN0ZXBQcm9ncmVzcykoc3RlcHMsIHByb2dyZXNzKTtcbiAgfTtcbn07XG5cbnZhciB0cmFuc2Zvcm1DaGlsZFZhbHVlcyA9IGV4cG9ydHMudHJhbnNmb3JtQ2hpbGRWYWx1ZXMgPSBmdW5jdGlvbiAoY2hpbGRUcmFuc2Zvcm1lcnMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgZm9yICh2YXIga2V5IGluIHYpIHtcbiAgICAgIHZhciBjaGlsZFRyYW5zZm9ybWVyID0gY2hpbGRUcmFuc2Zvcm1lcnNba2V5XTtcbiAgICAgIGlmIChjaGlsZFRyYW5zZm9ybWVyKSB7XG4gICAgICAgIHZba2V5XSA9IGNoaWxkVHJhbnNmb3JtZXIodltrZXldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdjtcbiAgfTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12ZEhKaGJuTm1iM0p0WlhKekxtcHpJbDBzSW01aGJXVnpJanBiSW1Gd2NHVnVaRlZ1YVhRaUxDSjFibWwwSWl3aWRpSXNJbU5zWVcxd1RXRjRJaXdpYldGNElpd2lUV0YwYUNJc0ltMXBiaUlzSW1Oc1lXMXdUV2x1SWl3aVkyeGhiWEFpTENKbWJHOTNJaXdpZEhKaGJuTm1iM0p0WlhKeklpd2liblZ0VkhKaGJuTm1iM0p0WlhKeklpd2liR1Z1WjNSb0lpd2lhU0lzSW1Gall5SXNJbUZ5WjNNaUxDSnBiblJsY25CdmJHRjBaU0lzSW1sdWNIVjBJaXdpYjNWMGNIVjBJaXdpY21GdVoyVkZZWE5wYm1jaUxDSnlZVzVuWlV4bGJtZDBhQ0lzSW1acGJtRnNTVzVrWlhnaUxDSndjbTluY21WemMwbHVVbUZ1WjJVaUxDSmxZWE5sWkZCeWIyZHlaWE56SWl3aWMzUmxjSE1pTENKd2NtOW5jbVZ6Y3lJc0luUnlZVzV6Wm05eWJVTm9hV3hrVm1Gc2RXVnpJaXdpWTJocGJHUlVjbUZ1YzJadmNtMWxjbk1pTENKclpYa2lMQ0pqYUdsc1pGUnlZVzV6Wm05eWJXVnlJbDBzSW0xaGNIQnBibWR6SWpvaU96czdPenRCUVVGQk96dEJRVVZCT3pzN096czdPMEZCVDA4c1NVRkJUVUVzYTBOQlFXRXNWVUZCUTBNc1NVRkJSRHRCUVVGQkxGTkJRVlVzVlVGQlEwTXNRMEZCUkR0QlFVRkJMR2RDUVVGVlFTeERRVUZXTEVkQlFXTkVMRWxCUVdRN1FVRkJRU3hIUVVGV08wRkJRVUVzUTBGQmJrSTdPMEZCUlZBN096czdPenM3UVVGUFR5eEpRVUZOUlN3NFFrRkJWeXhWUVVGRFF5eEhRVUZFTzBGQlFVRXNVMEZCVXl4VlFVRkRSaXhEUVVGRU8wRkJRVUVzVjBGQlQwY3NTMEZCUzBNc1IwRkJUQ3hEUVVGVFNpeERRVUZVTEVWQlFWbEZMRWRCUVZvc1EwRkJVRHRCUVVGQkxFZEJRVlE3UVVGQlFTeERRVUZxUWp0QlFVTkJMRWxCUVUxSExEaENRVUZYTEZWQlFVTkVMRWRCUVVRN1FVRkJRU3hUUVVGVExGVkJRVU5LTEVOQlFVUTdRVUZCUVN4WFFVRlBSeXhMUVVGTFJDeEhRVUZNTEVOQlFWTkdMRU5CUVZRc1JVRkJXVWtzUjBGQldpeERRVUZRTzBGQlFVRXNSMEZCVkR0QlFVRkJMRU5CUVdwQ08wRkJRMEVzU1VGQlRVVXNkMEpCUVZFc1ZVRkJRMFlzUjBGQlJDeEZRVUZOUml4SFFVRk9PMEZCUVVFc1UwRkJZMHNzUzBGQlMwWXNVMEZCVTBRc1IwRkJWQ3hEUVVGTUxFVkJRVzlDU0N4VFFVRlRReXhIUVVGVUxFTkJRWEJDTEVOQlFXUTdRVUZCUVN4RFFVRmtPenRCUVVWUU96czdPenM3TzBGQlQwOHNTVUZCVFVzc2MwSkJRVThzV1VGQmNVSTdRVUZCUVN4dlEwRkJha0pETEZsQlFXbENPMEZCUVdwQ1FTeG5Ra0ZCYVVJN1FVRkJRVHM3UVVGRGRrTXNUVUZCVFVNc2EwSkJRV3RDUkN4aFFVRmhSU3hOUVVGeVF6dEJRVU5CTEUxQlFVbERMRWxCUVVrc1EwRkJVanM3UVVGRlFTeFRRVUZQTEZWQlFVTkRMRWRCUVVRc1JVRkJhMEk3UVVGQlFTeDFRMEZCVkVNc1NVRkJVenRCUVVGVVFTeFZRVUZUTzBGQlFVRTdPMEZCUTNaQ0xGRkJRVWxpTEVsQlFVbFpMRWRCUVZJN1FVRkRRU3hUUVVGTFJDeEpRVUZKTEVOQlFWUXNSVUZCV1VFc1NVRkJTVVlzWlVGQmFFSXNSVUZCYVVORkxFZEJRV3BETEVWQlFYTkRPMEZCUTNCRFdDeFZRVUZKVVN4aFFVRmhSeXhEUVVGaUxIVkNRVUZuUWxnc1EwRkJhRUlzVTBGQmMwSmhMRWxCUVhSQ0xFVkJRVW83UVVGRFJEczdRVUZGUkN4WFFVRlBZaXhEUVVGUU8wRkJRMFFzUjBGUVJEdEJRVkZFTEVOQldrMDdPMEZCWTBFc1NVRkJUV01zYjBOQlFXTXNWVUZCUTBNc1MwRkJSQ3hGUVVGUlF5eE5RVUZTTEVWQlFXZENReXhYUVVGb1FpeEZRVUZuUXp0QlFVTjZSQ3hOUVVGTlF5eGpRVUZqU0N4TlFVRk5UQ3hOUVVFeFFqdEJRVU5CTEUxQlFVMVRMR0ZCUVdGRUxHTkJRV01zUTBGQmFrTTdPMEZCUlVFc1UwRkJUeXhWUVVGRGJFSXNRMEZCUkN4RlFVRlBPMEZCUTFvN1FVRkRRU3hSUVVGSlFTeExRVUZMWlN4TlFVRk5MRU5CUVU0c1EwRkJWQ3hGUVVGdFFqdEJRVU5xUWl4aFFVRlBReXhQUVVGUExFTkJRVkFzUTBGQlVEdEJRVU5FT3p0QlFVVkVPMEZCUTBFc1VVRkJTV2hDTEV0QlFVdGxMRTFCUVUxSkxGVkJRVTRzUTBGQlZDeEZRVUUwUWp0QlFVTXhRaXhoUVVGUFNDeFBRVUZQUnl4VlFVRlFMRU5CUVZBN1FVRkRSRHM3UVVGRlJDeFJRVUZKVWl4SlFVRkpMRU5CUVZJN08wRkJSVUU3UVVGRFFTeFhRVUZQUVN4SlFVRkpUeXhYUVVGWUxFVkJRWGRDVUN4SFFVRjRRaXhGUVVFMlFqdEJRVU16UWl4VlFVRkpTU3hOUVVGTlNpeERRVUZPTEVsQlFWZFlMRU5CUVZnc1NVRkJaMEpYTEUxQlFVMVJMRlZCUVRGQ0xFVkJRWE5ETzBGQlEzQkRPMEZCUTBRN1FVRkRSanM3UVVGRlJDeFJRVUZOUXl4clFrRkJhMElzWjBOQlFYRkNUQ3hOUVVGTlNpeEpRVUZKTEVOQlFWWXNRMEZCY2tJc1JVRkJiVU5KTEUxQlFVMUtMRU5CUVU0c1EwRkJia01zUlVGQk5rTllMRU5CUVRkRExFTkJRWGhDTzBGQlEwRXNVVUZCVFhGQ0xHZENRVUZwUWtvc1YwRkJSQ3hIUVVGblFrRXNXVUZCV1U0c1EwRkJXaXhGUVVGbFV5eGxRVUZtTEVOQlFXaENMRWRCUVd0RVFTeGxRVUY0UlR0QlFVTkJMRmRCUVU4c1owTkJRWEZDU2l4UFFVRlBUQ3hKUVVGSkxFTkJRVmdzUTBGQmNrSXNSVUZCYjBOTExFOUJRVTlNTEVOQlFWQXNRMEZCY0VNc1JVRkJLME5WTEdGQlFTOURMRU5CUVZBN1FVRkRSQ3hIUVhaQ1JEdEJRWGRDUkN4RFFUVkNUVHM3UVVFNFFrRXNTVUZCVFVNc2QwSkJRVkVzVlVGQlEwRXNTMEZCUkN4RlFVRlJiRUlzUjBGQlVpeEZRVUZoUml4SFFVRmlPMEZCUVVFc1UwRkJjVUlzVlVGQlEwWXNRMEZCUkN4RlFVRlBPMEZCUXk5RExGRkJRVTExUWl4WFFVRlhMR2REUVVGeFFtNUNMRWRCUVhKQ0xFVkJRVEJDUml4SFFVRXhRaXhGUVVFclFrWXNRMEZCTDBJc1EwRkJha0k3UVVGRFFTeFhRVUZQTEhkQ1FVRmhjMElzUzBGQllpeEZRVUZ2UWtNc1VVRkJjRUlzUTBGQlVEdEJRVU5FTEVkQlNHOUNPMEZCUVVFc1EwRkJaRHM3UVVGTFFTeEpRVUZOUXl4elJFRkJkVUlzVlVGQlEwTXNhVUpCUVVRN1FVRkJRU3hUUVVGMVFpeFZRVUZEZWtJc1EwRkJSQ3hGUVVGUE8wRkJRMmhGTEZOQlFVc3NTVUZCU1RCQ0xFZEJRVlFzU1VGQlowSXhRaXhEUVVGb1FpeEZRVUZ0UWp0QlFVTnFRaXhWUVVGTk1rSXNiVUpCUVcxQ1JpeHJRa0ZCYTBKRExFZEJRV3hDTEVOQlFYcENPMEZCUTBFc1ZVRkJTVU1zWjBKQlFVb3NSVUZCYzBJN1FVRkRjRUl6UWl4VlFVRkZNRUlzUjBGQlJpeEpRVUZUUXl4cFFrRkJhVUl6UWl4RlFVRkZNRUlzUjBGQlJpeERRVUZxUWl4RFFVRlVPMEZCUTBRN1FVRkRSanM3UVVGRlJDeFhRVUZQTVVJc1EwRkJVRHRCUVVORUxFZEJWRzFETzBGQlFVRXNRMEZCTjBJaUxDSm1hV3hsSWpvaWRISmhibk5tYjNKdFpYSnpMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OXRZWFIwY0dWeWNua3ZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElIc2daMlYwVUhKdlozSmxjM05HY205dFZtRnNkV1VzSUdkbGRGWmhiSFZsUm5KdmJWQnliMmR5WlhOekxDQnpkR1Z3VUhKdlozSmxjM01nZlNCbWNtOXRJQ2N1TDJOaGJHTW5PMXh1WEc0dktpcGNiaUFxSUVGd2NHVnVaQ0JWYm1sMFhHNGdLaUJCSUdaMWJtTjBhVzl1SUhSb1lYUWdkMmxzYkNCaGNIQmxibVJjYmlBcUlHRndjR1Z1WkZWdWFYUW9KM0I0Snl3Z01qQXBJQzArSUNjeU1IQjRKMXh1SUNvZ1FIQmhjbUZ0SUNCN2MzUnlhVzVuZlNCMWJtbDBLVnh1SUNvZ1FISmxkSFZ5YmlCN2JuVnRZbVZ5ZlZ4dUlDb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ1lYQndaVzVrVlc1cGRDQTlJQ2gxYm1sMEtTQTlQaUFvZGlrZ1BUNGdZQ1I3ZG4wa2UzVnVhWFI5WUR0Y2JseHVMeW9xWEc0Z0tpQkRiR0Z0Y0NCMllXeDFaU0JpWlhSM1pXVnVYRzRnS2lCRGNtVmhkR1Z6SUdFZ1puVnVZM1JwYjI0Z2RHaGhkQ0IzYVd4c0lISmxjM1J5YVdOMElHRWdaMmwyWlc0Z2RtRnNkV1VnWW1WMGQyVmxiaUJnYldsdVlDQmhibVFnWUcxaGVHQmNiaUFxSUVCd1lYSmhiU0FnZTI1MWJXSmxjbjBnYldsdVhHNGdLaUJBY0dGeVlXMGdJSHR1ZFcxaVpYSjlJRzFoZUZ4dUlDb2dRSEpsZEhWeWJpQjdiblZ0WW1WeWZWeHVJQ292WEc1bGVIQnZjblFnWTI5dWMzUWdZMnhoYlhCTllYZ2dQU0FvYldGNEtTQTlQaUFvZGlrZ1BUNGdUV0YwYUM1dGFXNG9kaXdnYldGNEtUdGNibVY0Y0c5eWRDQmpiMjV6ZENCamJHRnRjRTFwYmlBOUlDaHRhVzRwSUQwK0lDaDJLU0E5UGlCTllYUm9MbTFoZUNoMkxDQnRhVzRwTzF4dVpYaHdiM0owSUdOdmJuTjBJR05zWVcxd0lEMGdLRzFwYml3Z2JXRjRLU0E5UGlCbWJHOTNLR05zWVcxd1RXbHVLRzFwYmlrc0lHTnNZVzF3VFdGNEtHMWhlQ2twTzF4dVhHNHZLaXBjYmlBcUlFWnNiM2RjYmlBcUlFTnZiWEJ2YzJVZ2IzUm9aWElnZEhKaGJuTm1iM0p0WlhKeklIUnZJSEoxYmlCc2FXNWxZWEpwYkhsY2JpQXFJR1pzYjNjb2JXbHVLREl3S1N3Z2JXRjRLRFF3S1NsY2JpQXFJRUJ3WVhKaGJTQWdleTR1TG1aMWJtTjBhVzl1YzMwZ2RISmhibk5tYjNKdFpYSnpYRzRnS2lCQWNtVjBkWEp1SUh0bWRXNWpkR2x2Ym4xY2JpQXFMMXh1Wlhod2IzSjBJR052Ym5OMElHWnNiM2NnUFNBb0xpNHVkSEpoYm5ObWIzSnRaWEp6S1NBOVBpQjdYRzRnSUdOdmJuTjBJRzUxYlZSeVlXNXpabTl5YldWeWN5QTlJSFJ5WVc1elptOXliV1Z5Y3k1c1pXNW5kR2c3WEc0Z0lHeGxkQ0JwSUQwZ01EdGNibHh1SUNCeVpYUjFjbTRnS0dGall5d2dMaTR1WVhKbmN5a2dQVDRnZTF4dUlDQWdJR3hsZENCMklEMGdZV05qTzF4dUlDQWdJR1p2Y2lBb2FTQTlJREE3SUdrZ1BDQnVkVzFVY21GdWMyWnZjbTFsY25NN0lHa3JLeWtnZTF4dUlDQWdJQ0FnZGlBOUlIUnlZVzV6Wm05eWJXVnljMXRwWFNoMkxDQXVMaTVoY21kektUdGNiaUFnSUNCOVhHNWNiaUFnSUNCeVpYUjFjbTRnZGp0Y2JpQWdmVHRjYm4wN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCcGJuUmxjbkJ2YkdGMFpTQTlJQ2hwYm5CMWRDd2diM1YwY0hWMExDQnlZVzVuWlVWaGMybHVaeWtnUFQ0Z2UxeHVJQ0JqYjI1emRDQnlZVzVuWlV4bGJtZDBhQ0E5SUdsdWNIVjBMbXhsYm1kMGFEdGNiaUFnWTI5dWMzUWdabWx1WVd4SmJtUmxlQ0E5SUhKaGJtZGxUR1Z1WjNSb0lDMGdNVHRjYmx4dUlDQnlaWFIxY200Z0tIWXBJRDArSUh0Y2JpQWdJQ0F2THlCSlppQjJZV3gxWlNCdmRYUnphV1JsSUcxcGJtbHRkVzBnY21GdVoyVXNJSEYxYVdOcmJIa2djbVYwZFhKdVhHNGdJQ0FnYVdZZ0tIWWdQRDBnYVc1d2RYUmJNRjBwSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUJ2ZFhSd2RYUmJNRjA3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeThnU1dZZ2RtRnNkV1VnYjNWMGMybGtaU0J0WVhocGJYVnRJSEpoYm1kbExDQnhkV2xqYTJ4NUlISmxkSFZ5Ymx4dUlDQWdJR2xtSUNoMklENDlJR2x1Y0hWMFcyWnBibUZzU1c1a1pYaGRLU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdiM1YwY0hWMFcyWnBibUZzU1c1a1pYaGRPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHeGxkQ0JwSUQwZ01UdGNibHh1SUNBZ0lDOHZJRVpwYm1RZ2FXNWtaWGdnYjJZZ2NtRnVaMlVnYzNSaGNuUmNiaUFnSUNCbWIzSWdLRHNnYVNBOElISmhibWRsVEdWdVozUm9PeUJwS3lzcElIdGNiaUFnSUNBZ0lHbG1JQ2hwYm5CMWRGdHBYU0ErSUhZZ2ZId2dhU0E5UFQwZ1ptbHVZV3hKYm1SbGVDa2dlMXh1SUNBZ0lDQWdJQ0JpY21WaGF6dGNiaUFnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNCamIyNXpkQ0J3Y205bmNtVnpjMGx1VW1GdVoyVWdQU0JuWlhSUWNtOW5jbVZ6YzBaeWIyMVdZV3gxWlNocGJuQjFkRnRwSUMwZ01WMHNJR2x1Y0hWMFcybGRMQ0IyS1R0Y2JpQWdJQ0JqYjI1emRDQmxZWE5sWkZCeWIyZHlaWE56SUQwZ0tISmhibWRsUldGemFXNW5LU0EvSUhKaGJtZGxSV0Z6YVc1blcybGRLSEJ5YjJkeVpYTnpTVzVTWVc1blpTa2dPaUJ3Y205bmNtVnpjMGx1VW1GdVoyVTdYRzRnSUNBZ2NtVjBkWEp1SUdkbGRGWmhiSFZsUm5KdmJWQnliMmR5WlhOektHOTFkSEIxZEZ0cElDMGdNVjBzSUc5MWRIQjFkRnRwWFN3Z1pXRnpaV1JRY205bmNtVnpjeWs3WEc0Z0lIMDdYRzU5TzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnYzNSbGNITWdQU0FvYzNSbGNITXNJRzFwYml3Z2JXRjRLU0E5UGlBb2Rpa2dQVDRnZTF4dUlDQmpiMjV6ZENCd2NtOW5jbVZ6Y3lBOUlHZGxkRkJ5YjJkeVpYTnpSbkp2YlZaaGJIVmxLRzFwYml3Z2JXRjRMQ0IyS1R0Y2JpQWdjbVYwZFhKdUlITjBaWEJRY205bmNtVnpjeWh6ZEdWd2N5d2djSEp2WjNKbGMzTXBPMXh1ZlR0Y2JseHVaWGh3YjNKMElHTnZibk4wSUhSeVlXNXpabTl5YlVOb2FXeGtWbUZzZFdWeklEMGdLR05vYVd4a1ZISmhibk5tYjNKdFpYSnpLU0E5UGlBb2Rpa2dQVDRnZTF4dUlDQm1iM0lnS0d4bGRDQnJaWGtnYVc0Z2Rpa2dlMXh1SUNBZ0lHTnZibk4wSUdOb2FXeGtWSEpoYm5ObWIzSnRaWElnUFNCamFHbHNaRlJ5WVc1elptOXliV1Z5YzF0clpYbGRPMXh1SUNBZ0lHbG1JQ2hqYUdsc1pGUnlZVzV6Wm05eWJXVnlLU0I3WEc0Z0lDQWdJQ0IyVzJ0bGVWMGdQU0JqYUdsc1pGUnlZVzV6Wm05eWJXVnlLSFpiYTJWNVhTazdYRzRnSUNBZ2ZWeHVJQ0I5WEc1Y2JpQWdjbVYwZFhKdUlIWTdYRzU5TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy90cmFuc2Zvcm1lcnMuanNcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmNvbG9yID0gZXhwb3J0cy5oc2xhID0gZXhwb3J0cy5oZXggPSBleHBvcnRzLnJnYmEgPSBleHBvcnRzLnJnYlVuaXQgPSBleHBvcnRzLnNjYWxlID0gZXhwb3J0cy5weCA9IGV4cG9ydHMucGVyY2VudCA9IGV4cG9ydHMuZGVncmVlcyA9IGV4cG9ydHMuYWxwaGEgPSBleHBvcnRzLm51bWJlciA9IHVuZGVmaW5lZDtcblxudmFyIF90cmFuc2Zvcm1DaGlsZFZhbHVlcywgX3RyYW5zZm9ybUNoaWxkVmFsdWVzMjtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBWYWx1ZSB0eXBlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIGFscGhhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBkZWdyZWVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBoZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIGhzbGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIHBlcmNlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIHB4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiByZ2JVbml0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiByZ2JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIHNjYWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cblxuXG52YXIgX3RyYW5zZm9ybWVycyA9IHJlcXVpcmUoJy4uL2luYy90cmFuc2Zvcm1lcnMnKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIF91dGlsczIgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxuLy8gU3RyaW5nIHByb3BlcnRpZXNcbnZhciBSRUQgPSAncmVkJztcbnZhciBHUkVFTiA9ICdncmVlbic7XG52YXIgQkxVRSA9ICdibHVlJztcbnZhciBBTFBIQSA9ICdhbHBoYSc7XG52YXIgSFVFID0gJ2h1ZSc7XG52YXIgU0FUVVJBVElPTiA9ICdzYXR1cmF0aW9uJztcbnZhciBMSUdIVE5FU1MgPSAnbGlnaHRuZXNzJztcblxuLy8gVGVtcGxhdGVzXG52YXIgcmdiYVRlbXBsYXRlID0gZnVuY3Rpb24gKF9yZWYpIHtcbiAgdmFyIHJlZCA9IF9yZWYucmVkLFxuICAgICAgZ3JlZW4gPSBfcmVmLmdyZWVuLFxuICAgICAgYmx1ZSA9IF9yZWYuYmx1ZSxcbiAgICAgIF9yZWYkYWxwaGEgPSBfcmVmLmFscGhhLFxuICAgICAgYWxwaGEgPSBfcmVmJGFscGhhID09PSB1bmRlZmluZWQgPyAxIDogX3JlZiRhbHBoYTtcbiAgcmV0dXJuICdyZ2JhKCcgKyByZWQgKyAnLCAnICsgZ3JlZW4gKyAnLCAnICsgYmx1ZSArICcsICcgKyBhbHBoYSArICcpJztcbn07XG5cbnZhciBoc2xhVGVtcGxhdGUgPSBmdW5jdGlvbiAoX3JlZjIpIHtcbiAgdmFyIGh1ZSA9IF9yZWYyLmh1ZSxcbiAgICAgIHNhdHVyYXRpb24gPSBfcmVmMi5zYXR1cmF0aW9uLFxuICAgICAgbGlnaHRuZXNzID0gX3JlZjIubGlnaHRuZXNzLFxuICAgICAgX3JlZjIkYWxwaGEgPSBfcmVmMi5hbHBoYSxcbiAgICAgIGFscGhhID0gX3JlZjIkYWxwaGEgPT09IHVuZGVmaW5lZCA/IDEgOiBfcmVmMiRhbHBoYTtcbiAgcmV0dXJuICdoc2xhKCcgKyBodWUgKyAnLCAnICsgc2F0dXJhdGlvbiArICcsICcgKyBsaWdodG5lc3MgKyAnLCAnICsgYWxwaGEgKyAnKSc7XG59O1xuXG52YXIgbnVtYmVyID0gZXhwb3J0cy5udW1iZXIgPSB7XG4gIHRlc3Q6IF91dGlsczIuaXNOdW0sXG4gIHBhcnNlOiBwYXJzZUZsb2F0XG59O1xuXG4vLyBWYWx1ZSB0eXBlc1xudmFyIGFscGhhID0gZXhwb3J0cy5hbHBoYSA9IF9leHRlbmRzKHt9LCBudW1iZXIsIHtcbiAgdHJhbnNmb3JtOiAoMCwgX3RyYW5zZm9ybWVycy5jbGFtcCkoMCwgMSlcbn0pO1xuXG52YXIgZGVncmVlcyA9IGV4cG9ydHMuZGVncmVlcyA9ICgwLCBfdXRpbHMuY3JlYXRlVW5pdFR5cGUpKCdkZWcnKTtcbnZhciBwZXJjZW50ID0gZXhwb3J0cy5wZXJjZW50ID0gKDAsIF91dGlscy5jcmVhdGVVbml0VHlwZSkoJyUnKTtcbnZhciBweCA9IGV4cG9ydHMucHggPSAoMCwgX3V0aWxzLmNyZWF0ZVVuaXRUeXBlKSgncHgnKTtcblxudmFyIHNjYWxlID0gZXhwb3J0cy5zY2FsZSA9IF9leHRlbmRzKHt9LCBudW1iZXIsIHtcbiAgZGVmYXVsdDogMVxufSk7XG5cbnZhciByZ2JVbml0ID0gZXhwb3J0cy5yZ2JVbml0ID0gX2V4dGVuZHMoe30sIG51bWJlciwge1xuICB0cmFuc2Zvcm06ICgwLCBfdHJhbnNmb3JtZXJzLmZsb3cpKFxuICAvL2h0dHA6Ly9jb2RlcGVuLmlvL29zdWJsYWtlL2Z1bGwveEdWVmFOL1xuICAvLyAodiwgdmFsdWUsIGFjdGlvbikgPT4ge1xuICAvLyAgIGlmIChhY3Rpb24pIHtcbiAgLy8gICAgIGNvbnN0IGZyb21Db2xvciA9IGFjdGlvbi5mcm9tICogYWN0aW9uLmZyb207XG4gIC8vICAgICBjb25zdCB0b0NvbG9yID0gYWN0aW9uLnRvICogYWN0aW9uLnRvO1xuICAvLyAgICAgcmV0dXJuIE1hdGguc3FydChhY3Rpb24ucHJvZ3Jlc3MgKiAodG9Db2xvciAtIGZyb21Db2xvcikgKyBmcm9tQ29sb3IpO1xuICAvLyAgIH1cblxuICAvLyAgIHJldHVybiB2O1xuICAvLyB9LFxuICAoMCwgX3RyYW5zZm9ybWVycy5jbGFtcCkoMCwgMjU1KSwgTWF0aC5yb3VuZClcbn0pO1xuXG52YXIgcmdiYSA9IGV4cG9ydHMucmdiYSA9IHtcbiAgdGVzdDogKDAsIF91dGlscy5pc0ZpcnN0Q2hhcnMpKCdyZ2InKSxcblxuICBwYXJzZTogKDAsIF91dGlscy5zcGxpdENvbG9yVmFsdWVzKShbUkVELCBHUkVFTiwgQkxVRSwgQUxQSEFdKSxcblxuICB0cmFuc2Zvcm06ICgwLCBfdHJhbnNmb3JtZXJzLmZsb3cpKCgwLCBfdHJhbnNmb3JtZXJzLnRyYW5zZm9ybUNoaWxkVmFsdWVzKSgoX3RyYW5zZm9ybUNoaWxkVmFsdWVzID0ge30sIF90cmFuc2Zvcm1DaGlsZFZhbHVlc1tSRURdID0gcmdiVW5pdC50cmFuc2Zvcm0sIF90cmFuc2Zvcm1DaGlsZFZhbHVlc1tHUkVFTl0gPSByZ2JVbml0LnRyYW5zZm9ybSwgX3RyYW5zZm9ybUNoaWxkVmFsdWVzW0JMVUVdID0gcmdiVW5pdC50cmFuc2Zvcm0sIF90cmFuc2Zvcm1DaGlsZFZhbHVlc1tBTFBIQV0gPSBhbHBoYS50cmFuc2Zvcm0sIF90cmFuc2Zvcm1DaGlsZFZhbHVlcykpLCByZ2JhVGVtcGxhdGUpXG59O1xuXG52YXIgaGV4ID0gZXhwb3J0cy5oZXggPSBfZXh0ZW5kcyh7fSwgcmdiYSwge1xuXG4gIHRlc3Q6ICgwLCBfdXRpbHMuaXNGaXJzdENoYXJzKSgnIycpLFxuXG4gIHBhcnNlOiBmdW5jdGlvbiAodikge1xuICAgIHZhciBfcmVmMztcblxuICAgIHZhciByID0gdm9pZCAwLFxuICAgICAgICBnID0gdm9pZCAwLFxuICAgICAgICBiID0gdm9pZCAwO1xuXG4gICAgLy8gSWYgd2UgaGF2ZSA2IGNoYXJhY3RlcnMsIGllICNGRjAwMDBcbiAgICBpZiAodi5sZW5ndGggPiA0KSB7XG4gICAgICByID0gdi5zdWJzdHIoMSwgMik7XG4gICAgICBnID0gdi5zdWJzdHIoMywgMik7XG4gICAgICBiID0gdi5zdWJzdHIoNSwgMik7XG5cbiAgICAgIC8vIE9yIHdlIGhhdmUgMyBjaGFyYWN0ZXJzLCBpZSAjRjAwXG4gICAgfSBlbHNlIHtcbiAgICAgIHIgPSB2LnN1YnN0cigxLCAxKTtcbiAgICAgIGcgPSB2LnN1YnN0cigyLCAxKTtcbiAgICAgIGIgPSB2LnN1YnN0cigzLCAxKTtcbiAgICAgIHIgKz0gcjtcbiAgICAgIGcgKz0gZztcbiAgICAgIGIgKz0gYjtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JlZjMgPSB7fSwgX3JlZjNbUkVEXSA9IHBhcnNlSW50KHIsIDE2KSwgX3JlZjNbR1JFRU5dID0gcGFyc2VJbnQoZywgMTYpLCBfcmVmM1tCTFVFXSA9IHBhcnNlSW50KGIsIDE2KSwgX3JlZjNbQUxQSEFdID0gMSwgX3JlZjM7XG4gIH1cbn0pO1xuXG52YXIgaHNsYSA9IGV4cG9ydHMuaHNsYSA9IHtcbiAgdGVzdDogKDAsIF91dGlscy5pc0ZpcnN0Q2hhcnMpKCdoc2wnKSxcblxuICBwYXJzZTogKDAsIF91dGlscy5zcGxpdENvbG9yVmFsdWVzKShbSFVFLCBTQVRVUkFUSU9OLCBMSUdIVE5FU1MsIEFMUEhBXSksXG5cbiAgdHJhbnNmb3JtOiAoMCwgX3RyYW5zZm9ybWVycy5mbG93KSgoMCwgX3RyYW5zZm9ybWVycy50cmFuc2Zvcm1DaGlsZFZhbHVlcykoKF90cmFuc2Zvcm1DaGlsZFZhbHVlczIgPSB7fSwgX3RyYW5zZm9ybUNoaWxkVmFsdWVzMltIVUVdID0gbnVtYmVyLnRyYW5zZm9ybSwgX3RyYW5zZm9ybUNoaWxkVmFsdWVzMltTQVRVUkFUSU9OXSA9IHBlcmNlbnQudHJhbnNmb3JtLCBfdHJhbnNmb3JtQ2hpbGRWYWx1ZXMyW0xJR0hUTkVTU10gPSBwZXJjZW50LnRyYW5zZm9ybSwgX3RyYW5zZm9ybUNoaWxkVmFsdWVzMltBTFBIQV0gPSBhbHBoYS50cmFuc2Zvcm0sIF90cmFuc2Zvcm1DaGlsZFZhbHVlczIpKSwgaHNsYVRlbXBsYXRlKVxufTtcblxudmFyIGNvbG9yID0gZXhwb3J0cy5jb2xvciA9IHtcbiAgY2hpbGRUeXBlczogX2V4dGVuZHMoe30sIGhzbGEuY2hpbGRUeXBlcywgcmdiYS5jaGlsZFR5cGVzKSxcblxuICB0ZXN0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gcmdiYS50ZXN0KHZhbHVlKSB8fCBoZXgudGVzdCh2YWx1ZSkgfHwgaHNsYS50ZXN0KHZhbHVlKTtcbiAgfSxcblxuICB0cmFuc2Zvcm06IGZ1bmN0aW9uICh2KSB7XG4gICAgaWYgKHYuaGFzT3duUHJvcGVydHkoJ3JlZCcpKSB7XG4gICAgICByZXR1cm4gcmdiYS50cmFuc2Zvcm0odik7XG4gICAgfSBlbHNlIGlmICh2Lmhhc093blByb3BlcnR5KCdodWUnKSkge1xuICAgICAgcmV0dXJuIGhzbGEudHJhbnNmb3JtKHYpO1xuICAgIH1cbiAgICByZXR1cm4gdjtcbiAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJtTXZkbUZzZFdVdGRIbHdaWE11YW5NaVhTd2libUZ0WlhNaU9sc2lVa1ZFSWl3aVIxSkZSVTRpTENKQ1RGVkZJaXdpUVV4UVNFRWlMQ0pJVlVVaUxDSlRRVlJWVWtGVVNVOU9JaXdpVEVsSFNGUk9SVk5USWl3aWNtZGlZVlJsYlhCc1lYUmxJaXdpY21Wa0lpd2laM0psWlc0aUxDSmliSFZsSWl3aVlXeHdhR0VpTENKb2MyeGhWR1Z0Y0d4aGRHVWlMQ0pvZFdVaUxDSnpZWFIxY21GMGFXOXVJaXdpYkdsbmFIUnVaWE56SWl3aWJuVnRZbVZ5SWl3aWRHVnpkQ0lzSW5CaGNuTmxJaXdpY0dGeWMyVkdiRzloZENJc0luUnlZVzV6Wm05eWJTSXNJbVJsWjNKbFpYTWlMQ0p3WlhKalpXNTBJaXdpY0hnaUxDSnpZMkZzWlNJc0ltUmxabUYxYkhRaUxDSnlaMkpWYm1sMElpd2lUV0YwYUNJc0luSnZkVzVrSWl3aWNtZGlZU0lzSW1obGVDSXNJbllpTENKeUlpd2laeUlzSW1JaUxDSnNaVzVuZEdnaUxDSnpkV0p6ZEhJaUxDSndZWEp6WlVsdWRDSXNJbWh6YkdFaUxDSmpiMnh2Y2lJc0ltTm9hV3hrVkhsd1pYTWlMQ0oyWVd4MVpTSXNJbWhoYzA5M2JsQnliM0JsY25SNUlsMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPMnRSUVVGQk96czdPenM3T3pzN096czdPenM3UVVGaFFUczdRVUZEUVRzN1FVRkRRVHM3UVVGRlFUdEJRVU5CTEVsQlFVMUJMRTFCUVUwc1MwRkJXanRCUVVOQkxFbEJRVTFETEZGQlFWRXNUMEZCWkR0QlFVTkJMRWxCUVUxRExFOUJRVThzVFVGQllqdEJRVU5CTEVsQlFVMURMRkZCUVZFc1QwRkJaRHRCUVVOQkxFbEJRVTFETEUxQlFVMHNTMEZCV2p0QlFVTkJMRWxCUVUxRExHRkJRV0VzV1VGQmJrSTdRVUZEUVN4SlFVRk5ReXhaUVVGWkxGZEJRV3hDT3p0QlFVVkJPMEZCUTBFc1NVRkJUVU1zWlVGQlpUdEJRVUZCTEUxQlFVZERMRWRCUVVnc1VVRkJSMEVzUjBGQlNEdEJRVUZCTEUxQlFWRkRMRXRCUVZJc1VVRkJVVUVzUzBGQlVqdEJRVUZCTEUxQlFXVkRMRWxCUVdZc1VVRkJaVUVzU1VGQlpqdEJRVUZCTEhkQ1FVRnhRa01zUzBGQmNrSTdRVUZCUVN4TlFVRnhRa0VzUzBGQmNrSXNPRUpCUVRaQ0xFTkJRVGRDTzBGQlFVRXNiVUpCUTFoSUxFZEJSRmNzVlVGRFNFTXNTMEZFUnl4VlFVTlBReXhKUVVSUUxGVkJRMmRDUXl4TFFVUm9RanRCUVVGQkxFTkJRWEpDT3p0QlFVZEJMRWxCUVUxRExHVkJRV1U3UVVGQlFTeE5RVUZIUXl4SFFVRklMRk5CUVVkQkxFZEJRVWc3UVVGQlFTeE5RVUZSUXl4VlFVRlNMRk5CUVZGQkxGVkJRVkk3UVVGQlFTeE5RVUZ2UWtNc1UwRkJjRUlzVTBGQmIwSkJMRk5CUVhCQ08wRkJRVUVzTUVKQlFTdENTaXhMUVVFdlFqdEJRVUZCTEUxQlFTdENRU3hMUVVFdlFpd3JRa0ZCZFVNc1EwRkJka003UVVGQlFTeHRRa0ZEV0VVc1IwRkVWeXhWUVVOSVF5eFZRVVJITEZWQlExbERMRk5CUkZvc1ZVRkRNRUpLTEV0QlJERkNPMEZCUVVFc1EwRkJja0k3TzBGQlIwOHNTVUZCVFVzc01FSkJRVk03UVVGRGNFSkRMSEZDUVVSdlFqdEJRVVZ3UWtNc1UwRkJUME03UVVGR1lTeERRVUZtT3p0QlFVdFFPMEZCUTA4c1NVRkJUVklzY1VOQlExSkxMRTFCUkZFN1FVRkZXRWtzWVVGQlZ5eDVRa0ZCVFN4RFFVRk9MRVZCUVZNc1EwRkJWRHRCUVVaQkxFVkJRVTQ3TzBGQlMwRXNTVUZCVFVNc05FSkJRVlVzTWtKQlFXVXNTMEZCWml4RFFVRm9RanRCUVVOQkxFbEJRVTFETERSQ1FVRlZMREpDUVVGbExFZEJRV1lzUTBGQmFFSTdRVUZEUVN4SlFVRk5ReXhyUWtGQlN5d3lRa0ZCWlN4SlFVRm1MRU5CUVZnN08wRkJSVUVzU1VGQlRVTXNjVU5CUTFKU0xFMUJSRkU3UVVGRldGTXNWMEZCVXp0QlFVWkZMRVZCUVU0N08wRkJTMEVzU1VGQlRVTXNlVU5CUTFKV0xFMUJSRkU3UVVGRldFa3NZVUZCVnp0QlFVTlVPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3d5UWtGQlRTeERRVUZPTEVWQlFWTXNSMEZCVkN4RFFWaFRMRVZCV1ZSUExFdEJRVXRETEV0QldrazdRVUZHUVN4RlFVRk9PenRCUVd0Q1FTeEpRVUZOUXl4elFrRkJUenRCUVVOc1Fsb3NVVUZCVFN4NVFrRkJZU3hMUVVGaUxFTkJSRms3TzBGQlIyeENReXhUUVVGUExEWkNRVUZwUWl4RFFVRkRiRUlzUjBGQlJDeEZRVUZOUXl4TFFVRk9MRVZCUVdGRExFbEJRV0lzUlVGQmJVSkRMRXRCUVc1Q0xFTkJRV3BDTEVOQlNGYzdPMEZCUzJ4Q2FVSXNZVUZCVnl4M1FrRkRWQ3d5UmtGRFIzQkNMRWRCUkVnc1NVRkRVekJDTEZGQlFWRk9MRk5CUkdwQ0xIZENRVVZIYmtJc1MwRkdTQ3hKUVVWWGVVSXNVVUZCVVU0c1UwRkdia0lzZDBKQlIwZHNRaXhKUVVoSUxFbEJSMVYzUWl4UlFVRlJUaXhUUVVoc1FpeDNRa0ZKUjJwQ0xFdEJTa2dzU1VGSlYxRXNUVUZCVFZNc1UwRktha0lzZVVKQlJGTXNSVUZQVkdJc1dVRlFVenRCUVV4UExFTkJRV0k3TzBGQlowSkJMRWxCUVUxMVFpeHBRMEZEVWtRc1NVRkVVVHM3UVVGSFdGb3NVVUZCVFN4NVFrRkJZU3hIUVVGaUxFTkJTRXM3TzBGQlMxaERMRk5CUVU4c1ZVRkJRMkVzUTBGQlJDeEZRVUZQTzBGQlFVRTdPMEZCUTFvc1VVRkJTVU1zVlVGQlNqdEJRVUZCTEZGQlFVOURMRlZCUVZBN1FVRkJRU3hSUVVGVlF5eFZRVUZXT3p0QlFVVkJPMEZCUTBFc1VVRkJTVWdzUlVGQlJVa3NUVUZCUml4SFFVRlhMRU5CUVdZc1JVRkJhMEk3UVVGRGFFSklMRlZCUVVsRUxFVkJRVVZMTEUxQlFVWXNRMEZCVXl4RFFVRlVMRVZCUVZrc1EwRkJXaXhEUVVGS08wRkJRMEZJTEZWQlFVbEdMRVZCUVVWTExFMUJRVVlzUTBGQlV5eERRVUZVTEVWQlFWa3NRMEZCV2l4RFFVRktPMEZCUTBGR0xGVkJRVWxJTEVWQlFVVkxMRTFCUVVZc1EwRkJVeXhEUVVGVUxFVkJRVmtzUTBGQldpeERRVUZLT3p0QlFVVkdPMEZCUTBNc1MwRk9SQ3hOUVUxUE8wRkJRMHhLTEZWQlFVbEVMRVZCUVVWTExFMUJRVVlzUTBGQlV5eERRVUZVTEVWQlFWa3NRMEZCV2l4RFFVRktPMEZCUTBGSUxGVkJRVWxHTEVWQlFVVkxMRTFCUVVZc1EwRkJVeXhEUVVGVUxFVkJRVmtzUTBGQldpeERRVUZLTzBGQlEwRkdMRlZCUVVsSUxFVkJRVVZMTEUxQlFVWXNRMEZCVXl4RFFVRlVMRVZCUVZrc1EwRkJXaXhEUVVGS08wRkJRMEZLTEZkQlFVdEJMRU5CUVV3N1FVRkRRVU1zVjBGQlMwRXNRMEZCVER0QlFVTkJReXhYUVVGTFFTeERRVUZNTzBGQlEwUTdPMEZCUlVRc05rSkJRMGRzUXl4SFFVUklMRWxCUTFOeFF5eFRRVUZUVEN4RFFVRlVMRVZCUVZrc1JVRkJXaXhEUVVSVUxGRkJSVWN2UWl4TFFVWklMRWxCUlZkdlF5eFRRVUZUU2l4RFFVRlVMRVZCUVZrc1JVRkJXaXhEUVVaWUxGRkJSMGN2UWl4SlFVaElMRWxCUjFWdFF5eFRRVUZUU0N4RFFVRlVMRVZCUVZrc1JVRkJXaXhEUVVoV0xGRkJTVWN2UWl4TFFVcElMRWxCU1Zjc1EwRktXRHRCUVUxRU8wRkJPVUpWTEVWQlFVNDdPMEZCYVVOQkxFbEJRVTF0UXl4elFrRkJUenRCUVVOc1FuSkNMRkZCUVUwc2VVSkJRV0VzUzBGQllpeERRVVJaT3p0QlFVZHNRa01zVTBGQlR5dzJRa0ZCYVVJc1EwRkJRMlFzUjBGQlJDeEZRVUZOUXl4VlFVRk9MRVZCUVd0Q1F5eFRRVUZzUWl4RlFVRTJRa2dzUzBGQk4wSXNRMEZCYWtJc1EwRklWenM3UVVGTGJFSnBRaXhoUVVGWExIZENRVU5VTERaR1FVTkhhRUlzUjBGRVNDeEpRVU5UV1N4UFFVRlBTU3hUUVVSb1FpeDVRa0ZGUjJZc1ZVRkdTQ3hKUVVWblFtbENMRkZCUVZGR0xGTkJSbmhDTEhsQ1FVZEhaQ3hUUVVoSUxFbEJSMlZuUWl4UlFVRlJSaXhUUVVoMlFpeDVRa0ZKUjJwQ0xFdEJTa2dzU1VGSlYxRXNUVUZCVFZNc1UwRktha0lzTUVKQlJGTXNSVUZQVkZJc1dVRlFVenRCUVV4UExFTkJRV0k3TzBGQlowSkJMRWxCUVUweVFpeDNRa0ZCVVR0QlFVTnVRa01zTWtKQlEwdEdMRXRCUVV0RkxGVkJSRllzUlVGRlMxZ3NTMEZCUzFjc1ZVRkdWaXhEUVVSdFFqczdRVUZOYmtKMlFpeFJRVUZOTEZWQlFVTjNRaXhMUVVGRU8wRkJRVUVzVjBGQlYxb3NTMEZCUzFvc1NVRkJUQ3hEUVVGVmQwSXNTMEZCVml4TFFVRnZRbGdzU1VGQlNXSXNTVUZCU2l4RFFVRlRkMElzUzBGQlZDeERRVUZ3UWl4SlFVRjFRMGdzUzBGQlMzSkNMRWxCUVV3c1EwRkJWWGRDTEV0QlFWWXNRMEZCYkVRN1FVRkJRU3hIUVU1aE96dEJRVkZ1UW5KQ0xHRkJRVmNzVlVGQlExY3NRMEZCUkN4RlFVRlBPMEZCUTJoQ0xGRkJRVWxCTEVWQlFVVlhMR05CUVVZc1EwRkJhVUlzUzBGQmFrSXNRMEZCU2l4RlFVRTJRanRCUVVNelFpeGhRVUZQWWl4TFFVRkxWQ3hUUVVGTUxFTkJRV1ZYTEVOQlFXWXNRMEZCVUR0QlFVTkVMRXRCUmtRc1RVRkZUeXhKUVVGSlFTeEZRVUZGVnl4alFVRkdMRU5CUVdsQ0xFdEJRV3BDTEVOQlFVb3NSVUZCTmtJN1FVRkRiRU1zWVVGQlQwb3NTMEZCUzJ4Q0xGTkJRVXdzUTBGQlpWY3NRMEZCWml4RFFVRlFPMEZCUTBRN1FVRkRSQ3hYUVVGUFFTeERRVUZRTzBGQlEwUTdRVUZtYTBJc1EwRkJaQ0lzSW1acGJHVWlPaUoyWVd4MVpTMTBlWEJsY3k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk4cUtseHVJQ29nVm1Gc2RXVWdkSGx3WlhOY2JpQXFYRzRnS2lCaGJIQm9ZVnh1SUNvZ1pHVm5jbVZsYzF4dUlDb2dhR1Y0WEc0Z0tpQm9jMnhoWEc0Z0tpQndaWEpqWlc1MFhHNGdLaUJ3ZUZ4dUlDb2djbWRpVlc1cGRGeHVJQ29nY21kaVhHNGdLaUJ6WTJGc1pWeHVJQ292WEc1cGJYQnZjblFnZXlCamJHRnRjQ3dnWm14dmR5d2dkSEpoYm5ObWIzSnRRMmhwYkdSV1lXeDFaWE1nZlNCbWNtOXRJQ2N1TGk5cGJtTXZkSEpoYm5ObWIzSnRaWEp6Snp0Y2JtbHRjRzl5ZENCN0lHTnlaV0YwWlZWdWFYUlVlWEJsTENCcGMwWnBjbk4wUTJoaGNuTXNJSE53YkdsMFEyOXNiM0pXWVd4MVpYTWdmU0JtY205dElDY3VMM1YwYVd4ekp6dGNibWx0Y0c5eWRDQjdJR2x6VG5WdElIMGdabkp2YlNBbkxpNHZhVzVqTDNWMGFXeHpKenRjYmx4dUx5OGdVM1J5YVc1bklIQnliM0JsY25ScFpYTmNibU52Ym5OMElGSkZSQ0E5SUNkeVpXUW5PMXh1WTI5dWMzUWdSMUpGUlU0Z1BTQW5aM0psWlc0bk8xeHVZMjl1YzNRZ1FreFZSU0E5SUNkaWJIVmxKenRjYm1OdmJuTjBJRUZNVUVoQklEMGdKMkZzY0doaEp6dGNibU52Ym5OMElFaFZSU0E5SUNkb2RXVW5PMXh1WTI5dWMzUWdVMEZVVlZKQlZFbFBUaUE5SUNkellYUjFjbUYwYVc5dUp6dGNibU52Ym5OMElFeEpSMGhVVGtWVFV5QTlJQ2RzYVdkb2RHNWxjM01uTzF4dVhHNHZMeUJVWlcxd2JHRjBaWE5jYm1OdmJuTjBJSEpuWW1GVVpXMXdiR0YwWlNBOUlDaDdJSEpsWkN3Z1ozSmxaVzRzSUdKc2RXVXNJR0ZzY0doaElEMGdNU0I5S1NBOVBpQmNiaUFnWUhKblltRW9KSHR5WldSOUxDQWtlMmR5WldWdWZTd2dKSHRpYkhWbGZTd2dKSHRoYkhCb1lYMHBZRHRjYmx4dVkyOXVjM1FnYUhOc1lWUmxiWEJzWVhSbElEMGdLSHNnYUhWbExDQnpZWFIxY21GMGFXOXVMQ0JzYVdkb2RHNWxjM01zSUdGc2NHaGhJRDBnTVNCOUtTQTlQaUJjYmlBZ1lHaHpiR0VvSkh0b2RXVjlMQ0FrZTNOaGRIVnlZWFJwYjI1OUxDQWtlMnhwWjJoMGJtVnpjMzBzSUNSN1lXeHdhR0Y5S1dBN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCdWRXMWlaWElnUFNCN1hHNGdJSFJsYzNRNklHbHpUblZ0TEZ4dUlDQndZWEp6WlRvZ2NHRnljMlZHYkc5aGRGeHVmVHRjYmx4dUx5OGdWbUZzZFdVZ2RIbHdaWE5jYm1WNGNHOXlkQ0JqYjI1emRDQmhiSEJvWVNBOUlIdGNiaUFnTGk0dWJuVnRZbVZ5TEZ4dUlDQjBjbUZ1YzJadmNtMDZJR05zWVcxd0tEQXNJREVwWEc1OU8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ1pHVm5jbVZsY3lBOUlHTnlaV0YwWlZWdWFYUlVlWEJsS0Nka1pXY25LVHRjYm1WNGNHOXlkQ0JqYjI1emRDQndaWEpqWlc1MElEMGdZM0psWVhSbFZXNXBkRlI1Y0dVb0p5VW5LVHRjYm1WNGNHOXlkQ0JqYjI1emRDQndlQ0E5SUdOeVpXRjBaVlZ1YVhSVWVYQmxLQ2R3ZUNjcE8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ2MyTmhiR1VnUFNCN1hHNGdJQzR1TG01MWJXSmxjaXhjYmlBZ1pHVm1ZWFZzZERvZ01WeHVmVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJSEpuWWxWdWFYUWdQU0I3WEc0Z0lDNHVMbTUxYldKbGNpeGNiaUFnZEhKaGJuTm1iM0p0T2lCbWJHOTNLRnh1SUNBZ0lDOHZhSFIwY0RvdkwyTnZaR1Z3Wlc0dWFXOHZiM04xWW14aGEyVXZablZzYkM5NFIxWldZVTR2WEc0Z0lDQWdMeThnS0hZc0lIWmhiSFZsTENCaFkzUnBiMjRwSUQwK0lIdGNiaUFnSUNBdkx5QWdJR2xtSUNoaFkzUnBiMjRwSUh0Y2JpQWdJQ0F2THlBZ0lDQWdZMjl1YzNRZ1puSnZiVU52Ykc5eUlEMGdZV04wYVc5dUxtWnliMjBnS2lCaFkzUnBiMjR1Wm5KdmJUdGNiaUFnSUNBdkx5QWdJQ0FnWTI5dWMzUWdkRzlEYjJ4dmNpQTlJR0ZqZEdsdmJpNTBieUFxSUdGamRHbHZiaTUwYnp0Y2JpQWdJQ0F2THlBZ0lDQWdjbVYwZFhKdUlFMWhkR2d1YzNGeWRDaGhZM1JwYjI0dWNISnZaM0psYzNNZ0tpQW9kRzlEYjJ4dmNpQXRJR1p5YjIxRGIyeHZjaWtnS3lCbWNtOXRRMjlzYjNJcE8xeHVJQ0FnSUM4dklDQWdmVnh1WEc0Z0lDQWdMeThnSUNCeVpYUjFjbTRnZGp0Y2JpQWdJQ0F2THlCOUxGeHVJQ0FnSUdOc1lXMXdLREFzSURJMU5Ta3NYRzRnSUNBZ1RXRjBhQzV5YjNWdVpGeHVJQ0FwWEc1OU8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ2NtZGlZU0E5SUh0Y2JpQWdkR1Z6ZERvZ2FYTkdhWEp6ZEVOb1lYSnpLQ2R5WjJJbktTeGNibHh1SUNCd1lYSnpaVG9nYzNCc2FYUkRiMnh2Y2xaaGJIVmxjeWhiVWtWRUxDQkhVa1ZGVGl3Z1FreFZSU3dnUVV4UVNFRmRLU3hjYmx4dUlDQjBjbUZ1YzJadmNtMDZJR1pzYjNjb1hHNGdJQ0FnZEhKaGJuTm1iM0p0UTJocGJHUldZV3gxWlhNb2UxeHVJQ0FnSUNBZ1cxSkZSRjA2SUhKbllsVnVhWFF1ZEhKaGJuTm1iM0p0TEZ4dUlDQWdJQ0FnVzBkU1JVVk9YVG9nY21kaVZXNXBkQzUwY21GdWMyWnZjbTBzWEc0Z0lDQWdJQ0JiUWt4VlJWMDZJSEpuWWxWdWFYUXVkSEpoYm5ObWIzSnRMRnh1SUNBZ0lDQWdXMEZNVUVoQlhUb2dZV3h3YUdFdWRISmhibk5tYjNKdFhHNGdJQ0FnZlNrc1hHNGdJQ0FnY21kaVlWUmxiWEJzWVhSbFhHNGdJQ2xjYm4wN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCb1pYZ2dQU0I3WEc0Z0lDNHVMbkpuWW1Fc1hHNWNiaUFnZEdWemREb2dhWE5HYVhKemRFTm9ZWEp6S0Njakp5a3NYRzVjYmlBZ2NHRnljMlU2SUNoMktTQTlQaUI3WEc0Z0lDQWdiR1YwSUhJc0lHY3NJR0k3WEc1Y2JpQWdJQ0F2THlCSlppQjNaU0JvWVhabElEWWdZMmhoY21GamRHVnljeXdnYVdVZ0kwWkdNREF3TUZ4dUlDQWdJR2xtSUNoMkxteGxibWQwYUNBK0lEUXBJSHRjYmlBZ0lDQWdJSElnUFNCMkxuTjFZbk4wY2lneExDQXlLVHRjYmlBZ0lDQWdJR2NnUFNCMkxuTjFZbk4wY2lnekxDQXlLVHRjYmlBZ0lDQWdJR0lnUFNCMkxuTjFZbk4wY2lnMUxDQXlLVHRjYmx4dUlDQWdJQzh2SUU5eUlIZGxJR2hoZG1VZ015QmphR0Z5WVdOMFpYSnpMQ0JwWlNBalJqQXdYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUhJZ1BTQjJMbk4xWW5OMGNpZ3hMQ0F4S1R0Y2JpQWdJQ0FnSUdjZ1BTQjJMbk4xWW5OMGNpZ3lMQ0F4S1R0Y2JpQWdJQ0FnSUdJZ1BTQjJMbk4xWW5OMGNpZ3pMQ0F4S1R0Y2JpQWdJQ0FnSUhJZ0t6MGdjanRjYmlBZ0lDQWdJR2NnS3owZ1p6dGNiaUFnSUNBZ0lHSWdLejBnWWp0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J5WlhSMWNtNGdlMXh1SUNBZ0lDQWdXMUpGUkYwNklIQmhjbk5sU1c1MEtISXNJREUyS1N4Y2JpQWdJQ0FnSUZ0SFVrVkZUbDA2SUhCaGNuTmxTVzUwS0djc0lERTJLU3hjYmlBZ0lDQWdJRnRDVEZWRlhUb2djR0Z5YzJWSmJuUW9ZaXdnTVRZcExGeHVJQ0FnSUNBZ1cwRk1VRWhCWFRvZ01WeHVJQ0FnSUgwN1hHNGdJSDFjYm4wN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCb2MyeGhJRDBnZTF4dUlDQjBaWE4wT2lCcGMwWnBjbk4wUTJoaGNuTW9KMmh6YkNjcExGeHVYRzRnSUhCaGNuTmxPaUJ6Y0d4cGRFTnZiRzl5Vm1Gc2RXVnpLRnRJVlVVc0lGTkJWRlZTUVZSSlQwNHNJRXhKUjBoVVRrVlRVeXdnUVV4UVNFRmRLU3hjYmx4dUlDQjBjbUZ1YzJadmNtMDZJR1pzYjNjb1hHNGdJQ0FnZEhKaGJuTm1iM0p0UTJocGJHUldZV3gxWlhNb2UxeHVJQ0FnSUNBZ1cwaFZSVjA2SUc1MWJXSmxjaTUwY21GdWMyWnZjbTBzWEc0Z0lDQWdJQ0JiVTBGVVZWSkJWRWxQVGwwNklIQmxjbU5sYm5RdWRISmhibk5tYjNKdExGeHVJQ0FnSUNBZ1cweEpSMGhVVGtWVFUxMDZJSEJsY21ObGJuUXVkSEpoYm5ObWIzSnRMRnh1SUNBZ0lDQWdXMEZNVUVoQlhUb2dZV3h3YUdFdWRISmhibk5tYjNKdFhHNGdJQ0FnZlNrc1hHNGdJQ0FnYUhOc1lWUmxiWEJzWVhSbFhHNGdJQ2xjYm4wN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCamIyeHZjaUE5SUh0Y2JpQWdZMmhwYkdSVWVYQmxjem9nZTF4dUlDQWdJQzR1TG1oemJHRXVZMmhwYkdSVWVYQmxjeXhjYmlBZ0lDQXVMaTV5WjJKaExtTm9hV3hrVkhsd1pYTmNiaUFnZlN4Y2JseHVJQ0IwWlhOME9pQW9kbUZzZFdVcElEMCtJSEpuWW1FdWRHVnpkQ2gyWVd4MVpTa2dmSHdnYUdWNExuUmxjM1FvZG1Gc2RXVXBJSHg4SUdoemJHRXVkR1Z6ZENoMllXeDFaU2tzWEc1Y2JpQWdkSEpoYm5ObWIzSnRPaUFvZGlrZ1BUNGdlMXh1SUNBZ0lHbG1JQ2gyTG1oaGMwOTNibEJ5YjNCbGNuUjVLQ2R5WldRbktTa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlISm5ZbUV1ZEhKaGJuTm1iM0p0S0hZcE8xeHVJQ0FnSUgwZ1pXeHpaU0JwWmlBb2RpNW9ZWE5QZDI1UWNtOXdaWEowZVNnbmFIVmxKeWtwSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUJvYzJ4aExuUnlZVzV6Wm05eWJTaDJLVHRjYmlBZ0lDQjlYRzRnSUNBZ2NtVjBkWEp1SUhZN1hHNGdJSDFjYm4wN1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvdmFsdWUtdHlwZXMuanNcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfID0gcmVxdWlyZSgnLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKTtcblxudmFyIF90cmFuc2Zvcm1lcnMgPSByZXF1aXJlKCcuLi9pbmMvdHJhbnNmb3JtZXJzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIGNsYW1wUHJvZ3Jlc3MgPSAoMCwgX3RyYW5zZm9ybWVycy5jbGFtcCkoMCwgMSk7XG5cbmZ1bmN0aW9uIGNhbGNWYWx1ZUF0VGltZShmcm9tLCB0bywgZHVyYXRpb24sIGVsYXBzZWQsIGVhc2UpIHtcbiAgdmFyIHByb2dyZXNzQXRUaW1lID0gZWFzZShjbGFtcFByb2dyZXNzKCgwLCBfY2FsYy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSkoMCwgZHVyYXRpb24sIGVsYXBzZWQpKSk7XG4gIHJldHVybiAoMCwgX2NhbGMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MpKGZyb20sIHRvLCBwcm9ncmVzc0F0VGltZSk7XG59XG5cbnZhciBUd2VlbkJsZW5kID0gZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgX2luaGVyaXRzKFR3ZWVuQmxlbmQsIF9BY3Rpb24pO1xuXG4gIGZ1bmN0aW9uIFR3ZWVuQmxlbmQoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFR3ZWVuQmxlbmQpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBUd2VlbkJsZW5kLnByb3RvdHlwZS5vblN0YXJ0ID0gZnVuY3Rpb24gb25TdGFydCgpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgZnJvbSA9IF9wcm9wcy5mcm9tLFxuICAgICAgICB0byA9IF9wcm9wcy50byxcbiAgICAgICAgZHVyYXRpb24gPSBfcHJvcHMuZHVyYXRpb24sXG4gICAgICAgIGFjY3VyYWN5ID0gX3Byb3BzLmFjY3VyYWN5O1xuXG4gICAgdmFyIGEgPSBmcm9tO1xuICAgIHZhciBiID0gdG87XG4gICAgdmFyIGFEdXJhdGlvbiA9IGEuZ2V0RHVyYXRpb24oKTtcbiAgICB2YXIgYkR1cmF0aW9uID0gYi5nZXREdXJhdGlvbigpO1xuXG4gICAgdGhpcy5kdXJhdGlvbiA9IGR1cmF0aW9uIHx8IE1hdGgubWluKGFEdXJhdGlvbiAtIGEuZ2V0RWxhcHNlZCgpLCBiRHVyYXRpb24pO1xuXG4gICAgdmFyIGFFYXNlID0gYS5nZXRQcm9wKCdlYXNlJyk7XG4gICAgdmFyIGJFYXNlID0gYi5nZXRQcm9wKCdlYXNlJyk7XG4gICAgdmFyIGFGcm9tID0gYS5nZXRQcm9wKCdmcm9tJyk7XG4gICAgdmFyIGJGcm9tID0gYi5nZXRQcm9wKCdmcm9tJyk7XG4gICAgdmFyIGFUbyA9IGEuZ2V0UHJvcCgndG8nKTtcbiAgICB2YXIgYlRvID0gYi5nZXRQcm9wKCd0bycpO1xuICAgIHZhciBiVmFsdWVBdEJsZW5kQ29tcGxldGUgPSBjYWxjVmFsdWVBdFRpbWUoYkZyb20sIGJUbywgYkR1cmF0aW9uLCB0aGlzLmR1cmF0aW9uLCBiRWFzZSk7XG4gICAgdmFyIGJTdGFydHNIaWdoZXJUaGFuQSA9IGJGcm9tID4gYS5nZXQoKTtcblxuICAgIHRoaXMuYmxlbmRQb2ludHMgPSBbWzAsIGEuZ2V0KCldLCBbdGhpcy5kdXJhdGlvbiwgYlZhbHVlQXRCbGVuZENvbXBsZXRlXV07XG5cbiAgICAvLyBGaW5kIHR3ZWVuIGludGVyc2VjdGlvblxuICAgIHZhciB0aW1lc3RlcCA9IHRoaXMuZHVyYXRpb24gLyBhY2N1cmFjeTtcblxuICAgIHZhciBmb3VuZFAxID0gZmFsc2U7XG4gICAgdmFyIGZvdW5kUDIgPSBmYWxzZTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWNjdXJhY3k7IGkrKykge1xuICAgICAgdmFyIHRvdGFsVGltZSA9IGkgKiB0aW1lc3RlcDtcblxuICAgICAgdmFyIGFWYWx1ZUF0VGltZSA9IGNhbGNWYWx1ZUF0VGltZShhRnJvbSwgYVRvLCBhRHVyYXRpb24sIGEuZWxhcHNlZCArIHRvdGFsVGltZSwgYUVhc2UpO1xuICAgICAgdmFyIGJWYWx1ZUF0VGltZSA9IGNhbGNWYWx1ZUF0VGltZShiRnJvbSwgYlRvLCBiRHVyYXRpb24sIGIuZWxhcHNlZCArIHRvdGFsVGltZSwgYkVhc2UpO1xuXG4gICAgICB2YXIgaGFzSW50ZXJzZWN0ZWQgPSBiU3RhcnRzSGlnaGVyVGhhbkEgJiYgYVZhbHVlQXRUaW1lIDwgYlZhbHVlQXRUaW1lIHx8ICFiU3RhcnRzSGlnaGVyVGhhbkEgJiYgYVZhbHVlQXRUaW1lID4gYlZhbHVlQXRUaW1lO1xuXG4gICAgICBpZiAoIWZvdW5kUDEgJiYgaGFzSW50ZXJzZWN0ZWQpIHtcbiAgICAgICAgdGhpcy5ibGVuZFBvaW50cy5zcGxpY2UoMCwgMSwgW3RvdGFsVGltZSwgYlZhbHVlQXRUaW1lXSk7XG4gICAgICAgIGZvdW5kUDEgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBUT0RPIGdvIGJhY2sgdGhyb3VnaCBhbmQgY29tbWVudFxuICAgICAgdmFyIGhhc0ludGVyc2VjdGVkQiA9IGJTdGFydHNIaWdoZXJUaGFuQSAmJiBhVmFsdWVBdFRpbWUgPCBiVmFsdWVBdFRpbWUgfHwgIWJTdGFydHNIaWdoZXJUaGFuQSAmJiBhVmFsdWVBdFRpbWUgPiBiVmFsdWVBdFRpbWU7XG5cbiAgICAgIGlmIChmb3VuZFAxICYmIGhhc0ludGVyc2VjdGVkQikge1xuICAgICAgICB0aGlzLmJsZW5kUG9pbnRzWzJdID0gW3RvdGFsVGltZSwgYlZhbHVlQXRUaW1lXTtcbiAgICAgICAgZm91bmRQMiA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChmb3VuZFAyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0by5zdGFydCgpO1xuICB9O1xuXG4gIFR3ZWVuQmxlbmQucHJvdG90eXBlLm9uVXBkYXRlID0gZnVuY3Rpb24gb25VcGRhdGUoKSB7XG4gICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICBmcm9tID0gX3Byb3BzMi5mcm9tLFxuICAgICAgICB0byA9IF9wcm9wczIudG87XG5cbiAgICB2YXIgYSA9IGZyb207XG4gICAgdmFyIGIgPSB0bztcblxuICAgIHZhciBwcm9ncmVzcyA9IGNsYW1wUHJvZ3Jlc3MoKDAsIF9jYWxjLmdldFByb2dyZXNzRnJvbVZhbHVlKSh0aGlzLmJsZW5kUG9pbnRzWzBdWzBdLCB0aGlzLmJsZW5kUG9pbnRzWzJdWzBdLCBhLmdldEVsYXBzZWQoKSkpO1xuICAgIGlmIChwcm9ncmVzcyA+PSAxKSB7XG4gICAgICByZXR1cm4gYi5nZXQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFQID0gKDAsIF9jYWxjLmdldFZhbHVlRnJvbVByb2dyZXNzKSh0aGlzLmJsZW5kUG9pbnRzWzBdWzFdLCB0aGlzLmJsZW5kUG9pbnRzWzFdWzFdLCBwcm9ncmVzcyk7XG4gICAgICB2YXIgYlAgPSAoMCwgX2NhbGMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MpKHRoaXMuYmxlbmRQb2ludHNbMV1bMV0sIHRoaXMuYmxlbmRQb2ludHNbMl1bMV0sIHByb2dyZXNzKTtcbiAgICAgIHJldHVybiAoMCwgX2NhbGMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MpKGFQLCBiUCwgcHJvZ3Jlc3MpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gVHdlZW5CbGVuZDtcbn0oXzIuZGVmYXVsdCk7XG5cblR3ZWVuQmxlbmQuZGVmYXVsdFByb3BzID0ge1xuICBhY2N1cmFjeTogNjBcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChwcm9wcykge1xuICByZXR1cm4gbmV3IFR3ZWVuQmxlbmQocHJvcHMpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDJKc1pXNWtMWFIzWldWdWN5NXFjeUpkTENKdVlXMWxjeUk2V3lKamJHRnRjRkJ5YjJkeVpYTnpJaXdpWTJGc1kxWmhiSFZsUVhSVWFXMWxJaXdpWm5KdmJTSXNJblJ2SWl3aVpIVnlZWFJwYjI0aUxDSmxiR0Z3YzJWa0lpd2laV0Z6WlNJc0luQnliMmR5WlhOelFYUlVhVzFsSWl3aVZIZGxaVzVDYkdWdVpDSXNJbTl1VTNSaGNuUWlMQ0p3Y205d2N5SXNJbUZqWTNWeVlXTjVJaXdpWVNJc0ltSWlMQ0poUkhWeVlYUnBiMjRpTENKblpYUkVkWEpoZEdsdmJpSXNJbUpFZFhKaGRHbHZiaUlzSWsxaGRHZ2lMQ0p0YVc0aUxDSm5aWFJGYkdGd2MyVmtJaXdpWVVWaGMyVWlMQ0puWlhSUWNtOXdJaXdpWWtWaGMyVWlMQ0poUm5KdmJTSXNJbUpHY205dElpd2lZVlJ2SWl3aVlsUnZJaXdpWWxaaGJIVmxRWFJDYkdWdVpFTnZiWEJzWlhSbElpd2lZbE4wWVhKMGMwaHBaMmhsY2xSb1lXNUJJaXdpWjJWMElpd2lZbXhsYm1SUWIybHVkSE1pTENKMGFXMWxjM1JsY0NJc0ltWnZkVzVrVURFaUxDSm1iM1Z1WkZBeUlpd2lhU0lzSW5SdmRHRnNWR2x0WlNJc0ltRldZV3gxWlVGMFZHbHRaU0lzSW1KV1lXeDFaVUYwVkdsdFpTSXNJbWhoYzBsdWRHVnljMlZqZEdWa0lpd2ljM0JzYVdObElpd2lhR0Z6U1c1MFpYSnpaV04wWldSQ0lpd2ljM1JoY25RaUxDSnZibFZ3WkdGMFpTSXNJbkJ5YjJkeVpYTnpJaXdpWVZBaUxDSmlVQ0lzSW1SbFptRjFiSFJRY205d2N5SmRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dEJRVUZCT3pzN08wRkJRMEU3TzBGQlEwRTdPenM3T3pzN096czdRVUZGUVN4SlFVRk5RU3huUWtGQlowSXNlVUpCUVUwc1EwRkJUaXhGUVVGVExFTkJRVlFzUTBGQmRFSTdPMEZCUlVFc1UwRkJVME1zWlVGQlZDeERRVUY1UWtNc1NVRkJla0lzUlVGQkswSkRMRVZCUVM5Q0xFVkJRVzFEUXl4UlFVRnVReXhGUVVFMlEwTXNUMEZCTjBNc1JVRkJjMFJETEVsQlFYUkVMRVZCUVRSRU8wRkJRekZFTEUxQlFVMURMR2xDUVVGcFFrUXNTMEZCUzA0c1kwRkJZeXhuUTBGQmNVSXNRMEZCY2tJc1JVRkJkMEpKTEZGQlFYaENMRVZCUVd0RFF5eFBRVUZzUXl4RFFVRmtMRU5CUVV3c1EwRkJka0k3UVVGRFFTeFRRVUZQTEdkRFFVRnhRa2dzU1VGQmNrSXNSVUZCTWtKRExFVkJRVE5DTEVWQlFTdENTU3hqUVVFdlFpeERRVUZRTzBGQlEwUTdPMGxCUlV0RExGVTdPenM3T3pzN096dDFRa0ZMU2tNc1R5eHpRa0ZCVlR0QlFVRkJMR2xDUVVOcFF5eExRVUZMUXl4TFFVUjBRenRCUVVGQkxGRkJRMEZTTEVsQlJFRXNWVUZEUVVFc1NVRkVRVHRCUVVGQkxGRkJRMDFETEVWQlJFNHNWVUZEVFVFc1JVRkVUanRCUVVGQkxGRkJRMVZETEZGQlJGWXNWVUZEVlVFc1VVRkVWanRCUVVGQkxGRkJRMjlDVHl4UlFVUndRaXhWUVVOdlFrRXNVVUZFY0VJN08wRkJSVklzVVVGQlRVTXNTVUZCU1ZZc1NVRkJWanRCUVVOQkxGRkJRVTFYTEVsQlFVbFdMRVZCUVZZN1FVRkRRU3hSUVVGTlZ5eFpRVUZaUml4RlFVRkZSeXhYUVVGR0xFVkJRV3hDTzBGQlEwRXNVVUZCVFVNc1dVRkJXVWdzUlVGQlJVVXNWMEZCUml4RlFVRnNRanM3UVVGRlFTeFRRVUZMV0N4UlFVRk1MRWRCUVdkQ1FTeFpRVUZaWVN4TFFVRkxReXhIUVVGTUxFTkJRekZDU2l4WlFVRlpSaXhGUVVGRlR5eFZRVUZHTEVWQlJHTXNSVUZGTVVKSUxGTkJSakJDTEVOQlFUVkNPenRCUVV0QkxGRkJRVTFKTEZGQlFWRlNMRVZCUVVWVExFOUJRVVlzUTBGQlZTeE5RVUZXTEVOQlFXUTdRVUZEUVN4UlFVRk5ReXhSUVVGUlZDeEZRVUZGVVN4UFFVRkdMRU5CUVZVc1RVRkJWaXhEUVVGa08wRkJRMEVzVVVGQlRVVXNVVUZCVVZnc1JVRkJSVk1zVDBGQlJpeERRVUZWTEUxQlFWWXNRMEZCWkR0QlFVTkJMRkZCUVUxSExGRkJRVkZZTEVWQlFVVlJMRTlCUVVZc1EwRkJWU3hOUVVGV0xFTkJRV1E3UVVGRFFTeFJRVUZOU1N4TlFVRk5ZaXhGUVVGRlV5eFBRVUZHTEVOQlFWVXNTVUZCVml4RFFVRmFPMEZCUTBFc1VVRkJUVXNzVFVGQlRXSXNSVUZCUlZFc1QwRkJSaXhEUVVGVkxFbEJRVllzUTBGQldqdEJRVU5CTEZGQlFVMU5MSGRDUVVGM1FqRkNMR2RDUVVGblFuVkNMRXRCUVdoQ0xFVkJRWFZDUlN4SFFVRjJRaXhGUVVFMFFsWXNVMEZCTlVJc1JVRkJkVU1zUzBGQlMxb3NVVUZCTlVNc1JVRkJjMFJyUWl4TFFVRjBSQ3hEUVVFNVFqdEJRVU5CTEZGQlFVMU5MSEZDUVVGeFFrb3NVVUZCVVZvc1JVRkJSV2xDTEVkQlFVWXNSVUZCYmtNN08wRkJSVUVzVTBGQlMwTXNWMEZCVEN4SFFVRnRRaXhEUVVOcVFpeERRVUZETEVOQlFVUXNSVUZCU1d4Q0xFVkJRVVZwUWl4SFFVRkdMRVZCUVVvc1EwRkVhVUlzUlVGRmFrSXNRMEZCUXl4TFFVRkxla0lzVVVGQlRpeEZRVUZuUW5WQ0xIRkNRVUZvUWl4RFFVWnBRaXhEUVVGdVFqczdRVUZMUVR0QlFVTkJMRkZCUVUxSkxGZEJRVmNzUzBGQlN6TkNMRkZCUVV3c1IwRkJaMEpQTEZGQlFXcERPenRCUVVWQkxGRkJRVWx4UWl4VlFVRlZMRXRCUVdRN1FVRkRRU3hSUVVGSlF5eFZRVUZWTEV0QlFXUTdPMEZCUlVFc1UwRkJTeXhKUVVGSlF5eEpRVUZKTEVOQlFXSXNSVUZCWjBKQkxFbEJRVWwyUWl4UlFVRndRaXhGUVVFNFFuVkNMRWRCUVRsQ0xFVkJRVzFETzBGQlEycERMRlZCUVUxRExGbEJRVmxFTEVsQlFVbElMRkZCUVhSQ096dEJRVVZCTEZWQlFVMUxMR1ZCUVdWdVF5eG5Ra0ZCWjBKelFpeExRVUZvUWl4RlFVRjFRa1VzUjBGQmRrSXNSVUZCTkVKWUxGTkJRVFZDTEVWQlFYVkRSaXhGUVVGRlVDeFBRVUZHTEVkQlFWazRRaXhUUVVGdVJDeEZRVUU0UkdZc1MwRkJPVVFzUTBGQmNrSTdRVUZEUVN4VlFVRk5hVUlzWlVGQlpYQkRMR2RDUVVGblFuVkNMRXRCUVdoQ0xFVkJRWFZDUlN4SFFVRjJRaXhGUVVFMFFsWXNVMEZCTlVJc1JVRkJkVU5JTEVWQlFVVlNMRTlCUVVZc1IwRkJXVGhDTEZOQlFXNUVMRVZCUVRoRVlpeExRVUU1UkN4RFFVRnlRanM3UVVGRlFTeFZRVUZOWjBJc2FVSkJRMGhXTEhOQ1FVRnpRbEVzWlVGQlpVTXNXVUZCZEVNc1NVRkRReXhEUVVGRFZDeHJRa0ZCUkN4SlFVRjFRbEVzWlVGQlpVTXNXVUZHZWtNN08wRkJTMEVzVlVGQlNTeERRVUZEVEN4UFFVRkVMRWxCUVZsTkxHTkJRV2hDTEVWQlFXZERPMEZCUXpsQ0xHRkJRVXRTTEZkQlFVd3NRMEZCYVVKVExFMUJRV3BDTEVOQlFYZENMRU5CUVhoQ0xFVkJRVEpDTEVOQlFUTkNMRVZCUVRoQ0xFTkJRVU5LTEZOQlFVUXNSVUZCV1VVc1dVRkJXaXhEUVVFNVFqdEJRVU5CVEN4clFrRkJWU3hKUVVGV08wRkJRMFE3TzBGQlJVUTdRVUZEUVN4VlFVRk5VU3hyUWtGRFNGb3NjMEpCUVhOQ1VTeGxRVUZsUXl4WlFVRjBReXhKUVVORExFTkJRVU5VTEd0Q1FVRkVMRWxCUVhWQ1VTeGxRVUZsUXl4WlFVWjZRenM3UVVGTFFTeFZRVUZKVEN4WFFVRlhVU3hsUVVGbUxFVkJRV2RETzBGQlF6bENMR0ZCUVV0V0xGZEJRVXdzUTBGQmFVSXNRMEZCYWtJc1NVRkJjMElzUTBGQlEwc3NVMEZCUkN4RlFVRlpSU3haUVVGYUxFTkJRWFJDTzBGQlEwRktMR3RDUVVGVkxFbEJRVlk3UVVGRFJEczdRVUZGUkN4VlFVRkpRU3hQUVVGS0xFVkJRV0U3UVVGRFdEdEJRVU5FTzBGQlEwWTdPMEZCUlVRNVFpeFBRVUZIYzBNc1MwRkJTRHRCUVVORUxFYzdPM1ZDUVVWRVF5eFJMSFZDUVVGWE8wRkJRVUVzYTBKQlExa3NTMEZCUzJoRExFdEJSR3BDTzBGQlFVRXNVVUZEUkZJc1NVRkVReXhYUVVORVFTeEpRVVJETzBGQlFVRXNVVUZEUzBNc1JVRkVUQ3hYUVVOTFFTeEZRVVJNT3p0QlFVVlVMRkZCUVUxVExFbEJRVWxXTEVsQlFWWTdRVUZEUVN4UlFVRk5WeXhKUVVGSlZpeEZRVUZXT3p0QlFVVkJMRkZCUVUxM1F5eFhRVUZYTTBNc1kwRkJZeXhuUTBGQmNVSXNTMEZCU3poQ0xGZEJRVXdzUTBGQmFVSXNRMEZCYWtJc1JVRkJiMElzUTBGQmNFSXNRMEZCY2tJc1JVRkJOa01zUzBGQlMwRXNWMEZCVEN4RFFVRnBRaXhEUVVGcVFpeEZRVUZ2UWl4RFFVRndRaXhEUVVFM1F5eEZRVUZ4Uld4Q0xFVkJRVVZQTEZWQlFVWXNSVUZCY2tVc1EwRkJaQ3hEUVVGcVFqdEJRVU5CTEZGQlFVbDNRaXhaUVVGWkxFTkJRV2hDTEVWQlFXMUNPMEZCUTJwQ0xHRkJRVTg1UWl4RlFVRkZaMElzUjBGQlJpeEZRVUZRTzBGQlEwUXNTMEZHUkN4TlFVVlBPMEZCUTB3c1ZVRkJUV1VzUzBGQlN5eG5RMEZCY1VJc1MwRkJTMlFzVjBGQlRDeERRVUZwUWl4RFFVRnFRaXhGUVVGdlFpeERRVUZ3UWl4RFFVRnlRaXhGUVVFMlF5eExRVUZMUVN4WFFVRk1MRU5CUVdsQ0xFTkJRV3BDTEVWQlFXOUNMRU5CUVhCQ0xFTkJRVGRETEVWQlFYRkZZU3hSUVVGeVJTeERRVUZZTzBGQlEwRXNWVUZCVFVVc1MwRkJTeXhuUTBGQmNVSXNTMEZCUzJZc1YwRkJUQ3hEUVVGcFFpeERRVUZxUWl4RlFVRnZRaXhEUVVGd1FpeERRVUZ5UWl4RlFVRTJReXhMUVVGTFFTeFhRVUZNTEVOQlFXbENMRU5CUVdwQ0xFVkJRVzlDTEVOQlFYQkNMRU5CUVRkRExFVkJRWEZGWVN4UlFVRnlSU3hEUVVGWU8wRkJRMEVzWVVGQlR5eG5RMEZCY1VKRExFVkJRWEpDTEVWQlFYbENReXhGUVVGNlFpeEZRVUUyUWtZc1VVRkJOMElzUTBGQlVEdEJRVU5FTzBGQlEwWXNSenM3T3pzN1FVRnlSa2R1UXl4VkxFTkJRMGR6UXl4WkxFZEJRV1U3UVVGRGNFSnVReXhaUVVGVk8wRkJSRlVzUXpzN2EwSkJkVVpVTEZWQlFVTkVMRXRCUVVRN1FVRkJRU3hUUVVGWExFbEJRVWxHTEZWQlFVb3NRMEZCWlVVc1MwRkJaaXhEUVVGWU8wRkJRVUVzUXlJc0ltWnBiR1VpT2lKaWJHVnVaQzEwZDJWbGJuTXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1FXTjBhVzl1SUdaeWIyMGdKeTR2Snp0Y2JtbHRjRzl5ZENCN0lHZGxkRkJ5YjJkeVpYTnpSbkp2YlZaaGJIVmxMQ0JuWlhSV1lXeDFaVVp5YjIxUWNtOW5jbVZ6Y3lCOUlHWnliMjBnSnk0dUwybHVZeTlqWVd4akp6dGNibWx0Y0c5eWRDQjdJR05zWVcxd0lIMGdabkp2YlNBbkxpNHZhVzVqTDNSeVlXNXpabTl5YldWeWN5YzdYRzVjYm1OdmJuTjBJR05zWVcxd1VISnZaM0psYzNNZ1BTQmpiR0Z0Y0Nnd0xDQXhLVHRjYmx4dVpuVnVZM1JwYjI0Z1kyRnNZMVpoYkhWbFFYUlVhVzFsS0daeWIyMHNJSFJ2TENCa2RYSmhkR2x2Yml3Z1pXeGhjSE5sWkN3Z1pXRnpaU2tnZTF4dUlDQmpiMjV6ZENCd2NtOW5jbVZ6YzBGMFZHbHRaU0E5SUdWaGMyVW9ZMnhoYlhCUWNtOW5jbVZ6Y3loblpYUlFjbTluY21WemMwWnliMjFXWVd4MVpTZ3dMQ0JrZFhKaGRHbHZiaXdnWld4aGNITmxaQ2twS1R0Y2JpQWdjbVYwZFhKdUlHZGxkRlpoYkhWbFJuSnZiVkJ5YjJkeVpYTnpLR1p5YjIwc0lIUnZMQ0J3Y205bmNtVnpjMEYwVkdsdFpTazdYRzU5WEc1Y2JtTnNZWE56SUZSM1pXVnVRbXhsYm1RZ1pYaDBaVzVrY3lCQlkzUnBiMjRnZTF4dUlDQnpkR0YwYVdNZ1pHVm1ZWFZzZEZCeWIzQnpJRDBnZTF4dUlDQWdJR0ZqWTNWeVlXTjVPaUEyTUZ4dUlDQjlPMXh1WEc0Z0lHOXVVM1JoY25Rb0tTQjdYRzRnSUNBZ1kyOXVjM1FnZXlCbWNtOXRMQ0IwYnl3Z1pIVnlZWFJwYjI0c0lHRmpZM1Z5WVdONUlIMGdQU0IwYUdsekxuQnliM0J6TzF4dUlDQWdJR052Ym5OMElHRWdQU0JtY205dE8xeHVJQ0FnSUdOdmJuTjBJR0lnUFNCMGJ6dGNiaUFnSUNCamIyNXpkQ0JoUkhWeVlYUnBiMjRnUFNCaExtZGxkRVIxY21GMGFXOXVLQ2s3WEc0Z0lDQWdZMjl1YzNRZ1lrUjFjbUYwYVc5dUlEMGdZaTVuWlhSRWRYSmhkR2x2YmlncE8xeHVYRzRnSUNBZ2RHaHBjeTVrZFhKaGRHbHZiaUE5SUdSMWNtRjBhVzl1SUh4OElFMWhkR2d1YldsdUtGeHVJQ0FnSUNBZ1lVUjFjbUYwYVc5dUlDMGdZUzVuWlhSRmJHRndjMlZrS0Nrc1hHNGdJQ0FnSUNCaVJIVnlZWFJwYjI1Y2JpQWdJQ0FwTzF4dVhHNGdJQ0FnWTI5dWMzUWdZVVZoYzJVZ1BTQmhMbWRsZEZCeWIzQW9KMlZoYzJVbktUdGNiaUFnSUNCamIyNXpkQ0JpUldGelpTQTlJR0l1WjJWMFVISnZjQ2duWldGelpTY3BPMXh1SUNBZ0lHTnZibk4wSUdGR2NtOXRJRDBnWVM1blpYUlFjbTl3S0NkbWNtOXRKeWs3WEc0Z0lDQWdZMjl1YzNRZ1lrWnliMjBnUFNCaUxtZGxkRkJ5YjNBb0oyWnliMjBuS1R0Y2JpQWdJQ0JqYjI1emRDQmhWRzhnUFNCaExtZGxkRkJ5YjNBb0ozUnZKeWs3WEc0Z0lDQWdZMjl1YzNRZ1lsUnZJRDBnWWk1blpYUlFjbTl3S0NkMGJ5Y3BPMXh1SUNBZ0lHTnZibk4wSUdKV1lXeDFaVUYwUW14bGJtUkRiMjF3YkdWMFpTQTlJR05oYkdOV1lXeDFaVUYwVkdsdFpTaGlSbkp2YlN3Z1lsUnZMQ0JpUkhWeVlYUnBiMjRzSUhSb2FYTXVaSFZ5WVhScGIyNHNJR0pGWVhObEtUdGNiaUFnSUNCamIyNXpkQ0JpVTNSaGNuUnpTR2xuYUdWeVZHaGhia0VnUFNCaVJuSnZiU0ErSUdFdVoyVjBLQ2s3WEc1Y2JpQWdJQ0IwYUdsekxtSnNaVzVrVUc5cGJuUnpJRDBnVzF4dUlDQWdJQ0FnV3pBc0lHRXVaMlYwS0NsZExGeHVJQ0FnSUNBZ1czUm9hWE11WkhWeVlYUnBiMjRzSUdKV1lXeDFaVUYwUW14bGJtUkRiMjF3YkdWMFpWMWNiaUFnSUNCZE8xeHVYRzRnSUNBZ0x5OGdSbWx1WkNCMGQyVmxiaUJwYm5SbGNuTmxZM1JwYjI1Y2JpQWdJQ0JqYjI1emRDQjBhVzFsYzNSbGNDQTlJSFJvYVhNdVpIVnlZWFJwYjI0Z0x5QmhZMk4xY21GamVUdGNibHh1SUNBZ0lHeGxkQ0JtYjNWdVpGQXhJRDBnWm1Gc2MyVTdYRzRnSUNBZ2JHVjBJR1p2ZFc1a1VESWdQU0JtWVd4elpUdGNibHh1SUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2dZV05qZFhKaFkzazdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ1kyOXVjM1FnZEc5MFlXeFVhVzFsSUQwZ2FTQXFJSFJwYldWemRHVndPMXh1WEc0Z0lDQWdJQ0JqYjI1emRDQmhWbUZzZFdWQmRGUnBiV1VnUFNCallXeGpWbUZzZFdWQmRGUnBiV1VvWVVaeWIyMHNJR0ZVYnl3Z1lVUjFjbUYwYVc5dUxDQmhMbVZzWVhCelpXUWdLeUIwYjNSaGJGUnBiV1VzSUdGRllYTmxLVHRjYmlBZ0lDQWdJR052Ym5OMElHSldZV3gxWlVGMFZHbHRaU0E5SUdOaGJHTldZV3gxWlVGMFZHbHRaU2hpUm5KdmJTd2dZbFJ2TENCaVJIVnlZWFJwYjI0c0lHSXVaV3hoY0hObFpDQXJJSFJ2ZEdGc1ZHbHRaU3dnWWtWaGMyVXBPMXh1WEc0Z0lDQWdJQ0JqYjI1emRDQm9ZWE5KYm5SbGNuTmxZM1JsWkNBOUlDaGNiaUFnSUNBZ0lDQWdLR0pUZEdGeWRITklhV2RvWlhKVWFHRnVRU0FtSmlCaFZtRnNkV1ZCZEZScGJXVWdQQ0JpVm1Gc2RXVkJkRlJwYldVcElIeDhYRzRnSUNBZ0lDQWdJQ2doWWxOMFlYSjBjMGhwWjJobGNsUm9ZVzVCSUNZbUlHRldZV3gxWlVGMFZHbHRaU0ErSUdKV1lXeDFaVUYwVkdsdFpTbGNiaUFnSUNBZ0lDazdYRzVjYmlBZ0lDQWdJR2xtSUNnaFptOTFibVJRTVNBbUppQm9ZWE5KYm5SbGNuTmxZM1JsWkNrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG1Kc1pXNWtVRzlwYm5SekxuTndiR2xqWlNnd0xDQXhMQ0JiZEc5MFlXeFVhVzFsTENCaVZtRnNkV1ZCZEZScGJXVmRLVHRjYmlBZ0lDQWdJQ0FnWm05MWJtUlFNU0E5SUhSeWRXVTdYRzRnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQzh2SUZSUFJFOGdaMjhnWW1GamF5QjBhSEp2ZFdkb0lHRnVaQ0JqYjIxdFpXNTBYRzRnSUNBZ0lDQmpiMjV6ZENCb1lYTkpiblJsY25ObFkzUmxaRUlnUFNBb1hHNGdJQ0FnSUNBZ0lDaGlVM1JoY25SelNHbG5hR1Z5VkdoaGJrRWdKaVlnWVZaaGJIVmxRWFJVYVcxbElEd2dZbFpoYkhWbFFYUlVhVzFsS1NCOGZGeHVJQ0FnSUNBZ0lDQW9JV0pUZEdGeWRITklhV2RvWlhKVWFHRnVRU0FtSmlCaFZtRnNkV1ZCZEZScGJXVWdQaUJpVm1Gc2RXVkJkRlJwYldVcFhHNGdJQ0FnSUNBcE8xeHVYRzRnSUNBZ0lDQnBaaUFvWm05MWJtUlFNU0FtSmlCb1lYTkpiblJsY25ObFkzUmxaRUlwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVpYkdWdVpGQnZhVzUwYzFzeVhTQTlJRnQwYjNSaGJGUnBiV1VzSUdKV1lXeDFaVUYwVkdsdFpWMDdYRzRnSUNBZ0lDQWdJR1p2ZFc1a1VESWdQU0IwY25WbE8xeHVJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQnBaaUFvWm05MWJtUlFNaWtnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTQ3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmVnh1WEc0Z0lDQWdkRzh1YzNSaGNuUW9LVHRjYmlBZ2ZWeHVYRzRnSUc5dVZYQmtZWFJsS0NrZ2UxeHVJQ0FnSUdOdmJuTjBJSHNnWm5KdmJTd2dkRzhnZlNBOUlIUm9hWE11Y0hKdmNITTdYRzRnSUNBZ1kyOXVjM1FnWVNBOUlHWnliMjA3WEc0Z0lDQWdZMjl1YzNRZ1lpQTlJSFJ2TzF4dVhHNGdJQ0FnWTI5dWMzUWdjSEp2WjNKbGMzTWdQU0JqYkdGdGNGQnliMmR5WlhOektHZGxkRkJ5YjJkeVpYTnpSbkp2YlZaaGJIVmxLSFJvYVhNdVlteGxibVJRYjJsdWRITmJNRjFiTUYwc0lIUm9hWE11WW14bGJtUlFiMmx1ZEhOYk1sMWJNRjBzSUdFdVoyVjBSV3hoY0hObFpDZ3BLU2s3WEc0Z0lDQWdhV1lnS0hCeWIyZHlaWE56SUQ0OUlERXBJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQmlMbWRsZENncE8xeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0JqYjI1emRDQmhVQ0E5SUdkbGRGWmhiSFZsUm5KdmJWQnliMmR5WlhOektIUm9hWE11WW14bGJtUlFiMmx1ZEhOYk1GMWJNVjBzSUhSb2FYTXVZbXhsYm1SUWIybHVkSE5iTVYxYk1WMHNJSEJ5YjJkeVpYTnpLVHRjYmlBZ0lDQWdJR052Ym5OMElHSlFJRDBnWjJWMFZtRnNkV1ZHY205dFVISnZaM0psYzNNb2RHaHBjeTVpYkdWdVpGQnZhVzUwYzFzeFhWc3hYU3dnZEdocGN5NWliR1Z1WkZCdmFXNTBjMXN5WFZzeFhTd2djSEp2WjNKbGMzTXBPMXh1SUNBZ0lDQWdjbVYwZFhKdUlHZGxkRlpoYkhWbFJuSnZiVkJ5YjJkeVpYTnpLR0ZRTENCaVVDd2djSEp2WjNKbGMzTXBPMXh1SUNBZ0lIMWNiaUFnZlZ4dWZWeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQW9jSEp2Y0hNcElEMCtJRzVsZHlCVWQyVmxia0pzWlc1a0tIQnliM0J6S1R0Y2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL2JsZW5kLXR3ZWVucy5qc1xuICoqIG1vZHVsZSBpZCA9IDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF8gPSByZXF1aXJlKCcuLycpO1xuXG52YXIgXzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF8pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBDaGFpbiA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gIF9pbmhlcml0cyhDaGFpbiwgX0FjdGlvbik7XG5cbiAgZnVuY3Rpb24gQ2hhaW4ocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2hhaW4pO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpcy5wbGF5TmV4dCA9IF90aGlzLnBsYXlOZXh0LmJpbmQoX3RoaXMpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIENoYWluLnByb3RvdHlwZS5vblN0YXJ0ID0gZnVuY3Rpb24gb25TdGFydCgpIHtcbiAgICB0aGlzLnByb3BzLmkgPSAwO1xuICAgIHRoaXMucGxheUN1cnJlbnQoKTtcbiAgfTtcblxuICBDaGFpbi5wcm90b3R5cGUucGxheU5leHQgPSBmdW5jdGlvbiBwbGF5TmV4dCgpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgaSA9IF9wcm9wcy5pLFxuICAgICAgICBvcmRlciA9IF9wcm9wcy5vcmRlcjtcblxuICAgIGlmIChpIDwgb3JkZXIubGVuZ3RoIC0gMSkge1xuICAgICAgdGhpcy5wcm9wcy5pKys7XG4gICAgICB0aGlzLnBsYXlDdXJyZW50KCk7XG4gICAgfVxuICB9O1xuXG4gIENoYWluLnByb3RvdHlwZS5wbGF5Q3VycmVudCA9IGZ1bmN0aW9uIHBsYXlDdXJyZW50KCkge1xuICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgaSA9IF9wcm9wczIuaSxcbiAgICAgICAgb3JkZXIgPSBfcHJvcHMyLm9yZGVyO1xuXG4gICAgb3JkZXJbaV0ub25Db21wbGV0ZSA9IHRoaXMucGxheU5leHQ7XG4gICAgb3JkZXJbaV0uc3RhcnQoKTtcbiAgfTtcblxuICBDaGFpbi5wcm90b3R5cGUub25TdG9wID0gZnVuY3Rpb24gb25TdG9wKCkge1xuICAgIHZhciBfcHJvcHMzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgaSA9IF9wcm9wczMuaSxcbiAgICAgICAgb3JkZXIgPSBfcHJvcHMzLm9yZGVyO1xuXG4gICAgb3JkZXJbaV0uc3RvcCgpO1xuICB9O1xuXG4gIHJldHVybiBDaGFpbjtcbn0oXzIuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcmRlcikge1xuICByZXR1cm4gbmV3IENoYWluKHsgb3JkZXI6IG9yZGVyIH0pO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDJOb1lXbHVMbXB6SWwwc0ltNWhiV1Z6SWpwYklrTm9ZV2x1SWl3aWNISnZjSE1pTENKd2JHRjVUbVY0ZENJc0ltSnBibVFpTENKdmJsTjBZWEowSWl3aWFTSXNJbkJzWVhsRGRYSnlaVzUwSWl3aWIzSmtaWElpTENKc1pXNW5kR2dpTENKdmJrTnZiWEJzWlhSbElpd2ljM1JoY25RaUxDSnZibE4wYjNBaUxDSnpkRzl3SWwwc0ltMWhjSEJwYm1keklqb2lPenM3TzBGQlFVRTdPenM3T3pzN096czdPenRKUVVWTlFTeExPenM3UVVGRFNpeHBRa0ZCV1VNc1MwRkJXaXhGUVVGdFFqdEJRVUZCT3p0QlFVRkJMR2xFUVVOcVFpeHRRa0ZCVFVFc1MwRkJUaXhEUVVScFFqczdRVUZGYWtJc1ZVRkJTME1zVVVGQlRDeEhRVUZuUWl4TlFVRkxRU3hSUVVGTUxFTkJRV05ETEVsQlFXUXNUMEZCYUVJN1FVRkdhVUk3UVVGSGJFSTdPMnRDUVVWRVF5eFBMSE5DUVVGVk8wRkJRMUlzVTBGQlMwZ3NTMEZCVEN4RFFVRlhTU3hEUVVGWUxFZEJRV1VzUTBGQlpqdEJRVU5CTEZOQlFVdERMRmRCUVV3N1FVRkRSQ3hIT3p0clFrRkZSRW9zVVN4MVFrRkJWenRCUVVGQkxHbENRVU5aTEV0QlFVdEVMRXRCUkdwQ08wRkJRVUVzVVVGRFJFa3NRMEZFUXl4VlFVTkVRU3hEUVVSRE8wRkJRVUVzVVVGRFJVVXNTMEZFUml4VlFVTkZRU3hMUVVSR096dEJRVVZVTEZGQlFVbEdMRWxCUVVsRkxFMUJRVTFETEUxQlFVNHNSMEZCWlN4RFFVRjJRaXhGUVVFd1FqdEJRVU40UWl4WFFVRkxVQ3hMUVVGTUxFTkJRVmRKTEVOQlFWZzdRVUZEUVN4WFFVRkxReXhYUVVGTU8wRkJRMFE3UVVGRFJpeEhPenRyUWtGRlJFRXNWeXd3UWtGQll6dEJRVUZCTEd0Q1FVTlRMRXRCUVV0TUxFdEJSR1E3UVVGQlFTeFJRVU5LU1N4RFFVUkpMRmRCUTBwQkxFTkJSRWs3UVVGQlFTeFJRVU5FUlN4TFFVUkRMRmRCUTBSQkxFdEJSRU03TzBGQlJWcEJMRlZCUVUxR0xFTkJRVTRzUlVGQlUwa3NWVUZCVkN4SFFVRnpRaXhMUVVGTFVDeFJRVUV6UWp0QlFVTkJTeXhWUVVGTlJpeERRVUZPTEVWQlFWTkxMRXRCUVZRN1FVRkRSQ3hIT3p0clFrRkZSRU1zVFN4eFFrRkJVenRCUVVGQkxHdENRVU5qTEV0QlFVdFdMRXRCUkc1Q08wRkJRVUVzVVVGRFEwa3NRMEZFUkN4WFFVTkRRU3hEUVVSRU8wRkJRVUVzVVVGRFNVVXNTMEZFU2l4WFFVTkpRU3hMUVVSS096dEJRVVZRUVN4VlFVRk5SaXhEUVVGT0xFVkJRVk5QTEVsQlFWUTdRVUZEUkN4SE96czdPenRyUWtGSFdTeFZRVUZEVEN4TFFVRkVPMEZCUVVFc1UwRkJWeXhKUVVGSlVDeExRVUZLTEVOQlFWVXNSVUZCUlU4c1dVRkJSaXhGUVVGV0xFTkJRVmc3UVVGQlFTeERJaXdpWm1sc1pTSTZJbU5vWVdsdUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5dFlYUjBjR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUVGamRHbHZiaUJtY205dElDY3VMeWM3WEc1Y2JtTnNZWE56SUVOb1lXbHVJR1Y0ZEdWdVpITWdRV04wYVc5dUlIdGNiaUFnWTI5dWMzUnlkV04wYjNJb2NISnZjSE1wSUh0Y2JpQWdJQ0J6ZFhCbGNpaHdjbTl3Y3lrN1hHNGdJQ0FnZEdocGN5NXdiR0Y1VG1WNGRDQTlJSFJvYVhNdWNHeGhlVTVsZUhRdVltbHVaQ2gwYUdsektUdGNiaUFnZlZ4dVhHNGdJRzl1VTNSaGNuUW9LU0I3WEc0Z0lDQWdkR2hwY3k1d2NtOXdjeTVwSUQwZ01EdGNiaUFnSUNCMGFHbHpMbkJzWVhsRGRYSnlaVzUwS0NrN1hHNGdJSDFjYmx4dUlDQndiR0Y1VG1WNGRDZ3BJSHRjYmlBZ0lDQmpiMjV6ZENCN0lHa3NJRzl5WkdWeUlIMGdQU0IwYUdsekxuQnliM0J6TzF4dUlDQWdJR2xtSUNocElEd2diM0prWlhJdWJHVnVaM1JvSUMwZ01Ta2dlMXh1SUNBZ0lDQWdkR2hwY3k1d2NtOXdjeTVwS3lzN1hHNGdJQ0FnSUNCMGFHbHpMbkJzWVhsRGRYSnlaVzUwS0NrN1hHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ2NHeGhlVU4xY25KbGJuUW9LU0I3WEc0Z0lDQWdZMjl1YzNRZ2V5QnBMQ0J2Y21SbGNpQjlJRDBnZEdocGN5NXdjbTl3Y3p0Y2JpQWdJQ0J2Y21SbGNsdHBYUzV2YmtOdmJYQnNaWFJsSUQwZ2RHaHBjeTV3YkdGNVRtVjRkRHRjYmlBZ0lDQnZjbVJsY2x0cFhTNXpkR0Z5ZENncE8xeHVJQ0I5WEc1Y2JpQWdiMjVUZEc5d0tDa2dlMXh1SUNBZ0lHTnZibk4wSUhzZ2FTd2diM0prWlhJZ2ZTQTlJSFJvYVhNdWNISnZjSE03WEc0Z0lDQWdiM0prWlhKYmFWMHVjM1J2Y0NncE8xeHVJQ0I5WEc1OVhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElDaHZjbVJsY2lrZ1BUNGdibVYzSUVOb1lXbHVLSHNnYjNKa1pYSWdmU2s3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvY2hhaW4uanNcbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfID0gcmVxdWlyZSgnLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBDb21wb3NpdGVBY3Rpb24gPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICBfaW5oZXJpdHMoQ29tcG9zaXRlQWN0aW9uLCBfQWN0aW9uKTtcblxuICBmdW5jdGlvbiBDb21wb3NpdGVBY3Rpb24ocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29tcG9zaXRlQWN0aW9uKTtcblxuICAgIHZhciBhY3Rpb25zID0gcHJvcHMuYWN0aW9ucyxcbiAgICAgICAgcmVtYWluaW5nUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFsnYWN0aW9ucyddKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uY2FsbCh0aGlzLCByZW1haW5pbmdQcm9wcykpO1xuXG4gICAgX3RoaXMuY3VycmVudCA9IHt9O1xuICAgIF90aGlzLmFjdGlvbktleXMgPSBbXTtcbiAgICBfdGhpcy5hZGRBY3Rpb25zKHByb3BzLmFjdGlvbnMpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIENvbXBvc2l0ZUFjdGlvbi5wcm90b3R5cGUuYWRkQWN0aW9ucyA9IGZ1bmN0aW9uIGFkZEFjdGlvbnMoYWN0aW9ucykge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIF9sb29wID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgaWYgKF90aGlzMi5hY3Rpb25LZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgX3RoaXMyLmFjdGlvbktleXMucHVzaChrZXkpO1xuICAgICAgfVxuXG4gICAgICBfdGhpczJba2V5XSA9IGFjdGlvbnNba2V5XTtcblxuICAgICAgdmFyIG9uVXBkYXRlID0gZnVuY3Rpb24gKHYsIGFjdGlvbikge1xuICAgICAgICByZXR1cm4gX3RoaXMyLmN1cnJlbnRba2V5XSA9IGFjdGlvbi5nZXQoKTtcbiAgICAgIH07XG5cbiAgICAgIC8vIEltbWVkaWF0ZWx5IHVwZGF0ZSB3aXRoIHRoZSBjdXJyZW50IGFjdGlvbiBzdGF0ZVxuICAgICAgb25VcGRhdGUobnVsbCwgX3RoaXMyW2tleV0pO1xuXG4gICAgICBfdGhpczJba2V5XS5zZXRQcm9wcyh7XG4gICAgICAgIF9vblN0b3A6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMyLm51bUFjdGl2ZUFjdGlvbnMtLTtcbiAgICAgICAgfVxuICAgICAgfSkuYWRkTGlzdGVuZXIob25VcGRhdGUpO1xuICAgIH07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gYWN0aW9ucykge1xuICAgICAgX2xvb3Aoa2V5KTtcbiAgICB9XG4gIH07XG5cbiAgQ29tcG9zaXRlQWN0aW9uLnByb3RvdHlwZS5vblN0YXJ0ID0gZnVuY3Rpb24gb25TdGFydCgpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIHRoaXMubnVtQWN0aXZlQWN0aW9ucyA9IHRoaXMuYWN0aW9uS2V5cy5sZW5ndGg7XG4gICAgdGhpcy5hY3Rpb25LZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIF90aGlzM1trZXldLnN0YXJ0KCk7XG4gICAgfSk7XG4gIH07XG5cbiAgQ29tcG9zaXRlQWN0aW9uLnByb3RvdHlwZS5vblN0b3AgPSBmdW5jdGlvbiBvblN0b3AoKSB7XG4gICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICB0aGlzLmFjdGlvbktleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gX3RoaXM0W2tleV0uc3RvcCgpO1xuICAgIH0pO1xuICB9O1xuXG4gIENvbXBvc2l0ZUFjdGlvbi5wcm90b3R5cGUuZ2V0VmVsb2NpdHkgPSBmdW5jdGlvbiBnZXRWZWxvY2l0eSgpIHtcbiAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgIHZhciB2ZWxvY2l0eSA9IHt9O1xuICAgIHRoaXMuYWN0aW9uS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiB2ZWxvY2l0eVtrZXldID0gX3RoaXM1W2tleV0uZ2V0VmVsb2NpdHkoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdmVsb2NpdHk7XG4gIH07XG5cbiAgQ29tcG9zaXRlQWN0aW9uLnByb3RvdHlwZS5pc0FjdGlvbkNvbXBsZXRlID0gZnVuY3Rpb24gaXNBY3Rpb25Db21wbGV0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5udW1BY3RpdmVBY3Rpb25zID09PSAwO1xuICB9O1xuXG4gIHJldHVybiBDb21wb3NpdGVBY3Rpb247XG59KF8yLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoYWN0aW9ucywgcHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBDb21wb3NpdGVBY3Rpb24oX2V4dGVuZHMoe1xuICAgIGFjdGlvbnM6IGFjdGlvbnNcbiAgfSwgcHJvcHMpKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwyTnZiWEJ2YzJsMFpTNXFjeUpkTENKdVlXMWxjeUk2V3lKRGIyMXdiM05wZEdWQlkzUnBiMjRpTENKd2NtOXdjeUlzSW1GamRHbHZibk1pTENKeVpXMWhhVzVwYm1kUWNtOXdjeUlzSW1OMWNuSmxiblFpTENKaFkzUnBiMjVMWlhseklpd2lZV1JrUVdOMGFXOXVjeUlzSW10bGVTSXNJbWx1WkdWNFQyWWlMQ0p3ZFhOb0lpd2liMjVWY0dSaGRHVWlMQ0oySWl3aVlXTjBhVzl1SWl3aVoyVjBJaXdpYzJWMFVISnZjSE1pTENKZmIyNVRkRzl3SWl3aWJuVnRRV04wYVhabFFXTjBhVzl1Y3lJc0ltRmtaRXhwYzNSbGJtVnlJaXdpYjI1VGRHRnlkQ0lzSW14bGJtZDBhQ0lzSW1admNrVmhZMmdpTENKemRHRnlkQ0lzSW05dVUzUnZjQ0lzSW5OMGIzQWlMQ0puWlhSV1pXeHZZMmwwZVNJc0luWmxiRzlqYVhSNUlpd2lhWE5CWTNScGIyNURiMjF3YkdWMFpTSmRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPMEZCUVVFN096czdPenM3T3pzN096czdPMGxCUlUxQkxHVTdPenRCUVVOS0xESkNRVUZaUXl4TFFVRmFMRVZCUVcxQ08wRkJRVUU3TzBGQlFVRXNVVUZEVkVNc1QwRkVVeXhIUVVOelFrUXNTMEZFZEVJc1EwRkRWRU1zVDBGRVV6dEJRVUZCTEZGQlEwZERMR05CUkVnc05FSkJRM05DUml4TFFVUjBRanM3UVVGQlFTeHBSRUZGYWtJc2JVSkJRVTFGTEdOQlFVNHNRMEZHYVVJN08wRkJSMnBDTEZWQlFVdERMRTlCUVV3c1IwRkJaU3hGUVVGbU8wRkJRMEVzVlVGQlMwTXNWVUZCVEN4SFFVRnJRaXhGUVVGc1FqdEJRVU5CTEZWQlFVdERMRlZCUVV3c1EwRkJaMEpNTEUxQlFVMURMRTlCUVhSQ08wRkJUR2xDTzBGQlRXeENPenMwUWtGRlJFa3NWU3gxUWtGQlYwb3NUeXhGUVVGVE8wRkJRVUU3TzBGQlFVRXNNRUpCUTFCTExFZEJSRTg3UVVGRmFFSXNWVUZCU1N4UFFVRkxSaXhWUVVGTUxFTkJRV2RDUnl4UFFVRm9RaXhEUVVGM1FrUXNSMEZCZUVJc1RVRkJhVU1zUTBGQlF5eERRVUYwUXl4RlFVRjVRenRCUVVOMlF5eGxRVUZMUml4VlFVRk1MRU5CUVdkQ1NTeEpRVUZvUWl4RFFVRnhRa1lzUjBGQmNrSTdRVUZEUkRzN1FVRkZSQ3hoUVVGTFFTeEhRVUZNTEVsQlFWbE1MRkZCUVZGTExFZEJRVklzUTBGQldqczdRVUZGUVN4VlFVRk5SeXhYUVVGWExGVkJRVU5ETEVOQlFVUXNSVUZCU1VNc1RVRkJTanRCUVVGQkxHVkJRV1VzVDBGQlMxSXNUMEZCVEN4RFFVRmhSeXhIUVVGaUxFbEJRVzlDU3l4UFFVRlBReXhIUVVGUUxFVkJRVzVETzBGQlFVRXNUMEZCYWtJN08wRkJSVUU3UVVGRFFVZ3NaVUZCVXl4SlFVRlVMRVZCUVdVc1QwRkJTMGdzUjBGQlRDeERRVUZtT3p0QlFVVkJMR0ZCUVV0QkxFZEJRVXdzUlVGRFIwOHNVVUZFU0N4RFFVTlpPMEZCUTFKRExHbENRVUZUTzBGQlFVRXNhVUpCUVUwc1QwRkJTME1zWjBKQlFVd3NSVUZCVGp0QlFVRkJPMEZCUkVRc1QwRkVXaXhGUVVsSFF5eFhRVXBJTEVOQlNXVlFMRkZCU21ZN1FVRmlaMEk3TzBGQlEyeENMRk5CUVVzc1NVRkJUVWdzUjBGQldDeEpRVUZyUWt3c1QwRkJiRUlzUlVGQk1rSTdRVUZCUVN4WlFVRm9Ra3NzUjBGQlowSTdRVUZwUWpGQ08wRkJRMFlzUnpzN05FSkJSVVJYTEU4c2MwSkJRVlU3UVVGQlFUczdRVUZEVWl4VFFVRkxSaXhuUWtGQlRDeEhRVUYzUWl4TFFVRkxXQ3hWUVVGTUxFTkJRV2RDWXl4TlFVRjRRenRCUVVOQkxGTkJRVXRrTEZWQlFVd3NRMEZCWjBKbExFOUJRV2hDTEVOQlFYZENMRlZCUVVOaUxFZEJRVVE3UVVGQlFTeGhRVUZUTEU5QlFVdEJMRWRCUVV3c1JVRkJWV01zUzBGQlZpeEZRVUZVTzBGQlFVRXNTMEZCZUVJN1FVRkRSQ3hIT3pzMFFrRkZSRU1zVFN4eFFrRkJVenRCUVVGQk96dEJRVU5RTEZOQlFVdHFRaXhWUVVGTUxFTkJRV2RDWlN4UFFVRm9RaXhEUVVGM1FpeFZRVUZEWWl4SFFVRkVPMEZCUVVFc1lVRkJVeXhQUVVGTFFTeEhRVUZNTEVWQlFWVm5RaXhKUVVGV0xFVkJRVlE3UVVGQlFTeExRVUY0UWp0QlFVTkVMRWM3T3pSQ1FVVkVReXhYTERCQ1FVRmpPMEZCUVVFN08wRkJRMW9zVVVGQlRVTXNWMEZCVnl4RlFVRnFRanRCUVVOQkxGTkJRVXR3UWl4VlFVRk1MRU5CUVdkQ1pTeFBRVUZvUWl4RFFVRjNRaXhWUVVGRFlpeEhRVUZFTzBGQlFVRXNZVUZCVTJ0Q0xGTkJRVk5zUWl4SFFVRlVMRWxCUVdkQ0xFOUJRVXRCTEVkQlFVd3NSVUZCVldsQ0xGZEJRVllzUlVGQmVrSTdRVUZCUVN4TFFVRjRRanRCUVVOQkxGZEJRVTlETEZGQlFWQTdRVUZEUkN4SE96czBRa0ZGUkVNc1owSXNLMEpCUVcxQ08wRkJRMnBDTEZkQlFWRXNTMEZCUzFZc1owSkJRVXdzUzBGQk1FSXNRMEZCYkVNN1FVRkRSQ3hIT3pzN096dHJRa0ZIV1N4VlFVRkRaQ3hQUVVGRUxFVkJRVlZFTEV0QlFWWXNSVUZCYjBJN1FVRkRha01zVTBGQlR5eEpRVUZKUkN4bFFVRktPMEZCUTB4Rk8wRkJSRXNzUzBGRlJrUXNTMEZHUlN4RlFVRlFPMEZCU1VRc1F5SXNJbVpwYkdVaU9pSmpiMjF3YjNOcGRHVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1FXTjBhVzl1SUdaeWIyMGdKeTR2Snp0Y2JseHVZMnhoYzNNZ1EyOXRjRzl6YVhSbFFXTjBhVzl1SUdWNGRHVnVaSE1nUVdOMGFXOXVJSHRjYmlBZ1kyOXVjM1J5ZFdOMGIzSW9jSEp2Y0hNcElIdGNiaUFnSUNCamIyNXpkQ0I3SUdGamRHbHZibk1zSUM0dUxuSmxiV0ZwYm1sdVoxQnliM0J6SUgwZ1BTQndjbTl3Y3p0Y2JpQWdJQ0J6ZFhCbGNpaHlaVzFoYVc1cGJtZFFjbTl3Y3lrN1hHNGdJQ0FnZEdocGN5NWpkWEp5Wlc1MElEMGdlMzA3WEc0Z0lDQWdkR2hwY3k1aFkzUnBiMjVMWlhseklEMGdXMTA3WEc0Z0lDQWdkR2hwY3k1aFpHUkJZM1JwYjI1ektIQnliM0J6TG1GamRHbHZibk1wTzF4dUlDQjlYRzVjYmlBZ1lXUmtRV04wYVc5dWN5aGhZM1JwYjI1ektTQjdYRzRnSUNBZ1ptOXlJQ2hqYjI1emRDQnJaWGtnYVc0Z1lXTjBhVzl1Y3lrZ2UxeHVJQ0FnSUNBZ2FXWWdLSFJvYVhNdVlXTjBhVzl1UzJWNWN5NXBibVJsZUU5bUtHdGxlU2tnUFQwOUlDMHhLU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZV04wYVc5dVMyVjVjeTV3ZFhOb0tHdGxlU2s3WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUhSb2FYTmJhMlY1WFNBOUlHRmpkR2x2Ym5OYmEyVjVYVHRjYmx4dUlDQWdJQ0FnWTI5dWMzUWdiMjVWY0dSaGRHVWdQU0FvZGl3Z1lXTjBhVzl1S1NBOVBpQjBhR2x6TG1OMWNuSmxiblJiYTJWNVhTQTlJR0ZqZEdsdmJpNW5aWFFvS1R0Y2JseHVJQ0FnSUNBZ0x5OGdTVzF0WldScFlYUmxiSGtnZFhCa1lYUmxJSGRwZEdnZ2RHaGxJR04xY25KbGJuUWdZV04wYVc5dUlITjBZWFJsWEc0Z0lDQWdJQ0J2YmxWd1pHRjBaU2h1ZFd4c0xDQjBhR2x6VzJ0bGVWMHBPMXh1WEc0Z0lDQWdJQ0IwYUdselcydGxlVjFjYmlBZ0lDQWdJQ0FnTG5ObGRGQnliM0J6S0h0Y2JpQWdJQ0FnSUNBZ0lDQmZiMjVUZEc5d09pQW9LU0E5UGlCMGFHbHpMbTUxYlVGamRHbDJaVUZqZEdsdmJuTXRMVnh1SUNBZ0lDQWdJQ0I5S1Z4dUlDQWdJQ0FnSUNBdVlXUmtUR2x6ZEdWdVpYSW9iMjVWY0dSaGRHVXBPMXh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJRzl1VTNSaGNuUW9LU0I3WEc0Z0lDQWdkR2hwY3k1dWRXMUJZM1JwZG1WQlkzUnBiMjV6SUQwZ2RHaHBjeTVoWTNScGIyNUxaWGx6TG14bGJtZDBhRHRjYmlBZ0lDQjBhR2x6TG1GamRHbHZia3RsZVhNdVptOXlSV0ZqYUNnb2EyVjVLU0E5UGlCMGFHbHpXMnRsZVYwdWMzUmhjblFvS1NrN1hHNGdJSDFjYmx4dUlDQnZibE4wYjNBb0tTQjdYRzRnSUNBZ2RHaHBjeTVoWTNScGIyNUxaWGx6TG1admNrVmhZMmdvS0d0bGVTa2dQVDRnZEdocGMxdHJaWGxkTG5OMGIzQW9LU2s3WEc0Z0lIMWNibHh1SUNCblpYUldaV3h2WTJsMGVTZ3BJSHRjYmlBZ0lDQmpiMjV6ZENCMlpXeHZZMmwwZVNBOUlIdDlPMXh1SUNBZ0lIUm9hWE11WVdOMGFXOXVTMlY1Y3k1bWIzSkZZV05vS0NoclpYa3BJRDArSUhabGJHOWphWFI1VzJ0bGVWMGdQU0IwYUdselcydGxlVjB1WjJWMFZtVnNiMk5wZEhrb0tTazdYRzRnSUNBZ2NtVjBkWEp1SUhabGJHOWphWFI1TzF4dUlDQjlYRzVjYmlBZ2FYTkJZM1JwYjI1RGIyMXdiR1YwWlNncElIdGNiaUFnSUNCeVpYUjFjbTRnS0hSb2FYTXViblZ0UVdOMGFYWmxRV04wYVc5dWN5QTlQVDBnTUNrN1hHNGdJSDFjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ0tHRmpkR2x2Ym5Nc0lIQnliM0J6S1NBOVBpQjdYRzRnSUhKbGRIVnliaUJ1WlhjZ1EyOXRjRzl6YVhSbFFXTjBhVzl1S0h0Y2JpQWdJQ0JoWTNScGIyNXpMRnh1SUNBZ0lDNHVMbkJ5YjNCelhHNGdJSDBwTzF4dWZUdGNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9jb21wb3NpdGUuanNcbiAqKiBtb2R1bGUgaWQgPSA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfID0gcmVxdWlyZSgnLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxudmFyIF90d2VlbiA9IHJlcXVpcmUoJy4vdHdlZW4nKTtcblxudmFyIF90d2VlbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90d2Vlbik7XG5cbnZhciBfZWFzaW5nID0gcmVxdWlyZSgnLi4vaW5jL2Vhc2luZycpO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBDcm9zc0ZhZGUgPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICBfaW5oZXJpdHMoQ3Jvc3NGYWRlLCBfQWN0aW9uKTtcblxuICBmdW5jdGlvbiBDcm9zc0ZhZGUoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENyb3NzRmFkZSk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIENyb3NzRmFkZS5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uIG9uU3RhcnQoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGR1cmF0aW9uID0gX3Byb3BzLmR1cmF0aW9uLFxuICAgICAgICBlYXNlID0gX3Byb3BzLmVhc2UsXG4gICAgICAgIGZhZGVyID0gX3Byb3BzLmZhZGVyO1xuXG5cbiAgICB0aGlzLmZhZGVyID0gZmFkZXIgfHwgKDAsIF90d2VlbjIuZGVmYXVsdCkoe1xuICAgICAgdG86IDEsXG4gICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICBlYXNlOiBlYXNlXG4gICAgfSkuc3RhcnQoKTtcbiAgfTtcblxuICBDcm9zc0ZhZGUucHJvdG90eXBlLm9uVXBkYXRlID0gZnVuY3Rpb24gb25VcGRhdGUoKSB7XG4gICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICBmcm9tID0gX3Byb3BzMi5mcm9tLFxuICAgICAgICB0byA9IF9wcm9wczIudG87XG5cbiAgICB2YXIgYmFsYW5jZSA9IHRoaXMuZmFkZXIuZ2V0KCk7XG4gICAgdmFyIGxhdGVzdEZyb21WYWx1ZSA9IGZyb20uZ2V0KCk7XG4gICAgdmFyIGxhdGVzdFRvVmFsdWUgPSB0by5nZXQoKTtcbiAgICByZXR1cm4gKDAsIF9jYWxjLmdldFZhbHVlRnJvbVByb2dyZXNzKShsYXRlc3RGcm9tVmFsdWUsIGxhdGVzdFRvVmFsdWUsIGJhbGFuY2UpO1xuICB9O1xuXG4gIHJldHVybiBDcm9zc0ZhZGU7XG59KF8yLmRlZmF1bHQpO1xuXG5Dcm9zc0ZhZGUuZGVmYXVsdFByb3BzID0ge1xuICBlYXNlOiBfZWFzaW5nLmxpbmVhclxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gIHJldHVybiBuZXcgQ3Jvc3NGYWRlKHByb3BzKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwyTnliM056TFdaaFpHVXVhbk1pWFN3aWJtRnRaWE1pT2xzaVEzSnZjM05HWVdSbElpd2liMjVUZEdGeWRDSXNJbkJ5YjNCeklpd2laSFZ5WVhScGIyNGlMQ0psWVhObElpd2labUZrWlhJaUxDSjBieUlzSW5OMFlYSjBJaXdpYjI1VmNHUmhkR1VpTENKbWNtOXRJaXdpWW1Gc1lXNWpaU0lzSW1kbGRDSXNJbXhoZEdWemRFWnliMjFXWVd4MVpTSXNJbXhoZEdWemRGUnZWbUZzZFdVaUxDSmtaV1poZFd4MFVISnZjSE1pWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3UVVGQlFUczdPenRCUVVOQk96czdPMEZCUTBFN08wRkJRMEU3T3pzN096czdPenM3U1VGRlRVRXNVenM3T3pzN096czdPM05DUVV0S1F5eFBMSE5DUVVGVk8wRkJRVUVzYVVKQlF6QkNMRXRCUVV0RExFdEJSQzlDTzBGQlFVRXNVVUZEUVVNc1VVRkVRU3hWUVVOQlFTeFJRVVJCTzBGQlFVRXNVVUZEVlVNc1NVRkVWaXhWUVVOVlFTeEpRVVJXTzBGQlFVRXNVVUZEWjBKRExFdEJSR2hDTEZWQlEyZENRU3hMUVVSb1FqczdPMEZCUjFJc1UwRkJTMEVzUzBGQlRDeEhRVUZoUVN4VFFVRlRMSEZDUVVGTk8wRkJRekZDUXl4VlFVRkpMRU5CUkhOQ08wRkJSVEZDU0N4M1FrRkdNRUk3UVVGSE1VSkRPMEZCU0RCQ0xFdEJRVTRzUlVGSmJrSkhMRXRCU20xQ0xFVkJRWFJDTzBGQlMwUXNSenM3YzBKQlJVUkRMRkVzZFVKQlFWYzdRVUZCUVN4clFrRkRXU3hMUVVGTFRpeExRVVJxUWp0QlFVRkJMRkZCUTBSUExFbEJSRU1zVjBGRFJFRXNTVUZFUXp0QlFVRkJMRkZCUTB0SUxFVkJSRXdzVjBGRFMwRXNSVUZFVERzN1FVRkZWQ3hSUVVGTlNTeFZRVUZWTEV0QlFVdE1MRXRCUVV3c1EwRkJWMDBzUjBGQldDeEZRVUZvUWp0QlFVTkJMRkZCUVUxRExHdENRVUZyUWtnc1MwRkJTMFVzUjBGQlRDeEZRVUY0UWp0QlFVTkJMRkZCUVUxRkxHZENRVUZuUWxBc1IwRkJSMHNzUjBGQlNDeEZRVUYwUWp0QlFVTkJMRmRCUVU4c1owTkJRWEZDUXl4bFFVRnlRaXhGUVVGelEwTXNZVUZCZEVNc1JVRkJjVVJJTEU5QlFYSkVMRU5CUVZBN1FVRkRSQ3hIT3pzN096dEJRWEpDUjFZc1V5eERRVU5IWXl4WkxFZEJRV1U3UVVGRGNFSldPMEZCUkc5Q0xFTTdPMnRDUVhWQ1ZDeFZRVUZEUml4TFFVRkVPMEZCUVVFc1UwRkJWeXhKUVVGSlJpeFRRVUZLTEVOQlFXTkZMRXRCUVdRc1EwRkJXRHRCUVVGQkxFTWlMQ0ptYVd4bElqb2lZM0p2YzNNdFptRmtaUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0YwZEhCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQkJZM1JwYjI0Z1puSnZiU0FuTGk4bk8xeHVhVzF3YjNKMElIUjNaV1Z1SUdaeWIyMGdKeTR2ZEhkbFpXNG5PMXh1YVcxd2IzSjBJSHNnYkdsdVpXRnlJSDBnWm5KdmJTQW5MaTR2YVc1akwyVmhjMmx1WnljN1hHNXBiWEJ2Y25RZ2V5Qm5aWFJXWVd4MVpVWnliMjFRY205bmNtVnpjeUI5SUdaeWIyMGdKeTR1TDJsdVl5OWpZV3hqSnp0Y2JseHVZMnhoYzNNZ1EzSnZjM05HWVdSbElHVjRkR1Z1WkhNZ1FXTjBhVzl1SUh0Y2JpQWdjM1JoZEdsaklHUmxabUYxYkhSUWNtOXdjeUE5SUh0Y2JpQWdJQ0JsWVhObE9pQnNhVzVsWVhKY2JpQWdmVnh1WEc0Z0lHOXVVM1JoY25Rb0tTQjdYRzRnSUNBZ1kyOXVjM1FnZXlCa2RYSmhkR2x2Yml3Z1pXRnpaU3dnWm1Ga1pYSWdmU0E5SUhSb2FYTXVjSEp2Y0hNN1hHNWNiaUFnSUNCMGFHbHpMbVpoWkdWeUlEMGdabUZrWlhJZ2ZId2dkSGRsWlc0b2UxeHVJQ0FnSUNBZ2RHODZJREVzWEc0Z0lDQWdJQ0JrZFhKaGRHbHZiaXhjYmlBZ0lDQWdJR1ZoYzJWY2JpQWdJQ0I5S1M1emRHRnlkQ2dwTzF4dUlDQjlYRzVjYmlBZ2IyNVZjR1JoZEdVb0tTQjdYRzRnSUNBZ1kyOXVjM1FnZXlCbWNtOXRMQ0IwYnlCOUlEMGdkR2hwY3k1d2NtOXdjenRjYmlBZ0lDQmpiMjV6ZENCaVlXeGhibU5sSUQwZ2RHaHBjeTVtWVdSbGNpNW5aWFFvS1R0Y2JpQWdJQ0JqYjI1emRDQnNZWFJsYzNSR2NtOXRWbUZzZFdVZ1BTQm1jbTl0TG1kbGRDZ3BPMXh1SUNBZ0lHTnZibk4wSUd4aGRHVnpkRlJ2Vm1Gc2RXVWdQU0IwYnk1blpYUW9LVHRjYmlBZ0lDQnlaWFIxY200Z1oyVjBWbUZzZFdWR2NtOXRVSEp2WjNKbGMzTW9iR0YwWlhOMFJuSnZiVlpoYkhWbExDQnNZWFJsYzNSVWIxWmhiSFZsTENCaVlXeGhibU5sS1R0Y2JpQWdmVnh1ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENBb2NISnZjSE1wSUQwK0lHNWxkeUJEY205emMwWmhaR1VvY0hKdmNITXBPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9jcm9zcy1mYWRlLmpzXG4gKiogbW9kdWxlIGlkID0gOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3R3ZWVuID0gcmVxdWlyZSgnLi90d2VlbicpO1xuXG52YXIgX3R3ZWVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R3ZWVuKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGR1cmF0aW9uKSB7XG4gIHJldHVybiAoMCwgX3R3ZWVuMi5kZWZhdWx0KSh7IGR1cmF0aW9uOiBkdXJhdGlvbiB9KTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwyUmxiR0Y1TG1weklsMHNJbTVoYldWeklqcGJJbVIxY21GMGFXOXVJbDBzSW0xaGNIQnBibWR6SWpvaU96czdPMEZCUVVFN096czdPenRyUWtGRlpTeFZRVUZEUVN4UlFVRkVPMEZCUVVFc1UwRkJZeXh4UWtGQlRTeEZRVUZGUVN4clFrRkJSaXhGUVVGT0xFTkJRV1E3UVVGQlFTeERJaXdpWm1sc1pTSTZJbVJsYkdGNUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5dFlYUjBjR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhSM1pXVnVJR1p5YjIwZ0p5NHZkSGRsWlc0bk8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQW9aSFZ5WVhScGIyNHBJRDArSUhSM1pXVnVLSHNnWkhWeVlYUnBiMjRnZlNrN1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL2RlbGF5LmpzXG4gKiogbW9kdWxlIGlkID0gOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgXyA9IHJlcXVpcmUoJy4vJyk7XG5cbnZhciBfMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFBhcmFsbGVsID0gZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgX2luaGVyaXRzKFBhcmFsbGVsLCBfQWN0aW9uKTtcblxuICBmdW5jdGlvbiBQYXJhbGxlbCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGFyYWxsZWwpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBQYXJhbGxlbC5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uIG9uU3RhcnQoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgYWN0aW9ucyA9IHRoaXMucHJvcHMuYWN0aW9ucztcblxuICAgIHRoaXMubnVtQWN0aXZlQWN0aW9ucyA9IGFjdGlvbnMubGVuZ3RoO1xuXG4gICAgYWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgIGFjdGlvbi5zZXRQcm9wcyh7XG4gICAgICAgIF9vblN0b3A6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMyLm51bUFjdGl2ZUFjdGlvbnMtLTtcbiAgICAgICAgfVxuICAgICAgfSkuc3RhcnQoKTtcbiAgICB9KTtcbiAgfTtcblxuICBQYXJhbGxlbC5wcm90b3R5cGUub25TdG9wID0gZnVuY3Rpb24gb25TdG9wKCkge1xuICAgIHRoaXMucHJvcHMuYWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgIHJldHVybiBhY3Rpb24uc3RvcCgpO1xuICAgIH0pO1xuICB9O1xuXG4gIFBhcmFsbGVsLnByb3RvdHlwZS5hZGRBY3Rpb24gPSBmdW5jdGlvbiBhZGRBY3Rpb24oYWN0aW9uKSB7XG4gICAgdmFyIGFjdGlvbnMgPSB0aGlzLnByb3BzLmFjdGlvbnM7XG5cblxuICAgIGlmIChhY3Rpb25zLmluZGV4T2YoYWN0aW9uKSA9PT0gLTEpIHtcbiAgICAgIGFjdGlvbnMucHVzaChhY3Rpb24pO1xuICAgIH1cbiAgfTtcblxuICBQYXJhbGxlbC5wcm90b3R5cGUuaXNBY3Rpb25Db21wbGV0ZSA9IGZ1bmN0aW9uIGlzQWN0aW9uQ29tcGxldGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubnVtQWN0aXZlQWN0aW9ucyA9PT0gMDtcbiAgfTtcblxuICByZXR1cm4gUGFyYWxsZWw7XG59KF8yLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoYWN0aW9ucykge1xuICByZXR1cm4gbmV3IFBhcmFsbGVsKHsgYWN0aW9uczogYWN0aW9ucyB9KTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwzQmhjbUZzYkdWc0xtcHpJbDBzSW01aGJXVnpJanBiSWxCaGNtRnNiR1ZzSWl3aWIyNVRkR0Z5ZENJc0ltRmpkR2x2Ym5NaUxDSndjbTl3Y3lJc0ltNTFiVUZqZEdsMlpVRmpkR2x2Ym5NaUxDSnNaVzVuZEdnaUxDSm1iM0pGWVdOb0lpd2lZV04wYVc5dUlpd2ljMlYwVUhKdmNITWlMQ0pmYjI1VGRHOXdJaXdpYzNSaGNuUWlMQ0p2YmxOMGIzQWlMQ0p6ZEc5d0lpd2lZV1JrUVdOMGFXOXVJaXdpYVc1a1pYaFBaaUlzSW5CMWMyZ2lMQ0pwYzBGamRHbHZia052YlhCc1pYUmxJbDBzSW0xaGNIQnBibWR6SWpvaU96czdPMEZCUVVFN096czdPenM3T3pzN096dEpRVVZOUVN4Uk96czdPenM3T3pzN2NVSkJRMHBETEU4c2MwSkJRVlU3UVVGQlFUczdRVUZCUVN4UlFVTkJReXhQUVVSQkxFZEJRMWtzUzBGQlMwTXNTMEZFYWtJc1EwRkRRVVFzVDBGRVFUczdRVUZGVWl4VFFVRkxSU3huUWtGQlRDeEhRVUYzUWtZc1VVRkJVVWNzVFVGQmFFTTdPMEZCUlVGSUxGbEJRVkZKTEU5QlFWSXNRMEZCWjBJc1ZVRkJRME1zVFVGQlJDeEZRVUZaTzBGQlF6RkNRU3hoUVVGUFF5eFJRVUZRTEVOQlFXZENPMEZCUTJSRExHbENRVUZUTzBGQlFVRXNhVUpCUVUwc1QwRkJTMHdzWjBKQlFVd3NSVUZCVGp0QlFVRkJPMEZCUkVzc1QwRkJhRUlzUlVGRlIwMHNTMEZHU0R0QlFVZEVMRXRCU2tRN1FVRkxSQ3hIT3p0eFFrRkZSRU1zVFN4eFFrRkJVenRCUVVOUUxGTkJRVXRTTEV0QlFVd3NRMEZCVjBRc1QwRkJXQ3hEUVVGdFFra3NUMEZCYmtJc1EwRkJNa0lzVlVGQlEwTXNUVUZCUkR0QlFVRkJMR0ZCUVZsQkxFOUJRVTlMTEVsQlFWQXNSVUZCV2p0QlFVRkJMRXRCUVROQ08wRkJRMFFzUnpzN2NVSkJSVVJETEZNc2MwSkJRVlZPTEUwc1JVRkJVVHRCUVVGQkxGRkJRMUpNTEU5QlJGRXNSMEZEU1N4TFFVRkxReXhMUVVSVUxFTkJRMUpFTEU5QlJGRTdPenRCUVVkb1FpeFJRVUZKUVN4UlFVRlJXU3hQUVVGU0xFTkJRV2RDVUN4TlFVRm9RaXhOUVVFMFFpeERRVUZETEVOQlFXcERMRVZCUVc5RE8wRkJRMnhEVEN4alFVRlJZU3hKUVVGU0xFTkJRV0ZTTEUxQlFXSTdRVUZEUkR0QlFVTkdMRWM3TzNGQ1FVVkVVeXhuUWl3clFrRkJiVUk3UVVGRGFrSXNWMEZCVVN4TFFVRkxXaXhuUWtGQlRDeExRVUV3UWl4RFFVRnNRenRCUVVORUxFYzdPenM3TzJ0Q1FVZFpMRlZCUVVOR0xFOUJRVVE3UVVGQlFTeFRRVUZoTEVsQlFVbEdMRkZCUVVvc1EwRkJZU3hGUVVGRlJTeG5Ra0ZCUml4RlFVRmlMRU5CUVdJN1FVRkJRU3hESWl3aVptbHNaU0k2SW5CaGNtRnNiR1ZzTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTl0WVhSMGNHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJRUZqZEdsdmJpQm1jbTl0SUNjdUx5YzdYRzVjYm1Oc1lYTnpJRkJoY21Gc2JHVnNJR1Y0ZEdWdVpITWdRV04wYVc5dUlIdGNiaUFnYjI1VGRHRnlkQ2dwSUh0Y2JpQWdJQ0JqYjI1emRDQjdJR0ZqZEdsdmJuTWdmU0E5SUhSb2FYTXVjSEp2Y0hNN1hHNGdJQ0FnZEdocGN5NXVkVzFCWTNScGRtVkJZM1JwYjI1eklEMGdZV04wYVc5dWN5NXNaVzVuZEdnN1hHNWNiaUFnSUNCaFkzUnBiMjV6TG1admNrVmhZMmdvS0dGamRHbHZiaWtnUFQ0Z2UxeHVJQ0FnSUNBZ1lXTjBhVzl1TG5ObGRGQnliM0J6S0h0Y2JpQWdJQ0FnSUNBZ1gyOXVVM1J2Y0RvZ0tDa2dQVDRnZEdocGN5NXVkVzFCWTNScGRtVkJZM1JwYjI1ekxTMWNiaUFnSUNBZ0lIMHBMbk4wWVhKMEtDazdYRzRnSUNBZ2ZTazdYRzRnSUgxY2JseHVJQ0J2YmxOMGIzQW9LU0I3WEc0Z0lDQWdkR2hwY3k1d2NtOXdjeTVoWTNScGIyNXpMbVp2Y2tWaFkyZ29LR0ZqZEdsdmJpa2dQVDRnWVdOMGFXOXVMbk4wYjNBb0tTazdYRzRnSUgxY2JseHVJQ0JoWkdSQlkzUnBiMjRvWVdOMGFXOXVLU0I3WEc0Z0lDQWdZMjl1YzNRZ2V5QmhZM1JwYjI1eklIMGdQU0IwYUdsekxuQnliM0J6TzF4dVhHNGdJQ0FnYVdZZ0tHRmpkR2x2Ym5NdWFXNWtaWGhQWmloaFkzUnBiMjRwSUQwOVBTQXRNU2tnZTF4dUlDQWdJQ0FnWVdOMGFXOXVjeTV3ZFhOb0tHRmpkR2x2YmlrN1hHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ2FYTkJZM1JwYjI1RGIyMXdiR1YwWlNncElIdGNiaUFnSUNCeVpYUjFjbTRnS0hSb2FYTXViblZ0UVdOMGFYWmxRV04wYVc5dWN5QTlQVDBnTUNrN1hHNGdJSDFjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ0tHRmpkR2x2Ym5NcElEMCtJRzVsZHlCUVlYSmhiR3hsYkNoN0lHRmpkR2x2Ym5NZ2ZTazdYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9wYXJhbGxlbC5qc1xuICoqIG1vZHVsZSBpZCA9IDEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfID0gcmVxdWlyZSgnLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxudmFyIF9mcmFtZXN5bmMgPSByZXF1aXJlKCcuLi9mcmFtZXN5bmMnKTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgUGh5c2ljcyA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gIF9pbmhlcml0cyhQaHlzaWNzLCBfQWN0aW9uKTtcblxuICBmdW5jdGlvbiBQaHlzaWNzKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQaHlzaWNzKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgUGh5c2ljcy5wcm90b3R5cGUub25VcGRhdGUgPSBmdW5jdGlvbiBvblVwZGF0ZSgpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgYWNjZWxlcmF0aW9uID0gX3Byb3BzLmFjY2VsZXJhdGlvbixcbiAgICAgICAgZnJpY3Rpb24gPSBfcHJvcHMuZnJpY3Rpb24sXG4gICAgICAgIHZlbG9jaXR5ID0gX3Byb3BzLnZlbG9jaXR5LFxuICAgICAgICBzcHJpbmcgPSBfcHJvcHMuc3ByaW5nLFxuICAgICAgICB0byA9IF9wcm9wcy50bztcblxuICAgIHZhciBuZXdWZWxvY2l0eSA9IHZlbG9jaXR5O1xuICAgIHZhciBlbGFwc2VkID0gKDAsIF9mcmFtZXN5bmMudGltZVNpbmNlTGFzdEZyYW1lKSgpO1xuXG4gICAgLy8gQXBwbHkgYWNjZWxlcmF0aW9uIHRvIHZlbG9jaXR5XG4gICAgaWYgKGFjY2VsZXJhdGlvbikge1xuICAgICAgbmV3VmVsb2NpdHkgKz0gKDAsIF9jYWxjLnNwZWVkUGVyRnJhbWUpKGFjY2VsZXJhdGlvbiwgZWxhcHNlZCk7XG4gICAgfVxuXG4gICAgLy8gQXBwbHkgZnJpY3Rpb24gdG8gdmVsb2NpdHlcbiAgICBpZiAoZnJpY3Rpb24pIHtcbiAgICAgIG5ld1ZlbG9jaXR5ICo9IE1hdGgucG93KDEgLSBmcmljdGlvbiwgZWxhcHNlZCAvIDEwMCk7XG4gICAgfVxuXG4gICAgaWYgKHNwcmluZyAmJiB0byAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgZGlzdGFuY2VUb1RhcmdldCA9IHRvIC0gdGhpcy5jdXJyZW50O1xuICAgICAgbmV3VmVsb2NpdHkgKz0gZGlzdGFuY2VUb1RhcmdldCAqICgwLCBfY2FsYy5zcGVlZFBlckZyYW1lKShzcHJpbmcsIGVsYXBzZWQpO1xuICAgIH1cblxuICAgIC8vIEFwcGx5IHZlbG9jaXR5XG4gICAgdGhpcy5jdXJyZW50ICs9ICgwLCBfY2FsYy5zcGVlZFBlckZyYW1lKShuZXdWZWxvY2l0eSwgZWxhcHNlZCk7XG4gICAgdGhpcy5wcm9wcy52ZWxvY2l0eSA9IG5ld1ZlbG9jaXR5O1xuXG4gICAgcmV0dXJuIHRoaXMuY3VycmVudDtcbiAgfTtcblxuICBQaHlzaWNzLnByb3RvdHlwZS5pc0FjdGlvbkNvbXBsZXRlID0gZnVuY3Rpb24gaXNBY3Rpb25Db21wbGV0ZSgpIHtcbiAgICB2YXIgYXV0b1N0b3BTcGVlZCA9IHRoaXMucHJvcHMuYXV0b1N0b3BTcGVlZDtcblxuICAgIHJldHVybiAhdGhpcy52ZWxvY2l0eSB8fCBNYXRoLmFicyh0aGlzLnZlbG9jaXR5KSA8PSBhdXRvU3RvcFNwZWVkO1xuICB9O1xuXG4gIHJldHVybiBQaHlzaWNzO1xufShfMi5kZWZhdWx0KTtcblxuUGh5c2ljcy5kZWZhdWx0UHJvcHMgPSB7XG4gIGFjY2VsZXJhdGlvbjogMCxcbiAgZnJpY3Rpb246IDAsXG4gIHZlbG9jaXR5OiAwLFxuICBhdXRvU3RvcFNwZWVkOiAwLjAwMVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gIHJldHVybiBuZXcgUGh5c2ljcyhwcm9wcyk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMM0JvZVhOcFkzTXVhbk1pWFN3aWJtRnRaWE1pT2xzaVVHaDVjMmxqY3lJc0ltOXVWWEJrWVhSbElpd2ljSEp2Y0hNaUxDSmhZMk5sYkdWeVlYUnBiMjRpTENKbWNtbGpkR2x2YmlJc0luWmxiRzlqYVhSNUlpd2ljM0J5YVc1bklpd2lkRzhpTENKdVpYZFdaV3h2WTJsMGVTSXNJbVZzWVhCelpXUWlMQ0oxYm1SbFptbHVaV1FpTENKa2FYTjBZVzVqWlZSdlZHRnlaMlYwSWl3aVkzVnljbVZ1ZENJc0ltbHpRV04wYVc5dVEyOXRjR3hsZEdVaUxDSmhkWFJ2VTNSdmNGTndaV1ZrSWl3aVRXRjBhQ0lzSW1GaWN5SXNJbVJsWm1GMWJIUlFjbTl3Y3lKZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0QlFVRkJPenM3TzBGQlEwRTdPMEZCUTBFN096czdPenM3T3pzN1NVRkZUVUVzVHpzN096czdPenM3TzI5Q1FWRktReXhSTEhWQ1FVRlhPMEZCUVVFc2FVSkJRMmRFTEV0QlFVdERMRXRCUkhKRU8wRkJRVUVzVVVGRFJFTXNXVUZFUXl4VlFVTkVRU3haUVVSRE8wRkJRVUVzVVVGRFlVTXNVVUZFWWl4VlFVTmhRU3hSUVVSaU8wRkJRVUVzVVVGRGRVSkRMRkZCUkhaQ0xGVkJRM1ZDUVN4UlFVUjJRanRCUVVGQkxGRkJRMmxEUXl4TlFVUnFReXhWUVVOcFEwRXNUVUZFYWtNN1FVRkJRU3hSUVVONVEwTXNSVUZFZWtNc1ZVRkRlVU5CTEVWQlJIcERPenRCUVVWVUxGRkJRVWxETEdOQlFXTklMRkZCUVd4Q08wRkJRMEVzVVVGQlRVa3NWVUZCVlN4dlEwRkJhRUk3TzBGQlJVRTdRVUZEUVN4UlFVRkpUaXhaUVVGS0xFVkJRV3RDTzBGQlEyaENTeXh4UWtGQlpTeDVRa0ZCWTB3c1dVRkJaQ3hGUVVFMFFrMHNUMEZCTlVJc1EwRkJaanRCUVVORU96dEJRVVZFTzBGQlEwRXNVVUZCU1V3c1VVRkJTaXhGUVVGak8wRkJRMXBKTERoQ1FVRm5RaXhKUVVGSlNpeFJRVUZ3UWl4RlFVRnJRMHNzVlVGQlZTeEhRVUUxUXp0QlFVTkVPenRCUVVWRUxGRkJRVWxJTEZWQlFWVkRMRTlCUVU5SExGTkJRWEpDTEVWQlFXZERPMEZCUXpsQ0xGVkJRVTFETEcxQ1FVRnRRa29zUzBGQlN5eExRVUZMU3l4UFFVRnVRenRCUVVOQlNpeHhRa0ZCWlVjc2JVSkJRVzFDTEhsQ1FVRmpUQ3hOUVVGa0xFVkJRWE5DUnl4UFFVRjBRaXhEUVVGc1F6dEJRVU5FT3p0QlFVVkVPMEZCUTBFc1UwRkJTMGNzVDBGQlRDeEpRVUZuUWl4NVFrRkJZMG9zVjBGQlpDeEZRVUV5UWtNc1QwRkJNMElzUTBGQmFFSTdRVUZEUVN4VFFVRkxVQ3hMUVVGTUxFTkJRVmRITEZGQlFWZ3NSMEZCYzBKSExGZEJRWFJDT3p0QlFVVkJMRmRCUVU4c1MwRkJTMGtzVDBGQldqdEJRVU5FTEVjN08yOUNRVVZFUXl4blFpd3JRa0ZCYlVJN1FVRkJRU3hSUVVOVVF5eGhRVVJUTEVkQlExTXNTMEZCUzFvc1MwRkVaQ3hEUVVOVVdTeGhRVVJUT3p0QlFVVnFRaXhYUVVGUkxFTkJRVU1zUzBGQlMxUXNVVUZCVGl4SlFVRnJRbFVzUzBGQlMwTXNSMEZCVEN4RFFVRlRMRXRCUVV0WUxGRkJRV1FzUzBGQk1rSlRMR0ZCUVhKRU8wRkJRMFFzUnpzN096czdRVUYwUTBka0xFOHNRMEZEUjJsQ0xGa3NSMEZCWlR0QlFVTndRbVFzWjBKQlFXTXNRMEZFVFR0QlFVVndRa01zV1VGQlZTeERRVVpWTzBGQlIzQkNReXhaUVVGVkxFTkJTRlU3UVVGSmNFSlRMR2xDUVVGbE8wRkJTa3NzUXpzN2EwSkJkME5VTEZWQlFVTmFMRXRCUVVRN1FVRkJRU3hUUVVGWExFbEJRVWxHTEU5QlFVb3NRMEZCV1VVc1MwRkJXaXhEUVVGWU8wRkJRVUVzUXlJc0ltWnBiR1VpT2lKd2FIbHphV056TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTl0WVhSMGNHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJRUZqZEdsdmJpQm1jbTl0SUNjdUx5YzdYRzVwYlhCdmNuUWdleUIwYVcxbFUybHVZMlZNWVhOMFJuSmhiV1VnZlNCbWNtOXRJQ2N1TGk5bWNtRnRaWE41Ym1Nbk8xeHVhVzF3YjNKMElIc2djM0JsWldSUVpYSkdjbUZ0WlNCOUlHWnliMjBnSnk0dUwybHVZeTlqWVd4akp6dGNibHh1WTJ4aGMzTWdVR2g1YzJsamN5QmxlSFJsYm1SeklFRmpkR2x2YmlCN1hHNGdJSE4wWVhScFl5QmtaV1poZFd4MFVISnZjSE1nUFNCN1hHNGdJQ0FnWVdOalpXeGxjbUYwYVc5dU9pQXdMRnh1SUNBZ0lHWnlhV04wYVc5dU9pQXdMRnh1SUNBZ0lIWmxiRzlqYVhSNU9pQXdMRnh1SUNBZ0lHRjFkRzlUZEc5d1UzQmxaV1E2SURBdU1EQXhYRzRnSUgxY2JseHVJQ0J2YmxWd1pHRjBaU2dwSUh0Y2JpQWdJQ0JqYjI1emRDQjdJR0ZqWTJWc1pYSmhkR2x2Yml3Z1puSnBZM1JwYjI0c0lIWmxiRzlqYVhSNUxDQnpjSEpwYm1jc0lIUnZJSDBnUFNCMGFHbHpMbkJ5YjNCek8xeHVJQ0FnSUd4bGRDQnVaWGRXWld4dlkybDBlU0E5SUhabGJHOWphWFI1TzF4dUlDQWdJR052Ym5OMElHVnNZWEJ6WldRZ1BTQjBhVzFsVTJsdVkyVk1ZWE4wUm5KaGJXVW9LVHRjYmx4dUlDQWdJQzh2SUVGd2NHeDVJR0ZqWTJWc1pYSmhkR2x2YmlCMGJ5QjJaV3h2WTJsMGVWeHVJQ0FnSUdsbUlDaGhZMk5sYkdWeVlYUnBiMjRwSUh0Y2JpQWdJQ0FnSUc1bGQxWmxiRzlqYVhSNUlDczlJSE53WldWa1VHVnlSbkpoYldVb1lXTmpaV3hsY21GMGFXOXVMQ0JsYkdGd2MyVmtLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQXZMeUJCY0hCc2VTQm1jbWxqZEdsdmJpQjBieUIyWld4dlkybDBlVnh1SUNBZ0lHbG1JQ2htY21samRHbHZiaWtnZTF4dUlDQWdJQ0FnYm1WM1ZtVnNiMk5wZEhrZ0tqMGdLREVnTFNCbWNtbGpkR2x2YmlrZ0tpb2dLR1ZzWVhCelpXUWdMeUF4TURBcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUdsbUlDaHpjSEpwYm1jZ0ppWWdkRzhnSVQwOUlIVnVaR1ZtYVc1bFpDa2dlMXh1SUNBZ0lDQWdZMjl1YzNRZ1pHbHpkR0Z1WTJWVWIxUmhjbWRsZENBOUlIUnZJQzBnZEdocGN5NWpkWEp5Wlc1ME8xeHVJQ0FnSUNBZ2JtVjNWbVZzYjJOcGRIa2dLejBnWkdsemRHRnVZMlZVYjFSaGNtZGxkQ0FxSUhOd1pXVmtVR1Z5Um5KaGJXVW9jM0J5YVc1bkxDQmxiR0Z3YzJWa0tUdGNiaUFnSUNCOVhHNWNiaUFnSUNBdkx5QkJjSEJzZVNCMlpXeHZZMmwwZVZ4dUlDQWdJSFJvYVhNdVkzVnljbVZ1ZENBclBTQnpjR1ZsWkZCbGNrWnlZVzFsS0c1bGQxWmxiRzlqYVhSNUxDQmxiR0Z3YzJWa0tUdGNiaUFnSUNCMGFHbHpMbkJ5YjNCekxuWmxiRzlqYVhSNUlEMGdibVYzVm1Wc2IyTnBkSGs3WEc1Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3k1amRYSnlaVzUwTzF4dUlDQjlYRzVjYmlBZ2FYTkJZM1JwYjI1RGIyMXdiR1YwWlNncElIdGNiaUFnSUNCamIyNXpkQ0I3SUdGMWRHOVRkRzl3VTNCbFpXUWdmU0E5SUhSb2FYTXVjSEp2Y0hNN1hHNGdJQ0FnY21WMGRYSnVJQ2doZEdocGN5NTJaV3h2WTJsMGVTQjhmQ0JOWVhSb0xtRmljeWgwYUdsekxuWmxiRzlqYVhSNUtTQThQU0JoZFhSdlUzUnZjRk53WldWa0tUdGNiaUFnZlZ4dWZWeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQW9jSEp2Y0hNcElEMCtJRzVsZHlCUWFIbHphV056S0hCeWIzQnpLVHNpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9waHlzaWNzLmpzXG4gKiogbW9kdWxlIGlkID0gMTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF92YWx1ZSA9IHJlcXVpcmUoJy4vdmFsdWUnKTtcblxudmFyIF92YWx1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF92YWx1ZSk7XG5cbnZhciBfY29tcG9zaXRlID0gcmVxdWlyZSgnLi9jb21wb3NpdGUnKTtcblxudmFyIF9jb21wb3NpdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcG9zaXRlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBjcmVhdGVQb2ludGVyKF9yZWYyLCBfcmVmKSB7XG4gIHZhciB4ID0gX3JlZjIueCxcbiAgICAgIHkgPSBfcmVmMi55O1xuXG4gIHZhciBldmVudFRvUG9pbnRzID0gX3JlZi5ldmVudFRvUG9pbnRzLFxuICAgICAgbW92ZUV2ZW50ID0gX3JlZi5tb3ZlRXZlbnQsXG4gICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbJ2V2ZW50VG9Qb2ludHMnLCAnbW92ZUV2ZW50J10pO1xuXG4gIHZhciBwb2ludGVyID0gKDAsIF9jb21wb3NpdGUyLmRlZmF1bHQpKHtcbiAgICB4OiAoMCwgX3ZhbHVlMi5kZWZhdWx0KSh4KSxcbiAgICB5OiAoMCwgX3ZhbHVlMi5kZWZhdWx0KSh5KVxuICB9LCBfZXh0ZW5kcyh7XG4gICAgcGFzc2l2ZTogdHJ1ZVxuICB9LCBwcm9wcykpO1xuXG4gIHZhciB1cGRhdGVQb2ludGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAocHJvcHMucHJldmVudERlZmF1bHQpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICB2YXIgcG9pbnRzID0gZXZlbnRUb1BvaW50cyhlKTtcbiAgICBwb2ludGVyLnguc2V0KHBvaW50cy54KTtcbiAgICBwb2ludGVyLnkuc2V0KHBvaW50cy55KTtcbiAgfTtcblxuICBwb2ludGVyLnNldFByb3BzKHtcbiAgICBfb25TdGFydDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKG1vdmVFdmVudCwgdXBkYXRlUG9pbnRlcik7XG4gICAgfSxcbiAgICBfb25TdG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW92ZUV2ZW50LCB1cGRhdGVQb2ludGVyKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwb2ludGVyO1xufVxuXG52YXIgbW91c2VFdmVudFRvUG9pbnQgPSBmdW5jdGlvbiAoZSkge1xuICByZXR1cm4ge1xuICAgIHg6IGUucGFnZVgsXG4gICAgeTogZS5wYWdlWVxuICB9O1xufTtcblxudmFyIHRvdWNoRXZlbnRUb1BvaW50ID0gZnVuY3Rpb24gKF9yZWYzKSB7XG4gIHZhciBjaGFuZ2VkVG91Y2hlcyA9IF9yZWYzLmNoYW5nZWRUb3VjaGVzO1xuICByZXR1cm4ge1xuICAgIHg6IGNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFgsXG4gICAgeTogY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WVxuICB9O1xufTtcblxudmFyIGdldE5hdGl2ZUV2ZW50ID0gZnVuY3Rpb24gKGUpIHtcbiAgcmV0dXJuIGUub3JpZ2luYWxFdmVudCB8fCBlLm5hdGl2ZUV2ZW50IHx8IGU7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZSwgcHJvcHMpIHtcbiAgdmFyIG5hdGl2ZUV2ZW50ID0gZ2V0TmF0aXZlRXZlbnQoZSk7XG4gIHJldHVybiBuYXRpdmVFdmVudC50b3VjaGVzID8gY3JlYXRlUG9pbnRlcih0b3VjaEV2ZW50VG9Qb2ludChlKSwgX2V4dGVuZHMoe1xuICAgIG1vdmVFdmVudDogJ3RvdWNobW92ZScsXG4gICAgZXZlbnRUb1BvaW50czogdG91Y2hFdmVudFRvUG9pbnRcbiAgfSwgcHJvcHMpKSA6IGNyZWF0ZVBvaW50ZXIobW91c2VFdmVudFRvUG9pbnQoZSksIF9leHRlbmRzKHtcbiAgICBtb3ZlRXZlbnQ6ICdtb3VzZW1vdmUnLFxuICAgIGV2ZW50VG9Qb2ludHM6IG1vdXNlRXZlbnRUb1BvaW50XG4gIH0sIHByb3BzKSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMM0J2YVc1MFpYSXVhbk1pWFN3aWJtRnRaWE1pT2xzaVkzSmxZWFJsVUc5cGJuUmxjaUlzSW5naUxDSjVJaXdpWlhabGJuUlViMUJ2YVc1MGN5SXNJbTF2ZG1WRmRtVnVkQ0lzSW5CeWIzQnpJaXdpY0c5cGJuUmxjaUlzSW5CaGMzTnBkbVVpTENKMWNHUmhkR1ZRYjJsdWRHVnlJaXdpWlNJc0luQnlaWFpsYm5SRVpXWmhkV3gwSWl3aWNHOXBiblJ6SWl3aWMyVjBJaXdpYzJWMFVISnZjSE1pTENKZmIyNVRkR0Z5ZENJc0ltUnZZM1Z0Wlc1MElpd2laRzlqZFcxbGJuUkZiR1Z0Wlc1MElpd2lZV1JrUlhabGJuUk1hWE4wWlc1bGNpSXNJbDl2YmxOMGIzQWlMQ0p5WlcxdmRtVkZkbVZ1ZEV4cGMzUmxibVZ5SWl3aWJXOTFjMlZGZG1WdWRGUnZVRzlwYm5RaUxDSndZV2RsV0NJc0luQmhaMlZaSWl3aWRHOTFZMmhGZG1WdWRGUnZVRzlwYm5RaUxDSmphR0Z1WjJWa1ZHOTFZMmhsY3lJc0ltTnNhV1Z1ZEZnaUxDSmpiR2xsYm5SWklpd2laMlYwVG1GMGFYWmxSWFpsYm5RaUxDSnZjbWxuYVc1aGJFVjJaVzUwSWl3aWJtRjBhWFpsUlhabGJuUWlMQ0owYjNWamFHVnpJbDBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3UVVGQlFUczdPenRCUVVOQk96czdPenM3T3p0QlFVVkJMRk5CUVZOQkxHRkJRVlFzWTBGQmVVVTdRVUZCUVN4TlFVRm9SRU1zUTBGQlowUXNVMEZCYUVSQkxFTkJRV2RFTzBGQlFVRXNUVUZCTjBORExFTkJRVFpETEZOQlFUZERRU3hEUVVFMlF6czdRVUZCUVN4TlFVRjBRME1zWVVGQmMwTXNVVUZCZEVOQkxHRkJRWE5ETzBGQlFVRXNUVUZCZGtKRExGTkJRWFZDTEZGQlFYWkNRU3hUUVVGMVFqdEJRVUZCTEUxQlFWUkRMRXRCUVZNN08wRkJRM1pGTEUxQlFVMURMRlZCUVZVc2VVSkJRVlU3UVVGRGVFSk1MRTlCUVVjc2NVSkJRVTFCTEVOQlFVNHNRMEZFY1VJN1FVRkZlRUpETEU5QlFVY3NjVUpCUVUxQkxFTkJRVTQ3UVVGR2NVSXNSMEZCVmp0QlFVbGtTeXhoUVVGVE8wRkJTa3NzUzBGTFdFWXNTMEZNVnl4RlFVRm9RanM3UVVGUlFTeE5RVUZOUnl4blFrRkJaMElzVlVGQlEwTXNRMEZCUkN4RlFVRlBPMEZCUXpOQ0xGRkJRVWxLTEUxQlFVMUxMR05CUVZZc1JVRkJNRUk3UVVGRGVFSkVMRkZCUVVWRExHTkJRVVk3UVVGRFJEczdRVUZGUkN4UlFVRk5ReXhUUVVGVFVpeGpRVUZqVFN4RFFVRmtMRU5CUVdZN1FVRkRRVWdzV1VGQlVVd3NRMEZCVWl4RFFVRlZWeXhIUVVGV0xFTkJRV05FTEU5QlFVOVdMRU5CUVhKQ08wRkJRMEZMTEZsQlFWRktMRU5CUVZJc1EwRkJWVlVzUjBGQlZpeERRVUZqUkN4UFFVRlBWQ3hEUVVGeVFqdEJRVU5FTEVkQlVrUTdPMEZCVlVGSkxGVkJRVkZQTEZGQlFWSXNRMEZCYVVJN1FVRkRaa01zWTBGQlZUdEJRVUZCTEdGQlFVMURMRk5CUVZORExHVkJRVlFzUTBGQmVVSkRMR2RDUVVGNlFpeERRVUV3UTJJc1UwRkJNVU1zUlVGQmNVUkpMR0ZCUVhKRUxFTkJRVTQ3UVVGQlFTeExRVVJMTzBGQlJXWlZMR0ZCUVZNN1FVRkJRU3hoUVVGTlNDeFRRVUZUUXl4bFFVRlVMRU5CUVhsQ1J5eHRRa0ZCZWtJc1EwRkJOa05tTEZOQlFUZERMRVZCUVhkRVNTeGhRVUY0UkN4RFFVRk9PMEZCUVVFN1FVRkdUU3hIUVVGcVFqczdRVUZMUVN4VFFVRlBSaXhQUVVGUU8wRkJRMFE3TzBGQlJVUXNTVUZCVFdNc2IwSkJRVzlDTEZWQlFVTllMRU5CUVVRN1FVRkJRU3hUUVVGUk8wRkJRMmhEVWl4UFFVRkhVU3hGUVVGRldTeExRVVF5UWp0QlFVVm9RMjVDTEU5QlFVZFBMRVZCUVVWaE8wRkJSakpDTEVkQlFWSTdRVUZCUVN4RFFVRXhRanM3UVVGTFFTeEpRVUZOUXl4dlFrRkJiMEk3UVVGQlFTeE5RVUZIUXl4alFVRklMRk5CUVVkQkxHTkJRVWc3UVVGQlFTeFRRVUY1UWp0QlFVTnFSSFpDTEU5QlFVZDFRaXhsUVVGbExFTkJRV1lzUlVGQmEwSkRMRTlCUkRSQ08wRkJSV3BFZGtJc1QwRkJSM05DTEdWQlFXVXNRMEZCWml4RlFVRnJRa1U3UVVGR05FSXNSMEZCZWtJN1FVRkJRU3hEUVVFeFFqczdRVUZMUVN4SlFVRk5ReXhwUWtGQmFVSXNWVUZCUTJ4Q0xFTkJRVVE3UVVGQlFTeFRRVUZQUVN4RlFVRkZiVUlzWVVGQlJpeEpRVUZ0UW01Q0xFVkJRVVZ2UWl4WFFVRnlRaXhKUVVGdlEzQkNMRU5CUVRORE8wRkJRVUVzUTBGQmRrSTdPMnRDUVVWbExGVkJRVU5CTEVOQlFVUXNSVUZCU1Vvc1MwRkJTaXhGUVVGak8wRkJRek5DTEUxQlFVMTNRaXhqUVVGalJpeGxRVUZsYkVJc1EwRkJaaXhEUVVGd1FqdEJRVU5CTEZOQlFWRnZRaXhaUVVGWlF5eFBRVUZpTEVkQlEwdzVRaXhqUVVGamRVSXNhMEpCUVd0Q1pDeERRVUZzUWl4RFFVRmtPMEZCUTBWTUxHVkJRVmNzVjBGRVlqdEJRVVZGUkN4dFFrRkJaVzlDTzBGQlJtcENMRXRCUjB0c1FpeExRVWhNTEVWQlJFc3NSMEZOVEV3c1kwRkJZMjlDTEd0Q1FVRnJRbGdzUTBGQmJFSXNRMEZCWkR0QlFVTkZUQ3hsUVVGWExGZEJSR0k3UVVGRlJVUXNiVUpCUVdWcFFqdEJRVVpxUWl4TFFVZExaaXhMUVVoTUxFVkJUa1k3UVVGWFJDeERJaXdpWm1sc1pTSTZJbkJ2YVc1MFpYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2RtRnNkV1VnWm5KdmJTQW5MaTkyWVd4MVpTYzdYRzVwYlhCdmNuUWdZMjl0Y0c5emFYUmxJR1p5YjIwZ0p5NHZZMjl0Y0c5emFYUmxKenRjYmx4dVpuVnVZM1JwYjI0Z1kzSmxZWFJsVUc5cGJuUmxjaWg3SUhnc0lIa2dmU3dnZXlCbGRtVnVkRlJ2VUc5cGJuUnpMQ0J0YjNabFJYWmxiblFzSUM0dUxuQnliM0J6SUgwcElIdGNiaUFnWTI5dWMzUWdjRzlwYm5SbGNpQTlJR052YlhCdmMybDBaU2g3WEc0Z0lDQWdlRG9nZG1Gc2RXVW9lQ2tzWEc0Z0lDQWdlVG9nZG1Gc2RXVW9lU2xjYmlBZ2ZTd2dlMXh1SUNBZ0lIQmhjM05wZG1VNklIUnlkV1VzWEc0Z0lDQWdMaTR1Y0hKdmNITmNiaUFnZlNrN1hHNWNiaUFnWTI5dWMzUWdkWEJrWVhSbFVHOXBiblJsY2lBOUlDaGxLU0E5UGlCN1hHNGdJQ0FnYVdZZ0tIQnliM0J6TG5CeVpYWmxiblJFWldaaGRXeDBLU0I3WEc0Z0lDQWdJQ0JsTG5CeVpYWmxiblJFWldaaGRXeDBLQ2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdZMjl1YzNRZ2NHOXBiblJ6SUQwZ1pYWmxiblJVYjFCdmFXNTBjeWhsS1R0Y2JpQWdJQ0J3YjJsdWRHVnlMbmd1YzJWMEtIQnZhVzUwY3k1NEtUdGNiaUFnSUNCd2IybHVkR1Z5TG5rdWMyVjBLSEJ2YVc1MGN5NTVLVHRjYmlBZ2ZUdGNibHh1SUNCd2IybHVkR1Z5TG5ObGRGQnliM0J6S0h0Y2JpQWdJQ0JmYjI1VGRHRnlkRG9nS0NrZ1BUNGdaRzlqZFcxbGJuUXVaRzlqZFcxbGJuUkZiR1Z0Wlc1MExtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb2JXOTJaVVYyWlc1MExDQjFjR1JoZEdWUWIybHVkR1Z5S1N4Y2JpQWdJQ0JmYjI1VGRHOXdPaUFvS1NBOVBpQmtiMk4xYldWdWRDNWtiMk4xYldWdWRFVnNaVzFsYm5RdWNtVnRiM1psUlhabGJuUk1hWE4wWlc1bGNpaHRiM1psUlhabGJuUXNJSFZ3WkdGMFpWQnZhVzUwWlhJcFhHNGdJSDBwTzF4dVhHNGdJSEpsZEhWeWJpQndiMmx1ZEdWeU8xeHVmVnh1WEc1amIyNXpkQ0J0YjNWelpVVjJaVzUwVkc5UWIybHVkQ0E5SUNobEtTQTlQaUFvZTF4dUlDQjRPaUJsTG5CaFoyVllMRnh1SUNCNU9pQmxMbkJoWjJWWlhHNTlLVHRjYmx4dVkyOXVjM1FnZEc5MVkyaEZkbVZ1ZEZSdlVHOXBiblFnUFNBb2V5QmphR0Z1WjJWa1ZHOTFZMmhsY3lCOUtTQTlQaUFvZTF4dUlDQjRPaUJqYUdGdVoyVmtWRzkxWTJobGMxc3dYUzVqYkdsbGJuUllMRnh1SUNCNU9pQmphR0Z1WjJWa1ZHOTFZMmhsYzFzd1hTNWpiR2xsYm5SWlhHNTlLVHRjYmx4dVkyOXVjM1FnWjJWMFRtRjBhWFpsUlhabGJuUWdQU0FvWlNrZ1BUNGdaUzV2Y21sbmFXNWhiRVYyWlc1MElIeDhJR1V1Ym1GMGFYWmxSWFpsYm5RZ2ZId2daVHRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnS0dVc0lIQnliM0J6S1NBOVBpQjdYRzRnSUdOdmJuTjBJRzVoZEdsMlpVVjJaVzUwSUQwZ1oyVjBUbUYwYVhabFJYWmxiblFvWlNrN1hHNGdJSEpsZEhWeWJpQW9ibUYwYVhabFJYWmxiblF1ZEc5MVkyaGxjeWtnUDF4dUlDQWdJR055WldGMFpWQnZhVzUwWlhJb2RHOTFZMmhGZG1WdWRGUnZVRzlwYm5Rb1pTa3NJSHRjYmlBZ0lDQWdJRzF2ZG1WRmRtVnVkRG9nSjNSdmRXTm9iVzkyWlNjc1hHNGdJQ0FnSUNCbGRtVnVkRlJ2VUc5cGJuUnpPaUIwYjNWamFFVjJaVzUwVkc5UWIybHVkQ3hjYmlBZ0lDQWdJQzR1TG5CeWIzQnpYRzRnSUNBZ2ZTa2dPbHh1SUNBZ0lHTnlaV0YwWlZCdmFXNTBaWElvYlc5MWMyVkZkbVZ1ZEZSdlVHOXBiblFvWlNrc0lIdGNiaUFnSUNBZ0lHMXZkbVZGZG1WdWREb2dKMjF2ZFhObGJXOTJaU2NzWEc0Z0lDQWdJQ0JsZG1WdWRGUnZVRzlwYm5Sek9pQnRiM1Z6WlVWMlpXNTBWRzlRYjJsdWRDeGNiaUFnSUNBZ0lDNHVMbkJ5YjNCelhHNGdJQ0FnZlNrN1hHNTlPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9wb2ludGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF8gPSByZXF1aXJlKCcuLycpO1xuXG52YXIgXzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF8pO1xuXG52YXIgX2ZyYW1lc3luYyA9IHJlcXVpcmUoJy4uL2ZyYW1lc3luYycpO1xuXG52YXIgX3RyYW5zZm9ybWVycyA9IHJlcXVpcmUoJy4uL2luYy90cmFuc2Zvcm1lcnMnKTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKTtcblxudmFyIF9lYXNpbmcgPSByZXF1aXJlKCcuLi9pbmMvZWFzaW5nJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIGNsYW1wUHJvZ3Jlc3MgPSAoMCwgX3RyYW5zZm9ybWVycy5jbGFtcCkoMCwgMSk7XG5cbnZhciBUd2VlbiA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gIF9pbmhlcml0cyhUd2VlbiwgX0FjdGlvbik7XG5cbiAgZnVuY3Rpb24gVHdlZW4oKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFR3ZWVuKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgVHdlZW4ucHJvdG90eXBlLm9uU3RhcnQgPSBmdW5jdGlvbiBvblN0YXJ0KCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGR1cmF0aW9uID0gX3Byb3BzLmR1cmF0aW9uLFxuICAgICAgICBlYXNlID0gX3Byb3BzLmVhc2UsXG4gICAgICAgIGZyb20gPSBfcHJvcHMuZnJvbSxcbiAgICAgICAgdG8gPSBfcHJvcHMudG87XG5cblxuICAgIHRoaXMuZWxhcHNlZCA9IDA7XG5cbiAgICB0aGlzLm9uVXBkYXRlID0gKDAsIF90cmFuc2Zvcm1lcnMuZmxvdykoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzMi5lbGFwc2VkICs9ICgwLCBfZnJhbWVzeW5jLnRpbWVTaW5jZUxhc3RGcmFtZSkoKTtcbiAgICB9LCBmdW5jdGlvbiAodikge1xuICAgICAgcmV0dXJuICgwLCBfY2FsYy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSkoMCwgZHVyYXRpb24sIHYpO1xuICAgIH0sIGNsYW1wUHJvZ3Jlc3MsIGVhc2UsIGZ1bmN0aW9uICh2KSB7XG4gICAgICByZXR1cm4gKDAsIF9jYWxjLmdldFZhbHVlRnJvbVByb2dyZXNzKShmcm9tLCB0bywgdik7XG4gICAgfSk7XG4gIH07XG5cbiAgVHdlZW4ucHJvdG90eXBlLmlzQWN0aW9uQ29tcGxldGUgPSBmdW5jdGlvbiBpc0FjdGlvbkNvbXBsZXRlKCkge1xuICAgIHJldHVybiB0aGlzLmVsYXBzZWQgPj0gdGhpcy5wcm9wcy5kdXJhdGlvbjtcbiAgfTtcblxuICBUd2Vlbi5wcm90b3R5cGUuZ2V0RHVyYXRpb24gPSBmdW5jdGlvbiBnZXREdXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5kdXJhdGlvbjtcbiAgfTtcblxuICBUd2Vlbi5wcm90b3R5cGUuZ2V0RWxhcHNlZCA9IGZ1bmN0aW9uIGdldEVsYXBzZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxhcHNlZDtcbiAgfTtcblxuICByZXR1cm4gVHdlZW47XG59KF8yLmRlZmF1bHQpO1xuXG5Ud2Vlbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGR1cmF0aW9uOiAzMDAsXG4gIGVhc2U6IF9lYXNpbmcuZWFzZU91dCxcbiAgZnJvbTogMCxcbiAgdG86IDFcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChwcm9wcykge1xuICByZXR1cm4gbmV3IFR3ZWVuKHByb3BzKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwzUjNaV1Z1TG1weklsMHNJbTVoYldWeklqcGJJbU5zWVcxd1VISnZaM0psYzNNaUxDSlVkMlZsYmlJc0ltOXVVM1JoY25RaUxDSndjbTl3Y3lJc0ltUjFjbUYwYVc5dUlpd2laV0Z6WlNJc0ltWnliMjBpTENKMGJ5SXNJbVZzWVhCelpXUWlMQ0p2YmxWd1pHRjBaU0lzSW5ZaUxDSnBjMEZqZEdsdmJrTnZiWEJzWlhSbElpd2laMlYwUkhWeVlYUnBiMjRpTENKblpYUkZiR0Z3YzJWa0lpd2laR1ZtWVhWc2RGQnliM0J6SWwwc0ltMWhjSEJwYm1keklqb2lPenM3TzBGQlFVRTdPenM3UVVGRFFUczdRVUZEUVRzN1FVRkRRVHM3UVVGRFFUczdPenM3T3pzN096dEJRVVZCTEVsQlFVMUJMR2RDUVVGblFpeDVRa0ZCVFN4RFFVRk9MRVZCUVZNc1EwRkJWQ3hEUVVGMFFqczdTVUZGVFVNc1N6czdPenM3T3pzN08ydENRVkZLUXl4UExITkNRVUZWTzBGQlFVRTdPMEZCUVVFc2FVSkJRelpDTEV0QlFVdERMRXRCUkd4RE8wRkJRVUVzVVVGRFFVTXNVVUZFUVN4VlFVTkJRU3hSUVVSQk8wRkJRVUVzVVVGRFZVTXNTVUZFVml4VlFVTlZRU3hKUVVSV08wRkJRVUVzVVVGRFowSkRMRWxCUkdoQ0xGVkJRMmRDUVN4SlFVUm9RanRCUVVGQkxGRkJRM05DUXl4RlFVUjBRaXhWUVVOelFrRXNSVUZFZEVJN096dEJRVWRTTEZOQlFVdERMRTlCUVV3c1IwRkJaU3hEUVVGbU96dEJRVVZCTEZOQlFVdERMRkZCUVV3c1IwRkJaMElzZDBKQlEyUTdRVUZCUVN4aFFVRk5MRTlCUVV0RUxFOUJRVXdzU1VGQlowSXNiME5CUVhSQ08wRkJRVUVzUzBGRVl5eEZRVVZrTEZWQlFVTkZMRU5CUVVRN1FVRkJRU3hoUVVGUExHZERRVUZ4UWl4RFFVRnlRaXhGUVVGM1FrNHNVVUZCZUVJc1JVRkJhME5OTEVOQlFXeERMRU5CUVZBN1FVRkJRU3hMUVVaakxFVkJSMlJXTEdGQlNHTXNSVUZKWkVzc1NVRktZeXhGUVV0a0xGVkJRVU5MTEVOQlFVUTdRVUZCUVN4aFFVRlBMR2REUVVGeFFrb3NTVUZCY2tJc1JVRkJNa0pETEVWQlFUTkNMRVZCUVN0Q1J5eERRVUV2UWl4RFFVRlFPMEZCUVVFc1MwRk1ZeXhEUVVGb1FqdEJRVTlFTEVjN08ydENRVVZFUXl4blFpd3JRa0ZCYlVJN1FVRkRha0lzVjBGQlVTeExRVUZMU0N4UFFVRk1MRWxCUVdkQ0xFdEJRVXRNTEV0QlFVd3NRMEZCVjBNc1VVRkJia003UVVGRFJDeEhPenRyUWtGRlJGRXNWeXd3UWtGQll6dEJRVU5hTEZkQlFVOHNTMEZCUzFRc1MwRkJUQ3hEUVVGWFF5eFJRVUZzUWp0QlFVTkVMRWM3TzJ0Q1FVVkVVeXhWTEhsQ1FVRmhPMEZCUTFnc1YwRkJUeXhMUVVGTFRDeFBRVUZhTzBGQlEwUXNSenM3T3pzN1FVRm9RMGRRTEVzc1EwRkRSMkVzV1N4SFFVRmxPMEZCUTNCQ1ZpeFpRVUZWTEVkQlJGVTdRVUZGY0VKRExIVkNRVVp2UWp0QlFVZHdRa01zVVVGQlRTeERRVWhqTzBGQlNYQkNReXhOUVVGSk8wRkJTbWRDTEVNN08ydENRV3REVkN4VlFVRkRTaXhMUVVGRU8wRkJRVUVzVTBGQlZ5eEpRVUZKUml4TFFVRktMRU5CUVZWRkxFdEJRVllzUTBGQldEdEJRVUZCTEVNaUxDSm1hV3hsSWpvaWRIZGxaVzR1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoZEhSd1pYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdRV04wYVc5dUlHWnliMjBnSnk0dkp6dGNibWx0Y0c5eWRDQjdJSFJwYldWVGFXNWpaVXhoYzNSR2NtRnRaU0I5SUdaeWIyMGdKeTR1TDJaeVlXMWxjM2x1WXljN1hHNXBiWEJ2Y25RZ2V5Qm1iRzkzTENCamJHRnRjQ0I5SUdaeWIyMGdKeTR1TDJsdVl5OTBjbUZ1YzJadmNtMWxjbk1uTzF4dWFXMXdiM0owSUhzZ1oyVjBVSEp2WjNKbGMzTkdjbTl0Vm1Gc2RXVXNJR2RsZEZaaGJIVmxSbkp2YlZCeWIyZHlaWE56SUgwZ1puSnZiU0FuTGk0dmFXNWpMMk5oYkdNbk8xeHVhVzF3YjNKMElIc2daV0Z6WlU5MWRDQjlJR1p5YjIwZ0p5NHVMMmx1WXk5bFlYTnBibWNuTzF4dVhHNWpiMjV6ZENCamJHRnRjRkJ5YjJkeVpYTnpJRDBnWTJ4aGJYQW9NQ3dnTVNrN1hHNWNibU5zWVhOeklGUjNaV1Z1SUdWNGRHVnVaSE1nUVdOMGFXOXVJSHRjYmlBZ2MzUmhkR2xqSUdSbFptRjFiSFJRY205d2N5QTlJSHRjYmlBZ0lDQmtkWEpoZEdsdmJqb2dNekF3TEZ4dUlDQWdJR1ZoYzJVNklHVmhjMlZQZFhRc1hHNGdJQ0FnWm5KdmJUb2dNQ3hjYmlBZ0lDQjBiem9nTVZ4dUlDQjlPMXh1WEc0Z0lHOXVVM1JoY25Rb0tTQjdYRzRnSUNBZ1kyOXVjM1FnZXlCa2RYSmhkR2x2Yml3Z1pXRnpaU3dnWm5KdmJTd2dkRzhnZlNBOUlIUm9hWE11Y0hKdmNITTdYRzVjYmlBZ0lDQjBhR2x6TG1Wc1lYQnpaV1FnUFNBd08xeHVYRzRnSUNBZ2RHaHBjeTV2YmxWd1pHRjBaU0E5SUdac2IzY29YRzRnSUNBZ0lDQW9LU0E5UGlCMGFHbHpMbVZzWVhCelpXUWdLejBnZEdsdFpWTnBibU5sVEdGemRFWnlZVzFsS0Nrc1hHNGdJQ0FnSUNBb2Rpa2dQVDRnWjJWMFVISnZaM0psYzNOR2NtOXRWbUZzZFdVb01Dd2daSFZ5WVhScGIyNHNJSFlwTEZ4dUlDQWdJQ0FnWTJ4aGJYQlFjbTluY21WemN5eGNiaUFnSUNBZ0lHVmhjMlVzWEc0Z0lDQWdJQ0FvZGlrZ1BUNGdaMlYwVm1Gc2RXVkdjbTl0VUhKdlozSmxjM01vWm5KdmJTd2dkRzhzSUhZcFhHNGdJQ0FnS1R0Y2JpQWdmVnh1WEc0Z0lHbHpRV04wYVc5dVEyOXRjR3hsZEdVb0tTQjdYRzRnSUNBZ2NtVjBkWEp1SUNoMGFHbHpMbVZzWVhCelpXUWdQajBnZEdocGN5NXdjbTl3Y3k1a2RYSmhkR2x2YmlrN1hHNGdJSDFjYmx4dUlDQm5aWFJFZFhKaGRHbHZiaWdwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3k1d2NtOXdjeTVrZFhKaGRHbHZianRjYmlBZ2ZWeHVYRzRnSUdkbGRFVnNZWEJ6WldRb0tTQjdYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTXVaV3hoY0hObFpEdGNiaUFnZlZ4dWZWeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQW9jSEp2Y0hNcElEMCtJRzVsZHlCVWQyVmxiaWh3Y205d2N5azdYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy90d2Vlbi5qc1xuICoqIG1vZHVsZSBpZCA9IDEzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfID0gcmVxdWlyZSgnLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgVHJhY2sgPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICBfaW5oZXJpdHMoVHJhY2ssIF9BY3Rpb24pO1xuXG4gIGZ1bmN0aW9uIFRyYWNrKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUcmFjayk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIFRyYWNrLnByb3RvdHlwZS5vblN0YXJ0ID0gZnVuY3Rpb24gb25TdGFydCgpIHtcbiAgICB2YXIgaW5wdXQgPSB0aGlzLnByb3BzLmlucHV0O1xuXG4gICAgdGhpcy5pbnB1dE9yaWdpbiA9IGlucHV0LmdldCgpO1xuICAgIGlucHV0LmFkZExpc3RlbmVyKHRoaXMudXBkYXRlKTtcbiAgfTtcblxuICBUcmFjay5wcm90b3R5cGUub25TdG9wID0gZnVuY3Rpb24gb25TdG9wKCkge1xuICAgIHZhciBpbnB1dCA9IHRoaXMucHJvcHMuaW5wdXQ7XG5cbiAgICBpbnB1dC5yZW1vdmVMaXN0ZW5lcih0aGlzLnVwZGF0ZSk7XG4gIH07XG5cbiAgVHJhY2sucHJvdG90eXBlLm9uVXBkYXRlID0gZnVuY3Rpb24gb25VcGRhdGUoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGlucHV0ID0gX3Byb3BzLmlucHV0LFxuICAgICAgICBmcm9tID0gX3Byb3BzLmZyb207XG5cbiAgICB2YXIgb2Zmc2V0ID0gaW5wdXQuZ2V0KCkgLSB0aGlzLmlucHV0T3JpZ2luO1xuICAgIHJldHVybiBmcm9tICsgb2Zmc2V0O1xuICB9O1xuXG4gIHJldHVybiBUcmFjaztcbn0oXzIuZGVmYXVsdCk7XG5cblRyYWNrLmRlZmF1bHRQcm9wcyA9IHtcbiAgZnJvbTogMCxcbiAgcGFzc2l2ZTogdHJ1ZVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBpZiAoYXJncy5sZW5ndGggPT09IDEpIHtcbiAgICB2YXIgcHJvcHMgPSBhcmdzWzBdO1xuXG4gICAgcmV0dXJuIG5ldyBUcmFjayhwcm9wcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGlucHV0ID0gYXJnc1swXSxcbiAgICAgICAgb25VcGRhdGUgPSBhcmdzWzFdLFxuICAgICAgICBfcHJvcHMyID0gYXJnc1syXTtcblxuICAgIHJldHVybiBuZXcgVHJhY2soX2V4dGVuZHMoe1xuICAgICAgaW5wdXQ6IGlucHV0LFxuICAgICAgb25VcGRhdGU6IG9uVXBkYXRlXG4gICAgfSwgX3Byb3BzMikpO1xuICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMM1J5WVdOckxtcHpJbDBzSW01aGJXVnpJanBiSWxSeVlXTnJJaXdpYjI1VGRHRnlkQ0lzSW1sdWNIVjBJaXdpY0hKdmNITWlMQ0pwYm5CMWRFOXlhV2RwYmlJc0ltZGxkQ0lzSW1Ga1pFeHBjM1JsYm1WeUlpd2lkWEJrWVhSbElpd2liMjVUZEc5d0lpd2ljbVZ0YjNabFRHbHpkR1Z1WlhJaUxDSnZibFZ3WkdGMFpTSXNJbVp5YjIwaUxDSnZabVp6WlhRaUxDSmtaV1poZFd4MFVISnZjSE1pTENKd1lYTnphWFpsSWl3aVlYSm5jeUlzSW14bGJtZDBhQ0pkTENKdFlYQndhVzVuY3lJNklqczdPenM3TzBGQlFVRTdPenM3T3pzN096czdPenRKUVVWTlFTeExPenM3T3pzN096czdhMEpCVFVwRExFOHNjMEpCUVZVN1FVRkJRU3hSUVVOQlF5eExRVVJCTEVkQlExVXNTMEZCUzBNc1MwRkVaaXhEUVVOQlJDeExRVVJCT3p0QlFVVlNMRk5CUVV0RkxGZEJRVXdzUjBGQmJVSkdMRTFCUVUxSExFZEJRVTRzUlVGQmJrSTdRVUZEUVVnc1ZVRkJUVWtzVjBGQlRpeERRVUZyUWl4TFFVRkxReXhOUVVGMlFqdEJRVU5FTEVjN08ydENRVVZFUXl4TkxIRkNRVUZUTzBGQlFVRXNVVUZEUTA0c1MwRkVSQ3hIUVVOWExFdEJRVXRETEV0QlJHaENMRU5CUTBORUxFdEJSRVE3TzBGQlJWQkJMRlZCUVUxUExHTkJRVTRzUTBGQmNVSXNTMEZCUzBZc1RVRkJNVUk3UVVGRFJDeEhPenRyUWtGRlJFY3NVU3gxUWtGQlZ6dEJRVUZCTEdsQ1FVTmxMRXRCUVV0UUxFdEJSSEJDTzBGQlFVRXNVVUZEUkVRc1MwRkVReXhWUVVORVFTeExRVVJETzBGQlFVRXNVVUZEVFZNc1NVRkVUaXhWUVVOTlFTeEpRVVJPT3p0QlFVVlVMRkZCUVUxRExGTkJRVk5XTEUxQlFVMUhMRWRCUVU0c1MwRkJZeXhMUVVGTFJDeFhRVUZzUXp0QlFVTkJMRmRCUVU5UExFOUJRVTlETEUxQlFXUTdRVUZEUkN4SE96czdPenRCUVhKQ1Ixb3NTeXhEUVVOSFlTeFpMRWRCUVdVN1FVRkRjRUpHTEZGQlFVMHNRMEZFWXp0QlFVVndRa2NzVjBGQlV6dEJRVVpYTEVNN08ydENRWFZDVkN4WlFVRmhPMEZCUVVFc2IwTkJRVlJETEVsQlFWTTdRVUZCVkVFc1VVRkJVenRCUVVGQk96dEJRVU14UWl4TlFVRkpRU3hMUVVGTFF5eE5RVUZNTEV0QlFXZENMRU5CUVhCQ0xFVkJRWFZDTzBGQlFVRXNVVUZEWW1Jc1MwRkVZU3hIUVVOSVdTeEpRVVJIT3p0QlFVVnlRaXhYUVVGUExFbEJRVWxtTEV0QlFVb3NRMEZCVlVjc1MwRkJWaXhEUVVGUU8wRkJRMFFzUjBGSVJDeE5RVWRQTzBGQlFVRXNVVUZEUjBRc1MwRkVTQ3hIUVVNNFFtRXNTVUZFT1VJN1FVRkJRU3hSUVVOVlRDeFJRVVJXTEVkQlF6aENTeXhKUVVRNVFqdEJRVUZCTEZGQlEyOUNXaXhQUVVSd1FpeEhRVU00UWxrc1NVRkVPVUk3TzBGQlJVd3NWMEZCVHl4SlFVRkpaaXhMUVVGS08wRkJRMHhGTEd0Q1FVUkxPMEZCUlV4Uk8wRkJSa3NzVDBGSFJsQXNUMEZJUlN4RlFVRlFPMEZCUzBRN1FVRkRSaXhESWl3aVptbHNaU0k2SW5SeVlXTnJMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OXRZWFIwY0dWeWNua3ZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElFRmpkR2x2YmlCbWNtOXRJQ2N1THljN1hHNWNibU5zWVhOeklGUnlZV05ySUdWNGRHVnVaSE1nUVdOMGFXOXVJSHRjYmlBZ2MzUmhkR2xqSUdSbFptRjFiSFJRY205d2N5QTlJSHRjYmlBZ0lDQm1jbTl0T2lBd0xGeHVJQ0FnSUhCaGMzTnBkbVU2SUhSeWRXVmNiaUFnZlR0Y2JseHVJQ0J2YmxOMFlYSjBLQ2tnZTF4dUlDQWdJR052Ym5OMElIc2dhVzV3ZFhRZ2ZTQTlJSFJvYVhNdWNISnZjSE03WEc0Z0lDQWdkR2hwY3k1cGJuQjFkRTl5YVdkcGJpQTlJR2x1Y0hWMExtZGxkQ2dwTzF4dUlDQWdJR2x1Y0hWMExtRmtaRXhwYzNSbGJtVnlLSFJvYVhNdWRYQmtZWFJsS1R0Y2JpQWdmVnh1WEc0Z0lHOXVVM1J2Y0NncElIdGNiaUFnSUNCamIyNXpkQ0I3SUdsdWNIVjBJSDBnUFNCMGFHbHpMbkJ5YjNCek8xeHVJQ0FnSUdsdWNIVjBMbkpsYlc5MlpVeHBjM1JsYm1WeUtIUm9hWE11ZFhCa1lYUmxLVHRjYmlBZ2ZWeHVYRzRnSUc5dVZYQmtZWFJsS0NrZ2UxeHVJQ0FnSUdOdmJuTjBJSHNnYVc1d2RYUXNJR1p5YjIwZ2ZTQTlJSFJvYVhNdWNISnZjSE03WEc0Z0lDQWdZMjl1YzNRZ2IyWm1jMlYwSUQwZ2FXNXdkWFF1WjJWMEtDa2dMU0IwYUdsekxtbHVjSFYwVDNKcFoybHVPMXh1SUNBZ0lISmxkSFZ5YmlCbWNtOXRJQ3NnYjJabWMyVjBPMXh1SUNCOVhHNTlYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJQ2d1TGk1aGNtZHpLU0E5UGlCN1hHNGdJR2xtSUNoaGNtZHpMbXhsYm1kMGFDQTlQVDBnTVNrZ2UxeHVJQ0FnSUdOdmJuTjBJRnNnY0hKdmNITWdYU0E5SUdGeVozTTdYRzRnSUNBZ2NtVjBkWEp1SUc1bGR5QlVjbUZqYXlod2NtOXdjeWs3WEc0Z0lIMGdaV3h6WlNCN1hHNGdJQ0FnWTI5dWMzUWdXeUJwYm5CMWRDd2diMjVWY0dSaGRHVXNJSEJ5YjNCeklGMGdQU0JoY21kek8xeHVJQ0FnSUhKbGRIVnliaUJ1WlhjZ1ZISmhZMnNvZTF4dUlDQWdJQ0FnYVc1d2RYUXNYRzRnSUNBZ0lDQnZibFZ3WkdGMFpTeGNiaUFnSUNBZ0lDNHVMbkJ5YjNCelhHNGdJQ0FnZlNrN1hHNGdJSDFjYm4wN1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL3RyYWNrLmpzXG4gKiogbW9kdWxlIGlkID0gMTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9jaGFpbiA9IHJlcXVpcmUoJy4vY2hhaW4nKTtcblxudmFyIF9jaGFpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGFpbik7XG5cbnZhciBfcGFyYWxsZWwgPSByZXF1aXJlKCcuL3BhcmFsbGVsJyk7XG5cbnZhciBfcGFyYWxsZWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGFyYWxsZWwpO1xuXG52YXIgX2RlbGF5ID0gcmVxdWlyZSgnLi9kZWxheScpO1xuXG52YXIgX2RlbGF5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlbGF5KTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgcGFyYWxsZWwgQWN0aW9uIGNvbXBvc2VkIG9mIGNoYWluZWRcbiAqIGRlbGF5IGFuZCBhY3Rpb25zLiBJbnRlcnZhbCBjYW4gYmUgZWl0aGVyIGEgbnVtYmVyXG4gKiB0byBtdWx0aXBseSBieSBgaWAgb3IgYSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgcHJvdmlkZWQgYGlgXG4gKiBAcGFyYW0gIHthcnJheX0gYWN0aW9uc1xuICogQHBhcmFtICB7ZnVuY3Rpb24gfCBudW1iZXJ9IGludGVydmFsXG4gKiBAcmV0dXJuIHtBY3Rpb259XG4gKi9cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChhY3Rpb25zLCBpbnRlcnZhbCkge1xuICB2YXIgaW50ZXJ2YWxJc0Z1bmN0aW9uID0gKDAsIF91dGlscy5pc0Z1bmMpKGludGVydmFsKTtcblxuICByZXR1cm4gKDAsIF9wYXJhbGxlbDIuZGVmYXVsdCkoYWN0aW9ucy5tYXAoZnVuY3Rpb24gKGFjdGlvbiwgaSkge1xuICAgIHZhciB0aW1lVG9EZWxheSA9IGludGVydmFsSXNGdW5jdGlvbiA/IGludGVydmFsKGkpIDogaSAqIGludGVydmFsO1xuICAgIHJldHVybiAoMCwgX2NoYWluMi5kZWZhdWx0KShbKDAsIF9kZWxheTIuZGVmYXVsdCkodGltZVRvRGVsYXkpLCBhY3Rpb25dKTtcbiAgfSkpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDNOMFlXZG5aWEl1YW5NaVhTd2libUZ0WlhNaU9sc2lZV04wYVc5dWN5SXNJbWx1ZEdWeWRtRnNJaXdpYVc1MFpYSjJZV3hKYzBaMWJtTjBhVzl1SWl3aWJXRndJaXdpWVdOMGFXOXVJaXdpYVNJc0luUnBiV1ZVYjBSbGJHRjVJbDBzSW0xaGNIQnBibWR6SWpvaU96czdPMEZCUVVFN096czdRVUZEUVRzN096dEJRVU5CT3pzN08wRkJRMEU3T3pzN1FVRkZRVHM3T3pzN096czdhMEpCVVdVc1ZVRkJRMEVzVDBGQlJDeEZRVUZWUXl4UlFVRldMRVZCUVhWQ08wRkJRM0JETEUxQlFVMURMSEZDUVVGeFFpeHRRa0ZCVDBRc1VVRkJVQ3hEUVVFelFqczdRVUZGUVN4VFFVRlBMSGRDUVVGVFJDeFJRVUZSUnl4SFFVRlNMRU5CUVZrc1ZVRkJRME1zVFVGQlJDeEZRVUZUUXl4RFFVRlVMRVZCUVdVN1FVRkRla01zVVVGQlRVTXNZMEZCWlVvc2EwSkJRVVFzUjBGQmRVSkVMRk5CUVZOSkxFTkJRVlFzUTBGQmRrSXNSMEZCY1VOQkxFbEJRVWxLTEZGQlFUZEVPMEZCUTBFc1YwRkJUeXh4UWtGQlRTeERRVU5ZTEhGQ1FVRk5TeXhYUVVGT0xFTkJSRmNzUlVGRldFWXNUVUZHVnl4RFFVRk9MRU5CUVZBN1FVRkpSQ3hIUVU1bExFTkJRVlFzUTBGQlVEdEJRVTlFTEVNaUxDSm1hV3hsSWpvaWMzUmhaMmRsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0JqYUdGcGJpQm1jbTl0SUNjdUwyTm9ZV2x1Snp0Y2JtbHRjRzl5ZENCd1lYSmhiR3hsYkNCbWNtOXRJQ2N1TDNCaGNtRnNiR1ZzSnp0Y2JtbHRjRzl5ZENCa1pXeGhlU0JtY205dElDY3VMMlJsYkdGNUp6dGNibWx0Y0c5eWRDQjdJR2x6Um5WdVl5QjlJR1p5YjIwZ0p5NHVMMmx1WXk5MWRHbHNjeWM3WEc1Y2JpOHFLbHh1SUNvZ1EzSmxZWFJsY3lCaElHNWxkeUJ3WVhKaGJHeGxiQ0JCWTNScGIyNGdZMjl0Y0c5elpXUWdiMllnWTJoaGFXNWxaRnh1SUNvZ1pHVnNZWGtnWVc1a0lHRmpkR2x2Ym5NdUlFbHVkR1Z5ZG1Gc0lHTmhiaUJpWlNCbGFYUm9aWElnWVNCdWRXMWlaWEpjYmlBcUlIUnZJRzExYkhScGNHeDVJR0o1SUdCcFlDQnZjaUJoSUdaMWJtTjBhVzl1SUhSb1lYUWdkMmxzYkNCaVpTQndjbTkyYVdSbFpDQmdhV0JjYmlBcUlFQndZWEpoYlNBZ2UyRnljbUY1ZlNCaFkzUnBiMjV6WEc0Z0tpQkFjR0Z5WVcwZ0lIdG1kVzVqZEdsdmJpQjhJRzUxYldKbGNuMGdhVzUwWlhKMllXeGNiaUFxSUVCeVpYUjFjbTRnZTBGamRHbHZibjFjYmlBcUwxeHVaWGh3YjNKMElHUmxabUYxYkhRZ0tHRmpkR2x2Ym5Nc0lHbHVkR1Z5ZG1Gc0tTQTlQaUI3WEc0Z0lHTnZibk4wSUdsdWRHVnlkbUZzU1hOR2RXNWpkR2x2YmlBOUlHbHpSblZ1WXlocGJuUmxjblpoYkNrN1hHNWNiaUFnY21WMGRYSnVJSEJoY21Gc2JHVnNLR0ZqZEdsdmJuTXViV0Z3S0NoaFkzUnBiMjRzSUdrcElEMCtJSHRjYmlBZ0lDQmpiMjV6ZENCMGFXMWxWRzlFWld4aGVTQTlJQ2hwYm5SbGNuWmhiRWx6Um5WdVkzUnBiMjRwSUQ4Z2FXNTBaWEoyWVd3b2FTa2dPaUJwSUNvZ2FXNTBaWEoyWVd3N1hHNGdJQ0FnY21WMGRYSnVJR05vWVdsdUtGdGNiaUFnSUNBZ0lHUmxiR0Y1S0hScGJXVlViMFJsYkdGNUtTeGNiaUFnSUNBZ0lHRmpkR2x2Ymx4dUlDQWdJRjBwTzF4dUlDQjlLU2s3WEc1OU8xeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL3N0YWdnZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgXyA9IHJlcXVpcmUoJy4vJyk7XG5cbnZhciBfMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXyk7XG5cbnZhciBfZnJhbWVzeW5jID0gcmVxdWlyZSgnLi4vZnJhbWVzeW5jJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFZhbHVlID0gZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgX2luaGVyaXRzKFZhbHVlLCBfQWN0aW9uKTtcblxuICBmdW5jdGlvbiBWYWx1ZSgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVmFsdWUpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBWYWx1ZS5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gc2V0KHYpIHtcbiAgICB0aGlzLmN1cnJlbnQgPSB2O1xuICAgICgwLCBfZnJhbWVzeW5jLm9uRnJhbWVVcGRhdGUpKHRoaXMudXBkYXRlKTtcbiAgfTtcblxuICByZXR1cm4gVmFsdWU7XG59KF8yLmRlZmF1bHQpO1xuXG5WYWx1ZS5kZWZhdWx0UHJvcHMgPSB7XG4gIHBhc3NpdmU6IHRydWVcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChjdXJyZW50LCBvblVwZGF0ZSkge1xuICByZXR1cm4gbmV3IFZhbHVlKHsgY3VycmVudDogY3VycmVudCwgb25VcGRhdGU6IG9uVXBkYXRlIH0pO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDNaaGJIVmxMbXB6SWwwc0ltNWhiV1Z6SWpwYklsWmhiSFZsSWl3aWMyVjBJaXdpZGlJc0ltTjFjbkpsYm5RaUxDSjFjR1JoZEdVaUxDSmtaV1poZFd4MFVISnZjSE1pTENKd1lYTnphWFpsSWl3aWIyNVZjR1JoZEdVaVhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN1FVRkJRVHM3T3p0QlFVTkJPenM3T3pzN096czdPMGxCUlUxQkxFczdPenM3T3pzN096dHJRa0ZMU2tNc1J5eG5Ra0ZCU1VNc1F5eEZRVUZITzBGQlEwd3NVMEZCUzBNc1QwRkJUQ3hIUVVGbFJDeERRVUZtTzBGQlEwRXNhME5CUVdNc1MwRkJTMFVzVFVGQmJrSTdRVUZEUkN4SE96czdPenRCUVZKSFNpeExMRU5CUTBkTExGa3NSMEZCWlR0QlFVTndRa01zVjBGQlV6dEJRVVJYTEVNN08ydENRVlZVTEZWQlFVTklMRTlCUVVRc1JVRkJWVWtzVVVGQlZqdEJRVUZCTEZOQlFYVkNMRWxCUVVsUUxFdEJRVW9zUTBGQlZTeEZRVUZGUnl4blFrRkJSaXhGUVVGWFNTeHJRa0ZCV0N4RlFVRldMRU5CUVhaQ08wRkJRVUVzUXlJc0ltWnBiR1VpT2lKMllXeDFaUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0YwZEhCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQkJZM1JwYjI0Z1puSnZiU0FuTGk4bk8xeHVhVzF3YjNKMElIc2diMjVHY21GdFpWVndaR0YwWlNCOUlHWnliMjBnSnk0dUwyWnlZVzFsYzNsdVl5YzdYRzVjYm1Oc1lYTnpJRlpoYkhWbElHVjRkR1Z1WkhNZ1FXTjBhVzl1SUh0Y2JpQWdjM1JoZEdsaklHUmxabUYxYkhSUWNtOXdjeUE5SUh0Y2JpQWdJQ0J3WVhOemFYWmxPaUIwY25WbFhHNGdJSDA3WEc1Y2JpQWdjMlYwS0hZcElIdGNiaUFnSUNCMGFHbHpMbU4xY25KbGJuUWdQU0IyTzF4dUlDQWdJRzl1Um5KaGJXVlZjR1JoZEdVb2RHaHBjeTUxY0dSaGRHVXBPMXh1SUNCOVhHNTlYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJQ2hqZFhKeVpXNTBMQ0J2YmxWd1pHRjBaU2tnUFQ0Z2JtVjNJRlpoYkhWbEtIc2dZM1Z5Y21WdWRDd2diMjVWY0dSaGRHVWdmU2s3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvdmFsdWUuanNcbiAqKiBtb2R1bGUgaWQgPSAxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5jdXJyZW50RnJhbWVUaW1lc3RhbXAgPSBleHBvcnRzLnRpbWVTaW5jZUxhc3RGcmFtZSA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZUVuZCA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZVJlbmRlciA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZVVwZGF0ZSA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZVN0YXJ0ID0gZXhwb3J0cy5vbkZyYW1lRW5kID0gZXhwb3J0cy5vbkZyYW1lUmVuZGVyID0gZXhwb3J0cy5vbkZyYW1lVXBkYXRlID0gZXhwb3J0cy5vbkZyYW1lU3RhcnQgPSB1bmRlZmluZWQ7XG5cbnZhciBfb25OZXh0RnJhbWUgPSByZXF1aXJlKCcuL29uLW5leHQtZnJhbWUnKTtcblxudmFyIF9vbk5leHRGcmFtZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vbk5leHRGcmFtZSk7XG5cbnZhciBfY3JlYXRlUmVuZGVyU3RlcCA9IHJlcXVpcmUoJy4vY3JlYXRlLXJlbmRlci1zdGVwJyk7XG5cbnZhciBfY3JlYXRlUmVuZGVyU3RlcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVSZW5kZXJTdGVwKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgd2lsbFJlbmRlck5leHRGcmFtZSA9IGZhbHNlO1xuXG4vKipcbiAqIE1heGltdW0gcGVybWl0dGVkIG1zIHNpbmNlIGxhc3QgZnJhbWVcbiAqIEB0eXBlIHtOdW1iZXJ9XG4gKi9cbnZhciBNQVhfRUxBUFNFRCA9IDIwO1xuXG4vKipcbiAqIEN1cnJlbnQgZnJhbWVzdGFtcFxuICogQHR5cGUge051bWJlcn1cbiAqL1xudmFyIGN1cnJlbnRGcmFtZXN0YW1wID0gKDAsIF91dGlscy5jdXJyZW50VGltZSkoKTtcblxudmFyIGVsYXBzZWQgPSAwO1xuXG4vKipcbiAqIEZhY3RvciB0byBtdWx0aXBseSBgZWxhcHNlZGAgYnkgLSBcbiAqIDAuNSB3b3VsZCBiZSBzbG93IG1vdGlvbiwgMiB3b3VsZCBiZSBmYXN0XG4gKiBAdHlwZSB7TnVtYmVyfVxuICovXG52YXIgZGlsYXRpb24gPSAxO1xuXG5mdW5jdGlvbiBzdGFydFJlbmRlckxvb3AoKSB7XG4gIGlmICghd2lsbFJlbmRlck5leHRGcmFtZSkge1xuICAgIHdpbGxSZW5kZXJOZXh0RnJhbWUgPSB0cnVlO1xuICAgICgwLCBfb25OZXh0RnJhbWUyLmRlZmF1bHQpKHByb2Nlc3NGcmFtZSk7XG4gIH1cbn1cblxudmFyIGZyYW1lU3RhcnQgPSAoMCwgX2NyZWF0ZVJlbmRlclN0ZXAyLmRlZmF1bHQpKHN0YXJ0UmVuZGVyTG9vcCk7XG52YXIgZnJhbWVVcGRhdGUgPSAoMCwgX2NyZWF0ZVJlbmRlclN0ZXAyLmRlZmF1bHQpKHN0YXJ0UmVuZGVyTG9vcCk7XG52YXIgZnJhbWVSZW5kZXIgPSAoMCwgX2NyZWF0ZVJlbmRlclN0ZXAyLmRlZmF1bHQpKHN0YXJ0UmVuZGVyTG9vcCk7XG52YXIgZnJhbWVFbmQgPSAoMCwgX2NyZWF0ZVJlbmRlclN0ZXAyLmRlZmF1bHQpKHN0YXJ0UmVuZGVyTG9vcCk7XG5cbmZ1bmN0aW9uIHByb2Nlc3NGcmFtZShmcmFtZXN0YW1wKSB7XG4gIHdpbGxSZW5kZXJOZXh0RnJhbWUgPSBmYWxzZTtcbiAgZWxhcHNlZCA9IE1hdGgubWF4KE1hdGgubWluKGZyYW1lc3RhbXAgLSBjdXJyZW50RnJhbWVzdGFtcCwgTUFYX0VMQVBTRUQpLCAxKSAqIGRpbGF0aW9uO1xuICBjdXJyZW50RnJhbWVzdGFtcCA9IGZyYW1lc3RhbXA7XG5cbiAgZnJhbWVTdGFydC5wcm9jZXNzKCk7XG4gIGZyYW1lVXBkYXRlLnByb2Nlc3MoKTtcbiAgZnJhbWVSZW5kZXIucHJvY2VzcygpO1xuICBmcmFtZUVuZC5wcm9jZXNzKCk7XG59XG5cbnZhciBvbkZyYW1lU3RhcnQgPSBleHBvcnRzLm9uRnJhbWVTdGFydCA9IGZyYW1lU3RhcnQuc2NoZWR1bGU7XG52YXIgb25GcmFtZVVwZGF0ZSA9IGV4cG9ydHMub25GcmFtZVVwZGF0ZSA9IGZyYW1lVXBkYXRlLnNjaGVkdWxlO1xudmFyIG9uRnJhbWVSZW5kZXIgPSBleHBvcnRzLm9uRnJhbWVSZW5kZXIgPSBmcmFtZVJlbmRlci5zY2hlZHVsZTtcbnZhciBvbkZyYW1lRW5kID0gZXhwb3J0cy5vbkZyYW1lRW5kID0gZnJhbWVFbmQuc2NoZWR1bGU7XG52YXIgY2FuY2VsT25GcmFtZVN0YXJ0ID0gZXhwb3J0cy5jYW5jZWxPbkZyYW1lU3RhcnQgPSBmcmFtZVN0YXJ0LmNhbmNlbDtcbnZhciBjYW5jZWxPbkZyYW1lVXBkYXRlID0gZXhwb3J0cy5jYW5jZWxPbkZyYW1lVXBkYXRlID0gZnJhbWVVcGRhdGUuY2FuY2VsO1xudmFyIGNhbmNlbE9uRnJhbWVSZW5kZXIgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVSZW5kZXIgPSBmcmFtZVJlbmRlci5jYW5jZWw7XG52YXIgY2FuY2VsT25GcmFtZUVuZCA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZUVuZCA9IGZyYW1lRW5kLmNhbmNlbDtcblxudmFyIHRpbWVTaW5jZUxhc3RGcmFtZSA9IGV4cG9ydHMudGltZVNpbmNlTGFzdEZyYW1lID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZWxhcHNlZDtcbn07XG52YXIgY3VycmVudEZyYW1lVGltZXN0YW1wID0gZXhwb3J0cy5jdXJyZW50RnJhbWVUaW1lc3RhbXAgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBjdXJyZW50RnJhbWVzdGFtcDtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OW1jbUZ0WlhONWJtTXZhVzVrWlhndWFuTWlYU3dpYm1GdFpYTWlPbHNpZDJsc2JGSmxibVJsY2s1bGVIUkdjbUZ0WlNJc0lrMUJXRjlGVEVGUVUwVkVJaXdpWTNWeWNtVnVkRVp5WVcxbGMzUmhiWEFpTENKbGJHRndjMlZrSWl3aVpHbHNZWFJwYjI0aUxDSnpkR0Z5ZEZKbGJtUmxja3h2YjNBaUxDSndjbTlqWlhOelJuSmhiV1VpTENKbWNtRnRaVk4wWVhKMElpd2labkpoYldWVmNHUmhkR1VpTENKbWNtRnRaVkpsYm1SbGNpSXNJbVp5WVcxbFJXNWtJaXdpWm5KaGJXVnpkR0Z0Y0NJc0lrMWhkR2dpTENKdFlYZ2lMQ0p0YVc0aUxDSndjbTlqWlhOeklpd2liMjVHY21GdFpWTjBZWEowSWl3aWMyTm9aV1IxYkdVaUxDSnZia1p5WVcxbFZYQmtZWFJsSWl3aWIyNUdjbUZ0WlZKbGJtUmxjaUlzSW05dVJuSmhiV1ZGYm1RaUxDSmpZVzVqWld4UGJrWnlZVzFsVTNSaGNuUWlMQ0pqWVc1alpXd2lMQ0pqWVc1alpXeFBia1p5WVcxbFZYQmtZWFJsSWl3aVkyRnVZMlZzVDI1R2NtRnRaVkpsYm1SbGNpSXNJbU5oYm1ObGJFOXVSbkpoYldWRmJtUWlMQ0owYVcxbFUybHVZMlZNWVhOMFJuSmhiV1VpTENKamRYSnlaVzUwUm5KaGJXVlVhVzFsYzNSaGJYQWlYU3dpYldGd2NHbHVaM01pT2lJN096czdPMEZCUVVFN096czdRVUZEUVRzN096dEJRVU5CT3pzN08wRkJSVUVzU1VGQlNVRXNjMEpCUVhOQ0xFdEJRVEZDT3p0QlFVVkJPenM3TzBGQlNVRXNTVUZCVFVNc1kwRkJZeXhGUVVGd1FqczdRVUZGUVRzN096dEJRVWxCTEVsQlFVbERMRzlDUVVGdlFpeDVRa0ZCZUVJN08wRkJSVUVzU1VGQlNVTXNWVUZCVlN4RFFVRmtPenRCUVVWQk96czdPenRCUVV0QkxFbEJRVWxETEZkQlFWY3NRMEZCWmpzN1FVRkZRU3hUUVVGVFF5eGxRVUZVTEVkQlFUSkNPMEZCUTNwQ0xFMUJRVWtzUTBGQlEwd3NiVUpCUVV3c1JVRkJNRUk3UVVGRGVFSkJMREJDUVVGelFpeEpRVUYwUWp0QlFVTkJMQ3RDUVVGWlRTeFpRVUZhTzBGQlEwUTdRVUZEUmpzN1FVRkZSQ3hKUVVGTlF5eGhRVUZoTEdkRFFVRnBRa1lzWlVGQmFrSXNRMEZCYmtJN1FVRkRRU3hKUVVGTlJ5eGpRVUZqTEdkRFFVRnBRa2dzWlVGQmFrSXNRMEZCY0VJN1FVRkRRU3hKUVVGTlNTeGpRVUZqTEdkRFFVRnBRa29zWlVGQmFrSXNRMEZCY0VJN1FVRkRRU3hKUVVGTlN5eFhRVUZYTEdkRFFVRnBRa3dzWlVGQmFrSXNRMEZCYWtJN08wRkJSVUVzVTBGQlUwTXNXVUZCVkN4RFFVRnpRa3NzVlVGQmRFSXNSVUZCYTBNN1FVRkRhRU5ZTEhkQ1FVRnpRaXhMUVVGMFFqdEJRVU5CUnl4WlFVRlZVeXhMUVVGTFF5eEhRVUZNTEVOQlFWTkVMRXRCUVV0RkxFZEJRVXdzUTBGQlUwZ3NZVUZCWVZRc2FVSkJRWFJDTEVWQlFYbERSQ3hYUVVGNlF5eERRVUZVTEVWQlFXZEZMRU5CUVdoRkxFbEJRWEZGUnl4UlFVRXZSVHRCUVVOQlJpeHpRa0ZCYjBKVExGVkJRWEJDT3p0QlFVVkJTaXhoUVVGWFVTeFBRVUZZTzBGQlEwRlFMR05CUVZsUExFOUJRVm83UVVGRFFVNHNZMEZCV1Uwc1QwRkJXanRCUVVOQlRDeFhRVUZUU3l4UFFVRlVPMEZCUTBRN08wRkJSVTBzU1VGQlRVTXNjME5CUVdWVUxGZEJRVmRWTEZGQlFXaERPMEZCUTBFc1NVRkJUVU1zZDBOQlFXZENWaXhaUVVGWlV5eFJRVUZzUXp0QlFVTkJMRWxCUVUxRkxIZERRVUZuUWxZc1dVRkJXVkVzVVVGQmJFTTdRVUZEUVN4SlFVRk5SeXhyUTBGQllWWXNVMEZCVTA4c1VVRkJOVUk3UVVGRFFTeEpRVUZOU1N4clJFRkJjVUprTEZkQlFWZGxMRTFCUVhSRE8wRkJRMEVzU1VGQlRVTXNiMFJCUVhOQ1ppeFpRVUZaWXl4TlFVRjRRenRCUVVOQkxFbEJRVTFGTEc5RVFVRnpRbVlzV1VGQldXRXNUVUZCZUVNN1FVRkRRU3hKUVVGTlJ5dzRRMEZCYlVKbUxGTkJRVk5aTEUxQlFXeERPenRCUVVWQkxFbEJRVTFKTEd0RVFVRnhRanRCUVVGQkxGTkJRVTEyUWl4UFFVRk9PMEZCUVVFc1EwRkJNMEk3UVVGRFFTeEpRVUZOZDBJc2QwUkJRWGRDTzBGQlFVRXNVMEZCVFhwQ0xHbENRVUZPTzBGQlFVRXNRMEZCT1VJaUxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoZEhSd1pYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdiMjVPWlhoMFJuSmhiV1VnWm5KdmJTQW5MaTl2YmkxdVpYaDBMV1p5WVcxbEp6dGNibWx0Y0c5eWRDQmpjbVZoZEdWU1pXNWtaWEpUZEdWd0lHWnliMjBnSnk0dlkzSmxZWFJsTFhKbGJtUmxjaTF6ZEdWd0p6dGNibWx0Y0c5eWRDQjdJR04xY25KbGJuUlVhVzFsSUgwZ1puSnZiU0FuTGk0dmFXNWpMM1YwYVd4ekp6dGNibHh1YkdWMElIZHBiR3hTWlc1a1pYSk9aWGgwUm5KaGJXVWdQU0JtWVd4elpUdGNibHh1THlvcVhHNGdLaUJOWVhocGJYVnRJSEJsY20xcGRIUmxaQ0J0Y3lCemFXNWpaU0JzWVhOMElHWnlZVzFsWEc0Z0tpQkFkSGx3WlNCN1RuVnRZbVZ5ZlZ4dUlDb3ZYRzVqYjI1emRDQk5RVmhmUlV4QlVGTkZSQ0E5SURJd08xeHVYRzR2S2lwY2JpQXFJRU4xY25KbGJuUWdabkpoYldWemRHRnRjRnh1SUNvZ1FIUjVjR1VnZTA1MWJXSmxjbjFjYmlBcUwxeHViR1YwSUdOMWNuSmxiblJHY21GdFpYTjBZVzF3SUQwZ1kzVnljbVZ1ZEZScGJXVW9LVHRjYmx4dWJHVjBJR1ZzWVhCelpXUWdQU0F3TzF4dVhHNHZLaXBjYmlBcUlFWmhZM1J2Y2lCMGJ5QnRkV3gwYVhCc2VTQmdaV3hoY0hObFpHQWdZbmtnTFNCY2JpQXFJREF1TlNCM2IzVnNaQ0JpWlNCemJHOTNJRzF2ZEdsdmJpd2dNaUIzYjNWc1pDQmlaU0JtWVhOMFhHNGdLaUJBZEhsd1pTQjdUblZ0WW1WeWZWeHVJQ292WEc1c1pYUWdaR2xzWVhScGIyNGdQU0F4TzF4dVhHNW1kVzVqZEdsdmJpQnpkR0Z5ZEZKbGJtUmxja3h2YjNBb0tTQjdYRzRnSUdsbUlDZ2hkMmxzYkZKbGJtUmxjazVsZUhSR2NtRnRaU2tnZTF4dUlDQWdJSGRwYkd4U1pXNWtaWEpPWlhoMFJuSmhiV1VnUFNCMGNuVmxPMXh1SUNBZ0lHOXVUbVY0ZEVaeVlXMWxLSEJ5YjJObGMzTkdjbUZ0WlNrN1hHNGdJSDFjYm4xY2JseHVZMjl1YzNRZ1puSmhiV1ZUZEdGeWRDQTlJR055WldGMFpWSmxibVJsY2xOMFpYQW9jM1JoY25SU1pXNWtaWEpNYjI5d0tUdGNibU52Ym5OMElHWnlZVzFsVlhCa1lYUmxJRDBnWTNKbFlYUmxVbVZ1WkdWeVUzUmxjQ2h6ZEdGeWRGSmxibVJsY2t4dmIzQXBPMXh1WTI5dWMzUWdabkpoYldWU1pXNWtaWElnUFNCamNtVmhkR1ZTWlc1a1pYSlRkR1Z3S0hOMFlYSjBVbVZ1WkdWeVRHOXZjQ2s3WEc1amIyNXpkQ0JtY21GdFpVVnVaQ0E5SUdOeVpXRjBaVkpsYm1SbGNsTjBaWEFvYzNSaGNuUlNaVzVrWlhKTWIyOXdLVHRjYmx4dVpuVnVZM1JwYjI0Z2NISnZZMlZ6YzBaeVlXMWxLR1p5WVcxbGMzUmhiWEFwSUh0Y2JpQWdkMmxzYkZKbGJtUmxjazVsZUhSR2NtRnRaU0E5SUdaaGJITmxPMXh1SUNCbGJHRndjMlZrSUQwZ1RXRjBhQzV0WVhnb1RXRjBhQzV0YVc0b1puSmhiV1Z6ZEdGdGNDQXRJR04xY25KbGJuUkdjbUZ0WlhOMFlXMXdMQ0JOUVZoZlJVeEJVRk5GUkNrc0lERXBJQ29nWkdsc1lYUnBiMjQ3WEc0Z0lHTjFjbkpsYm5SR2NtRnRaWE4wWVcxd0lEMGdabkpoYldWemRHRnRjRHRjYmx4dUlDQm1jbUZ0WlZOMFlYSjBMbkJ5YjJObGMzTW9LVHRjYmlBZ1puSmhiV1ZWY0dSaGRHVXVjSEp2WTJWemN5Z3BPMXh1SUNCbWNtRnRaVkpsYm1SbGNpNXdjbTlqWlhOektDazdYRzRnSUdaeVlXMWxSVzVrTG5CeWIyTmxjM01vS1R0Y2JuMWNibHh1Wlhod2IzSjBJR052Ym5OMElHOXVSbkpoYldWVGRHRnlkQ0E5SUdaeVlXMWxVM1JoY25RdWMyTm9aV1IxYkdVN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnYjI1R2NtRnRaVlZ3WkdGMFpTQTlJR1p5WVcxbFZYQmtZWFJsTG5OamFHVmtkV3hsTzF4dVpYaHdiM0owSUdOdmJuTjBJRzl1Um5KaGJXVlNaVzVrWlhJZ1BTQm1jbUZ0WlZKbGJtUmxjaTV6WTJobFpIVnNaVHRjYm1WNGNHOXlkQ0JqYjI1emRDQnZia1p5WVcxbFJXNWtJRDBnWm5KaGJXVkZibVF1YzJOb1pXUjFiR1U3WEc1bGVIQnZjblFnWTI5dWMzUWdZMkZ1WTJWc1QyNUdjbUZ0WlZOMFlYSjBJRDBnWm5KaGJXVlRkR0Z5ZEM1allXNWpaV3c3WEc1bGVIQnZjblFnWTI5dWMzUWdZMkZ1WTJWc1QyNUdjbUZ0WlZWd1pHRjBaU0E5SUdaeVlXMWxWWEJrWVhSbExtTmhibU5sYkR0Y2JtVjRjRzl5ZENCamIyNXpkQ0JqWVc1alpXeFBia1p5WVcxbFVtVnVaR1Z5SUQwZ1puSmhiV1ZTWlc1a1pYSXVZMkZ1WTJWc08xeHVaWGh3YjNKMElHTnZibk4wSUdOaGJtTmxiRTl1Um5KaGJXVkZibVFnUFNCbWNtRnRaVVZ1WkM1allXNWpaV3c3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0IwYVcxbFUybHVZMlZNWVhOMFJuSmhiV1VnUFNBb0tTQTlQaUJsYkdGd2MyVmtPMXh1Wlhod2IzSjBJR052Ym5OMElHTjFjbkpsYm5SR2NtRnRaVlJwYldWemRHRnRjQ0E5SUNncElEMCtJR04xY25KbGJuUkdjbUZ0WlhOMFlXMXdPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvZnJhbWVzeW5jL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9mcmFtZXN5bmMgPSByZXF1aXJlKCcuLi9mcmFtZXN5bmMnKTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIEFjdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQWN0aW9uKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFjdGlvbik7XG5cbiAgICB0aGlzLnVwZGF0ZSA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLnByb3BzID0gX2V4dGVuZHMoe30sIHRoaXMuY29uc3RydWN0b3IuZGVmYXVsdFByb3BzKTtcblxuICAgIHRoaXMuc2V0UHJvcHMocHJvcHMpO1xuXG4gICAgdGhpcy5jdXJyZW50ID0gcHJvcHMuY3VycmVudCB8fCAwO1xuICB9XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBvblN0YXJ0ID0gX3Byb3BzLm9uU3RhcnQsXG4gICAgICAgIF9vblN0YXJ0ID0gX3Byb3BzLl9vblN0YXJ0LFxuICAgICAgICBwYXNzaXZlID0gX3Byb3BzLnBhc3NpdmU7XG5cblxuICAgIGlmICghcGFzc2l2ZSkge1xuICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAoMCwgX2ZyYW1lc3luYy5vbkZyYW1lVXBkYXRlKSh0aGlzLnVwZGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub25TdGFydCkgdGhpcy5vblN0YXJ0KCk7XG4gICAgaWYgKG9uU3RhcnQpIG9uU3RhcnQodGhpcyk7XG4gICAgaWYgKF9vblN0YXJ0KSBfb25TdGFydCh0aGlzKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICBvblN0b3AgPSBfcHJvcHMyLm9uU3RvcCxcbiAgICAgICAgX29uU3RvcCA9IF9wcm9wczIuX29uU3RvcCxcbiAgICAgICAgcGFzc2l2ZSA9IF9wcm9wczIucGFzc2l2ZTtcblxuXG4gICAgaWYgKCFwYXNzaXZlKSB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAoMCwgX2ZyYW1lc3luYy5jYW5jZWxPbkZyYW1lVXBkYXRlKSh0aGlzLnVwZGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub25TdG9wKSB0aGlzLm9uU3RvcCgpO1xuICAgIGlmIChvblN0b3ApIG9uU3RvcCh0aGlzKTtcbiAgICBpZiAoX29uU3RvcCkgX29uU3RvcCh0aGlzKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUuY29tcGxldGUgPSBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICB2YXIgX3Byb3BzMyA9IHRoaXMucHJvcHMsXG4gICAgICAgIG9uQ29tcGxldGUgPSBfcHJvcHMzLm9uQ29tcGxldGUsXG4gICAgICAgIF9vbkNvbXBsZXRlID0gX3Byb3BzMy5fb25Db21wbGV0ZTtcblxuXG4gICAgaWYgKHRoaXMub25Db21wbGV0ZSkgdGhpcy5vbkNvbXBsZXRlKCk7XG4gICAgaWYgKG9uQ29tcGxldGUpIG9uQ29tcGxldGUodGhpcyk7XG4gICAgaWYgKF9vbkNvbXBsZXRlKSBfb25Db21wbGV0ZSh0aGlzKTtcblxuICAgIHRoaXMuc3RvcCgpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgdGhpcy5sYXN0VXBkYXRlZCA9ICgwLCBfZnJhbWVzeW5jLnRpbWVTaW5jZUxhc3RGcmFtZSkoKTtcbiAgICB0aGlzLnByZXYgPSB0aGlzLmN1cnJlbnQ7XG5cbiAgICB2YXIgX3Byb3BzNCA9IHRoaXMucHJvcHMsXG4gICAgICAgIG9uVXBkYXRlID0gX3Byb3BzNC5vblVwZGF0ZSxcbiAgICAgICAgcGFzc2l2ZSA9IF9wcm9wczQucGFzc2l2ZTtcblxuXG4gICAgaWYgKHRoaXMub25VcGRhdGUpIHtcbiAgICAgIHRoaXMuY3VycmVudCA9IHRoaXMub25VcGRhdGUoKTtcbiAgICB9XG5cbiAgICBpZiAob25VcGRhdGUpIG9uVXBkYXRlKHRoaXMuY3VycmVudCwgdGhpcyk7XG4gICAgdGhpcy5maXJlTGlzdGVuZXJzKCk7XG5cbiAgICBpZiAoIXBhc3NpdmUgJiYgdGhpcy5pc0FjdGl2ZSkge1xuICAgICAgKDAsIF9mcmFtZXN5bmMub25GcmFtZVVwZGF0ZSkodGhpcy51cGRhdGUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzQWN0aW9uQ29tcGxldGUgJiYgdGhpcy5pc0FjdGlvbkNvbXBsZXRlKCkpIHtcbiAgICAgIHRoaXMuY29tcGxldGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLnNldFByb3BzID0gZnVuY3Rpb24gc2V0UHJvcHMocHJvcHMpIHtcbiAgICB0aGlzLnByb3BzID0gX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHByb3BzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50O1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUuZ2V0UHJvcCA9IGZ1bmN0aW9uIGdldFByb3Aoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHNba2V5XTtcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLmdldFZlbG9jaXR5ID0gZnVuY3Rpb24gZ2V0VmVsb2NpdHkoKSB7XG4gICAgcmV0dXJuICgwLCBfY2FsYy5zcGVlZFBlclNlY29uZCkodGhpcy5wcmV2IC0gdGhpcy5jdXJyZW50LCB0aGlzLmxhc3RVcGRhdGVkKTtcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24gYWRkTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzIHx8IFtdO1xuICAgIHRoaXMubnVtTGlzdGVuZXJzID0gdGhpcy5udW1MaXN0ZW5lcnMgfHwgMDtcbiAgICBpZiAodGhpcy5saXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcikgPT09IC0xKSB7XG4gICAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICAgIHRoaXMubnVtTGlzdGVuZXJzKys7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgIHZhciBsaXN0ZW5lckluZGV4ID0gdGhpcy5saXN0ZW5lcnMgPyB0aGlzLmxpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKSA6IC0xO1xuICAgIGlmIChsaXN0ZW5lckluZGV4ICE9PSAtMSkge1xuICAgICAgdGhpcy5udW1MaXN0ZW5lcnMtLTtcbiAgICAgIHRoaXMubGlzdGVuZXJzLnNwbGljZShsaXN0ZW5lckluZGV4LCAxKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5maXJlTGlzdGVuZXJzID0gZnVuY3Rpb24gZmlyZUxpc3RlbmVycygpIHtcbiAgICB2YXIgY3VycmVudCA9IHRoaXMuZ2V0KCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm51bUxpc3RlbmVyczsgaSsrKSB7XG4gICAgICB0aGlzLmxpc3RlbmVyc1tpXShjdXJyZW50LCB0aGlzKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgcmV0dXJuIEFjdGlvbjtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQWN0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMmx1WkdWNExtcHpJbDBzSW01aGJXVnpJanBiSWtGamRHbHZiaUlzSW5CeWIzQnpJaXdpZFhCa1lYUmxJaXdpWW1sdVpDSXNJbU52Ym5OMGNuVmpkRzl5SWl3aVpHVm1ZWFZzZEZCeWIzQnpJaXdpYzJWMFVISnZjSE1pTENKamRYSnlaVzUwSWl3aWMzUmhjblFpTENKdmJsTjBZWEowSWl3aVgyOXVVM1JoY25RaUxDSndZWE56YVhabElpd2lhWE5CWTNScGRtVWlMQ0p6ZEc5d0lpd2liMjVUZEc5d0lpd2lYMjl1VTNSdmNDSXNJbU52YlhCc1pYUmxJaXdpYjI1RGIyMXdiR1YwWlNJc0lsOXZia052YlhCc1pYUmxJaXdpYkdGemRGVndaR0YwWldRaUxDSndjbVYySWl3aWIyNVZjR1JoZEdVaUxDSm1hWEpsVEdsemRHVnVaWEp6SWl3aWFYTkJZM1JwYjI1RGIyMXdiR1YwWlNJc0ltZGxkQ0lzSW1kbGRGQnliM0FpTENKclpYa2lMQ0puWlhSV1pXeHZZMmwwZVNJc0ltRmtaRXhwYzNSbGJtVnlJaXdpYkdsemRHVnVaWElpTENKc2FYTjBaVzVsY25NaUxDSnVkVzFNYVhOMFpXNWxjbk1pTENKcGJtUmxlRTltSWl3aWNIVnphQ0lzSW5KbGJXOTJaVXhwYzNSbGJtVnlJaXdpYkdsemRHVnVaWEpKYm1SbGVDSXNJbk53YkdsalpTSXNJbWtpWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3p0QlFVRkJPenRCUVVOQk96czdPMGxCUlUxQkxFMDdRVUZEU2l4clFrRkJXVU1zUzBGQldpeEZRVUZ0UWp0QlFVRkJPenRCUVVOcVFpeFRRVUZMUXl4TlFVRk1MRWRCUVdNc1MwRkJTMEVzVFVGQlRDeERRVUZaUXl4SlFVRmFMRU5CUVdsQ0xFbEJRV3BDTEVOQlFXUTdPMEZCUlVFc1UwRkJTMFlzUzBGQlRDeG5Ra0ZEU3l4TFFVRkxSeXhYUVVGTUxFTkJRV2xDUXl4WlFVUjBRanM3UVVGSlFTeFRRVUZMUXl4UlFVRk1MRU5CUVdOTUxFdEJRV1E3TzBGQlJVRXNVMEZCUzAwc1QwRkJUQ3hIUVVGbFRpeE5RVUZOVFN4UFFVRk9MRWxCUVdsQ0xFTkJRV2hETzBGQlEwUTdPMjFDUVVWRVF5eExMRzlDUVVGUk8wRkJRVUVzYVVKQlEybERMRXRCUVV0UUxFdEJSSFJETzBGQlFVRXNVVUZEUlZFc1QwRkVSaXhWUVVORlFTeFBRVVJHTzBGQlFVRXNVVUZEVjBNc1VVRkVXQ3hWUVVOWFFTeFJRVVJZTzBGQlFVRXNVVUZEY1VKRExFOUJSSEpDTEZWQlEzRkNRU3hQUVVSeVFqczdPMEZCUjA0c1VVRkJTU3hEUVVGRFFTeFBRVUZNTEVWQlFXTTdRVUZEV2l4WFFVRkxReXhSUVVGTUxFZEJRV2RDTEVsQlFXaENPMEZCUTBFc2IwTkJRV01zUzBGQlMxWXNUVUZCYmtJN1FVRkRSRHM3UVVGRlJDeFJRVUZKTEV0QlFVdFBMRTlCUVZRc1JVRkJhMElzUzBGQlMwRXNUMEZCVER0QlFVTnNRaXhSUVVGSlFTeFBRVUZLTEVWQlFXRkJMRkZCUVZFc1NVRkJVanRCUVVOaUxGRkJRVWxETEZGQlFVb3NSVUZCWTBFc1UwRkJVeXhKUVVGVU96dEJRVVZrTEZkQlFVOHNTVUZCVUR0QlFVTkVMRWM3TzIxQ1FVVkVSeXhKTEcxQ1FVRlBPMEZCUVVFc2EwSkJRMmRETEV0QlFVdGFMRXRCUkhKRE8wRkJRVUVzVVVGRFIyRXNUVUZFU0N4WFFVTkhRU3hOUVVSSU8wRkJRVUVzVVVGRFYwTXNUMEZFV0N4WFFVTlhRU3hQUVVSWU8wRkJRVUVzVVVGRGIwSktMRTlCUkhCQ0xGZEJRMjlDUVN4UFFVUndRanM3TzBGQlIwd3NVVUZCU1N4RFFVRkRRU3hQUVVGTUxFVkJRV003UVVGRFdpeFhRVUZMUXl4UlFVRk1MRWRCUVdkQ0xFdEJRV2hDTzBGQlEwRXNNRU5CUVc5Q0xFdEJRVXRXTEUxQlFYcENPMEZCUTBRN08wRkJSVVFzVVVGQlNTeExRVUZMV1N4TlFVRlVMRVZCUVdsQ0xFdEJRVXRCTEUxQlFVdzdRVUZEYWtJc1VVRkJTVUVzVFVGQlNpeEZRVUZaUVN4UFFVRlBMRWxCUVZBN1FVRkRXaXhSUVVGSlF5eFBRVUZLTEVWQlFXRkJMRkZCUVZFc1NVRkJVanM3UVVGRllpeFhRVUZQTEVsQlFWQTdRVUZEUkN4SE96dHRRa0ZGUkVNc1VTeDFRa0ZCVnp0QlFVRkJMR3RDUVVNeVFpeExRVUZMWml4TFFVUm9RenRCUVVGQkxGRkJRMFJuUWl4VlFVUkRMRmRCUTBSQkxGVkJSRU03UVVGQlFTeFJRVU5YUXl4WFFVUllMRmRCUTFkQkxGZEJSRmc3T3p0QlFVZFVMRkZCUVVrc1MwRkJTMFFzVlVGQlZDeEZRVUZ4UWl4TFFVRkxRU3hWUVVGTU8wRkJRM0pDTEZGQlFVbEJMRlZCUVVvc1JVRkJaMEpCTEZkQlFWY3NTVUZCV0R0QlFVTm9RaXhSUVVGSlF5eFhRVUZLTEVWQlFXbENRU3haUVVGWkxFbEJRVm83TzBGQlJXcENMRk5CUVV0TUxFbEJRVXc3TzBGQlJVRXNWMEZCVHl4SlFVRlFPMEZCUTBRc1J6czdiVUpCUlVSWUxFMHNjVUpCUVZNN1FVRkRVQ3hUUVVGTGFVSXNWMEZCVEN4SFFVRnRRaXh2UTBGQmJrSTdRVUZEUVN4VFFVRkxReXhKUVVGTUxFZEJRVmtzUzBGQlMySXNUMEZCYWtJN08wRkJSazhzYTBKQlNYVkNMRXRCUVV0T0xFdEJTalZDTzBGQlFVRXNVVUZKUTI5Q0xGRkJTa1FzVjBGSlEwRXNVVUZLUkR0QlFVRkJMRkZCU1ZkV0xFOUJTbGdzVjBGSlYwRXNUMEZLV0RzN08wRkJUVkFzVVVGQlNTeExRVUZMVlN4UlFVRlVMRVZCUVcxQ08wRkJRMnBDTEZkQlFVdGtMRTlCUVV3c1IwRkJaU3hMUVVGTFl5eFJRVUZNTEVWQlFXWTdRVUZEUkRzN1FVRkZSQ3hSUVVGSlFTeFJRVUZLTEVWQlFXTkJMRk5CUVZNc1MwRkJTMlFzVDBGQlpDeEZRVUYxUWl4SlFVRjJRanRCUVVOa0xGTkJRVXRsTEdGQlFVdzdPMEZCUlVFc1VVRkJTU3hEUVVGRFdDeFBRVUZFTEVsQlFWa3NTMEZCUzBNc1VVRkJja0lzUlVGQkswSTdRVUZETjBJc2IwTkJRV01zUzBGQlMxWXNUVUZCYmtJN1FVRkRSRHM3UVVGRlJDeFJRVUZKTEV0QlFVdHhRaXhuUWtGQlRDeEpRVUY1UWl4TFFVRkxRU3huUWtGQlRDeEZRVUUzUWl4RlFVRnpSRHRCUVVOd1JDeFhRVUZMVUN4UlFVRk1PMEZCUTBRN08wRkJSVVFzVjBGQlR5eEpRVUZRTzBGQlEwUXNSenM3YlVKQlJVUldMRkVzY1VKQlFWTk1MRXNzUlVGQlR6dEJRVU5rTEZOQlFVdEJMRXRCUVV3c1owSkJRMHNzUzBGQlMwRXNTMEZFVml4RlFVVkxRU3hMUVVaTU8wRkJTVUVzVjBGQlR5eEpRVUZRTzBGQlEwUXNSenM3YlVKQlJVUjFRaXhITEd0Q1FVRk5PMEZCUTBvc1YwRkJUeXhMUVVGTGFrSXNUMEZCV2p0QlFVTkVMRWM3TzIxQ1FVVkVhMElzVHl4dlFrRkJVVU1zUnl4RlFVRkxPMEZCUTFnc1YwRkJUeXhMUVVGTGVrSXNTMEZCVEN4RFFVRlhlVUlzUjBGQldDeERRVUZRTzBGQlEwUXNSenM3YlVKQlJVUkRMRmNzTUVKQlFXTTdRVUZEV2l4WFFVRlBMREJDUVVGbExFdEJRVXRRTEVsQlFVd3NSMEZCV1N4TFFVRkxZaXhQUVVGb1F5eEZRVUY1UXl4TFFVRkxXU3hYUVVFNVF5eERRVUZRTzBGQlEwUXNSenM3YlVKQlJVUlRMRmNzZDBKQlFWbERMRkVzUlVGQlZUdEJRVU53UWl4VFFVRkxReXhUUVVGTUxFZEJRV2xDTEV0QlFVdEJMRk5CUVV3c1NVRkJhMElzUlVGQmJrTTdRVUZEUVN4VFFVRkxReXhaUVVGTUxFZEJRVzlDTEV0QlFVdEJMRmxCUVV3c1NVRkJjVUlzUTBGQmVrTTdRVUZEUVN4UlFVRkpMRXRCUVV0RUxGTkJRVXdzUTBGQlpVVXNUMEZCWml4RFFVRjFRa2dzVVVGQmRrSXNUVUZCY1VNc1EwRkJReXhEUVVFeFF5eEZRVUUyUXp0QlFVTXpReXhYUVVGTFF5eFRRVUZNTEVOQlFXVkhMRWxCUVdZc1EwRkJiMEpLTEZGQlFYQkNPMEZCUTBFc1YwRkJTMFVzV1VGQlREdEJRVU5FTzBGQlEwUXNWMEZCVHl4SlFVRlFPMEZCUTBRc1J6czdiVUpCUlVSSExHTXNNa0pCUVdWTUxGRXNSVUZCVlR0QlFVTjJRaXhSUVVGTlRTeG5Ra0ZCYVVJc1MwRkJTMHdzVTBGQlRpeEhRVUZ0UWl4TFFVRkxRU3hUUVVGTUxFTkJRV1ZGTEU5QlFXWXNRMEZCZFVKSUxGRkJRWFpDTEVOQlFXNUNMRWRCUVhORUxFTkJRVU1zUTBGQk4wVTdRVUZEUVN4UlFVRkpUU3hyUWtGQmEwSXNRMEZCUXl4RFFVRjJRaXhGUVVFd1FqdEJRVU40UWl4WFFVRkxTaXhaUVVGTU8wRkJRMEVzVjBGQlMwUXNVMEZCVEN4RFFVRmxUU3hOUVVGbUxFTkJRWE5DUkN4aFFVRjBRaXhGUVVGeFF5eERRVUZ5UXp0QlFVTkVPMEZCUTBRc1YwRkJUeXhKUVVGUU8wRkJRMFFzUnpzN2JVSkJSVVJpTEdFc05FSkJRV2RDTzBGQlEyUXNVVUZCVFdZc1ZVRkJWU3hMUVVGTGFVSXNSMEZCVEN4RlFVRm9RanRCUVVOQkxGTkJRVXNzU1VGQlNXRXNTVUZCU1N4RFFVRmlMRVZCUVdkQ1FTeEpRVUZKTEV0QlFVdE9MRmxCUVhwQ0xFVkJRWFZEVFN4SFFVRjJReXhGUVVFMFF6dEJRVU14UXl4WFFVRkxVQ3hUUVVGTUxFTkJRV1ZQTEVOQlFXWXNSVUZCYTBJNVFpeFBRVUZzUWl4RlFVRXlRaXhKUVVFelFqdEJRVU5FTzBGQlEwUXNWMEZCVHl4SlFVRlFPMEZCUTBRc1J6czdPenM3YTBKQlIxbFFMRTBpTENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2V5QnZia1p5WVcxbFZYQmtZWFJsTENCallXNWpaV3hQYmtaeVlXMWxWWEJrWVhSbExDQjBhVzFsVTJsdVkyVk1ZWE4wUm5KaGJXVWdmU0JtY205dElDY3VMaTltY21GdFpYTjVibU1uTzF4dWFXMXdiM0owSUhzZ2MzQmxaV1JRWlhKVFpXTnZibVFnZlNCbWNtOXRJQ2N1TGk5cGJtTXZZMkZzWXljN1hHNWNibU5zWVhOeklFRmpkR2x2YmlCN1hHNGdJR052Ym5OMGNuVmpkRzl5S0hCeWIzQnpLU0I3WEc0Z0lDQWdkR2hwY3k1MWNHUmhkR1VnUFNCMGFHbHpMblZ3WkdGMFpTNWlhVzVrS0hSb2FYTXBPMXh1WEc0Z0lDQWdkR2hwY3k1d2NtOXdjeUE5SUh0Y2JpQWdJQ0FnSUM0dUxuUm9hWE11WTI5dWMzUnlkV04wYjNJdVpHVm1ZWFZzZEZCeWIzQnpYRzRnSUNBZ2ZUdGNibHh1SUNBZ0lIUm9hWE11YzJWMFVISnZjSE1vY0hKdmNITXBPMXh1WEc0Z0lDQWdkR2hwY3k1amRYSnlaVzUwSUQwZ2NISnZjSE11WTNWeWNtVnVkQ0I4ZkNBd08xeHVJQ0I5WEc1Y2JpQWdjM1JoY25Rb0tTQjdYRzRnSUNBZ1kyOXVjM1FnZXlCdmJsTjBZWEowTENCZmIyNVRkR0Z5ZEN3Z2NHRnpjMmwyWlNCOUlEMGdkR2hwY3k1d2NtOXdjenRjYmx4dUlDQWdJR2xtSUNnaGNHRnpjMmwyWlNrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTVwYzBGamRHbDJaU0E5SUhSeWRXVTdYRzRnSUNBZ0lDQnZia1p5WVcxbFZYQmtZWFJsS0hSb2FYTXVkWEJrWVhSbEtUdGNiaUFnSUNCOVhHNWNiaUFnSUNCcFppQW9kR2hwY3k1dmJsTjBZWEowS1NCMGFHbHpMbTl1VTNSaGNuUW9LVHRjYmlBZ0lDQnBaaUFvYjI1VGRHRnlkQ2tnYjI1VGRHRnlkQ2gwYUdsektUdGNiaUFnSUNCcFppQW9YMjl1VTNSaGNuUXBJRjl2YmxOMFlYSjBLSFJvYVhNcE8xeHVYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUgxY2JseHVJQ0J6ZEc5d0tDa2dlMXh1SUNBZ0lHTnZibk4wSUhzZ2IyNVRkRzl3TENCZmIyNVRkRzl3TENCd1lYTnphWFpsSUgwZ1BTQjBhR2x6TG5CeWIzQnpPMXh1WEc0Z0lDQWdhV1lnS0NGd1lYTnphWFpsS1NCN1hHNGdJQ0FnSUNCMGFHbHpMbWx6UVdOMGFYWmxJRDBnWm1Gc2MyVTdYRzRnSUNBZ0lDQmpZVzVqWld4UGJrWnlZVzFsVlhCa1lYUmxLSFJvYVhNdWRYQmtZWFJsS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JwWmlBb2RHaHBjeTV2YmxOMGIzQXBJSFJvYVhNdWIyNVRkRzl3S0NrN1hHNGdJQ0FnYVdZZ0tHOXVVM1J2Y0NrZ2IyNVRkRzl3S0hSb2FYTXBPMXh1SUNBZ0lHbG1JQ2hmYjI1VGRHOXdLU0JmYjI1VGRHOXdLSFJvYVhNcE8xeHVYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUgxY2JseHVJQ0JqYjIxd2JHVjBaU2dwSUh0Y2JpQWdJQ0JqYjI1emRDQjdJRzl1UTI5dGNHeGxkR1VzSUY5dmJrTnZiWEJzWlhSbElIMGdQU0IwYUdsekxuQnliM0J6TzF4dVhHNGdJQ0FnYVdZZ0tIUm9hWE11YjI1RGIyMXdiR1YwWlNrZ2RHaHBjeTV2YmtOdmJYQnNaWFJsS0NrN1hHNGdJQ0FnYVdZZ0tHOXVRMjl0Y0d4bGRHVXBJRzl1UTI5dGNHeGxkR1VvZEdocGN5azdYRzRnSUNBZ2FXWWdLRjl2YmtOdmJYQnNaWFJsS1NCZmIyNURiMjF3YkdWMFpTaDBhR2x6S1R0Y2JseHVJQ0FnSUhSb2FYTXVjM1J2Y0NncE8xeHVYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUgxY2JseHVJQ0IxY0dSaGRHVW9LU0I3WEc0Z0lDQWdkR2hwY3k1c1lYTjBWWEJrWVhSbFpDQTlJSFJwYldWVGFXNWpaVXhoYzNSR2NtRnRaU2dwTzF4dUlDQWdJSFJvYVhNdWNISmxkaUE5SUhSb2FYTXVZM1Z5Y21WdWREdGNibHh1SUNBZ0lHTnZibk4wSUhzZ2IyNVZjR1JoZEdVc0lIQmhjM05wZG1VZ2ZTQTlJSFJvYVhNdWNISnZjSE03WEc1Y2JpQWdJQ0JwWmlBb2RHaHBjeTV2YmxWd1pHRjBaU2tnZTF4dUlDQWdJQ0FnZEdocGN5NWpkWEp5Wlc1MElEMGdkR2hwY3k1dmJsVndaR0YwWlNncE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUdsbUlDaHZibFZ3WkdGMFpTa2diMjVWY0dSaGRHVW9kR2hwY3k1amRYSnlaVzUwTENCMGFHbHpLVHRjYmlBZ0lDQjBhR2x6TG1acGNtVk1hWE4wWlc1bGNuTW9LVHRjYmx4dUlDQWdJR2xtSUNnaGNHRnpjMmwyWlNBbUppQjBhR2x6TG1selFXTjBhWFpsS1NCN1hHNGdJQ0FnSUNCdmJrWnlZVzFsVlhCa1lYUmxLSFJvYVhNdWRYQmtZWFJsS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JwWmlBb2RHaHBjeTVwYzBGamRHbHZia052YlhCc1pYUmxJQ1ltSUhSb2FYTXVhWE5CWTNScGIyNURiMjF3YkdWMFpTZ3BLU0I3WEc0Z0lDQWdJQ0IwYUdsekxtTnZiWEJzWlhSbEtDazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUgxY2JseHVJQ0J6WlhSUWNtOXdjeWh3Y205d2N5a2dlMXh1SUNBZ0lIUm9hWE11Y0hKdmNITWdQU0I3WEc0Z0lDQWdJQ0F1TGk1MGFHbHpMbkJ5YjNCekxGeHVJQ0FnSUNBZ0xpNHVjSEp2Y0hOY2JpQWdJQ0I5TzF4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQjlYRzVjYmlBZ1oyVjBLQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TG1OMWNuSmxiblE3WEc0Z0lIMWNibHh1SUNCblpYUlFjbTl3S0d0bGVTa2dlMXh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpMbkJ5YjNCelcydGxlVjA3WEc0Z0lIMWNibHh1SUNCblpYUldaV3h2WTJsMGVTZ3BJSHRjYmlBZ0lDQnlaWFIxY200Z2MzQmxaV1JRWlhKVFpXTnZibVFvZEdocGN5NXdjbVYySUMwZ2RHaHBjeTVqZFhKeVpXNTBMQ0IwYUdsekxteGhjM1JWY0dSaGRHVmtLVHRjYmlBZ2ZWeHVYRzRnSUdGa1pFeHBjM1JsYm1WeUtHeHBjM1JsYm1WeUtTQjdYRzRnSUNBZ2RHaHBjeTVzYVhOMFpXNWxjbk1nUFNCMGFHbHpMbXhwYzNSbGJtVnljeUI4ZkNCYlhUdGNiaUFnSUNCMGFHbHpMbTUxYlV4cGMzUmxibVZ5Y3lBOUlIUm9hWE11Ym5WdFRHbHpkR1Z1WlhKeklIeDhJREE3WEc0Z0lDQWdhV1lnS0hSb2FYTXViR2x6ZEdWdVpYSnpMbWx1WkdWNFQyWW9iR2x6ZEdWdVpYSXBJRDA5UFNBdE1Ta2dlMXh1SUNBZ0lDQWdkR2hwY3k1c2FYTjBaVzVsY25NdWNIVnphQ2hzYVhOMFpXNWxjaWs3WEc0Z0lDQWdJQ0IwYUdsekxtNTFiVXhwYzNSbGJtVnljeXNyTzF4dUlDQWdJSDFjYmlBZ0lDQnlaWFIxY200Z2RHaHBjenRjYmlBZ2ZWeHVYRzRnSUhKbGJXOTJaVXhwYzNSbGJtVnlLR3hwYzNSbGJtVnlLU0I3WEc0Z0lDQWdZMjl1YzNRZ2JHbHpkR1Z1WlhKSmJtUmxlQ0E5SUNoMGFHbHpMbXhwYzNSbGJtVnljeWtnUHlCMGFHbHpMbXhwYzNSbGJtVnljeTVwYm1SbGVFOW1LR3hwYzNSbGJtVnlLU0E2SUMweE8xeHVJQ0FnSUdsbUlDaHNhWE4wWlc1bGNrbHVaR1Y0SUNFOVBTQXRNU2tnZTF4dUlDQWdJQ0FnZEdocGN5NXVkVzFNYVhOMFpXNWxjbk10TFR0Y2JpQWdJQ0FnSUhSb2FYTXViR2x6ZEdWdVpYSnpMbk53YkdsalpTaHNhWE4wWlc1bGNrbHVaR1Y0TENBeEtUdGNiaUFnSUNCOVhHNGdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJSDFjYmx4dUlDQm1hWEpsVEdsemRHVnVaWEp6S0NrZ2UxeHVJQ0FnSUdOdmJuTjBJR04xY25KbGJuUWdQU0IwYUdsekxtZGxkQ2dwTzF4dUlDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnZEdocGN5NXVkVzFNYVhOMFpXNWxjbk03SUdrckt5a2dlMXh1SUNBZ0lDQWdkR2hwY3k1c2FYTjBaVzVsY25OYmFWMG9ZM1Z5Y21WdWRDd2dkR2hwY3lrN1hHNGdJQ0FnZlZ4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQjlYRzU5WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUVGamRHbHZianRjYmlKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2ZyYW1lc3luYyA9IHJlcXVpcmUoJy4uL2ZyYW1lc3luYycpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBSZW5kZXJlciA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gUmVuZGVyZXIocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVuZGVyZXIpO1xuXG4gICAgdGhpcy5yZW5kZXIgPSB0aGlzLnJlbmRlci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5wcm9wcyA9IF9leHRlbmRzKHt9LCB0aGlzLmNvbnN0cnVjdG9yLmRlZmF1bHRQcm9wcywgcHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xuICAgIHRoaXMuY2hhbmdlZFZhbHVlcyA9IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjdXJyZW50IHN0YXRlLlxuICAgKiBJZiBga2V5YCBpcyBub3QgZGVmaW5lZCwgcmV0dXJuIGVudGlyZSBjYWNoZWQgc3RhdGUuXG4gICAqIElmIGBrZXlgIGlzIGRlZmluZWQsIHJldHVybiBjYWNoZWQgdmFsdWUgaWYgcHJlc2VudC5cbiAgICogSWYgYGtleWAgaXMgZGVmaW5lZCBhbmQgY2FjaGVkIHZhbHVlIGlzIG5vdCBwcmVzZW50LCByZWFkIGFuZCByZXR1cm4uXG4gICAqIEBwYXJhbSAge3N0cmluZ30gKG9wdGlvbmFsKSBrZXkgb2YgdmFsdWVcbiAgICogQHJldHVybiB7dmFsdWV9XG4gICAqL1xuXG5cbiAgUmVuZGVyZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIGdldChrZXkpIHtcbiAgICBpZiAoa2V5KSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZVtrZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGVba2V5XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlYWQoa2V5KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGU7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBSZWFkIHZhbHVlIGFjY29yZGluZyB0byBgb25SZWFkYFxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IE5hbWUgb2YgcHJvcGVydHkgdG8gcmVhZFxuICAgKiBAcmV0dXJuIHtbdHlwZV19XG4gICAqL1xuXG5cbiAgUmVuZGVyZXIucHJvdG90eXBlLnJlYWQgPSBmdW5jdGlvbiByZWFkKGtleSkge1xuICAgIGlmICh0aGlzLm9uUmVhZCkge1xuICAgICAgcmV0dXJuIHRoaXMub25SZWFkKGtleSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBVcGRhdGUgYHN0YXRlYCB3aXRoIG5ldyB2YWx1ZXMgYW5kIHNjaGVkdWxlIGByZW5kZXJgLlxuICAgKiBAcGFyYW0ge29iamVjdH0gdmFsdWVzXG4gICAqIEBwYXJhbSB7dmFsdWV9IHZhbHVlIHRvc2V0XG4gICAqL1xuXG5cbiAgUmVuZGVyZXIucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIHNldCgpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGFyZ3NbMV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgdmFsdWVzID0gYXJnc1swXTtcbiAgICAgIC8vIFNldCBtdWx0aXBsZSB2YWx1ZXNcblxuICAgICAgZm9yICh2YXIga2V5IGluIHZhbHVlcykge1xuICAgICAgICB0aGlzLnNldFZhbHVlKGtleSwgdmFsdWVzW2tleV0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX2tleTIgPSBhcmdzWzBdLFxuICAgICAgICAgIHZhbHVlID0gYXJnc1sxXTtcblxuICAgICAgdGhpcy5zZXRWYWx1ZShfa2V5MiwgdmFsdWUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmhhc0NoYW5nZWQpIHtcbiAgICAgICgwLCBfZnJhbWVzeW5jLm9uRnJhbWVSZW5kZXIpKHRoaXMucmVuZGVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvLyA+IFdpbGV5IC0gNiBpbiB0aGUgTW9ybmluZ1xuICAvKipcbiAgICogU2V0IGEgc2luZ2xlIHZhbHVlXG4gICAqIElmIGEgc3RyaW5nIG9yIG51bWJlciwgc2V0IGRpcmVjdGx5LlxuICAgKiBJZiBhbiBvYmplY3Qgb3IgYXJyYXksIGNyZWF0ZSBuZXcgb2JqZWN0IG9yIGFycmF5XG4gICAqIGlmIGl0IGRvZXNuJ3QgYWxyZWFkeSBleGlzdC4gVGhlbiBzaGFsbG93IGNvbXBhcmVcbiAgICogdG8gc2V0IGFuZCBjb21wYXJlIGluZGl2aWR1YWwgdmFsdWVzLlxuICAgKiBPbmUgb2YgdGhlIGNsZWFyZXIgZHJhd2JhY2tzIGFuZCBhbm5veWFuY2VzIHdpdGhcbiAgICogdXNpbmcgbXV0YWJsZSBpbnN0ZWFkIG9mIGltbXV0YWJsZSBzdGF0ZXMuXG4gICAqIEBwYXJhbSB7W3R5cGVdfSBrZXlcbiAgICogQHBhcmFtIHtbdHlwZV19IHZhbHVlXG4gICAqL1xuXG5cbiAgUmVuZGVyZXIucHJvdG90eXBlLnNldFZhbHVlID0gZnVuY3Rpb24gc2V0VmFsdWUoa2V5LCB2YWx1ZSkge1xuICAgIHZhciBjdXJyZW50VmFsdWUgPSB0aGlzLnN0YXRlW2tleV07XG5cbiAgICAvLyBJZiBudW1iZXIgb3Igc3RyaW5nLCBzZXQgZGlyZWN0bHlcbiAgICBpZiAoKDAsIF91dGlscy5pc051bSkodmFsdWUpIHx8ICgwLCBfdXRpbHMuaXNTdHJpbmcpKHZhbHVlKSkge1xuICAgICAgaWYgKGN1cnJlbnRWYWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgdGhpcy5zdGF0ZVtrZXldID0gdmFsdWU7XG4gICAgICAgIHRoaXMuaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICgoMCwgX3V0aWxzLmlzQXJyYXkpKHZhbHVlKSkge1xuICAgICAgaWYgKCFjdXJyZW50VmFsdWUpIHtcbiAgICAgICAgdGhpcy5zdGF0ZVtrZXldID0gW107XG4gICAgICB9XG5cbiAgICAgIHZhciBudW1WYWx1ZXMgPSB2YWx1ZS5sZW5ndGg7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVZhbHVlczsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlW2tleV1baV0gIT09IHZhbHVlW2ldKSB7XG4gICAgICAgICAgdGhpcy5zdGF0ZVtrZXldW2ldID0gdmFsdWVbaV07XG4gICAgICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoKDAsIF91dGlscy5pc09iaikodmFsdWUpKSB7XG4gICAgICBpZiAoIWN1cnJlbnRWYWx1ZSkge1xuICAgICAgICB0aGlzLnN0YXRlW2tleV0gPSB7fTtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgdmFsdWVLZXkgaW4gdmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGVba2V5XVt2YWx1ZUtleV0gIT09IHZhbHVlW3ZhbHVlS2V5XSkge1xuICAgICAgICAgIHRoaXMuc3RhdGVba2V5XVt2YWx1ZUtleV0gPSB2YWx1ZVt2YWx1ZUtleV07XG4gICAgICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLmhhc0NoYW5nZWQpIHtcbiAgICAgIHRoaXMuY2hhbmdlZFZhbHVlcy5wdXNoKGtleSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBGaXJlcyBgb25SZW5kZXJgIGlmIHZhbHVlcyBoYXZlIGNoYW5nZWQgb3IgYGZvcmNlUmVuZGVyYFxuICAgKiBpcyBzZXQgdG8gdHJ1ZS5cbiAgICogQHJldHVybiB7dGhpc31cbiAgICovXG5cblxuICBSZW5kZXJlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBmb3JjZVJlbmRlciA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogZmFsc2U7XG5cbiAgICBpZiAoKGZvcmNlUmVuZGVyIHx8IHRoaXMuaGFzQ2hhbmdlZCkgJiYgdGhpcy5vblJlbmRlcikge1xuICAgICAgdGhpcy5vblJlbmRlcigpO1xuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlZFZhbHVlcy5sZW5ndGggPSAwO1xuICAgIHRoaXMuaGFzQ2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgcmV0dXJuIFJlbmRlcmVyO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBSZW5kZXJlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5eVpXNWtaWEpsY25NdmFXNWtaWGd1YW5NaVhTd2libUZ0WlhNaU9sc2lVbVZ1WkdWeVpYSWlMQ0p3Y205d2N5SXNJbkpsYm1SbGNpSXNJbUpwYm1RaUxDSmpiMjV6ZEhKMVkzUnZjaUlzSW1SbFptRjFiSFJRY205d2N5SXNJbk4wWVhSbElpd2lZMmhoYm1kbFpGWmhiSFZsY3lJc0ltZGxkQ0lzSW10bGVTSXNJblZ1WkdWbWFXNWxaQ0lzSW5KbFlXUWlMQ0p2YmxKbFlXUWlMQ0p6WlhRaUxDSmhjbWR6SWl3aWRtRnNkV1Z6SWl3aWMyVjBWbUZzZFdVaUxDSjJZV3gxWlNJc0ltaGhjME5vWVc1blpXUWlMQ0pqZFhKeVpXNTBWbUZzZFdVaUxDSnVkVzFXWVd4MVpYTWlMQ0pzWlc1bmRHZ2lMQ0pwSWl3aWRtRnNkV1ZMWlhraUxDSndkWE5vSWl3aVptOXlZMlZTWlc1a1pYSWlMQ0p2YmxKbGJtUmxjaUpkTENKdFlYQndhVzVuY3lJNklqczdPenM3TzBGQlFVRTdPMEZCUTBFN096czdTVUZGVFVFc1VUdEJRVU5LTEc5Q1FVRlpReXhMUVVGYUxFVkJRVzFDTzBGQlFVRTdPMEZCUTJwQ0xGTkJRVXRETEUxQlFVd3NSMEZCWXl4TFFVRkxRU3hOUVVGTUxFTkJRVmxETEVsQlFWb3NRMEZCYVVJc1NVRkJha0lzUTBGQlpEczdRVUZGUVN4VFFVRkxSaXhMUVVGTUxHZENRVU5MTEV0QlFVdEhMRmRCUVV3c1EwRkJhVUpETEZsQlJIUkNMRVZCUlV0S0xFdEJSa3c3TzBGQlMwRXNVMEZCUzBzc1MwRkJUQ3hIUVVGaExFVkJRV0k3UVVGRFFTeFRRVUZMUXl4aFFVRk1MRWRCUVhGQ0xFVkJRWEpDTzBGQlEwUTdPMEZCUlVRN096czdPenM3T3pzN2NVSkJVVUZETEVjc1owSkJRVWxETEVjc1JVRkJTenRCUVVOUUxGRkJRVWxCTEVkQlFVb3NSVUZCVXp0QlFVTlFMRlZCUVVrc1MwRkJTMGdzUzBGQlRDeERRVUZYUnl4SFFVRllMRTFCUVc5Q1F5eFRRVUY0UWl4RlFVRnRRenRCUVVOcVF5eGxRVUZQTEV0QlFVdEtMRXRCUVV3c1EwRkJWMGNzUjBGQldDeERRVUZRTzBGQlEwUXNUMEZHUkN4TlFVVlBPMEZCUTB3c1pVRkJUeXhMUVVGTFJTeEpRVUZNTEVOQlFWVkdMRWRCUVZZc1EwRkJVRHRCUVVORU8wRkJRMFlzUzBGT1JDeE5RVTFQTzBGQlEwd3NZVUZCVHl4TFFVRkxTQ3hMUVVGYU8wRkJRMFE3UVVGRFJpeEhPenRCUVVWRU96czdPenM3TzNGQ1FVdEJTeXhKTEdsQ1FVRkxSaXhITEVWQlFVczdRVUZEVWl4UlFVRkpMRXRCUVV0SExFMUJRVlFzUlVGQmFVSTdRVUZEWml4aFFVRlBMRXRCUVV0QkxFMUJRVXdzUTBGQldVZ3NSMEZCV2l4RFFVRlFPMEZCUTBRN1FVRkRSaXhIT3p0QlFVVkVPenM3T3pzN08zRkNRVXRCU1N4SExHdENRVUZoTzBGQlFVRXNjME5CUVU1RExFbEJRVTA3UVVGQlRrRXNWVUZCVFR0QlFVRkJPenRCUVVOWUxGRkJRVWtzVDBGQlQwRXNTMEZCU3l4RFFVRk1MRU5CUVZBc1MwRkJiVUlzVjBGQmRrSXNSVUZCYjBNN1FVRkJRU3hWUVVNeFFrTXNUVUZFTUVJc1IwRkRaa1FzU1VGRVpUdEJRVVZzUXpzN1FVRkRRU3hYUVVGTExFbEJRVTFNTEVkQlFWZ3NTVUZCYTBKTkxFMUJRV3hDTEVWQlFUQkNPMEZCUTNoQ0xHRkJRVXRETEZGQlFVd3NRMEZCWTFBc1IwRkJaQ3hGUVVGdFFrMHNUMEZCVDA0c1IwRkJVQ3hEUVVGdVFqdEJRVU5FTzBGQlEwWXNTMEZPUkN4TlFVMVBPMEZCUVVFc1ZVRkRSMEVzUzBGRVNDeEhRVU5yUWtzc1NVRkViRUk3UVVGQlFTeFZRVU5SUnl4TFFVUlNMRWRCUTJ0Q1NDeEpRVVJzUWpzN1FVRkZUQ3hYUVVGTFJTeFJRVUZNTEVOQlFXTlFMRXRCUVdRc1JVRkJiVUpSTEV0QlFXNUNPMEZCUTBRN08wRkJSVVFzVVVGQlNTeExRVUZMUXl4VlFVRlVMRVZCUVhGQ08wRkJRMjVDTEc5RFFVRmpMRXRCUVV0b1FpeE5RVUZ1UWp0QlFVTkVPenRCUVVWRUxGZEJRVThzU1VGQlVEdEJRVU5FTEVjN08wRkJSVVE3UVVGRFFUczdPenM3T3pzN096czdPenR4UWtGWFFXTXNVU3h4UWtGQlUxQXNSeXhGUVVGTFVTeExMRVZCUVU4N1FVRkRia0lzVVVGQlRVVXNaVUZCWlN4TFFVRkxZaXhMUVVGTUxFTkJRVmRITEVkQlFWZ3NRMEZCY2tJN08wRkJSVUU3UVVGRFFTeFJRVUZKTEd0Q1FVRk5VU3hMUVVGT0xFdEJRV2RDTEhGQ1FVRlRRU3hMUVVGVUxFTkJRWEJDTEVWQlFYRkRPMEZCUTI1RExGVkJRVWxGTEdsQ1FVRnBRa1lzUzBGQmNrSXNSVUZCTkVJN1FVRkRNVUlzWVVGQlMxZ3NTMEZCVEN4RFFVRlhSeXhIUVVGWUxFbEJRV3RDVVN4TFFVRnNRanRCUVVOQkxHRkJRVXRETEZWQlFVd3NSMEZCYTBJc1NVRkJiRUk3UVVGRFJEdEJRVU5HTEV0QlRFUXNUVUZMVHl4SlFVRkpMRzlDUVVGUlJDeExRVUZTTEVOQlFVb3NSVUZCYjBJN1FVRkRla0lzVlVGQlNTeERRVUZEUlN4WlFVRk1MRVZCUVcxQ08wRkJRMnBDTEdGQlFVdGlMRXRCUVV3c1EwRkJWMGNzUjBGQldDeEpRVUZyUWl4RlFVRnNRanRCUVVORU96dEJRVVZFTEZWQlFVMVhMRmxCUVZsSUxFMUJRVTFKTEUxQlFYaENPMEZCUTBFc1YwRkJTeXhKUVVGSlF5eEpRVUZKTEVOQlFXSXNSVUZCWjBKQkxFbEJRVWxHTEZOQlFYQkNMRVZCUVN0Q1JTeEhRVUV2UWl4RlFVRnZRenRCUVVOc1F5eFpRVUZKTEV0QlFVdG9RaXhMUVVGTUxFTkJRVmRITEVkQlFWZ3NSVUZCWjBKaExFTkJRV2hDTEUxQlFYVkNUQ3hOUVVGTlN5eERRVUZPTEVOQlFUTkNMRVZCUVhGRE8wRkJRMjVETEdWQlFVdG9RaXhMUVVGTUxFTkJRVmRITEVkQlFWZ3NSVUZCWjBKaExFTkJRV2hDTEVsQlFYRkNUQ3hOUVVGTlN5eERRVUZPTEVOQlFYSkNPMEZCUTBFc1pVRkJTMG9zVlVGQlRDeEhRVUZyUWl4SlFVRnNRanRCUVVORU8wRkJRMFk3UVVGRFJpeExRVnBOTEUxQldVRXNTVUZCU1N4clFrRkJUVVFzUzBGQlRpeERRVUZLTEVWQlFXdENPMEZCUTNaQ0xGVkJRVWtzUTBGQlEwVXNXVUZCVEN4RlFVRnRRanRCUVVOcVFpeGhRVUZMWWl4TFFVRk1MRU5CUVZkSExFZEJRVmdzU1VGQmEwSXNSVUZCYkVJN1FVRkRSRHM3UVVGRlJDeFhRVUZMTEVsQlFVbGpMRkZCUVZRc1NVRkJjVUpPTEV0QlFYSkNMRVZCUVRSQ08wRkJRekZDTEZsQlFVa3NTMEZCUzFnc1MwRkJUQ3hEUVVGWFJ5eEhRVUZZTEVWQlFXZENZeXhSUVVGb1FpeE5RVUU0UWs0c1RVRkJUVTBzVVVGQlRpeERRVUZzUXl4RlFVRnRSRHRCUVVOcVJDeGxRVUZMYWtJc1MwRkJUQ3hEUVVGWFJ5eEhRVUZZTEVWQlFXZENZeXhSUVVGb1FpeEpRVUUwUWs0c1RVRkJUVTBzVVVGQlRpeERRVUUxUWp0QlFVTkJMR1ZCUVV0TUxGVkJRVXdzUjBGQmEwSXNTVUZCYkVJN1FVRkRSRHRCUVVOR08wRkJRMFk3TzBGQlJVUXNVVUZCU1N4TFFVRkxRU3hWUVVGVUxFVkJRWEZDTzBGQlEyNUNMRmRCUVV0WUxHRkJRVXdzUTBGQmJVSnBRaXhKUVVGdVFpeERRVUYzUW1Zc1IwRkJlRUk3UVVGRFJEdEJRVU5HTEVjN08wRkJSVVE3T3pzN096czdjVUpCUzBGUUxFMHNjVUpCUVRSQ08wRkJRVUVzVVVGQmNrSjFRaXhYUVVGeFFpeDFSVUZCVUN4TFFVRlBPenRCUVVNeFFpeFJRVUZKTEVOQlFVTkJMR1ZCUVdVc1MwRkJTMUFzVlVGQmNrSXNTMEZCYjBNc1MwRkJTMUVzVVVGQk4wTXNSVUZCZFVRN1FVRkRja1FzVjBGQlMwRXNVVUZCVER0QlFVTkVPenRCUVVWRUxGTkJRVXR1UWl4aFFVRk1MRU5CUVcxQ1l5eE5RVUZ1UWl4SFFVRTBRaXhEUVVFMVFqdEJRVU5CTEZOQlFVdElMRlZCUVV3c1IwRkJhMElzUzBGQmJFSTdPMEZCUlVFc1YwRkJUeXhKUVVGUU8wRkJRMFFzUnpzN096czdhMEpCUjFsc1FpeFJJaXdpWm1sc1pTSTZJbWx1WkdWNExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5dFlYUjBjR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhzZ2IyNUdjbUZ0WlZKbGJtUmxjaUI5SUdaeWIyMGdKeTR1TDJaeVlXMWxjM2x1WXljN1hHNXBiWEJ2Y25RZ2V5QnBjMEZ5Y21GNUxDQnBjMDlpYWl3Z2FYTk9kVzBzSUdselUzUnlhVzVuSUgwZ1puSnZiU0FuTGk0dmFXNWpMM1YwYVd4ekp6dGNibHh1WTJ4aGMzTWdVbVZ1WkdWeVpYSWdlMXh1SUNCamIyNXpkSEoxWTNSdmNpaHdjbTl3Y3lrZ2UxeHVJQ0FnSUhSb2FYTXVjbVZ1WkdWeUlEMGdkR2hwY3k1eVpXNWtaWEl1WW1sdVpDaDBhR2x6S1R0Y2JseHVJQ0FnSUhSb2FYTXVjSEp2Y0hNZ1BTQjdYRzRnSUNBZ0lDQXVMaTUwYUdsekxtTnZibk4wY25WamRHOXlMbVJsWm1GMWJIUlFjbTl3Y3l4Y2JpQWdJQ0FnSUM0dUxuQnliM0J6WEc0Z0lDQWdmVHRjYmx4dUlDQWdJSFJvYVhNdWMzUmhkR1VnUFNCN2ZUdGNiaUFnSUNCMGFHbHpMbU5vWVc1blpXUldZV3gxWlhNZ1BTQmJYVHRjYmlBZ2ZWeHVYRzRnSUM4cUtseHVJQ0FnS2lCSFpYUWdZM1Z5Y21WdWRDQnpkR0YwWlM1Y2JpQWdJQ29nU1dZZ1lHdGxlV0FnYVhNZ2JtOTBJR1JsWm1sdVpXUXNJSEpsZEhWeWJpQmxiblJwY21VZ1kyRmphR1ZrSUhOMFlYUmxMbHh1SUNBZ0tpQkpaaUJnYTJWNVlDQnBjeUJrWldacGJtVmtMQ0J5WlhSMWNtNGdZMkZqYUdWa0lIWmhiSFZsSUdsbUlIQnlaWE5sYm5RdVhHNGdJQ0FxSUVsbUlHQnJaWGxnSUdseklHUmxabWx1WldRZ1lXNWtJR05oWTJobFpDQjJZV3gxWlNCcGN5QnViM1FnY0hKbGMyVnVkQ3dnY21WaFpDQmhibVFnY21WMGRYSnVMbHh1SUNBZ0tpQkFjR0Z5WVcwZ0lIdHpkSEpwYm1kOUlDaHZjSFJwYjI1aGJDa2dhMlY1SUc5bUlIWmhiSFZsWEc0Z0lDQXFJRUJ5WlhSMWNtNGdlM1poYkhWbGZWeHVJQ0FnS2k5Y2JpQWdaMlYwS0d0bGVTa2dlMXh1SUNBZ0lHbG1JQ2hyWlhrcElIdGNiaUFnSUNBZ0lHbG1JQ2gwYUdsekxuTjBZWFJsVzJ0bGVWMGdJVDA5SUhWdVpHVm1hVzVsWkNrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTV6ZEdGMFpWdHJaWGxkTzF4dUlDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNdWNtVmhaQ2hyWlhrcE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1emRHRjBaVHRjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0F2S2lwY2JpQWdJQ29nVW1WaFpDQjJZV3gxWlNCaFkyTnZjbVJwYm1jZ2RHOGdZRzl1VW1WaFpHQmNiaUFnSUNvZ1FIQmhjbUZ0SUNCN2MzUnlhVzVuZlNCT1lXMWxJRzltSUhCeWIzQmxjblI1SUhSdklISmxZV1JjYmlBZ0lDb2dRSEpsZEhWeWJpQjdXM1I1Y0dWZGZWeHVJQ0FnS2k5Y2JpQWdjbVZoWkNoclpYa3BJSHRjYmlBZ0lDQnBaaUFvZEdocGN5NXZibEpsWVdRcElIdGNiaUFnSUNBZ0lISmxkSFZ5YmlCMGFHbHpMbTl1VW1WaFpDaHJaWGtwTzF4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUM4cUtseHVJQ0FnS2lCVmNHUmhkR1VnWUhOMFlYUmxZQ0IzYVhSb0lHNWxkeUIyWVd4MVpYTWdZVzVrSUhOamFHVmtkV3hsSUdCeVpXNWtaWEpnTGx4dUlDQWdLaUJBY0dGeVlXMGdlMjlpYW1WamRIMGdkbUZzZFdWelhHNGdJQ0FxSUVCd1lYSmhiU0I3ZG1Gc2RXVjlJSFpoYkhWbElIUnZjMlYwWEc0Z0lDQXFMMXh1SUNCelpYUW9MaTR1WVhKbmN5a2dlMXh1SUNBZ0lHbG1JQ2gwZVhCbGIyWWdZWEpuYzFzeFhTQTlQVDBnSjNWdVpHVm1hVzVsWkNjcElIdGNiaUFnSUNBZ0lHTnZibk4wSUZzZ2RtRnNkV1Z6SUYwZ1BTQmhjbWR6TzF4dUlDQWdJQ0FnTHk4Z1UyVjBJRzExYkhScGNHeGxJSFpoYkhWbGMxeHVJQ0FnSUNBZ1ptOXlJQ2hqYjI1emRDQnJaWGtnYVc0Z2RtRnNkV1Z6S1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YzJWMFZtRnNkV1VvYTJWNUxDQjJZV3gxWlhOYmEyVjVYU2s3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lHTnZibk4wSUZzZ2EyVjVMQ0IyWVd4MVpTQmRJRDBnWVhKbmN6dGNiaUFnSUNBZ0lIUm9hWE11YzJWMFZtRnNkV1VvYTJWNUxDQjJZV3gxWlNrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYVdZZ0tIUm9hWE11YUdGelEyaGhibWRsWkNrZ2UxeHVJQ0FnSUNBZ2IyNUdjbUZ0WlZKbGJtUmxjaWgwYUdsekxuSmxibVJsY2lrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJSDFjYmx4dUlDQXZMeUErSUZkcGJHVjVJQzBnTmlCcGJpQjBhR1VnVFc5eWJtbHVaMXh1SUNBdktpcGNiaUFnSUNvZ1UyVjBJR0VnYzJsdVoyeGxJSFpoYkhWbFhHNGdJQ0FxSUVsbUlHRWdjM1J5YVc1bklHOXlJRzUxYldKbGNpd2djMlYwSUdScGNtVmpkR3g1TGx4dUlDQWdLaUJKWmlCaGJpQnZZbXBsWTNRZ2IzSWdZWEp5WVhrc0lHTnlaV0YwWlNCdVpYY2diMkpxWldOMElHOXlJR0Z5Y21GNVhHNGdJQ0FxSUdsbUlHbDBJR1J2WlhOdUozUWdZV3h5WldGa2VTQmxlR2x6ZEM0Z1ZHaGxiaUJ6YUdGc2JHOTNJR052YlhCaGNtVmNiaUFnSUNvZ2RHOGdjMlYwSUdGdVpDQmpiMjF3WVhKbElHbHVaR2wyYVdSMVlXd2dkbUZzZFdWekxseHVJQ0FnS2lCUGJtVWdiMllnZEdobElHTnNaV0Z5WlhJZ1pISmhkMkpoWTJ0eklHRnVaQ0JoYm01dmVXRnVZMlZ6SUhkcGRHaGNiaUFnSUNvZ2RYTnBibWNnYlhWMFlXSnNaU0JwYm5OMFpXRmtJRzltSUdsdGJYVjBZV0pzWlNCemRHRjBaWE11WEc0Z0lDQXFJRUJ3WVhKaGJTQjdXM1I1Y0dWZGZTQnJaWGxjYmlBZ0lDb2dRSEJoY21GdElIdGJkSGx3WlYxOUlIWmhiSFZsWEc0Z0lDQXFMMXh1SUNCelpYUldZV3gxWlNoclpYa3NJSFpoYkhWbEtTQjdYRzRnSUNBZ1kyOXVjM1FnWTNWeWNtVnVkRlpoYkhWbElEMGdkR2hwY3k1emRHRjBaVnRyWlhsZE8xeHVYRzRnSUNBZ0x5OGdTV1lnYm5WdFltVnlJRzl5SUhOMGNtbHVaeXdnYzJWMElHUnBjbVZqZEd4NVhHNGdJQ0FnYVdZZ0tHbHpUblZ0S0haaGJIVmxLU0I4ZkNCcGMxTjBjbWx1WnloMllXeDFaU2twSUh0Y2JpQWdJQ0FnSUdsbUlDaGpkWEp5Wlc1MFZtRnNkV1VnSVQwOUlIWmhiSFZsS1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YzNSaGRHVmJhMlY1WFNBOUlIWmhiSFZsTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbWhoYzBOb1lXNW5aV1FnUFNCMGNuVmxPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMGdaV3h6WlNCcFppQW9hWE5CY25KaGVTaDJZV3gxWlNrcElIdGNiaUFnSUNBZ0lHbG1JQ2doWTNWeWNtVnVkRlpoYkhWbEtTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdWMzUmhkR1ZiYTJWNVhTQTlJRnRkTzF4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNCamIyNXpkQ0J1ZFcxV1lXeDFaWE1nUFNCMllXeDFaUzVzWlc1bmRHZzdYRzRnSUNBZ0lDQm1iM0lnS0d4bGRDQnBJRDBnTURzZ2FTQThJRzUxYlZaaGJIVmxjenNnYVNzcktTQjdYRzRnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbk4wWVhSbFcydGxlVjFiYVYwZ0lUMDlJSFpoYkhWbFcybGRLU0I3WEc0Z0lDQWdJQ0FnSUNBZ2RHaHBjeTV6ZEdGMFpWdHJaWGxkVzJsZElEMGdkbUZzZFdWYmFWMDdYRzRnSUNBZ0lDQWdJQ0FnZEdocGN5NW9ZWE5EYUdGdVoyVmtJRDBnZEhKMVpUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdmVnh1SUNBZ0lIMGdaV3h6WlNCcFppQW9hWE5QWW1vb2RtRnNkV1VwS1NCN1hHNGdJQ0FnSUNCcFppQW9JV04xY25KbGJuUldZV3gxWlNrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG5OMFlYUmxXMnRsZVYwZ1BTQjdmVHRjYmlBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnWm05eUlDaHNaWFFnZG1Gc2RXVkxaWGtnYVc0Z2RtRnNkV1VwSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLSFJvYVhNdWMzUmhkR1ZiYTJWNVhWdDJZV3gxWlV0bGVWMGdJVDA5SUhaaGJIVmxXM1poYkhWbFMyVjVYU2tnZTF4dUlDQWdJQ0FnSUNBZ0lIUm9hWE11YzNSaGRHVmJhMlY1WFZ0MllXeDFaVXRsZVYwZ1BTQjJZV3gxWlZ0MllXeDFaVXRsZVYwN1hHNGdJQ0FnSUNBZ0lDQWdkR2hwY3k1b1lYTkRhR0Z1WjJWa0lEMGdkSEoxWlR0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JseHVJQ0FnSUdsbUlDaDBhR2x6TG1oaGMwTm9ZVzVuWldRcElIdGNiaUFnSUNBZ0lIUm9hWE11WTJoaGJtZGxaRlpoYkhWbGN5NXdkWE5vS0d0bGVTazdYRzRnSUNBZ2ZWeHVJQ0I5WEc1Y2JpQWdMeW9xWEc0Z0lDQXFJRVpwY21WeklHQnZibEpsYm1SbGNtQWdhV1lnZG1Gc2RXVnpJR2hoZG1VZ1kyaGhibWRsWkNCdmNpQmdabTl5WTJWU1pXNWtaWEpnWEc0Z0lDQXFJR2x6SUhObGRDQjBieUIwY25WbExseHVJQ0FnS2lCQWNtVjBkWEp1SUh0MGFHbHpmVnh1SUNBZ0tpOWNiaUFnY21WdVpHVnlLR1p2Y21ObFVtVnVaR1Z5SUQwZ1ptRnNjMlVwSUh0Y2JpQWdJQ0JwWmlBb0tHWnZjbU5sVW1WdVpHVnlJSHg4SUhSb2FYTXVhR0Z6UTJoaGJtZGxaQ2tnSmlZZ2RHaHBjeTV2YmxKbGJtUmxjaWtnZTF4dUlDQWdJQ0FnZEdocGN5NXZibEpsYm1SbGNpZ3BPMXh1SUNBZ0lIMWNibHh1SUNBZ0lIUm9hWE11WTJoaGJtZGxaRlpoYkhWbGN5NXNaVzVuZEdnZ1BTQXdPMXh1SUNBZ0lIUm9hWE11YUdGelEyaGhibWRsWkNBOUlHWmhiSE5sTzF4dVhHNGdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJSDFjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1VtVnVaR1Z5WlhJN1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZW5kZXJlcnMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZWxlbWVudCwgcHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBDU1NSZW5kZXJlcihfZXh0ZW5kcyh7XG4gICAgZWxlbWVudDogZWxlbWVudFxuICB9LCBwcm9wcykpO1xufTtcblxudmFyIF8gPSByZXF1aXJlKCcuLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxudmFyIF9yZW5kZXIgPSByZXF1aXJlKCcuL3JlbmRlcicpO1xuXG52YXIgX3JlbmRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZW5kZXIpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzID0gcmVxdWlyZSgnLi90cmFuc2Zvcm0tcHJvcHMnKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2Zvcm1Qcm9wcyk7XG5cbnZhciBfdmFsdWVUeXBlcyA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMnKTtcblxudmFyIF92YWx1ZVR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ZhbHVlVHlwZXMpO1xuXG52YXIgX3ByZWZpeGVyID0gcmVxdWlyZSgnLi9wcmVmaXhlcicpO1xuXG52YXIgX3ByZWZpeGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ByZWZpeGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgQ1NTUmVuZGVyZXIgPSBmdW5jdGlvbiAoX1JlbmRlcmVyKSB7XG4gIF9pbmhlcml0cyhDU1NSZW5kZXJlciwgX1JlbmRlcmVyKTtcblxuICBmdW5jdGlvbiBDU1NSZW5kZXJlcigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ1NTUmVuZGVyZXIpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZW5kZXJlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIENTU1JlbmRlcmVyLnByb3RvdHlwZS5vblJlbmRlciA9IGZ1bmN0aW9uIG9uUmVuZGVyKCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBlbGVtZW50ID0gX3Byb3BzLmVsZW1lbnQsXG4gICAgICAgIGVuYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uID0gX3Byb3BzLmVuYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uO1xuXG4gICAgKDAsIF9yZW5kZXIyLmRlZmF1bHQpKGVsZW1lbnQsIHRoaXMuc3RhdGUsIHRoaXMuY2hhbmdlZFZhbHVlcywgZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pO1xuICB9O1xuXG4gIENTU1JlbmRlcmVyLnByb3RvdHlwZS5vblJlYWQgPSBmdW5jdGlvbiBvblJlYWQoa2V5KSB7XG4gICAgdmFyIHZhbHVlVHlwZSA9IF92YWx1ZVR5cGVzMi5kZWZhdWx0W2tleV07XG5cbiAgICBpZiAoIV90cmFuc2Zvcm1Qcm9wczIuZGVmYXVsdFtrZXldKSB7XG4gICAgICB2YXIgZWxlbWVudCA9IHRoaXMucHJvcHMuZWxlbWVudDtcblxuICAgICAgdmFyIGRvbVZhbHVlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCwgbnVsbClbKDAsIF9wcmVmaXhlcjIuZGVmYXVsdCkoa2V5KV0gfHwgMDtcbiAgICAgIHJldHVybiB2YWx1ZVR5cGUgJiYgdmFsdWVUeXBlLnBhcnNlID8gdmFsdWVUeXBlLnBhcnNlKGRvbVZhbHVlKSA6IGRvbVZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdmFsdWVUeXBlLmRlZmF1bHQgfHwgMDtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIENTU1JlbmRlcmVyO1xufShfMi5kZWZhdWx0KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5eVpXNWtaWEpsY25NdlkzTnpMMmx1WkdWNExtcHpJbDBzSW01aGJXVnpJanBiSW1Wc1pXMWxiblFpTENKd2NtOXdjeUlzSWtOVFUxSmxibVJsY21WeUlpd2liMjVTWlc1a1pYSWlMQ0psYm1GaWJHVklZWEprZDJGeVpVRmpZMlZzWlhKaGRHbHZiaUlzSW5OMFlYUmxJaXdpWTJoaGJtZGxaRlpoYkhWbGN5SXNJbTl1VW1WaFpDSXNJbXRsZVNJc0luWmhiSFZsVkhsd1pTSXNJbVJ2YlZaaGJIVmxJaXdpZDJsdVpHOTNJaXdpWjJWMFEyOXRjSFYwWldSVGRIbHNaU0lzSW5CaGNuTmxJaXdpWkdWbVlYVnNkQ0pkTENKdFlYQndhVzVuY3lJNklqczdPenM3TzJ0Q1FYbENaU3hWUVVGVlFTeFBRVUZXTEVWQlFXMUNReXhMUVVGdVFpeEZRVUV3UWp0QlFVTjJReXhUUVVGUExFbEJRVWxETEZkQlFVbzdRVUZEVEVZN1FVRkVTeXhMUVVWR1F5eExRVVpGTEVWQlFWQTdRVUZKUkN4RE96dEJRVGxDUkRzN096dEJRVU5CT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3T3pzN096czdPenM3U1VGRlRVTXNWenM3T3pzN096czdPM2RDUVVOS1F5eFJMSFZDUVVGWE8wRkJRVUVzYVVKQlEzVkRMRXRCUVV0R0xFdEJSRFZETzBGQlFVRXNVVUZEUkVRc1QwRkVReXhWUVVORVFTeFBRVVJETzBGQlFVRXNVVUZEVVVrc01FSkJSRklzVlVGRFVVRXNNRUpCUkZJN08wRkJSVlFzTUVKQlFWVktMRTlCUVZZc1JVRkJiVUlzUzBGQlMwc3NTMEZCZUVJc1JVRkJLMElzUzBGQlMwTXNZVUZCY0VNc1JVRkJiVVJHTERCQ1FVRnVSRHRCUVVORUxFYzdPM2RDUVVWRVJ5eE5MRzFDUVVGUFF5eEhMRVZCUVVzN1FVRkRWaXhSUVVGTlF5eFpRVUZaTEhGQ1FVRmpSQ3hIUVVGa0xFTkJRV3hDT3p0QlFVVkJMRkZCUVVrc1EwRkJReXg1UWtGQlpVRXNSMEZCWml4RFFVRk1MRVZCUVRCQ08wRkJRVUVzVlVGRGFFSlNMRTlCUkdkQ0xFZEJRMG9zUzBGQlMwTXNTMEZFUkN4RFFVTm9Ra1FzVDBGRVowSTdPMEZCUlhoQ0xGVkJRVTFWTEZkQlFWZERMRTlCUVU5RExHZENRVUZRTEVOQlFYZENXaXhQUVVGNFFpeEZRVUZwUXl4SlFVRnFReXhGUVVGMVF5eDNRa0ZCVTFFc1IwRkJWQ3hEUVVGMlF5eExRVUY1UkN4RFFVRXhSVHRCUVVOQkxHRkJRVkZETEdGQlFXRkJMRlZCUVZWSkxFdEJRWGhDTEVkQlFXbERTaXhWUVVGVlNTeExRVUZXTEVOQlFXZENTQ3hSUVVGb1FpeERRVUZxUXl4SFFVRTJSRUVzVVVGQmNFVTdRVUZEUkN4TFFVcEVMRTFCU1U4N1FVRkRUQ3hoUVVGUFJDeFZRVUZWU3l4UFFVRldMRWxCUVhGQ0xFTkJRVFZDTzBGQlEwUTdRVUZEUml4SElpd2labWxzWlNJNkltbHVaR1Y0TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTl0WVhSMGNHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJRkpsYm1SbGNtVnlJR1p5YjIwZ0p5NHVMeWM3WEc1cGJYQnZjblFnY21WdVpHVnlRMU5USUdaeWIyMGdKeTR2Y21WdVpHVnlKenRjYm1sdGNHOXlkQ0IwY21GdWMyWnZjbTFRY205d2N5Qm1jbTl0SUNjdUwzUnlZVzV6Wm05eWJTMXdjbTl3Y3ljN1hHNXBiWEJ2Y25RZ2RtRnNkV1ZVZVhCbGMwMWhjQ0JtY205dElDY3VMM1poYkhWbExYUjVjR1Z6Snp0Y2JtbHRjRzl5ZENCd2NtVm1hWGhsY2lCbWNtOXRJQ2N1TDNCeVpXWnBlR1Z5Snp0Y2JseHVZMnhoYzNNZ1ExTlRVbVZ1WkdWeVpYSWdaWGgwWlc1a2N5QlNaVzVrWlhKbGNpQjdYRzRnSUc5dVVtVnVaR1Z5S0NrZ2UxeHVJQ0FnSUdOdmJuTjBJSHNnWld4bGJXVnVkQ3dnWlc1aFlteGxTR0Z5WkhkaGNtVkJZMk5sYkdWeVlYUnBiMjRnZlNBOUlIUm9hWE11Y0hKdmNITTdYRzRnSUNBZ2NtVnVaR1Z5UTFOVEtHVnNaVzFsYm5Rc0lIUm9hWE11YzNSaGRHVXNJSFJvYVhNdVkyaGhibWRsWkZaaGJIVmxjeXdnWlc1aFlteGxTR0Z5WkhkaGNtVkJZMk5sYkdWeVlYUnBiMjRwTzF4dUlDQjlYRzVjYmlBZ2IyNVNaV0ZrS0d0bGVTa2dlMXh1SUNBZ0lHTnZibk4wSUhaaGJIVmxWSGx3WlNBOUlIWmhiSFZsVkhsd1pYTk5ZWEJiYTJWNVhUdGNibHh1SUNBZ0lHbG1JQ2doZEhKaGJuTm1iM0p0VUhKdmNITmJhMlY1WFNrZ2UxeHVJQ0FnSUNBZ1kyOXVjM1FnZXlCbGJHVnRaVzUwSUgwZ1BTQjBhR2x6TG5CeWIzQnpPMXh1SUNBZ0lDQWdZMjl1YzNRZ1pHOXRWbUZzZFdVZ1BTQjNhVzVrYjNjdVoyVjBRMjl0Y0hWMFpXUlRkSGxzWlNobGJHVnRaVzUwTENCdWRXeHNLVnR3Y21WbWFYaGxjaWhyWlhrcFhTQjhmQ0F3TzF4dUlDQWdJQ0FnY21WMGRYSnVJQ2gyWVd4MVpWUjVjR1VnSmlZZ2RtRnNkV1ZVZVhCbExuQmhjbk5sS1NBL0lIWmhiSFZsVkhsd1pTNXdZWEp6WlNoa2IyMVdZV3gxWlNrZ09pQmtiMjFXWVd4MVpUdGNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnY21WMGRYSnVJSFpoYkhWbFZIbHdaUzVrWldaaGRXeDBJSHg4SURBN1hHNGdJQ0FnZlZ4dUlDQjlYRzU5WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdaMWJtTjBhVzl1SUNobGJHVnRaVzUwTENCd2NtOXdjeWtnZTF4dUlDQnlaWFIxY200Z2JtVjNJRU5UVTFKbGJtUmxjbVZ5S0h0Y2JpQWdJQ0JsYkdWdFpXNTBMRnh1SUNBZ0lDNHVMbkJ5YjNCelhHNGdJSDBwTzF4dWZWeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZW5kZXJlcnMvY3NzL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGVsZW1lbnQsIHByb3BzKSB7XG4gIHJldHVybiBuZXcgU1ZHUmVuZGVyZXIoX2V4dGVuZHMoe1xuICAgIGVsZW1lbnQ6IGVsZW1lbnRcbiAgfSwgcHJvcHMpKTtcbn07XG5cbnZhciBfID0gcmVxdWlyZSgnLi4vJyk7XG5cbnZhciBfMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXyk7XG5cbnZhciBfYnVpbGQgPSByZXF1aXJlKCcuL2J1aWxkJyk7XG5cbnZhciBfYnVpbGQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYnVpbGQpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzID0gcmVxdWlyZSgnLi4vY3NzL3RyYW5zZm9ybS1wcm9wcycpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zZm9ybVByb3BzKTtcblxudmFyIF92YWx1ZVR5cGVzID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcycpO1xuXG52YXIgX3ZhbHVlVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdmFsdWVUeXBlcyk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi8uLi9pbmMvdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgU1ZHUmVuZGVyZXIgPSBmdW5jdGlvbiAoX1JlbmRlcmVyKSB7XG4gIF9pbmhlcml0cyhTVkdSZW5kZXJlciwgX1JlbmRlcmVyKTtcblxuICBmdW5jdGlvbiBTVkdSZW5kZXJlcihwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTVkdSZW5kZXJlcik7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVuZGVyZXIuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgdmFyIF9wcm9wcyRlbGVtZW50JGdldEJCbyA9IHByb3BzLmVsZW1lbnQuZ2V0QkJveCgpLFxuICAgICAgICB4ID0gX3Byb3BzJGVsZW1lbnQkZ2V0QkJvLngsXG4gICAgICAgIHkgPSBfcHJvcHMkZWxlbWVudCRnZXRCQm8ueSxcbiAgICAgICAgd2lkdGggPSBfcHJvcHMkZWxlbWVudCRnZXRCQm8ud2lkdGgsXG4gICAgICAgIGhlaWdodCA9IF9wcm9wcyRlbGVtZW50JGdldEJCby5oZWlnaHQ7XG5cbiAgICBfdGhpcy5lbGVtZW50RGltZW5zaW9ucyA9IHsgeDogeCwgeTogeSwgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIFNWR1JlbmRlcmVyLnByb3RvdHlwZS5vblJlbmRlciA9IGZ1bmN0aW9uIG9uUmVuZGVyKCkge1xuICAgIHZhciBlbGVtZW50ID0gdGhpcy5wcm9wcy5lbGVtZW50O1xuXG4gICAgdmFyIGF0dHJzID0gKDAsIF9idWlsZDIuZGVmYXVsdCkodGhpcy5zdGF0ZSwgdGhpcy5lbGVtZW50RGltZW5zaW9ucyk7XG4gICAgKDAsIF91dGlscy5zZXRET01BdHRycykoZWxlbWVudCwgYXR0cnMpO1xuICB9O1xuXG4gIFNWR1JlbmRlcmVyLnByb3RvdHlwZS5vblJlYWQgPSBmdW5jdGlvbiBvblJlYWQoa2V5KSB7XG4gICAgdmFyIGVsZW1lbnQgPSB0aGlzLnByb3BzLmVsZW1lbnQ7XG5cblxuICAgIGlmICghX3RyYW5zZm9ybVByb3BzMi5kZWZhdWx0W2tleV0pIHtcbiAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZShrZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdmFsdWVUeXBlID0gX3ZhbHVlVHlwZXMyLmRlZmF1bHRba2V5XTtcbiAgICAgIHJldHVybiB2YWx1ZVR5cGUgPyB2YWx1ZVR5cGUuZGVmYXVsdCA6IDA7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBTVkdSZW5kZXJlcjtcbn0oXzIuZGVmYXVsdCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXlaVzVrWlhKbGNuTXZjM1puTDJsdVpHVjRMbXB6SWwwc0ltNWhiV1Z6SWpwYkltVnNaVzFsYm5RaUxDSndjbTl3Y3lJc0lsTldSMUpsYm1SbGNtVnlJaXdpWjJWMFFrSnZlQ0lzSW5naUxDSjVJaXdpZDJsa2RHZ2lMQ0pvWldsbmFIUWlMQ0psYkdWdFpXNTBSR2x0Wlc1emFXOXVjeUlzSW05dVVtVnVaR1Z5SWl3aVlYUjBjbk1pTENKemRHRjBaU0lzSW05dVVtVmhaQ0lzSW10bGVTSXNJbWRsZEVGMGRISnBZblYwWlNJc0luWmhiSFZsVkhsd1pTSXNJbVJsWm1GMWJIUWlYU3dpYldGd2NHbHVaM01pT2lJN096czdPenRyUWtGblEyVXNWVUZCVlVFc1QwRkJWaXhGUVVGdFFrTXNTMEZCYmtJc1JVRkJNRUk3UVVGRGRrTXNVMEZCVHl4SlFVRkpReXhYUVVGS08wRkJRMHhHTzBGQlJFc3NTMEZGUmtNc1MwRkdSU3hGUVVGUU8wRkJTVVFzUXpzN1FVRnlRMFE3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3TzBGQlEwRTdPenM3UVVGRFFUczdPenM3T3pzN096dEpRVVZOUXl4WE96czdRVUZEU2l4MVFrRkJXVVFzUzBGQldpeEZRVUZ0UWp0QlFVRkJPenRCUVVGQkxHbEVRVU5xUWl4eFFrRkJUVUVzUzBGQlRpeERRVVJwUWpzN1FVRkJRU3huUTBGSFpVRXNUVUZCVFVRc1QwRkJUaXhEUVVGalJ5eFBRVUZrTEVWQlNHWTdRVUZCUVN4UlFVZFVReXhEUVVoVExIbENRVWRVUVN4RFFVaFRPMEZCUVVFc1VVRkhUa01zUTBGSVRTeDVRa0ZIVGtFc1EwRklUVHRCUVVGQkxGRkJSMGhETEV0QlNFY3NlVUpCUjBoQkxFdEJTRWM3UVVGQlFTeFJRVWRKUXl4TlFVaEtMSGxDUVVkSlFTeE5RVWhLT3p0QlFVbHFRaXhWUVVGTFF5eHBRa0ZCVEN4SFFVRjVRaXhGUVVGRlNpeEpRVUZHTEVWQlFVdERMRWxCUVV3c1JVRkJVVU1zV1VGQlVpeEZRVUZsUXl4alFVRm1MRVZCUVhwQ08wRkJTbWxDTzBGQlMyeENPenQzUWtGRlJFVXNVU3gxUWtGQlZ6dEJRVUZCTEZGQlEwUlVMRTlCUkVNc1IwRkRWeXhMUVVGTFF5eExRVVJvUWl4RFFVTkVSQ3hQUVVSRE96dEJRVVZVTEZGQlFVMVZMRkZCUVZFc2NVSkJRVTBzUzBGQlMwTXNTMEZCV0N4RlFVRnJRaXhMUVVGTFNDeHBRa0ZCZGtJc1EwRkJaRHRCUVVOQkxEUkNRVUZaVWl4UFFVRmFMRVZCUVhGQ1ZTeExRVUZ5UWp0QlFVTkVMRWM3TzNkQ1FVVkVSU3hOTEcxQ1FVRlBReXhITEVWQlFVczdRVUZCUVN4UlFVTkdZaXhQUVVSRkxFZEJRMVVzUzBGQlMwTXNTMEZFWml4RFFVTkdSQ3hQUVVSRk96czdRVUZIVml4UlFVRkpMRU5CUVVNc2VVSkJRV1ZoTEVkQlFXWXNRMEZCVEN4RlFVRXdRanRCUVVONFFpeGhRVUZQWWl4UlFVRlJZeXhaUVVGU0xFTkJRWEZDUkN4SFFVRnlRaXhEUVVGUU8wRkJRMFFzUzBGR1JDeE5RVVZQTzBGQlEwd3NWVUZCVFVVc1dVRkJXU3h4UWtGQllVWXNSMEZCWWl4RFFVRnNRanRCUVVOQkxHRkJRVkZGTEZOQlFVUXNSMEZCWTBFc1ZVRkJWVU1zVDBGQmVFSXNSMEZCYTBNc1EwRkJla003UVVGRFJEdEJRVU5HTEVjaUxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoZEhSd1pYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdVbVZ1WkdWeVpYSWdabkp2YlNBbkxpNHZKenRjYm1sdGNHOXlkQ0JpZFdsc1pDQm1jbTl0SUNjdUwySjFhV3hrSnp0Y2JtbHRjRzl5ZENCMGNtRnVjMlp2Y20xUWNtOXdjeUJtY205dElDY3VMaTlqYzNNdmRISmhibk5tYjNKdExYQnliM0J6Snp0Y2JtbHRjRzl5ZENCMllXeDFaVlI1Y0dWTllYQWdabkp2YlNBbkxpOTJZV3gxWlMxMGVYQmxjeWM3WEc1cGJYQnZjblFnZXlCelpYUkVUMDFCZEhSeWN5QjlJR1p5YjIwZ0p5NHVMeTR1TDJsdVl5OTFkR2xzY3ljN1hHNWNibU5zWVhOeklGTldSMUpsYm1SbGNtVnlJR1Y0ZEdWdVpITWdVbVZ1WkdWeVpYSWdlMXh1SUNCamIyNXpkSEoxWTNSdmNpaHdjbTl3Y3lrZ2UxeHVJQ0FnSUhOMWNHVnlLSEJ5YjNCektUdGNibHh1SUNBZ0lHTnZibk4wSUhzZ2VDd2dlU3dnZDJsa2RHZ3NJR2hsYVdkb2RDQjlJRDBnY0hKdmNITXVaV3hsYldWdWRDNW5aWFJDUW05NEtDazdYRzRnSUNBZ2RHaHBjeTVsYkdWdFpXNTBSR2x0Wlc1emFXOXVjeUE5SUhzZ2VDd2dlU3dnZDJsa2RHZ3NJR2hsYVdkb2RDQjlPMXh1SUNCOVhHNWNiaUFnYjI1U1pXNWtaWElvS1NCN1hHNGdJQ0FnWTI5dWMzUWdleUJsYkdWdFpXNTBJSDBnUFNCMGFHbHpMbkJ5YjNCek8xeHVJQ0FnSUdOdmJuTjBJR0YwZEhKeklEMGdZblZwYkdRb2RHaHBjeTV6ZEdGMFpTd2dkR2hwY3k1bGJHVnRaVzUwUkdsdFpXNXphVzl1Y3lrN1hHNGdJQ0FnYzJWMFJFOU5RWFIwY25Nb1pXeGxiV1Z1ZEN3Z1lYUjBjbk1wTzF4dUlDQjlYRzVjYmlBZ2IyNVNaV0ZrS0d0bGVTa2dlMXh1SUNBZ0lHTnZibk4wSUhzZ1pXeGxiV1Z1ZENCOUlEMGdkR2hwY3k1d2NtOXdjenRjYmx4dUlDQWdJR2xtSUNnaGRISmhibk5tYjNKdFVISnZjSE5iYTJWNVhTa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlHVnNaVzFsYm5RdVoyVjBRWFIwY21saWRYUmxLR3RsZVNrN1hHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJR052Ym5OMElIWmhiSFZsVkhsd1pTQTlJSFpoYkhWbFZIbHdaVTFoY0Z0clpYbGRPMXh1SUNBZ0lDQWdjbVYwZFhKdUlDaDJZV3gxWlZSNWNHVXBJRDhnZG1Gc2RXVlVlWEJsTG1SbFptRjFiSFFnT2lBd08xeHVJQ0FnSUgxY2JpQWdmVnh1ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCbWRXNWpkR2x2YmlBb1pXeGxiV1Z1ZEN3Z2NISnZjSE1wSUh0Y2JpQWdjbVYwZFhKdUlHNWxkeUJUVmtkU1pXNWtaWEpsY2loN1hHNGdJQ0FnWld4bGJXVnVkQ3hjYmlBZ0lDQXVMaTV3Y205d2MxeHVJQ0I5S1R0Y2JuMWNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcmVuZGVyZXJzL3N2Zy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDIxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChlbGVtZW50LCBwcm9wcykge1xuICByZXR1cm4gbmV3IFNWR1BhdGhSZW5kZXJlcihfZXh0ZW5kcyh7XG4gICAgZWxlbWVudDogZWxlbWVudFxuICB9LCBwcm9wcykpO1xufTtcblxudmFyIF8gPSByZXF1aXJlKCcuLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxudmFyIF9idWlsZCA9IHJlcXVpcmUoJy4vYnVpbGQnKTtcblxudmFyIF9idWlsZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9idWlsZCk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi8uLi9pbmMvdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgU1ZHUGF0aFJlbmRlcmVyID0gZnVuY3Rpb24gKF9SZW5kZXJlcikge1xuICBfaW5oZXJpdHMoU1ZHUGF0aFJlbmRlcmVyLCBfUmVuZGVyZXIpO1xuXG4gIGZ1bmN0aW9uIFNWR1BhdGhSZW5kZXJlcihwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTVkdQYXRoUmVuZGVyZXIpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlbmRlcmVyLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIHZhciBfcHJvcHMkZWxlbWVudCRnZXRCQm8gPSBwcm9wcy5lbGVtZW50LmdldEJCb3goKSxcbiAgICAgICAgeCA9IF9wcm9wcyRlbGVtZW50JGdldEJCby54LFxuICAgICAgICB5ID0gX3Byb3BzJGVsZW1lbnQkZ2V0QkJvLnksXG4gICAgICAgIHdpZHRoID0gX3Byb3BzJGVsZW1lbnQkZ2V0QkJvLndpZHRoLFxuICAgICAgICBoZWlnaHQgPSBfcHJvcHMkZWxlbWVudCRnZXRCQm8uaGVpZ2h0O1xuXG4gICAgX3RoaXMuZWxlbWVudERpbWVuc2lvbnMgPSB7XG4gICAgICB4OiB4LFxuICAgICAgeTogeSxcbiAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgcGF0aExlbmd0aDogcHJvcHMuZWxlbWVudC5nZXRUb3RhbExlbmd0aCgpXG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBTVkdQYXRoUmVuZGVyZXIucHJvdG90eXBlLm9uUmVuZGVyID0gZnVuY3Rpb24gb25SZW5kZXIoKSB7XG4gICAgdmFyIHBhdGhMZW5ndGggPSB0aGlzLmVsZW1lbnREaW1lbnNpb25zLnBhdGhMZW5ndGg7XG4gICAgdmFyIGVsZW1lbnQgPSB0aGlzLnByb3BzLmVsZW1lbnQ7XG5cbiAgICAoMCwgX3V0aWxzLnNldERPTUF0dHJzKShlbGVtZW50LCAoMCwgX2J1aWxkMi5kZWZhdWx0KSh0aGlzLnN0YXRlLCBwYXRoTGVuZ3RoKSk7XG4gIH07XG5cbiAgU1ZHUGF0aFJlbmRlcmVyLnByb3RvdHlwZS5vblJlYWQgPSBmdW5jdGlvbiBvblJlYWQoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoa2V5KTtcbiAgfTtcblxuICByZXR1cm4gU1ZHUGF0aFJlbmRlcmVyO1xufShfMi5kZWZhdWx0KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5eVpXNWtaWEpsY25NdmMzWm5MWEJoZEdndmFXNWtaWGd1YW5NaVhTd2libUZ0WlhNaU9sc2laV3hsYldWdWRDSXNJbkJ5YjNCeklpd2lVMVpIVUdGMGFGSmxibVJsY21WeUlpd2laMlYwUWtKdmVDSXNJbmdpTENKNUlpd2lkMmxrZEdnaUxDSm9aV2xuYUhRaUxDSmxiR1Z0Wlc1MFJHbHRaVzV6YVc5dWN5SXNJbkJoZEdoTVpXNW5kR2dpTENKblpYUlViM1JoYkV4bGJtZDBhQ0lzSW05dVVtVnVaR1Z5SWl3aWMzUmhkR1VpTENKdmJsSmxZV1FpTENKclpYa2lMQ0puWlhSQmRIUnlhV0oxZEdVaVhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096dHJRa0UyUW1Vc1ZVRkJWVUVzVDBGQlZpeEZRVUZ0UWtNc1MwRkJia0lzUlVGQk1FSTdRVUZEZGtNc1UwRkJUeXhKUVVGSlF5eGxRVUZLTzBGQlEweEdPMEZCUkVzc1MwRkZSa01zUzBGR1JTeEZRVUZRTzBGQlNVUXNRenM3UVVGc1EwUTdPenM3UVVGRFFUczdPenRCUVVOQk96czdPenM3T3pzN08wbEJSVTFETEdVN096dEJRVU5LTERKQ1FVRlpSQ3hMUVVGYUxFVkJRVzFDTzBGQlFVRTdPMEZCUVVFc2FVUkJRMnBDTEhGQ1FVRk5RU3hMUVVGT0xFTkJSR2xDT3p0QlFVRkJMR2REUVVkbFFTeE5RVUZOUkN4UFFVRk9MRU5CUVdOSExFOUJRV1FzUlVGSVpqdEJRVUZCTEZGQlIxUkRMRU5CU0ZNc2VVSkJSMVJCTEVOQlNGTTdRVUZCUVN4UlFVZE9ReXhEUVVoTkxIbENRVWRPUVN4RFFVaE5PMEZCUVVFc1VVRkhTRU1zUzBGSVJ5eDVRa0ZIU0VFc1MwRklSenRCUVVGQkxGRkJSMGxETEUxQlNFb3NlVUpCUjBsQkxFMUJTRW83TzBGQlNXcENMRlZCUVV0RExHbENRVUZNTEVkQlFYbENPMEZCUTNaQ1NpeFZRVVIxUWp0QlFVVjJRa01zVlVGR2RVSTdRVUZIZGtKRExHdENRVWgxUWp0QlFVbDJRa01zYjBKQlNuVkNPMEZCUzNaQ1JTeHJRa0ZCV1ZJc1RVRkJUVVFzVDBGQlRpeERRVUZqVlN4alFVRmtPMEZCVEZjc1MwRkJla0k3UVVGS2FVSTdRVUZYYkVJN096UkNRVVZFUXl4UkxIVkNRVUZYTzBGQlFVRXNVVUZEUkVZc1ZVRkVReXhIUVVOakxFdEJRVXRFTEdsQ1FVUnVRaXhEUVVORVF5eFZRVVJETzBGQlFVRXNVVUZGUkZRc1QwRkdReXhIUVVWWExFdEJRVXRETEV0QlJtaENMRU5CUlVSRUxFOUJSa003TzBGQlIxUXNORUpCUVZsQkxFOUJRVm9zUlVGQmNVSXNjVUpCUVUwc1MwRkJTMWtzUzBGQldDeEZRVUZyUWtnc1ZVRkJiRUlzUTBGQmNrSTdRVUZEUkN4SE96czBRa0ZGUkVrc1RTeHRRa0ZCVDBNc1J5eEZRVUZMTzBGQlExWXNWMEZCVHl4TFFVRkxZaXhMUVVGTUxFTkJRVmRFTEU5QlFWZ3NRMEZCYlVKbExGbEJRVzVDTEVOQlFXZERSQ3hIUVVGb1F5eERRVUZRTzBGQlEwUXNSeUlzSW1acGJHVWlPaUpwYm1SbGVDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRjBkSEJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCU1pXNWtaWEpsY2lCbWNtOXRJQ2N1TGk4bk8xeHVhVzF3YjNKMElHSjFhV3hrSUdaeWIyMGdKeTR2WW5WcGJHUW5PMXh1YVcxd2IzSjBJSHNnYzJWMFJFOU5RWFIwY25NZ2ZTQm1jbTl0SUNjdUxpOHVMaTlwYm1NdmRYUnBiSE1uTzF4dVhHNWpiR0Z6Y3lCVFZrZFFZWFJvVW1WdVpHVnlaWElnWlhoMFpXNWtjeUJTWlc1a1pYSmxjaUI3WEc0Z0lHTnZibk4wY25WamRHOXlLSEJ5YjNCektTQjdYRzRnSUNBZ2MzVndaWElvY0hKdmNITXBPMXh1WEc0Z0lDQWdZMjl1YzNRZ2V5QjRMQ0I1TENCM2FXUjBhQ3dnYUdWcFoyaDBJSDBnUFNCd2NtOXdjeTVsYkdWdFpXNTBMbWRsZEVKQ2IzZ29LVHRjYmlBZ0lDQjBhR2x6TG1Wc1pXMWxiblJFYVcxbGJuTnBiMjV6SUQwZ2UxeHVJQ0FnSUNBZ2VDeGNiaUFnSUNBZ0lIa3NYRzRnSUNBZ0lDQjNhV1IwYUN4Y2JpQWdJQ0FnSUdobGFXZG9kQ3hjYmlBZ0lDQWdJSEJoZEdoTVpXNW5kR2c2SUhCeWIzQnpMbVZzWlcxbGJuUXVaMlYwVkc5MFlXeE1aVzVuZEdnb0tWeHVJQ0FnSUgwN1hHNGdJSDFjYmx4dUlDQnZibEpsYm1SbGNpZ3BJSHRjYmlBZ0lDQmpiMjV6ZENCN0lIQmhkR2hNWlc1bmRHZ2dmU0E5SUhSb2FYTXVaV3hsYldWdWRFUnBiV1Z1YzJsdmJuTTdYRzRnSUNBZ1kyOXVjM1FnZXlCbGJHVnRaVzUwSUgwZ1BTQjBhR2x6TG5CeWIzQnpPMXh1SUNBZ0lITmxkRVJQVFVGMGRISnpLR1ZzWlcxbGJuUXNJR0oxYVd4a0tIUm9hWE11YzNSaGRHVXNJSEJoZEdoTVpXNW5kR2dwS1R0Y2JpQWdmVnh1WEc0Z0lHOXVVbVZoWkNoclpYa3BJSHRjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTV3Y205d2N5NWxiR1Z0Wlc1MExtZGxkRUYwZEhKcFluVjBaU2hyWlhrcE8xeHVJQ0I5WEc1OVhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHWjFibU4wYVc5dUlDaGxiR1Z0Wlc1MExDQndjbTl3Y3lrZ2UxeHVJQ0J5WlhSMWNtNGdibVYzSUZOV1IxQmhkR2hTWlc1a1pYSmxjaWg3WEc0Z0lDQWdaV3hsYldWdWRDeGNiaUFnSUNBdUxpNXdjbTl3YzF4dUlDQjlLVHRjYm4xY2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZW5kZXJlcnMvc3ZnLXBhdGgvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAyMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5zdGVwUHJvZ3Jlc3MgPSBleHBvcnRzLnNwZWVkUGVyU2Vjb25kID0gZXhwb3J0cy5zcGVlZFBlckZyYW1lID0gZXhwb3J0cy5zbW9vdGggPSBleHBvcnRzLnJhZGlhbnNUb0RlZ3JlZXMgPSBleHBvcnRzLnBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UgPSBleHBvcnRzLmdldFZhbHVlRnJvbVByb2dyZXNzID0gZXhwb3J0cy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSA9IGV4cG9ydHMuZGlzdGFuY2UgPSBleHBvcnRzLmRpbGF0ZSA9IGV4cG9ydHMuZGVncmVlc1RvUmFkaWFucyA9IGV4cG9ydHMuYW5nbGUgPSB1bmRlZmluZWQ7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbi8qXG4gIENvbnZlcnQgbnVtYmVyIHRvIHggZGVjaW1hbCBwbGFjZXNcblxuICBAcGFyYW0gW251bWJlcl1cbiAgQHBhcmFtIFtudW1iZXJdXG4gIEByZXR1cm4gW251bWJlcl1cbiovXG52YXIgdG9EZWNpbWFsID0gZnVuY3Rpb24gKG51bSkge1xuICB2YXIgcHJlY2lzaW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAyO1xuXG4gIHByZWNpc2lvbiA9IE1hdGgucG93KDEwLCBwcmVjaXNpb24pO1xuICByZXR1cm4gTWF0aC5yb3VuZChudW0gKiBwcmVjaXNpb24pIC8gcHJlY2lzaW9uO1xufTtcblxudmFyIFpFUk9fUE9JTlQgPSB7XG4gIHg6IDAsXG4gIHk6IDAsXG4gIHo6IDBcbn07XG5cbnZhciBkaXN0YW5jZTFEID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgcmV0dXJuIE1hdGguYWJzKGEgLSBiKTtcbn07XG5cbi8qXG4gIEFuZ2xlIGJldHdlZW4gcG9pbnRzXG4gIFxuICBUcmFuc2xhdGVzIHRoZSBoeXBvdGhldGljYWwgbGluZSBzbyB0aGF0IHRoZSAnZnJvbScgY29vcmRpbmF0ZXNcbiAgYXJlIGF0IDAsMFxuICBcbiAgQHBhcmFtIFtvYmplY3RdOiBYIGFuZCBZIGNvb3JkaW5hdGVzIG9mIGZyb20gcG9pbnRcbiAgQHBhcmFtIFtvYmplY3RdOiBYIGFuZCBZIGNvcmRpbmF0ZXMgb2YgdG8gcG9pbnRcbiAgQHJldHVybiBbcmFkaWFuXTogQW5nbGUgYmV0d2VlbiB0aGUgdHdvIHBvaW50cyBpbiByYWRpYW5zXG4qL1xudmFyIGFuZ2xlID0gZXhwb3J0cy5hbmdsZSA9IGZ1bmN0aW9uIChhKSB7XG4gIHZhciBiID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBaRVJPX1BPSU5UO1xuICByZXR1cm4gcmFkaWFuc1RvRGVncmVlcyhNYXRoLmF0YW4yKGEueCAtIGIueCwgYS55IC0gYi55KSk7XG59O1xuXG4vKlxuICBDb252ZXJ0IGRlZ3JlZXMgdG8gcmFkaWFuc1xuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBpbiBkZWdyZWVzXG4gIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGluIHJhZGlhbnNcbiovXG52YXIgZGVncmVlc1RvUmFkaWFucyA9IGV4cG9ydHMuZGVncmVlc1RvUmFkaWFucyA9IGZ1bmN0aW9uIChkZWdyZWVzKSB7XG4gIHJldHVybiBkZWdyZWVzICogTWF0aC5QSSAvIDE4MDtcbn07XG5cbi8qXG4gIERpbGF0ZVxuICBcbiAgQ2hhbmdlIHRoZSBwcm9ncmVzc2lvbiBiZXR3ZWVuIGEgYW5kIGIgYWNjb3JkaW5nIHRvIGRpbGF0aW9uLlxuICBcbiAgU28gZGlsYXRpb24gPSAwLjUgd291bGQgY2hhbmdlXG4gIFxuICBhIC0tLS0tLS0tLSBiXG4gIFxuICB0b1xuICBcbiAgYSAtLS0tIGJcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogUHJldmlvdXMgdmFsdWVcbiAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gIEBwYXJhbSBbbnVtYmVyXTogRGlsYXRlIHByb2dyZXNzIGJ5IHhcbiAgQHJldHVybiBbbnVtYmVyXTogUHJldmlvdXMgdmFsdWUgcGx1cyB0aGUgZGlsYXRlZCBkaWZmZXJlbmNlXG4qL1xudmFyIGRpbGF0ZSA9IGV4cG9ydHMuZGlsYXRlID0gZnVuY3Rpb24gKGEsIGIsIGRpbGF0aW9uKSB7XG4gIHJldHVybiBhICsgKGIgLSBhKSAqIGRpbGF0aW9uO1xufTtcblxuLypcbiAgRGlzdGFuY2VcbiAgXG4gIFJldHVybnMgdGhlIGRpc3RhbmNlIGJldHdlZW4gdHdvIG4gZGltZW5zaW9uYWwgcG9pbnRzLlxuICBcbiAgQHBhcmFtIFtvYmplY3QvbnVtYmVyXTogeCBhbmQgeSBvciBqdXN0IHggb2YgcG9pbnQgQVxuICBAcGFyYW0gW29iamVjdC9udW1iZXJdOiAob3B0aW9uYWwpOiB4IGFuZCB5IG9yIGp1c3QgeCBvZiBwb2ludCBCXG4gIEByZXR1cm4gW251bWJlcl06IFRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzXG4qL1xudmFyIGRpc3RhbmNlID0gZXhwb3J0cy5kaXN0YW5jZSA9IGZ1bmN0aW9uIChhKSB7XG4gIHZhciBiID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBaRVJPX1BPSU5UO1xuXG4gIC8vIDFEIGRpbWVuc2lvbnNcbiAgaWYgKCgwLCBfdXRpbHMuaXNOdW0pKGEpKSB7XG4gICAgcmV0dXJuIGRpc3RhbmNlMUQoYSwgYik7XG5cbiAgICAvLyBNdWx0aS1kaW1lbnNpb25hbFxuICB9IGVsc2Uge1xuICAgIHZhciB4RGVsdGEgPSBkaXN0YW5jZTFEKGEueCwgYi54KTtcbiAgICB2YXIgeURlbHRhID0gZGlzdGFuY2UxRChhLnksIGIueSk7XG4gICAgdmFyIHpEZWx0YSA9ICgwLCBfdXRpbHMuaXNOdW0pKGEueikgPyBkaXN0YW5jZTFEKGEueiwgYi56KSA6IDA7XG5cbiAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHhEZWx0YSwgMikgKyBNYXRoLnBvdyh5RGVsdGEsIDIpICsgTWF0aC5wb3coekRlbHRhLCAyKSk7XG4gIH1cbn07XG5cbi8qXG4gIFByb2dyZXNzIHdpdGhpbiBnaXZlbiByYW5nZVxuICBcbiAgR2l2ZW4gYSBsb3dlciBsaW1pdCBhbmQgYW4gdXBwZXIgbGltaXQsIHdlIHJldHVybiB0aGUgcHJvZ3Jlc3NcbiAgKGV4cHJlc3NlZCBhcyBhIG51bWJlciAwLTEpIHJlcHJlc2VudGVkIGJ5IHRoZSBnaXZlbiB2YWx1ZSwgYW5kXG4gIGxpbWl0IHRoYXQgcHJvZ3Jlc3MgdG8gd2l0aGluIDAtMS5cbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgXG4gIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXRcbiAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSB0byBmaW5kIHByb2dyZXNzIHdpdGhpbiBnaXZlbiByYW5nZVxuICBAcmV0dXJuIFtudW1iZXJdOiBQcm9ncmVzcyBvZiB2YWx1ZSB3aXRoaW4gcmFuZ2UgYXMgZXhwcmVzc2VkIDAtMVxuKi9cbnZhciBnZXRQcm9ncmVzc0Zyb21WYWx1ZSA9IGV4cG9ydHMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUgPSBmdW5jdGlvbiAoZnJvbSwgdG8sIHZhbHVlKSB7XG4gIHJldHVybiAodmFsdWUgLSBmcm9tKSAvICh0byAtIGZyb20pO1xufTtcblxuLypcbiAgVmFsdWUgaW4gcmFuZ2UgZnJvbSBwcm9ncmVzc1xuICBcbiAgR2l2ZW4gYSBsb3dlciBsaW1pdCBhbmQgYW4gdXBwZXIgbGltaXQsIHdlIHJldHVybiB0aGUgdmFsdWUgd2l0aGluXG4gIHRoYXQgcmFuZ2UgYXMgZXhwcmVzc2VkIGJ5IHByb2dyZXNzIChhIG51bWJlciBmcm9tIDAtMSlcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgb2YgcmFuZ2VcbiAgQHBhcmFtIFtudW1iZXJdOiBVcHBlciBsaW1pdCBvZiByYW5nZVxuICBAcGFyYW0gW251bWJlcl06IFRoZSBwcm9ncmVzcyBiZXR3ZWVuIGxvd2VyIGFuZCB1cHBlciBsaW1pdHMgZXhwcmVzc2VkIDAtMVxuICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBhcyBjYWxjdWxhdGVkIGZyb20gcHJvZ3Jlc3Mgd2l0aGluIHJhbmdlIChub3QgbGltaXRlZCB3aXRoaW4gcmFuZ2UpXG4qL1xudmFyIGdldFZhbHVlRnJvbVByb2dyZXNzID0gZXhwb3J0cy5nZXRWYWx1ZUZyb21Qcm9ncmVzcyA9IGZ1bmN0aW9uIChmcm9tLCB0bywgcHJvZ3Jlc3MpIHtcbiAgcmV0dXJuIC1wcm9ncmVzcyAqIGZyb20gKyBwcm9ncmVzcyAqIHRvICsgZnJvbTtcbn07XG5cbi8qXG4gIFBvaW50IGZyb20gYW5nbGUgYW5kIGRpc3RhbmNlXG4gIFxuICBAcGFyYW0gW29iamVjdF06IDJEIHBvaW50IG9mIG9yaWdpblxuICBAcGFyYW0gW251bWJlcl06IEFuZ2xlIGZyb20gb3JpZ2luXG4gIEBwYXJhbSBbbnVtYmVyXTogRGlzdGFuY2UgZnJvbSBvcmlnaW5cbiAgQHJldHVybiBbb2JqZWN0XTogQ2FsY3VsYXRlZCAyRCBwb2ludFxuKi9cbnZhciBwb2ludEZyb21BbmdsZUFuZERpc3RhbmNlID0gZXhwb3J0cy5wb2ludEZyb21BbmdsZUFuZERpc3RhbmNlID0gZnVuY3Rpb24gKG9yaWdpbiwgYW5nbGUsIGRpc3RhbmNlKSB7XG4gIGFuZ2xlID0gZGVncmVlc1RvUmFkaWFucyhhbmdsZSk7XG5cbiAgcmV0dXJuIHtcbiAgICB4OiBkaXN0YW5jZSAqIE1hdGguY29zKGFuZ2xlKSArIG9yaWdpbi54LFxuICAgIHk6IGRpc3RhbmNlICogTWF0aC5zaW4oYW5nbGUpICsgb3JpZ2luLnlcbiAgfTtcbn07XG5cbi8qXG4gIENvbnZlcnQgcmFkaWFucyB0byBkZWdyZWVzXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFZhbHVlIGluIHJhZGlhbnNcbiAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgaW4gZGVncmVlc1xuKi9cbnZhciByYWRpYW5zVG9EZWdyZWVzID0gZXhwb3J0cy5yYWRpYW5zVG9EZWdyZWVzID0gZnVuY3Rpb24gKHJhZGlhbnMpIHtcbiAgcmV0dXJuIHJhZGlhbnMgKiAxODAgLyBNYXRoLlBJO1xufTtcblxuLypcbiAgRnJhbWVyYXRlLWluZGVwZW5kZW50IHNtb290aGluZ1xuXG4gIEBwYXJhbSBbbnVtYmVyXTogTmV3IHZhbHVlXG4gIEBwYXJhbSBbbnVtYmVyXTogT2xkIHZhbHVlXG4gIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb25cbiAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IFNtb290aGluZyAoMCBpcyBub25lKVxuKi9cbnZhciBzbW9vdGggPSBleHBvcnRzLnNtb290aCA9IGZ1bmN0aW9uIChuZXdWYWx1ZSwgb2xkVmFsdWUsIGR1cmF0aW9uKSB7XG4gIHZhciBzbW9vdGhpbmcgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IDA7XG4gIHJldHVybiB0b0RlY2ltYWwob2xkVmFsdWUgKyBkdXJhdGlvbiAqIChuZXdWYWx1ZSAtIG9sZFZhbHVlKSAvIE1hdGgubWF4KHNtb290aGluZywgZHVyYXRpb24pKTtcbn07XG5cbi8qXG4gIENvbnZlcnQgeCBwZXIgc2Vjb25kIHRvIHBlciBmcmFtZSB2ZWxvY2l0eSBiYXNlZCBvbiBmcHNcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogVW5pdCBwZXIgc2Vjb25kXG4gIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb24gaW4gbXNcbiovXG52YXIgc3BlZWRQZXJGcmFtZSA9IGV4cG9ydHMuc3BlZWRQZXJGcmFtZSA9IGZ1bmN0aW9uICh4cHMsIGZyYW1lRHVyYXRpb24pIHtcbiAgcmV0dXJuICgwLCBfdXRpbHMuaXNOdW0pKHhwcykgPyB4cHMgLyAoMTAwMCAvIGZyYW1lRHVyYXRpb24pIDogMDtcbn07XG5cbi8qXG4gIENvbnZlcnQgdmVsb2NpdHkgaW50byB2ZWxpY2l0eSBwZXIgc2Vjb25kXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFVuaXQgcGVyIGZyYW1lXG4gIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb24gaW4gbXNcbiovXG52YXIgc3BlZWRQZXJTZWNvbmQgPSBleHBvcnRzLnNwZWVkUGVyU2Vjb25kID0gZnVuY3Rpb24gKHZlbG9jaXR5LCBmcmFtZUR1cmF0aW9uKSB7XG4gIHJldHVybiB2ZWxvY2l0eSAqICgxMDAwIC8gZnJhbWVEdXJhdGlvbik7XG59O1xuXG4vKlxuICBDcmVhdGUgc3RlcHBlZCB2ZXJzaW9uIG9mIDAtMSBwcm9ncmVzc1xuICBcbiAgQHBhcmFtIFtpbnRdOiBOdW1iZXIgb2Ygc3RlcHNcbiAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gIEByZXR1cm4gW251bWJlcl06IFN0ZXBwZWQgdmFsdWVcbiovXG52YXIgc3RlcFByb2dyZXNzID0gZXhwb3J0cy5zdGVwUHJvZ3Jlc3MgPSBmdW5jdGlvbiAoc3RlcHMsIHByb2dyZXNzKSB7XG4gIHZhciBzZWdtZW50ID0gMSAvIChzdGVwcyAtIDEpO1xuICB2YXIgdGFyZ2V0ID0gMSAtIDEgLyBzdGVwcztcbiAgdmFyIHByb2dyZXNzT2ZUYXJnZXQgPSBNYXRoLm1pbihwcm9ncmVzcyAvIHRhcmdldCwgMSk7XG5cbiAgcmV0dXJuIE1hdGguZmxvb3IocHJvZ3Jlc3NPZlRhcmdldCAvIHNlZ21lbnQpICogc2VnbWVudDtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12WTJGc1l5NXFjeUpkTENKdVlXMWxjeUk2V3lKMGIwUmxZMmx0WVd3aUxDSnVkVzBpTENKd2NtVmphWE5wYjI0aUxDSk5ZWFJvSWl3aWNtOTFibVFpTENKYVJWSlBYMUJQU1U1VUlpd2llQ0lzSW5raUxDSjZJaXdpWkdsemRHRnVZMlV4UkNJc0ltRWlMQ0ppSWl3aVlXSnpJaXdpWVc1bmJHVWlMQ0p5WVdScFlXNXpWRzlFWldkeVpXVnpJaXdpWVhSaGJqSWlMQ0prWldkeVpXVnpWRzlTWVdScFlXNXpJaXdpWkdWbmNtVmxjeUlzSWxCSklpd2laR2xzWVhSbElpd2laR2xzWVhScGIyNGlMQ0prYVhOMFlXNWpaU0lzSW5oRVpXeDBZU0lzSW5sRVpXeDBZU0lzSW5wRVpXeDBZU0lzSW5OeGNuUWlMQ0puWlhSUWNtOW5jbVZ6YzBaeWIyMVdZV3gxWlNJc0ltWnliMjBpTENKMGJ5SXNJblpoYkhWbElpd2laMlYwVm1Gc2RXVkdjbTl0VUhKdlozSmxjM01pTENKd2NtOW5jbVZ6Y3lJc0luQnZhVzUwUm5KdmJVRnVaMnhsUVc1a1JHbHpkR0Z1WTJVaUxDSnZjbWxuYVc0aUxDSmpiM01pTENKemFXNGlMQ0p5WVdScFlXNXpJaXdpYzIxdmIzUm9JaXdpYm1WM1ZtRnNkV1VpTENKdmJHUldZV3gxWlNJc0ltUjFjbUYwYVc5dUlpd2ljMjF2YjNSb2FXNW5JaXdpYldGNElpd2ljM0JsWldSUVpYSkdjbUZ0WlNJc0luaHdjeUlzSW1aeVlXMWxSSFZ5WVhScGIyNGlMQ0p6Y0dWbFpGQmxjbE5sWTI5dVpDSXNJblpsYkc5amFYUjVJaXdpYzNSbGNGQnliMmR5WlhOeklpd2ljM1JsY0hNaUxDSnpaV2R0Wlc1MElpd2lkR0Z5WjJWMElpd2ljSEp2WjNKbGMzTlBabFJoY21kbGRDSXNJbTFwYmlJc0ltWnNiMjl5SWwwc0ltMWhjSEJwYm1keklqb2lPenM3T3p0QlFVRkJPenRCUVVWQk96czdPenM3TzBGQlQwRXNTVUZCVFVFc1dVRkJXU3hWUVVGRFF5eEhRVUZFTEVWQlFYZENPMEZCUVVFc1RVRkJiRUpETEZOQlFXdENMSFZGUVVGT0xFTkJRVTA3TzBGQlEzaERRU3gxUWtGQldTeEZRVUZhTEVWQlFXdENRU3hUUVVGc1FqdEJRVU5CTEZOQlFVOURMRXRCUVV0RExFdEJRVXdzUTBGQlYwZ3NUVUZCVFVNc1UwRkJha0lzU1VGQk9FSkJMRk5CUVhKRE8wRkJRMFFzUTBGSVJEczdRVUZMUVN4SlFVRk5SeXhoUVVGaE8wRkJRMnBDUXl4TFFVRkhMRU5CUkdNN1FVRkZha0pETEV0QlFVY3NRMEZHWXp0QlFVZHFRa01zUzBGQlJ6dEJRVWhqTEVOQlFXNUNPenRCUVUxQkxFbEJRVTFETEdGQlFXRXNWVUZCUTBNc1EwRkJSQ3hGUVVGSlF5eERRVUZLTzBGQlFVRXNVMEZCVlZJc1MwRkJTMU1zUjBGQlRDeERRVUZUUml4SlFVRkpReXhEUVVGaUxFTkJRVlk3UVVGQlFTeERRVUZ1UWpzN1FVRkZRVHM3T3pzN096czdPenRCUVZWUExFbEJRVTFGTEhkQ1FVRlJMRlZCUVVOSUxFTkJRVVE3UVVGQlFTeE5RVUZKUXl4RFFVRktMSFZGUVVGUlRpeFZRVUZTTzBGQlFVRXNVMEZCZFVKVExHbENRVUZwUWxnc1MwRkJTMWtzUzBGQlRDeERRVUZYVEN4RlFVRkZTaXhEUVVGR0xFZEJRVTFMTEVWQlFVVk1MRU5CUVc1Q0xFVkJRWE5DU1N4RlFVRkZTQ3hEUVVGR0xFZEJRVTFKTEVWQlFVVktMRU5CUVRsQ0xFTkJRV3BDTEVOQlFYWkNPMEZCUVVFc1EwRkJaRHM3UVVGRlVEczdPenM3TzBGQlRVOHNTVUZCVFZNc09FTkJRVzFDTEZWQlFVTkRMRTlCUVVRN1FVRkJRU3hUUVVGaFFTeFZRVUZWWkN4TFFVRkxaU3hGUVVGbUxFZEJRVzlDTEVkQlFXcERPMEZCUVVFc1EwRkJla0k3TzBGQlJWQTdPenM3T3pzN096czdPenM3T3pzN096dEJRV3RDVHl4SlFVRk5ReXd3UWtGQlV5eFZRVUZEVkN4RFFVRkVMRVZCUVVsRExFTkJRVW9zUlVGQlQxTXNVVUZCVUR0QlFVRkJMRk5CUVc5Q1ZpeEpRVUZMTEVOQlFVTkRMRWxCUVVsRUxFTkJRVXdzU1VGQlZWVXNVVUZCYmtNN1FVRkJRU3hEUVVGbU96dEJRVVZRT3pzN096czdPenM3UVVGVFR5eEpRVUZOUXl3NFFrRkJWeXhWUVVGRFdDeERRVUZFTEVWQlFYVkNPMEZCUVVFc1RVRkJia0pETEVOQlFXMUNMSFZGUVVGbVRpeFZRVUZsT3p0QlFVTTNRenRCUVVOQkxFMUJRVWtzYTBKQlFVMUxMRU5CUVU0c1EwRkJTaXhGUVVGak8wRkJRMW9zVjBGQlQwUXNWMEZCVjBNc1EwRkJXQ3hGUVVGalF5eERRVUZrTEVOQlFWQTdPMEZCUlVZN1FVRkRReXhIUVVwRUxFMUJTVTg3UVVGRFRDeFJRVUZOVnl4VFFVRlRZaXhYUVVGWFF5eEZRVUZGU2l4RFFVRmlMRVZCUVdkQ1N5eEZRVUZGVEN4RFFVRnNRaXhEUVVGbU8wRkJRMEVzVVVGQlRXbENMRk5CUVZOa0xGZEJRVmRETEVWQlFVVklMRU5CUVdJc1JVRkJaMEpKTEVWQlFVVktMRU5CUVd4Q0xFTkJRV1k3UVVGRFFTeFJRVUZOYVVJc1UwRkJWU3hyUWtGQlRXUXNSVUZCUlVZc1EwRkJVaXhEUVVGRUxFZEJRV1ZETEZkQlFWZERMRVZCUVVWR0xFTkJRV0lzUlVGQlowSkhMRVZCUVVWSUxFTkJRV3hDTEVOQlFXWXNSMEZCYzBNc1EwRkJja1E3TzBGQlJVRXNWMEZCVDB3c1MwRkJTM05DTEVsQlFVd3NRMEZCVlN4VFFVRkRTQ3hOUVVGRUxFVkJRVmNzUTBGQldDeGhRVUZwUWtNc1RVRkJha0lzUlVGQk1rSXNRMEZCTTBJc1lVRkJhVU5ETEUxQlFXcERMRVZCUVRKRExFTkJRVE5ETEVOQlFWWXNRMEZCVUR0QlFVTkVPMEZCUTBZc1EwRmlUVHM3UVVGbFVEczdPenM3T3pzN096czdPMEZCV1U4c1NVRkJUVVVzYzBSQlFYVkNMRlZCUVVORExFbEJRVVFzUlVGQlQwTXNSVUZCVUN4RlFVRlhReXhMUVVGWU8wRkJRVUVzVTBGQmNVSXNRMEZCUTBFc1VVRkJVVVlzU1VGQlZDeExRVUZyUWtNc1MwRkJTMFFzU1VGQmRrSXNRMEZCY2tJN1FVRkJRU3hEUVVFM1FqczdRVUZGVURzN096czdPenM3T3pzN1FVRlhUeXhKUVVGTlJ5eHpSRUZCZFVJc1ZVRkJRMGdzU1VGQlJDeEZRVUZQUXl4RlFVRlFMRVZCUVZkSExGRkJRVmc3UVVGQlFTeFRRVUY1UWl4RFFVRkZRU3hSUVVGR0xFZEJRV0ZLTEVsQlFXUXNSMEZCZFVKSkxGZEJRVmRJTEVWQlFXeERMRWRCUVhkRFJDeEpRVUZvUlR0QlFVRkJMRU5CUVRkQ096dEJRVVZRT3pzN096czdPenRCUVZGUExFbEJRVTFMTEdkRlFVRTBRaXhWUVVGRFF5eE5RVUZFTEVWQlFWTndRaXhMUVVGVUxFVkJRV2RDVVN4UlFVRm9RaXhGUVVFMlFqdEJRVU53UlZJc1ZVRkJVVWNzYVVKQlFXbENTQ3hMUVVGcVFpeERRVUZTT3p0QlFVVkJMRk5CUVU4N1FVRkRURkFzVDBGQlIyVXNWMEZCVjJ4Q0xFdEJRVXNyUWl4SFFVRk1MRU5CUVZOeVFpeExRVUZVTEVOQlFWZ3NSMEZCTmtKdlFpeFBRVUZQTTBJc1EwRkViRU03UVVGRlRFTXNUMEZCUjJNc1YwRkJWMnhDTEV0QlFVdG5ReXhIUVVGTUxFTkJRVk4wUWl4TFFVRlVMRU5CUVZnc1IwRkJOa0p2UWl4UFFVRlBNVUk3UVVGR2JFTXNSMEZCVUR0QlFVbEVMRU5CVUUwN08wRkJVMUE3T3pzN096dEJRVTFQTEVsQlFVMVBMRGhEUVVGdFFpeFZRVUZEYzBJc1QwRkJSRHRCUVVGQkxGTkJRV0ZCTEZWQlFWVXNSMEZCVml4SFFVRm5RbXBETEV0QlFVdGxMRVZCUVd4RE8wRkJRVUVzUTBGQmVrSTdPMEZCUlZBN096czdPenM3TzBGQlVVOHNTVUZCVFcxQ0xEQkNRVUZUTEZWQlFVTkRMRkZCUVVRc1JVRkJWME1zVVVGQldDeEZRVUZ4UWtNc1VVRkJja0k3UVVGQlFTeE5RVUVyUWtNc1UwRkJMMElzZFVWQlFUSkRMRU5CUVRORE8wRkJRVUVzVTBGQmFVUjZReXhWUVVGVmRVTXNWMEZCV1VNc1dVRkJXVVlzVjBGQlYwTXNVVUZCZGtJc1NVRkJiVU53UXl4TFFVRkxkVU1zUjBGQlRDeERRVUZUUkN4VFFVRlVMRVZCUVc5Q1JDeFJRVUZ3UWl4RFFVRjZSQ3hEUVVGcVJEdEJRVUZCTEVOQlFXWTdPMEZCUlZBN096czdPenRCUVUxUExFbEJRVTFITEhkRFFVRm5RaXhWUVVGRFF5eEhRVUZFTEVWQlFVMURMR0ZCUVU0N1FVRkJRU3hUUVVGNVFpeHJRa0ZCVFVRc1IwRkJUaXhEUVVGRUxFZEJRV1ZCTEU5QlFVOHNUMEZCVDBNc1lVRkJaQ3hEUVVGbUxFZEJRVGhETEVOQlFYUkZPMEZCUVVFc1EwRkJkRUk3TzBGQlJWQTdPenM3T3p0QlFVMVBMRWxCUVUxRExEQkRRVUZwUWl4VlFVRkRReXhSUVVGRUxFVkJRVmRHTEdGQlFWZzdRVUZCUVN4VFFVRTJRa1VzV1VGQldTeFBRVUZQUml4aFFVRnVRaXhEUVVFM1FqdEJRVUZCTEVOQlFYWkNPenRCUVVWUU96czdPenM3TzBGQlQwOHNTVUZCVFVjc2MwTkJRV1VzVlVGQlEwTXNTMEZCUkN4RlFVRlJiRUlzVVVGQlVpeEZRVUZ4UWp0QlFVTXZReXhOUVVGTmJVSXNWVUZCVlN4TFFVRkxSQ3hSUVVGUkxFTkJRV0lzUTBGQmFFSTdRVUZEUVN4TlFVRk5SU3hUUVVGVExFbEJRVXNzU1VGQlNVWXNTMEZCZUVJN1FVRkRRU3hOUVVGTlJ5eHRRa0ZCYlVKcVJDeExRVUZMYTBRc1IwRkJUQ3hEUVVGVGRFSXNWMEZCVjI5Q0xFMUJRWEJDTEVWQlFUUkNMRU5CUVRWQ0xFTkJRWHBDT3p0QlFVVkJMRk5CUVU5b1JDeExRVUZMYlVRc1MwRkJUQ3hEUVVGWFJpeHRRa0ZCYlVKR0xFOUJRVGxDTEVsQlFYbERRU3hQUVVGb1JEdEJRVU5FTEVOQlRrMGlMQ0ptYVd4bElqb2lZMkZzWXk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3SUdselRuVnRJSDBnWm5KdmJTQW5MaTkxZEdsc2N5YzdYRzVjYmk4cVhHNGdJRU52Ym5abGNuUWdiblZ0WW1WeUlIUnZJSGdnWkdWamFXMWhiQ0J3YkdGalpYTmNibHh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDFjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkWEc0Z0lFQnlaWFIxY200Z1cyNTFiV0psY2wxY2Jpb3ZYRzVqYjI1emRDQjBiMFJsWTJsdFlXd2dQU0FvYm5WdExDQndjbVZqYVhOcGIyNGdQU0F5S1NBOVBpQjdYRzRnSUhCeVpXTnBjMmx2YmlBOUlERXdJQ29xSUhCeVpXTnBjMmx2Ymp0Y2JpQWdjbVYwZFhKdUlFMWhkR2d1Y205MWJtUW9iblZ0SUNvZ2NISmxZMmx6YVc5dUtTQXZJSEJ5WldOcGMybHZianRjYm4wN1hHNWNibU52Ym5OMElGcEZVazlmVUU5SlRsUWdQU0I3WEc0Z0lIZzZJREFzWEc0Z0lIazZJREFzWEc0Z0lIbzZJREJjYm4wN1hHNWNibU52Ym5OMElHUnBjM1JoYm1ObE1VUWdQU0FvWVN3Z1lpa2dQVDRnVFdGMGFDNWhZbk1vWVNBdElHSXBPMXh1WEc0dktseHVJQ0JCYm1kc1pTQmlaWFIzWldWdUlIQnZhVzUwYzF4dUlDQmNiaUFnVkhKaGJuTnNZWFJsY3lCMGFHVWdhSGx3YjNSb1pYUnBZMkZzSUd4cGJtVWdjMjhnZEdoaGRDQjBhR1VnSjJaeWIyMG5JR052YjNKa2FXNWhkR1Z6WEc0Z0lHRnlaU0JoZENBd0xEQmNiaUFnWEc0Z0lFQndZWEpoYlNCYmIySnFaV04wWFRvZ1dDQmhibVFnV1NCamIyOXlaR2x1WVhSbGN5QnZaaUJtY205dElIQnZhVzUwWEc0Z0lFQndZWEpoYlNCYmIySnFaV04wWFRvZ1dDQmhibVFnV1NCamIzSmthVzVoZEdWeklHOW1JSFJ2SUhCdmFXNTBYRzRnSUVCeVpYUjFjbTRnVzNKaFpHbGhibDA2SUVGdVoyeGxJR0psZEhkbFpXNGdkR2hsSUhSM2J5QndiMmx1ZEhNZ2FXNGdjbUZrYVdGdWMxeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQmhibWRzWlNBOUlDaGhMQ0JpSUQwZ1drVlNUMTlRVDBsT1ZDa2dQVDRnY21Ga2FXRnVjMVJ2UkdWbmNtVmxjeWhOWVhSb0xtRjBZVzR5S0dFdWVDQXRJR0l1ZUN3Z1lTNTVJQzBnWWk1NUtTazdYRzVjYmk4cVhHNGdJRU52Ym5abGNuUWdaR1ZuY21WbGN5QjBieUJ5WVdScFlXNXpYRzRnSUZ4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklGWmhiSFZsSUdsdUlHUmxaM0psWlhOY2JpQWdRSEpsZEhWeWJpQmJiblZ0WW1WeVhUb2dWbUZzZFdVZ2FXNGdjbUZrYVdGdWMxeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQmtaV2R5WldWelZHOVNZV1JwWVc1eklEMGdLR1JsWjNKbFpYTXBJRDArSUdSbFozSmxaWE1nS2lCTllYUm9MbEJKSUM4Z01UZ3dPMXh1WEc0dktseHVJQ0JFYVd4aGRHVmNiaUFnWEc0Z0lFTm9ZVzVuWlNCMGFHVWdjSEp2WjNKbGMzTnBiMjRnWW1WMGQyVmxiaUJoSUdGdVpDQmlJR0ZqWTI5eVpHbHVaeUIwYnlCa2FXeGhkR2x2Ymk1Y2JpQWdYRzRnSUZOdklHUnBiR0YwYVc5dUlEMGdNQzQxSUhkdmRXeGtJR05vWVc1blpWeHVJQ0JjYmlBZ1lTQXRMUzB0TFMwdExTMGdZbHh1SUNCY2JpQWdkRzljYmlBZ1hHNGdJR0VnTFMwdExTQmlYRzRnSUZ4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklGQnlaWFpwYjNWeklIWmhiSFZsWEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1EzVnljbVZ1ZENCMllXeDFaVnh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUVScGJHRjBaU0J3Y205bmNtVnpjeUJpZVNCNFhHNGdJRUJ5WlhSMWNtNGdXMjUxYldKbGNsMDZJRkJ5WlhacGIzVnpJSFpoYkhWbElIQnNkWE1nZEdobElHUnBiR0YwWldRZ1pHbG1abVZ5Wlc1alpWeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQmthV3hoZEdVZ1BTQW9ZU3dnWWl3Z1pHbHNZWFJwYjI0cElEMCtJR0VnS3lBb0tHSWdMU0JoS1NBcUlHUnBiR0YwYVc5dUtUdGNibHh1THlwY2JpQWdSR2x6ZEdGdVkyVmNiaUFnWEc0Z0lGSmxkSFZ5Ym5NZ2RHaGxJR1JwYzNSaGJtTmxJR0psZEhkbFpXNGdkSGR2SUc0Z1pHbHRaVzV6YVc5dVlXd2djRzlwYm5SekxseHVJQ0JjYmlBZ1FIQmhjbUZ0SUZ0dlltcGxZM1F2Ym5WdFltVnlYVG9nZUNCaGJtUWdlU0J2Y2lCcWRYTjBJSGdnYjJZZ2NHOXBiblFnUVZ4dUlDQkFjR0Z5WVcwZ1cyOWlhbVZqZEM5dWRXMWlaWEpkT2lBb2IzQjBhVzl1WVd3cE9pQjRJR0Z1WkNCNUlHOXlJR3AxYzNRZ2VDQnZaaUJ3YjJsdWRDQkNYRzRnSUVCeVpYUjFjbTRnVzI1MWJXSmxjbDA2SUZSb1pTQmthWE4wWVc1alpTQmlaWFIzWldWdUlIUm9aU0IwZDI4Z2NHOXBiblJ6WEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdScGMzUmhibU5sSUQwZ0tHRXNJR0lnUFNCYVJWSlBYMUJQU1U1VUtTQTlQaUI3WEc0Z0lDOHZJREZFSUdScGJXVnVjMmx2Ym5OY2JpQWdhV1lnS0dselRuVnRLR0VwS1NCN1hHNGdJQ0FnY21WMGRYSnVJR1JwYzNSaGJtTmxNVVFvWVN3Z1lpazdYRzVjYmlBZ0x5OGdUWFZzZEdrdFpHbHRaVzV6YVc5dVlXeGNiaUFnZlNCbGJITmxJSHRjYmlBZ0lDQmpiMjV6ZENCNFJHVnNkR0VnUFNCa2FYTjBZVzVqWlRGRUtHRXVlQ3dnWWk1NEtUdGNiaUFnSUNCamIyNXpkQ0I1UkdWc2RHRWdQU0JrYVhOMFlXNWpaVEZFS0dFdWVTd2dZaTU1S1R0Y2JpQWdJQ0JqYjI1emRDQjZSR1ZzZEdFZ1BTQW9hWE5PZFcwb1lTNTZLU2tnUHlCa2FYTjBZVzVqWlRGRUtHRXVlaXdnWWk1NktTQTZJREE3WEc1Y2JpQWdJQ0J5WlhSMWNtNGdUV0YwYUM1emNYSjBLQ2g0UkdWc2RHRWdLaW9nTWlrZ0t5QW9lVVJsYkhSaElDb3FJRElwSUNzZ0tIcEVaV3gwWVNBcUtpQXlLU2s3WEc0Z0lIMWNibjA3WEc1Y2JpOHFYRzRnSUZCeWIyZHlaWE56SUhkcGRHaHBiaUJuYVhabGJpQnlZVzVuWlZ4dUlDQmNiaUFnUjJsMlpXNGdZU0JzYjNkbGNpQnNhVzFwZENCaGJtUWdZVzRnZFhCd1pYSWdiR2x0YVhRc0lIZGxJSEpsZEhWeWJpQjBhR1VnY0hKdlozSmxjM05jYmlBZ0tHVjRjSEpsYzNObFpDQmhjeUJoSUc1MWJXSmxjaUF3TFRFcElISmxjSEpsYzJWdWRHVmtJR0o1SUhSb1pTQm5hWFpsYmlCMllXeDFaU3dnWVc1a1hHNGdJR3hwYldsMElIUm9ZWFFnY0hKdlozSmxjM01nZEc4Z2QybDBhR2x1SURBdE1TNWNiaUFnWEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1RHOTNaWElnYkdsdGFYUWdYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVlhCd1pYSWdiR2x0YVhSY2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQldZV3gxWlNCMGJ5Qm1hVzVrSUhCeWIyZHlaWE56SUhkcGRHaHBiaUJuYVhabGJpQnlZVzVuWlZ4dUlDQkFjbVYwZFhKdUlGdHVkVzFpWlhKZE9pQlFjbTluY21WemN5QnZaaUIyWVd4MVpTQjNhWFJvYVc0Z2NtRnVaMlVnWVhNZ1pYaHdjbVZ6YzJWa0lEQXRNVnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JuWlhSUWNtOW5jbVZ6YzBaeWIyMVdZV3gxWlNBOUlDaG1jbTl0TENCMGJ5d2dkbUZzZFdVcElEMCtJQ2gyWVd4MVpTQXRJR1p5YjIwcElDOGdLSFJ2SUMwZ1puSnZiU2s3WEc1Y2JpOHFYRzRnSUZaaGJIVmxJR2x1SUhKaGJtZGxJR1p5YjIwZ2NISnZaM0psYzNOY2JpQWdYRzRnSUVkcGRtVnVJR0VnYkc5M1pYSWdiR2x0YVhRZ1lXNWtJR0Z1SUhWd2NHVnlJR3hwYldsMExDQjNaU0J5WlhSMWNtNGdkR2hsSUhaaGJIVmxJSGRwZEdocGJseHVJQ0IwYUdGMElISmhibWRsSUdGeklHVjRjSEpsYzNObFpDQmllU0J3Y205bmNtVnpjeUFvWVNCdWRXMWlaWElnWm5KdmJTQXdMVEVwWEc0Z0lGeHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRXh2ZDJWeUlHeHBiV2wwSUc5bUlISmhibWRsWEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1ZYQndaWElnYkdsdGFYUWdiMllnY21GdVoyVmNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJVYUdVZ2NISnZaM0psYzNNZ1ltVjBkMlZsYmlCc2IzZGxjaUJoYm1RZ2RYQndaWElnYkdsdGFYUnpJR1Y0Y0hKbGMzTmxaQ0F3TFRGY2JpQWdRSEpsZEhWeWJpQmJiblZ0WW1WeVhUb2dWbUZzZFdVZ1lYTWdZMkZzWTNWc1lYUmxaQ0JtY205dElIQnliMmR5WlhOeklIZHBkR2hwYmlCeVlXNW5aU0FvYm05MElHeHBiV2wwWldRZ2QybDBhR2x1SUhKaGJtZGxLVnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JuWlhSV1lXeDFaVVp5YjIxUWNtOW5jbVZ6Y3lBOUlDaG1jbTl0TENCMGJ5d2djSEp2WjNKbGMzTXBJRDArSUNndElIQnliMmR5WlhOeklDb2dabkp2YlNrZ0t5QW9jSEp2WjNKbGMzTWdLaUIwYnlrZ0t5Qm1jbTl0TzF4dVhHNHZLbHh1SUNCUWIybHVkQ0JtY205dElHRnVaMnhsSUdGdVpDQmthWE4wWVc1alpWeHVJQ0JjYmlBZ1FIQmhjbUZ0SUZ0dlltcGxZM1JkT2lBeVJDQndiMmx1ZENCdlppQnZjbWxuYVc1Y2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQkJibWRzWlNCbWNtOXRJRzl5YVdkcGJseHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRVJwYzNSaGJtTmxJR1p5YjIwZ2IzSnBaMmx1WEc0Z0lFQnlaWFIxY200Z1cyOWlhbVZqZEYwNklFTmhiR04xYkdGMFpXUWdNa1FnY0c5cGJuUmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdjRzlwYm5SR2NtOXRRVzVuYkdWQmJtUkVhWE4wWVc1alpTQTlJQ2h2Y21sbmFXNHNJR0Z1WjJ4bExDQmthWE4wWVc1alpTa2dQVDRnZTF4dUlDQmhibWRzWlNBOUlHUmxaM0psWlhOVWIxSmhaR2xoYm5Nb1lXNW5iR1VwTzF4dVhHNGdJSEpsZEhWeWJpQjdYRzRnSUNBZ2VEb2daR2x6ZEdGdVkyVWdLaUJOWVhSb0xtTnZjeWhoYm1kc1pTa2dLeUJ2Y21sbmFXNHVlQ3hjYmlBZ0lDQjVPaUJrYVhOMFlXNWpaU0FxSUUxaGRHZ3VjMmx1S0dGdVoyeGxLU0FySUc5eWFXZHBiaTU1WEc0Z0lIMDdYRzU5TzF4dVhHNHZLbHh1SUNCRGIyNTJaWEowSUhKaFpHbGhibk1nZEc4Z1pHVm5jbVZsYzF4dUlDQmNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJXWVd4MVpTQnBiaUJ5WVdScFlXNXpYRzRnSUVCeVpYUjFjbTRnVzI1MWJXSmxjbDA2SUZaaGJIVmxJR2x1SUdSbFozSmxaWE5jYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnY21Ga2FXRnVjMVJ2UkdWbmNtVmxjeUE5SUNoeVlXUnBZVzV6S1NBOVBpQnlZV1JwWVc1eklDb2dNVGd3SUM4Z1RXRjBhQzVRU1R0Y2JseHVMeXBjYmlBZ1JuSmhiV1Z5WVhSbExXbHVaR1Z3Wlc1a1pXNTBJSE50YjI5MGFHbHVaMXh1WEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1RtVjNJSFpoYkhWbFhHNGdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dUMnhrSUhaaGJIVmxYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nUm5KaGJXVWdaSFZ5WVhScGIyNWNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRJQ2h2Y0hScGIyNWhiQ2s2SUZOdGIyOTBhR2x1WnlBb01DQnBjeUJ1YjI1bEtWeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnpiVzl2ZEdnZ1BTQW9ibVYzVm1Gc2RXVXNJRzlzWkZaaGJIVmxMQ0JrZFhKaGRHbHZiaXdnYzIxdmIzUm9hVzVuSUQwZ01Da2dQVDRnZEc5RVpXTnBiV0ZzS0c5c1pGWmhiSFZsSUNzZ0tHUjFjbUYwYVc5dUlDb2dLRzVsZDFaaGJIVmxJQzBnYjJ4a1ZtRnNkV1VwSUM4Z1RXRjBhQzV0WVhnb2MyMXZiM1JvYVc1bkxDQmtkWEpoZEdsdmJpa3BLVHRjYmx4dUx5cGNiaUFnUTI5dWRtVnlkQ0I0SUhCbGNpQnpaV052Ym1RZ2RHOGdjR1Z5SUdaeVlXMWxJSFpsYkc5amFYUjVJR0poYzJWa0lHOXVJR1p3YzF4dUlDQmNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJWYm1sMElIQmxjaUJ6WldOdmJtUmNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJHY21GdFpTQmtkWEpoZEdsdmJpQnBiaUJ0YzF4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCemNHVmxaRkJsY2taeVlXMWxJRDBnS0hod2N5d2dabkpoYldWRWRYSmhkR2x2YmlrZ1BUNGdLR2x6VG5WdEtIaHdjeWtwSUQ4Z2VIQnpJQzhnS0RFd01EQWdMeUJtY21GdFpVUjFjbUYwYVc5dUtTQTZJREE3WEc1Y2JpOHFYRzRnSUVOdmJuWmxjblFnZG1Wc2IyTnBkSGtnYVc1MGJ5QjJaV3hwWTJsMGVTQndaWElnYzJWamIyNWtYRzRnSUZ4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklGVnVhWFFnY0dWeUlHWnlZVzFsWEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1JuSmhiV1VnWkhWeVlYUnBiMjRnYVc0Z2JYTmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdjM0JsWldSUVpYSlRaV052Ym1RZ1BTQW9kbVZzYjJOcGRIa3NJR1p5WVcxbFJIVnlZWFJwYjI0cElEMCtJSFpsYkc5amFYUjVJQ29nS0RFd01EQWdMeUJtY21GdFpVUjFjbUYwYVc5dUtUdGNibHh1THlwY2JpQWdRM0psWVhSbElITjBaWEJ3WldRZ2RtVnljMmx2YmlCdlppQXdMVEVnY0hKdlozSmxjM05jYmlBZ1hHNGdJRUJ3WVhKaGJTQmJhVzUwWFRvZ1RuVnRZbVZ5SUc5bUlITjBaWEJ6WEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1EzVnljbVZ1ZENCMllXeDFaVnh1SUNCQWNtVjBkWEp1SUZ0dWRXMWlaWEpkT2lCVGRHVndjR1ZrSUhaaGJIVmxYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJSE4wWlhCUWNtOW5jbVZ6Y3lBOUlDaHpkR1Z3Y3l3Z2NISnZaM0psYzNNcElEMCtJSHRjYmlBZ1kyOXVjM1FnYzJWbmJXVnVkQ0E5SURFZ0x5QW9jM1JsY0hNZ0xTQXhLVHRjYmlBZ1kyOXVjM1FnZEdGeVoyVjBJRDBnTVNBdElDZ3hJQzhnYzNSbGNITXBPMXh1SUNCamIyNXpkQ0J3Y205bmNtVnpjMDltVkdGeVoyVjBJRDBnVFdGMGFDNXRhVzRvY0hKdlozSmxjM01nTHlCMFlYSm5aWFFzSURFcE8xeHVYRzRnSUhKbGRIVnliaUJOWVhSb0xtWnNiMjl5S0hCeWIyZHlaWE56VDJaVVlYSm5aWFFnTHlCelpXZHRaVzUwS1NBcUlITmxaMjFsYm5RN1hHNTlPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL2NhbGMuanNcbiAqKiBtb2R1bGUgaWQgPSAyM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5nZXRDb2xvclZhbHVlcyA9IGV4cG9ydHMuZmluZFZhbHVlQW5kVW5pdCA9IGV4cG9ydHMuY3JlYXRlVW5pdFR5cGUgPSBleHBvcnRzLmlzRmlyc3RDaGFycyA9IGV4cG9ydHMuY29udGFpbnMgPSBleHBvcnRzLnNwbGl0Q29tbWFEZWxpbWl0ZWQgPSBleHBvcnRzLnNldERPTUF0dHJzID0gZXhwb3J0cy5pc1N0cmluZyA9IGV4cG9ydHMuaXNPYmogPSBleHBvcnRzLmlzTnVtID0gZXhwb3J0cy5pc0Z1bmMgPSBleHBvcnRzLmlzQXJyYXkgPSBleHBvcnRzLmhhc1Byb3BlcnR5ID0gZXhwb3J0cy5jdXJyZW50VGltZSA9IGV4cG9ydHMuY2FtZWxUb0Rhc2ggPSB1bmRlZmluZWQ7XG5leHBvcnRzLnNwbGl0Q29sb3JWYWx1ZXMgPSBzcGxpdENvbG9yVmFsdWVzO1xuXG52YXIgX3RyYW5zZm9ybWVycyA9IHJlcXVpcmUoJy4vdHJhbnNmb3JtZXJzJyk7XG5cbnZhciBDQU1FTF9DQVNFX1BBVFRFUk4gPSAvKFthLXpdKShbQS1aXSkvZztcbnZhciBSRVBMQUNFX1RFTVBMQVRFID0gJyQxLSQyJztcbnZhciBIQVNfUEVSRk9STUFOQ0VfTk9XID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJyAmJiBwZXJmb3JtYW5jZS5ub3c7XG5cbi8qXG4gIEdldCB2YXIgdHlwZSBhcyBzdHJpbmdcbiAgXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtzdHJpbmddOiBSZXR1cm5zLCBmb3IgaW5zdGFuY2UgJ09iamVjdCcgaWYgW29iamVjdCBPYmplY3RdXG4qL1xudmFyIHZhclR5cGUgPSBmdW5jdGlvbiAodmFyaWFibGUpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YXJpYWJsZSkuc2xpY2UoOCwgLTEpO1xufTtcblxuLypcbiAgQ29udmVydCBjYW1lbENhc2UgdG8gZGFzaC1jYXNlXG5cbiAgQHBhcmFtIFtzdHJpbmddXG4gIEByZXR1cm4gW3N0cmluZ11cbiovXG52YXIgY2FtZWxUb0Rhc2ggPSBleHBvcnRzLmNhbWVsVG9EYXNoID0gZnVuY3Rpb24gKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoQ0FNRUxfQ0FTRV9QQVRURVJOLCBSRVBMQUNFX1RFTVBMQVRFKS50b0xvd2VyQ2FzZSgpO1xufTtcblxuLypcbiAgR2VuZXJhdGUgY3VycmVudCB0aW1lc3RhbXBcbiAgXG4gIEByZXR1cm4gW3RpbWVzdGFtcF06IEN1cnJlbnQgVU5JWCB0aW1lc3RhbXBcbiovXG52YXIgY3VycmVudFRpbWUgPSBleHBvcnRzLmN1cnJlbnRUaW1lID0gSEFTX1BFUkZPUk1BTkNFX05PVyA/IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHBlcmZvcm1hbmNlLm5vdygpO1xufSA6IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xufTtcblxuLypcbiAgQ2hlY2sgaWYgb2JqZWN0IGhhcyBwcm9wZXJ0eSBhbmQgaXQgaXNuJ3QgdW5kZWZpbmVkXG5cbiAgQHBhcmFtIFtvYmplY3RdXG4gIEBwYXJhbSBbc3RyaW5nXVxuICBAcmV0dXJuIFtib29sZWFuXVxuKi9cbnZhciBoYXNQcm9wZXJ0eSA9IGV4cG9ydHMuaGFzUHJvcGVydHkgPSBmdW5jdGlvbiAob2JqZWN0LCBwcm9wZXJ0eU5hbWUpIHtcbiAgcmV0dXJuIG9iamVjdC5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eU5hbWUpICYmIG9iamVjdFtwcm9wZXJ0eU5hbWVdICE9PSB1bmRlZmluZWQ7XG59O1xuXG4vKlxuICBJcyB1dGlscyB2YXIgYW4gYXJyYXkgPyBcbiAgXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHV0aWxzLnZhclR5cGUgPT09ICdBcnJheSdcbiovXG52YXIgaXNBcnJheSA9IGV4cG9ydHMuaXNBcnJheSA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgcmV0dXJuIHZhclR5cGUoYXJyKSA9PT0gJ0FycmF5Jztcbn07XG5cbi8qXG4gIElzIHV0aWxzIHZhciBhIGZ1bmN0aW9uID8gXG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB1dGlscy52YXJUeXBlID09PSAnRnVuY3Rpb24nXG4qL1xudmFyIGlzRnVuYyA9IGV4cG9ydHMuaXNGdW5jID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdmFyVHlwZShvYmopID09PSAnRnVuY3Rpb24nO1xufTtcblxuLypcbiAgSXMgdXRpbHMgdmFyIGEgbnVtYmVyP1xuICBcbiAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mID09PSAnbnVtYmVyJ1xuKi9cbnZhciBpc051bSA9IGV4cG9ydHMuaXNOdW0gPSBmdW5jdGlvbiAobnVtKSB7XG4gIHJldHVybiB0eXBlb2YgbnVtID09PSAnbnVtYmVyJztcbn07XG5cbi8qXG4gIElzIHV0aWxzIHZhciBhbiBvYmplY3Q/XG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2YgPT09ICdvYmplY3QnXG4qL1xudmFyIGlzT2JqID0gZXhwb3J0cy5pc09iaiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdvYmplY3QnO1xufTtcblxuLypcbiAgSXMgdXRpbHMgdmFyIGEgc3RyaW5nID8gXG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJ1xuKi9cbnZhciBpc1N0cmluZyA9IGV4cG9ydHMuaXNTdHJpbmcgPSBmdW5jdGlvbiAoc3RyKSB7XG4gIHJldHVybiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJztcbn07XG5cbnZhciBzZXRET01BdHRycyA9IGV4cG9ydHMuc2V0RE9NQXR0cnMgPSBmdW5jdGlvbiAoZWxlbWVudCwgYXR0cnMpIHtcbiAgZm9yICh2YXIga2V5IGluIGF0dHJzKSB7XG4gICAgaWYgKGF0dHJzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG4gICAgfVxuICB9XG59O1xuLypcbiAgU3BsaXQgY29tbWEtZGVsaW1pdGVkIHN0cmluZ1xuXG4gIFwiZm9vLGJhclwiIC0+IFtcImZvb1wiLCBcImJhclwiXVxuXG4gIEBwYXJhbSBbc3RyaW5nXVxuICBAcmV0dXJuIFthcnJheV1cbiovXG52YXIgc3BsaXRDb21tYURlbGltaXRlZCA9IGV4cG9ydHMuc3BsaXRDb21tYURlbGltaXRlZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gaXNTdHJpbmcodmFsdWUpID8gdmFsdWUuc3BsaXQoLyxcXHMqLykgOiBbdmFsdWVdO1xufTtcblxuLyoqXG4gKiAgUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBjaGVjayBhbnkgYXJndW1lbnQgZm9yIGB0ZXJtYFxuICogYGNvbnRhaW5zKCduZWVkbGUnKSgnaGF5c3RhY2snKWBcbiAqL1xudmFyIGNvbnRhaW5zID0gZXhwb3J0cy5jb250YWlucyA9IGZ1bmN0aW9uICh0ZXJtKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiBpc1N0cmluZyh0ZXJtKSAmJiB2LmluZGV4T2YodGVybSkgIT09IC0xO1xuICB9O1xufTtcblxuLyoqXG4gKiAgUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBjaGVjayB0byBzZWUgaWYgYW4gYXJndW1lbnQgaXNcbiAqICB0aGUgZmlyc3QgY2hhcmFjdGVycyBpbiB0aGUgcHJvdmlkZWQgYHRlcm1gXG4gKiBgaXNGaXJzdENoYXJzKCduZWVkbGUnKSgnaGF5c3RhY2snKWBcbiAqL1xudmFyIGlzRmlyc3RDaGFycyA9IGV4cG9ydHMuaXNGaXJzdENoYXJzID0gZnVuY3Rpb24gKHRlcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRlcm0pICYmIHYuaW5kZXhPZih0ZXJtKSA9PT0gMDtcbiAgfTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIGEgdW5pdCB2YWx1ZSB0eXBlXG4gKi9cbnZhciBjcmVhdGVVbml0VHlwZSA9IGV4cG9ydHMuY3JlYXRlVW5pdFR5cGUgPSBmdW5jdGlvbiAodHlwZSkge1xuICByZXR1cm4ge1xuICAgIHRlc3Q6IGNvbnRhaW5zKHR5cGUpLFxuICAgIHBhcnNlOiBwYXJzZUZsb2F0LFxuICAgIHRyYW5zZm9ybTogKDAsIF90cmFuc2Zvcm1lcnMuYXBwZW5kVW5pdCkodHlwZSlcbiAgfTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBzcGxpdCBjb2xvclxuICogdmFsdWVzIGZyb20gc3RyaW5nIGludG8gYW4gb2JqZWN0IG9mIHByb3BlcnRpZXNcbiAqIGBzcGxpdENvbG9yVmFsdWVzKFsnUmVkJywgJ0dyZWVuJywgJ0JsdWUnXSkoJ3JnYmEoMCwwLDApJylgXG4gKi9cbmZ1bmN0aW9uIHNwbGl0Q29sb3JWYWx1ZXModGVybXMpIHtcbiAgdmFyIG51bVRlcm1zID0gdGVybXMubGVuZ3RoO1xuXG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHZhciB2YWx1ZXMgPSB7fTtcbiAgICB2YXIgdmFsdWVzQXJyYXkgPSBzcGxpdENvbW1hRGVsaW1pdGVkKGdldFZhbHVlRnJvbUZ1bmN0aW9uU3RyaW5nKHYpKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtVGVybXM7IGkrKykge1xuICAgICAgdmFsdWVzW3Rlcm1zW2ldXSA9IHZhbHVlc0FycmF5W2ldICE9PSB1bmRlZmluZWQgPyBwYXJzZUZsb2F0KHZhbHVlc0FycmF5W2ldKSA6IDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfTtcbn1cblxuLypcbiAgU3BsaXQgYSB2YWx1ZSBpbnRvIGEgdmFsdWUvdW5pdCBvYmplY3RcbiAgXG4gICAgXCIyMDBweFwiIC0+IHsgdmFsdWU6IDIwMCwgdW5pdDogXCJweFwiIH1cbiAgICBcbiAgQHBhcmFtIFtzdHJpbmddOiBWYWx1ZSB0byBzcGxpdFxuICBAcmV0dXJuIFtvYmplY3RdOiBPYmplY3Qgd2l0aCB2YWx1ZSBhbmQgdW5pdCBwcm9wc1xuKi9cbnZhciBmaW5kVmFsdWVBbmRVbml0ID0gZXhwb3J0cy5maW5kVmFsdWVBbmRVbml0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIGlmICh2YWx1ZS5tYXRjaCkge1xuICAgIHZhciBzcGxpdFZhbHVlID0gdmFsdWUubWF0Y2goLygtP1xcZCpcXC4/XFxkKikoLiopLyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHBhcnNlRmxvYXQoc3BsaXRWYWx1ZVsxXSksXG4gICAgICB1bml0OiBzcGxpdFZhbHVlWzJdXG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdmFsdWUgfTtcbiAgfVxufTtcblxuLypcbiAgU3BsaXQgY29sb3Igc3RyaW5nIGludG8gbWFwIG9mIGNvbG9yIHByb3BlcnRpZXNcblxuICBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMClcIiwgW1wiUmVkXCIsICdHcmVlblwiLCBcIkJsdWVcIiwgXCJBbHBoYVwiXVxuXG4gIHsgUmVkOiAyNTUuLi4gfVxuKi9cbnZhciBnZXRDb2xvclZhbHVlcyA9IGV4cG9ydHMuZ2V0Q29sb3JWYWx1ZXMgPSBmdW5jdGlvbiAodmFsdWUsIGNvbG9yVGVybXMpIHtcbiAgdmFyIG51bUNvbG9yVGVybXMgPSBjb2xvclRlcm1zLmxlbmd0aDtcbiAgdmFyIGNvbG9yVmFsdWVzID0ge307XG4gIHZhciBjb2xvcnMgPSBzcGxpdENvbW1hRGVsaW1pdGVkKGdldFZhbHVlRnJvbUZ1bmN0aW9uU3RyaW5nKHZhbHVlKSk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1Db2xvclRlcm1zOyBpKyspIHtcbiAgICBjb2xvclZhbHVlc1tjb2xvclRlcm1zW2ldXSA9IGNvbG9yc1tpXSAhPT0gdW5kZWZpbmVkID8gY29sb3JzW2ldIDogMTtcbiAgfVxuXG4gIHJldHVybiBjb2xvclZhbHVlcztcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12ZFhScGJITXVhbk1pWFN3aWJtRnRaWE1pT2xzaWMzQnNhWFJEYjJ4dmNsWmhiSFZsY3lJc0lrTkJUVVZNWDBOQlUwVmZVRUZVVkVWU1RpSXNJbEpGVUV4QlEwVmZWRVZOVUV4QlZFVWlMQ0pJUVZOZlVFVlNSazlTVFVGT1EwVmZUazlYSWl3aWNHVnlabTl5YldGdVkyVWlMQ0p1YjNjaUxDSjJZWEpVZVhCbElpd2lkbUZ5YVdGaWJHVWlMQ0pQWW1wbFkzUWlMQ0p3Y205MGIzUjVjR1VpTENKMGIxTjBjbWx1WnlJc0ltTmhiR3dpTENKemJHbGpaU0lzSW1OaGJXVnNWRzlFWVhOb0lpd2ljM1J5YVc1bklpd2ljbVZ3YkdGalpTSXNJblJ2VEc5M1pYSkRZWE5sSWl3aVkzVnljbVZ1ZEZScGJXVWlMQ0pFWVhSbElpd2laMlYwVkdsdFpTSXNJbWhoYzFCeWIzQmxjblI1SWl3aWIySnFaV04wSWl3aWNISnZjR1Z5ZEhsT1lXMWxJaXdpYUdGelQzZHVVSEp2Y0dWeWRIa2lMQ0oxYm1SbFptbHVaV1FpTENKcGMwRnljbUY1SWl3aVlYSnlJaXdpYVhOR2RXNWpJaXdpYjJKcUlpd2lhWE5PZFcwaUxDSnVkVzBpTENKcGMwOWlhaUlzSW1selUzUnlhVzVuSWl3aWMzUnlJaXdpYzJWMFJFOU5RWFIwY25NaUxDSmxiR1Z0Wlc1MElpd2lZWFIwY25NaUxDSnJaWGtpTENKelpYUkJkSFJ5YVdKMWRHVWlMQ0p6Y0d4cGRFTnZiVzFoUkdWc2FXMXBkR1ZrSWl3aWRtRnNkV1VpTENKemNHeHBkQ0lzSW1OdmJuUmhhVzV6SWl3aWRHVnliU0lzSW5ZaUxDSnBibVJsZUU5bUlpd2lhWE5HYVhKemRFTm9ZWEp6SWl3aVkzSmxZWFJsVlc1cGRGUjVjR1VpTENKMGVYQmxJaXdpZEdWemRDSXNJbkJoY25ObElpd2ljR0Z5YzJWR2JHOWhkQ0lzSW5SeVlXNXpabTl5YlNJc0luUmxjbTF6SWl3aWJuVnRWR1Z5YlhNaUxDSnNaVzVuZEdnaUxDSjJZV3gxWlhNaUxDSjJZV3gxWlhOQmNuSmhlU0lzSW1kbGRGWmhiSFZsUm5KdmJVWjFibU4wYVc5dVUzUnlhVzVuSWl3aWFTSXNJbVpwYm1SV1lXeDFaVUZ1WkZWdWFYUWlMQ0p0WVhSamFDSXNJbk53YkdsMFZtRnNkV1VpTENKMWJtbDBJaXdpWjJWMFEyOXNiM0pXWVd4MVpYTWlMQ0pqYjJ4dmNsUmxjbTF6SWl3aWJuVnRRMjlzYjNKVVpYSnRjeUlzSW1OdmJHOXlWbUZzZFdWeklpd2lZMjlzYjNKeklsMHNJbTFoY0hCcGJtZHpJam9pT3pzN08xRkJaMGxuUWtFc1owSXNSMEZCUVVFc1owSTdPMEZCYUVsb1FqczdRVUZGUVN4SlFVRk5ReXh4UWtGQmNVSXNhVUpCUVROQ08wRkJRMEVzU1VGQlRVTXNiVUpCUVcxQ0xFOUJRWHBDTzBGQlEwRXNTVUZCVFVNc2MwSkJRWFZDTEU5QlFVOURMRmRCUVZBc1MwRkJkVUlzVjBGQmRrSXNTVUZCYzBOQkxGbEJRVmxETEVkQlFTOUZPenRCUVVWQk96czdPenM3UVVGTlFTeEpRVUZOUXl4VlFVRlZMRlZCUVVORExGRkJRVVE3UVVGQlFTeFRRVUZqUXl4UFFVRlBReXhUUVVGUUxFTkJRV2xDUXl4UlFVRnFRaXhEUVVFd1FrTXNTVUZCTVVJc1EwRkJLMEpLTEZGQlFTOUNMRVZCUVhsRFN5eExRVUY2UXl4RFFVRXJReXhEUVVFdlF5eEZRVUZyUkN4RFFVRkRMRU5CUVc1RUxFTkJRV1E3UVVGQlFTeERRVUZvUWpzN1FVRkZRVHM3T3pzN08wRkJUVThzU1VGQlRVTXNiME5CUVdNc1ZVRkJRME1zVFVGQlJEdEJRVUZCTEZOQlFWbEJMRTlCUVU5RExFOUJRVkFzUTBGQlpXUXNhMEpCUVdZc1JVRkJiVU5ETEdkQ1FVRnVReXhGUVVGeFJHTXNWMEZCY2tRc1JVRkJXanRCUVVGQkxFTkJRWEJDT3p0QlFVVlFPenM3T3p0QlFVdFBMRWxCUVUxRExHOURRVUZqWkN4elFrRkJjMEk3UVVGQlFTeFRRVUZOUXl4WlFVRlpReXhIUVVGYUxFVkJRVTQ3UVVGQlFTeERRVUYwUWl4SFFVRm5SRHRCUVVGQkxGTkJRVTBzU1VGQlNXRXNTVUZCU2l4SFFVRlhReXhQUVVGWUxFVkJRVTQ3UVVGQlFTeERRVUZ3UlRzN1FVRkZVRHM3T3pzN096dEJRVTlQTEVsQlFVMURMRzlEUVVGakxGVkJRVU5ETEUxQlFVUXNSVUZCVTBNc1dVRkJWRHRCUVVGQkxGTkJRVEJDUkN4UFFVRlBSU3hqUVVGUUxFTkJRWE5DUkN4WlFVRjBRaXhMUVVGMVEwUXNUMEZCVDBNc1dVRkJVQ3hOUVVGNVFrVXNVMEZCTVVZN1FVRkJRU3hEUVVGd1FqczdRVUZGVURzN096czdPMEZCVFU4c1NVRkJUVU1zTkVKQlFWVXNWVUZCUTBNc1IwRkJSRHRCUVVGQkxGTkJRVk53UWl4UlFVRlJiMElzUjBGQlVpeE5RVUZwUWl4UFFVRXhRanRCUVVGQkxFTkJRV2hDT3p0QlFVVlFPenM3T3pzN1FVRk5UeXhKUVVGTlF5d3dRa0ZCVXl4VlFVRkRReXhIUVVGRU8wRkJRVUVzVTBGQlUzUkNMRkZCUVZGelFpeEhRVUZTTEUxQlFXbENMRlZCUVRGQ08wRkJRVUVzUTBGQlpqczdRVUZGVURzN096czdPMEZCVFU4c1NVRkJUVU1zZDBKQlFWRXNWVUZCUTBNc1IwRkJSRHRCUVVGQkxGTkJRVk1zVDBGQlQwRXNSMEZCVUN4TFFVRmxMRkZCUVhoQ08wRkJRVUVzUTBGQlpEczdRVUZGVURzN096czdPMEZCVFU4c1NVRkJUVU1zZDBKQlFWRXNWVUZCUTBnc1IwRkJSRHRCUVVGQkxGTkJRVk1zVDBGQlQwRXNSMEZCVUN4TFFVRmxMRkZCUVhoQ08wRkJRVUVzUTBGQlpEczdRVUZGVURzN096czdPMEZCVFU4c1NVRkJUVWtzT0VKQlFWY3NWVUZCUTBNc1IwRkJSRHRCUVVGQkxGTkJRVk1zVDBGQlQwRXNSMEZCVUN4TFFVRmxMRkZCUVhoQ08wRkJRVUVzUTBGQmFrSTdPMEZCUlVFc1NVRkJUVU1zYjBOQlFXTXNWVUZCUTBNc1QwRkJSQ3hGUVVGVlF5eExRVUZXTEVWQlFXOUNPMEZCUXpkRExFOUJRVXNzU1VGQlNVTXNSMEZCVkN4SlFVRm5Ra1FzUzBGQmFFSXNSVUZCZFVJN1FVRkRja0lzVVVGQlNVRXNUVUZCVFdJc1kwRkJUaXhEUVVGeFFtTXNSMEZCY2tJc1EwRkJTaXhGUVVFclFqdEJRVU0zUWtZc1kwRkJVVWNzV1VGQlVpeERRVUZ4UWtRc1IwRkJja0lzUlVGQk1FSkVMRTFCUVUxRExFZEJRVTRzUTBGQk1VSTdRVUZEUkR0QlFVTkdPMEZCUTBZc1EwRk9UVHRCUVU5UU96czdPenM3T3p0QlFWRlBMRWxCUVUxRkxHOUVRVUZ6UWl4VlFVRkRReXhMUVVGRU8wRkJRVUVzVTBGQlYxSXNVMEZCVTFFc1MwRkJWQ3hKUVVGclFrRXNUVUZCVFVNc1MwRkJUaXhEUVVGWkxFMUJRVm9zUTBGQmJFSXNSMEZCZDBNc1EwRkJRMFFzUzBGQlJDeERRVUZ1UkR0QlFVRkJMRU5CUVRWQ096dEJRVVZRT3pzN08wRkJTVThzU1VGQlRVVXNPRUpCUVZjc1ZVRkJRME1zU1VGQlJEdEJRVUZCTEZOQlFWVXNWVUZCUTBNc1EwRkJSQ3hGUVVGUE8wRkJRM1pETEZkQlFWRmFMRk5CUVZOWExFbEJRVlFzUzBGQmEwSkRMRVZCUVVWRExFOUJRVVlzUTBGQlZVWXNTVUZCVml4TlFVRnZRaXhEUVVGRExFTkJRUzlETzBGQlEwUXNSMEZHZFVJN1FVRkJRU3hEUVVGcVFqczdRVUZKVURzN096czdRVUZMVHl4SlFVRk5SeXh6UTBGQlpTeFZRVUZEU0N4SlFVRkVPMEZCUVVFc1UwRkJWU3hWUVVGRFF5eERRVUZFTEVWQlFVODdRVUZETTBNc1YwRkJVVm9zVTBGQlUxY3NTVUZCVkN4TFFVRnJRa01zUlVGQlJVTXNUMEZCUml4RFFVRlZSaXhKUVVGV0xFMUJRVzlDTEVOQlFUbERPMEZCUTBRc1IwRkdNa0k3UVVGQlFTeERRVUZ5UWpzN1FVRkpVRHM3TzBGQlIwOHNTVUZCVFVrc01FTkJRV2xDTEZWQlFVTkRMRWxCUVVRc1JVRkJWVHRCUVVOMFF5eFRRVUZQTzBGQlEweERMRlZCUVUxUUxGTkJRVk5OTEVsQlFWUXNRMEZFUkR0QlFVVk1SU3hYUVVGUFF5eFZRVVpHTzBGQlIweERMR1ZCUVZjc09FSkJRVmRLTEVsQlFWZzdRVUZJVGl4SFFVRlFPMEZCUzBRc1EwRk9UVHM3UVVGUlVEczdPenM3UVVGTFR5eFRRVUZUYUVRc1owSkJRVlFzUTBGQk1FSnhSQ3hMUVVFeFFpeEZRVUZwUXp0QlFVTjBReXhOUVVGTlF5eFhRVUZYUkN4TlFVRk5SU3hOUVVGMlFqczdRVUZGUVN4VFFVRlBMRlZCUVZWWUxFTkJRVllzUlVGQllUdEJRVU5zUWl4UlFVRk5XU3hUUVVGVExFVkJRV1k3UVVGRFFTeFJRVUZOUXl4alFVRmpiRUlzYjBKQlFXOUNiVUlzTWtKQlFUSkNaQ3hEUVVFelFpeERRVUZ3UWl4RFFVRndRanM3UVVGRlFTeFRRVUZMTEVsQlFVbGxMRWxCUVVrc1EwRkJZaXhGUVVGblFrRXNTVUZCU1V3c1VVRkJjRUlzUlVGQk9FSkxMRWRCUVRsQ0xFVkJRVzFETzBGQlEycERTQ3hoUVVGUFNDeE5RVUZOVFN4RFFVRk9MRU5CUVZBc1NVRkJiMEpHTEZsQlFWbEZMRU5CUVZvc1RVRkJiVUp1UXl4VFFVRndRaXhIUVVGcFF6SkNMRmRCUVZkTkxGbEJRVmxGTEVOQlFWb3NRMEZCV0N4RFFVRnFReXhIUVVFNFJDeERRVUZxUmp0QlFVTkVPenRCUVVWRUxGZEJRVTlJTEUxQlFWQTdRVUZEUkN4SFFWUkVPMEZCVlVRN08wRkJSVVE3T3pzN096czdPMEZCVVU4c1NVRkJUVWtzT0VOQlFXMUNMRlZCUVVOd1FpeExRVUZFTEVWQlFWYzdRVUZEZWtNc1RVRkJTVUVzVFVGQlRYRkNMRXRCUVZZc1JVRkJhVUk3UVVGRFppeFJRVUZOUXl4aFFVRmhkRUlzVFVGQlRYRkNMRXRCUVU0c1EwRkJXU3h0UWtGQldpeERRVUZ1UWpzN1FVRkZRU3hYUVVGUE8wRkJRMHh5UWl4aFFVRlBWeXhYUVVGWFZ5eFhRVUZYTEVOQlFWZ3NRMEZCV0N4RFFVUkdPMEZCUlV4RExGbEJRVTlFTEZkQlFWY3NRMEZCV0R0QlFVWkdMRXRCUVZBN1FVRkpSQ3hIUVZCRUxFMUJUMDg3UVVGRFRDeFhRVUZQTEVWQlFVVjBRaXhaUVVGR0xFVkJRVkE3UVVGRFJEdEJRVU5HTEVOQldFMDdPMEZCWVZBN096czdPenM3UVVGUFR5eEpRVUZOZDBJc01FTkJRV2xDTEZWQlFVTjRRaXhMUVVGRUxFVkJRVkY1UWl4VlFVRlNMRVZCUVhWQ08wRkJRMjVFTEUxQlFVMURMR2RDUVVGblFrUXNWMEZCVjFZc1RVRkJha003UVVGRFFTeE5RVUZOV1N4alFVRmpMRVZCUVhCQ08wRkJRMEVzVFVGQlRVTXNVMEZCVXpkQ0xHOUNRVUZ2UW0xQ0xESkNRVUV5UW14Q0xFdEJRVE5DTEVOQlFYQkNMRU5CUVdZN08wRkJSVUVzVDBGQlN5eEpRVUZKYlVJc1NVRkJTU3hEUVVGaUxFVkJRV2RDUVN4SlFVRkpUeXhoUVVGd1FpeEZRVUZ0UTFBc1IwRkJia01zUlVGQmQwTTdRVUZEZEVOUkxHZENRVUZaUml4WFFVRlhUaXhEUVVGWUxFTkJRVm9zU1VGQk9FSlRMRTlCUVU5VUxFTkJRVkFzVFVGQlkyNURMRk5CUVdZc1IwRkJORUkwUXl4UFFVRlBWQ3hEUVVGUUxFTkJRVFZDTEVkQlFYZERMRU5CUVhKRk8wRkJRMFE3TzBGQlJVUXNVMEZCVDFFc1YwRkJVRHRCUVVORUxFTkJWazBpTENKbWFXeGxJam9pZFhScGJITXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2V5QmhjSEJsYm1SVmJtbDBJSDBnWm5KdmJTQW5MaTkwY21GdWMyWnZjbTFsY25Nbk8xeHVYRzVqYjI1emRDQkRRVTFGVEY5RFFWTkZYMUJCVkZSRlVrNGdQU0F2S0Z0aExYcGRLU2hiUVMxYVhTa3ZaenRjYm1OdmJuTjBJRkpGVUV4QlEwVmZWRVZOVUV4QlZFVWdQU0FuSkRFdEpESW5PMXh1WTI5dWMzUWdTRUZUWDFCRlVrWlBVazFCVGtORlgwNVBWeUE5SUNoMGVYQmxiMllnY0dWeVptOXliV0Z1WTJVZ0lUMDlJQ2QxYm1SbFptbHVaV1FuSUNZbUlIQmxjbVp2Y20xaGJtTmxMbTV2ZHlrN1hHNWNiaThxWEc0Z0lFZGxkQ0IyWVhJZ2RIbHdaU0JoY3lCemRISnBibWRjYmlBZ1hHNGdJRUJ3WVhKaGJUb2dWbUZ5YVdGaWJHVWdkRzhnZEdWemRGeHVJQ0JBY21WMGRYSnVJRnR6ZEhKcGJtZGRPaUJTWlhSMWNtNXpMQ0JtYjNJZ2FXNXpkR0Z1WTJVZ0owOWlhbVZqZENjZ2FXWWdXMjlpYW1WamRDQlBZbXBsWTNSZFhHNHFMMXh1WTI5dWMzUWdkbUZ5Vkhsd1pTQTlJQ2gyWVhKcFlXSnNaU2tnUFQ0Z1QySnFaV04wTG5CeWIzUnZkSGx3WlM1MGIxTjBjbWx1Wnk1allXeHNLSFpoY21saFlteGxLUzV6YkdsalpTZzRMQ0F0TVNrN1hHNWNiaThxWEc0Z0lFTnZiblpsY25RZ1kyRnRaV3hEWVhObElIUnZJR1JoYzJndFkyRnpaVnh1WEc0Z0lFQndZWEpoYlNCYmMzUnlhVzVuWFZ4dUlDQkFjbVYwZFhKdUlGdHpkSEpwYm1kZFhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHTmhiV1ZzVkc5RVlYTm9JRDBnS0hOMGNtbHVaeWtnUFQ0Z2MzUnlhVzVuTG5KbGNHeGhZMlVvUTBGTlJVeGZRMEZUUlY5UVFWUlVSVkpPTENCU1JWQk1RVU5GWDFSRlRWQk1RVlJGS1M1MGIweHZkMlZ5UTJGelpTZ3BPMXh1WEc0dktseHVJQ0JIWlc1bGNtRjBaU0JqZFhKeVpXNTBJSFJwYldWemRHRnRjRnh1SUNCY2JpQWdRSEpsZEhWeWJpQmJkR2x0WlhOMFlXMXdYVG9nUTNWeWNtVnVkQ0JWVGtsWUlIUnBiV1Z6ZEdGdGNGeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQmpkWEp5Wlc1MFZHbHRaU0E5SUVoQlUxOVFSVkpHVDFKTlFVNURSVjlPVDFjZ1B5QW9LU0E5UGlCd1pYSm1iM0p0WVc1alpTNXViM2NvS1NBNklDZ3BJRDArSUc1bGR5QkVZWFJsS0NrdVoyVjBWR2x0WlNncE8xeHVYRzR2S2x4dUlDQkRhR1ZqYXlCcFppQnZZbXBsWTNRZ2FHRnpJSEJ5YjNCbGNuUjVJR0Z1WkNCcGRDQnBjMjRuZENCMWJtUmxabWx1WldSY2JseHVJQ0JBY0dGeVlXMGdXMjlpYW1WamRGMWNiaUFnUUhCaGNtRnRJRnR6ZEhKcGJtZGRYRzRnSUVCeVpYUjFjbTRnVzJKdmIyeGxZVzVkWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdoaGMxQnliM0JsY25SNUlEMGdLRzlpYW1WamRDd2djSEp2Y0dWeWRIbE9ZVzFsS1NBOVBpQnZZbXBsWTNRdWFHRnpUM2R1VUhKdmNHVnlkSGtvY0hKdmNHVnlkSGxPWVcxbEtTQW1KaUJ2WW1wbFkzUmJjSEp2Y0dWeWRIbE9ZVzFsWFNBaFBUMGdkVzVrWldacGJtVmtPMXh1WEc0dktseHVJQ0JKY3lCMWRHbHNjeUIyWVhJZ1lXNGdZWEp5WVhrZ1B5QmNiaUFnWEc0Z0lFQndZWEpoYlRvZ1ZtRnlhV0ZpYkdVZ2RHOGdkR1Z6ZEZ4dUlDQkFjbVYwZFhKdUlGdGliMjlzWldGdVhUb2dVbVYwZFhKdWN5QjBjblZsSUdsbUlIVjBhV3h6TG5aaGNsUjVjR1VnUFQwOUlDZEJjbkpoZVNkY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2FYTkJjbkpoZVNBOUlDaGhjbklwSUQwK0lIWmhjbFI1Y0dVb1lYSnlLU0E5UFQwZ0owRnljbUY1Snp0Y2JseHVMeXBjYmlBZ1NYTWdkWFJwYkhNZ2RtRnlJR0VnWm5WdVkzUnBiMjRnUHlCY2JpQWdYRzRnSUVCd1lYSmhiVG9nVm1GeWFXRmliR1VnZEc4Z2RHVnpkRnh1SUNCQWNtVjBkWEp1SUZ0aWIyOXNaV0Z1WFRvZ1VtVjBkWEp1Y3lCMGNuVmxJR2xtSUhWMGFXeHpMblpoY2xSNWNHVWdQVDA5SUNkR2RXNWpkR2x2YmlkY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2FYTkdkVzVqSUQwZ0tHOWlhaWtnUFQ0Z2RtRnlWSGx3WlNodlltb3BJRDA5UFNBblJuVnVZM1JwYjI0bk8xeHVYRzR2S2x4dUlDQkpjeUIxZEdsc2N5QjJZWElnWVNCdWRXMWlaWEkvWEc0Z0lGeHVJQ0JBY0dGeVlXMDZJRlpoY21saFlteGxJSFJ2SUhSbGMzUmNiaUFnUUhKbGRIVnliaUJiWW05dmJHVmhibDA2SUZKbGRIVnlibk1nZEhKMVpTQnBaaUIwZVhCbGIyWWdQVDA5SUNkdWRXMWlaWEluWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdselRuVnRJRDBnS0c1MWJTa2dQVDRnZEhsd1pXOW1JRzUxYlNBOVBUMGdKMjUxYldKbGNpYzdYRzVjYmk4cVhHNGdJRWx6SUhWMGFXeHpJSFpoY2lCaGJpQnZZbXBsWTNRL1hHNGdJRnh1SUNCQWNHRnlZVzA2SUZaaGNtbGhZbXhsSUhSdklIUmxjM1JjYmlBZ1FISmxkSFZ5YmlCYlltOXZiR1ZoYmwwNklGSmxkSFZ5Ym5NZ2RISjFaU0JwWmlCMGVYQmxiMllnUFQwOUlDZHZZbXBsWTNRblhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHbHpUMkpxSUQwZ0tHOWlhaWtnUFQ0Z2RIbHdaVzltSUc5aWFpQTlQVDBnSjI5aWFtVmpkQ2M3WEc1Y2JpOHFYRzRnSUVseklIVjBhV3h6SUhaaGNpQmhJSE4wY21sdVp5QS9JRnh1SUNCY2JpQWdRSEJoY21GdE9pQldZWEpwWVdKc1pTQjBieUIwWlhOMFhHNGdJRUJ5WlhSMWNtNGdXMkp2YjJ4bFlXNWRPaUJTWlhSMWNtNXpJSFJ5ZFdVZ2FXWWdkSGx3Wlc5bUlITjBjaUE5UFQwZ0ozTjBjbWx1WnlkY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2FYTlRkSEpwYm1jZ1BTQW9jM1J5S1NBOVBpQjBlWEJsYjJZZ2MzUnlJRDA5UFNBbmMzUnlhVzVuSnp0Y2JseHVaWGh3YjNKMElHTnZibk4wSUhObGRFUlBUVUYwZEhKeklEMGdLR1ZzWlcxbGJuUXNJR0YwZEhKektTQTlQaUI3WEc0Z0lHWnZjaUFvYkdWMElHdGxlU0JwYmlCaGRIUnljeWtnZTF4dUlDQWdJR2xtSUNoaGRIUnljeTVvWVhOUGQyNVFjbTl3WlhKMGVTaHJaWGtwS1NCN1hHNGdJQ0FnSUNCbGJHVnRaVzUwTG5ObGRFRjBkSEpwWW5WMFpTaHJaWGtzSUdGMGRISnpXMnRsZVYwcE8xeHVJQ0FnSUgxY2JpQWdmVnh1ZlR0Y2JpOHFYRzRnSUZOd2JHbDBJR052YlcxaExXUmxiR2x0YVhSbFpDQnpkSEpwYm1kY2JseHVJQ0JjSW1admJ5eGlZWEpjSWlBdFBpQmJYQ0ptYjI5Y0lpd2dYQ0ppWVhKY0lsMWNibHh1SUNCQWNHRnlZVzBnVzNOMGNtbHVaMTFjYmlBZ1FISmxkSFZ5YmlCYllYSnlZWGxkWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUhOd2JHbDBRMjl0YldGRVpXeHBiV2wwWldRZ1BTQW9kbUZzZFdVcElEMCtJR2x6VTNSeWFXNW5LSFpoYkhWbEtTQS9JSFpoYkhWbExuTndiR2wwS0M4c1hGeHpLaThwSURvZ1czWmhiSFZsWFR0Y2JseHVMeW9xWEc0Z0tpQWdVbVYwZFhKdWN5QmhJR1oxYm1OMGFXOXVJSFJvWVhRZ2QybHNiQ0JqYUdWamF5QmhibmtnWVhKbmRXMWxiblFnWm05eUlHQjBaWEp0WUZ4dUlDb2dZR052Ym5SaGFXNXpLQ2R1WldWa2JHVW5LU2duYUdGNWMzUmhZMnNuS1dCY2JpQXFMMXh1Wlhod2IzSjBJR052Ym5OMElHTnZiblJoYVc1eklEMGdLSFJsY20wcElEMCtJQ2gyS1NBOVBpQjdYRzRnSUhKbGRIVnliaUFvYVhOVGRISnBibWNvZEdWeWJTa2dKaVlnZGk1cGJtUmxlRTltS0hSbGNtMHBJQ0U5UFNBdE1TazdYRzU5TzF4dVhHNHZLaXBjYmlBcUlDQlNaWFIxY201eklHRWdablZ1WTNScGIyNGdkR2hoZENCM2FXeHNJR05vWldOcklIUnZJSE5sWlNCcFppQmhiaUJoY21kMWJXVnVkQ0JwYzF4dUlDb2dJSFJvWlNCbWFYSnpkQ0JqYUdGeVlXTjBaWEp6SUdsdUlIUm9aU0J3Y205MmFXUmxaQ0JnZEdWeWJXQmNiaUFxSUdCcGMwWnBjbk4wUTJoaGNuTW9KMjVsWldSc1pTY3BLQ2RvWVhsemRHRmpheWNwWUZ4dUlDb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2FYTkdhWEp6ZEVOb1lYSnpJRDBnS0hSbGNtMHBJRDArSUNoMktTQTlQaUI3WEc0Z0lISmxkSFZ5YmlBb2FYTlRkSEpwYm1jb2RHVnliU2tnSmlZZ2RpNXBibVJsZUU5bUtIUmxjbTBwSUQwOVBTQXdLVHRjYm4wN1hHNWNiaThxS2x4dUlDb2dRM0psWVhSbElHRWdkVzVwZENCMllXeDFaU0IwZVhCbFhHNGdLaTljYm1WNGNHOXlkQ0JqYjI1emRDQmpjbVZoZEdWVmJtbDBWSGx3WlNBOUlDaDBlWEJsS1NBOVBpQjdYRzRnSUhKbGRIVnliaUI3WEc0Z0lDQWdkR1Z6ZERvZ1kyOXVkR0ZwYm5Nb2RIbHdaU2tzWEc0Z0lDQWdjR0Z5YzJVNklIQmhjbk5sUm14dllYUXNYRzRnSUNBZ2RISmhibk5tYjNKdE9pQmhjSEJsYm1SVmJtbDBLSFI1Y0dVcFhHNGdJSDA3WEc1OU8xeHVYRzR2S2lwY2JpQXFJRU55WldGMFpYTWdZU0JtZFc1amRHbHZiaUIwYUdGMElIZHBiR3dnYzNCc2FYUWdZMjlzYjNKY2JpQXFJSFpoYkhWbGN5Qm1jbTl0SUhOMGNtbHVaeUJwYm5SdklHRnVJRzlpYW1WamRDQnZaaUJ3Y205d1pYSjBhV1Z6WEc0Z0tpQmdjM0JzYVhSRGIyeHZjbFpoYkhWbGN5aGJKMUpsWkNjc0lDZEhjbVZsYmljc0lDZENiSFZsSjEwcEtDZHlaMkpoS0RBc01Dd3dLU2NwWUZ4dUlDb3ZYRzVsZUhCdmNuUWdablZ1WTNScGIyNGdjM0JzYVhSRGIyeHZjbFpoYkhWbGN5aDBaWEp0Y3lrZ2UxeHVJQ0JqYjI1emRDQnVkVzFVWlhKdGN5QTlJSFJsY20xekxteGxibWQwYUR0Y2JseHVJQ0J5WlhSMWNtNGdablZ1WTNScGIyNGdLSFlwSUh0Y2JpQWdJQ0JqYjI1emRDQjJZV3gxWlhNZ1BTQjdmVHRjYmlBZ0lDQmpiMjV6ZENCMllXeDFaWE5CY25KaGVTQTlJSE53YkdsMFEyOXRiV0ZFWld4cGJXbDBaV1FvWjJWMFZtRnNkV1ZHY205dFJuVnVZM1JwYjI1VGRISnBibWNvZGlrcE8xeHVYRzRnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQnVkVzFVWlhKdGN6c2dhU3NyS1NCN1hHNGdJQ0FnSUNCMllXeDFaWE5iZEdWeWJYTmJhVjFkSUQwZ0tIWmhiSFZsYzBGeWNtRjVXMmxkSUNFOVBTQjFibVJsWm1sdVpXUXBJRDhnY0dGeWMyVkdiRzloZENoMllXeDFaWE5CY25KaGVWdHBYU2tnT2lBeE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhKbGRIVnliaUIyWVd4MVpYTTdYRzRnSUgwN1hHNTlYRzVjYmk4cVhHNGdJRk53YkdsMElHRWdkbUZzZFdVZ2FXNTBieUJoSUhaaGJIVmxMM1Z1YVhRZ2IySnFaV04wWEc0Z0lGeHVJQ0FnSUZ3aU1qQXdjSGhjSWlBdFBpQjdJSFpoYkhWbE9pQXlNREFzSUhWdWFYUTZJRndpY0hoY0lpQjlYRzRnSUNBZ1hHNGdJRUJ3WVhKaGJTQmJjM1J5YVc1blhUb2dWbUZzZFdVZ2RHOGdjM0JzYVhSY2JpQWdRSEpsZEhWeWJpQmJiMkpxWldOMFhUb2dUMkpxWldOMElIZHBkR2dnZG1Gc2RXVWdZVzVrSUhWdWFYUWdjSEp2Y0hOY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ1ptbHVaRlpoYkhWbFFXNWtWVzVwZENBOUlDaDJZV3gxWlNrZ1BUNGdlMXh1SUNCcFppQW9kbUZzZFdVdWJXRjBZMmdwSUh0Y2JpQWdJQ0JqYjI1emRDQnpjR3hwZEZaaGJIVmxJRDBnZG1Gc2RXVXViV0YwWTJnb0x5Z3RQMXhjWkNwY1hDNC9YRnhrS2lrb0xpb3BMeWs3WEc1Y2JpQWdJQ0J5WlhSMWNtNGdlMXh1SUNBZ0lDQWdkbUZzZFdVNklIQmhjbk5sUm14dllYUW9jM0JzYVhSV1lXeDFaVnN4WFNrc1hHNGdJQ0FnSUNCMWJtbDBPaUFnYzNCc2FYUldZV3gxWlZzeVhWeHVJQ0FnSUgwN1hHNGdJSDBnWld4elpTQjdYRzRnSUNBZ2NtVjBkWEp1SUhzZ2RtRnNkV1VnZlR0Y2JpQWdmVnh1ZlR0Y2JseHVMeXBjYmlBZ1UzQnNhWFFnWTI5c2IzSWdjM1J5YVc1bklHbHVkRzhnYldGd0lHOW1JR052Ykc5eUlIQnliM0JsY25ScFpYTmNibHh1SUNCY0luSm5ZbUVvTWpVMUxDQXlOVFVzSURJMU5Td2dNQ2xjSWl3Z1cxd2lVbVZrWENJc0lDZEhjbVZsYmx3aUxDQmNJa0pzZFdWY0lpd2dYQ0pCYkhCb1lWd2lYVnh1WEc0Z0lIc2dVbVZrT2lBeU5UVXVMaTRnZlZ4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCblpYUkRiMnh2Y2xaaGJIVmxjeUE5SUNoMllXeDFaU3dnWTI5c2IzSlVaWEp0Y3lrZ1BUNGdlMXh1SUNCamIyNXpkQ0J1ZFcxRGIyeHZjbFJsY20xeklEMGdZMjlzYjNKVVpYSnRjeTVzWlc1bmRHZzdYRzRnSUdOdmJuTjBJR052Ykc5eVZtRnNkV1Z6SUQwZ2UzMDdYRzRnSUdOdmJuTjBJR052Ykc5eWN5QTlJSE53YkdsMFEyOXRiV0ZFWld4cGJXbDBaV1FvWjJWMFZtRnNkV1ZHY205dFJuVnVZM1JwYjI1VGRISnBibWNvZG1Gc2RXVXBLVHRjYmx4dUlDQm1iM0lnS0d4bGRDQnBJRDBnTURzZ2FTQThJRzUxYlVOdmJHOXlWR1Z5YlhNN0lHa3JLeWtnZTF4dUlDQWdJR052Ykc5eVZtRnNkV1Z6VzJOdmJHOXlWR1Z5YlhOYmFWMWRJRDBnS0dOdmJHOXljMXRwWFNBaFBUMGdkVzVrWldacGJtVmtLU0EvSUdOdmJHOXljMXRwWFNBNklERTdYRzRnSUgxY2JseHVJQ0J5WlhSMWNtNGdZMjlzYjNKV1lXeDFaWE03WEc1OU8xeHVYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL3V0aWxzLmpzXG4gKiogbW9kdWxlIGlkID0gMjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8qXG4gIERldGVjdCBhbmQgbG9hZCBhbiBhcHByb3ByaWF0ZSBjbG9jayBzZXR0aW5nIGZvciB0aGUgZW52aXJvbm1lbnRcbiovXG52YXIgaGFzUkFGID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA/IHRydWUgOiBmYWxzZTtcblxudmFyIG9uTmV4dEZyYW1lID0gdm9pZCAwO1xuXG5pZiAoaGFzUkFGKSB7XG4gIG9uTmV4dEZyYW1lID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spO1xuICB9O1xufSBlbHNlIHtcbiAgKGZ1bmN0aW9uICgpIHtcbiAgICAvKlxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHBvbHlmaWxsXG4gICAgICBcbiAgICAgIEZvciBJRTgvOSBGbGluc3RvbmVzIGFuZCBub24tYnJvd3NlciBlbnZpcm9ubWVudHNcbiAgICAgICBUYWtlbiBmcm9tIFBhdWwgSXJpc2guIFdlJ3ZlIHN0cmlwcGVkIG91dCBjYW5jZWxBbmltYXRpb25GcmFtZSBjaGVja3MgYmVjYXVzZSB3ZSBkb24ndCBmb3ggd2l0aCB0aGF0XG4gICAgICBcbiAgICAgIGh0dHA6Ly9wYXVsaXJpc2guY29tLzIwMTEvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1hbmltYXRpbmcvXG4gICAgICBodHRwOi8vbXkub3BlcmEuY29tL2Vtb2xsZXIvYmxvZy8yMDExLzEyLzIwL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtZXItYW5pbWF0aW5nXG4gICAgICAgXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGwgYnkgRXJpayBNw7ZsbGVyLiBmaXhlcyBmcm9tIFBhdWwgSXJpc2ggYW5kIFRpbm8gWmlqZGVsXG4gICAgICAgXG4gICAgICBNSVQgbGljZW5zZVxuICAgICovXG4gICAgdmFyIGxhc3RUaW1lID0gMDtcblxuICAgIG9uTmV4dEZyYW1lID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICB2YXIgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgIHZhciB0aW1lVG9DYWxsID0gTWF0aC5tYXgoMCwgMTYuNyAtIChjdXJyZW50VGltZSAtIGxhc3RUaW1lKSk7XG5cbiAgICAgIGxhc3RUaW1lID0gY3VycmVudFRpbWUgKyB0aW1lVG9DYWxsO1xuXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGxhc3RUaW1lKTtcbiAgICAgIH0sIHRpbWVUb0NhbGwpO1xuICAgIH07XG4gIH0pKCk7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IG9uTmV4dEZyYW1lO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTltY21GdFpYTjVibU12YjI0dGJtVjRkQzFtY21GdFpTNXFjeUpkTENKdVlXMWxjeUk2V3lKb1lYTlNRVVlpTENKM2FXNWtiM2NpTENKeVpYRjFaWE4wUVc1cGJXRjBhVzl1Um5KaGJXVWlMQ0p2Yms1bGVIUkdjbUZ0WlNJc0ltTmhiR3hpWVdOcklpd2liR0Z6ZEZScGJXVWlMQ0pqZFhKeVpXNTBWR2x0WlNJc0lrUmhkR1VpTENKblpYUlVhVzFsSWl3aWRHbHRaVlJ2UTJGc2JDSXNJazFoZEdnaUxDSnRZWGdpTENKelpYUlVhVzFsYjNWMElsMHNJbTFoY0hCcGJtZHpJam9pT3pzN1FVRkJRVHM3TzBGQlIwRXNTVUZCVFVFc1UwRkJWU3hQUVVGUFF5eE5RVUZRTEV0QlFXdENMRmRCUVd4Q0xFbEJRV2xEUVN4UFFVRlBReXh4UWtGQmVrTXNSMEZCYTBVc1NVRkJiRVVzUjBGQmVVVXNTMEZCZUVZN08wRkJSVUVzU1VGQlNVTXNiMEpCUVVvN08wRkJSVUVzU1VGQlNVZ3NUVUZCU2l4RlFVRlpPMEZCUTFaSExHZENRVUZqTEZWQlFVTkRMRkZCUVVRN1FVRkJRU3hYUVVGalNDeFBRVUZQUXl4eFFrRkJVQ3hEUVVFMlFrVXNVVUZCTjBJc1EwRkJaRHRCUVVGQkxFZEJRV1E3UVVGRlJDeERRVWhFTEUxQlIwODdRVUZCUVR0QlFVTk1PenM3T3pzN096czdPenM3TzBGQlkwRXNVVUZCU1VNc1YwRkJWeXhEUVVGbU96dEJRVVZCUml4clFrRkJZeXhWUVVGRFF5eFJRVUZFTEVWQlFXTTdRVUZETVVJc1ZVRkJUVVVzWTBGQll5eEpRVUZKUXl4SlFVRktMRWRCUVZkRExFOUJRVmdzUlVGQmNFSTdRVUZEUVN4VlFVRk5ReXhoUVVGaFF5eExRVUZMUXl4SFFVRk1MRU5CUVZNc1EwRkJWQ3hGUVVGWkxGRkJRVkZNTEdOQlFXTkVMRkZCUVhSQ0xFTkJRVm9zUTBGQmJrSTdPMEZCUlVGQkxHbENRVUZYUXl4alFVRmpSeXhWUVVGNlFqczdRVUZGUVVjc2FVSkJRVmM3UVVGQlFTeGxRVUZOVWl4VFFVRlRReXhSUVVGVUxFTkJRVTQ3UVVGQlFTeFBRVUZZTEVWQlFYRkRTU3hWUVVGeVF6dEJRVU5FTEV0QlVFUTdRVUZxUWtzN1FVRjVRazQ3TzJ0Q1FVVmpUaXhYSWl3aVptbHNaU0k2SW05dUxXNWxlSFF0Wm5KaGJXVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SXZLbHh1SUNCRVpYUmxZM1FnWVc1a0lHeHZZV1FnWVc0Z1lYQndjbTl3Y21saGRHVWdZMnh2WTJzZ2MyVjBkR2x1WnlCbWIzSWdkR2hsSUdWdWRtbHliMjV0Wlc1MFhHNHFMMXh1WTI5dWMzUWdhR0Z6VWtGR0lEMGdLSFI1Y0dWdlppQjNhVzVrYjNjZ0lUMDlJQ2QxYm1SbFptbHVaV1FuSUNZbUlIZHBibVJ2ZHk1eVpYRjFaWE4wUVc1cGJXRjBhVzl1Um5KaGJXVXBJRDhnZEhKMVpTQTZJR1poYkhObE8xeHVYRzVzWlhRZ2IyNU9aWGgwUm5KaGJXVTdYRzVjYm1sbUlDaG9ZWE5TUVVZcElIdGNiaUFnYjI1T1pYaDBSbkpoYldVZ1BTQW9ZMkZzYkdKaFkyc3BJRDArSUhkcGJtUnZkeTV5WlhGMVpYTjBRVzVwYldGMGFXOXVSbkpoYldVb1kyRnNiR0poWTJzcE8xeHVYRzU5SUdWc2MyVWdlMXh1SUNBdktseHVJQ0FnSUhKbGNYVmxjM1JCYm1sdFlYUnBiMjVHY21GdFpTQndiMng1Wm1sc2JGeHVJQ0FnSUZ4dUlDQWdJRVp2Y2lCSlJUZ3ZPU0JHYkdsdWMzUnZibVZ6SUdGdVpDQnViMjR0WW5KdmQzTmxjaUJsYm5acGNtOXViV1Z1ZEhOY2JseHVJQ0FnSUZSaGEyVnVJR1p5YjIwZ1VHRjFiQ0JKY21semFDNGdWMlVuZG1VZ2MzUnlhWEJ3WldRZ2IzVjBJR05oYm1ObGJFRnVhVzFoZEdsdmJrWnlZVzFsSUdOb1pXTnJjeUJpWldOaGRYTmxJSGRsSUdSdmJpZDBJR1p2ZUNCM2FYUm9JSFJvWVhSY2JpQWdJQ0JjYmlBZ0lDQm9kSFJ3T2k4dmNHRjFiR2x5YVhOb0xtTnZiUzh5TURFeEwzSmxjWFZsYzNSaGJtbHRZWFJwYjI1bWNtRnRaUzFtYjNJdGMyMWhjblF0WVc1cGJXRjBhVzVuTDF4dUlDQWdJR2gwZEhBNkx5OXRlUzV2Y0dWeVlTNWpiMjB2WlcxdmJHeGxjaTlpYkc5bkx6SXdNVEV2TVRJdk1qQXZjbVZ4ZFdWemRHRnVhVzFoZEdsdmJtWnlZVzFsTFdadmNpMXpiV0Z5ZEMxbGNpMWhibWx0WVhScGJtZGNiaUFnSUNBZ1hHNGdJQ0FnY21WeGRXVnpkRUZ1YVcxaGRHbHZia1p5WVcxbElIQnZiSGxtYVd4c0lHSjVJRVZ5YVdzZ1RjTzJiR3hsY2k0Z1ptbDRaWE1nWm5KdmJTQlFZWFZzSUVseWFYTm9JR0Z1WkNCVWFXNXZJRnBwYW1SbGJGeHVJQ0FnSUNCY2JpQWdJQ0JOU1ZRZ2JHbGpaVzV6WlZ4dUlDQXFMMXh1SUNCc1pYUWdiR0Z6ZEZScGJXVWdQU0F3TzF4dVhHNGdJRzl1VG1WNGRFWnlZVzFsSUQwZ0tHTmhiR3hpWVdOcktTQTlQaUI3WEc0Z0lDQWdZMjl1YzNRZ1kzVnljbVZ1ZEZScGJXVWdQU0J1WlhjZ1JHRjBaU2dwTG1kbGRGUnBiV1VvS1R0Y2JpQWdJQ0JqYjI1emRDQjBhVzFsVkc5RFlXeHNJRDBnVFdGMGFDNXRZWGdvTUN3Z01UWXVOeUF0SUNoamRYSnlaVzUwVkdsdFpTQXRJR3hoYzNSVWFXMWxLU2s3WEc1Y2JpQWdJQ0JzWVhOMFZHbHRaU0E5SUdOMWNuSmxiblJVYVcxbElDc2dkR2x0WlZSdlEyRnNiRHRjYmx4dUlDQWdJSE5sZEZScGJXVnZkWFFvS0NrZ1BUNGdZMkZzYkdKaFkyc29iR0Z6ZEZScGJXVXBMQ0IwYVcxbFZHOURZV3hzS1R0Y2JpQWdmVHRjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2IyNU9aWGgwUm5KaGJXVTdJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9mcmFtZXN5bmMvb24tbmV4dC1mcmFtZS5qc1xuICoqIG1vZHVsZSBpZCA9IDI1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZVJlbmRlclN0ZXA7XG5mdW5jdGlvbiBjcmVhdGVSZW5kZXJTdGVwKHN0YXJ0UmVuZGVyTG9vcCkge1xuICAvKipcbiAgICogV2UgdXNlIHR3byBhcnJheXMsIG9uZSBmb3IgdGhpcyBmcmFtZSBhbmQgb25lIHRvIHF1ZXVlIGZvciB0aGVcbiAgICogbmV4dCBmcmFtZSwgcmV1c2luZyBlYWNoIHRvIGF2b2lkIEdDLlxuICAgKiBAdHlwZSB7QXJyYXl9XG4gICAqL1xuICB2YXIgZnVuY3Rpb25zVG9SdW4gPSBbXTtcbiAgdmFyIGZ1bmN0aW9uc1RvUnVuTmV4dEZyYW1lID0gW107XG5cbiAgcmV0dXJuIHtcbiAgICBzY2hlZHVsZTogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICBzdGFydFJlbmRlckxvb3AoKTtcbiAgICAgIC8vIElmIHRoaXMgY2FsbGJhY2sgaXNuJ3QgYWxyZWFkeSBzY2hlZHVsZWQgdG8gcnVuIG5leHQgZnJhbWVcbiAgICAgIGlmIChmdW5jdGlvbnNUb1J1bk5leHRGcmFtZS5pbmRleE9mKGNhbGxiYWNrKSA9PT0gLTEpIHtcbiAgICAgICAgZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUucHVzaChjYWxsYmFjayk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGNhbmNlbDogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICB2YXIgaW5kZXhPZkNhbGxiYWNrID0gZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUuaW5kZXhPZihjYWxsYmFjayk7XG4gICAgICBpZiAoaW5kZXhPZkNhbGxiYWNrICE9PSAtMSkge1xuICAgICAgICBmdW5jdGlvbnNUb1J1bk5leHRGcmFtZS5zcGxpY2UoaW5kZXhPZkNhbGxiYWNrLCAxKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgcHJvY2VzczogZnVuY3Rpb24gKCkge1xuXG4gICAgICAvLyBDbGVhciBuZXh0IGZyYW1lIGxpc3RcbiAgICAgIHZhciBfcmVmID0gW2Z1bmN0aW9uc1RvUnVuTmV4dEZyYW1lLCBmdW5jdGlvbnNUb1J1bl07XG4gICAgICAvLyBTd2FwIHRoaXMgZnJhbWUgYW5kIG5leHQgZnJhbWUgYXJyYXlzIHRvIGF2b2lkIEdDXG5cbiAgICAgIGZ1bmN0aW9uc1RvUnVuID0gX3JlZlswXTtcbiAgICAgIGZ1bmN0aW9uc1RvUnVuTmV4dEZyYW1lID0gX3JlZlsxXTtcbiAgICAgIGZ1bmN0aW9uc1RvUnVuTmV4dEZyYW1lLmxlbmd0aCA9IDA7XG5cbiAgICAgIC8vIEV4ZWN1dGUgYWxsIG9mIHRoaXMgZnJhbWUncyBmdW5jdGlvbnNcbiAgICAgIHZhciBudW1UaGlzRnJhbWUgPSBmdW5jdGlvbnNUb1J1bi5sZW5ndGg7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVRoaXNGcmFtZTsgaSsrKSB7XG4gICAgICAgIGZ1bmN0aW9uc1RvUnVuW2ldKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTltY21GdFpYTjVibU12WTNKbFlYUmxMWEpsYm1SbGNpMXpkR1Z3TG1weklsMHNJbTVoYldWeklqcGJJbU55WldGMFpWSmxibVJsY2xOMFpYQWlMQ0p6ZEdGeWRGSmxibVJsY2t4dmIzQWlMQ0ptZFc1amRHbHZibk5VYjFKMWJpSXNJbVoxYm1OMGFXOXVjMVJ2VW5WdVRtVjRkRVp5WVcxbElpd2ljMk5vWldSMWJHVWlMQ0pqWVd4c1ltRmpheUlzSW1sdVpHVjRUMllpTENKd2RYTm9JaXdpWTJGdVkyVnNJaXdpYVc1a1pYaFBaa05oYkd4aVlXTnJJaXdpYzNCc2FXTmxJaXdpY0hKdlkyVnpjeUlzSW14bGJtZDBhQ0lzSW01MWJWUm9hWE5HY21GdFpTSXNJbWtpWFN3aWJXRndjR2x1WjNNaU9pSTdPenRyUWtGQmQwSkJMR2RDTzBGQlFWUXNVMEZCVTBFc1owSkJRVlFzUTBGQk1FSkRMR1ZCUVRGQ0xFVkJRVEpETzBGQlEzaEVPenM3T3p0QlFVdEJMRTFCUVVsRExHbENRVUZwUWl4RlFVRnlRanRCUVVOQkxFMUJRVWxETERCQ1FVRXdRaXhGUVVFNVFqczdRVUZGUVN4VFFVRlBPMEZCUTB4RExHTkJRVlVzVlVGQlEwTXNVVUZCUkN4RlFVRmpPMEZCUTNSQ1NqdEJRVU5CTzBGQlEwRXNWVUZCU1VVc2QwSkJRWGRDUnl4UFFVRjRRaXhEUVVGblEwUXNVVUZCYUVNc1RVRkJPRU1zUTBGQlF5eERRVUZ1UkN4RlFVRnpSRHRCUVVOd1JFWXNaME5CUVhkQ1NTeEpRVUY0UWl4RFFVRTJRa1lzVVVGQk4wSTdRVUZEUkR0QlFVTkdMRXRCVUVrN08wRkJVMHhITEZsQlFWRXNWVUZCUTBnc1VVRkJSQ3hGUVVGak8wRkJRM0JDTEZWQlFVMUpMR3RDUVVGclFrNHNkMEpCUVhkQ1J5eFBRVUY0UWl4RFFVRm5RMFFzVVVGQmFFTXNRMEZCZUVJN1FVRkRRU3hWUVVGSlNTeHZRa0ZCYjBJc1EwRkJReXhEUVVGNlFpeEZRVUUwUWp0QlFVTXhRazRzWjBOQlFYZENUeXhOUVVGNFFpeERRVUVyUWtRc1pVRkJMMElzUlVGQlowUXNRMEZCYUVRN1FVRkRSRHRCUVVOR0xFdEJaRWs3TzBGQlowSk1SU3hoUVVGVExGbEJRVTA3TzBGQlNXSTdRVUZLWVN4cFFrRkZLMElzUTBGQlExSXNkVUpCUVVRc1JVRkJNRUpFTEdOQlFURkNMRU5CUmk5Q08wRkJRMkk3TzBGQlEwTkJMRzlDUVVaWk8wRkJSVWxETERaQ1FVWktPMEZCUzJKQkxEaENRVUYzUWxNc1RVRkJlRUlzUjBGQmFVTXNRMEZCYWtNN08wRkJSVUU3UVVGRFFTeFZRVUZOUXl4bFFVRmxXQ3hsUVVGbFZTeE5RVUZ3UXp0QlFVTkJMRmRCUVVzc1NVRkJTVVVzU1VGQlNTeERRVUZpTEVWQlFXZENRU3hKUVVGSlJDeFpRVUZ3UWl4RlFVRnJRME1zUjBGQmJFTXNSVUZCZFVNN1FVRkRja05hTEhWQ1FVRmxXU3hEUVVGbU8wRkJRMFE3UVVGRFJqdEJRVFZDU1N4SFFVRlFPMEZCT0VKRUlpd2labWxzWlNJNkltTnlaV0YwWlMxeVpXNWtaWEl0YzNSbGNDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRjBkSEJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltVjRjRzl5ZENCa1pXWmhkV3gwSUdaMWJtTjBhVzl1SUdOeVpXRjBaVkpsYm1SbGNsTjBaWEFvYzNSaGNuUlNaVzVrWlhKTWIyOXdLU0I3WEc0Z0lDOHFLbHh1SUNBZ0tpQlhaU0IxYzJVZ2RIZHZJR0Z5Y21GNWN5d2diMjVsSUdadmNpQjBhR2x6SUdaeVlXMWxJR0Z1WkNCdmJtVWdkRzhnY1hWbGRXVWdabTl5SUhSb1pWeHVJQ0FnS2lCdVpYaDBJR1p5WVcxbExDQnlaWFZ6YVc1bklHVmhZMmdnZEc4Z1lYWnZhV1FnUjBNdVhHNGdJQ0FxSUVCMGVYQmxJSHRCY25KaGVYMWNiaUFnSUNvdlhHNGdJR3hsZENCbWRXNWpkR2x2Ym5OVWIxSjFiaUE5SUZ0ZE8xeHVJQ0JzWlhRZ1puVnVZM1JwYjI1elZHOVNkVzVPWlhoMFJuSmhiV1VnUFNCYlhUdGNibHh1SUNCeVpYUjFjbTRnZTF4dUlDQWdJSE5qYUdWa2RXeGxPaUFvWTJGc2JHSmhZMnNwSUQwK0lIdGNiaUFnSUNBZ0lITjBZWEowVW1WdVpHVnlURzl2Y0NncE8xeHVJQ0FnSUNBZ0x5OGdTV1lnZEdocGN5QmpZV3hzWW1GamF5QnBjMjRuZENCaGJISmxZV1I1SUhOamFHVmtkV3hsWkNCMGJ5QnlkVzRnYm1WNGRDQm1jbUZ0WlZ4dUlDQWdJQ0FnYVdZZ0tHWjFibU4wYVc5dWMxUnZVblZ1VG1WNGRFWnlZVzFsTG1sdVpHVjRUMllvWTJGc2JHSmhZMnNwSUQwOVBTQXRNU2tnZTF4dUlDQWdJQ0FnSUNCbWRXNWpkR2x2Ym5OVWIxSjFiazVsZUhSR2NtRnRaUzV3ZFhOb0tHTmhiR3hpWVdOcktUdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOUxGeHVYRzRnSUNBZ1kyRnVZMlZzT2lBb1kyRnNiR0poWTJzcElEMCtJSHRjYmlBZ0lDQWdJR052Ym5OMElHbHVaR1Y0VDJaRFlXeHNZbUZqYXlBOUlHWjFibU4wYVc5dWMxUnZVblZ1VG1WNGRFWnlZVzFsTG1sdVpHVjRUMllvWTJGc2JHSmhZMnNwTzF4dUlDQWdJQ0FnYVdZZ0tHbHVaR1Y0VDJaRFlXeHNZbUZqYXlBaFBUMGdMVEVwSUh0Y2JpQWdJQ0FnSUNBZ1puVnVZM1JwYjI1elZHOVNkVzVPWlhoMFJuSmhiV1V1YzNCc2FXTmxLR2x1WkdWNFQyWkRZV3hzWW1GamF5d2dNU2s3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmU3hjYmx4dUlDQWdJSEJ5YjJObGMzTTZJQ2dwSUQwK0lIdGNiaUFnSUNBZ0lDOHZJRk4zWVhBZ2RHaHBjeUJtY21GdFpTQmhibVFnYm1WNGRDQm1jbUZ0WlNCaGNuSmhlWE1nZEc4Z1lYWnZhV1FnUjBOY2JpQWdJQ0FnSUZ0bWRXNWpkR2x2Ym5OVWIxSjFiaXdnWm5WdVkzUnBiMjV6Vkc5U2RXNU9aWGgwUm5KaGJXVmRJRDBnVzJaMWJtTjBhVzl1YzFSdlVuVnVUbVY0ZEVaeVlXMWxMQ0JtZFc1amRHbHZibk5VYjFKMWJsMDdYRzVjYmlBZ0lDQWdJQzh2SUVOc1pXRnlJRzVsZUhRZ1puSmhiV1VnYkdsemRGeHVJQ0FnSUNBZ1puVnVZM1JwYjI1elZHOVNkVzVPWlhoMFJuSmhiV1V1YkdWdVozUm9JRDBnTUR0Y2JseHVJQ0FnSUNBZ0x5OGdSWGhsWTNWMFpTQmhiR3dnYjJZZ2RHaHBjeUJtY21GdFpTZHpJR1oxYm1OMGFXOXVjMXh1SUNBZ0lDQWdZMjl1YzNRZ2JuVnRWR2hwYzBaeVlXMWxJRDBnWm5WdVkzUnBiMjV6Vkc5U2RXNHViR1Z1WjNSb08xeHVJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQnVkVzFVYUdselJuSmhiV1U3SUdrckt5a2dlMXh1SUNBZ0lDQWdJQ0JtZFc1amRHbHZibk5VYjFKMWJsdHBYU2dwTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmlBZ2ZUdGNibjBpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvZnJhbWVzeW5jL2NyZWF0ZS1yZW5kZXItc3RlcC5qc1xuICoqIG1vZHVsZSBpZCA9IDI2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBidWlsZDtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uLy4uL2luYy91dGlscycpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzID0gcmVxdWlyZSgnLi4vY3NzL3RyYW5zZm9ybS1wcm9wcycpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zZm9ybVByb3BzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIFpFUk9fTk9UX1pFUk8gPSAwLjAwMDE7XG5cbmZ1bmN0aW9uIGJ1aWxkKHN0YXRlLCBkYXRhKSB7XG4gIHZhciBoYXNUcmFuc2Zvcm0gPSBmYWxzZTtcbiAgdmFyIHByb3BzID0ge307XG4gIHZhciBzY2FsZSA9IHN0YXRlLnNjYWxlICE9PSB1bmRlZmluZWQgPyBzdGF0ZS5zY2FsZSB8fCBaRVJPX05PVF9aRVJPIDogc3RhdGUuc2NhbGVYIHx8IDE7XG4gIHZhciBzY2FsZVkgPSBzdGF0ZS5zY2FsZVkgIT09IHVuZGVmaW5lZCA/IHN0YXRlLnNjYWxlWSB8fCBaRVJPX05PVF9aRVJPIDogc2NhbGUgfHwgMTtcbiAgdmFyIHRyYW5zZm9ybU9yaWdpblggPSBkYXRhLndpZHRoICogKChzdGF0ZS5vcmlnaW5YIHx8IDUwKSAvIDEwMCkgKyBkYXRhLng7XG4gIHZhciB0cmFuc2Zvcm1PcmlnaW5ZID0gZGF0YS5oZWlnaHQgKiAoKHN0YXRlLm9yaWdpblkgfHwgNTApIC8gMTAwKSArIGRhdGEueTtcbiAgdmFyIHNjYWxlVHJhbnNmb3JtWCA9IC10cmFuc2Zvcm1PcmlnaW5YICogKHNjYWxlICogMSk7XG4gIHZhciBzY2FsZVRyYW5zZm9ybVkgPSAtdHJhbnNmb3JtT3JpZ2luWSAqIChzY2FsZVkgKiAxKTtcbiAgdmFyIHNjYWxlUmVwbGFjZVggPSB0cmFuc2Zvcm1PcmlnaW5YIC8gc2NhbGU7XG4gIHZhciBzY2FsZVJlcGxhY2VZID0gdHJhbnNmb3JtT3JpZ2luWSAvIHNjYWxlWTtcbiAgdmFyIHRyYW5zZm9ybSA9IHtcbiAgICB0cmFuc2xhdGU6ICd0cmFuc2xhdGUoJyArIHN0YXRlLnRyYW5zbGF0ZVggKyAnLCAnICsgc3RhdGUudHJhbnNsYXRlWSArICcpICcsXG4gICAgc2NhbGU6ICd0cmFuc2xhdGUoJyArIHNjYWxlVHJhbnNmb3JtWCArICcsICcgKyBzY2FsZVRyYW5zZm9ybVkgKyAnKSBzY2FsZSgnICsgc2NhbGUgKyAnLCAnICsgc2NhbGVZICsgJykgdHJhbnNsYXRlKCcgKyBzY2FsZVJlcGxhY2VYICsgJywgJyArIHNjYWxlUmVwbGFjZVkgKyAnKSAnLFxuICAgIHJvdGF0ZTogJ3JvdGF0ZSgnICsgc3RhdGUucm90YXRlICsgJywgJyArIHRyYW5zZm9ybU9yaWdpblggKyAnLCAnICsgdHJhbnNmb3JtT3JpZ2luWSArICcpICcsXG4gICAgc2tld1g6ICdza2V3WCgnICsgc3RhdGUuc2tld1ggKyAnKSAnLFxuICAgIHNrZXdZOiAnc2tld1koJyArIHN0YXRlLnNrZXdZICsgJykgJ1xuICB9O1xuXG4gIGZvciAodmFyIGtleSBpbiBzdGF0ZSkge1xuICAgIGlmIChzdGF0ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBpZiAoX3RyYW5zZm9ybVByb3BzMi5kZWZhdWx0W2tleV0pIHtcbiAgICAgICAgaGFzVHJhbnNmb3JtID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb3BzWygwLCBfdXRpbHMuY2FtZWxUb0Rhc2gpKGtleSldID0gc3RhdGVba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoaGFzVHJhbnNmb3JtKSB7XG4gICAgcHJvcHMudHJhbnNmb3JtID0gJyc7XG5cbiAgICBmb3IgKHZhciBfa2V5IGluIHRyYW5zZm9ybSkge1xuICAgICAgaWYgKHRyYW5zZm9ybS5oYXNPd25Qcm9wZXJ0eShfa2V5KSkge1xuICAgICAgICB2YXIgZGVmYXVsdFZhbHVlID0gX2tleSA9PT0gJ3NjYWxlJyA/ICcxJyA6ICcwJztcbiAgICAgICAgcHJvcHMudHJhbnNmb3JtICs9IHRyYW5zZm9ybVtfa2V5XS5yZXBsYWNlKC91bmRlZmluZWQvZywgZGVmYXVsdFZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHM7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXlaVzVrWlhKbGNuTXZjM1puTDJKMWFXeGtMbXB6SWwwc0ltNWhiV1Z6SWpwYkltSjFhV3hrSWl3aVdrVlNUMTlPVDFSZldrVlNUeUlzSW5OMFlYUmxJaXdpWkdGMFlTSXNJbWhoYzFSeVlXNXpabTl5YlNJc0luQnliM0J6SWl3aWMyTmhiR1VpTENKMWJtUmxabWx1WldRaUxDSnpZMkZzWlZnaUxDSnpZMkZzWlZraUxDSjBjbUZ1YzJadmNtMVBjbWxuYVc1WUlpd2lkMmxrZEdnaUxDSnZjbWxuYVc1WUlpd2llQ0lzSW5SeVlXNXpabTl5YlU5eWFXZHBibGtpTENKb1pXbG5hSFFpTENKdmNtbG5hVzVaSWl3aWVTSXNJbk5qWVd4bFZISmhibk5tYjNKdFdDSXNJbk5qWVd4bFZISmhibk5tYjNKdFdTSXNJbk5qWVd4bFVtVndiR0ZqWlZnaUxDSnpZMkZzWlZKbGNHeGhZMlZaSWl3aWRISmhibk5tYjNKdElpd2lkSEpoYm5Oc1lYUmxJaXdpZEhKaGJuTnNZWFJsV0NJc0luUnlZVzV6YkdGMFpWa2lMQ0p5YjNSaGRHVWlMQ0p6YTJWM1dDSXNJbk5yWlhkWklpd2lhMlY1SWl3aWFHRnpUM2R1VUhKdmNHVnlkSGtpTENKa1pXWmhkV3gwVm1Gc2RXVWlMQ0p5WlhCc1lXTmxJbDBzSW0xaGNIQnBibWR6SWpvaU96czdhMEpCUzNkQ1FTeExPenRCUVV4NFFqczdRVUZEUVRzN096czdPMEZCUlVFc1NVRkJUVU1zWjBKQlFXZENMRTFCUVhSQ096dEJRVVZsTEZOQlFWTkVMRXRCUVZRc1EwRkJaVVVzUzBGQlppeEZRVUZ6UWtNc1NVRkJkRUlzUlVGQk5FSTdRVUZEZWtNc1RVRkJTVU1zWlVGQlpTeExRVUZ1UWp0QlFVTkJMRTFCUVUxRExGRkJRVkVzUlVGQlpEdEJRVU5CTEUxQlFVMURMRkZCUVZGS0xFMUJRVTFKTEV0QlFVNHNTMEZCWjBKRExGTkJRV2hDTEVkQlFUUkNUQ3hOUVVGTlNTeExRVUZPTEVsQlFXVk1MR0ZCUVRORExFZEJRVEpFUXl4TlFVRk5UU3hOUVVGT0xFbEJRV2RDTEVOQlFYcEdPMEZCUTBFc1RVRkJUVU1zVTBGQlUxQXNUVUZCVFU4c1RVRkJUaXhMUVVGcFFrWXNVMEZCYWtJc1IwRkJOa0pNTEUxQlFVMVBMRTFCUVU0c1NVRkJaMEpTTEdGQlFUZERMRWRCUVRaRVN5eFRRVUZUTEVOQlFYSkdPMEZCUTBFc1RVRkJUVWtzYlVKQlFXMUNVQ3hMUVVGTFVTeExRVUZNTEVsQlFXTXNRMEZCUTFRc1RVRkJUVlVzVDBGQlRpeEpRVUZwUWl4RlFVRnNRaXhKUVVGM1FpeEhRVUYwUXl4SlFVRTJRMVFzUzBGQlMxVXNRMEZCTTBVN1FVRkRRU3hOUVVGTlF5eHRRa0ZCYlVKWUxFdEJRVXRaTEUxQlFVd3NTVUZCWlN4RFFVRkRZaXhOUVVGTll5eFBRVUZPTEVsQlFXbENMRVZCUVd4Q0xFbEJRWGRDTEVkQlFYWkRMRWxCUVRoRFlpeExRVUZMWXl4RFFVRTFSVHRCUVVOQkxFMUJRVTFETEd0Q1FVRnJRaXhEUVVGRlVpeG5Ra0ZCUml4SlFVRnpRa29zVVVGQlVTeERRVUU1UWl4RFFVRjRRanRCUVVOQkxFMUJRVTFoTEd0Q1FVRnJRaXhEUVVGRlRDeG5Ra0ZCUml4SlFVRnpRa3dzVTBGQlV5eERRVUV2UWl4RFFVRjRRanRCUVVOQkxFMUJRVTFYTEdkQ1FVRm5RbFlzYlVKQlFXMUNTaXhMUVVGNlF6dEJRVU5CTEUxQlFVMWxMR2RDUVVGblFsQXNiVUpCUVcxQ1RDeE5RVUY2UXp0QlFVTkJMRTFCUVUxaExGbEJRVms3UVVGRGFFSkRMRGhDUVVGM1FuSkNMRTFCUVUxelFpeFZRVUU1UWl4VlFVRTJRM1JDTEUxQlFVMTFRaXhWUVVGdVJDeFBRVVJuUWp0QlFVVm9RbTVDTERCQ1FVRnZRbGtzWlVGQmNFSXNWVUZCZDBORExHVkJRWGhETEdkQ1FVRnJSV0lzUzBGQmJFVXNWVUZCTkVWSExFMUJRVFZGTEc5Q1FVRnBSMWNzWVVGQmFrY3NWVUZCYlVoRExHRkJRVzVJTEU5QlJtZENPMEZCUjJoQ1N5eDNRa0ZCYTBKNFFpeE5RVUZOZDBJc1RVRkJlRUlzVlVGQmJVTm9RaXhuUWtGQmJrTXNWVUZCZDBSSkxHZENRVUY0UkN4UFFVaG5RanRCUVVsb1FtRXNjMEpCUVdkQ2VrSXNUVUZCVFhsQ0xFdEJRWFJDTEU5QlNtZENPMEZCUzJoQ1F5eHpRa0ZCWjBJeFFpeE5RVUZOTUVJc1MwRkJkRUk3UVVGTVowSXNSMEZCYkVJN08wRkJVVUVzVDBGQlN5eEpRVUZKUXl4SFFVRlVMRWxCUVdkQ00wSXNTMEZCYUVJc1JVRkJkVUk3UVVGRGNrSXNVVUZCU1VFc1RVRkJUVFJDTEdOQlFVNHNRMEZCY1VKRUxFZEJRWEpDTEVOQlFVb3NSVUZCSzBJN1FVRkROMElzVlVGQlNTeDVRa0ZCWlVFc1IwRkJaaXhEUVVGS0xFVkJRWGxDTzBGQlEzWkNla0lzZFVKQlFXVXNTVUZCWmp0QlFVTkVMRTlCUmtRc1RVRkZUenRCUVVOTVF5eGpRVUZOTEhkQ1FVRlpkMElzUjBGQldpeERRVUZPTEVsQlFUQkNNMElzVFVGQlRUSkNMRWRCUVU0c1EwRkJNVUk3UVVGRFJEdEJRVU5HTzBGQlEwWTdPMEZCUlVRc1RVRkJTWHBDTEZsQlFVb3NSVUZCYTBJN1FVRkRhRUpETEZWQlFVMXBRaXhUUVVGT0xFZEJRV3RDTEVWQlFXeENPenRCUVVWQkxGTkJRVXNzU1VGQlNVOHNTVUZCVkN4SlFVRm5RbEFzVTBGQmFFSXNSVUZCTWtJN1FVRkRla0lzVlVGQlNVRXNWVUZCVlZFc1kwRkJWaXhEUVVGNVFrUXNTVUZCZWtJc1EwRkJTaXhGUVVGdFF6dEJRVU5xUXl4WlFVRk5SU3hsUVVGblFrWXNVMEZCVVN4UFFVRlVMRWRCUVc5Q0xFZEJRWEJDTEVkQlFUQkNMRWRCUVM5RE8wRkJRMEY0UWl4alFVRk5hVUlzVTBGQlRpeEpRVUZ0UWtFc1ZVRkJWVThzU1VGQlZpeEZRVUZsUnl4UFFVRm1MRU5CUVhWQ0xGbEJRWFpDTEVWQlFYRkRSQ3haUVVGeVF5eERRVUZ1UWp0QlFVTkVPMEZCUTBZN1FVRkRSanM3UVVGRlJDeFRRVUZQTVVJc1MwRkJVRHRCUVVORUlpd2labWxzWlNJNkltSjFhV3hrTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTl0WVhSMGNHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSHNnWTJGdFpXeFViMFJoYzJnZ2ZTQm1jbTl0SUNjdUxpOHVMaTlwYm1NdmRYUnBiSE1uTzF4dWFXMXdiM0owSUhSeVlXNXpabTl5YlZCeWIzQnpJR1p5YjIwZ0p5NHVMMk56Y3k5MGNtRnVjMlp2Y20wdGNISnZjSE1uTzF4dVhHNWpiMjV6ZENCYVJWSlBYMDVQVkY5YVJWSlBJRDBnTUM0d01EQXhPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JtZFc1amRHbHZiaUJpZFdsc1pDaHpkR0YwWlN3Z1pHRjBZU2tnZTF4dUlDQnNaWFFnYUdGelZISmhibk5tYjNKdElEMGdabUZzYzJVN1hHNGdJR052Ym5OMElIQnliM0J6SUQwZ2UzMDdYRzRnSUdOdmJuTjBJSE5qWVd4bElEMGdjM1JoZEdVdWMyTmhiR1VnSVQwOUlIVnVaR1ZtYVc1bFpDQS9JSE4wWVhSbExuTmpZV3hsSUh4OElGcEZVazlmVGs5VVgxcEZVazhnT2lCemRHRjBaUzV6WTJGc1pWZ2dmSHdnTVR0Y2JpQWdZMjl1YzNRZ2MyTmhiR1ZaSUQwZ2MzUmhkR1V1YzJOaGJHVlpJQ0U5UFNCMWJtUmxabWx1WldRZ1B5QnpkR0YwWlM1elkyRnNaVmtnZkh3Z1drVlNUMTlPVDFSZldrVlNUeUE2SUhOallXeGxJSHg4SURFN1hHNGdJR052Ym5OMElIUnlZVzV6Wm05eWJVOXlhV2RwYmxnZ1BTQmtZWFJoTG5kcFpIUm9JQ29nS0NoemRHRjBaUzV2Y21sbmFXNVlJSHg4SURVd0tTQXZJREV3TUNrZ0t5QmtZWFJoTG5nN1hHNGdJR052Ym5OMElIUnlZVzV6Wm05eWJVOXlhV2RwYmxrZ1BTQmtZWFJoTG1obGFXZG9kQ0FxSUNnb2MzUmhkR1V1YjNKcFoybHVXU0I4ZkNBMU1Da2dMeUF4TURBcElDc2daR0YwWVM1NU8xeHVJQ0JqYjI1emRDQnpZMkZzWlZSeVlXNXpabTl5YlZnZ1BTQXRJSFJ5WVc1elptOXliVTl5YVdkcGJsZ2dLaUFvYzJOaGJHVWdLaUF4S1R0Y2JpQWdZMjl1YzNRZ2MyTmhiR1ZVY21GdWMyWnZjbTFaSUQwZ0xTQjBjbUZ1YzJadmNtMVBjbWxuYVc1WklDb2dLSE5qWVd4bFdTQXFJREVwTzF4dUlDQmpiMjV6ZENCelkyRnNaVkpsY0d4aFkyVllJRDBnZEhKaGJuTm1iM0p0VDNKcFoybHVXQ0F2SUhOallXeGxPMXh1SUNCamIyNXpkQ0J6WTJGc1pWSmxjR3hoWTJWWklEMGdkSEpoYm5ObWIzSnRUM0pwWjJsdVdTQXZJSE5qWVd4bFdUdGNiaUFnWTI5dWMzUWdkSEpoYm5ObWIzSnRJRDBnZTF4dUlDQWdJSFJ5WVc1emJHRjBaVG9nWUhSeVlXNXpiR0YwWlNna2UzTjBZWFJsTG5SeVlXNXpiR0YwWlZoOUxDQWtlM04wWVhSbExuUnlZVzV6YkdGMFpWbDlLU0JnTEZ4dUlDQWdJSE5qWVd4bE9pQmdkSEpoYm5Oc1lYUmxLQ1I3YzJOaGJHVlVjbUZ1YzJadmNtMVlmU3dnSkh0elkyRnNaVlJ5WVc1elptOXliVmw5S1NCelkyRnNaU2drZTNOallXeGxmU3dnSkh0elkyRnNaVmw5S1NCMGNtRnVjMnhoZEdVb0pIdHpZMkZzWlZKbGNHeGhZMlZZZlN3Z0pIdHpZMkZzWlZKbGNHeGhZMlZaZlNrZ1lDeGNiaUFnSUNCeWIzUmhkR1U2SUdCeWIzUmhkR1VvSkh0emRHRjBaUzV5YjNSaGRHVjlMQ0FrZTNSeVlXNXpabTl5YlU5eWFXZHBibGg5TENBa2UzUnlZVzV6Wm05eWJVOXlhV2RwYmxsOUtTQmdMRnh1SUNBZ0lITnJaWGRZT2lCZ2MydGxkMWdvSkh0emRHRjBaUzV6YTJWM1dIMHBJR0FzWEc0Z0lDQWdjMnRsZDFrNklHQnphMlYzV1Nna2UzTjBZWFJsTG5OclpYZFpmU2tnWUZ4dUlDQjlPMXh1WEc0Z0lHWnZjaUFvYkdWMElHdGxlU0JwYmlCemRHRjBaU2tnZTF4dUlDQWdJR2xtSUNoemRHRjBaUzVvWVhOUGQyNVFjbTl3WlhKMGVTaHJaWGtwS1NCN1hHNGdJQ0FnSUNCcFppQW9kSEpoYm5ObWIzSnRVSEp2Y0hOYmEyVjVYU2tnZTF4dUlDQWdJQ0FnSUNCb1lYTlVjbUZ1YzJadmNtMGdQU0IwY25WbE8xeHVJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ2NISnZjSE5iWTJGdFpXeFViMFJoYzJnb2EyVjVLVjBnUFNCemRHRjBaVnRyWlhsZE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lHbG1JQ2hvWVhOVWNtRnVjMlp2Y20wcElIdGNiaUFnSUNCd2NtOXdjeTUwY21GdWMyWnZjbTBnUFNBbkp6dGNibHh1SUNBZ0lHWnZjaUFvYkdWMElHdGxlU0JwYmlCMGNtRnVjMlp2Y20wcElIdGNiaUFnSUNBZ0lHbG1JQ2gwY21GdWMyWnZjbTB1YUdGelQzZHVVSEp2Y0dWeWRIa29hMlY1S1NrZ2UxeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCa1pXWmhkV3gwVm1Gc2RXVWdQU0FvYTJWNUlEMDlQU0FuYzJOaGJHVW5LU0EvSUNjeEp5QTZJQ2N3Snp0Y2JpQWdJQ0FnSUNBZ2NISnZjSE11ZEhKaGJuTm1iM0p0SUNzOUlIUnlZVzV6Wm05eWJWdHJaWGxkTG5KbGNHeGhZMlVvTDNWdVpHVm1hVzVsWkM5bkxDQmtaV1poZFd4MFZtRnNkV1VwTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUhKbGRIVnliaUJ3Y205d2N6dGNibjBpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcmVuZGVyZXJzL3N2Zy9idWlsZC5qc1xuICoqIG1vZHVsZSBpZCA9IDI3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgYXhlcyA9IFsnWCcsICdZJywgJ1onXTtcblxudmFyIHRyYW5zZm9ybVByb3BzID0ge1xuICB4OiB0cnVlLFxuICB5OiB0cnVlLFxuICB6OiB0cnVlXG59O1xuXG52YXIgU0NBTEUgPSAnc2NhbGUnO1xudmFyIFJPVEFURSA9ICdyb3RhdGUnO1xudmFyIFRSQU5TRk9STV9QRVJTUEVDVElWRSA9ICd0cmFuc2Zvcm1QZXJzcGVjdGl2ZSc7XG52YXIgVEVSTVMgPSBbJ3RyYW5zbGF0ZScsIFNDQUxFLCBST1RBVEUsICdza2V3JywgVFJBTlNGT1JNX1BFUlNQRUNUSVZFXTtcblxudHJhbnNmb3JtUHJvcHNbUk9UQVRFXSA9IHRyYW5zZm9ybVByb3BzW1NDQUxFXSA9IHRyYW5zZm9ybVByb3BzW1RSQU5TRk9STV9QRVJTUEVDVElWRV0gPSB0cnVlO1xuXG5URVJNUy5mb3JFYWNoKGZ1bmN0aW9uICh0ZXJtKSB7XG4gIHJldHVybiBheGVzLmZvckVhY2goZnVuY3Rpb24gKGF4aXMpIHtcbiAgICByZXR1cm4gdHJhbnNmb3JtUHJvcHNbdGVybSArIGF4aXNdID0gdHJ1ZTtcbiAgfSk7XG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gdHJhbnNmb3JtUHJvcHM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXlaVzVrWlhKbGNuTXZZM056TDNSeVlXNXpabTl5YlMxd2NtOXdjeTVxY3lKZExDSnVZVzFsY3lJNld5SmhlR1Z6SWl3aWRISmhibk5tYjNKdFVISnZjSE1pTENKNElpd2llU0lzSW5vaUxDSlRRMEZNUlNJc0lsSlBWRUZVUlNJc0lsUlNRVTVUUms5U1RWOVFSVkpUVUVWRFZFbFdSU0lzSWxSRlVrMVRJaXdpWm05eVJXRmphQ0lzSW5SbGNtMGlMQ0poZUdseklsMHNJbTFoY0hCcGJtZHpJam9pT3pzN1FVRkJRU3hKUVVGTlFTeFBRVUZQTEVOQlFVTXNSMEZCUkN4RlFVRk5MRWRCUVU0c1JVRkJWeXhIUVVGWUxFTkJRV0k3TzBGQlJVRXNTVUZCU1VNc2FVSkJRV2xDTzBGQlEyNUNReXhMUVVGSExFbEJSR2RDTzBGQlJXNUNReXhMUVVGSExFbEJSbWRDTzBGQlIyNUNReXhMUVVGSE8wRkJTR2RDTEVOQlFYSkNPenRCUVUxQkxFbEJRVTFETEZGQlFWRXNUMEZCWkR0QlFVTkJMRWxCUVUxRExGTkJRVk1zVVVGQlpqdEJRVU5CTEVsQlFVMURMSGRDUVVGM1FpeHpRa0ZCT1VJN1FVRkRRU3hKUVVGTlF5eFJRVUZSTEVOQlFVTXNWMEZCUkN4RlFVRmpTQ3hMUVVGa0xFVkJRWEZDUXl4TlFVRnlRaXhGUVVFMlFpeE5RVUUzUWl4RlFVRnhRME1zY1VKQlFYSkRMRU5CUVdRN08wRkJSVUZPTEdWQlFXVkxMRTFCUVdZc1NVRkJlVUpNTEdWQlFXVkpMRXRCUVdZc1NVRkJkMEpLTEdWQlFXVk5MSEZDUVVGbUxFbEJRWGRETEVsQlFYcEdPenRCUVVWQlF5eE5RVUZOUXl4UFFVRk9MRU5CUVdNc1ZVRkJRME1zU1VGQlJEdEJRVUZCTEZOQlFWVldMRXRCUVV0VExFOUJRVXdzUTBGQllTeFZRVUZEUlN4SlFVRkVPMEZCUVVFc1YwRkJWVllzWlVGQlpWTXNUMEZCVDBNc1NVRkJkRUlzU1VGQk9FSXNTVUZCZUVNN1FVRkJRU3hIUVVGaUxFTkJRVlk3UVVGQlFTeERRVUZrT3p0clFrRkZaVllzWXlJc0ltWnBiR1VpT2lKMGNtRnVjMlp2Y20wdGNISnZjSE11YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoZEhSd1pYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpqYjI1emRDQmhlR1Z6SUQwZ1d5ZFlKeXdnSjFrbkxDQW5XaWRkTzF4dVhHNXNaWFFnZEhKaGJuTm1iM0p0VUhKdmNITWdQU0I3WEc0Z0lIZzZJSFJ5ZFdVc1hHNGdJSGs2SUhSeWRXVXNYRzRnSUhvNklIUnlkV1ZjYm4wN1hHNWNibU52Ym5OMElGTkRRVXhGSUQwZ0ozTmpZV3hsSnp0Y2JtTnZibk4wSUZKUFZFRlVSU0E5SUNkeWIzUmhkR1VuTzF4dVkyOXVjM1FnVkZKQlRsTkdUMUpOWDFCRlVsTlFSVU5VU1ZaRklEMGdKM1J5WVc1elptOXliVkJsY25Od1pXTjBhWFpsSnp0Y2JtTnZibk4wSUZSRlVrMVRJRDBnV3lkMGNtRnVjMnhoZEdVbkxDQlRRMEZNUlN3Z1VrOVVRVlJGTENBbmMydGxkeWNzSUZSU1FVNVRSazlTVFY5UVJWSlRVRVZEVkVsV1JWMDdYRzVjYm5SeVlXNXpabTl5YlZCeWIzQnpXMUpQVkVGVVJWMGdQU0IwY21GdWMyWnZjbTFRY205d2MxdFRRMEZNUlYwZ1BTQjBjbUZ1YzJadmNtMVFjbTl3YzF0VVVrRk9VMFpQVWsxZlVFVlNVMUJGUTFSSlZrVmRJRDBnZEhKMVpUdGNibHh1VkVWU1RWTXVabTl5UldGamFDZ29kR1Z5YlNrZ1BUNGdZWGhsY3k1bWIzSkZZV05vS0NoaGVHbHpLU0E5UGlCMGNtRnVjMlp2Y20xUWNtOXdjMXQwWlhKdElDc2dZWGhwYzEwZ1BTQjBjblZsS1NrN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElIUnlZVzV6Wm05eWJWQnliM0J6T3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JlbmRlcmVycy9jc3MvdHJhbnNmb3JtLXByb3BzLmpzXG4gKiogbW9kdWxlIGlkID0gMjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF92YWx1ZVR5cGVzID0gcmVxdWlyZSgnLi4vLi4vaW5jL3ZhbHVlLXR5cGVzJyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgZmlsbDogX3ZhbHVlVHlwZXMuY29sb3IsXG4gIHN0cm9rZTogX3ZhbHVlVHlwZXMuY29sb3IsXG4gIHNjYWxlOiBfdmFsdWVUeXBlcy5zY2FsZSxcbiAgc2NhbGVYOiBfdmFsdWVUeXBlcy5zY2FsZSxcbiAgc2NhbGVZOiBfdmFsdWVUeXBlcy5zY2FsZSxcbiAgZDogX3ZhbHVlVHlwZXMuY29tcGxleCxcbiAgcG9pbnRzOiBfdmFsdWVUeXBlcy5jb21wbGV4LFxuICBvcGFjaXR5OiBfdmFsdWVUeXBlcy5hbHBoYSxcbiAgZmlsbE9wYWNpdHk6IF92YWx1ZVR5cGVzLmFscGhhLFxuICBzdHJva2VPcGFjaXR5OiBfdmFsdWVUeXBlcy5hbHBoYVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5eVpXNWtaWEpsY25NdmMzWm5MM1poYkhWbExYUjVjR1Z6TG1weklsMHNJbTVoYldWeklqcGJJbVpwYkd3aUxDSnpkSEp2YTJVaUxDSnpZMkZzWlNJc0luTmpZV3hsV0NJc0luTmpZV3hsV1NJc0ltUWlMQ0p3YjJsdWRITWlMQ0p2Y0dGamFYUjVJaXdpWm1sc2JFOXdZV05wZEhraUxDSnpkSEp2YTJWUGNHRmphWFI1SWwwc0ltMWhjSEJwYm1keklqb2lPenM3TzBGQlFVRTdPMnRDUVVWbE8wRkJRMkpCTEhsQ1FVUmhPMEZCUldKRExESkNRVVpoTzBGQlIySkRMREJDUVVoaE8wRkJTV0pETERKQ1FVcGhPMEZCUzJKRExESkNRVXhoTzBGQlRXSkRMSGRDUVU1aE8wRkJUMkpETERaQ1FWQmhPMEZCVVdKRExEUkNRVkpoTzBGQlUySkRMR2REUVZSaE8wRkJWV0pETzBGQlZtRXNReUlzSW1acGJHVWlPaUoyWVd4MVpTMTBlWEJsY3k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3SUdGc2NHaGhMQ0JqYjJ4dmNpd2dZMjl0Y0d4bGVDd2djMk5oYkdVZ2ZTQm1jbTl0SUNjdUxpOHVMaTlwYm1NdmRtRnNkV1V0ZEhsd1pYTW5PMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0I3WEc0Z0lHWnBiR3c2SUdOdmJHOXlMRnh1SUNCemRISnZhMlU2SUdOdmJHOXlMRnh1SUNCelkyRnNaVG9nYzJOaGJHVXNYRzRnSUhOallXeGxXRG9nYzJOaGJHVXNYRzRnSUhOallXeGxXVG9nYzJOaGJHVXNYRzRnSUdRNklHTnZiWEJzWlhnc1hHNGdJSEJ2YVc1MGN6b2dZMjl0Y0d4bGVDeGNiaUFnYjNCaFkybDBlVG9nWVd4d2FHRXNYRzRnSUdacGJHeFBjR0ZqYVhSNU9pQmhiSEJvWVN4Y2JpQWdjM1J5YjJ0bFQzQmhZMmwwZVRvZ1lXeHdhR0ZjYm4wN0lsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JlbmRlcmVycy9zdmcvdmFsdWUtdHlwZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAyOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzID0gcmVxdWlyZSgnLi90cmFuc2Zvcm0tcHJvcHMnKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2Zvcm1Qcm9wcyk7XG5cbnZhciBfdmFsdWVUeXBlcyA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMnKTtcblxudmFyIF92YWx1ZVR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ZhbHVlVHlwZXMpO1xuXG52YXIgX3ByZWZpeGVyID0gcmVxdWlyZSgnLi9wcmVmaXhlcicpO1xuXG52YXIgX3ByZWZpeGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ByZWZpeGVyKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uLy4uL2luYy91dGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgVFJBTlNMQVRFID0gJ3RyYW5zbGF0ZSc7XG52YXIgdHJhbnNsYXRlTWFwID0ge1xuICB4OiBUUkFOU0xBVEUgKyAnWCcsXG4gIHk6IFRSQU5TTEFURSArICdZJyxcbiAgejogVFJBTlNMQVRFICsgJ1onXG59O1xuXG5mdW5jdGlvbiBidWlsZFN0eWxlUHJvcGVydHlTdHJpbmcoc3RhdGUsIGNoYW5nZWRWYWx1ZXMsIGVuYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uKSB7XG4gIHZhciBwcm9wZXJ0eVN0cmluZyA9ICcnO1xuICB2YXIgdHJhbnNmb3JtU3RyaW5nID0gJyc7XG4gIHZhciBoYXNUcmFuc2Zvcm0gPSBmYWxzZTtcbiAgdmFyIHRyYW5zZm9ybUhhc1ogPSBmYWxzZTtcblxuICAvLyBGaXJzdCBjaGVjayBpZiB0aGVyZSBhcmUgYW55IGNoYW5nZWQgdHJhbnNmb3JtIHZhbHVlc1xuICAvLyBhbmQgaWYgdHJ1ZSBhZGQgYWxsIHRyYW5zZm9ybSB2YWx1ZXNcbiAgdmFyIG51bUNoYW5nZWRWYWx1ZXMgPSBjaGFuZ2VkVmFsdWVzLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1DaGFuZ2VkVmFsdWVzOyBpKyspIHtcbiAgICB2YXIga2V5ID0gY2hhbmdlZFZhbHVlc1tpXTtcblxuICAgIC8vIElmIHRoaXMgaXMgYSB0cmFuc2Zvcm0gcHJvcGVydHksIGFkZCBhbGwgb3RoZXIgdHJhbnNmb3JtIHByb3BzXG4gICAgLy8gdG8gY2hhbmdlZFZhbHVlcyBhbmQgdGhlbiBicmVha1xuICAgIGlmIChfdHJhbnNmb3JtUHJvcHMyLmRlZmF1bHRba2V5XSkge1xuICAgICAgaGFzVHJhbnNmb3JtID0gdHJ1ZTtcblxuICAgICAgZm9yICh2YXIgX2tleSBpbiBzdGF0ZSkge1xuICAgICAgICBpZiAoX3RyYW5zZm9ybVByb3BzMi5kZWZhdWx0W19rZXldICYmIGNoYW5nZWRWYWx1ZXMuaW5kZXhPZihfa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjaGFuZ2VkVmFsdWVzLnB1c2goX2tleSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgdmFyIHRvdGFsTnVtQ2hhbmdlZFZhbHVlcyA9IGNoYW5nZWRWYWx1ZXMubGVuZ3RoO1xuICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdG90YWxOdW1DaGFuZ2VkVmFsdWVzOyBfaSsrKSB7XG4gICAgdmFyIF9rZXkyID0gY2hhbmdlZFZhbHVlc1tfaV07XG4gICAgdmFyIHZhbHVlID0gc3RhdGVbX2tleTJdO1xuXG4gICAgaWYgKHRyYW5zbGF0ZU1hcFtfa2V5Ml0pIHtcbiAgICAgIF9rZXkyID0gdHJhbnNsYXRlTWFwW19rZXkyXTtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGlzIGlzIGEgbnVtYmVyIG9yIG9iamVjdCBhbmQgd2UgaGF2ZSBmaWx0ZXIsIGFwcGx5IGZpbHRlclxuICAgIGlmIChfdmFsdWVUeXBlczIuZGVmYXVsdFtfa2V5Ml0gJiYgKCgwLCBfdXRpbHMuaXNOdW0pKHZhbHVlKSB8fCAoMCwgX3V0aWxzLmlzT2JqKSh2YWx1ZSkpICYmIF92YWx1ZVR5cGVzMi5kZWZhdWx0W19rZXkyXS50cmFuc2Zvcm0pIHtcbiAgICAgIHZhbHVlID0gX3ZhbHVlVHlwZXMyLmRlZmF1bHRbX2tleTJdLnRyYW5zZm9ybSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKF90cmFuc2Zvcm1Qcm9wczIuZGVmYXVsdFtfa2V5Ml0pIHtcbiAgICAgIHRyYW5zZm9ybVN0cmluZyArPSBfa2V5MiArICcoJyArIHZhbHVlICsgJykgJztcbiAgICAgIHRyYW5zZm9ybUhhc1ogPSBfa2V5MiA9PT0gdHJhbnNsYXRlTWFwLnogPyB0cnVlIDogdHJhbnNmb3JtSGFzWjtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvcGVydHlTdHJpbmcgKz0gJzsnICsgKDAsIF9wcmVmaXhlcjIuZGVmYXVsdCkoX2tleTIsIHRydWUpICsgJzonICsgdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgLy8gSWYgd2UgaGF2ZSB0cmFuc2Zvcm0gcHJvcHMsIGJ1aWxkIGEgdHJhbnNmb3JtIHN0cmluZ1xuICBpZiAoaGFzVHJhbnNmb3JtKSB7XG4gICAgaWYgKCF0cmFuc2Zvcm1IYXNaICYmIGVuYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uKSB7XG4gICAgICB0cmFuc2Zvcm1TdHJpbmcgKz0gdHJhbnNsYXRlTWFwLnogKyAnKDApJztcbiAgICB9XG5cbiAgICBwcm9wZXJ0eVN0cmluZyArPSAnOycgKyAoMCwgX3ByZWZpeGVyMi5kZWZhdWx0KSgndHJhbnNmb3JtJywgdHJ1ZSkgKyAnOicgKyB0cmFuc2Zvcm1TdHJpbmc7XG4gIH1cblxuICByZXR1cm4gcHJvcGVydHlTdHJpbmc7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChlbGVtZW50LCB2YWx1ZXMsIGNoYW5nZWRWYWx1ZXMsIGVuYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uKSB7XG4gIHZhciBwcm9wZXJ0eVN0cmluZyA9IGJ1aWxkU3R5bGVQcm9wZXJ0eVN0cmluZyh2YWx1ZXMsIGNoYW5nZWRWYWx1ZXMsIGVuYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uKTtcbiAgZWxlbWVudC5zdHlsZS5jc3NUZXh0ICs9IHByb3BlcnR5U3RyaW5nO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5eVpXNWtaWEpsY25NdlkzTnpMM0psYm1SbGNpNXFjeUpkTENKdVlXMWxjeUk2V3lKVVVrRk9VMHhCVkVVaUxDSjBjbUZ1YzJ4aGRHVk5ZWEFpTENKNElpd2llU0lzSW5vaUxDSmlkV2xzWkZOMGVXeGxVSEp2Y0dWeWRIbFRkSEpwYm1jaUxDSnpkR0YwWlNJc0ltTm9ZVzVuWldSV1lXeDFaWE1pTENKbGJtRmliR1ZJWVhKa2QyRnlaVUZqWTJWc1pYSmhkR2x2YmlJc0luQnliM0JsY25SNVUzUnlhVzVuSWl3aWRISmhibk5tYjNKdFUzUnlhVzVuSWl3aWFHRnpWSEpoYm5ObWIzSnRJaXdpZEhKaGJuTm1iM0p0U0dGeldpSXNJbTUxYlVOb1lXNW5aV1JXWVd4MVpYTWlMQ0pzWlc1bmRHZ2lMQ0pwSWl3aWEyVjVJaXdpYVc1a1pYaFBaaUlzSW5CMWMyZ2lMQ0owYjNSaGJFNTFiVU5vWVc1blpXUldZV3gxWlhNaUxDSjJZV3gxWlNJc0luUnlZVzV6Wm05eWJTSXNJbVZzWlcxbGJuUWlMQ0oyWVd4MVpYTWlMQ0p6ZEhsc1pTSXNJbU56YzFSbGVIUWlYU3dpYldGd2NHbHVaM01pT2lJN096czdRVUZCUVRzN096dEJRVU5CT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3T3p0QlFVVkJMRWxCUVUxQkxGbEJRVmtzVjBGQmJFSTdRVUZEUVN4SlFVRk5ReXhsUVVGbE8wRkJRMjVDUXl4TFFVRkhSaXhaUVVGWkxFZEJSRWs3UVVGRmJrSkhMRXRCUVVkSUxGbEJRVmtzUjBGR1NUdEJRVWR1UWtrc1MwRkJSMG9zV1VGQldUdEJRVWhKTEVOQlFYSkNPenRCUVUxQkxGTkJRVk5MTEhkQ1FVRlVMRU5CUVd0RFF5eExRVUZzUXl4RlFVRjVRME1zWVVGQmVrTXNSVUZCZDBSRExEQkNRVUY0UkN4RlFVRnZSanRCUVVOc1JpeE5RVUZKUXl4cFFrRkJhVUlzUlVGQmNrSTdRVUZEUVN4TlFVRkpReXhyUWtGQmEwSXNSVUZCZEVJN1FVRkRRU3hOUVVGSlF5eGxRVUZsTEV0QlFXNUNPMEZCUTBFc1RVRkJTVU1zWjBKQlFXZENMRXRCUVhCQ096dEJRVVZCTzBGQlEwRTdRVUZEUVN4TlFVRk5ReXh0UWtGQmJVSk9MR05CUVdOUExFMUJRWFpETzBGQlEwRXNUMEZCU3l4SlFVRkpReXhKUVVGSkxFTkJRV0lzUlVGQlowSkJMRWxCUVVsR0xHZENRVUZ3UWl4RlFVRnpRMFVzUjBGQmRFTXNSVUZCTWtNN1FVRkRla01zVVVGQlRVTXNUVUZCVFZRc1kwRkJZMUVzUTBGQlpDeERRVUZhT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hSUVVGSkxIbENRVUZsUXl4SFFVRm1MRU5CUVVvc1JVRkJlVUk3UVVGRGRrSk1MSEZDUVVGbExFbEJRV1k3TzBGQlJVRXNWMEZCU3l4SlFVRkpTeXhKUVVGVUxFbEJRV2RDVml4TFFVRm9RaXhGUVVGMVFqdEJRVU55UWl4WlFVRkpMSGxDUVVGbFZTeEpRVUZtTEV0QlFYVkNWQ3hqUVVGalZTeFBRVUZrTEVOQlFYTkNSQ3hKUVVGMFFpeE5RVUVyUWl4RFFVRkRMRU5CUVRORUxFVkJRVGhFTzBGQlF6VkVWQ3gzUWtGQlkxY3NTVUZCWkN4RFFVRnRRa1lzU1VGQmJrSTdRVUZEUkR0QlFVTkdPenRCUVVWRU8wRkJRMFE3UVVGRFJqczdRVUZGUkN4TlFVRk5SeXgzUWtGQmQwSmFMR05CUVdOUExFMUJRVFZETzBGQlEwRXNUMEZCU3l4SlFVRkpReXhMUVVGSkxFTkJRV0lzUlVGQlowSkJMRXRCUVVsSkxIRkNRVUZ3UWl4RlFVRXlRMG9zU1VGQk0wTXNSVUZCWjBRN1FVRkRPVU1zVVVGQlNVTXNVVUZCVFZRc1kwRkJZMUVzUlVGQlpDeERRVUZXTzBGQlEwRXNVVUZCU1Vzc1VVRkJVV1FzVFVGQlRWVXNTMEZCVGl4RFFVRmFPenRCUVVWQkxGRkJRVWxtTEdGQlFXRmxMRXRCUVdJc1EwRkJTaXhGUVVGMVFqdEJRVU55UWtFc1kwRkJUV1lzWVVGQllXVXNTMEZCWWl4RFFVRk9PMEZCUTBRN08wRkJSVVE3UVVGRFFTeFJRVUZKTEhGQ1FVRlhRU3hMUVVGWUxFMUJRVzlDTEd0Q1FVRk5TU3hMUVVGT0xFdEJRV2RDTEd0Q1FVRk5RU3hMUVVGT0xFTkJRWEJETEV0QlFYRkVMSEZDUVVGWFNpeExRVUZZTEVWQlFXZENTeXhUUVVGNlJTeEZRVUZ2Ump0QlFVTnNSa1FzWTBGQlVTeHhRa0ZCVjBvc1MwRkJXQ3hGUVVGblFrc3NVMEZCYUVJc1EwRkJNRUpFTEV0QlFURkNMRU5CUVZJN1FVRkRSRHM3UVVGRlJDeFJRVUZKTEhsQ1FVRmxTaXhMUVVGbUxFTkJRVW9zUlVGQmVVSTdRVUZEZGtKT0xIbENRVUZ0UWswc1VVRkJUU3hIUVVGT0xFZEJRVmxKTEV0QlFWb3NSMEZCYjBJc1NVRkJka003UVVGRFFWSXNjMEpCUVdsQ1NTeFZRVUZSWml4aFFVRmhSeXhEUVVGMFFpeEhRVUV5UWl4SlFVRXpRaXhIUVVGclExRXNZVUZCYkVRN1FVRkZSQ3hMUVVwRUxFMUJTVTg3UVVGRFRFZ3NkMEpCUVd0Q0xFMUJRVTBzZDBKQlFWTlBMRXRCUVZRc1JVRkJZeXhKUVVGa0xFTkJRVTRzUjBGQk5FSXNSMEZCTlVJc1IwRkJhME5KTEV0QlFYQkVPMEZCUTBRN1FVRkRSanM3UVVGRlJEdEJRVU5CTEUxQlFVbFVMRmxCUVVvc1JVRkJhMEk3UVVGRGFFSXNVVUZCU1N4RFFVRkRReXhoUVVGRUxFbEJRV3RDU2l3d1FrRkJkRUlzUlVGQmEwUTdRVUZEYUVSRkxIbENRVUZ0UWxRc1lVRkJZVWNzUTBGQllpeEhRVUZwUWl4TFFVRndRenRCUVVORU96dEJRVVZFU3l4elFrRkJhMElzVFVGQlRTeDNRa0ZCVXl4WFFVRlVMRVZCUVhOQ0xFbEJRWFJDTEVOQlFVNHNSMEZCYjBNc1IwRkJjRU1zUjBGQk1FTkRMR1ZCUVRWRU8wRkJRMFE3TzBGQlJVUXNVMEZCVDBRc1kwRkJVRHRCUVVORU96dHJRa0ZGWXl4VlFVRkRZU3hQUVVGRUxFVkJRVlZETEUxQlFWWXNSVUZCYTBKb1FpeGhRVUZzUWl4RlFVRnBRME1zTUVKQlFXcERMRVZCUVdkRk8wRkJRemRGTEUxQlFVMURMR2xDUVVGcFFrb3NlVUpCUVhsQ2EwSXNUVUZCZWtJc1JVRkJhVU5vUWl4aFFVRnFReXhGUVVGblJFTXNNRUpCUVdoRUxFTkJRWFpDTzBGQlEwRmpMRlZCUVZGRkxFdEJRVklzUTBGQlkwTXNUMEZCWkN4SlFVRjVRbWhDTEdOQlFYcENPMEZCUTBRc1F5SXNJbVpwYkdVaU9pSnlaVzVrWlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZEhKaGJuTm1iM0p0VUhKdmNITWdabkp2YlNBbkxpOTBjbUZ1YzJadmNtMHRjSEp2Y0hNbk8xeHVhVzF3YjNKMElIWmhiSFZsVkhsd1pYTWdabkp2YlNBbkxpOTJZV3gxWlMxMGVYQmxjeWM3WEc1cGJYQnZjblFnY0hKbFptbDRaWElnWm5KdmJTQW5MaTl3Y21WbWFYaGxjaWM3WEc1cGJYQnZjblFnZXlCcGMwNTFiU3dnYVhOUFltb2dmU0JtY205dElDY3VMaTh1TGk5cGJtTXZkWFJwYkhNbk8xeHVYRzVqYjI1emRDQlVVa0ZPVTB4QlZFVWdQU0FuZEhKaGJuTnNZWFJsSnp0Y2JtTnZibk4wSUhSeVlXNXpiR0YwWlUxaGNDQTlJSHRjYmlBZ2VEb2dWRkpCVGxOTVFWUkZJQ3NnSjFnbkxGeHVJQ0I1T2lCVVVrRk9VMHhCVkVVZ0t5QW5XU2NzWEc0Z0lIbzZJRlJTUVU1VFRFRlVSU0FySUNkYUoxeHVmVHRjYmx4dVpuVnVZM1JwYjI0Z1luVnBiR1JUZEhsc1pWQnliM0JsY25SNVUzUnlhVzVuS0hOMFlYUmxMQ0JqYUdGdVoyVmtWbUZzZFdWekxDQmxibUZpYkdWSVlYSmtkMkZ5WlVGalkyVnNaWEpoZEdsdmJpa2dlMXh1SUNCc1pYUWdjSEp2Y0dWeWRIbFRkSEpwYm1jZ1BTQW5KenRjYmlBZ2JHVjBJSFJ5WVc1elptOXliVk4wY21sdVp5QTlJQ2NuTzF4dUlDQnNaWFFnYUdGelZISmhibk5tYjNKdElEMGdabUZzYzJVN1hHNGdJR3hsZENCMGNtRnVjMlp2Y20xSVlYTmFJRDBnWm1Gc2MyVTdYRzVjYmlBZ0x5OGdSbWx5YzNRZ1kyaGxZMnNnYVdZZ2RHaGxjbVVnWVhKbElHRnVlU0JqYUdGdVoyVmtJSFJ5WVc1elptOXliU0IyWVd4MVpYTmNiaUFnTHk4Z1lXNWtJR2xtSUhSeWRXVWdZV1JrSUdGc2JDQjBjbUZ1YzJadmNtMGdkbUZzZFdWelhHNGdJR052Ym5OMElHNTFiVU5vWVc1blpXUldZV3gxWlhNZ1BTQmphR0Z1WjJWa1ZtRnNkV1Z6TG14bGJtZDBhRHRjYmlBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQnVkVzFEYUdGdVoyVmtWbUZzZFdWek95QnBLeXNwSUh0Y2JpQWdJQ0JqYjI1emRDQnJaWGtnUFNCamFHRnVaMlZrVm1Gc2RXVnpXMmxkTzF4dVhHNGdJQ0FnTHk4Z1NXWWdkR2hwY3lCcGN5QmhJSFJ5WVc1elptOXliU0J3Y205d1pYSjBlU3dnWVdSa0lHRnNiQ0J2ZEdobGNpQjBjbUZ1YzJadmNtMGdjSEp2Y0hOY2JpQWdJQ0F2THlCMGJ5QmphR0Z1WjJWa1ZtRnNkV1Z6SUdGdVpDQjBhR1Z1SUdKeVpXRnJYRzRnSUNBZ2FXWWdLSFJ5WVc1elptOXliVkJ5YjNCelcydGxlVjBwSUh0Y2JpQWdJQ0FnSUdoaGMxUnlZVzV6Wm05eWJTQTlJSFJ5ZFdVN1hHNWNiaUFnSUNBZ0lHWnZjaUFvYkdWMElHdGxlU0JwYmlCemRHRjBaU2tnZTF4dUlDQWdJQ0FnSUNCcFppQW9kSEpoYm5ObWIzSnRVSEp2Y0hOYmEyVjVYU0FtSmlCamFHRnVaMlZrVm1Gc2RXVnpMbWx1WkdWNFQyWW9hMlY1S1NBOVBUMGdMVEVwSUh0Y2JpQWdJQ0FnSUNBZ0lDQmphR0Z1WjJWa1ZtRnNkV1Z6TG5CMWMyZ29hMlY1S1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQmljbVZoYXp0Y2JpQWdJQ0I5WEc0Z0lIMWNibHh1SUNCamIyNXpkQ0IwYjNSaGJFNTFiVU5vWVc1blpXUldZV3gxWlhNZ1BTQmphR0Z1WjJWa1ZtRnNkV1Z6TG14bGJtZDBhRHRjYmlBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQjBiM1JoYkU1MWJVTm9ZVzVuWldSV1lXeDFaWE03SUdrckt5a2dlMXh1SUNBZ0lHeGxkQ0JyWlhrZ1BTQmphR0Z1WjJWa1ZtRnNkV1Z6VzJsZE8xeHVJQ0FnSUd4bGRDQjJZV3gxWlNBOUlITjBZWFJsVzJ0bGVWMDdYRzVjYmlBZ0lDQnBaaUFvZEhKaGJuTnNZWFJsVFdGd1cydGxlVjBwSUh0Y2JpQWdJQ0FnSUd0bGVTQTlJSFJ5WVc1emJHRjBaVTFoY0Z0clpYbGRPMXh1SUNBZ0lIMWNibHh1SUNBZ0lDOHZJRWxtSUhSb2FYTWdhWE1nWVNCdWRXMWlaWElnYjNJZ2IySnFaV04wSUdGdVpDQjNaU0JvWVhabElHWnBiSFJsY2l3Z1lYQndiSGtnWm1sc2RHVnlYRzRnSUNBZ2FXWWdLSFpoYkhWbFZIbHdaWE5iYTJWNVhTQW1KaUFvYVhOT2RXMG9kbUZzZFdVcElIeDhJR2x6VDJKcUtIWmhiSFZsS1NrZ0ppWWdkbUZzZFdWVWVYQmxjMXRyWlhsZExuUnlZVzV6Wm05eWJTa2dlMXh1SUNBZ0lDQWdkbUZzZFdVZ1BTQjJZV3gxWlZSNWNHVnpXMnRsZVYwdWRISmhibk5tYjNKdEtIWmhiSFZsS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JwWmlBb2RISmhibk5tYjNKdFVISnZjSE5iYTJWNVhTa2dlMXh1SUNBZ0lDQWdkSEpoYm5ObWIzSnRVM1J5YVc1bklDczlJR3RsZVNBcklDY29KeUFySUhaaGJIVmxJQ3NnSnlrZ0p6dGNiaUFnSUNBZ0lIUnlZVzV6Wm05eWJVaGhjMW9nUFNBb2EyVjVJRDA5UFNCMGNtRnVjMnhoZEdWTllYQXVlaWtnUHlCMGNuVmxJRG9nZEhKaGJuTm1iM0p0U0dGeldqdGNibHh1SUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNCd2NtOXdaWEowZVZOMGNtbHVaeUFyUFNBbk95Y2dLeUJ3Y21WbWFYaGxjaWhyWlhrc0lIUnlkV1VwSUNzZ0p6b25JQ3NnZG1Gc2RXVTdYRzRnSUNBZ2ZWeHVJQ0I5WEc1Y2JpQWdMeThnU1dZZ2QyVWdhR0YyWlNCMGNtRnVjMlp2Y20wZ2NISnZjSE1zSUdKMWFXeGtJR0VnZEhKaGJuTm1iM0p0SUhOMGNtbHVaMXh1SUNCcFppQW9hR0Z6VkhKaGJuTm1iM0p0S1NCN1hHNGdJQ0FnYVdZZ0tDRjBjbUZ1YzJadmNtMUlZWE5hSUNZbUlHVnVZV0pzWlVoaGNtUjNZWEpsUVdOalpXeGxjbUYwYVc5dUtTQjdYRzRnSUNBZ0lDQjBjbUZ1YzJadmNtMVRkSEpwYm1jZ0t6MGdkSEpoYm5Oc1lYUmxUV0Z3TG5vZ0t5QW5LREFwSnp0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J3Y205d1pYSjBlVk4wY21sdVp5QXJQU0FuT3ljZ0t5QndjbVZtYVhobGNpZ25kSEpoYm5ObWIzSnRKeXdnZEhKMVpTa2dLeUFuT2ljZ0t5QjBjbUZ1YzJadmNtMVRkSEpwYm1jN1hHNGdJSDFjYmx4dUlDQnlaWFIxY200Z2NISnZjR1Z5ZEhsVGRISnBibWM3WEc1OVhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElDaGxiR1Z0Wlc1MExDQjJZV3gxWlhNc0lHTm9ZVzVuWldSV1lXeDFaWE1zSUdWdVlXSnNaVWhoY21SM1lYSmxRV05qWld4bGNtRjBhVzl1S1NBOVBpQjdYRzRnSUdOdmJuTjBJSEJ5YjNCbGNuUjVVM1J5YVc1bklEMGdZblZwYkdSVGRIbHNaVkJ5YjNCbGNuUjVVM1J5YVc1bktIWmhiSFZsY3l3Z1kyaGhibWRsWkZaaGJIVmxjeXdnWlc1aFlteGxTR0Z5WkhkaGNtVkJZMk5sYkdWeVlYUnBiMjRwTzF4dUlDQmxiR1Z0Wlc1MExuTjBlV3hsTG1OemMxUmxlSFFnS3owZ2NISnZjR1Z5ZEhsVGRISnBibWM3WEc1OU95SmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZW5kZXJlcnMvY3NzL3JlbmRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdmFsdWVUeXBlcyA9IHJlcXVpcmUoJy4uLy4uL2luYy92YWx1ZS10eXBlcycpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIC8vIENvbG9yIHByb3BzXG4gIGNvbG9yOiBfdmFsdWVUeXBlcy5jb2xvcixcbiAgYmFja2dyb3VuZENvbG9yOiBfdmFsdWVUeXBlcy5jb2xvcixcbiAgb3V0bGluZUNvbG9yOiBfdmFsdWVUeXBlcy5jb2xvcixcbiAgZmlsbDogX3ZhbHVlVHlwZXMuY29sb3IsXG4gIHN0cm9rZTogX3ZhbHVlVHlwZXMuY29sb3IsXG5cbiAgLy8gQm9yZGVyIHByb3BzXG4gIGJvcmRlckNvbG9yOiBfdmFsdWVUeXBlcy5jb2xvcixcbiAgYm9yZGVyVG9wQ29sb3I6IF92YWx1ZVR5cGVzLmNvbG9yLFxuICBib3JkZXJSaWdodENvbG9yOiBfdmFsdWVUeXBlcy5jb2xvcixcbiAgYm9yZGVyQm90dG9tQ29sb3I6IF92YWx1ZVR5cGVzLmNvbG9yLFxuICBib3JkZXJMZWZ0Q29sb3I6IF92YWx1ZVR5cGVzLmNvbG9yLFxuICBib3JkZXJSYWRpdXM6IF92YWx1ZVR5cGVzLnB4LFxuXG4gIC8vIFBvc2l0aW9uaW5nXG4gIHdpZHRoOiBfdmFsdWVUeXBlcy5weCxcbiAgaGVpZ2h0OiBfdmFsdWVUeXBlcy5weCxcblxuICAvLyBUcmFuc2Zvcm0gcHJvcGVydGllc1xuICByb3RhdGU6IF92YWx1ZVR5cGVzLmRlZ3JlZXMsXG4gIHJvdGF0ZVg6IF92YWx1ZVR5cGVzLmRlZ3JlZXMsXG4gIHJvdGF0ZVk6IF92YWx1ZVR5cGVzLmRlZ3JlZXMsXG4gIHJvdGF0ZVo6IF92YWx1ZVR5cGVzLmRlZ3JlZXMsXG4gIHNjYWxlOiBfdmFsdWVUeXBlcy5zY2FsZSxcbiAgc2NhbGVYOiBfdmFsdWVUeXBlcy5zY2FsZSxcbiAgc2NhbGVZOiBfdmFsdWVUeXBlcy5zY2FsZSxcbiAgc2NhbGVaOiBfdmFsdWVUeXBlcy5zY2FsZSxcbiAgc2tld1g6IF92YWx1ZVR5cGVzLmRlZ3JlZXMsXG4gIHNrZXdZOiBfdmFsdWVUeXBlcy5kZWdyZWVzLFxuICBkaXN0YW5jZTogX3ZhbHVlVHlwZXMucHgsXG4gIHRyYW5zbGF0ZVg6IF92YWx1ZVR5cGVzLnB4LFxuICB0cmFuc2xhdGVZOiBfdmFsdWVUeXBlcy5weCxcbiAgdHJhbnNsYXRlWjogX3ZhbHVlVHlwZXMucHgsXG4gIHBlcnNwZWN0aXZlOiBfdmFsdWVUeXBlcy5weCxcbiAgb3BhY2l0eTogX3ZhbHVlVHlwZXMuYWxwaGFcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXlaVzVrWlhKbGNuTXZZM056TDNaaGJIVmxMWFI1Y0dWekxtcHpJbDBzSW01aGJXVnpJanBiSW1OdmJHOXlJaXdpWW1GamEyZHliM1Z1WkVOdmJHOXlJaXdpYjNWMGJHbHVaVU52Ykc5eUlpd2labWxzYkNJc0luTjBjbTlyWlNJc0ltSnZjbVJsY2tOdmJHOXlJaXdpWW05eVpHVnlWRzl3UTI5c2IzSWlMQ0ppYjNKa1pYSlNhV2RvZEVOdmJHOXlJaXdpWW05eVpHVnlRbTkwZEc5dFEyOXNiM0lpTENKaWIzSmtaWEpNWldaMFEyOXNiM0lpTENKaWIzSmtaWEpTWVdScGRYTWlMQ0ozYVdSMGFDSXNJbWhsYVdkb2RDSXNJbkp2ZEdGMFpTSXNJbkp2ZEdGMFpWZ2lMQ0p5YjNSaGRHVlpJaXdpY205MFlYUmxXaUlzSW5OallXeGxJaXdpYzJOaGJHVllJaXdpYzJOaGJHVlpJaXdpYzJOaGJHVmFJaXdpYzJ0bGQxZ2lMQ0p6YTJWM1dTSXNJbVJwYzNSaGJtTmxJaXdpZEhKaGJuTnNZWFJsV0NJc0luUnlZVzV6YkdGMFpWa2lMQ0owY21GdWMyeGhkR1ZhSWl3aWNHVnljM0JsWTNScGRtVWlMQ0p2Y0dGamFYUjVJbDBzSW0xaGNIQnBibWR6SWpvaU96czdPMEZCUVVFN08ydENRVU5sTzBGQlEySTdRVUZEUVVFc01FSkJSbUU3UVVGSFlrTXNiME5CU0dFN1FVRkpZa01zYVVOQlNtRTdRVUZMWWtNc2VVSkJUR0U3UVVGTllrTXNNa0pCVG1FN08wRkJVV0k3UVVGRFFVTXNaME5CVkdFN1FVRlZZa01zYlVOQlZtRTdRVUZYWWtNc2NVTkJXR0U3UVVGWllrTXNjME5CV21FN1FVRmhZa01zYjBOQlltRTdRVUZqWWtNc09FSkJaR0U3TzBGQlowSmlPMEZCUTBGRExIVkNRV3BDWVR0QlFXdENZa01zZDBKQmJFSmhPenRCUVc5Q1lqdEJRVU5CUXl3MlFrRnlRbUU3UVVGelFtSkRMRGhDUVhSQ1lUdEJRWFZDWWtNc09FSkJka0poTzBGQmQwSmlReXc0UWtGNFFtRTdRVUY1UW1KRExEQkNRWHBDWVR0QlFUQkNZa01zTWtKQk1VSmhPMEZCTWtKaVF5d3lRa0V6UW1FN1FVRTBRbUpETERKQ1FUVkNZVHRCUVRaQ1lrTXNORUpCTjBKaE8wRkJPRUppUXl3MFFrRTVRbUU3UVVFclFtSkRMREJDUVM5Q1lUdEJRV2REWWtNc05FSkJhRU5oTzBGQmFVTmlReXcwUWtGcVEyRTdRVUZyUTJKRExEUkNRV3hEWVR0QlFXMURZa01zTmtKQmJrTmhPMEZCYjBOaVF6dEJRWEJEWVN4RElpd2labWxzWlNJNkluWmhiSFZsTFhSNWNHVnpMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OXRZWFIwY0dWeWNua3ZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElIc2dZV3h3YUdFc0lHTnZiRzl5TENCa1pXZHlaV1Z6TENCelkyRnNaU3dnY0hnZ2ZTQm1jbTl0SUNjdUxpOHVMaTlwYm1NdmRtRnNkV1V0ZEhsd1pYTW5PeUJjYm1WNGNHOXlkQ0JrWldaaGRXeDBJSHRjYmlBZ0x5OGdRMjlzYjNJZ2NISnZjSE5jYmlBZ1kyOXNiM0k2SUdOdmJHOXlMRnh1SUNCaVlXTnJaM0p2ZFc1a1EyOXNiM0k2SUdOdmJHOXlMRnh1SUNCdmRYUnNhVzVsUTI5c2IzSTZJR052Ykc5eUxGeHVJQ0JtYVd4c09pQmpiMnh2Y2l4Y2JpQWdjM1J5YjJ0bE9pQmpiMnh2Y2l4Y2JseHVJQ0F2THlCQ2IzSmtaWElnY0hKdmNITmNiaUFnWW05eVpHVnlRMjlzYjNJNklHTnZiRzl5TEZ4dUlDQmliM0prWlhKVWIzQkRiMnh2Y2pvZ1kyOXNiM0lzWEc0Z0lHSnZjbVJsY2xKcFoyaDBRMjlzYjNJNklHTnZiRzl5TEZ4dUlDQmliM0prWlhKQ2IzUjBiMjFEYjJ4dmNqb2dZMjlzYjNJc1hHNGdJR0p2Y21SbGNreGxablJEYjJ4dmNqb2dZMjlzYjNJc1hHNGdJR0p2Y21SbGNsSmhaR2wxY3pvZ2NIZ3NYRzVjYmlBZ0x5OGdVRzl6YVhScGIyNXBibWRjYmlBZ2QybGtkR2c2SUhCNExGeHVJQ0JvWldsbmFIUTZJSEI0TENBZ1hHNWNiaUFnTHk4Z1ZISmhibk5tYjNKdElIQnliM0JsY25ScFpYTmNiaUFnY205MFlYUmxPaUJrWldkeVpXVnpMRnh1SUNCeWIzUmhkR1ZZT2lCa1pXZHlaV1Z6TEZ4dUlDQnliM1JoZEdWWk9pQmtaV2R5WldWekxGeHVJQ0J5YjNSaGRHVmFPaUJrWldkeVpXVnpMRnh1SUNCelkyRnNaVG9nYzJOaGJHVXNYRzRnSUhOallXeGxXRG9nYzJOaGJHVXNYRzRnSUhOallXeGxXVG9nYzJOaGJHVXNYRzRnSUhOallXeGxXam9nYzJOaGJHVXNYRzRnSUhOclpYZFlPaUJrWldkeVpXVnpMRnh1SUNCemEyVjNXVG9nWkdWbmNtVmxjeXhjYmlBZ1pHbHpkR0Z1WTJVNklIQjRMRnh1SUNCMGNtRnVjMnhoZEdWWU9pQndlQ3hjYmlBZ2RISmhibk5zWVhSbFdUb2djSGdzWEc0Z0lIUnlZVzV6YkdGMFpWbzZJSEI0TEZ4dUlDQndaWEp6Y0dWamRHbDJaVG9nY0hnc1hHNGdJRzl3WVdOcGRIazZJR0ZzY0doaFhHNTlPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcmVuZGVyZXJzL2Nzcy92YWx1ZS10eXBlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDMxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi8uLi9pbmMvdXRpbHMnKTtcblxudmFyIGNhbWVsQ2FjaGUgPSB7fTtcbnZhciBkYXNoQ2FjaGUgPSB7fTtcbnZhciBwcmVmaXhlcyA9IFsnV2Via2l0JywgJ01veicsICdPJywgJ21zJywgJyddO1xudmFyIG51bVByZWZpeGVzID0gcHJlZml4ZXMubGVuZ3RoO1xudmFyIHRlc3RFbGVtZW50ID0gdm9pZCAwO1xuXG4vKlxuICBUZXN0IHN0eWxlIHByb3BlcnR5IGZvciBwcmVmaXhlZCB2ZXJzaW9uXG4gIFxuICBAcGFyYW0gW3N0cmluZ106IFN0eWxlIHByb3BlcnR5XG4gIEByZXR1cm4gW3N0cmluZ106IENhY2hlZCBwcm9wZXJ0eSBuYW1lXG4qL1xudmFyIHRlc3RQcmVmaXggPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHRlc3RFbGVtZW50ID0gdGVzdEVsZW1lbnQgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1QcmVmaXhlczsgaSsrKSB7XG4gICAgdmFyIHByZWZpeCA9IHByZWZpeGVzW2ldO1xuICAgIHZhciBub1ByZWZpeCA9IHByZWZpeCA9PT0gJyc7XG4gICAgdmFyIHByZWZpeGVkUHJvcGVydHlOYW1lID0gbm9QcmVmaXggPyBrZXkgOiBwcmVmaXggKyBrZXkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBrZXkuc2xpY2UoMSk7XG5cbiAgICBpZiAocHJlZml4ZWRQcm9wZXJ0eU5hbWUgaW4gdGVzdEVsZW1lbnQuc3R5bGUpIHtcbiAgICAgIGNhbWVsQ2FjaGVba2V5XSA9IHByZWZpeGVkUHJvcGVydHlOYW1lO1xuICAgICAgZGFzaENhY2hlW2tleV0gPSAnJyArIChub1ByZWZpeCA/ICcnIDogJy0nKSArICgwLCBfdXRpbHMuY2FtZWxUb0Rhc2gpKHByZWZpeGVkUHJvcGVydHlOYW1lKTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChrZXksIGFzRGFzaENhc2UpIHtcbiAgdmFyIGNhY2hlID0gYXNEYXNoQ2FzZSA/IGRhc2hDYWNoZSA6IGNhbWVsQ2FjaGU7XG5cbiAgaWYgKCFjYWNoZVtrZXldKSB7XG4gICAgdGVzdFByZWZpeChrZXkpO1xuICB9XG5cbiAgcmV0dXJuIGNhY2hlW2tleV07XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl5Wlc1a1pYSmxjbk12WTNOekwzQnlaV1pwZUdWeUxtcHpJbDBzSW01aGJXVnpJanBiSW1OaGJXVnNRMkZqYUdVaUxDSmtZWE5vUTJGamFHVWlMQ0p3Y21WbWFYaGxjeUlzSW01MWJWQnlaV1pwZUdWeklpd2liR1Z1WjNSb0lpd2lkR1Z6ZEVWc1pXMWxiblFpTENKMFpYTjBVSEpsWm1sNElpd2lhMlY1SWl3aVpHOWpkVzFsYm5RaUxDSmpjbVZoZEdWRmJHVnRaVzUwSWl3aWFTSXNJbkJ5WldacGVDSXNJbTV2VUhKbFptbDRJaXdpY0hKbFptbDRaV1JRY205d1pYSjBlVTVoYldVaUxDSmphR0Z5UVhRaUxDSjBiMVZ3Y0dWeVEyRnpaU0lzSW5Oc2FXTmxJaXdpYzNSNWJHVWlMQ0poYzBSaGMyaERZWE5sSWl3aVkyRmphR1VpWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3UVVGQlFUczdRVUZGUVN4SlFVRk5RU3hoUVVGaExFVkJRVzVDTzBGQlEwRXNTVUZCVFVNc1dVRkJXU3hGUVVGc1FqdEJRVU5CTEVsQlFVMURMRmRCUVZjc1EwRkJReXhSUVVGRUxFVkJRVlVzUzBGQlZpeEZRVUZuUWl4SFFVRm9RaXhGUVVGdlFpeEpRVUZ3UWl4RlFVRXdRaXhGUVVFeFFpeERRVUZxUWp0QlFVTkJMRWxCUVUxRExHTkJRV05FTEZOQlFWTkZMRTFCUVRkQ08wRkJRMEVzU1VGQlNVTXNiMEpCUVVvN08wRkJSVUU3T3pzN096dEJRVTFCTEVsQlFVMURMR0ZCUVdFc1ZVRkJRME1zUjBGQlJDeEZRVUZUTzBGQlF6RkNSaXhuUWtGQlkwRXNaVUZCWlVjc1UwRkJVME1zWVVGQlZDeERRVUYxUWl4TFFVRjJRaXhEUVVFM1FqczdRVUZGUVN4UFFVRkxMRWxCUVVsRExFbEJRVWtzUTBGQllpeEZRVUZuUWtFc1NVRkJTVkFzVjBGQmNFSXNSVUZCYVVOUExFZEJRV3BETEVWQlFYTkRPMEZCUTNCRExGRkJRVTFETEZOQlFWTlVMRk5CUVZOUkxFTkJRVlFzUTBGQlpqdEJRVU5CTEZGQlFVMUZMRmRCUVZsRUxGZEJRVmNzUlVGQk4wSTdRVUZEUVN4UlFVRk5SU3gxUWtGQmRVSkVMRmRCUVZkTUxFZEJRVmdzUjBGQmFVSkpMRk5CUVZOS0xFbEJRVWxQTEUxQlFVb3NRMEZCVnl4RFFVRllMRVZCUVdORExGZEJRV1FzUlVGQlZDeEhRVUYxUTFJc1NVRkJTVk1zUzBGQlNpeERRVUZWTEVOQlFWWXNRMEZCY2tZN08wRkJSVUVzVVVGQlNVZ3NkMEpCUVhkQ1VpeFpRVUZaV1N4TFFVRjRReXhGUVVFclF6dEJRVU0zUTJwQ0xHbENRVUZYVHl4SFFVRllMRWxCUVd0Q1RTeHZRa0ZCYkVJN1FVRkRRVm9zWjBKQlFWVk5MRWRCUVZZc1ZVRkJjVUpMTEZkQlFWY3NSVUZCV0N4SFFVRm5RaXhIUVVGeVF5eEpRVUUwUXl4M1FrRkJXVU1zYjBKQlFWb3NRMEZCTlVNN1FVRkRSRHRCUVVOR08wRkJRMFlzUTBGaVJEczdhMEpCWldVc1ZVRkJRMDRzUjBGQlJDeEZRVUZOVnl4VlFVRk9MRVZCUVhGQ08wRkJRMnhETEUxQlFVMURMRkZCUVZGRUxHRkJRV0ZxUWl4VFFVRmlMRWRCUVhsQ1JDeFZRVUYyUXpzN1FVRkZRU3hOUVVGSkxFTkJRVU50UWl4TlFVRk5XaXhIUVVGT0xFTkJRVXdzUlVGQmFVSTdRVUZEWmtRc1pVRkJWME1zUjBGQldEdEJRVU5FT3p0QlFVVkVMRk5CUVU5WkxFMUJRVTFhTEVkQlFVNHNRMEZCVUR0QlFVTkVMRU1pTENKbWFXeGxJam9pY0hKbFptbDRaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoZEhSd1pYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdleUJqWVcxbGJGUnZSR0Z6YUNCOUlHWnliMjBnSnk0dUx5NHVMMmx1WXk5MWRHbHNjeWM3WEc1Y2JtTnZibk4wSUdOaGJXVnNRMkZqYUdVZ1BTQjdmVHRjYm1OdmJuTjBJR1JoYzJoRFlXTm9aU0E5SUh0OU8xeHVZMjl1YzNRZ2NISmxabWw0WlhNZ1BTQmJKMWRsWW10cGRDY3NKMDF2ZWljc0owOG5MQ2R0Y3ljc0lDY25YVHRjYm1OdmJuTjBJRzUxYlZCeVpXWnBlR1Z6SUQwZ2NISmxabWw0WlhNdWJHVnVaM1JvTzF4dWJHVjBJSFJsYzNSRmJHVnRaVzUwTzF4dVhHNHZLbHh1SUNCVVpYTjBJSE4wZVd4bElIQnliM0JsY25SNUlHWnZjaUJ3Y21WbWFYaGxaQ0IyWlhKemFXOXVYRzRnSUZ4dUlDQkFjR0Z5WVcwZ1czTjBjbWx1WjEwNklGTjBlV3hsSUhCeWIzQmxjblI1WEc0Z0lFQnlaWFIxY200Z1czTjBjbWx1WjEwNklFTmhZMmhsWkNCd2NtOXdaWEowZVNCdVlXMWxYRzRxTDF4dVkyOXVjM1FnZEdWemRGQnlaV1pwZUNBOUlDaHJaWGtwSUQwK0lIdGNiaUFnZEdWemRFVnNaVzFsYm5RZ1BTQjBaWE4wUld4bGJXVnVkQ0I4ZkNCa2IyTjFiV1Z1ZEM1amNtVmhkR1ZGYkdWdFpXNTBLQ2RrYVhZbktUdGNibHh1SUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElHNTFiVkJ5WldacGVHVnpPeUJwS3lzcElIdGNiaUFnSUNCamIyNXpkQ0J3Y21WbWFYZ2dQU0J3Y21WbWFYaGxjMXRwWFR0Y2JpQWdJQ0JqYjI1emRDQnViMUJ5WldacGVDQTlJQ2h3Y21WbWFYZ2dQVDA5SUNjbktUdGNiaUFnSUNCamIyNXpkQ0J3Y21WbWFYaGxaRkJ5YjNCbGNuUjVUbUZ0WlNBOUlHNXZVSEpsWm1sNElEOGdhMlY1SURvZ2NISmxabWw0SUNzZ2EyVjVMbU5vWVhKQmRDZ3dLUzUwYjFWd2NHVnlRMkZ6WlNncElDc2dhMlY1TG5Oc2FXTmxLREVwTzF4dVhHNGdJQ0FnYVdZZ0tIQnlaV1pwZUdWa1VISnZjR1Z5ZEhsT1lXMWxJR2x1SUhSbGMzUkZiR1Z0Wlc1MExuTjBlV3hsS1NCN1hHNGdJQ0FnSUNCallXMWxiRU5oWTJobFcydGxlVjBnUFNCd2NtVm1hWGhsWkZCeWIzQmxjblI1VG1GdFpUdGNiaUFnSUNBZ0lHUmhjMmhEWVdOb1pWdHJaWGxkSUQwZ1lDUjdLRzV2VUhKbFptbDRJRDhnSnljZ09pQW5MU2NwZlNSN1kyRnRaV3hVYjBSaGMyZ29jSEpsWm1sNFpXUlFjbTl3WlhKMGVVNWhiV1VwZldBN1hHNGdJQ0FnZlZ4dUlDQjlYRzU5TzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENBb2EyVjVMQ0JoYzBSaGMyaERZWE5sS1NBOVBpQjdYRzRnSUdOdmJuTjBJR05oWTJobElEMGdZWE5FWVhOb1EyRnpaU0EvSUdSaGMyaERZV05vWlNBNklHTmhiV1ZzUTJGamFHVTdYRzVjYmlBZ2FXWWdLQ0ZqWVdOb1pWdHJaWGxkS1NCN1hHNGdJQ0FnZEdWemRGQnlaV1pwZUNoclpYa3BPMXh1SUNCOVhHNWNiaUFnY21WMGRYSnVJR05oWTJobFcydGxlVjA3WEc1OU8xeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZW5kZXJlcnMvY3NzL3ByZWZpeGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8qXG4gIENvbnZlcnQgcGVyY2VudGFnZSB0byBwaXhlbHNcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogUGVyY2VudGFnZSBvZiB0b3RhbCBsZW5ndGhcbiAgQHBhcmFtIFtudW1iZXJdOiBUb3RhbCBsZW5ndGhcbiovXG52YXIgcGVyY2VudFRvUGl4ZWxzID0gZnVuY3Rpb24gKHBlcmNlbnQsIGxlbmd0aCkge1xuICByZXR1cm4gcGFyc2VGbG9hdChwZXJjZW50KSAvIDEwMCAqIGxlbmd0aCArICdweCc7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoc3RhdGUsIGxlbmd0aCkge1xuICB2YXIgc3R5bGVzID0ge307XG4gIHZhciBkYXNoQXJyYXlTdHlsZXMgPSB7XG4gICAgbGVuZ3RoOiAwLFxuICAgIHNwYWNpbmc6IGxlbmd0aCArICdweCdcbiAgfTtcbiAgdmFyIGhhc0Rhc2hBcnJheSA9IGZhbHNlO1xuXG4gIGZvciAodmFyIGtleSBpbiBzdGF0ZSkge1xuICAgIGlmIChzdGF0ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICB2YXIgdmFsdWUgPSBzdGF0ZVtrZXldO1xuXG4gICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICBjYXNlICdsZW5ndGgnOlxuICAgICAgICBjYXNlICdzcGFjaW5nJzpcbiAgICAgICAgICBoYXNEYXNoQXJyYXkgPSB0cnVlO1xuICAgICAgICAgIGRhc2hBcnJheVN0eWxlc1trZXldID0gcGVyY2VudFRvUGl4ZWxzKHZhbHVlLCBsZW5ndGgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdvZmZzZXQnOlxuICAgICAgICAgIHN0eWxlc1snc3Ryb2tlLWRhc2hvZmZzZXQnXSA9IHBlcmNlbnRUb1BpeGVscygtdmFsdWUsIGxlbmd0aCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgc3R5bGVzW2tleV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoaGFzRGFzaEFycmF5KSB7XG4gICAgc3R5bGVzWydzdHJva2UtZGFzaGFycmF5J10gPSBkYXNoQXJyYXlTdHlsZXMubGVuZ3RoICsgJyAnICsgZGFzaEFycmF5U3R5bGVzLnNwYWNpbmc7XG4gIH1cblxuICByZXR1cm4gc3R5bGVzO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5eVpXNWtaWEpsY25NdmMzWm5MWEJoZEdndlluVnBiR1F1YW5NaVhTd2libUZ0WlhNaU9sc2ljR1Z5WTJWdWRGUnZVR2w0Wld4eklpd2ljR1Z5WTJWdWRDSXNJbXhsYm1kMGFDSXNJbkJoY25ObFJteHZZWFFpTENKemRHRjBaU0lzSW5OMGVXeGxjeUlzSW1SaGMyaEJjbkpoZVZOMGVXeGxjeUlzSW5Od1lXTnBibWNpTENKb1lYTkVZWE5vUVhKeVlYa2lMQ0pyWlhraUxDSm9ZWE5QZDI1UWNtOXdaWEowZVNJc0luWmhiSFZsSWwwc0ltMWhjSEJwYm1keklqb2lPenM3UVVGQlFUczdPenM3TzBGQlRVRXNTVUZCVFVFc2EwSkJRV3RDTEZWQlFVTkRMRTlCUVVRc1JVRkJWVU1zVFVGQlZqdEJRVUZCTEZOQlFYTkNReXhYUVVGWFJpeFBRVUZZTEVsQlFYTkNMRWRCUVhaQ0xFZEJRVGhDUXl4TlFVRTVRaXhIUVVGMVF5eEpRVUUxUkR0QlFVRkJMRU5CUVhoQ096dHJRa0ZGWlN4VlFVRkRSU3hMUVVGRUxFVkJRVkZHTEUxQlFWSXNSVUZCYlVJN1FVRkRhRU1zVFVGQlRVY3NVMEZCVXl4RlFVRm1PMEZCUTBFc1RVRkJUVU1zYTBKQlFXdENPMEZCUTNSQ1NpeFpRVUZSTEVOQlJHTTdRVUZGZEVKTExHRkJRVk5NTEZOQlFWTTdRVUZHU1N4SFFVRjRRanRCUVVsQkxFMUJRVWxOTEdWQlFXVXNTMEZCYmtJN08wRkJSVUVzVDBGQlN5eEpRVUZKUXl4SFFVRlVMRWxCUVdkQ1RDeExRVUZvUWl4RlFVRjFRanRCUVVOeVFpeFJRVUZKUVN4TlFVRk5UU3hqUVVGT0xFTkJRWEZDUkN4SFFVRnlRaXhEUVVGS0xFVkJRU3RDTzBGQlF6ZENMRlZCUVUxRkxGRkJRVkZRTEUxQlFVMUxMRWRCUVU0c1EwRkJaRHM3UVVGRlFTeGpRVUZSUVN4SFFVRlNPMEZCUTBFc1lVRkJTeXhSUVVGTU8wRkJRMEVzWVVGQlN5eFRRVUZNTzBGQlEwVkVMSGxDUVVGbExFbEJRV1k3UVVGRFFVWXNNRUpCUVdkQ1J5eEhRVUZvUWl4SlFVRjFRbFFzWjBKQlFXZENWeXhMUVVGb1FpeEZRVUYxUWxRc1RVRkJka0lzUTBGQmRrSTdRVUZEUVR0QlFVTkdMR0ZCUVVzc1VVRkJURHRCUVVORlJ5eHBRa0ZCVHl4dFFrRkJVQ3hKUVVFNFFrd3NaMEpCUVdkQ0xFTkJRVU5YTEV0QlFXcENMRVZCUVhkQ1ZDeE5RVUY0UWl4RFFVRTVRanRCUVVOQk8wRkJRMFk3UVVGRFJVY3NhVUpCUVU5SkxFZEJRVkFzU1VGQlkwVXNTMEZCWkR0QlFWWkdPMEZCV1VRN1FVRkRSanM3UVVGRlJDeE5RVUZKU0N4WlFVRktMRVZCUVd0Q08wRkJRMmhDU0N4WFFVRlBMR3RDUVVGUUxFbEJRVFpDUXl4blFrRkJaMEpLTEUxQlFXaENMRWRCUVhsQ0xFZEJRWHBDTEVkQlFTdENTU3huUWtGQlowSkRMRTlCUVRWRk8wRkJRMFE3TzBGQlJVUXNVMEZCVDBZc1RVRkJVRHRCUVVORUxFTWlMQ0ptYVd4bElqb2lZblZwYkdRdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJdktseHVJQ0JEYjI1MlpYSjBJSEJsY21ObGJuUmhaMlVnZEc4Z2NHbDRaV3h6WEc0Z0lGeHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRkJsY21ObGJuUmhaMlVnYjJZZ2RHOTBZV3dnYkdWdVozUm9YRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVkc5MFlXd2diR1Z1WjNSb1hHNHFMMXh1WTI5dWMzUWdjR1Z5WTJWdWRGUnZVR2w0Wld4eklEMGdLSEJsY21ObGJuUXNJR3hsYm1kMGFDa2dQVDRnS0hCaGNuTmxSbXh2WVhRb2NHVnlZMlZ1ZENrZ0x5QXhNREFwSUNvZ2JHVnVaM1JvSUNzZ0ozQjRKenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnS0hOMFlYUmxMQ0JzWlc1bmRHZ3BJRDArSUh0Y2JpQWdZMjl1YzNRZ2MzUjViR1Z6SUQwZ2UzMDdYRzRnSUdOdmJuTjBJR1JoYzJoQmNuSmhlVk4wZVd4bGN5QTlJSHRjYmlBZ0lDQnNaVzVuZEdnNklEQXNYRzRnSUNBZ2MzQmhZMmx1WnpvZ2JHVnVaM1JvSUNzZ0ozQjRKMXh1SUNCOU8xeHVJQ0JzWlhRZ2FHRnpSR0Z6YUVGeWNtRjVJRDBnWm1Gc2MyVTdYRzVjYmlBZ1ptOXlJQ2hzWlhRZ2EyVjVJR2x1SUhOMFlYUmxLU0I3WEc0Z0lDQWdhV1lnS0hOMFlYUmxMbWhoYzA5M2JsQnliM0JsY25SNUtHdGxlU2twSUh0Y2JpQWdJQ0FnSUdOdmJuTjBJSFpoYkhWbElEMGdjM1JoZEdWYmEyVjVYVHRjYmx4dUlDQWdJQ0FnYzNkcGRHTm9JQ2hyWlhrcElIdGNiaUFnSUNBZ0lHTmhjMlVnSjJ4bGJtZDBhQ2M2WEc0Z0lDQWdJQ0JqWVhObElDZHpjR0ZqYVc1bkp6cGNiaUFnSUNBZ0lDQWdhR0Z6UkdGemFFRnljbUY1SUQwZ2RISjFaVHRjYmlBZ0lDQWdJQ0FnWkdGemFFRnljbUY1VTNSNWJHVnpXMnRsZVYwZ1BTQndaWEpqWlc1MFZHOVFhWGhsYkhNb2RtRnNkV1VzSUd4bGJtZDBhQ2s3WEc0Z0lDQWdJQ0FnSUdKeVpXRnJPMXh1SUNBZ0lDQWdZMkZ6WlNBbmIyWm1jMlYwSnpwY2JpQWdJQ0FnSUNBZ2MzUjViR1Z6V3lkemRISnZhMlV0WkdGemFHOW1abk5sZENkZElEMGdjR1Z5WTJWdWRGUnZVR2w0Wld4ektDMTJZV3gxWlN3Z2JHVnVaM1JvS1R0Y2JpQWdJQ0FnSUNBZ1luSmxZV3M3WEc0Z0lDQWdJQ0JrWldaaGRXeDBPbHh1SUNBZ0lDQWdJQ0J6ZEhsc1pYTmJhMlY1WFNBOUlIWmhiSFZsTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUdsbUlDaG9ZWE5FWVhOb1FYSnlZWGtwSUh0Y2JpQWdJQ0J6ZEhsc1pYTmJKM04wY205clpTMWtZWE5vWVhKeVlYa25YU0E5SUdSaGMyaEJjbkpoZVZOMGVXeGxjeTVzWlc1bmRHZ2dLeUFuSUNjZ0t5QmtZWE5vUVhKeVlYbFRkSGxzWlhNdWMzQmhZMmx1Wnp0Y2JpQWdmVnh1WEc0Z0lISmxkSFZ5YmlCemRIbHNaWE03WEc1OU95SmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZW5kZXJlcnMvc3ZnLXBhdGgvYnVpbGQuanNcbiAqKiBtb2R1bGUgaWQgPSAzM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIiLCJmaWxlIjoicG9wbW90aW9uLmdsb2JhbC5qcyJ9