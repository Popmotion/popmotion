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
	exports.easing = exports.pointer = exports.velocity = exports.track = exports.tween = exports.Action = exports.value = exports.currentFrameTimestamp = exports.timeSinceLastFrame = exports.cancelOnFrameEnd = exports.cancelOnFrameRender = exports.cancelOnFrameUpdate = exports.cancelOnFrameStart = exports.onFrameEnd = exports.onFrameRender = exports.onFrameUpdate = exports.onFrameStart = undefined;
	
	var _framesync = __webpack_require__(5);
	
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
	
	var _value2 = __webpack_require__(6);
	
	var _value3 = _interopRequireDefault(_value2);
	
	var _actions = __webpack_require__(7);
	
	var _actions2 = _interopRequireDefault(_actions);
	
	var _tween2 = __webpack_require__(2);
	
	var _tween3 = _interopRequireDefault(_tween2);
	
	var _track2 = __webpack_require__(14);
	
	var _track3 = _interopRequireDefault(_track2);
	
	var _velocity2 = __webpack_require__(3);
	
	var _velocity3 = _interopRequireDefault(_velocity2);
	
	var _pointer2 = __webpack_require__(4);
	
	var _pointer3 = _interopRequireDefault(_pointer2);
	
	var _easing2 = __webpack_require__(8);
	
	var _easing = _interopRequireWildcard(_easing2);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.value = _value3.default;
	exports.Action = _actions2.default;
	exports.tween = _tween3.default;
	exports.track = _track3.default;
	exports.velocity = _velocity3.default;
	exports.pointer = _pointer3.default;
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wb3Btb3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztzQkFFRTs7Ozs7O3NCQUNBOzs7Ozs7c0JBQ0E7Ozs7OztzQkFDQTs7Ozs7O3NCQUNBOzs7Ozs7c0JBQ0E7Ozs7OztzQkFDQTs7Ozs7O3NCQUNBOzs7Ozs7c0JBQ0E7Ozs7OztzQkFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBR0s7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0siLCJmaWxlIjoicG9wbW90aW9uLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbIi8vIEZyYW1lc3luYyBzY2hlZHVsZXJzXG5leHBvcnQge1xuICBvbkZyYW1lU3RhcnQsXG4gIG9uRnJhbWVVcGRhdGUsXG4gIG9uRnJhbWVSZW5kZXIsXG4gIG9uRnJhbWVFbmQsXG4gIGNhbmNlbE9uRnJhbWVTdGFydCxcbiAgY2FuY2VsT25GcmFtZVVwZGF0ZSxcbiAgY2FuY2VsT25GcmFtZVJlbmRlcixcbiAgY2FuY2VsT25GcmFtZUVuZCxcbiAgdGltZVNpbmNlTGFzdEZyYW1lLFxuICBjdXJyZW50RnJhbWVUaW1lc3RhbXBcbn0gZnJvbSAnLi9mcmFtZXN5bmMnO1xuXG5leHBvcnQgdmFsdWUgZnJvbSAnLi92YWx1ZSc7XG5leHBvcnQgQWN0aW9uIGZyb20gJy4vYWN0aW9ucyc7XG5leHBvcnQgdHdlZW4gZnJvbSAnLi9hY3Rpb25zL3R3ZWVuJztcbmV4cG9ydCB0cmFjayBmcm9tICcuL2FjdGlvbnMvdHJhY2snO1xuZXhwb3J0IHZlbG9jaXR5IGZyb20gJy4vYWN0aW9ucy92ZWxvY2l0eSc7XG5leHBvcnQgcG9pbnRlciBmcm9tICcuL2lucHV0L3BvaW50ZXInO1xuZXhwb3J0ICogYXMgZWFzaW5nIGZyb20gJy4vZWFzaW5nJztcblxuLy8gLy8gSW1wb3J0IGNsYXNzZXMgLSBsb25nIHRlcm0gZ29hbCB0byBtb3ZlIHRvd2FyZHMgY29tcG9zaXRpb25cbi8vIGltcG9ydCBBY3Rpb24gZnJvbSAnLi9hY3Rpb25zL0FjdGlvbic7XG4vLyBpbXBvcnQgRmxvdyBmcm9tICcuL2FjdGlvbnMvRmxvdyc7XG4vLyBpbXBvcnQgVHdlZW4gZnJvbSAnLi9hY3Rpb25zL1R3ZWVuJztcbi8vIGltcG9ydCBQaHlzaWNzIGZyb20gJy4vYWN0aW9ucy9QaHlzaWNzJztcbi8vIGltcG9ydCBUcmFjayBmcm9tICcuL2FjdGlvbnMvVHJhY2snO1xuLy8gaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrL1Rhc2snO1xuLy8gaW1wb3J0IElucHV0IGZyb20gJy4vaW5wdXQvSW5wdXQnO1xuXG4vLyAvLyBFeHBvcnQgZmFjdG9yeSBmdW5jdGlvbnNcbi8vIGV4cG9ydCBjb25zdCBmbG93ID0gKC4uLmFyZ3MpID0+IG5ldyBGbG93KC4uLmFyZ3MpO1xuLy8gZXhwb3J0IGNvbnN0IHR3ZWVuID0gKHByb3BzKSA9PiBuZXcgVHdlZW4ocHJvcHMpO1xuLy8gZXhwb3J0IGNvbnN0IHBoeXNpY3MgPSAocHJvcHMpID0+IG5ldyBQaHlzaWNzKHByb3BzKTtcbi8vIGV4cG9ydCBjb25zdCB0cmFjayA9ICguLi5hcmdzKSA9PiBuZXcgVHJhY2soLi4uYXJncyk7XG4vLyBleHBvcnQgY29uc3QgaW5wdXQgPSAoLi4uYXJncykgPT4gbmV3IElucHV0KC4uLmFyZ3MpO1xuLy8gZXhwb3J0IGNvbnN0IHRhc2sgPSAoLi4uYXJncykgPT4gbmV3IFRhc2soLi4uYXJncyk7XG4vLyBleHBvcnQgc3RhZ2dlciBmcm9tICcuL2luYy9zdGFnZ2VyJztcbi8vIGV4cG9ydCB0aW1lbGluZSBmcm9tICcuL2luYy90aW1lbGluZSc7XG5cbi8vIC8vIEFkYXB0ZXJzXG4vLyBleHBvcnQgY3JlYXRlQWRhcHRlciBmcm9tICcuL2FkYXB0ZXIvYWRhcHRlcic7XG4vLyBleHBvcnQgYXR0ciBmcm9tICcuL2FkYXB0ZXIvYXR0ci1hZGFwdGVyJztcbi8vIGV4cG9ydCBjc3MgZnJvbSAnLi9hZGFwdGVyL2Nzcy1hZGFwdGVyJztcbi8vIGV4cG9ydCBvYmplY3QgZnJvbSAnLi9hZGFwdGVyL29iamVjdC1hZGFwdGVyJztcbi8vIGV4cG9ydCBzdmcgZnJvbSAnLi9hZGFwdGVyL3N2Zy1hZGFwdGVyJztcbi8vIGV4cG9ydCBzdmdQYXRoIGZyb20gJy4vYWRhcHRlci9zdmctcGF0aC1hZGFwdGVyJztcblxuLy8gLy8gRWFzaW5nXG4vLyBleHBvcnQgZWFzaW5nIGZyb20gJy4vYWN0aW9ucy9lYXNpbmcvcHJlc2V0LWVhc2luZyc7XG4vLyBpbXBvcnQgZ2V0RmxvdyBmcm9tICcuL2FjdGlvbnMvZmxvdy9nZXQtZmxvdyc7XG4vLyBleHBvcnQgY29uc3QgZGV0ZWN0RmxvdyA9IGdldEZsb3c7XG5cbi8vIC8vIFV0aWxzXG4vLyBleHBvcnQgKiBhcyBjYWxjIGZyb20gJy4vaW5jL2NhbGMnO1xuLy8gZXhwb3J0ICogYXMgdXRpbHMgZnJvbSAnLi9pbmMvdXRpbHMnO1xuLy8gZXhwb3J0IHsgc2V0R2xvYmFsRGlsYXRpb24gfSBmcm9tICcuL3Rhc2svdGltZXInO1xuXG4vLyAvLyBWYWx1ZSB0eXBlc1xuLy8gaW1wb3J0IGFscGhhIGZyb20gJy4vdmFsdWUtdHlwZXMvYWxwaGEnO1xuLy8gaW1wb3J0IGFuZ2xlIGZyb20gJy4vdmFsdWUtdHlwZXMvYW5nbGUnO1xuLy8gaW1wb3J0IGNvbG9yIGZyb20gJy4vdmFsdWUtdHlwZXMvY29sb3InO1xuLy8gaW1wb3J0IGNvbXBsZXggZnJvbSAnLi92YWx1ZS10eXBlcy9jb21wbGV4Jztcbi8vIGltcG9ydCBoZXggZnJvbSAnLi92YWx1ZS10eXBlcy9oZXgnO1xuLy8gaW1wb3J0IGhzbCBmcm9tICcuL3ZhbHVlLXR5cGVzL2hzbCc7XG4vLyBpbXBvcnQgcHggZnJvbSAnLi92YWx1ZS10eXBlcy9weCc7XG4vLyBpbXBvcnQgcmdiIGZyb20gJy4vdmFsdWUtdHlwZXMvcmdiJztcbi8vIGltcG9ydCBzY2FsZSBmcm9tICcuL3ZhbHVlLXR5cGVzL3NjYWxlJztcbi8vIGltcG9ydCBzaGFkb3cgZnJvbSAnLi92YWx1ZS10eXBlcy9zaGFkb3cnO1xuLy8gaW1wb3J0IHVuaXQgZnJvbSAnLi92YWx1ZS10eXBlcy91bml0Jztcbi8vIGV4cG9ydCBjb25zdCB2YWx1ZVR5cGUgPSB7IGFscGhhLCBhbmdsZSwgY29sb3IsIGNvbXBsZXgsIGhleCwgaHNsLCBweCwgcmdiLCBzY2FsZSwgc2hhZG93LCB1bml0IH07XG5cbi8vIC8vIFRyYW5zZm9ybWVyc1xuLy8gZXhwb3J0ICogYXMgdHJhbnNmb3JtZXJzIGZyb20gJy4vaW5jL3RyYW5zZm9ybWVycyc7XG5cbi8vIC8qXG4vLyAgIFJldHVybnMgYSB2ZXJzaW9uIG9mIHRoZSBBY3Rpb24gYm91bmQgdG8gYSBGbG93XG5cbi8vICAgV2UncmUgYWRkaW5nIGBvbmAgaGVyZSBiZWNhdXNlIEZsb3cgZXh0ZW5kcyBBY3Rpb24sXG4vLyAgIG90aGVyd2lzZSBjcmVhdGluZyBhIGNpcmN1bGFyIG1vZHVsYXIgZGVwZW5kZW5jeS4gRnV0dXJlXG4vLyAgIHJlZmFjdG9yaW5nLCBpZSBtb3ZpbmcgdG8gYSBjb21wb3NpdGlvbmFsIG1vZGVsIHdpbGxcbi8vICAgcmVtb3ZlIHRoZSBuZWVkIGZvciB1cyB0byBkbyB0aGlzIGhlcmUuXG4vLyAqL1xuLy8gQWN0aW9uLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4vLyAgIGlmICghZWxlbWVudC5jb25uZWN0KSB7XG4vLyAgICAgZWxlbWVudCA9IGdldEZsb3coZWxlbWVudCk7XG4vLyAgIH1cblxuLy8gICByZXR1cm4gZWxlbWVudC5jb25uZWN0KHRoaXMpO1xuLy8gfTtcblxuLy8gZXhwb3J0IHsgQWN0aW9uIH07Il19

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _ = __webpack_require__(7);
	
	var _2 = _interopRequireDefault(_);
	
	var _framesync = __webpack_require__(5);
	
	var _filters = __webpack_require__(15);
	
	var _calc = __webpack_require__(10);
	
	var _easing = __webpack_require__(8);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var restrictProgress = (0, _filters.restrictBetween)(0, 1);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL3R3ZWVuLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBRUEsSUFBTSxtQkFBbUIsOEJBQWdCLENBQWhCLEVBQW1CLENBQW5CLENBQW5COztJQUVBOzs7Ozs7Ozs7a0JBUUosNkJBQVU7QUFDUixTQUFLLE9BQUwsR0FBZSxDQUFmLENBRFE7OztBQVJOLGtCQVlKLCtCQUFXO2lCQUM0QixLQUFLLEtBQUwsQ0FENUI7UUFDRCwyQkFEQztRQUNTLG1CQURUO1FBQ2UsbUJBRGY7UUFDcUIsZUFEckI7O0FBRVQsU0FBSyxPQUFMLElBQWdCLG9DQUFoQixDQUZTO0FBR1QsUUFBTSxXQUFXLGdDQUFxQixLQUFLLE9BQUwsRUFBYyxDQUFuQyxFQUFzQyxRQUF0QyxDQUFYLENBSEc7QUFJVCxRQUFNLGdCQUFnQixLQUFLLGlCQUFpQixRQUFqQixDQUFMLENBQWhCLENBSkc7QUFLVCxTQUFLLE9BQUwsR0FBZSxnQ0FBcUIsYUFBckIsRUFBb0MsSUFBcEMsRUFBMEMsRUFBMUMsQ0FBZixDQUxTOztBQU9ULFFBQUksS0FBSyxPQUFMLElBQWdCLFFBQWhCLEVBQTBCO0FBQzVCLFdBQUssUUFBTCxHQUQ0QjtLQUE5Qjs7O1NBbkJFOzs7TUFDRyxlQUFlO0FBQ3BCLFlBQVUsR0FBVjtBQUNBLHVCQUZvQjtBQUdwQixRQUFNLENBQU47QUFDQSxNQUFJLENBQUo7OztrQkFvQlcsVUFBQyxLQUFEO1NBQVcsSUFBSSxLQUFKLENBQVUsS0FBVjtDQUFYIiwiZmlsZSI6InR3ZWVuLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY3Rpb24gZnJvbSAnLi8nO1xuaW1wb3J0IHsgdGltZVNpbmNlTGFzdEZyYW1lIH0gZnJvbSAnLi4vZnJhbWVzeW5jJztcbmltcG9ydCB7IHJlc3RyaWN0QmV0d2VlbiB9IGZyb20gJy4uL3ZhbHVlL2ZpbHRlcnMnO1xuaW1wb3J0IHsgZWFzZSwgZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUsIGdldFZhbHVlRnJvbVByb2dyZXNzIH0gZnJvbSAnLi4vaW5jL2NhbGMnO1xuaW1wb3J0IHsgZWFzZU91dCB9IGZyb20gJy4uL2Vhc2luZyc7XG5cbmNvbnN0IHJlc3RyaWN0UHJvZ3Jlc3MgPSByZXN0cmljdEJldHdlZW4oMCwgMSk7XG5cbmNsYXNzIFR3ZWVuIGV4dGVuZHMgQWN0aW9uIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBkdXJhdGlvbjogMzAwLFxuICAgIGVhc2U6IGVhc2VPdXQsXG4gICAgZnJvbTogMCxcbiAgICB0bzogMFxuICB9XG5cbiAgb25TdGFydCgpIHtcbiAgICB0aGlzLmVsYXBzZWQgPSAwO1xuICB9XG5cbiAgb25VcGRhdGUoKSB7XG4gICAgY29uc3QgeyBkdXJhdGlvbiwgZWFzZSwgZnJvbSwgdG8gfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5lbGFwc2VkICs9IHRpbWVTaW5jZUxhc3RGcmFtZSgpO1xuICAgIGNvbnN0IHByb2dyZXNzID0gZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUodGhpcy5lbGFwc2VkLCAwLCBkdXJhdGlvbik7XG4gICAgY29uc3QgZWFzZWRQcm9ncmVzcyA9IGVhc2UocmVzdHJpY3RQcm9ncmVzcyhwcm9ncmVzcykpO1xuICAgIHRoaXMuY3VycmVudCA9IGdldFZhbHVlRnJvbVByb2dyZXNzKGVhc2VkUHJvZ3Jlc3MsIGZyb20sIHRvKTtcblxuICAgIGlmICh0aGlzLmVsYXBzZWQgPj0gZHVyYXRpb24pIHtcbiAgICAgIHRoaXMuY29tcGxldGUoKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiBuZXcgVHdlZW4ocHJvcHMpO1xuIl19

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _ = __webpack_require__(7);
	
	var _2 = _interopRequireDefault(_);
	
	var _framesync = __webpack_require__(5);
	
	var _calc = __webpack_require__(10);
	
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
	
	var _value = __webpack_require__(6);
	
	var _value2 = _interopRequireDefault(_value);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Pointer = function () {
	  function Pointer(_ref, _ref2) {
	    var x = _ref.x;
	    var y = _ref.y;
	    var eventToPoints = _ref2.eventToPoints;
	    var moveEvent = _ref2.moveEvent;
	
	    _classCallCheck(this, Pointer);
	
	    this.x = (0, _value2.default)(x);
	    this.y = (0, _value2.default)(y);
	    this.moveEvent = moveEvent;
	    this.eventToPoints = eventToPoints;
	    this.update = this.update.bind(this);
	  }
	
	  Pointer.prototype.update = function update(e) {
	    e.preventDefault();
	
	    var _eventToPoints = this.eventToPoints(e);
	
	    var x = _eventToPoints.x;
	    var y = _eventToPoints.y;
	
	    this.x.update(x);
	    this.y.update(y);
	  };
	
	  Pointer.prototype.start = function start() {
	    document.documentElement.addEventListener(this.moveEvent, this.update);
	  };
	
	  Pointer.prototype.stop = function stop() {
	    document.documentElement.removeEventListener(this.moveEvent, this.update);
	  };
	
	  return Pointer;
	}();
	
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
	
	exports.default = function (e) {
	  var nativeEvent = getNativeEvent(e);
	  return nativeEvent.touches ? new Pointer(touchEventToPoint(e), {
	    moveEvent: 'touchmove',
	    eventToPoints: touchEventToPoint
	  }) : new Pointer(mouseEventToPoint(e), {
	    moveEvent: 'mousemove',
	    eventToPoints: mouseEventToPoint
	  });
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbnB1dC9wb2ludGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7Ozs7Ozs7SUFFTTtBQUNKLFdBREksT0FDSixjQUFvRDtRQUF0QyxXQUFzQztRQUFuQyxXQUFtQztRQUE1QixvQ0FBNEI7UUFBYiw0QkFBYTs7MEJBRGhELFNBQ2dEOztBQUNsRCxTQUFLLENBQUwsR0FBUyxxQkFBTSxDQUFOLENBQVQsQ0FEa0Q7QUFFbEQsU0FBSyxDQUFMLEdBQVMscUJBQU0sQ0FBTixDQUFULENBRmtEO0FBR2xELFNBQUssU0FBTCxHQUFpQixTQUFqQixDQUhrRDtBQUlsRCxTQUFLLGFBQUwsR0FBcUIsYUFBckIsQ0FKa0Q7QUFLbEQsU0FBSyxNQUFMLEdBQWMsS0FBSyxNQUFMLENBQVksSUFBWixDQUFpQixJQUFqQixDQUFkLENBTGtEO0dBQXBEOztBQURJLG9CQVNKLHlCQUFPLEdBQUc7QUFDUixNQUFFLGNBQUYsR0FEUTs7eUJBRVMsS0FBSyxhQUFMLENBQW1CLENBQW5CLEVBRlQ7O1FBRUEscUJBRkE7UUFFRyxxQkFGSDs7QUFHUixTQUFLLENBQUwsQ0FBTyxNQUFQLENBQWMsQ0FBZCxFQUhRO0FBSVIsU0FBSyxDQUFMLENBQU8sTUFBUCxDQUFjLENBQWQsRUFKUTs7O0FBVE4sb0JBZ0JKLHlCQUFRO0FBQ04sYUFBUyxlQUFULENBQXlCLGdCQUF6QixDQUEwQyxLQUFLLFNBQUwsRUFBZ0IsS0FBSyxNQUFMLENBQTFELENBRE07OztBQWhCSixvQkFvQkosdUJBQU87QUFDTCxhQUFTLGVBQVQsQ0FBeUIsbUJBQXpCLENBQTZDLEtBQUssU0FBTCxFQUFnQixLQUFLLE1BQUwsQ0FBN0QsQ0FESzs7O1NBcEJIOzs7QUF5Qk4sSUFBTSxvQkFBb0IsVUFBQyxDQUFEO1NBQVE7QUFDaEMsT0FBRyxFQUFFLEtBQUY7QUFDSCxPQUFHLEVBQUUsS0FBRjs7Q0FGcUI7O0FBSzFCLElBQU0sb0JBQW9CO01BQUc7U0FBc0I7QUFDakQsT0FBRyxlQUFlLENBQWYsRUFBa0IsT0FBbEI7QUFDSCxPQUFHLGVBQWUsQ0FBZixFQUFrQixPQUFsQjs7Q0FGcUI7O0FBSzFCLElBQU0saUJBQWlCLFVBQUMsQ0FBRDtTQUFPLEVBQUUsYUFBRixJQUFtQixFQUFFLFdBQUYsSUFBaUIsQ0FBcEM7Q0FBUDs7a0JBRVIsVUFBQyxDQUFELEVBQU87QUFDcEIsTUFBTSxjQUFjLGVBQWUsQ0FBZixDQUFkLENBRGM7QUFFcEIsU0FBTyxXQUFDLENBQVksT0FBWixHQUNOLElBQUksT0FBSixDQUFZLGtCQUFrQixDQUFsQixDQUFaLEVBQWtDO0FBQ2hDLGVBQVcsV0FBWDtBQUNBLG1CQUFlLGlCQUFmO0dBRkYsQ0FESyxHQUtMLElBQUksT0FBSixDQUFZLGtCQUFrQixDQUFsQixDQUFaLEVBQWtDO0FBQ2hDLGVBQVcsV0FBWDtBQUNBLG1CQUFlLGlCQUFmO0dBRkYsQ0FMSyxDQUZhO0NBQVAiLCJmaWxlIjoicG9pbnRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdmFsdWUgZnJvbSAnLi4vdmFsdWUnO1xuXG5jbGFzcyBQb2ludGVyIHtcbiAgY29uc3RydWN0b3IoeyB4LCB5IH0sIHsgZXZlbnRUb1BvaW50cywgbW92ZUV2ZW50IH0pIHtcbiAgICB0aGlzLnggPSB2YWx1ZSh4KTtcbiAgICB0aGlzLnkgPSB2YWx1ZSh5KTtcbiAgICB0aGlzLm1vdmVFdmVudCA9IG1vdmVFdmVudDtcbiAgICB0aGlzLmV2ZW50VG9Qb2ludHMgPSBldmVudFRvUG9pbnRzO1xuICAgIHRoaXMudXBkYXRlID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHVwZGF0ZShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHsgeCwgeSB9ID0gdGhpcy5ldmVudFRvUG9pbnRzKGUpO1xuICAgIHRoaXMueC51cGRhdGUoeCk7XG4gICAgdGhpcy55LnVwZGF0ZSh5KTtcbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHRoaXMubW92ZUV2ZW50LCB0aGlzLnVwZGF0ZSk7XG4gIH1cblxuICBzdG9wKCkge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMubW92ZUV2ZW50LCB0aGlzLnVwZGF0ZSk7XG4gIH1cbn1cblxuY29uc3QgbW91c2VFdmVudFRvUG9pbnQgPSAoZSkgPT4gKHtcbiAgeDogZS5wYWdlWCxcbiAgeTogZS5wYWdlWVxufSk7XG5cbmNvbnN0IHRvdWNoRXZlbnRUb1BvaW50ID0gKHsgY2hhbmdlZFRvdWNoZXMgfSkgPT4gKHtcbiAgeDogY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCxcbiAgeTogY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WVxufSk7XG5cbmNvbnN0IGdldE5hdGl2ZUV2ZW50ID0gKGUpID0+IGUub3JpZ2luYWxFdmVudCB8fCBlLm5hdGl2ZUV2ZW50IHx8IGU7XG5cbmV4cG9ydCBkZWZhdWx0IChlKSA9PiB7XG4gIGNvbnN0IG5hdGl2ZUV2ZW50ID0gZ2V0TmF0aXZlRXZlbnQoZSk7XG4gIHJldHVybiAobmF0aXZlRXZlbnQudG91Y2hlcykgP1xuICAgIG5ldyBQb2ludGVyKHRvdWNoRXZlbnRUb1BvaW50KGUpLCB7XG4gICAgICBtb3ZlRXZlbnQ6ICd0b3VjaG1vdmUnLFxuICAgICAgZXZlbnRUb1BvaW50czogdG91Y2hFdmVudFRvUG9pbnRcbiAgICB9KSA6XG4gICAgbmV3IFBvaW50ZXIobW91c2VFdmVudFRvUG9pbnQoZSksIHtcbiAgICAgIG1vdmVFdmVudDogJ21vdXNlbW92ZScsXG4gICAgICBldmVudFRvUG9pbnRzOiBtb3VzZUV2ZW50VG9Qb2ludFxuICAgIH0pO1xufVxuIl19

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.currentFrameTimestamp = exports.timeSinceLastFrame = exports.cancelOnFrameEnd = exports.cancelOnFrameRender = exports.cancelOnFrameUpdate = exports.cancelOnFrameStart = exports.onFrameEnd = exports.onFrameRender = exports.onFrameUpdate = exports.onFrameStart = undefined;
	
	var _onNextFrame = __webpack_require__(11);
	
	var _onNextFrame2 = _interopRequireDefault(_onNextFrame);
	
	var _createRenderStep = __webpack_require__(12);
	
	var _createRenderStep2 = _interopRequireDefault(_createRenderStep);
	
	var _utils = __webpack_require__(13);
	
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
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Value = function () {
	  function Value(initialValue) {
	    _classCallCheck(this, Value);
	
	    this.current = initialValue;
	    this.action = null;
	  }
	
	  Value.prototype.update = function update(newValue) {
	    this.current = newValue;
	
	    if (this.listeners) {
	      var numListeners = this.listeners.length;
	      for (var i = 0; i < numListeners; i++) {
	        this.listeners[i](newValue, this);
	      }
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
	    if (!this.listeners) {
	      this.listeners = [];
	    }
	
	    var listenerIndex = this.listeners.indexOf(callback);
	    if (listenerIndex === -1) {
	      this.listeners.push(callback);
	    }
	
	    return this;
	  };
	
	  Value.prototype.removeListener = function removeListener(callback) {
	    if (this.listeners) {
	      var listenerIndex = this.listeners.indexOf(callback);
	      if (listenerIndex > -1) {
	        this.listeners.splice(listenerIndex, 1);
	      }
	    }
	
	    return this;
	  };
	
	  return Value;
	}();
	
	exports.default = function (initialValue) {
	  return new Value(initialValue);
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBTTtBQUNKLFdBREksS0FDSixDQUFZLFlBQVosRUFBMEI7MEJBRHRCLE9BQ3NCOztBQUN4QixTQUFLLE9BQUwsR0FBZSxZQUFmLENBRHdCO0FBRXhCLFNBQUssTUFBTCxHQUFjLElBQWQsQ0FGd0I7R0FBMUI7O0FBREksa0JBTUoseUJBQU8sVUFBVTtBQUNmLFNBQUssT0FBTCxHQUFlLFFBQWYsQ0FEZTs7QUFHZixRQUFJLEtBQUssU0FBTCxFQUFnQjtBQUNsQixVQUFNLGVBQWUsS0FBSyxTQUFMLENBQWUsTUFBZixDQURIO0FBRWxCLFdBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLFlBQUosRUFBa0IsR0FBbEMsRUFBdUM7QUFDckMsYUFBSyxTQUFMLENBQWUsQ0FBZixFQUFrQixRQUFsQixFQUE0QixJQUE1QixFQURxQztPQUF2QztLQUZGOzs7QUFURSxrQkFpQkoscUJBQU07QUFDSixXQUFPLEtBQUssT0FBTCxDQURIOzs7QUFqQkYsa0JBcUJKLHFDQUFjO0FBQ1osV0FBTyxJQUFDLENBQUssTUFBTCxHQUFlLEtBQUssTUFBTCxDQUFZLFdBQVosR0FBMEIsQ0FBMUMsQ0FESzs7O0FBckJWLGtCQXlCSix1QkFBTztBQUNMLFFBQUksS0FBSyxNQUFMLEVBQWE7QUFDZixXQUFLLE1BQUwsQ0FBWSxJQUFaLEdBRGU7QUFFZixXQUFLLE1BQUwsR0FBYyxJQUFkLENBRmU7S0FBakI7OztBQTFCRSxrQkFnQ0osbUNBQVksVUFBVTtBQUNwQixRQUFJLENBQUMsS0FBSyxTQUFMLEVBQWdCO0FBQ25CLFdBQUssU0FBTCxHQUFpQixFQUFqQixDQURtQjtLQUFyQjs7QUFJQSxRQUFNLGdCQUFnQixLQUFLLFNBQUwsQ0FBZSxPQUFmLENBQXVCLFFBQXZCLENBQWhCLENBTGM7QUFNcEIsUUFBSSxrQkFBa0IsQ0FBQyxDQUFELEVBQUk7QUFDeEIsV0FBSyxTQUFMLENBQWUsSUFBZixDQUFvQixRQUFwQixFQUR3QjtLQUExQjs7QUFJQSxXQUFPLElBQVAsQ0FWb0I7OztBQWhDbEIsa0JBNkNKLHlDQUFlLFVBQVU7QUFDdkIsUUFBSSxLQUFLLFNBQUwsRUFBZ0I7QUFDbEIsVUFBTSxnQkFBZ0IsS0FBSyxTQUFMLENBQWUsT0FBZixDQUF1QixRQUF2QixDQUFoQixDQURZO0FBRWxCLFVBQUksZ0JBQWdCLENBQUMsQ0FBRCxFQUFJO0FBQ3RCLGFBQUssU0FBTCxDQUFlLE1BQWYsQ0FBc0IsYUFBdEIsRUFBcUMsQ0FBckMsRUFEc0I7T0FBeEI7S0FGRjs7QUFPQSxXQUFPLElBQVAsQ0FSdUI7OztTQTdDckI7OztrQkF5RFMsVUFBQyxZQUFEO1NBQWtCLElBQUksS0FBSixDQUFVLFlBQVY7Q0FBbEIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVmFsdWUge1xuICBjb25zdHJ1Y3Rvcihpbml0aWFsVmFsdWUpIHtcbiAgICB0aGlzLmN1cnJlbnQgPSBpbml0aWFsVmFsdWU7XG4gICAgdGhpcy5hY3Rpb24gPSBudWxsO1xuICB9XG5cbiAgdXBkYXRlKG5ld1ZhbHVlKSB7XG4gICAgdGhpcy5jdXJyZW50ID0gbmV3VmFsdWU7XG5cbiAgICBpZiAodGhpcy5saXN0ZW5lcnMpIHtcbiAgICAgIGNvbnN0IG51bUxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzLmxlbmd0aDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtTGlzdGVuZXJzOyBpKyspIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnNbaV0obmV3VmFsdWUsIHRoaXMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldCgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50O1xuICB9XG5cbiAgZ2V0VmVsb2NpdHkoKSB7XG4gICAgcmV0dXJuICh0aGlzLmFjdGlvbikgPyB0aGlzLmFjdGlvbi5nZXRWZWxvY2l0eSA6IDA7XG4gIH1cblxuICBzdG9wKCkge1xuICAgIGlmICh0aGlzLmFjdGlvbikge1xuICAgICAgdGhpcy5hY3Rpb24uc3RvcCgpO1xuICAgICAgdGhpcy5hY3Rpb24gPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGFkZExpc3RlbmVyKGNhbGxiYWNrKSB7XG4gICAgaWYgKCF0aGlzLmxpc3RlbmVycykge1xuICAgICAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcbiAgICB9XG5cbiAgICBjb25zdCBsaXN0ZW5lckluZGV4ID0gdGhpcy5saXN0ZW5lcnMuaW5kZXhPZihjYWxsYmFjayk7XG4gICAgaWYgKGxpc3RlbmVySW5kZXggPT09IC0xKSB7XG4gICAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlbW92ZUxpc3RlbmVyKGNhbGxiYWNrKSB7XG4gICAgaWYgKHRoaXMubGlzdGVuZXJzKSB7XG4gICAgICBjb25zdCBsaXN0ZW5lckluZGV4ID0gdGhpcy5saXN0ZW5lcnMuaW5kZXhPZihjYWxsYmFjayk7XG4gICAgICBpZiAobGlzdGVuZXJJbmRleCA+IC0xKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzLnNwbGljZShsaXN0ZW5lckluZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAoaW5pdGlhbFZhbHVlKSA9PiBuZXcgVmFsdWUoaW5pdGlhbFZhbHVlKTtcbiJdfQ==

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _framesync = __webpack_require__(5);
	
	var _calc = __webpack_require__(10);
	
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
/* 8 */
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
/* 9 */,
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.stepProgress = exports.speedPerSecond = exports.speedPerFrame = exports.smooth = exports.restrict = exports.relativeValue = exports.random = exports.radiansToDegrees = exports.pointFromAngleAndDistance = exports.getProgressFromValue = exports.getValueFromProgress = exports.distance = exports.dilate = exports.degreesToRadians = exports.angle = undefined;
	
	var _utils = __webpack_require__(13);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvY2FsYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQU9BLElBQU0sYUFBYTtBQUNqQixLQUFHLENBQUg7QUFDQSxLQUFHLENBQUg7QUFDQSxLQUFHLENBQUg7Q0FISTs7QUFNTixJQUFNLGFBQWEsVUFBQyxDQUFELEVBQUksQ0FBSjtTQUFVLEtBQUssR0FBTCxDQUFTLElBQUksQ0FBSjtDQUFuQjs7Ozs7Ozs7Ozs7O0FBWVosSUFBTSx3QkFBUSxVQUFDLENBQUQ7TUFBSSwwREFBSTtTQUFlLGlCQUFpQixLQUFLLEtBQUwsQ0FBVyxFQUFFLENBQUYsR0FBTSxFQUFFLENBQUYsRUFBSyxFQUFFLENBQUYsR0FBTSxFQUFFLENBQUYsQ0FBN0M7Q0FBdkI7Ozs7Ozs7O0FBUWQsSUFBTSw4Q0FBbUIsVUFBQyxPQUFEO1NBQWEsVUFBVSxLQUFLLEVBQUwsR0FBVSxHQUFwQjtDQUFiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CekIsSUFBTSwwQkFBUyxVQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sUUFBUDtTQUFvQixJQUFLLENBQUMsSUFBSSxDQUFKLENBQUQsR0FBVSxRQUFWO0NBQXpCOzs7Ozs7Ozs7OztBQVdmLElBQU0sOEJBQVcsVUFBQyxDQUFELEVBQXVCO01BQW5CLDBEQUFJLDBCQUFlOzs7QUFFN0MsTUFBSSxrQkFBTSxDQUFOLENBQUosRUFBYztBQUNaLFdBQU8sV0FBVyxDQUFYLEVBQWMsQ0FBZCxDQUFQOzs7QUFEWSxHQUFkLE1BSU87QUFDTCxVQUFNLFNBQVMsV0FBVyxFQUFFLENBQUYsRUFBSyxFQUFFLENBQUYsQ0FBekIsQ0FERDtBQUVMLFVBQU0sU0FBUyxXQUFXLEVBQUUsQ0FBRixFQUFLLEVBQUUsQ0FBRixDQUF6QixDQUZEO0FBR0wsVUFBTSxTQUFTLGlCQUFDLENBQU0sRUFBRSxDQUFGLENBQVAsR0FBZSxXQUFXLEVBQUUsQ0FBRixFQUFLLEVBQUUsQ0FBRixDQUEvQixHQUFzQyxDQUF0QyxDQUhWOztBQUtMLGFBQU8sS0FBSyxJQUFMLENBQVUsU0FBQyxRQUFVLEVBQVgsWUFBaUIsUUFBVSxFQUEzQixZQUFpQyxRQUFVLEVBQTNDLENBQWpCLENBTEs7S0FKUDtDQUZzQjs7Ozs7Ozs7Ozs7OztBQTBCakIsSUFBTSxzREFBdUIsVUFBQyxRQUFELEVBQVcsSUFBWCxFQUFpQixFQUFqQjtTQUF3QixDQUFHLFFBQUYsR0FBYSxJQUFiLEdBQXNCLFdBQVcsRUFBWCxHQUFpQixJQUF4QztDQUF4Qjs7Ozs7Ozs7Ozs7Ozs7QUFjN0IsSUFBTSxzREFBdUIsVUFBQyxLQUFELEVBQVEsSUFBUixFQUFjLEVBQWQ7U0FBcUIsQ0FBQyxRQUFRLElBQVIsQ0FBRCxJQUFrQixLQUFLLElBQUwsQ0FBbEI7Q0FBckI7Ozs7Ozs7Ozs7QUFVN0IsSUFBTSxnRUFBNEIsVUFBQyxNQUFELEVBQVMsS0FBVCxFQUFnQixRQUFoQixFQUE2QjtBQUNwRSxVQUFRLGlCQUFpQixLQUFqQixDQUFSLENBRG9FOztBQUdwRSxTQUFPO0FBQ0wsT0FBRyxXQUFXLEtBQUssR0FBTCxDQUFTLEtBQVQsQ0FBWCxHQUE2QixPQUFPLENBQVA7QUFDaEMsT0FBRyxXQUFXLEtBQUssR0FBTCxDQUFTLEtBQVQsQ0FBWCxHQUE2QixPQUFPLENBQVA7R0FGbEMsQ0FIb0U7Q0FBN0I7Ozs7Ozs7O0FBZWxDLElBQU0sOENBQW1CLFVBQUMsT0FBRDtTQUFhLFVBQVUsR0FBVixHQUFnQixLQUFLLEVBQUw7Q0FBN0I7Ozs7Ozs7OztBQVN6QixJQUFNLDBCQUFTO01BQUMsNERBQU07TUFBRyw0REFBTTtTQUFNLEtBQUssTUFBTCxNQUFpQixNQUFNLEdBQU4sQ0FBakIsR0FBOEIsR0FBOUI7Q0FBdEI7Ozs7Ozs7Ozs7OztBQVlmLElBQU0sd0NBQWdCLFVBQUMsT0FBRCxFQUFVLFFBQVYsRUFBdUI7QUFDbEQsTUFBSSxXQUFXLE9BQVgsQ0FEOEM7QUFFbEQsTUFBTSxXQUFXLFNBQVMsS0FBVCxDQUFlLEdBQWYsQ0FBWCxDQUY0QztBQUdsRCxNQUFNLFdBQVcsU0FBUyxDQUFULENBQVgsQ0FINEM7OzBCQUk1Qiw2QkFBaUIsU0FBUyxDQUFULENBQWpCLEVBSjRCOztNQUk1Qyw4QkFKNEM7TUFJdEMsZ0NBSnNDOzs7QUFNbEQsVUFBUSxXQUFXLEtBQVgsQ0FBUixDQU5rRDs7QUFRbEQsVUFBUSxRQUFSO0FBQ0EsU0FBSyxHQUFMO0FBQ0Usa0JBQVksS0FBWixDQURGO0FBRUUsWUFGRjtBQURBLFNBSUssR0FBTDtBQUNFLGtCQUFZLEtBQVosQ0FERjtBQUVFLFlBRkY7QUFKQSxTQU9LLEdBQUw7QUFDRSxrQkFBWSxLQUFaLENBREY7QUFFRSxZQUZGO0FBUEEsU0FVSyxHQUFMO0FBQ0Usa0JBQVksS0FBWixDQURGO0FBRUUsWUFGRjtBQVZBLEdBUmtEOztBQXVCbEQsTUFBSSxJQUFKLEVBQVU7QUFDUixnQkFBWSxJQUFaLENBRFE7R0FBVjs7QUFJQSxTQUFPLFFBQVAsQ0EzQmtEO0NBQXZCOzs7Ozs7Ozs7Ozs7QUF3Q3RCLElBQU0sOEJBQVcsVUFBQyxLQUFELEVBQVEsR0FBUixFQUFhLEdBQWI7U0FBcUIsS0FBSyxHQUFMLENBQVMsS0FBSyxHQUFMLENBQVMsS0FBVCxFQUFnQixHQUFoQixDQUFULEVBQStCLEdBQS9CO0NBQXJCOzs7Ozs7Ozs7O0FBVWpCLElBQU0sMEJBQVMsVUFBQyxRQUFELEVBQVcsUUFBWCxFQUFxQixRQUFyQjtNQUErQixrRUFBWTtTQUFNLHNCQUFVLFdBQVksWUFBWSxXQUFXLFFBQVgsQ0FBWixHQUFtQyxLQUFLLEdBQUwsQ0FBUyxTQUFULEVBQW9CLFFBQXBCLENBQW5DO0NBQXZFOzs7Ozs7OztBQVFmLElBQU0sd0NBQWdCLFVBQUMsR0FBRCxFQUFNLGFBQU47U0FBd0IsaUJBQUMsQ0FBTSxHQUFOLENBQUQsR0FBZSxPQUFPLE9BQU8sYUFBUCxDQUFQLEdBQStCLENBQTlDO0NBQXhCOzs7Ozs7OztBQVF0QixJQUFNLDBDQUFpQixVQUFDLFFBQUQsRUFBVyxhQUFYO1NBQTZCLFlBQVksT0FBTyxhQUFQLENBQVo7Q0FBN0I7Ozs7Ozs7OztBQVN2QixJQUFNLHNDQUFlLFVBQUMsUUFBRCxFQUFXLEtBQVgsRUFBcUI7QUFDL0MsTUFBTSxVQUFVLEtBQUssUUFBUSxDQUFSLENBQUwsQ0FEK0I7QUFFL0MsTUFBTSxTQUFTLElBQUssSUFBSSxLQUFKLENBRjJCO0FBRy9DLE1BQU0sbUJBQW1CLEtBQUssR0FBTCxDQUFTLFdBQVcsTUFBWCxFQUFtQixDQUE1QixDQUFuQixDQUh5Qzs7QUFLL0MsU0FBTyxLQUFLLEtBQUwsQ0FBVyxtQkFBbUIsT0FBbkIsQ0FBWCxHQUF5QyxPQUF6QyxDQUx3QztDQUFyQiIsImZpbGUiOiJjYWxjLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGhhc1Byb3BlcnR5LFxuICBpc051bSxcbiAgZmluZFZhbHVlQW5kVW5pdCxcbiAgdG9EZWNpbWFsXG59IGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCBaRVJPX1BPSU5UID0ge1xuICB4OiAwLFxuICB5OiAwLFxuICB6OiAwXG59O1xuXG5jb25zdCBkaXN0YW5jZTFEID0gKGEsIGIpID0+IE1hdGguYWJzKGEgLSBiKTtcblxuLypcbiAgQW5nbGUgYmV0d2VlbiBwb2ludHNcbiAgXG4gIFRyYW5zbGF0ZXMgdGhlIGh5cG90aGV0aWNhbCBsaW5lIHNvIHRoYXQgdGhlICdmcm9tJyBjb29yZGluYXRlc1xuICBhcmUgYXQgMCwwXG4gIFxuICBAcGFyYW0gW29iamVjdF06IFggYW5kIFkgY29vcmRpbmF0ZXMgb2YgZnJvbSBwb2ludFxuICBAcGFyYW0gW29iamVjdF06IFggYW5kIFkgY29yZGluYXRlcyBvZiB0byBwb2ludFxuICBAcmV0dXJuIFtyYWRpYW5dOiBBbmdsZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzIGluIHJhZGlhbnNcbiovXG5leHBvcnQgY29uc3QgYW5nbGUgPSAoYSwgYiA9IFpFUk9fUE9JTlQpID0+IHJhZGlhbnNUb0RlZ3JlZXMoTWF0aC5hdGFuMihhLnggLSBiLngsIGEueSAtIGIueSkpO1xuXG4vKlxuICBDb252ZXJ0IGRlZ3JlZXMgdG8gcmFkaWFuc1xuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBpbiBkZWdyZWVzXG4gIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGluIHJhZGlhbnNcbiovXG5leHBvcnQgY29uc3QgZGVncmVlc1RvUmFkaWFucyA9IChkZWdyZWVzKSA9PiBkZWdyZWVzICogTWF0aC5QSSAvIDE4MDtcblxuLypcbiAgRGlsYXRlXG4gIFxuICBDaGFuZ2UgdGhlIHByb2dyZXNzaW9uIGJldHdlZW4gYSBhbmQgYiBhY2NvcmRpbmcgdG8gZGlsYXRpb24uXG4gIFxuICBTbyBkaWxhdGlvbiA9IDAuNSB3b3VsZCBjaGFuZ2VcbiAgXG4gIGEgLS0tLS0tLS0tIGJcbiAgXG4gIHRvXG4gIFxuICBhIC0tLS0gYlxuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBQcmV2aW91cyB2YWx1ZVxuICBAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcbiAgQHBhcmFtIFtudW1iZXJdOiBEaWxhdGUgcHJvZ3Jlc3MgYnkgeFxuICBAcmV0dXJuIFtudW1iZXJdOiBQcmV2aW91cyB2YWx1ZSBwbHVzIHRoZSBkaWxhdGVkIGRpZmZlcmVuY2VcbiovXG5leHBvcnQgY29uc3QgZGlsYXRlID0gKGEsIGIsIGRpbGF0aW9uKSA9PiBhICsgKChiIC0gYSkgKiBkaWxhdGlvbik7XG5cbi8qXG4gIERpc3RhbmNlXG4gIFxuICBSZXR1cm5zIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHR3byBuIGRpbWVuc2lvbmFsIHBvaW50cy5cbiAgXG4gIEBwYXJhbSBbb2JqZWN0L251bWJlcl06IHggYW5kIHkgb3IganVzdCB4IG9mIHBvaW50IEFcbiAgQHBhcmFtIFtvYmplY3QvbnVtYmVyXTogKG9wdGlvbmFsKTogeCBhbmQgeSBvciBqdXN0IHggb2YgcG9pbnQgQlxuICBAcmV0dXJuIFtudW1iZXJdOiBUaGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgdHdvIHBvaW50c1xuKi9cbmV4cG9ydCBjb25zdCBkaXN0YW5jZSA9IChhLCBiID0gWkVST19QT0lOVCkgPT4ge1xuICAvLyAxRCBkaW1lbnNpb25zXG4gIGlmIChpc051bShhKSkge1xuICAgIHJldHVybiBkaXN0YW5jZTFEKGEsIGIpO1xuXG4gIC8vIE11bHRpLWRpbWVuc2lvbmFsXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgeERlbHRhID0gZGlzdGFuY2UxRChhLngsIGIueCk7XG4gICAgY29uc3QgeURlbHRhID0gZGlzdGFuY2UxRChhLnksIGIueSk7XG4gICAgY29uc3QgekRlbHRhID0gKGlzTnVtKGEueikpID8gZGlzdGFuY2UxRChhLnosIGIueikgOiAwO1xuXG4gICAgcmV0dXJuIE1hdGguc3FydCgoeERlbHRhICoqIDIpICsgKHlEZWx0YSAqKiAyKSArICh6RGVsdGEgKiogMikpO1xuICB9XG59O1xuXG4vKlxuICBWYWx1ZSBpbiByYW5nZSBmcm9tIHByb2dyZXNzXG4gIFxuICBHaXZlbiBhIGxvd2VyIGxpbWl0IGFuZCBhbiB1cHBlciBsaW1pdCwgd2UgcmV0dXJuIHRoZSB2YWx1ZSB3aXRoaW5cbiAgdGhhdCByYW5nZSBhcyBleHByZXNzZWQgYnkgcHJvZ3Jlc3MgKGEgbnVtYmVyIGZyb20gMC0xKVxuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBUaGUgcHJvZ3Jlc3MgYmV0d2VlbiBsb3dlciBhbmQgdXBwZXIgbGltaXRzIGV4cHJlc3NlZCAwLTFcbiAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBvZiByYW5nZVxuICBAcGFyYW0gW251bWJlcl06IFVwcGVyIGxpbWl0IG9mIHJhbmdlXG4gIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGFzIGNhbGN1bGF0ZWQgZnJvbSBwcm9ncmVzcyB3aXRoaW4gcmFuZ2UgKG5vdCBsaW1pdGVkIHdpdGhpbiByYW5nZSlcbiovXG5leHBvcnQgY29uc3QgZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MgPSAocHJvZ3Jlc3MsIGZyb20sIHRvKSA9PiAoLSBwcm9ncmVzcyAqIGZyb20pICsgKHByb2dyZXNzICogdG8pICsgZnJvbTtcblxuLypcbiAgUHJvZ3Jlc3Mgd2l0aGluIGdpdmVuIHJhbmdlXG4gIFxuICBHaXZlbiBhIGxvd2VyIGxpbWl0IGFuZCBhbiB1cHBlciBsaW1pdCwgd2UgcmV0dXJuIHRoZSBwcm9ncmVzc1xuICAoZXhwcmVzc2VkIGFzIGEgbnVtYmVyIDAtMSkgcmVwcmVzZW50ZWQgYnkgdGhlIGdpdmVuIHZhbHVlLCBhbmRcbiAgbGltaXQgdGhhdCBwcm9ncmVzcyB0byB3aXRoaW4gMC0xLlxuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSB0byBmaW5kIHByb2dyZXNzIHdpdGhpbiBnaXZlbiByYW5nZVxuICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IFxuICBAcGFyYW0gW251bWJlcl06IFVwcGVyIGxpbWl0XG4gIEByZXR1cm4gW251bWJlcl06IFByb2dyZXNzIG9mIHZhbHVlIHdpdGhpbiByYW5nZSBhcyBleHByZXNzZWQgMC0xXG4qL1xuZXhwb3J0IGNvbnN0IGdldFByb2dyZXNzRnJvbVZhbHVlID0gKHZhbHVlLCBmcm9tLCB0bykgPT4gKHZhbHVlIC0gZnJvbSkgLyAodG8gLSBmcm9tKTtcblxuLypcbiAgUG9pbnQgZnJvbSBhbmdsZSBhbmQgZGlzdGFuY2VcbiAgXG4gIEBwYXJhbSBbb2JqZWN0XTogMkQgcG9pbnQgb2Ygb3JpZ2luXG4gIEBwYXJhbSBbbnVtYmVyXTogQW5nbGUgZnJvbSBvcmlnaW5cbiAgQHBhcmFtIFtudW1iZXJdOiBEaXN0YW5jZSBmcm9tIG9yaWdpblxuICBAcmV0dXJuIFtvYmplY3RdOiBDYWxjdWxhdGVkIDJEIHBvaW50XG4qL1xuZXhwb3J0IGNvbnN0IHBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UgPSAob3JpZ2luLCBhbmdsZSwgZGlzdGFuY2UpID0+IHtcbiAgYW5nbGUgPSBkZWdyZWVzVG9SYWRpYW5zKGFuZ2xlKTtcblxuICByZXR1cm4ge1xuICAgIHg6IGRpc3RhbmNlICogTWF0aC5jb3MoYW5nbGUpICsgb3JpZ2luLngsXG4gICAgeTogZGlzdGFuY2UgKiBNYXRoLnNpbihhbmdsZSkgKyBvcmlnaW4ueVxuICB9O1xufTtcblxuLypcbiAgQ29udmVydCByYWRpYW5zIHRvIGRlZ3JlZXNcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgaW4gcmFkaWFuc1xuICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBpbiBkZWdyZWVzXG4qL1xuZXhwb3J0IGNvbnN0IHJhZGlhbnNUb0RlZ3JlZXMgPSAocmFkaWFucykgPT4gcmFkaWFucyAqIDE4MCAvIE1hdGguUEk7XG5cbi8qXG4gIFJldHVybiByYW5kb20gbnVtYmVyIGJldHdlZW4gcmFuZ2VcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBPdXRwdXQgbWluaW11bVxuICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogT3V0cHV0IG1heGltdW1cbiAgQHJldHVybiBbbnVtYmVyXTogUmFuZG9tIG51bWJlciB3aXRoaW4gcmFuZ2UsIG9yIDAgYW5kIDEgaWYgbm9uZSBwcm92aWRlZFxuKi9cbmV4cG9ydCBjb25zdCByYW5kb20gPSAobWluID0gMCwgbWF4ID0gMSkgPT4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xuXG4vKlxuICBDYWxjdWxhdGUgcmVsYXRpdmUgdmFsdWVcbiAgXG4gIFRha2VzIHRoZSBvcGVyYXRvciBhbmQgdmFsdWUgZnJvbSBhIHN0cmluZywgaWUgXCIrPTVcIiwgYW5kIGFwcGxpZXNcbiAgdG8gdGhlIGN1cnJlbnQgdmFsdWUgdG8gcmVzb2x2ZSBhIG5ldyB0YXJnZXQuXG4gIFxuICBAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcbiAgQHBhcmFtIFtzdHJpbmddOiBSZWxhdGl2ZSB2YWx1ZVxuICBAcmV0dXJuIFtudW1iZXJdOiBOZXcgdmFsdWVcbiovXG5leHBvcnQgY29uc3QgcmVsYXRpdmVWYWx1ZSA9IChjdXJyZW50LCByZWxhdGl2ZSkgPT4ge1xuICBsZXQgbmV3VmFsdWUgPSBjdXJyZW50O1xuICBjb25zdCBlcXVhdGlvbiA9IHJlbGF0aXZlLnNwbGl0KCc9Jyk7XG4gIGNvbnN0IG9wZXJhdG9yID0gZXF1YXRpb25bMF07XG4gIGxldCB7IHVuaXQsIHZhbHVlIH0gPSBmaW5kVmFsdWVBbmRVbml0KGVxdWF0aW9uWzFdKTtcblxuICB2YWx1ZSA9IHBhcnNlRmxvYXQodmFsdWUpO1xuXG4gIHN3aXRjaCAob3BlcmF0b3IpIHtcbiAgY2FzZSAnKyc6XG4gICAgbmV3VmFsdWUgKz0gdmFsdWU7XG4gICAgYnJlYWs7XG4gIGNhc2UgJy0nOlxuICAgIG5ld1ZhbHVlIC09IHZhbHVlO1xuICAgIGJyZWFrO1xuICBjYXNlICcqJzpcbiAgICBuZXdWYWx1ZSAqPSB2YWx1ZTtcbiAgICBicmVhaztcbiAgY2FzZSAnLyc6XG4gICAgbmV3VmFsdWUgLz0gdmFsdWU7XG4gICAgYnJlYWs7XG4gIH1cbiAgXG4gIGlmICh1bml0KSB7XG4gICAgbmV3VmFsdWUgKz0gdW5pdDtcbiAgfVxuXG4gIHJldHVybiBuZXdWYWx1ZTtcbn07XG5cbi8qXG4gIFJlc3RyaWN0IHZhbHVlIHRvIHJhbmdlXG4gIFxuICBSZXR1cm4gdmFsdWUgd2l0aGluIHRoZSByYW5nZSBvZiBsb3dlckxpbWl0IGFuZCB1cHBlckxpbWl0XG4gIFxuICBAcGFyYW0gW251bWJlcl06IFZhbHVlIHRvIGtlZXAgd2l0aGluIHJhbmdlXG4gIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgb2YgcmFuZ2VcbiAgQHBhcmFtIFtudW1iZXJdOiBVcHBlciBsaW1pdCBvZiByYW5nZVxuICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBhcyBsaW1pdGVkIHdpdGhpbiBnaXZlbiByYW5nZVxuKi9cbmV4cG9ydCBjb25zdCByZXN0cmljdCA9ICh2YWx1ZSwgbWluLCBtYXgpID0+IE1hdGgubWF4KE1hdGgubWluKHZhbHVlLCBtYXgpLCBtaW4pO1xuXG4vKlxuICBGcmFtZXJhdGUtaW5kZXBlbmRlbnQgc21vb3RoaW5nXG5cbiAgQHBhcmFtIFtudW1iZXJdOiBOZXcgdmFsdWVcbiAgQHBhcmFtIFtudW1iZXJdOiBPbGQgdmFsdWVcbiAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvblxuICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogU21vb3RoaW5nICgwIGlzIG5vbmUpXG4qL1xuZXhwb3J0IGNvbnN0IHNtb290aCA9IChuZXdWYWx1ZSwgb2xkVmFsdWUsIGR1cmF0aW9uLCBzbW9vdGhpbmcgPSAwKSA9PiB0b0RlY2ltYWwob2xkVmFsdWUgKyAoZHVyYXRpb24gKiAobmV3VmFsdWUgLSBvbGRWYWx1ZSkgLyBNYXRoLm1heChzbW9vdGhpbmcsIGR1cmF0aW9uKSkpO1xuXG4vKlxuICBDb252ZXJ0IHggcGVyIHNlY29uZCB0byBwZXIgZnJhbWUgdmVsb2NpdHkgYmFzZWQgb24gZnBzXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFVuaXQgcGVyIHNlY29uZFxuICBAcGFyYW0gW251bWJlcl06IEZyYW1lIGR1cmF0aW9uIGluIG1zXG4qL1xuZXhwb3J0IGNvbnN0IHNwZWVkUGVyRnJhbWUgPSAoeHBzLCBmcmFtZUR1cmF0aW9uKSA9PiAoaXNOdW0oeHBzKSkgPyB4cHMgLyAoMTAwMCAvIGZyYW1lRHVyYXRpb24pIDogMDtcblxuLypcbiAgQ29udmVydCB2ZWxvY2l0eSBpbnRvIHZlbGljaXR5IHBlciBzZWNvbmRcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogVW5pdCBwZXIgZnJhbWVcbiAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvbiBpbiBtc1xuKi9cbmV4cG9ydCBjb25zdCBzcGVlZFBlclNlY29uZCA9ICh2ZWxvY2l0eSwgZnJhbWVEdXJhdGlvbikgPT4gdmVsb2NpdHkgKiAoMTAwMCAvIGZyYW1lRHVyYXRpb24pO1xuXG4vKlxuICBDcmVhdGUgc3RlcHBlZCB2ZXJzaW9uIG9mIDAtMSBwcm9ncmVzc1xuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gIEBwYXJhbSBbaW50XTogTnVtYmVyIG9mIHN0ZXBzXG4gIEByZXR1cm4gW251bWJlcl06IFN0ZXBwZWQgdmFsdWVcbiovXG5leHBvcnQgY29uc3Qgc3RlcFByb2dyZXNzID0gKHByb2dyZXNzLCBzdGVwcykgPT4ge1xuICBjb25zdCBzZWdtZW50ID0gMSAvIChzdGVwcyAtIDEpO1xuICBjb25zdCB0YXJnZXQgPSAxIC0gKDEgLyBzdGVwcyk7XG4gIGNvbnN0IHByb2dyZXNzT2ZUYXJnZXQgPSBNYXRoLm1pbihwcm9ncmVzcyAvIHRhcmdldCwgMSk7XG5cbiAgcmV0dXJuIE1hdGguZmxvb3IocHJvZ3Jlc3NPZlRhcmdldCAvIHNlZ21lbnQpICogc2VnbWVudDtcbn07Il19

/***/ },
/* 11 */
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
/* 12 */
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
/* 13 */
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

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = track;
	function track(v1, v2) {
	  var v1Origin = v1.get();
	  var v2Origin = v2.get();
	
	  var updateV2 = function (v) {
	    var offset = v - v1Origin;
	    v2.update(v2Origin + offset);
	  };
	
	  v1.addListener(updateV2);
	
	  return function snap() {
	    v1.removeListener(updateV2);
	  };
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL3RyYWNrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztrQkFBd0I7QUFBVCxTQUFTLEtBQVQsQ0FBZSxFQUFmLEVBQW1CLEVBQW5CLEVBQXVCO0FBQ3BDLE1BQU0sV0FBVyxHQUFHLEdBQUgsRUFBWCxDQUQ4QjtBQUVwQyxNQUFNLFdBQVcsR0FBRyxHQUFILEVBQVgsQ0FGOEI7O0FBSXBDLE1BQU0sV0FBVyxVQUFDLENBQUQsRUFBTztBQUN0QixRQUFNLFNBQVMsSUFBSSxRQUFKLENBRE87QUFFdEIsT0FBRyxNQUFILENBQVUsV0FBVyxNQUFYLENBQVYsQ0FGc0I7R0FBUCxDQUptQjs7QUFTcEMsS0FBRyxXQUFILENBQWUsUUFBZixFQVRvQzs7QUFXcEMsU0FBTyxTQUFTLElBQVQsR0FBZ0I7QUFDckIsT0FBRyxjQUFILENBQWtCLFFBQWxCLEVBRHFCO0dBQWhCLENBWDZCO0NBQXZCIiwiZmlsZSI6InRyYWNrLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRyYWNrKHYxLCB2Mikge1xuICBjb25zdCB2MU9yaWdpbiA9IHYxLmdldCgpO1xuICBjb25zdCB2Mk9yaWdpbiA9IHYyLmdldCgpO1xuXG4gIGNvbnN0IHVwZGF0ZVYyID0gKHYpID0+IHtcbiAgICBjb25zdCBvZmZzZXQgPSB2IC0gdjFPcmlnaW47XG4gICAgdjIudXBkYXRlKHYyT3JpZ2luICsgb2Zmc2V0KTtcbiAgfVxuXG4gIHYxLmFkZExpc3RlbmVyKHVwZGF0ZVYyKTtcblxuICByZXR1cm4gZnVuY3Rpb24gc25hcCgpIHtcbiAgICB2MS5yZW1vdmVMaXN0ZW5lcih1cGRhdGVWMik7XG4gIH1cbn1cbiJdfQ==

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.steppedMotion = exports.restrictBetween = exports.restrictOver = exports.restrictUnder = exports.interpolate = exports.compose = exports.appendUnit = undefined;
	
	var _calc = __webpack_require__(10);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS9maWx0ZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7OztBQVNPLElBQU0sa0NBQWEsVUFBQyxJQUFEO1NBQVUsVUFBQyxDQUFEO2dCQUFVLElBQUk7R0FBZDtDQUFWOzs7Ozs7Ozs7QUFTbkIsSUFBTSw0QkFBVSxZQUFxQjtvQ0FBakI7O0dBQWlCOztBQUMxQyxNQUFNLGtCQUFrQixhQUFhLE1BQWIsQ0FEa0I7QUFFMUMsTUFBSSxJQUFJLENBQUosQ0FGc0M7O0FBSTFDLFNBQU8sVUFBQyxDQUFELEVBQUksS0FBSixFQUFjO0FBQ25CLFNBQUssSUFBSSxDQUFKLEVBQU8sSUFBSSxlQUFKLEVBQXFCLEdBQWpDLEVBQXNDO0FBQ3BDLFVBQUksYUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLEtBQW5CLENBQUosQ0FEb0M7S0FBdEM7O0FBSUEsV0FBTyxDQUFQLENBTG1CO0dBQWQsQ0FKbUM7Q0FBckI7O0FBYWhCLElBQU0sb0NBQWMsVUFBQyxLQUFELEVBQVEsTUFBUixFQUFnQixXQUFoQixFQUFnQztBQUN6RCxNQUFNLGNBQWMsTUFBTSxNQUFOLENBRHFDO0FBRXpELE1BQU0sYUFBYSxjQUFjLENBQWQsQ0FGc0M7O0FBSXpELFNBQU8sVUFBQyxDQUFELEVBQU87O0FBRVosUUFBSSxLQUFLLE1BQU0sQ0FBTixDQUFMLEVBQWU7QUFDakIsYUFBTyxPQUFPLENBQVAsQ0FBUCxDQURpQjtLQUFuQjs7O0FBRlksUUFPUixLQUFLLE1BQU0sVUFBTixDQUFMLEVBQXdCO0FBQzFCLGFBQU8sT0FBTyxVQUFQLENBQVAsQ0FEMEI7S0FBNUI7O0FBSUEsUUFBSSxJQUFJLENBQUo7OztBQVhRLFdBY0wsSUFBSSxXQUFKLEVBQWlCLEdBQXhCLEVBQTZCO0FBQzNCLFVBQUksTUFBTSxDQUFOLElBQVcsQ0FBWCxJQUFnQixNQUFNLFVBQU4sRUFBa0I7QUFDcEMsY0FEb0M7T0FBdEM7S0FERjs7QUFNQSxRQUFNLGtCQUFrQixnQ0FBcUIsQ0FBckIsRUFBd0IsTUFBTSxDQUFOLENBQXhCLEVBQWtDLE1BQU0sSUFBSSxDQUFKLENBQXhDLENBQWxCLENBcEJNO0FBcUJaLFFBQU0sZ0JBQWdCLGNBQWdCLFlBQVksQ0FBWixFQUFlLGVBQWYsQ0FBaEIsR0FBa0QsZUFBbEQsQ0FyQlY7QUFzQlosV0FBTyxnQ0FBcUIsYUFBckIsRUFBb0MsT0FBTyxDQUFQLENBQXBDLEVBQStDLE9BQU8sSUFBSSxDQUFKLENBQXRELENBQVAsQ0F0Qlk7R0FBUCxDQUprRDtDQUFoQzs7Ozs7Ozs7O0FBcUNwQixJQUFNLHdDQUFnQixVQUFDLEdBQUQ7U0FBUyxVQUFDLENBQUQ7V0FBTyxLQUFLLEdBQUwsQ0FBUyxDQUFULEVBQVksR0FBWjtHQUFQO0NBQVQ7QUFDdEIsSUFBTSxzQ0FBZSxVQUFDLEdBQUQ7U0FBUyxVQUFDLENBQUQ7V0FBTyxLQUFLLEdBQUwsQ0FBUyxDQUFULEVBQVksR0FBWjtHQUFQO0NBQVQ7QUFDckIsSUFBTSw0Q0FBa0IsVUFBQyxHQUFELEVBQU0sR0FBTjtTQUFjLFFBQVEsYUFBYSxHQUFiLENBQVIsRUFBMkIsY0FBYyxHQUFkLENBQTNCO0NBQWQ7O0FBRXhCLElBQU0sd0NBQWdCLFVBQUMsR0FBRCxFQUFNLEdBQU47U0FBYyxVQUFDLENBQUQsRUFBTyxFQUFQO0NBQWQiLCJmaWxlIjoiZmlsdGVycy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRQcm9ncmVzc0Zyb21WYWx1ZSwgZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MgfSBmcm9tICcuLi9pbmMvY2FsYyc7XG5cbi8qKlxuICogQXBwZW5kIFVuaXRcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgYXBwZW5kIHRoZSB1bml0IHRvIGEgZ2l2ZW4gdmFsdWVcbiAqIGFwcGVuZFVuaXQoJ3B4JykoMjApIC0+ICcyMHB4J1xuICogQHBhcmFtICB7c3RyaW5nfSB1bml0KVxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5leHBvcnQgY29uc3QgYXBwZW5kVW5pdCA9ICh1bml0KSA9PiAodikgPT4gYCR7dn0ke3VuaXR9YDtcblxuLyoqXG4gKiBDb21wb3NlXG4gKiBDb21wb3NlIG90aGVyIHRyYW5zZm9ybWVycyB0byBydW4gbGluZWFyaWx5XG4gKiBjb21wb3NlKG1pbigyMCksIG1heCg0MCkpXG4gKiBAcGFyYW0gIHsuLi5mdW5jdGlvbnN9IHRyYW5zZm9ybWVyc1xuICogQHJldHVybiB7ZnVuY3Rpb259XG4gKi9cbmV4cG9ydCBjb25zdCBjb21wb3NlID0gKC4uLnRyYW5zZm9ybWVycykgPT4ge1xuICBjb25zdCBudW1UcmFuc2Zvcm1lcnMgPSB0cmFuc2Zvcm1lcnMubGVuZ3RoO1xuICBsZXQgaSA9IDA7XG5cbiAgcmV0dXJuICh2LCB2YWx1ZSkgPT4ge1xuICAgIGZvciAoaSA9IDA7IGkgPCBudW1UcmFuc2Zvcm1lcnM7IGkrKykge1xuICAgICAgdiA9IHRyYW5zZm9ybWVyc1tpXSh2LCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHY7XG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgaW50ZXJwb2xhdGUgPSAoaW5wdXQsIG91dHB1dCwgcmFuZ2VFYXNpbmcpID0+IHtcbiAgY29uc3QgcmFuZ2VMZW5ndGggPSBpbnB1dC5sZW5ndGg7XG4gIGNvbnN0IGZpbmFsSW5kZXggPSByYW5nZUxlbmd0aCAtIDE7XG5cbiAgcmV0dXJuICh2KSA9PiB7XG4gICAgLy8gSWYgdmFsdWUgb3V0c2lkZSBtaW5pbXVtIHJhbmdlLCBxdWlja2x5IHJldHVyblxuICAgIGlmICh2IDw9IGlucHV0WzBdKSB7XG4gICAgICByZXR1cm4gb3V0cHV0WzBdO1xuICAgIH1cblxuICAgIC8vIElmIHZhbHVlIG91dHNpZGUgbWF4aW11bSByYW5nZSwgcXVpY2tseSByZXR1cm5cbiAgICBpZiAodiA+PSBpbnB1dFtmaW5hbEluZGV4XSkge1xuICAgICAgcmV0dXJuIG91dHB1dFtmaW5hbEluZGV4XTtcbiAgICB9XG5cbiAgICBsZXQgaSA9IDA7XG5cbiAgICAvLyBGaW5kIGluZGV4IG9mIHJhbmdlIHN0YXJ0XG4gICAgZm9yICg7IGkgPCByYW5nZUxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaW5wdXRbaV0gPiB2IHx8IGkgPT09IGZpbmFsSW5kZXgpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcHJvZ3Jlc3NJblJhbmdlID0gZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUodiwgaW5wdXRbaV0sIGlucHV0W2kgKyAxXSk7XG4gICAgY29uc3QgZWFzZWRQcm9ncmVzcyA9IChyYW5nZUVhc2luZykgPyByYW5nZUVhc2luZ1tpXShwcm9ncmVzc0luUmFuZ2UpIDogcHJvZ3Jlc3NJblJhbmdlO1xuICAgIHJldHVybiBnZXRWYWx1ZUZyb21Qcm9ncmVzcyhlYXNlZFByb2dyZXNzLCBvdXRwdXRbaV0sIG91dHB1dFtpICsgMV0pO1xuICB9O1xufTtcblxuLyoqXG4gKiBSZXN0cmljdCB2YWx1ZSBiZXR3ZWVuXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCB3aWxsIHJlc3RyaWN0IGEgZ2l2ZW4gdmFsdWUgYmV0d2VlbiBgbWluYCBhbmQgYG1heGBcbiAqIEBwYXJhbSAge251bWJlcn0gbWluXG4gKiBAcGFyYW0gIHtudW1iZXJ9IG1heFxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5leHBvcnQgY29uc3QgcmVzdHJpY3RVbmRlciA9IChtYXgpID0+ICh2KSA9PiBNYXRoLm1pbih2LCBtYXgpO1xuZXhwb3J0IGNvbnN0IHJlc3RyaWN0T3ZlciA9IChtaW4pID0+ICh2KSA9PiBNYXRoLm1heCh2LCBtaW4pO1xuZXhwb3J0IGNvbnN0IHJlc3RyaWN0QmV0d2VlbiA9IChtaW4sIG1heCkgPT4gY29tcG9zZShyZXN0cmljdE92ZXIobWluKSwgcmVzdHJpY3RVbmRlcihtYXgpKTtcblxuZXhwb3J0IGNvbnN0IHN0ZXBwZWRNb3Rpb24gPSAobWluLCBtYXgpID0+ICh2KSA9PiB7XG4gIFxufTsiXX0=

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYWM0YzMyYjExMmM0YWU0NTUwZjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9wbW90aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3R3ZWVuLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3ZlbG9jaXR5LmpzIiwid2VicGFjazovLy8uL3NyYy9pbnB1dC9wb2ludGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9mcmFtZXN5bmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9lYXNpbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy9jYWxjLmpzIiwid2VicGFjazovLy8uL3NyYy9mcmFtZXN5bmMvb24tbmV4dC1mcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJhbWVzeW5jL2NyZWF0ZS1yZW5kZXItc3RlcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3RyYWNrLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS9maWx0ZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHdDOzs7Ozs7O0FDdENBOztBQUVBOztBQUVBOztBQUVBLHdDQUF1Qyw2QkFBNkIsWUFBWSxFQUFFLE9BQU8saUJBQWlCLG1CQUFtQix1QkFBdUIsNEVBQTRFLEVBQUUsRUFBRSxzQkFBc0IsZUFBZSxFQUFFOztBQUUzUTtBQUNBLDRDQUEyQywyVzs7Ozs7O0FDVDNDOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsd0NBQXVDLDZCQUE2QixZQUFZLEVBQUUsT0FBTyxpQkFBaUIsbUJBQW1CLHVCQUF1Qiw0RUFBNEUsRUFBRSxFQUFFLHNCQUFzQixlQUFlLEVBQUU7O0FBRTNRLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLG9CQUFvQjs7QUFFL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQTZCOztBQUU3QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsWUFBVztBQUNYLDRDQUEyQywraEo7Ozs7OztBQ25MM0M7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLGtEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKLGtEQUFpRCxhQUFhLHVGQUF1RixFQUFFLHVGQUF1Rjs7QUFFOU8sMkNBQTBDLCtEQUErRCxxR0FBcUcsRUFBRSx5RUFBeUUsZUFBZSx5RUFBeUUsRUFBRSxFQUFFLHVIQUF1SDs7QUFFNWU7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRDQUEyQyx1dkU7Ozs7OztBQ3JFM0M7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLGtEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKLGtEQUFpRCxhQUFhLHVGQUF1RixFQUFFLHVGQUF1Rjs7QUFFOU8sMkNBQTBDLCtEQUErRCxxR0FBcUcsRUFBRSx5RUFBeUUsZUFBZSx5RUFBeUUsRUFBRSxFQUFFLHVIQUF1SDs7QUFFNWU7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNENBQTJDLDIyRTs7Ozs7O0FDdkUzQzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Ysa0RBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdko7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0EsNENBQTJDLCs2Rzs7Ozs7O0FDaEYzQzs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3Rjs7QUFFQTtBQUNBO0FBQ0EsV0FBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVU7QUFDVjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTJDLG1zSDs7Ozs7O0FDOUUzQzs7QUFFQTs7QUFFQSxrREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFxQixrQkFBa0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSw0Q0FBMkMsK3ZHOzs7Ozs7QUN0RTNDOztBQUVBOztBQUVBLG9EQUFtRCxnQkFBZ0Isc0JBQXNCLE9BQU8sMkJBQTJCLDBCQUEwQix5REFBeUQsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLGVBQWU7O0FBRTlQOztBQUVBOztBQUVBLGtEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsNkJBQTRCO0FBQzVCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBLDRDQUEyQyxtako7Ozs7OztBQzlHM0M7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBMkMsbXhHOzs7Ozs7O0FDbkQzQzs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUEyQyxtbFk7Ozs7OztBQzNRM0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBLDRDQUEyQywyekU7Ozs7OztBQzdDM0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXFCLGtCQUFrQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTJDLG11Rjs7Ozs7O0FDL0MzQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRDQUEyQyx1cE07Ozs7OztBQy9KM0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUEyQywra0M7Ozs7OztBQ25CM0M7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQVksT0FBTztBQUNuQixhQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBWSxhQUFhO0FBQ3pCLGFBQVk7QUFDWjtBQUNBO0FBQ0EsMEVBQXlFLGFBQWE7QUFDdEY7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWUscUJBQXFCO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsV0FBVSxpQkFBaUI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFZLE9BQU87QUFDbkIsYUFBWSxPQUFPO0FBQ25CLGFBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRDQUEyQyx1dEoiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBhYzRjMzJiMTEyYzRhZTQ1NTBmMVxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9wb3Btb3Rpb24gPSByZXF1aXJlKCcuL3BvcG1vdGlvbicpO1xuXG52YXIgUG9wbW90aW9uID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3BvcG1vdGlvbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbndpbmRvdy5Qb3Btb3Rpb24gPSBQb3Btb3Rpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OW5iRzlpWVd3dWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZCUVRzN1NVRkJXVHM3T3p0QlFVTmFMRTlCUVU4c1UwRkJVQ3hIUVVGdFFpeFRRVUZ1UWlJc0ltWnBiR1VpT2lKbmJHOWlZV3d1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUNvZ1lYTWdVRzl3Ylc5MGFXOXVJR1p5YjIwZ0p5NHZjRzl3Ylc5MGFXOXVKenRjYm5kcGJtUnZkeTVRYjNCdGIzUnBiMjRnUFNCUWIzQnRiM1JwYjI0N1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9nbG9iYWwuanNcbiAqKiBtb2R1bGUgaWQgPSAwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmVhc2luZyA9IGV4cG9ydHMucG9pbnRlciA9IGV4cG9ydHMudmVsb2NpdHkgPSBleHBvcnRzLnRyYWNrID0gZXhwb3J0cy50d2VlbiA9IGV4cG9ydHMuQWN0aW9uID0gZXhwb3J0cy52YWx1ZSA9IGV4cG9ydHMuY3VycmVudEZyYW1lVGltZXN0YW1wID0gZXhwb3J0cy50aW1lU2luY2VMYXN0RnJhbWUgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVFbmQgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVSZW5kZXIgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVVcGRhdGUgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVTdGFydCA9IGV4cG9ydHMub25GcmFtZUVuZCA9IGV4cG9ydHMub25GcmFtZVJlbmRlciA9IGV4cG9ydHMub25GcmFtZVVwZGF0ZSA9IGV4cG9ydHMub25GcmFtZVN0YXJ0ID0gdW5kZWZpbmVkO1xuXG52YXIgX2ZyYW1lc3luYyA9IHJlcXVpcmUoJy4vZnJhbWVzeW5jJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnb25GcmFtZVN0YXJ0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ZyYW1lc3luYy5vbkZyYW1lU3RhcnQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdvbkZyYW1lVXBkYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ZyYW1lc3luYy5vbkZyYW1lVXBkYXRlO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnb25GcmFtZVJlbmRlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9mcmFtZXN5bmMub25GcmFtZVJlbmRlcjtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ29uRnJhbWVFbmQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZnJhbWVzeW5jLm9uRnJhbWVFbmQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjYW5jZWxPbkZyYW1lU3RhcnQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZnJhbWVzeW5jLmNhbmNlbE9uRnJhbWVTdGFydDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NhbmNlbE9uRnJhbWVVcGRhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZnJhbWVzeW5jLmNhbmNlbE9uRnJhbWVVcGRhdGU7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjYW5jZWxPbkZyYW1lUmVuZGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ZyYW1lc3luYy5jYW5jZWxPbkZyYW1lUmVuZGVyO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY2FuY2VsT25GcmFtZUVuZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9mcmFtZXN5bmMuY2FuY2VsT25GcmFtZUVuZDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3RpbWVTaW5jZUxhc3RGcmFtZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9mcmFtZXN5bmMudGltZVNpbmNlTGFzdEZyYW1lO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3VycmVudEZyYW1lVGltZXN0YW1wJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ZyYW1lc3luYy5jdXJyZW50RnJhbWVUaW1lc3RhbXA7XG4gIH1cbn0pO1xuXG52YXIgX3ZhbHVlMiA9IHJlcXVpcmUoJy4vdmFsdWUnKTtcblxudmFyIF92YWx1ZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF92YWx1ZTIpO1xuXG52YXIgX2FjdGlvbnMgPSByZXF1aXJlKCcuL2FjdGlvbnMnKTtcblxudmFyIF9hY3Rpb25zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FjdGlvbnMpO1xuXG52YXIgX3R3ZWVuMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy90d2VlbicpO1xuXG52YXIgX3R3ZWVuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R3ZWVuMik7XG5cbnZhciBfdHJhY2syID0gcmVxdWlyZSgnLi9hY3Rpb25zL3RyYWNrJyk7XG5cbnZhciBfdHJhY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhY2syKTtcblxudmFyIF92ZWxvY2l0eTIgPSByZXF1aXJlKCcuL2FjdGlvbnMvdmVsb2NpdHknKTtcblxudmFyIF92ZWxvY2l0eTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF92ZWxvY2l0eTIpO1xuXG52YXIgX3BvaW50ZXIyID0gcmVxdWlyZSgnLi9pbnB1dC9wb2ludGVyJyk7XG5cbnZhciBfcG9pbnRlcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb2ludGVyMik7XG5cbnZhciBfZWFzaW5nMiA9IHJlcXVpcmUoJy4vZWFzaW5nJyk7XG5cbnZhciBfZWFzaW5nID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2Vhc2luZzIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLnZhbHVlID0gX3ZhbHVlMy5kZWZhdWx0O1xuZXhwb3J0cy5BY3Rpb24gPSBfYWN0aW9uczIuZGVmYXVsdDtcbmV4cG9ydHMudHdlZW4gPSBfdHdlZW4zLmRlZmF1bHQ7XG5leHBvcnRzLnRyYWNrID0gX3RyYWNrMy5kZWZhdWx0O1xuZXhwb3J0cy52ZWxvY2l0eSA9IF92ZWxvY2l0eTMuZGVmYXVsdDtcbmV4cG9ydHMucG9pbnRlciA9IF9wb2ludGVyMy5kZWZhdWx0O1xuZXhwb3J0cy5lYXNpbmcgPSBfZWFzaW5nO1xuXG4vLyAvLyBJbXBvcnQgY2xhc3NlcyAtIGxvbmcgdGVybSBnb2FsIHRvIG1vdmUgdG93YXJkcyBjb21wb3NpdGlvblxuLy8gaW1wb3J0IEFjdGlvbiBmcm9tICcuL2FjdGlvbnMvQWN0aW9uJztcbi8vIGltcG9ydCBGbG93IGZyb20gJy4vYWN0aW9ucy9GbG93Jztcbi8vIGltcG9ydCBUd2VlbiBmcm9tICcuL2FjdGlvbnMvVHdlZW4nO1xuLy8gaW1wb3J0IFBoeXNpY3MgZnJvbSAnLi9hY3Rpb25zL1BoeXNpY3MnO1xuLy8gaW1wb3J0IFRyYWNrIGZyb20gJy4vYWN0aW9ucy9UcmFjayc7XG4vLyBpbXBvcnQgVGFzayBmcm9tICcuL3Rhc2svVGFzayc7XG4vLyBpbXBvcnQgSW5wdXQgZnJvbSAnLi9pbnB1dC9JbnB1dCc7XG5cbi8vIC8vIEV4cG9ydCBmYWN0b3J5IGZ1bmN0aW9uc1xuLy8gZXhwb3J0IGNvbnN0IGZsb3cgPSAoLi4uYXJncykgPT4gbmV3IEZsb3coLi4uYXJncyk7XG4vLyBleHBvcnQgY29uc3QgdHdlZW4gPSAocHJvcHMpID0+IG5ldyBUd2Vlbihwcm9wcyk7XG4vLyBleHBvcnQgY29uc3QgcGh5c2ljcyA9IChwcm9wcykgPT4gbmV3IFBoeXNpY3MocHJvcHMpO1xuLy8gZXhwb3J0IGNvbnN0IHRyYWNrID0gKC4uLmFyZ3MpID0+IG5ldyBUcmFjayguLi5hcmdzKTtcbi8vIGV4cG9ydCBjb25zdCBpbnB1dCA9ICguLi5hcmdzKSA9PiBuZXcgSW5wdXQoLi4uYXJncyk7XG4vLyBleHBvcnQgY29uc3QgdGFzayA9ICguLi5hcmdzKSA9PiBuZXcgVGFzayguLi5hcmdzKTtcbi8vIGV4cG9ydCBzdGFnZ2VyIGZyb20gJy4vaW5jL3N0YWdnZXInO1xuLy8gZXhwb3J0IHRpbWVsaW5lIGZyb20gJy4vaW5jL3RpbWVsaW5lJztcblxuLy8gLy8gQWRhcHRlcnNcbi8vIGV4cG9ydCBjcmVhdGVBZGFwdGVyIGZyb20gJy4vYWRhcHRlci9hZGFwdGVyJztcbi8vIGV4cG9ydCBhdHRyIGZyb20gJy4vYWRhcHRlci9hdHRyLWFkYXB0ZXInO1xuLy8gZXhwb3J0IGNzcyBmcm9tICcuL2FkYXB0ZXIvY3NzLWFkYXB0ZXInO1xuLy8gZXhwb3J0IG9iamVjdCBmcm9tICcuL2FkYXB0ZXIvb2JqZWN0LWFkYXB0ZXInO1xuLy8gZXhwb3J0IHN2ZyBmcm9tICcuL2FkYXB0ZXIvc3ZnLWFkYXB0ZXInO1xuLy8gZXhwb3J0IHN2Z1BhdGggZnJvbSAnLi9hZGFwdGVyL3N2Zy1wYXRoLWFkYXB0ZXInO1xuXG4vLyAvLyBFYXNpbmdcbi8vIGV4cG9ydCBlYXNpbmcgZnJvbSAnLi9hY3Rpb25zL2Vhc2luZy9wcmVzZXQtZWFzaW5nJztcbi8vIGltcG9ydCBnZXRGbG93IGZyb20gJy4vYWN0aW9ucy9mbG93L2dldC1mbG93Jztcbi8vIGV4cG9ydCBjb25zdCBkZXRlY3RGbG93ID0gZ2V0RmxvdztcblxuLy8gLy8gVXRpbHNcbi8vIGV4cG9ydCAqIGFzIGNhbGMgZnJvbSAnLi9pbmMvY2FsYyc7XG4vLyBleHBvcnQgKiBhcyB1dGlscyBmcm9tICcuL2luYy91dGlscyc7XG4vLyBleHBvcnQgeyBzZXRHbG9iYWxEaWxhdGlvbiB9IGZyb20gJy4vdGFzay90aW1lcic7XG5cbi8vIC8vIFZhbHVlIHR5cGVzXG4vLyBpbXBvcnQgYWxwaGEgZnJvbSAnLi92YWx1ZS10eXBlcy9hbHBoYSc7XG4vLyBpbXBvcnQgYW5nbGUgZnJvbSAnLi92YWx1ZS10eXBlcy9hbmdsZSc7XG4vLyBpbXBvcnQgY29sb3IgZnJvbSAnLi92YWx1ZS10eXBlcy9jb2xvcic7XG4vLyBpbXBvcnQgY29tcGxleCBmcm9tICcuL3ZhbHVlLXR5cGVzL2NvbXBsZXgnO1xuLy8gaW1wb3J0IGhleCBmcm9tICcuL3ZhbHVlLXR5cGVzL2hleCc7XG4vLyBpbXBvcnQgaHNsIGZyb20gJy4vdmFsdWUtdHlwZXMvaHNsJztcbi8vIGltcG9ydCBweCBmcm9tICcuL3ZhbHVlLXR5cGVzL3B4Jztcbi8vIGltcG9ydCByZ2IgZnJvbSAnLi92YWx1ZS10eXBlcy9yZ2InO1xuLy8gaW1wb3J0IHNjYWxlIGZyb20gJy4vdmFsdWUtdHlwZXMvc2NhbGUnO1xuLy8gaW1wb3J0IHNoYWRvdyBmcm9tICcuL3ZhbHVlLXR5cGVzL3NoYWRvdyc7XG4vLyBpbXBvcnQgdW5pdCBmcm9tICcuL3ZhbHVlLXR5cGVzL3VuaXQnO1xuLy8gZXhwb3J0IGNvbnN0IHZhbHVlVHlwZSA9IHsgYWxwaGEsIGFuZ2xlLCBjb2xvciwgY29tcGxleCwgaGV4LCBoc2wsIHB4LCByZ2IsIHNjYWxlLCBzaGFkb3csIHVuaXQgfTtcblxuLy8gLy8gVHJhbnNmb3JtZXJzXG4vLyBleHBvcnQgKiBhcyB0cmFuc2Zvcm1lcnMgZnJvbSAnLi9pbmMvdHJhbnNmb3JtZXJzJztcblxuLy8gLypcbi8vICAgUmV0dXJucyBhIHZlcnNpb24gb2YgdGhlIEFjdGlvbiBib3VuZCB0byBhIEZsb3dcblxuLy8gICBXZSdyZSBhZGRpbmcgYG9uYCBoZXJlIGJlY2F1c2UgRmxvdyBleHRlbmRzIEFjdGlvbixcbi8vICAgb3RoZXJ3aXNlIGNyZWF0aW5nIGEgY2lyY3VsYXIgbW9kdWxhciBkZXBlbmRlbmN5LiBGdXR1cmVcbi8vICAgcmVmYWN0b3JpbmcsIGllIG1vdmluZyB0byBhIGNvbXBvc2l0aW9uYWwgbW9kZWwgd2lsbFxuLy8gICByZW1vdmUgdGhlIG5lZWQgZm9yIHVzIHRvIGRvIHRoaXMgaGVyZS5cbi8vICovXG4vLyBBY3Rpb24ucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbi8vICAgaWYgKCFlbGVtZW50LmNvbm5lY3QpIHtcbi8vICAgICBlbGVtZW50ID0gZ2V0RmxvdyhlbGVtZW50KTtcbi8vICAgfVxuXG4vLyAgIHJldHVybiBlbGVtZW50LmNvbm5lY3QodGhpcyk7XG4vLyB9O1xuXG4vLyBleHBvcnQgeyBBY3Rpb24gfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5d2IzQnRiM1JwYjI0dWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096dHpRa0ZGUlRzN096czdPM05DUVVOQk96czdPenM3YzBKQlEwRTdPenM3T3p0elFrRkRRVHM3T3pzN08zTkNRVU5CT3pzN096czdjMEpCUTBFN096czdPenR6UWtGRFFUczdPenM3TzNOQ1FVTkJPenM3T3pzN2MwSkJRMEU3T3pzN096dHpRa0ZEUVRzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3TzFGQlIwczdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMHNpTENKbWFXeGxJam9pY0c5d2JXOTBhVzl1TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMEwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpOHZJRVp5WVcxbGMzbHVZeUJ6WTJobFpIVnNaWEp6WEc1bGVIQnZjblFnZTF4dUlDQnZia1p5WVcxbFUzUmhjblFzWEc0Z0lHOXVSbkpoYldWVmNHUmhkR1VzWEc0Z0lHOXVSbkpoYldWU1pXNWtaWElzWEc0Z0lHOXVSbkpoYldWRmJtUXNYRzRnSUdOaGJtTmxiRTl1Um5KaGJXVlRkR0Z5ZEN4Y2JpQWdZMkZ1WTJWc1QyNUdjbUZ0WlZWd1pHRjBaU3hjYmlBZ1kyRnVZMlZzVDI1R2NtRnRaVkpsYm1SbGNpeGNiaUFnWTJGdVkyVnNUMjVHY21GdFpVVnVaQ3hjYmlBZ2RHbHRaVk5wYm1ObFRHRnpkRVp5WVcxbExGeHVJQ0JqZFhKeVpXNTBSbkpoYldWVWFXMWxjM1JoYlhCY2JuMGdabkp2YlNBbkxpOW1jbUZ0WlhONWJtTW5PMXh1WEc1bGVIQnZjblFnZG1Gc2RXVWdabkp2YlNBbkxpOTJZV3gxWlNjN1hHNWxlSEJ2Y25RZ1FXTjBhVzl1SUdaeWIyMGdKeTR2WVdOMGFXOXVjeWM3WEc1bGVIQnZjblFnZEhkbFpXNGdabkp2YlNBbkxpOWhZM1JwYjI1ekwzUjNaV1Z1Snp0Y2JtVjRjRzl5ZENCMGNtRmpheUJtY205dElDY3VMMkZqZEdsdmJuTXZkSEpoWTJzbk8xeHVaWGh3YjNKMElIWmxiRzlqYVhSNUlHWnliMjBnSnk0dllXTjBhVzl1Y3k5MlpXeHZZMmwwZVNjN1hHNWxlSEJ2Y25RZ2NHOXBiblJsY2lCbWNtOXRJQ2N1TDJsdWNIVjBMM0J2YVc1MFpYSW5PMXh1Wlhod2IzSjBJQ29nWVhNZ1pXRnphVzVuSUdaeWIyMGdKeTR2WldGemFXNW5KenRjYmx4dUx5OGdMeThnU1cxd2IzSjBJR05zWVhOelpYTWdMU0JzYjI1bklIUmxjbTBnWjI5aGJDQjBieUJ0YjNabElIUnZkMkZ5WkhNZ1kyOXRjRzl6YVhScGIyNWNiaTh2SUdsdGNHOXlkQ0JCWTNScGIyNGdabkp2YlNBbkxpOWhZM1JwYjI1ekwwRmpkR2x2YmljN1hHNHZMeUJwYlhCdmNuUWdSbXh2ZHlCbWNtOXRJQ2N1TDJGamRHbHZibk12Um14dmR5YzdYRzR2THlCcGJYQnZjblFnVkhkbFpXNGdabkp2YlNBbkxpOWhZM1JwYjI1ekwxUjNaV1Z1Snp0Y2JpOHZJR2x0Y0c5eWRDQlFhSGx6YVdOeklHWnliMjBnSnk0dllXTjBhVzl1Y3k5UWFIbHphV056Snp0Y2JpOHZJR2x0Y0c5eWRDQlVjbUZqYXlCbWNtOXRJQ2N1TDJGamRHbHZibk12VkhKaFkyc25PMXh1THk4Z2FXMXdiM0owSUZSaGMyc2dabkp2YlNBbkxpOTBZWE5yTDFSaGMyc25PMXh1THk4Z2FXMXdiM0owSUVsdWNIVjBJR1p5YjIwZ0p5NHZhVzV3ZFhRdlNXNXdkWFFuTzF4dVhHNHZMeUF2THlCRmVIQnZjblFnWm1GamRHOXllU0JtZFc1amRHbHZibk5jYmk4dklHVjRjRzl5ZENCamIyNXpkQ0JtYkc5M0lEMGdLQzR1TG1GeVozTXBJRDArSUc1bGR5QkdiRzkzS0M0dUxtRnlaM01wTzF4dUx5OGdaWGh3YjNKMElHTnZibk4wSUhSM1pXVnVJRDBnS0hCeWIzQnpLU0E5UGlCdVpYY2dWSGRsWlc0b2NISnZjSE1wTzF4dUx5OGdaWGh3YjNKMElHTnZibk4wSUhCb2VYTnBZM01nUFNBb2NISnZjSE1wSUQwK0lHNWxkeUJRYUhsemFXTnpLSEJ5YjNCektUdGNiaTh2SUdWNGNHOXlkQ0JqYjI1emRDQjBjbUZqYXlBOUlDZ3VMaTVoY21kektTQTlQaUJ1WlhjZ1ZISmhZMnNvTGk0dVlYSm5jeWs3WEc0dkx5QmxlSEJ2Y25RZ1kyOXVjM1FnYVc1d2RYUWdQU0FvTGk0dVlYSm5jeWtnUFQ0Z2JtVjNJRWx1Y0hWMEtDNHVMbUZ5WjNNcE8xeHVMeThnWlhod2IzSjBJR052Ym5OMElIUmhjMnNnUFNBb0xpNHVZWEpuY3lrZ1BUNGdibVYzSUZSaGMyc29MaTR1WVhKbmN5azdYRzR2THlCbGVIQnZjblFnYzNSaFoyZGxjaUJtY205dElDY3VMMmx1WXk5emRHRm5aMlZ5Snp0Y2JpOHZJR1Y0Y0c5eWRDQjBhVzFsYkdsdVpTQm1jbTl0SUNjdUwybHVZeTkwYVcxbGJHbHVaU2M3WEc1Y2JpOHZJQzh2SUVGa1lYQjBaWEp6WEc0dkx5QmxlSEJ2Y25RZ1kzSmxZWFJsUVdSaGNIUmxjaUJtY205dElDY3VMMkZrWVhCMFpYSXZZV1JoY0hSbGNpYzdYRzR2THlCbGVIQnZjblFnWVhSMGNpQm1jbTl0SUNjdUwyRmtZWEIwWlhJdllYUjBjaTFoWkdGd2RHVnlKenRjYmk4dklHVjRjRzl5ZENCamMzTWdabkp2YlNBbkxpOWhaR0Z3ZEdWeUwyTnpjeTFoWkdGd2RHVnlKenRjYmk4dklHVjRjRzl5ZENCdlltcGxZM1FnWm5KdmJTQW5MaTloWkdGd2RHVnlMMjlpYW1WamRDMWhaR0Z3ZEdWeUp6dGNiaTh2SUdWNGNHOXlkQ0J6ZG1jZ1puSnZiU0FuTGk5aFpHRndkR1Z5TDNOMlp5MWhaR0Z3ZEdWeUp6dGNiaTh2SUdWNGNHOXlkQ0J6ZG1kUVlYUm9JR1p5YjIwZ0p5NHZZV1JoY0hSbGNpOXpkbWN0Y0dGMGFDMWhaR0Z3ZEdWeUp6dGNibHh1THk4Z0x5OGdSV0Z6YVc1blhHNHZMeUJsZUhCdmNuUWdaV0Z6YVc1bklHWnliMjBnSnk0dllXTjBhVzl1Y3k5bFlYTnBibWN2Y0hKbGMyVjBMV1ZoYzJsdVp5YzdYRzR2THlCcGJYQnZjblFnWjJWMFJteHZkeUJtY205dElDY3VMMkZqZEdsdmJuTXZabXh2ZHk5blpYUXRabXh2ZHljN1hHNHZMeUJsZUhCdmNuUWdZMjl1YzNRZ1pHVjBaV04wUm14dmR5QTlJR2RsZEVac2IzYzdYRzVjYmk4dklDOHZJRlYwYVd4elhHNHZMeUJsZUhCdmNuUWdLaUJoY3lCallXeGpJR1p5YjIwZ0p5NHZhVzVqTDJOaGJHTW5PMXh1THk4Z1pYaHdiM0owSUNvZ1lYTWdkWFJwYkhNZ1puSnZiU0FuTGk5cGJtTXZkWFJwYkhNbk8xeHVMeThnWlhod2IzSjBJSHNnYzJWMFIyeHZZbUZzUkdsc1lYUnBiMjRnZlNCbWNtOXRJQ2N1TDNSaGMyc3ZkR2x0WlhJbk8xeHVYRzR2THlBdkx5QldZV3gxWlNCMGVYQmxjMXh1THk4Z2FXMXdiM0owSUdGc2NHaGhJR1p5YjIwZ0p5NHZkbUZzZFdVdGRIbHdaWE12WVd4d2FHRW5PMXh1THk4Z2FXMXdiM0owSUdGdVoyeGxJR1p5YjIwZ0p5NHZkbUZzZFdVdGRIbHdaWE12WVc1bmJHVW5PMXh1THk4Z2FXMXdiM0owSUdOdmJHOXlJR1p5YjIwZ0p5NHZkbUZzZFdVdGRIbHdaWE12WTI5c2IzSW5PMXh1THk4Z2FXMXdiM0owSUdOdmJYQnNaWGdnWm5KdmJTQW5MaTkyWVd4MVpTMTBlWEJsY3k5amIyMXdiR1Y0Snp0Y2JpOHZJR2x0Y0c5eWRDQm9aWGdnWm5KdmJTQW5MaTkyWVd4MVpTMTBlWEJsY3k5b1pYZ25PMXh1THk4Z2FXMXdiM0owSUdoemJDQm1jbTl0SUNjdUwzWmhiSFZsTFhSNWNHVnpMMmh6YkNjN1hHNHZMeUJwYlhCdmNuUWdjSGdnWm5KdmJTQW5MaTkyWVd4MVpTMTBlWEJsY3k5d2VDYzdYRzR2THlCcGJYQnZjblFnY21kaUlHWnliMjBnSnk0dmRtRnNkV1V0ZEhsd1pYTXZjbWRpSnp0Y2JpOHZJR2x0Y0c5eWRDQnpZMkZzWlNCbWNtOXRJQ2N1TDNaaGJIVmxMWFI1Y0dWekwzTmpZV3hsSnp0Y2JpOHZJR2x0Y0c5eWRDQnphR0ZrYjNjZ1puSnZiU0FuTGk5MllXeDFaUzEwZVhCbGN5OXphR0ZrYjNjbk8xeHVMeThnYVcxd2IzSjBJSFZ1YVhRZ1puSnZiU0FuTGk5MllXeDFaUzEwZVhCbGN5OTFibWwwSnp0Y2JpOHZJR1Y0Y0c5eWRDQmpiMjV6ZENCMllXeDFaVlI1Y0dVZ1BTQjdJR0ZzY0doaExDQmhibWRzWlN3Z1kyOXNiM0lzSUdOdmJYQnNaWGdzSUdobGVDd2dhSE5zTENCd2VDd2djbWRpTENCelkyRnNaU3dnYzJoaFpHOTNMQ0IxYm1sMElIMDdYRzVjYmk4dklDOHZJRlJ5WVc1elptOXliV1Z5YzF4dUx5OGdaWGh3YjNKMElDb2dZWE1nZEhKaGJuTm1iM0p0WlhKeklHWnliMjBnSnk0dmFXNWpMM1J5WVc1elptOXliV1Z5Y3ljN1hHNWNiaTh2SUM4cVhHNHZMeUFnSUZKbGRIVnlibk1nWVNCMlpYSnphVzl1SUc5bUlIUm9aU0JCWTNScGIyNGdZbTkxYm1RZ2RHOGdZU0JHYkc5M1hHNWNiaTh2SUNBZ1YyVW5jbVVnWVdSa2FXNW5JR0J2Ym1BZ2FHVnlaU0JpWldOaGRYTmxJRVpzYjNjZ1pYaDBaVzVrY3lCQlkzUnBiMjRzWEc0dkx5QWdJRzkwYUdWeWQybHpaU0JqY21WaGRHbHVaeUJoSUdOcGNtTjFiR0Z5SUcxdlpIVnNZWElnWkdWd1pXNWtaVzVqZVM0Z1JuVjBkWEpsWEc0dkx5QWdJSEpsWm1GamRHOXlhVzVuTENCcFpTQnRiM1pwYm1jZ2RHOGdZU0JqYjIxd2IzTnBkR2x2Ym1Gc0lHMXZaR1ZzSUhkcGJHeGNiaTh2SUNBZ2NtVnRiM1psSUhSb1pTQnVaV1ZrSUdadmNpQjFjeUIwYnlCa2J5QjBhR2x6SUdobGNtVXVYRzR2THlBcUwxeHVMeThnUVdOMGFXOXVMbkJ5YjNSdmRIbHdaUzV2YmlBOUlHWjFibU4wYVc5dUlDaGxiR1Z0Wlc1MEtTQjdYRzR2THlBZ0lHbG1JQ2doWld4bGJXVnVkQzVqYjI1dVpXTjBLU0I3WEc0dkx5QWdJQ0FnWld4bGJXVnVkQ0E5SUdkbGRFWnNiM2NvWld4bGJXVnVkQ2s3WEc0dkx5QWdJSDFjYmx4dUx5OGdJQ0J5WlhSMWNtNGdaV3hsYldWdWRDNWpiMjV1WldOMEtIUm9hWE1wTzF4dUx5OGdmVHRjYmx4dUx5OGdaWGh3YjNKMElIc2dRV04wYVc5dUlIMDdJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9wb3Btb3Rpb24uanNcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfID0gcmVxdWlyZSgnLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxudmFyIF9mcmFtZXN5bmMgPSByZXF1aXJlKCcuLi9mcmFtZXN5bmMnKTtcblxudmFyIF9maWx0ZXJzID0gcmVxdWlyZSgnLi4vdmFsdWUvZmlsdGVycycpO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpO1xuXG52YXIgX2Vhc2luZyA9IHJlcXVpcmUoJy4uL2Vhc2luZycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciByZXN0cmljdFByb2dyZXNzID0gKDAsIF9maWx0ZXJzLnJlc3RyaWN0QmV0d2VlbikoMCwgMSk7XG5cbnZhciBUd2VlbiA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gIF9pbmhlcml0cyhUd2VlbiwgX0FjdGlvbik7XG5cbiAgZnVuY3Rpb24gVHdlZW4oKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFR3ZWVuKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgVHdlZW4ucHJvdG90eXBlLm9uU3RhcnQgPSBmdW5jdGlvbiBvblN0YXJ0KCkge1xuICAgIHRoaXMuZWxhcHNlZCA9IDA7XG4gIH07XG5cbiAgVHdlZW4ucHJvdG90eXBlLm9uVXBkYXRlID0gZnVuY3Rpb24gb25VcGRhdGUoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGR1cmF0aW9uID0gX3Byb3BzLmR1cmF0aW9uO1xuICAgIHZhciBlYXNlID0gX3Byb3BzLmVhc2U7XG4gICAgdmFyIGZyb20gPSBfcHJvcHMuZnJvbTtcbiAgICB2YXIgdG8gPSBfcHJvcHMudG87XG5cbiAgICB0aGlzLmVsYXBzZWQgKz0gKDAsIF9mcmFtZXN5bmMudGltZVNpbmNlTGFzdEZyYW1lKSgpO1xuICAgIHZhciBwcm9ncmVzcyA9ICgwLCBfY2FsYy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSkodGhpcy5lbGFwc2VkLCAwLCBkdXJhdGlvbik7XG4gICAgdmFyIGVhc2VkUHJvZ3Jlc3MgPSBlYXNlKHJlc3RyaWN0UHJvZ3Jlc3MocHJvZ3Jlc3MpKTtcbiAgICB0aGlzLmN1cnJlbnQgPSAoMCwgX2NhbGMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MpKGVhc2VkUHJvZ3Jlc3MsIGZyb20sIHRvKTtcblxuICAgIGlmICh0aGlzLmVsYXBzZWQgPj0gZHVyYXRpb24pIHtcbiAgICAgIHRoaXMuY29tcGxldGUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFR3ZWVuO1xufShfMi5kZWZhdWx0KTtcblxuVHdlZW4uZGVmYXVsdFByb3BzID0ge1xuICBkdXJhdGlvbjogMzAwLFxuICBlYXNlOiBfZWFzaW5nLmVhc2VPdXQsXG4gIGZyb206IDAsXG4gIHRvOiAwXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBUd2Vlbihwcm9wcyk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMM1IzWldWdUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3UVVGQlFUczdPenRCUVVOQk96dEJRVU5CT3p0QlFVTkJPenRCUVVOQk96czdPenM3T3pzN08wRkJSVUVzU1VGQlRTeHRRa0ZCYlVJc09FSkJRV2RDTEVOQlFXaENMRVZCUVcxQ0xFTkJRVzVDTEVOQlFXNUNPenRKUVVWQk96czdPenM3T3pzN2EwSkJVVW9zTmtKQlFWVTdRVUZEVWl4VFFVRkxMRTlCUVV3c1IwRkJaU3hEUVVGbUxFTkJSRkU3T3p0QlFWSk9MR3RDUVZsS0xDdENRVUZYTzJsQ1FVTTBRaXhMUVVGTExFdEJRVXdzUTBGRU5VSTdVVUZEUkN3eVFrRkVRenRSUVVOVExHMUNRVVJVTzFGQlEyVXNiVUpCUkdZN1VVRkRjVUlzWlVGRWNrSTdPMEZCUlZRc1UwRkJTeXhQUVVGTUxFbEJRV2RDTEc5RFFVRm9RaXhEUVVaVE8wRkJSMVFzVVVGQlRTeFhRVUZYTEdkRFFVRnhRaXhMUVVGTExFOUJRVXdzUlVGQll5eERRVUZ1UXl4RlFVRnpReXhSUVVGMFF5eERRVUZZTEVOQlNFYzdRVUZKVkN4UlFVRk5MR2RDUVVGblFpeExRVUZMTEdsQ1FVRnBRaXhSUVVGcVFpeERRVUZNTEVOQlFXaENMRU5CU2tjN1FVRkxWQ3hUUVVGTExFOUJRVXdzUjBGQlpTeG5RMEZCY1VJc1lVRkJja0lzUlVGQmIwTXNTVUZCY0VNc1JVRkJNRU1zUlVGQk1VTXNRMEZCWml4RFFVeFRPenRCUVU5VUxGRkJRVWtzUzBGQlN5eFBRVUZNTEVsQlFXZENMRkZCUVdoQ0xFVkJRVEJDTzBGQlF6VkNMRmRCUVVzc1VVRkJUQ3hIUVVRMFFqdExRVUU1UWpzN08xTkJia0pGT3pzN1RVRkRSeXhsUVVGbE8wRkJRM0JDTEZsQlFWVXNSMEZCVmp0QlFVTkJMSFZDUVVadlFqdEJRVWR3UWl4UlFVRk5MRU5CUVU0N1FVRkRRU3hOUVVGSkxFTkJRVW83T3p0clFrRnZRbGNzVlVGQlF5eExRVUZFTzFOQlFWY3NTVUZCU1N4TFFVRktMRU5CUVZVc1MwRkJWanREUVVGWUlpd2labWxzWlNJNkluUjNaV1Z1TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMEwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCQlkzUnBiMjRnWm5KdmJTQW5MaThuTzF4dWFXMXdiM0owSUhzZ2RHbHRaVk5wYm1ObFRHRnpkRVp5WVcxbElIMGdabkp2YlNBbkxpNHZabkpoYldWemVXNWpKenRjYm1sdGNHOXlkQ0I3SUhKbGMzUnlhV04wUW1WMGQyVmxiaUI5SUdaeWIyMGdKeTR1TDNaaGJIVmxMMlpwYkhSbGNuTW5PMXh1YVcxd2IzSjBJSHNnWldGelpTd2daMlYwVUhKdlozSmxjM05HY205dFZtRnNkV1VzSUdkbGRGWmhiSFZsUm5KdmJWQnliMmR5WlhOeklIMGdabkp2YlNBbkxpNHZhVzVqTDJOaGJHTW5PMXh1YVcxd2IzSjBJSHNnWldGelpVOTFkQ0I5SUdaeWIyMGdKeTR1TDJWaGMybHVaeWM3WEc1Y2JtTnZibk4wSUhKbGMzUnlhV04wVUhKdlozSmxjM01nUFNCeVpYTjBjbWxqZEVKbGRIZGxaVzRvTUN3Z01TazdYRzVjYm1Oc1lYTnpJRlIzWldWdUlHVjRkR1Z1WkhNZ1FXTjBhVzl1SUh0Y2JpQWdjM1JoZEdsaklHUmxabUYxYkhSUWNtOXdjeUE5SUh0Y2JpQWdJQ0JrZFhKaGRHbHZiam9nTXpBd0xGeHVJQ0FnSUdWaGMyVTZJR1ZoYzJWUGRYUXNYRzRnSUNBZ1puSnZiVG9nTUN4Y2JpQWdJQ0IwYnpvZ01GeHVJQ0I5WEc1Y2JpQWdiMjVUZEdGeWRDZ3BJSHRjYmlBZ0lDQjBhR2x6TG1Wc1lYQnpaV1FnUFNBd08xeHVJQ0I5WEc1Y2JpQWdiMjVWY0dSaGRHVW9LU0I3WEc0Z0lDQWdZMjl1YzNRZ2V5QmtkWEpoZEdsdmJpd2daV0Z6WlN3Z1puSnZiU3dnZEc4Z2ZTQTlJSFJvYVhNdWNISnZjSE03WEc0Z0lDQWdkR2hwY3k1bGJHRndjMlZrSUNzOUlIUnBiV1ZUYVc1alpVeGhjM1JHY21GdFpTZ3BPMXh1SUNBZ0lHTnZibk4wSUhCeWIyZHlaWE56SUQwZ1oyVjBVSEp2WjNKbGMzTkdjbTl0Vm1Gc2RXVW9kR2hwY3k1bGJHRndjMlZrTENBd0xDQmtkWEpoZEdsdmJpazdYRzRnSUNBZ1kyOXVjM1FnWldGelpXUlFjbTluY21WemN5QTlJR1ZoYzJVb2NtVnpkSEpwWTNSUWNtOW5jbVZ6Y3lod2NtOW5jbVZ6Y3lrcE8xeHVJQ0FnSUhSb2FYTXVZM1Z5Y21WdWRDQTlJR2RsZEZaaGJIVmxSbkp2YlZCeWIyZHlaWE56S0dWaGMyVmtVSEp2WjNKbGMzTXNJR1p5YjIwc0lIUnZLVHRjYmx4dUlDQWdJR2xtSUNoMGFHbHpMbVZzWVhCelpXUWdQajBnWkhWeVlYUnBiMjRwSUh0Y2JpQWdJQ0FnSUhSb2FYTXVZMjl0Y0d4bGRHVW9LVHRjYmlBZ0lDQjlYRzRnSUgxY2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdLSEJ5YjNCektTQTlQaUJ1WlhjZ1ZIZGxaVzRvY0hKdmNITXBPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy90d2Vlbi5qc1xuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF8gPSByZXF1aXJlKCcuLycpO1xuXG52YXIgXzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF8pO1xuXG52YXIgX2ZyYW1lc3luYyA9IHJlcXVpcmUoJy4uL2ZyYW1lc3luYycpO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBWZWxvY2l0eSA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gIF9pbmhlcml0cyhWZWxvY2l0eSwgX0FjdGlvbik7XG5cbiAgZnVuY3Rpb24gVmVsb2NpdHkoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFZlbG9jaXR5KTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgVmVsb2NpdHkucHJvdG90eXBlLm9uVXBkYXRlID0gZnVuY3Rpb24gb25VcGRhdGUoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGFjY2VsZXJhdGlvbiA9IF9wcm9wcy5hY2NlbGVyYXRpb247XG4gICAgdmFyIGF1dG9TdG9wU3BlZWQgPSBfcHJvcHMuYXV0b1N0b3BTcGVlZDtcbiAgICB2YXIgZnJpY3Rpb24gPSBfcHJvcHMuZnJpY3Rpb247XG4gICAgdmFyIHZlbG9jaXR5ID0gX3Byb3BzLnZlbG9jaXR5O1xuXG4gICAgdmFyIG5ld1ZlbG9jaXR5ID0gdmVsb2NpdHk7XG4gICAgdmFyIGVsYXBzZWQgPSAoMCwgX2ZyYW1lc3luYy50aW1lU2luY2VMYXN0RnJhbWUpKCk7XG5cbiAgICAvLyBBcHBseSBhY2NlbGVyYXRpb24gdG8gdmVsb2NpdHlcbiAgICBpZiAoYWNjZWxlcmF0aW9uKSB7XG4gICAgICBuZXdWZWxvY2l0eSArPSAoMCwgX2NhbGMuc3BlZWRQZXJGcmFtZSkoYWNjZWxlcmF0aW9uLCBlbGFwc2VkKTtcbiAgICB9XG5cbiAgICAvLyBBcHBseSBmcmljdGlvbiB0byB2ZWxvY2l0eVxuICAgIGlmIChmcmljdGlvbikge1xuICAgICAgbmV3VmVsb2NpdHkgKj0gTWF0aC5wb3coMSAtIGZyaWN0aW9uLCBlbGFwc2VkIC8gMTAwKTtcbiAgICB9XG5cbiAgICAvLyBBcHBseSB2ZWxvY2l0eVxuICAgIHRoaXMuY3VycmVudCArPSAoMCwgX2NhbGMuc3BlZWRQZXJGcmFtZSkobmV3VmVsb2NpdHksIGVsYXBzZWQpO1xuICAgIHRoaXMucHJvcHMudmVsb2NpdHkgPSBuZXdWZWxvY2l0eTtcblxuICAgIGlmICghbmV3VmVsb2NpdHkgfHwgTWF0aC5hYnMobmV3VmVsb2NpdHkpIDw9IGF1dG9TdG9wU3BlZWQpIHtcbiAgICAgIHRoaXMuY29tcGxldGUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFZlbG9jaXR5O1xufShfMi5kZWZhdWx0KTtcblxuVmVsb2NpdHkuZGVmYXVsdFByb3BzID0ge1xuICBhY2NlbGVyYXRpb246IDAsXG4gIGZyaWN0aW9uOiAwLFxuICB2ZWxvY2l0eTogMCxcbiAgYXV0b1N0b3BTcGVlZDogMC4wMDFcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChwcm9wcykge1xuICByZXR1cm4gbmV3IFZlbG9jaXR5KHByb3BzKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwzWmxiRzlqYVhSNUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3UVVGQlFUczdPenRCUVVOQk96dEJRVU5CT3pzN096czdPenM3TzBsQlJVMDdPenM3T3pzN096dHhRa0ZSU2l3clFrRkJWenRwUWtGRGJVUXNTMEZCU3l4TFFVRk1MRU5CUkc1RU8xRkJRMFFzYlVOQlJFTTdVVUZEWVN4eFEwRkVZanRSUVVNMFFpd3lRa0ZFTlVJN1VVRkRjME1zTWtKQlJIUkRPenRCUVVWVUxGRkJRVWtzWTBGQll5eFJRVUZrTEVOQlJrczdRVUZIVkN4UlFVRk5MRlZCUVZVc2IwTkJRVlk3T3p0QlFVaEhMRkZCVFV3c1dVRkJTaXhGUVVGclFqdEJRVU5vUWl4eFFrRkJaU3g1UWtGQll5eFpRVUZrTEVWQlFUUkNMRTlCUVRWQ0xFTkJRV1lzUTBGRVowSTdTMEZCYkVJN096dEJRVTVUTEZGQlYwd3NVVUZCU2l4RlFVRmpPMEZCUTFvc09FSkJRV2RDTEVsQlFVa3NVVUZCU2l4RlFVRnJRaXhWUVVGVkxFZEJRVllzUTBGQmJFTXNRMEZFV1R0TFFVRmtPenM3UVVGWVV5eFJRV2RDVkN4RFFVRkxMRTlCUVV3c1NVRkJaMElzZVVKQlFXTXNWMEZCWkN4RlFVRXlRaXhQUVVFelFpeERRVUZvUWl4RFFXaENVenRCUVdsQ1ZDeFRRVUZMTEV0QlFVd3NRMEZCVnl4UlFVRllMRWRCUVhOQ0xGZEJRWFJDTEVOQmFrSlRPenRCUVcxQ1ZDeFJRVUZKTEVOQlFVTXNWMEZCUkN4SlFVRm5RaXhMUVVGTExFZEJRVXdzUTBGQlV5eFhRVUZVTEV0QlFYbENMR0ZCUVhwQ0xFVkJRWGRETzBGQlF6RkVMRmRCUVVzc1VVRkJUQ3hIUVVRd1JEdExRVUUxUkRzN08xTkJNMEpGT3pzN1UwRkRSeXhsUVVGbE8wRkJRM0JDTEdkQ1FVRmpMRU5CUVdRN1FVRkRRU3haUVVGVkxFTkJRVlk3UVVGRFFTeFpRVUZWTEVOQlFWWTdRVUZEUVN4cFFrRkJaU3hMUVVGbU96czdhMEpCTkVKWExGVkJRVU1zUzBGQlJEdFRRVUZYTEVsQlFVa3NVVUZCU2l4RFFVRmhMRXRCUVdJN1EwRkJXQ0lzSW1acGJHVWlPaUoyWld4dlkybDBlUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnUVdOMGFXOXVJR1p5YjIwZ0p5NHZKenRjYm1sdGNHOXlkQ0I3SUhScGJXVlRhVzVqWlV4aGMzUkdjbUZ0WlNCOUlHWnliMjBnSnk0dUwyWnlZVzFsYzNsdVl5YzdYRzVwYlhCdmNuUWdleUJ6Y0dWbFpGQmxja1p5WVcxbElIMGdabkp2YlNBbkxpNHZhVzVqTDJOaGJHTW5PMXh1WEc1amJHRnpjeUJXWld4dlkybDBlU0JsZUhSbGJtUnpJRUZqZEdsdmJpQjdYRzRnSUhOMFlYUnBZeUJrWldaaGRXeDBVSEp2Y0hNZ1BTQjdYRzRnSUNBZ1lXTmpaV3hsY21GMGFXOXVPaUF3TEZ4dUlDQWdJR1p5YVdOMGFXOXVPaUF3TEZ4dUlDQWdJSFpsYkc5amFYUjVPaUF3TEZ4dUlDQWdJR0YxZEc5VGRHOXdVM0JsWldRNklEQXVNREF4WEc0Z0lIMWNibHh1SUNCdmJsVndaR0YwWlNncElIdGNiaUFnSUNCamIyNXpkQ0I3SUdGalkyVnNaWEpoZEdsdmJpd2dZWFYwYjFOMGIzQlRjR1ZsWkN3Z1puSnBZM1JwYjI0c0lIWmxiRzlqYVhSNUlIMGdQU0IwYUdsekxuQnliM0J6TzF4dUlDQWdJR3hsZENCdVpYZFdaV3h2WTJsMGVTQTlJSFpsYkc5amFYUjVPMXh1SUNBZ0lHTnZibk4wSUdWc1lYQnpaV1FnUFNCMGFXMWxVMmx1WTJWTVlYTjBSbkpoYldVb0tUdGNibHh1SUNBZ0lDOHZJRUZ3Y0d4NUlHRmpZMlZzWlhKaGRHbHZiaUIwYnlCMlpXeHZZMmwwZVZ4dUlDQWdJR2xtSUNoaFkyTmxiR1Z5WVhScGIyNHBJSHRjYmlBZ0lDQWdJRzVsZDFabGJHOWphWFI1SUNzOUlITndaV1ZrVUdWeVJuSmhiV1VvWVdOalpXeGxjbUYwYVc5dUxDQmxiR0Z3YzJWa0tUdGNiaUFnSUNCOVhHNWNiaUFnSUNBdkx5QkJjSEJzZVNCbWNtbGpkR2x2YmlCMGJ5QjJaV3h2WTJsMGVWeHVJQ0FnSUdsbUlDaG1jbWxqZEdsdmJpa2dlMXh1SUNBZ0lDQWdibVYzVm1Wc2IyTnBkSGtnS2owZ0tERWdMU0JtY21samRHbHZiaWtnS2lvZ0tHVnNZWEJ6WldRZ0x5QXhNREFwTzF4dUlDQWdJSDFjYmx4dUlDQWdJQzh2SUVGd2NHeDVJSFpsYkc5amFYUjVYRzRnSUNBZ2RHaHBjeTVqZFhKeVpXNTBJQ3M5SUhOd1pXVmtVR1Z5Um5KaGJXVW9ibVYzVm1Wc2IyTnBkSGtzSUdWc1lYQnpaV1FwTzF4dUlDQWdJSFJvYVhNdWNISnZjSE11ZG1Wc2IyTnBkSGtnUFNCdVpYZFdaV3h2WTJsMGVUdGNibHh1SUNBZ0lHbG1JQ2doYm1WM1ZtVnNiMk5wZEhrZ2ZId2dUV0YwYUM1aFluTW9ibVYzVm1Wc2IyTnBkSGtwSUR3OUlHRjFkRzlUZEc5d1UzQmxaV1FwSUh0Y2JpQWdJQ0FnSUhSb2FYTXVZMjl0Y0d4bGRHVW9LVHRjYmlBZ0lDQjlYRzRnSUgxY2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdLSEJ5YjNCektTQTlQaUJ1WlhjZ1ZtVnNiMk5wZEhrb2NISnZjSE1wT3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvdmVsb2NpdHkuanNcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdmFsdWUgPSByZXF1aXJlKCcuLi92YWx1ZScpO1xuXG52YXIgX3ZhbHVlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ZhbHVlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFBvaW50ZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFBvaW50ZXIoX3JlZiwgX3JlZjIpIHtcbiAgICB2YXIgeCA9IF9yZWYueDtcbiAgICB2YXIgeSA9IF9yZWYueTtcbiAgICB2YXIgZXZlbnRUb1BvaW50cyA9IF9yZWYyLmV2ZW50VG9Qb2ludHM7XG4gICAgdmFyIG1vdmVFdmVudCA9IF9yZWYyLm1vdmVFdmVudDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQb2ludGVyKTtcblxuICAgIHRoaXMueCA9ICgwLCBfdmFsdWUyLmRlZmF1bHQpKHgpO1xuICAgIHRoaXMueSA9ICgwLCBfdmFsdWUyLmRlZmF1bHQpKHkpO1xuICAgIHRoaXMubW92ZUV2ZW50ID0gbW92ZUV2ZW50O1xuICAgIHRoaXMuZXZlbnRUb1BvaW50cyA9IGV2ZW50VG9Qb2ludHM7XG4gICAgdGhpcy51cGRhdGUgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgUG9pbnRlci5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB2YXIgX2V2ZW50VG9Qb2ludHMgPSB0aGlzLmV2ZW50VG9Qb2ludHMoZSk7XG5cbiAgICB2YXIgeCA9IF9ldmVudFRvUG9pbnRzLng7XG4gICAgdmFyIHkgPSBfZXZlbnRUb1BvaW50cy55O1xuXG4gICAgdGhpcy54LnVwZGF0ZSh4KTtcbiAgICB0aGlzLnkudXBkYXRlKHkpO1xuICB9O1xuXG4gIFBvaW50ZXIucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5tb3ZlRXZlbnQsIHRoaXMudXBkYXRlKTtcbiAgfTtcblxuICBQb2ludGVyLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gc3RvcCgpIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLm1vdmVFdmVudCwgdGhpcy51cGRhdGUpO1xuICB9O1xuXG4gIHJldHVybiBQb2ludGVyO1xufSgpO1xuXG52YXIgbW91c2VFdmVudFRvUG9pbnQgPSBmdW5jdGlvbiAoZSkge1xuICByZXR1cm4ge1xuICAgIHg6IGUucGFnZVgsXG4gICAgeTogZS5wYWdlWVxuICB9O1xufTtcblxudmFyIHRvdWNoRXZlbnRUb1BvaW50ID0gZnVuY3Rpb24gKF9yZWYzKSB7XG4gIHZhciBjaGFuZ2VkVG91Y2hlcyA9IF9yZWYzLmNoYW5nZWRUb3VjaGVzO1xuICByZXR1cm4ge1xuICAgIHg6IGNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFgsXG4gICAgeTogY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WVxuICB9O1xufTtcblxudmFyIGdldE5hdGl2ZUV2ZW50ID0gZnVuY3Rpb24gKGUpIHtcbiAgcmV0dXJuIGUub3JpZ2luYWxFdmVudCB8fCBlLm5hdGl2ZUV2ZW50IHx8IGU7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZSkge1xuICB2YXIgbmF0aXZlRXZlbnQgPSBnZXROYXRpdmVFdmVudChlKTtcbiAgcmV0dXJuIG5hdGl2ZUV2ZW50LnRvdWNoZXMgPyBuZXcgUG9pbnRlcih0b3VjaEV2ZW50VG9Qb2ludChlKSwge1xuICAgIG1vdmVFdmVudDogJ3RvdWNobW92ZScsXG4gICAgZXZlbnRUb1BvaW50czogdG91Y2hFdmVudFRvUG9pbnRcbiAgfSkgOiBuZXcgUG9pbnRlcihtb3VzZUV2ZW50VG9Qb2ludChlKSwge1xuICAgIG1vdmVFdmVudDogJ21vdXNlbW92ZScsXG4gICAgZXZlbnRUb1BvaW50czogbW91c2VFdmVudFRvUG9pbnRcbiAgfSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm5CMWRDOXdiMmx1ZEdWeUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3UVVGQlFUczdPenM3T3pzN1NVRkZUVHRCUVVOS0xGZEJSRWtzVDBGRFNpeGpRVUZ2UkR0UlFVRjBReXhYUVVGelF6dFJRVUZ1UXl4WFFVRnRRenRSUVVFMVFpeHZRMEZCTkVJN1VVRkJZaXcwUWtGQllUczdNRUpCUkdoRUxGTkJRMmRFT3p0QlFVTnNSQ3hUUVVGTExFTkJRVXdzUjBGQlV5eHhRa0ZCVFN4RFFVRk9MRU5CUVZRc1EwRkVhMFE3UVVGRmJFUXNVMEZCU3l4RFFVRk1MRWRCUVZNc2NVSkJRVTBzUTBGQlRpeERRVUZVTEVOQlJtdEVPMEZCUjJ4RUxGTkJRVXNzVTBGQlRDeEhRVUZwUWl4VFFVRnFRaXhEUVVoclJEdEJRVWxzUkN4VFFVRkxMR0ZCUVV3c1IwRkJjVUlzWVVGQmNrSXNRMEZLYTBRN1FVRkxiRVFzVTBGQlN5eE5RVUZNTEVkQlFXTXNTMEZCU3l4TlFVRk1MRU5CUVZrc1NVRkJXaXhEUVVGcFFpeEpRVUZxUWl4RFFVRmtMRU5CVEd0RU8wZEJRWEJFT3p0QlFVUkpMRzlDUVZOS0xIbENRVUZQTEVkQlFVYzdRVUZEVWl4TlFVRkZMR05CUVVZc1IwRkVVVHM3ZVVKQlJWTXNTMEZCU3l4aFFVRk1MRU5CUVcxQ0xFTkJRVzVDTEVWQlJsUTdPMUZCUlVFc2NVSkJSa0U3VVVGRlJ5eHhRa0ZHU0RzN1FVRkhVaXhUUVVGTExFTkJRVXdzUTBGQlR5eE5RVUZRTEVOQlFXTXNRMEZCWkN4RlFVaFJPMEZCU1ZJc1UwRkJTeXhEUVVGTUxFTkJRVThzVFVGQlVDeERRVUZqTEVOQlFXUXNSVUZLVVRzN08wRkJWRTRzYjBKQlowSktMSGxDUVVGUk8wRkJRMDRzWVVGQlV5eGxRVUZVTEVOQlFYbENMR2RDUVVGNlFpeERRVUV3UXl4TFFVRkxMRk5CUVV3c1JVRkJaMElzUzBGQlN5eE5RVUZNTEVOQlFURkVMRU5CUkUwN096dEJRV2hDU2l4dlFrRnZRa29zZFVKQlFVODdRVUZEVEN4aFFVRlRMR1ZCUVZRc1EwRkJlVUlzYlVKQlFYcENMRU5CUVRaRExFdEJRVXNzVTBGQlRDeEZRVUZuUWl4TFFVRkxMRTFCUVV3c1EwRkJOMFFzUTBGRVN6czdPMU5CY0VKSU96czdRVUY1UWs0c1NVRkJUU3h2UWtGQmIwSXNWVUZCUXl4RFFVRkVPMU5CUVZFN1FVRkRhRU1zVDBGQlJ5eEZRVUZGTEV0QlFVWTdRVUZEU0N4UFFVRkhMRVZCUVVVc1MwRkJSanM3UTBGR2NVSTdPMEZCU3pGQ0xFbEJRVTBzYjBKQlFXOUNPMDFCUVVjN1UwRkJjMEk3UVVGRGFrUXNUMEZCUnl4bFFVRmxMRU5CUVdZc1JVRkJhMElzVDBGQmJFSTdRVUZEU0N4UFFVRkhMR1ZCUVdVc1EwRkJaaXhGUVVGclFpeFBRVUZzUWpzN1EwRkdjVUk3TzBGQlN6RkNMRWxCUVUwc2FVSkJRV2xDTEZWQlFVTXNRMEZCUkR0VFFVRlBMRVZCUVVVc1lVRkJSaXhKUVVGdFFpeEZRVUZGTEZkQlFVWXNTVUZCYVVJc1EwRkJjRU03UTBGQlVEczdhMEpCUlZJc1ZVRkJReXhEUVVGRUxFVkJRVTg3UVVGRGNFSXNUVUZCVFN4alFVRmpMR1ZCUVdVc1EwRkJaaXhEUVVGa0xFTkJSR003UVVGRmNFSXNVMEZCVHl4WFFVRkRMRU5CUVZrc1QwRkJXaXhIUVVOT0xFbEJRVWtzVDBGQlNpeERRVUZaTEd0Q1FVRnJRaXhEUVVGc1FpeERRVUZhTEVWQlFXdERPMEZCUTJoRExHVkJRVmNzVjBGQldEdEJRVU5CTEcxQ1FVRmxMR2xDUVVGbU8wZEJSa1lzUTBGRVN5eEhRVXRNTEVsQlFVa3NUMEZCU2l4RFFVRlpMR3RDUVVGclFpeERRVUZzUWl4RFFVRmFMRVZCUVd0RE8wRkJRMmhETEdWQlFWY3NWMEZCV0R0QlFVTkJMRzFDUVVGbExHbENRVUZtTzBkQlJrWXNRMEZNU3l4RFFVWmhPME5CUVZBaUxDSm1hV3hsSWpvaWNHOXBiblJsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRDOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2RtRnNkV1VnWm5KdmJTQW5MaTR2ZG1Gc2RXVW5PMXh1WEc1amJHRnpjeUJRYjJsdWRHVnlJSHRjYmlBZ1kyOXVjM1J5ZFdOMGIzSW9leUI0TENCNUlIMHNJSHNnWlhabGJuUlViMUJ2YVc1MGN5d2diVzkyWlVWMlpXNTBJSDBwSUh0Y2JpQWdJQ0IwYUdsekxuZ2dQU0IyWVd4MVpTaDRLVHRjYmlBZ0lDQjBhR2x6TG5rZ1BTQjJZV3gxWlNoNUtUdGNiaUFnSUNCMGFHbHpMbTF2ZG1WRmRtVnVkQ0E5SUcxdmRtVkZkbVZ1ZER0Y2JpQWdJQ0IwYUdsekxtVjJaVzUwVkc5UWIybHVkSE1nUFNCbGRtVnVkRlJ2VUc5cGJuUnpPMXh1SUNBZ0lIUm9hWE11ZFhCa1lYUmxJRDBnZEdocGN5NTFjR1JoZEdVdVltbHVaQ2gwYUdsektUdGNiaUFnZlZ4dVhHNGdJSFZ3WkdGMFpTaGxLU0I3WEc0Z0lDQWdaUzV3Y21WMlpXNTBSR1ZtWVhWc2RDZ3BPMXh1SUNBZ0lHTnZibk4wSUhzZ2VDd2dlU0I5SUQwZ2RHaHBjeTVsZG1WdWRGUnZVRzlwYm5SektHVXBPMXh1SUNBZ0lIUm9hWE11ZUM1MWNHUmhkR1VvZUNrN1hHNGdJQ0FnZEdocGN5NTVMblZ3WkdGMFpTaDVLVHRjYmlBZ2ZWeHVYRzRnSUhOMFlYSjBLQ2tnZTF4dUlDQWdJR1J2WTNWdFpXNTBMbVJ2WTNWdFpXNTBSV3hsYldWdWRDNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtIUm9hWE11Ylc5MlpVVjJaVzUwTENCMGFHbHpMblZ3WkdGMFpTazdYRzRnSUgxY2JseHVJQ0J6ZEc5d0tDa2dlMXh1SUNBZ0lHUnZZM1Z0Wlc1MExtUnZZM1Z0Wlc1MFJXeGxiV1Z1ZEM1eVpXMXZkbVZGZG1WdWRFeHBjM1JsYm1WeUtIUm9hWE11Ylc5MlpVVjJaVzUwTENCMGFHbHpMblZ3WkdGMFpTazdYRzRnSUgxY2JuMWNibHh1WTI5dWMzUWdiVzkxYzJWRmRtVnVkRlJ2VUc5cGJuUWdQU0FvWlNrZ1BUNGdLSHRjYmlBZ2VEb2daUzV3WVdkbFdDeGNiaUFnZVRvZ1pTNXdZV2RsV1Z4dWZTazdYRzVjYm1OdmJuTjBJSFJ2ZFdOb1JYWmxiblJVYjFCdmFXNTBJRDBnS0hzZ1kyaGhibWRsWkZSdmRXTm9aWE1nZlNrZ1BUNGdLSHRjYmlBZ2VEb2dZMmhoYm1kbFpGUnZkV05vWlhOYk1GMHVZMnhwWlc1MFdDeGNiaUFnZVRvZ1kyaGhibWRsWkZSdmRXTm9aWE5iTUYwdVkyeHBaVzUwV1Z4dWZTazdYRzVjYm1OdmJuTjBJR2RsZEU1aGRHbDJaVVYyWlc1MElEMGdLR1VwSUQwK0lHVXViM0pwWjJsdVlXeEZkbVZ1ZENCOGZDQmxMbTVoZEdsMlpVVjJaVzUwSUh4OElHVTdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJQ2hsS1NBOVBpQjdYRzRnSUdOdmJuTjBJRzVoZEdsMlpVVjJaVzUwSUQwZ1oyVjBUbUYwYVhabFJYWmxiblFvWlNrN1hHNGdJSEpsZEhWeWJpQW9ibUYwYVhabFJYWmxiblF1ZEc5MVkyaGxjeWtnUDF4dUlDQWdJRzVsZHlCUWIybHVkR1Z5S0hSdmRXTm9SWFpsYm5SVWIxQnZhVzUwS0dVcExDQjdYRzRnSUNBZ0lDQnRiM1psUlhabGJuUTZJQ2QwYjNWamFHMXZkbVVuTEZ4dUlDQWdJQ0FnWlhabGJuUlViMUJ2YVc1MGN6b2dkRzkxWTJoRmRtVnVkRlJ2VUc5cGJuUmNiaUFnSUNCOUtTQTZYRzRnSUNBZ2JtVjNJRkJ2YVc1MFpYSW9iVzkxYzJWRmRtVnVkRlJ2VUc5cGJuUW9aU2tzSUh0Y2JpQWdJQ0FnSUcxdmRtVkZkbVZ1ZERvZ0oyMXZkWE5sYlc5MlpTY3NYRzRnSUNBZ0lDQmxkbVZ1ZEZSdlVHOXBiblJ6T2lCdGIzVnpaVVYyWlc1MFZHOVFiMmx1ZEZ4dUlDQWdJSDBwTzF4dWZWeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbnB1dC9wb2ludGVyLmpzXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5jdXJyZW50RnJhbWVUaW1lc3RhbXAgPSBleHBvcnRzLnRpbWVTaW5jZUxhc3RGcmFtZSA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZUVuZCA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZVJlbmRlciA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZVVwZGF0ZSA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZVN0YXJ0ID0gZXhwb3J0cy5vbkZyYW1lRW5kID0gZXhwb3J0cy5vbkZyYW1lUmVuZGVyID0gZXhwb3J0cy5vbkZyYW1lVXBkYXRlID0gZXhwb3J0cy5vbkZyYW1lU3RhcnQgPSB1bmRlZmluZWQ7XG5cbnZhciBfb25OZXh0RnJhbWUgPSByZXF1aXJlKCcuL29uLW5leHQtZnJhbWUnKTtcblxudmFyIF9vbk5leHRGcmFtZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vbk5leHRGcmFtZSk7XG5cbnZhciBfY3JlYXRlUmVuZGVyU3RlcCA9IHJlcXVpcmUoJy4vY3JlYXRlLXJlbmRlci1zdGVwJyk7XG5cbnZhciBfY3JlYXRlUmVuZGVyU3RlcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVSZW5kZXJTdGVwKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgd2lsbFJlbmRlck5leHRGcmFtZSA9IGZhbHNlO1xuXG4vKipcbiAqIE1heGltdW0gcGVybWl0dGVkIG1zIHNpbmNlIGxhc3QgZnJhbWVcbiAqIEB0eXBlIHtOdW1iZXJ9XG4gKi9cbnZhciBNQVhfRUxBUFNFRCA9IDIwO1xuXG4vKipcbiAqIEN1cnJlbnQgZnJhbWVzdGFtcFxuICogQHR5cGUge051bWJlcn1cbiAqL1xudmFyIGN1cnJlbnRGcmFtZXN0YW1wID0gKDAsIF91dGlscy5jdXJyZW50VGltZSkoKTtcblxudmFyIGVsYXBzZWQgPSAwO1xuXG4vKipcbiAqIEZhY3RvciB0byBtdWx0aXBseSBgZWxhcHNlZGAgYnkgLSBcbiAqIDAuNSB3b3VsZCBiZSBzbG93IG1vdGlvbiwgMiB3b3VsZCBiZSBmYXN0XG4gKiBAdHlwZSB7TnVtYmVyfVxuICovXG52YXIgZGlsYXRpb24gPSAxO1xuXG5mdW5jdGlvbiBzdGFydFJlbmRlckxvb3AoKSB7XG4gIGlmICghd2lsbFJlbmRlck5leHRGcmFtZSkge1xuICAgIHdpbGxSZW5kZXJOZXh0RnJhbWUgPSB0cnVlO1xuICAgICgwLCBfb25OZXh0RnJhbWUyLmRlZmF1bHQpKHByb2Nlc3NGcmFtZSk7XG4gIH1cbn1cblxudmFyIGZyYW1lU3RhcnQgPSAoMCwgX2NyZWF0ZVJlbmRlclN0ZXAyLmRlZmF1bHQpKHN0YXJ0UmVuZGVyTG9vcCk7XG52YXIgZnJhbWVVcGRhdGUgPSAoMCwgX2NyZWF0ZVJlbmRlclN0ZXAyLmRlZmF1bHQpKHN0YXJ0UmVuZGVyTG9vcCk7XG52YXIgZnJhbWVSZW5kZXIgPSAoMCwgX2NyZWF0ZVJlbmRlclN0ZXAyLmRlZmF1bHQpKHN0YXJ0UmVuZGVyTG9vcCk7XG52YXIgZnJhbWVFbmQgPSAoMCwgX2NyZWF0ZVJlbmRlclN0ZXAyLmRlZmF1bHQpKHN0YXJ0UmVuZGVyTG9vcCk7XG5cbmZ1bmN0aW9uIHByb2Nlc3NGcmFtZShmcmFtZXN0YW1wKSB7XG4gIHdpbGxSZW5kZXJOZXh0RnJhbWUgPSBmYWxzZTtcbiAgZWxhcHNlZCA9IE1hdGgubWF4KE1hdGgubWluKGZyYW1lc3RhbXAgLSBjdXJyZW50RnJhbWVzdGFtcCwgTUFYX0VMQVBTRUQpLCAxKSAqIGRpbGF0aW9uO1xuICBjdXJyZW50RnJhbWVzdGFtcCA9IGZyYW1lc3RhbXA7XG5cbiAgZnJhbWVTdGFydC5wcm9jZXNzKCk7XG4gIGZyYW1lVXBkYXRlLnByb2Nlc3MoKTtcbiAgZnJhbWVSZW5kZXIucHJvY2VzcygpO1xuICBmcmFtZUVuZC5wcm9jZXNzKCk7XG59XG5cbnZhciBvbkZyYW1lU3RhcnQgPSBleHBvcnRzLm9uRnJhbWVTdGFydCA9IGZyYW1lU3RhcnQuc2NoZWR1bGU7XG52YXIgb25GcmFtZVVwZGF0ZSA9IGV4cG9ydHMub25GcmFtZVVwZGF0ZSA9IGZyYW1lVXBkYXRlLnNjaGVkdWxlO1xudmFyIG9uRnJhbWVSZW5kZXIgPSBleHBvcnRzLm9uRnJhbWVSZW5kZXIgPSBmcmFtZVJlbmRlci5zY2hlZHVsZTtcbnZhciBvbkZyYW1lRW5kID0gZXhwb3J0cy5vbkZyYW1lRW5kID0gZnJhbWVFbmQuc2NoZWR1bGU7XG52YXIgY2FuY2VsT25GcmFtZVN0YXJ0ID0gZXhwb3J0cy5jYW5jZWxPbkZyYW1lU3RhcnQgPSBmcmFtZVN0YXJ0LmNhbmNlbDtcbnZhciBjYW5jZWxPbkZyYW1lVXBkYXRlID0gZXhwb3J0cy5jYW5jZWxPbkZyYW1lVXBkYXRlID0gZnJhbWVVcGRhdGUuY2FuY2VsO1xudmFyIGNhbmNlbE9uRnJhbWVSZW5kZXIgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVSZW5kZXIgPSBmcmFtZVJlbmRlci5jYW5jZWw7XG52YXIgY2FuY2VsT25GcmFtZUVuZCA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZUVuZCA9IGZyYW1lRW5kLmNhbmNlbDtcblxudmFyIHRpbWVTaW5jZUxhc3RGcmFtZSA9IGV4cG9ydHMudGltZVNpbmNlTGFzdEZyYW1lID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZWxhcHNlZDtcbn07XG52YXIgY3VycmVudEZyYW1lVGltZXN0YW1wID0gZXhwb3J0cy5jdXJyZW50RnJhbWVUaW1lc3RhbXAgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBjdXJyZW50RnJhbWVzdGFtcDtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OW1jbUZ0WlhONWJtTXZhVzVrWlhndWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3UVVGQlFUczdPenRCUVVOQk96czdPMEZCUTBFN096czdRVUZGUVN4SlFVRkpMSE5DUVVGelFpeExRVUYwUWpzN096czdPMEZCVFVvc1NVRkJUU3hqUVVGakxFVkJRV1E3T3pzN096dEJRVTFPTEVsQlFVa3NiMEpCUVc5Q0xIbENRVUZ3UWpzN1FVRkZTaXhKUVVGSkxGVkJRVlVzUTBGQlZqczdPenM3T3p0QlFVOUtMRWxCUVVrc1YwRkJWeXhEUVVGWU96dEJRVVZLTEZOQlFWTXNaVUZCVkN4SFFVRXlRanRCUVVONlFpeE5RVUZKTEVOQlFVTXNiVUpCUVVRc1JVRkJjMEk3UVVGRGVFSXNNRUpCUVhOQ0xFbEJRWFJDTEVOQlJIZENPMEZCUlhoQ0xDdENRVUZaTEZsQlFWb3NSVUZHZDBJN1IwRkJNVUk3UTBGRVJqczdRVUZQUVN4SlFVRk5MR0ZCUVdFc1owTkJRV2xDTEdWQlFXcENMRU5CUVdJN1FVRkRUaXhKUVVGTkxHTkJRV01zWjBOQlFXbENMR1ZCUVdwQ0xFTkJRV1E3UVVGRFRpeEpRVUZOTEdOQlFXTXNaME5CUVdsQ0xHVkJRV3BDTEVOQlFXUTdRVUZEVGl4SlFVRk5MRmRCUVZjc1owTkJRV2xDTEdWQlFXcENMRU5CUVZnN08wRkJSVTRzVTBGQlV5eFpRVUZVTEVOQlFYTkNMRlZCUVhSQ0xFVkJRV3RETzBGQlEyaERMSGRDUVVGelFpeExRVUYwUWl4RFFVUm5RenRCUVVWb1F5eFpRVUZWTEV0QlFVc3NSMEZCVEN4RFFVRlRMRXRCUVVzc1IwRkJUQ3hEUVVGVExHRkJRV0VzYVVKQlFXSXNSVUZCWjBNc1YwRkJla01zUTBGQlZDeEZRVUZuUlN4RFFVRm9SU3hKUVVGeFJTeFJRVUZ5UlN4RFFVWnpRanRCUVVkb1F5eHpRa0ZCYjBJc1ZVRkJjRUlzUTBGSVowTTdPMEZCUzJoRExHRkJRVmNzVDBGQldDeEhRVXhuUXp0QlFVMW9ReXhqUVVGWkxFOUJRVm9zUjBGT1owTTdRVUZQYUVNc1kwRkJXU3hQUVVGYUxFZEJVR2RETzBGQlVXaERMRmRCUVZNc1QwRkJWQ3hIUVZKblF6dERRVUZzUXpzN1FVRlhUeXhKUVVGTkxITkRRVUZsTEZkQlFWY3NVVUZCV0R0QlFVTnlRaXhKUVVGTkxIZERRVUZuUWl4WlFVRlpMRkZCUVZvN1FVRkRkRUlzU1VGQlRTeDNRMEZCWjBJc1dVRkJXU3hSUVVGYU8wRkJRM1JDTEVsQlFVMHNhME5CUVdFc1UwRkJVeXhSUVVGVU8wRkJRMjVDTEVsQlFVMHNhMFJCUVhGQ0xGZEJRVmNzVFVGQldEdEJRVU16UWl4SlFVRk5MRzlFUVVGelFpeFpRVUZaTEUxQlFWbzdRVUZETlVJc1NVRkJUU3h2UkVGQmMwSXNXVUZCV1N4TlFVRmFPMEZCUXpWQ0xFbEJRVTBzT0VOQlFXMUNMRk5CUVZNc1RVRkJWRHM3UVVGRmVrSXNTVUZCVFN4clJFRkJjVUk3VTBGQlRUdERRVUZPTzBGQlF6TkNMRWxCUVUwc2QwUkJRWGRDTzFOQlFVMDdRMEZCVGlJc0ltWnBiR1VpT2lKcGJtUmxlQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnYjI1T1pYaDBSbkpoYldVZ1puSnZiU0FuTGk5dmJpMXVaWGgwTFdaeVlXMWxKenRjYm1sdGNHOXlkQ0JqY21WaGRHVlNaVzVrWlhKVGRHVndJR1p5YjIwZ0p5NHZZM0psWVhSbExYSmxibVJsY2kxemRHVndKenRjYm1sdGNHOXlkQ0I3SUdOMWNuSmxiblJVYVcxbElIMGdabkp2YlNBbkxpNHZhVzVqTDNWMGFXeHpKenRjYmx4dWJHVjBJSGRwYkd4U1pXNWtaWEpPWlhoMFJuSmhiV1VnUFNCbVlXeHpaVHRjYmx4dUx5b3FYRzRnS2lCTllYaHBiWFZ0SUhCbGNtMXBkSFJsWkNCdGN5QnphVzVqWlNCc1lYTjBJR1p5WVcxbFhHNGdLaUJBZEhsd1pTQjdUblZ0WW1WeWZWeHVJQ292WEc1amIyNXpkQ0JOUVZoZlJVeEJVRk5GUkNBOUlESXdPMXh1WEc0dktpcGNiaUFxSUVOMWNuSmxiblFnWm5KaGJXVnpkR0Z0Y0Z4dUlDb2dRSFI1Y0dVZ2UwNTFiV0psY24xY2JpQXFMMXh1YkdWMElHTjFjbkpsYm5SR2NtRnRaWE4wWVcxd0lEMGdZM1Z5Y21WdWRGUnBiV1VvS1R0Y2JseHViR1YwSUdWc1lYQnpaV1FnUFNBd08xeHVYRzR2S2lwY2JpQXFJRVpoWTNSdmNpQjBieUJ0ZFd4MGFYQnNlU0JnWld4aGNITmxaR0FnWW5rZ0xTQmNiaUFxSURBdU5TQjNiM1ZzWkNCaVpTQnpiRzkzSUcxdmRHbHZiaXdnTWlCM2IzVnNaQ0JpWlNCbVlYTjBYRzRnS2lCQWRIbHdaU0I3VG5WdFltVnlmVnh1SUNvdlhHNXNaWFFnWkdsc1lYUnBiMjRnUFNBeE8xeHVYRzVtZFc1amRHbHZiaUJ6ZEdGeWRGSmxibVJsY2t4dmIzQW9LU0I3WEc0Z0lHbG1JQ2doZDJsc2JGSmxibVJsY2s1bGVIUkdjbUZ0WlNrZ2UxeHVJQ0FnSUhkcGJHeFNaVzVrWlhKT1pYaDBSbkpoYldVZ1BTQjBjblZsTzF4dUlDQWdJRzl1VG1WNGRFWnlZVzFsS0hCeWIyTmxjM05HY21GdFpTazdYRzRnSUgxY2JuMWNibHh1WTI5dWMzUWdabkpoYldWVGRHRnlkQ0E5SUdOeVpXRjBaVkpsYm1SbGNsTjBaWEFvYzNSaGNuUlNaVzVrWlhKTWIyOXdLVHRjYm1OdmJuTjBJR1p5WVcxbFZYQmtZWFJsSUQwZ1kzSmxZWFJsVW1WdVpHVnlVM1JsY0NoemRHRnlkRkpsYm1SbGNreHZiM0FwTzF4dVkyOXVjM1FnWm5KaGJXVlNaVzVrWlhJZ1BTQmpjbVZoZEdWU1pXNWtaWEpUZEdWd0tITjBZWEowVW1WdVpHVnlURzl2Y0NrN1hHNWpiMjV6ZENCbWNtRnRaVVZ1WkNBOUlHTnlaV0YwWlZKbGJtUmxjbE4wWlhBb2MzUmhjblJTWlc1a1pYSk1iMjl3S1R0Y2JseHVablZ1WTNScGIyNGdjSEp2WTJWemMwWnlZVzFsS0daeVlXMWxjM1JoYlhBcElIdGNiaUFnZDJsc2JGSmxibVJsY2s1bGVIUkdjbUZ0WlNBOUlHWmhiSE5sTzF4dUlDQmxiR0Z3YzJWa0lEMGdUV0YwYUM1dFlYZ29UV0YwYUM1dGFXNG9abkpoYldWemRHRnRjQ0F0SUdOMWNuSmxiblJHY21GdFpYTjBZVzF3TENCTlFWaGZSVXhCVUZORlJDa3NJREVwSUNvZ1pHbHNZWFJwYjI0N1hHNGdJR04xY25KbGJuUkdjbUZ0WlhOMFlXMXdJRDBnWm5KaGJXVnpkR0Z0Y0R0Y2JseHVJQ0JtY21GdFpWTjBZWEowTG5CeWIyTmxjM01vS1R0Y2JpQWdabkpoYldWVmNHUmhkR1V1Y0hKdlkyVnpjeWdwTzF4dUlDQm1jbUZ0WlZKbGJtUmxjaTV3Y205alpYTnpLQ2s3WEc0Z0lHWnlZVzFsUlc1a0xuQnliMk5sYzNNb0tUdGNibjFjYmx4dVpYaHdiM0owSUdOdmJuTjBJRzl1Um5KaGJXVlRkR0Z5ZENBOUlHWnlZVzFsVTNSaGNuUXVjMk5vWldSMWJHVTdYRzVsZUhCdmNuUWdZMjl1YzNRZ2IyNUdjbUZ0WlZWd1pHRjBaU0E5SUdaeVlXMWxWWEJrWVhSbExuTmphR1ZrZFd4bE8xeHVaWGh3YjNKMElHTnZibk4wSUc5dVJuSmhiV1ZTWlc1a1pYSWdQU0JtY21GdFpWSmxibVJsY2k1elkyaGxaSFZzWlR0Y2JtVjRjRzl5ZENCamIyNXpkQ0J2YmtaeVlXMWxSVzVrSUQwZ1puSmhiV1ZGYm1RdWMyTm9aV1IxYkdVN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnWTJGdVkyVnNUMjVHY21GdFpWTjBZWEowSUQwZ1puSmhiV1ZUZEdGeWRDNWpZVzVqWld3N1hHNWxlSEJ2Y25RZ1kyOXVjM1FnWTJGdVkyVnNUMjVHY21GdFpWVndaR0YwWlNBOUlHWnlZVzFsVlhCa1lYUmxMbU5oYm1ObGJEdGNibVY0Y0c5eWRDQmpiMjV6ZENCallXNWpaV3hQYmtaeVlXMWxVbVZ1WkdWeUlEMGdabkpoYldWU1pXNWtaWEl1WTJGdVkyVnNPMXh1Wlhod2IzSjBJR052Ym5OMElHTmhibU5sYkU5dVJuSmhiV1ZGYm1RZ1BTQm1jbUZ0WlVWdVpDNWpZVzVqWld3N1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCMGFXMWxVMmx1WTJWTVlYTjBSbkpoYldVZ1BTQW9LU0E5UGlCbGJHRndjMlZrTzF4dVpYaHdiM0owSUdOdmJuTjBJR04xY25KbGJuUkdjbUZ0WlZScGJXVnpkR0Z0Y0NBOUlDZ3BJRDArSUdOMWNuSmxiblJHY21GdFpYTjBZVzF3TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2ZyYW1lc3luYy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgVmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFZhbHVlKGluaXRpYWxWYWx1ZSkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBWYWx1ZSk7XG5cbiAgICB0aGlzLmN1cnJlbnQgPSBpbml0aWFsVmFsdWU7XG4gICAgdGhpcy5hY3Rpb24gPSBudWxsO1xuICB9XG5cbiAgVmFsdWUucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZShuZXdWYWx1ZSkge1xuICAgIHRoaXMuY3VycmVudCA9IG5ld1ZhbHVlO1xuXG4gICAgaWYgKHRoaXMubGlzdGVuZXJzKSB7XG4gICAgICB2YXIgbnVtTGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnMubGVuZ3RoO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1MaXN0ZW5lcnM7IGkrKykge1xuICAgICAgICB0aGlzLmxpc3RlbmVyc1tpXShuZXdWYWx1ZSwgdGhpcyk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIFZhbHVlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudDtcbiAgfTtcblxuICBWYWx1ZS5wcm90b3R5cGUuZ2V0VmVsb2NpdHkgPSBmdW5jdGlvbiBnZXRWZWxvY2l0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5hY3Rpb24gPyB0aGlzLmFjdGlvbi5nZXRWZWxvY2l0eSA6IDA7XG4gIH07XG5cbiAgVmFsdWUucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiBzdG9wKCkge1xuICAgIGlmICh0aGlzLmFjdGlvbikge1xuICAgICAgdGhpcy5hY3Rpb24uc3RvcCgpO1xuICAgICAgdGhpcy5hY3Rpb24gPSBudWxsO1xuICAgIH1cbiAgfTtcblxuICBWYWx1ZS5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbiBhZGRMaXN0ZW5lcihjYWxsYmFjaykge1xuICAgIGlmICghdGhpcy5saXN0ZW5lcnMpIHtcbiAgICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gICAgfVxuXG4gICAgdmFyIGxpc3RlbmVySW5kZXggPSB0aGlzLmxpc3RlbmVycy5pbmRleE9mKGNhbGxiYWNrKTtcbiAgICBpZiAobGlzdGVuZXJJbmRleCA9PT0gLTEpIHtcbiAgICAgIHRoaXMubGlzdGVuZXJzLnB1c2goY2FsbGJhY2spO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIFZhbHVlLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKGNhbGxiYWNrKSB7XG4gICAgaWYgKHRoaXMubGlzdGVuZXJzKSB7XG4gICAgICB2YXIgbGlzdGVuZXJJbmRleCA9IHRoaXMubGlzdGVuZXJzLmluZGV4T2YoY2FsbGJhY2spO1xuICAgICAgaWYgKGxpc3RlbmVySW5kZXggPiAtMSkge1xuICAgICAgICB0aGlzLmxpc3RlbmVycy5zcGxpY2UobGlzdGVuZXJJbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgcmV0dXJuIFZhbHVlO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoaW5pdGlhbFZhbHVlKSB7XG4gIHJldHVybiBuZXcgVmFsdWUoaW5pdGlhbFZhbHVlKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlM5cGJtUmxlQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdTVUZCVFR0QlFVTktMRmRCUkVrc1MwRkRTaXhEUVVGWkxGbEJRVm9zUlVGQk1FSTdNRUpCUkhSQ0xFOUJRM05DT3p0QlFVTjRRaXhUUVVGTExFOUJRVXdzUjBGQlpTeFpRVUZtTEVOQlJIZENPMEZCUlhoQ0xGTkJRVXNzVFVGQlRDeEhRVUZqTEVsQlFXUXNRMEZHZDBJN1IwRkJNVUk3TzBGQlJFa3NhMEpCVFVvc2VVSkJRVThzVlVGQlZUdEJRVU5tTEZOQlFVc3NUMEZCVEN4SFFVRmxMRkZCUVdZc1EwRkVaVHM3UVVGSFppeFJRVUZKTEV0QlFVc3NVMEZCVEN4RlFVRm5RanRCUVVOc1FpeFZRVUZOTEdWQlFXVXNTMEZCU3l4VFFVRk1MRU5CUVdVc1RVRkJaaXhEUVVSSU8wRkJSV3hDTEZkQlFVc3NTVUZCU1N4SlFVRkpMRU5CUVVvc1JVRkJUeXhKUVVGSkxGbEJRVW9zUlVGQmEwSXNSMEZCYkVNc1JVRkJkVU03UVVGRGNrTXNZVUZCU3l4VFFVRk1MRU5CUVdVc1EwRkJaaXhGUVVGclFpeFJRVUZzUWl4RlFVRTBRaXhKUVVFMVFpeEZRVVJ4UXp0UFFVRjJRenRMUVVaR096czdRVUZVUlN4clFrRnBRa29zY1VKQlFVMDdRVUZEU2l4WFFVRlBMRXRCUVVzc1QwRkJUQ3hEUVVSSU96czdRVUZxUWtZc2EwSkJjVUpLTEhGRFFVRmpPMEZCUTFvc1YwRkJUeXhKUVVGRExFTkJRVXNzVFVGQlRDeEhRVUZsTEV0QlFVc3NUVUZCVEN4RFFVRlpMRmRCUVZvc1IwRkJNRUlzUTBGQk1VTXNRMEZFU3pzN08wRkJja0pXTEd0Q1FYbENTaXgxUWtGQlR6dEJRVU5NTEZGQlFVa3NTMEZCU3l4TlFVRk1MRVZCUVdFN1FVRkRaaXhYUVVGTExFMUJRVXdzUTBGQldTeEpRVUZhTEVkQlJHVTdRVUZGWml4WFFVRkxMRTFCUVV3c1IwRkJZeXhKUVVGa0xFTkJSbVU3UzBGQmFrSTdPenRCUVRGQ1JTeHJRa0ZuUTBvc2JVTkJRVmtzVlVGQlZUdEJRVU53UWl4UlFVRkpMRU5CUVVNc1MwRkJTeXhUUVVGTUxFVkJRV2RDTzBGQlEyNUNMRmRCUVVzc1UwRkJUQ3hIUVVGcFFpeEZRVUZxUWl4RFFVUnRRanRMUVVGeVFqczdRVUZKUVN4UlFVRk5MR2RDUVVGblFpeExRVUZMTEZOQlFVd3NRMEZCWlN4UFFVRm1MRU5CUVhWQ0xGRkJRWFpDTEVOQlFXaENMRU5CVEdNN1FVRk5jRUlzVVVGQlNTeHJRa0ZCYTBJc1EwRkJReXhEUVVGRUxFVkJRVWs3UVVGRGVFSXNWMEZCU3l4VFFVRk1MRU5CUVdVc1NVRkJaaXhEUVVGdlFpeFJRVUZ3UWl4RlFVUjNRanRMUVVFeFFqczdRVUZKUVN4WFFVRlBMRWxCUVZBc1EwRldiMEk3T3p0QlFXaERiRUlzYTBKQk5rTktMSGxEUVVGbExGVkJRVlU3UVVGRGRrSXNVVUZCU1N4TFFVRkxMRk5CUVV3c1JVRkJaMEk3UVVGRGJFSXNWVUZCVFN4blFrRkJaMElzUzBGQlN5eFRRVUZNTEVOQlFXVXNUMEZCWml4RFFVRjFRaXhSUVVGMlFpeERRVUZvUWl4RFFVUlpPMEZCUld4Q0xGVkJRVWtzWjBKQlFXZENMRU5CUVVNc1EwRkJSQ3hGUVVGSk8wRkJRM1JDTEdGQlFVc3NVMEZCVEN4RFFVRmxMRTFCUVdZc1EwRkJjMElzWVVGQmRFSXNSVUZCY1VNc1EwRkJja01zUlVGRWMwSTdUMEZCZUVJN1MwRkdSanM3UVVGUFFTeFhRVUZQTEVsQlFWQXNRMEZTZFVJN096dFRRVGREY2tJN096dHJRa0Y1UkZNc1ZVRkJReXhaUVVGRU8xTkJRV3RDTEVsQlFVa3NTMEZCU2l4RFFVRlZMRmxCUVZZN1EwRkJiRUlpTENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFF2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpWTJ4aGMzTWdWbUZzZFdVZ2UxeHVJQ0JqYjI1emRISjFZM1J2Y2locGJtbDBhV0ZzVm1Gc2RXVXBJSHRjYmlBZ0lDQjBhR2x6TG1OMWNuSmxiblFnUFNCcGJtbDBhV0ZzVm1Gc2RXVTdYRzRnSUNBZ2RHaHBjeTVoWTNScGIyNGdQU0J1ZFd4c08xeHVJQ0I5WEc1Y2JpQWdkWEJrWVhSbEtHNWxkMVpoYkhWbEtTQjdYRzRnSUNBZ2RHaHBjeTVqZFhKeVpXNTBJRDBnYm1WM1ZtRnNkV1U3WEc1Y2JpQWdJQ0JwWmlBb2RHaHBjeTVzYVhOMFpXNWxjbk1wSUh0Y2JpQWdJQ0FnSUdOdmJuTjBJRzUxYlV4cGMzUmxibVZ5Y3lBOUlIUm9hWE11YkdsemRHVnVaWEp6TG14bGJtZDBhRHRjYmlBZ0lDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnYm5WdFRHbHpkR1Z1WlhKek95QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVzYVhOMFpXNWxjbk5iYVYwb2JtVjNWbUZzZFdVc0lIUm9hWE1wTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUdkbGRDZ3BJSHRjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTVqZFhKeVpXNTBPMXh1SUNCOVhHNWNiaUFnWjJWMFZtVnNiMk5wZEhrb0tTQjdYRzRnSUNBZ2NtVjBkWEp1SUNoMGFHbHpMbUZqZEdsdmJpa2dQeUIwYUdsekxtRmpkR2x2Ymk1blpYUldaV3h2WTJsMGVTQTZJREE3WEc0Z0lIMWNibHh1SUNCemRHOXdLQ2tnZTF4dUlDQWdJR2xtSUNoMGFHbHpMbUZqZEdsdmJpa2dlMXh1SUNBZ0lDQWdkR2hwY3k1aFkzUnBiMjR1YzNSdmNDZ3BPMXh1SUNBZ0lDQWdkR2hwY3k1aFkzUnBiMjRnUFNCdWRXeHNPMXh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJR0ZrWkV4cGMzUmxibVZ5S0dOaGJHeGlZV05yS1NCN1hHNGdJQ0FnYVdZZ0tDRjBhR2x6TG14cGMzUmxibVZ5Y3lrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTVzYVhOMFpXNWxjbk1nUFNCYlhUdGNiaUFnSUNCOVhHNWNiaUFnSUNCamIyNXpkQ0JzYVhOMFpXNWxja2x1WkdWNElEMGdkR2hwY3k1c2FYTjBaVzVsY25NdWFXNWtaWGhQWmloallXeHNZbUZqYXlrN1hHNGdJQ0FnYVdZZ0tHeHBjM1JsYm1WeVNXNWtaWGdnUFQwOUlDMHhLU0I3WEc0Z0lDQWdJQ0IwYUdsekxteHBjM1JsYm1WeWN5NXdkWE5vS0dOaGJHeGlZV05yS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3p0Y2JpQWdmVnh1WEc0Z0lISmxiVzkyWlV4cGMzUmxibVZ5S0dOaGJHeGlZV05yS1NCN1hHNGdJQ0FnYVdZZ0tIUm9hWE11YkdsemRHVnVaWEp6S1NCN1hHNGdJQ0FnSUNCamIyNXpkQ0JzYVhOMFpXNWxja2x1WkdWNElEMGdkR2hwY3k1c2FYTjBaVzVsY25NdWFXNWtaWGhQWmloallXeHNZbUZqYXlrN1hHNGdJQ0FnSUNCcFppQW9iR2x6ZEdWdVpYSkpibVJsZUNBK0lDMHhLU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXViR2x6ZEdWdVpYSnpMbk53YkdsalpTaHNhWE4wWlc1bGNrbHVaR1Y0TENBeEtUdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnZlZ4dWZWeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQW9hVzVwZEdsaGJGWmhiSFZsS1NBOVBpQnVaWGNnVm1Gc2RXVW9hVzVwZEdsaGJGWmhiSFZsS1R0Y2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9mcmFtZXN5bmMgPSByZXF1aXJlKCcuLi9mcmFtZXN5bmMnKTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIEFjdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQWN0aW9uKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFjdGlvbik7XG5cbiAgICB0aGlzLmN1cnJlbnQgPSAwO1xuICAgIHRoaXMudmVsb2NpdHkgPSAwO1xuICAgIHRoaXMudXBkYXRlID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKTtcblxuICAgIHRoaXMucHJvcHMgPSBfZXh0ZW5kcyh7fSwgdGhpcy5jb25zdHJ1Y3Rvci5kZWZhdWx0UHJvcHMsIHByb3BzKTtcbiAgfVxuXG4gIEFjdGlvbi5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAoMCwgX2ZyYW1lc3luYy5vbkZyYW1lVXBkYXRlKSh0aGlzLnVwZGF0ZSk7XG5cbiAgICBpZiAodGhpcy5vblN0YXJ0KSB7XG4gICAgICB0aGlzLm9uU3RhcnQoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5vblN0YXJ0KSB7XG4gICAgICB0aGlzLnByb3BzLm9uU3RhcnQodGhpcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gc3RvcCgpIHtcbiAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgKDAsIF9mcmFtZXN5bmMuY2FuY2VsT25GcmFtZVVwZGF0ZSkodGhpcy51cGRhdGUpO1xuXG4gICAgaWYgKHRoaXMub25TdG9wKSB7XG4gICAgICB0aGlzLm9uU3RvcCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLm9uU3RvcCkge1xuICAgICAgdGhpcy5wcm9wcy5vblN0b3AodGhpcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5jb21wbGV0ZSA9IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgIGlmICh0aGlzLm9uQ29tcGxldGUpIHtcbiAgICAgIHRoaXMub25Db21wbGV0ZSgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLm9uQ29tcGxldGUpIHtcbiAgICAgIHRoaXMucHJvcHMub25Db21wbGV0ZSh0aGlzKTtcbiAgICB9XG5cbiAgICB0aGlzLnN0b3AoKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIHZhciBjdXJyZW50ID0gdGhpcy5jdXJyZW50O1xuICAgIHZhciB2ZWxvY2l0eSA9IHRoaXMudmVsb2NpdHk7XG5cbiAgICBpZiAodGhpcy5vblVwZGF0ZSkge1xuICAgICAgdGhpcy5vblVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHRoaXMudmVsb2NpdHkgPSAoMCwgX2NhbGMuc3BlZWRQZXJTZWNvbmQpKHRoaXMuY3VycmVudCAtIGN1cnJlbnQsICgwLCBfZnJhbWVzeW5jLnRpbWVTaW5jZUxhc3RGcmFtZSkoKSk7XG5cbiAgICBpZiAodGhpcy52ZWxvY2l0eSkge1xuICAgICAgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgICAgdGhpcy52YWx1ZS5zZXQodGhpcy5jdXJyZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5vblVwZGF0ZSkge1xuICAgICAgdGhpcy5wcm9wcy5vblVwZGF0ZSh0aGlzKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc0FjdGl2ZSkge1xuICAgICAgKDAsIF9mcmFtZXN5bmMub25GcmFtZVVwZGF0ZSkodGhpcy51cGRhdGUpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gc2V0KG5ld1ZhbHVlKSB7XG4gICAgdGhpcy5jdXJyZW50ID0gbmV3VmFsdWU7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudDtcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLmdldFZlbG9jaXR5ID0gZnVuY3Rpb24gZ2V0VmVsb2NpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVsb2NpdHk7XG4gIH07XG5cbiAgcmV0dXJuIEFjdGlvbjtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQWN0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMmx1WkdWNExtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3p0QlFVRkJPenRCUVVOQk96czdPMGxCUlUwN1FVRkRTaXhYUVVSSkxFMUJRMG9zUTBGQldTeExRVUZhTEVWQlFXMUNPekJDUVVSbUxGRkJRMlU3TzBGQlEycENMRk5CUVVzc1QwRkJUQ3hIUVVGbExFTkJRV1lzUTBGRWFVSTdRVUZGYWtJc1UwRkJTeXhSUVVGTUxFZEJRV2RDTEVOQlFXaENMRU5CUm1sQ08wRkJSMnBDTEZOQlFVc3NUVUZCVEN4SFFVRmpMRXRCUVVzc1RVRkJUQ3hEUVVGWkxFbEJRVm9zUTBGQmFVSXNTVUZCYWtJc1EwRkJaQ3hEUVVocFFqczdRVUZMYWtJc1UwRkJTeXhMUVVGTUxHZENRVU5MTEV0QlFVc3NWMEZCVEN4RFFVRnBRaXhaUVVGcVFpeEZRVU5CTEUxQlJrd3NRMEZNYVVJN1IwRkJia0k3TzBGQlJFa3NiVUpCV1Vvc2VVSkJRVkU3UVVGRFRpeFRRVUZMTEZGQlFVd3NSMEZCWjBJc1NVRkJhRUlzUTBGRVRUdEJRVVZPTEd0RFFVRmpMRXRCUVVzc1RVRkJUQ3hEUVVGa0xFTkJSazA3TzBGQlNVNHNVVUZCU1N4TFFVRkxMRTlCUVV3c1JVRkJZenRCUVVOb1FpeFhRVUZMTEU5QlFVd3NSMEZFWjBJN1MwRkJiRUk3TzBGQlNVRXNVVUZCU1N4TFFVRkxMRXRCUVV3c1EwRkJWeXhQUVVGWUxFVkJRVzlDTzBGQlEzUkNMRmRCUVVzc1MwRkJUQ3hEUVVGWExFOUJRVmdzUTBGQmJVSXNTVUZCYmtJc1JVRkVjMEk3UzBGQmVFSTdPMEZCU1VFc1YwRkJUeXhKUVVGUUxFTkJXazA3T3p0QlFWcEtMRzFDUVRKQ1NpeDFRa0ZCVHp0QlFVTk1MRk5CUVVzc1VVRkJUQ3hIUVVGblFpeExRVUZvUWl4RFFVUkxPMEZCUlV3c2QwTkJRVzlDTEV0QlFVc3NUVUZCVEN4RFFVRndRaXhEUVVaTE96dEJRVWxNTEZGQlFVa3NTMEZCU3l4TlFVRk1MRVZCUVdFN1FVRkRaaXhYUVVGTExFMUJRVXdzUjBGRVpUdExRVUZxUWpzN1FVRkpRU3hSUVVGSkxFdEJRVXNzUzBGQlRDeERRVUZYTEUxQlFWZ3NSVUZCYlVJN1FVRkRja0lzVjBGQlN5eExRVUZNTEVOQlFWY3NUVUZCV0N4RFFVRnJRaXhKUVVGc1FpeEZRVVJ4UWp0TFFVRjJRanM3UVVGSlFTeFhRVUZQTEVsQlFWQXNRMEZhU3pzN08wRkJNMEpJTEcxQ1FUQkRTaXdyUWtGQlZ6dEJRVU5VTEZGQlFVa3NTMEZCU3l4VlFVRk1MRVZCUVdsQ08wRkJRMjVDTEZkQlFVc3NWVUZCVEN4SFFVUnRRanRMUVVGeVFqczdRVUZKUVN4UlFVRkpMRXRCUVVzc1MwRkJUQ3hEUVVGWExGVkJRVmdzUlVGQmRVSTdRVUZEZWtJc1YwRkJTeXhMUVVGTUxFTkJRVmNzVlVGQldDeERRVUZ6UWl4SlFVRjBRaXhGUVVSNVFqdExRVUV6UWpzN1FVRkpRU3hUUVVGTExFbEJRVXdzUjBGVVV6czdRVUZYVkN4WFFVRlBMRWxCUVZBc1EwRllVenM3TzBGQk1VTlFMRzFDUVhkRVNpd3lRa0ZCVXp0QlFVTlFMRkZCUVUwc1ZVRkJWU3hMUVVGTExFOUJRVXdzUTBGRVZEdEJRVVZRTEZGQlFVMHNWMEZCVnl4TFFVRkxMRkZCUVV3c1EwRkdWanM3UVVGSlVDeFJRVUZKTEV0QlFVc3NVVUZCVEN4RlFVRmxPMEZCUTJwQ0xGZEJRVXNzVVVGQlRDeEhRVVJwUWp0TFFVRnVRanM3UVVGSlFTeFRRVUZMTEZGQlFVd3NSMEZCWjBJc01FSkJRV1VzUzBGQlN5eFBRVUZNTEVkQlFXVXNUMEZCWml4RlFVRjNRaXh2UTBGQmRrTXNRMEZCYUVJc1EwRlNUenM3UVVGVlVDeFJRVUZKTEV0QlFVc3NVVUZCVEN4RlFVRmxPMEZCUTJwQ0xGVkJRVWtzUzBGQlN5eExRVUZNTEVWQlFWazdRVUZEWkN4aFFVRkxMRXRCUVV3c1EwRkJWeXhIUVVGWUxFTkJRV1VzUzBGQlN5eFBRVUZNTEVOQlFXWXNRMEZFWXp0UFFVRm9RanRMUVVSR096dEJRVTFCTEZGQlFVa3NTMEZCU3l4TFFVRk1MRU5CUVZjc1VVRkJXQ3hGUVVGeFFqdEJRVU4yUWl4WFFVRkxMRXRCUVV3c1EwRkJWeXhSUVVGWUxFTkJRVzlDTEVsQlFYQkNMRVZCUkhWQ08wdEJRWHBDT3p0QlFVbEJMRkZCUVVrc1MwRkJTeXhSUVVGTUxFVkJRV1U3UVVGRGFrSXNiME5CUVdNc1MwRkJTeXhOUVVGTUxFTkJRV1FzUTBGRWFVSTdTMEZCYmtJN08wRkJTVUVzVjBGQlR5eEpRVUZRTEVOQmVFSlBPenM3UVVGNFJFd3NiVUpCYlVaS0xHMUNRVUZKTEZWQlFWVTdRVUZEV2l4VFFVRkxMRTlCUVV3c1IwRkJaU3hSUVVGbUxFTkJSRms3T3p0QlFXNUdWaXh0UWtGMVJrb3NjVUpCUVUwN1FVRkRTaXhYUVVGUExFdEJRVXNzVDBGQlRDeERRVVJJT3pzN1FVRjJSa1lzYlVKQk1rWktMSEZEUVVGak8wRkJRMW9zVjBGQlR5eExRVUZMTEZGQlFVd3NRMEZFU3pzN08xTkJNMFpXT3pzN2EwSkJaMGRUSWl3aVptbHNaU0k2SW1sdVpHVjRMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwTDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3SUc5dVJuSmhiV1ZWY0dSaGRHVXNJR05oYm1ObGJFOXVSbkpoYldWVmNHUmhkR1VzSUhScGJXVlRhVzVqWlV4aGMzUkdjbUZ0WlNCOUlHWnliMjBnSnk0dUwyWnlZVzFsYzNsdVl5YzdYRzVwYlhCdmNuUWdleUJ6Y0dWbFpGQmxjbE5sWTI5dVpDQjlJR1p5YjIwZ0p5NHVMMmx1WXk5allXeGpKenRjYmx4dVkyeGhjM01nUVdOMGFXOXVJSHRjYmlBZ1kyOXVjM1J5ZFdOMGIzSW9jSEp2Y0hNcElIdGNiaUFnSUNCMGFHbHpMbU4xY25KbGJuUWdQU0F3TzF4dUlDQWdJSFJvYVhNdWRtVnNiMk5wZEhrZ1BTQXdPMXh1SUNBZ0lIUm9hWE11ZFhCa1lYUmxJRDBnZEdocGN5NTFjR1JoZEdVdVltbHVaQ2gwYUdsektUdGNibHh1SUNBZ0lIUm9hWE11Y0hKdmNITWdQU0I3WEc0Z0lDQWdJQ0F1TGk1MGFHbHpMbU52Ym5OMGNuVmpkRzl5TG1SbFptRjFiSFJRY205d2N5eGNiaUFnSUNBZ0lDNHVMbkJ5YjNCelhHNGdJQ0FnZlR0Y2JpQWdmVnh1WEc0Z0lITjBZWEowS0NrZ2UxeHVJQ0FnSUhSb2FYTXVhWE5CWTNScGRtVWdQU0IwY25WbE8xeHVJQ0FnSUc5dVJuSmhiV1ZWY0dSaGRHVW9kR2hwY3k1MWNHUmhkR1VwTzF4dVhHNGdJQ0FnYVdZZ0tIUm9hWE11YjI1VGRHRnlkQ2tnZTF4dUlDQWdJQ0FnZEdocGN5NXZibE4wWVhKMEtDazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2FXWWdLSFJvYVhNdWNISnZjSE11YjI1VGRHRnlkQ2tnZTF4dUlDQWdJQ0FnZEdocGN5NXdjbTl3Y3k1dmJsTjBZWEowS0hSb2FYTXBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNCOVhHNWNiaUFnYzNSdmNDZ3BJSHRjYmlBZ0lDQjBhR2x6TG1selFXTjBhWFpsSUQwZ1ptRnNjMlU3WEc0Z0lDQWdZMkZ1WTJWc1QyNUdjbUZ0WlZWd1pHRjBaU2gwYUdsekxuVndaR0YwWlNrN1hHNWNiaUFnSUNCcFppQW9kR2hwY3k1dmJsTjBiM0FwSUh0Y2JpQWdJQ0FnSUhSb2FYTXViMjVUZEc5d0tDazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2FXWWdLSFJvYVhNdWNISnZjSE11YjI1VGRHOXdLU0I3WEc0Z0lDQWdJQ0IwYUdsekxuQnliM0J6TG05dVUzUnZjQ2gwYUdsektUdGNiaUFnSUNCOVhHNWNiaUFnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnZlZ4dVhHNGdJR052YlhCc1pYUmxLQ2tnZTF4dUlDQWdJR2xtSUNoMGFHbHpMbTl1UTI5dGNHeGxkR1VwSUh0Y2JpQWdJQ0FnSUhSb2FYTXViMjVEYjIxd2JHVjBaU2dwTzF4dUlDQWdJSDFjYmx4dUlDQWdJR2xtSUNoMGFHbHpMbkJ5YjNCekxtOXVRMjl0Y0d4bGRHVXBJSHRjYmlBZ0lDQWdJSFJvYVhNdWNISnZjSE11YjI1RGIyMXdiR1YwWlNoMGFHbHpLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQjBhR2x6TG5OMGIzQW9LVHRjYmx4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQjlYRzVjYmlBZ2RYQmtZWFJsS0NrZ2UxeHVJQ0FnSUdOdmJuTjBJR04xY25KbGJuUWdQU0IwYUdsekxtTjFjbkpsYm5RN1hHNGdJQ0FnWTI5dWMzUWdkbVZzYjJOcGRIa2dQU0IwYUdsekxuWmxiRzlqYVhSNU8xeHVYRzRnSUNBZ2FXWWdLSFJvYVhNdWIyNVZjR1JoZEdVcElIdGNiaUFnSUNBZ0lIUm9hWE11YjI1VmNHUmhkR1VvS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0IwYUdsekxuWmxiRzlqYVhSNUlEMGdjM0JsWldSUVpYSlRaV052Ym1Rb2RHaHBjeTVqZFhKeVpXNTBJQzBnWTNWeWNtVnVkQ3dnZEdsdFpWTnBibU5sVEdGemRFWnlZVzFsS0NrcE8xeHVYRzRnSUNBZ2FXWWdLSFJvYVhNdWRtVnNiMk5wZEhrcElIdGNiaUFnSUNBZ0lHbG1JQ2gwYUdsekxuWmhiSFZsS1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11ZG1Gc2RXVXVjMlYwS0hSb2FYTXVZM1Z5Y21WdWRDazdYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2FXWWdLSFJvYVhNdWNISnZjSE11YjI1VmNHUmhkR1VwSUh0Y2JpQWdJQ0FnSUhSb2FYTXVjSEp2Y0hNdWIyNVZjR1JoZEdVb2RHaHBjeWs3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdhV1lnS0hSb2FYTXVhWE5CWTNScGRtVXBJSHRjYmlBZ0lDQWdJRzl1Um5KaGJXVlZjR1JoZEdVb2RHaHBjeTUxY0dSaGRHVXBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNCOVhHNWNiaUFnYzJWMEtHNWxkMVpoYkhWbEtTQjdYRzRnSUNBZ2RHaHBjeTVqZFhKeVpXNTBJRDBnYm1WM1ZtRnNkV1U3WEc0Z0lIMWNibHh1SUNCblpYUW9LU0I3WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE11WTNWeWNtVnVkRHRjYmlBZ2ZWeHVYRzRnSUdkbGRGWmxiRzlqYVhSNUtDa2dlMXh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpMblpsYkc5amFYUjVPMXh1SUNCOVhHNTlYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJRUZqZEdsdmJqdGNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIERFRkFVTFRfT1ZFUlNIT09UX1NUUkVOR1RIID0gMS41MjU7XG5cbnZhciBjcmVhdGVSZXZlcnNlZEVhc2luZyA9IGV4cG9ydHMuY3JlYXRlUmV2ZXJzZWRFYXNpbmcgPSBmdW5jdGlvbiAoZWFzaW5nKSB7XG4gIHJldHVybiBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiAxIC0gZWFzaW5nKDEgLSBwKTtcbiAgfTtcbn07XG52YXIgY3JlYXRlTWlycm9yZWRFYXNpbmcgPSBleHBvcnRzLmNyZWF0ZU1pcnJvcmVkRWFzaW5nID0gZnVuY3Rpb24gKGVhc2luZykge1xuICByZXR1cm4gZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gcCA8PSAwLjUgPyBlYXNpbmcoMiAqIHApIC8gMiA6ICgyIC0gZWFzaW5nKDIgKiAoMSAtIHApKSkgLyAyO1xuICB9O1xufTs7XG5cbnZhciBsaW5lYXIgPSBleHBvcnRzLmxpbmVhciA9IGZ1bmN0aW9uIChwKSB7XG4gIHJldHVybiBwO1xufTtcblxudmFyIGNyZWF0ZUVhc2VJbiA9IGV4cG9ydHMuY3JlYXRlRWFzZUluID0gZnVuY3Rpb24gKHBvd2VyKSB7XG4gIHJldHVybiBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiBNYXRoLnBvdyhwLCBwb3dlcik7XG4gIH07XG59O1xudmFyIGVhc2VJbiA9IGV4cG9ydHMuZWFzZUluID0gY3JlYXRlRWFzZUluKDIpO1xudmFyIGVhc2VPdXQgPSBleHBvcnRzLmVhc2VPdXQgPSBjcmVhdGVSZXZlcnNlZEVhc2luZyhlYXNlSW4pO1xudmFyIGVhc2VJbk91dCA9IGV4cG9ydHMuZWFzZUluT3V0ID0gY3JlYXRlTWlycm9yZWRFYXNpbmcoZWFzZUluKTtcblxudmFyIGNpcmNJbiA9IGV4cG9ydHMuY2lyY0luID0gZnVuY3Rpb24gKHApIHtcbiAgcmV0dXJuIDEgLSBNYXRoLnNpbihNYXRoLmFjb3MocCkpO1xufTtcbnZhciBjaXJjT3V0ID0gZXhwb3J0cy5jaXJjT3V0ID0gY3JlYXRlUmV2ZXJzZWRFYXNpbmcoY2lyY0luKTtcbnZhciBjaXJjSW5PdXQgPSBleHBvcnRzLmNpcmNJbk91dCA9IGNyZWF0ZU1pcnJvcmVkRWFzaW5nKGNpcmNPdXQpO1xuXG52YXIgY3JlYXRlQmFja0luID0gZXhwb3J0cy5jcmVhdGVCYWNrSW4gPSBmdW5jdGlvbiAocG93ZXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIHAgKiBwICogKChwb3dlciArIDEpICogcCAtIHBvd2VyKTtcbiAgfTtcbn07XG52YXIgYmFja0luID0gZXhwb3J0cy5iYWNrSW4gPSBjcmVhdGVCYWNrSW4oREVGQVVMVF9PVkVSU0hPT1RfU1RSRU5HVEgpO1xudmFyIGJhY2tPdXQgPSBleHBvcnRzLmJhY2tPdXQgPSBjcmVhdGVSZXZlcnNlZEVhc2luZyhiYWNrSW4pO1xudmFyIGJhY2tJbk91dCA9IGV4cG9ydHMuYmFja0luT3V0ID0gY3JlYXRlTWlycm9yZWRFYXNpbmcoYmFja0luKTtcblxudmFyIGNyZWF0ZUFudGljaXBhdGVFYXNpbmcgPSBleHBvcnRzLmNyZWF0ZUFudGljaXBhdGVFYXNpbmcgPSBmdW5jdGlvbiAocG93ZXIpIHtcbiAgdmFyIGJhY2tFYXNpbmcgPSBjcmVhdGVCYWNrSW4ocG93ZXIpO1xuICByZXR1cm4gZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gKHAgKj0gMikgPCAxID8gMC41ICogYmFja0Vhc2luZyhwKSA6IDAuNSAqICgyIC0gTWF0aC5wb3coMiwgLTEwICogKHAgLSAxKSkpO1xuICB9O1xufTtcbnZhciBhbnRpY2lwYXRlID0gZXhwb3J0cy5hbnRpY2lwYXRlID0gY3JlYXRlQW50aWNpcGF0ZUVhc2luZyhERUZBVUxUX09WRVJTSE9PVF9TVFJFTkdUSCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWxZWE5wYm1jdmFXNWtaWGd1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN08wRkJRVUVzU1VGQlRTdzJRa0ZCTmtJc1MwRkJOMEk3TzBGQlJVTXNTVUZCVFN4elJFRkJkVUlzVlVGQlF5eE5RVUZFTzFOQlFWa3NWVUZCUXl4RFFVRkVPMWRCUVU4c1NVRkJTU3hQUVVGUExFbEJRVWtzUTBGQlNpeERRVUZZTzBkQlFWQTdRMEZCV2p0QlFVTTNRaXhKUVVGTkxITkVRVUYxUWl4VlFVRkRMRTFCUVVRN1UwRkJXU3hWUVVGRExFTkJRVVE3VjBGQlR5eERRVUZETEVsQlFVc3NSMEZCVEN4SFFVRlpMRTlCUVU4c1NVRkJTU3hEUVVGS0xFTkJRVkFzUjBGQlowSXNRMEZCYUVJc1IwRkJiMElzUTBGQlF5eEpRVUZKTEU5QlFVOHNTMEZCU3l4SlFVRkpMRU5CUVVvc1EwRkJUQ3hEUVVGWUxFTkJRVVFzUjBGQk5FSXNRMEZCTlVJN1IwRkJlRU03UTBGQldpeERRVUZyUmpzN1FVRkZMMGNzU1VGQlRTd3dRa0ZCVXl4VlFVRkRMRU5CUVVRN1UwRkJUenREUVVGUU96dEJRVVZtTEVsQlFVMHNjME5CUVdVc1ZVRkJReXhMUVVGRU8xTkJRVmNzVlVGQlF5eERRVUZFTzI5Q1FVRlBMRWRCUVVzN1IwRkJXanREUVVGWU8wRkJRM0pDTEVsQlFVMHNNRUpCUVZNc1lVRkJZU3hEUVVGaUxFTkJRVlE3UVVGRFRpeEpRVUZOTERSQ1FVRlZMSEZDUVVGeFFpeE5RVUZ5UWl4RFFVRldPMEZCUTA0c1NVRkJUU3huUTBGQldTeHhRa0ZCY1VJc1RVRkJja0lzUTBGQldqczdRVUZGVGl4SlFVRk5MREJDUVVGVExGVkJRVU1zUTBGQlJEdFRRVUZQTEVsQlFVa3NTMEZCU3l4SFFVRk1MRU5CUVZNc1MwRkJTeXhKUVVGTUxFTkJRVlVzUTBGQlZpeERRVUZVTEVOQlFVbzdRMEZCVUR0QlFVTm1MRWxCUVUwc05FSkJRVlVzY1VKQlFYRkNMRTFCUVhKQ0xFTkJRVlk3UVVGRFRpeEpRVUZOTEdkRFFVRlpMSEZDUVVGeFFpeFBRVUZ5UWl4RFFVRmFPenRCUVVWT0xFbEJRVTBzYzBOQlFXVXNWVUZCUXl4TFFVRkVPMU5CUVZjc1ZVRkJReXhEUVVGRU8xZEJRVThzUTBGQlF5eEhRVUZKTEVOQlFVb3NTVUZCVlN4RFFVRkRMRkZCUVZFc1EwRkJVaXhEUVVGRUxFZEJRV01zUTBGQlpDeEhRVUZyUWl4TFFVRnNRaXhEUVVGWU8wZEJRVkE3UTBGQldEdEJRVU55UWl4SlFVRk5MREJDUVVGVExHRkJRV0VzTUVKQlFXSXNRMEZCVkR0QlFVTk9MRWxCUVUwc05FSkJRVlVzY1VKQlFYRkNMRTFCUVhKQ0xFTkJRVlk3UVVGRFRpeEpRVUZOTEdkRFFVRlpMSEZDUVVGeFFpeE5RVUZ5UWl4RFFVRmFPenRCUVVWT0xFbEJRVTBzTUVSQlFYbENMRlZCUVVNc1MwRkJSQ3hGUVVGWE8wRkJReTlETEUxQlFVMHNZVUZCWVN4aFFVRmhMRXRCUVdJc1EwRkJZaXhEUVVSNVF6dEJRVVV2UXl4VFFVRlBMRlZCUVVNc1EwRkJSRHRYUVVGUExFTkJRVVVzUzBGQlN5eERRVUZNTEVOQlFVUXNSMEZCVnl4RFFVRllMRWRCUVdkQ0xFMUJRVTBzVjBGQlZ5eERRVUZZTEVOQlFVNHNSMEZCYzBJc1QwRkJUeXhKUVVGSkxFdEJRVXNzUjBGQlRDeERRVUZUTEVOQlFWUXNSVUZCV1N4RFFVRkRMRVZCUVVRc1NVRkJUeXhKUVVGSkxFTkJRVW9zUTBGQlVDeERRVUZvUWl4RFFVRlFPMGRCUVRsRExFTkJSbmRETzBOQlFWZzdRVUZKTDBJc1NVRkJUU3hyUTBGQllTeDFRa0ZCZFVJc01FSkJRWFpDTEVOQlFXSWlMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUXZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lZMjl1YzNRZ1JFVkdRVlZNVkY5UFZrVlNVMGhQVDFSZlUxUlNSVTVIVkVnZ1BTQXhMalV5TlR0Y2JseHVaWGh3YjNKMElHTnZibk4wSUdOeVpXRjBaVkpsZG1WeWMyVmtSV0Z6YVc1bklEMGdLR1ZoYzJsdVp5a2dQVDRnS0hBcElEMCtJREVnTFNCbFlYTnBibWNvTVNBdElIQXBPMXh1Wlhod2IzSjBJR052Ym5OMElHTnlaV0YwWlUxcGNuSnZjbVZrUldGemFXNW5JRDBnS0dWaGMybHVaeWtnUFQ0Z0tIQXBJRDArSUNod0lEdzlJREF1TlNrZ1B5QmxZWE5wYm1jb01pQXFJSEFwSUM4Z01pQTZJQ2d5SUMwZ1pXRnphVzVuS0RJZ0tpQW9NU0F0SUhBcEtTa2dMeUF5T3p0Y2JseHVaWGh3YjNKMElHTnZibk4wSUd4cGJtVmhjaUE5SUNod0tTQTlQaUJ3TzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnWTNKbFlYUmxSV0Z6WlVsdUlEMGdLSEJ2ZDJWeUtTQTlQaUFvY0NrZ1BUNGdjQ0FxS2lCd2IzZGxjanRjYm1WNGNHOXlkQ0JqYjI1emRDQmxZWE5sU1c0Z1BTQmpjbVZoZEdWRllYTmxTVzRvTWlrN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnWldGelpVOTFkQ0E5SUdOeVpXRjBaVkpsZG1WeWMyVmtSV0Z6YVc1bktHVmhjMlZKYmlrN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnWldGelpVbHVUM1YwSUQwZ1kzSmxZWFJsVFdseWNtOXlaV1JGWVhOcGJtY29aV0Z6WlVsdUtUdGNibHh1Wlhod2IzSjBJR052Ym5OMElHTnBjbU5KYmlBOUlDaHdLU0E5UGlBeElDMGdUV0YwYUM1emFXNG9UV0YwYUM1aFkyOXpLSEFwS1R0Y2JtVjRjRzl5ZENCamIyNXpkQ0JqYVhKalQzVjBJRDBnWTNKbFlYUmxVbVYyWlhKelpXUkZZWE5wYm1jb1kybHlZMGx1S1R0Y2JtVjRjRzl5ZENCamIyNXpkQ0JqYVhKalNXNVBkWFFnUFNCamNtVmhkR1ZOYVhKeWIzSmxaRVZoYzJsdVp5aGphWEpqVDNWMEtUdGNibHh1Wlhod2IzSjBJR052Ym5OMElHTnlaV0YwWlVKaFkydEpiaUE5SUNod2IzZGxjaWtnUFQ0Z0tIQXBJRDArSUNod0lDb2djQ2tnS2lBb0tIQnZkMlZ5SUNzZ01Ta2dLaUJ3SUMwZ2NHOTNaWElwTzF4dVpYaHdiM0owSUdOdmJuTjBJR0poWTJ0SmJpQTlJR055WldGMFpVSmhZMnRKYmloRVJVWkJWVXhVWDA5V1JWSlRTRTlQVkY5VFZGSkZUa2RVU0NrN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnWW1GamEwOTFkQ0E5SUdOeVpXRjBaVkpsZG1WeWMyVmtSV0Z6YVc1bktHSmhZMnRKYmlrN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnWW1GamEwbHVUM1YwSUQwZ1kzSmxZWFJsVFdseWNtOXlaV1JGWVhOcGJtY29ZbUZqYTBsdUtUdGNibHh1Wlhod2IzSjBJR052Ym5OMElHTnlaV0YwWlVGdWRHbGphWEJoZEdWRllYTnBibWNnUFNBb2NHOTNaWElwSUQwK0lIdGNiaUFnWTI5dWMzUWdZbUZqYTBWaGMybHVaeUE5SUdOeVpXRjBaVUpoWTJ0SmJpaHdiM2RsY2lrN1hHNGdJSEpsZEhWeWJpQW9jQ2tnUFQ0Z0tDaHdJQ285SURJcElEd2dNU2tnUHlBd0xqVWdLaUJpWVdOclJXRnphVzVuS0hBcElEb2dNQzQxSUNvZ0tESWdMU0JOWVhSb0xuQnZkeWd5TENBdE1UQWdLaUFvY0NBdElERXBLU2s3WEc1OVhHNWxlSEJ2Y25RZ1kyOXVjM1FnWVc1MGFXTnBjR0YwWlNBOUlHTnlaV0YwWlVGdWRHbGphWEJoZEdWRllYTnBibWNvUkVWR1FWVk1WRjlQVmtWU1UwaFBUMVJmVTFSU1JVNUhWRWdwTzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2Vhc2luZy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuc3RlcFByb2dyZXNzID0gZXhwb3J0cy5zcGVlZFBlclNlY29uZCA9IGV4cG9ydHMuc3BlZWRQZXJGcmFtZSA9IGV4cG9ydHMuc21vb3RoID0gZXhwb3J0cy5yZXN0cmljdCA9IGV4cG9ydHMucmVsYXRpdmVWYWx1ZSA9IGV4cG9ydHMucmFuZG9tID0gZXhwb3J0cy5yYWRpYW5zVG9EZWdyZWVzID0gZXhwb3J0cy5wb2ludEZyb21BbmdsZUFuZERpc3RhbmNlID0gZXhwb3J0cy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSA9IGV4cG9ydHMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MgPSBleHBvcnRzLmRpc3RhbmNlID0gZXhwb3J0cy5kaWxhdGUgPSBleHBvcnRzLmRlZ3JlZXNUb1JhZGlhbnMgPSBleHBvcnRzLmFuZ2xlID0gdW5kZWZpbmVkO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgWkVST19QT0lOVCA9IHtcbiAgeDogMCxcbiAgeTogMCxcbiAgejogMFxufTtcblxudmFyIGRpc3RhbmNlMUQgPSBmdW5jdGlvbiAoYSwgYikge1xuICByZXR1cm4gTWF0aC5hYnMoYSAtIGIpO1xufTtcblxuLypcbiAgQW5nbGUgYmV0d2VlbiBwb2ludHNcbiAgXG4gIFRyYW5zbGF0ZXMgdGhlIGh5cG90aGV0aWNhbCBsaW5lIHNvIHRoYXQgdGhlICdmcm9tJyBjb29yZGluYXRlc1xuICBhcmUgYXQgMCwwXG4gIFxuICBAcGFyYW0gW29iamVjdF06IFggYW5kIFkgY29vcmRpbmF0ZXMgb2YgZnJvbSBwb2ludFxuICBAcGFyYW0gW29iamVjdF06IFggYW5kIFkgY29yZGluYXRlcyBvZiB0byBwb2ludFxuICBAcmV0dXJuIFtyYWRpYW5dOiBBbmdsZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzIGluIHJhZGlhbnNcbiovXG52YXIgYW5nbGUgPSBleHBvcnRzLmFuZ2xlID0gZnVuY3Rpb24gKGEpIHtcbiAgdmFyIGIgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBaRVJPX1BPSU5UIDogYXJndW1lbnRzWzFdO1xuICByZXR1cm4gcmFkaWFuc1RvRGVncmVlcyhNYXRoLmF0YW4yKGEueCAtIGIueCwgYS55IC0gYi55KSk7XG59O1xuXG4vKlxuICBDb252ZXJ0IGRlZ3JlZXMgdG8gcmFkaWFuc1xuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBpbiBkZWdyZWVzXG4gIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGluIHJhZGlhbnNcbiovXG52YXIgZGVncmVlc1RvUmFkaWFucyA9IGV4cG9ydHMuZGVncmVlc1RvUmFkaWFucyA9IGZ1bmN0aW9uIChkZWdyZWVzKSB7XG4gIHJldHVybiBkZWdyZWVzICogTWF0aC5QSSAvIDE4MDtcbn07XG5cbi8qXG4gIERpbGF0ZVxuICBcbiAgQ2hhbmdlIHRoZSBwcm9ncmVzc2lvbiBiZXR3ZWVuIGEgYW5kIGIgYWNjb3JkaW5nIHRvIGRpbGF0aW9uLlxuICBcbiAgU28gZGlsYXRpb24gPSAwLjUgd291bGQgY2hhbmdlXG4gIFxuICBhIC0tLS0tLS0tLSBiXG4gIFxuICB0b1xuICBcbiAgYSAtLS0tIGJcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogUHJldmlvdXMgdmFsdWVcbiAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gIEBwYXJhbSBbbnVtYmVyXTogRGlsYXRlIHByb2dyZXNzIGJ5IHhcbiAgQHJldHVybiBbbnVtYmVyXTogUHJldmlvdXMgdmFsdWUgcGx1cyB0aGUgZGlsYXRlZCBkaWZmZXJlbmNlXG4qL1xudmFyIGRpbGF0ZSA9IGV4cG9ydHMuZGlsYXRlID0gZnVuY3Rpb24gKGEsIGIsIGRpbGF0aW9uKSB7XG4gIHJldHVybiBhICsgKGIgLSBhKSAqIGRpbGF0aW9uO1xufTtcblxuLypcbiAgRGlzdGFuY2VcbiAgXG4gIFJldHVybnMgdGhlIGRpc3RhbmNlIGJldHdlZW4gdHdvIG4gZGltZW5zaW9uYWwgcG9pbnRzLlxuICBcbiAgQHBhcmFtIFtvYmplY3QvbnVtYmVyXTogeCBhbmQgeSBvciBqdXN0IHggb2YgcG9pbnQgQVxuICBAcGFyYW0gW29iamVjdC9udW1iZXJdOiAob3B0aW9uYWwpOiB4IGFuZCB5IG9yIGp1c3QgeCBvZiBwb2ludCBCXG4gIEByZXR1cm4gW251bWJlcl06IFRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzXG4qL1xudmFyIGRpc3RhbmNlID0gZXhwb3J0cy5kaXN0YW5jZSA9IGZ1bmN0aW9uIChhKSB7XG4gIHZhciBiID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gWkVST19QT0lOVCA6IGFyZ3VtZW50c1sxXTtcblxuICAvLyAxRCBkaW1lbnNpb25zXG4gIGlmICgoMCwgX3V0aWxzLmlzTnVtKShhKSkge1xuICAgIHJldHVybiBkaXN0YW5jZTFEKGEsIGIpO1xuXG4gICAgLy8gTXVsdGktZGltZW5zaW9uYWxcbiAgfSBlbHNlIHtcbiAgICAgIHZhciB4RGVsdGEgPSBkaXN0YW5jZTFEKGEueCwgYi54KTtcbiAgICAgIHZhciB5RGVsdGEgPSBkaXN0YW5jZTFEKGEueSwgYi55KTtcbiAgICAgIHZhciB6RGVsdGEgPSAoMCwgX3V0aWxzLmlzTnVtKShhLnopID8gZGlzdGFuY2UxRChhLnosIGIueikgOiAwO1xuXG4gICAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHhEZWx0YSwgMikgKyBNYXRoLnBvdyh5RGVsdGEsIDIpICsgTWF0aC5wb3coekRlbHRhLCAyKSk7XG4gICAgfVxufTtcblxuLypcbiAgVmFsdWUgaW4gcmFuZ2UgZnJvbSBwcm9ncmVzc1xuICBcbiAgR2l2ZW4gYSBsb3dlciBsaW1pdCBhbmQgYW4gdXBwZXIgbGltaXQsIHdlIHJldHVybiB0aGUgdmFsdWUgd2l0aGluXG4gIHRoYXQgcmFuZ2UgYXMgZXhwcmVzc2VkIGJ5IHByb2dyZXNzIChhIG51bWJlciBmcm9tIDAtMSlcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogVGhlIHByb2dyZXNzIGJldHdlZW4gbG93ZXIgYW5kIHVwcGVyIGxpbWl0cyBleHByZXNzZWQgMC0xXG4gIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgb2YgcmFuZ2VcbiAgQHBhcmFtIFtudW1iZXJdOiBVcHBlciBsaW1pdCBvZiByYW5nZVxuICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBhcyBjYWxjdWxhdGVkIGZyb20gcHJvZ3Jlc3Mgd2l0aGluIHJhbmdlIChub3QgbGltaXRlZCB3aXRoaW4gcmFuZ2UpXG4qL1xudmFyIGdldFZhbHVlRnJvbVByb2dyZXNzID0gZXhwb3J0cy5nZXRWYWx1ZUZyb21Qcm9ncmVzcyA9IGZ1bmN0aW9uIChwcm9ncmVzcywgZnJvbSwgdG8pIHtcbiAgcmV0dXJuIC1wcm9ncmVzcyAqIGZyb20gKyBwcm9ncmVzcyAqIHRvICsgZnJvbTtcbn07XG5cbi8qXG4gIFByb2dyZXNzIHdpdGhpbiBnaXZlbiByYW5nZVxuICBcbiAgR2l2ZW4gYSBsb3dlciBsaW1pdCBhbmQgYW4gdXBwZXIgbGltaXQsIHdlIHJldHVybiB0aGUgcHJvZ3Jlc3NcbiAgKGV4cHJlc3NlZCBhcyBhIG51bWJlciAwLTEpIHJlcHJlc2VudGVkIGJ5IHRoZSBnaXZlbiB2YWx1ZSwgYW5kXG4gIGxpbWl0IHRoYXQgcHJvZ3Jlc3MgdG8gd2l0aGluIDAtMS5cbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgdG8gZmluZCBwcm9ncmVzcyB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBcbiAgQHBhcmFtIFtudW1iZXJdOiBVcHBlciBsaW1pdFxuICBAcmV0dXJuIFtudW1iZXJdOiBQcm9ncmVzcyBvZiB2YWx1ZSB3aXRoaW4gcmFuZ2UgYXMgZXhwcmVzc2VkIDAtMVxuKi9cbnZhciBnZXRQcm9ncmVzc0Zyb21WYWx1ZSA9IGV4cG9ydHMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUsIGZyb20sIHRvKSB7XG4gIHJldHVybiAodmFsdWUgLSBmcm9tKSAvICh0byAtIGZyb20pO1xufTtcblxuLypcbiAgUG9pbnQgZnJvbSBhbmdsZSBhbmQgZGlzdGFuY2VcbiAgXG4gIEBwYXJhbSBbb2JqZWN0XTogMkQgcG9pbnQgb2Ygb3JpZ2luXG4gIEBwYXJhbSBbbnVtYmVyXTogQW5nbGUgZnJvbSBvcmlnaW5cbiAgQHBhcmFtIFtudW1iZXJdOiBEaXN0YW5jZSBmcm9tIG9yaWdpblxuICBAcmV0dXJuIFtvYmplY3RdOiBDYWxjdWxhdGVkIDJEIHBvaW50XG4qL1xudmFyIHBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UgPSBleHBvcnRzLnBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UgPSBmdW5jdGlvbiAob3JpZ2luLCBhbmdsZSwgZGlzdGFuY2UpIHtcbiAgYW5nbGUgPSBkZWdyZWVzVG9SYWRpYW5zKGFuZ2xlKTtcblxuICByZXR1cm4ge1xuICAgIHg6IGRpc3RhbmNlICogTWF0aC5jb3MoYW5nbGUpICsgb3JpZ2luLngsXG4gICAgeTogZGlzdGFuY2UgKiBNYXRoLnNpbihhbmdsZSkgKyBvcmlnaW4ueVxuICB9O1xufTtcblxuLypcbiAgQ29udmVydCByYWRpYW5zIHRvIGRlZ3JlZXNcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgaW4gcmFkaWFuc1xuICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBpbiBkZWdyZWVzXG4qL1xudmFyIHJhZGlhbnNUb0RlZ3JlZXMgPSBleHBvcnRzLnJhZGlhbnNUb0RlZ3JlZXMgPSBmdW5jdGlvbiAocmFkaWFucykge1xuICByZXR1cm4gcmFkaWFucyAqIDE4MCAvIE1hdGguUEk7XG59O1xuXG4vKlxuICBSZXR1cm4gcmFuZG9tIG51bWJlciBiZXR3ZWVuIHJhbmdlXG4gIFxuICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogT3V0cHV0IG1pbmltdW1cbiAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IE91dHB1dCBtYXhpbXVtXG4gIEByZXR1cm4gW251bWJlcl06IFJhbmRvbSBudW1iZXIgd2l0aGluIHJhbmdlLCBvciAwIGFuZCAxIGlmIG5vbmUgcHJvdmlkZWRcbiovXG52YXIgcmFuZG9tID0gZXhwb3J0cy5yYW5kb20gPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBtaW4gPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyAwIDogYXJndW1lbnRzWzBdO1xuICB2YXIgbWF4ID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gMSA6IGFyZ3VtZW50c1sxXTtcbiAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcbn07XG5cbi8qXG4gIENhbGN1bGF0ZSByZWxhdGl2ZSB2YWx1ZVxuICBcbiAgVGFrZXMgdGhlIG9wZXJhdG9yIGFuZCB2YWx1ZSBmcm9tIGEgc3RyaW5nLCBpZSBcIis9NVwiLCBhbmQgYXBwbGllc1xuICB0byB0aGUgY3VycmVudCB2YWx1ZSB0byByZXNvbHZlIGEgbmV3IHRhcmdldC5cbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICBAcGFyYW0gW3N0cmluZ106IFJlbGF0aXZlIHZhbHVlXG4gIEByZXR1cm4gW251bWJlcl06IE5ldyB2YWx1ZVxuKi9cbnZhciByZWxhdGl2ZVZhbHVlID0gZXhwb3J0cy5yZWxhdGl2ZVZhbHVlID0gZnVuY3Rpb24gKGN1cnJlbnQsIHJlbGF0aXZlKSB7XG4gIHZhciBuZXdWYWx1ZSA9IGN1cnJlbnQ7XG4gIHZhciBlcXVhdGlvbiA9IHJlbGF0aXZlLnNwbGl0KCc9Jyk7XG4gIHZhciBvcGVyYXRvciA9IGVxdWF0aW9uWzBdO1xuXG4gIHZhciBfZmluZFZhbHVlQW5kVW5pdCA9ICgwLCBfdXRpbHMuZmluZFZhbHVlQW5kVW5pdCkoZXF1YXRpb25bMV0pO1xuXG4gIHZhciB1bml0ID0gX2ZpbmRWYWx1ZUFuZFVuaXQudW5pdDtcbiAgdmFyIHZhbHVlID0gX2ZpbmRWYWx1ZUFuZFVuaXQudmFsdWU7XG5cblxuICB2YWx1ZSA9IHBhcnNlRmxvYXQodmFsdWUpO1xuXG4gIHN3aXRjaCAob3BlcmF0b3IpIHtcbiAgICBjYXNlICcrJzpcbiAgICAgIG5ld1ZhbHVlICs9IHZhbHVlO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnLSc6XG4gICAgICBuZXdWYWx1ZSAtPSB2YWx1ZTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJyonOlxuICAgICAgbmV3VmFsdWUgKj0gdmFsdWU7XG4gICAgICBicmVhaztcbiAgICBjYXNlICcvJzpcbiAgICAgIG5ld1ZhbHVlIC89IHZhbHVlO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICBpZiAodW5pdCkge1xuICAgIG5ld1ZhbHVlICs9IHVuaXQ7XG4gIH1cblxuICByZXR1cm4gbmV3VmFsdWU7XG59O1xuXG4vKlxuICBSZXN0cmljdCB2YWx1ZSB0byByYW5nZVxuICBcbiAgUmV0dXJuIHZhbHVlIHdpdGhpbiB0aGUgcmFuZ2Ugb2YgbG93ZXJMaW1pdCBhbmQgdXBwZXJMaW1pdFxuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSB0byBrZWVwIHdpdGhpbiByYW5nZVxuICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IG9mIHJhbmdlXG4gIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXQgb2YgcmFuZ2VcbiAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgYXMgbGltaXRlZCB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiovXG52YXIgcmVzdHJpY3QgPSBleHBvcnRzLnJlc3RyaWN0ID0gZnVuY3Rpb24gKHZhbHVlLCBtaW4sIG1heCkge1xuICByZXR1cm4gTWF0aC5tYXgoTWF0aC5taW4odmFsdWUsIG1heCksIG1pbik7XG59O1xuXG4vKlxuICBGcmFtZXJhdGUtaW5kZXBlbmRlbnQgc21vb3RoaW5nXG5cbiAgQHBhcmFtIFtudW1iZXJdOiBOZXcgdmFsdWVcbiAgQHBhcmFtIFtudW1iZXJdOiBPbGQgdmFsdWVcbiAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvblxuICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogU21vb3RoaW5nICgwIGlzIG5vbmUpXG4qL1xudmFyIHNtb290aCA9IGV4cG9ydHMuc21vb3RoID0gZnVuY3Rpb24gKG5ld1ZhbHVlLCBvbGRWYWx1ZSwgZHVyYXRpb24pIHtcbiAgdmFyIHNtb290aGluZyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMyB8fCBhcmd1bWVudHNbM10gPT09IHVuZGVmaW5lZCA/IDAgOiBhcmd1bWVudHNbM107XG4gIHJldHVybiAoMCwgX3V0aWxzLnRvRGVjaW1hbCkob2xkVmFsdWUgKyBkdXJhdGlvbiAqIChuZXdWYWx1ZSAtIG9sZFZhbHVlKSAvIE1hdGgubWF4KHNtb290aGluZywgZHVyYXRpb24pKTtcbn07XG5cbi8qXG4gIENvbnZlcnQgeCBwZXIgc2Vjb25kIHRvIHBlciBmcmFtZSB2ZWxvY2l0eSBiYXNlZCBvbiBmcHNcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogVW5pdCBwZXIgc2Vjb25kXG4gIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb24gaW4gbXNcbiovXG52YXIgc3BlZWRQZXJGcmFtZSA9IGV4cG9ydHMuc3BlZWRQZXJGcmFtZSA9IGZ1bmN0aW9uICh4cHMsIGZyYW1lRHVyYXRpb24pIHtcbiAgcmV0dXJuICgwLCBfdXRpbHMuaXNOdW0pKHhwcykgPyB4cHMgLyAoMTAwMCAvIGZyYW1lRHVyYXRpb24pIDogMDtcbn07XG5cbi8qXG4gIENvbnZlcnQgdmVsb2NpdHkgaW50byB2ZWxpY2l0eSBwZXIgc2Vjb25kXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFVuaXQgcGVyIGZyYW1lXG4gIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb24gaW4gbXNcbiovXG52YXIgc3BlZWRQZXJTZWNvbmQgPSBleHBvcnRzLnNwZWVkUGVyU2Vjb25kID0gZnVuY3Rpb24gKHZlbG9jaXR5LCBmcmFtZUR1cmF0aW9uKSB7XG4gIHJldHVybiB2ZWxvY2l0eSAqICgxMDAwIC8gZnJhbWVEdXJhdGlvbik7XG59O1xuXG4vKlxuICBDcmVhdGUgc3RlcHBlZCB2ZXJzaW9uIG9mIDAtMSBwcm9ncmVzc1xuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gIEBwYXJhbSBbaW50XTogTnVtYmVyIG9mIHN0ZXBzXG4gIEByZXR1cm4gW251bWJlcl06IFN0ZXBwZWQgdmFsdWVcbiovXG52YXIgc3RlcFByb2dyZXNzID0gZXhwb3J0cy5zdGVwUHJvZ3Jlc3MgPSBmdW5jdGlvbiAocHJvZ3Jlc3MsIHN0ZXBzKSB7XG4gIHZhciBzZWdtZW50ID0gMSAvIChzdGVwcyAtIDEpO1xuICB2YXIgdGFyZ2V0ID0gMSAtIDEgLyBzdGVwcztcbiAgdmFyIHByb2dyZXNzT2ZUYXJnZXQgPSBNYXRoLm1pbihwcm9ncmVzcyAvIHRhcmdldCwgMSk7XG5cbiAgcmV0dXJuIE1hdGguZmxvb3IocHJvZ3Jlc3NPZlRhcmdldCAvIHNlZ21lbnQpICogc2VnbWVudDtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12WTJGc1l5NXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3p0QlFVRkJPenRCUVU5QkxFbEJRVTBzWVVGQllUdEJRVU5xUWl4TFFVRkhMRU5CUVVnN1FVRkRRU3hMUVVGSExFTkJRVWc3UVVGRFFTeExRVUZITEVOQlFVZzdRMEZJU1RzN1FVRk5UaXhKUVVGTkxHRkJRV0VzVlVGQlF5eERRVUZFTEVWQlFVa3NRMEZCU2p0VFFVRlZMRXRCUVVzc1IwRkJUQ3hEUVVGVExFbEJRVWtzUTBGQlNqdERRVUZ1UWpzN096czdPenM3T3pzN08wRkJXVm9zU1VGQlRTeDNRa0ZCVVN4VlFVRkRMRU5CUVVRN1RVRkJTU3d3UkVGQlNUdFRRVUZsTEdsQ1FVRnBRaXhMUVVGTExFdEJRVXdzUTBGQlZ5eEZRVUZGTEVOQlFVWXNSMEZCVFN4RlFVRkZMRU5CUVVZc1JVRkJTeXhGUVVGRkxFTkJRVVlzUjBGQlRTeEZRVUZGTEVOQlFVWXNRMEZCTjBNN1EwRkJka0k3T3pzN096czdPMEZCVVdRc1NVRkJUU3c0UTBGQmJVSXNWVUZCUXl4UFFVRkVPMU5CUVdFc1ZVRkJWU3hMUVVGTExFVkJRVXdzUjBGQlZTeEhRVUZ3UWp0RFFVRmlPenM3T3pzN096czdPenM3T3pzN096czdPenRCUVc5Q2VrSXNTVUZCVFN3d1FrRkJVeXhWUVVGRExFTkJRVVFzUlVGQlNTeERRVUZLTEVWQlFVOHNVVUZCVUR0VFFVRnZRaXhKUVVGTExFTkJRVU1zU1VGQlNTeERRVUZLTEVOQlFVUXNSMEZCVlN4UlFVRldPME5CUVhwQ096czdPenM3T3pzN096dEJRVmRtTEVsQlFVMHNPRUpCUVZjc1ZVRkJReXhEUVVGRUxFVkJRWFZDTzAxQlFXNUNMREJFUVVGSkxEQkNRVUZsT3pzN1FVRkZOME1zVFVGQlNTeHJRa0ZCVFN4RFFVRk9MRU5CUVVvc1JVRkJZenRCUVVOYUxGZEJRVThzVjBGQlZ5eERRVUZZTEVWQlFXTXNRMEZCWkN4RFFVRlFPenM3UVVGRVdTeEhRVUZrTEUxQlNVODdRVUZEVEN4VlFVRk5MRk5CUVZNc1YwRkJWeXhGUVVGRkxFTkJRVVlzUlVGQlN5eEZRVUZGTEVOQlFVWXNRMEZCZWtJc1EwRkVSRHRCUVVWTUxGVkJRVTBzVTBGQlV5eFhRVUZYTEVWQlFVVXNRMEZCUml4RlFVRkxMRVZCUVVVc1EwRkJSaXhEUVVGNlFpeERRVVpFTzBGQlIwd3NWVUZCVFN4VFFVRlRMR2xDUVVGRExFTkJRVTBzUlVGQlJTeERRVUZHTEVOQlFWQXNSMEZCWlN4WFFVRlhMRVZCUVVVc1EwRkJSaXhGUVVGTExFVkJRVVVzUTBGQlJpeERRVUV2UWl4SFFVRnpReXhEUVVGMFF5eERRVWhXT3p0QlFVdE1MR0ZCUVU4c1MwRkJTeXhKUVVGTUxFTkJRVlVzVTBGQlF5eFJRVUZWTEVWQlFWZ3NXVUZCYVVJc1VVRkJWU3hGUVVFelFpeFpRVUZwUXl4UlFVRlZMRVZCUVRORExFTkJRV3BDTEVOQlRFczdTMEZLVUR0RFFVWnpRanM3T3pzN096czdPenM3T3p0QlFUQkNha0lzU1VGQlRTeHpSRUZCZFVJc1ZVRkJReXhSUVVGRUxFVkJRVmNzU1VGQldDeEZRVUZwUWl4RlFVRnFRanRUUVVGM1FpeERRVUZITEZGQlFVWXNSMEZCWVN4SlFVRmlMRWRCUVhOQ0xGZEJRVmNzUlVGQldDeEhRVUZwUWl4SlFVRjRRenREUVVGNFFqczdPenM3T3pzN096czdPenM3UVVGak4wSXNTVUZCVFN4elJFRkJkVUlzVlVGQlF5eExRVUZFTEVWQlFWRXNTVUZCVWl4RlFVRmpMRVZCUVdRN1UwRkJjVUlzUTBGQlF5eFJRVUZSTEVsQlFWSXNRMEZCUkN4SlFVRnJRaXhMUVVGTExFbEJRVXdzUTBGQmJFSTdRMEZCY2tJN096czdPenM3T3pzN1FVRlZOMElzU1VGQlRTeG5SVUZCTkVJc1ZVRkJReXhOUVVGRUxFVkJRVk1zUzBGQlZDeEZRVUZuUWl4UlFVRm9RaXhGUVVFMlFqdEJRVU53UlN4VlFVRlJMR2xDUVVGcFFpeExRVUZxUWl4RFFVRlNMRU5CUkc5Rk96dEJRVWR3UlN4VFFVRlBPMEZCUTB3c1QwRkJSeXhYUVVGWExFdEJRVXNzUjBGQlRDeERRVUZUTEV0QlFWUXNRMEZCV0N4SFFVRTJRaXhQUVVGUExFTkJRVkE3UVVGRGFFTXNUMEZCUnl4WFFVRlhMRXRCUVVzc1IwRkJUQ3hEUVVGVExFdEJRVlFzUTBGQldDeEhRVUUyUWl4UFFVRlBMRU5CUVZBN1IwRkdiRU1zUTBGSWIwVTdRMEZCTjBJN096czdPenM3TzBGQlpXeERMRWxCUVUwc09FTkJRVzFDTEZWQlFVTXNUMEZCUkR0VFFVRmhMRlZCUVZVc1IwRkJWaXhIUVVGblFpeExRVUZMTEVWQlFVdzdRMEZCTjBJN096czdPenM3T3p0QlFWTjZRaXhKUVVGTkxEQkNRVUZUTzAxQlFVTXNORVJCUVUwN1RVRkJSeXcwUkVGQlRUdFRRVUZOTEV0QlFVc3NUVUZCVEN4TlFVRnBRaXhOUVVGTkxFZEJRVTRzUTBGQmFrSXNSMEZCT0VJc1IwRkJPVUk3UTBGQmRFSTdPenM3T3pzN096czdPenRCUVZsbUxFbEJRVTBzZDBOQlFXZENMRlZCUVVNc1QwRkJSQ3hGUVVGVkxGRkJRVllzUlVGQmRVSTdRVUZEYkVRc1RVRkJTU3hYUVVGWExFOUJRVmdzUTBGRU9FTTdRVUZGYkVRc1RVRkJUU3hYUVVGWExGTkJRVk1zUzBGQlZDeERRVUZsTEVkQlFXWXNRMEZCV0N4RFFVWTBRenRCUVVkc1JDeE5RVUZOTEZkQlFWY3NVMEZCVXl4RFFVRlVMRU5CUVZnc1EwRklORU03T3pCQ1FVazFRaXcyUWtGQmFVSXNVMEZCVXl4RFFVRlVMRU5CUVdwQ0xFVkJTalJDT3p0TlFVazFReXc0UWtGS05FTTdUVUZKZEVNc1owTkJTbk5ET3pzN1FVRk5iRVFzVlVGQlVTeFhRVUZYTEV0QlFWZ3NRMEZCVWl4RFFVNXJSRHM3UVVGUmJFUXNWVUZCVVN4UlFVRlNPMEZCUTBFc1UwRkJTeXhIUVVGTU8wRkJRMFVzYTBKQlFWa3NTMEZCV2l4RFFVUkdPMEZCUlVVc1dVRkdSanRCUVVSQkxGTkJTVXNzUjBGQlREdEJRVU5GTEd0Q1FVRlpMRXRCUVZvc1EwRkVSanRCUVVWRkxGbEJSa1k3UVVGS1FTeFRRVTlMTEVkQlFVdzdRVUZEUlN4clFrRkJXU3hMUVVGYUxFTkJSRVk3UVVGRlJTeFpRVVpHTzBGQlVFRXNVMEZWU3l4SFFVRk1PMEZCUTBVc2EwSkJRVmtzUzBGQldpeERRVVJHTzBGQlJVVXNXVUZHUmp0QlFWWkJMRWRCVW10RU96dEJRWFZDYkVRc1RVRkJTU3hKUVVGS0xFVkJRVlU3UVVGRFVpeG5Ra0ZCV1N4SlFVRmFMRU5CUkZFN1IwRkJWanM3UVVGSlFTeFRRVUZQTEZGQlFWQXNRMEV6UW10RU8wTkJRWFpDT3pzN096czdPenM3T3pzN1FVRjNRM1JDTEVsQlFVMHNPRUpCUVZjc1ZVRkJReXhMUVVGRUxFVkJRVkVzUjBGQlVpeEZRVUZoTEVkQlFXSTdVMEZCY1VJc1MwRkJTeXhIUVVGTUxFTkJRVk1zUzBGQlN5eEhRVUZNTEVOQlFWTXNTMEZCVkN4RlFVRm5RaXhIUVVGb1FpeERRVUZVTEVWQlFTdENMRWRCUVM5Q08wTkJRWEpDT3pzN096czdPenM3TzBGQlZXcENMRWxCUVUwc01FSkJRVk1zVlVGQlF5eFJRVUZFTEVWQlFWY3NVVUZCV0N4RlFVRnhRaXhSUVVGeVFqdE5RVUVyUWl4clJVRkJXVHRUUVVGTkxITkNRVUZWTEZkQlFWa3NXVUZCV1N4WFFVRlhMRkZCUVZnc1EwRkJXaXhIUVVGdFF5eExRVUZMTEVkQlFVd3NRMEZCVXl4VFFVRlVMRVZCUVc5Q0xGRkJRWEJDTEVOQlFXNURPME5CUVhaRk96czdPenM3T3p0QlFWRm1MRWxCUVUwc2QwTkJRV2RDTEZWQlFVTXNSMEZCUkN4RlFVRk5MR0ZCUVU0N1UwRkJkMElzYVVKQlFVTXNRMEZCVFN4SFFVRk9MRU5CUVVRc1IwRkJaU3hQUVVGUExFOUJRVThzWVVGQlVDeERRVUZRTEVkQlFTdENMRU5CUVRsRE8wTkJRWGhDT3pzN096czdPenRCUVZGMFFpeEpRVUZOTERCRFFVRnBRaXhWUVVGRExGRkJRVVFzUlVGQlZ5eGhRVUZZTzFOQlFUWkNMRmxCUVZrc1QwRkJUeXhoUVVGUUxFTkJRVm83UTBGQk4wSTdPenM3T3pzN096dEJRVk4yUWl4SlFVRk5MSE5EUVVGbExGVkJRVU1zVVVGQlJDeEZRVUZYTEV0QlFWZ3NSVUZCY1VJN1FVRkRMME1zVFVGQlRTeFZRVUZWTEV0QlFVc3NVVUZCVVN4RFFVRlNMRU5CUVV3c1EwRkVLMEk3UVVGRkwwTXNUVUZCVFN4VFFVRlRMRWxCUVVzc1NVRkJTU3hMUVVGS0xFTkJSakpDTzBGQlJ5OURMRTFCUVUwc2JVSkJRVzFDTEV0QlFVc3NSMEZCVEN4RFFVRlRMRmRCUVZjc1RVRkJXQ3hGUVVGdFFpeERRVUUxUWl4RFFVRnVRaXhEUVVoNVF6czdRVUZMTDBNc1UwRkJUeXhMUVVGTExFdEJRVXdzUTBGQlZ5eHRRa0ZCYlVJc1QwRkJia0lzUTBGQldDeEhRVUY1UXl4UFFVRjZReXhEUVV4M1F6dERRVUZ5UWlJc0ltWnBiR1VpT2lKallXeGpMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwTDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3WEc0Z0lHaGhjMUJ5YjNCbGNuUjVMRnh1SUNCcGMwNTFiU3hjYmlBZ1ptbHVaRlpoYkhWbFFXNWtWVzVwZEN4Y2JpQWdkRzlFWldOcGJXRnNYRzU5SUdaeWIyMGdKeTR2ZFhScGJITW5PMXh1WEc1amIyNXpkQ0JhUlZKUFgxQlBTVTVVSUQwZ2UxeHVJQ0I0T2lBd0xGeHVJQ0I1T2lBd0xGeHVJQ0I2T2lBd1hHNTlPMXh1WEc1amIyNXpkQ0JrYVhOMFlXNWpaVEZFSUQwZ0tHRXNJR0lwSUQwK0lFMWhkR2d1WVdKektHRWdMU0JpS1R0Y2JseHVMeXBjYmlBZ1FXNW5iR1VnWW1WMGQyVmxiaUJ3YjJsdWRITmNiaUFnWEc0Z0lGUnlZVzV6YkdGMFpYTWdkR2hsSUdoNWNHOTBhR1YwYVdOaGJDQnNhVzVsSUhOdklIUm9ZWFFnZEdobElDZG1jbTl0SnlCamIyOXlaR2x1WVhSbGMxeHVJQ0JoY21VZ1lYUWdNQ3d3WEc0Z0lGeHVJQ0JBY0dGeVlXMGdXMjlpYW1WamRGMDZJRmdnWVc1a0lGa2dZMjl2Y21ScGJtRjBaWE1nYjJZZ1puSnZiU0J3YjJsdWRGeHVJQ0JBY0dGeVlXMGdXMjlpYW1WamRGMDZJRmdnWVc1a0lGa2dZMjl5WkdsdVlYUmxjeUJ2WmlCMGJ5QndiMmx1ZEZ4dUlDQkFjbVYwZFhKdUlGdHlZV1JwWVc1ZE9pQkJibWRzWlNCaVpYUjNaV1Z1SUhSb1pTQjBkMjhnY0c5cGJuUnpJR2x1SUhKaFpHbGhibk5jYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnWVc1bmJHVWdQU0FvWVN3Z1lpQTlJRnBGVWs5ZlVFOUpUbFFwSUQwK0lISmhaR2xoYm5OVWIwUmxaM0psWlhNb1RXRjBhQzVoZEdGdU1paGhMbmdnTFNCaUxuZ3NJR0V1ZVNBdElHSXVlU2twTzF4dVhHNHZLbHh1SUNCRGIyNTJaWEowSUdSbFozSmxaWE1nZEc4Z2NtRmthV0Z1YzF4dUlDQmNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJXWVd4MVpTQnBiaUJrWldkeVpXVnpYRzRnSUVCeVpYUjFjbTRnVzI1MWJXSmxjbDA2SUZaaGJIVmxJR2x1SUhKaFpHbGhibk5jYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnWkdWbmNtVmxjMVJ2VW1Ga2FXRnVjeUE5SUNoa1pXZHlaV1Z6S1NBOVBpQmtaV2R5WldWeklDb2dUV0YwYUM1UVNTQXZJREU0TUR0Y2JseHVMeXBjYmlBZ1JHbHNZWFJsWEc0Z0lGeHVJQ0JEYUdGdVoyVWdkR2hsSUhCeWIyZHlaWE56YVc5dUlHSmxkSGRsWlc0Z1lTQmhibVFnWWlCaFkyTnZjbVJwYm1jZ2RHOGdaR2xzWVhScGIyNHVYRzRnSUZ4dUlDQlRieUJrYVd4aGRHbHZiaUE5SURBdU5TQjNiM1ZzWkNCamFHRnVaMlZjYmlBZ1hHNGdJR0VnTFMwdExTMHRMUzB0SUdKY2JpQWdYRzRnSUhSdlhHNGdJRnh1SUNCaElDMHRMUzBnWWx4dUlDQmNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJRY21WMmFXOTFjeUIyWVd4MVpWeHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRU4xY25KbGJuUWdkbUZzZFdWY2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQkVhV3hoZEdVZ2NISnZaM0psYzNNZ1lua2dlRnh1SUNCQWNtVjBkWEp1SUZ0dWRXMWlaWEpkT2lCUWNtVjJhVzkxY3lCMllXeDFaU0J3YkhWeklIUm9aU0JrYVd4aGRHVmtJR1JwWm1abGNtVnVZMlZjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnWkdsc1lYUmxJRDBnS0dFc0lHSXNJR1JwYkdGMGFXOXVLU0E5UGlCaElDc2dLQ2hpSUMwZ1lTa2dLaUJrYVd4aGRHbHZiaWs3WEc1Y2JpOHFYRzRnSUVScGMzUmhibU5sWEc0Z0lGeHVJQ0JTWlhSMWNtNXpJSFJvWlNCa2FYTjBZVzVqWlNCaVpYUjNaV1Z1SUhSM2J5QnVJR1JwYldWdWMybHZibUZzSUhCdmFXNTBjeTVjYmlBZ1hHNGdJRUJ3WVhKaGJTQmJiMkpxWldOMEwyNTFiV0psY2wwNklIZ2dZVzVrSUhrZ2IzSWdhblZ6ZENCNElHOW1JSEJ2YVc1MElFRmNiaUFnUUhCaGNtRnRJRnR2WW1wbFkzUXZiblZ0WW1WeVhUb2dLRzl3ZEdsdmJtRnNLVG9nZUNCaGJtUWdlU0J2Y2lCcWRYTjBJSGdnYjJZZ2NHOXBiblFnUWx4dUlDQkFjbVYwZFhKdUlGdHVkVzFpWlhKZE9pQlVhR1VnWkdsemRHRnVZMlVnWW1WMGQyVmxiaUIwYUdVZ2RIZHZJSEJ2YVc1MGMxeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQmthWE4wWVc1alpTQTlJQ2hoTENCaUlEMGdXa1ZTVDE5UVQwbE9WQ2tnUFQ0Z2UxeHVJQ0F2THlBeFJDQmthVzFsYm5OcGIyNXpYRzRnSUdsbUlDaHBjMDUxYlNoaEtTa2dlMXh1SUNBZ0lISmxkSFZ5YmlCa2FYTjBZVzVqWlRGRUtHRXNJR0lwTzF4dVhHNGdJQzh2SUUxMWJIUnBMV1JwYldWdWMybHZibUZzWEc0Z0lIMGdaV3h6WlNCN1hHNGdJQ0FnWTI5dWMzUWdlRVJsYkhSaElEMGdaR2x6ZEdGdVkyVXhSQ2hoTG5nc0lHSXVlQ2s3WEc0Z0lDQWdZMjl1YzNRZ2VVUmxiSFJoSUQwZ1pHbHpkR0Z1WTJVeFJDaGhMbmtzSUdJdWVTazdYRzRnSUNBZ1kyOXVjM1FnZWtSbGJIUmhJRDBnS0dselRuVnRLR0V1ZWlrcElEOGdaR2x6ZEdGdVkyVXhSQ2hoTG5vc0lHSXVlaWtnT2lBd08xeHVYRzRnSUNBZ2NtVjBkWEp1SUUxaGRHZ3VjM0Z5ZENnb2VFUmxiSFJoSUNvcUlESXBJQ3NnS0hsRVpXeDBZU0FxS2lBeUtTQXJJQ2g2UkdWc2RHRWdLaW9nTWlrcE8xeHVJQ0I5WEc1OU8xeHVYRzR2S2x4dUlDQldZV3gxWlNCcGJpQnlZVzVuWlNCbWNtOXRJSEJ5YjJkeVpYTnpYRzRnSUZ4dUlDQkhhWFpsYmlCaElHeHZkMlZ5SUd4cGJXbDBJR0Z1WkNCaGJpQjFjSEJsY2lCc2FXMXBkQ3dnZDJVZ2NtVjBkWEp1SUhSb1pTQjJZV3gxWlNCM2FYUm9hVzVjYmlBZ2RHaGhkQ0J5WVc1blpTQmhjeUJsZUhCeVpYTnpaV1FnWW5rZ2NISnZaM0psYzNNZ0tHRWdiblZ0WW1WeUlHWnliMjBnTUMweEtWeHVJQ0JjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCVWFHVWdjSEp2WjNKbGMzTWdZbVYwZDJWbGJpQnNiM2RsY2lCaGJtUWdkWEJ3WlhJZ2JHbHRhWFJ6SUdWNGNISmxjM05sWkNBd0xURmNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJNYjNkbGNpQnNhVzFwZENCdlppQnlZVzVuWlZ4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklGVndjR1Z5SUd4cGJXbDBJRzltSUhKaGJtZGxYRzRnSUVCeVpYUjFjbTRnVzI1MWJXSmxjbDA2SUZaaGJIVmxJR0Z6SUdOaGJHTjFiR0YwWldRZ1puSnZiU0J3Y205bmNtVnpjeUIzYVhSb2FXNGdjbUZ1WjJVZ0tHNXZkQ0JzYVcxcGRHVmtJSGRwZEdocGJpQnlZVzVuWlNsY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ1oyVjBWbUZzZFdWR2NtOXRVSEp2WjNKbGMzTWdQU0FvY0hKdlozSmxjM01zSUdaeWIyMHNJSFJ2S1NBOVBpQW9MU0J3Y205bmNtVnpjeUFxSUdaeWIyMHBJQ3NnS0hCeWIyZHlaWE56SUNvZ2RHOHBJQ3NnWm5KdmJUdGNibHh1THlwY2JpQWdVSEp2WjNKbGMzTWdkMmwwYUdsdUlHZHBkbVZ1SUhKaGJtZGxYRzRnSUZ4dUlDQkhhWFpsYmlCaElHeHZkMlZ5SUd4cGJXbDBJR0Z1WkNCaGJpQjFjSEJsY2lCc2FXMXBkQ3dnZDJVZ2NtVjBkWEp1SUhSb1pTQndjbTluY21WemMxeHVJQ0FvWlhod2NtVnpjMlZrSUdGeklHRWdiblZ0WW1WeUlEQXRNU2tnY21Wd2NtVnpaVzUwWldRZ1lua2dkR2hsSUdkcGRtVnVJSFpoYkhWbExDQmhibVJjYmlBZ2JHbHRhWFFnZEdoaGRDQndjbTluY21WemN5QjBieUIzYVhSb2FXNGdNQzB4TGx4dUlDQmNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJXWVd4MVpTQjBieUJtYVc1a0lIQnliMmR5WlhOeklIZHBkR2hwYmlCbmFYWmxiaUJ5WVc1blpWeHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRXh2ZDJWeUlHeHBiV2wwSUZ4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklGVndjR1Z5SUd4cGJXbDBYRzRnSUVCeVpYUjFjbTRnVzI1MWJXSmxjbDA2SUZCeWIyZHlaWE56SUc5bUlIWmhiSFZsSUhkcGRHaHBiaUJ5WVc1blpTQmhjeUJsZUhCeVpYTnpaV1FnTUMweFhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHZGxkRkJ5YjJkeVpYTnpSbkp2YlZaaGJIVmxJRDBnS0haaGJIVmxMQ0JtY205dExDQjBieWtnUFQ0Z0tIWmhiSFZsSUMwZ1puSnZiU2tnTHlBb2RHOGdMU0JtY205dEtUdGNibHh1THlwY2JpQWdVRzlwYm5RZ1puSnZiU0JoYm1kc1pTQmhibVFnWkdsemRHRnVZMlZjYmlBZ1hHNGdJRUJ3WVhKaGJTQmJiMkpxWldOMFhUb2dNa1FnY0c5cGJuUWdiMllnYjNKcFoybHVYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nUVc1bmJHVWdabkp2YlNCdmNtbG5hVzVjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCRWFYTjBZVzVqWlNCbWNtOXRJRzl5YVdkcGJseHVJQ0JBY21WMGRYSnVJRnR2WW1wbFkzUmRPaUJEWVd4amRXeGhkR1ZrSURKRUlIQnZhVzUwWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUhCdmFXNTBSbkp2YlVGdVoyeGxRVzVrUkdsemRHRnVZMlVnUFNBb2IzSnBaMmx1TENCaGJtZHNaU3dnWkdsemRHRnVZMlVwSUQwK0lIdGNiaUFnWVc1bmJHVWdQU0JrWldkeVpXVnpWRzlTWVdScFlXNXpLR0Z1WjJ4bEtUdGNibHh1SUNCeVpYUjFjbTRnZTF4dUlDQWdJSGc2SUdScGMzUmhibU5sSUNvZ1RXRjBhQzVqYjNNb1lXNW5iR1VwSUNzZ2IzSnBaMmx1TG5nc1hHNGdJQ0FnZVRvZ1pHbHpkR0Z1WTJVZ0tpQk5ZWFJvTG5OcGJpaGhibWRzWlNrZ0t5QnZjbWxuYVc0dWVWeHVJQ0I5TzF4dWZUdGNibHh1THlwY2JpQWdRMjl1ZG1WeWRDQnlZV1JwWVc1eklIUnZJR1JsWjNKbFpYTmNiaUFnWEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1ZtRnNkV1VnYVc0Z2NtRmthV0Z1YzF4dUlDQkFjbVYwZFhKdUlGdHVkVzFpWlhKZE9pQldZV3gxWlNCcGJpQmtaV2R5WldWelhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElISmhaR2xoYm5OVWIwUmxaM0psWlhNZ1BTQW9jbUZrYVdGdWN5a2dQVDRnY21Ga2FXRnVjeUFxSURFNE1DQXZJRTFoZEdndVVFazdYRzVjYmk4cVhHNGdJRkpsZEhWeWJpQnlZVzVrYjIwZ2JuVnRZbVZ5SUdKbGRIZGxaVzRnY21GdVoyVmNiaUFnWEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFNBb2IzQjBhVzl1WVd3cE9pQlBkWFJ3ZFhRZ2JXbHVhVzExYlZ4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwZ0tHOXdkR2x2Ym1Gc0tUb2dUM1YwY0hWMElHMWhlR2x0ZFcxY2JpQWdRSEpsZEhWeWJpQmJiblZ0WW1WeVhUb2dVbUZ1Wkc5dElHNTFiV0psY2lCM2FYUm9hVzRnY21GdVoyVXNJRzl5SURBZ1lXNWtJREVnYVdZZ2JtOXVaU0J3Y205MmFXUmxaRnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0J5WVc1a2IyMGdQU0FvYldsdUlEMGdNQ3dnYldGNElEMGdNU2tnUFQ0Z1RXRjBhQzV5WVc1a2IyMG9LU0FxSUNodFlYZ2dMU0J0YVc0cElDc2diV2x1TzF4dVhHNHZLbHh1SUNCRFlXeGpkV3hoZEdVZ2NtVnNZWFJwZG1VZ2RtRnNkV1ZjYmlBZ1hHNGdJRlJoYTJWeklIUm9aU0J2Y0dWeVlYUnZjaUJoYm1RZ2RtRnNkV1VnWm5KdmJTQmhJSE4wY21sdVp5d2dhV1VnWENJclBUVmNJaXdnWVc1a0lHRndjR3hwWlhOY2JpQWdkRzhnZEdobElHTjFjbkpsYm5RZ2RtRnNkV1VnZEc4Z2NtVnpiMngyWlNCaElHNWxkeUIwWVhKblpYUXVYRzRnSUZ4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklFTjFjbkpsYm5RZ2RtRnNkV1ZjYmlBZ1FIQmhjbUZ0SUZ0emRISnBibWRkT2lCU1pXeGhkR2wyWlNCMllXeDFaVnh1SUNCQWNtVjBkWEp1SUZ0dWRXMWlaWEpkT2lCT1pYY2dkbUZzZFdWY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2NtVnNZWFJwZG1WV1lXeDFaU0E5SUNoamRYSnlaVzUwTENCeVpXeGhkR2wyWlNrZ1BUNGdlMXh1SUNCc1pYUWdibVYzVm1Gc2RXVWdQU0JqZFhKeVpXNTBPMXh1SUNCamIyNXpkQ0JsY1hWaGRHbHZiaUE5SUhKbGJHRjBhWFpsTG5Od2JHbDBLQ2M5SnlrN1hHNGdJR052Ym5OMElHOXdaWEpoZEc5eUlEMGdaWEYxWVhScGIyNWJNRjA3WEc0Z0lHeGxkQ0I3SUhWdWFYUXNJSFpoYkhWbElIMGdQU0JtYVc1a1ZtRnNkV1ZCYm1SVmJtbDBLR1Z4ZFdGMGFXOXVXekZkS1R0Y2JseHVJQ0IyWVd4MVpTQTlJSEJoY25ObFJteHZZWFFvZG1Gc2RXVXBPMXh1WEc0Z0lITjNhWFJqYUNBb2IzQmxjbUYwYjNJcElIdGNiaUFnWTJGelpTQW5LeWM2WEc0Z0lDQWdibVYzVm1Gc2RXVWdLejBnZG1Gc2RXVTdYRzRnSUNBZ1luSmxZV3M3WEc0Z0lHTmhjMlVnSnkwbk9seHVJQ0FnSUc1bGQxWmhiSFZsSUMwOUlIWmhiSFZsTzF4dUlDQWdJR0p5WldGck8xeHVJQ0JqWVhObElDY3FKenBjYmlBZ0lDQnVaWGRXWVd4MVpTQXFQU0IyWVd4MVpUdGNiaUFnSUNCaWNtVmhhenRjYmlBZ1kyRnpaU0FuTHljNlhHNGdJQ0FnYm1WM1ZtRnNkV1VnTHowZ2RtRnNkV1U3WEc0Z0lDQWdZbkpsWVdzN1hHNGdJSDFjYmlBZ1hHNGdJR2xtSUNoMWJtbDBLU0I3WEc0Z0lDQWdibVYzVm1Gc2RXVWdLejBnZFc1cGREdGNiaUFnZlZ4dVhHNGdJSEpsZEhWeWJpQnVaWGRXWVd4MVpUdGNibjA3WEc1Y2JpOHFYRzRnSUZKbGMzUnlhV04wSUhaaGJIVmxJSFJ2SUhKaGJtZGxYRzRnSUZ4dUlDQlNaWFIxY200Z2RtRnNkV1VnZDJsMGFHbHVJSFJvWlNCeVlXNW5aU0J2WmlCc2IzZGxja3hwYldsMElHRnVaQ0IxY0hCbGNreHBiV2wwWEc0Z0lGeHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRlpoYkhWbElIUnZJR3RsWlhBZ2QybDBhR2x1SUhKaGJtZGxYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVEc5M1pYSWdiR2x0YVhRZ2IyWWdjbUZ1WjJWY2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQlZjSEJsY2lCc2FXMXBkQ0J2WmlCeVlXNW5aVnh1SUNCQWNtVjBkWEp1SUZ0dWRXMWlaWEpkT2lCV1lXeDFaU0JoY3lCc2FXMXBkR1ZrSUhkcGRHaHBiaUJuYVhabGJpQnlZVzVuWlZ4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCeVpYTjBjbWxqZENBOUlDaDJZV3gxWlN3Z2JXbHVMQ0J0WVhncElEMCtJRTFoZEdndWJXRjRLRTFoZEdndWJXbHVLSFpoYkhWbExDQnRZWGdwTENCdGFXNHBPMXh1WEc0dktseHVJQ0JHY21GdFpYSmhkR1V0YVc1a1pYQmxibVJsYm5RZ2MyMXZiM1JvYVc1blhHNWNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJPWlhjZ2RtRnNkV1ZjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCUGJHUWdkbUZzZFdWY2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQkdjbUZ0WlNCa2RYSmhkR2x2Ymx4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwZ0tHOXdkR2x2Ym1Gc0tUb2dVMjF2YjNSb2FXNW5JQ2d3SUdseklHNXZibVVwWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUhOdGIyOTBhQ0E5SUNodVpYZFdZV3gxWlN3Z2IyeGtWbUZzZFdVc0lHUjFjbUYwYVc5dUxDQnpiVzl2ZEdocGJtY2dQU0F3S1NBOVBpQjBiMFJsWTJsdFlXd29iMnhrVm1Gc2RXVWdLeUFvWkhWeVlYUnBiMjRnS2lBb2JtVjNWbUZzZFdVZ0xTQnZiR1JXWVd4MVpTa2dMeUJOWVhSb0xtMWhlQ2h6Ylc5dmRHaHBibWNzSUdSMWNtRjBhVzl1S1NrcE8xeHVYRzR2S2x4dUlDQkRiMjUyWlhKMElIZ2djR1Z5SUhObFkyOXVaQ0IwYnlCd1pYSWdabkpoYldVZ2RtVnNiMk5wZEhrZ1ltRnpaV1FnYjI0Z1puQnpYRzRnSUZ4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklGVnVhWFFnY0dWeUlITmxZMjl1WkZ4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklFWnlZVzFsSUdSMWNtRjBhVzl1SUdsdUlHMXpYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJSE53WldWa1VHVnlSbkpoYldVZ1BTQW9lSEJ6TENCbWNtRnRaVVIxY21GMGFXOXVLU0E5UGlBb2FYTk9kVzBvZUhCektTa2dQeUI0Y0hNZ0x5QW9NVEF3TUNBdklHWnlZVzFsUkhWeVlYUnBiMjRwSURvZ01EdGNibHh1THlwY2JpQWdRMjl1ZG1WeWRDQjJaV3h2WTJsMGVTQnBiblJ2SUhabGJHbGphWFI1SUhCbGNpQnpaV052Ym1SY2JpQWdYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVlc1cGRDQndaWElnWm5KaGJXVmNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJHY21GdFpTQmtkWEpoZEdsdmJpQnBiaUJ0YzF4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCemNHVmxaRkJsY2xObFkyOXVaQ0E5SUNoMlpXeHZZMmwwZVN3Z1puSmhiV1ZFZFhKaGRHbHZiaWtnUFQ0Z2RtVnNiMk5wZEhrZ0tpQW9NVEF3TUNBdklHWnlZVzFsUkhWeVlYUnBiMjRwTzF4dVhHNHZLbHh1SUNCRGNtVmhkR1VnYzNSbGNIQmxaQ0IyWlhKemFXOXVJRzltSURBdE1TQndjbTluY21WemMxeHVJQ0JjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCRGRYSnlaVzUwSUhaaGJIVmxYRzRnSUVCd1lYSmhiU0JiYVc1MFhUb2dUblZ0WW1WeUlHOW1JSE4wWlhCelhHNGdJRUJ5WlhSMWNtNGdXMjUxYldKbGNsMDZJRk4wWlhCd1pXUWdkbUZzZFdWY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2MzUmxjRkJ5YjJkeVpYTnpJRDBnS0hCeWIyZHlaWE56TENCemRHVndjeWtnUFQ0Z2UxeHVJQ0JqYjI1emRDQnpaV2R0Wlc1MElEMGdNU0F2SUNoemRHVndjeUF0SURFcE8xeHVJQ0JqYjI1emRDQjBZWEpuWlhRZ1BTQXhJQzBnS0RFZ0x5QnpkR1Z3Y3lrN1hHNGdJR052Ym5OMElIQnliMmR5WlhOelQyWlVZWEpuWlhRZ1BTQk5ZWFJvTG0xcGJpaHdjbTluY21WemN5QXZJSFJoY21kbGRDd2dNU2s3WEc1Y2JpQWdjbVYwZFhKdUlFMWhkR2d1Wm14dmIzSW9jSEp2WjNKbGMzTlBabFJoY21kbGRDQXZJSE5sWjIxbGJuUXBJQ29nYzJWbmJXVnVkRHRjYm4wN0lsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy9jYWxjLmpzXG4gKiogbW9kdWxlIGlkID0gMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8qXG4gIERldGVjdCBhbmQgbG9hZCBhbiBhcHByb3ByaWF0ZSBjbG9jayBzZXR0aW5nIGZvciB0aGUgZW52aXJvbm1lbnRcbiovXG52YXIgaGFzUkFGID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA/IHRydWUgOiBmYWxzZTtcblxudmFyIG9uTmV4dEZyYW1lID0gdm9pZCAwO1xuXG5pZiAoaGFzUkFGKSB7XG4gIG9uTmV4dEZyYW1lID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spO1xuICB9O1xufSBlbHNlIHtcbiAgKGZ1bmN0aW9uICgpIHtcbiAgICAvKlxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHBvbHlmaWxsXG4gICAgICBcbiAgICAgIEZvciBJRTgvOSBGbGluc3RvbmVzIGFuZCBub24tYnJvd3NlciBlbnZpcm9ubWVudHNcbiAgICAgICBUYWtlbiBmcm9tIFBhdWwgSXJpc2guIFdlJ3ZlIHN0cmlwcGVkIG91dCBjYW5jZWxBbmltYXRpb25GcmFtZSBjaGVja3MgYmVjYXVzZSB3ZSBkb24ndCBmb3ggd2l0aCB0aGF0XG4gICAgICBcbiAgICAgIGh0dHA6Ly9wYXVsaXJpc2guY29tLzIwMTEvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1hbmltYXRpbmcvXG4gICAgICBodHRwOi8vbXkub3BlcmEuY29tL2Vtb2xsZXIvYmxvZy8yMDExLzEyLzIwL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtZXItYW5pbWF0aW5nXG4gICAgICAgXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGwgYnkgRXJpayBNw7ZsbGVyLiBmaXhlcyBmcm9tIFBhdWwgSXJpc2ggYW5kIFRpbm8gWmlqZGVsXG4gICAgICAgXG4gICAgICBNSVQgbGljZW5zZVxuICAgICovXG4gICAgdmFyIGxhc3RUaW1lID0gMDtcblxuICAgIG9uTmV4dEZyYW1lID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICB2YXIgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgIHZhciB0aW1lVG9DYWxsID0gTWF0aC5tYXgoMCwgMTYuNyAtIChjdXJyZW50VGltZSAtIGxhc3RUaW1lKSk7XG5cbiAgICAgIGxhc3RUaW1lID0gY3VycmVudFRpbWUgKyB0aW1lVG9DYWxsO1xuXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGxhc3RUaW1lKTtcbiAgICAgIH0sIHRpbWVUb0NhbGwpO1xuICAgIH07XG4gIH0pKCk7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IG9uTmV4dEZyYW1lO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTltY21GdFpYTjVibU12YjI0dGJtVjRkQzFtY21GdFpTNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN1FVRkhRU3hKUVVGTkxGTkJRVk1zVDBGQlVTeE5RVUZRTEV0QlFXdENMRmRCUVd4Q0xFbEJRV2xETEU5QlFVOHNjVUpCUVZBc1IwRkJaME1zU1VGQmJFVXNSMEZCZVVVc1MwRkJla1U3TzBGQlJXWXNTVUZCU1N4dlFrRkJTanM3UVVGRlFTeEpRVUZKTEUxQlFVb3NSVUZCV1R0QlFVTldMR2RDUVVGakxGVkJRVU1zVVVGQlJEdFhRVUZqTEU5QlFVOHNjVUpCUVZBc1EwRkJOa0lzVVVGQk4wSTdSMEZCWkN4RFFVUktPME5CUVZvc1RVRkhUenM3T3pzN096czdPenM3T3pzN08wRkJaVXdzVVVGQlNTeFhRVUZYTEVOQlFWZzdPMEZCUlVvc2EwSkJRV01zVlVGQlF5eFJRVUZFTEVWQlFXTTdRVUZETVVJc1ZVRkJUU3hqUVVGakxFbEJRVWtzU1VGQlNpeEhRVUZYTEU5QlFWZ3NSVUZCWkN4RFFVUnZRanRCUVVVeFFpeFZRVUZOTEdGQlFXRXNTMEZCU3l4SFFVRk1MRU5CUVZNc1EwRkJWQ3hGUVVGWkxGRkJRVkVzWTBGQll5eFJRVUZrTEVOQlFWSXNRMEZCZWtJc1EwRkdiMEk3TzBGQlNURkNMR2xDUVVGWExHTkJRV01zVlVGQlpDeERRVXBsT3p0QlFVMHhRaXhwUWtGQlZ6dGxRVUZOTEZOQlFWTXNVVUZCVkR0UFFVRk9MRVZCUVRCQ0xGVkJRWEpETEVWQlRqQkNPMHRCUVdRN1QwRnFRbFE3UTBGSVVEczdhMEpCT0VKbElpd2labWxzWlNJNkltOXVMVzVsZUhRdFpuSmhiV1V1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUx5cGNiaUFnUkdWMFpXTjBJR0Z1WkNCc2IyRmtJR0Z1SUdGd2NISnZjSEpwWVhSbElHTnNiMk5ySUhObGRIUnBibWNnWm05eUlIUm9aU0JsYm5acGNtOXViV1Z1ZEZ4dUtpOWNibU52Ym5OMElHaGhjMUpCUmlBOUlDaDBlWEJsYjJZZ2QybHVaRzkzSUNFOVBTQW5kVzVrWldacGJtVmtKeUFtSmlCM2FXNWtiM2N1Y21WeGRXVnpkRUZ1YVcxaGRHbHZia1p5WVcxbEtTQS9JSFJ5ZFdVZ09pQm1ZV3h6WlR0Y2JseHViR1YwSUc5dVRtVjRkRVp5WVcxbE8xeHVYRzVwWmlBb2FHRnpVa0ZHS1NCN1hHNGdJRzl1VG1WNGRFWnlZVzFsSUQwZ0tHTmhiR3hpWVdOcktTQTlQaUIzYVc1a2IzY3VjbVZ4ZFdWemRFRnVhVzFoZEdsdmJrWnlZVzFsS0dOaGJHeGlZV05yS1R0Y2JseHVmU0JsYkhObElIdGNiaUFnTHlwY2JpQWdJQ0J5WlhGMVpYTjBRVzVwYldGMGFXOXVSbkpoYldVZ2NHOXNlV1pwYkd4Y2JpQWdJQ0JjYmlBZ0lDQkdiM0lnU1VVNEx6a2dSbXhwYm5OMGIyNWxjeUJoYm1RZ2JtOXVMV0p5YjNkelpYSWdaVzUyYVhKdmJtMWxiblJ6WEc1Y2JpQWdJQ0JVWVd0bGJpQm1jbTl0SUZCaGRXd2dTWEpwYzJndUlGZGxKM1psSUhOMGNtbHdjR1ZrSUc5MWRDQmpZVzVqWld4QmJtbHRZWFJwYjI1R2NtRnRaU0JqYUdWamEzTWdZbVZqWVhWelpTQjNaU0JrYjI0bmRDQm1iM2dnZDJsMGFDQjBhR0YwWEc0Z0lDQWdYRzRnSUNBZ2FIUjBjRG92TDNCaGRXeHBjbWx6YUM1amIyMHZNakF4TVM5eVpYRjFaWE4wWVc1cGJXRjBhVzl1Wm5KaGJXVXRabTl5TFhOdFlYSjBMV0Z1YVcxaGRHbHVaeTljYmlBZ0lDQm9kSFJ3T2k4dmJYa3ViM0JsY21FdVkyOXRMMlZ0YjJ4c1pYSXZZbXh2Wnk4eU1ERXhMekV5THpJd0wzSmxjWFZsYzNSaGJtbHRZWFJwYjI1bWNtRnRaUzFtYjNJdGMyMWhjblF0WlhJdFlXNXBiV0YwYVc1blhHNGdJQ0FnSUZ4dUlDQWdJSEpsY1hWbGMzUkJibWx0WVhScGIyNUdjbUZ0WlNCd2IyeDVabWxzYkNCaWVTQkZjbWxySUUzRHRteHNaWEl1SUdacGVHVnpJR1p5YjIwZ1VHRjFiQ0JKY21semFDQmhibVFnVkdsdWJ5QmFhV3BrWld4Y2JpQWdJQ0FnWEc0Z0lDQWdUVWxVSUd4cFkyVnVjMlZjYmlBZ0tpOWNiaUFnYkdWMElHeGhjM1JVYVcxbElEMGdNRHRjYmx4dUlDQnZiazVsZUhSR2NtRnRaU0E5SUNoallXeHNZbUZqYXlrZ1BUNGdlMXh1SUNBZ0lHTnZibk4wSUdOMWNuSmxiblJVYVcxbElEMGdibVYzSUVSaGRHVW9LUzVuWlhSVWFXMWxLQ2s3WEc0Z0lDQWdZMjl1YzNRZ2RHbHRaVlJ2UTJGc2JDQTlJRTFoZEdndWJXRjRLREFzSURFMkxqY2dMU0FvWTNWeWNtVnVkRlJwYldVZ0xTQnNZWE4wVkdsdFpTa3BPMXh1WEc0Z0lDQWdiR0Z6ZEZScGJXVWdQU0JqZFhKeVpXNTBWR2x0WlNBcklIUnBiV1ZVYjBOaGJHdzdYRzVjYmlBZ0lDQnpaWFJVYVcxbGIzVjBLQ2dwSUQwK0lHTmhiR3hpWVdOcktHeGhjM1JVYVcxbEtTd2dkR2x0WlZSdlEyRnNiQ2s3WEc0Z0lIMDdYRzU5WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUc5dVRtVjRkRVp5WVcxbE95SmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9mcmFtZXN5bmMvb24tbmV4dC1mcmFtZS5qc1xuICoqIG1vZHVsZSBpZCA9IDExXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZVJlbmRlclN0ZXA7XG5mdW5jdGlvbiBjcmVhdGVSZW5kZXJTdGVwKHN0YXJ0UmVuZGVyTG9vcCkge1xuICAvKipcbiAgICogV2UgdXNlIHR3byBhcnJheXMsIG9uZSBmb3IgdGhpcyBmcmFtZSBhbmQgb25lIHRvIHF1ZXVlIGZvciB0aGVcbiAgICogbmV4dCBmcmFtZSwgcmV1c2luZyBlYWNoIHRvIGF2b2lkIEdDLlxuICAgKiBAdHlwZSB7QXJyYXl9XG4gICAqL1xuICB2YXIgZnVuY3Rpb25zVG9SdW4gPSBbXTtcbiAgdmFyIGZ1bmN0aW9uc1RvUnVuTmV4dEZyYW1lID0gW107XG5cbiAgcmV0dXJuIHtcbiAgICBzY2hlZHVsZTogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICBzdGFydFJlbmRlckxvb3AoKTtcbiAgICAgIC8vIElmIHRoaXMgY2FsbGJhY2sgaXNuJ3QgYWxyZWFkeSBzY2hlZHVsZWQgdG8gcnVuIG5leHQgZnJhbWVcbiAgICAgIGlmIChmdW5jdGlvbnNUb1J1bk5leHRGcmFtZS5pbmRleE9mKGNhbGxiYWNrKSA9PT0gLTEpIHtcbiAgICAgICAgZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUucHVzaChjYWxsYmFjayk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGNhbmNlbDogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICB2YXIgaW5kZXhPZkNhbGxiYWNrID0gZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUuaW5kZXhPZihjYWxsYmFjayk7XG4gICAgICBpZiAoaW5kZXhPZkNhbGxiYWNrICE9PSAtMSkge1xuICAgICAgICBmdW5jdGlvbnNUb1J1bk5leHRGcmFtZS5zcGxpY2UoaW5kZXhPZkNhbGxiYWNrLCAxKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgcHJvY2VzczogZnVuY3Rpb24gKCkge1xuXG4gICAgICAvLyBDbGVhciBuZXh0IGZyYW1lIGxpc3RcbiAgICAgIHZhciBfcmVmID0gW2Z1bmN0aW9uc1RvUnVuTmV4dEZyYW1lLCBmdW5jdGlvbnNUb1J1bl07XG4gICAgICAvLyBTd2FwIHRoaXMgZnJhbWUgYW5kIG5leHQgZnJhbWUgYXJyYXlzIHRvIGF2b2lkIEdDXG5cbiAgICAgIGZ1bmN0aW9uc1RvUnVuID0gX3JlZlswXTtcbiAgICAgIGZ1bmN0aW9uc1RvUnVuTmV4dEZyYW1lID0gX3JlZlsxXTtcbiAgICAgIGZ1bmN0aW9uc1RvUnVuTmV4dEZyYW1lLmxlbmd0aCA9IDA7XG5cbiAgICAgIC8vIEV4ZWN1dGUgYWxsIG9mIHRoaXMgZnJhbWUncyBmdW5jdGlvbnNcbiAgICAgIHZhciBudW1UaGlzRnJhbWUgPSBmdW5jdGlvbnNUb1J1bi5sZW5ndGg7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVRoaXNGcmFtZTsgaSsrKSB7XG4gICAgICAgIGZ1bmN0aW9uc1RvUnVuW2ldKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTltY21GdFpYTjVibU12WTNKbFlYUmxMWEpsYm1SbGNpMXpkR1Z3TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096dHJRa0ZCZDBJN1FVRkJWQ3hUUVVGVExHZENRVUZVTEVOQlFUQkNMR1ZCUVRGQ0xFVkJRVEpET3pzN096czdRVUZOZUVRc1RVRkJTU3hwUWtGQmFVSXNSVUZCYWtJc1EwRk9iMFE3UVVGUGVFUXNUVUZCU1N3d1FrRkJNRUlzUlVGQk1VSXNRMEZRYjBRN08wRkJVM2hFTEZOQlFVODdRVUZEVEN4alFVRlZMRlZCUVVNc1VVRkJSQ3hGUVVGak8wRkJRM1JDT3p0QlFVUnpRaXhWUVVkc1FpeDNRa0ZCZDBJc1QwRkJlRUlzUTBGQlowTXNVVUZCYUVNc1RVRkJPRU1zUTBGQlF5eERRVUZFTEVWQlFVazdRVUZEY0VRc1owTkJRWGRDTEVsQlFYaENMRU5CUVRaQ0xGRkJRVGRDTEVWQlJHOUVPMDlCUVhSRU8wdEJTRkU3TzBGQlVWWXNXVUZCVVN4VlFVRkRMRkZCUVVRc1JVRkJZenRCUVVOd1FpeFZRVUZOTEd0Q1FVRnJRaXgzUWtGQmQwSXNUMEZCZUVJc1EwRkJaME1zVVVGQmFFTXNRMEZCYkVJc1EwRkVZenRCUVVWd1FpeFZRVUZKTEc5Q1FVRnZRaXhEUVVGRExFTkJRVVFzUlVGQlNUdEJRVU14UWl4blEwRkJkMElzVFVGQmVFSXNRMEZCSzBJc1pVRkJMMElzUlVGQlowUXNRMEZCYUVRc1JVRkVNRUk3VDBGQk5VSTdTMEZHVFRzN1FVRlBVaXhoUVVGVExGbEJRVTA3T3p0cFFrRkZLMElzUTBGQlF5eDFRa0ZCUkN4RlFVRXdRaXhqUVVFeFFqczdRVUZHTDBJN1FVRkZXaXdyUWtGR1dUdEJRVVZKTEhkRFFVWktPMEZCUzJJc09FSkJRWGRDTEUxQlFYaENMRWRCUVdsRExFTkJRV3BET3pzN1FVRk1ZU3hWUVZGUUxHVkJRV1VzWlVGQlpTeE5RVUZtTEVOQlVsSTdRVUZUWWl4WFFVRkxMRWxCUVVrc1NVRkJTU3hEUVVGS0xFVkJRVThzU1VGQlNTeFpRVUZLTEVWQlFXdENMRWRCUVd4RExFVkJRWFZETzBGQlEzSkRMSFZDUVVGbExFTkJRV1lzU1VGRWNVTTdUMEZCZGtNN1MwRlVUenRIUVdoQ1dDeERRVlIzUkR0RFFVRXpReUlzSW1acGJHVWlPaUpqY21WaGRHVXRjbVZ1WkdWeUxYTjBaWEF1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaVpYaHdiM0owSUdSbFptRjFiSFFnWm5WdVkzUnBiMjRnWTNKbFlYUmxVbVZ1WkdWeVUzUmxjQ2h6ZEdGeWRGSmxibVJsY2t4dmIzQXBJSHRjYmlBZ0x5b3FYRzRnSUNBcUlGZGxJSFZ6WlNCMGQyOGdZWEp5WVhsekxDQnZibVVnWm05eUlIUm9hWE1nWm5KaGJXVWdZVzVrSUc5dVpTQjBieUJ4ZFdWMVpTQm1iM0lnZEdobFhHNGdJQ0FxSUc1bGVIUWdabkpoYldVc0lISmxkWE5wYm1jZ1pXRmphQ0IwYnlCaGRtOXBaQ0JIUXk1Y2JpQWdJQ29nUUhSNWNHVWdlMEZ5Y21GNWZWeHVJQ0FnS2k5Y2JpQWdiR1YwSUdaMWJtTjBhVzl1YzFSdlVuVnVJRDBnVzEwN1hHNGdJR3hsZENCbWRXNWpkR2x2Ym5OVWIxSjFiazVsZUhSR2NtRnRaU0E5SUZ0ZE8xeHVYRzRnSUhKbGRIVnliaUI3WEc0Z0lDQWdjMk5vWldSMWJHVTZJQ2hqWVd4c1ltRmpheWtnUFQ0Z2UxeHVJQ0FnSUNBZ2MzUmhjblJTWlc1a1pYSk1iMjl3S0NrN1hHNGdJQ0FnSUNBdkx5QkpaaUIwYUdseklHTmhiR3hpWVdOcklHbHpiaWQwSUdGc2NtVmhaSGtnYzJOb1pXUjFiR1ZrSUhSdklISjFiaUJ1WlhoMElHWnlZVzFsWEc0Z0lDQWdJQ0JwWmlBb1puVnVZM1JwYjI1elZHOVNkVzVPWlhoMFJuSmhiV1V1YVc1a1pYaFBaaWhqWVd4c1ltRmpheWtnUFQwOUlDMHhLU0I3WEc0Z0lDQWdJQ0FnSUdaMWJtTjBhVzl1YzFSdlVuVnVUbVY0ZEVaeVlXMWxMbkIxYzJnb1kyRnNiR0poWTJzcE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgwc1hHNWNiaUFnSUNCallXNWpaV3c2SUNoallXeHNZbUZqYXlrZ1BUNGdlMXh1SUNBZ0lDQWdZMjl1YzNRZ2FXNWtaWGhQWmtOaGJHeGlZV05ySUQwZ1puVnVZM1JwYjI1elZHOVNkVzVPWlhoMFJuSmhiV1V1YVc1a1pYaFBaaWhqWVd4c1ltRmpheWs3WEc0Z0lDQWdJQ0JwWmlBb2FXNWtaWGhQWmtOaGJHeGlZV05ySUNFOVBTQXRNU2tnZTF4dUlDQWdJQ0FnSUNCbWRXNWpkR2x2Ym5OVWIxSjFiazVsZUhSR2NtRnRaUzV6Y0d4cFkyVW9hVzVrWlhoUFprTmhiR3hpWVdOckxDQXhLVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlMRnh1WEc0Z0lDQWdjSEp2WTJWemN6b2dLQ2tnUFQ0Z2UxeHVJQ0FnSUNBZ0x5OGdVM2RoY0NCMGFHbHpJR1p5WVcxbElHRnVaQ0J1WlhoMElHWnlZVzFsSUdGeWNtRjVjeUIwYnlCaGRtOXBaQ0JIUTF4dUlDQWdJQ0FnVzJaMWJtTjBhVzl1YzFSdlVuVnVMQ0JtZFc1amRHbHZibk5VYjFKMWJrNWxlSFJHY21GdFpWMGdQU0JiWm5WdVkzUnBiMjV6Vkc5U2RXNU9aWGgwUm5KaGJXVXNJR1oxYm1OMGFXOXVjMVJ2VW5WdVhUdGNibHh1SUNBZ0lDQWdMeThnUTJ4bFlYSWdibVY0ZENCbWNtRnRaU0JzYVhOMFhHNGdJQ0FnSUNCbWRXNWpkR2x2Ym5OVWIxSjFiazVsZUhSR2NtRnRaUzVzWlc1bmRHZ2dQU0F3TzF4dVhHNGdJQ0FnSUNBdkx5QkZlR1ZqZFhSbElHRnNiQ0J2WmlCMGFHbHpJR1p5WVcxbEozTWdablZ1WTNScGIyNXpYRzRnSUNBZ0lDQmpiMjV6ZENCdWRXMVVhR2x6Um5KaGJXVWdQU0JtZFc1amRHbHZibk5VYjFKMWJpNXNaVzVuZEdnN1hHNGdJQ0FnSUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElHNTFiVlJvYVhOR2NtRnRaVHNnYVNzcktTQjdYRzRnSUNBZ0lDQWdJR1oxYm1OMGFXOXVjMVJ2VW5WdVcybGRLQ2s3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmVnh1SUNCOU8xeHVmU0pkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvZnJhbWVzeW5jL2NyZWF0ZS1yZW5kZXItc3RlcC5qc1xuICoqIG1vZHVsZSBpZCA9IDEyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgQ0FNRUxfQ0FTRV9QQVRURVJOID0gLyhbYS16XSkoW0EtWl0pL2c7XG52YXIgUkVQTEFDRV9URU1QTEFURSA9ICckMS0kMic7XG52YXIgSEFTX1BFUkZPUk1BTkNFX05PVyA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCcgJiYgcGVyZm9ybWFuY2Uubm93O1xuXG4vKlxuICBHZXQgdmFyIHR5cGUgYXMgc3RyaW5nXG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbc3RyaW5nXTogUmV0dXJucywgZm9yIGluc3RhbmNlICdPYmplY3QnIGlmIFtvYmplY3QgT2JqZWN0XVxuKi9cbnZhciB2YXJUeXBlID0gZnVuY3Rpb24gKHZhcmlhYmxlKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFyaWFibGUpLnNsaWNlKDgsIC0xKTtcbn07XG5cbi8qXG4gIENvbnZlcnQgY2FtZWxDYXNlIHRvIGRhc2gtY2FzZVxuXG4gIEBwYXJhbSBbc3RyaW5nXVxuICBAcmV0dXJuIFtzdHJpbmddXG4qL1xudmFyIGNhbWVsVG9EYXNoID0gZXhwb3J0cy5jYW1lbFRvRGFzaCA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKENBTUVMX0NBU0VfUEFUVEVSTiwgUkVQTEFDRV9URU1QTEFURSkudG9Mb3dlckNhc2UoKTtcbn07XG5cbi8qXG4gIENyZWF0ZSBhIGZ1bmN0aW9uIHN0cmluZ1xuXG4gICcyMHB4JywgJ3RyYW5zbGF0ZScgLT4gJ3RyYW5zbGF0ZSgyMHB4KSdcblxuICBAcGFyYW0gW3N0cmluZ11cbiAgQHBhcmFtIFtzdHJpbmddXG4gIEByZXR1cm4gW3N0cmluZ11cbiovXG52YXIgY3JlYXRlRnVuY3Rpb25TdHJpbmcgPSBleHBvcnRzLmNyZWF0ZUZ1bmN0aW9uU3RyaW5nID0gZnVuY3Rpb24gKHZhbHVlLCBwcmVmaXgpIHtcbiAgcmV0dXJuIHByZWZpeCArICcoJyArIHZhbHVlICsgJyknO1xufTtcblxuLypcbiAgR2VuZXJhdGUgY3VycmVudCB0aW1lc3RhbXBcbiAgXG4gIEByZXR1cm4gW3RpbWVzdGFtcF06IEN1cnJlbnQgVU5JWCB0aW1lc3RhbXBcbiovXG52YXIgY3VycmVudFRpbWUgPSBleHBvcnRzLmN1cnJlbnRUaW1lID0gSEFTX1BFUkZPUk1BTkNFX05PVyA/IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHBlcmZvcm1hbmNlLm5vdygpO1xufSA6IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xufTtcblxuLypcbiAgQ2hlY2sgaWYgb2JqZWN0IGhhcyBwcm9wZXJ0eSBhbmQgaXQgaXNuJ3QgdW5kZWZpbmVkXG5cbiAgQHBhcmFtIFtvYmplY3RdXG4gIEBwYXJhbSBbc3RyaW5nXVxuICBAcmV0dXJuIFtib29sZWFuXVxuKi9cbnZhciBoYXNQcm9wZXJ0eSA9IGV4cG9ydHMuaGFzUHJvcGVydHkgPSBmdW5jdGlvbiAob2JqZWN0LCBwcm9wZXJ0eU5hbWUpIHtcbiAgcmV0dXJuIG9iamVjdC5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eU5hbWUpICYmIG9iamVjdFtwcm9wZXJ0eU5hbWVdICE9PSB1bmRlZmluZWQ7XG59O1xuXG4vKlxuICBJcyB1dGlscyB2YXIgYW4gYXJyYXkgPyBcbiAgXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHV0aWxzLnZhclR5cGUgPT09ICdBcnJheSdcbiovXG52YXIgaXNBcnJheSA9IGV4cG9ydHMuaXNBcnJheSA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgcmV0dXJuIHZhclR5cGUoYXJyKSA9PT0gJ0FycmF5Jztcbn07XG5cbi8qXG4gIElzIHV0aWxzIHZhciBhIGZ1bmN0aW9uID8gXG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB1dGlscy52YXJUeXBlID09PSAnRnVuY3Rpb24nXG4qL1xudmFyIGlzRnVuYyA9IGV4cG9ydHMuaXNGdW5jID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdmFyVHlwZShvYmopID09PSAnRnVuY3Rpb24nO1xufTtcblxuLypcbiAgSXMgdXRpbHMgdmFyIGEgbnVtYmVyP1xuICBcbiAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mID09PSAnbnVtYmVyJ1xuKi9cbnZhciBpc051bSA9IGV4cG9ydHMuaXNOdW0gPSBmdW5jdGlvbiAobnVtKSB7XG4gIHJldHVybiB0eXBlb2YgbnVtID09PSAnbnVtYmVyJztcbn07XG5cbi8qXG4gIElzIHV0aWxzIHZhciBhbiBvYmplY3Q/XG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2YgPT09ICdvYmplY3QnXG4qL1xudmFyIGlzT2JqID0gZXhwb3J0cy5pc09iaiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdvYmplY3QnO1xufTtcblxuLypcbiAgSXMgdXRpbHMgYSByZWxhdGl2ZSB2YWx1ZSBhc3NpZ25tZW50P1xuICBcbiAgQHBhcmFtIFtzdHJpbmddOiBWYXJpYWJsZSB0byB0ZXN0XG4gIEByZXR1cm4gW2Jvb2xlYW5dOiBJZiB1dGlscyBsb29rcyBsaWtlIGEgcmVsYXRpdmUgdmFsdWUgYXNzaWdubWVudFxuKi9cbnZhciBpc1JlbGF0aXZlVmFsdWUgPSBleHBvcnRzLmlzUmVsYXRpdmVWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgJiYgdmFsdWUuaW5kZXhPZiAmJiB2YWx1ZS5pbmRleE9mKCc9JykgPiAwID8gdHJ1ZSA6IGZhbHNlO1xufTtcblxuLypcbiAgSXMgdXRpbHMgdmFyIGEgc3RyaW5nID8gXG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJ1xuKi9cbnZhciBpc1N0cmluZyA9IGV4cG9ydHMuaXNTdHJpbmcgPSBmdW5jdGlvbiAoc3RyKSB7XG4gIHJldHVybiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJztcbn07XG5cbi8qXG4gIFNwbGl0IGNvbW1hLWRlbGltaXRlZCBzdHJpbmdcblxuICBcImZvbyxiYXJcIiAtPiBbXCJmb29cIiwgXCJiYXJcIl1cblxuICBAcGFyYW0gW3N0cmluZ11cbiAgQHJldHVybiBbYXJyYXldXG4qL1xudmFyIHNwbGl0Q29tbWFEZWxpbWl0ZWQgPSBleHBvcnRzLnNwbGl0Q29tbWFEZWxpbWl0ZWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIGlzU3RyaW5nKHZhbHVlKSA/IHZhbHVlLnNwbGl0KC8sXFxzKi8pIDogW3ZhbHVlXTtcbn07XG5cbi8qXG4gIFNwbGl0IHNwYWNlLWRlbGltaXRlZCBzdHJpbmdcblxuICBcImZvbyBiYXJcIiAtPiBbXCJmb29cIiwgXCJiYXJcIl1cblxuICBAcGFyYW0gW3N0cmluZ11cbiAgQHJldHVybiBbYXJyYXldXG4qL1xudmFyIHNwbGl0U3BhY2VEZWxpbWl0ZWQgPSBleHBvcnRzLnNwbGl0U3BhY2VEZWxpbWl0ZWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIGlzU3RyaW5nKHZhbHVlKSA/IHZhbHVlLnNwbGl0KCcgJykgOiBbdmFsdWVdO1xufTtcblxuLypcbiAgQ29udmVydCBudW1iZXIgdG8geCBkZWNpbWFsIHBsYWNlc1xuXG4gIEBwYXJhbSBbbnVtYmVyXVxuICBAcGFyYW0gW251bWJlcl1cbiAgQHJldHVybiBbbnVtYmVyXVxuKi9cbnZhciB0b0RlY2ltYWwgPSBleHBvcnRzLnRvRGVjaW1hbCA9IGZ1bmN0aW9uIChudW0pIHtcbiAgdmFyIHByZWNpc2lvbiA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IDIgOiBhcmd1bWVudHNbMV07XG5cbiAgcHJlY2lzaW9uID0gTWF0aC5wb3coMTAsIHByZWNpc2lvbik7XG4gIHJldHVybiBNYXRoLnJvdW5kKG51bSAqIHByZWNpc2lvbikgLyBwcmVjaXNpb247XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1NdmRYUnBiSE11YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN08wRkJRVUVzU1VGQlRTeHhRa0ZCY1VJc2FVSkJRWEpDTzBGQlEwNHNTVUZCVFN4dFFrRkJiVUlzVDBGQmJrSTdRVUZEVGl4SlFVRk5MSE5DUVVGMVFpeFBRVUZQTEZkQlFWQXNTMEZCZFVJc1YwRkJka0lzU1VGQmMwTXNXVUZCV1N4SFFVRmFPenM3T3pzN096dEJRVkZ1UlN4SlFVRk5MRlZCUVZVc1ZVRkJReXhSUVVGRU8xTkJRV01zVDBGQlR5eFRRVUZRTEVOQlFXbENMRkZCUVdwQ0xFTkJRVEJDTEVsQlFURkNMRU5CUVN0Q0xGRkJRUzlDTEVWQlFYbERMRXRCUVhwRExFTkJRU3RETEVOQlFTOURMRVZCUVd0RUxFTkJRVU1zUTBGQlJEdERRVUZvUlRzN096czdPenM3UVVGUlZDeEpRVUZOTEc5RFFVRmpMRlZCUVVNc1RVRkJSRHRUUVVGWkxFOUJRVThzVDBGQlVDeERRVUZsTEd0Q1FVRm1MRVZCUVcxRExHZENRVUZ1UXl4RlFVRnhSQ3hYUVVGeVJEdERRVUZhT3pzN096czdPenM3T3p0QlFWZHdRaXhKUVVGTkxITkVRVUYxUWl4VlFVRkRMRXRCUVVRc1JVRkJVU3hOUVVGU08xTkJRWE5DTEdWQlFWVTdRMEZCYUVNN096czdPenM3UVVGUE4wSXNTVUZCVFN4dlEwRkJZeXh6UWtGQmMwSTdVMEZCVFN4WlFVRlpMRWRCUVZvN1EwRkJUaXhIUVVFd1FqdFRRVUZOTEVsQlFVa3NTVUZCU2l4SFFVRlhMRTlCUVZnN1EwRkJUanM3T3pzN096czdPMEZCVTNCRkxFbEJRVTBzYjBOQlFXTXNWVUZCUXl4TlFVRkVMRVZCUVZNc1dVRkJWRHRUUVVFd1FpeFBRVUZQTEdOQlFWQXNRMEZCYzBJc1dVRkJkRUlzUzBGQmRVTXNUMEZCVHl4WlFVRlFMRTFCUVhsQ0xGTkJRWHBDTzBOQlFXcEZPenM3T3pzN096dEJRVkZ3UWl4SlFVRk5MRFJDUVVGVkxGVkJRVU1zUjBGQlJEdFRRVUZUTEZGQlFWRXNSMEZCVWl4TlFVRnBRaXhQUVVGcVFqdERRVUZVT3pzN096czdPenRCUVZGb1FpeEpRVUZOTERCQ1FVRlRMRlZCUVVNc1IwRkJSRHRUUVVGVExGRkJRVkVzUjBGQlVpeE5RVUZwUWl4VlFVRnFRanREUVVGVU96czdPenM3T3p0QlFWRm1MRWxCUVUwc2QwSkJRVkVzVlVGQlF5eEhRVUZFTzFOQlFWTXNUMEZCVHl4SFFVRlFMRXRCUVdVc1VVRkJaanREUVVGVU96czdPenM3T3p0QlFWRmtMRWxCUVUwc2QwSkJRVkVzVlVGQlF5eEhRVUZFTzFOQlFWTXNUMEZCVHl4SFFVRlFMRXRCUVdVc1VVRkJaanREUVVGVU96czdPenM3T3p0QlFWRmtMRWxCUVUwc05FTkJRV3RDTEZWQlFVTXNTMEZCUkR0VFFVRlhMRXRCUVVNc1NVRkJVeXhOUVVGTkxFOUJRVTRzU1VGQmFVSXNUVUZCVFN4UFFVRk9MRU5CUVdNc1IwRkJaQ3hKUVVGeFFpeERRVUZ5UWl4SFFVRXdRaXhKUVVGeVJDeEhRVUUwUkN4TFFVRTFSRHREUVVGWU96czdPenM3T3p0QlFWRjRRaXhKUVVGTkxEaENRVUZYTEZWQlFVTXNSMEZCUkR0VFFVRlRMRTlCUVU4c1IwRkJVQ3hMUVVGbExGRkJRV1k3UTBGQlZEczdPenM3T3pzN096dEJRVlZxUWl4SlFVRk5MRzlFUVVGelFpeFZRVUZETEV0QlFVUTdVMEZCVnl4VFFVRlRMRXRCUVZRc1NVRkJhMElzVFVGQlRTeExRVUZPTEVOQlFWa3NUVUZCV2l4RFFVRnNRaXhIUVVGM1F5eERRVUZETEV0QlFVUXNRMEZCZUVNN1EwRkJXRHM3T3pzN096czdPenRCUVZVMVFpeEpRVUZOTEc5RVFVRnpRaXhWUVVGRExFdEJRVVE3VTBGQlZ5eFRRVUZUTEV0QlFWUXNTVUZCYTBJc1RVRkJUU3hMUVVGT0xFTkJRVmtzUjBGQldpeERRVUZzUWl4SFFVRnhReXhEUVVGRExFdEJRVVFzUTBGQmNrTTdRMEZCV0RzN096czdPenM3TzBGQlV6VkNMRWxCUVUwc1owTkJRVmtzVlVGQlF5eEhRVUZFTEVWQlFYZENPMDFCUVd4Q0xHdEZRVUZaTEdsQ1FVRk5PenRCUVVNdlF5eDFRa0ZCV1N4SlFVRk5MRlZCUVd4Q0xFTkJSQ3RETzBGQlJTOURMRk5CUVU4c1MwRkJTeXhMUVVGTUxFTkJRVmNzVFVGQlRTeFRRVUZPTEVOQlFWZ3NSMEZCT0VJc1UwRkJPVUlzUTBGR2QwTTdRMEZCZUVJaUxDSm1hV3hsSWpvaWRYUnBiSE11YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaVkyOXVjM1FnUTBGTlJVeGZRMEZUUlY5UVFWUlVSVkpPSUQwZ0x5aGJZUzE2WFNrb1cwRXRXbDBwTDJjN1hHNWpiMjV6ZENCU1JWQk1RVU5GWDFSRlRWQk1RVlJGSUQwZ0p5UXhMU1F5Snp0Y2JtTnZibk4wSUVoQlUxOVFSVkpHVDFKTlFVNURSVjlPVDFjZ1BTQW9kSGx3Wlc5bUlIQmxjbVp2Y20xaGJtTmxJQ0U5UFNBbmRXNWtaV1pwYm1Wa0p5QW1KaUJ3WlhKbWIzSnRZVzVqWlM1dWIzY3BPMXh1WEc0dktseHVJQ0JIWlhRZ2RtRnlJSFI1Y0dVZ1lYTWdjM1J5YVc1blhHNGdJRnh1SUNCQWNHRnlZVzA2SUZaaGNtbGhZbXhsSUhSdklIUmxjM1JjYmlBZ1FISmxkSFZ5YmlCYmMzUnlhVzVuWFRvZ1VtVjBkWEp1Y3l3Z1ptOXlJR2x1YzNSaGJtTmxJQ2RQWW1wbFkzUW5JR2xtSUZ0dlltcGxZM1FnVDJKcVpXTjBYVnh1S2k5Y2JtTnZibk4wSUhaaGNsUjVjR1VnUFNBb2RtRnlhV0ZpYkdVcElEMCtJRTlpYW1WamRDNXdjbTkwYjNSNWNHVXVkRzlUZEhKcGJtY3VZMkZzYkNoMllYSnBZV0pzWlNrdWMyeHBZMlVvT0N3Z0xURXBPMXh1WEc0dktseHVJQ0JEYjI1MlpYSjBJR05oYldWc1EyRnpaU0IwYnlCa1lYTm9MV05oYzJWY2JseHVJQ0JBY0dGeVlXMGdXM04wY21sdVoxMWNiaUFnUUhKbGRIVnliaUJiYzNSeWFXNW5YVnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JqWVcxbGJGUnZSR0Z6YUNBOUlDaHpkSEpwYm1jcElEMCtJSE4wY21sdVp5NXlaWEJzWVdObEtFTkJUVVZNWDBOQlUwVmZVRUZVVkVWU1Rpd2dVa1ZRVEVGRFJWOVVSVTFRVEVGVVJTa3VkRzlNYjNkbGNrTmhjMlVvS1R0Y2JseHVMeXBjYmlBZ1EzSmxZWFJsSUdFZ1puVnVZM1JwYjI0Z2MzUnlhVzVuWEc1Y2JpQWdKekl3Y0hnbkxDQW5kSEpoYm5Oc1lYUmxKeUF0UGlBbmRISmhibk5zWVhSbEtESXdjSGdwSjF4dVhHNGdJRUJ3WVhKaGJTQmJjM1J5YVc1blhWeHVJQ0JBY0dGeVlXMGdXM04wY21sdVoxMWNiaUFnUUhKbGRIVnliaUJiYzNSeWFXNW5YVnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JqY21WaGRHVkdkVzVqZEdsdmJsTjBjbWx1WnlBOUlDaDJZV3gxWlN3Z2NISmxabWw0S1NBOVBpQmdKSHR3Y21WbWFYaDlLQ1I3ZG1Gc2RXVjlLV0E3WEc1Y2JpOHFYRzRnSUVkbGJtVnlZWFJsSUdOMWNuSmxiblFnZEdsdFpYTjBZVzF3WEc0Z0lGeHVJQ0JBY21WMGRYSnVJRnQwYVcxbGMzUmhiWEJkT2lCRGRYSnlaVzUwSUZWT1NWZ2dkR2x0WlhOMFlXMXdYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR04xY25KbGJuUlVhVzFsSUQwZ1NFRlRYMUJGVWtaUFVrMUJUa05GWDA1UFZ5QS9JQ2dwSUQwK0lIQmxjbVp2Y20xaGJtTmxMbTV2ZHlncElEb2dLQ2tnUFQ0Z2JtVjNJRVJoZEdVb0tTNW5aWFJVYVcxbEtDazdYRzVjYmk4cVhHNGdJRU5vWldOcklHbG1JRzlpYW1WamRDQm9ZWE1nY0hKdmNHVnlkSGtnWVc1a0lHbDBJR2x6YmlkMElIVnVaR1ZtYVc1bFpGeHVYRzRnSUVCd1lYSmhiU0JiYjJKcVpXTjBYVnh1SUNCQWNHRnlZVzBnVzNOMGNtbHVaMTFjYmlBZ1FISmxkSFZ5YmlCYlltOXZiR1ZoYmwxY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2FHRnpVSEp2Y0dWeWRIa2dQU0FvYjJKcVpXTjBMQ0J3Y205d1pYSjBlVTVoYldVcElEMCtJRzlpYW1WamRDNW9ZWE5QZDI1UWNtOXdaWEowZVNod2NtOXdaWEowZVU1aGJXVXBJQ1ltSUc5aWFtVmpkRnR3Y205d1pYSjBlVTVoYldWZElDRTlQU0IxYm1SbFptbHVaV1E3WEc1Y2JpOHFYRzRnSUVseklIVjBhV3h6SUhaaGNpQmhiaUJoY25KaGVTQS9JRnh1SUNCY2JpQWdRSEJoY21GdE9pQldZWEpwWVdKc1pTQjBieUIwWlhOMFhHNGdJRUJ5WlhSMWNtNGdXMkp2YjJ4bFlXNWRPaUJTWlhSMWNtNXpJSFJ5ZFdVZ2FXWWdkWFJwYkhNdWRtRnlWSGx3WlNBOVBUMGdKMEZ5Y21GNUoxeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnBjMEZ5Y21GNUlEMGdLR0Z5Y2lrZ1BUNGdkbUZ5Vkhsd1pTaGhjbklwSUQwOVBTQW5RWEp5WVhrbk8xeHVYRzR2S2x4dUlDQkpjeUIxZEdsc2N5QjJZWElnWVNCbWRXNWpkR2x2YmlBL0lGeHVJQ0JjYmlBZ1FIQmhjbUZ0T2lCV1lYSnBZV0pzWlNCMGJ5QjBaWE4wWEc0Z0lFQnlaWFIxY200Z1cySnZiMnhsWVc1ZE9pQlNaWFIxY201eklIUnlkV1VnYVdZZ2RYUnBiSE11ZG1GeVZIbHdaU0E5UFQwZ0owWjFibU4wYVc5dUoxeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnBjMFoxYm1NZ1BTQW9iMkpxS1NBOVBpQjJZWEpVZVhCbEtHOWlhaWtnUFQwOUlDZEdkVzVqZEdsdmJpYzdYRzVjYmk4cVhHNGdJRWx6SUhWMGFXeHpJSFpoY2lCaElHNTFiV0psY2o5Y2JpQWdYRzRnSUVCd1lYSmhiVG9nVm1GeWFXRmliR1VnZEc4Z2RHVnpkRnh1SUNCQWNtVjBkWEp1SUZ0aWIyOXNaV0Z1WFRvZ1VtVjBkWEp1Y3lCMGNuVmxJR2xtSUhSNWNHVnZaaUE5UFQwZ0oyNTFiV0psY2lkY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2FYTk9kVzBnUFNBb2JuVnRLU0E5UGlCMGVYQmxiMllnYm5WdElEMDlQU0FuYm5WdFltVnlKenRjYmx4dUx5cGNiaUFnU1hNZ2RYUnBiSE1nZG1GeUlHRnVJRzlpYW1WamREOWNiaUFnWEc0Z0lFQndZWEpoYlRvZ1ZtRnlhV0ZpYkdVZ2RHOGdkR1Z6ZEZ4dUlDQkFjbVYwZFhKdUlGdGliMjlzWldGdVhUb2dVbVYwZFhKdWN5QjBjblZsSUdsbUlIUjVjR1Z2WmlBOVBUMGdKMjlpYW1WamRDZGNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdhWE5QWW1vZ1BTQW9iMkpxS1NBOVBpQjBlWEJsYjJZZ2IySnFJRDA5UFNBbmIySnFaV04wSnp0Y2JseHVMeXBjYmlBZ1NYTWdkWFJwYkhNZ1lTQnlaV3hoZEdsMlpTQjJZV3gxWlNCaGMzTnBaMjV0Wlc1MFAxeHVJQ0JjYmlBZ1FIQmhjbUZ0SUZ0emRISnBibWRkT2lCV1lYSnBZV0pzWlNCMGJ5QjBaWE4wWEc0Z0lFQnlaWFIxY200Z1cySnZiMnhsWVc1ZE9pQkpaaUIxZEdsc2N5QnNiMjlyY3lCc2FXdGxJR0VnY21Wc1lYUnBkbVVnZG1Gc2RXVWdZWE56YVdkdWJXVnVkRnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JwYzFKbGJHRjBhWFpsVm1Gc2RXVWdQU0FvZG1Gc2RXVXBJRDArSUNoMllXeDFaU0FtSmlCMllXeDFaUzVwYm1SbGVFOW1JQ1ltSUhaaGJIVmxMbWx1WkdWNFQyWW9KejBuS1NBK0lEQXBJRDhnZEhKMVpTQTZJR1poYkhObE8xeHVYRzR2S2x4dUlDQkpjeUIxZEdsc2N5QjJZWElnWVNCemRISnBibWNnUHlCY2JpQWdYRzRnSUVCd1lYSmhiVG9nVm1GeWFXRmliR1VnZEc4Z2RHVnpkRnh1SUNCQWNtVjBkWEp1SUZ0aWIyOXNaV0Z1WFRvZ1VtVjBkWEp1Y3lCMGNuVmxJR2xtSUhSNWNHVnZaaUJ6ZEhJZ1BUMDlJQ2R6ZEhKcGJtY25YRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR2x6VTNSeWFXNW5JRDBnS0hOMGNpa2dQVDRnZEhsd1pXOW1JSE4wY2lBOVBUMGdKM04wY21sdVp5YzdYRzVjYmk4cVhHNGdJRk53YkdsMElHTnZiVzFoTFdSbGJHbHRhWFJsWkNCemRISnBibWRjYmx4dUlDQmNJbVp2Ynl4aVlYSmNJaUF0UGlCYlhDSm1iMjljSWl3Z1hDSmlZWEpjSWwxY2JseHVJQ0JBY0dGeVlXMGdXM04wY21sdVoxMWNiaUFnUUhKbGRIVnliaUJiWVhKeVlYbGRYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJSE53YkdsMFEyOXRiV0ZFWld4cGJXbDBaV1FnUFNBb2RtRnNkV1VwSUQwK0lHbHpVM1J5YVc1bktIWmhiSFZsS1NBL0lIWmhiSFZsTG5Od2JHbDBLQzhzWEZ4ektpOHBJRG9nVzNaaGJIVmxYVHRjYmx4dUx5cGNiaUFnVTNCc2FYUWdjM0JoWTJVdFpHVnNhVzFwZEdWa0lITjBjbWx1WjF4dVhHNGdJRndpWm05dklHSmhjbHdpSUMwK0lGdGNJbVp2YjF3aUxDQmNJbUpoY2x3aVhWeHVYRzRnSUVCd1lYSmhiU0JiYzNSeWFXNW5YVnh1SUNCQWNtVjBkWEp1SUZ0aGNuSmhlVjFjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYzNCc2FYUlRjR0ZqWlVSbGJHbHRhWFJsWkNBOUlDaDJZV3gxWlNrZ1BUNGdhWE5UZEhKcGJtY29kbUZzZFdVcElEOGdkbUZzZFdVdWMzQnNhWFFvSnlBbktTQTZJRnQyWVd4MVpWMDdYRzVjYmk4cVhHNGdJRU52Ym5abGNuUWdiblZ0WW1WeUlIUnZJSGdnWkdWamFXMWhiQ0J3YkdGalpYTmNibHh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDFjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkWEc0Z0lFQnlaWFIxY200Z1cyNTFiV0psY2wxY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2RHOUVaV05wYldGc0lEMGdLRzUxYlN3Z2NISmxZMmx6YVc5dUlEMGdNaWtnUFQ0Z2UxeHVJQ0J3Y21WamFYTnBiMjRnUFNBeE1DQXFLaUJ3Y21WamFYTnBiMjQ3WEc0Z0lISmxkSFZ5YmlCTllYUm9Mbkp2ZFc1a0tHNTFiU0FxSUhCeVpXTnBjMmx2YmlrZ0x5QndjbVZqYVhOcGIyNDdYRzU5TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy91dGlscy5qc1xuICoqIG1vZHVsZSBpZCA9IDEzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHRyYWNrO1xuZnVuY3Rpb24gdHJhY2sodjEsIHYyKSB7XG4gIHZhciB2MU9yaWdpbiA9IHYxLmdldCgpO1xuICB2YXIgdjJPcmlnaW4gPSB2Mi5nZXQoKTtcblxuICB2YXIgdXBkYXRlVjIgPSBmdW5jdGlvbiAodikge1xuICAgIHZhciBvZmZzZXQgPSB2IC0gdjFPcmlnaW47XG4gICAgdjIudXBkYXRlKHYyT3JpZ2luICsgb2Zmc2V0KTtcbiAgfTtcblxuICB2MS5hZGRMaXN0ZW5lcih1cGRhdGVWMik7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHNuYXAoKSB7XG4gICAgdjEucmVtb3ZlTGlzdGVuZXIodXBkYXRlVjIpO1xuICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMM1J5WVdOckxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenRyUWtGQmQwSTdRVUZCVkN4VFFVRlRMRXRCUVZRc1EwRkJaU3hGUVVGbUxFVkJRVzFDTEVWQlFXNUNMRVZCUVhWQ08wRkJRM0JETEUxQlFVMHNWMEZCVnl4SFFVRkhMRWRCUVVnc1JVRkJXQ3hEUVVRNFFqdEJRVVZ3UXl4TlFVRk5MRmRCUVZjc1IwRkJSeXhIUVVGSUxFVkJRVmdzUTBGR09FSTdPMEZCU1hCRExFMUJRVTBzVjBGQlZ5eFZRVUZETEVOQlFVUXNSVUZCVHp0QlFVTjBRaXhSUVVGTkxGTkJRVk1zU1VGQlNTeFJRVUZLTEVOQlJFODdRVUZGZEVJc1QwRkJSeXhOUVVGSUxFTkJRVlVzVjBGQlZ5eE5RVUZZTEVOQlFWWXNRMEZHYzBJN1IwRkJVQ3hEUVVwdFFqczdRVUZUY0VNc1MwRkJSeXhYUVVGSUxFTkJRV1VzVVVGQlppeEZRVlJ2UXpzN1FVRlhjRU1zVTBGQlR5eFRRVUZUTEVsQlFWUXNSMEZCWjBJN1FVRkRja0lzVDBGQlJ5eGpRVUZJTEVOQlFXdENMRkZCUVd4Q0xFVkJSSEZDTzBkQlFXaENMRU5CV0RaQ08wTkJRWFpDSWl3aVptbHNaU0k2SW5SeVlXTnJMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwTDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1WNGNHOXlkQ0JrWldaaGRXeDBJR1oxYm1OMGFXOXVJSFJ5WVdOcktIWXhMQ0IyTWlrZ2UxeHVJQ0JqYjI1emRDQjJNVTl5YVdkcGJpQTlJSFl4TG1kbGRDZ3BPMXh1SUNCamIyNXpkQ0IyTWs5eWFXZHBiaUE5SUhZeUxtZGxkQ2dwTzF4dVhHNGdJR052Ym5OMElIVndaR0YwWlZZeUlEMGdLSFlwSUQwK0lIdGNiaUFnSUNCamIyNXpkQ0J2Wm1aelpYUWdQU0IySUMwZ2RqRlBjbWxuYVc0N1hHNGdJQ0FnZGpJdWRYQmtZWFJsS0hZeVQzSnBaMmx1SUNzZ2IyWm1jMlYwS1R0Y2JpQWdmVnh1WEc0Z0lIWXhMbUZrWkV4cGMzUmxibVZ5S0hWd1pHRjBaVll5S1R0Y2JseHVJQ0J5WlhSMWNtNGdablZ1WTNScGIyNGdjMjVoY0NncElIdGNiaUFnSUNCMk1TNXlaVzF2ZG1WTWFYTjBaVzVsY2loMWNHUmhkR1ZXTWlrN1hHNGdJSDFjYm4xY2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL3RyYWNrLmpzXG4gKiogbW9kdWxlIGlkID0gMTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuc3RlcHBlZE1vdGlvbiA9IGV4cG9ydHMucmVzdHJpY3RCZXR3ZWVuID0gZXhwb3J0cy5yZXN0cmljdE92ZXIgPSBleHBvcnRzLnJlc3RyaWN0VW5kZXIgPSBleHBvcnRzLmludGVycG9sYXRlID0gZXhwb3J0cy5jb21wb3NlID0gZXhwb3J0cy5hcHBlbmRVbml0ID0gdW5kZWZpbmVkO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpO1xuXG4vKipcbiAqIEFwcGVuZCBVbml0XG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGFwcGVuZCB0aGUgdW5pdCB0byBhIGdpdmVuIHZhbHVlXG4gKiBhcHBlbmRVbml0KCdweCcpKDIwKSAtPiAnMjBweCdcbiAqIEBwYXJhbSAge3N0cmluZ30gdW5pdClcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xudmFyIGFwcGVuZFVuaXQgPSBleHBvcnRzLmFwcGVuZFVuaXQgPSBmdW5jdGlvbiAodW5pdCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gJycgKyB2ICsgdW5pdDtcbiAgfTtcbn07XG5cbi8qKlxuICogQ29tcG9zZVxuICogQ29tcG9zZSBvdGhlciB0cmFuc2Zvcm1lcnMgdG8gcnVuIGxpbmVhcmlseVxuICogY29tcG9zZShtaW4oMjApLCBtYXgoNDApKVxuICogQHBhcmFtICB7Li4uZnVuY3Rpb25zfSB0cmFuc2Zvcm1lcnNcbiAqIEByZXR1cm4ge2Z1bmN0aW9ufVxuICovXG52YXIgY29tcG9zZSA9IGV4cG9ydHMuY29tcG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHRyYW5zZm9ybWVycyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHRyYW5zZm9ybWVyc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHZhciBudW1UcmFuc2Zvcm1lcnMgPSB0cmFuc2Zvcm1lcnMubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICh2LCB2YWx1ZSkge1xuICAgIGZvciAoaSA9IDA7IGkgPCBudW1UcmFuc2Zvcm1lcnM7IGkrKykge1xuICAgICAgdiA9IHRyYW5zZm9ybWVyc1tpXSh2LCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHY7XG4gIH07XG59O1xuXG52YXIgaW50ZXJwb2xhdGUgPSBleHBvcnRzLmludGVycG9sYXRlID0gZnVuY3Rpb24gKGlucHV0LCBvdXRwdXQsIHJhbmdlRWFzaW5nKSB7XG4gIHZhciByYW5nZUxlbmd0aCA9IGlucHV0Lmxlbmd0aDtcbiAgdmFyIGZpbmFsSW5kZXggPSByYW5nZUxlbmd0aCAtIDE7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgLy8gSWYgdmFsdWUgb3V0c2lkZSBtaW5pbXVtIHJhbmdlLCBxdWlja2x5IHJldHVyblxuICAgIGlmICh2IDw9IGlucHV0WzBdKSB7XG4gICAgICByZXR1cm4gb3V0cHV0WzBdO1xuICAgIH1cblxuICAgIC8vIElmIHZhbHVlIG91dHNpZGUgbWF4aW11bSByYW5nZSwgcXVpY2tseSByZXR1cm5cbiAgICBpZiAodiA+PSBpbnB1dFtmaW5hbEluZGV4XSkge1xuICAgICAgcmV0dXJuIG91dHB1dFtmaW5hbEluZGV4XTtcbiAgICB9XG5cbiAgICB2YXIgaSA9IDA7XG5cbiAgICAvLyBGaW5kIGluZGV4IG9mIHJhbmdlIHN0YXJ0XG4gICAgZm9yICg7IGkgPCByYW5nZUxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaW5wdXRbaV0gPiB2IHx8IGkgPT09IGZpbmFsSW5kZXgpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByb2dyZXNzSW5SYW5nZSA9ICgwLCBfY2FsYy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSkodiwgaW5wdXRbaV0sIGlucHV0W2kgKyAxXSk7XG4gICAgdmFyIGVhc2VkUHJvZ3Jlc3MgPSByYW5nZUVhc2luZyA/IHJhbmdlRWFzaW5nW2ldKHByb2dyZXNzSW5SYW5nZSkgOiBwcm9ncmVzc0luUmFuZ2U7XG4gICAgcmV0dXJuICgwLCBfY2FsYy5nZXRWYWx1ZUZyb21Qcm9ncmVzcykoZWFzZWRQcm9ncmVzcywgb3V0cHV0W2ldLCBvdXRwdXRbaSArIDFdKTtcbiAgfTtcbn07XG5cbi8qKlxuICogUmVzdHJpY3QgdmFsdWUgYmV0d2VlblxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCByZXN0cmljdCBhIGdpdmVuIHZhbHVlIGJldHdlZW4gYG1pbmAgYW5kIGBtYXhgXG4gKiBAcGFyYW0gIHtudW1iZXJ9IG1pblxuICogQHBhcmFtICB7bnVtYmVyfSBtYXhcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xudmFyIHJlc3RyaWN0VW5kZXIgPSBleHBvcnRzLnJlc3RyaWN0VW5kZXIgPSBmdW5jdGlvbiAobWF4KSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiBNYXRoLm1pbih2LCBtYXgpO1xuICB9O1xufTtcbnZhciByZXN0cmljdE92ZXIgPSBleHBvcnRzLnJlc3RyaWN0T3ZlciA9IGZ1bmN0aW9uIChtaW4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIE1hdGgubWF4KHYsIG1pbik7XG4gIH07XG59O1xudmFyIHJlc3RyaWN0QmV0d2VlbiA9IGV4cG9ydHMucmVzdHJpY3RCZXR3ZWVuID0gZnVuY3Rpb24gKG1pbiwgbWF4KSB7XG4gIHJldHVybiBjb21wb3NlKHJlc3RyaWN0T3ZlcihtaW4pLCByZXN0cmljdFVuZGVyKG1heCkpO1xufTtcblxudmFyIHN0ZXBwZWRNb3Rpb24gPSBleHBvcnRzLnN0ZXBwZWRNb3Rpb24gPSBmdW5jdGlvbiAobWluLCBtYXgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7fTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlM5bWFXeDBaWEp6TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPMEZCUVVFN096czdPenM3T3p0QlFWTlBMRWxCUVUwc2EwTkJRV0VzVlVGQlF5eEpRVUZFTzFOQlFWVXNWVUZCUXl4RFFVRkVPMmRDUVVGVkxFbEJRVWs3UjBGQlpEdERRVUZXT3pzN096czdPenM3UVVGVGJrSXNTVUZCVFN3MFFrRkJWU3haUVVGeFFqdHZRMEZCYWtJN08wZEJRV2xDT3p0QlFVTXhReXhOUVVGTkxHdENRVUZyUWl4aFFVRmhMRTFCUVdJc1EwRkVhMEk3UVVGRk1VTXNUVUZCU1N4SlFVRkpMRU5CUVVvc1EwRkdjME03TzBGQlNURkRMRk5CUVU4c1ZVRkJReXhEUVVGRUxFVkJRVWtzUzBGQlNpeEZRVUZqTzBGQlEyNUNMRk5CUVVzc1NVRkJTU3hEUVVGS0xFVkJRVThzU1VGQlNTeGxRVUZLTEVWQlFYRkNMRWRCUVdwRExFVkJRWE5ETzBGQlEzQkRMRlZCUVVrc1lVRkJZU3hEUVVGaUxFVkJRV2RDTEVOQlFXaENMRVZCUVcxQ0xFdEJRVzVDTEVOQlFVb3NRMEZFYjBNN1MwRkJkRU03TzBGQlNVRXNWMEZCVHl4RFFVRlFMRU5CVEcxQ08wZEJRV1FzUTBGS2JVTTdRMEZCY2tJN08wRkJZV2hDTEVsQlFVMHNiME5CUVdNc1ZVRkJReXhMUVVGRUxFVkJRVkVzVFVGQlVpeEZRVUZuUWl4WFFVRm9RaXhGUVVGblF6dEJRVU42UkN4TlFVRk5MR05CUVdNc1RVRkJUU3hOUVVGT0xFTkJSSEZETzBGQlJYcEVMRTFCUVUwc1lVRkJZU3hqUVVGakxFTkJRV1FzUTBGR2MwTTdPMEZCU1hwRUxGTkJRVThzVlVGQlF5eERRVUZFTEVWQlFVODdPMEZCUlZvc1VVRkJTU3hMUVVGTExFMUJRVTBzUTBGQlRpeERRVUZNTEVWQlFXVTdRVUZEYWtJc1lVRkJUeXhQUVVGUExFTkJRVkFzUTBGQlVDeERRVVJwUWp0TFFVRnVRanM3TzBGQlJsa3NVVUZQVWl4TFFVRkxMRTFCUVUwc1ZVRkJUaXhEUVVGTUxFVkJRWGRDTzBGQlF6RkNMR0ZCUVU4c1QwRkJUeXhWUVVGUUxFTkJRVkFzUTBGRU1FSTdTMEZCTlVJN08wRkJTVUVzVVVGQlNTeEpRVUZKTEVOQlFVbzdPenRCUVZoUkxGZEJZMHdzU1VGQlNTeFhRVUZLTEVWQlFXbENMRWRCUVhoQ0xFVkJRVFpDTzBGQlF6TkNMRlZCUVVrc1RVRkJUU3hEUVVGT0xFbEJRVmNzUTBGQldDeEpRVUZuUWl4TlFVRk5MRlZCUVU0c1JVRkJhMEk3UVVGRGNFTXNZMEZFYjBNN1QwRkJkRU03UzBGRVJqczdRVUZOUVN4UlFVRk5MR3RDUVVGclFpeG5RMEZCY1VJc1EwRkJja0lzUlVGQmQwSXNUVUZCVFN4RFFVRk9MRU5CUVhoQ0xFVkJRV3RETEUxQlFVMHNTVUZCU1N4RFFVRktMRU5CUVhoRExFTkJRV3hDTEVOQmNFSk5PMEZCY1VKYUxGRkJRVTBzWjBKQlFXZENMR05CUVdkQ0xGbEJRVmtzUTBGQldpeEZRVUZsTEdWQlFXWXNRMEZCYUVJc1IwRkJhMFFzWlVGQmJFUXNRMEZ5UWxZN1FVRnpRbG9zVjBGQlR5eG5RMEZCY1VJc1lVRkJja0lzUlVGQmIwTXNUMEZCVHl4RFFVRlFMRU5CUVhCRExFVkJRU3RETEU5QlFVOHNTVUZCU1N4RFFVRktMRU5CUVhSRUxFTkJRVkFzUTBGMFFsazdSMEZCVUN4RFFVcHJSRHREUVVGb1F6czdPenM3T3pzN08wRkJjVU53UWl4SlFVRk5MSGREUVVGblFpeFZRVUZETEVkQlFVUTdVMEZCVXl4VlFVRkRMRU5CUVVRN1YwRkJUeXhMUVVGTExFZEJRVXdzUTBGQlV5eERRVUZVTEVWQlFWa3NSMEZCV2p0SFFVRlFPME5CUVZRN1FVRkRkRUlzU1VGQlRTeHpRMEZCWlN4VlFVRkRMRWRCUVVRN1UwRkJVeXhWUVVGRExFTkJRVVE3VjBGQlR5eExRVUZMTEVkQlFVd3NRMEZCVXl4RFFVRlVMRVZCUVZrc1IwRkJXanRIUVVGUU8wTkJRVlE3UVVGRGNrSXNTVUZCVFN3MFEwRkJhMElzVlVGQlF5eEhRVUZFTEVWQlFVMHNSMEZCVGp0VFFVRmpMRkZCUVZFc1lVRkJZU3hIUVVGaUxFTkJRVklzUlVGQk1rSXNZMEZCWXl4SFFVRmtMRU5CUVROQ08wTkJRV1E3TzBGQlJYaENMRWxCUVUwc2QwTkJRV2RDTEZWQlFVTXNSMEZCUkN4RlFVRk5MRWRCUVU0N1UwRkJZeXhWUVVGRExFTkJRVVFzUlVGQlR5eEZRVUZRTzBOQlFXUWlMQ0ptYVd4bElqb2labWxzZEdWeWN5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdleUJuWlhSUWNtOW5jbVZ6YzBaeWIyMVdZV3gxWlN3Z1oyVjBWbUZzZFdWR2NtOXRVSEp2WjNKbGMzTWdmU0JtY205dElDY3VMaTlwYm1NdlkyRnNZeWM3WEc1Y2JpOHFLbHh1SUNvZ1FYQndaVzVrSUZWdWFYUmNiaUFxSUVOeVpXRjBaWE1nWVNCbWRXNWpkR2x2YmlCMGFHRjBJSGRwYkd3Z1lYQndaVzVrSUhSb1pTQjFibWwwSUhSdklHRWdaMmwyWlc0Z2RtRnNkV1ZjYmlBcUlHRndjR1Z1WkZWdWFYUW9KM0I0Snlrb01qQXBJQzArSUNjeU1IQjRKMXh1SUNvZ1FIQmhjbUZ0SUNCN2MzUnlhVzVuZlNCMWJtbDBLVnh1SUNvZ1FISmxkSFZ5YmlCN2JuVnRZbVZ5ZlZ4dUlDb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ1lYQndaVzVrVlc1cGRDQTlJQ2gxYm1sMEtTQTlQaUFvZGlrZ1BUNGdZQ1I3ZG4wa2UzVnVhWFI5WUR0Y2JseHVMeW9xWEc0Z0tpQkRiMjF3YjNObFhHNGdLaUJEYjIxd2IzTmxJRzkwYUdWeUlIUnlZVzV6Wm05eWJXVnljeUIwYnlCeWRXNGdiR2x1WldGeWFXeDVYRzRnS2lCamIyMXdiM05sS0cxcGJpZ3lNQ2tzSUcxaGVDZzBNQ2twWEc0Z0tpQkFjR0Z5WVcwZ0lIc3VMaTVtZFc1amRHbHZibk45SUhSeVlXNXpabTl5YldWeWMxeHVJQ29nUUhKbGRIVnliaUI3Wm5WdVkzUnBiMjU5WEc0Z0tpOWNibVY0Y0c5eWRDQmpiMjV6ZENCamIyMXdiM05sSUQwZ0tDNHVMblJ5WVc1elptOXliV1Z5Y3lrZ1BUNGdlMXh1SUNCamIyNXpkQ0J1ZFcxVWNtRnVjMlp2Y20xbGNuTWdQU0IwY21GdWMyWnZjbTFsY25NdWJHVnVaM1JvTzF4dUlDQnNaWFFnYVNBOUlEQTdYRzVjYmlBZ2NtVjBkWEp1SUNoMkxDQjJZV3gxWlNrZ1BUNGdlMXh1SUNBZ0lHWnZjaUFvYVNBOUlEQTdJR2tnUENCdWRXMVVjbUZ1YzJadmNtMWxjbk03SUdrckt5a2dlMXh1SUNBZ0lDQWdkaUE5SUhSeVlXNXpabTl5YldWeWMxdHBYU2gyTENCMllXeDFaU2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjbVYwZFhKdUlIWTdYRzRnSUgwN1hHNTlPMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdhVzUwWlhKd2IyeGhkR1VnUFNBb2FXNXdkWFFzSUc5MWRIQjFkQ3dnY21GdVoyVkZZWE5wYm1jcElEMCtJSHRjYmlBZ1kyOXVjM1FnY21GdVoyVk1aVzVuZEdnZ1BTQnBibkIxZEM1c1pXNW5kR2c3WEc0Z0lHTnZibk4wSUdacGJtRnNTVzVrWlhnZ1BTQnlZVzVuWlV4bGJtZDBhQ0F0SURFN1hHNWNiaUFnY21WMGRYSnVJQ2gyS1NBOVBpQjdYRzRnSUNBZ0x5OGdTV1lnZG1Gc2RXVWdiM1YwYzJsa1pTQnRhVzVwYlhWdElISmhibWRsTENCeGRXbGphMng1SUhKbGRIVnlibHh1SUNBZ0lHbG1JQ2gySUR3OUlHbHVjSFYwV3pCZEtTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z2IzVjBjSFYwV3pCZE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUM4dklFbG1JSFpoYkhWbElHOTFkSE5wWkdVZ2JXRjRhVzExYlNCeVlXNW5aU3dnY1hWcFkydHNlU0J5WlhSMWNtNWNiaUFnSUNCcFppQW9kaUErUFNCcGJuQjFkRnRtYVc1aGJFbHVaR1Y0WFNrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUc5MWRIQjFkRnRtYVc1aGJFbHVaR1Y0WFR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JzWlhRZ2FTQTlJREE3WEc1Y2JpQWdJQ0F2THlCR2FXNWtJR2x1WkdWNElHOW1JSEpoYm1kbElITjBZWEowWEc0Z0lDQWdabTl5SUNnN0lHa2dQQ0J5WVc1blpVeGxibWQwYURzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0JwWmlBb2FXNXdkWFJiYVYwZ1BpQjJJSHg4SUdrZ1BUMDlJR1pwYm1Gc1NXNWtaWGdwSUh0Y2JpQWdJQ0FnSUNBZ1luSmxZV3M3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmVnh1WEc0Z0lDQWdZMjl1YzNRZ2NISnZaM0psYzNOSmJsSmhibWRsSUQwZ1oyVjBVSEp2WjNKbGMzTkdjbTl0Vm1Gc2RXVW9kaXdnYVc1d2RYUmJhVjBzSUdsdWNIVjBXMmtnS3lBeFhTazdYRzRnSUNBZ1kyOXVjM1FnWldGelpXUlFjbTluY21WemN5QTlJQ2h5WVc1blpVVmhjMmx1WnlrZ1B5QnlZVzVuWlVWaGMybHVaMXRwWFNod2NtOW5jbVZ6YzBsdVVtRnVaMlVwSURvZ2NISnZaM0psYzNOSmJsSmhibWRsTzF4dUlDQWdJSEpsZEhWeWJpQm5aWFJXWVd4MVpVWnliMjFRY205bmNtVnpjeWhsWVhObFpGQnliMmR5WlhOekxDQnZkWFJ3ZFhSYmFWMHNJRzkxZEhCMWRGdHBJQ3NnTVYwcE8xeHVJQ0I5TzF4dWZUdGNibHh1THlvcVhHNGdLaUJTWlhOMGNtbGpkQ0IyWVd4MVpTQmlaWFIzWldWdVhHNGdLaUJEY21WaGRHVnpJR0VnWm5WdVkzUnBiMjRnZEdoaGRDQjNhV3hzSUhKbGMzUnlhV04wSUdFZ1oybDJaVzRnZG1Gc2RXVWdZbVYwZDJWbGJpQmdiV2x1WUNCaGJtUWdZRzFoZUdCY2JpQXFJRUJ3WVhKaGJTQWdlMjUxYldKbGNuMGdiV2x1WEc0Z0tpQkFjR0Z5WVcwZ0lIdHVkVzFpWlhKOUlHMWhlRnh1SUNvZ1FISmxkSFZ5YmlCN2JuVnRZbVZ5ZlZ4dUlDb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2NtVnpkSEpwWTNSVmJtUmxjaUE5SUNodFlYZ3BJRDArSUNoMktTQTlQaUJOWVhSb0xtMXBiaWgyTENCdFlYZ3BPMXh1Wlhod2IzSjBJR052Ym5OMElISmxjM1J5YVdOMFQzWmxjaUE5SUNodGFXNHBJRDArSUNoMktTQTlQaUJOWVhSb0xtMWhlQ2gyTENCdGFXNHBPMXh1Wlhod2IzSjBJR052Ym5OMElISmxjM1J5YVdOMFFtVjBkMlZsYmlBOUlDaHRhVzRzSUcxaGVDa2dQVDRnWTI5dGNHOXpaU2h5WlhOMGNtbGpkRTkyWlhJb2JXbHVLU3dnY21WemRISnBZM1JWYm1SbGNpaHRZWGdwS1R0Y2JseHVaWGh3YjNKMElHTnZibk4wSUhOMFpYQndaV1JOYjNScGIyNGdQU0FvYldsdUxDQnRZWGdwSUQwK0lDaDJLU0E5UGlCN1hHNGdJRnh1ZlRzaVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlL2ZpbHRlcnMuanNcbiAqKiBtb2R1bGUgaWQgPSAxNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIiLCJmaWxlIjoicG9wbW90aW9uLmdsb2JhbC5qcyJ9