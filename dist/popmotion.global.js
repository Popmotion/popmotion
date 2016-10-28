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
	exports.color = exports.easing = exports.pointer = exports.track = exports.tween = exports.stagger = exports.physics = exports.group = exports.delay = exports.chain = exports.Action = exports.value = exports.currentFrameTimestamp = exports.timeSinceLastFrame = exports.cancelOnFrameEnd = exports.cancelOnFrameRender = exports.cancelOnFrameUpdate = exports.cancelOnFrameStart = exports.onFrameEnd = exports.onFrameRender = exports.onFrameUpdate = exports.onFrameStart = undefined;
	
	var _framesync = __webpack_require__(10);
	
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
	
	var _types = __webpack_require__(25);
	
	Object.defineProperty(exports, 'color', {
	  enumerable: true,
	  get: function () {
	    return _types.color;
	  }
	});
	
	var _value2 = __webpack_require__(11);
	
	var _value3 = _interopRequireDefault(_value2);
	
	var _actions = __webpack_require__(12);
	
	var _actions2 = _interopRequireDefault(_actions);
	
	var _chain2 = __webpack_require__(2);
	
	var _chain3 = _interopRequireDefault(_chain2);
	
	var _delay2 = __webpack_require__(3);
	
	var _delay3 = _interopRequireDefault(_delay2);
	
	var _group2 = __webpack_require__(4);
	
	var _group3 = _interopRequireDefault(_group2);
	
	var _physics2 = __webpack_require__(5);
	
	var _physics3 = _interopRequireDefault(_physics2);
	
	var _stagger2 = __webpack_require__(6);
	
	var _stagger3 = _interopRequireDefault(_stagger2);
	
	var _tween2 = __webpack_require__(7);
	
	var _tween3 = _interopRequireDefault(_tween2);
	
	var _track2 = __webpack_require__(8);
	
	var _track3 = _interopRequireDefault(_track2);
	
	var _pointer2 = __webpack_require__(9);
	
	var _pointer3 = _interopRequireDefault(_pointer2);
	
	var _easing2 = __webpack_require__(13);
	
	var _easing = _interopRequireWildcard(_easing2);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.value = _value3.default;
	exports.Action = _actions2.default;
	exports.chain = _chain3.default;
	exports.delay = _delay3.default;
	exports.group = _group3.default;
	exports.physics = _physics3.default;
	exports.stagger = _stagger3.default;
	exports.tween = _tween3.default;
	exports.track = _track3.default;
	exports.pointer = _pointer3.default;
	exports.easing = _easing;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wb3Btb3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztzQkFFRTs7Ozs7O3NCQUNBOzs7Ozs7c0JBQ0E7Ozs7OztzQkFDQTs7Ozs7O3NCQUNBOzs7Ozs7c0JBQ0E7Ozs7OztzQkFDQTs7Ozs7O3NCQUNBOzs7Ozs7c0JBQ0E7Ozs7OztzQkFDQTs7Ozs7Ozs7O2tCQWVPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBWkY7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDSyIsImZpbGUiOiJwb3Btb3Rpb24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRnJhbWVzeW5jIHNjaGVkdWxlcnNcbmV4cG9ydCB7XG4gIG9uRnJhbWVTdGFydCxcbiAgb25GcmFtZVVwZGF0ZSxcbiAgb25GcmFtZVJlbmRlcixcbiAgb25GcmFtZUVuZCxcbiAgY2FuY2VsT25GcmFtZVN0YXJ0LFxuICBjYW5jZWxPbkZyYW1lVXBkYXRlLFxuICBjYW5jZWxPbkZyYW1lUmVuZGVyLFxuICBjYW5jZWxPbkZyYW1lRW5kLFxuICB0aW1lU2luY2VMYXN0RnJhbWUsXG4gIGN1cnJlbnRGcmFtZVRpbWVzdGFtcFxufSBmcm9tICcuL2ZyYW1lc3luYyc7XG5cbmV4cG9ydCB2YWx1ZSBmcm9tICcuL3ZhbHVlJztcbmV4cG9ydCBBY3Rpb24gZnJvbSAnLi9hY3Rpb25zJztcbmV4cG9ydCBjaGFpbiBmcm9tICcuL2FjdGlvbnMvY2hhaW4nO1xuZXhwb3J0IGRlbGF5IGZyb20gJy4vYWN0aW9ucy9kZWxheSc7XG5leHBvcnQgZ3JvdXAgZnJvbSAnLi9hY3Rpb25zL2dyb3VwJztcbmV4cG9ydCBwaHlzaWNzIGZyb20gJy4vYWN0aW9ucy9waHlzaWNzJztcbmV4cG9ydCBzdGFnZ2VyIGZyb20gJy4vYWN0aW9ucy9zdGFnZ2VyJztcbmV4cG9ydCB0d2VlbiBmcm9tICcuL2FjdGlvbnMvdHdlZW4nO1xuZXhwb3J0IHRyYWNrIGZyb20gJy4vYWN0aW9ucy90cmFjayc7XG5leHBvcnQgcG9pbnRlciBmcm9tICcuL2lucHV0L3BvaW50ZXInO1xuZXhwb3J0ICogYXMgZWFzaW5nIGZyb20gJy4vZWFzaW5nJztcblxuZXhwb3J0IHsgY29sb3IgfSBmcm9tICcuL3ZhbHVlL3R5cGVzJztcblxuXG4vL2V4cG9ydCBjc3NSZW5kZXIgZnJvbSAnLi9yZW5kZXIvY3NzJztcblxuXG4vLyBleHBvcnQgdGltZWxpbmUgZnJvbSAnLi9pbmMvdGltZWxpbmUnO1xuXG4vLyAvLyBBZGFwdGVyc1xuLy8gZXhwb3J0IGNyZWF0ZUFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyL2FkYXB0ZXInO1xuLy8gZXhwb3J0IGF0dHIgZnJvbSAnLi9hZGFwdGVyL2F0dHItYWRhcHRlcic7XG4vLyBleHBvcnQgY3NzIGZyb20gJy4vYWRhcHRlci9jc3MtYWRhcHRlcic7XG4vLyBleHBvcnQgb2JqZWN0IGZyb20gJy4vYWRhcHRlci9vYmplY3QtYWRhcHRlcic7XG4vLyBleHBvcnQgc3ZnIGZyb20gJy4vYWRhcHRlci9zdmctYWRhcHRlcic7XG4vLyBleHBvcnQgc3ZnUGF0aCBmcm9tICcuL2FkYXB0ZXIvc3ZnLXBhdGgtYWRhcHRlcic7XG5cbi8vIC8vIFZhbHVlIHR5cGVzXG4vLyBpbXBvcnQgYWxwaGEgZnJvbSAnLi92YWx1ZS10eXBlcy9hbHBoYSc7XG4vLyBpbXBvcnQgYW5nbGUgZnJvbSAnLi92YWx1ZS10eXBlcy9hbmdsZSc7XG4vLyBpbXBvcnQgY29sb3IgZnJvbSAnLi92YWx1ZS10eXBlcy9jb2xvcic7XG4vLyBpbXBvcnQgY29tcGxleCBmcm9tICcuL3ZhbHVlLXR5cGVzL2NvbXBsZXgnO1xuLy8gaW1wb3J0IGhleCBmcm9tICcuL3ZhbHVlLXR5cGVzL2hleCc7XG4vLyBpbXBvcnQgaHNsIGZyb20gJy4vdmFsdWUtdHlwZXMvaHNsJztcbi8vIGltcG9ydCBweCBmcm9tICcuL3ZhbHVlLXR5cGVzL3B4Jztcbi8vIGltcG9ydCByZ2IgZnJvbSAnLi92YWx1ZS10eXBlcy9yZ2InO1xuLy8gaW1wb3J0IHNjYWxlIGZyb20gJy4vdmFsdWUtdHlwZXMvc2NhbGUnO1xuLy8gaW1wb3J0IHNoYWRvdyBmcm9tICcuL3ZhbHVlLXR5cGVzL3NoYWRvdyc7XG4vLyBpbXBvcnQgdW5pdCBmcm9tICcuL3ZhbHVlLXR5cGVzL3VuaXQnO1xuLy8gZXhwb3J0IGNvbnN0IHZhbHVlVHlwZSA9IHsgYWxwaGEsIGFuZ2xlLCBjb2xvciwgY29tcGxleCwgaGV4LCBoc2wsIHB4LCByZ2IsIHNjYWxlLCBzaGFkb3csIHVuaXQgfTtcblxuLy8gLy8gVHJhbnNmb3JtZXJzXG4vLyBleHBvcnQgKiBhcyB0cmFuc2Zvcm1lcnMgZnJvbSAnLi9pbmMvdHJhbnNmb3JtZXJzJztcblxuLy8gLypcbi8vICAgUmV0dXJucyBhIHZlcnNpb24gb2YgdGhlIEFjdGlvbiBib3VuZCB0byBhIEZsb3dcblxuLy8gICBXZSdyZSBhZGRpbmcgYG9uYCBoZXJlIGJlY2F1c2UgRmxvdyBleHRlbmRzIEFjdGlvbixcbi8vICAgb3RoZXJ3aXNlIGNyZWF0aW5nIGEgY2lyY3VsYXIgbW9kdWxhciBkZXBlbmRlbmN5LiBGdXR1cmVcbi8vICAgcmVmYWN0b3JpbmcsIGllIG1vdmluZyB0byBhIGNvbXBvc2l0aW9uYWwgbW9kZWwgd2lsbFxuLy8gICByZW1vdmUgdGhlIG5lZWQgZm9yIHVzIHRvIGRvIHRoaXMgaGVyZS5cbi8vICovXG4vLyBBY3Rpb24ucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbi8vICAgaWYgKCFlbGVtZW50LmNvbm5lY3QpIHtcbi8vICAgICBlbGVtZW50ID0gZ2V0RmxvdyhlbGVtZW50KTtcbi8vICAgfVxuXG4vLyAgIHJldHVybiBlbGVtZW50LmNvbm5lY3QodGhpcyk7XG4vLyB9O1xuXG4vLyBleHBvcnQgeyBBY3Rpb24gfTsiXX0=

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _ = __webpack_require__(12);
	
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
	    }
	  };
	
	  Chain.prototype.playCurrent = function playCurrent() {
	    var _props2 = this.props;
	    var i = _props2.i;
	    var order = _props2.order;
	
	    order[i].onComplete = this.playNext;
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
	
	exports.default = function (order) {
	  return new Chain({ order: order });
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2NoYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRU07OztBQUNKLFdBREksS0FDSixDQUFZLEtBQVosRUFBbUI7MEJBRGYsT0FDZTs7aURBQ2pCLG1CQUFNLEtBQU4sR0FEaUI7O0FBRWpCLFVBQUssUUFBTCxHQUFnQixNQUFLLFFBQUwsQ0FBYyxJQUFkLE9BQWhCLENBRmlCOztHQUFuQjs7QUFESSxrQkFNSiw2QkFBVTtBQUNSLFNBQUssS0FBTCxDQUFXLENBQVgsR0FBZSxDQUFmLENBRFE7QUFFUixTQUFLLFdBQUwsR0FGUTs7O0FBTk4sa0JBV0osK0JBQVc7aUJBQ1ksS0FBSyxLQUFMLENBRFo7UUFDRCxhQURDO1FBQ0UscUJBREY7O0FBRVQsUUFBSSxJQUFJLE1BQU0sTUFBTixHQUFlLENBQWYsRUFBa0I7QUFDeEIsV0FBSyxLQUFMLENBQVcsQ0FBWCxHQUR3QjtBQUV4QixXQUFLLFdBQUwsR0FGd0I7S0FBMUI7OztBQWJFLGtCQW1CSixxQ0FBYztrQkFDUyxLQUFLLEtBQUwsQ0FEVDtRQUNKLGNBREk7UUFDRCxzQkFEQzs7QUFFWixVQUFNLENBQU4sRUFBUyxVQUFULEdBQXNCLEtBQUssUUFBTCxDQUZWO0FBR1osVUFBTSxDQUFOLEVBQVMsS0FBVCxHQUhZOzs7QUFuQlYsa0JBeUJKLDJCQUFTO2tCQUNjLEtBQUssS0FBTCxDQURkO1FBQ0MsY0FERDtRQUNJLHNCQURKOztBQUVQLFVBQU0sQ0FBTixFQUFTLElBQVQsR0FGTzs7O1NBekJMOzs7a0JBK0JTLFVBQUMsS0FBRDtTQUFXLElBQUksS0FBSixDQUFVLEVBQUUsWUFBRixFQUFWO0NBQVgiLCJmaWxlIjoiY2hhaW4uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdGlvbiBmcm9tICcuLyc7XG5cbmNsYXNzIENoYWluIGV4dGVuZHMgQWN0aW9uIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5wbGF5TmV4dCA9IHRoaXMucGxheU5leHQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIG9uU3RhcnQoKSB7XG4gICAgdGhpcy5wcm9wcy5pID0gMDtcbiAgICB0aGlzLnBsYXlDdXJyZW50KCk7XG4gIH1cblxuICBwbGF5TmV4dCgpIHtcbiAgICBjb25zdCB7IGksIG9yZGVyIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChpIDwgb3JkZXIubGVuZ3RoIC0gMSkge1xuICAgICAgdGhpcy5wcm9wcy5pKys7XG4gICAgICB0aGlzLnBsYXlDdXJyZW50KCk7XG4gICAgfVxuICB9XG5cbiAgcGxheUN1cnJlbnQoKSB7XG4gICAgY29uc3QgeyBpLCBvcmRlciB9ID0gdGhpcy5wcm9wcztcbiAgICBvcmRlcltpXS5vbkNvbXBsZXRlID0gdGhpcy5wbGF5TmV4dDtcbiAgICBvcmRlcltpXS5zdGFydCgpO1xuICB9XG5cbiAgb25TdG9wKCkge1xuICAgIGNvbnN0IHsgaSwgb3JkZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgb3JkZXJbaV0uc3RvcCgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IChvcmRlcikgPT4gbmV3IENoYWluKHsgb3JkZXIgfSk7XG4iXX0=

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _tween = __webpack_require__(7);
	
	var _tween2 = _interopRequireDefault(_tween);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (duration) {
	  return (0, _tween2.default)({ from: 0, duration: duration });
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2RlbGF5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7Ozs7O2tCQUVlLFVBQUMsUUFBRDtTQUFjLHFCQUFNLEVBQUUsTUFBTSxDQUFOLEVBQVMsa0JBQVgsRUFBTjtDQUFkIiwiZmlsZSI6ImRlbGF5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0d2VlbiBmcm9tICcuL3R3ZWVuJztcblxuZXhwb3J0IGRlZmF1bHQgKGR1cmF0aW9uKSA9PiB0d2Vlbih7IGZyb206IDAsIGR1cmF0aW9uIH0pO1xuIl19

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _ = __webpack_require__(12);
	
	var _2 = _interopRequireDefault(_);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var startAction = function (action) {
	  return action.stop();
	};
	var stopAction = function (action) {
	  return action.stop();
	};
	
	var Group = function (_Action) {
	  _inherits(Group, _Action);
	
	  function Group() {
	    _classCallCheck(this, Group);
	
	    return _possibleConstructorReturn(this, _Action.apply(this, arguments));
	  }
	
	  Group.prototype.onStart = function onStart() {
	    this.props.actions.forEach(startAction);
	  };
	
	  Group.prototype.onStop = function onStop() {
	    this.props.actions.forEach(stopAction);
	  };
	
	  Group.prototype.addAction = function addAction(action) {
	    var actions = this.props.actions;
	
	
	    if (actions.indexOf(action) === -1) {
	      actions.push(action);
	    }
	  };
	
	  return Group;
	}(_2.default);
	
	exports.default = function (actions) {
	  return new Group({ actions: actions });
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2dyb3VwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTSxjQUFjLFVBQUMsTUFBRDtTQUFZLE9BQU8sSUFBUDtDQUFaO0FBQ3BCLElBQU0sYUFBYSxVQUFDLE1BQUQ7U0FBWSxPQUFPLElBQVA7Q0FBWjs7SUFFYjs7Ozs7Ozs7O2tCQUNKLDZCQUFVO0FBQ1IsU0FBSyxLQUFMLENBQVcsT0FBWCxDQUFtQixPQUFuQixDQUEyQixXQUEzQixFQURROzs7QUFETixrQkFLSiwyQkFBUztBQUNQLFNBQUssS0FBTCxDQUFXLE9BQVgsQ0FBbUIsT0FBbkIsQ0FBMkIsVUFBM0IsRUFETzs7O0FBTEwsa0JBU0osK0JBQVUsUUFBUTtRQUNSLFVBQVksS0FBSyxLQUFMLENBQVosUUFEUTs7O0FBR2hCLFFBQUksUUFBUSxPQUFSLENBQWdCLE1BQWhCLE1BQTRCLENBQUMsQ0FBRCxFQUFJO0FBQ2xDLGNBQVEsSUFBUixDQUFhLE1BQWIsRUFEa0M7S0FBcEM7OztTQVpFOzs7a0JBa0JTLFVBQUMsT0FBRDtTQUFhLElBQUksS0FBSixDQUFVLEVBQUUsZ0JBQUYsRUFBVjtDQUFiIiwiZmlsZSI6Imdyb3VwLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY3Rpb24gZnJvbSAnLi8nO1xuXG5jb25zdCBzdGFydEFjdGlvbiA9IChhY3Rpb24pID0+IGFjdGlvbi5zdG9wKCk7XG5jb25zdCBzdG9wQWN0aW9uID0gKGFjdGlvbikgPT4gYWN0aW9uLnN0b3AoKTtcblxuY2xhc3MgR3JvdXAgZXh0ZW5kcyBBY3Rpb24ge1xuICBvblN0YXJ0KCkge1xuICAgIHRoaXMucHJvcHMuYWN0aW9ucy5mb3JFYWNoKHN0YXJ0QWN0aW9uKTtcbiAgfVxuXG4gIG9uU3RvcCgpIHtcbiAgICB0aGlzLnByb3BzLmFjdGlvbnMuZm9yRWFjaChzdG9wQWN0aW9uKTtcbiAgfVxuXG4gIGFkZEFjdGlvbihhY3Rpb24pIHtcbiAgICBjb25zdCB7IGFjdGlvbnMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoYWN0aW9ucy5pbmRleE9mKGFjdGlvbikgPT09IC0xKSB7XG4gICAgICBhY3Rpb25zLnB1c2goYWN0aW9uKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKGFjdGlvbnMpID0+IG5ldyBHcm91cCh7IGFjdGlvbnMgfSk7XG4iXX0=

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _ = __webpack_require__(12);
	
	var _2 = _interopRequireDefault(_);
	
	var _framesync = __webpack_require__(10);
	
	var _calc = __webpack_require__(15);
	
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
	    var _props = this.props;
	    var acceleration = _props.acceleration;
	    var autoStopSpeed = _props.autoStopSpeed;
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
	
	    if (!newVelocity || Math.abs(newVelocity) <= autoStopSpeed) {
	      this.complete();
	    }
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL3BoeXNpY3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFFTTs7Ozs7Ozs7O29CQVFKLCtCQUFXO2lCQUMrRCxLQUFLLEtBQUwsQ0FEL0Q7UUFDRCxtQ0FEQztRQUNhLHFDQURiO1FBQzRCLDJCQUQ1QjtRQUNzQywyQkFEdEM7UUFDZ0QsdUJBRGhEO1FBQ3dELGVBRHhEOztBQUVULFFBQUksY0FBYyxRQUFkLENBRks7QUFHVCxRQUFNLFVBQVUsb0NBQVY7OztBQUhHLFFBTUwsWUFBSixFQUFrQjtBQUNoQixxQkFBZSx5QkFBYyxZQUFkLEVBQTRCLE9BQTVCLENBQWYsQ0FEZ0I7S0FBbEI7OztBQU5TLFFBV0wsUUFBSixFQUFjO0FBQ1osOEJBQWdCLElBQUksUUFBSixFQUFrQixVQUFVLEdBQVYsQ0FBbEMsQ0FEWTtLQUFkOztBQUlBLFFBQUksVUFBVSxPQUFPLFNBQVAsRUFBa0I7QUFDOUIsVUFBTSxtQkFBbUIsS0FBSyxLQUFLLE9BQUwsQ0FEQTtBQUU5QixxQkFBZSxtQkFBbUIseUJBQWMsTUFBZCxFQUFzQixPQUF0QixDQUFuQixDQUZlO0tBQWhDOzs7QUFmUyxRQXFCVCxDQUFLLE9BQUwsSUFBZ0IseUJBQWMsV0FBZCxFQUEyQixPQUEzQixDQUFoQixDQXJCUztBQXNCVCxTQUFLLEtBQUwsQ0FBVyxRQUFYLEdBQXNCLFdBQXRCLENBdEJTOztBQXdCVCxRQUFJLENBQUMsV0FBRCxJQUFnQixLQUFLLEdBQUwsQ0FBUyxXQUFULEtBQXlCLGFBQXpCLEVBQXdDO0FBQzFELFdBQUssUUFBTCxHQUQwRDtLQUE1RDs7O1NBaENFOzs7UUFDRyxlQUFlO0FBQ3BCLGdCQUFjLENBQWQ7QUFDQSxZQUFVLENBQVY7QUFDQSxZQUFVLENBQVY7QUFDQSxpQkFBZSxLQUFmOzs7a0JBaUNXLFVBQUMsS0FBRDtTQUFXLElBQUksT0FBSixDQUFZLEtBQVo7Q0FBWCIsImZpbGUiOiJwaHlzaWNzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY3Rpb24gZnJvbSAnLi8nO1xuaW1wb3J0IHsgdGltZVNpbmNlTGFzdEZyYW1lIH0gZnJvbSAnLi4vZnJhbWVzeW5jJztcbmltcG9ydCB7IHNwZWVkUGVyRnJhbWUgfSBmcm9tICcuLi9pbmMvY2FsYyc7XG5cbmNsYXNzIFBoeXNpY3MgZXh0ZW5kcyBBY3Rpb24ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGFjY2VsZXJhdGlvbjogMCxcbiAgICBmcmljdGlvbjogMCxcbiAgICB2ZWxvY2l0eTogMCxcbiAgICBhdXRvU3RvcFNwZWVkOiAwLjAwMVxuICB9XG5cbiAgb25VcGRhdGUoKSB7XG4gICAgY29uc3QgeyBhY2NlbGVyYXRpb24sIGF1dG9TdG9wU3BlZWQsIGZyaWN0aW9uLCB2ZWxvY2l0eSwgc3ByaW5nLCB0byB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgbmV3VmVsb2NpdHkgPSB2ZWxvY2l0eTtcbiAgICBjb25zdCBlbGFwc2VkID0gdGltZVNpbmNlTGFzdEZyYW1lKCk7XG5cbiAgICAvLyBBcHBseSBhY2NlbGVyYXRpb24gdG8gdmVsb2NpdHlcbiAgICBpZiAoYWNjZWxlcmF0aW9uKSB7XG4gICAgICBuZXdWZWxvY2l0eSArPSBzcGVlZFBlckZyYW1lKGFjY2VsZXJhdGlvbiwgZWxhcHNlZCk7XG4gICAgfVxuXG4gICAgLy8gQXBwbHkgZnJpY3Rpb24gdG8gdmVsb2NpdHlcbiAgICBpZiAoZnJpY3Rpb24pIHtcbiAgICAgIG5ld1ZlbG9jaXR5ICo9ICgxIC0gZnJpY3Rpb24pICoqIChlbGFwc2VkIC8gMTAwKTtcbiAgICB9XG5cbiAgICBpZiAoc3ByaW5nICYmIHRvICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGRpc3RhbmNlVG9UYXJnZXQgPSB0byAtIHRoaXMuY3VycmVudDtcbiAgICAgIG5ld1ZlbG9jaXR5ICs9IGRpc3RhbmNlVG9UYXJnZXQgKiBzcGVlZFBlckZyYW1lKHNwcmluZywgZWxhcHNlZCk7XG4gICAgfVxuXG4gICAgLy8gQXBwbHkgdmVsb2NpdHlcbiAgICB0aGlzLmN1cnJlbnQgKz0gc3BlZWRQZXJGcmFtZShuZXdWZWxvY2l0eSwgZWxhcHNlZCk7XG4gICAgdGhpcy5wcm9wcy52ZWxvY2l0eSA9IG5ld1ZlbG9jaXR5O1xuXG4gICAgaWYgKCFuZXdWZWxvY2l0eSB8fCBNYXRoLmFicyhuZXdWZWxvY2l0eSkgPD0gYXV0b1N0b3BTcGVlZCkge1xuICAgICAgdGhpcy5jb21wbGV0ZSgpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IG5ldyBQaHlzaWNzKHByb3BzKTsiXX0=

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _chain = __webpack_require__(2);
	
	var _chain2 = _interopRequireDefault(_chain);
	
	var _group = __webpack_require__(4);
	
	var _group2 = _interopRequireDefault(_group);
	
	var _delay = __webpack_require__(3);
	
	var _delay2 = _interopRequireDefault(_delay);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (actions, interval) {
	  return (0, _group2.default)(actions.map(function (action, i) {
	    var timeToDelay = defaultIntervalCalculation(i, interval);
	    return (0, _chain2.default)([(0, _delay2.default)(timeToDelay), action]);
	  }));
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL3N0YWdnZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O2tCQUVlLFVBQUMsT0FBRCxFQUFVLFFBQVYsRUFBdUI7QUFDcEMsU0FBTyxxQkFBTSxRQUFRLEdBQVIsQ0FBWSxVQUFDLE1BQUQsRUFBUyxDQUFULEVBQWU7QUFDdEMsUUFBTSxjQUFjLDJCQUEyQixDQUEzQixFQUE4QixRQUE5QixDQUFkLENBRGdDO0FBRXRDLFdBQU8scUJBQU0sQ0FDWCxxQkFBTSxXQUFOLENBRFcsRUFFWCxNQUZXLENBQU4sQ0FBUCxDQUZzQztHQUFmLENBQWxCLENBQVAsQ0FEb0M7Q0FBdkIiLCJmaWxlIjoic3RhZ2dlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2hhaW4gZnJvbSAnLi9jaGFpbic7XG5pbXBvcnQgZ3JvdXAgZnJvbSAnLi9ncm91cCc7XG5pbXBvcnQgZGVsYXkgZnJvbSAnLi9kZWxheSc7XG5cbmV4cG9ydCBkZWZhdWx0IChhY3Rpb25zLCBpbnRlcnZhbCkgPT4ge1xuICByZXR1cm4gZ3JvdXAoYWN0aW9ucy5tYXAoKGFjdGlvbiwgaSkgPT4ge1xuICAgIGNvbnN0IHRpbWVUb0RlbGF5ID0gZGVmYXVsdEludGVydmFsQ2FsY3VsYXRpb24oaSwgaW50ZXJ2YWwpO1xuICAgIHJldHVybiBjaGFpbihbXG4gICAgICBkZWxheSh0aW1lVG9EZWxheSksXG4gICAgICBhY3Rpb25cbiAgICBdKTtcbiAgfSkpO1xufTtcbiJdfQ==

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _ = __webpack_require__(12);
	
	var _2 = _interopRequireDefault(_);
	
	var _framesync = __webpack_require__(10);
	
	var _filters = __webpack_require__(16);
	
	var _calc = __webpack_require__(15);
	
	var _easing = __webpack_require__(13);
	
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
	  to: 0
	};
	
	exports.default = function (props) {
	  return new Tween(props);
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL3R3ZWVuLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBRUEsSUFBTSxtQkFBbUIsOEJBQWdCLENBQWhCLEVBQW1CLENBQW5CLENBQW5COztJQUVBOzs7Ozs7Ozs7a0JBT0osNkJBQVU7QUFDUixTQUFLLE9BQUwsR0FBZSxDQUFmLENBRFE7OztBQVBOLGtCQVdKLCtCQUFXO2lCQUM0QixLQUFLLEtBQUwsQ0FENUI7UUFDRCwyQkFEQztRQUNTLG1CQURUO1FBQ2UsbUJBRGY7UUFDcUIsZUFEckI7O0FBRVQsU0FBSyxPQUFMLElBQWdCLG9DQUFoQixDQUZTO0FBR1QsUUFBTSxXQUFXLGdDQUFxQixLQUFLLE9BQUwsRUFBYyxDQUFuQyxFQUFzQyxRQUF0QyxDQUFYLENBSEc7QUFJVCxRQUFNLGdCQUFnQixLQUFLLGlCQUFpQixRQUFqQixDQUFMLENBQWhCLENBSkc7QUFLVCxTQUFLLE9BQUwsR0FBZSxnQ0FBcUIsYUFBckIsRUFBb0MsSUFBcEMsRUFBMEMsRUFBMUMsQ0FBZixDQUxTOztBQU9ULFFBQUksS0FBSyxPQUFMLElBQWdCLFFBQWhCLEVBQTBCO0FBQzVCLFdBQUssUUFBTCxHQUQ0QjtLQUE5Qjs7O1NBbEJFOzs7TUFDRyxlQUFlO0FBQ3BCLFlBQVUsR0FBVjtBQUNBLHVCQUZvQjtBQUdwQixNQUFJLENBQUo7OztrQkFvQlcsVUFBQyxLQUFEO1NBQVcsSUFBSSxLQUFKLENBQVUsS0FBVjtDQUFYIiwiZmlsZSI6InR3ZWVuLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY3Rpb24gZnJvbSAnLi8nO1xuaW1wb3J0IHsgdGltZVNpbmNlTGFzdEZyYW1lIH0gZnJvbSAnLi4vZnJhbWVzeW5jJztcbmltcG9ydCB7IHJlc3RyaWN0QmV0d2VlbiB9IGZyb20gJy4uL3ZhbHVlL2ZpbHRlcnMnO1xuaW1wb3J0IHsgZWFzZSwgZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUsIGdldFZhbHVlRnJvbVByb2dyZXNzIH0gZnJvbSAnLi4vaW5jL2NhbGMnO1xuaW1wb3J0IHsgZWFzZU91dCB9IGZyb20gJy4uL2Vhc2luZyc7XG5cbmNvbnN0IHJlc3RyaWN0UHJvZ3Jlc3MgPSByZXN0cmljdEJldHdlZW4oMCwgMSk7XG5cbmNsYXNzIFR3ZWVuIGV4dGVuZHMgQWN0aW9uIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBkdXJhdGlvbjogMzAwLFxuICAgIGVhc2U6IGVhc2VPdXQsXG4gICAgdG86IDBcbiAgfVxuXG4gIG9uU3RhcnQoKSB7XG4gICAgdGhpcy5lbGFwc2VkID0gMDtcbiAgfVxuXG4gIG9uVXBkYXRlKCkge1xuICAgIGNvbnN0IHsgZHVyYXRpb24sIGVhc2UsIGZyb20sIHRvIH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMuZWxhcHNlZCArPSB0aW1lU2luY2VMYXN0RnJhbWUoKTtcbiAgICBjb25zdCBwcm9ncmVzcyA9IGdldFByb2dyZXNzRnJvbVZhbHVlKHRoaXMuZWxhcHNlZCwgMCwgZHVyYXRpb24pO1xuICAgIGNvbnN0IGVhc2VkUHJvZ3Jlc3MgPSBlYXNlKHJlc3RyaWN0UHJvZ3Jlc3MocHJvZ3Jlc3MpKTtcbiAgICB0aGlzLmN1cnJlbnQgPSBnZXRWYWx1ZUZyb21Qcm9ncmVzcyhlYXNlZFByb2dyZXNzLCBmcm9tLCB0byk7XG5cbiAgICBpZiAodGhpcy5lbGFwc2VkID49IGR1cmF0aW9uKSB7XG4gICAgICB0aGlzLmNvbXBsZXRlKCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4gbmV3IFR3ZWVuKHByb3BzKTtcbiJdfQ==

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _ = __webpack_require__(12);
	
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
	  };
	
	  Track.prototype.onUpdate = function onUpdate() {
	    var _props = this.props;
	    var input = _props.input;
	    var from = _props.from;
	
	    var offset = input.get() - this.inputOrigin;
	    this.current = from + offset;
	  };
	
	  return Track;
	}(_2.default);
	
	exports.default = function (props) {
	  return new Track(props);
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL3RyYWNrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRU07Ozs7Ozs7OztrQkFDSiw2QkFBVTtRQUNBLFFBQVUsS0FBSyxLQUFMLENBQVYsTUFEQTs7QUFFUixTQUFLLFdBQUwsR0FBbUIsTUFBTSxHQUFOLEVBQW5CLENBRlE7OztBQUROLGtCQU1KLCtCQUFXO2lCQUNlLEtBQUssS0FBTCxDQURmO1FBQ0QscUJBREM7UUFDTSxtQkFETjs7QUFFVCxRQUFNLFNBQVMsTUFBTSxHQUFOLEtBQWMsS0FBSyxXQUFMLENBRnBCO0FBR1QsU0FBSyxPQUFMLEdBQWUsT0FBTyxNQUFQLENBSE47OztTQU5QOzs7a0JBYVMsVUFBQyxLQUFEO1NBQVcsSUFBSSxLQUFKLENBQVUsS0FBVjtDQUFYIiwiZmlsZSI6InRyYWNrLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY3Rpb24gZnJvbSAnLi8nO1xuXG5jbGFzcyBUcmFjayBleHRlbmRzIEFjdGlvbiB7XG4gIG9uU3RhcnQoKSB7XG4gICAgY29uc3QgeyBpbnB1dCB9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLmlucHV0T3JpZ2luID0gaW5wdXQuZ2V0KCk7XG4gIH1cblxuICBvblVwZGF0ZSgpIHtcbiAgICBjb25zdCB7IGlucHV0LCBmcm9tIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IG9mZnNldCA9IGlucHV0LmdldCgpIC0gdGhpcy5pbnB1dE9yaWdpbjtcbiAgICB0aGlzLmN1cnJlbnQgPSBmcm9tICsgb2Zmc2V0O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4gbmV3IFRyYWNrKHByb3BzKTtcbiJdfQ==

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _value = __webpack_require__(11);
	
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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.currentFrameTimestamp = exports.timeSinceLastFrame = exports.cancelOnFrameEnd = exports.cancelOnFrameRender = exports.cancelOnFrameUpdate = exports.cancelOnFrameStart = exports.onFrameEnd = exports.onFrameRender = exports.onFrameUpdate = exports.onFrameStart = undefined;
	
	var _onNextFrame = __webpack_require__(19);
	
	var _onNextFrame2 = _interopRequireDefault(_onNextFrame);
	
	var _createRenderStep = __webpack_require__(20);
	
	var _createRenderStep2 = _interopRequireDefault(_createRenderStep);
	
	var _utils = __webpack_require__(21);
	
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Value = exports.Value = function () {
	  function Value(initialValue, type) {
	    _classCallCheck(this, Value);
	
	    this.current = initialValue;
	    this.type = type;
	    this.action = null;
	  }
	
	  Value.prototype.update = function update(newValue) {
	    this.current = newValue;
	    this.__fireListeners();
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
	
	    return this;
	  };
	
	  Value.prototype.registerAction = function registerAction(action) {
	    var _this = this;
	
	    if (this.action) {
	      this.action.stop();
	    }
	
	    this.action = action;
	
	    // Potential todo: Check if source action is this.action
	    return function (v) {
	      return _this.update(v);
	    };
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
	
	  Value.prototype.__fireListeners = function __fireListeners() {
	    if (this.listeners) {
	      var numListeners = this.listeners.length;
	      for (var i = 0; i < numListeners; i++) {
	        this.listeners[i](this.current, this);
	      }
	    }
	  };
	
	  return Value;
	}();
	
	exports.default = function (initialValue) {
	  return new Value(initialValue);
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBYTtBQUNYLFdBRFcsS0FDWCxDQUFZLFlBQVosRUFBMEIsSUFBMUIsRUFBZ0M7MEJBRHJCLE9BQ3FCOztBQUM5QixTQUFLLE9BQUwsR0FBZSxZQUFmLENBRDhCO0FBRTlCLFNBQUssSUFBTCxHQUFZLElBQVosQ0FGOEI7QUFHOUIsU0FBSyxNQUFMLEdBQWMsSUFBZCxDQUg4QjtHQUFoQzs7QUFEVyxrQkFPWCx5QkFBTyxVQUFVO0FBQ2YsU0FBSyxPQUFMLEdBQWUsUUFBZixDQURlO0FBRWYsU0FBSyxlQUFMLEdBRmU7OztBQVBOLGtCQVlYLHFCQUFNO0FBQ0osV0FBTyxLQUFLLE9BQUwsQ0FESDs7O0FBWkssa0JBZ0JYLHFDQUFjO0FBQ1osV0FBTyxJQUFDLENBQUssTUFBTCxHQUFlLEtBQUssTUFBTCxDQUFZLFdBQVosR0FBMEIsQ0FBMUMsQ0FESzs7O0FBaEJILGtCQW9CWCx1QkFBTztBQUNMLFFBQUksS0FBSyxNQUFMLEVBQWE7QUFDZixXQUFLLE1BQUwsQ0FBWSxJQUFaLEdBRGU7QUFFZixXQUFLLE1BQUwsR0FBYyxJQUFkLENBRmU7S0FBakI7O0FBS0EsV0FBTyxJQUFQLENBTks7OztBQXBCSSxrQkE2QlgseUNBQWUsUUFBUTs7O0FBQ3JCLFFBQUksS0FBSyxNQUFMLEVBQWE7QUFDZixXQUFLLE1BQUwsQ0FBWSxJQUFaLEdBRGU7S0FBakI7O0FBSUEsU0FBSyxNQUFMLEdBQWMsTUFBZDs7O0FBTHFCLFdBUWQsVUFBQyxDQUFEO2FBQU8sTUFBSyxNQUFMLENBQVksQ0FBWjtLQUFQLENBUmM7OztBQTdCWixrQkF3Q1gsbUNBQVksVUFBVTtBQUNwQixRQUFJLENBQUMsS0FBSyxTQUFMLEVBQWdCO0FBQ25CLFdBQUssU0FBTCxHQUFpQixFQUFqQixDQURtQjtLQUFyQjs7QUFJQSxRQUFNLGdCQUFnQixLQUFLLFNBQUwsQ0FBZSxPQUFmLENBQXVCLFFBQXZCLENBQWhCLENBTGM7QUFNcEIsUUFBSSxrQkFBa0IsQ0FBQyxDQUFELEVBQUk7QUFDeEIsV0FBSyxTQUFMLENBQWUsSUFBZixDQUFvQixRQUFwQixFQUR3QjtLQUExQjs7QUFJQSxXQUFPLElBQVAsQ0FWb0I7OztBQXhDWCxrQkFxRFgseUNBQWUsVUFBVTtBQUN2QixRQUFJLEtBQUssU0FBTCxFQUFnQjtBQUNsQixVQUFNLGdCQUFnQixLQUFLLFNBQUwsQ0FBZSxPQUFmLENBQXVCLFFBQXZCLENBQWhCLENBRFk7QUFFbEIsVUFBSSxnQkFBZ0IsQ0FBQyxDQUFELEVBQUk7QUFDdEIsYUFBSyxTQUFMLENBQWUsTUFBZixDQUFzQixhQUF0QixFQUFxQyxDQUFyQyxFQURzQjtPQUF4QjtLQUZGOztBQU9BLFdBQU8sSUFBUCxDQVJ1Qjs7O0FBckRkLGtCQWdFWCw2Q0FBa0I7QUFDaEIsUUFBSSxLQUFLLFNBQUwsRUFBZ0I7QUFDbEIsVUFBTSxlQUFlLEtBQUssU0FBTCxDQUFlLE1BQWYsQ0FESDtBQUVsQixXQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxZQUFKLEVBQWtCLEdBQWxDLEVBQXVDO0FBQ3JDLGFBQUssU0FBTCxDQUFlLENBQWYsRUFBa0IsS0FBSyxPQUFMLEVBQWMsSUFBaEMsRUFEcUM7T0FBdkM7S0FGRjs7O1NBakVTOzs7a0JBMEVFLFVBQUMsWUFBRDtTQUFrQixJQUFJLEtBQUosQ0FBVSxZQUFWO0NBQWxCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBWYWx1ZSB7XG4gIGNvbnN0cnVjdG9yKGluaXRpYWxWYWx1ZSwgdHlwZSkge1xuICAgIHRoaXMuY3VycmVudCA9IGluaXRpYWxWYWx1ZTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuYWN0aW9uID0gbnVsbDtcbiAgfVxuXG4gIHVwZGF0ZShuZXdWYWx1ZSkge1xuICAgIHRoaXMuY3VycmVudCA9IG5ld1ZhbHVlO1xuICAgIHRoaXMuX19maXJlTGlzdGVuZXJzKCk7XG4gIH1cblxuICBnZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudDtcbiAgfVxuXG4gIGdldFZlbG9jaXR5KCkge1xuICAgIHJldHVybiAodGhpcy5hY3Rpb24pID8gdGhpcy5hY3Rpb24uZ2V0VmVsb2NpdHkgOiAwO1xuICB9XG5cbiAgc3RvcCgpIHtcbiAgICBpZiAodGhpcy5hY3Rpb24pIHtcbiAgICAgIHRoaXMuYWN0aW9uLnN0b3AoKTtcbiAgICAgIHRoaXMuYWN0aW9uID0gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlZ2lzdGVyQWN0aW9uKGFjdGlvbikge1xuICAgIGlmICh0aGlzLmFjdGlvbikge1xuICAgICAgdGhpcy5hY3Rpb24uc3RvcCgpO1xuICAgIH1cblxuICAgIHRoaXMuYWN0aW9uID0gYWN0aW9uO1xuXG4gICAgLy8gUG90ZW50aWFsIHRvZG86IENoZWNrIGlmIHNvdXJjZSBhY3Rpb24gaXMgdGhpcy5hY3Rpb25cbiAgICByZXR1cm4gKHYpID0+IHRoaXMudXBkYXRlKHYpO1xuICB9XG5cbiAgYWRkTGlzdGVuZXIoY2FsbGJhY2spIHtcbiAgICBpZiAoIXRoaXMubGlzdGVuZXJzKSB7XG4gICAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xuICAgIH1cblxuICAgIGNvbnN0IGxpc3RlbmVySW5kZXggPSB0aGlzLmxpc3RlbmVycy5pbmRleE9mKGNhbGxiYWNrKTtcbiAgICBpZiAobGlzdGVuZXJJbmRleCA9PT0gLTEpIHtcbiAgICAgIHRoaXMubGlzdGVuZXJzLnB1c2goY2FsbGJhY2spO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVtb3ZlTGlzdGVuZXIoY2FsbGJhY2spIHtcbiAgICBpZiAodGhpcy5saXN0ZW5lcnMpIHtcbiAgICAgIGNvbnN0IGxpc3RlbmVySW5kZXggPSB0aGlzLmxpc3RlbmVycy5pbmRleE9mKGNhbGxiYWNrKTtcbiAgICAgIGlmIChsaXN0ZW5lckluZGV4ID4gLTEpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMuc3BsaWNlKGxpc3RlbmVySW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgX19maXJlTGlzdGVuZXJzKCkge1xuICAgIGlmICh0aGlzLmxpc3RlbmVycykge1xuICAgICAgY29uc3QgbnVtTGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnMubGVuZ3RoO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1MaXN0ZW5lcnM7IGkrKykge1xuICAgICAgICB0aGlzLmxpc3RlbmVyc1tpXSh0aGlzLmN1cnJlbnQsIHRoaXMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAoaW5pdGlhbFZhbHVlKSA9PiBuZXcgVmFsdWUoaW5pdGlhbFZhbHVlKTtcbiJdfQ==

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _framesync = __webpack_require__(10);
	
	var _calc = __webpack_require__(15);
	
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
	    var _props = this.props;
	    var value = _props.value;
	    var onStart = _props.onStart;
	    var from = _props.from;
	    var velocity = _props.velocity;
	
	
	    this.isActive = true;
	    (0, _framesync.onFrameUpdate)(this.update);
	
	    if (this.onStart) {
	      this.onStart();
	    }
	
	    if (onStart) {
	      onStart(this);
	    }
	
	    return this;
	  };
	
	  Action.prototype.stop = function stop() {
	    var onStop = this.props.onStop;
	
	
	    this.isActive = false;
	    (0, _framesync.cancelOnFrameUpdate)(this.update);
	
	    if (this.onStop) {
	      this.onStop();
	    }
	
	    if (onStop) {
	      onStop(this);
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
	
	    if (this.updateValue) {
	      this.updateValue(this.current);
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
	
	  Action.prototype.output = function output(onUpdate) {
	    return new this.constructor(_extends({}, this.props, {
	      onUpdate: onUpdate
	    }));
	  };
	
	  return Action;
	}();
	
	exports.default = Action;
	//# sourceMappingURL=data:application/json;base64,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TWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBvbkZyYW1lVXBkYXRlLCBjYW5jZWxPbkZyYW1lVXBkYXRlLCB0aW1lU2luY2VMYXN0RnJhbWUgfSBmcm9tICcuLi9mcmFtZXN5bmMnO1xuaW1wb3J0IHsgc3BlZWRQZXJTZWNvbmQgfSBmcm9tICcuLi9pbmMvY2FsYyc7XG5cbmNsYXNzIEFjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgdGhpcy5jdXJyZW50ID0gMDtcbiAgICB0aGlzLnZlbG9jaXR5ID0gMDtcbiAgICB0aGlzLnVwZGF0ZSA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLnByb3BzID0ge1xuICAgICAgLi4udGhpcy5jb25zdHJ1Y3Rvci5kZWZhdWx0UHJvcHMsXG4gICAgICAuLi5wcm9wc1xuICAgIH07XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICBjb25zdCB7IHZhbHVlLCBvblN0YXJ0LCBmcm9tLCB2ZWxvY2l0eSB9ID0gdGhpcy5wcm9wcztcblxuICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgIG9uRnJhbWVVcGRhdGUodGhpcy51cGRhdGUpO1xuXG4gICAgaWYgKHRoaXMub25TdGFydCkge1xuICAgICAgdGhpcy5vblN0YXJ0KCk7XG4gICAgfVxuXG4gICAgaWYgKG9uU3RhcnQpIHtcbiAgICAgIG9uU3RhcnQodGhpcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzdG9wKCkge1xuICAgIGNvbnN0IHsgb25TdG9wIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgIGNhbmNlbE9uRnJhbWVVcGRhdGUodGhpcy51cGRhdGUpO1xuXG4gICAgaWYgKHRoaXMub25TdG9wKSB7XG4gICAgICB0aGlzLm9uU3RvcCgpO1xuICAgIH1cblxuICAgIGlmIChvblN0b3ApIHtcbiAgICAgIG9uU3RvcCh0aGlzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNvbXBsZXRlKCkge1xuICAgIGlmICh0aGlzLm9uQ29tcGxldGUpIHtcbiAgICAgIHRoaXMub25Db21wbGV0ZSgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLm9uQ29tcGxldGUpIHtcbiAgICAgIHRoaXMucHJvcHMub25Db21wbGV0ZSh0aGlzKTtcbiAgICB9XG5cbiAgICB0aGlzLnN0b3AoKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLmN1cnJlbnQ7XG4gICAgY29uc3QgdmVsb2NpdHkgPSB0aGlzLnZlbG9jaXR5O1xuXG4gICAgaWYgKHRoaXMub25VcGRhdGUpIHtcbiAgICAgIHRoaXMub25VcGRhdGUoKTtcbiAgICB9XG5cbiAgICB0aGlzLnZlbG9jaXR5ID0gc3BlZWRQZXJTZWNvbmQodGhpcy5jdXJyZW50IC0gY3VycmVudCwgdGltZVNpbmNlTGFzdEZyYW1lKCkpO1xuXG4gICAgaWYgKHRoaXMudXBkYXRlVmFsdWUpIHtcbiAgICAgIHRoaXMudXBkYXRlVmFsdWUodGhpcy5jdXJyZW50KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5vblVwZGF0ZSkge1xuICAgICAgdGhpcy5wcm9wcy5vblVwZGF0ZSh0aGlzKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc0FjdGl2ZSkge1xuICAgICAgb25GcmFtZVVwZGF0ZSh0aGlzLnVwZGF0ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXQobmV3VmFsdWUpIHtcbiAgICB0aGlzLmN1cnJlbnQgPSBuZXdWYWx1ZTtcbiAgfVxuXG4gIGdldCgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50O1xuICB9XG5cbiAgZ2V0VmVsb2NpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVsb2NpdHk7XG4gIH1cblxuICBvdXRwdXQob25VcGRhdGUpIHtcbiAgICByZXR1cm4gbmV3IHRoaXMuY29uc3RydWN0b3Ioe1xuICAgICAgLi4udGhpcy5wcm9wcyxcbiAgICAgIG9uVXBkYXRlXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uO1xuIl19

/***/ },
/* 13 */
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
/* 14 */,
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.stepProgress = exports.speedPerSecond = exports.speedPerFrame = exports.smooth = exports.restrict = exports.relativeValue = exports.random = exports.radiansToDegrees = exports.pointFromAngleAndDistance = exports.getProgressFromValue = exports.getValueFromProgress = exports.distance = exports.dilate = exports.degreesToRadians = exports.angle = undefined;
	
	var _utils = __webpack_require__(21);
	
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
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.steppedMotion = exports.restrictBetween = exports.restrictOver = exports.restrictUnder = exports.interpolate = exports.compose = exports.appendUnit = undefined;
	
	var _calc = __webpack_require__(15);
	
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

/***/ },
/* 17 */,
/* 18 */,
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9mcmFtZXN5bmMvb24tbmV4dC1mcmFtZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFHQSxJQUFNLFNBQVMsT0FBUSxNQUFQLEtBQWtCLFdBQWxCLElBQWlDLE9BQU8scUJBQVAsR0FBZ0MsSUFBbEUsR0FBeUUsS0FBekU7O0FBRWYsSUFBSSxvQkFBSjs7QUFFQSxJQUFJLE1BQUosRUFBWTtBQUNWLGdCQUFjLFVBQUMsUUFBRDtXQUFjLE9BQU8scUJBQVAsQ0FBNkIsUUFBN0I7R0FBZCxDQURKO0NBQVosTUFHTzs7Ozs7Ozs7Ozs7Ozs7O0FBZUwsUUFBSSxXQUFXLENBQVg7O0FBRUosa0JBQWMsVUFBQyxRQUFELEVBQWM7QUFDMUIsVUFBTSxjQUFjLElBQUksSUFBSixHQUFXLE9BQVgsRUFBZCxDQURvQjtBQUUxQixVQUFNLGFBQWEsS0FBSyxHQUFMLENBQVMsQ0FBVCxFQUFZLFFBQVEsY0FBYyxRQUFkLENBQVIsQ0FBekIsQ0FGb0I7O0FBSTFCLGlCQUFXLGNBQWMsVUFBZCxDQUplOztBQU0xQixpQkFBVztlQUFNLFNBQVMsUUFBVDtPQUFOLEVBQTBCLFVBQXJDLEVBTjBCO0tBQWQ7T0FqQlQ7Q0FIUDs7a0JBOEJlIiwiZmlsZSI6Im9uLW5leHQtZnJhbWUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgRGV0ZWN0IGFuZCBsb2FkIGFuIGFwcHJvcHJpYXRlIGNsb2NrIHNldHRpbmcgZm9yIHRoZSBlbnZpcm9ubWVudFxuKi9cbmNvbnN0IGhhc1JBRiA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKSA/IHRydWUgOiBmYWxzZTtcblxubGV0IG9uTmV4dEZyYW1lO1xuXG5pZiAoaGFzUkFGKSB7XG4gIG9uTmV4dEZyYW1lID0gKGNhbGxiYWNrKSA9PiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNhbGxiYWNrKTtcblxufSBlbHNlIHtcbiAgLypcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGxcbiAgICBcbiAgICBGb3IgSUU4LzkgRmxpbnN0b25lcyBhbmQgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRzXG5cbiAgICBUYWtlbiBmcm9tIFBhdWwgSXJpc2guIFdlJ3ZlIHN0cmlwcGVkIG91dCBjYW5jZWxBbmltYXRpb25GcmFtZSBjaGVja3MgYmVjYXVzZSB3ZSBkb24ndCBmb3ggd2l0aCB0aGF0XG4gICAgXG4gICAgaHR0cDovL3BhdWxpcmlzaC5jb20vMjAxMS9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWFuaW1hdGluZy9cbiAgICBodHRwOi8vbXkub3BlcmEuY29tL2Vtb2xsZXIvYmxvZy8yMDExLzEyLzIwL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtZXItYW5pbWF0aW5nXG4gICAgIFxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbCBieSBFcmlrIE3DtmxsZXIuIGZpeGVzIGZyb20gUGF1bCBJcmlzaCBhbmQgVGlubyBaaWpkZWxcbiAgICAgXG4gICAgTUlUIGxpY2Vuc2VcbiAgKi9cbiAgbGV0IGxhc3RUaW1lID0gMDtcblxuICBvbk5leHRGcmFtZSA9IChjYWxsYmFjaykgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgY29uc3QgdGltZVRvQ2FsbCA9IE1hdGgubWF4KDAsIDE2LjcgLSAoY3VycmVudFRpbWUgLSBsYXN0VGltZSkpO1xuXG4gICAgbGFzdFRpbWUgPSBjdXJyZW50VGltZSArIHRpbWVUb0NhbGw7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IGNhbGxiYWNrKGxhc3RUaW1lKSwgdGltZVRvQ2FsbCk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IG9uTmV4dEZyYW1lOyJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9mcmFtZXN5bmMvY3JlYXRlLXJlbmRlci1zdGVwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztrQkFBd0I7QUFBVCxTQUFTLGdCQUFULENBQTBCLGVBQTFCLEVBQTJDOzs7Ozs7QUFNeEQsTUFBSSxpQkFBaUIsRUFBakIsQ0FOb0Q7QUFPeEQsTUFBSSwwQkFBMEIsRUFBMUIsQ0FQb0Q7O0FBU3hELFNBQU87QUFDTCxjQUFVLFVBQUMsUUFBRCxFQUFjO0FBQ3RCOztBQURzQixVQUdsQix3QkFBd0IsT0FBeEIsQ0FBZ0MsUUFBaEMsTUFBOEMsQ0FBQyxDQUFELEVBQUk7QUFDcEQsZ0NBQXdCLElBQXhCLENBQTZCLFFBQTdCLEVBRG9EO09BQXREO0tBSFE7O0FBUVYsWUFBUSxVQUFDLFFBQUQsRUFBYztBQUNwQixVQUFNLGtCQUFrQix3QkFBd0IsT0FBeEIsQ0FBZ0MsUUFBaEMsQ0FBbEIsQ0FEYztBQUVwQixVQUFJLG9CQUFvQixDQUFDLENBQUQsRUFBSTtBQUMxQixnQ0FBd0IsTUFBeEIsQ0FBK0IsZUFBL0IsRUFBZ0QsQ0FBaEQsRUFEMEI7T0FBNUI7S0FGTTs7QUFPUixhQUFTLFlBQU07OztpQkFFK0IsQ0FBQyx1QkFBRCxFQUEwQixjQUExQjs7QUFGL0I7QUFFWiwrQkFGWTtBQUVJLHdDQUZKO0FBS2IsOEJBQXdCLE1BQXhCLEdBQWlDLENBQWpDOzs7QUFMYSxVQVFQLGVBQWUsZUFBZSxNQUFmLENBUlI7QUFTYixXQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxZQUFKLEVBQWtCLEdBQWxDLEVBQXVDO0FBQ3JDLHVCQUFlLENBQWYsSUFEcUM7T0FBdkM7S0FUTztHQWhCWCxDQVR3RDtDQUEzQyIsImZpbGUiOiJjcmVhdGUtcmVuZGVyLXN0ZXAuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUmVuZGVyU3RlcChzdGFydFJlbmRlckxvb3ApIHtcbiAgLyoqXG4gICAqIFdlIHVzZSB0d28gYXJyYXlzLCBvbmUgZm9yIHRoaXMgZnJhbWUgYW5kIG9uZSB0byBxdWV1ZSBmb3IgdGhlXG4gICAqIG5leHQgZnJhbWUsIHJldXNpbmcgZWFjaCB0byBhdm9pZCBHQy5cbiAgICogQHR5cGUge0FycmF5fVxuICAgKi9cbiAgbGV0IGZ1bmN0aW9uc1RvUnVuID0gW107XG4gIGxldCBmdW5jdGlvbnNUb1J1bk5leHRGcmFtZSA9IFtdO1xuXG4gIHJldHVybiB7XG4gICAgc2NoZWR1bGU6IChjYWxsYmFjaykgPT4ge1xuICAgICAgc3RhcnRSZW5kZXJMb29wKCk7XG4gICAgICAvLyBJZiB0aGlzIGNhbGxiYWNrIGlzbid0IGFscmVhZHkgc2NoZWR1bGVkIHRvIHJ1biBuZXh0IGZyYW1lXG4gICAgICBpZiAoZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUuaW5kZXhPZihjYWxsYmFjaykgPT09IC0xKSB7XG4gICAgICAgIGZ1bmN0aW9uc1RvUnVuTmV4dEZyYW1lLnB1c2goY2FsbGJhY2spO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBjYW5jZWw6IChjYWxsYmFjaykgPT4ge1xuICAgICAgY29uc3QgaW5kZXhPZkNhbGxiYWNrID0gZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUuaW5kZXhPZihjYWxsYmFjayk7XG4gICAgICBpZiAoaW5kZXhPZkNhbGxiYWNrICE9PSAtMSkge1xuICAgICAgICBmdW5jdGlvbnNUb1J1bk5leHRGcmFtZS5zcGxpY2UoaW5kZXhPZkNhbGxiYWNrLCAxKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgcHJvY2VzczogKCkgPT4ge1xuICAgICAgLy8gU3dhcCB0aGlzIGZyYW1lIGFuZCBuZXh0IGZyYW1lIGFycmF5cyB0byBhdm9pZCBHQ1xuICAgICAgW2Z1bmN0aW9uc1RvUnVuLCBmdW5jdGlvbnNUb1J1bk5leHRGcmFtZV0gPSBbZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUsIGZ1bmN0aW9uc1RvUnVuXTtcblxuICAgICAgLy8gQ2xlYXIgbmV4dCBmcmFtZSBsaXN0XG4gICAgICBmdW5jdGlvbnNUb1J1bk5leHRGcmFtZS5sZW5ndGggPSAwO1xuXG4gICAgICAvLyBFeGVjdXRlIGFsbCBvZiB0aGlzIGZyYW1lJ3MgZnVuY3Rpb25zXG4gICAgICBjb25zdCBudW1UaGlzRnJhbWUgPSBmdW5jdGlvbnNUb1J1bi5sZW5ndGg7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVRoaXNGcmFtZTsgaSsrKSB7XG4gICAgICAgIGZ1bmN0aW9uc1RvUnVuW2ldKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufSJdfQ==

/***/ },
/* 21 */
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
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.complexString = exports.color = exports.hsla = exports.hex = exports.rgba = exports.rgbUnit = exports.scale = exports.number = exports.px = exports.percent = exports.degrees = exports.alpha = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _childTypes, _childTypes2; /**
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
	
	
	var _filters = __webpack_require__(16);
	
	var _utils = __webpack_require__(26);
	
	var _utils2 = __webpack_require__(21);
	
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
	
	// Value types
	var alpha = exports.alpha = {
	  filter: (0, _filters.restrictBetween)(0, 1)
	};
	
	var degrees = exports.degrees = (0, _utils.createUnitType)('deg');
	var percent = exports.percent = (0, _utils.createUnitType)('%');
	var px = exports.px = (0, _utils.createUnitType)('px');
	
	var number = exports.number = { test: _utils2.isNum };
	
	var scale = exports.scale = {
	  default: 1
	};
	
	var rgbUnit = exports.rgbUnit = {
	  filter: (0, _filters.compose)(
	  //http://codepen.io/osublake/full/xGVVaN/
	  // (v, value, action) => {
	  //   if (action) {
	  //     const fromColor = action.from * action.from;
	  //     const toColor = action.to * action.to;
	  //     return Math.sqrt(action.progress * (toColor - fromColor) + fromColor);
	  //   }
	
	  //   return v;
	  // },
	  (0, _filters.restrictBetween)(0, 255), Math.round)
	};
	
	var rgba = exports.rgba = {
	  childTypes: (_childTypes = {}, _childTypes[RED] = rgbUnit, _childTypes[GREEN] = rgbUnit, _childTypes[BLUE] = rgbUnit, _childTypes[ALPHA] = alpha, _childTypes),
	
	  test: (0, _utils.isFirstChars)('rgb'),
	
	  parse: (0, _utils.splitColorValues)([RED, GREEN, BLUE, ALPHA]),
	
	  combine: rgbaTemplate
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
	
	var FLOAT_REGEX = /(-)?(\d[\d\.]*)/g;
	var generateToken = function (token) {
	  return '${' + token + '}';
	};
	
	var complexString = exports.complexString = {};
	//# sourceMappingURL=data:application/json;base64,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NkIsS0FBN0IsQ0FBakIsQ0FBUDs7QUFFQSxXQUFTLFlBQVQ7Q0FaVzs7QUFlTixJQUFNLHdCQUFRO0FBQ25CLDJCQUNLLEtBQUssVUFBTCxFQUNBLEtBQUssVUFBTCxDQUZMOztBQUtBLFFBQU0sVUFBQyxLQUFEO1dBQVcsS0FBSyxJQUFMLENBQVUsS0FBVixLQUFvQixJQUFJLElBQUosQ0FBUyxLQUFULENBQXBCLElBQXVDLEtBQUssSUFBTCxDQUFVLEtBQVYsQ0FBdkM7R0FBWDtDQU5LOztBQVViLElBQU0sY0FBYyxrQkFBZDtBQUNOLElBQU0sZ0JBQWdCLFVBQUMsS0FBRDtTQUFXLE9BQU8sS0FBUCxHQUFlLEdBQWY7Q0FBWDs7QUFFZixJQUFNLHdDQUFnQixFQUFoQiIsImZpbGUiOiJ0eXBlcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFZhbHVlIHR5cGVzXG4gKlxuICogYWxwaGFcbiAqIGRlZ3JlZXNcbiAqIGhleFxuICogaHNsYVxuICogcGVyY2VudFxuICogcHhcbiAqIHJnYlVuaXRcbiAqIHJnYlxuICogc2NhbGVcbiAqL1xuaW1wb3J0IHsgcmVzdHJpY3RCZXR3ZWVuLCBjb21wb3NlIH0gZnJvbSAnLi9maWx0ZXJzJztcbmltcG9ydCB7IGNyZWF0ZVVuaXRUeXBlLCBpc0ZpcnN0Q2hhcnMsIHNwbGl0Q29sb3JWYWx1ZXMgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IGlzTnVtIH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcblxuLy8gU3RyaW5nIHByb3BlcnRpZXNcbmNvbnN0IFJFRCA9ICdSZWQnO1xuY29uc3QgR1JFRU4gPSAnR3JlZW4nO1xuY29uc3QgQkxVRSA9ICdCbHVlJztcbmNvbnN0IEFMUEhBID0gJ0FscGhhJztcbmNvbnN0IEhVRSA9ICdIdWUnO1xuY29uc3QgU0FUVVJBVElPTiA9ICdTYXR1cmF0aW9uJztcbmNvbnN0IExJR0hUTkVTUyA9ICdMaWdodG5lc3MnO1xuXG4vLyBUZW1wbGF0ZXNcbmNvbnN0IHJnYmFUZW1wbGF0ZSA9IChjb2xvcnMpID0+IGByZ2JhKCR7Y29sb3JzW1JFRF19LCAke2NvbG9yc1tHUkVFTl19LCAke2NvbG9yc1tCTFVFXX0sICR7Y29sb3JzW0FMUEhBXX0pYDtcbmNvbnN0IGhzbGFUZW1wbGF0ZSA9IChjb2xvcnMpID0+IGBoc2xhKCR7Y29sb3JzW0hVRV19LCAke2NvbG9yc1tTQVRVUkFUSU9OXX0sICR7Y29sb3JzW0xJR0hUTkVTU119LCAke2NvbG9yc1tBTFBIQV19KWA7XG5cbi8vIFZhbHVlIHR5cGVzXG5leHBvcnQgY29uc3QgYWxwaGEgPSB7XG4gIGZpbHRlcjogcmVzdHJpY3RCZXR3ZWVuKDAsIDEpXG59O1xuXG5leHBvcnQgY29uc3QgZGVncmVlcyA9IGNyZWF0ZVVuaXRUeXBlKCdkZWcnKTtcbmV4cG9ydCBjb25zdCBwZXJjZW50ID0gY3JlYXRlVW5pdFR5cGUoJyUnKTtcbmV4cG9ydCBjb25zdCBweCA9IGNyZWF0ZVVuaXRUeXBlKCdweCcpO1xuXG5leHBvcnQgY29uc3QgbnVtYmVyID0geyB0ZXN0OiBpc051bSB9O1xuXG5leHBvcnQgY29uc3Qgc2NhbGUgPSB7XG4gIGRlZmF1bHQ6IDFcbn07XG5cbmV4cG9ydCBjb25zdCByZ2JVbml0ID0ge1xuICBmaWx0ZXI6IGNvbXBvc2UoXG4gICAgLy9odHRwOi8vY29kZXBlbi5pby9vc3VibGFrZS9mdWxsL3hHVlZhTi9cbiAgICAvLyAodiwgdmFsdWUsIGFjdGlvbikgPT4ge1xuICAgIC8vICAgaWYgKGFjdGlvbikge1xuICAgIC8vICAgICBjb25zdCBmcm9tQ29sb3IgPSBhY3Rpb24uZnJvbSAqIGFjdGlvbi5mcm9tO1xuICAgIC8vICAgICBjb25zdCB0b0NvbG9yID0gYWN0aW9uLnRvICogYWN0aW9uLnRvO1xuICAgIC8vICAgICByZXR1cm4gTWF0aC5zcXJ0KGFjdGlvbi5wcm9ncmVzcyAqICh0b0NvbG9yIC0gZnJvbUNvbG9yKSArIGZyb21Db2xvcik7XG4gICAgLy8gICB9XG5cbiAgICAvLyAgIHJldHVybiB2O1xuICAgIC8vIH0sXG4gICAgcmVzdHJpY3RCZXR3ZWVuKDAsIDI1NSksXG4gICAgTWF0aC5yb3VuZFxuICApXG59O1xuXG5leHBvcnQgY29uc3QgcmdiYSA9IHtcbiAgY2hpbGRUeXBlczoge1xuICAgIFtSRURdOiByZ2JVbml0LFxuICAgIFtHUkVFTl06IHJnYlVuaXQsXG4gICAgW0JMVUVdOiByZ2JVbml0LFxuICAgIFtBTFBIQV06IGFscGhhXG4gIH0sXG5cbiAgdGVzdDogaXNGaXJzdENoYXJzKCdyZ2InKSxcblxuICBwYXJzZTogc3BsaXRDb2xvclZhbHVlcyhbUkVELCBHUkVFTiwgQkxVRSwgQUxQSEFdKSxcblxuICBjb21iaW5lOiByZ2JhVGVtcGxhdGVcbn07XG5cbmV4cG9ydCBjb25zdCBoZXggPSB7XG4gIC4uLnJnYmEsXG5cbiAgdGVzdDogaXNGaXJzdENoYXJzKCcjJyksXG5cbiAgcGFyc2U6ICh2KSA9PiB7XG4gICAgbGV0IHIsIGcsIGI7XG5cbiAgICAvLyBJZiB3ZSBoYXZlIDYgY2hhcmFjdGVycywgaWUgI0ZGMDAwMFxuICAgIGlmICh2Lmxlbmd0aCA+IDQpIHtcbiAgICAgIHIgPSB2LnN1YnN0cigxLCAyKTtcbiAgICAgIGcgPSB2LnN1YnN0cigzLCAyKTtcbiAgICAgIGIgPSB2LnN1YnN0cig1LCAyKTtcblxuICAgIC8vIE9yIHdlIGhhdmUgMyBjaGFyYWN0ZXJzLCBpZSAjRjAwXG4gICAgfSBlbHNlIHtcbiAgICAgIHIgPSB2LnN1YnN0cigxLCAxKTtcbiAgICAgIGcgPSB2LnN1YnN0cigyLCAxKTtcbiAgICAgIGIgPSB2LnN1YnN0cigzLCAxKTtcbiAgICAgIHIgKz0gcjtcbiAgICAgIGcgKz0gZztcbiAgICAgIGIgKz0gYjtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgUmVkOiBwYXJzZUludChyLCAxNiksXG4gICAgICBHcmVlbjogcGFyc2VJbnQoZywgMTYpLFxuICAgICAgQmx1ZTogcGFyc2VJbnQoYiwgMTYpLFxuICAgICAgQWxwaGE6IDFcbiAgICB9O1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgaHNsYSA9IHtcbiAgY2hpbGRUeXBlczoge1xuICAgIFtIVUVdOiBudW1iZXIsXG4gICAgW1NBVFVSQVRJT05dOiBwZXJjZW50LFxuICAgIFtMSUdIVE5FU1NdOiBwZXJjZW50LFxuICAgIFtBTFBIQV06IGFscGhhXG4gIH0sXG5cbiAgdGVzdDogaXNGaXJzdENoYXJzKCdoc2wnKSxcblxuICBwYXJzZTogc3BsaXRDb2xvclZhbHVlcyhbSFVFLCBTQVRVUkFUSU9OLCBMSUdIVE5FU1MsIEFMUEhBXSksXG5cbiAgY29tYmluZTogaHNsYVRlbXBsYXRlXG59O1xuXG5leHBvcnQgY29uc3QgY29sb3IgPSB7XG4gIGNoaWxkVHlwZXM6IHtcbiAgICAuLi5oc2xhLmNoaWxkVHlwZXMsXG4gICAgLi4ucmdiYS5jaGlsZFR5cGVzXG4gIH0sXG5cbiAgdGVzdDogKHZhbHVlKSA9PiByZ2JhLnRlc3QodmFsdWUpIHx8IGhleC50ZXN0KHZhbHVlKSB8fCBoc2xhLnRlc3QodmFsdWUpXG59O1xuXG5cbmNvbnN0IEZMT0FUX1JFR0VYID0gLygtKT8oXFxkW1xcZFxcLl0qKS9nO1xuY29uc3QgZ2VuZXJhdGVUb2tlbiA9ICh0b2tlbikgPT4gJyR7JyArIHRva2VuICsgJ30nO1xuXG5leHBvcnQgY29uc3QgY29tcGxleFN0cmluZyA9IHtcblxufTtcbiJdfQ==

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.createDelimited = exports.getColorValues = exports.findValueAndUnit = exports.createUnitType = exports.isFirstChars = exports.contains = undefined;
	exports.splitColorValues = splitColorValues;
	
	var _utils = __webpack_require__(21);
	
	var _filters = __webpack_require__(16);
	
	/**
	 *  Returns a function that will check any argument for `term`
	 * `contains('needle')('haystack')`
	 */
	var contains = exports.contains = function (term) {
	  return function (v) {
	    return (0, _utils.isString)(term) && v.indexOf(term) !== -1;
	  };
	};
	
	/**
	 *  Returns a function that will check to see if an argument is
	 *  the first characters in the provided `term`
	 * `isFirstChars('needle')('haystack')`
	 */
	var isFirstChars = exports.isFirstChars = function (term) {
	  return function (v) {
	    return (0, _utils.isString)(term) && v.indexOf(term) === 0;
	  };
	};
	
	/**
	 * Create a unit value type
	 */
	var createUnitType = exports.createUnitType = function (type) {
	  return {
	    test: contains(type),
	    parse: parseFloat,
	    filter: (0, _filters.appendUnit)(type)
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
	    var valuesArray = (0, _utils.splitCommaDelimited)((0, _utils.getValueFromFunctionString)(v));
	
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
	  var colors = (0, _utils.splitCommaDelimited)((0, _utils.getValueFromFunctionString)(value));
	
	  for (var i = 0; i < numColorTerms; i++) {
	    colorValues[colorTerms[i]] = colors[i] !== undefined ? colors[i] : 1;
	  }
	
	  return colorValues;
	};
	
	/*
	  Get value from function string
	
	  "translateX(20px)" -> "20px"
	*/
	// export const getValueFromFunctionString = (value) => value.substring(value.indexOf('(') + 1, value.lastIndexOf(')'));
	
	var createDelimited = exports.createDelimited = function (values, terms, delimiter, chop) {
	  var numTerms = terms.length;
	  var combined = '';
	
	  for (var i = 0; i < numTerms; i++) {
	    var term = terms[i];
	    if (values.hasOwnProperty(term)) {
	      combined += values[term] + delimiter;
	    }
	  }
	
	  if (chop) {
	    combined = combined.slice(0, -chop);
	  }
	
	  return combined;
	};
	//# sourceMappingURL=data:application/json;base64,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RkY7O0FBT0EsTUFBSSxJQUFKLEVBQVU7QUFDUixlQUFXLFNBQVMsS0FBVCxDQUFlLENBQWYsRUFBa0IsQ0FBQyxJQUFELENBQTdCLENBRFE7R0FBVjs7QUFJQSxTQUFPLFFBQVAsQ0FmaUU7Q0FBcEMiLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3BsaXRDb21tYURlbGltaXRlZCwgZ2V0VmFsdWVGcm9tRnVuY3Rpb25TdHJpbmcsIGlzU3RyaW5nIH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcbmltcG9ydCB7IGFwcGVuZFVuaXQgfSBmcm9tICcuL2ZpbHRlcnMnO1xuXG4vKipcbiAqICBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGNoZWNrIGFueSBhcmd1bWVudCBmb3IgYHRlcm1gXG4gKiBgY29udGFpbnMoJ25lZWRsZScpKCdoYXlzdGFjaycpYFxuICovXG5leHBvcnQgY29uc3QgY29udGFpbnMgPSAodGVybSkgPT4gKHYpID0+IHtcbiAgcmV0dXJuIChpc1N0cmluZyh0ZXJtKSAmJiB2LmluZGV4T2YodGVybSkgIT09IC0xKVxufTtcblxuLyoqXG4gKiAgUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBjaGVjayB0byBzZWUgaWYgYW4gYXJndW1lbnQgaXNcbiAqICB0aGUgZmlyc3QgY2hhcmFjdGVycyBpbiB0aGUgcHJvdmlkZWQgYHRlcm1gXG4gKiBgaXNGaXJzdENoYXJzKCduZWVkbGUnKSgnaGF5c3RhY2snKWBcbiAqL1xuZXhwb3J0IGNvbnN0IGlzRmlyc3RDaGFycyA9ICh0ZXJtKSA9PiAodikgPT4ge1xuICByZXR1cm4gKGlzU3RyaW5nKHRlcm0pICYmIHYuaW5kZXhPZih0ZXJtKSA9PT0gMCk7XG59O1xuXG4vKipcbiAqIENyZWF0ZSBhIHVuaXQgdmFsdWUgdHlwZVxuICovXG5leHBvcnQgY29uc3QgY3JlYXRlVW5pdFR5cGUgPSAodHlwZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRlc3Q6IGNvbnRhaW5zKHR5cGUpLFxuICAgIHBhcnNlOiBwYXJzZUZsb2F0LFxuICAgIGZpbHRlcjogYXBwZW5kVW5pdCh0eXBlKVxuICB9O1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCB3aWxsIHNwbGl0IGNvbG9yXG4gKiB2YWx1ZXMgZnJvbSBzdHJpbmcgaW50byBhbiBvYmplY3Qgb2YgcHJvcGVydGllc1xuICogYHNwbGl0Q29sb3JWYWx1ZXMoWydSZWQnLCAnR3JlZW4nLCAnQmx1ZSddKSgncmdiYSgwLDAsMCknKWBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNwbGl0Q29sb3JWYWx1ZXModGVybXMpIHtcbiAgY29uc3QgbnVtVGVybXMgPSB0ZXJtcy5sZW5ndGg7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgY29uc3QgdmFsdWVzID0ge307XG4gICAgY29uc3QgdmFsdWVzQXJyYXkgPSBzcGxpdENvbW1hRGVsaW1pdGVkKGdldFZhbHVlRnJvbUZ1bmN0aW9uU3RyaW5nKHYpKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtVGVybXM7IGkrKykge1xuICAgICAgdmFsdWVzW3Rlcm1zW2ldXSA9ICh2YWx1ZXNBcnJheVtpXSAhPT0gdW5kZWZpbmVkKSA/IHBhcnNlRmxvYXQodmFsdWVzQXJyYXlbaV0pIDogMTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWVzO1xuICB9XG59XG5cbi8qXG4gIFNwbGl0IGEgdmFsdWUgaW50byBhIHZhbHVlL3VuaXQgb2JqZWN0XG4gIFxuICAgIFwiMjAwcHhcIiAtPiB7IHZhbHVlOiAyMDAsIHVuaXQ6IFwicHhcIiB9XG4gICAgXG4gIEBwYXJhbSBbc3RyaW5nXTogVmFsdWUgdG8gc3BsaXRcbiAgQHJldHVybiBbb2JqZWN0XTogT2JqZWN0IHdpdGggdmFsdWUgYW5kIHVuaXQgcHJvcHNcbiovXG5leHBvcnQgY29uc3QgZmluZFZhbHVlQW5kVW5pdCA9ICh2YWx1ZSkgPT4ge1xuICBpZiAodmFsdWUubWF0Y2gpIHtcbiAgICBjb25zdCBzcGxpdFZhbHVlID0gdmFsdWUubWF0Y2goLygtP1xcZCpcXC4/XFxkKikoLiopLyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHBhcnNlRmxvYXQoc3BsaXRWYWx1ZVsxXSksXG4gICAgICB1bml0OiAgc3BsaXRWYWx1ZVsyXVxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHsgdmFsdWUgfTtcbiAgfVxufTtcblxuLypcbiAgU3BsaXQgY29sb3Igc3RyaW5nIGludG8gbWFwIG9mIGNvbG9yIHByb3BlcnRpZXNcblxuICBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMClcIiwgW1wiUmVkXCIsICdHcmVlblwiLCBcIkJsdWVcIiwgXCJBbHBoYVwiXVxuXG4gIHsgUmVkOiAyNTUuLi4gfVxuKi9cbmV4cG9ydCBjb25zdCBnZXRDb2xvclZhbHVlcyA9ICh2YWx1ZSwgY29sb3JUZXJtcykgPT4ge1xuICBjb25zdCBudW1Db2xvclRlcm1zID0gY29sb3JUZXJtcy5sZW5ndGg7XG4gIGNvbnN0IGNvbG9yVmFsdWVzID0ge307XG4gIGNvbnN0IGNvbG9ycyA9IHNwbGl0Q29tbWFEZWxpbWl0ZWQoZ2V0VmFsdWVGcm9tRnVuY3Rpb25TdHJpbmcodmFsdWUpKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUNvbG9yVGVybXM7IGkrKykge1xuICAgIGNvbG9yVmFsdWVzW2NvbG9yVGVybXNbaV1dID0gKGNvbG9yc1tpXSAhPT0gdW5kZWZpbmVkKSA/IGNvbG9yc1tpXSA6IDE7XG4gIH1cblxuICByZXR1cm4gY29sb3JWYWx1ZXM7XG59O1xuXG4vKlxuICBHZXQgdmFsdWUgZnJvbSBmdW5jdGlvbiBzdHJpbmdcblxuICBcInRyYW5zbGF0ZVgoMjBweClcIiAtPiBcIjIwcHhcIlxuKi9cbi8vIGV4cG9ydCBjb25zdCBnZXRWYWx1ZUZyb21GdW5jdGlvblN0cmluZyA9ICh2YWx1ZSkgPT4gdmFsdWUuc3Vic3RyaW5nKHZhbHVlLmluZGV4T2YoJygnKSArIDEsIHZhbHVlLmxhc3RJbmRleE9mKCcpJykpO1xuXG5cbmV4cG9ydCBjb25zdCBjcmVhdGVEZWxpbWl0ZWQgPSAodmFsdWVzLCB0ZXJtcywgZGVsaW1pdGVyLCBjaG9wKSA9PiB7XG4gIGNvbnN0IG51bVRlcm1zID0gdGVybXMubGVuZ3RoO1xuICBsZXQgY29tYmluZWQgPSAnJztcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVRlcm1zOyBpKyspIHtcbiAgICBjb25zdCB0ZXJtID0gdGVybXNbaV07XG4gICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eSh0ZXJtKSkge1xuICAgICAgY29tYmluZWQgKz0gdmFsdWVzW3Rlcm1dICsgZGVsaW1pdGVyO1xuICAgIH1cbiAgfVxuXG4gIGlmIChjaG9wKSB7XG4gICAgY29tYmluZWQgPSBjb21iaW5lZC5zbGljZSgwLCAtY2hvcCk7XG4gIH1cblxuICByZXR1cm4gY29tYmluZWQ7XG59O1xuIl19

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDNhMzk5ZTViNWE0YjkwZjVjZmIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9wbW90aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2NoYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2RlbGF5LmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2dyb3VwLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3BoeXNpY3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvc3RhZ2dlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy90d2Vlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy90cmFjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5wdXQvcG9pbnRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJhbWVzeW5jL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWFzaW5nL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvY2FsYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUvZmlsdGVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJhbWVzeW5jL29uLW5leHQtZnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyYW1lc3luYy9jcmVhdGUtcmVuZGVyLXN0ZXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlL3V0aWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztB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MkMsbXhHOzs7Ozs7O0FDbkQzQzs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUEyQyxtbFk7Ozs7OztBQzNRM0M7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQVksT0FBTztBQUNuQixhQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBWSxhQUFhO0FBQ3pCLGFBQVk7QUFDWjtBQUNBO0FBQ0EsMEVBQXlFLGFBQWE7QUFDdEY7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWUscUJBQXFCO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsV0FBVSxpQkFBaUI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFZLE9BQU87QUFDbkIsYUFBWSxPQUFPO0FBQ25CLGFBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRDQUEyQyx1dEo7Ozs7Ozs7O0FDbEczQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0EsNENBQTJDLDJ6RTs7Ozs7O0FDN0MzQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBcUIsa0JBQWtCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBMkMsbXVGOzs7Ozs7QUMvQzNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNENBQTJDLHVwTTs7Ozs7Ozs7O0FDL0ozQzs7QUFFQTtBQUNBOztBQUVBLG9EQUFtRCxnQkFBZ0Isc0JBQXNCLE9BQU8sMkJBQTJCLDBCQUEwQix5REFBeUQsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLGVBQWU7O0FBRTlQLCtCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdDQUErQjs7QUFFL0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0EsZ0NBQStCOztBQUUvQjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLG9DQUFtQzs7QUFFbkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQSxpQ0FBZ0M7O0FBRWhDOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBeUI7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFZLGNBQWM7QUFDMUI7O0FBRUE7QUFDQSw0Q0FBMkMsbXJOOzs7Ozs7QUMvSTNDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9CQUFtQixjQUFjO0FBQ2pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWdCOztBQUVoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsYUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBaUIsbUJBQW1CO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWlCLGNBQWM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUEyQywyNk0iLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA0M2EzOTllNWI1YTRiOTBmNWNmYlxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9wb3Btb3Rpb24gPSByZXF1aXJlKCcuL3BvcG1vdGlvbicpO1xuXG52YXIgUG9wbW90aW9uID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3BvcG1vdGlvbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbndpbmRvdy5Qb3Btb3Rpb24gPSBQb3Btb3Rpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OW5iRzlpWVd3dWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZCUVRzN1NVRkJXVHM3T3p0QlFVTmFMRTlCUVU4c1UwRkJVQ3hIUVVGdFFpeFRRVUZ1UWlJc0ltWnBiR1VpT2lKbmJHOWlZV3d1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUNvZ1lYTWdVRzl3Ylc5MGFXOXVJR1p5YjIwZ0p5NHZjRzl3Ylc5MGFXOXVKenRjYm5kcGJtUnZkeTVRYjNCdGIzUnBiMjRnUFNCUWIzQnRiM1JwYjI0N1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9nbG9iYWwuanNcbiAqKiBtb2R1bGUgaWQgPSAwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmNvbG9yID0gZXhwb3J0cy5lYXNpbmcgPSBleHBvcnRzLnBvaW50ZXIgPSBleHBvcnRzLnRyYWNrID0gZXhwb3J0cy50d2VlbiA9IGV4cG9ydHMuc3RhZ2dlciA9IGV4cG9ydHMucGh5c2ljcyA9IGV4cG9ydHMuZ3JvdXAgPSBleHBvcnRzLmRlbGF5ID0gZXhwb3J0cy5jaGFpbiA9IGV4cG9ydHMuQWN0aW9uID0gZXhwb3J0cy52YWx1ZSA9IGV4cG9ydHMuY3VycmVudEZyYW1lVGltZXN0YW1wID0gZXhwb3J0cy50aW1lU2luY2VMYXN0RnJhbWUgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVFbmQgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVSZW5kZXIgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVVcGRhdGUgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVTdGFydCA9IGV4cG9ydHMub25GcmFtZUVuZCA9IGV4cG9ydHMub25GcmFtZVJlbmRlciA9IGV4cG9ydHMub25GcmFtZVVwZGF0ZSA9IGV4cG9ydHMub25GcmFtZVN0YXJ0ID0gdW5kZWZpbmVkO1xuXG52YXIgX2ZyYW1lc3luYyA9IHJlcXVpcmUoJy4vZnJhbWVzeW5jJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnb25GcmFtZVN0YXJ0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ZyYW1lc3luYy5vbkZyYW1lU3RhcnQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdvbkZyYW1lVXBkYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ZyYW1lc3luYy5vbkZyYW1lVXBkYXRlO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnb25GcmFtZVJlbmRlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9mcmFtZXN5bmMub25GcmFtZVJlbmRlcjtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ29uRnJhbWVFbmQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZnJhbWVzeW5jLm9uRnJhbWVFbmQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjYW5jZWxPbkZyYW1lU3RhcnQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZnJhbWVzeW5jLmNhbmNlbE9uRnJhbWVTdGFydDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NhbmNlbE9uRnJhbWVVcGRhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZnJhbWVzeW5jLmNhbmNlbE9uRnJhbWVVcGRhdGU7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjYW5jZWxPbkZyYW1lUmVuZGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ZyYW1lc3luYy5jYW5jZWxPbkZyYW1lUmVuZGVyO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY2FuY2VsT25GcmFtZUVuZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9mcmFtZXN5bmMuY2FuY2VsT25GcmFtZUVuZDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3RpbWVTaW5jZUxhc3RGcmFtZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9mcmFtZXN5bmMudGltZVNpbmNlTGFzdEZyYW1lO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3VycmVudEZyYW1lVGltZXN0YW1wJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ZyYW1lc3luYy5jdXJyZW50RnJhbWVUaW1lc3RhbXA7XG4gIH1cbn0pO1xuXG52YXIgX3R5cGVzID0gcmVxdWlyZSgnLi92YWx1ZS90eXBlcycpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NvbG9yJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX3R5cGVzLmNvbG9yO1xuICB9XG59KTtcblxudmFyIF92YWx1ZTIgPSByZXF1aXJlKCcuL3ZhbHVlJyk7XG5cbnZhciBfdmFsdWUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdmFsdWUyKTtcblxudmFyIF9hY3Rpb25zID0gcmVxdWlyZSgnLi9hY3Rpb25zJyk7XG5cbnZhciBfYWN0aW9uczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hY3Rpb25zKTtcblxudmFyIF9jaGFpbjIgPSByZXF1aXJlKCcuL2FjdGlvbnMvY2hhaW4nKTtcblxudmFyIF9jaGFpbjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGFpbjIpO1xuXG52YXIgX2RlbGF5MiA9IHJlcXVpcmUoJy4vYWN0aW9ucy9kZWxheScpO1xuXG52YXIgX2RlbGF5MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlbGF5Mik7XG5cbnZhciBfZ3JvdXAyID0gcmVxdWlyZSgnLi9hY3Rpb25zL2dyb3VwJyk7XG5cbnZhciBfZ3JvdXAzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ3JvdXAyKTtcblxudmFyIF9waHlzaWNzMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy9waHlzaWNzJyk7XG5cbnZhciBfcGh5c2ljczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9waHlzaWNzMik7XG5cbnZhciBfc3RhZ2dlcjIgPSByZXF1aXJlKCcuL2FjdGlvbnMvc3RhZ2dlcicpO1xuXG52YXIgX3N0YWdnZXIzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RhZ2dlcjIpO1xuXG52YXIgX3R3ZWVuMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy90d2VlbicpO1xuXG52YXIgX3R3ZWVuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R3ZWVuMik7XG5cbnZhciBfdHJhY2syID0gcmVxdWlyZSgnLi9hY3Rpb25zL3RyYWNrJyk7XG5cbnZhciBfdHJhY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhY2syKTtcblxudmFyIF9wb2ludGVyMiA9IHJlcXVpcmUoJy4vaW5wdXQvcG9pbnRlcicpO1xuXG52YXIgX3BvaW50ZXIzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9pbnRlcjIpO1xuXG52YXIgX2Vhc2luZzIgPSByZXF1aXJlKCcuL2Vhc2luZycpO1xuXG52YXIgX2Vhc2luZyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9lYXNpbmcyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy52YWx1ZSA9IF92YWx1ZTMuZGVmYXVsdDtcbmV4cG9ydHMuQWN0aW9uID0gX2FjdGlvbnMyLmRlZmF1bHQ7XG5leHBvcnRzLmNoYWluID0gX2NoYWluMy5kZWZhdWx0O1xuZXhwb3J0cy5kZWxheSA9IF9kZWxheTMuZGVmYXVsdDtcbmV4cG9ydHMuZ3JvdXAgPSBfZ3JvdXAzLmRlZmF1bHQ7XG5leHBvcnRzLnBoeXNpY3MgPSBfcGh5c2ljczMuZGVmYXVsdDtcbmV4cG9ydHMuc3RhZ2dlciA9IF9zdGFnZ2VyMy5kZWZhdWx0O1xuZXhwb3J0cy50d2VlbiA9IF90d2VlbjMuZGVmYXVsdDtcbmV4cG9ydHMudHJhY2sgPSBfdHJhY2szLmRlZmF1bHQ7XG5leHBvcnRzLnBvaW50ZXIgPSBfcG9pbnRlcjMuZGVmYXVsdDtcbmV4cG9ydHMuZWFzaW5nID0gX2Vhc2luZztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5d2IzQnRiM1JwYjI0dWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096dHpRa0ZGUlRzN096czdPM05DUVVOQk96czdPenM3YzBKQlEwRTdPenM3T3p0elFrRkRRVHM3T3pzN08zTkNRVU5CT3pzN096czdjMEpCUTBFN096czdPenR6UWtGRFFUczdPenM3TzNOQ1FVTkJPenM3T3pzN2MwSkJRMEU3T3pzN096dHpRa0ZEUVRzN096czdPenM3TzJ0Q1FXVlBPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN08xRkJXa1k3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFN5SXNJbVpwYkdVaU9pSndiM0J0YjNScGIyNHVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFF2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTHk4Z1JuSmhiV1Z6ZVc1aklITmphR1ZrZFd4bGNuTmNibVY0Y0c5eWRDQjdYRzRnSUc5dVJuSmhiV1ZUZEdGeWRDeGNiaUFnYjI1R2NtRnRaVlZ3WkdGMFpTeGNiaUFnYjI1R2NtRnRaVkpsYm1SbGNpeGNiaUFnYjI1R2NtRnRaVVZ1WkN4Y2JpQWdZMkZ1WTJWc1QyNUdjbUZ0WlZOMFlYSjBMRnh1SUNCallXNWpaV3hQYmtaeVlXMWxWWEJrWVhSbExGeHVJQ0JqWVc1alpXeFBia1p5WVcxbFVtVnVaR1Z5TEZ4dUlDQmpZVzVqWld4UGJrWnlZVzFsUlc1a0xGeHVJQ0IwYVcxbFUybHVZMlZNWVhOMFJuSmhiV1VzWEc0Z0lHTjFjbkpsYm5SR2NtRnRaVlJwYldWemRHRnRjRnh1ZlNCbWNtOXRJQ2N1TDJaeVlXMWxjM2x1WXljN1hHNWNibVY0Y0c5eWRDQjJZV3gxWlNCbWNtOXRJQ2N1TDNaaGJIVmxKenRjYm1WNGNHOXlkQ0JCWTNScGIyNGdabkp2YlNBbkxpOWhZM1JwYjI1ekp6dGNibVY0Y0c5eWRDQmphR0ZwYmlCbWNtOXRJQ2N1TDJGamRHbHZibk12WTJoaGFXNG5PMXh1Wlhod2IzSjBJR1JsYkdGNUlHWnliMjBnSnk0dllXTjBhVzl1Y3k5a1pXeGhlU2M3WEc1bGVIQnZjblFnWjNKdmRYQWdabkp2YlNBbkxpOWhZM1JwYjI1ekwyZHliM1Z3Snp0Y2JtVjRjRzl5ZENCd2FIbHphV056SUdaeWIyMGdKeTR2WVdOMGFXOXVjeTl3YUhsemFXTnpKenRjYm1WNGNHOXlkQ0J6ZEdGbloyVnlJR1p5YjIwZ0p5NHZZV04wYVc5dWN5OXpkR0ZuWjJWeUp6dGNibVY0Y0c5eWRDQjBkMlZsYmlCbWNtOXRJQ2N1TDJGamRHbHZibk12ZEhkbFpXNG5PMXh1Wlhod2IzSjBJSFJ5WVdOcklHWnliMjBnSnk0dllXTjBhVzl1Y3k5MGNtRmpheWM3WEc1bGVIQnZjblFnY0c5cGJuUmxjaUJtY205dElDY3VMMmx1Y0hWMEwzQnZhVzUwWlhJbk8xeHVaWGh3YjNKMElDb2dZWE1nWldGemFXNW5JR1p5YjIwZ0p5NHZaV0Z6YVc1bkp6dGNibHh1Wlhod2IzSjBJSHNnWTI5c2IzSWdmU0JtY205dElDY3VMM1poYkhWbEwzUjVjR1Z6Snp0Y2JseHVYRzR2TDJWNGNHOXlkQ0JqYzNOU1pXNWtaWElnWm5KdmJTQW5MaTl5Wlc1a1pYSXZZM056Snp0Y2JseHVYRzR2THlCbGVIQnZjblFnZEdsdFpXeHBibVVnWm5KdmJTQW5MaTlwYm1NdmRHbHRaV3hwYm1Vbk8xeHVYRzR2THlBdkx5QkJaR0Z3ZEdWeWMxeHVMeThnWlhod2IzSjBJR055WldGMFpVRmtZWEIwWlhJZ1puSnZiU0FuTGk5aFpHRndkR1Z5TDJGa1lYQjBaWEluTzF4dUx5OGdaWGh3YjNKMElHRjBkSElnWm5KdmJTQW5MaTloWkdGd2RHVnlMMkYwZEhJdFlXUmhjSFJsY2ljN1hHNHZMeUJsZUhCdmNuUWdZM056SUdaeWIyMGdKeTR2WVdSaGNIUmxjaTlqYzNNdFlXUmhjSFJsY2ljN1hHNHZMeUJsZUhCdmNuUWdiMkpxWldOMElHWnliMjBnSnk0dllXUmhjSFJsY2k5dlltcGxZM1F0WVdSaGNIUmxjaWM3WEc0dkx5QmxlSEJ2Y25RZ2MzWm5JR1p5YjIwZ0p5NHZZV1JoY0hSbGNpOXpkbWN0WVdSaGNIUmxjaWM3WEc0dkx5QmxlSEJ2Y25RZ2MzWm5VR0YwYUNCbWNtOXRJQ2N1TDJGa1lYQjBaWEl2YzNabkxYQmhkR2d0WVdSaGNIUmxjaWM3WEc1Y2JpOHZJQzh2SUZaaGJIVmxJSFI1Y0dWelhHNHZMeUJwYlhCdmNuUWdZV3h3YUdFZ1puSnZiU0FuTGk5MllXeDFaUzEwZVhCbGN5OWhiSEJvWVNjN1hHNHZMeUJwYlhCdmNuUWdZVzVuYkdVZ1puSnZiU0FuTGk5MllXeDFaUzEwZVhCbGN5OWhibWRzWlNjN1hHNHZMeUJwYlhCdmNuUWdZMjlzYjNJZ1puSnZiU0FuTGk5MllXeDFaUzEwZVhCbGN5OWpiMnh2Y2ljN1hHNHZMeUJwYlhCdmNuUWdZMjl0Y0d4bGVDQm1jbTl0SUNjdUwzWmhiSFZsTFhSNWNHVnpMMk52YlhCc1pYZ25PMXh1THk4Z2FXMXdiM0owSUdobGVDQm1jbTl0SUNjdUwzWmhiSFZsTFhSNWNHVnpMMmhsZUNjN1hHNHZMeUJwYlhCdmNuUWdhSE5zSUdaeWIyMGdKeTR2ZG1Gc2RXVXRkSGx3WlhNdmFITnNKenRjYmk4dklHbHRjRzl5ZENCd2VDQm1jbTl0SUNjdUwzWmhiSFZsTFhSNWNHVnpMM0I0Snp0Y2JpOHZJR2x0Y0c5eWRDQnlaMklnWm5KdmJTQW5MaTkyWVd4MVpTMTBlWEJsY3k5eVoySW5PMXh1THk4Z2FXMXdiM0owSUhOallXeGxJR1p5YjIwZ0p5NHZkbUZzZFdVdGRIbHdaWE12YzJOaGJHVW5PMXh1THk4Z2FXMXdiM0owSUhOb1lXUnZkeUJtY205dElDY3VMM1poYkhWbExYUjVjR1Z6TDNOb1lXUnZkeWM3WEc0dkx5QnBiWEJ2Y25RZ2RXNXBkQ0JtY205dElDY3VMM1poYkhWbExYUjVjR1Z6TDNWdWFYUW5PMXh1THk4Z1pYaHdiM0owSUdOdmJuTjBJSFpoYkhWbFZIbHdaU0E5SUhzZ1lXeHdhR0VzSUdGdVoyeGxMQ0JqYjJ4dmNpd2dZMjl0Y0d4bGVDd2dhR1Y0TENCb2Myd3NJSEI0TENCeVoySXNJSE5qWVd4bExDQnphR0ZrYjNjc0lIVnVhWFFnZlR0Y2JseHVMeThnTHk4Z1ZISmhibk5tYjNKdFpYSnpYRzR2THlCbGVIQnZjblFnS2lCaGN5QjBjbUZ1YzJadmNtMWxjbk1nWm5KdmJTQW5MaTlwYm1NdmRISmhibk5tYjNKdFpYSnpKenRjYmx4dUx5OGdMeXBjYmk4dklDQWdVbVYwZFhKdWN5QmhJSFpsY25OcGIyNGdiMllnZEdobElFRmpkR2x2YmlCaWIzVnVaQ0IwYnlCaElFWnNiM2RjYmx4dUx5OGdJQ0JYWlNkeVpTQmhaR1JwYm1jZ1lHOXVZQ0JvWlhKbElHSmxZMkYxYzJVZ1JteHZkeUJsZUhSbGJtUnpJRUZqZEdsdmJpeGNiaTh2SUNBZ2IzUm9aWEozYVhObElHTnlaV0YwYVc1bklHRWdZMmx5WTNWc1lYSWdiVzlrZFd4aGNpQmtaWEJsYm1SbGJtTjVMaUJHZFhSMWNtVmNiaTh2SUNBZ2NtVm1ZV04wYjNKcGJtY3NJR2xsSUcxdmRtbHVaeUIwYnlCaElHTnZiWEJ2YzJsMGFXOXVZV3dnYlc5a1pXd2dkMmxzYkZ4dUx5OGdJQ0J5WlcxdmRtVWdkR2hsSUc1bFpXUWdabTl5SUhWeklIUnZJR1J2SUhSb2FYTWdhR1Z5WlM1Y2JpOHZJQ292WEc0dkx5QkJZM1JwYjI0dWNISnZkRzkwZVhCbExtOXVJRDBnWm5WdVkzUnBiMjRnS0dWc1pXMWxiblFwSUh0Y2JpOHZJQ0FnYVdZZ0tDRmxiR1Z0Wlc1MExtTnZibTVsWTNRcElIdGNiaTh2SUNBZ0lDQmxiR1Z0Wlc1MElEMGdaMlYwUm14dmR5aGxiR1Z0Wlc1MEtUdGNiaTh2SUNBZ2ZWeHVYRzR2THlBZ0lISmxkSFZ5YmlCbGJHVnRaVzUwTG1OdmJtNWxZM1FvZEdocGN5azdYRzR2THlCOU8xeHVYRzR2THlCbGVIQnZjblFnZXlCQlkzUnBiMjRnZlRzaVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3BvcG1vdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF8gPSByZXF1aXJlKCcuLycpO1xuXG52YXIgXzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF8pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBDaGFpbiA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gIF9pbmhlcml0cyhDaGFpbiwgX0FjdGlvbik7XG5cbiAgZnVuY3Rpb24gQ2hhaW4ocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2hhaW4pO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpcy5wbGF5TmV4dCA9IF90aGlzLnBsYXlOZXh0LmJpbmQoX3RoaXMpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIENoYWluLnByb3RvdHlwZS5vblN0YXJ0ID0gZnVuY3Rpb24gb25TdGFydCgpIHtcbiAgICB0aGlzLnByb3BzLmkgPSAwO1xuICAgIHRoaXMucGxheUN1cnJlbnQoKTtcbiAgfTtcblxuICBDaGFpbi5wcm90b3R5cGUucGxheU5leHQgPSBmdW5jdGlvbiBwbGF5TmV4dCgpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgaSA9IF9wcm9wcy5pO1xuICAgIHZhciBvcmRlciA9IF9wcm9wcy5vcmRlcjtcblxuICAgIGlmIChpIDwgb3JkZXIubGVuZ3RoIC0gMSkge1xuICAgICAgdGhpcy5wcm9wcy5pKys7XG4gICAgICB0aGlzLnBsYXlDdXJyZW50KCk7XG4gICAgfVxuICB9O1xuXG4gIENoYWluLnByb3RvdHlwZS5wbGF5Q3VycmVudCA9IGZ1bmN0aW9uIHBsYXlDdXJyZW50KCkge1xuICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcztcbiAgICB2YXIgaSA9IF9wcm9wczIuaTtcbiAgICB2YXIgb3JkZXIgPSBfcHJvcHMyLm9yZGVyO1xuXG4gICAgb3JkZXJbaV0ub25Db21wbGV0ZSA9IHRoaXMucGxheU5leHQ7XG4gICAgb3JkZXJbaV0uc3RhcnQoKTtcbiAgfTtcblxuICBDaGFpbi5wcm90b3R5cGUub25TdG9wID0gZnVuY3Rpb24gb25TdG9wKCkge1xuICAgIHZhciBfcHJvcHMzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgaSA9IF9wcm9wczMuaTtcbiAgICB2YXIgb3JkZXIgPSBfcHJvcHMzLm9yZGVyO1xuXG4gICAgb3JkZXJbaV0uc3RvcCgpO1xuICB9O1xuXG4gIHJldHVybiBDaGFpbjtcbn0oXzIuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcmRlcikge1xuICByZXR1cm4gbmV3IENoYWluKHsgb3JkZXI6IG9yZGVyIH0pO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDJOb1lXbHVMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN1FVRkJRVHM3T3pzN096czdPenM3TzBsQlJVMDdPenRCUVVOS0xGZEJSRWtzUzBGRFNpeERRVUZaTEV0QlFWb3NSVUZCYlVJN01FSkJSR1lzVDBGRFpUczdhVVJCUTJwQ0xHMUNRVUZOTEV0QlFVNHNSMEZFYVVJN08wRkJSV3BDTEZWQlFVc3NVVUZCVEN4SFFVRm5RaXhOUVVGTExGRkJRVXdzUTBGQll5eEpRVUZrTEU5QlFXaENMRU5CUm1sQ096dEhRVUZ1UWpzN1FVRkVTU3hyUWtGTlNpdzJRa0ZCVlR0QlFVTlNMRk5CUVVzc1MwRkJUQ3hEUVVGWExFTkJRVmdzUjBGQlpTeERRVUZtTEVOQlJGRTdRVUZGVWl4VFFVRkxMRmRCUVV3c1IwRkdVVHM3TzBGQlRrNHNhMEpCVjBvc0swSkJRVmM3YVVKQlExa3NTMEZCU3l4TFFVRk1MRU5CUkZvN1VVRkRSQ3hoUVVSRE8xRkJRMFVzY1VKQlJFWTdPMEZCUlZRc1VVRkJTU3hKUVVGSkxFMUJRVTBzVFVGQlRpeEhRVUZsTEVOQlFXWXNSVUZCYTBJN1FVRkRlRUlzVjBGQlN5eExRVUZNTEVOQlFWY3NRMEZCV0N4SFFVUjNRanRCUVVWNFFpeFhRVUZMTEZkQlFVd3NSMEZHZDBJN1MwRkJNVUk3T3p0QlFXSkZMR3RDUVcxQ1NpeHhRMEZCWXp0clFrRkRVeXhMUVVGTExFdEJRVXdzUTBGRVZEdFJRVU5LTEdOQlJFazdVVUZEUkN4elFrRkVRenM3UVVGRldpeFZRVUZOTEVOQlFVNHNSVUZCVXl4VlFVRlVMRWRCUVhOQ0xFdEJRVXNzVVVGQlRDeERRVVpXTzBGQlIxb3NWVUZCVFN4RFFVRk9MRVZCUVZNc1MwRkJWQ3hIUVVoWk96czdRVUZ1UWxZc2EwSkJlVUpLTERKQ1FVRlRPMnRDUVVOakxFdEJRVXNzUzBGQlRDeERRVVJrTzFGQlEwTXNZMEZFUkR0UlFVTkpMSE5DUVVSS096dEJRVVZRTEZWQlFVMHNRMEZCVGl4RlFVRlRMRWxCUVZRc1IwRkdUenM3TzFOQmVrSk1PenM3YTBKQkswSlRMRlZCUVVNc1MwRkJSRHRUUVVGWExFbEJRVWtzUzBGQlNpeERRVUZWTEVWQlFVVXNXVUZCUml4RlFVRldPME5CUVZnaUxDSm1hV3hsSWpvaVkyaGhhVzR1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUVGamRHbHZiaUJtY205dElDY3VMeWM3WEc1Y2JtTnNZWE56SUVOb1lXbHVJR1Y0ZEdWdVpITWdRV04wYVc5dUlIdGNiaUFnWTI5dWMzUnlkV04wYjNJb2NISnZjSE1wSUh0Y2JpQWdJQ0J6ZFhCbGNpaHdjbTl3Y3lrN1hHNGdJQ0FnZEdocGN5NXdiR0Y1VG1WNGRDQTlJSFJvYVhNdWNHeGhlVTVsZUhRdVltbHVaQ2gwYUdsektUdGNiaUFnZlZ4dVhHNGdJRzl1VTNSaGNuUW9LU0I3WEc0Z0lDQWdkR2hwY3k1d2NtOXdjeTVwSUQwZ01EdGNiaUFnSUNCMGFHbHpMbkJzWVhsRGRYSnlaVzUwS0NrN1hHNGdJSDFjYmx4dUlDQndiR0Y1VG1WNGRDZ3BJSHRjYmlBZ0lDQmpiMjV6ZENCN0lHa3NJRzl5WkdWeUlIMGdQU0IwYUdsekxuQnliM0J6TzF4dUlDQWdJR2xtSUNocElEd2diM0prWlhJdWJHVnVaM1JvSUMwZ01Ta2dlMXh1SUNBZ0lDQWdkR2hwY3k1d2NtOXdjeTVwS3lzN1hHNGdJQ0FnSUNCMGFHbHpMbkJzWVhsRGRYSnlaVzUwS0NrN1hHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ2NHeGhlVU4xY25KbGJuUW9LU0I3WEc0Z0lDQWdZMjl1YzNRZ2V5QnBMQ0J2Y21SbGNpQjlJRDBnZEdocGN5NXdjbTl3Y3p0Y2JpQWdJQ0J2Y21SbGNsdHBYUzV2YmtOdmJYQnNaWFJsSUQwZ2RHaHBjeTV3YkdGNVRtVjRkRHRjYmlBZ0lDQnZjbVJsY2x0cFhTNXpkR0Z5ZENncE8xeHVJQ0I5WEc1Y2JpQWdiMjVUZEc5d0tDa2dlMXh1SUNBZ0lHTnZibk4wSUhzZ2FTd2diM0prWlhJZ2ZTQTlJSFJvYVhNdWNISnZjSE03WEc0Z0lDQWdiM0prWlhKYmFWMHVjM1J2Y0NncE8xeHVJQ0I5WEc1OVhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElDaHZjbVJsY2lrZ1BUNGdibVYzSUVOb1lXbHVLSHNnYjNKa1pYSWdmU2s3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvY2hhaW4uanNcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdHdlZW4gPSByZXF1aXJlKCcuL3R3ZWVuJyk7XG5cbnZhciBfdHdlZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHdlZW4pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZHVyYXRpb24pIHtcbiAgcmV0dXJuICgwLCBfdHdlZW4yLmRlZmF1bHQpKHsgZnJvbTogMCwgZHVyYXRpb246IGR1cmF0aW9uIH0pO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDJSbGJHRjVMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN1FVRkJRVHM3T3pzN08ydENRVVZsTEZWQlFVTXNVVUZCUkR0VFFVRmpMSEZDUVVGTkxFVkJRVVVzVFVGQlRTeERRVUZPTEVWQlFWTXNhMEpCUVZnc1JVRkJUanREUVVGa0lpd2labWxzWlNJNkltUmxiR0Y1TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMEwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCMGQyVmxiaUJtY205dElDY3VMM1IzWldWdUp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdLR1IxY21GMGFXOXVLU0E5UGlCMGQyVmxiaWg3SUdaeWIyMDZJREFzSUdSMWNtRjBhVzl1SUgwcE8xeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL2RlbGF5LmpzXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgXyA9IHJlcXVpcmUoJy4vJyk7XG5cbnZhciBfMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIHN0YXJ0QWN0aW9uID0gZnVuY3Rpb24gKGFjdGlvbikge1xuICByZXR1cm4gYWN0aW9uLnN0b3AoKTtcbn07XG52YXIgc3RvcEFjdGlvbiA9IGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgcmV0dXJuIGFjdGlvbi5zdG9wKCk7XG59O1xuXG52YXIgR3JvdXAgPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICBfaW5oZXJpdHMoR3JvdXAsIF9BY3Rpb24pO1xuXG4gIGZ1bmN0aW9uIEdyb3VwKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBHcm91cCk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIEdyb3VwLnByb3RvdHlwZS5vblN0YXJ0ID0gZnVuY3Rpb24gb25TdGFydCgpIHtcbiAgICB0aGlzLnByb3BzLmFjdGlvbnMuZm9yRWFjaChzdGFydEFjdGlvbik7XG4gIH07XG5cbiAgR3JvdXAucHJvdG90eXBlLm9uU3RvcCA9IGZ1bmN0aW9uIG9uU3RvcCgpIHtcbiAgICB0aGlzLnByb3BzLmFjdGlvbnMuZm9yRWFjaChzdG9wQWN0aW9uKTtcbiAgfTtcblxuICBHcm91cC5wcm90b3R5cGUuYWRkQWN0aW9uID0gZnVuY3Rpb24gYWRkQWN0aW9uKGFjdGlvbikge1xuICAgIHZhciBhY3Rpb25zID0gdGhpcy5wcm9wcy5hY3Rpb25zO1xuXG5cbiAgICBpZiAoYWN0aW9ucy5pbmRleE9mKGFjdGlvbikgPT09IC0xKSB7XG4gICAgICBhY3Rpb25zLnB1c2goYWN0aW9uKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIEdyb3VwO1xufShfMi5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGFjdGlvbnMpIHtcbiAgcmV0dXJuIG5ldyBHcm91cCh7IGFjdGlvbnM6IGFjdGlvbnMgfSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMmR5YjNWd0xtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3UVVGQlFUczdPenM3T3pzN096czdPMEZCUlVFc1NVRkJUU3hqUVVGakxGVkJRVU1zVFVGQlJEdFRRVUZaTEU5QlFVOHNTVUZCVUR0RFFVRmFPMEZCUTNCQ0xFbEJRVTBzWVVGQllTeFZRVUZETEUxQlFVUTdVMEZCV1N4UFFVRlBMRWxCUVZBN1EwRkJXanM3U1VGRllqczdPenM3T3pzN08ydENRVU5LTERaQ1FVRlZPMEZCUTFJc1UwRkJTeXhMUVVGTUxFTkJRVmNzVDBGQldDeERRVUZ0UWl4UFFVRnVRaXhEUVVFeVFpeFhRVUV6UWl4RlFVUlJPenM3UVVGRVRpeHJRa0ZMU2l3eVFrRkJVenRCUVVOUUxGTkJRVXNzUzBGQlRDeERRVUZYTEU5QlFWZ3NRMEZCYlVJc1QwRkJia0lzUTBGQk1rSXNWVUZCTTBJc1JVRkVUenM3TzBGQlRFd3NhMEpCVTBvc0swSkJRVlVzVVVGQlVUdFJRVU5TTEZWQlFWa3NTMEZCU3l4TFFVRk1MRU5CUVZvc1VVRkVVVHM3TzBGQlIyaENMRkZCUVVrc1VVRkJVU3hQUVVGU0xFTkJRV2RDTEUxQlFXaENMRTFCUVRSQ0xFTkJRVU1zUTBGQlJDeEZRVUZKTzBGQlEyeERMR05CUVZFc1NVRkJVaXhEUVVGaExFMUJRV0lzUlVGRWEwTTdTMEZCY0VNN096dFRRVnBGT3pzN2EwSkJhMEpUTEZWQlFVTXNUMEZCUkR0VFFVRmhMRWxCUVVrc1MwRkJTaXhEUVVGVkxFVkJRVVVzWjBKQlFVWXNSVUZCVmp0RFFVRmlJaXdpWm1sc1pTSTZJbWR5YjNWd0xtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQkJZM1JwYjI0Z1puSnZiU0FuTGk4bk8xeHVYRzVqYjI1emRDQnpkR0Z5ZEVGamRHbHZiaUE5SUNoaFkzUnBiMjRwSUQwK0lHRmpkR2x2Ymk1emRHOXdLQ2s3WEc1amIyNXpkQ0J6ZEc5d1FXTjBhVzl1SUQwZ0tHRmpkR2x2YmlrZ1BUNGdZV04wYVc5dUxuTjBiM0FvS1R0Y2JseHVZMnhoYzNNZ1IzSnZkWEFnWlhoMFpXNWtjeUJCWTNScGIyNGdlMXh1SUNCdmJsTjBZWEowS0NrZ2UxeHVJQ0FnSUhSb2FYTXVjSEp2Y0hNdVlXTjBhVzl1Y3k1bWIzSkZZV05vS0hOMFlYSjBRV04wYVc5dUtUdGNiaUFnZlZ4dVhHNGdJRzl1VTNSdmNDZ3BJSHRjYmlBZ0lDQjBhR2x6TG5CeWIzQnpMbUZqZEdsdmJuTXVabTl5UldGamFDaHpkRzl3UVdOMGFXOXVLVHRjYmlBZ2ZWeHVYRzRnSUdGa1pFRmpkR2x2YmloaFkzUnBiMjRwSUh0Y2JpQWdJQ0JqYjI1emRDQjdJR0ZqZEdsdmJuTWdmU0E5SUhSb2FYTXVjSEp2Y0hNN1hHNWNiaUFnSUNCcFppQW9ZV04wYVc5dWN5NXBibVJsZUU5bUtHRmpkR2x2YmlrZ1BUMDlJQzB4S1NCN1hHNGdJQ0FnSUNCaFkzUnBiMjV6TG5CMWMyZ29ZV04wYVc5dUtUdGNiaUFnSUNCOVhHNGdJSDFjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ0tHRmpkR2x2Ym5NcElEMCtJRzVsZHlCSGNtOTFjQ2g3SUdGamRHbHZibk1nZlNrN1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL2dyb3VwLmpzXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgXyA9IHJlcXVpcmUoJy4vJyk7XG5cbnZhciBfMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXyk7XG5cbnZhciBfZnJhbWVzeW5jID0gcmVxdWlyZSgnLi4vZnJhbWVzeW5jJyk7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFBoeXNpY3MgPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICBfaW5oZXJpdHMoUGh5c2ljcywgX0FjdGlvbik7XG5cbiAgZnVuY3Rpb24gUGh5c2ljcygpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGh5c2ljcyk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIFBoeXNpY3MucHJvdG90eXBlLm9uVXBkYXRlID0gZnVuY3Rpb24gb25VcGRhdGUoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGFjY2VsZXJhdGlvbiA9IF9wcm9wcy5hY2NlbGVyYXRpb247XG4gICAgdmFyIGF1dG9TdG9wU3BlZWQgPSBfcHJvcHMuYXV0b1N0b3BTcGVlZDtcbiAgICB2YXIgZnJpY3Rpb24gPSBfcHJvcHMuZnJpY3Rpb247XG4gICAgdmFyIHZlbG9jaXR5ID0gX3Byb3BzLnZlbG9jaXR5O1xuICAgIHZhciBzcHJpbmcgPSBfcHJvcHMuc3ByaW5nO1xuICAgIHZhciB0byA9IF9wcm9wcy50bztcblxuICAgIHZhciBuZXdWZWxvY2l0eSA9IHZlbG9jaXR5O1xuICAgIHZhciBlbGFwc2VkID0gKDAsIF9mcmFtZXN5bmMudGltZVNpbmNlTGFzdEZyYW1lKSgpO1xuXG4gICAgLy8gQXBwbHkgYWNjZWxlcmF0aW9uIHRvIHZlbG9jaXR5XG4gICAgaWYgKGFjY2VsZXJhdGlvbikge1xuICAgICAgbmV3VmVsb2NpdHkgKz0gKDAsIF9jYWxjLnNwZWVkUGVyRnJhbWUpKGFjY2VsZXJhdGlvbiwgZWxhcHNlZCk7XG4gICAgfVxuXG4gICAgLy8gQXBwbHkgZnJpY3Rpb24gdG8gdmVsb2NpdHlcbiAgICBpZiAoZnJpY3Rpb24pIHtcbiAgICAgIG5ld1ZlbG9jaXR5ICo9IE1hdGgucG93KDEgLSBmcmljdGlvbiwgZWxhcHNlZCAvIDEwMCk7XG4gICAgfVxuXG4gICAgaWYgKHNwcmluZyAmJiB0byAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgZGlzdGFuY2VUb1RhcmdldCA9IHRvIC0gdGhpcy5jdXJyZW50O1xuICAgICAgbmV3VmVsb2NpdHkgKz0gZGlzdGFuY2VUb1RhcmdldCAqICgwLCBfY2FsYy5zcGVlZFBlckZyYW1lKShzcHJpbmcsIGVsYXBzZWQpO1xuICAgIH1cblxuICAgIC8vIEFwcGx5IHZlbG9jaXR5XG4gICAgdGhpcy5jdXJyZW50ICs9ICgwLCBfY2FsYy5zcGVlZFBlckZyYW1lKShuZXdWZWxvY2l0eSwgZWxhcHNlZCk7XG4gICAgdGhpcy5wcm9wcy52ZWxvY2l0eSA9IG5ld1ZlbG9jaXR5O1xuXG4gICAgaWYgKCFuZXdWZWxvY2l0eSB8fCBNYXRoLmFicyhuZXdWZWxvY2l0eSkgPD0gYXV0b1N0b3BTcGVlZCkge1xuICAgICAgdGhpcy5jb21wbGV0ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gUGh5c2ljcztcbn0oXzIuZGVmYXVsdCk7XG5cblBoeXNpY3MuZGVmYXVsdFByb3BzID0ge1xuICBhY2NlbGVyYXRpb246IDAsXG4gIGZyaWN0aW9uOiAwLFxuICB2ZWxvY2l0eTogMCxcbiAgYXV0b1N0b3BTcGVlZDogMC4wMDFcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChwcm9wcykge1xuICByZXR1cm4gbmV3IFBoeXNpY3MocHJvcHMpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDNCb2VYTnBZM011YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dEJRVUZCT3pzN08wRkJRMEU3TzBGQlEwRTdPenM3T3pzN096czdTVUZGVFRzN096czdPenM3TzI5Q1FWRktMQ3RDUVVGWE8ybENRVU1yUkN4TFFVRkxMRXRCUVV3c1EwRkVMMFE3VVVGRFJDeHRRMEZFUXp0UlFVTmhMSEZEUVVSaU8xRkJRelJDTERKQ1FVUTFRanRSUVVOelF5d3lRa0ZFZEVNN1VVRkRaMFFzZFVKQlJHaEVPMUZCUTNkRUxHVkJSSGhFT3p0QlFVVlVMRkZCUVVrc1kwRkJZeXhSUVVGa0xFTkJSa3M3UVVGSFZDeFJRVUZOTEZWQlFWVXNiME5CUVZZN096dEJRVWhITEZGQlRVd3NXVUZCU2l4RlFVRnJRanRCUVVOb1FpeHhRa0ZCWlN4NVFrRkJZeXhaUVVGa0xFVkJRVFJDTEU5QlFUVkNMRU5CUVdZc1EwRkVaMEk3UzBGQmJFSTdPenRCUVU1VExGRkJWMHdzVVVGQlNpeEZRVUZqTzBGQlExb3NPRUpCUVdkQ0xFbEJRVWtzVVVGQlNpeEZRVUZyUWl4VlFVRlZMRWRCUVZZc1EwRkJiRU1zUTBGRVdUdExRVUZrT3p0QlFVbEJMRkZCUVVrc1ZVRkJWU3hQUVVGUExGTkJRVkFzUlVGQmEwSTdRVUZET1VJc1ZVRkJUU3h0UWtGQmJVSXNTMEZCU3l4TFFVRkxMRTlCUVV3c1EwRkVRVHRCUVVVNVFpeHhRa0ZCWlN4dFFrRkJiVUlzZVVKQlFXTXNUVUZCWkN4RlFVRnpRaXhQUVVGMFFpeERRVUZ1UWl4RFFVWmxPMHRCUVdoRE96czdRVUZtVXl4UlFYRkNWQ3hEUVVGTExFOUJRVXdzU1VGQlowSXNlVUpCUVdNc1YwRkJaQ3hGUVVFeVFpeFBRVUV6UWl4RFFVRm9RaXhEUVhKQ1V6dEJRWE5DVkN4VFFVRkxMRXRCUVV3c1EwRkJWeXhSUVVGWUxFZEJRWE5DTEZkQlFYUkNMRU5CZEVKVE96dEJRWGRDVkN4UlFVRkpMRU5CUVVNc1YwRkJSQ3hKUVVGblFpeExRVUZMTEVkQlFVd3NRMEZCVXl4WFFVRlVMRXRCUVhsQ0xHRkJRWHBDTEVWQlFYZERPMEZCUXpGRUxGZEJRVXNzVVVGQlRDeEhRVVF3UkR0TFFVRTFSRHM3TzFOQmFFTkZPenM3VVVGRFJ5eGxRVUZsTzBGQlEzQkNMR2RDUVVGakxFTkJRV1E3UVVGRFFTeFpRVUZWTEVOQlFWWTdRVUZEUVN4WlFVRlZMRU5CUVZZN1FVRkRRU3hwUWtGQlpTeExRVUZtT3pzN2EwSkJhVU5YTEZWQlFVTXNTMEZCUkR0VFFVRlhMRWxCUVVrc1QwRkJTaXhEUVVGWkxFdEJRVm83UTBGQldDSXNJbVpwYkdVaU9pSndhSGx6YVdOekxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQkJZM1JwYjI0Z1puSnZiU0FuTGk4bk8xeHVhVzF3YjNKMElIc2dkR2x0WlZOcGJtTmxUR0Z6ZEVaeVlXMWxJSDBnWm5KdmJTQW5MaTR2Wm5KaGJXVnplVzVqSnp0Y2JtbHRjRzl5ZENCN0lITndaV1ZrVUdWeVJuSmhiV1VnZlNCbWNtOXRJQ2N1TGk5cGJtTXZZMkZzWXljN1hHNWNibU5zWVhOeklGQm9lWE5wWTNNZ1pYaDBaVzVrY3lCQlkzUnBiMjRnZTF4dUlDQnpkR0YwYVdNZ1pHVm1ZWFZzZEZCeWIzQnpJRDBnZTF4dUlDQWdJR0ZqWTJWc1pYSmhkR2x2YmpvZ01DeGNiaUFnSUNCbWNtbGpkR2x2YmpvZ01DeGNiaUFnSUNCMlpXeHZZMmwwZVRvZ01DeGNiaUFnSUNCaGRYUnZVM1J2Y0ZOd1pXVmtPaUF3TGpBd01WeHVJQ0I5WEc1Y2JpQWdiMjVWY0dSaGRHVW9LU0I3WEc0Z0lDQWdZMjl1YzNRZ2V5QmhZMk5sYkdWeVlYUnBiMjRzSUdGMWRHOVRkRzl3VTNCbFpXUXNJR1p5YVdOMGFXOXVMQ0IyWld4dlkybDBlU3dnYzNCeWFXNW5MQ0IwYnlCOUlEMGdkR2hwY3k1d2NtOXdjenRjYmlBZ0lDQnNaWFFnYm1WM1ZtVnNiMk5wZEhrZ1BTQjJaV3h2WTJsMGVUdGNiaUFnSUNCamIyNXpkQ0JsYkdGd2MyVmtJRDBnZEdsdFpWTnBibU5sVEdGemRFWnlZVzFsS0NrN1hHNWNiaUFnSUNBdkx5QkJjSEJzZVNCaFkyTmxiR1Z5WVhScGIyNGdkRzhnZG1Wc2IyTnBkSGxjYmlBZ0lDQnBaaUFvWVdOalpXeGxjbUYwYVc5dUtTQjdYRzRnSUNBZ0lDQnVaWGRXWld4dlkybDBlU0FyUFNCemNHVmxaRkJsY2taeVlXMWxLR0ZqWTJWc1pYSmhkR2x2Yml3Z1pXeGhjSE5sWkNrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHk4Z1FYQndiSGtnWm5KcFkzUnBiMjRnZEc4Z2RtVnNiMk5wZEhsY2JpQWdJQ0JwWmlBb1puSnBZM1JwYjI0cElIdGNiaUFnSUNBZ0lHNWxkMVpsYkc5amFYUjVJQ285SUNneElDMGdabkpwWTNScGIyNHBJQ29xSUNobGJHRndjMlZrSUM4Z01UQXdLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnBaaUFvYzNCeWFXNW5JQ1ltSUhSdklDRTlQU0IxYm1SbFptbHVaV1FwSUh0Y2JpQWdJQ0FnSUdOdmJuTjBJR1JwYzNSaGJtTmxWRzlVWVhKblpYUWdQU0IwYnlBdElIUm9hWE11WTNWeWNtVnVkRHRjYmlBZ0lDQWdJRzVsZDFabGJHOWphWFI1SUNzOUlHUnBjM1JoYm1ObFZHOVVZWEpuWlhRZ0tpQnpjR1ZsWkZCbGNrWnlZVzFsS0hOd2NtbHVaeXdnWld4aGNITmxaQ2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeThnUVhCd2JIa2dkbVZzYjJOcGRIbGNiaUFnSUNCMGFHbHpMbU4xY25KbGJuUWdLejBnYzNCbFpXUlFaWEpHY21GdFpTaHVaWGRXWld4dlkybDBlU3dnWld4aGNITmxaQ2s3WEc0Z0lDQWdkR2hwY3k1d2NtOXdjeTUyWld4dlkybDBlU0E5SUc1bGQxWmxiRzlqYVhSNU8xeHVYRzRnSUNBZ2FXWWdLQ0Z1WlhkV1pXeHZZMmwwZVNCOGZDQk5ZWFJvTG1GaWN5aHVaWGRXWld4dlkybDBlU2tnUEQwZ1lYVjBiMU4wYjNCVGNHVmxaQ2tnZTF4dUlDQWdJQ0FnZEdocGN5NWpiMjF3YkdWMFpTZ3BPMXh1SUNBZ0lIMWNiaUFnZlZ4dWZWeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQW9jSEp2Y0hNcElEMCtJRzVsZHlCUWFIbHphV056S0hCeWIzQnpLVHNpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9waHlzaWNzLmpzXG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2NoYWluID0gcmVxdWlyZSgnLi9jaGFpbicpO1xuXG52YXIgX2NoYWluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoYWluKTtcblxudmFyIF9ncm91cCA9IHJlcXVpcmUoJy4vZ3JvdXAnKTtcblxudmFyIF9ncm91cDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ncm91cCk7XG5cbnZhciBfZGVsYXkgPSByZXF1aXJlKCcuL2RlbGF5Jyk7XG5cbnZhciBfZGVsYXkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVsYXkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoYWN0aW9ucywgaW50ZXJ2YWwpIHtcbiAgcmV0dXJuICgwLCBfZ3JvdXAyLmRlZmF1bHQpKGFjdGlvbnMubWFwKGZ1bmN0aW9uIChhY3Rpb24sIGkpIHtcbiAgICB2YXIgdGltZVRvRGVsYXkgPSBkZWZhdWx0SW50ZXJ2YWxDYWxjdWxhdGlvbihpLCBpbnRlcnZhbCk7XG4gICAgcmV0dXJuICgwLCBfY2hhaW4yLmRlZmF1bHQpKFsoMCwgX2RlbGF5Mi5kZWZhdWx0KSh0aW1lVG9EZWxheSksIGFjdGlvbl0pO1xuICB9KSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMM04wWVdkblpYSXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0QlFVRkJPenM3TzBGQlEwRTdPenM3UVVGRFFUczdPenM3TzJ0Q1FVVmxMRlZCUVVNc1QwRkJSQ3hGUVVGVkxGRkJRVllzUlVGQmRVSTdRVUZEY0VNc1UwRkJUeXh4UWtGQlRTeFJRVUZSTEVkQlFWSXNRMEZCV1N4VlFVRkRMRTFCUVVRc1JVRkJVeXhEUVVGVUxFVkJRV1U3UVVGRGRFTXNVVUZCVFN4alFVRmpMREpDUVVFeVFpeERRVUV6UWl4RlFVRTRRaXhSUVVFNVFpeERRVUZrTEVOQlJHZERPMEZCUlhSRExGZEJRVThzY1VKQlFVMHNRMEZEV0N4eFFrRkJUU3hYUVVGT0xFTkJSRmNzUlVGRldDeE5RVVpYTEVOQlFVNHNRMEZCVUN4RFFVWnpRenRIUVVGbUxFTkJRV3hDTEVOQlFWQXNRMEZFYjBNN1EwRkJka0lpTENKbWFXeGxJam9pYzNSaFoyZGxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnWTJoaGFXNGdabkp2YlNBbkxpOWphR0ZwYmljN1hHNXBiWEJ2Y25RZ1ozSnZkWEFnWm5KdmJTQW5MaTluY205MWNDYzdYRzVwYlhCdmNuUWdaR1ZzWVhrZ1puSnZiU0FuTGk5a1pXeGhlU2M3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUNoaFkzUnBiMjV6TENCcGJuUmxjblpoYkNrZ1BUNGdlMXh1SUNCeVpYUjFjbTRnWjNKdmRYQW9ZV04wYVc5dWN5NXRZWEFvS0dGamRHbHZiaXdnYVNrZ1BUNGdlMXh1SUNBZ0lHTnZibk4wSUhScGJXVlViMFJsYkdGNUlEMGdaR1ZtWVhWc2RFbHVkR1Z5ZG1Gc1EyRnNZM1ZzWVhScGIyNG9hU3dnYVc1MFpYSjJZV3dwTzF4dUlDQWdJSEpsZEhWeWJpQmphR0ZwYmloYlhHNGdJQ0FnSUNCa1pXeGhlU2gwYVcxbFZHOUVaV3hoZVNrc1hHNGdJQ0FnSUNCaFkzUnBiMjVjYmlBZ0lDQmRLVHRjYmlBZ2ZTa3BPMXh1ZlR0Y2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL3N0YWdnZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfID0gcmVxdWlyZSgnLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxudmFyIF9mcmFtZXN5bmMgPSByZXF1aXJlKCcuLi9mcmFtZXN5bmMnKTtcblxudmFyIF9maWx0ZXJzID0gcmVxdWlyZSgnLi4vdmFsdWUvZmlsdGVycycpO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpO1xuXG52YXIgX2Vhc2luZyA9IHJlcXVpcmUoJy4uL2Vhc2luZycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciByZXN0cmljdFByb2dyZXNzID0gKDAsIF9maWx0ZXJzLnJlc3RyaWN0QmV0d2VlbikoMCwgMSk7XG5cbnZhciBUd2VlbiA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gIF9pbmhlcml0cyhUd2VlbiwgX0FjdGlvbik7XG5cbiAgZnVuY3Rpb24gVHdlZW4oKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFR3ZWVuKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgVHdlZW4ucHJvdG90eXBlLm9uU3RhcnQgPSBmdW5jdGlvbiBvblN0YXJ0KCkge1xuICAgIHRoaXMuZWxhcHNlZCA9IDA7XG4gIH07XG5cbiAgVHdlZW4ucHJvdG90eXBlLm9uVXBkYXRlID0gZnVuY3Rpb24gb25VcGRhdGUoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGR1cmF0aW9uID0gX3Byb3BzLmR1cmF0aW9uO1xuICAgIHZhciBlYXNlID0gX3Byb3BzLmVhc2U7XG4gICAgdmFyIGZyb20gPSBfcHJvcHMuZnJvbTtcbiAgICB2YXIgdG8gPSBfcHJvcHMudG87XG5cbiAgICB0aGlzLmVsYXBzZWQgKz0gKDAsIF9mcmFtZXN5bmMudGltZVNpbmNlTGFzdEZyYW1lKSgpO1xuICAgIHZhciBwcm9ncmVzcyA9ICgwLCBfY2FsYy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSkodGhpcy5lbGFwc2VkLCAwLCBkdXJhdGlvbik7XG4gICAgdmFyIGVhc2VkUHJvZ3Jlc3MgPSBlYXNlKHJlc3RyaWN0UHJvZ3Jlc3MocHJvZ3Jlc3MpKTtcbiAgICB0aGlzLmN1cnJlbnQgPSAoMCwgX2NhbGMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MpKGVhc2VkUHJvZ3Jlc3MsIGZyb20sIHRvKTtcblxuICAgIGlmICh0aGlzLmVsYXBzZWQgPj0gZHVyYXRpb24pIHtcbiAgICAgIHRoaXMuY29tcGxldGUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFR3ZWVuO1xufShfMi5kZWZhdWx0KTtcblxuVHdlZW4uZGVmYXVsdFByb3BzID0ge1xuICBkdXJhdGlvbjogMzAwLFxuICBlYXNlOiBfZWFzaW5nLmVhc2VPdXQsXG4gIHRvOiAwXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBUd2Vlbihwcm9wcyk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMM1IzWldWdUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3UVVGQlFUczdPenRCUVVOQk96dEJRVU5CT3p0QlFVTkJPenRCUVVOQk96czdPenM3T3pzN08wRkJSVUVzU1VGQlRTeHRRa0ZCYlVJc09FSkJRV2RDTEVOQlFXaENMRVZCUVcxQ0xFTkJRVzVDTEVOQlFXNUNPenRKUVVWQk96czdPenM3T3pzN2EwSkJUMG9zTmtKQlFWVTdRVUZEVWl4VFFVRkxMRTlCUVV3c1IwRkJaU3hEUVVGbUxFTkJSRkU3T3p0QlFWQk9MR3RDUVZkS0xDdENRVUZYTzJsQ1FVTTBRaXhMUVVGTExFdEJRVXdzUTBGRU5VSTdVVUZEUkN3eVFrRkVRenRSUVVOVExHMUNRVVJVTzFGQlEyVXNiVUpCUkdZN1VVRkRjVUlzWlVGRWNrSTdPMEZCUlZRc1UwRkJTeXhQUVVGTUxFbEJRV2RDTEc5RFFVRm9RaXhEUVVaVE8wRkJSMVFzVVVGQlRTeFhRVUZYTEdkRFFVRnhRaXhMUVVGTExFOUJRVXdzUlVGQll5eERRVUZ1UXl4RlFVRnpReXhSUVVGMFF5eERRVUZZTEVOQlNFYzdRVUZKVkN4UlFVRk5MR2RDUVVGblFpeExRVUZMTEdsQ1FVRnBRaXhSUVVGcVFpeERRVUZNTEVOQlFXaENMRU5CU2tjN1FVRkxWQ3hUUVVGTExFOUJRVXdzUjBGQlpTeG5RMEZCY1VJc1lVRkJja0lzUlVGQmIwTXNTVUZCY0VNc1JVRkJNRU1zUlVGQk1VTXNRMEZCWml4RFFVeFRPenRCUVU5VUxGRkJRVWtzUzBGQlN5eFBRVUZNTEVsQlFXZENMRkZCUVdoQ0xFVkJRVEJDTzBGQlF6VkNMRmRCUVVzc1VVRkJUQ3hIUVVRMFFqdExRVUU1UWpzN08xTkJiRUpGT3pzN1RVRkRSeXhsUVVGbE8wRkJRM0JDTEZsQlFWVXNSMEZCVmp0QlFVTkJMSFZDUVVadlFqdEJRVWR3UWl4TlFVRkpMRU5CUVVvN096dHJRa0Z2UWxjc1ZVRkJReXhMUVVGRU8xTkJRVmNzU1VGQlNTeExRVUZLTEVOQlFWVXNTMEZCVmp0RFFVRllJaXdpWm1sc1pTSTZJblIzWldWdUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQkJZM1JwYjI0Z1puSnZiU0FuTGk4bk8xeHVhVzF3YjNKMElIc2dkR2x0WlZOcGJtTmxUR0Z6ZEVaeVlXMWxJSDBnWm5KdmJTQW5MaTR2Wm5KaGJXVnplVzVqSnp0Y2JtbHRjRzl5ZENCN0lISmxjM1J5YVdOMFFtVjBkMlZsYmlCOUlHWnliMjBnSnk0dUwzWmhiSFZsTDJacGJIUmxjbk1uTzF4dWFXMXdiM0owSUhzZ1pXRnpaU3dnWjJWMFVISnZaM0psYzNOR2NtOXRWbUZzZFdVc0lHZGxkRlpoYkhWbFJuSnZiVkJ5YjJkeVpYTnpJSDBnWm5KdmJTQW5MaTR2YVc1akwyTmhiR01uTzF4dWFXMXdiM0owSUhzZ1pXRnpaVTkxZENCOUlHWnliMjBnSnk0dUwyVmhjMmx1WnljN1hHNWNibU52Ym5OMElISmxjM1J5YVdOMFVISnZaM0psYzNNZ1BTQnlaWE4wY21samRFSmxkSGRsWlc0b01Dd2dNU2s3WEc1Y2JtTnNZWE56SUZSM1pXVnVJR1Y0ZEdWdVpITWdRV04wYVc5dUlIdGNiaUFnYzNSaGRHbGpJR1JsWm1GMWJIUlFjbTl3Y3lBOUlIdGNiaUFnSUNCa2RYSmhkR2x2YmpvZ016QXdMRnh1SUNBZ0lHVmhjMlU2SUdWaGMyVlBkWFFzWEc0Z0lDQWdkRzg2SURCY2JpQWdmVnh1WEc0Z0lHOXVVM1JoY25Rb0tTQjdYRzRnSUNBZ2RHaHBjeTVsYkdGd2MyVmtJRDBnTUR0Y2JpQWdmVnh1WEc0Z0lHOXVWWEJrWVhSbEtDa2dlMXh1SUNBZ0lHTnZibk4wSUhzZ1pIVnlZWFJwYjI0c0lHVmhjMlVzSUdaeWIyMHNJSFJ2SUgwZ1BTQjBhR2x6TG5CeWIzQnpPMXh1SUNBZ0lIUm9hWE11Wld4aGNITmxaQ0FyUFNCMGFXMWxVMmx1WTJWTVlYTjBSbkpoYldVb0tUdGNiaUFnSUNCamIyNXpkQ0J3Y205bmNtVnpjeUE5SUdkbGRGQnliMmR5WlhOelJuSnZiVlpoYkhWbEtIUm9hWE11Wld4aGNITmxaQ3dnTUN3Z1pIVnlZWFJwYjI0cE8xeHVJQ0FnSUdOdmJuTjBJR1ZoYzJWa1VISnZaM0psYzNNZ1BTQmxZWE5sS0hKbGMzUnlhV04wVUhKdlozSmxjM01vY0hKdlozSmxjM01wS1R0Y2JpQWdJQ0IwYUdsekxtTjFjbkpsYm5RZ1BTQm5aWFJXWVd4MVpVWnliMjFRY205bmNtVnpjeWhsWVhObFpGQnliMmR5WlhOekxDQm1jbTl0TENCMGJ5azdYRzVjYmlBZ0lDQnBaaUFvZEdocGN5NWxiR0Z3YzJWa0lENDlJR1IxY21GMGFXOXVLU0I3WEc0Z0lDQWdJQ0IwYUdsekxtTnZiWEJzWlhSbEtDazdYRzRnSUNBZ2ZWeHVJQ0I5WEc1OVhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElDaHdjbTl3Y3lrZ1BUNGdibVYzSUZSM1pXVnVLSEJ5YjNCektUdGNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy90d2Vlbi5qc1xuICoqIG1vZHVsZSBpZCA9IDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF8gPSByZXF1aXJlKCcuLycpO1xuXG52YXIgXzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF8pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBUcmFjayA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gIF9pbmhlcml0cyhUcmFjaywgX0FjdGlvbik7XG5cbiAgZnVuY3Rpb24gVHJhY2soKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRyYWNrKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgVHJhY2sucHJvdG90eXBlLm9uU3RhcnQgPSBmdW5jdGlvbiBvblN0YXJ0KCkge1xuICAgIHZhciBpbnB1dCA9IHRoaXMucHJvcHMuaW5wdXQ7XG5cbiAgICB0aGlzLmlucHV0T3JpZ2luID0gaW5wdXQuZ2V0KCk7XG4gIH07XG5cbiAgVHJhY2sucHJvdG90eXBlLm9uVXBkYXRlID0gZnVuY3Rpb24gb25VcGRhdGUoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGlucHV0ID0gX3Byb3BzLmlucHV0O1xuICAgIHZhciBmcm9tID0gX3Byb3BzLmZyb207XG5cbiAgICB2YXIgb2Zmc2V0ID0gaW5wdXQuZ2V0KCkgLSB0aGlzLmlucHV0T3JpZ2luO1xuICAgIHRoaXMuY3VycmVudCA9IGZyb20gKyBvZmZzZXQ7XG4gIH07XG5cbiAgcmV0dXJuIFRyYWNrO1xufShfMi5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gIHJldHVybiBuZXcgVHJhY2socHJvcHMpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDNSeVlXTnJMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN1FVRkJRVHM3T3pzN096czdPenM3TzBsQlJVMDdPenM3T3pzN096dHJRa0ZEU2l3MlFrRkJWVHRSUVVOQkxGRkJRVlVzUzBGQlN5eExRVUZNTEVOQlFWWXNUVUZFUVRzN1FVRkZVaXhUUVVGTExGZEJRVXdzUjBGQmJVSXNUVUZCVFN4SFFVRk9MRVZCUVc1Q0xFTkJSbEU3T3p0QlFVUk9MR3RDUVUxS0xDdENRVUZYTzJsQ1FVTmxMRXRCUVVzc1MwRkJUQ3hEUVVSbU8xRkJRMFFzY1VKQlJFTTdVVUZEVFN4dFFrRkVUanM3UVVGRlZDeFJRVUZOTEZOQlFWTXNUVUZCVFN4SFFVRk9MRXRCUVdNc1MwRkJTeXhYUVVGTUxFTkJSbkJDTzBGQlIxUXNVMEZCU3l4UFFVRk1MRWRCUVdVc1QwRkJUeXhOUVVGUUxFTkJTRTQ3T3p0VFFVNVFPenM3YTBKQllWTXNWVUZCUXl4TFFVRkVPMU5CUVZjc1NVRkJTU3hMUVVGS0xFTkJRVlVzUzBGQlZqdERRVUZZSWl3aVptbHNaU0k2SW5SeVlXTnJMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwTDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0JCWTNScGIyNGdabkp2YlNBbkxpOG5PMXh1WEc1amJHRnpjeUJVY21GamF5QmxlSFJsYm1SeklFRmpkR2x2YmlCN1hHNGdJRzl1VTNSaGNuUW9LU0I3WEc0Z0lDQWdZMjl1YzNRZ2V5QnBibkIxZENCOUlEMGdkR2hwY3k1d2NtOXdjenRjYmlBZ0lDQjBhR2x6TG1sdWNIVjBUM0pwWjJsdUlEMGdhVzV3ZFhRdVoyVjBLQ2s3WEc0Z0lIMWNibHh1SUNCdmJsVndaR0YwWlNncElIdGNiaUFnSUNCamIyNXpkQ0I3SUdsdWNIVjBMQ0JtY205dElIMGdQU0IwYUdsekxuQnliM0J6TzF4dUlDQWdJR052Ym5OMElHOW1abk5sZENBOUlHbHVjSFYwTG1kbGRDZ3BJQzBnZEdocGN5NXBibkIxZEU5eWFXZHBianRjYmlBZ0lDQjBhR2x6TG1OMWNuSmxiblFnUFNCbWNtOXRJQ3NnYjJabWMyVjBPMXh1SUNCOVhHNTlYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJQ2h3Y205d2N5a2dQVDRnYm1WM0lGUnlZV05yS0hCeWIzQnpLVHRjYmlKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvdHJhY2suanNcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdmFsdWUgPSByZXF1aXJlKCcuLi92YWx1ZScpO1xuXG52YXIgX3ZhbHVlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ZhbHVlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFBvaW50ZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFBvaW50ZXIoX3JlZiwgX3JlZjIpIHtcbiAgICB2YXIgeCA9IF9yZWYueDtcbiAgICB2YXIgeSA9IF9yZWYueTtcbiAgICB2YXIgZXZlbnRUb1BvaW50cyA9IF9yZWYyLmV2ZW50VG9Qb2ludHM7XG4gICAgdmFyIG1vdmVFdmVudCA9IF9yZWYyLm1vdmVFdmVudDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQb2ludGVyKTtcblxuICAgIHRoaXMueCA9ICgwLCBfdmFsdWUyLmRlZmF1bHQpKHgpO1xuICAgIHRoaXMueSA9ICgwLCBfdmFsdWUyLmRlZmF1bHQpKHkpO1xuICAgIHRoaXMubW92ZUV2ZW50ID0gbW92ZUV2ZW50O1xuICAgIHRoaXMuZXZlbnRUb1BvaW50cyA9IGV2ZW50VG9Qb2ludHM7XG4gICAgdGhpcy51cGRhdGUgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgUG9pbnRlci5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB2YXIgX2V2ZW50VG9Qb2ludHMgPSB0aGlzLmV2ZW50VG9Qb2ludHMoZSk7XG5cbiAgICB2YXIgeCA9IF9ldmVudFRvUG9pbnRzLng7XG4gICAgdmFyIHkgPSBfZXZlbnRUb1BvaW50cy55O1xuXG4gICAgdGhpcy54LnVwZGF0ZSh4KTtcbiAgICB0aGlzLnkudXBkYXRlKHkpO1xuICB9O1xuXG4gIFBvaW50ZXIucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5tb3ZlRXZlbnQsIHRoaXMudXBkYXRlKTtcbiAgfTtcblxuICBQb2ludGVyLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gc3RvcCgpIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLm1vdmVFdmVudCwgdGhpcy51cGRhdGUpO1xuICB9O1xuXG4gIHJldHVybiBQb2ludGVyO1xufSgpO1xuXG52YXIgbW91c2VFdmVudFRvUG9pbnQgPSBmdW5jdGlvbiAoZSkge1xuICByZXR1cm4ge1xuICAgIHg6IGUucGFnZVgsXG4gICAgeTogZS5wYWdlWVxuICB9O1xufTtcblxudmFyIHRvdWNoRXZlbnRUb1BvaW50ID0gZnVuY3Rpb24gKF9yZWYzKSB7XG4gIHZhciBjaGFuZ2VkVG91Y2hlcyA9IF9yZWYzLmNoYW5nZWRUb3VjaGVzO1xuICByZXR1cm4ge1xuICAgIHg6IGNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFgsXG4gICAgeTogY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WVxuICB9O1xufTtcblxudmFyIGdldE5hdGl2ZUV2ZW50ID0gZnVuY3Rpb24gKGUpIHtcbiAgcmV0dXJuIGUub3JpZ2luYWxFdmVudCB8fCBlLm5hdGl2ZUV2ZW50IHx8IGU7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZSkge1xuICB2YXIgbmF0aXZlRXZlbnQgPSBnZXROYXRpdmVFdmVudChlKTtcbiAgcmV0dXJuIG5hdGl2ZUV2ZW50LnRvdWNoZXMgPyBuZXcgUG9pbnRlcih0b3VjaEV2ZW50VG9Qb2ludChlKSwge1xuICAgIG1vdmVFdmVudDogJ3RvdWNobW92ZScsXG4gICAgZXZlbnRUb1BvaW50czogdG91Y2hFdmVudFRvUG9pbnRcbiAgfSkgOiBuZXcgUG9pbnRlcihtb3VzZUV2ZW50VG9Qb2ludChlKSwge1xuICAgIG1vdmVFdmVudDogJ21vdXNlbW92ZScsXG4gICAgZXZlbnRUb1BvaW50czogbW91c2VFdmVudFRvUG9pbnRcbiAgfSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm5CMWRDOXdiMmx1ZEdWeUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3UVVGQlFUczdPenM3T3pzN1NVRkZUVHRCUVVOS0xGZEJSRWtzVDBGRFNpeGpRVUZ2UkR0UlFVRjBReXhYUVVGelF6dFJRVUZ1UXl4WFFVRnRRenRSUVVFMVFpeHZRMEZCTkVJN1VVRkJZaXcwUWtGQllUczdNRUpCUkdoRUxGTkJRMmRFT3p0QlFVTnNSQ3hUUVVGTExFTkJRVXdzUjBGQlV5eHhRa0ZCVFN4RFFVRk9MRU5CUVZRc1EwRkVhMFE3UVVGRmJFUXNVMEZCU3l4RFFVRk1MRWRCUVZNc2NVSkJRVTBzUTBGQlRpeERRVUZVTEVOQlJtdEVPMEZCUjJ4RUxGTkJRVXNzVTBGQlRDeEhRVUZwUWl4VFFVRnFRaXhEUVVoclJEdEJRVWxzUkN4VFFVRkxMR0ZCUVV3c1IwRkJjVUlzWVVGQmNrSXNRMEZLYTBRN1FVRkxiRVFzVTBGQlN5eE5RVUZNTEVkQlFXTXNTMEZCU3l4TlFVRk1MRU5CUVZrc1NVRkJXaXhEUVVGcFFpeEpRVUZxUWl4RFFVRmtMRU5CVEd0RU8wZEJRWEJFT3p0QlFVUkpMRzlDUVZOS0xIbENRVUZQTEVkQlFVYzdRVUZEVWl4TlFVRkZMR05CUVVZc1IwRkVVVHM3ZVVKQlJWTXNTMEZCU3l4aFFVRk1MRU5CUVcxQ0xFTkJRVzVDTEVWQlJsUTdPMUZCUlVFc2NVSkJSa0U3VVVGRlJ5eHhRa0ZHU0RzN1FVRkhVaXhUUVVGTExFTkJRVXdzUTBGQlR5eE5RVUZRTEVOQlFXTXNRMEZCWkN4RlFVaFJPMEZCU1ZJc1UwRkJTeXhEUVVGTUxFTkJRVThzVFVGQlVDeERRVUZqTEVOQlFXUXNSVUZLVVRzN08wRkJWRTRzYjBKQlowSktMSGxDUVVGUk8wRkJRMDRzWVVGQlV5eGxRVUZVTEVOQlFYbENMR2RDUVVGNlFpeERRVUV3UXl4TFFVRkxMRk5CUVV3c1JVRkJaMElzUzBGQlN5eE5RVUZNTEVOQlFURkVMRU5CUkUwN096dEJRV2hDU2l4dlFrRnZRa29zZFVKQlFVODdRVUZEVEN4aFFVRlRMR1ZCUVZRc1EwRkJlVUlzYlVKQlFYcENMRU5CUVRaRExFdEJRVXNzVTBGQlRDeEZRVUZuUWl4TFFVRkxMRTFCUVV3c1EwRkJOMFFzUTBGRVN6czdPMU5CY0VKSU96czdRVUY1UWs0c1NVRkJUU3h2UWtGQmIwSXNWVUZCUXl4RFFVRkVPMU5CUVZFN1FVRkRhRU1zVDBGQlJ5eEZRVUZGTEV0QlFVWTdRVUZEU0N4UFFVRkhMRVZCUVVVc1MwRkJSanM3UTBGR2NVSTdPMEZCU3pGQ0xFbEJRVTBzYjBKQlFXOUNPMDFCUVVjN1UwRkJjMEk3UVVGRGFrUXNUMEZCUnl4bFFVRmxMRU5CUVdZc1JVRkJhMElzVDBGQmJFSTdRVUZEU0N4UFFVRkhMR1ZCUVdVc1EwRkJaaXhGUVVGclFpeFBRVUZzUWpzN1EwRkdjVUk3TzBGQlN6RkNMRWxCUVUwc2FVSkJRV2xDTEZWQlFVTXNRMEZCUkR0VFFVRlBMRVZCUVVVc1lVRkJSaXhKUVVGdFFpeEZRVUZGTEZkQlFVWXNTVUZCYVVJc1EwRkJjRU03UTBGQlVEczdhMEpCUlZJc1ZVRkJReXhEUVVGRUxFVkJRVTg3UVVGRGNFSXNUVUZCVFN4alFVRmpMR1ZCUVdVc1EwRkJaaXhEUVVGa0xFTkJSR003UVVGRmNFSXNVMEZCVHl4WFFVRkRMRU5CUVZrc1QwRkJXaXhIUVVOT0xFbEJRVWtzVDBGQlNpeERRVUZaTEd0Q1FVRnJRaXhEUVVGc1FpeERRVUZhTEVWQlFXdERPMEZCUTJoRExHVkJRVmNzVjBGQldEdEJRVU5CTEcxQ1FVRmxMR2xDUVVGbU8wZEJSa1lzUTBGRVN5eEhRVXRNTEVsQlFVa3NUMEZCU2l4RFFVRlpMR3RDUVVGclFpeERRVUZzUWl4RFFVRmFMRVZCUVd0RE8wRkJRMmhETEdWQlFWY3NWMEZCV0R0QlFVTkJMRzFDUVVGbExHbENRVUZtTzBkQlJrWXNRMEZNU3l4RFFVWmhPME5CUVZBaUxDSm1hV3hsSWpvaWNHOXBiblJsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRDOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2RtRnNkV1VnWm5KdmJTQW5MaTR2ZG1Gc2RXVW5PMXh1WEc1amJHRnpjeUJRYjJsdWRHVnlJSHRjYmlBZ1kyOXVjM1J5ZFdOMGIzSW9leUI0TENCNUlIMHNJSHNnWlhabGJuUlViMUJ2YVc1MGN5d2diVzkyWlVWMlpXNTBJSDBwSUh0Y2JpQWdJQ0IwYUdsekxuZ2dQU0IyWVd4MVpTaDRLVHRjYmlBZ0lDQjBhR2x6TG5rZ1BTQjJZV3gxWlNoNUtUdGNiaUFnSUNCMGFHbHpMbTF2ZG1WRmRtVnVkQ0E5SUcxdmRtVkZkbVZ1ZER0Y2JpQWdJQ0IwYUdsekxtVjJaVzUwVkc5UWIybHVkSE1nUFNCbGRtVnVkRlJ2VUc5cGJuUnpPMXh1SUNBZ0lIUm9hWE11ZFhCa1lYUmxJRDBnZEdocGN5NTFjR1JoZEdVdVltbHVaQ2gwYUdsektUdGNiaUFnZlZ4dVhHNGdJSFZ3WkdGMFpTaGxLU0I3WEc0Z0lDQWdaUzV3Y21WMlpXNTBSR1ZtWVhWc2RDZ3BPMXh1SUNBZ0lHTnZibk4wSUhzZ2VDd2dlU0I5SUQwZ2RHaHBjeTVsZG1WdWRGUnZVRzlwYm5SektHVXBPMXh1SUNBZ0lIUm9hWE11ZUM1MWNHUmhkR1VvZUNrN1hHNGdJQ0FnZEdocGN5NTVMblZ3WkdGMFpTaDVLVHRjYmlBZ2ZWeHVYRzRnSUhOMFlYSjBLQ2tnZTF4dUlDQWdJR1J2WTNWdFpXNTBMbVJ2WTNWdFpXNTBSV3hsYldWdWRDNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtIUm9hWE11Ylc5MlpVVjJaVzUwTENCMGFHbHpMblZ3WkdGMFpTazdYRzRnSUgxY2JseHVJQ0J6ZEc5d0tDa2dlMXh1SUNBZ0lHUnZZM1Z0Wlc1MExtUnZZM1Z0Wlc1MFJXeGxiV1Z1ZEM1eVpXMXZkbVZGZG1WdWRFeHBjM1JsYm1WeUtIUm9hWE11Ylc5MlpVVjJaVzUwTENCMGFHbHpMblZ3WkdGMFpTazdYRzRnSUgxY2JuMWNibHh1WTI5dWMzUWdiVzkxYzJWRmRtVnVkRlJ2VUc5cGJuUWdQU0FvWlNrZ1BUNGdLSHRjYmlBZ2VEb2daUzV3WVdkbFdDeGNiaUFnZVRvZ1pTNXdZV2RsV1Z4dWZTazdYRzVjYm1OdmJuTjBJSFJ2ZFdOb1JYWmxiblJVYjFCdmFXNTBJRDBnS0hzZ1kyaGhibWRsWkZSdmRXTm9aWE1nZlNrZ1BUNGdLSHRjYmlBZ2VEb2dZMmhoYm1kbFpGUnZkV05vWlhOYk1GMHVZMnhwWlc1MFdDeGNiaUFnZVRvZ1kyaGhibWRsWkZSdmRXTm9aWE5iTUYwdVkyeHBaVzUwV1Z4dWZTazdYRzVjYm1OdmJuTjBJR2RsZEU1aGRHbDJaVVYyWlc1MElEMGdLR1VwSUQwK0lHVXViM0pwWjJsdVlXeEZkbVZ1ZENCOGZDQmxMbTVoZEdsMlpVVjJaVzUwSUh4OElHVTdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJQ2hsS1NBOVBpQjdYRzRnSUdOdmJuTjBJRzVoZEdsMlpVVjJaVzUwSUQwZ1oyVjBUbUYwYVhabFJYWmxiblFvWlNrN1hHNGdJSEpsZEhWeWJpQW9ibUYwYVhabFJYWmxiblF1ZEc5MVkyaGxjeWtnUDF4dUlDQWdJRzVsZHlCUWIybHVkR1Z5S0hSdmRXTm9SWFpsYm5SVWIxQnZhVzUwS0dVcExDQjdYRzRnSUNBZ0lDQnRiM1psUlhabGJuUTZJQ2QwYjNWamFHMXZkbVVuTEZ4dUlDQWdJQ0FnWlhabGJuUlViMUJ2YVc1MGN6b2dkRzkxWTJoRmRtVnVkRlJ2VUc5cGJuUmNiaUFnSUNCOUtTQTZYRzRnSUNBZ2JtVjNJRkJ2YVc1MFpYSW9iVzkxYzJWRmRtVnVkRlJ2VUc5cGJuUW9aU2tzSUh0Y2JpQWdJQ0FnSUcxdmRtVkZkbVZ1ZERvZ0oyMXZkWE5sYlc5MlpTY3NYRzRnSUNBZ0lDQmxkbVZ1ZEZSdlVHOXBiblJ6T2lCdGIzVnpaVVYyWlc1MFZHOVFiMmx1ZEZ4dUlDQWdJSDBwTzF4dWZWeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbnB1dC9wb2ludGVyLmpzXG4gKiogbW9kdWxlIGlkID0gOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5jdXJyZW50RnJhbWVUaW1lc3RhbXAgPSBleHBvcnRzLnRpbWVTaW5jZUxhc3RGcmFtZSA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZUVuZCA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZVJlbmRlciA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZVVwZGF0ZSA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZVN0YXJ0ID0gZXhwb3J0cy5vbkZyYW1lRW5kID0gZXhwb3J0cy5vbkZyYW1lUmVuZGVyID0gZXhwb3J0cy5vbkZyYW1lVXBkYXRlID0gZXhwb3J0cy5vbkZyYW1lU3RhcnQgPSB1bmRlZmluZWQ7XG5cbnZhciBfb25OZXh0RnJhbWUgPSByZXF1aXJlKCcuL29uLW5leHQtZnJhbWUnKTtcblxudmFyIF9vbk5leHRGcmFtZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vbk5leHRGcmFtZSk7XG5cbnZhciBfY3JlYXRlUmVuZGVyU3RlcCA9IHJlcXVpcmUoJy4vY3JlYXRlLXJlbmRlci1zdGVwJyk7XG5cbnZhciBfY3JlYXRlUmVuZGVyU3RlcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVSZW5kZXJTdGVwKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgd2lsbFJlbmRlck5leHRGcmFtZSA9IGZhbHNlO1xuXG4vKipcbiAqIE1heGltdW0gcGVybWl0dGVkIG1zIHNpbmNlIGxhc3QgZnJhbWVcbiAqIEB0eXBlIHtOdW1iZXJ9XG4gKi9cbnZhciBNQVhfRUxBUFNFRCA9IDIwO1xuXG4vKipcbiAqIEN1cnJlbnQgZnJhbWVzdGFtcFxuICogQHR5cGUge051bWJlcn1cbiAqL1xudmFyIGN1cnJlbnRGcmFtZXN0YW1wID0gKDAsIF91dGlscy5jdXJyZW50VGltZSkoKTtcblxudmFyIGVsYXBzZWQgPSAwO1xuXG4vKipcbiAqIEZhY3RvciB0byBtdWx0aXBseSBgZWxhcHNlZGAgYnkgLSBcbiAqIDAuNSB3b3VsZCBiZSBzbG93IG1vdGlvbiwgMiB3b3VsZCBiZSBmYXN0XG4gKiBAdHlwZSB7TnVtYmVyfVxuICovXG52YXIgZGlsYXRpb24gPSAxO1xuXG5mdW5jdGlvbiBzdGFydFJlbmRlckxvb3AoKSB7XG4gIGlmICghd2lsbFJlbmRlck5leHRGcmFtZSkge1xuICAgIHdpbGxSZW5kZXJOZXh0RnJhbWUgPSB0cnVlO1xuICAgICgwLCBfb25OZXh0RnJhbWUyLmRlZmF1bHQpKHByb2Nlc3NGcmFtZSk7XG4gIH1cbn1cblxudmFyIGZyYW1lU3RhcnQgPSAoMCwgX2NyZWF0ZVJlbmRlclN0ZXAyLmRlZmF1bHQpKHN0YXJ0UmVuZGVyTG9vcCk7XG52YXIgZnJhbWVVcGRhdGUgPSAoMCwgX2NyZWF0ZVJlbmRlclN0ZXAyLmRlZmF1bHQpKHN0YXJ0UmVuZGVyTG9vcCk7XG52YXIgZnJhbWVSZW5kZXIgPSAoMCwgX2NyZWF0ZVJlbmRlclN0ZXAyLmRlZmF1bHQpKHN0YXJ0UmVuZGVyTG9vcCk7XG52YXIgZnJhbWVFbmQgPSAoMCwgX2NyZWF0ZVJlbmRlclN0ZXAyLmRlZmF1bHQpKHN0YXJ0UmVuZGVyTG9vcCk7XG5cbmZ1bmN0aW9uIHByb2Nlc3NGcmFtZShmcmFtZXN0YW1wKSB7XG4gIHdpbGxSZW5kZXJOZXh0RnJhbWUgPSBmYWxzZTtcbiAgZWxhcHNlZCA9IE1hdGgubWF4KE1hdGgubWluKGZyYW1lc3RhbXAgLSBjdXJyZW50RnJhbWVzdGFtcCwgTUFYX0VMQVBTRUQpLCAxKSAqIGRpbGF0aW9uO1xuICBjdXJyZW50RnJhbWVzdGFtcCA9IGZyYW1lc3RhbXA7XG5cbiAgZnJhbWVTdGFydC5wcm9jZXNzKCk7XG4gIGZyYW1lVXBkYXRlLnByb2Nlc3MoKTtcbiAgZnJhbWVSZW5kZXIucHJvY2VzcygpO1xuICBmcmFtZUVuZC5wcm9jZXNzKCk7XG59XG5cbnZhciBvbkZyYW1lU3RhcnQgPSBleHBvcnRzLm9uRnJhbWVTdGFydCA9IGZyYW1lU3RhcnQuc2NoZWR1bGU7XG52YXIgb25GcmFtZVVwZGF0ZSA9IGV4cG9ydHMub25GcmFtZVVwZGF0ZSA9IGZyYW1lVXBkYXRlLnNjaGVkdWxlO1xudmFyIG9uRnJhbWVSZW5kZXIgPSBleHBvcnRzLm9uRnJhbWVSZW5kZXIgPSBmcmFtZVJlbmRlci5zY2hlZHVsZTtcbnZhciBvbkZyYW1lRW5kID0gZXhwb3J0cy5vbkZyYW1lRW5kID0gZnJhbWVFbmQuc2NoZWR1bGU7XG52YXIgY2FuY2VsT25GcmFtZVN0YXJ0ID0gZXhwb3J0cy5jYW5jZWxPbkZyYW1lU3RhcnQgPSBmcmFtZVN0YXJ0LmNhbmNlbDtcbnZhciBjYW5jZWxPbkZyYW1lVXBkYXRlID0gZXhwb3J0cy5jYW5jZWxPbkZyYW1lVXBkYXRlID0gZnJhbWVVcGRhdGUuY2FuY2VsO1xudmFyIGNhbmNlbE9uRnJhbWVSZW5kZXIgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVSZW5kZXIgPSBmcmFtZVJlbmRlci5jYW5jZWw7XG52YXIgY2FuY2VsT25GcmFtZUVuZCA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZUVuZCA9IGZyYW1lRW5kLmNhbmNlbDtcblxudmFyIHRpbWVTaW5jZUxhc3RGcmFtZSA9IGV4cG9ydHMudGltZVNpbmNlTGFzdEZyYW1lID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZWxhcHNlZDtcbn07XG52YXIgY3VycmVudEZyYW1lVGltZXN0YW1wID0gZXhwb3J0cy5jdXJyZW50RnJhbWVUaW1lc3RhbXAgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBjdXJyZW50RnJhbWVzdGFtcDtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OW1jbUZ0WlhONWJtTXZhVzVrWlhndWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3UVVGQlFUczdPenRCUVVOQk96czdPMEZCUTBFN096czdRVUZGUVN4SlFVRkpMSE5DUVVGelFpeExRVUYwUWpzN096czdPMEZCVFVvc1NVRkJUU3hqUVVGakxFVkJRV1E3T3pzN096dEJRVTFPTEVsQlFVa3NiMEpCUVc5Q0xIbENRVUZ3UWpzN1FVRkZTaXhKUVVGSkxGVkJRVlVzUTBGQlZqczdPenM3T3p0QlFVOUtMRWxCUVVrc1YwRkJWeXhEUVVGWU96dEJRVVZLTEZOQlFWTXNaVUZCVkN4SFFVRXlRanRCUVVONlFpeE5RVUZKTEVOQlFVTXNiVUpCUVVRc1JVRkJjMEk3UVVGRGVFSXNNRUpCUVhOQ0xFbEJRWFJDTEVOQlJIZENPMEZCUlhoQ0xDdENRVUZaTEZsQlFWb3NSVUZHZDBJN1IwRkJNVUk3UTBGRVJqczdRVUZQUVN4SlFVRk5MR0ZCUVdFc1owTkJRV2xDTEdWQlFXcENMRU5CUVdJN1FVRkRUaXhKUVVGTkxHTkJRV01zWjBOQlFXbENMR1ZCUVdwQ0xFTkJRV1E3UVVGRFRpeEpRVUZOTEdOQlFXTXNaME5CUVdsQ0xHVkJRV3BDTEVOQlFXUTdRVUZEVGl4SlFVRk5MRmRCUVZjc1owTkJRV2xDTEdWQlFXcENMRU5CUVZnN08wRkJSVTRzVTBGQlV5eFpRVUZVTEVOQlFYTkNMRlZCUVhSQ0xFVkJRV3RETzBGQlEyaERMSGRDUVVGelFpeExRVUYwUWl4RFFVUm5RenRCUVVWb1F5eFpRVUZWTEV0QlFVc3NSMEZCVEN4RFFVRlRMRXRCUVVzc1IwRkJUQ3hEUVVGVExHRkJRV0VzYVVKQlFXSXNSVUZCWjBNc1YwRkJla01zUTBGQlZDeEZRVUZuUlN4RFFVRm9SU3hKUVVGeFJTeFJRVUZ5UlN4RFFVWnpRanRCUVVkb1F5eHpRa0ZCYjBJc1ZVRkJjRUlzUTBGSVowTTdPMEZCUzJoRExHRkJRVmNzVDBGQldDeEhRVXhuUXp0QlFVMW9ReXhqUVVGWkxFOUJRVm9zUjBGT1owTTdRVUZQYUVNc1kwRkJXU3hQUVVGYUxFZEJVR2RETzBGQlVXaERMRmRCUVZNc1QwRkJWQ3hIUVZKblF6dERRVUZzUXpzN1FVRlhUeXhKUVVGTkxITkRRVUZsTEZkQlFWY3NVVUZCV0R0QlFVTnlRaXhKUVVGTkxIZERRVUZuUWl4WlFVRlpMRkZCUVZvN1FVRkRkRUlzU1VGQlRTeDNRMEZCWjBJc1dVRkJXU3hSUVVGYU8wRkJRM1JDTEVsQlFVMHNhME5CUVdFc1UwRkJVeXhSUVVGVU8wRkJRMjVDTEVsQlFVMHNhMFJCUVhGQ0xGZEJRVmNzVFVGQldEdEJRVU16UWl4SlFVRk5MRzlFUVVGelFpeFpRVUZaTEUxQlFWbzdRVUZETlVJc1NVRkJUU3h2UkVGQmMwSXNXVUZCV1N4TlFVRmFPMEZCUXpWQ0xFbEJRVTBzT0VOQlFXMUNMRk5CUVZNc1RVRkJWRHM3UVVGRmVrSXNTVUZCVFN4clJFRkJjVUk3VTBGQlRUdERRVUZPTzBGQlF6TkNMRWxCUVUwc2QwUkJRWGRDTzFOQlFVMDdRMEZCVGlJc0ltWnBiR1VpT2lKcGJtUmxlQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnYjI1T1pYaDBSbkpoYldVZ1puSnZiU0FuTGk5dmJpMXVaWGgwTFdaeVlXMWxKenRjYm1sdGNHOXlkQ0JqY21WaGRHVlNaVzVrWlhKVGRHVndJR1p5YjIwZ0p5NHZZM0psWVhSbExYSmxibVJsY2kxemRHVndKenRjYm1sdGNHOXlkQ0I3SUdOMWNuSmxiblJVYVcxbElIMGdabkp2YlNBbkxpNHZhVzVqTDNWMGFXeHpKenRjYmx4dWJHVjBJSGRwYkd4U1pXNWtaWEpPWlhoMFJuSmhiV1VnUFNCbVlXeHpaVHRjYmx4dUx5b3FYRzRnS2lCTllYaHBiWFZ0SUhCbGNtMXBkSFJsWkNCdGN5QnphVzVqWlNCc1lYTjBJR1p5WVcxbFhHNGdLaUJBZEhsd1pTQjdUblZ0WW1WeWZWeHVJQ292WEc1amIyNXpkQ0JOUVZoZlJVeEJVRk5GUkNBOUlESXdPMXh1WEc0dktpcGNiaUFxSUVOMWNuSmxiblFnWm5KaGJXVnpkR0Z0Y0Z4dUlDb2dRSFI1Y0dVZ2UwNTFiV0psY24xY2JpQXFMMXh1YkdWMElHTjFjbkpsYm5SR2NtRnRaWE4wWVcxd0lEMGdZM1Z5Y21WdWRGUnBiV1VvS1R0Y2JseHViR1YwSUdWc1lYQnpaV1FnUFNBd08xeHVYRzR2S2lwY2JpQXFJRVpoWTNSdmNpQjBieUJ0ZFd4MGFYQnNlU0JnWld4aGNITmxaR0FnWW5rZ0xTQmNiaUFxSURBdU5TQjNiM1ZzWkNCaVpTQnpiRzkzSUcxdmRHbHZiaXdnTWlCM2IzVnNaQ0JpWlNCbVlYTjBYRzRnS2lCQWRIbHdaU0I3VG5WdFltVnlmVnh1SUNvdlhHNXNaWFFnWkdsc1lYUnBiMjRnUFNBeE8xeHVYRzVtZFc1amRHbHZiaUJ6ZEdGeWRGSmxibVJsY2t4dmIzQW9LU0I3WEc0Z0lHbG1JQ2doZDJsc2JGSmxibVJsY2s1bGVIUkdjbUZ0WlNrZ2UxeHVJQ0FnSUhkcGJHeFNaVzVrWlhKT1pYaDBSbkpoYldVZ1BTQjBjblZsTzF4dUlDQWdJRzl1VG1WNGRFWnlZVzFsS0hCeWIyTmxjM05HY21GdFpTazdYRzRnSUgxY2JuMWNibHh1WTI5dWMzUWdabkpoYldWVGRHRnlkQ0E5SUdOeVpXRjBaVkpsYm1SbGNsTjBaWEFvYzNSaGNuUlNaVzVrWlhKTWIyOXdLVHRjYm1OdmJuTjBJR1p5WVcxbFZYQmtZWFJsSUQwZ1kzSmxZWFJsVW1WdVpHVnlVM1JsY0NoemRHRnlkRkpsYm1SbGNreHZiM0FwTzF4dVkyOXVjM1FnWm5KaGJXVlNaVzVrWlhJZ1BTQmpjbVZoZEdWU1pXNWtaWEpUZEdWd0tITjBZWEowVW1WdVpHVnlURzl2Y0NrN1hHNWpiMjV6ZENCbWNtRnRaVVZ1WkNBOUlHTnlaV0YwWlZKbGJtUmxjbE4wWlhBb2MzUmhjblJTWlc1a1pYSk1iMjl3S1R0Y2JseHVablZ1WTNScGIyNGdjSEp2WTJWemMwWnlZVzFsS0daeVlXMWxjM1JoYlhBcElIdGNiaUFnZDJsc2JGSmxibVJsY2s1bGVIUkdjbUZ0WlNBOUlHWmhiSE5sTzF4dUlDQmxiR0Z3YzJWa0lEMGdUV0YwYUM1dFlYZ29UV0YwYUM1dGFXNG9abkpoYldWemRHRnRjQ0F0SUdOMWNuSmxiblJHY21GdFpYTjBZVzF3TENCTlFWaGZSVXhCVUZORlJDa3NJREVwSUNvZ1pHbHNZWFJwYjI0N1hHNGdJR04xY25KbGJuUkdjbUZ0WlhOMFlXMXdJRDBnWm5KaGJXVnpkR0Z0Y0R0Y2JseHVJQ0JtY21GdFpWTjBZWEowTG5CeWIyTmxjM01vS1R0Y2JpQWdabkpoYldWVmNHUmhkR1V1Y0hKdlkyVnpjeWdwTzF4dUlDQm1jbUZ0WlZKbGJtUmxjaTV3Y205alpYTnpLQ2s3WEc0Z0lHWnlZVzFsUlc1a0xuQnliMk5sYzNNb0tUdGNibjFjYmx4dVpYaHdiM0owSUdOdmJuTjBJRzl1Um5KaGJXVlRkR0Z5ZENBOUlHWnlZVzFsVTNSaGNuUXVjMk5vWldSMWJHVTdYRzVsZUhCdmNuUWdZMjl1YzNRZ2IyNUdjbUZ0WlZWd1pHRjBaU0E5SUdaeVlXMWxWWEJrWVhSbExuTmphR1ZrZFd4bE8xeHVaWGh3YjNKMElHTnZibk4wSUc5dVJuSmhiV1ZTWlc1a1pYSWdQU0JtY21GdFpWSmxibVJsY2k1elkyaGxaSFZzWlR0Y2JtVjRjRzl5ZENCamIyNXpkQ0J2YmtaeVlXMWxSVzVrSUQwZ1puSmhiV1ZGYm1RdWMyTm9aV1IxYkdVN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnWTJGdVkyVnNUMjVHY21GdFpWTjBZWEowSUQwZ1puSmhiV1ZUZEdGeWRDNWpZVzVqWld3N1hHNWxlSEJ2Y25RZ1kyOXVjM1FnWTJGdVkyVnNUMjVHY21GdFpWVndaR0YwWlNBOUlHWnlZVzFsVlhCa1lYUmxMbU5oYm1ObGJEdGNibVY0Y0c5eWRDQmpiMjV6ZENCallXNWpaV3hQYmtaeVlXMWxVbVZ1WkdWeUlEMGdabkpoYldWU1pXNWtaWEl1WTJGdVkyVnNPMXh1Wlhod2IzSjBJR052Ym5OMElHTmhibU5sYkU5dVJuSmhiV1ZGYm1RZ1BTQm1jbUZ0WlVWdVpDNWpZVzVqWld3N1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCMGFXMWxVMmx1WTJWTVlYTjBSbkpoYldVZ1BTQW9LU0E5UGlCbGJHRndjMlZrTzF4dVpYaHdiM0owSUdOdmJuTjBJR04xY25KbGJuUkdjbUZ0WlZScGJXVnpkR0Z0Y0NBOUlDZ3BJRDArSUdOMWNuSmxiblJHY21GdFpYTjBZVzF3TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2ZyYW1lc3luYy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFZhbHVlID0gZXhwb3J0cy5WYWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gVmFsdWUoaW5pdGlhbFZhbHVlLCB0eXBlKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFZhbHVlKTtcblxuICAgIHRoaXMuY3VycmVudCA9IGluaXRpYWxWYWx1ZTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuYWN0aW9uID0gbnVsbDtcbiAgfVxuXG4gIFZhbHVlLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUobmV3VmFsdWUpIHtcbiAgICB0aGlzLmN1cnJlbnQgPSBuZXdWYWx1ZTtcbiAgICB0aGlzLl9fZmlyZUxpc3RlbmVycygpO1xuICB9O1xuXG4gIFZhbHVlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudDtcbiAgfTtcblxuICBWYWx1ZS5wcm90b3R5cGUuZ2V0VmVsb2NpdHkgPSBmdW5jdGlvbiBnZXRWZWxvY2l0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5hY3Rpb24gPyB0aGlzLmFjdGlvbi5nZXRWZWxvY2l0eSA6IDA7XG4gIH07XG5cbiAgVmFsdWUucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiBzdG9wKCkge1xuICAgIGlmICh0aGlzLmFjdGlvbikge1xuICAgICAgdGhpcy5hY3Rpb24uc3RvcCgpO1xuICAgICAgdGhpcy5hY3Rpb24gPSBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIFZhbHVlLnByb3RvdHlwZS5yZWdpc3RlckFjdGlvbiA9IGZ1bmN0aW9uIHJlZ2lzdGVyQWN0aW9uKGFjdGlvbikge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBpZiAodGhpcy5hY3Rpb24pIHtcbiAgICAgIHRoaXMuYWN0aW9uLnN0b3AoKTtcbiAgICB9XG5cbiAgICB0aGlzLmFjdGlvbiA9IGFjdGlvbjtcblxuICAgIC8vIFBvdGVudGlhbCB0b2RvOiBDaGVjayBpZiBzb3VyY2UgYWN0aW9uIGlzIHRoaXMuYWN0aW9uXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgICByZXR1cm4gX3RoaXMudXBkYXRlKHYpO1xuICAgIH07XG4gIH07XG5cbiAgVmFsdWUucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24gYWRkTGlzdGVuZXIoY2FsbGJhY2spIHtcbiAgICBpZiAoIXRoaXMubGlzdGVuZXJzKSB7XG4gICAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xuICAgIH1cblxuICAgIHZhciBsaXN0ZW5lckluZGV4ID0gdGhpcy5saXN0ZW5lcnMuaW5kZXhPZihjYWxsYmFjayk7XG4gICAgaWYgKGxpc3RlbmVySW5kZXggPT09IC0xKSB7XG4gICAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBWYWx1ZS5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcihjYWxsYmFjaykge1xuICAgIGlmICh0aGlzLmxpc3RlbmVycykge1xuICAgICAgdmFyIGxpc3RlbmVySW5kZXggPSB0aGlzLmxpc3RlbmVycy5pbmRleE9mKGNhbGxiYWNrKTtcbiAgICAgIGlmIChsaXN0ZW5lckluZGV4ID4gLTEpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMuc3BsaWNlKGxpc3RlbmVySW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIFZhbHVlLnByb3RvdHlwZS5fX2ZpcmVMaXN0ZW5lcnMgPSBmdW5jdGlvbiBfX2ZpcmVMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKHRoaXMubGlzdGVuZXJzKSB7XG4gICAgICB2YXIgbnVtTGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnMubGVuZ3RoO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1MaXN0ZW5lcnM7IGkrKykge1xuICAgICAgICB0aGlzLmxpc3RlbmVyc1tpXSh0aGlzLmN1cnJlbnQsIHRoaXMpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gVmFsdWU7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChpbml0aWFsVmFsdWUpIHtcbiAgcmV0dXJuIG5ldyBWYWx1ZShpbml0aWFsVmFsdWUpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzlwYm1SbGVDNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN1NVRkJZVHRCUVVOWUxGZEJSRmNzUzBGRFdDeERRVUZaTEZsQlFWb3NSVUZCTUVJc1NVRkJNVUlzUlVGQlowTTdNRUpCUkhKQ0xFOUJRM0ZDT3p0QlFVTTVRaXhUUVVGTExFOUJRVXdzUjBGQlpTeFpRVUZtTEVOQlJEaENPMEZCUlRsQ0xGTkJRVXNzU1VGQlRDeEhRVUZaTEVsQlFWb3NRMEZHT0VJN1FVRkhPVUlzVTBGQlN5eE5RVUZNTEVkQlFXTXNTVUZCWkN4RFFVZzRRanRIUVVGb1F6czdRVUZFVnl4clFrRlBXQ3g1UWtGQlR5eFZRVUZWTzBGQlEyWXNVMEZCU3l4UFFVRk1MRWRCUVdVc1VVRkJaaXhEUVVSbE8wRkJSV1lzVTBGQlN5eGxRVUZNTEVkQlJtVTdPenRCUVZCT0xHdENRVmxZTEhGQ1FVRk5PMEZCUTBvc1YwRkJUeXhMUVVGTExFOUJRVXdzUTBGRVNEczdPMEZCV2tzc2EwSkJaMEpZTEhGRFFVRmpPMEZCUTFvc1YwRkJUeXhKUVVGRExFTkJRVXNzVFVGQlRDeEhRVUZsTEV0QlFVc3NUVUZCVEN4RFFVRlpMRmRCUVZvc1IwRkJNRUlzUTBGQk1VTXNRMEZFU3pzN08wRkJhRUpJTEd0Q1FXOUNXQ3gxUWtGQlR6dEJRVU5NTEZGQlFVa3NTMEZCU3l4TlFVRk1MRVZCUVdFN1FVRkRaaXhYUVVGTExFMUJRVXdzUTBGQldTeEpRVUZhTEVkQlJHVTdRVUZGWml4WFFVRkxMRTFCUVV3c1IwRkJZeXhKUVVGa0xFTkJSbVU3UzBGQmFrSTdPMEZCUzBFc1YwRkJUeXhKUVVGUUxFTkJUa3M3T3p0QlFYQkNTU3hyUWtFMlFsZ3NlVU5CUVdVc1VVRkJVVHM3TzBGQlEzSkNMRkZCUVVrc1MwRkJTeXhOUVVGTUxFVkJRV0U3UVVGRFppeFhRVUZMTEUxQlFVd3NRMEZCV1N4SlFVRmFMRWRCUkdVN1MwRkJha0k3TzBGQlNVRXNVMEZCU3l4TlFVRk1MRWRCUVdNc1RVRkJaRHM3TzBGQlRIRkNMRmRCVVdRc1ZVRkJReXhEUVVGRU8yRkJRVThzVFVGQlN5eE5RVUZNTEVOQlFWa3NRMEZCV2p0TFFVRlFMRU5CVW1NN096dEJRVGRDV2l4clFrRjNRMWdzYlVOQlFWa3NWVUZCVlR0QlFVTndRaXhSUVVGSkxFTkJRVU1zUzBGQlN5eFRRVUZNTEVWQlFXZENPMEZCUTI1Q0xGZEJRVXNzVTBGQlRDeEhRVUZwUWl4RlFVRnFRaXhEUVVSdFFqdExRVUZ5UWpzN1FVRkpRU3hSUVVGTkxHZENRVUZuUWl4TFFVRkxMRk5CUVV3c1EwRkJaU3hQUVVGbUxFTkJRWFZDTEZGQlFYWkNMRU5CUVdoQ0xFTkJUR003UVVGTmNFSXNVVUZCU1N4clFrRkJhMElzUTBGQlF5eERRVUZFTEVWQlFVazdRVUZEZUVJc1YwRkJTeXhUUVVGTUxFTkJRV1VzU1VGQlppeERRVUZ2UWl4UlFVRndRaXhGUVVSM1FqdExRVUV4UWpzN1FVRkpRU3hYUVVGUExFbEJRVkFzUTBGV2IwSTdPenRCUVhoRFdDeHJRa0Z4UkZnc2VVTkJRV1VzVlVGQlZUdEJRVU4yUWl4UlFVRkpMRXRCUVVzc1UwRkJUQ3hGUVVGblFqdEJRVU5zUWl4VlFVRk5MR2RDUVVGblFpeExRVUZMTEZOQlFVd3NRMEZCWlN4UFFVRm1MRU5CUVhWQ0xGRkJRWFpDTEVOQlFXaENMRU5CUkZrN1FVRkZiRUlzVlVGQlNTeG5Ra0ZCWjBJc1EwRkJReXhEUVVGRUxFVkJRVWs3UVVGRGRFSXNZVUZCU3l4VFFVRk1MRU5CUVdVc1RVRkJaaXhEUVVGelFpeGhRVUYwUWl4RlFVRnhReXhEUVVGeVF5eEZRVVJ6UWp0UFFVRjRRanRMUVVaR096dEJRVTlCTEZkQlFVOHNTVUZCVUN4RFFWSjFRanM3TzBGQmNrUmtMR3RDUVdkRldDdzJRMEZCYTBJN1FVRkRhRUlzVVVGQlNTeExRVUZMTEZOQlFVd3NSVUZCWjBJN1FVRkRiRUlzVlVGQlRTeGxRVUZsTEV0QlFVc3NVMEZCVEN4RFFVRmxMRTFCUVdZc1EwRkVTRHRCUVVWc1FpeFhRVUZMTEVsQlFVa3NTVUZCU1N4RFFVRktMRVZCUVU4c1NVRkJTU3haUVVGS0xFVkJRV3RDTEVkQlFXeERMRVZCUVhWRE8wRkJRM0pETEdGQlFVc3NVMEZCVEN4RFFVRmxMRU5CUVdZc1JVRkJhMElzUzBGQlN5eFBRVUZNTEVWQlFXTXNTVUZCYUVNc1JVRkVjVU03VDBGQmRrTTdTMEZHUmpzN08xTkJha1ZUT3pzN2EwSkJNRVZGTEZWQlFVTXNXVUZCUkR0VFFVRnJRaXhKUVVGSkxFdEJRVW9zUTBGQlZTeFpRVUZXTzBOQlFXeENJaXdpWm1sc1pTSTZJbWx1WkdWNExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbVY0Y0c5eWRDQmpiR0Z6Y3lCV1lXeDFaU0I3WEc0Z0lHTnZibk4wY25WamRHOXlLR2x1YVhScFlXeFdZV3gxWlN3Z2RIbHdaU2tnZTF4dUlDQWdJSFJvYVhNdVkzVnljbVZ1ZENBOUlHbHVhWFJwWVd4V1lXeDFaVHRjYmlBZ0lDQjBhR2x6TG5SNWNHVWdQU0IwZVhCbE8xeHVJQ0FnSUhSb2FYTXVZV04wYVc5dUlEMGdiblZzYkR0Y2JpQWdmVnh1WEc0Z0lIVndaR0YwWlNodVpYZFdZV3gxWlNrZ2UxeHVJQ0FnSUhSb2FYTXVZM1Z5Y21WdWRDQTlJRzVsZDFaaGJIVmxPMXh1SUNBZ0lIUm9hWE11WDE5bWFYSmxUR2x6ZEdWdVpYSnpLQ2s3WEc0Z0lIMWNibHh1SUNCblpYUW9LU0I3WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE11WTNWeWNtVnVkRHRjYmlBZ2ZWeHVYRzRnSUdkbGRGWmxiRzlqYVhSNUtDa2dlMXh1SUNBZ0lISmxkSFZ5YmlBb2RHaHBjeTVoWTNScGIyNHBJRDhnZEdocGN5NWhZM1JwYjI0dVoyVjBWbVZzYjJOcGRIa2dPaUF3TzF4dUlDQjlYRzVjYmlBZ2MzUnZjQ2dwSUh0Y2JpQWdJQ0JwWmlBb2RHaHBjeTVoWTNScGIyNHBJSHRjYmlBZ0lDQWdJSFJvYVhNdVlXTjBhVzl1TG5OMGIzQW9LVHRjYmlBZ0lDQWdJSFJvYVhNdVlXTjBhVzl1SUQwZ2JuVnNiRHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnlaWFIxY200Z2RHaHBjenRjYmlBZ2ZWeHVYRzRnSUhKbFoybHpkR1Z5UVdOMGFXOXVLR0ZqZEdsdmJpa2dlMXh1SUNBZ0lHbG1JQ2gwYUdsekxtRmpkR2x2YmlrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTVoWTNScGIyNHVjM1J2Y0NncE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhSb2FYTXVZV04wYVc5dUlEMGdZV04wYVc5dU8xeHVYRzRnSUNBZ0x5OGdVRzkwWlc1MGFXRnNJSFJ2Wkc4NklFTm9aV05ySUdsbUlITnZkWEpqWlNCaFkzUnBiMjRnYVhNZ2RHaHBjeTVoWTNScGIyNWNiaUFnSUNCeVpYUjFjbTRnS0hZcElEMCtJSFJvYVhNdWRYQmtZWFJsS0hZcE8xeHVJQ0I5WEc1Y2JpQWdZV1JrVEdsemRHVnVaWElvWTJGc2JHSmhZMnNwSUh0Y2JpQWdJQ0JwWmlBb0lYUm9hWE11YkdsemRHVnVaWEp6S1NCN1hHNGdJQ0FnSUNCMGFHbHpMbXhwYzNSbGJtVnljeUE5SUZ0ZE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUdOdmJuTjBJR3hwYzNSbGJtVnlTVzVrWlhnZ1BTQjBhR2x6TG14cGMzUmxibVZ5Y3k1cGJtUmxlRTltS0dOaGJHeGlZV05yS1R0Y2JpQWdJQ0JwWmlBb2JHbHpkR1Z1WlhKSmJtUmxlQ0E5UFQwZ0xURXBJSHRjYmlBZ0lDQWdJSFJvYVhNdWJHbHpkR1Z1WlhKekxuQjFjMmdvWTJGc2JHSmhZMnNwTzF4dUlDQWdJSDFjYmx4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQjlYRzVjYmlBZ2NtVnRiM1psVEdsemRHVnVaWElvWTJGc2JHSmhZMnNwSUh0Y2JpQWdJQ0JwWmlBb2RHaHBjeTVzYVhOMFpXNWxjbk1wSUh0Y2JpQWdJQ0FnSUdOdmJuTjBJR3hwYzNSbGJtVnlTVzVrWlhnZ1BTQjBhR2x6TG14cGMzUmxibVZ5Y3k1cGJtUmxlRTltS0dOaGJHeGlZV05yS1R0Y2JpQWdJQ0FnSUdsbUlDaHNhWE4wWlc1bGNrbHVaR1Y0SUQ0Z0xURXBJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXNhWE4wWlc1bGNuTXVjM0JzYVdObEtHeHBjM1JsYm1WeVNXNWtaWGdzSURFcE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JseHVJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVJQ0I5WEc1Y2JpQWdYMTltYVhKbFRHbHpkR1Z1WlhKektDa2dlMXh1SUNBZ0lHbG1JQ2gwYUdsekxteHBjM1JsYm1WeWN5a2dlMXh1SUNBZ0lDQWdZMjl1YzNRZ2JuVnRUR2x6ZEdWdVpYSnpJRDBnZEdocGN5NXNhWE4wWlc1bGNuTXViR1Z1WjNSb08xeHVJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQnVkVzFNYVhOMFpXNWxjbk03SUdrckt5a2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxteHBjM1JsYm1WeWMxdHBYU2gwYUdsekxtTjFjbkpsYm5Rc0lIUm9hWE1wTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmlBZ2ZWeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0FvYVc1cGRHbGhiRlpoYkhWbEtTQTlQaUJ1WlhjZ1ZtRnNkV1VvYVc1cGRHbGhiRlpoYkhWbEtUdGNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2ZyYW1lc3luYyA9IHJlcXVpcmUoJy4uL2ZyYW1lc3luYycpO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgQWN0aW9uID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBBY3Rpb24ocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQWN0aW9uKTtcblxuICAgIHRoaXMuY3VycmVudCA9IDA7XG4gICAgdGhpcy52ZWxvY2l0eSA9IDA7XG4gICAgdGhpcy51cGRhdGUgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5wcm9wcyA9IF9leHRlbmRzKHt9LCB0aGlzLmNvbnN0cnVjdG9yLmRlZmF1bHRQcm9wcywgcHJvcHMpO1xuICB9XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciB2YWx1ZSA9IF9wcm9wcy52YWx1ZTtcbiAgICB2YXIgb25TdGFydCA9IF9wcm9wcy5vblN0YXJ0O1xuICAgIHZhciBmcm9tID0gX3Byb3BzLmZyb207XG4gICAgdmFyIHZlbG9jaXR5ID0gX3Byb3BzLnZlbG9jaXR5O1xuXG5cbiAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAoMCwgX2ZyYW1lc3luYy5vbkZyYW1lVXBkYXRlKSh0aGlzLnVwZGF0ZSk7XG5cbiAgICBpZiAodGhpcy5vblN0YXJ0KSB7XG4gICAgICB0aGlzLm9uU3RhcnQoKTtcbiAgICB9XG5cbiAgICBpZiAob25TdGFydCkge1xuICAgICAgb25TdGFydCh0aGlzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiBzdG9wKCkge1xuICAgIHZhciBvblN0b3AgPSB0aGlzLnByb3BzLm9uU3RvcDtcblxuXG4gICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICgwLCBfZnJhbWVzeW5jLmNhbmNlbE9uRnJhbWVVcGRhdGUpKHRoaXMudXBkYXRlKTtcblxuICAgIGlmICh0aGlzLm9uU3RvcCkge1xuICAgICAgdGhpcy5vblN0b3AoKTtcbiAgICB9XG5cbiAgICBpZiAob25TdG9wKSB7XG4gICAgICBvblN0b3AodGhpcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5jb21wbGV0ZSA9IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgIGlmICh0aGlzLm9uQ29tcGxldGUpIHtcbiAgICAgIHRoaXMub25Db21wbGV0ZSgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLm9uQ29tcGxldGUpIHtcbiAgICAgIHRoaXMucHJvcHMub25Db21wbGV0ZSh0aGlzKTtcbiAgICB9XG5cbiAgICB0aGlzLnN0b3AoKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIHZhciBjdXJyZW50ID0gdGhpcy5jdXJyZW50O1xuICAgIHZhciB2ZWxvY2l0eSA9IHRoaXMudmVsb2NpdHk7XG5cbiAgICBpZiAodGhpcy5vblVwZGF0ZSkge1xuICAgICAgdGhpcy5vblVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHRoaXMudmVsb2NpdHkgPSAoMCwgX2NhbGMuc3BlZWRQZXJTZWNvbmQpKHRoaXMuY3VycmVudCAtIGN1cnJlbnQsICgwLCBfZnJhbWVzeW5jLnRpbWVTaW5jZUxhc3RGcmFtZSkoKSk7XG5cbiAgICBpZiAodGhpcy51cGRhdGVWYWx1ZSkge1xuICAgICAgdGhpcy51cGRhdGVWYWx1ZSh0aGlzLmN1cnJlbnQpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLm9uVXBkYXRlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uVXBkYXRlKHRoaXMpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzQWN0aXZlKSB7XG4gICAgICAoMCwgX2ZyYW1lc3luYy5vbkZyYW1lVXBkYXRlKSh0aGlzLnVwZGF0ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiBzZXQobmV3VmFsdWUpIHtcbiAgICB0aGlzLmN1cnJlbnQgPSBuZXdWYWx1ZTtcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50O1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUuZ2V0VmVsb2NpdHkgPSBmdW5jdGlvbiBnZXRWZWxvY2l0eSgpIHtcbiAgICByZXR1cm4gdGhpcy52ZWxvY2l0eTtcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLm91dHB1dCA9IGZ1bmN0aW9uIG91dHB1dChvblVwZGF0ZSkge1xuICAgIHJldHVybiBuZXcgdGhpcy5jb25zdHJ1Y3RvcihfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgb25VcGRhdGU6IG9uVXBkYXRlXG4gICAgfSkpO1xuICB9O1xuXG4gIHJldHVybiBBY3Rpb247XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEFjdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDJsdVpHVjRMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096dEJRVUZCT3p0QlFVTkJPenM3TzBsQlJVMDdRVUZEU2l4WFFVUkpMRTFCUTBvc1EwRkJXU3hMUVVGYUxFVkJRVzFDT3pCQ1FVUm1MRkZCUTJVN08wRkJRMnBDTEZOQlFVc3NUMEZCVEN4SFFVRmxMRU5CUVdZc1EwRkVhVUk3UVVGRmFrSXNVMEZCU3l4UlFVRk1MRWRCUVdkQ0xFTkJRV2hDTEVOQlJtbENPMEZCUjJwQ0xGTkJRVXNzVFVGQlRDeEhRVUZqTEV0QlFVc3NUVUZCVEN4RFFVRlpMRWxCUVZvc1EwRkJhVUlzU1VGQmFrSXNRMEZCWkN4RFFVaHBRanM3UVVGTGFrSXNVMEZCU3l4TFFVRk1MR2RDUVVOTExFdEJRVXNzVjBGQlRDeERRVUZwUWl4WlFVRnFRaXhGUVVOQkxFMUJSa3dzUTBGTWFVSTdSMEZCYmtJN08wRkJSRWtzYlVKQldVb3NlVUpCUVZFN2FVSkJRM0ZETEV0QlFVc3NTMEZCVEN4RFFVUnlRenRSUVVORkxIRkNRVVJHTzFGQlExTXNlVUpCUkZRN1VVRkRhMElzYlVKQlJHeENPMUZCUTNkQ0xESkNRVVI0UWpzN08wRkJSMDRzVTBGQlN5eFJRVUZNTEVkQlFXZENMRWxCUVdoQ0xFTkJTRTA3UVVGSlRpeHJRMEZCWXl4TFFVRkxMRTFCUVV3c1EwRkJaQ3hEUVVwTk96dEJRVTFPTEZGQlFVa3NTMEZCU3l4UFFVRk1MRVZCUVdNN1FVRkRhRUlzVjBGQlN5eFBRVUZNTEVkQlJHZENPMHRCUVd4Q096dEJRVWxCTEZGQlFVa3NUMEZCU2l4RlFVRmhPMEZCUTFnc1kwRkJVU3hKUVVGU0xFVkJSRmM3UzBGQllqczdRVUZKUVN4WFFVRlBMRWxCUVZBc1EwRmtUVHM3TzBGQldrb3NiVUpCTmtKS0xIVkNRVUZQTzFGQlEwY3NVMEZCVnl4TFFVRkxMRXRCUVV3c1EwRkJXQ3hQUVVSSU96czdRVUZIVEN4VFFVRkxMRkZCUVV3c1IwRkJaMElzUzBGQmFFSXNRMEZJU3p0QlFVbE1MSGREUVVGdlFpeExRVUZMTEUxQlFVd3NRMEZCY0VJc1EwRktTenM3UVVGTlRDeFJRVUZKTEV0QlFVc3NUVUZCVEN4RlFVRmhPMEZCUTJZc1YwRkJTeXhOUVVGTUxFZEJSR1U3UzBGQmFrSTdPMEZCU1VFc1VVRkJTU3hOUVVGS0xFVkJRVms3UVVGRFZpeGhRVUZQTEVsQlFWQXNSVUZFVlR0TFFVRmFPenRCUVVsQkxGZEJRVThzU1VGQlVDeERRV1JMT3pzN1FVRTNRa2dzYlVKQk9FTktMQ3RDUVVGWE8wRkJRMVFzVVVGQlNTeExRVUZMTEZWQlFVd3NSVUZCYVVJN1FVRkRia0lzVjBGQlN5eFZRVUZNTEVkQlJHMUNPMHRCUVhKQ096dEJRVWxCTEZGQlFVa3NTMEZCU3l4TFFVRk1MRU5CUVZjc1ZVRkJXQ3hGUVVGMVFqdEJRVU42UWl4WFFVRkxMRXRCUVV3c1EwRkJWeXhWUVVGWUxFTkJRWE5DTEVsQlFYUkNMRVZCUkhsQ08wdEJRVE5DT3p0QlFVbEJMRk5CUVVzc1NVRkJUQ3hIUVZSVE96dEJRVmRVTEZkQlFVOHNTVUZCVUN4RFFWaFRPenM3UVVFNVExQXNiVUpCTkVSS0xESkNRVUZUTzBGQlExQXNVVUZCVFN4VlFVRlZMRXRCUVVzc1QwRkJUQ3hEUVVSVU8wRkJSVkFzVVVGQlRTeFhRVUZYTEV0QlFVc3NVVUZCVEN4RFFVWldPenRCUVVsUUxGRkJRVWtzUzBGQlN5eFJRVUZNTEVWQlFXVTdRVUZEYWtJc1YwRkJTeXhSUVVGTUxFZEJSR2xDTzB0QlFXNUNPenRCUVVsQkxGTkJRVXNzVVVGQlRDeEhRVUZuUWl3d1FrRkJaU3hMUVVGTExFOUJRVXdzUjBGQlpTeFBRVUZtTEVWQlFYZENMRzlEUVVGMlF5eERRVUZvUWl4RFFWSlBPenRCUVZWUUxGRkJRVWtzUzBGQlN5eFhRVUZNTEVWQlFXdENPMEZCUTNCQ0xGZEJRVXNzVjBGQlRDeERRVUZwUWl4TFFVRkxMRTlCUVV3c1EwRkJha0lzUTBGRWIwSTdTMEZCZEVJN08wRkJTVUVzVVVGQlNTeExRVUZMTEV0QlFVd3NRMEZCVnl4UlFVRllMRVZCUVhGQ08wRkJRM1pDTEZkQlFVc3NTMEZCVEN4RFFVRlhMRkZCUVZnc1EwRkJiMElzU1VGQmNFSXNSVUZFZFVJN1MwRkJla0k3TzBGQlNVRXNVVUZCU1N4TFFVRkxMRkZCUVV3c1JVRkJaVHRCUVVOcVFpeHZRMEZCWXl4TFFVRkxMRTFCUVV3c1EwRkJaQ3hEUVVScFFqdExRVUZ1UWpzN1FVRkpRU3hYUVVGUExFbEJRVkFzUTBGMFFrODdPenRCUVRWRVRDeHRRa0Z4Umtvc2JVSkJRVWtzVlVGQlZUdEJRVU5hTEZOQlFVc3NUMEZCVEN4SFFVRmxMRkZCUVdZc1EwRkVXVHM3TzBGQmNrWldMRzFDUVhsR1NpeHhRa0ZCVFR0QlFVTktMRmRCUVU4c1MwRkJTeXhQUVVGTUxFTkJSRWc3T3p0QlFYcEdSaXh0UWtFMlJrb3NjVU5CUVdNN1FVRkRXaXhYUVVGUExFdEJRVXNzVVVGQlRDeERRVVJMT3pzN1FVRTNSbFlzYlVKQmFVZEtMSGxDUVVGUExGVkJRVlU3UVVGRFppeFhRVUZQTEVsQlFVa3NTMEZCU3l4WFFVRk1MR05CUTA0c1MwRkJTeXhMUVVGTU8wRkJRMGc3VFVGR1N5eERRVUZRTEVOQlJHVTdPenRUUVdwSFlqczdPMnRDUVhsSFV5SXNJbVpwYkdVaU9pSnBibVJsZUM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRDOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2V5QnZia1p5WVcxbFZYQmtZWFJsTENCallXNWpaV3hQYmtaeVlXMWxWWEJrWVhSbExDQjBhVzFsVTJsdVkyVk1ZWE4wUm5KaGJXVWdmU0JtY205dElDY3VMaTltY21GdFpYTjVibU1uTzF4dWFXMXdiM0owSUhzZ2MzQmxaV1JRWlhKVFpXTnZibVFnZlNCbWNtOXRJQ2N1TGk5cGJtTXZZMkZzWXljN1hHNWNibU5zWVhOeklFRmpkR2x2YmlCN1hHNGdJR052Ym5OMGNuVmpkRzl5S0hCeWIzQnpLU0I3WEc0Z0lDQWdkR2hwY3k1amRYSnlaVzUwSUQwZ01EdGNiaUFnSUNCMGFHbHpMblpsYkc5amFYUjVJRDBnTUR0Y2JpQWdJQ0IwYUdsekxuVndaR0YwWlNBOUlIUm9hWE11ZFhCa1lYUmxMbUpwYm1Rb2RHaHBjeWs3WEc1Y2JpQWdJQ0IwYUdsekxuQnliM0J6SUQwZ2UxeHVJQ0FnSUNBZ0xpNHVkR2hwY3k1amIyNXpkSEoxWTNSdmNpNWtaV1poZFd4MFVISnZjSE1zWEc0Z0lDQWdJQ0F1TGk1d2NtOXdjMXh1SUNBZ0lIMDdYRzRnSUgxY2JseHVJQ0J6ZEdGeWRDZ3BJSHRjYmlBZ0lDQmpiMjV6ZENCN0lIWmhiSFZsTENCdmJsTjBZWEowTENCbWNtOXRMQ0IyWld4dlkybDBlU0I5SUQwZ2RHaHBjeTV3Y205d2N6dGNibHh1SUNBZ0lIUm9hWE11YVhOQlkzUnBkbVVnUFNCMGNuVmxPMXh1SUNBZ0lHOXVSbkpoYldWVmNHUmhkR1VvZEdocGN5NTFjR1JoZEdVcE8xeHVYRzRnSUNBZ2FXWWdLSFJvYVhNdWIyNVRkR0Z5ZENrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTV2YmxOMFlYSjBLQ2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdhV1lnS0c5dVUzUmhjblFwSUh0Y2JpQWdJQ0FnSUc5dVUzUmhjblFvZEdocGN5azdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUgxY2JseHVJQ0J6ZEc5d0tDa2dlMXh1SUNBZ0lHTnZibk4wSUhzZ2IyNVRkRzl3SUgwZ1BTQjBhR2x6TG5CeWIzQnpPMXh1WEc0Z0lDQWdkR2hwY3k1cGMwRmpkR2wyWlNBOUlHWmhiSE5sTzF4dUlDQWdJR05oYm1ObGJFOXVSbkpoYldWVmNHUmhkR1VvZEdocGN5NTFjR1JoZEdVcE8xeHVYRzRnSUNBZ2FXWWdLSFJvYVhNdWIyNVRkRzl3S1NCN1hHNGdJQ0FnSUNCMGFHbHpMbTl1VTNSdmNDZ3BPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHbG1JQ2h2YmxOMGIzQXBJSHRjYmlBZ0lDQWdJRzl1VTNSdmNDaDBhR2x6S1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3p0Y2JpQWdmVnh1WEc0Z0lHTnZiWEJzWlhSbEtDa2dlMXh1SUNBZ0lHbG1JQ2gwYUdsekxtOXVRMjl0Y0d4bGRHVXBJSHRjYmlBZ0lDQWdJSFJvYVhNdWIyNURiMjF3YkdWMFpTZ3BPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHbG1JQ2gwYUdsekxuQnliM0J6TG05dVEyOXRjR3hsZEdVcElIdGNiaUFnSUNBZ0lIUm9hWE11Y0hKdmNITXViMjVEYjIxd2JHVjBaU2gwYUdsektUdGNiaUFnSUNCOVhHNWNiaUFnSUNCMGFHbHpMbk4wYjNBb0tUdGNibHh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNCOVhHNWNiaUFnZFhCa1lYUmxLQ2tnZTF4dUlDQWdJR052Ym5OMElHTjFjbkpsYm5RZ1BTQjBhR2x6TG1OMWNuSmxiblE3WEc0Z0lDQWdZMjl1YzNRZ2RtVnNiMk5wZEhrZ1BTQjBhR2x6TG5abGJHOWphWFI1TzF4dVhHNGdJQ0FnYVdZZ0tIUm9hWE11YjI1VmNHUmhkR1VwSUh0Y2JpQWdJQ0FnSUhSb2FYTXViMjVWY0dSaGRHVW9LVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQjBhR2x6TG5abGJHOWphWFI1SUQwZ2MzQmxaV1JRWlhKVFpXTnZibVFvZEdocGN5NWpkWEp5Wlc1MElDMGdZM1Z5Y21WdWRDd2dkR2x0WlZOcGJtTmxUR0Z6ZEVaeVlXMWxLQ2twTzF4dVhHNGdJQ0FnYVdZZ0tIUm9hWE11ZFhCa1lYUmxWbUZzZFdVcElIdGNiaUFnSUNBZ0lIUm9hWE11ZFhCa1lYUmxWbUZzZFdVb2RHaHBjeTVqZFhKeVpXNTBLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnBaaUFvZEdocGN5NXdjbTl3Y3k1dmJsVndaR0YwWlNrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTV3Y205d2N5NXZibFZ3WkdGMFpTaDBhR2x6S1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JwWmlBb2RHaHBjeTVwYzBGamRHbDJaU2tnZTF4dUlDQWdJQ0FnYjI1R2NtRnRaVlZ3WkdGMFpTaDBhR2x6TG5Wd1pHRjBaU2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lIMWNibHh1SUNCelpYUW9ibVYzVm1Gc2RXVXBJSHRjYmlBZ0lDQjBhR2x6TG1OMWNuSmxiblFnUFNCdVpYZFdZV3gxWlR0Y2JpQWdmVnh1WEc0Z0lHZGxkQ2dwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3k1amRYSnlaVzUwTzF4dUlDQjlYRzVjYmlBZ1oyVjBWbVZzYjJOcGRIa29LU0I3WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE11ZG1Wc2IyTnBkSGs3WEc0Z0lIMWNibHh1SUNCdmRYUndkWFFvYjI1VmNHUmhkR1VwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdibVYzSUhSb2FYTXVZMjl1YzNSeWRXTjBiM0lvZTF4dUlDQWdJQ0FnTGk0dWRHaHBjeTV3Y205d2N5eGNiaUFnSUNBZ0lHOXVWWEJrWVhSbFhHNGdJQ0FnZlNrN1hHNGdJSDFjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1FXTjBhVzl1TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgREVGQVVMVF9PVkVSU0hPT1RfU1RSRU5HVEggPSAxLjUyNTtcblxudmFyIGNyZWF0ZVJldmVyc2VkRWFzaW5nID0gZXhwb3J0cy5jcmVhdGVSZXZlcnNlZEVhc2luZyA9IGZ1bmN0aW9uIChlYXNpbmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIDEgLSBlYXNpbmcoMSAtIHApO1xuICB9O1xufTtcbnZhciBjcmVhdGVNaXJyb3JlZEVhc2luZyA9IGV4cG9ydHMuY3JlYXRlTWlycm9yZWRFYXNpbmcgPSBmdW5jdGlvbiAoZWFzaW5nKSB7XG4gIHJldHVybiBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiBwIDw9IDAuNSA/IGVhc2luZygyICogcCkgLyAyIDogKDIgLSBlYXNpbmcoMiAqICgxIC0gcCkpKSAvIDI7XG4gIH07XG59OztcblxudmFyIGxpbmVhciA9IGV4cG9ydHMubGluZWFyID0gZnVuY3Rpb24gKHApIHtcbiAgcmV0dXJuIHA7XG59O1xuXG52YXIgY3JlYXRlRWFzZUluID0gZXhwb3J0cy5jcmVhdGVFYXNlSW4gPSBmdW5jdGlvbiAocG93ZXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIE1hdGgucG93KHAsIHBvd2VyKTtcbiAgfTtcbn07XG52YXIgZWFzZUluID0gZXhwb3J0cy5lYXNlSW4gPSBjcmVhdGVFYXNlSW4oMik7XG52YXIgZWFzZU91dCA9IGV4cG9ydHMuZWFzZU91dCA9IGNyZWF0ZVJldmVyc2VkRWFzaW5nKGVhc2VJbik7XG52YXIgZWFzZUluT3V0ID0gZXhwb3J0cy5lYXNlSW5PdXQgPSBjcmVhdGVNaXJyb3JlZEVhc2luZyhlYXNlSW4pO1xuXG52YXIgY2lyY0luID0gZXhwb3J0cy5jaXJjSW4gPSBmdW5jdGlvbiAocCkge1xuICByZXR1cm4gMSAtIE1hdGguc2luKE1hdGguYWNvcyhwKSk7XG59O1xudmFyIGNpcmNPdXQgPSBleHBvcnRzLmNpcmNPdXQgPSBjcmVhdGVSZXZlcnNlZEVhc2luZyhjaXJjSW4pO1xudmFyIGNpcmNJbk91dCA9IGV4cG9ydHMuY2lyY0luT3V0ID0gY3JlYXRlTWlycm9yZWRFYXNpbmcoY2lyY091dCk7XG5cbnZhciBjcmVhdGVCYWNrSW4gPSBleHBvcnRzLmNyZWF0ZUJhY2tJbiA9IGZ1bmN0aW9uIChwb3dlcikge1xuICByZXR1cm4gZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gcCAqIHAgKiAoKHBvd2VyICsgMSkgKiBwIC0gcG93ZXIpO1xuICB9O1xufTtcbnZhciBiYWNrSW4gPSBleHBvcnRzLmJhY2tJbiA9IGNyZWF0ZUJhY2tJbihERUZBVUxUX09WRVJTSE9PVF9TVFJFTkdUSCk7XG52YXIgYmFja091dCA9IGV4cG9ydHMuYmFja091dCA9IGNyZWF0ZVJldmVyc2VkRWFzaW5nKGJhY2tJbik7XG52YXIgYmFja0luT3V0ID0gZXhwb3J0cy5iYWNrSW5PdXQgPSBjcmVhdGVNaXJyb3JlZEVhc2luZyhiYWNrSW4pO1xuXG52YXIgY3JlYXRlQW50aWNpcGF0ZUVhc2luZyA9IGV4cG9ydHMuY3JlYXRlQW50aWNpcGF0ZUVhc2luZyA9IGZ1bmN0aW9uIChwb3dlcikge1xuICB2YXIgYmFja0Vhc2luZyA9IGNyZWF0ZUJhY2tJbihwb3dlcik7XG4gIHJldHVybiBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiAocCAqPSAyKSA8IDEgPyAwLjUgKiBiYWNrRWFzaW5nKHApIDogMC41ICogKDIgLSBNYXRoLnBvdygyLCAtMTAgKiAocCAtIDEpKSk7XG4gIH07XG59O1xudmFyIGFudGljaXBhdGUgPSBleHBvcnRzLmFudGljaXBhdGUgPSBjcmVhdGVBbnRpY2lwYXRlRWFzaW5nKERFRkFVTFRfT1ZFUlNIT09UX1NUUkVOR1RIKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5bFlYTnBibWN2YVc1a1pYZ3Vhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3TzBGQlFVRXNTVUZCVFN3MlFrRkJOa0lzUzBGQk4wSTdPMEZCUlVNc1NVRkJUU3h6UkVGQmRVSXNWVUZCUXl4TlFVRkVPMU5CUVZrc1ZVRkJReXhEUVVGRU8xZEJRVThzU1VGQlNTeFBRVUZQTEVsQlFVa3NRMEZCU2l4RFFVRllPMGRCUVZBN1EwRkJXanRCUVVNM1FpeEpRVUZOTEhORVFVRjFRaXhWUVVGRExFMUJRVVE3VTBGQldTeFZRVUZETEVOQlFVUTdWMEZCVHl4RFFVRkRMRWxCUVVzc1IwRkJUQ3hIUVVGWkxFOUJRVThzU1VGQlNTeERRVUZLTEVOQlFWQXNSMEZCWjBJc1EwRkJhRUlzUjBGQmIwSXNRMEZCUXl4SlFVRkpMRTlCUVU4c1MwRkJTeXhKUVVGSkxFTkJRVW9zUTBGQlRDeERRVUZZTEVOQlFVUXNSMEZCTkVJc1EwRkJOVUk3UjBGQmVFTTdRMEZCV2l4RFFVRnJSanM3UVVGRkwwY3NTVUZCVFN3d1FrRkJVeXhWUVVGRExFTkJRVVE3VTBGQlR6dERRVUZRT3p0QlFVVm1MRWxCUVUwc2MwTkJRV1VzVlVGQlF5eExRVUZFTzFOQlFWY3NWVUZCUXl4RFFVRkVPMjlDUVVGUExFZEJRVXM3UjBGQldqdERRVUZZTzBGQlEzSkNMRWxCUVUwc01FSkJRVk1zWVVGQllTeERRVUZpTEVOQlFWUTdRVUZEVGl4SlFVRk5MRFJDUVVGVkxIRkNRVUZ4UWl4TlFVRnlRaXhEUVVGV08wRkJRMDRzU1VGQlRTeG5RMEZCV1N4eFFrRkJjVUlzVFVGQmNrSXNRMEZCV2pzN1FVRkZUaXhKUVVGTkxEQkNRVUZUTEZWQlFVTXNRMEZCUkR0VFFVRlBMRWxCUVVrc1MwRkJTeXhIUVVGTUxFTkJRVk1zUzBGQlN5eEpRVUZNTEVOQlFWVXNRMEZCVml4RFFVRlVMRU5CUVVvN1EwRkJVRHRCUVVObUxFbEJRVTBzTkVKQlFWVXNjVUpCUVhGQ0xFMUJRWEpDTEVOQlFWWTdRVUZEVGl4SlFVRk5MR2REUVVGWkxIRkNRVUZ4UWl4UFFVRnlRaXhEUVVGYU96dEJRVVZPTEVsQlFVMHNjME5CUVdVc1ZVRkJReXhMUVVGRU8xTkJRVmNzVlVGQlF5eERRVUZFTzFkQlFVOHNRMEZCUXl4SFFVRkpMRU5CUVVvc1NVRkJWU3hEUVVGRExGRkJRVkVzUTBGQlVpeERRVUZFTEVkQlFXTXNRMEZCWkN4SFFVRnJRaXhMUVVGc1FpeERRVUZZTzBkQlFWQTdRMEZCV0R0QlFVTnlRaXhKUVVGTkxEQkNRVUZUTEdGQlFXRXNNRUpCUVdJc1EwRkJWRHRCUVVOT0xFbEJRVTBzTkVKQlFWVXNjVUpCUVhGQ0xFMUJRWEpDTEVOQlFWWTdRVUZEVGl4SlFVRk5MR2REUVVGWkxIRkNRVUZ4UWl4TlFVRnlRaXhEUVVGYU96dEJRVVZPTEVsQlFVMHNNRVJCUVhsQ0xGVkJRVU1zUzBGQlJDeEZRVUZYTzBGQlF5OURMRTFCUVUwc1lVRkJZU3hoUVVGaExFdEJRV0lzUTBGQllpeERRVVI1UXp0QlFVVXZReXhUUVVGUExGVkJRVU1zUTBGQlJEdFhRVUZQTEVOQlFVVXNTMEZCU3l4RFFVRk1MRU5CUVVRc1IwRkJWeXhEUVVGWUxFZEJRV2RDTEUxQlFVMHNWMEZCVnl4RFFVRllMRU5CUVU0c1IwRkJjMElzVDBGQlR5eEpRVUZKTEV0QlFVc3NSMEZCVEN4RFFVRlRMRU5CUVZRc1JVRkJXU3hEUVVGRExFVkJRVVFzU1VGQlR5eEpRVUZKTEVOQlFVb3NRMEZCVUN4RFFVRm9RaXhEUVVGUU8wZEJRVGxETEVOQlJuZERPME5CUVZnN1FVRkpMMElzU1VGQlRTeHJRMEZCWVN4MVFrRkJkVUlzTUVKQlFYWkNMRU5CUVdJaUxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaVkyOXVjM1FnUkVWR1FWVk1WRjlQVmtWU1UwaFBUMVJmVTFSU1JVNUhWRWdnUFNBeExqVXlOVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJR055WldGMFpWSmxkbVZ5YzJWa1JXRnphVzVuSUQwZ0tHVmhjMmx1WnlrZ1BUNGdLSEFwSUQwK0lERWdMU0JsWVhOcGJtY29NU0F0SUhBcE8xeHVaWGh3YjNKMElHTnZibk4wSUdOeVpXRjBaVTFwY25KdmNtVmtSV0Z6YVc1bklEMGdLR1ZoYzJsdVp5a2dQVDRnS0hBcElEMCtJQ2h3SUR3OUlEQXVOU2tnUHlCbFlYTnBibWNvTWlBcUlIQXBJQzhnTWlBNklDZ3lJQzBnWldGemFXNW5LRElnS2lBb01TQXRJSEFwS1NrZ0x5QXlPenRjYmx4dVpYaHdiM0owSUdOdmJuTjBJR3hwYm1WaGNpQTlJQ2h3S1NBOVBpQndPMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdZM0psWVhSbFJXRnpaVWx1SUQwZ0tIQnZkMlZ5S1NBOVBpQW9jQ2tnUFQ0Z2NDQXFLaUJ3YjNkbGNqdGNibVY0Y0c5eWRDQmpiMjV6ZENCbFlYTmxTVzRnUFNCamNtVmhkR1ZGWVhObFNXNG9NaWs3WEc1bGVIQnZjblFnWTI5dWMzUWdaV0Z6WlU5MWRDQTlJR055WldGMFpWSmxkbVZ5YzJWa1JXRnphVzVuS0dWaGMyVkpiaWs3WEc1bGVIQnZjblFnWTI5dWMzUWdaV0Z6WlVsdVQzVjBJRDBnWTNKbFlYUmxUV2x5Y205eVpXUkZZWE5wYm1jb1pXRnpaVWx1S1R0Y2JseHVaWGh3YjNKMElHTnZibk4wSUdOcGNtTkpiaUE5SUNod0tTQTlQaUF4SUMwZ1RXRjBhQzV6YVc0b1RXRjBhQzVoWTI5ektIQXBLVHRjYm1WNGNHOXlkQ0JqYjI1emRDQmphWEpqVDNWMElEMGdZM0psWVhSbFVtVjJaWEp6WldSRllYTnBibWNvWTJseVkwbHVLVHRjYm1WNGNHOXlkQ0JqYjI1emRDQmphWEpqU1c1UGRYUWdQU0JqY21WaGRHVk5hWEp5YjNKbFpFVmhjMmx1WnloamFYSmpUM1YwS1R0Y2JseHVaWGh3YjNKMElHTnZibk4wSUdOeVpXRjBaVUpoWTJ0SmJpQTlJQ2h3YjNkbGNpa2dQVDRnS0hBcElEMCtJQ2h3SUNvZ2NDa2dLaUFvS0hCdmQyVnlJQ3NnTVNrZ0tpQndJQzBnY0c5M1pYSXBPMXh1Wlhod2IzSjBJR052Ym5OMElHSmhZMnRKYmlBOUlHTnlaV0YwWlVKaFkydEpiaWhFUlVaQlZVeFVYMDlXUlZKVFNFOVBWRjlUVkZKRlRrZFVTQ2s3WEc1bGVIQnZjblFnWTI5dWMzUWdZbUZqYTA5MWRDQTlJR055WldGMFpWSmxkbVZ5YzJWa1JXRnphVzVuS0dKaFkydEpiaWs3WEc1bGVIQnZjblFnWTI5dWMzUWdZbUZqYTBsdVQzVjBJRDBnWTNKbFlYUmxUV2x5Y205eVpXUkZZWE5wYm1jb1ltRmphMGx1S1R0Y2JseHVaWGh3YjNKMElHTnZibk4wSUdOeVpXRjBaVUZ1ZEdsamFYQmhkR1ZGWVhOcGJtY2dQU0FvY0c5M1pYSXBJRDArSUh0Y2JpQWdZMjl1YzNRZ1ltRmphMFZoYzJsdVp5QTlJR055WldGMFpVSmhZMnRKYmlod2IzZGxjaWs3WEc0Z0lISmxkSFZ5YmlBb2NDa2dQVDRnS0Nod0lDbzlJRElwSUR3Z01Ta2dQeUF3TGpVZ0tpQmlZV05yUldGemFXNW5LSEFwSURvZ01DNDFJQ29nS0RJZ0xTQk5ZWFJvTG5CdmR5Z3lMQ0F0TVRBZ0tpQW9jQ0F0SURFcEtTazdYRzU5WEc1bGVIQnZjblFnWTI5dWMzUWdZVzUwYVdOcGNHRjBaU0E5SUdOeVpXRjBaVUZ1ZEdsamFYQmhkR1ZGWVhOcGJtY29SRVZHUVZWTVZGOVBWa1ZTVTBoUFQxUmZVMVJTUlU1SFZFZ3BPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvZWFzaW5nL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuc3RlcFByb2dyZXNzID0gZXhwb3J0cy5zcGVlZFBlclNlY29uZCA9IGV4cG9ydHMuc3BlZWRQZXJGcmFtZSA9IGV4cG9ydHMuc21vb3RoID0gZXhwb3J0cy5yZXN0cmljdCA9IGV4cG9ydHMucmVsYXRpdmVWYWx1ZSA9IGV4cG9ydHMucmFuZG9tID0gZXhwb3J0cy5yYWRpYW5zVG9EZWdyZWVzID0gZXhwb3J0cy5wb2ludEZyb21BbmdsZUFuZERpc3RhbmNlID0gZXhwb3J0cy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSA9IGV4cG9ydHMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MgPSBleHBvcnRzLmRpc3RhbmNlID0gZXhwb3J0cy5kaWxhdGUgPSBleHBvcnRzLmRlZ3JlZXNUb1JhZGlhbnMgPSBleHBvcnRzLmFuZ2xlID0gdW5kZWZpbmVkO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgWkVST19QT0lOVCA9IHtcbiAgeDogMCxcbiAgeTogMCxcbiAgejogMFxufTtcblxudmFyIGRpc3RhbmNlMUQgPSBmdW5jdGlvbiAoYSwgYikge1xuICByZXR1cm4gTWF0aC5hYnMoYSAtIGIpO1xufTtcblxuLypcbiAgQW5nbGUgYmV0d2VlbiBwb2ludHNcbiAgXG4gIFRyYW5zbGF0ZXMgdGhlIGh5cG90aGV0aWNhbCBsaW5lIHNvIHRoYXQgdGhlICdmcm9tJyBjb29yZGluYXRlc1xuICBhcmUgYXQgMCwwXG4gIFxuICBAcGFyYW0gW29iamVjdF06IFggYW5kIFkgY29vcmRpbmF0ZXMgb2YgZnJvbSBwb2ludFxuICBAcGFyYW0gW29iamVjdF06IFggYW5kIFkgY29yZGluYXRlcyBvZiB0byBwb2ludFxuICBAcmV0dXJuIFtyYWRpYW5dOiBBbmdsZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzIGluIHJhZGlhbnNcbiovXG52YXIgYW5nbGUgPSBleHBvcnRzLmFuZ2xlID0gZnVuY3Rpb24gKGEpIHtcbiAgdmFyIGIgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBaRVJPX1BPSU5UIDogYXJndW1lbnRzWzFdO1xuICByZXR1cm4gcmFkaWFuc1RvRGVncmVlcyhNYXRoLmF0YW4yKGEueCAtIGIueCwgYS55IC0gYi55KSk7XG59O1xuXG4vKlxuICBDb252ZXJ0IGRlZ3JlZXMgdG8gcmFkaWFuc1xuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBpbiBkZWdyZWVzXG4gIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGluIHJhZGlhbnNcbiovXG52YXIgZGVncmVlc1RvUmFkaWFucyA9IGV4cG9ydHMuZGVncmVlc1RvUmFkaWFucyA9IGZ1bmN0aW9uIChkZWdyZWVzKSB7XG4gIHJldHVybiBkZWdyZWVzICogTWF0aC5QSSAvIDE4MDtcbn07XG5cbi8qXG4gIERpbGF0ZVxuICBcbiAgQ2hhbmdlIHRoZSBwcm9ncmVzc2lvbiBiZXR3ZWVuIGEgYW5kIGIgYWNjb3JkaW5nIHRvIGRpbGF0aW9uLlxuICBcbiAgU28gZGlsYXRpb24gPSAwLjUgd291bGQgY2hhbmdlXG4gIFxuICBhIC0tLS0tLS0tLSBiXG4gIFxuICB0b1xuICBcbiAgYSAtLS0tIGJcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogUHJldmlvdXMgdmFsdWVcbiAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gIEBwYXJhbSBbbnVtYmVyXTogRGlsYXRlIHByb2dyZXNzIGJ5IHhcbiAgQHJldHVybiBbbnVtYmVyXTogUHJldmlvdXMgdmFsdWUgcGx1cyB0aGUgZGlsYXRlZCBkaWZmZXJlbmNlXG4qL1xudmFyIGRpbGF0ZSA9IGV4cG9ydHMuZGlsYXRlID0gZnVuY3Rpb24gKGEsIGIsIGRpbGF0aW9uKSB7XG4gIHJldHVybiBhICsgKGIgLSBhKSAqIGRpbGF0aW9uO1xufTtcblxuLypcbiAgRGlzdGFuY2VcbiAgXG4gIFJldHVybnMgdGhlIGRpc3RhbmNlIGJldHdlZW4gdHdvIG4gZGltZW5zaW9uYWwgcG9pbnRzLlxuICBcbiAgQHBhcmFtIFtvYmplY3QvbnVtYmVyXTogeCBhbmQgeSBvciBqdXN0IHggb2YgcG9pbnQgQVxuICBAcGFyYW0gW29iamVjdC9udW1iZXJdOiAob3B0aW9uYWwpOiB4IGFuZCB5IG9yIGp1c3QgeCBvZiBwb2ludCBCXG4gIEByZXR1cm4gW251bWJlcl06IFRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzXG4qL1xudmFyIGRpc3RhbmNlID0gZXhwb3J0cy5kaXN0YW5jZSA9IGZ1bmN0aW9uIChhKSB7XG4gIHZhciBiID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gWkVST19QT0lOVCA6IGFyZ3VtZW50c1sxXTtcblxuICAvLyAxRCBkaW1lbnNpb25zXG4gIGlmICgoMCwgX3V0aWxzLmlzTnVtKShhKSkge1xuICAgIHJldHVybiBkaXN0YW5jZTFEKGEsIGIpO1xuXG4gICAgLy8gTXVsdGktZGltZW5zaW9uYWxcbiAgfSBlbHNlIHtcbiAgICAgIHZhciB4RGVsdGEgPSBkaXN0YW5jZTFEKGEueCwgYi54KTtcbiAgICAgIHZhciB5RGVsdGEgPSBkaXN0YW5jZTFEKGEueSwgYi55KTtcbiAgICAgIHZhciB6RGVsdGEgPSAoMCwgX3V0aWxzLmlzTnVtKShhLnopID8gZGlzdGFuY2UxRChhLnosIGIueikgOiAwO1xuXG4gICAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHhEZWx0YSwgMikgKyBNYXRoLnBvdyh5RGVsdGEsIDIpICsgTWF0aC5wb3coekRlbHRhLCAyKSk7XG4gICAgfVxufTtcblxuLypcbiAgVmFsdWUgaW4gcmFuZ2UgZnJvbSBwcm9ncmVzc1xuICBcbiAgR2l2ZW4gYSBsb3dlciBsaW1pdCBhbmQgYW4gdXBwZXIgbGltaXQsIHdlIHJldHVybiB0aGUgdmFsdWUgd2l0aGluXG4gIHRoYXQgcmFuZ2UgYXMgZXhwcmVzc2VkIGJ5IHByb2dyZXNzIChhIG51bWJlciBmcm9tIDAtMSlcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogVGhlIHByb2dyZXNzIGJldHdlZW4gbG93ZXIgYW5kIHVwcGVyIGxpbWl0cyBleHByZXNzZWQgMC0xXG4gIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgb2YgcmFuZ2VcbiAgQHBhcmFtIFtudW1iZXJdOiBVcHBlciBsaW1pdCBvZiByYW5nZVxuICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBhcyBjYWxjdWxhdGVkIGZyb20gcHJvZ3Jlc3Mgd2l0aGluIHJhbmdlIChub3QgbGltaXRlZCB3aXRoaW4gcmFuZ2UpXG4qL1xudmFyIGdldFZhbHVlRnJvbVByb2dyZXNzID0gZXhwb3J0cy5nZXRWYWx1ZUZyb21Qcm9ncmVzcyA9IGZ1bmN0aW9uIChwcm9ncmVzcywgZnJvbSwgdG8pIHtcbiAgcmV0dXJuIC1wcm9ncmVzcyAqIGZyb20gKyBwcm9ncmVzcyAqIHRvICsgZnJvbTtcbn07XG5cbi8qXG4gIFByb2dyZXNzIHdpdGhpbiBnaXZlbiByYW5nZVxuICBcbiAgR2l2ZW4gYSBsb3dlciBsaW1pdCBhbmQgYW4gdXBwZXIgbGltaXQsIHdlIHJldHVybiB0aGUgcHJvZ3Jlc3NcbiAgKGV4cHJlc3NlZCBhcyBhIG51bWJlciAwLTEpIHJlcHJlc2VudGVkIGJ5IHRoZSBnaXZlbiB2YWx1ZSwgYW5kXG4gIGxpbWl0IHRoYXQgcHJvZ3Jlc3MgdG8gd2l0aGluIDAtMS5cbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgdG8gZmluZCBwcm9ncmVzcyB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBcbiAgQHBhcmFtIFtudW1iZXJdOiBVcHBlciBsaW1pdFxuICBAcmV0dXJuIFtudW1iZXJdOiBQcm9ncmVzcyBvZiB2YWx1ZSB3aXRoaW4gcmFuZ2UgYXMgZXhwcmVzc2VkIDAtMVxuKi9cbnZhciBnZXRQcm9ncmVzc0Zyb21WYWx1ZSA9IGV4cG9ydHMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUsIGZyb20sIHRvKSB7XG4gIHJldHVybiAodmFsdWUgLSBmcm9tKSAvICh0byAtIGZyb20pO1xufTtcblxuLypcbiAgUG9pbnQgZnJvbSBhbmdsZSBhbmQgZGlzdGFuY2VcbiAgXG4gIEBwYXJhbSBbb2JqZWN0XTogMkQgcG9pbnQgb2Ygb3JpZ2luXG4gIEBwYXJhbSBbbnVtYmVyXTogQW5nbGUgZnJvbSBvcmlnaW5cbiAgQHBhcmFtIFtudW1iZXJdOiBEaXN0YW5jZSBmcm9tIG9yaWdpblxuICBAcmV0dXJuIFtvYmplY3RdOiBDYWxjdWxhdGVkIDJEIHBvaW50XG4qL1xudmFyIHBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UgPSBleHBvcnRzLnBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UgPSBmdW5jdGlvbiAob3JpZ2luLCBhbmdsZSwgZGlzdGFuY2UpIHtcbiAgYW5nbGUgPSBkZWdyZWVzVG9SYWRpYW5zKGFuZ2xlKTtcblxuICByZXR1cm4ge1xuICAgIHg6IGRpc3RhbmNlICogTWF0aC5jb3MoYW5nbGUpICsgb3JpZ2luLngsXG4gICAgeTogZGlzdGFuY2UgKiBNYXRoLnNpbihhbmdsZSkgKyBvcmlnaW4ueVxuICB9O1xufTtcblxuLypcbiAgQ29udmVydCByYWRpYW5zIHRvIGRlZ3JlZXNcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgaW4gcmFkaWFuc1xuICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBpbiBkZWdyZWVzXG4qL1xudmFyIHJhZGlhbnNUb0RlZ3JlZXMgPSBleHBvcnRzLnJhZGlhbnNUb0RlZ3JlZXMgPSBmdW5jdGlvbiAocmFkaWFucykge1xuICByZXR1cm4gcmFkaWFucyAqIDE4MCAvIE1hdGguUEk7XG59O1xuXG4vKlxuICBSZXR1cm4gcmFuZG9tIG51bWJlciBiZXR3ZWVuIHJhbmdlXG4gIFxuICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogT3V0cHV0IG1pbmltdW1cbiAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IE91dHB1dCBtYXhpbXVtXG4gIEByZXR1cm4gW251bWJlcl06IFJhbmRvbSBudW1iZXIgd2l0aGluIHJhbmdlLCBvciAwIGFuZCAxIGlmIG5vbmUgcHJvdmlkZWRcbiovXG52YXIgcmFuZG9tID0gZXhwb3J0cy5yYW5kb20gPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBtaW4gPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyAwIDogYXJndW1lbnRzWzBdO1xuICB2YXIgbWF4ID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gMSA6IGFyZ3VtZW50c1sxXTtcbiAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcbn07XG5cbi8qXG4gIENhbGN1bGF0ZSByZWxhdGl2ZSB2YWx1ZVxuICBcbiAgVGFrZXMgdGhlIG9wZXJhdG9yIGFuZCB2YWx1ZSBmcm9tIGEgc3RyaW5nLCBpZSBcIis9NVwiLCBhbmQgYXBwbGllc1xuICB0byB0aGUgY3VycmVudCB2YWx1ZSB0byByZXNvbHZlIGEgbmV3IHRhcmdldC5cbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICBAcGFyYW0gW3N0cmluZ106IFJlbGF0aXZlIHZhbHVlXG4gIEByZXR1cm4gW251bWJlcl06IE5ldyB2YWx1ZVxuKi9cbnZhciByZWxhdGl2ZVZhbHVlID0gZXhwb3J0cy5yZWxhdGl2ZVZhbHVlID0gZnVuY3Rpb24gKGN1cnJlbnQsIHJlbGF0aXZlKSB7XG4gIHZhciBuZXdWYWx1ZSA9IGN1cnJlbnQ7XG4gIHZhciBlcXVhdGlvbiA9IHJlbGF0aXZlLnNwbGl0KCc9Jyk7XG4gIHZhciBvcGVyYXRvciA9IGVxdWF0aW9uWzBdO1xuXG4gIHZhciBfZmluZFZhbHVlQW5kVW5pdCA9ICgwLCBfdXRpbHMuZmluZFZhbHVlQW5kVW5pdCkoZXF1YXRpb25bMV0pO1xuXG4gIHZhciB1bml0ID0gX2ZpbmRWYWx1ZUFuZFVuaXQudW5pdDtcbiAgdmFyIHZhbHVlID0gX2ZpbmRWYWx1ZUFuZFVuaXQudmFsdWU7XG5cblxuICB2YWx1ZSA9IHBhcnNlRmxvYXQodmFsdWUpO1xuXG4gIHN3aXRjaCAob3BlcmF0b3IpIHtcbiAgICBjYXNlICcrJzpcbiAgICAgIG5ld1ZhbHVlICs9IHZhbHVlO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnLSc6XG4gICAgICBuZXdWYWx1ZSAtPSB2YWx1ZTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJyonOlxuICAgICAgbmV3VmFsdWUgKj0gdmFsdWU7XG4gICAgICBicmVhaztcbiAgICBjYXNlICcvJzpcbiAgICAgIG5ld1ZhbHVlIC89IHZhbHVlO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICBpZiAodW5pdCkge1xuICAgIG5ld1ZhbHVlICs9IHVuaXQ7XG4gIH1cblxuICByZXR1cm4gbmV3VmFsdWU7XG59O1xuXG4vKlxuICBSZXN0cmljdCB2YWx1ZSB0byByYW5nZVxuICBcbiAgUmV0dXJuIHZhbHVlIHdpdGhpbiB0aGUgcmFuZ2Ugb2YgbG93ZXJMaW1pdCBhbmQgdXBwZXJMaW1pdFxuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSB0byBrZWVwIHdpdGhpbiByYW5nZVxuICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IG9mIHJhbmdlXG4gIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXQgb2YgcmFuZ2VcbiAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgYXMgbGltaXRlZCB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiovXG52YXIgcmVzdHJpY3QgPSBleHBvcnRzLnJlc3RyaWN0ID0gZnVuY3Rpb24gKHZhbHVlLCBtaW4sIG1heCkge1xuICByZXR1cm4gTWF0aC5tYXgoTWF0aC5taW4odmFsdWUsIG1heCksIG1pbik7XG59O1xuXG4vKlxuICBGcmFtZXJhdGUtaW5kZXBlbmRlbnQgc21vb3RoaW5nXG5cbiAgQHBhcmFtIFtudW1iZXJdOiBOZXcgdmFsdWVcbiAgQHBhcmFtIFtudW1iZXJdOiBPbGQgdmFsdWVcbiAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvblxuICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogU21vb3RoaW5nICgwIGlzIG5vbmUpXG4qL1xudmFyIHNtb290aCA9IGV4cG9ydHMuc21vb3RoID0gZnVuY3Rpb24gKG5ld1ZhbHVlLCBvbGRWYWx1ZSwgZHVyYXRpb24pIHtcbiAgdmFyIHNtb290aGluZyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMyB8fCBhcmd1bWVudHNbM10gPT09IHVuZGVmaW5lZCA/IDAgOiBhcmd1bWVudHNbM107XG4gIHJldHVybiAoMCwgX3V0aWxzLnRvRGVjaW1hbCkob2xkVmFsdWUgKyBkdXJhdGlvbiAqIChuZXdWYWx1ZSAtIG9sZFZhbHVlKSAvIE1hdGgubWF4KHNtb290aGluZywgZHVyYXRpb24pKTtcbn07XG5cbi8qXG4gIENvbnZlcnQgeCBwZXIgc2Vjb25kIHRvIHBlciBmcmFtZSB2ZWxvY2l0eSBiYXNlZCBvbiBmcHNcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogVW5pdCBwZXIgc2Vjb25kXG4gIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb24gaW4gbXNcbiovXG52YXIgc3BlZWRQZXJGcmFtZSA9IGV4cG9ydHMuc3BlZWRQZXJGcmFtZSA9IGZ1bmN0aW9uICh4cHMsIGZyYW1lRHVyYXRpb24pIHtcbiAgcmV0dXJuICgwLCBfdXRpbHMuaXNOdW0pKHhwcykgPyB4cHMgLyAoMTAwMCAvIGZyYW1lRHVyYXRpb24pIDogMDtcbn07XG5cbi8qXG4gIENvbnZlcnQgdmVsb2NpdHkgaW50byB2ZWxpY2l0eSBwZXIgc2Vjb25kXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFVuaXQgcGVyIGZyYW1lXG4gIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb24gaW4gbXNcbiovXG52YXIgc3BlZWRQZXJTZWNvbmQgPSBleHBvcnRzLnNwZWVkUGVyU2Vjb25kID0gZnVuY3Rpb24gKHZlbG9jaXR5LCBmcmFtZUR1cmF0aW9uKSB7XG4gIHJldHVybiB2ZWxvY2l0eSAqICgxMDAwIC8gZnJhbWVEdXJhdGlvbik7XG59O1xuXG4vKlxuICBDcmVhdGUgc3RlcHBlZCB2ZXJzaW9uIG9mIDAtMSBwcm9ncmVzc1xuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gIEBwYXJhbSBbaW50XTogTnVtYmVyIG9mIHN0ZXBzXG4gIEByZXR1cm4gW251bWJlcl06IFN0ZXBwZWQgdmFsdWVcbiovXG52YXIgc3RlcFByb2dyZXNzID0gZXhwb3J0cy5zdGVwUHJvZ3Jlc3MgPSBmdW5jdGlvbiAocHJvZ3Jlc3MsIHN0ZXBzKSB7XG4gIHZhciBzZWdtZW50ID0gMSAvIChzdGVwcyAtIDEpO1xuICB2YXIgdGFyZ2V0ID0gMSAtIDEgLyBzdGVwcztcbiAgdmFyIHByb2dyZXNzT2ZUYXJnZXQgPSBNYXRoLm1pbihwcm9ncmVzcyAvIHRhcmdldCwgMSk7XG5cbiAgcmV0dXJuIE1hdGguZmxvb3IocHJvZ3Jlc3NPZlRhcmdldCAvIHNlZ21lbnQpICogc2VnbWVudDtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12WTJGc1l5NXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3p0QlFVRkJPenRCUVU5QkxFbEJRVTBzWVVGQllUdEJRVU5xUWl4TFFVRkhMRU5CUVVnN1FVRkRRU3hMUVVGSExFTkJRVWc3UVVGRFFTeExRVUZITEVOQlFVZzdRMEZJU1RzN1FVRk5UaXhKUVVGTkxHRkJRV0VzVlVGQlF5eERRVUZFTEVWQlFVa3NRMEZCU2p0VFFVRlZMRXRCUVVzc1IwRkJUQ3hEUVVGVExFbEJRVWtzUTBGQlNqdERRVUZ1UWpzN096czdPenM3T3pzN08wRkJXVm9zU1VGQlRTeDNRa0ZCVVN4VlFVRkRMRU5CUVVRN1RVRkJTU3d3UkVGQlNUdFRRVUZsTEdsQ1FVRnBRaXhMUVVGTExFdEJRVXdzUTBGQlZ5eEZRVUZGTEVOQlFVWXNSMEZCVFN4RlFVRkZMRU5CUVVZc1JVRkJTeXhGUVVGRkxFTkJRVVlzUjBGQlRTeEZRVUZGTEVOQlFVWXNRMEZCTjBNN1EwRkJka0k3T3pzN096czdPMEZCVVdRc1NVRkJUU3c0UTBGQmJVSXNWVUZCUXl4UFFVRkVPMU5CUVdFc1ZVRkJWU3hMUVVGTExFVkJRVXdzUjBGQlZTeEhRVUZ3UWp0RFFVRmlPenM3T3pzN096czdPenM3T3pzN096czdPenRCUVc5Q2VrSXNTVUZCVFN3d1FrRkJVeXhWUVVGRExFTkJRVVFzUlVGQlNTeERRVUZLTEVWQlFVOHNVVUZCVUR0VFFVRnZRaXhKUVVGTExFTkJRVU1zU1VGQlNTeERRVUZLTEVOQlFVUXNSMEZCVlN4UlFVRldPME5CUVhwQ096czdPenM3T3pzN096dEJRVmRtTEVsQlFVMHNPRUpCUVZjc1ZVRkJReXhEUVVGRUxFVkJRWFZDTzAxQlFXNUNMREJFUVVGSkxEQkNRVUZsT3pzN1FVRkZOME1zVFVGQlNTeHJRa0ZCVFN4RFFVRk9MRU5CUVVvc1JVRkJZenRCUVVOYUxGZEJRVThzVjBGQlZ5eERRVUZZTEVWQlFXTXNRMEZCWkN4RFFVRlFPenM3UVVGRVdTeEhRVUZrTEUxQlNVODdRVUZEVEN4VlFVRk5MRk5CUVZNc1YwRkJWeXhGUVVGRkxFTkJRVVlzUlVGQlN5eEZRVUZGTEVOQlFVWXNRMEZCZWtJc1EwRkVSRHRCUVVWTUxGVkJRVTBzVTBGQlV5eFhRVUZYTEVWQlFVVXNRMEZCUml4RlFVRkxMRVZCUVVVc1EwRkJSaXhEUVVGNlFpeERRVVpFTzBGQlIwd3NWVUZCVFN4VFFVRlRMR2xDUVVGRExFTkJRVTBzUlVGQlJTeERRVUZHTEVOQlFWQXNSMEZCWlN4WFFVRlhMRVZCUVVVc1EwRkJSaXhGUVVGTExFVkJRVVVzUTBGQlJpeERRVUV2UWl4SFFVRnpReXhEUVVGMFF5eERRVWhXT3p0QlFVdE1MR0ZCUVU4c1MwRkJTeXhKUVVGTUxFTkJRVlVzVTBGQlF5eFJRVUZWTEVWQlFWZ3NXVUZCYVVJc1VVRkJWU3hGUVVFelFpeFpRVUZwUXl4UlFVRlZMRVZCUVRORExFTkJRV3BDTEVOQlRFczdTMEZLVUR0RFFVWnpRanM3T3pzN096czdPenM3T3p0QlFUQkNha0lzU1VGQlRTeHpSRUZCZFVJc1ZVRkJReXhSUVVGRUxFVkJRVmNzU1VGQldDeEZRVUZwUWl4RlFVRnFRanRUUVVGM1FpeERRVUZITEZGQlFVWXNSMEZCWVN4SlFVRmlMRWRCUVhOQ0xGZEJRVmNzUlVGQldDeEhRVUZwUWl4SlFVRjRRenREUVVGNFFqczdPenM3T3pzN096czdPenM3UVVGak4wSXNTVUZCVFN4elJFRkJkVUlzVlVGQlF5eExRVUZFTEVWQlFWRXNTVUZCVWl4RlFVRmpMRVZCUVdRN1UwRkJjVUlzUTBGQlF5eFJRVUZSTEVsQlFWSXNRMEZCUkN4SlFVRnJRaXhMUVVGTExFbEJRVXdzUTBGQmJFSTdRMEZCY2tJN096czdPenM3T3pzN1FVRlZOMElzU1VGQlRTeG5SVUZCTkVJc1ZVRkJReXhOUVVGRUxFVkJRVk1zUzBGQlZDeEZRVUZuUWl4UlFVRm9RaXhGUVVFMlFqdEJRVU53UlN4VlFVRlJMR2xDUVVGcFFpeExRVUZxUWl4RFFVRlNMRU5CUkc5Rk96dEJRVWR3UlN4VFFVRlBPMEZCUTB3c1QwRkJSeXhYUVVGWExFdEJRVXNzUjBGQlRDeERRVUZUTEV0QlFWUXNRMEZCV0N4SFFVRTJRaXhQUVVGUExFTkJRVkE3UVVGRGFFTXNUMEZCUnl4WFFVRlhMRXRCUVVzc1IwRkJUQ3hEUVVGVExFdEJRVlFzUTBGQldDeEhRVUUyUWl4UFFVRlBMRU5CUVZBN1IwRkdiRU1zUTBGSWIwVTdRMEZCTjBJN096czdPenM3TzBGQlpXeERMRWxCUVUwc09FTkJRVzFDTEZWQlFVTXNUMEZCUkR0VFFVRmhMRlZCUVZVc1IwRkJWaXhIUVVGblFpeExRVUZMTEVWQlFVdzdRMEZCTjBJN096czdPenM3T3p0QlFWTjZRaXhKUVVGTkxEQkNRVUZUTzAxQlFVTXNORVJCUVUwN1RVRkJSeXcwUkVGQlRUdFRRVUZOTEV0QlFVc3NUVUZCVEN4TlFVRnBRaXhOUVVGTkxFZEJRVTRzUTBGQmFrSXNSMEZCT0VJc1IwRkJPVUk3UTBGQmRFSTdPenM3T3pzN096czdPenRCUVZsbUxFbEJRVTBzZDBOQlFXZENMRlZCUVVNc1QwRkJSQ3hGUVVGVkxGRkJRVllzUlVGQmRVSTdRVUZEYkVRc1RVRkJTU3hYUVVGWExFOUJRVmdzUTBGRU9FTTdRVUZGYkVRc1RVRkJUU3hYUVVGWExGTkJRVk1zUzBGQlZDeERRVUZsTEVkQlFXWXNRMEZCV0N4RFFVWTBRenRCUVVkc1JDeE5RVUZOTEZkQlFWY3NVMEZCVXl4RFFVRlVMRU5CUVZnc1EwRklORU03T3pCQ1FVazFRaXcyUWtGQmFVSXNVMEZCVXl4RFFVRlVMRU5CUVdwQ0xFVkJTalJDT3p0TlFVazFReXc0UWtGS05FTTdUVUZKZEVNc1owTkJTbk5ET3pzN1FVRk5iRVFzVlVGQlVTeFhRVUZYTEV0QlFWZ3NRMEZCVWl4RFFVNXJSRHM3UVVGUmJFUXNWVUZCVVN4UlFVRlNPMEZCUTBFc1UwRkJTeXhIUVVGTU8wRkJRMFVzYTBKQlFWa3NTMEZCV2l4RFFVUkdPMEZCUlVVc1dVRkdSanRCUVVSQkxGTkJTVXNzUjBGQlREdEJRVU5GTEd0Q1FVRlpMRXRCUVZvc1EwRkVSanRCUVVWRkxGbEJSa1k3UVVGS1FTeFRRVTlMTEVkQlFVdzdRVUZEUlN4clFrRkJXU3hMUVVGYUxFTkJSRVk3UVVGRlJTeFpRVVpHTzBGQlVFRXNVMEZWU3l4SFFVRk1PMEZCUTBVc2EwSkJRVmtzUzBGQldpeERRVVJHTzBGQlJVVXNXVUZHUmp0QlFWWkJMRWRCVW10RU96dEJRWFZDYkVRc1RVRkJTU3hKUVVGS0xFVkJRVlU3UVVGRFVpeG5Ra0ZCV1N4SlFVRmFMRU5CUkZFN1IwRkJWanM3UVVGSlFTeFRRVUZQTEZGQlFWQXNRMEV6UW10RU8wTkJRWFpDT3pzN096czdPenM3T3pzN1FVRjNRM1JDTEVsQlFVMHNPRUpCUVZjc1ZVRkJReXhMUVVGRUxFVkJRVkVzUjBGQlVpeEZRVUZoTEVkQlFXSTdVMEZCY1VJc1MwRkJTeXhIUVVGTUxFTkJRVk1zUzBGQlN5eEhRVUZNTEVOQlFWTXNTMEZCVkN4RlFVRm5RaXhIUVVGb1FpeERRVUZVTEVWQlFTdENMRWRCUVM5Q08wTkJRWEpDT3pzN096czdPenM3TzBGQlZXcENMRWxCUVUwc01FSkJRVk1zVlVGQlF5eFJRVUZFTEVWQlFWY3NVVUZCV0N4RlFVRnhRaXhSUVVGeVFqdE5RVUVyUWl4clJVRkJXVHRUUVVGTkxITkNRVUZWTEZkQlFWa3NXVUZCV1N4WFFVRlhMRkZCUVZnc1EwRkJXaXhIUVVGdFF5eExRVUZMTEVkQlFVd3NRMEZCVXl4VFFVRlVMRVZCUVc5Q0xGRkJRWEJDTEVOQlFXNURPME5CUVhaRk96czdPenM3T3p0QlFWRm1MRWxCUVUwc2QwTkJRV2RDTEZWQlFVTXNSMEZCUkN4RlFVRk5MR0ZCUVU0N1UwRkJkMElzYVVKQlFVTXNRMEZCVFN4SFFVRk9MRU5CUVVRc1IwRkJaU3hQUVVGUExFOUJRVThzWVVGQlVDeERRVUZRTEVkQlFTdENMRU5CUVRsRE8wTkJRWGhDT3pzN096czdPenRCUVZGMFFpeEpRVUZOTERCRFFVRnBRaXhWUVVGRExGRkJRVVFzUlVGQlZ5eGhRVUZZTzFOQlFUWkNMRmxCUVZrc1QwRkJUeXhoUVVGUUxFTkJRVm83UTBGQk4wSTdPenM3T3pzN096dEJRVk4yUWl4SlFVRk5MSE5EUVVGbExGVkJRVU1zVVVGQlJDeEZRVUZYTEV0QlFWZ3NSVUZCY1VJN1FVRkRMME1zVFVGQlRTeFZRVUZWTEV0QlFVc3NVVUZCVVN4RFFVRlNMRU5CUVV3c1EwRkVLMEk3UVVGRkwwTXNUVUZCVFN4VFFVRlRMRWxCUVVzc1NVRkJTU3hMUVVGS0xFTkJSakpDTzBGQlJ5OURMRTFCUVUwc2JVSkJRVzFDTEV0QlFVc3NSMEZCVEN4RFFVRlRMRmRCUVZjc1RVRkJXQ3hGUVVGdFFpeERRVUUxUWl4RFFVRnVRaXhEUVVoNVF6czdRVUZMTDBNc1UwRkJUeXhMUVVGTExFdEJRVXdzUTBGQlZ5eHRRa0ZCYlVJc1QwRkJia0lzUTBGQldDeEhRVUY1UXl4UFFVRjZReXhEUVV4M1F6dERRVUZ5UWlJc0ltWnBiR1VpT2lKallXeGpMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwTDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3WEc0Z0lHaGhjMUJ5YjNCbGNuUjVMRnh1SUNCcGMwNTFiU3hjYmlBZ1ptbHVaRlpoYkhWbFFXNWtWVzVwZEN4Y2JpQWdkRzlFWldOcGJXRnNYRzU5SUdaeWIyMGdKeTR2ZFhScGJITW5PMXh1WEc1amIyNXpkQ0JhUlZKUFgxQlBTVTVVSUQwZ2UxeHVJQ0I0T2lBd0xGeHVJQ0I1T2lBd0xGeHVJQ0I2T2lBd1hHNTlPMXh1WEc1amIyNXpkQ0JrYVhOMFlXNWpaVEZFSUQwZ0tHRXNJR0lwSUQwK0lFMWhkR2d1WVdKektHRWdMU0JpS1R0Y2JseHVMeXBjYmlBZ1FXNW5iR1VnWW1WMGQyVmxiaUJ3YjJsdWRITmNiaUFnWEc0Z0lGUnlZVzV6YkdGMFpYTWdkR2hsSUdoNWNHOTBhR1YwYVdOaGJDQnNhVzVsSUhOdklIUm9ZWFFnZEdobElDZG1jbTl0SnlCamIyOXlaR2x1WVhSbGMxeHVJQ0JoY21VZ1lYUWdNQ3d3WEc0Z0lGeHVJQ0JBY0dGeVlXMGdXMjlpYW1WamRGMDZJRmdnWVc1a0lGa2dZMjl2Y21ScGJtRjBaWE1nYjJZZ1puSnZiU0J3YjJsdWRGeHVJQ0JBY0dGeVlXMGdXMjlpYW1WamRGMDZJRmdnWVc1a0lGa2dZMjl5WkdsdVlYUmxjeUJ2WmlCMGJ5QndiMmx1ZEZ4dUlDQkFjbVYwZFhKdUlGdHlZV1JwWVc1ZE9pQkJibWRzWlNCaVpYUjNaV1Z1SUhSb1pTQjBkMjhnY0c5cGJuUnpJR2x1SUhKaFpHbGhibk5jYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnWVc1bmJHVWdQU0FvWVN3Z1lpQTlJRnBGVWs5ZlVFOUpUbFFwSUQwK0lISmhaR2xoYm5OVWIwUmxaM0psWlhNb1RXRjBhQzVoZEdGdU1paGhMbmdnTFNCaUxuZ3NJR0V1ZVNBdElHSXVlU2twTzF4dVhHNHZLbHh1SUNCRGIyNTJaWEowSUdSbFozSmxaWE1nZEc4Z2NtRmthV0Z1YzF4dUlDQmNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJXWVd4MVpTQnBiaUJrWldkeVpXVnpYRzRnSUVCeVpYUjFjbTRnVzI1MWJXSmxjbDA2SUZaaGJIVmxJR2x1SUhKaFpHbGhibk5jYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnWkdWbmNtVmxjMVJ2VW1Ga2FXRnVjeUE5SUNoa1pXZHlaV1Z6S1NBOVBpQmtaV2R5WldWeklDb2dUV0YwYUM1UVNTQXZJREU0TUR0Y2JseHVMeXBjYmlBZ1JHbHNZWFJsWEc0Z0lGeHVJQ0JEYUdGdVoyVWdkR2hsSUhCeWIyZHlaWE56YVc5dUlHSmxkSGRsWlc0Z1lTQmhibVFnWWlCaFkyTnZjbVJwYm1jZ2RHOGdaR2xzWVhScGIyNHVYRzRnSUZ4dUlDQlRieUJrYVd4aGRHbHZiaUE5SURBdU5TQjNiM1ZzWkNCamFHRnVaMlZjYmlBZ1hHNGdJR0VnTFMwdExTMHRMUzB0SUdKY2JpQWdYRzRnSUhSdlhHNGdJRnh1SUNCaElDMHRMUzBnWWx4dUlDQmNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJRY21WMmFXOTFjeUIyWVd4MVpWeHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRU4xY25KbGJuUWdkbUZzZFdWY2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQkVhV3hoZEdVZ2NISnZaM0psYzNNZ1lua2dlRnh1SUNCQWNtVjBkWEp1SUZ0dWRXMWlaWEpkT2lCUWNtVjJhVzkxY3lCMllXeDFaU0J3YkhWeklIUm9aU0JrYVd4aGRHVmtJR1JwWm1abGNtVnVZMlZjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnWkdsc1lYUmxJRDBnS0dFc0lHSXNJR1JwYkdGMGFXOXVLU0E5UGlCaElDc2dLQ2hpSUMwZ1lTa2dLaUJrYVd4aGRHbHZiaWs3WEc1Y2JpOHFYRzRnSUVScGMzUmhibU5sWEc0Z0lGeHVJQ0JTWlhSMWNtNXpJSFJvWlNCa2FYTjBZVzVqWlNCaVpYUjNaV1Z1SUhSM2J5QnVJR1JwYldWdWMybHZibUZzSUhCdmFXNTBjeTVjYmlBZ1hHNGdJRUJ3WVhKaGJTQmJiMkpxWldOMEwyNTFiV0psY2wwNklIZ2dZVzVrSUhrZ2IzSWdhblZ6ZENCNElHOW1JSEJ2YVc1MElFRmNiaUFnUUhCaGNtRnRJRnR2WW1wbFkzUXZiblZ0WW1WeVhUb2dLRzl3ZEdsdmJtRnNLVG9nZUNCaGJtUWdlU0J2Y2lCcWRYTjBJSGdnYjJZZ2NHOXBiblFnUWx4dUlDQkFjbVYwZFhKdUlGdHVkVzFpWlhKZE9pQlVhR1VnWkdsemRHRnVZMlVnWW1WMGQyVmxiaUIwYUdVZ2RIZHZJSEJ2YVc1MGMxeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQmthWE4wWVc1alpTQTlJQ2hoTENCaUlEMGdXa1ZTVDE5UVQwbE9WQ2tnUFQ0Z2UxeHVJQ0F2THlBeFJDQmthVzFsYm5OcGIyNXpYRzRnSUdsbUlDaHBjMDUxYlNoaEtTa2dlMXh1SUNBZ0lISmxkSFZ5YmlCa2FYTjBZVzVqWlRGRUtHRXNJR0lwTzF4dVhHNGdJQzh2SUUxMWJIUnBMV1JwYldWdWMybHZibUZzWEc0Z0lIMGdaV3h6WlNCN1hHNGdJQ0FnWTI5dWMzUWdlRVJsYkhSaElEMGdaR2x6ZEdGdVkyVXhSQ2hoTG5nc0lHSXVlQ2s3WEc0Z0lDQWdZMjl1YzNRZ2VVUmxiSFJoSUQwZ1pHbHpkR0Z1WTJVeFJDaGhMbmtzSUdJdWVTazdYRzRnSUNBZ1kyOXVjM1FnZWtSbGJIUmhJRDBnS0dselRuVnRLR0V1ZWlrcElEOGdaR2x6ZEdGdVkyVXhSQ2hoTG5vc0lHSXVlaWtnT2lBd08xeHVYRzRnSUNBZ2NtVjBkWEp1SUUxaGRHZ3VjM0Z5ZENnb2VFUmxiSFJoSUNvcUlESXBJQ3NnS0hsRVpXeDBZU0FxS2lBeUtTQXJJQ2g2UkdWc2RHRWdLaW9nTWlrcE8xeHVJQ0I5WEc1OU8xeHVYRzR2S2x4dUlDQldZV3gxWlNCcGJpQnlZVzVuWlNCbWNtOXRJSEJ5YjJkeVpYTnpYRzRnSUZ4dUlDQkhhWFpsYmlCaElHeHZkMlZ5SUd4cGJXbDBJR0Z1WkNCaGJpQjFjSEJsY2lCc2FXMXBkQ3dnZDJVZ2NtVjBkWEp1SUhSb1pTQjJZV3gxWlNCM2FYUm9hVzVjYmlBZ2RHaGhkQ0J5WVc1blpTQmhjeUJsZUhCeVpYTnpaV1FnWW5rZ2NISnZaM0psYzNNZ0tHRWdiblZ0WW1WeUlHWnliMjBnTUMweEtWeHVJQ0JjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCVWFHVWdjSEp2WjNKbGMzTWdZbVYwZDJWbGJpQnNiM2RsY2lCaGJtUWdkWEJ3WlhJZ2JHbHRhWFJ6SUdWNGNISmxjM05sWkNBd0xURmNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJNYjNkbGNpQnNhVzFwZENCdlppQnlZVzVuWlZ4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklGVndjR1Z5SUd4cGJXbDBJRzltSUhKaGJtZGxYRzRnSUVCeVpYUjFjbTRnVzI1MWJXSmxjbDA2SUZaaGJIVmxJR0Z6SUdOaGJHTjFiR0YwWldRZ1puSnZiU0J3Y205bmNtVnpjeUIzYVhSb2FXNGdjbUZ1WjJVZ0tHNXZkQ0JzYVcxcGRHVmtJSGRwZEdocGJpQnlZVzVuWlNsY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ1oyVjBWbUZzZFdWR2NtOXRVSEp2WjNKbGMzTWdQU0FvY0hKdlozSmxjM01zSUdaeWIyMHNJSFJ2S1NBOVBpQW9MU0J3Y205bmNtVnpjeUFxSUdaeWIyMHBJQ3NnS0hCeWIyZHlaWE56SUNvZ2RHOHBJQ3NnWm5KdmJUdGNibHh1THlwY2JpQWdVSEp2WjNKbGMzTWdkMmwwYUdsdUlHZHBkbVZ1SUhKaGJtZGxYRzRnSUZ4dUlDQkhhWFpsYmlCaElHeHZkMlZ5SUd4cGJXbDBJR0Z1WkNCaGJpQjFjSEJsY2lCc2FXMXBkQ3dnZDJVZ2NtVjBkWEp1SUhSb1pTQndjbTluY21WemMxeHVJQ0FvWlhod2NtVnpjMlZrSUdGeklHRWdiblZ0WW1WeUlEQXRNU2tnY21Wd2NtVnpaVzUwWldRZ1lua2dkR2hsSUdkcGRtVnVJSFpoYkhWbExDQmhibVJjYmlBZ2JHbHRhWFFnZEdoaGRDQndjbTluY21WemN5QjBieUIzYVhSb2FXNGdNQzB4TGx4dUlDQmNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJXWVd4MVpTQjBieUJtYVc1a0lIQnliMmR5WlhOeklIZHBkR2hwYmlCbmFYWmxiaUJ5WVc1blpWeHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRXh2ZDJWeUlHeHBiV2wwSUZ4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklGVndjR1Z5SUd4cGJXbDBYRzRnSUVCeVpYUjFjbTRnVzI1MWJXSmxjbDA2SUZCeWIyZHlaWE56SUc5bUlIWmhiSFZsSUhkcGRHaHBiaUJ5WVc1blpTQmhjeUJsZUhCeVpYTnpaV1FnTUMweFhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHZGxkRkJ5YjJkeVpYTnpSbkp2YlZaaGJIVmxJRDBnS0haaGJIVmxMQ0JtY205dExDQjBieWtnUFQ0Z0tIWmhiSFZsSUMwZ1puSnZiU2tnTHlBb2RHOGdMU0JtY205dEtUdGNibHh1THlwY2JpQWdVRzlwYm5RZ1puSnZiU0JoYm1kc1pTQmhibVFnWkdsemRHRnVZMlZjYmlBZ1hHNGdJRUJ3WVhKaGJTQmJiMkpxWldOMFhUb2dNa1FnY0c5cGJuUWdiMllnYjNKcFoybHVYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nUVc1bmJHVWdabkp2YlNCdmNtbG5hVzVjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCRWFYTjBZVzVqWlNCbWNtOXRJRzl5YVdkcGJseHVJQ0JBY21WMGRYSnVJRnR2WW1wbFkzUmRPaUJEWVd4amRXeGhkR1ZrSURKRUlIQnZhVzUwWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUhCdmFXNTBSbkp2YlVGdVoyeGxRVzVrUkdsemRHRnVZMlVnUFNBb2IzSnBaMmx1TENCaGJtZHNaU3dnWkdsemRHRnVZMlVwSUQwK0lIdGNiaUFnWVc1bmJHVWdQU0JrWldkeVpXVnpWRzlTWVdScFlXNXpLR0Z1WjJ4bEtUdGNibHh1SUNCeVpYUjFjbTRnZTF4dUlDQWdJSGc2SUdScGMzUmhibU5sSUNvZ1RXRjBhQzVqYjNNb1lXNW5iR1VwSUNzZ2IzSnBaMmx1TG5nc1hHNGdJQ0FnZVRvZ1pHbHpkR0Z1WTJVZ0tpQk5ZWFJvTG5OcGJpaGhibWRzWlNrZ0t5QnZjbWxuYVc0dWVWeHVJQ0I5TzF4dWZUdGNibHh1THlwY2JpQWdRMjl1ZG1WeWRDQnlZV1JwWVc1eklIUnZJR1JsWjNKbFpYTmNiaUFnWEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1ZtRnNkV1VnYVc0Z2NtRmthV0Z1YzF4dUlDQkFjbVYwZFhKdUlGdHVkVzFpWlhKZE9pQldZV3gxWlNCcGJpQmtaV2R5WldWelhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElISmhaR2xoYm5OVWIwUmxaM0psWlhNZ1BTQW9jbUZrYVdGdWN5a2dQVDRnY21Ga2FXRnVjeUFxSURFNE1DQXZJRTFoZEdndVVFazdYRzVjYmk4cVhHNGdJRkpsZEhWeWJpQnlZVzVrYjIwZ2JuVnRZbVZ5SUdKbGRIZGxaVzRnY21GdVoyVmNiaUFnWEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFNBb2IzQjBhVzl1WVd3cE9pQlBkWFJ3ZFhRZ2JXbHVhVzExYlZ4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwZ0tHOXdkR2x2Ym1Gc0tUb2dUM1YwY0hWMElHMWhlR2x0ZFcxY2JpQWdRSEpsZEhWeWJpQmJiblZ0WW1WeVhUb2dVbUZ1Wkc5dElHNTFiV0psY2lCM2FYUm9hVzRnY21GdVoyVXNJRzl5SURBZ1lXNWtJREVnYVdZZ2JtOXVaU0J3Y205MmFXUmxaRnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0J5WVc1a2IyMGdQU0FvYldsdUlEMGdNQ3dnYldGNElEMGdNU2tnUFQ0Z1RXRjBhQzV5WVc1a2IyMG9LU0FxSUNodFlYZ2dMU0J0YVc0cElDc2diV2x1TzF4dVhHNHZLbHh1SUNCRFlXeGpkV3hoZEdVZ2NtVnNZWFJwZG1VZ2RtRnNkV1ZjYmlBZ1hHNGdJRlJoYTJWeklIUm9aU0J2Y0dWeVlYUnZjaUJoYm1RZ2RtRnNkV1VnWm5KdmJTQmhJSE4wY21sdVp5d2dhV1VnWENJclBUVmNJaXdnWVc1a0lHRndjR3hwWlhOY2JpQWdkRzhnZEdobElHTjFjbkpsYm5RZ2RtRnNkV1VnZEc4Z2NtVnpiMngyWlNCaElHNWxkeUIwWVhKblpYUXVYRzRnSUZ4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklFTjFjbkpsYm5RZ2RtRnNkV1ZjYmlBZ1FIQmhjbUZ0SUZ0emRISnBibWRkT2lCU1pXeGhkR2wyWlNCMllXeDFaVnh1SUNCQWNtVjBkWEp1SUZ0dWRXMWlaWEpkT2lCT1pYY2dkbUZzZFdWY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2NtVnNZWFJwZG1WV1lXeDFaU0E5SUNoamRYSnlaVzUwTENCeVpXeGhkR2wyWlNrZ1BUNGdlMXh1SUNCc1pYUWdibVYzVm1Gc2RXVWdQU0JqZFhKeVpXNTBPMXh1SUNCamIyNXpkQ0JsY1hWaGRHbHZiaUE5SUhKbGJHRjBhWFpsTG5Od2JHbDBLQ2M5SnlrN1hHNGdJR052Ym5OMElHOXdaWEpoZEc5eUlEMGdaWEYxWVhScGIyNWJNRjA3WEc0Z0lHeGxkQ0I3SUhWdWFYUXNJSFpoYkhWbElIMGdQU0JtYVc1a1ZtRnNkV1ZCYm1SVmJtbDBLR1Z4ZFdGMGFXOXVXekZkS1R0Y2JseHVJQ0IyWVd4MVpTQTlJSEJoY25ObFJteHZZWFFvZG1Gc2RXVXBPMXh1WEc0Z0lITjNhWFJqYUNBb2IzQmxjbUYwYjNJcElIdGNiaUFnWTJGelpTQW5LeWM2WEc0Z0lDQWdibVYzVm1Gc2RXVWdLejBnZG1Gc2RXVTdYRzRnSUNBZ1luSmxZV3M3WEc0Z0lHTmhjMlVnSnkwbk9seHVJQ0FnSUc1bGQxWmhiSFZsSUMwOUlIWmhiSFZsTzF4dUlDQWdJR0p5WldGck8xeHVJQ0JqWVhObElDY3FKenBjYmlBZ0lDQnVaWGRXWVd4MVpTQXFQU0IyWVd4MVpUdGNiaUFnSUNCaWNtVmhhenRjYmlBZ1kyRnpaU0FuTHljNlhHNGdJQ0FnYm1WM1ZtRnNkV1VnTHowZ2RtRnNkV1U3WEc0Z0lDQWdZbkpsWVdzN1hHNGdJSDFjYmlBZ1hHNGdJR2xtSUNoMWJtbDBLU0I3WEc0Z0lDQWdibVYzVm1Gc2RXVWdLejBnZFc1cGREdGNiaUFnZlZ4dVhHNGdJSEpsZEhWeWJpQnVaWGRXWVd4MVpUdGNibjA3WEc1Y2JpOHFYRzRnSUZKbGMzUnlhV04wSUhaaGJIVmxJSFJ2SUhKaGJtZGxYRzRnSUZ4dUlDQlNaWFIxY200Z2RtRnNkV1VnZDJsMGFHbHVJSFJvWlNCeVlXNW5aU0J2WmlCc2IzZGxja3hwYldsMElHRnVaQ0IxY0hCbGNreHBiV2wwWEc0Z0lGeHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRlpoYkhWbElIUnZJR3RsWlhBZ2QybDBhR2x1SUhKaGJtZGxYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVEc5M1pYSWdiR2x0YVhRZ2IyWWdjbUZ1WjJWY2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQlZjSEJsY2lCc2FXMXBkQ0J2WmlCeVlXNW5aVnh1SUNCQWNtVjBkWEp1SUZ0dWRXMWlaWEpkT2lCV1lXeDFaU0JoY3lCc2FXMXBkR1ZrSUhkcGRHaHBiaUJuYVhabGJpQnlZVzVuWlZ4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCeVpYTjBjbWxqZENBOUlDaDJZV3gxWlN3Z2JXbHVMQ0J0WVhncElEMCtJRTFoZEdndWJXRjRLRTFoZEdndWJXbHVLSFpoYkhWbExDQnRZWGdwTENCdGFXNHBPMXh1WEc0dktseHVJQ0JHY21GdFpYSmhkR1V0YVc1a1pYQmxibVJsYm5RZ2MyMXZiM1JvYVc1blhHNWNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJPWlhjZ2RtRnNkV1ZjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCUGJHUWdkbUZzZFdWY2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQkdjbUZ0WlNCa2RYSmhkR2x2Ymx4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwZ0tHOXdkR2x2Ym1Gc0tUb2dVMjF2YjNSb2FXNW5JQ2d3SUdseklHNXZibVVwWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUhOdGIyOTBhQ0E5SUNodVpYZFdZV3gxWlN3Z2IyeGtWbUZzZFdVc0lHUjFjbUYwYVc5dUxDQnpiVzl2ZEdocGJtY2dQU0F3S1NBOVBpQjBiMFJsWTJsdFlXd29iMnhrVm1Gc2RXVWdLeUFvWkhWeVlYUnBiMjRnS2lBb2JtVjNWbUZzZFdVZ0xTQnZiR1JXWVd4MVpTa2dMeUJOWVhSb0xtMWhlQ2h6Ylc5dmRHaHBibWNzSUdSMWNtRjBhVzl1S1NrcE8xeHVYRzR2S2x4dUlDQkRiMjUyWlhKMElIZ2djR1Z5SUhObFkyOXVaQ0IwYnlCd1pYSWdabkpoYldVZ2RtVnNiMk5wZEhrZ1ltRnpaV1FnYjI0Z1puQnpYRzRnSUZ4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklGVnVhWFFnY0dWeUlITmxZMjl1WkZ4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklFWnlZVzFsSUdSMWNtRjBhVzl1SUdsdUlHMXpYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJSE53WldWa1VHVnlSbkpoYldVZ1BTQW9lSEJ6TENCbWNtRnRaVVIxY21GMGFXOXVLU0E5UGlBb2FYTk9kVzBvZUhCektTa2dQeUI0Y0hNZ0x5QW9NVEF3TUNBdklHWnlZVzFsUkhWeVlYUnBiMjRwSURvZ01EdGNibHh1THlwY2JpQWdRMjl1ZG1WeWRDQjJaV3h2WTJsMGVTQnBiblJ2SUhabGJHbGphWFI1SUhCbGNpQnpaV052Ym1SY2JpQWdYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVlc1cGRDQndaWElnWm5KaGJXVmNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJHY21GdFpTQmtkWEpoZEdsdmJpQnBiaUJ0YzF4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCemNHVmxaRkJsY2xObFkyOXVaQ0E5SUNoMlpXeHZZMmwwZVN3Z1puSmhiV1ZFZFhKaGRHbHZiaWtnUFQ0Z2RtVnNiMk5wZEhrZ0tpQW9NVEF3TUNBdklHWnlZVzFsUkhWeVlYUnBiMjRwTzF4dVhHNHZLbHh1SUNCRGNtVmhkR1VnYzNSbGNIQmxaQ0IyWlhKemFXOXVJRzltSURBdE1TQndjbTluY21WemMxeHVJQ0JjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCRGRYSnlaVzUwSUhaaGJIVmxYRzRnSUVCd1lYSmhiU0JiYVc1MFhUb2dUblZ0WW1WeUlHOW1JSE4wWlhCelhHNGdJRUJ5WlhSMWNtNGdXMjUxYldKbGNsMDZJRk4wWlhCd1pXUWdkbUZzZFdWY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2MzUmxjRkJ5YjJkeVpYTnpJRDBnS0hCeWIyZHlaWE56TENCemRHVndjeWtnUFQ0Z2UxeHVJQ0JqYjI1emRDQnpaV2R0Wlc1MElEMGdNU0F2SUNoemRHVndjeUF0SURFcE8xeHVJQ0JqYjI1emRDQjBZWEpuWlhRZ1BTQXhJQzBnS0RFZ0x5QnpkR1Z3Y3lrN1hHNGdJR052Ym5OMElIQnliMmR5WlhOelQyWlVZWEpuWlhRZ1BTQk5ZWFJvTG0xcGJpaHdjbTluY21WemN5QXZJSFJoY21kbGRDd2dNU2s3WEc1Y2JpQWdjbVYwZFhKdUlFMWhkR2d1Wm14dmIzSW9jSEp2WjNKbGMzTlBabFJoY21kbGRDQXZJSE5sWjIxbGJuUXBJQ29nYzJWbmJXVnVkRHRjYm4wN0lsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy9jYWxjLmpzXG4gKiogbW9kdWxlIGlkID0gMTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuc3RlcHBlZE1vdGlvbiA9IGV4cG9ydHMucmVzdHJpY3RCZXR3ZWVuID0gZXhwb3J0cy5yZXN0cmljdE92ZXIgPSBleHBvcnRzLnJlc3RyaWN0VW5kZXIgPSBleHBvcnRzLmludGVycG9sYXRlID0gZXhwb3J0cy5jb21wb3NlID0gZXhwb3J0cy5hcHBlbmRVbml0ID0gdW5kZWZpbmVkO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpO1xuXG4vKipcbiAqIEFwcGVuZCBVbml0XG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGFwcGVuZCB0aGUgdW5pdCB0byBhIGdpdmVuIHZhbHVlXG4gKiBhcHBlbmRVbml0KCdweCcpKDIwKSAtPiAnMjBweCdcbiAqIEBwYXJhbSAge3N0cmluZ30gdW5pdClcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xudmFyIGFwcGVuZFVuaXQgPSBleHBvcnRzLmFwcGVuZFVuaXQgPSBmdW5jdGlvbiAodW5pdCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gJycgKyB2ICsgdW5pdDtcbiAgfTtcbn07XG5cbi8qKlxuICogQ29tcG9zZVxuICogQ29tcG9zZSBvdGhlciB0cmFuc2Zvcm1lcnMgdG8gcnVuIGxpbmVhcmlseVxuICogY29tcG9zZShtaW4oMjApLCBtYXgoNDApKVxuICogQHBhcmFtICB7Li4uZnVuY3Rpb25zfSB0cmFuc2Zvcm1lcnNcbiAqIEByZXR1cm4ge2Z1bmN0aW9ufVxuICovXG52YXIgY29tcG9zZSA9IGV4cG9ydHMuY29tcG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHRyYW5zZm9ybWVycyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHRyYW5zZm9ybWVyc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHZhciBudW1UcmFuc2Zvcm1lcnMgPSB0cmFuc2Zvcm1lcnMubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICh2LCB2YWx1ZSkge1xuICAgIGZvciAoaSA9IDA7IGkgPCBudW1UcmFuc2Zvcm1lcnM7IGkrKykge1xuICAgICAgdiA9IHRyYW5zZm9ybWVyc1tpXSh2LCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHY7XG4gIH07XG59O1xuXG52YXIgaW50ZXJwb2xhdGUgPSBleHBvcnRzLmludGVycG9sYXRlID0gZnVuY3Rpb24gKGlucHV0LCBvdXRwdXQsIHJhbmdlRWFzaW5nKSB7XG4gIHZhciByYW5nZUxlbmd0aCA9IGlucHV0Lmxlbmd0aDtcbiAgdmFyIGZpbmFsSW5kZXggPSByYW5nZUxlbmd0aCAtIDE7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgLy8gSWYgdmFsdWUgb3V0c2lkZSBtaW5pbXVtIHJhbmdlLCBxdWlja2x5IHJldHVyblxuICAgIGlmICh2IDw9IGlucHV0WzBdKSB7XG4gICAgICByZXR1cm4gb3V0cHV0WzBdO1xuICAgIH1cblxuICAgIC8vIElmIHZhbHVlIG91dHNpZGUgbWF4aW11bSByYW5nZSwgcXVpY2tseSByZXR1cm5cbiAgICBpZiAodiA+PSBpbnB1dFtmaW5hbEluZGV4XSkge1xuICAgICAgcmV0dXJuIG91dHB1dFtmaW5hbEluZGV4XTtcbiAgICB9XG5cbiAgICB2YXIgaSA9IDA7XG5cbiAgICAvLyBGaW5kIGluZGV4IG9mIHJhbmdlIHN0YXJ0XG4gICAgZm9yICg7IGkgPCByYW5nZUxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaW5wdXRbaV0gPiB2IHx8IGkgPT09IGZpbmFsSW5kZXgpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByb2dyZXNzSW5SYW5nZSA9ICgwLCBfY2FsYy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSkodiwgaW5wdXRbaV0sIGlucHV0W2kgKyAxXSk7XG4gICAgdmFyIGVhc2VkUHJvZ3Jlc3MgPSByYW5nZUVhc2luZyA/IHJhbmdlRWFzaW5nW2ldKHByb2dyZXNzSW5SYW5nZSkgOiBwcm9ncmVzc0luUmFuZ2U7XG4gICAgcmV0dXJuICgwLCBfY2FsYy5nZXRWYWx1ZUZyb21Qcm9ncmVzcykoZWFzZWRQcm9ncmVzcywgb3V0cHV0W2ldLCBvdXRwdXRbaSArIDFdKTtcbiAgfTtcbn07XG5cbi8qKlxuICogUmVzdHJpY3QgdmFsdWUgYmV0d2VlblxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCByZXN0cmljdCBhIGdpdmVuIHZhbHVlIGJldHdlZW4gYG1pbmAgYW5kIGBtYXhgXG4gKiBAcGFyYW0gIHtudW1iZXJ9IG1pblxuICogQHBhcmFtICB7bnVtYmVyfSBtYXhcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xudmFyIHJlc3RyaWN0VW5kZXIgPSBleHBvcnRzLnJlc3RyaWN0VW5kZXIgPSBmdW5jdGlvbiAobWF4KSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiBNYXRoLm1pbih2LCBtYXgpO1xuICB9O1xufTtcbnZhciByZXN0cmljdE92ZXIgPSBleHBvcnRzLnJlc3RyaWN0T3ZlciA9IGZ1bmN0aW9uIChtaW4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIE1hdGgubWF4KHYsIG1pbik7XG4gIH07XG59O1xudmFyIHJlc3RyaWN0QmV0d2VlbiA9IGV4cG9ydHMucmVzdHJpY3RCZXR3ZWVuID0gZnVuY3Rpb24gKG1pbiwgbWF4KSB7XG4gIHJldHVybiBjb21wb3NlKHJlc3RyaWN0T3ZlcihtaW4pLCByZXN0cmljdFVuZGVyKG1heCkpO1xufTtcblxudmFyIHN0ZXBwZWRNb3Rpb24gPSBleHBvcnRzLnN0ZXBwZWRNb3Rpb24gPSBmdW5jdGlvbiAobWluLCBtYXgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7fTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlM5bWFXeDBaWEp6TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPMEZCUVVFN096czdPenM3T3p0QlFWTlBMRWxCUVUwc2EwTkJRV0VzVlVGQlF5eEpRVUZFTzFOQlFWVXNWVUZCUXl4RFFVRkVPMmRDUVVGVkxFbEJRVWs3UjBGQlpEdERRVUZXT3pzN096czdPenM3UVVGVGJrSXNTVUZCVFN3MFFrRkJWU3haUVVGeFFqdHZRMEZCYWtJN08wZEJRV2xDT3p0QlFVTXhReXhOUVVGTkxHdENRVUZyUWl4aFFVRmhMRTFCUVdJc1EwRkVhMEk3UVVGRk1VTXNUVUZCU1N4SlFVRkpMRU5CUVVvc1EwRkdjME03TzBGQlNURkRMRk5CUVU4c1ZVRkJReXhEUVVGRUxFVkJRVWtzUzBGQlNpeEZRVUZqTzBGQlEyNUNMRk5CUVVzc1NVRkJTU3hEUVVGS0xFVkJRVThzU1VGQlNTeGxRVUZLTEVWQlFYRkNMRWRCUVdwRExFVkJRWE5ETzBGQlEzQkRMRlZCUVVrc1lVRkJZU3hEUVVGaUxFVkJRV2RDTEVOQlFXaENMRVZCUVcxQ0xFdEJRVzVDTEVOQlFVb3NRMEZFYjBNN1MwRkJkRU03TzBGQlNVRXNWMEZCVHl4RFFVRlFMRU5CVEcxQ08wZEJRV1FzUTBGS2JVTTdRMEZCY2tJN08wRkJZV2hDTEVsQlFVMHNiME5CUVdNc1ZVRkJReXhMUVVGRUxFVkJRVkVzVFVGQlVpeEZRVUZuUWl4WFFVRm9RaXhGUVVGblF6dEJRVU42UkN4TlFVRk5MR05CUVdNc1RVRkJUU3hOUVVGT0xFTkJSSEZETzBGQlJYcEVMRTFCUVUwc1lVRkJZU3hqUVVGakxFTkJRV1FzUTBGR2MwTTdPMEZCU1hwRUxGTkJRVThzVlVGQlF5eERRVUZFTEVWQlFVODdPMEZCUlZvc1VVRkJTU3hMUVVGTExFMUJRVTBzUTBGQlRpeERRVUZNTEVWQlFXVTdRVUZEYWtJc1lVRkJUeXhQUVVGUExFTkJRVkFzUTBGQlVDeERRVVJwUWp0TFFVRnVRanM3TzBGQlJsa3NVVUZQVWl4TFFVRkxMRTFCUVUwc1ZVRkJUaXhEUVVGTUxFVkJRWGRDTzBGQlF6RkNMR0ZCUVU4c1QwRkJUeXhWUVVGUUxFTkJRVkFzUTBGRU1FSTdTMEZCTlVJN08wRkJTVUVzVVVGQlNTeEpRVUZKTEVOQlFVbzdPenRCUVZoUkxGZEJZMHdzU1VGQlNTeFhRVUZLTEVWQlFXbENMRWRCUVhoQ0xFVkJRVFpDTzBGQlF6TkNMRlZCUVVrc1RVRkJUU3hEUVVGT0xFbEJRVmNzUTBGQldDeEpRVUZuUWl4TlFVRk5MRlZCUVU0c1JVRkJhMEk3UVVGRGNFTXNZMEZFYjBNN1QwRkJkRU03UzBGRVJqczdRVUZOUVN4UlFVRk5MR3RDUVVGclFpeG5RMEZCY1VJc1EwRkJja0lzUlVGQmQwSXNUVUZCVFN4RFFVRk9MRU5CUVhoQ0xFVkJRV3RETEUxQlFVMHNTVUZCU1N4RFFVRktMRU5CUVhoRExFTkJRV3hDTEVOQmNFSk5PMEZCY1VKYUxGRkJRVTBzWjBKQlFXZENMR05CUVdkQ0xGbEJRVmtzUTBGQldpeEZRVUZsTEdWQlFXWXNRMEZCYUVJc1IwRkJhMFFzWlVGQmJFUXNRMEZ5UWxZN1FVRnpRbG9zVjBGQlR5eG5RMEZCY1VJc1lVRkJja0lzUlVGQmIwTXNUMEZCVHl4RFFVRlFMRU5CUVhCRExFVkJRU3RETEU5QlFVOHNTVUZCU1N4RFFVRktMRU5CUVhSRUxFTkJRVkFzUTBGMFFsazdSMEZCVUN4RFFVcHJSRHREUVVGb1F6czdPenM3T3pzN08wRkJjVU53UWl4SlFVRk5MSGREUVVGblFpeFZRVUZETEVkQlFVUTdVMEZCVXl4VlFVRkRMRU5CUVVRN1YwRkJUeXhMUVVGTExFZEJRVXdzUTBGQlV5eERRVUZVTEVWQlFWa3NSMEZCV2p0SFFVRlFPME5CUVZRN1FVRkRkRUlzU1VGQlRTeHpRMEZCWlN4VlFVRkRMRWRCUVVRN1UwRkJVeXhWUVVGRExFTkJRVVE3VjBGQlR5eExRVUZMTEVkQlFVd3NRMEZCVXl4RFFVRlVMRVZCUVZrc1IwRkJXanRIUVVGUU8wTkJRVlE3UVVGRGNrSXNTVUZCVFN3MFEwRkJhMElzVlVGQlF5eEhRVUZFTEVWQlFVMHNSMEZCVGp0VFFVRmpMRkZCUVZFc1lVRkJZU3hIUVVGaUxFTkJRVklzUlVGQk1rSXNZMEZCWXl4SFFVRmtMRU5CUVROQ08wTkJRV1E3TzBGQlJYaENMRWxCUVUwc2QwTkJRV2RDTEZWQlFVTXNSMEZCUkN4RlFVRk5MRWRCUVU0N1UwRkJZeXhWUVVGRExFTkJRVVFzUlVGQlR5eEZRVUZRTzBOQlFXUWlMQ0ptYVd4bElqb2labWxzZEdWeWN5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdleUJuWlhSUWNtOW5jbVZ6YzBaeWIyMVdZV3gxWlN3Z1oyVjBWbUZzZFdWR2NtOXRVSEp2WjNKbGMzTWdmU0JtY205dElDY3VMaTlwYm1NdlkyRnNZeWM3WEc1Y2JpOHFLbHh1SUNvZ1FYQndaVzVrSUZWdWFYUmNiaUFxSUVOeVpXRjBaWE1nWVNCbWRXNWpkR2x2YmlCMGFHRjBJSGRwYkd3Z1lYQndaVzVrSUhSb1pTQjFibWwwSUhSdklHRWdaMmwyWlc0Z2RtRnNkV1ZjYmlBcUlHRndjR1Z1WkZWdWFYUW9KM0I0Snlrb01qQXBJQzArSUNjeU1IQjRKMXh1SUNvZ1FIQmhjbUZ0SUNCN2MzUnlhVzVuZlNCMWJtbDBLVnh1SUNvZ1FISmxkSFZ5YmlCN2JuVnRZbVZ5ZlZ4dUlDb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ1lYQndaVzVrVlc1cGRDQTlJQ2gxYm1sMEtTQTlQaUFvZGlrZ1BUNGdZQ1I3ZG4wa2UzVnVhWFI5WUR0Y2JseHVMeW9xWEc0Z0tpQkRiMjF3YjNObFhHNGdLaUJEYjIxd2IzTmxJRzkwYUdWeUlIUnlZVzV6Wm05eWJXVnljeUIwYnlCeWRXNGdiR2x1WldGeWFXeDVYRzRnS2lCamIyMXdiM05sS0cxcGJpZ3lNQ2tzSUcxaGVDZzBNQ2twWEc0Z0tpQkFjR0Z5WVcwZ0lIc3VMaTVtZFc1amRHbHZibk45SUhSeVlXNXpabTl5YldWeWMxeHVJQ29nUUhKbGRIVnliaUI3Wm5WdVkzUnBiMjU5WEc0Z0tpOWNibVY0Y0c5eWRDQmpiMjV6ZENCamIyMXdiM05sSUQwZ0tDNHVMblJ5WVc1elptOXliV1Z5Y3lrZ1BUNGdlMXh1SUNCamIyNXpkQ0J1ZFcxVWNtRnVjMlp2Y20xbGNuTWdQU0IwY21GdWMyWnZjbTFsY25NdWJHVnVaM1JvTzF4dUlDQnNaWFFnYVNBOUlEQTdYRzVjYmlBZ2NtVjBkWEp1SUNoMkxDQjJZV3gxWlNrZ1BUNGdlMXh1SUNBZ0lHWnZjaUFvYVNBOUlEQTdJR2tnUENCdWRXMVVjbUZ1YzJadmNtMWxjbk03SUdrckt5a2dlMXh1SUNBZ0lDQWdkaUE5SUhSeVlXNXpabTl5YldWeWMxdHBYU2gyTENCMllXeDFaU2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjbVYwZFhKdUlIWTdYRzRnSUgwN1hHNTlPMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdhVzUwWlhKd2IyeGhkR1VnUFNBb2FXNXdkWFFzSUc5MWRIQjFkQ3dnY21GdVoyVkZZWE5wYm1jcElEMCtJSHRjYmlBZ1kyOXVjM1FnY21GdVoyVk1aVzVuZEdnZ1BTQnBibkIxZEM1c1pXNW5kR2c3WEc0Z0lHTnZibk4wSUdacGJtRnNTVzVrWlhnZ1BTQnlZVzVuWlV4bGJtZDBhQ0F0SURFN1hHNWNiaUFnY21WMGRYSnVJQ2gyS1NBOVBpQjdYRzRnSUNBZ0x5OGdTV1lnZG1Gc2RXVWdiM1YwYzJsa1pTQnRhVzVwYlhWdElISmhibWRsTENCeGRXbGphMng1SUhKbGRIVnlibHh1SUNBZ0lHbG1JQ2gySUR3OUlHbHVjSFYwV3pCZEtTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z2IzVjBjSFYwV3pCZE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUM4dklFbG1JSFpoYkhWbElHOTFkSE5wWkdVZ2JXRjRhVzExYlNCeVlXNW5aU3dnY1hWcFkydHNlU0J5WlhSMWNtNWNiaUFnSUNCcFppQW9kaUErUFNCcGJuQjFkRnRtYVc1aGJFbHVaR1Y0WFNrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUc5MWRIQjFkRnRtYVc1aGJFbHVaR1Y0WFR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JzWlhRZ2FTQTlJREE3WEc1Y2JpQWdJQ0F2THlCR2FXNWtJR2x1WkdWNElHOW1JSEpoYm1kbElITjBZWEowWEc0Z0lDQWdabTl5SUNnN0lHa2dQQ0J5WVc1blpVeGxibWQwYURzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0JwWmlBb2FXNXdkWFJiYVYwZ1BpQjJJSHg4SUdrZ1BUMDlJR1pwYm1Gc1NXNWtaWGdwSUh0Y2JpQWdJQ0FnSUNBZ1luSmxZV3M3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmVnh1WEc0Z0lDQWdZMjl1YzNRZ2NISnZaM0psYzNOSmJsSmhibWRsSUQwZ1oyVjBVSEp2WjNKbGMzTkdjbTl0Vm1Gc2RXVW9kaXdnYVc1d2RYUmJhVjBzSUdsdWNIVjBXMmtnS3lBeFhTazdYRzRnSUNBZ1kyOXVjM1FnWldGelpXUlFjbTluY21WemN5QTlJQ2h5WVc1blpVVmhjMmx1WnlrZ1B5QnlZVzVuWlVWaGMybHVaMXRwWFNod2NtOW5jbVZ6YzBsdVVtRnVaMlVwSURvZ2NISnZaM0psYzNOSmJsSmhibWRsTzF4dUlDQWdJSEpsZEhWeWJpQm5aWFJXWVd4MVpVWnliMjFRY205bmNtVnpjeWhsWVhObFpGQnliMmR5WlhOekxDQnZkWFJ3ZFhSYmFWMHNJRzkxZEhCMWRGdHBJQ3NnTVYwcE8xeHVJQ0I5TzF4dWZUdGNibHh1THlvcVhHNGdLaUJTWlhOMGNtbGpkQ0IyWVd4MVpTQmlaWFIzWldWdVhHNGdLaUJEY21WaGRHVnpJR0VnWm5WdVkzUnBiMjRnZEdoaGRDQjNhV3hzSUhKbGMzUnlhV04wSUdFZ1oybDJaVzRnZG1Gc2RXVWdZbVYwZDJWbGJpQmdiV2x1WUNCaGJtUWdZRzFoZUdCY2JpQXFJRUJ3WVhKaGJTQWdlMjUxYldKbGNuMGdiV2x1WEc0Z0tpQkFjR0Z5WVcwZ0lIdHVkVzFpWlhKOUlHMWhlRnh1SUNvZ1FISmxkSFZ5YmlCN2JuVnRZbVZ5ZlZ4dUlDb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2NtVnpkSEpwWTNSVmJtUmxjaUE5SUNodFlYZ3BJRDArSUNoMktTQTlQaUJOWVhSb0xtMXBiaWgyTENCdFlYZ3BPMXh1Wlhod2IzSjBJR052Ym5OMElISmxjM1J5YVdOMFQzWmxjaUE5SUNodGFXNHBJRDArSUNoMktTQTlQaUJOWVhSb0xtMWhlQ2gyTENCdGFXNHBPMXh1Wlhod2IzSjBJR052Ym5OMElISmxjM1J5YVdOMFFtVjBkMlZsYmlBOUlDaHRhVzRzSUcxaGVDa2dQVDRnWTI5dGNHOXpaU2h5WlhOMGNtbGpkRTkyWlhJb2JXbHVLU3dnY21WemRISnBZM1JWYm1SbGNpaHRZWGdwS1R0Y2JseHVaWGh3YjNKMElHTnZibk4wSUhOMFpYQndaV1JOYjNScGIyNGdQU0FvYldsdUxDQnRZWGdwSUQwK0lDaDJLU0E5UGlCN1hHNGdJRnh1ZlRzaVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlL2ZpbHRlcnMuanNcbiAqKiBtb2R1bGUgaWQgPSAxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLypcbiAgRGV0ZWN0IGFuZCBsb2FkIGFuIGFwcHJvcHJpYXRlIGNsb2NrIHNldHRpbmcgZm9yIHRoZSBlbnZpcm9ubWVudFxuKi9cbnZhciBoYXNSQUYgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID8gdHJ1ZSA6IGZhbHNlO1xuXG52YXIgb25OZXh0RnJhbWUgPSB2b2lkIDA7XG5cbmlmIChoYXNSQUYpIHtcbiAgb25OZXh0RnJhbWUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShjYWxsYmFjayk7XG4gIH07XG59IGVsc2Uge1xuICAoZnVuY3Rpb24gKCkge1xuICAgIC8qXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGxcbiAgICAgIFxuICAgICAgRm9yIElFOC85IEZsaW5zdG9uZXMgYW5kIG5vbi1icm93c2VyIGVudmlyb25tZW50c1xuICAgICAgIFRha2VuIGZyb20gUGF1bCBJcmlzaC4gV2UndmUgc3RyaXBwZWQgb3V0IGNhbmNlbEFuaW1hdGlvbkZyYW1lIGNoZWNrcyBiZWNhdXNlIHdlIGRvbid0IGZveCB3aXRoIHRoYXRcbiAgICAgIFxuICAgICAgaHR0cDovL3BhdWxpcmlzaC5jb20vMjAxMS9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWFuaW1hdGluZy9cbiAgICAgIGh0dHA6Ly9teS5vcGVyYS5jb20vZW1vbGxlci9ibG9nLzIwMTEvMTIvMjAvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1lci1hbmltYXRpbmdcbiAgICAgICBcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbCBieSBFcmlrIE3DtmxsZXIuIGZpeGVzIGZyb20gUGF1bCBJcmlzaCBhbmQgVGlubyBaaWpkZWxcbiAgICAgICBcbiAgICAgIE1JVCBsaWNlbnNlXG4gICAgKi9cbiAgICB2YXIgbGFzdFRpbWUgPSAwO1xuXG4gICAgb25OZXh0RnJhbWUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgIHZhciBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgdmFyIHRpbWVUb0NhbGwgPSBNYXRoLm1heCgwLCAxNi43IC0gKGN1cnJlbnRUaW1lIC0gbGFzdFRpbWUpKTtcblxuICAgICAgbGFzdFRpbWUgPSBjdXJyZW50VGltZSArIHRpbWVUb0NhbGw7XG5cbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2sobGFzdFRpbWUpO1xuICAgICAgfSwgdGltZVRvQ2FsbCk7XG4gICAgfTtcbiAgfSkoKTtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gb25OZXh0RnJhbWU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OW1jbUZ0WlhONWJtTXZiMjR0Ym1WNGRDMW1jbUZ0WlM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3UVVGSFFTeEpRVUZOTEZOQlFWTXNUMEZCVVN4TlFVRlFMRXRCUVd0Q0xGZEJRV3hDTEVsQlFXbERMRTlCUVU4c2NVSkJRVkFzUjBGQlowTXNTVUZCYkVVc1IwRkJlVVVzUzBGQmVrVTdPMEZCUldZc1NVRkJTU3h2UWtGQlNqczdRVUZGUVN4SlFVRkpMRTFCUVVvc1JVRkJXVHRCUVVOV0xHZENRVUZqTEZWQlFVTXNVVUZCUkR0WFFVRmpMRTlCUVU4c2NVSkJRVkFzUTBGQk5rSXNVVUZCTjBJN1IwRkJaQ3hEUVVSS08wTkJRVm9zVFVGSFR6czdPenM3T3pzN096czdPenM3TzBGQlpVd3NVVUZCU1N4WFFVRlhMRU5CUVZnN08wRkJSVW9zYTBKQlFXTXNWVUZCUXl4UlFVRkVMRVZCUVdNN1FVRkRNVUlzVlVGQlRTeGpRVUZqTEVsQlFVa3NTVUZCU2l4SFFVRlhMRTlCUVZnc1JVRkJaQ3hEUVVSdlFqdEJRVVV4UWl4VlFVRk5MR0ZCUVdFc1MwRkJTeXhIUVVGTUxFTkJRVk1zUTBGQlZDeEZRVUZaTEZGQlFWRXNZMEZCWXl4UlFVRmtMRU5CUVZJc1EwRkJla0lzUTBGR2IwSTdPMEZCU1RGQ0xHbENRVUZYTEdOQlFXTXNWVUZCWkN4RFFVcGxPenRCUVUweFFpeHBRa0ZCVnp0bFFVRk5MRk5CUVZNc1VVRkJWRHRQUVVGT0xFVkJRVEJDTEZWQlFYSkRMRVZCVGpCQ08wdEJRV1E3VDBGcVFsUTdRMEZJVURzN2EwSkJPRUpsSWl3aVptbHNaU0k2SW05dUxXNWxlSFF0Wm5KaGJXVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFF2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTHlwY2JpQWdSR1YwWldOMElHRnVaQ0JzYjJGa0lHRnVJR0Z3Y0hKdmNISnBZWFJsSUdOc2IyTnJJSE5sZEhScGJtY2dabTl5SUhSb1pTQmxiblpwY205dWJXVnVkRnh1S2k5Y2JtTnZibk4wSUdoaGMxSkJSaUE5SUNoMGVYQmxiMllnZDJsdVpHOTNJQ0U5UFNBbmRXNWtaV1pwYm1Wa0p5QW1KaUIzYVc1a2IzY3VjbVZ4ZFdWemRFRnVhVzFoZEdsdmJrWnlZVzFsS1NBL0lIUnlkV1VnT2lCbVlXeHpaVHRjYmx4dWJHVjBJRzl1VG1WNGRFWnlZVzFsTzF4dVhHNXBaaUFvYUdGelVrRkdLU0I3WEc0Z0lHOXVUbVY0ZEVaeVlXMWxJRDBnS0dOaGJHeGlZV05yS1NBOVBpQjNhVzVrYjNjdWNtVnhkV1Z6ZEVGdWFXMWhkR2x2YmtaeVlXMWxLR05oYkd4aVlXTnJLVHRjYmx4dWZTQmxiSE5sSUh0Y2JpQWdMeXBjYmlBZ0lDQnlaWEYxWlhOMFFXNXBiV0YwYVc5dVJuSmhiV1VnY0c5c2VXWnBiR3hjYmlBZ0lDQmNiaUFnSUNCR2IzSWdTVVU0THprZ1JteHBibk4wYjI1bGN5QmhibVFnYm05dUxXSnliM2R6WlhJZ1pXNTJhWEp2Ym0xbGJuUnpYRzVjYmlBZ0lDQlVZV3RsYmlCbWNtOXRJRkJoZFd3Z1NYSnBjMmd1SUZkbEozWmxJSE4wY21sd2NHVmtJRzkxZENCallXNWpaV3hCYm1sdFlYUnBiMjVHY21GdFpTQmphR1ZqYTNNZ1ltVmpZWFZ6WlNCM1pTQmtiMjRuZENCbWIzZ2dkMmwwYUNCMGFHRjBYRzRnSUNBZ1hHNGdJQ0FnYUhSMGNEb3ZMM0JoZFd4cGNtbHphQzVqYjIwdk1qQXhNUzl5WlhGMVpYTjBZVzVwYldGMGFXOXVabkpoYldVdFptOXlMWE50WVhKMExXRnVhVzFoZEdsdVp5OWNiaUFnSUNCb2RIUndPaTh2YlhrdWIzQmxjbUV1WTI5dEwyVnRiMnhzWlhJdllteHZaeTh5TURFeEx6RXlMekl3TDNKbGNYVmxjM1JoYm1sdFlYUnBiMjVtY21GdFpTMW1iM0l0YzIxaGNuUXRaWEl0WVc1cGJXRjBhVzVuWEc0Z0lDQWdJRnh1SUNBZ0lISmxjWFZsYzNSQmJtbHRZWFJwYjI1R2NtRnRaU0J3YjJ4NVptbHNiQ0JpZVNCRmNtbHJJRTNEdG14c1pYSXVJR1pwZUdWeklHWnliMjBnVUdGMWJDQkpjbWx6YUNCaGJtUWdWR2x1YnlCYWFXcGtaV3hjYmlBZ0lDQWdYRzRnSUNBZ1RVbFVJR3hwWTJWdWMyVmNiaUFnS2k5Y2JpQWdiR1YwSUd4aGMzUlVhVzFsSUQwZ01EdGNibHh1SUNCdmJrNWxlSFJHY21GdFpTQTlJQ2hqWVd4c1ltRmpheWtnUFQ0Z2UxeHVJQ0FnSUdOdmJuTjBJR04xY25KbGJuUlVhVzFsSUQwZ2JtVjNJRVJoZEdVb0tTNW5aWFJVYVcxbEtDazdYRzRnSUNBZ1kyOXVjM1FnZEdsdFpWUnZRMkZzYkNBOUlFMWhkR2d1YldGNEtEQXNJREUyTGpjZ0xTQW9ZM1Z5Y21WdWRGUnBiV1VnTFNCc1lYTjBWR2x0WlNrcE8xeHVYRzRnSUNBZ2JHRnpkRlJwYldVZ1BTQmpkWEp5Wlc1MFZHbHRaU0FySUhScGJXVlViME5oYkd3N1hHNWNiaUFnSUNCelpYUlVhVzFsYjNWMEtDZ3BJRDArSUdOaGJHeGlZV05yS0d4aGMzUlVhVzFsS1N3Z2RHbHRaVlJ2UTJGc2JDazdYRzRnSUgwN1hHNTlYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJRzl1VG1WNGRFWnlZVzFsT3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2ZyYW1lc3luYy9vbi1uZXh0LWZyYW1lLmpzXG4gKiogbW9kdWxlIGlkID0gMTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlUmVuZGVyU3RlcDtcbmZ1bmN0aW9uIGNyZWF0ZVJlbmRlclN0ZXAoc3RhcnRSZW5kZXJMb29wKSB7XG4gIC8qKlxuICAgKiBXZSB1c2UgdHdvIGFycmF5cywgb25lIGZvciB0aGlzIGZyYW1lIGFuZCBvbmUgdG8gcXVldWUgZm9yIHRoZVxuICAgKiBuZXh0IGZyYW1lLCByZXVzaW5nIGVhY2ggdG8gYXZvaWQgR0MuXG4gICAqIEB0eXBlIHtBcnJheX1cbiAgICovXG4gIHZhciBmdW5jdGlvbnNUb1J1biA9IFtdO1xuICB2YXIgZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUgPSBbXTtcblxuICByZXR1cm4ge1xuICAgIHNjaGVkdWxlOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgIHN0YXJ0UmVuZGVyTG9vcCgpO1xuICAgICAgLy8gSWYgdGhpcyBjYWxsYmFjayBpc24ndCBhbHJlYWR5IHNjaGVkdWxlZCB0byBydW4gbmV4dCBmcmFtZVxuICAgICAgaWYgKGZ1bmN0aW9uc1RvUnVuTmV4dEZyYW1lLmluZGV4T2YoY2FsbGJhY2spID09PSAtMSkge1xuICAgICAgICBmdW5jdGlvbnNUb1J1bk5leHRGcmFtZS5wdXNoKGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgY2FuY2VsOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgIHZhciBpbmRleE9mQ2FsbGJhY2sgPSBmdW5jdGlvbnNUb1J1bk5leHRGcmFtZS5pbmRleE9mKGNhbGxiYWNrKTtcbiAgICAgIGlmIChpbmRleE9mQ2FsbGJhY2sgIT09IC0xKSB7XG4gICAgICAgIGZ1bmN0aW9uc1RvUnVuTmV4dEZyYW1lLnNwbGljZShpbmRleE9mQ2FsbGJhY2ssIDEpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBwcm9jZXNzOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgIC8vIENsZWFyIG5leHQgZnJhbWUgbGlzdFxuICAgICAgdmFyIF9yZWYgPSBbZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUsIGZ1bmN0aW9uc1RvUnVuXTtcbiAgICAgIC8vIFN3YXAgdGhpcyBmcmFtZSBhbmQgbmV4dCBmcmFtZSBhcnJheXMgdG8gYXZvaWQgR0NcblxuICAgICAgZnVuY3Rpb25zVG9SdW4gPSBfcmVmWzBdO1xuICAgICAgZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUgPSBfcmVmWzFdO1xuICAgICAgZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUubGVuZ3RoID0gMDtcblxuICAgICAgLy8gRXhlY3V0ZSBhbGwgb2YgdGhpcyBmcmFtZSdzIGZ1bmN0aW9uc1xuICAgICAgdmFyIG51bVRoaXNGcmFtZSA9IGZ1bmN0aW9uc1RvUnVuLmxlbmd0aDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtVGhpc0ZyYW1lOyBpKyspIHtcbiAgICAgICAgZnVuY3Rpb25zVG9SdW5baV0oKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OW1jbUZ0WlhONWJtTXZZM0psWVhSbExYSmxibVJsY2kxemRHVndMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3p0clFrRkJkMEk3UVVGQlZDeFRRVUZUTEdkQ1FVRlVMRU5CUVRCQ0xHVkJRVEZDTEVWQlFUSkRPenM3T3pzN1FVRk5lRVFzVFVGQlNTeHBRa0ZCYVVJc1JVRkJha0lzUTBGT2IwUTdRVUZQZUVRc1RVRkJTU3d3UWtGQk1FSXNSVUZCTVVJc1EwRlFiMFE3TzBGQlUzaEVMRk5CUVU4N1FVRkRUQ3hqUVVGVkxGVkJRVU1zVVVGQlJDeEZRVUZqTzBGQlEzUkNPenRCUVVSelFpeFZRVWRzUWl4M1FrRkJkMElzVDBGQmVFSXNRMEZCWjBNc1VVRkJhRU1zVFVGQk9FTXNRMEZCUXl4RFFVRkVMRVZCUVVrN1FVRkRjRVFzWjBOQlFYZENMRWxCUVhoQ0xFTkJRVFpDTEZGQlFUZENMRVZCUkc5RU8wOUJRWFJFTzB0QlNGRTdPMEZCVVZZc1dVRkJVU3hWUVVGRExGRkJRVVFzUlVGQll6dEJRVU53UWl4VlFVRk5MR3RDUVVGclFpeDNRa0ZCZDBJc1QwRkJlRUlzUTBGQlowTXNVVUZCYUVNc1EwRkJiRUlzUTBGRVl6dEJRVVZ3UWl4VlFVRkpMRzlDUVVGdlFpeERRVUZETEVOQlFVUXNSVUZCU1R0QlFVTXhRaXhuUTBGQmQwSXNUVUZCZUVJc1EwRkJLMElzWlVGQkwwSXNSVUZCWjBRc1EwRkJhRVFzUlVGRU1FSTdUMEZCTlVJN1MwRkdUVHM3UVVGUFVpeGhRVUZUTEZsQlFVMDdPenRwUWtGRkswSXNRMEZCUXl4MVFrRkJSQ3hGUVVFd1FpeGpRVUV4UWpzN1FVRkdMMEk3UVVGRldpd3JRa0ZHV1R0QlFVVkpMSGREUVVaS08wRkJTMklzT0VKQlFYZENMRTFCUVhoQ0xFZEJRV2xETEVOQlFXcERPenM3UVVGTVlTeFZRVkZRTEdWQlFXVXNaVUZCWlN4TlFVRm1MRU5CVWxJN1FVRlRZaXhYUVVGTExFbEJRVWtzU1VGQlNTeERRVUZLTEVWQlFVOHNTVUZCU1N4WlFVRktMRVZCUVd0Q0xFZEJRV3hETEVWQlFYVkRPMEZCUTNKRExIVkNRVUZsTEVOQlFXWXNTVUZFY1VNN1QwRkJka003UzBGVVR6dEhRV2hDV0N4RFFWUjNSRHREUVVFelF5SXNJbVpwYkdVaU9pSmpjbVZoZEdVdGNtVnVaR1Z5TFhOMFpYQXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFF2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpWlhod2IzSjBJR1JsWm1GMWJIUWdablZ1WTNScGIyNGdZM0psWVhSbFVtVnVaR1Z5VTNSbGNDaHpkR0Z5ZEZKbGJtUmxja3h2YjNBcElIdGNiaUFnTHlvcVhHNGdJQ0FxSUZkbElIVnpaU0IwZDI4Z1lYSnlZWGx6TENCdmJtVWdabTl5SUhSb2FYTWdabkpoYldVZ1lXNWtJRzl1WlNCMGJ5QnhkV1YxWlNCbWIzSWdkR2hsWEc0Z0lDQXFJRzVsZUhRZ1puSmhiV1VzSUhKbGRYTnBibWNnWldGamFDQjBieUJoZG05cFpDQkhReTVjYmlBZ0lDb2dRSFI1Y0dVZ2UwRnljbUY1ZlZ4dUlDQWdLaTljYmlBZ2JHVjBJR1oxYm1OMGFXOXVjMVJ2VW5WdUlEMGdXMTA3WEc0Z0lHeGxkQ0JtZFc1amRHbHZibk5VYjFKMWJrNWxlSFJHY21GdFpTQTlJRnRkTzF4dVhHNGdJSEpsZEhWeWJpQjdYRzRnSUNBZ2MyTm9aV1IxYkdVNklDaGpZV3hzWW1GamF5a2dQVDRnZTF4dUlDQWdJQ0FnYzNSaGNuUlNaVzVrWlhKTWIyOXdLQ2s3WEc0Z0lDQWdJQ0F2THlCSlppQjBhR2x6SUdOaGJHeGlZV05ySUdsemJpZDBJR0ZzY21WaFpIa2djMk5vWldSMWJHVmtJSFJ2SUhKMWJpQnVaWGgwSUdaeVlXMWxYRzRnSUNBZ0lDQnBaaUFvWm5WdVkzUnBiMjV6Vkc5U2RXNU9aWGgwUm5KaGJXVXVhVzVrWlhoUFppaGpZV3hzWW1GamF5a2dQVDA5SUMweEtTQjdYRzRnSUNBZ0lDQWdJR1oxYm1OMGFXOXVjMVJ2VW5WdVRtVjRkRVp5WVcxbExuQjFjMmdvWTJGc2JHSmhZMnNwTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDBzWEc1Y2JpQWdJQ0JqWVc1alpXdzZJQ2hqWVd4c1ltRmpheWtnUFQ0Z2UxeHVJQ0FnSUNBZ1kyOXVjM1FnYVc1a1pYaFBaa05oYkd4aVlXTnJJRDBnWm5WdVkzUnBiMjV6Vkc5U2RXNU9aWGgwUm5KaGJXVXVhVzVrWlhoUFppaGpZV3hzWW1GamF5azdYRzRnSUNBZ0lDQnBaaUFvYVc1a1pYaFBaa05oYkd4aVlXTnJJQ0U5UFNBdE1Ta2dlMXh1SUNBZ0lDQWdJQ0JtZFc1amRHbHZibk5VYjFKMWJrNWxlSFJHY21GdFpTNXpjR3hwWTJVb2FXNWtaWGhQWmtOaGJHeGlZV05yTENBeEtUdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOUxGeHVYRzRnSUNBZ2NISnZZMlZ6Y3pvZ0tDa2dQVDRnZTF4dUlDQWdJQ0FnTHk4Z1UzZGhjQ0IwYUdseklHWnlZVzFsSUdGdVpDQnVaWGgwSUdaeVlXMWxJR0Z5Y21GNWN5QjBieUJoZG05cFpDQkhRMXh1SUNBZ0lDQWdXMloxYm1OMGFXOXVjMVJ2VW5WdUxDQm1kVzVqZEdsdmJuTlViMUoxYms1bGVIUkdjbUZ0WlYwZ1BTQmJablZ1WTNScGIyNXpWRzlTZFc1T1pYaDBSbkpoYldVc0lHWjFibU4wYVc5dWMxUnZVblZ1WFR0Y2JseHVJQ0FnSUNBZ0x5OGdRMnhsWVhJZ2JtVjRkQ0JtY21GdFpTQnNhWE4wWEc0Z0lDQWdJQ0JtZFc1amRHbHZibk5VYjFKMWJrNWxlSFJHY21GdFpTNXNaVzVuZEdnZ1BTQXdPMXh1WEc0Z0lDQWdJQ0F2THlCRmVHVmpkWFJsSUdGc2JDQnZaaUIwYUdseklHWnlZVzFsSjNNZ1puVnVZM1JwYjI1elhHNGdJQ0FnSUNCamIyNXpkQ0J1ZFcxVWFHbHpSbkpoYldVZ1BTQm1kVzVqZEdsdmJuTlViMUoxYmk1c1pXNW5kR2c3WEc0Z0lDQWdJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUc1MWJWUm9hWE5HY21GdFpUc2dhU3NyS1NCN1hHNGdJQ0FnSUNBZ0lHWjFibU4wYVc5dWMxUnZVblZ1VzJsZEtDazdYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVJQ0I5TzF4dWZTSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9mcmFtZXN5bmMvY3JlYXRlLXJlbmRlci1zdGVwLmpzXG4gKiogbW9kdWxlIGlkID0gMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBDQU1FTF9DQVNFX1BBVFRFUk4gPSAvKFthLXpdKShbQS1aXSkvZztcbnZhciBSRVBMQUNFX1RFTVBMQVRFID0gJyQxLSQyJztcbnZhciBIQVNfUEVSRk9STUFOQ0VfTk9XID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJyAmJiBwZXJmb3JtYW5jZS5ub3c7XG5cbi8qXG4gIEdldCB2YXIgdHlwZSBhcyBzdHJpbmdcbiAgXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtzdHJpbmddOiBSZXR1cm5zLCBmb3IgaW5zdGFuY2UgJ09iamVjdCcgaWYgW29iamVjdCBPYmplY3RdXG4qL1xudmFyIHZhclR5cGUgPSBmdW5jdGlvbiAodmFyaWFibGUpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YXJpYWJsZSkuc2xpY2UoOCwgLTEpO1xufTtcblxuLypcbiAgQ29udmVydCBjYW1lbENhc2UgdG8gZGFzaC1jYXNlXG5cbiAgQHBhcmFtIFtzdHJpbmddXG4gIEByZXR1cm4gW3N0cmluZ11cbiovXG52YXIgY2FtZWxUb0Rhc2ggPSBleHBvcnRzLmNhbWVsVG9EYXNoID0gZnVuY3Rpb24gKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoQ0FNRUxfQ0FTRV9QQVRURVJOLCBSRVBMQUNFX1RFTVBMQVRFKS50b0xvd2VyQ2FzZSgpO1xufTtcblxuLypcbiAgQ3JlYXRlIGEgZnVuY3Rpb24gc3RyaW5nXG5cbiAgJzIwcHgnLCAndHJhbnNsYXRlJyAtPiAndHJhbnNsYXRlKDIwcHgpJ1xuXG4gIEBwYXJhbSBbc3RyaW5nXVxuICBAcGFyYW0gW3N0cmluZ11cbiAgQHJldHVybiBbc3RyaW5nXVxuKi9cbnZhciBjcmVhdGVGdW5jdGlvblN0cmluZyA9IGV4cG9ydHMuY3JlYXRlRnVuY3Rpb25TdHJpbmcgPSBmdW5jdGlvbiAodmFsdWUsIHByZWZpeCkge1xuICByZXR1cm4gcHJlZml4ICsgJygnICsgdmFsdWUgKyAnKSc7XG59O1xuXG4vKlxuICBHZW5lcmF0ZSBjdXJyZW50IHRpbWVzdGFtcFxuICBcbiAgQHJldHVybiBbdGltZXN0YW1wXTogQ3VycmVudCBVTklYIHRpbWVzdGFtcFxuKi9cbnZhciBjdXJyZW50VGltZSA9IGV4cG9ydHMuY3VycmVudFRpbWUgPSBIQVNfUEVSRk9STUFOQ0VfTk9XID8gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gcGVyZm9ybWFuY2Uubm93KCk7XG59IDogZnVuY3Rpb24gKCkge1xuICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG59O1xuXG4vKlxuICBDaGVjayBpZiBvYmplY3QgaGFzIHByb3BlcnR5IGFuZCBpdCBpc24ndCB1bmRlZmluZWRcblxuICBAcGFyYW0gW29iamVjdF1cbiAgQHBhcmFtIFtzdHJpbmddXG4gIEByZXR1cm4gW2Jvb2xlYW5dXG4qL1xudmFyIGhhc1Byb3BlcnR5ID0gZXhwb3J0cy5oYXNQcm9wZXJ0eSA9IGZ1bmN0aW9uIChvYmplY3QsIHByb3BlcnR5TmFtZSkge1xuICByZXR1cm4gb2JqZWN0Lmhhc093blByb3BlcnR5KHByb3BlcnR5TmFtZSkgJiYgb2JqZWN0W3Byb3BlcnR5TmFtZV0gIT09IHVuZGVmaW5lZDtcbn07XG5cbi8qXG4gIElzIHV0aWxzIHZhciBhbiBhcnJheSA/IFxuICBcbiAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdXRpbHMudmFyVHlwZSA9PT0gJ0FycmF5J1xuKi9cbnZhciBpc0FycmF5ID0gZXhwb3J0cy5pc0FycmF5ID0gZnVuY3Rpb24gKGFycikge1xuICByZXR1cm4gdmFyVHlwZShhcnIpID09PSAnQXJyYXknO1xufTtcblxuLypcbiAgSXMgdXRpbHMgdmFyIGEgZnVuY3Rpb24gPyBcbiAgXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHV0aWxzLnZhclR5cGUgPT09ICdGdW5jdGlvbidcbiovXG52YXIgaXNGdW5jID0gZXhwb3J0cy5pc0Z1bmMgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB2YXJUeXBlKG9iaikgPT09ICdGdW5jdGlvbic7XG59O1xuXG4vKlxuICBJcyB1dGlscyB2YXIgYSBudW1iZXI/XG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2YgPT09ICdudW1iZXInXG4qL1xudmFyIGlzTnVtID0gZXhwb3J0cy5pc051bSA9IGZ1bmN0aW9uIChudW0pIHtcbiAgcmV0dXJuIHR5cGVvZiBudW0gPT09ICdudW1iZXInO1xufTtcblxuLypcbiAgSXMgdXRpbHMgdmFyIGFuIG9iamVjdD9cbiAgXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiA9PT0gJ29iamVjdCdcbiovXG52YXIgaXNPYmogPSBleHBvcnRzLmlzT2JqID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ29iamVjdCc7XG59O1xuXG4vKlxuICBJcyB1dGlscyBhIHJlbGF0aXZlIHZhbHVlIGFzc2lnbm1lbnQ/XG4gIFxuICBAcGFyYW0gW3N0cmluZ106IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IElmIHV0aWxzIGxvb2tzIGxpa2UgYSByZWxhdGl2ZSB2YWx1ZSBhc3NpZ25tZW50XG4qL1xudmFyIGlzUmVsYXRpdmVWYWx1ZSA9IGV4cG9ydHMuaXNSZWxhdGl2ZVZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mICYmIHZhbHVlLmluZGV4T2YoJz0nKSA+IDAgPyB0cnVlIDogZmFsc2U7XG59O1xuXG4vKlxuICBJcyB1dGlscyB2YXIgYSBzdHJpbmcgPyBcbiAgXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnXG4qL1xudmFyIGlzU3RyaW5nID0gZXhwb3J0cy5pc1N0cmluZyA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgcmV0dXJuIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnO1xufTtcblxuLypcbiAgU3BsaXQgY29tbWEtZGVsaW1pdGVkIHN0cmluZ1xuXG4gIFwiZm9vLGJhclwiIC0+IFtcImZvb1wiLCBcImJhclwiXVxuXG4gIEBwYXJhbSBbc3RyaW5nXVxuICBAcmV0dXJuIFthcnJheV1cbiovXG52YXIgc3BsaXRDb21tYURlbGltaXRlZCA9IGV4cG9ydHMuc3BsaXRDb21tYURlbGltaXRlZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gaXNTdHJpbmcodmFsdWUpID8gdmFsdWUuc3BsaXQoLyxcXHMqLykgOiBbdmFsdWVdO1xufTtcblxuLypcbiAgU3BsaXQgc3BhY2UtZGVsaW1pdGVkIHN0cmluZ1xuXG4gIFwiZm9vIGJhclwiIC0+IFtcImZvb1wiLCBcImJhclwiXVxuXG4gIEBwYXJhbSBbc3RyaW5nXVxuICBAcmV0dXJuIFthcnJheV1cbiovXG52YXIgc3BsaXRTcGFjZURlbGltaXRlZCA9IGV4cG9ydHMuc3BsaXRTcGFjZURlbGltaXRlZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gaXNTdHJpbmcodmFsdWUpID8gdmFsdWUuc3BsaXQoJyAnKSA6IFt2YWx1ZV07XG59O1xuXG4vKlxuICBDb252ZXJ0IG51bWJlciB0byB4IGRlY2ltYWwgcGxhY2VzXG5cbiAgQHBhcmFtIFtudW1iZXJdXG4gIEBwYXJhbSBbbnVtYmVyXVxuICBAcmV0dXJuIFtudW1iZXJdXG4qL1xudmFyIHRvRGVjaW1hbCA9IGV4cG9ydHMudG9EZWNpbWFsID0gZnVuY3Rpb24gKG51bSkge1xuICB2YXIgcHJlY2lzaW9uID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gMiA6IGFyZ3VtZW50c1sxXTtcblxuICBwcmVjaXNpb24gPSBNYXRoLnBvdygxMCwgcHJlY2lzaW9uKTtcbiAgcmV0dXJuIE1hdGgucm91bmQobnVtICogcHJlY2lzaW9uKSAvIHByZWNpc2lvbjtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12ZFhScGJITXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3TzBGQlFVRXNTVUZCVFN4eFFrRkJjVUlzYVVKQlFYSkNPMEZCUTA0c1NVRkJUU3h0UWtGQmJVSXNUMEZCYmtJN1FVRkRUaXhKUVVGTkxITkNRVUYxUWl4UFFVRlBMRmRCUVZBc1MwRkJkVUlzVjBGQmRrSXNTVUZCYzBNc1dVRkJXU3hIUVVGYU96czdPenM3T3p0QlFWRnVSU3hKUVVGTkxGVkJRVlVzVlVGQlF5eFJRVUZFTzFOQlFXTXNUMEZCVHl4VFFVRlFMRU5CUVdsQ0xGRkJRV3BDTEVOQlFUQkNMRWxCUVRGQ0xFTkJRU3RDTEZGQlFTOUNMRVZCUVhsRExFdEJRWHBETEVOQlFTdERMRU5CUVM5RExFVkJRV3RFTEVOQlFVTXNRMEZCUkR0RFFVRm9SVHM3T3pzN096czdRVUZSVkN4SlFVRk5MRzlEUVVGakxGVkJRVU1zVFVGQlJEdFRRVUZaTEU5QlFVOHNUMEZCVUN4RFFVRmxMR3RDUVVGbUxFVkJRVzFETEdkQ1FVRnVReXhGUVVGeFJDeFhRVUZ5UkR0RFFVRmFPenM3T3pzN096czdPenRCUVZkd1FpeEpRVUZOTEhORVFVRjFRaXhWUVVGRExFdEJRVVFzUlVGQlVTeE5RVUZTTzFOQlFYTkNMR1ZCUVZVN1EwRkJhRU03T3pzN096czdRVUZQTjBJc1NVRkJUU3h2UTBGQll5eHpRa0ZCYzBJN1UwRkJUU3haUVVGWkxFZEJRVm83UTBGQlRpeEhRVUV3UWp0VFFVRk5MRWxCUVVrc1NVRkJTaXhIUVVGWExFOUJRVmc3UTBGQlRqczdPenM3T3pzN08wRkJVM0JGTEVsQlFVMHNiME5CUVdNc1ZVRkJReXhOUVVGRUxFVkJRVk1zV1VGQlZEdFRRVUV3UWl4UFFVRlBMR05CUVZBc1EwRkJjMElzV1VGQmRFSXNTMEZCZFVNc1QwRkJUeXhaUVVGUUxFMUJRWGxDTEZOQlFYcENPME5CUVdwRk96czdPenM3T3p0QlFWRndRaXhKUVVGTkxEUkNRVUZWTEZWQlFVTXNSMEZCUkR0VFFVRlRMRkZCUVZFc1IwRkJVaXhOUVVGcFFpeFBRVUZxUWp0RFFVRlVPenM3T3pzN096dEJRVkZvUWl4SlFVRk5MREJDUVVGVExGVkJRVU1zUjBGQlJEdFRRVUZUTEZGQlFWRXNSMEZCVWl4TlFVRnBRaXhWUVVGcVFqdERRVUZVT3pzN096czdPenRCUVZGbUxFbEJRVTBzZDBKQlFWRXNWVUZCUXl4SFFVRkVPMU5CUVZNc1QwRkJUeXhIUVVGUUxFdEJRV1VzVVVGQlpqdERRVUZVT3pzN096czdPenRCUVZGa0xFbEJRVTBzZDBKQlFWRXNWVUZCUXl4SFFVRkVPMU5CUVZNc1QwRkJUeXhIUVVGUUxFdEJRV1VzVVVGQlpqdERRVUZVT3pzN096czdPenRCUVZGa0xFbEJRVTBzTkVOQlFXdENMRlZCUVVNc1MwRkJSRHRUUVVGWExFdEJRVU1zU1VGQlV5eE5RVUZOTEU5QlFVNHNTVUZCYVVJc1RVRkJUU3hQUVVGT0xFTkJRV01zUjBGQlpDeEpRVUZ4UWl4RFFVRnlRaXhIUVVFd1FpeEpRVUZ5UkN4SFFVRTBSQ3hMUVVFMVJEdERRVUZZT3pzN096czdPenRCUVZGNFFpeEpRVUZOTERoQ1FVRlhMRlZCUVVNc1IwRkJSRHRUUVVGVExFOUJRVThzUjBGQlVDeExRVUZsTEZGQlFXWTdRMEZCVkRzN096czdPenM3T3p0QlFWVnFRaXhKUVVGTkxHOUVRVUZ6UWl4VlFVRkRMRXRCUVVRN1UwRkJWeXhUUVVGVExFdEJRVlFzU1VGQmEwSXNUVUZCVFN4TFFVRk9MRU5CUVZrc1RVRkJXaXhEUVVGc1FpeEhRVUYzUXl4RFFVRkRMRXRCUVVRc1EwRkJlRU03UTBGQldEczdPenM3T3pzN096dEJRVlUxUWl4SlFVRk5MRzlFUVVGelFpeFZRVUZETEV0QlFVUTdVMEZCVnl4VFFVRlRMRXRCUVZRc1NVRkJhMElzVFVGQlRTeExRVUZPTEVOQlFWa3NSMEZCV2l4RFFVRnNRaXhIUVVGeFF5eERRVUZETEV0QlFVUXNRMEZCY2tNN1EwRkJXRHM3T3pzN096czdPMEZCVXpWQ0xFbEJRVTBzWjBOQlFWa3NWVUZCUXl4SFFVRkVMRVZCUVhkQ08wMUJRV3hDTEd0RlFVRlpMR2xDUVVGTk96dEJRVU12UXl4MVFrRkJXU3hKUVVGTkxGVkJRV3hDTEVOQlJDdERPMEZCUlM5RExGTkJRVThzUzBGQlN5eExRVUZNTEVOQlFWY3NUVUZCVFN4VFFVRk9MRU5CUVZnc1IwRkJPRUlzVTBGQk9VSXNRMEZHZDBNN1EwRkJlRUlpTENKbWFXeGxJam9pZFhScGJITXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFF2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpWTI5dWMzUWdRMEZOUlV4ZlEwRlRSVjlRUVZSVVJWSk9JRDBnTHloYllTMTZYU2tvVzBFdFdsMHBMMmM3WEc1amIyNXpkQ0JTUlZCTVFVTkZYMVJGVFZCTVFWUkZJRDBnSnlReExTUXlKenRjYm1OdmJuTjBJRWhCVTE5UVJWSkdUMUpOUVU1RFJWOU9UMWNnUFNBb2RIbHdaVzltSUhCbGNtWnZjbTFoYm1ObElDRTlQU0FuZFc1a1pXWnBibVZrSnlBbUppQndaWEptYjNKdFlXNWpaUzV1YjNjcE8xeHVYRzR2S2x4dUlDQkhaWFFnZG1GeUlIUjVjR1VnWVhNZ2MzUnlhVzVuWEc0Z0lGeHVJQ0JBY0dGeVlXMDZJRlpoY21saFlteGxJSFJ2SUhSbGMzUmNiaUFnUUhKbGRIVnliaUJiYzNSeWFXNW5YVG9nVW1WMGRYSnVjeXdnWm05eUlHbHVjM1JoYm1ObElDZFBZbXBsWTNRbklHbG1JRnR2WW1wbFkzUWdUMkpxWldOMFhWeHVLaTljYm1OdmJuTjBJSFpoY2xSNWNHVWdQU0FvZG1GeWFXRmliR1VwSUQwK0lFOWlhbVZqZEM1d2NtOTBiM1I1Y0dVdWRHOVRkSEpwYm1jdVkyRnNiQ2gyWVhKcFlXSnNaU2t1YzJ4cFkyVW9PQ3dnTFRFcE8xeHVYRzR2S2x4dUlDQkRiMjUyWlhKMElHTmhiV1ZzUTJGelpTQjBieUJrWVhOb0xXTmhjMlZjYmx4dUlDQkFjR0Z5WVcwZ1czTjBjbWx1WjExY2JpQWdRSEpsZEhWeWJpQmJjM1J5YVc1blhWeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQmpZVzFsYkZSdlJHRnphQ0E5SUNoemRISnBibWNwSUQwK0lITjBjbWx1Wnk1eVpYQnNZV05sS0VOQlRVVk1YME5CVTBWZlVFRlVWRVZTVGl3Z1VrVlFURUZEUlY5VVJVMVFURUZVUlNrdWRHOU1iM2RsY2tOaGMyVW9LVHRjYmx4dUx5cGNiaUFnUTNKbFlYUmxJR0VnWm5WdVkzUnBiMjRnYzNSeWFXNW5YRzVjYmlBZ0p6SXdjSGduTENBbmRISmhibk5zWVhSbEp5QXRQaUFuZEhKaGJuTnNZWFJsS0RJd2NIZ3BKMXh1WEc0Z0lFQndZWEpoYlNCYmMzUnlhVzVuWFZ4dUlDQkFjR0Z5WVcwZ1czTjBjbWx1WjExY2JpQWdRSEpsZEhWeWJpQmJjM1J5YVc1blhWeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQmpjbVZoZEdWR2RXNWpkR2x2YmxOMGNtbHVaeUE5SUNoMllXeDFaU3dnY0hKbFptbDRLU0E5UGlCZ0pIdHdjbVZtYVhoOUtDUjdkbUZzZFdWOUtXQTdYRzVjYmk4cVhHNGdJRWRsYm1WeVlYUmxJR04xY25KbGJuUWdkR2x0WlhOMFlXMXdYRzRnSUZ4dUlDQkFjbVYwZFhKdUlGdDBhVzFsYzNSaGJYQmRPaUJEZFhKeVpXNTBJRlZPU1ZnZ2RHbHRaWE4wWVcxd1hHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHTjFjbkpsYm5SVWFXMWxJRDBnU0VGVFgxQkZVa1pQVWsxQlRrTkZYMDVQVnlBL0lDZ3BJRDArSUhCbGNtWnZjbTFoYm1ObExtNXZkeWdwSURvZ0tDa2dQVDRnYm1WM0lFUmhkR1VvS1M1blpYUlVhVzFsS0NrN1hHNWNiaThxWEc0Z0lFTm9aV05ySUdsbUlHOWlhbVZqZENCb1lYTWdjSEp2Y0dWeWRIa2dZVzVrSUdsMElHbHpiaWQwSUhWdVpHVm1hVzVsWkZ4dVhHNGdJRUJ3WVhKaGJTQmJiMkpxWldOMFhWeHVJQ0JBY0dGeVlXMGdXM04wY21sdVoxMWNiaUFnUUhKbGRIVnliaUJiWW05dmJHVmhibDFjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYUdGelVISnZjR1Z5ZEhrZ1BTQW9iMkpxWldOMExDQndjbTl3WlhKMGVVNWhiV1VwSUQwK0lHOWlhbVZqZEM1b1lYTlBkMjVRY205d1pYSjBlU2h3Y205d1pYSjBlVTVoYldVcElDWW1JRzlpYW1WamRGdHdjbTl3WlhKMGVVNWhiV1ZkSUNFOVBTQjFibVJsWm1sdVpXUTdYRzVjYmk4cVhHNGdJRWx6SUhWMGFXeHpJSFpoY2lCaGJpQmhjbkpoZVNBL0lGeHVJQ0JjYmlBZ1FIQmhjbUZ0T2lCV1lYSnBZV0pzWlNCMGJ5QjBaWE4wWEc0Z0lFQnlaWFIxY200Z1cySnZiMnhsWVc1ZE9pQlNaWFIxY201eklIUnlkV1VnYVdZZ2RYUnBiSE11ZG1GeVZIbHdaU0E5UFQwZ0owRnljbUY1SjF4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCcGMwRnljbUY1SUQwZ0tHRnljaWtnUFQ0Z2RtRnlWSGx3WlNoaGNuSXBJRDA5UFNBblFYSnlZWGtuTzF4dVhHNHZLbHh1SUNCSmN5QjFkR2xzY3lCMllYSWdZU0JtZFc1amRHbHZiaUEvSUZ4dUlDQmNiaUFnUUhCaGNtRnRPaUJXWVhKcFlXSnNaU0IwYnlCMFpYTjBYRzRnSUVCeVpYUjFjbTRnVzJKdmIyeGxZVzVkT2lCU1pYUjFjbTV6SUhSeWRXVWdhV1lnZFhScGJITXVkbUZ5Vkhsd1pTQTlQVDBnSjBaMWJtTjBhVzl1SjF4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCcGMwWjFibU1nUFNBb2IySnFLU0E5UGlCMllYSlVlWEJsS0c5aWFpa2dQVDA5SUNkR2RXNWpkR2x2YmljN1hHNWNiaThxWEc0Z0lFbHpJSFYwYVd4eklIWmhjaUJoSUc1MWJXSmxjajljYmlBZ1hHNGdJRUJ3WVhKaGJUb2dWbUZ5YVdGaWJHVWdkRzhnZEdWemRGeHVJQ0JBY21WMGRYSnVJRnRpYjI5c1pXRnVYVG9nVW1WMGRYSnVjeUIwY25WbElHbG1JSFI1Y0dWdlppQTlQVDBnSjI1MWJXSmxjaWRjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYVhOT2RXMGdQU0FvYm5WdEtTQTlQaUIwZVhCbGIyWWdiblZ0SUQwOVBTQW5iblZ0WW1WeUp6dGNibHh1THlwY2JpQWdTWE1nZFhScGJITWdkbUZ5SUdGdUlHOWlhbVZqZEQ5Y2JpQWdYRzRnSUVCd1lYSmhiVG9nVm1GeWFXRmliR1VnZEc4Z2RHVnpkRnh1SUNCQWNtVjBkWEp1SUZ0aWIyOXNaV0Z1WFRvZ1VtVjBkWEp1Y3lCMGNuVmxJR2xtSUhSNWNHVnZaaUE5UFQwZ0oyOWlhbVZqZENkY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2FYTlBZbW9nUFNBb2IySnFLU0E5UGlCMGVYQmxiMllnYjJKcUlEMDlQU0FuYjJKcVpXTjBKenRjYmx4dUx5cGNiaUFnU1hNZ2RYUnBiSE1nWVNCeVpXeGhkR2wyWlNCMllXeDFaU0JoYzNOcFoyNXRaVzUwUDF4dUlDQmNiaUFnUUhCaGNtRnRJRnR6ZEhKcGJtZGRPaUJXWVhKcFlXSnNaU0IwYnlCMFpYTjBYRzRnSUVCeVpYUjFjbTRnVzJKdmIyeGxZVzVkT2lCSlppQjFkR2xzY3lCc2IyOXJjeUJzYVd0bElHRWdjbVZzWVhScGRtVWdkbUZzZFdVZ1lYTnphV2R1YldWdWRGeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnBjMUpsYkdGMGFYWmxWbUZzZFdVZ1BTQW9kbUZzZFdVcElEMCtJQ2gyWVd4MVpTQW1KaUIyWVd4MVpTNXBibVJsZUU5bUlDWW1JSFpoYkhWbExtbHVaR1Y0VDJZb0p6MG5LU0ErSURBcElEOGdkSEoxWlNBNklHWmhiSE5sTzF4dVhHNHZLbHh1SUNCSmN5QjFkR2xzY3lCMllYSWdZU0J6ZEhKcGJtY2dQeUJjYmlBZ1hHNGdJRUJ3WVhKaGJUb2dWbUZ5YVdGaWJHVWdkRzhnZEdWemRGeHVJQ0JBY21WMGRYSnVJRnRpYjI5c1pXRnVYVG9nVW1WMGRYSnVjeUIwY25WbElHbG1JSFI1Y0dWdlppQnpkSElnUFQwOUlDZHpkSEpwYm1jblhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHbHpVM1J5YVc1bklEMGdLSE4wY2lrZ1BUNGdkSGx3Wlc5bUlITjBjaUE5UFQwZ0ozTjBjbWx1WnljN1hHNWNiaThxWEc0Z0lGTndiR2wwSUdOdmJXMWhMV1JsYkdsdGFYUmxaQ0J6ZEhKcGJtZGNibHh1SUNCY0ltWnZieXhpWVhKY0lpQXRQaUJiWENKbWIyOWNJaXdnWENKaVlYSmNJbDFjYmx4dUlDQkFjR0Z5WVcwZ1czTjBjbWx1WjExY2JpQWdRSEpsZEhWeWJpQmJZWEp5WVhsZFhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElITndiR2wwUTI5dGJXRkVaV3hwYldsMFpXUWdQU0FvZG1Gc2RXVXBJRDArSUdselUzUnlhVzVuS0haaGJIVmxLU0EvSUhaaGJIVmxMbk53YkdsMEtDOHNYRnh6S2k4cElEb2dXM1poYkhWbFhUdGNibHh1THlwY2JpQWdVM0JzYVhRZ2MzQmhZMlV0WkdWc2FXMXBkR1ZrSUhOMGNtbHVaMXh1WEc0Z0lGd2labTl2SUdKaGNsd2lJQzArSUZ0Y0ltWnZiMXdpTENCY0ltSmhjbHdpWFZ4dVhHNGdJRUJ3WVhKaGJTQmJjM1J5YVc1blhWeHVJQ0JBY21WMGRYSnVJRnRoY25KaGVWMWNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdjM0JzYVhSVGNHRmpaVVJsYkdsdGFYUmxaQ0E5SUNoMllXeDFaU2tnUFQ0Z2FYTlRkSEpwYm1jb2RtRnNkV1VwSUQ4Z2RtRnNkV1V1YzNCc2FYUW9KeUFuS1NBNklGdDJZV3gxWlYwN1hHNWNiaThxWEc0Z0lFTnZiblpsY25RZ2JuVnRZbVZ5SUhSdklIZ2daR1ZqYVcxaGJDQndiR0ZqWlhOY2JseHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMWNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRYRzRnSUVCeVpYUjFjbTRnVzI1MWJXSmxjbDFjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnZEc5RVpXTnBiV0ZzSUQwZ0tHNTFiU3dnY0hKbFkybHphVzl1SUQwZ01pa2dQVDRnZTF4dUlDQndjbVZqYVhOcGIyNGdQU0F4TUNBcUtpQndjbVZqYVhOcGIyNDdYRzRnSUhKbGRIVnliaUJOWVhSb0xuSnZkVzVrS0c1MWJTQXFJSEJ5WldOcGMybHZiaWtnTHlCd2NtVmphWE5wYjI0N1hHNTlPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL3V0aWxzLmpzXG4gKiogbW9kdWxlIGlkID0gMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuY29tcGxleFN0cmluZyA9IGV4cG9ydHMuY29sb3IgPSBleHBvcnRzLmhzbGEgPSBleHBvcnRzLmhleCA9IGV4cG9ydHMucmdiYSA9IGV4cG9ydHMucmdiVW5pdCA9IGV4cG9ydHMuc2NhbGUgPSBleHBvcnRzLm51bWJlciA9IGV4cG9ydHMucHggPSBleHBvcnRzLnBlcmNlbnQgPSBleHBvcnRzLmRlZ3JlZXMgPSBleHBvcnRzLmFscGhhID0gdW5kZWZpbmVkO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NoaWxkVHlwZXMsIF9jaGlsZFR5cGVzMjsgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogVmFsdWUgdHlwZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIGFscGhhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogZGVncmVlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIGhleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIGhzbGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBwZXJjZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogcHhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiByZ2JVbml0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogcmdiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogc2NhbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cblxuXG52YXIgX2ZpbHRlcnMgPSByZXF1aXJlKCcuL2ZpbHRlcnMnKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIF91dGlsczIgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxuLy8gU3RyaW5nIHByb3BlcnRpZXNcbnZhciBSRUQgPSAnUmVkJztcbnZhciBHUkVFTiA9ICdHcmVlbic7XG52YXIgQkxVRSA9ICdCbHVlJztcbnZhciBBTFBIQSA9ICdBbHBoYSc7XG52YXIgSFVFID0gJ0h1ZSc7XG52YXIgU0FUVVJBVElPTiA9ICdTYXR1cmF0aW9uJztcbnZhciBMSUdIVE5FU1MgPSAnTGlnaHRuZXNzJztcblxuLy8gVGVtcGxhdGVzXG52YXIgcmdiYVRlbXBsYXRlID0gZnVuY3Rpb24gKGNvbG9ycykge1xuICByZXR1cm4gJ3JnYmEoJyArIGNvbG9yc1tSRURdICsgJywgJyArIGNvbG9yc1tHUkVFTl0gKyAnLCAnICsgY29sb3JzW0JMVUVdICsgJywgJyArIGNvbG9yc1tBTFBIQV0gKyAnKSc7XG59O1xudmFyIGhzbGFUZW1wbGF0ZSA9IGZ1bmN0aW9uIChjb2xvcnMpIHtcbiAgcmV0dXJuICdoc2xhKCcgKyBjb2xvcnNbSFVFXSArICcsICcgKyBjb2xvcnNbU0FUVVJBVElPTl0gKyAnLCAnICsgY29sb3JzW0xJR0hUTkVTU10gKyAnLCAnICsgY29sb3JzW0FMUEhBXSArICcpJztcbn07XG5cbi8vIFZhbHVlIHR5cGVzXG52YXIgYWxwaGEgPSBleHBvcnRzLmFscGhhID0ge1xuICBmaWx0ZXI6ICgwLCBfZmlsdGVycy5yZXN0cmljdEJldHdlZW4pKDAsIDEpXG59O1xuXG52YXIgZGVncmVlcyA9IGV4cG9ydHMuZGVncmVlcyA9ICgwLCBfdXRpbHMuY3JlYXRlVW5pdFR5cGUpKCdkZWcnKTtcbnZhciBwZXJjZW50ID0gZXhwb3J0cy5wZXJjZW50ID0gKDAsIF91dGlscy5jcmVhdGVVbml0VHlwZSkoJyUnKTtcbnZhciBweCA9IGV4cG9ydHMucHggPSAoMCwgX3V0aWxzLmNyZWF0ZVVuaXRUeXBlKSgncHgnKTtcblxudmFyIG51bWJlciA9IGV4cG9ydHMubnVtYmVyID0geyB0ZXN0OiBfdXRpbHMyLmlzTnVtIH07XG5cbnZhciBzY2FsZSA9IGV4cG9ydHMuc2NhbGUgPSB7XG4gIGRlZmF1bHQ6IDFcbn07XG5cbnZhciByZ2JVbml0ID0gZXhwb3J0cy5yZ2JVbml0ID0ge1xuICBmaWx0ZXI6ICgwLCBfZmlsdGVycy5jb21wb3NlKShcbiAgLy9odHRwOi8vY29kZXBlbi5pby9vc3VibGFrZS9mdWxsL3hHVlZhTi9cbiAgLy8gKHYsIHZhbHVlLCBhY3Rpb24pID0+IHtcbiAgLy8gICBpZiAoYWN0aW9uKSB7XG4gIC8vICAgICBjb25zdCBmcm9tQ29sb3IgPSBhY3Rpb24uZnJvbSAqIGFjdGlvbi5mcm9tO1xuICAvLyAgICAgY29uc3QgdG9Db2xvciA9IGFjdGlvbi50byAqIGFjdGlvbi50bztcbiAgLy8gICAgIHJldHVybiBNYXRoLnNxcnQoYWN0aW9uLnByb2dyZXNzICogKHRvQ29sb3IgLSBmcm9tQ29sb3IpICsgZnJvbUNvbG9yKTtcbiAgLy8gICB9XG5cbiAgLy8gICByZXR1cm4gdjtcbiAgLy8gfSxcbiAgKDAsIF9maWx0ZXJzLnJlc3RyaWN0QmV0d2VlbikoMCwgMjU1KSwgTWF0aC5yb3VuZClcbn07XG5cbnZhciByZ2JhID0gZXhwb3J0cy5yZ2JhID0ge1xuICBjaGlsZFR5cGVzOiAoX2NoaWxkVHlwZXMgPSB7fSwgX2NoaWxkVHlwZXNbUkVEXSA9IHJnYlVuaXQsIF9jaGlsZFR5cGVzW0dSRUVOXSA9IHJnYlVuaXQsIF9jaGlsZFR5cGVzW0JMVUVdID0gcmdiVW5pdCwgX2NoaWxkVHlwZXNbQUxQSEFdID0gYWxwaGEsIF9jaGlsZFR5cGVzKSxcblxuICB0ZXN0OiAoMCwgX3V0aWxzLmlzRmlyc3RDaGFycykoJ3JnYicpLFxuXG4gIHBhcnNlOiAoMCwgX3V0aWxzLnNwbGl0Q29sb3JWYWx1ZXMpKFtSRUQsIEdSRUVOLCBCTFVFLCBBTFBIQV0pLFxuXG4gIGNvbWJpbmU6IHJnYmFUZW1wbGF0ZVxufTtcblxudmFyIGhleCA9IGV4cG9ydHMuaGV4ID0gX2V4dGVuZHMoe30sIHJnYmEsIHtcblxuICB0ZXN0OiAoMCwgX3V0aWxzLmlzRmlyc3RDaGFycykoJyMnKSxcblxuICBwYXJzZTogZnVuY3Rpb24gKHYpIHtcbiAgICB2YXIgciA9IHZvaWQgMCxcbiAgICAgICAgZyA9IHZvaWQgMCxcbiAgICAgICAgYiA9IHZvaWQgMDtcblxuICAgIC8vIElmIHdlIGhhdmUgNiBjaGFyYWN0ZXJzLCBpZSAjRkYwMDAwXG4gICAgaWYgKHYubGVuZ3RoID4gNCkge1xuICAgICAgciA9IHYuc3Vic3RyKDEsIDIpO1xuICAgICAgZyA9IHYuc3Vic3RyKDMsIDIpO1xuICAgICAgYiA9IHYuc3Vic3RyKDUsIDIpO1xuXG4gICAgICAvLyBPciB3ZSBoYXZlIDMgY2hhcmFjdGVycywgaWUgI0YwMFxuICAgIH0gZWxzZSB7XG4gICAgICAgIHIgPSB2LnN1YnN0cigxLCAxKTtcbiAgICAgICAgZyA9IHYuc3Vic3RyKDIsIDEpO1xuICAgICAgICBiID0gdi5zdWJzdHIoMywgMSk7XG4gICAgICAgIHIgKz0gcjtcbiAgICAgICAgZyArPSBnO1xuICAgICAgICBiICs9IGI7XG4gICAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgUmVkOiBwYXJzZUludChyLCAxNiksXG4gICAgICBHcmVlbjogcGFyc2VJbnQoZywgMTYpLFxuICAgICAgQmx1ZTogcGFyc2VJbnQoYiwgMTYpLFxuICAgICAgQWxwaGE6IDFcbiAgICB9O1xuICB9XG59KTtcblxudmFyIGhzbGEgPSBleHBvcnRzLmhzbGEgPSB7XG4gIGNoaWxkVHlwZXM6IChfY2hpbGRUeXBlczIgPSB7fSwgX2NoaWxkVHlwZXMyW0hVRV0gPSBudW1iZXIsIF9jaGlsZFR5cGVzMltTQVRVUkFUSU9OXSA9IHBlcmNlbnQsIF9jaGlsZFR5cGVzMltMSUdIVE5FU1NdID0gcGVyY2VudCwgX2NoaWxkVHlwZXMyW0FMUEhBXSA9IGFscGhhLCBfY2hpbGRUeXBlczIpLFxuXG4gIHRlc3Q6ICgwLCBfdXRpbHMuaXNGaXJzdENoYXJzKSgnaHNsJyksXG5cbiAgcGFyc2U6ICgwLCBfdXRpbHMuc3BsaXRDb2xvclZhbHVlcykoW0hVRSwgU0FUVVJBVElPTiwgTElHSFRORVNTLCBBTFBIQV0pLFxuXG4gIGNvbWJpbmU6IGhzbGFUZW1wbGF0ZVxufTtcblxudmFyIGNvbG9yID0gZXhwb3J0cy5jb2xvciA9IHtcbiAgY2hpbGRUeXBlczogX2V4dGVuZHMoe30sIGhzbGEuY2hpbGRUeXBlcywgcmdiYS5jaGlsZFR5cGVzKSxcblxuICB0ZXN0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gcmdiYS50ZXN0KHZhbHVlKSB8fCBoZXgudGVzdCh2YWx1ZSkgfHwgaHNsYS50ZXN0KHZhbHVlKTtcbiAgfVxufTtcblxudmFyIEZMT0FUX1JFR0VYID0gLygtKT8oXFxkW1xcZFxcLl0qKS9nO1xudmFyIGdlbmVyYXRlVG9rZW4gPSBmdW5jdGlvbiAodG9rZW4pIHtcbiAgcmV0dXJuICckeycgKyB0b2tlbiArICd9Jztcbn07XG5cbnZhciBjb21wbGV4U3RyaW5nID0gZXhwb3J0cy5jb21wbGV4U3RyaW5nID0ge307XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlM5MGVYQmxjeTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3T3pzN096czdPenM3T3pzN08wRkJZVUU3TzBGQlEwRTdPMEZCUTBFN096dEJRVWRCTEVsQlFVMHNUVUZCVFN4TFFVRk9PMEZCUTA0c1NVRkJUU3hSUVVGUkxFOUJRVkk3UVVGRFRpeEpRVUZOTEU5QlFVOHNUVUZCVUR0QlFVTk9MRWxCUVUwc1VVRkJVU3hQUVVGU08wRkJRMDRzU1VGQlRTeE5RVUZOTEV0QlFVNDdRVUZEVGl4SlFVRk5MR0ZCUVdFc1dVRkJZanRCUVVOT0xFbEJRVTBzV1VGQldTeFhRVUZhT3pzN1FVRkhUaXhKUVVGTkxHVkJRV1VzVlVGQlF5eE5RVUZFTzIxQ1FVRnZRaXhQUVVGUExFZEJRVkFzVjBGQlowSXNUMEZCVHl4TFFVRlFMRmRCUVd0Q0xFOUJRVThzU1VGQlVDeFhRVUZwUWl4UFFVRlBMRXRCUVZBN1EwRkJka1U3UVVGRGNrSXNTVUZCVFN4bFFVRmxMRlZCUVVNc1RVRkJSRHR0UWtGQmIwSXNUMEZCVHl4SFFVRlFMRmRCUVdkQ0xFOUJRVThzVlVGQlVDeFhRVUYxUWl4UFFVRlBMRk5CUVZBc1YwRkJjMElzVDBGQlR5eExRVUZRTzBOQlFXcEdPenM3UVVGSFpDeEpRVUZOTEhkQ1FVRlJPMEZCUTI1Q0xGVkJRVkVzT0VKQlFXZENMRU5CUVdoQ0xFVkJRVzFDTEVOQlFXNUNMRU5CUVZJN1EwRkVWenM3UVVGSlRpeEpRVUZOTERSQ1FVRlZMREpDUVVGbExFdEJRV1lzUTBGQlZqdEJRVU5PTEVsQlFVMHNORUpCUVZVc01rSkJRV1VzUjBGQlppeERRVUZXTzBGQlEwNHNTVUZCVFN4clFrRkJTeXd5UWtGQlpTeEpRVUZtTEVOQlFVdzdPMEZCUlU0c1NVRkJUU3d3UWtGQlV5eEZRVUZGTEcxQ1FVRkdMRVZCUVZRN08wRkJSVTRzU1VGQlRTeDNRa0ZCVVR0QlFVTnVRaXhYUVVGVExFTkJRVlE3UTBGRVZ6czdRVUZKVGl4SlFVRk5MRFJDUVVGVk8wRkJRM0pDTEZWQlFWRTdPenM3T3pzN096czdPMEZCVjA0c1owTkJRV2RDTEVOQlFXaENMRVZCUVcxQ0xFZEJRVzVDTEVOQldFMHNSVUZaVGl4TFFVRkxMRXRCUVV3c1EwRmFSanREUVVSWE96dEJRV2xDVGl4SlFVRk5MSE5DUVVGUE8wRkJRMnhDTERaRFFVTkhMRTlCUVUwc2NVSkJRMDRzVTBGQlVTeHhRa0ZEVWl4UlFVRlBMSEZDUVVOUUxGTkJRVkVzYlVKQlNsZzdPMEZCVDBFc1VVRkJUU3g1UWtGQllTeExRVUZpTEVOQlFVNDdPMEZCUlVFc1UwRkJUeXcyUWtGQmFVSXNRMEZCUXl4SFFVRkVMRVZCUVUwc1MwRkJUaXhGUVVGaExFbEJRV0lzUlVGQmJVSXNTMEZCYmtJc1EwRkJha0lzUTBGQlVEczdRVUZGUVN4WFFVRlRMRmxCUVZRN1EwRmFWenM3UVVGbFRpeEpRVUZOTEdsRFFVTlNPenRCUVVWSUxGRkJRVTBzZVVKQlFXRXNSMEZCWWl4RFFVRk9PenRCUVVWQkxGTkJRVThzVlVGQlF5eERRVUZFTEVWQlFVODdRVUZEV2l4UlFVRkpMRlZCUVVvN1VVRkJUeXhWUVVGUU8xRkJRVlVzVlVGQlZqczdPMEZCUkZrc1VVRkpVaXhGUVVGRkxFMUJRVVlzUjBGQlZ5eERRVUZZTEVWQlFXTTdRVUZEYUVJc1ZVRkJTU3hGUVVGRkxFMUJRVVlzUTBGQlV5eERRVUZVTEVWQlFWa3NRMEZCV2l4RFFVRktMRU5CUkdkQ08wRkJSV2hDTEZWQlFVa3NSVUZCUlN4TlFVRkdMRU5CUVZNc1EwRkJWQ3hGUVVGWkxFTkJRVm9zUTBGQlNpeERRVVpuUWp0QlFVZG9RaXhWUVVGSkxFVkJRVVVzVFVGQlJpeERRVUZUTEVOQlFWUXNSVUZCV1N4RFFVRmFMRU5CUVVvN096dEJRVWhuUWl4TFFVRnNRaXhOUVUxUE8wRkJRMHdzV1VGQlNTeEZRVUZGTEUxQlFVWXNRMEZCVXl4RFFVRlVMRVZCUVZrc1EwRkJXaXhEUVVGS0xFTkJSRXM3UVVGRlRDeFpRVUZKTEVWQlFVVXNUVUZCUml4RFFVRlRMRU5CUVZRc1JVRkJXU3hEUVVGYUxFTkJRVW9zUTBGR1N6dEJRVWRNTEZsQlFVa3NSVUZCUlN4TlFVRkdMRU5CUVZNc1EwRkJWQ3hGUVVGWkxFTkJRVm9zUTBGQlNpeERRVWhMTzBGQlNVd3NZVUZCU3l4RFFVRk1MRU5CU2tzN1FVRkxUQ3hoUVVGTExFTkJRVXdzUTBGTVN6dEJRVTFNTEdGQlFVc3NRMEZCVEN4RFFVNUxPMDlCVGxBN08wRkJaVUVzVjBGQlR6dEJRVU5NTEZkQlFVc3NVMEZCVXl4RFFVRlVMRVZCUVZrc1JVRkJXaXhEUVVGTU8wRkJRMEVzWVVGQlR5eFRRVUZUTEVOQlFWUXNSVUZCV1N4RlFVRmFMRU5CUVZBN1FVRkRRU3haUVVGTkxGTkJRVk1zUTBGQlZDeEZRVUZaTEVWQlFWb3NRMEZCVGp0QlFVTkJMR0ZCUVU4c1EwRkJVRHRMUVVwR0xFTkJia0paTzBkQlFWQTdSVUZNU1RzN1FVRnBRMDRzU1VGQlRTeHpRa0ZCVHp0QlFVTnNRaXdyUTBGRFJ5eFBRVUZOTEhGQ1FVTk9MR05CUVdFc2MwSkJRMklzWVVGQldTeHpRa0ZEV2l4VFFVRlJMRzlDUVVwWU96dEJRVTlCTEZGQlFVMHNlVUpCUVdFc1MwRkJZaXhEUVVGT096dEJRVVZCTEZOQlFVOHNOa0pCUVdsQ0xFTkJRVU1zUjBGQlJDeEZRVUZOTEZWQlFVNHNSVUZCYTBJc1UwRkJiRUlzUlVGQk5rSXNTMEZCTjBJc1EwRkJha0lzUTBGQlVEczdRVUZGUVN4WFFVRlRMRmxCUVZRN1EwRmFWenM3UVVGbFRpeEpRVUZOTEhkQ1FVRlJPMEZCUTI1Q0xESkNRVU5MTEV0QlFVc3NWVUZCVEN4RlFVTkJMRXRCUVVzc1ZVRkJUQ3hEUVVaTU96dEJRVXRCTEZGQlFVMHNWVUZCUXl4TFFVRkVPMWRCUVZjc1MwRkJTeXhKUVVGTUxFTkJRVlVzUzBGQlZpeExRVUZ2UWl4SlFVRkpMRWxCUVVvc1EwRkJVeXhMUVVGVUxFTkJRWEJDTEVsQlFYVkRMRXRCUVVzc1NVRkJUQ3hEUVVGVkxFdEJRVllzUTBGQmRrTTdSMEZCV0R0RFFVNUxPenRCUVZWaUxFbEJRVTBzWTBGQll5eHJRa0ZCWkR0QlFVTk9MRWxCUVUwc1owSkJRV2RDTEZWQlFVTXNTMEZCUkR0VFFVRlhMRTlCUVU4c1MwRkJVQ3hIUVVGbExFZEJRV1k3UTBGQldEczdRVUZGWml4SlFVRk5MSGREUVVGblFpeEZRVUZvUWlJc0ltWnBiR1VpT2lKMGVYQmxjeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJdktpcGNiaUFxSUZaaGJIVmxJSFI1Y0dWelhHNGdLbHh1SUNvZ1lXeHdhR0ZjYmlBcUlHUmxaM0psWlhOY2JpQXFJR2hsZUZ4dUlDb2dhSE5zWVZ4dUlDb2djR1Z5WTJWdWRGeHVJQ29nY0hoY2JpQXFJSEpuWWxWdWFYUmNiaUFxSUhKbllseHVJQ29nYzJOaGJHVmNiaUFxTDF4dWFXMXdiM0owSUhzZ2NtVnpkSEpwWTNSQ1pYUjNaV1Z1TENCamIyMXdiM05sSUgwZ1puSnZiU0FuTGk5bWFXeDBaWEp6Snp0Y2JtbHRjRzl5ZENCN0lHTnlaV0YwWlZWdWFYUlVlWEJsTENCcGMwWnBjbk4wUTJoaGNuTXNJSE53YkdsMFEyOXNiM0pXWVd4MVpYTWdmU0JtY205dElDY3VMM1YwYVd4ekp6dGNibWx0Y0c5eWRDQjdJR2x6VG5WdElIMGdabkp2YlNBbkxpNHZhVzVqTDNWMGFXeHpKenRjYmx4dUx5OGdVM1J5YVc1bklIQnliM0JsY25ScFpYTmNibU52Ym5OMElGSkZSQ0E5SUNkU1pXUW5PMXh1WTI5dWMzUWdSMUpGUlU0Z1BTQW5SM0psWlc0bk8xeHVZMjl1YzNRZ1FreFZSU0E5SUNkQ2JIVmxKenRjYm1OdmJuTjBJRUZNVUVoQklEMGdKMEZzY0doaEp6dGNibU52Ym5OMElFaFZSU0E5SUNkSWRXVW5PMXh1WTI5dWMzUWdVMEZVVlZKQlZFbFBUaUE5SUNkVFlYUjFjbUYwYVc5dUp6dGNibU52Ym5OMElFeEpSMGhVVGtWVFV5QTlJQ2RNYVdkb2RHNWxjM01uTzF4dVhHNHZMeUJVWlcxd2JHRjBaWE5jYm1OdmJuTjBJSEpuWW1GVVpXMXdiR0YwWlNBOUlDaGpiMnh2Y25NcElEMCtJR0J5WjJKaEtDUjdZMjlzYjNKelcxSkZSRjE5TENBa2UyTnZiRzl5YzF0SFVrVkZUbDE5TENBa2UyTnZiRzl5YzF0Q1RGVkZYWDBzSUNSN1kyOXNiM0p6VzBGTVVFaEJYWDBwWUR0Y2JtTnZibk4wSUdoemJHRlVaVzF3YkdGMFpTQTlJQ2hqYjJ4dmNuTXBJRDArSUdCb2MyeGhLQ1I3WTI5c2IzSnpXMGhWUlYxOUxDQWtlMk52Ykc5eWMxdFRRVlJWVWtGVVNVOU9YWDBzSUNSN1kyOXNiM0p6VzB4SlIwaFVUa1ZUVTExOUxDQWtlMk52Ykc5eWMxdEJURkJJUVYxOUtXQTdYRzVjYmk4dklGWmhiSFZsSUhSNWNHVnpYRzVsZUhCdmNuUWdZMjl1YzNRZ1lXeHdhR0VnUFNCN1hHNGdJR1pwYkhSbGNqb2djbVZ6ZEhKcFkzUkNaWFIzWldWdUtEQXNJREVwWEc1OU8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ1pHVm5jbVZsY3lBOUlHTnlaV0YwWlZWdWFYUlVlWEJsS0Nka1pXY25LVHRjYm1WNGNHOXlkQ0JqYjI1emRDQndaWEpqWlc1MElEMGdZM0psWVhSbFZXNXBkRlI1Y0dVb0p5VW5LVHRjYm1WNGNHOXlkQ0JqYjI1emRDQndlQ0E5SUdOeVpXRjBaVlZ1YVhSVWVYQmxLQ2R3ZUNjcE8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ2JuVnRZbVZ5SUQwZ2V5QjBaWE4wT2lCcGMwNTFiU0I5TzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnYzJOaGJHVWdQU0I3WEc0Z0lHUmxabUYxYkhRNklERmNibjA3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0J5WjJKVmJtbDBJRDBnZTF4dUlDQm1hV3gwWlhJNklHTnZiWEJ2YzJVb1hHNGdJQ0FnTHk5b2RIUndPaTh2WTI5a1pYQmxiaTVwYnk5dmMzVmliR0ZyWlM5bWRXeHNMM2hIVmxaaFRpOWNiaUFnSUNBdkx5QW9kaXdnZG1Gc2RXVXNJR0ZqZEdsdmJpa2dQVDRnZTF4dUlDQWdJQzh2SUNBZ2FXWWdLR0ZqZEdsdmJpa2dlMXh1SUNBZ0lDOHZJQ0FnSUNCamIyNXpkQ0JtY205dFEyOXNiM0lnUFNCaFkzUnBiMjR1Wm5KdmJTQXFJR0ZqZEdsdmJpNW1jbTl0TzF4dUlDQWdJQzh2SUNBZ0lDQmpiMjV6ZENCMGIwTnZiRzl5SUQwZ1lXTjBhVzl1TG5SdklDb2dZV04wYVc5dUxuUnZPMXh1SUNBZ0lDOHZJQ0FnSUNCeVpYUjFjbTRnVFdGMGFDNXpjWEowS0dGamRHbHZiaTV3Y205bmNtVnpjeUFxSUNoMGIwTnZiRzl5SUMwZ1puSnZiVU52Ykc5eUtTQXJJR1p5YjIxRGIyeHZjaWs3WEc0Z0lDQWdMeThnSUNCOVhHNWNiaUFnSUNBdkx5QWdJSEpsZEhWeWJpQjJPMXh1SUNBZ0lDOHZJSDBzWEc0Z0lDQWdjbVZ6ZEhKcFkzUkNaWFIzWldWdUtEQXNJREkxTlNrc1hHNGdJQ0FnVFdGMGFDNXliM1Z1WkZ4dUlDQXBYRzU5TzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnY21kaVlTQTlJSHRjYmlBZ1kyaHBiR1JVZVhCbGN6b2dlMXh1SUNBZ0lGdFNSVVJkT2lCeVoySlZibWwwTEZ4dUlDQWdJRnRIVWtWRlRsMDZJSEpuWWxWdWFYUXNYRzRnSUNBZ1cwSk1WVVZkT2lCeVoySlZibWwwTEZ4dUlDQWdJRnRCVEZCSVFWMDZJR0ZzY0doaFhHNGdJSDBzWEc1Y2JpQWdkR1Z6ZERvZ2FYTkdhWEp6ZEVOb1lYSnpLQ2R5WjJJbktTeGNibHh1SUNCd1lYSnpaVG9nYzNCc2FYUkRiMnh2Y2xaaGJIVmxjeWhiVWtWRUxDQkhVa1ZGVGl3Z1FreFZSU3dnUVV4UVNFRmRLU3hjYmx4dUlDQmpiMjFpYVc1bE9pQnlaMkpoVkdWdGNHeGhkR1ZjYm4wN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCb1pYZ2dQU0I3WEc0Z0lDNHVMbkpuWW1Fc1hHNWNiaUFnZEdWemREb2dhWE5HYVhKemRFTm9ZWEp6S0Njakp5a3NYRzVjYmlBZ2NHRnljMlU2SUNoMktTQTlQaUI3WEc0Z0lDQWdiR1YwSUhJc0lHY3NJR0k3WEc1Y2JpQWdJQ0F2THlCSlppQjNaU0JvWVhabElEWWdZMmhoY21GamRHVnljeXdnYVdVZ0kwWkdNREF3TUZ4dUlDQWdJR2xtSUNoMkxteGxibWQwYUNBK0lEUXBJSHRjYmlBZ0lDQWdJSElnUFNCMkxuTjFZbk4wY2lneExDQXlLVHRjYmlBZ0lDQWdJR2NnUFNCMkxuTjFZbk4wY2lnekxDQXlLVHRjYmlBZ0lDQWdJR0lnUFNCMkxuTjFZbk4wY2lnMUxDQXlLVHRjYmx4dUlDQWdJQzh2SUU5eUlIZGxJR2hoZG1VZ015QmphR0Z5WVdOMFpYSnpMQ0JwWlNBalJqQXdYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUhJZ1BTQjJMbk4xWW5OMGNpZ3hMQ0F4S1R0Y2JpQWdJQ0FnSUdjZ1BTQjJMbk4xWW5OMGNpZ3lMQ0F4S1R0Y2JpQWdJQ0FnSUdJZ1BTQjJMbk4xWW5OMGNpZ3pMQ0F4S1R0Y2JpQWdJQ0FnSUhJZ0t6MGdjanRjYmlBZ0lDQWdJR2NnS3owZ1p6dGNiaUFnSUNBZ0lHSWdLejBnWWp0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J5WlhSMWNtNGdlMXh1SUNBZ0lDQWdVbVZrT2lCd1lYSnpaVWx1ZENoeUxDQXhOaWtzWEc0Z0lDQWdJQ0JIY21WbGJqb2djR0Z5YzJWSmJuUW9aeXdnTVRZcExGeHVJQ0FnSUNBZ1FteDFaVG9nY0dGeWMyVkpiblFvWWl3Z01UWXBMRnh1SUNBZ0lDQWdRV3h3YUdFNklERmNiaUFnSUNCOU8xeHVJQ0I5WEc1OU8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ2FITnNZU0E5SUh0Y2JpQWdZMmhwYkdSVWVYQmxjem9nZTF4dUlDQWdJRnRJVlVWZE9pQnVkVzFpWlhJc1hHNGdJQ0FnVzFOQlZGVlNRVlJKVDA1ZE9pQndaWEpqWlc1MExGeHVJQ0FnSUZ0TVNVZElWRTVGVTFOZE9pQndaWEpqWlc1MExGeHVJQ0FnSUZ0QlRGQklRVjA2SUdGc2NHaGhYRzRnSUgwc1hHNWNiaUFnZEdWemREb2dhWE5HYVhKemRFTm9ZWEp6S0Nkb2Myd25LU3hjYmx4dUlDQndZWEp6WlRvZ2MzQnNhWFJEYjJ4dmNsWmhiSFZsY3loYlNGVkZMQ0JUUVZSVlVrRlVTVTlPTENCTVNVZElWRTVGVTFNc0lFRk1VRWhCWFNrc1hHNWNiaUFnWTI5dFltbHVaVG9nYUhOc1lWUmxiWEJzWVhSbFhHNTlPMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdZMjlzYjNJZ1BTQjdYRzRnSUdOb2FXeGtWSGx3WlhNNklIdGNiaUFnSUNBdUxpNW9jMnhoTG1Ob2FXeGtWSGx3WlhNc1hHNGdJQ0FnTGk0dWNtZGlZUzVqYUdsc1pGUjVjR1Z6WEc0Z0lIMHNYRzVjYmlBZ2RHVnpkRG9nS0haaGJIVmxLU0E5UGlCeVoySmhMblJsYzNRb2RtRnNkV1VwSUh4OElHaGxlQzUwWlhOMEtIWmhiSFZsS1NCOGZDQm9jMnhoTG5SbGMzUW9kbUZzZFdVcFhHNTlPMXh1WEc1Y2JtTnZibk4wSUVaTVQwRlVYMUpGUjBWWUlEMGdMeWd0S1Q4b1hGeGtXMXhjWkZ4Y0xsMHFLUzluTzF4dVkyOXVjM1FnWjJWdVpYSmhkR1ZVYjJ0bGJpQTlJQ2gwYjJ0bGJpa2dQVDRnSnlSN0p5QXJJSFJ2YTJWdUlDc2dKMzBuTzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnWTI5dGNHeGxlRk4wY21sdVp5QTlJSHRjYmx4dWZUdGNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUvdHlwZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAyNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5jcmVhdGVEZWxpbWl0ZWQgPSBleHBvcnRzLmdldENvbG9yVmFsdWVzID0gZXhwb3J0cy5maW5kVmFsdWVBbmRVbml0ID0gZXhwb3J0cy5jcmVhdGVVbml0VHlwZSA9IGV4cG9ydHMuaXNGaXJzdENoYXJzID0gZXhwb3J0cy5jb250YWlucyA9IHVuZGVmaW5lZDtcbmV4cG9ydHMuc3BsaXRDb2xvclZhbHVlcyA9IHNwbGl0Q29sb3JWYWx1ZXM7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxudmFyIF9maWx0ZXJzID0gcmVxdWlyZSgnLi9maWx0ZXJzJyk7XG5cbi8qKlxuICogIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgY2hlY2sgYW55IGFyZ3VtZW50IGZvciBgdGVybWBcbiAqIGBjb250YWlucygnbmVlZGxlJykoJ2hheXN0YWNrJylgXG4gKi9cbnZhciBjb250YWlucyA9IGV4cG9ydHMuY29udGFpbnMgPSBmdW5jdGlvbiAodGVybSkge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gKDAsIF91dGlscy5pc1N0cmluZykodGVybSkgJiYgdi5pbmRleE9mKHRlcm0pICE9PSAtMTtcbiAgfTtcbn07XG5cbi8qKlxuICogIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgY2hlY2sgdG8gc2VlIGlmIGFuIGFyZ3VtZW50IGlzXG4gKiAgdGhlIGZpcnN0IGNoYXJhY3RlcnMgaW4gdGhlIHByb3ZpZGVkIGB0ZXJtYFxuICogYGlzRmlyc3RDaGFycygnbmVlZGxlJykoJ2hheXN0YWNrJylgXG4gKi9cbnZhciBpc0ZpcnN0Q2hhcnMgPSBleHBvcnRzLmlzRmlyc3RDaGFycyA9IGZ1bmN0aW9uICh0ZXJtKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiAoMCwgX3V0aWxzLmlzU3RyaW5nKSh0ZXJtKSAmJiB2LmluZGV4T2YodGVybSkgPT09IDA7XG4gIH07XG59O1xuXG4vKipcbiAqIENyZWF0ZSBhIHVuaXQgdmFsdWUgdHlwZVxuICovXG52YXIgY3JlYXRlVW5pdFR5cGUgPSBleHBvcnRzLmNyZWF0ZVVuaXRUeXBlID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgcmV0dXJuIHtcbiAgICB0ZXN0OiBjb250YWlucyh0eXBlKSxcbiAgICBwYXJzZTogcGFyc2VGbG9hdCxcbiAgICBmaWx0ZXI6ICgwLCBfZmlsdGVycy5hcHBlbmRVbml0KSh0eXBlKVxuICB9O1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCB3aWxsIHNwbGl0IGNvbG9yXG4gKiB2YWx1ZXMgZnJvbSBzdHJpbmcgaW50byBhbiBvYmplY3Qgb2YgcHJvcGVydGllc1xuICogYHNwbGl0Q29sb3JWYWx1ZXMoWydSZWQnLCAnR3JlZW4nLCAnQmx1ZSddKSgncmdiYSgwLDAsMCknKWBcbiAqL1xuZnVuY3Rpb24gc3BsaXRDb2xvclZhbHVlcyh0ZXJtcykge1xuICB2YXIgbnVtVGVybXMgPSB0ZXJtcy5sZW5ndGg7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgdmFyIHZhbHVlcyA9IHt9O1xuICAgIHZhciB2YWx1ZXNBcnJheSA9ICgwLCBfdXRpbHMuc3BsaXRDb21tYURlbGltaXRlZCkoKDAsIF91dGlscy5nZXRWYWx1ZUZyb21GdW5jdGlvblN0cmluZykodikpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1UZXJtczsgaSsrKSB7XG4gICAgICB2YWx1ZXNbdGVybXNbaV1dID0gdmFsdWVzQXJyYXlbaV0gIT09IHVuZGVmaW5lZCA/IHBhcnNlRmxvYXQodmFsdWVzQXJyYXlbaV0pIDogMTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWVzO1xuICB9O1xufVxuXG4vKlxuICBTcGxpdCBhIHZhbHVlIGludG8gYSB2YWx1ZS91bml0IG9iamVjdFxuICBcbiAgICBcIjIwMHB4XCIgLT4geyB2YWx1ZTogMjAwLCB1bml0OiBcInB4XCIgfVxuICAgIFxuICBAcGFyYW0gW3N0cmluZ106IFZhbHVlIHRvIHNwbGl0XG4gIEByZXR1cm4gW29iamVjdF06IE9iamVjdCB3aXRoIHZhbHVlIGFuZCB1bml0IHByb3BzXG4qL1xudmFyIGZpbmRWYWx1ZUFuZFVuaXQgPSBleHBvcnRzLmZpbmRWYWx1ZUFuZFVuaXQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgaWYgKHZhbHVlLm1hdGNoKSB7XG4gICAgdmFyIHNwbGl0VmFsdWUgPSB2YWx1ZS5tYXRjaCgvKC0/XFxkKlxcLj9cXGQqKSguKikvKTtcblxuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogcGFyc2VGbG9hdChzcGxpdFZhbHVlWzFdKSxcbiAgICAgIHVuaXQ6IHNwbGl0VmFsdWVbMl1cbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB7IHZhbHVlOiB2YWx1ZSB9O1xuICB9XG59O1xuXG4vKlxuICBTcGxpdCBjb2xvciBzdHJpbmcgaW50byBtYXAgb2YgY29sb3IgcHJvcGVydGllc1xuXG4gIFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwKVwiLCBbXCJSZWRcIiwgJ0dyZWVuXCIsIFwiQmx1ZVwiLCBcIkFscGhhXCJdXG5cbiAgeyBSZWQ6IDI1NS4uLiB9XG4qL1xudmFyIGdldENvbG9yVmFsdWVzID0gZXhwb3J0cy5nZXRDb2xvclZhbHVlcyA9IGZ1bmN0aW9uICh2YWx1ZSwgY29sb3JUZXJtcykge1xuICB2YXIgbnVtQ29sb3JUZXJtcyA9IGNvbG9yVGVybXMubGVuZ3RoO1xuICB2YXIgY29sb3JWYWx1ZXMgPSB7fTtcbiAgdmFyIGNvbG9ycyA9ICgwLCBfdXRpbHMuc3BsaXRDb21tYURlbGltaXRlZCkoKDAsIF91dGlscy5nZXRWYWx1ZUZyb21GdW5jdGlvblN0cmluZykodmFsdWUpKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IG51bUNvbG9yVGVybXM7IGkrKykge1xuICAgIGNvbG9yVmFsdWVzW2NvbG9yVGVybXNbaV1dID0gY29sb3JzW2ldICE9PSB1bmRlZmluZWQgPyBjb2xvcnNbaV0gOiAxO1xuICB9XG5cbiAgcmV0dXJuIGNvbG9yVmFsdWVzO1xufTtcblxuLypcbiAgR2V0IHZhbHVlIGZyb20gZnVuY3Rpb24gc3RyaW5nXG5cbiAgXCJ0cmFuc2xhdGVYKDIwcHgpXCIgLT4gXCIyMHB4XCJcbiovXG4vLyBleHBvcnQgY29uc3QgZ2V0VmFsdWVGcm9tRnVuY3Rpb25TdHJpbmcgPSAodmFsdWUpID0+IHZhbHVlLnN1YnN0cmluZyh2YWx1ZS5pbmRleE9mKCcoJykgKyAxLCB2YWx1ZS5sYXN0SW5kZXhPZignKScpKTtcblxudmFyIGNyZWF0ZURlbGltaXRlZCA9IGV4cG9ydHMuY3JlYXRlRGVsaW1pdGVkID0gZnVuY3Rpb24gKHZhbHVlcywgdGVybXMsIGRlbGltaXRlciwgY2hvcCkge1xuICB2YXIgbnVtVGVybXMgPSB0ZXJtcy5sZW5ndGg7XG4gIHZhciBjb21iaW5lZCA9ICcnO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtVGVybXM7IGkrKykge1xuICAgIHZhciB0ZXJtID0gdGVybXNbaV07XG4gICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eSh0ZXJtKSkge1xuICAgICAgY29tYmluZWQgKz0gdmFsdWVzW3Rlcm1dICsgZGVsaW1pdGVyO1xuICAgIH1cbiAgfVxuXG4gIGlmIChjaG9wKSB7XG4gICAgY29tYmluZWQgPSBjb21iaW5lZC5zbGljZSgwLCAtY2hvcCk7XG4gIH1cblxuICByZXR1cm4gY29tYmluZWQ7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTOTFkR2xzY3k1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPMUZCYjBOblFqczdRVUZ3UTJoQ096dEJRVU5CT3pzN096czdRVUZOVHl4SlFVRk5MRGhDUVVGWExGVkJRVU1zU1VGQlJEdFRRVUZWTEZWQlFVTXNRMEZCUkN4RlFVRlBPMEZCUTNaRExGZEJRVkVzY1VKQlFWTXNTVUZCVkN4TFFVRnJRaXhGUVVGRkxFOUJRVVlzUTBGQlZTeEpRVUZXTEUxQlFXOUNMRU5CUVVNc1EwRkJSQ3hEUVVSUU8wZEJRVkE3UTBGQlZqczdPenM3T3p0QlFWTnFRaXhKUVVGTkxITkRRVUZsTEZWQlFVTXNTVUZCUkR0VFFVRlZMRlZCUVVNc1EwRkJSQ3hGUVVGUE8wRkJRek5ETEZkQlFWRXNjVUpCUVZNc1NVRkJWQ3hMUVVGclFpeEZRVUZGTEU5QlFVWXNRMEZCVlN4SlFVRldMRTFCUVc5Q0xFTkJRWEJDTEVOQlJHbENPMGRCUVZBN1EwRkJWanM3T3pzN1FVRlBja0lzU1VGQlRTd3dRMEZCYVVJc1ZVRkJReXhKUVVGRUxFVkJRVlU3UVVGRGRFTXNVMEZCVHp0QlFVTk1MRlZCUVUwc1UwRkJVeXhKUVVGVUxFTkJRVTQ3UVVGRFFTeFhRVUZQTEZWQlFWQTdRVUZEUVN4WlFVRlJMSGxDUVVGWExFbEJRVmdzUTBGQlVqdEhRVWhHTEVOQlJITkRPME5CUVZZN096czdPenM3UVVGaGRrSXNVMEZCVXl4blFrRkJWQ3hEUVVFd1FpeExRVUV4UWl4RlFVRnBRenRCUVVOMFF5eE5RVUZOTEZkQlFWY3NUVUZCVFN4TlFVRk9MRU5CUkhGQ096dEJRVWQwUXl4VFFVRlBMRlZCUVZVc1EwRkJWaXhGUVVGaE8wRkJRMnhDTEZGQlFVMHNVMEZCVXl4RlFVRlVMRU5CUkZrN1FVRkZiRUlzVVVGQlRTeGpRVUZqTEdkRFFVRnZRaXgxUTBGQk1rSXNRMEZCTTBJc1EwRkJjRUlzUTBGQlpDeERRVVpaT3p0QlFVbHNRaXhUUVVGTExFbEJRVWtzU1VGQlNTeERRVUZLTEVWQlFVOHNTVUZCU1N4UlFVRktMRVZCUVdNc1IwRkJPVUlzUlVGQmJVTTdRVUZEYWtNc1lVRkJUeXhOUVVGTkxFTkJRVTRzUTBGQlVDeEpRVUZ0UWl4WFFVRkRMRU5CUVZrc1EwRkJXaXhOUVVGdFFpeFRRVUZ1UWl4SFFVRm5ReXhYUVVGWExGbEJRVmtzUTBGQldpeERRVUZZTEVOQlFXcERMRWRCUVRoRUxFTkJRVGxFTEVOQlJHTTdTMEZCYmtNN08wRkJTVUVzVjBGQlR5eE5RVUZRTEVOQlVtdENPMGRCUVdJc1EwRklLMEk3UTBGQmFrTTdPenM3T3pzN096czdRVUYxUWtFc1NVRkJUU3c0UTBGQmJVSXNWVUZCUXl4TFFVRkVMRVZCUVZjN1FVRkRla01zVFVGQlNTeE5RVUZOTEV0QlFVNHNSVUZCWVR0QlFVTm1MRkZCUVUwc1lVRkJZU3hOUVVGTkxFdEJRVTRzUTBGQldTeHRRa0ZCV2l4RFFVRmlMRU5CUkZNN08wRkJSMllzVjBGQlR6dEJRVU5NTEdGQlFVOHNWMEZCVnl4WFFVRlhMRU5CUVZnc1EwRkJXQ3hEUVVGUU8wRkJRMEVzV1VGQlR5eFhRVUZYTEVOQlFWZ3NRMEZCVUR0TFFVWkdMRU5CU0dVN1IwRkJha0lzVFVGUFR6dEJRVU5NTEZkQlFVOHNSVUZCUlN4WlFVRkdMRVZCUVZBc1EwRkVTenRIUVZCUU8wTkJSRGhDT3pzN096czdPenM3UVVGdlFucENMRWxCUVUwc01FTkJRV2xDTEZWQlFVTXNTMEZCUkN4RlFVRlJMRlZCUVZJc1JVRkJkVUk3UVVGRGJrUXNUVUZCVFN4blFrRkJaMElzVjBGQlZ5eE5RVUZZTEVOQlJEWkNPMEZCUlc1RUxFMUJRVTBzWTBGQll5eEZRVUZrTEVOQlJqWkRPMEZCUjI1RUxFMUJRVTBzVTBGQlV5eG5RMEZCYjBJc2RVTkJRVEpDTEV0QlFUTkNMRU5CUVhCQ0xFTkJRVlFzUTBGSU5rTTdPMEZCUzI1RUxFOUJRVXNzU1VGQlNTeEpRVUZKTEVOQlFVb3NSVUZCVHl4SlFVRkpMR0ZCUVVvc1JVRkJiVUlzUjBGQmJrTXNSVUZCZDBNN1FVRkRkRU1zWjBKQlFWa3NWMEZCVnl4RFFVRllMRU5CUVZvc1NVRkJOa0lzVFVGQlF5eERRVUZQTEVOQlFWQXNUVUZCWXl4VFFVRmtMRWRCUVRKQ0xFOUJRVThzUTBGQlVDeERRVUUxUWl4SFFVRjNReXhEUVVGNFF5eERRVVJUTzBkQlFYaERPenRCUVVsQkxGTkJRVThzVjBGQlVDeERRVlJ0UkR0RFFVRjJRanM3T3pzN096czdPMEZCYjBKMlFpeEpRVUZOTERSRFFVRnJRaXhWUVVGRExFMUJRVVFzUlVGQlV5eExRVUZVTEVWQlFXZENMRk5CUVdoQ0xFVkJRVEpDTEVsQlFUTkNMRVZCUVc5RE8wRkJRMnBGTEUxQlFVMHNWMEZCVnl4TlFVRk5MRTFCUVU0c1EwRkVaMFE3UVVGRmFrVXNUVUZCU1N4WFFVRlhMRVZCUVZnc1EwRkdOa1E3TzBGQlNXcEZMRTlCUVVzc1NVRkJTU3hKUVVGSkxFTkJRVW9zUlVGQlR5eEpRVUZKTEZGQlFVb3NSVUZCWXl4SFFVRTVRaXhGUVVGdFF6dEJRVU5xUXl4UlFVRk5MRTlCUVU4c1RVRkJUU3hEUVVGT0xFTkJRVkFzUTBGRU1rSTdRVUZGYWtNc1VVRkJTU3hQUVVGUExHTkJRVkFzUTBGQmMwSXNTVUZCZEVJc1EwRkJTaXhGUVVGcFF6dEJRVU12UWl4clFrRkJXU3hQUVVGUExFbEJRVkFzU1VGQlpTeFRRVUZtTEVOQlJHMUNPMHRCUVdwRE8wZEJSa1k3TzBGQlQwRXNUVUZCU1N4SlFVRktMRVZCUVZVN1FVRkRVaXhsUVVGWExGTkJRVk1zUzBGQlZDeERRVUZsTEVOQlFXWXNSVUZCYTBJc1EwRkJReXhKUVVGRUxFTkJRVGRDTEVOQlJGRTdSMEZCVmpzN1FVRkpRU3hUUVVGUExGRkJRVkFzUTBGbWFVVTdRMEZCY0VNaUxDSm1hV3hsSWpvaWRYUnBiSE11YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhzZ2MzQnNhWFJEYjIxdFlVUmxiR2x0YVhSbFpDd2daMlYwVm1Gc2RXVkdjbTl0Um5WdVkzUnBiMjVUZEhKcGJtY3NJR2x6VTNSeWFXNW5JSDBnWm5KdmJTQW5MaTR2YVc1akwzVjBhV3h6Snp0Y2JtbHRjRzl5ZENCN0lHRndjR1Z1WkZWdWFYUWdmU0JtY205dElDY3VMMlpwYkhSbGNuTW5PMXh1WEc0dktpcGNiaUFxSUNCU1pYUjFjbTV6SUdFZ1puVnVZM1JwYjI0Z2RHaGhkQ0IzYVd4c0lHTm9aV05ySUdGdWVTQmhjbWQxYldWdWRDQm1iM0lnWUhSbGNtMWdYRzRnS2lCZ1kyOXVkR0ZwYm5Nb0oyNWxaV1JzWlNjcEtDZG9ZWGx6ZEdGamF5Y3BZRnh1SUNvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnWTI5dWRHRnBibk1nUFNBb2RHVnliU2tnUFQ0Z0tIWXBJRDArSUh0Y2JpQWdjbVYwZFhKdUlDaHBjMU4wY21sdVp5aDBaWEp0S1NBbUppQjJMbWx1WkdWNFQyWW9kR1Z5YlNrZ0lUMDlJQzB4S1Z4dWZUdGNibHh1THlvcVhHNGdLaUFnVW1WMGRYSnVjeUJoSUdaMWJtTjBhVzl1SUhSb1lYUWdkMmxzYkNCamFHVmpheUIwYnlCelpXVWdhV1lnWVc0Z1lYSm5kVzFsYm5RZ2FYTmNiaUFxSUNCMGFHVWdabWx5YzNRZ1kyaGhjbUZqZEdWeWN5QnBiaUIwYUdVZ2NISnZkbWxrWldRZ1lIUmxjbTFnWEc0Z0tpQmdhWE5HYVhKemRFTm9ZWEp6S0NkdVpXVmtiR1VuS1NnbmFHRjVjM1JoWTJzbktXQmNiaUFxTDF4dVpYaHdiM0owSUdOdmJuTjBJR2x6Um1seWMzUkRhR0Z5Y3lBOUlDaDBaWEp0S1NBOVBpQW9kaWtnUFQ0Z2UxeHVJQ0J5WlhSMWNtNGdLR2x6VTNSeWFXNW5LSFJsY20wcElDWW1JSFl1YVc1a1pYaFBaaWgwWlhKdEtTQTlQVDBnTUNrN1hHNTlPMXh1WEc0dktpcGNiaUFxSUVOeVpXRjBaU0JoSUhWdWFYUWdkbUZzZFdVZ2RIbHdaVnh1SUNvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnWTNKbFlYUmxWVzVwZEZSNWNHVWdQU0FvZEhsd1pTa2dQVDRnZTF4dUlDQnlaWFIxY200Z2UxeHVJQ0FnSUhSbGMzUTZJR052Ym5SaGFXNXpLSFI1Y0dVcExGeHVJQ0FnSUhCaGNuTmxPaUJ3WVhKelpVWnNiMkYwTEZ4dUlDQWdJR1pwYkhSbGNqb2dZWEJ3Wlc1a1ZXNXBkQ2gwZVhCbEtWeHVJQ0I5TzF4dWZUdGNibHh1THlvcVhHNGdLaUJEY21WaGRHVnpJR0VnWm5WdVkzUnBiMjRnZEdoaGRDQjNhV3hzSUhOd2JHbDBJR052Ykc5eVhHNGdLaUIyWVd4MVpYTWdabkp2YlNCemRISnBibWNnYVc1MGJ5QmhiaUJ2WW1wbFkzUWdiMllnY0hKdmNHVnlkR2xsYzF4dUlDb2dZSE53YkdsMFEyOXNiM0pXWVd4MVpYTW9XeWRTWldRbkxDQW5SM0psWlc0bkxDQW5RbXgxWlNkZEtTZ25jbWRpWVNnd0xEQXNNQ2tuS1dCY2JpQXFMMXh1Wlhod2IzSjBJR1oxYm1OMGFXOXVJSE53YkdsMFEyOXNiM0pXWVd4MVpYTW9kR1Z5YlhNcElIdGNiaUFnWTI5dWMzUWdiblZ0VkdWeWJYTWdQU0IwWlhKdGN5NXNaVzVuZEdnN1hHNWNiaUFnY21WMGRYSnVJR1oxYm1OMGFXOXVJQ2gyS1NCN1hHNGdJQ0FnWTI5dWMzUWdkbUZzZFdWeklEMGdlMzA3WEc0Z0lDQWdZMjl1YzNRZ2RtRnNkV1Z6UVhKeVlYa2dQU0J6Y0d4cGRFTnZiVzFoUkdWc2FXMXBkR1ZrS0dkbGRGWmhiSFZsUm5KdmJVWjFibU4wYVc5dVUzUnlhVzVuS0hZcEtUdGNibHh1SUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2diblZ0VkdWeWJYTTdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ2RtRnNkV1Z6VzNSbGNtMXpXMmxkWFNBOUlDaDJZV3gxWlhOQmNuSmhlVnRwWFNBaFBUMGdkVzVrWldacGJtVmtLU0EvSUhCaGNuTmxSbXh2WVhRb2RtRnNkV1Z6UVhKeVlYbGJhVjBwSURvZ01UdGNiaUFnSUNCOVhHNWNiaUFnSUNCeVpYUjFjbTRnZG1Gc2RXVnpPMXh1SUNCOVhHNTlYRzVjYmk4cVhHNGdJRk53YkdsMElHRWdkbUZzZFdVZ2FXNTBieUJoSUhaaGJIVmxMM1Z1YVhRZ2IySnFaV04wWEc0Z0lGeHVJQ0FnSUZ3aU1qQXdjSGhjSWlBdFBpQjdJSFpoYkhWbE9pQXlNREFzSUhWdWFYUTZJRndpY0hoY0lpQjlYRzRnSUNBZ1hHNGdJRUJ3WVhKaGJTQmJjM1J5YVc1blhUb2dWbUZzZFdVZ2RHOGdjM0JzYVhSY2JpQWdRSEpsZEhWeWJpQmJiMkpxWldOMFhUb2dUMkpxWldOMElIZHBkR2dnZG1Gc2RXVWdZVzVrSUhWdWFYUWdjSEp2Y0hOY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ1ptbHVaRlpoYkhWbFFXNWtWVzVwZENBOUlDaDJZV3gxWlNrZ1BUNGdlMXh1SUNCcFppQW9kbUZzZFdVdWJXRjBZMmdwSUh0Y2JpQWdJQ0JqYjI1emRDQnpjR3hwZEZaaGJIVmxJRDBnZG1Gc2RXVXViV0YwWTJnb0x5Z3RQMXhjWkNwY1hDNC9YRnhrS2lrb0xpb3BMeWs3WEc1Y2JpQWdJQ0J5WlhSMWNtNGdlMXh1SUNBZ0lDQWdkbUZzZFdVNklIQmhjbk5sUm14dllYUW9jM0JzYVhSV1lXeDFaVnN4WFNrc1hHNGdJQ0FnSUNCMWJtbDBPaUFnYzNCc2FYUldZV3gxWlZzeVhWeHVJQ0FnSUgwN1hHNGdJSDBnWld4elpTQjdYRzRnSUNBZ2NtVjBkWEp1SUhzZ2RtRnNkV1VnZlR0Y2JpQWdmVnh1ZlR0Y2JseHVMeXBjYmlBZ1UzQnNhWFFnWTI5c2IzSWdjM1J5YVc1bklHbHVkRzhnYldGd0lHOW1JR052Ykc5eUlIQnliM0JsY25ScFpYTmNibHh1SUNCY0luSm5ZbUVvTWpVMUxDQXlOVFVzSURJMU5Td2dNQ2xjSWl3Z1cxd2lVbVZrWENJc0lDZEhjbVZsYmx3aUxDQmNJa0pzZFdWY0lpd2dYQ0pCYkhCb1lWd2lYVnh1WEc0Z0lIc2dVbVZrT2lBeU5UVXVMaTRnZlZ4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCblpYUkRiMnh2Y2xaaGJIVmxjeUE5SUNoMllXeDFaU3dnWTI5c2IzSlVaWEp0Y3lrZ1BUNGdlMXh1SUNCamIyNXpkQ0J1ZFcxRGIyeHZjbFJsY20xeklEMGdZMjlzYjNKVVpYSnRjeTVzWlc1bmRHZzdYRzRnSUdOdmJuTjBJR052Ykc5eVZtRnNkV1Z6SUQwZ2UzMDdYRzRnSUdOdmJuTjBJR052Ykc5eWN5QTlJSE53YkdsMFEyOXRiV0ZFWld4cGJXbDBaV1FvWjJWMFZtRnNkV1ZHY205dFJuVnVZM1JwYjI1VGRISnBibWNvZG1Gc2RXVXBLVHRjYmx4dUlDQm1iM0lnS0d4bGRDQnBJRDBnTURzZ2FTQThJRzUxYlVOdmJHOXlWR1Z5YlhNN0lHa3JLeWtnZTF4dUlDQWdJR052Ykc5eVZtRnNkV1Z6VzJOdmJHOXlWR1Z5YlhOYmFWMWRJRDBnS0dOdmJHOXljMXRwWFNBaFBUMGdkVzVrWldacGJtVmtLU0EvSUdOdmJHOXljMXRwWFNBNklERTdYRzRnSUgxY2JseHVJQ0J5WlhSMWNtNGdZMjlzYjNKV1lXeDFaWE03WEc1OU8xeHVYRzR2S2x4dUlDQkhaWFFnZG1Gc2RXVWdabkp2YlNCbWRXNWpkR2x2YmlCemRISnBibWRjYmx4dUlDQmNJblJ5WVc1emJHRjBaVmdvTWpCd2VDbGNJaUF0UGlCY0lqSXdjSGhjSWx4dUtpOWNiaTh2SUdWNGNHOXlkQ0JqYjI1emRDQm5aWFJXWVd4MVpVWnliMjFHZFc1amRHbHZibE4wY21sdVp5QTlJQ2gyWVd4MVpTa2dQVDRnZG1Gc2RXVXVjM1ZpYzNSeWFXNW5LSFpoYkhWbExtbHVaR1Y0VDJZb0p5Z25LU0FySURFc0lIWmhiSFZsTG14aGMzUkpibVJsZUU5bUtDY3BKeWtwTzF4dVhHNWNibVY0Y0c5eWRDQmpiMjV6ZENCamNtVmhkR1ZFWld4cGJXbDBaV1FnUFNBb2RtRnNkV1Z6TENCMFpYSnRjeXdnWkdWc2FXMXBkR1Z5TENCamFHOXdLU0E5UGlCN1hHNGdJR052Ym5OMElHNTFiVlJsY20xeklEMGdkR1Z5YlhNdWJHVnVaM1JvTzF4dUlDQnNaWFFnWTI5dFltbHVaV1FnUFNBbkp6dGNibHh1SUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElHNTFiVlJsY20xek95QnBLeXNwSUh0Y2JpQWdJQ0JqYjI1emRDQjBaWEp0SUQwZ2RHVnliWE5iYVYwN1hHNGdJQ0FnYVdZZ0tIWmhiSFZsY3k1b1lYTlBkMjVRY205d1pYSjBlU2gwWlhKdEtTa2dlMXh1SUNBZ0lDQWdZMjl0WW1sdVpXUWdLejBnZG1Gc2RXVnpXM1JsY20xZElDc2daR1ZzYVcxcGRHVnlPMXh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJR2xtSUNoamFHOXdLU0I3WEc0Z0lDQWdZMjl0WW1sdVpXUWdQU0JqYjIxaWFXNWxaQzV6YkdsalpTZ3dMQ0F0WTJodmNDazdYRzRnSUgxY2JseHVJQ0J5WlhSMWNtNGdZMjl0WW1sdVpXUTdYRzU5TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlL3V0aWxzLmpzXG4gKiogbW9kdWxlIGlkID0gMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIiwiZmlsZSI6InBvcG1vdGlvbi5nbG9iYWwuanMifQ==