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
	
	var Popmotion = _interopRequireWildcard(_popmotion);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	window.Popmotion = Popmotion;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9nbG9iYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7SUFBWTs7OztBQUNaLE9BQU8sU0FBUCxHQUFtQixTQUFuQiIsImZpbGUiOiJnbG9iYWwuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUG9wbW90aW9uIGZyb20gJy4vcG9wbW90aW9uJztcbndpbmRvdy5Qb3Btb3Rpb24gPSBQb3Btb3Rpb247XG4iXX0=

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.easing = exports.velocity = exports.tween = exports.Action = exports.value = exports.currentFrameTimestamp = exports.timeSinceLastFrame = exports.cancelOnFrameEnd = exports.cancelOnFrameRender = exports.cancelOnFrameUpdate = exports.cancelOnFrameStart = exports.onFrameEnd = exports.onFrameRender = exports.onFrameUpdate = exports.onFrameStart = undefined;
	
	var _framesync = __webpack_require__(4);
	
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
	
	var _value2 = __webpack_require__(5);
	
	var _value3 = _interopRequireDefault(_value2);
	
	var _actions = __webpack_require__(6);
	
	var _actions2 = _interopRequireDefault(_actions);
	
	var _tween2 = __webpack_require__(2);
	
	var _tween3 = _interopRequireDefault(_tween2);
	
	var _velocity2 = __webpack_require__(3);
	
	var _velocity3 = _interopRequireDefault(_velocity2);
	
	var _easing2 = __webpack_require__(7);
	
	var _easing = _interopRequireWildcard(_easing2);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.value = _value3.default;
	exports.Action = _actions2.default;
	exports.tween = _tween3.default;
	exports.velocity = _velocity3.default;
	exports.easing = _easing;
	
	// // Import classes - long term goal to move towards composition
	// import Action from './actions/Action';
	// import Flow from './actions/Flow';
	// import Tween from './actions/Tween';
	// import Physics from './actions/Physics';
	// import Track from './actions/Track';
	// import Task from './task/Task';
	// import Input from './input/Input';
	
	// // Export factory functions
	// export const flow = (...args) => new Flow(...args);
	// export const tween = (props) => new Tween(props);
	// export const physics = (props) => new Physics(props);
	// export const track = (...args) => new Track(...args);
	// export const input = (...args) => new Input(...args);
	// export const task = (...args) => new Task(...args);
	// export stagger from './inc/stagger';
	// export timeline from './inc/timeline';
	
	// // Adapters
	// export createAdapter from './adapter/adapter';
	// export attr from './adapter/attr-adapter';
	// export css from './adapter/css-adapter';
	// export object from './adapter/object-adapter';
	// export svg from './adapter/svg-adapter';
	// export svgPath from './adapter/svg-path-adapter';
	
	// // Easing
	// export easing from './actions/easing/preset-easing';
	// import getFlow from './actions/flow/get-flow';
	// export const detectFlow = getFlow;
	
	// // Utils
	// export * as calc from './inc/calc';
	// export * as utils from './inc/utils';
	// export { setGlobalDilation } from './task/timer';
	
	// // Value types
	// import alpha from './value-types/alpha';
	// import angle from './value-types/angle';
	// import color from './value-types/color';
	// import complex from './value-types/complex';
	// import hex from './value-types/hex';
	// import hsl from './value-types/hsl';
	// import px from './value-types/px';
	// import rgb from './value-types/rgb';
	// import scale from './value-types/scale';
	// import shadow from './value-types/shadow';
	// import unit from './value-types/unit';
	// export const valueType = { alpha, angle, color, complex, hex, hsl, px, rgb, scale, shadow, unit };
	
	// // Transformers
	// export * as transformers from './inc/transformers';
	
	// /*
	//   Returns a version of the Action bound to a Flow
	
	//   We're adding `on` here because Flow extends Action,
	//   otherwise creating a circular modular dependency. Future
	//   refactoring, ie moving to a compositional model will
	//   remove the need for us to do this here.
	// */
	// Action.prototype.on = function (element) {
	//   if (!element.connect) {
	//     element = getFlow(element);
	//   }
	
	//   return element.connect(this);
	// };
	
	// export { Action };
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wb3Btb3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztzQkFFRTs7Ozs7O3NCQUNBOzs7Ozs7c0JBQ0E7Ozs7OztzQkFDQTs7Ozs7O3NCQUNBOzs7Ozs7c0JBQ0E7Ozs7OztzQkFDQTs7Ozs7O3NCQUNBOzs7Ozs7c0JBQ0E7Ozs7OztzQkFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQUdLO1FBQ0E7UUFDQTtRQUNBO1FBQ0siLCJmaWxlIjoicG9wbW90aW9uLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbIi8vIEZyYW1lc3luYyBzY2hlZHVsZXJzXG5leHBvcnQge1xuICBvbkZyYW1lU3RhcnQsXG4gIG9uRnJhbWVVcGRhdGUsXG4gIG9uRnJhbWVSZW5kZXIsXG4gIG9uRnJhbWVFbmQsXG4gIGNhbmNlbE9uRnJhbWVTdGFydCxcbiAgY2FuY2VsT25GcmFtZVVwZGF0ZSxcbiAgY2FuY2VsT25GcmFtZVJlbmRlcixcbiAgY2FuY2VsT25GcmFtZUVuZCxcbiAgdGltZVNpbmNlTGFzdEZyYW1lLFxuICBjdXJyZW50RnJhbWVUaW1lc3RhbXBcbn0gZnJvbSAnLi9mcmFtZXN5bmMnO1xuXG5leHBvcnQgdmFsdWUgZnJvbSAnLi92YWx1ZSc7XG5leHBvcnQgQWN0aW9uIGZyb20gJy4vYWN0aW9ucyc7XG5leHBvcnQgdHdlZW4gZnJvbSAnLi9hY3Rpb25zL3R3ZWVuJztcbmV4cG9ydCB2ZWxvY2l0eSBmcm9tICcuL2FjdGlvbnMvdmVsb2NpdHknO1xuZXhwb3J0ICogYXMgZWFzaW5nIGZyb20gJy4vZWFzaW5nJztcblxuLy8gLy8gSW1wb3J0IGNsYXNzZXMgLSBsb25nIHRlcm0gZ29hbCB0byBtb3ZlIHRvd2FyZHMgY29tcG9zaXRpb25cbi8vIGltcG9ydCBBY3Rpb24gZnJvbSAnLi9hY3Rpb25zL0FjdGlvbic7XG4vLyBpbXBvcnQgRmxvdyBmcm9tICcuL2FjdGlvbnMvRmxvdyc7XG4vLyBpbXBvcnQgVHdlZW4gZnJvbSAnLi9hY3Rpb25zL1R3ZWVuJztcbi8vIGltcG9ydCBQaHlzaWNzIGZyb20gJy4vYWN0aW9ucy9QaHlzaWNzJztcbi8vIGltcG9ydCBUcmFjayBmcm9tICcuL2FjdGlvbnMvVHJhY2snO1xuLy8gaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrL1Rhc2snO1xuLy8gaW1wb3J0IElucHV0IGZyb20gJy4vaW5wdXQvSW5wdXQnO1xuXG4vLyAvLyBFeHBvcnQgZmFjdG9yeSBmdW5jdGlvbnNcbi8vIGV4cG9ydCBjb25zdCBmbG93ID0gKC4uLmFyZ3MpID0+IG5ldyBGbG93KC4uLmFyZ3MpO1xuLy8gZXhwb3J0IGNvbnN0IHR3ZWVuID0gKHByb3BzKSA9PiBuZXcgVHdlZW4ocHJvcHMpO1xuLy8gZXhwb3J0IGNvbnN0IHBoeXNpY3MgPSAocHJvcHMpID0+IG5ldyBQaHlzaWNzKHByb3BzKTtcbi8vIGV4cG9ydCBjb25zdCB0cmFjayA9ICguLi5hcmdzKSA9PiBuZXcgVHJhY2soLi4uYXJncyk7XG4vLyBleHBvcnQgY29uc3QgaW5wdXQgPSAoLi4uYXJncykgPT4gbmV3IElucHV0KC4uLmFyZ3MpO1xuLy8gZXhwb3J0IGNvbnN0IHRhc2sgPSAoLi4uYXJncykgPT4gbmV3IFRhc2soLi4uYXJncyk7XG4vLyBleHBvcnQgc3RhZ2dlciBmcm9tICcuL2luYy9zdGFnZ2VyJztcbi8vIGV4cG9ydCB0aW1lbGluZSBmcm9tICcuL2luYy90aW1lbGluZSc7XG5cbi8vIC8vIEFkYXB0ZXJzXG4vLyBleHBvcnQgY3JlYXRlQWRhcHRlciBmcm9tICcuL2FkYXB0ZXIvYWRhcHRlcic7XG4vLyBleHBvcnQgYXR0ciBmcm9tICcuL2FkYXB0ZXIvYXR0ci1hZGFwdGVyJztcbi8vIGV4cG9ydCBjc3MgZnJvbSAnLi9hZGFwdGVyL2Nzcy1hZGFwdGVyJztcbi8vIGV4cG9ydCBvYmplY3QgZnJvbSAnLi9hZGFwdGVyL29iamVjdC1hZGFwdGVyJztcbi8vIGV4cG9ydCBzdmcgZnJvbSAnLi9hZGFwdGVyL3N2Zy1hZGFwdGVyJztcbi8vIGV4cG9ydCBzdmdQYXRoIGZyb20gJy4vYWRhcHRlci9zdmctcGF0aC1hZGFwdGVyJztcblxuLy8gLy8gRWFzaW5nXG4vLyBleHBvcnQgZWFzaW5nIGZyb20gJy4vYWN0aW9ucy9lYXNpbmcvcHJlc2V0LWVhc2luZyc7XG4vLyBpbXBvcnQgZ2V0RmxvdyBmcm9tICcuL2FjdGlvbnMvZmxvdy9nZXQtZmxvdyc7XG4vLyBleHBvcnQgY29uc3QgZGV0ZWN0RmxvdyA9IGdldEZsb3c7XG5cbi8vIC8vIFV0aWxzXG4vLyBleHBvcnQgKiBhcyBjYWxjIGZyb20gJy4vaW5jL2NhbGMnO1xuLy8gZXhwb3J0ICogYXMgdXRpbHMgZnJvbSAnLi9pbmMvdXRpbHMnO1xuLy8gZXhwb3J0IHsgc2V0R2xvYmFsRGlsYXRpb24gfSBmcm9tICcuL3Rhc2svdGltZXInO1xuXG4vLyAvLyBWYWx1ZSB0eXBlc1xuLy8gaW1wb3J0IGFscGhhIGZyb20gJy4vdmFsdWUtdHlwZXMvYWxwaGEnO1xuLy8gaW1wb3J0IGFuZ2xlIGZyb20gJy4vdmFsdWUtdHlwZXMvYW5nbGUnO1xuLy8gaW1wb3J0IGNvbG9yIGZyb20gJy4vdmFsdWUtdHlwZXMvY29sb3InO1xuLy8gaW1wb3J0IGNvbXBsZXggZnJvbSAnLi92YWx1ZS10eXBlcy9jb21wbGV4Jztcbi8vIGltcG9ydCBoZXggZnJvbSAnLi92YWx1ZS10eXBlcy9oZXgnO1xuLy8gaW1wb3J0IGhzbCBmcm9tICcuL3ZhbHVlLXR5cGVzL2hzbCc7XG4vLyBpbXBvcnQgcHggZnJvbSAnLi92YWx1ZS10eXBlcy9weCc7XG4vLyBpbXBvcnQgcmdiIGZyb20gJy4vdmFsdWUtdHlwZXMvcmdiJztcbi8vIGltcG9ydCBzY2FsZSBmcm9tICcuL3ZhbHVlLXR5cGVzL3NjYWxlJztcbi8vIGltcG9ydCBzaGFkb3cgZnJvbSAnLi92YWx1ZS10eXBlcy9zaGFkb3cnO1xuLy8gaW1wb3J0IHVuaXQgZnJvbSAnLi92YWx1ZS10eXBlcy91bml0Jztcbi8vIGV4cG9ydCBjb25zdCB2YWx1ZVR5cGUgPSB7IGFscGhhLCBhbmdsZSwgY29sb3IsIGNvbXBsZXgsIGhleCwgaHNsLCBweCwgcmdiLCBzY2FsZSwgc2hhZG93LCB1bml0IH07XG5cbi8vIC8vIFRyYW5zZm9ybWVyc1xuLy8gZXhwb3J0ICogYXMgdHJhbnNmb3JtZXJzIGZyb20gJy4vaW5jL3RyYW5zZm9ybWVycyc7XG5cbi8vIC8qXG4vLyAgIFJldHVybnMgYSB2ZXJzaW9uIG9mIHRoZSBBY3Rpb24gYm91bmQgdG8gYSBGbG93XG5cbi8vICAgV2UncmUgYWRkaW5nIGBvbmAgaGVyZSBiZWNhdXNlIEZsb3cgZXh0ZW5kcyBBY3Rpb24sXG4vLyAgIG90aGVyd2lzZSBjcmVhdGluZyBhIGNpcmN1bGFyIG1vZHVsYXIgZGVwZW5kZW5jeS4gRnV0dXJlXG4vLyAgIHJlZmFjdG9yaW5nLCBpZSBtb3ZpbmcgdG8gYSBjb21wb3NpdGlvbmFsIG1vZGVsIHdpbGxcbi8vICAgcmVtb3ZlIHRoZSBuZWVkIGZvciB1cyB0byBkbyB0aGlzIGhlcmUuXG4vLyAqL1xuLy8gQWN0aW9uLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4vLyAgIGlmICghZWxlbWVudC5jb25uZWN0KSB7XG4vLyAgICAgZWxlbWVudCA9IGdldEZsb3coZWxlbWVudCk7XG4vLyAgIH1cblxuLy8gICByZXR1cm4gZWxlbWVudC5jb25uZWN0KHRoaXMpO1xuLy8gfTtcblxuLy8gZXhwb3J0IHsgQWN0aW9uIH07Il19

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _ = __webpack_require__(6);
	
	var _2 = _interopRequireDefault(_);
	
	var _framesync = __webpack_require__(4);
	
	var _transformers = __webpack_require__(8);
	
	var _calc = __webpack_require__(9);
	
	var _easing = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var restrictProgress = (0, _transformers.restrictBetween)(0, 1);
	
	var Tween = function (_Action) {
	  _inherits(Tween, _Action);
	
	  function Tween() {
	    _classCallCheck(this, Tween);
	
	    return _possibleConstructorReturn(this, _Action.apply(this, arguments));
	  }
	
	  Tween.prototype.onStart = function onStart() {
	    this.elapsed = 0;
	  };
	
	  Tween.prototype.onUpdate = function onUpdate() {
	    var _props = this.props;
	    var duration = _props.duration;
	    var ease = _props.ease;
	    var from = _props.from;
	    var to = _props.to;
	
	    this.elapsed += (0, _framesync.timeSinceLastFrame)();
	    var progress = (0, _calc.getProgressFromValue)(this.elapsed, 0, duration);
	    var easedProgress = ease(restrictProgress(progress));
	    this.current = (0, _calc.getValueFromProgress)(easedProgress, from, to);
	
	    if (this.elapsed >= duration) {
	      this.complete();
	    }
	  };
	
	  return Tween;
	}(_2.default);
	
	Tween.defaultProps = {
	  duration: 300,
	  ease: _easing.easeOut,
	  from: 0,
	  to: 0
	};
	
	exports.default = function (props) {
	  return new Tween(props);
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL3R3ZWVuLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBRUEsSUFBTSxtQkFBbUIsbUNBQWdCLENBQWhCLEVBQW1CLENBQW5CLENBQW5COztJQUVBOzs7Ozs7Ozs7a0JBUUosNkJBQVU7QUFDUixTQUFLLE9BQUwsR0FBZSxDQUFmLENBRFE7OztBQVJOLGtCQVlKLCtCQUFXO2lCQUM0QixLQUFLLEtBQUwsQ0FENUI7UUFDRCwyQkFEQztRQUNTLG1CQURUO1FBQ2UsbUJBRGY7UUFDcUIsZUFEckI7O0FBRVQsU0FBSyxPQUFMLElBQWdCLG9DQUFoQixDQUZTO0FBR1QsUUFBTSxXQUFXLGdDQUFxQixLQUFLLE9BQUwsRUFBYyxDQUFuQyxFQUFzQyxRQUF0QyxDQUFYLENBSEc7QUFJVCxRQUFNLGdCQUFnQixLQUFLLGlCQUFpQixRQUFqQixDQUFMLENBQWhCLENBSkc7QUFLVCxTQUFLLE9BQUwsR0FBZSxnQ0FBcUIsYUFBckIsRUFBb0MsSUFBcEMsRUFBMEMsRUFBMUMsQ0FBZixDQUxTOztBQU9ULFFBQUksS0FBSyxPQUFMLElBQWdCLFFBQWhCLEVBQTBCO0FBQzVCLFdBQUssUUFBTCxHQUQ0QjtLQUE5Qjs7O1NBbkJFOzs7TUFDRyxlQUFlO0FBQ3BCLFlBQVUsR0FBVjtBQUNBLHVCQUZvQjtBQUdwQixRQUFNLENBQU47QUFDQSxNQUFJLENBQUo7OztrQkFvQlcsVUFBQyxLQUFEO1NBQVcsSUFBSSxLQUFKLENBQVUsS0FBVjtDQUFYIiwiZmlsZSI6InR3ZWVuLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY3Rpb24gZnJvbSAnLi8nO1xuaW1wb3J0IHsgdGltZVNpbmNlTGFzdEZyYW1lIH0gZnJvbSAnLi4vZnJhbWVzeW5jJztcbmltcG9ydCB7IHJlc3RyaWN0QmV0d2VlbiB9IGZyb20gJy4uL3ZhbHVlL3RyYW5zZm9ybWVycyc7XG5pbXBvcnQgeyBlYXNlLCBnZXRQcm9ncmVzc0Zyb21WYWx1ZSwgZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MgfSBmcm9tICcuLi9pbmMvY2FsYyc7XG5pbXBvcnQgeyBlYXNlT3V0IH0gZnJvbSAnLi4vZWFzaW5nJztcblxuY29uc3QgcmVzdHJpY3RQcm9ncmVzcyA9IHJlc3RyaWN0QmV0d2VlbigwLCAxKTtcblxuY2xhc3MgVHdlZW4gZXh0ZW5kcyBBY3Rpb24ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgZWFzZTogZWFzZU91dCxcbiAgICBmcm9tOiAwLFxuICAgIHRvOiAwXG4gIH1cblxuICBvblN0YXJ0KCkge1xuICAgIHRoaXMuZWxhcHNlZCA9IDA7XG4gIH1cblxuICBvblVwZGF0ZSgpIHtcbiAgICBjb25zdCB7IGR1cmF0aW9uLCBlYXNlLCBmcm9tLCB0byB9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLmVsYXBzZWQgKz0gdGltZVNpbmNlTGFzdEZyYW1lKCk7XG4gICAgY29uc3QgcHJvZ3Jlc3MgPSBnZXRQcm9ncmVzc0Zyb21WYWx1ZSh0aGlzLmVsYXBzZWQsIDAsIGR1cmF0aW9uKTtcbiAgICBjb25zdCBlYXNlZFByb2dyZXNzID0gZWFzZShyZXN0cmljdFByb2dyZXNzKHByb2dyZXNzKSk7XG4gICAgdGhpcy5jdXJyZW50ID0gZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MoZWFzZWRQcm9ncmVzcywgZnJvbSwgdG8pO1xuXG4gICAgaWYgKHRoaXMuZWxhcHNlZCA+PSBkdXJhdGlvbikge1xuICAgICAgdGhpcy5jb21wbGV0ZSgpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IG5ldyBUd2Vlbihwcm9wcyk7XG4iXX0=

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _ = __webpack_require__(6);
	
	var _2 = _interopRequireDefault(_);
	
	var _framesync = __webpack_require__(4);
	
	var _calc = __webpack_require__(9);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Velocity = function (_Action) {
	  _inherits(Velocity, _Action);
	
	  function Velocity() {
	    _classCallCheck(this, Velocity);
	
	    return _possibleConstructorReturn(this, _Action.apply(this, arguments));
	  }
	
	  Velocity.prototype.onUpdate = function onUpdate() {
	    var _props = this.props;
	    var acceleration = _props.acceleration;
	    var autoStopSpeed = _props.autoStopSpeed;
	    var friction = _props.friction;
	    var velocity = _props.velocity;
	
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
	
	    // Apply velocity
	    this.current += (0, _calc.speedPerFrame)(newVelocity, elapsed);
	    this.props.velocity = newVelocity;
	
	    if (!newVelocity || Math.abs(newVelocity) <= autoStopSpeed) {
	      this.complete();
	    }
	  };
	
	  return Velocity;
	}(_2.default);
	
	Velocity.defaultProps = {
	  acceleration: 0,
	  friction: 0,
	  velocity: 0,
	  autoStopSpeed: 0.001
	};
	
	exports.default = function (props) {
	  return new Velocity(props);
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL3ZlbG9jaXR5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7O0lBRU07Ozs7Ozs7OztxQkFRSiwrQkFBVztpQkFDbUQsS0FBSyxLQUFMLENBRG5EO1FBQ0QsbUNBREM7UUFDYSxxQ0FEYjtRQUM0QiwyQkFENUI7UUFDc0MsMkJBRHRDOztBQUVULFFBQUksY0FBYyxRQUFkLENBRks7QUFHVCxRQUFNLFVBQVUsb0NBQVY7OztBQUhHLFFBTUwsWUFBSixFQUFrQjtBQUNoQixxQkFBZSx5QkFBYyxZQUFkLEVBQTRCLE9BQTVCLENBQWYsQ0FEZ0I7S0FBbEI7OztBQU5TLFFBV0wsUUFBSixFQUFjO0FBQ1osOEJBQWdCLElBQUksUUFBSixFQUFrQixVQUFVLEdBQVYsQ0FBbEMsQ0FEWTtLQUFkOzs7QUFYUyxRQWdCVCxDQUFLLE9BQUwsSUFBZ0IseUJBQWMsV0FBZCxFQUEyQixPQUEzQixDQUFoQixDQWhCUztBQWlCVCxTQUFLLEtBQUwsQ0FBVyxRQUFYLEdBQXNCLFdBQXRCLENBakJTOztBQW1CVCxRQUFJLENBQUMsV0FBRCxJQUFnQixLQUFLLEdBQUwsQ0FBUyxXQUFULEtBQXlCLGFBQXpCLEVBQXdDO0FBQzFELFdBQUssUUFBTCxHQUQwRDtLQUE1RDs7O1NBM0JFOzs7U0FDRyxlQUFlO0FBQ3BCLGdCQUFjLENBQWQ7QUFDQSxZQUFVLENBQVY7QUFDQSxZQUFVLENBQVY7QUFDQSxpQkFBZSxLQUFmOzs7a0JBNEJXLFVBQUMsS0FBRDtTQUFXLElBQUksUUFBSixDQUFhLEtBQWI7Q0FBWCIsImZpbGUiOiJ2ZWxvY2l0eS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWN0aW9uIGZyb20gJy4vJztcbmltcG9ydCB7IHRpbWVTaW5jZUxhc3RGcmFtZSB9IGZyb20gJy4uL2ZyYW1lc3luYyc7XG5pbXBvcnQgeyBzcGVlZFBlckZyYW1lIH0gZnJvbSAnLi4vaW5jL2NhbGMnO1xuXG5jbGFzcyBWZWxvY2l0eSBleHRlbmRzIEFjdGlvbiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgYWNjZWxlcmF0aW9uOiAwLFxuICAgIGZyaWN0aW9uOiAwLFxuICAgIHZlbG9jaXR5OiAwLFxuICAgIGF1dG9TdG9wU3BlZWQ6IDAuMDAxXG4gIH1cblxuICBvblVwZGF0ZSgpIHtcbiAgICBjb25zdCB7IGFjY2VsZXJhdGlvbiwgYXV0b1N0b3BTcGVlZCwgZnJpY3Rpb24sIHZlbG9jaXR5IH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCBuZXdWZWxvY2l0eSA9IHZlbG9jaXR5O1xuICAgIGNvbnN0IGVsYXBzZWQgPSB0aW1lU2luY2VMYXN0RnJhbWUoKTtcblxuICAgIC8vIEFwcGx5IGFjY2VsZXJhdGlvbiB0byB2ZWxvY2l0eVxuICAgIGlmIChhY2NlbGVyYXRpb24pIHtcbiAgICAgIG5ld1ZlbG9jaXR5ICs9IHNwZWVkUGVyRnJhbWUoYWNjZWxlcmF0aW9uLCBlbGFwc2VkKTtcbiAgICB9XG5cbiAgICAvLyBBcHBseSBmcmljdGlvbiB0byB2ZWxvY2l0eVxuICAgIGlmIChmcmljdGlvbikge1xuICAgICAgbmV3VmVsb2NpdHkgKj0gKDEgLSBmcmljdGlvbikgKiogKGVsYXBzZWQgLyAxMDApO1xuICAgIH1cblxuICAgIC8vIEFwcGx5IHZlbG9jaXR5XG4gICAgdGhpcy5jdXJyZW50ICs9IHNwZWVkUGVyRnJhbWUobmV3VmVsb2NpdHksIGVsYXBzZWQpO1xuICAgIHRoaXMucHJvcHMudmVsb2NpdHkgPSBuZXdWZWxvY2l0eTtcblxuICAgIGlmICghbmV3VmVsb2NpdHkgfHwgTWF0aC5hYnMobmV3VmVsb2NpdHkpIDw9IGF1dG9TdG9wU3BlZWQpIHtcbiAgICAgIHRoaXMuY29tcGxldGUoKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiBuZXcgVmVsb2NpdHkocHJvcHMpOyJdfQ==

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.currentFrameTimestamp = exports.timeSinceLastFrame = exports.cancelOnFrameEnd = exports.cancelOnFrameRender = exports.cancelOnFrameUpdate = exports.cancelOnFrameStart = exports.onFrameEnd = exports.onFrameRender = exports.onFrameUpdate = exports.onFrameStart = undefined;
	
	var _onNextFrame = __webpack_require__(10);
	
	var _onNextFrame2 = _interopRequireDefault(_onNextFrame);
	
	var _createRenderStep = __webpack_require__(11);
	
	var _createRenderStep2 = _interopRequireDefault(_createRenderStep);
	
	var _utils = __webpack_require__(12);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9mcmFtZXN5bmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQSxJQUFJLHNCQUFzQixLQUF0Qjs7Ozs7O0FBTUosSUFBTSxjQUFjLEVBQWQ7Ozs7OztBQU1OLElBQUksb0JBQW9CLHlCQUFwQjs7QUFFSixJQUFJLFVBQVUsQ0FBVjs7Ozs7OztBQU9KLElBQUksV0FBVyxDQUFYOztBQUVKLFNBQVMsZUFBVCxHQUEyQjtBQUN6QixNQUFJLENBQUMsbUJBQUQsRUFBc0I7QUFDeEIsMEJBQXNCLElBQXRCLENBRHdCO0FBRXhCLCtCQUFZLFlBQVosRUFGd0I7R0FBMUI7Q0FERjs7QUFPQSxJQUFNLGFBQWEsZ0NBQWlCLGVBQWpCLENBQWI7QUFDTixJQUFNLGNBQWMsZ0NBQWlCLGVBQWpCLENBQWQ7QUFDTixJQUFNLGNBQWMsZ0NBQWlCLGVBQWpCLENBQWQ7QUFDTixJQUFNLFdBQVcsZ0NBQWlCLGVBQWpCLENBQVg7O0FBRU4sU0FBUyxZQUFULENBQXNCLFVBQXRCLEVBQWtDO0FBQ2hDLHdCQUFzQixLQUF0QixDQURnQztBQUVoQyxZQUFVLEtBQUssR0FBTCxDQUFTLEtBQUssR0FBTCxDQUFTLGFBQWEsaUJBQWIsRUFBZ0MsV0FBekMsQ0FBVCxFQUFnRSxDQUFoRSxJQUFxRSxRQUFyRSxDQUZzQjtBQUdoQyxzQkFBb0IsVUFBcEIsQ0FIZ0M7O0FBS2hDLGFBQVcsT0FBWCxHQUxnQztBQU1oQyxjQUFZLE9BQVosR0FOZ0M7QUFPaEMsY0FBWSxPQUFaLEdBUGdDO0FBUWhDLFdBQVMsT0FBVCxHQVJnQztDQUFsQzs7QUFXTyxJQUFNLHNDQUFlLFdBQVcsUUFBWDtBQUNyQixJQUFNLHdDQUFnQixZQUFZLFFBQVo7QUFDdEIsSUFBTSx3Q0FBZ0IsWUFBWSxRQUFaO0FBQ3RCLElBQU0sa0NBQWEsU0FBUyxRQUFUO0FBQ25CLElBQU0sa0RBQXFCLFdBQVcsTUFBWDtBQUMzQixJQUFNLG9EQUFzQixZQUFZLE1BQVo7QUFDNUIsSUFBTSxvREFBc0IsWUFBWSxNQUFaO0FBQzVCLElBQU0sOENBQW1CLFNBQVMsTUFBVDs7QUFFekIsSUFBTSxrREFBcUI7U0FBTTtDQUFOO0FBQzNCLElBQU0sd0RBQXdCO1NBQU07Q0FBTiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgb25OZXh0RnJhbWUgZnJvbSAnLi9vbi1uZXh0LWZyYW1lJztcbmltcG9ydCBjcmVhdGVSZW5kZXJTdGVwIGZyb20gJy4vY3JlYXRlLXJlbmRlci1zdGVwJztcbmltcG9ydCB7IGN1cnJlbnRUaW1lIH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcblxubGV0IHdpbGxSZW5kZXJOZXh0RnJhbWUgPSBmYWxzZTtcblxuLyoqXG4gKiBNYXhpbXVtIHBlcm1pdHRlZCBtcyBzaW5jZSBsYXN0IGZyYW1lXG4gKiBAdHlwZSB7TnVtYmVyfVxuICovXG5jb25zdCBNQVhfRUxBUFNFRCA9IDIwO1xuXG4vKipcbiAqIEN1cnJlbnQgZnJhbWVzdGFtcFxuICogQHR5cGUge051bWJlcn1cbiAqL1xubGV0IGN1cnJlbnRGcmFtZXN0YW1wID0gY3VycmVudFRpbWUoKTtcblxubGV0IGVsYXBzZWQgPSAwO1xuXG4vKipcbiAqIEZhY3RvciB0byBtdWx0aXBseSBgZWxhcHNlZGAgYnkgLSBcbiAqIDAuNSB3b3VsZCBiZSBzbG93IG1vdGlvbiwgMiB3b3VsZCBiZSBmYXN0XG4gKiBAdHlwZSB7TnVtYmVyfVxuICovXG5sZXQgZGlsYXRpb24gPSAxO1xuXG5mdW5jdGlvbiBzdGFydFJlbmRlckxvb3AoKSB7XG4gIGlmICghd2lsbFJlbmRlck5leHRGcmFtZSkge1xuICAgIHdpbGxSZW5kZXJOZXh0RnJhbWUgPSB0cnVlO1xuICAgIG9uTmV4dEZyYW1lKHByb2Nlc3NGcmFtZSk7XG4gIH1cbn1cblxuY29uc3QgZnJhbWVTdGFydCA9IGNyZWF0ZVJlbmRlclN0ZXAoc3RhcnRSZW5kZXJMb29wKTtcbmNvbnN0IGZyYW1lVXBkYXRlID0gY3JlYXRlUmVuZGVyU3RlcChzdGFydFJlbmRlckxvb3ApO1xuY29uc3QgZnJhbWVSZW5kZXIgPSBjcmVhdGVSZW5kZXJTdGVwKHN0YXJ0UmVuZGVyTG9vcCk7XG5jb25zdCBmcmFtZUVuZCA9IGNyZWF0ZVJlbmRlclN0ZXAoc3RhcnRSZW5kZXJMb29wKTtcblxuZnVuY3Rpb24gcHJvY2Vzc0ZyYW1lKGZyYW1lc3RhbXApIHtcbiAgd2lsbFJlbmRlck5leHRGcmFtZSA9IGZhbHNlO1xuICBlbGFwc2VkID0gTWF0aC5tYXgoTWF0aC5taW4oZnJhbWVzdGFtcCAtIGN1cnJlbnRGcmFtZXN0YW1wLCBNQVhfRUxBUFNFRCksIDEpICogZGlsYXRpb247XG4gIGN1cnJlbnRGcmFtZXN0YW1wID0gZnJhbWVzdGFtcDtcblxuICBmcmFtZVN0YXJ0LnByb2Nlc3MoKTtcbiAgZnJhbWVVcGRhdGUucHJvY2VzcygpO1xuICBmcmFtZVJlbmRlci5wcm9jZXNzKCk7XG4gIGZyYW1lRW5kLnByb2Nlc3MoKTtcbn1cblxuZXhwb3J0IGNvbnN0IG9uRnJhbWVTdGFydCA9IGZyYW1lU3RhcnQuc2NoZWR1bGU7XG5leHBvcnQgY29uc3Qgb25GcmFtZVVwZGF0ZSA9IGZyYW1lVXBkYXRlLnNjaGVkdWxlO1xuZXhwb3J0IGNvbnN0IG9uRnJhbWVSZW5kZXIgPSBmcmFtZVJlbmRlci5zY2hlZHVsZTtcbmV4cG9ydCBjb25zdCBvbkZyYW1lRW5kID0gZnJhbWVFbmQuc2NoZWR1bGU7XG5leHBvcnQgY29uc3QgY2FuY2VsT25GcmFtZVN0YXJ0ID0gZnJhbWVTdGFydC5jYW5jZWw7XG5leHBvcnQgY29uc3QgY2FuY2VsT25GcmFtZVVwZGF0ZSA9IGZyYW1lVXBkYXRlLmNhbmNlbDtcbmV4cG9ydCBjb25zdCBjYW5jZWxPbkZyYW1lUmVuZGVyID0gZnJhbWVSZW5kZXIuY2FuY2VsO1xuZXhwb3J0IGNvbnN0IGNhbmNlbE9uRnJhbWVFbmQgPSBmcmFtZUVuZC5jYW5jZWw7XG5cbmV4cG9ydCBjb25zdCB0aW1lU2luY2VMYXN0RnJhbWUgPSAoKSA9PiBlbGFwc2VkO1xuZXhwb3J0IGNvbnN0IGN1cnJlbnRGcmFtZVRpbWVzdGFtcCA9ICgpID0+IGN1cnJlbnRGcmFtZXN0YW1wO1xuIl19

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Value = function () {
	  function Value(initialValue) {
	    _classCallCheck(this, Value);
	
	    this.current = initialValue;
	    this.action = null;
	    this.listeners = [];
	  }
	
	  Value.prototype.update = function update(newValue) {
	    this.current = newValue;
	
	    var numListeners = this.listeners.length;
	    for (var i = 0; i < numListeners; i++) {
	      this.listeners[i](newValue, this);
	    }
	  };
	
	  Value.prototype.get = function get() {
	    return this.current;
	  };
	
	  Value.prototype.getVelocity = function getVelocity() {
	    return this.action ? this.action.getVelocity : 0;
	  };
	
	  Value.prototype.stop = function stop() {
	    if (this.action) {
	      this.action.stop();
	      this.action = null;
	    }
	  };
	
	  Value.prototype.addListener = function addListener(callback) {
	    var listenerIndex = this.listeners.indexOf(callback);
	    if (listenerIndex !== -1) {
	      this.listeners.push(callback);
	    }
	    return this;
	  };
	
	  Value.prototype.removeListener = function removeListener(callback) {
	    var listenerIndex = this.listeners.indexOf(callback);
	    if (listenerIndex > -1) {
	      this.listeners.splice(listenerIndex, 1);
	    }
	    return this;
	  };
	
	  return Value;
	}();
	
	exports.default = function (initialValue) {
	  return new Value(initialValue);
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBTTtBQUNKLFdBREksS0FDSixDQUFZLFlBQVosRUFBMEI7MEJBRHRCLE9BQ3NCOztBQUN4QixTQUFLLE9BQUwsR0FBZSxZQUFmLENBRHdCO0FBRXhCLFNBQUssTUFBTCxHQUFjLElBQWQsQ0FGd0I7QUFHeEIsU0FBSyxTQUFMLEdBQWlCLEVBQWpCLENBSHdCO0dBQTFCOztBQURJLGtCQU9KLHlCQUFPLFVBQVU7QUFDZixTQUFLLE9BQUwsR0FBZSxRQUFmLENBRGU7O0FBR2YsUUFBTSxlQUFlLEtBQUssU0FBTCxDQUFlLE1BQWYsQ0FITjtBQUlmLFNBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLFlBQUosRUFBa0IsR0FBbEMsRUFBdUM7QUFDckMsV0FBSyxTQUFMLENBQWUsQ0FBZixFQUFrQixRQUFsQixFQUE0QixJQUE1QixFQURxQztLQUF2Qzs7O0FBWEUsa0JBZ0JKLHFCQUFNO0FBQ0osV0FBTyxLQUFLLE9BQUwsQ0FESDs7O0FBaEJGLGtCQW9CSixxQ0FBYztBQUNaLFdBQU8sSUFBQyxDQUFLLE1BQUwsR0FBZSxLQUFLLE1BQUwsQ0FBWSxXQUFaLEdBQTBCLENBQTFDLENBREs7OztBQXBCVixrQkF3QkosdUJBQU87QUFDTCxRQUFJLEtBQUssTUFBTCxFQUFhO0FBQ2YsV0FBSyxNQUFMLENBQVksSUFBWixHQURlO0FBRWYsV0FBSyxNQUFMLEdBQWMsSUFBZCxDQUZlO0tBQWpCOzs7QUF6QkUsa0JBK0JKLG1DQUFZLFVBQVU7QUFDcEIsUUFBTSxnQkFBZ0IsS0FBSyxTQUFMLENBQWUsT0FBZixDQUF1QixRQUF2QixDQUFoQixDQURjO0FBRXBCLFFBQUksa0JBQWtCLENBQUMsQ0FBRCxFQUFJO0FBQ3hCLFdBQUssU0FBTCxDQUFlLElBQWYsQ0FBb0IsUUFBcEIsRUFEd0I7S0FBMUI7QUFHQSxXQUFPLElBQVAsQ0FMb0I7OztBQS9CbEIsa0JBdUNKLHlDQUFlLFVBQVU7QUFDdkIsUUFBTSxnQkFBZ0IsS0FBSyxTQUFMLENBQWUsT0FBZixDQUF1QixRQUF2QixDQUFoQixDQURpQjtBQUV2QixRQUFJLGdCQUFnQixDQUFDLENBQUQsRUFBSTtBQUN0QixXQUFLLFNBQUwsQ0FBZSxNQUFmLENBQXNCLGFBQXRCLEVBQXFDLENBQXJDLEVBRHNCO0tBQXhCO0FBR0EsV0FBTyxJQUFQLENBTHVCOzs7U0F2Q3JCOzs7a0JBZ0RTLFVBQUMsWUFBRDtTQUFrQixJQUFJLEtBQUosQ0FBVSxZQUFWO0NBQWxCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFZhbHVlIHtcbiAgY29uc3RydWN0b3IoaW5pdGlhbFZhbHVlKSB7XG4gICAgdGhpcy5jdXJyZW50ID0gaW5pdGlhbFZhbHVlO1xuICAgIHRoaXMuYWN0aW9uID0gbnVsbDtcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xuICB9XG5cbiAgdXBkYXRlKG5ld1ZhbHVlKSB7XG4gICAgdGhpcy5jdXJyZW50ID0gbmV3VmFsdWU7XG5cbiAgICBjb25zdCBudW1MaXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVycy5sZW5ndGg7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1MaXN0ZW5lcnM7IGkrKykge1xuICAgICAgdGhpcy5saXN0ZW5lcnNbaV0obmV3VmFsdWUsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIGdldCgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50O1xuICB9XG5cbiAgZ2V0VmVsb2NpdHkoKSB7XG4gICAgcmV0dXJuICh0aGlzLmFjdGlvbikgPyB0aGlzLmFjdGlvbi5nZXRWZWxvY2l0eSA6IDA7XG4gIH1cblxuICBzdG9wKCkge1xuICAgIGlmICh0aGlzLmFjdGlvbikge1xuICAgICAgdGhpcy5hY3Rpb24uc3RvcCgpO1xuICAgICAgdGhpcy5hY3Rpb24gPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGFkZExpc3RlbmVyKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgbGlzdGVuZXJJbmRleCA9IHRoaXMubGlzdGVuZXJzLmluZGV4T2YoY2FsbGJhY2spO1xuICAgIGlmIChsaXN0ZW5lckluZGV4ICE9PSAtMSkge1xuICAgICAgdGhpcy5saXN0ZW5lcnMucHVzaChjYWxsYmFjayk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVtb3ZlTGlzdGVuZXIoY2FsbGJhY2spIHtcbiAgICBjb25zdCBsaXN0ZW5lckluZGV4ID0gdGhpcy5saXN0ZW5lcnMuaW5kZXhPZihjYWxsYmFjayk7XG4gICAgaWYgKGxpc3RlbmVySW5kZXggPiAtMSkge1xuICAgICAgdGhpcy5saXN0ZW5lcnMuc3BsaWNlKGxpc3RlbmVySW5kZXgsIDEpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAoaW5pdGlhbFZhbHVlKSA9PiBuZXcgVmFsdWUoaW5pdGlhbFZhbHVlKTtcbiJdfQ==

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _framesync = __webpack_require__(4);
	
	var _calc = __webpack_require__(9);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Action = function () {
	  function Action(props) {
	    _classCallCheck(this, Action);
	
	    this.current = 0;
	    this.velocity = 0;
	    this.update = this.update.bind(this);
	
	    this.props = _extends({}, this.constructor.defaultProps, props);
	  }
	
	  Action.prototype.start = function start() {
	    this.isActive = true;
	    (0, _framesync.onFrameUpdate)(this.update);
	
	    if (this.onStart) {
	      this.onStart();
	    }
	
	    if (this.props.onStart) {
	      this.props.onStart(this);
	    }
	
	    return this;
	  };
	
	  Action.prototype.stop = function stop() {
	    this.isActive = false;
	    (0, _framesync.cancelOnFrameUpdate)(this.update);
	
	    if (this.onStop) {
	      this.onStop();
	    }
	
	    if (this.props.onStop) {
	      this.props.onStop(this);
	    }
	
	    return this;
	  };
	
	  Action.prototype.complete = function complete() {
	    if (this.onComplete) {
	      this.onComplete();
	    }
	
	    if (this.props.onComplete) {
	      this.props.onComplete(this);
	    }
	
	    this.stop();
	
	    return this;
	  };
	
	  Action.prototype.update = function update() {
	    var current = this.current;
	    var velocity = this.velocity;
	
	    if (this.onUpdate) {
	      this.onUpdate();
	    }
	
	    this.velocity = (0, _calc.speedPerSecond)(this.current - current, (0, _framesync.timeSinceLastFrame)());
	
	    if (this.velocity) {
	      if (this.value) {
	        this.value.set(this.current);
	      }
	    }
	
	    if (this.props.onUpdate) {
	      this.props.onUpdate(this);
	    }
	
	    if (this.isActive) {
	      (0, _framesync.onFrameUpdate)(this.update);
	    }
	
	    return this;
	  };
	
	  Action.prototype.set = function set(newValue) {
	    this.current = newValue;
	  };
	
	  Action.prototype.get = function get() {
	    return this.current;
	  };
	
	  Action.prototype.getVelocity = function getVelocity() {
	    return this.velocity;
	  };
	
	  return Action;
	}();
	
	exports.default = Action;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUNBOzs7O0lBRU07QUFDSixXQURJLE1BQ0osQ0FBWSxLQUFaLEVBQW1COzBCQURmLFFBQ2U7O0FBQ2pCLFNBQUssT0FBTCxHQUFlLENBQWYsQ0FEaUI7QUFFakIsU0FBSyxRQUFMLEdBQWdCLENBQWhCLENBRmlCO0FBR2pCLFNBQUssTUFBTCxHQUFjLEtBQUssTUFBTCxDQUFZLElBQVosQ0FBaUIsSUFBakIsQ0FBZCxDQUhpQjs7QUFLakIsU0FBSyxLQUFMLGdCQUNLLEtBQUssV0FBTCxDQUFpQixZQUFqQixFQUNBLE1BRkwsQ0FMaUI7R0FBbkI7O0FBREksbUJBWUoseUJBQVE7QUFDTixTQUFLLFFBQUwsR0FBZ0IsSUFBaEIsQ0FETTtBQUVOLGtDQUFjLEtBQUssTUFBTCxDQUFkLENBRk07O0FBSU4sUUFBSSxLQUFLLE9BQUwsRUFBYztBQUNoQixXQUFLLE9BQUwsR0FEZ0I7S0FBbEI7O0FBSUEsUUFBSSxLQUFLLEtBQUwsQ0FBVyxPQUFYLEVBQW9CO0FBQ3RCLFdBQUssS0FBTCxDQUFXLE9BQVgsQ0FBbUIsSUFBbkIsRUFEc0I7S0FBeEI7O0FBSUEsV0FBTyxJQUFQLENBWk07OztBQVpKLG1CQTJCSix1QkFBTztBQUNMLFNBQUssUUFBTCxHQUFnQixLQUFoQixDQURLO0FBRUwsd0NBQW9CLEtBQUssTUFBTCxDQUFwQixDQUZLOztBQUlMLFFBQUksS0FBSyxNQUFMLEVBQWE7QUFDZixXQUFLLE1BQUwsR0FEZTtLQUFqQjs7QUFJQSxRQUFJLEtBQUssS0FBTCxDQUFXLE1BQVgsRUFBbUI7QUFDckIsV0FBSyxLQUFMLENBQVcsTUFBWCxDQUFrQixJQUFsQixFQURxQjtLQUF2Qjs7QUFJQSxXQUFPLElBQVAsQ0FaSzs7O0FBM0JILG1CQTBDSiwrQkFBVztBQUNULFFBQUksS0FBSyxVQUFMLEVBQWlCO0FBQ25CLFdBQUssVUFBTCxHQURtQjtLQUFyQjs7QUFJQSxRQUFJLEtBQUssS0FBTCxDQUFXLFVBQVgsRUFBdUI7QUFDekIsV0FBSyxLQUFMLENBQVcsVUFBWCxDQUFzQixJQUF0QixFQUR5QjtLQUEzQjs7QUFJQSxTQUFLLElBQUwsR0FUUzs7QUFXVCxXQUFPLElBQVAsQ0FYUzs7O0FBMUNQLG1CQXdESiwyQkFBUztBQUNQLFFBQU0sVUFBVSxLQUFLLE9BQUwsQ0FEVDtBQUVQLFFBQU0sV0FBVyxLQUFLLFFBQUwsQ0FGVjs7QUFJUCxRQUFJLEtBQUssUUFBTCxFQUFlO0FBQ2pCLFdBQUssUUFBTCxHQURpQjtLQUFuQjs7QUFJQSxTQUFLLFFBQUwsR0FBZ0IsMEJBQWUsS0FBSyxPQUFMLEdBQWUsT0FBZixFQUF3QixvQ0FBdkMsQ0FBaEIsQ0FSTzs7QUFVUCxRQUFJLEtBQUssUUFBTCxFQUFlO0FBQ2pCLFVBQUksS0FBSyxLQUFMLEVBQVk7QUFDZCxhQUFLLEtBQUwsQ0FBVyxHQUFYLENBQWUsS0FBSyxPQUFMLENBQWYsQ0FEYztPQUFoQjtLQURGOztBQU1BLFFBQUksS0FBSyxLQUFMLENBQVcsUUFBWCxFQUFxQjtBQUN2QixXQUFLLEtBQUwsQ0FBVyxRQUFYLENBQW9CLElBQXBCLEVBRHVCO0tBQXpCOztBQUlBLFFBQUksS0FBSyxRQUFMLEVBQWU7QUFDakIsb0NBQWMsS0FBSyxNQUFMLENBQWQsQ0FEaUI7S0FBbkI7O0FBSUEsV0FBTyxJQUFQLENBeEJPOzs7QUF4REwsbUJBbUZKLG1CQUFJLFVBQVU7QUFDWixTQUFLLE9BQUwsR0FBZSxRQUFmLENBRFk7OztBQW5GVixtQkF1RkoscUJBQU07QUFDSixXQUFPLEtBQUssT0FBTCxDQURIOzs7QUF2RkYsbUJBMkZKLHFDQUFjO0FBQ1osV0FBTyxLQUFLLFFBQUwsQ0FESzs7O1NBM0ZWOzs7a0JBZ0dTIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG9uRnJhbWVVcGRhdGUsIGNhbmNlbE9uRnJhbWVVcGRhdGUsIHRpbWVTaW5jZUxhc3RGcmFtZSB9IGZyb20gJy4uL2ZyYW1lc3luYyc7XG5pbXBvcnQgeyBzcGVlZFBlclNlY29uZCB9IGZyb20gJy4uL2luYy9jYWxjJztcblxuY2xhc3MgQWN0aW9uIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICB0aGlzLmN1cnJlbnQgPSAwO1xuICAgIHRoaXMudmVsb2NpdHkgPSAwO1xuICAgIHRoaXMudXBkYXRlID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKTtcblxuICAgIHRoaXMucHJvcHMgPSB7XG4gICAgICAuLi50aGlzLmNvbnN0cnVjdG9yLmRlZmF1bHRQcm9wcyxcbiAgICAgIC4uLnByb3BzXG4gICAgfTtcbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgIG9uRnJhbWVVcGRhdGUodGhpcy51cGRhdGUpO1xuXG4gICAgaWYgKHRoaXMub25TdGFydCkge1xuICAgICAgdGhpcy5vblN0YXJ0KCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMub25TdGFydCkge1xuICAgICAgdGhpcy5wcm9wcy5vblN0YXJ0KHRoaXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc3RvcCgpIHtcbiAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgY2FuY2VsT25GcmFtZVVwZGF0ZSh0aGlzLnVwZGF0ZSk7XG5cbiAgICBpZiAodGhpcy5vblN0b3ApIHtcbiAgICAgIHRoaXMub25TdG9wKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMub25TdG9wKSB7XG4gICAgICB0aGlzLnByb3BzLm9uU3RvcCh0aGlzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNvbXBsZXRlKCkge1xuICAgIGlmICh0aGlzLm9uQ29tcGxldGUpIHtcbiAgICAgIHRoaXMub25Db21wbGV0ZSgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLm9uQ29tcGxldGUpIHtcbiAgICAgIHRoaXMucHJvcHMub25Db21wbGV0ZSh0aGlzKTtcbiAgICB9XG5cbiAgICB0aGlzLnN0b3AoKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLmN1cnJlbnQ7XG4gICAgY29uc3QgdmVsb2NpdHkgPSB0aGlzLnZlbG9jaXR5O1xuXG4gICAgaWYgKHRoaXMub25VcGRhdGUpIHtcbiAgICAgIHRoaXMub25VcGRhdGUoKTtcbiAgICB9XG5cbiAgICB0aGlzLnZlbG9jaXR5ID0gc3BlZWRQZXJTZWNvbmQodGhpcy5jdXJyZW50IC0gY3VycmVudCwgdGltZVNpbmNlTGFzdEZyYW1lKCkpO1xuXG4gICAgaWYgKHRoaXMudmVsb2NpdHkpIHtcbiAgICAgIGlmICh0aGlzLnZhbHVlKSB7XG4gICAgICAgIHRoaXMudmFsdWUuc2V0KHRoaXMuY3VycmVudCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMub25VcGRhdGUpIHtcbiAgICAgIHRoaXMucHJvcHMub25VcGRhdGUodGhpcyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNBY3RpdmUpIHtcbiAgICAgIG9uRnJhbWVVcGRhdGUodGhpcy51cGRhdGUpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0KG5ld1ZhbHVlKSB7XG4gICAgdGhpcy5jdXJyZW50ID0gbmV3VmFsdWU7XG4gIH1cblxuICBnZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudDtcbiAgfVxuXG4gIGdldFZlbG9jaXR5KCkge1xuICAgIHJldHVybiB0aGlzLnZlbG9jaXR5O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFjdGlvbjtcbiJdfQ==

/***/ },
/* 7 */
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
	};;
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9lYXNpbmcvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsSUFBTSw2QkFBNkIsS0FBN0I7O0FBRUMsSUFBTSxzREFBdUIsVUFBQyxNQUFEO1NBQVksVUFBQyxDQUFEO1dBQU8sSUFBSSxPQUFPLElBQUksQ0FBSixDQUFYO0dBQVA7Q0FBWjtBQUM3QixJQUFNLHNEQUF1QixVQUFDLE1BQUQ7U0FBWSxVQUFDLENBQUQ7V0FBTyxDQUFDLElBQUssR0FBTCxHQUFZLE9BQU8sSUFBSSxDQUFKLENBQVAsR0FBZ0IsQ0FBaEIsR0FBb0IsQ0FBQyxJQUFJLE9BQU8sS0FBSyxJQUFJLENBQUosQ0FBTCxDQUFYLENBQUQsR0FBNEIsQ0FBNUI7R0FBeEM7Q0FBWixDQUFrRjs7QUFFL0csSUFBTSwwQkFBUyxVQUFDLENBQUQ7U0FBTztDQUFQOztBQUVmLElBQU0sc0NBQWUsVUFBQyxLQUFEO1NBQVcsVUFBQyxDQUFEO29CQUFPLEdBQUs7R0FBWjtDQUFYO0FBQ3JCLElBQU0sMEJBQVMsYUFBYSxDQUFiLENBQVQ7QUFDTixJQUFNLDRCQUFVLHFCQUFxQixNQUFyQixDQUFWO0FBQ04sSUFBTSxnQ0FBWSxxQkFBcUIsTUFBckIsQ0FBWjs7QUFFTixJQUFNLDBCQUFTLFVBQUMsQ0FBRDtTQUFPLElBQUksS0FBSyxHQUFMLENBQVMsS0FBSyxJQUFMLENBQVUsQ0FBVixDQUFULENBQUo7Q0FBUDtBQUNmLElBQU0sNEJBQVUscUJBQXFCLE1BQXJCLENBQVY7QUFDTixJQUFNLGdDQUFZLHFCQUFxQixPQUFyQixDQUFaOztBQUVOLElBQU0sc0NBQWUsVUFBQyxLQUFEO1NBQVcsVUFBQyxDQUFEO1dBQU8sQ0FBQyxHQUFJLENBQUosSUFBVSxDQUFDLFFBQVEsQ0FBUixDQUFELEdBQWMsQ0FBZCxHQUFrQixLQUFsQixDQUFYO0dBQVA7Q0FBWDtBQUNyQixJQUFNLDBCQUFTLGFBQWEsMEJBQWIsQ0FBVDtBQUNOLElBQU0sNEJBQVUscUJBQXFCLE1BQXJCLENBQVY7QUFDTixJQUFNLGdDQUFZLHFCQUFxQixNQUFyQixDQUFaOztBQUVOLElBQU0sMERBQXlCLFVBQUMsS0FBRCxFQUFXO0FBQy9DLE1BQU0sYUFBYSxhQUFhLEtBQWIsQ0FBYixDQUR5QztBQUUvQyxTQUFPLFVBQUMsQ0FBRDtXQUFPLENBQUUsS0FBSyxDQUFMLENBQUQsR0FBVyxDQUFYLEdBQWdCLE1BQU0sV0FBVyxDQUFYLENBQU4sR0FBc0IsT0FBTyxJQUFJLEtBQUssR0FBTCxDQUFTLENBQVQsRUFBWSxDQUFDLEVBQUQsSUFBTyxJQUFJLENBQUosQ0FBUCxDQUFoQixDQUFQO0dBQTlDLENBRndDO0NBQVg7QUFJL0IsSUFBTSxrQ0FBYSx1QkFBdUIsMEJBQXZCLENBQWIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgREVGQVVMVF9PVkVSU0hPT1RfU1RSRU5HVEggPSAxLjUyNTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJldmVyc2VkRWFzaW5nID0gKGVhc2luZykgPT4gKHApID0+IDEgLSBlYXNpbmcoMSAtIHApO1xuZXhwb3J0IGNvbnN0IGNyZWF0ZU1pcnJvcmVkRWFzaW5nID0gKGVhc2luZykgPT4gKHApID0+IChwIDw9IDAuNSkgPyBlYXNpbmcoMiAqIHApIC8gMiA6ICgyIC0gZWFzaW5nKDIgKiAoMSAtIHApKSkgLyAyOztcblxuZXhwb3J0IGNvbnN0IGxpbmVhciA9IChwKSA9PiBwO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlRWFzZUluID0gKHBvd2VyKSA9PiAocCkgPT4gcCAqKiBwb3dlcjtcbmV4cG9ydCBjb25zdCBlYXNlSW4gPSBjcmVhdGVFYXNlSW4oMik7XG5leHBvcnQgY29uc3QgZWFzZU91dCA9IGNyZWF0ZVJldmVyc2VkRWFzaW5nKGVhc2VJbik7XG5leHBvcnQgY29uc3QgZWFzZUluT3V0ID0gY3JlYXRlTWlycm9yZWRFYXNpbmcoZWFzZUluKTtcblxuZXhwb3J0IGNvbnN0IGNpcmNJbiA9IChwKSA9PiAxIC0gTWF0aC5zaW4oTWF0aC5hY29zKHApKTtcbmV4cG9ydCBjb25zdCBjaXJjT3V0ID0gY3JlYXRlUmV2ZXJzZWRFYXNpbmcoY2lyY0luKTtcbmV4cG9ydCBjb25zdCBjaXJjSW5PdXQgPSBjcmVhdGVNaXJyb3JlZEVhc2luZyhjaXJjT3V0KTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUJhY2tJbiA9IChwb3dlcikgPT4gKHApID0+IChwICogcCkgKiAoKHBvd2VyICsgMSkgKiBwIC0gcG93ZXIpO1xuZXhwb3J0IGNvbnN0IGJhY2tJbiA9IGNyZWF0ZUJhY2tJbihERUZBVUxUX09WRVJTSE9PVF9TVFJFTkdUSCk7XG5leHBvcnQgY29uc3QgYmFja091dCA9IGNyZWF0ZVJldmVyc2VkRWFzaW5nKGJhY2tJbik7XG5leHBvcnQgY29uc3QgYmFja0luT3V0ID0gY3JlYXRlTWlycm9yZWRFYXNpbmcoYmFja0luKTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUFudGljaXBhdGVFYXNpbmcgPSAocG93ZXIpID0+IHtcbiAgY29uc3QgYmFja0Vhc2luZyA9IGNyZWF0ZUJhY2tJbihwb3dlcik7XG4gIHJldHVybiAocCkgPT4gKChwICo9IDIpIDwgMSkgPyAwLjUgKiBiYWNrRWFzaW5nKHApIDogMC41ICogKDIgLSBNYXRoLnBvdygyLCAtMTAgKiAocCAtIDEpKSk7XG59XG5leHBvcnQgY29uc3QgYW50aWNpcGF0ZSA9IGNyZWF0ZUFudGljaXBhdGVFYXNpbmcoREVGQVVMVF9PVkVSU0hPT1RfU1RSRU5HVEgpO1xuIl19

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.steppedMotion = exports.restrictBetween = exports.restrictOver = exports.restrictUnder = exports.interpolate = exports.compose = exports.appendUnit = undefined;
	
	var _calc = __webpack_require__(9);
	
	/**
	 * Append Unit
	 * Creates a function that will append the unit to a given value
	 * appendUnit('px')(20) -> '20px'
	 * @param  {string} unit)
	 * @return {number}
	 */
	var appendUnit = exports.appendUnit = function (unit) {
	  return function (v) {
	    return '' + v + unit;
	  };
	};
	
	/**
	 * Compose
	 * Compose other transformers to run linearily
	 * compose(min(20), max(40))
	 * @param  {...functions} transformers
	 * @return {function}
	 */
	var compose = exports.compose = function () {
	  for (var _len = arguments.length, transformers = Array(_len), _key = 0; _key < _len; _key++) {
	    transformers[_key] = arguments[_key];
	  }
	
	  var numTransformers = transformers.length;
	  var i = 0;
	
	  return function (v, value) {
	    for (i = 0; i < numTransformers; i++) {
	      v = transformers[i](v, value);
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
	
	    var i = 0;
	
	    // Find index of range start
	    for (; i < rangeLength; i++) {
	      if (input[i] > v || i === finalIndex) {
	        break;
	      }
	    }
	
	    var progressInRange = (0, _calc.getProgressFromValue)(v, input[i], input[i + 1]);
	    var easedProgress = rangeEasing ? rangeEasing[i](progressInRange) : progressInRange;
	    return (0, _calc.getValueFromProgress)(easedProgress, output[i], output[i + 1]);
	  };
	};
	
	/**
	 * Restrict value between
	 * Creates a function that will restrict a given value between `min` and `max`
	 * @param  {number} min
	 * @param  {number} max
	 * @return {number}
	 */
	var restrictUnder = exports.restrictUnder = function (max) {
	  return function (v) {
	    return Math.min(v, max);
	  };
	};
	var restrictOver = exports.restrictOver = function (min) {
	  return function (v) {
	    return Math.max(v, min);
	  };
	};
	var restrictBetween = exports.restrictBetween = function (min, max) {
	  return compose(restrictOver(min), restrictUnder(max));
	};
	
	var steppedMotion = exports.steppedMotion = function (min, max) {
	  return function (v) {};
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS90cmFuc2Zvcm1lcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7O0FBU08sSUFBTSxrQ0FBYSxVQUFDLElBQUQ7U0FBVSxVQUFDLENBQUQ7Z0JBQVUsSUFBSTtHQUFkO0NBQVY7Ozs7Ozs7OztBQVNuQixJQUFNLDRCQUFVLFlBQXFCO29DQUFqQjs7R0FBaUI7O0FBQzFDLE1BQU0sa0JBQWtCLGFBQWEsTUFBYixDQURrQjtBQUUxQyxNQUFJLElBQUksQ0FBSixDQUZzQzs7QUFJMUMsU0FBTyxVQUFDLENBQUQsRUFBSSxLQUFKLEVBQWM7QUFDbkIsU0FBSyxJQUFJLENBQUosRUFBTyxJQUFJLGVBQUosRUFBcUIsR0FBakMsRUFBc0M7QUFDcEMsVUFBSSxhQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsS0FBbkIsQ0FBSixDQURvQztLQUF0Qzs7QUFJQSxXQUFPLENBQVAsQ0FMbUI7R0FBZCxDQUptQztDQUFyQjs7QUFhaEIsSUFBTSxvQ0FBYyxVQUFDLEtBQUQsRUFBUSxNQUFSLEVBQWdCLFdBQWhCLEVBQWdDO0FBQ3pELE1BQU0sY0FBYyxNQUFNLE1BQU4sQ0FEcUM7QUFFekQsTUFBTSxhQUFhLGNBQWMsQ0FBZCxDQUZzQzs7QUFJekQsU0FBTyxVQUFDLENBQUQsRUFBTzs7QUFFWixRQUFJLEtBQUssTUFBTSxDQUFOLENBQUwsRUFBZTtBQUNqQixhQUFPLE9BQU8sQ0FBUCxDQUFQLENBRGlCO0tBQW5COzs7QUFGWSxRQU9SLEtBQUssTUFBTSxVQUFOLENBQUwsRUFBd0I7QUFDMUIsYUFBTyxPQUFPLFVBQVAsQ0FBUCxDQUQwQjtLQUE1Qjs7QUFJQSxRQUFJLElBQUksQ0FBSjs7O0FBWFEsV0FjTCxJQUFJLFdBQUosRUFBaUIsR0FBeEIsRUFBNkI7QUFDM0IsVUFBSSxNQUFNLENBQU4sSUFBVyxDQUFYLElBQWdCLE1BQU0sVUFBTixFQUFrQjtBQUNwQyxjQURvQztPQUF0QztLQURGOztBQU1BLFFBQU0sa0JBQWtCLGdDQUFxQixDQUFyQixFQUF3QixNQUFNLENBQU4sQ0FBeEIsRUFBa0MsTUFBTSxJQUFJLENBQUosQ0FBeEMsQ0FBbEIsQ0FwQk07QUFxQlosUUFBTSxnQkFBZ0IsY0FBZ0IsWUFBWSxDQUFaLEVBQWUsZUFBZixDQUFoQixHQUFrRCxlQUFsRCxDQXJCVjtBQXNCWixXQUFPLGdDQUFxQixhQUFyQixFQUFvQyxPQUFPLENBQVAsQ0FBcEMsRUFBK0MsT0FBTyxJQUFJLENBQUosQ0FBdEQsQ0FBUCxDQXRCWTtHQUFQLENBSmtEO0NBQWhDOzs7Ozs7Ozs7QUFxQ3BCLElBQU0sd0NBQWdCLFVBQUMsR0FBRDtTQUFTLFVBQUMsQ0FBRDtXQUFPLEtBQUssR0FBTCxDQUFTLENBQVQsRUFBWSxHQUFaO0dBQVA7Q0FBVDtBQUN0QixJQUFNLHNDQUFlLFVBQUMsR0FBRDtTQUFTLFVBQUMsQ0FBRDtXQUFPLEtBQUssR0FBTCxDQUFTLENBQVQsRUFBWSxHQUFaO0dBQVA7Q0FBVDtBQUNyQixJQUFNLDRDQUFrQixVQUFDLEdBQUQsRUFBTSxHQUFOO1NBQWMsUUFBUSxhQUFhLEdBQWIsQ0FBUixFQUEyQixjQUFjLEdBQWQsQ0FBM0I7Q0FBZDs7QUFFeEIsSUFBTSx3Q0FBZ0IsVUFBQyxHQUFELEVBQU0sR0FBTjtTQUFjLFVBQUMsQ0FBRCxFQUFPLEVBQVA7Q0FBZCIsImZpbGUiOiJ0cmFuc2Zvcm1lcnMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUsIGdldFZhbHVlRnJvbVByb2dyZXNzIH0gZnJvbSAnLi4vaW5jL2NhbGMnO1xuXG4vKipcbiAqIEFwcGVuZCBVbml0XG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGFwcGVuZCB0aGUgdW5pdCB0byBhIGdpdmVuIHZhbHVlXG4gKiBhcHBlbmRVbml0KCdweCcpKDIwKSAtPiAnMjBweCdcbiAqIEBwYXJhbSAge3N0cmluZ30gdW5pdClcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IGFwcGVuZFVuaXQgPSAodW5pdCkgPT4gKHYpID0+IGAke3Z9JHt1bml0fWA7XG5cbi8qKlxuICogQ29tcG9zZVxuICogQ29tcG9zZSBvdGhlciB0cmFuc2Zvcm1lcnMgdG8gcnVuIGxpbmVhcmlseVxuICogY29tcG9zZShtaW4oMjApLCBtYXgoNDApKVxuICogQHBhcmFtICB7Li4uZnVuY3Rpb25zfSB0cmFuc2Zvcm1lcnNcbiAqIEByZXR1cm4ge2Z1bmN0aW9ufVxuICovXG5leHBvcnQgY29uc3QgY29tcG9zZSA9ICguLi50cmFuc2Zvcm1lcnMpID0+IHtcbiAgY29uc3QgbnVtVHJhbnNmb3JtZXJzID0gdHJhbnNmb3JtZXJzLmxlbmd0aDtcbiAgbGV0IGkgPSAwO1xuXG4gIHJldHVybiAodiwgdmFsdWUpID0+IHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbnVtVHJhbnNmb3JtZXJzOyBpKyspIHtcbiAgICAgIHYgPSB0cmFuc2Zvcm1lcnNbaV0odiwgdmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiB2O1xuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGludGVycG9sYXRlID0gKGlucHV0LCBvdXRwdXQsIHJhbmdlRWFzaW5nKSA9PiB7XG4gIGNvbnN0IHJhbmdlTGVuZ3RoID0gaW5wdXQubGVuZ3RoO1xuICBjb25zdCBmaW5hbEluZGV4ID0gcmFuZ2VMZW5ndGggLSAxO1xuXG4gIHJldHVybiAodikgPT4ge1xuICAgIC8vIElmIHZhbHVlIG91dHNpZGUgbWluaW11bSByYW5nZSwgcXVpY2tseSByZXR1cm5cbiAgICBpZiAodiA8PSBpbnB1dFswXSkge1xuICAgICAgcmV0dXJuIG91dHB1dFswXTtcbiAgICB9XG5cbiAgICAvLyBJZiB2YWx1ZSBvdXRzaWRlIG1heGltdW0gcmFuZ2UsIHF1aWNrbHkgcmV0dXJuXG4gICAgaWYgKHYgPj0gaW5wdXRbZmluYWxJbmRleF0pIHtcbiAgICAgIHJldHVybiBvdXRwdXRbZmluYWxJbmRleF07XG4gICAgfVxuXG4gICAgbGV0IGkgPSAwO1xuXG4gICAgLy8gRmluZCBpbmRleCBvZiByYW5nZSBzdGFydFxuICAgIGZvciAoOyBpIDwgcmFuZ2VMZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGlucHV0W2ldID4gdiB8fCBpID09PSBmaW5hbEluZGV4KSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHByb2dyZXNzSW5SYW5nZSA9IGdldFByb2dyZXNzRnJvbVZhbHVlKHYsIGlucHV0W2ldLCBpbnB1dFtpICsgMV0pO1xuICAgIGNvbnN0IGVhc2VkUHJvZ3Jlc3MgPSAocmFuZ2VFYXNpbmcpID8gcmFuZ2VFYXNpbmdbaV0ocHJvZ3Jlc3NJblJhbmdlKSA6IHByb2dyZXNzSW5SYW5nZTtcbiAgICByZXR1cm4gZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MoZWFzZWRQcm9ncmVzcywgb3V0cHV0W2ldLCBvdXRwdXRbaSArIDFdKTtcbiAgfTtcbn07XG5cbi8qKlxuICogUmVzdHJpY3QgdmFsdWUgYmV0d2VlblxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCByZXN0cmljdCBhIGdpdmVuIHZhbHVlIGJldHdlZW4gYG1pbmAgYW5kIGBtYXhgXG4gKiBAcGFyYW0gIHtudW1iZXJ9IG1pblxuICogQHBhcmFtICB7bnVtYmVyfSBtYXhcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IHJlc3RyaWN0VW5kZXIgPSAobWF4KSA9PiAodikgPT4gTWF0aC5taW4odiwgbWF4KTtcbmV4cG9ydCBjb25zdCByZXN0cmljdE92ZXIgPSAobWluKSA9PiAodikgPT4gTWF0aC5tYXgodiwgbWluKTtcbmV4cG9ydCBjb25zdCByZXN0cmljdEJldHdlZW4gPSAobWluLCBtYXgpID0+IGNvbXBvc2UocmVzdHJpY3RPdmVyKG1pbiksIHJlc3RyaWN0VW5kZXIobWF4KSk7XG5cbmV4cG9ydCBjb25zdCBzdGVwcGVkTW90aW9uID0gKG1pbiwgbWF4KSA9PiAodikgPT4ge1xuICBcbn07XG4iXX0=

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.stepProgress = exports.speedPerSecond = exports.speedPerFrame = exports.smooth = exports.restrict = exports.relativeValue = exports.random = exports.radiansToDegrees = exports.pointFromAngleAndDistance = exports.getProgressFromValue = exports.getValueFromProgress = exports.distance = exports.dilate = exports.degreesToRadians = exports.angle = undefined;
	
	var _utils = __webpack_require__(12);
	
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
	  Value in range from progress
	  
	  Given a lower limit and an upper limit, we return the value within
	  that range as expressed by progress (a number from 0-1)
	  
	  @param [number]: The progress between lower and upper limits expressed 0-1
	  @param [number]: Lower limit of range
	  @param [number]: Upper limit of range
	  @return [number]: Value as calculated from progress within range (not limited within range)
	*/
	var getValueFromProgress = exports.getValueFromProgress = function (progress, from, to) {
	  return -progress * from + progress * to + from;
	};
	
	/*
	  Progress within given range
	  
	  Given a lower limit and an upper limit, we return the progress
	  (expressed as a number 0-1) represented by the given value, and
	  limit that progress to within 0-1.
	  
	  @param [number]: Value to find progress within given range
	  @param [number]: Lower limit 
	  @param [number]: Upper limit
	  @return [number]: Progress of value within range as expressed 0-1
	*/
	var getProgressFromValue = exports.getProgressFromValue = function (value, from, to) {
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
	  Return random number between range
	  
	  @param [number] (optional): Output minimum
	  @param [number] (optional): Output maximum
	  @return [number]: Random number within range, or 0 and 1 if none provided
	*/
	var random = exports.random = function () {
	  var min = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	  var max = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];
	  return Math.random() * (max - min) + min;
	};
	
	/*
	  Calculate relative value
	  
	  Takes the operator and value from a string, ie "+=5", and applies
	  to the current value to resolve a new target.
	  
	  @param [number]: Current value
	  @param [string]: Relative value
	  @return [number]: New value
	*/
	var relativeValue = exports.relativeValue = function (current, relative) {
	  var newValue = current;
	  var equation = relative.split('=');
	  var operator = equation[0];
	
	  var _findValueAndUnit = (0, _utils.findValueAndUnit)(equation[1]);
	
	  var unit = _findValueAndUnit.unit;
	  var value = _findValueAndUnit.value;
	
	
	  value = parseFloat(value);
	
	  switch (operator) {
	    case '+':
	      newValue += value;
	      break;
	    case '-':
	      newValue -= value;
	      break;
	    case '*':
	      newValue *= value;
	      break;
	    case '/':
	      newValue /= value;
	      break;
	  }
	
	  if (unit) {
	    newValue += unit;
	  }
	
	  return newValue;
	};
	
	/*
	  Restrict value to range
	  
	  Return value within the range of lowerLimit and upperLimit
	  
	  @param [number]: Value to keep within range
	  @param [number]: Lower limit of range
	  @param [number]: Upper limit of range
	  @return [number]: Value as limited within given range
	*/
	var restrict = exports.restrict = function (value, min, max) {
	  return Math.max(Math.min(value, max), min);
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
	  return (0, _utils.toDecimal)(oldValue + duration * (newValue - oldValue) / Math.max(smoothing, duration));
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
	  
	  @param [number]: Current value
	  @param [int]: Number of steps
	  @return [number]: Stepped value
	*/
	var stepProgress = exports.stepProgress = function (progress, steps) {
	  var segment = 1 / (steps - 1);
	  var target = 1 - 1 / steps;
	  var progressOfTarget = Math.min(progress / target, 1);
	
	  return Math.floor(progressOfTarget / segment) * segment;
	};
	//# sourceMappingURL=data:application/json;base64,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QUFNLHNDQUFlLFVBQUMsUUFBRCxFQUFXLEtBQVgsRUFBcUI7QUFDL0MsTUFBTSxVQUFVLEtBQUssUUFBUSxDQUFSLENBQUwsQ0FEK0I7QUFFL0MsTUFBTSxTQUFTLElBQUssSUFBSSxLQUFKLENBRjJCO0FBRy9DLE1BQU0sbUJBQW1CLEtBQUssR0FBTCxDQUFTLFdBQVcsTUFBWCxFQUFtQixDQUE1QixDQUFuQixDQUh5Qzs7QUFLL0MsU0FBTyxLQUFLLEtBQUwsQ0FBVyxtQkFBbUIsT0FBbkIsQ0FBWCxHQUF5QyxPQUF6QyxDQUx3QztDQUFyQiIsImZpbGUiOiJjYWxjLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGhhc1Byb3BlcnR5LFxuICBpc051bSxcbiAgZmluZFZhbHVlQW5kVW5pdCxcbiAgdG9EZWNpbWFsXG59IGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCBaRVJPX1BPSU5UID0ge1xuICB4OiAwLFxuICB5OiAwLFxuICB6OiAwXG59O1xuXG5jb25zdCBkaXN0YW5jZTFEID0gKGEsIGIpID0+IE1hdGguYWJzKGEgLSBiKTtcblxuLypcbiAgQW5nbGUgYmV0d2VlbiBwb2ludHNcbiAgXG4gIFRyYW5zbGF0ZXMgdGhlIGh5cG90aGV0aWNhbCBsaW5lIHNvIHRoYXQgdGhlICdmcm9tJyBjb29yZGluYXRlc1xuICBhcmUgYXQgMCwwXG4gIFxuICBAcGFyYW0gW29iamVjdF06IFggYW5kIFkgY29vcmRpbmF0ZXMgb2YgZnJvbSBwb2ludFxuICBAcGFyYW0gW29iamVjdF06IFggYW5kIFkgY29yZGluYXRlcyBvZiB0byBwb2ludFxuICBAcmV0dXJuIFtyYWRpYW5dOiBBbmdsZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzIGluIHJhZGlhbnNcbiovXG5leHBvcnQgY29uc3QgYW5nbGUgPSAoYSwgYiA9IFpFUk9fUE9JTlQpID0+IHJhZGlhbnNUb0RlZ3JlZXMoTWF0aC5hdGFuMihhLnggLSBiLngsIGEueSAtIGIueSkpO1xuXG4vKlxuICBDb252ZXJ0IGRlZ3JlZXMgdG8gcmFkaWFuc1xuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBpbiBkZWdyZWVzXG4gIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGluIHJhZGlhbnNcbiovXG5leHBvcnQgY29uc3QgZGVncmVlc1RvUmFkaWFucyA9IChkZWdyZWVzKSA9PiBkZWdyZWVzICogTWF0aC5QSSAvIDE4MDtcblxuLypcbiAgRGlsYXRlXG4gIFxuICBDaGFuZ2UgdGhlIHByb2dyZXNzaW9uIGJldHdlZW4gYSBhbmQgYiBhY2NvcmRpbmcgdG8gZGlsYXRpb24uXG4gIFxuICBTbyBkaWxhdGlvbiA9IDAuNSB3b3VsZCBjaGFuZ2VcbiAgXG4gIGEgLS0tLS0tLS0tIGJcbiAgXG4gIHRvXG4gIFxuICBhIC0tLS0gYlxuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBQcmV2aW91cyB2YWx1ZVxuICBAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcbiAgQHBhcmFtIFtudW1iZXJdOiBEaWxhdGUgcHJvZ3Jlc3MgYnkgeFxuICBAcmV0dXJuIFtudW1iZXJdOiBQcmV2aW91cyB2YWx1ZSBwbHVzIHRoZSBkaWxhdGVkIGRpZmZlcmVuY2VcbiovXG5leHBvcnQgY29uc3QgZGlsYXRlID0gKGEsIGIsIGRpbGF0aW9uKSA9PiBhICsgKChiIC0gYSkgKiBkaWxhdGlvbik7XG5cbi8qXG4gIERpc3RhbmNlXG4gIFxuICBSZXR1cm5zIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHR3byBuIGRpbWVuc2lvbmFsIHBvaW50cy5cbiAgXG4gIEBwYXJhbSBbb2JqZWN0L251bWJlcl06IHggYW5kIHkgb3IganVzdCB4IG9mIHBvaW50IEFcbiAgQHBhcmFtIFtvYmplY3QvbnVtYmVyXTogKG9wdGlvbmFsKTogeCBhbmQgeSBvciBqdXN0IHggb2YgcG9pbnQgQlxuICBAcmV0dXJuIFtudW1iZXJdOiBUaGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgdHdvIHBvaW50c1xuKi9cbmV4cG9ydCBjb25zdCBkaXN0YW5jZSA9IChhLCBiID0gWkVST19QT0lOVCkgPT4ge1xuICAvLyAxRCBkaW1lbnNpb25zXG4gIGlmIChpc051bShhKSkge1xuICAgIHJldHVybiBkaXN0YW5jZTFEKGEsIGIpO1xuXG4gIC8vIE11bHRpLWRpbWVuc2lvbmFsXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgeERlbHRhID0gZGlzdGFuY2UxRChhLngsIGIueCk7XG4gICAgY29uc3QgeURlbHRhID0gZGlzdGFuY2UxRChhLnksIGIueSk7XG4gICAgY29uc3QgekRlbHRhID0gKGlzTnVtKGEueikpID8gZGlzdGFuY2UxRChhLnosIGIueikgOiAwO1xuXG4gICAgcmV0dXJuIE1hdGguc3FydCgoeERlbHRhICoqIDIpICsgKHlEZWx0YSAqKiAyKSArICh6RGVsdGEgKiogMikpO1xuICB9XG59O1xuXG4vKlxuICBWYWx1ZSBpbiByYW5nZSBmcm9tIHByb2dyZXNzXG4gIFxuICBHaXZlbiBhIGxvd2VyIGxpbWl0IGFuZCBhbiB1cHBlciBsaW1pdCwgd2UgcmV0dXJuIHRoZSB2YWx1ZSB3aXRoaW5cbiAgdGhhdCByYW5nZSBhcyBleHByZXNzZWQgYnkgcHJvZ3Jlc3MgKGEgbnVtYmVyIGZyb20gMC0xKVxuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBUaGUgcHJvZ3Jlc3MgYmV0d2VlbiBsb3dlciBhbmQgdXBwZXIgbGltaXRzIGV4cHJlc3NlZCAwLTFcbiAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBvZiByYW5nZVxuICBAcGFyYW0gW251bWJlcl06IFVwcGVyIGxpbWl0IG9mIHJhbmdlXG4gIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGFzIGNhbGN1bGF0ZWQgZnJvbSBwcm9ncmVzcyB3aXRoaW4gcmFuZ2UgKG5vdCBsaW1pdGVkIHdpdGhpbiByYW5nZSlcbiovXG5leHBvcnQgY29uc3QgZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MgPSAocHJvZ3Jlc3MsIGZyb20sIHRvKSA9PiAoLSBwcm9ncmVzcyAqIGZyb20pICsgKHByb2dyZXNzICogdG8pICsgZnJvbTtcblxuLypcbiAgUHJvZ3Jlc3Mgd2l0aGluIGdpdmVuIHJhbmdlXG4gIFxuICBHaXZlbiBhIGxvd2VyIGxpbWl0IGFuZCBhbiB1cHBlciBsaW1pdCwgd2UgcmV0dXJuIHRoZSBwcm9ncmVzc1xuICAoZXhwcmVzc2VkIGFzIGEgbnVtYmVyIDAtMSkgcmVwcmVzZW50ZWQgYnkgdGhlIGdpdmVuIHZhbHVlLCBhbmRcbiAgbGltaXQgdGhhdCBwcm9ncmVzcyB0byB3aXRoaW4gMC0xLlxuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSB0byBmaW5kIHByb2dyZXNzIHdpdGhpbiBnaXZlbiByYW5nZVxuICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IFxuICBAcGFyYW0gW251bWJlcl06IFVwcGVyIGxpbWl0XG4gIEByZXR1cm4gW251bWJlcl06IFByb2dyZXNzIG9mIHZhbHVlIHdpdGhpbiByYW5nZSBhcyBleHByZXNzZWQgMC0xXG4qL1xuZXhwb3J0IGNvbnN0IGdldFByb2dyZXNzRnJvbVZhbHVlID0gKHZhbHVlLCBmcm9tLCB0bykgPT4gKHZhbHVlIC0gZnJvbSkgLyAodG8gLSBmcm9tKTtcblxuLypcbiAgUG9pbnQgZnJvbSBhbmdsZSBhbmQgZGlzdGFuY2VcbiAgXG4gIEBwYXJhbSBbb2JqZWN0XTogMkQgcG9pbnQgb2Ygb3JpZ2luXG4gIEBwYXJhbSBbbnVtYmVyXTogQW5nbGUgZnJvbSBvcmlnaW5cbiAgQHBhcmFtIFtudW1iZXJdOiBEaXN0YW5jZSBmcm9tIG9yaWdpblxuICBAcmV0dXJuIFtvYmplY3RdOiBDYWxjdWxhdGVkIDJEIHBvaW50XG4qL1xuZXhwb3J0IGNvbnN0IHBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UgPSAob3JpZ2luLCBhbmdsZSwgZGlzdGFuY2UpID0+IHtcbiAgYW5nbGUgPSBkZWdyZWVzVG9SYWRpYW5zKGFuZ2xlKTtcblxuICByZXR1cm4ge1xuICAgIHg6IGRpc3RhbmNlICogTWF0aC5jb3MoYW5nbGUpICsgb3JpZ2luLngsXG4gICAgeTogZGlzdGFuY2UgKiBNYXRoLnNpbihhbmdsZSkgKyBvcmlnaW4ueVxuICB9O1xufTtcblxuLypcbiAgQ29udmVydCByYWRpYW5zIHRvIGRlZ3JlZXNcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgaW4gcmFkaWFuc1xuICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBpbiBkZWdyZWVzXG4qL1xuZXhwb3J0IGNvbnN0IHJhZGlhbnNUb0RlZ3JlZXMgPSAocmFkaWFucykgPT4gcmFkaWFucyAqIDE4MCAvIE1hdGguUEk7XG5cbi8qXG4gIFJldHVybiByYW5kb20gbnVtYmVyIGJldHdlZW4gcmFuZ2VcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBPdXRwdXQgbWluaW11bVxuICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogT3V0cHV0IG1heGltdW1cbiAgQHJldHVybiBbbnVtYmVyXTogUmFuZG9tIG51bWJlciB3aXRoaW4gcmFuZ2UsIG9yIDAgYW5kIDEgaWYgbm9uZSBwcm92aWRlZFxuKi9cbmV4cG9ydCBjb25zdCByYW5kb20gPSAobWluID0gMCwgbWF4ID0gMSkgPT4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xuXG4vKlxuICBDYWxjdWxhdGUgcmVsYXRpdmUgdmFsdWVcbiAgXG4gIFRha2VzIHRoZSBvcGVyYXRvciBhbmQgdmFsdWUgZnJvbSBhIHN0cmluZywgaWUgXCIrPTVcIiwgYW5kIGFwcGxpZXNcbiAgdG8gdGhlIGN1cnJlbnQgdmFsdWUgdG8gcmVzb2x2ZSBhIG5ldyB0YXJnZXQuXG4gIFxuICBAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcbiAgQHBhcmFtIFtzdHJpbmddOiBSZWxhdGl2ZSB2YWx1ZVxuICBAcmV0dXJuIFtudW1iZXJdOiBOZXcgdmFsdWVcbiovXG5leHBvcnQgY29uc3QgcmVsYXRpdmVWYWx1ZSA9IChjdXJyZW50LCByZWxhdGl2ZSkgPT4ge1xuICBsZXQgbmV3VmFsdWUgPSBjdXJyZW50O1xuICBjb25zdCBlcXVhdGlvbiA9IHJlbGF0aXZlLnNwbGl0KCc9Jyk7XG4gIGNvbnN0IG9wZXJhdG9yID0gZXF1YXRpb25bMF07XG4gIGxldCB7IHVuaXQsIHZhbHVlIH0gPSBmaW5kVmFsdWVBbmRVbml0KGVxdWF0aW9uWzFdKTtcblxuICB2YWx1ZSA9IHBhcnNlRmxvYXQodmFsdWUpO1xuXG4gIHN3aXRjaCAob3BlcmF0b3IpIHtcbiAgY2FzZSAnKyc6XG4gICAgbmV3VmFsdWUgKz0gdmFsdWU7XG4gICAgYnJlYWs7XG4gIGNhc2UgJy0nOlxuICAgIG5ld1ZhbHVlIC09IHZhbHVlO1xuICAgIGJyZWFrO1xuICBjYXNlICcqJzpcbiAgICBuZXdWYWx1ZSAqPSB2YWx1ZTtcbiAgICBicmVhaztcbiAgY2FzZSAnLyc6XG4gICAgbmV3VmFsdWUgLz0gdmFsdWU7XG4gICAgYnJlYWs7XG4gIH1cbiAgXG4gIGlmICh1bml0KSB7XG4gICAgbmV3VmFsdWUgKz0gdW5pdDtcbiAgfVxuXG4gIHJldHVybiBuZXdWYWx1ZTtcbn07XG5cbi8qXG4gIFJlc3RyaWN0IHZhbHVlIHRvIHJhbmdlXG4gIFxuICBSZXR1cm4gdmFsdWUgd2l0aGluIHRoZSByYW5nZSBvZiBsb3dlckxpbWl0IGFuZCB1cHBlckxpbWl0XG4gIFxuICBAcGFyYW0gW251bWJlcl06IFZhbHVlIHRvIGtlZXAgd2l0aGluIHJhbmdlXG4gIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgb2YgcmFuZ2VcbiAgQHBhcmFtIFtudW1iZXJdOiBVcHBlciBsaW1pdCBvZiByYW5nZVxuICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBhcyBsaW1pdGVkIHdpdGhpbiBnaXZlbiByYW5nZVxuKi9cbmV4cG9ydCBjb25zdCByZXN0cmljdCA9ICh2YWx1ZSwgbWluLCBtYXgpID0+IE1hdGgubWF4KE1hdGgubWluKHZhbHVlLCBtYXgpLCBtaW4pO1xuXG4vKlxuICBGcmFtZXJhdGUtaW5kZXBlbmRlbnQgc21vb3RoaW5nXG5cbiAgQHBhcmFtIFtudW1iZXJdOiBOZXcgdmFsdWVcbiAgQHBhcmFtIFtudW1iZXJdOiBPbGQgdmFsdWVcbiAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvblxuICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogU21vb3RoaW5nICgwIGlzIG5vbmUpXG4qL1xuZXhwb3J0IGNvbnN0IHNtb290aCA9IChuZXdWYWx1ZSwgb2xkVmFsdWUsIGR1cmF0aW9uLCBzbW9vdGhpbmcgPSAwKSA9PiB0b0RlY2ltYWwob2xkVmFsdWUgKyAoZHVyYXRpb24gKiAobmV3VmFsdWUgLSBvbGRWYWx1ZSkgLyBNYXRoLm1heChzbW9vdGhpbmcsIGR1cmF0aW9uKSkpO1xuXG4vKlxuICBDb252ZXJ0IHggcGVyIHNlY29uZCB0byBwZXIgZnJhbWUgdmVsb2NpdHkgYmFzZWQgb24gZnBzXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFVuaXQgcGVyIHNlY29uZFxuICBAcGFyYW0gW251bWJlcl06IEZyYW1lIGR1cmF0aW9uIGluIG1zXG4qL1xuZXhwb3J0IGNvbnN0IHNwZWVkUGVyRnJhbWUgPSAoeHBzLCBmcmFtZUR1cmF0aW9uKSA9PiAoaXNOdW0oeHBzKSkgPyB4cHMgLyAoMTAwMCAvIGZyYW1lRHVyYXRpb24pIDogMDtcblxuLypcbiAgQ29udmVydCB2ZWxvY2l0eSBpbnRvIHZlbGljaXR5IHBlciBzZWNvbmRcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogVW5pdCBwZXIgZnJhbWVcbiAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvbiBpbiBtc1xuKi9cbmV4cG9ydCBjb25zdCBzcGVlZFBlclNlY29uZCA9ICh2ZWxvY2l0eSwgZnJhbWVEdXJhdGlvbikgPT4gdmVsb2NpdHkgKiAoMTAwMCAvIGZyYW1lRHVyYXRpb24pO1xuXG4vKlxuICBDcmVhdGUgc3RlcHBlZCB2ZXJzaW9uIG9mIDAtMSBwcm9ncmVzc1xuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gIEBwYXJhbSBbaW50XTogTnVtYmVyIG9mIHN0ZXBzXG4gIEByZXR1cm4gW251bWJlcl06IFN0ZXBwZWQgdmFsdWVcbiovXG5leHBvcnQgY29uc3Qgc3RlcFByb2dyZXNzID0gKHByb2dyZXNzLCBzdGVwcykgPT4ge1xuICBjb25zdCBzZWdtZW50ID0gMSAvIChzdGVwcyAtIDEpO1xuICBjb25zdCB0YXJnZXQgPSAxIC0gKDEgLyBzdGVwcyk7XG4gIGNvbnN0IHByb2dyZXNzT2ZUYXJnZXQgPSBNYXRoLm1pbihwcm9ncmVzcyAvIHRhcmdldCwgMSk7XG5cbiAgcmV0dXJuIE1hdGguZmxvb3IocHJvZ3Jlc3NPZlRhcmdldCAvIHNlZ21lbnQpICogc2VnbWVudDtcbn07Il19

/***/ },
/* 10 */
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9mcmFtZXN5bmMvb24tbmV4dC1mcmFtZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFHQSxJQUFNLFNBQVMsT0FBUSxNQUFQLEtBQWtCLFdBQWxCLElBQWlDLE9BQU8scUJBQVAsR0FBZ0MsSUFBbEUsR0FBeUUsS0FBekU7O0FBRWYsSUFBSSxvQkFBSjs7QUFFQSxJQUFJLE1BQUosRUFBWTtBQUNWLGdCQUFjLFVBQUMsUUFBRDtXQUFjLE9BQU8scUJBQVAsQ0FBNkIsUUFBN0I7R0FBZCxDQURKO0NBQVosTUFHTzs7Ozs7Ozs7Ozs7Ozs7O0FBZUwsUUFBSSxXQUFXLENBQVg7O0FBRUosa0JBQWMsVUFBQyxRQUFELEVBQWM7QUFDMUIsVUFBTSxjQUFjLElBQUksSUFBSixHQUFXLE9BQVgsRUFBZCxDQURvQjtBQUUxQixVQUFNLGFBQWEsS0FBSyxHQUFMLENBQVMsQ0FBVCxFQUFZLFFBQVEsY0FBYyxRQUFkLENBQVIsQ0FBekIsQ0FGb0I7O0FBSTFCLGlCQUFXLGNBQWMsVUFBZCxDQUplOztBQU0xQixpQkFBVztlQUFNLFNBQVMsUUFBVDtPQUFOLEVBQTBCLFVBQXJDLEVBTjBCO0tBQWQ7T0FqQlQ7Q0FIUDs7a0JBOEJlIiwiZmlsZSI6Im9uLW5leHQtZnJhbWUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgRGV0ZWN0IGFuZCBsb2FkIGFuIGFwcHJvcHJpYXRlIGNsb2NrIHNldHRpbmcgZm9yIHRoZSBlbnZpcm9ubWVudFxuKi9cbmNvbnN0IGhhc1JBRiA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKSA/IHRydWUgOiBmYWxzZTtcblxubGV0IG9uTmV4dEZyYW1lO1xuXG5pZiAoaGFzUkFGKSB7XG4gIG9uTmV4dEZyYW1lID0gKGNhbGxiYWNrKSA9PiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNhbGxiYWNrKTtcblxufSBlbHNlIHtcbiAgLypcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGxcbiAgICBcbiAgICBGb3IgSUU4LzkgRmxpbnN0b25lcyBhbmQgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRzXG5cbiAgICBUYWtlbiBmcm9tIFBhdWwgSXJpc2guIFdlJ3ZlIHN0cmlwcGVkIG91dCBjYW5jZWxBbmltYXRpb25GcmFtZSBjaGVja3MgYmVjYXVzZSB3ZSBkb24ndCBmb3ggd2l0aCB0aGF0XG4gICAgXG4gICAgaHR0cDovL3BhdWxpcmlzaC5jb20vMjAxMS9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWFuaW1hdGluZy9cbiAgICBodHRwOi8vbXkub3BlcmEuY29tL2Vtb2xsZXIvYmxvZy8yMDExLzEyLzIwL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtZXItYW5pbWF0aW5nXG4gICAgIFxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbCBieSBFcmlrIE3DtmxsZXIuIGZpeGVzIGZyb20gUGF1bCBJcmlzaCBhbmQgVGlubyBaaWpkZWxcbiAgICAgXG4gICAgTUlUIGxpY2Vuc2VcbiAgKi9cbiAgbGV0IGxhc3RUaW1lID0gMDtcblxuICBvbk5leHRGcmFtZSA9IChjYWxsYmFjaykgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgY29uc3QgdGltZVRvQ2FsbCA9IE1hdGgubWF4KDAsIDE2LjcgLSAoY3VycmVudFRpbWUgLSBsYXN0VGltZSkpO1xuXG4gICAgbGFzdFRpbWUgPSBjdXJyZW50VGltZSArIHRpbWVUb0NhbGw7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IGNhbGxiYWNrKGxhc3RUaW1lKSwgdGltZVRvQ2FsbCk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IG9uTmV4dEZyYW1lOyJdfQ==

/***/ },
/* 11 */
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9mcmFtZXN5bmMvY3JlYXRlLXJlbmRlci1zdGVwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztrQkFBd0I7QUFBVCxTQUFTLGdCQUFULENBQTBCLGVBQTFCLEVBQTJDOzs7Ozs7QUFNeEQsTUFBSSxpQkFBaUIsRUFBakIsQ0FOb0Q7QUFPeEQsTUFBSSwwQkFBMEIsRUFBMUIsQ0FQb0Q7O0FBU3hELFNBQU87QUFDTCxjQUFVLFVBQUMsUUFBRCxFQUFjO0FBQ3RCOztBQURzQixVQUdsQix3QkFBd0IsT0FBeEIsQ0FBZ0MsUUFBaEMsTUFBOEMsQ0FBQyxDQUFELEVBQUk7QUFDcEQsZ0NBQXdCLElBQXhCLENBQTZCLFFBQTdCLEVBRG9EO09BQXREO0tBSFE7O0FBUVYsWUFBUSxVQUFDLFFBQUQsRUFBYztBQUNwQixVQUFNLGtCQUFrQix3QkFBd0IsT0FBeEIsQ0FBZ0MsUUFBaEMsQ0FBbEIsQ0FEYztBQUVwQixVQUFJLG9CQUFvQixDQUFDLENBQUQsRUFBSTtBQUMxQixnQ0FBd0IsTUFBeEIsQ0FBK0IsZUFBL0IsRUFBZ0QsQ0FBaEQsRUFEMEI7T0FBNUI7S0FGTTs7QUFPUixhQUFTLFlBQU07OztpQkFFK0IsQ0FBQyx1QkFBRCxFQUEwQixjQUExQjs7QUFGL0I7QUFFWiwrQkFGWTtBQUVJLHdDQUZKO0FBS2IsOEJBQXdCLE1BQXhCLEdBQWlDLENBQWpDOzs7QUFMYSxVQVFQLGVBQWUsZUFBZSxNQUFmLENBUlI7QUFTYixXQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxZQUFKLEVBQWtCLEdBQWxDLEVBQXVDO0FBQ3JDLHVCQUFlLENBQWYsSUFEcUM7T0FBdkM7S0FUTztHQWhCWCxDQVR3RDtDQUEzQyIsImZpbGUiOiJjcmVhdGUtcmVuZGVyLXN0ZXAuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUmVuZGVyU3RlcChzdGFydFJlbmRlckxvb3ApIHtcbiAgLyoqXG4gICAqIFdlIHVzZSB0d28gYXJyYXlzLCBvbmUgZm9yIHRoaXMgZnJhbWUgYW5kIG9uZSB0byBxdWV1ZSBmb3IgdGhlXG4gICAqIG5leHQgZnJhbWUsIHJldXNpbmcgZWFjaCB0byBhdm9pZCBHQy5cbiAgICogQHR5cGUge0FycmF5fVxuICAgKi9cbiAgbGV0IGZ1bmN0aW9uc1RvUnVuID0gW107XG4gIGxldCBmdW5jdGlvbnNUb1J1bk5leHRGcmFtZSA9IFtdO1xuXG4gIHJldHVybiB7XG4gICAgc2NoZWR1bGU6IChjYWxsYmFjaykgPT4ge1xuICAgICAgc3RhcnRSZW5kZXJMb29wKCk7XG4gICAgICAvLyBJZiB0aGlzIGNhbGxiYWNrIGlzbid0IGFscmVhZHkgc2NoZWR1bGVkIHRvIHJ1biBuZXh0IGZyYW1lXG4gICAgICBpZiAoZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUuaW5kZXhPZihjYWxsYmFjaykgPT09IC0xKSB7XG4gICAgICAgIGZ1bmN0aW9uc1RvUnVuTmV4dEZyYW1lLnB1c2goY2FsbGJhY2spO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBjYW5jZWw6IChjYWxsYmFjaykgPT4ge1xuICAgICAgY29uc3QgaW5kZXhPZkNhbGxiYWNrID0gZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUuaW5kZXhPZihjYWxsYmFjayk7XG4gICAgICBpZiAoaW5kZXhPZkNhbGxiYWNrICE9PSAtMSkge1xuICAgICAgICBmdW5jdGlvbnNUb1J1bk5leHRGcmFtZS5zcGxpY2UoaW5kZXhPZkNhbGxiYWNrLCAxKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgcHJvY2VzczogKCkgPT4ge1xuICAgICAgLy8gU3dhcCB0aGlzIGZyYW1lIGFuZCBuZXh0IGZyYW1lIGFycmF5cyB0byBhdm9pZCBHQ1xuICAgICAgW2Z1bmN0aW9uc1RvUnVuLCBmdW5jdGlvbnNUb1J1bk5leHRGcmFtZV0gPSBbZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUsIGZ1bmN0aW9uc1RvUnVuXTtcblxuICAgICAgLy8gQ2xlYXIgbmV4dCBmcmFtZSBsaXN0XG4gICAgICBmdW5jdGlvbnNUb1J1bk5leHRGcmFtZS5sZW5ndGggPSAwO1xuXG4gICAgICAvLyBFeGVjdXRlIGFsbCBvZiB0aGlzIGZyYW1lJ3MgZnVuY3Rpb25zXG4gICAgICBjb25zdCBudW1UaGlzRnJhbWUgPSBmdW5jdGlvbnNUb1J1bi5sZW5ndGg7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVRoaXNGcmFtZTsgaSsrKSB7XG4gICAgICAgIGZ1bmN0aW9uc1RvUnVuW2ldKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufSJdfQ==

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
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
	  Create a function string
	
	  '20px', 'translate' -> 'translate(20px)'
	
	  @param [string]
	  @param [string]
	  @return [string]
	*/
	var createFunctionString = exports.createFunctionString = function (value, prefix) {
	  return prefix + '(' + value + ')';
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
	  Is utils a relative value assignment?
	  
	  @param [string]: Variable to test
	  @return [boolean]: If utils looks like a relative value assignment
	*/
	var isRelativeValue = exports.isRelativeValue = function (value) {
	  return value && value.indexOf && value.indexOf('=') > 0 ? true : false;
	};
	
	/*
	  Is utils var a string ? 
	  
	  @param: Variable to test
	  @return [boolean]: Returns true if typeof str === 'string'
	*/
	var isString = exports.isString = function (str) {
	  return typeof str === 'string';
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
	
	/*
	  Split space-delimited string
	
	  "foo bar" -> ["foo", "bar"]
	
	  @param [string]
	  @return [array]
	*/
	var splitSpaceDelimited = exports.splitSpaceDelimited = function (value) {
	  return isString(value) ? value.split(' ') : [value];
	};
	
	/*
	  Convert number to x decimal places
	
	  @param [number]
	  @param [number]
	  @return [number]
	*/
	var toDecimal = exports.toDecimal = function (num) {
	  var precision = arguments.length <= 1 || arguments[1] === undefined ? 2 : arguments[1];
	
	  precision = Math.pow(10, precision);
	  return Math.round(num * precision) / precision;
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsSUFBTSxxQkFBcUIsaUJBQXJCO0FBQ04sSUFBTSxtQkFBbUIsT0FBbkI7QUFDTixJQUFNLHNCQUF1QixPQUFPLFdBQVAsS0FBdUIsV0FBdkIsSUFBc0MsWUFBWSxHQUFaOzs7Ozs7OztBQVFuRSxJQUFNLFVBQVUsVUFBQyxRQUFEO1NBQWMsT0FBTyxTQUFQLENBQWlCLFFBQWpCLENBQTBCLElBQTFCLENBQStCLFFBQS9CLEVBQXlDLEtBQXpDLENBQStDLENBQS9DLEVBQWtELENBQUMsQ0FBRDtDQUFoRTs7Ozs7Ozs7QUFRVCxJQUFNLG9DQUFjLFVBQUMsTUFBRDtTQUFZLE9BQU8sT0FBUCxDQUFlLGtCQUFmLEVBQW1DLGdCQUFuQyxFQUFxRCxXQUFyRDtDQUFaOzs7Ozs7Ozs7OztBQVdwQixJQUFNLHNEQUF1QixVQUFDLEtBQUQsRUFBUSxNQUFSO1NBQXNCLGVBQVU7Q0FBaEM7Ozs7Ozs7QUFPN0IsSUFBTSxvQ0FBYyxzQkFBc0I7U0FBTSxZQUFZLEdBQVo7Q0FBTixHQUEwQjtTQUFNLElBQUksSUFBSixHQUFXLE9BQVg7Q0FBTjs7Ozs7Ozs7O0FBU3BFLElBQU0sb0NBQWMsVUFBQyxNQUFELEVBQVMsWUFBVDtTQUEwQixPQUFPLGNBQVAsQ0FBc0IsWUFBdEIsS0FBdUMsT0FBTyxZQUFQLE1BQXlCLFNBQXpCO0NBQWpFOzs7Ozs7OztBQVFwQixJQUFNLDRCQUFVLFVBQUMsR0FBRDtTQUFTLFFBQVEsR0FBUixNQUFpQixPQUFqQjtDQUFUOzs7Ozs7OztBQVFoQixJQUFNLDBCQUFTLFVBQUMsR0FBRDtTQUFTLFFBQVEsR0FBUixNQUFpQixVQUFqQjtDQUFUOzs7Ozs7OztBQVFmLElBQU0sd0JBQVEsVUFBQyxHQUFEO1NBQVMsT0FBTyxHQUFQLEtBQWUsUUFBZjtDQUFUOzs7Ozs7OztBQVFkLElBQU0sd0JBQVEsVUFBQyxHQUFEO1NBQVMsT0FBTyxHQUFQLEtBQWUsUUFBZjtDQUFUOzs7Ozs7OztBQVFkLElBQU0sNENBQWtCLFVBQUMsS0FBRDtTQUFXLEtBQUMsSUFBUyxNQUFNLE9BQU4sSUFBaUIsTUFBTSxPQUFOLENBQWMsR0FBZCxJQUFxQixDQUFyQixHQUEwQixJQUFyRCxHQUE0RCxLQUE1RDtDQUFYOzs7Ozs7OztBQVF4QixJQUFNLDhCQUFXLFVBQUMsR0FBRDtTQUFTLE9BQU8sR0FBUCxLQUFlLFFBQWY7Q0FBVDs7Ozs7Ozs7OztBQVVqQixJQUFNLG9EQUFzQixVQUFDLEtBQUQ7U0FBVyxTQUFTLEtBQVQsSUFBa0IsTUFBTSxLQUFOLENBQVksTUFBWixDQUFsQixHQUF3QyxDQUFDLEtBQUQsQ0FBeEM7Q0FBWDs7Ozs7Ozs7OztBQVU1QixJQUFNLG9EQUFzQixVQUFDLEtBQUQ7U0FBVyxTQUFTLEtBQVQsSUFBa0IsTUFBTSxLQUFOLENBQVksR0FBWixDQUFsQixHQUFxQyxDQUFDLEtBQUQsQ0FBckM7Q0FBWDs7Ozs7Ozs7O0FBUzVCLElBQU0sZ0NBQVksVUFBQyxHQUFELEVBQXdCO01BQWxCLGtFQUFZLGlCQUFNOztBQUMvQyx1QkFBWSxJQUFNLFVBQWxCLENBRCtDO0FBRS9DLFNBQU8sS0FBSyxLQUFMLENBQVcsTUFBTSxTQUFOLENBQVgsR0FBOEIsU0FBOUIsQ0FGd0M7Q0FBeEIiLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQ0FNRUxfQ0FTRV9QQVRURVJOID0gLyhbYS16XSkoW0EtWl0pL2c7XG5jb25zdCBSRVBMQUNFX1RFTVBMQVRFID0gJyQxLSQyJztcbmNvbnN0IEhBU19QRVJGT1JNQU5DRV9OT1cgPSAodHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJyAmJiBwZXJmb3JtYW5jZS5ub3cpO1xuXG4vKlxuICBHZXQgdmFyIHR5cGUgYXMgc3RyaW5nXG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbc3RyaW5nXTogUmV0dXJucywgZm9yIGluc3RhbmNlICdPYmplY3QnIGlmIFtvYmplY3QgT2JqZWN0XVxuKi9cbmNvbnN0IHZhclR5cGUgPSAodmFyaWFibGUpID0+IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YXJpYWJsZSkuc2xpY2UoOCwgLTEpO1xuXG4vKlxuICBDb252ZXJ0IGNhbWVsQ2FzZSB0byBkYXNoLWNhc2VcblxuICBAcGFyYW0gW3N0cmluZ11cbiAgQHJldHVybiBbc3RyaW5nXVxuKi9cbmV4cG9ydCBjb25zdCBjYW1lbFRvRGFzaCA9IChzdHJpbmcpID0+IHN0cmluZy5yZXBsYWNlKENBTUVMX0NBU0VfUEFUVEVSTiwgUkVQTEFDRV9URU1QTEFURSkudG9Mb3dlckNhc2UoKTtcblxuLypcbiAgQ3JlYXRlIGEgZnVuY3Rpb24gc3RyaW5nXG5cbiAgJzIwcHgnLCAndHJhbnNsYXRlJyAtPiAndHJhbnNsYXRlKDIwcHgpJ1xuXG4gIEBwYXJhbSBbc3RyaW5nXVxuICBAcGFyYW0gW3N0cmluZ11cbiAgQHJldHVybiBbc3RyaW5nXVxuKi9cbmV4cG9ydCBjb25zdCBjcmVhdGVGdW5jdGlvblN0cmluZyA9ICh2YWx1ZSwgcHJlZml4KSA9PiBgJHtwcmVmaXh9KCR7dmFsdWV9KWA7XG5cbi8qXG4gIEdlbmVyYXRlIGN1cnJlbnQgdGltZXN0YW1wXG4gIFxuICBAcmV0dXJuIFt0aW1lc3RhbXBdOiBDdXJyZW50IFVOSVggdGltZXN0YW1wXG4qL1xuZXhwb3J0IGNvbnN0IGN1cnJlbnRUaW1lID0gSEFTX1BFUkZPUk1BTkNFX05PVyA/ICgpID0+IHBlcmZvcm1hbmNlLm5vdygpIDogKCkgPT4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbi8qXG4gIENoZWNrIGlmIG9iamVjdCBoYXMgcHJvcGVydHkgYW5kIGl0IGlzbid0IHVuZGVmaW5lZFxuXG4gIEBwYXJhbSBbb2JqZWN0XVxuICBAcGFyYW0gW3N0cmluZ11cbiAgQHJldHVybiBbYm9vbGVhbl1cbiovXG5leHBvcnQgY29uc3QgaGFzUHJvcGVydHkgPSAob2JqZWN0LCBwcm9wZXJ0eU5hbWUpID0+IG9iamVjdC5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eU5hbWUpICYmIG9iamVjdFtwcm9wZXJ0eU5hbWVdICE9PSB1bmRlZmluZWQ7XG5cbi8qXG4gIElzIHV0aWxzIHZhciBhbiBhcnJheSA/IFxuICBcbiAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdXRpbHMudmFyVHlwZSA9PT0gJ0FycmF5J1xuKi9cbmV4cG9ydCBjb25zdCBpc0FycmF5ID0gKGFycikgPT4gdmFyVHlwZShhcnIpID09PSAnQXJyYXknO1xuXG4vKlxuICBJcyB1dGlscyB2YXIgYSBmdW5jdGlvbiA/IFxuICBcbiAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdXRpbHMudmFyVHlwZSA9PT0gJ0Z1bmN0aW9uJ1xuKi9cbmV4cG9ydCBjb25zdCBpc0Z1bmMgPSAob2JqKSA9PiB2YXJUeXBlKG9iaikgPT09ICdGdW5jdGlvbic7XG5cbi8qXG4gIElzIHV0aWxzIHZhciBhIG51bWJlcj9cbiAgXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiA9PT0gJ251bWJlcidcbiovXG5leHBvcnQgY29uc3QgaXNOdW0gPSAobnVtKSA9PiB0eXBlb2YgbnVtID09PSAnbnVtYmVyJztcblxuLypcbiAgSXMgdXRpbHMgdmFyIGFuIG9iamVjdD9cbiAgXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiA9PT0gJ29iamVjdCdcbiovXG5leHBvcnQgY29uc3QgaXNPYmogPSAob2JqKSA9PiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JztcblxuLypcbiAgSXMgdXRpbHMgYSByZWxhdGl2ZSB2YWx1ZSBhc3NpZ25tZW50P1xuICBcbiAgQHBhcmFtIFtzdHJpbmddOiBWYXJpYWJsZSB0byB0ZXN0XG4gIEByZXR1cm4gW2Jvb2xlYW5dOiBJZiB1dGlscyBsb29rcyBsaWtlIGEgcmVsYXRpdmUgdmFsdWUgYXNzaWdubWVudFxuKi9cbmV4cG9ydCBjb25zdCBpc1JlbGF0aXZlVmFsdWUgPSAodmFsdWUpID0+ICh2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mICYmIHZhbHVlLmluZGV4T2YoJz0nKSA+IDApID8gdHJ1ZSA6IGZhbHNlO1xuXG4vKlxuICBJcyB1dGlscyB2YXIgYSBzdHJpbmcgPyBcbiAgXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnXG4qL1xuZXhwb3J0IGNvbnN0IGlzU3RyaW5nID0gKHN0cikgPT4gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZyc7XG5cbi8qXG4gIFNwbGl0IGNvbW1hLWRlbGltaXRlZCBzdHJpbmdcblxuICBcImZvbyxiYXJcIiAtPiBbXCJmb29cIiwgXCJiYXJcIl1cblxuICBAcGFyYW0gW3N0cmluZ11cbiAgQHJldHVybiBbYXJyYXldXG4qL1xuZXhwb3J0IGNvbnN0IHNwbGl0Q29tbWFEZWxpbWl0ZWQgPSAodmFsdWUpID0+IGlzU3RyaW5nKHZhbHVlKSA/IHZhbHVlLnNwbGl0KC8sXFxzKi8pIDogW3ZhbHVlXTtcblxuLypcbiAgU3BsaXQgc3BhY2UtZGVsaW1pdGVkIHN0cmluZ1xuXG4gIFwiZm9vIGJhclwiIC0+IFtcImZvb1wiLCBcImJhclwiXVxuXG4gIEBwYXJhbSBbc3RyaW5nXVxuICBAcmV0dXJuIFthcnJheV1cbiovXG5leHBvcnQgY29uc3Qgc3BsaXRTcGFjZURlbGltaXRlZCA9ICh2YWx1ZSkgPT4gaXNTdHJpbmcodmFsdWUpID8gdmFsdWUuc3BsaXQoJyAnKSA6IFt2YWx1ZV07XG5cbi8qXG4gIENvbnZlcnQgbnVtYmVyIHRvIHggZGVjaW1hbCBwbGFjZXNcblxuICBAcGFyYW0gW251bWJlcl1cbiAgQHBhcmFtIFtudW1iZXJdXG4gIEByZXR1cm4gW251bWJlcl1cbiovXG5leHBvcnQgY29uc3QgdG9EZWNpbWFsID0gKG51bSwgcHJlY2lzaW9uID0gMikgPT4ge1xuICBwcmVjaXNpb24gPSAxMCAqKiBwcmVjaXNpb247XG4gIHJldHVybiBNYXRoLnJvdW5kKG51bSAqIHByZWNpc2lvbikgLyBwcmVjaXNpb247XG59O1xuIl19

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjBiZGI5NTg0NWIxMDc4ODRjM2MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9wbW90aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3R3ZWVuLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3ZlbG9jaXR5LmpzIiwid2VicGFjazovLy8uL3NyYy9mcmFtZXN5bmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9lYXNpbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlL3RyYW5zZm9ybWVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL2NhbGMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyYW1lc3luYy9vbi1uZXh0LWZyYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9mcmFtZXN5bmMvY3JlYXRlLXJlbmRlci1zdGVwLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esd0M7Ozs7Ozs7QUN0Q0E7O0FBRUE7O0FBRUE7O0FBRUEsd0NBQXVDLDZCQUE2QixZQUFZLEVBQUUsT0FBTyxpQkFBaUIsbUJBQW1CLHVCQUF1Qiw0RUFBNEUsRUFBRSxFQUFFLHNCQUFzQixlQUFlLEVBQUU7O0FBRTNRO0FBQ0EsNENBQTJDLDJXOzs7Ozs7QUNUM0M7O0FBRUE7QUFDQTs7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUEyQyxtbFk7Ozs7OztBQzNRM0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBLDRDQUEyQywyekU7Ozs7OztBQzdDM0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXFCLGtCQUFrQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTJDLG11Rjs7Ozs7O0FDL0MzQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRDQUEyQyx1cE0iLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCAyMGJkYjk1ODQ1YjEwNzg4NGMzY1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9wb3Btb3Rpb24gPSByZXF1aXJlKCcuL3BvcG1vdGlvbicpO1xuXG52YXIgUG9wbW90aW9uID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3BvcG1vdGlvbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbndpbmRvdy5Qb3Btb3Rpb24gPSBQb3Btb3Rpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OW5iRzlpWVd3dWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZCUVRzN1NVRkJXVHM3T3p0QlFVTmFMRTlCUVU4c1UwRkJVQ3hIUVVGdFFpeFRRVUZ1UWlJc0ltWnBiR1VpT2lKbmJHOWlZV3d1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUNvZ1lYTWdVRzl3Ylc5MGFXOXVJR1p5YjIwZ0p5NHZjRzl3Ylc5MGFXOXVKenRjYm5kcGJtUnZkeTVRYjNCdGIzUnBiMjRnUFNCUWIzQnRiM1JwYjI0N1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9nbG9iYWwuanNcbiAqKiBtb2R1bGUgaWQgPSAwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmVhc2luZyA9IGV4cG9ydHMudmVsb2NpdHkgPSBleHBvcnRzLnR3ZWVuID0gZXhwb3J0cy5BY3Rpb24gPSBleHBvcnRzLnZhbHVlID0gZXhwb3J0cy5jdXJyZW50RnJhbWVUaW1lc3RhbXAgPSBleHBvcnRzLnRpbWVTaW5jZUxhc3RGcmFtZSA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZUVuZCA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZVJlbmRlciA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZVVwZGF0ZSA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZVN0YXJ0ID0gZXhwb3J0cy5vbkZyYW1lRW5kID0gZXhwb3J0cy5vbkZyYW1lUmVuZGVyID0gZXhwb3J0cy5vbkZyYW1lVXBkYXRlID0gZXhwb3J0cy5vbkZyYW1lU3RhcnQgPSB1bmRlZmluZWQ7XG5cbnZhciBfZnJhbWVzeW5jID0gcmVxdWlyZSgnLi9mcmFtZXN5bmMnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdvbkZyYW1lU3RhcnQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZnJhbWVzeW5jLm9uRnJhbWVTdGFydDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ29uRnJhbWVVcGRhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZnJhbWVzeW5jLm9uRnJhbWVVcGRhdGU7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdvbkZyYW1lUmVuZGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ZyYW1lc3luYy5vbkZyYW1lUmVuZGVyO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnb25GcmFtZUVuZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9mcmFtZXN5bmMub25GcmFtZUVuZDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NhbmNlbE9uRnJhbWVTdGFydCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9mcmFtZXN5bmMuY2FuY2VsT25GcmFtZVN0YXJ0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY2FuY2VsT25GcmFtZVVwZGF0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9mcmFtZXN5bmMuY2FuY2VsT25GcmFtZVVwZGF0ZTtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NhbmNlbE9uRnJhbWVSZW5kZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZnJhbWVzeW5jLmNhbmNlbE9uRnJhbWVSZW5kZXI7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjYW5jZWxPbkZyYW1lRW5kJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ZyYW1lc3luYy5jYW5jZWxPbkZyYW1lRW5kO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndGltZVNpbmNlTGFzdEZyYW1lJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ZyYW1lc3luYy50aW1lU2luY2VMYXN0RnJhbWU7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjdXJyZW50RnJhbWVUaW1lc3RhbXAnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZnJhbWVzeW5jLmN1cnJlbnRGcmFtZVRpbWVzdGFtcDtcbiAgfVxufSk7XG5cbnZhciBfdmFsdWUyID0gcmVxdWlyZSgnLi92YWx1ZScpO1xuXG52YXIgX3ZhbHVlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ZhbHVlMik7XG5cbnZhciBfYWN0aW9ucyA9IHJlcXVpcmUoJy4vYWN0aW9ucycpO1xuXG52YXIgX2FjdGlvbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWN0aW9ucyk7XG5cbnZhciBfdHdlZW4yID0gcmVxdWlyZSgnLi9hY3Rpb25zL3R3ZWVuJyk7XG5cbnZhciBfdHdlZW4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHdlZW4yKTtcblxudmFyIF92ZWxvY2l0eTIgPSByZXF1aXJlKCcuL2FjdGlvbnMvdmVsb2NpdHknKTtcblxudmFyIF92ZWxvY2l0eTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF92ZWxvY2l0eTIpO1xuXG52YXIgX2Vhc2luZzIgPSByZXF1aXJlKCcuL2Vhc2luZycpO1xuXG52YXIgX2Vhc2luZyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9lYXNpbmcyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy52YWx1ZSA9IF92YWx1ZTMuZGVmYXVsdDtcbmV4cG9ydHMuQWN0aW9uID0gX2FjdGlvbnMyLmRlZmF1bHQ7XG5leHBvcnRzLnR3ZWVuID0gX3R3ZWVuMy5kZWZhdWx0O1xuZXhwb3J0cy52ZWxvY2l0eSA9IF92ZWxvY2l0eTMuZGVmYXVsdDtcbmV4cG9ydHMuZWFzaW5nID0gX2Vhc2luZztcblxuLy8gLy8gSW1wb3J0IGNsYXNzZXMgLSBsb25nIHRlcm0gZ29hbCB0byBtb3ZlIHRvd2FyZHMgY29tcG9zaXRpb25cbi8vIGltcG9ydCBBY3Rpb24gZnJvbSAnLi9hY3Rpb25zL0FjdGlvbic7XG4vLyBpbXBvcnQgRmxvdyBmcm9tICcuL2FjdGlvbnMvRmxvdyc7XG4vLyBpbXBvcnQgVHdlZW4gZnJvbSAnLi9hY3Rpb25zL1R3ZWVuJztcbi8vIGltcG9ydCBQaHlzaWNzIGZyb20gJy4vYWN0aW9ucy9QaHlzaWNzJztcbi8vIGltcG9ydCBUcmFjayBmcm9tICcuL2FjdGlvbnMvVHJhY2snO1xuLy8gaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrL1Rhc2snO1xuLy8gaW1wb3J0IElucHV0IGZyb20gJy4vaW5wdXQvSW5wdXQnO1xuXG4vLyAvLyBFeHBvcnQgZmFjdG9yeSBmdW5jdGlvbnNcbi8vIGV4cG9ydCBjb25zdCBmbG93ID0gKC4uLmFyZ3MpID0+IG5ldyBGbG93KC4uLmFyZ3MpO1xuLy8gZXhwb3J0IGNvbnN0IHR3ZWVuID0gKHByb3BzKSA9PiBuZXcgVHdlZW4ocHJvcHMpO1xuLy8gZXhwb3J0IGNvbnN0IHBoeXNpY3MgPSAocHJvcHMpID0+IG5ldyBQaHlzaWNzKHByb3BzKTtcbi8vIGV4cG9ydCBjb25zdCB0cmFjayA9ICguLi5hcmdzKSA9PiBuZXcgVHJhY2soLi4uYXJncyk7XG4vLyBleHBvcnQgY29uc3QgaW5wdXQgPSAoLi4uYXJncykgPT4gbmV3IElucHV0KC4uLmFyZ3MpO1xuLy8gZXhwb3J0IGNvbnN0IHRhc2sgPSAoLi4uYXJncykgPT4gbmV3IFRhc2soLi4uYXJncyk7XG4vLyBleHBvcnQgc3RhZ2dlciBmcm9tICcuL2luYy9zdGFnZ2VyJztcbi8vIGV4cG9ydCB0aW1lbGluZSBmcm9tICcuL2luYy90aW1lbGluZSc7XG5cbi8vIC8vIEFkYXB0ZXJzXG4vLyBleHBvcnQgY3JlYXRlQWRhcHRlciBmcm9tICcuL2FkYXB0ZXIvYWRhcHRlcic7XG4vLyBleHBvcnQgYXR0ciBmcm9tICcuL2FkYXB0ZXIvYXR0ci1hZGFwdGVyJztcbi8vIGV4cG9ydCBjc3MgZnJvbSAnLi9hZGFwdGVyL2Nzcy1hZGFwdGVyJztcbi8vIGV4cG9ydCBvYmplY3QgZnJvbSAnLi9hZGFwdGVyL29iamVjdC1hZGFwdGVyJztcbi8vIGV4cG9ydCBzdmcgZnJvbSAnLi9hZGFwdGVyL3N2Zy1hZGFwdGVyJztcbi8vIGV4cG9ydCBzdmdQYXRoIGZyb20gJy4vYWRhcHRlci9zdmctcGF0aC1hZGFwdGVyJztcblxuLy8gLy8gRWFzaW5nXG4vLyBleHBvcnQgZWFzaW5nIGZyb20gJy4vYWN0aW9ucy9lYXNpbmcvcHJlc2V0LWVhc2luZyc7XG4vLyBpbXBvcnQgZ2V0RmxvdyBmcm9tICcuL2FjdGlvbnMvZmxvdy9nZXQtZmxvdyc7XG4vLyBleHBvcnQgY29uc3QgZGV0ZWN0RmxvdyA9IGdldEZsb3c7XG5cbi8vIC8vIFV0aWxzXG4vLyBleHBvcnQgKiBhcyBjYWxjIGZyb20gJy4vaW5jL2NhbGMnO1xuLy8gZXhwb3J0ICogYXMgdXRpbHMgZnJvbSAnLi9pbmMvdXRpbHMnO1xuLy8gZXhwb3J0IHsgc2V0R2xvYmFsRGlsYXRpb24gfSBmcm9tICcuL3Rhc2svdGltZXInO1xuXG4vLyAvLyBWYWx1ZSB0eXBlc1xuLy8gaW1wb3J0IGFscGhhIGZyb20gJy4vdmFsdWUtdHlwZXMvYWxwaGEnO1xuLy8gaW1wb3J0IGFuZ2xlIGZyb20gJy4vdmFsdWUtdHlwZXMvYW5nbGUnO1xuLy8gaW1wb3J0IGNvbG9yIGZyb20gJy4vdmFsdWUtdHlwZXMvY29sb3InO1xuLy8gaW1wb3J0IGNvbXBsZXggZnJvbSAnLi92YWx1ZS10eXBlcy9jb21wbGV4Jztcbi8vIGltcG9ydCBoZXggZnJvbSAnLi92YWx1ZS10eXBlcy9oZXgnO1xuLy8gaW1wb3J0IGhzbCBmcm9tICcuL3ZhbHVlLXR5cGVzL2hzbCc7XG4vLyBpbXBvcnQgcHggZnJvbSAnLi92YWx1ZS10eXBlcy9weCc7XG4vLyBpbXBvcnQgcmdiIGZyb20gJy4vdmFsdWUtdHlwZXMvcmdiJztcbi8vIGltcG9ydCBzY2FsZSBmcm9tICcuL3ZhbHVlLXR5cGVzL3NjYWxlJztcbi8vIGltcG9ydCBzaGFkb3cgZnJvbSAnLi92YWx1ZS10eXBlcy9zaGFkb3cnO1xuLy8gaW1wb3J0IHVuaXQgZnJvbSAnLi92YWx1ZS10eXBlcy91bml0Jztcbi8vIGV4cG9ydCBjb25zdCB2YWx1ZVR5cGUgPSB7IGFscGhhLCBhbmdsZSwgY29sb3IsIGNvbXBsZXgsIGhleCwgaHNsLCBweCwgcmdiLCBzY2FsZSwgc2hhZG93LCB1bml0IH07XG5cbi8vIC8vIFRyYW5zZm9ybWVyc1xuLy8gZXhwb3J0ICogYXMgdHJhbnNmb3JtZXJzIGZyb20gJy4vaW5jL3RyYW5zZm9ybWVycyc7XG5cbi8vIC8qXG4vLyAgIFJldHVybnMgYSB2ZXJzaW9uIG9mIHRoZSBBY3Rpb24gYm91bmQgdG8gYSBGbG93XG5cbi8vICAgV2UncmUgYWRkaW5nIGBvbmAgaGVyZSBiZWNhdXNlIEZsb3cgZXh0ZW5kcyBBY3Rpb24sXG4vLyAgIG90aGVyd2lzZSBjcmVhdGluZyBhIGNpcmN1bGFyIG1vZHVsYXIgZGVwZW5kZW5jeS4gRnV0dXJlXG4vLyAgIHJlZmFjdG9yaW5nLCBpZSBtb3ZpbmcgdG8gYSBjb21wb3NpdGlvbmFsIG1vZGVsIHdpbGxcbi8vICAgcmVtb3ZlIHRoZSBuZWVkIGZvciB1cyB0byBkbyB0aGlzIGhlcmUuXG4vLyAqL1xuLy8gQWN0aW9uLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4vLyAgIGlmICghZWxlbWVudC5jb25uZWN0KSB7XG4vLyAgICAgZWxlbWVudCA9IGdldEZsb3coZWxlbWVudCk7XG4vLyAgIH1cblxuLy8gICByZXR1cm4gZWxlbWVudC5jb25uZWN0KHRoaXMpO1xuLy8gfTtcblxuLy8gZXhwb3J0IHsgQWN0aW9uIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXdiM0J0YjNScGIyNHVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenR6UWtGRlJUczdPenM3TzNOQ1FVTkJPenM3T3pzN2MwSkJRMEU3T3pzN096dHpRa0ZEUVRzN096czdPM05DUVVOQk96czdPenM3YzBKQlEwRTdPenM3T3p0elFrRkRRVHM3T3pzN08zTkNRVU5CT3pzN096czdjMEpCUTBFN096czdPenR6UWtGRFFUczdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096dFJRVWRMTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBzaUxDSm1hV3hsSWpvaWNHOXdiVzkwYVc5dUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaTh2SUVaeVlXMWxjM2x1WXlCelkyaGxaSFZzWlhKelhHNWxlSEJ2Y25RZ2UxeHVJQ0J2YmtaeVlXMWxVM1JoY25Rc1hHNGdJRzl1Um5KaGJXVlZjR1JoZEdVc1hHNGdJRzl1Um5KaGJXVlNaVzVrWlhJc1hHNGdJRzl1Um5KaGJXVkZibVFzWEc0Z0lHTmhibU5sYkU5dVJuSmhiV1ZUZEdGeWRDeGNiaUFnWTJGdVkyVnNUMjVHY21GdFpWVndaR0YwWlN4Y2JpQWdZMkZ1WTJWc1QyNUdjbUZ0WlZKbGJtUmxjaXhjYmlBZ1kyRnVZMlZzVDI1R2NtRnRaVVZ1WkN4Y2JpQWdkR2x0WlZOcGJtTmxUR0Z6ZEVaeVlXMWxMRnh1SUNCamRYSnlaVzUwUm5KaGJXVlVhVzFsYzNSaGJYQmNibjBnWm5KdmJTQW5MaTltY21GdFpYTjVibU1uTzF4dVhHNWxlSEJ2Y25RZ2RtRnNkV1VnWm5KdmJTQW5MaTkyWVd4MVpTYzdYRzVsZUhCdmNuUWdRV04wYVc5dUlHWnliMjBnSnk0dllXTjBhVzl1Y3ljN1hHNWxlSEJ2Y25RZ2RIZGxaVzRnWm5KdmJTQW5MaTloWTNScGIyNXpMM1IzWldWdUp6dGNibVY0Y0c5eWRDQjJaV3h2WTJsMGVTQm1jbTl0SUNjdUwyRmpkR2x2Ym5NdmRtVnNiMk5wZEhrbk8xeHVaWGh3YjNKMElDb2dZWE1nWldGemFXNW5JR1p5YjIwZ0p5NHZaV0Z6YVc1bkp6dGNibHh1THk4Z0x5OGdTVzF3YjNKMElHTnNZWE56WlhNZ0xTQnNiMjVuSUhSbGNtMGdaMjloYkNCMGJ5QnRiM1psSUhSdmQyRnlaSE1nWTI5dGNHOXphWFJwYjI1Y2JpOHZJR2x0Y0c5eWRDQkJZM1JwYjI0Z1puSnZiU0FuTGk5aFkzUnBiMjV6TDBGamRHbHZiaWM3WEc0dkx5QnBiWEJ2Y25RZ1JteHZkeUJtY205dElDY3VMMkZqZEdsdmJuTXZSbXh2ZHljN1hHNHZMeUJwYlhCdmNuUWdWSGRsWlc0Z1puSnZiU0FuTGk5aFkzUnBiMjV6TDFSM1pXVnVKenRjYmk4dklHbHRjRzl5ZENCUWFIbHphV056SUdaeWIyMGdKeTR2WVdOMGFXOXVjeTlRYUhsemFXTnpKenRjYmk4dklHbHRjRzl5ZENCVWNtRmpheUJtY205dElDY3VMMkZqZEdsdmJuTXZWSEpoWTJzbk8xeHVMeThnYVcxd2IzSjBJRlJoYzJzZ1puSnZiU0FuTGk5MFlYTnJMMVJoYzJzbk8xeHVMeThnYVcxd2IzSjBJRWx1Y0hWMElHWnliMjBnSnk0dmFXNXdkWFF2U1c1d2RYUW5PMXh1WEc0dkx5QXZMeUJGZUhCdmNuUWdabUZqZEc5eWVTQm1kVzVqZEdsdmJuTmNiaTh2SUdWNGNHOXlkQ0JqYjI1emRDQm1iRzkzSUQwZ0tDNHVMbUZ5WjNNcElEMCtJRzVsZHlCR2JHOTNLQzR1TG1GeVozTXBPMXh1THk4Z1pYaHdiM0owSUdOdmJuTjBJSFIzWldWdUlEMGdLSEJ5YjNCektTQTlQaUJ1WlhjZ1ZIZGxaVzRvY0hKdmNITXBPMXh1THk4Z1pYaHdiM0owSUdOdmJuTjBJSEJvZVhOcFkzTWdQU0FvY0hKdmNITXBJRDArSUc1bGR5QlFhSGx6YVdOektIQnliM0J6S1R0Y2JpOHZJR1Y0Y0c5eWRDQmpiMjV6ZENCMGNtRmpheUE5SUNndUxpNWhjbWR6S1NBOVBpQnVaWGNnVkhKaFkyc29MaTR1WVhKbmN5azdYRzR2THlCbGVIQnZjblFnWTI5dWMzUWdhVzV3ZFhRZ1BTQW9MaTR1WVhKbmN5a2dQVDRnYm1WM0lFbHVjSFYwS0M0dUxtRnlaM01wTzF4dUx5OGdaWGh3YjNKMElHTnZibk4wSUhSaGMyc2dQU0FvTGk0dVlYSm5jeWtnUFQ0Z2JtVjNJRlJoYzJzb0xpNHVZWEpuY3lrN1hHNHZMeUJsZUhCdmNuUWdjM1JoWjJkbGNpQm1jbTl0SUNjdUwybHVZeTl6ZEdGbloyVnlKenRjYmk4dklHVjRjRzl5ZENCMGFXMWxiR2x1WlNCbWNtOXRJQ2N1TDJsdVl5OTBhVzFsYkdsdVpTYzdYRzVjYmk4dklDOHZJRUZrWVhCMFpYSnpYRzR2THlCbGVIQnZjblFnWTNKbFlYUmxRV1JoY0hSbGNpQm1jbTl0SUNjdUwyRmtZWEIwWlhJdllXUmhjSFJsY2ljN1hHNHZMeUJsZUhCdmNuUWdZWFIwY2lCbWNtOXRJQ2N1TDJGa1lYQjBaWEl2WVhSMGNpMWhaR0Z3ZEdWeUp6dGNiaTh2SUdWNGNHOXlkQ0JqYzNNZ1puSnZiU0FuTGk5aFpHRndkR1Z5TDJOemN5MWhaR0Z3ZEdWeUp6dGNiaTh2SUdWNGNHOXlkQ0J2WW1wbFkzUWdabkp2YlNBbkxpOWhaR0Z3ZEdWeUwyOWlhbVZqZEMxaFpHRndkR1Z5Snp0Y2JpOHZJR1Y0Y0c5eWRDQnpkbWNnWm5KdmJTQW5MaTloWkdGd2RHVnlMM04yWnkxaFpHRndkR1Z5Snp0Y2JpOHZJR1Y0Y0c5eWRDQnpkbWRRWVhSb0lHWnliMjBnSnk0dllXUmhjSFJsY2k5emRtY3RjR0YwYUMxaFpHRndkR1Z5Snp0Y2JseHVMeThnTHk4Z1JXRnphVzVuWEc0dkx5QmxlSEJ2Y25RZ1pXRnphVzVuSUdaeWIyMGdKeTR2WVdOMGFXOXVjeTlsWVhOcGJtY3ZjSEpsYzJWMExXVmhjMmx1WnljN1hHNHZMeUJwYlhCdmNuUWdaMlYwUm14dmR5Qm1jbTl0SUNjdUwyRmpkR2x2Ym5NdlpteHZkeTluWlhRdFpteHZkeWM3WEc0dkx5QmxlSEJ2Y25RZ1kyOXVjM1FnWkdWMFpXTjBSbXh2ZHlBOUlHZGxkRVpzYjNjN1hHNWNiaTh2SUM4dklGVjBhV3h6WEc0dkx5QmxlSEJ2Y25RZ0tpQmhjeUJqWVd4aklHWnliMjBnSnk0dmFXNWpMMk5oYkdNbk8xeHVMeThnWlhod2IzSjBJQ29nWVhNZ2RYUnBiSE1nWm5KdmJTQW5MaTlwYm1NdmRYUnBiSE1uTzF4dUx5OGdaWGh3YjNKMElIc2djMlYwUjJ4dlltRnNSR2xzWVhScGIyNGdmU0JtY205dElDY3VMM1JoYzJzdmRHbHRaWEluTzF4dVhHNHZMeUF2THlCV1lXeDFaU0IwZVhCbGMxeHVMeThnYVcxd2IzSjBJR0ZzY0doaElHWnliMjBnSnk0dmRtRnNkV1V0ZEhsd1pYTXZZV3h3YUdFbk8xeHVMeThnYVcxd2IzSjBJR0Z1WjJ4bElHWnliMjBnSnk0dmRtRnNkV1V0ZEhsd1pYTXZZVzVuYkdVbk8xeHVMeThnYVcxd2IzSjBJR052Ykc5eUlHWnliMjBnSnk0dmRtRnNkV1V0ZEhsd1pYTXZZMjlzYjNJbk8xeHVMeThnYVcxd2IzSjBJR052YlhCc1pYZ2dabkp2YlNBbkxpOTJZV3gxWlMxMGVYQmxjeTlqYjIxd2JHVjRKenRjYmk4dklHbHRjRzl5ZENCb1pYZ2dabkp2YlNBbkxpOTJZV3gxWlMxMGVYQmxjeTlvWlhnbk8xeHVMeThnYVcxd2IzSjBJR2h6YkNCbWNtOXRJQ2N1TDNaaGJIVmxMWFI1Y0dWekwyaHpiQ2M3WEc0dkx5QnBiWEJ2Y25RZ2NIZ2dabkp2YlNBbkxpOTJZV3gxWlMxMGVYQmxjeTl3ZUNjN1hHNHZMeUJwYlhCdmNuUWdjbWRpSUdaeWIyMGdKeTR2ZG1Gc2RXVXRkSGx3WlhNdmNtZGlKenRjYmk4dklHbHRjRzl5ZENCelkyRnNaU0JtY205dElDY3VMM1poYkhWbExYUjVjR1Z6TDNOallXeGxKenRjYmk4dklHbHRjRzl5ZENCemFHRmtiM2NnWm5KdmJTQW5MaTkyWVd4MVpTMTBlWEJsY3k5emFHRmtiM2NuTzF4dUx5OGdhVzF3YjNKMElIVnVhWFFnWm5KdmJTQW5MaTkyWVd4MVpTMTBlWEJsY3k5MWJtbDBKenRjYmk4dklHVjRjRzl5ZENCamIyNXpkQ0IyWVd4MVpWUjVjR1VnUFNCN0lHRnNjR2hoTENCaGJtZHNaU3dnWTI5c2IzSXNJR052YlhCc1pYZ3NJR2hsZUN3Z2FITnNMQ0J3ZUN3Z2NtZGlMQ0J6WTJGc1pTd2djMmhoWkc5M0xDQjFibWwwSUgwN1hHNWNiaTh2SUM4dklGUnlZVzV6Wm05eWJXVnljMXh1THk4Z1pYaHdiM0owSUNvZ1lYTWdkSEpoYm5ObWIzSnRaWEp6SUdaeWIyMGdKeTR2YVc1akwzUnlZVzV6Wm05eWJXVnljeWM3WEc1Y2JpOHZJQzhxWEc0dkx5QWdJRkpsZEhWeWJuTWdZU0IyWlhKemFXOXVJRzltSUhSb1pTQkJZM1JwYjI0Z1ltOTFibVFnZEc4Z1lTQkdiRzkzWEc1Y2JpOHZJQ0FnVjJVbmNtVWdZV1JrYVc1bklHQnZibUFnYUdWeVpTQmlaV05oZFhObElFWnNiM2NnWlhoMFpXNWtjeUJCWTNScGIyNHNYRzR2THlBZ0lHOTBhR1Z5ZDJselpTQmpjbVZoZEdsdVp5QmhJR05wY21OMWJHRnlJRzF2WkhWc1lYSWdaR1Z3Wlc1a1pXNWplUzRnUm5WMGRYSmxYRzR2THlBZ0lISmxabUZqZEc5eWFXNW5MQ0JwWlNCdGIzWnBibWNnZEc4Z1lTQmpiMjF3YjNOcGRHbHZibUZzSUcxdlpHVnNJSGRwYkd4Y2JpOHZJQ0FnY21WdGIzWmxJSFJvWlNCdVpXVmtJR1p2Y2lCMWN5QjBieUJrYnlCMGFHbHpJR2hsY21VdVhHNHZMeUFxTDF4dUx5OGdRV04wYVc5dUxuQnliM1J2ZEhsd1pTNXZiaUE5SUdaMWJtTjBhVzl1SUNobGJHVnRaVzUwS1NCN1hHNHZMeUFnSUdsbUlDZ2haV3hsYldWdWRDNWpiMjV1WldOMEtTQjdYRzR2THlBZ0lDQWdaV3hsYldWdWRDQTlJR2RsZEVac2IzY29aV3hsYldWdWRDazdYRzR2THlBZ0lIMWNibHh1THk4Z0lDQnlaWFIxY200Z1pXeGxiV1Z1ZEM1amIyNXVaV04wS0hSb2FYTXBPMXh1THk4Z2ZUdGNibHh1THk4Z1pYaHdiM0owSUhzZ1FXTjBhVzl1SUgwN0lsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3BvcG1vdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF8gPSByZXF1aXJlKCcuLycpO1xuXG52YXIgXzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF8pO1xuXG52YXIgX2ZyYW1lc3luYyA9IHJlcXVpcmUoJy4uL2ZyYW1lc3luYycpO1xuXG52YXIgX3RyYW5zZm9ybWVycyA9IHJlcXVpcmUoJy4uL3ZhbHVlL3RyYW5zZm9ybWVycycpO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpO1xuXG52YXIgX2Vhc2luZyA9IHJlcXVpcmUoJy4uL2Vhc2luZycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciByZXN0cmljdFByb2dyZXNzID0gKDAsIF90cmFuc2Zvcm1lcnMucmVzdHJpY3RCZXR3ZWVuKSgwLCAxKTtcblxudmFyIFR3ZWVuID0gZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgX2luaGVyaXRzKFR3ZWVuLCBfQWN0aW9uKTtcblxuICBmdW5jdGlvbiBUd2VlbigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHdlZW4pO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBUd2Vlbi5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uIG9uU3RhcnQoKSB7XG4gICAgdGhpcy5lbGFwc2VkID0gMDtcbiAgfTtcblxuICBUd2Vlbi5wcm90b3R5cGUub25VcGRhdGUgPSBmdW5jdGlvbiBvblVwZGF0ZSgpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgZHVyYXRpb24gPSBfcHJvcHMuZHVyYXRpb247XG4gICAgdmFyIGVhc2UgPSBfcHJvcHMuZWFzZTtcbiAgICB2YXIgZnJvbSA9IF9wcm9wcy5mcm9tO1xuICAgIHZhciB0byA9IF9wcm9wcy50bztcblxuICAgIHRoaXMuZWxhcHNlZCArPSAoMCwgX2ZyYW1lc3luYy50aW1lU2luY2VMYXN0RnJhbWUpKCk7XG4gICAgdmFyIHByb2dyZXNzID0gKDAsIF9jYWxjLmdldFByb2dyZXNzRnJvbVZhbHVlKSh0aGlzLmVsYXBzZWQsIDAsIGR1cmF0aW9uKTtcbiAgICB2YXIgZWFzZWRQcm9ncmVzcyA9IGVhc2UocmVzdHJpY3RQcm9ncmVzcyhwcm9ncmVzcykpO1xuICAgIHRoaXMuY3VycmVudCA9ICgwLCBfY2FsYy5nZXRWYWx1ZUZyb21Qcm9ncmVzcykoZWFzZWRQcm9ncmVzcywgZnJvbSwgdG8pO1xuXG4gICAgaWYgKHRoaXMuZWxhcHNlZCA+PSBkdXJhdGlvbikge1xuICAgICAgdGhpcy5jb21wbGV0ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gVHdlZW47XG59KF8yLmRlZmF1bHQpO1xuXG5Ud2Vlbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGR1cmF0aW9uOiAzMDAsXG4gIGVhc2U6IF9lYXNpbmcuZWFzZU91dCxcbiAgZnJvbTogMCxcbiAgdG86IDBcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChwcm9wcykge1xuICByZXR1cm4gbmV3IFR3ZWVuKHByb3BzKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwzUjNaV1Z1TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdRVUZCUVRzN096dEJRVU5CT3p0QlFVTkJPenRCUVVOQk96dEJRVU5CT3pzN096czdPenM3TzBGQlJVRXNTVUZCVFN4dFFrRkJiVUlzYlVOQlFXZENMRU5CUVdoQ0xFVkJRVzFDTEVOQlFXNUNMRU5CUVc1Q096dEpRVVZCT3pzN096czdPenM3YTBKQlVVb3NOa0pCUVZVN1FVRkRVaXhUUVVGTExFOUJRVXdzUjBGQlpTeERRVUZtTEVOQlJGRTdPenRCUVZKT0xHdENRVmxLTEN0Q1FVRlhPMmxDUVVNMFFpeExRVUZMTEV0QlFVd3NRMEZFTlVJN1VVRkRSQ3d5UWtGRVF6dFJRVU5UTEcxQ1FVUlVPMUZCUTJVc2JVSkJSR1k3VVVGRGNVSXNaVUZFY2tJN08wRkJSVlFzVTBGQlN5eFBRVUZNTEVsQlFXZENMRzlEUVVGb1FpeERRVVpUTzBGQlIxUXNVVUZCVFN4WFFVRlhMR2REUVVGeFFpeExRVUZMTEU5QlFVd3NSVUZCWXl4RFFVRnVReXhGUVVGelF5eFJRVUYwUXl4RFFVRllMRU5CU0VjN1FVRkpWQ3hSUVVGTkxHZENRVUZuUWl4TFFVRkxMR2xDUVVGcFFpeFJRVUZxUWl4RFFVRk1MRU5CUVdoQ0xFTkJTa2M3UVVGTFZDeFRRVUZMTEU5QlFVd3NSMEZCWlN4blEwRkJjVUlzWVVGQmNrSXNSVUZCYjBNc1NVRkJjRU1zUlVGQk1FTXNSVUZCTVVNc1EwRkJaaXhEUVV4VE96dEJRVTlVTEZGQlFVa3NTMEZCU3l4UFFVRk1MRWxCUVdkQ0xGRkJRV2hDTEVWQlFUQkNPMEZCUXpWQ0xGZEJRVXNzVVVGQlRDeEhRVVEwUWp0TFFVRTVRanM3TzFOQmJrSkZPenM3VFVGRFJ5eGxRVUZsTzBGQlEzQkNMRmxCUVZVc1IwRkJWanRCUVVOQkxIVkNRVVp2UWp0QlFVZHdRaXhSUVVGTkxFTkJRVTQ3UVVGRFFTeE5RVUZKTEVOQlFVbzdPenRyUWtGdlFsY3NWVUZCUXl4TFFVRkVPMU5CUVZjc1NVRkJTU3hMUVVGS0xFTkJRVlVzUzBGQlZqdERRVUZZSWl3aVptbHNaU0k2SW5SM1pXVnVMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwTDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0JCWTNScGIyNGdabkp2YlNBbkxpOG5PMXh1YVcxd2IzSjBJSHNnZEdsdFpWTnBibU5sVEdGemRFWnlZVzFsSUgwZ1puSnZiU0FuTGk0dlpuSmhiV1Z6ZVc1akp6dGNibWx0Y0c5eWRDQjdJSEpsYzNSeWFXTjBRbVYwZDJWbGJpQjlJR1p5YjIwZ0p5NHVMM1poYkhWbEwzUnlZVzV6Wm05eWJXVnljeWM3WEc1cGJYQnZjblFnZXlCbFlYTmxMQ0JuWlhSUWNtOW5jbVZ6YzBaeWIyMVdZV3gxWlN3Z1oyVjBWbUZzZFdWR2NtOXRVSEp2WjNKbGMzTWdmU0JtY205dElDY3VMaTlwYm1NdlkyRnNZeWM3WEc1cGJYQnZjblFnZXlCbFlYTmxUM1YwSUgwZ1puSnZiU0FuTGk0dlpXRnphVzVuSnp0Y2JseHVZMjl1YzNRZ2NtVnpkSEpwWTNSUWNtOW5jbVZ6Y3lBOUlISmxjM1J5YVdOMFFtVjBkMlZsYmlnd0xDQXhLVHRjYmx4dVkyeGhjM01nVkhkbFpXNGdaWGgwWlc1a2N5QkJZM1JwYjI0Z2UxeHVJQ0J6ZEdGMGFXTWdaR1ZtWVhWc2RGQnliM0J6SUQwZ2UxeHVJQ0FnSUdSMWNtRjBhVzl1T2lBek1EQXNYRzRnSUNBZ1pXRnpaVG9nWldGelpVOTFkQ3hjYmlBZ0lDQm1jbTl0T2lBd0xGeHVJQ0FnSUhSdk9pQXdYRzRnSUgxY2JseHVJQ0J2YmxOMFlYSjBLQ2tnZTF4dUlDQWdJSFJvYVhNdVpXeGhjSE5sWkNBOUlEQTdYRzRnSUgxY2JseHVJQ0J2YmxWd1pHRjBaU2dwSUh0Y2JpQWdJQ0JqYjI1emRDQjdJR1IxY21GMGFXOXVMQ0JsWVhObExDQm1jbTl0TENCMGJ5QjlJRDBnZEdocGN5NXdjbTl3Y3p0Y2JpQWdJQ0IwYUdsekxtVnNZWEJ6WldRZ0t6MGdkR2x0WlZOcGJtTmxUR0Z6ZEVaeVlXMWxLQ2s3WEc0Z0lDQWdZMjl1YzNRZ2NISnZaM0psYzNNZ1BTQm5aWFJRY205bmNtVnpjMFp5YjIxV1lXeDFaU2gwYUdsekxtVnNZWEJ6WldRc0lEQXNJR1IxY21GMGFXOXVLVHRjYmlBZ0lDQmpiMjV6ZENCbFlYTmxaRkJ5YjJkeVpYTnpJRDBnWldGelpTaHlaWE4wY21samRGQnliMmR5WlhOektIQnliMmR5WlhOektTazdYRzRnSUNBZ2RHaHBjeTVqZFhKeVpXNTBJRDBnWjJWMFZtRnNkV1ZHY205dFVISnZaM0psYzNNb1pXRnpaV1JRY205bmNtVnpjeXdnWm5KdmJTd2dkRzhwTzF4dVhHNGdJQ0FnYVdZZ0tIUm9hWE11Wld4aGNITmxaQ0ErUFNCa2RYSmhkR2x2YmlrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTVqYjIxd2JHVjBaU2dwTzF4dUlDQWdJSDFjYmlBZ2ZWeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0FvY0hKdmNITXBJRDArSUc1bGR5QlVkMlZsYmlod2NtOXdjeWs3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvdHdlZW4uanNcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfID0gcmVxdWlyZSgnLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxudmFyIF9mcmFtZXN5bmMgPSByZXF1aXJlKCcuLi9mcmFtZXN5bmMnKTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgVmVsb2NpdHkgPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICBfaW5oZXJpdHMoVmVsb2NpdHksIF9BY3Rpb24pO1xuXG4gIGZ1bmN0aW9uIFZlbG9jaXR5KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBWZWxvY2l0eSk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIFZlbG9jaXR5LnByb3RvdHlwZS5vblVwZGF0ZSA9IGZ1bmN0aW9uIG9uVXBkYXRlKCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBhY2NlbGVyYXRpb24gPSBfcHJvcHMuYWNjZWxlcmF0aW9uO1xuICAgIHZhciBhdXRvU3RvcFNwZWVkID0gX3Byb3BzLmF1dG9TdG9wU3BlZWQ7XG4gICAgdmFyIGZyaWN0aW9uID0gX3Byb3BzLmZyaWN0aW9uO1xuICAgIHZhciB2ZWxvY2l0eSA9IF9wcm9wcy52ZWxvY2l0eTtcblxuICAgIHZhciBuZXdWZWxvY2l0eSA9IHZlbG9jaXR5O1xuICAgIHZhciBlbGFwc2VkID0gKDAsIF9mcmFtZXN5bmMudGltZVNpbmNlTGFzdEZyYW1lKSgpO1xuXG4gICAgLy8gQXBwbHkgYWNjZWxlcmF0aW9uIHRvIHZlbG9jaXR5XG4gICAgaWYgKGFjY2VsZXJhdGlvbikge1xuICAgICAgbmV3VmVsb2NpdHkgKz0gKDAsIF9jYWxjLnNwZWVkUGVyRnJhbWUpKGFjY2VsZXJhdGlvbiwgZWxhcHNlZCk7XG4gICAgfVxuXG4gICAgLy8gQXBwbHkgZnJpY3Rpb24gdG8gdmVsb2NpdHlcbiAgICBpZiAoZnJpY3Rpb24pIHtcbiAgICAgIG5ld1ZlbG9jaXR5ICo9IE1hdGgucG93KDEgLSBmcmljdGlvbiwgZWxhcHNlZCAvIDEwMCk7XG4gICAgfVxuXG4gICAgLy8gQXBwbHkgdmVsb2NpdHlcbiAgICB0aGlzLmN1cnJlbnQgKz0gKDAsIF9jYWxjLnNwZWVkUGVyRnJhbWUpKG5ld1ZlbG9jaXR5LCBlbGFwc2VkKTtcbiAgICB0aGlzLnByb3BzLnZlbG9jaXR5ID0gbmV3VmVsb2NpdHk7XG5cbiAgICBpZiAoIW5ld1ZlbG9jaXR5IHx8IE1hdGguYWJzKG5ld1ZlbG9jaXR5KSA8PSBhdXRvU3RvcFNwZWVkKSB7XG4gICAgICB0aGlzLmNvbXBsZXRlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBWZWxvY2l0eTtcbn0oXzIuZGVmYXVsdCk7XG5cblZlbG9jaXR5LmRlZmF1bHRQcm9wcyA9IHtcbiAgYWNjZWxlcmF0aW9uOiAwLFxuICBmcmljdGlvbjogMCxcbiAgdmVsb2NpdHk6IDAsXG4gIGF1dG9TdG9wU3BlZWQ6IDAuMDAxXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBWZWxvY2l0eShwcm9wcyk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMM1psYkc5amFYUjVMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN1FVRkJRVHM3T3p0QlFVTkJPenRCUVVOQk96czdPenM3T3pzN08wbEJSVTA3T3pzN096czdPenR4UWtGUlNpd3JRa0ZCVnp0cFFrRkRiVVFzUzBGQlN5eExRVUZNTEVOQlJHNUVPMUZCUTBRc2JVTkJSRU03VVVGRFlTeHhRMEZFWWp0UlFVTTBRaXd5UWtGRU5VSTdVVUZEYzBNc01rSkJSSFJET3p0QlFVVlVMRkZCUVVrc1kwRkJZeXhSUVVGa0xFTkJSa3M3UVVGSFZDeFJRVUZOTEZWQlFWVXNiME5CUVZZN096dEJRVWhITEZGQlRVd3NXVUZCU2l4RlFVRnJRanRCUVVOb1FpeHhRa0ZCWlN4NVFrRkJZeXhaUVVGa0xFVkJRVFJDTEU5QlFUVkNMRU5CUVdZc1EwRkVaMEk3UzBGQmJFSTdPenRCUVU1VExGRkJWMHdzVVVGQlNpeEZRVUZqTzBGQlExb3NPRUpCUVdkQ0xFbEJRVWtzVVVGQlNpeEZRVUZyUWl4VlFVRlZMRWRCUVZZc1EwRkJiRU1zUTBGRVdUdExRVUZrT3pzN1FVRllVeXhSUVdkQ1ZDeERRVUZMTEU5QlFVd3NTVUZCWjBJc2VVSkJRV01zVjBGQlpDeEZRVUV5UWl4UFFVRXpRaXhEUVVGb1FpeERRV2hDVXp0QlFXbENWQ3hUUVVGTExFdEJRVXdzUTBGQlZ5eFJRVUZZTEVkQlFYTkNMRmRCUVhSQ0xFTkJha0pUT3p0QlFXMUNWQ3hSUVVGSkxFTkJRVU1zVjBGQlJDeEpRVUZuUWl4TFFVRkxMRWRCUVV3c1EwRkJVeXhYUVVGVUxFdEJRWGxDTEdGQlFYcENMRVZCUVhkRE8wRkJRekZFTEZkQlFVc3NVVUZCVEN4SFFVUXdSRHRMUVVFMVJEczdPMU5CTTBKRk96czdVMEZEUnl4bFFVRmxPMEZCUTNCQ0xHZENRVUZqTEVOQlFXUTdRVUZEUVN4WlFVRlZMRU5CUVZZN1FVRkRRU3haUVVGVkxFTkJRVlk3UVVGRFFTeHBRa0ZCWlN4TFFVRm1PenM3YTBKQk5FSlhMRlZCUVVNc1MwRkJSRHRUUVVGWExFbEJRVWtzVVVGQlNpeERRVUZoTEV0QlFXSTdRMEZCV0NJc0ltWnBiR1VpT2lKMlpXeHZZMmwwZVM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRDOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1FXTjBhVzl1SUdaeWIyMGdKeTR2Snp0Y2JtbHRjRzl5ZENCN0lIUnBiV1ZUYVc1alpVeGhjM1JHY21GdFpTQjlJR1p5YjIwZ0p5NHVMMlp5WVcxbGMzbHVZeWM3WEc1cGJYQnZjblFnZXlCemNHVmxaRkJsY2taeVlXMWxJSDBnWm5KdmJTQW5MaTR2YVc1akwyTmhiR01uTzF4dVhHNWpiR0Z6Y3lCV1pXeHZZMmwwZVNCbGVIUmxibVJ6SUVGamRHbHZiaUI3WEc0Z0lITjBZWFJwWXlCa1pXWmhkV3gwVUhKdmNITWdQU0I3WEc0Z0lDQWdZV05qWld4bGNtRjBhVzl1T2lBd0xGeHVJQ0FnSUdaeWFXTjBhVzl1T2lBd0xGeHVJQ0FnSUhabGJHOWphWFI1T2lBd0xGeHVJQ0FnSUdGMWRHOVRkRzl3VTNCbFpXUTZJREF1TURBeFhHNGdJSDFjYmx4dUlDQnZibFZ3WkdGMFpTZ3BJSHRjYmlBZ0lDQmpiMjV6ZENCN0lHRmpZMlZzWlhKaGRHbHZiaXdnWVhWMGIxTjBiM0JUY0dWbFpDd2dabkpwWTNScGIyNHNJSFpsYkc5amFYUjVJSDBnUFNCMGFHbHpMbkJ5YjNCek8xeHVJQ0FnSUd4bGRDQnVaWGRXWld4dlkybDBlU0E5SUhabGJHOWphWFI1TzF4dUlDQWdJR052Ym5OMElHVnNZWEJ6WldRZ1BTQjBhVzFsVTJsdVkyVk1ZWE4wUm5KaGJXVW9LVHRjYmx4dUlDQWdJQzh2SUVGd2NHeDVJR0ZqWTJWc1pYSmhkR2x2YmlCMGJ5QjJaV3h2WTJsMGVWeHVJQ0FnSUdsbUlDaGhZMk5sYkdWeVlYUnBiMjRwSUh0Y2JpQWdJQ0FnSUc1bGQxWmxiRzlqYVhSNUlDczlJSE53WldWa1VHVnlSbkpoYldVb1lXTmpaV3hsY21GMGFXOXVMQ0JsYkdGd2MyVmtLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQXZMeUJCY0hCc2VTQm1jbWxqZEdsdmJpQjBieUIyWld4dlkybDBlVnh1SUNBZ0lHbG1JQ2htY21samRHbHZiaWtnZTF4dUlDQWdJQ0FnYm1WM1ZtVnNiMk5wZEhrZ0tqMGdLREVnTFNCbWNtbGpkR2x2YmlrZ0tpb2dLR1ZzWVhCelpXUWdMeUF4TURBcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUM4dklFRndjR3g1SUhabGJHOWphWFI1WEc0Z0lDQWdkR2hwY3k1amRYSnlaVzUwSUNzOUlITndaV1ZrVUdWeVJuSmhiV1VvYm1WM1ZtVnNiMk5wZEhrc0lHVnNZWEJ6WldRcE8xeHVJQ0FnSUhSb2FYTXVjSEp2Y0hNdWRtVnNiMk5wZEhrZ1BTQnVaWGRXWld4dlkybDBlVHRjYmx4dUlDQWdJR2xtSUNnaGJtVjNWbVZzYjJOcGRIa2dmSHdnVFdGMGFDNWhZbk1vYm1WM1ZtVnNiMk5wZEhrcElEdzlJR0YxZEc5VGRHOXdVM0JsWldRcElIdGNiaUFnSUNBZ0lIUm9hWE11WTI5dGNHeGxkR1VvS1R0Y2JpQWdJQ0I5WEc0Z0lIMWNibjFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnS0hCeWIzQnpLU0E5UGlCdVpYY2dWbVZzYjJOcGRIa29jSEp2Y0hNcE95SmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL3ZlbG9jaXR5LmpzXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5jdXJyZW50RnJhbWVUaW1lc3RhbXAgPSBleHBvcnRzLnRpbWVTaW5jZUxhc3RGcmFtZSA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZUVuZCA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZVJlbmRlciA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZVVwZGF0ZSA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZVN0YXJ0ID0gZXhwb3J0cy5vbkZyYW1lRW5kID0gZXhwb3J0cy5vbkZyYW1lUmVuZGVyID0gZXhwb3J0cy5vbkZyYW1lVXBkYXRlID0gZXhwb3J0cy5vbkZyYW1lU3RhcnQgPSB1bmRlZmluZWQ7XG5cbnZhciBfb25OZXh0RnJhbWUgPSByZXF1aXJlKCcuL29uLW5leHQtZnJhbWUnKTtcblxudmFyIF9vbk5leHRGcmFtZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vbk5leHRGcmFtZSk7XG5cbnZhciBfY3JlYXRlUmVuZGVyU3RlcCA9IHJlcXVpcmUoJy4vY3JlYXRlLXJlbmRlci1zdGVwJyk7XG5cbnZhciBfY3JlYXRlUmVuZGVyU3RlcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVSZW5kZXJTdGVwKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgd2lsbFJlbmRlck5leHRGcmFtZSA9IGZhbHNlO1xuXG4vKipcbiAqIE1heGltdW0gcGVybWl0dGVkIG1zIHNpbmNlIGxhc3QgZnJhbWVcbiAqIEB0eXBlIHtOdW1iZXJ9XG4gKi9cbnZhciBNQVhfRUxBUFNFRCA9IDIwO1xuXG4vKipcbiAqIEN1cnJlbnQgZnJhbWVzdGFtcFxuICogQHR5cGUge051bWJlcn1cbiAqL1xudmFyIGN1cnJlbnRGcmFtZXN0YW1wID0gKDAsIF91dGlscy5jdXJyZW50VGltZSkoKTtcblxudmFyIGVsYXBzZWQgPSAwO1xuXG4vKipcbiAqIEZhY3RvciB0byBtdWx0aXBseSBgZWxhcHNlZGAgYnkgLSBcbiAqIDAuNSB3b3VsZCBiZSBzbG93IG1vdGlvbiwgMiB3b3VsZCBiZSBmYXN0XG4gKiBAdHlwZSB7TnVtYmVyfVxuICovXG52YXIgZGlsYXRpb24gPSAxO1xuXG5mdW5jdGlvbiBzdGFydFJlbmRlckxvb3AoKSB7XG4gIGlmICghd2lsbFJlbmRlck5leHRGcmFtZSkge1xuICAgIHdpbGxSZW5kZXJOZXh0RnJhbWUgPSB0cnVlO1xuICAgICgwLCBfb25OZXh0RnJhbWUyLmRlZmF1bHQpKHByb2Nlc3NGcmFtZSk7XG4gIH1cbn1cblxudmFyIGZyYW1lU3RhcnQgPSAoMCwgX2NyZWF0ZVJlbmRlclN0ZXAyLmRlZmF1bHQpKHN0YXJ0UmVuZGVyTG9vcCk7XG52YXIgZnJhbWVVcGRhdGUgPSAoMCwgX2NyZWF0ZVJlbmRlclN0ZXAyLmRlZmF1bHQpKHN0YXJ0UmVuZGVyTG9vcCk7XG52YXIgZnJhbWVSZW5kZXIgPSAoMCwgX2NyZWF0ZVJlbmRlclN0ZXAyLmRlZmF1bHQpKHN0YXJ0UmVuZGVyTG9vcCk7XG52YXIgZnJhbWVFbmQgPSAoMCwgX2NyZWF0ZVJlbmRlclN0ZXAyLmRlZmF1bHQpKHN0YXJ0UmVuZGVyTG9vcCk7XG5cbmZ1bmN0aW9uIHByb2Nlc3NGcmFtZShmcmFtZXN0YW1wKSB7XG4gIHdpbGxSZW5kZXJOZXh0RnJhbWUgPSBmYWxzZTtcbiAgZWxhcHNlZCA9IE1hdGgubWF4KE1hdGgubWluKGZyYW1lc3RhbXAgLSBjdXJyZW50RnJhbWVzdGFtcCwgTUFYX0VMQVBTRUQpLCAxKSAqIGRpbGF0aW9uO1xuICBjdXJyZW50RnJhbWVzdGFtcCA9IGZyYW1lc3RhbXA7XG5cbiAgZnJhbWVTdGFydC5wcm9jZXNzKCk7XG4gIGZyYW1lVXBkYXRlLnByb2Nlc3MoKTtcbiAgZnJhbWVSZW5kZXIucHJvY2VzcygpO1xuICBmcmFtZUVuZC5wcm9jZXNzKCk7XG59XG5cbnZhciBvbkZyYW1lU3RhcnQgPSBleHBvcnRzLm9uRnJhbWVTdGFydCA9IGZyYW1lU3RhcnQuc2NoZWR1bGU7XG52YXIgb25GcmFtZVVwZGF0ZSA9IGV4cG9ydHMub25GcmFtZVVwZGF0ZSA9IGZyYW1lVXBkYXRlLnNjaGVkdWxlO1xudmFyIG9uRnJhbWVSZW5kZXIgPSBleHBvcnRzLm9uRnJhbWVSZW5kZXIgPSBmcmFtZVJlbmRlci5zY2hlZHVsZTtcbnZhciBvbkZyYW1lRW5kID0gZXhwb3J0cy5vbkZyYW1lRW5kID0gZnJhbWVFbmQuc2NoZWR1bGU7XG52YXIgY2FuY2VsT25GcmFtZVN0YXJ0ID0gZXhwb3J0cy5jYW5jZWxPbkZyYW1lU3RhcnQgPSBmcmFtZVN0YXJ0LmNhbmNlbDtcbnZhciBjYW5jZWxPbkZyYW1lVXBkYXRlID0gZXhwb3J0cy5jYW5jZWxPbkZyYW1lVXBkYXRlID0gZnJhbWVVcGRhdGUuY2FuY2VsO1xudmFyIGNhbmNlbE9uRnJhbWVSZW5kZXIgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVSZW5kZXIgPSBmcmFtZVJlbmRlci5jYW5jZWw7XG52YXIgY2FuY2VsT25GcmFtZUVuZCA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZUVuZCA9IGZyYW1lRW5kLmNhbmNlbDtcblxudmFyIHRpbWVTaW5jZUxhc3RGcmFtZSA9IGV4cG9ydHMudGltZVNpbmNlTGFzdEZyYW1lID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZWxhcHNlZDtcbn07XG52YXIgY3VycmVudEZyYW1lVGltZXN0YW1wID0gZXhwb3J0cy5jdXJyZW50RnJhbWVUaW1lc3RhbXAgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBjdXJyZW50RnJhbWVzdGFtcDtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OW1jbUZ0WlhONWJtTXZhVzVrWlhndWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3UVVGQlFUczdPenRCUVVOQk96czdPMEZCUTBFN096czdRVUZGUVN4SlFVRkpMSE5DUVVGelFpeExRVUYwUWpzN096czdPMEZCVFVvc1NVRkJUU3hqUVVGakxFVkJRV1E3T3pzN096dEJRVTFPTEVsQlFVa3NiMEpCUVc5Q0xIbENRVUZ3UWpzN1FVRkZTaXhKUVVGSkxGVkJRVlVzUTBGQlZqczdPenM3T3p0QlFVOUtMRWxCUVVrc1YwRkJWeXhEUVVGWU96dEJRVVZLTEZOQlFWTXNaVUZCVkN4SFFVRXlRanRCUVVONlFpeE5RVUZKTEVOQlFVTXNiVUpCUVVRc1JVRkJjMEk3UVVGRGVFSXNNRUpCUVhOQ0xFbEJRWFJDTEVOQlJIZENPMEZCUlhoQ0xDdENRVUZaTEZsQlFWb3NSVUZHZDBJN1IwRkJNVUk3UTBGRVJqczdRVUZQUVN4SlFVRk5MR0ZCUVdFc1owTkJRV2xDTEdWQlFXcENMRU5CUVdJN1FVRkRUaXhKUVVGTkxHTkJRV01zWjBOQlFXbENMR1ZCUVdwQ0xFTkJRV1E3UVVGRFRpeEpRVUZOTEdOQlFXTXNaME5CUVdsQ0xHVkJRV3BDTEVOQlFXUTdRVUZEVGl4SlFVRk5MRmRCUVZjc1owTkJRV2xDTEdWQlFXcENMRU5CUVZnN08wRkJSVTRzVTBGQlV5eFpRVUZVTEVOQlFYTkNMRlZCUVhSQ0xFVkJRV3RETzBGQlEyaERMSGRDUVVGelFpeExRVUYwUWl4RFFVUm5RenRCUVVWb1F5eFpRVUZWTEV0QlFVc3NSMEZCVEN4RFFVRlRMRXRCUVVzc1IwRkJUQ3hEUVVGVExHRkJRV0VzYVVKQlFXSXNSVUZCWjBNc1YwRkJla01zUTBGQlZDeEZRVUZuUlN4RFFVRm9SU3hKUVVGeFJTeFJRVUZ5UlN4RFFVWnpRanRCUVVkb1F5eHpRa0ZCYjBJc1ZVRkJjRUlzUTBGSVowTTdPMEZCUzJoRExHRkJRVmNzVDBGQldDeEhRVXhuUXp0QlFVMW9ReXhqUVVGWkxFOUJRVm9zUjBGT1owTTdRVUZQYUVNc1kwRkJXU3hQUVVGYUxFZEJVR2RETzBGQlVXaERMRmRCUVZNc1QwRkJWQ3hIUVZKblF6dERRVUZzUXpzN1FVRlhUeXhKUVVGTkxITkRRVUZsTEZkQlFWY3NVVUZCV0R0QlFVTnlRaXhKUVVGTkxIZERRVUZuUWl4WlFVRlpMRkZCUVZvN1FVRkRkRUlzU1VGQlRTeDNRMEZCWjBJc1dVRkJXU3hSUVVGYU8wRkJRM1JDTEVsQlFVMHNhME5CUVdFc1UwRkJVeXhSUVVGVU8wRkJRMjVDTEVsQlFVMHNhMFJCUVhGQ0xGZEJRVmNzVFVGQldEdEJRVU16UWl4SlFVRk5MRzlFUVVGelFpeFpRVUZaTEUxQlFWbzdRVUZETlVJc1NVRkJUU3h2UkVGQmMwSXNXVUZCV1N4TlFVRmFPMEZCUXpWQ0xFbEJRVTBzT0VOQlFXMUNMRk5CUVZNc1RVRkJWRHM3UVVGRmVrSXNTVUZCVFN4clJFRkJjVUk3VTBGQlRUdERRVUZPTzBGQlF6TkNMRWxCUVUwc2QwUkJRWGRDTzFOQlFVMDdRMEZCVGlJc0ltWnBiR1VpT2lKcGJtUmxlQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnYjI1T1pYaDBSbkpoYldVZ1puSnZiU0FuTGk5dmJpMXVaWGgwTFdaeVlXMWxKenRjYm1sdGNHOXlkQ0JqY21WaGRHVlNaVzVrWlhKVGRHVndJR1p5YjIwZ0p5NHZZM0psWVhSbExYSmxibVJsY2kxemRHVndKenRjYm1sdGNHOXlkQ0I3SUdOMWNuSmxiblJVYVcxbElIMGdabkp2YlNBbkxpNHZhVzVqTDNWMGFXeHpKenRjYmx4dWJHVjBJSGRwYkd4U1pXNWtaWEpPWlhoMFJuSmhiV1VnUFNCbVlXeHpaVHRjYmx4dUx5b3FYRzRnS2lCTllYaHBiWFZ0SUhCbGNtMXBkSFJsWkNCdGN5QnphVzVqWlNCc1lYTjBJR1p5WVcxbFhHNGdLaUJBZEhsd1pTQjdUblZ0WW1WeWZWeHVJQ292WEc1amIyNXpkQ0JOUVZoZlJVeEJVRk5GUkNBOUlESXdPMXh1WEc0dktpcGNiaUFxSUVOMWNuSmxiblFnWm5KaGJXVnpkR0Z0Y0Z4dUlDb2dRSFI1Y0dVZ2UwNTFiV0psY24xY2JpQXFMMXh1YkdWMElHTjFjbkpsYm5SR2NtRnRaWE4wWVcxd0lEMGdZM1Z5Y21WdWRGUnBiV1VvS1R0Y2JseHViR1YwSUdWc1lYQnpaV1FnUFNBd08xeHVYRzR2S2lwY2JpQXFJRVpoWTNSdmNpQjBieUJ0ZFd4MGFYQnNlU0JnWld4aGNITmxaR0FnWW5rZ0xTQmNiaUFxSURBdU5TQjNiM1ZzWkNCaVpTQnpiRzkzSUcxdmRHbHZiaXdnTWlCM2IzVnNaQ0JpWlNCbVlYTjBYRzRnS2lCQWRIbHdaU0I3VG5WdFltVnlmVnh1SUNvdlhHNXNaWFFnWkdsc1lYUnBiMjRnUFNBeE8xeHVYRzVtZFc1amRHbHZiaUJ6ZEdGeWRGSmxibVJsY2t4dmIzQW9LU0I3WEc0Z0lHbG1JQ2doZDJsc2JGSmxibVJsY2s1bGVIUkdjbUZ0WlNrZ2UxeHVJQ0FnSUhkcGJHeFNaVzVrWlhKT1pYaDBSbkpoYldVZ1BTQjBjblZsTzF4dUlDQWdJRzl1VG1WNGRFWnlZVzFsS0hCeWIyTmxjM05HY21GdFpTazdYRzRnSUgxY2JuMWNibHh1WTI5dWMzUWdabkpoYldWVGRHRnlkQ0E5SUdOeVpXRjBaVkpsYm1SbGNsTjBaWEFvYzNSaGNuUlNaVzVrWlhKTWIyOXdLVHRjYm1OdmJuTjBJR1p5WVcxbFZYQmtZWFJsSUQwZ1kzSmxZWFJsVW1WdVpHVnlVM1JsY0NoemRHRnlkRkpsYm1SbGNreHZiM0FwTzF4dVkyOXVjM1FnWm5KaGJXVlNaVzVrWlhJZ1BTQmpjbVZoZEdWU1pXNWtaWEpUZEdWd0tITjBZWEowVW1WdVpHVnlURzl2Y0NrN1hHNWpiMjV6ZENCbWNtRnRaVVZ1WkNBOUlHTnlaV0YwWlZKbGJtUmxjbE4wWlhBb2MzUmhjblJTWlc1a1pYSk1iMjl3S1R0Y2JseHVablZ1WTNScGIyNGdjSEp2WTJWemMwWnlZVzFsS0daeVlXMWxjM1JoYlhBcElIdGNiaUFnZDJsc2JGSmxibVJsY2s1bGVIUkdjbUZ0WlNBOUlHWmhiSE5sTzF4dUlDQmxiR0Z3YzJWa0lEMGdUV0YwYUM1dFlYZ29UV0YwYUM1dGFXNG9abkpoYldWemRHRnRjQ0F0SUdOMWNuSmxiblJHY21GdFpYTjBZVzF3TENCTlFWaGZSVXhCVUZORlJDa3NJREVwSUNvZ1pHbHNZWFJwYjI0N1hHNGdJR04xY25KbGJuUkdjbUZ0WlhOMFlXMXdJRDBnWm5KaGJXVnpkR0Z0Y0R0Y2JseHVJQ0JtY21GdFpWTjBZWEowTG5CeWIyTmxjM01vS1R0Y2JpQWdabkpoYldWVmNHUmhkR1V1Y0hKdlkyVnpjeWdwTzF4dUlDQm1jbUZ0WlZKbGJtUmxjaTV3Y205alpYTnpLQ2s3WEc0Z0lHWnlZVzFsUlc1a0xuQnliMk5sYzNNb0tUdGNibjFjYmx4dVpYaHdiM0owSUdOdmJuTjBJRzl1Um5KaGJXVlRkR0Z5ZENBOUlHWnlZVzFsVTNSaGNuUXVjMk5vWldSMWJHVTdYRzVsZUhCdmNuUWdZMjl1YzNRZ2IyNUdjbUZ0WlZWd1pHRjBaU0E5SUdaeVlXMWxWWEJrWVhSbExuTmphR1ZrZFd4bE8xeHVaWGh3YjNKMElHTnZibk4wSUc5dVJuSmhiV1ZTWlc1a1pYSWdQU0JtY21GdFpWSmxibVJsY2k1elkyaGxaSFZzWlR0Y2JtVjRjRzl5ZENCamIyNXpkQ0J2YmtaeVlXMWxSVzVrSUQwZ1puSmhiV1ZGYm1RdWMyTm9aV1IxYkdVN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnWTJGdVkyVnNUMjVHY21GdFpWTjBZWEowSUQwZ1puSmhiV1ZUZEdGeWRDNWpZVzVqWld3N1hHNWxlSEJ2Y25RZ1kyOXVjM1FnWTJGdVkyVnNUMjVHY21GdFpWVndaR0YwWlNBOUlHWnlZVzFsVlhCa1lYUmxMbU5oYm1ObGJEdGNibVY0Y0c5eWRDQmpiMjV6ZENCallXNWpaV3hQYmtaeVlXMWxVbVZ1WkdWeUlEMGdabkpoYldWU1pXNWtaWEl1WTJGdVkyVnNPMXh1Wlhod2IzSjBJR052Ym5OMElHTmhibU5sYkU5dVJuSmhiV1ZGYm1RZ1BTQm1jbUZ0WlVWdVpDNWpZVzVqWld3N1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCMGFXMWxVMmx1WTJWTVlYTjBSbkpoYldVZ1BTQW9LU0E5UGlCbGJHRndjMlZrTzF4dVpYaHdiM0owSUdOdmJuTjBJR04xY25KbGJuUkdjbUZ0WlZScGJXVnpkR0Z0Y0NBOUlDZ3BJRDArSUdOMWNuSmxiblJHY21GdFpYTjBZVzF3TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2ZyYW1lc3luYy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgVmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFZhbHVlKGluaXRpYWxWYWx1ZSkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBWYWx1ZSk7XG5cbiAgICB0aGlzLmN1cnJlbnQgPSBpbml0aWFsVmFsdWU7XG4gICAgdGhpcy5hY3Rpb24gPSBudWxsO1xuICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gIH1cblxuICBWYWx1ZS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKG5ld1ZhbHVlKSB7XG4gICAgdGhpcy5jdXJyZW50ID0gbmV3VmFsdWU7XG5cbiAgICB2YXIgbnVtTGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnMubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtTGlzdGVuZXJzOyBpKyspIHtcbiAgICAgIHRoaXMubGlzdGVuZXJzW2ldKG5ld1ZhbHVlLCB0aGlzKTtcbiAgICB9XG4gIH07XG5cbiAgVmFsdWUucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50O1xuICB9O1xuXG4gIFZhbHVlLnByb3RvdHlwZS5nZXRWZWxvY2l0eSA9IGZ1bmN0aW9uIGdldFZlbG9jaXR5KCkge1xuICAgIHJldHVybiB0aGlzLmFjdGlvbiA/IHRoaXMuYWN0aW9uLmdldFZlbG9jaXR5IDogMDtcbiAgfTtcblxuICBWYWx1ZS5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgaWYgKHRoaXMuYWN0aW9uKSB7XG4gICAgICB0aGlzLmFjdGlvbi5zdG9wKCk7XG4gICAgICB0aGlzLmFjdGlvbiA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIFZhbHVlLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uIGFkZExpc3RlbmVyKGNhbGxiYWNrKSB7XG4gICAgdmFyIGxpc3RlbmVySW5kZXggPSB0aGlzLmxpc3RlbmVycy5pbmRleE9mKGNhbGxiYWNrKTtcbiAgICBpZiAobGlzdGVuZXJJbmRleCAhPT0gLTEpIHtcbiAgICAgIHRoaXMubGlzdGVuZXJzLnB1c2goY2FsbGJhY2spO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBWYWx1ZS5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcihjYWxsYmFjaykge1xuICAgIHZhciBsaXN0ZW5lckluZGV4ID0gdGhpcy5saXN0ZW5lcnMuaW5kZXhPZihjYWxsYmFjayk7XG4gICAgaWYgKGxpc3RlbmVySW5kZXggPiAtMSkge1xuICAgICAgdGhpcy5saXN0ZW5lcnMuc3BsaWNlKGxpc3RlbmVySW5kZXgsIDEpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICByZXR1cm4gVmFsdWU7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChpbml0aWFsVmFsdWUpIHtcbiAgcmV0dXJuIG5ldyBWYWx1ZShpbml0aWFsVmFsdWUpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzlwYm1SbGVDNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN1NVRkJUVHRCUVVOS0xGZEJSRWtzUzBGRFNpeERRVUZaTEZsQlFWb3NSVUZCTUVJN01FSkJSSFJDTEU5QlEzTkNPenRCUVVONFFpeFRRVUZMTEU5QlFVd3NSMEZCWlN4WlFVRm1MRU5CUkhkQ08wRkJSWGhDTEZOQlFVc3NUVUZCVEN4SFFVRmpMRWxCUVdRc1EwRkdkMEk3UVVGSGVFSXNVMEZCU3l4VFFVRk1MRWRCUVdsQ0xFVkJRV3BDTEVOQlNIZENPMGRCUVRGQ096dEJRVVJKTEd0Q1FVOUtMSGxDUVVGUExGVkJRVlU3UVVGRFppeFRRVUZMTEU5QlFVd3NSMEZCWlN4UlFVRm1MRU5CUkdVN08wRkJSMllzVVVGQlRTeGxRVUZsTEV0QlFVc3NVMEZCVEN4RFFVRmxMRTFCUVdZc1EwRklUanRCUVVsbUxGTkJRVXNzU1VGQlNTeEpRVUZKTEVOQlFVb3NSVUZCVHl4SlFVRkpMRmxCUVVvc1JVRkJhMElzUjBGQmJFTXNSVUZCZFVNN1FVRkRja01zVjBGQlN5eFRRVUZNTEVOQlFXVXNRMEZCWml4RlFVRnJRaXhSUVVGc1FpeEZRVUUwUWl4SlFVRTFRaXhGUVVSeFF6dExRVUYyUXpzN08wRkJXRVVzYTBKQlowSktMSEZDUVVGTk8wRkJRMG9zVjBGQlR5eExRVUZMTEU5QlFVd3NRMEZFU0RzN08wRkJhRUpHTEd0Q1FXOUNTaXh4UTBGQll6dEJRVU5hTEZkQlFVOHNTVUZCUXl4RFFVRkxMRTFCUVV3c1IwRkJaU3hMUVVGTExFMUJRVXdzUTBGQldTeFhRVUZhTEVkQlFUQkNMRU5CUVRGRExFTkJSRXM3T3p0QlFYQkNWaXhyUWtGM1Frb3NkVUpCUVU4N1FVRkRUQ3hSUVVGSkxFdEJRVXNzVFVGQlRDeEZRVUZoTzBGQlEyWXNWMEZCU3l4TlFVRk1MRU5CUVZrc1NVRkJXaXhIUVVSbE8wRkJSV1lzVjBGQlN5eE5RVUZNTEVkQlFXTXNTVUZCWkN4RFFVWmxPMHRCUVdwQ096czdRVUY2UWtVc2EwSkJLMEpLTEcxRFFVRlpMRlZCUVZVN1FVRkRjRUlzVVVGQlRTeG5Ra0ZCWjBJc1MwRkJTeXhUUVVGTUxFTkJRV1VzVDBGQlppeERRVUYxUWl4UlFVRjJRaXhEUVVGb1FpeERRVVJqTzBGQlJYQkNMRkZCUVVrc2EwSkJRV3RDTEVOQlFVTXNRMEZCUkN4RlFVRkpPMEZCUTNoQ0xGZEJRVXNzVTBGQlRDeERRVUZsTEVsQlFXWXNRMEZCYjBJc1VVRkJjRUlzUlVGRWQwSTdTMEZCTVVJN1FVRkhRU3hYUVVGUExFbEJRVkFzUTBGTWIwSTdPenRCUVM5Q2JFSXNhMEpCZFVOS0xIbERRVUZsTEZWQlFWVTdRVUZEZGtJc1VVRkJUU3huUWtGQlowSXNTMEZCU3l4VFFVRk1MRU5CUVdVc1QwRkJaaXhEUVVGMVFpeFJRVUYyUWl4RFFVRm9RaXhEUVVScFFqdEJRVVYyUWl4UlFVRkpMR2RDUVVGblFpeERRVUZETEVOQlFVUXNSVUZCU1R0QlFVTjBRaXhYUVVGTExGTkJRVXdzUTBGQlpTeE5RVUZtTEVOQlFYTkNMR0ZCUVhSQ0xFVkJRWEZETEVOQlFYSkRMRVZCUkhOQ08wdEJRWGhDTzBGQlIwRXNWMEZCVHl4SlFVRlFMRU5CVEhWQ096czdVMEYyUTNKQ096czdhMEpCWjBSVExGVkJRVU1zV1VGQlJEdFRRVUZyUWl4SlFVRkpMRXRCUVVvc1EwRkJWU3haUVVGV08wTkJRV3hDSWl3aVptbHNaU0k2SW1sdVpHVjRMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwTDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1Oc1lYTnpJRlpoYkhWbElIdGNiaUFnWTI5dWMzUnlkV04wYjNJb2FXNXBkR2xoYkZaaGJIVmxLU0I3WEc0Z0lDQWdkR2hwY3k1amRYSnlaVzUwSUQwZ2FXNXBkR2xoYkZaaGJIVmxPMXh1SUNBZ0lIUm9hWE11WVdOMGFXOXVJRDBnYm5Wc2JEdGNiaUFnSUNCMGFHbHpMbXhwYzNSbGJtVnljeUE5SUZ0ZE8xeHVJQ0I5WEc1Y2JpQWdkWEJrWVhSbEtHNWxkMVpoYkhWbEtTQjdYRzRnSUNBZ2RHaHBjeTVqZFhKeVpXNTBJRDBnYm1WM1ZtRnNkV1U3WEc1Y2JpQWdJQ0JqYjI1emRDQnVkVzFNYVhOMFpXNWxjbk1nUFNCMGFHbHpMbXhwYzNSbGJtVnljeTVzWlc1bmRHZzdYRzRnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQnVkVzFNYVhOMFpXNWxjbk03SUdrckt5a2dlMXh1SUNBZ0lDQWdkR2hwY3k1c2FYTjBaVzVsY25OYmFWMG9ibVYzVm1Gc2RXVXNJSFJvYVhNcE8xeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lHZGxkQ2dwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3k1amRYSnlaVzUwTzF4dUlDQjlYRzVjYmlBZ1oyVjBWbVZzYjJOcGRIa29LU0I3WEc0Z0lDQWdjbVYwZFhKdUlDaDBhR2x6TG1GamRHbHZiaWtnUHlCMGFHbHpMbUZqZEdsdmJpNW5aWFJXWld4dlkybDBlU0E2SURBN1hHNGdJSDFjYmx4dUlDQnpkRzl3S0NrZ2UxeHVJQ0FnSUdsbUlDaDBhR2x6TG1GamRHbHZiaWtnZTF4dUlDQWdJQ0FnZEdocGN5NWhZM1JwYjI0dWMzUnZjQ2dwTzF4dUlDQWdJQ0FnZEdocGN5NWhZM1JwYjI0Z1BTQnVkV3hzTzF4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUdGa1pFeHBjM1JsYm1WeUtHTmhiR3hpWVdOcktTQjdYRzRnSUNBZ1kyOXVjM1FnYkdsemRHVnVaWEpKYm1SbGVDQTlJSFJvYVhNdWJHbHpkR1Z1WlhKekxtbHVaR1Y0VDJZb1kyRnNiR0poWTJzcE8xeHVJQ0FnSUdsbUlDaHNhWE4wWlc1bGNrbHVaR1Y0SUNFOVBTQXRNU2tnZTF4dUlDQWdJQ0FnZEdocGN5NXNhWE4wWlc1bGNuTXVjSFZ6YUNoallXeHNZbUZqYXlrN1hHNGdJQ0FnZlZ4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQjlYRzVjYmlBZ2NtVnRiM1psVEdsemRHVnVaWElvWTJGc2JHSmhZMnNwSUh0Y2JpQWdJQ0JqYjI1emRDQnNhWE4wWlc1bGNrbHVaR1Y0SUQwZ2RHaHBjeTVzYVhOMFpXNWxjbk11YVc1a1pYaFBaaWhqWVd4c1ltRmpheWs3WEc0Z0lDQWdhV1lnS0d4cGMzUmxibVZ5U1c1a1pYZ2dQaUF0TVNrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTVzYVhOMFpXNWxjbk11YzNCc2FXTmxLR3hwYzNSbGJtVnlTVzVrWlhnc0lERXBPMXh1SUNBZ0lIMWNiaUFnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnZlZ4dWZWeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQW9hVzVwZEdsaGJGWmhiSFZsS1NBOVBpQnVaWGNnVm1Gc2RXVW9hVzVwZEdsaGJGWmhiSFZsS1R0Y2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9mcmFtZXN5bmMgPSByZXF1aXJlKCcuLi9mcmFtZXN5bmMnKTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIEFjdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQWN0aW9uKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFjdGlvbik7XG5cbiAgICB0aGlzLmN1cnJlbnQgPSAwO1xuICAgIHRoaXMudmVsb2NpdHkgPSAwO1xuICAgIHRoaXMudXBkYXRlID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKTtcblxuICAgIHRoaXMucHJvcHMgPSBfZXh0ZW5kcyh7fSwgdGhpcy5jb25zdHJ1Y3Rvci5kZWZhdWx0UHJvcHMsIHByb3BzKTtcbiAgfVxuXG4gIEFjdGlvbi5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAoMCwgX2ZyYW1lc3luYy5vbkZyYW1lVXBkYXRlKSh0aGlzLnVwZGF0ZSk7XG5cbiAgICBpZiAodGhpcy5vblN0YXJ0KSB7XG4gICAgICB0aGlzLm9uU3RhcnQoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5vblN0YXJ0KSB7XG4gICAgICB0aGlzLnByb3BzLm9uU3RhcnQodGhpcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gc3RvcCgpIHtcbiAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgKDAsIF9mcmFtZXN5bmMuY2FuY2VsT25GcmFtZVVwZGF0ZSkodGhpcy51cGRhdGUpO1xuXG4gICAgaWYgKHRoaXMub25TdG9wKSB7XG4gICAgICB0aGlzLm9uU3RvcCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLm9uU3RvcCkge1xuICAgICAgdGhpcy5wcm9wcy5vblN0b3AodGhpcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5jb21wbGV0ZSA9IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgIGlmICh0aGlzLm9uQ29tcGxldGUpIHtcbiAgICAgIHRoaXMub25Db21wbGV0ZSgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLm9uQ29tcGxldGUpIHtcbiAgICAgIHRoaXMucHJvcHMub25Db21wbGV0ZSh0aGlzKTtcbiAgICB9XG5cbiAgICB0aGlzLnN0b3AoKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIHZhciBjdXJyZW50ID0gdGhpcy5jdXJyZW50O1xuICAgIHZhciB2ZWxvY2l0eSA9IHRoaXMudmVsb2NpdHk7XG5cbiAgICBpZiAodGhpcy5vblVwZGF0ZSkge1xuICAgICAgdGhpcy5vblVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHRoaXMudmVsb2NpdHkgPSAoMCwgX2NhbGMuc3BlZWRQZXJTZWNvbmQpKHRoaXMuY3VycmVudCAtIGN1cnJlbnQsICgwLCBfZnJhbWVzeW5jLnRpbWVTaW5jZUxhc3RGcmFtZSkoKSk7XG5cbiAgICBpZiAodGhpcy52ZWxvY2l0eSkge1xuICAgICAgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgICAgdGhpcy52YWx1ZS5zZXQodGhpcy5jdXJyZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5vblVwZGF0ZSkge1xuICAgICAgdGhpcy5wcm9wcy5vblVwZGF0ZSh0aGlzKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc0FjdGl2ZSkge1xuICAgICAgKDAsIF9mcmFtZXN5bmMub25GcmFtZVVwZGF0ZSkodGhpcy51cGRhdGUpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gc2V0KG5ld1ZhbHVlKSB7XG4gICAgdGhpcy5jdXJyZW50ID0gbmV3VmFsdWU7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudDtcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLmdldFZlbG9jaXR5ID0gZnVuY3Rpb24gZ2V0VmVsb2NpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVsb2NpdHk7XG4gIH07XG5cbiAgcmV0dXJuIEFjdGlvbjtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQWN0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMmx1WkdWNExtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3p0QlFVRkJPenRCUVVOQk96czdPMGxCUlUwN1FVRkRTaXhYUVVSSkxFMUJRMG9zUTBGQldTeExRVUZhTEVWQlFXMUNPekJDUVVSbUxGRkJRMlU3TzBGQlEycENMRk5CUVVzc1QwRkJUQ3hIUVVGbExFTkJRV1lzUTBGRWFVSTdRVUZGYWtJc1UwRkJTeXhSUVVGTUxFZEJRV2RDTEVOQlFXaENMRU5CUm1sQ08wRkJSMnBDTEZOQlFVc3NUVUZCVEN4SFFVRmpMRXRCUVVzc1RVRkJUQ3hEUVVGWkxFbEJRVm9zUTBGQmFVSXNTVUZCYWtJc1EwRkJaQ3hEUVVocFFqczdRVUZMYWtJc1UwRkJTeXhMUVVGTUxHZENRVU5MTEV0QlFVc3NWMEZCVEN4RFFVRnBRaXhaUVVGcVFpeEZRVU5CTEUxQlJrd3NRMEZNYVVJN1IwRkJia0k3TzBGQlJFa3NiVUpCV1Vvc2VVSkJRVkU3UVVGRFRpeFRRVUZMTEZGQlFVd3NSMEZCWjBJc1NVRkJhRUlzUTBGRVRUdEJRVVZPTEd0RFFVRmpMRXRCUVVzc1RVRkJUQ3hEUVVGa0xFTkJSazA3TzBGQlNVNHNVVUZCU1N4TFFVRkxMRTlCUVV3c1JVRkJZenRCUVVOb1FpeFhRVUZMTEU5QlFVd3NSMEZFWjBJN1MwRkJiRUk3TzBGQlNVRXNVVUZCU1N4TFFVRkxMRXRCUVV3c1EwRkJWeXhQUVVGWUxFVkJRVzlDTzBGQlEzUkNMRmRCUVVzc1MwRkJUQ3hEUVVGWExFOUJRVmdzUTBGQmJVSXNTVUZCYmtJc1JVRkVjMEk3UzBGQmVFSTdPMEZCU1VFc1YwRkJUeXhKUVVGUUxFTkJXazA3T3p0QlFWcEtMRzFDUVRKQ1NpeDFRa0ZCVHp0QlFVTk1MRk5CUVVzc1VVRkJUQ3hIUVVGblFpeExRVUZvUWl4RFFVUkxPMEZCUlV3c2QwTkJRVzlDTEV0QlFVc3NUVUZCVEN4RFFVRndRaXhEUVVaTE96dEJRVWxNTEZGQlFVa3NTMEZCU3l4TlFVRk1MRVZCUVdFN1FVRkRaaXhYUVVGTExFMUJRVXdzUjBGRVpUdExRVUZxUWpzN1FVRkpRU3hSUVVGSkxFdEJRVXNzUzBGQlRDeERRVUZYTEUxQlFWZ3NSVUZCYlVJN1FVRkRja0lzVjBGQlN5eExRVUZNTEVOQlFWY3NUVUZCV0N4RFFVRnJRaXhKUVVGc1FpeEZRVVJ4UWp0TFFVRjJRanM3UVVGSlFTeFhRVUZQTEVsQlFWQXNRMEZhU3pzN08wRkJNMEpJTEcxQ1FUQkRTaXdyUWtGQlZ6dEJRVU5VTEZGQlFVa3NTMEZCU3l4VlFVRk1MRVZCUVdsQ08wRkJRMjVDTEZkQlFVc3NWVUZCVEN4SFFVUnRRanRMUVVGeVFqczdRVUZKUVN4UlFVRkpMRXRCUVVzc1MwRkJUQ3hEUVVGWExGVkJRVmdzUlVGQmRVSTdRVUZEZWtJc1YwRkJTeXhMUVVGTUxFTkJRVmNzVlVGQldDeERRVUZ6UWl4SlFVRjBRaXhGUVVSNVFqdExRVUV6UWpzN1FVRkpRU3hUUVVGTExFbEJRVXdzUjBGVVV6czdRVUZYVkN4WFFVRlBMRWxCUVZBc1EwRllVenM3TzBGQk1VTlFMRzFDUVhkRVNpd3lRa0ZCVXp0QlFVTlFMRkZCUVUwc1ZVRkJWU3hMUVVGTExFOUJRVXdzUTBGRVZEdEJRVVZRTEZGQlFVMHNWMEZCVnl4TFFVRkxMRkZCUVV3c1EwRkdWanM3UVVGSlVDeFJRVUZKTEV0QlFVc3NVVUZCVEN4RlFVRmxPMEZCUTJwQ0xGZEJRVXNzVVVGQlRDeEhRVVJwUWp0TFFVRnVRanM3UVVGSlFTeFRRVUZMTEZGQlFVd3NSMEZCWjBJc01FSkJRV1VzUzBGQlN5eFBRVUZNTEVkQlFXVXNUMEZCWml4RlFVRjNRaXh2UTBGQmRrTXNRMEZCYUVJc1EwRlNUenM3UVVGVlVDeFJRVUZKTEV0QlFVc3NVVUZCVEN4RlFVRmxPMEZCUTJwQ0xGVkJRVWtzUzBGQlN5eExRVUZNTEVWQlFWazdRVUZEWkN4aFFVRkxMRXRCUVV3c1EwRkJWeXhIUVVGWUxFTkJRV1VzUzBGQlN5eFBRVUZNTEVOQlFXWXNRMEZFWXp0UFFVRm9RanRMUVVSR096dEJRVTFCTEZGQlFVa3NTMEZCU3l4TFFVRk1MRU5CUVZjc1VVRkJXQ3hGUVVGeFFqdEJRVU4yUWl4WFFVRkxMRXRCUVV3c1EwRkJWeXhSUVVGWUxFTkJRVzlDTEVsQlFYQkNMRVZCUkhWQ08wdEJRWHBDT3p0QlFVbEJMRkZCUVVrc1MwRkJTeXhSUVVGTUxFVkJRV1U3UVVGRGFrSXNiME5CUVdNc1MwRkJTeXhOUVVGTUxFTkJRV1FzUTBGRWFVSTdTMEZCYmtJN08wRkJTVUVzVjBGQlR5eEpRVUZRTEVOQmVFSlBPenM3UVVGNFJFd3NiVUpCYlVaS0xHMUNRVUZKTEZWQlFWVTdRVUZEV2l4VFFVRkxMRTlCUVV3c1IwRkJaU3hSUVVGbUxFTkJSRms3T3p0QlFXNUdWaXh0UWtGMVJrb3NjVUpCUVUwN1FVRkRTaXhYUVVGUExFdEJRVXNzVDBGQlRDeERRVVJJT3pzN1FVRjJSa1lzYlVKQk1rWktMSEZEUVVGak8wRkJRMW9zVjBGQlR5eExRVUZMTEZGQlFVd3NRMEZFU3pzN08xTkJNMFpXT3pzN2EwSkJaMGRUSWl3aVptbHNaU0k2SW1sdVpHVjRMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwTDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3SUc5dVJuSmhiV1ZWY0dSaGRHVXNJR05oYm1ObGJFOXVSbkpoYldWVmNHUmhkR1VzSUhScGJXVlRhVzVqWlV4aGMzUkdjbUZ0WlNCOUlHWnliMjBnSnk0dUwyWnlZVzFsYzNsdVl5YzdYRzVwYlhCdmNuUWdleUJ6Y0dWbFpGQmxjbE5sWTI5dVpDQjlJR1p5YjIwZ0p5NHVMMmx1WXk5allXeGpKenRjYmx4dVkyeGhjM01nUVdOMGFXOXVJSHRjYmlBZ1kyOXVjM1J5ZFdOMGIzSW9jSEp2Y0hNcElIdGNiaUFnSUNCMGFHbHpMbU4xY25KbGJuUWdQU0F3TzF4dUlDQWdJSFJvYVhNdWRtVnNiMk5wZEhrZ1BTQXdPMXh1SUNBZ0lIUm9hWE11ZFhCa1lYUmxJRDBnZEdocGN5NTFjR1JoZEdVdVltbHVaQ2gwYUdsektUdGNibHh1SUNBZ0lIUm9hWE11Y0hKdmNITWdQU0I3WEc0Z0lDQWdJQ0F1TGk1MGFHbHpMbU52Ym5OMGNuVmpkRzl5TG1SbFptRjFiSFJRY205d2N5eGNiaUFnSUNBZ0lDNHVMbkJ5YjNCelhHNGdJQ0FnZlR0Y2JpQWdmVnh1WEc0Z0lITjBZWEowS0NrZ2UxeHVJQ0FnSUhSb2FYTXVhWE5CWTNScGRtVWdQU0IwY25WbE8xeHVJQ0FnSUc5dVJuSmhiV1ZWY0dSaGRHVW9kR2hwY3k1MWNHUmhkR1VwTzF4dVhHNGdJQ0FnYVdZZ0tIUm9hWE11YjI1VGRHRnlkQ2tnZTF4dUlDQWdJQ0FnZEdocGN5NXZibE4wWVhKMEtDazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2FXWWdLSFJvYVhNdWNISnZjSE11YjI1VGRHRnlkQ2tnZTF4dUlDQWdJQ0FnZEdocGN5NXdjbTl3Y3k1dmJsTjBZWEowS0hSb2FYTXBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNCOVhHNWNiaUFnYzNSdmNDZ3BJSHRjYmlBZ0lDQjBhR2x6TG1selFXTjBhWFpsSUQwZ1ptRnNjMlU3WEc0Z0lDQWdZMkZ1WTJWc1QyNUdjbUZ0WlZWd1pHRjBaU2gwYUdsekxuVndaR0YwWlNrN1hHNWNiaUFnSUNCcFppQW9kR2hwY3k1dmJsTjBiM0FwSUh0Y2JpQWdJQ0FnSUhSb2FYTXViMjVUZEc5d0tDazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2FXWWdLSFJvYVhNdWNISnZjSE11YjI1VGRHOXdLU0I3WEc0Z0lDQWdJQ0IwYUdsekxuQnliM0J6TG05dVUzUnZjQ2gwYUdsektUdGNiaUFnSUNCOVhHNWNiaUFnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnZlZ4dVhHNGdJR052YlhCc1pYUmxLQ2tnZTF4dUlDQWdJR2xtSUNoMGFHbHpMbTl1UTI5dGNHeGxkR1VwSUh0Y2JpQWdJQ0FnSUhSb2FYTXViMjVEYjIxd2JHVjBaU2dwTzF4dUlDQWdJSDFjYmx4dUlDQWdJR2xtSUNoMGFHbHpMbkJ5YjNCekxtOXVRMjl0Y0d4bGRHVXBJSHRjYmlBZ0lDQWdJSFJvYVhNdWNISnZjSE11YjI1RGIyMXdiR1YwWlNoMGFHbHpLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQjBhR2x6TG5OMGIzQW9LVHRjYmx4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQjlYRzVjYmlBZ2RYQmtZWFJsS0NrZ2UxeHVJQ0FnSUdOdmJuTjBJR04xY25KbGJuUWdQU0IwYUdsekxtTjFjbkpsYm5RN1hHNGdJQ0FnWTI5dWMzUWdkbVZzYjJOcGRIa2dQU0IwYUdsekxuWmxiRzlqYVhSNU8xeHVYRzRnSUNBZ2FXWWdLSFJvYVhNdWIyNVZjR1JoZEdVcElIdGNiaUFnSUNBZ0lIUm9hWE11YjI1VmNHUmhkR1VvS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0IwYUdsekxuWmxiRzlqYVhSNUlEMGdjM0JsWldSUVpYSlRaV052Ym1Rb2RHaHBjeTVqZFhKeVpXNTBJQzBnWTNWeWNtVnVkQ3dnZEdsdFpWTnBibU5sVEdGemRFWnlZVzFsS0NrcE8xeHVYRzRnSUNBZ2FXWWdLSFJvYVhNdWRtVnNiMk5wZEhrcElIdGNiaUFnSUNBZ0lHbG1JQ2gwYUdsekxuWmhiSFZsS1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11ZG1Gc2RXVXVjMlYwS0hSb2FYTXVZM1Z5Y21WdWRDazdYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2FXWWdLSFJvYVhNdWNISnZjSE11YjI1VmNHUmhkR1VwSUh0Y2JpQWdJQ0FnSUhSb2FYTXVjSEp2Y0hNdWIyNVZjR1JoZEdVb2RHaHBjeWs3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdhV1lnS0hSb2FYTXVhWE5CWTNScGRtVXBJSHRjYmlBZ0lDQWdJRzl1Um5KaGJXVlZjR1JoZEdVb2RHaHBjeTUxY0dSaGRHVXBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNCOVhHNWNiaUFnYzJWMEtHNWxkMVpoYkhWbEtTQjdYRzRnSUNBZ2RHaHBjeTVqZFhKeVpXNTBJRDBnYm1WM1ZtRnNkV1U3WEc0Z0lIMWNibHh1SUNCblpYUW9LU0I3WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE11WTNWeWNtVnVkRHRjYmlBZ2ZWeHVYRzRnSUdkbGRGWmxiRzlqYVhSNUtDa2dlMXh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpMblpsYkc5amFYUjVPMXh1SUNCOVhHNTlYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJRUZqZEdsdmJqdGNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIERFRkFVTFRfT1ZFUlNIT09UX1NUUkVOR1RIID0gMS41MjU7XG5cbnZhciBjcmVhdGVSZXZlcnNlZEVhc2luZyA9IGV4cG9ydHMuY3JlYXRlUmV2ZXJzZWRFYXNpbmcgPSBmdW5jdGlvbiAoZWFzaW5nKSB7XG4gIHJldHVybiBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiAxIC0gZWFzaW5nKDEgLSBwKTtcbiAgfTtcbn07XG52YXIgY3JlYXRlTWlycm9yZWRFYXNpbmcgPSBleHBvcnRzLmNyZWF0ZU1pcnJvcmVkRWFzaW5nID0gZnVuY3Rpb24gKGVhc2luZykge1xuICByZXR1cm4gZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gcCA8PSAwLjUgPyBlYXNpbmcoMiAqIHApIC8gMiA6ICgyIC0gZWFzaW5nKDIgKiAoMSAtIHApKSkgLyAyO1xuICB9O1xufTs7XG5cbnZhciBsaW5lYXIgPSBleHBvcnRzLmxpbmVhciA9IGZ1bmN0aW9uIChwKSB7XG4gIHJldHVybiBwO1xufTtcblxudmFyIGNyZWF0ZUVhc2VJbiA9IGV4cG9ydHMuY3JlYXRlRWFzZUluID0gZnVuY3Rpb24gKHBvd2VyKSB7XG4gIHJldHVybiBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiBNYXRoLnBvdyhwLCBwb3dlcik7XG4gIH07XG59O1xudmFyIGVhc2VJbiA9IGV4cG9ydHMuZWFzZUluID0gY3JlYXRlRWFzZUluKDIpO1xudmFyIGVhc2VPdXQgPSBleHBvcnRzLmVhc2VPdXQgPSBjcmVhdGVSZXZlcnNlZEVhc2luZyhlYXNlSW4pO1xudmFyIGVhc2VJbk91dCA9IGV4cG9ydHMuZWFzZUluT3V0ID0gY3JlYXRlTWlycm9yZWRFYXNpbmcoZWFzZUluKTtcblxudmFyIGNpcmNJbiA9IGV4cG9ydHMuY2lyY0luID0gZnVuY3Rpb24gKHApIHtcbiAgcmV0dXJuIDEgLSBNYXRoLnNpbihNYXRoLmFjb3MocCkpO1xufTtcbnZhciBjaXJjT3V0ID0gZXhwb3J0cy5jaXJjT3V0ID0gY3JlYXRlUmV2ZXJzZWRFYXNpbmcoY2lyY0luKTtcbnZhciBjaXJjSW5PdXQgPSBleHBvcnRzLmNpcmNJbk91dCA9IGNyZWF0ZU1pcnJvcmVkRWFzaW5nKGNpcmNPdXQpO1xuXG52YXIgY3JlYXRlQmFja0luID0gZXhwb3J0cy5jcmVhdGVCYWNrSW4gPSBmdW5jdGlvbiAocG93ZXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIHAgKiBwICogKChwb3dlciArIDEpICogcCAtIHBvd2VyKTtcbiAgfTtcbn07XG52YXIgYmFja0luID0gZXhwb3J0cy5iYWNrSW4gPSBjcmVhdGVCYWNrSW4oREVGQVVMVF9PVkVSU0hPT1RfU1RSRU5HVEgpO1xudmFyIGJhY2tPdXQgPSBleHBvcnRzLmJhY2tPdXQgPSBjcmVhdGVSZXZlcnNlZEVhc2luZyhiYWNrSW4pO1xudmFyIGJhY2tJbk91dCA9IGV4cG9ydHMuYmFja0luT3V0ID0gY3JlYXRlTWlycm9yZWRFYXNpbmcoYmFja0luKTtcblxudmFyIGNyZWF0ZUFudGljaXBhdGVFYXNpbmcgPSBleHBvcnRzLmNyZWF0ZUFudGljaXBhdGVFYXNpbmcgPSBmdW5jdGlvbiAocG93ZXIpIHtcbiAgdmFyIGJhY2tFYXNpbmcgPSBjcmVhdGVCYWNrSW4ocG93ZXIpO1xuICByZXR1cm4gZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gKHAgKj0gMikgPCAxID8gMC41ICogYmFja0Vhc2luZyhwKSA6IDAuNSAqICgyIC0gTWF0aC5wb3coMiwgLTEwICogKHAgLSAxKSkpO1xuICB9O1xufTtcbnZhciBhbnRpY2lwYXRlID0gZXhwb3J0cy5hbnRpY2lwYXRlID0gY3JlYXRlQW50aWNpcGF0ZUVhc2luZyhERUZBVUxUX09WRVJTSE9PVF9TVFJFTkdUSCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWxZWE5wYm1jdmFXNWtaWGd1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN08wRkJRVUVzU1VGQlRTdzJRa0ZCTmtJc1MwRkJOMEk3TzBGQlJVTXNTVUZCVFN4elJFRkJkVUlzVlVGQlF5eE5RVUZFTzFOQlFWa3NWVUZCUXl4RFFVRkVPMWRCUVU4c1NVRkJTU3hQUVVGUExFbEJRVWtzUTBGQlNpeERRVUZZTzBkQlFWQTdRMEZCV2p0QlFVTTNRaXhKUVVGTkxITkVRVUYxUWl4VlFVRkRMRTFCUVVRN1UwRkJXU3hWUVVGRExFTkJRVVE3VjBGQlR5eERRVUZETEVsQlFVc3NSMEZCVEN4SFFVRlpMRTlCUVU4c1NVRkJTU3hEUVVGS0xFTkJRVkFzUjBGQlowSXNRMEZCYUVJc1IwRkJiMElzUTBGQlF5eEpRVUZKTEU5QlFVOHNTMEZCU3l4SlFVRkpMRU5CUVVvc1EwRkJUQ3hEUVVGWUxFTkJRVVFzUjBGQk5FSXNRMEZCTlVJN1IwRkJlRU03UTBGQldpeERRVUZyUmpzN1FVRkZMMGNzU1VGQlRTd3dRa0ZCVXl4VlFVRkRMRU5CUVVRN1UwRkJUenREUVVGUU96dEJRVVZtTEVsQlFVMHNjME5CUVdVc1ZVRkJReXhMUVVGRU8xTkJRVmNzVlVGQlF5eERRVUZFTzI5Q1FVRlBMRWRCUVVzN1IwRkJXanREUVVGWU8wRkJRM0pDTEVsQlFVMHNNRUpCUVZNc1lVRkJZU3hEUVVGaUxFTkJRVlE3UVVGRFRpeEpRVUZOTERSQ1FVRlZMSEZDUVVGeFFpeE5RVUZ5UWl4RFFVRldPMEZCUTA0c1NVRkJUU3huUTBGQldTeHhRa0ZCY1VJc1RVRkJja0lzUTBGQldqczdRVUZGVGl4SlFVRk5MREJDUVVGVExGVkJRVU1zUTBGQlJEdFRRVUZQTEVsQlFVa3NTMEZCU3l4SFFVRk1MRU5CUVZNc1MwRkJTeXhKUVVGTUxFTkJRVlVzUTBGQlZpeERRVUZVTEVOQlFVbzdRMEZCVUR0QlFVTm1MRWxCUVUwc05FSkJRVlVzY1VKQlFYRkNMRTFCUVhKQ0xFTkJRVlk3UVVGRFRpeEpRVUZOTEdkRFFVRlpMSEZDUVVGeFFpeFBRVUZ5UWl4RFFVRmFPenRCUVVWT0xFbEJRVTBzYzBOQlFXVXNWVUZCUXl4TFFVRkVPMU5CUVZjc1ZVRkJReXhEUVVGRU8xZEJRVThzUTBGQlF5eEhRVUZKTEVOQlFVb3NTVUZCVlN4RFFVRkRMRkZCUVZFc1EwRkJVaXhEUVVGRUxFZEJRV01zUTBGQlpDeEhRVUZyUWl4TFFVRnNRaXhEUVVGWU8wZEJRVkE3UTBGQldEdEJRVU55UWl4SlFVRk5MREJDUVVGVExHRkJRV0VzTUVKQlFXSXNRMEZCVkR0QlFVTk9MRWxCUVUwc05FSkJRVlVzY1VKQlFYRkNMRTFCUVhKQ0xFTkJRVlk3UVVGRFRpeEpRVUZOTEdkRFFVRlpMSEZDUVVGeFFpeE5RVUZ5UWl4RFFVRmFPenRCUVVWT0xFbEJRVTBzTUVSQlFYbENMRlZCUVVNc1MwRkJSQ3hGUVVGWE8wRkJReTlETEUxQlFVMHNZVUZCWVN4aFFVRmhMRXRCUVdJc1EwRkJZaXhEUVVSNVF6dEJRVVV2UXl4VFFVRlBMRlZCUVVNc1EwRkJSRHRYUVVGUExFTkJRVVVzUzBGQlN5eERRVUZNTEVOQlFVUXNSMEZCVnl4RFFVRllMRWRCUVdkQ0xFMUJRVTBzVjBGQlZ5eERRVUZZTEVOQlFVNHNSMEZCYzBJc1QwRkJUeXhKUVVGSkxFdEJRVXNzUjBGQlRDeERRVUZUTEVOQlFWUXNSVUZCV1N4RFFVRkRMRVZCUVVRc1NVRkJUeXhKUVVGSkxFTkJRVW9zUTBGQlVDeERRVUZvUWl4RFFVRlFPMGRCUVRsRExFTkJSbmRETzBOQlFWZzdRVUZKTDBJc1NVRkJUU3hyUTBGQllTeDFRa0ZCZFVJc01FSkJRWFpDTEVOQlFXSWlMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUXZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lZMjl1YzNRZ1JFVkdRVlZNVkY5UFZrVlNVMGhQVDFSZlUxUlNSVTVIVkVnZ1BTQXhMalV5TlR0Y2JseHVaWGh3YjNKMElHTnZibk4wSUdOeVpXRjBaVkpsZG1WeWMyVmtSV0Z6YVc1bklEMGdLR1ZoYzJsdVp5a2dQVDRnS0hBcElEMCtJREVnTFNCbFlYTnBibWNvTVNBdElIQXBPMXh1Wlhod2IzSjBJR052Ym5OMElHTnlaV0YwWlUxcGNuSnZjbVZrUldGemFXNW5JRDBnS0dWaGMybHVaeWtnUFQ0Z0tIQXBJRDArSUNod0lEdzlJREF1TlNrZ1B5QmxZWE5wYm1jb01pQXFJSEFwSUM4Z01pQTZJQ2d5SUMwZ1pXRnphVzVuS0RJZ0tpQW9NU0F0SUhBcEtTa2dMeUF5T3p0Y2JseHVaWGh3YjNKMElHTnZibk4wSUd4cGJtVmhjaUE5SUNod0tTQTlQaUJ3TzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnWTNKbFlYUmxSV0Z6WlVsdUlEMGdLSEJ2ZDJWeUtTQTlQaUFvY0NrZ1BUNGdjQ0FxS2lCd2IzZGxjanRjYm1WNGNHOXlkQ0JqYjI1emRDQmxZWE5sU1c0Z1BTQmpjbVZoZEdWRllYTmxTVzRvTWlrN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnWldGelpVOTFkQ0E5SUdOeVpXRjBaVkpsZG1WeWMyVmtSV0Z6YVc1bktHVmhjMlZKYmlrN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnWldGelpVbHVUM1YwSUQwZ1kzSmxZWFJsVFdseWNtOXlaV1JGWVhOcGJtY29aV0Z6WlVsdUtUdGNibHh1Wlhod2IzSjBJR052Ym5OMElHTnBjbU5KYmlBOUlDaHdLU0E5UGlBeElDMGdUV0YwYUM1emFXNG9UV0YwYUM1aFkyOXpLSEFwS1R0Y2JtVjRjRzl5ZENCamIyNXpkQ0JqYVhKalQzVjBJRDBnWTNKbFlYUmxVbVYyWlhKelpXUkZZWE5wYm1jb1kybHlZMGx1S1R0Y2JtVjRjRzl5ZENCamIyNXpkQ0JqYVhKalNXNVBkWFFnUFNCamNtVmhkR1ZOYVhKeWIzSmxaRVZoYzJsdVp5aGphWEpqVDNWMEtUdGNibHh1Wlhod2IzSjBJR052Ym5OMElHTnlaV0YwWlVKaFkydEpiaUE5SUNod2IzZGxjaWtnUFQ0Z0tIQXBJRDArSUNod0lDb2djQ2tnS2lBb0tIQnZkMlZ5SUNzZ01Ta2dLaUJ3SUMwZ2NHOTNaWElwTzF4dVpYaHdiM0owSUdOdmJuTjBJR0poWTJ0SmJpQTlJR055WldGMFpVSmhZMnRKYmloRVJVWkJWVXhVWDA5V1JWSlRTRTlQVkY5VFZGSkZUa2RVU0NrN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnWW1GamEwOTFkQ0E5SUdOeVpXRjBaVkpsZG1WeWMyVmtSV0Z6YVc1bktHSmhZMnRKYmlrN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnWW1GamEwbHVUM1YwSUQwZ1kzSmxZWFJsVFdseWNtOXlaV1JGWVhOcGJtY29ZbUZqYTBsdUtUdGNibHh1Wlhod2IzSjBJR052Ym5OMElHTnlaV0YwWlVGdWRHbGphWEJoZEdWRllYTnBibWNnUFNBb2NHOTNaWElwSUQwK0lIdGNiaUFnWTI5dWMzUWdZbUZqYTBWaGMybHVaeUE5SUdOeVpXRjBaVUpoWTJ0SmJpaHdiM2RsY2lrN1hHNGdJSEpsZEhWeWJpQW9jQ2tnUFQ0Z0tDaHdJQ285SURJcElEd2dNU2tnUHlBd0xqVWdLaUJpWVdOclJXRnphVzVuS0hBcElEb2dNQzQxSUNvZ0tESWdMU0JOWVhSb0xuQnZkeWd5TENBdE1UQWdLaUFvY0NBdElERXBLU2s3WEc1OVhHNWxlSEJ2Y25RZ1kyOXVjM1FnWVc1MGFXTnBjR0YwWlNBOUlHTnlaV0YwWlVGdWRHbGphWEJoZEdWRllYTnBibWNvUkVWR1FWVk1WRjlQVmtWU1UwaFBUMVJmVTFSU1JVNUhWRWdwTzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2Vhc2luZy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuc3RlcHBlZE1vdGlvbiA9IGV4cG9ydHMucmVzdHJpY3RCZXR3ZWVuID0gZXhwb3J0cy5yZXN0cmljdE92ZXIgPSBleHBvcnRzLnJlc3RyaWN0VW5kZXIgPSBleHBvcnRzLmludGVycG9sYXRlID0gZXhwb3J0cy5jb21wb3NlID0gZXhwb3J0cy5hcHBlbmRVbml0ID0gdW5kZWZpbmVkO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpO1xuXG4vKipcbiAqIEFwcGVuZCBVbml0XG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGFwcGVuZCB0aGUgdW5pdCB0byBhIGdpdmVuIHZhbHVlXG4gKiBhcHBlbmRVbml0KCdweCcpKDIwKSAtPiAnMjBweCdcbiAqIEBwYXJhbSAge3N0cmluZ30gdW5pdClcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xudmFyIGFwcGVuZFVuaXQgPSBleHBvcnRzLmFwcGVuZFVuaXQgPSBmdW5jdGlvbiAodW5pdCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gJycgKyB2ICsgdW5pdDtcbiAgfTtcbn07XG5cbi8qKlxuICogQ29tcG9zZVxuICogQ29tcG9zZSBvdGhlciB0cmFuc2Zvcm1lcnMgdG8gcnVuIGxpbmVhcmlseVxuICogY29tcG9zZShtaW4oMjApLCBtYXgoNDApKVxuICogQHBhcmFtICB7Li4uZnVuY3Rpb25zfSB0cmFuc2Zvcm1lcnNcbiAqIEByZXR1cm4ge2Z1bmN0aW9ufVxuICovXG52YXIgY29tcG9zZSA9IGV4cG9ydHMuY29tcG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHRyYW5zZm9ybWVycyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHRyYW5zZm9ybWVyc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHZhciBudW1UcmFuc2Zvcm1lcnMgPSB0cmFuc2Zvcm1lcnMubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICh2LCB2YWx1ZSkge1xuICAgIGZvciAoaSA9IDA7IGkgPCBudW1UcmFuc2Zvcm1lcnM7IGkrKykge1xuICAgICAgdiA9IHRyYW5zZm9ybWVyc1tpXSh2LCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHY7XG4gIH07XG59O1xuXG52YXIgaW50ZXJwb2xhdGUgPSBleHBvcnRzLmludGVycG9sYXRlID0gZnVuY3Rpb24gKGlucHV0LCBvdXRwdXQsIHJhbmdlRWFzaW5nKSB7XG4gIHZhciByYW5nZUxlbmd0aCA9IGlucHV0Lmxlbmd0aDtcbiAgdmFyIGZpbmFsSW5kZXggPSByYW5nZUxlbmd0aCAtIDE7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgLy8gSWYgdmFsdWUgb3V0c2lkZSBtaW5pbXVtIHJhbmdlLCBxdWlja2x5IHJldHVyblxuICAgIGlmICh2IDw9IGlucHV0WzBdKSB7XG4gICAgICByZXR1cm4gb3V0cHV0WzBdO1xuICAgIH1cblxuICAgIC8vIElmIHZhbHVlIG91dHNpZGUgbWF4aW11bSByYW5nZSwgcXVpY2tseSByZXR1cm5cbiAgICBpZiAodiA+PSBpbnB1dFtmaW5hbEluZGV4XSkge1xuICAgICAgcmV0dXJuIG91dHB1dFtmaW5hbEluZGV4XTtcbiAgICB9XG5cbiAgICB2YXIgaSA9IDA7XG5cbiAgICAvLyBGaW5kIGluZGV4IG9mIHJhbmdlIHN0YXJ0XG4gICAgZm9yICg7IGkgPCByYW5nZUxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaW5wdXRbaV0gPiB2IHx8IGkgPT09IGZpbmFsSW5kZXgpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByb2dyZXNzSW5SYW5nZSA9ICgwLCBfY2FsYy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSkodiwgaW5wdXRbaV0sIGlucHV0W2kgKyAxXSk7XG4gICAgdmFyIGVhc2VkUHJvZ3Jlc3MgPSByYW5nZUVhc2luZyA/IHJhbmdlRWFzaW5nW2ldKHByb2dyZXNzSW5SYW5nZSkgOiBwcm9ncmVzc0luUmFuZ2U7XG4gICAgcmV0dXJuICgwLCBfY2FsYy5nZXRWYWx1ZUZyb21Qcm9ncmVzcykoZWFzZWRQcm9ncmVzcywgb3V0cHV0W2ldLCBvdXRwdXRbaSArIDFdKTtcbiAgfTtcbn07XG5cbi8qKlxuICogUmVzdHJpY3QgdmFsdWUgYmV0d2VlblxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCByZXN0cmljdCBhIGdpdmVuIHZhbHVlIGJldHdlZW4gYG1pbmAgYW5kIGBtYXhgXG4gKiBAcGFyYW0gIHtudW1iZXJ9IG1pblxuICogQHBhcmFtICB7bnVtYmVyfSBtYXhcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xudmFyIHJlc3RyaWN0VW5kZXIgPSBleHBvcnRzLnJlc3RyaWN0VW5kZXIgPSBmdW5jdGlvbiAobWF4KSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiBNYXRoLm1pbih2LCBtYXgpO1xuICB9O1xufTtcbnZhciByZXN0cmljdE92ZXIgPSBleHBvcnRzLnJlc3RyaWN0T3ZlciA9IGZ1bmN0aW9uIChtaW4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIE1hdGgubWF4KHYsIG1pbik7XG4gIH07XG59O1xudmFyIHJlc3RyaWN0QmV0d2VlbiA9IGV4cG9ydHMucmVzdHJpY3RCZXR3ZWVuID0gZnVuY3Rpb24gKG1pbiwgbWF4KSB7XG4gIHJldHVybiBjb21wb3NlKHJlc3RyaWN0T3ZlcihtaW4pLCByZXN0cmljdFVuZGVyKG1heCkpO1xufTtcblxudmFyIHN0ZXBwZWRNb3Rpb24gPSBleHBvcnRzLnN0ZXBwZWRNb3Rpb24gPSBmdW5jdGlvbiAobWluLCBtYXgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7fTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlM5MGNtRnVjMlp2Y20xbGNuTXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN1FVRkJRVHM3T3pzN096czdPMEZCVTA4c1NVRkJUU3hyUTBGQllTeFZRVUZETEVsQlFVUTdVMEZCVlN4VlFVRkRMRU5CUVVRN1owSkJRVlVzU1VGQlNUdEhRVUZrTzBOQlFWWTdPenM3T3pzN096dEJRVk51UWl4SlFVRk5MRFJDUVVGVkxGbEJRWEZDTzI5RFFVRnFRanM3UjBGQmFVSTdPMEZCUXpGRExFMUJRVTBzYTBKQlFXdENMR0ZCUVdFc1RVRkJZaXhEUVVSclFqdEJRVVV4UXl4TlFVRkpMRWxCUVVrc1EwRkJTaXhEUVVaelF6czdRVUZKTVVNc1UwRkJUeXhWUVVGRExFTkJRVVFzUlVGQlNTeExRVUZLTEVWQlFXTTdRVUZEYmtJc1UwRkJTeXhKUVVGSkxFTkJRVW9zUlVGQlR5eEpRVUZKTEdWQlFVb3NSVUZCY1VJc1IwRkJha01zUlVGQmMwTTdRVUZEY0VNc1ZVRkJTU3hoUVVGaExFTkJRV0lzUlVGQlowSXNRMEZCYUVJc1JVRkJiVUlzUzBGQmJrSXNRMEZCU2l4RFFVUnZRenRMUVVGMFF6czdRVUZKUVN4WFFVRlBMRU5CUVZBc1EwRk1iVUk3UjBGQlpDeERRVXB0UXp0RFFVRnlRanM3UVVGaGFFSXNTVUZCVFN4dlEwRkJZeXhWUVVGRExFdEJRVVFzUlVGQlVTeE5RVUZTTEVWQlFXZENMRmRCUVdoQ0xFVkJRV2RETzBGQlEzcEVMRTFCUVUwc1kwRkJZeXhOUVVGTkxFMUJRVTRzUTBGRWNVTTdRVUZGZWtRc1RVRkJUU3hoUVVGaExHTkJRV01zUTBGQlpDeERRVVp6UXpzN1FVRkpla1FzVTBGQlR5eFZRVUZETEVOQlFVUXNSVUZCVHpzN1FVRkZXaXhSUVVGSkxFdEJRVXNzVFVGQlRTeERRVUZPTEVOQlFVd3NSVUZCWlR0QlFVTnFRaXhoUVVGUExFOUJRVThzUTBGQlVDeERRVUZRTEVOQlJHbENPMHRCUVc1Q096czdRVUZHV1N4UlFVOVNMRXRCUVVzc1RVRkJUU3hWUVVGT0xFTkJRVXdzUlVGQmQwSTdRVUZETVVJc1lVRkJUeXhQUVVGUExGVkJRVkFzUTBGQlVDeERRVVF3UWp0TFFVRTFRanM3UVVGSlFTeFJRVUZKTEVsQlFVa3NRMEZCU2pzN08wRkJXRkVzVjBGalRDeEpRVUZKTEZkQlFVb3NSVUZCYVVJc1IwRkJlRUlzUlVGQk5rSTdRVUZETTBJc1ZVRkJTU3hOUVVGTkxFTkJRVTRzU1VGQlZ5eERRVUZZTEVsQlFXZENMRTFCUVUwc1ZVRkJUaXhGUVVGclFqdEJRVU53UXl4alFVUnZRenRQUVVGMFF6dExRVVJHT3p0QlFVMUJMRkZCUVUwc2EwSkJRV3RDTEdkRFFVRnhRaXhEUVVGeVFpeEZRVUYzUWl4TlFVRk5MRU5CUVU0c1EwRkJlRUlzUlVGQmEwTXNUVUZCVFN4SlFVRkpMRU5CUVVvc1EwRkJlRU1zUTBGQmJFSXNRMEZ3UWswN1FVRnhRbG9zVVVGQlRTeG5Ra0ZCWjBJc1kwRkJaMElzV1VGQldTeERRVUZhTEVWQlFXVXNaVUZCWml4RFFVRm9RaXhIUVVGclJDeGxRVUZzUkN4RFFYSkNWanRCUVhOQ1dpeFhRVUZQTEdkRFFVRnhRaXhoUVVGeVFpeEZRVUZ2UXl4UFFVRlBMRU5CUVZBc1EwRkJjRU1zUlVGQkswTXNUMEZCVHl4SlFVRkpMRU5CUVVvc1EwRkJkRVFzUTBGQlVDeERRWFJDV1R0SFFVRlFMRU5CU210RU8wTkJRV2hET3pzN096czdPenM3UVVGeFEzQkNMRWxCUVUwc2QwTkJRV2RDTEZWQlFVTXNSMEZCUkR0VFFVRlRMRlZCUVVNc1EwRkJSRHRYUVVGUExFdEJRVXNzUjBGQlRDeERRVUZUTEVOQlFWUXNSVUZCV1N4SFFVRmFPMGRCUVZBN1EwRkJWRHRCUVVOMFFpeEpRVUZOTEhORFFVRmxMRlZCUVVNc1IwRkJSRHRUUVVGVExGVkJRVU1zUTBGQlJEdFhRVUZQTEV0QlFVc3NSMEZCVEN4RFFVRlRMRU5CUVZRc1JVRkJXU3hIUVVGYU8wZEJRVkE3UTBGQlZEdEJRVU55UWl4SlFVRk5MRFJEUVVGclFpeFZRVUZETEVkQlFVUXNSVUZCVFN4SFFVRk9PMU5CUVdNc1VVRkJVU3hoUVVGaExFZEJRV0lzUTBGQlVpeEZRVUV5UWl4alFVRmpMRWRCUVdRc1EwRkJNMEk3UTBGQlpEczdRVUZGZUVJc1NVRkJUU3gzUTBGQlowSXNWVUZCUXl4SFFVRkVMRVZCUVUwc1IwRkJUanRUUVVGakxGVkJRVU1zUTBGQlJDeEZRVUZQTEVWQlFWQTdRMEZCWkNJc0ltWnBiR1VpT2lKMGNtRnVjMlp2Y20xbGNuTXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFF2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSHNnWjJWMFVISnZaM0psYzNOR2NtOXRWbUZzZFdVc0lHZGxkRlpoYkhWbFJuSnZiVkJ5YjJkeVpYTnpJSDBnWm5KdmJTQW5MaTR2YVc1akwyTmhiR01uTzF4dVhHNHZLaXBjYmlBcUlFRndjR1Z1WkNCVmJtbDBYRzRnS2lCRGNtVmhkR1Z6SUdFZ1puVnVZM1JwYjI0Z2RHaGhkQ0IzYVd4c0lHRndjR1Z1WkNCMGFHVWdkVzVwZENCMGJ5QmhJR2RwZG1WdUlIWmhiSFZsWEc0Z0tpQmhjSEJsYm1SVmJtbDBLQ2R3ZUNjcEtESXdLU0F0UGlBbk1qQndlQ2RjYmlBcUlFQndZWEpoYlNBZ2UzTjBjbWx1WjMwZ2RXNXBkQ2xjYmlBcUlFQnlaWFIxY200Z2UyNTFiV0psY24xY2JpQXFMMXh1Wlhod2IzSjBJR052Ym5OMElHRndjR1Z1WkZWdWFYUWdQU0FvZFc1cGRDa2dQVDRnS0hZcElEMCtJR0FrZTNaOUpIdDFibWwwZldBN1hHNWNiaThxS2x4dUlDb2dRMjl0Y0c5elpWeHVJQ29nUTI5dGNHOXpaU0J2ZEdobGNpQjBjbUZ1YzJadmNtMWxjbk1nZEc4Z2NuVnVJR3hwYm1WaGNtbHNlVnh1SUNvZ1kyOXRjRzl6WlNodGFXNG9NakFwTENCdFlYZ29OREFwS1Z4dUlDb2dRSEJoY21GdElDQjdMaTR1Wm5WdVkzUnBiMjV6ZlNCMGNtRnVjMlp2Y20xbGNuTmNiaUFxSUVCeVpYUjFjbTRnZTJaMWJtTjBhVzl1ZlZ4dUlDb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ1kyOXRjRzl6WlNBOUlDZ3VMaTUwY21GdWMyWnZjbTFsY25NcElEMCtJSHRjYmlBZ1kyOXVjM1FnYm5WdFZISmhibk5tYjNKdFpYSnpJRDBnZEhKaGJuTm1iM0p0WlhKekxteGxibWQwYUR0Y2JpQWdiR1YwSUdrZ1BTQXdPMXh1WEc0Z0lISmxkSFZ5YmlBb2Rpd2dkbUZzZFdVcElEMCtJSHRjYmlBZ0lDQm1iM0lnS0drZ1BTQXdPeUJwSUR3Z2JuVnRWSEpoYm5ObWIzSnRaWEp6T3lCcEt5c3BJSHRjYmlBZ0lDQWdJSFlnUFNCMGNtRnVjMlp2Y20xbGNuTmJhVjBvZGl3Z2RtRnNkV1VwTzF4dUlDQWdJSDFjYmx4dUlDQWdJSEpsZEhWeWJpQjJPMXh1SUNCOU8xeHVmVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJR2x1ZEdWeWNHOXNZWFJsSUQwZ0tHbHVjSFYwTENCdmRYUndkWFFzSUhKaGJtZGxSV0Z6YVc1bktTQTlQaUI3WEc0Z0lHTnZibk4wSUhKaGJtZGxUR1Z1WjNSb0lEMGdhVzV3ZFhRdWJHVnVaM1JvTzF4dUlDQmpiMjV6ZENCbWFXNWhiRWx1WkdWNElEMGdjbUZ1WjJWTVpXNW5kR2dnTFNBeE8xeHVYRzRnSUhKbGRIVnliaUFvZGlrZ1BUNGdlMXh1SUNBZ0lDOHZJRWxtSUhaaGJIVmxJRzkxZEhOcFpHVWdiV2x1YVcxMWJTQnlZVzVuWlN3Z2NYVnBZMnRzZVNCeVpYUjFjbTVjYmlBZ0lDQnBaaUFvZGlBOFBTQnBibkIxZEZzd1hTa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlHOTFkSEIxZEZzd1hUdGNiaUFnSUNCOVhHNWNiaUFnSUNBdkx5QkpaaUIyWVd4MVpTQnZkWFJ6YVdSbElHMWhlR2x0ZFcwZ2NtRnVaMlVzSUhGMWFXTnJiSGtnY21WMGRYSnVYRzRnSUNBZ2FXWWdLSFlnUGowZ2FXNXdkWFJiWm1sdVlXeEpibVJsZUYwcElIdGNiaUFnSUNBZ0lISmxkSFZ5YmlCdmRYUndkWFJiWm1sdVlXeEpibVJsZUYwN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYkdWMElHa2dQU0F3TzF4dVhHNGdJQ0FnTHk4Z1JtbHVaQ0JwYm1SbGVDQnZaaUJ5WVc1blpTQnpkR0Z5ZEZ4dUlDQWdJR1p2Y2lBb095QnBJRHdnY21GdVoyVk1aVzVuZEdnN0lHa3JLeWtnZTF4dUlDQWdJQ0FnYVdZZ0tHbHVjSFYwVzJsZElENGdkaUI4ZkNCcElEMDlQU0JtYVc1aGJFbHVaR1Y0S1NCN1hHNGdJQ0FnSUNBZ0lHSnlaV0ZyTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJR052Ym5OMElIQnliMmR5WlhOelNXNVNZVzVuWlNBOUlHZGxkRkJ5YjJkeVpYTnpSbkp2YlZaaGJIVmxLSFlzSUdsdWNIVjBXMmxkTENCcGJuQjFkRnRwSUNzZ01WMHBPMXh1SUNBZ0lHTnZibk4wSUdWaGMyVmtVSEp2WjNKbGMzTWdQU0FvY21GdVoyVkZZWE5wYm1jcElEOGdjbUZ1WjJWRllYTnBibWRiYVYwb2NISnZaM0psYzNOSmJsSmhibWRsS1NBNklIQnliMmR5WlhOelNXNVNZVzVuWlR0Y2JpQWdJQ0J5WlhSMWNtNGdaMlYwVm1Gc2RXVkdjbTl0VUhKdlozSmxjM01vWldGelpXUlFjbTluY21WemN5d2diM1YwY0hWMFcybGRMQ0J2ZFhSd2RYUmJhU0FySURGZEtUdGNiaUFnZlR0Y2JuMDdYRzVjYmk4cUtseHVJQ29nVW1WemRISnBZM1FnZG1Gc2RXVWdZbVYwZDJWbGJseHVJQ29nUTNKbFlYUmxjeUJoSUdaMWJtTjBhVzl1SUhSb1lYUWdkMmxzYkNCeVpYTjBjbWxqZENCaElHZHBkbVZ1SUhaaGJIVmxJR0psZEhkbFpXNGdZRzFwYm1BZ1lXNWtJR0J0WVhoZ1hHNGdLaUJBY0dGeVlXMGdJSHR1ZFcxaVpYSjlJRzFwYmx4dUlDb2dRSEJoY21GdElDQjdiblZ0WW1WeWZTQnRZWGhjYmlBcUlFQnlaWFIxY200Z2UyNTFiV0psY24xY2JpQXFMMXh1Wlhod2IzSjBJR052Ym5OMElISmxjM1J5YVdOMFZXNWtaWElnUFNBb2JXRjRLU0E5UGlBb2Rpa2dQVDRnVFdGMGFDNXRhVzRvZGl3Z2JXRjRLVHRjYm1WNGNHOXlkQ0JqYjI1emRDQnlaWE4wY21samRFOTJaWElnUFNBb2JXbHVLU0E5UGlBb2Rpa2dQVDRnVFdGMGFDNXRZWGdvZGl3Z2JXbHVLVHRjYm1WNGNHOXlkQ0JqYjI1emRDQnlaWE4wY21samRFSmxkSGRsWlc0Z1BTQW9iV2x1TENCdFlYZ3BJRDArSUdOdmJYQnZjMlVvY21WemRISnBZM1JQZG1WeUtHMXBiaWtzSUhKbGMzUnlhV04wVlc1a1pYSW9iV0Y0S1NrN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCemRHVndjR1ZrVFc5MGFXOXVJRDBnS0cxcGJpd2diV0Y0S1NBOVBpQW9kaWtnUFQ0Z2UxeHVJQ0JjYm4wN1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS90cmFuc2Zvcm1lcnMuanNcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnN0ZXBQcm9ncmVzcyA9IGV4cG9ydHMuc3BlZWRQZXJTZWNvbmQgPSBleHBvcnRzLnNwZWVkUGVyRnJhbWUgPSBleHBvcnRzLnNtb290aCA9IGV4cG9ydHMucmVzdHJpY3QgPSBleHBvcnRzLnJlbGF0aXZlVmFsdWUgPSBleHBvcnRzLnJhbmRvbSA9IGV4cG9ydHMucmFkaWFuc1RvRGVncmVlcyA9IGV4cG9ydHMucG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZSA9IGV4cG9ydHMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUgPSBleHBvcnRzLmdldFZhbHVlRnJvbVByb2dyZXNzID0gZXhwb3J0cy5kaXN0YW5jZSA9IGV4cG9ydHMuZGlsYXRlID0gZXhwb3J0cy5kZWdyZWVzVG9SYWRpYW5zID0gZXhwb3J0cy5hbmdsZSA9IHVuZGVmaW5lZDtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIFpFUk9fUE9JTlQgPSB7XG4gIHg6IDAsXG4gIHk6IDAsXG4gIHo6IDBcbn07XG5cbnZhciBkaXN0YW5jZTFEID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgcmV0dXJuIE1hdGguYWJzKGEgLSBiKTtcbn07XG5cbi8qXG4gIEFuZ2xlIGJldHdlZW4gcG9pbnRzXG4gIFxuICBUcmFuc2xhdGVzIHRoZSBoeXBvdGhldGljYWwgbGluZSBzbyB0aGF0IHRoZSAnZnJvbScgY29vcmRpbmF0ZXNcbiAgYXJlIGF0IDAsMFxuICBcbiAgQHBhcmFtIFtvYmplY3RdOiBYIGFuZCBZIGNvb3JkaW5hdGVzIG9mIGZyb20gcG9pbnRcbiAgQHBhcmFtIFtvYmplY3RdOiBYIGFuZCBZIGNvcmRpbmF0ZXMgb2YgdG8gcG9pbnRcbiAgQHJldHVybiBbcmFkaWFuXTogQW5nbGUgYmV0d2VlbiB0aGUgdHdvIHBvaW50cyBpbiByYWRpYW5zXG4qL1xudmFyIGFuZ2xlID0gZXhwb3J0cy5hbmdsZSA9IGZ1bmN0aW9uIChhKSB7XG4gIHZhciBiID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gWkVST19QT0lOVCA6IGFyZ3VtZW50c1sxXTtcbiAgcmV0dXJuIHJhZGlhbnNUb0RlZ3JlZXMoTWF0aC5hdGFuMihhLnggLSBiLngsIGEueSAtIGIueSkpO1xufTtcblxuLypcbiAgQ29udmVydCBkZWdyZWVzIHRvIHJhZGlhbnNcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgaW4gZGVncmVlc1xuICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBpbiByYWRpYW5zXG4qL1xudmFyIGRlZ3JlZXNUb1JhZGlhbnMgPSBleHBvcnRzLmRlZ3JlZXNUb1JhZGlhbnMgPSBmdW5jdGlvbiAoZGVncmVlcykge1xuICByZXR1cm4gZGVncmVlcyAqIE1hdGguUEkgLyAxODA7XG59O1xuXG4vKlxuICBEaWxhdGVcbiAgXG4gIENoYW5nZSB0aGUgcHJvZ3Jlc3Npb24gYmV0d2VlbiBhIGFuZCBiIGFjY29yZGluZyB0byBkaWxhdGlvbi5cbiAgXG4gIFNvIGRpbGF0aW9uID0gMC41IHdvdWxkIGNoYW5nZVxuICBcbiAgYSAtLS0tLS0tLS0gYlxuICBcbiAgdG9cbiAgXG4gIGEgLS0tLSBiXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFByZXZpb3VzIHZhbHVlXG4gIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICBAcGFyYW0gW251bWJlcl06IERpbGF0ZSBwcm9ncmVzcyBieSB4XG4gIEByZXR1cm4gW251bWJlcl06IFByZXZpb3VzIHZhbHVlIHBsdXMgdGhlIGRpbGF0ZWQgZGlmZmVyZW5jZVxuKi9cbnZhciBkaWxhdGUgPSBleHBvcnRzLmRpbGF0ZSA9IGZ1bmN0aW9uIChhLCBiLCBkaWxhdGlvbikge1xuICByZXR1cm4gYSArIChiIC0gYSkgKiBkaWxhdGlvbjtcbn07XG5cbi8qXG4gIERpc3RhbmNlXG4gIFxuICBSZXR1cm5zIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHR3byBuIGRpbWVuc2lvbmFsIHBvaW50cy5cbiAgXG4gIEBwYXJhbSBbb2JqZWN0L251bWJlcl06IHggYW5kIHkgb3IganVzdCB4IG9mIHBvaW50IEFcbiAgQHBhcmFtIFtvYmplY3QvbnVtYmVyXTogKG9wdGlvbmFsKTogeCBhbmQgeSBvciBqdXN0IHggb2YgcG9pbnQgQlxuICBAcmV0dXJuIFtudW1iZXJdOiBUaGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgdHdvIHBvaW50c1xuKi9cbnZhciBkaXN0YW5jZSA9IGV4cG9ydHMuZGlzdGFuY2UgPSBmdW5jdGlvbiAoYSkge1xuICB2YXIgYiA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IFpFUk9fUE9JTlQgOiBhcmd1bWVudHNbMV07XG5cbiAgLy8gMUQgZGltZW5zaW9uc1xuICBpZiAoKDAsIF91dGlscy5pc051bSkoYSkpIHtcbiAgICByZXR1cm4gZGlzdGFuY2UxRChhLCBiKTtcblxuICAgIC8vIE11bHRpLWRpbWVuc2lvbmFsXG4gIH0gZWxzZSB7XG4gICAgICB2YXIgeERlbHRhID0gZGlzdGFuY2UxRChhLngsIGIueCk7XG4gICAgICB2YXIgeURlbHRhID0gZGlzdGFuY2UxRChhLnksIGIueSk7XG4gICAgICB2YXIgekRlbHRhID0gKDAsIF91dGlscy5pc051bSkoYS56KSA/IGRpc3RhbmNlMUQoYS56LCBiLnopIDogMDtcblxuICAgICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyh4RGVsdGEsIDIpICsgTWF0aC5wb3coeURlbHRhLCAyKSArIE1hdGgucG93KHpEZWx0YSwgMikpO1xuICAgIH1cbn07XG5cbi8qXG4gIFZhbHVlIGluIHJhbmdlIGZyb20gcHJvZ3Jlc3NcbiAgXG4gIEdpdmVuIGEgbG93ZXIgbGltaXQgYW5kIGFuIHVwcGVyIGxpbWl0LCB3ZSByZXR1cm4gdGhlIHZhbHVlIHdpdGhpblxuICB0aGF0IHJhbmdlIGFzIGV4cHJlc3NlZCBieSBwcm9ncmVzcyAoYSBudW1iZXIgZnJvbSAwLTEpXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFRoZSBwcm9ncmVzcyBiZXR3ZWVuIGxvd2VyIGFuZCB1cHBlciBsaW1pdHMgZXhwcmVzc2VkIDAtMVxuICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IG9mIHJhbmdlXG4gIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXQgb2YgcmFuZ2VcbiAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgYXMgY2FsY3VsYXRlZCBmcm9tIHByb2dyZXNzIHdpdGhpbiByYW5nZSAobm90IGxpbWl0ZWQgd2l0aGluIHJhbmdlKVxuKi9cbnZhciBnZXRWYWx1ZUZyb21Qcm9ncmVzcyA9IGV4cG9ydHMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MgPSBmdW5jdGlvbiAocHJvZ3Jlc3MsIGZyb20sIHRvKSB7XG4gIHJldHVybiAtcHJvZ3Jlc3MgKiBmcm9tICsgcHJvZ3Jlc3MgKiB0byArIGZyb207XG59O1xuXG4vKlxuICBQcm9ncmVzcyB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiAgXG4gIEdpdmVuIGEgbG93ZXIgbGltaXQgYW5kIGFuIHVwcGVyIGxpbWl0LCB3ZSByZXR1cm4gdGhlIHByb2dyZXNzXG4gIChleHByZXNzZWQgYXMgYSBudW1iZXIgMC0xKSByZXByZXNlbnRlZCBieSB0aGUgZ2l2ZW4gdmFsdWUsIGFuZFxuICBsaW1pdCB0aGF0IHByb2dyZXNzIHRvIHdpdGhpbiAwLTEuXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFZhbHVlIHRvIGZpbmQgcHJvZ3Jlc3Mgd2l0aGluIGdpdmVuIHJhbmdlXG4gIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgXG4gIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXRcbiAgQHJldHVybiBbbnVtYmVyXTogUHJvZ3Jlc3Mgb2YgdmFsdWUgd2l0aGluIHJhbmdlIGFzIGV4cHJlc3NlZCAwLTFcbiovXG52YXIgZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUgPSBleHBvcnRzLmdldFByb2dyZXNzRnJvbVZhbHVlID0gZnVuY3Rpb24gKHZhbHVlLCBmcm9tLCB0bykge1xuICByZXR1cm4gKHZhbHVlIC0gZnJvbSkgLyAodG8gLSBmcm9tKTtcbn07XG5cbi8qXG4gIFBvaW50IGZyb20gYW5nbGUgYW5kIGRpc3RhbmNlXG4gIFxuICBAcGFyYW0gW29iamVjdF06IDJEIHBvaW50IG9mIG9yaWdpblxuICBAcGFyYW0gW251bWJlcl06IEFuZ2xlIGZyb20gb3JpZ2luXG4gIEBwYXJhbSBbbnVtYmVyXTogRGlzdGFuY2UgZnJvbSBvcmlnaW5cbiAgQHJldHVybiBbb2JqZWN0XTogQ2FsY3VsYXRlZCAyRCBwb2ludFxuKi9cbnZhciBwb2ludEZyb21BbmdsZUFuZERpc3RhbmNlID0gZXhwb3J0cy5wb2ludEZyb21BbmdsZUFuZERpc3RhbmNlID0gZnVuY3Rpb24gKG9yaWdpbiwgYW5nbGUsIGRpc3RhbmNlKSB7XG4gIGFuZ2xlID0gZGVncmVlc1RvUmFkaWFucyhhbmdsZSk7XG5cbiAgcmV0dXJuIHtcbiAgICB4OiBkaXN0YW5jZSAqIE1hdGguY29zKGFuZ2xlKSArIG9yaWdpbi54LFxuICAgIHk6IGRpc3RhbmNlICogTWF0aC5zaW4oYW5nbGUpICsgb3JpZ2luLnlcbiAgfTtcbn07XG5cbi8qXG4gIENvbnZlcnQgcmFkaWFucyB0byBkZWdyZWVzXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFZhbHVlIGluIHJhZGlhbnNcbiAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgaW4gZGVncmVlc1xuKi9cbnZhciByYWRpYW5zVG9EZWdyZWVzID0gZXhwb3J0cy5yYWRpYW5zVG9EZWdyZWVzID0gZnVuY3Rpb24gKHJhZGlhbnMpIHtcbiAgcmV0dXJuIHJhZGlhbnMgKiAxODAgLyBNYXRoLlBJO1xufTtcblxuLypcbiAgUmV0dXJuIHJhbmRvbSBudW1iZXIgYmV0d2VlbiByYW5nZVxuICBcbiAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IE91dHB1dCBtaW5pbXVtXG4gIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBPdXRwdXQgbWF4aW11bVxuICBAcmV0dXJuIFtudW1iZXJdOiBSYW5kb20gbnVtYmVyIHdpdGhpbiByYW5nZSwgb3IgMCBhbmQgMSBpZiBub25lIHByb3ZpZGVkXG4qL1xudmFyIHJhbmRvbSA9IGV4cG9ydHMucmFuZG9tID0gZnVuY3Rpb24gKCkge1xuICB2YXIgbWluID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gMCA6IGFyZ3VtZW50c1swXTtcbiAgdmFyIG1heCA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IDEgOiBhcmd1bWVudHNbMV07XG4gIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XG59O1xuXG4vKlxuICBDYWxjdWxhdGUgcmVsYXRpdmUgdmFsdWVcbiAgXG4gIFRha2VzIHRoZSBvcGVyYXRvciBhbmQgdmFsdWUgZnJvbSBhIHN0cmluZywgaWUgXCIrPTVcIiwgYW5kIGFwcGxpZXNcbiAgdG8gdGhlIGN1cnJlbnQgdmFsdWUgdG8gcmVzb2x2ZSBhIG5ldyB0YXJnZXQuXG4gIFxuICBAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcbiAgQHBhcmFtIFtzdHJpbmddOiBSZWxhdGl2ZSB2YWx1ZVxuICBAcmV0dXJuIFtudW1iZXJdOiBOZXcgdmFsdWVcbiovXG52YXIgcmVsYXRpdmVWYWx1ZSA9IGV4cG9ydHMucmVsYXRpdmVWYWx1ZSA9IGZ1bmN0aW9uIChjdXJyZW50LCByZWxhdGl2ZSkge1xuICB2YXIgbmV3VmFsdWUgPSBjdXJyZW50O1xuICB2YXIgZXF1YXRpb24gPSByZWxhdGl2ZS5zcGxpdCgnPScpO1xuICB2YXIgb3BlcmF0b3IgPSBlcXVhdGlvblswXTtcblxuICB2YXIgX2ZpbmRWYWx1ZUFuZFVuaXQgPSAoMCwgX3V0aWxzLmZpbmRWYWx1ZUFuZFVuaXQpKGVxdWF0aW9uWzFdKTtcblxuICB2YXIgdW5pdCA9IF9maW5kVmFsdWVBbmRVbml0LnVuaXQ7XG4gIHZhciB2YWx1ZSA9IF9maW5kVmFsdWVBbmRVbml0LnZhbHVlO1xuXG5cbiAgdmFsdWUgPSBwYXJzZUZsb2F0KHZhbHVlKTtcblxuICBzd2l0Y2ggKG9wZXJhdG9yKSB7XG4gICAgY2FzZSAnKyc6XG4gICAgICBuZXdWYWx1ZSArPSB2YWx1ZTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJy0nOlxuICAgICAgbmV3VmFsdWUgLT0gdmFsdWU7XG4gICAgICBicmVhaztcbiAgICBjYXNlICcqJzpcbiAgICAgIG5ld1ZhbHVlICo9IHZhbHVlO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnLyc6XG4gICAgICBuZXdWYWx1ZSAvPSB2YWx1ZTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgaWYgKHVuaXQpIHtcbiAgICBuZXdWYWx1ZSArPSB1bml0O1xuICB9XG5cbiAgcmV0dXJuIG5ld1ZhbHVlO1xufTtcblxuLypcbiAgUmVzdHJpY3QgdmFsdWUgdG8gcmFuZ2VcbiAgXG4gIFJldHVybiB2YWx1ZSB3aXRoaW4gdGhlIHJhbmdlIG9mIGxvd2VyTGltaXQgYW5kIHVwcGVyTGltaXRcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgdG8ga2VlcCB3aXRoaW4gcmFuZ2VcbiAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBvZiByYW5nZVxuICBAcGFyYW0gW251bWJlcl06IFVwcGVyIGxpbWl0IG9mIHJhbmdlXG4gIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGFzIGxpbWl0ZWQgd2l0aGluIGdpdmVuIHJhbmdlXG4qL1xudmFyIHJlc3RyaWN0ID0gZXhwb3J0cy5yZXN0cmljdCA9IGZ1bmN0aW9uICh2YWx1ZSwgbWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGgubWF4KE1hdGgubWluKHZhbHVlLCBtYXgpLCBtaW4pO1xufTtcblxuLypcbiAgRnJhbWVyYXRlLWluZGVwZW5kZW50IHNtb290aGluZ1xuXG4gIEBwYXJhbSBbbnVtYmVyXTogTmV3IHZhbHVlXG4gIEBwYXJhbSBbbnVtYmVyXTogT2xkIHZhbHVlXG4gIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb25cbiAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IFNtb290aGluZyAoMCBpcyBub25lKVxuKi9cbnZhciBzbW9vdGggPSBleHBvcnRzLnNtb290aCA9IGZ1bmN0aW9uIChuZXdWYWx1ZSwgb2xkVmFsdWUsIGR1cmF0aW9uKSB7XG4gIHZhciBzbW9vdGhpbmcgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDMgfHwgYXJndW1lbnRzWzNdID09PSB1bmRlZmluZWQgPyAwIDogYXJndW1lbnRzWzNdO1xuICByZXR1cm4gKDAsIF91dGlscy50b0RlY2ltYWwpKG9sZFZhbHVlICsgZHVyYXRpb24gKiAobmV3VmFsdWUgLSBvbGRWYWx1ZSkgLyBNYXRoLm1heChzbW9vdGhpbmcsIGR1cmF0aW9uKSk7XG59O1xuXG4vKlxuICBDb252ZXJ0IHggcGVyIHNlY29uZCB0byBwZXIgZnJhbWUgdmVsb2NpdHkgYmFzZWQgb24gZnBzXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFVuaXQgcGVyIHNlY29uZFxuICBAcGFyYW0gW251bWJlcl06IEZyYW1lIGR1cmF0aW9uIGluIG1zXG4qL1xudmFyIHNwZWVkUGVyRnJhbWUgPSBleHBvcnRzLnNwZWVkUGVyRnJhbWUgPSBmdW5jdGlvbiAoeHBzLCBmcmFtZUR1cmF0aW9uKSB7XG4gIHJldHVybiAoMCwgX3V0aWxzLmlzTnVtKSh4cHMpID8geHBzIC8gKDEwMDAgLyBmcmFtZUR1cmF0aW9uKSA6IDA7XG59O1xuXG4vKlxuICBDb252ZXJ0IHZlbG9jaXR5IGludG8gdmVsaWNpdHkgcGVyIHNlY29uZFxuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBVbml0IHBlciBmcmFtZVxuICBAcGFyYW0gW251bWJlcl06IEZyYW1lIGR1cmF0aW9uIGluIG1zXG4qL1xudmFyIHNwZWVkUGVyU2Vjb25kID0gZXhwb3J0cy5zcGVlZFBlclNlY29uZCA9IGZ1bmN0aW9uICh2ZWxvY2l0eSwgZnJhbWVEdXJhdGlvbikge1xuICByZXR1cm4gdmVsb2NpdHkgKiAoMTAwMCAvIGZyYW1lRHVyYXRpb24pO1xufTtcblxuLypcbiAgQ3JlYXRlIHN0ZXBwZWQgdmVyc2lvbiBvZiAwLTEgcHJvZ3Jlc3NcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICBAcGFyYW0gW2ludF06IE51bWJlciBvZiBzdGVwc1xuICBAcmV0dXJuIFtudW1iZXJdOiBTdGVwcGVkIHZhbHVlXG4qL1xudmFyIHN0ZXBQcm9ncmVzcyA9IGV4cG9ydHMuc3RlcFByb2dyZXNzID0gZnVuY3Rpb24gKHByb2dyZXNzLCBzdGVwcykge1xuICB2YXIgc2VnbWVudCA9IDEgLyAoc3RlcHMgLSAxKTtcbiAgdmFyIHRhcmdldCA9IDEgLSAxIC8gc3RlcHM7XG4gIHZhciBwcm9ncmVzc09mVGFyZ2V0ID0gTWF0aC5taW4ocHJvZ3Jlc3MgLyB0YXJnZXQsIDEpO1xuXG4gIHJldHVybiBNYXRoLmZsb29yKHByb2dyZXNzT2ZUYXJnZXQgLyBzZWdtZW50KSAqIHNlZ21lbnQ7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1NdlkyRnNZeTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096dEJRVUZCT3p0QlFVOUJMRWxCUVUwc1lVRkJZVHRCUVVOcVFpeExRVUZITEVOQlFVZzdRVUZEUVN4TFFVRkhMRU5CUVVnN1FVRkRRU3hMUVVGSExFTkJRVWc3UTBGSVNUczdRVUZOVGl4SlFVRk5MR0ZCUVdFc1ZVRkJReXhEUVVGRUxFVkJRVWtzUTBGQlNqdFRRVUZWTEV0QlFVc3NSMEZCVEN4RFFVRlRMRWxCUVVrc1EwRkJTanREUVVGdVFqczdPenM3T3pzN096czdPMEZCV1Zvc1NVRkJUU3gzUWtGQlVTeFZRVUZETEVOQlFVUTdUVUZCU1N3d1JFRkJTVHRUUVVGbExHbENRVUZwUWl4TFFVRkxMRXRCUVV3c1EwRkJWeXhGUVVGRkxFTkJRVVlzUjBGQlRTeEZRVUZGTEVOQlFVWXNSVUZCU3l4RlFVRkZMRU5CUVVZc1IwRkJUU3hGUVVGRkxFTkJRVVlzUTBGQk4wTTdRMEZCZGtJN096czdPenM3TzBGQlVXUXNTVUZCVFN3NFEwRkJiVUlzVlVGQlF5eFBRVUZFTzFOQlFXRXNWVUZCVlN4TFFVRkxMRVZCUVV3c1IwRkJWU3hIUVVGd1FqdERRVUZpT3pzN096czdPenM3T3pzN096czdPenM3T3p0QlFXOUNla0lzU1VGQlRTd3dRa0ZCVXl4VlFVRkRMRU5CUVVRc1JVRkJTU3hEUVVGS0xFVkJRVThzVVVGQlVEdFRRVUZ2UWl4SlFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGS0xFTkJRVVFzUjBGQlZTeFJRVUZXTzBOQlFYcENPenM3T3pzN096czdPenRCUVZkbUxFbEJRVTBzT0VKQlFWY3NWVUZCUXl4RFFVRkVMRVZCUVhWQ08wMUJRVzVDTERCRVFVRkpMREJDUVVGbE96czdRVUZGTjBNc1RVRkJTU3hyUWtGQlRTeERRVUZPTEVOQlFVb3NSVUZCWXp0QlFVTmFMRmRCUVU4c1YwRkJWeXhEUVVGWUxFVkJRV01zUTBGQlpDeERRVUZRT3pzN1FVRkVXU3hIUVVGa0xFMUJTVTg3UVVGRFRDeFZRVUZOTEZOQlFWTXNWMEZCVnl4RlFVRkZMRU5CUVVZc1JVRkJTeXhGUVVGRkxFTkJRVVlzUTBGQmVrSXNRMEZFUkR0QlFVVk1MRlZCUVUwc1UwRkJVeXhYUVVGWExFVkJRVVVzUTBGQlJpeEZRVUZMTEVWQlFVVXNRMEZCUml4RFFVRjZRaXhEUVVaRU8wRkJSMHdzVlVGQlRTeFRRVUZUTEdsQ1FVRkRMRU5CUVUwc1JVRkJSU3hEUVVGR0xFTkJRVkFzUjBGQlpTeFhRVUZYTEVWQlFVVXNRMEZCUml4RlFVRkxMRVZCUVVVc1EwRkJSaXhEUVVFdlFpeEhRVUZ6UXl4RFFVRjBReXhEUVVoV096dEJRVXRNTEdGQlFVOHNTMEZCU3l4SlFVRk1MRU5CUVZVc1UwRkJReXhSUVVGVkxFVkJRVmdzV1VGQmFVSXNVVUZCVlN4RlFVRXpRaXhaUVVGcFF5eFJRVUZWTEVWQlFUTkRMRU5CUVdwQ0xFTkJURXM3UzBGS1VEdERRVVp6UWpzN096czdPenM3T3pzN096dEJRVEJDYWtJc1NVRkJUU3h6UkVGQmRVSXNWVUZCUXl4UlFVRkVMRVZCUVZjc1NVRkJXQ3hGUVVGcFFpeEZRVUZxUWp0VFFVRjNRaXhEUVVGSExGRkJRVVlzUjBGQllTeEpRVUZpTEVkQlFYTkNMRmRCUVZjc1JVRkJXQ3hIUVVGcFFpeEpRVUY0UXp0RFFVRjRRanM3T3pzN096czdPenM3T3pzN1FVRmpOMElzU1VGQlRTeHpSRUZCZFVJc1ZVRkJReXhMUVVGRUxFVkJRVkVzU1VGQlVpeEZRVUZqTEVWQlFXUTdVMEZCY1VJc1EwRkJReXhSUVVGUkxFbEJRVklzUTBGQlJDeEpRVUZyUWl4TFFVRkxMRWxCUVV3c1EwRkJiRUk3UTBGQmNrSTdPenM3T3pzN096czdRVUZWTjBJc1NVRkJUU3huUlVGQk5FSXNWVUZCUXl4TlFVRkVMRVZCUVZNc1MwRkJWQ3hGUVVGblFpeFJRVUZvUWl4RlFVRTJRanRCUVVOd1JTeFZRVUZSTEdsQ1FVRnBRaXhMUVVGcVFpeERRVUZTTEVOQlJHOUZPenRCUVVkd1JTeFRRVUZQTzBGQlEwd3NUMEZCUnl4WFFVRlhMRXRCUVVzc1IwRkJUQ3hEUVVGVExFdEJRVlFzUTBGQldDeEhRVUUyUWl4UFFVRlBMRU5CUVZBN1FVRkRhRU1zVDBGQlJ5eFhRVUZYTEV0QlFVc3NSMEZCVEN4RFFVRlRMRXRCUVZRc1EwRkJXQ3hIUVVFMlFpeFBRVUZQTEVOQlFWQTdSMEZHYkVNc1EwRkliMFU3UTBGQk4wSTdPenM3T3pzN08wRkJaV3hETEVsQlFVMHNPRU5CUVcxQ0xGVkJRVU1zVDBGQlJEdFRRVUZoTEZWQlFWVXNSMEZCVml4SFFVRm5RaXhMUVVGTExFVkJRVXc3UTBGQk4wSTdPenM3T3pzN096dEJRVk42UWl4SlFVRk5MREJDUVVGVE8wMUJRVU1zTkVSQlFVMDdUVUZCUnl3MFJFRkJUVHRUUVVGTkxFdEJRVXNzVFVGQlRDeE5RVUZwUWl4TlFVRk5MRWRCUVU0c1EwRkJha0lzUjBGQk9FSXNSMEZCT1VJN1EwRkJkRUk3T3pzN096czdPenM3T3p0QlFWbG1MRWxCUVUwc2QwTkJRV2RDTEZWQlFVTXNUMEZCUkN4RlFVRlZMRkZCUVZZc1JVRkJkVUk3UVVGRGJFUXNUVUZCU1N4WFFVRlhMRTlCUVZnc1EwRkVPRU03UVVGRmJFUXNUVUZCVFN4WFFVRlhMRk5CUVZNc1MwRkJWQ3hEUVVGbExFZEJRV1lzUTBGQldDeERRVVkwUXp0QlFVZHNSQ3hOUVVGTkxGZEJRVmNzVTBGQlV5eERRVUZVTEVOQlFWZ3NRMEZJTkVNN096QkNRVWsxUWl3MlFrRkJhVUlzVTBGQlV5eERRVUZVTEVOQlFXcENMRVZCU2pSQ096dE5RVWsxUXl3NFFrRktORU03VFVGSmRFTXNaME5CU25ORE96czdRVUZOYkVRc1ZVRkJVU3hYUVVGWExFdEJRVmdzUTBGQlVpeERRVTVyUkRzN1FVRlJiRVFzVlVGQlVTeFJRVUZTTzBGQlEwRXNVMEZCU3l4SFFVRk1PMEZCUTBVc2EwSkJRVmtzUzBGQldpeERRVVJHTzBGQlJVVXNXVUZHUmp0QlFVUkJMRk5CU1Vzc1IwRkJURHRCUVVORkxHdENRVUZaTEV0QlFWb3NRMEZFUmp0QlFVVkZMRmxCUmtZN1FVRktRU3hUUVU5TExFZEJRVXc3UVVGRFJTeHJRa0ZCV1N4TFFVRmFMRU5CUkVZN1FVRkZSU3haUVVaR08wRkJVRUVzVTBGVlN5eEhRVUZNTzBGQlEwVXNhMEpCUVZrc1MwRkJXaXhEUVVSR08wRkJSVVVzV1VGR1JqdEJRVlpCTEVkQlVtdEVPenRCUVhWQ2JFUXNUVUZCU1N4SlFVRktMRVZCUVZVN1FVRkRVaXhuUWtGQldTeEpRVUZhTEVOQlJGRTdSMEZCVmpzN1FVRkpRU3hUUVVGUExGRkJRVkFzUTBFelFtdEVPME5CUVhaQ096czdPenM3T3pzN096czdRVUYzUTNSQ0xFbEJRVTBzT0VKQlFWY3NWVUZCUXl4TFFVRkVMRVZCUVZFc1IwRkJVaXhGUVVGaExFZEJRV0k3VTBGQmNVSXNTMEZCU3l4SFFVRk1MRU5CUVZNc1MwRkJTeXhIUVVGTUxFTkJRVk1zUzBGQlZDeEZRVUZuUWl4SFFVRm9RaXhEUVVGVUxFVkJRU3RDTEVkQlFTOUNPME5CUVhKQ096czdPenM3T3pzN08wRkJWV3BDTEVsQlFVMHNNRUpCUVZNc1ZVRkJReXhSUVVGRUxFVkJRVmNzVVVGQldDeEZRVUZ4UWl4UlFVRnlRanROUVVFclFpeHJSVUZCV1R0VFFVRk5MSE5DUVVGVkxGZEJRVmtzV1VGQldTeFhRVUZYTEZGQlFWZ3NRMEZCV2l4SFFVRnRReXhMUVVGTExFZEJRVXdzUTBGQlV5eFRRVUZVTEVWQlFXOUNMRkZCUVhCQ0xFTkJRVzVETzBOQlFYWkZPenM3T3pzN096dEJRVkZtTEVsQlFVMHNkME5CUVdkQ0xGVkJRVU1zUjBGQlJDeEZRVUZOTEdGQlFVNDdVMEZCZDBJc2FVSkJRVU1zUTBGQlRTeEhRVUZPTEVOQlFVUXNSMEZCWlN4UFFVRlBMRTlCUVU4c1lVRkJVQ3hEUVVGUUxFZEJRU3RDTEVOQlFUbERPME5CUVhoQ096czdPenM3T3p0QlFWRjBRaXhKUVVGTkxEQkRRVUZwUWl4VlFVRkRMRkZCUVVRc1JVRkJWeXhoUVVGWU8xTkJRVFpDTEZsQlFWa3NUMEZCVHl4aFFVRlFMRU5CUVZvN1EwRkJOMEk3T3pzN096czdPenRCUVZOMlFpeEpRVUZOTEhORFFVRmxMRlZCUVVNc1VVRkJSQ3hGUVVGWExFdEJRVmdzUlVGQmNVSTdRVUZETDBNc1RVRkJUU3hWUVVGVkxFdEJRVXNzVVVGQlVTeERRVUZTTEVOQlFVd3NRMEZFSzBJN1FVRkZMME1zVFVGQlRTeFRRVUZUTEVsQlFVc3NTVUZCU1N4TFFVRktMRU5CUmpKQ08wRkJSeTlETEUxQlFVMHNiVUpCUVcxQ0xFdEJRVXNzUjBGQlRDeERRVUZUTEZkQlFWY3NUVUZCV0N4RlFVRnRRaXhEUVVFMVFpeERRVUZ1UWl4RFFVaDVRenM3UVVGTEwwTXNVMEZCVHl4TFFVRkxMRXRCUVV3c1EwRkJWeXh0UWtGQmJVSXNUMEZCYmtJc1EwRkJXQ3hIUVVGNVF5eFBRVUY2UXl4RFFVeDNRenREUVVGeVFpSXNJbVpwYkdVaU9pSmpZV3hqTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMEwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCN1hHNGdJR2hoYzFCeWIzQmxjblI1TEZ4dUlDQnBjMDUxYlN4Y2JpQWdabWx1WkZaaGJIVmxRVzVrVlc1cGRDeGNiaUFnZEc5RVpXTnBiV0ZzWEc1OUlHWnliMjBnSnk0dmRYUnBiSE1uTzF4dVhHNWpiMjV6ZENCYVJWSlBYMUJQU1U1VUlEMGdlMXh1SUNCNE9pQXdMRnh1SUNCNU9pQXdMRnh1SUNCNk9pQXdYRzU5TzF4dVhHNWpiMjV6ZENCa2FYTjBZVzVqWlRGRUlEMGdLR0VzSUdJcElEMCtJRTFoZEdndVlXSnpLR0VnTFNCaUtUdGNibHh1THlwY2JpQWdRVzVuYkdVZ1ltVjBkMlZsYmlCd2IybHVkSE5jYmlBZ1hHNGdJRlJ5WVc1emJHRjBaWE1nZEdobElHaDVjRzkwYUdWMGFXTmhiQ0JzYVc1bElITnZJSFJvWVhRZ2RHaGxJQ2RtY205dEp5QmpiMjl5WkdsdVlYUmxjMXh1SUNCaGNtVWdZWFFnTUN3d1hHNGdJRnh1SUNCQWNHRnlZVzBnVzI5aWFtVmpkRjA2SUZnZ1lXNWtJRmtnWTI5dmNtUnBibUYwWlhNZ2IyWWdabkp2YlNCd2IybHVkRnh1SUNCQWNHRnlZVzBnVzI5aWFtVmpkRjA2SUZnZ1lXNWtJRmtnWTI5eVpHbHVZWFJsY3lCdlppQjBieUJ3YjJsdWRGeHVJQ0JBY21WMGRYSnVJRnR5WVdScFlXNWRPaUJCYm1kc1pTQmlaWFIzWldWdUlIUm9aU0IwZDI4Z2NHOXBiblJ6SUdsdUlISmhaR2xoYm5OY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ1lXNW5iR1VnUFNBb1lTd2dZaUE5SUZwRlVrOWZVRTlKVGxRcElEMCtJSEpoWkdsaGJuTlViMFJsWjNKbFpYTW9UV0YwYUM1aGRHRnVNaWhoTG5nZ0xTQmlMbmdzSUdFdWVTQXRJR0l1ZVNrcE8xeHVYRzR2S2x4dUlDQkRiMjUyWlhKMElHUmxaM0psWlhNZ2RHOGdjbUZrYVdGdWMxeHVJQ0JjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCV1lXeDFaU0JwYmlCa1pXZHlaV1Z6WEc0Z0lFQnlaWFIxY200Z1cyNTFiV0psY2wwNklGWmhiSFZsSUdsdUlISmhaR2xoYm5OY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ1pHVm5jbVZsYzFSdlVtRmthV0Z1Y3lBOUlDaGtaV2R5WldWektTQTlQaUJrWldkeVpXVnpJQ29nVFdGMGFDNVFTU0F2SURFNE1EdGNibHh1THlwY2JpQWdSR2xzWVhSbFhHNGdJRnh1SUNCRGFHRnVaMlVnZEdobElIQnliMmR5WlhOemFXOXVJR0psZEhkbFpXNGdZU0JoYm1RZ1lpQmhZMk52Y21ScGJtY2dkRzhnWkdsc1lYUnBiMjR1WEc0Z0lGeHVJQ0JUYnlCa2FXeGhkR2x2YmlBOUlEQXVOU0IzYjNWc1pDQmphR0Z1WjJWY2JpQWdYRzRnSUdFZ0xTMHRMUzB0TFMwdElHSmNiaUFnWEc0Z0lIUnZYRzRnSUZ4dUlDQmhJQzB0TFMwZ1lseHVJQ0JjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCUWNtVjJhVzkxY3lCMllXeDFaVnh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUVOMWNuSmxiblFnZG1Gc2RXVmNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJFYVd4aGRHVWdjSEp2WjNKbGMzTWdZbmtnZUZ4dUlDQkFjbVYwZFhKdUlGdHVkVzFpWlhKZE9pQlFjbVYyYVc5MWN5QjJZV3gxWlNCd2JIVnpJSFJvWlNCa2FXeGhkR1ZrSUdScFptWmxjbVZ1WTJWY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ1pHbHNZWFJsSUQwZ0tHRXNJR0lzSUdScGJHRjBhVzl1S1NBOVBpQmhJQ3NnS0NoaUlDMGdZU2tnS2lCa2FXeGhkR2x2YmlrN1hHNWNiaThxWEc0Z0lFUnBjM1JoYm1ObFhHNGdJRnh1SUNCU1pYUjFjbTV6SUhSb1pTQmthWE4wWVc1alpTQmlaWFIzWldWdUlIUjNieUJ1SUdScGJXVnVjMmx2Ym1Gc0lIQnZhVzUwY3k1Y2JpQWdYRzRnSUVCd1lYSmhiU0JiYjJKcVpXTjBMMjUxYldKbGNsMDZJSGdnWVc1a0lIa2diM0lnYW5WemRDQjRJRzltSUhCdmFXNTBJRUZjYmlBZ1FIQmhjbUZ0SUZ0dlltcGxZM1F2Ym5WdFltVnlYVG9nS0c5d2RHbHZibUZzS1RvZ2VDQmhibVFnZVNCdmNpQnFkWE4wSUhnZ2IyWWdjRzlwYm5RZ1FseHVJQ0JBY21WMGRYSnVJRnR1ZFcxaVpYSmRPaUJVYUdVZ1pHbHpkR0Z1WTJVZ1ltVjBkMlZsYmlCMGFHVWdkSGR2SUhCdmFXNTBjMXh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JrYVhOMFlXNWpaU0E5SUNoaExDQmlJRDBnV2tWU1QxOVFUMGxPVkNrZ1BUNGdlMXh1SUNBdkx5QXhSQ0JrYVcxbGJuTnBiMjV6WEc0Z0lHbG1JQ2hwYzA1MWJTaGhLU2tnZTF4dUlDQWdJSEpsZEhWeWJpQmthWE4wWVc1alpURkVLR0VzSUdJcE8xeHVYRzRnSUM4dklFMTFiSFJwTFdScGJXVnVjMmx2Ym1Gc1hHNGdJSDBnWld4elpTQjdYRzRnSUNBZ1kyOXVjM1FnZUVSbGJIUmhJRDBnWkdsemRHRnVZMlV4UkNoaExuZ3NJR0l1ZUNrN1hHNGdJQ0FnWTI5dWMzUWdlVVJsYkhSaElEMGdaR2x6ZEdGdVkyVXhSQ2hoTG5rc0lHSXVlU2s3WEc0Z0lDQWdZMjl1YzNRZ2VrUmxiSFJoSUQwZ0tHbHpUblZ0S0dFdWVpa3BJRDhnWkdsemRHRnVZMlV4UkNoaExub3NJR0l1ZWlrZ09pQXdPMXh1WEc0Z0lDQWdjbVYwZFhKdUlFMWhkR2d1YzNGeWRDZ29lRVJsYkhSaElDb3FJRElwSUNzZ0tIbEVaV3gwWVNBcUtpQXlLU0FySUNoNlJHVnNkR0VnS2lvZ01pa3BPMXh1SUNCOVhHNTlPMXh1WEc0dktseHVJQ0JXWVd4MVpTQnBiaUJ5WVc1blpTQm1jbTl0SUhCeWIyZHlaWE56WEc0Z0lGeHVJQ0JIYVhabGJpQmhJR3h2ZDJWeUlHeHBiV2wwSUdGdVpDQmhiaUIxY0hCbGNpQnNhVzFwZEN3Z2QyVWdjbVYwZFhKdUlIUm9aU0IyWVd4MVpTQjNhWFJvYVc1Y2JpQWdkR2hoZENCeVlXNW5aU0JoY3lCbGVIQnlaWE56WldRZ1lua2djSEp2WjNKbGMzTWdLR0VnYm5WdFltVnlJR1p5YjIwZ01DMHhLVnh1SUNCY2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQlVhR1VnY0hKdlozSmxjM01nWW1WMGQyVmxiaUJzYjNkbGNpQmhibVFnZFhCd1pYSWdiR2x0YVhSeklHVjRjSEpsYzNObFpDQXdMVEZjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCTWIzZGxjaUJzYVcxcGRDQnZaaUJ5WVc1blpWeHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRlZ3Y0dWeUlHeHBiV2wwSUc5bUlISmhibWRsWEc0Z0lFQnlaWFIxY200Z1cyNTFiV0psY2wwNklGWmhiSFZsSUdGeklHTmhiR04xYkdGMFpXUWdabkp2YlNCd2NtOW5jbVZ6Y3lCM2FYUm9hVzRnY21GdVoyVWdLRzV2ZENCc2FXMXBkR1ZrSUhkcGRHaHBiaUJ5WVc1blpTbGNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdaMlYwVm1Gc2RXVkdjbTl0VUhKdlozSmxjM01nUFNBb2NISnZaM0psYzNNc0lHWnliMjBzSUhSdktTQTlQaUFvTFNCd2NtOW5jbVZ6Y3lBcUlHWnliMjBwSUNzZ0tIQnliMmR5WlhOeklDb2dkRzhwSUNzZ1puSnZiVHRjYmx4dUx5cGNiaUFnVUhKdlozSmxjM01nZDJsMGFHbHVJR2RwZG1WdUlISmhibWRsWEc0Z0lGeHVJQ0JIYVhabGJpQmhJR3h2ZDJWeUlHeHBiV2wwSUdGdVpDQmhiaUIxY0hCbGNpQnNhVzFwZEN3Z2QyVWdjbVYwZFhKdUlIUm9aU0J3Y205bmNtVnpjMXh1SUNBb1pYaHdjbVZ6YzJWa0lHRnpJR0VnYm5WdFltVnlJREF0TVNrZ2NtVndjbVZ6Wlc1MFpXUWdZbmtnZEdobElHZHBkbVZ1SUhaaGJIVmxMQ0JoYm1SY2JpQWdiR2x0YVhRZ2RHaGhkQ0J3Y205bmNtVnpjeUIwYnlCM2FYUm9hVzRnTUMweExseHVJQ0JjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCV1lXeDFaU0IwYnlCbWFXNWtJSEJ5YjJkeVpYTnpJSGRwZEdocGJpQm5hWFpsYmlCeVlXNW5aVnh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUV4dmQyVnlJR3hwYldsMElGeHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRlZ3Y0dWeUlHeHBiV2wwWEc0Z0lFQnlaWFIxY200Z1cyNTFiV0psY2wwNklGQnliMmR5WlhOeklHOW1JSFpoYkhWbElIZHBkR2hwYmlCeVlXNW5aU0JoY3lCbGVIQnlaWE56WldRZ01DMHhYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR2RsZEZCeWIyZHlaWE56Um5KdmJWWmhiSFZsSUQwZ0tIWmhiSFZsTENCbWNtOXRMQ0IwYnlrZ1BUNGdLSFpoYkhWbElDMGdabkp2YlNrZ0x5QW9kRzhnTFNCbWNtOXRLVHRjYmx4dUx5cGNiaUFnVUc5cGJuUWdabkp2YlNCaGJtZHNaU0JoYm1RZ1pHbHpkR0Z1WTJWY2JpQWdYRzRnSUVCd1lYSmhiU0JiYjJKcVpXTjBYVG9nTWtRZ2NHOXBiblFnYjJZZ2IzSnBaMmx1WEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1FXNW5iR1VnWm5KdmJTQnZjbWxuYVc1Y2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQkVhWE4wWVc1alpTQm1jbTl0SUc5eWFXZHBibHh1SUNCQWNtVjBkWEp1SUZ0dlltcGxZM1JkT2lCRFlXeGpkV3hoZEdWa0lESkVJSEJ2YVc1MFhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElIQnZhVzUwUm5KdmJVRnVaMnhsUVc1a1JHbHpkR0Z1WTJVZ1BTQW9iM0pwWjJsdUxDQmhibWRzWlN3Z1pHbHpkR0Z1WTJVcElEMCtJSHRjYmlBZ1lXNW5iR1VnUFNCa1pXZHlaV1Z6Vkc5U1lXUnBZVzV6S0dGdVoyeGxLVHRjYmx4dUlDQnlaWFIxY200Z2UxeHVJQ0FnSUhnNklHUnBjM1JoYm1ObElDb2dUV0YwYUM1amIzTW9ZVzVuYkdVcElDc2diM0pwWjJsdUxuZ3NYRzRnSUNBZ2VUb2daR2x6ZEdGdVkyVWdLaUJOWVhSb0xuTnBiaWhoYm1kc1pTa2dLeUJ2Y21sbmFXNHVlVnh1SUNCOU8xeHVmVHRjYmx4dUx5cGNiaUFnUTI5dWRtVnlkQ0J5WVdScFlXNXpJSFJ2SUdSbFozSmxaWE5jYmlBZ1hHNGdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dWbUZzZFdVZ2FXNGdjbUZrYVdGdWMxeHVJQ0JBY21WMGRYSnVJRnR1ZFcxaVpYSmRPaUJXWVd4MVpTQnBiaUJrWldkeVpXVnpYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJSEpoWkdsaGJuTlViMFJsWjNKbFpYTWdQU0FvY21Ga2FXRnVjeWtnUFQ0Z2NtRmthV0Z1Y3lBcUlERTRNQ0F2SUUxaGRHZ3VVRWs3WEc1Y2JpOHFYRzRnSUZKbGRIVnliaUJ5WVc1a2IyMGdiblZ0WW1WeUlHSmxkSGRsWlc0Z2NtRnVaMlZjYmlBZ1hHNGdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhTQW9iM0IwYVc5dVlXd3BPaUJQZFhSd2RYUWdiV2x1YVcxMWJWeHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMGdLRzl3ZEdsdmJtRnNLVG9nVDNWMGNIVjBJRzFoZUdsdGRXMWNiaUFnUUhKbGRIVnliaUJiYm5WdFltVnlYVG9nVW1GdVpHOXRJRzUxYldKbGNpQjNhWFJvYVc0Z2NtRnVaMlVzSUc5eUlEQWdZVzVrSURFZ2FXWWdibTl1WlNCd2NtOTJhV1JsWkZ4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCeVlXNWtiMjBnUFNBb2JXbHVJRDBnTUN3Z2JXRjRJRDBnTVNrZ1BUNGdUV0YwYUM1eVlXNWtiMjBvS1NBcUlDaHRZWGdnTFNCdGFXNHBJQ3NnYldsdU8xeHVYRzR2S2x4dUlDQkRZV3hqZFd4aGRHVWdjbVZzWVhScGRtVWdkbUZzZFdWY2JpQWdYRzRnSUZSaGEyVnpJSFJvWlNCdmNHVnlZWFJ2Y2lCaGJtUWdkbUZzZFdVZ1puSnZiU0JoSUhOMGNtbHVaeXdnYVdVZ1hDSXJQVFZjSWl3Z1lXNWtJR0Z3Y0d4cFpYTmNiaUFnZEc4Z2RHaGxJR04xY25KbGJuUWdkbUZzZFdVZ2RHOGdjbVZ6YjJ4MlpTQmhJRzVsZHlCMFlYSm5aWFF1WEc0Z0lGeHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRU4xY25KbGJuUWdkbUZzZFdWY2JpQWdRSEJoY21GdElGdHpkSEpwYm1kZE9pQlNaV3hoZEdsMlpTQjJZV3gxWlZ4dUlDQkFjbVYwZFhKdUlGdHVkVzFpWlhKZE9pQk9aWGNnZG1Gc2RXVmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdjbVZzWVhScGRtVldZV3gxWlNBOUlDaGpkWEp5Wlc1MExDQnlaV3hoZEdsMlpTa2dQVDRnZTF4dUlDQnNaWFFnYm1WM1ZtRnNkV1VnUFNCamRYSnlaVzUwTzF4dUlDQmpiMjV6ZENCbGNYVmhkR2x2YmlBOUlISmxiR0YwYVhabExuTndiR2wwS0NjOUp5azdYRzRnSUdOdmJuTjBJRzl3WlhKaGRHOXlJRDBnWlhGMVlYUnBiMjViTUYwN1hHNGdJR3hsZENCN0lIVnVhWFFzSUhaaGJIVmxJSDBnUFNCbWFXNWtWbUZzZFdWQmJtUlZibWwwS0dWeGRXRjBhVzl1V3pGZEtUdGNibHh1SUNCMllXeDFaU0E5SUhCaGNuTmxSbXh2WVhRb2RtRnNkV1VwTzF4dVhHNGdJSE4zYVhSamFDQW9iM0JsY21GMGIzSXBJSHRjYmlBZ1kyRnpaU0FuS3ljNlhHNGdJQ0FnYm1WM1ZtRnNkV1VnS3owZ2RtRnNkV1U3WEc0Z0lDQWdZbkpsWVdzN1hHNGdJR05oYzJVZ0p5MG5PbHh1SUNBZ0lHNWxkMVpoYkhWbElDMDlJSFpoYkhWbE8xeHVJQ0FnSUdKeVpXRnJPMXh1SUNCallYTmxJQ2NxSnpwY2JpQWdJQ0J1WlhkV1lXeDFaU0FxUFNCMllXeDFaVHRjYmlBZ0lDQmljbVZoYXp0Y2JpQWdZMkZ6WlNBbkx5YzZYRzRnSUNBZ2JtVjNWbUZzZFdVZ0x6MGdkbUZzZFdVN1hHNGdJQ0FnWW5KbFlXczdYRzRnSUgxY2JpQWdYRzRnSUdsbUlDaDFibWwwS1NCN1hHNGdJQ0FnYm1WM1ZtRnNkV1VnS3owZ2RXNXBkRHRjYmlBZ2ZWeHVYRzRnSUhKbGRIVnliaUJ1WlhkV1lXeDFaVHRjYm4wN1hHNWNiaThxWEc0Z0lGSmxjM1J5YVdOMElIWmhiSFZsSUhSdklISmhibWRsWEc0Z0lGeHVJQ0JTWlhSMWNtNGdkbUZzZFdVZ2QybDBhR2x1SUhSb1pTQnlZVzVuWlNCdlppQnNiM2RsY2t4cGJXbDBJR0Z1WkNCMWNIQmxja3hwYldsMFhHNGdJRnh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZaaGJIVmxJSFJ2SUd0bFpYQWdkMmwwYUdsdUlISmhibWRsWEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1RHOTNaWElnYkdsdGFYUWdiMllnY21GdVoyVmNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJWY0hCbGNpQnNhVzFwZENCdlppQnlZVzVuWlZ4dUlDQkFjbVYwZFhKdUlGdHVkVzFpWlhKZE9pQldZV3gxWlNCaGN5QnNhVzFwZEdWa0lIZHBkR2hwYmlCbmFYWmxiaUJ5WVc1blpWeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnlaWE4wY21samRDQTlJQ2gyWVd4MVpTd2diV2x1TENCdFlYZ3BJRDArSUUxaGRHZ3ViV0Y0S0UxaGRHZ3ViV2x1S0haaGJIVmxMQ0J0WVhncExDQnRhVzRwTzF4dVhHNHZLbHh1SUNCR2NtRnRaWEpoZEdVdGFXNWtaWEJsYm1SbGJuUWdjMjF2YjNSb2FXNW5YRzVjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCT1pYY2dkbUZzZFdWY2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQlBiR1FnZG1Gc2RXVmNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJHY21GdFpTQmtkWEpoZEdsdmJseHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMGdLRzl3ZEdsdmJtRnNLVG9nVTIxdmIzUm9hVzVuSUNnd0lHbHpJRzV2Ym1VcFhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElITnRiMjkwYUNBOUlDaHVaWGRXWVd4MVpTd2diMnhrVm1Gc2RXVXNJR1IxY21GMGFXOXVMQ0J6Ylc5dmRHaHBibWNnUFNBd0tTQTlQaUIwYjBSbFkybHRZV3dvYjJ4a1ZtRnNkV1VnS3lBb1pIVnlZWFJwYjI0Z0tpQW9ibVYzVm1Gc2RXVWdMU0J2YkdSV1lXeDFaU2tnTHlCTllYUm9MbTFoZUNoemJXOXZkR2hwYm1jc0lHUjFjbUYwYVc5dUtTa3BPMXh1WEc0dktseHVJQ0JEYjI1MlpYSjBJSGdnY0dWeUlITmxZMjl1WkNCMGJ5QndaWElnWm5KaGJXVWdkbVZzYjJOcGRIa2dZbUZ6WldRZ2IyNGdabkJ6WEc0Z0lGeHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRlZ1YVhRZ2NHVnlJSE5sWTI5dVpGeHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRVp5WVcxbElHUjFjbUYwYVc5dUlHbHVJRzF6WEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUhOd1pXVmtVR1Z5Um5KaGJXVWdQU0FvZUhCekxDQm1jbUZ0WlVSMWNtRjBhVzl1S1NBOVBpQW9hWE5PZFcwb2VIQnpLU2tnUHlCNGNITWdMeUFvTVRBd01DQXZJR1p5WVcxbFJIVnlZWFJwYjI0cElEb2dNRHRjYmx4dUx5cGNiaUFnUTI5dWRtVnlkQ0IyWld4dlkybDBlU0JwYm5SdklIWmxiR2xqYVhSNUlIQmxjaUJ6WldOdmJtUmNiaUFnWEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1ZXNXBkQ0J3WlhJZ1puSmhiV1ZjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCR2NtRnRaU0JrZFhKaGRHbHZiaUJwYmlCdGMxeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnpjR1ZsWkZCbGNsTmxZMjl1WkNBOUlDaDJaV3h2WTJsMGVTd2dabkpoYldWRWRYSmhkR2x2YmlrZ1BUNGdkbVZzYjJOcGRIa2dLaUFvTVRBd01DQXZJR1p5WVcxbFJIVnlZWFJwYjI0cE8xeHVYRzR2S2x4dUlDQkRjbVZoZEdVZ2MzUmxjSEJsWkNCMlpYSnphVzl1SUc5bUlEQXRNU0J3Y205bmNtVnpjMXh1SUNCY2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQkRkWEp5Wlc1MElIWmhiSFZsWEc0Z0lFQndZWEpoYlNCYmFXNTBYVG9nVG5WdFltVnlJRzltSUhOMFpYQnpYRzRnSUVCeVpYUjFjbTRnVzI1MWJXSmxjbDA2SUZOMFpYQndaV1FnZG1Gc2RXVmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdjM1JsY0ZCeWIyZHlaWE56SUQwZ0tIQnliMmR5WlhOekxDQnpkR1Z3Y3lrZ1BUNGdlMXh1SUNCamIyNXpkQ0J6WldkdFpXNTBJRDBnTVNBdklDaHpkR1Z3Y3lBdElERXBPMXh1SUNCamIyNXpkQ0IwWVhKblpYUWdQU0F4SUMwZ0tERWdMeUJ6ZEdWd2N5azdYRzRnSUdOdmJuTjBJSEJ5YjJkeVpYTnpUMlpVWVhKblpYUWdQU0JOWVhSb0xtMXBiaWh3Y205bmNtVnpjeUF2SUhSaGNtZGxkQ3dnTVNrN1hHNWNiaUFnY21WMGRYSnVJRTFoZEdndVpteHZiM0lvY0hKdlozSmxjM05QWmxSaGNtZGxkQ0F2SUhObFoyMWxiblFwSUNvZ2MyVm5iV1Z1ZER0Y2JuMDdJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvY2FsYy5qc1xuICoqIG1vZHVsZSBpZCA9IDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8qXG4gIERldGVjdCBhbmQgbG9hZCBhbiBhcHByb3ByaWF0ZSBjbG9jayBzZXR0aW5nIGZvciB0aGUgZW52aXJvbm1lbnRcbiovXG52YXIgaGFzUkFGID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA/IHRydWUgOiBmYWxzZTtcblxudmFyIG9uTmV4dEZyYW1lID0gdm9pZCAwO1xuXG5pZiAoaGFzUkFGKSB7XG4gIG9uTmV4dEZyYW1lID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spO1xuICB9O1xufSBlbHNlIHtcbiAgKGZ1bmN0aW9uICgpIHtcbiAgICAvKlxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHBvbHlmaWxsXG4gICAgICBcbiAgICAgIEZvciBJRTgvOSBGbGluc3RvbmVzIGFuZCBub24tYnJvd3NlciBlbnZpcm9ubWVudHNcbiAgICAgICBUYWtlbiBmcm9tIFBhdWwgSXJpc2guIFdlJ3ZlIHN0cmlwcGVkIG91dCBjYW5jZWxBbmltYXRpb25GcmFtZSBjaGVja3MgYmVjYXVzZSB3ZSBkb24ndCBmb3ggd2l0aCB0aGF0XG4gICAgICBcbiAgICAgIGh0dHA6Ly9wYXVsaXJpc2guY29tLzIwMTEvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1hbmltYXRpbmcvXG4gICAgICBodHRwOi8vbXkub3BlcmEuY29tL2Vtb2xsZXIvYmxvZy8yMDExLzEyLzIwL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtZXItYW5pbWF0aW5nXG4gICAgICAgXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGwgYnkgRXJpayBNw7ZsbGVyLiBmaXhlcyBmcm9tIFBhdWwgSXJpc2ggYW5kIFRpbm8gWmlqZGVsXG4gICAgICAgXG4gICAgICBNSVQgbGljZW5zZVxuICAgICovXG4gICAgdmFyIGxhc3RUaW1lID0gMDtcblxuICAgIG9uTmV4dEZyYW1lID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICB2YXIgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgIHZhciB0aW1lVG9DYWxsID0gTWF0aC5tYXgoMCwgMTYuNyAtIChjdXJyZW50VGltZSAtIGxhc3RUaW1lKSk7XG5cbiAgICAgIGxhc3RUaW1lID0gY3VycmVudFRpbWUgKyB0aW1lVG9DYWxsO1xuXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGxhc3RUaW1lKTtcbiAgICAgIH0sIHRpbWVUb0NhbGwpO1xuICAgIH07XG4gIH0pKCk7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IG9uTmV4dEZyYW1lO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTltY21GdFpYTjVibU12YjI0dGJtVjRkQzFtY21GdFpTNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN1FVRkhRU3hKUVVGTkxGTkJRVk1zVDBGQlVTeE5RVUZRTEV0QlFXdENMRmRCUVd4Q0xFbEJRV2xETEU5QlFVOHNjVUpCUVZBc1IwRkJaME1zU1VGQmJFVXNSMEZCZVVVc1MwRkJla1U3TzBGQlJXWXNTVUZCU1N4dlFrRkJTanM3UVVGRlFTeEpRVUZKTEUxQlFVb3NSVUZCV1R0QlFVTldMR2RDUVVGakxGVkJRVU1zVVVGQlJEdFhRVUZqTEU5QlFVOHNjVUpCUVZBc1EwRkJOa0lzVVVGQk4wSTdSMEZCWkN4RFFVUktPME5CUVZvc1RVRkhUenM3T3pzN096czdPenM3T3pzN08wRkJaVXdzVVVGQlNTeFhRVUZYTEVOQlFWZzdPMEZCUlVvc2EwSkJRV01zVlVGQlF5eFJRVUZFTEVWQlFXTTdRVUZETVVJc1ZVRkJUU3hqUVVGakxFbEJRVWtzU1VGQlNpeEhRVUZYTEU5QlFWZ3NSVUZCWkN4RFFVUnZRanRCUVVVeFFpeFZRVUZOTEdGQlFXRXNTMEZCU3l4SFFVRk1MRU5CUVZNc1EwRkJWQ3hGUVVGWkxGRkJRVkVzWTBGQll5eFJRVUZrTEVOQlFWSXNRMEZCZWtJc1EwRkdiMEk3TzBGQlNURkNMR2xDUVVGWExHTkJRV01zVlVGQlpDeERRVXBsT3p0QlFVMHhRaXhwUWtGQlZ6dGxRVUZOTEZOQlFWTXNVVUZCVkR0UFFVRk9MRVZCUVRCQ0xGVkJRWEpETEVWQlRqQkNPMHRCUVdRN1QwRnFRbFE3UTBGSVVEczdhMEpCT0VKbElpd2labWxzWlNJNkltOXVMVzVsZUhRdFpuSmhiV1V1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUx5cGNiaUFnUkdWMFpXTjBJR0Z1WkNCc2IyRmtJR0Z1SUdGd2NISnZjSEpwWVhSbElHTnNiMk5ySUhObGRIUnBibWNnWm05eUlIUm9aU0JsYm5acGNtOXViV1Z1ZEZ4dUtpOWNibU52Ym5OMElHaGhjMUpCUmlBOUlDaDBlWEJsYjJZZ2QybHVaRzkzSUNFOVBTQW5kVzVrWldacGJtVmtKeUFtSmlCM2FXNWtiM2N1Y21WeGRXVnpkRUZ1YVcxaGRHbHZia1p5WVcxbEtTQS9JSFJ5ZFdVZ09pQm1ZV3h6WlR0Y2JseHViR1YwSUc5dVRtVjRkRVp5WVcxbE8xeHVYRzVwWmlBb2FHRnpVa0ZHS1NCN1hHNGdJRzl1VG1WNGRFWnlZVzFsSUQwZ0tHTmhiR3hpWVdOcktTQTlQaUIzYVc1a2IzY3VjbVZ4ZFdWemRFRnVhVzFoZEdsdmJrWnlZVzFsS0dOaGJHeGlZV05yS1R0Y2JseHVmU0JsYkhObElIdGNiaUFnTHlwY2JpQWdJQ0J5WlhGMVpYTjBRVzVwYldGMGFXOXVSbkpoYldVZ2NHOXNlV1pwYkd4Y2JpQWdJQ0JjYmlBZ0lDQkdiM0lnU1VVNEx6a2dSbXhwYm5OMGIyNWxjeUJoYm1RZ2JtOXVMV0p5YjNkelpYSWdaVzUyYVhKdmJtMWxiblJ6WEc1Y2JpQWdJQ0JVWVd0bGJpQm1jbTl0SUZCaGRXd2dTWEpwYzJndUlGZGxKM1psSUhOMGNtbHdjR1ZrSUc5MWRDQmpZVzVqWld4QmJtbHRZWFJwYjI1R2NtRnRaU0JqYUdWamEzTWdZbVZqWVhWelpTQjNaU0JrYjI0bmRDQm1iM2dnZDJsMGFDQjBhR0YwWEc0Z0lDQWdYRzRnSUNBZ2FIUjBjRG92TDNCaGRXeHBjbWx6YUM1amIyMHZNakF4TVM5eVpYRjFaWE4wWVc1cGJXRjBhVzl1Wm5KaGJXVXRabTl5TFhOdFlYSjBMV0Z1YVcxaGRHbHVaeTljYmlBZ0lDQm9kSFJ3T2k4dmJYa3ViM0JsY21FdVkyOXRMMlZ0YjJ4c1pYSXZZbXh2Wnk4eU1ERXhMekV5THpJd0wzSmxjWFZsYzNSaGJtbHRZWFJwYjI1bWNtRnRaUzFtYjNJdGMyMWhjblF0WlhJdFlXNXBiV0YwYVc1blhHNGdJQ0FnSUZ4dUlDQWdJSEpsY1hWbGMzUkJibWx0WVhScGIyNUdjbUZ0WlNCd2IyeDVabWxzYkNCaWVTQkZjbWxySUUzRHRteHNaWEl1SUdacGVHVnpJR1p5YjIwZ1VHRjFiQ0JKY21semFDQmhibVFnVkdsdWJ5QmFhV3BrWld4Y2JpQWdJQ0FnWEc0Z0lDQWdUVWxVSUd4cFkyVnVjMlZjYmlBZ0tpOWNiaUFnYkdWMElHeGhjM1JVYVcxbElEMGdNRHRjYmx4dUlDQnZiazVsZUhSR2NtRnRaU0E5SUNoallXeHNZbUZqYXlrZ1BUNGdlMXh1SUNBZ0lHTnZibk4wSUdOMWNuSmxiblJVYVcxbElEMGdibVYzSUVSaGRHVW9LUzVuWlhSVWFXMWxLQ2s3WEc0Z0lDQWdZMjl1YzNRZ2RHbHRaVlJ2UTJGc2JDQTlJRTFoZEdndWJXRjRLREFzSURFMkxqY2dMU0FvWTNWeWNtVnVkRlJwYldVZ0xTQnNZWE4wVkdsdFpTa3BPMXh1WEc0Z0lDQWdiR0Z6ZEZScGJXVWdQU0JqZFhKeVpXNTBWR2x0WlNBcklIUnBiV1ZVYjBOaGJHdzdYRzVjYmlBZ0lDQnpaWFJVYVcxbGIzVjBLQ2dwSUQwK0lHTmhiR3hpWVdOcktHeGhjM1JVYVcxbEtTd2dkR2x0WlZSdlEyRnNiQ2s3WEc0Z0lIMDdYRzU5WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUc5dVRtVjRkRVp5WVcxbE95SmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9mcmFtZXN5bmMvb24tbmV4dC1mcmFtZS5qc1xuICoqIG1vZHVsZSBpZCA9IDEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZVJlbmRlclN0ZXA7XG5mdW5jdGlvbiBjcmVhdGVSZW5kZXJTdGVwKHN0YXJ0UmVuZGVyTG9vcCkge1xuICAvKipcbiAgICogV2UgdXNlIHR3byBhcnJheXMsIG9uZSBmb3IgdGhpcyBmcmFtZSBhbmQgb25lIHRvIHF1ZXVlIGZvciB0aGVcbiAgICogbmV4dCBmcmFtZSwgcmV1c2luZyBlYWNoIHRvIGF2b2lkIEdDLlxuICAgKiBAdHlwZSB7QXJyYXl9XG4gICAqL1xuICB2YXIgZnVuY3Rpb25zVG9SdW4gPSBbXTtcbiAgdmFyIGZ1bmN0aW9uc1RvUnVuTmV4dEZyYW1lID0gW107XG5cbiAgcmV0dXJuIHtcbiAgICBzY2hlZHVsZTogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICBzdGFydFJlbmRlckxvb3AoKTtcbiAgICAgIC8vIElmIHRoaXMgY2FsbGJhY2sgaXNuJ3QgYWxyZWFkeSBzY2hlZHVsZWQgdG8gcnVuIG5leHQgZnJhbWVcbiAgICAgIGlmIChmdW5jdGlvbnNUb1J1bk5leHRGcmFtZS5pbmRleE9mKGNhbGxiYWNrKSA9PT0gLTEpIHtcbiAgICAgICAgZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUucHVzaChjYWxsYmFjayk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGNhbmNlbDogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICB2YXIgaW5kZXhPZkNhbGxiYWNrID0gZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUuaW5kZXhPZihjYWxsYmFjayk7XG4gICAgICBpZiAoaW5kZXhPZkNhbGxiYWNrICE9PSAtMSkge1xuICAgICAgICBmdW5jdGlvbnNUb1J1bk5leHRGcmFtZS5zcGxpY2UoaW5kZXhPZkNhbGxiYWNrLCAxKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgcHJvY2VzczogZnVuY3Rpb24gKCkge1xuXG4gICAgICAvLyBDbGVhciBuZXh0IGZyYW1lIGxpc3RcbiAgICAgIHZhciBfcmVmID0gW2Z1bmN0aW9uc1RvUnVuTmV4dEZyYW1lLCBmdW5jdGlvbnNUb1J1bl07XG4gICAgICAvLyBTd2FwIHRoaXMgZnJhbWUgYW5kIG5leHQgZnJhbWUgYXJyYXlzIHRvIGF2b2lkIEdDXG5cbiAgICAgIGZ1bmN0aW9uc1RvUnVuID0gX3JlZlswXTtcbiAgICAgIGZ1bmN0aW9uc1RvUnVuTmV4dEZyYW1lID0gX3JlZlsxXTtcbiAgICAgIGZ1bmN0aW9uc1RvUnVuTmV4dEZyYW1lLmxlbmd0aCA9IDA7XG5cbiAgICAgIC8vIEV4ZWN1dGUgYWxsIG9mIHRoaXMgZnJhbWUncyBmdW5jdGlvbnNcbiAgICAgIHZhciBudW1UaGlzRnJhbWUgPSBmdW5jdGlvbnNUb1J1bi5sZW5ndGg7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVRoaXNGcmFtZTsgaSsrKSB7XG4gICAgICAgIGZ1bmN0aW9uc1RvUnVuW2ldKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTltY21GdFpYTjVibU12WTNKbFlYUmxMWEpsYm1SbGNpMXpkR1Z3TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096dHJRa0ZCZDBJN1FVRkJWQ3hUUVVGVExHZENRVUZVTEVOQlFUQkNMR1ZCUVRGQ0xFVkJRVEpET3pzN096czdRVUZOZUVRc1RVRkJTU3hwUWtGQmFVSXNSVUZCYWtJc1EwRk9iMFE3UVVGUGVFUXNUVUZCU1N3d1FrRkJNRUlzUlVGQk1VSXNRMEZRYjBRN08wRkJVM2hFTEZOQlFVODdRVUZEVEN4alFVRlZMRlZCUVVNc1VVRkJSQ3hGUVVGak8wRkJRM1JDT3p0QlFVUnpRaXhWUVVkc1FpeDNRa0ZCZDBJc1QwRkJlRUlzUTBGQlowTXNVVUZCYUVNc1RVRkJPRU1zUTBGQlF5eERRVUZFTEVWQlFVazdRVUZEY0VRc1owTkJRWGRDTEVsQlFYaENMRU5CUVRaQ0xGRkJRVGRDTEVWQlJHOUVPMDlCUVhSRU8wdEJTRkU3TzBGQlVWWXNXVUZCVVN4VlFVRkRMRkZCUVVRc1JVRkJZenRCUVVOd1FpeFZRVUZOTEd0Q1FVRnJRaXgzUWtGQmQwSXNUMEZCZUVJc1EwRkJaME1zVVVGQmFFTXNRMEZCYkVJc1EwRkVZenRCUVVWd1FpeFZRVUZKTEc5Q1FVRnZRaXhEUVVGRExFTkJRVVFzUlVGQlNUdEJRVU14UWl4blEwRkJkMElzVFVGQmVFSXNRMEZCSzBJc1pVRkJMMElzUlVGQlowUXNRMEZCYUVRc1JVRkVNRUk3VDBGQk5VSTdTMEZHVFRzN1FVRlBVaXhoUVVGVExGbEJRVTA3T3p0cFFrRkZLMElzUTBGQlF5eDFRa0ZCUkN4RlFVRXdRaXhqUVVFeFFqczdRVUZHTDBJN1FVRkZXaXdyUWtGR1dUdEJRVVZKTEhkRFFVWktPMEZCUzJJc09FSkJRWGRDTEUxQlFYaENMRWRCUVdsRExFTkJRV3BET3pzN1FVRk1ZU3hWUVZGUUxHVkJRV1VzWlVGQlpTeE5RVUZtTEVOQlVsSTdRVUZUWWl4WFFVRkxMRWxCUVVrc1NVRkJTU3hEUVVGS0xFVkJRVThzU1VGQlNTeFpRVUZLTEVWQlFXdENMRWRCUVd4RExFVkJRWFZETzBGQlEzSkRMSFZDUVVGbExFTkJRV1lzU1VGRWNVTTdUMEZCZGtNN1MwRlVUenRIUVdoQ1dDeERRVlIzUkR0RFFVRXpReUlzSW1acGJHVWlPaUpqY21WaGRHVXRjbVZ1WkdWeUxYTjBaWEF1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaVpYaHdiM0owSUdSbFptRjFiSFFnWm5WdVkzUnBiMjRnWTNKbFlYUmxVbVZ1WkdWeVUzUmxjQ2h6ZEdGeWRGSmxibVJsY2t4dmIzQXBJSHRjYmlBZ0x5b3FYRzRnSUNBcUlGZGxJSFZ6WlNCMGQyOGdZWEp5WVhsekxDQnZibVVnWm05eUlIUm9hWE1nWm5KaGJXVWdZVzVrSUc5dVpTQjBieUJ4ZFdWMVpTQm1iM0lnZEdobFhHNGdJQ0FxSUc1bGVIUWdabkpoYldVc0lISmxkWE5wYm1jZ1pXRmphQ0IwYnlCaGRtOXBaQ0JIUXk1Y2JpQWdJQ29nUUhSNWNHVWdlMEZ5Y21GNWZWeHVJQ0FnS2k5Y2JpQWdiR1YwSUdaMWJtTjBhVzl1YzFSdlVuVnVJRDBnVzEwN1hHNGdJR3hsZENCbWRXNWpkR2x2Ym5OVWIxSjFiazVsZUhSR2NtRnRaU0E5SUZ0ZE8xeHVYRzRnSUhKbGRIVnliaUI3WEc0Z0lDQWdjMk5vWldSMWJHVTZJQ2hqWVd4c1ltRmpheWtnUFQ0Z2UxeHVJQ0FnSUNBZ2MzUmhjblJTWlc1a1pYSk1iMjl3S0NrN1hHNGdJQ0FnSUNBdkx5QkpaaUIwYUdseklHTmhiR3hpWVdOcklHbHpiaWQwSUdGc2NtVmhaSGtnYzJOb1pXUjFiR1ZrSUhSdklISjFiaUJ1WlhoMElHWnlZVzFsWEc0Z0lDQWdJQ0JwWmlBb1puVnVZM1JwYjI1elZHOVNkVzVPWlhoMFJuSmhiV1V1YVc1a1pYaFBaaWhqWVd4c1ltRmpheWtnUFQwOUlDMHhLU0I3WEc0Z0lDQWdJQ0FnSUdaMWJtTjBhVzl1YzFSdlVuVnVUbVY0ZEVaeVlXMWxMbkIxYzJnb1kyRnNiR0poWTJzcE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgwc1hHNWNiaUFnSUNCallXNWpaV3c2SUNoallXeHNZbUZqYXlrZ1BUNGdlMXh1SUNBZ0lDQWdZMjl1YzNRZ2FXNWtaWGhQWmtOaGJHeGlZV05ySUQwZ1puVnVZM1JwYjI1elZHOVNkVzVPWlhoMFJuSmhiV1V1YVc1a1pYaFBaaWhqWVd4c1ltRmpheWs3WEc0Z0lDQWdJQ0JwWmlBb2FXNWtaWGhQWmtOaGJHeGlZV05ySUNFOVBTQXRNU2tnZTF4dUlDQWdJQ0FnSUNCbWRXNWpkR2x2Ym5OVWIxSjFiazVsZUhSR2NtRnRaUzV6Y0d4cFkyVW9hVzVrWlhoUFprTmhiR3hpWVdOckxDQXhLVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlMRnh1WEc0Z0lDQWdjSEp2WTJWemN6b2dLQ2tnUFQ0Z2UxeHVJQ0FnSUNBZ0x5OGdVM2RoY0NCMGFHbHpJR1p5WVcxbElHRnVaQ0J1WlhoMElHWnlZVzFsSUdGeWNtRjVjeUIwYnlCaGRtOXBaQ0JIUTF4dUlDQWdJQ0FnVzJaMWJtTjBhVzl1YzFSdlVuVnVMQ0JtZFc1amRHbHZibk5VYjFKMWJrNWxlSFJHY21GdFpWMGdQU0JiWm5WdVkzUnBiMjV6Vkc5U2RXNU9aWGgwUm5KaGJXVXNJR1oxYm1OMGFXOXVjMVJ2VW5WdVhUdGNibHh1SUNBZ0lDQWdMeThnUTJ4bFlYSWdibVY0ZENCbWNtRnRaU0JzYVhOMFhHNGdJQ0FnSUNCbWRXNWpkR2x2Ym5OVWIxSjFiazVsZUhSR2NtRnRaUzVzWlc1bmRHZ2dQU0F3TzF4dVhHNGdJQ0FnSUNBdkx5QkZlR1ZqZFhSbElHRnNiQ0J2WmlCMGFHbHpJR1p5WVcxbEozTWdablZ1WTNScGIyNXpYRzRnSUNBZ0lDQmpiMjV6ZENCdWRXMVVhR2x6Um5KaGJXVWdQU0JtZFc1amRHbHZibk5VYjFKMWJpNXNaVzVuZEdnN1hHNGdJQ0FnSUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElHNTFiVlJvYVhOR2NtRnRaVHNnYVNzcktTQjdYRzRnSUNBZ0lDQWdJR1oxYm1OMGFXOXVjMVJ2VW5WdVcybGRLQ2s3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmVnh1SUNCOU8xeHVmU0pkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvZnJhbWVzeW5jL2NyZWF0ZS1yZW5kZXItc3RlcC5qc1xuICoqIG1vZHVsZSBpZCA9IDExXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgQ0FNRUxfQ0FTRV9QQVRURVJOID0gLyhbYS16XSkoW0EtWl0pL2c7XG52YXIgUkVQTEFDRV9URU1QTEFURSA9ICckMS0kMic7XG52YXIgSEFTX1BFUkZPUk1BTkNFX05PVyA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCcgJiYgcGVyZm9ybWFuY2Uubm93O1xuXG4vKlxuICBHZXQgdmFyIHR5cGUgYXMgc3RyaW5nXG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbc3RyaW5nXTogUmV0dXJucywgZm9yIGluc3RhbmNlICdPYmplY3QnIGlmIFtvYmplY3QgT2JqZWN0XVxuKi9cbnZhciB2YXJUeXBlID0gZnVuY3Rpb24gKHZhcmlhYmxlKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFyaWFibGUpLnNsaWNlKDgsIC0xKTtcbn07XG5cbi8qXG4gIENvbnZlcnQgY2FtZWxDYXNlIHRvIGRhc2gtY2FzZVxuXG4gIEBwYXJhbSBbc3RyaW5nXVxuICBAcmV0dXJuIFtzdHJpbmddXG4qL1xudmFyIGNhbWVsVG9EYXNoID0gZXhwb3J0cy5jYW1lbFRvRGFzaCA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKENBTUVMX0NBU0VfUEFUVEVSTiwgUkVQTEFDRV9URU1QTEFURSkudG9Mb3dlckNhc2UoKTtcbn07XG5cbi8qXG4gIENyZWF0ZSBhIGZ1bmN0aW9uIHN0cmluZ1xuXG4gICcyMHB4JywgJ3RyYW5zbGF0ZScgLT4gJ3RyYW5zbGF0ZSgyMHB4KSdcblxuICBAcGFyYW0gW3N0cmluZ11cbiAgQHBhcmFtIFtzdHJpbmddXG4gIEByZXR1cm4gW3N0cmluZ11cbiovXG52YXIgY3JlYXRlRnVuY3Rpb25TdHJpbmcgPSBleHBvcnRzLmNyZWF0ZUZ1bmN0aW9uU3RyaW5nID0gZnVuY3Rpb24gKHZhbHVlLCBwcmVmaXgpIHtcbiAgcmV0dXJuIHByZWZpeCArICcoJyArIHZhbHVlICsgJyknO1xufTtcblxuLypcbiAgR2VuZXJhdGUgY3VycmVudCB0aW1lc3RhbXBcbiAgXG4gIEByZXR1cm4gW3RpbWVzdGFtcF06IEN1cnJlbnQgVU5JWCB0aW1lc3RhbXBcbiovXG52YXIgY3VycmVudFRpbWUgPSBleHBvcnRzLmN1cnJlbnRUaW1lID0gSEFTX1BFUkZPUk1BTkNFX05PVyA/IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHBlcmZvcm1hbmNlLm5vdygpO1xufSA6IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xufTtcblxuLypcbiAgQ2hlY2sgaWYgb2JqZWN0IGhhcyBwcm9wZXJ0eSBhbmQgaXQgaXNuJ3QgdW5kZWZpbmVkXG5cbiAgQHBhcmFtIFtvYmplY3RdXG4gIEBwYXJhbSBbc3RyaW5nXVxuICBAcmV0dXJuIFtib29sZWFuXVxuKi9cbnZhciBoYXNQcm9wZXJ0eSA9IGV4cG9ydHMuaGFzUHJvcGVydHkgPSBmdW5jdGlvbiAob2JqZWN0LCBwcm9wZXJ0eU5hbWUpIHtcbiAgcmV0dXJuIG9iamVjdC5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eU5hbWUpICYmIG9iamVjdFtwcm9wZXJ0eU5hbWVdICE9PSB1bmRlZmluZWQ7XG59O1xuXG4vKlxuICBJcyB1dGlscyB2YXIgYW4gYXJyYXkgPyBcbiAgXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHV0aWxzLnZhclR5cGUgPT09ICdBcnJheSdcbiovXG52YXIgaXNBcnJheSA9IGV4cG9ydHMuaXNBcnJheSA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgcmV0dXJuIHZhclR5cGUoYXJyKSA9PT0gJ0FycmF5Jztcbn07XG5cbi8qXG4gIElzIHV0aWxzIHZhciBhIGZ1bmN0aW9uID8gXG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB1dGlscy52YXJUeXBlID09PSAnRnVuY3Rpb24nXG4qL1xudmFyIGlzRnVuYyA9IGV4cG9ydHMuaXNGdW5jID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdmFyVHlwZShvYmopID09PSAnRnVuY3Rpb24nO1xufTtcblxuLypcbiAgSXMgdXRpbHMgdmFyIGEgbnVtYmVyP1xuICBcbiAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mID09PSAnbnVtYmVyJ1xuKi9cbnZhciBpc051bSA9IGV4cG9ydHMuaXNOdW0gPSBmdW5jdGlvbiAobnVtKSB7XG4gIHJldHVybiB0eXBlb2YgbnVtID09PSAnbnVtYmVyJztcbn07XG5cbi8qXG4gIElzIHV0aWxzIHZhciBhbiBvYmplY3Q/XG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2YgPT09ICdvYmplY3QnXG4qL1xudmFyIGlzT2JqID0gZXhwb3J0cy5pc09iaiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdvYmplY3QnO1xufTtcblxuLypcbiAgSXMgdXRpbHMgYSByZWxhdGl2ZSB2YWx1ZSBhc3NpZ25tZW50P1xuICBcbiAgQHBhcmFtIFtzdHJpbmddOiBWYXJpYWJsZSB0byB0ZXN0XG4gIEByZXR1cm4gW2Jvb2xlYW5dOiBJZiB1dGlscyBsb29rcyBsaWtlIGEgcmVsYXRpdmUgdmFsdWUgYXNzaWdubWVudFxuKi9cbnZhciBpc1JlbGF0aXZlVmFsdWUgPSBleHBvcnRzLmlzUmVsYXRpdmVWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgJiYgdmFsdWUuaW5kZXhPZiAmJiB2YWx1ZS5pbmRleE9mKCc9JykgPiAwID8gdHJ1ZSA6IGZhbHNlO1xufTtcblxuLypcbiAgSXMgdXRpbHMgdmFyIGEgc3RyaW5nID8gXG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJ1xuKi9cbnZhciBpc1N0cmluZyA9IGV4cG9ydHMuaXNTdHJpbmcgPSBmdW5jdGlvbiAoc3RyKSB7XG4gIHJldHVybiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJztcbn07XG5cbi8qXG4gIFNwbGl0IGNvbW1hLWRlbGltaXRlZCBzdHJpbmdcblxuICBcImZvbyxiYXJcIiAtPiBbXCJmb29cIiwgXCJiYXJcIl1cblxuICBAcGFyYW0gW3N0cmluZ11cbiAgQHJldHVybiBbYXJyYXldXG4qL1xudmFyIHNwbGl0Q29tbWFEZWxpbWl0ZWQgPSBleHBvcnRzLnNwbGl0Q29tbWFEZWxpbWl0ZWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIGlzU3RyaW5nKHZhbHVlKSA/IHZhbHVlLnNwbGl0KC8sXFxzKi8pIDogW3ZhbHVlXTtcbn07XG5cbi8qXG4gIFNwbGl0IHNwYWNlLWRlbGltaXRlZCBzdHJpbmdcblxuICBcImZvbyBiYXJcIiAtPiBbXCJmb29cIiwgXCJiYXJcIl1cblxuICBAcGFyYW0gW3N0cmluZ11cbiAgQHJldHVybiBbYXJyYXldXG4qL1xudmFyIHNwbGl0U3BhY2VEZWxpbWl0ZWQgPSBleHBvcnRzLnNwbGl0U3BhY2VEZWxpbWl0ZWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIGlzU3RyaW5nKHZhbHVlKSA/IHZhbHVlLnNwbGl0KCcgJykgOiBbdmFsdWVdO1xufTtcblxuLypcbiAgQ29udmVydCBudW1iZXIgdG8geCBkZWNpbWFsIHBsYWNlc1xuXG4gIEBwYXJhbSBbbnVtYmVyXVxuICBAcGFyYW0gW251bWJlcl1cbiAgQHJldHVybiBbbnVtYmVyXVxuKi9cbnZhciB0b0RlY2ltYWwgPSBleHBvcnRzLnRvRGVjaW1hbCA9IGZ1bmN0aW9uIChudW0pIHtcbiAgdmFyIHByZWNpc2lvbiA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IDIgOiBhcmd1bWVudHNbMV07XG5cbiAgcHJlY2lzaW9uID0gTWF0aC5wb3coMTAsIHByZWNpc2lvbik7XG4gIHJldHVybiBNYXRoLnJvdW5kKG51bSAqIHByZWNpc2lvbikgLyBwcmVjaXNpb247XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1NdmRYUnBiSE11YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN08wRkJRVUVzU1VGQlRTeHhRa0ZCY1VJc2FVSkJRWEpDTzBGQlEwNHNTVUZCVFN4dFFrRkJiVUlzVDBGQmJrSTdRVUZEVGl4SlFVRk5MSE5DUVVGMVFpeFBRVUZQTEZkQlFWQXNTMEZCZFVJc1YwRkJka0lzU1VGQmMwTXNXVUZCV1N4SFFVRmFPenM3T3pzN096dEJRVkZ1UlN4SlFVRk5MRlZCUVZVc1ZVRkJReXhSUVVGRU8xTkJRV01zVDBGQlR5eFRRVUZRTEVOQlFXbENMRkZCUVdwQ0xFTkJRVEJDTEVsQlFURkNMRU5CUVN0Q0xGRkJRUzlDTEVWQlFYbERMRXRCUVhwRExFTkJRU3RETEVOQlFTOURMRVZCUVd0RUxFTkJRVU1zUTBGQlJEdERRVUZvUlRzN096czdPenM3UVVGUlZDeEpRVUZOTEc5RFFVRmpMRlZCUVVNc1RVRkJSRHRUUVVGWkxFOUJRVThzVDBGQlVDeERRVUZsTEd0Q1FVRm1MRVZCUVcxRExHZENRVUZ1UXl4RlFVRnhSQ3hYUVVGeVJEdERRVUZhT3pzN096czdPenM3T3p0QlFWZHdRaXhKUVVGTkxITkVRVUYxUWl4VlFVRkRMRXRCUVVRc1JVRkJVU3hOUVVGU08xTkJRWE5DTEdWQlFWVTdRMEZCYUVNN096czdPenM3UVVGUE4wSXNTVUZCVFN4dlEwRkJZeXh6UWtGQmMwSTdVMEZCVFN4WlFVRlpMRWRCUVZvN1EwRkJUaXhIUVVFd1FqdFRRVUZOTEVsQlFVa3NTVUZCU2l4SFFVRlhMRTlCUVZnN1EwRkJUanM3T3pzN096czdPMEZCVTNCRkxFbEJRVTBzYjBOQlFXTXNWVUZCUXl4TlFVRkVMRVZCUVZNc1dVRkJWRHRUUVVFd1FpeFBRVUZQTEdOQlFWQXNRMEZCYzBJc1dVRkJkRUlzUzBGQmRVTXNUMEZCVHl4WlFVRlFMRTFCUVhsQ0xGTkJRWHBDTzBOQlFXcEZPenM3T3pzN096dEJRVkZ3UWl4SlFVRk5MRFJDUVVGVkxGVkJRVU1zUjBGQlJEdFRRVUZUTEZGQlFWRXNSMEZCVWl4TlFVRnBRaXhQUVVGcVFqdERRVUZVT3pzN096czdPenRCUVZGb1FpeEpRVUZOTERCQ1FVRlRMRlZCUVVNc1IwRkJSRHRUUVVGVExGRkJRVkVzUjBGQlVpeE5RVUZwUWl4VlFVRnFRanREUVVGVU96czdPenM3T3p0QlFWRm1MRWxCUVUwc2QwSkJRVkVzVlVGQlF5eEhRVUZFTzFOQlFWTXNUMEZCVHl4SFFVRlFMRXRCUVdVc1VVRkJaanREUVVGVU96czdPenM3T3p0QlFWRmtMRWxCUVUwc2QwSkJRVkVzVlVGQlF5eEhRVUZFTzFOQlFWTXNUMEZCVHl4SFFVRlFMRXRCUVdVc1VVRkJaanREUVVGVU96czdPenM3T3p0QlFWRmtMRWxCUVUwc05FTkJRV3RDTEZWQlFVTXNTMEZCUkR0VFFVRlhMRXRCUVVNc1NVRkJVeXhOUVVGTkxFOUJRVTRzU1VGQmFVSXNUVUZCVFN4UFFVRk9MRU5CUVdNc1IwRkJaQ3hKUVVGeFFpeERRVUZ5UWl4SFFVRXdRaXhKUVVGeVJDeEhRVUUwUkN4TFFVRTFSRHREUVVGWU96czdPenM3T3p0QlFWRjRRaXhKUVVGTkxEaENRVUZYTEZWQlFVTXNSMEZCUkR0VFFVRlRMRTlCUVU4c1IwRkJVQ3hMUVVGbExGRkJRV1k3UTBGQlZEczdPenM3T3pzN096dEJRVlZxUWl4SlFVRk5MRzlFUVVGelFpeFZRVUZETEV0QlFVUTdVMEZCVnl4VFFVRlRMRXRCUVZRc1NVRkJhMElzVFVGQlRTeExRVUZPTEVOQlFWa3NUVUZCV2l4RFFVRnNRaXhIUVVGM1F5eERRVUZETEV0QlFVUXNRMEZCZUVNN1EwRkJXRHM3T3pzN096czdPenRCUVZVMVFpeEpRVUZOTEc5RVFVRnpRaXhWUVVGRExFdEJRVVE3VTBGQlZ5eFRRVUZUTEV0QlFWUXNTVUZCYTBJc1RVRkJUU3hMUVVGT0xFTkJRVmtzUjBGQldpeERRVUZzUWl4SFFVRnhReXhEUVVGRExFdEJRVVFzUTBGQmNrTTdRMEZCV0RzN096czdPenM3TzBGQlV6VkNMRWxCUVUwc1owTkJRVmtzVlVGQlF5eEhRVUZFTEVWQlFYZENPMDFCUVd4Q0xHdEZRVUZaTEdsQ1FVRk5PenRCUVVNdlF5eDFRa0ZCV1N4SlFVRk5MRlZCUVd4Q0xFTkJSQ3RETzBGQlJTOURMRk5CUVU4c1MwRkJTeXhMUVVGTUxFTkJRVmNzVFVGQlRTeFRRVUZPTEVOQlFWZ3NSMEZCT0VJc1UwRkJPVUlzUTBGR2QwTTdRMEZCZUVJaUxDSm1hV3hsSWpvaWRYUnBiSE11YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaVkyOXVjM1FnUTBGTlJVeGZRMEZUUlY5UVFWUlVSVkpPSUQwZ0x5aGJZUzE2WFNrb1cwRXRXbDBwTDJjN1hHNWpiMjV6ZENCU1JWQk1RVU5GWDFSRlRWQk1RVlJGSUQwZ0p5UXhMU1F5Snp0Y2JtTnZibk4wSUVoQlUxOVFSVkpHVDFKTlFVNURSVjlPVDFjZ1BTQW9kSGx3Wlc5bUlIQmxjbVp2Y20xaGJtTmxJQ0U5UFNBbmRXNWtaV1pwYm1Wa0p5QW1KaUJ3WlhKbWIzSnRZVzVqWlM1dWIzY3BPMXh1WEc0dktseHVJQ0JIWlhRZ2RtRnlJSFI1Y0dVZ1lYTWdjM1J5YVc1blhHNGdJRnh1SUNCQWNHRnlZVzA2SUZaaGNtbGhZbXhsSUhSdklIUmxjM1JjYmlBZ1FISmxkSFZ5YmlCYmMzUnlhVzVuWFRvZ1VtVjBkWEp1Y3l3Z1ptOXlJR2x1YzNSaGJtTmxJQ2RQWW1wbFkzUW5JR2xtSUZ0dlltcGxZM1FnVDJKcVpXTjBYVnh1S2k5Y2JtTnZibk4wSUhaaGNsUjVjR1VnUFNBb2RtRnlhV0ZpYkdVcElEMCtJRTlpYW1WamRDNXdjbTkwYjNSNWNHVXVkRzlUZEhKcGJtY3VZMkZzYkNoMllYSnBZV0pzWlNrdWMyeHBZMlVvT0N3Z0xURXBPMXh1WEc0dktseHVJQ0JEYjI1MlpYSjBJR05oYldWc1EyRnpaU0IwYnlCa1lYTm9MV05oYzJWY2JseHVJQ0JBY0dGeVlXMGdXM04wY21sdVoxMWNiaUFnUUhKbGRIVnliaUJiYzNSeWFXNW5YVnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JqWVcxbGJGUnZSR0Z6YUNBOUlDaHpkSEpwYm1jcElEMCtJSE4wY21sdVp5NXlaWEJzWVdObEtFTkJUVVZNWDBOQlUwVmZVRUZVVkVWU1Rpd2dVa1ZRVEVGRFJWOVVSVTFRVEVGVVJTa3VkRzlNYjNkbGNrTmhjMlVvS1R0Y2JseHVMeXBjYmlBZ1EzSmxZWFJsSUdFZ1puVnVZM1JwYjI0Z2MzUnlhVzVuWEc1Y2JpQWdKekl3Y0hnbkxDQW5kSEpoYm5Oc1lYUmxKeUF0UGlBbmRISmhibk5zWVhSbEtESXdjSGdwSjF4dVhHNGdJRUJ3WVhKaGJTQmJjM1J5YVc1blhWeHVJQ0JBY0dGeVlXMGdXM04wY21sdVoxMWNiaUFnUUhKbGRIVnliaUJiYzNSeWFXNW5YVnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JqY21WaGRHVkdkVzVqZEdsdmJsTjBjbWx1WnlBOUlDaDJZV3gxWlN3Z2NISmxabWw0S1NBOVBpQmdKSHR3Y21WbWFYaDlLQ1I3ZG1Gc2RXVjlLV0E3WEc1Y2JpOHFYRzRnSUVkbGJtVnlZWFJsSUdOMWNuSmxiblFnZEdsdFpYTjBZVzF3WEc0Z0lGeHVJQ0JBY21WMGRYSnVJRnQwYVcxbGMzUmhiWEJkT2lCRGRYSnlaVzUwSUZWT1NWZ2dkR2x0WlhOMFlXMXdYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR04xY25KbGJuUlVhVzFsSUQwZ1NFRlRYMUJGVWtaUFVrMUJUa05GWDA1UFZ5QS9JQ2dwSUQwK0lIQmxjbVp2Y20xaGJtTmxMbTV2ZHlncElEb2dLQ2tnUFQ0Z2JtVjNJRVJoZEdVb0tTNW5aWFJVYVcxbEtDazdYRzVjYmk4cVhHNGdJRU5vWldOcklHbG1JRzlpYW1WamRDQm9ZWE1nY0hKdmNHVnlkSGtnWVc1a0lHbDBJR2x6YmlkMElIVnVaR1ZtYVc1bFpGeHVYRzRnSUVCd1lYSmhiU0JiYjJKcVpXTjBYVnh1SUNCQWNHRnlZVzBnVzNOMGNtbHVaMTFjYmlBZ1FISmxkSFZ5YmlCYlltOXZiR1ZoYmwxY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2FHRnpVSEp2Y0dWeWRIa2dQU0FvYjJKcVpXTjBMQ0J3Y205d1pYSjBlVTVoYldVcElEMCtJRzlpYW1WamRDNW9ZWE5QZDI1UWNtOXdaWEowZVNod2NtOXdaWEowZVU1aGJXVXBJQ1ltSUc5aWFtVmpkRnR3Y205d1pYSjBlVTVoYldWZElDRTlQU0IxYm1SbFptbHVaV1E3WEc1Y2JpOHFYRzRnSUVseklIVjBhV3h6SUhaaGNpQmhiaUJoY25KaGVTQS9JRnh1SUNCY2JpQWdRSEJoY21GdE9pQldZWEpwWVdKc1pTQjBieUIwWlhOMFhHNGdJRUJ5WlhSMWNtNGdXMkp2YjJ4bFlXNWRPaUJTWlhSMWNtNXpJSFJ5ZFdVZ2FXWWdkWFJwYkhNdWRtRnlWSGx3WlNBOVBUMGdKMEZ5Y21GNUoxeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnBjMEZ5Y21GNUlEMGdLR0Z5Y2lrZ1BUNGdkbUZ5Vkhsd1pTaGhjbklwSUQwOVBTQW5RWEp5WVhrbk8xeHVYRzR2S2x4dUlDQkpjeUIxZEdsc2N5QjJZWElnWVNCbWRXNWpkR2x2YmlBL0lGeHVJQ0JjYmlBZ1FIQmhjbUZ0T2lCV1lYSnBZV0pzWlNCMGJ5QjBaWE4wWEc0Z0lFQnlaWFIxY200Z1cySnZiMnhsWVc1ZE9pQlNaWFIxY201eklIUnlkV1VnYVdZZ2RYUnBiSE11ZG1GeVZIbHdaU0E5UFQwZ0owWjFibU4wYVc5dUoxeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnBjMFoxYm1NZ1BTQW9iMkpxS1NBOVBpQjJZWEpVZVhCbEtHOWlhaWtnUFQwOUlDZEdkVzVqZEdsdmJpYzdYRzVjYmk4cVhHNGdJRWx6SUhWMGFXeHpJSFpoY2lCaElHNTFiV0psY2o5Y2JpQWdYRzRnSUVCd1lYSmhiVG9nVm1GeWFXRmliR1VnZEc4Z2RHVnpkRnh1SUNCQWNtVjBkWEp1SUZ0aWIyOXNaV0Z1WFRvZ1VtVjBkWEp1Y3lCMGNuVmxJR2xtSUhSNWNHVnZaaUE5UFQwZ0oyNTFiV0psY2lkY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2FYTk9kVzBnUFNBb2JuVnRLU0E5UGlCMGVYQmxiMllnYm5WdElEMDlQU0FuYm5WdFltVnlKenRjYmx4dUx5cGNiaUFnU1hNZ2RYUnBiSE1nZG1GeUlHRnVJRzlpYW1WamREOWNiaUFnWEc0Z0lFQndZWEpoYlRvZ1ZtRnlhV0ZpYkdVZ2RHOGdkR1Z6ZEZ4dUlDQkFjbVYwZFhKdUlGdGliMjlzWldGdVhUb2dVbVYwZFhKdWN5QjBjblZsSUdsbUlIUjVjR1Z2WmlBOVBUMGdKMjlpYW1WamRDZGNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdhWE5QWW1vZ1BTQW9iMkpxS1NBOVBpQjBlWEJsYjJZZ2IySnFJRDA5UFNBbmIySnFaV04wSnp0Y2JseHVMeXBjYmlBZ1NYTWdkWFJwYkhNZ1lTQnlaV3hoZEdsMlpTQjJZV3gxWlNCaGMzTnBaMjV0Wlc1MFAxeHVJQ0JjYmlBZ1FIQmhjbUZ0SUZ0emRISnBibWRkT2lCV1lYSnBZV0pzWlNCMGJ5QjBaWE4wWEc0Z0lFQnlaWFIxY200Z1cySnZiMnhsWVc1ZE9pQkpaaUIxZEdsc2N5QnNiMjlyY3lCc2FXdGxJR0VnY21Wc1lYUnBkbVVnZG1Gc2RXVWdZWE56YVdkdWJXVnVkRnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JwYzFKbGJHRjBhWFpsVm1Gc2RXVWdQU0FvZG1Gc2RXVXBJRDArSUNoMllXeDFaU0FtSmlCMllXeDFaUzVwYm1SbGVFOW1JQ1ltSUhaaGJIVmxMbWx1WkdWNFQyWW9KejBuS1NBK0lEQXBJRDhnZEhKMVpTQTZJR1poYkhObE8xeHVYRzR2S2x4dUlDQkpjeUIxZEdsc2N5QjJZWElnWVNCemRISnBibWNnUHlCY2JpQWdYRzRnSUVCd1lYSmhiVG9nVm1GeWFXRmliR1VnZEc4Z2RHVnpkRnh1SUNCQWNtVjBkWEp1SUZ0aWIyOXNaV0Z1WFRvZ1VtVjBkWEp1Y3lCMGNuVmxJR2xtSUhSNWNHVnZaaUJ6ZEhJZ1BUMDlJQ2R6ZEhKcGJtY25YRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR2x6VTNSeWFXNW5JRDBnS0hOMGNpa2dQVDRnZEhsd1pXOW1JSE4wY2lBOVBUMGdKM04wY21sdVp5YzdYRzVjYmk4cVhHNGdJRk53YkdsMElHTnZiVzFoTFdSbGJHbHRhWFJsWkNCemRISnBibWRjYmx4dUlDQmNJbVp2Ynl4aVlYSmNJaUF0UGlCYlhDSm1iMjljSWl3Z1hDSmlZWEpjSWwxY2JseHVJQ0JBY0dGeVlXMGdXM04wY21sdVoxMWNiaUFnUUhKbGRIVnliaUJiWVhKeVlYbGRYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJSE53YkdsMFEyOXRiV0ZFWld4cGJXbDBaV1FnUFNBb2RtRnNkV1VwSUQwK0lHbHpVM1J5YVc1bktIWmhiSFZsS1NBL0lIWmhiSFZsTG5Od2JHbDBLQzhzWEZ4ektpOHBJRG9nVzNaaGJIVmxYVHRjYmx4dUx5cGNiaUFnVTNCc2FYUWdjM0JoWTJVdFpHVnNhVzFwZEdWa0lITjBjbWx1WjF4dVhHNGdJRndpWm05dklHSmhjbHdpSUMwK0lGdGNJbVp2YjF3aUxDQmNJbUpoY2x3aVhWeHVYRzRnSUVCd1lYSmhiU0JiYzNSeWFXNW5YVnh1SUNCQWNtVjBkWEp1SUZ0aGNuSmhlVjFjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYzNCc2FYUlRjR0ZqWlVSbGJHbHRhWFJsWkNBOUlDaDJZV3gxWlNrZ1BUNGdhWE5UZEhKcGJtY29kbUZzZFdVcElEOGdkbUZzZFdVdWMzQnNhWFFvSnlBbktTQTZJRnQyWVd4MVpWMDdYRzVjYmk4cVhHNGdJRU52Ym5abGNuUWdiblZ0WW1WeUlIUnZJSGdnWkdWamFXMWhiQ0J3YkdGalpYTmNibHh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDFjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkWEc0Z0lFQnlaWFIxY200Z1cyNTFiV0psY2wxY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2RHOUVaV05wYldGc0lEMGdLRzUxYlN3Z2NISmxZMmx6YVc5dUlEMGdNaWtnUFQ0Z2UxeHVJQ0J3Y21WamFYTnBiMjRnUFNBeE1DQXFLaUJ3Y21WamFYTnBiMjQ3WEc0Z0lISmxkSFZ5YmlCTllYUm9Mbkp2ZFc1a0tHNTFiU0FxSUhCeVpXTnBjMmx2YmlrZ0x5QndjbVZqYVhOcGIyNDdYRzU5TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy91dGlscy5qc1xuICoqIG1vZHVsZSBpZCA9IDEyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiIsImZpbGUiOiJwb3Btb3Rpb24uZ2xvYmFsLmpzIn0=