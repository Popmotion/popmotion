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
	
	var UIref = window.motion;
	
	popmotion.noConflict = function () {
	    window.motion = UIref;
	};
	
	window.motion = window.popmotion = popmotion;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9sb2FkL2dsb2JhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOztJQUFZOzs7O0FBRVosSUFBTSxRQUFRLE9BQU8sTUFBUDs7QUFFZCxVQUFVLFVBQVYsR0FBdUIsWUFBWTtBQUMvQixXQUFPLE1BQVAsR0FBZ0IsS0FBaEIsQ0FEK0I7Q0FBWjs7QUFJdkIsT0FBTyxNQUFQLEdBQWdCLE9BQU8sU0FBUCxHQUFtQixTQUFuQiIsImZpbGUiOiJnbG9iYWwuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcG9wbW90aW9uIGZyb20gJy4uL3BvcG1vdGlvbic7XG5cbmNvbnN0IFVJcmVmID0gd2luZG93Lm1vdGlvbjtcblxucG9wbW90aW9uLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgd2luZG93Lm1vdGlvbiA9IFVJcmVmO1xufTtcblxud2luZG93Lm1vdGlvbiA9IHdpbmRvdy5wb3Btb3Rpb24gPSBwb3Btb3Rpb247Il19

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.Action = exports.transformers = exports.valueType = exports.setGlobalDilation = exports.utils = exports.calc = exports.detectFlow = exports.easing = exports.svgPath = exports.svg = exports.object = exports.css = exports.attr = exports.createAdapter = exports.timeline = exports.stagger = exports.task = exports.input = exports.track = exports.physics = exports.tween = exports.flow = undefined;
	
	var _timer = __webpack_require__(2);
	
	Object.defineProperty(exports, 'setGlobalDilation', {
	    enumerable: true,
	    get: function () {
	        return _timer.setGlobalDilation;
	    }
	});
	
	var _Action = __webpack_require__(3);
	
	var _Action2 = _interopRequireDefault(_Action);
	
	var _Flow = __webpack_require__(4);
	
	var _Flow2 = _interopRequireDefault(_Flow);
	
	var _Tween = __webpack_require__(5);
	
	var _Tween2 = _interopRequireDefault(_Tween);
	
	var _Physics = __webpack_require__(6);
	
	var _Physics2 = _interopRequireDefault(_Physics);
	
	var _Track = __webpack_require__(7);
	
	var _Track2 = _interopRequireDefault(_Track);
	
	var _Task = __webpack_require__(8);
	
	var _Task2 = _interopRequireDefault(_Task);
	
	var _Input = __webpack_require__(9);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _stagger2 = __webpack_require__(10);
	
	var _stagger3 = _interopRequireDefault(_stagger2);
	
	var _timeline2 = __webpack_require__(11);
	
	var _timeline3 = _interopRequireDefault(_timeline2);
	
	var _adapter = __webpack_require__(12);
	
	var _adapter2 = _interopRequireDefault(_adapter);
	
	var _attrAdapter = __webpack_require__(13);
	
	var _attrAdapter2 = _interopRequireDefault(_attrAdapter);
	
	var _cssAdapter = __webpack_require__(14);
	
	var _cssAdapter2 = _interopRequireDefault(_cssAdapter);
	
	var _objectAdapter = __webpack_require__(15);
	
	var _objectAdapter2 = _interopRequireDefault(_objectAdapter);
	
	var _svgAdapter = __webpack_require__(16);
	
	var _svgAdapter2 = _interopRequireDefault(_svgAdapter);
	
	var _svgPathAdapter = __webpack_require__(17);
	
	var _svgPathAdapter2 = _interopRequireDefault(_svgPathAdapter);
	
	var _presetEasing = __webpack_require__(18);
	
	var _presetEasing2 = _interopRequireDefault(_presetEasing);
	
	var _getFlow = __webpack_require__(19);
	
	var _getFlow2 = _interopRequireDefault(_getFlow);
	
	var _calc2 = __webpack_require__(20);
	
	var _calc = _interopRequireWildcard(_calc2);
	
	var _utils2 = __webpack_require__(21);
	
	var _utils = _interopRequireWildcard(_utils2);
	
	var _alpha = __webpack_require__(22);
	
	var _alpha2 = _interopRequireDefault(_alpha);
	
	var _angle = __webpack_require__(23);
	
	var _angle2 = _interopRequireDefault(_angle);
	
	var _color = __webpack_require__(24);
	
	var _color2 = _interopRequireDefault(_color);
	
	var _complex = __webpack_require__(25);
	
	var _complex2 = _interopRequireDefault(_complex);
	
	var _hex = __webpack_require__(26);
	
	var _hex2 = _interopRequireDefault(_hex);
	
	var _hsl = __webpack_require__(27);
	
	var _hsl2 = _interopRequireDefault(_hsl);
	
	var _px = __webpack_require__(28);
	
	var _px2 = _interopRequireDefault(_px);
	
	var _rgb = __webpack_require__(29);
	
	var _rgb2 = _interopRequireDefault(_rgb);
	
	var _scale = __webpack_require__(30);
	
	var _scale2 = _interopRequireDefault(_scale);
	
	var _shadow = __webpack_require__(31);
	
	var _shadow2 = _interopRequireDefault(_shadow);
	
	var _unit = __webpack_require__(32);
	
	var _unit2 = _interopRequireDefault(_unit);
	
	var _transformers2 = __webpack_require__(33);
	
	var _transformers = _interopRequireWildcard(_transformers2);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Export factory functions
	var flow = exports.flow = function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	    }
	
	    return new (Function.prototype.bind.apply(_Flow2.default, [null].concat(args)))();
	}; // Import classes - long term goal to move towards composition
	
	var tween = exports.tween = function (props) {
	    return new _Tween2.default(props);
	};
	var physics = exports.physics = function (props) {
	    return new _Physics2.default(props);
	};
	var track = exports.track = function () {
	    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	    }
	
	    return new (Function.prototype.bind.apply(_Track2.default, [null].concat(args)))();
	};
	var input = exports.input = function () {
	    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	        args[_key3] = arguments[_key3];
	    }
	
	    return new (Function.prototype.bind.apply(_Input2.default, [null].concat(args)))();
	};
	var task = exports.task = function () {
	    for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	        args[_key4] = arguments[_key4];
	    }
	
	    return new (Function.prototype.bind.apply(_Task2.default, [null].concat(args)))();
	};
	exports.stagger = _stagger3.default;
	exports.timeline = _timeline3.default;
	
	// Adapters
	
	exports.createAdapter = _adapter2.default;
	exports.attr = _attrAdapter2.default;
	exports.css = _cssAdapter2.default;
	exports.object = _objectAdapter2.default;
	exports.svg = _svgAdapter2.default;
	exports.svgPath = _svgPathAdapter2.default;
	
	// Easing
	
	exports.easing = _presetEasing2.default;
	var detectFlow = exports.detectFlow = _getFlow2.default;
	
	// Utils
	exports.calc = _calc;
	exports.utils = _utils;
	
	// Value types
	
	var valueType = exports.valueType = { alpha: _alpha2.default, angle: _angle2.default, color: _color2.default, complex: _complex2.default, hex: _hex2.default, hsl: _hsl2.default, px: _px2.default, rgb: _rgb2.default, scale: _scale2.default, shadow: _shadow2.default, unit: _unit2.default };
	
	// Transformers
	exports.transformers = _transformers;
	
	/*
	    Returns a version of the Action bound to a Flow
	
	    We're adding `on` here because Flow extends Action,
	    otherwise creating a circular modular dependency. Future
	    refactoring, ie moving to a compositional model will
	    remove the need for us to do this here.
	*/
	
	_Action2.default.prototype.on = function (element) {
	    if (!element.connect) {
	        element = (0, _getFlow2.default)(element);
	    }
	
	    return element.connect(this);
	};
	
	exports.Action = _Action2.default;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wb3Btb3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztzQkFtQ1M7Ozs7QUFsQ1Q7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQkE7Ozs7Ozs7Ozs7OztBQVNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUF0Q08sSUFBTSxzQkFBTztzQ0FBSTs7Ozs0RUFBcUI7Q0FBekI7O0FBQ2IsSUFBTSx3QkFBUSxVQUFDLEtBQUQ7V0FBVyxvQkFBVSxLQUFWO0NBQVg7QUFDZCxJQUFNLDRCQUFVLFVBQUMsS0FBRDtXQUFXLHNCQUFZLEtBQVo7Q0FBWDtBQUNoQixJQUFNLHdCQUFRO3VDQUFJOzs7OzZFQUFzQjtDQUExQjtBQUNkLElBQU0sd0JBQVE7dUNBQUk7Ozs7NkVBQXNCO0NBQTFCO0FBQ2QsSUFBTSxzQkFBTzt1Q0FBSTs7Ozs0RUFBcUI7Q0FBekI7UUFDYjtRQUNBOzs7O1FBR0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOzs7O1FBR0E7QUFFQSxJQUFNLG1EQUFOOzs7UUFHSztRQUNBOzs7O0FBZUwsSUFBTSxnQ0FBWSxFQUFFLHNCQUFGLEVBQVMsc0JBQVQsRUFBZ0Isc0JBQWhCLEVBQXVCLDBCQUF2QixFQUFnQyxrQkFBaEMsRUFBcUMsa0JBQXJDLEVBQTBDLGdCQUExQyxFQUE4QyxrQkFBOUMsRUFBbUQsc0JBQW5ELEVBQTBELHdCQUExRCxFQUFrRSxvQkFBbEUsRUFBWjs7O1FBR0Q7Ozs7Ozs7Ozs7O0FBVVosaUJBQU8sU0FBUCxDQUFpQixFQUFqQixHQUFzQixVQUFVLE9BQVYsRUFBbUI7QUFDckMsUUFBSSxDQUFDLFFBQVEsT0FBUixFQUFpQjtBQUNsQixrQkFBVSx1QkFBUSxPQUFSLENBQVYsQ0FEa0I7S0FBdEI7O0FBSUEsV0FBTyxRQUFRLE9BQVIsQ0FBZ0IsSUFBaEIsQ0FBUCxDQUxxQztDQUFuQjs7UUFRYiIsImZpbGUiOiJwb3Btb3Rpb24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0IGNsYXNzZXMgLSBsb25nIHRlcm0gZ29hbCB0byBtb3ZlIHRvd2FyZHMgY29tcG9zaXRpb25cbmltcG9ydCBBY3Rpb24gZnJvbSAnLi9hY3Rpb25zL0FjdGlvbic7XG5pbXBvcnQgRmxvdyBmcm9tICcuL2FjdGlvbnMvRmxvdyc7XG5pbXBvcnQgVHdlZW4gZnJvbSAnLi9hY3Rpb25zL1R3ZWVuJztcbmltcG9ydCBQaHlzaWNzIGZyb20gJy4vYWN0aW9ucy9QaHlzaWNzJztcbmltcG9ydCBUcmFjayBmcm9tICcuL2FjdGlvbnMvVHJhY2snO1xuaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrL1Rhc2snO1xuaW1wb3J0IElucHV0IGZyb20gJy4vaW5wdXQvSW5wdXQnO1xuXG4vLyBFeHBvcnQgZmFjdG9yeSBmdW5jdGlvbnNcbmV4cG9ydCBjb25zdCBmbG93ID0gKC4uLmFyZ3MpID0+IG5ldyBGbG93KC4uLmFyZ3MpO1xuZXhwb3J0IGNvbnN0IHR3ZWVuID0gKHByb3BzKSA9PiBuZXcgVHdlZW4ocHJvcHMpO1xuZXhwb3J0IGNvbnN0IHBoeXNpY3MgPSAocHJvcHMpID0+IG5ldyBQaHlzaWNzKHByb3BzKTtcbmV4cG9ydCBjb25zdCB0cmFjayA9ICguLi5hcmdzKSA9PiBuZXcgVHJhY2soLi4uYXJncyk7XG5leHBvcnQgY29uc3QgaW5wdXQgPSAoLi4uYXJncykgPT4gbmV3IElucHV0KC4uLmFyZ3MpO1xuZXhwb3J0IGNvbnN0IHRhc2sgPSAoLi4uYXJncykgPT4gbmV3IFRhc2soLi4uYXJncyk7XG5leHBvcnQgc3RhZ2dlciBmcm9tICcuL2luYy9zdGFnZ2VyJztcbmV4cG9ydCB0aW1lbGluZSBmcm9tICcuL2luYy90aW1lbGluZSc7XG5cbi8vIEFkYXB0ZXJzXG5leHBvcnQgY3JlYXRlQWRhcHRlciBmcm9tICcuL2FkYXB0ZXIvYWRhcHRlcic7XG5leHBvcnQgYXR0ciBmcm9tICcuL2FkYXB0ZXIvYXR0ci1hZGFwdGVyJztcbmV4cG9ydCBjc3MgZnJvbSAnLi9hZGFwdGVyL2Nzcy1hZGFwdGVyJztcbmV4cG9ydCBvYmplY3QgZnJvbSAnLi9hZGFwdGVyL29iamVjdC1hZGFwdGVyJztcbmV4cG9ydCBzdmcgZnJvbSAnLi9hZGFwdGVyL3N2Zy1hZGFwdGVyJztcbmV4cG9ydCBzdmdQYXRoIGZyb20gJy4vYWRhcHRlci9zdmctcGF0aC1hZGFwdGVyJztcblxuLy8gRWFzaW5nXG5leHBvcnQgZWFzaW5nIGZyb20gJy4vYWN0aW9ucy9lYXNpbmcvcHJlc2V0LWVhc2luZyc7XG5pbXBvcnQgZ2V0RmxvdyBmcm9tICcuL2FjdGlvbnMvZmxvdy9nZXQtZmxvdyc7XG5leHBvcnQgY29uc3QgZGV0ZWN0RmxvdyA9IGdldEZsb3c7XG5cbi8vIFV0aWxzXG5leHBvcnQgKiBhcyBjYWxjIGZyb20gJy4vaW5jL2NhbGMnO1xuZXhwb3J0ICogYXMgdXRpbHMgZnJvbSAnLi9pbmMvdXRpbHMnO1xuZXhwb3J0IHsgc2V0R2xvYmFsRGlsYXRpb24gfSBmcm9tICcuL3Rhc2svdGltZXInO1xuXG4vLyBWYWx1ZSB0eXBlc1xuaW1wb3J0IGFscGhhIGZyb20gJy4vdmFsdWUtdHlwZXMvYWxwaGEnO1xuaW1wb3J0IGFuZ2xlIGZyb20gJy4vdmFsdWUtdHlwZXMvYW5nbGUnO1xuaW1wb3J0IGNvbG9yIGZyb20gJy4vdmFsdWUtdHlwZXMvY29sb3InO1xuaW1wb3J0IGNvbXBsZXggZnJvbSAnLi92YWx1ZS10eXBlcy9jb21wbGV4JztcbmltcG9ydCBoZXggZnJvbSAnLi92YWx1ZS10eXBlcy9oZXgnO1xuaW1wb3J0IGhzbCBmcm9tICcuL3ZhbHVlLXR5cGVzL2hzbCc7XG5pbXBvcnQgcHggZnJvbSAnLi92YWx1ZS10eXBlcy9weCc7XG5pbXBvcnQgcmdiIGZyb20gJy4vdmFsdWUtdHlwZXMvcmdiJztcbmltcG9ydCBzY2FsZSBmcm9tICcuL3ZhbHVlLXR5cGVzL3NjYWxlJztcbmltcG9ydCBzaGFkb3cgZnJvbSAnLi92YWx1ZS10eXBlcy9zaGFkb3cnO1xuaW1wb3J0IHVuaXQgZnJvbSAnLi92YWx1ZS10eXBlcy91bml0JztcbmV4cG9ydCBjb25zdCB2YWx1ZVR5cGUgPSB7IGFscGhhLCBhbmdsZSwgY29sb3IsIGNvbXBsZXgsIGhleCwgaHNsLCBweCwgcmdiLCBzY2FsZSwgc2hhZG93LCB1bml0IH07XG5cbi8vIFRyYW5zZm9ybWVyc1xuZXhwb3J0ICogYXMgdHJhbnNmb3JtZXJzIGZyb20gJy4vaW5jL3RyYW5zZm9ybWVycyc7XG5cbi8qXG4gICAgUmV0dXJucyBhIHZlcnNpb24gb2YgdGhlIEFjdGlvbiBib3VuZCB0byBhIEZsb3dcblxuICAgIFdlJ3JlIGFkZGluZyBgb25gIGhlcmUgYmVjYXVzZSBGbG93IGV4dGVuZHMgQWN0aW9uLFxuICAgIG90aGVyd2lzZSBjcmVhdGluZyBhIGNpcmN1bGFyIG1vZHVsYXIgZGVwZW5kZW5jeS4gRnV0dXJlXG4gICAgcmVmYWN0b3JpbmcsIGllIG1vdmluZyB0byBhIGNvbXBvc2l0aW9uYWwgbW9kZWwgd2lsbFxuICAgIHJlbW92ZSB0aGUgbmVlZCBmb3IgdXMgdG8gZG8gdGhpcyBoZXJlLlxuKi9cbkFjdGlvbi5wcm90b3R5cGUub24gPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIGlmICghZWxlbWVudC5jb25uZWN0KSB7XG4gICAgICAgIGVsZW1lbnQgPSBnZXRGbG93KGVsZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50LmNvbm5lY3QodGhpcyk7XG59O1xuXG5leHBvcnQgeyBBY3Rpb24gfTsiXX0=

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.setGlobalDilation = undefined;
	
	var _utils = __webpack_require__(21);
	
	var MAX_ELAPSED = 33;
	
	var current = 0;
	var elapsed = 16.7;
	var dilation = 1;
	
	exports.default = {
	    update: function (framestamp) {
	        elapsed = Math.max(Math.min(framestamp - current, MAX_ELAPSED), 1) * dilation;
	        current = framestamp;
	    },
	
	    start: function () {
	        return current = (0, _utils.currentTime)();
	    },
	
	    getElapsed: function () {
	        return elapsed;
	    }
	};
	var setGlobalDilation = exports.setGlobalDilation = function (newDilation) {
	    return dilation = newDilation;
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90YXNrL3RpbWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUEsSUFBTSxjQUFjLEVBQWQ7O0FBRU4sSUFBSSxVQUFVLENBQVY7QUFDSixJQUFJLFVBQVUsSUFBVjtBQUNKLElBQUksV0FBVyxDQUFYOztrQkFFVztBQUNYLFlBQVEsVUFBQyxVQUFELEVBQWdCO0FBQ3BCLGtCQUFVLEtBQUssR0FBTCxDQUFTLEtBQUssR0FBTCxDQUFTLGFBQWEsT0FBYixFQUFzQixXQUEvQixDQUFULEVBQXNELENBQXRELElBQTJELFFBQTNELENBRFU7QUFFcEIsa0JBQVUsVUFBVixDQUZvQjtLQUFoQjs7QUFLUixXQUFPO2VBQU0sVUFBVSx5QkFBVjtLQUFOOztBQUVQLGdCQUFZO2VBQU07S0FBTjs7QUFHVCxJQUFNLGdEQUFvQixVQUFDLFdBQUQ7V0FBaUIsV0FBVyxXQUFYO0NBQWpCIiwiZmlsZSI6InRpbWVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGN1cnJlbnRUaW1lIH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcblxuY29uc3QgTUFYX0VMQVBTRUQgPSAzMztcblxubGV0IGN1cnJlbnQgPSAwO1xubGV0IGVsYXBzZWQgPSAxNi43O1xubGV0IGRpbGF0aW9uID0gMTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHVwZGF0ZTogKGZyYW1lc3RhbXApID0+IHtcbiAgICAgICAgZWxhcHNlZCA9IE1hdGgubWF4KE1hdGgubWluKGZyYW1lc3RhbXAgLSBjdXJyZW50LCBNQVhfRUxBUFNFRCksIDEpICogZGlsYXRpb247XG4gICAgICAgIGN1cnJlbnQgPSBmcmFtZXN0YW1wO1xuICAgIH0sXG5cbiAgICBzdGFydDogKCkgPT4gY3VycmVudCA9IGN1cnJlbnRUaW1lKCksXG5cbiAgICBnZXRFbGFwc2VkOiAoKSA9PiBlbGFwc2VkXG59O1xuXG5leHBvcnQgY29uc3Qgc2V0R2xvYmFsRGlsYXRpb24gPSAobmV3RGlsYXRpb24pID0+IGRpbGF0aW9uID0gbmV3RGlsYXRpb247Il19

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _Task2 = __webpack_require__(8);
	
	var _Task3 = _interopRequireDefault(_Task2);
	
	var _calc = __webpack_require__(20);
	
	var _utils = __webpack_require__(21);
	
	var _detect = __webpack_require__(34);
	
	var _detect2 = _interopRequireDefault(_detect);
	
	var _numericalValues = __webpack_require__(35);
	
	var _numericalValues2 = _interopRequireDefault(_numericalValues);
	
	var _detectAdapter = __webpack_require__(36);
	
	var _detectAdapter2 = _interopRequireDefault(_detectAdapter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var NUM_NUMERICAL_VALUES = _numericalValues2.default.length;
	
	var defaultRenderer = function (_ref) {
	    var state = _ref.state;
	    var adapter = _ref.adapter;
	    var adapterData = _ref.adapterData;
	    var element = _ref.element;
	    return adapter(element, state, adapterData);
	};
	
	var convertIfShouldBeNumber = function (value) {
	    return !isNaN(value) ? parseFloat(value) : value;
	};
	
	var Action = function (_Task) {
	    _inherits(Action, _Task);
	
	    function Action() {
	        var props = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	        _classCallCheck(this, Action);
	
	        props.state = {};
	        props.valueKeys = [];
	        props.parentKeys = [];
	        return _possibleConstructorReturn(this, _Task.call(this, props));
	    }
	
	    /*
	        # Set Action properties
	        ## Set user-defined Action properties
	         @param [object]
	        @return [Action]
	    */
	
	
	    Action.prototype.set = function set() {
	        var props = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	        this.values = this.values || {};
	
	        var values = props.values;
	
	        var propsToSet = _objectWithoutProperties(props, ['values']);
	
	        var inheritable = {};
	
	        // Set non-consumed properties
	        _Task.prototype.set.call(this, propsToSet);
	
	        // Detect correct `adapter` if none exists and `element` is being set
	        if (this.element) {
	            if (!this.adapter) {
	                // Ducktypish check for Adapter
	                this.adapter = (0, _detectAdapter2.default)(this.element);
	
	                if (this.adapter.getElementData) {
	                    this.adapterData = this.adapter.getElementData(this.element);
	                }
	            }
	
	            if (!this.onRender) {
	                this.onRender = defaultRenderer;
	            }
	        }
	
	        // Prime an object to inherit from, with only `value` properties
	        for (var key in this.defaultValue) {
	            if (this.defaultValue.hasOwnProperty(key)) {
	                if (propsToSet.hasOwnProperty(key)) {
	                    inheritable[key] = propsToSet[key];
	                } else if (this[key] !== undefined) {
	                    inheritable[key] = this[key];
	                }
	            }
	        }
	
	        // Update existing values with inheritable properties
	        for (var _key in this.values) {
	            if (this.values.hasOwnProperty(_key)) {
	                this.values[_key] = _extends({}, this.values[_key], inheritable);
	            }
	        }
	
	        // Update
	        if (values) {
	            this.setValues(values, inheritable);
	
	            // Precompute number of value key and parent keys to avoid per-frame measurement
	            this.numValueKeys = this.valueKeys.length;
	            this.numParentKeys = this.parentKeys.length;
	        }
	
	        return this;
	    };
	
	    Action.prototype.setValues = function setValues(values, inherit) {
	        // Iterate over all incoming values and set
	        for (var key in values) {
	            if (values.hasOwnProperty(key)) {
	                var hasChildren = false;
	                var children = {};
	
	                // Merge into existing value or create new
	                var valueAlreadyExists = this.values[key] !== undefined;
	                var newValue = valueAlreadyExists ? _extends({}, this.values[key]) : _extends({}, inherit);
	
	                // If values is not an object, assign value to default prop
	                if (!(0, _utils.isObj)(values[key])) {
	                    newValue[this.defaultValueProp] = values[key];
	                } else {
	                    newValue = _extends({}, newValue, values[key]);
	                }
	
	                // If we've got an adapter, get the current value
	                if (newValue.current === undefined && this.adapter) {
	                    newValue.current = convertIfShouldBeNumber(this.adapter.get(this.element, key));
	                }
	
	                if (newValue.from === undefined && this.adapter) {
	                    newValue.from = newValue.current;
	                }
	
	                // Apply default value properties
	                if (!valueAlreadyExists) {
	                    newValue = _extends({}, this.defaultValue, newValue);
	                }
	
	                // If we don't have a value type and we do have an Adapter, check for type with value key
	                if (!newValue.type && this.adapter && this.adapter.checkValueType) {
	                    newValue.type = this.adapter.checkValueType(key);
	                }
	
	                // If we still don't have a value type and this is the first time we've set this value, check numerical values for strings and test
	                if (!newValue.type && !this.values[key]) {
	                    newValue.type = (0, _detect2.default)(newValue);
	                }
	
	                // If we have a value type, handle. This is my least favourite part of Popmotion, so... enjoy.
	                if (newValue.type) {
	                    for (var i = 0; i < NUM_NUMERICAL_VALUES; i++) {
	                        var propName = _numericalValues2.default[i];
	                        var valueProp = newValue[propName];
	
	                        // If this prop is a string and we have a splitter, split
	                        if (newValue.type.hasOwnProperty('split')) {
	                            var splitProp = (0, _utils.isString)(valueProp) ? newValue.type.split(valueProp) : {};
	
	                            for (var splitKey in splitProp) {
	                                if (splitProp.hasOwnProperty(splitKey)) {
	                                    var combinedKey = key + splitKey;
	
	                                    // If we don't have a child value for this key, make one
	                                    if (!children[combinedKey]) {
	                                        var defaultValue = newValue.type.defaultProps && newValue.type.defaultProps[splitKey] ? newValue.type.defaultProps[splitKey] : newValue.type.defaultProps || {};
	
	                                        children[combinedKey] = _extends({}, newValue, defaultValue, {
	                                            parent: key,
	                                            childKey: splitKey
	                                        });
	
	                                        delete children[combinedKey].type;
	                                    }
	
	                                    hasChildren = true;
	                                    children[combinedKey][propName] = parseFloat(splitProp[splitKey]);
	                                }
	                            }
	
	                            // If we have a template function, generate
	                            if (!newValue.template && newValue.type.template && (0, _utils.isString)(valueProp)) {
	                                newValue.template = newValue.type.template(valueProp);
	                            }
	                        } else if (newValue.type.defaultProps) {
	                            newValue = _extends({}, newValue, newValue.type.defaultProps);
	                        }
	
	                        if (valueProp !== undefined && newValue.type.parse) {
	                            newValue[propName] = newValue.type.parse(valueProp, newValue);
	                        }
	                    }
	                } // End value type nonsense
	
	                // Set `prev` to `current` for first frame after set
	                newValue.prev = newValue.current;
	
	                // If this value doesn't have children, add to valueKeys
	                if (!hasChildren) {
	                    if (this.valueKeys.indexOf(key) === -1) {
	                        this.valueKeys.push(key);
	                    }
	
	                    // Or add to parentKeys
	                } else {
	                        newValue.children = newValue.children || {};
	
	                        if (this.parentKeys.indexOf(key) === -1) {
	                            this.parentKeys.push(key);
	                        }
	
	                        this.setValues(children);
	                    }
	
	                this.values[key] = newValue;
	            }
	        }
	    };
	
	    /*
	        Decide whether this Action will render on next frame
	         @param [Action]
	        @param [number]
	        @param [number]
	        @return [boolean]: Return true to render
	    */
	
	
	    Action.prototype.willRender = function willRender(action, frameStamp, elapsed) {
	        var hasChanged = false;
	
	        // Check if base values have updated
	        for (var i = 0; i < this.numValueKeys; i++) {
	            var key = this.valueKeys[i];
	            var value = this.values[key];
	
	            // Run transform function (if present)
	            if (value.transform) {
	                value.current = value.transform(value.current, key, this);
	            }
	
	            // Cap minimum
	            if ((0, _utils.isNum)(value.min)) {
	                value.current = Math.max(value.current, value.min);
	            }
	
	            // Cap maximum
	            if ((0, _utils.isNum)(value.max)) {
	                value.current = Math.min(value.current, value.max);
	            }
	
	            // Round number
	            if (value.round) {
	                value.current = Math.round(value.current);
	            }
	
	            value.frameChange = value.current - value.prev;
	
	            // Update velocity
	            if (!this.calculatesVelocity) {
	                value.velocity = (0, _calc.speedPerSecond)(value.frameChange, elapsed);
	            }
	
	            // If this value has changed
	            if (value.prev !== value.current) {
	                hasChanged = true;
	                value.prev = value.current;
	            }
	
	            // Append unit
	            var valueForState = value.type && value.type.serialize ? value.type.serialize(value.current, value) : value.current;
	
	            // Add to state if this is not a child vaue
	            if (!value.parent) {
	                this.state[key] = valueForState;
	            } else {
	                this.values[value.parent].children[value.childKey] = valueForState;
	            }
	        }
	
	        // Update parent values
	        for (var _i = 0; _i < this.numParentKeys; _i++) {
	            var _key2 = this.parentKeys[_i];
	            var _value = this.values[_key2];
	
	            _value.current = _value.type.combine(_value.children, _value.template);
	
	            this.state[_key2] = _value.current;
	        }
	
	        if (this.onFrame) {
	            this.onFrame(this.state, this);
	        }
	
	        return this.onCleanup ? true : hasChanged;
	    };
	
	    Action.prototype.inherit = function inherit() {
	        var props = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	        var values = props.values;
	
	        var propsToSet = _objectWithoutProperties(props, ['values']);
	
	        var newAction = _Task.prototype.inherit.call(this, propsToSet);
	
	        if (values) {
	            newAction.set({ values: values });
	        }
	
	        return newAction;
	    };
	
	    Action.prototype.pause = function pause() {
	        _Task.prototype.stop.call(this);
	        return this;
	    };
	
	    Action.prototype.resume = function resume() {
	        _Task.prototype.start.call(this);
	        return this;
	    };
	
	    Action.prototype.toggle = function toggle() {
	        return this.isActive ? this.pause() : this.resume();
	    };
	
	    Action.prototype.start = function start() {
	        var values = this.values;
	        _Task.prototype.start.call(this);
	
	        for (var key in values) {
	            if (values.hasOwnProperty(key)) {
	                values[key].prev = values[key].origin = values[key].current;
	            }
	        }
	
	        return this;
	    };
	
	    Action.extendDefaultValue = function extendDefaultValue(props) {
	        return _extends({}, this.prototype.defaultValue, props);
	    };
	
	    Action.extendDefaultProps = function extendDefaultProps(props) {
	        return _extends({}, this.prototype.defaultProps, props);
	    };
	
	    return Action;
	}(_Task3.default);
	
	Action.prototype.defaultValueProp = 'current';
	Action.prototype.defaultValue = {
	    current: 0,
	    velocity: 0,
	    round: false,
	    min: undefined,
	    max: undefined,
	    transform: undefined
	};
	
	exports.default = Action;
	//# sourceMappingURL=data:application/json;base64,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YUFBUyxDQUFUO0FBQ0EsY0FBVSxDQUFWO0FBQ0EsV0FBTyxLQUFQO0FBQ0EsU0FBSyxTQUFMO0FBQ0EsU0FBSyxTQUFMO0FBQ0EsZUFBVyxTQUFYO0NBTko7O2tCQVNlIiwiZmlsZSI6IkFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGFzayBmcm9tICcuLi90YXNrL1Rhc2snO1xuaW1wb3J0IHsgc3BlZWRQZXJTZWNvbmQgfSBmcm9tICcuLi9pbmMvY2FsYyc7XG5pbXBvcnQgeyBpc051bSwgaXNPYmosIGlzU3RyaW5nIH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcbmltcG9ydCBkZXRlY3RWYWx1ZVR5cGUgZnJvbSAnLi4vdmFsdWUtdHlwZXMvZGV0ZWN0JztcbmltcG9ydCBOVU1FUklDQUxfVkFMVUVTIGZyb20gJy4uL2luYy9udW1lcmljYWwtdmFsdWVzJztcbmltcG9ydCBkZXRlY3RBZGFwdGVyIGZyb20gJy4uL2luYy9kZXRlY3QtYWRhcHRlcic7XG5cbmNvbnN0IE5VTV9OVU1FUklDQUxfVkFMVUVTID0gTlVNRVJJQ0FMX1ZBTFVFUy5sZW5ndGg7XG5cbmNvbnN0IGRlZmF1bHRSZW5kZXJlciA9ICh7IHN0YXRlLCBhZGFwdGVyLCBhZGFwdGVyRGF0YSwgZWxlbWVudCB9KSA9PiBhZGFwdGVyKGVsZW1lbnQsIHN0YXRlLCBhZGFwdGVyRGF0YSk7XG5cbmNvbnN0IGNvbnZlcnRJZlNob3VsZEJlTnVtYmVyID0gKHZhbHVlKSA9PiAhaXNOYU4odmFsdWUpID8gcGFyc2VGbG9hdCh2YWx1ZSkgOiB2YWx1ZTtcblxuY2xhc3MgQWN0aW9uIGV4dGVuZHMgVGFzayB7XG4gICAgY29uc3RydWN0b3IocHJvcHMgPSB7fSkge1xuICAgICAgICBwcm9wcy5zdGF0ZSA9IHt9O1xuICAgICAgICBwcm9wcy52YWx1ZUtleXMgPSBbXTtcbiAgICAgICAgcHJvcHMucGFyZW50S2V5cyA9IFtdO1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgIyBTZXQgQWN0aW9uIHByb3BlcnRpZXNcbiAgICAgICAgIyMgU2V0IHVzZXItZGVmaW5lZCBBY3Rpb24gcHJvcGVydGllc1xuXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgICAgICBAcmV0dXJuIFtBY3Rpb25dXG4gICAgKi9cbiAgICBzZXQocHJvcHMgPSB7fSkge1xuICAgICAgICB0aGlzLnZhbHVlcyA9IHRoaXMudmFsdWVzIHx8IHt9O1xuXG4gICAgICAgIGNvbnN0IHsgdmFsdWVzLCAuLi5wcm9wc1RvU2V0IH0gPSBwcm9wcztcbiAgICAgICAgY29uc3QgaW5oZXJpdGFibGUgPSB7fTtcblxuICAgICAgICAvLyBTZXQgbm9uLWNvbnN1bWVkIHByb3BlcnRpZXNcbiAgICAgICAgc3VwZXIuc2V0KHByb3BzVG9TZXQpO1xuXG4gICAgICAgIC8vIERldGVjdCBjb3JyZWN0IGBhZGFwdGVyYCBpZiBub25lIGV4aXN0cyBhbmQgYGVsZW1lbnRgIGlzIGJlaW5nIHNldFxuICAgICAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuYWRhcHRlcikge1xuICAgICAgICAgICAgICAgIC8vIER1Y2t0eXBpc2ggY2hlY2sgZm9yIEFkYXB0ZXJcbiAgICAgICAgICAgICAgICB0aGlzLmFkYXB0ZXIgPSBkZXRlY3RBZGFwdGVyKHRoaXMuZWxlbWVudCk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hZGFwdGVyLmdldEVsZW1lbnREYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRhcHRlckRhdGEgPSB0aGlzLmFkYXB0ZXIuZ2V0RWxlbWVudERhdGEodGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5vblJlbmRlcikge1xuICAgICAgICAgICAgICAgIHRoaXMub25SZW5kZXIgPSBkZWZhdWx0UmVuZGVyZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQcmltZSBhbiBvYmplY3QgdG8gaW5oZXJpdCBmcm9tLCB3aXRoIG9ubHkgYHZhbHVlYCBwcm9wZXJ0aWVzXG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLmRlZmF1bHRWYWx1ZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGVmYXVsdFZhbHVlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNUb1NldC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGluaGVyaXRhYmxlW2tleV0gPSBwcm9wc1RvU2V0W2tleV07XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBpbmhlcml0YWJsZVtrZXldID0gdGhpc1trZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSBleGlzdGluZyB2YWx1ZXMgd2l0aCBpbmhlcml0YWJsZSBwcm9wZXJ0aWVzXG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLnZhbHVlcykge1xuICAgICAgICAgICAgaWYgKHRoaXMudmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlc1trZXldID0geyAuLi50aGlzLnZhbHVlc1trZXldLCAuLi5pbmhlcml0YWJsZSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlXG4gICAgICAgIGlmICh2YWx1ZXMpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0VmFsdWVzKHZhbHVlcywgaW5oZXJpdGFibGUpO1xuXG4gICAgICAgICAgICAvLyBQcmVjb21wdXRlIG51bWJlciBvZiB2YWx1ZSBrZXkgYW5kIHBhcmVudCBrZXlzIHRvIGF2b2lkIHBlci1mcmFtZSBtZWFzdXJlbWVudFxuICAgICAgICAgICAgdGhpcy5udW1WYWx1ZUtleXMgPSB0aGlzLnZhbHVlS2V5cy5sZW5ndGg7XG4gICAgICAgICAgICB0aGlzLm51bVBhcmVudEtleXMgPSB0aGlzLnBhcmVudEtleXMubGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0VmFsdWVzKHZhbHVlcywgaW5oZXJpdCkge1xuICAgICAgICAvLyBJdGVyYXRlIG92ZXIgYWxsIGluY29taW5nIHZhbHVlcyBhbmQgc2V0XG4gICAgICAgIGZvciAobGV0IGtleSBpbiB2YWx1ZXMpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGxldCBoYXNDaGlsZHJlbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkcmVuID0ge307XG5cbiAgICAgICAgICAgICAgICAvLyBNZXJnZSBpbnRvIGV4aXN0aW5nIHZhbHVlIG9yIGNyZWF0ZSBuZXdcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZUFscmVhZHlFeGlzdHMgPSB0aGlzLnZhbHVlc1trZXldICE9PSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgbGV0IG5ld1ZhbHVlID0gdmFsdWVBbHJlYWR5RXhpc3RzID8geyAuLi50aGlzLnZhbHVlc1trZXldIH0gOiB7IC4uLmluaGVyaXQgfTtcblxuICAgICAgICAgICAgICAgIC8vIElmIHZhbHVlcyBpcyBub3QgYW4gb2JqZWN0LCBhc3NpZ24gdmFsdWUgdG8gZGVmYXVsdCBwcm9wXG4gICAgICAgICAgICAgICAgaWYgKCFpc09iaih2YWx1ZXNba2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWVbdGhpcy5kZWZhdWx0VmFsdWVQcm9wXSA9IHZhbHVlc1trZXldO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0geyAuLi5uZXdWYWx1ZSwgLi4udmFsdWVzW2tleV0gfTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBJZiB3ZSd2ZSBnb3QgYW4gYWRhcHRlciwgZ2V0IHRoZSBjdXJyZW50IHZhbHVlXG4gICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlLmN1cnJlbnQgPT09IHVuZGVmaW5lZCAmJiB0aGlzLmFkYXB0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUuY3VycmVudCA9IGNvbnZlcnRJZlNob3VsZEJlTnVtYmVyKHRoaXMuYWRhcHRlci5nZXQodGhpcy5lbGVtZW50LCBrZXkpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUuZnJvbSA9PT0gdW5kZWZpbmVkICYmIHRoaXMuYWRhcHRlcikge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS5mcm9tID0gbmV3VmFsdWUuY3VycmVudDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBBcHBseSBkZWZhdWx0IHZhbHVlIHByb3BlcnRpZXNcbiAgICAgICAgICAgICAgICBpZiAoIXZhbHVlQWxyZWFkeUV4aXN0cykge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IHsgLi4udGhpcy5kZWZhdWx0VmFsdWUsIC4uLm5ld1ZhbHVlIH07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gSWYgd2UgZG9uJ3QgaGF2ZSBhIHZhbHVlIHR5cGUgYW5kIHdlIGRvIGhhdmUgYW4gQWRhcHRlciwgY2hlY2sgZm9yIHR5cGUgd2l0aCB2YWx1ZSBrZXlcbiAgICAgICAgICAgICAgICBpZiAoIW5ld1ZhbHVlLnR5cGUgJiYgdGhpcy5hZGFwdGVyICYmIHRoaXMuYWRhcHRlci5jaGVja1ZhbHVlVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS50eXBlID0gdGhpcy5hZGFwdGVyLmNoZWNrVmFsdWVUeXBlKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gSWYgd2Ugc3RpbGwgZG9uJ3QgaGF2ZSBhIHZhbHVlIHR5cGUgYW5kIHRoaXMgaXMgdGhlIGZpcnN0IHRpbWUgd2UndmUgc2V0IHRoaXMgdmFsdWUsIGNoZWNrIG51bWVyaWNhbCB2YWx1ZXMgZm9yIHN0cmluZ3MgYW5kIHRlc3RcbiAgICAgICAgICAgICAgICBpZiAoIW5ld1ZhbHVlLnR5cGUgJiYgIXRoaXMudmFsdWVzW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUudHlwZSA9IGRldGVjdFZhbHVlVHlwZShuZXdWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gSWYgd2UgaGF2ZSBhIHZhbHVlIHR5cGUsIGhhbmRsZS4gVGhpcyBpcyBteSBsZWFzdCBmYXZvdXJpdGUgcGFydCBvZiBQb3Btb3Rpb24sIHNvLi4uIGVuam95LlxuICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZS50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTlVNX05VTUVSSUNBTF9WQUxVRVM7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvcE5hbWUgPSBOVU1FUklDQUxfVkFMVUVTW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWVQcm9wID0gbmV3VmFsdWVbcHJvcE5hbWVdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGlzIHByb3AgaXMgYSBzdHJpbmcgYW5kIHdlIGhhdmUgYSBzcGxpdHRlciwgc3BsaXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZS50eXBlLmhhc093blByb3BlcnR5KCdzcGxpdCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3BsaXRQcm9wID0gaXNTdHJpbmcodmFsdWVQcm9wKSA/IG5ld1ZhbHVlLnR5cGUuc3BsaXQodmFsdWVQcm9wKSA6IHt9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgc3BsaXRLZXkgaW4gc3BsaXRQcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzcGxpdFByb3AuaGFzT3duUHJvcGVydHkoc3BsaXRLZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21iaW5lZEtleSA9IGtleSArIHNwbGl0S2V5O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSBkb24ndCBoYXZlIGEgY2hpbGQgdmFsdWUgZm9yIHRoaXMga2V5LCBtYWtlIG9uZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjaGlsZHJlbltjb21iaW5lZEtleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkZWZhdWx0VmFsdWUgPSAobmV3VmFsdWUudHlwZS5kZWZhdWx0UHJvcHMgJiYgbmV3VmFsdWUudHlwZS5kZWZhdWx0UHJvcHNbc3BsaXRLZXldKSA/IG5ld1ZhbHVlLnR5cGUuZGVmYXVsdFByb3BzW3NwbGl0S2V5XSA6IG5ld1ZhbHVlLnR5cGUuZGVmYXVsdFByb3BzIHx8IHt9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW5bY29tYmluZWRLZXldID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5uZXdWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uZGVmYXVsdFZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRLZXk6IHNwbGl0S2V5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBjaGlsZHJlbltjb21iaW5lZEtleV0udHlwZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzQ2hpbGRyZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW5bY29tYmluZWRLZXldW3Byb3BOYW1lXSA9IHBhcnNlRmxvYXQoc3BsaXRQcm9wW3NwbGl0S2V5XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSBoYXZlIGEgdGVtcGxhdGUgZnVuY3Rpb24sIGdlbmVyYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFuZXdWYWx1ZS50ZW1wbGF0ZSAmJiBuZXdWYWx1ZS50eXBlLnRlbXBsYXRlICYmIGlzU3RyaW5nKHZhbHVlUHJvcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUudGVtcGxhdGUgPSBuZXdWYWx1ZS50eXBlLnRlbXBsYXRlKHZhbHVlUHJvcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChuZXdWYWx1ZS50eXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0geyAuLi5uZXdWYWx1ZSwgLi4ubmV3VmFsdWUudHlwZS5kZWZhdWx0UHJvcHMgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlUHJvcCAhPT0gdW5kZWZpbmVkICYmIG5ld1ZhbHVlLnR5cGUucGFyc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZVtwcm9wTmFtZV0gPSBuZXdWYWx1ZS50eXBlLnBhcnNlKHZhbHVlUHJvcCwgbmV3VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSAvLyBFbmQgdmFsdWUgdHlwZSBub25zZW5zZVxuXG4gICAgICAgICAgICAgICAgLy8gU2V0IGBwcmV2YCB0byBgY3VycmVudGAgZm9yIGZpcnN0IGZyYW1lIGFmdGVyIHNldFxuICAgICAgICAgICAgICAgIG5ld1ZhbHVlLnByZXYgPSBuZXdWYWx1ZS5jdXJyZW50O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIElmIHRoaXMgdmFsdWUgZG9lc24ndCBoYXZlIGNoaWxkcmVuLCBhZGQgdG8gdmFsdWVLZXlzXG4gICAgICAgICAgICAgICAgaWYgKCFoYXNDaGlsZHJlbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy52YWx1ZUtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZUtleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBPciBhZGQgdG8gcGFyZW50S2V5c1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLmNoaWxkcmVuID0gbmV3VmFsdWUuY2hpbGRyZW4gfHwge307XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudEtleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZXMoY2hpbGRyZW4pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMudmFsdWVzW2tleV0gPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICAgIERlY2lkZSB3aGV0aGVyIHRoaXMgQWN0aW9uIHdpbGwgcmVuZGVyIG9uIG5leHQgZnJhbWVcblxuICAgICAgICBAcGFyYW0gW0FjdGlvbl1cbiAgICAgICAgQHBhcmFtIFtudW1iZXJdXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJuIHRydWUgdG8gcmVuZGVyXG4gICAgKi9cbiAgICB3aWxsUmVuZGVyKGFjdGlvbiwgZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgICAgICBsZXQgaGFzQ2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vIENoZWNrIGlmIGJhc2UgdmFsdWVzIGhhdmUgdXBkYXRlZCBcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSB0aGlzLnZhbHVlS2V5c1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcblxuICAgICAgICAgICAgLy8gUnVuIHRyYW5zZm9ybSBmdW5jdGlvbiAoaWYgcHJlc2VudClcbiAgICAgICAgICAgIGlmICh2YWx1ZS50cmFuc2Zvcm0pIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gdmFsdWUudHJhbnNmb3JtKHZhbHVlLmN1cnJlbnQsIGtleSwgdGhpcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENhcCBtaW5pbXVtXG4gICAgICAgICAgICBpZiAoaXNOdW0odmFsdWUubWluKSkge1xuICAgICAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSBNYXRoLm1heCh2YWx1ZS5jdXJyZW50LCB2YWx1ZS5taW4pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDYXAgbWF4aW11bVxuICAgICAgICAgICAgaWYgKGlzTnVtKHZhbHVlLm1heCkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gTWF0aC5taW4odmFsdWUuY3VycmVudCwgdmFsdWUubWF4KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUm91bmQgbnVtYmVyXG4gICAgICAgICAgICBpZiAodmFsdWUucm91bmQpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gTWF0aC5yb3VuZCh2YWx1ZS5jdXJyZW50KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFsdWUuZnJhbWVDaGFuZ2UgPSB2YWx1ZS5jdXJyZW50IC0gdmFsdWUucHJldjtcblxuICAgICAgICAgICAgLy8gVXBkYXRlIHZlbG9jaXR5XG4gICAgICAgICAgICBpZiAoIXRoaXMuY2FsY3VsYXRlc1ZlbG9jaXR5KSB7XG4gICAgICAgICAgICAgICAgdmFsdWUudmVsb2NpdHkgPSBzcGVlZFBlclNlY29uZCh2YWx1ZS5mcmFtZUNoYW5nZSwgZWxhcHNlZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIHRoaXMgdmFsdWUgaGFzIGNoYW5nZWRcbiAgICAgICAgICAgIGlmICh2YWx1ZS5wcmV2ICE9PSB2YWx1ZS5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdmFsdWUucHJldiA9IHZhbHVlLmN1cnJlbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEFwcGVuZCB1bml0XG4gICAgICAgICAgICBjb25zdCB2YWx1ZUZvclN0YXRlID0gKHZhbHVlLnR5cGUgJiYgdmFsdWUudHlwZS5zZXJpYWxpemUpID8gdmFsdWUudHlwZS5zZXJpYWxpemUodmFsdWUuY3VycmVudCwgdmFsdWUpIDogdmFsdWUuY3VycmVudDtcblxuICAgICAgICAgICAgLy8gQWRkIHRvIHN0YXRlIGlmIHRoaXMgaXMgbm90IGEgY2hpbGQgdmF1ZVxuICAgICAgICAgICAgaWYgKCF2YWx1ZS5wYXJlbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlW2tleV0gPSB2YWx1ZUZvclN0YXRlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlc1t2YWx1ZS5wYXJlbnRdLmNoaWxkcmVuW3ZhbHVlLmNoaWxkS2V5XSA9IHZhbHVlRm9yU3RhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgcGFyZW50IHZhbHVlc1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtUGFyZW50S2V5czsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSB0aGlzLnBhcmVudEtleXNbaV07XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG5cbiAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSB2YWx1ZS50eXBlLmNvbWJpbmUodmFsdWUuY2hpbGRyZW4sIHZhbHVlLnRlbXBsYXRlKTtcblxuICAgICAgICAgICAgdGhpcy5zdGF0ZVtrZXldID0gdmFsdWUuY3VycmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm9uRnJhbWUpIHtcbiAgICAgICAgICAgIHRoaXMub25GcmFtZSh0aGlzLnN0YXRlLCB0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAodGhpcy5vbkNsZWFudXApID8gdHJ1ZSA6IGhhc0NoYW5nZWQ7XG4gICAgfVxuXG4gICAgaW5oZXJpdChwcm9wcyA9IHt9KSB7XG4gICAgICAgIGNvbnN0IHsgdmFsdWVzLCAuLi5wcm9wc1RvU2V0IH0gPSBwcm9wcztcbiAgICAgICAgY29uc3QgbmV3QWN0aW9uID0gc3VwZXIuaW5oZXJpdChwcm9wc1RvU2V0KTtcblxuICAgICAgICBpZiAodmFsdWVzKSB7XG4gICAgICAgICAgICBuZXdBY3Rpb24uc2V0KHsgdmFsdWVzIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ld0FjdGlvbjtcbiAgICB9XG5cbiAgICBwYXVzZSgpIHtcbiAgICAgICAgc3VwZXIuc3RvcCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXN1bWUoKSB7XG4gICAgICAgIHN1cGVyLnN0YXJ0KCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNBY3RpdmUgPyB0aGlzLnBhdXNlKCkgOiB0aGlzLnJlc3VtZSgpO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLnZhbHVlcztcbiAgICAgICAgc3VwZXIuc3RhcnQoKTtcblxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZXNba2V5XS5wcmV2ID0gdmFsdWVzW2tleV0ub3JpZ2luID0gdmFsdWVzW2tleV0uY3VycmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHN0YXRpYyBleHRlbmREZWZhdWx0VmFsdWUocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIHsgLi4udGhpcy5wcm90b3R5cGUuZGVmYXVsdFZhbHVlLCAuLi5wcm9wcyB9O1xuICAgIH1cblxuICAgIHN0YXRpYyBleHRlbmREZWZhdWx0UHJvcHMocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIHsgLi4udGhpcy5wcm90b3R5cGUuZGVmYXVsdFByb3BzLCAuLi5wcm9wcyB9O1xuICAgIH1cbn1cblxuQWN0aW9uLnByb3RvdHlwZS5kZWZhdWx0VmFsdWVQcm9wID0gJ2N1cnJlbnQnO1xuQWN0aW9uLnByb3RvdHlwZS5kZWZhdWx0VmFsdWUgPSB7XG4gICAgY3VycmVudDogMCxcbiAgICB2ZWxvY2l0eTogMCxcbiAgICByb3VuZDogZmFsc2UsXG4gICAgbWluOiB1bmRlZmluZWQsXG4gICAgbWF4OiB1bmRlZmluZWQsXG4gICAgdHJhbnNmb3JtOiB1bmRlZmluZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFjdGlvbjtcbiJdfQ==

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _Action2 = __webpack_require__(3);
	
	var _Action3 = _interopRequireDefault(_Action2);
	
	var _generateBlendCurve = __webpack_require__(37);
	
	var _generateBlendCurve2 = _interopRequireDefault(_generateBlendCurve);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/*
	    Methods and properties to add to bound Actions
	*/
	var boundOnStart = function (action) {
	    return action.flow.activateAction(action.id, action);
	};
	var boundOnStop = function (action) {
	    return action.flow.deactivateAction(action.id);
	};
	var boundProps = function (flow) {
	    return {
	        flow: flow,
	        isPriority: true,
	        onActivate: boundOnStart,
	        onDeactivate: boundOnStop
	    };
	};
	
	var Flow = function (_Action) {
	    _inherits(Flow, _Action);
	
	    function Flow(props) {
	        _classCallCheck(this, Flow);
	
	        var _this = _possibleConstructorReturn(this, _Action.call(this, props));
	
	        _this.activeActions = {};
	        _this.numActiveActions = 0;
	        return _this;
	    }
	
	    Flow.prototype.set = function set(props) {
	        _Action.prototype.set.call(this, props);
	
	        this.once();
	
	        return this;
	    };
	
	    /*
	        Bind Action to Actor
	    */
	
	
	    Flow.prototype.connect = function connect(action) {
	        var inheritedAction = action.inherit();
	        var newValues = {};
	        var hasNewValues = false;
	
	        // Create values on actor that don't exist
	        for (var key in inheritedAction.values) {
	            if (inheritedAction.values.hasOwnProperty(key) && !this.values.hasOwnProperty(key)) {
	                newValues[key] = {};
	                hasNewValues = true;
	            }
	        }
	
	        if (hasNewValues) {
	            this.set({ values: newValues });
	        }
	
	        inheritedAction.parentId = action.id;
	
	        return inheritedAction.set(boundProps(this, inheritedAction));
	    };
	
	    /*
	        Start Actor
	         If Action is provided, bind it to this Actor and start
	         @param (optional) [Action]
	    */
	
	
	    Flow.prototype.start = function start() {
	        _Action.prototype.start.call(this);
	
	        for (var key in this.activeActions) {
	            if (this.activeActions.hasOwnProperty(key)) {
	                var action = this.activeActions[key];
	                if (!action.isActive) {
	                    action.start();
	                }
	            }
	        }
	
	        return this;
	    };
	
	    Flow.prototype.stop = function stop() {
	        _Action.prototype.stop.call(this);
	
	        for (var key in this.activeActions) {
	            if (this.activeActions.hasOwnProperty(key)) {
	                this.activeActions[key].stop();
	            }
	        }
	
	        return this;
	    };
	
	    Flow.prototype.willRender = function willRender(actor, frameStamp, elapsed) {
	        for (var i = 0; i < this.numValueKeys; i++) {
	            var key = this.valueKeys[i];
	            var value = this.values[key];
	            var driver = value.numDrivers ? this.activeActions[value.drivers[0]] : false;
	            var newCurrent = value.numDrivers ? driver.values[key].current : value.current;
	
	            if (value.blendCurve) {
	                newCurrent = value.blendCurve();
	            }
	
	            value.current = newCurrent;
	        }
	
	        return _Action.prototype.willRender.call(this, actor, frameStamp, elapsed);
	    };
	
	    /*
	        Add active actions
	         @param [number]
	        @param [Action]
	    */
	
	
	    Flow.prototype.activateAction = function activateAction(id, action) {
	        this.activeActions[id] = action;
	        this.numActiveActions++;
	
	        for (var i = 0; i < action.numValueKeys; i++) {
	            var key = action.valueKeys[i];
	            var actionValue = action.values[key];
	            var value = this.values[key];
	
	            // If we're blending this action, and there's on already in progress
	            if (action.blend && value.numDrivers && !value.blendCurve && value.drivers[0].prototype === action.prototype) {
	                value.blendCurve = (0, _generateBlendCurve2.default)(this.activeActions[value.drivers[0]], action, value, key);
	            } else if (!action.isScrubbing) {
	                value.blendCurve = undefined;
	                // Pass Actor value properties to Action
	                if (actionValue.velocity === 0) {
	                    actionValue.velocity = value.velocity;
	                }
	
	                actionValue.from = actionValue.current = value.current;
	            }
	
	            value.drivers = [id];
	            value.numDrivers = value.drivers.length;
	        }
	
	        if (this.numActiveActions) {
	            _Action.prototype.start.call(this);
	        }
	    };
	
	    /*
	        Remove active actions
	         @param [number]
	    */
	
	
	    Flow.prototype.deactivateAction = function deactivateAction(id) {
	        var action = this.activeActions[id];
	
	        if (action) {
	            for (var i = 0; i < action.numValueKeys; i++) {
	                var key = action.valueKeys[i];
	                var value = this.values[key];
	                var driverIndex = value.drivers.indexOf(id);
	
	                if (driverIndex !== -1) {
	                    value.drivers.splice(driverIndex, 1);
	                    value.numDrivers--;
	                }
	            }
	
	            delete this.activeActions[id];
	            this.numActiveActions--;
	        }
	
	        if (!this.numActiveActions && this.isActive) {
	            _Action.prototype.stop.call(this);
	        }
	    };
	
	    return Flow;
	}(_Action3.default);
	
	Flow.prototype.defaultValue = _Action3.default.extendDefaultValue({
	    drivers: [],
	    numDrivers: 0
	});
	
	exports.default = Flow;
	//# sourceMappingURL=data:application/json;base64,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bUIsRUFBbkIsQ0FBUCxDQVpRO0FBYVIsaUJBQUssZ0JBQUwsR0FiUTtTQUFaOztBQWdCQSxZQUFJLENBQUMsS0FBSyxnQkFBTCxJQUF5QixLQUFLLFFBQUwsRUFBZTtBQUN6Qyw4QkFBTSxJQUFOLFlBRHlDO1NBQTdDOzs7V0F4SkY7OztBQThKTixLQUFLLFNBQUwsQ0FBZSxZQUFmLEdBQThCLGlCQUFPLGtCQUFQLENBQTBCO0FBQ3BELGFBQVMsRUFBVDtBQUNBLGdCQUFZLENBQVo7Q0FGMEIsQ0FBOUI7O2tCQUtlIiwiZmlsZSI6IkZsb3cuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdGlvbiBmcm9tICcuLi9hY3Rpb25zL0FjdGlvbic7XG5pbXBvcnQgZ2VuZXJhdGVCbGVuZEN1cnZlIGZyb20gJy4vZmxvdy9nZW5lcmF0ZS1ibGVuZC1jdXJ2ZSc7XG5cbi8qXG4gICAgTWV0aG9kcyBhbmQgcHJvcGVydGllcyB0byBhZGQgdG8gYm91bmQgQWN0aW9uc1xuKi9cbmNvbnN0IGJvdW5kT25TdGFydCA9IChhY3Rpb24pID0+IGFjdGlvbi5mbG93LmFjdGl2YXRlQWN0aW9uKGFjdGlvbi5pZCwgYWN0aW9uKTtcbmNvbnN0IGJvdW5kT25TdG9wID0gKGFjdGlvbikgPT4gYWN0aW9uLmZsb3cuZGVhY3RpdmF0ZUFjdGlvbihhY3Rpb24uaWQpO1xuY29uc3QgYm91bmRQcm9wcyA9IChmbG93KSA9PiAoe1xuICAgIGZsb3csXG4gICAgaXNQcmlvcml0eTogdHJ1ZSxcbiAgICBvbkFjdGl2YXRlOiBib3VuZE9uU3RhcnQsXG4gICAgb25EZWFjdGl2YXRlOiBib3VuZE9uU3RvcFxufSk7XG5cbmNsYXNzIEZsb3cgZXh0ZW5kcyBBY3Rpb24ge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5hY3RpdmVBY3Rpb25zID0ge307XG4gICAgICAgIHRoaXMubnVtQWN0aXZlQWN0aW9ucyA9IDA7XG4gICAgfVxuXG4gICAgc2V0KHByb3BzKSB7XG4gICAgICAgIHN1cGVyLnNldChwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5vbmNlKCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgQmluZCBBY3Rpb24gdG8gQWN0b3JcbiAgICAqL1xuICAgIGNvbm5lY3QoYWN0aW9uKSB7XG4gICAgICAgIGNvbnN0IGluaGVyaXRlZEFjdGlvbiA9IGFjdGlvbi5pbmhlcml0KCk7XG4gICAgICAgIGxldCBuZXdWYWx1ZXMgPSB7fTtcbiAgICAgICAgbGV0IGhhc05ld1ZhbHVlcyA9IGZhbHNlO1xuXG4gICAgICAgIC8vIENyZWF0ZSB2YWx1ZXMgb24gYWN0b3IgdGhhdCBkb24ndCBleGlzdFxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gaW5oZXJpdGVkQWN0aW9uLnZhbHVlcykge1xuICAgICAgICAgICAgaWYgKGluaGVyaXRlZEFjdGlvbi52YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiAhdGhpcy52YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIG5ld1ZhbHVlc1trZXldID0ge307XG4gICAgICAgICAgICAgICAgaGFzTmV3VmFsdWVzID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoYXNOZXdWYWx1ZXMpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KHsgdmFsdWVzOiBuZXdWYWx1ZXMgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpbmhlcml0ZWRBY3Rpb24ucGFyZW50SWQgPSBhY3Rpb24uaWQ7XG5cbiAgICAgICAgcmV0dXJuIGluaGVyaXRlZEFjdGlvbi5zZXQoYm91bmRQcm9wcyh0aGlzLCBpbmhlcml0ZWRBY3Rpb24pKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBTdGFydCBBY3RvclxuXG4gICAgICAgIElmIEFjdGlvbiBpcyBwcm92aWRlZCwgYmluZCBpdCB0byB0aGlzIEFjdG9yIGFuZCBzdGFydFxuXG4gICAgICAgIEBwYXJhbSAob3B0aW9uYWwpIFtBY3Rpb25dXG4gICAgKi9cbiAgICBzdGFydCgpIHtcbiAgICAgICAgc3VwZXIuc3RhcnQoKTtcblxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5hY3RpdmVBY3Rpb25zKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVBY3Rpb25zLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhY3Rpb24gPSB0aGlzLmFjdGl2ZUFjdGlvbnNba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAoIWFjdGlvbi5pc0FjdGl2ZSkge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb24uc3RhcnQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzdG9wKCkge1xuICAgICAgICBzdXBlci5zdG9wKCk7XG5cbiAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMuYWN0aXZlQWN0aW9ucykge1xuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlQWN0aW9ucy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVBY3Rpb25zW2tleV0uc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgd2lsbFJlbmRlcihhY3RvciwgZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHRoaXMudmFsdWVLZXlzW2ldO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuICAgICAgICAgICAgY29uc3QgZHJpdmVyID0gdmFsdWUubnVtRHJpdmVycyA/IHRoaXMuYWN0aXZlQWN0aW9uc1t2YWx1ZS5kcml2ZXJzWzBdXSA6IGZhbHNlO1xuICAgICAgICAgICAgbGV0IG5ld0N1cnJlbnQgPSB2YWx1ZS5udW1Ecml2ZXJzID8gZHJpdmVyLnZhbHVlc1trZXldLmN1cnJlbnQgOiB2YWx1ZS5jdXJyZW50O1xuXG4gICAgICAgICAgICBpZiAodmFsdWUuYmxlbmRDdXJ2ZSkge1xuICAgICAgICAgICAgICAgIG5ld0N1cnJlbnQgPSB2YWx1ZS5ibGVuZEN1cnZlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSBuZXdDdXJyZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1cGVyLndpbGxSZW5kZXIoYWN0b3IsIGZyYW1lU3RhbXAsIGVsYXBzZWQpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIEFkZCBhY3RpdmUgYWN0aW9uc1xuXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgICAgICBAcGFyYW0gW0FjdGlvbl1cbiAgICAqL1xuICAgIGFjdGl2YXRlQWN0aW9uKGlkLCBhY3Rpb24pIHtcbiAgICAgICAgdGhpcy5hY3RpdmVBY3Rpb25zW2lkXSA9IGFjdGlvbjtcbiAgICAgICAgdGhpcy5udW1BY3RpdmVBY3Rpb25zKys7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY3Rpb24ubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGFjdGlvbi52YWx1ZUtleXNbaV07XG4gICAgICAgICAgICBjb25zdCBhY3Rpb25WYWx1ZSA9IGFjdGlvbi52YWx1ZXNba2V5XTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcblxuICAgICAgICAgICAgLy8gSWYgd2UncmUgYmxlbmRpbmcgdGhpcyBhY3Rpb24sIGFuZCB0aGVyZSdzIG9uIGFscmVhZHkgaW4gcHJvZ3Jlc3NcbiAgICAgICAgICAgIGlmIChhY3Rpb24uYmxlbmQgJiYgdmFsdWUubnVtRHJpdmVycyAmJiAhdmFsdWUuYmxlbmRDdXJ2ZSAmJiAodmFsdWUuZHJpdmVyc1swXS5wcm90b3R5cGUgPT09IGFjdGlvbi5wcm90b3R5cGUpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUuYmxlbmRDdXJ2ZSA9IGdlbmVyYXRlQmxlbmRDdXJ2ZSh0aGlzLmFjdGl2ZUFjdGlvbnNbdmFsdWUuZHJpdmVyc1swXV0sIGFjdGlvbiwgdmFsdWUsIGtleSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFhY3Rpb24uaXNTY3J1YmJpbmcpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS5ibGVuZEN1cnZlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIC8vIFBhc3MgQWN0b3IgdmFsdWUgcHJvcGVydGllcyB0byBBY3Rpb25cbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9uVmFsdWUudmVsb2NpdHkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uVmFsdWUudmVsb2NpdHkgPSB2YWx1ZS52ZWxvY2l0eTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBhY3Rpb25WYWx1ZS5mcm9tID0gYWN0aW9uVmFsdWUuY3VycmVudCA9IHZhbHVlLmN1cnJlbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhbHVlLmRyaXZlcnMgPSBbaWRdO1xuICAgICAgICAgICAgdmFsdWUubnVtRHJpdmVycyA9IHZhbHVlLmRyaXZlcnMubGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubnVtQWN0aXZlQWN0aW9ucykge1xuICAgICAgICAgICAgc3VwZXIuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFJlbW92ZSBhY3RpdmUgYWN0aW9uc1xuXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgICovXG4gICAgZGVhY3RpdmF0ZUFjdGlvbihpZCkge1xuICAgICAgICBjb25zdCBhY3Rpb24gPSB0aGlzLmFjdGl2ZUFjdGlvbnNbaWRdO1xuXG4gICAgICAgIGlmIChhY3Rpb24pIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWN0aW9uLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gYWN0aW9uLnZhbHVlS2V5c1tpXTtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG4gICAgICAgICAgICAgICAgY29uc3QgZHJpdmVySW5kZXggPSB2YWx1ZS5kcml2ZXJzLmluZGV4T2YoaWQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGRyaXZlckluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5kcml2ZXJzLnNwbGljZShkcml2ZXJJbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLm51bURyaXZlcnMtLTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmFjdGl2ZUFjdGlvbnNbaWRdO1xuICAgICAgICAgICAgdGhpcy5udW1BY3RpdmVBY3Rpb25zLS07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMubnVtQWN0aXZlQWN0aW9ucyAmJiB0aGlzLmlzQWN0aXZlKSB7XG4gICAgICAgICAgICBzdXBlci5zdG9wKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkZsb3cucHJvdG90eXBlLmRlZmF1bHRWYWx1ZSA9IEFjdGlvbi5leHRlbmREZWZhdWx0VmFsdWUoe1xuICAgIGRyaXZlcnM6IFtdLFxuICAgIG51bURyaXZlcnM6IDBcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBGbG93O1xuIl19

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _Action2 = __webpack_require__(3);
	
	var _Action3 = _interopRequireDefault(_Action2);
	
	var _presetEasing = __webpack_require__(18);
	
	var _presetEasing2 = _interopRequireDefault(_presetEasing);
	
	var _utils = __webpack_require__(21);
	
	var _calc = __webpack_require__(20);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var COUNT = 'Count';
	var NEXT_STEPS = {
	    loop: 'restart',
	    yoyo: 'reverse',
	    flip: 'flipValues'
	};
	
	var Tween = function (_Action) {
	    _inherits(Tween, _Action);
	
	    function Tween() {
	        _classCallCheck(this, Tween);
	
	        return _possibleConstructorReturn(this, _Action.apply(this, arguments));
	    }
	
	    Tween.prototype.start = function start() {
	        this.elapsed = 0;
	        this.flipCount = this.yoyoCount = this.loopCount = 0;
	        this.isScrubbing = false;
	
	        return _Action.prototype.start.call(this);
	    };
	
	    Tween.prototype.onUpdate = function onUpdate(tween, frameStamp, elapsed) {
	        var progressTarget = this.playDirection === 1 ? 1 : 0;
	
	        this.ended = true;
	
	        if (!this.isScrubbing) {
	            this.elapsed += elapsed * this.dilate * this.playDirection;
	        }
	
	        for (var i = 0; i < this.numValueKeys; i++) {
	            var key = this.valueKeys[i];
	            var value = this.values[key];
	
	            var progress = (0, _calc.restrict)((0, _calc.getProgressFromValue)(this.elapsed - value.delay, 0, value.duration), 0, 1);
	
	            // Mark Tween as NOT ended if still in progress
	            if (progress !== progressTarget) {
	                this.ended = false;
	            }
	
	            // Step progress if we're stepping
	            if (value.steps) {
	                progress = (0, _calc.stepProgress)(progress, value.steps);
	            }
	
	            // Ease progress
	            value.current = (0, _calc.ease)(progress, value.from, value.to, value.ease);
	        }
	    };
	
	    Tween.prototype.onFrameEnd = function onFrameEnd() {
	        if (this.ended && !this.isScrubbing) {
	            var stepTaken = false;
	
	            for (var key in NEXT_STEPS) {
	                if (NEXT_STEPS.hasOwnProperty(key)) {
	                    if ((0, _utils.isNum)(this[key]) && this[key] > this[key + COUNT]) {
	                        this[key + COUNT]++;
	                        stepTaken = true;
	                        this[NEXT_STEPS[key]]();
	                    }
	                }
	            }
	
	            if (!stepTaken) {
	                this.complete();
	            }
	        }
	    };
	
	    Tween.prototype.flipValues = function flipValues() {
	        var values = this.values;
	
	        this.elapsed = this.duration - this.elapsed;
	
	        for (var key in values) {
	            if (values.hasOwnProperty(key)) {
	                var value = values[key];
	                var _ref = [value.from, value.to];
	                value.to = _ref[0];
	                value.from = _ref[1];
	            }
	        }
	
	        return this;
	    };
	
	    Tween.prototype.reverse = function reverse() {
	        this.playDirection *= -1;
	        return this;
	    };
	
	    Tween.prototype.restart = function restart() {
	        this.elapsed = this.playDirection === 1 ? 0 : this.duration;
	        this.started = (0, _utils.currentTime)();
	        return this;
	    };
	
	    Tween.prototype.seek = function seek(progress) {
	        this.seekTime(this.duration * progress);
	        return this;
	    };
	
	    Tween.prototype.seekTime = function seekTime(elapsed) {
	        if (!this.isActive || this.isScrubbing) {
	            this.once();
	            this.isScrubbing = true;
	        }
	
	        this.elapsed = elapsed;
	
	        return this;
	    };
	
	    return Tween;
	}(_Action3.default);
	
	Tween.prototype.defaultValueProp = 'to';
	Tween.prototype.defaultValue = _Action3.default.extendDefaultValue({
	    delay: 0,
	    duration: 300,
	    ease: _presetEasing2.default.easeOut,
	    elapsed: 0,
	    from: 0,
	    steps: 0,
	    to: 0,
	    round: false
	});
	Tween.prototype.defaultProps = _Action3.default.extendDefaultProps({
	    blend: true,
	    dilate: 1,
	    loop: 0,
	    yoyo: 0,
	    flip: 0,
	    loopCount: 0,
	    yoyoCount: 0,
	    flipCount: 0,
	    playDirection: 1,
	    isScrubbing: false,
	    ended: false,
	    elapsed: 0
	});
	
	exports.default = Tween;
	//# sourceMappingURL=data:application/json;base64,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LE1BQU0sU0FBTixDQUFnQixZQUFoQixHQUErQixpQkFBTyxrQkFBUCxDQUEwQjtBQUNyRCxXQUFPLElBQVA7QUFDQSxZQUFRLENBQVI7QUFDQSxVQUFNLENBQU47QUFDQSxVQUFNLENBQU47QUFDQSxVQUFNLENBQU47QUFDQSxlQUFXLENBQVg7QUFDQSxlQUFXLENBQVg7QUFDQSxlQUFXLENBQVg7QUFDQSxtQkFBZSxDQUFmO0FBQ0EsaUJBQWEsS0FBYjtBQUNBLFdBQU8sS0FBUDtBQUNBLGFBQVMsQ0FBVDtDQVoyQixDQUEvQjs7a0JBZWUiLCJmaWxlIjoiVHdlZW4uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdGlvbiBmcm9tICcuL0FjdGlvbic7XG5pbXBvcnQgZWFzaW5nIGZyb20gJy4vZWFzaW5nL3ByZXNldC1lYXNpbmcnO1xuaW1wb3J0IHsgY3VycmVudFRpbWUsIGlzTnVtIH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcbmltcG9ydCB7IGVhc2UsIHJlc3RyaWN0LCBnZXRQcm9ncmVzc0Zyb21WYWx1ZSwgc3RlcFByb2dyZXNzIH0gZnJvbSAnLi4vaW5jL2NhbGMnO1xuXG5jb25zdCBDT1VOVCA9ICdDb3VudCc7XG5jb25zdCBORVhUX1NURVBTID0ge1xuICAgIGxvb3A6ICdyZXN0YXJ0JyxcbiAgICB5b3lvOiAncmV2ZXJzZScsXG4gICAgZmxpcDogJ2ZsaXBWYWx1ZXMnXG59O1xuXG5jbGFzcyBUd2VlbiBleHRlbmRzIEFjdGlvbiB7XG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuZWxhcHNlZCA9IDA7XG4gICAgICAgIHRoaXMuZmxpcENvdW50ID0gdGhpcy55b3lvQ291bnQgPSB0aGlzLmxvb3BDb3VudCA9IDA7XG4gICAgICAgIHRoaXMuaXNTY3J1YmJpbmcgPSBmYWxzZTtcblxuICAgICAgICByZXR1cm4gc3VwZXIuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBvblVwZGF0ZSh0d2VlbiwgZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgICAgICBjb25zdCBwcm9ncmVzc1RhcmdldCA9ICh0aGlzLnBsYXlEaXJlY3Rpb24gPT09IDEpID8gMSA6IDA7XG5cbiAgICAgICAgdGhpcy5lbmRlZCA9IHRydWU7XG5cbiAgICAgICAgaWYgKCF0aGlzLmlzU2NydWJiaW5nKSB7XG4gICAgICAgICAgICB0aGlzLmVsYXBzZWQgKz0gKGVsYXBzZWQgKiB0aGlzLmRpbGF0ZSkgKiB0aGlzLnBsYXlEaXJlY3Rpb247XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHRoaXMudmFsdWVLZXlzW2ldO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuXG4gICAgICAgICAgICBsZXQgcHJvZ3Jlc3MgPSByZXN0cmljdChnZXRQcm9ncmVzc0Zyb21WYWx1ZSh0aGlzLmVsYXBzZWQgLSB2YWx1ZS5kZWxheSwgMCwgdmFsdWUuZHVyYXRpb24pLCAwLCAxKTtcblxuICAgICAgICAgICAgLy8gTWFyayBUd2VlbiBhcyBOT1QgZW5kZWQgaWYgc3RpbGwgaW4gcHJvZ3Jlc3NcbiAgICAgICAgICAgIGlmIChwcm9ncmVzcyAhPT0gcHJvZ3Jlc3NUYXJnZXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFN0ZXAgcHJvZ3Jlc3MgaWYgd2UncmUgc3RlcHBpbmdcbiAgICAgICAgICAgIGlmICh2YWx1ZS5zdGVwcykge1xuICAgICAgICAgICAgICAgIHByb2dyZXNzID0gc3RlcFByb2dyZXNzKHByb2dyZXNzLCB2YWx1ZS5zdGVwcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEVhc2UgcHJvZ3Jlc3NcbiAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSBlYXNlKHByb2dyZXNzLCB2YWx1ZS5mcm9tLCB2YWx1ZS50bywgdmFsdWUuZWFzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkZyYW1lRW5kKCkge1xuICAgICAgICBpZiAodGhpcy5lbmRlZCAmJiAhdGhpcy5pc1NjcnViYmluZykge1xuICAgICAgICAgICAgbGV0IHN0ZXBUYWtlbiA9IGZhbHNlO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gTkVYVF9TVEVQUykge1xuICAgICAgICAgICAgICAgIGlmIChORVhUX1NURVBTLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzTnVtKHRoaXNba2V5XSkgJiYgdGhpc1trZXldID4gdGhpc1trZXkgKyBDT1VOVF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNba2V5ICsgQ09VTlRdKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGVwVGFrZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tORVhUX1NURVBTW2tleV1dKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghc3RlcFRha2VuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmxpcFZhbHVlcygpIHtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gdGhpcy52YWx1ZXM7XG5cbiAgICAgICAgdGhpcy5lbGFwc2VkID0gdGhpcy5kdXJhdGlvbiAtIHRoaXMuZWxhcHNlZDtcblxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHZhbHVlc1trZXldO1xuICAgICAgICAgICAgICAgIFt2YWx1ZS50bywgdmFsdWUuZnJvbV0gPSBbdmFsdWUuZnJvbSwgdmFsdWUudG9dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmV2ZXJzZSgpIHtcbiAgICAgICAgdGhpcy5wbGF5RGlyZWN0aW9uICo9IC0xO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXN0YXJ0KCkge1xuICAgICAgICB0aGlzLmVsYXBzZWQgPSAodGhpcy5wbGF5RGlyZWN0aW9uID09PSAxKSA/IDAgOiB0aGlzLmR1cmF0aW9uO1xuICAgICAgICB0aGlzLnN0YXJ0ZWQgPSBjdXJyZW50VGltZSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZWVrKHByb2dyZXNzKSB7XG4gICAgICAgIHRoaXMuc2Vla1RpbWUodGhpcy5kdXJhdGlvbiAqIHByb2dyZXNzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2Vla1RpbWUoZWxhcHNlZCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNBY3RpdmUgfHwgdGhpcy5pc1NjcnViYmluZykge1xuICAgICAgICAgICAgdGhpcy5vbmNlKCk7XG4gICAgICAgICAgICB0aGlzLmlzU2NydWJiaW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZWxhcHNlZCA9IGVsYXBzZWQ7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuXG5Ud2Vlbi5wcm90b3R5cGUuZGVmYXVsdFZhbHVlUHJvcCA9ICd0byc7XG5Ud2Vlbi5wcm90b3R5cGUuZGVmYXVsdFZhbHVlID0gQWN0aW9uLmV4dGVuZERlZmF1bHRWYWx1ZSh7XG4gICAgZGVsYXk6IDAsXG4gICAgZHVyYXRpb246IDMwMCxcbiAgICBlYXNlOiBlYXNpbmcuZWFzZU91dCxcbiAgICBlbGFwc2VkOiAwLFxuICAgIGZyb206IDAsXG4gICAgc3RlcHM6IDAsXG4gICAgdG86IDAsXG4gICAgcm91bmQ6IGZhbHNlXG59KTtcblR3ZWVuLnByb3RvdHlwZS5kZWZhdWx0UHJvcHMgPSBBY3Rpb24uZXh0ZW5kRGVmYXVsdFByb3BzKHtcbiAgICBibGVuZDogdHJ1ZSxcbiAgICBkaWxhdGU6IDEsXG4gICAgbG9vcDogMCxcbiAgICB5b3lvOiAwLFxuICAgIGZsaXA6IDAsXG4gICAgbG9vcENvdW50OiAwLFxuICAgIHlveW9Db3VudDogMCxcbiAgICBmbGlwQ291bnQ6IDAsXG4gICAgcGxheURpcmVjdGlvbjogMSxcbiAgICBpc1NjcnViYmluZzogZmFsc2UsXG4gICAgZW5kZWQ6IGZhbHNlLFxuICAgIGVsYXBzZWQ6IDBcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBUd2VlbjtcbiJdfQ==

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _Action2 = __webpack_require__(3);
	
	var _Action3 = _interopRequireDefault(_Action2);
	
	var _calc = __webpack_require__(20);
	
	var _utils = __webpack_require__(21);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Physics = function (_Action) {
	    _inherits(Physics, _Action);
	
	    function Physics() {
	        _classCallCheck(this, Physics);
	
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }
	
	        var _this = _possibleConstructorReturn(this, _Action.call.apply(_Action, [this].concat(args)));
	
	        _this.inactiveFrames = 0;
	        _this.calculatesVelocity = true;
	        return _this;
	    }
	
	    Physics.prototype.onUpdate = function onUpdate(physics, frameStamp, elapsed) {
	        this.hasChanged = false;
	
	        for (var i = 0; i < this.numValueKeys; i++) {
	            var key = this.valueKeys[i];
	            var value = this.values[key];
	            var previousValue = value.prev;
	
	            // Apply acceleration
	            value.velocity += (0, _calc.speedPerFrame)(value.acceleration, elapsed);
	
	            // Apply friction
	            value.velocity *= Math.pow(1 - value.friction, elapsed / 100);
	
	            // Apply spring
	            if (value.spring && (0, _utils.isNum)(value.to)) {
	                var distanceToTarget = value.to - value.current;
	                value.velocity += distanceToTarget * (0, _calc.speedPerFrame)(value.spring, elapsed);
	            }
	
	            // Apply latest velocity
	            value.current += (0, _calc.speedPerFrame)(value.velocity, elapsed);
	
	            // Detect bounce
	            if (value.min !== undefined && value.current < value.min || value.max !== undefined && value.current > value.max) {
	                value.velocity *= -value.bounce;
	            }
	
	            // Check if value has changed
	            if (value.current !== previousValue || Math.abs(value.velocity) >= value.stopSpeed || value.spring && value.current !== value.to) {
	                this.hasChanged = true;
	            }
	        }
	    };
	
	    Physics.prototype.onFrameEnd = function onFrameEnd() {
	        if (this.maxInactiveFrames !== Infinity) {
	            this.inactiveFrames = this.hasChanged ? 1 : this.inactiveFrames + 1;
	
	            if (this.inactiveFrames >= this.maxInactiveFrames) {
	                this.complete();
	            }
	        }
	    };
	
	    return Physics;
	}(_Action3.default);
	
	Physics.prototype.defaultValueProp = 'velocity';
	Physics.prototype.defaultValue = _Action3.default.extendDefaultValue({
	    acceleration: 0, // [number]: Acceleration to apply to value, in units per second
	    bounce: 0, // [number]: Factor to multiply velocity by on bounce
	    spring: 0, // [number]: Spring strength during 'string'
	    stopSpeed: 0.001, // [number]: Stop simulation under this speed
	    friction: 0 // [number]: Friction to apply per frame, 0-1
	});
	Physics.prototype.defaultProps = _Action3.default.extendDefaultProps({
	    maxInactiveFrames: 3
	});
	
	exports.default = Physics;
	//# sourceMappingURL=data:application/json;base64,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InNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWN0aW9uIGZyb20gJy4vQWN0aW9uJztcbmltcG9ydCB7IHNwZWVkUGVyRnJhbWUgfSBmcm9tICcuLi9pbmMvY2FsYyc7XG5pbXBvcnQgeyBpc051bSB9IGZyb20gJy4uL2luYy91dGlscyc7XG5cbmNsYXNzIFBoeXNpY3MgZXh0ZW5kcyBBY3Rpb24ge1xuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJncyk7XG4gICAgICAgIHRoaXMuaW5hY3RpdmVGcmFtZXMgPSAwO1xuICAgICAgICB0aGlzLmNhbGN1bGF0ZXNWZWxvY2l0eSA9IHRydWU7XG4gICAgfVxuXG4gICAgb25VcGRhdGUocGh5c2ljcywgZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgICAgICB0aGlzLmhhc0NoYW5nZWQgPSBmYWxzZTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHRoaXMudmFsdWVLZXlzW2ldO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuICAgICAgICAgICAgY29uc3QgcHJldmlvdXNWYWx1ZSA9IHZhbHVlLnByZXY7XG5cbiAgICAgICAgICAgIC8vIEFwcGx5IGFjY2VsZXJhdGlvblxuICAgICAgICAgICAgdmFsdWUudmVsb2NpdHkgKz0gc3BlZWRQZXJGcmFtZSh2YWx1ZS5hY2NlbGVyYXRpb24sIGVsYXBzZWQpO1xuXG4gICAgICAgICAgICAvLyBBcHBseSBmcmljdGlvblxuICAgICAgICAgICAgdmFsdWUudmVsb2NpdHkgKj0gKDEgLSB2YWx1ZS5mcmljdGlvbikgKiogKGVsYXBzZWQgLyAxMDApO1xuXG4gICAgICAgICAgICAvLyBBcHBseSBzcHJpbmdcbiAgICAgICAgICAgIGlmICh2YWx1ZS5zcHJpbmcgJiYgaXNOdW0odmFsdWUudG8pKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGlzdGFuY2VUb1RhcmdldCA9IHZhbHVlLnRvIC0gdmFsdWUuY3VycmVudDtcbiAgICAgICAgICAgICAgICB2YWx1ZS52ZWxvY2l0eSArPSBkaXN0YW5jZVRvVGFyZ2V0ICogc3BlZWRQZXJGcmFtZSh2YWx1ZS5zcHJpbmcsIGVsYXBzZWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBBcHBseSBsYXRlc3QgdmVsb2NpdHlcbiAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgKz0gc3BlZWRQZXJGcmFtZSh2YWx1ZS52ZWxvY2l0eSwgZWxhcHNlZCk7XG5cbiAgICAgICAgICAgIC8vIERldGVjdCBib3VuY2VcbiAgICAgICAgICAgIGlmICgodmFsdWUubWluICE9PSB1bmRlZmluZWQgJiYgdmFsdWUuY3VycmVudCA8IHZhbHVlLm1pbikgfHwgKHZhbHVlLm1heCAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLmN1cnJlbnQgPiB2YWx1ZS5tYXgpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUudmVsb2NpdHkgKj0gLSB2YWx1ZS5ib3VuY2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHZhbHVlIGhhcyBjaGFuZ2VkXG4gICAgICAgICAgICBpZiAodmFsdWUuY3VycmVudCAhPT0gcHJldmlvdXNWYWx1ZSB8fCBNYXRoLmFicyh2YWx1ZS52ZWxvY2l0eSkgPj0gdmFsdWUuc3RvcFNwZWVkIHx8ICh2YWx1ZS5zcHJpbmcgJiYgdmFsdWUuY3VycmVudCAhPT0gdmFsdWUudG8pKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uRnJhbWVFbmQoKSB7XG4gICAgICAgIGlmICh0aGlzLm1heEluYWN0aXZlRnJhbWVzICE9PSBJbmZpbml0eSkge1xuICAgICAgICAgICAgdGhpcy5pbmFjdGl2ZUZyYW1lcyA9IHRoaXMuaGFzQ2hhbmdlZCA/IDEgOiB0aGlzLmluYWN0aXZlRnJhbWVzICsgMTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuaW5hY3RpdmVGcmFtZXMgPj0gdGhpcy5tYXhJbmFjdGl2ZUZyYW1lcykge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcGxldGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuUGh5c2ljcy5wcm90b3R5cGUuZGVmYXVsdFZhbHVlUHJvcCA9ICd2ZWxvY2l0eSc7XG5QaHlzaWNzLnByb3RvdHlwZS5kZWZhdWx0VmFsdWUgPSBBY3Rpb24uZXh0ZW5kRGVmYXVsdFZhbHVlKHtcbiAgICBhY2NlbGVyYXRpb246IDAsIC8vIFtudW1iZXJdOiBBY2NlbGVyYXRpb24gdG8gYXBwbHkgdG8gdmFsdWUsIGluIHVuaXRzIHBlciBzZWNvbmRcbiAgICBib3VuY2U6IDAsIC8vIFtudW1iZXJdOiBGYWN0b3IgdG8gbXVsdGlwbHkgdmVsb2NpdHkgYnkgb24gYm91bmNlXG4gICAgc3ByaW5nOiAwLCAvLyBbbnVtYmVyXTogU3ByaW5nIHN0cmVuZ3RoIGR1cmluZyAnc3RyaW5nJ1xuICAgIHN0b3BTcGVlZDogMC4wMDEsIC8vIFtudW1iZXJdOiBTdG9wIHNpbXVsYXRpb24gdW5kZXIgdGhpcyBzcGVlZFxuICAgIGZyaWN0aW9uOiAwIC8vIFtudW1iZXJdOiBGcmljdGlvbiB0byBhcHBseSBwZXIgZnJhbWUsIDAtMVxufSk7XG5QaHlzaWNzLnByb3RvdHlwZS5kZWZhdWx0UHJvcHMgPSBBY3Rpb24uZXh0ZW5kRGVmYXVsdFByb3BzKHtcbiAgICBtYXhJbmFjdGl2ZUZyYW1lczogM1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFBoeXNpY3M7XG4iXX0=

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _Action2 = __webpack_require__(3);
	
	var _Action3 = _interopRequireDefault(_Action2);
	
	var _Pointer = __webpack_require__(38);
	
	var _Pointer2 = _interopRequireDefault(_Pointer);
	
	var _calc = __webpack_require__(20);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/*
	    Scrape x/y coordinates from provided event
	
	    @param [event]
	    @return [object]
	*/
	var mouseEventToPoint = function (e) {
	    return {
	        x: e.pageX,
	        y: e.pageY
	    };
	};
	
	var touchEventToPoint = function (_ref) {
	    var changedTouches = _ref.changedTouches;
	    return {
	        x: changedTouches[0].clientX,
	        y: changedTouches[0].clientY
	    };
	};
	
	var createPointer = function (e) {
	    return e.touches ? new _Pointer2.default(touchEventToPoint(e), 'touchmove', touchEventToPoint) : new _Pointer2.default(mouseEventToPoint(e), 'mousemove', mouseEventToPoint);
	};
	
	var getActualEvent = function (e) {
	    return e.originalEvent || e;
	};
	
	var Track = function (_Action) {
	    _inherits(Track, _Action);
	
	    function Track() {
	        _classCallCheck(this, Track);
	
	        return _possibleConstructorReturn(this, _Action.apply(this, arguments));
	    }
	
	    Track.prototype.start = function start(input) {
	        _Action.prototype.start.call(this);
	
	        if (input) {
	            this.input = input.state ? input : createPointer(getActualEvent(input));
	        }
	
	        this.inputOffset = {};
	        this.inputOrigin = _extends({}, this.input.state);
	        this.input.start();
	    };
	
	    Track.prototype.stop = function stop() {
	        _Action.prototype.stop.call(this);
	        this.input.stop();
	    };
	
	    Track.prototype.onUpdate = function onUpdate(track, frameStamp, elapsed) {
	        this.inputOffset = (0, _calc.offset)(this.inputOrigin, this.input.state);
	
	        for (var i = 0; i < this.numValueKeys; i++) {
	            var key = this.valueKeys[i];
	
	            if (this.inputOffset.hasOwnProperty(key)) {
	                var value = this.values[key];
	
	                if (value.direct) {
	                    value.current = this.input.state[value.watch || key];
	                } else {
	                    value.current = value.from + this.inputOffset[value.watch || key];
	                }
	
	                // Smooth value if we have smoothing
	                if (value.smooth) {
	                    value.current = (0, _calc.smooth)(value.current, value.prev, elapsed, value.smooth);
	                }
	            }
	        }
	    };
	
	    return Track;
	}(_Action3.default);
	
	Track.prototype.defaultValueProp = 'watch';
	Track.prototype.defaultValue = _Action3.default.extendDefaultValue({
	    direct: false
	});
	
	exports.default = Track;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL1RyYWNrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQVFBLElBQU0sb0JBQW9CLFVBQUMsQ0FBRDtXQUFRO0FBQzlCLFdBQUcsRUFBRSxLQUFGO0FBQ0gsV0FBRyxFQUFFLEtBQUY7O0NBRm1COztBQUsxQixJQUFNLG9CQUFvQjtRQUFHO1dBQXNCO0FBQy9DLFdBQUcsZUFBZSxDQUFmLEVBQWtCLE9BQWxCO0FBQ0gsV0FBRyxlQUFlLENBQWYsRUFBa0IsT0FBbEI7O0NBRm1COztBQUsxQixJQUFNLGdCQUFnQixVQUFDLENBQUQ7V0FBTyxFQUFFLE9BQUYsR0FDekIsc0JBQVksa0JBQWtCLENBQWxCLENBQVosRUFBa0MsV0FBbEMsRUFBK0MsaUJBQS9DLENBRHlCLEdBRXpCLHNCQUFZLGtCQUFrQixDQUFsQixDQUFaLEVBQWtDLFdBQWxDLEVBQStDLGlCQUEvQyxDQUZ5QjtDQUFQOztBQUl0QixJQUFNLGlCQUFpQixVQUFDLENBQUQ7V0FBTyxFQUFFLGFBQUYsSUFBbUIsQ0FBbkI7Q0FBUDs7SUFFakI7Ozs7Ozs7OztvQkFDRix1QkFBTSxPQUFPO0FBQ1QsMEJBQU0sS0FBTixZQURTOztBQUdULFlBQUksS0FBSixFQUFXO0FBQ1AsaUJBQUssS0FBTCxHQUFhLE1BQU0sS0FBTixHQUFjLEtBQWQsR0FBc0IsY0FBYyxlQUFlLEtBQWYsQ0FBZCxDQUF0QixDQUROO1NBQVg7O0FBSUEsYUFBSyxXQUFMLEdBQW1CLEVBQW5CLENBUFM7QUFRVCxhQUFLLFdBQUwsZ0JBQXdCLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FBeEIsQ0FSUztBQVNULGFBQUssS0FBTCxDQUFXLEtBQVgsR0FUUzs7O0FBRFgsb0JBYUYsdUJBQU87QUFDSCwwQkFBTSxJQUFOLFlBREc7QUFFSCxhQUFLLEtBQUwsQ0FBVyxJQUFYLEdBRkc7OztBQWJMLG9CQWtCRiw2QkFBUyxPQUFPLFlBQVksU0FBUztBQUNqQyxhQUFLLFdBQUwsR0FBbUIsa0JBQU8sS0FBSyxXQUFMLEVBQWtCLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FBNUMsQ0FEaUM7O0FBR2pDLGFBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLEtBQUssWUFBTCxFQUFtQixHQUF2QyxFQUE0QztBQUN4QyxnQkFBTSxNQUFNLEtBQUssU0FBTCxDQUFlLENBQWYsQ0FBTixDQURrQzs7QUFHeEMsZ0JBQUksS0FBSyxXQUFMLENBQWlCLGNBQWpCLENBQWdDLEdBQWhDLENBQUosRUFBMEM7QUFDdEMsb0JBQU0sUUFBUSxLQUFLLE1BQUwsQ0FBWSxHQUFaLENBQVIsQ0FEZ0M7O0FBR3RDLG9CQUFJLE1BQU0sTUFBTixFQUFjO0FBQ2QsMEJBQU0sT0FBTixHQUFnQixLQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLE1BQU0sS0FBTixJQUFlLEdBQWYsQ0FBakMsQ0FEYztpQkFBbEIsTUFFTztBQUNILDBCQUFNLE9BQU4sR0FBZ0IsTUFBTSxJQUFOLEdBQWEsS0FBSyxXQUFMLENBQWlCLE1BQU0sS0FBTixJQUFlLEdBQWYsQ0FBOUIsQ0FEYjtpQkFGUDs7O0FBSHNDLG9CQVVsQyxNQUFNLE1BQU4sRUFBYztBQUNkLDBCQUFNLE9BQU4sR0FBZ0Isa0JBQU8sTUFBTSxPQUFOLEVBQWUsTUFBTSxJQUFOLEVBQVksT0FBbEMsRUFBMkMsTUFBTSxNQUFOLENBQTNELENBRGM7aUJBQWxCO2FBVko7U0FISjs7O1dBckJGOzs7QUEwQ04sTUFBTSxTQUFOLENBQWdCLGdCQUFoQixHQUFtQyxPQUFuQztBQUNBLE1BQU0sU0FBTixDQUFnQixZQUFoQixHQUErQixpQkFBTyxrQkFBUCxDQUEwQjtBQUNyRCxZQUFRLEtBQVI7Q0FEMkIsQ0FBL0I7O2tCQUllIiwiZmlsZSI6IlRyYWNrLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY3Rpb24gZnJvbSAnLi9BY3Rpb24nO1xuaW1wb3J0IFBvaW50ZXIgZnJvbSAnLi4vaW5wdXQvUG9pbnRlcic7XG5pbXBvcnQgeyBzbW9vdGgsIG9mZnNldCB9IGZyb20gJy4uL2luYy9jYWxjJztcblxuLypcbiAgICBTY3JhcGUgeC95IGNvb3JkaW5hdGVzIGZyb20gcHJvdmlkZWQgZXZlbnRcblxuICAgIEBwYXJhbSBbZXZlbnRdXG4gICAgQHJldHVybiBbb2JqZWN0XVxuKi9cbmNvbnN0IG1vdXNlRXZlbnRUb1BvaW50ID0gKGUpID0+ICh7XG4gICAgeDogZS5wYWdlWCxcbiAgICB5OiBlLnBhZ2VZXG59KTtcblxuY29uc3QgdG91Y2hFdmVudFRvUG9pbnQgPSAoeyBjaGFuZ2VkVG91Y2hlcyB9KSA9PiAoe1xuICAgIHg6IGNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFgsXG4gICAgeTogY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WVxufSk7XG5cbmNvbnN0IGNyZWF0ZVBvaW50ZXIgPSAoZSkgPT4gZS50b3VjaGVzID9cbiAgICBuZXcgUG9pbnRlcih0b3VjaEV2ZW50VG9Qb2ludChlKSwgJ3RvdWNobW92ZScsIHRvdWNoRXZlbnRUb1BvaW50KSA6IFxuICAgIG5ldyBQb2ludGVyKG1vdXNlRXZlbnRUb1BvaW50KGUpLCAnbW91c2Vtb3ZlJywgbW91c2VFdmVudFRvUG9pbnQpO1xuXG5jb25zdCBnZXRBY3R1YWxFdmVudCA9IChlKSA9PiBlLm9yaWdpbmFsRXZlbnQgfHwgZTtcblxuY2xhc3MgVHJhY2sgZXh0ZW5kcyBBY3Rpb24ge1xuICAgIHN0YXJ0KGlucHV0KSB7XG4gICAgICAgIHN1cGVyLnN0YXJ0KCk7XG5cbiAgICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0ID0gaW5wdXQuc3RhdGUgPyBpbnB1dCA6IGNyZWF0ZVBvaW50ZXIoZ2V0QWN0dWFsRXZlbnQoaW5wdXQpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW5wdXRPZmZzZXQgPSB7fTtcbiAgICAgICAgdGhpcy5pbnB1dE9yaWdpbiA9IHsgLi4udGhpcy5pbnB1dC5zdGF0ZSB9O1xuICAgICAgICB0aGlzLmlucHV0LnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgc3RvcCgpIHtcbiAgICAgICAgc3VwZXIuc3RvcCgpO1xuICAgICAgICB0aGlzLmlucHV0LnN0b3AoKTtcbiAgICB9XG5cbiAgICBvblVwZGF0ZSh0cmFjaywgZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgICAgICB0aGlzLmlucHV0T2Zmc2V0ID0gb2Zmc2V0KHRoaXMuaW5wdXRPcmlnaW4sIHRoaXMuaW5wdXQuc3RhdGUpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gdGhpcy52YWx1ZUtleXNbaV07XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmlucHV0T2Zmc2V0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG5cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUuZGlyZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSB0aGlzLmlucHV0LnN0YXRlW3ZhbHVlLndhdGNoIHx8IGtleV07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IHZhbHVlLmZyb20gKyB0aGlzLmlucHV0T2Zmc2V0W3ZhbHVlLndhdGNoIHx8IGtleV07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gU21vb3RoIHZhbHVlIGlmIHdlIGhhdmUgc21vb3RoaW5nXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLnNtb290aCkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gc21vb3RoKHZhbHVlLmN1cnJlbnQsIHZhbHVlLnByZXYsIGVsYXBzZWQsIHZhbHVlLnNtb290aCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5UcmFjay5wcm90b3R5cGUuZGVmYXVsdFZhbHVlUHJvcCA9ICd3YXRjaCc7XG5UcmFjay5wcm90b3R5cGUuZGVmYXVsdFZhbHVlID0gQWN0aW9uLmV4dGVuZERlZmF1bHRWYWx1ZSh7XG4gICAgZGlyZWN0OiBmYWxzZVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFRyYWNrO1xuIl19

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _loop = __webpack_require__(39);
	
	var loop = _interopRequireWildcard(_loop);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*
	                                                                                                                                                              Base Task class for creating a task on the main render loop.
	                                                                                                                                                          */
	
	
	function cleanup() {
	    this.onCleanup = undefined;
	    loop.deactivate(this.id);
	}
	
	function activate() {
	    this.onCleanup = cleanup;
	}
	
	var Task = function () {
	    function Task(props) {
	        _classCallCheck(this, Task);
	
	        this.id = loop.getTaskId();
	        this.isActive = false;
	
	        if (this.defaultProps) {
	            for (var key in this.defaultProps) {
	                if (this.defaultProps.hasOwnProperty(key)) {
	                    this[key] = this.defaultProps[key];
	                }
	            }
	        }
	
	        this.set(props);
	    }
	
	    Task.prototype.set = function set(props) {
	        for (var key in props) {
	            if (props.hasOwnProperty(key)) {
	                this[key] = props[key];
	            }
	        }
	
	        return this;
	    };
	
	    Task.prototype.start = function start() {
	        loop.activate(this.id, this);
	
	        this.onActivateLoop = this.onCleanup = undefined;
	        this.isComplete = false;
	
	        if (this.onStart) {
	            this.onStart(this);
	        }
	
	        return this;
	    };
	
	    Task.prototype.stop = function stop() {
	        loop.deactivate(this.id);
	
	        if (this.onStop) {
	            this.onStop(this);
	        }
	
	        return this;
	    };
	
	    Task.prototype.once = function once() {
	        loop.activate(this.id, this);
	        this.onCleanup = undefined;
	        this.onActivateLoop = activate;
	
	        return this;
	    };
	
	    Task.prototype.complete = function complete() {
	        this.stop();
	
	        if (this.onComplete) {
	            this.onComplete(this);
	        }
	    };
	
	    /*
	        # Extend this Process with new properties
	        ## Returns new instance of this Process's `prototype` with existing and new properties
	         @param [object] (optional)
	        @return [Process]
	    */
	
	
	    Task.prototype.inherit = function inherit(props) {
	        var id = this.id;
	
	        var inheritedProps = _objectWithoutProperties(this, ['id']);
	
	        return new this.constructor(_extends({}, inheritedProps, props));
	    };
	
	    return Task;
	}();
	
	exports.default = Task;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90YXNrL1Rhc2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBR0E7O0lBQVk7Ozs7Ozs7Ozs7O0FBRVosU0FBUyxPQUFULEdBQW1CO0FBQ2YsU0FBSyxTQUFMLEdBQWlCLFNBQWpCLENBRGU7QUFFZixTQUFLLFVBQUwsQ0FBZ0IsS0FBSyxFQUFMLENBQWhCLENBRmU7Q0FBbkI7O0FBS0EsU0FBUyxRQUFULEdBQW9CO0FBQ2hCLFNBQUssU0FBTCxHQUFpQixPQUFqQixDQURnQjtDQUFwQjs7SUFJcUI7QUFDakIsYUFEaUIsSUFDakIsQ0FBWSxLQUFaLEVBQW1COzhCQURGLE1BQ0U7O0FBQ2YsYUFBSyxFQUFMLEdBQVUsS0FBSyxTQUFMLEVBQVYsQ0FEZTtBQUVmLGFBQUssUUFBTCxHQUFnQixLQUFoQixDQUZlOztBQUlmLFlBQUksS0FBSyxZQUFMLEVBQW1CO0FBQ25CLGlCQUFLLElBQUksR0FBSixJQUFXLEtBQUssWUFBTCxFQUFtQjtBQUMvQixvQkFBSSxLQUFLLFlBQUwsQ0FBa0IsY0FBbEIsQ0FBaUMsR0FBakMsQ0FBSixFQUEyQztBQUN2Qyx5QkFBSyxHQUFMLElBQVksS0FBSyxZQUFMLENBQWtCLEdBQWxCLENBQVosQ0FEdUM7aUJBQTNDO2FBREo7U0FESjs7QUFRQSxhQUFLLEdBQUwsQ0FBUyxLQUFULEVBWmU7S0FBbkI7O0FBRGlCLG1CQWdCakIsbUJBQUksT0FBTztBQUNQLGFBQUssSUFBSSxHQUFKLElBQVcsS0FBaEIsRUFBdUI7QUFDbkIsZ0JBQUksTUFBTSxjQUFOLENBQXFCLEdBQXJCLENBQUosRUFBK0I7QUFDM0IscUJBQUssR0FBTCxJQUFZLE1BQU0sR0FBTixDQUFaLENBRDJCO2FBQS9CO1NBREo7O0FBTUEsZUFBTyxJQUFQLENBUE87OztBQWhCTSxtQkEwQmpCLHlCQUFRO0FBQ0osYUFBSyxRQUFMLENBQWMsS0FBSyxFQUFMLEVBQVMsSUFBdkIsRUFESTs7QUFHSixhQUFLLGNBQUwsR0FBc0IsS0FBSyxTQUFMLEdBQWlCLFNBQWpCLENBSGxCO0FBSUosYUFBSyxVQUFMLEdBQWtCLEtBQWxCLENBSkk7O0FBTUosWUFBSSxLQUFLLE9BQUwsRUFBYztBQUNkLGlCQUFLLE9BQUwsQ0FBYSxJQUFiLEVBRGM7U0FBbEI7O0FBSUEsZUFBTyxJQUFQLENBVkk7OztBQTFCUyxtQkF1Q2pCLHVCQUFPO0FBQ0gsYUFBSyxVQUFMLENBQWdCLEtBQUssRUFBTCxDQUFoQixDQURHOztBQUdILFlBQUksS0FBSyxNQUFMLEVBQWE7QUFDYixpQkFBSyxNQUFMLENBQVksSUFBWixFQURhO1NBQWpCOztBQUlBLGVBQU8sSUFBUCxDQVBHOzs7QUF2Q1UsbUJBaURqQix1QkFBTztBQUNILGFBQUssUUFBTCxDQUFjLEtBQUssRUFBTCxFQUFTLElBQXZCLEVBREc7QUFFSCxhQUFLLFNBQUwsR0FBaUIsU0FBakIsQ0FGRztBQUdILGFBQUssY0FBTCxHQUFzQixRQUF0QixDQUhHOztBQUtILGVBQU8sSUFBUCxDQUxHOzs7QUFqRFUsbUJBeURqQiwrQkFBVztBQUNQLGFBQUssSUFBTCxHQURPOztBQUdQLFlBQUksS0FBSyxVQUFMLEVBQWlCO0FBQ2pCLGlCQUFLLFVBQUwsQ0FBZ0IsSUFBaEIsRUFEaUI7U0FBckI7Ozs7Ozs7Ozs7O0FBNURhLG1CQXdFakIsMkJBQVEsT0FBTztZQUNILEtBQTBCLEtBQTFCLEdBREc7O1lBQ0ksMENBQW1CLGNBRHZCOztBQUVYLGVBQU8sSUFBSSxLQUFLLFdBQUwsY0FBc0IsZ0JBQW1CLE1BQTdDLENBQVAsQ0FGVzs7O1dBeEVFIiwiZmlsZSI6IlRhc2suanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgICBCYXNlIFRhc2sgY2xhc3MgZm9yIGNyZWF0aW5nIGEgdGFzayBvbiB0aGUgbWFpbiByZW5kZXIgbG9vcC5cbiovXG5pbXBvcnQgKiBhcyBsb29wIGZyb20gJy4vbG9vcCc7XG5cbmZ1bmN0aW9uIGNsZWFudXAoKSB7XG4gICAgdGhpcy5vbkNsZWFudXAgPSB1bmRlZmluZWQ7XG4gICAgbG9vcC5kZWFjdGl2YXRlKHRoaXMuaWQpO1xufVxuXG5mdW5jdGlvbiBhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLm9uQ2xlYW51cCA9IGNsZWFudXA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHRoaXMuaWQgPSBsb29wLmdldFRhc2tJZCgpO1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHRoaXMuZGVmYXVsdFByb3BzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5kZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kZWZhdWx0UHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSB0aGlzLmRlZmF1bHRQcm9wc1trZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0KHByb3BzKTtcbiAgICB9XG5cbiAgICBzZXQocHJvcHMpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHByb3BzKSB7XG4gICAgICAgICAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IHByb3BzW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgbG9vcC5hY3RpdmF0ZSh0aGlzLmlkLCB0aGlzKTtcblxuICAgICAgICB0aGlzLm9uQWN0aXZhdGVMb29wID0gdGhpcy5vbkNsZWFudXAgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuaXNDb21wbGV0ZSA9IGZhbHNlO1xuXG4gICAgICAgIGlmICh0aGlzLm9uU3RhcnQpIHtcbiAgICAgICAgICAgIHRoaXMub25TdGFydCh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHN0b3AoKSB7XG4gICAgICAgIGxvb3AuZGVhY3RpdmF0ZSh0aGlzLmlkKTtcbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLm9uU3RvcCkge1xuICAgICAgICAgICAgdGhpcy5vblN0b3AodGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBvbmNlKCkge1xuICAgICAgICBsb29wLmFjdGl2YXRlKHRoaXMuaWQsIHRoaXMpO1xuICAgICAgICB0aGlzLm9uQ2xlYW51cCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5vbkFjdGl2YXRlTG9vcCA9IGFjdGl2YXRlO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGNvbXBsZXRlKCkge1xuICAgICAgICB0aGlzLnN0b3AoKTtcblxuICAgICAgICBpZiAodGhpcy5vbkNvbXBsZXRlKSB7XG4gICAgICAgICAgICB0aGlzLm9uQ29tcGxldGUodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIEV4dGVuZCB0aGlzIFByb2Nlc3Mgd2l0aCBuZXcgcHJvcGVydGllc1xuICAgICAgICAjIyBSZXR1cm5zIG5ldyBpbnN0YW5jZSBvZiB0aGlzIFByb2Nlc3MncyBgcHJvdG90eXBlYCB3aXRoIGV4aXN0aW5nIGFuZCBuZXcgcHJvcGVydGllc1xuXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XSAob3B0aW9uYWwpXG4gICAgICAgIEByZXR1cm4gW1Byb2Nlc3NdXG4gICAgKi9cbiAgICBpbmhlcml0KHByb3BzKSB7XG4gICAgICAgIGNvbnN0IHsgaWQsIC4uLmluaGVyaXRlZFByb3BzIH0gPSB0aGlzO1xuICAgICAgICByZXR1cm4gbmV3IHRoaXMuY29uc3RydWN0b3IoeyAuLi5pbmhlcml0ZWRQcm9wcywgLi4ucHJvcHMgfSk7XG4gICAgfVxufSJdfQ==

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _Task2 = __webpack_require__(8);
	
	var _Task3 = _interopRequireDefault(_Task2);
	
	var _utils = __webpack_require__(21);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Input = function (_Task) {
	    _inherits(Input, _Task);
	
	    function Input(initialValues, poll) {
	        _classCallCheck(this, Input);
	
	        var _this = _possibleConstructorReturn(this, _Task.call(this));
	
	        _this.state = initialValues;
	
	        if ((0, _utils.isFunc)(poll)) {
	            _this.onFrameStart = function () {
	                return _this.latest(_this.poll());
	            };
	        }
	        return _this;
	    }
	
	    /*
	        Manually add latest values
	         @param [object]
	    */
	
	
	    Input.prototype.latest = function latest(props) {
	        this.state = _extends({}, this.state, props);
	    };
	
	    return Input;
	}(_Task3.default);
	
	exports.default = Input;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbnB1dC9JbnB1dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRXFCOzs7QUFDakIsYUFEaUIsS0FDakIsQ0FBWSxhQUFaLEVBQTJCLElBQTNCLEVBQWlDOzhCQURoQixPQUNnQjs7cURBQzdCLGtCQUQ2Qjs7QUFFN0IsY0FBSyxLQUFMLEdBQWEsYUFBYixDQUY2Qjs7QUFJN0IsWUFBSSxtQkFBTyxJQUFQLENBQUosRUFBa0I7QUFDZCxrQkFBSyxZQUFMLEdBQW9CO3VCQUFNLE1BQUssTUFBTCxDQUFZLE1BQUssSUFBTCxFQUFaO2FBQU4sQ0FETjtTQUFsQjtxQkFKNkI7S0FBakM7Ozs7Ozs7O0FBRGlCLG9CQWVqQix5QkFBTyxPQUFPO0FBQ1YsYUFBSyxLQUFMLGdCQUFrQixLQUFLLEtBQUwsRUFBZSxNQUFqQyxDQURVOzs7V0FmRyIsImZpbGUiOiJJbnB1dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGFzayBmcm9tICcuLi90YXNrL1Rhc2snO1xuaW1wb3J0IHsgaXNGdW5jIH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXQgZXh0ZW5kcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3Rvcihpbml0aWFsVmFsdWVzLCBwb2xsKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBpbml0aWFsVmFsdWVzO1xuXG4gICAgICAgIGlmIChpc0Z1bmMocG9sbCkpIHtcbiAgICAgICAgICAgIHRoaXMub25GcmFtZVN0YXJ0ID0gKCkgPT4gdGhpcy5sYXRlc3QodGhpcy5wb2xsKCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgTWFudWFsbHkgYWRkIGxhdGVzdCB2YWx1ZXNcblxuICAgICAgICBAcGFyYW0gW29iamVjdF1cbiAgICAqL1xuICAgIGxhdGVzdChwcm9wcykge1xuICAgICAgICB0aGlzLnN0YXRlID0geyAuLi50aGlzLnN0YXRlLCAuLi5wcm9wcyB9O1xuICAgIH1cbn1cbiJdfQ==

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _timeline = __webpack_require__(11);
	
	var _timeline2 = _interopRequireDefault(_timeline);
	
	var _utils = __webpack_require__(21);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var DEFAULT_INTERVAL = 100;
	
	exports.default = function (tweens, props) {
	    var propsIsDuration = (0, _utils.isNum)(props);
	    var interval = propsIsDuration ? props : props ? props.interval || DEFAULT_INTERVAL : DEFAULT_INTERVAL;
	    var at = 0;
	    var timelineDefinition = tweens.map(function (tween) {
	        var def = { tween: tween, at: at };
	        at += interval;
	        return def;
	    });
	
	    return (0, _timeline2.default)(timelineDefinition, props);
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvc3RhZ2dlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBLElBQU0sbUJBQW1CLEdBQW5COztrQkFFUyxVQUFDLE1BQUQsRUFBUyxLQUFULEVBQW1CO0FBQzlCLFFBQU0sa0JBQWtCLGtCQUFNLEtBQU4sQ0FBbEIsQ0FEd0I7QUFFOUIsUUFBTSxXQUFXLGtCQUFrQixLQUFsQixHQUEwQixRQUFRLE1BQU0sUUFBTixJQUFrQixnQkFBbEIsR0FBcUMsZ0JBQTdDLENBRmI7QUFHOUIsUUFBSSxLQUFLLENBQUwsQ0FIMEI7QUFJOUIsUUFBTSxxQkFBcUIsT0FBTyxHQUFQLENBQVcsVUFBQyxLQUFELEVBQVc7QUFDN0MsWUFBTSxNQUFNLEVBQUUsWUFBRixFQUFTLE1BQVQsRUFBTixDQUR1QztBQUU3QyxjQUFNLFFBQU4sQ0FGNkM7QUFHN0MsZUFBTyxHQUFQLENBSDZDO0tBQVgsQ0FBaEMsQ0FKd0I7O0FBVTlCLFdBQU8sd0JBQVMsa0JBQVQsRUFBNkIsS0FBN0IsQ0FBUCxDQVY4QjtDQUFuQiIsImZpbGUiOiJzdGFnZ2VyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0aW1lbGluZSBmcm9tICcuL3RpbWVsaW5lJztcbmltcG9ydCB7IGlzTnVtIH0gZnJvbSAnLi91dGlscyc7XG5cbmNvbnN0IERFRkFVTFRfSU5URVJWQUwgPSAxMDA7XG5cbmV4cG9ydCBkZWZhdWx0ICh0d2VlbnMsIHByb3BzKSA9PiB7XG4gICAgY29uc3QgcHJvcHNJc0R1cmF0aW9uID0gaXNOdW0ocHJvcHMpO1xuICAgIGNvbnN0IGludGVydmFsID0gcHJvcHNJc0R1cmF0aW9uID8gcHJvcHMgOiBwcm9wcyA/IHByb3BzLmludGVydmFsIHx8IERFRkFVTFRfSU5URVJWQUwgOiBERUZBVUxUX0lOVEVSVkFMO1xuICAgIGxldCBhdCA9IDA7XG4gICAgY29uc3QgdGltZWxpbmVEZWZpbml0aW9uID0gdHdlZW5zLm1hcCgodHdlZW4pID0+IHtcbiAgICAgICAgY29uc3QgZGVmID0geyB0d2VlbiwgYXQgfTtcbiAgICAgICAgYXQgKz0gaW50ZXJ2YWw7XG4gICAgICAgIHJldHVybiBkZWY7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGltZWxpbmUodGltZWxpbmVEZWZpbml0aW9uLCBwcm9wcyk7XG59OyJdfQ==

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = timeline;
	
	var _Tween = __webpack_require__(5);
	
	var _Tween2 = _interopRequireDefault(_Tween);
	
	var _presetEasing = __webpack_require__(18);
	
	var _presetEasing2 = _interopRequireDefault(_presetEasing);
	
	var _calc = __webpack_require__(20);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*
	    @param [array]
	        Sequential array of tweens, each item can be a tween or definition obj:
	
	        [
	            new Tween(),
	            stagger(),
	            timeline(),
	            {
	                tween: new Tween(),
	                at: 100,
	                offset: "+=100"
	            }
	        ]
	*/
	var analyze = function (defs) {
	    var timeline = [];
	    var numDefs = defs.length;
	    var currentPlayhead = 0;
	
	    var _loop = function (i) {
	        var def = defs[i];
	        var defIsObj = def.tween ? true : false;
	        var tween = defIsObj ? def.tween : def;
	
	        if (defIsObj) {
	            if (def.offset !== undefined) {
	                currentPlayhead = (0, _calc.relativeValue)(currentPlayhead, def.offset);
	            } else if (def.at !== undefined) {
	                currentPlayhead = def.at;
	            }
	        }
	
	        var duration = 0;
	        for (var key in tween.values) {
	            if (tween.values.hasOwnProperty(key)) {
	                var value = tween.values[key];
	                duration = Math.max(duration, value.duration);
	            }
	        }
	
	        timeline.push({
	            from: currentPlayhead,
	            duration: duration,
	            fire: function (time) {
	                return tween.seekTime(time);
	            }
	        });
	
	        currentPlayhead += duration;
	    };
	
	    for (var i = 0; i < numDefs; i++) {
	        _loop(i);
	    }
	
	    return { totalTime: currentPlayhead, timeline: timeline };
	};
	
	var setTweens = function (_ref) {
	    var timeline = _ref.timeline;
	    var timelineLength = _ref.timelineLength;
	    var values = _ref.values;
	    var duration = _ref.duration;
	
	    for (var i = 0; i < timelineLength; i++) {
	        var _tween = timeline[i];
	        var tweenTime = values.p.current * duration - _tween.from;
	
	        if (tweenTime >= -50 && tweenTime <= _tween.duration + 50) {
	            _tween.fire(tweenTime);
	        }
	    }
	};
	
	function timeline(def) {
	    var props = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    var _analyze = analyze(def);
	
	    var totalTime = _analyze.totalTime;
	    var timeline = _analyze.timeline;
	
	
	    return new _Tween2.default(_extends({
	        ease: _presetEasing2.default.linear
	    }, props, {
	        duration: totalTime,
	        values: {
	            p: 1
	        },
	        timeline: timeline,
	        timelineLength: timeline.length,
	        onRender: setTweens
	    }));
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvdGltZWxpbmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O2tCQW9Fd0I7O0FBcEV4Qjs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkEsSUFBTSxVQUFVLFVBQUMsSUFBRCxFQUFVO0FBQ3RCLFFBQU0sV0FBVyxFQUFYLENBRGdCO0FBRXRCLFFBQU0sVUFBVSxLQUFLLE1BQUwsQ0FGTTtBQUd0QixRQUFJLGtCQUFrQixDQUFsQixDQUhrQjs7MEJBS2I7QUFDTCxZQUFNLE1BQU0sS0FBSyxDQUFMLENBQU47QUFDTixZQUFNLFdBQVcsSUFBSSxLQUFKLEdBQVksSUFBWixHQUFtQixLQUFuQjtBQUNqQixZQUFNLFFBQVEsV0FBYSxJQUFJLEtBQUosR0FBWSxHQUF6Qjs7QUFFZCxZQUFJLFFBQUosRUFBYztBQUNWLGdCQUFJLElBQUksTUFBSixLQUFlLFNBQWYsRUFBMEI7QUFDMUIsa0NBQWtCLHlCQUFjLGVBQWQsRUFBK0IsSUFBSSxNQUFKLENBQWpELENBRDBCO2FBQTlCLE1BRU8sSUFBSSxJQUFJLEVBQUosS0FBVyxTQUFYLEVBQXNCO0FBQzdCLGtDQUFrQixJQUFJLEVBQUosQ0FEVzthQUExQjtTQUhYOztBQVFBLFlBQUksV0FBVyxDQUFYO0FBQ0osYUFBSyxJQUFJLEdBQUosSUFBVyxNQUFNLE1BQU4sRUFBYztBQUMxQixnQkFBSSxNQUFNLE1BQU4sQ0FBYSxjQUFiLENBQTRCLEdBQTVCLENBQUosRUFBc0M7QUFDbEMsb0JBQU0sUUFBUSxNQUFNLE1BQU4sQ0FBYSxHQUFiLENBQVIsQ0FENEI7QUFFbEMsMkJBQVcsS0FBSyxHQUFMLENBQVMsUUFBVCxFQUFtQixNQUFNLFFBQU4sQ0FBOUIsQ0FGa0M7YUFBdEM7U0FESjs7QUFPQSxpQkFBUyxJQUFULENBQWM7QUFDVixrQkFBTSxlQUFOO0FBQ0Esc0JBQVUsUUFBVjtBQUNBLGtCQUFNLFVBQUMsSUFBRDt1QkFBVSxNQUFNLFFBQU4sQ0FBZSxJQUFmO2FBQVY7U0FIVjs7QUFNQSwyQkFBbUIsUUFBbkI7TUFoQ2tCOztBQUt0QixTQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxPQUFKLEVBQWEsR0FBN0IsRUFBa0M7Y0FBekIsR0FBeUI7S0FBbEM7O0FBOEJBLFdBQU8sRUFBRSxXQUFXLGVBQVgsRUFBNEIsa0JBQTlCLEVBQVAsQ0FuQ3NCO0NBQVY7O0FBc0NoQixJQUFNLFlBQVksZ0JBQW9EO1FBQWpELHlCQUFpRDtRQUF2QyxxQ0FBdUM7UUFBdkIscUJBQXVCO1FBQWYseUJBQWU7O0FBQ2xFLFNBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLGNBQUosRUFBb0IsR0FBcEMsRUFBeUM7QUFDckMsWUFBTSxTQUFRLFNBQVMsQ0FBVCxDQUFSLENBRCtCO0FBRXJDLFlBQU0sWUFBWSxNQUFDLENBQU8sQ0FBUCxDQUFTLE9BQVQsR0FBbUIsUUFBbkIsR0FBK0IsT0FBTSxJQUFOLENBRmI7O0FBSXJDLFlBQUksYUFBYSxDQUFDLEVBQUQsSUFBTyxhQUFhLE9BQU0sUUFBTixHQUFpQixFQUFqQixFQUFxQjtBQUN0RCxtQkFBTSxJQUFOLENBQVcsU0FBWCxFQURzRDtTQUExRDtLQUpKO0NBRGM7O0FBV0gsU0FBUyxRQUFULENBQWtCLEdBQWxCLEVBQW1DO1FBQVosOERBQVEsa0JBQUk7O21CQUNkLFFBQVEsR0FBUixFQURjOztRQUN0QywrQkFEc0M7UUFDM0IsNkJBRDJCOzs7QUFHOUMsV0FBTztBQUNILGNBQU0sdUJBQU8sTUFBUDtPQUNIO0FBQ0gsa0JBQVUsU0FBVjtBQUNBLGdCQUFRO0FBQ0osZUFBRyxDQUFIO1NBREo7QUFHQSxrQkFBVSxRQUFWO0FBQ0Esd0JBQWdCLFNBQVMsTUFBVDtBQUNoQixrQkFBVSxTQUFWO01BVEcsQ0FBUCxDQUg4QztDQUFuQyIsImZpbGUiOiJ0aW1lbGluZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHdlZW4gZnJvbSAnLi4vYWN0aW9ucy9Ud2Vlbic7XG5pbXBvcnQgZWFzaW5nIGZyb20gJy4uL2FjdGlvbnMvZWFzaW5nL3ByZXNldC1lYXNpbmcnO1xuaW1wb3J0IHsgcmVsYXRpdmVWYWx1ZSB9IGZyb20gJy4vY2FsYyc7XG5cbi8qXG4gICAgQHBhcmFtIFthcnJheV1cbiAgICAgICAgU2VxdWVudGlhbCBhcnJheSBvZiB0d2VlbnMsIGVhY2ggaXRlbSBjYW4gYmUgYSB0d2VlbiBvciBkZWZpbml0aW9uIG9iajpcblxuICAgICAgICBbXG4gICAgICAgICAgICBuZXcgVHdlZW4oKSxcbiAgICAgICAgICAgIHN0YWdnZXIoKSxcbiAgICAgICAgICAgIHRpbWVsaW5lKCksXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHdlZW46IG5ldyBUd2VlbigpLFxuICAgICAgICAgICAgICAgIGF0OiAxMDAsXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiBcIis9MTAwXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuKi9cbmNvbnN0IGFuYWx5emUgPSAoZGVmcykgPT4ge1xuICAgIGNvbnN0IHRpbWVsaW5lID0gW107XG4gICAgY29uc3QgbnVtRGVmcyA9IGRlZnMubGVuZ3RoO1xuICAgIGxldCBjdXJyZW50UGxheWhlYWQgPSAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1EZWZzOyBpKyspIHtcbiAgICAgICAgY29uc3QgZGVmID0gZGVmc1tpXTtcbiAgICAgICAgY29uc3QgZGVmSXNPYmogPSBkZWYudHdlZW4gPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIGNvbnN0IHR3ZWVuID0gKGRlZklzT2JqKSA/IGRlZi50d2VlbiA6IGRlZjtcblxuICAgICAgICBpZiAoZGVmSXNPYmopIHtcbiAgICAgICAgICAgIGlmIChkZWYub2Zmc2V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UGxheWhlYWQgPSByZWxhdGl2ZVZhbHVlKGN1cnJlbnRQbGF5aGVhZCwgZGVmLm9mZnNldCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRlZi5hdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFBsYXloZWFkID0gZGVmLmF0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGR1cmF0aW9uID0gMDtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHR3ZWVuLnZhbHVlcykge1xuICAgICAgICAgICAgaWYgKHR3ZWVuLnZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0d2Vlbi52YWx1ZXNba2V5XTtcbiAgICAgICAgICAgICAgICBkdXJhdGlvbiA9IE1hdGgubWF4KGR1cmF0aW9uLCB2YWx1ZS5kdXJhdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aW1lbGluZS5wdXNoKHtcbiAgICAgICAgICAgIGZyb206IGN1cnJlbnRQbGF5aGVhZCxcbiAgICAgICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgICAgICAgIGZpcmU6ICh0aW1lKSA9PiB0d2Vlbi5zZWVrVGltZSh0aW1lKVxuICAgICAgICB9KTtcblxuICAgICAgICBjdXJyZW50UGxheWhlYWQgKz0gZHVyYXRpb247XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgdG90YWxUaW1lOiBjdXJyZW50UGxheWhlYWQsIHRpbWVsaW5lIH07XG59O1xuXG5jb25zdCBzZXRUd2VlbnMgPSAoeyB0aW1lbGluZSwgdGltZWxpbmVMZW5ndGgsIHZhbHVlcywgZHVyYXRpb24gfSkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGltZWxpbmVMZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB0d2VlbiA9IHRpbWVsaW5lW2ldO1xuICAgICAgICBjb25zdCB0d2VlblRpbWUgPSAodmFsdWVzLnAuY3VycmVudCAqIGR1cmF0aW9uKSAtIHR3ZWVuLmZyb207XG5cbiAgICAgICAgaWYgKHR3ZWVuVGltZSA+PSAtNTAgJiYgdHdlZW5UaW1lIDw9IHR3ZWVuLmR1cmF0aW9uICsgNTApIHtcbiAgICAgICAgICAgIHR3ZWVuLmZpcmUodHdlZW5UaW1lKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRpbWVsaW5lKGRlZiwgcHJvcHMgPSB7fSkge1xuICAgIGNvbnN0IHsgdG90YWxUaW1lLCB0aW1lbGluZSB9ID0gYW5hbHl6ZShkZWYpO1xuXG4gICAgcmV0dXJuIG5ldyBUd2Vlbih7XG4gICAgICAgIGVhc2U6IGVhc2luZy5saW5lYXIsXG4gICAgICAgIC4uLnByb3BzLFxuICAgICAgICBkdXJhdGlvbjogdG90YWxUaW1lLFxuICAgICAgICB2YWx1ZXM6IHtcbiAgICAgICAgICAgIHA6IDFcbiAgICAgICAgfSxcbiAgICAgICAgdGltZWxpbmU6IHRpbWVsaW5lLFxuICAgICAgICB0aW1lbGluZUxlbmd0aDogdGltZWxpbmUubGVuZ3RoLFxuICAgICAgICBvblJlbmRlcjogc2V0VHdlZW5zXG4gICAgfSk7XG59Il19

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	/*
	    Override `getter` and `setter` to reimplement the interface for new element types.
	
	    Set `.stateMap` as an object key/value map to translate incoming keys to
	    API-specific keys. For instance, { x: 'translateX' }. 
	
	    Set `.valueTypeMap` as an object key/value map to return a value type with
	    `getValueType(key)` (key will be mapped according to `stateMap`)
	*/
	
	var mapKey = function (key, map) {
	    return map ? map[key] || key : key;
	};
	
	exports.default = function (options) {
	    /*
	        Adapter is setter function
	         @param [object]: Object to set properties on
	        @param [object]: Key/value properties to set
	    */
	    var adapter = function (element, props, data) {
	        if (options.stateMap) {
	            // Translate props
	            for (var key in props) {
	                if (props.hasOwnProperty(key)) {
	                    var mappedKey = mapKey(key, options.stateMap);
	
	                    if (mappedKey !== key) {
	                        props[mappedKey] = props[key];
	                        delete props[key];
	                    }
	                }
	            }
	        }
	
	        return options.setter(element, props, data);
	    };
	
	    adapter.get = function (element, key) {
	        return options.getter(element, mapKey(key, options.stateMap));
	    };
	    adapter.checkValueType = function (key) {
	        return options.valueTypeMap ? options.valueTypeMap[mapKey(key, options.stateMap)] : false;
	    };
	    adapter.getElementData = options.getElementData;
	
	    return adapter;
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2FkYXB0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVVBLElBQU0sU0FBUyxVQUFDLEdBQUQsRUFBTSxHQUFOO1dBQWMsTUFBTSxJQUFJLEdBQUosS0FBWSxHQUFaLEdBQWtCLEdBQXhCO0NBQWQ7O2tCQUVBLFVBQUMsT0FBRCxFQUFhOzs7Ozs7QUFPeEIsUUFBTSxVQUFVLFVBQUMsT0FBRCxFQUFVLEtBQVYsRUFBaUIsSUFBakIsRUFBMEI7QUFDdEMsWUFBSSxRQUFRLFFBQVIsRUFBa0I7O0FBRWxCLGlCQUFLLElBQUksR0FBSixJQUFXLEtBQWhCLEVBQXVCO0FBQ25CLG9CQUFJLE1BQU0sY0FBTixDQUFxQixHQUFyQixDQUFKLEVBQStCO0FBQzNCLHdCQUFNLFlBQVksT0FBTyxHQUFQLEVBQVksUUFBUSxRQUFSLENBQXhCLENBRHFCOztBQUczQix3QkFBSSxjQUFjLEdBQWQsRUFBbUI7QUFDbkIsOEJBQU0sU0FBTixJQUFtQixNQUFNLEdBQU4sQ0FBbkIsQ0FEbUI7QUFFbkIsK0JBQU8sTUFBTSxHQUFOLENBQVAsQ0FGbUI7cUJBQXZCO2lCQUhKO2FBREo7U0FGSjs7QUFjQSxlQUFPLFFBQVEsTUFBUixDQUFlLE9BQWYsRUFBd0IsS0FBeEIsRUFBK0IsSUFBL0IsQ0FBUCxDQWZzQztLQUExQixDQVBROztBQXlCeEIsWUFBUSxHQUFSLEdBQWMsVUFBQyxPQUFELEVBQVUsR0FBVjtlQUFrQixRQUFRLE1BQVIsQ0FBZSxPQUFmLEVBQXdCLE9BQU8sR0FBUCxFQUFZLFFBQVEsUUFBUixDQUFwQztLQUFsQixDQXpCVTtBQTBCeEIsWUFBUSxjQUFSLEdBQXlCLFVBQUMsR0FBRDtlQUFTLFFBQVEsWUFBUixHQUF1QixRQUFRLFlBQVIsQ0FBcUIsT0FBTyxHQUFQLEVBQVksUUFBUSxRQUFSLENBQWpDLENBQXZCLEdBQTZFLEtBQTdFO0tBQVQsQ0ExQkQ7QUEyQnhCLFlBQVEsY0FBUixHQUF5QixRQUFRLGNBQVIsQ0EzQkQ7O0FBNkJ4QixXQUFPLE9BQVAsQ0E3QndCO0NBQWIiLCJmaWxlIjoiYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICAgIE92ZXJyaWRlIGBnZXR0ZXJgIGFuZCBgc2V0dGVyYCB0byByZWltcGxlbWVudCB0aGUgaW50ZXJmYWNlIGZvciBuZXcgZWxlbWVudCB0eXBlcy5cblxuICAgIFNldCBgLnN0YXRlTWFwYCBhcyBhbiBvYmplY3Qga2V5L3ZhbHVlIG1hcCB0byB0cmFuc2xhdGUgaW5jb21pbmcga2V5cyB0b1xuICAgIEFQSS1zcGVjaWZpYyBrZXlzLiBGb3IgaW5zdGFuY2UsIHsgeDogJ3RyYW5zbGF0ZVgnIH0uIFxuXG4gICAgU2V0IGAudmFsdWVUeXBlTWFwYCBhcyBhbiBvYmplY3Qga2V5L3ZhbHVlIG1hcCB0byByZXR1cm4gYSB2YWx1ZSB0eXBlIHdpdGhcbiAgICBgZ2V0VmFsdWVUeXBlKGtleSlgIChrZXkgd2lsbCBiZSBtYXBwZWQgYWNjb3JkaW5nIHRvIGBzdGF0ZU1hcGApXG4qL1xuXG5jb25zdCBtYXBLZXkgPSAoa2V5LCBtYXApID0+IG1hcCA/IG1hcFtrZXldIHx8IGtleSA6IGtleTtcblxuZXhwb3J0IGRlZmF1bHQgKG9wdGlvbnMpID0+IHtcbiAgICAvKlxuICAgICAgICBBZGFwdGVyIGlzIHNldHRlciBmdW5jdGlvblxuXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogT2JqZWN0IHRvIHNldCBwcm9wZXJ0aWVzIG9uXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogS2V5L3ZhbHVlIHByb3BlcnRpZXMgdG8gc2V0XG4gICAgKi9cbiAgICBjb25zdCBhZGFwdGVyID0gKGVsZW1lbnQsIHByb3BzLCBkYXRhKSA9PiB7XG4gICAgICAgIGlmIChvcHRpb25zLnN0YXRlTWFwKSB7XG4gICAgICAgICAgICAvLyBUcmFuc2xhdGUgcHJvcHNcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBwcm9wcykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hcHBlZEtleSA9IG1hcEtleShrZXksIG9wdGlvbnMuc3RhdGVNYXApO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hcHBlZEtleSAhPT0ga2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wc1ttYXBwZWRLZXldID0gcHJvcHNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBwcm9wc1trZXldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG9wdGlvbnMuc2V0dGVyKGVsZW1lbnQsIHByb3BzLCBkYXRhKTtcbiAgICB9O1xuXG4gICAgYWRhcHRlci5nZXQgPSAoZWxlbWVudCwga2V5KSA9PiBvcHRpb25zLmdldHRlcihlbGVtZW50LCBtYXBLZXkoa2V5LCBvcHRpb25zLnN0YXRlTWFwKSk7XG4gICAgYWRhcHRlci5jaGVja1ZhbHVlVHlwZSA9IChrZXkpID0+IG9wdGlvbnMudmFsdWVUeXBlTWFwID8gb3B0aW9ucy52YWx1ZVR5cGVNYXBbbWFwS2V5KGtleSwgb3B0aW9ucy5zdGF0ZU1hcCldIDogZmFsc2U7XG4gICAgYWRhcHRlci5nZXRFbGVtZW50RGF0YSA9IG9wdGlvbnMuZ2V0RWxlbWVudERhdGE7XG5cbiAgICByZXR1cm4gYWRhcHRlcjtcbn07Il19

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.setter = exports.getter = undefined;
	
	var _adapter = __webpack_require__(12);
	
	var _adapter2 = _interopRequireDefault(_adapter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var getter = exports.getter = function (element, key) {
	    return element.getAttribute(key);
	};
	var setter = exports.setter = function (element, props) {
	    for (var key in props) {
	        if (props.hasOwnProperty(key)) {
	            element.setAttribute(key, props[key]);
	        }
	    }
	};
	
	exports.default = (0, _adapter2.default)({ getter: getter, setter: setter });
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2F0dHItYWRhcHRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7QUFFTyxJQUFNLDBCQUFTLFVBQUMsT0FBRCxFQUFVLEdBQVY7V0FBa0IsUUFBUSxZQUFSLENBQXFCLEdBQXJCO0NBQWxCO0FBQ2YsSUFBTSwwQkFBUyxVQUFDLE9BQUQsRUFBVSxLQUFWLEVBQW9CO0FBQ3RDLFNBQUssSUFBSSxHQUFKLElBQVcsS0FBaEIsRUFBdUI7QUFDbkIsWUFBSSxNQUFNLGNBQU4sQ0FBcUIsR0FBckIsQ0FBSixFQUErQjtBQUMzQixvQkFBUSxZQUFSLENBQXFCLEdBQXJCLEVBQTBCLE1BQU0sR0FBTixDQUExQixFQUQyQjtTQUEvQjtLQURKO0NBRGtCOztrQkFRUCx1QkFBYyxFQUFFLGNBQUYsRUFBVSxjQUFWLEVBQWQiLCJmaWxlIjoiYXR0ci1hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVBZGFwdGVyIGZyb20gJy4vYWRhcHRlcic7XG5cbmV4cG9ydCBjb25zdCBnZXR0ZXIgPSAoZWxlbWVudCwga2V5KSA9PiBlbGVtZW50LmdldEF0dHJpYnV0ZShrZXkpO1xuZXhwb3J0IGNvbnN0IHNldHRlciA9IChlbGVtZW50LCBwcm9wcykgPT4ge1xuICAgIGZvciAobGV0IGtleSBpbiBwcm9wcykge1xuICAgICAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBwcm9wc1trZXldKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUFkYXB0ZXIoeyBnZXR0ZXIsIHNldHRlciB9KTsiXX0=

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _stateMap = __webpack_require__(40);
	
	var _stateMap2 = _interopRequireDefault(_stateMap);
	
	var _valueTypeMap = __webpack_require__(41);
	
	var _valueTypeMap2 = _interopRequireDefault(_valueTypeMap);
	
	var _build = __webpack_require__(42);
	
	var _build2 = _interopRequireDefault(_build);
	
	var _prefixer = __webpack_require__(43);
	
	var _prefixer2 = _interopRequireDefault(_prefixer);
	
	var _transformProps = __webpack_require__(44);
	
	var _transformProps2 = _interopRequireDefault(_transformProps);
	
	var _adapter = __webpack_require__(12);
	
	var _adapter2 = _interopRequireDefault(_adapter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _adapter2.default)({
	    getter: function (element, key) {
	        return !_transformProps2.default[key] ? window.getComputedStyle(element, null)[(0, _prefixer2.default)(key)] : _valueTypeMap2.default[key].defaultProps.current || 0;
	    },
	    setter: function (element, props) {
	        return element.style.cssText += (0, _build2.default)(props);
	    },
	    valueTypeMap: _valueTypeMap2.default,
	    stateMap: _stateMap2.default
	});
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2Nzcy1hZGFwdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztrQkFFZSx1QkFBYztBQUN6QixZQUFRLFVBQUMsT0FBRCxFQUFVLEdBQVYsRUFBa0I7QUFDdEIsZUFBTyxDQUFFLHlCQUFlLEdBQWYsQ0FBRCxHQUNKLE9BQU8sZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsSUFBakMsRUFBdUMsd0JBQVMsR0FBVCxDQUF2QyxDQURHLEdBRUgsdUJBQWEsR0FBYixFQUFrQixZQUFsQixDQUErQixPQUEvQixJQUEwQyxDQUExQyxDQUhrQjtLQUFsQjtBQUtSLFlBQVEsVUFBQyxPQUFELEVBQVUsS0FBVjtlQUFvQixRQUFRLEtBQVIsQ0FBYyxPQUFkLElBQXlCLHFCQUFvQixLQUFwQixDQUF6QjtLQUFwQjtBQUNSLHdDQVB5QjtBQVF6QixnQ0FSeUI7Q0FBZCIsImZpbGUiOiJjc3MtYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3RhdGVNYXAgZnJvbSAnLi9jc3Mvc3RhdGUtbWFwJztcbmltcG9ydCB2YWx1ZVR5cGVNYXAgZnJvbSAnLi9jc3MvdmFsdWUtdHlwZS1tYXAnO1xuaW1wb3J0IGJ1aWxkUHJvcGVydHlTdHJpbmcgZnJvbSAnLi9jc3MvYnVpbGQnO1xuaW1wb3J0IHByZWZpeGVyIGZyb20gJy4vY3NzL3ByZWZpeGVyJztcbmltcG9ydCB0cmFuc2Zvcm1Qcm9wcyBmcm9tICcuL2Nzcy90cmFuc2Zvcm0tcHJvcHMnO1xuaW1wb3J0IGNyZWF0ZUFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQWRhcHRlcih7XG4gICAgZ2V0dGVyOiAoZWxlbWVudCwga2V5KSA9PiB7XG4gICAgICAgIHJldHVybiAoIXRyYW5zZm9ybVByb3BzW2tleV0pID9cbiAgICAgICAgICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsIG51bGwpW3ByZWZpeGVyKGtleSldIDpcbiAgICAgICAgICAgIHZhbHVlVHlwZU1hcFtrZXldLmRlZmF1bHRQcm9wcy5jdXJyZW50IHx8IDA7XG4gICAgfSxcbiAgICBzZXR0ZXI6IChlbGVtZW50LCBwcm9wcykgPT4gZWxlbWVudC5zdHlsZS5jc3NUZXh0ICs9IGJ1aWxkUHJvcGVydHlTdHJpbmcocHJvcHMpLFxuICAgIHZhbHVlVHlwZU1hcCxcbiAgICBzdGF0ZU1hcFxufSk7XG5cbiJdfQ==

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _adapter = __webpack_require__(12);
	
	var _adapter2 = _interopRequireDefault(_adapter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _adapter2.default)({
	    getter: function (object, key) {
	        return object[key];
	    },
	    setter: function (object, props) {
	        for (var key in props) {
	            if (props.hasOwnProperty(key)) {
	                object[key] = props[key];
	            }
	        }
	    }
	});
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL29iamVjdC1hZGFwdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7Ozs7O2tCQUVlLHVCQUFjO0FBQ3pCLFlBQVEsVUFBQyxNQUFELEVBQVMsR0FBVDtlQUFpQixPQUFPLEdBQVA7S0FBakI7QUFDUixZQUFRLFVBQUMsTUFBRCxFQUFTLEtBQVQsRUFBbUI7QUFDdkIsYUFBSyxJQUFJLEdBQUosSUFBVyxLQUFoQixFQUF1QjtBQUNuQixnQkFBSSxNQUFNLGNBQU4sQ0FBcUIsR0FBckIsQ0FBSixFQUErQjtBQUMzQix1QkFBTyxHQUFQLElBQWMsTUFBTSxHQUFOLENBQWQsQ0FEMkI7YUFBL0I7U0FESjtLQURJO0NBRkciLCJmaWxlIjoib2JqZWN0LWFkYXB0ZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZUFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQWRhcHRlcih7XG4gICAgZ2V0dGVyOiAob2JqZWN0LCBrZXkpID0+IG9iamVjdFtrZXldLFxuICAgIHNldHRlcjogKG9iamVjdCwgcHJvcHMpID0+IHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHByb3BzKSB7XG4gICAgICAgICAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIG9iamVjdFtrZXldID0gcHJvcHNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0pOyJdfQ==

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.getElementData = exports.setter = exports.getter = undefined;
	
	var _stateMap = __webpack_require__(40);
	
	var _stateMap2 = _interopRequireDefault(_stateMap);
	
	var _valueTypeMap = __webpack_require__(45);
	
	var _valueTypeMap2 = _interopRequireDefault(_valueTypeMap);
	
	var _transformProps = __webpack_require__(44);
	
	var _transformProps2 = _interopRequireDefault(_transformProps);
	
	var _build = __webpack_require__(46);
	
	var _build2 = _interopRequireDefault(_build);
	
	var _attrAdapter = __webpack_require__(13);
	
	var _adapter = __webpack_require__(12);
	
	var _adapter2 = _interopRequireDefault(_adapter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var getter = exports.getter = function (element, key) {
	    return !_transformProps2.default[key] ? (0, _attrAdapter.getter)(element, key) : _valueTypeMap2.default[key] && _valueTypeMap2.default[key].defaultProps ? _valueTypeMap2.default[key].defaultProps.current : 0;
	};
	var setter = exports.setter = function (element, props, data) {
	    return (0, _attrAdapter.setter)(element, (0, _build2.default)(props, data));
	};
	var getElementData = exports.getElementData = function (element) {
	    var bBox = element.getBBox();
	    return {
	        x: bBox.x,
	        y: bBox.y,
	        width: bBox.width,
	        height: bBox.height
	    };
	};
	
	exports.default = (0, _adapter2.default)({ getter: getter, setter: setter, stateMap: _stateMap2.default, valueTypeMap: _valueTypeMap2.default, getElementData: getElementData });
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL3N2Zy1hZGFwdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7O0FBRU8sSUFBTSwwQkFBUyxVQUFDLE9BQUQsRUFBVSxHQUFWO1dBQWtCLENBQUUseUJBQWUsR0FBZixDQUFELEdBQXdCLHlCQUFXLE9BQVgsRUFBb0IsR0FBcEIsQ0FBekIsR0FBb0Qsc0JBQUMsQ0FBYSxHQUFiLEtBQXFCLHVCQUFhLEdBQWIsRUFBa0IsWUFBbEIsR0FBa0MsdUJBQWEsR0FBYixFQUFrQixZQUFsQixDQUErQixPQUEvQixHQUF5QyxDQUFqRztDQUF0RTtBQUNmLElBQU0sMEJBQVMsVUFBQyxPQUFELEVBQVUsS0FBVixFQUFpQixJQUFqQjtXQUEwQix5QkFBVyxPQUFYLEVBQW9CLHFCQUFNLEtBQU4sRUFBYSxJQUFiLENBQXBCO0NBQTFCO0FBQ2YsSUFBTSwwQ0FBaUIsVUFBQyxPQUFELEVBQWE7QUFDdkMsUUFBTSxPQUFPLFFBQVEsT0FBUixFQUFQLENBRGlDO0FBRXZDLFdBQU87QUFDSCxXQUFHLEtBQUssQ0FBTDtBQUNILFdBQUcsS0FBSyxDQUFMO0FBQ0gsZUFBTyxLQUFLLEtBQUw7QUFDUCxnQkFBUSxLQUFLLE1BQUw7S0FKWixDQUZ1QztDQUFiOztrQkFVZix1QkFBYyxFQUFFLGNBQUYsRUFBVSxjQUFWLEVBQWtCLDRCQUFsQixFQUE0QixvQ0FBNUIsRUFBMEMsOEJBQTFDLEVBQWQiLCJmaWxlIjoic3ZnLWFkYXB0ZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0YXRlTWFwIGZyb20gJy4vY3NzL3N0YXRlLW1hcCc7XG5pbXBvcnQgdmFsdWVUeXBlTWFwIGZyb20gJy4vc3ZnL3ZhbHVlLXR5cGUtbWFwJztcbmltcG9ydCB0cmFuc2Zvcm1Qcm9wcyBmcm9tICcuL2Nzcy90cmFuc2Zvcm0tcHJvcHMnO1xuaW1wb3J0IGJ1aWxkIGZyb20gJy4vc3ZnL2J1aWxkJztcbmltcG9ydCB7IGdldHRlciBhcyBhdHRyR2V0dGVyLCBzZXR0ZXIgYXMgYXR0clNldHRlciB9IGZyb20gJy4vYXR0ci1hZGFwdGVyJztcbmltcG9ydCBjcmVhdGVBZGFwdGVyIGZyb20gJy4vYWRhcHRlcic7XG5cbmV4cG9ydCBjb25zdCBnZXR0ZXIgPSAoZWxlbWVudCwga2V5KSA9PiAoIXRyYW5zZm9ybVByb3BzW2tleV0pID8gYXR0ckdldHRlcihlbGVtZW50LCBrZXkpIDogKHZhbHVlVHlwZU1hcFtrZXldICYmIHZhbHVlVHlwZU1hcFtrZXldLmRlZmF1bHRQcm9wcykgPyB2YWx1ZVR5cGVNYXBba2V5XS5kZWZhdWx0UHJvcHMuY3VycmVudCA6IDA7XG5leHBvcnQgY29uc3Qgc2V0dGVyID0gKGVsZW1lbnQsIHByb3BzLCBkYXRhKSA9PiBhdHRyU2V0dGVyKGVsZW1lbnQsIGJ1aWxkKHByb3BzLCBkYXRhKSk7XG5leHBvcnQgY29uc3QgZ2V0RWxlbWVudERhdGEgPSAoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGJCb3ggPSBlbGVtZW50LmdldEJCb3goKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB4OiBiQm94LngsXG4gICAgICAgIHk6IGJCb3gueSxcbiAgICAgICAgd2lkdGg6IGJCb3gud2lkdGgsIFxuICAgICAgICBoZWlnaHQ6IGJCb3guaGVpZ2h0XG4gICAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUFkYXB0ZXIoeyBnZXR0ZXIsIHNldHRlciwgc3RhdGVNYXAsIHZhbHVlVHlwZU1hcCwgZ2V0RWxlbWVudERhdGEgfSk7XG4iXX0=

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _build = __webpack_require__(47);
	
	var _build2 = _interopRequireDefault(_build);
	
	var _stateMap = __webpack_require__(40);
	
	var _stateMap2 = _interopRequireDefault(_stateMap);
	
	var _svgAdapter = __webpack_require__(16);
	
	var _adapter = __webpack_require__(12);
	
	var _adapter2 = _interopRequireDefault(_adapter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _adapter2.default)({
	    getter: _svgAdapter.getter,
	    setter: function (element, props, opts) {
	        var pathLength = opts ? opts.pathLength : 0;
	        return (0, _svgAdapter.setter)(element, (0, _build2.default)(props, pathLength), opts);
	    },
	    stateMap: _stateMap2.default,
	    getElementData: function (element) {
	        return _extends({ pathLength: element.getTotalLength() }, (0, _svgAdapter.getElementData)(element));
	    }
	});
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL3N2Zy1wYXRoLWFkYXB0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7a0JBRWUsdUJBQWM7QUFDekIsOEJBRHlCO0FBRXpCLFlBQVEsVUFBQyxPQUFELEVBQVUsS0FBVixFQUFpQixJQUFqQixFQUEwQjtBQUM5QixZQUFNLGFBQWEsT0FBTyxLQUFLLFVBQUwsR0FBa0IsQ0FBekIsQ0FEVztBQUU5QixlQUFPLHdCQUFPLE9BQVAsRUFBZ0IscUJBQU0sS0FBTixFQUFhLFVBQWIsQ0FBaEIsRUFBMEMsSUFBMUMsQ0FBUCxDQUY4QjtLQUExQjtBQUlSLGdDQU55QjtBQU96QixvQkFBZ0IsVUFBQyxPQUFEOzBCQUFnQixZQUFZLFFBQVEsY0FBUixFQUFaLElBQXlDLGdDQUFlLE9BQWY7S0FBekQ7Q0FQTCIsImZpbGUiOiJzdmctcGF0aC1hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBidWlsZCBmcm9tICcuL3N2Zy1wYXRoL2J1aWxkJztcbmltcG9ydCBzdGF0ZU1hcCBmcm9tICcuL2Nzcy9zdGF0ZS1tYXAnO1xuaW1wb3J0IHsgZ2V0dGVyLCBzZXR0ZXIsIGdldEVsZW1lbnREYXRhIH0gZnJvbSAnLi9zdmctYWRhcHRlcic7XG5pbXBvcnQgY3JlYXRlQWRhcHRlciBmcm9tICcuL2FkYXB0ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVBZGFwdGVyKHtcbiAgICBnZXR0ZXIsXG4gICAgc2V0dGVyOiAoZWxlbWVudCwgcHJvcHMsIG9wdHMpID0+IHtcbiAgICAgICAgY29uc3QgcGF0aExlbmd0aCA9IG9wdHMgPyBvcHRzLnBhdGhMZW5ndGggOiAwO1xuICAgICAgICByZXR1cm4gc2V0dGVyKGVsZW1lbnQsIGJ1aWxkKHByb3BzLCBwYXRoTGVuZ3RoKSwgb3B0cyk7XG4gICAgfSxcbiAgICBzdGF0ZU1hcCxcbiAgICBnZXRFbGVtZW50RGF0YTogKGVsZW1lbnQpID0+ICh7IHBhdGhMZW5ndGg6IGVsZW1lbnQuZ2V0VG90YWxMZW5ndGgoKSwgLi4uZ2V0RWxlbWVudERhdGEoZWxlbWVudCkgfSlcbn0pO1xuIl19

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _createEasing = __webpack_require__(50);
	
	var _createEasing2 = _interopRequireDefault(_createEasing);
	
	var _createBezier = __webpack_require__(51);
	
	var _createBezier2 = _interopRequireDefault(_createBezier);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Values
	/*
	    Easing functions
	    ----------------------------------------
	    
	    Generates and provides easing functions based on baseFunction definitions
	    
	    A call to easingFunction.get('functionName') returns a function that can be passed:
	        @param [number]: Progress 0-1
	        @param [number] (optional): Amp modifier, only accepted in some easing functions
	                                    and is used to adjust overall strength
	        @return [number]: Eased progress
	        
	    We can generate new functions by sending an easing function through easingFunction.extend(name, method).
	    Which will make nameIn, nameOut and nameInOut functions available to use.
	        
	    Easing functions from Robert Penner
	    http://www.robertpenner.com/easing/
	        
	    Bezier curve interpretor created from Gaëtan Renaudeau's original BezierEasing  
	    https://github.com/gre/bezier-easing/blob/master/index.js  
	    https://github.com/gre/bezier-easing/blob/master/LICENSE
	
	    Anticipate easing created by Elliot Gino
	    https://twitter.com/ElliotGeno
	*/
	// Imports
	var DEFAULT_BACK_STRENGTH = 1.525;
	var DEFAULT_POW_STRENGTH = 2;
	
	/*
	    Each of these base functions is an easeIn
	    
	    On init, we use .mirror and .reverse to generate easeInOut and
	    easeOut functions respectively.
	*/
	var baseEasing = {
	    ease: function (progress) {
	        var strength = arguments.length <= 1 || arguments[1] === undefined ? DEFAULT_POW_STRENGTH : arguments[1];
	        return Math.pow(progress, strength);
	    },
	    circ: function (progress) {
	        return 1 - Math.sin(Math.acos(progress));
	    },
	    back: function (progress) {
	        var strength = arguments.length <= 1 || arguments[1] === undefined ? DEFAULT_BACK_STRENGTH : arguments[1];
	        return progress * progress * ((strength + 1) * progress - strength);
	    }
	};
	
	// Utility functions
	var generatePowerEasing = function (strength) {
	    return function (progress) {
	        return baseEasing.ease(progress, strength);
	    };
	};
	
	['cubic', 'quart', 'quint'].forEach(function (easingName, i) {
	    return baseEasing[easingName] = generatePowerEasing(i + 3);
	});
	
	// Generate in/out/inOut variations
	for (var key in baseEasing) {
	    if (baseEasing.hasOwnProperty(key)) {
	        var easingFunction = (0, _createEasing2.default)(baseEasing[key]);
	        baseEasing[key + 'In'] = easingFunction.in;
	        baseEasing[key + 'Out'] = easingFunction.out;
	        baseEasing[key + 'InOut'] = easingFunction.inOut;
	    }
	}
	
	baseEasing.linear = function (progress) {
	    return progress;
	};
	baseEasing.anticipate = function (progress) {
	    var strength = arguments.length <= 1 || arguments[1] === undefined ? DEFAULT_BACK_STRENGTH : arguments[1];
	    return (progress *= 2) < 1 ? 0.5 * baseEasing.backIn(progress, strength) : 0.5 * (2 - Math.pow(2, -10 * (progress - 1)));
	};
	
	baseEasing.createVariations = _createEasing2.default;
	baseEasing.cubicBezier = _createBezier2.default;
	baseEasing.modify = function (easing) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	    }
	
	    return function (progress) {
	        return easing.apply(undefined, [progress].concat(args));
	    };
	};
	
	exports.default = baseEasing;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2Vhc2luZy9wcmVzZXQtZWFzaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUEwQkE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0EsSUFBTSx3QkFBd0IsS0FBeEI7QUFDTixJQUFNLHVCQUF1QixDQUF2Qjs7Ozs7Ozs7QUFRTixJQUFNLGFBQWE7QUFDZixVQUFNLFVBQUMsUUFBRDtZQUFXLGlFQUFXO3dCQUF5QixVQUFZO0tBQTNEO0FBQ04sVUFBTTtlQUFZLElBQUksS0FBSyxHQUFMLENBQVMsS0FBSyxJQUFMLENBQVUsUUFBVixDQUFULENBQUo7S0FBWjtBQUNOLFVBQU0sVUFBQyxRQUFEO1lBQVcsaUVBQVc7ZUFBMEIsUUFBQyxHQUFXLFFBQVgsSUFBd0IsQ0FBQyxXQUFXLENBQVgsQ0FBRCxHQUFpQixRQUFqQixHQUE0QixRQUE1QixDQUF6QjtLQUFoRDtDQUhKOzs7QUFPTixJQUFNLHNCQUFzQixVQUFDLFFBQUQ7V0FBYyxVQUFDLFFBQUQ7ZUFBYyxXQUFXLElBQVgsQ0FBZ0IsUUFBaEIsRUFBMEIsUUFBMUI7S0FBZDtDQUFkOztBQUU1QixDQUFDLE9BQUQsRUFBVSxPQUFWLEVBQW1CLE9BQW5CLEVBQTRCLE9BQTVCLENBQW9DLFVBQUMsVUFBRCxFQUFhLENBQWI7V0FBbUIsV0FBVyxVQUFYLElBQXlCLG9CQUFvQixJQUFJLENBQUosQ0FBN0M7Q0FBbkIsQ0FBcEM7OztBQUdBLEtBQUssSUFBSSxHQUFKLElBQVcsVUFBaEIsRUFBNEI7QUFDeEIsUUFBSSxXQUFXLGNBQVgsQ0FBMEIsR0FBMUIsQ0FBSixFQUFvQztBQUNoQyxZQUFNLGlCQUFpQiw0QkFBcUIsV0FBVyxHQUFYLENBQXJCLENBQWpCLENBRDBCO0FBRWhDLG1CQUFjLFVBQWQsSUFBeUIsZUFBZSxFQUFmLENBRk87QUFHaEMsbUJBQWMsV0FBZCxJQUEwQixlQUFlLEdBQWYsQ0FITTtBQUloQyxtQkFBYyxhQUFkLElBQTRCLGVBQWUsS0FBZixDQUpJO0tBQXBDO0NBREo7O0FBU0EsV0FBVyxNQUFYLEdBQW9CO1dBQVk7Q0FBWjtBQUNwQixXQUFXLFVBQVgsR0FBd0IsVUFBQyxRQUFEO1FBQVcsaUVBQVc7V0FDMUMsQ0FBRSxZQUFVLENBQVYsQ0FBRCxHQUFnQixDQUFoQixHQUFxQixNQUFNLFdBQVcsTUFBWCxDQUFrQixRQUFsQixFQUE0QixRQUE1QixDQUFOLEdBQStDLE9BQU8sSUFBSSxLQUFLLEdBQUwsQ0FBUyxDQUFULEVBQVksQ0FBQyxFQUFELElBQU8sV0FBVyxDQUFYLENBQVAsQ0FBaEIsQ0FBUDtDQURqRDs7QUFHeEIsV0FBVyxnQkFBWDtBQUNBLFdBQVcsV0FBWDtBQUNBLFdBQVcsTUFBWCxHQUFvQixVQUFDLE1BQUQ7c0NBQVk7Ozs7V0FBUyxVQUFDLFFBQUQ7ZUFBYyx5QkFBTyxpQkFBYSxLQUFwQjtLQUFkO0NBQXJCOztrQkFFTCIsImZpbGUiOiJwcmVzZXQtZWFzaW5nLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gICAgRWFzaW5nIGZ1bmN0aW9uc1xuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBcbiAgICBHZW5lcmF0ZXMgYW5kIHByb3ZpZGVzIGVhc2luZyBmdW5jdGlvbnMgYmFzZWQgb24gYmFzZUZ1bmN0aW9uIGRlZmluaXRpb25zXG4gICAgXG4gICAgQSBjYWxsIHRvIGVhc2luZ0Z1bmN0aW9uLmdldCgnZnVuY3Rpb25OYW1lJykgcmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHBhc3NlZDpcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcyAwLTFcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IEFtcCBtb2RpZmllciwgb25seSBhY2NlcHRlZCBpbiBzb21lIGVhc2luZyBmdW5jdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBpcyB1c2VkIHRvIGFkanVzdCBvdmVyYWxsIHN0cmVuZ3RoXG4gICAgICAgIEByZXR1cm4gW251bWJlcl06IEVhc2VkIHByb2dyZXNzXG4gICAgICAgIFxuICAgIFdlIGNhbiBnZW5lcmF0ZSBuZXcgZnVuY3Rpb25zIGJ5IHNlbmRpbmcgYW4gZWFzaW5nIGZ1bmN0aW9uIHRocm91Z2ggZWFzaW5nRnVuY3Rpb24uZXh0ZW5kKG5hbWUsIG1ldGhvZCkuXG4gICAgV2hpY2ggd2lsbCBtYWtlIG5hbWVJbiwgbmFtZU91dCBhbmQgbmFtZUluT3V0IGZ1bmN0aW9ucyBhdmFpbGFibGUgdG8gdXNlLlxuICAgICAgICBcbiAgICBFYXNpbmcgZnVuY3Rpb25zIGZyb20gUm9iZXJ0IFBlbm5lclxuICAgIGh0dHA6Ly93d3cucm9iZXJ0cGVubmVyLmNvbS9lYXNpbmcvXG4gICAgICAgIFxuICAgIEJlemllciBjdXJ2ZSBpbnRlcnByZXRvciBjcmVhdGVkIGZyb20gR2HDq3RhbiBSZW5hdWRlYXUncyBvcmlnaW5hbCBCZXppZXJFYXNpbmcgIFxuICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9pbmRleC5qcyAgXG4gICAgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcblxuICAgIEFudGljaXBhdGUgZWFzaW5nIGNyZWF0ZWQgYnkgRWxsaW90IEdpbm9cbiAgICBodHRwczovL3R3aXR0ZXIuY29tL0VsbGlvdEdlbm9cbiovXG4vLyBJbXBvcnRzXG5pbXBvcnQgY3JlYXRlRWFzaW5nRnVuY3Rpb24gZnJvbSAnLi9jcmVhdGUtZWFzaW5nJztcbmltcG9ydCBjdWJpY0JlemllciBmcm9tICcuL2NyZWF0ZS1iZXppZXInO1xuXG4vLyBWYWx1ZXNcbmNvbnN0IERFRkFVTFRfQkFDS19TVFJFTkdUSCA9IDEuNTI1O1xuY29uc3QgREVGQVVMVF9QT1dfU1RSRU5HVEggPSAyO1xuXG4vKlxuICAgIEVhY2ggb2YgdGhlc2UgYmFzZSBmdW5jdGlvbnMgaXMgYW4gZWFzZUluXG4gICAgXG4gICAgT24gaW5pdCwgd2UgdXNlIC5taXJyb3IgYW5kIC5yZXZlcnNlIHRvIGdlbmVyYXRlIGVhc2VJbk91dCBhbmRcbiAgICBlYXNlT3V0IGZ1bmN0aW9ucyByZXNwZWN0aXZlbHkuXG4qL1xuY29uc3QgYmFzZUVhc2luZyA9IHtcbiAgICBlYXNlOiAocHJvZ3Jlc3MsIHN0cmVuZ3RoID0gREVGQVVMVF9QT1dfU1RSRU5HVEgpID0+IHByb2dyZXNzICoqIHN0cmVuZ3RoLFxuICAgIGNpcmM6IHByb2dyZXNzID0+IDEgLSBNYXRoLnNpbihNYXRoLmFjb3MocHJvZ3Jlc3MpKSxcbiAgICBiYWNrOiAocHJvZ3Jlc3MsIHN0cmVuZ3RoID0gREVGQVVMVF9CQUNLX1NUUkVOR1RIKSA9PiAocHJvZ3Jlc3MgKiBwcm9ncmVzcykgKiAoKHN0cmVuZ3RoICsgMSkgKiBwcm9ncmVzcyAtIHN0cmVuZ3RoKVxufTtcblxuLy8gVXRpbGl0eSBmdW5jdGlvbnNcbmNvbnN0IGdlbmVyYXRlUG93ZXJFYXNpbmcgPSAoc3RyZW5ndGgpID0+IChwcm9ncmVzcykgPT4gYmFzZUVhc2luZy5lYXNlKHByb2dyZXNzLCBzdHJlbmd0aCk7XG5cblsnY3ViaWMnLCAncXVhcnQnLCAncXVpbnQnXS5mb3JFYWNoKChlYXNpbmdOYW1lLCBpKSA9PiBiYXNlRWFzaW5nW2Vhc2luZ05hbWVdID0gZ2VuZXJhdGVQb3dlckVhc2luZyhpICsgMykpO1xuXG4vLyBHZW5lcmF0ZSBpbi9vdXQvaW5PdXQgdmFyaWF0aW9uc1xuZm9yIChsZXQga2V5IGluIGJhc2VFYXNpbmcpIHtcbiAgICBpZiAoYmFzZUVhc2luZy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGNvbnN0IGVhc2luZ0Z1bmN0aW9uID0gY3JlYXRlRWFzaW5nRnVuY3Rpb24oYmFzZUVhc2luZ1trZXldKTtcbiAgICAgICAgYmFzZUVhc2luZ1tgJHtrZXl9SW5gXSA9IGVhc2luZ0Z1bmN0aW9uLmluO1xuICAgICAgICBiYXNlRWFzaW5nW2Ake2tleX1PdXRgXSA9IGVhc2luZ0Z1bmN0aW9uLm91dDtcbiAgICAgICAgYmFzZUVhc2luZ1tgJHtrZXl9SW5PdXRgXSA9IGVhc2luZ0Z1bmN0aW9uLmluT3V0O1xuICAgIH1cbn1cblxuYmFzZUVhc2luZy5saW5lYXIgPSBwcm9ncmVzcyA9PiBwcm9ncmVzcztcbmJhc2VFYXNpbmcuYW50aWNpcGF0ZSA9IChwcm9ncmVzcywgc3RyZW5ndGggPSBERUZBVUxUX0JBQ0tfU1RSRU5HVEgpID0+XG4gICAgKChwcm9ncmVzcyo9MikgPCAxKSA/IDAuNSAqIGJhc2VFYXNpbmcuYmFja0luKHByb2dyZXNzLCBzdHJlbmd0aCkgOiAgMC41ICogKDIgLSBNYXRoLnBvdygyLCAtMTAgKiAocHJvZ3Jlc3MgLSAxKSkpO1xuXG5iYXNlRWFzaW5nLmNyZWF0ZVZhcmlhdGlvbnMgPSBjcmVhdGVFYXNpbmdGdW5jdGlvbjtcbmJhc2VFYXNpbmcuY3ViaWNCZXppZXIgPSBjdWJpY0JlemllcjtcbmJhc2VFYXNpbmcubW9kaWZ5ID0gKGVhc2luZywgLi4uYXJncykgPT4gKHByb2dyZXNzKSA9PiBlYXNpbmcocHJvZ3Jlc3MsIC4uLmFyZ3MpO1xuXG5leHBvcnQgZGVmYXVsdCBiYXNlRWFzaW5nOyJdfQ==

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _Flow = __webpack_require__(4);
	
	var _Flow2 = _interopRequireDefault(_Flow);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var SAVE_PROP = '__pm_flow';
	
	exports.default = function (element, adapter) {
	    if (element[SAVE_PROP]) {
	        return element[SAVE_PROP];
	    } else {
	        var flow = new _Flow2.default({ element: element, adapter: adapter });
	
	        // Bind adapter to element
	        Object.defineProperty(element, SAVE_PROP, {
	            enumerable: false,
	            writable: false,
	            value: flow
	        });
	
	        return flow;
	    }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2Zsb3cvZ2V0LWZsb3cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7Ozs7QUFFQSxJQUFNLFlBQVksV0FBWjs7a0JBRVMsVUFBQyxPQUFELEVBQVUsT0FBVixFQUFzQjtBQUNqQyxRQUFJLFFBQVEsU0FBUixDQUFKLEVBQXdCO0FBQ3BCLGVBQU8sUUFBUSxTQUFSLENBQVAsQ0FEb0I7S0FBeEIsTUFFTztBQUNILFlBQU0sT0FBTyxtQkFBUyxFQUFFLGdCQUFGLEVBQVcsZ0JBQVgsRUFBVCxDQUFQOzs7QUFESCxjQUlILENBQU8sY0FBUCxDQUFzQixPQUF0QixFQUErQixTQUEvQixFQUEwQztBQUN0Qyx3QkFBWSxLQUFaO0FBQ0Esc0JBQVUsS0FBVjtBQUNBLG1CQUFPLElBQVA7U0FISixFQUpHOztBQVVILGVBQU8sSUFBUCxDQVZHO0tBRlA7Q0FEVyIsImZpbGUiOiJnZXQtZmxvdy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRmxvdyBmcm9tICcuLi9GbG93JztcblxuY29uc3QgU0FWRV9QUk9QID0gJ19fcG1fZmxvdyc7XG5cbmV4cG9ydCBkZWZhdWx0IChlbGVtZW50LCBhZGFwdGVyKSA9PiB7XG4gICAgaWYgKGVsZW1lbnRbU0FWRV9QUk9QXSkge1xuICAgICAgICByZXR1cm4gZWxlbWVudFtTQVZFX1BST1BdO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGZsb3cgPSBuZXcgRmxvdyh7IGVsZW1lbnQsIGFkYXB0ZXIgfSk7XG5cbiAgICAgICAgLy8gQmluZCBhZGFwdGVyIHRvIGVsZW1lbnRcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsIFNBVkVfUFJPUCwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICAgICAgICB2YWx1ZTogZmxvd1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZmxvdztcbiAgICB9XG59O1xuXG5cbiJdfQ==

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.stepProgress = exports.speedPerSecond = exports.speedPerFrame = exports.smooth = exports.restrict = exports.relativeValue = exports.random = exports.radiansToDegrees = exports.pointFromAngleAndDistance = exports.offset = exports.getProgressFromValue = exports.getValueFromProgress = exports.hypotenuse = exports.ease = exports.distance = exports.dilate = exports.degreesToRadians = exports.angle = undefined;
	
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
	    Ease value within ranged parameters
	    
	    @param [number]: Progress between 0 and 1
	    @param [number]: Value of 0 progress
	    @param [number]: Value of 1 progress
	    @param [string || function]: Name of preset easing
	        to use or generated easing function
	    @return [number]: Value of eased progress in range
	*/
	var ease = exports.ease = function (progress, from, to, ease) {
	    var progressLimited = restrict(progress, 0, 1);
	    var easedProgress = ease(progressLimited);
	
	    return getValueFromProgress(easedProgress, from, to);
	};
	
	/*
	    Hypotenuse
	    
	    Returns the hypotenuse, side C, given the lengths of sides A and B.
	    
	    @param [number]: Length of A
	    @param [number]: Length of B
	    @return [number]: Length of C
	*/
	var hypotenuse = exports.hypotenuse = function (a, b) {
	    return Math.sqrt(a * a + b * b);
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
	    Offset between two objects of numbers
	
	    If property is found in b not present in a, it will return `0` for that prop.
	    
	    @param [Point]: First object
	    @param [Point]: Second object
	    @return [Offset]: Distance metrics between two points
	*/
	var offset = exports.offset = function (a, b) {
	    var offset = {};
	
	    for (var key in b) {
	        if (b.hasOwnProperty(key)) {
	            offset[key] = (0, _utils.hasProperty)(a, key) ? b[key] - a[key] : 0;
	        }
	    }
	
	    return offset;
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
	//# sourceMappingURL=data:application/json;base64,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QXJCIiwiZmlsZSI6ImNhbGMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBoYXNQcm9wZXJ0eSxcbiAgICBpc051bSxcbiAgICBmaW5kVmFsdWVBbmRVbml0LFxuICAgIHRvRGVjaW1hbFxufSBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgWkVST19QT0lOVCA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDAsXG4gICAgejogMFxufTtcblxuY29uc3QgZGlzdGFuY2UxRCA9IChhLCBiKSA9PiBNYXRoLmFicyhhIC0gYik7XG5cbi8qXG4gICAgQW5nbGUgYmV0d2VlbiBwb2ludHNcbiAgICBcbiAgICBUcmFuc2xhdGVzIHRoZSBoeXBvdGhldGljYWwgbGluZSBzbyB0aGF0IHRoZSAnZnJvbScgY29vcmRpbmF0ZXNcbiAgICBhcmUgYXQgMCwwXG4gICAgXG4gICAgQHBhcmFtIFtvYmplY3RdOiBYIGFuZCBZIGNvb3JkaW5hdGVzIG9mIGZyb20gcG9pbnRcbiAgICBAcGFyYW0gW29iamVjdF06IFggYW5kIFkgY29yZGluYXRlcyBvZiB0byBwb2ludFxuICAgIEByZXR1cm4gW3JhZGlhbl06IEFuZ2xlIGJldHdlZW4gdGhlIHR3byBwb2ludHMgaW4gcmFkaWFuc1xuKi9cbmV4cG9ydCBjb25zdCBhbmdsZSA9IChhLCBiID0gWkVST19QT0lOVCkgPT4gcmFkaWFuc1RvRGVncmVlcyhNYXRoLmF0YW4yKGEueCAtIGIueCwgYS55IC0gYi55KSk7XG5cbi8qXG4gICAgQ29udmVydCBkZWdyZWVzIHRvIHJhZGlhbnNcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIGluIGRlZ3JlZXNcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBpbiByYWRpYW5zXG4qL1xuZXhwb3J0IGNvbnN0IGRlZ3JlZXNUb1JhZGlhbnMgPSAoZGVncmVlcykgPT4gZGVncmVlcyAqIE1hdGguUEkgLyAxODA7XG5cbi8qXG4gICAgRGlsYXRlXG4gICAgXG4gICAgQ2hhbmdlIHRoZSBwcm9ncmVzc2lvbiBiZXR3ZWVuIGEgYW5kIGIgYWNjb3JkaW5nIHRvIGRpbGF0aW9uLlxuICAgIFxuICAgIFNvIGRpbGF0aW9uID0gMC41IHdvdWxkIGNoYW5nZVxuICAgIFxuICAgIGEgLS0tLS0tLS0tIGJcbiAgICBcbiAgICB0b1xuICAgIFxuICAgIGEgLS0tLSBiXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBQcmV2aW91cyB2YWx1ZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogRGlsYXRlIHByb2dyZXNzIGJ5IHhcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBQcmV2aW91cyB2YWx1ZSBwbHVzIHRoZSBkaWxhdGVkIGRpZmZlcmVuY2VcbiovXG5leHBvcnQgY29uc3QgZGlsYXRlID0gKGEsIGIsIGRpbGF0aW9uKSA9PiBhICsgKChiIC0gYSkgKiBkaWxhdGlvbik7XG5cbi8qXG4gICAgRGlzdGFuY2VcbiAgICBcbiAgICBSZXR1cm5zIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHR3byBuIGRpbWVuc2lvbmFsIHBvaW50cy5cbiAgICBcbiAgICBAcGFyYW0gW29iamVjdC9udW1iZXJdOiB4IGFuZCB5IG9yIGp1c3QgeCBvZiBwb2ludCBBXG4gICAgQHBhcmFtIFtvYmplY3QvbnVtYmVyXTogKG9wdGlvbmFsKTogeCBhbmQgeSBvciBqdXN0IHggb2YgcG9pbnQgQlxuICAgIEByZXR1cm4gW251bWJlcl06IFRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzXG4qL1xuZXhwb3J0IGNvbnN0IGRpc3RhbmNlID0gKGEsIGIgPSBaRVJPX1BPSU5UKSA9PiB7XG4gICAgLy8gMUQgZGltZW5zaW9uc1xuICAgIGlmIChpc051bShhKSkge1xuICAgICAgICByZXR1cm4gZGlzdGFuY2UxRChhLCBiKTtcblxuICAgIC8vIE11bHRpLWRpbWVuc2lvbmFsXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgeERlbHRhID0gZGlzdGFuY2UxRChhLngsIGIueCk7XG4gICAgICAgIGNvbnN0IHlEZWx0YSA9IGRpc3RhbmNlMUQoYS55LCBiLnkpO1xuICAgICAgICBjb25zdCB6RGVsdGEgPSAoaXNOdW0oYS56KSkgPyBkaXN0YW5jZTFEKGEueiwgYi56KSA6IDA7XG5cbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCgoeERlbHRhICoqIDIpICsgKHlEZWx0YSAqKiAyKSArICh6RGVsdGEgKiogMikpO1xuICAgIH1cbn07XG5cbi8qXG4gICAgRWFzZSB2YWx1ZSB3aXRoaW4gcmFuZ2VkIHBhcmFtZXRlcnNcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzIGJldHdlZW4gMCBhbmQgMVxuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgb2YgMCBwcm9ncmVzc1xuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgb2YgMSBwcm9ncmVzc1xuICAgIEBwYXJhbSBbc3RyaW5nIHx8IGZ1bmN0aW9uXTogTmFtZSBvZiBwcmVzZXQgZWFzaW5nXG4gICAgICAgIHRvIHVzZSBvciBnZW5lcmF0ZWQgZWFzaW5nIGZ1bmN0aW9uXG4gICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgb2YgZWFzZWQgcHJvZ3Jlc3MgaW4gcmFuZ2VcbiovIFxuZXhwb3J0IGNvbnN0IGVhc2UgPSAocHJvZ3Jlc3MsIGZyb20sIHRvLCBlYXNlKSA9PiB7XG4gICAgY29uc3QgcHJvZ3Jlc3NMaW1pdGVkID0gcmVzdHJpY3QocHJvZ3Jlc3MsIDAsIDEpO1xuICAgIGNvbnN0IGVhc2VkUHJvZ3Jlc3MgPSBlYXNlKHByb2dyZXNzTGltaXRlZCk7XG5cbiAgICByZXR1cm4gZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MoZWFzZWRQcm9ncmVzcywgZnJvbSwgdG8pO1xufTtcbiBcbi8qXG4gICAgSHlwb3RlbnVzZVxuICAgIFxuICAgIFJldHVybnMgdGhlIGh5cG90ZW51c2UsIHNpZGUgQywgZ2l2ZW4gdGhlIGxlbmd0aHMgb2Ygc2lkZXMgQSBhbmQgQi5cbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IExlbmd0aCBvZiBBXG4gICAgQHBhcmFtIFtudW1iZXJdOiBMZW5ndGggb2YgQlxuICAgIEByZXR1cm4gW251bWJlcl06IExlbmd0aCBvZiBDXG4qL1xuZXhwb3J0IGNvbnN0IGh5cG90ZW51c2UgPSAoYSwgYikgPT4gTWF0aC5zcXJ0KChhICogYSkgKyAoYiAqIGIpKTtcblxuLypcbiAgICBWYWx1ZSBpbiByYW5nZSBmcm9tIHByb2dyZXNzXG4gICAgXG4gICAgR2l2ZW4gYSBsb3dlciBsaW1pdCBhbmQgYW4gdXBwZXIgbGltaXQsIHdlIHJldHVybiB0aGUgdmFsdWUgd2l0aGluXG4gICAgdGhhdCByYW5nZSBhcyBleHByZXNzZWQgYnkgcHJvZ3Jlc3MgKGEgbnVtYmVyIGZyb20gMC0xKVxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVGhlIHByb2dyZXNzIGJldHdlZW4gbG93ZXIgYW5kIHVwcGVyIGxpbWl0cyBleHByZXNzZWQgMC0xXG4gICAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBvZiByYW5nZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXQgb2YgcmFuZ2VcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBhcyBjYWxjdWxhdGVkIGZyb20gcHJvZ3Jlc3Mgd2l0aGluIHJhbmdlIChub3QgbGltaXRlZCB3aXRoaW4gcmFuZ2UpXG4qL1xuZXhwb3J0IGNvbnN0IGdldFZhbHVlRnJvbVByb2dyZXNzID0gKHByb2dyZXNzLCBmcm9tLCB0bykgPT4gKC0gcHJvZ3Jlc3MgKiBmcm9tKSArIChwcm9ncmVzcyAqIHRvKSArIGZyb207XG5cbi8qXG4gICAgUHJvZ3Jlc3Mgd2l0aGluIGdpdmVuIHJhbmdlXG4gICAgXG4gICAgR2l2ZW4gYSBsb3dlciBsaW1pdCBhbmQgYW4gdXBwZXIgbGltaXQsIHdlIHJldHVybiB0aGUgcHJvZ3Jlc3NcbiAgICAoZXhwcmVzc2VkIGFzIGEgbnVtYmVyIDAtMSkgcmVwcmVzZW50ZWQgYnkgdGhlIGdpdmVuIHZhbHVlLCBhbmRcbiAgICBsaW1pdCB0aGF0IHByb2dyZXNzIHRvIHdpdGhpbiAwLTEuXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSB0byBmaW5kIHByb2dyZXNzIHdpdGhpbiBnaXZlbiByYW5nZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBVcHBlciBsaW1pdFxuICAgIEByZXR1cm4gW251bWJlcl06IFByb2dyZXNzIG9mIHZhbHVlIHdpdGhpbiByYW5nZSBhcyBleHByZXNzZWQgMC0xXG4qL1xuZXhwb3J0IGNvbnN0IGdldFByb2dyZXNzRnJvbVZhbHVlID0gKHZhbHVlLCBmcm9tLCB0bykgPT4gKHZhbHVlIC0gZnJvbSkgLyAodG8gLSBmcm9tKTtcblxuLypcbiAgICBPZmZzZXQgYmV0d2VlbiB0d28gb2JqZWN0cyBvZiBudW1iZXJzXG5cbiAgICBJZiBwcm9wZXJ0eSBpcyBmb3VuZCBpbiBiIG5vdCBwcmVzZW50IGluIGEsIGl0IHdpbGwgcmV0dXJuIGAwYCBmb3IgdGhhdCBwcm9wLlxuICAgIFxuICAgIEBwYXJhbSBbUG9pbnRdOiBGaXJzdCBvYmplY3RcbiAgICBAcGFyYW0gW1BvaW50XTogU2Vjb25kIG9iamVjdFxuICAgIEByZXR1cm4gW09mZnNldF06IERpc3RhbmNlIG1ldHJpY3MgYmV0d2VlbiB0d28gcG9pbnRzXG4qL1xuZXhwb3J0IGNvbnN0IG9mZnNldCA9IChhLCBiKSA9PiB7XG4gICAgY29uc3Qgb2Zmc2V0ID0ge307XG5cbiAgICBmb3IgKGxldCBrZXkgaW4gYikge1xuICAgICAgICBpZiAoYi5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICBvZmZzZXRba2V5XSA9IGhhc1Byb3BlcnR5KGEsIGtleSkgPyBiW2tleV0gLSBhW2tleV0gOiAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9mZnNldDtcbn07XG5cbi8qXG4gICAgUG9pbnQgZnJvbSBhbmdsZSBhbmQgZGlzdGFuY2VcbiAgICBcbiAgICBAcGFyYW0gW29iamVjdF06IDJEIHBvaW50IG9mIG9yaWdpblxuICAgIEBwYXJhbSBbbnVtYmVyXTogQW5nbGUgZnJvbSBvcmlnaW5cbiAgICBAcGFyYW0gW251bWJlcl06IERpc3RhbmNlIGZyb20gb3JpZ2luXG4gICAgQHJldHVybiBbb2JqZWN0XTogQ2FsY3VsYXRlZCAyRCBwb2ludFxuKi9cbmV4cG9ydCBjb25zdCBwb2ludEZyb21BbmdsZUFuZERpc3RhbmNlID0gKG9yaWdpbiwgYW5nbGUsIGRpc3RhbmNlKSA9PiB7XG4gICAgYW5nbGUgPSBkZWdyZWVzVG9SYWRpYW5zKGFuZ2xlKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHg6IGRpc3RhbmNlICogTWF0aC5jb3MoYW5nbGUpICsgb3JpZ2luLngsXG4gICAgICAgIHk6IGRpc3RhbmNlICogTWF0aC5zaW4oYW5nbGUpICsgb3JpZ2luLnlcbiAgICB9O1xufTtcblxuLypcbiAgICBDb252ZXJ0IHJhZGlhbnMgdG8gZGVncmVlc1xuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgaW4gcmFkaWFuc1xuICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGluIGRlZ3JlZXNcbiovXG5leHBvcnQgY29uc3QgcmFkaWFuc1RvRGVncmVlcyA9IChyYWRpYW5zKSA9PiByYWRpYW5zICogMTgwIC8gTWF0aC5QSTtcblxuLypcbiAgICBSZXR1cm4gcmFuZG9tIG51bWJlciBiZXR3ZWVuIHJhbmdlXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IE91dHB1dCBtaW5pbXVtXG4gICAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IE91dHB1dCBtYXhpbXVtXG4gICAgQHJldHVybiBbbnVtYmVyXTogUmFuZG9tIG51bWJlciB3aXRoaW4gcmFuZ2UsIG9yIDAgYW5kIDEgaWYgbm9uZSBwcm92aWRlZFxuKi9cbmV4cG9ydCBjb25zdCByYW5kb20gPSAobWluID0gMCwgbWF4ID0gMSkgPT4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xuXG4vKlxuICAgIENhbGN1bGF0ZSByZWxhdGl2ZSB2YWx1ZVxuICAgIFxuICAgIFRha2VzIHRoZSBvcGVyYXRvciBhbmQgdmFsdWUgZnJvbSBhIHN0cmluZywgaWUgXCIrPTVcIiwgYW5kIGFwcGxpZXNcbiAgICB0byB0aGUgY3VycmVudCB2YWx1ZSB0byByZXNvbHZlIGEgbmV3IHRhcmdldC5cbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcbiAgICBAcGFyYW0gW3N0cmluZ106IFJlbGF0aXZlIHZhbHVlXG4gICAgQHJldHVybiBbbnVtYmVyXTogTmV3IHZhbHVlXG4qL1xuZXhwb3J0IGNvbnN0IHJlbGF0aXZlVmFsdWUgPSAoY3VycmVudCwgcmVsYXRpdmUpID0+IHtcbiAgICBsZXQgbmV3VmFsdWUgPSBjdXJyZW50O1xuICAgIGNvbnN0IGVxdWF0aW9uID0gcmVsYXRpdmUuc3BsaXQoJz0nKTtcbiAgICBjb25zdCBvcGVyYXRvciA9IGVxdWF0aW9uWzBdO1xuICAgIGxldCB7IHVuaXQsIHZhbHVlIH0gPSBmaW5kVmFsdWVBbmRVbml0KGVxdWF0aW9uWzFdKTtcblxuICAgIHZhbHVlID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG5cbiAgICBzd2l0Y2ggKG9wZXJhdG9yKSB7XG4gICAgY2FzZSAnKyc6XG4gICAgICAgIG5ld1ZhbHVlICs9IHZhbHVlO1xuICAgICAgICBicmVhaztcbiAgICBjYXNlICctJzpcbiAgICAgICAgbmV3VmFsdWUgLT0gdmFsdWU7XG4gICAgICAgIGJyZWFrO1xuICAgIGNhc2UgJyonOlxuICAgICAgICBuZXdWYWx1ZSAqPSB2YWx1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgY2FzZSAnLyc6XG4gICAgICAgIG5ld1ZhbHVlIC89IHZhbHVlO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgXG4gICAgaWYgKHVuaXQpIHtcbiAgICAgICAgbmV3VmFsdWUgKz0gdW5pdDtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3VmFsdWU7XG59O1xuXG4vKlxuICAgIFJlc3RyaWN0IHZhbHVlIHRvIHJhbmdlXG4gICAgXG4gICAgUmV0dXJuIHZhbHVlIHdpdGhpbiB0aGUgcmFuZ2Ugb2YgbG93ZXJMaW1pdCBhbmQgdXBwZXJMaW1pdFxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgdG8ga2VlcCB3aXRoaW4gcmFuZ2VcbiAgICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IG9mIHJhbmdlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBVcHBlciBsaW1pdCBvZiByYW5nZVxuICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGFzIGxpbWl0ZWQgd2l0aGluIGdpdmVuIHJhbmdlXG4qL1xuZXhwb3J0IGNvbnN0IHJlc3RyaWN0ID0gKHZhbHVlLCBtaW4sIG1heCkgPT4gTWF0aC5tYXgoTWF0aC5taW4odmFsdWUsIG1heCksIG1pbik7XG5cbi8qXG4gICAgRnJhbWVyYXRlLWluZGVwZW5kZW50IHNtb290aGluZ1xuXG4gICAgQHBhcmFtIFtudW1iZXJdOiBOZXcgdmFsdWVcbiAgICBAcGFyYW0gW251bWJlcl06IE9sZCB2YWx1ZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb25cbiAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogU21vb3RoaW5nICgwIGlzIG5vbmUpXG4qL1xuZXhwb3J0IGNvbnN0IHNtb290aCA9IChuZXdWYWx1ZSwgb2xkVmFsdWUsIGR1cmF0aW9uLCBzbW9vdGhpbmcgPSAwKSA9PiB0b0RlY2ltYWwob2xkVmFsdWUgKyAoZHVyYXRpb24gKiAobmV3VmFsdWUgLSBvbGRWYWx1ZSkgLyBNYXRoLm1heChzbW9vdGhpbmcsIGR1cmF0aW9uKSkpO1xuXG4vKlxuICAgIENvbnZlcnQgeCBwZXIgc2Vjb25kIHRvIHBlciBmcmFtZSB2ZWxvY2l0eSBiYXNlZCBvbiBmcHNcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFVuaXQgcGVyIHNlY29uZFxuICAgIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb24gaW4gbXNcbiovXG5leHBvcnQgY29uc3Qgc3BlZWRQZXJGcmFtZSA9ICh4cHMsIGZyYW1lRHVyYXRpb24pID0+IChpc051bSh4cHMpKSA/IHhwcyAvICgxMDAwIC8gZnJhbWVEdXJhdGlvbikgOiAwO1xuXG4vKlxuICAgIENvbnZlcnQgdmVsb2NpdHkgaW50byB2ZWxpY2l0eSBwZXIgc2Vjb25kXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBVbml0IHBlciBmcmFtZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb24gaW4gbXNcbiovXG5leHBvcnQgY29uc3Qgc3BlZWRQZXJTZWNvbmQgPSAodmVsb2NpdHksIGZyYW1lRHVyYXRpb24pID0+IHZlbG9jaXR5ICogKDEwMDAgLyBmcmFtZUR1cmF0aW9uKTtcblxuLypcbiAgICBDcmVhdGUgc3RlcHBlZCB2ZXJzaW9uIG9mIDAtMSBwcm9ncmVzc1xuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICAgIEBwYXJhbSBbaW50XTogTnVtYmVyIG9mIHN0ZXBzXG4gICAgQHJldHVybiBbbnVtYmVyXTogU3RlcHBlZCB2YWx1ZVxuKi9cbmV4cG9ydCBjb25zdCBzdGVwUHJvZ3Jlc3MgPSAocHJvZ3Jlc3MsIHN0ZXBzKSA9PiB7XG4gICAgY29uc3Qgc2VnbWVudCA9IDEgLyAoc3RlcHMgLSAxKTtcbiAgICBjb25zdCB0YXJnZXQgPSAxIC0gKDEgLyBzdGVwcyk7XG4gICAgY29uc3QgcHJvZ3Jlc3NPZlRhcmdldCA9IE1hdGgubWluKHByb2dyZXNzIC8gdGFyZ2V0LCAxKTtcblxuICAgIHJldHVybiBNYXRoLmZsb29yKHByb2dyZXNzT2ZUYXJnZXQgLyBzZWdtZW50KSAqIHNlZ21lbnQ7XG59OyJdfQ==

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
	
	/*
	    Get value from function string
	
	    "translateX(20px)" -> "20px"
	*/
	var getValueFromFunctionString = exports.getValueFromFunctionString = function (value) {
	    return value.substring(value.indexOf('(') + 1, value.lastIndexOf(')'));
	};
	
	/*
	    Check if two objects have changed from each other
	    
	    @param [object]: Input A
	    @param [object]: Input B
	    @return [boolean]: True if different
	*/
	var hasChanged = exports.hasChanged = function (a, b) {
	    var changed = false;
	
	    for (var key in a) {
	        if (a.hasOwnProperty(key)) {
	            if (hasProperty(b, key)) {
	                if (a[key] !== b[key]) {
	                    changed = true;
	                }
	            } else {
	                changed = true;
	            }
	        }
	    }
	
	    return changed;
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
	    @param [string || NodeList]:
	        If string, treated as selector.
	        If not, treated as preexisting NodeList
	
	    @return [Array]
	*/
	var selectDom = exports.selectDom = function (selector) {
	    var nodes = typeof selector === 'string' ? document.querySelectorAll(selector) : selector;
	    return nodes.length ? [].slice.call(nodes) : [].push(nodes);
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
	//# sourceMappingURL=data:application/json;base64,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Q0FBMEIsUUFBMUIsQ0FBakMsR0FBdUUsUUFBdkUsQ0FEcUI7QUFFbkMsV0FBTyxLQUFDLENBQU0sTUFBTixHQUFnQixHQUFHLEtBQUgsQ0FBUyxJQUFULENBQWMsS0FBZCxDQUFqQixHQUF3QyxHQUFHLElBQUgsQ0FBUSxLQUFSLENBQXhDLENBRjRCO0NBQWQ7Ozs7Ozs7Ozs7QUFhbEIsSUFBTSxvREFBc0IsVUFBQyxLQUFEO1dBQVcsU0FBUyxLQUFULElBQWtCLE1BQU0sS0FBTixDQUFZLE1BQVosQ0FBbEIsR0FBd0MsQ0FBQyxLQUFELENBQXhDO0NBQVg7Ozs7Ozs7Ozs7QUFVNUIsSUFBTSxvREFBc0IsVUFBQyxLQUFEO1dBQVcsU0FBUyxLQUFULElBQWtCLE1BQU0sS0FBTixDQUFZLEdBQVosQ0FBbEIsR0FBcUMsQ0FBQyxLQUFELENBQXJDO0NBQVg7Ozs7Ozs7OztBQVM1QixJQUFNLGdDQUFZLFVBQUMsR0FBRCxFQUF3QjtRQUFsQixrRUFBWSxpQkFBTTs7QUFDN0MseUJBQVksSUFBTSxVQUFsQixDQUQ2QztBQUU3QyxXQUFPLEtBQUssS0FBTCxDQUFXLE1BQU0sU0FBTixDQUFYLEdBQThCLFNBQTlCLENBRnNDO0NBQXhCIiwiZmlsZSI6InV0aWxzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IENBTUVMX0NBU0VfUEFUVEVSTiA9IC8oW2Etel0pKFtBLVpdKS9nO1xuY29uc3QgUkVQTEFDRV9URU1QTEFURSA9ICckMS0kMic7XG5jb25zdCBIQVNfUEVSRk9STUFOQ0VfTk9XID0gKHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCcgJiYgcGVyZm9ybWFuY2Uubm93KTtcblxuLypcbiAgICBHZXQgdmFyIHR5cGUgYXMgc3RyaW5nXG4gICAgXG4gICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgQHJldHVybiBbc3RyaW5nXTogUmV0dXJucywgZm9yIGluc3RhbmNlICdPYmplY3QnIGlmIFtvYmplY3QgT2JqZWN0XVxuKi9cbmNvbnN0IHZhclR5cGUgPSB2YXJpYWJsZSA9PiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFyaWFibGUpLnNsaWNlKDgsIC0xKTtcblxuLypcbiAgICBDb252ZXJ0IGNhbWVsQ2FzZSB0byBkYXNoLWNhc2VcblxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEByZXR1cm4gW3N0cmluZ11cbiovXG5leHBvcnQgY29uc3QgY2FtZWxUb0Rhc2ggPSAoc3RyaW5nKSA9PiBzdHJpbmcucmVwbGFjZShDQU1FTF9DQVNFX1BBVFRFUk4sIFJFUExBQ0VfVEVNUExBVEUpLnRvTG93ZXJDYXNlKCk7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVEZWxpbWl0ZWQgPSAodmFsdWVzLCB0ZXJtcywgZGVsaW1pdGVyLCBjaG9wKSA9PiB7XG4gICAgY29uc3QgbnVtVGVybXMgPSB0ZXJtcy5sZW5ndGg7XG4gICAgbGV0IGNvbWJpbmVkID0gJyc7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVRlcm1zOyBpKyspIHtcbiAgICAgICAgY29uc3QgdGVybSA9IHRlcm1zW2ldO1xuICAgICAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KHRlcm0pKSB7XG4gICAgICAgICAgICBjb21iaW5lZCArPSB2YWx1ZXNbdGVybV0gKyBkZWxpbWl0ZXI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY2hvcCkge1xuICAgICAgICBjb21iaW5lZCA9IGNvbWJpbmVkLnNsaWNlKDAsIC1jaG9wKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tYmluZWQ7XG59O1xuXG4vKlxuICAgIENyZWF0ZSBhIGZ1bmN0aW9uIHN0cmluZ1xuXG4gICAgJzIwcHgnLCAndHJhbnNsYXRlJyAtPiAndHJhbnNsYXRlKDIwcHgpJ1xuXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHJldHVybiBbc3RyaW5nXVxuKi9cbmV4cG9ydCBjb25zdCBjcmVhdGVGdW5jdGlvblN0cmluZyA9ICh2YWx1ZSwgcHJlZml4KSA9PiBgJHtwcmVmaXh9KCR7dmFsdWV9KWA7XG5cbi8qXG4gICAgR2VuZXJhdGUgY3VycmVudCB0aW1lc3RhbXBcbiAgICBcbiAgICBAcmV0dXJuIFt0aW1lc3RhbXBdOiBDdXJyZW50IFVOSVggdGltZXN0YW1wXG4qL1xuZXhwb3J0IGNvbnN0IGN1cnJlbnRUaW1lID0gSEFTX1BFUkZPUk1BTkNFX05PVyA/ICgpID0+IHBlcmZvcm1hbmNlLm5vdygpIDogKCkgPT4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbi8qXG4gICAgU3BsaXQgYSB2YWx1ZSBpbnRvIGEgdmFsdWUvdW5pdCBvYmplY3RcbiAgICBcbiAgICAgICAgXCIyMDBweFwiIC0+IHsgdmFsdWU6IDIwMCwgdW5pdDogXCJweFwiIH1cbiAgICAgICAgXG4gICAgQHBhcmFtIFtzdHJpbmddOiBWYWx1ZSB0byBzcGxpdFxuICAgIEByZXR1cm4gW29iamVjdF06IE9iamVjdCB3aXRoIHZhbHVlIGFuZCB1bml0IHByb3BzXG4qL1xuZXhwb3J0IGNvbnN0IGZpbmRWYWx1ZUFuZFVuaXQgPSAodmFsdWUpID0+IHtcbiAgICBpZiAodmFsdWUubWF0Y2gpIHtcbiAgICAgICAgY29uc3Qgc3BsaXRWYWx1ZSA9IHZhbHVlLm1hdGNoKC8oLT9cXGQqXFwuP1xcZCopKC4qKS8pO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcGFyc2VGbG9hdChzcGxpdFZhbHVlWzFdKSxcbiAgICAgICAgICAgIHVuaXQ6ICBzcGxpdFZhbHVlWzJdXG4gICAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHsgdmFsdWUgfTtcbiAgICB9XG59O1xuXG4vKlxuICAgIFNwbGl0IGNvbG9yIHN0cmluZyBpbnRvIG1hcCBvZiBjb2xvciBwcm9wZXJ0aWVzXG5cbiAgICBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMClcIiwgW1wiUmVkXCIsICdHcmVlblwiLCBcIkJsdWVcIiwgXCJBbHBoYVwiXVxuXG4gICAgeyBSZWQ6IDI1NS4uLiB9XG4qL1xuZXhwb3J0IGNvbnN0IGdldENvbG9yVmFsdWVzID0gKHZhbHVlLCBjb2xvclRlcm1zKSA9PiB7XG4gICAgY29uc3QgbnVtQ29sb3JUZXJtcyA9IGNvbG9yVGVybXMubGVuZ3RoO1xuICAgIGNvbnN0IGNvbG9yVmFsdWVzID0ge307XG4gICAgY29uc3QgY29sb3JzID0gc3BsaXRDb21tYURlbGltaXRlZChnZXRWYWx1ZUZyb21GdW5jdGlvblN0cmluZyh2YWx1ZSkpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1Db2xvclRlcm1zOyBpKyspIHtcbiAgICAgICAgY29sb3JWYWx1ZXNbY29sb3JUZXJtc1tpXV0gPSAoY29sb3JzW2ldICE9PSB1bmRlZmluZWQpID8gY29sb3JzW2ldIDogMTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29sb3JWYWx1ZXM7XG59O1xuXG4vKlxuICAgIEdldCB2YWx1ZSBmcm9tIGZ1bmN0aW9uIHN0cmluZ1xuXG4gICAgXCJ0cmFuc2xhdGVYKDIwcHgpXCIgLT4gXCIyMHB4XCJcbiovXG5leHBvcnQgY29uc3QgZ2V0VmFsdWVGcm9tRnVuY3Rpb25TdHJpbmcgPSAodmFsdWUpID0+IHZhbHVlLnN1YnN0cmluZyh2YWx1ZS5pbmRleE9mKCcoJykgKyAxLCB2YWx1ZS5sYXN0SW5kZXhPZignKScpKTtcblxuLypcbiAgICBDaGVjayBpZiB0d28gb2JqZWN0cyBoYXZlIGNoYW5nZWQgZnJvbSBlYWNoIG90aGVyXG4gICAgXG4gICAgQHBhcmFtIFtvYmplY3RdOiBJbnB1dCBBXG4gICAgQHBhcmFtIFtvYmplY3RdOiBJbnB1dCBCXG4gICAgQHJldHVybiBbYm9vbGVhbl06IFRydWUgaWYgZGlmZmVyZW50XG4qL1xuZXhwb3J0IGNvbnN0IGhhc0NoYW5nZWQgPSAoYSwgYikgPT4ge1xuICAgIGxldCBjaGFuZ2VkID0gZmFsc2U7XG5cbiAgICBmb3IgKGxldCBrZXkgaW4gYSkge1xuICAgICAgICBpZiAoYS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICBpZiAoaGFzUHJvcGVydHkoYiwga2V5KSkge1xuICAgICAgICAgICAgICAgIGlmIChhW2tleV0gIT09IGJba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoYW5nZWQ7XG59O1xuXG4vKlxuICAgIENoZWNrIGlmIG9iamVjdCBoYXMgcHJvcGVydHkgYW5kIGl0IGlzbid0IHVuZGVmaW5lZFxuXG4gICAgQHBhcmFtIFtvYmplY3RdXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHJldHVybiBbYm9vbGVhbl1cbiovXG5leHBvcnQgY29uc3QgaGFzUHJvcGVydHkgPSAob2JqZWN0LCBwcm9wZXJ0eU5hbWUpID0+IG9iamVjdC5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eU5hbWUpICYmIG9iamVjdFtwcm9wZXJ0eU5hbWVdICE9PSB1bmRlZmluZWQ7XG5cbi8qXG4gICAgSXMgdXRpbHMgdmFyIGFuIGFycmF5ID8gXG4gICAgXG4gICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB1dGlscy52YXJUeXBlID09PSAnQXJyYXknXG4qL1xuZXhwb3J0IGNvbnN0IGlzQXJyYXkgPSAoYXJyKSA9PiB2YXJUeXBlKGFycikgPT09ICdBcnJheSc7XG5cbi8qXG4gICAgSXMgdXRpbHMgdmFyIGEgZnVuY3Rpb24gPyBcbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHV0aWxzLnZhclR5cGUgPT09ICdGdW5jdGlvbidcbiovXG5leHBvcnQgY29uc3QgaXNGdW5jID0gKG9iaikgPT4gdmFyVHlwZShvYmopID09PSAnRnVuY3Rpb24nO1xuXG4vKlxuICAgIElzIHV0aWxzIHZhciBhIG51bWJlcj9cbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiA9PT0gJ251bWJlcidcbiovXG5leHBvcnQgY29uc3QgaXNOdW0gPSAobnVtKSA9PiB0eXBlb2YgbnVtID09PSAnbnVtYmVyJztcblxuLypcbiAgICBJcyB1dGlscyB2YXIgYW4gb2JqZWN0P1xuICAgIFxuICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mID09PSAnb2JqZWN0J1xuKi9cbmV4cG9ydCBjb25zdCBpc09iaiA9IChvYmopID0+IHR5cGVvZiBvYmogPT09ICdvYmplY3QnO1xuXG4vKlxuICAgIElzIHV0aWxzIGEgcmVsYXRpdmUgdmFsdWUgYXNzaWdubWVudD9cbiAgICBcbiAgICBAcGFyYW0gW3N0cmluZ106IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogSWYgdXRpbHMgbG9va3MgbGlrZSBhIHJlbGF0aXZlIHZhbHVlIGFzc2lnbm1lbnRcbiovXG5leHBvcnQgY29uc3QgaXNSZWxhdGl2ZVZhbHVlID0gKHZhbHVlKSA9PiAodmFsdWUgJiYgdmFsdWUuaW5kZXhPZiAmJiB2YWx1ZS5pbmRleE9mKCc9JykgPiAwKSA/IHRydWUgOiBmYWxzZTtcblxuLypcbiAgICBJcyB1dGlscyB2YXIgYSBzdHJpbmcgPyBcbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnXG4qL1xuZXhwb3J0IGNvbnN0IGlzU3RyaW5nID0gKHN0cikgPT4gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZyc7XG5cbi8qXG4gICAgQHBhcmFtIFtzdHJpbmcgfHwgTm9kZUxpc3RdOlxuICAgICAgICBJZiBzdHJpbmcsIHRyZWF0ZWQgYXMgc2VsZWN0b3IuXG4gICAgICAgIElmIG5vdCwgdHJlYXRlZCBhcyBwcmVleGlzdGluZyBOb2RlTGlzdFxuXG4gICAgQHJldHVybiBbQXJyYXldXG4qL1xuZXhwb3J0IGNvbnN0IHNlbGVjdERvbSA9IChzZWxlY3RvcikgPT4ge1xuICAgIGNvbnN0IG5vZGVzID0gKHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycpID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikgOiBzZWxlY3RvcjtcbiAgICByZXR1cm4gKG5vZGVzLmxlbmd0aCkgPyBbXS5zbGljZS5jYWxsKG5vZGVzKSA6IFtdLnB1c2gobm9kZXMpO1xufTtcblxuLypcbiAgICBTcGxpdCBjb21tYS1kZWxpbWl0ZWQgc3RyaW5nXG5cbiAgICBcImZvbyxiYXJcIiAtPiBbXCJmb29cIiwgXCJiYXJcIl1cblxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEByZXR1cm4gW2FycmF5XVxuKi9cbmV4cG9ydCBjb25zdCBzcGxpdENvbW1hRGVsaW1pdGVkID0gKHZhbHVlKSA9PiBpc1N0cmluZyh2YWx1ZSkgPyB2YWx1ZS5zcGxpdCgvLFxccyovKSA6IFt2YWx1ZV07XG5cbi8qXG4gICAgU3BsaXQgc3BhY2UtZGVsaW1pdGVkIHN0cmluZ1xuXG4gICAgXCJmb28gYmFyXCIgLT4gW1wiZm9vXCIsIFwiYmFyXCJdXG5cbiAgICBAcGFyYW0gW3N0cmluZ11cbiAgICBAcmV0dXJuIFthcnJheV1cbiovXG5leHBvcnQgY29uc3Qgc3BsaXRTcGFjZURlbGltaXRlZCA9ICh2YWx1ZSkgPT4gaXNTdHJpbmcodmFsdWUpID8gdmFsdWUuc3BsaXQoJyAnKSA6IFt2YWx1ZV07XG5cbi8qXG4gICAgQ29udmVydCBudW1iZXIgdG8geCBkZWNpbWFsIHBsYWNlc1xuXG4gICAgQHBhcmFtIFtudW1iZXJdXG4gICAgQHBhcmFtIFtudW1iZXJdXG4gICAgQHJldHVybiBbbnVtYmVyXVxuKi9cbmV4cG9ydCBjb25zdCB0b0RlY2ltYWwgPSAobnVtLCBwcmVjaXNpb24gPSAyKSA9PiB7XG4gICAgcHJlY2lzaW9uID0gMTAgKiogcHJlY2lzaW9uO1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG51bSAqIHByZWNpc2lvbikgLyBwcmVjaXNpb247XG59O1xuIl19

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _defaultProps = __webpack_require__(48);
	
	exports.default = {
	    defaultProps: _defaultProps.opacity
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9hbHBoYS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7O2tCQUVlO0FBQ1gsdUNBRFciLCJmaWxlIjoiYWxwaGEuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgb3BhY2l0eSB9IGZyb20gJy4vc2V0dGluZ3MvZGVmYXVsdC1wcm9wcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkZWZhdWx0UHJvcHM6IG9wYWNpdHlcbn07Il19

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _unit = __webpack_require__(32);
	
	var _unit2 = _interopRequireDefault(_unit);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    defaultProps: {
	        unit: 'deg',
	        type: _unit2.default
	    }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9hbmdsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7OztrQkFFZTtBQUNYLGtCQUFjO0FBQ1YsY0FBTSxLQUFOO0FBQ0EsNEJBRlU7S0FBZCIsImZpbGUiOiJhbmdsZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdW5pdFR5cGUgZnJvbSAnLi91bml0JztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICB1bml0OiAnZGVnJyxcbiAgICAgICAgdHlwZTogdW5pdFR5cGVcbiAgICB9XG59OyJdfQ==

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _rgb = __webpack_require__(29);
	
	var _rgb2 = _interopRequireDefault(_rgb);
	
	var _hsl = __webpack_require__(27);
	
	var _hsl2 = _interopRequireDefault(_hsl);
	
	var _hex = __webpack_require__(26);
	
	var _hex2 = _interopRequireDefault(_hex);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var colorTypes = [_rgb2.default, _hsl2.default, _hex2.default];
	var numColorTypes = colorTypes.length;
	
	exports.default = {
	    defaultProps: _extends({}, _rgb2.default.defaultProps, _hsl2.default.defaultProps),
	
	    test: function (value) {
	        return _rgb2.default.test(value) || _hex2.default.test(value) || _hsl2.default.test(value);
	    },
	
	    split: function (value) {
	        for (var i = 0; i < numColorTypes; i++) {
	            if (colorTypes[i].test(value)) {
	                return colorTypes[i].split(value);
	            }
	        }
	    },
	
	    combine: function (values) {
	        return values.Red !== undefined ? _rgb2.default.combine(values) : _hsl2.default.combine(values);
	    }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9jb2xvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU0sYUFBYSw2Q0FBYjtBQUNOLElBQU0sZ0JBQWdCLFdBQVcsTUFBWDs7a0JBRVA7QUFDWCwrQkFBbUIsY0FBSSxZQUFKLEVBQXFCLGNBQUksWUFBSixDQUF4Qzs7QUFFQSxVQUFNLFVBQUMsS0FBRDtlQUFXLGNBQUksSUFBSixDQUFTLEtBQVQsS0FBbUIsY0FBSSxJQUFKLENBQVMsS0FBVCxDQUFuQixJQUFzQyxjQUFJLElBQUosQ0FBUyxLQUFULENBQXRDO0tBQVg7O0FBRU4sV0FBTyxVQUFDLEtBQUQsRUFBVztBQUNkLGFBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLGFBQUosRUFBbUIsR0FBbkMsRUFBd0M7QUFDcEMsZ0JBQUksV0FBVyxDQUFYLEVBQWMsSUFBZCxDQUFtQixLQUFuQixDQUFKLEVBQStCO0FBQzNCLHVCQUFPLFdBQVcsQ0FBWCxFQUFjLEtBQWQsQ0FBb0IsS0FBcEIsQ0FBUCxDQUQyQjthQUEvQjtTQURKO0tBREc7O0FBUVAsYUFBUyxVQUFDLE1BQUQ7ZUFBWSxNQUFDLENBQU8sR0FBUCxLQUFlLFNBQWYsR0FBNEIsY0FBSSxPQUFKLENBQVksTUFBWixDQUE3QixHQUFtRCxjQUFJLE9BQUosQ0FBWSxNQUFaLENBQW5EO0tBQVoiLCJmaWxlIjoiY29sb3IuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJnYiBmcm9tICcuL3JnYic7XG5pbXBvcnQgaHNsIGZyb20gJy4vaHNsJztcbmltcG9ydCBoZXggZnJvbSAnLi9oZXgnO1xuXG5jb25zdCBjb2xvclR5cGVzID0gW3JnYiwgaHNsLCBoZXhdO1xuY29uc3QgbnVtQ29sb3JUeXBlcyA9IGNvbG9yVHlwZXMubGVuZ3RoO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGVmYXVsdFByb3BzOiB7IC4uLnJnYi5kZWZhdWx0UHJvcHMsIC4uLmhzbC5kZWZhdWx0UHJvcHMgfSxcblxuICAgIHRlc3Q6ICh2YWx1ZSkgPT4gcmdiLnRlc3QodmFsdWUpIHx8IGhleC50ZXN0KHZhbHVlKSB8fCBoc2wudGVzdCh2YWx1ZSksXG5cbiAgICBzcGxpdDogKHZhbHVlKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQ29sb3JUeXBlczsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY29sb3JUeXBlc1tpXS50ZXN0KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb2xvclR5cGVzW2ldLnNwbGl0KHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBjb21iaW5lOiAodmFsdWVzKSA9PiAodmFsdWVzLlJlZCAhPT0gdW5kZWZpbmVkKSA/IHJnYi5jb21iaW5lKHZhbHVlcykgOiBoc2wuY29tYmluZSh2YWx1ZXMpXG59O1xuIl19

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(21);
	
	var FLOAT_REGEX = /(-)?(\d[\d\.]*)/g;
	var generateToken = function (token) {
	    return '${' + token + '}';
	};
	
	exports.default = {
	
	    test: function (value) {
	        var matches = value.match(FLOAT_REGEX);
	        return (0, _utils.isArray)(matches) && matches.length > 1;
	    },
	
	    template: function (value) {
	        var counter = 0;
	        return value.replace(FLOAT_REGEX, function () {
	            return generateToken(counter++);
	        });
	    },
	
	    split: function (value) {
	        var splitValue = {};
	
	        value.match(FLOAT_REGEX).forEach(function (value, i) {
	            return splitValue[i] = value;
	        });
	
	        return splitValue;
	    },
	
	    combine: function (values, template) {
	        for (var key in values) {
	            if (values.hasOwnProperty(key)) {
	                template = template.replace(generateToken(key), values[key]);
	            }
	        }
	
	        return template;
	    }
	
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9jb21wbGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7QUFFQSxJQUFNLGNBQWMsa0JBQWQ7QUFDTixJQUFNLGdCQUFnQixVQUFDLEtBQUQ7V0FBVyxPQUFPLEtBQVAsR0FBZSxHQUFmO0NBQVg7O2tCQUVQOztBQUVYLFVBQU0sVUFBQyxLQUFELEVBQVc7QUFDYixZQUFNLFVBQVUsTUFBTSxLQUFOLENBQVksV0FBWixDQUFWLENBRE87QUFFYixlQUFRLG9CQUFRLE9BQVIsS0FBb0IsUUFBUSxNQUFSLEdBQWlCLENBQWpCLENBRmY7S0FBWDs7QUFLTixjQUFVLFVBQUMsS0FBRCxFQUFXO0FBQ2pCLFlBQUksVUFBVSxDQUFWLENBRGE7QUFFakIsZUFBTyxNQUFNLE9BQU4sQ0FBYyxXQUFkLEVBQTJCO21CQUFNLGNBQWMsU0FBZDtTQUFOLENBQWxDLENBRmlCO0tBQVg7O0FBS1YsV0FBTyxVQUFDLEtBQUQsRUFBVztBQUNkLFlBQU0sYUFBYSxFQUFiLENBRFE7O0FBR2QsY0FBTSxLQUFOLENBQVksV0FBWixFQUF5QixPQUF6QixDQUFpQyxVQUFDLEtBQUQsRUFBUSxDQUFSO21CQUFjLFdBQVcsQ0FBWCxJQUFnQixLQUFoQjtTQUFkLENBQWpDLENBSGM7O0FBS2QsZUFBTyxVQUFQLENBTGM7S0FBWDs7QUFRUCxhQUFTLFVBQUMsTUFBRCxFQUFTLFFBQVQsRUFBc0I7QUFDM0IsYUFBSyxJQUFJLEdBQUosSUFBVyxNQUFoQixFQUF3QjtBQUNwQixnQkFBSSxPQUFPLGNBQVAsQ0FBc0IsR0FBdEIsQ0FBSixFQUFnQztBQUM1QiwyQkFBVyxTQUFTLE9BQVQsQ0FBaUIsY0FBYyxHQUFkLENBQWpCLEVBQXFDLE9BQU8sR0FBUCxDQUFyQyxDQUFYLENBRDRCO2FBQWhDO1NBREo7O0FBTUEsZUFBTyxRQUFQLENBUDJCO0tBQXRCIiwiZmlsZSI6ImNvbXBsZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gJy4uL2luYy91dGlscyc7XG5cbmNvbnN0IEZMT0FUX1JFR0VYID0gLygtKT8oXFxkW1xcZFxcLl0qKS9nO1xuY29uc3QgZ2VuZXJhdGVUb2tlbiA9ICh0b2tlbikgPT4gJyR7JyArIHRva2VuICsgJ30nO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICB0ZXN0OiAodmFsdWUpID0+IHtcbiAgICAgICAgY29uc3QgbWF0Y2hlcyA9IHZhbHVlLm1hdGNoKEZMT0FUX1JFR0VYKTtcbiAgICAgICAgcmV0dXJuIChpc0FycmF5KG1hdGNoZXMpICYmIG1hdGNoZXMubGVuZ3RoID4gMSk7XG4gICAgfSxcblxuICAgIHRlbXBsYXRlOiAodmFsdWUpID0+IHtcbiAgICAgICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgICAgICByZXR1cm4gdmFsdWUucmVwbGFjZShGTE9BVF9SRUdFWCwgKCkgPT4gZ2VuZXJhdGVUb2tlbihjb3VudGVyKyspKTtcbiAgICB9LFxuXG4gICAgc3BsaXQ6ICh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBzcGxpdFZhbHVlID0ge307XG5cbiAgICAgICAgdmFsdWUubWF0Y2goRkxPQVRfUkVHRVgpLmZvckVhY2goKHZhbHVlLCBpKSA9PiBzcGxpdFZhbHVlW2ldID0gdmFsdWUpO1xuXG4gICAgICAgIHJldHVybiBzcGxpdFZhbHVlO1xuICAgIH0sXG5cbiAgICBjb21iaW5lOiAodmFsdWVzLCB0ZW1wbGF0ZSkgPT4ge1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZSA9IHRlbXBsYXRlLnJlcGxhY2UoZ2VuZXJhdGVUb2tlbihrZXkpLCB2YWx1ZXNba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgfVxuXG59OyJdfQ==

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _rgb = __webpack_require__(29);
	
	var _rgb2 = _interopRequireDefault(_rgb);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    defaultProps: _rgb2.default.defaultProps,
	
	    test: function (value) {
	        return value && value.indexOf('#') > -1;
	    },
	
	    split: function (value) {
	        var r = void 0,
	            g = void 0,
	            b = void 0;
	
	        // If we have 6 characters, ie #FF0000
	        if (value.length > 4) {
	            r = value.substr(1, 2);
	            g = value.substr(3, 2);
	            b = value.substr(5, 2);
	
	            // Or we have 3 characters, ie #F00
	        } else {
	                r = value.substr(1, 1);
	                g = value.substr(2, 1);
	                b = value.substr(3, 1);
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
	    },
	
	    combine: function (values) {
	        return _rgb2.default.combine(values);
	    }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9oZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7Ozs7a0JBRWU7QUFDWCxrQkFBYyxjQUFJLFlBQUo7O0FBRWQsVUFBTSxVQUFDLEtBQUQ7ZUFBWSxTQUFTLE1BQU0sT0FBTixDQUFjLEdBQWQsSUFBcUIsQ0FBQyxDQUFEO0tBQTFDOztBQUVOLFdBQU8sVUFBQyxLQUFELEVBQVc7QUFDZCxZQUFJLFVBQUo7WUFBTyxVQUFQO1lBQVUsVUFBVjs7O0FBRGMsWUFJVixNQUFNLE1BQU4sR0FBZSxDQUFmLEVBQWtCO0FBQ2xCLGdCQUFJLE1BQU0sTUFBTixDQUFhLENBQWIsRUFBZ0IsQ0FBaEIsQ0FBSixDQURrQjtBQUVsQixnQkFBSSxNQUFNLE1BQU4sQ0FBYSxDQUFiLEVBQWdCLENBQWhCLENBQUosQ0FGa0I7QUFHbEIsZ0JBQUksTUFBTSxNQUFOLENBQWEsQ0FBYixFQUFnQixDQUFoQixDQUFKOzs7QUFIa0IsU0FBdEIsTUFNTztBQUNILG9CQUFJLE1BQU0sTUFBTixDQUFhLENBQWIsRUFBZ0IsQ0FBaEIsQ0FBSixDQURHO0FBRUgsb0JBQUksTUFBTSxNQUFOLENBQWEsQ0FBYixFQUFnQixDQUFoQixDQUFKLENBRkc7QUFHSCxvQkFBSSxNQUFNLE1BQU4sQ0FBYSxDQUFiLEVBQWdCLENBQWhCLENBQUosQ0FIRztBQUlILHFCQUFLLENBQUwsQ0FKRztBQUtILHFCQUFLLENBQUwsQ0FMRztBQU1ILHFCQUFLLENBQUwsQ0FORzthQU5QOztBQWVBLGVBQU87QUFDSCxpQkFBSyxTQUFTLENBQVQsRUFBWSxFQUFaLENBQUw7QUFDQSxtQkFBTyxTQUFTLENBQVQsRUFBWSxFQUFaLENBQVA7QUFDQSxrQkFBTSxTQUFTLENBQVQsRUFBWSxFQUFaLENBQU47QUFDQSxtQkFBTyxDQUFQO1NBSkosQ0FuQmM7S0FBWDs7QUEyQlAsYUFBUyxVQUFDLE1BQUQ7ZUFBWSxjQUFJLE9BQUosQ0FBWSxNQUFaO0tBQVoiLCJmaWxlIjoiaGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZ2IgZnJvbSAnLi9yZ2InO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGVmYXVsdFByb3BzOiByZ2IuZGVmYXVsdFByb3BzLFxuXG4gICAgdGVzdDogKHZhbHVlKSA9PiAodmFsdWUgJiYgdmFsdWUuaW5kZXhPZignIycpID4gLTEpLFxuXG4gICAgc3BsaXQ6ICh2YWx1ZSkgPT4ge1xuICAgICAgICBsZXQgciwgZywgYjtcblxuICAgICAgICAvLyBJZiB3ZSBoYXZlIDYgY2hhcmFjdGVycywgaWUgI0ZGMDAwMFxuICAgICAgICBpZiAodmFsdWUubGVuZ3RoID4gNCkge1xuICAgICAgICAgICAgciA9IHZhbHVlLnN1YnN0cigxLCAyKTtcbiAgICAgICAgICAgIGcgPSB2YWx1ZS5zdWJzdHIoMywgMik7XG4gICAgICAgICAgICBiID0gdmFsdWUuc3Vic3RyKDUsIDIpO1xuXG4gICAgICAgIC8vIE9yIHdlIGhhdmUgMyBjaGFyYWN0ZXJzLCBpZSAjRjAwXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByID0gdmFsdWUuc3Vic3RyKDEsIDEpO1xuICAgICAgICAgICAgZyA9IHZhbHVlLnN1YnN0cigyLCAxKTtcbiAgICAgICAgICAgIGIgPSB2YWx1ZS5zdWJzdHIoMywgMSk7XG4gICAgICAgICAgICByICs9IHI7XG4gICAgICAgICAgICBnICs9IGc7XG4gICAgICAgICAgICBiICs9IGI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgUmVkOiBwYXJzZUludChyLCAxNiksXG4gICAgICAgICAgICBHcmVlbjogcGFyc2VJbnQoZywgMTYpLFxuICAgICAgICAgICAgQmx1ZTogcGFyc2VJbnQoYiwgMTYpLFxuICAgICAgICAgICAgQWxwaGE6IDFcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogKHZhbHVlcykgPT4gcmdiLmNvbWJpbmUodmFsdWVzKVxufTsiXX0=

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _defaultProps = __webpack_require__(48);
	
	var _dictionary = __webpack_require__(49);
	
	var _utils = __webpack_require__(21);
	
	exports.default = {
	    defaultProps: {
	        Hue: {
	            min: 0,
	            max: 360
	        },
	        Saturation: _defaultProps.percent,
	        Lightness: _defaultProps.percent,
	        Alpha: _defaultProps.opacity
	    },
	
	    test: function (value) {
	        return value && value.indexOf('hsl') > -1;
	    },
	
	    split: function (value) {
	        return (0, _utils.getColorValues)(value, _dictionary.hsl);
	    },
	
	    combine: function (values) {
	        return (0, _utils.createFunctionString)((0, _utils.createDelimited)(values, _dictionary.hsl, ', ', 2), 'hsla');
	    }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9oc2wuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUNBOztBQUNBOztrQkFFZTtBQUNYLGtCQUFjO0FBQ1YsYUFBSztBQUNELGlCQUFLLENBQUw7QUFDQSxpQkFBSyxHQUFMO1NBRko7QUFJQSx5Q0FMVTtBQU1WLHdDQU5VO0FBT1Ysb0NBUFU7S0FBZDs7QUFVQSxVQUFNLFVBQUMsS0FBRDtlQUFZLFNBQVMsTUFBTSxPQUFOLENBQWMsS0FBZCxJQUF1QixDQUFDLENBQUQ7S0FBNUM7O0FBRU4sV0FBTyxVQUFDLEtBQUQ7ZUFBVywyQkFBZSxLQUFmO0tBQVg7O0FBRVAsYUFBUyxVQUFDLE1BQUQ7ZUFBWSxpQ0FBcUIsNEJBQWdCLE1BQWhCLG1CQUFrQyxJQUFsQyxFQUF3QyxDQUF4QyxDQUFyQixFQUFpRSxNQUFqRTtLQUFaIiwiZmlsZSI6ImhzbC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwZXJjZW50LCBvcGFjaXR5IH0gZnJvbSAnLi9zZXR0aW5ncy9kZWZhdWx0LXByb3BzJztcbmltcG9ydCB7IGhzbCBhcyBoc2xUZXJtcyB9IGZyb20gJy4vc2V0dGluZ3MvZGljdGlvbmFyeSc7XG5pbXBvcnQgeyBjcmVhdGVEZWxpbWl0ZWQsIGNyZWF0ZUZ1bmN0aW9uU3RyaW5nLCBnZXRDb2xvclZhbHVlcyB9IGZyb20gJy4uL2luYy91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgSHVlOiB7XG4gICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICBtYXg6IDM2MFxuICAgICAgICB9LFxuICAgICAgICBTYXR1cmF0aW9uOiBwZXJjZW50LFxuICAgICAgICBMaWdodG5lc3M6IHBlcmNlbnQsXG4gICAgICAgIEFscGhhOiBvcGFjaXR5XG4gICAgfSxcblxuICAgIHRlc3Q6ICh2YWx1ZSkgPT4gKHZhbHVlICYmIHZhbHVlLmluZGV4T2YoJ2hzbCcpID4gLTEpLFxuXG4gICAgc3BsaXQ6ICh2YWx1ZSkgPT4gZ2V0Q29sb3JWYWx1ZXModmFsdWUsIGhzbFRlcm1zKSxcblxuICAgIGNvbWJpbmU6ICh2YWx1ZXMpID0+IGNyZWF0ZUZ1bmN0aW9uU3RyaW5nKGNyZWF0ZURlbGltaXRlZCh2YWx1ZXMsIGhzbFRlcm1zLCAnLCAnLCAyKSwgJ2hzbGEnKVxufTtcbiJdfQ==

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _unit = __webpack_require__(32);
	
	var _unit2 = _interopRequireDefault(_unit);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    defaultProps: {
	        unit: 'px',
	        type: _unit2.default
	    }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9weC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7OztrQkFFZTtBQUNYLGtCQUFjO0FBQ1YsY0FBTSxJQUFOO0FBQ0EsNEJBRlU7S0FBZCIsImZpbGUiOiJweC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdW5pdFR5cGUgZnJvbSAnLi91bml0JztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICB1bml0OiAncHgnLFxuICAgICAgICB0eXBlOiB1bml0VHlwZVxuICAgIH1cbn07Il19

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(21);
	
	var _dictionary = __webpack_require__(49);
	
	var _defaultProps = __webpack_require__(48);
	
	exports.default = {
	    defaultProps: {
	        Red: _defaultProps.rgb,
	        Green: _defaultProps.rgb,
	        Blue: _defaultProps.rgb,
	        Alpha: _defaultProps.opacity
	    },
	
	    test: function (value) {
	        return value && value.indexOf('rgb') > -1;
	    },
	
	    split: function (value) {
	        return (0, _utils.getColorValues)(value, _dictionary.rgb);
	    },
	
	    combine: function (values) {
	        return (0, _utils.createFunctionString)((0, _utils.createDelimited)(values, _dictionary.rgb, ', ', 2), 'rgba');
	    }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9yZ2IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUNBOztBQUNBOztrQkFFZTtBQUNYLGtCQUFjO0FBQ1YsOEJBRFU7QUFFVixnQ0FGVTtBQUdWLCtCQUhVO0FBSVYsb0NBSlU7S0FBZDs7QUFPQSxVQUFNLFVBQUMsS0FBRDtlQUFZLFNBQVMsTUFBTSxPQUFOLENBQWMsS0FBZCxJQUF1QixDQUFDLENBQUQ7S0FBNUM7O0FBRU4sV0FBTyxVQUFDLEtBQUQ7ZUFBVywyQkFBZSxLQUFmO0tBQVg7O0FBRVAsYUFBUyxVQUFDLE1BQUQ7ZUFBWSxpQ0FBcUIsNEJBQWdCLE1BQWhCLG1CQUFrQyxJQUFsQyxFQUF3QyxDQUF4QyxDQUFyQixFQUFpRSxNQUFqRTtLQUFaIiwiZmlsZSI6InJnYi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVEZWxpbWl0ZWQsIGNyZWF0ZUZ1bmN0aW9uU3RyaW5nLCBnZXRDb2xvclZhbHVlcyB9IGZyb20gJy4uL2luYy91dGlscyc7XG5pbXBvcnQgeyByZ2IgYXMgcmdiVGVybXMgfSBmcm9tICcuL3NldHRpbmdzL2RpY3Rpb25hcnknO1xuaW1wb3J0IHsgcmdiIGFzIGRlZmF1bHRSR0IsIG9wYWNpdHkgYXMgZGVmYXVsdE9wYWNpdHkgfSBmcm9tICcuL3NldHRpbmdzL2RlZmF1bHQtcHJvcHMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIFJlZDogZGVmYXVsdFJHQixcbiAgICAgICAgR3JlZW46IGRlZmF1bHRSR0IsXG4gICAgICAgIEJsdWU6IGRlZmF1bHRSR0IsXG4gICAgICAgIEFscGhhOiBkZWZhdWx0T3BhY2l0eVxuICAgIH0sXG5cbiAgICB0ZXN0OiAodmFsdWUpID0+ICh2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mKCdyZ2InKSA+IC0xKSxcblxuICAgIHNwbGl0OiAodmFsdWUpID0+IGdldENvbG9yVmFsdWVzKHZhbHVlLCByZ2JUZXJtcyksXG5cbiAgICBjb21iaW5lOiAodmFsdWVzKSA9PiBjcmVhdGVGdW5jdGlvblN0cmluZyhjcmVhdGVEZWxpbWl0ZWQodmFsdWVzLCByZ2JUZXJtcywgJywgJywgMiksICdyZ2JhJylcbn07Il19

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = {
	    defaultProps: {
	        current: 1
	    }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9zY2FsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7a0JBQWU7QUFDWCxrQkFBYztBQUNWLGlCQUFTLENBQVQ7S0FESiIsImZpbGUiOiJzY2FsZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIGN1cnJlbnQ6IDFcbiAgICB9XG59OyJdfQ==

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _color = __webpack_require__(24);
	
	var _color2 = _interopRequireDefault(_color);
	
	var _px = __webpack_require__(28);
	
	var _dictionary = __webpack_require__(49);
	
	var _utils = __webpack_require__(21);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var shadowWithoutColorTerms = _dictionary.shadow.slice(0, 4);
	
	exports.default = {
	    defaultProps: _extends({}, _color2.default.defaultProps, {
	        X: _px.defaultProps,
	        Y: _px.defaultProps,
	        Radius: _px.defaultProps,
	        Spread: _px.defaultProps
	    }),
	
	    split: function (value) {
	        var bits = (0, _utils.splitSpaceDelimited)(value);
	        var hasReachedColor = false;
	        var colorProp = '';
	        var splitValue = {};
	
	        bits.forEach(function (bit, i) {
	            // If we've reached the color props, append to color string
	            if (hasReachedColor || _color2.default.test(bit)) {
	                hasReachedColor = true;
	                colorProp += bit;
	
	                // Else process shadow value
	            } else {
	                    splitValue[_dictionary.shadow[i]] = bit;
	                }
	        });
	
	        var splitColorProps = _color2.default.split(colorProp);
	
	        return _extends({}, splitValue, { splitColorProps: splitColorProps });
	    },
	
	    combine: function (values) {
	        return (0, _utils.createDelimited)(values, shadowWithoutColorTerms, ' ') + _color2.default.combine(values);
	    }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9zaGFkb3cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBLElBQU0sMEJBQTBCLG1CQUFZLEtBQVosQ0FBa0IsQ0FBbEIsRUFBcUIsQ0FBckIsQ0FBMUI7O2tCQUVTO0FBQ1gsK0JBQ08sZ0JBQU0sWUFBTjtBQUNIO0FBQ0E7QUFDQTtBQUNBO01BTEo7O0FBUUEsV0FBTyxVQUFDLEtBQUQsRUFBVztBQUNkLFlBQU0sT0FBTyxnQ0FBb0IsS0FBcEIsQ0FBUCxDQURRO0FBRWQsWUFBSSxrQkFBa0IsS0FBbEIsQ0FGVTtBQUdkLFlBQUksWUFBWSxFQUFaLENBSFU7QUFJZCxZQUFJLGFBQWEsRUFBYixDQUpVOztBQU1kLGFBQUssT0FBTCxDQUFhLFVBQUMsR0FBRCxFQUFNLENBQU4sRUFBWTs7QUFFckIsZ0JBQUksbUJBQW1CLGdCQUFNLElBQU4sQ0FBVyxHQUFYLENBQW5CLEVBQW9DO0FBQ3BDLGtDQUFrQixJQUFsQixDQURvQztBQUVwQyw2QkFBYSxHQUFiOzs7QUFGb0MsYUFBeEMsTUFLTztBQUNILCtCQUFXLG1CQUFZLENBQVosQ0FBWCxJQUE2QixHQUE3QixDQURHO2lCQUxQO1NBRlMsQ0FBYixDQU5jOztBQWtCZCxZQUFNLGtCQUFrQixnQkFBTSxLQUFOLENBQVksU0FBWixDQUFsQixDQWxCUTs7QUFvQmQsNEJBQVksY0FBWSxtQ0FBeEIsQ0FwQmM7S0FBWDs7QUF1QlAsYUFBUyxVQUFDLE1BQUQ7ZUFBWSw0QkFBZ0IsTUFBaEIsRUFBd0IsdUJBQXhCLEVBQWlELEdBQWpELElBQXdELGdCQUFNLE9BQU4sQ0FBYyxNQUFkLENBQXhEO0tBQVoiLCJmaWxlIjoic2hhZG93LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb2xvciBmcm9tICcuL2NvbG9yJztcbmltcG9ydCB7IGRlZmF1bHRQcm9wcyBhcyBweERlZmF1bHRQcm9wcyB9IGZyb20gJy4vcHgnO1xuaW1wb3J0IHsgc2hhZG93IGFzIHNoYWRvd1Rlcm1zIH0gZnJvbSAnLi9zZXR0aW5ncy9kaWN0aW9uYXJ5JztcbmltcG9ydCB7IHNwbGl0U3BhY2VEZWxpbWl0ZWQsIGNyZWF0ZURlbGltaXRlZCB9IGZyb20gJy4uL2luYy91dGlscyc7XG5cbmNvbnN0IHNoYWRvd1dpdGhvdXRDb2xvclRlcm1zID0gc2hhZG93VGVybXMuc2xpY2UoMCwgNCk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgLi4uY29sb3IuZGVmYXVsdFByb3BzLFxuICAgICAgICBYOiBweERlZmF1bHRQcm9wcyxcbiAgICAgICAgWTogcHhEZWZhdWx0UHJvcHMsXG4gICAgICAgIFJhZGl1czogcHhEZWZhdWx0UHJvcHMsXG4gICAgICAgIFNwcmVhZDogcHhEZWZhdWx0UHJvcHNcbiAgICB9LFxuXG4gICAgc3BsaXQ6ICh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBiaXRzID0gc3BsaXRTcGFjZURlbGltaXRlZCh2YWx1ZSk7XG4gICAgICAgIGxldCBoYXNSZWFjaGVkQ29sb3IgPSBmYWxzZTtcbiAgICAgICAgbGV0IGNvbG9yUHJvcCA9ICcnO1xuICAgICAgICBsZXQgc3BsaXRWYWx1ZSA9IHt9O1xuXG4gICAgICAgIGJpdHMuZm9yRWFjaCgoYml0LCBpKSA9PiB7XG4gICAgICAgICAgICAvLyBJZiB3ZSd2ZSByZWFjaGVkIHRoZSBjb2xvciBwcm9wcywgYXBwZW5kIHRvIGNvbG9yIHN0cmluZ1xuICAgICAgICAgICAgaWYgKGhhc1JlYWNoZWRDb2xvciB8fCBjb2xvci50ZXN0KGJpdCkpIHtcbiAgICAgICAgICAgICAgICBoYXNSZWFjaGVkQ29sb3IgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNvbG9yUHJvcCArPSBiaXQ7XG5cbiAgICAgICAgICAgIC8vIEVsc2UgcHJvY2VzcyBzaGFkb3cgdmFsdWVcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3BsaXRWYWx1ZVtzaGFkb3dUZXJtc1tpXV0gPSBiaXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHNwbGl0Q29sb3JQcm9wcyA9IGNvbG9yLnNwbGl0KGNvbG9yUHJvcCk7XG5cbiAgICAgICAgcmV0dXJuIHsgLi4uc3BsaXRWYWx1ZSwgc3BsaXRDb2xvclByb3BzIH07XG4gICAgfSxcblxuICAgIGNvbWJpbmU6ICh2YWx1ZXMpID0+IGNyZWF0ZURlbGltaXRlZCh2YWx1ZXMsIHNoYWRvd1dpdGhvdXRDb2xvclRlcm1zLCAnICcpICsgY29sb3IuY29tYmluZSh2YWx1ZXMpXG59O1xuIl19

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(21);
	
	exports.default = {
	    test: function (unparsed) {
	        var _findValueAndUnit = (0, _utils.findValueAndUnit)(unparsed);
	
	        var value = _findValueAndUnit.value;
	
	        return (0, _utils.isNum)(value) && !isNaN(value) ? true : false;
	    },
	
	    parse: function (unparsed, parent) {
	        var _findValueAndUnit2 = (0, _utils.findValueAndUnit)(unparsed);
	
	        var value = _findValueAndUnit2.value;
	        var unit = _findValueAndUnit2.unit;
	
	
	        if (unit && unit !== unit) {
	            parent.unit = unit;
	        }
	
	        return value;
	    },
	
	    serialize: function (parsed, parent) {
	        return parsed + (parent.unit || '');
	    }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy91bml0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7a0JBRWU7QUFDWCxVQUFNLFVBQVUsUUFBVixFQUFvQjtnQ0FDSiw2QkFBaUIsUUFBakIsRUFESTs7WUFDZCxnQ0FEYzs7QUFFdEIsZUFBTyxpQkFBQyxDQUFNLEtBQU4sS0FBZ0IsQ0FBQyxNQUFNLEtBQU4sQ0FBRCxHQUFpQixJQUFsQyxHQUF5QyxLQUF6QyxDQUZlO0tBQXBCOztBQUtOLFdBQU8sVUFBVSxRQUFWLEVBQW9CLE1BQXBCLEVBQTRCO2lDQUNQLDZCQUFpQixRQUFqQixFQURPOztZQUN2QixpQ0FEdUI7WUFDaEIsK0JBRGdCOzs7QUFHL0IsWUFBSSxRQUFRLFNBQVMsSUFBVCxFQUFlO0FBQ3ZCLG1CQUFPLElBQVAsR0FBYyxJQUFkLENBRHVCO1NBQTNCOztBQUlBLGVBQU8sS0FBUCxDQVArQjtLQUE1Qjs7QUFVUCxlQUFXLFVBQUMsTUFBRCxFQUFTLE1BQVQ7ZUFBb0IsVUFBVSxPQUFPLElBQVAsSUFBZSxFQUFmLENBQVY7S0FBcEIiLCJmaWxlIjoidW5pdC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc051bSwgZmluZFZhbHVlQW5kVW5pdCB9IGZyb20gJy4uL2luYy91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICB0ZXN0OiBmdW5jdGlvbiAodW5wYXJzZWQpIHtcbiAgICAgICAgY29uc3QgeyB2YWx1ZSB9ID0gZmluZFZhbHVlQW5kVW5pdCh1bnBhcnNlZCk7XG4gICAgICAgIHJldHVybiAoaXNOdW0odmFsdWUpICYmICFpc05hTih2YWx1ZSkpID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH0sXG5cbiAgICBwYXJzZTogZnVuY3Rpb24gKHVucGFyc2VkLCBwYXJlbnQpIHtcbiAgICAgICAgY29uc3QgeyB2YWx1ZSwgdW5pdCB9ID0gZmluZFZhbHVlQW5kVW5pdCh1bnBhcnNlZCk7XG5cbiAgICAgICAgaWYgKHVuaXQgJiYgdW5pdCAhPT0gdW5pdCkge1xuICAgICAgICAgICAgcGFyZW50LnVuaXQgPSB1bml0O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sXG5cbiAgICBzZXJpYWxpemU6IChwYXJzZWQsIHBhcmVudCkgPT4gcGFyc2VkICsgKHBhcmVudC51bml0IHx8ICcnKVxufTtcbiJdfQ==

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.chain = exports.circularMotion = exports.createMapper = undefined;
	
	var _calc = __webpack_require__(20);
	
	var createMapper = exports.createMapper = function (input, output) {
	    var mapLength = input.length;
	    var finalIndex = mapLength - 1;
	
	    return function (value) {
	        // If value outside minimum input range, quickly return
	        if (value <= input[0]) {
	            return output[0];
	        }
	
	        // If value outside maximum input range, quickly return
	        if (value >= input[finalIndex]) {
	            return output[finalIndex];
	        }
	
	        // If within overall input range, find specific range
	        for (var i = 1; i < mapLength; i++) {
	            if (value < input[i] || i === finalIndex) {
	                var progressInRange = (0, _calc.getProgressFromValue)(value, input[i - 1], input[i]);
	                return (0, _calc.getValueFromProgress)(progressInRange, output[i - 1], output[i]);
	            }
	        }
	    };
	};
	
	var circularMotion = exports.circularMotion = function (v, key, _ref) {
	    var values = _ref.values;
	
	    var originX = values.originX ? values.originX.current : 0;
	    var originY = values.originY ? values.originY.current : 0;
	
	    return (0, _calc.pointFromAngleAndDistance)({
	        x: originX,
	        y: originY
	    }, values.angle.current, values.distance.current)[key];
	};
	
	/*
	    Combine transformers into one function that calls every
	    transformer in the array and returns the result
	
	    @param [array]
	    @return [function]
	*/
	var chain = exports.chain = function (transformers) {
	    var numTransformers = transformers.length;
	    var i = 0;
	
	    /*
	        @param [number]
	        @param [string]
	        @param [Action]
	        @return [number]
	    */
	    return function (v, key, a) {
	        for (i = 0; i < numTransformers; i++) {
	            v = transformers[i](v, key, a);
	        }
	
	        return v;
	    };
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvdHJhbnNmb3JtZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRU8sSUFBTSxzQ0FBZSxVQUFDLEtBQUQsRUFBUSxNQUFSLEVBQW1CO0FBQzNDLFFBQU0sWUFBWSxNQUFNLE1BQU4sQ0FEeUI7QUFFM0MsUUFBTSxhQUFhLFlBQVksQ0FBWixDQUZ3Qjs7QUFJM0MsV0FBTyxVQUFDLEtBQUQsRUFBVzs7QUFFZCxZQUFJLFNBQVMsTUFBTSxDQUFOLENBQVQsRUFBbUI7QUFDbkIsbUJBQU8sT0FBTyxDQUFQLENBQVAsQ0FEbUI7U0FBdkI7OztBQUZjLFlBT1YsU0FBUyxNQUFNLFVBQU4sQ0FBVCxFQUE0QjtBQUM1QixtQkFBTyxPQUFPLFVBQVAsQ0FBUCxDQUQ0QjtTQUFoQzs7O0FBUGMsYUFZVCxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksU0FBSixFQUFlLEdBQS9CLEVBQW9DO0FBQ2hDLGdCQUFJLFFBQVEsTUFBTSxDQUFOLENBQVIsSUFBb0IsTUFBTSxVQUFOLEVBQWtCO0FBQ3RDLG9CQUFNLGtCQUFrQixnQ0FBcUIsS0FBckIsRUFBNEIsTUFBTSxJQUFJLENBQUosQ0FBbEMsRUFBMEMsTUFBTSxDQUFOLENBQTFDLENBQWxCLENBRGdDO0FBRXRDLHVCQUFPLGdDQUFxQixlQUFyQixFQUFzQyxPQUFPLElBQUksQ0FBSixDQUE3QyxFQUFxRCxPQUFPLENBQVAsQ0FBckQsQ0FBUCxDQUZzQzthQUExQztTQURKO0tBWkcsQ0FKb0M7Q0FBbkI7O0FBeUJyQixJQUFNLDBDQUFpQixVQUFDLENBQUQsRUFBSSxHQUFKLFFBQXdCO1FBQWIscUJBQWE7O0FBQ2xELFFBQU0sVUFBVSxNQUFDLENBQU8sT0FBUCxHQUFrQixPQUFPLE9BQVAsQ0FBZSxPQUFmLEdBQXlCLENBQTVDLENBRGtDO0FBRWxELFFBQU0sVUFBVSxNQUFDLENBQU8sT0FBUCxHQUFrQixPQUFPLE9BQVAsQ0FBZSxPQUFmLEdBQXlCLENBQTVDLENBRmtDOztBQUlsRCxXQUFPLHFDQUEwQjtBQUM3QixXQUFHLE9BQUg7QUFDQSxXQUFHLE9BQUg7S0FGRyxFQUdKLE9BQU8sS0FBUCxDQUFhLE9BQWIsRUFBc0IsT0FBTyxRQUFQLENBQWdCLE9BQWhCLENBSGxCLENBRzJDLEdBSDNDLENBQVAsQ0FKa0Q7Q0FBeEI7Ozs7Ozs7OztBQWlCdkIsSUFBTSx3QkFBUSxVQUFDLFlBQUQsRUFBa0I7QUFDbkMsUUFBTSxrQkFBa0IsYUFBYSxNQUFiLENBRFc7QUFFbkMsUUFBSSxJQUFJLENBQUo7Ozs7Ozs7O0FBRitCLFdBVTVCLFVBQUMsQ0FBRCxFQUFJLEdBQUosRUFBUyxDQUFULEVBQWU7QUFDbEIsYUFBSyxJQUFJLENBQUosRUFBTyxJQUFJLGVBQUosRUFBcUIsR0FBakMsRUFBc0M7QUFDbEMsZ0JBQUksYUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLEdBQW5CLEVBQXdCLENBQXhCLENBQUosQ0FEa0M7U0FBdEM7O0FBSUEsZUFBTyxDQUFQLENBTGtCO0tBQWYsQ0FWNEI7Q0FBbEIiLCJmaWxlIjoidHJhbnNmb3JtZXJzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFByb2dyZXNzRnJvbVZhbHVlLCBnZXRWYWx1ZUZyb21Qcm9ncmVzcywgcG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZSB9IGZyb20gJy4uL2luYy9jYWxjJztcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZU1hcHBlciA9IChpbnB1dCwgb3V0cHV0KSA9PiB7XG4gICAgY29uc3QgbWFwTGVuZ3RoID0gaW5wdXQubGVuZ3RoO1xuICAgIGNvbnN0IGZpbmFsSW5kZXggPSBtYXBMZW5ndGggLSAxO1xuXG4gICAgcmV0dXJuICh2YWx1ZSkgPT4ge1xuICAgICAgICAvLyBJZiB2YWx1ZSBvdXRzaWRlIG1pbmltdW0gaW5wdXQgcmFuZ2UsIHF1aWNrbHkgcmV0dXJuXG4gICAgICAgIGlmICh2YWx1ZSA8PSBpbnB1dFswXSkge1xuICAgICAgICAgICAgcmV0dXJuIG91dHB1dFswXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHZhbHVlIG91dHNpZGUgbWF4aW11bSBpbnB1dCByYW5nZSwgcXVpY2tseSByZXR1cm5cbiAgICAgICAgaWYgKHZhbHVlID49IGlucHV0W2ZpbmFsSW5kZXhdKSB7XG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0W2ZpbmFsSW5kZXhdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgd2l0aGluIG92ZXJhbGwgaW5wdXQgcmFuZ2UsIGZpbmQgc3BlY2lmaWMgcmFuZ2VcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBtYXBMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHZhbHVlIDwgaW5wdXRbaV0gfHwgaSA9PT0gZmluYWxJbmRleCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2dyZXNzSW5SYW5nZSA9IGdldFByb2dyZXNzRnJvbVZhbHVlKHZhbHVlLCBpbnB1dFtpIC0gMV0sIGlucHV0W2ldKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MocHJvZ3Jlc3NJblJhbmdlLCBvdXRwdXRbaSAtIDFdLCBvdXRwdXRbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBjaXJjdWxhck1vdGlvbiA9ICh2LCBrZXksIHsgdmFsdWVzIH0pID0+IHtcbiAgICBjb25zdCBvcmlnaW5YID0gKHZhbHVlcy5vcmlnaW5YKSA/IHZhbHVlcy5vcmlnaW5YLmN1cnJlbnQgOiAwO1xuICAgIGNvbnN0IG9yaWdpblkgPSAodmFsdWVzLm9yaWdpblkpID8gdmFsdWVzLm9yaWdpblkuY3VycmVudCA6IDA7XG5cbiAgICByZXR1cm4gcG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZSh7XG4gICAgICAgIHg6IG9yaWdpblgsXG4gICAgICAgIHk6IG9yaWdpblkgXG4gICAgfSwgdmFsdWVzLmFuZ2xlLmN1cnJlbnQsIHZhbHVlcy5kaXN0YW5jZS5jdXJyZW50KVtrZXldO1xufTtcblxuLypcbiAgICBDb21iaW5lIHRyYW5zZm9ybWVycyBpbnRvIG9uZSBmdW5jdGlvbiB0aGF0IGNhbGxzIGV2ZXJ5XG4gICAgdHJhbnNmb3JtZXIgaW4gdGhlIGFycmF5IGFuZCByZXR1cm5zIHRoZSByZXN1bHRcblxuICAgIEBwYXJhbSBbYXJyYXldXG4gICAgQHJldHVybiBbZnVuY3Rpb25dXG4qL1xuZXhwb3J0IGNvbnN0IGNoYWluID0gKHRyYW5zZm9ybWVycykgPT4ge1xuICAgIGNvbnN0IG51bVRyYW5zZm9ybWVycyA9IHRyYW5zZm9ybWVycy5sZW5ndGg7XG4gICAgbGV0IGkgPSAwO1xuXG4gICAgLypcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgICAgICBAcGFyYW0gW0FjdGlvbl1cbiAgICAgICAgQHJldHVybiBbbnVtYmVyXVxuICAgICovXG4gICAgcmV0dXJuICh2LCBrZXksIGEpID0+IHtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG51bVRyYW5zZm9ybWVyczsgaSsrKSB7XG4gICAgICAgICAgICB2ID0gdHJhbnNmb3JtZXJzW2ldKHYsIGtleSwgYSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdjtcbiAgICB9O1xufTsiXX0=

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _color = __webpack_require__(24);
	
	var _color2 = _interopRequireDefault(_color);
	
	var _complex = __webpack_require__(25);
	
	var _complex2 = _interopRequireDefault(_complex);
	
	var _unit = __webpack_require__(32);
	
	var _unit2 = _interopRequireDefault(_unit);
	
	var _utils = __webpack_require__(21);
	
	var _numericalValues = __webpack_require__(35);
	
	var _numericalValues2 = _interopRequireDefault(_numericalValues);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var NUM_NUMERICAL_VALUES = _numericalValues2.default.length;
	
	exports.default = function (value) {
	    for (var i = 0; i < NUM_NUMERICAL_VALUES; i++) {
	        var valueProp = value[_numericalValues2.default[i]];
	        if ((0, _utils.isString)(valueProp)) {
	            if (_color2.default.test(valueProp)) {
	                return _color2.default;
	            } else if (_complex2.default.test(valueProp)) {
	                return _complex2.default;
	            } else if (_unit2.default.test(valueProp)) {
	                return _unit2.default;
	            }
	        }
	    }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9kZXRlY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7QUFFQSxJQUFNLHVCQUF1QiwwQkFBaUIsTUFBakI7O2tCQUVkLFVBQUMsS0FBRCxFQUFXO0FBQ3RCLFNBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLG9CQUFKLEVBQTBCLEdBQTFDLEVBQStDO0FBQzNDLFlBQU0sWUFBWSxNQUFNLDBCQUFpQixDQUFqQixDQUFOLENBQVosQ0FEcUM7QUFFM0MsWUFBSSxxQkFBUyxTQUFULENBQUosRUFBeUI7QUFDckIsZ0JBQUksZ0JBQVUsSUFBVixDQUFlLFNBQWYsQ0FBSixFQUErQjtBQUMzQix1Q0FEMkI7YUFBL0IsTUFFTyxJQUFJLGtCQUFZLElBQVosQ0FBaUIsU0FBakIsQ0FBSixFQUFpQztBQUNwQyx5Q0FEb0M7YUFBakMsTUFFQSxJQUFJLGVBQVMsSUFBVCxDQUFjLFNBQWQsQ0FBSixFQUE4QjtBQUNqQyxzQ0FEaUM7YUFBOUI7U0FMWDtLQUZKO0NBRFciLCJmaWxlIjoiZGV0ZWN0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb2xvclR5cGUgZnJvbSAnLi4vdmFsdWUtdHlwZXMvY29sb3InO1xuaW1wb3J0IGNvbXBsZXhUeXBlIGZyb20gJy4uL3ZhbHVlLXR5cGVzL2NvbXBsZXgnO1xuaW1wb3J0IHVuaXRUeXBlIGZyb20gJy4uL3ZhbHVlLXR5cGVzL3VuaXQnO1xuaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuaW1wb3J0IE5VTUVSSUNBTF9WQUxVRVMgZnJvbSAnLi4vaW5jL251bWVyaWNhbC12YWx1ZXMnO1xuXG5jb25zdCBOVU1fTlVNRVJJQ0FMX1ZBTFVFUyA9IE5VTUVSSUNBTF9WQUxVRVMubGVuZ3RoO1xuXG5leHBvcnQgZGVmYXVsdCAodmFsdWUpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IE5VTV9OVU1FUklDQUxfVkFMVUVTOyBpKyspIHtcbiAgICAgICAgY29uc3QgdmFsdWVQcm9wID0gdmFsdWVbTlVNRVJJQ0FMX1ZBTFVFU1tpXV07XG4gICAgICAgIGlmIChpc1N0cmluZyh2YWx1ZVByb3ApKSB7XG4gICAgICAgICAgICBpZiAoY29sb3JUeXBlLnRlc3QodmFsdWVQcm9wKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb2xvclR5cGU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvbXBsZXhUeXBlLnRlc3QodmFsdWVQcm9wKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb21wbGV4VHlwZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodW5pdFR5cGUudGVzdCh2YWx1ZVByb3ApKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuaXRUeXBlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTsiXX0=

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = ['current', 'from', 'to', 'velocity'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvbnVtZXJpY2FsLXZhbHVlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7a0JBQWUsQ0FBQyxTQUFELEVBQVksTUFBWixFQUFvQixJQUFwQixFQUEwQixVQUExQiIsImZpbGUiOiJudW1lcmljYWwtdmFsdWVzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFsnY3VycmVudCcsICdmcm9tJywgJ3RvJywgJ3ZlbG9jaXR5J107Il19

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _objectAdapter = __webpack_require__(15);
	
	var _objectAdapter2 = _interopRequireDefault(_objectAdapter);
	
	var _cssAdapter = __webpack_require__(14);
	
	var _cssAdapter2 = _interopRequireDefault(_cssAdapter);
	
	var _svgAdapter = __webpack_require__(16);
	
	var _svgAdapter2 = _interopRequireDefault(_svgAdapter);
	
	var _svgPathAdapter = __webpack_require__(17);
	
	var _svgPathAdapter2 = _interopRequireDefault(_svgPathAdapter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (element) {
	    var detectedAdapter = _objectAdapter2.default;
	
	    // If HTMLElement load CSS
	    if (element instanceof HTMLElement || element.tagName === 'svg') {
	        detectedAdapter = _cssAdapter2.default;
	
	        // Or SVG
	    } else if (element instanceof SVGElement) {
	            if (element.tagName === 'path') {
	                detectedAdapter = _svgPathAdapter2.default;
	            } else {
	                detectedAdapter = _svgAdapter2.default;
	            }
	        }
	
	    return detectedAdapter;
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvZGV0ZWN0LWFkYXB0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7a0JBRWUsVUFBQyxPQUFELEVBQWE7QUFDeEIsUUFBSSx5Q0FBSjs7O0FBRHdCLFFBSXBCLG1CQUFtQixXQUFuQixJQUFrQyxRQUFRLE9BQVIsS0FBb0IsS0FBcEIsRUFBMkI7QUFDN0Q7OztBQUQ2RCxLQUFqRSxNQUlPLElBQUksbUJBQW1CLFVBQW5CLEVBQStCO0FBQ3RDLGdCQUFJLFFBQVEsT0FBUixLQUFvQixNQUFwQixFQUE0QjtBQUM1QiwyREFENEI7YUFBaEMsTUFFTztBQUNILHVEQURHO2FBRlA7U0FERzs7QUFRUCxXQUFPLGVBQVAsQ0FoQndCO0NBQWIiLCJmaWxlIjoiZGV0ZWN0LWFkYXB0ZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG9iamVjdEFkYXB0ZXIgZnJvbSAnLi4vYWRhcHRlci9vYmplY3QtYWRhcHRlcic7XG5pbXBvcnQgY3NzQWRhcHRlciBmcm9tICcuLi9hZGFwdGVyL2Nzcy1hZGFwdGVyJztcbmltcG9ydCBzdmdBZGFwdGVyIGZyb20gJy4uL2FkYXB0ZXIvc3ZnLWFkYXB0ZXInO1xuaW1wb3J0IHN2Z1BhdGhBZGFwdGVyIGZyb20gJy4uL2FkYXB0ZXIvc3ZnLXBhdGgtYWRhcHRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IChlbGVtZW50KSA9PiB7XG4gICAgbGV0IGRldGVjdGVkQWRhcHRlciA9IG9iamVjdEFkYXB0ZXI7XG5cbiAgICAvLyBJZiBIVE1MRWxlbWVudCBsb2FkIENTU1xuICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgZWxlbWVudC50YWdOYW1lID09PSAnc3ZnJykge1xuICAgICAgICBkZXRlY3RlZEFkYXB0ZXIgPSBjc3NBZGFwdGVyO1xuXG4gICAgLy8gT3IgU1ZHXG4gICAgfSBlbHNlIGlmIChlbGVtZW50IGluc3RhbmNlb2YgU1ZHRWxlbWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudC50YWdOYW1lID09PSAncGF0aCcpIHtcbiAgICAgICAgICAgIGRldGVjdGVkQWRhcHRlciA9IHN2Z1BhdGhBZGFwdGVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGV0ZWN0ZWRBZGFwdGVyID0gc3ZnQWRhcHRlcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkZXRlY3RlZEFkYXB0ZXI7XG59O1xuIl19

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _calc = __webpack_require__(20);
	
	var BLEND_ACCURACY = 60;
	
	exports.default = function (outAction, inAction, flowValue, key) {
	    var outValue = outAction.values[key];
	
	    if (outAction.elapsed === undefined || !outValue) {
	        return;
	    }
	
	    var inValue = inAction.values[key];
	    var outTotalDuration = outValue.delay + outValue.duration;
	    var timeUntilOutEnd = Math.min(outTotalDuration - outAction.elapsed, inValue.delay + inValue.duration);
	    var inPositionAtOutEnd = (0, _calc.ease)((0, _calc.restrict)((0, _calc.getProgressFromValue)(timeUntilOutEnd, 0, inValue.delay + inValue.duration), 0, 1), inValue.from, inValue.to, inValue.ease);
	    var inBiggerThanOutAtStart = inValue.from > outValue.current;
	    var inBiggerThanOutAtEnd = inPositionAtOutEnd > outValue.to;
	    var tweensIntersect = inBiggerThanOutAtStart !== inBiggerThanOutAtEnd;
	
	    var blendCurve = [[0, outValue.current], [timeUntilOutEnd, inPositionAtOutEnd]];
	
	    // If tweens intersect, resolve tweens at a resolution to find exactly where
	    if (tweensIntersect) {
	        var timeStepToTest = timeUntilOutEnd / BLEND_ACCURACY;
	        var foundP1 = false;
	        var foundP2 = false;
	
	        for (var i = 0; i <= BLEND_ACCURACY; i++) {
	            var timeStep = i * timeStepToTest;
	            var outAtTime = (0, _calc.ease)((0, _calc.getProgressFromValue)(outAction.elapsed + timeStep, outValue.delay, outValue.duration), outValue.from, outValue.to, outValue.ease);
	            var inAtTime = (0, _calc.ease)((0, _calc.getProgressFromValue)(inAction.elapsed + timeStep, inValue.delay, inValue.duration), inValue.from, inValue.to, inValue.ease);
	
	            if (!foundP1 && (inBiggerThanOutAtStart && inAtTime < outAtTime || !inBiggerThanOutAtStart && inAtTime > outAtTime)) {
	                blendCurve.splice(1, 0, [timeStep, inAtTime]);
	                foundP1 = true;
	            }
	
	            if (foundP1 && (inBiggerThanOutAtStart && inAtTime < outValue.current || !inBiggerThanOutAtStart && inAtTime > outValue.current)) {
	                blendCurve[2] = [timeStep, inAtTime];
	                foundP2 = true;
	            }
	
	            if (foundP2) {
	                break;
	            }
	        }
	    }
	
	    if (blendCurve.length === 2) {
	        // Pass between tweens using incoming easing if just two points
	        return function () {
	            var blendProgress = (0, _calc.restrict)((0, _calc.getProgressFromValue)(inAction.elapsed, blendCurve[0][0], blendCurve[1][0]), 0, 1);
	
	            if (blendProgress === 1) {
	                flowValue.blendCurve = undefined;
	            }
	
	            return (0, _calc.ease)(blendProgress, outValue.current, inValue.current, inValue.ease);
	        };
	    } else {
	        // Pass between tweens using bezier interpolation
	        return function () {
	            var blendProgress = (0, _calc.restrict)((0, _calc.getProgressFromValue)(inAction.elapsed, blendCurve[0][0], blendCurve[2][0]), 0, 1);
	            var aP = (0, _calc.getValueFromProgress)(blendProgress, blendCurve[0][1], blendCurve[1][1]);
	            var bP = (0, _calc.getValueFromProgress)(blendProgress, blendCurve[1][1], blendCurve[2][1]);
	
	            if (blendProgress === 1) {
	                flowValue.blendCurve = undefined;
	                return inValue.current;
	            }
	
	            return (0, _calc.getValueFromProgress)(blendProgress, aP, bP);
	        };
	    }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2Zsb3cvZ2VuZXJhdGUtYmxlbmQtY3VydmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUVBLElBQU0saUJBQWlCLEVBQWpCOztrQkFFUyxVQUFDLFNBQUQsRUFBWSxRQUFaLEVBQXNCLFNBQXRCLEVBQWlDLEdBQWpDLEVBQXlDO0FBQ3BELFFBQU0sV0FBVyxVQUFVLE1BQVYsQ0FBaUIsR0FBakIsQ0FBWCxDQUQ4Qzs7QUFHcEQsUUFBSSxVQUFVLE9BQVYsS0FBc0IsU0FBdEIsSUFBbUMsQ0FBQyxRQUFELEVBQVc7QUFDOUMsZUFEOEM7S0FBbEQ7O0FBSUEsUUFBTSxVQUFVLFNBQVMsTUFBVCxDQUFnQixHQUFoQixDQUFWLENBUDhDO0FBUXBELFFBQU0sbUJBQW1CLFNBQVMsS0FBVCxHQUFpQixTQUFTLFFBQVQsQ0FSVTtBQVNwRCxRQUFNLGtCQUFrQixLQUFLLEdBQUwsQ0FBUyxtQkFBbUIsVUFBVSxPQUFWLEVBQW1CLFFBQVEsS0FBUixHQUFnQixRQUFRLFFBQVIsQ0FBakYsQ0FUOEM7QUFVcEQsUUFBTSxxQkFBcUIsZ0JBQUssb0JBQVMsZ0NBQXFCLGVBQXJCLEVBQXNDLENBQXRDLEVBQXlDLFFBQVEsS0FBUixHQUFnQixRQUFRLFFBQVIsQ0FBbEUsRUFBcUYsQ0FBckYsRUFBd0YsQ0FBeEYsQ0FBTCxFQUFpRyxRQUFRLElBQVIsRUFBYyxRQUFRLEVBQVIsRUFBWSxRQUFRLElBQVIsQ0FBaEosQ0FWOEM7QUFXcEQsUUFBTSx5QkFBeUIsUUFBUSxJQUFSLEdBQWUsU0FBUyxPQUFULENBWE07QUFZcEQsUUFBTSx1QkFBdUIscUJBQXFCLFNBQVMsRUFBVCxDQVpFO0FBYXBELFFBQU0sa0JBQWtCLDJCQUEyQixvQkFBM0IsQ0FiNEI7O0FBZXBELFFBQU0sYUFBYSxDQUFDLENBQUMsQ0FBRCxFQUFJLFNBQVMsT0FBVCxDQUFMLEVBQXdCLENBQUMsZUFBRCxFQUFrQixrQkFBbEIsQ0FBeEIsQ0FBYjs7O0FBZjhD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QUFwQyxFQUF3QyxFQUF4QyxDQUFQLENBVlM7U0FBTixDQUZKO0tBWFA7Q0E1Q1ciLCJmaWxlIjoiZ2VuZXJhdGUtYmxlbmQtY3VydmUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUsIGdldFZhbHVlRnJvbVByb2dyZXNzLCBlYXNlLCByZXN0cmljdCB9IGZyb20gJy4uLy4uL2luYy9jYWxjJztcblxuY29uc3QgQkxFTkRfQUNDVVJBQ1kgPSA2MDtcblxuZXhwb3J0IGRlZmF1bHQgKG91dEFjdGlvbiwgaW5BY3Rpb24sIGZsb3dWYWx1ZSwga2V5KSA9PiB7XG4gICAgY29uc3Qgb3V0VmFsdWUgPSBvdXRBY3Rpb24udmFsdWVzW2tleV07XG5cbiAgICBpZiAob3V0QWN0aW9uLmVsYXBzZWQgPT09IHVuZGVmaW5lZCB8fCAhb3V0VmFsdWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGluVmFsdWUgPSBpbkFjdGlvbi52YWx1ZXNba2V5XTtcbiAgICBjb25zdCBvdXRUb3RhbER1cmF0aW9uID0gb3V0VmFsdWUuZGVsYXkgKyBvdXRWYWx1ZS5kdXJhdGlvbjtcbiAgICBjb25zdCB0aW1lVW50aWxPdXRFbmQgPSBNYXRoLm1pbihvdXRUb3RhbER1cmF0aW9uIC0gb3V0QWN0aW9uLmVsYXBzZWQsIGluVmFsdWUuZGVsYXkgKyBpblZhbHVlLmR1cmF0aW9uKTtcbiAgICBjb25zdCBpblBvc2l0aW9uQXRPdXRFbmQgPSBlYXNlKHJlc3RyaWN0KGdldFByb2dyZXNzRnJvbVZhbHVlKHRpbWVVbnRpbE91dEVuZCwgMCwgaW5WYWx1ZS5kZWxheSArIGluVmFsdWUuZHVyYXRpb24pLCAwLCAxKSwgaW5WYWx1ZS5mcm9tLCBpblZhbHVlLnRvLCBpblZhbHVlLmVhc2UpO1xuICAgIGNvbnN0IGluQmlnZ2VyVGhhbk91dEF0U3RhcnQgPSBpblZhbHVlLmZyb20gPiBvdXRWYWx1ZS5jdXJyZW50O1xuICAgIGNvbnN0IGluQmlnZ2VyVGhhbk91dEF0RW5kID0gaW5Qb3NpdGlvbkF0T3V0RW5kID4gb3V0VmFsdWUudG87XG4gICAgY29uc3QgdHdlZW5zSW50ZXJzZWN0ID0gaW5CaWdnZXJUaGFuT3V0QXRTdGFydCAhPT0gaW5CaWdnZXJUaGFuT3V0QXRFbmQ7XG5cbiAgICBjb25zdCBibGVuZEN1cnZlID0gW1swLCBvdXRWYWx1ZS5jdXJyZW50XSwgW3RpbWVVbnRpbE91dEVuZCwgaW5Qb3NpdGlvbkF0T3V0RW5kXV07XG5cbiAgICAvLyBJZiB0d2VlbnMgaW50ZXJzZWN0LCByZXNvbHZlIHR3ZWVucyBhdCBhIHJlc29sdXRpb24gdG8gZmluZCBleGFjdGx5IHdoZXJlXG4gICAgaWYgKHR3ZWVuc0ludGVyc2VjdCkge1xuICAgICAgICBjb25zdCB0aW1lU3RlcFRvVGVzdCA9IHRpbWVVbnRpbE91dEVuZCAvIEJMRU5EX0FDQ1VSQUNZO1xuICAgICAgICBsZXQgZm91bmRQMSA9IGZhbHNlO1xuICAgICAgICBsZXQgZm91bmRQMiA9IGZhbHNlO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IEJMRU5EX0FDQ1VSQUNZOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVTdGVwID0gaSAqIHRpbWVTdGVwVG9UZXN0O1xuICAgICAgICAgICAgY29uc3Qgb3V0QXRUaW1lID0gZWFzZShnZXRQcm9ncmVzc0Zyb21WYWx1ZShvdXRBY3Rpb24uZWxhcHNlZCArIHRpbWVTdGVwLCBvdXRWYWx1ZS5kZWxheSwgb3V0VmFsdWUuZHVyYXRpb24pLCBvdXRWYWx1ZS5mcm9tLCBvdXRWYWx1ZS50bywgb3V0VmFsdWUuZWFzZSk7XG4gICAgICAgICAgICBjb25zdCBpbkF0VGltZSA9IGVhc2UoZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUoaW5BY3Rpb24uZWxhcHNlZCArIHRpbWVTdGVwLCBpblZhbHVlLmRlbGF5LCBpblZhbHVlLmR1cmF0aW9uKSwgaW5WYWx1ZS5mcm9tLCBpblZhbHVlLnRvLCBpblZhbHVlLmVhc2UpO1xuXG4gICAgICAgICAgICBpZiAoIWZvdW5kUDEgJiYgKChpbkJpZ2dlclRoYW5PdXRBdFN0YXJ0ICYmIGluQXRUaW1lIDwgb3V0QXRUaW1lKSB8fCAoIWluQmlnZ2VyVGhhbk91dEF0U3RhcnQgJiYgaW5BdFRpbWUgPiBvdXRBdFRpbWUpKSkge1xuICAgICAgICAgICAgICAgIGJsZW5kQ3VydmUuc3BsaWNlKDEsIDAsIFt0aW1lU3RlcCwgaW5BdFRpbWVdKTtcbiAgICAgICAgICAgICAgICBmb3VuZFAxID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGZvdW5kUDEgJiYgKChpbkJpZ2dlclRoYW5PdXRBdFN0YXJ0ICYmIGluQXRUaW1lIDwgb3V0VmFsdWUuY3VycmVudCkgfHwgKCFpbkJpZ2dlclRoYW5PdXRBdFN0YXJ0ICYmIGluQXRUaW1lID4gb3V0VmFsdWUuY3VycmVudCkpKSB7XG4gICAgICAgICAgICAgICAgYmxlbmRDdXJ2ZVsyXSA9IFt0aW1lU3RlcCwgaW5BdFRpbWVdO1xuICAgICAgICAgICAgICAgIGZvdW5kUDIgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZm91bmRQMikge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGJsZW5kQ3VydmUubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIC8vIFBhc3MgYmV0d2VlbiB0d2VlbnMgdXNpbmcgaW5jb21pbmcgZWFzaW5nIGlmIGp1c3QgdHdvIHBvaW50c1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYmxlbmRQcm9ncmVzcyA9IHJlc3RyaWN0KGdldFByb2dyZXNzRnJvbVZhbHVlKGluQWN0aW9uLmVsYXBzZWQsIGJsZW5kQ3VydmVbMF1bMF0sIGJsZW5kQ3VydmVbMV1bMF0pLCAwLCAxKTtcblxuICAgICAgICAgICAgaWYgKGJsZW5kUHJvZ3Jlc3MgPT09IDEpIHtcbiAgICAgICAgICAgICAgICBmbG93VmFsdWUuYmxlbmRDdXJ2ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGVhc2UoYmxlbmRQcm9ncmVzcywgb3V0VmFsdWUuY3VycmVudCwgaW5WYWx1ZS5jdXJyZW50LCBpblZhbHVlLmVhc2UpO1xuICAgICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFBhc3MgYmV0d2VlbiB0d2VlbnMgdXNpbmcgYmV6aWVyIGludGVycG9sYXRpb25cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJsZW5kUHJvZ3Jlc3MgPSByZXN0cmljdChnZXRQcm9ncmVzc0Zyb21WYWx1ZShpbkFjdGlvbi5lbGFwc2VkLCBibGVuZEN1cnZlWzBdWzBdLCBibGVuZEN1cnZlWzJdWzBdKSwgMCwgMSk7XG4gICAgICAgICAgICBjb25zdCBhUCA9IGdldFZhbHVlRnJvbVByb2dyZXNzKGJsZW5kUHJvZ3Jlc3MsIGJsZW5kQ3VydmVbMF1bMV0sIGJsZW5kQ3VydmVbMV1bMV0pO1xuICAgICAgICAgICAgY29uc3QgYlAgPSBnZXRWYWx1ZUZyb21Qcm9ncmVzcyhibGVuZFByb2dyZXNzLCBibGVuZEN1cnZlWzFdWzFdLCBibGVuZEN1cnZlWzJdWzFdKTtcblxuICAgICAgICAgICAgaWYgKGJsZW5kUHJvZ3Jlc3MgPT09IDEpIHtcbiAgICAgICAgICAgICAgICBmbG93VmFsdWUuYmxlbmRDdXJ2ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5WYWx1ZS5jdXJyZW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MoYmxlbmRQcm9ncmVzcywgYVAsIGJQKTtcbiAgICAgICAgfTtcbiAgICB9XG59O1xuIl19

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _Input2 = __webpack_require__(9);
	
	var _Input3 = _interopRequireDefault(_Input2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Pointer = function (_Input) {
	    _inherits(Pointer, _Input);
	
	    function Pointer(initialState, moveEvent, eventToPoint) {
	        _classCallCheck(this, Pointer);
	
	        var _this = _possibleConstructorReturn(this, _Input.call(this, initialState));
	
	        _this.eventToPoint = eventToPoint;
	        _this.moveEvent = moveEvent;
	        return _this;
	    }
	
	    Pointer.prototype.latest = function latest(e) {
	        _Input.prototype.latest.call(this, this.eventToPoint(e));
	        e.preventDefault();
	    };
	
	    Pointer.prototype.start = function start() {
	        var _this2 = this;
	
	        _Input.prototype.start.call(this);
	        document.documentElement.addEventListener(this.moveEvent, function (e) {
	            return _this2.latest(e);
	        });
	    };
	
	    Pointer.prototype.stop = function stop() {
	        var _this3 = this;
	
	        _Input.prototype.stop.call(this);
	        document.documentElement.removeEventListener(this.moveEvent, function (e) {
	            return _this3.latest(e);
	        });
	    };
	
	    return Pointer;
	}(_Input3.default);
	
	exports.default = Pointer;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbnB1dC9Qb2ludGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRXFCOzs7QUFDakIsYUFEaUIsT0FDakIsQ0FBWSxZQUFaLEVBQTBCLFNBQTFCLEVBQXFDLFlBQXJDLEVBQW1EOzhCQURsQyxTQUNrQzs7cURBQy9DLGtCQUFNLFlBQU4sR0FEK0M7O0FBRS9DLGNBQUssWUFBTCxHQUFvQixZQUFwQixDQUYrQztBQUcvQyxjQUFLLFNBQUwsR0FBaUIsU0FBakIsQ0FIK0M7O0tBQW5EOztBQURpQixzQkFPakIseUJBQU8sR0FBRztBQUNOLHlCQUFNLE1BQU4sWUFBYSxLQUFLLFlBQUwsQ0FBa0IsQ0FBbEIsQ0FBYixFQURNO0FBRU4sVUFBRSxjQUFGLEdBRk07OztBQVBPLHNCQVlqQix5QkFBUTs7O0FBQ0oseUJBQU0sS0FBTixZQURJO0FBRUosaUJBQVMsZUFBVCxDQUF5QixnQkFBekIsQ0FBMEMsS0FBSyxTQUFMLEVBQWdCLFVBQUMsQ0FBRDttQkFBTyxPQUFLLE1BQUwsQ0FBWSxDQUFaO1NBQVAsQ0FBMUQsQ0FGSTs7O0FBWlMsc0JBaUJqQix1QkFBTzs7O0FBQ0gseUJBQU0sSUFBTixZQURHO0FBRUgsaUJBQVMsZUFBVCxDQUF5QixtQkFBekIsQ0FBNkMsS0FBSyxTQUFMLEVBQWdCLFVBQUMsQ0FBRDttQkFBTyxPQUFLLE1BQUwsQ0FBWSxDQUFaO1NBQVAsQ0FBN0QsQ0FGRzs7O1dBakJVIiwiZmlsZSI6IlBvaW50ZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElucHV0IGZyb20gJy4vSW5wdXQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2ludGVyIGV4dGVuZHMgSW5wdXQge1xuICAgIGNvbnN0cnVjdG9yKGluaXRpYWxTdGF0ZSwgbW92ZUV2ZW50LCBldmVudFRvUG9pbnQpIHtcbiAgICAgICAgc3VwZXIoaW5pdGlhbFN0YXRlKTtcbiAgICAgICAgdGhpcy5ldmVudFRvUG9pbnQgPSBldmVudFRvUG9pbnQ7XG4gICAgICAgIHRoaXMubW92ZUV2ZW50ID0gbW92ZUV2ZW50O1xuICAgIH1cblxuICAgIGxhdGVzdChlKSB7XG4gICAgICAgIHN1cGVyLmxhdGVzdCh0aGlzLmV2ZW50VG9Qb2ludChlKSk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgc3VwZXIuc3RhcnQoKTtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5tb3ZlRXZlbnQsIChlKSA9PiB0aGlzLmxhdGVzdChlKSk7XG4gICAgfVxuXG4gICAgc3RvcCgpIHtcbiAgICAgICAgc3VwZXIuc3RvcCgpO1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLm1vdmVFdmVudCwgKGUpID0+IHRoaXMubGF0ZXN0KGUpKTtcbiAgICB9XG59XG4iXX0=

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.deactivate = exports.getTaskId = undefined;
	exports.activate = activate;
	
	var _timer = __webpack_require__(2);
	
	var _timer2 = _interopRequireDefault(_timer);
	
	var _tick = __webpack_require__(52);
	
	var _tick2 = _interopRequireDefault(_tick);
	
	var _manager = __webpack_require__(53);
	
	var _manager2 = _interopRequireDefault(_manager);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var taskStepOrder = [{ name: 'onFrameStart' }, { name: 'onUpdate' }, { name: 'willRender', decideRender: true }, { name: 'onPreRender', isRender: true }, { name: 'onRender', isRender: true }, { name: 'onPostRender', isRender: true }, { name: 'onFrameEnd' }, { name: 'onCleanup' }]; /*
	                                                                                                                                                                                                                                                                                              Core render loop
	                                                                                                                                                                                                                                                                                          
	                                                                                                                                                                                                                                                                                              Some decicisons here have been taken in the name of performance. All hail performance.
	                                                                                                                                                                                                                                                                                              (It turns out microoptimisations do matter when you have 16ms)
	                                                                                                                                                                                                                                                                                          */
	
	var numTaskSteps = taskStepOrder.length;
	
	// [boolean]: Is loop running?
	var isRunning = false;
	
	/*
	    [timestamp]: Frame timestamp
	    [int]: Time since last frame
	*/
	function fireAll(frameStamp, elapsed) {
	    var activeIds = _manager2.default.getActiveIds();
	    var activeTaskCount = activeIds.length;
	
	    for (var i = 0; i < numTaskSteps; i++) {
	        var step = taskStepOrder[i];
	
	        for (var i2 = 0; i2 < activeTaskCount; i2++) {
	            var task = _manager2.default.activeTasks[activeIds[i2]];
	            var result = false;
	
	            // Check if this task has this step, or if it's a render step that we're rendering this frame
	            if (task && task[step.name] && (!step.isRender || step.isRender && task._renderThisFrame === true)) {
	                result = task[step.name].call(task, task, frameStamp, elapsed);
	            }
	
	            // If this is a decide render step and it returns `false`, set willRender to false
	            if (step.decideRender) {
	                task._renderThisFrame = task[step.name] && result !== true ? false : true;
	            }
	        }
	    }
	
	    return _manager2.default.getNonBackgroundRunningCount();
	}
	
	// Function to fire every frame
	function frame(frameStamp) {
	    _timer2.default.update(frameStamp);
	    isRunning = fireAll(frameStamp, _timer2.default.getElapsed());
	
	    if (isRunning) {
	        (0, _tick2.default)(frame);
	    }
	}
	
	// Start loop
	function start() {
	    if (!isRunning) {
	        _timer2.default.start();
	        isRunning = true;
	        (0, _tick2.default)(frame);
	    }
	}
	
	// Exports
	var getTaskId = exports.getTaskId = _manager2.default.getTaskId;
	
	/*
	    [int]: task ID to activate
	    [task]: task to activate
	*/
	function activate(id, task) {
	    _manager2.default.activate(id, task);
	
	    if (!isRunning) {
	        start();
	    }
	}
	
	/*
	    [int]: task ID to deactivate
	*/
	var deactivate = exports.deactivate = _manager2.default.deactivate;
	//# sourceMappingURL=data:application/json;base64,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dXJjZXNDb250ZW50IjpbIi8qXG4gICAgQ29yZSByZW5kZXIgbG9vcFxuXG4gICAgU29tZSBkZWNpY2lzb25zIGhlcmUgaGF2ZSBiZWVuIHRha2VuIGluIHRoZSBuYW1lIG9mIHBlcmZvcm1hbmNlLiBBbGwgaGFpbCBwZXJmb3JtYW5jZS5cbiAgICAoSXQgdHVybnMgb3V0IG1pY3Jvb3B0aW1pc2F0aW9ucyBkbyBtYXR0ZXIgd2hlbiB5b3UgaGF2ZSAxNm1zKVxuKi9cbmltcG9ydCB0aW1lciBmcm9tICcuL3RpbWVyJztcbmltcG9ydCB0aWNrIGZyb20gJy4vdGljayc7XG5pbXBvcnQgbWFuYWdlciBmcm9tICcuL21hbmFnZXInO1xuXG5jb25zdCB0YXNrU3RlcE9yZGVyID0gW1xuICAgIHsgbmFtZTogJ29uRnJhbWVTdGFydCcgfSxcbiAgICB7IG5hbWU6ICdvblVwZGF0ZScgfSxcbiAgICB7IG5hbWU6ICd3aWxsUmVuZGVyJywgZGVjaWRlUmVuZGVyOiB0cnVlIH0sXG4gICAgeyBuYW1lOiAnb25QcmVSZW5kZXInLCBpc1JlbmRlcjogdHJ1ZSB9LFxuICAgIHsgbmFtZTogJ29uUmVuZGVyJywgaXNSZW5kZXI6IHRydWUgfSxcbiAgICB7IG5hbWU6ICdvblBvc3RSZW5kZXInLCBpc1JlbmRlcjogdHJ1ZSB9LFxuICAgIHsgbmFtZTogJ29uRnJhbWVFbmQnIH0sXG4gICAgeyBuYW1lOiAnb25DbGVhbnVwJyB9XG5dO1xuY29uc3QgbnVtVGFza1N0ZXBzID0gdGFza1N0ZXBPcmRlci5sZW5ndGg7XG5cbi8vIFtib29sZWFuXTogSXMgbG9vcCBydW5uaW5nP1xubGV0IGlzUnVubmluZyA9IGZhbHNlO1xuXG4vKlxuICAgIFt0aW1lc3RhbXBdOiBGcmFtZSB0aW1lc3RhbXBcbiAgICBbaW50XTogVGltZSBzaW5jZSBsYXN0IGZyYW1lXG4qL1xuZnVuY3Rpb24gZmlyZUFsbChmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgY29uc3QgYWN0aXZlSWRzID0gbWFuYWdlci5nZXRBY3RpdmVJZHMoKTtcbiAgICBjb25zdCBhY3RpdmVUYXNrQ291bnQgPSBhY3RpdmVJZHMubGVuZ3RoO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1UYXNrU3RlcHM7IGkrKykge1xuICAgICAgICBjb25zdCBzdGVwID0gdGFza1N0ZXBPcmRlcltpXTtcblxuICAgICAgICBmb3IgKGxldCBpMiA9IDA7IGkyIDwgYWN0aXZlVGFza0NvdW50OyBpMisrKSB7XG4gICAgICAgICAgICBjb25zdCB0YXNrID0gbWFuYWdlci5hY3RpdmVUYXNrc1thY3RpdmVJZHNbaTJdXTtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBmYWxzZTtcblxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhpcyB0YXNrIGhhcyB0aGlzIHN0ZXAsIG9yIGlmIGl0J3MgYSByZW5kZXIgc3RlcCB0aGF0IHdlJ3JlIHJlbmRlcmluZyB0aGlzIGZyYW1lXG4gICAgICAgICAgICBpZiAodGFzayAmJiB0YXNrW3N0ZXAubmFtZV0gJiYgKCFzdGVwLmlzUmVuZGVyIHx8IChzdGVwLmlzUmVuZGVyICYmIHRhc2suX3JlbmRlclRoaXNGcmFtZSA9PT0gdHJ1ZSkpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGFza1tzdGVwLm5hbWVdLmNhbGwodGFzaywgdGFzaywgZnJhbWVTdGFtcCwgZWxhcHNlZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIHRoaXMgaXMgYSBkZWNpZGUgcmVuZGVyIHN0ZXAgYW5kIGl0IHJldHVybnMgYGZhbHNlYCwgc2V0IHdpbGxSZW5kZXIgdG8gZmFsc2VcbiAgICAgICAgICAgIGlmIChzdGVwLmRlY2lkZVJlbmRlcikge1xuICAgICAgICAgICAgICAgIHRhc2suX3JlbmRlclRoaXNGcmFtZSA9ICh0YXNrW3N0ZXAubmFtZV0gJiYgcmVzdWx0ICE9PSB0cnVlKSA/IGZhbHNlIDogdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtYW5hZ2VyLmdldE5vbkJhY2tncm91bmRSdW5uaW5nQ291bnQoKTtcbn1cblxuLy8gRnVuY3Rpb24gdG8gZmlyZSBldmVyeSBmcmFtZVxuZnVuY3Rpb24gZnJhbWUoZnJhbWVTdGFtcCkge1xuICAgIHRpbWVyLnVwZGF0ZShmcmFtZVN0YW1wKTtcbiAgICBpc1J1bm5pbmcgPSBmaXJlQWxsKGZyYW1lU3RhbXAsIHRpbWVyLmdldEVsYXBzZWQoKSk7XG5cbiAgICBpZiAoaXNSdW5uaW5nKSB7XG4gICAgICAgIHRpY2soZnJhbWUpO1xuICAgIH1cbn1cblxuLy8gU3RhcnQgbG9vcFxuZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgaWYgKCFpc1J1bm5pbmcpIHtcbiAgICAgICAgdGltZXIuc3RhcnQoKTtcbiAgICAgICAgaXNSdW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgdGljayhmcmFtZSk7XG4gICAgfVxufVxuXG4vLyBFeHBvcnRzXG5leHBvcnQgY29uc3QgZ2V0VGFza0lkID0gbWFuYWdlci5nZXRUYXNrSWQ7XG5cbi8qXG4gICAgW2ludF06IHRhc2sgSUQgdG8gYWN0aXZhdGVcbiAgICBbdGFza106IHRhc2sgdG8gYWN0aXZhdGVcbiovXG5leHBvcnQgZnVuY3Rpb24gYWN0aXZhdGUoaWQsIHRhc2spIHtcbiAgICBtYW5hZ2VyLmFjdGl2YXRlKGlkLCB0YXNrKTtcblxuICAgIGlmICghaXNSdW5uaW5nKSB7XG4gICAgICAgIHN0YXJ0KCk7XG4gICAgfVxufVxuXG4vKlxuICAgIFtpbnRdOiB0YXNrIElEIHRvIGRlYWN0aXZhdGVcbiovXG5leHBvcnQgY29uc3QgZGVhY3RpdmF0ZSA9IG1hbmFnZXIuZGVhY3RpdmF0ZTsiXX0=

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	var TRANSLATE = 'translate';
	
	exports.default = {
	    x: TRANSLATE + 'X',
	    y: TRANSLATE + 'Y',
	    z: TRANSLATE + 'Z'
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2Nzcy9zdGF0ZS1tYXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsSUFBTSxZQUFZLFdBQVo7O2tCQUVTO0FBQ1gsT0FBRyxZQUFZLEdBQVo7QUFDSCxPQUFHLFlBQVksR0FBWjtBQUNILE9BQUcsWUFBWSxHQUFaIiwiZmlsZSI6InN0YXRlLW1hcC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBUUkFOU0xBVEUgPSAndHJhbnNsYXRlJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHg6IFRSQU5TTEFURSArICdYJyxcbiAgICB5OiBUUkFOU0xBVEUgKyAnWScsXG4gICAgejogVFJBTlNMQVRFICsgJ1onXG59OyJdfQ==

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _angle = __webpack_require__(23);
	
	var _angle2 = _interopRequireDefault(_angle);
	
	var _alpha = __webpack_require__(22);
	
	var _alpha2 = _interopRequireDefault(_alpha);
	
	var _color = __webpack_require__(24);
	
	var _color2 = _interopRequireDefault(_color);
	
	var _scale = __webpack_require__(30);
	
	var _scale2 = _interopRequireDefault(_scale);
	
	var _shadow = __webpack_require__(31);
	
	var _shadow2 = _interopRequireDefault(_shadow);
	
	var _px = __webpack_require__(28);
	
	var _px2 = _interopRequireDefault(_px);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    // Color props
	    color: _color2.default,
	    backgroundColor: _color2.default,
	    outlineColor: _color2.default,
	    fill: _color2.default,
	    stroke: _color2.default,
	
	    // Border props
	    borderColor: _color2.default,
	    borderTopColor: _color2.default,
	    borderRightColor: _color2.default,
	    borderBottomColor: _color2.default,
	    borderLeftColor: _color2.default,
	    borderRadius: _px2.default,
	
	    // Positioning
	    width: _px2.default,
	    height: _px2.default,
	
	    // Shadows
	    textShadow: _shadow2.default,
	    boxShadow: _shadow2.default,
	
	    // Transform properties
	    rotate: _angle2.default,
	    rotateX: _angle2.default,
	    rotateY: _angle2.default,
	    rotateZ: _angle2.default,
	    scale: _scale2.default,
	    scaleX: _scale2.default,
	    scaleY: _scale2.default,
	    scaleZ: _scale2.default,
	    skewX: _angle2.default,
	    skewY: _angle2.default,
	    distance: _px2.default,
	    translateX: _px2.default,
	    translateY: _px2.default,
	    translateZ: _px2.default,
	    perspective: _px2.default,
	    opacity: _alpha2.default
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2Nzcy92YWx1ZS10eXBlLW1hcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7a0JBRWU7O0FBRVgsMEJBRlc7QUFHWCxvQ0FIVztBQUlYLGlDQUpXO0FBS1gseUJBTFc7QUFNWCwyQkFOVzs7O0FBU1gsZ0NBVFc7QUFVWCxtQ0FWVztBQVdYLHFDQVhXO0FBWVgsc0NBWlc7QUFhWCxvQ0FiVztBQWNYLDhCQWRXOzs7QUFpQlgsdUJBakJXO0FBa0JYLHdCQWxCVzs7O0FBcUJYLGdDQXJCVztBQXNCWCwrQkF0Qlc7OztBQXlCWCwyQkF6Qlc7QUEwQlgsNEJBMUJXO0FBMkJYLDRCQTNCVztBQTRCWCw0QkE1Qlc7QUE2QlgsMEJBN0JXO0FBOEJYLDJCQTlCVztBQStCWCwyQkEvQlc7QUFnQ1gsMkJBaENXO0FBaUNYLDBCQWpDVztBQWtDWCwwQkFsQ1c7QUFtQ1gsMEJBbkNXO0FBb0NYLDRCQXBDVztBQXFDWCw0QkFyQ1c7QUFzQ1gsNEJBdENXO0FBdUNYLDZCQXZDVztBQXdDWCw0QkF4Q1ciLCJmaWxlIjoidmFsdWUtdHlwZS1tYXAuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFuZ2xlIGZyb20gJy4uLy4uL3ZhbHVlLXR5cGVzL2FuZ2xlJztcbmltcG9ydCBhbHBoYSBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9hbHBoYSc7XG5pbXBvcnQgY29sb3IgZnJvbSAnLi4vLi4vdmFsdWUtdHlwZXMvY29sb3InO1xuaW1wb3J0IHNjYWxlIGZyb20gJy4uLy4uL3ZhbHVlLXR5cGVzL3NjYWxlJztcbmltcG9ydCBzaGFkb3cgZnJvbSAnLi4vLi4vdmFsdWUtdHlwZXMvc2hhZG93JztcbmltcG9ydCBweCBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9weCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICAvLyBDb2xvciBwcm9wc1xuICAgIGNvbG9yOiBjb2xvcixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yLFxuICAgIG91dGxpbmVDb2xvcjogY29sb3IsXG4gICAgZmlsbDogY29sb3IsXG4gICAgc3Ryb2tlOiBjb2xvcixcblxuICAgIC8vIEJvcmRlciBwcm9wc1xuICAgIGJvcmRlckNvbG9yOiBjb2xvcixcbiAgICBib3JkZXJUb3BDb2xvcjogY29sb3IsXG4gICAgYm9yZGVyUmlnaHRDb2xvcjogY29sb3IsXG4gICAgYm9yZGVyQm90dG9tQ29sb3I6IGNvbG9yLFxuICAgIGJvcmRlckxlZnRDb2xvcjogY29sb3IsXG4gICAgYm9yZGVyUmFkaXVzOiBweCxcblxuICAgIC8vIFBvc2l0aW9uaW5nXG4gICAgd2lkdGg6IHB4LFxuICAgIGhlaWdodDogcHgsXG5cbiAgICAvLyBTaGFkb3dzXG4gICAgdGV4dFNoYWRvdzogc2hhZG93LFxuICAgIGJveFNoYWRvdzogc2hhZG93LCAgIFxuXG4gICAgLy8gVHJhbnNmb3JtIHByb3BlcnRpZXNcbiAgICByb3RhdGU6IGFuZ2xlLFxuICAgIHJvdGF0ZVg6IGFuZ2xlLFxuICAgIHJvdGF0ZVk6IGFuZ2xlLFxuICAgIHJvdGF0ZVo6IGFuZ2xlLFxuICAgIHNjYWxlOiBzY2FsZSxcbiAgICBzY2FsZVg6IHNjYWxlLFxuICAgIHNjYWxlWTogc2NhbGUsXG4gICAgc2NhbGVaOiBzY2FsZSxcbiAgICBza2V3WDogYW5nbGUsXG4gICAgc2tld1k6IGFuZ2xlLFxuICAgIGRpc3RhbmNlOiBweCxcbiAgICB0cmFuc2xhdGVYOiBweCxcbiAgICB0cmFuc2xhdGVZOiBweCxcbiAgICB0cmFuc2xhdGVaOiBweCxcbiAgICBwZXJzcGVjdGl2ZTogcHgsXG4gICAgb3BhY2l0eTogYWxwaGFcbn07Il19

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _transformProps = __webpack_require__(44);
	
	var _transformProps2 = _interopRequireDefault(_transformProps);
	
	var _prefixer = __webpack_require__(43);
	
	var _prefixer2 = _interopRequireDefault(_prefixer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var TRANSLATE_Z = 'translateZ';
	
	exports.default = function (state, disableHardwareAcceleration) {
	    var propertyString = '';
	    var transformString = '';
	    var transformHasZ = false;
	
	    for (var key in state) {
	        if (state.hasOwnProperty(key)) {
	            var value = state[key];
	
	            if (_transformProps2.default[key]) {
	                transformString += key + '(' + value + ') ';
	                transformHasZ = key === TRANSLATE_Z ? true : transformHasZ;
	            } else {
	                propertyString += ';' + (0, _prefixer2.default)(key, true) + ':' + value;
	            }
	        }
	    }
	
	    if (transformString !== '') {
	        if (!transformHasZ && !disableHardwareAcceleration) {
	            transformString += TRANSLATE_Z + '(0px)';
	        }
	
	        propertyString += ';' + (0, _prefixer2.default)('transform') + ':' + transformString;
	    }
	
	    return propertyString;
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2Nzcy9idWlsZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTSxjQUFjLFlBQWQ7O2tCQUVTLFVBQUMsS0FBRCxFQUFRLDJCQUFSLEVBQXdDO0FBQ25ELFFBQUksaUJBQWlCLEVBQWpCLENBRCtDO0FBRW5ELFFBQUksa0JBQWtCLEVBQWxCLENBRitDO0FBR25ELFFBQUksZ0JBQWdCLEtBQWhCLENBSCtDOztBQUtuRCxTQUFLLElBQUksR0FBSixJQUFXLEtBQWhCLEVBQXVCO0FBQ25CLFlBQUksTUFBTSxjQUFOLENBQXFCLEdBQXJCLENBQUosRUFBK0I7QUFDM0IsZ0JBQU0sUUFBUSxNQUFNLEdBQU4sQ0FBUixDQURxQjs7QUFHM0IsZ0JBQUkseUJBQWUsR0FBZixDQUFKLEVBQXlCO0FBQ3JCLG1DQUFtQixNQUFNLEdBQU4sR0FBWSxLQUFaLEdBQW9CLElBQXBCLENBREU7QUFFckIsZ0NBQWdCLEdBQUMsS0FBUSxXQUFSLEdBQXVCLElBQXhCLEdBQStCLGFBQS9CLENBRks7YUFBekIsTUFJTztBQUNILGtDQUFrQixNQUFNLHdCQUFTLEdBQVQsRUFBYyxJQUFkLENBQU4sR0FBNEIsR0FBNUIsR0FBa0MsS0FBbEMsQ0FEZjthQUpQO1NBSEo7S0FESjs7QUFjQSxRQUFJLG9CQUFvQixFQUFwQixFQUF3QjtBQUN4QixZQUFJLENBQUMsYUFBRCxJQUFrQixDQUFDLDJCQUFELEVBQThCO0FBQ2hELCtCQUFtQixjQUFjLE9BQWQsQ0FENkI7U0FBcEQ7O0FBSUEsMEJBQWtCLE1BQU0sd0JBQVMsV0FBVCxDQUFOLEdBQThCLEdBQTlCLEdBQW9DLGVBQXBDLENBTE07S0FBNUI7O0FBUUEsV0FBTyxjQUFQLENBM0JtRDtDQUF4QyIsImZpbGUiOiJidWlsZC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHJhbnNmb3JtUHJvcHMgZnJvbSAnLi90cmFuc2Zvcm0tcHJvcHMnO1xuaW1wb3J0IHByZWZpeGVyIGZyb20gJy4vcHJlZml4ZXInO1xuXG5jb25zdCBUUkFOU0xBVEVfWiA9ICd0cmFuc2xhdGVaJztcblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlLCBkaXNhYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pID0+IHtcbiAgICBsZXQgcHJvcGVydHlTdHJpbmcgPSAnJztcbiAgICBsZXQgdHJhbnNmb3JtU3RyaW5nID0gJyc7XG4gICAgbGV0IHRyYW5zZm9ybUhhc1ogPSBmYWxzZTtcblxuICAgIGZvciAobGV0IGtleSBpbiBzdGF0ZSkge1xuICAgICAgICBpZiAoc3RhdGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBzdGF0ZVtrZXldO1xuXG4gICAgICAgICAgICBpZiAodHJhbnNmb3JtUHJvcHNba2V5XSkge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybVN0cmluZyArPSBrZXkgKyAnKCcgKyB2YWx1ZSArICcpICc7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtSGFzWiA9IChrZXkgPT09IFRSQU5TTEFURV9aKSA/IHRydWUgOiB0cmFuc2Zvcm1IYXNaO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHByb3BlcnR5U3RyaW5nICs9ICc7JyArIHByZWZpeGVyKGtleSwgdHJ1ZSkgKyAnOicgKyB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0cmFuc2Zvcm1TdHJpbmcgIT09ICcnKSB7XG4gICAgICAgIGlmICghdHJhbnNmb3JtSGFzWiAmJiAhZGlzYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm1TdHJpbmcgKz0gVFJBTlNMQVRFX1ogKyAnKDBweCknO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJvcGVydHlTdHJpbmcgKz0gJzsnICsgcHJlZml4ZXIoJ3RyYW5zZm9ybScpICsgJzonICsgdHJhbnNmb3JtU3RyaW5nO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0eVN0cmluZztcbn07Il19

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(21);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2Nzcy9wcmVmaXhlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBRUEsSUFBTSxhQUFhLEVBQWI7QUFDTixJQUFNLFlBQVksRUFBWjtBQUNOLElBQU0sV0FBVyxDQUFDLFFBQUQsRUFBVSxLQUFWLEVBQWdCLEdBQWhCLEVBQW9CLElBQXBCLEVBQTBCLEVBQTFCLENBQVg7QUFDTixJQUFNLGNBQWMsU0FBUyxNQUFUO0FBQ3BCLElBQUksb0JBQUo7Ozs7Ozs7O0FBUUEsSUFBTSxhQUFhLFVBQUMsR0FBRCxFQUFTO0FBQ3hCLGtCQUFjLGVBQWUsU0FBUyxhQUFULENBQXVCLEtBQXZCLENBQWYsQ0FEVTs7QUFHeEIsU0FBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksV0FBSixFQUFpQixHQUFqQyxFQUFzQztBQUNsQyxZQUFNLFNBQVMsU0FBUyxDQUFULENBQVQsQ0FENEI7QUFFbEMsWUFBTSxXQUFZLFdBQVcsRUFBWCxDQUZnQjtBQUdsQyxZQUFNLHVCQUF1QixXQUFXLEdBQVgsR0FBaUIsU0FBUyxJQUFJLE1BQUosQ0FBVyxDQUFYLEVBQWMsV0FBZCxFQUFULEdBQXVDLElBQUksS0FBSixDQUFVLENBQVYsQ0FBdkMsQ0FIWjs7QUFLbEMsWUFBSSx3QkFBd0IsWUFBWSxLQUFaLEVBQW1CO0FBQzNDLHVCQUFXLEdBQVgsSUFBa0Isb0JBQWxCLENBRDJDO0FBRTNDLHNCQUFVLEdBQVYsVUFBcUIsV0FBVyxFQUFYLEdBQWdCLEdBQWhCLElBQXVCLHdCQUFZLG9CQUFaLENBQTVDLENBRjJDO1NBQS9DO0tBTEo7Q0FIZTs7a0JBZUosVUFBQyxHQUFELEVBQU0sVUFBTixFQUFxQjtBQUNoQyxRQUFNLFFBQVEsYUFBYSxTQUFiLEdBQXlCLFVBQXpCLENBRGtCOztBQUdoQyxRQUFJLENBQUMsTUFBTSxHQUFOLENBQUQsRUFBYTtBQUNiLG1CQUFXLEdBQVgsRUFEYTtLQUFqQjs7QUFJQSxXQUFPLE1BQU0sR0FBTixDQUFQLENBUGdDO0NBQXJCIiwiZmlsZSI6InByZWZpeGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNhbWVsVG9EYXNoIH0gZnJvbSAnLi4vLi4vaW5jL3V0aWxzJztcblxuY29uc3QgY2FtZWxDYWNoZSA9IHt9O1xuY29uc3QgZGFzaENhY2hlID0ge307XG5jb25zdCBwcmVmaXhlcyA9IFsnV2Via2l0JywnTW96JywnTycsJ21zJywgJyddO1xuY29uc3QgbnVtUHJlZml4ZXMgPSBwcmVmaXhlcy5sZW5ndGg7XG5sZXQgdGVzdEVsZW1lbnQ7XG5cbi8qXG4gICAgVGVzdCBzdHlsZSBwcm9wZXJ0eSBmb3IgcHJlZml4ZWQgdmVyc2lvblxuICAgIFxuICAgIEBwYXJhbSBbc3RyaW5nXTogU3R5bGUgcHJvcGVydHlcbiAgICBAcmV0dXJuIFtzdHJpbmddOiBDYWNoZWQgcHJvcGVydHkgbmFtZVxuKi9cbmNvbnN0IHRlc3RQcmVmaXggPSAoa2V5KSA9PiB7XG4gICAgdGVzdEVsZW1lbnQgPSB0ZXN0RWxlbWVudCB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtUHJlZml4ZXM7IGkrKykge1xuICAgICAgICBjb25zdCBwcmVmaXggPSBwcmVmaXhlc1tpXTtcbiAgICAgICAgY29uc3Qgbm9QcmVmaXggPSAocHJlZml4ID09PSAnJyk7XG4gICAgICAgIGNvbnN0IHByZWZpeGVkUHJvcGVydHlOYW1lID0gbm9QcmVmaXggPyBrZXkgOiBwcmVmaXggKyBrZXkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBrZXkuc2xpY2UoMSk7XG5cbiAgICAgICAgaWYgKHByZWZpeGVkUHJvcGVydHlOYW1lIGluIHRlc3RFbGVtZW50LnN0eWxlKSB7XG4gICAgICAgICAgICBjYW1lbENhY2hlW2tleV0gPSBwcmVmaXhlZFByb3BlcnR5TmFtZTtcbiAgICAgICAgICAgIGRhc2hDYWNoZVtrZXldID0gYCR7KG5vUHJlZml4ID8gJycgOiAnLScpfSR7Y2FtZWxUb0Rhc2gocHJlZml4ZWRQcm9wZXJ0eU5hbWUpfWA7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCAoa2V5LCBhc0Rhc2hDYXNlKSA9PiB7XG4gICAgY29uc3QgY2FjaGUgPSBhc0Rhc2hDYXNlID8gZGFzaENhY2hlIDogY2FtZWxDYWNoZTtcblxuICAgIGlmICghY2FjaGVba2V5XSkge1xuICAgICAgICB0ZXN0UHJlZml4KGtleSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhY2hlW2tleV07XG59O1xuIl19

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _dictionary = __webpack_require__(49);
	
	var transformProps = {};
	
	var SCALE = 'scale';
	var ROTATE = 'rotate';
	var TRANSFORM_PERSPECTIVE = 'transformPerspective';
	var TERMS = ['translate', SCALE, ROTATE, 'skew', TRANSFORM_PERSPECTIVE];
	
	transformProps[ROTATE] = transformProps[SCALE] = transformProps[TRANSFORM_PERSPECTIVE] = true;
	
	TERMS.forEach(function (term) {
	  return _dictionary.axes.forEach(function (axis) {
	    return transformProps[term + axis] = true;
	  });
	});
	
	exports.default = transformProps;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2Nzcy90cmFuc2Zvcm0tcHJvcHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUVBLElBQUksaUJBQWlCLEVBQWpCOztBQUVKLElBQU0sUUFBUSxPQUFSO0FBQ04sSUFBTSxTQUFTLFFBQVQ7QUFDTixJQUFNLHdCQUF3QixzQkFBeEI7QUFDTixJQUFNLFFBQVEsQ0FBQyxXQUFELEVBQWMsS0FBZCxFQUFxQixNQUFyQixFQUE2QixNQUE3QixFQUFxQyxxQkFBckMsQ0FBUjs7QUFFTixlQUFlLE1BQWYsSUFBeUIsZUFBZSxLQUFmLElBQXdCLGVBQWUscUJBQWYsSUFBd0MsSUFBeEM7O0FBRWpELE1BQU0sT0FBTixDQUFjLFVBQUMsSUFBRDtTQUFVLGlCQUFLLE9BQUwsQ0FBYSxVQUFDLElBQUQ7V0FBVSxlQUFlLE9BQU8sSUFBUCxDQUFmLEdBQThCLElBQTlCO0dBQVY7Q0FBdkIsQ0FBZDs7a0JBRWUiLCJmaWxlIjoidHJhbnNmb3JtLXByb3BzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF4ZXMgfSBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9zZXR0aW5ncy9kaWN0aW9uYXJ5JztcblxubGV0IHRyYW5zZm9ybVByb3BzID0ge307XG5cbmNvbnN0IFNDQUxFID0gJ3NjYWxlJztcbmNvbnN0IFJPVEFURSA9ICdyb3RhdGUnO1xuY29uc3QgVFJBTlNGT1JNX1BFUlNQRUNUSVZFID0gJ3RyYW5zZm9ybVBlcnNwZWN0aXZlJztcbmNvbnN0IFRFUk1TID0gWyd0cmFuc2xhdGUnLCBTQ0FMRSwgUk9UQVRFLCAnc2tldycsIFRSQU5TRk9STV9QRVJTUEVDVElWRV07XG5cbnRyYW5zZm9ybVByb3BzW1JPVEFURV0gPSB0cmFuc2Zvcm1Qcm9wc1tTQ0FMRV0gPSB0cmFuc2Zvcm1Qcm9wc1tUUkFOU0ZPUk1fUEVSU1BFQ1RJVkVdID0gdHJ1ZTtcblxuVEVSTVMuZm9yRWFjaCgodGVybSkgPT4gYXhlcy5mb3JFYWNoKChheGlzKSA9PiB0cmFuc2Zvcm1Qcm9wc1t0ZXJtICsgYXhpc10gPSB0cnVlKSk7XG5cbmV4cG9ydCBkZWZhdWx0IHRyYW5zZm9ybVByb3BzOyJdfQ==

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _alpha = __webpack_require__(22);
	
	var _alpha2 = _interopRequireDefault(_alpha);
	
	var _color = __webpack_require__(24);
	
	var _color2 = _interopRequireDefault(_color);
	
	var _complex = __webpack_require__(25);
	
	var _complex2 = _interopRequireDefault(_complex);
	
	var _scale = __webpack_require__(30);
	
	var _scale2 = _interopRequireDefault(_scale);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    fill: _color2.default,
	    stroke: _color2.default,
	    scale: _scale2.default,
	    scaleX: _scale2.default,
	    scaleY: _scale2.default,
	    d: _complex2.default,
	    points: _complex2.default,
	    opacity: _alpha2.default,
	    fillOpacity: _alpha2.default,
	    strokeOpacity: _alpha2.default
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL3N2Zy92YWx1ZS10eXBlLW1hcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztrQkFFZTtBQUNYLHlCQURXO0FBRVgsMkJBRlc7QUFHWCwwQkFIVztBQUlYLDJCQUpXO0FBS1gsMkJBTFc7QUFNWCx3QkFOVztBQU9YLDZCQVBXO0FBUVgsNEJBUlc7QUFTWCxnQ0FUVztBQVVYLGtDQVZXIiwiZmlsZSI6InZhbHVlLXR5cGUtbWFwLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhbHBoYSBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9hbHBoYSc7XG5pbXBvcnQgY29sb3IgZnJvbSAnLi4vLi4vdmFsdWUtdHlwZXMvY29sb3InO1xuaW1wb3J0IGNvbXBsZXggZnJvbSAnLi4vLi4vdmFsdWUtdHlwZXMvY29tcGxleCc7XG5pbXBvcnQgc2NhbGUgZnJvbSAnLi4vLi4vdmFsdWUtdHlwZXMvc2NhbGUnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZmlsbDogY29sb3IsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzY2FsZTogc2NhbGUsXG4gICAgc2NhbGVYOiBzY2FsZSxcbiAgICBzY2FsZVk6IHNjYWxlLFxuICAgIGQ6IGNvbXBsZXgsXG4gICAgcG9pbnRzOiBjb21wbGV4LFxuICAgIG9wYWNpdHk6IGFscGhhLFxuICAgIGZpbGxPcGFjaXR5OiBhbHBoYSxcbiAgICBzdHJva2VPcGFjaXR5OiBhbHBoYVxufTsiXX0=

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = build;
	
	var _utils = __webpack_require__(21);
	
	var _transformProps = __webpack_require__(44);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL3N2Zy9idWlsZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7a0JBS3dCOztBQUx4Qjs7QUFDQTs7Ozs7O0FBRUEsSUFBTSxnQkFBZ0IsTUFBaEI7O0FBRVMsU0FBUyxLQUFULENBQWUsS0FBZixFQUFzQixJQUF0QixFQUE0QjtBQUN2QyxRQUFJLGVBQWUsS0FBZixDQURtQztBQUV2QyxRQUFNLFFBQVEsRUFBUixDQUZpQztBQUd2QyxRQUFNLFFBQVEsTUFBTSxLQUFOLEtBQWdCLFNBQWhCLEdBQTRCLE1BQU0sS0FBTixJQUFlLGFBQWYsR0FBK0IsTUFBTSxNQUFOLElBQWdCLENBQWhCLENBSGxDO0FBSXZDLFFBQU0sU0FBUyxNQUFNLE1BQU4sS0FBaUIsU0FBakIsR0FBNkIsTUFBTSxNQUFOLElBQWdCLGFBQWhCLEdBQWdDLFNBQVMsQ0FBVCxDQUpyQztBQUt2QyxRQUFNLG1CQUFtQixLQUFLLEtBQUwsSUFBYyxDQUFDLE1BQU0sT0FBTixJQUFpQixFQUFqQixDQUFELEdBQXdCLEdBQXhCLENBQWQsR0FBNkMsS0FBSyxDQUFMLENBTC9CO0FBTXZDLFFBQU0sbUJBQW1CLEtBQUssTUFBTCxJQUFlLENBQUMsTUFBTSxPQUFOLElBQWlCLEVBQWpCLENBQUQsR0FBd0IsR0FBeEIsQ0FBZixHQUE4QyxLQUFLLENBQUwsQ0FOaEM7QUFPdkMsUUFBTSxrQkFBa0IsQ0FBRSxnQkFBRixJQUFzQixRQUFRLENBQVIsQ0FBdEIsQ0FQZTtBQVF2QyxRQUFNLGtCQUFrQixDQUFFLGdCQUFGLElBQXNCLFNBQVMsQ0FBVCxDQUF0QixDQVJlO0FBU3ZDLFFBQU0sZ0JBQWdCLG1CQUFtQixLQUFuQixDQVRpQjtBQVV2QyxRQUFNLGdCQUFnQixtQkFBbUIsTUFBbkIsQ0FWaUI7QUFXdkMsUUFBTSxZQUFZO0FBQ2Qsa0NBQXdCLE1BQU0sVUFBTixVQUFxQixNQUFNLFVBQU4sT0FBN0M7QUFDQSw4QkFBb0IseUJBQW9CLCtCQUEwQixlQUFVLDBCQUFxQix1QkFBa0Isb0JBQW5IO0FBQ0EsNEJBQWtCLE1BQU0sTUFBTixVQUFpQiwwQkFBcUIsdUJBQXhEO0FBQ0EsMEJBQWdCLE1BQU0sS0FBTixPQUFoQjtBQUNBLDBCQUFnQixNQUFNLEtBQU4sT0FBaEI7S0FMRSxDQVhpQzs7QUFtQnZDLFNBQUssSUFBSSxHQUFKLElBQVcsS0FBaEIsRUFBdUI7QUFDbkIsWUFBSSxNQUFNLGNBQU4sQ0FBcUIsR0FBckIsQ0FBSixFQUErQjtBQUMzQixnQkFBSSx5QkFBZSxHQUFmLENBQUosRUFBeUI7QUFDckIsK0JBQWUsSUFBZixDQURxQjthQUF6QixNQUVPO0FBQ0gsc0JBQU0sd0JBQVksR0FBWixDQUFOLElBQTBCLE1BQU0sR0FBTixDQUExQixDQURHO2FBRlA7U0FESjtLQURKOztBQVVBLFFBQUksWUFBSixFQUFrQjtBQUNkLGNBQU0sU0FBTixHQUFrQixFQUFsQixDQURjOztBQUdkLGFBQUssSUFBSSxJQUFKLElBQVcsU0FBaEIsRUFBMkI7QUFDdkIsZ0JBQUksVUFBVSxjQUFWLENBQXlCLElBQXpCLENBQUosRUFBbUM7QUFDL0Isb0JBQU0sZUFBZSxJQUFDLEtBQVEsT0FBUixHQUFtQixHQUFwQixHQUEwQixHQUExQixDQURVO0FBRS9CLHNCQUFNLFNBQU4sSUFBbUIsVUFBVSxJQUFWLEVBQWUsT0FBZixDQUF1QixZQUF2QixFQUFxQyxZQUFyQyxDQUFuQixDQUYrQjthQUFuQztTQURKO0tBSEo7O0FBV0EsV0FBTyxLQUFQLENBeEN1QztDQUE1QiIsImZpbGUiOiJidWlsZC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjYW1lbFRvRGFzaCB9IGZyb20gJy4uLy4uL2luYy91dGlscyc7XG5pbXBvcnQgdHJhbnNmb3JtUHJvcHMgZnJvbSAnLi4vY3NzL3RyYW5zZm9ybS1wcm9wcyc7XG5cbmNvbnN0IFpFUk9fTk9UX1pFUk8gPSAwLjAwMDE7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkKHN0YXRlLCBkYXRhKSB7XG4gICAgbGV0IGhhc1RyYW5zZm9ybSA9IGZhbHNlO1xuICAgIGNvbnN0IHByb3BzID0ge307XG4gICAgY29uc3Qgc2NhbGUgPSBzdGF0ZS5zY2FsZSAhPT0gdW5kZWZpbmVkID8gc3RhdGUuc2NhbGUgfHwgWkVST19OT1RfWkVSTyA6IHN0YXRlLnNjYWxlWCB8fCAxO1xuICAgIGNvbnN0IHNjYWxlWSA9IHN0YXRlLnNjYWxlWSAhPT0gdW5kZWZpbmVkID8gc3RhdGUuc2NhbGVZIHx8IFpFUk9fTk9UX1pFUk8gOiBzY2FsZSB8fCAxO1xuICAgIGNvbnN0IHRyYW5zZm9ybU9yaWdpblggPSBkYXRhLndpZHRoICogKChzdGF0ZS5vcmlnaW5YIHx8IDUwKSAvIDEwMCkgKyBkYXRhLng7XG4gICAgY29uc3QgdHJhbnNmb3JtT3JpZ2luWSA9IGRhdGEuaGVpZ2h0ICogKChzdGF0ZS5vcmlnaW5ZIHx8IDUwKSAvIDEwMCkgKyBkYXRhLnk7XG4gICAgY29uc3Qgc2NhbGVUcmFuc2Zvcm1YID0gLSB0cmFuc2Zvcm1PcmlnaW5YICogKHNjYWxlICogMSk7XG4gICAgY29uc3Qgc2NhbGVUcmFuc2Zvcm1ZID0gLSB0cmFuc2Zvcm1PcmlnaW5ZICogKHNjYWxlWSAqIDEpO1xuICAgIGNvbnN0IHNjYWxlUmVwbGFjZVggPSB0cmFuc2Zvcm1PcmlnaW5YIC8gc2NhbGU7XG4gICAgY29uc3Qgc2NhbGVSZXBsYWNlWSA9IHRyYW5zZm9ybU9yaWdpblkgLyBzY2FsZVk7XG4gICAgY29uc3QgdHJhbnNmb3JtID0ge1xuICAgICAgICB0cmFuc2xhdGU6IGB0cmFuc2xhdGUoJHtzdGF0ZS50cmFuc2xhdGVYfSwgJHtzdGF0ZS50cmFuc2xhdGVZfSkgYCxcbiAgICAgICAgc2NhbGU6IGB0cmFuc2xhdGUoJHtzY2FsZVRyYW5zZm9ybVh9LCAke3NjYWxlVHJhbnNmb3JtWX0pIHNjYWxlKCR7c2NhbGV9LCAke3NjYWxlWX0pIHRyYW5zbGF0ZSgke3NjYWxlUmVwbGFjZVh9LCAke3NjYWxlUmVwbGFjZVl9KSBgLFxuICAgICAgICByb3RhdGU6IGByb3RhdGUoJHtzdGF0ZS5yb3RhdGV9LCAke3RyYW5zZm9ybU9yaWdpblh9LCAke3RyYW5zZm9ybU9yaWdpbll9KSBgLFxuICAgICAgICBza2V3WDogYHNrZXdYKCR7c3RhdGUuc2tld1h9KSBgLFxuICAgICAgICBza2V3WTogYHNrZXdZKCR7c3RhdGUuc2tld1l9KSBgXG4gICAgfTtcblxuICAgIGZvciAobGV0IGtleSBpbiBzdGF0ZSkge1xuICAgICAgICBpZiAoc3RhdGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgaWYgKHRyYW5zZm9ybVByb3BzW2tleV0pIHtcbiAgICAgICAgICAgICAgICBoYXNUcmFuc2Zvcm0gPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcm9wc1tjYW1lbFRvRGFzaChrZXkpXSA9IHN0YXRlW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaGFzVHJhbnNmb3JtKSB7XG4gICAgICAgIHByb3BzLnRyYW5zZm9ybSA9ICcnO1xuXG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0cmFuc2Zvcm0pIHtcbiAgICAgICAgICAgIGlmICh0cmFuc2Zvcm0uaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRWYWx1ZSA9IChrZXkgPT09ICdzY2FsZScpID8gJzEnIDogJzAnO1xuICAgICAgICAgICAgICAgIHByb3BzLnRyYW5zZm9ybSArPSB0cmFuc2Zvcm1ba2V5XS5yZXBsYWNlKC91bmRlZmluZWQvZywgZGVmYXVsdFZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwcm9wcztcbn0iXX0=

/***/ },
/* 47 */
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL3N2Zy1wYXRoL2J1aWxkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BLElBQU0sa0JBQWtCLFVBQUMsT0FBRCxFQUFVLE1BQVY7V0FBcUIsVUFBQyxDQUFXLE9BQVgsSUFBc0IsR0FBdEIsR0FBNkIsTUFBOUIsR0FBdUMsSUFBdkM7Q0FBckI7O2tCQUVULFVBQUMsS0FBRCxFQUFRLE1BQVIsRUFBbUI7QUFDOUIsUUFBTSxTQUFTLEVBQVQsQ0FEd0I7QUFFOUIsUUFBTSxrQkFBa0I7QUFDcEIsZ0JBQVEsQ0FBUjtBQUNBLGlCQUFTLFNBQVMsSUFBVDtLQUZQLENBRndCO0FBTTlCLFFBQUksZUFBZSxLQUFmLENBTjBCOztBQVE5QixTQUFLLElBQUksR0FBSixJQUFXLEtBQWhCLEVBQXVCO0FBQ25CLFlBQUksTUFBTSxjQUFOLENBQXFCLEdBQXJCLENBQUosRUFBK0I7QUFDM0IsZ0JBQU0sUUFBUSxNQUFNLEdBQU4sQ0FBUixDQURxQjs7QUFHM0Isb0JBQVEsR0FBUjtBQUNBLHFCQUFLLFFBQUwsQ0FEQTtBQUVBLHFCQUFLLFNBQUw7QUFDSSxtQ0FBZSxJQUFmLENBREo7QUFFSSxvQ0FBZ0IsR0FBaEIsSUFBdUIsZ0JBQWdCLEtBQWhCLEVBQXVCLE1BQXZCLENBQXZCLENBRko7QUFHSSwwQkFISjtBQUZBLHFCQU1LLFFBQUw7QUFDSSwyQkFBTyxtQkFBUCxJQUE4QixnQkFBZ0IsQ0FBQyxLQUFELEVBQVEsTUFBeEIsQ0FBOUIsQ0FESjtBQUVJLDBCQUZKO0FBTkE7QUFVSSwyQkFBTyxHQUFQLElBQWMsS0FBZCxDQURKO0FBVEEsYUFIMkI7U0FBL0I7S0FESjs7QUFtQkEsUUFBSSxZQUFKLEVBQWtCO0FBQ2QsZUFBTyxrQkFBUCxJQUE2QixnQkFBZ0IsTUFBaEIsR0FBeUIsR0FBekIsR0FBK0IsZ0JBQWdCLE9BQWhCLENBRDlDO0tBQWxCOztBQUlBLFdBQU8sTUFBUCxDQS9COEI7Q0FBbkIiLCJmaWxlIjoiYnVpbGQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgICBDb252ZXJ0IHBlcmNlbnRhZ2UgdG8gcGl4ZWxzXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBQZXJjZW50YWdlIG9mIHRvdGFsIGxlbmd0aFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVG90YWwgbGVuZ3RoXG4qL1xuY29uc3QgcGVyY2VudFRvUGl4ZWxzID0gKHBlcmNlbnQsIGxlbmd0aCkgPT4gKHBhcnNlRmxvYXQocGVyY2VudCkgLyAxMDApICogbGVuZ3RoICsgJ3B4JztcblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlLCBsZW5ndGgpID0+IHtcbiAgICBjb25zdCBzdHlsZXMgPSB7fTtcbiAgICBjb25zdCBkYXNoQXJyYXlTdHlsZXMgPSB7XG4gICAgICAgIGxlbmd0aDogMCxcbiAgICAgICAgc3BhY2luZzogbGVuZ3RoICsgJ3B4J1xuICAgIH07XG4gICAgbGV0IGhhc0Rhc2hBcnJheSA9IGZhbHNlO1xuXG4gICAgZm9yIChsZXQga2V5IGluIHN0YXRlKSB7XG4gICAgICAgIGlmIChzdGF0ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHN0YXRlW2tleV07XG5cbiAgICAgICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgICBjYXNlICdsZW5ndGgnOlxuICAgICAgICAgICAgY2FzZSAnc3BhY2luZyc6XG4gICAgICAgICAgICAgICAgaGFzRGFzaEFycmF5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBkYXNoQXJyYXlTdHlsZXNba2V5XSA9IHBlcmNlbnRUb1BpeGVscyh2YWx1ZSwgbGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ29mZnNldCc6XG4gICAgICAgICAgICAgICAgc3R5bGVzWydzdHJva2UtZGFzaG9mZnNldCddID0gcGVyY2VudFRvUGl4ZWxzKC12YWx1ZSwgbGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgc3R5bGVzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChoYXNEYXNoQXJyYXkpIHtcbiAgICAgICAgc3R5bGVzWydzdHJva2UtZGFzaGFycmF5J10gPSBkYXNoQXJyYXlTdHlsZXMubGVuZ3RoICsgJyAnICsgZGFzaEFycmF5U3R5bGVzLnNwYWNpbmc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0eWxlcztcbn07Il19

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	var rgb = exports.rgb = {
	    min: 0,
	    max: 255,
	    round: true
	};
	
	var opacity = exports.opacity = {
	    min: 0,
	    max: 1
	};
	
	var percent = exports.percent = {
	    min: 0,
	    max: 100,
	    unit: '%'
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kZWZhdWx0LXByb3BzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFPLElBQU0sb0JBQU07QUFDZixTQUFLLENBQUw7QUFDQSxTQUFLLEdBQUw7QUFDQSxXQUFPLElBQVA7Q0FIUzs7QUFNTixJQUFNLDRCQUFVO0FBQ25CLFNBQUssQ0FBTDtBQUNBLFNBQUssQ0FBTDtDQUZTOztBQUtOLElBQU0sNEJBQVU7QUFDbkIsU0FBSyxDQUFMO0FBQ0EsU0FBSyxHQUFMO0FBQ0EsVUFBTSxHQUFOO0NBSFMiLCJmaWxlIjoiZGVmYXVsdC1wcm9wcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcmdiID0ge1xuICAgIG1pbjogMCxcbiAgICBtYXg6IDI1NSxcbiAgICByb3VuZDogdHJ1ZVxufTtcblxuZXhwb3J0IGNvbnN0IG9wYWNpdHkgPSB7XG4gICAgbWluOiAwLFxuICAgIG1heDogMVxufTtcblxuZXhwb3J0IGNvbnN0IHBlcmNlbnQgPSB7XG4gICAgbWluOiAwLFxuICAgIG1heDogMTAwLFxuICAgIHVuaXQ6ICclJ1xufTsiXX0=

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	var X = 'X';
	var Y = 'Y';
	var ALPHA = 'Alpha';
	
	var axes = exports.axes = [X, Y, 'Z'];
	var rgb = exports.rgb = ['Red', 'Green', 'Blue', ALPHA];
	var hsl = exports.hsl = ['Hue', 'Saturation', 'Lightness', ALPHA];
	var positions = exports.positions = ['Top', 'Right', 'Bottom', 'Left'];
	var shadow = exports.shadow = [X, Y, 'Radius', 'Spread', 'Color'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kaWN0aW9uYXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLElBQU0sSUFBSSxHQUFKO0FBQ04sSUFBTSxJQUFJLEdBQUo7QUFDTixJQUFNLFFBQVEsT0FBUjs7QUFFQyxJQUFNLHNCQUFPLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxHQUFQLENBQVA7QUFDTixJQUFNLG9CQUFNLENBQUMsS0FBRCxFQUFRLE9BQVIsRUFBaUIsTUFBakIsRUFBeUIsS0FBekIsQ0FBTjtBQUNOLElBQU0sb0JBQU0sQ0FBQyxLQUFELEVBQVEsWUFBUixFQUFzQixXQUF0QixFQUFtQyxLQUFuQyxDQUFOO0FBQ04sSUFBTSxnQ0FBWSxDQUFDLEtBQUQsRUFBUSxPQUFSLEVBQWlCLFFBQWpCLEVBQTJCLE1BQTNCLENBQVo7QUFDTixJQUFNLDBCQUFTLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxRQUFQLEVBQWlCLFFBQWpCLEVBQTJCLE9BQTNCLENBQVQiLCJmaWxlIjoiZGljdGlvbmFyeS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBYID0gJ1gnO1xuY29uc3QgWSA9ICdZJztcbmNvbnN0IEFMUEhBID0gJ0FscGhhJztcblxuZXhwb3J0IGNvbnN0IGF4ZXMgPSBbWCwgWSwgJ1onXTtcbmV4cG9ydCBjb25zdCByZ2IgPSBbJ1JlZCcsICdHcmVlbicsICdCbHVlJywgQUxQSEFdO1xuZXhwb3J0IGNvbnN0IGhzbCA9IFsnSHVlJywgJ1NhdHVyYXRpb24nLCAnTGlnaHRuZXNzJywgQUxQSEFdO1xuZXhwb3J0IGNvbnN0IHBvc2l0aW9ucyA9IFsnVG9wJywgJ1JpZ2h0JywgJ0JvdHRvbScsICdMZWZ0J107XG5leHBvcnQgY29uc3Qgc2hhZG93ID0gW1gsIFksICdSYWRpdXMnLCAnU3ByZWFkJywgJ0NvbG9yJ107Il19

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = createEasingFunction;
	/*
	    Mirror easing
	    
	    Mirrors the provided easing function, used here for mirroring an
	    easeIn into an easeInOut
	    
	    @param [number]: Progress, from 0 - 1, of current shift
	    @param [function]: The easing function to mirror
	    @returns [number]: The easing-adjusted delta
	*/
	var mirrorEasing = function (method) {
	    return function (progress, strength) {
	        return progress <= 0.5 ? method(2 * progress, strength) / 2 : (2 - method(2 * (1 - progress), strength)) / 2;
	    };
	};
	
	/*
	    Reverse easing
	    
	    Reverses the output of the provided easing function, used for flipping easeIn
	    curve to an easeOut.
	    
	    @param [number]: Progress, from 0 - 1, of current shift
	    @param [function]: The easing function to reverse
	    @returns [number]: The easing-adjusted delta
	*/
	var reverseEasing = function (method) {
	    return function (progress, strength) {
	        return 1 - method(1 - progress, strength);
	    };
	};
	
	/*
	    Easing class
	
	    If provided easing function, returns easing function with 
	    in/out/inOut variations
	
	    If provided four arguments, returns new Bezier class instead.
	*/
	function createEasingFunction(method) {
	    var easingFunction = function (progress, strength) {
	        return method(progress, strength);
	    };
	
	    easingFunction.in = function (progress, strength) {
	        return method(progress, strength);
	    };
	    easingFunction.out = reverseEasing(method);
	    easingFunction.inOut = mirrorEasing(method);
	
	    return easingFunction;
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2Vhc2luZy9jcmVhdGUtZWFzaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztrQkFnQ3dCOzs7Ozs7Ozs7OztBQXRCeEIsSUFBTSxlQUFlLFVBQUMsTUFBRDtXQUFZLFVBQUMsUUFBRCxFQUFXLFFBQVg7ZUFBd0IsUUFBQyxJQUFZLEdBQVosR0FBbUIsT0FBTyxJQUFJLFFBQUosRUFBYyxRQUFyQixJQUFpQyxDQUFqQyxHQUFxQyxDQUFDLElBQUksT0FBTyxLQUFLLElBQUksUUFBSixDQUFMLEVBQW9CLFFBQTNCLENBQUosQ0FBRCxHQUE2QyxDQUE3QztLQUFqRjtDQUFaOzs7Ozs7Ozs7Ozs7QUFZckIsSUFBTSxnQkFBZ0IsVUFBQyxNQUFEO1dBQVksVUFBQyxRQUFELEVBQVcsUUFBWDtlQUF3QixJQUFJLE9BQU8sSUFBSSxRQUFKLEVBQWMsUUFBckIsQ0FBSjtLQUF4QjtDQUFaOzs7Ozs7Ozs7O0FBVVAsU0FBUyxvQkFBVCxDQUE4QixNQUE5QixFQUFzQztBQUNqRCxRQUFJLGlCQUFpQixVQUFDLFFBQUQsRUFBVyxRQUFYO2VBQXdCLE9BQU8sUUFBUCxFQUFpQixRQUFqQjtLQUF4QixDQUQ0Qjs7QUFHakQsbUJBQWUsRUFBZixHQUFvQixVQUFDLFFBQUQsRUFBVyxRQUFYO2VBQXdCLE9BQU8sUUFBUCxFQUFpQixRQUFqQjtLQUF4QixDQUg2QjtBQUlqRCxtQkFBZSxHQUFmLEdBQXFCLGNBQWMsTUFBZCxDQUFyQixDQUppRDtBQUtqRCxtQkFBZSxLQUFmLEdBQXVCLGFBQWEsTUFBYixDQUF2QixDQUxpRDs7QUFPakQsV0FBTyxjQUFQLENBUGlEO0NBQXRDIiwiZmlsZSI6ImNyZWF0ZS1lYXNpbmcuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgICBNaXJyb3IgZWFzaW5nXG4gICAgXG4gICAgTWlycm9ycyB0aGUgcHJvdmlkZWQgZWFzaW5nIGZ1bmN0aW9uLCB1c2VkIGhlcmUgZm9yIG1pcnJvcmluZyBhblxuICAgIGVhc2VJbiBpbnRvIGFuIGVhc2VJbk91dFxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MsIGZyb20gMCAtIDEsIG9mIGN1cnJlbnQgc2hpZnRcbiAgICBAcGFyYW0gW2Z1bmN0aW9uXTogVGhlIGVhc2luZyBmdW5jdGlvbiB0byBtaXJyb3JcbiAgICBAcmV0dXJucyBbbnVtYmVyXTogVGhlIGVhc2luZy1hZGp1c3RlZCBkZWx0YVxuKi9cbmNvbnN0IG1pcnJvckVhc2luZyA9IChtZXRob2QpID0+IChwcm9ncmVzcywgc3RyZW5ndGgpID0+IChwcm9ncmVzcyA8PSAwLjUpID8gbWV0aG9kKDIgKiBwcm9ncmVzcywgc3RyZW5ndGgpIC8gMiA6ICgyIC0gbWV0aG9kKDIgKiAoMSAtIHByb2dyZXNzKSwgc3RyZW5ndGgpKSAvIDI7XG4gICAgICAgIFxuLypcbiAgICBSZXZlcnNlIGVhc2luZ1xuICAgIFxuICAgIFJldmVyc2VzIHRoZSBvdXRwdXQgb2YgdGhlIHByb3ZpZGVkIGVhc2luZyBmdW5jdGlvbiwgdXNlZCBmb3IgZmxpcHBpbmcgZWFzZUluXG4gICAgY3VydmUgdG8gYW4gZWFzZU91dC5cbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzLCBmcm9tIDAgLSAxLCBvZiBjdXJyZW50IHNoaWZ0XG4gICAgQHBhcmFtIFtmdW5jdGlvbl06IFRoZSBlYXNpbmcgZnVuY3Rpb24gdG8gcmV2ZXJzZVxuICAgIEByZXR1cm5zIFtudW1iZXJdOiBUaGUgZWFzaW5nLWFkanVzdGVkIGRlbHRhXG4qL1xuY29uc3QgcmV2ZXJzZUVhc2luZyA9IChtZXRob2QpID0+IChwcm9ncmVzcywgc3RyZW5ndGgpID0+IDEgLSBtZXRob2QoMSAtIHByb2dyZXNzLCBzdHJlbmd0aCk7XG5cbi8qXG4gICAgRWFzaW5nIGNsYXNzXG5cbiAgICBJZiBwcm92aWRlZCBlYXNpbmcgZnVuY3Rpb24sIHJldHVybnMgZWFzaW5nIGZ1bmN0aW9uIHdpdGggXG4gICAgaW4vb3V0L2luT3V0IHZhcmlhdGlvbnNcblxuICAgIElmIHByb3ZpZGVkIGZvdXIgYXJndW1lbnRzLCByZXR1cm5zIG5ldyBCZXppZXIgY2xhc3MgaW5zdGVhZC5cbiovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVFYXNpbmdGdW5jdGlvbihtZXRob2QpIHtcbiAgICBsZXQgZWFzaW5nRnVuY3Rpb24gPSAocHJvZ3Jlc3MsIHN0cmVuZ3RoKSA9PiBtZXRob2QocHJvZ3Jlc3MsIHN0cmVuZ3RoKTtcblxuICAgIGVhc2luZ0Z1bmN0aW9uLmluID0gKHByb2dyZXNzLCBzdHJlbmd0aCkgPT4gbWV0aG9kKHByb2dyZXNzLCBzdHJlbmd0aCk7XG4gICAgZWFzaW5nRnVuY3Rpb24ub3V0ID0gcmV2ZXJzZUVhc2luZyhtZXRob2QpO1xuICAgIGVhc2luZ0Z1bmN0aW9uLmluT3V0ID0gbWlycm9yRWFzaW5nKG1ldGhvZCk7XG5cbiAgICByZXR1cm4gZWFzaW5nRnVuY3Rpb247XG59XG4iXX0=

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = cubicBezier;
	/*
	    Bezier function generator
	        
	    Gaëtan Renaudeau's BezierEasing
	    https://github.com/gre/bezier-easing/blob/master/index.js  
	    https://github.com/gre/bezier-easing/blob/master/LICENSE
	    You're a hero
	    
	    Use
	    
	        var easeOut = new Bezier(.17,.67,.83,.67),
	            x = easeOut(0.5); // returns 0.627...
	*/
	
	// Constants
	var NEWTON_ITERATIONS = 8;
	var NEWTON_MIN_SLOPE = 0.001;
	var SUBDIVISION_PRECISION = 0.0000001;
	var SUBDIVISION_MAX_ITERATIONS = 10;
	var K_SPLINE_TABLE_SIZE = 11;
	var K_SAMPLE_STEP_SIZE = 1.0 / (K_SPLINE_TABLE_SIZE - 1.0);
	var FLOAT_32_SUPPORTED = typeof Float32Array !== 'undefined';
	
	// Helper methods
	var a = function (a1, a2) {
	    return 1.0 - 3.0 * a2 + 3.0 * a1;
	};
	var b = function (a1, a2) {
	    return 3.0 * a2 - 6.0 * a1;
	};
	var c = function (a1) {
	    return 3.0 * a1;
	};
	
	var getSlope = function (t, a1, a2) {
	    return 3.0 * a(a1, a2) * t * t + 2.0 * b(a1, a2) * t + c(a1);
	};
	
	var calcBezier = function (t, a1, a2) {
	    return ((a(a1, a2) * t + b(a1, a2)) * t + c(a1)) * t;
	};
	
	/*
	    Create a cubic bezier resolver
	*/
	function cubicBezier(mX1, mY1, mX2, mY2) {
	    var sampleValues = FLOAT_32_SUPPORTED ? new Float32Array(K_SPLINE_TABLE_SIZE) : new Array(K_SPLINE_TABLE_SIZE);
	    var _precomputed = false;
	
	    var binarySubdivide = function (aX, aA, aB) {
	        var i = 0;
	        var currentX = void 0;
	        var currentT = void 0;
	
	        do {
	            currentT = aA + (aB - aA) / 2.0;
	            currentX = calcBezier(currentT, mX1, mX2) - aX;
	            if (currentX > 0.0) {
	                aB = currentT;
	            } else {
	                aA = currentT;
	            }
	        } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
	
	        return currentT;
	    };
	
	    var newtonRaphsonIterate = function (aX, aGuessT) {
	        var i = 0;
	        var currentSlope = 0;
	        var currentX = void 0;
	
	        for (; i < NEWTON_ITERATIONS; ++i) {
	            currentSlope = getSlope(aGuessT, mX1, mX2);
	
	            if (currentSlope === 0.0) {
	                return aGuessT;
	            }
	
	            currentX = calcBezier(aGuessT, mX1, mX2) - aX;
	            aGuessT -= currentX / currentSlope;
	        }
	
	        return aGuessT;
	    };
	
	    var calcSampleValues = function () {
	        for (var i = 0; i < K_SPLINE_TABLE_SIZE; ++i) {
	            sampleValues[i] = calcBezier(i * K_SAMPLE_STEP_SIZE, mX1, mX2);
	        }
	    };
	
	    var getTForX = function (aX) {
	        var intervalStart = 0.0;
	        var currentSample = 1;
	        var lastSample = K_SPLINE_TABLE_SIZE - 1;
	        var dist = 0.0;
	        var guessForT = 0.0;
	        var initialSlope = 0.0;
	
	        for (; currentSample != lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
	            intervalStart += K_SAMPLE_STEP_SIZE;
	        }
	
	        --currentSample;
	
	        dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
	        guessForT = intervalStart + dist * K_SAMPLE_STEP_SIZE;
	
	        initialSlope = getSlope(guessForT, mX1, mX2);
	
	        // If slope is greater than min
	        if (initialSlope >= NEWTON_MIN_SLOPE) {
	            return newtonRaphsonIterate(aX, guessForT);
	            // Slope is equal to min
	        } else if (initialSlope === 0.0) {
	                return guessForT;
	                // Slope is less than min
	            } else {
	                    return binarySubdivide(aX, intervalStart, intervalStart + K_SAMPLE_STEP_SIZE);
	                }
	    };
	
	    var precompute = function () {
	        _precomputed = true;
	        if (mX1 != mY1 || mX2 != mY2) {
	            calcSampleValues();
	        }
	    };
	
	    var resolver = function (aX) {
	        var returnValue = void 0;
	
	        if (!_precomputed) {
	            precompute();
	        }
	
	        // If linear gradient, return X as T
	        if (mX1 === mY1 && mX2 === mY2) {
	            returnValue = aX;
	
	            // If at start, return 0
	        } else if (aX === 0) {
	                returnValue = 0;
	
	                // If at end, return 1
	            } else if (aX === 1) {
	                    returnValue = 1;
	                } else {
	                    returnValue = calcBezier(getTForX(aX), mY1, mY2);
	                }
	
	        return returnValue;
	    };
	
	    return resolver;
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2Vhc2luZy9jcmVhdGUtYmV6aWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztrQkFtQ3dCOzs7Ozs7Ozs7Ozs7Ozs7O0FBcEJ4QixJQUFNLG9CQUFvQixDQUFwQjtBQUNOLElBQU0sbUJBQW1CLEtBQW5CO0FBQ04sSUFBTSx3QkFBd0IsU0FBeEI7QUFDTixJQUFNLDZCQUE2QixFQUE3QjtBQUNOLElBQU0sc0JBQXNCLEVBQXRCO0FBQ04sSUFBTSxxQkFBcUIsT0FBTyxzQkFBc0IsR0FBdEIsQ0FBUDtBQUMzQixJQUFNLHFCQUFzQixPQUFPLFlBQVAsS0FBd0IsV0FBeEI7OztBQUc1QixJQUFNLElBQUksVUFBQyxFQUFELEVBQUssRUFBTDtXQUFZLE1BQU0sTUFBTSxFQUFOLEdBQVcsTUFBTSxFQUFOO0NBQTdCO0FBQ1YsSUFBTSxJQUFJLFVBQUMsRUFBRCxFQUFLLEVBQUw7V0FBWSxNQUFNLEVBQU4sR0FBVyxNQUFNLEVBQU47Q0FBdkI7QUFDVixJQUFNLElBQUksVUFBQyxFQUFEO1dBQVEsTUFBTSxFQUFOO0NBQVI7O0FBRVYsSUFBTSxXQUFXLFVBQUMsQ0FBRCxFQUFJLEVBQUosRUFBUSxFQUFSO1dBQWUsTUFBTSxFQUFFLEVBQUYsRUFBTSxFQUFOLENBQU4sR0FBa0IsQ0FBbEIsR0FBc0IsQ0FBdEIsR0FBMEIsTUFBTSxFQUFFLEVBQUYsRUFBTSxFQUFOLENBQU4sR0FBa0IsQ0FBbEIsR0FBc0IsRUFBRSxFQUFGLENBQWhEO0NBQWY7O0FBRWpCLElBQU0sYUFBYSxVQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUjtXQUFlLENBQUMsQ0FBQyxFQUFFLEVBQUYsRUFBTSxFQUFOLElBQVksQ0FBWixHQUFnQixFQUFFLEVBQUYsRUFBTSxFQUFOLENBQWhCLENBQUQsR0FBOEIsQ0FBOUIsR0FBa0MsRUFBRSxFQUFGLENBQWxDLENBQUQsR0FBNEMsQ0FBNUM7Q0FBZjs7Ozs7QUFLSixTQUFTLFdBQVQsQ0FBcUIsR0FBckIsRUFBMEIsR0FBMUIsRUFBK0IsR0FBL0IsRUFBb0MsR0FBcEMsRUFBeUM7QUFDcEQsUUFBTSxlQUFlLHFCQUFxQixJQUFJLFlBQUosQ0FBaUIsbUJBQWpCLENBQXJCLEdBQTZELElBQUksS0FBSixDQUFVLG1CQUFWLENBQTdELENBRCtCO0FBRXBELFFBQUksZUFBZSxLQUFmLENBRmdEOztBQUlwRCxRQUFNLGtCQUFrQixVQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFnQjtBQUNwQyxZQUFJLElBQUksQ0FBSixDQURnQztBQUVwQyxZQUFJLGlCQUFKLENBRm9DO0FBR3BDLFlBQUksaUJBQUosQ0FIb0M7O0FBS3BDLFdBQUc7QUFDQyx1QkFBVyxLQUFLLENBQUMsS0FBSyxFQUFMLENBQUQsR0FBWSxHQUFaLENBRGpCO0FBRUMsdUJBQVcsV0FBVyxRQUFYLEVBQXFCLEdBQXJCLEVBQTBCLEdBQTFCLElBQWlDLEVBQWpDLENBRlo7QUFHQyxnQkFBSSxXQUFXLEdBQVgsRUFBZ0I7QUFDaEIscUJBQUssUUFBTCxDQURnQjthQUFwQixNQUVPO0FBQ0gscUJBQUssUUFBTCxDQURHO2FBRlA7U0FISixRQVFTLEtBQUssR0FBTCxDQUFTLFFBQVQsSUFBcUIscUJBQXJCLElBQThDLEVBQUUsQ0FBRixHQUFNLDBCQUFOLEVBYm5COztBQWVwQyxlQUFPLFFBQVAsQ0Fmb0M7S0FBaEIsQ0FKNEI7O0FBc0JwRCxRQUFNLHVCQUF1QixVQUFDLEVBQUQsRUFBSyxPQUFMLEVBQWlCO0FBQzFDLFlBQUksSUFBSSxDQUFKLENBRHNDO0FBRTFDLFlBQUksZUFBZSxDQUFmLENBRnNDO0FBRzFDLFlBQUksaUJBQUosQ0FIMEM7O0FBSzFDLGVBQU8sSUFBSSxpQkFBSixFQUF1QixFQUFFLENBQUYsRUFBSztBQUMvQiwyQkFBZSxTQUFTLE9BQVQsRUFBa0IsR0FBbEIsRUFBdUIsR0FBdkIsQ0FBZixDQUQrQjs7QUFHL0IsZ0JBQUksaUJBQWlCLEdBQWpCLEVBQXNCO0FBQ3RCLHVCQUFPLE9BQVAsQ0FEc0I7YUFBMUI7O0FBSUEsdUJBQVcsV0FBVyxPQUFYLEVBQW9CLEdBQXBCLEVBQXlCLEdBQXpCLElBQWdDLEVBQWhDLENBUG9CO0FBUS9CLHVCQUFXLFdBQVcsWUFBWCxDQVJvQjtTQUFuQzs7QUFXQSxlQUFPLE9BQVAsQ0FoQjBDO0tBQWpCLENBdEJ1Qjs7QUF5Q3BELFFBQU0sbUJBQW1CLFlBQU07QUFDM0IsYUFBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksbUJBQUosRUFBeUIsRUFBRSxDQUFGLEVBQUs7QUFDMUMseUJBQWEsQ0FBYixJQUFrQixXQUFXLElBQUksa0JBQUosRUFBd0IsR0FBbkMsRUFBd0MsR0FBeEMsQ0FBbEIsQ0FEMEM7U0FBOUM7S0FEcUIsQ0F6QzJCOztBQStDcEQsUUFBTSxXQUFXLFVBQUMsRUFBRCxFQUFRO0FBQ3JCLFlBQUksZ0JBQWdCLEdBQWhCLENBRGlCO0FBRXJCLFlBQUksZ0JBQWdCLENBQWhCLENBRmlCO0FBR3JCLFlBQUksYUFBYSxzQkFBc0IsQ0FBdEIsQ0FISTtBQUlyQixZQUFJLE9BQU8sR0FBUCxDQUppQjtBQUtyQixZQUFJLFlBQVksR0FBWixDQUxpQjtBQU1yQixZQUFJLGVBQWUsR0FBZixDQU5pQjs7QUFRckIsZUFBTyxpQkFBaUIsVUFBakIsSUFBK0IsYUFBYSxhQUFiLEtBQStCLEVBQS9CLEVBQW1DLEVBQUUsYUFBRixFQUFpQjtBQUN0Riw2QkFBaUIsa0JBQWpCLENBRHNGO1NBQTFGOztBQUlBLFVBQUUsYUFBRixDQVpxQjs7QUFjckIsZUFBTyxDQUFDLEtBQUssYUFBYSxhQUFiLENBQUwsQ0FBRCxJQUFzQyxhQUFhLGdCQUFjLENBQWQsQ0FBYixHQUFnQyxhQUFhLGFBQWIsQ0FBaEMsQ0FBdEMsQ0FkYztBQWVyQixvQkFBWSxnQkFBZ0IsT0FBTyxrQkFBUCxDQWZQOztBQWlCckIsdUJBQWUsU0FBUyxTQUFULEVBQW9CLEdBQXBCLEVBQXlCLEdBQXpCLENBQWY7OztBQWpCcUIsWUFvQmpCLGdCQUFnQixnQkFBaEIsRUFBa0M7QUFDbEMsbUJBQU8scUJBQXFCLEVBQXJCLEVBQXlCLFNBQXpCLENBQVA7O0FBRGtDLFNBQXRDLE1BR08sSUFBSSxpQkFBaUIsR0FBakIsRUFBc0I7QUFDN0IsdUJBQU8sU0FBUDs7QUFENkIsYUFBMUIsTUFHQTtBQUNILDJCQUFPLGdCQUFnQixFQUFoQixFQUFvQixhQUFwQixFQUFtQyxnQkFBZ0Isa0JBQWhCLENBQTFDLENBREc7aUJBSEE7S0F2Qk0sQ0EvQ21DOztBQThFcEQsUUFBTSxhQUFhLFlBQU07QUFDckIsdUJBQWUsSUFBZixDQURxQjtBQUVyQixZQUFJLE9BQU8sR0FBUCxJQUFjLE9BQU8sR0FBUCxFQUFZO0FBQzFCLCtCQUQwQjtTQUE5QjtLQUZlLENBOUVpQzs7QUFxRnBELFFBQU0sV0FBVyxVQUFDLEVBQUQsRUFBUTtBQUNyQixZQUFJLG9CQUFKLENBRHFCOztBQUdyQixZQUFJLENBQUMsWUFBRCxFQUFlO0FBQ2YseUJBRGU7U0FBbkI7OztBQUhxQixZQVFqQixRQUFRLEdBQVIsSUFBZSxRQUFRLEdBQVIsRUFBYTtBQUM1QiwwQkFBYyxFQUFkOzs7QUFENEIsU0FBaEMsTUFJTyxJQUFJLE9BQU8sQ0FBUCxFQUFVO0FBQ2pCLDhCQUFjLENBQWQ7OztBQURpQixhQUFkLE1BSUEsSUFBSSxPQUFPLENBQVAsRUFBVTtBQUNqQixrQ0FBYyxDQUFkLENBRGlCO2lCQUFkLE1BR0E7QUFDSCxrQ0FBYyxXQUFXLFNBQVMsRUFBVCxDQUFYLEVBQXlCLEdBQXpCLEVBQThCLEdBQTlCLENBQWQsQ0FERztpQkFIQTs7QUFPUCxlQUFPLFdBQVAsQ0F2QnFCO0tBQVIsQ0FyRm1DOztBQStHcEQsV0FBTyxRQUFQLENBL0dvRDtDQUF6QyIsImZpbGUiOiJjcmVhdGUtYmV6aWVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gICAgQmV6aWVyIGZ1bmN0aW9uIGdlbmVyYXRvclxuICAgICAgICBcbiAgICBHYcOrdGFuIFJlbmF1ZGVhdSdzIEJlemllckVhc2luZ1xuICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9pbmRleC5qcyAgXG4gICAgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAgICBZb3UncmUgYSBoZXJvXG4gICAgXG4gICAgVXNlXG4gICAgXG4gICAgICAgIHZhciBlYXNlT3V0ID0gbmV3IEJlemllciguMTcsLjY3LC44MywuNjcpLFxuICAgICAgICAgICAgeCA9IGVhc2VPdXQoMC41KTsgLy8gcmV0dXJucyAwLjYyNy4uLlxuKi9cblxuLy8gQ29uc3RhbnRzXG5jb25zdCBORVdUT05fSVRFUkFUSU9OUyA9IDg7XG5jb25zdCBORVdUT05fTUlOX1NMT1BFID0gMC4wMDE7XG5jb25zdCBTVUJESVZJU0lPTl9QUkVDSVNJT04gPSAwLjAwMDAwMDE7XG5jb25zdCBTVUJESVZJU0lPTl9NQVhfSVRFUkFUSU9OUyA9IDEwO1xuY29uc3QgS19TUExJTkVfVEFCTEVfU0laRSA9IDExO1xuY29uc3QgS19TQU1QTEVfU1RFUF9TSVpFID0gMS4wIC8gKEtfU1BMSU5FX1RBQkxFX1NJWkUgLSAxLjApO1xuY29uc3QgRkxPQVRfMzJfU1VQUE9SVEVEID0gKHR5cGVvZiBGbG9hdDMyQXJyYXkgIT09ICd1bmRlZmluZWQnKTtcblxuLy8gSGVscGVyIG1ldGhvZHNcbmNvbnN0IGEgPSAoYTEsIGEyKSA9PiAxLjAgLSAzLjAgKiBhMiArIDMuMCAqIGExO1xuY29uc3QgYiA9IChhMSwgYTIpID0+IDMuMCAqIGEyIC0gNi4wICogYTE7XG5jb25zdCBjID0gKGExKSA9PiAzLjAgKiBhMTtcblxuY29uc3QgZ2V0U2xvcGUgPSAodCwgYTEsIGEyKSA9PiAzLjAgKiBhKGExLCBhMikgKiB0ICogdCArIDIuMCAqIGIoYTEsIGEyKSAqIHQgKyBjKGExKTtcblxuY29uc3QgY2FsY0JlemllciA9ICh0LCBhMSwgYTIpID0+ICgoYShhMSwgYTIpICogdCArIGIoYTEsIGEyKSkgKiB0ICsgYyhhMSkpICogdDtcblxuLypcbiAgICBDcmVhdGUgYSBjdWJpYyBiZXppZXIgcmVzb2x2ZXJcbiovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjdWJpY0JlemllcihtWDEsIG1ZMSwgbVgyLCBtWTIpIHtcbiAgICBjb25zdCBzYW1wbGVWYWx1ZXMgPSBGTE9BVF8zMl9TVVBQT1JURUQgPyBuZXcgRmxvYXQzMkFycmF5KEtfU1BMSU5FX1RBQkxFX1NJWkUpIDogbmV3IEFycmF5KEtfU1BMSU5FX1RBQkxFX1NJWkUpO1xuICAgIGxldCBfcHJlY29tcHV0ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGJpbmFyeVN1YmRpdmlkZSA9IChhWCwgYUEsIGFCKSA9PiB7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgbGV0IGN1cnJlbnRYO1xuICAgICAgICBsZXQgY3VycmVudFQ7XG5cbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgY3VycmVudFQgPSBhQSArIChhQiAtIGFBKSAvIDIuMDtcbiAgICAgICAgICAgIGN1cnJlbnRYID0gY2FsY0JlemllcihjdXJyZW50VCwgbVgxLCBtWDIpIC0gYVg7XG4gICAgICAgICAgICBpZiAoY3VycmVudFggPiAwLjApIHtcbiAgICAgICAgICAgICAgICBhQiA9IGN1cnJlbnRUO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhQSA9IGN1cnJlbnRUO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IHdoaWxlIChNYXRoLmFicyhjdXJyZW50WCkgPiBTVUJESVZJU0lPTl9QUkVDSVNJT04gJiYgKytpIDwgU1VCRElWSVNJT05fTUFYX0lURVJBVElPTlMpO1xuXG4gICAgICAgIHJldHVybiBjdXJyZW50VDtcbiAgICB9O1xuXG4gICAgY29uc3QgbmV3dG9uUmFwaHNvbkl0ZXJhdGUgPSAoYVgsIGFHdWVzc1QpID0+IHtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBsZXQgY3VycmVudFNsb3BlID0gMDtcbiAgICAgICAgbGV0IGN1cnJlbnRYO1xuXG4gICAgICAgIGZvciAoOyBpIDwgTkVXVE9OX0lURVJBVElPTlM7ICsraSkge1xuICAgICAgICAgICAgY3VycmVudFNsb3BlID0gZ2V0U2xvcGUoYUd1ZXNzVCwgbVgxLCBtWDIpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoY3VycmVudFNsb3BlID09PSAwLjApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYUd1ZXNzVDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY3VycmVudFggPSBjYWxjQmV6aWVyKGFHdWVzc1QsIG1YMSwgbVgyKSAtIGFYO1xuICAgICAgICAgICAgYUd1ZXNzVCAtPSBjdXJyZW50WCAvIGN1cnJlbnRTbG9wZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGFHdWVzc1Q7XG4gICAgfTtcblxuICAgIGNvbnN0IGNhbGNTYW1wbGVWYWx1ZXMgPSAoKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgS19TUExJTkVfVEFCTEVfU0laRTsgKytpKSB7XG4gICAgICAgICAgICBzYW1wbGVWYWx1ZXNbaV0gPSBjYWxjQmV6aWVyKGkgKiBLX1NBTVBMRV9TVEVQX1NJWkUsIG1YMSwgbVgyKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBnZXRURm9yWCA9IChhWCkgPT4ge1xuICAgICAgICBsZXQgaW50ZXJ2YWxTdGFydCA9IDAuMDtcbiAgICAgICAgbGV0IGN1cnJlbnRTYW1wbGUgPSAxO1xuICAgICAgICBsZXQgbGFzdFNhbXBsZSA9IEtfU1BMSU5FX1RBQkxFX1NJWkUgLSAxO1xuICAgICAgICBsZXQgZGlzdCA9IDAuMDtcbiAgICAgICAgbGV0IGd1ZXNzRm9yVCA9IDAuMDtcbiAgICAgICAgbGV0IGluaXRpYWxTbG9wZSA9IDAuMDtcbiAgICAgICAgICAgIFxuICAgICAgICBmb3IgKDsgY3VycmVudFNhbXBsZSAhPSBsYXN0U2FtcGxlICYmIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSA8PSBhWDsgKytjdXJyZW50U2FtcGxlKSB7XG4gICAgICAgICAgICBpbnRlcnZhbFN0YXJ0ICs9IEtfU0FNUExFX1NURVBfU0laRTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLS1jdXJyZW50U2FtcGxlO1xuICAgICAgICBcbiAgICAgICAgZGlzdCA9IChhWCAtIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSkgLyAoc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGUrMV0gLSBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0pO1xuICAgICAgICBndWVzc0ZvclQgPSBpbnRlcnZhbFN0YXJ0ICsgZGlzdCAqIEtfU0FNUExFX1NURVBfU0laRTtcbiAgICAgICAgXG4gICAgICAgIGluaXRpYWxTbG9wZSA9IGdldFNsb3BlKGd1ZXNzRm9yVCwgbVgxLCBtWDIpO1xuICAgICAgICBcbiAgICAgICAgLy8gSWYgc2xvcGUgaXMgZ3JlYXRlciB0aGFuIG1pblxuICAgICAgICBpZiAoaW5pdGlhbFNsb3BlID49IE5FV1RPTl9NSU5fU0xPUEUpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXd0b25SYXBoc29uSXRlcmF0ZShhWCwgZ3Vlc3NGb3JUKTtcbiAgICAgICAgLy8gU2xvcGUgaXMgZXF1YWwgdG8gbWluXG4gICAgICAgIH0gZWxzZSBpZiAoaW5pdGlhbFNsb3BlID09PSAwLjApIHtcbiAgICAgICAgICAgIHJldHVybiBndWVzc0ZvclQ7XG4gICAgICAgIC8vIFNsb3BlIGlzIGxlc3MgdGhhbiBtaW5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBiaW5hcnlTdWJkaXZpZGUoYVgsIGludGVydmFsU3RhcnQsIGludGVydmFsU3RhcnQgKyBLX1NBTVBMRV9TVEVQX1NJWkUpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHByZWNvbXB1dGUgPSAoKSA9PiB7XG4gICAgICAgIF9wcmVjb21wdXRlZCA9IHRydWU7XG4gICAgICAgIGlmIChtWDEgIT0gbVkxIHx8IG1YMiAhPSBtWTIpIHtcbiAgICAgICAgICAgIGNhbGNTYW1wbGVWYWx1ZXMoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCByZXNvbHZlciA9IChhWCkgPT4ge1xuICAgICAgICBsZXQgcmV0dXJuVmFsdWU7XG5cbiAgICAgICAgaWYgKCFfcHJlY29tcHV0ZWQpIHtcbiAgICAgICAgICAgIHByZWNvbXB1dGUoKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gSWYgbGluZWFyIGdyYWRpZW50LCByZXR1cm4gWCBhcyBUXG4gICAgICAgIGlmIChtWDEgPT09IG1ZMSAmJiBtWDIgPT09IG1ZMikge1xuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSBhWDtcbiAgICAgICAgICAgIFxuICAgICAgICAvLyBJZiBhdCBzdGFydCwgcmV0dXJuIDBcbiAgICAgICAgfSBlbHNlIGlmIChhWCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSAwO1xuICAgICAgICAgICAgXG4gICAgICAgIC8vIElmIGF0IGVuZCwgcmV0dXJuIDFcbiAgICAgICAgfSBlbHNlIGlmIChhWCA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSAxO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm5WYWx1ZSA9IGNhbGNCZXppZXIoZ2V0VEZvclgoYVgpLCBtWTEsIG1ZMik7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiByZXR1cm5WYWx1ZTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHJlc29sdmVyO1xufVxuIl19

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	/*
	    Detect and load an appropriate clock setting for the environment
	*/
	
	var hasRAF = typeof window !== 'undefined' && window.requestAnimationFrame ? true : false;
	
	var tick = void 0;
	
	if (hasRAF) {
	    tick = function (callback) {
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
	
	        tick = function (callback) {
	            var currentTime = new Date().getTime();
	            var timeToCall = Math.max(0, 16 - (currentTime - lastTime));
	
	            lastTime = currentTime + timeToCall;
	
	            setTimeout(function () {
	                return callback(lastTime);
	            }, timeToCall);
	        };
	    })();
	}
	
	exports.default = tick;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90YXNrL3RpY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLElBQU0sU0FBUyxPQUFRLE1BQVAsS0FBa0IsV0FBbEIsSUFBaUMsT0FBTyxxQkFBUCxHQUFnQyxJQUFsRSxHQUF5RSxLQUF6RTs7QUFFZixJQUFJLGFBQUo7O0FBRUEsSUFBSSxNQUFKLEVBQVk7QUFDUixXQUFPLFVBQUMsUUFBRDtlQUFjLE9BQU8scUJBQVAsQ0FBNkIsUUFBN0I7S0FBZCxDQURDO0NBQVosTUFHTzs7Ozs7Ozs7Ozs7Ozs7O0FBZUgsWUFBSSxXQUFXLENBQVg7O0FBRUosZUFBTyxVQUFDLFFBQUQsRUFBYztBQUNqQixnQkFBTSxjQUFjLElBQUksSUFBSixHQUFXLE9BQVgsRUFBZCxDQURXO0FBRWpCLGdCQUFNLGFBQWEsS0FBSyxHQUFMLENBQVMsQ0FBVCxFQUFZLE1BQU0sY0FBYyxRQUFkLENBQU4sQ0FBekIsQ0FGVzs7QUFJakIsdUJBQVcsY0FBYyxVQUFkLENBSk07O0FBTWpCLHVCQUFXO3VCQUFNLFNBQVMsUUFBVDthQUFOLEVBQTBCLFVBQXJDLEVBTmlCO1NBQWQ7U0FqQko7Q0FIUDs7a0JBOEJlIiwiZmlsZSI6InRpY2suanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgICBEZXRlY3QgYW5kIGxvYWQgYW4gYXBwcm9wcmlhdGUgY2xvY2sgc2V0dGluZyBmb3IgdGhlIGVudmlyb25tZW50XG4qL1xuXG5jb25zdCBoYXNSQUYgPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSkgPyB0cnVlIDogZmFsc2U7XG5cbmxldCB0aWNrO1xuXG5pZiAoaGFzUkFGKSB7XG4gICAgdGljayA9IChjYWxsYmFjaykgPT4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShjYWxsYmFjayk7XG5cbn0gZWxzZSB7XG4gICAgLypcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHBvbHlmaWxsXG4gICAgICAgIFxuICAgICAgICBGb3IgSUU4LzkgRmxpbnN0b25lcyBhbmQgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRzXG5cbiAgICAgICAgVGFrZW4gZnJvbSBQYXVsIElyaXNoLiBXZSd2ZSBzdHJpcHBlZCBvdXQgY2FuY2VsQW5pbWF0aW9uRnJhbWUgY2hlY2tzIGJlY2F1c2Ugd2UgZG9uJ3QgZm94IHdpdGggdGhhdFxuICAgICAgICBcbiAgICAgICAgaHR0cDovL3BhdWxpcmlzaC5jb20vMjAxMS9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWFuaW1hdGluZy9cbiAgICAgICAgaHR0cDovL215Lm9wZXJhLmNvbS9lbW9sbGVyL2Jsb2cvMjAxMS8xMi8yMC9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWVyLWFuaW1hdGluZ1xuICAgICAgICAgXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbCBieSBFcmlrIE3DtmxsZXIuIGZpeGVzIGZyb20gUGF1bCBJcmlzaCBhbmQgVGlubyBaaWpkZWxcbiAgICAgICAgIFxuICAgICAgICBNSVQgbGljZW5zZVxuICAgICovXG4gICAgbGV0IGxhc3RUaW1lID0gMDtcblxuICAgIHRpY2sgPSAoY2FsbGJhY2spID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgY29uc3QgdGltZVRvQ2FsbCA9IE1hdGgubWF4KDAsIDE2IC0gKGN1cnJlbnRUaW1lIC0gbGFzdFRpbWUpKTtcblxuICAgICAgICBsYXN0VGltZSA9IGN1cnJlbnRUaW1lICsgdGltZVRvQ2FsbDtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGNhbGxiYWNrKGxhc3RUaW1lKSwgdGltZVRvQ2FsbCk7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdGljazsiXX0=

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	// [int]: Incremented for each new running task
	var currentTaskId = 0;
	
	// [int]: Number of all running taskes
	var totalRunningCount = 0;
	
	// [int]: Number of running taskes excluding background taskes
	var nonBackgroundRunningCount = 0;
	
	// [array]: Array of running task IDs
	var runningIds = [];
	
	// [object]: Map of running taskes
	var activeTasks = {};
	
	// [array]: Array of task IDs queued for activation
	var activateQueue = [];
	
	// [array]: Array of task IDs queued for deactivation
	var deactivateQueue = [];
	
	/*
	    Update activate/deactivate queues
	
	    @param [number]
	    @param [array]
	    @param [array]
	*/
	var updateQueues = function (id, inList, outList) {
	    var inPosition = inList.indexOf(id);
	    var outPosition = outList.indexOf(id);
	
	    if (inPosition === -1) {
	        inList.push(id);
	    }
	
	    if (outPosition > -1) {
	        outList.splice(outPosition, 1);
	    }
	};
	
	/*
	    Update running
	
	    [boolean]: `true` to add
	    [boolean]: `true` if lazy
	*/
	var updateRunningCount = function (add, isLazy) {
	    var modify = add ? 1 : -1;
	
	    totalRunningCount += modify;
	
	    if (!isLazy) {
	        nonBackgroundRunningCount += modify;
	    }
	};
	
	exports.default = {
	    activeTasks: activeTasks,
	
	    // Activate a task
	    activate: function (id, task) {
	        activeTasks[id] = task;
	        task.isActive = true;
	        updateQueues(id, activateQueue, deactivateQueue);
	
	        if (task.onActivate) {
	            task.onActivate(task);
	        }
	
	        if (task.onActivateOnce) {
	            task.onActivateOnce(task);
	        }
	    },
	
	    // Deactivate a task
	    deactivate: function (id) {
	        var task = activeTasks[id];
	
	        if (task) {
	            updateQueues(id, deactivateQueue, activateQueue);
	            task.isActive = false;
	
	            if (task.onDeactivate) {
	                task.onDeactivate(task);
	            }
	        }
	    },
	
	    // Number background taskes
	    getNonBackgroundRunningCount: function () {
	        return nonBackgroundRunningCount;
	    },
	
	    // Increment current task ID and return
	    getTaskId: function () {
	        return currentTaskId++;
	    },
	
	    // Resolve activate/deactivate taskes and return active ids
	    getActiveIds: function () {
	        /*
	            task deactivate queue
	        */
	        var deactivateQueueLength = deactivateQueue.length;
	
	        for (var i = 0; i < deactivateQueueLength; i++) {
	            var id = deactivateQueue[i];
	            var activeIdIndex = runningIds.indexOf(id);
	            var task = activeTasks[id];
	
	            // If this is a running task, deactivate
	            if (activeIdIndex > -1) {
	                runningIds.splice(activeIdIndex, 1);
	                updateRunningCount(false, task.isLazy);
	                delete activeTasks[id];
	            }
	        }
	
	        /*
	            Empty deactivate queue. We use `Array.splice` because it doesn't
	            works on the original array so we don't have to garbage collect anything
	        */
	        deactivateQueue.splice(0, deactivateQueueLength);
	
	        /*
	            task activate queue
	        */
	        var activateQueueLength = activateQueue.length;
	
	        for (var _i = 0; _i < activateQueueLength; _i++) {
	            var _id = activateQueue[_i];
	            var _activeIdIndex = runningIds.indexOf(_id);
	            var _task = activeTasks[_id];
	
	            // If task isn't already running, activate
	            if (_activeIdIndex === -1 && _task) {
	                if (_task.isPriority) {
	                    runningIds.unshift(_id);
	                } else {
	                    runningIds.push(_id);
	                }
	
	                if (_task.onActivateLoop) {
	                    _task.onActivateLoop();
	                }
	
	                updateRunningCount(true, _task.isLazy);
	            }
	        }
	
	        activateQueue.splice(0, activateQueueLength);
	
	        return runningIds;
	    }
	};
	//# sourceMappingURL=data:application/json;base64,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QXZCLEVBQTBCLHFCQUExQjs7Ozs7QUF2QmdCLFlBNEJWLHNCQUFzQixjQUFjLE1BQWQsQ0E1Qlo7O0FBOEJoQixhQUFLLElBQUksS0FBSSxDQUFKLEVBQU8sS0FBSSxtQkFBSixFQUF5QixJQUF6QyxFQUE4QztBQUMxQyxnQkFBTSxNQUFLLGNBQWMsRUFBZCxDQUFMLENBRG9DO0FBRTFDLGdCQUFNLGlCQUFnQixXQUFXLE9BQVgsQ0FBbUIsR0FBbkIsQ0FBaEIsQ0FGb0M7QUFHMUMsZ0JBQU0sUUFBTyxZQUFZLEdBQVosQ0FBUDs7O0FBSG9DLGdCQU10QyxtQkFBa0IsQ0FBQyxDQUFELElBQU0sS0FBeEIsRUFBOEI7QUFDOUIsb0JBQUksTUFBSyxVQUFMLEVBQWlCO0FBQ2pCLCtCQUFXLE9BQVgsQ0FBbUIsR0FBbkIsRUFEaUI7aUJBQXJCLE1BRU87QUFDSCwrQkFBVyxJQUFYLENBQWdCLEdBQWhCLEVBREc7aUJBRlA7O0FBTUEsb0JBQUksTUFBSyxjQUFMLEVBQXFCO0FBQ3JCLDBCQUFLLGNBQUwsR0FEcUI7aUJBQXpCOztBQUlBLG1DQUFtQixJQUFuQixFQUF5QixNQUFLLE1BQUwsQ0FBekIsQ0FYOEI7YUFBbEM7U0FOSjs7QUFxQkEsc0JBQWMsTUFBZCxDQUFxQixDQUFyQixFQUF3QixtQkFBeEIsRUFuRGdCOztBQXFEaEIsZUFBTyxVQUFQLENBckRnQjtLQUFOIiwiZmlsZSI6Im1hbmFnZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiLy8gW2ludF06IEluY3JlbWVudGVkIGZvciBlYWNoIG5ldyBydW5uaW5nIHRhc2tcbmxldCBjdXJyZW50VGFza0lkID0gMDtcblxuLy8gW2ludF06IE51bWJlciBvZiBhbGwgcnVubmluZyB0YXNrZXNcbmxldCB0b3RhbFJ1bm5pbmdDb3VudCA9IDA7XG5cbi8vIFtpbnRdOiBOdW1iZXIgb2YgcnVubmluZyB0YXNrZXMgZXhjbHVkaW5nIGJhY2tncm91bmQgdGFza2VzXG5sZXQgbm9uQmFja2dyb3VuZFJ1bm5pbmdDb3VudCA9IDA7XG5cbi8vIFthcnJheV06IEFycmF5IG9mIHJ1bm5pbmcgdGFzayBJRHNcbmNvbnN0IHJ1bm5pbmdJZHMgPSBbXTtcblxuLy8gW29iamVjdF06IE1hcCBvZiBydW5uaW5nIHRhc2tlc1xuY29uc3QgYWN0aXZlVGFza3MgPSB7fTtcblxuLy8gW2FycmF5XTogQXJyYXkgb2YgdGFzayBJRHMgcXVldWVkIGZvciBhY3RpdmF0aW9uXG5jb25zdCBhY3RpdmF0ZVF1ZXVlID0gW107XG5cbi8vIFthcnJheV06IEFycmF5IG9mIHRhc2sgSURzIHF1ZXVlZCBmb3IgZGVhY3RpdmF0aW9uXG5jb25zdCBkZWFjdGl2YXRlUXVldWUgPSBbXTtcblxuLypcbiAgICBVcGRhdGUgYWN0aXZhdGUvZGVhY3RpdmF0ZSBxdWV1ZXNcblxuICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgIEBwYXJhbSBbYXJyYXldXG4gICAgQHBhcmFtIFthcnJheV1cbiovXG5jb25zdCB1cGRhdGVRdWV1ZXMgPSAoaWQsIGluTGlzdCwgb3V0TGlzdCkgPT4ge1xuICAgIGNvbnN0IGluUG9zaXRpb24gPSBpbkxpc3QuaW5kZXhPZihpZCk7XG4gICAgY29uc3Qgb3V0UG9zaXRpb24gPSBvdXRMaXN0LmluZGV4T2YoaWQpO1xuXG4gICAgaWYgKGluUG9zaXRpb24gPT09IC0xKSB7XG4gICAgICAgIGluTGlzdC5wdXNoKGlkKTtcbiAgICB9XG5cbiAgICBpZiAob3V0UG9zaXRpb24gPiAtMSkge1xuICAgICAgICBvdXRMaXN0LnNwbGljZShvdXRQb3NpdGlvbiwgMSk7XG4gICAgfVxufTtcblxuLypcbiAgICBVcGRhdGUgcnVubmluZ1xuXG4gICAgW2Jvb2xlYW5dOiBgdHJ1ZWAgdG8gYWRkXG4gICAgW2Jvb2xlYW5dOiBgdHJ1ZWAgaWYgbGF6eVxuKi9cbmNvbnN0IHVwZGF0ZVJ1bm5pbmdDb3VudCA9IChhZGQsIGlzTGF6eSkgPT4ge1xuICAgIGNvbnN0IG1vZGlmeSA9IGFkZCA/IDEgOiAtMTtcblxuICAgIHRvdGFsUnVubmluZ0NvdW50ICs9IG1vZGlmeTtcblxuICAgIGlmICghaXNMYXp5KSB7XG4gICAgICAgIG5vbkJhY2tncm91bmRSdW5uaW5nQ291bnQgKz0gbW9kaWZ5O1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBhY3RpdmVUYXNrcyxcblxuICAgIC8vIEFjdGl2YXRlIGEgdGFza1xuICAgIGFjdGl2YXRlOiAoaWQsIHRhc2spID0+IHtcbiAgICAgICAgYWN0aXZlVGFza3NbaWRdID0gdGFzaztcbiAgICAgICAgdGFzay5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIHVwZGF0ZVF1ZXVlcyhpZCwgYWN0aXZhdGVRdWV1ZSwgZGVhY3RpdmF0ZVF1ZXVlKTtcblxuICAgICAgICBpZiAodGFzay5vbkFjdGl2YXRlKSB7XG4gICAgICAgICAgICB0YXNrLm9uQWN0aXZhdGUodGFzayk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGFzay5vbkFjdGl2YXRlT25jZSkge1xuICAgICAgICAgICAgdGFzay5vbkFjdGl2YXRlT25jZSh0YXNrKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBEZWFjdGl2YXRlIGEgdGFza1xuICAgIGRlYWN0aXZhdGU6IChpZCkgPT4ge1xuICAgICAgICBjb25zdCB0YXNrID0gYWN0aXZlVGFza3NbaWRdO1xuXG4gICAgICAgIGlmICh0YXNrKSB7XG4gICAgICAgICAgICB1cGRhdGVRdWV1ZXMoaWQsIGRlYWN0aXZhdGVRdWV1ZSwgYWN0aXZhdGVRdWV1ZSk7XG4gICAgICAgICAgICB0YXNrLmlzQWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmICh0YXNrLm9uRGVhY3RpdmF0ZSkge1xuICAgICAgICAgICAgICAgIHRhc2sub25EZWFjdGl2YXRlKHRhc2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIE51bWJlciBiYWNrZ3JvdW5kIHRhc2tlc1xuICAgIGdldE5vbkJhY2tncm91bmRSdW5uaW5nQ291bnQ6ICgpID0+IG5vbkJhY2tncm91bmRSdW5uaW5nQ291bnQsXG5cbiAgICAvLyBJbmNyZW1lbnQgY3VycmVudCB0YXNrIElEIGFuZCByZXR1cm5cbiAgICBnZXRUYXNrSWQ6ICgpID0+IGN1cnJlbnRUYXNrSWQrKyxcblxuICAgIC8vIFJlc29sdmUgYWN0aXZhdGUvZGVhY3RpdmF0ZSB0YXNrZXMgYW5kIHJldHVybiBhY3RpdmUgaWRzXG4gICAgZ2V0QWN0aXZlSWRzOiAoKSA9PiB7XG4gICAgICAgIC8qXG4gICAgICAgICAgICB0YXNrIGRlYWN0aXZhdGUgcXVldWVcbiAgICAgICAgKi9cbiAgICAgICAgY29uc3QgZGVhY3RpdmF0ZVF1ZXVlTGVuZ3RoID0gZGVhY3RpdmF0ZVF1ZXVlLmxlbmd0aDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlYWN0aXZhdGVRdWV1ZUxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBpZCA9IGRlYWN0aXZhdGVRdWV1ZVtpXTtcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZUlkSW5kZXggPSBydW5uaW5nSWRzLmluZGV4T2YoaWQpO1xuICAgICAgICAgICAgY29uc3QgdGFzayA9IGFjdGl2ZVRhc2tzW2lkXTtcblxuICAgICAgICAgICAgLy8gSWYgdGhpcyBpcyBhIHJ1bm5pbmcgdGFzaywgZGVhY3RpdmF0ZVxuICAgICAgICAgICAgaWYgKGFjdGl2ZUlkSW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgIHJ1bm5pbmdJZHMuc3BsaWNlKGFjdGl2ZUlkSW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZVJ1bm5pbmdDb3VudChmYWxzZSwgdGFzay5pc0xhenkpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBhY3RpdmVUYXNrc1tpZF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKlxuICAgICAgICAgICAgRW1wdHkgZGVhY3RpdmF0ZSBxdWV1ZS4gV2UgdXNlIGBBcnJheS5zcGxpY2VgIGJlY2F1c2UgaXQgZG9lc24ndFxuICAgICAgICAgICAgd29ya3Mgb24gdGhlIG9yaWdpbmFsIGFycmF5IHNvIHdlIGRvbid0IGhhdmUgdG8gZ2FyYmFnZSBjb2xsZWN0IGFueXRoaW5nXG4gICAgICAgICovXG4gICAgICAgIGRlYWN0aXZhdGVRdWV1ZS5zcGxpY2UoMCwgZGVhY3RpdmF0ZVF1ZXVlTGVuZ3RoKTtcblxuICAgICAgICAvKlxuICAgICAgICAgICAgdGFzayBhY3RpdmF0ZSBxdWV1ZVxuICAgICAgICAqL1xuICAgICAgICBjb25zdCBhY3RpdmF0ZVF1ZXVlTGVuZ3RoID0gYWN0aXZhdGVRdWV1ZS5sZW5ndGg7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY3RpdmF0ZVF1ZXVlTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gYWN0aXZhdGVRdWV1ZVtpXTtcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZUlkSW5kZXggPSBydW5uaW5nSWRzLmluZGV4T2YoaWQpO1xuICAgICAgICAgICAgY29uc3QgdGFzayA9IGFjdGl2ZVRhc2tzW2lkXTtcblxuICAgICAgICAgICAgLy8gSWYgdGFzayBpc24ndCBhbHJlYWR5IHJ1bm5pbmcsIGFjdGl2YXRlXG4gICAgICAgICAgICBpZiAoYWN0aXZlSWRJbmRleCA9PT0gLTEgJiYgdGFzaykge1xuICAgICAgICAgICAgICAgIGlmICh0YXNrLmlzUHJpb3JpdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ0lkcy51bnNoaWZ0KGlkKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBydW5uaW5nSWRzLnB1c2goaWQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0YXNrLm9uQWN0aXZhdGVMb29wKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2sub25BY3RpdmF0ZUxvb3AoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB1cGRhdGVSdW5uaW5nQ291bnQodHJ1ZSwgdGFzay5pc0xhenkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYWN0aXZhdGVRdWV1ZS5zcGxpY2UoMCwgYWN0aXZhdGVRdWV1ZUxlbmd0aCk7XG5cbiAgICAgICAgcmV0dXJuIHJ1bm5pbmdJZHM7XG4gICAgfVxufTtcbiJdfQ==

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDdjODRhZjU5MzFlMDc2MWRhYzciLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvYWQvZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9wb3Btb3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rhc2svdGltZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvQWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL0Zsb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvVHdlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvUGh5c2ljcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9UcmFjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGFzay9UYXNrLmpzIiwid2VicGFjazovLy8uL3NyYy9pbnB1dC9JbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL3N0YWdnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy90aW1lbGluZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9hZGFwdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hZGFwdGVyL2F0dHItYWRhcHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9jc3MtYWRhcHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9vYmplY3QtYWRhcHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9zdmctYWRhcHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9zdmctcGF0aC1hZGFwdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2Vhc2luZy9wcmVzZXQtZWFzaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2Zsb3cvZ2V0LWZsb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy9jYWxjLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL2FscGhhLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9hbmdsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvY29sb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL2NvbXBsZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL2hleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvaHNsLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9weC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvcmdiLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9zY2FsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvc2hhZG93LmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy91bml0LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvdHJhbnNmb3JtZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9kZXRlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy9udW1lcmljYWwtdmFsdWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvZGV0ZWN0LWFkYXB0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvZmxvdy9nZW5lcmF0ZS1ibGVuZC1jdXJ2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5wdXQvUG9pbnRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGFzay9sb29wLmpzIiwid2VicGFjazovLy8uL3NyYy9hZGFwdGVyL2Nzcy9zdGF0ZS1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkYXB0ZXIvY3NzL3ZhbHVlLXR5cGUtbWFwLmpzIiwid2VicGFjazovLy8uL3NyYy9hZGFwdGVyL2Nzcy9idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9jc3MvcHJlZml4ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkYXB0ZXIvY3NzL3RyYW5zZm9ybS1wcm9wcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9zdmcvdmFsdWUtdHlwZS1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkYXB0ZXIvc3ZnL2J1aWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9hZGFwdGVyL3N2Zy1wYXRoL2J1aWxkLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kZWZhdWx0LXByb3BzLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kaWN0aW9uYXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2Vhc2luZy9jcmVhdGUtZWFzaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2Vhc2luZy9jcmVhdGUtYmV6aWVyLmpzIiwid2VicGFjazovLy8uL3NyYy90YXNrL3RpY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rhc2svbWFuYWdlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx3Qzs7Ozs7OztBQ3RDQTs7QUFFQTs7QUFFQTs7QUFFQSx3Q0FBdUMsNkJBQTZCLFlBQVksRUFBRSxPQUFPLGlCQUFpQixtQkFBbUIsdUJBQXVCLDRFQUE0RSxFQUFFLEVBQUUsc0JBQXNCLGVBQWUsRUFBRTs7QUFFM1E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTJDLG1xQjs7Ozs7O0FDZjNDOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7O0FBRUE7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QTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBMkMsdXBlOzs7Ozs7QUM5VDNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FB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LHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBMkMsKytCOzs7Ozs7QUNsQzNDOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBMkMsbW1KOzs7Ozs7QUN6RDNDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBMkMsMnVGOzs7Ozs7QUM5QzNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTJDLHV3Qjs7Ozs7O0FDbkIzQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTJDLDJxQzs7Ozs7O0FDWjNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FB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QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBMkMsMjdRIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgMDdjODRhZjU5MzFlMDc2MWRhYzdcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfcG9wbW90aW9uID0gcmVxdWlyZSgnLi4vcG9wbW90aW9uJyk7XG5cbnZhciBwb3Btb3Rpb24gPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfcG9wbW90aW9uKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxudmFyIFVJcmVmID0gd2luZG93Lm1vdGlvbjtcblxucG9wbW90aW9uLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgd2luZG93Lm1vdGlvbiA9IFVJcmVmO1xufTtcblxud2luZG93Lm1vdGlvbiA9IHdpbmRvdy5wb3Btb3Rpb24gPSBwb3Btb3Rpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXNiMkZrTDJkc2IySmhiQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVRkJPenRKUVVGWk96czdPMEZCUlZvc1NVRkJUU3hSUVVGUkxFOUJRVThzVFVGQlVEczdRVUZGWkN4VlFVRlZMRlZCUVZZc1IwRkJkVUlzV1VGQldUdEJRVU12UWl4WFFVRlBMRTFCUVZBc1IwRkJaMElzUzBGQmFFSXNRMEZFSzBJN1EwRkJXanM3UVVGSmRrSXNUMEZCVHl4TlFVRlFMRWRCUVdkQ0xFOUJRVThzVTBGQlVDeEhRVUZ0UWl4VFFVRnVRaUlzSW1acGJHVWlPaUpuYkc5aVlXd3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFF2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJQ29nWVhNZ2NHOXdiVzkwYVc5dUlHWnliMjBnSnk0dUwzQnZjRzF2ZEdsdmJpYzdYRzVjYm1OdmJuTjBJRlZKY21WbUlEMGdkMmx1Wkc5M0xtMXZkR2x2Ymp0Y2JseHVjRzl3Ylc5MGFXOXVMbTV2UTI5dVpteHBZM1FnUFNCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ2QybHVaRzkzTG0xdmRHbHZiaUE5SUZWSmNtVm1PMXh1ZlR0Y2JseHVkMmx1Wkc5M0xtMXZkR2x2YmlBOUlIZHBibVJ2ZHk1d2IzQnRiM1JwYjI0Z1BTQndiM0J0YjNScGIyNDdJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9sb2FkL2dsb2JhbC5qc1xuICoqIG1vZHVsZSBpZCA9IDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuQWN0aW9uID0gZXhwb3J0cy50cmFuc2Zvcm1lcnMgPSBleHBvcnRzLnZhbHVlVHlwZSA9IGV4cG9ydHMuc2V0R2xvYmFsRGlsYXRpb24gPSBleHBvcnRzLnV0aWxzID0gZXhwb3J0cy5jYWxjID0gZXhwb3J0cy5kZXRlY3RGbG93ID0gZXhwb3J0cy5lYXNpbmcgPSBleHBvcnRzLnN2Z1BhdGggPSBleHBvcnRzLnN2ZyA9IGV4cG9ydHMub2JqZWN0ID0gZXhwb3J0cy5jc3MgPSBleHBvcnRzLmF0dHIgPSBleHBvcnRzLmNyZWF0ZUFkYXB0ZXIgPSBleHBvcnRzLnRpbWVsaW5lID0gZXhwb3J0cy5zdGFnZ2VyID0gZXhwb3J0cy50YXNrID0gZXhwb3J0cy5pbnB1dCA9IGV4cG9ydHMudHJhY2sgPSBleHBvcnRzLnBoeXNpY3MgPSBleHBvcnRzLnR3ZWVuID0gZXhwb3J0cy5mbG93ID0gdW5kZWZpbmVkO1xuXG52YXIgX3RpbWVyID0gcmVxdWlyZSgnLi90YXNrL3RpbWVyJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnc2V0R2xvYmFsRGlsYXRpb24nLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aW1lci5zZXRHbG9iYWxEaWxhdGlvbjtcbiAgICB9XG59KTtcblxudmFyIF9BY3Rpb24gPSByZXF1aXJlKCcuL2FjdGlvbnMvQWN0aW9uJyk7XG5cbnZhciBfQWN0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0FjdGlvbik7XG5cbnZhciBfRmxvdyA9IHJlcXVpcmUoJy4vYWN0aW9ucy9GbG93Jyk7XG5cbnZhciBfRmxvdzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9GbG93KTtcblxudmFyIF9Ud2VlbiA9IHJlcXVpcmUoJy4vYWN0aW9ucy9Ud2VlbicpO1xuXG52YXIgX1R3ZWVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1R3ZWVuKTtcblxudmFyIF9QaHlzaWNzID0gcmVxdWlyZSgnLi9hY3Rpb25zL1BoeXNpY3MnKTtcblxudmFyIF9QaHlzaWNzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BoeXNpY3MpO1xuXG52YXIgX1RyYWNrID0gcmVxdWlyZSgnLi9hY3Rpb25zL1RyYWNrJyk7XG5cbnZhciBfVHJhY2syID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVHJhY2spO1xuXG52YXIgX1Rhc2sgPSByZXF1aXJlKCcuL3Rhc2svVGFzaycpO1xuXG52YXIgX1Rhc2syID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVGFzayk7XG5cbnZhciBfSW5wdXQgPSByZXF1aXJlKCcuL2lucHV0L0lucHV0Jyk7XG5cbnZhciBfSW5wdXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfSW5wdXQpO1xuXG52YXIgX3N0YWdnZXIyID0gcmVxdWlyZSgnLi9pbmMvc3RhZ2dlcicpO1xuXG52YXIgX3N0YWdnZXIzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RhZ2dlcjIpO1xuXG52YXIgX3RpbWVsaW5lMiA9IHJlcXVpcmUoJy4vaW5jL3RpbWVsaW5lJyk7XG5cbnZhciBfdGltZWxpbmUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdGltZWxpbmUyKTtcblxudmFyIF9hZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVyL2FkYXB0ZXInKTtcblxudmFyIF9hZGFwdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FkYXB0ZXIpO1xuXG52YXIgX2F0dHJBZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVyL2F0dHItYWRhcHRlcicpO1xuXG52YXIgX2F0dHJBZGFwdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2F0dHJBZGFwdGVyKTtcblxudmFyIF9jc3NBZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVyL2Nzcy1hZGFwdGVyJyk7XG5cbnZhciBfY3NzQWRhcHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jc3NBZGFwdGVyKTtcblxudmFyIF9vYmplY3RBZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVyL29iamVjdC1hZGFwdGVyJyk7XG5cbnZhciBfb2JqZWN0QWRhcHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3RBZGFwdGVyKTtcblxudmFyIF9zdmdBZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVyL3N2Zy1hZGFwdGVyJyk7XG5cbnZhciBfc3ZnQWRhcHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdmdBZGFwdGVyKTtcblxudmFyIF9zdmdQYXRoQWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlci9zdmctcGF0aC1hZGFwdGVyJyk7XG5cbnZhciBfc3ZnUGF0aEFkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ZnUGF0aEFkYXB0ZXIpO1xuXG52YXIgX3ByZXNldEVhc2luZyA9IHJlcXVpcmUoJy4vYWN0aW9ucy9lYXNpbmcvcHJlc2V0LWVhc2luZycpO1xuXG52YXIgX3ByZXNldEVhc2luZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmVzZXRFYXNpbmcpO1xuXG52YXIgX2dldEZsb3cgPSByZXF1aXJlKCcuL2FjdGlvbnMvZmxvdy9nZXQtZmxvdycpO1xuXG52YXIgX2dldEZsb3cyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0Rmxvdyk7XG5cbnZhciBfY2FsYzIgPSByZXF1aXJlKCcuL2luYy9jYWxjJyk7XG5cbnZhciBfY2FsYyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9jYWxjMik7XG5cbnZhciBfdXRpbHMyID0gcmVxdWlyZSgnLi9pbmMvdXRpbHMnKTtcblxudmFyIF91dGlscyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF91dGlsczIpO1xuXG52YXIgX2FscGhhID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy9hbHBoYScpO1xuXG52YXIgX2FscGhhMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FscGhhKTtcblxudmFyIF9hbmdsZSA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvYW5nbGUnKTtcblxudmFyIF9hbmdsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hbmdsZSk7XG5cbnZhciBfY29sb3IgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL2NvbG9yJyk7XG5cbnZhciBfY29sb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29sb3IpO1xuXG52YXIgX2NvbXBsZXggPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL2NvbXBsZXgnKTtcblxudmFyIF9jb21wbGV4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbXBsZXgpO1xuXG52YXIgX2hleCA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvaGV4Jyk7XG5cbnZhciBfaGV4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hleCk7XG5cbnZhciBfaHNsID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy9oc2wnKTtcblxudmFyIF9oc2wyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaHNsKTtcblxudmFyIF9weCA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvcHgnKTtcblxudmFyIF9weDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9weCk7XG5cbnZhciBfcmdiID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy9yZ2InKTtcblxudmFyIF9yZ2IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmdiKTtcblxudmFyIF9zY2FsZSA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvc2NhbGUnKTtcblxudmFyIF9zY2FsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zY2FsZSk7XG5cbnZhciBfc2hhZG93ID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy9zaGFkb3cnKTtcblxudmFyIF9zaGFkb3cyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2hhZG93KTtcblxudmFyIF91bml0ID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy91bml0Jyk7XG5cbnZhciBfdW5pdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91bml0KTtcblxudmFyIF90cmFuc2Zvcm1lcnMyID0gcmVxdWlyZSgnLi9pbmMvdHJhbnNmb3JtZXJzJyk7XG5cbnZhciBfdHJhbnNmb3JtZXJzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3RyYW5zZm9ybWVyczIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vLyBFeHBvcnQgZmFjdG9yeSBmdW5jdGlvbnNcbnZhciBmbG93ID0gZXhwb3J0cy5mbG93ID0gZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoX0Zsb3cyLmRlZmF1bHQsIFtudWxsXS5jb25jYXQoYXJncykpKSgpO1xufTsgLy8gSW1wb3J0IGNsYXNzZXMgLSBsb25nIHRlcm0gZ29hbCB0byBtb3ZlIHRvd2FyZHMgY29tcG9zaXRpb25cblxudmFyIHR3ZWVuID0gZXhwb3J0cy50d2VlbiA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHJldHVybiBuZXcgX1R3ZWVuMi5kZWZhdWx0KHByb3BzKTtcbn07XG52YXIgcGh5c2ljcyA9IGV4cG9ydHMucGh5c2ljcyA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHJldHVybiBuZXcgX1BoeXNpY3MyLmRlZmF1bHQocHJvcHMpO1xufTtcbnZhciB0cmFjayA9IGV4cG9ydHMudHJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KF9UcmFjazIuZGVmYXVsdCwgW251bGxdLmNvbmNhdChhcmdzKSkpKCk7XG59O1xudmFyIGlucHV0ID0gZXhwb3J0cy5pbnB1dCA9IGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMyksIF9rZXkzID0gMDsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgICAgICBhcmdzW19rZXkzXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoX0lucHV0Mi5kZWZhdWx0LCBbbnVsbF0uY29uY2F0KGFyZ3MpKSkoKTtcbn07XG52YXIgdGFzayA9IGV4cG9ydHMudGFzayA9IGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBfbGVuNCA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuNCksIF9rZXk0ID0gMDsgX2tleTQgPCBfbGVuNDsgX2tleTQrKykge1xuICAgICAgICBhcmdzW19rZXk0XSA9IGFyZ3VtZW50c1tfa2V5NF07XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoX1Rhc2syLmRlZmF1bHQsIFtudWxsXS5jb25jYXQoYXJncykpKSgpO1xufTtcbmV4cG9ydHMuc3RhZ2dlciA9IF9zdGFnZ2VyMy5kZWZhdWx0O1xuZXhwb3J0cy50aW1lbGluZSA9IF90aW1lbGluZTMuZGVmYXVsdDtcblxuLy8gQWRhcHRlcnNcblxuZXhwb3J0cy5jcmVhdGVBZGFwdGVyID0gX2FkYXB0ZXIyLmRlZmF1bHQ7XG5leHBvcnRzLmF0dHIgPSBfYXR0ckFkYXB0ZXIyLmRlZmF1bHQ7XG5leHBvcnRzLmNzcyA9IF9jc3NBZGFwdGVyMi5kZWZhdWx0O1xuZXhwb3J0cy5vYmplY3QgPSBfb2JqZWN0QWRhcHRlcjIuZGVmYXVsdDtcbmV4cG9ydHMuc3ZnID0gX3N2Z0FkYXB0ZXIyLmRlZmF1bHQ7XG5leHBvcnRzLnN2Z1BhdGggPSBfc3ZnUGF0aEFkYXB0ZXIyLmRlZmF1bHQ7XG5cbi8vIEVhc2luZ1xuXG5leHBvcnRzLmVhc2luZyA9IF9wcmVzZXRFYXNpbmcyLmRlZmF1bHQ7XG52YXIgZGV0ZWN0RmxvdyA9IGV4cG9ydHMuZGV0ZWN0RmxvdyA9IF9nZXRGbG93Mi5kZWZhdWx0O1xuXG4vLyBVdGlsc1xuZXhwb3J0cy5jYWxjID0gX2NhbGM7XG5leHBvcnRzLnV0aWxzID0gX3V0aWxzO1xuXG4vLyBWYWx1ZSB0eXBlc1xuXG52YXIgdmFsdWVUeXBlID0gZXhwb3J0cy52YWx1ZVR5cGUgPSB7IGFscGhhOiBfYWxwaGEyLmRlZmF1bHQsIGFuZ2xlOiBfYW5nbGUyLmRlZmF1bHQsIGNvbG9yOiBfY29sb3IyLmRlZmF1bHQsIGNvbXBsZXg6IF9jb21wbGV4Mi5kZWZhdWx0LCBoZXg6IF9oZXgyLmRlZmF1bHQsIGhzbDogX2hzbDIuZGVmYXVsdCwgcHg6IF9weDIuZGVmYXVsdCwgcmdiOiBfcmdiMi5kZWZhdWx0LCBzY2FsZTogX3NjYWxlMi5kZWZhdWx0LCBzaGFkb3c6IF9zaGFkb3cyLmRlZmF1bHQsIHVuaXQ6IF91bml0Mi5kZWZhdWx0IH07XG5cbi8vIFRyYW5zZm9ybWVyc1xuZXhwb3J0cy50cmFuc2Zvcm1lcnMgPSBfdHJhbnNmb3JtZXJzO1xuXG4vKlxuICAgIFJldHVybnMgYSB2ZXJzaW9uIG9mIHRoZSBBY3Rpb24gYm91bmQgdG8gYSBGbG93XG5cbiAgICBXZSdyZSBhZGRpbmcgYG9uYCBoZXJlIGJlY2F1c2UgRmxvdyBleHRlbmRzIEFjdGlvbixcbiAgICBvdGhlcndpc2UgY3JlYXRpbmcgYSBjaXJjdWxhciBtb2R1bGFyIGRlcGVuZGVuY3kuIEZ1dHVyZVxuICAgIHJlZmFjdG9yaW5nLCBpZSBtb3ZpbmcgdG8gYSBjb21wb3NpdGlvbmFsIG1vZGVsIHdpbGxcbiAgICByZW1vdmUgdGhlIG5lZWQgZm9yIHVzIHRvIGRvIHRoaXMgaGVyZS5cbiovXG5cbl9BY3Rpb24yLmRlZmF1bHQucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICBpZiAoIWVsZW1lbnQuY29ubmVjdCkge1xuICAgICAgICBlbGVtZW50ID0gKDAsIF9nZXRGbG93Mi5kZWZhdWx0KShlbGVtZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudC5jb25uZWN0KHRoaXMpO1xufTtcblxuZXhwb3J0cy5BY3Rpb24gPSBfQWN0aW9uMi5kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl3YjNCdGIzUnBiMjR1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3T3p0elFrRnRRMU03T3pzN1FVRnNRMVE3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3TzBGQlEwRTdPenM3UVVGRFFUczdPenRCUVVOQk96czdPMEZCUTBFN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdRVUZ6UWtFN096czdPenM3T3pzN096dEJRVk5CT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3TzBGQlEwRTdPenM3UVVGRFFUczdPenRCUVVOQk96czdPMEZCUTBFN096czdRVUZEUVRzN096dEJRVU5CT3pzN08wRkJRMEU3T3pzN096czdPenM3T3pzN1FVRjBRMDhzU1VGQlRTeHpRa0ZCVHp0elEwRkJTVHM3T3pzMFJVRkJjVUk3UTBGQmVrSTdPMEZCUTJJc1NVRkJUU3gzUWtGQlVTeFZRVUZETEV0QlFVUTdWMEZCVnl4dlFrRkJWU3hMUVVGV08wTkJRVmc3UVVGRFpDeEpRVUZOTERSQ1FVRlZMRlZCUVVNc1MwRkJSRHRYUVVGWExITkNRVUZaTEV0QlFWbzdRMEZCV0R0QlFVTm9RaXhKUVVGTkxIZENRVUZSTzNWRFFVRkpPenM3T3paRlFVRnpRanREUVVFeFFqdEJRVU5rTEVsQlFVMHNkMEpCUVZFN2RVTkJRVWs3T3pzN05rVkJRWE5DTzBOQlFURkNPMEZCUTJRc1NVRkJUU3h6UWtGQlR6dDFRMEZCU1RzN096czBSVUZCY1VJN1EwRkJla0k3VVVGRFlqdFJRVU5CT3pzN08xRkJSMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPenM3TzFGQlIwRTdRVUZGUVN4SlFVRk5MRzFFUVVGT096czdVVUZIU3p0UlFVTkJPenM3TzBGQlpVd3NTVUZCVFN4blEwRkJXU3hGUVVGRkxITkNRVUZHTEVWQlFWTXNjMEpCUVZRc1JVRkJaMElzYzBKQlFXaENMRVZCUVhWQ0xEQkNRVUYyUWl4RlFVRm5ReXhyUWtGQmFFTXNSVUZCY1VNc2EwSkJRWEpETEVWQlFUQkRMR2RDUVVFeFF5eEZRVUU0UXl4clFrRkJPVU1zUlVGQmJVUXNjMEpCUVc1RUxFVkJRVEJFTEhkQ1FVRXhSQ3hGUVVGclJTeHZRa0ZCYkVVc1JVRkJXanM3TzFGQlIwUTdPenM3T3pzN096czdPMEZCVlZvc2FVSkJRVThzVTBGQlVDeERRVUZwUWl4RlFVRnFRaXhIUVVGelFpeFZRVUZWTEU5QlFWWXNSVUZCYlVJN1FVRkRja01zVVVGQlNTeERRVUZETEZGQlFWRXNUMEZCVWl4RlFVRnBRanRCUVVOc1FpeHJRa0ZCVlN4MVFrRkJVU3hQUVVGU0xFTkJRVllzUTBGRWEwSTdTMEZCZEVJN08wRkJTVUVzVjBGQlR5eFJRVUZSTEU5QlFWSXNRMEZCWjBJc1NVRkJhRUlzUTBGQlVDeERRVXh4UXp0RFFVRnVRanM3VVVGUllpSXNJbVpwYkdVaU9pSndiM0J0YjNScGIyNHVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFF2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTHk4Z1NXMXdiM0owSUdOc1lYTnpaWE1nTFNCc2IyNW5JSFJsY20wZ1oyOWhiQ0IwYnlCdGIzWmxJSFJ2ZDJGeVpITWdZMjl0Y0c5emFYUnBiMjVjYm1sdGNHOXlkQ0JCWTNScGIyNGdabkp2YlNBbkxpOWhZM1JwYjI1ekwwRmpkR2x2YmljN1hHNXBiWEJ2Y25RZ1JteHZkeUJtY205dElDY3VMMkZqZEdsdmJuTXZSbXh2ZHljN1hHNXBiWEJ2Y25RZ1ZIZGxaVzRnWm5KdmJTQW5MaTloWTNScGIyNXpMMVIzWldWdUp6dGNibWx0Y0c5eWRDQlFhSGx6YVdOeklHWnliMjBnSnk0dllXTjBhVzl1Y3k5UWFIbHphV056Snp0Y2JtbHRjRzl5ZENCVWNtRmpheUJtY205dElDY3VMMkZqZEdsdmJuTXZWSEpoWTJzbk8xeHVhVzF3YjNKMElGUmhjMnNnWm5KdmJTQW5MaTkwWVhOckwxUmhjMnNuTzF4dWFXMXdiM0owSUVsdWNIVjBJR1p5YjIwZ0p5NHZhVzV3ZFhRdlNXNXdkWFFuTzF4dVhHNHZMeUJGZUhCdmNuUWdabUZqZEc5eWVTQm1kVzVqZEdsdmJuTmNibVY0Y0c5eWRDQmpiMjV6ZENCbWJHOTNJRDBnS0M0dUxtRnlaM01wSUQwK0lHNWxkeUJHYkc5M0tDNHVMbUZ5WjNNcE8xeHVaWGh3YjNKMElHTnZibk4wSUhSM1pXVnVJRDBnS0hCeWIzQnpLU0E5UGlCdVpYY2dWSGRsWlc0b2NISnZjSE1wTzF4dVpYaHdiM0owSUdOdmJuTjBJSEJvZVhOcFkzTWdQU0FvY0hKdmNITXBJRDArSUc1bGR5QlFhSGx6YVdOektIQnliM0J6S1R0Y2JtVjRjRzl5ZENCamIyNXpkQ0IwY21GamF5QTlJQ2d1TGk1aGNtZHpLU0E5UGlCdVpYY2dWSEpoWTJzb0xpNHVZWEpuY3lrN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnYVc1d2RYUWdQU0FvTGk0dVlYSm5jeWtnUFQ0Z2JtVjNJRWx1Y0hWMEtDNHVMbUZ5WjNNcE8xeHVaWGh3YjNKMElHTnZibk4wSUhSaGMyc2dQU0FvTGk0dVlYSm5jeWtnUFQ0Z2JtVjNJRlJoYzJzb0xpNHVZWEpuY3lrN1hHNWxlSEJ2Y25RZ2MzUmhaMmRsY2lCbWNtOXRJQ2N1TDJsdVl5OXpkR0ZuWjJWeUp6dGNibVY0Y0c5eWRDQjBhVzFsYkdsdVpTQm1jbTl0SUNjdUwybHVZeTkwYVcxbGJHbHVaU2M3WEc1Y2JpOHZJRUZrWVhCMFpYSnpYRzVsZUhCdmNuUWdZM0psWVhSbFFXUmhjSFJsY2lCbWNtOXRJQ2N1TDJGa1lYQjBaWEl2WVdSaGNIUmxjaWM3WEc1bGVIQnZjblFnWVhSMGNpQm1jbTl0SUNjdUwyRmtZWEIwWlhJdllYUjBjaTFoWkdGd2RHVnlKenRjYm1WNGNHOXlkQ0JqYzNNZ1puSnZiU0FuTGk5aFpHRndkR1Z5TDJOemN5MWhaR0Z3ZEdWeUp6dGNibVY0Y0c5eWRDQnZZbXBsWTNRZ1puSnZiU0FuTGk5aFpHRndkR1Z5TDI5aWFtVmpkQzFoWkdGd2RHVnlKenRjYm1WNGNHOXlkQ0J6ZG1jZ1puSnZiU0FuTGk5aFpHRndkR1Z5TDNOMlp5MWhaR0Z3ZEdWeUp6dGNibVY0Y0c5eWRDQnpkbWRRWVhSb0lHWnliMjBnSnk0dllXUmhjSFJsY2k5emRtY3RjR0YwYUMxaFpHRndkR1Z5Snp0Y2JseHVMeThnUldGemFXNW5YRzVsZUhCdmNuUWdaV0Z6YVc1bklHWnliMjBnSnk0dllXTjBhVzl1Y3k5bFlYTnBibWN2Y0hKbGMyVjBMV1ZoYzJsdVp5YzdYRzVwYlhCdmNuUWdaMlYwUm14dmR5Qm1jbTl0SUNjdUwyRmpkR2x2Ym5NdlpteHZkeTluWlhRdFpteHZkeWM3WEc1bGVIQnZjblFnWTI5dWMzUWdaR1YwWldOMFJteHZkeUE5SUdkbGRFWnNiM2M3WEc1Y2JpOHZJRlYwYVd4elhHNWxlSEJ2Y25RZ0tpQmhjeUJqWVd4aklHWnliMjBnSnk0dmFXNWpMMk5oYkdNbk8xeHVaWGh3YjNKMElDb2dZWE1nZFhScGJITWdabkp2YlNBbkxpOXBibU12ZFhScGJITW5PMXh1Wlhod2IzSjBJSHNnYzJWMFIyeHZZbUZzUkdsc1lYUnBiMjRnZlNCbWNtOXRJQ2N1TDNSaGMyc3ZkR2x0WlhJbk8xeHVYRzR2THlCV1lXeDFaU0IwZVhCbGMxeHVhVzF3YjNKMElHRnNjR2hoSUdaeWIyMGdKeTR2ZG1Gc2RXVXRkSGx3WlhNdllXeHdhR0VuTzF4dWFXMXdiM0owSUdGdVoyeGxJR1p5YjIwZ0p5NHZkbUZzZFdVdGRIbHdaWE12WVc1bmJHVW5PMXh1YVcxd2IzSjBJR052Ykc5eUlHWnliMjBnSnk0dmRtRnNkV1V0ZEhsd1pYTXZZMjlzYjNJbk8xeHVhVzF3YjNKMElHTnZiWEJzWlhnZ1puSnZiU0FuTGk5MllXeDFaUzEwZVhCbGN5OWpiMjF3YkdWNEp6dGNibWx0Y0c5eWRDQm9aWGdnWm5KdmJTQW5MaTkyWVd4MVpTMTBlWEJsY3k5b1pYZ25PMXh1YVcxd2IzSjBJR2h6YkNCbWNtOXRJQ2N1TDNaaGJIVmxMWFI1Y0dWekwyaHpiQ2M3WEc1cGJYQnZjblFnY0hnZ1puSnZiU0FuTGk5MllXeDFaUzEwZVhCbGN5OXdlQ2M3WEc1cGJYQnZjblFnY21kaUlHWnliMjBnSnk0dmRtRnNkV1V0ZEhsd1pYTXZjbWRpSnp0Y2JtbHRjRzl5ZENCelkyRnNaU0JtY205dElDY3VMM1poYkhWbExYUjVjR1Z6TDNOallXeGxKenRjYm1sdGNHOXlkQ0J6YUdGa2IzY2dabkp2YlNBbkxpOTJZV3gxWlMxMGVYQmxjeTl6YUdGa2IzY25PMXh1YVcxd2IzSjBJSFZ1YVhRZ1puSnZiU0FuTGk5MllXeDFaUzEwZVhCbGN5OTFibWwwSnp0Y2JtVjRjRzl5ZENCamIyNXpkQ0IyWVd4MVpWUjVjR1VnUFNCN0lHRnNjR2hoTENCaGJtZHNaU3dnWTI5c2IzSXNJR052YlhCc1pYZ3NJR2hsZUN3Z2FITnNMQ0J3ZUN3Z2NtZGlMQ0J6WTJGc1pTd2djMmhoWkc5M0xDQjFibWwwSUgwN1hHNWNiaTh2SUZSeVlXNXpabTl5YldWeWMxeHVaWGh3YjNKMElDb2dZWE1nZEhKaGJuTm1iM0p0WlhKeklHWnliMjBnSnk0dmFXNWpMM1J5WVc1elptOXliV1Z5Y3ljN1hHNWNiaThxWEc0Z0lDQWdVbVYwZFhKdWN5QmhJSFpsY25OcGIyNGdiMllnZEdobElFRmpkR2x2YmlCaWIzVnVaQ0IwYnlCaElFWnNiM2RjYmx4dUlDQWdJRmRsSjNKbElHRmtaR2x1WnlCZ2IyNWdJR2hsY21VZ1ltVmpZWFZ6WlNCR2JHOTNJR1Y0ZEdWdVpITWdRV04wYVc5dUxGeHVJQ0FnSUc5MGFHVnlkMmx6WlNCamNtVmhkR2x1WnlCaElHTnBjbU4xYkdGeUlHMXZaSFZzWVhJZ1pHVndaVzVrWlc1amVTNGdSblYwZFhKbFhHNGdJQ0FnY21WbVlXTjBiM0pwYm1jc0lHbGxJRzF2ZG1sdVp5QjBieUJoSUdOdmJYQnZjMmwwYVc5dVlXd2diVzlrWld3Z2QybHNiRnh1SUNBZ0lISmxiVzkyWlNCMGFHVWdibVZsWkNCbWIzSWdkWE1nZEc4Z1pHOGdkR2hwY3lCb1pYSmxMbHh1S2k5Y2JrRmpkR2x2Ymk1d2NtOTBiM1I1Y0dVdWIyNGdQU0JtZFc1amRHbHZiaUFvWld4bGJXVnVkQ2tnZTF4dUlDQWdJR2xtSUNnaFpXeGxiV1Z1ZEM1amIyNXVaV04wS1NCN1hHNGdJQ0FnSUNBZ0lHVnNaVzFsYm5RZ1BTQm5aWFJHYkc5M0tHVnNaVzFsYm5RcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhKbGRIVnliaUJsYkdWdFpXNTBMbU52Ym01bFkzUW9kR2hwY3lrN1hHNTlPMXh1WEc1bGVIQnZjblFnZXlCQlkzUnBiMjRnZlRzaVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3BvcG1vdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuc2V0R2xvYmFsRGlsYXRpb24gPSB1bmRlZmluZWQ7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxudmFyIE1BWF9FTEFQU0VEID0gMzM7XG5cbnZhciBjdXJyZW50ID0gMDtcbnZhciBlbGFwc2VkID0gMTYuNztcbnZhciBkaWxhdGlvbiA9IDE7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChmcmFtZXN0YW1wKSB7XG4gICAgICAgIGVsYXBzZWQgPSBNYXRoLm1heChNYXRoLm1pbihmcmFtZXN0YW1wIC0gY3VycmVudCwgTUFYX0VMQVBTRUQpLCAxKSAqIGRpbGF0aW9uO1xuICAgICAgICBjdXJyZW50ID0gZnJhbWVzdGFtcDtcbiAgICB9LFxuXG4gICAgc3RhcnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnQgPSAoMCwgX3V0aWxzLmN1cnJlbnRUaW1lKSgpO1xuICAgIH0sXG5cbiAgICBnZXRFbGFwc2VkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBlbGFwc2VkO1xuICAgIH1cbn07XG52YXIgc2V0R2xvYmFsRGlsYXRpb24gPSBleHBvcnRzLnNldEdsb2JhbERpbGF0aW9uID0gZnVuY3Rpb24gKG5ld0RpbGF0aW9uKSB7XG4gICAgcmV0dXJuIGRpbGF0aW9uID0gbmV3RGlsYXRpb247XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkwWVhOckwzUnBiV1Z5TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPMEZCUVVFN08wRkJSVUVzU1VGQlRTeGpRVUZqTEVWQlFXUTdPMEZCUlU0c1NVRkJTU3hWUVVGVkxFTkJRVlk3UVVGRFNpeEpRVUZKTEZWQlFWVXNTVUZCVmp0QlFVTktMRWxCUVVrc1YwRkJWeXhEUVVGWU96dHJRa0ZGVnp0QlFVTllMRmxCUVZFc1ZVRkJReXhWUVVGRUxFVkJRV2RDTzBGQlEzQkNMR3RDUVVGVkxFdEJRVXNzUjBGQlRDeERRVUZUTEV0QlFVc3NSMEZCVEN4RFFVRlRMR0ZCUVdFc1QwRkJZaXhGUVVGelFpeFhRVUV2UWl4RFFVRlVMRVZCUVhORUxFTkJRWFJFTEVsQlFUSkVMRkZCUVRORUxFTkJSRlU3UVVGRmNFSXNhMEpCUVZVc1ZVRkJWaXhEUVVadlFqdExRVUZvUWpzN1FVRkxVaXhYUVVGUE8yVkJRVTBzVlVGQlZTeDVRa0ZCVmp0TFFVRk9PenRCUVVWUUxHZENRVUZaTzJWQlFVMDdTMEZCVGpzN1FVRkhWQ3hKUVVGTkxHZEVRVUZ2UWl4VlFVRkRMRmRCUVVRN1YwRkJhVUlzVjBGQlZ5eFhRVUZZTzBOQlFXcENJaXdpWm1sc1pTSTZJblJwYldWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQjdJR04xY25KbGJuUlVhVzFsSUgwZ1puSnZiU0FuTGk0dmFXNWpMM1YwYVd4ekp6dGNibHh1WTI5dWMzUWdUVUZZWDBWTVFWQlRSVVFnUFNBek16dGNibHh1YkdWMElHTjFjbkpsYm5RZ1BTQXdPMXh1YkdWMElHVnNZWEJ6WldRZ1BTQXhOaTQzTzF4dWJHVjBJR1JwYkdGMGFXOXVJRDBnTVR0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2UxeHVJQ0FnSUhWd1pHRjBaVG9nS0daeVlXMWxjM1JoYlhBcElEMCtJSHRjYmlBZ0lDQWdJQ0FnWld4aGNITmxaQ0E5SUUxaGRHZ3ViV0Y0S0UxaGRHZ3ViV2x1S0daeVlXMWxjM1JoYlhBZ0xTQmpkWEp5Wlc1MExDQk5RVmhmUlV4QlVGTkZSQ2tzSURFcElDb2daR2xzWVhScGIyNDdYRzRnSUNBZ0lDQWdJR04xY25KbGJuUWdQU0JtY21GdFpYTjBZVzF3TzF4dUlDQWdJSDBzWEc1Y2JpQWdJQ0J6ZEdGeWREb2dLQ2tnUFQ0Z1kzVnljbVZ1ZENBOUlHTjFjbkpsYm5SVWFXMWxLQ2tzWEc1Y2JpQWdJQ0JuWlhSRmJHRndjMlZrT2lBb0tTQTlQaUJsYkdGd2MyVmtYRzU5TzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnYzJWMFIyeHZZbUZzUkdsc1lYUnBiMjRnUFNBb2JtVjNSR2xzWVhScGIyNHBJRDArSUdScGJHRjBhVzl1SUQwZ2JtVjNSR2xzWVhScGIyNDdJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy90YXNrL3RpbWVyLmpzXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX1Rhc2syID0gcmVxdWlyZSgnLi4vdGFzay9UYXNrJyk7XG5cbnZhciBfVGFzazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UYXNrMik7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxudmFyIF9kZXRlY3QgPSByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9kZXRlY3QnKTtcblxudmFyIF9kZXRlY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGV0ZWN0KTtcblxudmFyIF9udW1lcmljYWxWYWx1ZXMgPSByZXF1aXJlKCcuLi9pbmMvbnVtZXJpY2FsLXZhbHVlcycpO1xuXG52YXIgX251bWVyaWNhbFZhbHVlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9udW1lcmljYWxWYWx1ZXMpO1xuXG52YXIgX2RldGVjdEFkYXB0ZXIgPSByZXF1aXJlKCcuLi9pbmMvZGV0ZWN0LWFkYXB0ZXInKTtcblxudmFyIF9kZXRlY3RBZGFwdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RldGVjdEFkYXB0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIE5VTV9OVU1FUklDQUxfVkFMVUVTID0gX251bWVyaWNhbFZhbHVlczIuZGVmYXVsdC5sZW5ndGg7XG5cbnZhciBkZWZhdWx0UmVuZGVyZXIgPSBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGU7XG4gICAgdmFyIGFkYXB0ZXIgPSBfcmVmLmFkYXB0ZXI7XG4gICAgdmFyIGFkYXB0ZXJEYXRhID0gX3JlZi5hZGFwdGVyRGF0YTtcbiAgICB2YXIgZWxlbWVudCA9IF9yZWYuZWxlbWVudDtcbiAgICByZXR1cm4gYWRhcHRlcihlbGVtZW50LCBzdGF0ZSwgYWRhcHRlckRhdGEpO1xufTtcblxudmFyIGNvbnZlcnRJZlNob3VsZEJlTnVtYmVyID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuICFpc05hTih2YWx1ZSkgPyBwYXJzZUZsb2F0KHZhbHVlKSA6IHZhbHVlO1xufTtcblxudmFyIEFjdGlvbiA9IGZ1bmN0aW9uIChfVGFzaykge1xuICAgIF9pbmhlcml0cyhBY3Rpb24sIF9UYXNrKTtcblxuICAgIGZ1bmN0aW9uIEFjdGlvbigpIHtcbiAgICAgICAgdmFyIHByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMF07XG5cbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFjdGlvbik7XG5cbiAgICAgICAgcHJvcHMuc3RhdGUgPSB7fTtcbiAgICAgICAgcHJvcHMudmFsdWVLZXlzID0gW107XG4gICAgICAgIHByb3BzLnBhcmVudEtleXMgPSBbXTtcbiAgICAgICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9UYXNrLmNhbGwodGhpcywgcHJvcHMpKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIFNldCBBY3Rpb24gcHJvcGVydGllc1xuICAgICAgICAjIyBTZXQgdXNlci1kZWZpbmVkIEFjdGlvbiBwcm9wZXJ0aWVzXG4gICAgICAgICBAcGFyYW0gW29iamVjdF1cbiAgICAgICAgQHJldHVybiBbQWN0aW9uXVxuICAgICovXG5cblxuICAgIEFjdGlvbi5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gc2V0KCkge1xuICAgICAgICB2YXIgcHJvcHMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1swXTtcblxuICAgICAgICB0aGlzLnZhbHVlcyA9IHRoaXMudmFsdWVzIHx8IHt9O1xuXG4gICAgICAgIHZhciB2YWx1ZXMgPSBwcm9wcy52YWx1ZXM7XG5cbiAgICAgICAgdmFyIHByb3BzVG9TZXQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFsndmFsdWVzJ10pO1xuXG4gICAgICAgIHZhciBpbmhlcml0YWJsZSA9IHt9O1xuXG4gICAgICAgIC8vIFNldCBub24tY29uc3VtZWQgcHJvcGVydGllc1xuICAgICAgICBfVGFzay5wcm90b3R5cGUuc2V0LmNhbGwodGhpcywgcHJvcHNUb1NldCk7XG5cbiAgICAgICAgLy8gRGV0ZWN0IGNvcnJlY3QgYGFkYXB0ZXJgIGlmIG5vbmUgZXhpc3RzIGFuZCBgZWxlbWVudGAgaXMgYmVpbmcgc2V0XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5hZGFwdGVyKSB7XG4gICAgICAgICAgICAgICAgLy8gRHVja3R5cGlzaCBjaGVjayBmb3IgQWRhcHRlclxuICAgICAgICAgICAgICAgIHRoaXMuYWRhcHRlciA9ICgwLCBfZGV0ZWN0QWRhcHRlcjIuZGVmYXVsdCkodGhpcy5lbGVtZW50KTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFkYXB0ZXIuZ2V0RWxlbWVudERhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGFwdGVyRGF0YSA9IHRoaXMuYWRhcHRlci5nZXRFbGVtZW50RGF0YSh0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCF0aGlzLm9uUmVuZGVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vblJlbmRlciA9IGRlZmF1bHRSZW5kZXJlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFByaW1lIGFuIG9iamVjdCB0byBpbmhlcml0IGZyb20sIHdpdGggb25seSBgdmFsdWVgIHByb3BlcnRpZXNcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMuZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kZWZhdWx0VmFsdWUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1RvU2V0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5oZXJpdGFibGVba2V5XSA9IHByb3BzVG9TZXRba2V5XTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXNba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGluaGVyaXRhYmxlW2tleV0gPSB0aGlzW2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIGV4aXN0aW5nIHZhbHVlcyB3aXRoIGluaGVyaXRhYmxlIHByb3BlcnRpZXNcbiAgICAgICAgZm9yICh2YXIgX2tleSBpbiB0aGlzLnZhbHVlcykge1xuICAgICAgICAgICAgaWYgKHRoaXMudmFsdWVzLmhhc093blByb3BlcnR5KF9rZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZXNbX2tleV0gPSBfZXh0ZW5kcyh7fSwgdGhpcy52YWx1ZXNbX2tleV0sIGluaGVyaXRhYmxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZVxuICAgICAgICBpZiAodmFsdWVzKSB7XG4gICAgICAgICAgICB0aGlzLnNldFZhbHVlcyh2YWx1ZXMsIGluaGVyaXRhYmxlKTtcblxuICAgICAgICAgICAgLy8gUHJlY29tcHV0ZSBudW1iZXIgb2YgdmFsdWUga2V5IGFuZCBwYXJlbnQga2V5cyB0byBhdm9pZCBwZXItZnJhbWUgbWVhc3VyZW1lbnRcbiAgICAgICAgICAgIHRoaXMubnVtVmFsdWVLZXlzID0gdGhpcy52YWx1ZUtleXMubGVuZ3RoO1xuICAgICAgICAgICAgdGhpcy5udW1QYXJlbnRLZXlzID0gdGhpcy5wYXJlbnRLZXlzLmxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBBY3Rpb24ucHJvdG90eXBlLnNldFZhbHVlcyA9IGZ1bmN0aW9uIHNldFZhbHVlcyh2YWx1ZXMsIGluaGVyaXQpIHtcbiAgICAgICAgLy8gSXRlcmF0ZSBvdmVyIGFsbCBpbmNvbWluZyB2YWx1ZXMgYW5kIHNldFxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgaGFzQ2hpbGRyZW4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGRyZW4gPSB7fTtcblxuICAgICAgICAgICAgICAgIC8vIE1lcmdlIGludG8gZXhpc3RpbmcgdmFsdWUgb3IgY3JlYXRlIG5ld1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZUFscmVhZHlFeGlzdHMgPSB0aGlzLnZhbHVlc1trZXldICE9PSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgdmFyIG5ld1ZhbHVlID0gdmFsdWVBbHJlYWR5RXhpc3RzID8gX2V4dGVuZHMoe30sIHRoaXMudmFsdWVzW2tleV0pIDogX2V4dGVuZHMoe30sIGluaGVyaXQpO1xuXG4gICAgICAgICAgICAgICAgLy8gSWYgdmFsdWVzIGlzIG5vdCBhbiBvYmplY3QsIGFzc2lnbiB2YWx1ZSB0byBkZWZhdWx0IHByb3BcbiAgICAgICAgICAgICAgICBpZiAoISgwLCBfdXRpbHMuaXNPYmopKHZhbHVlc1trZXldKSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZVt0aGlzLmRlZmF1bHRWYWx1ZVByb3BdID0gdmFsdWVzW2tleV07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSBfZXh0ZW5kcyh7fSwgbmV3VmFsdWUsIHZhbHVlc1trZXldKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBJZiB3ZSd2ZSBnb3QgYW4gYWRhcHRlciwgZ2V0IHRoZSBjdXJyZW50IHZhbHVlXG4gICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlLmN1cnJlbnQgPT09IHVuZGVmaW5lZCAmJiB0aGlzLmFkYXB0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUuY3VycmVudCA9IGNvbnZlcnRJZlNob3VsZEJlTnVtYmVyKHRoaXMuYWRhcHRlci5nZXQodGhpcy5lbGVtZW50LCBrZXkpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUuZnJvbSA9PT0gdW5kZWZpbmVkICYmIHRoaXMuYWRhcHRlcikge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS5mcm9tID0gbmV3VmFsdWUuY3VycmVudDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBBcHBseSBkZWZhdWx0IHZhbHVlIHByb3BlcnRpZXNcbiAgICAgICAgICAgICAgICBpZiAoIXZhbHVlQWxyZWFkeUV4aXN0cykge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IF9leHRlbmRzKHt9LCB0aGlzLmRlZmF1bHRWYWx1ZSwgbmV3VmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIElmIHdlIGRvbid0IGhhdmUgYSB2YWx1ZSB0eXBlIGFuZCB3ZSBkbyBoYXZlIGFuIEFkYXB0ZXIsIGNoZWNrIGZvciB0eXBlIHdpdGggdmFsdWUga2V5XG4gICAgICAgICAgICAgICAgaWYgKCFuZXdWYWx1ZS50eXBlICYmIHRoaXMuYWRhcHRlciAmJiB0aGlzLmFkYXB0ZXIuY2hlY2tWYWx1ZVR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUudHlwZSA9IHRoaXMuYWRhcHRlci5jaGVja1ZhbHVlVHlwZShrZXkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIElmIHdlIHN0aWxsIGRvbid0IGhhdmUgYSB2YWx1ZSB0eXBlIGFuZCB0aGlzIGlzIHRoZSBmaXJzdCB0aW1lIHdlJ3ZlIHNldCB0aGlzIHZhbHVlLCBjaGVjayBudW1lcmljYWwgdmFsdWVzIGZvciBzdHJpbmdzIGFuZCB0ZXN0XG4gICAgICAgICAgICAgICAgaWYgKCFuZXdWYWx1ZS50eXBlICYmICF0aGlzLnZhbHVlc1trZXldKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLnR5cGUgPSAoMCwgX2RldGVjdDIuZGVmYXVsdCkobmV3VmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIElmIHdlIGhhdmUgYSB2YWx1ZSB0eXBlLCBoYW5kbGUuIFRoaXMgaXMgbXkgbGVhc3QgZmF2b3VyaXRlIHBhcnQgb2YgUG9wbW90aW9uLCBzby4uLiBlbmpveS5cbiAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IE5VTV9OVU1FUklDQUxfVkFMVUVTOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm9wTmFtZSA9IF9udW1lcmljYWxWYWx1ZXMyLmRlZmF1bHRbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWVQcm9wID0gbmV3VmFsdWVbcHJvcE5hbWVdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGlzIHByb3AgaXMgYSBzdHJpbmcgYW5kIHdlIGhhdmUgYSBzcGxpdHRlciwgc3BsaXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZS50eXBlLmhhc093blByb3BlcnR5KCdzcGxpdCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNwbGl0UHJvcCA9ICgwLCBfdXRpbHMuaXNTdHJpbmcpKHZhbHVlUHJvcCkgPyBuZXdWYWx1ZS50eXBlLnNwbGl0KHZhbHVlUHJvcCkgOiB7fTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHNwbGl0S2V5IGluIHNwbGl0UHJvcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3BsaXRQcm9wLmhhc093blByb3BlcnR5KHNwbGl0S2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbWJpbmVkS2V5ID0ga2V5ICsgc3BsaXRLZXk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHdlIGRvbid0IGhhdmUgYSBjaGlsZCB2YWx1ZSBmb3IgdGhpcyBrZXksIG1ha2Ugb25lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNoaWxkcmVuW2NvbWJpbmVkS2V5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkZWZhdWx0VmFsdWUgPSBuZXdWYWx1ZS50eXBlLmRlZmF1bHRQcm9wcyAmJiBuZXdWYWx1ZS50eXBlLmRlZmF1bHRQcm9wc1tzcGxpdEtleV0gPyBuZXdWYWx1ZS50eXBlLmRlZmF1bHRQcm9wc1tzcGxpdEtleV0gOiBuZXdWYWx1ZS50eXBlLmRlZmF1bHRQcm9wcyB8fCB7fTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuW2NvbWJpbmVkS2V5XSA9IF9leHRlbmRzKHt9LCBuZXdWYWx1ZSwgZGVmYXVsdFZhbHVlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudDoga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZEtleTogc3BsaXRLZXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBjaGlsZHJlbltjb21iaW5lZEtleV0udHlwZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzQ2hpbGRyZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW5bY29tYmluZWRLZXldW3Byb3BOYW1lXSA9IHBhcnNlRmxvYXQoc3BsaXRQcm9wW3NwbGl0S2V5XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSBoYXZlIGEgdGVtcGxhdGUgZnVuY3Rpb24sIGdlbmVyYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFuZXdWYWx1ZS50ZW1wbGF0ZSAmJiBuZXdWYWx1ZS50eXBlLnRlbXBsYXRlICYmICgwLCBfdXRpbHMuaXNTdHJpbmcpKHZhbHVlUHJvcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUudGVtcGxhdGUgPSBuZXdWYWx1ZS50eXBlLnRlbXBsYXRlKHZhbHVlUHJvcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChuZXdWYWx1ZS50eXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gX2V4dGVuZHMoe30sIG5ld1ZhbHVlLCBuZXdWYWx1ZS50eXBlLmRlZmF1bHRQcm9wcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZVByb3AgIT09IHVuZGVmaW5lZCAmJiBuZXdWYWx1ZS50eXBlLnBhcnNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWVbcHJvcE5hbWVdID0gbmV3VmFsdWUudHlwZS5wYXJzZSh2YWx1ZVByb3AsIG5ld1ZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gLy8gRW5kIHZhbHVlIHR5cGUgbm9uc2Vuc2VcblxuICAgICAgICAgICAgICAgIC8vIFNldCBgcHJldmAgdG8gYGN1cnJlbnRgIGZvciBmaXJzdCBmcmFtZSBhZnRlciBzZXRcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZS5wcmV2ID0gbmV3VmFsdWUuY3VycmVudDtcblxuICAgICAgICAgICAgICAgIC8vIElmIHRoaXMgdmFsdWUgZG9lc24ndCBoYXZlIGNoaWxkcmVuLCBhZGQgdG8gdmFsdWVLZXlzXG4gICAgICAgICAgICAgICAgaWYgKCFoYXNDaGlsZHJlbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy52YWx1ZUtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZUtleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gT3IgYWRkIHRvIHBhcmVudEtleXNcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUuY2hpbGRyZW4gPSBuZXdWYWx1ZS5jaGlsZHJlbiB8fCB7fTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnRLZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZXMoY2hpbGRyZW4pO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlc1trZXldID0gbmV3VmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgRGVjaWRlIHdoZXRoZXIgdGhpcyBBY3Rpb24gd2lsbCByZW5kZXIgb24gbmV4dCBmcmFtZVxuICAgICAgICAgQHBhcmFtIFtBY3Rpb25dXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgICAgICBAcGFyYW0gW251bWJlcl1cbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybiB0cnVlIHRvIHJlbmRlclxuICAgICovXG5cblxuICAgIEFjdGlvbi5wcm90b3R5cGUud2lsbFJlbmRlciA9IGZ1bmN0aW9uIHdpbGxSZW5kZXIoYWN0aW9uLCBmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgICAgIHZhciBoYXNDaGFuZ2VkID0gZmFsc2U7XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgYmFzZSB2YWx1ZXMgaGF2ZSB1cGRhdGVkXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMudmFsdWVLZXlzW2ldO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcblxuICAgICAgICAgICAgLy8gUnVuIHRyYW5zZm9ybSBmdW5jdGlvbiAoaWYgcHJlc2VudClcbiAgICAgICAgICAgIGlmICh2YWx1ZS50cmFuc2Zvcm0pIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gdmFsdWUudHJhbnNmb3JtKHZhbHVlLmN1cnJlbnQsIGtleSwgdGhpcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENhcCBtaW5pbXVtXG4gICAgICAgICAgICBpZiAoKDAsIF91dGlscy5pc051bSkodmFsdWUubWluKSkge1xuICAgICAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSBNYXRoLm1heCh2YWx1ZS5jdXJyZW50LCB2YWx1ZS5taW4pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDYXAgbWF4aW11bVxuICAgICAgICAgICAgaWYgKCgwLCBfdXRpbHMuaXNOdW0pKHZhbHVlLm1heCkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gTWF0aC5taW4odmFsdWUuY3VycmVudCwgdmFsdWUubWF4KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUm91bmQgbnVtYmVyXG4gICAgICAgICAgICBpZiAodmFsdWUucm91bmQpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gTWF0aC5yb3VuZCh2YWx1ZS5jdXJyZW50KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFsdWUuZnJhbWVDaGFuZ2UgPSB2YWx1ZS5jdXJyZW50IC0gdmFsdWUucHJldjtcblxuICAgICAgICAgICAgLy8gVXBkYXRlIHZlbG9jaXR5XG4gICAgICAgICAgICBpZiAoIXRoaXMuY2FsY3VsYXRlc1ZlbG9jaXR5KSB7XG4gICAgICAgICAgICAgICAgdmFsdWUudmVsb2NpdHkgPSAoMCwgX2NhbGMuc3BlZWRQZXJTZWNvbmQpKHZhbHVlLmZyYW1lQ2hhbmdlLCBlbGFwc2VkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgdGhpcyB2YWx1ZSBoYXMgY2hhbmdlZFxuICAgICAgICAgICAgaWYgKHZhbHVlLnByZXYgIT09IHZhbHVlLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICBoYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB2YWx1ZS5wcmV2ID0gdmFsdWUuY3VycmVudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQXBwZW5kIHVuaXRcbiAgICAgICAgICAgIHZhciB2YWx1ZUZvclN0YXRlID0gdmFsdWUudHlwZSAmJiB2YWx1ZS50eXBlLnNlcmlhbGl6ZSA/IHZhbHVlLnR5cGUuc2VyaWFsaXplKHZhbHVlLmN1cnJlbnQsIHZhbHVlKSA6IHZhbHVlLmN1cnJlbnQ7XG5cbiAgICAgICAgICAgIC8vIEFkZCB0byBzdGF0ZSBpZiB0aGlzIGlzIG5vdCBhIGNoaWxkIHZhdWVcbiAgICAgICAgICAgIGlmICghdmFsdWUucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZVtrZXldID0gdmFsdWVGb3JTdGF0ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZXNbdmFsdWUucGFyZW50XS5jaGlsZHJlblt2YWx1ZS5jaGlsZEtleV0gPSB2YWx1ZUZvclN0YXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIHBhcmVudCB2YWx1ZXNcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHRoaXMubnVtUGFyZW50S2V5czsgX2krKykge1xuICAgICAgICAgICAgdmFyIF9rZXkyID0gdGhpcy5wYXJlbnRLZXlzW19pXTtcbiAgICAgICAgICAgIHZhciBfdmFsdWUgPSB0aGlzLnZhbHVlc1tfa2V5Ml07XG5cbiAgICAgICAgICAgIF92YWx1ZS5jdXJyZW50ID0gX3ZhbHVlLnR5cGUuY29tYmluZShfdmFsdWUuY2hpbGRyZW4sIF92YWx1ZS50ZW1wbGF0ZSk7XG5cbiAgICAgICAgICAgIHRoaXMuc3RhdGVbX2tleTJdID0gX3ZhbHVlLmN1cnJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5vbkZyYW1lKSB7XG4gICAgICAgICAgICB0aGlzLm9uRnJhbWUodGhpcy5zdGF0ZSwgdGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5vbkNsZWFudXAgPyB0cnVlIDogaGFzQ2hhbmdlZDtcbiAgICB9O1xuXG4gICAgQWN0aW9uLnByb3RvdHlwZS5pbmhlcml0ID0gZnVuY3Rpb24gaW5oZXJpdCgpIHtcbiAgICAgICAgdmFyIHByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMF07XG4gICAgICAgIHZhciB2YWx1ZXMgPSBwcm9wcy52YWx1ZXM7XG5cbiAgICAgICAgdmFyIHByb3BzVG9TZXQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFsndmFsdWVzJ10pO1xuXG4gICAgICAgIHZhciBuZXdBY3Rpb24gPSBfVGFzay5wcm90b3R5cGUuaW5oZXJpdC5jYWxsKHRoaXMsIHByb3BzVG9TZXQpO1xuXG4gICAgICAgIGlmICh2YWx1ZXMpIHtcbiAgICAgICAgICAgIG5ld0FjdGlvbi5zZXQoeyB2YWx1ZXM6IHZhbHVlcyB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXdBY3Rpb247XG4gICAgfTtcblxuICAgIEFjdGlvbi5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbiBwYXVzZSgpIHtcbiAgICAgICAgX1Rhc2sucHJvdG90eXBlLnN0b3AuY2FsbCh0aGlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIEFjdGlvbi5wcm90b3R5cGUucmVzdW1lID0gZnVuY3Rpb24gcmVzdW1lKCkge1xuICAgICAgICBfVGFzay5wcm90b3R5cGUuc3RhcnQuY2FsbCh0aGlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIEFjdGlvbi5wcm90b3R5cGUudG9nZ2xlID0gZnVuY3Rpb24gdG9nZ2xlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0FjdGl2ZSA/IHRoaXMucGF1c2UoKSA6IHRoaXMucmVzdW1lKCk7XG4gICAgfTtcblxuICAgIEFjdGlvbi5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgICAgdmFyIHZhbHVlcyA9IHRoaXMudmFsdWVzO1xuICAgICAgICBfVGFzay5wcm90b3R5cGUuc3RhcnQuY2FsbCh0aGlzKTtcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZXNba2V5XS5wcmV2ID0gdmFsdWVzW2tleV0ub3JpZ2luID0gdmFsdWVzW2tleV0uY3VycmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBBY3Rpb24uZXh0ZW5kRGVmYXVsdFZhbHVlID0gZnVuY3Rpb24gZXh0ZW5kRGVmYXVsdFZhbHVlKHByb3BzKSB7XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgdGhpcy5wcm90b3R5cGUuZGVmYXVsdFZhbHVlLCBwcm9wcyk7XG4gICAgfTtcblxuICAgIEFjdGlvbi5leHRlbmREZWZhdWx0UHJvcHMgPSBmdW5jdGlvbiBleHRlbmREZWZhdWx0UHJvcHMocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCB0aGlzLnByb3RvdHlwZS5kZWZhdWx0UHJvcHMsIHByb3BzKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIEFjdGlvbjtcbn0oX1Rhc2szLmRlZmF1bHQpO1xuXG5BY3Rpb24ucHJvdG90eXBlLmRlZmF1bHRWYWx1ZVByb3AgPSAnY3VycmVudCc7XG5BY3Rpb24ucHJvdG90eXBlLmRlZmF1bHRWYWx1ZSA9IHtcbiAgICBjdXJyZW50OiAwLFxuICAgIHZlbG9jaXR5OiAwLFxuICAgIHJvdW5kOiBmYWxzZSxcbiAgICBtaW46IHVuZGVmaW5lZCxcbiAgICBtYXg6IHVuZGVmaW5lZCxcbiAgICB0cmFuc2Zvcm06IHVuZGVmaW5lZFxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQWN0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMEZqZEdsdmJpNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN1FVRkJRVHM3T3p0QlFVTkJPenRCUVVOQk96dEJRVU5CT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3T3pzN096czdPenM3T3pzN1FVRkZRU3hKUVVGTkxIVkNRVUYxUWl3d1FrRkJhVUlzVFVGQmFrSTdPMEZCUlRkQ0xFbEJRVTBzYTBKQlFXdENPMUZCUVVjN1VVRkJUenRSUVVGVE8xRkJRV0U3VjBGQll5eFJRVUZSTEU5QlFWSXNSVUZCYVVJc1MwRkJha0lzUlVGQmQwSXNWMEZCZUVJN1EwRkJPVU03TzBGQlJYaENMRWxCUVUwc01FSkJRVEJDTEZWQlFVTXNTMEZCUkR0WFFVRlhMRU5CUVVNc1RVRkJUU3hMUVVGT0xFTkJRVVFzUjBGQlowSXNWMEZCVnl4TFFVRllMRU5CUVdoQ0xFZEJRVzlETEV0QlFYQkRPME5CUVZnN08wbEJSVEZDT3pzN1FVRkRSaXhoUVVSRkxFMUJRMFlzUjBGQmQwSTdXVUZCV2l3NFJFRkJVU3hyUWtGQlNUczdPRUpCUkhSQ0xGRkJRM05DT3p0QlFVTndRaXhqUVVGTkxFdEJRVTRzUjBGQll5eEZRVUZrTEVOQlJHOUNPMEZCUlhCQ0xHTkJRVTBzVTBGQlRpeEhRVUZyUWl4RlFVRnNRaXhEUVVadlFqdEJRVWR3UWl4alFVRk5MRlZCUVU0c1IwRkJiVUlzUlVGQmJrSXNRMEZJYjBJN1owUkJTWEJDTEdsQ1FVRk5MRXRCUVU0c1IwRktiMEk3UzBGQmVFSTdPenM3T3pzN096czdRVUZFUlN4eFFrRmxSaXh4UWtGQlowSTdXVUZCV2l3NFJFRkJVU3hyUWtGQlNUczdRVUZEV2l4aFFVRkxMRTFCUVV3c1IwRkJZeXhMUVVGTExFMUJRVXdzU1VGQlpTeEZRVUZtTEVOQlJFWTdPMWxCUjBvc1UwRkJNRUlzVFVGQk1VSXNUMEZJU1RzN1dVRkhUeXh6UTBGQlpTeHRRa0ZJZEVJN08wRkJTVm9zV1VGQlRTeGpRVUZqTEVWQlFXUTdPenRCUVVwTkxIZENRVTlPTEVkQlFVNHNXVUZCVlN4VlFVRldPenM3UVVGUVdTeFpRVlZTTEV0QlFVc3NUMEZCVEN4RlFVRmpPMEZCUTJRc1owSkJRVWtzUTBGQlF5eExRVUZMTEU5QlFVd3NSVUZCWXpzN1FVRkZaaXh4UWtGQlN5eFBRVUZNTEVkQlFXVXNOa0pCUVdNc1MwRkJTeXhQUVVGTUxFTkJRVGRDTEVOQlJtVTdPMEZCU1dZc2IwSkJRVWtzUzBGQlN5eFBRVUZNTEVOQlFXRXNZMEZCWWl4RlFVRTJRanRCUVVNM1FpeDVRa0ZCU3l4WFFVRk1MRWRCUVcxQ0xFdEJRVXNzVDBGQlRDeERRVUZoTEdOQlFXSXNRMEZCTkVJc1MwRkJTeXhQUVVGTUxFTkJRUzlETEVOQlJEWkNPMmxDUVVGcVF6dGhRVXBLT3p0QlFWTkJMR2RDUVVGSkxFTkJRVU1zUzBGQlN5eFJRVUZNTEVWQlFXVTdRVUZEYUVJc2NVSkJRVXNzVVVGQlRDeEhRVUZuUWl4bFFVRm9RaXhEUVVSblFqdGhRVUZ3UWp0VFFWWktPenM3UVVGV1dTeGhRVEJDVUN4SlFVRkpMRWRCUVVvc1NVRkJWeXhMUVVGTExGbEJRVXdzUlVGQmJVSTdRVUZETDBJc1owSkJRVWtzUzBGQlN5eFpRVUZNTEVOQlFXdENMR05CUVd4Q0xFTkJRV2xETEVkQlFXcERMRU5CUVVvc1JVRkJNa003UVVGRGRrTXNiMEpCUVVrc1YwRkJWeXhqUVVGWUxFTkJRVEJDTEVkQlFURkNMRU5CUVVvc1JVRkJiME03UVVGRGFFTXNaME5CUVZrc1IwRkJXaXhKUVVGdFFpeFhRVUZYTEVkQlFWZ3NRMEZCYmtJc1EwRkVaME03YVVKQlFYQkRMRTFCUlU4c1NVRkJTU3hMUVVGTExFZEJRVXdzVFVGQll5eFRRVUZrTEVWQlFYbENPMEZCUTJoRExHZERRVUZaTEVkQlFWb3NTVUZCYlVJc1MwRkJTeXhIUVVGTUxFTkJRVzVDTEVOQlJHZERPMmxDUVVFM1FqdGhRVWhZTzFOQlJFbzdPenRCUVRGQ1dTeGhRWEZEVUN4SlFVRkpMRWxCUVVvc1NVRkJWeXhMUVVGTExFMUJRVXdzUlVGQllUdEJRVU42UWl4blFrRkJTU3hMUVVGTExFMUJRVXdzUTBGQldTeGpRVUZhTEVOQlFUSkNMRWxCUVROQ0xFTkJRVW9zUlVGQmNVTTdRVUZEYWtNc2NVSkJRVXNzVFVGQlRDeERRVUZaTEVsQlFWb3NhVUpCUVhkQ0xFdEJRVXNzVFVGQlRDeERRVUZaTEVsQlFWb3NSMEZCY1VJc1dVRkJOME1zUTBGRWFVTTdZVUZCY2tNN1UwRkVTanM3TzBGQmNrTlpMRmxCTkVOU0xFMUJRVW9zUlVGQldUdEJRVU5TTEdsQ1FVRkxMRk5CUVV3c1EwRkJaU3hOUVVGbUxFVkJRWFZDTEZkQlFYWkNPenM3UVVGRVVTeG5Ra0ZKVWl4RFFVRkxMRmxCUVV3c1IwRkJiMElzUzBGQlN5eFRRVUZNTEVOQlFXVXNUVUZCWml4RFFVcGFPMEZCUzFJc2FVSkJRVXNzWVVGQlRDeEhRVUZ4UWl4TFFVRkxMRlZCUVV3c1EwRkJaMElzVFVGQmFFSXNRMEZNWWp0VFFVRmFPenRCUVZGQkxHVkJRVThzU1VGQlVDeERRWEJFV1RzN08wRkJabVFzY1VKQmMwVkdMQ3RDUVVGVkxGRkJRVkVzVTBGQlV6czdRVUZGZGtJc1lVRkJTeXhKUVVGSkxFZEJRVW9zU1VGQlZ5eE5RVUZvUWl4RlFVRjNRanRCUVVOd1FpeG5Ra0ZCU1N4UFFVRlBMR05CUVZBc1EwRkJjMElzUjBGQmRFSXNRMEZCU2l4RlFVRm5RenRCUVVNMVFpeHZRa0ZCU1N4alFVRmpMRXRCUVdRc1EwRkVkMEk3UVVGRk5VSXNiMEpCUVUwc1YwRkJWeXhGUVVGWU96czdRVUZHYzBJc2IwSkJTM1JDTEhGQ1FVRnhRaXhMUVVGTExFMUJRVXdzUTBGQldTeEhRVUZhTEUxQlFYRkNMRk5CUVhKQ0xFTkJURU03UVVGTk5VSXNiMEpCUVVrc1YwRkJWeXhyUTBGQk1FSXNTMEZCU3l4TlFVRk1MRU5CUVZrc1IwRkJXaXhGUVVFeFFpeG5Ra0ZCYjBRc1VVRkJjRVE3T3p0QlFVNWhMRzlDUVZONFFpeERRVUZETEd0Q1FVRk5MRTlCUVU4c1IwRkJVQ3hEUVVGT0xFTkJRVVFzUlVGQmNVSTdRVUZEY2tJc05rSkJRVk1zUzBGQlN5eG5Ra0ZCVEN4RFFVRlVMRWRCUVd0RExFOUJRVThzUjBGQlVDeERRVUZzUXl4RFFVUnhRanRwUWtGQmVrSXNUVUZGVHp0QlFVTklMRFJEUVVGblFpeFZRVUZoTEU5QlFVOHNSMEZCVUN4RlFVRTNRaXhEUVVSSE8ybENRVVpRT3pzN1FVRlVORUlzYjBKQlowSjRRaXhUUVVGVExFOUJRVlFzUzBGQmNVSXNVMEZCY2tJc1NVRkJhME1zUzBGQlN5eFBRVUZNTEVWQlFXTTdRVUZEYUVRc05rSkJRVk1zVDBGQlZDeEhRVUZ0UWl4M1FrRkJkMElzUzBGQlN5eFBRVUZNTEVOQlFXRXNSMEZCWWl4RFFVRnBRaXhMUVVGTExFOUJRVXdzUlVGQll5eEhRVUV2UWl4RFFVRjRRaXhEUVVGdVFpeERRVVJuUkR0cFFrRkJjRVE3TzBGQlNVRXNiMEpCUVVrc1UwRkJVeXhKUVVGVUxFdEJRV3RDTEZOQlFXeENMRWxCUVN0Q0xFdEJRVXNzVDBGQlRDeEZRVUZqTzBGQlF6ZERMRFpDUVVGVExFbEJRVlFzUjBGQlowSXNVMEZCVXl4UFFVRlVMRU5CUkRaQ08ybENRVUZxUkRzN08wRkJjRUkwUWl4dlFrRjVRbmhDTEVOQlFVTXNhMEpCUVVRc1JVRkJjVUk3UVVGRGNrSXNORU5CUVdkQ0xFdEJRVXNzV1VGQlRDeEZRVUZ6UWl4VFFVRjBReXhEUVVSeFFqdHBRa0ZCZWtJN096dEJRWHBDTkVJc2IwSkJPRUo0UWl4RFFVRkRMRk5CUVZNc1NVRkJWQ3hKUVVGcFFpeExRVUZMTEU5QlFVd3NTVUZCWjBJc1MwRkJTeXhQUVVGTUxFTkJRV0VzWTBGQllpeEZRVUUyUWp0QlFVTXZSQ3cyUWtGQlV5eEpRVUZVTEVkQlFXZENMRXRCUVVzc1QwRkJUQ3hEUVVGaExHTkJRV0lzUTBGQk5FSXNSMEZCTlVJc1EwRkJhRUlzUTBGRUswUTdhVUpCUVc1Rk96czdRVUU1UWpSQ0xHOUNRVzFEZUVJc1EwRkJReXhUUVVGVExFbEJRVlFzU1VGQmFVSXNRMEZCUXl4TFFVRkxMRTFCUVV3c1EwRkJXU3hIUVVGYUxFTkJRVVFzUlVGQmJVSTdRVUZEY2tNc05rSkJRVk1zU1VGQlZDeEhRVUZuUWl4elFrRkJaMElzVVVGQmFFSXNRMEZCYUVJc1EwRkVjVU03YVVKQlFYcERPenM3UVVGdVF6UkNMRzlDUVhkRGVFSXNVMEZCVXl4SlFVRlVMRVZCUVdVN1FVRkRaaXg1UWtGQlN5eEpRVUZKTEVsQlFVa3NRMEZCU2l4RlFVRlBMRWxCUVVrc2IwSkJRVW9zUlVGQk1FSXNSMEZCTVVNc1JVRkJLME03UVVGRE0wTXNORUpCUVUwc1YwRkJWeXd3UWtGQmFVSXNRMEZCYWtJc1EwRkJXQ3hEUVVSeFF6dEJRVVV6UXl3MFFrRkJUU3haUVVGWkxGTkJRVk1zVVVGQlZDeERRVUZhT3pzN1FVRkdjVU1zTkVKQlMzWkRMRk5CUVZNc1NVRkJWQ3hEUVVGakxHTkJRV1FzUTBGQk5rSXNUMEZCTjBJc1EwRkJTaXhGUVVFeVF6dEJRVU4yUXl4blEwRkJUU3haUVVGWkxIRkNRVUZUTEZOQlFWUXNTVUZCYzBJc1UwRkJVeXhKUVVGVUxFTkJRV01zUzBGQlpDeERRVUZ2UWl4VFFVRndRaXhEUVVGMFFpeEhRVUYxUkN4RlFVRjJSQ3hEUVVSeFFqczdRVUZIZGtNc2FVTkJRVXNzU1VGQlNTeFJRVUZLTEVsQlFXZENMRk5CUVhKQ0xFVkJRV2RETzBGQlF6VkNMRzlEUVVGSkxGVkJRVlVzWTBGQlZpeERRVUY1UWl4UlFVRjZRaXhEUVVGS0xFVkJRWGRETzBGQlEzQkRMSGREUVVGTkxHTkJRV01zVFVGQlRTeFJRVUZPT3pzN1FVRkVaMElzZDBOQlNXaERMRU5CUVVNc1UwRkJVeXhYUVVGVUxFTkJRVVFzUlVGQmQwSTdRVUZEZUVJc05FTkJRVTBzWlVGQlpTeFJRVUZETEVOQlFWTXNTVUZCVkN4RFFVRmpMRmxCUVdRc1NVRkJPRUlzVTBGQlV5eEpRVUZVTEVOQlFXTXNXVUZCWkN4RFFVRXlRaXhSUVVFelFpeERRVUU1UWl4SFFVRnpSU3hUUVVGVExFbEJRVlFzUTBGQll5eFpRVUZrTEVOQlFUSkNMRkZCUVROQ0xFTkJRWFpGTEVkQlFUaEhMRk5CUVZNc1NVRkJWQ3hEUVVGakxGbEJRV1FzU1VGQk9FSXNSVUZCT1VJc1EwRkVNMGM3TzBGQlIzaENMR2xFUVVGVExGZEJRVlFzYVVKQlEwOHNWVUZEUVR0QlFVTklMRzlFUVVGUkxFZEJRVkk3UVVGRFFTeHpSRUZCVlN4UlFVRldPekJEUVVwS0xFTkJTSGRDT3p0QlFWVjRRaXdyUTBGQlR5eFRRVUZUTEZkQlFWUXNSVUZCYzBJc1NVRkJkRUlzUTBGV2FVSTdjVU5CUVRWQ096dEJRV0ZCTEd0RVFVRmpMRWxCUVdRc1EwRnFRbTlETzBGQmEwSndReXcyUTBGQlV5eFhRVUZVTEVWQlFYTkNMRkZCUVhSQ0xFbEJRV3RETEZkQlFWY3NWVUZCVlN4UlFVRldMRU5CUVZnc1EwRkJiRU1zUTBGc1FtOURPMmxEUVVGNFF6czJRa0ZFU2pzN08wRkJTSFZETEdkRFFUSkNia01zUTBGQlF5eFRRVUZUTEZGQlFWUXNTVUZCY1VJc1UwRkJVeXhKUVVGVUxFTkJRV01zVVVGQlpDeEpRVUV3UWl4eFFrRkJVeXhUUVVGVUxFTkJRV2hFTEVWQlFYRkZPMEZCUTNKRkxIbERRVUZUTEZGQlFWUXNSMEZCYjBJc1UwRkJVeXhKUVVGVUxFTkJRV01zVVVGQlpDeERRVUYxUWl4VFFVRjJRaXhEUVVGd1FpeERRVVJ4UlRzMlFrRkJla1U3ZVVKQk0wSktMRTFCT0VKUExFbEJRVWtzVTBGQlV5eEpRVUZVTEVOQlFXTXNXVUZCWkN4RlFVRTBRanRCUVVOdVF5eHZSRUZCWjBJc1ZVRkJZU3hUUVVGVExFbEJRVlFzUTBGQll5eFpRVUZrTEVOQlFUZENMRU5CUkcxRE8zbENRVUZvUXpzN1FVRkpVQ3cwUWtGQlNTeGpRVUZqTEZOQlFXUXNTVUZCTWtJc1UwRkJVeXhKUVVGVUxFTkJRV01zUzBGQlpDeEZRVUZ4UWp0QlFVTm9SQ3h4UTBGQlV5eFJRVUZVTEVsQlFYRkNMRk5CUVZNc1NVRkJWQ3hEUVVGakxFdEJRV1FzUTBGQmIwSXNVMEZCY0VJc1JVRkJLMElzVVVGQkwwSXNRMEZCY2tJc1EwRkVaMFE3ZVVKQlFYQkVPM0ZDUVhaRFNqdHBRa0ZFU2pzN08wRkJlRU0wUWl4M1FrRjFSalZDTEVOQlFWTXNTVUZCVkN4SFFVRm5RaXhUUVVGVExFOUJRVlE3T3p0QlFYWkdXU3h2UWtFd1JuaENMRU5CUVVNc1YwRkJSQ3hGUVVGak8wRkJRMlFzZDBKQlFVa3NTMEZCU3l4VFFVRk1MRU5CUVdVc1QwRkJaaXhEUVVGMVFpeEhRVUYyUWl4TlFVRm5ReXhEUVVGRExFTkJRVVFzUlVGQlNUdEJRVU53UXl3MlFrRkJTeXhUUVVGTUxFTkJRV1VzU1VGQlppeERRVUZ2UWl4SFFVRndRaXhGUVVSdlF6dHhRa0ZCZUVNN096dEJRVVJqTEdsQ1FVRnNRaXhOUVUxUE8wRkJRMGdzYVVOQlFWTXNVVUZCVkN4SFFVRnZRaXhUUVVGVExGRkJRVlFzU1VGQmNVSXNSVUZCY2tJc1EwRkVha0k3TzBGQlIwZ3NORUpCUVVrc1MwRkJTeXhWUVVGTUxFTkJRV2RDTEU5QlFXaENMRU5CUVhkQ0xFZEJRWGhDTEUxQlFXbERMRU5CUVVNc1EwRkJSQ3hGUVVGSk8wRkJRM0pETEdsRFFVRkxMRlZCUVV3c1EwRkJaMElzU1VGQmFFSXNRMEZCY1VJc1IwRkJja0lzUlVGRWNVTTdlVUpCUVhwRE96dEJRVWxCTERaQ1FVRkxMRk5CUVV3c1EwRkJaU3hSUVVGbUxFVkJVRWM3Y1VKQlRsQTdPMEZCWjBKQkxIRkNRVUZMTEUxQlFVd3NRMEZCV1N4SFFVRmFMRWxCUVcxQ0xGRkJRVzVDTEVOQk1VYzBRanRoUVVGb1F6dFRRVVJLT3pzN096czdPenM3T3pzN1FVRjRSVVlzY1VKQlowMUdMR2xEUVVGWExGRkJRVkVzV1VGQldTeFRRVUZUTzBGQlEzQkRMRmxCUVVrc1lVRkJZU3hMUVVGaU96czdRVUZFWjBNc1lVRkpMMElzU1VGQlNTeEpRVUZKTEVOQlFVb3NSVUZCVHl4SlFVRkpMRXRCUVVzc1dVRkJUQ3hGUVVGdFFpeEhRVUYyUXl4RlFVRTBRenRCUVVONFF5eG5Ra0ZCVFN4TlFVRk5MRXRCUVVzc1UwRkJUQ3hEUVVGbExFTkJRV1lzUTBGQlRpeERRVVJyUXp0QlFVVjRReXhuUWtGQlRTeFJRVUZSTEV0QlFVc3NUVUZCVEN4RFFVRlpMRWRCUVZvc1EwRkJVanM3TzBGQlJtdERMR2RDUVV0d1F5eE5RVUZOTEZOQlFVNHNSVUZCYVVJN1FVRkRha0lzYzBKQlFVMHNUMEZCVGl4SFFVRm5RaXhOUVVGTkxGTkJRVTRzUTBGQlowSXNUVUZCVFN4UFFVRk9MRVZCUVdVc1IwRkJMMElzUlVGQmIwTXNTVUZCY0VNc1EwRkJhRUlzUTBGRWFVSTdZVUZCY2tJN096dEJRVXgzUXl4blFrRlZjRU1zYTBKQlFVMHNUVUZCVFN4SFFVRk9MRU5CUVZZc1JVRkJjMEk3UVVGRGJFSXNjMEpCUVUwc1QwRkJUaXhIUVVGblFpeExRVUZMTEVkQlFVd3NRMEZCVXl4TlFVRk5MRTlCUVU0c1JVRkJaU3hOUVVGTkxFZEJRVTRzUTBGQmVFTXNRMEZFYTBJN1lVRkJkRUk3T3p0QlFWWjNReXhuUWtGbGNFTXNhMEpCUVUwc1RVRkJUU3hIUVVGT0xFTkJRVllzUlVGQmMwSTdRVUZEYkVJc2MwSkJRVTBzVDBGQlRpeEhRVUZuUWl4TFFVRkxMRWRCUVV3c1EwRkJVeXhOUVVGTkxFOUJRVTRzUlVGQlpTeE5RVUZOTEVkQlFVNHNRMEZCZUVNc1EwRkVhMEk3WVVGQmRFSTdPenRCUVdaM1F5eG5Ra0Z2UW5CRExFMUJRVTBzUzBGQlRpeEZRVUZoTzBGQlEySXNjMEpCUVUwc1QwRkJUaXhIUVVGblFpeExRVUZMTEV0QlFVd3NRMEZCVnl4TlFVRk5MRTlCUVU0c1EwRkJNMElzUTBGRVlUdGhRVUZxUWpzN1FVRkpRU3hyUWtGQlRTeFhRVUZPTEVkQlFXOUNMRTFCUVUwc1QwRkJUaXhIUVVGblFpeE5RVUZOTEVsQlFVNDdPenRCUVhoQ1NTeG5Ra0V5UW5CRExFTkJRVU1zUzBGQlN5eHJRa0ZCVEN4RlFVRjVRanRCUVVNeFFpeHpRa0ZCVFN4UlFVRk9MRWRCUVdsQ0xEQkNRVUZsTEUxQlFVMHNWMEZCVGl4RlFVRnRRaXhQUVVGc1F5eERRVUZxUWl4RFFVUXdRanRoUVVFNVFqczdPMEZCTTBKM1F5eG5Ra0ZuUTNCRExFMUJRVTBzU1VGQlRpeExRVUZsTEUxQlFVMHNUMEZCVGl4RlFVRmxPMEZCUXpsQ0xEWkNRVUZoTEVsQlFXSXNRMEZFT0VJN1FVRkZPVUlzYzBKQlFVMHNTVUZCVGl4SFFVRmhMRTFCUVUwc1QwRkJUaXhEUVVacFFqdGhRVUZzUXpzN08wRkJhRU4zUXl4blFrRnpRMnhETEdkQ1FVRm5RaXhMUVVGRExFTkJRVTBzU1VGQlRpeEpRVUZqTEUxQlFVMHNTVUZCVGl4RFFVRlhMRk5CUVZnc1IwRkJkMElzVFVGQlRTeEpRVUZPTEVOQlFWY3NVMEZCV0N4RFFVRnhRaXhOUVVGTkxFOUJRVTRzUlVGQlpTeExRVUZ3UXl4RFFVRjJReXhIUVVGdlJpeE5RVUZOTEU5QlFVNDdPenRCUVhSRGJFVXNaMEpCZVVOd1F5eERRVUZETEUxQlFVMHNUVUZCVGl4RlFVRmpPMEZCUTJZc2NVSkJRVXNzUzBGQlRDeERRVUZYTEVkQlFWZ3NTVUZCYTBJc1lVRkJiRUlzUTBGRVpUdGhRVUZ1UWl4TlFVVlBPMEZCUTBnc2NVSkJRVXNzVFVGQlRDeERRVUZaTEUxQlFVMHNUVUZCVGl4RFFVRmFMRU5CUVRCQ0xGRkJRVEZDTEVOQlFXMURMRTFCUVUwc1VVRkJUaXhEUVVGdVF5eEhRVUZ4UkN4aFFVRnlSQ3hEUVVSSE8yRkJSbEE3VTBGNlEwbzdPenRCUVVwdlF5eGhRWEZFTDBJc1NVRkJTU3hMUVVGSkxFTkJRVW9zUlVGQlR5eExRVUZKTEV0QlFVc3NZVUZCVEN4RlFVRnZRaXhKUVVGNFF5eEZRVUUyUXp0QlFVTjZReXhuUWtGQlRTeFJRVUZOTEV0QlFVc3NWVUZCVEN4RFFVRm5RaXhGUVVGb1FpeERRVUZPTEVOQlJHMURPMEZCUlhwRExHZENRVUZOTEZOQlFWRXNTMEZCU3l4TlFVRk1MRU5CUVZrc1MwRkJXaXhEUVVGU0xFTkJSbTFET3p0QlFVbDZReXh0UWtGQlRTeFBRVUZPTEVkQlFXZENMRTlCUVUwc1NVRkJUaXhEUVVGWExFOUJRVmdzUTBGQmJVSXNUMEZCVFN4UlFVRk9MRVZCUVdkQ0xFOUJRVTBzVVVGQlRpeERRVUZ1UkN4RFFVcDVRenM3UVVGTmVrTXNhVUpCUVVzc1MwRkJUQ3hEUVVGWExFdEJRVmdzU1VGQmEwSXNUMEZCVFN4UFFVRk9MRU5CVG5WQ08xTkJRVGRET3p0QlFWTkJMRmxCUVVrc1MwRkJTeXhQUVVGTUxFVkJRV003UVVGRFpDeHBRa0ZCU3l4UFFVRk1MRU5CUVdFc1MwRkJTeXhMUVVGTUxFVkJRVmtzU1VGQmVrSXNSVUZFWXp0VFFVRnNRanM3UVVGSlFTeGxRVUZQTEVsQlFVTXNRMEZCU3l4VFFVRk1MRWRCUVd0Q0xFbEJRVzVDTEVkQlFUQkNMRlZCUVRGQ0xFTkJiRVUyUWpzN08wRkJhRTEwUXl4eFFrRnhVVVlzTmtKQlFXOUNPMWxCUVZvc09FUkJRVkVzYTBKQlFVazdXVUZEVWl4VFFVRXdRaXhOUVVFeFFpeFBRVVJST3p0WlFVTkhMSE5EUVVGbExHMUNRVVJzUWpzN1FVRkZhRUlzV1VGQlRTeFpRVUZaTEdkQ1FVRk5MRTlCUVU0c1dVRkJZeXhWUVVGa0xFTkJRVm9zUTBGR1ZUczdRVUZKYUVJc1dVRkJTU3hOUVVGS0xFVkJRVms3UVVGRFVpeHpRa0ZCVlN4SFFVRldMRU5CUVdNc1JVRkJSU3hqUVVGR0xFVkJRV1FzUlVGRVVUdFRRVUZhT3p0QlFVbEJMR1ZCUVU4c1UwRkJVQ3hEUVZKblFqczdPMEZCY2xGc1FpeHhRa0ZuVWtZc2VVSkJRVkU3UVVGRFNpeDNRa0ZCVFN4SlFVRk9MRmxCUkVrN1FVRkZTaXhsUVVGUExFbEJRVkFzUTBGR1NUczdPMEZCYUZKT0xIRkNRWEZTUml3eVFrRkJVenRCUVVOTUxIZENRVUZOTEV0QlFVNHNXVUZFU3p0QlFVVk1MR1ZCUVU4c1NVRkJVQ3hEUVVaTE96czdRVUZ5VWxBc2NVSkJNRkpHTERKQ1FVRlRPMEZCUTB3c1pVRkJUeXhMUVVGTExGRkJRVXdzUjBGQlowSXNTMEZCU3l4TFFVRk1MRVZCUVdoQ0xFZEJRU3RDTEV0QlFVc3NUVUZCVEN4RlFVRXZRaXhEUVVSR096czdRVUV4VWxBc2NVSkJPRkpHTEhsQ1FVRlJPMEZCUTBvc1dVRkJUU3hUUVVGVExFdEJRVXNzVFVGQlRDeERRVVJZTzBGQlJVb3NkMEpCUVUwc1MwRkJUaXhaUVVaSk96dEJRVWxLTEdGQlFVc3NTVUZCU1N4SFFVRktMRWxCUVZjc1RVRkJhRUlzUlVGQmQwSTdRVUZEY0VJc1owSkJRVWtzVDBGQlR5eGpRVUZRTEVOQlFYTkNMRWRCUVhSQ0xFTkJRVW9zUlVGQlowTTdRVUZETlVJc2RVSkJRVThzUjBGQlVDeEZRVUZaTEVsQlFWb3NSMEZCYlVJc1QwRkJUeXhIUVVGUUxFVkJRVmtzVFVGQldpeEhRVUZ4UWl4UFFVRlBMRWRCUVZBc1JVRkJXU3hQUVVGYUxFTkJSRm83WVVGQmFFTTdVMEZFU2pzN1FVRk5RU3hsUVVGUExFbEJRVkFzUTBGV1NUczdPMEZCT1ZKT0xGZEJNbE5MTEdsRVFVRnRRaXhQUVVGUE8wRkJRemRDTERSQ1FVRlpMRXRCUVVzc1UwRkJUQ3hEUVVGbExGbEJRV1lzUlVGQlowTXNUVUZCTlVNc1EwRkVOa0k3T3p0QlFUTlRMMElzVjBFclUwc3NhVVJCUVcxQ0xFOUJRVTg3UVVGRE4wSXNORUpCUVZrc1MwRkJTeXhUUVVGTUxFTkJRV1VzV1VGQlppeEZRVUZuUXl4TlFVRTFReXhEUVVRMlFqczdPMWRCTDFNdlFqczdPMEZCYjFST0xFOUJRVThzVTBGQlVDeERRVUZwUWl4blFrRkJha0lzUjBGQmIwTXNVMEZCY0VNN1FVRkRRU3hQUVVGUExGTkJRVkFzUTBGQmFVSXNXVUZCYWtJc1IwRkJaME03UVVGRE5VSXNZVUZCVXl4RFFVRlVPMEZCUTBFc1kwRkJWU3hEUVVGV08wRkJRMEVzVjBGQlR5eExRVUZRTzBGQlEwRXNVMEZCU3l4VFFVRk1PMEZCUTBFc1UwRkJTeXhUUVVGTU8wRkJRMEVzWlVGQlZ5eFRRVUZZTzBOQlRrbzdPMnRDUVZObElpd2labWxzWlNJNklrRmpkR2x2Ymk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRDOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1ZHRnpheUJtY205dElDY3VMaTkwWVhOckwxUmhjMnNuTzF4dWFXMXdiM0owSUhzZ2MzQmxaV1JRWlhKVFpXTnZibVFnZlNCbWNtOXRJQ2N1TGk5cGJtTXZZMkZzWXljN1hHNXBiWEJ2Y25RZ2V5QnBjMDUxYlN3Z2FYTlBZbW9zSUdselUzUnlhVzVuSUgwZ1puSnZiU0FuTGk0dmFXNWpMM1YwYVd4ekp6dGNibWx0Y0c5eWRDQmtaWFJsWTNSV1lXeDFaVlI1Y0dVZ1puSnZiU0FuTGk0dmRtRnNkV1V0ZEhsd1pYTXZaR1YwWldOMEp6dGNibWx0Y0c5eWRDQk9WVTFGVWtsRFFVeGZWa0ZNVlVWVElHWnliMjBnSnk0dUwybHVZeTl1ZFcxbGNtbGpZV3d0ZG1Gc2RXVnpKenRjYm1sdGNHOXlkQ0JrWlhSbFkzUkJaR0Z3ZEdWeUlHWnliMjBnSnk0dUwybHVZeTlrWlhSbFkzUXRZV1JoY0hSbGNpYzdYRzVjYm1OdmJuTjBJRTVWVFY5T1ZVMUZVa2xEUVV4ZlZrRk1WVVZUSUQwZ1RsVk5SVkpKUTBGTVgxWkJURlZGVXk1c1pXNW5kR2c3WEc1Y2JtTnZibk4wSUdSbFptRjFiSFJTWlc1a1pYSmxjaUE5SUNoN0lITjBZWFJsTENCaFpHRndkR1Z5TENCaFpHRndkR1Z5UkdGMFlTd2daV3hsYldWdWRDQjlLU0E5UGlCaFpHRndkR1Z5S0dWc1pXMWxiblFzSUhOMFlYUmxMQ0JoWkdGd2RHVnlSR0YwWVNrN1hHNWNibU52Ym5OMElHTnZiblpsY25SSlpsTm9iM1ZzWkVKbFRuVnRZbVZ5SUQwZ0tIWmhiSFZsS1NBOVBpQWhhWE5PWVU0b2RtRnNkV1VwSUQ4Z2NHRnljMlZHYkc5aGRDaDJZV3gxWlNrZ09pQjJZV3gxWlR0Y2JseHVZMnhoYzNNZ1FXTjBhVzl1SUdWNGRHVnVaSE1nVkdGemF5QjdYRzRnSUNBZ1kyOXVjM1J5ZFdOMGIzSW9jSEp2Y0hNZ1BTQjdmU2tnZTF4dUlDQWdJQ0FnSUNCd2NtOXdjeTV6ZEdGMFpTQTlJSHQ5TzF4dUlDQWdJQ0FnSUNCd2NtOXdjeTUyWVd4MVpVdGxlWE1nUFNCYlhUdGNiaUFnSUNBZ0lDQWdjSEp2Y0hNdWNHRnlaVzUwUzJWNWN5QTlJRnRkTzF4dUlDQWdJQ0FnSUNCemRYQmxjaWh3Y205d2N5azdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5cGNiaUFnSUNBZ0lDQWdJeUJUWlhRZ1FXTjBhVzl1SUhCeWIzQmxjblJwWlhOY2JpQWdJQ0FnSUNBZ0l5TWdVMlYwSUhWelpYSXRaR1ZtYVc1bFpDQkJZM1JwYjI0Z2NISnZjR1Z5ZEdsbGMxeHVYRzRnSUNBZ0lDQWdJRUJ3WVhKaGJTQmJiMkpxWldOMFhWeHVJQ0FnSUNBZ0lDQkFjbVYwZFhKdUlGdEJZM1JwYjI1ZFhHNGdJQ0FnS2k5Y2JpQWdJQ0J6WlhRb2NISnZjSE1nUFNCN2ZTa2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxuWmhiSFZsY3lBOUlIUm9hWE11ZG1Gc2RXVnpJSHg4SUh0OU8xeHVYRzRnSUNBZ0lDQWdJR052Ym5OMElIc2dkbUZzZFdWekxDQXVMaTV3Y205d2MxUnZVMlYwSUgwZ1BTQndjbTl3Y3p0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnYVc1b1pYSnBkR0ZpYkdVZ1BTQjdmVHRjYmx4dUlDQWdJQ0FnSUNBdkx5QlRaWFFnYm05dUxXTnZibk4xYldWa0lIQnliM0JsY25ScFpYTmNiaUFnSUNBZ0lDQWdjM1Z3WlhJdWMyVjBLSEJ5YjNCelZHOVRaWFFwTzF4dVhHNGdJQ0FnSUNBZ0lDOHZJRVJsZEdWamRDQmpiM0p5WldOMElHQmhaR0Z3ZEdWeVlDQnBaaUJ1YjI1bElHVjRhWE4wY3lCaGJtUWdZR1ZzWlcxbGJuUmdJR2x6SUdKbGFXNW5JSE5sZEZ4dUlDQWdJQ0FnSUNCcFppQW9kR2hwY3k1bGJHVnRaVzUwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb0lYUm9hWE11WVdSaGNIUmxjaWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM4dklFUjFZMnQwZVhCcGMyZ2dZMmhsWTJzZ1ptOXlJRUZrWVhCMFpYSmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG1Ga1lYQjBaWElnUFNCa1pYUmxZM1JCWkdGd2RHVnlLSFJvYVhNdVpXeGxiV1Z1ZENrN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvZEdocGN5NWhaR0Z3ZEdWeUxtZGxkRVZzWlcxbGJuUkVZWFJoS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVlXUmhjSFJsY2tSaGRHRWdQU0IwYUdsekxtRmtZWEIwWlhJdVoyVjBSV3hsYldWdWRFUmhkR0VvZEdocGN5NWxiR1Z0Wlc1MEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDZ2hkR2hwY3k1dmJsSmxibVJsY2lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YjI1U1pXNWtaWElnUFNCa1pXWmhkV3gwVW1WdVpHVnlaWEk3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBdkx5QlFjbWx0WlNCaGJpQnZZbXBsWTNRZ2RHOGdhVzVvWlhKcGRDQm1jbTl0TENCM2FYUm9JRzl1YkhrZ1lIWmhiSFZsWUNCd2NtOXdaWEowYVdWelhHNGdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHdGxlU0JwYmlCMGFHbHpMbVJsWm1GMWJIUldZV3gxWlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIUm9hWE11WkdWbVlYVnNkRlpoYkhWbExtaGhjMDkzYmxCeWIzQmxjblI1S0d0bGVTa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2NISnZjSE5VYjFObGRDNW9ZWE5QZDI1UWNtOXdaWEowZVNoclpYa3BLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbHVhR1Z5YVhSaFlteGxXMnRsZVYwZ1BTQndjbTl3YzFSdlUyVjBXMnRsZVYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUdsbUlDaDBhR2x6VzJ0bGVWMGdJVDA5SUhWdVpHVm1hVzVsWkNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwYm1obGNtbDBZV0pzWlZ0clpYbGRJRDBnZEdocGMxdHJaWGxkTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDOHZJRlZ3WkdGMFpTQmxlR2x6ZEdsdVp5QjJZV3gxWlhNZ2QybDBhQ0JwYm1obGNtbDBZV0pzWlNCd2NtOXdaWEowYVdWelhHNGdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHdGxlU0JwYmlCMGFHbHpMblpoYkhWbGN5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFJvYVhNdWRtRnNkV1Z6TG1oaGMwOTNibEJ5YjNCbGNuUjVLR3RsZVNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG5aaGJIVmxjMXRyWlhsZElEMGdleUF1TGk1MGFHbHpMblpoYkhWbGMxdHJaWGxkTENBdUxpNXBibWhsY21sMFlXSnNaU0I5TzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0x5OGdWWEJrWVhSbFhHNGdJQ0FnSUNBZ0lHbG1JQ2gyWVd4MVpYTXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YzJWMFZtRnNkV1Z6S0haaGJIVmxjeXdnYVc1b1pYSnBkR0ZpYkdVcE8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QlFjbVZqYjIxd2RYUmxJRzUxYldKbGNpQnZaaUIyWVd4MVpTQnJaWGtnWVc1a0lIQmhjbVZ1ZENCclpYbHpJSFJ2SUdGMmIybGtJSEJsY2kxbWNtRnRaU0J0WldGemRYSmxiV1Z1ZEZ4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1dWRXMVdZV3gxWlV0bGVYTWdQU0IwYUdsekxuWmhiSFZsUzJWNWN5NXNaVzVuZEdnN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtNTFiVkJoY21WdWRFdGxlWE1nUFNCMGFHbHpMbkJoY21WdWRFdGxlWE11YkdWdVozUm9PMXh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2MyVjBWbUZzZFdWektIWmhiSFZsY3l3Z2FXNW9aWEpwZENrZ2UxeHVJQ0FnSUNBZ0lDQXZMeUJKZEdWeVlYUmxJRzkyWlhJZ1lXeHNJR2x1WTI5dGFXNW5JSFpoYkhWbGN5QmhibVFnYzJWMFhHNGdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHdGxlU0JwYmlCMllXeDFaWE1wSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMllXeDFaWE11YUdGelQzZHVVSEp2Y0dWeWRIa29hMlY1S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHeGxkQ0JvWVhORGFHbHNaSEpsYmlBOUlHWmhiSE5sTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJR05vYVd4a2NtVnVJRDBnZTMwN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXZMeUJOWlhKblpTQnBiblJ2SUdWNGFYTjBhVzVuSUhaaGJIVmxJRzl5SUdOeVpXRjBaU0J1WlhkY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0IyWVd4MVpVRnNjbVZoWkhsRmVHbHpkSE1nUFNCMGFHbHpMblpoYkhWbGMxdHJaWGxkSUNFOVBTQjFibVJsWm1sdVpXUTdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdiR1YwSUc1bGQxWmhiSFZsSUQwZ2RtRnNkV1ZCYkhKbFlXUjVSWGhwYzNSeklEOGdleUF1TGk1MGFHbHpMblpoYkhWbGMxdHJaWGxkSUgwZ09pQjdJQzR1TG1sdWFHVnlhWFFnZlR0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDOHZJRWxtSUhaaGJIVmxjeUJwY3lCdWIzUWdZVzRnYjJKcVpXTjBMQ0JoYzNOcFoyNGdkbUZzZFdVZ2RHOGdaR1ZtWVhWc2RDQndjbTl3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tDRnBjMDlpYWloMllXeDFaWE5iYTJWNVhTa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JtVjNWbUZzZFdWYmRHaHBjeTVrWldaaGRXeDBWbUZzZFdWUWNtOXdYU0E5SUhaaGJIVmxjMXRyWlhsZE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRzVsZDFaaGJIVmxJRDBnZXlBdUxpNXVaWGRXWVd4MVpTd2dMaTR1ZG1Gc2RXVnpXMnRsZVYwZ2ZUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0F2THlCSlppQjNaU2QyWlNCbmIzUWdZVzRnWVdSaGNIUmxjaXdnWjJWMElIUm9aU0JqZFhKeVpXNTBJSFpoYkhWbFhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLRzVsZDFaaGJIVmxMbU4xY25KbGJuUWdQVDA5SUhWdVpHVm1hVzVsWkNBbUppQjBhR2x6TG1Ga1lYQjBaWElwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdibVYzVm1Gc2RXVXVZM1Z5Y21WdWRDQTlJR052Ym5abGNuUkpabE5vYjNWc1pFSmxUblZ0WW1WeUtIUm9hWE11WVdSaGNIUmxjaTVuWlhRb2RHaHBjeTVsYkdWdFpXNTBMQ0JyWlhrcEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2JtVjNWbUZzZFdVdVpuSnZiU0E5UFQwZ2RXNWtaV1pwYm1Wa0lDWW1JSFJvYVhNdVlXUmhjSFJsY2lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J1WlhkV1lXeDFaUzVtY205dElEMGdibVYzVm1Gc2RXVXVZM1Z5Y21WdWREdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0F2THlCQmNIQnNlU0JrWldaaGRXeDBJSFpoYkhWbElIQnliM0JsY25ScFpYTmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvSVhaaGJIVmxRV3h5WldGa2VVVjRhWE4wY3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J1WlhkV1lXeDFaU0E5SUhzZ0xpNHVkR2hwY3k1a1pXWmhkV3gwVm1Gc2RXVXNJQzR1TG01bGQxWmhiSFZsSUgwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdMeThnU1dZZ2QyVWdaRzl1SjNRZ2FHRjJaU0JoSUhaaGJIVmxJSFI1Y0dVZ1lXNWtJSGRsSUdSdklHaGhkbVVnWVc0Z1FXUmhjSFJsY2l3Z1kyaGxZMnNnWm05eUlIUjVjR1VnZDJsMGFDQjJZV3gxWlNCclpYbGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvSVc1bGQxWmhiSFZsTG5SNWNHVWdKaVlnZEdocGN5NWhaR0Z3ZEdWeUlDWW1JSFJvYVhNdVlXUmhjSFJsY2k1amFHVmphMVpoYkhWbFZIbHdaU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnVaWGRXWVd4MVpTNTBlWEJsSUQwZ2RHaHBjeTVoWkdGd2RHVnlMbU5vWldOclZtRnNkV1ZVZVhCbEtHdGxlU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0x5OGdTV1lnZDJVZ2MzUnBiR3dnWkc5dUozUWdhR0YyWlNCaElIWmhiSFZsSUhSNWNHVWdZVzVrSUhSb2FYTWdhWE1nZEdobElHWnBjbk4wSUhScGJXVWdkMlVuZG1VZ2MyVjBJSFJvYVhNZ2RtRnNkV1VzSUdOb1pXTnJJRzUxYldWeWFXTmhiQ0IyWVd4MVpYTWdabTl5SUhOMGNtbHVaM01nWVc1a0lIUmxjM1JjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb0lXNWxkMVpoYkhWbExuUjVjR1VnSmlZZ0lYUm9hWE11ZG1Gc2RXVnpXMnRsZVYwcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYm1WM1ZtRnNkV1V1ZEhsd1pTQTlJR1JsZEdWamRGWmhiSFZsVkhsd1pTaHVaWGRXWVd4MVpTazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1NXWWdkMlVnYUdGMlpTQmhJSFpoYkhWbElIUjVjR1VzSUdoaGJtUnNaUzRnVkdocGN5QnBjeUJ0ZVNCc1pXRnpkQ0JtWVhadmRYSnBkR1VnY0dGeWRDQnZaaUJRYjNCdGIzUnBiMjRzSUhOdkxpNHVJR1Z1YW05NUxseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2h1WlhkV1lXeDFaUzUwZVhCbEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z1RsVk5YMDVWVFVWU1NVTkJURjlXUVV4VlJWTTdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnY0hKdmNFNWhiV1VnUFNCT1ZVMUZVa2xEUVV4ZlZrRk1WVVZUVzJsZE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnZG1Gc2RXVlFjbTl3SUQwZ2JtVjNWbUZzZFdWYmNISnZjRTVoYldWZE8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXZMeUJKWmlCMGFHbHpJSEJ5YjNBZ2FYTWdZU0J6ZEhKcGJtY2dZVzVrSUhkbElHaGhkbVVnWVNCemNHeHBkSFJsY2l3Z2MzQnNhWFJjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNodVpYZFdZV3gxWlM1MGVYQmxMbWhoYzA5M2JsQnliM0JsY25SNUtDZHpjR3hwZENjcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdjM0JzYVhSUWNtOXdJRDBnYVhOVGRISnBibWNvZG1Gc2RXVlFjbTl3S1NBL0lHNWxkMVpoYkhWbExuUjVjR1V1YzNCc2FYUW9kbUZzZFdWUWNtOXdLU0E2SUh0OU8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWm05eUlDaHNaWFFnYzNCc2FYUkxaWGtnYVc0Z2MzQnNhWFJRY205d0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2h6Y0d4cGRGQnliM0F1YUdGelQzZHVVSEp2Y0dWeWRIa29jM0JzYVhSTFpYa3BLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0JqYjIxaWFXNWxaRXRsZVNBOUlHdGxlU0FySUhOd2JHbDBTMlY1TzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXZMeUJKWmlCM1pTQmtiMjRuZENCb1lYWmxJR0VnWTJocGJHUWdkbUZzZFdVZ1ptOXlJSFJvYVhNZ2EyVjVMQ0J0WVd0bElHOXVaVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tDRmphR2xzWkhKbGJsdGpiMjFpYVc1bFpFdGxlVjBwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQmtaV1poZFd4MFZtRnNkV1VnUFNBb2JtVjNWbUZzZFdVdWRIbHdaUzVrWldaaGRXeDBVSEp2Y0hNZ0ppWWdibVYzVm1Gc2RXVXVkSGx3WlM1a1pXWmhkV3gwVUhKdmNITmJjM0JzYVhSTFpYbGRLU0EvSUc1bGQxWmhiSFZsTG5SNWNHVXVaR1ZtWVhWc2RGQnliM0J6VzNOd2JHbDBTMlY1WFNBNklHNWxkMVpoYkhWbExuUjVjR1V1WkdWbVlYVnNkRkJ5YjNCeklIeDhJSHQ5TzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTJocGJHUnlaVzViWTI5dFltbHVaV1JMWlhsZElEMGdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0F1TGk1dVpYZFdZV3gxWlN4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0xpNHVaR1ZtWVhWc2RGWmhiSFZsTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCd1lYSmxiblE2SUd0bGVTeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMmhwYkdSTFpYazZJSE53YkdsMFMyVjVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZUdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHUmxiR1YwWlNCamFHbHNaSEpsYmx0amIyMWlhVzVsWkV0bGVWMHVkSGx3WlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYUdGelEyaHBiR1J5Wlc0Z1BTQjBjblZsTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyaHBiR1J5Wlc1YlkyOXRZbWx1WldSTFpYbGRXM0J5YjNCT1lXMWxYU0E5SUhCaGNuTmxSbXh2WVhRb2MzQnNhWFJRY205d1czTndiR2wwUzJWNVhTazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXZMeUJKWmlCM1pTQm9ZWFpsSUdFZ2RHVnRjR3hoZEdVZ1puVnVZM1JwYjI0c0lHZGxibVZ5WVhSbFhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0NGdVpYZFdZV3gxWlM1MFpXMXdiR0YwWlNBbUppQnVaWGRXWVd4MVpTNTBlWEJsTG5SbGJYQnNZWFJsSUNZbUlHbHpVM1J5YVc1bktIWmhiSFZsVUhKdmNDa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdibVYzVm1Gc2RXVXVkR1Z0Y0d4aGRHVWdQU0J1WlhkV1lXeDFaUzUwZVhCbExuUmxiWEJzWVhSbEtIWmhiSFZsVUhKdmNDazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJR2xtSUNodVpYZFdZV3gxWlM1MGVYQmxMbVJsWm1GMWJIUlFjbTl3Y3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRzVsZDFaaGJIVmxJRDBnZXlBdUxpNXVaWGRXWVd4MVpTd2dMaTR1Ym1WM1ZtRnNkV1V1ZEhsd1pTNWtaV1poZFd4MFVISnZjSE1nZlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFpoYkhWbFVISnZjQ0FoUFQwZ2RXNWtaV1pwYm1Wa0lDWW1JRzVsZDFaaGJIVmxMblI1Y0dVdWNHRnljMlVwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnVaWGRXWVd4MVpWdHdjbTl3VG1GdFpWMGdQU0J1WlhkV1lXeDFaUzUwZVhCbExuQmhjbk5sS0haaGJIVmxVSEp2Y0N3Z2JtVjNWbUZzZFdVcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlNBdkx5QkZibVFnZG1Gc2RXVWdkSGx3WlNCdWIyNXpaVzV6WlZ4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0x5OGdVMlYwSUdCd2NtVjJZQ0IwYnlCZ1kzVnljbVZ1ZEdBZ1ptOXlJR1pwY25OMElHWnlZVzFsSUdGbWRHVnlJSE5sZEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUc1bGQxWmhiSFZsTG5CeVpYWWdQU0J1WlhkV1lXeDFaUzVqZFhKeVpXNTBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzh2SUVsbUlIUm9hWE1nZG1Gc2RXVWdaRzlsYzI0bmRDQm9ZWFpsSUdOb2FXeGtjbVZ1TENCaFpHUWdkRzhnZG1Gc2RXVkxaWGx6WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tDRm9ZWE5EYUdsc1pISmxiaWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvZEdocGN5NTJZV3gxWlV0bGVYTXVhVzVrWlhoUFppaHJaWGtwSUQwOVBTQXRNU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NTJZV3gxWlV0bGVYTXVjSFZ6YUNoclpYa3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXZMeUJQY2lCaFpHUWdkRzhnY0dGeVpXNTBTMlY1YzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHNWxkMVpoYkhWbExtTm9hV3hrY21WdUlEMGdibVYzVm1Gc2RXVXVZMmhwYkdSeVpXNGdmSHdnZTMwN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIUm9hWE11Y0dGeVpXNTBTMlY1Y3k1cGJtUmxlRTltS0d0bGVTa2dQVDA5SUMweEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG5CaGNtVnVkRXRsZVhNdWNIVnphQ2hyWlhrcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1elpYUldZV3gxWlhNb1kyaHBiR1J5Wlc0cE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWRtRnNkV1Z6VzJ0bGVWMGdQU0J1WlhkV1lXeDFaVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lDOHFYRzRnSUNBZ0lDQWdJRVJsWTJsa1pTQjNhR1YwYUdWeUlIUm9hWE1nUVdOMGFXOXVJSGRwYkd3Z2NtVnVaR1Z5SUc5dUlHNWxlSFFnWm5KaGJXVmNibHh1SUNBZ0lDQWdJQ0JBY0dGeVlXMGdXMEZqZEdsdmJsMWNiaUFnSUNBZ0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZFhHNGdJQ0FnSUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFZ4dUlDQWdJQ0FnSUNCQWNtVjBkWEp1SUZ0aWIyOXNaV0Z1WFRvZ1VtVjBkWEp1SUhSeWRXVWdkRzhnY21WdVpHVnlYRzRnSUNBZ0tpOWNiaUFnSUNCM2FXeHNVbVZ1WkdWeUtHRmpkR2x2Yml3Z1puSmhiV1ZUZEdGdGNDd2daV3hoY0hObFpDa2dlMXh1SUNBZ0lDQWdJQ0JzWlhRZ2FHRnpRMmhoYm1kbFpDQTlJR1poYkhObE8xeHVYRzRnSUNBZ0lDQWdJQzh2SUVOb1pXTnJJR2xtSUdKaGMyVWdkbUZzZFdWeklHaGhkbVVnZFhCa1lYUmxaQ0JjYmlBZ0lDQWdJQ0FnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCMGFHbHpMbTUxYlZaaGJIVmxTMlY1Y3pzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCclpYa2dQU0IwYUdsekxuWmhiSFZsUzJWNWMxdHBYVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUhaaGJIVmxJRDBnZEdocGN5NTJZV3gxWlhOYmEyVjVYVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnVW5WdUlIUnlZVzV6Wm05eWJTQm1kVzVqZEdsdmJpQW9hV1lnY0hKbGMyVnVkQ2xjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2gyWVd4MVpTNTBjbUZ1YzJadmNtMHBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IyWVd4MVpTNWpkWEp5Wlc1MElEMGdkbUZzZFdVdWRISmhibk5tYjNKdEtIWmhiSFZsTG1OMWNuSmxiblFzSUd0bGVTd2dkR2hwY3lrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUVOaGNDQnRhVzVwYlhWdFhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2FYTk9kVzBvZG1Gc2RXVXViV2x1S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIWmhiSFZsTG1OMWNuSmxiblFnUFNCTllYUm9MbTFoZUNoMllXeDFaUzVqZFhKeVpXNTBMQ0IyWVd4MVpTNXRhVzRwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJEWVhBZ2JXRjRhVzExYlZ4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0dselRuVnRLSFpoYkhWbExtMWhlQ2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMllXeDFaUzVqZFhKeVpXNTBJRDBnVFdGMGFDNXRhVzRvZG1Gc2RXVXVZM1Z5Y21WdWRDd2dkbUZzZFdVdWJXRjRLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdVbTkxYm1RZ2JuVnRZbVZ5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvZG1Gc2RXVXVjbTkxYm1RcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZV3gxWlM1amRYSnlaVzUwSUQwZ1RXRjBhQzV5YjNWdVpDaDJZV3gxWlM1amRYSnlaVzUwS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdkbUZzZFdVdVpuSmhiV1ZEYUdGdVoyVWdQU0IyWVd4MVpTNWpkWEp5Wlc1MElDMGdkbUZzZFdVdWNISmxkanRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnVlhCa1lYUmxJSFpsYkc5amFYUjVYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9JWFJvYVhNdVkyRnNZM1ZzWVhSbGMxWmxiRzlqYVhSNUtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZzZFdVdWRtVnNiMk5wZEhrZ1BTQnpjR1ZsWkZCbGNsTmxZMjl1WkNoMllXeDFaUzVtY21GdFpVTm9ZVzVuWlN3Z1pXeGhjSE5sWkNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUVsbUlIUm9hWE1nZG1Gc2RXVWdhR0Z6SUdOb1lXNW5aV1JjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2gyWVd4MVpTNXdjbVYySUNFOVBTQjJZV3gxWlM1amRYSnlaVzUwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FHRnpRMmhoYm1kbFpDQTlJSFJ5ZFdVN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnNkV1V1Y0hKbGRpQTlJSFpoYkhWbExtTjFjbkpsYm5RN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUVGd2NHVnVaQ0IxYm1sMFhHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQjJZV3gxWlVadmNsTjBZWFJsSUQwZ0tIWmhiSFZsTG5SNWNHVWdKaVlnZG1Gc2RXVXVkSGx3WlM1elpYSnBZV3hwZW1VcElEOGdkbUZzZFdVdWRIbHdaUzV6WlhKcFlXeHBlbVVvZG1Gc2RXVXVZM1Z5Y21WdWRDd2dkbUZzZFdVcElEb2dkbUZzZFdVdVkzVnljbVZ1ZER0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1FXUmtJSFJ2SUhOMFlYUmxJR2xtSUhSb2FYTWdhWE1nYm05MElHRWdZMmhwYkdRZ2RtRjFaVnh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLQ0YyWVd4MVpTNXdZWEpsYm5RcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG5OMFlYUmxXMnRsZVYwZ1BTQjJZV3gxWlVadmNsTjBZWFJsTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG5aaGJIVmxjMXQyWVd4MVpTNXdZWEpsYm5SZExtTm9hV3hrY21WdVczWmhiSFZsTG1Ob2FXeGtTMlY1WFNBOUlIWmhiSFZsUm05eVUzUmhkR1U3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBdkx5QlZjR1JoZEdVZ2NHRnlaVzUwSUhaaGJIVmxjMXh1SUNBZ0lDQWdJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUhSb2FYTXViblZ0VUdGeVpXNTBTMlY1Y3pzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCclpYa2dQU0IwYUdsekxuQmhjbVZ1ZEV0bGVYTmJhVjA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCMllXeDFaU0E5SUhSb2FYTXVkbUZzZFdWelcydGxlVjA3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJSFpoYkhWbExtTjFjbkpsYm5RZ1BTQjJZV3gxWlM1MGVYQmxMbU52YldKcGJtVW9kbUZzZFdVdVkyaHBiR1J5Wlc0c0lIWmhiSFZsTG5SbGJYQnNZWFJsS1R0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXpkR0YwWlZ0clpYbGRJRDBnZG1Gc2RXVXVZM1Z5Y21WdWREdGNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUdsbUlDaDBhR2x6TG05dVJuSmhiV1VwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWIyNUdjbUZ0WlNoMGFHbHpMbk4wWVhSbExDQjBhR2x6S1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQW9kR2hwY3k1dmJrTnNaV0Z1ZFhBcElEOGdkSEoxWlNBNklHaGhjME5vWVc1blpXUTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2FXNW9aWEpwZENod2NtOXdjeUE5SUh0OUtTQjdYRzRnSUNBZ0lDQWdJR052Ym5OMElIc2dkbUZzZFdWekxDQXVMaTV3Y205d2MxUnZVMlYwSUgwZ1BTQndjbTl3Y3p0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnYm1WM1FXTjBhVzl1SUQwZ2MzVndaWEl1YVc1b1pYSnBkQ2h3Y205d2MxUnZVMlYwS1R0Y2JseHVJQ0FnSUNBZ0lDQnBaaUFvZG1Gc2RXVnpLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnVaWGRCWTNScGIyNHVjMlYwS0hzZ2RtRnNkV1Z6SUgwcE8xeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJRzVsZDBGamRHbHZianRjYmlBZ0lDQjlYRzVjYmlBZ0lDQndZWFZ6WlNncElIdGNiaUFnSUNBZ0lDQWdjM1Z3WlhJdWMzUnZjQ2dwTzF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnSUNCOVhHNWNiaUFnSUNCeVpYTjFiV1VvS1NCN1hHNGdJQ0FnSUNBZ0lITjFjR1Z5TG5OMFlYSjBLQ2s3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhSdloyZHNaU2dwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTXVhWE5CWTNScGRtVWdQeUIwYUdsekxuQmhkWE5sS0NrZ09pQjBhR2x6TG5KbGMzVnRaU2dwTzF4dUlDQWdJSDFjYmx4dUlDQWdJSE4wWVhKMEtDa2dlMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQjJZV3gxWlhNZ1BTQjBhR2x6TG5aaGJIVmxjenRjYmlBZ0lDQWdJQ0FnYzNWd1pYSXVjM1JoY25Rb0tUdGNibHh1SUNBZ0lDQWdJQ0JtYjNJZ0tHeGxkQ0JyWlhrZ2FXNGdkbUZzZFdWektTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9kbUZzZFdWekxtaGhjMDkzYmxCeWIzQmxjblI1S0d0bGVTa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IyWVd4MVpYTmJhMlY1WFM1d2NtVjJJRDBnZG1Gc2RXVnpXMnRsZVYwdWIzSnBaMmx1SUQwZ2RtRnNkV1Z6VzJ0bGVWMHVZM1Z5Y21WdWREdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQWdJSDFjYmx4dUlDQWdJSE4wWVhScFl5QmxlSFJsYm1SRVpXWmhkV3gwVm1Gc2RXVW9jSEp2Y0hNcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIc2dMaTR1ZEdocGN5NXdjbTkwYjNSNWNHVXVaR1ZtWVhWc2RGWmhiSFZsTENBdUxpNXdjbTl3Y3lCOU8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhOMFlYUnBZeUJsZUhSbGJtUkVaV1poZFd4MFVISnZjSE1vY0hKdmNITXBJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSHNnTGk0dWRHaHBjeTV3Y205MGIzUjVjR1V1WkdWbVlYVnNkRkJ5YjNCekxDQXVMaTV3Y205d2N5QjlPMXh1SUNBZ0lIMWNibjFjYmx4dVFXTjBhVzl1TG5CeWIzUnZkSGx3WlM1a1pXWmhkV3gwVm1Gc2RXVlFjbTl3SUQwZ0oyTjFjbkpsYm5Rbk8xeHVRV04wYVc5dUxuQnliM1J2ZEhsd1pTNWtaV1poZFd4MFZtRnNkV1VnUFNCN1hHNGdJQ0FnWTNWeWNtVnVkRG9nTUN4Y2JpQWdJQ0IyWld4dlkybDBlVG9nTUN4Y2JpQWdJQ0J5YjNWdVpEb2dabUZzYzJVc1hHNGdJQ0FnYldsdU9pQjFibVJsWm1sdVpXUXNYRzRnSUNBZ2JXRjRPaUIxYm1SbFptbHVaV1FzWEc0Z0lDQWdkSEpoYm5ObWIzSnRPaUIxYm1SbFptbHVaV1JjYm4wN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElFRmpkR2x2Ymp0Y2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL0FjdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9BY3Rpb24yID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9BY3Rpb24nKTtcblxudmFyIF9BY3Rpb24zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQWN0aW9uMik7XG5cbnZhciBfZ2VuZXJhdGVCbGVuZEN1cnZlID0gcmVxdWlyZSgnLi9mbG93L2dlbmVyYXRlLWJsZW5kLWN1cnZlJyk7XG5cbnZhciBfZ2VuZXJhdGVCbGVuZEN1cnZlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dlbmVyYXRlQmxlbmRDdXJ2ZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLypcbiAgICBNZXRob2RzIGFuZCBwcm9wZXJ0aWVzIHRvIGFkZCB0byBib3VuZCBBY3Rpb25zXG4qL1xudmFyIGJvdW5kT25TdGFydCA9IGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICByZXR1cm4gYWN0aW9uLmZsb3cuYWN0aXZhdGVBY3Rpb24oYWN0aW9uLmlkLCBhY3Rpb24pO1xufTtcbnZhciBib3VuZE9uU3RvcCA9IGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICByZXR1cm4gYWN0aW9uLmZsb3cuZGVhY3RpdmF0ZUFjdGlvbihhY3Rpb24uaWQpO1xufTtcbnZhciBib3VuZFByb3BzID0gZnVuY3Rpb24gKGZsb3cpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBmbG93OiBmbG93LFxuICAgICAgICBpc1ByaW9yaXR5OiB0cnVlLFxuICAgICAgICBvbkFjdGl2YXRlOiBib3VuZE9uU3RhcnQsXG4gICAgICAgIG9uRGVhY3RpdmF0ZTogYm91bmRPblN0b3BcbiAgICB9O1xufTtcblxudmFyIEZsb3cgPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICAgIF9pbmhlcml0cyhGbG93LCBfQWN0aW9uKTtcblxuICAgIGZ1bmN0aW9uIEZsb3cocHJvcHMpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZsb3cpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgICAgIF90aGlzLmFjdGl2ZUFjdGlvbnMgPSB7fTtcbiAgICAgICAgX3RoaXMubnVtQWN0aXZlQWN0aW9ucyA9IDA7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBGbG93LnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiBzZXQocHJvcHMpIHtcbiAgICAgICAgX0FjdGlvbi5wcm90b3R5cGUuc2V0LmNhbGwodGhpcywgcHJvcHMpO1xuXG4gICAgICAgIHRoaXMub25jZSgpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICAvKlxuICAgICAgICBCaW5kIEFjdGlvbiB0byBBY3RvclxuICAgICovXG5cblxuICAgIEZsb3cucHJvdG90eXBlLmNvbm5lY3QgPSBmdW5jdGlvbiBjb25uZWN0KGFjdGlvbikge1xuICAgICAgICB2YXIgaW5oZXJpdGVkQWN0aW9uID0gYWN0aW9uLmluaGVyaXQoKTtcbiAgICAgICAgdmFyIG5ld1ZhbHVlcyA9IHt9O1xuICAgICAgICB2YXIgaGFzTmV3VmFsdWVzID0gZmFsc2U7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHZhbHVlcyBvbiBhY3RvciB0aGF0IGRvbid0IGV4aXN0XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBpbmhlcml0ZWRBY3Rpb24udmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAoaW5oZXJpdGVkQWN0aW9uLnZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmICF0aGlzLnZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgbmV3VmFsdWVzW2tleV0gPSB7fTtcbiAgICAgICAgICAgICAgICBoYXNOZXdWYWx1ZXMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhhc05ld1ZhbHVlcykge1xuICAgICAgICAgICAgdGhpcy5zZXQoeyB2YWx1ZXM6IG5ld1ZhbHVlcyB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGluaGVyaXRlZEFjdGlvbi5wYXJlbnRJZCA9IGFjdGlvbi5pZDtcblxuICAgICAgICByZXR1cm4gaW5oZXJpdGVkQWN0aW9uLnNldChib3VuZFByb3BzKHRoaXMsIGluaGVyaXRlZEFjdGlvbikpO1xuICAgIH07XG5cbiAgICAvKlxuICAgICAgICBTdGFydCBBY3RvclxuICAgICAgICAgSWYgQWN0aW9uIGlzIHByb3ZpZGVkLCBiaW5kIGl0IHRvIHRoaXMgQWN0b3IgYW5kIHN0YXJ0XG4gICAgICAgICBAcGFyYW0gKG9wdGlvbmFsKSBbQWN0aW9uXVxuICAgICovXG5cblxuICAgIEZsb3cucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICAgIF9BY3Rpb24ucHJvdG90eXBlLnN0YXJ0LmNhbGwodGhpcyk7XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMuYWN0aXZlQWN0aW9ucykge1xuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlQWN0aW9ucy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFjdGlvbiA9IHRoaXMuYWN0aXZlQWN0aW9uc1trZXldO1xuICAgICAgICAgICAgICAgIGlmICghYWN0aW9uLmlzQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbi5zdGFydCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBGbG93LnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgICAgX0FjdGlvbi5wcm90b3R5cGUuc3RvcC5jYWxsKHRoaXMpO1xuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLmFjdGl2ZUFjdGlvbnMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZUFjdGlvbnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlQWN0aW9uc1trZXldLnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBGbG93LnByb3RvdHlwZS53aWxsUmVuZGVyID0gZnVuY3Rpb24gd2lsbFJlbmRlcihhY3RvciwgZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSB0aGlzLnZhbHVlS2V5c1tpXTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG4gICAgICAgICAgICB2YXIgZHJpdmVyID0gdmFsdWUubnVtRHJpdmVycyA/IHRoaXMuYWN0aXZlQWN0aW9uc1t2YWx1ZS5kcml2ZXJzWzBdXSA6IGZhbHNlO1xuICAgICAgICAgICAgdmFyIG5ld0N1cnJlbnQgPSB2YWx1ZS5udW1Ecml2ZXJzID8gZHJpdmVyLnZhbHVlc1trZXldLmN1cnJlbnQgOiB2YWx1ZS5jdXJyZW50O1xuXG4gICAgICAgICAgICBpZiAodmFsdWUuYmxlbmRDdXJ2ZSkge1xuICAgICAgICAgICAgICAgIG5ld0N1cnJlbnQgPSB2YWx1ZS5ibGVuZEN1cnZlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSBuZXdDdXJyZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF9BY3Rpb24ucHJvdG90eXBlLndpbGxSZW5kZXIuY2FsbCh0aGlzLCBhY3RvciwgZnJhbWVTdGFtcCwgZWxhcHNlZCk7XG4gICAgfTtcblxuICAgIC8qXG4gICAgICAgIEFkZCBhY3RpdmUgYWN0aW9uc1xuICAgICAgICAgQHBhcmFtIFtudW1iZXJdXG4gICAgICAgIEBwYXJhbSBbQWN0aW9uXVxuICAgICovXG5cblxuICAgIEZsb3cucHJvdG90eXBlLmFjdGl2YXRlQWN0aW9uID0gZnVuY3Rpb24gYWN0aXZhdGVBY3Rpb24oaWQsIGFjdGlvbikge1xuICAgICAgICB0aGlzLmFjdGl2ZUFjdGlvbnNbaWRdID0gYWN0aW9uO1xuICAgICAgICB0aGlzLm51bUFjdGl2ZUFjdGlvbnMrKztcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFjdGlvbi5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgICAgICAgdmFyIGtleSA9IGFjdGlvbi52YWx1ZUtleXNbaV07XG4gICAgICAgICAgICB2YXIgYWN0aW9uVmFsdWUgPSBhY3Rpb24udmFsdWVzW2tleV07XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuXG4gICAgICAgICAgICAvLyBJZiB3ZSdyZSBibGVuZGluZyB0aGlzIGFjdGlvbiwgYW5kIHRoZXJlJ3Mgb24gYWxyZWFkeSBpbiBwcm9ncmVzc1xuICAgICAgICAgICAgaWYgKGFjdGlvbi5ibGVuZCAmJiB2YWx1ZS5udW1Ecml2ZXJzICYmICF2YWx1ZS5ibGVuZEN1cnZlICYmIHZhbHVlLmRyaXZlcnNbMF0ucHJvdG90eXBlID09PSBhY3Rpb24ucHJvdG90eXBlKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUuYmxlbmRDdXJ2ZSA9ICgwLCBfZ2VuZXJhdGVCbGVuZEN1cnZlMi5kZWZhdWx0KSh0aGlzLmFjdGl2ZUFjdGlvbnNbdmFsdWUuZHJpdmVyc1swXV0sIGFjdGlvbiwgdmFsdWUsIGtleSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFhY3Rpb24uaXNTY3J1YmJpbmcpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS5ibGVuZEN1cnZlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIC8vIFBhc3MgQWN0b3IgdmFsdWUgcHJvcGVydGllcyB0byBBY3Rpb25cbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9uVmFsdWUudmVsb2NpdHkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uVmFsdWUudmVsb2NpdHkgPSB2YWx1ZS52ZWxvY2l0eTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBhY3Rpb25WYWx1ZS5mcm9tID0gYWN0aW9uVmFsdWUuY3VycmVudCA9IHZhbHVlLmN1cnJlbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhbHVlLmRyaXZlcnMgPSBbaWRdO1xuICAgICAgICAgICAgdmFsdWUubnVtRHJpdmVycyA9IHZhbHVlLmRyaXZlcnMubGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubnVtQWN0aXZlQWN0aW9ucykge1xuICAgICAgICAgICAgX0FjdGlvbi5wcm90b3R5cGUuc3RhcnQuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKlxuICAgICAgICBSZW1vdmUgYWN0aXZlIGFjdGlvbnNcbiAgICAgICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgICovXG5cblxuICAgIEZsb3cucHJvdG90eXBlLmRlYWN0aXZhdGVBY3Rpb24gPSBmdW5jdGlvbiBkZWFjdGl2YXRlQWN0aW9uKGlkKSB7XG4gICAgICAgIHZhciBhY3Rpb24gPSB0aGlzLmFjdGl2ZUFjdGlvbnNbaWRdO1xuXG4gICAgICAgIGlmIChhY3Rpb24pIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWN0aW9uLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGtleSA9IGFjdGlvbi52YWx1ZUtleXNbaV07XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcbiAgICAgICAgICAgICAgICB2YXIgZHJpdmVySW5kZXggPSB2YWx1ZS5kcml2ZXJzLmluZGV4T2YoaWQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGRyaXZlckluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5kcml2ZXJzLnNwbGljZShkcml2ZXJJbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLm51bURyaXZlcnMtLTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmFjdGl2ZUFjdGlvbnNbaWRdO1xuICAgICAgICAgICAgdGhpcy5udW1BY3RpdmVBY3Rpb25zLS07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMubnVtQWN0aXZlQWN0aW9ucyAmJiB0aGlzLmlzQWN0aXZlKSB7XG4gICAgICAgICAgICBfQWN0aW9uLnByb3RvdHlwZS5zdG9wLmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIEZsb3c7XG59KF9BY3Rpb24zLmRlZmF1bHQpO1xuXG5GbG93LnByb3RvdHlwZS5kZWZhdWx0VmFsdWUgPSBfQWN0aW9uMy5kZWZhdWx0LmV4dGVuZERlZmF1bHRWYWx1ZSh7XG4gICAgZHJpdmVyczogW10sXG4gICAgbnVtRHJpdmVyczogMFxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEZsb3c7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwwWnNiM2N1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dEJRVUZCT3pzN08wRkJRMEU3T3pzN096czdPenM3T3pzN096dEJRVXRCTEVsQlFVMHNaVUZCWlN4VlFVRkRMRTFCUVVRN1YwRkJXU3hQUVVGUExFbEJRVkFzUTBGQldTeGpRVUZhTEVOQlFUSkNMRTlCUVU4c1JVRkJVQ3hGUVVGWExFMUJRWFJETzBOQlFWbzdRVUZEY2tJc1NVRkJUU3hqUVVGakxGVkJRVU1zVFVGQlJEdFhRVUZaTEU5QlFVOHNTVUZCVUN4RFFVRlpMR2RDUVVGYUxFTkJRVFpDTEU5QlFVOHNSVUZCVUR0RFFVRjZRenRCUVVOd1FpeEpRVUZOTEdGQlFXRXNWVUZCUXl4SlFVRkVPMWRCUVZjN1FVRkRNVUlzYTBKQlJEQkNPMEZCUlRGQ0xHOUNRVUZaTEVsQlFWbzdRVUZEUVN4dlFrRkJXU3haUVVGYU8wRkJRMEVzYzBKQlFXTXNWMEZCWkRzN1EwRktaVHM3U1VGUFlqczdPMEZCUTBZc1lVRkVSU3hKUVVOR0xFTkJRVmtzUzBGQldpeEZRVUZ0UWpzNFFrRkVha0lzVFVGRGFVSTdPM0ZFUVVObUxHMUNRVUZOTEV0QlFVNHNSMEZFWlRzN1FVRkZaaXhqUVVGTExHRkJRVXdzUjBGQmNVSXNSVUZCY2tJc1EwRkdaVHRCUVVkbUxHTkJRVXNzWjBKQlFVd3NSMEZCZDBJc1EwRkJlRUlzUTBGSVpUczdTMEZCYmtJN08wRkJSRVVzYlVKQlQwWXNiVUpCUVVrc1QwRkJUenRCUVVOUUxEQkNRVUZOTEVkQlFVNHNXVUZCVlN4TFFVRldMRVZCUkU4N08wRkJSMUFzWVVGQlN5eEpRVUZNTEVkQlNFODdPMEZCUzFBc1pVRkJUeXhKUVVGUUxFTkJURTg3T3pzN096czdPMEZCVUZRc2JVSkJhMEpHTERKQ1FVRlJMRkZCUVZFN1FVRkRXaXhaUVVGTkxHdENRVUZyUWl4UFFVRlBMRTlCUVZBc1JVRkJiRUlzUTBGRVRUdEJRVVZhTEZsQlFVa3NXVUZCV1N4RlFVRmFMRU5CUmxFN1FVRkhXaXhaUVVGSkxHVkJRV1VzUzBGQlpqczdPMEZCU0ZFc1lVRk5VQ3hKUVVGSkxFZEJRVW9zU1VGQlZ5eG5Ra0ZCWjBJc1RVRkJhRUlzUlVGQmQwSTdRVUZEY0VNc1owSkJRVWtzWjBKQlFXZENMRTFCUVdoQ0xFTkJRWFZDTEdOQlFYWkNMRU5CUVhORExFZEJRWFJETEV0QlFUaERMRU5CUVVNc1MwRkJTeXhOUVVGTUxFTkJRVmtzWTBGQldpeERRVUV5UWl4SFFVRXpRaXhEUVVGRUxFVkJRV3RETzBGQlEyaEdMREJDUVVGVkxFZEJRVllzU1VGQmFVSXNSVUZCYWtJc1EwRkVaMFk3UVVGRmFFWXNLMEpCUVdVc1NVRkJaaXhEUVVablJqdGhRVUZ3Ump0VFFVUktPenRCUVU5QkxGbEJRVWtzV1VGQlNpeEZRVUZyUWp0QlFVTmtMR2xDUVVGTExFZEJRVXdzUTBGQlV5eEZRVUZGTEZGQlFWRXNVMEZCVWl4RlFVRllMRVZCUkdNN1UwRkJiRUk3TzBGQlNVRXNkMEpCUVdkQ0xGRkJRV2hDTEVkQlFUSkNMRTlCUVU4c1JVRkJVQ3hEUVdwQ1pqczdRVUZ0UWxvc1pVRkJUeXhuUWtGQlowSXNSMEZCYUVJc1EwRkJiMElzVjBGQlZ5eEpRVUZZTEVWQlFXbENMR1ZCUVdwQ0xFTkJRWEJDTEVOQlFWQXNRMEZ1UWxrN096czdPenM3T3pzN1FVRnNRbVFzYlVKQkswTkdMSGxDUVVGUk8wRkJRMG9zTUVKQlFVMHNTMEZCVGl4WlFVUkpPenRCUVVkS0xHRkJRVXNzU1VGQlNTeEhRVUZLTEVsQlFWY3NTMEZCU3l4aFFVRk1MRVZCUVc5Q08wRkJRMmhETEdkQ1FVRkpMRXRCUVVzc1lVRkJUQ3hEUVVGdFFpeGpRVUZ1UWl4RFFVRnJReXhIUVVGc1F5eERRVUZLTEVWQlFUUkRPMEZCUTNoRExHOUNRVUZOTEZOQlFWTXNTMEZCU3l4aFFVRk1MRU5CUVcxQ0xFZEJRVzVDTEVOQlFWUXNRMEZFYTBNN1FVRkZlRU1zYjBKQlFVa3NRMEZCUXl4UFFVRlBMRkZCUVZBc1JVRkJhVUk3UVVGRGJFSXNNa0pCUVU4c1MwRkJVQ3hIUVVSclFqdHBRa0ZCZEVJN1lVRkdTanRUUVVSS096dEJRVk5CTEdWQlFVOHNTVUZCVUN4RFFWcEpPenM3UVVFdlEwNHNiVUpCT0VSR0xIVkNRVUZQTzBGQlEwZ3NNRUpCUVUwc1NVRkJUaXhaUVVSSE96dEJRVWRJTEdGQlFVc3NTVUZCU1N4SFFVRktMRWxCUVZjc1MwRkJTeXhoUVVGTUxFVkJRVzlDTzBGQlEyaERMR2RDUVVGSkxFdEJRVXNzWVVGQlRDeERRVUZ0UWl4alFVRnVRaXhEUVVGclF5eEhRVUZzUXl4RFFVRktMRVZCUVRSRE8wRkJRM2hETEhGQ1FVRkxMR0ZCUVV3c1EwRkJiVUlzUjBGQmJrSXNSVUZCZDBJc1NVRkJlRUlzUjBGRWQwTTdZVUZCTlVNN1UwRkVTanM3UVVGTlFTeGxRVUZQTEVsQlFWQXNRMEZVUnpzN08wRkJPVVJNTEcxQ1FUQkZSaXhwUTBGQlZ5eFBRVUZQTEZsQlFWa3NVMEZCVXp0QlFVTnVReXhoUVVGTExFbEJRVWtzU1VGQlNTeERRVUZLTEVWQlFVOHNTVUZCU1N4TFFVRkxMRmxCUVV3c1JVRkJiVUlzUjBGQmRrTXNSVUZCTkVNN1FVRkRlRU1zWjBKQlFVMHNUVUZCVFN4TFFVRkxMRk5CUVV3c1EwRkJaU3hEUVVGbUxFTkJRVTRzUTBGRWEwTTdRVUZGZUVNc1owSkJRVTBzVVVGQlVTeExRVUZMTEUxQlFVd3NRMEZCV1N4SFFVRmFMRU5CUVZJc1EwRkdhME03UVVGSGVFTXNaMEpCUVUwc1UwRkJVeXhOUVVGTkxGVkJRVTRzUjBGQmJVSXNTMEZCU3l4aFFVRk1MRU5CUVcxQ0xFMUJRVTBzVDBGQlRpeERRVUZqTEVOQlFXUXNRMEZCYmtJc1EwRkJia0lzUjBGQk1FUXNTMEZCTVVRc1EwRkllVUk3UVVGSmVFTXNaMEpCUVVrc1lVRkJZU3hOUVVGTkxGVkJRVTRzUjBGQmJVSXNUMEZCVHl4TlFVRlFMRU5CUVdNc1IwRkJaQ3hGUVVGdFFpeFBRVUZ1UWl4SFFVRTJRaXhOUVVGTkxFOUJRVTRzUTBGS2VrSTdPMEZCVFhoRExHZENRVUZKTEUxQlFVMHNWVUZCVGl4RlFVRnJRanRCUVVOc1FpdzJRa0ZCWVN4TlFVRk5MRlZCUVU0c1JVRkJZaXhEUVVSclFqdGhRVUYwUWpzN1FVRkpRU3hyUWtGQlRTeFBRVUZPTEVkQlFXZENMRlZCUVdoQ0xFTkJWbmRETzFOQlFUVkRPenRCUVdGQkxHVkJRVThzYTBKQlFVMHNWVUZCVGl4WlFVRnBRaXhMUVVGcVFpeEZRVUYzUWl4VlFVRjRRaXhGUVVGdlF5eFBRVUZ3UXl4RFFVRlFMRU5CWkcxRE96czdPenM3T3pzN08wRkJNVVZ5UXl4dFFrRnBSMFlzZVVOQlFXVXNTVUZCU1N4UlFVRlJPMEZCUTNaQ0xHRkJRVXNzWVVGQlRDeERRVUZ0UWl4RlFVRnVRaXhKUVVGNVFpeE5RVUY2UWl4RFFVUjFRanRCUVVWMlFpeGhRVUZMTEdkQ1FVRk1MRWRCUm5WQ096dEJRVWwyUWl4aFFVRkxMRWxCUVVrc1NVRkJTU3hEUVVGS0xFVkJRVThzU1VGQlNTeFBRVUZQTEZsQlFWQXNSVUZCY1VJc1IwRkJla01zUlVGQk9FTTdRVUZETVVNc1owSkJRVTBzVFVGQlRTeFBRVUZQTEZOQlFWQXNRMEZCYVVJc1EwRkJha0lzUTBGQlRpeERRVVJ2UXp0QlFVVXhReXhuUWtGQlRTeGpRVUZqTEU5QlFVOHNUVUZCVUN4RFFVRmpMRWRCUVdRc1EwRkJaQ3hEUVVadlF6dEJRVWN4UXl4blFrRkJUU3hSUVVGUkxFdEJRVXNzVFVGQlRDeERRVUZaTEVkQlFWb3NRMEZCVWpzN08wRkJTRzlETEdkQ1FVMTBReXhQUVVGUExFdEJRVkFzU1VGQlowSXNUVUZCVFN4VlFVRk9MRWxCUVc5Q0xFTkJRVU1zVFVGQlRTeFZRVUZPTEVsQlFYRkNMRTFCUVUwc1QwRkJUaXhEUVVGakxFTkJRV1FzUlVGQmFVSXNVMEZCYWtJc1MwRkJLMElzVDBGQlR5eFRRVUZRTEVWQlFXMUNPMEZCUXpWSExITkNRVUZOTEZWQlFVNHNSMEZCYlVJc2EwTkJRVzFDTEV0QlFVc3NZVUZCVEN4RFFVRnRRaXhOUVVGTkxFOUJRVTRzUTBGQll5eERRVUZrTEVOQlFXNUNMRU5CUVc1Q0xFVkJRWGxFTEUxQlFYcEVMRVZCUVdsRkxFdEJRV3BGTEVWQlFYZEZMRWRCUVhoRkxFTkJRVzVDTEVOQlJEUkhPMkZCUVdoSUxFMUJSVThzU1VGQlNTeERRVUZETEU5QlFVOHNWMEZCVUN4RlFVRnZRanRCUVVNMVFpeHpRa0ZCVFN4VlFVRk9MRWRCUVcxQ0xGTkJRVzVDT3p0QlFVUTBRaXh2UWtGSGVFSXNXVUZCV1N4UlFVRmFMRXRCUVhsQ0xFTkJRWHBDTEVWQlFUUkNPMEZCUXpWQ0xHZERRVUZaTEZGQlFWb3NSMEZCZFVJc1RVRkJUU3hSUVVGT0xFTkJSRXM3YVVKQlFXaERPenRCUVVsQkxEUkNRVUZaTEVsQlFWb3NSMEZCYlVJc1dVRkJXU3hQUVVGYUxFZEJRWE5DTEUxQlFVMHNUMEZCVGl4RFFWQmlPMkZCUVhwQ096dEJRVlZRTEd0Q1FVRk5MRTlCUVU0c1IwRkJaMElzUTBGQlF5eEZRVUZFTEVOQlFXaENMRU5CYkVJd1F6dEJRVzFDTVVNc2EwSkJRVTBzVlVGQlRpeEhRVUZ0UWl4TlFVRk5MRTlCUVU0c1EwRkJZeXhOUVVGa0xFTkJia0oxUWp0VFFVRTVRenM3UVVGelFrRXNXVUZCU1N4TFFVRkxMR2RDUVVGTUxFVkJRWFZDTzBGQlEzWkNMRGhDUVVGTkxFdEJRVTRzV1VGRWRVSTdVMEZCTTBJN096czdPenM3T3p0QlFUTklSaXh0UWtGeFNVWXNOa05CUVdsQ0xFbEJRVWs3UVVGRGFrSXNXVUZCVFN4VFFVRlRMRXRCUVVzc1lVRkJUQ3hEUVVGdFFpeEZRVUZ1UWl4RFFVRlVMRU5CUkZjN08wRkJSMnBDTEZsQlFVa3NUVUZCU2l4RlFVRlpPMEZCUTFJc2FVSkJRVXNzU1VGQlNTeEpRVUZKTEVOQlFVb3NSVUZCVHl4SlFVRkpMRTlCUVU4c1dVRkJVQ3hGUVVGeFFpeEhRVUY2UXl4RlFVRTRRenRCUVVNeFF5eHZRa0ZCVFN4TlFVRk5MRTlCUVU4c1UwRkJVQ3hEUVVGcFFpeERRVUZxUWl4RFFVRk9MRU5CUkc5RE8wRkJSVEZETEc5Q1FVRk5MRkZCUVZFc1MwRkJTeXhOUVVGTUxFTkJRVmtzUjBGQldpeERRVUZTTEVOQlJtOURPMEZCUnpGRExHOUNRVUZOTEdOQlFXTXNUVUZCVFN4UFFVRk9MRU5CUVdNc1QwRkJaQ3hEUVVGelFpeEZRVUYwUWl4RFFVRmtMRU5CU0c5RE96dEJRVXN4UXl4dlFrRkJTU3huUWtGQlowSXNRMEZCUXl4RFFVRkVMRVZCUVVrN1FVRkRjRUlzTUVKQlFVMHNUMEZCVGl4RFFVRmpMRTFCUVdRc1EwRkJjVUlzVjBGQmNrSXNSVUZCYTBNc1EwRkJiRU1zUlVGRWIwSTdRVUZGY0VJc01FSkJRVTBzVlVGQlRpeEhRVVp2UWp0cFFrRkJlRUk3WVVGTVNqczdRVUZYUVN4dFFrRkJUeXhMUVVGTExHRkJRVXdzUTBGQmJVSXNSVUZCYmtJc1EwRkJVQ3hEUVZwUk8wRkJZVklzYVVKQlFVc3NaMEpCUVV3c1IwRmlVVHRUUVVGYU96dEJRV2RDUVN4WlFVRkpMRU5CUVVNc1MwRkJTeXhuUWtGQlRDeEpRVUY1UWl4TFFVRkxMRkZCUVV3c1JVRkJaVHRCUVVONlF5dzRRa0ZCVFN4SlFVRk9MRmxCUkhsRE8xTkJRVGRET3pzN1YwRjRTa1k3T3p0QlFUaEtUaXhMUVVGTExGTkJRVXdzUTBGQlpTeFpRVUZtTEVkQlFUaENMR2xDUVVGUExHdENRVUZRTEVOQlFUQkNPMEZCUTNCRUxHRkJRVk1zUlVGQlZEdEJRVU5CTEdkQ1FVRlpMRU5CUVZvN1EwRkdNRUlzUTBGQk9VSTdPMnRDUVV0bElpd2labWxzWlNJNklrWnNiM2N1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUVGamRHbHZiaUJtY205dElDY3VMaTloWTNScGIyNXpMMEZqZEdsdmJpYzdYRzVwYlhCdmNuUWdaMlZ1WlhKaGRHVkNiR1Z1WkVOMWNuWmxJR1p5YjIwZ0p5NHZabXh2ZHk5blpXNWxjbUYwWlMxaWJHVnVaQzFqZFhKMlpTYzdYRzVjYmk4cVhHNGdJQ0FnVFdWMGFHOWtjeUJoYm1RZ2NISnZjR1Z5ZEdsbGN5QjBieUJoWkdRZ2RHOGdZbTkxYm1RZ1FXTjBhVzl1YzF4dUtpOWNibU52Ym5OMElHSnZkVzVrVDI1VGRHRnlkQ0E5SUNoaFkzUnBiMjRwSUQwK0lHRmpkR2x2Ymk1bWJHOTNMbUZqZEdsMllYUmxRV04wYVc5dUtHRmpkR2x2Ymk1cFpDd2dZV04wYVc5dUtUdGNibU52Ym5OMElHSnZkVzVrVDI1VGRHOXdJRDBnS0dGamRHbHZiaWtnUFQ0Z1lXTjBhVzl1TG1ac2IzY3VaR1ZoWTNScGRtRjBaVUZqZEdsdmJpaGhZM1JwYjI0dWFXUXBPMXh1WTI5dWMzUWdZbTkxYm1SUWNtOXdjeUE5SUNobWJHOTNLU0E5UGlBb2UxeHVJQ0FnSUdac2IzY3NYRzRnSUNBZ2FYTlFjbWx2Y21sMGVUb2dkSEoxWlN4Y2JpQWdJQ0J2YmtGamRHbDJZWFJsT2lCaWIzVnVaRTl1VTNSaGNuUXNYRzRnSUNBZ2IyNUVaV0ZqZEdsMllYUmxPaUJpYjNWdVpFOXVVM1J2Y0Z4dWZTazdYRzVjYm1Oc1lYTnpJRVpzYjNjZ1pYaDBaVzVrY3lCQlkzUnBiMjRnZTF4dUlDQWdJR052Ym5OMGNuVmpkRzl5S0hCeWIzQnpLU0I3WEc0Z0lDQWdJQ0FnSUhOMWNHVnlLSEJ5YjNCektUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1aFkzUnBkbVZCWTNScGIyNXpJRDBnZTMwN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Ym5WdFFXTjBhWFpsUVdOMGFXOXVjeUE5SURBN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYzJWMEtIQnliM0J6S1NCN1hHNGdJQ0FnSUNBZ0lITjFjR1Z5TG5ObGRDaHdjbTl3Y3lrN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1dmJtTmxLQ2s3WEc1Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5cGNiaUFnSUNBZ0lDQWdRbWx1WkNCQlkzUnBiMjRnZEc4Z1FXTjBiM0pjYmlBZ0lDQXFMMXh1SUNBZ0lHTnZibTVsWTNRb1lXTjBhVzl1S1NCN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUdsdWFHVnlhWFJsWkVGamRHbHZiaUE5SUdGamRHbHZiaTVwYm1obGNtbDBLQ2s3WEc0Z0lDQWdJQ0FnSUd4bGRDQnVaWGRXWVd4MVpYTWdQU0I3ZlR0Y2JpQWdJQ0FnSUNBZ2JHVjBJR2hoYzA1bGQxWmhiSFZsY3lBOUlHWmhiSE5sTzF4dVhHNGdJQ0FnSUNBZ0lDOHZJRU55WldGMFpTQjJZV3gxWlhNZ2IyNGdZV04wYjNJZ2RHaGhkQ0JrYjI0bmRDQmxlR2x6ZEZ4dUlDQWdJQ0FnSUNCbWIzSWdLR3hsZENCclpYa2dhVzRnYVc1b1pYSnBkR1ZrUVdOMGFXOXVMblpoYkhWbGN5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLR2x1YUdWeWFYUmxaRUZqZEdsdmJpNTJZV3gxWlhNdWFHRnpUM2R1VUhKdmNHVnlkSGtvYTJWNUtTQW1KaUFoZEdocGN5NTJZV3gxWlhNdWFHRnpUM2R1VUhKdmNHVnlkSGtvYTJWNUtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRzVsZDFaaGJIVmxjMXRyWlhsZElEMGdlMzA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYUdGelRtVjNWbUZzZFdWeklEMGdkSEoxWlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lHbG1JQ2hvWVhOT1pYZFdZV3gxWlhNcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVjMlYwS0hzZ2RtRnNkV1Z6T2lCdVpYZFdZV3gxWlhNZ2ZTazdYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCcGJtaGxjbWwwWldSQlkzUnBiMjR1Y0dGeVpXNTBTV1FnUFNCaFkzUnBiMjR1YVdRN1hHNWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHbHVhR1Z5YVhSbFpFRmpkR2x2Ymk1elpYUW9ZbTkxYm1SUWNtOXdjeWgwYUdsekxDQnBibWhsY21sMFpXUkJZM1JwYjI0cEtUdGNiaUFnSUNCOVhHNWNiaUFnSUNBdktseHVJQ0FnSUNBZ0lDQlRkR0Z5ZENCQlkzUnZjbHh1WEc0Z0lDQWdJQ0FnSUVsbUlFRmpkR2x2YmlCcGN5QndjbTkyYVdSbFpDd2dZbWx1WkNCcGRDQjBieUIwYUdseklFRmpkRzl5SUdGdVpDQnpkR0Z5ZEZ4dVhHNGdJQ0FnSUNBZ0lFQndZWEpoYlNBb2IzQjBhVzl1WVd3cElGdEJZM1JwYjI1ZFhHNGdJQ0FnS2k5Y2JpQWdJQ0J6ZEdGeWRDZ3BJSHRjYmlBZ0lDQWdJQ0FnYzNWd1pYSXVjM1JoY25Rb0tUdGNibHh1SUNBZ0lDQWdJQ0JtYjNJZ0tHeGxkQ0JyWlhrZ2FXNGdkR2hwY3k1aFkzUnBkbVZCWTNScGIyNXpLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvZEdocGN5NWhZM1JwZG1WQlkzUnBiMjV6TG1oaGMwOTNibEJ5YjNCbGNuUjVLR3RsZVNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCaFkzUnBiMjRnUFNCMGFHbHpMbUZqZEdsMlpVRmpkR2x2Ym5OYmEyVjVYVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb0lXRmpkR2x2Ymk1cGMwRmpkR2wyWlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JoWTNScGIyNHVjM1JoY25Rb0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3p0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J6ZEc5d0tDa2dlMXh1SUNBZ0lDQWdJQ0J6ZFhCbGNpNXpkRzl3S0NrN1hHNWNiaUFnSUNBZ0lDQWdabTl5SUNoc1pYUWdhMlY1SUdsdUlIUm9hWE11WVdOMGFYWmxRV04wYVc5dWN5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFJvYVhNdVlXTjBhWFpsUVdOMGFXOXVjeTVvWVhOUGQyNVFjbTl3WlhKMGVTaHJaWGtwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVoWTNScGRtVkJZM1JwYjI1elcydGxlVjB1YzNSdmNDZ3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnZDJsc2JGSmxibVJsY2loaFkzUnZjaXdnWm5KaGJXVlRkR0Z0Y0N3Z1pXeGhjSE5sWkNrZ2UxeHVJQ0FnSUNBZ0lDQm1iM0lnS0d4bGRDQnBJRDBnTURzZ2FTQThJSFJvYVhNdWJuVnRWbUZzZFdWTFpYbHpPeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJR3RsZVNBOUlIUm9hWE11ZG1Gc2RXVkxaWGx6VzJsZE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdkbUZzZFdVZ1BTQjBhR2x6TG5aaGJIVmxjMXRyWlhsZE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdaSEpwZG1WeUlEMGdkbUZzZFdVdWJuVnRSSEpwZG1WeWN5QS9JSFJvYVhNdVlXTjBhWFpsUVdOMGFXOXVjMXQyWVd4MVpTNWtjbWwyWlhKeld6QmRYU0E2SUdaaGJITmxPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2JHVjBJRzVsZDBOMWNuSmxiblFnUFNCMllXeDFaUzV1ZFcxRWNtbDJaWEp6SUQ4Z1pISnBkbVZ5TG5aaGJIVmxjMXRyWlhsZExtTjFjbkpsYm5RZ09pQjJZV3gxWlM1amRYSnlaVzUwTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RtRnNkV1V1WW14bGJtUkRkWEoyWlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHNWxkME4xY25KbGJuUWdQU0IyWVd4MVpTNWliR1Z1WkVOMWNuWmxLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmhiSFZsTG1OMWNuSmxiblFnUFNCdVpYZERkWEp5Wlc1ME8xeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSE4xY0dWeUxuZHBiR3hTWlc1a1pYSW9ZV04wYjNJc0lHWnlZVzFsVTNSaGJYQXNJR1ZzWVhCelpXUXBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lDOHFYRzRnSUNBZ0lDQWdJRUZrWkNCaFkzUnBkbVVnWVdOMGFXOXVjMXh1WEc0Z0lDQWdJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVnh1SUNBZ0lDQWdJQ0JBY0dGeVlXMGdXMEZqZEdsdmJsMWNiaUFnSUNBcUwxeHVJQ0FnSUdGamRHbDJZWFJsUVdOMGFXOXVLR2xrTENCaFkzUnBiMjRwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVoWTNScGRtVkJZM1JwYjI1elcybGtYU0E5SUdGamRHbHZianRjYmlBZ0lDQWdJQ0FnZEdocGN5NXVkVzFCWTNScGRtVkJZM1JwYjI1ekt5czdYRzVjYmlBZ0lDQWdJQ0FnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCaFkzUnBiMjR1Ym5WdFZtRnNkV1ZMWlhsek95QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElHdGxlU0E5SUdGamRHbHZiaTUyWVd4MVpVdGxlWE5iYVYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQmhZM1JwYjI1V1lXeDFaU0E5SUdGamRHbHZiaTUyWVd4MVpYTmJhMlY1WFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElIWmhiSFZsSUQwZ2RHaHBjeTUyWVd4MVpYTmJhMlY1WFR0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1NXWWdkMlVuY21VZ1lteGxibVJwYm1jZ2RHaHBjeUJoWTNScGIyNHNJR0Z1WkNCMGFHVnlaU2R6SUc5dUlHRnNjbVZoWkhrZ2FXNGdjSEp2WjNKbGMzTmNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaGhZM1JwYjI0dVlteGxibVFnSmlZZ2RtRnNkV1V1Ym5WdFJISnBkbVZ5Y3lBbUppQWhkbUZzZFdVdVlteGxibVJEZFhKMlpTQW1KaUFvZG1Gc2RXVXVaSEpwZG1WeWMxc3dYUzV3Y205MGIzUjVjR1VnUFQwOUlHRmpkR2x2Ymk1d2NtOTBiM1I1Y0dVcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZzZFdVdVlteGxibVJEZFhKMlpTQTlJR2RsYm1WeVlYUmxRbXhsYm1SRGRYSjJaU2gwYUdsekxtRmpkR2wyWlVGamRHbHZibk5iZG1Gc2RXVXVaSEpwZG1WeWMxc3dYVjBzSUdGamRHbHZiaXdnZG1Gc2RXVXNJR3RsZVNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5SUdWc2MyVWdhV1lnS0NGaFkzUnBiMjR1YVhOVFkzSjFZbUpwYm1jcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZV3gxWlM1aWJHVnVaRU4xY25abElEMGdkVzVrWldacGJtVmtPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzh2SUZCaGMzTWdRV04wYjNJZ2RtRnNkV1VnY0hKdmNHVnlkR2xsY3lCMGJ5QkJZM1JwYjI1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9ZV04wYVc5dVZtRnNkV1V1ZG1Wc2IyTnBkSGtnUFQwOUlEQXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1lXTjBhVzl1Vm1Gc2RXVXVkbVZzYjJOcGRIa2dQU0IyWVd4MVpTNTJaV3h2WTJsMGVUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JoWTNScGIyNVdZV3gxWlM1bWNtOXRJRDBnWVdOMGFXOXVWbUZzZFdVdVkzVnljbVZ1ZENBOUlIWmhiSFZsTG1OMWNuSmxiblE3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmhiSFZsTG1SeWFYWmxjbk1nUFNCYmFXUmRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RtRnNkV1V1Ym5WdFJISnBkbVZ5Y3lBOUlIWmhiSFZsTG1SeWFYWmxjbk11YkdWdVozUm9PMXh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ2FXWWdLSFJvYVhNdWJuVnRRV04wYVhabFFXTjBhVzl1Y3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYzNWd1pYSXVjM1JoY25Rb0tUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lDOHFYRzRnSUNBZ0lDQWdJRkpsYlc5MlpTQmhZM1JwZG1VZ1lXTjBhVzl1YzF4dVhHNGdJQ0FnSUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFZ4dUlDQWdJQ292WEc0Z0lDQWdaR1ZoWTNScGRtRjBaVUZqZEdsdmJpaHBaQ2tnZTF4dUlDQWdJQ0FnSUNCamIyNXpkQ0JoWTNScGIyNGdQU0IwYUdsekxtRmpkR2wyWlVGamRHbHZibk5iYVdSZE8xeHVYRzRnSUNBZ0lDQWdJR2xtSUNoaFkzUnBiMjRwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnWVdOMGFXOXVMbTUxYlZaaGJIVmxTMlY1Y3pzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdhMlY1SUQwZ1lXTjBhVzl1TG5aaGJIVmxTMlY1YzF0cFhUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCMllXeDFaU0E5SUhSb2FYTXVkbUZzZFdWelcydGxlVjA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdaSEpwZG1WeVNXNWtaWGdnUFNCMllXeDFaUzVrY21sMlpYSnpMbWx1WkdWNFQyWW9hV1FwTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLR1J5YVhabGNrbHVaR1Y0SUNFOVBTQXRNU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZV3gxWlM1a2NtbDJaWEp6TG5Od2JHbGpaU2hrY21sMlpYSkpibVJsZUN3Z01TazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhaaGJIVmxMbTUxYlVSeWFYWmxjbk10TFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJR1JsYkdWMFpTQjBhR2x6TG1GamRHbDJaVUZqZEdsdmJuTmJhV1JkTzF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1dWRXMUJZM1JwZG1WQlkzUnBiMjV6TFMwN1hHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0JwWmlBb0lYUm9hWE11Ym5WdFFXTjBhWFpsUVdOMGFXOXVjeUFtSmlCMGFHbHpMbWx6UVdOMGFYWmxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnpkWEJsY2k1emRHOXdLQ2s3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1OVhHNWNia1pzYjNjdWNISnZkRzkwZVhCbExtUmxabUYxYkhSV1lXeDFaU0E5SUVGamRHbHZiaTVsZUhSbGJtUkVaV1poZFd4MFZtRnNkV1VvZTF4dUlDQWdJR1J5YVhabGNuTTZJRnRkTEZ4dUlDQWdJRzUxYlVSeWFYWmxjbk02SURCY2JuMHBPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JHYkc5M08xeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL0Zsb3cuanNcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfQWN0aW9uMiA9IHJlcXVpcmUoJy4vQWN0aW9uJyk7XG5cbnZhciBfQWN0aW9uMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0FjdGlvbjIpO1xuXG52YXIgX3ByZXNldEVhc2luZyA9IHJlcXVpcmUoJy4vZWFzaW5nL3ByZXNldC1lYXNpbmcnKTtcblxudmFyIF9wcmVzZXRFYXNpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlc2V0RWFzaW5nKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBDT1VOVCA9ICdDb3VudCc7XG52YXIgTkVYVF9TVEVQUyA9IHtcbiAgICBsb29wOiAncmVzdGFydCcsXG4gICAgeW95bzogJ3JldmVyc2UnLFxuICAgIGZsaXA6ICdmbGlwVmFsdWVzJ1xufTtcblxudmFyIFR3ZWVuID0gZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgICBfaW5oZXJpdHMoVHdlZW4sIF9BY3Rpb24pO1xuXG4gICAgZnVuY3Rpb24gVHdlZW4oKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUd2Vlbik7XG5cbiAgICAgICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfVxuXG4gICAgVHdlZW4ucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuZWxhcHNlZCA9IDA7XG4gICAgICAgIHRoaXMuZmxpcENvdW50ID0gdGhpcy55b3lvQ291bnQgPSB0aGlzLmxvb3BDb3VudCA9IDA7XG4gICAgICAgIHRoaXMuaXNTY3J1YmJpbmcgPSBmYWxzZTtcblxuICAgICAgICByZXR1cm4gX0FjdGlvbi5wcm90b3R5cGUuc3RhcnQuY2FsbCh0aGlzKTtcbiAgICB9O1xuXG4gICAgVHdlZW4ucHJvdG90eXBlLm9uVXBkYXRlID0gZnVuY3Rpb24gb25VcGRhdGUodHdlZW4sIGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgICAgICAgdmFyIHByb2dyZXNzVGFyZ2V0ID0gdGhpcy5wbGF5RGlyZWN0aW9uID09PSAxID8gMSA6IDA7XG5cbiAgICAgICAgdGhpcy5lbmRlZCA9IHRydWU7XG5cbiAgICAgICAgaWYgKCF0aGlzLmlzU2NydWJiaW5nKSB7XG4gICAgICAgICAgICB0aGlzLmVsYXBzZWQgKz0gZWxhcHNlZCAqIHRoaXMuZGlsYXRlICogdGhpcy5wbGF5RGlyZWN0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gdGhpcy52YWx1ZUtleXNbaV07XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuXG4gICAgICAgICAgICB2YXIgcHJvZ3Jlc3MgPSAoMCwgX2NhbGMucmVzdHJpY3QpKCgwLCBfY2FsYy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSkodGhpcy5lbGFwc2VkIC0gdmFsdWUuZGVsYXksIDAsIHZhbHVlLmR1cmF0aW9uKSwgMCwgMSk7XG5cbiAgICAgICAgICAgIC8vIE1hcmsgVHdlZW4gYXMgTk9UIGVuZGVkIGlmIHN0aWxsIGluIHByb2dyZXNzXG4gICAgICAgICAgICBpZiAocHJvZ3Jlc3MgIT09IHByb2dyZXNzVGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTdGVwIHByb2dyZXNzIGlmIHdlJ3JlIHN0ZXBwaW5nXG4gICAgICAgICAgICBpZiAodmFsdWUuc3RlcHMpIHtcbiAgICAgICAgICAgICAgICBwcm9ncmVzcyA9ICgwLCBfY2FsYy5zdGVwUHJvZ3Jlc3MpKHByb2dyZXNzLCB2YWx1ZS5zdGVwcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEVhc2UgcHJvZ3Jlc3NcbiAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSAoMCwgX2NhbGMuZWFzZSkocHJvZ3Jlc3MsIHZhbHVlLmZyb20sIHZhbHVlLnRvLCB2YWx1ZS5lYXNlKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBUd2Vlbi5wcm90b3R5cGUub25GcmFtZUVuZCA9IGZ1bmN0aW9uIG9uRnJhbWVFbmQoKSB7XG4gICAgICAgIGlmICh0aGlzLmVuZGVkICYmICF0aGlzLmlzU2NydWJiaW5nKSB7XG4gICAgICAgICAgICB2YXIgc3RlcFRha2VuID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBORVhUX1NURVBTKSB7XG4gICAgICAgICAgICAgICAgaWYgKE5FWFRfU1RFUFMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKDAsIF91dGlscy5pc051bSkodGhpc1trZXldKSAmJiB0aGlzW2tleV0gPiB0aGlzW2tleSArIENPVU5UXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1trZXkgKyBDT1VOVF0rKztcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXBUYWtlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW05FWFRfU1RFUFNba2V5XV0oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFzdGVwVGFrZW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgVHdlZW4ucHJvdG90eXBlLmZsaXBWYWx1ZXMgPSBmdW5jdGlvbiBmbGlwVmFsdWVzKCkge1xuICAgICAgICB2YXIgdmFsdWVzID0gdGhpcy52YWx1ZXM7XG5cbiAgICAgICAgdGhpcy5lbGFwc2VkID0gdGhpcy5kdXJhdGlvbiAtIHRoaXMuZWxhcHNlZDtcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB2YWx1ZXNba2V5XTtcbiAgICAgICAgICAgICAgICB2YXIgX3JlZiA9IFt2YWx1ZS5mcm9tLCB2YWx1ZS50b107XG4gICAgICAgICAgICAgICAgdmFsdWUudG8gPSBfcmVmWzBdO1xuICAgICAgICAgICAgICAgIHZhbHVlLmZyb20gPSBfcmVmWzFdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIFR3ZWVuLnByb3RvdHlwZS5yZXZlcnNlID0gZnVuY3Rpb24gcmV2ZXJzZSgpIHtcbiAgICAgICAgdGhpcy5wbGF5RGlyZWN0aW9uICo9IC0xO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgVHdlZW4ucHJvdG90eXBlLnJlc3RhcnQgPSBmdW5jdGlvbiByZXN0YXJ0KCkge1xuICAgICAgICB0aGlzLmVsYXBzZWQgPSB0aGlzLnBsYXlEaXJlY3Rpb24gPT09IDEgPyAwIDogdGhpcy5kdXJhdGlvbjtcbiAgICAgICAgdGhpcy5zdGFydGVkID0gKDAsIF91dGlscy5jdXJyZW50VGltZSkoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIFR3ZWVuLnByb3RvdHlwZS5zZWVrID0gZnVuY3Rpb24gc2Vlayhwcm9ncmVzcykge1xuICAgICAgICB0aGlzLnNlZWtUaW1lKHRoaXMuZHVyYXRpb24gKiBwcm9ncmVzcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBUd2Vlbi5wcm90b3R5cGUuc2Vla1RpbWUgPSBmdW5jdGlvbiBzZWVrVGltZShlbGFwc2VkKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0FjdGl2ZSB8fCB0aGlzLmlzU2NydWJiaW5nKSB7XG4gICAgICAgICAgICB0aGlzLm9uY2UoKTtcbiAgICAgICAgICAgIHRoaXMuaXNTY3J1YmJpbmcgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5lbGFwc2VkID0gZWxhcHNlZDtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgcmV0dXJuIFR3ZWVuO1xufShfQWN0aW9uMy5kZWZhdWx0KTtcblxuVHdlZW4ucHJvdG90eXBlLmRlZmF1bHRWYWx1ZVByb3AgPSAndG8nO1xuVHdlZW4ucHJvdG90eXBlLmRlZmF1bHRWYWx1ZSA9IF9BY3Rpb24zLmRlZmF1bHQuZXh0ZW5kRGVmYXVsdFZhbHVlKHtcbiAgICBkZWxheTogMCxcbiAgICBkdXJhdGlvbjogMzAwLFxuICAgIGVhc2U6IF9wcmVzZXRFYXNpbmcyLmRlZmF1bHQuZWFzZU91dCxcbiAgICBlbGFwc2VkOiAwLFxuICAgIGZyb206IDAsXG4gICAgc3RlcHM6IDAsXG4gICAgdG86IDAsXG4gICAgcm91bmQ6IGZhbHNlXG59KTtcblR3ZWVuLnByb3RvdHlwZS5kZWZhdWx0UHJvcHMgPSBfQWN0aW9uMy5kZWZhdWx0LmV4dGVuZERlZmF1bHRQcm9wcyh7XG4gICAgYmxlbmQ6IHRydWUsXG4gICAgZGlsYXRlOiAxLFxuICAgIGxvb3A6IDAsXG4gICAgeW95bzogMCxcbiAgICBmbGlwOiAwLFxuICAgIGxvb3BDb3VudDogMCxcbiAgICB5b3lvQ291bnQ6IDAsXG4gICAgZmxpcENvdW50OiAwLFxuICAgIHBsYXlEaXJlY3Rpb246IDEsXG4gICAgaXNTY3J1YmJpbmc6IGZhbHNlLFxuICAgIGVuZGVkOiBmYWxzZSxcbiAgICBlbGFwc2VkOiAwXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gVHdlZW47XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwxUjNaV1Z1TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdRVUZCUVRzN096dEJRVU5CT3pzN08wRkJRMEU3TzBGQlEwRTdPenM3T3pzN096czdRVUZGUVN4SlFVRk5MRkZCUVZFc1QwRkJVanRCUVVOT0xFbEJRVTBzWVVGQllUdEJRVU5tTEZWQlFVMHNVMEZCVGp0QlFVTkJMRlZCUVUwc1UwRkJUanRCUVVOQkxGVkJRVTBzV1VGQlRqdERRVWhGT3p0SlFVMUJPenM3T3pzN096czdiMEpCUTBZc2VVSkJRVkU3UVVGRFNpeGhRVUZMTEU5QlFVd3NSMEZCWlN4RFFVRm1MRU5CUkVrN1FVRkZTaXhoUVVGTExGTkJRVXdzUjBGQmFVSXNTMEZCU3l4VFFVRk1MRWRCUVdsQ0xFdEJRVXNzVTBGQlRDeEhRVUZwUWl4RFFVRnFRaXhEUVVZNVFqdEJRVWRLTEdGQlFVc3NWMEZCVEN4SFFVRnRRaXhMUVVGdVFpeERRVWhKT3p0QlFVdEtMR1ZCUVU4c2EwSkJRVTBzUzBGQlRpeFhRVUZRTEVOQlRFazdPenRCUVVST0xHOUNRVk5HTERaQ1FVRlRMRTlCUVU4c1dVRkJXU3hUUVVGVE8wRkJRMnBETEZsQlFVMHNhVUpCUVdsQ0xFbEJRVU1zUTBGQlN5eGhRVUZNTEV0QlFYVkNMRU5CUVhaQ0xFZEJRVFJDTEVOQlFUZENMRWRCUVdsRExFTkJRV3BETEVOQlJGVTdPMEZCUjJwRExHRkJRVXNzUzBGQlRDeEhRVUZoTEVsQlFXSXNRMEZJYVVNN08wRkJTMnBETEZsQlFVa3NRMEZCUXl4TFFVRkxMRmRCUVV3c1JVRkJhMEk3UVVGRGJrSXNhVUpCUVVzc1QwRkJUQ3hKUVVGblFpeFBRVUZETEVkQlFWVXNTMEZCU3l4TlFVRk1MRWRCUVdVc1MwRkJTeXhoUVVGTUxFTkJSSFpDTzFOQlFYWkNPenRCUVVsQkxHRkJRVXNzU1VGQlNTeEpRVUZKTEVOQlFVb3NSVUZCVHl4SlFVRkpMRXRCUVVzc1dVRkJUQ3hGUVVGdFFpeEhRVUYyUXl4RlFVRTBRenRCUVVONFF5eG5Ra0ZCVFN4TlFVRk5MRXRCUVVzc1UwRkJUQ3hEUVVGbExFTkJRV1lzUTBGQlRpeERRVVJyUXp0QlFVVjRReXhuUWtGQlRTeFJRVUZSTEV0QlFVc3NUVUZCVEN4RFFVRlpMRWRCUVZvc1EwRkJVaXhEUVVaclF6czdRVUZKZUVNc1owSkJRVWtzVjBGQlZ5eHZRa0ZCVXl4blEwRkJjVUlzUzBGQlN5eFBRVUZNTEVkQlFXVXNUVUZCVFN4TFFVRk9MRVZCUVdFc1EwRkJha1FzUlVGQmIwUXNUVUZCVFN4UlFVRk9MRU5CUVRkRUxFVkJRVGhGTEVOQlFUbEZMRVZCUVdsR0xFTkJRV3BHTEVOQlFWZzdPenRCUVVwdlF5eG5Ra0ZQY0VNc1lVRkJZU3hqUVVGaUxFVkJRVFpDTzBGQlF6ZENMSEZDUVVGTExFdEJRVXdzUjBGQllTeExRVUZpTEVOQlJEWkNPMkZCUVdwRE96czdRVUZRZDBNc1owSkJXWEJETEUxQlFVMHNTMEZCVGl4RlFVRmhPMEZCUTJJc01rSkJRVmNzZDBKQlFXRXNVVUZCWWl4RlFVRjFRaXhOUVVGTkxFdEJRVTRzUTBGQmJFTXNRMEZFWVR0aFFVRnFRanM3TzBGQlduZERMR2xDUVdsQ2VFTXNRMEZCVFN4UFFVRk9MRWRCUVdkQ0xHZENRVUZMTEZGQlFVd3NSVUZCWlN4TlFVRk5MRWxCUVU0c1JVRkJXU3hOUVVGTkxFVkJRVTRzUlVGQlZTeE5RVUZOTEVsQlFVNHNRMEZCY2tRc1EwRnFRbmRETzFOQlFUVkRPenM3UVVGc1FrWXNiMEpCZFVOR0xHMURRVUZoTzBGQlExUXNXVUZCU1N4TFFVRkxMRXRCUVV3c1NVRkJZeXhEUVVGRExFdEJRVXNzVjBGQlRDeEZRVUZyUWp0QlFVTnFReXhuUWtGQlNTeFpRVUZaTEV0QlFWb3NRMEZFTmtJN08wRkJSMnBETEdsQ1FVRkxMRWxCUVVrc1IwRkJTaXhKUVVGWExGVkJRV2hDTEVWQlFUUkNPMEZCUTNoQ0xHOUNRVUZKTEZkQlFWY3NZMEZCV0N4RFFVRXdRaXhIUVVFeFFpeERRVUZLTEVWQlFXOURPMEZCUTJoRExIZENRVUZKTEd0Q1FVRk5MRXRCUVVzc1IwRkJUQ3hEUVVGT0xFdEJRVzlDTEV0QlFVc3NSMEZCVEN4SlFVRlpMRXRCUVVzc1RVRkJUU3hMUVVGT0xFTkJRV3BDTEVWQlFTdENPMEZCUTI1RUxEWkNRVUZMTEUxQlFVMHNTMEZCVGl4RFFVRk1MRWRCUkcxRU8wRkJSVzVFTEc5RFFVRlpMRWxCUVZvc1EwRkdiVVE3UVVGSGJrUXNOa0pCUVVzc1YwRkJWeXhIUVVGWUxFTkJRVXdzU1VGSWJVUTdjVUpCUVhaRU8ybENRVVJLTzJGQlJFbzdPMEZCVlVFc1owSkJRVWtzUTBGQlF5eFRRVUZFTEVWQlFWazdRVUZEV2l4eFFrRkJTeXhSUVVGTUxFZEJSRms3WVVGQmFFSTdVMEZpU2pzN08wRkJlRU5HTEc5Q1FUSkVSaXh0UTBGQllUdEJRVU5VTEZsQlFVMHNVMEZCVXl4TFFVRkxMRTFCUVV3c1EwRkVUanM3UVVGSFZDeGhRVUZMTEU5QlFVd3NSMEZCWlN4TFFVRkxMRkZCUVV3c1IwRkJaMElzUzBGQlN5eFBRVUZNTEVOQlNIUkNPenRCUVV0VUxHRkJRVXNzU1VGQlNTeEhRVUZLTEVsQlFWY3NUVUZCYUVJc1JVRkJkMEk3UVVGRGNFSXNaMEpCUVVrc1QwRkJUeXhqUVVGUUxFTkJRWE5DTEVkQlFYUkNMRU5CUVVvc1JVRkJaME03UVVGRE5VSXNiMEpCUVUwc1VVRkJVU3hQUVVGUExFZEJRVkFzUTBGQlVpeERRVVJ6UWpzeVFrRkZTQ3hEUVVGRExFMUJRVTBzU1VGQlRpeEZRVUZaTEUxQlFVMHNSVUZCVGl4RlFVWldPMEZCUlROQ0xITkNRVUZOTEVWQlFVNHNWMEZHTWtJN1FVRkZha0lzYzBKQlFVMHNTVUZCVGl4WFFVWnBRanRoUVVGb1F6dFRRVVJLT3p0QlFVOUJMR1ZCUVU4c1NVRkJVQ3hEUVZwVE96czdRVUV6UkZnc2IwSkJNRVZHTERaQ1FVRlZPMEZCUTA0c1lVRkJTeXhoUVVGTUxFbEJRWE5DTEVOQlFVTXNRMEZCUkN4RFFVUm9RanRCUVVWT0xHVkJRVThzU1VGQlVDeERRVVpOT3pzN1FVRXhSVklzYjBKQkswVkdMRFpDUVVGVk8wRkJRMDRzWVVGQlN5eFBRVUZNTEVkQlFXVXNTVUZCUXl4RFFVRkxMR0ZCUVV3c1MwRkJkVUlzUTBGQmRrSXNSMEZCTkVJc1EwRkJOMElzUjBGQmFVTXNTMEZCU3l4UlFVRk1MRU5CUkRGRE8wRkJSVTRzWVVGQlN5eFBRVUZNTEVkQlFXVXNlVUpCUVdZc1EwRkdUVHRCUVVkT0xHVkJRVThzU1VGQlVDeERRVWhOT3pzN1FVRXZSVklzYjBKQmNVWkdMSEZDUVVGTExGVkJRVlU3UVVGRFdDeGhRVUZMTEZGQlFVd3NRMEZCWXl4TFFVRkxMRkZCUVV3c1IwRkJaMElzVVVGQmFFSXNRMEZCWkN4RFFVUlhPMEZCUlZnc1pVRkJUeXhKUVVGUUxFTkJSbGM3T3p0QlFYSkdZaXh2UWtFd1JrWXNOa0pCUVZNc1UwRkJVenRCUVVOa0xGbEJRVWtzUTBGQlF5eExRVUZMTEZGQlFVd3NTVUZCYVVJc1MwRkJTeXhYUVVGTUxFVkJRV3RDTzBGQlEzQkRMR2xDUVVGTExFbEJRVXdzUjBGRWIwTTdRVUZGY0VNc2FVSkJRVXNzVjBGQlRDeEhRVUZ0UWl4SlFVRnVRaXhEUVVadlF6dFRRVUY0UXpzN1FVRkxRU3hoUVVGTExFOUJRVXdzUjBGQlpTeFBRVUZtTEVOQlRtTTdPMEZCVVdRc1pVRkJUeXhKUVVGUUxFTkJVbU03T3p0WFFURkdhRUk3T3p0QlFYTkhUaXhOUVVGTkxGTkJRVTRzUTBGQlowSXNaMEpCUVdoQ0xFZEJRVzFETEVsQlFXNURPMEZCUTBFc1RVRkJUU3hUUVVGT0xFTkJRV2RDTEZsQlFXaENMRWRCUVN0Q0xHbENRVUZQTEd0Q1FVRlFMRU5CUVRCQ08wRkJRM0pFTEZkQlFVOHNRMEZCVUR0QlFVTkJMR05CUVZVc1IwRkJWanRCUVVOQkxGVkJRVTBzZFVKQlFVOHNUMEZCVUR0QlFVTk9MR0ZCUVZNc1EwRkJWRHRCUVVOQkxGVkJRVTBzUTBGQlRqdEJRVU5CTEZkQlFVOHNRMEZCVUR0QlFVTkJMRkZCUVVrc1EwRkJTanRCUVVOQkxGZEJRVThzUzBGQlVEdERRVkl5UWl4RFFVRXZRanRCUVZWQkxFMUJRVTBzVTBGQlRpeERRVUZuUWl4WlFVRm9RaXhIUVVFclFpeHBRa0ZCVHl4clFrRkJVQ3hEUVVFd1FqdEJRVU55UkN4WFFVRlBMRWxCUVZBN1FVRkRRU3haUVVGUkxFTkJRVkk3UVVGRFFTeFZRVUZOTEVOQlFVNDdRVUZEUVN4VlFVRk5MRU5CUVU0N1FVRkRRU3hWUVVGTkxFTkJRVTQ3UVVGRFFTeGxRVUZYTEVOQlFWZzdRVUZEUVN4bFFVRlhMRU5CUVZnN1FVRkRRU3hsUVVGWExFTkJRVmc3UVVGRFFTeHRRa0ZCWlN4RFFVRm1PMEZCUTBFc2FVSkJRV0VzUzBGQllqdEJRVU5CTEZkQlFVOHNTMEZCVUR0QlFVTkJMR0ZCUVZNc1EwRkJWRHREUVZveVFpeERRVUV2UWpzN2EwSkJaV1VpTENKbWFXeGxJam9pVkhkbFpXNHVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFF2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJRUZqZEdsdmJpQm1jbTl0SUNjdUwwRmpkR2x2YmljN1hHNXBiWEJ2Y25RZ1pXRnphVzVuSUdaeWIyMGdKeTR2WldGemFXNW5MM0J5WlhObGRDMWxZWE5wYm1jbk8xeHVhVzF3YjNKMElIc2dZM1Z5Y21WdWRGUnBiV1VzSUdselRuVnRJSDBnWm5KdmJTQW5MaTR2YVc1akwzVjBhV3h6Snp0Y2JtbHRjRzl5ZENCN0lHVmhjMlVzSUhKbGMzUnlhV04wTENCblpYUlFjbTluY21WemMwWnliMjFXWVd4MVpTd2djM1JsY0ZCeWIyZHlaWE56SUgwZ1puSnZiU0FuTGk0dmFXNWpMMk5oYkdNbk8xeHVYRzVqYjI1emRDQkRUMVZPVkNBOUlDZERiM1Z1ZENjN1hHNWpiMjV6ZENCT1JWaFVYMU5VUlZCVElEMGdlMXh1SUNBZ0lHeHZiM0E2SUNkeVpYTjBZWEowSnl4Y2JpQWdJQ0I1YjNsdk9pQW5jbVYyWlhKelpTY3NYRzRnSUNBZ1pteHBjRG9nSjJac2FYQldZV3gxWlhNblhHNTlPMXh1WEc1amJHRnpjeUJVZDJWbGJpQmxlSFJsYm1SeklFRmpkR2x2YmlCN1hHNGdJQ0FnYzNSaGNuUW9LU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaV3hoY0hObFpDQTlJREE3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVabXhwY0VOdmRXNTBJRDBnZEdocGN5NTViM2x2UTI5MWJuUWdQU0IwYUdsekxteHZiM0JEYjNWdWRDQTlJREE3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVhWE5UWTNKMVltSnBibWNnUFNCbVlXeHpaVHRjYmx4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnYzNWd1pYSXVjM1JoY25Rb0tUdGNiaUFnSUNCOVhHNWNiaUFnSUNCdmJsVndaR0YwWlNoMGQyVmxiaXdnWm5KaGJXVlRkR0Z0Y0N3Z1pXeGhjSE5sWkNrZ2UxeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCd2NtOW5jbVZ6YzFSaGNtZGxkQ0E5SUNoMGFHbHpMbkJzWVhsRWFYSmxZM1JwYjI0Z1BUMDlJREVwSUQ4Z01TQTZJREE3WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVsYm1SbFpDQTlJSFJ5ZFdVN1hHNWNiaUFnSUNBZ0lDQWdhV1lnS0NGMGFHbHpMbWx6VTJOeWRXSmlhVzVuS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtVnNZWEJ6WldRZ0t6MGdLR1ZzWVhCelpXUWdLaUIwYUdsekxtUnBiR0YwWlNrZ0tpQjBhR2x6TG5Cc1lYbEVhWEpsWTNScGIyNDdYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElIUm9hWE11Ym5WdFZtRnNkV1ZMWlhsek95QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElHdGxlU0E5SUhSb2FYTXVkbUZzZFdWTFpYbHpXMmxkTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2RtRnNkV1VnUFNCMGFHbHpMblpoYkhWbGMxdHJaWGxkTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0JzWlhRZ2NISnZaM0psYzNNZ1BTQnlaWE4wY21samRDaG5aWFJRY205bmNtVnpjMFp5YjIxV1lXeDFaU2gwYUdsekxtVnNZWEJ6WldRZ0xTQjJZV3gxWlM1a1pXeGhlU3dnTUN3Z2RtRnNkV1V1WkhWeVlYUnBiMjRwTENBd0xDQXhLVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnVFdGeWF5QlVkMlZsYmlCaGN5Qk9UMVFnWlc1a1pXUWdhV1lnYzNScGJHd2dhVzRnY0hKdlozSmxjM05jYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2h3Y205bmNtVnpjeUFoUFQwZ2NISnZaM0psYzNOVVlYSm5aWFFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbVZ1WkdWa0lEMGdabUZzYzJVN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUZOMFpYQWdjSEp2WjNKbGMzTWdhV1lnZDJVbmNtVWdjM1JsY0hCcGJtZGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaDJZV3gxWlM1emRHVndjeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhCeWIyZHlaWE56SUQwZ2MzUmxjRkJ5YjJkeVpYTnpLSEJ5YjJkeVpYTnpMQ0IyWVd4MVpTNXpkR1Z3Y3lrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUVWaGMyVWdjSEp2WjNKbGMzTmNiaUFnSUNBZ0lDQWdJQ0FnSUhaaGJIVmxMbU4xY25KbGJuUWdQU0JsWVhObEtIQnliMmR5WlhOekxDQjJZV3gxWlM1bWNtOXRMQ0IyWVd4MVpTNTBieXdnZG1Gc2RXVXVaV0Z6WlNrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNCdmJrWnlZVzFsUlc1a0tDa2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb2RHaHBjeTVsYm1SbFpDQW1KaUFoZEdocGN5NXBjMU5qY25WaVltbHVaeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdiR1YwSUhOMFpYQlVZV3RsYmlBOUlHWmhiSE5sTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0JtYjNJZ0tHeGxkQ0JyWlhrZ2FXNGdUa1ZZVkY5VFZFVlFVeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDaE9SVmhVWDFOVVJWQlRMbWhoYzA5M2JsQnliM0JsY25SNUtHdGxlU2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0dselRuVnRLSFJvYVhOYmEyVjVYU2tnSmlZZ2RHaHBjMXRyWlhsZElENGdkR2hwYzF0clpYa2dLeUJEVDFWT1ZGMHBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhOYmEyVjVJQ3NnUTA5VlRsUmRLeXM3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J6ZEdWd1ZHRnJaVzRnUFNCMGNuVmxPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2hwYzF0T1JWaFVYMU5VUlZCVFcydGxlVjFkS0NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2doYzNSbGNGUmhhMlZ1S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVqYjIxd2JHVjBaU2dwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVnh1WEc0Z0lDQWdabXhwY0ZaaGJIVmxjeWdwSUh0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnZG1Gc2RXVnpJRDBnZEdocGN5NTJZV3gxWlhNN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1bGJHRndjMlZrSUQwZ2RHaHBjeTVrZFhKaGRHbHZiaUF0SUhSb2FYTXVaV3hoY0hObFpEdGNibHh1SUNBZ0lDQWdJQ0JtYjNJZ0tHeGxkQ0JyWlhrZ2FXNGdkbUZzZFdWektTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9kbUZzZFdWekxtaGhjMDkzYmxCeWIzQmxjblI1S0d0bGVTa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQjJZV3gxWlNBOUlIWmhiSFZsYzF0clpYbGRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRnQyWVd4MVpTNTBieXdnZG1Gc2RXVXVabkp2YlYwZ1BTQmJkbUZzZFdVdVpuSnZiU3dnZG1Gc2RXVXVkRzlkTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NtVjJaWEp6WlNncElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1d2JHRjVSR2x5WldOMGFXOXVJQ285SUMweE8xeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjenRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnlaWE4wWVhKMEtDa2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxtVnNZWEJ6WldRZ1BTQW9kR2hwY3k1d2JHRjVSR2x5WldOMGFXOXVJRDA5UFNBeEtTQS9JREFnT2lCMGFHbHpMbVIxY21GMGFXOXVPMXh1SUNBZ0lDQWdJQ0IwYUdsekxuTjBZWEowWldRZ1BTQmpkWEp5Wlc1MFZHbHRaU2dwTzF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnSUNCOVhHNWNiaUFnSUNCelpXVnJLSEJ5YjJkeVpYTnpLU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjMlZsYTFScGJXVW9kR2hwY3k1a2RYSmhkR2x2YmlBcUlIQnliMmR5WlhOektUdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjMlZsYTFScGJXVW9aV3hoY0hObFpDa2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb0lYUm9hWE11YVhOQlkzUnBkbVVnZkh3Z2RHaHBjeTVwYzFOamNuVmlZbWx1WnlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXZibU5sS0NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtbHpVMk55ZFdKaWFXNW5JRDBnZEhKMVpUdGNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaV3hoY0hObFpDQTlJR1ZzWVhCelpXUTdYRzVjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJQ0FnZlZ4dWZWeHVYRzVVZDJWbGJpNXdjbTkwYjNSNWNHVXVaR1ZtWVhWc2RGWmhiSFZsVUhKdmNDQTlJQ2QwYnljN1hHNVVkMlZsYmk1d2NtOTBiM1I1Y0dVdVpHVm1ZWFZzZEZaaGJIVmxJRDBnUVdOMGFXOXVMbVY0ZEdWdVpFUmxabUYxYkhSV1lXeDFaU2g3WEc0Z0lDQWdaR1ZzWVhrNklEQXNYRzRnSUNBZ1pIVnlZWFJwYjI0NklETXdNQ3hjYmlBZ0lDQmxZWE5sT2lCbFlYTnBibWN1WldGelpVOTFkQ3hjYmlBZ0lDQmxiR0Z3YzJWa09pQXdMRnh1SUNBZ0lHWnliMjA2SURBc1hHNGdJQ0FnYzNSbGNITTZJREFzWEc0Z0lDQWdkRzg2SURBc1hHNGdJQ0FnY205MWJtUTZJR1poYkhObFhHNTlLVHRjYmxSM1pXVnVMbkJ5YjNSdmRIbHdaUzVrWldaaGRXeDBVSEp2Y0hNZ1BTQkJZM1JwYjI0dVpYaDBaVzVrUkdWbVlYVnNkRkJ5YjNCektIdGNiaUFnSUNCaWJHVnVaRG9nZEhKMVpTeGNiaUFnSUNCa2FXeGhkR1U2SURFc1hHNGdJQ0FnYkc5dmNEb2dNQ3hjYmlBZ0lDQjViM2x2T2lBd0xGeHVJQ0FnSUdac2FYQTZJREFzWEc0Z0lDQWdiRzl2Y0VOdmRXNTBPaUF3TEZ4dUlDQWdJSGx2ZVc5RGIzVnVkRG9nTUN4Y2JpQWdJQ0JtYkdsd1EyOTFiblE2SURBc1hHNGdJQ0FnY0d4aGVVUnBjbVZqZEdsdmJqb2dNU3hjYmlBZ0lDQnBjMU5qY25WaVltbHVaem9nWm1Gc2MyVXNYRzRnSUNBZ1pXNWtaV1E2SUdaaGJITmxMRnh1SUNBZ0lHVnNZWEJ6WldRNklEQmNibjBwTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCVWQyVmxianRjYmlKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvVHdlZW4uanNcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfQWN0aW9uMiA9IHJlcXVpcmUoJy4vQWN0aW9uJyk7XG5cbnZhciBfQWN0aW9uMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0FjdGlvbjIpO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFBoeXNpY3MgPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICAgIF9pbmhlcml0cyhQaHlzaWNzLCBfQWN0aW9uKTtcblxuICAgIGZ1bmN0aW9uIFBoeXNpY3MoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQaHlzaWNzKTtcblxuICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uY2FsbC5hcHBseShfQWN0aW9uLCBbdGhpc10uY29uY2F0KGFyZ3MpKSk7XG5cbiAgICAgICAgX3RoaXMuaW5hY3RpdmVGcmFtZXMgPSAwO1xuICAgICAgICBfdGhpcy5jYWxjdWxhdGVzVmVsb2NpdHkgPSB0cnVlO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgUGh5c2ljcy5wcm90b3R5cGUub25VcGRhdGUgPSBmdW5jdGlvbiBvblVwZGF0ZShwaHlzaWNzLCBmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgICAgIHRoaXMuaGFzQ2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMudmFsdWVLZXlzW2ldO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcbiAgICAgICAgICAgIHZhciBwcmV2aW91c1ZhbHVlID0gdmFsdWUucHJldjtcblxuICAgICAgICAgICAgLy8gQXBwbHkgYWNjZWxlcmF0aW9uXG4gICAgICAgICAgICB2YWx1ZS52ZWxvY2l0eSArPSAoMCwgX2NhbGMuc3BlZWRQZXJGcmFtZSkodmFsdWUuYWNjZWxlcmF0aW9uLCBlbGFwc2VkKTtcblxuICAgICAgICAgICAgLy8gQXBwbHkgZnJpY3Rpb25cbiAgICAgICAgICAgIHZhbHVlLnZlbG9jaXR5ICo9IE1hdGgucG93KDEgLSB2YWx1ZS5mcmljdGlvbiwgZWxhcHNlZCAvIDEwMCk7XG5cbiAgICAgICAgICAgIC8vIEFwcGx5IHNwcmluZ1xuICAgICAgICAgICAgaWYgKHZhbHVlLnNwcmluZyAmJiAoMCwgX3V0aWxzLmlzTnVtKSh2YWx1ZS50bykpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGlzdGFuY2VUb1RhcmdldCA9IHZhbHVlLnRvIC0gdmFsdWUuY3VycmVudDtcbiAgICAgICAgICAgICAgICB2YWx1ZS52ZWxvY2l0eSArPSBkaXN0YW5jZVRvVGFyZ2V0ICogKDAsIF9jYWxjLnNwZWVkUGVyRnJhbWUpKHZhbHVlLnNwcmluZywgZWxhcHNlZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEFwcGx5IGxhdGVzdCB2ZWxvY2l0eVxuICAgICAgICAgICAgdmFsdWUuY3VycmVudCArPSAoMCwgX2NhbGMuc3BlZWRQZXJGcmFtZSkodmFsdWUudmVsb2NpdHksIGVsYXBzZWQpO1xuXG4gICAgICAgICAgICAvLyBEZXRlY3QgYm91bmNlXG4gICAgICAgICAgICBpZiAodmFsdWUubWluICE9PSB1bmRlZmluZWQgJiYgdmFsdWUuY3VycmVudCA8IHZhbHVlLm1pbiB8fCB2YWx1ZS5tYXggIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS5jdXJyZW50ID4gdmFsdWUubWF4KSB7XG4gICAgICAgICAgICAgICAgdmFsdWUudmVsb2NpdHkgKj0gLXZhbHVlLmJvdW5jZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdmFsdWUgaGFzIGNoYW5nZWRcbiAgICAgICAgICAgIGlmICh2YWx1ZS5jdXJyZW50ICE9PSBwcmV2aW91c1ZhbHVlIHx8IE1hdGguYWJzKHZhbHVlLnZlbG9jaXR5KSA+PSB2YWx1ZS5zdG9wU3BlZWQgfHwgdmFsdWUuc3ByaW5nICYmIHZhbHVlLmN1cnJlbnQgIT09IHZhbHVlLnRvKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBQaHlzaWNzLnByb3RvdHlwZS5vbkZyYW1lRW5kID0gZnVuY3Rpb24gb25GcmFtZUVuZCgpIHtcbiAgICAgICAgaWYgKHRoaXMubWF4SW5hY3RpdmVGcmFtZXMgIT09IEluZmluaXR5KSB7XG4gICAgICAgICAgICB0aGlzLmluYWN0aXZlRnJhbWVzID0gdGhpcy5oYXNDaGFuZ2VkID8gMSA6IHRoaXMuaW5hY3RpdmVGcmFtZXMgKyAxO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5pbmFjdGl2ZUZyYW1lcyA+PSB0aGlzLm1heEluYWN0aXZlRnJhbWVzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBQaHlzaWNzO1xufShfQWN0aW9uMy5kZWZhdWx0KTtcblxuUGh5c2ljcy5wcm90b3R5cGUuZGVmYXVsdFZhbHVlUHJvcCA9ICd2ZWxvY2l0eSc7XG5QaHlzaWNzLnByb3RvdHlwZS5kZWZhdWx0VmFsdWUgPSBfQWN0aW9uMy5kZWZhdWx0LmV4dGVuZERlZmF1bHRWYWx1ZSh7XG4gICAgYWNjZWxlcmF0aW9uOiAwLCAvLyBbbnVtYmVyXTogQWNjZWxlcmF0aW9uIHRvIGFwcGx5IHRvIHZhbHVlLCBpbiB1bml0cyBwZXIgc2Vjb25kXG4gICAgYm91bmNlOiAwLCAvLyBbbnVtYmVyXTogRmFjdG9yIHRvIG11bHRpcGx5IHZlbG9jaXR5IGJ5IG9uIGJvdW5jZVxuICAgIHNwcmluZzogMCwgLy8gW251bWJlcl06IFNwcmluZyBzdHJlbmd0aCBkdXJpbmcgJ3N0cmluZydcbiAgICBzdG9wU3BlZWQ6IDAuMDAxLCAvLyBbbnVtYmVyXTogU3RvcCBzaW11bGF0aW9uIHVuZGVyIHRoaXMgc3BlZWRcbiAgICBmcmljdGlvbjogMCAvLyBbbnVtYmVyXTogRnJpY3Rpb24gdG8gYXBwbHkgcGVyIGZyYW1lLCAwLTFcbn0pO1xuUGh5c2ljcy5wcm90b3R5cGUuZGVmYXVsdFByb3BzID0gX0FjdGlvbjMuZGVmYXVsdC5leHRlbmREZWZhdWx0UHJvcHMoe1xuICAgIG1heEluYWN0aXZlRnJhbWVzOiAzXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUGh5c2ljcztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDFCb2VYTnBZM011YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dEJRVUZCT3pzN08wRkJRMEU3TzBGQlEwRTdPenM3T3pzN096czdTVUZGVFRzN08wRkJRMFlzWVVGRVJTeFBRVU5HTEVkQlFYRkNPemhDUVVSdVFpeFRRVU50UWpzN01FTkJRVTQ3TzFOQlFVMDdPM0ZFUVVOcVFpd3dRMEZCVXl4TFFVRlVMRWRCUkdsQ096dEJRVVZxUWl4alFVRkxMR05CUVV3c1IwRkJjMElzUTBGQmRFSXNRMEZHYVVJN1FVRkhha0lzWTBGQlN5eHJRa0ZCVEN4SFFVRXdRaXhKUVVFeFFpeERRVWhwUWpzN1MwRkJja0k3TzBGQlJFVXNjMEpCVDBZc05rSkJRVk1zVTBGQlV5eFpRVUZaTEZOQlFWTTdRVUZEYmtNc1lVRkJTeXhWUVVGTUxFZEJRV3RDTEV0QlFXeENMRU5CUkcxRE96dEJRVWR1UXl4aFFVRkxMRWxCUVVrc1NVRkJTU3hEUVVGS0xFVkJRVThzU1VGQlNTeExRVUZMTEZsQlFVd3NSVUZCYlVJc1IwRkJka01zUlVGQk5FTTdRVUZEZUVNc1owSkJRVTBzVFVGQlRTeExRVUZMTEZOQlFVd3NRMEZCWlN4RFFVRm1MRU5CUVU0c1EwRkVhME03UVVGRmVFTXNaMEpCUVUwc1VVRkJVU3hMUVVGTExFMUJRVXdzUTBGQldTeEhRVUZhTEVOQlFWSXNRMEZHYTBNN1FVRkhlRU1zWjBKQlFVMHNaMEpCUVdkQ0xFMUJRVTBzU1VGQlRqczdPMEZCU0d0Q0xHbENRVTE0UXl4RFFVRk5MRkZCUVU0c1NVRkJhMElzZVVKQlFXTXNUVUZCVFN4WlFVRk9MRVZCUVc5Q0xFOUJRV3hETEVOQlFXeENPenM3UVVGT2QwTXNhVUpCVTNoRExFTkJRVTBzVVVGQlRpeGhRVUZ0UWl4SlFVRkpMRTFCUVUwc1VVRkJUaXhGUVVGdlFpeFZRVUZWTEVkQlFWWXNRMEZCTTBNN096dEJRVlIzUXl4blFrRlpjRU1zVFVGQlRTeE5RVUZPTEVsQlFXZENMR3RDUVVGTkxFMUJRVTBzUlVGQlRpeERRVUYwUWl4RlFVRnBRenRCUVVOcVF5eHZRa0ZCVFN4dFFrRkJiVUlzVFVGQlRTeEZRVUZPTEVkQlFWY3NUVUZCVFN4UFFVRk9MRU5CUkVnN1FVRkZha01zYzBKQlFVMHNVVUZCVGl4SlFVRnJRaXh0UWtGQmJVSXNlVUpCUVdNc1RVRkJUU3hOUVVGT0xFVkJRV01zVDBGQk5VSXNRMEZCYmtJc1EwRkdaVHRoUVVGeVF6czdPMEZCV25kRExHbENRV3RDZUVNc1EwRkJUU3hQUVVGT0xFbEJRV2xDTEhsQ1FVRmpMRTFCUVUwc1VVRkJUaXhGUVVGblFpeFBRVUU1UWl4RFFVRnFRanM3TzBGQmJFSjNReXhuUWtGeFFuQkRMRXRCUVVNc1EwRkJUU3hIUVVGT0xFdEJRV01zVTBGQlpDeEpRVUV5UWl4TlFVRk5MRTlCUVU0c1IwRkJaMElzVFVGQlRTeEhRVUZPTEVsQlFXVXNUVUZCVFN4SFFVRk9MRXRCUVdNc1UwRkJaQ3hKUVVFeVFpeE5RVUZOTEU5QlFVNHNSMEZCWjBJc1RVRkJUU3hIUVVGT0xFVkJRVms3UVVGRGJFZ3NjMEpCUVUwc1VVRkJUaXhKUVVGclFpeERRVUZGTEUxQlFVMHNUVUZCVGl4RFFVUTRSanRoUVVGMFNEczdPMEZCY2tKM1F5eG5Ra0V3UW5CRExFMUJRVTBzVDBGQlRpeExRVUZyUWl4aFFVRnNRaXhKUVVGdFF5eExRVUZMTEVkQlFVd3NRMEZCVXl4TlFVRk5MRkZCUVU0c1EwRkJWQ3hKUVVFMFFpeE5RVUZOTEZOQlFVNHNTVUZCYjBJc1RVRkJUU3hOUVVGT0xFbEJRV2RDTEUxQlFVMHNUMEZCVGl4TFFVRnJRaXhOUVVGTkxFVkJRVTRzUlVGQlZ6dEJRVU5vU1N4eFFrRkJTeXhWUVVGTUxFZEJRV3RDTEVsQlFXeENMRU5CUkdkSk8yRkJRWEJKTzFOQk1VSktPenM3UVVGV1JpeHpRa0V3UTBZc2JVTkJRV0U3UVVGRFZDeFpRVUZKTEV0QlFVc3NhVUpCUVV3c1MwRkJNa0lzVVVGQk0wSXNSVUZCY1VNN1FVRkRja01zYVVKQlFVc3NZMEZCVEN4SFFVRnpRaXhMUVVGTExGVkJRVXdzUjBGQmEwSXNRMEZCYkVJc1IwRkJjMElzUzBGQlN5eGpRVUZNTEVkQlFYTkNMRU5CUVhSQ0xFTkJSRkE3TzBGQlIzSkRMR2RDUVVGSkxFdEJRVXNzWTBGQlRDeEpRVUYxUWl4TFFVRkxMR2xDUVVGTUxFVkJRWGRDTzBGQlF5OURMSEZDUVVGTExGRkJRVXdzUjBGRUswTTdZVUZCYmtRN1UwRklTanM3TzFkQk0wTkdPenM3UVVGeFJFNHNVVUZCVVN4VFFVRlNMRU5CUVd0Q0xHZENRVUZzUWl4SFFVRnhReXhWUVVGeVF6dEJRVU5CTEZGQlFWRXNVMEZCVWl4RFFVRnJRaXhaUVVGc1FpeEhRVUZwUXl4cFFrRkJUeXhyUWtGQlVDeERRVUV3UWp0QlFVTjJSQ3hyUWtGQll5eERRVUZrTzBGQlEwRXNXVUZCVVN4RFFVRlNPMEZCUTBFc1dVRkJVU3hEUVVGU08wRkJRMEVzWlVGQlZ5eExRVUZZTzBGQlEwRXNZMEZCVlN4RFFVRldPMEZCVEhWRUxFTkJRVEZDTEVOQlFXcERPMEZCVDBFc1VVRkJVU3hUUVVGU0xFTkJRV3RDTEZsQlFXeENMRWRCUVdsRExHbENRVUZQTEd0Q1FVRlFMRU5CUVRCQ08wRkJRM1pFTEhWQ1FVRnRRaXhEUVVGdVFqdERRVVEyUWl4RFFVRnFRenM3YTBKQlNXVWlMQ0ptYVd4bElqb2lVR2g1YzJsamN5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdRV04wYVc5dUlHWnliMjBnSnk0dlFXTjBhVzl1Snp0Y2JtbHRjRzl5ZENCN0lITndaV1ZrVUdWeVJuSmhiV1VnZlNCbWNtOXRJQ2N1TGk5cGJtTXZZMkZzWXljN1hHNXBiWEJ2Y25RZ2V5QnBjMDUxYlNCOUlHWnliMjBnSnk0dUwybHVZeTkxZEdsc2N5YzdYRzVjYm1Oc1lYTnpJRkJvZVhOcFkzTWdaWGgwWlc1a2N5QkJZM1JwYjI0Z2UxeHVJQ0FnSUdOdmJuTjBjblZqZEc5eUtDNHVMbUZ5WjNNcElIdGNiaUFnSUNBZ0lDQWdjM1Z3WlhJb0xpNHVZWEpuY3lrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YVc1aFkzUnBkbVZHY21GdFpYTWdQU0F3TzF4dUlDQWdJQ0FnSUNCMGFHbHpMbU5oYkdOMWJHRjBaWE5XWld4dlkybDBlU0E5SUhSeWRXVTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2IyNVZjR1JoZEdVb2NHaDVjMmxqY3l3Z1puSmhiV1ZUZEdGdGNDd2daV3hoY0hObFpDa2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxtaGhjME5vWVc1blpXUWdQU0JtWVd4elpUdGNibHh1SUNBZ0lDQWdJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUhSb2FYTXViblZ0Vm1Gc2RXVkxaWGx6T3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUd0bGVTQTlJSFJvYVhNdWRtRnNkV1ZMWlhselcybGRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnZG1Gc2RXVWdQU0IwYUdsekxuWmhiSFZsYzF0clpYbGRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnY0hKbGRtbHZkWE5XWVd4MVpTQTlJSFpoYkhWbExuQnlaWFk3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUVGd2NHeDVJR0ZqWTJWc1pYSmhkR2x2Ymx4dUlDQWdJQ0FnSUNBZ0lDQWdkbUZzZFdVdWRtVnNiMk5wZEhrZ0t6MGdjM0JsWldSUVpYSkdjbUZ0WlNoMllXeDFaUzVoWTJObGJHVnlZWFJwYjI0c0lHVnNZWEJ6WldRcE8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QkJjSEJzZVNCbWNtbGpkR2x2Ymx4dUlDQWdJQ0FnSUNBZ0lDQWdkbUZzZFdVdWRtVnNiMk5wZEhrZ0tqMGdLREVnTFNCMllXeDFaUzVtY21samRHbHZiaWtnS2lvZ0tHVnNZWEJ6WldRZ0x5QXhNREFwTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCQmNIQnNlU0J6Y0hKcGJtZGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaDJZV3gxWlM1emNISnBibWNnSmlZZ2FYTk9kVzBvZG1Gc2RXVXVkRzhwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnWkdsemRHRnVZMlZVYjFSaGNtZGxkQ0E5SUhaaGJIVmxMblJ2SUMwZ2RtRnNkV1V1WTNWeWNtVnVkRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IyWVd4MVpTNTJaV3h2WTJsMGVTQXJQU0JrYVhOMFlXNWpaVlJ2VkdGeVoyVjBJQ29nYzNCbFpXUlFaWEpHY21GdFpTaDJZV3gxWlM1emNISnBibWNzSUdWc1lYQnpaV1FwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJCY0hCc2VTQnNZWFJsYzNRZ2RtVnNiMk5wZEhsY2JpQWdJQ0FnSUNBZ0lDQWdJSFpoYkhWbExtTjFjbkpsYm5RZ0t6MGdjM0JsWldSUVpYSkdjbUZ0WlNoMllXeDFaUzUyWld4dlkybDBlU3dnWld4aGNITmxaQ2s3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUVSbGRHVmpkQ0JpYjNWdVkyVmNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDZ29kbUZzZFdVdWJXbHVJQ0U5UFNCMWJtUmxabWx1WldRZ0ppWWdkbUZzZFdVdVkzVnljbVZ1ZENBOElIWmhiSFZsTG0xcGJpa2dmSHdnS0haaGJIVmxMbTFoZUNBaFBUMGdkVzVrWldacGJtVmtJQ1ltSUhaaGJIVmxMbU4xY25KbGJuUWdQaUIyWVd4MVpTNXRZWGdwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnNkV1V1ZG1Wc2IyTnBkSGtnS2owZ0xTQjJZV3gxWlM1aWIzVnVZMlU3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUVOb1pXTnJJR2xtSUhaaGJIVmxJR2hoY3lCamFHRnVaMlZrWEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvZG1Gc2RXVXVZM1Z5Y21WdWRDQWhQVDBnY0hKbGRtbHZkWE5XWVd4MVpTQjhmQ0JOWVhSb0xtRmljeWgyWVd4MVpTNTJaV3h2WTJsMGVTa2dQajBnZG1Gc2RXVXVjM1J2Y0ZOd1pXVmtJSHg4SUNoMllXeDFaUzV6Y0hKcGJtY2dKaVlnZG1Gc2RXVXVZM1Z5Y21WdWRDQWhQVDBnZG1Gc2RXVXVkRzhwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVvWVhORGFHRnVaMlZrSUQwZ2RISjFaVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lHOXVSbkpoYldWRmJtUW9LU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDaDBhR2x6TG0xaGVFbHVZV04wYVhabFJuSmhiV1Z6SUNFOVBTQkpibVpwYm1sMGVTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVwYm1GamRHbDJaVVp5WVcxbGN5QTlJSFJvYVhNdWFHRnpRMmhoYm1kbFpDQS9JREVnT2lCMGFHbHpMbWx1WVdOMGFYWmxSbkpoYldWeklDc2dNVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0hSb2FYTXVhVzVoWTNScGRtVkdjbUZ0WlhNZ1BqMGdkR2hwY3k1dFlYaEpibUZqZEdsMlpVWnlZVzFsY3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WTI5dGNHeGxkR1VvS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYm4xY2JseHVVR2g1YzJsamN5NXdjbTkwYjNSNWNHVXVaR1ZtWVhWc2RGWmhiSFZsVUhKdmNDQTlJQ2QyWld4dlkybDBlU2M3WEc1UWFIbHphV056TG5CeWIzUnZkSGx3WlM1a1pXWmhkV3gwVm1Gc2RXVWdQU0JCWTNScGIyNHVaWGgwWlc1a1JHVm1ZWFZzZEZaaGJIVmxLSHRjYmlBZ0lDQmhZMk5sYkdWeVlYUnBiMjQ2SURBc0lDOHZJRnR1ZFcxaVpYSmRPaUJCWTJObGJHVnlZWFJwYjI0Z2RHOGdZWEJ3YkhrZ2RHOGdkbUZzZFdVc0lHbHVJSFZ1YVhSeklIQmxjaUJ6WldOdmJtUmNiaUFnSUNCaWIzVnVZMlU2SURBc0lDOHZJRnR1ZFcxaVpYSmRPaUJHWVdOMGIzSWdkRzhnYlhWc2RHbHdiSGtnZG1Wc2IyTnBkSGtnWW5rZ2IyNGdZbTkxYm1ObFhHNGdJQ0FnYzNCeWFXNW5PaUF3TENBdkx5QmJiblZ0WW1WeVhUb2dVM0J5YVc1bklITjBjbVZ1WjNSb0lHUjFjbWx1WnlBbmMzUnlhVzVuSjF4dUlDQWdJSE4wYjNCVGNHVmxaRG9nTUM0d01ERXNJQzh2SUZ0dWRXMWlaWEpkT2lCVGRHOXdJSE5wYlhWc1lYUnBiMjRnZFc1a1pYSWdkR2hwY3lCemNHVmxaRnh1SUNBZ0lHWnlhV04wYVc5dU9pQXdJQzh2SUZ0dWRXMWlaWEpkT2lCR2NtbGpkR2x2YmlCMGJ5QmhjSEJzZVNCd1pYSWdabkpoYldVc0lEQXRNVnh1ZlNrN1hHNVFhSGx6YVdOekxuQnliM1J2ZEhsd1pTNWtaV1poZFd4MFVISnZjSE1nUFNCQlkzUnBiMjR1WlhoMFpXNWtSR1ZtWVhWc2RGQnliM0J6S0h0Y2JpQWdJQ0J0WVhoSmJtRmpkR2wyWlVaeVlXMWxjem9nTTF4dWZTazdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJRkJvZVhOcFkzTTdYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9QaHlzaWNzLmpzXG4gKiogbW9kdWxlIGlkID0gNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX0FjdGlvbjIgPSByZXF1aXJlKCcuL0FjdGlvbicpO1xuXG52YXIgX0FjdGlvbjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BY3Rpb24yKTtcblxudmFyIF9Qb2ludGVyID0gcmVxdWlyZSgnLi4vaW5wdXQvUG9pbnRlcicpO1xuXG52YXIgX1BvaW50ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUG9pbnRlcik7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLypcbiAgICBTY3JhcGUgeC95IGNvb3JkaW5hdGVzIGZyb20gcHJvdmlkZWQgZXZlbnRcblxuICAgIEBwYXJhbSBbZXZlbnRdXG4gICAgQHJldHVybiBbb2JqZWN0XVxuKi9cbnZhciBtb3VzZUV2ZW50VG9Qb2ludCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogZS5wYWdlWCxcbiAgICAgICAgeTogZS5wYWdlWVxuICAgIH07XG59O1xuXG52YXIgdG91Y2hFdmVudFRvUG9pbnQgPSBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBjaGFuZ2VkVG91Y2hlcyA9IF9yZWYuY2hhbmdlZFRvdWNoZXM7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCxcbiAgICAgICAgeTogY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WVxuICAgIH07XG59O1xuXG52YXIgY3JlYXRlUG9pbnRlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgcmV0dXJuIGUudG91Y2hlcyA/IG5ldyBfUG9pbnRlcjIuZGVmYXVsdCh0b3VjaEV2ZW50VG9Qb2ludChlKSwgJ3RvdWNobW92ZScsIHRvdWNoRXZlbnRUb1BvaW50KSA6IG5ldyBfUG9pbnRlcjIuZGVmYXVsdChtb3VzZUV2ZW50VG9Qb2ludChlKSwgJ21vdXNlbW92ZScsIG1vdXNlRXZlbnRUb1BvaW50KTtcbn07XG5cbnZhciBnZXRBY3R1YWxFdmVudCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgcmV0dXJuIGUub3JpZ2luYWxFdmVudCB8fCBlO1xufTtcblxudmFyIFRyYWNrID0gZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgICBfaW5oZXJpdHMoVHJhY2ssIF9BY3Rpb24pO1xuXG4gICAgZnVuY3Rpb24gVHJhY2soKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUcmFjayk7XG5cbiAgICAgICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfVxuXG4gICAgVHJhY2sucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gc3RhcnQoaW5wdXQpIHtcbiAgICAgICAgX0FjdGlvbi5wcm90b3R5cGUuc3RhcnQuY2FsbCh0aGlzKTtcblxuICAgICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQgPSBpbnB1dC5zdGF0ZSA/IGlucHV0IDogY3JlYXRlUG9pbnRlcihnZXRBY3R1YWxFdmVudChpbnB1dCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbnB1dE9mZnNldCA9IHt9O1xuICAgICAgICB0aGlzLmlucHV0T3JpZ2luID0gX2V4dGVuZHMoe30sIHRoaXMuaW5wdXQuc3RhdGUpO1xuICAgICAgICB0aGlzLmlucHV0LnN0YXJ0KCk7XG4gICAgfTtcblxuICAgIFRyYWNrLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgICAgX0FjdGlvbi5wcm90b3R5cGUuc3RvcC5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLmlucHV0LnN0b3AoKTtcbiAgICB9O1xuXG4gICAgVHJhY2sucHJvdG90eXBlLm9uVXBkYXRlID0gZnVuY3Rpb24gb25VcGRhdGUodHJhY2ssIGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgICAgICAgdGhpcy5pbnB1dE9mZnNldCA9ICgwLCBfY2FsYy5vZmZzZXQpKHRoaXMuaW5wdXRPcmlnaW4sIHRoaXMuaW5wdXQuc3RhdGUpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMudmFsdWVLZXlzW2ldO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5pbnB1dE9mZnNldC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcblxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5kaXJlY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IHRoaXMuaW5wdXQuc3RhdGVbdmFsdWUud2F0Y2ggfHwga2V5XTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gdmFsdWUuZnJvbSArIHRoaXMuaW5wdXRPZmZzZXRbdmFsdWUud2F0Y2ggfHwga2V5XTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBTbW9vdGggdmFsdWUgaWYgd2UgaGF2ZSBzbW9vdGhpbmdcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUuc21vb3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSAoMCwgX2NhbGMuc21vb3RoKSh2YWx1ZS5jdXJyZW50LCB2YWx1ZS5wcmV2LCBlbGFwc2VkLCB2YWx1ZS5zbW9vdGgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gVHJhY2s7XG59KF9BY3Rpb24zLmRlZmF1bHQpO1xuXG5UcmFjay5wcm90b3R5cGUuZGVmYXVsdFZhbHVlUHJvcCA9ICd3YXRjaCc7XG5UcmFjay5wcm90b3R5cGUuZGVmYXVsdFZhbHVlID0gX0FjdGlvbjMuZGVmYXVsdC5leHRlbmREZWZhdWx0VmFsdWUoe1xuICAgIGRpcmVjdDogZmFsc2Vcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBUcmFjaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDFSeVlXTnJMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096dEJRVUZCT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3T3pzN096czdPenM3T3pzN096dEJRVkZCTEVsQlFVMHNiMEpCUVc5Q0xGVkJRVU1zUTBGQlJEdFhRVUZSTzBGQlF6bENMRmRCUVVjc1JVRkJSU3hMUVVGR08wRkJRMGdzVjBGQlJ5eEZRVUZGTEV0QlFVWTdPME5CUm0xQ096dEJRVXN4UWl4SlFVRk5MRzlDUVVGdlFqdFJRVUZITzFkQlFYTkNPMEZCUXk5RExGZEJRVWNzWlVGQlpTeERRVUZtTEVWQlFXdENMRTlCUVd4Q08wRkJRMGdzVjBGQlJ5eGxRVUZsTEVOQlFXWXNSVUZCYTBJc1QwRkJiRUk3TzBOQlJtMUNPenRCUVVzeFFpeEpRVUZOTEdkQ1FVRm5RaXhWUVVGRExFTkJRVVE3VjBGQlR5eEZRVUZGTEU5QlFVWXNSMEZEZWtJc2MwSkJRVmtzYTBKQlFXdENMRU5CUVd4Q0xFTkJRVm9zUlVGQmEwTXNWMEZCYkVNc1JVRkJLME1zYVVKQlFTOURMRU5CUkhsQ0xFZEJSWHBDTEhOQ1FVRlpMR3RDUVVGclFpeERRVUZzUWl4RFFVRmFMRVZCUVd0RExGZEJRV3hETEVWQlFTdERMR2xDUVVFdlF5eERRVVo1UWp0RFFVRlFPenRCUVVsMFFpeEpRVUZOTEdsQ1FVRnBRaXhWUVVGRExFTkJRVVE3VjBGQlR5eEZRVUZGTEdGQlFVWXNTVUZCYlVJc1EwRkJia0k3UTBGQlVEczdTVUZGYWtJN096czdPenM3T3p0dlFrRkRSaXgxUWtGQlRTeFBRVUZQTzBGQlExUXNNRUpCUVUwc1MwRkJUaXhaUVVSVE96dEJRVWRVTEZsQlFVa3NTMEZCU2l4RlFVRlhPMEZCUTFBc2FVSkJRVXNzUzBGQlRDeEhRVUZoTEUxQlFVMHNTMEZCVGl4SFFVRmpMRXRCUVdRc1IwRkJjMElzWTBGQll5eGxRVUZsTEV0QlFXWXNRMEZCWkN4RFFVRjBRaXhEUVVST08xTkJRVmc3TzBGQlNVRXNZVUZCU3l4WFFVRk1MRWRCUVcxQ0xFVkJRVzVDTEVOQlVGTTdRVUZSVkN4aFFVRkxMRmRCUVV3c1owSkJRWGRDTEV0QlFVc3NTMEZCVEN4RFFVRlhMRXRCUVZnc1EwRkJlRUlzUTBGU1V6dEJRVk5VTEdGQlFVc3NTMEZCVEN4RFFVRlhMRXRCUVZnc1IwRlVVenM3TzBGQlJGZ3NiMEpCWVVZc2RVSkJRVTg3UVVGRFNDd3dRa0ZCVFN4SlFVRk9MRmxCUkVjN1FVRkZTQ3hoUVVGTExFdEJRVXdzUTBGQlZ5eEpRVUZZTEVkQlJrYzdPenRCUVdKTUxHOUNRV3RDUml3MlFrRkJVeXhQUVVGUExGbEJRVmtzVTBGQlV6dEJRVU5xUXl4aFFVRkxMRmRCUVV3c1IwRkJiVUlzYTBKQlFVOHNTMEZCU3l4WFFVRk1MRVZCUVd0Q0xFdEJRVXNzUzBGQlRDeERRVUZYTEV0QlFWZ3NRMEZCTlVNc1EwRkVhVU03TzBGQlIycERMR0ZCUVVzc1NVRkJTU3hKUVVGSkxFTkJRVW9zUlVGQlR5eEpRVUZKTEV0QlFVc3NXVUZCVEN4RlFVRnRRaXhIUVVGMlF5eEZRVUUwUXp0QlFVTjRReXhuUWtGQlRTeE5RVUZOTEV0QlFVc3NVMEZCVEN4RFFVRmxMRU5CUVdZc1EwRkJUaXhEUVVSclF6czdRVUZIZUVNc1owSkJRVWtzUzBGQlN5eFhRVUZNTEVOQlFXbENMR05CUVdwQ0xFTkJRV2RETEVkQlFXaERMRU5CUVVvc1JVRkJNRU03UVVGRGRFTXNiMEpCUVUwc1VVRkJVU3hMUVVGTExFMUJRVXdzUTBGQldTeEhRVUZhTEVOQlFWSXNRMEZFWjBNN08wRkJSM1JETEc5Q1FVRkpMRTFCUVUwc1RVRkJUaXhGUVVGak8wRkJRMlFzTUVKQlFVMHNUMEZCVGl4SFFVRm5RaXhMUVVGTExFdEJRVXdzUTBGQlZ5eExRVUZZTEVOQlFXbENMRTFCUVUwc1MwRkJUaXhKUVVGbExFZEJRV1lzUTBGQmFrTXNRMEZFWXp0cFFrRkJiRUlzVFVGRlR6dEJRVU5JTERCQ1FVRk5MRTlCUVU0c1IwRkJaMElzVFVGQlRTeEpRVUZPTEVkQlFXRXNTMEZCU3l4WFFVRk1MRU5CUVdsQ0xFMUJRVTBzUzBGQlRpeEpRVUZsTEVkQlFXWXNRMEZCT1VJc1EwRkVZanRwUWtGR1VEczdPMEZCU0hORExHOUNRVlZzUXl4TlFVRk5MRTFCUVU0c1JVRkJZenRCUVVOa0xEQkNRVUZOTEU5QlFVNHNSMEZCWjBJc2EwSkJRVThzVFVGQlRTeFBRVUZPTEVWQlFXVXNUVUZCVFN4SlFVRk9MRVZCUVZrc1QwRkJiRU1zUlVGQk1rTXNUVUZCVFN4TlFVRk9MRU5CUVRORUxFTkJSR003YVVKQlFXeENPMkZCVmtvN1UwRklTanM3TzFkQmNrSkdPenM3UVVFd1EwNHNUVUZCVFN4VFFVRk9MRU5CUVdkQ0xHZENRVUZvUWl4SFFVRnRReXhQUVVGdVF6dEJRVU5CTEUxQlFVMHNVMEZCVGl4RFFVRm5RaXhaUVVGb1FpeEhRVUVyUWl4cFFrRkJUeXhyUWtGQlVDeERRVUV3UWp0QlFVTnlSQ3haUVVGUkxFdEJRVkk3UTBGRU1rSXNRMEZCTDBJN08ydENRVWxsSWl3aVptbHNaU0k2SWxSeVlXTnJMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwTDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0JCWTNScGIyNGdabkp2YlNBbkxpOUJZM1JwYjI0bk8xeHVhVzF3YjNKMElGQnZhVzUwWlhJZ1puSnZiU0FuTGk0dmFXNXdkWFF2VUc5cGJuUmxjaWM3WEc1cGJYQnZjblFnZXlCemJXOXZkR2dzSUc5bVpuTmxkQ0I5SUdaeWIyMGdKeTR1TDJsdVl5OWpZV3hqSnp0Y2JseHVMeXBjYmlBZ0lDQlRZM0poY0dVZ2VDOTVJR052YjNKa2FXNWhkR1Z6SUdaeWIyMGdjSEp2ZG1sa1pXUWdaWFpsYm5SY2JseHVJQ0FnSUVCd1lYSmhiU0JiWlhabGJuUmRYRzRnSUNBZ1FISmxkSFZ5YmlCYmIySnFaV04wWFZ4dUtpOWNibU52Ym5OMElHMXZkWE5sUlhabGJuUlViMUJ2YVc1MElEMGdLR1VwSUQwK0lDaDdYRzRnSUNBZ2VEb2daUzV3WVdkbFdDeGNiaUFnSUNCNU9pQmxMbkJoWjJWWlhHNTlLVHRjYmx4dVkyOXVjM1FnZEc5MVkyaEZkbVZ1ZEZSdlVHOXBiblFnUFNBb2V5QmphR0Z1WjJWa1ZHOTFZMmhsY3lCOUtTQTlQaUFvZTF4dUlDQWdJSGc2SUdOb1lXNW5aV1JVYjNWamFHVnpXekJkTG1Oc2FXVnVkRmdzWEc0Z0lDQWdlVG9nWTJoaGJtZGxaRlJ2ZFdOb1pYTmJNRjB1WTJ4cFpXNTBXVnh1ZlNrN1hHNWNibU52Ym5OMElHTnlaV0YwWlZCdmFXNTBaWElnUFNBb1pTa2dQVDRnWlM1MGIzVmphR1Z6SUQ5Y2JpQWdJQ0J1WlhjZ1VHOXBiblJsY2loMGIzVmphRVYyWlc1MFZHOVFiMmx1ZENobEtTd2dKM1J2ZFdOb2JXOTJaU2NzSUhSdmRXTm9SWFpsYm5SVWIxQnZhVzUwS1NBNklGeHVJQ0FnSUc1bGR5QlFiMmx1ZEdWeUtHMXZkWE5sUlhabGJuUlViMUJ2YVc1MEtHVXBMQ0FuYlc5MWMyVnRiM1psSnl3Z2JXOTFjMlZGZG1WdWRGUnZVRzlwYm5RcE8xeHVYRzVqYjI1emRDQm5aWFJCWTNSMVlXeEZkbVZ1ZENBOUlDaGxLU0E5UGlCbExtOXlhV2RwYm1Gc1JYWmxiblFnZkh3Z1pUdGNibHh1WTJ4aGMzTWdWSEpoWTJzZ1pYaDBaVzVrY3lCQlkzUnBiMjRnZTF4dUlDQWdJSE4wWVhKMEtHbHVjSFYwS1NCN1hHNGdJQ0FnSUNBZ0lITjFjR1Z5TG5OMFlYSjBLQ2s3WEc1Y2JpQWdJQ0FnSUNBZ2FXWWdLR2x1Y0hWMEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbWx1Y0hWMElEMGdhVzV3ZFhRdWMzUmhkR1VnUHlCcGJuQjFkQ0E2SUdOeVpXRjBaVkJ2YVc1MFpYSW9aMlYwUVdOMGRXRnNSWFpsYm5Rb2FXNXdkWFFwS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdWFXNXdkWFJQWm1aelpYUWdQU0I3ZlR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVwYm5CMWRFOXlhV2RwYmlBOUlIc2dMaTR1ZEdocGN5NXBibkIxZEM1emRHRjBaU0I5TzF4dUlDQWdJQ0FnSUNCMGFHbHpMbWx1Y0hWMExuTjBZWEowS0NrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYzNSdmNDZ3BJSHRjYmlBZ0lDQWdJQ0FnYzNWd1pYSXVjM1J2Y0NncE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1sdWNIVjBMbk4wYjNBb0tUdGNiaUFnSUNCOVhHNWNiaUFnSUNCdmJsVndaR0YwWlNoMGNtRmpheXdnWm5KaGJXVlRkR0Z0Y0N3Z1pXeGhjSE5sWkNrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG1sdWNIVjBUMlptYzJWMElEMGdiMlptYzJWMEtIUm9hWE11YVc1d2RYUlBjbWxuYVc0c0lIUm9hWE11YVc1d2RYUXVjM1JoZEdVcE8xeHVYRzRnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnZEdocGN5NXVkVzFXWVd4MVpVdGxlWE03SUdrckt5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnYTJWNUlEMGdkR2hwY3k1MllXeDFaVXRsZVhOYmFWMDdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxtbHVjSFYwVDJabWMyVjBMbWhoYzA5M2JsQnliM0JsY25SNUtHdGxlU2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0IyWVd4MVpTQTlJSFJvYVhNdWRtRnNkV1Z6VzJ0bGVWMDdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RtRnNkV1V1WkdseVpXTjBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIWmhiSFZsTG1OMWNuSmxiblFnUFNCMGFHbHpMbWx1Y0hWMExuTjBZWFJsVzNaaGJIVmxMbmRoZEdOb0lIeDhJR3RsZVYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZzZFdVdVkzVnljbVZ1ZENBOUlIWmhiSFZsTG1aeWIyMGdLeUIwYUdsekxtbHVjSFYwVDJabWMyVjBXM1poYkhWbExuZGhkR05vSUh4OElHdGxlVjA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0x5OGdVMjF2YjNSb0lIWmhiSFZsSUdsbUlIZGxJR2hoZG1VZ2MyMXZiM1JvYVc1blhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFpoYkhWbExuTnRiMjkwYUNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IyWVd4MVpTNWpkWEp5Wlc1MElEMGdjMjF2YjNSb0tIWmhiSFZsTG1OMWNuSmxiblFzSUhaaGJIVmxMbkJ5WlhZc0lHVnNZWEJ6WldRc0lIWmhiSFZsTG5OdGIyOTBhQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVnh1ZlZ4dVhHNVVjbUZqYXk1d2NtOTBiM1I1Y0dVdVpHVm1ZWFZzZEZaaGJIVmxVSEp2Y0NBOUlDZDNZWFJqYUNjN1hHNVVjbUZqYXk1d2NtOTBiM1I1Y0dVdVpHVm1ZWFZzZEZaaGJIVmxJRDBnUVdOMGFXOXVMbVY0ZEdWdVpFUmxabUYxYkhSV1lXeDFaU2g3WEc0Z0lDQWdaR2x5WldOME9pQm1ZV3h6WlZ4dWZTazdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJRlJ5WVdOck8xeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL1RyYWNrLmpzXG4gKiogbW9kdWxlIGlkID0gN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2xvb3AgPSByZXF1aXJlKCcuL2xvb3AnKTtcblxudmFyIGxvb3AgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfbG9vcCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH0gLypcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmFzZSBUYXNrIGNsYXNzIGZvciBjcmVhdGluZyBhIHRhc2sgb24gdGhlIG1haW4gcmVuZGVyIGxvb3AuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cblxuXG5mdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgIHRoaXMub25DbGVhbnVwID0gdW5kZWZpbmVkO1xuICAgIGxvb3AuZGVhY3RpdmF0ZSh0aGlzLmlkKTtcbn1cblxuZnVuY3Rpb24gYWN0aXZhdGUoKSB7XG4gICAgdGhpcy5vbkNsZWFudXAgPSBjbGVhbnVwO1xufVxuXG52YXIgVGFzayA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUYXNrKHByb3BzKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUYXNrKTtcblxuICAgICAgICB0aGlzLmlkID0gbG9vcC5nZXRUYXNrSWQoKTtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIGlmICh0aGlzLmRlZmF1bHRQcm9wcykge1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMuZGVmYXVsdFByb3BzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGVmYXVsdFByb3BzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpc1trZXldID0gdGhpcy5kZWZhdWx0UHJvcHNba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldChwcm9wcyk7XG4gICAgfVxuXG4gICAgVGFzay5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gc2V0KHByb3BzKSB7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wcykge1xuICAgICAgICAgICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSBwcm9wc1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIFRhc2sucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICAgIGxvb3AuYWN0aXZhdGUodGhpcy5pZCwgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5vbkFjdGl2YXRlTG9vcCA9IHRoaXMub25DbGVhbnVwID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmlzQ29tcGxldGUgPSBmYWxzZTtcblxuICAgICAgICBpZiAodGhpcy5vblN0YXJ0KSB7XG4gICAgICAgICAgICB0aGlzLm9uU3RhcnQodGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgVGFzay5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAgIGxvb3AuZGVhY3RpdmF0ZSh0aGlzLmlkKTtcblxuICAgICAgICBpZiAodGhpcy5vblN0b3ApIHtcbiAgICAgICAgICAgIHRoaXMub25TdG9wKHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIFRhc2sucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbiBvbmNlKCkge1xuICAgICAgICBsb29wLmFjdGl2YXRlKHRoaXMuaWQsIHRoaXMpO1xuICAgICAgICB0aGlzLm9uQ2xlYW51cCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5vbkFjdGl2YXRlTG9vcCA9IGFjdGl2YXRlO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBUYXNrLnByb3RvdHlwZS5jb21wbGV0ZSA9IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgICB0aGlzLnN0b3AoKTtcblxuICAgICAgICBpZiAodGhpcy5vbkNvbXBsZXRlKSB7XG4gICAgICAgICAgICB0aGlzLm9uQ29tcGxldGUodGhpcyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgIyBFeHRlbmQgdGhpcyBQcm9jZXNzIHdpdGggbmV3IHByb3BlcnRpZXNcbiAgICAgICAgIyMgUmV0dXJucyBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBQcm9jZXNzJ3MgYHByb3RvdHlwZWAgd2l0aCBleGlzdGluZyBhbmQgbmV3IHByb3BlcnRpZXNcbiAgICAgICAgIEBwYXJhbSBbb2JqZWN0XSAob3B0aW9uYWwpXG4gICAgICAgIEByZXR1cm4gW1Byb2Nlc3NdXG4gICAgKi9cblxuXG4gICAgVGFzay5wcm90b3R5cGUuaW5oZXJpdCA9IGZ1bmN0aW9uIGluaGVyaXQocHJvcHMpIHtcbiAgICAgICAgdmFyIGlkID0gdGhpcy5pZDtcblxuICAgICAgICB2YXIgaW5oZXJpdGVkUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXModGhpcywgWydpZCddKTtcblxuICAgICAgICByZXR1cm4gbmV3IHRoaXMuY29uc3RydWN0b3IoX2V4dGVuZHMoe30sIGluaGVyaXRlZFByb3BzLCBwcm9wcykpO1xuICAgIH07XG5cbiAgICByZXR1cm4gVGFzaztcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gVGFzaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MFlYTnJMMVJoYzJzdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3TzBGQlIwRTdPMGxCUVZrN096czdPenM3T3pzN08wRkJSVm9zVTBGQlV5eFBRVUZVTEVkQlFXMUNPMEZCUTJZc1UwRkJTeXhUUVVGTUxFZEJRV2xDTEZOQlFXcENMRU5CUkdVN1FVRkZaaXhUUVVGTExGVkJRVXdzUTBGQlowSXNTMEZCU3l4RlFVRk1MRU5CUVdoQ0xFTkJSbVU3UTBGQmJrSTdPMEZCUzBFc1UwRkJVeXhSUVVGVUxFZEJRVzlDTzBGQlEyaENMRk5CUVVzc1UwRkJUQ3hIUVVGcFFpeFBRVUZxUWl4RFFVUm5RanREUVVGd1FqczdTVUZKY1VJN1FVRkRha0lzWVVGRWFVSXNTVUZEYWtJc1EwRkJXU3hMUVVGYUxFVkJRVzFDT3poQ1FVUkdMRTFCUTBVN08wRkJRMllzWVVGQlN5eEZRVUZNTEVkQlFWVXNTMEZCU3l4VFFVRk1MRVZCUVZZc1EwRkVaVHRCUVVWbUxHRkJRVXNzVVVGQlRDeEhRVUZuUWl4TFFVRm9RaXhEUVVabE96dEJRVWxtTEZsQlFVa3NTMEZCU3l4WlFVRk1MRVZCUVcxQ08wRkJRMjVDTEdsQ1FVRkxMRWxCUVVrc1IwRkJTaXhKUVVGWExFdEJRVXNzV1VGQlRDeEZRVUZ0UWp0QlFVTXZRaXh2UWtGQlNTeExRVUZMTEZsQlFVd3NRMEZCYTBJc1kwRkJiRUlzUTBGQmFVTXNSMEZCYWtNc1EwRkJTaXhGUVVFeVF6dEJRVU4yUXl4NVFrRkJTeXhIUVVGTUxFbEJRVmtzUzBGQlN5eFpRVUZNTEVOQlFXdENMRWRCUVd4Q0xFTkJRVm9zUTBGRWRVTTdhVUpCUVRORE8yRkJSRW83VTBGRVNqczdRVUZSUVN4aFFVRkxMRWRCUVV3c1EwRkJVeXhMUVVGVUxFVkJXbVU3UzBGQmJrSTdPMEZCUkdsQ0xHMUNRV2RDYWtJc2JVSkJRVWtzVDBGQlR6dEJRVU5RTEdGQlFVc3NTVUZCU1N4SFFVRktMRWxCUVZjc1MwRkJhRUlzUlVGQmRVSTdRVUZEYmtJc1owSkJRVWtzVFVGQlRTeGpRVUZPTEVOQlFYRkNMRWRCUVhKQ0xFTkJRVW9zUlVGQkswSTdRVUZETTBJc2NVSkJRVXNzUjBGQlRDeEpRVUZaTEUxQlFVMHNSMEZCVGl4RFFVRmFMRU5CUkRKQ08yRkJRUzlDTzFOQlJFbzdPMEZCVFVFc1pVRkJUeXhKUVVGUUxFTkJVRTg3T3p0QlFXaENUU3h0UWtFd1FtcENMSGxDUVVGUk8wRkJRMG9zWVVGQlN5eFJRVUZNTEVOQlFXTXNTMEZCU3l4RlFVRk1MRVZCUVZNc1NVRkJka0lzUlVGRVNUczdRVUZIU2l4aFFVRkxMR05CUVV3c1IwRkJjMElzUzBGQlN5eFRRVUZNTEVkQlFXbENMRk5CUVdwQ0xFTkJTR3hDTzBGQlNVb3NZVUZCU3l4VlFVRk1MRWRCUVd0Q0xFdEJRV3hDTEVOQlNrazdPMEZCVFVvc1dVRkJTU3hMUVVGTExFOUJRVXdzUlVGQll6dEJRVU5rTEdsQ1FVRkxMRTlCUVV3c1EwRkJZU3hKUVVGaUxFVkJSR003VTBGQmJFSTdPMEZCU1VFc1pVRkJUeXhKUVVGUUxFTkJWa2s3T3p0QlFURkNVeXh0UWtGMVEycENMSFZDUVVGUE8wRkJRMGdzWVVGQlN5eFZRVUZNTEVOQlFXZENMRXRCUVVzc1JVRkJUQ3hEUVVGb1FpeERRVVJIT3p0QlFVZElMRmxCUVVrc1MwRkJTeXhOUVVGTUxFVkJRV0U3UVVGRFlpeHBRa0ZCU3l4TlFVRk1MRU5CUVZrc1NVRkJXaXhGUVVSaE8xTkJRV3BDT3p0QlFVbEJMR1ZCUVU4c1NVRkJVQ3hEUVZCSE96czdRVUYyUTFVc2JVSkJhVVJxUWl4MVFrRkJUenRCUVVOSUxHRkJRVXNzVVVGQlRDeERRVUZqTEV0QlFVc3NSVUZCVEN4RlFVRlRMRWxCUVhaQ0xFVkJSRWM3UVVGRlNDeGhRVUZMTEZOQlFVd3NSMEZCYVVJc1UwRkJha0lzUTBGR1J6dEJRVWRJTEdGQlFVc3NZMEZCVEN4SFFVRnpRaXhSUVVGMFFpeERRVWhIT3p0QlFVdElMR1ZCUVU4c1NVRkJVQ3hEUVV4SE96czdRVUZxUkZVc2JVSkJlVVJxUWl3clFrRkJWenRCUVVOUUxHRkJRVXNzU1VGQlRDeEhRVVJQT3p0QlFVZFFMRmxCUVVrc1MwRkJTeXhWUVVGTUxFVkJRV2xDTzBGQlEycENMR2xDUVVGTExGVkJRVXdzUTBGQlowSXNTVUZCYUVJc1JVRkVhVUk3VTBGQmNrSTdPenM3T3pzN096czdPMEZCTlVSaExHMUNRWGRGYWtJc01rSkJRVkVzVDBGQlR6dFpRVU5JTEV0QlFUQkNMRXRCUVRGQ0xFZEJSRWM3TzFsQlEwa3NNRU5CUVcxQ0xHTkJSSFpDT3p0QlFVVllMR1ZCUVU4c1NVRkJTU3hMUVVGTExGZEJRVXdzWTBGQmMwSXNaMEpCUVcxQ0xFMUJRVGRETEVOQlFWQXNRMEZHVnpzN08xZEJlRVZGSWl3aVptbHNaU0k2SWxSaGMyc3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFF2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTHlwY2JpQWdJQ0JDWVhObElGUmhjMnNnWTJ4aGMzTWdabTl5SUdOeVpXRjBhVzVuSUdFZ2RHRnpheUJ2YmlCMGFHVWdiV0ZwYmlCeVpXNWtaWElnYkc5dmNDNWNiaW92WEc1cGJYQnZjblFnS2lCaGN5QnNiMjl3SUdaeWIyMGdKeTR2Ykc5dmNDYzdYRzVjYm1aMWJtTjBhVzl1SUdOc1pXRnVkWEFvS1NCN1hHNGdJQ0FnZEdocGN5NXZia05zWldGdWRYQWdQU0IxYm1SbFptbHVaV1E3WEc0Z0lDQWdiRzl2Y0M1a1pXRmpkR2wyWVhSbEtIUm9hWE11YVdRcE8xeHVmVnh1WEc1bWRXNWpkR2x2YmlCaFkzUnBkbUYwWlNncElIdGNiaUFnSUNCMGFHbHpMbTl1UTJ4bFlXNTFjQ0E5SUdOc1pXRnVkWEE3WEc1OVhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHTnNZWE56SUZSaGMyc2dlMXh1SUNBZ0lHTnZibk4wY25WamRHOXlLSEJ5YjNCektTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdWFXUWdQU0JzYjI5d0xtZGxkRlJoYzJ0SlpDZ3BPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtbHpRV04wYVhabElEMGdabUZzYzJVN1hHNWNiaUFnSUNBZ0lDQWdhV1lnS0hSb2FYTXVaR1ZtWVhWc2RGQnliM0J6S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JtYjNJZ0tHeGxkQ0JyWlhrZ2FXNGdkR2hwY3k1a1pXWmhkV3gwVUhKdmNITXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RHaHBjeTVrWldaaGRXeDBVSEp2Y0hNdWFHRnpUM2R1VUhKdmNHVnlkSGtvYTJWNUtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpXMnRsZVYwZ1BTQjBhR2x6TG1SbFptRjFiSFJRY205d2MxdHJaWGxkTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11YzJWMEtIQnliM0J6S1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J6WlhRb2NISnZjSE1wSUh0Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2EyVjVJR2x1SUhCeWIzQnpLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvY0hKdmNITXVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2EyVjVLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTmJhMlY1WFNBOUlIQnliM0J6VzJ0bGVWMDdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3p0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J6ZEdGeWRDZ3BJSHRjYmlBZ0lDQWdJQ0FnYkc5dmNDNWhZM1JwZG1GMFpTaDBhR2x6TG1sa0xDQjBhR2x6S1R0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG05dVFXTjBhWFpoZEdWTWIyOXdJRDBnZEdocGN5NXZia05zWldGdWRYQWdQU0IxYm1SbFptbHVaV1E3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVhWE5EYjIxd2JHVjBaU0E5SUdaaGJITmxPMXh1WEc0Z0lDQWdJQ0FnSUdsbUlDaDBhR2x6TG05dVUzUmhjblFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWIyNVRkR0Z5ZENoMGFHbHpLVHRjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNBZ0lIMWNibHh1SUNBZ0lITjBiM0FvS1NCN1hHNGdJQ0FnSUNBZ0lHeHZiM0F1WkdWaFkzUnBkbUYwWlNoMGFHbHpMbWxrS1R0Y2JpQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxtOXVVM1J2Y0NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXZibE4wYjNBb2RHaHBjeWs3WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjenRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnZibU5sS0NrZ2UxeHVJQ0FnSUNBZ0lDQnNiMjl3TG1GamRHbDJZWFJsS0hSb2FYTXVhV1FzSUhSb2FYTXBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtOXVRMnhsWVc1MWNDQTlJSFZ1WkdWbWFXNWxaRHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXZia0ZqZEdsMllYUmxURzl2Y0NBOUlHRmpkR2wyWVhSbE8xeHVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQWdJSDFjYmx4dUlDQWdJR052YlhCc1pYUmxLQ2tnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbk4wYjNBb0tUdGNibHh1SUNBZ0lDQWdJQ0JwWmlBb2RHaHBjeTV2YmtOdmJYQnNaWFJsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtOXVRMjl0Y0d4bGRHVW9kR2hwY3lrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNBdktseHVJQ0FnSUNBZ0lDQWpJRVY0ZEdWdVpDQjBhR2x6SUZCeWIyTmxjM01nZDJsMGFDQnVaWGNnY0hKdmNHVnlkR2xsYzF4dUlDQWdJQ0FnSUNBakl5QlNaWFIxY201eklHNWxkeUJwYm5OMFlXNWpaU0J2WmlCMGFHbHpJRkJ5YjJObGMzTW5jeUJnY0hKdmRHOTBlWEJsWUNCM2FYUm9JR1Y0YVhOMGFXNW5JR0Z1WkNCdVpYY2djSEp2Y0dWeWRHbGxjMXh1WEc0Z0lDQWdJQ0FnSUVCd1lYSmhiU0JiYjJKcVpXTjBYU0FvYjNCMGFXOXVZV3dwWEc0Z0lDQWdJQ0FnSUVCeVpYUjFjbTRnVzFCeWIyTmxjM05kWEc0Z0lDQWdLaTljYmlBZ0lDQnBibWhsY21sMEtIQnliM0J6S1NCN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUhzZ2FXUXNJQzR1TG1sdWFHVnlhWFJsWkZCeWIzQnpJSDBnUFNCMGFHbHpPMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdibVYzSUhSb2FYTXVZMjl1YzNSeWRXTjBiM0lvZXlBdUxpNXBibWhsY21sMFpXUlFjbTl3Y3l3Z0xpNHVjSEp2Y0hNZ2ZTazdYRzRnSUNBZ2ZWeHVmU0pkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdGFzay9UYXNrLmpzXG4gKiogbW9kdWxlIGlkID0gOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX1Rhc2syID0gcmVxdWlyZSgnLi4vdGFzay9UYXNrJyk7XG5cbnZhciBfVGFzazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UYXNrMik7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgSW5wdXQgPSBmdW5jdGlvbiAoX1Rhc2spIHtcbiAgICBfaW5oZXJpdHMoSW5wdXQsIF9UYXNrKTtcblxuICAgIGZ1bmN0aW9uIElucHV0KGluaXRpYWxWYWx1ZXMsIHBvbGwpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIElucHV0KTtcblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfVGFzay5jYWxsKHRoaXMpKTtcblxuICAgICAgICBfdGhpcy5zdGF0ZSA9IGluaXRpYWxWYWx1ZXM7XG5cbiAgICAgICAgaWYgKCgwLCBfdXRpbHMuaXNGdW5jKShwb2xsKSkge1xuICAgICAgICAgICAgX3RoaXMub25GcmFtZVN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5sYXRlc3QoX3RoaXMucG9sbCgpKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIE1hbnVhbGx5IGFkZCBsYXRlc3QgdmFsdWVzXG4gICAgICAgICBAcGFyYW0gW29iamVjdF1cbiAgICAqL1xuXG5cbiAgICBJbnB1dC5wcm90b3R5cGUubGF0ZXN0ID0gZnVuY3Rpb24gbGF0ZXN0KHByb3BzKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBfZXh0ZW5kcyh7fSwgdGhpcy5zdGF0ZSwgcHJvcHMpO1xuICAgIH07XG5cbiAgICByZXR1cm4gSW5wdXQ7XG59KF9UYXNrMy5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gSW5wdXQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibkIxZEM5SmJuQjFkQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdRVUZCUVRzN096dEJRVU5CT3pzN096czdPenM3TzBsQlJYRkNPenM3UVVGRGFrSXNZVUZFYVVJc1MwRkRha0lzUTBGQldTeGhRVUZhTEVWQlFUSkNMRWxCUVROQ0xFVkJRV2xET3poQ1FVUm9RaXhQUVVOblFqczdjVVJCUXpkQ0xHdENRVVEyUWpzN1FVRkZOMElzWTBGQlN5eExRVUZNTEVkQlFXRXNZVUZCWWl4RFFVWTJRanM3UVVGSk4wSXNXVUZCU1N4dFFrRkJUeXhKUVVGUUxFTkJRVW9zUlVGQmEwSTdRVUZEWkN4clFrRkJTeXhaUVVGTUxFZEJRVzlDTzNWQ1FVRk5MRTFCUVVzc1RVRkJUQ3hEUVVGWkxFMUJRVXNzU1VGQlRDeEZRVUZhTzJGQlFVNHNRMEZFVGp0VFFVRnNRanR4UWtGS05rSTdTMEZCYWtNN096czdPenM3TzBGQlJHbENMRzlDUVdWcVFpeDVRa0ZCVHl4UFFVRlBPMEZCUTFZc1lVRkJTeXhMUVVGTUxHZENRVUZyUWl4TFFVRkxMRXRCUVV3c1JVRkJaU3hOUVVGcVF5eERRVVJWT3pzN1YwRm1SeUlzSW1acGJHVWlPaUpKYm5CMWRDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdWR0Z6YXlCbWNtOXRJQ2N1TGk5MFlYTnJMMVJoYzJzbk8xeHVhVzF3YjNKMElIc2dhWE5HZFc1aklIMGdabkp2YlNBbkxpNHZhVzVqTDNWMGFXeHpKenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnWTJ4aGMzTWdTVzV3ZFhRZ1pYaDBaVzVrY3lCVVlYTnJJSHRjYmlBZ0lDQmpiMjV6ZEhKMVkzUnZjaWhwYm1sMGFXRnNWbUZzZFdWekxDQndiMnhzS1NCN1hHNGdJQ0FnSUNBZ0lITjFjR1Z5S0NrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YzNSaGRHVWdQU0JwYm1sMGFXRnNWbUZzZFdWek8xeHVYRzRnSUNBZ0lDQWdJR2xtSUNocGMwWjFibU1vY0c5c2JDa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YjI1R2NtRnRaVk4wWVhKMElEMGdLQ2tnUFQ0Z2RHaHBjeTVzWVhSbGMzUW9kR2hwY3k1d2IyeHNLQ2twTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHlwY2JpQWdJQ0FnSUNBZ1RXRnVkV0ZzYkhrZ1lXUmtJR3hoZEdWemRDQjJZV3gxWlhOY2JseHVJQ0FnSUNBZ0lDQkFjR0Z5WVcwZ1cyOWlhbVZqZEYxY2JpQWdJQ0FxTDF4dUlDQWdJR3hoZEdWemRDaHdjbTl3Y3lrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG5OMFlYUmxJRDBnZXlBdUxpNTBhR2x6TG5OMFlYUmxMQ0F1TGk1d2NtOXdjeUI5TzF4dUlDQWdJSDFjYm4xY2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbnB1dC9JbnB1dC5qc1xuICoqIG1vZHVsZSBpZCA9IDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF90aW1lbGluZSA9IHJlcXVpcmUoJy4vdGltZWxpbmUnKTtcblxudmFyIF90aW1lbGluZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90aW1lbGluZSk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBERUZBVUxUX0lOVEVSVkFMID0gMTAwO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAodHdlZW5zLCBwcm9wcykge1xuICAgIHZhciBwcm9wc0lzRHVyYXRpb24gPSAoMCwgX3V0aWxzLmlzTnVtKShwcm9wcyk7XG4gICAgdmFyIGludGVydmFsID0gcHJvcHNJc0R1cmF0aW9uID8gcHJvcHMgOiBwcm9wcyA/IHByb3BzLmludGVydmFsIHx8IERFRkFVTFRfSU5URVJWQUwgOiBERUZBVUxUX0lOVEVSVkFMO1xuICAgIHZhciBhdCA9IDA7XG4gICAgdmFyIHRpbWVsaW5lRGVmaW5pdGlvbiA9IHR3ZWVucy5tYXAoZnVuY3Rpb24gKHR3ZWVuKSB7XG4gICAgICAgIHZhciBkZWYgPSB7IHR3ZWVuOiB0d2VlbiwgYXQ6IGF0IH07XG4gICAgICAgIGF0ICs9IGludGVydmFsO1xuICAgICAgICByZXR1cm4gZGVmO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuICgwLCBfdGltZWxpbmUyLmRlZmF1bHQpKHRpbWVsaW5lRGVmaW5pdGlvbiwgcHJvcHMpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJtTXZjM1JoWjJkbGNpNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3TzBGQlFVRTdPenM3UVVGRFFUczdPenRCUVVWQkxFbEJRVTBzYlVKQlFXMUNMRWRCUVc1Q096dHJRa0ZGVXl4VlFVRkRMRTFCUVVRc1JVRkJVeXhMUVVGVUxFVkJRVzFDTzBGQlF6bENMRkZCUVUwc2EwSkJRV3RDTEd0Q1FVRk5MRXRCUVU0c1EwRkJiRUlzUTBGRWQwSTdRVUZGT1VJc1VVRkJUU3hYUVVGWExHdENRVUZyUWl4TFFVRnNRaXhIUVVFd1FpeFJRVUZSTEUxQlFVMHNVVUZCVGl4SlFVRnJRaXhuUWtGQmJFSXNSMEZCY1VNc1owSkJRVGRETEVOQlJtSTdRVUZIT1VJc1VVRkJTU3hMUVVGTExFTkJRVXdzUTBGSU1FSTdRVUZKT1VJc1VVRkJUU3h4UWtGQmNVSXNUMEZCVHl4SFFVRlFMRU5CUVZjc1ZVRkJReXhMUVVGRUxFVkJRVmM3UVVGRE4wTXNXVUZCVFN4TlFVRk5MRVZCUVVVc1dVRkJSaXhGUVVGVExFMUJRVlFzUlVGQlRpeERRVVIxUXp0QlFVVTNReXhqUVVGTkxGRkJRVTRzUTBGR05rTTdRVUZITjBNc1pVRkJUeXhIUVVGUUxFTkJTRFpETzB0QlFWZ3NRMEZCYUVNc1EwRktkMEk3TzBGQlZUbENMRmRCUVU4c2QwSkJRVk1zYTBKQlFWUXNSVUZCTmtJc1MwRkJOMElzUTBGQlVDeERRVlk0UWp0RFFVRnVRaUlzSW1acGJHVWlPaUp6ZEdGbloyVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwTDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0IwYVcxbGJHbHVaU0JtY205dElDY3VMM1JwYldWc2FXNWxKenRjYm1sdGNHOXlkQ0I3SUdselRuVnRJSDBnWm5KdmJTQW5MaTkxZEdsc2N5YzdYRzVjYm1OdmJuTjBJRVJGUmtGVlRGUmZTVTVVUlZKV1FVd2dQU0F4TURBN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElDaDBkMlZsYm5Nc0lIQnliM0J6S1NBOVBpQjdYRzRnSUNBZ1kyOXVjM1FnY0hKdmNITkpjMFIxY21GMGFXOXVJRDBnYVhOT2RXMG9jSEp2Y0hNcE8xeHVJQ0FnSUdOdmJuTjBJR2x1ZEdWeWRtRnNJRDBnY0hKdmNITkpjMFIxY21GMGFXOXVJRDhnY0hKdmNITWdPaUJ3Y205d2N5QS9JSEJ5YjNCekxtbHVkR1Z5ZG1Gc0lIeDhJRVJGUmtGVlRGUmZTVTVVUlZKV1FVd2dPaUJFUlVaQlZVeFVYMGxPVkVWU1ZrRk1PMXh1SUNBZ0lHeGxkQ0JoZENBOUlEQTdYRzRnSUNBZ1kyOXVjM1FnZEdsdFpXeHBibVZFWldacGJtbDBhVzl1SUQwZ2RIZGxaVzV6TG0xaGNDZ29kSGRsWlc0cElEMCtJSHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdaR1ZtSUQwZ2V5QjBkMlZsYml3Z1lYUWdmVHRjYmlBZ0lDQWdJQ0FnWVhRZ0t6MGdhVzUwWlhKMllXdzdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQmtaV1k3WEc0Z0lDQWdmU2s3WEc1Y2JpQWdJQ0J5WlhSMWNtNGdkR2x0Wld4cGJtVW9kR2x0Wld4cGJtVkVaV1pwYm1sMGFXOXVMQ0J3Y205d2N5azdYRzU5T3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy9zdGFnZ2VyLmpzXG4gKiogbW9kdWxlIGlkID0gMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gdGltZWxpbmU7XG5cbnZhciBfVHdlZW4gPSByZXF1aXJlKCcuLi9hY3Rpb25zL1R3ZWVuJyk7XG5cbnZhciBfVHdlZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVHdlZW4pO1xuXG52YXIgX3ByZXNldEVhc2luZyA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvZWFzaW5nL3ByZXNldC1lYXNpbmcnKTtcblxudmFyIF9wcmVzZXRFYXNpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlc2V0RWFzaW5nKTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi9jYWxjJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qXG4gICAgQHBhcmFtIFthcnJheV1cbiAgICAgICAgU2VxdWVudGlhbCBhcnJheSBvZiB0d2VlbnMsIGVhY2ggaXRlbSBjYW4gYmUgYSB0d2VlbiBvciBkZWZpbml0aW9uIG9iajpcblxuICAgICAgICBbXG4gICAgICAgICAgICBuZXcgVHdlZW4oKSxcbiAgICAgICAgICAgIHN0YWdnZXIoKSxcbiAgICAgICAgICAgIHRpbWVsaW5lKCksXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHdlZW46IG5ldyBUd2VlbigpLFxuICAgICAgICAgICAgICAgIGF0OiAxMDAsXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiBcIis9MTAwXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuKi9cbnZhciBhbmFseXplID0gZnVuY3Rpb24gKGRlZnMpIHtcbiAgICB2YXIgdGltZWxpbmUgPSBbXTtcbiAgICB2YXIgbnVtRGVmcyA9IGRlZnMubGVuZ3RoO1xuICAgIHZhciBjdXJyZW50UGxheWhlYWQgPSAwO1xuXG4gICAgdmFyIF9sb29wID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgdmFyIGRlZiA9IGRlZnNbaV07XG4gICAgICAgIHZhciBkZWZJc09iaiA9IGRlZi50d2VlbiA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgdmFyIHR3ZWVuID0gZGVmSXNPYmogPyBkZWYudHdlZW4gOiBkZWY7XG5cbiAgICAgICAgaWYgKGRlZklzT2JqKSB7XG4gICAgICAgICAgICBpZiAoZGVmLm9mZnNldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFBsYXloZWFkID0gKDAsIF9jYWxjLnJlbGF0aXZlVmFsdWUpKGN1cnJlbnRQbGF5aGVhZCwgZGVmLm9mZnNldCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRlZi5hdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFBsYXloZWFkID0gZGVmLmF0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGR1cmF0aW9uID0gMDtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHR3ZWVuLnZhbHVlcykge1xuICAgICAgICAgICAgaWYgKHR3ZWVuLnZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gdHdlZW4udmFsdWVzW2tleV07XG4gICAgICAgICAgICAgICAgZHVyYXRpb24gPSBNYXRoLm1heChkdXJhdGlvbiwgdmFsdWUuZHVyYXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGltZWxpbmUucHVzaCh7XG4gICAgICAgICAgICBmcm9tOiBjdXJyZW50UGxheWhlYWQsXG4gICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICAgICAgICBmaXJlOiBmdW5jdGlvbiAodGltZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0d2Vlbi5zZWVrVGltZSh0aW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY3VycmVudFBsYXloZWFkICs9IGR1cmF0aW9uO1xuICAgIH07XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bURlZnM7IGkrKykge1xuICAgICAgICBfbG9vcChpKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyB0b3RhbFRpbWU6IGN1cnJlbnRQbGF5aGVhZCwgdGltZWxpbmU6IHRpbWVsaW5lIH07XG59O1xuXG52YXIgc2V0VHdlZW5zID0gZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgdGltZWxpbmUgPSBfcmVmLnRpbWVsaW5lO1xuICAgIHZhciB0aW1lbGluZUxlbmd0aCA9IF9yZWYudGltZWxpbmVMZW5ndGg7XG4gICAgdmFyIHZhbHVlcyA9IF9yZWYudmFsdWVzO1xuICAgIHZhciBkdXJhdGlvbiA9IF9yZWYuZHVyYXRpb247XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRpbWVsaW5lTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIF90d2VlbiA9IHRpbWVsaW5lW2ldO1xuICAgICAgICB2YXIgdHdlZW5UaW1lID0gdmFsdWVzLnAuY3VycmVudCAqIGR1cmF0aW9uIC0gX3R3ZWVuLmZyb207XG5cbiAgICAgICAgaWYgKHR3ZWVuVGltZSA+PSAtNTAgJiYgdHdlZW5UaW1lIDw9IF90d2Vlbi5kdXJhdGlvbiArIDUwKSB7XG4gICAgICAgICAgICBfdHdlZW4uZmlyZSh0d2VlblRpbWUpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZnVuY3Rpb24gdGltZWxpbmUoZGVmKSB7XG4gICAgdmFyIHByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMV07XG5cbiAgICB2YXIgX2FuYWx5emUgPSBhbmFseXplKGRlZik7XG5cbiAgICB2YXIgdG90YWxUaW1lID0gX2FuYWx5emUudG90YWxUaW1lO1xuICAgIHZhciB0aW1lbGluZSA9IF9hbmFseXplLnRpbWVsaW5lO1xuXG5cbiAgICByZXR1cm4gbmV3IF9Ud2VlbjIuZGVmYXVsdChfZXh0ZW5kcyh7XG4gICAgICAgIGVhc2U6IF9wcmVzZXRFYXNpbmcyLmRlZmF1bHQubGluZWFyXG4gICAgfSwgcHJvcHMsIHtcbiAgICAgICAgZHVyYXRpb246IHRvdGFsVGltZSxcbiAgICAgICAgdmFsdWVzOiB7XG4gICAgICAgICAgICBwOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHRpbWVsaW5lOiB0aW1lbGluZSxcbiAgICAgICAgdGltZWxpbmVMZW5ndGg6IHRpbWVsaW5lLmxlbmd0aCxcbiAgICAgICAgb25SZW5kZXI6IHNldFR3ZWVuc1xuICAgIH0pKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJtTXZkR2x0Wld4cGJtVXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN08ydENRVzlGZDBJN08wRkJjRVY0UWpzN096dEJRVU5CT3pzN08wRkJRMEU3T3pzN096czdPenM3T3pzN096czdPenM3UVVGcFFrRXNTVUZCVFN4VlFVRlZMRlZCUVVNc1NVRkJSQ3hGUVVGVk8wRkJRM1JDTEZGQlFVMHNWMEZCVnl4RlFVRllMRU5CUkdkQ08wRkJSWFJDTEZGQlFVMHNWVUZCVlN4TFFVRkxMRTFCUVV3c1EwRkdUVHRCUVVkMFFpeFJRVUZKTEd0Q1FVRnJRaXhEUVVGc1FpeERRVWhyUWpzN01FSkJTMkk3UVVGRFRDeFpRVUZOTEUxQlFVMHNTMEZCU3l4RFFVRk1MRU5CUVU0N1FVRkRUaXhaUVVGTkxGZEJRVmNzU1VGQlNTeExRVUZLTEVkQlFWa3NTVUZCV2l4SFFVRnRRaXhMUVVGdVFqdEJRVU5xUWl4WlFVRk5MRkZCUVZFc1YwRkJZU3hKUVVGSkxFdEJRVW9zUjBGQldTeEhRVUY2UWpzN1FVRkZaQ3haUVVGSkxGRkJRVW9zUlVGQll6dEJRVU5XTEdkQ1FVRkpMRWxCUVVrc1RVRkJTaXhMUVVGbExGTkJRV1lzUlVGQk1FSTdRVUZETVVJc2EwTkJRV3RDTEhsQ1FVRmpMR1ZCUVdRc1JVRkJLMElzU1VGQlNTeE5RVUZLTEVOQlFXcEVMRU5CUkRCQ08yRkJRVGxDTEUxQlJVOHNTVUZCU1N4SlFVRkpMRVZCUVVvc1MwRkJWeXhUUVVGWUxFVkJRWE5DTzBGQlF6ZENMR3REUVVGclFpeEpRVUZKTEVWQlFVb3NRMEZFVnp0aFFVRXhRanRUUVVoWU96dEJRVkZCTEZsQlFVa3NWMEZCVnl4RFFVRllPMEZCUTBvc1lVRkJTeXhKUVVGSkxFZEJRVW9zU1VGQlZ5eE5RVUZOTEUxQlFVNHNSVUZCWXp0QlFVTXhRaXhuUWtGQlNTeE5RVUZOTEUxQlFVNHNRMEZCWVN4alFVRmlMRU5CUVRSQ0xFZEJRVFZDTEVOQlFVb3NSVUZCYzBNN1FVRkRiRU1zYjBKQlFVMHNVVUZCVVN4TlFVRk5MRTFCUVU0c1EwRkJZU3hIUVVGaUxFTkJRVklzUTBGRU5FSTdRVUZGYkVNc01rSkJRVmNzUzBGQlN5eEhRVUZNTEVOQlFWTXNVVUZCVkN4RlFVRnRRaXhOUVVGTkxGRkJRVTRzUTBGQk9VSXNRMEZHYTBNN1lVRkJkRU03VTBGRVNqczdRVUZQUVN4cFFrRkJVeXhKUVVGVUxFTkJRV003UVVGRFZpeHJRa0ZCVFN4bFFVRk9PMEZCUTBFc2MwSkJRVlVzVVVGQlZqdEJRVU5CTEd0Q1FVRk5MRlZCUVVNc1NVRkJSRHQxUWtGQlZTeE5RVUZOTEZGQlFVNHNRMEZCWlN4SlFVRm1PMkZCUVZZN1UwRklWanM3UVVGTlFTd3lRa0ZCYlVJc1VVRkJia0k3VFVGb1EydENPenRCUVV0MFFpeFRRVUZMTEVsQlFVa3NTVUZCU1N4RFFVRktMRVZCUVU4c1NVRkJTU3hQUVVGS0xFVkJRV0VzUjBGQk4wSXNSVUZCYTBNN1kwRkJla0lzUjBGQmVVSTdTMEZCYkVNN08wRkJPRUpCTEZkQlFVOHNSVUZCUlN4WFFVRlhMR1ZCUVZnc1JVRkJORUlzYTBKQlFUbENMRVZCUVZBc1EwRnVRM05DTzBOQlFWWTdPMEZCYzBOb1FpeEpRVUZOTEZsQlFWa3NaMEpCUVc5RU8xRkJRV3BFTEhsQ1FVRnBSRHRSUVVGMlF5eHhRMEZCZFVNN1VVRkJka0lzY1VKQlFYVkNPMUZCUVdZc2VVSkJRV1U3TzBGQlEyeEZMRk5CUVVzc1NVRkJTU3hKUVVGSkxFTkJRVW9zUlVGQlR5eEpRVUZKTEdOQlFVb3NSVUZCYjBJc1IwRkJjRU1zUlVGQmVVTTdRVUZEY2tNc1dVRkJUU3hUUVVGUkxGTkJRVk1zUTBGQlZDeERRVUZTTEVOQlJDdENPMEZCUlhKRExGbEJRVTBzV1VGQldTeE5RVUZETEVOQlFVOHNRMEZCVUN4RFFVRlRMRTlCUVZRc1IwRkJiVUlzVVVGQmJrSXNSMEZCSzBJc1QwRkJUU3hKUVVGT0xFTkJSbUk3TzBGQlNYSkRMRmxCUVVrc1lVRkJZU3hEUVVGRExFVkJRVVFzU1VGQlR5eGhRVUZoTEU5QlFVMHNVVUZCVGl4SFFVRnBRaXhGUVVGcVFpeEZRVUZ4UWp0QlFVTjBSQ3h0UWtGQlRTeEpRVUZPTEVOQlFWY3NVMEZCV0N4RlFVUnpSRHRUUVVFeFJEdExRVXBLTzBOQlJHTTdPMEZCVjBnc1UwRkJVeXhSUVVGVUxFTkJRV3RDTEVkQlFXeENMRVZCUVcxRE8xRkJRVm9zT0VSQlFWRXNhMEpCUVVrN08yMUNRVU5rTEZGQlFWRXNSMEZCVWl4RlFVUmpPenRSUVVOMFF5d3JRa0ZFYzBNN1VVRkRNMElzTmtKQlJESkNPenM3UVVGSE9VTXNWMEZCVHp0QlFVTklMR05CUVUwc2RVSkJRVThzVFVGQlVEdFBRVU5JTzBGQlEwZ3NhMEpCUVZVc1UwRkJWanRCUVVOQkxHZENRVUZSTzBGQlEwb3NaVUZCUnl4RFFVRklPMU5CUkVvN1FVRkhRU3hyUWtGQlZTeFJRVUZXTzBGQlEwRXNkMEpCUVdkQ0xGTkJRVk1zVFVGQlZEdEJRVU5vUWl4clFrRkJWU3hUUVVGV08wMUJWRWNzUTBGQlVDeERRVWc0UXp0RFFVRnVReUlzSW1acGJHVWlPaUowYVcxbGJHbHVaUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnVkhkbFpXNGdabkp2YlNBbkxpNHZZV04wYVc5dWN5OVVkMlZsYmljN1hHNXBiWEJ2Y25RZ1pXRnphVzVuSUdaeWIyMGdKeTR1TDJGamRHbHZibk12WldGemFXNW5MM0J5WlhObGRDMWxZWE5wYm1jbk8xeHVhVzF3YjNKMElIc2djbVZzWVhScGRtVldZV3gxWlNCOUlHWnliMjBnSnk0dlkyRnNZeWM3WEc1Y2JpOHFYRzRnSUNBZ1FIQmhjbUZ0SUZ0aGNuSmhlVjFjYmlBZ0lDQWdJQ0FnVTJWeGRXVnVkR2xoYkNCaGNuSmhlU0J2WmlCMGQyVmxibk1zSUdWaFkyZ2dhWFJsYlNCallXNGdZbVVnWVNCMGQyVmxiaUJ2Y2lCa1pXWnBibWwwYVc5dUlHOWlhanBjYmx4dUlDQWdJQ0FnSUNCYlhHNGdJQ0FnSUNBZ0lDQWdJQ0J1WlhjZ1ZIZGxaVzRvS1N4Y2JpQWdJQ0FnSUNBZ0lDQWdJSE4wWVdkblpYSW9LU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lIUnBiV1ZzYVc1bEtDa3NYRzRnSUNBZ0lDQWdJQ0FnSUNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RIZGxaVzQ2SUc1bGR5QlVkMlZsYmlncExGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHRjBPaUF4TURBc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2IyWm1jMlYwT2lCY0lpczlNVEF3WENKY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnWFZ4dUtpOWNibU52Ym5OMElHRnVZV3g1ZW1VZ1BTQW9aR1ZtY3lrZ1BUNGdlMXh1SUNBZ0lHTnZibk4wSUhScGJXVnNhVzVsSUQwZ1cxMDdYRzRnSUNBZ1kyOXVjM1FnYm5WdFJHVm1jeUE5SUdSbFpuTXViR1Z1WjNSb08xeHVJQ0FnSUd4bGRDQmpkWEp5Wlc1MFVHeGhlV2hsWVdRZ1BTQXdPMXh1WEc0Z0lDQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0J1ZFcxRVpXWnpPeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ1pHVm1JRDBnWkdWbWMxdHBYVHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdaR1ZtU1hOUFltb2dQU0JrWldZdWRIZGxaVzRnUHlCMGNuVmxJRG9nWm1Gc2MyVTdYRzRnSUNBZ0lDQWdJR052Ym5OMElIUjNaV1Z1SUQwZ0tHUmxaa2x6VDJKcUtTQS9JR1JsWmk1MGQyVmxiaUE2SUdSbFpqdGNibHh1SUNBZ0lDQWdJQ0JwWmlBb1pHVm1TWE5QWW1vcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaGtaV1l1YjJabWMyVjBJQ0U5UFNCMWJtUmxabWx1WldRcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpkWEp5Wlc1MFVHeGhlV2hsWVdRZ1BTQnlaV3hoZEdsMlpWWmhiSFZsS0dOMWNuSmxiblJRYkdGNWFHVmhaQ3dnWkdWbUxtOW1abk5sZENrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5SUdWc2MyVWdhV1lnS0dSbFppNWhkQ0FoUFQwZ2RXNWtaV1pwYm1Wa0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZM1Z5Y21WdWRGQnNZWGxvWldGa0lEMGdaR1ZtTG1GME8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdiR1YwSUdSMWNtRjBhVzl1SUQwZ01EdGNiaUFnSUNBZ0lDQWdabTl5SUNoc1pYUWdhMlY1SUdsdUlIUjNaV1Z1TG5aaGJIVmxjeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0hSM1pXVnVMblpoYkhWbGN5NW9ZWE5QZDI1UWNtOXdaWEowZVNoclpYa3BLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdkbUZzZFdVZ1BTQjBkMlZsYmk1MllXeDFaWE5iYTJWNVhUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmtkWEpoZEdsdmJpQTlJRTFoZEdndWJXRjRLR1IxY21GMGFXOXVMQ0IyWVd4MVpTNWtkWEpoZEdsdmJpazdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0IwYVcxbGJHbHVaUzV3ZFhOb0tIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdaeWIyMDZJR04xY25KbGJuUlFiR0Y1YUdWaFpDeGNiaUFnSUNBZ0lDQWdJQ0FnSUdSMWNtRjBhVzl1T2lCa2RYSmhkR2x2Yml4Y2JpQWdJQ0FnSUNBZ0lDQWdJR1pwY21VNklDaDBhVzFsS1NBOVBpQjBkMlZsYmk1elpXVnJWR2x0WlNoMGFXMWxLVnh1SUNBZ0lDQWdJQ0I5S1R0Y2JseHVJQ0FnSUNBZ0lDQmpkWEp5Wlc1MFVHeGhlV2hsWVdRZ0t6MGdaSFZ5WVhScGIyNDdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NtVjBkWEp1SUhzZ2RHOTBZV3hVYVcxbE9pQmpkWEp5Wlc1MFVHeGhlV2hsWVdRc0lIUnBiV1ZzYVc1bElIMDdYRzU5TzF4dVhHNWpiMjV6ZENCelpYUlVkMlZsYm5NZ1BTQW9leUIwYVcxbGJHbHVaU3dnZEdsdFpXeHBibVZNWlc1bmRHZ3NJSFpoYkhWbGN5d2daSFZ5WVhScGIyNGdmU2tnUFQ0Z2UxeHVJQ0FnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z2RHbHRaV3hwYm1WTVpXNW5kR2c3SUdrckt5a2dlMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQjBkMlZsYmlBOUlIUnBiV1ZzYVc1bFcybGRPMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQjBkMlZsYmxScGJXVWdQU0FvZG1Gc2RXVnpMbkF1WTNWeWNtVnVkQ0FxSUdSMWNtRjBhVzl1S1NBdElIUjNaV1Z1TG1aeWIyMDdYRzVjYmlBZ0lDQWdJQ0FnYVdZZ0tIUjNaV1Z1VkdsdFpTQStQU0F0TlRBZ0ppWWdkSGRsWlc1VWFXMWxJRHc5SUhSM1pXVnVMbVIxY21GMGFXOXVJQ3NnTlRBcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSM1pXVnVMbVpwY21Vb2RIZGxaVzVVYVcxbEtUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNibjA3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdaMWJtTjBhVzl1SUhScGJXVnNhVzVsS0dSbFppd2djSEp2Y0hNZ1BTQjdmU2tnZTF4dUlDQWdJR052Ym5OMElIc2dkRzkwWVd4VWFXMWxMQ0IwYVcxbGJHbHVaU0I5SUQwZ1lXNWhiSGw2WlNoa1pXWXBPMXh1WEc0Z0lDQWdjbVYwZFhKdUlHNWxkeUJVZDJWbGJpaDdYRzRnSUNBZ0lDQWdJR1ZoYzJVNklHVmhjMmx1Wnk1c2FXNWxZWElzWEc0Z0lDQWdJQ0FnSUM0dUxuQnliM0J6TEZ4dUlDQWdJQ0FnSUNCa2RYSmhkR2x2YmpvZ2RHOTBZV3hVYVcxbExGeHVJQ0FnSUNBZ0lDQjJZV3gxWlhNNklIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhBNklERmNiaUFnSUNBZ0lDQWdmU3hjYmlBZ0lDQWdJQ0FnZEdsdFpXeHBibVU2SUhScGJXVnNhVzVsTEZ4dUlDQWdJQ0FnSUNCMGFXMWxiR2x1WlV4bGJtZDBhRG9nZEdsdFpXeHBibVV1YkdWdVozUm9MRnh1SUNBZ0lDQWdJQ0J2YmxKbGJtUmxjam9nYzJWMFZIZGxaVzV6WEc0Z0lDQWdmU2s3WEc1OUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy90aW1lbGluZS5qc1xuICoqIG1vZHVsZSBpZCA9IDExXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8qXG4gICAgT3ZlcnJpZGUgYGdldHRlcmAgYW5kIGBzZXR0ZXJgIHRvIHJlaW1wbGVtZW50IHRoZSBpbnRlcmZhY2UgZm9yIG5ldyBlbGVtZW50IHR5cGVzLlxuXG4gICAgU2V0IGAuc3RhdGVNYXBgIGFzIGFuIG9iamVjdCBrZXkvdmFsdWUgbWFwIHRvIHRyYW5zbGF0ZSBpbmNvbWluZyBrZXlzIHRvXG4gICAgQVBJLXNwZWNpZmljIGtleXMuIEZvciBpbnN0YW5jZSwgeyB4OiAndHJhbnNsYXRlWCcgfS4gXG5cbiAgICBTZXQgYC52YWx1ZVR5cGVNYXBgIGFzIGFuIG9iamVjdCBrZXkvdmFsdWUgbWFwIHRvIHJldHVybiBhIHZhbHVlIHR5cGUgd2l0aFxuICAgIGBnZXRWYWx1ZVR5cGUoa2V5KWAgKGtleSB3aWxsIGJlIG1hcHBlZCBhY2NvcmRpbmcgdG8gYHN0YXRlTWFwYClcbiovXG5cbnZhciBtYXBLZXkgPSBmdW5jdGlvbiAoa2V5LCBtYXApIHtcbiAgICByZXR1cm4gbWFwID8gbWFwW2tleV0gfHwga2V5IDoga2V5O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAvKlxuICAgICAgICBBZGFwdGVyIGlzIHNldHRlciBmdW5jdGlvblxuICAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBPYmplY3QgdG8gc2V0IHByb3BlcnRpZXMgb25cbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBLZXkvdmFsdWUgcHJvcGVydGllcyB0byBzZXRcbiAgICAqL1xuICAgIHZhciBhZGFwdGVyID0gZnVuY3Rpb24gKGVsZW1lbnQsIHByb3BzLCBkYXRhKSB7XG4gICAgICAgIGlmIChvcHRpb25zLnN0YXRlTWFwKSB7XG4gICAgICAgICAgICAvLyBUcmFuc2xhdGUgcHJvcHNcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wcykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXBwZWRLZXkgPSBtYXBLZXkoa2V5LCBvcHRpb25zLnN0YXRlTWFwKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAobWFwcGVkS2V5ICE9PSBrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzW21hcHBlZEtleV0gPSBwcm9wc1trZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHByb3BzW2tleV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb3B0aW9ucy5zZXR0ZXIoZWxlbWVudCwgcHJvcHMsIGRhdGEpO1xuICAgIH07XG5cbiAgICBhZGFwdGVyLmdldCA9IGZ1bmN0aW9uIChlbGVtZW50LCBrZXkpIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnMuZ2V0dGVyKGVsZW1lbnQsIG1hcEtleShrZXksIG9wdGlvbnMuc3RhdGVNYXApKTtcbiAgICB9O1xuICAgIGFkYXB0ZXIuY2hlY2tWYWx1ZVR5cGUgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiBvcHRpb25zLnZhbHVlVHlwZU1hcCA/IG9wdGlvbnMudmFsdWVUeXBlTWFwW21hcEtleShrZXksIG9wdGlvbnMuc3RhdGVNYXApXSA6IGZhbHNlO1xuICAgIH07XG4gICAgYWRhcHRlci5nZXRFbGVtZW50RGF0YSA9IG9wdGlvbnMuZ2V0RWxlbWVudERhdGE7XG5cbiAgICByZXR1cm4gYWRhcHRlcjtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwyRmtZWEIwWlhJdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096czdPenRCUVZWQkxFbEJRVTBzVTBGQlV5eFZRVUZETEVkQlFVUXNSVUZCVFN4SFFVRk9PMWRCUVdNc1RVRkJUU3hKUVVGSkxFZEJRVW9zUzBGQldTeEhRVUZhTEVkQlFXdENMRWRCUVhoQ08wTkJRV1E3TzJ0Q1FVVkJMRlZCUVVNc1QwRkJSQ3hGUVVGaE96czdPenM3UVVGUGVFSXNVVUZCVFN4VlFVRlZMRlZCUVVNc1QwRkJSQ3hGUVVGVkxFdEJRVllzUlVGQmFVSXNTVUZCYWtJc1JVRkJNRUk3UVVGRGRFTXNXVUZCU1N4UlFVRlJMRkZCUVZJc1JVRkJhMEk3TzBGQlJXeENMR2xDUVVGTExFbEJRVWtzUjBGQlNpeEpRVUZYTEV0QlFXaENMRVZCUVhWQ08wRkJRMjVDTEc5Q1FVRkpMRTFCUVUwc1kwRkJUaXhEUVVGeFFpeEhRVUZ5UWl4RFFVRktMRVZCUVN0Q08wRkJRek5DTEhkQ1FVRk5MRmxCUVZrc1QwRkJUeXhIUVVGUUxFVkJRVmtzVVVGQlVTeFJRVUZTTEVOQlFYaENMRU5CUkhGQ096dEJRVWN6UWl4M1FrRkJTU3hqUVVGakxFZEJRV1FzUlVGQmJVSTdRVUZEYmtJc09FSkJRVTBzVTBGQlRpeEpRVUZ0UWl4TlFVRk5MRWRCUVU0c1EwRkJia0lzUTBGRWJVSTdRVUZGYmtJc0swSkJRVThzVFVGQlRTeEhRVUZPTEVOQlFWQXNRMEZHYlVJN2NVSkJRWFpDTzJsQ1FVaEtPMkZCUkVvN1UwRkdTanM3UVVGalFTeGxRVUZQTEZGQlFWRXNUVUZCVWl4RFFVRmxMRTlCUVdZc1JVRkJkMElzUzBGQmVFSXNSVUZCSzBJc1NVRkJMMElzUTBGQlVDeERRV1p6UXp0TFFVRXhRaXhEUVZCUk96dEJRWGxDZUVJc1dVRkJVU3hIUVVGU0xFZEJRV01zVlVGQlF5eFBRVUZFTEVWQlFWVXNSMEZCVmp0bFFVRnJRaXhSUVVGUkxFMUJRVklzUTBGQlpTeFBRVUZtTEVWQlFYZENMRTlCUVU4c1IwRkJVQ3hGUVVGWkxGRkJRVkVzVVVGQlVpeERRVUZ3UXp0TFFVRnNRaXhEUVhwQ1ZUdEJRVEJDZUVJc1dVRkJVU3hqUVVGU0xFZEJRWGxDTEZWQlFVTXNSMEZCUkR0bFFVRlRMRkZCUVZFc1dVRkJVaXhIUVVGMVFpeFJRVUZSTEZsQlFWSXNRMEZCY1VJc1QwRkJUeXhIUVVGUUxFVkJRVmtzVVVGQlVTeFJRVUZTTEVOQlFXcERMRU5CUVhaQ0xFZEJRVFpGTEV0QlFUZEZPMHRCUVZRc1EwRXhRa1E3UVVFeVFuaENMRmxCUVZFc1kwRkJVaXhIUVVGNVFpeFJRVUZSTEdOQlFWSXNRMEV6UWtRN08wRkJOa0o0UWl4WFFVRlBMRTlCUVZBc1EwRTNRbmRDTzBOQlFXSWlMQ0ptYVd4bElqb2lZV1JoY0hSbGNpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUl2S2x4dUlDQWdJRTkyWlhKeWFXUmxJR0JuWlhSMFpYSmdJR0Z1WkNCZ2MyVjBkR1Z5WUNCMGJ5QnlaV2x0Y0d4bGJXVnVkQ0IwYUdVZ2FXNTBaWEptWVdObElHWnZjaUJ1WlhjZ1pXeGxiV1Z1ZENCMGVYQmxjeTVjYmx4dUlDQWdJRk5sZENCZ0xuTjBZWFJsVFdGd1lDQmhjeUJoYmlCdlltcGxZM1FnYTJWNUwzWmhiSFZsSUcxaGNDQjBieUIwY21GdWMyeGhkR1VnYVc1amIyMXBibWNnYTJWNWN5QjBiMXh1SUNBZ0lFRlFTUzF6Y0dWamFXWnBZeUJyWlhsekxpQkdiM0lnYVc1emRHRnVZMlVzSUhzZ2VEb2dKM1J5WVc1emJHRjBaVmduSUgwdUlGeHVYRzRnSUNBZ1UyVjBJR0F1ZG1Gc2RXVlVlWEJsVFdGd1lDQmhjeUJoYmlCdlltcGxZM1FnYTJWNUwzWmhiSFZsSUcxaGNDQjBieUJ5WlhSMWNtNGdZU0IyWVd4MVpTQjBlWEJsSUhkcGRHaGNiaUFnSUNCZ1oyVjBWbUZzZFdWVWVYQmxLR3RsZVNsZ0lDaHJaWGtnZDJsc2JDQmlaU0J0WVhCd1pXUWdZV05qYjNKa2FXNW5JSFJ2SUdCemRHRjBaVTFoY0dBcFhHNHFMMXh1WEc1amIyNXpkQ0J0WVhCTFpYa2dQU0FvYTJWNUxDQnRZWEFwSUQwK0lHMWhjQ0EvSUcxaGNGdHJaWGxkSUh4OElHdGxlU0E2SUd0bGVUdGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdLRzl3ZEdsdmJuTXBJRDArSUh0Y2JpQWdJQ0F2S2x4dUlDQWdJQ0FnSUNCQlpHRndkR1Z5SUdseklITmxkSFJsY2lCbWRXNWpkR2x2Ymx4dVhHNGdJQ0FnSUNBZ0lFQndZWEpoYlNCYmIySnFaV04wWFRvZ1QySnFaV04wSUhSdklITmxkQ0J3Y205d1pYSjBhV1Z6SUc5dVhHNGdJQ0FnSUNBZ0lFQndZWEpoYlNCYmIySnFaV04wWFRvZ1MyVjVMM1poYkhWbElIQnliM0JsY25ScFpYTWdkRzhnYzJWMFhHNGdJQ0FnS2k5Y2JpQWdJQ0JqYjI1emRDQmhaR0Z3ZEdWeUlEMGdLR1ZzWlcxbGJuUXNJSEJ5YjNCekxDQmtZWFJoS1NBOVBpQjdYRzRnSUNBZ0lDQWdJR2xtSUNodmNIUnBiMjV6TG5OMFlYUmxUV0Z3S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCVWNtRnVjMnhoZEdVZ2NISnZjSE5jYmlBZ0lDQWdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHdGxlU0JwYmlCd2NtOXdjeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDaHdjbTl3Y3k1b1lYTlBkMjVRY205d1pYSjBlU2hyWlhrcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJRzFoY0hCbFpFdGxlU0E5SUcxaGNFdGxlU2hyWlhrc0lHOXdkR2x2Ym5NdWMzUmhkR1ZOWVhBcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLRzFoY0hCbFpFdGxlU0FoUFQwZ2EyVjVLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J3Y205d2MxdHRZWEJ3WldSTFpYbGRJRDBnY0hKdmNITmJhMlY1WFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdSbGJHVjBaU0J3Y205d2MxdHJaWGxkTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJRzl3ZEdsdmJuTXVjMlYwZEdWeUtHVnNaVzFsYm5Rc0lIQnliM0J6TENCa1lYUmhLVHRjYmlBZ0lDQjlPMXh1WEc0Z0lDQWdZV1JoY0hSbGNpNW5aWFFnUFNBb1pXeGxiV1Z1ZEN3Z2EyVjVLU0E5UGlCdmNIUnBiMjV6TG1kbGRIUmxjaWhsYkdWdFpXNTBMQ0J0WVhCTFpYa29hMlY1TENCdmNIUnBiMjV6TG5OMFlYUmxUV0Z3S1NrN1hHNGdJQ0FnWVdSaGNIUmxjaTVqYUdWamExWmhiSFZsVkhsd1pTQTlJQ2hyWlhrcElEMCtJRzl3ZEdsdmJuTXVkbUZzZFdWVWVYQmxUV0Z3SUQ4Z2IzQjBhVzl1Y3k1MllXeDFaVlI1Y0dWTllYQmJiV0Z3UzJWNUtHdGxlU3dnYjNCMGFXOXVjeTV6ZEdGMFpVMWhjQ2xkSURvZ1ptRnNjMlU3WEc0Z0lDQWdZV1JoY0hSbGNpNW5aWFJGYkdWdFpXNTBSR0YwWVNBOUlHOXdkR2x2Ym5NdVoyVjBSV3hsYldWdWRFUmhkR0U3WEc1Y2JpQWdJQ0J5WlhSMWNtNGdZV1JoY0hSbGNqdGNibjA3SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9hZGFwdGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuc2V0dGVyID0gZXhwb3J0cy5nZXR0ZXIgPSB1bmRlZmluZWQ7XG5cbnZhciBfYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcicpO1xuXG52YXIgX2FkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWRhcHRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBnZXR0ZXIgPSBleHBvcnRzLmdldHRlciA9IGZ1bmN0aW9uIChlbGVtZW50LCBrZXkpIHtcbiAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoa2V5KTtcbn07XG52YXIgc2V0dGVyID0gZXhwb3J0cy5zZXR0ZXIgPSBmdW5jdGlvbiAoZWxlbWVudCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgcHJvcHNba2V5XSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSAoMCwgX2FkYXB0ZXIyLmRlZmF1bHQpKHsgZ2V0dGVyOiBnZXR0ZXIsIHNldHRlcjogc2V0dGVyIH0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMMkYwZEhJdFlXUmhjSFJsY2k1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenRCUVVGQk96czdPenM3UVVGRlR5eEpRVUZOTERCQ1FVRlRMRlZCUVVNc1QwRkJSQ3hGUVVGVkxFZEJRVlk3VjBGQmEwSXNVVUZCVVN4WlFVRlNMRU5CUVhGQ0xFZEJRWEpDTzBOQlFXeENPMEZCUTJZc1NVRkJUU3d3UWtGQlV5eFZRVUZETEU5QlFVUXNSVUZCVlN4TFFVRldMRVZCUVc5Q08wRkJRM1JETEZOQlFVc3NTVUZCU1N4SFFVRktMRWxCUVZjc1MwRkJhRUlzUlVGQmRVSTdRVUZEYmtJc1dVRkJTU3hOUVVGTkxHTkJRVTRzUTBGQmNVSXNSMEZCY2tJc1EwRkJTaXhGUVVFclFqdEJRVU16UWl4dlFrRkJVU3haUVVGU0xFTkJRWEZDTEVkQlFYSkNMRVZCUVRCQ0xFMUJRVTBzUjBGQlRpeERRVUV4UWl4RlFVUXlRanRUUVVFdlFqdExRVVJLTzBOQlJHdENPenRyUWtGUlVDeDFRa0ZCWXl4RlFVRkZMR05CUVVZc1JVRkJWU3hqUVVGV0xFVkJRV1FpTENKbWFXeGxJam9pWVhSMGNpMWhaR0Z3ZEdWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQmpjbVZoZEdWQlpHRndkR1Z5SUdaeWIyMGdKeTR2WVdSaGNIUmxjaWM3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JuWlhSMFpYSWdQU0FvWld4bGJXVnVkQ3dnYTJWNUtTQTlQaUJsYkdWdFpXNTBMbWRsZEVGMGRISnBZblYwWlNoclpYa3BPMXh1Wlhod2IzSjBJR052Ym5OMElITmxkSFJsY2lBOUlDaGxiR1Z0Wlc1MExDQndjbTl3Y3lrZ1BUNGdlMXh1SUNBZ0lHWnZjaUFvYkdWMElHdGxlU0JwYmlCd2NtOXdjeWtnZTF4dUlDQWdJQ0FnSUNCcFppQW9jSEp2Y0hNdWFHRnpUM2R1VUhKdmNHVnlkSGtvYTJWNUtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1pXeGxiV1Z1ZEM1elpYUkJkSFJ5YVdKMWRHVW9hMlY1TENCd2NtOXdjMXRyWlhsZEtUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNibjA3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdOeVpXRjBaVUZrWVhCMFpYSW9leUJuWlhSMFpYSXNJSE5sZEhSbGNpQjlLVHNpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9hdHRyLWFkYXB0ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3N0YXRlTWFwID0gcmVxdWlyZSgnLi9jc3Mvc3RhdGUtbWFwJyk7XG5cbnZhciBfc3RhdGVNYXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RhdGVNYXApO1xuXG52YXIgX3ZhbHVlVHlwZU1hcCA9IHJlcXVpcmUoJy4vY3NzL3ZhbHVlLXR5cGUtbWFwJyk7XG5cbnZhciBfdmFsdWVUeXBlTWFwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ZhbHVlVHlwZU1hcCk7XG5cbnZhciBfYnVpbGQgPSByZXF1aXJlKCcuL2Nzcy9idWlsZCcpO1xuXG52YXIgX2J1aWxkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2J1aWxkKTtcblxudmFyIF9wcmVmaXhlciA9IHJlcXVpcmUoJy4vY3NzL3ByZWZpeGVyJyk7XG5cbnZhciBfcHJlZml4ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlZml4ZXIpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzID0gcmVxdWlyZSgnLi9jc3MvdHJhbnNmb3JtLXByb3BzJyk7XG5cbnZhciBfdHJhbnNmb3JtUHJvcHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNmb3JtUHJvcHMpO1xuXG52YXIgX2FkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXInKTtcblxudmFyIF9hZGFwdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FkYXB0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSAoMCwgX2FkYXB0ZXIyLmRlZmF1bHQpKHtcbiAgICBnZXR0ZXI6IGZ1bmN0aW9uIChlbGVtZW50LCBrZXkpIHtcbiAgICAgICAgcmV0dXJuICFfdHJhbnNmb3JtUHJvcHMyLmRlZmF1bHRba2V5XSA/IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsIG51bGwpWygwLCBfcHJlZml4ZXIyLmRlZmF1bHQpKGtleSldIDogX3ZhbHVlVHlwZU1hcDIuZGVmYXVsdFtrZXldLmRlZmF1bHRQcm9wcy5jdXJyZW50IHx8IDA7XG4gICAgfSxcbiAgICBzZXR0ZXI6IGZ1bmN0aW9uIChlbGVtZW50LCBwcm9wcykge1xuICAgICAgICByZXR1cm4gZWxlbWVudC5zdHlsZS5jc3NUZXh0ICs9ICgwLCBfYnVpbGQyLmRlZmF1bHQpKHByb3BzKTtcbiAgICB9LFxuICAgIHZhbHVlVHlwZU1hcDogX3ZhbHVlVHlwZU1hcDIuZGVmYXVsdCxcbiAgICBzdGF0ZU1hcDogX3N0YXRlTWFwMi5kZWZhdWx0XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFpHRndkR1Z5TDJOemN5MWhaR0Z3ZEdWeUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3UVVGQlFUczdPenRCUVVOQk96czdPMEZCUTBFN096czdRVUZEUVRzN096dEJRVU5CT3pzN08wRkJRMEU3T3pzN096dHJRa0ZGWlN4MVFrRkJZenRCUVVONlFpeFpRVUZSTEZWQlFVTXNUMEZCUkN4RlFVRlZMRWRCUVZZc1JVRkJhMEk3UVVGRGRFSXNaVUZCVHl4RFFVRkZMSGxDUVVGbExFZEJRV1lzUTBGQlJDeEhRVU5LTEU5QlFVOHNaMEpCUVZBc1EwRkJkMElzVDBGQmVFSXNSVUZCYVVNc1NVRkJha01zUlVGQmRVTXNkMEpCUVZNc1IwRkJWQ3hEUVVGMlF5eERRVVJITEVkQlJVZ3NkVUpCUVdFc1IwRkJZaXhGUVVGclFpeFpRVUZzUWl4RFFVRXJRaXhQUVVFdlFpeEpRVUV3UXl4RFFVRXhReXhEUVVoclFqdExRVUZzUWp0QlFVdFNMRmxCUVZFc1ZVRkJReXhQUVVGRUxFVkJRVlVzUzBGQlZqdGxRVUZ2UWl4UlFVRlJMRXRCUVZJc1EwRkJZeXhQUVVGa0xFbEJRWGxDTEhGQ1FVRnZRaXhMUVVGd1FpeERRVUY2UWp0TFFVRndRanRCUVVOU0xIZERRVkI1UWp0QlFWRjZRaXhuUTBGU2VVSTdRMEZCWkNJc0ltWnBiR1VpT2lKamMzTXRZV1JoY0hSbGNpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdjM1JoZEdWTllYQWdabkp2YlNBbkxpOWpjM012YzNSaGRHVXRiV0Z3Snp0Y2JtbHRjRzl5ZENCMllXeDFaVlI1Y0dWTllYQWdabkp2YlNBbkxpOWpjM012ZG1Gc2RXVXRkSGx3WlMxdFlYQW5PMXh1YVcxd2IzSjBJR0oxYVd4a1VISnZjR1Z5ZEhsVGRISnBibWNnWm5KdmJTQW5MaTlqYzNNdlluVnBiR1FuTzF4dWFXMXdiM0owSUhCeVpXWnBlR1Z5SUdaeWIyMGdKeTR2WTNOekwzQnlaV1pwZUdWeUp6dGNibWx0Y0c5eWRDQjBjbUZ1YzJadmNtMVFjbTl3Y3lCbWNtOXRJQ2N1TDJOemN5OTBjbUZ1YzJadmNtMHRjSEp2Y0hNbk8xeHVhVzF3YjNKMElHTnlaV0YwWlVGa1lYQjBaWElnWm5KdmJTQW5MaTloWkdGd2RHVnlKenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnWTNKbFlYUmxRV1JoY0hSbGNpaDdYRzRnSUNBZ1oyVjBkR1Z5T2lBb1pXeGxiV1Z1ZEN3Z2EyVjVLU0E5UGlCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlBb0lYUnlZVzV6Wm05eWJWQnliM0J6VzJ0bGVWMHBJRDljYmlBZ0lDQWdJQ0FnSUNBZ0lIZHBibVJ2ZHk1blpYUkRiMjF3ZFhSbFpGTjBlV3hsS0dWc1pXMWxiblFzSUc1MWJHd3BXM0J5WldacGVHVnlLR3RsZVNsZElEcGNiaUFnSUNBZ0lDQWdJQ0FnSUhaaGJIVmxWSGx3WlUxaGNGdHJaWGxkTG1SbFptRjFiSFJRY205d2N5NWpkWEp5Wlc1MElIeDhJREE3WEc0Z0lDQWdmU3hjYmlBZ0lDQnpaWFIwWlhJNklDaGxiR1Z0Wlc1MExDQndjbTl3Y3lrZ1BUNGdaV3hsYldWdWRDNXpkSGxzWlM1amMzTlVaWGgwSUNzOUlHSjFhV3hrVUhKdmNHVnlkSGxUZEhKcGJtY29jSEp2Y0hNcExGeHVJQ0FnSUhaaGJIVmxWSGx3WlUxaGNDeGNiaUFnSUNCemRHRjBaVTFoY0Z4dWZTazdYRzVjYmlKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FkYXB0ZXIvY3NzLWFkYXB0ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2FkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXInKTtcblxudmFyIF9hZGFwdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FkYXB0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSAoMCwgX2FkYXB0ZXIyLmRlZmF1bHQpKHtcbiAgICBnZXR0ZXI6IGZ1bmN0aW9uIChvYmplY3QsIGtleSkge1xuICAgICAgICByZXR1cm4gb2JqZWN0W2tleV07XG4gICAgfSxcbiAgICBzZXR0ZXI6IGZ1bmN0aW9uIChvYmplY3QsIHByb3BzKSB7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wcykge1xuICAgICAgICAgICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBvYmplY3Rba2V5XSA9IHByb3BzW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFpHRndkR1Z5TDI5aWFtVmpkQzFoWkdGd2RHVnlMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN1FVRkJRVHM3T3pzN08ydENRVVZsTEhWQ1FVRmpPMEZCUTNwQ0xGbEJRVkVzVlVGQlF5eE5RVUZFTEVWQlFWTXNSMEZCVkR0bFFVRnBRaXhQUVVGUExFZEJRVkE3UzBGQmFrSTdRVUZEVWl4WlFVRlJMRlZCUVVNc1RVRkJSQ3hGUVVGVExFdEJRVlFzUlVGQmJVSTdRVUZEZGtJc1lVRkJTeXhKUVVGSkxFZEJRVW9zU1VGQlZ5eExRVUZvUWl4RlFVRjFRanRCUVVOdVFpeG5Ra0ZCU1N4TlFVRk5MR05CUVU0c1EwRkJjVUlzUjBGQmNrSXNRMEZCU2l4RlFVRXJRanRCUVVNelFpeDFRa0ZCVHl4SFFVRlFMRWxCUVdNc1RVRkJUU3hIUVVGT0xFTkJRV1FzUTBGRU1rSTdZVUZCTDBJN1UwRkVTanRMUVVSSk8wTkJSa2NpTENKbWFXeGxJam9pYjJKcVpXTjBMV0ZrWVhCMFpYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFF2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJR055WldGMFpVRmtZWEIwWlhJZ1puSnZiU0FuTGk5aFpHRndkR1Z5Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1kzSmxZWFJsUVdSaGNIUmxjaWg3WEc0Z0lDQWdaMlYwZEdWeU9pQW9iMkpxWldOMExDQnJaWGtwSUQwK0lHOWlhbVZqZEZ0clpYbGRMRnh1SUNBZ0lITmxkSFJsY2pvZ0tHOWlhbVZqZEN3Z2NISnZjSE1wSUQwK0lIdGNiaUFnSUNBZ0lDQWdabTl5SUNoc1pYUWdhMlY1SUdsdUlIQnliM0J6S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2NISnZjSE11YUdGelQzZHVVSEp2Y0dWeWRIa29hMlY1S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHOWlhbVZqZEZ0clpYbGRJRDBnY0hKdmNITmJhMlY1WFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYm4wcE95SmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hZGFwdGVyL29iamVjdC1hZGFwdGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZ2V0RWxlbWVudERhdGEgPSBleHBvcnRzLnNldHRlciA9IGV4cG9ydHMuZ2V0dGVyID0gdW5kZWZpbmVkO1xuXG52YXIgX3N0YXRlTWFwID0gcmVxdWlyZSgnLi9jc3Mvc3RhdGUtbWFwJyk7XG5cbnZhciBfc3RhdGVNYXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RhdGVNYXApO1xuXG52YXIgX3ZhbHVlVHlwZU1hcCA9IHJlcXVpcmUoJy4vc3ZnL3ZhbHVlLXR5cGUtbWFwJyk7XG5cbnZhciBfdmFsdWVUeXBlTWFwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ZhbHVlVHlwZU1hcCk7XG5cbnZhciBfdHJhbnNmb3JtUHJvcHMgPSByZXF1aXJlKCcuL2Nzcy90cmFuc2Zvcm0tcHJvcHMnKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2Zvcm1Qcm9wcyk7XG5cbnZhciBfYnVpbGQgPSByZXF1aXJlKCcuL3N2Zy9idWlsZCcpO1xuXG52YXIgX2J1aWxkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2J1aWxkKTtcblxudmFyIF9hdHRyQWRhcHRlciA9IHJlcXVpcmUoJy4vYXR0ci1hZGFwdGVyJyk7XG5cbnZhciBfYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcicpO1xuXG52YXIgX2FkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWRhcHRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBnZXR0ZXIgPSBleHBvcnRzLmdldHRlciA9IGZ1bmN0aW9uIChlbGVtZW50LCBrZXkpIHtcbiAgICByZXR1cm4gIV90cmFuc2Zvcm1Qcm9wczIuZGVmYXVsdFtrZXldID8gKDAsIF9hdHRyQWRhcHRlci5nZXR0ZXIpKGVsZW1lbnQsIGtleSkgOiBfdmFsdWVUeXBlTWFwMi5kZWZhdWx0W2tleV0gJiYgX3ZhbHVlVHlwZU1hcDIuZGVmYXVsdFtrZXldLmRlZmF1bHRQcm9wcyA/IF92YWx1ZVR5cGVNYXAyLmRlZmF1bHRba2V5XS5kZWZhdWx0UHJvcHMuY3VycmVudCA6IDA7XG59O1xudmFyIHNldHRlciA9IGV4cG9ydHMuc2V0dGVyID0gZnVuY3Rpb24gKGVsZW1lbnQsIHByb3BzLCBkYXRhKSB7XG4gICAgcmV0dXJuICgwLCBfYXR0ckFkYXB0ZXIuc2V0dGVyKShlbGVtZW50LCAoMCwgX2J1aWxkMi5kZWZhdWx0KShwcm9wcywgZGF0YSkpO1xufTtcbnZhciBnZXRFbGVtZW50RGF0YSA9IGV4cG9ydHMuZ2V0RWxlbWVudERhdGEgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIHZhciBiQm94ID0gZWxlbWVudC5nZXRCQm94KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogYkJveC54LFxuICAgICAgICB5OiBiQm94LnksXG4gICAgICAgIHdpZHRoOiBiQm94LndpZHRoLFxuICAgICAgICBoZWlnaHQ6IGJCb3guaGVpZ2h0XG4gICAgfTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9ICgwLCBfYWRhcHRlcjIuZGVmYXVsdCkoeyBnZXR0ZXI6IGdldHRlciwgc2V0dGVyOiBzZXR0ZXIsIHN0YXRlTWFwOiBfc3RhdGVNYXAyLmRlZmF1bHQsIHZhbHVlVHlwZU1hcDogX3ZhbHVlVHlwZU1hcDIuZGVmYXVsdCwgZ2V0RWxlbWVudERhdGE6IGdldEVsZW1lbnREYXRhIH0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMM04yWnkxaFpHRndkR1Z5TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPMEZCUVVFN096czdRVUZEUVRzN096dEJRVU5CT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3UVVGRFFUczdPenM3TzBGQlJVOHNTVUZCVFN3d1FrRkJVeXhWUVVGRExFOUJRVVFzUlVGQlZTeEhRVUZXTzFkQlFXdENMRU5CUVVVc2VVSkJRV1VzUjBGQlppeERRVUZFTEVkQlFYZENMSGxDUVVGWExFOUJRVmdzUlVGQmIwSXNSMEZCY0VJc1EwRkJla0lzUjBGQmIwUXNjMEpCUVVNc1EwRkJZU3hIUVVGaUxFdEJRWEZDTEhWQ1FVRmhMRWRCUVdJc1JVRkJhMElzV1VGQmJFSXNSMEZCYTBNc2RVSkJRV0VzUjBGQllpeEZRVUZyUWl4WlFVRnNRaXhEUVVFclFpeFBRVUV2UWl4SFFVRjVReXhEUVVGcVJ6dERRVUYwUlR0QlFVTm1MRWxCUVUwc01FSkJRVk1zVlVGQlF5eFBRVUZFTEVWQlFWVXNTMEZCVml4RlFVRnBRaXhKUVVGcVFqdFhRVUV3UWl4NVFrRkJWeXhQUVVGWUxFVkJRVzlDTEhGQ1FVRk5MRXRCUVU0c1JVRkJZU3hKUVVGaUxFTkJRWEJDTzBOQlFURkNPMEZCUTJZc1NVRkJUU3d3UTBGQmFVSXNWVUZCUXl4UFFVRkVMRVZCUVdFN1FVRkRka01zVVVGQlRTeFBRVUZQTEZGQlFWRXNUMEZCVWl4RlFVRlFMRU5CUkdsRE8wRkJSWFpETEZkQlFVODdRVUZEU0N4WFFVRkhMRXRCUVVzc1EwRkJURHRCUVVOSUxGZEJRVWNzUzBGQlN5eERRVUZNTzBGQlEwZ3NaVUZCVHl4TFFVRkxMRXRCUVV3N1FVRkRVQ3huUWtGQlVTeExRVUZMTEUxQlFVdzdTMEZLV2l4RFFVWjFRenREUVVGaU96dHJRa0ZWWml4MVFrRkJZeXhGUVVGRkxHTkJRVVlzUlVGQlZTeGpRVUZXTEVWQlFXdENMRFJDUVVGc1FpeEZRVUUwUWl4dlEwRkJOVUlzUlVGQk1FTXNPRUpCUVRGRExFVkJRV1FpTENKbWFXeGxJam9pYzNabkxXRmtZWEIwWlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUXZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElITjBZWFJsVFdGd0lHWnliMjBnSnk0dlkzTnpMM04wWVhSbExXMWhjQ2M3WEc1cGJYQnZjblFnZG1Gc2RXVlVlWEJsVFdGd0lHWnliMjBnSnk0dmMzWm5MM1poYkhWbExYUjVjR1V0YldGd0p6dGNibWx0Y0c5eWRDQjBjbUZ1YzJadmNtMVFjbTl3Y3lCbWNtOXRJQ2N1TDJOemN5OTBjbUZ1YzJadmNtMHRjSEp2Y0hNbk8xeHVhVzF3YjNKMElHSjFhV3hrSUdaeWIyMGdKeTR2YzNabkwySjFhV3hrSnp0Y2JtbHRjRzl5ZENCN0lHZGxkSFJsY2lCaGN5QmhkSFJ5UjJWMGRHVnlMQ0J6WlhSMFpYSWdZWE1nWVhSMGNsTmxkSFJsY2lCOUlHWnliMjBnSnk0dllYUjBjaTFoWkdGd2RHVnlKenRjYm1sdGNHOXlkQ0JqY21WaGRHVkJaR0Z3ZEdWeUlHWnliMjBnSnk0dllXUmhjSFJsY2ljN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCblpYUjBaWElnUFNBb1pXeGxiV1Z1ZEN3Z2EyVjVLU0E5UGlBb0lYUnlZVzV6Wm05eWJWQnliM0J6VzJ0bGVWMHBJRDhnWVhSMGNrZGxkSFJsY2lobGJHVnRaVzUwTENCclpYa3BJRG9nS0haaGJIVmxWSGx3WlUxaGNGdHJaWGxkSUNZbUlIWmhiSFZsVkhsd1pVMWhjRnRyWlhsZExtUmxabUYxYkhSUWNtOXdjeWtnUHlCMllXeDFaVlI1Y0dWTllYQmJhMlY1WFM1a1pXWmhkV3gwVUhKdmNITXVZM1Z5Y21WdWRDQTZJREE3WEc1bGVIQnZjblFnWTI5dWMzUWdjMlYwZEdWeUlEMGdLR1ZzWlcxbGJuUXNJSEJ5YjNCekxDQmtZWFJoS1NBOVBpQmhkSFJ5VTJWMGRHVnlLR1ZzWlcxbGJuUXNJR0oxYVd4a0tIQnliM0J6TENCa1lYUmhLU2s3WEc1bGVIQnZjblFnWTI5dWMzUWdaMlYwUld4bGJXVnVkRVJoZEdFZ1BTQW9aV3hsYldWdWRDa2dQVDRnZTF4dUlDQWdJR052Ym5OMElHSkNiM2dnUFNCbGJHVnRaVzUwTG1kbGRFSkNiM2dvS1R0Y2JpQWdJQ0J5WlhSMWNtNGdlMXh1SUNBZ0lDQWdJQ0I0T2lCaVFtOTRMbmdzWEc0Z0lDQWdJQ0FnSUhrNklHSkNiM2d1ZVN4Y2JpQWdJQ0FnSUNBZ2QybGtkR2c2SUdKQ2IzZ3VkMmxrZEdnc0lGeHVJQ0FnSUNBZ0lDQm9aV2xuYUhRNklHSkNiM2d1YUdWcFoyaDBYRzRnSUNBZ2ZUdGNibjA3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdOeVpXRjBaVUZrWVhCMFpYSW9leUJuWlhSMFpYSXNJSE5sZEhSbGNpd2djM1JoZEdWTllYQXNJSFpoYkhWbFZIbHdaVTFoY0N3Z1oyVjBSV3hsYldWdWRFUmhkR0VnZlNrN1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hZGFwdGVyL3N2Zy1hZGFwdGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9idWlsZCA9IHJlcXVpcmUoJy4vc3ZnLXBhdGgvYnVpbGQnKTtcblxudmFyIF9idWlsZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9idWlsZCk7XG5cbnZhciBfc3RhdGVNYXAgPSByZXF1aXJlKCcuL2Nzcy9zdGF0ZS1tYXAnKTtcblxudmFyIF9zdGF0ZU1hcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdGF0ZU1hcCk7XG5cbnZhciBfc3ZnQWRhcHRlciA9IHJlcXVpcmUoJy4vc3ZnLWFkYXB0ZXInKTtcblxudmFyIF9hZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVyJyk7XG5cbnZhciBfYWRhcHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hZGFwdGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gKDAsIF9hZGFwdGVyMi5kZWZhdWx0KSh7XG4gICAgZ2V0dGVyOiBfc3ZnQWRhcHRlci5nZXR0ZXIsXG4gICAgc2V0dGVyOiBmdW5jdGlvbiAoZWxlbWVudCwgcHJvcHMsIG9wdHMpIHtcbiAgICAgICAgdmFyIHBhdGhMZW5ndGggPSBvcHRzID8gb3B0cy5wYXRoTGVuZ3RoIDogMDtcbiAgICAgICAgcmV0dXJuICgwLCBfc3ZnQWRhcHRlci5zZXR0ZXIpKGVsZW1lbnQsICgwLCBfYnVpbGQyLmRlZmF1bHQpKHByb3BzLCBwYXRoTGVuZ3RoKSwgb3B0cyk7XG4gICAgfSxcbiAgICBzdGF0ZU1hcDogX3N0YXRlTWFwMi5kZWZhdWx0LFxuICAgIGdldEVsZW1lbnREYXRhOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gX2V4dGVuZHMoeyBwYXRoTGVuZ3RoOiBlbGVtZW50LmdldFRvdGFsTGVuZ3RoKCkgfSwgKDAsIF9zdmdBZGFwdGVyLmdldEVsZW1lbnREYXRhKShlbGVtZW50KSk7XG4gICAgfVxufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwzTjJaeTF3WVhSb0xXRmtZWEIwWlhJdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3TzBGQlFVRTdPenM3UVVGRFFUczdPenRCUVVOQk96dEJRVU5CT3pzN096czdhMEpCUldVc2RVSkJRV003UVVGRGVrSXNPRUpCUkhsQ08wRkJSWHBDTEZsQlFWRXNWVUZCUXl4UFFVRkVMRVZCUVZVc1MwRkJWaXhGUVVGcFFpeEpRVUZxUWl4RlFVRXdRanRCUVVNNVFpeFpRVUZOTEdGQlFXRXNUMEZCVHl4TFFVRkxMRlZCUVV3c1IwRkJhMElzUTBGQmVrSXNRMEZFVnp0QlFVVTVRaXhsUVVGUExIZENRVUZQTEU5QlFWQXNSVUZCWjBJc2NVSkJRVTBzUzBGQlRpeEZRVUZoTEZWQlFXSXNRMEZCYUVJc1JVRkJNRU1zU1VGQk1VTXNRMEZCVUN4RFFVWTRRanRMUVVFeFFqdEJRVWxTTEdkRFFVNTVRanRCUVU5NlFpeHZRa0ZCWjBJc1ZVRkJReXhQUVVGRU96QkNRVUZuUWl4WlFVRlpMRkZCUVZFc1kwRkJVaXhGUVVGYUxFbEJRWGxETEdkRFFVRmxMRTlCUVdZN1MwRkJla1E3UTBGUVRDSXNJbVpwYkdVaU9pSnpkbWN0Y0dGMGFDMWhaR0Z3ZEdWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQmlkV2xzWkNCbWNtOXRJQ2N1TDNOMlp5MXdZWFJvTDJKMWFXeGtKenRjYm1sdGNHOXlkQ0J6ZEdGMFpVMWhjQ0JtY205dElDY3VMMk56Y3k5emRHRjBaUzF0WVhBbk8xeHVhVzF3YjNKMElIc2daMlYwZEdWeUxDQnpaWFIwWlhJc0lHZGxkRVZzWlcxbGJuUkVZWFJoSUgwZ1puSnZiU0FuTGk5emRtY3RZV1JoY0hSbGNpYzdYRzVwYlhCdmNuUWdZM0psWVhSbFFXUmhjSFJsY2lCbWNtOXRJQ2N1TDJGa1lYQjBaWEluTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCamNtVmhkR1ZCWkdGd2RHVnlLSHRjYmlBZ0lDQm5aWFIwWlhJc1hHNGdJQ0FnYzJWMGRHVnlPaUFvWld4bGJXVnVkQ3dnY0hKdmNITXNJRzl3ZEhNcElEMCtJSHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdjR0YwYUV4bGJtZDBhQ0E5SUc5d2RITWdQeUJ2Y0hSekxuQmhkR2hNWlc1bmRHZ2dPaUF3TzF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnYzJWMGRHVnlLR1ZzWlcxbGJuUXNJR0oxYVd4a0tIQnliM0J6TENCd1lYUm9UR1Z1WjNSb0tTd2diM0IwY3lrN1hHNGdJQ0FnZlN4Y2JpQWdJQ0J6ZEdGMFpVMWhjQ3hjYmlBZ0lDQm5aWFJGYkdWdFpXNTBSR0YwWVRvZ0tHVnNaVzFsYm5RcElEMCtJQ2g3SUhCaGRHaE1aVzVuZEdnNklHVnNaVzFsYm5RdVoyVjBWRzkwWVd4TVpXNW5kR2dvS1N3Z0xpNHVaMlYwUld4bGJXVnVkRVJoZEdFb1pXeGxiV1Z1ZENrZ2ZTbGNibjBwTzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FkYXB0ZXIvc3ZnLXBhdGgtYWRhcHRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDE3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfY3JlYXRlRWFzaW5nID0gcmVxdWlyZSgnLi9jcmVhdGUtZWFzaW5nJyk7XG5cbnZhciBfY3JlYXRlRWFzaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUVhc2luZyk7XG5cbnZhciBfY3JlYXRlQmV6aWVyID0gcmVxdWlyZSgnLi9jcmVhdGUtYmV6aWVyJyk7XG5cbnZhciBfY3JlYXRlQmV6aWVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUJlemllcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8vIFZhbHVlc1xuLypcbiAgICBFYXNpbmcgZnVuY3Rpb25zXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIFxuICAgIEdlbmVyYXRlcyBhbmQgcHJvdmlkZXMgZWFzaW5nIGZ1bmN0aW9ucyBiYXNlZCBvbiBiYXNlRnVuY3Rpb24gZGVmaW5pdGlvbnNcbiAgICBcbiAgICBBIGNhbGwgdG8gZWFzaW5nRnVuY3Rpb24uZ2V0KCdmdW5jdGlvbk5hbWUnKSByZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCBjYW4gYmUgcGFzc2VkOlxuICAgICAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzIDAtMVxuICAgICAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogQW1wIG1vZGlmaWVyLCBvbmx5IGFjY2VwdGVkIGluIHNvbWUgZWFzaW5nIGZ1bmN0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5kIGlzIHVzZWQgdG8gYWRqdXN0IG92ZXJhbGwgc3RyZW5ndGhcbiAgICAgICAgQHJldHVybiBbbnVtYmVyXTogRWFzZWQgcHJvZ3Jlc3NcbiAgICAgICAgXG4gICAgV2UgY2FuIGdlbmVyYXRlIG5ldyBmdW5jdGlvbnMgYnkgc2VuZGluZyBhbiBlYXNpbmcgZnVuY3Rpb24gdGhyb3VnaCBlYXNpbmdGdW5jdGlvbi5leHRlbmQobmFtZSwgbWV0aG9kKS5cbiAgICBXaGljaCB3aWxsIG1ha2UgbmFtZUluLCBuYW1lT3V0IGFuZCBuYW1lSW5PdXQgZnVuY3Rpb25zIGF2YWlsYWJsZSB0byB1c2UuXG4gICAgICAgIFxuICAgIEVhc2luZyBmdW5jdGlvbnMgZnJvbSBSb2JlcnQgUGVubmVyXG4gICAgaHR0cDovL3d3dy5yb2JlcnRwZW5uZXIuY29tL2Vhc2luZy9cbiAgICAgICAgXG4gICAgQmV6aWVyIGN1cnZlIGludGVycHJldG9yIGNyZWF0ZWQgZnJvbSBHYcOrdGFuIFJlbmF1ZGVhdSdzIG9yaWdpbmFsIEJlemllckVhc2luZyAgXG4gICAgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nL2Jsb2IvbWFzdGVyL2luZGV4LmpzICBcbiAgICBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNpbmcvYmxvYi9tYXN0ZXIvTElDRU5TRVxuXG4gICAgQW50aWNpcGF0ZSBlYXNpbmcgY3JlYXRlZCBieSBFbGxpb3QgR2lub1xuICAgIGh0dHBzOi8vdHdpdHRlci5jb20vRWxsaW90R2Vub1xuKi9cbi8vIEltcG9ydHNcbnZhciBERUZBVUxUX0JBQ0tfU1RSRU5HVEggPSAxLjUyNTtcbnZhciBERUZBVUxUX1BPV19TVFJFTkdUSCA9IDI7XG5cbi8qXG4gICAgRWFjaCBvZiB0aGVzZSBiYXNlIGZ1bmN0aW9ucyBpcyBhbiBlYXNlSW5cbiAgICBcbiAgICBPbiBpbml0LCB3ZSB1c2UgLm1pcnJvciBhbmQgLnJldmVyc2UgdG8gZ2VuZXJhdGUgZWFzZUluT3V0IGFuZFxuICAgIGVhc2VPdXQgZnVuY3Rpb25zIHJlc3BlY3RpdmVseS5cbiovXG52YXIgYmFzZUVhc2luZyA9IHtcbiAgICBlYXNlOiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgdmFyIHN0cmVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gREVGQVVMVF9QT1dfU1RSRU5HVEggOiBhcmd1bWVudHNbMV07XG4gICAgICAgIHJldHVybiBNYXRoLnBvdyhwcm9ncmVzcywgc3RyZW5ndGgpO1xuICAgIH0sXG4gICAgY2lyYzogZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgICAgIHJldHVybiAxIC0gTWF0aC5zaW4oTWF0aC5hY29zKHByb2dyZXNzKSk7XG4gICAgfSxcbiAgICBiYWNrOiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgdmFyIHN0cmVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gREVGQVVMVF9CQUNLX1NUUkVOR1RIIDogYXJndW1lbnRzWzFdO1xuICAgICAgICByZXR1cm4gcHJvZ3Jlc3MgKiBwcm9ncmVzcyAqICgoc3RyZW5ndGggKyAxKSAqIHByb2dyZXNzIC0gc3RyZW5ndGgpO1xuICAgIH1cbn07XG5cbi8vIFV0aWxpdHkgZnVuY3Rpb25zXG52YXIgZ2VuZXJhdGVQb3dlckVhc2luZyA9IGZ1bmN0aW9uIChzdHJlbmd0aCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgcmV0dXJuIGJhc2VFYXNpbmcuZWFzZShwcm9ncmVzcywgc3RyZW5ndGgpO1xuICAgIH07XG59O1xuXG5bJ2N1YmljJywgJ3F1YXJ0JywgJ3F1aW50J10uZm9yRWFjaChmdW5jdGlvbiAoZWFzaW5nTmFtZSwgaSkge1xuICAgIHJldHVybiBiYXNlRWFzaW5nW2Vhc2luZ05hbWVdID0gZ2VuZXJhdGVQb3dlckVhc2luZyhpICsgMyk7XG59KTtcblxuLy8gR2VuZXJhdGUgaW4vb3V0L2luT3V0IHZhcmlhdGlvbnNcbmZvciAodmFyIGtleSBpbiBiYXNlRWFzaW5nKSB7XG4gICAgaWYgKGJhc2VFYXNpbmcuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICB2YXIgZWFzaW5nRnVuY3Rpb24gPSAoMCwgX2NyZWF0ZUVhc2luZzIuZGVmYXVsdCkoYmFzZUVhc2luZ1trZXldKTtcbiAgICAgICAgYmFzZUVhc2luZ1trZXkgKyAnSW4nXSA9IGVhc2luZ0Z1bmN0aW9uLmluO1xuICAgICAgICBiYXNlRWFzaW5nW2tleSArICdPdXQnXSA9IGVhc2luZ0Z1bmN0aW9uLm91dDtcbiAgICAgICAgYmFzZUVhc2luZ1trZXkgKyAnSW5PdXQnXSA9IGVhc2luZ0Z1bmN0aW9uLmluT3V0O1xuICAgIH1cbn1cblxuYmFzZUVhc2luZy5saW5lYXIgPSBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICByZXR1cm4gcHJvZ3Jlc3M7XG59O1xuYmFzZUVhc2luZy5hbnRpY2lwYXRlID0gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgdmFyIHN0cmVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gREVGQVVMVF9CQUNLX1NUUkVOR1RIIDogYXJndW1lbnRzWzFdO1xuICAgIHJldHVybiAocHJvZ3Jlc3MgKj0gMikgPCAxID8gMC41ICogYmFzZUVhc2luZy5iYWNrSW4ocHJvZ3Jlc3MsIHN0cmVuZ3RoKSA6IDAuNSAqICgyIC0gTWF0aC5wb3coMiwgLTEwICogKHByb2dyZXNzIC0gMSkpKTtcbn07XG5cbmJhc2VFYXNpbmcuY3JlYXRlVmFyaWF0aW9ucyA9IF9jcmVhdGVFYXNpbmcyLmRlZmF1bHQ7XG5iYXNlRWFzaW5nLmN1YmljQmV6aWVyID0gX2NyZWF0ZUJlemllcjIuZGVmYXVsdDtcbmJhc2VFYXNpbmcubW9kaWZ5ID0gZnVuY3Rpb24gKGVhc2luZykge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgICAgIHJldHVybiBlYXNpbmcuYXBwbHkodW5kZWZpbmVkLCBbcHJvZ3Jlc3NdLmNvbmNhdChhcmdzKSk7XG4gICAgfTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGJhc2VFYXNpbmc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwyVmhjMmx1Wnk5d2NtVnpaWFF0WldGemFXNW5MbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN1FVRXdRa0U3T3pzN1FVRkRRVHM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN08wRkJSMEVzU1VGQlRTeDNRa0ZCZDBJc1MwRkJlRUk3UVVGRFRpeEpRVUZOTEhWQ1FVRjFRaXhEUVVGMlFqczdPenM3T3pzN1FVRlJUaXhKUVVGTkxHRkJRV0U3UVVGRFppeFZRVUZOTEZWQlFVTXNVVUZCUkR0WlFVRlhMR2xGUVVGWE8zZENRVUY1UWl4VlFVRlpPMHRCUVRORU8wRkJRMDRzVlVGQlRUdGxRVUZaTEVsQlFVa3NTMEZCU3l4SFFVRk1MRU5CUVZNc1MwRkJTeXhKUVVGTUxFTkJRVlVzVVVGQlZpeERRVUZVTEVOQlFVbzdTMEZCV2p0QlFVTk9MRlZCUVUwc1ZVRkJReXhSUVVGRU8xbEJRVmNzYVVWQlFWYzdaVUZCTUVJc1VVRkJReXhIUVVGWExGRkJRVmdzU1VGQmQwSXNRMEZCUXl4WFFVRlhMRU5CUVZnc1EwRkJSQ3hIUVVGcFFpeFJRVUZxUWl4SFFVRTBRaXhSUVVFMVFpeERRVUY2UWp0TFFVRm9SRHREUVVoS096czdRVUZQVGl4SlFVRk5MSE5DUVVGelFpeFZRVUZETEZGQlFVUTdWMEZCWXl4VlFVRkRMRkZCUVVRN1pVRkJZeXhYUVVGWExFbEJRVmdzUTBGQlowSXNVVUZCYUVJc1JVRkJNRUlzVVVGQk1VSTdTMEZCWkR0RFFVRmtPenRCUVVVMVFpeERRVUZETEU5QlFVUXNSVUZCVlN4UFFVRldMRVZCUVcxQ0xFOUJRVzVDTEVWQlFUUkNMRTlCUVRWQ0xFTkJRVzlETEZWQlFVTXNWVUZCUkN4RlFVRmhMRU5CUVdJN1YwRkJiVUlzVjBGQlZ5eFZRVUZZTEVsQlFYbENMRzlDUVVGdlFpeEpRVUZKTEVOQlFVb3NRMEZCTjBNN1EwRkJia0lzUTBGQmNFTTdPenRCUVVkQkxFdEJRVXNzU1VGQlNTeEhRVUZLTEVsQlFWY3NWVUZCYUVJc1JVRkJORUk3UVVGRGVFSXNVVUZCU1N4WFFVRlhMR05CUVZnc1EwRkJNRUlzUjBGQk1VSXNRMEZCU2l4RlFVRnZRenRCUVVOb1F5eFpRVUZOTEdsQ1FVRnBRaXcwUWtGQmNVSXNWMEZCVnl4SFFVRllMRU5CUVhKQ0xFTkJRV3BDTEVOQlJEQkNPMEZCUldoRExHMUNRVUZqTEZWQlFXUXNTVUZCZVVJc1pVRkJaU3hGUVVGbUxFTkJSazg3UVVGSGFFTXNiVUpCUVdNc1YwRkJaQ3hKUVVFd1FpeGxRVUZsTEVkQlFXWXNRMEZJVFR0QlFVbG9ReXh0UWtGQll5eGhRVUZrTEVsQlFUUkNMR1ZCUVdVc1MwRkJaaXhEUVVwSk8wdEJRWEJETzBOQlJFbzdPMEZCVTBFc1YwRkJWeXhOUVVGWUxFZEJRVzlDTzFkQlFWazdRMEZCV2p0QlFVTndRaXhYUVVGWExGVkJRVmdzUjBGQmQwSXNWVUZCUXl4UlFVRkVPMUZCUVZjc2FVVkJRVmM3VjBGRE1VTXNRMEZCUlN4WlFVRlZMRU5CUVZZc1EwRkJSQ3hIUVVGblFpeERRVUZvUWl4SFFVRnhRaXhOUVVGTkxGZEJRVmNzVFVGQldDeERRVUZyUWl4UlFVRnNRaXhGUVVFMFFpeFJRVUUxUWl4RFFVRk9MRWRCUVN0RExFOUJRVThzU1VGQlNTeExRVUZMTEVkQlFVd3NRMEZCVXl4RFFVRlVMRVZCUVZrc1EwRkJReXhGUVVGRUxFbEJRVThzVjBGQlZ5eERRVUZZTEVOQlFWQXNRMEZCYUVJc1EwRkJVRHREUVVScVJEczdRVUZIZUVJc1YwRkJWeXhuUWtGQldEdEJRVU5CTEZkQlFWY3NWMEZCV0R0QlFVTkJMRmRCUVZjc1RVRkJXQ3hIUVVGdlFpeFZRVUZETEUxQlFVUTdjME5CUVZrN096czdWMEZCVXl4VlFVRkRMRkZCUVVRN1pVRkJZeXg1UWtGQlR5eHBRa0ZCWVN4TFFVRndRanRMUVVGa08wTkJRWEpDT3p0clFrRkZUQ0lzSW1acGJHVWlPaUp3Y21WelpYUXRaV0Z6YVc1bkxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaThxWEc0Z0lDQWdSV0Z6YVc1bklHWjFibU4wYVc5dWMxeHVJQ0FnSUMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMWNiaUFnSUNCY2JpQWdJQ0JIWlc1bGNtRjBaWE1nWVc1a0lIQnliM1pwWkdWeklHVmhjMmx1WnlCbWRXNWpkR2x2Ym5NZ1ltRnpaV1FnYjI0Z1ltRnpaVVoxYm1OMGFXOXVJR1JsWm1sdWFYUnBiMjV6WEc0Z0lDQWdYRzRnSUNBZ1FTQmpZV3hzSUhSdklHVmhjMmx1WjBaMWJtTjBhVzl1TG1kbGRDZ25ablZ1WTNScGIyNU9ZVzFsSnlrZ2NtVjBkWEp1Y3lCaElHWjFibU4wYVc5dUlIUm9ZWFFnWTJGdUlHSmxJSEJoYzNObFpEcGNiaUFnSUNBZ0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQlFjbTluY21WemN5QXdMVEZjYmlBZ0lDQWdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRJQ2h2Y0hScGIyNWhiQ2s2SUVGdGNDQnRiMlJwWm1sbGNpd2diMjVzZVNCaFkyTmxjSFJsWkNCcGJpQnpiMjFsSUdWaGMybHVaeUJtZFc1amRHbHZibk5jYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdGdVpDQnBjeUIxYzJWa0lIUnZJR0ZrYW5WemRDQnZkbVZ5WVd4c0lITjBjbVZ1WjNSb1hHNGdJQ0FnSUNBZ0lFQnlaWFIxY200Z1cyNTFiV0psY2wwNklFVmhjMlZrSUhCeWIyZHlaWE56WEc0Z0lDQWdJQ0FnSUZ4dUlDQWdJRmRsSUdOaGJpQm5aVzVsY21GMFpTQnVaWGNnWm5WdVkzUnBiMjV6SUdKNUlITmxibVJwYm1jZ1lXNGdaV0Z6YVc1bklHWjFibU4wYVc5dUlIUm9jbTkxWjJnZ1pXRnphVzVuUm5WdVkzUnBiMjR1WlhoMFpXNWtLRzVoYldVc0lHMWxkR2h2WkNrdVhHNGdJQ0FnVjJocFkyZ2dkMmxzYkNCdFlXdGxJRzVoYldWSmJpd2dibUZ0WlU5MWRDQmhibVFnYm1GdFpVbHVUM1YwSUdaMWJtTjBhVzl1Y3lCaGRtRnBiR0ZpYkdVZ2RHOGdkWE5sTGx4dUlDQWdJQ0FnSUNCY2JpQWdJQ0JGWVhOcGJtY2dablZ1WTNScGIyNXpJR1p5YjIwZ1VtOWlaWEowSUZCbGJtNWxjbHh1SUNBZ0lHaDBkSEE2THk5M2QzY3VjbTlpWlhKMGNHVnVibVZ5TG1OdmJTOWxZWE5wYm1jdlhHNGdJQ0FnSUNBZ0lGeHVJQ0FnSUVKbGVtbGxjaUJqZFhKMlpTQnBiblJsY25CeVpYUnZjaUJqY21WaGRHVmtJR1p5YjIwZ1IySERxM1JoYmlCU1pXNWhkV1JsWVhVbmN5QnZjbWxuYVc1aGJDQkNaWHBwWlhKRllYTnBibWNnSUZ4dUlDQWdJR2gwZEhCek9pOHZaMmwwYUhWaUxtTnZiUzluY21VdlltVjZhV1Z5TFdWaGMybHVaeTlpYkc5aUwyMWhjM1JsY2k5cGJtUmxlQzVxY3lBZ1hHNGdJQ0FnYUhSMGNITTZMeTluYVhSb2RXSXVZMjl0TDJkeVpTOWlaWHBwWlhJdFpXRnphVzVuTDJKc2IySXZiV0Z6ZEdWeUwweEpRMFZPVTBWY2JseHVJQ0FnSUVGdWRHbGphWEJoZEdVZ1pXRnphVzVuSUdOeVpXRjBaV1FnWW5rZ1JXeHNhVzkwSUVkcGJtOWNiaUFnSUNCb2RIUndjem92TDNSM2FYUjBaWEl1WTI5dEwwVnNiR2x2ZEVkbGJtOWNiaW92WEc0dkx5QkpiWEJ2Y25SelhHNXBiWEJ2Y25RZ1kzSmxZWFJsUldGemFXNW5SblZ1WTNScGIyNGdabkp2YlNBbkxpOWpjbVZoZEdVdFpXRnphVzVuSnp0Y2JtbHRjRzl5ZENCamRXSnBZMEpsZW1sbGNpQm1jbTl0SUNjdUwyTnlaV0YwWlMxaVpYcHBaWEluTzF4dVhHNHZMeUJXWVd4MVpYTmNibU52Ym5OMElFUkZSa0ZWVEZSZlFrRkRTMTlUVkZKRlRrZFVTQ0E5SURFdU5USTFPMXh1WTI5dWMzUWdSRVZHUVZWTVZGOVFUMWRmVTFSU1JVNUhWRWdnUFNBeU8xeHVYRzR2S2x4dUlDQWdJRVZoWTJnZ2IyWWdkR2hsYzJVZ1ltRnpaU0JtZFc1amRHbHZibk1nYVhNZ1lXNGdaV0Z6WlVsdVhHNGdJQ0FnWEc0Z0lDQWdUMjRnYVc1cGRDd2dkMlVnZFhObElDNXRhWEp5YjNJZ1lXNWtJQzV5WlhabGNuTmxJSFJ2SUdkbGJtVnlZWFJsSUdWaGMyVkpiazkxZENCaGJtUmNiaUFnSUNCbFlYTmxUM1YwSUdaMWJtTjBhVzl1Y3lCeVpYTndaV04wYVhabGJIa3VYRzRxTDF4dVkyOXVjM1FnWW1GelpVVmhjMmx1WnlBOUlIdGNiaUFnSUNCbFlYTmxPaUFvY0hKdlozSmxjM01zSUhOMGNtVnVaM1JvSUQwZ1JFVkdRVlZNVkY5UVQxZGZVMVJTUlU1SFZFZ3BJRDArSUhCeWIyZHlaWE56SUNvcUlITjBjbVZ1WjNSb0xGeHVJQ0FnSUdOcGNtTTZJSEJ5YjJkeVpYTnpJRDArSURFZ0xTQk5ZWFJvTG5OcGJpaE5ZWFJvTG1GamIzTW9jSEp2WjNKbGMzTXBLU3hjYmlBZ0lDQmlZV05yT2lBb2NISnZaM0psYzNNc0lITjBjbVZ1WjNSb0lEMGdSRVZHUVZWTVZGOUNRVU5MWDFOVVVrVk9SMVJJS1NBOVBpQW9jSEp2WjNKbGMzTWdLaUJ3Y205bmNtVnpjeWtnS2lBb0tITjBjbVZ1WjNSb0lDc2dNU2tnS2lCd2NtOW5jbVZ6Y3lBdElITjBjbVZ1WjNSb0tWeHVmVHRjYmx4dUx5OGdWWFJwYkdsMGVTQm1kVzVqZEdsdmJuTmNibU52Ym5OMElHZGxibVZ5WVhSbFVHOTNaWEpGWVhOcGJtY2dQU0FvYzNSeVpXNW5kR2dwSUQwK0lDaHdjbTluY21WemN5a2dQVDRnWW1GelpVVmhjMmx1Wnk1bFlYTmxLSEJ5YjJkeVpYTnpMQ0J6ZEhKbGJtZDBhQ2s3WEc1Y2Jsc25ZM1ZpYVdNbkxDQW5jWFZoY25RbkxDQW5jWFZwYm5RblhTNW1iM0pGWVdOb0tDaGxZWE5wYm1kT1lXMWxMQ0JwS1NBOVBpQmlZWE5sUldGemFXNW5XMlZoYzJsdVowNWhiV1ZkSUQwZ1oyVnVaWEpoZEdWUWIzZGxja1ZoYzJsdVp5aHBJQ3NnTXlrcE8xeHVYRzR2THlCSFpXNWxjbUYwWlNCcGJpOXZkWFF2YVc1UGRYUWdkbUZ5YVdGMGFXOXVjMXh1Wm05eUlDaHNaWFFnYTJWNUlHbHVJR0poYzJWRllYTnBibWNwSUh0Y2JpQWdJQ0JwWmlBb1ltRnpaVVZoYzJsdVp5NW9ZWE5QZDI1UWNtOXdaWEowZVNoclpYa3BLU0I3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJR1ZoYzJsdVowWjFibU4wYVc5dUlEMGdZM0psWVhSbFJXRnphVzVuUm5WdVkzUnBiMjRvWW1GelpVVmhjMmx1WjF0clpYbGRLVHRjYmlBZ0lDQWdJQ0FnWW1GelpVVmhjMmx1WjF0Z0pIdHJaWGw5U1c1Z1hTQTlJR1ZoYzJsdVowWjFibU4wYVc5dUxtbHVPMXh1SUNBZ0lDQWdJQ0JpWVhObFJXRnphVzVuVzJBa2UydGxlWDFQZFhSZ1hTQTlJR1ZoYzJsdVowWjFibU4wYVc5dUxtOTFkRHRjYmlBZ0lDQWdJQ0FnWW1GelpVVmhjMmx1WjF0Z0pIdHJaWGw5U1c1UGRYUmdYU0E5SUdWaGMybHVaMFoxYm1OMGFXOXVMbWx1VDNWME8xeHVJQ0FnSUgxY2JuMWNibHh1WW1GelpVVmhjMmx1Wnk1c2FXNWxZWElnUFNCd2NtOW5jbVZ6Y3lBOVBpQndjbTluY21WemN6dGNibUpoYzJWRllYTnBibWN1WVc1MGFXTnBjR0YwWlNBOUlDaHdjbTluY21WemN5d2djM1J5Wlc1bmRHZ2dQU0JFUlVaQlZVeFVYMEpCUTB0ZlUxUlNSVTVIVkVncElEMCtYRzRnSUNBZ0tDaHdjbTluY21WemN5bzlNaWtnUENBeEtTQS9JREF1TlNBcUlHSmhjMlZGWVhOcGJtY3VZbUZqYTBsdUtIQnliMmR5WlhOekxDQnpkSEpsYm1kMGFDa2dPaUFnTUM0MUlDb2dLRElnTFNCTllYUm9MbkJ2ZHlneUxDQXRNVEFnS2lBb2NISnZaM0psYzNNZ0xTQXhLU2twTzF4dVhHNWlZWE5sUldGemFXNW5MbU55WldGMFpWWmhjbWxoZEdsdmJuTWdQU0JqY21WaGRHVkZZWE5wYm1kR2RXNWpkR2x2Ymp0Y2JtSmhjMlZGWVhOcGJtY3VZM1ZpYVdOQ1pYcHBaWElnUFNCamRXSnBZMEpsZW1sbGNqdGNibUpoYzJWRllYTnBibWN1Ylc5a2FXWjVJRDBnS0dWaGMybHVaeXdnTGk0dVlYSm5jeWtnUFQ0Z0tIQnliMmR5WlhOektTQTlQaUJsWVhOcGJtY29jSEp2WjNKbGMzTXNJQzR1TG1GeVozTXBPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JpWVhObFJXRnphVzVuT3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvZWFzaW5nL3ByZXNldC1lYXNpbmcuanNcbiAqKiBtb2R1bGUgaWQgPSAxOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX0Zsb3cgPSByZXF1aXJlKCcuLi9GbG93Jyk7XG5cbnZhciBfRmxvdzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9GbG93KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIFNBVkVfUFJPUCA9ICdfX3BtX2Zsb3cnO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZWxlbWVudCwgYWRhcHRlcikge1xuICAgIGlmIChlbGVtZW50W1NBVkVfUFJPUF0pIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRbU0FWRV9QUk9QXTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgZmxvdyA9IG5ldyBfRmxvdzIuZGVmYXVsdCh7IGVsZW1lbnQ6IGVsZW1lbnQsIGFkYXB0ZXI6IGFkYXB0ZXIgfSk7XG5cbiAgICAgICAgLy8gQmluZCBhZGFwdGVyIHRvIGVsZW1lbnRcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsIFNBVkVfUFJPUCwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICAgICAgICB2YWx1ZTogZmxvd1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZmxvdztcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMlpzYjNjdloyVjBMV1pzYjNjdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenRCUVVGQk96czdPenM3UVVGRlFTeEpRVUZOTEZsQlFWa3NWMEZCV2pzN2EwSkJSVk1zVlVGQlF5eFBRVUZFTEVWQlFWVXNUMEZCVml4RlFVRnpRanRCUVVOcVF5eFJRVUZKTEZGQlFWRXNVMEZCVWl4RFFVRktMRVZCUVhkQ08wRkJRM0JDTEdWQlFVOHNVVUZCVVN4VFFVRlNMRU5CUVZBc1EwRkViMEk3UzBGQmVFSXNUVUZGVHp0QlFVTklMRmxCUVUwc1QwRkJUeXh0UWtGQlV5eEZRVUZGTEdkQ1FVRkdMRVZCUVZjc1owSkJRVmdzUlVGQlZDeERRVUZRT3pzN1FVRkVTQ3hqUVVsSUxFTkJRVThzWTBGQlVDeERRVUZ6UWl4UFFVRjBRaXhGUVVFclFpeFRRVUV2UWl4RlFVRXdRenRCUVVOMFF5eDNRa0ZCV1N4TFFVRmFPMEZCUTBFc2MwSkJRVlVzUzBGQlZqdEJRVU5CTEcxQ1FVRlBMRWxCUVZBN1UwRklTaXhGUVVwSE96dEJRVlZJTEdWQlFVOHNTVUZCVUN4RFFWWkhPMHRCUmxBN1EwRkVWeUlzSW1acGJHVWlPaUpuWlhRdFpteHZkeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnUm14dmR5Qm1jbTl0SUNjdUxpOUdiRzkzSnp0Y2JseHVZMjl1YzNRZ1UwRldSVjlRVWs5UUlEMGdKMTlmY0cxZlpteHZkeWM3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUNobGJHVnRaVzUwTENCaFpHRndkR1Z5S1NBOVBpQjdYRzRnSUNBZ2FXWWdLR1ZzWlcxbGJuUmJVMEZXUlY5UVVrOVFYU2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnWld4bGJXVnVkRnRUUVZaRlgxQlNUMUJkTzF4dUlDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJR052Ym5OMElHWnNiM2NnUFNCdVpYY2dSbXh2ZHloN0lHVnNaVzFsYm5Rc0lHRmtZWEIwWlhJZ2ZTazdYRzVjYmlBZ0lDQWdJQ0FnTHk4Z1FtbHVaQ0JoWkdGd2RHVnlJSFJ2SUdWc1pXMWxiblJjYmlBZ0lDQWdJQ0FnVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHVnNaVzFsYm5Rc0lGTkJWa1ZmVUZKUFVDd2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1pXNTFiV1Z5WVdKc1pUb2dabUZzYzJVc1hHNGdJQ0FnSUNBZ0lDQWdJQ0IzY21sMFlXSnNaVG9nWm1Gc2MyVXNYRzRnSUNBZ0lDQWdJQ0FnSUNCMllXeDFaVG9nWm14dmQxeHVJQ0FnSUNBZ0lDQjlLVHRjYmx4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnWm14dmR6dGNiaUFnSUNCOVhHNTlPMXh1WEc1Y2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL2Zsb3cvZ2V0LWZsb3cuanNcbiAqKiBtb2R1bGUgaWQgPSAxOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5zdGVwUHJvZ3Jlc3MgPSBleHBvcnRzLnNwZWVkUGVyU2Vjb25kID0gZXhwb3J0cy5zcGVlZFBlckZyYW1lID0gZXhwb3J0cy5zbW9vdGggPSBleHBvcnRzLnJlc3RyaWN0ID0gZXhwb3J0cy5yZWxhdGl2ZVZhbHVlID0gZXhwb3J0cy5yYW5kb20gPSBleHBvcnRzLnJhZGlhbnNUb0RlZ3JlZXMgPSBleHBvcnRzLnBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UgPSBleHBvcnRzLm9mZnNldCA9IGV4cG9ydHMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUgPSBleHBvcnRzLmdldFZhbHVlRnJvbVByb2dyZXNzID0gZXhwb3J0cy5oeXBvdGVudXNlID0gZXhwb3J0cy5lYXNlID0gZXhwb3J0cy5kaXN0YW5jZSA9IGV4cG9ydHMuZGlsYXRlID0gZXhwb3J0cy5kZWdyZWVzVG9SYWRpYW5zID0gZXhwb3J0cy5hbmdsZSA9IHVuZGVmaW5lZDtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIFpFUk9fUE9JTlQgPSB7XG4gICAgeDogMCxcbiAgICB5OiAwLFxuICAgIHo6IDBcbn07XG5cbnZhciBkaXN0YW5jZTFEID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gTWF0aC5hYnMoYSAtIGIpO1xufTtcblxuLypcbiAgICBBbmdsZSBiZXR3ZWVuIHBvaW50c1xuICAgIFxuICAgIFRyYW5zbGF0ZXMgdGhlIGh5cG90aGV0aWNhbCBsaW5lIHNvIHRoYXQgdGhlICdmcm9tJyBjb29yZGluYXRlc1xuICAgIGFyZSBhdCAwLDBcbiAgICBcbiAgICBAcGFyYW0gW29iamVjdF06IFggYW5kIFkgY29vcmRpbmF0ZXMgb2YgZnJvbSBwb2ludFxuICAgIEBwYXJhbSBbb2JqZWN0XTogWCBhbmQgWSBjb3JkaW5hdGVzIG9mIHRvIHBvaW50XG4gICAgQHJldHVybiBbcmFkaWFuXTogQW5nbGUgYmV0d2VlbiB0aGUgdHdvIHBvaW50cyBpbiByYWRpYW5zXG4qL1xudmFyIGFuZ2xlID0gZXhwb3J0cy5hbmdsZSA9IGZ1bmN0aW9uIChhKSB7XG4gICAgdmFyIGIgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBaRVJPX1BPSU5UIDogYXJndW1lbnRzWzFdO1xuICAgIHJldHVybiByYWRpYW5zVG9EZWdyZWVzKE1hdGguYXRhbjIoYS54IC0gYi54LCBhLnkgLSBiLnkpKTtcbn07XG5cbi8qXG4gICAgQ29udmVydCBkZWdyZWVzIHRvIHJhZGlhbnNcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIGluIGRlZ3JlZXNcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBpbiByYWRpYW5zXG4qL1xudmFyIGRlZ3JlZXNUb1JhZGlhbnMgPSBleHBvcnRzLmRlZ3JlZXNUb1JhZGlhbnMgPSBmdW5jdGlvbiAoZGVncmVlcykge1xuICAgIHJldHVybiBkZWdyZWVzICogTWF0aC5QSSAvIDE4MDtcbn07XG5cbi8qXG4gICAgRGlsYXRlXG4gICAgXG4gICAgQ2hhbmdlIHRoZSBwcm9ncmVzc2lvbiBiZXR3ZWVuIGEgYW5kIGIgYWNjb3JkaW5nIHRvIGRpbGF0aW9uLlxuICAgIFxuICAgIFNvIGRpbGF0aW9uID0gMC41IHdvdWxkIGNoYW5nZVxuICAgIFxuICAgIGEgLS0tLS0tLS0tIGJcbiAgICBcbiAgICB0b1xuICAgIFxuICAgIGEgLS0tLSBiXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBQcmV2aW91cyB2YWx1ZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogRGlsYXRlIHByb2dyZXNzIGJ5IHhcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBQcmV2aW91cyB2YWx1ZSBwbHVzIHRoZSBkaWxhdGVkIGRpZmZlcmVuY2VcbiovXG52YXIgZGlsYXRlID0gZXhwb3J0cy5kaWxhdGUgPSBmdW5jdGlvbiAoYSwgYiwgZGlsYXRpb24pIHtcbiAgICByZXR1cm4gYSArIChiIC0gYSkgKiBkaWxhdGlvbjtcbn07XG5cbi8qXG4gICAgRGlzdGFuY2VcbiAgICBcbiAgICBSZXR1cm5zIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHR3byBuIGRpbWVuc2lvbmFsIHBvaW50cy5cbiAgICBcbiAgICBAcGFyYW0gW29iamVjdC9udW1iZXJdOiB4IGFuZCB5IG9yIGp1c3QgeCBvZiBwb2ludCBBXG4gICAgQHBhcmFtIFtvYmplY3QvbnVtYmVyXTogKG9wdGlvbmFsKTogeCBhbmQgeSBvciBqdXN0IHggb2YgcG9pbnQgQlxuICAgIEByZXR1cm4gW251bWJlcl06IFRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzXG4qL1xudmFyIGRpc3RhbmNlID0gZXhwb3J0cy5kaXN0YW5jZSA9IGZ1bmN0aW9uIChhKSB7XG4gICAgdmFyIGIgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBaRVJPX1BPSU5UIDogYXJndW1lbnRzWzFdO1xuXG4gICAgLy8gMUQgZGltZW5zaW9uc1xuICAgIGlmICgoMCwgX3V0aWxzLmlzTnVtKShhKSkge1xuICAgICAgICByZXR1cm4gZGlzdGFuY2UxRChhLCBiKTtcblxuICAgICAgICAvLyBNdWx0aS1kaW1lbnNpb25hbFxuICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgeERlbHRhID0gZGlzdGFuY2UxRChhLngsIGIueCk7XG4gICAgICAgICAgICB2YXIgeURlbHRhID0gZGlzdGFuY2UxRChhLnksIGIueSk7XG4gICAgICAgICAgICB2YXIgekRlbHRhID0gKDAsIF91dGlscy5pc051bSkoYS56KSA/IGRpc3RhbmNlMUQoYS56LCBiLnopIDogMDtcblxuICAgICAgICAgICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyh4RGVsdGEsIDIpICsgTWF0aC5wb3coeURlbHRhLCAyKSArIE1hdGgucG93KHpEZWx0YSwgMikpO1xuICAgICAgICB9XG59O1xuXG4vKlxuICAgIEVhc2UgdmFsdWUgd2l0aGluIHJhbmdlZCBwYXJhbWV0ZXJzXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcyBiZXR3ZWVuIDAgYW5kIDFcbiAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIG9mIDAgcHJvZ3Jlc3NcbiAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIG9mIDEgcHJvZ3Jlc3NcbiAgICBAcGFyYW0gW3N0cmluZyB8fCBmdW5jdGlvbl06IE5hbWUgb2YgcHJlc2V0IGVhc2luZ1xuICAgICAgICB0byB1c2Ugb3IgZ2VuZXJhdGVkIGVhc2luZyBmdW5jdGlvblxuICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIG9mIGVhc2VkIHByb2dyZXNzIGluIHJhbmdlXG4qL1xudmFyIGVhc2UgPSBleHBvcnRzLmVhc2UgPSBmdW5jdGlvbiAocHJvZ3Jlc3MsIGZyb20sIHRvLCBlYXNlKSB7XG4gICAgdmFyIHByb2dyZXNzTGltaXRlZCA9IHJlc3RyaWN0KHByb2dyZXNzLCAwLCAxKTtcbiAgICB2YXIgZWFzZWRQcm9ncmVzcyA9IGVhc2UocHJvZ3Jlc3NMaW1pdGVkKTtcblxuICAgIHJldHVybiBnZXRWYWx1ZUZyb21Qcm9ncmVzcyhlYXNlZFByb2dyZXNzLCBmcm9tLCB0byk7XG59O1xuXG4vKlxuICAgIEh5cG90ZW51c2VcbiAgICBcbiAgICBSZXR1cm5zIHRoZSBoeXBvdGVudXNlLCBzaWRlIEMsIGdpdmVuIHRoZSBsZW5ndGhzIG9mIHNpZGVzIEEgYW5kIEIuXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBMZW5ndGggb2YgQVxuICAgIEBwYXJhbSBbbnVtYmVyXTogTGVuZ3RoIG9mIEJcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBMZW5ndGggb2YgQ1xuKi9cbnZhciBoeXBvdGVudXNlID0gZXhwb3J0cy5oeXBvdGVudXNlID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KGEgKiBhICsgYiAqIGIpO1xufTtcblxuLypcbiAgICBWYWx1ZSBpbiByYW5nZSBmcm9tIHByb2dyZXNzXG4gICAgXG4gICAgR2l2ZW4gYSBsb3dlciBsaW1pdCBhbmQgYW4gdXBwZXIgbGltaXQsIHdlIHJldHVybiB0aGUgdmFsdWUgd2l0aGluXG4gICAgdGhhdCByYW5nZSBhcyBleHByZXNzZWQgYnkgcHJvZ3Jlc3MgKGEgbnVtYmVyIGZyb20gMC0xKVxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVGhlIHByb2dyZXNzIGJldHdlZW4gbG93ZXIgYW5kIHVwcGVyIGxpbWl0cyBleHByZXNzZWQgMC0xXG4gICAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBvZiByYW5nZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXQgb2YgcmFuZ2VcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBhcyBjYWxjdWxhdGVkIGZyb20gcHJvZ3Jlc3Mgd2l0aGluIHJhbmdlIChub3QgbGltaXRlZCB3aXRoaW4gcmFuZ2UpXG4qL1xudmFyIGdldFZhbHVlRnJvbVByb2dyZXNzID0gZXhwb3J0cy5nZXRWYWx1ZUZyb21Qcm9ncmVzcyA9IGZ1bmN0aW9uIChwcm9ncmVzcywgZnJvbSwgdG8pIHtcbiAgICByZXR1cm4gLXByb2dyZXNzICogZnJvbSArIHByb2dyZXNzICogdG8gKyBmcm9tO1xufTtcblxuLypcbiAgICBQcm9ncmVzcyB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiAgICBcbiAgICBHaXZlbiBhIGxvd2VyIGxpbWl0IGFuZCBhbiB1cHBlciBsaW1pdCwgd2UgcmV0dXJuIHRoZSBwcm9ncmVzc1xuICAgIChleHByZXNzZWQgYXMgYSBudW1iZXIgMC0xKSByZXByZXNlbnRlZCBieSB0aGUgZ2l2ZW4gdmFsdWUsIGFuZFxuICAgIGxpbWl0IHRoYXQgcHJvZ3Jlc3MgdG8gd2l0aGluIDAtMS5cbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIHRvIGZpbmQgcHJvZ3Jlc3Mgd2l0aGluIGdpdmVuIHJhbmdlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBcbiAgICBAcGFyYW0gW251bWJlcl06IFVwcGVyIGxpbWl0XG4gICAgQHJldHVybiBbbnVtYmVyXTogUHJvZ3Jlc3Mgb2YgdmFsdWUgd2l0aGluIHJhbmdlIGFzIGV4cHJlc3NlZCAwLTFcbiovXG52YXIgZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUgPSBleHBvcnRzLmdldFByb2dyZXNzRnJvbVZhbHVlID0gZnVuY3Rpb24gKHZhbHVlLCBmcm9tLCB0bykge1xuICAgIHJldHVybiAodmFsdWUgLSBmcm9tKSAvICh0byAtIGZyb20pO1xufTtcblxuLypcbiAgICBPZmZzZXQgYmV0d2VlbiB0d28gb2JqZWN0cyBvZiBudW1iZXJzXG5cbiAgICBJZiBwcm9wZXJ0eSBpcyBmb3VuZCBpbiBiIG5vdCBwcmVzZW50IGluIGEsIGl0IHdpbGwgcmV0dXJuIGAwYCBmb3IgdGhhdCBwcm9wLlxuICAgIFxuICAgIEBwYXJhbSBbUG9pbnRdOiBGaXJzdCBvYmplY3RcbiAgICBAcGFyYW0gW1BvaW50XTogU2Vjb25kIG9iamVjdFxuICAgIEByZXR1cm4gW09mZnNldF06IERpc3RhbmNlIG1ldHJpY3MgYmV0d2VlbiB0d28gcG9pbnRzXG4qL1xudmFyIG9mZnNldCA9IGV4cG9ydHMub2Zmc2V0ID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICB2YXIgb2Zmc2V0ID0ge307XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gYikge1xuICAgICAgICBpZiAoYi5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICBvZmZzZXRba2V5XSA9ICgwLCBfdXRpbHMuaGFzUHJvcGVydHkpKGEsIGtleSkgPyBiW2tleV0gLSBhW2tleV0gOiAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9mZnNldDtcbn07XG5cbi8qXG4gICAgUG9pbnQgZnJvbSBhbmdsZSBhbmQgZGlzdGFuY2VcbiAgICBcbiAgICBAcGFyYW0gW29iamVjdF06IDJEIHBvaW50IG9mIG9yaWdpblxuICAgIEBwYXJhbSBbbnVtYmVyXTogQW5nbGUgZnJvbSBvcmlnaW5cbiAgICBAcGFyYW0gW251bWJlcl06IERpc3RhbmNlIGZyb20gb3JpZ2luXG4gICAgQHJldHVybiBbb2JqZWN0XTogQ2FsY3VsYXRlZCAyRCBwb2ludFxuKi9cbnZhciBwb2ludEZyb21BbmdsZUFuZERpc3RhbmNlID0gZXhwb3J0cy5wb2ludEZyb21BbmdsZUFuZERpc3RhbmNlID0gZnVuY3Rpb24gKG9yaWdpbiwgYW5nbGUsIGRpc3RhbmNlKSB7XG4gICAgYW5nbGUgPSBkZWdyZWVzVG9SYWRpYW5zKGFuZ2xlKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHg6IGRpc3RhbmNlICogTWF0aC5jb3MoYW5nbGUpICsgb3JpZ2luLngsXG4gICAgICAgIHk6IGRpc3RhbmNlICogTWF0aC5zaW4oYW5nbGUpICsgb3JpZ2luLnlcbiAgICB9O1xufTtcblxuLypcbiAgICBDb252ZXJ0IHJhZGlhbnMgdG8gZGVncmVlc1xuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgaW4gcmFkaWFuc1xuICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGluIGRlZ3JlZXNcbiovXG52YXIgcmFkaWFuc1RvRGVncmVlcyA9IGV4cG9ydHMucmFkaWFuc1RvRGVncmVlcyA9IGZ1bmN0aW9uIChyYWRpYW5zKSB7XG4gICAgcmV0dXJuIHJhZGlhbnMgKiAxODAgLyBNYXRoLlBJO1xufTtcblxuLypcbiAgICBSZXR1cm4gcmFuZG9tIG51bWJlciBiZXR3ZWVuIHJhbmdlXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IE91dHB1dCBtaW5pbXVtXG4gICAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IE91dHB1dCBtYXhpbXVtXG4gICAgQHJldHVybiBbbnVtYmVyXTogUmFuZG9tIG51bWJlciB3aXRoaW4gcmFuZ2UsIG9yIDAgYW5kIDEgaWYgbm9uZSBwcm92aWRlZFxuKi9cbnZhciByYW5kb20gPSBleHBvcnRzLnJhbmRvbSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbWluID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gMCA6IGFyZ3VtZW50c1swXTtcbiAgICB2YXIgbWF4ID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gMSA6IGFyZ3VtZW50c1sxXTtcbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xufTtcblxuLypcbiAgICBDYWxjdWxhdGUgcmVsYXRpdmUgdmFsdWVcbiAgICBcbiAgICBUYWtlcyB0aGUgb3BlcmF0b3IgYW5kIHZhbHVlIGZyb20gYSBzdHJpbmcsIGllIFwiKz01XCIsIGFuZCBhcHBsaWVzXG4gICAgdG8gdGhlIGN1cnJlbnQgdmFsdWUgdG8gcmVzb2x2ZSBhIG5ldyB0YXJnZXQuXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gICAgQHBhcmFtIFtzdHJpbmddOiBSZWxhdGl2ZSB2YWx1ZVxuICAgIEByZXR1cm4gW251bWJlcl06IE5ldyB2YWx1ZVxuKi9cbnZhciByZWxhdGl2ZVZhbHVlID0gZXhwb3J0cy5yZWxhdGl2ZVZhbHVlID0gZnVuY3Rpb24gKGN1cnJlbnQsIHJlbGF0aXZlKSB7XG4gICAgdmFyIG5ld1ZhbHVlID0gY3VycmVudDtcbiAgICB2YXIgZXF1YXRpb24gPSByZWxhdGl2ZS5zcGxpdCgnPScpO1xuICAgIHZhciBvcGVyYXRvciA9IGVxdWF0aW9uWzBdO1xuXG4gICAgdmFyIF9maW5kVmFsdWVBbmRVbml0ID0gKDAsIF91dGlscy5maW5kVmFsdWVBbmRVbml0KShlcXVhdGlvblsxXSk7XG5cbiAgICB2YXIgdW5pdCA9IF9maW5kVmFsdWVBbmRVbml0LnVuaXQ7XG4gICAgdmFyIHZhbHVlID0gX2ZpbmRWYWx1ZUFuZFVuaXQudmFsdWU7XG5cblxuICAgIHZhbHVlID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG5cbiAgICBzd2l0Y2ggKG9wZXJhdG9yKSB7XG4gICAgICAgIGNhc2UgJysnOlxuICAgICAgICAgICAgbmV3VmFsdWUgKz0gdmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnLSc6XG4gICAgICAgICAgICBuZXdWYWx1ZSAtPSB2YWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICcqJzpcbiAgICAgICAgICAgIG5ld1ZhbHVlICo9IHZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJy8nOlxuICAgICAgICAgICAgbmV3VmFsdWUgLz0gdmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAodW5pdCkge1xuICAgICAgICBuZXdWYWx1ZSArPSB1bml0O1xuICAgIH1cblxuICAgIHJldHVybiBuZXdWYWx1ZTtcbn07XG5cbi8qXG4gICAgUmVzdHJpY3QgdmFsdWUgdG8gcmFuZ2VcbiAgICBcbiAgICBSZXR1cm4gdmFsdWUgd2l0aGluIHRoZSByYW5nZSBvZiBsb3dlckxpbWl0IGFuZCB1cHBlckxpbWl0XG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSB0byBrZWVwIHdpdGhpbiByYW5nZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgb2YgcmFuZ2VcbiAgICBAcGFyYW0gW251bWJlcl06IFVwcGVyIGxpbWl0IG9mIHJhbmdlXG4gICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgYXMgbGltaXRlZCB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiovXG52YXIgcmVzdHJpY3QgPSBleHBvcnRzLnJlc3RyaWN0ID0gZnVuY3Rpb24gKHZhbHVlLCBtaW4sIG1heCkge1xuICAgIHJldHVybiBNYXRoLm1heChNYXRoLm1pbih2YWx1ZSwgbWF4KSwgbWluKTtcbn07XG5cbi8qXG4gICAgRnJhbWVyYXRlLWluZGVwZW5kZW50IHNtb290aGluZ1xuXG4gICAgQHBhcmFtIFtudW1iZXJdOiBOZXcgdmFsdWVcbiAgICBAcGFyYW0gW251bWJlcl06IE9sZCB2YWx1ZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb25cbiAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogU21vb3RoaW5nICgwIGlzIG5vbmUpXG4qL1xudmFyIHNtb290aCA9IGV4cG9ydHMuc21vb3RoID0gZnVuY3Rpb24gKG5ld1ZhbHVlLCBvbGRWYWx1ZSwgZHVyYXRpb24pIHtcbiAgICB2YXIgc21vb3RoaW5nID0gYXJndW1lbnRzLmxlbmd0aCA8PSAzIHx8IGFyZ3VtZW50c1szXSA9PT0gdW5kZWZpbmVkID8gMCA6IGFyZ3VtZW50c1szXTtcbiAgICByZXR1cm4gKDAsIF91dGlscy50b0RlY2ltYWwpKG9sZFZhbHVlICsgZHVyYXRpb24gKiAobmV3VmFsdWUgLSBvbGRWYWx1ZSkgLyBNYXRoLm1heChzbW9vdGhpbmcsIGR1cmF0aW9uKSk7XG59O1xuXG4vKlxuICAgIENvbnZlcnQgeCBwZXIgc2Vjb25kIHRvIHBlciBmcmFtZSB2ZWxvY2l0eSBiYXNlZCBvbiBmcHNcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFVuaXQgcGVyIHNlY29uZFxuICAgIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb24gaW4gbXNcbiovXG52YXIgc3BlZWRQZXJGcmFtZSA9IGV4cG9ydHMuc3BlZWRQZXJGcmFtZSA9IGZ1bmN0aW9uICh4cHMsIGZyYW1lRHVyYXRpb24pIHtcbiAgICByZXR1cm4gKDAsIF91dGlscy5pc051bSkoeHBzKSA/IHhwcyAvICgxMDAwIC8gZnJhbWVEdXJhdGlvbikgOiAwO1xufTtcblxuLypcbiAgICBDb252ZXJ0IHZlbG9jaXR5IGludG8gdmVsaWNpdHkgcGVyIHNlY29uZFxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVW5pdCBwZXIgZnJhbWVcbiAgICBAcGFyYW0gW251bWJlcl06IEZyYW1lIGR1cmF0aW9uIGluIG1zXG4qL1xudmFyIHNwZWVkUGVyU2Vjb25kID0gZXhwb3J0cy5zcGVlZFBlclNlY29uZCA9IGZ1bmN0aW9uICh2ZWxvY2l0eSwgZnJhbWVEdXJhdGlvbikge1xuICAgIHJldHVybiB2ZWxvY2l0eSAqICgxMDAwIC8gZnJhbWVEdXJhdGlvbik7XG59O1xuXG4vKlxuICAgIENyZWF0ZSBzdGVwcGVkIHZlcnNpb24gb2YgMC0xIHByb2dyZXNzXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gICAgQHBhcmFtIFtpbnRdOiBOdW1iZXIgb2Ygc3RlcHNcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBTdGVwcGVkIHZhbHVlXG4qL1xudmFyIHN0ZXBQcm9ncmVzcyA9IGV4cG9ydHMuc3RlcFByb2dyZXNzID0gZnVuY3Rpb24gKHByb2dyZXNzLCBzdGVwcykge1xuICAgIHZhciBzZWdtZW50ID0gMSAvIChzdGVwcyAtIDEpO1xuICAgIHZhciB0YXJnZXQgPSAxIC0gMSAvIHN0ZXBzO1xuICAgIHZhciBwcm9ncmVzc09mVGFyZ2V0ID0gTWF0aC5taW4ocHJvZ3Jlc3MgLyB0YXJnZXQsIDEpO1xuXG4gICAgcmV0dXJuIE1hdGguZmxvb3IocHJvZ3Jlc3NPZlRhcmdldCAvIHNlZ21lbnQpICogc2VnbWVudDtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12WTJGc1l5NXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3p0QlFVRkJPenRCUVU5QkxFbEJRVTBzWVVGQllUdEJRVU5tTEU5QlFVY3NRMEZCU0R0QlFVTkJMRTlCUVVjc1EwRkJTRHRCUVVOQkxFOUJRVWNzUTBGQlNEdERRVWhGT3p0QlFVMU9MRWxCUVUwc1lVRkJZU3hWUVVGRExFTkJRVVFzUlVGQlNTeERRVUZLTzFkQlFWVXNTMEZCU3l4SFFVRk1MRU5CUVZNc1NVRkJTU3hEUVVGS08wTkJRVzVDT3pzN096czdPenM3T3pzN1FVRlpXaXhKUVVGTkxIZENRVUZSTEZWQlFVTXNRMEZCUkR0UlFVRkpMREJFUVVGSk8xZEJRV1VzYVVKQlFXbENMRXRCUVVzc1MwRkJUQ3hEUVVGWExFVkJRVVVzUTBGQlJpeEhRVUZOTEVWQlFVVXNRMEZCUml4RlFVRkxMRVZCUVVVc1EwRkJSaXhIUVVGTkxFVkJRVVVzUTBGQlJpeERRVUUzUXp0RFFVRjJRanM3T3pzN096czdRVUZSWkN4SlFVRk5MRGhEUVVGdFFpeFZRVUZETEU5QlFVUTdWMEZCWVN4VlFVRlZMRXRCUVVzc1JVRkJUQ3hIUVVGVkxFZEJRWEJDTzBOQlFXSTdPenM3T3pzN096czdPenM3T3pzN096czdPMEZCYjBKNlFpeEpRVUZOTERCQ1FVRlRMRlZCUVVNc1EwRkJSQ3hGUVVGSkxFTkJRVW9zUlVGQlR5eFJRVUZRTzFkQlFXOUNMRWxCUVVzc1EwRkJReXhKUVVGSkxFTkJRVW9zUTBGQlJDeEhRVUZWTEZGQlFWWTdRMEZCZWtJN096czdPenM3T3pzN08wRkJWMllzU1VGQlRTdzRRa0ZCVnl4VlFVRkRMRU5CUVVRc1JVRkJkVUk3VVVGQmJrSXNNRVJCUVVrc01FSkJRV1U3T3p0QlFVVXpReXhSUVVGSkxHdENRVUZOTEVOQlFVNHNRMEZCU2l4RlFVRmpPMEZCUTFZc1pVRkJUeXhYUVVGWExFTkJRVmdzUlVGQll5eERRVUZrTEVOQlFWQTdPenRCUVVSVkxFdEJRV1FzVFVGSlR6dEJRVU5JTEdkQ1FVRk5MRk5CUVZNc1YwRkJWeXhGUVVGRkxFTkJRVVlzUlVGQlN5eEZRVUZGTEVOQlFVWXNRMEZCZWtJc1EwRkVTRHRCUVVWSUxHZENRVUZOTEZOQlFWTXNWMEZCVnl4RlFVRkZMRU5CUVVZc1JVRkJTeXhGUVVGRkxFTkJRVVlzUTBGQmVrSXNRMEZHU0R0QlFVZElMR2RDUVVGTkxGTkJRVk1zYVVKQlFVTXNRMEZCVFN4RlFVRkZMRU5CUVVZc1EwRkJVQ3hIUVVGbExGZEJRVmNzUlVGQlJTeERRVUZHTEVWQlFVc3NSVUZCUlN4RFFVRkdMRU5CUVM5Q0xFZEJRWE5ETEVOQlFYUkRMRU5CU0ZvN08wRkJTMGdzYlVKQlFVOHNTMEZCU3l4SlFVRk1MRU5CUVZVc1UwRkJReXhSUVVGVkxFVkJRVmdzV1VGQmFVSXNVVUZCVlN4RlFVRXpRaXhaUVVGcFF5eFJRVUZWTEVWQlFUTkRMRU5CUVdwQ0xFTkJURWM3VTBGS1VEdERRVVp2UWpzN096czdPenM3T3pzN08wRkJlVUpxUWl4SlFVRk5MSE5DUVVGUExGVkJRVU1zVVVGQlJDeEZRVUZYTEVsQlFWZ3NSVUZCYVVJc1JVRkJha0lzUlVGQmNVSXNTVUZCY2tJc1JVRkJPRUk3UVVGRE9VTXNVVUZCVFN4clFrRkJhMElzVTBGQlV5eFJRVUZVTEVWQlFXMUNMRU5CUVc1Q0xFVkJRWE5DTEVOQlFYUkNMRU5CUVd4Q0xFTkJSSGRETzBGQlJUbERMRkZCUVUwc1owSkJRV2RDTEV0QlFVc3NaVUZCVEN4RFFVRm9RaXhEUVVaM1F6czdRVUZKT1VNc1YwRkJUeXh4UWtGQmNVSXNZVUZCY2tJc1JVRkJiME1zU1VGQmNFTXNSVUZCTUVNc1JVRkJNVU1zUTBGQlVDeERRVW80UXp0RFFVRTVRanM3T3pzN096czdPenM3UVVGblFtSXNTVUZCVFN4clEwRkJZU3hWUVVGRExFTkJRVVFzUlVGQlNTeERRVUZLTzFkQlFWVXNTMEZCU3l4SlFVRk1MRU5CUVZVc1EwRkJReXhIUVVGSkxFTkJRVW9zUjBGQlZTeEpRVUZKTEVOQlFVbzdRMEZCTDBJN096czdPenM3T3pzN096czdRVUZoYmtJc1NVRkJUU3h6UkVGQmRVSXNWVUZCUXl4UlFVRkVMRVZCUVZjc1NVRkJXQ3hGUVVGcFFpeEZRVUZxUWp0WFFVRjNRaXhEUVVGSExGRkJRVVlzUjBGQllTeEpRVUZpTEVkQlFYTkNMRmRCUVZjc1JVRkJXQ3hIUVVGcFFpeEpRVUY0UXp0RFFVRjRRanM3T3pzN096czdPenM3T3pzN1FVRmpOMElzU1VGQlRTeHpSRUZCZFVJc1ZVRkJReXhMUVVGRUxFVkJRVkVzU1VGQlVpeEZRVUZqTEVWQlFXUTdWMEZCY1VJc1EwRkJReXhSUVVGUkxFbEJRVklzUTBGQlJDeEpRVUZyUWl4TFFVRkxMRWxCUVV3c1EwRkJiRUk3UTBGQmNrSTdPenM3T3pzN096czdPMEZCVnpkQ0xFbEJRVTBzTUVKQlFWTXNWVUZCUXl4RFFVRkVMRVZCUVVrc1EwRkJTaXhGUVVGVk8wRkJRelZDTEZGQlFVMHNVMEZCVXl4RlFVRlVMRU5CUkhOQ096dEJRVWMxUWl4VFFVRkxMRWxCUVVrc1IwRkJTaXhKUVVGWExFTkJRV2hDTEVWQlFXMUNPMEZCUTJZc1dVRkJTU3hGUVVGRkxHTkJRVVlzUTBGQmFVSXNSMEZCYWtJc1EwRkJTaXhGUVVFeVFqdEJRVU4yUWl4dFFrRkJUeXhIUVVGUUxFbEJRV01zZDBKQlFWa3NRMEZCV2l4RlFVRmxMRWRCUVdZc1NVRkJjMElzUlVGQlJTeEhRVUZHTEVsQlFWTXNSVUZCUlN4SFFVRkdMRU5CUVZRc1IwRkJhMElzUTBGQmVFTXNRMEZFVXp0VFFVRXpRanRMUVVSS096dEJRVTFCTEZkQlFVOHNUVUZCVUN4RFFWUTBRanREUVVGV096czdPenM3T3pzN08wRkJiMEptTEVsQlFVMHNaMFZCUVRSQ0xGVkJRVU1zVFVGQlJDeEZRVUZUTEV0QlFWUXNSVUZCWjBJc1VVRkJhRUlzUlVGQk5rSTdRVUZEYkVVc1dVRkJVU3hwUWtGQmFVSXNTMEZCYWtJc1EwRkJVaXhEUVVSclJUczdRVUZIYkVVc1YwRkJUenRCUVVOSUxGZEJRVWNzVjBGQlZ5eExRVUZMTEVkQlFVd3NRMEZCVXl4TFFVRlVMRU5CUVZnc1IwRkJOa0lzVDBGQlR5eERRVUZRTzBGQlEyaERMRmRCUVVjc1YwRkJWeXhMUVVGTExFZEJRVXdzUTBGQlV5eExRVUZVTEVOQlFWZ3NSMEZCTmtJc1QwRkJUeXhEUVVGUU8wdEJSbkJETEVOQlNHdEZPME5CUVRkQ096czdPenM3T3p0QlFXVnNReXhKUVVGTkxEaERRVUZ0UWl4VlFVRkRMRTlCUVVRN1YwRkJZU3hWUVVGVkxFZEJRVllzUjBGQlowSXNTMEZCU3l4RlFVRk1PME5CUVRkQ096czdPenM3T3pzN1FVRlRla0lzU1VGQlRTd3dRa0ZCVXp0UlFVRkRMRFJFUVVGTk8xRkJRVWNzTkVSQlFVMDdWMEZCVFN4TFFVRkxMRTFCUVV3c1RVRkJhVUlzVFVGQlRTeEhRVUZPTEVOQlFXcENMRWRCUVRoQ0xFZEJRVGxDTzBOQlFYUkNPenM3T3pzN096czdPenM3UVVGWlppeEpRVUZOTEhkRFFVRm5RaXhWUVVGRExFOUJRVVFzUlVGQlZTeFJRVUZXTEVWQlFYVkNPMEZCUTJoRUxGRkJRVWtzVjBGQlZ5eFBRVUZZTEVOQlJEUkRPMEZCUldoRUxGRkJRVTBzVjBGQlZ5eFRRVUZUTEV0QlFWUXNRMEZCWlN4SFFVRm1MRU5CUVZnc1EwRkdNRU03UVVGSGFFUXNVVUZCVFN4WFFVRlhMRk5CUVZNc1EwRkJWQ3hEUVVGWUxFTkJTREJET3pzMFFrRkpNVUlzTmtKQlFXbENMRk5CUVZNc1EwRkJWQ3hEUVVGcVFpeEZRVW93UWpzN1VVRkpNVU1zT0VKQlNqQkRPMUZCU1hCRExHZERRVXB2UXpzN08wRkJUV2hFTEZsQlFWRXNWMEZCVnl4TFFVRllMRU5CUVZJc1EwRk9aMFE3TzBGQlVXaEVMRmxCUVZFc1VVRkJVanRCUVVOQkxHRkJRVXNzUjBGQlREdEJRVU5KTEhkQ1FVRlpMRXRCUVZvc1EwRkVTanRCUVVWSkxHdENRVVpLTzBGQlJFRXNZVUZKU3l4SFFVRk1PMEZCUTBrc2QwSkJRVmtzUzBGQldpeERRVVJLTzBGQlJVa3NhMEpCUmtvN1FVRktRU3hoUVU5TExFZEJRVXc3UVVGRFNTeDNRa0ZCV1N4TFFVRmFMRU5CUkVvN1FVRkZTU3hyUWtGR1NqdEJRVkJCTEdGQlZVc3NSMEZCVER0QlFVTkpMSGRDUVVGWkxFdEJRVm9zUTBGRVNqdEJRVVZKTEd0Q1FVWktPMEZCVmtFc1MwRlNaMFE3TzBGQmRVSm9SQ3hSUVVGSkxFbEJRVW9zUlVGQlZUdEJRVU5PTEc5Q1FVRlpMRWxCUVZvc1EwRkVUVHRMUVVGV096dEJRVWxCTEZkQlFVOHNVVUZCVUN4RFFUTkNaMFE3UTBGQmRrSTdPenM3T3pzN096czdPenRCUVhkRGRFSXNTVUZCVFN3NFFrRkJWeXhWUVVGRExFdEJRVVFzUlVGQlVTeEhRVUZTTEVWQlFXRXNSMEZCWWp0WFFVRnhRaXhMUVVGTExFZEJRVXdzUTBGQlV5eExRVUZMTEVkQlFVd3NRMEZCVXl4TFFVRlVMRVZCUVdkQ0xFZEJRV2hDTEVOQlFWUXNSVUZCSzBJc1IwRkJMMEk3UTBGQmNrSTdPenM3T3pzN096czdRVUZWYWtJc1NVRkJUU3d3UWtGQlV5eFZRVUZETEZGQlFVUXNSVUZCVnl4UlFVRllMRVZCUVhGQ0xGRkJRWEpDTzFGQlFTdENMR3RGUVVGWk8xZEJRVTBzYzBKQlFWVXNWMEZCV1N4WlFVRlpMRmRCUVZjc1VVRkJXQ3hEUVVGYUxFZEJRVzFETEV0QlFVc3NSMEZCVEN4RFFVRlRMRk5CUVZRc1JVRkJiMElzVVVGQmNFSXNRMEZCYmtNN1EwRkJka1U3T3pzN096czdPMEZCVVdZc1NVRkJUU3gzUTBGQlowSXNWVUZCUXl4SFFVRkVMRVZCUVUwc1lVRkJUanRYUVVGM1FpeHBRa0ZCUXl4RFFVRk5MRWRCUVU0c1EwRkJSQ3hIUVVGbExFOUJRVThzVDBGQlR5eGhRVUZRTEVOQlFWQXNSMEZCSzBJc1EwRkJPVU03UTBGQmVFSTdPenM3T3pzN08wRkJVWFJDTEVsQlFVMHNNRU5CUVdsQ0xGVkJRVU1zVVVGQlJDeEZRVUZYTEdGQlFWZzdWMEZCTmtJc1dVRkJXU3hQUVVGUExHRkJRVkFzUTBGQldqdERRVUUzUWpzN096czdPenM3TzBGQlUzWkNMRWxCUVUwc2MwTkJRV1VzVlVGQlF5eFJRVUZFTEVWQlFWY3NTMEZCV0N4RlFVRnhRanRCUVVNM1F5eFJRVUZOTEZWQlFWVXNTMEZCU3l4UlFVRlJMRU5CUVZJc1EwRkJUQ3hEUVVRMlFqdEJRVVUzUXl4UlFVRk5MRk5CUVZNc1NVRkJTeXhKUVVGSkxFdEJRVW9zUTBGR2VVSTdRVUZITjBNc1VVRkJUU3h0UWtGQmJVSXNTMEZCU3l4SFFVRk1MRU5CUVZNc1YwRkJWeXhOUVVGWUxFVkJRVzFDTEVOQlFUVkNMRU5CUVc1Q0xFTkJTSFZET3p0QlFVczNReXhYUVVGUExFdEJRVXNzUzBGQlRDeERRVUZYTEcxQ1FVRnRRaXhQUVVGdVFpeERRVUZZTEVkQlFYbERMRTlCUVhwRExFTkJUSE5ETzBOQlFYSkNJaXdpWm1sc1pTSTZJbU5oYkdNdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUXZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElIdGNiaUFnSUNCb1lYTlFjbTl3WlhKMGVTeGNiaUFnSUNCcGMwNTFiU3hjYmlBZ0lDQm1hVzVrVm1Gc2RXVkJibVJWYm1sMExGeHVJQ0FnSUhSdlJHVmphVzFoYkZ4dWZTQm1jbTl0SUNjdUwzVjBhV3h6Snp0Y2JseHVZMjl1YzNRZ1drVlNUMTlRVDBsT1ZDQTlJSHRjYmlBZ0lDQjRPaUF3TEZ4dUlDQWdJSGs2SURBc1hHNGdJQ0FnZWpvZ01GeHVmVHRjYmx4dVkyOXVjM1FnWkdsemRHRnVZMlV4UkNBOUlDaGhMQ0JpS1NBOVBpQk5ZWFJvTG1GaWN5aGhJQzBnWWlrN1hHNWNiaThxWEc0Z0lDQWdRVzVuYkdVZ1ltVjBkMlZsYmlCd2IybHVkSE5jYmlBZ0lDQmNiaUFnSUNCVWNtRnVjMnhoZEdWeklIUm9aU0JvZVhCdmRHaGxkR2xqWVd3Z2JHbHVaU0J6YnlCMGFHRjBJSFJvWlNBblpuSnZiU2NnWTI5dmNtUnBibUYwWlhOY2JpQWdJQ0JoY21VZ1lYUWdNQ3d3WEc0Z0lDQWdYRzRnSUNBZ1FIQmhjbUZ0SUZ0dlltcGxZM1JkT2lCWUlHRnVaQ0JaSUdOdmIzSmthVzVoZEdWeklHOW1JR1p5YjIwZ2NHOXBiblJjYmlBZ0lDQkFjR0Z5WVcwZ1cyOWlhbVZqZEYwNklGZ2dZVzVrSUZrZ1kyOXlaR2x1WVhSbGN5QnZaaUIwYnlCd2IybHVkRnh1SUNBZ0lFQnlaWFIxY200Z1czSmhaR2xoYmwwNklFRnVaMnhsSUdKbGRIZGxaVzRnZEdobElIUjNieUJ3YjJsdWRITWdhVzRnY21Ga2FXRnVjMXh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JoYm1kc1pTQTlJQ2hoTENCaUlEMGdXa1ZTVDE5UVQwbE9WQ2tnUFQ0Z2NtRmthV0Z1YzFSdlJHVm5jbVZsY3loTllYUm9MbUYwWVc0eUtHRXVlQ0F0SUdJdWVDd2dZUzU1SUMwZ1lpNTVLU2s3WEc1Y2JpOHFYRzRnSUNBZ1EyOXVkbVZ5ZENCa1pXZHlaV1Z6SUhSdklISmhaR2xoYm5OY2JpQWdJQ0JjYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklGWmhiSFZsSUdsdUlHUmxaM0psWlhOY2JpQWdJQ0JBY21WMGRYSnVJRnR1ZFcxaVpYSmRPaUJXWVd4MVpTQnBiaUJ5WVdScFlXNXpYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR1JsWjNKbFpYTlViMUpoWkdsaGJuTWdQU0FvWkdWbmNtVmxjeWtnUFQ0Z1pHVm5jbVZsY3lBcUlFMWhkR2d1VUVrZ0x5QXhPREE3WEc1Y2JpOHFYRzRnSUNBZ1JHbHNZWFJsWEc0Z0lDQWdYRzRnSUNBZ1EyaGhibWRsSUhSb1pTQndjbTluY21WemMybHZiaUJpWlhSM1pXVnVJR0VnWVc1a0lHSWdZV05qYjNKa2FXNW5JSFJ2SUdScGJHRjBhVzl1TGx4dUlDQWdJRnh1SUNBZ0lGTnZJR1JwYkdGMGFXOXVJRDBnTUM0MUlIZHZkV3hrSUdOb1lXNW5aVnh1SUNBZ0lGeHVJQ0FnSUdFZ0xTMHRMUzB0TFMwdElHSmNiaUFnSUNCY2JpQWdJQ0IwYjF4dUlDQWdJRnh1SUNBZ0lHRWdMUzB0TFNCaVhHNGdJQ0FnWEc0Z0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQlFjbVYyYVc5MWN5QjJZV3gxWlZ4dUlDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dRM1Z5Y21WdWRDQjJZV3gxWlZ4dUlDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dSR2xzWVhSbElIQnliMmR5WlhOeklHSjVJSGhjYmlBZ0lDQkFjbVYwZFhKdUlGdHVkVzFpWlhKZE9pQlFjbVYyYVc5MWN5QjJZV3gxWlNCd2JIVnpJSFJvWlNCa2FXeGhkR1ZrSUdScFptWmxjbVZ1WTJWY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ1pHbHNZWFJsSUQwZ0tHRXNJR0lzSUdScGJHRjBhVzl1S1NBOVBpQmhJQ3NnS0NoaUlDMGdZU2tnS2lCa2FXeGhkR2x2YmlrN1hHNWNiaThxWEc0Z0lDQWdSR2x6ZEdGdVkyVmNiaUFnSUNCY2JpQWdJQ0JTWlhSMWNtNXpJSFJvWlNCa2FYTjBZVzVqWlNCaVpYUjNaV1Z1SUhSM2J5QnVJR1JwYldWdWMybHZibUZzSUhCdmFXNTBjeTVjYmlBZ0lDQmNiaUFnSUNCQWNHRnlZVzBnVzI5aWFtVmpkQzl1ZFcxaVpYSmRPaUI0SUdGdVpDQjVJRzl5SUdwMWMzUWdlQ0J2WmlCd2IybHVkQ0JCWEc0Z0lDQWdRSEJoY21GdElGdHZZbXBsWTNRdmJuVnRZbVZ5WFRvZ0tHOXdkR2x2Ym1Gc0tUb2dlQ0JoYm1RZ2VTQnZjaUJxZFhOMElIZ2diMllnY0c5cGJuUWdRbHh1SUNBZ0lFQnlaWFIxY200Z1cyNTFiV0psY2wwNklGUm9aU0JrYVhOMFlXNWpaU0JpWlhSM1pXVnVJSFJvWlNCMGQyOGdjRzlwYm5SelhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHUnBjM1JoYm1ObElEMGdLR0VzSUdJZ1BTQmFSVkpQWDFCUFNVNVVLU0E5UGlCN1hHNGdJQ0FnTHk4Z01VUWdaR2x0Wlc1emFXOXVjMXh1SUNBZ0lHbG1JQ2hwYzA1MWJTaGhLU2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnWkdsemRHRnVZMlV4UkNoaExDQmlLVHRjYmx4dUlDQWdJQzh2SUUxMWJIUnBMV1JwYldWdWMybHZibUZzWEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2VFUmxiSFJoSUQwZ1pHbHpkR0Z1WTJVeFJDaGhMbmdzSUdJdWVDazdYRzRnSUNBZ0lDQWdJR052Ym5OMElIbEVaV3gwWVNBOUlHUnBjM1JoYm1ObE1VUW9ZUzU1TENCaUxua3BPMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQjZSR1ZzZEdFZ1BTQW9hWE5PZFcwb1lTNTZLU2tnUHlCa2FYTjBZVzVqWlRGRUtHRXVlaXdnWWk1NktTQTZJREE3WEc1Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUUxaGRHZ3VjM0Z5ZENnb2VFUmxiSFJoSUNvcUlESXBJQ3NnS0hsRVpXeDBZU0FxS2lBeUtTQXJJQ2g2UkdWc2RHRWdLaW9nTWlrcE8xeHVJQ0FnSUgxY2JuMDdYRzVjYmk4cVhHNGdJQ0FnUldGelpTQjJZV3gxWlNCM2FYUm9hVzRnY21GdVoyVmtJSEJoY21GdFpYUmxjbk5jYmlBZ0lDQmNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZCeWIyZHlaWE56SUdKbGRIZGxaVzRnTUNCaGJtUWdNVnh1SUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1ZtRnNkV1VnYjJZZ01DQndjbTluY21WemMxeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVm1Gc2RXVWdiMllnTVNCd2NtOW5jbVZ6YzF4dUlDQWdJRUJ3WVhKaGJTQmJjM1J5YVc1bklIeDhJR1oxYm1OMGFXOXVYVG9nVG1GdFpTQnZaaUJ3Y21WelpYUWdaV0Z6YVc1blhHNGdJQ0FnSUNBZ0lIUnZJSFZ6WlNCdmNpQm5aVzVsY21GMFpXUWdaV0Z6YVc1bklHWjFibU4wYVc5dVhHNGdJQ0FnUUhKbGRIVnliaUJiYm5WdFltVnlYVG9nVm1Gc2RXVWdiMllnWldGelpXUWdjSEp2WjNKbGMzTWdhVzRnY21GdVoyVmNiaW92SUZ4dVpYaHdiM0owSUdOdmJuTjBJR1ZoYzJVZ1BTQW9jSEp2WjNKbGMzTXNJR1p5YjIwc0lIUnZMQ0JsWVhObEtTQTlQaUI3WEc0Z0lDQWdZMjl1YzNRZ2NISnZaM0psYzNOTWFXMXBkR1ZrSUQwZ2NtVnpkSEpwWTNRb2NISnZaM0psYzNNc0lEQXNJREVwTzF4dUlDQWdJR052Ym5OMElHVmhjMlZrVUhKdlozSmxjM01nUFNCbFlYTmxLSEJ5YjJkeVpYTnpUR2x0YVhSbFpDazdYRzVjYmlBZ0lDQnlaWFIxY200Z1oyVjBWbUZzZFdWR2NtOXRVSEp2WjNKbGMzTW9aV0Z6WldSUWNtOW5jbVZ6Y3l3Z1puSnZiU3dnZEc4cE8xeHVmVHRjYmlCY2JpOHFYRzRnSUNBZ1NIbHdiM1JsYm5WelpWeHVJQ0FnSUZ4dUlDQWdJRkpsZEhWeWJuTWdkR2hsSUdoNWNHOTBaVzUxYzJVc0lITnBaR1VnUXl3Z1oybDJaVzRnZEdobElHeGxibWQwYUhNZ2IyWWdjMmxrWlhNZ1FTQmhibVFnUWk1Y2JpQWdJQ0JjYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklFeGxibWQwYUNCdlppQkJYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCTVpXNW5kR2dnYjJZZ1FseHVJQ0FnSUVCeVpYUjFjbTRnVzI1MWJXSmxjbDA2SUV4bGJtZDBhQ0J2WmlCRFhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHaDVjRzkwWlc1MWMyVWdQU0FvWVN3Z1lpa2dQVDRnVFdGMGFDNXpjWEowS0NoaElDb2dZU2tnS3lBb1lpQXFJR0lwS1R0Y2JseHVMeXBjYmlBZ0lDQldZV3gxWlNCcGJpQnlZVzVuWlNCbWNtOXRJSEJ5YjJkeVpYTnpYRzRnSUNBZ1hHNGdJQ0FnUjJsMlpXNGdZU0JzYjNkbGNpQnNhVzFwZENCaGJtUWdZVzRnZFhCd1pYSWdiR2x0YVhRc0lIZGxJSEpsZEhWeWJpQjBhR1VnZG1Gc2RXVWdkMmwwYUdsdVhHNGdJQ0FnZEdoaGRDQnlZVzVuWlNCaGN5QmxlSEJ5WlhOelpXUWdZbmtnY0hKdlozSmxjM01nS0dFZ2JuVnRZbVZ5SUdaeWIyMGdNQzB4S1Z4dUlDQWdJRnh1SUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1ZHaGxJSEJ5YjJkeVpYTnpJR0psZEhkbFpXNGdiRzkzWlhJZ1lXNWtJSFZ3Y0dWeUlHeHBiV2wwY3lCbGVIQnlaWE56WldRZ01DMHhYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCTWIzZGxjaUJzYVcxcGRDQnZaaUJ5WVc1blpWeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVlhCd1pYSWdiR2x0YVhRZ2IyWWdjbUZ1WjJWY2JpQWdJQ0JBY21WMGRYSnVJRnR1ZFcxaVpYSmRPaUJXWVd4MVpTQmhjeUJqWVd4amRXeGhkR1ZrSUdaeWIyMGdjSEp2WjNKbGMzTWdkMmwwYUdsdUlISmhibWRsSUNodWIzUWdiR2x0YVhSbFpDQjNhWFJvYVc0Z2NtRnVaMlVwWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdkbGRGWmhiSFZsUm5KdmJWQnliMmR5WlhOeklEMGdLSEJ5YjJkeVpYTnpMQ0JtY205dExDQjBieWtnUFQ0Z0tDMGdjSEp2WjNKbGMzTWdLaUJtY205dEtTQXJJQ2h3Y205bmNtVnpjeUFxSUhSdktTQXJJR1p5YjIwN1hHNWNiaThxWEc0Z0lDQWdVSEp2WjNKbGMzTWdkMmwwYUdsdUlHZHBkbVZ1SUhKaGJtZGxYRzRnSUNBZ1hHNGdJQ0FnUjJsMlpXNGdZU0JzYjNkbGNpQnNhVzFwZENCaGJtUWdZVzRnZFhCd1pYSWdiR2x0YVhRc0lIZGxJSEpsZEhWeWJpQjBhR1VnY0hKdlozSmxjM05jYmlBZ0lDQW9aWGh3Y21WemMyVmtJR0Z6SUdFZ2JuVnRZbVZ5SURBdE1Ta2djbVZ3Y21WelpXNTBaV1FnWW5rZ2RHaGxJR2RwZG1WdUlIWmhiSFZsTENCaGJtUmNiaUFnSUNCc2FXMXBkQ0IwYUdGMElIQnliMmR5WlhOeklIUnZJSGRwZEdocGJpQXdMVEV1WEc0Z0lDQWdYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCV1lXeDFaU0IwYnlCbWFXNWtJSEJ5YjJkeVpYTnpJSGRwZEdocGJpQm5hWFpsYmlCeVlXNW5aVnh1SUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1RHOTNaWElnYkdsdGFYUWdYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCVmNIQmxjaUJzYVcxcGRGeHVJQ0FnSUVCeVpYUjFjbTRnVzI1MWJXSmxjbDA2SUZCeWIyZHlaWE56SUc5bUlIWmhiSFZsSUhkcGRHaHBiaUJ5WVc1blpTQmhjeUJsZUhCeVpYTnpaV1FnTUMweFhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHZGxkRkJ5YjJkeVpYTnpSbkp2YlZaaGJIVmxJRDBnS0haaGJIVmxMQ0JtY205dExDQjBieWtnUFQ0Z0tIWmhiSFZsSUMwZ1puSnZiU2tnTHlBb2RHOGdMU0JtY205dEtUdGNibHh1THlwY2JpQWdJQ0JQWm1aelpYUWdZbVYwZDJWbGJpQjBkMjhnYjJKcVpXTjBjeUJ2WmlCdWRXMWlaWEp6WEc1Y2JpQWdJQ0JKWmlCd2NtOXdaWEowZVNCcGN5Qm1iM1Z1WkNCcGJpQmlJRzV2ZENCd2NtVnpaVzUwSUdsdUlHRXNJR2wwSUhkcGJHd2djbVYwZFhKdUlHQXdZQ0JtYjNJZ2RHaGhkQ0J3Y205d0xseHVJQ0FnSUZ4dUlDQWdJRUJ3WVhKaGJTQmJVRzlwYm5SZE9pQkdhWEp6ZENCdlltcGxZM1JjYmlBZ0lDQkFjR0Z5WVcwZ1cxQnZhVzUwWFRvZ1UyVmpiMjVrSUc5aWFtVmpkRnh1SUNBZ0lFQnlaWFIxY200Z1cwOW1abk5sZEYwNklFUnBjM1JoYm1ObElHMWxkSEpwWTNNZ1ltVjBkMlZsYmlCMGQyOGdjRzlwYm5SelhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHOW1abk5sZENBOUlDaGhMQ0JpS1NBOVBpQjdYRzRnSUNBZ1kyOXVjM1FnYjJabWMyVjBJRDBnZTMwN1hHNWNiaUFnSUNCbWIzSWdLR3hsZENCclpYa2dhVzRnWWlrZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvWWk1b1lYTlBkMjVRY205d1pYSjBlU2hyWlhrcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCdlptWnpaWFJiYTJWNVhTQTlJR2hoYzFCeWIzQmxjblI1S0dFc0lHdGxlU2tnUHlCaVcydGxlVjBnTFNCaFcydGxlVjBnT2lBd08xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NtVjBkWEp1SUc5bVpuTmxkRHRjYm4wN1hHNWNiaThxWEc0Z0lDQWdVRzlwYm5RZ1puSnZiU0JoYm1kc1pTQmhibVFnWkdsemRHRnVZMlZjYmlBZ0lDQmNiaUFnSUNCQWNHRnlZVzBnVzI5aWFtVmpkRjA2SURKRUlIQnZhVzUwSUc5bUlHOXlhV2RwYmx4dUlDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dRVzVuYkdVZ1puSnZiU0J2Y21sbmFXNWNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUVScGMzUmhibU5sSUdaeWIyMGdiM0pwWjJsdVhHNGdJQ0FnUUhKbGRIVnliaUJiYjJKcVpXTjBYVG9nUTJGc1kzVnNZWFJsWkNBeVJDQndiMmx1ZEZ4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCd2IybHVkRVp5YjIxQmJtZHNaVUZ1WkVScGMzUmhibU5sSUQwZ0tHOXlhV2RwYml3Z1lXNW5iR1VzSUdScGMzUmhibU5sS1NBOVBpQjdYRzRnSUNBZ1lXNW5iR1VnUFNCa1pXZHlaV1Z6Vkc5U1lXUnBZVzV6S0dGdVoyeGxLVHRjYmx4dUlDQWdJSEpsZEhWeWJpQjdYRzRnSUNBZ0lDQWdJSGc2SUdScGMzUmhibU5sSUNvZ1RXRjBhQzVqYjNNb1lXNW5iR1VwSUNzZ2IzSnBaMmx1TG5nc1hHNGdJQ0FnSUNBZ0lIazZJR1JwYzNSaGJtTmxJQ29nVFdGMGFDNXphVzRvWVc1bmJHVXBJQ3NnYjNKcFoybHVMbmxjYmlBZ0lDQjlPMXh1ZlR0Y2JseHVMeXBjYmlBZ0lDQkRiMjUyWlhKMElISmhaR2xoYm5NZ2RHOGdaR1ZuY21WbGMxeHVJQ0FnSUZ4dUlDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dWbUZzZFdVZ2FXNGdjbUZrYVdGdWMxeHVJQ0FnSUVCeVpYUjFjbTRnVzI1MWJXSmxjbDA2SUZaaGJIVmxJR2x1SUdSbFozSmxaWE5jYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnY21Ga2FXRnVjMVJ2UkdWbmNtVmxjeUE5SUNoeVlXUnBZVzV6S1NBOVBpQnlZV1JwWVc1eklDb2dNVGd3SUM4Z1RXRjBhQzVRU1R0Y2JseHVMeXBjYmlBZ0lDQlNaWFIxY200Z2NtRnVaRzl0SUc1MWJXSmxjaUJpWlhSM1pXVnVJSEpoYm1kbFhHNGdJQ0FnWEc0Z0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZElDaHZjSFJwYjI1aGJDazZJRTkxZEhCMWRDQnRhVzVwYlhWdFhHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRJQ2h2Y0hScGIyNWhiQ2s2SUU5MWRIQjFkQ0J0WVhocGJYVnRYRzRnSUNBZ1FISmxkSFZ5YmlCYmJuVnRZbVZ5WFRvZ1VtRnVaRzl0SUc1MWJXSmxjaUIzYVhSb2FXNGdjbUZ1WjJVc0lHOXlJREFnWVc1a0lERWdhV1lnYm05dVpTQndjbTkyYVdSbFpGeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnlZVzVrYjIwZ1BTQW9iV2x1SUQwZ01Dd2diV0Y0SUQwZ01Ta2dQVDRnVFdGMGFDNXlZVzVrYjIwb0tTQXFJQ2h0WVhnZ0xTQnRhVzRwSUNzZ2JXbHVPMXh1WEc0dktseHVJQ0FnSUVOaGJHTjFiR0YwWlNCeVpXeGhkR2wyWlNCMllXeDFaVnh1SUNBZ0lGeHVJQ0FnSUZSaGEyVnpJSFJvWlNCdmNHVnlZWFJ2Y2lCaGJtUWdkbUZzZFdVZ1puSnZiU0JoSUhOMGNtbHVaeXdnYVdVZ1hDSXJQVFZjSWl3Z1lXNWtJR0Z3Y0d4cFpYTmNiaUFnSUNCMGJ5QjBhR1VnWTNWeWNtVnVkQ0IyWVd4MVpTQjBieUJ5WlhOdmJIWmxJR0VnYm1WM0lIUmhjbWRsZEM1Y2JpQWdJQ0JjYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklFTjFjbkpsYm5RZ2RtRnNkV1ZjYmlBZ0lDQkFjR0Z5WVcwZ1czTjBjbWx1WjEwNklGSmxiR0YwYVhabElIWmhiSFZsWEc0Z0lDQWdRSEpsZEhWeWJpQmJiblZ0WW1WeVhUb2dUbVYzSUhaaGJIVmxYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJSEpsYkdGMGFYWmxWbUZzZFdVZ1BTQW9ZM1Z5Y21WdWRDd2djbVZzWVhScGRtVXBJRDArSUh0Y2JpQWdJQ0JzWlhRZ2JtVjNWbUZzZFdVZ1BTQmpkWEp5Wlc1ME8xeHVJQ0FnSUdOdmJuTjBJR1Z4ZFdGMGFXOXVJRDBnY21Wc1lYUnBkbVV1YzNCc2FYUW9KejBuS1R0Y2JpQWdJQ0JqYjI1emRDQnZjR1Z5WVhSdmNpQTlJR1Z4ZFdGMGFXOXVXekJkTzF4dUlDQWdJR3hsZENCN0lIVnVhWFFzSUhaaGJIVmxJSDBnUFNCbWFXNWtWbUZzZFdWQmJtUlZibWwwS0dWeGRXRjBhVzl1V3pGZEtUdGNibHh1SUNBZ0lIWmhiSFZsSUQwZ2NHRnljMlZHYkc5aGRDaDJZV3gxWlNrN1hHNWNiaUFnSUNCemQybDBZMmdnS0c5d1pYSmhkRzl5S1NCN1hHNGdJQ0FnWTJGelpTQW5LeWM2WEc0Z0lDQWdJQ0FnSUc1bGQxWmhiSFZsSUNzOUlIWmhiSFZsTzF4dUlDQWdJQ0FnSUNCaWNtVmhhenRjYmlBZ0lDQmpZWE5sSUNjdEp6cGNiaUFnSUNBZ0lDQWdibVYzVm1Gc2RXVWdMVDBnZG1Gc2RXVTdYRzRnSUNBZ0lDQWdJR0p5WldGck8xeHVJQ0FnSUdOaGMyVWdKeW9uT2x4dUlDQWdJQ0FnSUNCdVpYZFdZV3gxWlNBcVBTQjJZV3gxWlR0Y2JpQWdJQ0FnSUNBZ1luSmxZV3M3WEc0Z0lDQWdZMkZ6WlNBbkx5YzZYRzRnSUNBZ0lDQWdJRzVsZDFaaGJIVmxJQzg5SUhaaGJIVmxPMXh1SUNBZ0lDQWdJQ0JpY21WaGF6dGNiaUFnSUNCOVhHNGdJQ0FnWEc0Z0lDQWdhV1lnS0hWdWFYUXBJSHRjYmlBZ0lDQWdJQ0FnYm1WM1ZtRnNkV1VnS3owZ2RXNXBkRHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnlaWFIxY200Z2JtVjNWbUZzZFdVN1hHNTlPMXh1WEc0dktseHVJQ0FnSUZKbGMzUnlhV04wSUhaaGJIVmxJSFJ2SUhKaGJtZGxYRzRnSUNBZ1hHNGdJQ0FnVW1WMGRYSnVJSFpoYkhWbElIZHBkR2hwYmlCMGFHVWdjbUZ1WjJVZ2IyWWdiRzkzWlhKTWFXMXBkQ0JoYm1RZ2RYQndaWEpNYVcxcGRGeHVJQ0FnSUZ4dUlDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dWbUZzZFdVZ2RHOGdhMlZsY0NCM2FYUm9hVzRnY21GdVoyVmNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUV4dmQyVnlJR3hwYldsMElHOW1JSEpoYm1kbFhHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJWY0hCbGNpQnNhVzFwZENCdlppQnlZVzVuWlZ4dUlDQWdJRUJ5WlhSMWNtNGdXMjUxYldKbGNsMDZJRlpoYkhWbElHRnpJR3hwYldsMFpXUWdkMmwwYUdsdUlHZHBkbVZ1SUhKaGJtZGxYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJSEpsYzNSeWFXTjBJRDBnS0haaGJIVmxMQ0J0YVc0c0lHMWhlQ2tnUFQ0Z1RXRjBhQzV0WVhnb1RXRjBhQzV0YVc0b2RtRnNkV1VzSUcxaGVDa3NJRzFwYmlrN1hHNWNiaThxWEc0Z0lDQWdSbkpoYldWeVlYUmxMV2x1WkdWd1pXNWtaVzUwSUhOdGIyOTBhR2x1WjF4dVhHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJPWlhjZ2RtRnNkV1ZjYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklFOXNaQ0IyWVd4MVpWeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nUm5KaGJXVWdaSFZ5WVhScGIyNWNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDBnS0c5d2RHbHZibUZzS1RvZ1UyMXZiM1JvYVc1bklDZ3dJR2x6SUc1dmJtVXBYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJSE50YjI5MGFDQTlJQ2h1WlhkV1lXeDFaU3dnYjJ4a1ZtRnNkV1VzSUdSMWNtRjBhVzl1TENCemJXOXZkR2hwYm1jZ1BTQXdLU0E5UGlCMGIwUmxZMmx0WVd3b2IyeGtWbUZzZFdVZ0t5QW9aSFZ5WVhScGIyNGdLaUFvYm1WM1ZtRnNkV1VnTFNCdmJHUldZV3gxWlNrZ0x5Qk5ZWFJvTG0xaGVDaHpiVzl2ZEdocGJtY3NJR1IxY21GMGFXOXVLU2twTzF4dVhHNHZLbHh1SUNBZ0lFTnZiblpsY25RZ2VDQndaWElnYzJWamIyNWtJSFJ2SUhCbGNpQm1jbUZ0WlNCMlpXeHZZMmwwZVNCaVlYTmxaQ0J2YmlCbWNITmNiaUFnSUNCY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRlZ1YVhRZ2NHVnlJSE5sWTI5dVpGeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nUm5KaGJXVWdaSFZ5WVhScGIyNGdhVzRnYlhOY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2MzQmxaV1JRWlhKR2NtRnRaU0E5SUNoNGNITXNJR1p5WVcxbFJIVnlZWFJwYjI0cElEMCtJQ2hwYzA1MWJTaDRjSE1wS1NBL0lIaHdjeUF2SUNneE1EQXdJQzhnWm5KaGJXVkVkWEpoZEdsdmJpa2dPaUF3TzF4dVhHNHZLbHh1SUNBZ0lFTnZiblpsY25RZ2RtVnNiMk5wZEhrZ2FXNTBieUIyWld4cFkybDBlU0J3WlhJZ2MyVmpiMjVrWEc0Z0lDQWdYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCVmJtbDBJSEJsY2lCbWNtRnRaVnh1SUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1JuSmhiV1VnWkhWeVlYUnBiMjRnYVc0Z2JYTmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdjM0JsWldSUVpYSlRaV052Ym1RZ1BTQW9kbVZzYjJOcGRIa3NJR1p5WVcxbFJIVnlZWFJwYjI0cElEMCtJSFpsYkc5amFYUjVJQ29nS0RFd01EQWdMeUJtY21GdFpVUjFjbUYwYVc5dUtUdGNibHh1THlwY2JpQWdJQ0JEY21WaGRHVWdjM1JsY0hCbFpDQjJaWEp6YVc5dUlHOW1JREF0TVNCd2NtOW5jbVZ6YzF4dUlDQWdJRnh1SUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1EzVnljbVZ1ZENCMllXeDFaVnh1SUNBZ0lFQndZWEpoYlNCYmFXNTBYVG9nVG5WdFltVnlJRzltSUhOMFpYQnpYRzRnSUNBZ1FISmxkSFZ5YmlCYmJuVnRZbVZ5WFRvZ1UzUmxjSEJsWkNCMllXeDFaVnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0J6ZEdWd1VISnZaM0psYzNNZ1BTQW9jSEp2WjNKbGMzTXNJSE4wWlhCektTQTlQaUI3WEc0Z0lDQWdZMjl1YzNRZ2MyVm5iV1Z1ZENBOUlERWdMeUFvYzNSbGNITWdMU0F4S1R0Y2JpQWdJQ0JqYjI1emRDQjBZWEpuWlhRZ1BTQXhJQzBnS0RFZ0x5QnpkR1Z3Y3lrN1hHNGdJQ0FnWTI5dWMzUWdjSEp2WjNKbGMzTlBabFJoY21kbGRDQTlJRTFoZEdndWJXbHVLSEJ5YjJkeVpYTnpJQzhnZEdGeVoyVjBMQ0F4S1R0Y2JseHVJQ0FnSUhKbGRIVnliaUJOWVhSb0xtWnNiMjl5S0hCeWIyZHlaWE56VDJaVVlYSm5aWFFnTHlCelpXZHRaVzUwS1NBcUlITmxaMjFsYm5RN1hHNTlPeUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL2NhbGMuanNcbiAqKiBtb2R1bGUgaWQgPSAyMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIENBTUVMX0NBU0VfUEFUVEVSTiA9IC8oW2Etel0pKFtBLVpdKS9nO1xudmFyIFJFUExBQ0VfVEVNUExBVEUgPSAnJDEtJDInO1xudmFyIEhBU19QRVJGT1JNQU5DRV9OT1cgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnICYmIHBlcmZvcm1hbmNlLm5vdztcblxuLypcbiAgICBHZXQgdmFyIHR5cGUgYXMgc3RyaW5nXG4gICAgXG4gICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgQHJldHVybiBbc3RyaW5nXTogUmV0dXJucywgZm9yIGluc3RhbmNlICdPYmplY3QnIGlmIFtvYmplY3QgT2JqZWN0XVxuKi9cbnZhciB2YXJUeXBlID0gZnVuY3Rpb24gKHZhcmlhYmxlKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YXJpYWJsZSkuc2xpY2UoOCwgLTEpO1xufTtcblxuLypcbiAgICBDb252ZXJ0IGNhbWVsQ2FzZSB0byBkYXNoLWNhc2VcblxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEByZXR1cm4gW3N0cmluZ11cbiovXG52YXIgY2FtZWxUb0Rhc2ggPSBleHBvcnRzLmNhbWVsVG9EYXNoID0gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmcucmVwbGFjZShDQU1FTF9DQVNFX1BBVFRFUk4sIFJFUExBQ0VfVEVNUExBVEUpLnRvTG93ZXJDYXNlKCk7XG59O1xuXG52YXIgY3JlYXRlRGVsaW1pdGVkID0gZXhwb3J0cy5jcmVhdGVEZWxpbWl0ZWQgPSBmdW5jdGlvbiAodmFsdWVzLCB0ZXJtcywgZGVsaW1pdGVyLCBjaG9wKSB7XG4gICAgdmFyIG51bVRlcm1zID0gdGVybXMubGVuZ3RoO1xuICAgIHZhciBjb21iaW5lZCA9ICcnO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1UZXJtczsgaSsrKSB7XG4gICAgICAgIHZhciB0ZXJtID0gdGVybXNbaV07XG4gICAgICAgIGlmICh2YWx1ZXMuaGFzT3duUHJvcGVydHkodGVybSkpIHtcbiAgICAgICAgICAgIGNvbWJpbmVkICs9IHZhbHVlc1t0ZXJtXSArIGRlbGltaXRlcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjaG9wKSB7XG4gICAgICAgIGNvbWJpbmVkID0gY29tYmluZWQuc2xpY2UoMCwgLWNob3ApO1xuICAgIH1cblxuICAgIHJldHVybiBjb21iaW5lZDtcbn07XG5cbi8qXG4gICAgQ3JlYXRlIGEgZnVuY3Rpb24gc3RyaW5nXG5cbiAgICAnMjBweCcsICd0cmFuc2xhdGUnIC0+ICd0cmFuc2xhdGUoMjBweCknXG5cbiAgICBAcGFyYW0gW3N0cmluZ11cbiAgICBAcGFyYW0gW3N0cmluZ11cbiAgICBAcmV0dXJuIFtzdHJpbmddXG4qL1xudmFyIGNyZWF0ZUZ1bmN0aW9uU3RyaW5nID0gZXhwb3J0cy5jcmVhdGVGdW5jdGlvblN0cmluZyA9IGZ1bmN0aW9uICh2YWx1ZSwgcHJlZml4KSB7XG4gICAgcmV0dXJuIHByZWZpeCArICcoJyArIHZhbHVlICsgJyknO1xufTtcblxuLypcbiAgICBHZW5lcmF0ZSBjdXJyZW50IHRpbWVzdGFtcFxuICAgIFxuICAgIEByZXR1cm4gW3RpbWVzdGFtcF06IEN1cnJlbnQgVU5JWCB0aW1lc3RhbXBcbiovXG52YXIgY3VycmVudFRpbWUgPSBleHBvcnRzLmN1cnJlbnRUaW1lID0gSEFTX1BFUkZPUk1BTkNFX05PVyA/IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gcGVyZm9ybWFuY2Uubm93KCk7XG59IDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbn07XG5cbi8qXG4gICAgU3BsaXQgYSB2YWx1ZSBpbnRvIGEgdmFsdWUvdW5pdCBvYmplY3RcbiAgICBcbiAgICAgICAgXCIyMDBweFwiIC0+IHsgdmFsdWU6IDIwMCwgdW5pdDogXCJweFwiIH1cbiAgICAgICAgXG4gICAgQHBhcmFtIFtzdHJpbmddOiBWYWx1ZSB0byBzcGxpdFxuICAgIEByZXR1cm4gW29iamVjdF06IE9iamVjdCB3aXRoIHZhbHVlIGFuZCB1bml0IHByb3BzXG4qL1xudmFyIGZpbmRWYWx1ZUFuZFVuaXQgPSBleHBvcnRzLmZpbmRWYWx1ZUFuZFVuaXQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAodmFsdWUubWF0Y2gpIHtcbiAgICAgICAgdmFyIHNwbGl0VmFsdWUgPSB2YWx1ZS5tYXRjaCgvKC0/XFxkKlxcLj9cXGQqKSguKikvKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHBhcnNlRmxvYXQoc3BsaXRWYWx1ZVsxXSksXG4gICAgICAgICAgICB1bml0OiBzcGxpdFZhbHVlWzJdXG4gICAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHsgdmFsdWU6IHZhbHVlIH07XG4gICAgfVxufTtcblxuLypcbiAgICBTcGxpdCBjb2xvciBzdHJpbmcgaW50byBtYXAgb2YgY29sb3IgcHJvcGVydGllc1xuXG4gICAgXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDApXCIsIFtcIlJlZFwiLCAnR3JlZW5cIiwgXCJCbHVlXCIsIFwiQWxwaGFcIl1cblxuICAgIHsgUmVkOiAyNTUuLi4gfVxuKi9cbnZhciBnZXRDb2xvclZhbHVlcyA9IGV4cG9ydHMuZ2V0Q29sb3JWYWx1ZXMgPSBmdW5jdGlvbiAodmFsdWUsIGNvbG9yVGVybXMpIHtcbiAgICB2YXIgbnVtQ29sb3JUZXJtcyA9IGNvbG9yVGVybXMubGVuZ3RoO1xuICAgIHZhciBjb2xvclZhbHVlcyA9IHt9O1xuICAgIHZhciBjb2xvcnMgPSBzcGxpdENvbW1hRGVsaW1pdGVkKGdldFZhbHVlRnJvbUZ1bmN0aW9uU3RyaW5nKHZhbHVlKSk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bUNvbG9yVGVybXM7IGkrKykge1xuICAgICAgICBjb2xvclZhbHVlc1tjb2xvclRlcm1zW2ldXSA9IGNvbG9yc1tpXSAhPT0gdW5kZWZpbmVkID8gY29sb3JzW2ldIDogMTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29sb3JWYWx1ZXM7XG59O1xuXG4vKlxuICAgIEdldCB2YWx1ZSBmcm9tIGZ1bmN0aW9uIHN0cmluZ1xuXG4gICAgXCJ0cmFuc2xhdGVYKDIwcHgpXCIgLT4gXCIyMHB4XCJcbiovXG52YXIgZ2V0VmFsdWVGcm9tRnVuY3Rpb25TdHJpbmcgPSBleHBvcnRzLmdldFZhbHVlRnJvbUZ1bmN0aW9uU3RyaW5nID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLnN1YnN0cmluZyh2YWx1ZS5pbmRleE9mKCcoJykgKyAxLCB2YWx1ZS5sYXN0SW5kZXhPZignKScpKTtcbn07XG5cbi8qXG4gICAgQ2hlY2sgaWYgdHdvIG9iamVjdHMgaGF2ZSBjaGFuZ2VkIGZyb20gZWFjaCBvdGhlclxuICAgIFxuICAgIEBwYXJhbSBbb2JqZWN0XTogSW5wdXQgQVxuICAgIEBwYXJhbSBbb2JqZWN0XTogSW5wdXQgQlxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBUcnVlIGlmIGRpZmZlcmVudFxuKi9cbnZhciBoYXNDaGFuZ2VkID0gZXhwb3J0cy5oYXNDaGFuZ2VkID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICB2YXIgY2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgZm9yICh2YXIga2V5IGluIGEpIHtcbiAgICAgICAgaWYgKGEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgaWYgKGhhc1Byb3BlcnR5KGIsIGtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoYVtrZXldICE9PSBiW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjaGFuZ2VkO1xufTtcblxuLypcbiAgICBDaGVjayBpZiBvYmplY3QgaGFzIHByb3BlcnR5IGFuZCBpdCBpc24ndCB1bmRlZmluZWRcblxuICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEByZXR1cm4gW2Jvb2xlYW5dXG4qL1xudmFyIGhhc1Byb3BlcnR5ID0gZXhwb3J0cy5oYXNQcm9wZXJ0eSA9IGZ1bmN0aW9uIChvYmplY3QsIHByb3BlcnR5TmFtZSkge1xuICAgIHJldHVybiBvYmplY3QuaGFzT3duUHJvcGVydHkocHJvcGVydHlOYW1lKSAmJiBvYmplY3RbcHJvcGVydHlOYW1lXSAhPT0gdW5kZWZpbmVkO1xufTtcblxuLypcbiAgICBJcyB1dGlscyB2YXIgYW4gYXJyYXkgPyBcbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHV0aWxzLnZhclR5cGUgPT09ICdBcnJheSdcbiovXG52YXIgaXNBcnJheSA9IGV4cG9ydHMuaXNBcnJheSA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgICByZXR1cm4gdmFyVHlwZShhcnIpID09PSAnQXJyYXknO1xufTtcblxuLypcbiAgICBJcyB1dGlscyB2YXIgYSBmdW5jdGlvbiA/IFxuICAgIFxuICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdXRpbHMudmFyVHlwZSA9PT0gJ0Z1bmN0aW9uJ1xuKi9cbnZhciBpc0Z1bmMgPSBleHBvcnRzLmlzRnVuYyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdmFyVHlwZShvYmopID09PSAnRnVuY3Rpb24nO1xufTtcblxuLypcbiAgICBJcyB1dGlscyB2YXIgYSBudW1iZXI/XG4gICAgXG4gICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2YgPT09ICdudW1iZXInXG4qL1xudmFyIGlzTnVtID0gZXhwb3J0cy5pc051bSA9IGZ1bmN0aW9uIChudW0pIHtcbiAgICByZXR1cm4gdHlwZW9mIG51bSA9PT0gJ251bWJlcic7XG59O1xuXG4vKlxuICAgIElzIHV0aWxzIHZhciBhbiBvYmplY3Q/XG4gICAgXG4gICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2YgPT09ICdvYmplY3QnXG4qL1xudmFyIGlzT2JqID0gZXhwb3J0cy5pc09iaiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ29iamVjdCc7XG59O1xuXG4vKlxuICAgIElzIHV0aWxzIGEgcmVsYXRpdmUgdmFsdWUgYXNzaWdubWVudD9cbiAgICBcbiAgICBAcGFyYW0gW3N0cmluZ106IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogSWYgdXRpbHMgbG9va3MgbGlrZSBhIHJlbGF0aXZlIHZhbHVlIGFzc2lnbm1lbnRcbiovXG52YXIgaXNSZWxhdGl2ZVZhbHVlID0gZXhwb3J0cy5pc1JlbGF0aXZlVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgJiYgdmFsdWUuaW5kZXhPZiAmJiB2YWx1ZS5pbmRleE9mKCc9JykgPiAwID8gdHJ1ZSA6IGZhbHNlO1xufTtcblxuLypcbiAgICBJcyB1dGlscyB2YXIgYSBzdHJpbmcgPyBcbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnXG4qL1xudmFyIGlzU3RyaW5nID0gZXhwb3J0cy5pc1N0cmluZyA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICByZXR1cm4gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZyc7XG59O1xuXG4vKlxuICAgIEBwYXJhbSBbc3RyaW5nIHx8IE5vZGVMaXN0XTpcbiAgICAgICAgSWYgc3RyaW5nLCB0cmVhdGVkIGFzIHNlbGVjdG9yLlxuICAgICAgICBJZiBub3QsIHRyZWF0ZWQgYXMgcHJlZXhpc3RpbmcgTm9kZUxpc3RcblxuICAgIEByZXR1cm4gW0FycmF5XVxuKi9cbnZhciBzZWxlY3REb20gPSBleHBvcnRzLnNlbGVjdERvbSA9IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgIHZhciBub2RlcyA9IHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSA6IHNlbGVjdG9yO1xuICAgIHJldHVybiBub2Rlcy5sZW5ndGggPyBbXS5zbGljZS5jYWxsKG5vZGVzKSA6IFtdLnB1c2gobm9kZXMpO1xufTtcblxuLypcbiAgICBTcGxpdCBjb21tYS1kZWxpbWl0ZWQgc3RyaW5nXG5cbiAgICBcImZvbyxiYXJcIiAtPiBbXCJmb29cIiwgXCJiYXJcIl1cblxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEByZXR1cm4gW2FycmF5XVxuKi9cbnZhciBzcGxpdENvbW1hRGVsaW1pdGVkID0gZXhwb3J0cy5zcGxpdENvbW1hRGVsaW1pdGVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHZhbHVlKSA/IHZhbHVlLnNwbGl0KC8sXFxzKi8pIDogW3ZhbHVlXTtcbn07XG5cbi8qXG4gICAgU3BsaXQgc3BhY2UtZGVsaW1pdGVkIHN0cmluZ1xuXG4gICAgXCJmb28gYmFyXCIgLT4gW1wiZm9vXCIsIFwiYmFyXCJdXG5cbiAgICBAcGFyYW0gW3N0cmluZ11cbiAgICBAcmV0dXJuIFthcnJheV1cbiovXG52YXIgc3BsaXRTcGFjZURlbGltaXRlZCA9IGV4cG9ydHMuc3BsaXRTcGFjZURlbGltaXRlZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiBpc1N0cmluZyh2YWx1ZSkgPyB2YWx1ZS5zcGxpdCgnICcpIDogW3ZhbHVlXTtcbn07XG5cbi8qXG4gICAgQ29udmVydCBudW1iZXIgdG8geCBkZWNpbWFsIHBsYWNlc1xuXG4gICAgQHBhcmFtIFtudW1iZXJdXG4gICAgQHBhcmFtIFtudW1iZXJdXG4gICAgQHJldHVybiBbbnVtYmVyXVxuKi9cbnZhciB0b0RlY2ltYWwgPSBleHBvcnRzLnRvRGVjaW1hbCA9IGZ1bmN0aW9uIChudW0pIHtcbiAgICB2YXIgcHJlY2lzaW9uID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gMiA6IGFyZ3VtZW50c1sxXTtcblxuICAgIHByZWNpc2lvbiA9IE1hdGgucG93KDEwLCBwcmVjaXNpb24pO1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG51bSAqIHByZWNpc2lvbikgLyBwcmVjaXNpb247XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1NdmRYUnBiSE11YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN08wRkJRVUVzU1VGQlRTeHhRa0ZCY1VJc2FVSkJRWEpDTzBGQlEwNHNTVUZCVFN4dFFrRkJiVUlzVDBGQmJrSTdRVUZEVGl4SlFVRk5MSE5DUVVGMVFpeFBRVUZQTEZkQlFWQXNTMEZCZFVJc1YwRkJka0lzU1VGQmMwTXNXVUZCV1N4SFFVRmFPenM3T3pzN096dEJRVkZ1UlN4SlFVRk5MRlZCUVZVN1YwRkJXU3hQUVVGUExGTkJRVkFzUTBGQmFVSXNVVUZCYWtJc1EwRkJNRUlzU1VGQk1VSXNRMEZCSzBJc1VVRkJMMElzUlVGQmVVTXNTMEZCZWtNc1EwRkJLME1zUTBGQkwwTXNSVUZCYTBRc1EwRkJReXhEUVVGRU8wTkJRVGxFT3pzN096czdPenRCUVZGVUxFbEJRVTBzYjBOQlFXTXNWVUZCUXl4TlFVRkVPMWRCUVZrc1QwRkJUeXhQUVVGUUxFTkJRV1VzYTBKQlFXWXNSVUZCYlVNc1owSkJRVzVETEVWQlFYRkVMRmRCUVhKRU8wTkJRVm83TzBGQlJYQkNMRWxCUVUwc05FTkJRV3RDTEZWQlFVTXNUVUZCUkN4RlFVRlRMRXRCUVZRc1JVRkJaMElzVTBGQmFFSXNSVUZCTWtJc1NVRkJNMElzUlVGQmIwTTdRVUZETDBRc1VVRkJUU3hYUVVGWExFMUJRVTBzVFVGQlRpeERRVVE0UXp0QlFVVXZSQ3hSUVVGSkxGZEJRVmNzUlVGQldDeERRVVl5UkRzN1FVRkpMMFFzVTBGQlN5eEpRVUZKTEVsQlFVa3NRMEZCU2l4RlFVRlBMRWxCUVVrc1VVRkJTaXhGUVVGakxFZEJRVGxDTEVWQlFXMURPMEZCUXk5Q0xGbEJRVTBzVDBGQlR5eE5RVUZOTEVOQlFVNHNRMEZCVUN4RFFVUjVRanRCUVVVdlFpeFpRVUZKTEU5QlFVOHNZMEZCVUN4RFFVRnpRaXhKUVVGMFFpeERRVUZLTEVWQlFXbERPMEZCUXpkQ0xIZENRVUZaTEU5QlFVOHNTVUZCVUN4SlFVRmxMRk5CUVdZc1EwRkVhVUk3VTBGQmFrTTdTMEZHU2pzN1FVRlBRU3hSUVVGSkxFbEJRVW9zUlVGQlZUdEJRVU5PTEcxQ1FVRlhMRk5CUVZNc1MwRkJWQ3hEUVVGbExFTkJRV1lzUlVGQmEwSXNRMEZCUXl4SlFVRkVMRU5CUVRkQ0xFTkJSRTA3UzBGQlZqczdRVUZKUVN4WFFVRlBMRkZCUVZBc1EwRm1LMFE3UTBGQmNFTTdPenM3T3pzN096czdPMEZCTWtKNFFpeEpRVUZOTEhORVFVRjFRaXhWUVVGRExFdEJRVVFzUlVGQlVTeE5RVUZTTzFkQlFYTkNMR1ZCUVZVN1EwRkJhRU03T3pzN096czdRVUZQTjBJc1NVRkJUU3h2UTBGQll5eHpRa0ZCYzBJN1YwRkJUU3haUVVGWkxFZEJRVm83UTBGQlRpeEhRVUV3UWp0WFFVRk5MRWxCUVVrc1NVRkJTaXhIUVVGWExFOUJRVmc3UTBGQlRqczdPenM3T3pzN096dEJRVlZ3UlN4SlFVRk5MRGhEUVVGdFFpeFZRVUZETEV0QlFVUXNSVUZCVnp0QlFVTjJReXhSUVVGSkxFMUJRVTBzUzBGQlRpeEZRVUZoTzBGQlEySXNXVUZCVFN4aFFVRmhMRTFCUVUwc1MwRkJUaXhEUVVGWkxHMUNRVUZhTEVOQlFXSXNRMEZFVHpzN1FVRkhZaXhsUVVGUE8wRkJRMGdzYlVKQlFVOHNWMEZCVnl4WFFVRlhMRU5CUVZnc1EwRkJXQ3hEUVVGUU8wRkJRMEVzYTBKQlFVOHNWMEZCVnl4RFFVRllMRU5CUVZBN1UwRkdTaXhEUVVoaE8wdEJRV3BDTEUxQlQwODdRVUZEU0N4bFFVRlBMRVZCUVVVc1dVRkJSaXhGUVVGUUxFTkJSRWM3UzBGUVVEdERRVVEwUWpzN096czdPenM3TzBGQmIwSjZRaXhKUVVGTkxEQkRRVUZwUWl4VlFVRkRMRXRCUVVRc1JVRkJVU3hWUVVGU0xFVkJRWFZDTzBGQlEycEVMRkZCUVUwc1owSkJRV2RDTEZkQlFWY3NUVUZCV0N4RFFVUXlRanRCUVVWcVJDeFJRVUZOTEdOQlFXTXNSVUZCWkN4RFFVWXlRenRCUVVkcVJDeFJRVUZOTEZOQlFWTXNiMEpCUVc5Q0xESkNRVUV5UWl4TFFVRXpRaXhEUVVGd1FpeERRVUZVTEVOQlNESkRPenRCUVV0cVJDeFRRVUZMTEVsQlFVa3NTVUZCU1N4RFFVRktMRVZCUVU4c1NVRkJTU3hoUVVGS0xFVkJRVzFDTEVkQlFXNURMRVZCUVhkRE8wRkJRM0JETEc5Q1FVRlpMRmRCUVZjc1EwRkJXQ3hEUVVGYUxFbEJRVFpDTEUxQlFVTXNRMEZCVHl4RFFVRlFMRTFCUVdNc1UwRkJaQ3hIUVVFeVFpeFBRVUZQTEVOQlFWQXNRMEZCTlVJc1IwRkJkME1zUTBGQmVFTXNRMEZFVHp0TFFVRjRRenM3UVVGSlFTeFhRVUZQTEZkQlFWQXNRMEZVYVVRN1EwRkJka0k3T3pzN096czdRVUZwUW5aQ0xFbEJRVTBzYTBWQlFUWkNMRlZCUVVNc1MwRkJSRHRYUVVGWExFMUJRVTBzVTBGQlRpeERRVUZuUWl4TlFVRk5MRTlCUVU0c1EwRkJZeXhIUVVGa0xFbEJRWEZDTEVOQlFYSkNMRVZCUVhkQ0xFMUJRVTBzVjBGQlRpeERRVUZyUWl4SFFVRnNRaXhEUVVGNFF6dERRVUZZT3pzN096czdPenM3UVVGVGJrTXNTVUZCVFN4clEwRkJZU3hWUVVGRExFTkJRVVFzUlVGQlNTeERRVUZLTEVWQlFWVTdRVUZEYUVNc1VVRkJTU3hWUVVGVkxFdEJRVllzUTBGRU5FSTdPMEZCUjJoRExGTkJRVXNzU1VGQlNTeEhRVUZLTEVsQlFWY3NRMEZCYUVJc1JVRkJiVUk3UVVGRFppeFpRVUZKTEVWQlFVVXNZMEZCUml4RFFVRnBRaXhIUVVGcVFpeERRVUZLTEVWQlFUSkNPMEZCUTNaQ0xHZENRVUZKTEZsQlFWa3NRMEZCV2l4RlFVRmxMRWRCUVdZc1EwRkJTaXhGUVVGNVFqdEJRVU55UWl4dlFrRkJTU3hGUVVGRkxFZEJRVVlzVFVGQlZ5eEZRVUZGTEVkQlFVWXNRMEZCV0N4RlFVRnRRanRCUVVOdVFpdzRRa0ZCVlN4SlFVRldMRU5CUkcxQ08ybENRVUYyUWp0aFFVUktMRTFCU1U4N1FVRkRTQ3d3UWtGQlZTeEpRVUZXTEVOQlJFYzdZVUZLVUR0VFFVUktPMHRCUkVvN08wRkJXVUVzVjBGQlR5eFBRVUZRTEVOQlptZERPME5CUVZZN096czdPenM3T3p0QlFYbENia0lzU1VGQlRTeHZRMEZCWXl4VlFVRkRMRTFCUVVRc1JVRkJVeXhaUVVGVU8xZEJRVEJDTEU5QlFVOHNZMEZCVUN4RFFVRnpRaXhaUVVGMFFpeExRVUYxUXl4UFFVRlBMRmxCUVZBc1RVRkJlVUlzVTBGQmVrSTdRMEZCYWtVN096czdPenM3TzBGQlVYQkNMRWxCUVUwc05FSkJRVlVzVlVGQlF5eEhRVUZFTzFkQlFWTXNVVUZCVVN4SFFVRlNMRTFCUVdsQ0xFOUJRV3BDTzBOQlFWUTdPenM3T3pzN08wRkJVV2hDTEVsQlFVMHNNRUpCUVZNc1ZVRkJReXhIUVVGRU8xZEJRVk1zVVVGQlVTeEhRVUZTTEUxQlFXbENMRlZCUVdwQ08wTkJRVlE3T3pzN096czdPMEZCVVdZc1NVRkJUU3gzUWtGQlVTeFZRVUZETEVkQlFVUTdWMEZCVXl4UFFVRlBMRWRCUVZBc1MwRkJaU3hSUVVGbU8wTkJRVlE3T3pzN096czdPMEZCVVdRc1NVRkJUU3gzUWtGQlVTeFZRVUZETEVkQlFVUTdWMEZCVXl4UFFVRlBMRWRCUVZBc1MwRkJaU3hSUVVGbU8wTkJRVlE3T3pzN096czdPMEZCVVdRc1NVRkJUU3cwUTBGQmEwSXNWVUZCUXl4TFFVRkVPMWRCUVZjc1MwRkJReXhKUVVGVExFMUJRVTBzVDBGQlRpeEpRVUZwUWl4TlFVRk5MRTlCUVU0c1EwRkJZeXhIUVVGa0xFbEJRWEZDTEVOQlFYSkNMRWRCUVRCQ0xFbEJRWEpFTEVkQlFUUkVMRXRCUVRWRU8wTkJRVmc3T3pzN096czdPMEZCVVhoQ0xFbEJRVTBzT0VKQlFWY3NWVUZCUXl4SFFVRkVPMWRCUVZNc1QwRkJUeXhIUVVGUUxFdEJRV1VzVVVGQlpqdERRVUZVT3pzN096czdPenM3UVVGVGFrSXNTVUZCVFN4blEwRkJXU3hWUVVGRExGRkJRVVFzUlVGQll6dEJRVU51UXl4UlFVRk5MRkZCUVZFc1QwRkJVU3hSUVVGUUxFdEJRVzlDTEZGQlFYQkNMRWRCUVdkRExGTkJRVk1zWjBKQlFWUXNRMEZCTUVJc1VVRkJNVUlzUTBGQmFrTXNSMEZCZFVVc1VVRkJka1VzUTBGRWNVSTdRVUZGYmtNc1YwRkJUeXhMUVVGRExFTkJRVTBzVFVGQlRpeEhRVUZuUWl4SFFVRkhMRXRCUVVnc1EwRkJVeXhKUVVGVUxFTkJRV01zUzBGQlpDeERRVUZxUWl4SFFVRjNReXhIUVVGSExFbEJRVWdzUTBGQlVTeExRVUZTTEVOQlFYaERMRU5CUmpSQ08wTkJRV1E3T3pzN096czdPenM3UVVGaGJFSXNTVUZCVFN4dlJFRkJjMElzVlVGQlF5eExRVUZFTzFkQlFWY3NVMEZCVXl4TFFVRlVMRWxCUVd0Q0xFMUJRVTBzUzBGQlRpeERRVUZaTEUxQlFWb3NRMEZCYkVJc1IwRkJkME1zUTBGQlF5eExRVUZFTEVOQlFYaERPME5CUVZnN096czdPenM3T3pzN1FVRlZOVUlzU1VGQlRTeHZSRUZCYzBJc1ZVRkJReXhMUVVGRU8xZEJRVmNzVTBGQlV5eExRVUZVTEVsQlFXdENMRTFCUVUwc1MwRkJUaXhEUVVGWkxFZEJRVm9zUTBGQmJFSXNSMEZCY1VNc1EwRkJReXhMUVVGRUxFTkJRWEpETzBOQlFWZzdPenM3T3pzN096dEJRVk0xUWl4SlFVRk5MR2REUVVGWkxGVkJRVU1zUjBGQlJDeEZRVUYzUWp0UlFVRnNRaXhyUlVGQldTeHBRa0ZCVFRzN1FVRkROME1zZVVKQlFWa3NTVUZCVFN4VlFVRnNRaXhEUVVRMlF6dEJRVVUzUXl4WFFVRlBMRXRCUVVzc1MwRkJUQ3hEUVVGWExFMUJRVTBzVTBGQlRpeERRVUZZTEVkQlFUaENMRk5CUVRsQ0xFTkJSbk5ETzBOQlFYaENJaXdpWm1sc1pTSTZJblYwYVd4ekxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbU52Ym5OMElFTkJUVVZNWDBOQlUwVmZVRUZVVkVWU1RpQTlJQzhvVzJFdGVsMHBLRnRCTFZwZEtTOW5PMXh1WTI5dWMzUWdVa1ZRVEVGRFJWOVVSVTFRVEVGVVJTQTlJQ2NrTVMwa01pYzdYRzVqYjI1emRDQklRVk5mVUVWU1JrOVNUVUZPUTBWZlRrOVhJRDBnS0hSNWNHVnZaaUJ3WlhKbWIzSnRZVzVqWlNBaFBUMGdKM1Z1WkdWbWFXNWxaQ2NnSmlZZ2NHVnlabTl5YldGdVkyVXVibTkzS1R0Y2JseHVMeXBjYmlBZ0lDQkhaWFFnZG1GeUlIUjVjR1VnWVhNZ2MzUnlhVzVuWEc0Z0lDQWdYRzRnSUNBZ1FIQmhjbUZ0T2lCV1lYSnBZV0pzWlNCMGJ5QjBaWE4wWEc0Z0lDQWdRSEpsZEhWeWJpQmJjM1J5YVc1blhUb2dVbVYwZFhKdWN5d2dabTl5SUdsdWMzUmhibU5sSUNkUFltcGxZM1FuSUdsbUlGdHZZbXBsWTNRZ1QySnFaV04wWFZ4dUtpOWNibU52Ym5OMElIWmhjbFI1Y0dVZ1BTQjJZWEpwWVdKc1pTQTlQaUJQWW1wbFkzUXVjSEp2ZEc5MGVYQmxMblJ2VTNSeWFXNW5MbU5oYkd3b2RtRnlhV0ZpYkdVcExuTnNhV05sS0Rnc0lDMHhLVHRjYmx4dUx5cGNiaUFnSUNCRGIyNTJaWEowSUdOaGJXVnNRMkZ6WlNCMGJ5QmtZWE5vTFdOaGMyVmNibHh1SUNBZ0lFQndZWEpoYlNCYmMzUnlhVzVuWFZ4dUlDQWdJRUJ5WlhSMWNtNGdXM04wY21sdVoxMWNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdZMkZ0Wld4VWIwUmhjMmdnUFNBb2MzUnlhVzVuS1NBOVBpQnpkSEpwYm1jdWNtVndiR0ZqWlNoRFFVMUZURjlEUVZORlgxQkJWRlJGVWs0c0lGSkZVRXhCUTBWZlZFVk5VRXhCVkVVcExuUnZURzkzWlhKRFlYTmxLQ2s3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JqY21WaGRHVkVaV3hwYldsMFpXUWdQU0FvZG1Gc2RXVnpMQ0IwWlhKdGN5d2daR1ZzYVcxcGRHVnlMQ0JqYUc5d0tTQTlQaUI3WEc0Z0lDQWdZMjl1YzNRZ2JuVnRWR1Z5YlhNZ1BTQjBaWEp0Y3k1c1pXNW5kR2c3WEc0Z0lDQWdiR1YwSUdOdmJXSnBibVZrSUQwZ0p5YzdYRzVjYmlBZ0lDQm1iM0lnS0d4bGRDQnBJRDBnTURzZ2FTQThJRzUxYlZSbGNtMXpPeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2RHVnliU0E5SUhSbGNtMXpXMmxkTzF4dUlDQWdJQ0FnSUNCcFppQW9kbUZzZFdWekxtaGhjMDkzYmxCeWIzQmxjblI1S0hSbGNtMHBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjFpYVc1bFpDQXJQU0IyWVd4MVpYTmJkR1Z5YlYwZ0t5QmtaV3hwYldsMFpYSTdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmlBZ0lDQnBaaUFvWTJodmNDa2dlMXh1SUNBZ0lDQWdJQ0JqYjIxaWFXNWxaQ0E5SUdOdmJXSnBibVZrTG5Oc2FXTmxLREFzSUMxamFHOXdLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnlaWFIxY200Z1kyOXRZbWx1WldRN1hHNTlPMXh1WEc0dktseHVJQ0FnSUVOeVpXRjBaU0JoSUdaMWJtTjBhVzl1SUhOMGNtbHVaMXh1WEc0Z0lDQWdKekl3Y0hnbkxDQW5kSEpoYm5Oc1lYUmxKeUF0UGlBbmRISmhibk5zWVhSbEtESXdjSGdwSjF4dVhHNGdJQ0FnUUhCaGNtRnRJRnR6ZEhKcGJtZGRYRzRnSUNBZ1FIQmhjbUZ0SUZ0emRISnBibWRkWEc0Z0lDQWdRSEpsZEhWeWJpQmJjM1J5YVc1blhWeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQmpjbVZoZEdWR2RXNWpkR2x2YmxOMGNtbHVaeUE5SUNoMllXeDFaU3dnY0hKbFptbDRLU0E5UGlCZ0pIdHdjbVZtYVhoOUtDUjdkbUZzZFdWOUtXQTdYRzVjYmk4cVhHNGdJQ0FnUjJWdVpYSmhkR1VnWTNWeWNtVnVkQ0IwYVcxbGMzUmhiWEJjYmlBZ0lDQmNiaUFnSUNCQWNtVjBkWEp1SUZ0MGFXMWxjM1JoYlhCZE9pQkRkWEp5Wlc1MElGVk9TVmdnZEdsdFpYTjBZVzF3WEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdOMWNuSmxiblJVYVcxbElEMGdTRUZUWDFCRlVrWlBVazFCVGtORlgwNVBWeUEvSUNncElEMCtJSEJsY21admNtMWhibU5sTG01dmR5Z3BJRG9nS0NrZ1BUNGdibVYzSUVSaGRHVW9LUzVuWlhSVWFXMWxLQ2s3WEc1Y2JpOHFYRzRnSUNBZ1UzQnNhWFFnWVNCMllXeDFaU0JwYm5SdklHRWdkbUZzZFdVdmRXNXBkQ0J2WW1wbFkzUmNiaUFnSUNCY2JpQWdJQ0FnSUNBZ1hDSXlNREJ3ZUZ3aUlDMCtJSHNnZG1Gc2RXVTZJREl3TUN3Z2RXNXBkRG9nWENKd2VGd2lJSDFjYmlBZ0lDQWdJQ0FnWEc0Z0lDQWdRSEJoY21GdElGdHpkSEpwYm1kZE9pQldZV3gxWlNCMGJ5QnpjR3hwZEZ4dUlDQWdJRUJ5WlhSMWNtNGdXMjlpYW1WamRGMDZJRTlpYW1WamRDQjNhWFJvSUhaaGJIVmxJR0Z1WkNCMWJtbDBJSEJ5YjNCelhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHWnBibVJXWVd4MVpVRnVaRlZ1YVhRZ1BTQW9kbUZzZFdVcElEMCtJSHRjYmlBZ0lDQnBaaUFvZG1Gc2RXVXViV0YwWTJncElIdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2MzQnNhWFJXWVd4MVpTQTlJSFpoYkhWbExtMWhkR05vS0M4b0xUOWNYR1FxWEZ3dVAxeGNaQ29wS0M0cUtTOHBPMXh1WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjJZV3gxWlRvZ2NHRnljMlZHYkc5aGRDaHpjR3hwZEZaaGJIVmxXekZkS1N4Y2JpQWdJQ0FnSUNBZ0lDQWdJSFZ1YVhRNklDQnpjR3hwZEZaaGJIVmxXekpkWEc0Z0lDQWdJQ0FnSUgwN1hHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSHNnZG1Gc2RXVWdmVHRjYmlBZ0lDQjlYRzU5TzF4dVhHNHZLbHh1SUNBZ0lGTndiR2wwSUdOdmJHOXlJSE4wY21sdVp5QnBiblJ2SUcxaGNDQnZaaUJqYjJ4dmNpQndjbTl3WlhKMGFXVnpYRzVjYmlBZ0lDQmNJbkpuWW1Fb01qVTFMQ0F5TlRVc0lESTFOU3dnTUNsY0lpd2dXMXdpVW1Wa1hDSXNJQ2RIY21WbGJsd2lMQ0JjSWtKc2RXVmNJaXdnWENKQmJIQm9ZVndpWFZ4dVhHNGdJQ0FnZXlCU1pXUTZJREkxTlM0dUxpQjlYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR2RsZEVOdmJHOXlWbUZzZFdWeklEMGdLSFpoYkhWbExDQmpiMnh2Y2xSbGNtMXpLU0E5UGlCN1hHNGdJQ0FnWTI5dWMzUWdiblZ0UTI5c2IzSlVaWEp0Y3lBOUlHTnZiRzl5VkdWeWJYTXViR1Z1WjNSb08xeHVJQ0FnSUdOdmJuTjBJR052Ykc5eVZtRnNkV1Z6SUQwZ2UzMDdYRzRnSUNBZ1kyOXVjM1FnWTI5c2IzSnpJRDBnYzNCc2FYUkRiMjF0WVVSbGJHbHRhWFJsWkNoblpYUldZV3gxWlVaeWIyMUdkVzVqZEdsdmJsTjBjbWx1WnloMllXeDFaU2twTzF4dVhHNGdJQ0FnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCdWRXMURiMnh2Y2xSbGNtMXpPeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdZMjlzYjNKV1lXeDFaWE5iWTI5c2IzSlVaWEp0YzF0cFhWMGdQU0FvWTI5c2IzSnpXMmxkSUNFOVBTQjFibVJsWm1sdVpXUXBJRDhnWTI5c2IzSnpXMmxkSURvZ01UdGNiaUFnSUNCOVhHNWNiaUFnSUNCeVpYUjFjbTRnWTI5c2IzSldZV3gxWlhNN1hHNTlPMXh1WEc0dktseHVJQ0FnSUVkbGRDQjJZV3gxWlNCbWNtOXRJR1oxYm1OMGFXOXVJSE4wY21sdVoxeHVYRzRnSUNBZ1hDSjBjbUZ1YzJ4aGRHVllLREl3Y0hncFhDSWdMVDRnWENJeU1IQjRYQ0pjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnWjJWMFZtRnNkV1ZHY205dFJuVnVZM1JwYjI1VGRISnBibWNnUFNBb2RtRnNkV1VwSUQwK0lIWmhiSFZsTG5OMVluTjBjbWx1WnloMllXeDFaUzVwYm1SbGVFOW1LQ2NvSnlrZ0t5QXhMQ0IyWVd4MVpTNXNZWE4wU1c1a1pYaFBaaWduS1NjcEtUdGNibHh1THlwY2JpQWdJQ0JEYUdWamF5QnBaaUIwZDI4Z2IySnFaV04wY3lCb1lYWmxJR05vWVc1blpXUWdabkp2YlNCbFlXTm9JRzkwYUdWeVhHNGdJQ0FnWEc0Z0lDQWdRSEJoY21GdElGdHZZbXBsWTNSZE9pQkpibkIxZENCQlhHNGdJQ0FnUUhCaGNtRnRJRnR2WW1wbFkzUmRPaUJKYm5CMWRDQkNYRzRnSUNBZ1FISmxkSFZ5YmlCYlltOXZiR1ZoYmwwNklGUnlkV1VnYVdZZ1pHbG1abVZ5Wlc1MFhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHaGhjME5vWVc1blpXUWdQU0FvWVN3Z1lpa2dQVDRnZTF4dUlDQWdJR3hsZENCamFHRnVaMlZrSUQwZ1ptRnNjMlU3WEc1Y2JpQWdJQ0JtYjNJZ0tHeGxkQ0JyWlhrZ2FXNGdZU2tnZTF4dUlDQWdJQ0FnSUNCcFppQW9ZUzVvWVhOUGQyNVFjbTl3WlhKMGVTaHJaWGtwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2FHRnpVSEp2Y0dWeWRIa29ZaXdnYTJWNUtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoaFcydGxlVjBnSVQwOUlHSmJhMlY1WFNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqYUdGdVoyVmtJRDBnZEhKMVpUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOb1lXNW5aV1FnUFNCMGNuVmxPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NtVjBkWEp1SUdOb1lXNW5aV1E3WEc1OU8xeHVYRzR2S2x4dUlDQWdJRU5vWldOcklHbG1JRzlpYW1WamRDQm9ZWE1nY0hKdmNHVnlkSGtnWVc1a0lHbDBJR2x6YmlkMElIVnVaR1ZtYVc1bFpGeHVYRzRnSUNBZ1FIQmhjbUZ0SUZ0dlltcGxZM1JkWEc0Z0lDQWdRSEJoY21GdElGdHpkSEpwYm1kZFhHNGdJQ0FnUUhKbGRIVnliaUJiWW05dmJHVmhibDFjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYUdGelVISnZjR1Z5ZEhrZ1BTQW9iMkpxWldOMExDQndjbTl3WlhKMGVVNWhiV1VwSUQwK0lHOWlhbVZqZEM1b1lYTlBkMjVRY205d1pYSjBlU2h3Y205d1pYSjBlVTVoYldVcElDWW1JRzlpYW1WamRGdHdjbTl3WlhKMGVVNWhiV1ZkSUNFOVBTQjFibVJsWm1sdVpXUTdYRzVjYmk4cVhHNGdJQ0FnU1hNZ2RYUnBiSE1nZG1GeUlHRnVJR0Z5Y21GNUlEOGdYRzRnSUNBZ1hHNGdJQ0FnUUhCaGNtRnRPaUJXWVhKcFlXSnNaU0IwYnlCMFpYTjBYRzRnSUNBZ1FISmxkSFZ5YmlCYlltOXZiR1ZoYmwwNklGSmxkSFZ5Ym5NZ2RISjFaU0JwWmlCMWRHbHNjeTUyWVhKVWVYQmxJRDA5UFNBblFYSnlZWGtuWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdselFYSnlZWGtnUFNBb1lYSnlLU0E5UGlCMllYSlVlWEJsS0dGeWNpa2dQVDA5SUNkQmNuSmhlU2M3WEc1Y2JpOHFYRzRnSUNBZ1NYTWdkWFJwYkhNZ2RtRnlJR0VnWm5WdVkzUnBiMjRnUHlCY2JpQWdJQ0JjYmlBZ0lDQkFjR0Z5WVcwNklGWmhjbWxoWW14bElIUnZJSFJsYzNSY2JpQWdJQ0JBY21WMGRYSnVJRnRpYjI5c1pXRnVYVG9nVW1WMGRYSnVjeUIwY25WbElHbG1JSFYwYVd4ekxuWmhjbFI1Y0dVZ1BUMDlJQ2RHZFc1amRHbHZiaWRjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYVhOR2RXNWpJRDBnS0c5aWFpa2dQVDRnZG1GeVZIbHdaU2h2WW1vcElEMDlQU0FuUm5WdVkzUnBiMjRuTzF4dVhHNHZLbHh1SUNBZ0lFbHpJSFYwYVd4eklIWmhjaUJoSUc1MWJXSmxjajljYmlBZ0lDQmNiaUFnSUNCQWNHRnlZVzA2SUZaaGNtbGhZbXhsSUhSdklIUmxjM1JjYmlBZ0lDQkFjbVYwZFhKdUlGdGliMjlzWldGdVhUb2dVbVYwZFhKdWN5QjBjblZsSUdsbUlIUjVjR1Z2WmlBOVBUMGdKMjUxYldKbGNpZGNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdhWE5PZFcwZ1BTQW9iblZ0S1NBOVBpQjBlWEJsYjJZZ2JuVnRJRDA5UFNBbmJuVnRZbVZ5Snp0Y2JseHVMeXBjYmlBZ0lDQkpjeUIxZEdsc2N5QjJZWElnWVc0Z2IySnFaV04wUDF4dUlDQWdJRnh1SUNBZ0lFQndZWEpoYlRvZ1ZtRnlhV0ZpYkdVZ2RHOGdkR1Z6ZEZ4dUlDQWdJRUJ5WlhSMWNtNGdXMkp2YjJ4bFlXNWRPaUJTWlhSMWNtNXpJSFJ5ZFdVZ2FXWWdkSGx3Wlc5bUlEMDlQU0FuYjJKcVpXTjBKMXh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JwYzA5aWFpQTlJQ2h2WW1vcElEMCtJSFI1Y0dWdlppQnZZbW9nUFQwOUlDZHZZbXBsWTNRbk8xeHVYRzR2S2x4dUlDQWdJRWx6SUhWMGFXeHpJR0VnY21Wc1lYUnBkbVVnZG1Gc2RXVWdZWE56YVdkdWJXVnVkRDljYmlBZ0lDQmNiaUFnSUNCQWNHRnlZVzBnVzNOMGNtbHVaMTA2SUZaaGNtbGhZbXhsSUhSdklIUmxjM1JjYmlBZ0lDQkFjbVYwZFhKdUlGdGliMjlzWldGdVhUb2dTV1lnZFhScGJITWdiRzl2YTNNZ2JHbHJaU0JoSUhKbGJHRjBhWFpsSUhaaGJIVmxJR0Z6YzJsbmJtMWxiblJjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYVhOU1pXeGhkR2wyWlZaaGJIVmxJRDBnS0haaGJIVmxLU0E5UGlBb2RtRnNkV1VnSmlZZ2RtRnNkV1V1YVc1a1pYaFBaaUFtSmlCMllXeDFaUzVwYm1SbGVFOW1LQ2M5SnlrZ1BpQXdLU0EvSUhSeWRXVWdPaUJtWVd4elpUdGNibHh1THlwY2JpQWdJQ0JKY3lCMWRHbHNjeUIyWVhJZ1lTQnpkSEpwYm1jZ1B5QmNiaUFnSUNCY2JpQWdJQ0JBY0dGeVlXMDZJRlpoY21saFlteGxJSFJ2SUhSbGMzUmNiaUFnSUNCQWNtVjBkWEp1SUZ0aWIyOXNaV0Z1WFRvZ1VtVjBkWEp1Y3lCMGNuVmxJR2xtSUhSNWNHVnZaaUJ6ZEhJZ1BUMDlJQ2R6ZEhKcGJtY25YRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR2x6VTNSeWFXNW5JRDBnS0hOMGNpa2dQVDRnZEhsd1pXOW1JSE4wY2lBOVBUMGdKM04wY21sdVp5YzdYRzVjYmk4cVhHNGdJQ0FnUUhCaGNtRnRJRnR6ZEhKcGJtY2dmSHdnVG05a1pVeHBjM1JkT2x4dUlDQWdJQ0FnSUNCSlppQnpkSEpwYm1jc0lIUnlaV0YwWldRZ1lYTWdjMlZzWldOMGIzSXVYRzRnSUNBZ0lDQWdJRWxtSUc1dmRDd2dkSEpsWVhSbFpDQmhjeUJ3Y21WbGVHbHpkR2x1WnlCT2IyUmxUR2x6ZEZ4dVhHNGdJQ0FnUUhKbGRIVnliaUJiUVhKeVlYbGRYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJSE5sYkdWamRFUnZiU0E5SUNoelpXeGxZM1J2Y2lrZ1BUNGdlMXh1SUNBZ0lHTnZibk4wSUc1dlpHVnpJRDBnS0hSNWNHVnZaaUJ6Wld4bFkzUnZjaUE5UFQwZ0ozTjBjbWx1WnljcElEOGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2tGc2JDaHpaV3hsWTNSdmNpa2dPaUJ6Wld4bFkzUnZjanRjYmlBZ0lDQnlaWFIxY200Z0tHNXZaR1Z6TG14bGJtZDBhQ2tnUHlCYlhTNXpiR2xqWlM1allXeHNLRzV2WkdWektTQTZJRnRkTG5CMWMyZ29ibTlrWlhNcE8xeHVmVHRjYmx4dUx5cGNiaUFnSUNCVGNHeHBkQ0JqYjIxdFlTMWtaV3hwYldsMFpXUWdjM1J5YVc1blhHNWNiaUFnSUNCY0ltWnZieXhpWVhKY0lpQXRQaUJiWENKbWIyOWNJaXdnWENKaVlYSmNJbDFjYmx4dUlDQWdJRUJ3WVhKaGJTQmJjM1J5YVc1blhWeHVJQ0FnSUVCeVpYUjFjbTRnVzJGeWNtRjVYVnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0J6Y0d4cGRFTnZiVzFoUkdWc2FXMXBkR1ZrSUQwZ0tIWmhiSFZsS1NBOVBpQnBjMU4wY21sdVp5aDJZV3gxWlNrZ1B5QjJZV3gxWlM1emNHeHBkQ2d2TEZ4Y2N5b3ZLU0E2SUZ0MllXeDFaVjA3WEc1Y2JpOHFYRzRnSUNBZ1UzQnNhWFFnYzNCaFkyVXRaR1ZzYVcxcGRHVmtJSE4wY21sdVoxeHVYRzRnSUNBZ1hDSm1iMjhnWW1GeVhDSWdMVDRnVzF3aVptOXZYQ0lzSUZ3aVltRnlYQ0pkWEc1Y2JpQWdJQ0JBY0dGeVlXMGdXM04wY21sdVoxMWNiaUFnSUNCQWNtVjBkWEp1SUZ0aGNuSmhlVjFjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYzNCc2FYUlRjR0ZqWlVSbGJHbHRhWFJsWkNBOUlDaDJZV3gxWlNrZ1BUNGdhWE5UZEhKcGJtY29kbUZzZFdVcElEOGdkbUZzZFdVdWMzQnNhWFFvSnlBbktTQTZJRnQyWVd4MVpWMDdYRzVjYmk4cVhHNGdJQ0FnUTI5dWRtVnlkQ0J1ZFcxaVpYSWdkRzhnZUNCa1pXTnBiV0ZzSUhCc1lXTmxjMXh1WEc0Z0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZFhHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRYRzRnSUNBZ1FISmxkSFZ5YmlCYmJuVnRZbVZ5WFZ4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCMGIwUmxZMmx0WVd3Z1BTQW9iblZ0TENCd2NtVmphWE5wYjI0Z1BTQXlLU0E5UGlCN1hHNGdJQ0FnY0hKbFkybHphVzl1SUQwZ01UQWdLaW9nY0hKbFkybHphVzl1TzF4dUlDQWdJSEpsZEhWeWJpQk5ZWFJvTG5KdmRXNWtLRzUxYlNBcUlIQnlaV05wYzJsdmJpa2dMeUJ3Y21WamFYTnBiMjQ3WEc1OU8xeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvdXRpbHMuanNcbiAqKiBtb2R1bGUgaWQgPSAyMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2RlZmF1bHRQcm9wcyA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGVmYXVsdC1wcm9wcycpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgZGVmYXVsdFByb3BzOiBfZGVmYXVsdFByb3BzLm9wYWNpdHlcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTloYkhCb1lTNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3TzBGQlFVRTdPMnRDUVVWbE8wRkJRMWdzZFVOQlJGY2lMQ0ptYVd4bElqb2lZV3h3YUdFdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUXZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElIc2diM0JoWTJsMGVTQjlJR1p5YjIwZ0p5NHZjMlYwZEdsdVozTXZaR1ZtWVhWc2RDMXdjbTl3Y3ljN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElIdGNiaUFnSUNCa1pXWmhkV3gwVUhKdmNITTZJRzl3WVdOcGRIbGNibjA3SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvYWxwaGEuanNcbiAqKiBtb2R1bGUgaWQgPSAyMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3VuaXQgPSByZXF1aXJlKCcuL3VuaXQnKTtcblxudmFyIF91bml0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3VuaXQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIHVuaXQ6ICdkZWcnLFxuICAgICAgICB0eXBlOiBfdW5pdDIuZGVmYXVsdFxuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTloYm1kc1pTNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3TzBGQlFVRTdPenM3T3p0clFrRkZaVHRCUVVOWUxHdENRVUZqTzBGQlExWXNZMEZCVFN4TFFVRk9PMEZCUTBFc05FSkJSbFU3UzBGQlpDSXNJbVpwYkdVaU9pSmhibWRzWlM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRDOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2RXNXBkRlI1Y0dVZ1puSnZiU0FuTGk5MWJtbDBKenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnZTF4dUlDQWdJR1JsWm1GMWJIUlFjbTl3Y3pvZ2UxeHVJQ0FnSUNBZ0lDQjFibWwwT2lBblpHVm5KeXhjYmlBZ0lDQWdJQ0FnZEhsd1pUb2dkVzVwZEZSNWNHVmNiaUFnSUNCOVhHNTlPeUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvYW5nbGUuanNcbiAqKiBtb2R1bGUgaWQgPSAyM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3JnYiA9IHJlcXVpcmUoJy4vcmdiJyk7XG5cbnZhciBfcmdiMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JnYik7XG5cbnZhciBfaHNsID0gcmVxdWlyZSgnLi9oc2wnKTtcblxudmFyIF9oc2wyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaHNsKTtcblxudmFyIF9oZXggPSByZXF1aXJlKCcuL2hleCcpO1xuXG52YXIgX2hleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oZXgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgY29sb3JUeXBlcyA9IFtfcmdiMi5kZWZhdWx0LCBfaHNsMi5kZWZhdWx0LCBfaGV4Mi5kZWZhdWx0XTtcbnZhciBudW1Db2xvclR5cGVzID0gY29sb3JUeXBlcy5sZW5ndGg7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IF9leHRlbmRzKHt9LCBfcmdiMi5kZWZhdWx0LmRlZmF1bHRQcm9wcywgX2hzbDIuZGVmYXVsdC5kZWZhdWx0UHJvcHMpLFxuXG4gICAgdGVzdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBfcmdiMi5kZWZhdWx0LnRlc3QodmFsdWUpIHx8IF9oZXgyLmRlZmF1bHQudGVzdCh2YWx1ZSkgfHwgX2hzbDIuZGVmYXVsdC50ZXN0KHZhbHVlKTtcbiAgICB9LFxuXG4gICAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bUNvbG9yVHlwZXM7IGkrKykge1xuICAgICAgICAgICAgaWYgKGNvbG9yVHlwZXNbaV0udGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29sb3JUeXBlc1tpXS5zcGxpdCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgY29tYmluZTogZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICByZXR1cm4gdmFsdWVzLlJlZCAhPT0gdW5kZWZpbmVkID8gX3JnYjIuZGVmYXVsdC5jb21iaW5lKHZhbHVlcykgOiBfaHNsMi5kZWZhdWx0LmNvbWJpbmUodmFsdWVzKTtcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5amIyeHZjaTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdRVUZCUVRzN096dEJRVU5CT3pzN08wRkJRMEU3T3pzN096dEJRVVZCTEVsQlFVMHNZVUZCWVN3MlEwRkJZanRCUVVOT0xFbEJRVTBzWjBKQlFXZENMRmRCUVZjc1RVRkJXRHM3YTBKQlJWQTdRVUZEV0N3clFrRkJiVUlzWTBGQlNTeFpRVUZLTEVWQlFYRkNMR05CUVVrc1dVRkJTaXhEUVVGNFF6czdRVUZGUVN4VlFVRk5MRlZCUVVNc1MwRkJSRHRsUVVGWExHTkJRVWtzU1VGQlNpeERRVUZUTEV0QlFWUXNTMEZCYlVJc1kwRkJTU3hKUVVGS0xFTkJRVk1zUzBGQlZDeERRVUZ1UWl4SlFVRnpReXhqUVVGSkxFbEJRVW9zUTBGQlV5eExRVUZVTEVOQlFYUkRPMHRCUVZnN08wRkJSVTRzVjBGQlR5eFZRVUZETEV0QlFVUXNSVUZCVnp0QlFVTmtMR0ZCUVVzc1NVRkJTU3hKUVVGSkxFTkJRVW9zUlVGQlR5eEpRVUZKTEdGQlFVb3NSVUZCYlVJc1IwRkJia01zUlVGQmQwTTdRVUZEY0VNc1owSkJRVWtzVjBGQlZ5eERRVUZZTEVWQlFXTXNTVUZCWkN4RFFVRnRRaXhMUVVGdVFpeERRVUZLTEVWQlFTdENPMEZCUXpOQ0xIVkNRVUZQTEZkQlFWY3NRMEZCV0N4RlFVRmpMRXRCUVdRc1EwRkJiMElzUzBGQmNFSXNRMEZCVUN4RFFVUXlRanRoUVVFdlFqdFRRVVJLTzB0QlJFYzdPMEZCVVZBc1lVRkJVeXhWUVVGRExFMUJRVVE3WlVGQldTeE5RVUZETEVOQlFVOHNSMEZCVUN4TFFVRmxMRk5CUVdZc1IwRkJORUlzWTBGQlNTeFBRVUZLTEVOQlFWa3NUVUZCV2l4RFFVRTNRaXhIUVVGdFJDeGpRVUZKTEU5QlFVb3NRMEZCV1N4TlFVRmFMRU5CUVc1RU8wdEJRVm9pTENKbWFXeGxJam9pWTI5c2IzSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFF2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSEpuWWlCbWNtOXRJQ2N1TDNKbllpYzdYRzVwYlhCdmNuUWdhSE5zSUdaeWIyMGdKeTR2YUhOc0p6dGNibWx0Y0c5eWRDQm9aWGdnWm5KdmJTQW5MaTlvWlhnbk8xeHVYRzVqYjI1emRDQmpiMnh2Y2xSNWNHVnpJRDBnVzNKbllpd2dhSE5zTENCb1pYaGRPMXh1WTI5dWMzUWdiblZ0UTI5c2IzSlVlWEJsY3lBOUlHTnZiRzl5Vkhsd1pYTXViR1Z1WjNSb08xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQjdYRzRnSUNBZ1pHVm1ZWFZzZEZCeWIzQnpPaUI3SUM0dUxuSm5ZaTVrWldaaGRXeDBVSEp2Y0hNc0lDNHVMbWh6YkM1a1pXWmhkV3gwVUhKdmNITWdmU3hjYmx4dUlDQWdJSFJsYzNRNklDaDJZV3gxWlNrZ1BUNGdjbWRpTG5SbGMzUW9kbUZzZFdVcElIeDhJR2hsZUM1MFpYTjBLSFpoYkhWbEtTQjhmQ0JvYzJ3dWRHVnpkQ2gyWVd4MVpTa3NYRzVjYmlBZ0lDQnpjR3hwZERvZ0tIWmhiSFZsS1NBOVBpQjdYRzRnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnYm5WdFEyOXNiM0pVZVhCbGN6c2dhU3NyS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb1kyOXNiM0pVZVhCbGMxdHBYUzUwWlhOMEtIWmhiSFZsS1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCamIyeHZjbFI1Y0dWelcybGRMbk53YkdsMEtIWmhiSFZsS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDBzWEc1Y2JpQWdJQ0JqYjIxaWFXNWxPaUFvZG1Gc2RXVnpLU0E5UGlBb2RtRnNkV1Z6TGxKbFpDQWhQVDBnZFc1a1pXWnBibVZrS1NBL0lISm5ZaTVqYjIxaWFXNWxLSFpoYkhWbGN5a2dPaUJvYzJ3dVkyOXRZbWx1WlNoMllXeDFaWE1wWEc1OU8xeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9jb2xvci5qc1xuICoqIG1vZHVsZSBpZCA9IDI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxudmFyIEZMT0FUX1JFR0VYID0gLygtKT8oXFxkW1xcZFxcLl0qKS9nO1xudmFyIGdlbmVyYXRlVG9rZW4gPSBmdW5jdGlvbiAodG9rZW4pIHtcbiAgICByZXR1cm4gJyR7JyArIHRva2VuICsgJ30nO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuXG4gICAgdGVzdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBtYXRjaGVzID0gdmFsdWUubWF0Y2goRkxPQVRfUkVHRVgpO1xuICAgICAgICByZXR1cm4gKDAsIF91dGlscy5pc0FycmF5KShtYXRjaGVzKSAmJiBtYXRjaGVzLmxlbmd0aCA+IDE7XG4gICAgfSxcblxuICAgIHRlbXBsYXRlOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIGNvdW50ZXIgPSAwO1xuICAgICAgICByZXR1cm4gdmFsdWUucmVwbGFjZShGTE9BVF9SRUdFWCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGdlbmVyYXRlVG9rZW4oY291bnRlcisrKTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIHNwbGl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIHNwbGl0VmFsdWUgPSB7fTtcblxuICAgICAgICB2YWx1ZS5tYXRjaChGTE9BVF9SRUdFWCkuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGkpIHtcbiAgICAgICAgICAgIHJldHVybiBzcGxpdFZhbHVlW2ldID0gdmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBzcGxpdFZhbHVlO1xuICAgIH0sXG5cbiAgICBjb21iaW5lOiBmdW5jdGlvbiAodmFsdWVzLCB0ZW1wbGF0ZSkge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZSA9IHRlbXBsYXRlLnJlcGxhY2UoZ2VuZXJhdGVUb2tlbihrZXkpLCB2YWx1ZXNba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgfVxuXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5amIyMXdiR1Y0TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdRVUZCUVRzN1FVRkZRU3hKUVVGTkxHTkJRV01zYTBKQlFXUTdRVUZEVGl4SlFVRk5MR2RDUVVGblFpeFZRVUZETEV0QlFVUTdWMEZCVnl4UFFVRlBMRXRCUVZBc1IwRkJaU3hIUVVGbU8wTkJRVmc3TzJ0Q1FVVlFPenRCUVVWWUxGVkJRVTBzVlVGQlF5eExRVUZFTEVWQlFWYzdRVUZEWWl4WlFVRk5MRlZCUVZVc1RVRkJUU3hMUVVGT0xFTkJRVmtzVjBGQldpeERRVUZXTEVOQlJFODdRVUZGWWl4bFFVRlJMRzlDUVVGUkxFOUJRVklzUzBGQmIwSXNVVUZCVVN4TlFVRlNMRWRCUVdsQ0xFTkJRV3BDTEVOQlJtWTdTMEZCV0RzN1FVRkxUaXhqUVVGVkxGVkJRVU1zUzBGQlJDeEZRVUZYTzBGQlEycENMRmxCUVVrc1ZVRkJWU3hEUVVGV0xFTkJSR0U3UVVGRmFrSXNaVUZCVHl4TlFVRk5MRTlCUVU0c1EwRkJZeXhYUVVGa0xFVkJRVEpDTzIxQ1FVRk5MR05CUVdNc1UwRkJaRHRUUVVGT0xFTkJRV3hETEVOQlJtbENPMHRCUVZnN08wRkJTMVlzVjBGQlR5eFZRVUZETEV0QlFVUXNSVUZCVnp0QlFVTmtMRmxCUVUwc1lVRkJZU3hGUVVGaUxFTkJSRkU3TzBGQlIyUXNZMEZCVFN4TFFVRk9MRU5CUVZrc1YwRkJXaXhGUVVGNVFpeFBRVUY2UWl4RFFVRnBReXhWUVVGRExFdEJRVVFzUlVGQlVTeERRVUZTTzIxQ1FVRmpMRmRCUVZjc1EwRkJXQ3hKUVVGblFpeExRVUZvUWp0VFFVRmtMRU5CUVdwRExFTkJTR003TzBGQlMyUXNaVUZCVHl4VlFVRlFMRU5CVEdNN1MwRkJXRHM3UVVGUlVDeGhRVUZUTEZWQlFVTXNUVUZCUkN4RlFVRlRMRkZCUVZRc1JVRkJjMEk3UVVGRE0wSXNZVUZCU3l4SlFVRkpMRWRCUVVvc1NVRkJWeXhOUVVGb1FpeEZRVUYzUWp0QlFVTndRaXhuUWtGQlNTeFBRVUZQTEdOQlFWQXNRMEZCYzBJc1IwRkJkRUlzUTBGQlNpeEZRVUZuUXp0QlFVTTFRaXd5UWtGQlZ5eFRRVUZUTEU5QlFWUXNRMEZCYVVJc1kwRkJZeXhIUVVGa0xFTkJRV3BDTEVWQlFYRkRMRTlCUVU4c1IwRkJVQ3hEUVVGeVF5eERRVUZZTEVOQlJEUkNPMkZCUVdoRE8xTkJSRW83TzBGQlRVRXNaVUZCVHl4UlFVRlFMRU5CVURKQ08wdEJRWFJDSWl3aVptbHNaU0k2SW1OdmJYQnNaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhzZ2FYTkJjbkpoZVNCOUlHWnliMjBnSnk0dUwybHVZeTkxZEdsc2N5YzdYRzVjYm1OdmJuTjBJRVpNVDBGVVgxSkZSMFZZSUQwZ0x5Z3RLVDhvWEZ4a1cxeGNaRnhjTGwwcUtTOW5PMXh1WTI5dWMzUWdaMlZ1WlhKaGRHVlViMnRsYmlBOUlDaDBiMnRsYmlrZ1BUNGdKeVI3SnlBcklIUnZhMlZ1SUNzZ0ozMG5PMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0I3WEc1Y2JpQWdJQ0IwWlhOME9pQW9kbUZzZFdVcElEMCtJSHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdiV0YwWTJobGN5QTlJSFpoYkhWbExtMWhkR05vS0VaTVQwRlVYMUpGUjBWWUtUdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlDaHBjMEZ5Y21GNUtHMWhkR05vWlhNcElDWW1JRzFoZEdOb1pYTXViR1Z1WjNSb0lENGdNU2s3WEc0Z0lDQWdmU3hjYmx4dUlDQWdJSFJsYlhCc1lYUmxPaUFvZG1Gc2RXVXBJRDArSUh0Y2JpQWdJQ0FnSUNBZ2JHVjBJR052ZFc1MFpYSWdQU0F3TzF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZG1Gc2RXVXVjbVZ3YkdGalpTaEdURTlCVkY5U1JVZEZXQ3dnS0NrZ1BUNGdaMlZ1WlhKaGRHVlViMnRsYmloamIzVnVkR1Z5S3lzcEtUdGNiaUFnSUNCOUxGeHVYRzRnSUNBZ2MzQnNhWFE2SUNoMllXeDFaU2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCemNHeHBkRlpoYkhWbElEMGdlMzA3WEc1Y2JpQWdJQ0FnSUNBZ2RtRnNkV1V1YldGMFkyZ29Sa3hQUVZSZlVrVkhSVmdwTG1admNrVmhZMmdvS0haaGJIVmxMQ0JwS1NBOVBpQnpjR3hwZEZaaGJIVmxXMmxkSUQwZ2RtRnNkV1VwTzF4dVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCemNHeHBkRlpoYkhWbE8xeHVJQ0FnSUgwc1hHNWNiaUFnSUNCamIyMWlhVzVsT2lBb2RtRnNkV1Z6TENCMFpXMXdiR0YwWlNrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0JtYjNJZ0tHeGxkQ0JyWlhrZ2FXNGdkbUZzZFdWektTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9kbUZzZFdWekxtaGhjMDkzYmxCeWIzQmxjblI1S0d0bGVTa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwWlcxd2JHRjBaU0E5SUhSbGJYQnNZWFJsTG5KbGNHeGhZMlVvWjJWdVpYSmhkR1ZVYjJ0bGJpaHJaWGtwTENCMllXeDFaWE5iYTJWNVhTazdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR1Z0Y0d4aGRHVTdYRzRnSUNBZ2ZWeHVYRzU5T3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2NvbXBsZXguanNcbiAqKiBtb2R1bGUgaWQgPSAyNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3JnYiA9IHJlcXVpcmUoJy4vcmdiJyk7XG5cbnZhciBfcmdiMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JnYik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IF9yZ2IyLmRlZmF1bHQuZGVmYXVsdFByb3BzLFxuXG4gICAgdGVzdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mKCcjJykgPiAtMTtcbiAgICB9LFxuXG4gICAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgciA9IHZvaWQgMCxcbiAgICAgICAgICAgIGcgPSB2b2lkIDAsXG4gICAgICAgICAgICBiID0gdm9pZCAwO1xuXG4gICAgICAgIC8vIElmIHdlIGhhdmUgNiBjaGFyYWN0ZXJzLCBpZSAjRkYwMDAwXG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiA0KSB7XG4gICAgICAgICAgICByID0gdmFsdWUuc3Vic3RyKDEsIDIpO1xuICAgICAgICAgICAgZyA9IHZhbHVlLnN1YnN0cigzLCAyKTtcbiAgICAgICAgICAgIGIgPSB2YWx1ZS5zdWJzdHIoNSwgMik7XG5cbiAgICAgICAgICAgIC8vIE9yIHdlIGhhdmUgMyBjaGFyYWN0ZXJzLCBpZSAjRjAwXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgciA9IHZhbHVlLnN1YnN0cigxLCAxKTtcbiAgICAgICAgICAgICAgICBnID0gdmFsdWUuc3Vic3RyKDIsIDEpO1xuICAgICAgICAgICAgICAgIGIgPSB2YWx1ZS5zdWJzdHIoMywgMSk7XG4gICAgICAgICAgICAgICAgciArPSByO1xuICAgICAgICAgICAgICAgIGcgKz0gZztcbiAgICAgICAgICAgICAgICBiICs9IGI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFJlZDogcGFyc2VJbnQociwgMTYpLFxuICAgICAgICAgICAgR3JlZW46IHBhcnNlSW50KGcsIDE2KSxcbiAgICAgICAgICAgIEJsdWU6IHBhcnNlSW50KGIsIDE2KSxcbiAgICAgICAgICAgIEFscGhhOiAxXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuIF9yZ2IyLmRlZmF1bHQuY29tYmluZSh2YWx1ZXMpO1xuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTlvWlhndWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenRCUVVGQk96czdPenM3YTBKQlJXVTdRVUZEV0N4clFrRkJZeXhqUVVGSkxGbEJRVW83TzBGQlJXUXNWVUZCVFN4VlFVRkRMRXRCUVVRN1pVRkJXU3hUUVVGVExFMUJRVTBzVDBGQlRpeERRVUZqTEVkQlFXUXNTVUZCY1VJc1EwRkJReXhEUVVGRU8wdEJRVEZET3p0QlFVVk9MRmRCUVU4c1ZVRkJReXhMUVVGRUxFVkJRVmM3UVVGRFpDeFpRVUZKTEZWQlFVbzdXVUZCVHl4VlFVRlFPMWxCUVZVc1ZVRkJWanM3TzBGQlJHTXNXVUZKVml4TlFVRk5MRTFCUVU0c1IwRkJaU3hEUVVGbUxFVkJRV3RDTzBGQlEyeENMR2RDUVVGSkxFMUJRVTBzVFVGQlRpeERRVUZoTEVOQlFXSXNSVUZCWjBJc1EwRkJhRUlzUTBGQlNpeERRVVJyUWp0QlFVVnNRaXhuUWtGQlNTeE5RVUZOTEUxQlFVNHNRMEZCWVN4RFFVRmlMRVZCUVdkQ0xFTkJRV2hDTEVOQlFVb3NRMEZHYTBJN1FVRkhiRUlzWjBKQlFVa3NUVUZCVFN4TlFVRk9MRU5CUVdFc1EwRkJZaXhGUVVGblFpeERRVUZvUWl4RFFVRktPenM3UVVGSWEwSXNVMEZCZEVJc1RVRk5UenRCUVVOSUxHOUNRVUZKTEUxQlFVMHNUVUZCVGl4RFFVRmhMRU5CUVdJc1JVRkJaMElzUTBGQmFFSXNRMEZCU2l4RFFVUkhPMEZCUlVnc2IwSkJRVWtzVFVGQlRTeE5RVUZPTEVOQlFXRXNRMEZCWWl4RlFVRm5RaXhEUVVGb1FpeERRVUZLTEVOQlJrYzdRVUZIU0N4dlFrRkJTU3hOUVVGTkxFMUJRVTRzUTBGQllTeERRVUZpTEVWQlFXZENMRU5CUVdoQ0xFTkJRVW9zUTBGSVJ6dEJRVWxJTEhGQ1FVRkxMRU5CUVV3c1EwRktSenRCUVV0SUxIRkNRVUZMTEVOQlFVd3NRMEZNUnp0QlFVMUlMSEZDUVVGTExFTkJRVXdzUTBGT1J6dGhRVTVRT3p0QlFXVkJMR1ZCUVU4N1FVRkRTQ3hwUWtGQlN5eFRRVUZUTEVOQlFWUXNSVUZCV1N4RlFVRmFMRU5CUVV3N1FVRkRRU3h0UWtGQlR5eFRRVUZUTEVOQlFWUXNSVUZCV1N4RlFVRmFMRU5CUVZBN1FVRkRRU3hyUWtGQlRTeFRRVUZUTEVOQlFWUXNSVUZCV1N4RlFVRmFMRU5CUVU0N1FVRkRRU3h0UWtGQlR5eERRVUZRTzFOQlNrb3NRMEZ1UW1NN1MwRkJXRHM3UVVFeVFsQXNZVUZCVXl4VlFVRkRMRTFCUVVRN1pVRkJXU3hqUVVGSkxFOUJRVW9zUTBGQldTeE5RVUZhTzB0QlFWb2lMQ0ptYVd4bElqb2lhR1Y0TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMEwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCeVoySWdabkp2YlNBbkxpOXlaMkluTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCN1hHNGdJQ0FnWkdWbVlYVnNkRkJ5YjNCek9pQnlaMkl1WkdWbVlYVnNkRkJ5YjNCekxGeHVYRzRnSUNBZ2RHVnpkRG9nS0haaGJIVmxLU0E5UGlBb2RtRnNkV1VnSmlZZ2RtRnNkV1V1YVc1a1pYaFBaaWduSXljcElENGdMVEVwTEZ4dVhHNGdJQ0FnYzNCc2FYUTZJQ2gyWVd4MVpTa2dQVDRnZTF4dUlDQWdJQ0FnSUNCc1pYUWdjaXdnWnl3Z1lqdGNibHh1SUNBZ0lDQWdJQ0F2THlCSlppQjNaU0JvWVhabElEWWdZMmhoY21GamRHVnljeXdnYVdVZ0kwWkdNREF3TUZ4dUlDQWdJQ0FnSUNCcFppQW9kbUZzZFdVdWJHVnVaM1JvSUQ0Z05Da2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NpQTlJSFpoYkhWbExuTjFZbk4wY2lneExDQXlLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHY2dQU0IyWVd4MVpTNXpkV0p6ZEhJb015d2dNaWs3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmlJRDBnZG1Gc2RXVXVjM1ZpYzNSeUtEVXNJRElwTzF4dVhHNGdJQ0FnSUNBZ0lDOHZJRTl5SUhkbElHaGhkbVVnTXlCamFHRnlZV04wWlhKekxDQnBaU0FqUmpBd1hHNGdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5SUQwZ2RtRnNkV1V1YzNWaWMzUnlLREVzSURFcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWnlBOUlIWmhiSFZsTG5OMVluTjBjaWd5TENBeEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUdJZ1BTQjJZV3gxWlM1emRXSnpkSElvTXl3Z01TazdYRzRnSUNBZ0lDQWdJQ0FnSUNCeUlDczlJSEk3WEc0Z0lDQWdJQ0FnSUNBZ0lDQm5JQ3M5SUdjN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JpSUNzOUlHSTdYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdVbVZrT2lCd1lYSnpaVWx1ZENoeUxDQXhOaWtzWEc0Z0lDQWdJQ0FnSUNBZ0lDQkhjbVZsYmpvZ2NHRnljMlZKYm5Rb1p5d2dNVFlwTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdRbXgxWlRvZ2NHRnljMlZKYm5Rb1lpd2dNVFlwTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdRV3h3YUdFNklERmNiaUFnSUNBZ0lDQWdmVHRjYmlBZ0lDQjlMRnh1WEc0Z0lDQWdZMjl0WW1sdVpUb2dLSFpoYkhWbGN5a2dQVDRnY21kaUxtTnZiV0pwYm1Vb2RtRnNkV1Z6S1Z4dWZUc2lYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9oZXguanNcbiAqKiBtb2R1bGUgaWQgPSAyNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2RlZmF1bHRQcm9wcyA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGVmYXVsdC1wcm9wcycpO1xuXG52YXIgX2RpY3Rpb25hcnkgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RpY3Rpb25hcnknKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIEh1ZToge1xuICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgbWF4OiAzNjBcbiAgICAgICAgfSxcbiAgICAgICAgU2F0dXJhdGlvbjogX2RlZmF1bHRQcm9wcy5wZXJjZW50LFxuICAgICAgICBMaWdodG5lc3M6IF9kZWZhdWx0UHJvcHMucGVyY2VudCxcbiAgICAgICAgQWxwaGE6IF9kZWZhdWx0UHJvcHMub3BhY2l0eVxuICAgIH0sXG5cbiAgICB0ZXN0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlICYmIHZhbHVlLmluZGV4T2YoJ2hzbCcpID4gLTE7XG4gICAgfSxcblxuICAgIHNwbGl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMuZ2V0Q29sb3JWYWx1ZXMpKHZhbHVlLCBfZGljdGlvbmFyeS5oc2wpO1xuICAgIH0sXG5cbiAgICBjb21iaW5lOiBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzLmNyZWF0ZUZ1bmN0aW9uU3RyaW5nKSgoMCwgX3V0aWxzLmNyZWF0ZURlbGltaXRlZCkodmFsdWVzLCBfZGljdGlvbmFyeS5oc2wsICcsICcsIDIpLCAnaHNsYScpO1xuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTlvYzJ3dWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenRCUVVGQk96dEJRVU5CT3p0QlFVTkJPenRyUWtGRlpUdEJRVU5ZTEd0Q1FVRmpPMEZCUTFZc1lVRkJTenRCUVVORUxHbENRVUZMTEVOQlFVdzdRVUZEUVN4cFFrRkJTeXhIUVVGTU8xTkJSa283UVVGSlFTeDVRMEZNVlR0QlFVMVdMSGREUVU1Vk8wRkJUMVlzYjBOQlVGVTdTMEZCWkRzN1FVRlZRU3hWUVVGTkxGVkJRVU1zUzBGQlJEdGxRVUZaTEZOQlFWTXNUVUZCVFN4UFFVRk9MRU5CUVdNc1MwRkJaQ3hKUVVGMVFpeERRVUZETEVOQlFVUTdTMEZCTlVNN08wRkJSVTRzVjBGQlR5eFZRVUZETEV0QlFVUTdaVUZCVnl3eVFrRkJaU3hMUVVGbU8wdEJRVmc3TzBGQlJWQXNZVUZCVXl4VlFVRkRMRTFCUVVRN1pVRkJXU3hwUTBGQmNVSXNORUpCUVdkQ0xFMUJRV2hDTEcxQ1FVRnJReXhKUVVGc1F5eEZRVUYzUXl4RFFVRjRReXhEUVVGeVFpeEZRVUZwUlN4TlFVRnFSVHRMUVVGYUlpd2labWxzWlNJNkltaHpiQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZXlCd1pYSmpaVzUwTENCdmNHRmphWFI1SUgwZ1puSnZiU0FuTGk5elpYUjBhVzVuY3k5a1pXWmhkV3gwTFhCeWIzQnpKenRjYm1sdGNHOXlkQ0I3SUdoemJDQmhjeUJvYzJ4VVpYSnRjeUI5SUdaeWIyMGdKeTR2YzJWMGRHbHVaM012WkdsamRHbHZibUZ5ZVNjN1hHNXBiWEJ2Y25RZ2V5QmpjbVZoZEdWRVpXeHBiV2wwWldRc0lHTnlaV0YwWlVaMWJtTjBhVzl1VTNSeWFXNW5MQ0JuWlhSRGIyeHZjbFpoYkhWbGN5QjlJR1p5YjIwZ0p5NHVMMmx1WXk5MWRHbHNjeWM3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUh0Y2JpQWdJQ0JrWldaaGRXeDBVSEp2Y0hNNklIdGNiaUFnSUNBZ0lDQWdTSFZsT2lCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J0YVc0NklEQXNYRzRnSUNBZ0lDQWdJQ0FnSUNCdFlYZzZJRE0yTUZ4dUlDQWdJQ0FnSUNCOUxGeHVJQ0FnSUNBZ0lDQlRZWFIxY21GMGFXOXVPaUJ3WlhKalpXNTBMRnh1SUNBZ0lDQWdJQ0JNYVdkb2RHNWxjM002SUhCbGNtTmxiblFzWEc0Z0lDQWdJQ0FnSUVGc2NHaGhPaUJ2Y0dGamFYUjVYRzRnSUNBZ2ZTeGNibHh1SUNBZ0lIUmxjM1E2SUNoMllXeDFaU2tnUFQ0Z0tIWmhiSFZsSUNZbUlIWmhiSFZsTG1sdVpHVjRUMllvSjJoemJDY3BJRDRnTFRFcExGeHVYRzRnSUNBZ2MzQnNhWFE2SUNoMllXeDFaU2tnUFQ0Z1oyVjBRMjlzYjNKV1lXeDFaWE1vZG1Gc2RXVXNJR2h6YkZSbGNtMXpLU3hjYmx4dUlDQWdJR052YldKcGJtVTZJQ2gyWVd4MVpYTXBJRDArSUdOeVpXRjBaVVoxYm1OMGFXOXVVM1J5YVc1bktHTnlaV0YwWlVSbGJHbHRhWFJsWkNoMllXeDFaWE1zSUdoemJGUmxjbTF6TENBbkxDQW5MQ0F5S1N3Z0oyaHpiR0VuS1Z4dWZUdGNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvaHNsLmpzXG4gKiogbW9kdWxlIGlkID0gMjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF91bml0ID0gcmVxdWlyZSgnLi91bml0Jyk7XG5cbnZhciBfdW5pdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91bml0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICB1bml0OiAncHgnLFxuICAgICAgICB0eXBlOiBfdW5pdDIuZGVmYXVsdFxuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTl3ZUM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPMEZCUVVFN096czdPenRyUWtGRlpUdEJRVU5ZTEd0Q1FVRmpPMEZCUTFZc1kwRkJUU3hKUVVGT08wRkJRMEVzTkVKQlJsVTdTMEZCWkNJc0ltWnBiR1VpT2lKd2VDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdkVzVwZEZSNWNHVWdabkp2YlNBbkxpOTFibWwwSnp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2UxeHVJQ0FnSUdSbFptRjFiSFJRY205d2N6b2dlMXh1SUNBZ0lDQWdJQ0IxYm1sME9pQW5jSGduTEZ4dUlDQWdJQ0FnSUNCMGVYQmxPaUIxYm1sMFZIbHdaVnh1SUNBZ0lIMWNibjA3SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvcHguanNcbiAqKiBtb2R1bGUgaWQgPSAyOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbnZhciBfZGljdGlvbmFyeSA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGljdGlvbmFyeScpO1xuXG52YXIgX2RlZmF1bHRQcm9wcyA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGVmYXVsdC1wcm9wcycpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIFJlZDogX2RlZmF1bHRQcm9wcy5yZ2IsXG4gICAgICAgIEdyZWVuOiBfZGVmYXVsdFByb3BzLnJnYixcbiAgICAgICAgQmx1ZTogX2RlZmF1bHRQcm9wcy5yZ2IsXG4gICAgICAgIEFscGhhOiBfZGVmYXVsdFByb3BzLm9wYWNpdHlcbiAgICB9LFxuXG4gICAgdGVzdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mKCdyZ2InKSA+IC0xO1xuICAgIH0sXG5cbiAgICBzcGxpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzLmdldENvbG9yVmFsdWVzKSh2YWx1ZSwgX2RpY3Rpb25hcnkucmdiKTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICByZXR1cm4gKDAsIF91dGlscy5jcmVhdGVGdW5jdGlvblN0cmluZykoKDAsIF91dGlscy5jcmVhdGVEZWxpbWl0ZWQpKHZhbHVlcywgX2RpY3Rpb25hcnkucmdiLCAnLCAnLCAyKSwgJ3JnYmEnKTtcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5eVoySXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0QlFVRkJPenRCUVVOQk96dEJRVU5CT3p0clFrRkZaVHRCUVVOWUxHdENRVUZqTzBGQlExWXNPRUpCUkZVN1FVRkZWaXhuUTBGR1ZUdEJRVWRXTEN0Q1FVaFZPMEZCU1ZZc2IwTkJTbFU3UzBGQlpEczdRVUZQUVN4VlFVRk5MRlZCUVVNc1MwRkJSRHRsUVVGWkxGTkJRVk1zVFVGQlRTeFBRVUZPTEVOQlFXTXNTMEZCWkN4SlFVRjFRaXhEUVVGRExFTkJRVVE3UzBGQk5VTTdPMEZCUlU0c1YwRkJUeXhWUVVGRExFdEJRVVE3WlVGQlZ5d3lRa0ZCWlN4TFFVRm1PMHRCUVZnN08wRkJSVkFzWVVGQlV5eFZRVUZETEUxQlFVUTdaVUZCV1N4cFEwRkJjVUlzTkVKQlFXZENMRTFCUVdoQ0xHMUNRVUZyUXl4SlFVRnNReXhGUVVGM1F5eERRVUY0UXl4RFFVRnlRaXhGUVVGcFJTeE5RVUZxUlR0TFFVRmFJaXdpWm1sc1pTSTZJbkpuWWk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRDOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2V5QmpjbVZoZEdWRVpXeHBiV2wwWldRc0lHTnlaV0YwWlVaMWJtTjBhVzl1VTNSeWFXNW5MQ0JuWlhSRGIyeHZjbFpoYkhWbGN5QjlJR1p5YjIwZ0p5NHVMMmx1WXk5MWRHbHNjeWM3WEc1cGJYQnZjblFnZXlCeVoySWdZWE1nY21kaVZHVnliWE1nZlNCbWNtOXRJQ2N1TDNObGRIUnBibWR6TDJScFkzUnBiMjVoY25rbk8xeHVhVzF3YjNKMElIc2djbWRpSUdGeklHUmxabUYxYkhSU1IwSXNJRzl3WVdOcGRIa2dZWE1nWkdWbVlYVnNkRTl3WVdOcGRIa2dmU0JtY205dElDY3VMM05sZEhScGJtZHpMMlJsWm1GMWJIUXRjSEp2Y0hNbk8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQjdYRzRnSUNBZ1pHVm1ZWFZzZEZCeWIzQnpPaUI3WEc0Z0lDQWdJQ0FnSUZKbFpEb2daR1ZtWVhWc2RGSkhRaXhjYmlBZ0lDQWdJQ0FnUjNKbFpXNDZJR1JsWm1GMWJIUlNSMElzWEc0Z0lDQWdJQ0FnSUVKc2RXVTZJR1JsWm1GMWJIUlNSMElzWEc0Z0lDQWdJQ0FnSUVGc2NHaGhPaUJrWldaaGRXeDBUM0JoWTJsMGVWeHVJQ0FnSUgwc1hHNWNiaUFnSUNCMFpYTjBPaUFvZG1Gc2RXVXBJRDArSUNoMllXeDFaU0FtSmlCMllXeDFaUzVwYm1SbGVFOW1LQ2R5WjJJbktTQStJQzB4S1N4Y2JseHVJQ0FnSUhOd2JHbDBPaUFvZG1Gc2RXVXBJRDArSUdkbGRFTnZiRzl5Vm1Gc2RXVnpLSFpoYkhWbExDQnlaMkpVWlhKdGN5a3NYRzVjYmlBZ0lDQmpiMjFpYVc1bE9pQW9kbUZzZFdWektTQTlQaUJqY21WaGRHVkdkVzVqZEdsdmJsTjBjbWx1WnloamNtVmhkR1ZFWld4cGJXbDBaV1FvZG1Gc2RXVnpMQ0J5WjJKVVpYSnRjeXdnSnl3Z0p5d2dNaWtzSUNkeVoySmhKeWxjYm4wN0lsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3JnYi5qc1xuICoqIG1vZHVsZSBpZCA9IDI5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgY3VycmVudDogMVxuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTl6WTJGc1pTNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3YTBKQlFXVTdRVUZEV0N4clFrRkJZenRCUVVOV0xHbENRVUZUTEVOQlFWUTdTMEZFU2lJc0ltWnBiR1VpT2lKelkyRnNaUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKbGVIQnZjblFnWkdWbVlYVnNkQ0I3WEc0Z0lDQWdaR1ZtWVhWc2RGQnliM0J6T2lCN1hHNGdJQ0FnSUNBZ0lHTjFjbkpsYm5RNklERmNiaUFnSUNCOVhHNTlPeUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvc2NhbGUuanNcbiAqKiBtb2R1bGUgaWQgPSAzMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NvbG9yID0gcmVxdWlyZSgnLi9jb2xvcicpO1xuXG52YXIgX2NvbG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbG9yKTtcblxudmFyIF9weCA9IHJlcXVpcmUoJy4vcHgnKTtcblxudmFyIF9kaWN0aW9uYXJ5ID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kaWN0aW9uYXJ5Jyk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHNoYWRvd1dpdGhvdXRDb2xvclRlcm1zID0gX2RpY3Rpb25hcnkuc2hhZG93LnNsaWNlKDAsIDQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgZGVmYXVsdFByb3BzOiBfZXh0ZW5kcyh7fSwgX2NvbG9yMi5kZWZhdWx0LmRlZmF1bHRQcm9wcywge1xuICAgICAgICBYOiBfcHguZGVmYXVsdFByb3BzLFxuICAgICAgICBZOiBfcHguZGVmYXVsdFByb3BzLFxuICAgICAgICBSYWRpdXM6IF9weC5kZWZhdWx0UHJvcHMsXG4gICAgICAgIFNwcmVhZDogX3B4LmRlZmF1bHRQcm9wc1xuICAgIH0pLFxuXG4gICAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgYml0cyA9ICgwLCBfdXRpbHMuc3BsaXRTcGFjZURlbGltaXRlZCkodmFsdWUpO1xuICAgICAgICB2YXIgaGFzUmVhY2hlZENvbG9yID0gZmFsc2U7XG4gICAgICAgIHZhciBjb2xvclByb3AgPSAnJztcbiAgICAgICAgdmFyIHNwbGl0VmFsdWUgPSB7fTtcblxuICAgICAgICBiaXRzLmZvckVhY2goZnVuY3Rpb24gKGJpdCwgaSkge1xuICAgICAgICAgICAgLy8gSWYgd2UndmUgcmVhY2hlZCB0aGUgY29sb3IgcHJvcHMsIGFwcGVuZCB0byBjb2xvciBzdHJpbmdcbiAgICAgICAgICAgIGlmIChoYXNSZWFjaGVkQ29sb3IgfHwgX2NvbG9yMi5kZWZhdWx0LnRlc3QoYml0KSkge1xuICAgICAgICAgICAgICAgIGhhc1JlYWNoZWRDb2xvciA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29sb3JQcm9wICs9IGJpdDtcblxuICAgICAgICAgICAgICAgIC8vIEVsc2UgcHJvY2VzcyBzaGFkb3cgdmFsdWVcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNwbGl0VmFsdWVbX2RpY3Rpb25hcnkuc2hhZG93W2ldXSA9IGJpdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBzcGxpdENvbG9yUHJvcHMgPSBfY29sb3IyLmRlZmF1bHQuc3BsaXQoY29sb3JQcm9wKTtcblxuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHNwbGl0VmFsdWUsIHsgc3BsaXRDb2xvclByb3BzOiBzcGxpdENvbG9yUHJvcHMgfSk7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMuY3JlYXRlRGVsaW1pdGVkKSh2YWx1ZXMsIHNoYWRvd1dpdGhvdXRDb2xvclRlcm1zLCAnICcpICsgX2NvbG9yMi5kZWZhdWx0LmNvbWJpbmUodmFsdWVzKTtcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5emFHRmtiM2N1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPMEZCUVVFN096czdRVUZEUVRzN1FVRkRRVHM3UVVGRFFUczdPenRCUVVWQkxFbEJRVTBzTUVKQlFUQkNMRzFDUVVGWkxFdEJRVm9zUTBGQmEwSXNRMEZCYkVJc1JVRkJjVUlzUTBGQmNrSXNRMEZCTVVJN08ydENRVVZUTzBGQlExZ3NLMEpCUTA4c1owSkJRVTBzV1VGQlRqdEJRVU5JTzBGQlEwRTdRVUZEUVR0QlFVTkJPMDFCVEVvN08wRkJVVUVzVjBGQlR5eFZRVUZETEV0QlFVUXNSVUZCVnp0QlFVTmtMRmxCUVUwc1QwRkJUeXhuUTBGQmIwSXNTMEZCY0VJc1EwRkJVQ3hEUVVSUk8wRkJSV1FzV1VGQlNTeHJRa0ZCYTBJc1MwRkJiRUlzUTBGR1ZUdEJRVWRrTEZsQlFVa3NXVUZCV1N4RlFVRmFMRU5CU0ZVN1FVRkpaQ3haUVVGSkxHRkJRV0VzUlVGQllpeERRVXBWT3p0QlFVMWtMR0ZCUVVzc1QwRkJUQ3hEUVVGaExGVkJRVU1zUjBGQlJDeEZRVUZOTEVOQlFVNHNSVUZCV1RzN1FVRkZja0lzWjBKQlFVa3NiVUpCUVcxQ0xHZENRVUZOTEVsQlFVNHNRMEZCVnl4SFFVRllMRU5CUVc1Q0xFVkJRVzlETzBGQlEzQkRMR3REUVVGclFpeEpRVUZzUWl4RFFVUnZRenRCUVVWd1F5dzJRa0ZCWVN4SFFVRmlPenM3UVVGR2IwTXNZVUZCZUVNc1RVRkxUenRCUVVOSUxDdENRVUZYTEcxQ1FVRlpMRU5CUVZvc1EwRkJXQ3hKUVVFMlFpeEhRVUUzUWl4RFFVUkhPMmxDUVV4UU8xTkJSbE1zUTBGQllpeERRVTVqT3p0QlFXdENaQ3haUVVGTkxHdENRVUZyUWl4blFrRkJUU3hMUVVGT0xFTkJRVmtzVTBGQldpeERRVUZzUWl4RFFXeENVVHM3UVVGdlFtUXNORUpCUVZrc1kwRkJXU3h0UTBGQmVFSXNRMEZ3UW1NN1MwRkJXRHM3UVVGMVFsQXNZVUZCVXl4VlFVRkRMRTFCUVVRN1pVRkJXU3cwUWtGQlowSXNUVUZCYUVJc1JVRkJkMElzZFVKQlFYaENMRVZCUVdsRUxFZEJRV3BFTEVsQlFYZEVMR2RDUVVGTkxFOUJRVTRzUTBGQll5eE5RVUZrTEVOQlFYaEVPMHRCUVZvaUxDSm1hV3hsSWpvaWMyaGhaRzkzTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMEwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCamIyeHZjaUJtY205dElDY3VMMk52Ykc5eUp6dGNibWx0Y0c5eWRDQjdJR1JsWm1GMWJIUlFjbTl3Y3lCaGN5QndlRVJsWm1GMWJIUlFjbTl3Y3lCOUlHWnliMjBnSnk0dmNIZ25PMXh1YVcxd2IzSjBJSHNnYzJoaFpHOTNJR0Z6SUhOb1lXUnZkMVJsY20xeklIMGdabkp2YlNBbkxpOXpaWFIwYVc1bmN5OWthV04wYVc5dVlYSjVKenRjYm1sdGNHOXlkQ0I3SUhOd2JHbDBVM0JoWTJWRVpXeHBiV2wwWldRc0lHTnlaV0YwWlVSbGJHbHRhWFJsWkNCOUlHWnliMjBnSnk0dUwybHVZeTkxZEdsc2N5YzdYRzVjYm1OdmJuTjBJSE5vWVdSdmQxZHBkR2h2ZFhSRGIyeHZjbFJsY20xeklEMGdjMmhoWkc5M1ZHVnliWE11YzJ4cFkyVW9NQ3dnTkNrN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElIdGNiaUFnSUNCa1pXWmhkV3gwVUhKdmNITTZJSHRjYmlBZ0lDQWdJQ0FnTGk0dVkyOXNiM0l1WkdWbVlYVnNkRkJ5YjNCekxGeHVJQ0FnSUNBZ0lDQllPaUJ3ZUVSbFptRjFiSFJRY205d2N5eGNiaUFnSUNBZ0lDQWdXVG9nY0hoRVpXWmhkV3gwVUhKdmNITXNYRzRnSUNBZ0lDQWdJRkpoWkdsMWN6b2djSGhFWldaaGRXeDBVSEp2Y0hNc1hHNGdJQ0FnSUNBZ0lGTndjbVZoWkRvZ2NIaEVaV1poZFd4MFVISnZjSE5jYmlBZ0lDQjlMRnh1WEc0Z0lDQWdjM0JzYVhRNklDaDJZV3gxWlNrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQmlhWFJ6SUQwZ2MzQnNhWFJUY0dGalpVUmxiR2x0YVhSbFpDaDJZV3gxWlNrN1hHNGdJQ0FnSUNBZ0lHeGxkQ0JvWVhOU1pXRmphR1ZrUTI5c2IzSWdQU0JtWVd4elpUdGNiaUFnSUNBZ0lDQWdiR1YwSUdOdmJHOXlVSEp2Y0NBOUlDY25PMXh1SUNBZ0lDQWdJQ0JzWlhRZ2MzQnNhWFJXWVd4MVpTQTlJSHQ5TzF4dVhHNGdJQ0FnSUNBZ0lHSnBkSE11Wm05eVJXRmphQ2dvWW1sMExDQnBLU0E5UGlCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCSlppQjNaU2QyWlNCeVpXRmphR1ZrSUhSb1pTQmpiMnh2Y2lCd2NtOXdjeXdnWVhCd1pXNWtJSFJ2SUdOdmJHOXlJSE4wY21sdVoxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHaGhjMUpsWVdOb1pXUkRiMnh2Y2lCOGZDQmpiMnh2Y2k1MFpYTjBLR0pwZENrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQm9ZWE5TWldGamFHVmtRMjlzYjNJZ1BTQjBjblZsTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOdmJHOXlVSEp2Y0NBclBTQmlhWFE3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUVWc2MyVWdjSEp2WTJWemN5QnphR0ZrYjNjZ2RtRnNkV1ZjYmlBZ0lDQWdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2MzQnNhWFJXWVd4MVpWdHphR0ZrYjNkVVpYSnRjMXRwWFYwZ1BTQmlhWFE3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDBwTzF4dVhHNGdJQ0FnSUNBZ0lHTnZibk4wSUhOd2JHbDBRMjlzYjNKUWNtOXdjeUE5SUdOdmJHOXlMbk53YkdsMEtHTnZiRzl5VUhKdmNDazdYRzVjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSHNnTGk0dWMzQnNhWFJXWVd4MVpTd2djM0JzYVhSRGIyeHZjbEJ5YjNCeklIMDdYRzRnSUNBZ2ZTeGNibHh1SUNBZ0lHTnZiV0pwYm1VNklDaDJZV3gxWlhNcElEMCtJR055WldGMFpVUmxiR2x0YVhSbFpDaDJZV3gxWlhNc0lITm9ZV1J2ZDFkcGRHaHZkWFJEYjJ4dmNsUmxjbTF6TENBbklDY3BJQ3NnWTI5c2IzSXVZMjl0WW1sdVpTaDJZV3gxWlhNcFhHNTlPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvc2hhZG93LmpzXG4gKiogbW9kdWxlIGlkID0gMzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgdGVzdDogZnVuY3Rpb24gKHVucGFyc2VkKSB7XG4gICAgICAgIHZhciBfZmluZFZhbHVlQW5kVW5pdCA9ICgwLCBfdXRpbHMuZmluZFZhbHVlQW5kVW5pdCkodW5wYXJzZWQpO1xuXG4gICAgICAgIHZhciB2YWx1ZSA9IF9maW5kVmFsdWVBbmRVbml0LnZhbHVlO1xuXG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzLmlzTnVtKSh2YWx1ZSkgJiYgIWlzTmFOKHZhbHVlKSA/IHRydWUgOiBmYWxzZTtcbiAgICB9LFxuXG4gICAgcGFyc2U6IGZ1bmN0aW9uICh1bnBhcnNlZCwgcGFyZW50KSB7XG4gICAgICAgIHZhciBfZmluZFZhbHVlQW5kVW5pdDIgPSAoMCwgX3V0aWxzLmZpbmRWYWx1ZUFuZFVuaXQpKHVucGFyc2VkKTtcblxuICAgICAgICB2YXIgdmFsdWUgPSBfZmluZFZhbHVlQW5kVW5pdDIudmFsdWU7XG4gICAgICAgIHZhciB1bml0ID0gX2ZpbmRWYWx1ZUFuZFVuaXQyLnVuaXQ7XG5cblxuICAgICAgICBpZiAodW5pdCAmJiB1bml0ICE9PSB1bml0KSB7XG4gICAgICAgICAgICBwYXJlbnQudW5pdCA9IHVuaXQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSxcblxuICAgIHNlcmlhbGl6ZTogZnVuY3Rpb24gKHBhcnNlZCwgcGFyZW50KSB7XG4gICAgICAgIHJldHVybiBwYXJzZWQgKyAocGFyZW50LnVuaXQgfHwgJycpO1xuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTkxYm1sMExtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3UVVGQlFUczdhMEpCUldVN1FVRkRXQ3hWUVVGTkxGVkJRVlVzVVVGQlZpeEZRVUZ2UWp0blEwRkRTaXcyUWtGQmFVSXNVVUZCYWtJc1JVRkVTVHM3V1VGRFpDeG5RMEZFWXpzN1FVRkZkRUlzWlVGQlR5eHBRa0ZCUXl4RFFVRk5MRXRCUVU0c1MwRkJaMElzUTBGQlF5eE5RVUZOTEV0QlFVNHNRMEZCUkN4SFFVRnBRaXhKUVVGc1F5eEhRVUY1UXl4TFFVRjZReXhEUVVabE8wdEJRWEJDT3p0QlFVdE9MRmRCUVU4c1ZVRkJWU3hSUVVGV0xFVkJRVzlDTEUxQlFYQkNMRVZCUVRSQ08ybERRVU5RTERaQ1FVRnBRaXhSUVVGcVFpeEZRVVJQT3p0WlFVTjJRaXhwUTBGRWRVSTdXVUZEYUVJc0swSkJSR2RDT3pzN1FVRkhMMElzV1VGQlNTeFJRVUZSTEZOQlFWTXNTVUZCVkN4RlFVRmxPMEZCUTNaQ0xHMUNRVUZQTEVsQlFWQXNSMEZCWXl4SlFVRmtMRU5CUkhWQ08xTkJRVE5DT3p0QlFVbEJMR1ZCUVU4c1MwRkJVQ3hEUVZBclFqdExRVUUxUWpzN1FVRlZVQ3hsUVVGWExGVkJRVU1zVFVGQlJDeEZRVUZUTEUxQlFWUTdaVUZCYjBJc1ZVRkJWU3hQUVVGUExFbEJRVkFzU1VGQlpTeEZRVUZtTEVOQlFWWTdTMEZCY0VJaUxDSm1hV3hsSWpvaWRXNXBkQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZXlCcGMwNTFiU3dnWm1sdVpGWmhiSFZsUVc1a1ZXNXBkQ0I5SUdaeWIyMGdKeTR1TDJsdVl5OTFkR2xzY3ljN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElIdGNiaUFnSUNCMFpYTjBPaUJtZFc1amRHbHZiaUFvZFc1d1lYSnpaV1FwSUh0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnZXlCMllXeDFaU0I5SUQwZ1ptbHVaRlpoYkhWbFFXNWtWVzVwZENoMWJuQmhjbk5sWkNrN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlBb2FYTk9kVzBvZG1Gc2RXVXBJQ1ltSUNGcGMwNWhUaWgyWVd4MVpTa3BJRDhnZEhKMVpTQTZJR1poYkhObE8xeHVJQ0FnSUgwc1hHNWNiaUFnSUNCd1lYSnpaVG9nWm5WdVkzUnBiMjRnS0hWdWNHRnljMlZrTENCd1lYSmxiblFwSUh0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnZXlCMllXeDFaU3dnZFc1cGRDQjlJRDBnWm1sdVpGWmhiSFZsUVc1a1ZXNXBkQ2gxYm5CaGNuTmxaQ2s3WEc1Y2JpQWdJQ0FnSUNBZ2FXWWdLSFZ1YVhRZ0ppWWdkVzVwZENBaFBUMGdkVzVwZENrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY0dGeVpXNTBMblZ1YVhRZ1BTQjFibWwwTzF4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIWmhiSFZsTzF4dUlDQWdJSDBzWEc1Y2JpQWdJQ0J6WlhKcFlXeHBlbVU2SUNod1lYSnpaV1FzSUhCaGNtVnVkQ2tnUFQ0Z2NHRnljMlZrSUNzZ0tIQmhjbVZ1ZEM1MWJtbDBJSHg4SUNjbktWeHVmVHRjYmlKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3VuaXQuanNcbiAqKiBtb2R1bGUgaWQgPSAzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5jaGFpbiA9IGV4cG9ydHMuY2lyY3VsYXJNb3Rpb24gPSBleHBvcnRzLmNyZWF0ZU1hcHBlciA9IHVuZGVmaW5lZDtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKTtcblxudmFyIGNyZWF0ZU1hcHBlciA9IGV4cG9ydHMuY3JlYXRlTWFwcGVyID0gZnVuY3Rpb24gKGlucHV0LCBvdXRwdXQpIHtcbiAgICB2YXIgbWFwTGVuZ3RoID0gaW5wdXQubGVuZ3RoO1xuICAgIHZhciBmaW5hbEluZGV4ID0gbWFwTGVuZ3RoIC0gMTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgLy8gSWYgdmFsdWUgb3V0c2lkZSBtaW5pbXVtIGlucHV0IHJhbmdlLCBxdWlja2x5IHJldHVyblxuICAgICAgICBpZiAodmFsdWUgPD0gaW5wdXRbMF0pIHtcbiAgICAgICAgICAgIHJldHVybiBvdXRwdXRbMF07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB2YWx1ZSBvdXRzaWRlIG1heGltdW0gaW5wdXQgcmFuZ2UsIHF1aWNrbHkgcmV0dXJuXG4gICAgICAgIGlmICh2YWx1ZSA+PSBpbnB1dFtmaW5hbEluZGV4XSkge1xuICAgICAgICAgICAgcmV0dXJuIG91dHB1dFtmaW5hbEluZGV4XTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHdpdGhpbiBvdmVyYWxsIGlucHV0IHJhbmdlLCBmaW5kIHNwZWNpZmljIHJhbmdlXG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbWFwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA8IGlucHV0W2ldIHx8IGkgPT09IGZpbmFsSW5kZXgpIHtcbiAgICAgICAgICAgICAgICB2YXIgcHJvZ3Jlc3NJblJhbmdlID0gKDAsIF9jYWxjLmdldFByb2dyZXNzRnJvbVZhbHVlKSh2YWx1ZSwgaW5wdXRbaSAtIDFdLCBpbnB1dFtpXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgwLCBfY2FsYy5nZXRWYWx1ZUZyb21Qcm9ncmVzcykocHJvZ3Jlc3NJblJhbmdlLCBvdXRwdXRbaSAtIDFdLCBvdXRwdXRbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbn07XG5cbnZhciBjaXJjdWxhck1vdGlvbiA9IGV4cG9ydHMuY2lyY3VsYXJNb3Rpb24gPSBmdW5jdGlvbiAodiwga2V5LCBfcmVmKSB7XG4gICAgdmFyIHZhbHVlcyA9IF9yZWYudmFsdWVzO1xuXG4gICAgdmFyIG9yaWdpblggPSB2YWx1ZXMub3JpZ2luWCA/IHZhbHVlcy5vcmlnaW5YLmN1cnJlbnQgOiAwO1xuICAgIHZhciBvcmlnaW5ZID0gdmFsdWVzLm9yaWdpblkgPyB2YWx1ZXMub3JpZ2luWS5jdXJyZW50IDogMDtcblxuICAgIHJldHVybiAoMCwgX2NhbGMucG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZSkoe1xuICAgICAgICB4OiBvcmlnaW5YLFxuICAgICAgICB5OiBvcmlnaW5ZXG4gICAgfSwgdmFsdWVzLmFuZ2xlLmN1cnJlbnQsIHZhbHVlcy5kaXN0YW5jZS5jdXJyZW50KVtrZXldO1xufTtcblxuLypcbiAgICBDb21iaW5lIHRyYW5zZm9ybWVycyBpbnRvIG9uZSBmdW5jdGlvbiB0aGF0IGNhbGxzIGV2ZXJ5XG4gICAgdHJhbnNmb3JtZXIgaW4gdGhlIGFycmF5IGFuZCByZXR1cm5zIHRoZSByZXN1bHRcblxuICAgIEBwYXJhbSBbYXJyYXldXG4gICAgQHJldHVybiBbZnVuY3Rpb25dXG4qL1xudmFyIGNoYWluID0gZXhwb3J0cy5jaGFpbiA9IGZ1bmN0aW9uICh0cmFuc2Zvcm1lcnMpIHtcbiAgICB2YXIgbnVtVHJhbnNmb3JtZXJzID0gdHJhbnNmb3JtZXJzLmxlbmd0aDtcbiAgICB2YXIgaSA9IDA7XG5cbiAgICAvKlxuICAgICAgICBAcGFyYW0gW251bWJlcl1cbiAgICAgICAgQHBhcmFtIFtzdHJpbmddXG4gICAgICAgIEBwYXJhbSBbQWN0aW9uXVxuICAgICAgICBAcmV0dXJuIFtudW1iZXJdXG4gICAgKi9cbiAgICByZXR1cm4gZnVuY3Rpb24gKHYsIGtleSwgYSkge1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbnVtVHJhbnNmb3JtZXJzOyBpKyspIHtcbiAgICAgICAgICAgIHYgPSB0cmFuc2Zvcm1lcnNbaV0odiwga2V5LCBhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2O1xuICAgIH07XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1NdmRISmhibk5tYjNKdFpYSnpMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN08wRkJRVUU3TzBGQlJVOHNTVUZCVFN4elEwRkJaU3hWUVVGRExFdEJRVVFzUlVGQlVTeE5RVUZTTEVWQlFXMUNPMEZCUXpORExGRkJRVTBzV1VGQldTeE5RVUZOTEUxQlFVNHNRMEZFZVVJN1FVRkZNME1zVVVGQlRTeGhRVUZoTEZsQlFWa3NRMEZCV2l4RFFVWjNRanM3UVVGSk0wTXNWMEZCVHl4VlFVRkRMRXRCUVVRc1JVRkJWenM3UVVGRlpDeFpRVUZKTEZOQlFWTXNUVUZCVFN4RFFVRk9MRU5CUVZRc1JVRkJiVUk3UVVGRGJrSXNiVUpCUVU4c1QwRkJUeXhEUVVGUUxFTkJRVkFzUTBGRWJVSTdVMEZCZGtJN096dEJRVVpqTEZsQlQxWXNVMEZCVXl4TlFVRk5MRlZCUVU0c1EwRkJWQ3hGUVVFMFFqdEJRVU0xUWl4dFFrRkJUeXhQUVVGUExGVkJRVkFzUTBGQlVDeERRVVEwUWp0VFFVRm9RenM3TzBGQlVHTXNZVUZaVkN4SlFVRkpMRWxCUVVrc1EwRkJTaXhGUVVGUExFbEJRVWtzVTBGQlNpeEZRVUZsTEVkQlFTOUNMRVZCUVc5RE8wRkJRMmhETEdkQ1FVRkpMRkZCUVZFc1RVRkJUU3hEUVVGT0xFTkJRVklzU1VGQmIwSXNUVUZCVFN4VlFVRk9MRVZCUVd0Q08wRkJRM1JETEc5Q1FVRk5MR3RDUVVGclFpeG5RMEZCY1VJc1MwRkJja0lzUlVGQk5FSXNUVUZCVFN4SlFVRkpMRU5CUVVvc1EwRkJiRU1zUlVGQk1FTXNUVUZCVFN4RFFVRk9MRU5CUVRGRExFTkJRV3hDTEVOQlJHZERPMEZCUlhSRExIVkNRVUZQTEdkRFFVRnhRaXhsUVVGeVFpeEZRVUZ6UXl4UFFVRlBMRWxCUVVrc1EwRkJTaXhEUVVFM1F5eEZRVUZ4UkN4UFFVRlBMRU5CUVZBc1EwRkJja1FzUTBGQlVDeERRVVp6UXp0aFFVRXhRenRUUVVSS08wdEJXa2NzUTBGS2IwTTdRMEZCYmtJN08wRkJlVUp5UWl4SlFVRk5MREJEUVVGcFFpeFZRVUZETEVOQlFVUXNSVUZCU1N4SFFVRktMRkZCUVhkQ08xRkJRV0lzY1VKQlFXRTdPMEZCUTJ4RUxGRkJRVTBzVlVGQlZTeE5RVUZETEVOQlFVOHNUMEZCVUN4SFFVRnJRaXhQUVVGUExFOUJRVkFzUTBGQlpTeFBRVUZtTEVkQlFYbENMRU5CUVRWRExFTkJSR3RETzBGQlJXeEVMRkZCUVUwc1ZVRkJWU3hOUVVGRExFTkJRVThzVDBGQlVDeEhRVUZyUWl4UFFVRlBMRTlCUVZBc1EwRkJaU3hQUVVGbUxFZEJRWGxDTEVOQlFUVkRMRU5CUm10RE96dEJRVWxzUkN4WFFVRlBMSEZEUVVFd1FqdEJRVU0zUWl4WFFVRkhMRTlCUVVnN1FVRkRRU3hYUVVGSExFOUJRVWc3UzBGR1J5eEZRVWRLTEU5QlFVOHNTMEZCVUN4RFFVRmhMRTlCUVdJc1JVRkJjMElzVDBGQlR5eFJRVUZRTEVOQlFXZENMRTlCUVdoQ0xFTkJTR3hDTEVOQlJ6SkRMRWRCU0RORExFTkJRVkFzUTBGS2EwUTdRMEZCZUVJN096czdPenM3T3p0QlFXbENka0lzU1VGQlRTeDNRa0ZCVVN4VlFVRkRMRmxCUVVRc1JVRkJhMEk3UVVGRGJrTXNVVUZCVFN4clFrRkJhMElzWVVGQllTeE5RVUZpTEVOQlJGYzdRVUZGYmtNc1VVRkJTU3hKUVVGSkxFTkJRVW83T3pzN096czdPMEZCUml0Q0xGZEJWVFZDTEZWQlFVTXNRMEZCUkN4RlFVRkpMRWRCUVVvc1JVRkJVeXhEUVVGVUxFVkJRV1U3UVVGRGJFSXNZVUZCU3l4SlFVRkpMRU5CUVVvc1JVRkJUeXhKUVVGSkxHVkJRVW9zUlVGQmNVSXNSMEZCYWtNc1JVRkJjME03UVVGRGJFTXNaMEpCUVVrc1lVRkJZU3hEUVVGaUxFVkJRV2RDTEVOQlFXaENMRVZCUVcxQ0xFZEJRVzVDTEVWQlFYZENMRU5CUVhoQ0xFTkJRVW9zUTBGRWEwTTdVMEZCZEVNN08wRkJTVUVzWlVGQlR5eERRVUZRTEVOQlRHdENPMHRCUVdZc1EwRldORUk3UTBGQmJFSWlMQ0ptYVd4bElqb2lkSEpoYm5ObWIzSnRaWEp6TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMEwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCN0lHZGxkRkJ5YjJkeVpYTnpSbkp2YlZaaGJIVmxMQ0JuWlhSV1lXeDFaVVp5YjIxUWNtOW5jbVZ6Y3l3Z2NHOXBiblJHY205dFFXNW5iR1ZCYm1SRWFYTjBZVzVqWlNCOUlHWnliMjBnSnk0dUwybHVZeTlqWVd4akp6dGNibHh1Wlhod2IzSjBJR052Ym5OMElHTnlaV0YwWlUxaGNIQmxjaUE5SUNocGJuQjFkQ3dnYjNWMGNIVjBLU0E5UGlCN1hHNGdJQ0FnWTI5dWMzUWdiV0Z3VEdWdVozUm9JRDBnYVc1d2RYUXViR1Z1WjNSb08xeHVJQ0FnSUdOdmJuTjBJR1pwYm1Gc1NXNWtaWGdnUFNCdFlYQk1aVzVuZEdnZ0xTQXhPMXh1WEc0Z0lDQWdjbVYwZFhKdUlDaDJZV3gxWlNrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0F2THlCSlppQjJZV3gxWlNCdmRYUnphV1JsSUcxcGJtbHRkVzBnYVc1d2RYUWdjbUZ1WjJVc0lIRjFhV05yYkhrZ2NtVjBkWEp1WEc0Z0lDQWdJQ0FnSUdsbUlDaDJZV3gxWlNBOFBTQnBibkIxZEZzd1hTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUc5MWRIQjFkRnN3WFR0Y2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQzh2SUVsbUlIWmhiSFZsSUc5MWRITnBaR1VnYldGNGFXMTFiU0JwYm5CMWRDQnlZVzVuWlN3Z2NYVnBZMnRzZVNCeVpYUjFjbTVjYmlBZ0lDQWdJQ0FnYVdZZ0tIWmhiSFZsSUQ0OUlHbHVjSFYwVzJacGJtRnNTVzVrWlhoZEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnYjNWMGNIVjBXMlpwYm1Gc1NXNWtaWGhkTzF4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdMeThnU1dZZ2QybDBhR2x1SUc5MlpYSmhiR3dnYVc1d2RYUWdjbUZ1WjJVc0lHWnBibVFnYzNCbFkybG1hV01nY21GdVoyVmNiaUFnSUNBZ0lDQWdabTl5SUNoc1pYUWdhU0E5SURFN0lHa2dQQ0J0WVhCTVpXNW5kR2c3SUdrckt5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFpoYkhWbElEd2dhVzV3ZFhSYmFWMGdmSHdnYVNBOVBUMGdabWx1WVd4SmJtUmxlQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJSEJ5YjJkeVpYTnpTVzVTWVc1blpTQTlJR2RsZEZCeWIyZHlaWE56Um5KdmJWWmhiSFZsS0haaGJIVmxMQ0JwYm5CMWRGdHBJQzBnTVYwc0lHbHVjSFYwVzJsZEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z1oyVjBWbUZzZFdWR2NtOXRVSEp2WjNKbGMzTW9jSEp2WjNKbGMzTkpibEpoYm1kbExDQnZkWFJ3ZFhSYmFTQXRJREZkTENCdmRYUndkWFJiYVYwcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlR0Y2JuMDdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQmphWEpqZFd4aGNrMXZkR2x2YmlBOUlDaDJMQ0JyWlhrc0lIc2dkbUZzZFdWeklIMHBJRDArSUh0Y2JpQWdJQ0JqYjI1emRDQnZjbWxuYVc1WUlEMGdLSFpoYkhWbGN5NXZjbWxuYVc1WUtTQS9JSFpoYkhWbGN5NXZjbWxuYVc1WUxtTjFjbkpsYm5RZ09pQXdPMXh1SUNBZ0lHTnZibk4wSUc5eWFXZHBibGtnUFNBb2RtRnNkV1Z6TG05eWFXZHBibGtwSUQ4Z2RtRnNkV1Z6TG05eWFXZHBibGt1WTNWeWNtVnVkQ0E2SURBN1hHNWNiaUFnSUNCeVpYUjFjbTRnY0c5cGJuUkdjbTl0UVc1bmJHVkJibVJFYVhOMFlXNWpaU2g3WEc0Z0lDQWdJQ0FnSUhnNklHOXlhV2RwYmxnc1hHNGdJQ0FnSUNBZ0lIazZJRzl5YVdkcGJsa2dYRzRnSUNBZ2ZTd2dkbUZzZFdWekxtRnVaMnhsTG1OMWNuSmxiblFzSUhaaGJIVmxjeTVrYVhOMFlXNWpaUzVqZFhKeVpXNTBLVnRyWlhsZE8xeHVmVHRjYmx4dUx5cGNiaUFnSUNCRGIyMWlhVzVsSUhSeVlXNXpabTl5YldWeWN5QnBiblJ2SUc5dVpTQm1kVzVqZEdsdmJpQjBhR0YwSUdOaGJHeHpJR1YyWlhKNVhHNGdJQ0FnZEhKaGJuTm1iM0p0WlhJZ2FXNGdkR2hsSUdGeWNtRjVJR0Z1WkNCeVpYUjFjbTV6SUhSb1pTQnlaWE4xYkhSY2JseHVJQ0FnSUVCd1lYSmhiU0JiWVhKeVlYbGRYRzRnSUNBZ1FISmxkSFZ5YmlCYlpuVnVZM1JwYjI1ZFhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHTm9ZV2x1SUQwZ0tIUnlZVzV6Wm05eWJXVnljeWtnUFQ0Z2UxeHVJQ0FnSUdOdmJuTjBJRzUxYlZSeVlXNXpabTl5YldWeWN5QTlJSFJ5WVc1elptOXliV1Z5Y3k1c1pXNW5kR2c3WEc0Z0lDQWdiR1YwSUdrZ1BTQXdPMXh1WEc0Z0lDQWdMeXBjYmlBZ0lDQWdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRYRzRnSUNBZ0lDQWdJRUJ3WVhKaGJTQmJjM1J5YVc1blhWeHVJQ0FnSUNBZ0lDQkFjR0Z5WVcwZ1cwRmpkR2x2YmwxY2JpQWdJQ0FnSUNBZ1FISmxkSFZ5YmlCYmJuVnRZbVZ5WFZ4dUlDQWdJQ292WEc0Z0lDQWdjbVYwZFhKdUlDaDJMQ0JyWlhrc0lHRXBJRDArSUh0Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2hwSUQwZ01Ec2dhU0E4SUc1MWJWUnlZVzV6Wm05eWJXVnljenNnYVNzcktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMklEMGdkSEpoYm5ObWIzSnRaWEp6VzJsZEtIWXNJR3RsZVN3Z1lTazdYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZGp0Y2JpQWdJQ0I5TzF4dWZUc2lYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvdHJhbnNmb3JtZXJzLmpzXG4gKiogbW9kdWxlIGlkID0gMzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9jb2xvciA9IHJlcXVpcmUoJy4uL3ZhbHVlLXR5cGVzL2NvbG9yJyk7XG5cbnZhciBfY29sb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29sb3IpO1xuXG52YXIgX2NvbXBsZXggPSByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9jb21wbGV4Jyk7XG5cbnZhciBfY29tcGxleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21wbGV4KTtcblxudmFyIF91bml0ID0gcmVxdWlyZSgnLi4vdmFsdWUtdHlwZXMvdW5pdCcpO1xuXG52YXIgX3VuaXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdW5pdCk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxudmFyIF9udW1lcmljYWxWYWx1ZXMgPSByZXF1aXJlKCcuLi9pbmMvbnVtZXJpY2FsLXZhbHVlcycpO1xuXG52YXIgX251bWVyaWNhbFZhbHVlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9udW1lcmljYWxWYWx1ZXMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgTlVNX05VTUVSSUNBTF9WQUxVRVMgPSBfbnVtZXJpY2FsVmFsdWVzMi5kZWZhdWx0Lmxlbmd0aDtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBOVU1fTlVNRVJJQ0FMX1ZBTFVFUzsgaSsrKSB7XG4gICAgICAgIHZhciB2YWx1ZVByb3AgPSB2YWx1ZVtfbnVtZXJpY2FsVmFsdWVzMi5kZWZhdWx0W2ldXTtcbiAgICAgICAgaWYgKCgwLCBfdXRpbHMuaXNTdHJpbmcpKHZhbHVlUHJvcCkpIHtcbiAgICAgICAgICAgIGlmIChfY29sb3IyLmRlZmF1bHQudGVzdCh2YWx1ZVByb3ApKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb2xvcjIuZGVmYXVsdDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoX2NvbXBsZXgyLmRlZmF1bHQudGVzdCh2YWx1ZVByb3ApKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb21wbGV4Mi5kZWZhdWx0O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChfdW5pdDIuZGVmYXVsdC50ZXN0KHZhbHVlUHJvcCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3VuaXQyLmRlZmF1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5a1pYUmxZM1F1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dEJRVUZCT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenRCUVVOQk96czdPenM3UVVGRlFTeEpRVUZOTEhWQ1FVRjFRaXd3UWtGQmFVSXNUVUZCYWtJN08ydENRVVZrTEZWQlFVTXNTMEZCUkN4RlFVRlhPMEZCUTNSQ0xGTkJRVXNzU1VGQlNTeEpRVUZKTEVOQlFVb3NSVUZCVHl4SlFVRkpMRzlDUVVGS0xFVkJRVEJDTEVkQlFURkRMRVZCUVN0RE8wRkJRek5ETEZsQlFVMHNXVUZCV1N4TlFVRk5MREJDUVVGcFFpeERRVUZxUWl4RFFVRk9MRU5CUVZvc1EwRkVjVU03UVVGRk0wTXNXVUZCU1N4eFFrRkJVeXhUUVVGVUxFTkJRVW9zUlVGQmVVSTdRVUZEY2tJc1owSkJRVWtzWjBKQlFWVXNTVUZCVml4RFFVRmxMRk5CUVdZc1EwRkJTaXhGUVVFclFqdEJRVU16UWl4MVEwRkVNa0k3WVVGQkwwSXNUVUZGVHl4SlFVRkpMR3RDUVVGWkxFbEJRVm9zUTBGQmFVSXNVMEZCYWtJc1EwRkJTaXhGUVVGcFF6dEJRVU53UXl4NVEwRkViME03WVVGQmFrTXNUVUZGUVN4SlFVRkpMR1ZCUVZNc1NVRkJWQ3hEUVVGakxGTkJRV1FzUTBGQlNpeEZRVUU0UWp0QlFVTnFReXh6UTBGRWFVTTdZVUZCT1VJN1UwRk1XRHRMUVVaS08wTkJSRmNpTENKbWFXeGxJam9pWkdWMFpXTjBMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwTDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0JqYjJ4dmNsUjVjR1VnWm5KdmJTQW5MaTR2ZG1Gc2RXVXRkSGx3WlhNdlkyOXNiM0luTzF4dWFXMXdiM0owSUdOdmJYQnNaWGhVZVhCbElHWnliMjBnSnk0dUwzWmhiSFZsTFhSNWNHVnpMMk52YlhCc1pYZ25PMXh1YVcxd2IzSjBJSFZ1YVhSVWVYQmxJR1p5YjIwZ0p5NHVMM1poYkhWbExYUjVjR1Z6TDNWdWFYUW5PMXh1YVcxd2IzSjBJSHNnYVhOVGRISnBibWNnZlNCbWNtOXRJQ2N1TGk5cGJtTXZkWFJwYkhNbk8xeHVhVzF3YjNKMElFNVZUVVZTU1VOQlRGOVdRVXhWUlZNZ1puSnZiU0FuTGk0dmFXNWpMMjUxYldWeWFXTmhiQzEyWVd4MVpYTW5PMXh1WEc1amIyNXpkQ0JPVlUxZlRsVk5SVkpKUTBGTVgxWkJURlZGVXlBOUlFNVZUVVZTU1VOQlRGOVdRVXhWUlZNdWJHVnVaM1JvTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENBb2RtRnNkV1VwSUQwK0lIdGNiaUFnSUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElFNVZUVjlPVlUxRlVrbERRVXhmVmtGTVZVVlRPeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2RtRnNkV1ZRY205d0lEMGdkbUZzZFdWYlRsVk5SVkpKUTBGTVgxWkJURlZGVTF0cFhWMDdYRzRnSUNBZ0lDQWdJR2xtSUNocGMxTjBjbWx1WnloMllXeDFaVkJ5YjNBcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9ZMjlzYjNKVWVYQmxMblJsYzNRb2RtRnNkV1ZRY205d0tTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQmpiMnh2Y2xSNWNHVTdYRzRnSUNBZ0lDQWdJQ0FnSUNCOUlHVnNjMlVnYVdZZ0tHTnZiWEJzWlhoVWVYQmxMblJsYzNRb2RtRnNkV1ZRY205d0tTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQmpiMjF3YkdWNFZIbHdaVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMGdaV3h6WlNCcFppQW9kVzVwZEZSNWNHVXVkR1Z6ZENoMllXeDFaVkJ5YjNBcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlIVnVhWFJVZVhCbE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dWZUc2lYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9kZXRlY3QuanNcbiAqKiBtb2R1bGUgaWQgPSAzNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gWydjdXJyZW50JywgJ2Zyb20nLCAndG8nLCAndmVsb2NpdHknXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJtTXZiblZ0WlhKcFkyRnNMWFpoYkhWbGN5NXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3YTBKQlFXVXNRMEZCUXl4VFFVRkVMRVZCUVZrc1RVRkJXaXhGUVVGdlFpeEpRVUZ3UWl4RlFVRXdRaXhWUVVFeFFpSXNJbVpwYkdVaU9pSnVkVzFsY21sallXd3RkbUZzZFdWekxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbVY0Y0c5eWRDQmtaV1poZFd4MElGc25ZM1Z5Y21WdWRDY3NJQ2RtY205dEp5d2dKM1J2Snl3Z0ozWmxiRzlqYVhSNUoxMDdJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvbnVtZXJpY2FsLXZhbHVlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDM1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfb2JqZWN0QWRhcHRlciA9IHJlcXVpcmUoJy4uL2FkYXB0ZXIvb2JqZWN0LWFkYXB0ZXInKTtcblxudmFyIF9vYmplY3RBZGFwdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdEFkYXB0ZXIpO1xuXG52YXIgX2Nzc0FkYXB0ZXIgPSByZXF1aXJlKCcuLi9hZGFwdGVyL2Nzcy1hZGFwdGVyJyk7XG5cbnZhciBfY3NzQWRhcHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jc3NBZGFwdGVyKTtcblxudmFyIF9zdmdBZGFwdGVyID0gcmVxdWlyZSgnLi4vYWRhcHRlci9zdmctYWRhcHRlcicpO1xuXG52YXIgX3N2Z0FkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ZnQWRhcHRlcik7XG5cbnZhciBfc3ZnUGF0aEFkYXB0ZXIgPSByZXF1aXJlKCcuLi9hZGFwdGVyL3N2Zy1wYXRoLWFkYXB0ZXInKTtcblxudmFyIF9zdmdQYXRoQWRhcHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdmdQYXRoQWRhcHRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgdmFyIGRldGVjdGVkQWRhcHRlciA9IF9vYmplY3RBZGFwdGVyMi5kZWZhdWx0O1xuXG4gICAgLy8gSWYgSFRNTEVsZW1lbnQgbG9hZCBDU1NcbiAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IGVsZW1lbnQudGFnTmFtZSA9PT0gJ3N2ZycpIHtcbiAgICAgICAgZGV0ZWN0ZWRBZGFwdGVyID0gX2Nzc0FkYXB0ZXIyLmRlZmF1bHQ7XG5cbiAgICAgICAgLy8gT3IgU1ZHXG4gICAgfSBlbHNlIGlmIChlbGVtZW50IGluc3RhbmNlb2YgU1ZHRWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQudGFnTmFtZSA9PT0gJ3BhdGgnKSB7XG4gICAgICAgICAgICAgICAgZGV0ZWN0ZWRBZGFwdGVyID0gX3N2Z1BhdGhBZGFwdGVyMi5kZWZhdWx0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkZXRlY3RlZEFkYXB0ZXIgPSBfc3ZnQWRhcHRlcjIuZGVmYXVsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgcmV0dXJuIGRldGVjdGVkQWRhcHRlcjtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12WkdWMFpXTjBMV0ZrWVhCMFpYSXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0QlFVRkJPenM3TzBGQlEwRTdPenM3UVVGRFFUczdPenRCUVVOQk96czdPenM3YTBKQlJXVXNWVUZCUXl4UFFVRkVMRVZCUVdFN1FVRkRlRUlzVVVGQlNTeDVRMEZCU2pzN08wRkJSSGRDTEZGQlNYQkNMRzFDUVVGdFFpeFhRVUZ1UWl4SlFVRnJReXhSUVVGUkxFOUJRVklzUzBGQmIwSXNTMEZCY0VJc1JVRkJNa0k3UVVGRE4wUTdPenRCUVVRMlJDeExRVUZxUlN4TlFVbFBMRWxCUVVrc2JVSkJRVzFDTEZWQlFXNUNMRVZCUVN0Q08wRkJRM1JETEdkQ1FVRkpMRkZCUVZFc1QwRkJVaXhMUVVGdlFpeE5RVUZ3UWl4RlFVRTBRanRCUVVNMVFpd3lSRUZFTkVJN1lVRkJhRU1zVFVGRlR6dEJRVU5JTEhWRVFVUkhPMkZCUmxBN1UwRkVSenM3UVVGUlVDeFhRVUZQTEdWQlFWQXNRMEZvUW5kQ08wTkJRV0lpTENKbWFXeGxJam9pWkdWMFpXTjBMV0ZrWVhCMFpYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFF2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJRzlpYW1WamRFRmtZWEIwWlhJZ1puSnZiU0FuTGk0dllXUmhjSFJsY2k5dlltcGxZM1F0WVdSaGNIUmxjaWM3WEc1cGJYQnZjblFnWTNOelFXUmhjSFJsY2lCbWNtOXRJQ2N1TGk5aFpHRndkR1Z5TDJOemN5MWhaR0Z3ZEdWeUp6dGNibWx0Y0c5eWRDQnpkbWRCWkdGd2RHVnlJR1p5YjIwZ0p5NHVMMkZrWVhCMFpYSXZjM1puTFdGa1lYQjBaWEluTzF4dWFXMXdiM0owSUhOMloxQmhkR2hCWkdGd2RHVnlJR1p5YjIwZ0p5NHVMMkZrWVhCMFpYSXZjM1puTFhCaGRHZ3RZV1JoY0hSbGNpYzdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJQ2hsYkdWdFpXNTBLU0E5UGlCN1hHNGdJQ0FnYkdWMElHUmxkR1ZqZEdWa1FXUmhjSFJsY2lBOUlHOWlhbVZqZEVGa1lYQjBaWEk3WEc1Y2JpQWdJQ0F2THlCSlppQklWRTFNUld4bGJXVnVkQ0JzYjJGa0lFTlRVMXh1SUNBZ0lHbG1JQ2hsYkdWdFpXNTBJR2x1YzNSaGJtTmxiMllnU0ZSTlRFVnNaVzFsYm5RZ2ZId2daV3hsYldWdWRDNTBZV2RPWVcxbElEMDlQU0FuYzNabkp5a2dlMXh1SUNBZ0lDQWdJQ0JrWlhSbFkzUmxaRUZrWVhCMFpYSWdQU0JqYzNOQlpHRndkR1Z5TzF4dVhHNGdJQ0FnTHk4Z1QzSWdVMVpIWEc0Z0lDQWdmU0JsYkhObElHbG1JQ2hsYkdWdFpXNTBJR2x1YzNSaGJtTmxiMllnVTFaSFJXeGxiV1Z1ZENrZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvWld4bGJXVnVkQzUwWVdkT1lXMWxJRDA5UFNBbmNHRjBhQ2NwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR1JsZEdWamRHVmtRV1JoY0hSbGNpQTlJSE4yWjFCaGRHaEJaR0Z3ZEdWeU8xeHVJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWkdWMFpXTjBaV1JCWkdGd2RHVnlJRDBnYzNablFXUmhjSFJsY2p0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JseHVJQ0FnSUhKbGRIVnliaUJrWlhSbFkzUmxaRUZrWVhCMFpYSTdYRzU5TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy9kZXRlY3QtYWRhcHRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDM2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4uLy4uL2luYy9jYWxjJyk7XG5cbnZhciBCTEVORF9BQ0NVUkFDWSA9IDYwO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3V0QWN0aW9uLCBpbkFjdGlvbiwgZmxvd1ZhbHVlLCBrZXkpIHtcbiAgICB2YXIgb3V0VmFsdWUgPSBvdXRBY3Rpb24udmFsdWVzW2tleV07XG5cbiAgICBpZiAob3V0QWN0aW9uLmVsYXBzZWQgPT09IHVuZGVmaW5lZCB8fCAhb3V0VmFsdWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBpblZhbHVlID0gaW5BY3Rpb24udmFsdWVzW2tleV07XG4gICAgdmFyIG91dFRvdGFsRHVyYXRpb24gPSBvdXRWYWx1ZS5kZWxheSArIG91dFZhbHVlLmR1cmF0aW9uO1xuICAgIHZhciB0aW1lVW50aWxPdXRFbmQgPSBNYXRoLm1pbihvdXRUb3RhbER1cmF0aW9uIC0gb3V0QWN0aW9uLmVsYXBzZWQsIGluVmFsdWUuZGVsYXkgKyBpblZhbHVlLmR1cmF0aW9uKTtcbiAgICB2YXIgaW5Qb3NpdGlvbkF0T3V0RW5kID0gKDAsIF9jYWxjLmVhc2UpKCgwLCBfY2FsYy5yZXN0cmljdCkoKDAsIF9jYWxjLmdldFByb2dyZXNzRnJvbVZhbHVlKSh0aW1lVW50aWxPdXRFbmQsIDAsIGluVmFsdWUuZGVsYXkgKyBpblZhbHVlLmR1cmF0aW9uKSwgMCwgMSksIGluVmFsdWUuZnJvbSwgaW5WYWx1ZS50bywgaW5WYWx1ZS5lYXNlKTtcbiAgICB2YXIgaW5CaWdnZXJUaGFuT3V0QXRTdGFydCA9IGluVmFsdWUuZnJvbSA+IG91dFZhbHVlLmN1cnJlbnQ7XG4gICAgdmFyIGluQmlnZ2VyVGhhbk91dEF0RW5kID0gaW5Qb3NpdGlvbkF0T3V0RW5kID4gb3V0VmFsdWUudG87XG4gICAgdmFyIHR3ZWVuc0ludGVyc2VjdCA9IGluQmlnZ2VyVGhhbk91dEF0U3RhcnQgIT09IGluQmlnZ2VyVGhhbk91dEF0RW5kO1xuXG4gICAgdmFyIGJsZW5kQ3VydmUgPSBbWzAsIG91dFZhbHVlLmN1cnJlbnRdLCBbdGltZVVudGlsT3V0RW5kLCBpblBvc2l0aW9uQXRPdXRFbmRdXTtcblxuICAgIC8vIElmIHR3ZWVucyBpbnRlcnNlY3QsIHJlc29sdmUgdHdlZW5zIGF0IGEgcmVzb2x1dGlvbiB0byBmaW5kIGV4YWN0bHkgd2hlcmVcbiAgICBpZiAodHdlZW5zSW50ZXJzZWN0KSB7XG4gICAgICAgIHZhciB0aW1lU3RlcFRvVGVzdCA9IHRpbWVVbnRpbE91dEVuZCAvIEJMRU5EX0FDQ1VSQUNZO1xuICAgICAgICB2YXIgZm91bmRQMSA9IGZhbHNlO1xuICAgICAgICB2YXIgZm91bmRQMiA9IGZhbHNlO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDw9IEJMRU5EX0FDQ1VSQUNZOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0aW1lU3RlcCA9IGkgKiB0aW1lU3RlcFRvVGVzdDtcbiAgICAgICAgICAgIHZhciBvdXRBdFRpbWUgPSAoMCwgX2NhbGMuZWFzZSkoKDAsIF9jYWxjLmdldFByb2dyZXNzRnJvbVZhbHVlKShvdXRBY3Rpb24uZWxhcHNlZCArIHRpbWVTdGVwLCBvdXRWYWx1ZS5kZWxheSwgb3V0VmFsdWUuZHVyYXRpb24pLCBvdXRWYWx1ZS5mcm9tLCBvdXRWYWx1ZS50bywgb3V0VmFsdWUuZWFzZSk7XG4gICAgICAgICAgICB2YXIgaW5BdFRpbWUgPSAoMCwgX2NhbGMuZWFzZSkoKDAsIF9jYWxjLmdldFByb2dyZXNzRnJvbVZhbHVlKShpbkFjdGlvbi5lbGFwc2VkICsgdGltZVN0ZXAsIGluVmFsdWUuZGVsYXksIGluVmFsdWUuZHVyYXRpb24pLCBpblZhbHVlLmZyb20sIGluVmFsdWUudG8sIGluVmFsdWUuZWFzZSk7XG5cbiAgICAgICAgICAgIGlmICghZm91bmRQMSAmJiAoaW5CaWdnZXJUaGFuT3V0QXRTdGFydCAmJiBpbkF0VGltZSA8IG91dEF0VGltZSB8fCAhaW5CaWdnZXJUaGFuT3V0QXRTdGFydCAmJiBpbkF0VGltZSA+IG91dEF0VGltZSkpIHtcbiAgICAgICAgICAgICAgICBibGVuZEN1cnZlLnNwbGljZSgxLCAwLCBbdGltZVN0ZXAsIGluQXRUaW1lXSk7XG4gICAgICAgICAgICAgICAgZm91bmRQMSA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChmb3VuZFAxICYmIChpbkJpZ2dlclRoYW5PdXRBdFN0YXJ0ICYmIGluQXRUaW1lIDwgb3V0VmFsdWUuY3VycmVudCB8fCAhaW5CaWdnZXJUaGFuT3V0QXRTdGFydCAmJiBpbkF0VGltZSA+IG91dFZhbHVlLmN1cnJlbnQpKSB7XG4gICAgICAgICAgICAgICAgYmxlbmRDdXJ2ZVsyXSA9IFt0aW1lU3RlcCwgaW5BdFRpbWVdO1xuICAgICAgICAgICAgICAgIGZvdW5kUDIgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZm91bmRQMikge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGJsZW5kQ3VydmUubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIC8vIFBhc3MgYmV0d2VlbiB0d2VlbnMgdXNpbmcgaW5jb21pbmcgZWFzaW5nIGlmIGp1c3QgdHdvIHBvaW50c1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGJsZW5kUHJvZ3Jlc3MgPSAoMCwgX2NhbGMucmVzdHJpY3QpKCgwLCBfY2FsYy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSkoaW5BY3Rpb24uZWxhcHNlZCwgYmxlbmRDdXJ2ZVswXVswXSwgYmxlbmRDdXJ2ZVsxXVswXSksIDAsIDEpO1xuXG4gICAgICAgICAgICBpZiAoYmxlbmRQcm9ncmVzcyA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGZsb3dWYWx1ZS5ibGVuZEN1cnZlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gKDAsIF9jYWxjLmVhc2UpKGJsZW5kUHJvZ3Jlc3MsIG91dFZhbHVlLmN1cnJlbnQsIGluVmFsdWUuY3VycmVudCwgaW5WYWx1ZS5lYXNlKTtcbiAgICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBQYXNzIGJldHdlZW4gdHdlZW5zIHVzaW5nIGJlemllciBpbnRlcnBvbGF0aW9uXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYmxlbmRQcm9ncmVzcyA9ICgwLCBfY2FsYy5yZXN0cmljdCkoKDAsIF9jYWxjLmdldFByb2dyZXNzRnJvbVZhbHVlKShpbkFjdGlvbi5lbGFwc2VkLCBibGVuZEN1cnZlWzBdWzBdLCBibGVuZEN1cnZlWzJdWzBdKSwgMCwgMSk7XG4gICAgICAgICAgICB2YXIgYVAgPSAoMCwgX2NhbGMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MpKGJsZW5kUHJvZ3Jlc3MsIGJsZW5kQ3VydmVbMF1bMV0sIGJsZW5kQ3VydmVbMV1bMV0pO1xuICAgICAgICAgICAgdmFyIGJQID0gKDAsIF9jYWxjLmdldFZhbHVlRnJvbVByb2dyZXNzKShibGVuZFByb2dyZXNzLCBibGVuZEN1cnZlWzFdWzFdLCBibGVuZEN1cnZlWzJdWzFdKTtcblxuICAgICAgICAgICAgaWYgKGJsZW5kUHJvZ3Jlc3MgPT09IDEpIHtcbiAgICAgICAgICAgICAgICBmbG93VmFsdWUuYmxlbmRDdXJ2ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5WYWx1ZS5jdXJyZW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gKDAsIF9jYWxjLmdldFZhbHVlRnJvbVByb2dyZXNzKShibGVuZFByb2dyZXNzLCBhUCwgYlApO1xuICAgICAgICB9O1xuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwyWnNiM2N2WjJWdVpYSmhkR1V0WW14bGJtUXRZM1Z5ZG1VdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenRCUVVGQk96dEJRVVZCTEVsQlFVMHNhVUpCUVdsQ0xFVkJRV3BDT3p0clFrRkZVeXhWUVVGRExGTkJRVVFzUlVGQldTeFJRVUZhTEVWQlFYTkNMRk5CUVhSQ0xFVkJRV2xETEVkQlFXcERMRVZCUVhsRE8wRkJRM0JFTEZGQlFVMHNWMEZCVnl4VlFVRlZMRTFCUVZZc1EwRkJhVUlzUjBGQmFrSXNRMEZCV0N4RFFVUTRRenM3UVVGSGNFUXNVVUZCU1N4VlFVRlZMRTlCUVZZc1MwRkJjMElzVTBGQmRFSXNTVUZCYlVNc1EwRkJReXhSUVVGRUxFVkJRVmM3UVVGRE9VTXNaVUZFT0VNN1MwRkJiRVE3TzBGQlNVRXNVVUZCVFN4VlFVRlZMRk5CUVZNc1RVRkJWQ3hEUVVGblFpeEhRVUZvUWl4RFFVRldMRU5CVURoRE8wRkJVWEJFTEZGQlFVMHNiVUpCUVcxQ0xGTkJRVk1zUzBGQlZDeEhRVUZwUWl4VFFVRlRMRkZCUVZRc1EwRlNWVHRCUVZOd1JDeFJRVUZOTEd0Q1FVRnJRaXhMUVVGTExFZEJRVXdzUTBGQlV5eHRRa0ZCYlVJc1ZVRkJWU3hQUVVGV0xFVkJRVzFDTEZGQlFWRXNTMEZCVWl4SFFVRm5RaXhSUVVGUkxGRkJRVklzUTBGQmFrWXNRMEZVT0VNN1FVRlZjRVFzVVVGQlRTeHhRa0ZCY1VJc1owSkJRVXNzYjBKQlFWTXNaME5CUVhGQ0xHVkJRWEpDTEVWQlFYTkRMRU5CUVhSRExFVkJRWGxETEZGQlFWRXNTMEZCVWl4SFFVRm5RaXhSUVVGUkxGRkJRVklzUTBGQmJFVXNSVUZCY1VZc1EwRkJja1lzUlVGQmQwWXNRMEZCZUVZc1EwRkJUQ3hGUVVGcFJ5eFJRVUZSTEVsQlFWSXNSVUZCWXl4UlFVRlJMRVZCUVZJc1JVRkJXU3hSUVVGUkxFbEJRVklzUTBGQmFFb3NRMEZXT0VNN1FVRlhjRVFzVVVGQlRTeDVRa0ZCZVVJc1VVRkJVU3hKUVVGU0xFZEJRV1VzVTBGQlV5eFBRVUZVTEVOQldFMDdRVUZaY0VRc1VVRkJUU3gxUWtGQmRVSXNjVUpCUVhGQ0xGTkJRVk1zUlVGQlZDeERRVnBGTzBGQllYQkVMRkZCUVUwc2EwSkJRV3RDTERKQ1FVRXlRaXh2UWtGQk0wSXNRMEZpTkVJN08wRkJaWEJFTEZGQlFVMHNZVUZCWVN4RFFVRkRMRU5CUVVNc1EwRkJSQ3hGUVVGSkxGTkJRVk1zVDBGQlZDeERRVUZNTEVWQlFYZENMRU5CUVVNc1pVRkJSQ3hGUVVGclFpeHJRa0ZCYkVJc1EwRkJlRUlzUTBGQllqczdPMEZCWmpoRExGRkJhMEpvUkN4bFFVRktMRVZCUVhGQ08wRkJRMnBDTEZsQlFVMHNhVUpCUVdsQ0xHdENRVUZyUWl4alFVRnNRaXhEUVVST08wRkJSV3BDTEZsQlFVa3NWVUZCVlN4TFFVRldMRU5CUm1FN1FVRkhha0lzV1VGQlNTeFZRVUZWTEV0QlFWWXNRMEZJWVRzN1FVRkxha0lzWVVGQlN5eEpRVUZKTEVsQlFVa3NRMEZCU2l4RlFVRlBMRXRCUVVzc1kwRkJUQ3hGUVVGeFFpeEhRVUZ5UXl4RlFVRXdRenRCUVVOMFF5eG5Ra0ZCVFN4WFFVRlhMRWxCUVVrc1kwRkJTaXhEUVVSeFFqdEJRVVYwUXl4blFrRkJUU3haUVVGWkxHZENRVUZMTEdkRFFVRnhRaXhWUVVGVkxFOUJRVllzUjBGQmIwSXNVVUZCY0VJc1JVRkJPRUlzVTBGQlV5eExRVUZVTEVWQlFXZENMRk5CUVZNc1VVRkJWQ3hEUVVGNFJTeEZRVUUwUml4VFFVRlRMRWxCUVZRc1JVRkJaU3hUUVVGVExFVkJRVlFzUlVGQllTeFRRVUZUTEVsQlFWUXNRMEZCY0Vrc1EwRkdaME03UVVGSGRFTXNaMEpCUVUwc1YwRkJWeXhuUWtGQlN5eG5RMEZCY1VJc1UwRkJVeXhQUVVGVUxFZEJRVzFDTEZGQlFXNUNMRVZCUVRaQ0xGRkJRVkVzUzBGQlVpeEZRVUZsTEZGQlFWRXNVVUZCVWl4RFFVRjBSU3hGUVVGNVJpeFJRVUZSTEVsQlFWSXNSVUZCWXl4UlFVRlJMRVZCUVZJc1JVRkJXU3hSUVVGUkxFbEJRVklzUTBGQk9VZ3NRMEZJWjBNN08wRkJTM1JETEdkQ1FVRkpMRU5CUVVNc1QwRkJSQ3hMUVVGaExITkNRVUZETEVsQlFUQkNMRmRCUVZjc1UwRkJXQ3hKUVVFd1FpeERRVUZETEhOQ1FVRkVMRWxCUVRKQ0xGZEJRVmNzVTBGQldDeERRVUUzUml4RlFVRnhTRHRCUVVOeVNDd3lRa0ZCVnl4TlFVRllMRU5CUVd0Q0xFTkJRV3hDTEVWQlFYRkNMRU5CUVhKQ0xFVkJRWGRDTEVOQlFVTXNVVUZCUkN4RlFVRlhMRkZCUVZnc1EwRkJlRUlzUlVGRWNVZzdRVUZGY2tnc01FSkJRVlVzU1VGQlZpeERRVVp4U0R0aFFVRjZTRHM3UVVGTFFTeG5Ra0ZCU1N4WlFVRlpMSE5DUVVGRExFbEJRVEJDTEZkQlFWY3NVMEZCVXl4UFFVRlVMRWxCUVhOQ0xFTkJRVU1zYzBKQlFVUXNTVUZCTWtJc1YwRkJWeXhUUVVGVExFOUJRVlFzUTBGQk9VY3NSVUZCYTBrN1FVRkRiRWtzTWtKQlFWY3NRMEZCV0N4SlFVRm5RaXhEUVVGRExGRkJRVVFzUlVGQlZ5eFJRVUZZTEVOQlFXaENMRU5CUkd0Sk8wRkJSV3hKTERCQ1FVRlZMRWxCUVZZc1EwRkdhMGs3WVVGQmRFazdPMEZCUzBFc1owSkJRVWtzVDBGQlNpeEZRVUZoTzBGQlExUXNjMEpCUkZNN1lVRkJZanRUUVdaS08wdEJURW83TzBGQk1FSkJMRkZCUVVrc1YwRkJWeXhOUVVGWUxFdEJRWE5DTEVOQlFYUkNMRVZCUVhsQ096dEJRVVY2UWl4bFFVRlBMRmxCUVUwN1FVRkRWQ3huUWtGQlRTeG5Ra0ZCWjBJc2IwSkJRVk1zWjBOQlFYRkNMRk5CUVZNc1QwRkJWQ3hGUVVGclFpeFhRVUZYTEVOQlFWZ3NSVUZCWXl4RFFVRmtMRU5CUVhaRExFVkJRWGxFTEZkQlFWY3NRMEZCV0N4RlFVRmpMRU5CUVdRc1EwRkJla1FzUTBGQlZDeEZRVUZ4Uml4RFFVRnlSaXhGUVVGM1JpeERRVUY0Uml4RFFVRm9RaXhEUVVSSE96dEJRVWRVTEdkQ1FVRkpMR3RDUVVGclFpeERRVUZzUWl4RlFVRnhRanRCUVVOeVFpd3dRa0ZCVlN4VlFVRldMRWRCUVhWQ0xGTkJRWFpDTEVOQlJIRkNPMkZCUVhwQ096dEJRVWxCTEcxQ1FVRlBMR2RDUVVGTExHRkJRVXdzUlVGQmIwSXNVMEZCVXl4UFFVRlVMRVZCUVd0Q0xGRkJRVkVzVDBGQlVpeEZRVUZwUWl4UlFVRlJMRWxCUVZJc1EwRkJPVVFzUTBGUVV6dFRRVUZPTEVOQlJtdENPMHRCUVRkQ0xFMUJWMDg3TzBGQlJVZ3NaVUZCVHl4WlFVRk5PMEZCUTFRc1owSkJRVTBzWjBKQlFXZENMRzlDUVVGVExHZERRVUZ4UWl4VFFVRlRMRTlCUVZRc1JVRkJhMElzVjBGQlZ5eERRVUZZTEVWQlFXTXNRMEZCWkN4RFFVRjJReXhGUVVGNVJDeFhRVUZYTEVOQlFWZ3NSVUZCWXl4RFFVRmtMRU5CUVhwRUxFTkJRVlFzUlVGQmNVWXNRMEZCY2tZc1JVRkJkMFlzUTBGQmVFWXNRMEZCYUVJc1EwRkVSenRCUVVWVUxHZENRVUZOTEV0QlFVc3NaME5CUVhGQ0xHRkJRWEpDTEVWQlFXOURMRmRCUVZjc1EwRkJXQ3hGUVVGakxFTkJRV1FzUTBGQmNFTXNSVUZCYzBRc1YwRkJWeXhEUVVGWUxFVkJRV01zUTBGQlpDeERRVUYwUkN4RFFVRk1MRU5CUmtjN1FVRkhWQ3huUWtGQlRTeExRVUZMTEdkRFFVRnhRaXhoUVVGeVFpeEZRVUZ2UXl4WFFVRlhMRU5CUVZnc1JVRkJZeXhEUVVGa0xFTkJRWEJETEVWQlFYTkVMRmRCUVZjc1EwRkJXQ3hGUVVGakxFTkJRV1FzUTBGQmRFUXNRMEZCVEN4RFFVaEhPenRCUVV0VUxHZENRVUZKTEd0Q1FVRnJRaXhEUVVGc1FpeEZRVUZ4UWp0QlFVTnlRaXd3UWtGQlZTeFZRVUZXTEVkQlFYVkNMRk5CUVhaQ0xFTkJSSEZDTzBGQlJYSkNMSFZDUVVGUExGRkJRVkVzVDBGQlVpeERRVVpqTzJGQlFYcENPenRCUVV0QkxHMUNRVUZQTEdkRFFVRnhRaXhoUVVGeVFpeEZRVUZ2UXl4RlFVRndReXhGUVVGM1F5eEZRVUY0UXl4RFFVRlFMRU5CVmxNN1UwRkJUaXhEUVVaS08wdEJXRkE3UTBFMVExY2lMQ0ptYVd4bElqb2laMlZ1WlhKaGRHVXRZbXhsYm1RdFkzVnlkbVV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhzZ1oyVjBVSEp2WjNKbGMzTkdjbTl0Vm1Gc2RXVXNJR2RsZEZaaGJIVmxSbkp2YlZCeWIyZHlaWE56TENCbFlYTmxMQ0J5WlhOMGNtbGpkQ0I5SUdaeWIyMGdKeTR1THk0dUwybHVZeTlqWVd4akp6dGNibHh1WTI5dWMzUWdRa3hGVGtSZlFVTkRWVkpCUTFrZ1BTQTJNRHRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnS0c5MWRFRmpkR2x2Yml3Z2FXNUJZM1JwYjI0c0lHWnNiM2RXWVd4MVpTd2dhMlY1S1NBOVBpQjdYRzRnSUNBZ1kyOXVjM1FnYjNWMFZtRnNkV1VnUFNCdmRYUkJZM1JwYjI0dWRtRnNkV1Z6VzJ0bGVWMDdYRzVjYmlBZ0lDQnBaaUFvYjNWMFFXTjBhVzl1TG1Wc1lYQnpaV1FnUFQwOUlIVnVaR1ZtYVc1bFpDQjhmQ0FoYjNWMFZtRnNkV1VwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1TzF4dUlDQWdJSDFjYmx4dUlDQWdJR052Ym5OMElHbHVWbUZzZFdVZ1BTQnBia0ZqZEdsdmJpNTJZV3gxWlhOYmEyVjVYVHRjYmlBZ0lDQmpiMjV6ZENCdmRYUlViM1JoYkVSMWNtRjBhVzl1SUQwZ2IzVjBWbUZzZFdVdVpHVnNZWGtnS3lCdmRYUldZV3gxWlM1a2RYSmhkR2x2Ymp0Y2JpQWdJQ0JqYjI1emRDQjBhVzFsVlc1MGFXeFBkWFJGYm1RZ1BTQk5ZWFJvTG0xcGJpaHZkWFJVYjNSaGJFUjFjbUYwYVc5dUlDMGdiM1YwUVdOMGFXOXVMbVZzWVhCelpXUXNJR2x1Vm1Gc2RXVXVaR1ZzWVhrZ0t5QnBibFpoYkhWbExtUjFjbUYwYVc5dUtUdGNiaUFnSUNCamIyNXpkQ0JwYmxCdmMybDBhVzl1UVhSUGRYUkZibVFnUFNCbFlYTmxLSEpsYzNSeWFXTjBLR2RsZEZCeWIyZHlaWE56Um5KdmJWWmhiSFZsS0hScGJXVlZiblJwYkU5MWRFVnVaQ3dnTUN3Z2FXNVdZV3gxWlM1a1pXeGhlU0FySUdsdVZtRnNkV1V1WkhWeVlYUnBiMjRwTENBd0xDQXhLU3dnYVc1V1lXeDFaUzVtY205dExDQnBibFpoYkhWbExuUnZMQ0JwYmxaaGJIVmxMbVZoYzJVcE8xeHVJQ0FnSUdOdmJuTjBJR2x1UW1sbloyVnlWR2hoYms5MWRFRjBVM1JoY25RZ1BTQnBibFpoYkhWbExtWnliMjBnUGlCdmRYUldZV3gxWlM1amRYSnlaVzUwTzF4dUlDQWdJR052Ym5OMElHbHVRbWxuWjJWeVZHaGhiazkxZEVGMFJXNWtJRDBnYVc1UWIzTnBkR2x2YmtGMFQzVjBSVzVrSUQ0Z2IzVjBWbUZzZFdVdWRHODdYRzRnSUNBZ1kyOXVjM1FnZEhkbFpXNXpTVzUwWlhKelpXTjBJRDBnYVc1Q2FXZG5aWEpVYUdGdVQzVjBRWFJUZEdGeWRDQWhQVDBnYVc1Q2FXZG5aWEpVYUdGdVQzVjBRWFJGYm1RN1hHNWNiaUFnSUNCamIyNXpkQ0JpYkdWdVpFTjFjblpsSUQwZ1cxc3dMQ0J2ZFhSV1lXeDFaUzVqZFhKeVpXNTBYU3dnVzNScGJXVlZiblJwYkU5MWRFVnVaQ3dnYVc1UWIzTnBkR2x2YmtGMFQzVjBSVzVrWFYwN1hHNWNiaUFnSUNBdkx5QkpaaUIwZDJWbGJuTWdhVzUwWlhKelpXTjBMQ0J5WlhOdmJIWmxJSFIzWldWdWN5QmhkQ0JoSUhKbGMyOXNkWFJwYjI0Z2RHOGdabWx1WkNCbGVHRmpkR3g1SUhkb1pYSmxYRzRnSUNBZ2FXWWdLSFIzWldWdWMwbHVkR1Z5YzJWamRDa2dlMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQjBhVzFsVTNSbGNGUnZWR1Z6ZENBOUlIUnBiV1ZWYm5ScGJFOTFkRVZ1WkNBdklFSk1SVTVFWDBGRFExVlNRVU5aTzF4dUlDQWdJQ0FnSUNCc1pYUWdabTkxYm1SUU1TQTlJR1poYkhObE8xeHVJQ0FnSUNBZ0lDQnNaWFFnWm05MWJtUlFNaUE5SUdaaGJITmxPMXh1WEc0Z0lDQWdJQ0FnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3OUlFSk1SVTVFWDBGRFExVlNRVU5aT3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUhScGJXVlRkR1Z3SUQwZ2FTQXFJSFJwYldWVGRHVndWRzlVWlhOME8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdiM1YwUVhSVWFXMWxJRDBnWldGelpTaG5aWFJRY205bmNtVnpjMFp5YjIxV1lXeDFaU2h2ZFhSQlkzUnBiMjR1Wld4aGNITmxaQ0FySUhScGJXVlRkR1Z3TENCdmRYUldZV3gxWlM1a1pXeGhlU3dnYjNWMFZtRnNkV1V1WkhWeVlYUnBiMjRwTENCdmRYUldZV3gxWlM1bWNtOXRMQ0J2ZFhSV1lXeDFaUzUwYnl3Z2IzVjBWbUZzZFdVdVpXRnpaU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCcGJrRjBWR2x0WlNBOUlHVmhjMlVvWjJWMFVISnZaM0psYzNOR2NtOXRWbUZzZFdVb2FXNUJZM1JwYjI0dVpXeGhjSE5sWkNBcklIUnBiV1ZUZEdWd0xDQnBibFpoYkhWbExtUmxiR0Y1TENCcGJsWmhiSFZsTG1SMWNtRjBhVzl1S1N3Z2FXNVdZV3gxWlM1bWNtOXRMQ0JwYmxaaGJIVmxMblJ2TENCcGJsWmhiSFZsTG1WaGMyVXBPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvSVdadmRXNWtVREVnSmlZZ0tDaHBia0pwWjJkbGNsUm9ZVzVQZFhSQmRGTjBZWEowSUNZbUlHbHVRWFJVYVcxbElEd2diM1YwUVhSVWFXMWxLU0I4ZkNBb0lXbHVRbWxuWjJWeVZHaGhiazkxZEVGMFUzUmhjblFnSmlZZ2FXNUJkRlJwYldVZ1BpQnZkWFJCZEZScGJXVXBLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdKc1pXNWtRM1Z5ZG1VdWMzQnNhV05sS0RFc0lEQXNJRnQwYVcxbFUzUmxjQ3dnYVc1QmRGUnBiV1ZkS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCbWIzVnVaRkF4SUQwZ2RISjFaVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLR1p2ZFc1a1VERWdKaVlnS0NocGJrSnBaMmRsY2xSb1lXNVBkWFJCZEZOMFlYSjBJQ1ltSUdsdVFYUlVhVzFsSUR3Z2IzVjBWbUZzZFdVdVkzVnljbVZ1ZENrZ2ZId2dLQ0ZwYmtKcFoyZGxjbFJvWVc1UGRYUkJkRk4wWVhKMElDWW1JR2x1UVhSVWFXMWxJRDRnYjNWMFZtRnNkV1V1WTNWeWNtVnVkQ2twS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1lteGxibVJEZFhKMlpWc3lYU0E5SUZ0MGFXMWxVM1JsY0N3Z2FXNUJkRlJwYldWZE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHWnZkVzVrVURJZ1BTQjBjblZsTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvWm05MWJtUlFNaWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdKeVpXRnJPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2FXWWdLR0pzWlc1a1EzVnlkbVV1YkdWdVozUm9JRDA5UFNBeUtTQjdYRzRnSUNBZ0lDQWdJQzh2SUZCaGMzTWdZbVYwZDJWbGJpQjBkMlZsYm5NZ2RYTnBibWNnYVc1amIyMXBibWNnWldGemFXNW5JR2xtSUdwMWMzUWdkSGR2SUhCdmFXNTBjMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdLQ2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdZbXhsYm1SUWNtOW5jbVZ6Y3lBOUlISmxjM1J5YVdOMEtHZGxkRkJ5YjJkeVpYTnpSbkp2YlZaaGJIVmxLR2x1UVdOMGFXOXVMbVZzWVhCelpXUXNJR0pzWlc1a1EzVnlkbVZiTUYxYk1GMHNJR0pzWlc1a1EzVnlkbVZiTVYxYk1GMHBMQ0F3TENBeEtUdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLR0pzWlc1a1VISnZaM0psYzNNZ1BUMDlJREVwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCbWJHOTNWbUZzZFdVdVlteGxibVJEZFhKMlpTQTlJSFZ1WkdWbWFXNWxaRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUdWaGMyVW9ZbXhsYm1SUWNtOW5jbVZ6Y3l3Z2IzVjBWbUZzZFdVdVkzVnljbVZ1ZEN3Z2FXNVdZV3gxWlM1amRYSnlaVzUwTENCcGJsWmhiSFZsTG1WaGMyVXBPMXh1SUNBZ0lDQWdJQ0I5TzF4dUlDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQzh2SUZCaGMzTWdZbVYwZDJWbGJpQjBkMlZsYm5NZ2RYTnBibWNnWW1WNmFXVnlJR2x1ZEdWeWNHOXNZWFJwYjI1Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUNncElEMCtJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUdKc1pXNWtVSEp2WjNKbGMzTWdQU0J5WlhOMGNtbGpkQ2huWlhSUWNtOW5jbVZ6YzBaeWIyMVdZV3gxWlNocGJrRmpkR2x2Ymk1bGJHRndjMlZrTENCaWJHVnVaRU4xY25abFd6QmRXekJkTENCaWJHVnVaRU4xY25abFd6SmRXekJkS1N3Z01Dd2dNU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCaFVDQTlJR2RsZEZaaGJIVmxSbkp2YlZCeWIyZHlaWE56S0dKc1pXNWtVSEp2WjNKbGMzTXNJR0pzWlc1a1EzVnlkbVZiTUYxYk1WMHNJR0pzWlc1a1EzVnlkbVZiTVYxYk1WMHBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnWWxBZ1BTQm5aWFJXWVd4MVpVWnliMjFRY205bmNtVnpjeWhpYkdWdVpGQnliMmR5WlhOekxDQmliR1Z1WkVOMWNuWmxXekZkV3pGZExDQmliR1Z1WkVOMWNuWmxXekpkV3pGZEtUdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLR0pzWlc1a1VISnZaM0psYzNNZ1BUMDlJREVwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCbWJHOTNWbUZzZFdVdVlteGxibVJEZFhKMlpTQTlJSFZ1WkdWbWFXNWxaRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdhVzVXWVd4MVpTNWpkWEp5Wlc1ME8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdaMlYwVm1Gc2RXVkdjbTl0VUhKdlozSmxjM01vWW14bGJtUlFjbTluY21WemN5d2dZVkFzSUdKUUtUdGNiaUFnSUNBZ0lDQWdmVHRjYmlBZ0lDQjlYRzU5TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvZmxvdy9nZW5lcmF0ZS1ibGVuZC1jdXJ2ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDM3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfSW5wdXQyID0gcmVxdWlyZSgnLi9JbnB1dCcpO1xuXG52YXIgX0lucHV0MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0lucHV0Mik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFBvaW50ZXIgPSBmdW5jdGlvbiAoX0lucHV0KSB7XG4gICAgX2luaGVyaXRzKFBvaW50ZXIsIF9JbnB1dCk7XG5cbiAgICBmdW5jdGlvbiBQb2ludGVyKGluaXRpYWxTdGF0ZSwgbW92ZUV2ZW50LCBldmVudFRvUG9pbnQpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBvaW50ZXIpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9JbnB1dC5jYWxsKHRoaXMsIGluaXRpYWxTdGF0ZSkpO1xuXG4gICAgICAgIF90aGlzLmV2ZW50VG9Qb2ludCA9IGV2ZW50VG9Qb2ludDtcbiAgICAgICAgX3RoaXMubW92ZUV2ZW50ID0gbW92ZUV2ZW50O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgUG9pbnRlci5wcm90b3R5cGUubGF0ZXN0ID0gZnVuY3Rpb24gbGF0ZXN0KGUpIHtcbiAgICAgICAgX0lucHV0LnByb3RvdHlwZS5sYXRlc3QuY2FsbCh0aGlzLCB0aGlzLmV2ZW50VG9Qb2ludChlKSk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9O1xuXG4gICAgUG9pbnRlci5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgX0lucHV0LnByb3RvdHlwZS5zdGFydC5jYWxsKHRoaXMpO1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLm1vdmVFdmVudCwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczIubGF0ZXN0KGUpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgUG9pbnRlci5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgIF9JbnB1dC5wcm90b3R5cGUuc3RvcC5jYWxsKHRoaXMpO1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLm1vdmVFdmVudCwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczMubGF0ZXN0KGUpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFBvaW50ZXI7XG59KF9JbnB1dDMuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFBvaW50ZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibkIxZEM5UWIybHVkR1Z5TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdRVUZCUVRzN096czdPenM3T3pzN08wbEJSWEZDT3pzN1FVRkRha0lzWVVGRWFVSXNUMEZEYWtJc1EwRkJXU3haUVVGYUxFVkJRVEJDTEZOQlFURkNMRVZCUVhGRExGbEJRWEpETEVWQlFXMUVPemhDUVVSc1F5eFRRVU5yUXpzN2NVUkJReTlETEd0Q1FVRk5MRmxCUVU0c1IwRkVLME03TzBGQlJTOURMR05CUVVzc1dVRkJUQ3hIUVVGdlFpeFpRVUZ3UWl4RFFVWXJRenRCUVVjdlF5eGpRVUZMTEZOQlFVd3NSMEZCYVVJc1UwRkJha0lzUTBGSUswTTdPMHRCUVc1RU96dEJRVVJwUWl4elFrRlBha0lzZVVKQlFVOHNSMEZCUnp0QlFVTk9MSGxDUVVGTkxFMUJRVTRzV1VGQllTeExRVUZMTEZsQlFVd3NRMEZCYTBJc1EwRkJiRUlzUTBGQllpeEZRVVJOTzBGQlJVNHNWVUZCUlN4alFVRkdMRWRCUmswN096dEJRVkJQTEhOQ1FWbHFRaXg1UWtGQlVUczdPMEZCUTBvc2VVSkJRVTBzUzBGQlRpeFpRVVJKTzBGQlJVb3NhVUpCUVZNc1pVRkJWQ3hEUVVGNVFpeG5Ra0ZCZWtJc1EwRkJNRU1zUzBGQlN5eFRRVUZNTEVWQlFXZENMRlZCUVVNc1EwRkJSRHR0UWtGQlR5eFBRVUZMTEUxQlFVd3NRMEZCV1N4RFFVRmFPMU5CUVZBc1EwRkJNVVFzUTBGR1NUczdPMEZCV2xNc2MwSkJhVUpxUWl4MVFrRkJUenM3TzBGQlEwZ3NlVUpCUVUwc1NVRkJUaXhaUVVSSE8wRkJSVWdzYVVKQlFWTXNaVUZCVkN4RFFVRjVRaXh0UWtGQmVrSXNRMEZCTmtNc1MwRkJTeXhUUVVGTUxFVkJRV2RDTEZWQlFVTXNRMEZCUkR0dFFrRkJUeXhQUVVGTExFMUJRVXdzUTBGQldTeERRVUZhTzFOQlFWQXNRMEZCTjBRc1EwRkdSenM3TzFkQmFrSlZJaXdpWm1sc1pTSTZJbEJ2YVc1MFpYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFF2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJRWx1Y0hWMElHWnliMjBnSnk0dlNXNXdkWFFuTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCamJHRnpjeUJRYjJsdWRHVnlJR1Y0ZEdWdVpITWdTVzV3ZFhRZ2UxeHVJQ0FnSUdOdmJuTjBjblZqZEc5eUtHbHVhWFJwWVd4VGRHRjBaU3dnYlc5MlpVVjJaVzUwTENCbGRtVnVkRlJ2VUc5cGJuUXBJSHRjYmlBZ0lDQWdJQ0FnYzNWd1pYSW9hVzVwZEdsaGJGTjBZWFJsS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVsZG1WdWRGUnZVRzlwYm5RZ1BTQmxkbVZ1ZEZSdlVHOXBiblE3WEc0Z0lDQWdJQ0FnSUhSb2FYTXViVzkyWlVWMlpXNTBJRDBnYlc5MlpVVjJaVzUwTzF4dUlDQWdJSDFjYmx4dUlDQWdJR3hoZEdWemRDaGxLU0I3WEc0Z0lDQWdJQ0FnSUhOMWNHVnlMbXhoZEdWemRDaDBhR2x6TG1WMlpXNTBWRzlRYjJsdWRDaGxLU2s3WEc0Z0lDQWdJQ0FnSUdVdWNISmxkbVZ1ZEVSbFptRjFiSFFvS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J6ZEdGeWRDZ3BJSHRjYmlBZ0lDQWdJQ0FnYzNWd1pYSXVjM1JoY25Rb0tUdGNiaUFnSUNBZ0lDQWdaRzlqZFcxbGJuUXVaRzlqZFcxbGJuUkZiR1Z0Wlc1MExtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb2RHaHBjeTV0YjNabFJYWmxiblFzSUNobEtTQTlQaUIwYUdsekxteGhkR1Z6ZENobEtTazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2MzUnZjQ2dwSUh0Y2JpQWdJQ0FnSUNBZ2MzVndaWEl1YzNSdmNDZ3BPMXh1SUNBZ0lDQWdJQ0JrYjJOMWJXVnVkQzVrYjJOMWJXVnVkRVZzWlcxbGJuUXVjbVZ0YjNabFJYWmxiblJNYVhOMFpXNWxjaWgwYUdsekxtMXZkbVZGZG1WdWRDd2dLR1VwSUQwK0lIUm9hWE11YkdGMFpYTjBLR1VwS1R0Y2JpQWdJQ0I5WEc1OVhHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbnB1dC9Qb2ludGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMzhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVhY3RpdmF0ZSA9IGV4cG9ydHMuZ2V0VGFza0lkID0gdW5kZWZpbmVkO1xuZXhwb3J0cy5hY3RpdmF0ZSA9IGFjdGl2YXRlO1xuXG52YXIgX3RpbWVyID0gcmVxdWlyZSgnLi90aW1lcicpO1xuXG52YXIgX3RpbWVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RpbWVyKTtcblxudmFyIF90aWNrID0gcmVxdWlyZSgnLi90aWNrJyk7XG5cbnZhciBfdGljazIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90aWNrKTtcblxudmFyIF9tYW5hZ2VyID0gcmVxdWlyZSgnLi9tYW5hZ2VyJyk7XG5cbnZhciBfbWFuYWdlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tYW5hZ2VyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHRhc2tTdGVwT3JkZXIgPSBbeyBuYW1lOiAnb25GcmFtZVN0YXJ0JyB9LCB7IG5hbWU6ICdvblVwZGF0ZScgfSwgeyBuYW1lOiAnd2lsbFJlbmRlcicsIGRlY2lkZVJlbmRlcjogdHJ1ZSB9LCB7IG5hbWU6ICdvblByZVJlbmRlcicsIGlzUmVuZGVyOiB0cnVlIH0sIHsgbmFtZTogJ29uUmVuZGVyJywgaXNSZW5kZXI6IHRydWUgfSwgeyBuYW1lOiAnb25Qb3N0UmVuZGVyJywgaXNSZW5kZXI6IHRydWUgfSwgeyBuYW1lOiAnb25GcmFtZUVuZCcgfSwgeyBuYW1lOiAnb25DbGVhbnVwJyB9XTsgLypcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3JlIHJlbmRlciBsb29wXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTb21lIGRlY2ljaXNvbnMgaGVyZSBoYXZlIGJlZW4gdGFrZW4gaW4gdGhlIG5hbWUgb2YgcGVyZm9ybWFuY2UuIEFsbCBoYWlsIHBlcmZvcm1hbmNlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChJdCB0dXJucyBvdXQgbWljcm9vcHRpbWlzYXRpb25zIGRvIG1hdHRlciB3aGVuIHlvdSBoYXZlIDE2bXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuXG52YXIgbnVtVGFza1N0ZXBzID0gdGFza1N0ZXBPcmRlci5sZW5ndGg7XG5cbi8vIFtib29sZWFuXTogSXMgbG9vcCBydW5uaW5nP1xudmFyIGlzUnVubmluZyA9IGZhbHNlO1xuXG4vKlxuICAgIFt0aW1lc3RhbXBdOiBGcmFtZSB0aW1lc3RhbXBcbiAgICBbaW50XTogVGltZSBzaW5jZSBsYXN0IGZyYW1lXG4qL1xuZnVuY3Rpb24gZmlyZUFsbChmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgdmFyIGFjdGl2ZUlkcyA9IF9tYW5hZ2VyMi5kZWZhdWx0LmdldEFjdGl2ZUlkcygpO1xuICAgIHZhciBhY3RpdmVUYXNrQ291bnQgPSBhY3RpdmVJZHMubGVuZ3RoO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1UYXNrU3RlcHM7IGkrKykge1xuICAgICAgICB2YXIgc3RlcCA9IHRhc2tTdGVwT3JkZXJbaV07XG5cbiAgICAgICAgZm9yICh2YXIgaTIgPSAwOyBpMiA8IGFjdGl2ZVRhc2tDb3VudDsgaTIrKykge1xuICAgICAgICAgICAgdmFyIHRhc2sgPSBfbWFuYWdlcjIuZGVmYXVsdC5hY3RpdmVUYXNrc1thY3RpdmVJZHNbaTJdXTtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBmYWxzZTtcblxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhpcyB0YXNrIGhhcyB0aGlzIHN0ZXAsIG9yIGlmIGl0J3MgYSByZW5kZXIgc3RlcCB0aGF0IHdlJ3JlIHJlbmRlcmluZyB0aGlzIGZyYW1lXG4gICAgICAgICAgICBpZiAodGFzayAmJiB0YXNrW3N0ZXAubmFtZV0gJiYgKCFzdGVwLmlzUmVuZGVyIHx8IHN0ZXAuaXNSZW5kZXIgJiYgdGFzay5fcmVuZGVyVGhpc0ZyYW1lID09PSB0cnVlKSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRhc2tbc3RlcC5uYW1lXS5jYWxsKHRhc2ssIHRhc2ssIGZyYW1lU3RhbXAsIGVsYXBzZWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiB0aGlzIGlzIGEgZGVjaWRlIHJlbmRlciBzdGVwIGFuZCBpdCByZXR1cm5zIGBmYWxzZWAsIHNldCB3aWxsUmVuZGVyIHRvIGZhbHNlXG4gICAgICAgICAgICBpZiAoc3RlcC5kZWNpZGVSZW5kZXIpIHtcbiAgICAgICAgICAgICAgICB0YXNrLl9yZW5kZXJUaGlzRnJhbWUgPSB0YXNrW3N0ZXAubmFtZV0gJiYgcmVzdWx0ICE9PSB0cnVlID8gZmFsc2UgOiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIF9tYW5hZ2VyMi5kZWZhdWx0LmdldE5vbkJhY2tncm91bmRSdW5uaW5nQ291bnQoKTtcbn1cblxuLy8gRnVuY3Rpb24gdG8gZmlyZSBldmVyeSBmcmFtZVxuZnVuY3Rpb24gZnJhbWUoZnJhbWVTdGFtcCkge1xuICAgIF90aW1lcjIuZGVmYXVsdC51cGRhdGUoZnJhbWVTdGFtcCk7XG4gICAgaXNSdW5uaW5nID0gZmlyZUFsbChmcmFtZVN0YW1wLCBfdGltZXIyLmRlZmF1bHQuZ2V0RWxhcHNlZCgpKTtcblxuICAgIGlmIChpc1J1bm5pbmcpIHtcbiAgICAgICAgKDAsIF90aWNrMi5kZWZhdWx0KShmcmFtZSk7XG4gICAgfVxufVxuXG4vLyBTdGFydCBsb29wXG5mdW5jdGlvbiBzdGFydCgpIHtcbiAgICBpZiAoIWlzUnVubmluZykge1xuICAgICAgICBfdGltZXIyLmRlZmF1bHQuc3RhcnQoKTtcbiAgICAgICAgaXNSdW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgKDAsIF90aWNrMi5kZWZhdWx0KShmcmFtZSk7XG4gICAgfVxufVxuXG4vLyBFeHBvcnRzXG52YXIgZ2V0VGFza0lkID0gZXhwb3J0cy5nZXRUYXNrSWQgPSBfbWFuYWdlcjIuZGVmYXVsdC5nZXRUYXNrSWQ7XG5cbi8qXG4gICAgW2ludF06IHRhc2sgSUQgdG8gYWN0aXZhdGVcbiAgICBbdGFza106IHRhc2sgdG8gYWN0aXZhdGVcbiovXG5mdW5jdGlvbiBhY3RpdmF0ZShpZCwgdGFzaykge1xuICAgIF9tYW5hZ2VyMi5kZWZhdWx0LmFjdGl2YXRlKGlkLCB0YXNrKTtcblxuICAgIGlmICghaXNSdW5uaW5nKSB7XG4gICAgICAgIHN0YXJ0KCk7XG4gICAgfVxufVxuXG4vKlxuICAgIFtpbnRdOiB0YXNrIElEIHRvIGRlYWN0aXZhdGVcbiovXG52YXIgZGVhY3RpdmF0ZSA9IGV4cG9ydHMuZGVhY3RpdmF0ZSA9IF9tYW5hZ2VyMi5kZWZhdWx0LmRlYWN0aXZhdGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTBZWE5yTDJ4dmIzQXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0UlFXbEdaMEk3TzBGQk0wVm9RanM3T3p0QlFVTkJPenM3TzBGQlEwRTdPenM3T3p0QlFVVkJMRWxCUVUwc1owSkJRV2RDTEVOQlEyeENMRVZCUVVVc1RVRkJUU3hqUVVGT0xFVkJSR2RDTEVWQlJXeENMRVZCUVVVc1RVRkJUU3hWUVVGT0xFVkJSbWRDTEVWQlIyeENMRVZCUVVVc1RVRkJUU3haUVVGT0xFVkJRVzlDTEdOQlFXTXNTVUZCWkN4RlFVaEtMRVZCU1d4Q0xFVkJRVVVzVFVGQlRTeGhRVUZPTEVWQlFYRkNMRlZCUVZVc1NVRkJWaXhGUVVwTUxFVkJTMnhDTEVWQlFVVXNUVUZCVFN4VlFVRk9MRVZCUVd0Q0xGVkJRVlVzU1VGQlZpeEZRVXhHTEVWQlRXeENMRVZCUVVVc1RVRkJUU3hqUVVGT0xFVkJRWE5DTEZWQlFWVXNTVUZCVml4RlFVNU9MRVZCVDJ4Q0xFVkJRVVVzVFVGQlRTeFpRVUZPTEVWQlVHZENMRVZCVVd4Q0xFVkJRVVVzVFVGQlRTeFhRVUZPTEVWQlVtZENMRU5CUVdoQ096czdPenM3TzBGQlZVNHNTVUZCVFN4bFFVRmxMR05CUVdNc1RVRkJaRHM3TzBGQlIzSkNMRWxCUVVrc1dVRkJXU3hMUVVGYU96czdPenM3UVVGTlNpeFRRVUZUTEU5QlFWUXNRMEZCYVVJc1ZVRkJha0lzUlVGQk5rSXNUMEZCTjBJc1JVRkJjME03UVVGRGJFTXNVVUZCVFN4WlFVRlpMR3RDUVVGUkxGbEJRVklzUlVGQldpeERRVVEwUWp0QlFVVnNReXhSUVVGTkxHdENRVUZyUWl4VlFVRlZMRTFCUVZZc1EwRkdWVHM3UVVGSmJFTXNVMEZCU3l4SlFVRkpMRWxCUVVrc1EwRkJTaXhGUVVGUExFbEJRVWtzV1VGQlNpeEZRVUZyUWl4SFFVRnNReXhGUVVGMVF6dEJRVU51UXl4WlFVRk5MRTlCUVU4c1kwRkJZeXhEUVVGa0xFTkJRVkFzUTBGRU5rSTdPMEZCUjI1RExHRkJRVXNzU1VGQlNTeExRVUZMTEVOQlFVd3NSVUZCVVN4TFFVRkxMR1ZCUVV3c1JVRkJjMElzU1VGQmRrTXNSVUZCTmtNN1FVRkRla01zWjBKQlFVMHNUMEZCVHl4clFrRkJVU3hYUVVGU0xFTkJRVzlDTEZWQlFWVXNSVUZCVml4RFFVRndRaXhEUVVGUUxFTkJSRzFETzBGQlJYcERMR2RDUVVGSkxGTkJRVk1zUzBGQlZEczdPMEZCUm5GRExHZENRVXR5UXl4UlFVRlJMRXRCUVVzc1MwRkJTeXhKUVVGTUxFTkJRV0lzUzBGQk5FSXNRMEZCUXl4TFFVRkxMRkZCUVV3c1NVRkJhMElzUzBGQlN5eFJRVUZNTEVsQlFXbENMRXRCUVVzc1owSkJRVXdzUzBGQk1FSXNTVUZCTVVJc1EwRkJhRVVzUlVGQmEwYzdRVUZEYkVjc2VVSkJRVk1zUzBGQlN5eExRVUZMTEVsQlFVd3NRMEZCVEN4RFFVRm5RaXhKUVVGb1FpeERRVUZ4UWl4SlFVRnlRaXhGUVVFeVFpeEpRVUV6UWl4RlFVRnBReXhWUVVGcVF5eEZRVUUyUXl4UFFVRTNReXhEUVVGVUxFTkJSR3RITzJGQlFYUkhPenM3UVVGTWVVTXNaMEpCVlhKRExFdEJRVXNzV1VGQlRDeEZRVUZ0UWp0QlFVTnVRaXh4UWtGQlN5eG5Ra0ZCVEN4SFFVRjNRaXhKUVVGRExFTkJRVXNzUzBGQlN5eEpRVUZNTEVOQlFVd3NTVUZCYlVJc1YwRkJWeXhKUVVGWUxFZEJRVzFDTEV0QlFYWkRMRWRCUVN0RExFbEJRUzlETEVOQlJFdzdZVUZCZGtJN1UwRldTanRMUVVoS096dEJRVzFDUVN4WFFVRlBMR3RDUVVGUkxEUkNRVUZTTEVWQlFWQXNRMEYyUW10RE8wTkJRWFJET3pzN1FVRXlRa0VzVTBGQlV5eExRVUZVTEVOQlFXVXNWVUZCWml4RlFVRXlRanRCUVVOMlFpeHZRa0ZCVFN4TlFVRk9MRU5CUVdFc1ZVRkJZaXhGUVVSMVFqdEJRVVYyUWl4blFrRkJXU3hSUVVGUkxGVkJRVklzUlVGQmIwSXNaMEpCUVUwc1ZVRkJUaXhGUVVGd1FpeERRVUZhTEVOQlJuVkNPenRCUVVsMlFpeFJRVUZKTEZOQlFVb3NSVUZCWlR0QlFVTllMRFJDUVVGTExFdEJRVXdzUlVGRVZ6dExRVUZtTzBOQlNrbzdPenRCUVZWQkxGTkJRVk1zUzBGQlZDeEhRVUZwUWp0QlFVTmlMRkZCUVVrc1EwRkJReXhUUVVGRUxFVkJRVms3UVVGRFdpeDNRa0ZCVFN4TFFVRk9MRWRCUkZrN1FVRkZXaXh2UWtGQldTeEpRVUZhTEVOQlJsazdRVUZIV2l3MFFrRkJTeXhMUVVGTUxFVkJTRms3UzBGQmFFSTdRMEZFU2pzN08wRkJVMDhzU1VGQlRTeG5RMEZCV1N4clFrRkJVU3hUUVVGU096czdPenM3UVVGTmJFSXNVMEZCVXl4UlFVRlVMRU5CUVd0Q0xFVkJRV3hDTEVWQlFYTkNMRWxCUVhSQ0xFVkJRVFJDTzBGQlF5OUNMSE5DUVVGUkxGRkJRVklzUTBGQmFVSXNSVUZCYWtJc1JVRkJjVUlzU1VGQmNrSXNSVUZFSzBJN08wRkJSeTlDTEZGQlFVa3NRMEZCUXl4VFFVRkVMRVZCUVZrN1FVRkRXaXhuUWtGRVdUdExRVUZvUWp0RFFVaEhPenM3T3p0QlFWZEJMRWxCUVUwc2EwTkJRV0VzYTBKQlFWRXNWVUZCVWlJc0ltWnBiR1VpT2lKc2IyOXdMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwTDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk4cVhHNGdJQ0FnUTI5eVpTQnlaVzVrWlhJZ2JHOXZjRnh1WEc0Z0lDQWdVMjl0WlNCa1pXTnBZMmx6YjI1eklHaGxjbVVnYUdGMlpTQmlaV1Z1SUhSaGEyVnVJR2x1SUhSb1pTQnVZVzFsSUc5bUlIQmxjbVp2Y20xaGJtTmxMaUJCYkd3Z2FHRnBiQ0J3WlhKbWIzSnRZVzVqWlM1Y2JpQWdJQ0FvU1hRZ2RIVnlibk1nYjNWMElHMXBZM0p2YjNCMGFXMXBjMkYwYVc5dWN5QmtieUJ0WVhSMFpYSWdkMmhsYmlCNWIzVWdhR0YyWlNBeE5tMXpLVnh1S2k5Y2JtbHRjRzl5ZENCMGFXMWxjaUJtY205dElDY3VMM1JwYldWeUp6dGNibWx0Y0c5eWRDQjBhV05ySUdaeWIyMGdKeTR2ZEdsamF5YzdYRzVwYlhCdmNuUWdiV0Z1WVdkbGNpQm1jbTl0SUNjdUwyMWhibUZuWlhJbk8xeHVYRzVqYjI1emRDQjBZWE5yVTNSbGNFOXlaR1Z5SUQwZ1cxeHVJQ0FnSUhzZ2JtRnRaVG9nSjI5dVJuSmhiV1ZUZEdGeWRDY2dmU3hjYmlBZ0lDQjdJRzVoYldVNklDZHZibFZ3WkdGMFpTY2dmU3hjYmlBZ0lDQjdJRzVoYldVNklDZDNhV3hzVW1WdVpHVnlKeXdnWkdWamFXUmxVbVZ1WkdWeU9pQjBjblZsSUgwc1hHNGdJQ0FnZXlCdVlXMWxPaUFuYjI1UWNtVlNaVzVrWlhJbkxDQnBjMUpsYm1SbGNqb2dkSEoxWlNCOUxGeHVJQ0FnSUhzZ2JtRnRaVG9nSjI5dVVtVnVaR1Z5Snl3Z2FYTlNaVzVrWlhJNklIUnlkV1VnZlN4Y2JpQWdJQ0I3SUc1aGJXVTZJQ2R2YmxCdmMzUlNaVzVrWlhJbkxDQnBjMUpsYm1SbGNqb2dkSEoxWlNCOUxGeHVJQ0FnSUhzZ2JtRnRaVG9nSjI5dVJuSmhiV1ZGYm1RbklIMHNYRzRnSUNBZ2V5QnVZVzFsT2lBbmIyNURiR1ZoYm5Wd0p5QjlYRzVkTzF4dVkyOXVjM1FnYm5WdFZHRnphMU4wWlhCeklEMGdkR0Z6YTFOMFpYQlBjbVJsY2k1c1pXNW5kR2c3WEc1Y2JpOHZJRnRpYjI5c1pXRnVYVG9nU1hNZ2JHOXZjQ0J5ZFc1dWFXNW5QMXh1YkdWMElHbHpVblZ1Ym1sdVp5QTlJR1poYkhObE8xeHVYRzR2S2x4dUlDQWdJRnQwYVcxbGMzUmhiWEJkT2lCR2NtRnRaU0IwYVcxbGMzUmhiWEJjYmlBZ0lDQmJhVzUwWFRvZ1ZHbHRaU0J6YVc1alpTQnNZWE4wSUdaeVlXMWxYRzRxTDF4dVpuVnVZM1JwYjI0Z1ptbHlaVUZzYkNobWNtRnRaVk4wWVcxd0xDQmxiR0Z3YzJWa0tTQjdYRzRnSUNBZ1kyOXVjM1FnWVdOMGFYWmxTV1J6SUQwZ2JXRnVZV2RsY2k1blpYUkJZM1JwZG1WSlpITW9LVHRjYmlBZ0lDQmpiMjV6ZENCaFkzUnBkbVZVWVhOclEyOTFiblFnUFNCaFkzUnBkbVZKWkhNdWJHVnVaM1JvTzF4dVhHNGdJQ0FnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCdWRXMVVZWE5yVTNSbGNITTdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCemRHVndJRDBnZEdGemExTjBaWEJQY21SbGNsdHBYVHRjYmx4dUlDQWdJQ0FnSUNCbWIzSWdLR3hsZENCcE1pQTlJREE3SUdreUlEd2dZV04wYVhabFZHRnphME52ZFc1ME95QnBNaXNyS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQjBZWE5ySUQwZ2JXRnVZV2RsY2k1aFkzUnBkbVZVWVhOcmMxdGhZM1JwZG1WSlpITmJhVEpkWFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJR3hsZENCeVpYTjFiSFFnUFNCbVlXeHpaVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnUTJobFkyc2dhV1lnZEdocGN5QjBZWE5ySUdoaGN5QjBhR2x6SUhOMFpYQXNJRzl5SUdsbUlHbDBKM01nWVNCeVpXNWtaWElnYzNSbGNDQjBhR0YwSUhkbEozSmxJSEpsYm1SbGNtbHVaeUIwYUdseklHWnlZVzFsWEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvZEdGemF5QW1KaUIwWVhOclczTjBaWEF1Ym1GdFpWMGdKaVlnS0NGemRHVndMbWx6VW1WdVpHVnlJSHg4SUNoemRHVndMbWx6VW1WdVpHVnlJQ1ltSUhSaGMyc3VYM0psYm1SbGNsUm9hWE5HY21GdFpTQTlQVDBnZEhKMVpTa3BLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WemRXeDBJRDBnZEdGemExdHpkR1Z3TG01aGJXVmRMbU5oYkd3b2RHRnpheXdnZEdGemF5d2dabkpoYldWVGRHRnRjQ3dnWld4aGNITmxaQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJRWxtSUhSb2FYTWdhWE1nWVNCa1pXTnBaR1VnY21WdVpHVnlJSE4wWlhBZ1lXNWtJR2wwSUhKbGRIVnlibk1nWUdaaGJITmxZQ3dnYzJWMElIZHBiR3hTWlc1a1pYSWdkRzhnWm1Gc2MyVmNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaHpkR1Z3TG1SbFkybGtaVkpsYm1SbGNpa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJoYzJzdVgzSmxibVJsY2xSb2FYTkdjbUZ0WlNBOUlDaDBZWE5yVzNOMFpYQXVibUZ0WlYwZ0ppWWdjbVZ6ZFd4MElDRTlQU0IwY25WbEtTQS9JR1poYkhObElEb2dkSEoxWlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJSEpsZEhWeWJpQnRZVzVoWjJWeUxtZGxkRTV2YmtKaFkydG5jbTkxYm1SU2RXNXVhVzVuUTI5MWJuUW9LVHRjYm4xY2JseHVMeThnUm5WdVkzUnBiMjRnZEc4Z1ptbHlaU0JsZG1WeWVTQm1jbUZ0WlZ4dVpuVnVZM1JwYjI0Z1puSmhiV1VvWm5KaGJXVlRkR0Z0Y0NrZ2UxeHVJQ0FnSUhScGJXVnlMblZ3WkdGMFpTaG1jbUZ0WlZOMFlXMXdLVHRjYmlBZ0lDQnBjMUoxYm01cGJtY2dQU0JtYVhKbFFXeHNLR1p5WVcxbFUzUmhiWEFzSUhScGJXVnlMbWRsZEVWc1lYQnpaV1FvS1NrN1hHNWNiaUFnSUNCcFppQW9hWE5TZFc1dWFXNW5LU0I3WEc0Z0lDQWdJQ0FnSUhScFkyc29abkpoYldVcE8xeHVJQ0FnSUgxY2JuMWNibHh1THk4Z1UzUmhjblFnYkc5dmNGeHVablZ1WTNScGIyNGdjM1JoY25Rb0tTQjdYRzRnSUNBZ2FXWWdLQ0ZwYzFKMWJtNXBibWNwSUh0Y2JpQWdJQ0FnSUNBZ2RHbHRaWEl1YzNSaGNuUW9LVHRjYmlBZ0lDQWdJQ0FnYVhOU2RXNXVhVzVuSUQwZ2RISjFaVHRjYmlBZ0lDQWdJQ0FnZEdsamF5aG1jbUZ0WlNrN1hHNGdJQ0FnZlZ4dWZWeHVYRzR2THlCRmVIQnZjblJ6WEc1bGVIQnZjblFnWTI5dWMzUWdaMlYwVkdGemEwbGtJRDBnYldGdVlXZGxjaTVuWlhSVVlYTnJTV1E3WEc1Y2JpOHFYRzRnSUNBZ1cybHVkRjA2SUhSaGMyc2dTVVFnZEc4Z1lXTjBhWFpoZEdWY2JpQWdJQ0JiZEdGemExMDZJSFJoYzJzZ2RHOGdZV04wYVhaaGRHVmNiaW92WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnWVdOMGFYWmhkR1VvYVdRc0lIUmhjMnNwSUh0Y2JpQWdJQ0J0WVc1aFoyVnlMbUZqZEdsMllYUmxLR2xrTENCMFlYTnJLVHRjYmx4dUlDQWdJR2xtSUNnaGFYTlNkVzV1YVc1bktTQjdYRzRnSUNBZ0lDQWdJSE4wWVhKMEtDazdYRzRnSUNBZ2ZWeHVmVnh1WEc0dktseHVJQ0FnSUZ0cGJuUmRPaUIwWVhOcklFbEVJSFJ2SUdSbFlXTjBhWFpoZEdWY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ1pHVmhZM1JwZG1GMFpTQTlJRzFoYm1GblpYSXVaR1ZoWTNScGRtRjBaVHNpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdGFzay9sb29wLmpzXG4gKiogbW9kdWxlIGlkID0gMzlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBUUkFOU0xBVEUgPSAndHJhbnNsYXRlJztcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIHg6IFRSQU5TTEFURSArICdYJyxcbiAgICB5OiBUUkFOU0xBVEUgKyAnWScsXG4gICAgejogVFJBTlNMQVRFICsgJ1onXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMMk56Y3k5emRHRjBaUzF0WVhBdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPMEZCUVVFc1NVRkJUU3haUVVGWkxGZEJRVm83TzJ0Q1FVVlRPMEZCUTFnc1QwRkJSeXhaUVVGWkxFZEJRVm83UVVGRFNDeFBRVUZITEZsQlFWa3NSMEZCV2p0QlFVTklMRTlCUVVjc1dVRkJXU3hIUVVGYUlpd2labWxzWlNJNkluTjBZWFJsTFcxaGNDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpqYjI1emRDQlVVa0ZPVTB4QlZFVWdQU0FuZEhKaGJuTnNZWFJsSnp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2UxeHVJQ0FnSUhnNklGUlNRVTVUVEVGVVJTQXJJQ2RZSnl4Y2JpQWdJQ0I1T2lCVVVrRk9VMHhCVkVVZ0t5QW5XU2NzWEc0Z0lDQWdlam9nVkZKQlRsTk1RVlJGSUNzZ0oxb25YRzU5T3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FkYXB0ZXIvY3NzL3N0YXRlLW1hcC5qc1xuICoqIG1vZHVsZSBpZCA9IDQwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfYW5nbGUgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9hbmdsZScpO1xuXG52YXIgX2FuZ2xlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FuZ2xlKTtcblxudmFyIF9hbHBoYSA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL2FscGhhJyk7XG5cbnZhciBfYWxwaGEyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWxwaGEpO1xuXG52YXIgX2NvbG9yID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvY29sb3InKTtcblxudmFyIF9jb2xvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb2xvcik7XG5cbnZhciBfc2NhbGUgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9zY2FsZScpO1xuXG52YXIgX3NjYWxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NjYWxlKTtcblxudmFyIF9zaGFkb3cgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9zaGFkb3cnKTtcblxudmFyIF9zaGFkb3cyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2hhZG93KTtcblxudmFyIF9weCA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL3B4Jyk7XG5cbnZhciBfcHgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgLy8gQ29sb3IgcHJvcHNcbiAgICBjb2xvcjogX2NvbG9yMi5kZWZhdWx0LFxuICAgIGJhY2tncm91bmRDb2xvcjogX2NvbG9yMi5kZWZhdWx0LFxuICAgIG91dGxpbmVDb2xvcjogX2NvbG9yMi5kZWZhdWx0LFxuICAgIGZpbGw6IF9jb2xvcjIuZGVmYXVsdCxcbiAgICBzdHJva2U6IF9jb2xvcjIuZGVmYXVsdCxcblxuICAgIC8vIEJvcmRlciBwcm9wc1xuICAgIGJvcmRlckNvbG9yOiBfY29sb3IyLmRlZmF1bHQsXG4gICAgYm9yZGVyVG9wQ29sb3I6IF9jb2xvcjIuZGVmYXVsdCxcbiAgICBib3JkZXJSaWdodENvbG9yOiBfY29sb3IyLmRlZmF1bHQsXG4gICAgYm9yZGVyQm90dG9tQ29sb3I6IF9jb2xvcjIuZGVmYXVsdCxcbiAgICBib3JkZXJMZWZ0Q29sb3I6IF9jb2xvcjIuZGVmYXVsdCxcbiAgICBib3JkZXJSYWRpdXM6IF9weDIuZGVmYXVsdCxcblxuICAgIC8vIFBvc2l0aW9uaW5nXG4gICAgd2lkdGg6IF9weDIuZGVmYXVsdCxcbiAgICBoZWlnaHQ6IF9weDIuZGVmYXVsdCxcblxuICAgIC8vIFNoYWRvd3NcbiAgICB0ZXh0U2hhZG93OiBfc2hhZG93Mi5kZWZhdWx0LFxuICAgIGJveFNoYWRvdzogX3NoYWRvdzIuZGVmYXVsdCxcblxuICAgIC8vIFRyYW5zZm9ybSBwcm9wZXJ0aWVzXG4gICAgcm90YXRlOiBfYW5nbGUyLmRlZmF1bHQsXG4gICAgcm90YXRlWDogX2FuZ2xlMi5kZWZhdWx0LFxuICAgIHJvdGF0ZVk6IF9hbmdsZTIuZGVmYXVsdCxcbiAgICByb3RhdGVaOiBfYW5nbGUyLmRlZmF1bHQsXG4gICAgc2NhbGU6IF9zY2FsZTIuZGVmYXVsdCxcbiAgICBzY2FsZVg6IF9zY2FsZTIuZGVmYXVsdCxcbiAgICBzY2FsZVk6IF9zY2FsZTIuZGVmYXVsdCxcbiAgICBzY2FsZVo6IF9zY2FsZTIuZGVmYXVsdCxcbiAgICBza2V3WDogX2FuZ2xlMi5kZWZhdWx0LFxuICAgIHNrZXdZOiBfYW5nbGUyLmRlZmF1bHQsXG4gICAgZGlzdGFuY2U6IF9weDIuZGVmYXVsdCxcbiAgICB0cmFuc2xhdGVYOiBfcHgyLmRlZmF1bHQsXG4gICAgdHJhbnNsYXRlWTogX3B4Mi5kZWZhdWx0LFxuICAgIHRyYW5zbGF0ZVo6IF9weDIuZGVmYXVsdCxcbiAgICBwZXJzcGVjdGl2ZTogX3B4Mi5kZWZhdWx0LFxuICAgIG9wYWNpdHk6IF9hbHBoYTIuZGVmYXVsdFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFpHRndkR1Z5TDJOemN5OTJZV3gxWlMxMGVYQmxMVzFoY0M1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPMEZCUVVFN096czdRVUZEUVRzN096dEJRVU5CT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3T3pzN2EwSkJSV1U3TzBGQlJWZ3NNRUpCUmxjN1FVRkhXQ3h2UTBGSVZ6dEJRVWxZTEdsRFFVcFhPMEZCUzFnc2VVSkJURmM3UVVGTldDd3lRa0ZPVnpzN08wRkJVMWdzWjBOQlZGYzdRVUZWV0N4dFEwRldWenRCUVZkWUxIRkRRVmhYTzBGQldWZ3NjME5CV2xjN1FVRmhXQ3h2UTBGaVZ6dEJRV05ZTERoQ1FXUlhPenM3UVVGcFFsZ3NkVUpCYWtKWE8wRkJhMEpZTEhkQ1FXeENWenM3TzBGQmNVSllMR2REUVhKQ1Z6dEJRWE5DV0N3clFrRjBRbGM3T3p0QlFYbENXQ3d5UWtGNlFsYzdRVUV3UWxnc05FSkJNVUpYTzBGQk1rSllMRFJDUVROQ1Z6dEJRVFJDV0N3MFFrRTFRbGM3UVVFMlFsZ3NNRUpCTjBKWE8wRkJPRUpZTERKQ1FUbENWenRCUVN0Q1dDd3lRa0V2UWxjN1FVRm5RMWdzTWtKQmFFTlhPMEZCYVVOWUxEQkNRV3BEVnp0QlFXdERXQ3d3UWtGc1ExYzdRVUZ0UTFnc01FSkJia05YTzBGQmIwTllMRFJDUVhCRFZ6dEJRWEZEV0N3MFFrRnlRMWM3UVVGelExZ3NORUpCZEVOWE8wRkJkVU5ZTERaQ1FYWkRWenRCUVhkRFdDdzBRa0Y0UTFjaUxDSm1hV3hsSWpvaWRtRnNkV1V0ZEhsd1pTMXRZWEF1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUdGdVoyeGxJR1p5YjIwZ0p5NHVMeTR1TDNaaGJIVmxMWFI1Y0dWekwyRnVaMnhsSnp0Y2JtbHRjRzl5ZENCaGJIQm9ZU0JtY205dElDY3VMaTh1TGk5MllXeDFaUzEwZVhCbGN5OWhiSEJvWVNjN1hHNXBiWEJ2Y25RZ1kyOXNiM0lnWm5KdmJTQW5MaTR2TGk0dmRtRnNkV1V0ZEhsd1pYTXZZMjlzYjNJbk8xeHVhVzF3YjNKMElITmpZV3hsSUdaeWIyMGdKeTR1THk0dUwzWmhiSFZsTFhSNWNHVnpMM05qWVd4bEp6dGNibWx0Y0c5eWRDQnphR0ZrYjNjZ1puSnZiU0FuTGk0dkxpNHZkbUZzZFdVdGRIbHdaWE12YzJoaFpHOTNKenRjYm1sdGNHOXlkQ0J3ZUNCbWNtOXRJQ2N1TGk4dUxpOTJZV3gxWlMxMGVYQmxjeTl3ZUNjN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElIdGNiaUFnSUNBdkx5QkRiMnh2Y2lCd2NtOXdjMXh1SUNBZ0lHTnZiRzl5T2lCamIyeHZjaXhjYmlBZ0lDQmlZV05yWjNKdmRXNWtRMjlzYjNJNklHTnZiRzl5TEZ4dUlDQWdJRzkxZEd4cGJtVkRiMnh2Y2pvZ1kyOXNiM0lzWEc0Z0lDQWdabWxzYkRvZ1kyOXNiM0lzWEc0Z0lDQWdjM1J5YjJ0bE9pQmpiMnh2Y2l4Y2JseHVJQ0FnSUM4dklFSnZjbVJsY2lCd2NtOXdjMXh1SUNBZ0lHSnZjbVJsY2tOdmJHOXlPaUJqYjJ4dmNpeGNiaUFnSUNCaWIzSmtaWEpVYjNCRGIyeHZjam9nWTI5c2IzSXNYRzRnSUNBZ1ltOXlaR1Z5VW1sbmFIUkRiMnh2Y2pvZ1kyOXNiM0lzWEc0Z0lDQWdZbTl5WkdWeVFtOTBkRzl0UTI5c2IzSTZJR052Ykc5eUxGeHVJQ0FnSUdKdmNtUmxja3hsWm5SRGIyeHZjam9nWTI5c2IzSXNYRzRnSUNBZ1ltOXlaR1Z5VW1Ga2FYVnpPaUJ3ZUN4Y2JseHVJQ0FnSUM4dklGQnZjMmwwYVc5dWFXNW5YRzRnSUNBZ2QybGtkR2c2SUhCNExGeHVJQ0FnSUdobGFXZG9kRG9nY0hnc1hHNWNiaUFnSUNBdkx5QlRhR0ZrYjNkelhHNGdJQ0FnZEdWNGRGTm9ZV1J2ZHpvZ2MyaGhaRzkzTEZ4dUlDQWdJR0p2ZUZOb1lXUnZkem9nYzJoaFpHOTNMQ0FnSUZ4dVhHNGdJQ0FnTHk4Z1ZISmhibk5tYjNKdElIQnliM0JsY25ScFpYTmNiaUFnSUNCeWIzUmhkR1U2SUdGdVoyeGxMRnh1SUNBZ0lISnZkR0YwWlZnNklHRnVaMnhsTEZ4dUlDQWdJSEp2ZEdGMFpWazZJR0Z1WjJ4bExGeHVJQ0FnSUhKdmRHRjBaVm82SUdGdVoyeGxMRnh1SUNBZ0lITmpZV3hsT2lCelkyRnNaU3hjYmlBZ0lDQnpZMkZzWlZnNklITmpZV3hsTEZ4dUlDQWdJSE5qWVd4bFdUb2djMk5oYkdVc1hHNGdJQ0FnYzJOaGJHVmFPaUJ6WTJGc1pTeGNiaUFnSUNCemEyVjNXRG9nWVc1bmJHVXNYRzRnSUNBZ2MydGxkMWs2SUdGdVoyeGxMRnh1SUNBZ0lHUnBjM1JoYm1ObE9pQndlQ3hjYmlBZ0lDQjBjbUZ1YzJ4aGRHVllPaUJ3ZUN4Y2JpQWdJQ0IwY21GdWMyeGhkR1ZaT2lCd2VDeGNiaUFnSUNCMGNtRnVjMnhoZEdWYU9pQndlQ3hjYmlBZ0lDQndaWEp6Y0dWamRHbDJaVG9nY0hnc1hHNGdJQ0FnYjNCaFkybDBlVG9nWVd4d2FHRmNibjA3SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9jc3MvdmFsdWUtdHlwZS1tYXAuanNcbiAqKiBtb2R1bGUgaWQgPSA0MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzID0gcmVxdWlyZSgnLi90cmFuc2Zvcm0tcHJvcHMnKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2Zvcm1Qcm9wcyk7XG5cbnZhciBfcHJlZml4ZXIgPSByZXF1aXJlKCcuL3ByZWZpeGVyJyk7XG5cbnZhciBfcHJlZml4ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlZml4ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgVFJBTlNMQVRFX1ogPSAndHJhbnNsYXRlWic7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChzdGF0ZSwgZGlzYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uKSB7XG4gICAgdmFyIHByb3BlcnR5U3RyaW5nID0gJyc7XG4gICAgdmFyIHRyYW5zZm9ybVN0cmluZyA9ICcnO1xuICAgIHZhciB0cmFuc2Zvcm1IYXNaID0gZmFsc2U7XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc3RhdGUpIHtcbiAgICAgICAgaWYgKHN0YXRlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHN0YXRlW2tleV07XG5cbiAgICAgICAgICAgIGlmIChfdHJhbnNmb3JtUHJvcHMyLmRlZmF1bHRba2V5XSkge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybVN0cmluZyArPSBrZXkgKyAnKCcgKyB2YWx1ZSArICcpICc7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtSGFzWiA9IGtleSA9PT0gVFJBTlNMQVRFX1ogPyB0cnVlIDogdHJhbnNmb3JtSGFzWjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJvcGVydHlTdHJpbmcgKz0gJzsnICsgKDAsIF9wcmVmaXhlcjIuZGVmYXVsdCkoa2V5LCB0cnVlKSArICc6JyArIHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRyYW5zZm9ybVN0cmluZyAhPT0gJycpIHtcbiAgICAgICAgaWYgKCF0cmFuc2Zvcm1IYXNaICYmICFkaXNhYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybVN0cmluZyArPSBUUkFOU0xBVEVfWiArICcoMHB4KSc7XG4gICAgICAgIH1cblxuICAgICAgICBwcm9wZXJ0eVN0cmluZyArPSAnOycgKyAoMCwgX3ByZWZpeGVyMi5kZWZhdWx0KSgndHJhbnNmb3JtJykgKyAnOicgKyB0cmFuc2Zvcm1TdHJpbmc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5U3RyaW5nO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFpHRndkR1Z5TDJOemN5OWlkV2xzWkM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPMEZCUVVFN096czdRVUZEUVRzN096czdPMEZCUlVFc1NVRkJUU3hqUVVGakxGbEJRV1E3TzJ0Q1FVVlRMRlZCUVVNc1MwRkJSQ3hGUVVGUkxESkNRVUZTTEVWQlFYZERPMEZCUTI1RUxGRkJRVWtzYVVKQlFXbENMRVZCUVdwQ0xFTkJSQ3RETzBGQlJXNUVMRkZCUVVrc2EwSkJRV3RDTEVWQlFXeENMRU5CUml0RE8wRkJSMjVFTEZGQlFVa3NaMEpCUVdkQ0xFdEJRV2hDTEVOQlNDdERPenRCUVV0dVJDeFRRVUZMTEVsQlFVa3NSMEZCU2l4SlFVRlhMRXRCUVdoQ0xFVkJRWFZDTzBGQlEyNUNMRmxCUVVrc1RVRkJUU3hqUVVGT0xFTkJRWEZDTEVkQlFYSkNMRU5CUVVvc1JVRkJLMEk3UVVGRE0wSXNaMEpCUVUwc1VVRkJVU3hOUVVGTkxFZEJRVTRzUTBGQlVpeERRVVJ4UWpzN1FVRkhNMElzWjBKQlFVa3NlVUpCUVdVc1IwRkJaaXhEUVVGS0xFVkJRWGxDTzBGQlEzSkNMRzFEUVVGdFFpeE5RVUZOTEVkQlFVNHNSMEZCV1N4TFFVRmFMRWRCUVc5Q0xFbEJRWEJDTEVOQlJFVTdRVUZGY2tJc1owTkJRV2RDTEVkQlFVTXNTMEZCVVN4WFFVRlNMRWRCUVhWQ0xFbEJRWGhDTEVkQlFTdENMR0ZCUVM5Q0xFTkJSa3M3WVVGQmVrSXNUVUZKVHp0QlFVTklMR3REUVVGclFpeE5RVUZOTEhkQ1FVRlRMRWRCUVZRc1JVRkJZeXhKUVVGa0xFTkJRVTRzUjBGQk5FSXNSMEZCTlVJc1IwRkJhME1zUzBGQmJFTXNRMEZFWmp0aFFVcFFPMU5CU0VvN1MwRkVTanM3UVVGalFTeFJRVUZKTEc5Q1FVRnZRaXhGUVVGd1FpeEZRVUYzUWp0QlFVTjRRaXhaUVVGSkxFTkJRVU1zWVVGQlJDeEpRVUZyUWl4RFFVRkRMREpDUVVGRUxFVkJRVGhDTzBGQlEyaEVMQ3RDUVVGdFFpeGpRVUZqTEU5QlFXUXNRMEZFTmtJN1UwRkJjRVE3TzBGQlNVRXNNRUpCUVd0Q0xFMUJRVTBzZDBKQlFWTXNWMEZCVkN4RFFVRk9MRWRCUVRoQ0xFZEJRVGxDTEVkQlFXOURMR1ZCUVhCRExFTkJURTA3UzBGQk5VSTdPMEZCVVVFc1YwRkJUeXhqUVVGUUxFTkJNMEp0UkR0RFFVRjRReUlzSW1acGJHVWlPaUppZFdsc1pDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdkSEpoYm5ObWIzSnRVSEp2Y0hNZ1puSnZiU0FuTGk5MGNtRnVjMlp2Y20wdGNISnZjSE1uTzF4dWFXMXdiM0owSUhCeVpXWnBlR1Z5SUdaeWIyMGdKeTR2Y0hKbFptbDRaWEluTzF4dVhHNWpiMjV6ZENCVVVrRk9VMHhCVkVWZldpQTlJQ2QwY21GdWMyeGhkR1ZhSnp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ0tITjBZWFJsTENCa2FYTmhZbXhsU0dGeVpIZGhjbVZCWTJObGJHVnlZWFJwYjI0cElEMCtJSHRjYmlBZ0lDQnNaWFFnY0hKdmNHVnlkSGxUZEhKcGJtY2dQU0FuSnp0Y2JpQWdJQ0JzWlhRZ2RISmhibk5tYjNKdFUzUnlhVzVuSUQwZ0p5YzdYRzRnSUNBZ2JHVjBJSFJ5WVc1elptOXliVWhoYzFvZ1BTQm1ZV3h6WlR0Y2JseHVJQ0FnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUJ6ZEdGMFpTa2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb2MzUmhkR1V1YUdGelQzZHVVSEp2Y0dWeWRIa29hMlY1S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdkbUZzZFdVZ1BTQnpkR0YwWlZ0clpYbGRPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvZEhKaGJuTm1iM0p0VUhKdmNITmJhMlY1WFNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUnlZVzV6Wm05eWJWTjBjbWx1WnlBclBTQnJaWGtnS3lBbktDY2dLeUIyWVd4MVpTQXJJQ2NwSUNjN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RISmhibk5tYjNKdFNHRnpXaUE5SUNoclpYa2dQVDA5SUZSU1FVNVRURUZVUlY5YUtTQS9JSFJ5ZFdVZ09pQjBjbUZ1YzJadmNtMUlZWE5hTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEJ5YjNCbGNuUjVVM1J5YVc1bklDczlJQ2M3SnlBcklIQnlaV1pwZUdWeUtHdGxlU3dnZEhKMVpTa2dLeUFuT2ljZ0t5QjJZV3gxWlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJR2xtSUNoMGNtRnVjMlp2Y20xVGRISnBibWNnSVQwOUlDY25LU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDZ2hkSEpoYm5ObWIzSnRTR0Z6V2lBbUppQWhaR2x6WVdKc1pVaGhjbVIzWVhKbFFXTmpaV3hsY21GMGFXOXVLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBjbUZ1YzJadmNtMVRkSEpwYm1jZ0t6MGdWRkpCVGxOTVFWUkZYMW9nS3lBbktEQndlQ2tuTzF4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdjSEp2Y0dWeWRIbFRkSEpwYm1jZ0t6MGdKenNuSUNzZ2NISmxabWw0WlhJb0ozUnlZVzV6Wm05eWJTY3BJQ3NnSnpvbklDc2dkSEpoYm5ObWIzSnRVM1J5YVc1bk8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhKbGRIVnliaUJ3Y205d1pYSjBlVk4wY21sdVp6dGNibjA3SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9jc3MvYnVpbGQuanNcbiAqKiBtb2R1bGUgaWQgPSA0MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vLi4vaW5jL3V0aWxzJyk7XG5cbnZhciBjYW1lbENhY2hlID0ge307XG52YXIgZGFzaENhY2hlID0ge307XG52YXIgcHJlZml4ZXMgPSBbJ1dlYmtpdCcsICdNb3onLCAnTycsICdtcycsICcnXTtcbnZhciBudW1QcmVmaXhlcyA9IHByZWZpeGVzLmxlbmd0aDtcbnZhciB0ZXN0RWxlbWVudCA9IHZvaWQgMDtcblxuLypcbiAgICBUZXN0IHN0eWxlIHByb3BlcnR5IGZvciBwcmVmaXhlZCB2ZXJzaW9uXG4gICAgXG4gICAgQHBhcmFtIFtzdHJpbmddOiBTdHlsZSBwcm9wZXJ0eVxuICAgIEByZXR1cm4gW3N0cmluZ106IENhY2hlZCBwcm9wZXJ0eSBuYW1lXG4qL1xudmFyIHRlc3RQcmVmaXggPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgdGVzdEVsZW1lbnQgPSB0ZXN0RWxlbWVudCB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtUHJlZml4ZXM7IGkrKykge1xuICAgICAgICB2YXIgcHJlZml4ID0gcHJlZml4ZXNbaV07XG4gICAgICAgIHZhciBub1ByZWZpeCA9IHByZWZpeCA9PT0gJyc7XG4gICAgICAgIHZhciBwcmVmaXhlZFByb3BlcnR5TmFtZSA9IG5vUHJlZml4ID8ga2V5IDogcHJlZml4ICsga2V5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsga2V5LnNsaWNlKDEpO1xuXG4gICAgICAgIGlmIChwcmVmaXhlZFByb3BlcnR5TmFtZSBpbiB0ZXN0RWxlbWVudC5zdHlsZSkge1xuICAgICAgICAgICAgY2FtZWxDYWNoZVtrZXldID0gcHJlZml4ZWRQcm9wZXJ0eU5hbWU7XG4gICAgICAgICAgICBkYXNoQ2FjaGVba2V5XSA9ICcnICsgKG5vUHJlZml4ID8gJycgOiAnLScpICsgKDAsIF91dGlscy5jYW1lbFRvRGFzaCkocHJlZml4ZWRQcm9wZXJ0eU5hbWUpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGtleSwgYXNEYXNoQ2FzZSkge1xuICAgIHZhciBjYWNoZSA9IGFzRGFzaENhc2UgPyBkYXNoQ2FjaGUgOiBjYW1lbENhY2hlO1xuXG4gICAgaWYgKCFjYWNoZVtrZXldKSB7XG4gICAgICAgIHRlc3RQcmVmaXgoa2V5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2FjaGVba2V5XTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwyTnpjeTl3Y21WbWFYaGxjaTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN08wRkJRVUU3TzBGQlJVRXNTVUZCVFN4aFFVRmhMRVZCUVdJN1FVRkRUaXhKUVVGTkxGbEJRVmtzUlVGQldqdEJRVU5PTEVsQlFVMHNWMEZCVnl4RFFVRkRMRkZCUVVRc1JVRkJWU3hMUVVGV0xFVkJRV2RDTEVkQlFXaENMRVZCUVc5Q0xFbEJRWEJDTEVWQlFUQkNMRVZCUVRGQ0xFTkJRVmc3UVVGRFRpeEpRVUZOTEdOQlFXTXNVMEZCVXl4TlFVRlVPMEZCUTNCQ0xFbEJRVWtzYjBKQlFVbzdPenM3T3pzN08wRkJVVUVzU1VGQlRTeGhRVUZoTEZWQlFVTXNSMEZCUkN4RlFVRlRPMEZCUTNoQ0xHdENRVUZqTEdWQlFXVXNVMEZCVXl4aFFVRlVMRU5CUVhWQ0xFdEJRWFpDTEVOQlFXWXNRMEZFVlRzN1FVRkhlRUlzVTBGQlN5eEpRVUZKTEVsQlFVa3NRMEZCU2l4RlFVRlBMRWxCUVVrc1YwRkJTaXhGUVVGcFFpeEhRVUZxUXl4RlFVRnpRenRCUVVOc1F5eFpRVUZOTEZOQlFWTXNVMEZCVXl4RFFVRlVMRU5CUVZRc1EwRkVORUk3UVVGRmJFTXNXVUZCVFN4WFFVRlpMRmRCUVZjc1JVRkJXQ3hEUVVablFqdEJRVWRzUXl4WlFVRk5MSFZDUVVGMVFpeFhRVUZYTEVkQlFWZ3NSMEZCYVVJc1UwRkJVeXhKUVVGSkxFMUJRVW9zUTBGQlZ5eERRVUZZTEVWQlFXTXNWMEZCWkN4RlFVRlVMRWRCUVhWRExFbEJRVWtzUzBGQlNpeERRVUZWTEVOQlFWWXNRMEZCZGtNc1EwRklXanM3UVVGTGJFTXNXVUZCU1N4M1FrRkJkMElzV1VGQldTeExRVUZhTEVWQlFXMUNPMEZCUXpORExIVkNRVUZYTEVkQlFWZ3NTVUZCYTBJc2IwSkJRV3hDTEVOQlJESkRPMEZCUlRORExITkNRVUZWTEVkQlFWWXNWVUZCY1VJc1YwRkJWeXhGUVVGWUxFZEJRV2RDTEVkQlFXaENMRWxCUVhWQ0xIZENRVUZaTEc5Q1FVRmFMRU5CUVRWRExFTkJSakpETzFOQlFTOURPMHRCVEVvN1EwRklaVHM3YTBKQlpVb3NWVUZCUXl4SFFVRkVMRVZCUVUwc1ZVRkJUaXhGUVVGeFFqdEJRVU5vUXl4UlFVRk5MRkZCUVZFc1lVRkJZU3hUUVVGaUxFZEJRWGxDTEZWQlFYcENMRU5CUkd0Q096dEJRVWRvUXl4UlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGT0xFTkJRVVFzUlVGQllUdEJRVU5pTEcxQ1FVRlhMRWRCUVZnc1JVRkVZVHRMUVVGcVFqczdRVUZKUVN4WFFVRlBMRTFCUVUwc1IwRkJUaXhEUVVGUUxFTkJVR2RETzBOQlFYSkNJaXdpWm1sc1pTSTZJbkJ5WldacGVHVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwTDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3SUdOaGJXVnNWRzlFWVhOb0lIMGdabkp2YlNBbkxpNHZMaTR2YVc1akwzVjBhV3h6Snp0Y2JseHVZMjl1YzNRZ1kyRnRaV3hEWVdOb1pTQTlJSHQ5TzF4dVkyOXVjM1FnWkdGemFFTmhZMmhsSUQwZ2UzMDdYRzVqYjI1emRDQndjbVZtYVhobGN5QTlJRnNuVjJWaWEybDBKeXduVFc5Nkp5d25UeWNzSjIxekp5d2dKeWRkTzF4dVkyOXVjM1FnYm5WdFVISmxabWw0WlhNZ1BTQndjbVZtYVhobGN5NXNaVzVuZEdnN1hHNXNaWFFnZEdWemRFVnNaVzFsYm5RN1hHNWNiaThxWEc0Z0lDQWdWR1Z6ZENCemRIbHNaU0J3Y205d1pYSjBlU0JtYjNJZ2NISmxabWw0WldRZ2RtVnljMmx2Ymx4dUlDQWdJRnh1SUNBZ0lFQndZWEpoYlNCYmMzUnlhVzVuWFRvZ1UzUjViR1VnY0hKdmNHVnlkSGxjYmlBZ0lDQkFjbVYwZFhKdUlGdHpkSEpwYm1kZE9pQkRZV05vWldRZ2NISnZjR1Z5ZEhrZ2JtRnRaVnh1S2k5Y2JtTnZibk4wSUhSbGMzUlFjbVZtYVhnZ1BTQW9hMlY1S1NBOVBpQjdYRzRnSUNBZ2RHVnpkRVZzWlcxbGJuUWdQU0IwWlhOMFJXeGxiV1Z1ZENCOGZDQmtiMk4xYldWdWRDNWpjbVZoZEdWRmJHVnRaVzUwS0Nka2FYWW5LVHRjYmx4dUlDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnYm5WdFVISmxabWw0WlhNN0lHa3JLeWtnZTF4dUlDQWdJQ0FnSUNCamIyNXpkQ0J3Y21WbWFYZ2dQU0J3Y21WbWFYaGxjMXRwWFR0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnYm05UWNtVm1hWGdnUFNBb2NISmxabWw0SUQwOVBTQW5KeWs3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJSEJ5WldacGVHVmtVSEp2Y0dWeWRIbE9ZVzFsSUQwZ2JtOVFjbVZtYVhnZ1B5QnJaWGtnT2lCd2NtVm1hWGdnS3lCclpYa3VZMmhoY2tGMEtEQXBMblJ2VlhCd1pYSkRZWE5sS0NrZ0t5QnJaWGt1YzJ4cFkyVW9NU2s3WEc1Y2JpQWdJQ0FnSUNBZ2FXWWdLSEJ5WldacGVHVmtVSEp2Y0dWeWRIbE9ZVzFsSUdsdUlIUmxjM1JGYkdWdFpXNTBMbk4wZVd4bEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCallXMWxiRU5oWTJobFcydGxlVjBnUFNCd2NtVm1hWGhsWkZCeWIzQmxjblI1VG1GdFpUdGNiaUFnSUNBZ0lDQWdJQ0FnSUdSaGMyaERZV05vWlZ0clpYbGRJRDBnWUNSN0tHNXZVSEpsWm1sNElEOGdKeWNnT2lBbkxTY3BmU1I3WTJGdFpXeFViMFJoYzJnb2NISmxabWw0WldSUWNtOXdaWEowZVU1aGJXVXBmV0E3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1OU8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQW9hMlY1TENCaGMwUmhjMmhEWVhObEtTQTlQaUI3WEc0Z0lDQWdZMjl1YzNRZ1kyRmphR1VnUFNCaGMwUmhjMmhEWVhObElEOGdaR0Z6YUVOaFkyaGxJRG9nWTJGdFpXeERZV05vWlR0Y2JseHVJQ0FnSUdsbUlDZ2hZMkZqYUdWYmEyVjVYU2tnZTF4dUlDQWdJQ0FnSUNCMFpYTjBVSEpsWm1sNEtHdGxlU2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjbVYwZFhKdUlHTmhZMmhsVzJ0bGVWMDdYRzU5TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FkYXB0ZXIvY3NzL3ByZWZpeGVyLmpzXG4gKiogbW9kdWxlIGlkID0gNDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9kaWN0aW9uYXJ5ID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvc2V0dGluZ3MvZGljdGlvbmFyeScpO1xuXG52YXIgdHJhbnNmb3JtUHJvcHMgPSB7fTtcblxudmFyIFNDQUxFID0gJ3NjYWxlJztcbnZhciBST1RBVEUgPSAncm90YXRlJztcbnZhciBUUkFOU0ZPUk1fUEVSU1BFQ1RJVkUgPSAndHJhbnNmb3JtUGVyc3BlY3RpdmUnO1xudmFyIFRFUk1TID0gWyd0cmFuc2xhdGUnLCBTQ0FMRSwgUk9UQVRFLCAnc2tldycsIFRSQU5TRk9STV9QRVJTUEVDVElWRV07XG5cbnRyYW5zZm9ybVByb3BzW1JPVEFURV0gPSB0cmFuc2Zvcm1Qcm9wc1tTQ0FMRV0gPSB0cmFuc2Zvcm1Qcm9wc1tUUkFOU0ZPUk1fUEVSU1BFQ1RJVkVdID0gdHJ1ZTtcblxuVEVSTVMuZm9yRWFjaChmdW5jdGlvbiAodGVybSkge1xuICByZXR1cm4gX2RpY3Rpb25hcnkuYXhlcy5mb3JFYWNoKGZ1bmN0aW9uIChheGlzKSB7XG4gICAgcmV0dXJuIHRyYW5zZm9ybVByb3BzW3Rlcm0gKyBheGlzXSA9IHRydWU7XG4gIH0pO1xufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHRyYW5zZm9ybVByb3BzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMMk56Y3k5MGNtRnVjMlp2Y20wdGNISnZjSE11YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dEJRVUZCT3p0QlFVVkJMRWxCUVVrc2FVSkJRV2xDTEVWQlFXcENPenRCUVVWS0xFbEJRVTBzVVVGQlVTeFBRVUZTTzBGQlEwNHNTVUZCVFN4VFFVRlRMRkZCUVZRN1FVRkRUaXhKUVVGTkxIZENRVUYzUWl4elFrRkJlRUk3UVVGRFRpeEpRVUZOTEZGQlFWRXNRMEZCUXl4WFFVRkVMRVZCUVdNc1MwRkJaQ3hGUVVGeFFpeE5RVUZ5UWl4RlFVRTJRaXhOUVVFM1FpeEZRVUZ4UXl4eFFrRkJja01zUTBGQlVqczdRVUZGVGl4bFFVRmxMRTFCUVdZc1NVRkJlVUlzWlVGQlpTeExRVUZtTEVsQlFYZENMR1ZCUVdVc2NVSkJRV1lzU1VGQmQwTXNTVUZCZUVNN08wRkJSV3BFTEUxQlFVMHNUMEZCVGl4RFFVRmpMRlZCUVVNc1NVRkJSRHRUUVVGVkxHbENRVUZMTEU5QlFVd3NRMEZCWVN4VlFVRkRMRWxCUVVRN1YwRkJWU3hsUVVGbExFOUJRVThzU1VGQlVDeERRVUZtTEVkQlFUaENMRWxCUVRsQ08wZEJRVlk3UTBGQmRrSXNRMEZCWkRzN2EwSkJSV1VpTENKbWFXeGxJam9pZEhKaGJuTm1iM0p0TFhCeWIzQnpMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwTDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3SUdGNFpYTWdmU0JtY205dElDY3VMaTh1TGk5MllXeDFaUzEwZVhCbGN5OXpaWFIwYVc1bmN5OWthV04wYVc5dVlYSjVKenRjYmx4dWJHVjBJSFJ5WVc1elptOXliVkJ5YjNCeklEMGdlMzA3WEc1Y2JtTnZibk4wSUZORFFVeEZJRDBnSjNOallXeGxKenRjYm1OdmJuTjBJRkpQVkVGVVJTQTlJQ2R5YjNSaGRHVW5PMXh1WTI5dWMzUWdWRkpCVGxOR1QxSk5YMUJGVWxOUVJVTlVTVlpGSUQwZ0ozUnlZVzV6Wm05eWJWQmxjbk53WldOMGFYWmxKenRjYm1OdmJuTjBJRlJGVWsxVElEMGdXeWQwY21GdWMyeGhkR1VuTENCVFEwRk1SU3dnVWs5VVFWUkZMQ0FuYzJ0bGR5Y3NJRlJTUVU1VFJrOVNUVjlRUlZKVFVFVkRWRWxXUlYwN1hHNWNiblJ5WVc1elptOXliVkJ5YjNCelcxSlBWRUZVUlYwZ1BTQjBjbUZ1YzJadmNtMVFjbTl3YzF0VFEwRk1SVjBnUFNCMGNtRnVjMlp2Y20xUWNtOXdjMXRVVWtGT1UwWlBVazFmVUVWU1UxQkZRMVJKVmtWZElEMGdkSEoxWlR0Y2JseHVWRVZTVFZNdVptOXlSV0ZqYUNnb2RHVnliU2tnUFQ0Z1lYaGxjeTVtYjNKRllXTm9LQ2hoZUdsektTQTlQaUIwY21GdWMyWnZjbTFRY205d2MxdDBaWEp0SUNzZ1lYaHBjMTBnUFNCMGNuVmxLU2s3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUhSeVlXNXpabTl5YlZCeWIzQnpPeUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9jc3MvdHJhbnNmb3JtLXByb3BzLmpzXG4gKiogbW9kdWxlIGlkID0gNDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9hbHBoYSA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL2FscGhhJyk7XG5cbnZhciBfYWxwaGEyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWxwaGEpO1xuXG52YXIgX2NvbG9yID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvY29sb3InKTtcblxudmFyIF9jb2xvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb2xvcik7XG5cbnZhciBfY29tcGxleCA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL2NvbXBsZXgnKTtcblxudmFyIF9jb21wbGV4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbXBsZXgpO1xuXG52YXIgX3NjYWxlID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvc2NhbGUnKTtcblxudmFyIF9zY2FsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zY2FsZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBmaWxsOiBfY29sb3IyLmRlZmF1bHQsXG4gICAgc3Ryb2tlOiBfY29sb3IyLmRlZmF1bHQsXG4gICAgc2NhbGU6IF9zY2FsZTIuZGVmYXVsdCxcbiAgICBzY2FsZVg6IF9zY2FsZTIuZGVmYXVsdCxcbiAgICBzY2FsZVk6IF9zY2FsZTIuZGVmYXVsdCxcbiAgICBkOiBfY29tcGxleDIuZGVmYXVsdCxcbiAgICBwb2ludHM6IF9jb21wbGV4Mi5kZWZhdWx0LFxuICAgIG9wYWNpdHk6IF9hbHBoYTIuZGVmYXVsdCxcbiAgICBmaWxsT3BhY2l0eTogX2FscGhhMi5kZWZhdWx0LFxuICAgIHN0cm9rZU9wYWNpdHk6IF9hbHBoYTIuZGVmYXVsdFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFpHRndkR1Z5TDNOMlp5OTJZV3gxWlMxMGVYQmxMVzFoY0M1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPMEZCUVVFN096czdRVUZEUVRzN096dEJRVU5CT3pzN08wRkJRMEU3T3pzN096dHJRa0ZGWlR0QlFVTllMSGxDUVVSWE8wRkJSVmdzTWtKQlJsYzdRVUZIV0N3d1FrRklWenRCUVVsWUxESkNRVXBYTzBGQlMxZ3NNa0pCVEZjN1FVRk5XQ3gzUWtGT1Z6dEJRVTlZTERaQ1FWQlhPMEZCVVZnc05FSkJVbGM3UVVGVFdDeG5RMEZVVnp0QlFWVllMR3REUVZaWElpd2labWxzWlNJNkluWmhiSFZsTFhSNWNHVXRiV0Z3TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMEwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCaGJIQm9ZU0JtY205dElDY3VMaTh1TGk5MllXeDFaUzEwZVhCbGN5OWhiSEJvWVNjN1hHNXBiWEJ2Y25RZ1kyOXNiM0lnWm5KdmJTQW5MaTR2TGk0dmRtRnNkV1V0ZEhsd1pYTXZZMjlzYjNJbk8xeHVhVzF3YjNKMElHTnZiWEJzWlhnZ1puSnZiU0FuTGk0dkxpNHZkbUZzZFdVdGRIbHdaWE12WTI5dGNHeGxlQ2M3WEc1cGJYQnZjblFnYzJOaGJHVWdabkp2YlNBbkxpNHZMaTR2ZG1Gc2RXVXRkSGx3WlhNdmMyTmhiR1VuTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCN1hHNGdJQ0FnWm1sc2JEb2dZMjlzYjNJc1hHNGdJQ0FnYzNSeWIydGxPaUJqYjJ4dmNpeGNiaUFnSUNCelkyRnNaVG9nYzJOaGJHVXNYRzRnSUNBZ2MyTmhiR1ZZT2lCelkyRnNaU3hjYmlBZ0lDQnpZMkZzWlZrNklITmpZV3hsTEZ4dUlDQWdJR1E2SUdOdmJYQnNaWGdzWEc0Z0lDQWdjRzlwYm5Sek9pQmpiMjF3YkdWNExGeHVJQ0FnSUc5d1lXTnBkSGs2SUdGc2NHaGhMRnh1SUNBZ0lHWnBiR3hQY0dGamFYUjVPaUJoYkhCb1lTeGNiaUFnSUNCemRISnZhMlZQY0dGamFYUjVPaUJoYkhCb1lWeHVmVHNpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9zdmcvdmFsdWUtdHlwZS1tYXAuanNcbiAqKiBtb2R1bGUgaWQgPSA0NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gYnVpbGQ7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi8uLi9pbmMvdXRpbHMnKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wcyA9IHJlcXVpcmUoJy4uL2Nzcy90cmFuc2Zvcm0tcHJvcHMnKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2Zvcm1Qcm9wcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBaRVJPX05PVF9aRVJPID0gMC4wMDAxO1xuXG5mdW5jdGlvbiBidWlsZChzdGF0ZSwgZGF0YSkge1xuICAgIHZhciBoYXNUcmFuc2Zvcm0gPSBmYWxzZTtcbiAgICB2YXIgcHJvcHMgPSB7fTtcbiAgICB2YXIgc2NhbGUgPSBzdGF0ZS5zY2FsZSAhPT0gdW5kZWZpbmVkID8gc3RhdGUuc2NhbGUgfHwgWkVST19OT1RfWkVSTyA6IHN0YXRlLnNjYWxlWCB8fCAxO1xuICAgIHZhciBzY2FsZVkgPSBzdGF0ZS5zY2FsZVkgIT09IHVuZGVmaW5lZCA/IHN0YXRlLnNjYWxlWSB8fCBaRVJPX05PVF9aRVJPIDogc2NhbGUgfHwgMTtcbiAgICB2YXIgdHJhbnNmb3JtT3JpZ2luWCA9IGRhdGEud2lkdGggKiAoKHN0YXRlLm9yaWdpblggfHwgNTApIC8gMTAwKSArIGRhdGEueDtcbiAgICB2YXIgdHJhbnNmb3JtT3JpZ2luWSA9IGRhdGEuaGVpZ2h0ICogKChzdGF0ZS5vcmlnaW5ZIHx8IDUwKSAvIDEwMCkgKyBkYXRhLnk7XG4gICAgdmFyIHNjYWxlVHJhbnNmb3JtWCA9IC10cmFuc2Zvcm1PcmlnaW5YICogKHNjYWxlICogMSk7XG4gICAgdmFyIHNjYWxlVHJhbnNmb3JtWSA9IC10cmFuc2Zvcm1PcmlnaW5ZICogKHNjYWxlWSAqIDEpO1xuICAgIHZhciBzY2FsZVJlcGxhY2VYID0gdHJhbnNmb3JtT3JpZ2luWCAvIHNjYWxlO1xuICAgIHZhciBzY2FsZVJlcGxhY2VZID0gdHJhbnNmb3JtT3JpZ2luWSAvIHNjYWxlWTtcbiAgICB2YXIgdHJhbnNmb3JtID0ge1xuICAgICAgICB0cmFuc2xhdGU6ICd0cmFuc2xhdGUoJyArIHN0YXRlLnRyYW5zbGF0ZVggKyAnLCAnICsgc3RhdGUudHJhbnNsYXRlWSArICcpICcsXG4gICAgICAgIHNjYWxlOiAndHJhbnNsYXRlKCcgKyBzY2FsZVRyYW5zZm9ybVggKyAnLCAnICsgc2NhbGVUcmFuc2Zvcm1ZICsgJykgc2NhbGUoJyArIHNjYWxlICsgJywgJyArIHNjYWxlWSArICcpIHRyYW5zbGF0ZSgnICsgc2NhbGVSZXBsYWNlWCArICcsICcgKyBzY2FsZVJlcGxhY2VZICsgJykgJyxcbiAgICAgICAgcm90YXRlOiAncm90YXRlKCcgKyBzdGF0ZS5yb3RhdGUgKyAnLCAnICsgdHJhbnNmb3JtT3JpZ2luWCArICcsICcgKyB0cmFuc2Zvcm1PcmlnaW5ZICsgJykgJyxcbiAgICAgICAgc2tld1g6ICdza2V3WCgnICsgc3RhdGUuc2tld1ggKyAnKSAnLFxuICAgICAgICBza2V3WTogJ3NrZXdZKCcgKyBzdGF0ZS5za2V3WSArICcpICdcbiAgICB9O1xuXG4gICAgZm9yICh2YXIga2V5IGluIHN0YXRlKSB7XG4gICAgICAgIGlmIChzdGF0ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICBpZiAoX3RyYW5zZm9ybVByb3BzMi5kZWZhdWx0W2tleV0pIHtcbiAgICAgICAgICAgICAgICBoYXNUcmFuc2Zvcm0gPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcm9wc1soMCwgX3V0aWxzLmNhbWVsVG9EYXNoKShrZXkpXSA9IHN0YXRlW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaGFzVHJhbnNmb3JtKSB7XG4gICAgICAgIHByb3BzLnRyYW5zZm9ybSA9ICcnO1xuXG4gICAgICAgIGZvciAodmFyIF9rZXkgaW4gdHJhbnNmb3JtKSB7XG4gICAgICAgICAgICBpZiAodHJhbnNmb3JtLmhhc093blByb3BlcnR5KF9rZXkpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRlZmF1bHRWYWx1ZSA9IF9rZXkgPT09ICdzY2FsZScgPyAnMScgOiAnMCc7XG4gICAgICAgICAgICAgICAgcHJvcHMudHJhbnNmb3JtICs9IHRyYW5zZm9ybVtfa2V5XS5yZXBsYWNlKC91bmRlZmluZWQvZywgZGVmYXVsdFZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwcm9wcztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFpHRndkR1Z5TDNOMlp5OWlkV2xzWkM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdhMEpCUzNkQ096dEJRVXg0UWpzN1FVRkRRVHM3T3pzN08wRkJSVUVzU1VGQlRTeG5Ra0ZCWjBJc1RVRkJhRUk3TzBGQlJWTXNVMEZCVXl4TFFVRlVMRU5CUVdVc1MwRkJaaXhGUVVGelFpeEpRVUYwUWl4RlFVRTBRanRCUVVOMlF5eFJRVUZKTEdWQlFXVXNTMEZCWml4RFFVUnRRenRCUVVWMlF5eFJRVUZOTEZGQlFWRXNSVUZCVWl4RFFVWnBRenRCUVVkMlF5eFJRVUZOTEZGQlFWRXNUVUZCVFN4TFFVRk9MRXRCUVdkQ0xGTkJRV2hDTEVkQlFUUkNMRTFCUVUwc1MwRkJUaXhKUVVGbExHRkJRV1lzUjBGQkswSXNUVUZCVFN4TlFVRk9MRWxCUVdkQ0xFTkJRV2hDTEVOQlNHeERPMEZCU1haRExGRkJRVTBzVTBGQlV5eE5RVUZOTEUxQlFVNHNTMEZCYVVJc1UwRkJha0lzUjBGQk5rSXNUVUZCVFN4TlFVRk9MRWxCUVdkQ0xHRkJRV2hDTEVkQlFXZERMRk5CUVZNc1EwRkJWQ3hEUVVweVF6dEJRVXQyUXl4UlFVRk5MRzFDUVVGdFFpeExRVUZMTEV0QlFVd3NTVUZCWXl4RFFVRkRMRTFCUVUwc1QwRkJUaXhKUVVGcFFpeEZRVUZxUWl4RFFVRkVMRWRCUVhkQ0xFZEJRWGhDTEVOQlFXUXNSMEZCTmtNc1MwRkJTeXhEUVVGTUxFTkJUQzlDTzBGQlRYWkRMRkZCUVUwc2JVSkJRVzFDTEV0QlFVc3NUVUZCVEN4SlFVRmxMRU5CUVVNc1RVRkJUU3hQUVVGT0xFbEJRV2xDTEVWQlFXcENMRU5CUVVRc1IwRkJkMElzUjBGQmVFSXNRMEZCWml4SFFVRTRReXhMUVVGTExFTkJRVXdzUTBGT2FFTTdRVUZQZGtNc1VVRkJUU3hyUWtGQmEwSXNRMEZCUlN4blFrRkJSaXhKUVVGelFpeFJRVUZSTEVOQlFWSXNRMEZCZEVJc1EwRlFaVHRCUVZGMlF5eFJRVUZOTEd0Q1FVRnJRaXhEUVVGRkxHZENRVUZHTEVsQlFYTkNMRk5CUVZNc1EwRkJWQ3hEUVVGMFFpeERRVkpsTzBGQlUzWkRMRkZCUVUwc1owSkJRV2RDTEcxQ1FVRnRRaXhMUVVGdVFpeERRVlJwUWp0QlFWVjJReXhSUVVGTkxHZENRVUZuUWl4dFFrRkJiVUlzVFVGQmJrSXNRMEZXYVVJN1FVRlhka01zVVVGQlRTeFpRVUZaTzBGQlEyUXNhME5CUVhkQ0xFMUJRVTBzVlVGQlRpeFZRVUZ4UWl4TlFVRk5MRlZCUVU0c1QwRkJOME03UVVGRFFTdzRRa0ZCYjBJc2VVSkJRVzlDTEN0Q1FVRXdRaXhsUVVGVkxEQkNRVUZ4UWl4MVFrRkJhMElzYjBKQlFXNUlPMEZCUTBFc05FSkJRV3RDTEUxQlFVMHNUVUZCVGl4VlFVRnBRaXd3UWtGQmNVSXNkVUpCUVhoRU8wRkJRMEVzTUVKQlFXZENMRTFCUVUwc1MwRkJUaXhQUVVGb1FqdEJRVU5CTERCQ1FVRm5RaXhOUVVGTkxFdEJRVTRzVDBGQmFFSTdTMEZNUlN4RFFWaHBRenM3UVVGdFFuWkRMRk5CUVVzc1NVRkJTU3hIUVVGS0xFbEJRVmNzUzBGQmFFSXNSVUZCZFVJN1FVRkRia0lzV1VGQlNTeE5RVUZOTEdOQlFVNHNRMEZCY1VJc1IwRkJja0lzUTBGQlNpeEZRVUVyUWp0QlFVTXpRaXhuUWtGQlNTeDVRa0ZCWlN4SFFVRm1MRU5CUVVvc1JVRkJlVUk3UVVGRGNrSXNLMEpCUVdVc1NVRkJaaXhEUVVSeFFqdGhRVUY2UWl4TlFVVlBPMEZCUTBnc2MwSkJRVTBzZDBKQlFWa3NSMEZCV2l4RFFVRk9MRWxCUVRCQ0xFMUJRVTBzUjBGQlRpeERRVUV4UWl4RFFVUkhPMkZCUmxBN1UwRkVTanRMUVVSS096dEJRVlZCTEZGQlFVa3NXVUZCU2l4RlFVRnJRanRCUVVOa0xHTkJRVTBzVTBGQlRpeEhRVUZyUWl4RlFVRnNRaXhEUVVSak96dEJRVWRrTEdGQlFVc3NTVUZCU1N4SlFVRktMRWxCUVZjc1UwRkJhRUlzUlVGQk1rSTdRVUZEZGtJc1owSkJRVWtzVlVGQlZTeGpRVUZXTEVOQlFYbENMRWxCUVhwQ0xFTkJRVW9zUlVGQmJVTTdRVUZETDBJc2IwSkJRVTBzWlVGQlpTeEpRVUZETEV0QlFWRXNUMEZCVWl4SFFVRnRRaXhIUVVGd1FpeEhRVUV3UWl4SFFVRXhRaXhEUVVSVk8wRkJSUzlDTEhOQ1FVRk5MRk5CUVU0c1NVRkJiVUlzVlVGQlZTeEpRVUZXTEVWQlFXVXNUMEZCWml4RFFVRjFRaXhaUVVGMlFpeEZRVUZ4UXl4WlFVRnlReXhEUVVGdVFpeERRVVlyUWp0aFFVRnVRenRUUVVSS08wdEJTRW83TzBGQlYwRXNWMEZCVHl4TFFVRlFMRU5CZUVOMVF6dERRVUUxUWlJc0ltWnBiR1VpT2lKaWRXbHNaQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZXlCallXMWxiRlJ2UkdGemFDQjlJR1p5YjIwZ0p5NHVMeTR1TDJsdVl5OTFkR2xzY3ljN1hHNXBiWEJ2Y25RZ2RISmhibk5tYjNKdFVISnZjSE1nWm5KdmJTQW5MaTR2WTNOekwzUnlZVzV6Wm05eWJTMXdjbTl3Y3ljN1hHNWNibU52Ym5OMElGcEZVazlmVGs5VVgxcEZVazhnUFNBd0xqQXdNREU3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdaMWJtTjBhVzl1SUdKMWFXeGtLSE4wWVhSbExDQmtZWFJoS1NCN1hHNGdJQ0FnYkdWMElHaGhjMVJ5WVc1elptOXliU0E5SUdaaGJITmxPMXh1SUNBZ0lHTnZibk4wSUhCeWIzQnpJRDBnZTMwN1hHNGdJQ0FnWTI5dWMzUWdjMk5oYkdVZ1BTQnpkR0YwWlM1elkyRnNaU0FoUFQwZ2RXNWtaV1pwYm1Wa0lEOGdjM1JoZEdVdWMyTmhiR1VnZkh3Z1drVlNUMTlPVDFSZldrVlNUeUE2SUhOMFlYUmxMbk5qWVd4bFdDQjhmQ0F4TzF4dUlDQWdJR052Ym5OMElITmpZV3hsV1NBOUlITjBZWFJsTG5OallXeGxXU0FoUFQwZ2RXNWtaV1pwYm1Wa0lEOGdjM1JoZEdVdWMyTmhiR1ZaSUh4OElGcEZVazlmVGs5VVgxcEZVazhnT2lCelkyRnNaU0I4ZkNBeE8xeHVJQ0FnSUdOdmJuTjBJSFJ5WVc1elptOXliVTl5YVdkcGJsZ2dQU0JrWVhSaExuZHBaSFJvSUNvZ0tDaHpkR0YwWlM1dmNtbG5hVzVZSUh4OElEVXdLU0F2SURFd01Da2dLeUJrWVhSaExuZzdYRzRnSUNBZ1kyOXVjM1FnZEhKaGJuTm1iM0p0VDNKcFoybHVXU0E5SUdSaGRHRXVhR1ZwWjJoMElDb2dLQ2h6ZEdGMFpTNXZjbWxuYVc1WklIeDhJRFV3S1NBdklERXdNQ2tnS3lCa1lYUmhMbms3WEc0Z0lDQWdZMjl1YzNRZ2MyTmhiR1ZVY21GdWMyWnZjbTFZSUQwZ0xTQjBjbUZ1YzJadmNtMVBjbWxuYVc1WUlDb2dLSE5qWVd4bElDb2dNU2s3WEc0Z0lDQWdZMjl1YzNRZ2MyTmhiR1ZVY21GdWMyWnZjbTFaSUQwZ0xTQjBjbUZ1YzJadmNtMVBjbWxuYVc1WklDb2dLSE5qWVd4bFdTQXFJREVwTzF4dUlDQWdJR052Ym5OMElITmpZV3hsVW1Wd2JHRmpaVmdnUFNCMGNtRnVjMlp2Y20xUGNtbG5hVzVZSUM4Z2MyTmhiR1U3WEc0Z0lDQWdZMjl1YzNRZ2MyTmhiR1ZTWlhCc1lXTmxXU0E5SUhSeVlXNXpabTl5YlU5eWFXZHBibGtnTHlCelkyRnNaVms3WEc0Z0lDQWdZMjl1YzNRZ2RISmhibk5tYjNKdElEMGdlMXh1SUNBZ0lDQWdJQ0IwY21GdWMyeGhkR1U2SUdCMGNtRnVjMnhoZEdVb0pIdHpkR0YwWlM1MGNtRnVjMnhoZEdWWWZTd2dKSHR6ZEdGMFpTNTBjbUZ1YzJ4aGRHVlpmU2tnWUN4Y2JpQWdJQ0FnSUNBZ2MyTmhiR1U2SUdCMGNtRnVjMnhoZEdVb0pIdHpZMkZzWlZSeVlXNXpabTl5YlZoOUxDQWtlM05qWVd4bFZISmhibk5tYjNKdFdYMHBJSE5qWVd4bEtDUjdjMk5oYkdWOUxDQWtlM05qWVd4bFdYMHBJSFJ5WVc1emJHRjBaU2drZTNOallXeGxVbVZ3YkdGalpWaDlMQ0FrZTNOallXeGxVbVZ3YkdGalpWbDlLU0JnTEZ4dUlDQWdJQ0FnSUNCeWIzUmhkR1U2SUdCeWIzUmhkR1VvSkh0emRHRjBaUzV5YjNSaGRHVjlMQ0FrZTNSeVlXNXpabTl5YlU5eWFXZHBibGg5TENBa2UzUnlZVzV6Wm05eWJVOXlhV2RwYmxsOUtTQmdMRnh1SUNBZ0lDQWdJQ0J6YTJWM1dEb2dZSE5yWlhkWUtDUjdjM1JoZEdVdWMydGxkMWg5S1NCZ0xGeHVJQ0FnSUNBZ0lDQnphMlYzV1RvZ1lITnJaWGRaS0NSN2MzUmhkR1V1YzJ0bGQxbDlLU0JnWEc0Z0lDQWdmVHRjYmx4dUlDQWdJR1p2Y2lBb2JHVjBJR3RsZVNCcGJpQnpkR0YwWlNrZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvYzNSaGRHVXVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2EyVjVLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0hSeVlXNXpabTl5YlZCeWIzQnpXMnRsZVYwcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQm9ZWE5VY21GdWMyWnZjbTBnUFNCMGNuVmxPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCd2NtOXdjMXRqWVcxbGJGUnZSR0Z6YUNoclpYa3BYU0E5SUhOMFlYUmxXMnRsZVYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0JwWmlBb2FHRnpWSEpoYm5ObWIzSnRLU0I3WEc0Z0lDQWdJQ0FnSUhCeWIzQnpMblJ5WVc1elptOXliU0E5SUNjbk8xeHVYRzRnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR3RsZVNCcGJpQjBjbUZ1YzJadmNtMHBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2gwY21GdWMyWnZjbTB1YUdGelQzZHVVSEp2Y0dWeWRIa29hMlY1S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUdSbFptRjFiSFJXWVd4MVpTQTlJQ2hyWlhrZ1BUMDlJQ2R6WTJGc1pTY3BJRDhnSnpFbklEb2dKekFuTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhCeWIzQnpMblJ5WVc1elptOXliU0FyUFNCMGNtRnVjMlp2Y20xYmEyVjVYUzV5WlhCc1lXTmxLQzkxYm1SbFptbHVaV1F2Wnl3Z1pHVm1ZWFZzZEZaaGJIVmxLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lISmxkSFZ5YmlCd2NtOXdjenRjYm4waVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FkYXB0ZXIvc3ZnL2J1aWxkLmpzXG4gKiogbW9kdWxlIGlkID0gNDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8qXG4gICAgQ29udmVydCBwZXJjZW50YWdlIHRvIHBpeGVsc1xuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogUGVyY2VudGFnZSBvZiB0b3RhbCBsZW5ndGhcbiAgICBAcGFyYW0gW251bWJlcl06IFRvdGFsIGxlbmd0aFxuKi9cbnZhciBwZXJjZW50VG9QaXhlbHMgPSBmdW5jdGlvbiAocGVyY2VudCwgbGVuZ3RoKSB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQocGVyY2VudCkgLyAxMDAgKiBsZW5ndGggKyAncHgnO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHN0YXRlLCBsZW5ndGgpIHtcbiAgICB2YXIgc3R5bGVzID0ge307XG4gICAgdmFyIGRhc2hBcnJheVN0eWxlcyA9IHtcbiAgICAgICAgbGVuZ3RoOiAwLFxuICAgICAgICBzcGFjaW5nOiBsZW5ndGggKyAncHgnXG4gICAgfTtcbiAgICB2YXIgaGFzRGFzaEFycmF5ID0gZmFsc2U7XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc3RhdGUpIHtcbiAgICAgICAgaWYgKHN0YXRlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHN0YXRlW2tleV07XG5cbiAgICAgICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnbGVuZ3RoJzpcbiAgICAgICAgICAgICAgICBjYXNlICdzcGFjaW5nJzpcbiAgICAgICAgICAgICAgICAgICAgaGFzRGFzaEFycmF5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgZGFzaEFycmF5U3R5bGVzW2tleV0gPSBwZXJjZW50VG9QaXhlbHModmFsdWUsIGxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ29mZnNldCc6XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlc1snc3Ryb2tlLWRhc2hvZmZzZXQnXSA9IHBlcmNlbnRUb1BpeGVscygtdmFsdWUsIGxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlc1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaGFzRGFzaEFycmF5KSB7XG4gICAgICAgIHN0eWxlc1snc3Ryb2tlLWRhc2hhcnJheSddID0gZGFzaEFycmF5U3R5bGVzLmxlbmd0aCArICcgJyArIGRhc2hBcnJheVN0eWxlcy5zcGFjaW5nO1xuICAgIH1cblxuICAgIHJldHVybiBzdHlsZXM7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMM04yWnkxd1lYUm9MMkoxYVd4a0xtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN096dEJRVTFCTEVsQlFVMHNhMEpCUVd0Q0xGVkJRVU1zVDBGQlJDeEZRVUZWTEUxQlFWWTdWMEZCY1VJc1ZVRkJReXhEUVVGWExFOUJRVmdzU1VGQmMwSXNSMEZCZEVJc1IwRkJOa0lzVFVGQk9VSXNSMEZCZFVNc1NVRkJka003UTBGQmNrSTdPMnRDUVVWVUxGVkJRVU1zUzBGQlJDeEZRVUZSTEUxQlFWSXNSVUZCYlVJN1FVRkRPVUlzVVVGQlRTeFRRVUZUTEVWQlFWUXNRMEZFZDBJN1FVRkZPVUlzVVVGQlRTeHJRa0ZCYTBJN1FVRkRjRUlzWjBKQlFWRXNRMEZCVWp0QlFVTkJMR2xDUVVGVExGTkJRVk1zU1VGQlZEdExRVVpRTEVOQlJuZENPMEZCVFRsQ0xGRkJRVWtzWlVGQlpTeExRVUZtTEVOQlRqQkNPenRCUVZFNVFpeFRRVUZMTEVsQlFVa3NSMEZCU2l4SlFVRlhMRXRCUVdoQ0xFVkJRWFZDTzBGQlEyNUNMRmxCUVVrc1RVRkJUU3hqUVVGT0xFTkJRWEZDTEVkQlFYSkNMRU5CUVVvc1JVRkJLMEk3UVVGRE0wSXNaMEpCUVUwc1VVRkJVU3hOUVVGTkxFZEJRVTRzUTBGQlVpeERRVVJ4UWpzN1FVRkhNMElzYjBKQlFWRXNSMEZCVWp0QlFVTkJMSEZDUVVGTExGRkJRVXdzUTBGRVFUdEJRVVZCTEhGQ1FVRkxMRk5CUVV3N1FVRkRTU3h0UTBGQlpTeEpRVUZtTEVOQlJFbzdRVUZGU1N4dlEwRkJaMElzUjBGQmFFSXNTVUZCZFVJc1owSkJRV2RDTEV0QlFXaENMRVZCUVhWQ0xFMUJRWFpDTEVOQlFYWkNMRU5CUmtvN1FVRkhTU3d3UWtGSVNqdEJRVVpCTEhGQ1FVMUxMRkZCUVV3N1FVRkRTU3d5UWtGQlR5eHRRa0ZCVUN4SlFVRTRRaXhuUWtGQlowSXNRMEZCUXl4TFFVRkVMRVZCUVZFc1RVRkJlRUlzUTBGQk9VSXNRMEZFU2p0QlFVVkpMREJDUVVaS08wRkJUa0U3UVVGVlNTd3lRa0ZCVHl4SFFVRlFMRWxCUVdNc1MwRkJaQ3hEUVVSS08wRkJWRUVzWVVGSU1rSTdVMEZCTDBJN1MwRkVTanM3UVVGdFFrRXNVVUZCU1N4WlFVRktMRVZCUVd0Q08wRkJRMlFzWlVGQlR5eHJRa0ZCVUN4SlFVRTJRaXhuUWtGQlowSXNUVUZCYUVJc1IwRkJlVUlzUjBGQmVrSXNSMEZCSzBJc1owSkJRV2RDTEU5QlFXaENMRU5CUkRsRE8wdEJRV3hDT3p0QlFVbEJMRmRCUVU4c1RVRkJVQ3hEUVM5Q09FSTdRMEZCYmtJaUxDSm1hV3hsSWpvaVluVnBiR1F1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUx5cGNiaUFnSUNCRGIyNTJaWEowSUhCbGNtTmxiblJoWjJVZ2RHOGdjR2w0Wld4elhHNGdJQ0FnWEc0Z0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQlFaWEpqWlc1MFlXZGxJRzltSUhSdmRHRnNJR3hsYm1kMGFGeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVkc5MFlXd2diR1Z1WjNSb1hHNHFMMXh1WTI5dWMzUWdjR1Z5WTJWdWRGUnZVR2w0Wld4eklEMGdLSEJsY21ObGJuUXNJR3hsYm1kMGFDa2dQVDRnS0hCaGNuTmxSbXh2WVhRb2NHVnlZMlZ1ZENrZ0x5QXhNREFwSUNvZ2JHVnVaM1JvSUNzZ0ozQjRKenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnS0hOMFlYUmxMQ0JzWlc1bmRHZ3BJRDArSUh0Y2JpQWdJQ0JqYjI1emRDQnpkSGxzWlhNZ1BTQjdmVHRjYmlBZ0lDQmpiMjV6ZENCa1lYTm9RWEp5WVhsVGRIbHNaWE1nUFNCN1hHNGdJQ0FnSUNBZ0lHeGxibWQwYURvZ01DeGNiaUFnSUNBZ0lDQWdjM0JoWTJsdVp6b2diR1Z1WjNSb0lDc2dKM0I0SjF4dUlDQWdJSDA3WEc0Z0lDQWdiR1YwSUdoaGMwUmhjMmhCY25KaGVTQTlJR1poYkhObE8xeHVYRzRnSUNBZ1ptOXlJQ2hzWlhRZ2EyVjVJR2x1SUhOMFlYUmxLU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDaHpkR0YwWlM1b1lYTlBkMjVRY205d1pYSjBlU2hyWlhrcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0IyWVd4MVpTQTlJSE4wWVhSbFcydGxlVjA3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJSE4zYVhSamFDQW9hMlY1S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqWVhObElDZHNaVzVuZEdnbk9seHVJQ0FnSUNBZ0lDQWdJQ0FnWTJGelpTQW5jM0JoWTJsdVp5YzZYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhR0Z6UkdGemFFRnljbUY1SUQwZ2RISjFaVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JrWVhOb1FYSnlZWGxUZEhsc1pYTmJhMlY1WFNBOUlIQmxjbU5sYm5SVWIxQnBlR1ZzY3loMllXeDFaU3dnYkdWdVozUm9LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JpY21WaGF6dGNiaUFnSUNBZ0lDQWdJQ0FnSUdOaGMyVWdKMjltWm5ObGRDYzZYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjM1I1YkdWeld5ZHpkSEp2YTJVdFpHRnphRzltWm5ObGRDZGRJRDBnY0dWeVkyVnVkRlJ2VUdsNFpXeHpLQzEyWVd4MVpTd2diR1Z1WjNSb0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmljbVZoYXp0Y2JpQWdJQ0FnSUNBZ0lDQWdJR1JsWm1GMWJIUTZYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjM1I1YkdWelcydGxlVjBnUFNCMllXeDFaVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lHbG1JQ2hvWVhORVlYTm9RWEp5WVhrcElIdGNiaUFnSUNBZ0lDQWdjM1I1YkdWeld5ZHpkSEp2YTJVdFpHRnphR0Z5Y21GNUoxMGdQU0JrWVhOb1FYSnlZWGxUZEhsc1pYTXViR1Z1WjNSb0lDc2dKeUFuSUNzZ1pHRnphRUZ5Y21GNVUzUjViR1Z6TG5Od1lXTnBibWM3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjbVYwZFhKdUlITjBlV3hsY3p0Y2JuMDdJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hZGFwdGVyL3N2Zy1wYXRoL2J1aWxkLmpzXG4gKiogbW9kdWxlIGlkID0gNDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciByZ2IgPSBleHBvcnRzLnJnYiA9IHtcbiAgICBtaW46IDAsXG4gICAgbWF4OiAyNTUsXG4gICAgcm91bmQ6IHRydWVcbn07XG5cbnZhciBvcGFjaXR5ID0gZXhwb3J0cy5vcGFjaXR5ID0ge1xuICAgIG1pbjogMCxcbiAgICBtYXg6IDFcbn07XG5cbnZhciBwZXJjZW50ID0gZXhwb3J0cy5wZXJjZW50ID0ge1xuICAgIG1pbjogMCxcbiAgICBtYXg6IDEwMCxcbiAgICB1bml0OiAnJSdcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTl6WlhSMGFXNW5jeTlrWldaaGRXeDBMWEJ5YjNCekxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenRCUVVGUExFbEJRVTBzYjBKQlFVMDdRVUZEWml4VFFVRkxMRU5CUVV3N1FVRkRRU3hUUVVGTExFZEJRVXc3UVVGRFFTeFhRVUZQTEVsQlFWQTdRMEZJVXpzN1FVRk5UaXhKUVVGTkxEUkNRVUZWTzBGQlEyNUNMRk5CUVVzc1EwRkJURHRCUVVOQkxGTkJRVXNzUTBGQlREdERRVVpUT3p0QlFVdE9MRWxCUVUwc05FSkJRVlU3UVVGRGJrSXNVMEZCU3l4RFFVRk1PMEZCUTBFc1UwRkJTeXhIUVVGTU8wRkJRMEVzVlVGQlRTeEhRVUZPTzBOQlNGTWlMQ0ptYVd4bElqb2laR1ZtWVhWc2RDMXdjbTl3Y3k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRDOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SmxlSEJ2Y25RZ1kyOXVjM1FnY21kaUlEMGdlMXh1SUNBZ0lHMXBiam9nTUN4Y2JpQWdJQ0J0WVhnNklESTFOU3hjYmlBZ0lDQnliM1Z1WkRvZ2RISjFaVnh1ZlR0Y2JseHVaWGh3YjNKMElHTnZibk4wSUc5d1lXTnBkSGtnUFNCN1hHNGdJQ0FnYldsdU9pQXdMRnh1SUNBZ0lHMWhlRG9nTVZ4dWZUdGNibHh1Wlhod2IzSjBJR052Ym5OMElIQmxjbU5sYm5RZ1BTQjdYRzRnSUNBZ2JXbHVPaUF3TEZ4dUlDQWdJRzFoZURvZ01UQXdMRnh1SUNBZ0lIVnVhWFE2SUNjbEoxeHVmVHNpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvc2V0dGluZ3MvZGVmYXVsdC1wcm9wcy5qc1xuICoqIG1vZHVsZSBpZCA9IDQ4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgWCA9ICdYJztcbnZhciBZID0gJ1knO1xudmFyIEFMUEhBID0gJ0FscGhhJztcblxudmFyIGF4ZXMgPSBleHBvcnRzLmF4ZXMgPSBbWCwgWSwgJ1onXTtcbnZhciByZ2IgPSBleHBvcnRzLnJnYiA9IFsnUmVkJywgJ0dyZWVuJywgJ0JsdWUnLCBBTFBIQV07XG52YXIgaHNsID0gZXhwb3J0cy5oc2wgPSBbJ0h1ZScsICdTYXR1cmF0aW9uJywgJ0xpZ2h0bmVzcycsIEFMUEhBXTtcbnZhciBwb3NpdGlvbnMgPSBleHBvcnRzLnBvc2l0aW9ucyA9IFsnVG9wJywgJ1JpZ2h0JywgJ0JvdHRvbScsICdMZWZ0J107XG52YXIgc2hhZG93ID0gZXhwb3J0cy5zaGFkb3cgPSBbWCwgWSwgJ1JhZGl1cycsICdTcHJlYWQnLCAnQ29sb3InXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OXpaWFIwYVc1bmN5OWthV04wYVc5dVlYSjVMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3p0QlFVRkJMRWxCUVUwc1NVRkJTU3hIUVVGS08wRkJRMDRzU1VGQlRTeEpRVUZKTEVkQlFVbzdRVUZEVGl4SlFVRk5MRkZCUVZFc1QwRkJVanM3UVVGRlF5eEpRVUZOTEhOQ1FVRlBMRU5CUVVNc1EwRkJSQ3hGUVVGSkxFTkJRVW9zUlVGQlR5eEhRVUZRTEVOQlFWQTdRVUZEVGl4SlFVRk5MRzlDUVVGTkxFTkJRVU1zUzBGQlJDeEZRVUZSTEU5QlFWSXNSVUZCYVVJc1RVRkJha0lzUlVGQmVVSXNTMEZCZWtJc1EwRkJUanRCUVVOT0xFbEJRVTBzYjBKQlFVMHNRMEZCUXl4TFFVRkVMRVZCUVZFc1dVRkJVaXhGUVVGelFpeFhRVUYwUWl4RlFVRnRReXhMUVVGdVF5eERRVUZPTzBGQlEwNHNTVUZCVFN4blEwRkJXU3hEUVVGRExFdEJRVVFzUlVGQlVTeFBRVUZTTEVWQlFXbENMRkZCUVdwQ0xFVkJRVEpDTEUxQlFUTkNMRU5CUVZvN1FVRkRUaXhKUVVGTkxEQkNRVUZUTEVOQlFVTXNRMEZCUkN4RlFVRkpMRU5CUVVvc1JVRkJUeXhSUVVGUUxFVkJRV2xDTEZGQlFXcENMRVZCUVRKQ0xFOUJRVE5DTEVOQlFWUWlMQ0ptYVd4bElqb2laR2xqZEdsdmJtRnllUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKamIyNXpkQ0JZSUQwZ0oxZ25PMXh1WTI5dWMzUWdXU0E5SUNkWkp6dGNibU52Ym5OMElFRk1VRWhCSUQwZ0owRnNjR2hoSnp0Y2JseHVaWGh3YjNKMElHTnZibk4wSUdGNFpYTWdQU0JiV0N3Z1dTd2dKMW9uWFR0Y2JtVjRjRzl5ZENCamIyNXpkQ0J5WjJJZ1BTQmJKMUpsWkNjc0lDZEhjbVZsYmljc0lDZENiSFZsSnl3Z1FVeFFTRUZkTzF4dVpYaHdiM0owSUdOdmJuTjBJR2h6YkNBOUlGc25TSFZsSnl3Z0oxTmhkSFZ5WVhScGIyNG5MQ0FuVEdsbmFIUnVaWE56Snl3Z1FVeFFTRUZkTzF4dVpYaHdiM0owSUdOdmJuTjBJSEJ2YzJsMGFXOXVjeUE5SUZzblZHOXdKeXdnSjFKcFoyaDBKeXdnSjBKdmRIUnZiU2NzSUNkTVpXWjBKMTA3WEc1bGVIQnZjblFnWTI5dWMzUWdjMmhoWkc5M0lEMGdXMWdzSUZrc0lDZFNZV1JwZFhNbkxDQW5VM0J5WldGa0p5d2dKME52Ykc5eUoxMDdJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kaWN0aW9uYXJ5LmpzXG4gKiogbW9kdWxlIGlkID0gNDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlRWFzaW5nRnVuY3Rpb247XG4vKlxuICAgIE1pcnJvciBlYXNpbmdcbiAgICBcbiAgICBNaXJyb3JzIHRoZSBwcm92aWRlZCBlYXNpbmcgZnVuY3Rpb24sIHVzZWQgaGVyZSBmb3IgbWlycm9yaW5nIGFuXG4gICAgZWFzZUluIGludG8gYW4gZWFzZUluT3V0XG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcywgZnJvbSAwIC0gMSwgb2YgY3VycmVudCBzaGlmdFxuICAgIEBwYXJhbSBbZnVuY3Rpb25dOiBUaGUgZWFzaW5nIGZ1bmN0aW9uIHRvIG1pcnJvclxuICAgIEByZXR1cm5zIFtudW1iZXJdOiBUaGUgZWFzaW5nLWFkanVzdGVkIGRlbHRhXG4qL1xudmFyIG1pcnJvckVhc2luZyA9IGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHByb2dyZXNzLCBzdHJlbmd0aCkge1xuICAgICAgICByZXR1cm4gcHJvZ3Jlc3MgPD0gMC41ID8gbWV0aG9kKDIgKiBwcm9ncmVzcywgc3RyZW5ndGgpIC8gMiA6ICgyIC0gbWV0aG9kKDIgKiAoMSAtIHByb2dyZXNzKSwgc3RyZW5ndGgpKSAvIDI7XG4gICAgfTtcbn07XG5cbi8qXG4gICAgUmV2ZXJzZSBlYXNpbmdcbiAgICBcbiAgICBSZXZlcnNlcyB0aGUgb3V0cHV0IG9mIHRoZSBwcm92aWRlZCBlYXNpbmcgZnVuY3Rpb24sIHVzZWQgZm9yIGZsaXBwaW5nIGVhc2VJblxuICAgIGN1cnZlIHRvIGFuIGVhc2VPdXQuXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcywgZnJvbSAwIC0gMSwgb2YgY3VycmVudCBzaGlmdFxuICAgIEBwYXJhbSBbZnVuY3Rpb25dOiBUaGUgZWFzaW5nIGZ1bmN0aW9uIHRvIHJldmVyc2VcbiAgICBAcmV0dXJucyBbbnVtYmVyXTogVGhlIGVhc2luZy1hZGp1c3RlZCBkZWx0YVxuKi9cbnZhciByZXZlcnNlRWFzaW5nID0gZnVuY3Rpb24gKG1ldGhvZCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAocHJvZ3Jlc3MsIHN0cmVuZ3RoKSB7XG4gICAgICAgIHJldHVybiAxIC0gbWV0aG9kKDEgLSBwcm9ncmVzcywgc3RyZW5ndGgpO1xuICAgIH07XG59O1xuXG4vKlxuICAgIEVhc2luZyBjbGFzc1xuXG4gICAgSWYgcHJvdmlkZWQgZWFzaW5nIGZ1bmN0aW9uLCByZXR1cm5zIGVhc2luZyBmdW5jdGlvbiB3aXRoIFxuICAgIGluL291dC9pbk91dCB2YXJpYXRpb25zXG5cbiAgICBJZiBwcm92aWRlZCBmb3VyIGFyZ3VtZW50cywgcmV0dXJucyBuZXcgQmV6aWVyIGNsYXNzIGluc3RlYWQuXG4qL1xuZnVuY3Rpb24gY3JlYXRlRWFzaW5nRnVuY3Rpb24obWV0aG9kKSB7XG4gICAgdmFyIGVhc2luZ0Z1bmN0aW9uID0gZnVuY3Rpb24gKHByb2dyZXNzLCBzdHJlbmd0aCkge1xuICAgICAgICByZXR1cm4gbWV0aG9kKHByb2dyZXNzLCBzdHJlbmd0aCk7XG4gICAgfTtcblxuICAgIGVhc2luZ0Z1bmN0aW9uLmluID0gZnVuY3Rpb24gKHByb2dyZXNzLCBzdHJlbmd0aCkge1xuICAgICAgICByZXR1cm4gbWV0aG9kKHByb2dyZXNzLCBzdHJlbmd0aCk7XG4gICAgfTtcbiAgICBlYXNpbmdGdW5jdGlvbi5vdXQgPSByZXZlcnNlRWFzaW5nKG1ldGhvZCk7XG4gICAgZWFzaW5nRnVuY3Rpb24uaW5PdXQgPSBtaXJyb3JFYXNpbmcobWV0aG9kKTtcblxuICAgIHJldHVybiBlYXNpbmdGdW5jdGlvbjtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDJWaGMybHVaeTlqY21WaGRHVXRaV0Z6YVc1bkxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenRyUWtGblEzZENPenM3T3pzN096czdPenRCUVhSQ2VFSXNTVUZCVFN4bFFVRmxMRlZCUVVNc1RVRkJSRHRYUVVGWkxGVkJRVU1zVVVGQlJDeEZRVUZYTEZGQlFWZzdaVUZCZDBJc1VVRkJReXhKUVVGWkxFZEJRVm9zUjBGQmJVSXNUMEZCVHl4SlFVRkpMRkZCUVVvc1JVRkJZeXhSUVVGeVFpeEpRVUZwUXl4RFFVRnFReXhIUVVGeFF5eERRVUZETEVsQlFVa3NUMEZCVHl4TFFVRkxMRWxCUVVrc1VVRkJTaXhEUVVGTUxFVkJRVzlDTEZGQlFUTkNMRU5CUVVvc1EwRkJSQ3hIUVVFMlF5eERRVUUzUXp0TFFVRnFSanREUVVGYU96czdPenM3T3pzN096czdRVUZaY2tJc1NVRkJUU3huUWtGQlowSXNWVUZCUXl4TlFVRkVPMWRCUVZrc1ZVRkJReXhSUVVGRUxFVkJRVmNzVVVGQldEdGxRVUYzUWl4SlFVRkpMRTlCUVU4c1NVRkJTU3hSUVVGS0xFVkJRV01zVVVGQmNrSXNRMEZCU2p0TFFVRjRRanREUVVGYU96czdPenM3T3pzN08wRkJWVkFzVTBGQlV5eHZRa0ZCVkN4RFFVRTRRaXhOUVVFNVFpeEZRVUZ6UXp0QlFVTnFSQ3hSUVVGSkxHbENRVUZwUWl4VlFVRkRMRkZCUVVRc1JVRkJWeXhSUVVGWU8yVkJRWGRDTEU5QlFVOHNVVUZCVUN4RlFVRnBRaXhSUVVGcVFqdExRVUY0UWl4RFFVUTBRanM3UVVGSGFrUXNiVUpCUVdVc1JVRkJaaXhIUVVGdlFpeFZRVUZETEZGQlFVUXNSVUZCVnl4UlFVRllPMlZCUVhkQ0xFOUJRVThzVVVGQlVDeEZRVUZwUWl4UlFVRnFRanRMUVVGNFFpeERRVWcyUWp0QlFVbHFSQ3h0UWtGQlpTeEhRVUZtTEVkQlFYRkNMR05CUVdNc1RVRkJaQ3hEUVVGeVFpeERRVXBwUkR0QlFVdHFSQ3h0UWtGQlpTeExRVUZtTEVkQlFYVkNMR0ZCUVdFc1RVRkJZaXhEUVVGMlFpeERRVXhwUkRzN1FVRlBha1FzVjBGQlR5eGpRVUZRTEVOQlVHbEVPME5CUVhSRElpd2labWxzWlNJNkltTnlaV0YwWlMxbFlYTnBibWN1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUx5cGNiaUFnSUNCTmFYSnliM0lnWldGemFXNW5YRzRnSUNBZ1hHNGdJQ0FnVFdseWNtOXljeUIwYUdVZ2NISnZkbWxrWldRZ1pXRnphVzVuSUdaMWJtTjBhVzl1TENCMWMyVmtJR2hsY21VZ1ptOXlJRzFwY25KdmNtbHVaeUJoYmx4dUlDQWdJR1ZoYzJWSmJpQnBiblJ2SUdGdUlHVmhjMlZKYms5MWRGeHVJQ0FnSUZ4dUlDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dVSEp2WjNKbGMzTXNJR1p5YjIwZ01DQXRJREVzSUc5bUlHTjFjbkpsYm5RZ2MyaHBablJjYmlBZ0lDQkFjR0Z5WVcwZ1cyWjFibU4wYVc5dVhUb2dWR2hsSUdWaGMybHVaeUJtZFc1amRHbHZiaUIwYnlCdGFYSnliM0pjYmlBZ0lDQkFjbVYwZFhKdWN5QmJiblZ0WW1WeVhUb2dWR2hsSUdWaGMybHVaeTFoWkdwMWMzUmxaQ0JrWld4MFlWeHVLaTljYm1OdmJuTjBJRzFwY25KdmNrVmhjMmx1WnlBOUlDaHRaWFJvYjJRcElEMCtJQ2h3Y205bmNtVnpjeXdnYzNSeVpXNW5kR2dwSUQwK0lDaHdjbTluY21WemN5QThQU0F3TGpVcElEOGdiV1YwYUc5a0tESWdLaUJ3Y205bmNtVnpjeXdnYzNSeVpXNW5kR2dwSUM4Z01pQTZJQ2d5SUMwZ2JXVjBhRzlrS0RJZ0tpQW9NU0F0SUhCeWIyZHlaWE56S1N3Z2MzUnlaVzVuZEdncEtTQXZJREk3WEc0Z0lDQWdJQ0FnSUZ4dUx5cGNiaUFnSUNCU1pYWmxjbk5sSUdWaGMybHVaMXh1SUNBZ0lGeHVJQ0FnSUZKbGRtVnljMlZ6SUhSb1pTQnZkWFJ3ZFhRZ2IyWWdkR2hsSUhCeWIzWnBaR1ZrSUdWaGMybHVaeUJtZFc1amRHbHZiaXdnZFhObFpDQm1iM0lnWm14cGNIQnBibWNnWldGelpVbHVYRzRnSUNBZ1kzVnlkbVVnZEc4Z1lXNGdaV0Z6WlU5MWRDNWNiaUFnSUNCY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRkJ5YjJkeVpYTnpMQ0JtY205dElEQWdMU0F4TENCdlppQmpkWEp5Wlc1MElITm9hV1owWEc0Z0lDQWdRSEJoY21GdElGdG1kVzVqZEdsdmJsMDZJRlJvWlNCbFlYTnBibWNnWm5WdVkzUnBiMjRnZEc4Z2NtVjJaWEp6WlZ4dUlDQWdJRUJ5WlhSMWNtNXpJRnR1ZFcxaVpYSmRPaUJVYUdVZ1pXRnphVzVuTFdGa2FuVnpkR1ZrSUdSbGJIUmhYRzRxTDF4dVkyOXVjM1FnY21WMlpYSnpaVVZoYzJsdVp5QTlJQ2h0WlhSb2IyUXBJRDArSUNod2NtOW5jbVZ6Y3l3Z2MzUnlaVzVuZEdncElEMCtJREVnTFNCdFpYUm9iMlFvTVNBdElIQnliMmR5WlhOekxDQnpkSEpsYm1kMGFDazdYRzVjYmk4cVhHNGdJQ0FnUldGemFXNW5JR05zWVhOelhHNWNiaUFnSUNCSlppQndjbTkyYVdSbFpDQmxZWE5wYm1jZ1puVnVZM1JwYjI0c0lISmxkSFZ5Ym5NZ1pXRnphVzVuSUdaMWJtTjBhVzl1SUhkcGRHZ2dYRzRnSUNBZ2FXNHZiM1YwTDJsdVQzVjBJSFpoY21saGRHbHZibk5jYmx4dUlDQWdJRWxtSUhCeWIzWnBaR1ZrSUdadmRYSWdZWEpuZFcxbGJuUnpMQ0J5WlhSMWNtNXpJRzVsZHlCQ1pYcHBaWElnWTJ4aGMzTWdhVzV6ZEdWaFpDNWNiaW92WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JtZFc1amRHbHZiaUJqY21WaGRHVkZZWE5wYm1kR2RXNWpkR2x2YmlodFpYUm9iMlFwSUh0Y2JpQWdJQ0JzWlhRZ1pXRnphVzVuUm5WdVkzUnBiMjRnUFNBb2NISnZaM0psYzNNc0lITjBjbVZ1WjNSb0tTQTlQaUJ0WlhSb2IyUW9jSEp2WjNKbGMzTXNJSE4wY21WdVozUm9LVHRjYmx4dUlDQWdJR1ZoYzJsdVowWjFibU4wYVc5dUxtbHVJRDBnS0hCeWIyZHlaWE56TENCemRISmxibWQwYUNrZ1BUNGdiV1YwYUc5a0tIQnliMmR5WlhOekxDQnpkSEpsYm1kMGFDazdYRzRnSUNBZ1pXRnphVzVuUm5WdVkzUnBiMjR1YjNWMElEMGdjbVYyWlhKelpVVmhjMmx1WnlodFpYUm9iMlFwTzF4dUlDQWdJR1ZoYzJsdVowWjFibU4wYVc5dUxtbHVUM1YwSUQwZ2JXbHljbTl5UldGemFXNW5LRzFsZEdodlpDazdYRzVjYmlBZ0lDQnlaWFIxY200Z1pXRnphVzVuUm5WdVkzUnBiMjQ3WEc1OVhHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL2Vhc2luZy9jcmVhdGUtZWFzaW5nLmpzXG4gKiogbW9kdWxlIGlkID0gNTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGN1YmljQmV6aWVyO1xuLypcbiAgICBCZXppZXIgZnVuY3Rpb24gZ2VuZXJhdG9yXG4gICAgICAgIFxuICAgIEdhw6t0YW4gUmVuYXVkZWF1J3MgQmV6aWVyRWFzaW5nXG4gICAgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nL2Jsb2IvbWFzdGVyL2luZGV4LmpzICBcbiAgICBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNpbmcvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICAgIFlvdSdyZSBhIGhlcm9cbiAgICBcbiAgICBVc2VcbiAgICBcbiAgICAgICAgdmFyIGVhc2VPdXQgPSBuZXcgQmV6aWVyKC4xNywuNjcsLjgzLC42NyksXG4gICAgICAgICAgICB4ID0gZWFzZU91dCgwLjUpOyAvLyByZXR1cm5zIDAuNjI3Li4uXG4qL1xuXG4vLyBDb25zdGFudHNcbnZhciBORVdUT05fSVRFUkFUSU9OUyA9IDg7XG52YXIgTkVXVE9OX01JTl9TTE9QRSA9IDAuMDAxO1xudmFyIFNVQkRJVklTSU9OX1BSRUNJU0lPTiA9IDAuMDAwMDAwMTtcbnZhciBTVUJESVZJU0lPTl9NQVhfSVRFUkFUSU9OUyA9IDEwO1xudmFyIEtfU1BMSU5FX1RBQkxFX1NJWkUgPSAxMTtcbnZhciBLX1NBTVBMRV9TVEVQX1NJWkUgPSAxLjAgLyAoS19TUExJTkVfVEFCTEVfU0laRSAtIDEuMCk7XG52YXIgRkxPQVRfMzJfU1VQUE9SVEVEID0gdHlwZW9mIEZsb2F0MzJBcnJheSAhPT0gJ3VuZGVmaW5lZCc7XG5cbi8vIEhlbHBlciBtZXRob2RzXG52YXIgYSA9IGZ1bmN0aW9uIChhMSwgYTIpIHtcbiAgICByZXR1cm4gMS4wIC0gMy4wICogYTIgKyAzLjAgKiBhMTtcbn07XG52YXIgYiA9IGZ1bmN0aW9uIChhMSwgYTIpIHtcbiAgICByZXR1cm4gMy4wICogYTIgLSA2LjAgKiBhMTtcbn07XG52YXIgYyA9IGZ1bmN0aW9uIChhMSkge1xuICAgIHJldHVybiAzLjAgKiBhMTtcbn07XG5cbnZhciBnZXRTbG9wZSA9IGZ1bmN0aW9uICh0LCBhMSwgYTIpIHtcbiAgICByZXR1cm4gMy4wICogYShhMSwgYTIpICogdCAqIHQgKyAyLjAgKiBiKGExLCBhMikgKiB0ICsgYyhhMSk7XG59O1xuXG52YXIgY2FsY0JlemllciA9IGZ1bmN0aW9uICh0LCBhMSwgYTIpIHtcbiAgICByZXR1cm4gKChhKGExLCBhMikgKiB0ICsgYihhMSwgYTIpKSAqIHQgKyBjKGExKSkgKiB0O1xufTtcblxuLypcbiAgICBDcmVhdGUgYSBjdWJpYyBiZXppZXIgcmVzb2x2ZXJcbiovXG5mdW5jdGlvbiBjdWJpY0JlemllcihtWDEsIG1ZMSwgbVgyLCBtWTIpIHtcbiAgICB2YXIgc2FtcGxlVmFsdWVzID0gRkxPQVRfMzJfU1VQUE9SVEVEID8gbmV3IEZsb2F0MzJBcnJheShLX1NQTElORV9UQUJMRV9TSVpFKSA6IG5ldyBBcnJheShLX1NQTElORV9UQUJMRV9TSVpFKTtcbiAgICB2YXIgX3ByZWNvbXB1dGVkID0gZmFsc2U7XG5cbiAgICB2YXIgYmluYXJ5U3ViZGl2aWRlID0gZnVuY3Rpb24gKGFYLCBhQSwgYUIpIHtcbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICB2YXIgY3VycmVudFggPSB2b2lkIDA7XG4gICAgICAgIHZhciBjdXJyZW50VCA9IHZvaWQgMDtcblxuICAgICAgICBkbyB7XG4gICAgICAgICAgICBjdXJyZW50VCA9IGFBICsgKGFCIC0gYUEpIC8gMi4wO1xuICAgICAgICAgICAgY3VycmVudFggPSBjYWxjQmV6aWVyKGN1cnJlbnRULCBtWDEsIG1YMikgLSBhWDtcbiAgICAgICAgICAgIGlmIChjdXJyZW50WCA+IDAuMCkge1xuICAgICAgICAgICAgICAgIGFCID0gY3VycmVudFQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFBID0gY3VycmVudFQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gd2hpbGUgKE1hdGguYWJzKGN1cnJlbnRYKSA+IFNVQkRJVklTSU9OX1BSRUNJU0lPTiAmJiArK2kgPCBTVUJESVZJU0lPTl9NQVhfSVRFUkFUSU9OUyk7XG5cbiAgICAgICAgcmV0dXJuIGN1cnJlbnRUO1xuICAgIH07XG5cbiAgICB2YXIgbmV3dG9uUmFwaHNvbkl0ZXJhdGUgPSBmdW5jdGlvbiAoYVgsIGFHdWVzc1QpIHtcbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICB2YXIgY3VycmVudFNsb3BlID0gMDtcbiAgICAgICAgdmFyIGN1cnJlbnRYID0gdm9pZCAwO1xuXG4gICAgICAgIGZvciAoOyBpIDwgTkVXVE9OX0lURVJBVElPTlM7ICsraSkge1xuICAgICAgICAgICAgY3VycmVudFNsb3BlID0gZ2V0U2xvcGUoYUd1ZXNzVCwgbVgxLCBtWDIpO1xuXG4gICAgICAgICAgICBpZiAoY3VycmVudFNsb3BlID09PSAwLjApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYUd1ZXNzVDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY3VycmVudFggPSBjYWxjQmV6aWVyKGFHdWVzc1QsIG1YMSwgbVgyKSAtIGFYO1xuICAgICAgICAgICAgYUd1ZXNzVCAtPSBjdXJyZW50WCAvIGN1cnJlbnRTbG9wZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhR3Vlc3NUO1xuICAgIH07XG5cbiAgICB2YXIgY2FsY1NhbXBsZVZhbHVlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBLX1NQTElORV9UQUJMRV9TSVpFOyArK2kpIHtcbiAgICAgICAgICAgIHNhbXBsZVZhbHVlc1tpXSA9IGNhbGNCZXppZXIoaSAqIEtfU0FNUExFX1NURVBfU0laRSwgbVgxLCBtWDIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHZhciBnZXRURm9yWCA9IGZ1bmN0aW9uIChhWCkge1xuICAgICAgICB2YXIgaW50ZXJ2YWxTdGFydCA9IDAuMDtcbiAgICAgICAgdmFyIGN1cnJlbnRTYW1wbGUgPSAxO1xuICAgICAgICB2YXIgbGFzdFNhbXBsZSA9IEtfU1BMSU5FX1RBQkxFX1NJWkUgLSAxO1xuICAgICAgICB2YXIgZGlzdCA9IDAuMDtcbiAgICAgICAgdmFyIGd1ZXNzRm9yVCA9IDAuMDtcbiAgICAgICAgdmFyIGluaXRpYWxTbG9wZSA9IDAuMDtcblxuICAgICAgICBmb3IgKDsgY3VycmVudFNhbXBsZSAhPSBsYXN0U2FtcGxlICYmIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSA8PSBhWDsgKytjdXJyZW50U2FtcGxlKSB7XG4gICAgICAgICAgICBpbnRlcnZhbFN0YXJ0ICs9IEtfU0FNUExFX1NURVBfU0laRTtcbiAgICAgICAgfVxuXG4gICAgICAgIC0tY3VycmVudFNhbXBsZTtcblxuICAgICAgICBkaXN0ID0gKGFYIC0gc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdKSAvIChzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZSArIDFdIC0gc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdKTtcbiAgICAgICAgZ3Vlc3NGb3JUID0gaW50ZXJ2YWxTdGFydCArIGRpc3QgKiBLX1NBTVBMRV9TVEVQX1NJWkU7XG5cbiAgICAgICAgaW5pdGlhbFNsb3BlID0gZ2V0U2xvcGUoZ3Vlc3NGb3JULCBtWDEsIG1YMik7XG5cbiAgICAgICAgLy8gSWYgc2xvcGUgaXMgZ3JlYXRlciB0aGFuIG1pblxuICAgICAgICBpZiAoaW5pdGlhbFNsb3BlID49IE5FV1RPTl9NSU5fU0xPUEUpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXd0b25SYXBoc29uSXRlcmF0ZShhWCwgZ3Vlc3NGb3JUKTtcbiAgICAgICAgICAgIC8vIFNsb3BlIGlzIGVxdWFsIHRvIG1pblxuICAgICAgICB9IGVsc2UgaWYgKGluaXRpYWxTbG9wZSA9PT0gMC4wKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGd1ZXNzRm9yVDtcbiAgICAgICAgICAgICAgICAvLyBTbG9wZSBpcyBsZXNzIHRoYW4gbWluXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYmluYXJ5U3ViZGl2aWRlKGFYLCBpbnRlcnZhbFN0YXJ0LCBpbnRlcnZhbFN0YXJ0ICsgS19TQU1QTEVfU1RFUF9TSVpFKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgfTtcblxuICAgIHZhciBwcmVjb21wdXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfcHJlY29tcHV0ZWQgPSB0cnVlO1xuICAgICAgICBpZiAobVgxICE9IG1ZMSB8fCBtWDIgIT0gbVkyKSB7XG4gICAgICAgICAgICBjYWxjU2FtcGxlVmFsdWVzKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIHJlc29sdmVyID0gZnVuY3Rpb24gKGFYKSB7XG4gICAgICAgIHZhciByZXR1cm5WYWx1ZSA9IHZvaWQgMDtcblxuICAgICAgICBpZiAoIV9wcmVjb21wdXRlZCkge1xuICAgICAgICAgICAgcHJlY29tcHV0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgbGluZWFyIGdyYWRpZW50LCByZXR1cm4gWCBhcyBUXG4gICAgICAgIGlmIChtWDEgPT09IG1ZMSAmJiBtWDIgPT09IG1ZMikge1xuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSBhWDtcblxuICAgICAgICAgICAgLy8gSWYgYXQgc3RhcnQsIHJldHVybiAwXG4gICAgICAgIH0gZWxzZSBpZiAoYVggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IDA7XG5cbiAgICAgICAgICAgICAgICAvLyBJZiBhdCBlbmQsIHJldHVybiAxXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFYID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblZhbHVlID0gMTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IGNhbGNCZXppZXIoZ2V0VEZvclgoYVgpLCBtWTEsIG1ZMik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXR1cm5WYWx1ZTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHJlc29sdmVyO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMlZoYzJsdVp5OWpjbVZoZEdVdFltVjZhV1Z5TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096dHJRa0Z0UTNkQ096czdPenM3T3pzN096czdPenM3TzBGQmNFSjRRaXhKUVVGTkxHOUNRVUZ2UWl4RFFVRndRanRCUVVOT0xFbEJRVTBzYlVKQlFXMUNMRXRCUVc1Q08wRkJRMDRzU1VGQlRTeDNRa0ZCZDBJc1UwRkJlRUk3UVVGRFRpeEpRVUZOTERaQ1FVRTJRaXhGUVVFM1FqdEJRVU5PTEVsQlFVMHNjMEpCUVhOQ0xFVkJRWFJDTzBGQlEwNHNTVUZCVFN4eFFrRkJjVUlzVDBGQlR5eHpRa0ZCYzBJc1IwRkJkRUlzUTBGQlVEdEJRVU16UWl4SlFVRk5MSEZDUVVGelFpeFBRVUZQTEZsQlFWQXNTMEZCZDBJc1YwRkJlRUk3T3p0QlFVYzFRaXhKUVVGTkxFbEJRVWtzVlVGQlF5eEZRVUZFTEVWQlFVc3NSVUZCVER0WFFVRlpMRTFCUVUwc1RVRkJUU3hGUVVGT0xFZEJRVmNzVFVGQlRTeEZRVUZPTzBOQlFUZENPMEZCUTFZc1NVRkJUU3hKUVVGSkxGVkJRVU1zUlVGQlJDeEZRVUZMTEVWQlFVdzdWMEZCV1N4TlFVRk5MRVZCUVU0c1IwRkJWeXhOUVVGTkxFVkJRVTQ3UTBGQmRrSTdRVUZEVml4SlFVRk5MRWxCUVVrc1ZVRkJReXhGUVVGRU8xZEJRVkVzVFVGQlRTeEZRVUZPTzBOQlFWSTdPMEZCUlZZc1NVRkJUU3hYUVVGWExGVkJRVU1zUTBGQlJDeEZRVUZKTEVWQlFVb3NSVUZCVVN4RlFVRlNPMWRCUVdVc1RVRkJUU3hGUVVGRkxFVkJRVVlzUlVGQlRTeEZRVUZPTEVOQlFVNHNSMEZCYTBJc1EwRkJiRUlzUjBGQmMwSXNRMEZCZEVJc1IwRkJNRUlzVFVGQlRTeEZRVUZGTEVWQlFVWXNSVUZCVFN4RlFVRk9MRU5CUVU0c1IwRkJhMElzUTBGQmJFSXNSMEZCYzBJc1JVRkJSU3hGUVVGR0xFTkJRV2hFTzBOQlFXWTdPMEZCUldwQ0xFbEJRVTBzWVVGQllTeFZRVUZETEVOQlFVUXNSVUZCU1N4RlFVRktMRVZCUVZFc1JVRkJVanRYUVVGbExFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVWXNSVUZCVFN4RlFVRk9MRWxCUVZrc1EwRkJXaXhIUVVGblFpeEZRVUZGTEVWQlFVWXNSVUZCVFN4RlFVRk9MRU5CUVdoQ0xFTkJRVVFzUjBGQk9FSXNRMEZCT1VJc1IwRkJhME1zUlVGQlJTeEZRVUZHTEVOQlFXeERMRU5CUVVRc1IwRkJORU1zUTBGQk5VTTdRMEZCWmpzN096czdRVUZMU2l4VFFVRlRMRmRCUVZRc1EwRkJjVUlzUjBGQmNrSXNSVUZCTUVJc1IwRkJNVUlzUlVGQkswSXNSMEZCTDBJc1JVRkJiME1zUjBGQmNFTXNSVUZCZVVNN1FVRkRjRVFzVVVGQlRTeGxRVUZsTEhGQ1FVRnhRaXhKUVVGSkxGbEJRVW9zUTBGQmFVSXNiVUpCUVdwQ0xFTkJRWEpDTEVkQlFUWkVMRWxCUVVrc1MwRkJTaXhEUVVGVkxHMUNRVUZXTEVOQlFUZEVMRU5CUkN0Q08wRkJSWEJFTEZGQlFVa3NaVUZCWlN4TFFVRm1MRU5CUm1kRU96dEJRVWx3UkN4UlFVRk5MR3RDUVVGclFpeFZRVUZETEVWQlFVUXNSVUZCU3l4RlFVRk1MRVZCUVZNc1JVRkJWQ3hGUVVGblFqdEJRVU53UXl4WlFVRkpMRWxCUVVrc1EwRkJTaXhEUVVSblF6dEJRVVZ3UXl4WlFVRkpMR2xDUVVGS0xFTkJSbTlETzBGQlIzQkRMRmxCUVVrc2FVSkJRVW9zUTBGSWIwTTdPMEZCUzNCRExGZEJRVWM3UVVGRFF5eDFRa0ZCVnl4TFFVRkxMRU5CUVVNc1MwRkJTeXhGUVVGTUxFTkJRVVFzUjBGQldTeEhRVUZhTEVOQlJHcENPMEZCUlVNc2RVSkJRVmNzVjBGQlZ5eFJRVUZZTEVWQlFYRkNMRWRCUVhKQ0xFVkJRVEJDTEVkQlFURkNMRWxCUVdsRExFVkJRV3BETEVOQlJsbzdRVUZIUXl4blFrRkJTU3hYUVVGWExFZEJRVmdzUlVGQlowSTdRVUZEYUVJc2NVSkJRVXNzVVVGQlRDeERRVVJuUWp0aFFVRndRaXhOUVVWUE8wRkJRMGdzY1VKQlFVc3NVVUZCVEN4RFFVUkhPMkZCUmxBN1UwRklTaXhSUVZGVExFdEJRVXNzUjBGQlRDeERRVUZUTEZGQlFWUXNTVUZCY1VJc2NVSkJRWEpDTEVsQlFUaERMRVZCUVVVc1EwRkJSaXhIUVVGTkxEQkNRVUZPTEVWQlltNUNPenRCUVdWd1F5eGxRVUZQTEZGQlFWQXNRMEZtYjBNN1MwRkJhRUlzUTBGS05FSTdPMEZCYzBKd1JDeFJRVUZOTEhWQ1FVRjFRaXhWUVVGRExFVkJRVVFzUlVGQlN5eFBRVUZNTEVWQlFXbENPMEZCUXpGRExGbEJRVWtzU1VGQlNTeERRVUZLTEVOQlJITkRPMEZCUlRGRExGbEJRVWtzWlVGQlpTeERRVUZtTEVOQlJuTkRPMEZCUnpGRExGbEJRVWtzYVVKQlFVb3NRMEZJTUVNN08wRkJTekZETEdWQlFVOHNTVUZCU1N4cFFrRkJTaXhGUVVGMVFpeEZRVUZGTEVOQlFVWXNSVUZCU3p0QlFVTXZRaXd5UWtGQlpTeFRRVUZUTEU5QlFWUXNSVUZCYTBJc1IwRkJiRUlzUlVGQmRVSXNSMEZCZGtJc1EwRkJaaXhEUVVRclFqczdRVUZITDBJc1owSkJRVWtzYVVKQlFXbENMRWRCUVdwQ0xFVkJRWE5DTzBGQlEzUkNMSFZDUVVGUExFOUJRVkFzUTBGRWMwSTdZVUZCTVVJN08wRkJTVUVzZFVKQlFWY3NWMEZCVnl4UFFVRllMRVZCUVc5Q0xFZEJRWEJDTEVWQlFYbENMRWRCUVhwQ0xFbEJRV2RETEVWQlFXaERMRU5CVUc5Q08wRkJVUzlDTEhWQ1FVRlhMRmRCUVZjc1dVRkJXQ3hEUVZKdlFqdFRRVUZ1UXpzN1FVRlhRU3hsUVVGUExFOUJRVkFzUTBGb1FqQkRPMHRCUVdwQ0xFTkJkRUoxUWpzN1FVRjVRM0JFTEZGQlFVMHNiVUpCUVcxQ0xGbEJRVTA3UVVGRE0wSXNZVUZCU3l4SlFVRkpMRWxCUVVrc1EwRkJTaXhGUVVGUExFbEJRVWtzYlVKQlFVb3NSVUZCZVVJc1JVRkJSU3hEUVVGR0xFVkJRVXM3UVVGRE1VTXNlVUpCUVdFc1EwRkJZaXhKUVVGclFpeFhRVUZYTEVsQlFVa3NhMEpCUVVvc1JVRkJkMElzUjBGQmJrTXNSVUZCZDBNc1IwRkJlRU1zUTBGQmJFSXNRMEZFTUVNN1UwRkJPVU03UzBGRWNVSXNRMEY2UXpKQ096dEJRU3REY0VRc1VVRkJUU3hYUVVGWExGVkJRVU1zUlVGQlJDeEZRVUZSTzBGQlEzSkNMRmxCUVVrc1owSkJRV2RDTEVkQlFXaENMRU5CUkdsQ08wRkJSWEpDTEZsQlFVa3NaMEpCUVdkQ0xFTkJRV2hDTEVOQlJtbENPMEZCUjNKQ0xGbEJRVWtzWVVGQllTeHpRa0ZCYzBJc1EwRkJkRUlzUTBGSVNUdEJRVWx5UWl4WlFVRkpMRTlCUVU4c1IwRkJVQ3hEUVVwcFFqdEJRVXR5UWl4WlFVRkpMRmxCUVZrc1IwRkJXaXhEUVV4cFFqdEJRVTF5UWl4WlFVRkpMR1ZCUVdVc1IwRkJaaXhEUVU1cFFqczdRVUZSY2tJc1pVRkJUeXhwUWtGQmFVSXNWVUZCYWtJc1NVRkJLMElzWVVGQllTeGhRVUZpTEV0QlFTdENMRVZCUVM5Q0xFVkJRVzFETEVWQlFVVXNZVUZCUml4RlFVRnBRanRCUVVOMFJpdzJRa0ZCYVVJc2EwSkJRV3BDTEVOQlJITkdPMU5CUVRGR096dEJRVWxCTEZWQlFVVXNZVUZCUml4RFFWcHhRanM3UVVGamNrSXNaVUZCVHl4RFFVRkRMRXRCUVVzc1lVRkJZU3hoUVVGaUxFTkJRVXdzUTBGQlJDeEpRVUZ6UXl4aFFVRmhMR2RDUVVGakxFTkJRV1FzUTBGQllpeEhRVUZuUXl4aFFVRmhMR0ZCUVdJc1EwRkJhRU1zUTBGQmRFTXNRMEZrWXp0QlFXVnlRaXh2UWtGQldTeG5Ra0ZCWjBJc1QwRkJUeXhyUWtGQlVDeERRV1pRT3p0QlFXbENja0lzZFVKQlFXVXNVMEZCVXl4VFFVRlVMRVZCUVc5Q0xFZEJRWEJDTEVWQlFYbENMRWRCUVhwQ0xFTkJRV1k3T3p0QlFXcENjVUlzV1VGdlFtcENMR2RDUVVGblFpeG5Ra0ZCYUVJc1JVRkJhME03UVVGRGJFTXNiVUpCUVU4c2NVSkJRWEZDTEVWQlFYSkNMRVZCUVhsQ0xGTkJRWHBDTEVOQlFWQTdPMEZCUkd0RExGTkJRWFJETEUxQlIwOHNTVUZCU1N4cFFrRkJhVUlzUjBGQmFrSXNSVUZCYzBJN1FVRkROMElzZFVKQlFVOHNVMEZCVURzN1FVRkVOa0lzWVVGQk1VSXNUVUZIUVR0QlFVTklMREpDUVVGUExHZENRVUZuUWl4RlFVRm9RaXhGUVVGdlFpeGhRVUZ3UWl4RlFVRnRReXhuUWtGQlowSXNhMEpCUVdoQ0xFTkJRVEZETEVOQlJFYzdhVUpCU0VFN1MwRjJRazBzUTBFdlEyMURPenRCUVRoRmNFUXNVVUZCVFN4aFFVRmhMRmxCUVUwN1FVRkRja0lzZFVKQlFXVXNTVUZCWml4RFFVUnhRanRCUVVWeVFpeFpRVUZKTEU5QlFVOHNSMEZCVUN4SlFVRmpMRTlCUVU4c1IwRkJVQ3hGUVVGWk8wRkJRekZDTEN0Q1FVUXdRanRUUVVFNVFqdExRVVpsTEVOQk9VVnBRenM3UVVGeFJuQkVMRkZCUVUwc1YwRkJWeXhWUVVGRExFVkJRVVFzUlVGQlVUdEJRVU55UWl4WlFVRkpMRzlDUVVGS0xFTkJSSEZDT3p0QlFVZHlRaXhaUVVGSkxFTkJRVU1zV1VGQlJDeEZRVUZsTzBGQlEyWXNlVUpCUkdVN1UwRkJia0k3T3p0QlFVaHhRaXhaUVZGcVFpeFJRVUZSTEVkQlFWSXNTVUZCWlN4UlFVRlJMRWRCUVZJc1JVRkJZVHRCUVVNMVFpd3dRa0ZCWXl4RlFVRmtPenM3UVVGRU5FSXNVMEZCYUVNc1RVRkpUeXhKUVVGSkxFOUJRVThzUTBGQlVDeEZRVUZWTzBGQlEycENMRGhDUVVGakxFTkJRV1E3T3p0QlFVUnBRaXhoUVVGa0xFMUJTVUVzU1VGQlNTeFBRVUZQTEVOQlFWQXNSVUZCVlR0QlFVTnFRaXhyUTBGQll5eERRVUZrTEVOQlJHbENPMmxDUVVGa0xFMUJSMEU3UVVGRFNDeHJRMEZCWXl4WFFVRlhMRk5CUVZNc1JVRkJWQ3hEUVVGWUxFVkJRWGxDTEVkQlFYcENMRVZCUVRoQ0xFZEJRVGxDTEVOQlFXUXNRMEZFUnp0cFFrRklRVHM3UVVGUFVDeGxRVUZQTEZkQlFWQXNRMEYyUW5GQ08wdEJRVklzUTBGeVJtMURPenRCUVN0SGNFUXNWMEZCVHl4UlFVRlFMRU5CTDBkdlJEdERRVUY2UXlJc0ltWnBiR1VpT2lKamNtVmhkR1V0WW1WNmFXVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwTDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk4cVhHNGdJQ0FnUW1WNmFXVnlJR1oxYm1OMGFXOXVJR2RsYm1WeVlYUnZjbHh1SUNBZ0lDQWdJQ0JjYmlBZ0lDQkhZY09yZEdGdUlGSmxibUYxWkdWaGRTZHpJRUpsZW1sbGNrVmhjMmx1WjF4dUlDQWdJR2gwZEhCek9pOHZaMmwwYUhWaUxtTnZiUzluY21VdlltVjZhV1Z5TFdWaGMybHVaeTlpYkc5aUwyMWhjM1JsY2k5cGJtUmxlQzVxY3lBZ1hHNGdJQ0FnYUhSMGNITTZMeTluYVhSb2RXSXVZMjl0TDJkeVpTOWlaWHBwWlhJdFpXRnphVzVuTDJKc2IySXZiV0Z6ZEdWeUwweEpRMFZPVTBWY2JpQWdJQ0JaYjNVbmNtVWdZU0JvWlhKdlhHNGdJQ0FnWEc0Z0lDQWdWWE5sWEc0Z0lDQWdYRzRnSUNBZ0lDQWdJSFpoY2lCbFlYTmxUM1YwSUQwZ2JtVjNJRUpsZW1sbGNpZ3VNVGNzTGpZM0xDNDRNeXd1TmpjcExGeHVJQ0FnSUNBZ0lDQWdJQ0FnZUNBOUlHVmhjMlZQZFhRb01DNDFLVHNnTHk4Z2NtVjBkWEp1Y3lBd0xqWXlOeTR1TGx4dUtpOWNibHh1THk4Z1EyOXVjM1JoYm5SelhHNWpiMjV6ZENCT1JWZFVUMDVmU1ZSRlVrRlVTVTlPVXlBOUlEZzdYRzVqYjI1emRDQk9SVmRVVDA1ZlRVbE9YMU5NVDFCRklEMGdNQzR3TURFN1hHNWpiMjV6ZENCVFZVSkVTVlpKVTBsUFRsOVFVa1ZEU1ZOSlQwNGdQU0F3TGpBd01EQXdNREU3WEc1amIyNXpkQ0JUVlVKRVNWWkpVMGxQVGw5TlFWaGZTVlJGVWtGVVNVOU9VeUE5SURFd08xeHVZMjl1YzNRZ1MxOVRVRXhKVGtWZlZFRkNURVZmVTBsYVJTQTlJREV4TzF4dVkyOXVjM1FnUzE5VFFVMVFURVZmVTFSRlVGOVRTVnBGSUQwZ01TNHdJQzhnS0V0ZlUxQk1TVTVGWDFSQlFreEZYMU5KV2tVZ0xTQXhMakFwTzF4dVkyOXVjM1FnUmt4UFFWUmZNekpmVTFWUVVFOVNWRVZFSUQwZ0tIUjVjR1Z2WmlCR2JHOWhkRE15UVhKeVlYa2dJVDA5SUNkMWJtUmxabWx1WldRbktUdGNibHh1THk4Z1NHVnNjR1Z5SUcxbGRHaHZaSE5jYm1OdmJuTjBJR0VnUFNBb1lURXNJR0V5S1NBOVBpQXhMakFnTFNBekxqQWdLaUJoTWlBcklETXVNQ0FxSUdFeE8xeHVZMjl1YzNRZ1lpQTlJQ2hoTVN3Z1lUSXBJRDArSURNdU1DQXFJR0V5SUMwZ05pNHdJQ29nWVRFN1hHNWpiMjV6ZENCaklEMGdLR0V4S1NBOVBpQXpMakFnS2lCaE1UdGNibHh1WTI5dWMzUWdaMlYwVTJ4dmNHVWdQU0FvZEN3Z1lURXNJR0V5S1NBOVBpQXpMakFnS2lCaEtHRXhMQ0JoTWlrZ0tpQjBJQ29nZENBcklESXVNQ0FxSUdJb1lURXNJR0V5S1NBcUlIUWdLeUJqS0dFeEtUdGNibHh1WTI5dWMzUWdZMkZzWTBKbGVtbGxjaUE5SUNoMExDQmhNU3dnWVRJcElEMCtJQ2dvWVNoaE1Td2dZVElwSUNvZ2RDQXJJR0lvWVRFc0lHRXlLU2tnS2lCMElDc2dZeWhoTVNrcElDb2dkRHRjYmx4dUx5cGNiaUFnSUNCRGNtVmhkR1VnWVNCamRXSnBZeUJpWlhwcFpYSWdjbVZ6YjJ4MlpYSmNiaW92WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JtZFc1amRHbHZiaUJqZFdKcFkwSmxlbWxsY2lodFdERXNJRzFaTVN3Z2JWZ3lMQ0J0V1RJcElIdGNiaUFnSUNCamIyNXpkQ0J6WVcxd2JHVldZV3gxWlhNZ1BTQkdURTlCVkY4ek1sOVRWVkJRVDFKVVJVUWdQeUJ1WlhjZ1JteHZZWFF6TWtGeWNtRjVLRXRmVTFCTVNVNUZYMVJCUWt4RlgxTkpXa1VwSURvZ2JtVjNJRUZ5Y21GNUtFdGZVMUJNU1U1RlgxUkJRa3hGWDFOSldrVXBPMXh1SUNBZ0lHeGxkQ0JmY0hKbFkyOXRjSFYwWldRZ1BTQm1ZV3h6WlR0Y2JseHVJQ0FnSUdOdmJuTjBJR0pwYm1GeWVWTjFZbVJwZG1sa1pTQTlJQ2hoV0N3Z1lVRXNJR0ZDS1NBOVBpQjdYRzRnSUNBZ0lDQWdJR3hsZENCcElEMGdNRHRjYmlBZ0lDQWdJQ0FnYkdWMElHTjFjbkpsYm5SWU8xeHVJQ0FnSUNBZ0lDQnNaWFFnWTNWeWNtVnVkRlE3WEc1Y2JpQWdJQ0FnSUNBZ1pHOGdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kzVnljbVZ1ZEZRZ1BTQmhRU0FySUNoaFFpQXRJR0ZCS1NBdklESXVNRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTjFjbkpsYm5SWUlEMGdZMkZzWTBKbGVtbGxjaWhqZFhKeVpXNTBWQ3dnYlZneExDQnRXRElwSUMwZ1lWZzdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9ZM1Z5Y21WdWRGZ2dQaUF3TGpBcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmhRaUE5SUdOMWNuSmxiblJVTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmhRU0E5SUdOMWNuSmxiblJVTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5SUhkb2FXeGxJQ2hOWVhSb0xtRmljeWhqZFhKeVpXNTBXQ2tnUGlCVFZVSkVTVlpKVTBsUFRsOVFVa1ZEU1ZOSlQwNGdKaVlnS3l0cElEd2dVMVZDUkVsV1NWTkpUMDVmVFVGWVgwbFVSVkpCVkVsUFRsTXBPMXh1WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJqZFhKeVpXNTBWRHRjYmlBZ0lDQjlPMXh1WEc0Z0lDQWdZMjl1YzNRZ2JtVjNkRzl1VW1Gd2FITnZia2wwWlhKaGRHVWdQU0FvWVZnc0lHRkhkV1Z6YzFRcElEMCtJSHRjYmlBZ0lDQWdJQ0FnYkdWMElHa2dQU0F3TzF4dUlDQWdJQ0FnSUNCc1pYUWdZM1Z5Y21WdWRGTnNiM0JsSUQwZ01EdGNiaUFnSUNBZ0lDQWdiR1YwSUdOMWNuSmxiblJZTzF4dVhHNGdJQ0FnSUNBZ0lHWnZjaUFvT3lCcElEd2dUa1ZYVkU5T1gwbFVSVkpCVkVsUFRsTTdJQ3NyYVNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWTNWeWNtVnVkRk5zYjNCbElEMGdaMlYwVTJ4dmNHVW9ZVWQxWlhOelZDd2diVmd4TENCdFdESXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb1kzVnljbVZ1ZEZOc2IzQmxJRDA5UFNBd0xqQXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdZVWQxWlhOelZEdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0FnSUNBZ1kzVnljbVZ1ZEZnZ1BTQmpZV3hqUW1WNmFXVnlLR0ZIZFdWemMxUXNJRzFZTVN3Z2JWZ3lLU0F0SUdGWU8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWVVkMVpYTnpWQ0F0UFNCamRYSnlaVzUwV0NBdklHTjFjbkpsYm5SVGJHOXdaVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUdGSGRXVnpjMVE3WEc0Z0lDQWdmVHRjYmx4dUlDQWdJR052Ym5OMElHTmhiR05UWVcxd2JHVldZV3gxWlhNZ1BTQW9LU0E5UGlCN1hHNGdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2dTMTlUVUV4SlRrVmZWRUZDVEVWZlUwbGFSVHNnS3l0cEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCellXMXdiR1ZXWVd4MVpYTmJhVjBnUFNCallXeGpRbVY2YVdWeUtHa2dLaUJMWDFOQlRWQk1SVjlUVkVWUVgxTkpXa1VzSUcxWU1Td2diVmd5S1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgwN1hHNWNiaUFnSUNCamIyNXpkQ0JuWlhSVVJtOXlXQ0E5SUNoaFdDa2dQVDRnZTF4dUlDQWdJQ0FnSUNCc1pYUWdhVzUwWlhKMllXeFRkR0Z5ZENBOUlEQXVNRHRjYmlBZ0lDQWdJQ0FnYkdWMElHTjFjbkpsYm5SVFlXMXdiR1VnUFNBeE8xeHVJQ0FnSUNBZ0lDQnNaWFFnYkdGemRGTmhiWEJzWlNBOUlFdGZVMUJNU1U1RlgxUkJRa3hGWDFOSldrVWdMU0F4TzF4dUlDQWdJQ0FnSUNCc1pYUWdaR2x6ZENBOUlEQXVNRHRjYmlBZ0lDQWdJQ0FnYkdWMElHZDFaWE56Um05eVZDQTlJREF1TUR0Y2JpQWdJQ0FnSUNBZ2JHVjBJR2x1YVhScFlXeFRiRzl3WlNBOUlEQXVNRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQm1iM0lnS0RzZ1kzVnljbVZ1ZEZOaGJYQnNaU0FoUFNCc1lYTjBVMkZ0Y0d4bElDWW1JSE5oYlhCc1pWWmhiSFZsYzF0amRYSnlaVzUwVTJGdGNHeGxYU0E4UFNCaFdEc2dLeXRqZFhKeVpXNTBVMkZ0Y0d4bEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCcGJuUmxjblpoYkZOMFlYSjBJQ3M5SUV0ZlUwRk5VRXhGWDFOVVJWQmZVMGxhUlR0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdMUzFqZFhKeVpXNTBVMkZ0Y0d4bE8xeHVJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdaR2x6ZENBOUlDaGhXQ0F0SUhOaGJYQnNaVlpoYkhWbGMxdGpkWEp5Wlc1MFUyRnRjR3hsWFNrZ0x5QW9jMkZ0Y0d4bFZtRnNkV1Z6VzJOMWNuSmxiblJUWVcxd2JHVXJNVjBnTFNCellXMXdiR1ZXWVd4MVpYTmJZM1Z5Y21WdWRGTmhiWEJzWlYwcE8xeHVJQ0FnSUNBZ0lDQm5kV1Z6YzBadmNsUWdQU0JwYm5SbGNuWmhiRk4wWVhKMElDc2daR2x6ZENBcUlFdGZVMEZOVUV4RlgxTlVSVkJmVTBsYVJUdGNiaUFnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJR2x1YVhScFlXeFRiRzl3WlNBOUlHZGxkRk5zYjNCbEtHZDFaWE56Um05eVZDd2diVmd4TENCdFdESXBPMXh1SUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnTHk4Z1NXWWdjMnh2Y0dVZ2FYTWdaM0psWVhSbGNpQjBhR0Z1SUcxcGJseHVJQ0FnSUNBZ0lDQnBaaUFvYVc1cGRHbGhiRk5zYjNCbElENDlJRTVGVjFSUFRsOU5TVTVmVTB4UFVFVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCdVpYZDBiMjVTWVhCb2MyOXVTWFJsY21GMFpTaGhXQ3dnWjNWbGMzTkdiM0pVS1R0Y2JpQWdJQ0FnSUNBZ0x5OGdVMnh2Y0dVZ2FYTWdaWEYxWVd3Z2RHOGdiV2x1WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0JwWmlBb2FXNXBkR2xoYkZOc2IzQmxJRDA5UFNBd0xqQXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCbmRXVnpjMFp2Y2xRN1hHNGdJQ0FnSUNBZ0lDOHZJRk5zYjNCbElHbHpJR3hsYzNNZ2RHaGhiaUJ0YVc1Y2JpQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQmlhVzVoY25sVGRXSmthWFpwWkdVb1lWZ3NJR2x1ZEdWeWRtRnNVM1JoY25Rc0lHbHVkR1Z5ZG1Gc1UzUmhjblFnS3lCTFgxTkJUVkJNUlY5VFZFVlFYMU5KV2tVcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZUdGNibHh1SUNBZ0lHTnZibk4wSUhCeVpXTnZiWEIxZEdVZ1BTQW9LU0E5UGlCN1hHNGdJQ0FnSUNBZ0lGOXdjbVZqYjIxd2RYUmxaQ0E5SUhSeWRXVTdYRzRnSUNBZ0lDQWdJR2xtSUNodFdERWdJVDBnYlZreElIeDhJRzFZTWlBaFBTQnRXVElwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR05oYkdOVFlXMXdiR1ZXWVd4MVpYTW9LVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDA3WEc1Y2JpQWdJQ0JqYjI1emRDQnlaWE52YkhabGNpQTlJQ2hoV0NrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0JzWlhRZ2NtVjBkWEp1Vm1Gc2RXVTdYRzVjYmlBZ0lDQWdJQ0FnYVdZZ0tDRmZjSEpsWTI5dGNIVjBaV1FwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEJ5WldOdmJYQjFkR1VvS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdMeThnU1dZZ2JHbHVaV0Z5SUdkeVlXUnBaVzUwTENCeVpYUjFjbTRnV0NCaGN5QlVYRzRnSUNBZ0lDQWdJR2xtSUNodFdERWdQVDA5SUcxWk1TQW1KaUJ0V0RJZ1BUMDlJRzFaTWlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVWbUZzZFdVZ1BTQmhXRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQXZMeUJKWmlCaGRDQnpkR0Z5ZEN3Z2NtVjBkWEp1SURCY2JpQWdJQ0FnSUNBZ2ZTQmxiSE5sSUdsbUlDaGhXQ0E5UFQwZ01Da2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1Vm1Gc2RXVWdQU0F3TzF4dUlDQWdJQ0FnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJQzh2SUVsbUlHRjBJR1Z1WkN3Z2NtVjBkWEp1SURGY2JpQWdJQ0FnSUNBZ2ZTQmxiSE5sSUdsbUlDaGhXQ0E5UFQwZ01Ta2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1Vm1Gc2RXVWdQU0F4TzF4dVhHNGdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNVdZV3gxWlNBOUlHTmhiR05DWlhwcFpYSW9aMlYwVkVadmNsZ29ZVmdwTENCdFdURXNJRzFaTWlrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnlaWFIxY201V1lXeDFaVHRjYmlBZ0lDQjlPMXh1WEc0Z0lDQWdjbVYwZFhKdUlISmxjMjlzZG1WeU8xeHVmVnh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9lYXNpbmcvY3JlYXRlLWJlemllci5qc1xuICoqIG1vZHVsZSBpZCA9IDUxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vKlxuICAgIERldGVjdCBhbmQgbG9hZCBhbiBhcHByb3ByaWF0ZSBjbG9jayBzZXR0aW5nIGZvciB0aGUgZW52aXJvbm1lbnRcbiovXG5cbnZhciBoYXNSQUYgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID8gdHJ1ZSA6IGZhbHNlO1xuXG52YXIgdGljayA9IHZvaWQgMDtcblxuaWYgKGhhc1JBRikge1xuICAgIHRpY2sgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spO1xuICAgIH07XG59IGVsc2Uge1xuICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8qXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgRm9yIElFOC85IEZsaW5zdG9uZXMgYW5kIG5vbi1icm93c2VyIGVudmlyb25tZW50c1xuICAgICAgICAgICAgIFRha2VuIGZyb20gUGF1bCBJcmlzaC4gV2UndmUgc3RyaXBwZWQgb3V0IGNhbmNlbEFuaW1hdGlvbkZyYW1lIGNoZWNrcyBiZWNhdXNlIHdlIGRvbid0IGZveCB3aXRoIHRoYXRcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaHR0cDovL3BhdWxpcmlzaC5jb20vMjAxMS9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWFuaW1hdGluZy9cbiAgICAgICAgICAgIGh0dHA6Ly9teS5vcGVyYS5jb20vZW1vbGxlci9ibG9nLzIwMTEvMTIvMjAvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1lci1hbmltYXRpbmdcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbCBieSBFcmlrIE3DtmxsZXIuIGZpeGVzIGZyb20gUGF1bCBJcmlzaCBhbmQgVGlubyBaaWpkZWxcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgIE1JVCBsaWNlbnNlXG4gICAgICAgICovXG4gICAgICAgIHZhciBsYXN0VGltZSA9IDA7XG5cbiAgICAgICAgdGljayA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICB2YXIgdGltZVRvQ2FsbCA9IE1hdGgubWF4KDAsIDE2IC0gKGN1cnJlbnRUaW1lIC0gbGFzdFRpbWUpKTtcblxuICAgICAgICAgICAgbGFzdFRpbWUgPSBjdXJyZW50VGltZSArIHRpbWVUb0NhbGw7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhsYXN0VGltZSk7XG4gICAgICAgICAgICB9LCB0aW1lVG9DYWxsKTtcbiAgICAgICAgfTtcbiAgICB9KSgpO1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSB0aWNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkwWVhOckwzUnBZMnN1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenRCUVVsQkxFbEJRVTBzVTBGQlV5eFBRVUZSTEUxQlFWQXNTMEZCYTBJc1YwRkJiRUlzU1VGQmFVTXNUMEZCVHl4eFFrRkJVQ3hIUVVGblF5eEpRVUZzUlN4SFFVRjVSU3hMUVVGNlJUczdRVUZGWml4SlFVRkpMR0ZCUVVvN08wRkJSVUVzU1VGQlNTeE5RVUZLTEVWQlFWazdRVUZEVWl4WFFVRlBMRlZCUVVNc1VVRkJSRHRsUVVGakxFOUJRVThzY1VKQlFWQXNRMEZCTmtJc1VVRkJOMEk3UzBGQlpDeERRVVJETzBOQlFWb3NUVUZIVHpzN096czdPenM3T3pzN096czdPMEZCWlVnc1dVRkJTU3hYUVVGWExFTkJRVmc3TzBGQlJVb3NaVUZCVHl4VlFVRkRMRkZCUVVRc1JVRkJZenRCUVVOcVFpeG5Ra0ZCVFN4alFVRmpMRWxCUVVrc1NVRkJTaXhIUVVGWExFOUJRVmdzUlVGQlpDeERRVVJYTzBGQlJXcENMR2RDUVVGTkxHRkJRV0VzUzBGQlN5eEhRVUZNTEVOQlFWTXNRMEZCVkN4RlFVRlpMRTFCUVUwc1kwRkJZeXhSUVVGa0xFTkJRVTRzUTBGQmVrSXNRMEZHVnpzN1FVRkpha0lzZFVKQlFWY3NZMEZCWXl4VlFVRmtMRU5CU2swN08wRkJUV3BDTEhWQ1FVRlhPM1ZDUVVGTkxGTkJRVk1zVVVGQlZEdGhRVUZPTEVWQlFUQkNMRlZCUVhKRExFVkJUbWxDTzFOQlFXUTdVMEZxUWtvN1EwRklVRHM3YTBKQk9FSmxJaXdpWm1sc1pTSTZJblJwWTJzdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUXZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lMeXBjYmlBZ0lDQkVaWFJsWTNRZ1lXNWtJR3h2WVdRZ1lXNGdZWEJ3Y205d2NtbGhkR1VnWTJ4dlkyc2djMlYwZEdsdVp5Qm1iM0lnZEdobElHVnVkbWx5YjI1dFpXNTBYRzRxTDF4dVhHNWpiMjV6ZENCb1lYTlNRVVlnUFNBb2RIbHdaVzltSUhkcGJtUnZkeUFoUFQwZ0ozVnVaR1ZtYVc1bFpDY2dKaVlnZDJsdVpHOTNMbkpsY1hWbGMzUkJibWx0WVhScGIyNUdjbUZ0WlNrZ1B5QjBjblZsSURvZ1ptRnNjMlU3WEc1Y2JteGxkQ0IwYVdOck8xeHVYRzVwWmlBb2FHRnpVa0ZHS1NCN1hHNGdJQ0FnZEdsamF5QTlJQ2hqWVd4c1ltRmpheWtnUFQ0Z2QybHVaRzkzTG5KbGNYVmxjM1JCYm1sdFlYUnBiMjVHY21GdFpTaGpZV3hzWW1GamF5azdYRzVjYm4wZ1pXeHpaU0I3WEc0Z0lDQWdMeXBjYmlBZ0lDQWdJQ0FnY21WeGRXVnpkRUZ1YVcxaGRHbHZia1p5WVcxbElIQnZiSGxtYVd4c1hHNGdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQkdiM0lnU1VVNEx6a2dSbXhwYm5OMGIyNWxjeUJoYm1RZ2JtOXVMV0p5YjNkelpYSWdaVzUyYVhKdmJtMWxiblJ6WEc1Y2JpQWdJQ0FnSUNBZ1ZHRnJaVzRnWm5KdmJTQlFZWFZzSUVseWFYTm9MaUJYWlNkMlpTQnpkSEpwY0hCbFpDQnZkWFFnWTJGdVkyVnNRVzVwYldGMGFXOXVSbkpoYldVZ1kyaGxZMnR6SUdKbFkyRjFjMlVnZDJVZ1pHOXVKM1FnWm05NElIZHBkR2dnZEdoaGRGeHVJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdhSFIwY0RvdkwzQmhkV3hwY21semFDNWpiMjB2TWpBeE1TOXlaWEYxWlhOMFlXNXBiV0YwYVc5dVpuSmhiV1V0Wm05eUxYTnRZWEowTFdGdWFXMWhkR2x1Wnk5Y2JpQWdJQ0FnSUNBZ2FIUjBjRG92TDIxNUxtOXdaWEpoTG1OdmJTOWxiVzlzYkdWeUwySnNiMmN2TWpBeE1TOHhNaTh5TUM5eVpYRjFaWE4wWVc1cGJXRjBhVzl1Wm5KaGJXVXRabTl5TFhOdFlYSjBMV1Z5TFdGdWFXMWhkR2x1WjF4dUlDQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lISmxjWFZsYzNSQmJtbHRZWFJwYjI1R2NtRnRaU0J3YjJ4NVptbHNiQ0JpZVNCRmNtbHJJRTNEdG14c1pYSXVJR1pwZUdWeklHWnliMjBnVUdGMWJDQkpjbWx6YUNCaGJtUWdWR2x1YnlCYWFXcGtaV3hjYmlBZ0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNCTlNWUWdiR2xqWlc1elpWeHVJQ0FnSUNvdlhHNGdJQ0FnYkdWMElHeGhjM1JVYVcxbElEMGdNRHRjYmx4dUlDQWdJSFJwWTJzZ1BTQW9ZMkZzYkdKaFkyc3BJRDArSUh0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnWTNWeWNtVnVkRlJwYldVZ1BTQnVaWGNnUkdGMFpTZ3BMbWRsZEZScGJXVW9LVHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdkR2x0WlZSdlEyRnNiQ0E5SUUxaGRHZ3ViV0Y0S0RBc0lERTJJQzBnS0dOMWNuSmxiblJVYVcxbElDMGdiR0Z6ZEZScGJXVXBLVHRjYmx4dUlDQWdJQ0FnSUNCc1lYTjBWR2x0WlNBOUlHTjFjbkpsYm5SVWFXMWxJQ3NnZEdsdFpWUnZRMkZzYkR0Y2JseHVJQ0FnSUNBZ0lDQnpaWFJVYVcxbGIzVjBLQ2dwSUQwK0lHTmhiR3hpWVdOcktHeGhjM1JVYVcxbEtTd2dkR2x0WlZSdlEyRnNiQ2s3WEc0Z0lDQWdmVHRjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2RHbGphenNpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdGFzay90aWNrLmpzXG4gKiogbW9kdWxlIGlkID0gNTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLy8gW2ludF06IEluY3JlbWVudGVkIGZvciBlYWNoIG5ldyBydW5uaW5nIHRhc2tcbnZhciBjdXJyZW50VGFza0lkID0gMDtcblxuLy8gW2ludF06IE51bWJlciBvZiBhbGwgcnVubmluZyB0YXNrZXNcbnZhciB0b3RhbFJ1bm5pbmdDb3VudCA9IDA7XG5cbi8vIFtpbnRdOiBOdW1iZXIgb2YgcnVubmluZyB0YXNrZXMgZXhjbHVkaW5nIGJhY2tncm91bmQgdGFza2VzXG52YXIgbm9uQmFja2dyb3VuZFJ1bm5pbmdDb3VudCA9IDA7XG5cbi8vIFthcnJheV06IEFycmF5IG9mIHJ1bm5pbmcgdGFzayBJRHNcbnZhciBydW5uaW5nSWRzID0gW107XG5cbi8vIFtvYmplY3RdOiBNYXAgb2YgcnVubmluZyB0YXNrZXNcbnZhciBhY3RpdmVUYXNrcyA9IHt9O1xuXG4vLyBbYXJyYXldOiBBcnJheSBvZiB0YXNrIElEcyBxdWV1ZWQgZm9yIGFjdGl2YXRpb25cbnZhciBhY3RpdmF0ZVF1ZXVlID0gW107XG5cbi8vIFthcnJheV06IEFycmF5IG9mIHRhc2sgSURzIHF1ZXVlZCBmb3IgZGVhY3RpdmF0aW9uXG52YXIgZGVhY3RpdmF0ZVF1ZXVlID0gW107XG5cbi8qXG4gICAgVXBkYXRlIGFjdGl2YXRlL2RlYWN0aXZhdGUgcXVldWVzXG5cbiAgICBAcGFyYW0gW251bWJlcl1cbiAgICBAcGFyYW0gW2FycmF5XVxuICAgIEBwYXJhbSBbYXJyYXldXG4qL1xudmFyIHVwZGF0ZVF1ZXVlcyA9IGZ1bmN0aW9uIChpZCwgaW5MaXN0LCBvdXRMaXN0KSB7XG4gICAgdmFyIGluUG9zaXRpb24gPSBpbkxpc3QuaW5kZXhPZihpZCk7XG4gICAgdmFyIG91dFBvc2l0aW9uID0gb3V0TGlzdC5pbmRleE9mKGlkKTtcblxuICAgIGlmIChpblBvc2l0aW9uID09PSAtMSkge1xuICAgICAgICBpbkxpc3QucHVzaChpZCk7XG4gICAgfVxuXG4gICAgaWYgKG91dFBvc2l0aW9uID4gLTEpIHtcbiAgICAgICAgb3V0TGlzdC5zcGxpY2Uob3V0UG9zaXRpb24sIDEpO1xuICAgIH1cbn07XG5cbi8qXG4gICAgVXBkYXRlIHJ1bm5pbmdcblxuICAgIFtib29sZWFuXTogYHRydWVgIHRvIGFkZFxuICAgIFtib29sZWFuXTogYHRydWVgIGlmIGxhenlcbiovXG52YXIgdXBkYXRlUnVubmluZ0NvdW50ID0gZnVuY3Rpb24gKGFkZCwgaXNMYXp5KSB7XG4gICAgdmFyIG1vZGlmeSA9IGFkZCA/IDEgOiAtMTtcblxuICAgIHRvdGFsUnVubmluZ0NvdW50ICs9IG1vZGlmeTtcblxuICAgIGlmICghaXNMYXp5KSB7XG4gICAgICAgIG5vbkJhY2tncm91bmRSdW5uaW5nQ291bnQgKz0gbW9kaWZ5O1xuICAgIH1cbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBhY3RpdmVUYXNrczogYWN0aXZlVGFza3MsXG5cbiAgICAvLyBBY3RpdmF0ZSBhIHRhc2tcbiAgICBhY3RpdmF0ZTogZnVuY3Rpb24gKGlkLCB0YXNrKSB7XG4gICAgICAgIGFjdGl2ZVRhc2tzW2lkXSA9IHRhc2s7XG4gICAgICAgIHRhc2suaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICB1cGRhdGVRdWV1ZXMoaWQsIGFjdGl2YXRlUXVldWUsIGRlYWN0aXZhdGVRdWV1ZSk7XG5cbiAgICAgICAgaWYgKHRhc2sub25BY3RpdmF0ZSkge1xuICAgICAgICAgICAgdGFzay5vbkFjdGl2YXRlKHRhc2spO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRhc2sub25BY3RpdmF0ZU9uY2UpIHtcbiAgICAgICAgICAgIHRhc2sub25BY3RpdmF0ZU9uY2UodGFzayk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gRGVhY3RpdmF0ZSBhIHRhc2tcbiAgICBkZWFjdGl2YXRlOiBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgdmFyIHRhc2sgPSBhY3RpdmVUYXNrc1tpZF07XG5cbiAgICAgICAgaWYgKHRhc2spIHtcbiAgICAgICAgICAgIHVwZGF0ZVF1ZXVlcyhpZCwgZGVhY3RpdmF0ZVF1ZXVlLCBhY3RpdmF0ZVF1ZXVlKTtcbiAgICAgICAgICAgIHRhc2suaXNBY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKHRhc2sub25EZWFjdGl2YXRlKSB7XG4gICAgICAgICAgICAgICAgdGFzay5vbkRlYWN0aXZhdGUodGFzayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gTnVtYmVyIGJhY2tncm91bmQgdGFza2VzXG4gICAgZ2V0Tm9uQmFja2dyb3VuZFJ1bm5pbmdDb3VudDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbm9uQmFja2dyb3VuZFJ1bm5pbmdDb3VudDtcbiAgICB9LFxuXG4gICAgLy8gSW5jcmVtZW50IGN1cnJlbnQgdGFzayBJRCBhbmQgcmV0dXJuXG4gICAgZ2V0VGFza0lkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjdXJyZW50VGFza0lkKys7XG4gICAgfSxcblxuICAgIC8vIFJlc29sdmUgYWN0aXZhdGUvZGVhY3RpdmF0ZSB0YXNrZXMgYW5kIHJldHVybiBhY3RpdmUgaWRzXG4gICAgZ2V0QWN0aXZlSWRzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8qXG4gICAgICAgICAgICB0YXNrIGRlYWN0aXZhdGUgcXVldWVcbiAgICAgICAgKi9cbiAgICAgICAgdmFyIGRlYWN0aXZhdGVRdWV1ZUxlbmd0aCA9IGRlYWN0aXZhdGVRdWV1ZS5sZW5ndGg7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkZWFjdGl2YXRlUXVldWVMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGlkID0gZGVhY3RpdmF0ZVF1ZXVlW2ldO1xuICAgICAgICAgICAgdmFyIGFjdGl2ZUlkSW5kZXggPSBydW5uaW5nSWRzLmluZGV4T2YoaWQpO1xuICAgICAgICAgICAgdmFyIHRhc2sgPSBhY3RpdmVUYXNrc1tpZF07XG5cbiAgICAgICAgICAgIC8vIElmIHRoaXMgaXMgYSBydW5uaW5nIHRhc2ssIGRlYWN0aXZhdGVcbiAgICAgICAgICAgIGlmIChhY3RpdmVJZEluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICBydW5uaW5nSWRzLnNwbGljZShhY3RpdmVJZEluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVSdW5uaW5nQ291bnQoZmFsc2UsIHRhc2suaXNMYXp5KTtcbiAgICAgICAgICAgICAgICBkZWxldGUgYWN0aXZlVGFza3NbaWRdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLypcbiAgICAgICAgICAgIEVtcHR5IGRlYWN0aXZhdGUgcXVldWUuIFdlIHVzZSBgQXJyYXkuc3BsaWNlYCBiZWNhdXNlIGl0IGRvZXNuJ3RcbiAgICAgICAgICAgIHdvcmtzIG9uIHRoZSBvcmlnaW5hbCBhcnJheSBzbyB3ZSBkb24ndCBoYXZlIHRvIGdhcmJhZ2UgY29sbGVjdCBhbnl0aGluZ1xuICAgICAgICAqL1xuICAgICAgICBkZWFjdGl2YXRlUXVldWUuc3BsaWNlKDAsIGRlYWN0aXZhdGVRdWV1ZUxlbmd0aCk7XG5cbiAgICAgICAgLypcbiAgICAgICAgICAgIHRhc2sgYWN0aXZhdGUgcXVldWVcbiAgICAgICAgKi9cbiAgICAgICAgdmFyIGFjdGl2YXRlUXVldWVMZW5ndGggPSBhY3RpdmF0ZVF1ZXVlLmxlbmd0aDtcblxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYWN0aXZhdGVRdWV1ZUxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIF9pZCA9IGFjdGl2YXRlUXVldWVbX2ldO1xuICAgICAgICAgICAgdmFyIF9hY3RpdmVJZEluZGV4ID0gcnVubmluZ0lkcy5pbmRleE9mKF9pZCk7XG4gICAgICAgICAgICB2YXIgX3Rhc2sgPSBhY3RpdmVUYXNrc1tfaWRdO1xuXG4gICAgICAgICAgICAvLyBJZiB0YXNrIGlzbid0IGFscmVhZHkgcnVubmluZywgYWN0aXZhdGVcbiAgICAgICAgICAgIGlmIChfYWN0aXZlSWRJbmRleCA9PT0gLTEgJiYgX3Rhc2spIHtcbiAgICAgICAgICAgICAgICBpZiAoX3Rhc2suaXNQcmlvcml0eSkge1xuICAgICAgICAgICAgICAgICAgICBydW5uaW5nSWRzLnVuc2hpZnQoX2lkKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBydW5uaW5nSWRzLnB1c2goX2lkKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoX3Rhc2sub25BY3RpdmF0ZUxvb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgX3Rhc2sub25BY3RpdmF0ZUxvb3AoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB1cGRhdGVSdW5uaW5nQ291bnQodHJ1ZSwgX3Rhc2suaXNMYXp5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGFjdGl2YXRlUXVldWUuc3BsaWNlKDAsIGFjdGl2YXRlUXVldWVMZW5ndGgpO1xuXG4gICAgICAgIHJldHVybiBydW5uaW5nSWRzO1xuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTBZWE5yTDIxaGJtRm5aWEl1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dEJRVU5CTEVsQlFVa3NaMEpCUVdkQ0xFTkJRV2hDT3pzN1FVRkhTaXhKUVVGSkxHOUNRVUZ2UWl4RFFVRndRanM3TzBGQlIwb3NTVUZCU1N3MFFrRkJORUlzUTBGQk5VSTdPenRCUVVkS0xFbEJRVTBzWVVGQllTeEZRVUZpT3pzN1FVRkhUaXhKUVVGTkxHTkJRV01zUlVGQlpEczdPMEZCUjA0c1NVRkJUU3huUWtGQlowSXNSVUZCYUVJN096dEJRVWRPTEVsQlFVMHNhMEpCUVd0Q0xFVkJRV3hDT3pzN096czdPenM3UVVGVFRpeEpRVUZOTEdWQlFXVXNWVUZCUXl4RlFVRkVMRVZCUVVzc1RVRkJUQ3hGUVVGaExFOUJRV0lzUlVGQmVVSTdRVUZETVVNc1VVRkJUU3hoUVVGaExFOUJRVThzVDBGQlVDeERRVUZsTEVWQlFXWXNRMEZCWWl4RFFVUnZRenRCUVVVeFF5eFJRVUZOTEdOQlFXTXNVVUZCVVN4UFFVRlNMRU5CUVdkQ0xFVkJRV2hDTEVOQlFXUXNRMEZHYjBNN08wRkJTVEZETEZGQlFVa3NaVUZCWlN4RFFVRkRMRU5CUVVRc1JVRkJTVHRCUVVOdVFpeGxRVUZQTEVsQlFWQXNRMEZCV1N4RlFVRmFMRVZCUkcxQ08wdEJRWFpDT3p0QlFVbEJMRkZCUVVrc1kwRkJZeXhEUVVGRExFTkJRVVFzUlVGQlNUdEJRVU5zUWl4blFrRkJVU3hOUVVGU0xFTkJRV1VzVjBGQlppeEZRVUUwUWl4RFFVRTFRaXhGUVVSclFqdExRVUYwUWp0RFFWSnBRanM3T3pzN096czdRVUZ0UW5KQ0xFbEJRVTBzY1VKQlFYRkNMRlZCUVVNc1IwRkJSQ3hGUVVGTkxFMUJRVTRzUlVGQmFVSTdRVUZEZUVNc1VVRkJUU3hUUVVGVExFMUJRVTBzUTBGQlRpeEhRVUZWTEVOQlFVTXNRMEZCUkN4RFFVUmxPenRCUVVkNFF5eDVRa0ZCY1VJc1RVRkJja0lzUTBGSWQwTTdPMEZCUzNoRExGRkJRVWtzUTBGQlF5eE5RVUZFTEVWQlFWTTdRVUZEVkN4eFEwRkJOa0lzVFVGQk4wSXNRMEZFVXp0TFFVRmlPME5CVEhWQ096dHJRa0ZWV2p0QlFVTllMRFJDUVVSWE96czdRVUZKV0N4alFVRlZMRlZCUVVNc1JVRkJSQ3hGUVVGTExFbEJRVXdzUlVGQll6dEJRVU53UWl4dlFrRkJXU3hGUVVGYUxFbEJRV3RDTEVsQlFXeENMRU5CUkc5Q08wRkJSWEJDTEdGQlFVc3NVVUZCVEN4SFFVRm5RaXhKUVVGb1FpeERRVVp2UWp0QlFVZHdRaXh4UWtGQllTeEZRVUZpTEVWQlFXbENMR0ZCUVdwQ0xFVkJRV2RETEdWQlFXaERMRVZCU0c5Q096dEJRVXR3UWl4WlFVRkpMRXRCUVVzc1ZVRkJUQ3hGUVVGcFFqdEJRVU5xUWl4cFFrRkJTeXhWUVVGTUxFTkJRV2RDTEVsQlFXaENMRVZCUkdsQ08xTkJRWEpDT3p0QlFVbEJMRmxCUVVrc1MwRkJTeXhqUVVGTUxFVkJRWEZDTzBGQlEzSkNMR2xDUVVGTExHTkJRVXdzUTBGQmIwSXNTVUZCY0VJc1JVRkVjVUk3VTBGQmVrSTdTMEZVVFRzN08wRkJaVllzWjBKQlFWa3NWVUZCUXl4RlFVRkVMRVZCUVZFN1FVRkRhRUlzV1VGQlRTeFBRVUZQTEZsQlFWa3NSVUZCV2l4RFFVRlFMRU5CUkZVN08wRkJSMmhDTEZsQlFVa3NTVUZCU2l4RlFVRlZPMEZCUTA0c2VVSkJRV0VzUlVGQllpeEZRVUZwUWl4bFFVRnFRaXhGUVVGclF5eGhRVUZzUXl4RlFVUk5PMEZCUlU0c2FVSkJRVXNzVVVGQlRDeEhRVUZuUWl4TFFVRm9RaXhEUVVaTk96dEJRVWxPTEdkQ1FVRkpMRXRCUVVzc1dVRkJUQ3hGUVVGdFFqdEJRVU51UWl4eFFrRkJTeXhaUVVGTUxFTkJRV3RDTEVsQlFXeENMRVZCUkcxQ08yRkJRWFpDTzFOQlNrbzdTMEZJVVRzN08wRkJZMW9zYTBOQlFUaENPMlZCUVUwN1MwRkJUanM3TzBGQlJ6bENMR1ZCUVZjN1pVRkJUVHRMUVVGT096czdRVUZIV0N4clFrRkJZeXhaUVVGTk96czdPMEZCU1doQ0xGbEJRVTBzZDBKQlFYZENMR2RDUVVGblFpeE5RVUZvUWl4RFFVcGtPenRCUVUxb1FpeGhRVUZMTEVsQlFVa3NTVUZCU1N4RFFVRktMRVZCUVU4c1NVRkJTU3h4UWtGQlNpeEZRVUV5UWl4SFFVRXpReXhGUVVGblJEdEJRVU0xUXl4blFrRkJUU3hMUVVGTExHZENRVUZuUWl4RFFVRm9RaXhEUVVGTUxFTkJSSE5ETzBGQlJUVkRMR2RDUVVGTkxHZENRVUZuUWl4WFFVRlhMRTlCUVZnc1EwRkJiVUlzUlVGQmJrSXNRMEZCYUVJc1EwRkdjME03UVVGSE5VTXNaMEpCUVUwc1QwRkJUeXhaUVVGWkxFVkJRVm9zUTBGQlVEczdPMEZCU0hORExHZENRVTE0UXl4blFrRkJaMElzUTBGQlF5eERRVUZFTEVWQlFVazdRVUZEY0VJc01rSkJRVmNzVFVGQldDeERRVUZyUWl4aFFVRnNRaXhGUVVGcFF5eERRVUZxUXl4RlFVUnZRanRCUVVWd1FpeHRRMEZCYlVJc1MwRkJia0lzUlVGQk1FSXNTMEZCU3l4TlFVRk1MRU5CUVRGQ0xFTkJSbTlDTzBGQlIzQkNMSFZDUVVGUExGbEJRVmtzUlVGQldpeERRVUZRTEVOQlNHOUNPMkZCUVhoQ08xTkJUa283T3pzN096dEJRVTVuUWl4MVFrRjFRbWhDTEVOQlFXZENMRTFCUVdoQ0xFTkJRWFZDTEVOQlFYWkNMRVZCUVRCQ0xIRkNRVUV4UWpzN096czdRVUYyUW1kQ0xGbEJORUpXTEhOQ1FVRnpRaXhqUVVGakxFMUJRV1FzUTBFMVFsbzdPMEZCT0VKb1FpeGhRVUZMTEVsQlFVa3NTMEZCU1N4RFFVRktMRVZCUVU4c1MwRkJTU3h0UWtGQlNpeEZRVUY1UWl4SlFVRjZReXhGUVVFNFF6dEJRVU14UXl4blFrRkJUU3hOUVVGTExHTkJRV01zUlVGQlpDeERRVUZNTEVOQlJHOURPMEZCUlRGRExHZENRVUZOTEdsQ1FVRm5RaXhYUVVGWExFOUJRVmdzUTBGQmJVSXNSMEZCYmtJc1EwRkJhRUlzUTBGR2IwTTdRVUZITVVNc1owSkJRVTBzVVVGQlR5eFpRVUZaTEVkQlFWb3NRMEZCVURzN08wRkJTRzlETEdkQ1FVMTBReXh0UWtGQmEwSXNRMEZCUXl4RFFVRkVMRWxCUVUwc1MwRkJlRUlzUlVGQk9FSTdRVUZET1VJc2IwSkJRVWtzVFVGQlN5eFZRVUZNTEVWQlFXbENPMEZCUTJwQ0xDdENRVUZYTEU5QlFWZ3NRMEZCYlVJc1IwRkJia0lzUlVGRWFVSTdhVUpCUVhKQ0xFMUJSVTg3UVVGRFNDd3JRa0ZCVnl4SlFVRllMRU5CUVdkQ0xFZEJRV2hDTEVWQlJFYzdhVUpCUmxBN08wRkJUVUVzYjBKQlFVa3NUVUZCU3l4alFVRk1MRVZCUVhGQ08wRkJRM0pDTERCQ1FVRkxMR05CUVV3c1IwRkVjVUk3YVVKQlFYcENPenRCUVVsQkxHMURRVUZ0UWl4SlFVRnVRaXhGUVVGNVFpeE5RVUZMTEUxQlFVd3NRMEZCZWtJc1EwRllPRUk3WVVGQmJFTTdVMEZPU2pzN1FVRnhRa0VzYzBKQlFXTXNUVUZCWkN4RFFVRnhRaXhEUVVGeVFpeEZRVUYzUWl4dFFrRkJlRUlzUlVGdVJHZENPenRCUVhGRWFFSXNaVUZCVHl4VlFVRlFMRU5CY2tSblFqdExRVUZPSWl3aVptbHNaU0k2SW0xaGJtRm5aWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUx5OGdXMmx1ZEYwNklFbHVZM0psYldWdWRHVmtJR1p2Y2lCbFlXTm9JRzVsZHlCeWRXNXVhVzVuSUhSaGMydGNibXhsZENCamRYSnlaVzUwVkdGemEwbGtJRDBnTUR0Y2JseHVMeThnVzJsdWRGMDZJRTUxYldKbGNpQnZaaUJoYkd3Z2NuVnVibWx1WnlCMFlYTnJaWE5jYm14bGRDQjBiM1JoYkZKMWJtNXBibWREYjNWdWRDQTlJREE3WEc1Y2JpOHZJRnRwYm5SZE9pQk9kVzFpWlhJZ2IyWWdjblZ1Ym1sdVp5QjBZWE5yWlhNZ1pYaGpiSFZrYVc1bklHSmhZMnRuY205MWJtUWdkR0Z6YTJWelhHNXNaWFFnYm05dVFtRmphMmR5YjNWdVpGSjFibTVwYm1kRGIzVnVkQ0E5SURBN1hHNWNiaTh2SUZ0aGNuSmhlVjA2SUVGeWNtRjVJRzltSUhKMWJtNXBibWNnZEdGemF5QkpSSE5jYm1OdmJuTjBJSEoxYm01cGJtZEpaSE1nUFNCYlhUdGNibHh1THk4Z1cyOWlhbVZqZEYwNklFMWhjQ0J2WmlCeWRXNXVhVzVuSUhSaGMydGxjMXh1WTI5dWMzUWdZV04wYVhabFZHRnphM01nUFNCN2ZUdGNibHh1THk4Z1cyRnljbUY1WFRvZ1FYSnlZWGtnYjJZZ2RHRnpheUJKUkhNZ2NYVmxkV1ZrSUdadmNpQmhZM1JwZG1GMGFXOXVYRzVqYjI1emRDQmhZM1JwZG1GMFpWRjFaWFZsSUQwZ1cxMDdYRzVjYmk4dklGdGhjbkpoZVYwNklFRnljbUY1SUc5bUlIUmhjMnNnU1VSeklIRjFaWFZsWkNCbWIzSWdaR1ZoWTNScGRtRjBhVzl1WEc1amIyNXpkQ0JrWldGamRHbDJZWFJsVVhWbGRXVWdQU0JiWFR0Y2JseHVMeXBjYmlBZ0lDQlZjR1JoZEdVZ1lXTjBhWFpoZEdVdlpHVmhZM1JwZG1GMFpTQnhkV1YxWlhOY2JseHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVnh1SUNBZ0lFQndZWEpoYlNCYllYSnlZWGxkWEc0Z0lDQWdRSEJoY21GdElGdGhjbkpoZVYxY2Jpb3ZYRzVqYjI1emRDQjFjR1JoZEdWUmRXVjFaWE1nUFNBb2FXUXNJR2x1VEdsemRDd2diM1YwVEdsemRDa2dQVDRnZTF4dUlDQWdJR052Ym5OMElHbHVVRzl6YVhScGIyNGdQU0JwYmt4cGMzUXVhVzVrWlhoUFppaHBaQ2s3WEc0Z0lDQWdZMjl1YzNRZ2IzVjBVRzl6YVhScGIyNGdQU0J2ZFhSTWFYTjBMbWx1WkdWNFQyWW9hV1FwTzF4dVhHNGdJQ0FnYVdZZ0tHbHVVRzl6YVhScGIyNGdQVDA5SUMweEtTQjdYRzRnSUNBZ0lDQWdJR2x1VEdsemRDNXdkWE5vS0dsa0tUdGNiaUFnSUNCOVhHNWNiaUFnSUNCcFppQW9iM1YwVUc5emFYUnBiMjRnUGlBdE1Ta2dlMXh1SUNBZ0lDQWdJQ0J2ZFhSTWFYTjBMbk53YkdsalpTaHZkWFJRYjNOcGRHbHZiaXdnTVNrN1hHNGdJQ0FnZlZ4dWZUdGNibHh1THlwY2JpQWdJQ0JWY0dSaGRHVWdjblZ1Ym1sdVoxeHVYRzRnSUNBZ1cySnZiMnhsWVc1ZE9pQmdkSEoxWldBZ2RHOGdZV1JrWEc0Z0lDQWdXMkp2YjJ4bFlXNWRPaUJnZEhKMVpXQWdhV1lnYkdGNmVWeHVLaTljYm1OdmJuTjBJSFZ3WkdGMFpWSjFibTVwYm1kRGIzVnVkQ0E5SUNoaFpHUXNJR2x6VEdGNmVTa2dQVDRnZTF4dUlDQWdJR052Ym5OMElHMXZaR2xtZVNBOUlHRmtaQ0EvSURFZ09pQXRNVHRjYmx4dUlDQWdJSFJ2ZEdGc1VuVnVibWx1WjBOdmRXNTBJQ3M5SUcxdlpHbG1lVHRjYmx4dUlDQWdJR2xtSUNnaGFYTk1ZWHA1S1NCN1hHNGdJQ0FnSUNBZ0lHNXZia0poWTJ0bmNtOTFibVJTZFc1dWFXNW5RMjkxYm5RZ0t6MGdiVzlrYVdaNU8xeHVJQ0FnSUgxY2JuMDdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJSHRjYmlBZ0lDQmhZM1JwZG1WVVlYTnJjeXhjYmx4dUlDQWdJQzh2SUVGamRHbDJZWFJsSUdFZ2RHRnphMXh1SUNBZ0lHRmpkR2wyWVhSbE9pQW9hV1FzSUhSaGMyc3BJRDArSUh0Y2JpQWdJQ0FnSUNBZ1lXTjBhWFpsVkdGemEzTmJhV1JkSUQwZ2RHRnphenRjYmlBZ0lDQWdJQ0FnZEdGemF5NXBjMEZqZEdsMlpTQTlJSFJ5ZFdVN1hHNGdJQ0FnSUNBZ0lIVndaR0YwWlZGMVpYVmxjeWhwWkN3Z1lXTjBhWFpoZEdWUmRXVjFaU3dnWkdWaFkzUnBkbUYwWlZGMVpYVmxLVHRjYmx4dUlDQWdJQ0FnSUNCcFppQW9kR0Z6YXk1dmJrRmpkR2wyWVhSbEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMFlYTnJMbTl1UVdOMGFYWmhkR1VvZEdGemF5azdYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCcFppQW9kR0Z6YXk1dmJrRmpkR2wyWVhSbFQyNWpaU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR0Z6YXk1dmJrRmpkR2wyWVhSbFQyNWpaU2gwWVhOcktUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMHNYRzVjYmlBZ0lDQXZMeUJFWldGamRHbDJZWFJsSUdFZ2RHRnphMXh1SUNBZ0lHUmxZV04wYVhaaGRHVTZJQ2hwWkNrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQjBZWE5ySUQwZ1lXTjBhWFpsVkdGemEzTmJhV1JkTzF4dVhHNGdJQ0FnSUNBZ0lHbG1JQ2gwWVhOcktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMWNHUmhkR1ZSZFdWMVpYTW9hV1FzSUdSbFlXTjBhWFpoZEdWUmRXVjFaU3dnWVdOMGFYWmhkR1ZSZFdWMVpTazdYRzRnSUNBZ0lDQWdJQ0FnSUNCMFlYTnJMbWx6UVdOMGFYWmxJRDBnWm1Gc2MyVTdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2gwWVhOckxtOXVSR1ZoWTNScGRtRjBaU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSaGMyc3ViMjVFWldGamRHbDJZWFJsS0hSaGMyc3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZTeGNibHh1SUNBZ0lDOHZJRTUxYldKbGNpQmlZV05yWjNKdmRXNWtJSFJoYzJ0bGMxeHVJQ0FnSUdkbGRFNXZia0poWTJ0bmNtOTFibVJTZFc1dWFXNW5RMjkxYm5RNklDZ3BJRDArSUc1dmJrSmhZMnRuY205MWJtUlNkVzV1YVc1blEyOTFiblFzWEc1Y2JpQWdJQ0F2THlCSmJtTnlaVzFsYm5RZ1kzVnljbVZ1ZENCMFlYTnJJRWxFSUdGdVpDQnlaWFIxY201Y2JpQWdJQ0JuWlhSVVlYTnJTV1E2SUNncElEMCtJR04xY25KbGJuUlVZWE5yU1dRckt5eGNibHh1SUNBZ0lDOHZJRkpsYzI5c2RtVWdZV04wYVhaaGRHVXZaR1ZoWTNScGRtRjBaU0IwWVhOclpYTWdZVzVrSUhKbGRIVnliaUJoWTNScGRtVWdhV1J6WEc0Z0lDQWdaMlYwUVdOMGFYWmxTV1J6T2lBb0tTQTlQaUI3WEc0Z0lDQWdJQ0FnSUM4cVhHNGdJQ0FnSUNBZ0lDQWdJQ0IwWVhOcklHUmxZV04wYVhaaGRHVWdjWFZsZFdWY2JpQWdJQ0FnSUNBZ0tpOWNiaUFnSUNBZ0lDQWdZMjl1YzNRZ1pHVmhZM1JwZG1GMFpWRjFaWFZsVEdWdVozUm9JRDBnWkdWaFkzUnBkbUYwWlZGMVpYVmxMbXhsYm1kMGFEdGNibHh1SUNBZ0lDQWdJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUdSbFlXTjBhWFpoZEdWUmRXVjFaVXhsYm1kMGFEc2dhU3NyS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQnBaQ0E5SUdSbFlXTjBhWFpoZEdWUmRXVjFaVnRwWFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElHRmpkR2wyWlVsa1NXNWtaWGdnUFNCeWRXNXVhVzVuU1dSekxtbHVaR1Y0VDJZb2FXUXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnZEdGemF5QTlJR0ZqZEdsMlpWUmhjMnR6VzJsa1hUdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdTV1lnZEdocGN5QnBjeUJoSUhKMWJtNXBibWNnZEdGemF5d2daR1ZoWTNScGRtRjBaVnh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLR0ZqZEdsMlpVbGtTVzVrWlhnZ1BpQXRNU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKMWJtNXBibWRKWkhNdWMzQnNhV05sS0dGamRHbDJaVWxrU1c1a1pYZ3NJREVwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhWd1pHRjBaVkoxYm01cGJtZERiM1Z1ZENobVlXeHpaU3dnZEdGemF5NXBjMHhoZW5rcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHUmxiR1YwWlNCaFkzUnBkbVZVWVhOcmMxdHBaRjA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBdktseHVJQ0FnSUNBZ0lDQWdJQ0FnUlcxd2RIa2daR1ZoWTNScGRtRjBaU0J4ZFdWMVpTNGdWMlVnZFhObElHQkJjbkpoZVM1emNHeHBZMlZnSUdKbFkyRjFjMlVnYVhRZ1pHOWxjMjRuZEZ4dUlDQWdJQ0FnSUNBZ0lDQWdkMjl5YTNNZ2IyNGdkR2hsSUc5eWFXZHBibUZzSUdGeWNtRjVJSE52SUhkbElHUnZiaWQwSUdoaGRtVWdkRzhnWjJGeVltRm5aU0JqYjJ4c1pXTjBJR0Z1ZVhSb2FXNW5YRzRnSUNBZ0lDQWdJQ292WEc0Z0lDQWdJQ0FnSUdSbFlXTjBhWFpoZEdWUmRXVjFaUzV6Y0d4cFkyVW9NQ3dnWkdWaFkzUnBkbUYwWlZGMVpYVmxUR1Z1WjNSb0tUdGNibHh1SUNBZ0lDQWdJQ0F2S2x4dUlDQWdJQ0FnSUNBZ0lDQWdkR0Z6YXlCaFkzUnBkbUYwWlNCeGRXVjFaVnh1SUNBZ0lDQWdJQ0FxTDF4dUlDQWdJQ0FnSUNCamIyNXpkQ0JoWTNScGRtRjBaVkYxWlhWbFRHVnVaM1JvSUQwZ1lXTjBhWFpoZEdWUmRXVjFaUzVzWlc1bmRHZzdYRzVjYmlBZ0lDQWdJQ0FnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCaFkzUnBkbUYwWlZGMVpYVmxUR1Z1WjNSb095QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElHbGtJRDBnWVdOMGFYWmhkR1ZSZFdWMVpWdHBYVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUdGamRHbDJaVWxrU1c1a1pYZ2dQU0J5ZFc1dWFXNW5TV1J6TG1sdVpHVjRUMllvYVdRcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdkR0Z6YXlBOUlHRmpkR2wyWlZSaGMydHpXMmxrWFR0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1NXWWdkR0Z6YXlCcGMyNG5kQ0JoYkhKbFlXUjVJSEoxYm01cGJtY3NJR0ZqZEdsMllYUmxYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9ZV04wYVhabFNXUkpibVJsZUNBOVBUMGdMVEVnSmlZZ2RHRnpheWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDaDBZWE5yTG1selVISnBiM0pwZEhrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY25WdWJtbHVaMGxrY3k1MWJuTm9hV1owS0dsa0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J5ZFc1dWFXNW5TV1J6TG5CMWMyZ29hV1FwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2gwWVhOckxtOXVRV04wYVhaaGRHVk1iMjl3S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJoYzJzdWIyNUJZM1JwZG1GMFpVeHZiM0FvS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjFjR1JoZEdWU2RXNXVhVzVuUTI5MWJuUW9kSEoxWlN3Z2RHRnpheTVwYzB4aGVua3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnWVdOMGFYWmhkR1ZSZFdWMVpTNXpjR3hwWTJVb01Dd2dZV04wYVhaaGRHVlJkV1YxWlV4bGJtZDBhQ2s3WEc1Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhKMWJtNXBibWRKWkhNN1hHNGdJQ0FnZlZ4dWZUdGNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdGFzay9tYW5hZ2VyLmpzXG4gKiogbW9kdWxlIGlkID0gNTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIiwiZmlsZSI6InBvcG1vdGlvbi5nbG9iYWwuanMifQ==