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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvY2FsYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQU9BLElBQU0sYUFBYTtBQUNmLE9BQUcsQ0FBSDtBQUNBLE9BQUcsQ0FBSDtBQUNBLE9BQUcsQ0FBSDtDQUhFOztBQU1OLElBQU0sYUFBYSxVQUFDLENBQUQsRUFBSSxDQUFKO1dBQVUsS0FBSyxHQUFMLENBQVMsSUFBSSxDQUFKO0NBQW5COzs7Ozs7Ozs7Ozs7QUFZWixJQUFNLHdCQUFRLFVBQUMsQ0FBRDtRQUFJLDBEQUFJO1dBQWUsaUJBQWlCLEtBQUssS0FBTCxDQUFXLEVBQUUsQ0FBRixHQUFNLEVBQUUsQ0FBRixFQUFLLEVBQUUsQ0FBRixHQUFNLEVBQUUsQ0FBRixDQUE3QztDQUF2Qjs7Ozs7Ozs7QUFRZCxJQUFNLDhDQUFtQixVQUFDLE9BQUQ7V0FBYSxVQUFVLEtBQUssRUFBTCxHQUFVLEdBQXBCO0NBQWI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0J6QixJQUFNLDBCQUFTLFVBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxRQUFQO1dBQW9CLElBQUssQ0FBQyxJQUFJLENBQUosQ0FBRCxHQUFVLFFBQVY7Q0FBekI7Ozs7Ozs7Ozs7O0FBV2YsSUFBTSw4QkFBVyxVQUFDLENBQUQsRUFBdUI7UUFBbkIsMERBQUksMEJBQWU7OztBQUUzQyxRQUFJLGtCQUFNLENBQU4sQ0FBSixFQUFjO0FBQ1YsZUFBTyxXQUFXLENBQVgsRUFBYyxDQUFkLENBQVA7OztBQURVLEtBQWQsTUFJTztBQUNILGdCQUFNLFNBQVMsV0FBVyxFQUFFLENBQUYsRUFBSyxFQUFFLENBQUYsQ0FBekIsQ0FESDtBQUVILGdCQUFNLFNBQVMsV0FBVyxFQUFFLENBQUYsRUFBSyxFQUFFLENBQUYsQ0FBekIsQ0FGSDtBQUdILGdCQUFNLFNBQVMsaUJBQUMsQ0FBTSxFQUFFLENBQUYsQ0FBUCxHQUFlLFdBQVcsRUFBRSxDQUFGLEVBQUssRUFBRSxDQUFGLENBQS9CLEdBQXNDLENBQXRDLENBSFo7O0FBS0gsbUJBQU8sS0FBSyxJQUFMLENBQVUsU0FBQyxRQUFVLEVBQVgsWUFBaUIsUUFBVSxFQUEzQixZQUFpQyxRQUFVLEVBQTNDLENBQWpCLENBTEc7U0FKUDtDQUZvQjs7Ozs7Ozs7Ozs7O0FBeUJqQixJQUFNLHNCQUFPLFVBQUMsUUFBRCxFQUFXLElBQVgsRUFBaUIsRUFBakIsRUFBcUIsSUFBckIsRUFBOEI7QUFDOUMsUUFBTSxrQkFBa0IsU0FBUyxRQUFULEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLENBQWxCLENBRHdDO0FBRTlDLFFBQU0sZ0JBQWdCLEtBQUssZUFBTCxDQUFoQixDQUZ3Qzs7QUFJOUMsV0FBTyxxQkFBcUIsYUFBckIsRUFBb0MsSUFBcEMsRUFBMEMsRUFBMUMsQ0FBUCxDQUo4QztDQUE5Qjs7Ozs7Ozs7Ozs7QUFnQmIsSUFBTSxrQ0FBYSxVQUFDLENBQUQsRUFBSSxDQUFKO1dBQVUsS0FBSyxJQUFMLENBQVUsQ0FBQyxHQUFJLENBQUosR0FBVSxJQUFJLENBQUo7Q0FBL0I7Ozs7Ozs7Ozs7Ozs7QUFhbkIsSUFBTSxzREFBdUIsVUFBQyxRQUFELEVBQVcsSUFBWCxFQUFpQixFQUFqQjtXQUF3QixDQUFHLFFBQUYsR0FBYSxJQUFiLEdBQXNCLFdBQVcsRUFBWCxHQUFpQixJQUF4QztDQUF4Qjs7Ozs7Ozs7Ozs7Ozs7QUFjN0IsSUFBTSxzREFBdUIsVUFBQyxLQUFELEVBQVEsSUFBUixFQUFjLEVBQWQ7V0FBcUIsQ0FBQyxRQUFRLElBQVIsQ0FBRCxJQUFrQixLQUFLLElBQUwsQ0FBbEI7Q0FBckI7Ozs7Ozs7Ozs7O0FBVzdCLElBQU0sMEJBQVMsVUFBQyxDQUFELEVBQUksQ0FBSixFQUFVO0FBQzVCLFFBQU0sU0FBUyxFQUFULENBRHNCOztBQUc1QixTQUFLLElBQUksR0FBSixJQUFXLENBQWhCLEVBQW1CO0FBQ2YsWUFBSSxFQUFFLGNBQUYsQ0FBaUIsR0FBakIsQ0FBSixFQUEyQjtBQUN2QixtQkFBTyxHQUFQLElBQWMsd0JBQVksQ0FBWixFQUFlLEdBQWYsSUFBc0IsRUFBRSxHQUFGLElBQVMsRUFBRSxHQUFGLENBQVQsR0FBa0IsQ0FBeEMsQ0FEUztTQUEzQjtLQURKOztBQU1BLFdBQU8sTUFBUCxDQVQ0QjtDQUFWOzs7Ozs7Ozs7O0FBb0JmLElBQU0sZ0VBQTRCLFVBQUMsTUFBRCxFQUFTLEtBQVQsRUFBZ0IsUUFBaEIsRUFBNkI7QUFDbEUsWUFBUSxpQkFBaUIsS0FBakIsQ0FBUixDQURrRTs7QUFHbEUsV0FBTztBQUNILFdBQUcsV0FBVyxLQUFLLEdBQUwsQ0FBUyxLQUFULENBQVgsR0FBNkIsT0FBTyxDQUFQO0FBQ2hDLFdBQUcsV0FBVyxLQUFLLEdBQUwsQ0FBUyxLQUFULENBQVgsR0FBNkIsT0FBTyxDQUFQO0tBRnBDLENBSGtFO0NBQTdCOzs7Ozs7OztBQWVsQyxJQUFNLDhDQUFtQixVQUFDLE9BQUQ7V0FBYSxVQUFVLEdBQVYsR0FBZ0IsS0FBSyxFQUFMO0NBQTdCOzs7Ozs7Ozs7QUFTekIsSUFBTSwwQkFBUztRQUFDLDREQUFNO1FBQUcsNERBQU07V0FBTSxLQUFLLE1BQUwsTUFBaUIsTUFBTSxHQUFOLENBQWpCLEdBQThCLEdBQTlCO0NBQXRCOzs7Ozs7Ozs7Ozs7QUFZZixJQUFNLHdDQUFnQixVQUFDLE9BQUQsRUFBVSxRQUFWLEVBQXVCO0FBQ2hELFFBQUksV0FBVyxPQUFYLENBRDRDO0FBRWhELFFBQU0sV0FBVyxTQUFTLEtBQVQsQ0FBZSxHQUFmLENBQVgsQ0FGMEM7QUFHaEQsUUFBTSxXQUFXLFNBQVMsQ0FBVCxDQUFYLENBSDBDOzs0QkFJMUIsNkJBQWlCLFNBQVMsQ0FBVCxDQUFqQixFQUowQjs7UUFJMUMsOEJBSjBDO1FBSXBDLGdDQUpvQzs7O0FBTWhELFlBQVEsV0FBVyxLQUFYLENBQVIsQ0FOZ0Q7O0FBUWhELFlBQVEsUUFBUjtBQUNBLGFBQUssR0FBTDtBQUNJLHdCQUFZLEtBQVosQ0FESjtBQUVJLGtCQUZKO0FBREEsYUFJSyxHQUFMO0FBQ0ksd0JBQVksS0FBWixDQURKO0FBRUksa0JBRko7QUFKQSxhQU9LLEdBQUw7QUFDSSx3QkFBWSxLQUFaLENBREo7QUFFSSxrQkFGSjtBQVBBLGFBVUssR0FBTDtBQUNJLHdCQUFZLEtBQVosQ0FESjtBQUVJLGtCQUZKO0FBVkEsS0FSZ0Q7O0FBdUJoRCxRQUFJLElBQUosRUFBVTtBQUNOLG9CQUFZLElBQVosQ0FETTtLQUFWOztBQUlBLFdBQU8sUUFBUCxDQTNCZ0Q7Q0FBdkI7Ozs7Ozs7Ozs7OztBQXdDdEIsSUFBTSw4QkFBVyxVQUFDLEtBQUQsRUFBUSxHQUFSLEVBQWEsR0FBYjtXQUFxQixLQUFLLEdBQUwsQ0FBUyxLQUFLLEdBQUwsQ0FBUyxLQUFULEVBQWdCLEdBQWhCLENBQVQsRUFBK0IsR0FBL0I7Q0FBckI7Ozs7Ozs7Ozs7QUFVakIsSUFBTSwwQkFBUyxVQUFDLFFBQUQsRUFBVyxRQUFYLEVBQXFCLFFBQXJCO1FBQStCLGtFQUFZO1dBQU0sc0JBQVUsV0FBWSxZQUFZLFdBQVcsUUFBWCxDQUFaLEdBQW1DLEtBQUssR0FBTCxDQUFTLFNBQVQsRUFBb0IsUUFBcEIsQ0FBbkM7Q0FBdkU7Ozs7Ozs7O0FBUWYsSUFBTSx3Q0FBZ0IsVUFBQyxHQUFELEVBQU0sYUFBTjtXQUF3QixpQkFBQyxDQUFNLEdBQU4sQ0FBRCxHQUFlLE9BQU8sT0FBTyxhQUFQLENBQVAsR0FBK0IsQ0FBOUM7Q0FBeEI7Ozs7Ozs7O0FBUXRCLElBQU0sMENBQWlCLFVBQUMsUUFBRCxFQUFXLGFBQVg7V0FBNkIsWUFBWSxPQUFPLGFBQVAsQ0FBWjtDQUE3Qjs7Ozs7Ozs7O0FBU3ZCLElBQU0sc0NBQWUsVUFBQyxRQUFELEVBQVcsS0FBWCxFQUFxQjtBQUM3QyxRQUFNLFVBQVUsS0FBSyxRQUFRLENBQVIsQ0FBTCxDQUQ2QjtBQUU3QyxRQUFNLFNBQVMsSUFBSyxJQUFJLEtBQUosQ0FGeUI7QUFHN0MsUUFBTSxtQkFBbUIsS0FBSyxHQUFMLENBQVMsV0FBVyxNQUFYLEVBQW1CLENBQTVCLENBQW5CLENBSHVDOztBQUs3QyxXQUFPLEtBQUssS0FBTCxDQUFXLG1CQUFtQixPQUFuQixDQUFYLEdBQXlDLE9BQXpDLENBTHNDO0NBQXJCIiwiZmlsZSI6ImNhbGMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBoYXNQcm9wZXJ0eSxcbiAgICBpc051bSxcbiAgICBmaW5kVmFsdWVBbmRVbml0LFxuICAgIHRvRGVjaW1hbFxufSBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgWkVST19QT0lOVCA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDAsXG4gICAgejogMFxufTtcblxuY29uc3QgZGlzdGFuY2UxRCA9IChhLCBiKSA9PiBNYXRoLmFicyhhIC0gYik7XG5cbi8qXG4gICAgQW5nbGUgYmV0d2VlbiBwb2ludHNcbiAgICBcbiAgICBUcmFuc2xhdGVzIHRoZSBoeXBvdGhldGljYWwgbGluZSBzbyB0aGF0IHRoZSAnZnJvbScgY29vcmRpbmF0ZXNcbiAgICBhcmUgYXQgMCwwXG4gICAgXG4gICAgQHBhcmFtIFtvYmplY3RdOiBYIGFuZCBZIGNvb3JkaW5hdGVzIG9mIGZyb20gcG9pbnRcbiAgICBAcGFyYW0gW29iamVjdF06IFggYW5kIFkgY29yZGluYXRlcyBvZiB0byBwb2ludFxuICAgIEByZXR1cm4gW3JhZGlhbl06IEFuZ2xlIGJldHdlZW4gdGhlIHR3byBwb2ludHMgaW4gcmFkaWFuc1xuKi9cbmV4cG9ydCBjb25zdCBhbmdsZSA9IChhLCBiID0gWkVST19QT0lOVCkgPT4gcmFkaWFuc1RvRGVncmVlcyhNYXRoLmF0YW4yKGEueCAtIGIueCwgYS55IC0gYi55KSk7XG5cbi8qXG4gICAgQ29udmVydCBkZWdyZWVzIHRvIHJhZGlhbnNcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIGluIGRlZ3JlZXNcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBpbiByYWRpYW5zXG4qL1xuZXhwb3J0IGNvbnN0IGRlZ3JlZXNUb1JhZGlhbnMgPSAoZGVncmVlcykgPT4gZGVncmVlcyAqIE1hdGguUEkgLyAxODA7XG5cbi8qXG4gICAgRGlsYXRlXG4gICAgXG4gICAgQ2hhbmdlIHRoZSBwcm9ncmVzc2lvbiBiZXR3ZWVuIGEgYW5kIGIgYWNjb3JkaW5nIHRvIGRpbGF0aW9uLlxuICAgIFxuICAgIFNvIGRpbGF0aW9uID0gMC41IHdvdWxkIGNoYW5nZVxuICAgIFxuICAgIGEgLS0tLS0tLS0tIGJcbiAgICBcbiAgICB0b1xuICAgIFxuICAgIGEgLS0tLSBiXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBQcmV2aW91cyB2YWx1ZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogRGlsYXRlIHByb2dyZXNzIGJ5IHhcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBQcmV2aW91cyB2YWx1ZSBwbHVzIHRoZSBkaWxhdGVkIGRpZmZlcmVuY2VcbiovXG5leHBvcnQgY29uc3QgZGlsYXRlID0gKGEsIGIsIGRpbGF0aW9uKSA9PiBhICsgKChiIC0gYSkgKiBkaWxhdGlvbik7XG5cbi8qXG4gICAgRGlzdGFuY2VcbiAgICBcbiAgICBSZXR1cm5zIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHR3byBuIGRpbWVuc2lvbmFsIHBvaW50cy5cbiAgICBcbiAgICBAcGFyYW0gW29iamVjdC9udW1iZXJdOiB4IGFuZCB5IG9yIGp1c3QgeCBvZiBwb2ludCBBXG4gICAgQHBhcmFtIFtvYmplY3QvbnVtYmVyXTogKG9wdGlvbmFsKTogeCBhbmQgeSBvciBqdXN0IHggb2YgcG9pbnQgQlxuICAgIEByZXR1cm4gW251bWJlcl06IFRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzXG4qL1xuZXhwb3J0IGNvbnN0IGRpc3RhbmNlID0gKGEsIGIgPSBaRVJPX1BPSU5UKSA9PiB7XG4gICAgLy8gMUQgZGltZW5zaW9uc1xuICAgIGlmIChpc051bShhKSkge1xuICAgICAgICByZXR1cm4gZGlzdGFuY2UxRChhLCBiKTtcblxuICAgIC8vIE11bHRpLWRpbWVuc2lvbmFsXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgeERlbHRhID0gZGlzdGFuY2UxRChhLngsIGIueCk7XG4gICAgICAgIGNvbnN0IHlEZWx0YSA9IGRpc3RhbmNlMUQoYS55LCBiLnkpO1xuICAgICAgICBjb25zdCB6RGVsdGEgPSAoaXNOdW0oYS56KSkgPyBkaXN0YW5jZTFEKGEueiwgYi56KSA6IDA7XG5cbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCgoeERlbHRhICoqIDIpICsgKHlEZWx0YSAqKiAyKSArICh6RGVsdGEgKiogMikpO1xuICAgIH1cbn07XG5cbi8qXG4gICAgRWFzZSB2YWx1ZSB3aXRoaW4gcmFuZ2VkIHBhcmFtZXRlcnNcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzIGJldHdlZW4gMCBhbmQgMVxuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgb2YgMCBwcm9ncmVzc1xuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgb2YgMSBwcm9ncmVzc1xuICAgIEBwYXJhbSBbc3RyaW5nIHx8IGZ1bmN0aW9uXTogTmFtZSBvZiBwcmVzZXQgZWFzaW5nXG4gICAgICAgIHRvIHVzZSBvciBnZW5lcmF0ZWQgZWFzaW5nIGZ1bmN0aW9uXG4gICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgb2YgZWFzZWQgcHJvZ3Jlc3MgaW4gcmFuZ2VcbiovIFxuZXhwb3J0IGNvbnN0IGVhc2UgPSAocHJvZ3Jlc3MsIGZyb20sIHRvLCBlYXNlKSA9PiB7XG4gICAgY29uc3QgcHJvZ3Jlc3NMaW1pdGVkID0gcmVzdHJpY3QocHJvZ3Jlc3MsIDAsIDEpO1xuICAgIGNvbnN0IGVhc2VkUHJvZ3Jlc3MgPSBlYXNlKHByb2dyZXNzTGltaXRlZCk7XG5cbiAgICByZXR1cm4gZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MoZWFzZWRQcm9ncmVzcywgZnJvbSwgdG8pO1xufTtcbiBcbi8qXG4gICAgSHlwb3RlbnVzZVxuICAgIFxuICAgIFJldHVybnMgdGhlIGh5cG90ZW51c2UsIHNpZGUgQywgZ2l2ZW4gdGhlIGxlbmd0aHMgb2Ygc2lkZXMgQSBhbmQgQi5cbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IExlbmd0aCBvZiBBXG4gICAgQHBhcmFtIFtudW1iZXJdOiBMZW5ndGggb2YgQlxuICAgIEByZXR1cm4gW251bWJlcl06IExlbmd0aCBvZiBDXG4qL1xuZXhwb3J0IGNvbnN0IGh5cG90ZW51c2UgPSAoYSwgYikgPT4gTWF0aC5zcXJ0KChhICogYSkgKyAoYiAqIGIpKTtcblxuLypcbiAgICBWYWx1ZSBpbiByYW5nZSBmcm9tIHByb2dyZXNzXG4gICAgXG4gICAgR2l2ZW4gYSBsb3dlciBsaW1pdCBhbmQgYW4gdXBwZXIgbGltaXQsIHdlIHJldHVybiB0aGUgdmFsdWUgd2l0aGluXG4gICAgdGhhdCByYW5nZSBhcyBleHByZXNzZWQgYnkgcHJvZ3Jlc3MgKGEgbnVtYmVyIGZyb20gMC0xKVxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVGhlIHByb2dyZXNzIGJldHdlZW4gbG93ZXIgYW5kIHVwcGVyIGxpbWl0cyBleHByZXNzZWQgMC0xXG4gICAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBvZiByYW5nZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXQgb2YgcmFuZ2VcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBhcyBjYWxjdWxhdGVkIGZyb20gcHJvZ3Jlc3Mgd2l0aGluIHJhbmdlIChub3QgbGltaXRlZCB3aXRoaW4gcmFuZ2UpXG4qL1xuZXhwb3J0IGNvbnN0IGdldFZhbHVlRnJvbVByb2dyZXNzID0gKHByb2dyZXNzLCBmcm9tLCB0bykgPT4gKC0gcHJvZ3Jlc3MgKiBmcm9tKSArIChwcm9ncmVzcyAqIHRvKSArIGZyb207XG5cbi8qXG4gICAgUHJvZ3Jlc3Mgd2l0aGluIGdpdmVuIHJhbmdlXG4gICAgXG4gICAgR2l2ZW4gYSBsb3dlciBsaW1pdCBhbmQgYW4gdXBwZXIgbGltaXQsIHdlIHJldHVybiB0aGUgcHJvZ3Jlc3NcbiAgICAoZXhwcmVzc2VkIGFzIGEgbnVtYmVyIDAtMSkgcmVwcmVzZW50ZWQgYnkgdGhlIGdpdmVuIHZhbHVlLCBhbmRcbiAgICBsaW1pdCB0aGF0IHByb2dyZXNzIHRvIHdpdGhpbiAwLTEuXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSB0byBmaW5kIHByb2dyZXNzIHdpdGhpbiBnaXZlbiByYW5nZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBVcHBlciBsaW1pdFxuICAgIEByZXR1cm4gW251bWJlcl06IFByb2dyZXNzIG9mIHZhbHVlIHdpdGhpbiByYW5nZSBhcyBleHByZXNzZWQgMC0xXG4qL1xuZXhwb3J0IGNvbnN0IGdldFByb2dyZXNzRnJvbVZhbHVlID0gKHZhbHVlLCBmcm9tLCB0bykgPT4gKHZhbHVlIC0gZnJvbSkgLyAodG8gLSBmcm9tKTtcblxuLypcbiAgICBPZmZzZXQgYmV0d2VlbiB0d28gb2JqZWN0cyBvZiBudW1iZXJzXG5cbiAgICBJZiBwcm9wZXJ0eSBpcyBmb3VuZCBpbiBiIG5vdCBwcmVzZW50IGluIGEsIGl0IHdpbGwgcmV0dXJuIGAwYCBmb3IgdGhhdCBwcm9wLlxuICAgIFxuICAgIEBwYXJhbSBbUG9pbnRdOiBGaXJzdCBvYmplY3RcbiAgICBAcGFyYW0gW1BvaW50XTogU2Vjb25kIG9iamVjdFxuICAgIEByZXR1cm4gW09mZnNldF06IERpc3RhbmNlIG1ldHJpY3MgYmV0d2VlbiB0d28gcG9pbnRzXG4qL1xuZXhwb3J0IGNvbnN0IG9mZnNldCA9IChhLCBiKSA9PiB7XG4gICAgY29uc3Qgb2Zmc2V0ID0ge307XG5cbiAgICBmb3IgKGxldCBrZXkgaW4gYikge1xuICAgICAgICBpZiAoYi5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICBvZmZzZXRba2V5XSA9IGhhc1Byb3BlcnR5KGEsIGtleSkgPyBiW2tleV0gLSBhW2tleV0gOiAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9mZnNldDtcbn07XG5cbi8qXG4gICAgUG9pbnQgZnJvbSBhbmdsZSBhbmQgZGlzdGFuY2VcbiAgICBcbiAgICBAcGFyYW0gW29iamVjdF06IDJEIHBvaW50IG9mIG9yaWdpblxuICAgIEBwYXJhbSBbbnVtYmVyXTogQW5nbGUgZnJvbSBvcmlnaW5cbiAgICBAcGFyYW0gW251bWJlcl06IERpc3RhbmNlIGZyb20gb3JpZ2luXG4gICAgQHJldHVybiBbb2JqZWN0XTogQ2FsY3VsYXRlZCAyRCBwb2ludFxuKi9cbmV4cG9ydCBjb25zdCBwb2ludEZyb21BbmdsZUFuZERpc3RhbmNlID0gKG9yaWdpbiwgYW5nbGUsIGRpc3RhbmNlKSA9PiB7XG4gICAgYW5nbGUgPSBkZWdyZWVzVG9SYWRpYW5zKGFuZ2xlKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHg6IGRpc3RhbmNlICogTWF0aC5jb3MoYW5nbGUpICsgb3JpZ2luLngsXG4gICAgICAgIHk6IGRpc3RhbmNlICogTWF0aC5zaW4oYW5nbGUpICsgb3JpZ2luLnlcbiAgICB9O1xufTtcblxuLypcbiAgICBDb252ZXJ0IHJhZGlhbnMgdG8gZGVncmVlc1xuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgaW4gcmFkaWFuc1xuICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGluIGRlZ3JlZXNcbiovXG5leHBvcnQgY29uc3QgcmFkaWFuc1RvRGVncmVlcyA9IChyYWRpYW5zKSA9PiByYWRpYW5zICogMTgwIC8gTWF0aC5QSTtcblxuLypcbiAgICBSZXR1cm4gcmFuZG9tIG51bWJlciBiZXR3ZWVuIHJhbmdlXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IE91dHB1dCBtaW5pbXVtXG4gICAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IE91dHB1dCBtYXhpbXVtXG4gICAgQHJldHVybiBbbnVtYmVyXTogUmFuZG9tIG51bWJlciB3aXRoaW4gcmFuZ2UsIG9yIDAgYW5kIDEgaWYgbm9uZSBwcm92aWRlZFxuKi9cbmV4cG9ydCBjb25zdCByYW5kb20gPSAobWluID0gMCwgbWF4ID0gMSkgPT4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xuXG4vKlxuICAgIENhbGN1bGF0ZSByZWxhdGl2ZSB2YWx1ZVxuICAgIFxuICAgIFRha2VzIHRoZSBvcGVyYXRvciBhbmQgdmFsdWUgZnJvbSBhIHN0cmluZywgaWUgXCIrPTVcIiwgYW5kIGFwcGxpZXNcbiAgICB0byB0aGUgY3VycmVudCB2YWx1ZSB0byByZXNvbHZlIGEgbmV3IHRhcmdldC5cbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcbiAgICBAcGFyYW0gW3N0cmluZ106IFJlbGF0aXZlIHZhbHVlXG4gICAgQHJldHVybiBbbnVtYmVyXTogTmV3IHZhbHVlXG4qL1xuZXhwb3J0IGNvbnN0IHJlbGF0aXZlVmFsdWUgPSAoY3VycmVudCwgcmVsYXRpdmUpID0+IHtcbiAgICBsZXQgbmV3VmFsdWUgPSBjdXJyZW50O1xuICAgIGNvbnN0IGVxdWF0aW9uID0gcmVsYXRpdmUuc3BsaXQoJz0nKTtcbiAgICBjb25zdCBvcGVyYXRvciA9IGVxdWF0aW9uWzBdO1xuICAgIGxldCB7IHVuaXQsIHZhbHVlIH0gPSBmaW5kVmFsdWVBbmRVbml0KGVxdWF0aW9uWzFdKTtcblxuICAgIHZhbHVlID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG5cbiAgICBzd2l0Y2ggKG9wZXJhdG9yKSB7XG4gICAgY2FzZSAnKyc6XG4gICAgICAgIG5ld1ZhbHVlICs9IHZhbHVlO1xuICAgICAgICBicmVhaztcbiAgICBjYXNlICctJzpcbiAgICAgICAgbmV3VmFsdWUgLT0gdmFsdWU7XG4gICAgICAgIGJyZWFrO1xuICAgIGNhc2UgJyonOlxuICAgICAgICBuZXdWYWx1ZSAqPSB2YWx1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgY2FzZSAnLyc6XG4gICAgICAgIG5ld1ZhbHVlIC89IHZhbHVlO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgXG4gICAgaWYgKHVuaXQpIHtcbiAgICAgICAgbmV3VmFsdWUgKz0gdW5pdDtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3VmFsdWU7XG59O1xuXG4vKlxuICAgIFJlc3RyaWN0IHZhbHVlIHRvIHJhbmdlXG4gICAgXG4gICAgUmV0dXJuIHZhbHVlIHdpdGhpbiB0aGUgcmFuZ2Ugb2YgbG93ZXJMaW1pdCBhbmQgdXBwZXJMaW1pdFxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgdG8ga2VlcCB3aXRoaW4gcmFuZ2VcbiAgICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IG9mIHJhbmdlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBVcHBlciBsaW1pdCBvZiByYW5nZVxuICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGFzIGxpbWl0ZWQgd2l0aGluIGdpdmVuIHJhbmdlXG4qL1xuZXhwb3J0IGNvbnN0IHJlc3RyaWN0ID0gKHZhbHVlLCBtaW4sIG1heCkgPT4gTWF0aC5tYXgoTWF0aC5taW4odmFsdWUsIG1heCksIG1pbik7XG5cbi8qXG4gICAgRnJhbWVyYXRlLWluZGVwZW5kZW50IHNtb290aGluZ1xuXG4gICAgQHBhcmFtIFtudW1iZXJdOiBOZXcgdmFsdWVcbiAgICBAcGFyYW0gW251bWJlcl06IE9sZCB2YWx1ZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb25cbiAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogU21vb3RoaW5nICgwIGlzIG5vbmUpXG4qL1xuZXhwb3J0IGNvbnN0IHNtb290aCA9IChuZXdWYWx1ZSwgb2xkVmFsdWUsIGR1cmF0aW9uLCBzbW9vdGhpbmcgPSAwKSA9PiB0b0RlY2ltYWwob2xkVmFsdWUgKyAoZHVyYXRpb24gKiAobmV3VmFsdWUgLSBvbGRWYWx1ZSkgLyBNYXRoLm1heChzbW9vdGhpbmcsIGR1cmF0aW9uKSkpO1xuXG4vKlxuICAgIENvbnZlcnQgeCBwZXIgc2Vjb25kIHRvIHBlciBmcmFtZSB2ZWxvY2l0eSBiYXNlZCBvbiBmcHNcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFVuaXQgcGVyIHNlY29uZFxuICAgIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb24gaW4gbXNcbiovXG5leHBvcnQgY29uc3Qgc3BlZWRQZXJGcmFtZSA9ICh4cHMsIGZyYW1lRHVyYXRpb24pID0+IChpc051bSh4cHMpKSA/IHhwcyAvICgxMDAwIC8gZnJhbWVEdXJhdGlvbikgOiAwO1xuXG4vKlxuICAgIENvbnZlcnQgdmVsb2NpdHkgaW50byB2ZWxpY2l0eSBwZXIgc2Vjb25kXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBVbml0IHBlciBmcmFtZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb24gaW4gbXNcbiovXG5leHBvcnQgY29uc3Qgc3BlZWRQZXJTZWNvbmQgPSAodmVsb2NpdHksIGZyYW1lRHVyYXRpb24pID0+IHZlbG9jaXR5ICogKDEwMDAgLyBmcmFtZUR1cmF0aW9uKTtcblxuLypcbiAgICBDcmVhdGUgc3RlcHBlZCB2ZXJzaW9uIG9mIDAtMSBwcm9ncmVzc1xuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICAgIEBwYXJhbSBbaW50XTogTnVtYmVyIG9mIHN0ZXBzXG4gICAgQHJldHVybiBbbnVtYmVyXTogU3RlcHBlZCB2YWx1ZVxuKi9cbmV4cG9ydCBjb25zdCBzdGVwUHJvZ3Jlc3MgPSAocHJvZ3Jlc3MsIHN0ZXBzKSA9PiB7XG4gICAgY29uc3Qgc2VnbWVudCA9IDEgLyAoc3RlcHMgLSAxKTtcbiAgICBjb25zdCB0YXJnZXQgPSAxIC0gKDEgLyBzdGVwcyk7XG4gICAgY29uc3QgcHJvZ3Jlc3NPZlRhcmdldCA9IE1hdGgubWluKHByb2dyZXNzIC8gdGFyZ2V0LCAxKTtcblxuICAgIHJldHVybiBNYXRoLmZsb29yKHByb2dyZXNzT2ZUYXJnZXQgLyBzZWdtZW50KSAqIHNlZ21lbnQ7XG59OyJdfQ==

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
	
	var _utils = __webpack_require__(21);
	
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
	                propertyString += ';' + (0, _prefixer2.default)((0, _utils.camelToDash)(key)) + ':' + value;
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2Nzcy9idWlsZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUEsSUFBTSxjQUFjLFlBQWQ7O2tCQUVTLFVBQUMsS0FBRCxFQUFRLDJCQUFSLEVBQXdDO0FBQ25ELFFBQUksaUJBQWlCLEVBQWpCLENBRCtDO0FBRW5ELFFBQUksa0JBQWtCLEVBQWxCLENBRitDO0FBR25ELFFBQUksZ0JBQWdCLEtBQWhCLENBSCtDOztBQUtuRCxTQUFLLElBQUksR0FBSixJQUFXLEtBQWhCLEVBQXVCO0FBQ25CLFlBQUksTUFBTSxjQUFOLENBQXFCLEdBQXJCLENBQUosRUFBK0I7QUFDM0IsZ0JBQU0sUUFBUSxNQUFNLEdBQU4sQ0FBUixDQURxQjs7QUFHM0IsZ0JBQUkseUJBQWUsR0FBZixDQUFKLEVBQXlCO0FBQ3JCLG1DQUFtQixNQUFNLEdBQU4sR0FBWSxLQUFaLEdBQW9CLElBQXBCLENBREU7QUFFckIsZ0NBQWdCLEdBQUMsS0FBUSxXQUFSLEdBQXVCLElBQXhCLEdBQStCLGFBQS9CLENBRks7YUFBekIsTUFJTztBQUNILGtDQUFrQixNQUFNLHdCQUFTLHdCQUFZLEdBQVosQ0FBVCxDQUFOLEdBQW1DLEdBQW5DLEdBQXlDLEtBQXpDLENBRGY7YUFKUDtTQUhKO0tBREo7O0FBY0EsUUFBSSxvQkFBb0IsRUFBcEIsRUFBd0I7QUFDeEIsWUFBSSxDQUFDLGFBQUQsSUFBa0IsQ0FBQywyQkFBRCxFQUE4QjtBQUNoRCwrQkFBbUIsY0FBYyxPQUFkLENBRDZCO1NBQXBEOztBQUlBLDBCQUFrQixNQUFNLHdCQUFTLFdBQVQsQ0FBTixHQUE4QixHQUE5QixHQUFvQyxlQUFwQyxDQUxNO0tBQTVCOztBQVFBLFdBQU8sY0FBUCxDQTNCbUQ7Q0FBeEMiLCJmaWxlIjoiYnVpbGQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRyYW5zZm9ybVByb3BzIGZyb20gJy4vdHJhbnNmb3JtLXByb3BzJztcbmltcG9ydCBwcmVmaXhlciBmcm9tICcuL3ByZWZpeGVyJztcbmltcG9ydCB7IGNhbWVsVG9EYXNoIH0gZnJvbSAnLi4vLi4vaW5jL3V0aWxzJztcblxuY29uc3QgVFJBTlNMQVRFX1ogPSAndHJhbnNsYXRlWic7XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSwgZGlzYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uKSA9PiB7XG4gICAgbGV0IHByb3BlcnR5U3RyaW5nID0gJyc7XG4gICAgbGV0IHRyYW5zZm9ybVN0cmluZyA9ICcnO1xuICAgIGxldCB0cmFuc2Zvcm1IYXNaID0gZmFsc2U7XG5cbiAgICBmb3IgKGxldCBrZXkgaW4gc3RhdGUpIHtcbiAgICAgICAgaWYgKHN0YXRlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gc3RhdGVba2V5XTtcblxuICAgICAgICAgICAgaWYgKHRyYW5zZm9ybVByb3BzW2tleV0pIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1TdHJpbmcgKz0ga2V5ICsgJygnICsgdmFsdWUgKyAnKSAnO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybUhhc1ogPSAoa2V5ID09PSBUUkFOU0xBVEVfWikgPyB0cnVlIDogdHJhbnNmb3JtSGFzWjtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eVN0cmluZyArPSAnOycgKyBwcmVmaXhlcihjYW1lbFRvRGFzaChrZXkpKSArICc6JyArIHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRyYW5zZm9ybVN0cmluZyAhPT0gJycpIHtcbiAgICAgICAgaWYgKCF0cmFuc2Zvcm1IYXNaICYmICFkaXNhYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybVN0cmluZyArPSBUUkFOU0xBVEVfWiArICcoMHB4KSc7XG4gICAgICAgIH1cblxuICAgICAgICBwcm9wZXJ0eVN0cmluZyArPSAnOycgKyBwcmVmaXhlcigndHJhbnNmb3JtJykgKyAnOicgKyB0cmFuc2Zvcm1TdHJpbmc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5U3RyaW5nO1xufTsiXX0=

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	var cache = {};
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
	
	    if (cache[key] === false) {
	        return false;
	    } else {
	        cache[key] = false;
	    }
	
	    for (var i = 0; i < numPrefixes; i++) {
	        var prefix = prefixes[i],
	            prefixed = prefix === '' ? key : prefix + key.charAt(0).toUpperCase() + key.slice(1);
	
	        if (prefixed in testElement.style) {
	            cache[key] = prefixed;
	        }
	    }
	
	    return cache[key];
	};
	
	exports.default = function (key) {
	    return cache[key] || testPrefix(key);
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2Nzcy9wcmVmaXhlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxJQUFNLFFBQVEsRUFBUjtBQUNOLElBQU0sV0FBVyxDQUFDLFFBQUQsRUFBVSxLQUFWLEVBQWdCLEdBQWhCLEVBQW9CLElBQXBCLEVBQTBCLEVBQTFCLENBQVg7QUFDTixJQUFNLGNBQWMsU0FBUyxNQUFUO0FBQ3BCLElBQUksb0JBQUo7Ozs7Ozs7O0FBUUEsSUFBTSxhQUFhLFVBQUMsR0FBRCxFQUFTO0FBQ3hCLGtCQUFjLGVBQWUsU0FBUyxhQUFULENBQXVCLEtBQXZCLENBQWYsQ0FEVTs7QUFHeEIsUUFBSSxNQUFNLEdBQU4sTUFBZSxLQUFmLEVBQXNCO0FBQ3RCLGVBQU8sS0FBUCxDQURzQjtLQUExQixNQUVPO0FBQ0gsY0FBTSxHQUFOLElBQWEsS0FBYixDQURHO0tBRlA7O0FBTUEsU0FBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksV0FBSixFQUFpQixHQUFqQyxFQUFzQztBQUNsQyxZQUFJLFNBQVMsU0FBUyxDQUFULENBQVQ7WUFDQSxXQUFXLE1BQUMsS0FBVyxFQUFYLEdBQWlCLEdBQWxCLEdBQXdCLFNBQVMsSUFBSSxNQUFKLENBQVcsQ0FBWCxFQUFjLFdBQWQsRUFBVCxHQUF1QyxJQUFJLEtBQUosQ0FBVSxDQUFWLENBQXZDLENBRkw7O0FBSWxDLFlBQUksWUFBWSxZQUFZLEtBQVosRUFBbUI7QUFDL0Isa0JBQU0sR0FBTixJQUFhLFFBQWIsQ0FEK0I7U0FBbkM7S0FKSjs7QUFTQSxXQUFPLE1BQU0sR0FBTixDQUFQLENBbEJ3QjtDQUFUOztrQkFxQkosVUFBQyxHQUFEO1dBQVMsTUFBTSxHQUFOLEtBQWMsV0FBVyxHQUFYLENBQWQ7Q0FBVCIsImZpbGUiOiJwcmVmaXhlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjYWNoZSA9IHt9O1xuY29uc3QgcHJlZml4ZXMgPSBbJ1dlYmtpdCcsJ01veicsJ08nLCdtcycsICcnXTtcbmNvbnN0IG51bVByZWZpeGVzID0gcHJlZml4ZXMubGVuZ3RoO1xubGV0IHRlc3RFbGVtZW50O1xuXG4vKlxuICAgIFRlc3Qgc3R5bGUgcHJvcGVydHkgZm9yIHByZWZpeGVkIHZlcnNpb25cbiAgICBcbiAgICBAcGFyYW0gW3N0cmluZ106IFN0eWxlIHByb3BlcnR5XG4gICAgQHJldHVybiBbc3RyaW5nXTogQ2FjaGVkIHByb3BlcnR5IG5hbWVcbiovXG5jb25zdCB0ZXN0UHJlZml4ID0gKGtleSkgPT4ge1xuICAgIHRlc3RFbGVtZW50ID0gdGVzdEVsZW1lbnQgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBpZiAoY2FjaGVba2V5XSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNhY2hlW2tleV0gPSBmYWxzZTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVByZWZpeGVzOyBpKyspIHtcbiAgICAgICAgdmFyIHByZWZpeCA9IHByZWZpeGVzW2ldLFxuICAgICAgICAgICAgcHJlZml4ZWQgPSAocHJlZml4ID09PSAnJykgPyBrZXkgOiBwcmVmaXggKyBrZXkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBrZXkuc2xpY2UoMSk7XG5cbiAgICAgICAgaWYgKHByZWZpeGVkIGluIHRlc3RFbGVtZW50LnN0eWxlKSB7XG4gICAgICAgICAgICBjYWNoZVtrZXldID0gcHJlZml4ZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGNhY2hlW2tleV07XG59O1xuXG5leHBvcnQgZGVmYXVsdCAoa2V5KSA9PiBjYWNoZVtrZXldIHx8IHRlc3RQcmVmaXgoa2V5KTsiXX0=

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzU2ZTA4OThkMDgxYmU5MTE5YjUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvYWQvZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9wb3Btb3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rhc2svdGltZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvQWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL0Zsb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvVHdlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvUGh5c2ljcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9UcmFjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGFzay9UYXNrLmpzIiwid2VicGFjazovLy8uL3NyYy9pbnB1dC9JbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL3N0YWdnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy90aW1lbGluZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9hZGFwdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hZGFwdGVyL2F0dHItYWRhcHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9jc3MtYWRhcHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9vYmplY3QtYWRhcHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9zdmctYWRhcHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9zdmctcGF0aC1hZGFwdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2Vhc2luZy9wcmVzZXQtZWFzaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2Zsb3cvZ2V0LWZsb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy9jYWxjLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL2FscGhhLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9hbmdsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvY29sb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL2NvbXBsZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL2hleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvaHNsLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9weC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvcmdiLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9zY2FsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvc2hhZG93LmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy91bml0LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvdHJhbnNmb3JtZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9kZXRlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy9udW1lcmljYWwtdmFsdWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvZGV0ZWN0LWFkYXB0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvZmxvdy9nZW5lcmF0ZS1ibGVuZC1jdXJ2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5wdXQvUG9pbnRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGFzay9sb29wLmpzIiwid2VicGFjazovLy8uL3NyYy9hZGFwdGVyL2Nzcy9zdGF0ZS1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkYXB0ZXIvY3NzL3ZhbHVlLXR5cGUtbWFwLmpzIiwid2VicGFjazovLy8uL3NyYy9hZGFwdGVyL2Nzcy9idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9jc3MvcHJlZml4ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkYXB0ZXIvY3NzL3RyYW5zZm9ybS1wcm9wcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9zdmcvdmFsdWUtdHlwZS1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkYXB0ZXIvc3ZnL2J1aWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9hZGFwdGVyL3N2Zy1wYXRoL2J1aWxkLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kZWZhdWx0LXByb3BzLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kaWN0aW9uYXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2Vhc2luZy9jcmVhdGUtZWFzaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2Vhc2luZy9jcmVhdGUtYmV6aWVyLmpzIiwid2VicGFjazovLy8uL3NyYy90YXNrL3RpY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rhc2svbWFuYWdlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx3Qzs7Ozs7OztBQ3RDQTs7QUFFQTs7QUFFQTs7QUFFQSx3Q0FBdUMsNkJBQTZCLFlBQVksRUFBRSxPQUFPLGlCQUFpQixtQkFBbUIsdUJBQXVCLDRFQUE0RSxFQUFFLEVBQUUsc0JBQXNCLGVBQWUsRUFBRTs7QUFFM1E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTJDLG1xQjs7Ozs7O0FDZjNDOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7O0FBRUE7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QTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBMkMsdXBlOzs7Ozs7QUM5VDNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FB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dUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUEyQywrK0I7Ozs7OztBQ2xDM0M7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUEyQyxtbUo7Ozs7OztBQ3pEM0M7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUEyQywydUY7Ozs7OztBQzlDM0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBMkMsdXdCOzs7Ozs7QUNuQjNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBMkMsMnFDOzs7Ozs7QUNaM0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUEyQyx1OUY7Ozs7OztBQ3pEM0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSw4QkFBNkI7QUFDN0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQSxVQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBYyx1QkFBdUI7QUFDckM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXVCLHlCQUF5QjtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBYyxrRUFBa0U7QUFDaEY7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFTO0FBQ1Q7O0FBRUE7QUFDQSxjQUFhO0FBQ2I7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBMkMsKzBVOzs7Ozs7QUNqSzNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0EsNENBQTJDLHUxRTs7Ozs7O0FDOUMzQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF1QiwyQkFBMkI7QUFDbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUJBQXdCLDBCQUEwQjtBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRDQUEyQywyN1EiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCAzNTZlMDg5OGQwODFiZTkxMTliNVxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9wb3Btb3Rpb24gPSByZXF1aXJlKCcuLi9wb3Btb3Rpb24nKTtcblxudmFyIHBvcG1vdGlvbiA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9wb3Btb3Rpb24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG52YXIgVUlyZWYgPSB3aW5kb3cubW90aW9uO1xuXG5wb3Btb3Rpb24ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICB3aW5kb3cubW90aW9uID0gVUlyZWY7XG59O1xuXG53aW5kb3cubW90aW9uID0gd2luZG93LnBvcG1vdGlvbiA9IHBvcG1vdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5c2IyRmtMMmRzYjJKaGJDNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVGQk96dEpRVUZaT3pzN08wRkJSVm9zU1VGQlRTeFJRVUZSTEU5QlFVOHNUVUZCVURzN1FVRkZaQ3hWUVVGVkxGVkJRVllzUjBGQmRVSXNXVUZCV1R0QlFVTXZRaXhYUVVGUExFMUJRVkFzUjBGQlowSXNTMEZCYUVJc1EwRkVLMEk3UTBGQldqczdRVUZKZGtJc1QwRkJUeXhOUVVGUUxFZEJRV2RDTEU5QlFVOHNVMEZCVUN4SFFVRnRRaXhUUVVGdVFpSXNJbVpwYkdVaU9pSm5iRzlpWVd3dWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUXZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElDb2dZWE1nY0c5d2JXOTBhVzl1SUdaeWIyMGdKeTR1TDNCdmNHMXZkR2x2YmljN1hHNWNibU52Ym5OMElGVkpjbVZtSUQwZ2QybHVaRzkzTG0xdmRHbHZianRjYmx4dWNHOXdiVzkwYVc5dUxtNXZRMjl1Wm14cFkzUWdQU0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnZDJsdVpHOTNMbTF2ZEdsdmJpQTlJRlZKY21WbU8xeHVmVHRjYmx4dWQybHVaRzkzTG0xdmRHbHZiaUE5SUhkcGJtUnZkeTV3YjNCdGIzUnBiMjRnUFNCd2IzQnRiM1JwYjI0N0lsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2xvYWQvZ2xvYmFsLmpzXG4gKiogbW9kdWxlIGlkID0gMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5BY3Rpb24gPSBleHBvcnRzLnRyYW5zZm9ybWVycyA9IGV4cG9ydHMudmFsdWVUeXBlID0gZXhwb3J0cy5zZXRHbG9iYWxEaWxhdGlvbiA9IGV4cG9ydHMudXRpbHMgPSBleHBvcnRzLmNhbGMgPSBleHBvcnRzLmRldGVjdEZsb3cgPSBleHBvcnRzLmVhc2luZyA9IGV4cG9ydHMuc3ZnUGF0aCA9IGV4cG9ydHMuc3ZnID0gZXhwb3J0cy5vYmplY3QgPSBleHBvcnRzLmNzcyA9IGV4cG9ydHMuYXR0ciA9IGV4cG9ydHMuY3JlYXRlQWRhcHRlciA9IGV4cG9ydHMudGltZWxpbmUgPSBleHBvcnRzLnN0YWdnZXIgPSBleHBvcnRzLnRhc2sgPSBleHBvcnRzLmlucHV0ID0gZXhwb3J0cy50cmFjayA9IGV4cG9ydHMucGh5c2ljcyA9IGV4cG9ydHMudHdlZW4gPSBleHBvcnRzLmZsb3cgPSB1bmRlZmluZWQ7XG5cbnZhciBfdGltZXIgPSByZXF1aXJlKCcuL3Rhc2svdGltZXInKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdzZXRHbG9iYWxEaWxhdGlvbicsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RpbWVyLnNldEdsb2JhbERpbGF0aW9uO1xuICAgIH1cbn0pO1xuXG52YXIgX0FjdGlvbiA9IHJlcXVpcmUoJy4vYWN0aW9ucy9BY3Rpb24nKTtcblxudmFyIF9BY3Rpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQWN0aW9uKTtcblxudmFyIF9GbG93ID0gcmVxdWlyZSgnLi9hY3Rpb25zL0Zsb3cnKTtcblxudmFyIF9GbG93MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Zsb3cpO1xuXG52YXIgX1R3ZWVuID0gcmVxdWlyZSgnLi9hY3Rpb25zL1R3ZWVuJyk7XG5cbnZhciBfVHdlZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVHdlZW4pO1xuXG52YXIgX1BoeXNpY3MgPSByZXF1aXJlKCcuL2FjdGlvbnMvUGh5c2ljcycpO1xuXG52YXIgX1BoeXNpY3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUGh5c2ljcyk7XG5cbnZhciBfVHJhY2sgPSByZXF1aXJlKCcuL2FjdGlvbnMvVHJhY2snKTtcblxudmFyIF9UcmFjazIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UcmFjayk7XG5cbnZhciBfVGFzayA9IHJlcXVpcmUoJy4vdGFzay9UYXNrJyk7XG5cbnZhciBfVGFzazIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UYXNrKTtcblxudmFyIF9JbnB1dCA9IHJlcXVpcmUoJy4vaW5wdXQvSW5wdXQnKTtcblxudmFyIF9JbnB1dDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9JbnB1dCk7XG5cbnZhciBfc3RhZ2dlcjIgPSByZXF1aXJlKCcuL2luYy9zdGFnZ2VyJyk7XG5cbnZhciBfc3RhZ2dlcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdGFnZ2VyMik7XG5cbnZhciBfdGltZWxpbmUyID0gcmVxdWlyZSgnLi9pbmMvdGltZWxpbmUnKTtcblxudmFyIF90aW1lbGluZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90aW1lbGluZTIpO1xuXG52YXIgX2FkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXIvYWRhcHRlcicpO1xuXG52YXIgX2FkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWRhcHRlcik7XG5cbnZhciBfYXR0ckFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXIvYXR0ci1hZGFwdGVyJyk7XG5cbnZhciBfYXR0ckFkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXR0ckFkYXB0ZXIpO1xuXG52YXIgX2Nzc0FkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXIvY3NzLWFkYXB0ZXInKTtcblxudmFyIF9jc3NBZGFwdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Nzc0FkYXB0ZXIpO1xuXG52YXIgX29iamVjdEFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXIvb2JqZWN0LWFkYXB0ZXInKTtcblxudmFyIF9vYmplY3RBZGFwdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdEFkYXB0ZXIpO1xuXG52YXIgX3N2Z0FkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXIvc3ZnLWFkYXB0ZXInKTtcblxudmFyIF9zdmdBZGFwdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N2Z0FkYXB0ZXIpO1xuXG52YXIgX3N2Z1BhdGhBZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVyL3N2Zy1wYXRoLWFkYXB0ZXInKTtcblxudmFyIF9zdmdQYXRoQWRhcHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdmdQYXRoQWRhcHRlcik7XG5cbnZhciBfcHJlc2V0RWFzaW5nID0gcmVxdWlyZSgnLi9hY3Rpb25zL2Vhc2luZy9wcmVzZXQtZWFzaW5nJyk7XG5cbnZhciBfcHJlc2V0RWFzaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ByZXNldEVhc2luZyk7XG5cbnZhciBfZ2V0RmxvdyA9IHJlcXVpcmUoJy4vYWN0aW9ucy9mbG93L2dldC1mbG93Jyk7XG5cbnZhciBfZ2V0RmxvdzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRGbG93KTtcblxudmFyIF9jYWxjMiA9IHJlcXVpcmUoJy4vaW5jL2NhbGMnKTtcblxudmFyIF9jYWxjID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2NhbGMyKTtcblxudmFyIF91dGlsczIgPSByZXF1aXJlKCcuL2luYy91dGlscycpO1xuXG52YXIgX3V0aWxzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3V0aWxzMik7XG5cbnZhciBfYWxwaGEgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL2FscGhhJyk7XG5cbnZhciBfYWxwaGEyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWxwaGEpO1xuXG52YXIgX2FuZ2xlID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy9hbmdsZScpO1xuXG52YXIgX2FuZ2xlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FuZ2xlKTtcblxudmFyIF9jb2xvciA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvY29sb3InKTtcblxudmFyIF9jb2xvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb2xvcik7XG5cbnZhciBfY29tcGxleCA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvY29tcGxleCcpO1xuXG52YXIgX2NvbXBsZXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcGxleCk7XG5cbnZhciBfaGV4ID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy9oZXgnKTtcblxudmFyIF9oZXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGV4KTtcblxudmFyIF9oc2wgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL2hzbCcpO1xuXG52YXIgX2hzbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oc2wpO1xuXG52YXIgX3B4ID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy9weCcpO1xuXG52YXIgX3B4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3B4KTtcblxudmFyIF9yZ2IgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL3JnYicpO1xuXG52YXIgX3JnYjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZ2IpO1xuXG52YXIgX3NjYWxlID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy9zY2FsZScpO1xuXG52YXIgX3NjYWxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NjYWxlKTtcblxudmFyIF9zaGFkb3cgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL3NoYWRvdycpO1xuXG52YXIgX3NoYWRvdzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaGFkb3cpO1xuXG52YXIgX3VuaXQgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL3VuaXQnKTtcblxudmFyIF91bml0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3VuaXQpO1xuXG52YXIgX3RyYW5zZm9ybWVyczIgPSByZXF1aXJlKCcuL2luYy90cmFuc2Zvcm1lcnMnKTtcblxudmFyIF90cmFuc2Zvcm1lcnMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdHJhbnNmb3JtZXJzMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8vIEV4cG9ydCBmYWN0b3J5IGZ1bmN0aW9uc1xudmFyIGZsb3cgPSBleHBvcnRzLmZsb3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseShfRmxvdzIuZGVmYXVsdCwgW251bGxdLmNvbmNhdChhcmdzKSkpKCk7XG59OyAvLyBJbXBvcnQgY2xhc3NlcyAtIGxvbmcgdGVybSBnb2FsIHRvIG1vdmUgdG93YXJkcyBjb21wb3NpdGlvblxuXG52YXIgdHdlZW4gPSBleHBvcnRzLnR3ZWVuID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgcmV0dXJuIG5ldyBfVHdlZW4yLmRlZmF1bHQocHJvcHMpO1xufTtcbnZhciBwaHlzaWNzID0gZXhwb3J0cy5waHlzaWNzID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgcmV0dXJuIG5ldyBfUGh5c2ljczIuZGVmYXVsdChwcm9wcyk7XG59O1xudmFyIHRyYWNrID0gZXhwb3J0cy50cmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoX1RyYWNrMi5kZWZhdWx0LCBbbnVsbF0uY29uY2F0KGFyZ3MpKSkoKTtcbn07XG52YXIgaW5wdXQgPSBleHBvcnRzLmlucHV0ID0gZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4zKSwgX2tleTMgPSAwOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XG4gICAgICAgIGFyZ3NbX2tleTNdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseShfSW5wdXQyLmRlZmF1bHQsIFtudWxsXS5jb25jYXQoYXJncykpKSgpO1xufTtcbnZhciB0YXNrID0gZXhwb3J0cy50YXNrID0gZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIF9sZW40ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW40KSwgX2tleTQgPSAwOyBfa2V5NCA8IF9sZW40OyBfa2V5NCsrKSB7XG4gICAgICAgIGFyZ3NbX2tleTRdID0gYXJndW1lbnRzW19rZXk0XTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseShfVGFzazIuZGVmYXVsdCwgW251bGxdLmNvbmNhdChhcmdzKSkpKCk7XG59O1xuZXhwb3J0cy5zdGFnZ2VyID0gX3N0YWdnZXIzLmRlZmF1bHQ7XG5leHBvcnRzLnRpbWVsaW5lID0gX3RpbWVsaW5lMy5kZWZhdWx0O1xuXG4vLyBBZGFwdGVyc1xuXG5leHBvcnRzLmNyZWF0ZUFkYXB0ZXIgPSBfYWRhcHRlcjIuZGVmYXVsdDtcbmV4cG9ydHMuYXR0ciA9IF9hdHRyQWRhcHRlcjIuZGVmYXVsdDtcbmV4cG9ydHMuY3NzID0gX2Nzc0FkYXB0ZXIyLmRlZmF1bHQ7XG5leHBvcnRzLm9iamVjdCA9IF9vYmplY3RBZGFwdGVyMi5kZWZhdWx0O1xuZXhwb3J0cy5zdmcgPSBfc3ZnQWRhcHRlcjIuZGVmYXVsdDtcbmV4cG9ydHMuc3ZnUGF0aCA9IF9zdmdQYXRoQWRhcHRlcjIuZGVmYXVsdDtcblxuLy8gRWFzaW5nXG5cbmV4cG9ydHMuZWFzaW5nID0gX3ByZXNldEVhc2luZzIuZGVmYXVsdDtcbnZhciBkZXRlY3RGbG93ID0gZXhwb3J0cy5kZXRlY3RGbG93ID0gX2dldEZsb3cyLmRlZmF1bHQ7XG5cbi8vIFV0aWxzXG5leHBvcnRzLmNhbGMgPSBfY2FsYztcbmV4cG9ydHMudXRpbHMgPSBfdXRpbHM7XG5cbi8vIFZhbHVlIHR5cGVzXG5cbnZhciB2YWx1ZVR5cGUgPSBleHBvcnRzLnZhbHVlVHlwZSA9IHsgYWxwaGE6IF9hbHBoYTIuZGVmYXVsdCwgYW5nbGU6IF9hbmdsZTIuZGVmYXVsdCwgY29sb3I6IF9jb2xvcjIuZGVmYXVsdCwgY29tcGxleDogX2NvbXBsZXgyLmRlZmF1bHQsIGhleDogX2hleDIuZGVmYXVsdCwgaHNsOiBfaHNsMi5kZWZhdWx0LCBweDogX3B4Mi5kZWZhdWx0LCByZ2I6IF9yZ2IyLmRlZmF1bHQsIHNjYWxlOiBfc2NhbGUyLmRlZmF1bHQsIHNoYWRvdzogX3NoYWRvdzIuZGVmYXVsdCwgdW5pdDogX3VuaXQyLmRlZmF1bHQgfTtcblxuLy8gVHJhbnNmb3JtZXJzXG5leHBvcnRzLnRyYW5zZm9ybWVycyA9IF90cmFuc2Zvcm1lcnM7XG5cbi8qXG4gICAgUmV0dXJucyBhIHZlcnNpb24gb2YgdGhlIEFjdGlvbiBib3VuZCB0byBhIEZsb3dcblxuICAgIFdlJ3JlIGFkZGluZyBgb25gIGhlcmUgYmVjYXVzZSBGbG93IGV4dGVuZHMgQWN0aW9uLFxuICAgIG90aGVyd2lzZSBjcmVhdGluZyBhIGNpcmN1bGFyIG1vZHVsYXIgZGVwZW5kZW5jeS4gRnV0dXJlXG4gICAgcmVmYWN0b3JpbmcsIGllIG1vdmluZyB0byBhIGNvbXBvc2l0aW9uYWwgbW9kZWwgd2lsbFxuICAgIHJlbW92ZSB0aGUgbmVlZCBmb3IgdXMgdG8gZG8gdGhpcyBoZXJlLlxuKi9cblxuX0FjdGlvbjIuZGVmYXVsdC5wcm90b3R5cGUub24gPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIGlmICghZWxlbWVudC5jb25uZWN0KSB7XG4gICAgICAgIGVsZW1lbnQgPSAoMCwgX2dldEZsb3cyLmRlZmF1bHQpKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50LmNvbm5lY3QodGhpcyk7XG59O1xuXG5leHBvcnRzLkFjdGlvbiA9IF9BY3Rpb24yLmRlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXdiM0J0YjNScGIyNHVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenR6UWtGdFExTTdPenM3UVVGc1ExUTdPenM3UVVGRFFUczdPenRCUVVOQk96czdPMEZCUTBFN096czdRVUZEUVRzN096dEJRVU5CT3pzN08wRkJRMEU3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN1FVRnpRa0U3T3pzN096czdPenM3T3p0QlFWTkJPenM3TzBGQlEwRTdPenM3UVVGRFFUczdPenRCUVVOQk96czdPMEZCUTBFN096czdRVUZEUVRzN096dEJRVU5CT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3TzBGQlEwRTdPenM3T3pzN096czdPenM3UVVGMFEwOHNTVUZCVFN4elFrRkJUenR6UTBGQlNUczdPenMwUlVGQmNVSTdRMEZCZWtJN08wRkJRMklzU1VGQlRTeDNRa0ZCVVN4VlFVRkRMRXRCUVVRN1YwRkJWeXh2UWtGQlZTeExRVUZXTzBOQlFWZzdRVUZEWkN4SlFVRk5MRFJDUVVGVkxGVkJRVU1zUzBGQlJEdFhRVUZYTEhOQ1FVRlpMRXRCUVZvN1EwRkJXRHRCUVVOb1FpeEpRVUZOTEhkQ1FVRlJPM1ZEUVVGSk96czdPelpGUVVGelFqdERRVUV4UWp0QlFVTmtMRWxCUVUwc2QwSkJRVkU3ZFVOQlFVazdPenM3TmtWQlFYTkNPME5CUVRGQ08wRkJRMlFzU1VGQlRTeHpRa0ZCVHp0MVEwRkJTVHM3T3pzMFJVRkJjVUk3UTBGQmVrSTdVVUZEWWp0UlFVTkJPenM3TzFGQlIwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk96czdPMUZCUjBFN1FVRkZRU3hKUVVGTkxHMUVRVUZPT3pzN1VVRkhTenRSUVVOQk96czdPMEZCWlV3c1NVRkJUU3huUTBGQldTeEZRVUZGTEhOQ1FVRkdMRVZCUVZNc2MwSkJRVlFzUlVGQlowSXNjMEpCUVdoQ0xFVkJRWFZDTERCQ1FVRjJRaXhGUVVGblF5eHJRa0ZCYUVNc1JVRkJjVU1zYTBKQlFYSkRMRVZCUVRCRExHZENRVUV4UXl4RlFVRTRReXhyUWtGQk9VTXNSVUZCYlVRc2MwSkJRVzVFTEVWQlFUQkVMSGRDUVVFeFJDeEZRVUZyUlN4dlFrRkJiRVVzUlVGQldqczdPMUZCUjBRN096czdPenM3T3pzN08wRkJWVm9zYVVKQlFVOHNVMEZCVUN4RFFVRnBRaXhGUVVGcVFpeEhRVUZ6UWl4VlFVRlZMRTlCUVZZc1JVRkJiVUk3UVVGRGNrTXNVVUZCU1N4RFFVRkRMRkZCUVZFc1QwRkJVaXhGUVVGcFFqdEJRVU5zUWl4clFrRkJWU3gxUWtGQlVTeFBRVUZTTEVOQlFWWXNRMEZFYTBJN1MwRkJkRUk3TzBGQlNVRXNWMEZCVHl4UlFVRlJMRTlCUVZJc1EwRkJaMElzU1VGQmFFSXNRMEZCVUN4RFFVeHhRenREUVVGdVFqczdVVUZSWWlJc0ltWnBiR1VpT2lKd2IzQnRiM1JwYjI0dWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUXZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lMeThnU1cxd2IzSjBJR05zWVhOelpYTWdMU0JzYjI1bklIUmxjbTBnWjI5aGJDQjBieUJ0YjNabElIUnZkMkZ5WkhNZ1kyOXRjRzl6YVhScGIyNWNibWx0Y0c5eWRDQkJZM1JwYjI0Z1puSnZiU0FuTGk5aFkzUnBiMjV6TDBGamRHbHZiaWM3WEc1cGJYQnZjblFnUm14dmR5Qm1jbTl0SUNjdUwyRmpkR2x2Ym5NdlJteHZkeWM3WEc1cGJYQnZjblFnVkhkbFpXNGdabkp2YlNBbkxpOWhZM1JwYjI1ekwxUjNaV1Z1Snp0Y2JtbHRjRzl5ZENCUWFIbHphV056SUdaeWIyMGdKeTR2WVdOMGFXOXVjeTlRYUhsemFXTnpKenRjYm1sdGNHOXlkQ0JVY21GamF5Qm1jbTl0SUNjdUwyRmpkR2x2Ym5NdlZISmhZMnNuTzF4dWFXMXdiM0owSUZSaGMyc2dabkp2YlNBbkxpOTBZWE5yTDFSaGMyc25PMXh1YVcxd2IzSjBJRWx1Y0hWMElHWnliMjBnSnk0dmFXNXdkWFF2U1c1d2RYUW5PMXh1WEc0dkx5QkZlSEJ2Y25RZ1ptRmpkRzl5ZVNCbWRXNWpkR2x2Ym5OY2JtVjRjRzl5ZENCamIyNXpkQ0JtYkc5M0lEMGdLQzR1TG1GeVozTXBJRDArSUc1bGR5QkdiRzkzS0M0dUxtRnlaM01wTzF4dVpYaHdiM0owSUdOdmJuTjBJSFIzWldWdUlEMGdLSEJ5YjNCektTQTlQaUJ1WlhjZ1ZIZGxaVzRvY0hKdmNITXBPMXh1Wlhod2IzSjBJR052Ym5OMElIQm9lWE5wWTNNZ1BTQW9jSEp2Y0hNcElEMCtJRzVsZHlCUWFIbHphV056S0hCeWIzQnpLVHRjYm1WNGNHOXlkQ0JqYjI1emRDQjBjbUZqYXlBOUlDZ3VMaTVoY21kektTQTlQaUJ1WlhjZ1ZISmhZMnNvTGk0dVlYSm5jeWs3WEc1bGVIQnZjblFnWTI5dWMzUWdhVzV3ZFhRZ1BTQW9MaTR1WVhKbmN5a2dQVDRnYm1WM0lFbHVjSFYwS0M0dUxtRnlaM01wTzF4dVpYaHdiM0owSUdOdmJuTjBJSFJoYzJzZ1BTQW9MaTR1WVhKbmN5a2dQVDRnYm1WM0lGUmhjMnNvTGk0dVlYSm5jeWs3WEc1bGVIQnZjblFnYzNSaFoyZGxjaUJtY205dElDY3VMMmx1WXk5emRHRm5aMlZ5Snp0Y2JtVjRjRzl5ZENCMGFXMWxiR2x1WlNCbWNtOXRJQ2N1TDJsdVl5OTBhVzFsYkdsdVpTYzdYRzVjYmk4dklFRmtZWEIwWlhKelhHNWxlSEJ2Y25RZ1kzSmxZWFJsUVdSaGNIUmxjaUJtY205dElDY3VMMkZrWVhCMFpYSXZZV1JoY0hSbGNpYzdYRzVsZUhCdmNuUWdZWFIwY2lCbWNtOXRJQ2N1TDJGa1lYQjBaWEl2WVhSMGNpMWhaR0Z3ZEdWeUp6dGNibVY0Y0c5eWRDQmpjM01nWm5KdmJTQW5MaTloWkdGd2RHVnlMMk56Y3kxaFpHRndkR1Z5Snp0Y2JtVjRjRzl5ZENCdlltcGxZM1FnWm5KdmJTQW5MaTloWkdGd2RHVnlMMjlpYW1WamRDMWhaR0Z3ZEdWeUp6dGNibVY0Y0c5eWRDQnpkbWNnWm5KdmJTQW5MaTloWkdGd2RHVnlMM04yWnkxaFpHRndkR1Z5Snp0Y2JtVjRjRzl5ZENCemRtZFFZWFJvSUdaeWIyMGdKeTR2WVdSaGNIUmxjaTl6ZG1jdGNHRjBhQzFoWkdGd2RHVnlKenRjYmx4dUx5OGdSV0Z6YVc1blhHNWxlSEJ2Y25RZ1pXRnphVzVuSUdaeWIyMGdKeTR2WVdOMGFXOXVjeTlsWVhOcGJtY3ZjSEpsYzJWMExXVmhjMmx1WnljN1hHNXBiWEJ2Y25RZ1oyVjBSbXh2ZHlCbWNtOXRJQ2N1TDJGamRHbHZibk12Wm14dmR5OW5aWFF0Wm14dmR5YzdYRzVsZUhCdmNuUWdZMjl1YzNRZ1pHVjBaV04wUm14dmR5QTlJR2RsZEVac2IzYzdYRzVjYmk4dklGVjBhV3h6WEc1bGVIQnZjblFnS2lCaGN5QmpZV3hqSUdaeWIyMGdKeTR2YVc1akwyTmhiR01uTzF4dVpYaHdiM0owSUNvZ1lYTWdkWFJwYkhNZ1puSnZiU0FuTGk5cGJtTXZkWFJwYkhNbk8xeHVaWGh3YjNKMElIc2djMlYwUjJ4dlltRnNSR2xzWVhScGIyNGdmU0JtY205dElDY3VMM1JoYzJzdmRHbHRaWEluTzF4dVhHNHZMeUJXWVd4MVpTQjBlWEJsYzF4dWFXMXdiM0owSUdGc2NHaGhJR1p5YjIwZ0p5NHZkbUZzZFdVdGRIbHdaWE12WVd4d2FHRW5PMXh1YVcxd2IzSjBJR0Z1WjJ4bElHWnliMjBnSnk0dmRtRnNkV1V0ZEhsd1pYTXZZVzVuYkdVbk8xeHVhVzF3YjNKMElHTnZiRzl5SUdaeWIyMGdKeTR2ZG1Gc2RXVXRkSGx3WlhNdlkyOXNiM0luTzF4dWFXMXdiM0owSUdOdmJYQnNaWGdnWm5KdmJTQW5MaTkyWVd4MVpTMTBlWEJsY3k5amIyMXdiR1Y0Snp0Y2JtbHRjRzl5ZENCb1pYZ2dabkp2YlNBbkxpOTJZV3gxWlMxMGVYQmxjeTlvWlhnbk8xeHVhVzF3YjNKMElHaHpiQ0JtY205dElDY3VMM1poYkhWbExYUjVjR1Z6TDJoemJDYzdYRzVwYlhCdmNuUWdjSGdnWm5KdmJTQW5MaTkyWVd4MVpTMTBlWEJsY3k5d2VDYzdYRzVwYlhCdmNuUWdjbWRpSUdaeWIyMGdKeTR2ZG1Gc2RXVXRkSGx3WlhNdmNtZGlKenRjYm1sdGNHOXlkQ0J6WTJGc1pTQm1jbTl0SUNjdUwzWmhiSFZsTFhSNWNHVnpMM05qWVd4bEp6dGNibWx0Y0c5eWRDQnphR0ZrYjNjZ1puSnZiU0FuTGk5MllXeDFaUzEwZVhCbGN5OXphR0ZrYjNjbk8xeHVhVzF3YjNKMElIVnVhWFFnWm5KdmJTQW5MaTkyWVd4MVpTMTBlWEJsY3k5MWJtbDBKenRjYm1WNGNHOXlkQ0JqYjI1emRDQjJZV3gxWlZSNWNHVWdQU0I3SUdGc2NHaGhMQ0JoYm1kc1pTd2dZMjlzYjNJc0lHTnZiWEJzWlhnc0lHaGxlQ3dnYUhOc0xDQndlQ3dnY21kaUxDQnpZMkZzWlN3Z2MyaGhaRzkzTENCMWJtbDBJSDA3WEc1Y2JpOHZJRlJ5WVc1elptOXliV1Z5YzF4dVpYaHdiM0owSUNvZ1lYTWdkSEpoYm5ObWIzSnRaWEp6SUdaeWIyMGdKeTR2YVc1akwzUnlZVzV6Wm05eWJXVnljeWM3WEc1Y2JpOHFYRzRnSUNBZ1VtVjBkWEp1Y3lCaElIWmxjbk5wYjI0Z2IyWWdkR2hsSUVGamRHbHZiaUJpYjNWdVpDQjBieUJoSUVac2IzZGNibHh1SUNBZ0lGZGxKM0psSUdGa1pHbHVaeUJnYjI1Z0lHaGxjbVVnWW1WallYVnpaU0JHYkc5M0lHVjRkR1Z1WkhNZ1FXTjBhVzl1TEZ4dUlDQWdJRzkwYUdWeWQybHpaU0JqY21WaGRHbHVaeUJoSUdOcGNtTjFiR0Z5SUcxdlpIVnNZWElnWkdWd1pXNWtaVzVqZVM0Z1JuVjBkWEpsWEc0Z0lDQWdjbVZtWVdOMGIzSnBibWNzSUdsbElHMXZkbWx1WnlCMGJ5QmhJR052YlhCdmMybDBhVzl1WVd3Z2JXOWtaV3dnZDJsc2JGeHVJQ0FnSUhKbGJXOTJaU0IwYUdVZ2JtVmxaQ0JtYjNJZ2RYTWdkRzhnWkc4Z2RHaHBjeUJvWlhKbExseHVLaTljYmtGamRHbHZiaTV3Y205MGIzUjVjR1V1YjI0Z1BTQm1kVzVqZEdsdmJpQW9aV3hsYldWdWRDa2dlMXh1SUNBZ0lHbG1JQ2doWld4bGJXVnVkQzVqYjI1dVpXTjBLU0I3WEc0Z0lDQWdJQ0FnSUdWc1pXMWxiblFnUFNCblpYUkdiRzkzS0dWc1pXMWxiblFwTzF4dUlDQWdJSDFjYmx4dUlDQWdJSEpsZEhWeWJpQmxiR1Z0Wlc1MExtTnZibTVsWTNRb2RHaHBjeWs3WEc1OU8xeHVYRzVsZUhCdmNuUWdleUJCWTNScGIyNGdmVHNpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcG9wbW90aW9uLmpzXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5zZXRHbG9iYWxEaWxhdGlvbiA9IHVuZGVmaW5lZDtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG52YXIgTUFYX0VMQVBTRUQgPSAzMztcblxudmFyIGN1cnJlbnQgPSAwO1xudmFyIGVsYXBzZWQgPSAxNi43O1xudmFyIGRpbGF0aW9uID0gMTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGZyYW1lc3RhbXApIHtcbiAgICAgICAgZWxhcHNlZCA9IE1hdGgubWF4KE1hdGgubWluKGZyYW1lc3RhbXAgLSBjdXJyZW50LCBNQVhfRUxBUFNFRCksIDEpICogZGlsYXRpb247XG4gICAgICAgIGN1cnJlbnQgPSBmcmFtZXN0YW1wO1xuICAgIH0sXG5cbiAgICBzdGFydDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gY3VycmVudCA9ICgwLCBfdXRpbHMuY3VycmVudFRpbWUpKCk7XG4gICAgfSxcblxuICAgIGdldEVsYXBzZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGVsYXBzZWQ7XG4gICAgfVxufTtcbnZhciBzZXRHbG9iYWxEaWxhdGlvbiA9IGV4cG9ydHMuc2V0R2xvYmFsRGlsYXRpb24gPSBmdW5jdGlvbiAobmV3RGlsYXRpb24pIHtcbiAgICByZXR1cm4gZGlsYXRpb24gPSBuZXdEaWxhdGlvbjtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTBZWE5yTDNScGJXVnlMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN08wRkJRVUU3TzBGQlJVRXNTVUZCVFN4alFVRmpMRVZCUVdRN08wRkJSVTRzU1VGQlNTeFZRVUZWTEVOQlFWWTdRVUZEU2l4SlFVRkpMRlZCUVZVc1NVRkJWanRCUVVOS0xFbEJRVWtzVjBGQlZ5eERRVUZZT3p0clFrRkZWenRCUVVOWUxGbEJRVkVzVlVGQlF5eFZRVUZFTEVWQlFXZENPMEZCUTNCQ0xHdENRVUZWTEV0QlFVc3NSMEZCVEN4RFFVRlRMRXRCUVVzc1IwRkJUQ3hEUVVGVExHRkJRV0VzVDBGQllpeEZRVUZ6UWl4WFFVRXZRaXhEUVVGVUxFVkJRWE5FTEVOQlFYUkVMRWxCUVRKRUxGRkJRVE5FTEVOQlJGVTdRVUZGY0VJc2EwSkJRVlVzVlVGQlZpeERRVVp2UWp0TFFVRm9RanM3UVVGTFVpeFhRVUZQTzJWQlFVMHNWVUZCVlN4NVFrRkJWanRMUVVGT096dEJRVVZRTEdkQ1FVRlpPMlZCUVUwN1MwRkJUanM3UVVGSFZDeEpRVUZOTEdkRVFVRnZRaXhWUVVGRExGZEJRVVE3VjBGQmFVSXNWMEZCVnl4WFFVRllPME5CUVdwQ0lpd2labWxzWlNJNkluUnBiV1Z5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMEwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCN0lHTjFjbkpsYm5SVWFXMWxJSDBnWm5KdmJTQW5MaTR2YVc1akwzVjBhV3h6Snp0Y2JseHVZMjl1YzNRZ1RVRllYMFZNUVZCVFJVUWdQU0F6TXp0Y2JseHViR1YwSUdOMWNuSmxiblFnUFNBd08xeHViR1YwSUdWc1lYQnpaV1FnUFNBeE5pNDNPMXh1YkdWMElHUnBiR0YwYVc5dUlEMGdNVHRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnZTF4dUlDQWdJSFZ3WkdGMFpUb2dLR1p5WVcxbGMzUmhiWEFwSUQwK0lIdGNiaUFnSUNBZ0lDQWdaV3hoY0hObFpDQTlJRTFoZEdndWJXRjRLRTFoZEdndWJXbHVLR1p5WVcxbGMzUmhiWEFnTFNCamRYSnlaVzUwTENCTlFWaGZSVXhCVUZORlJDa3NJREVwSUNvZ1pHbHNZWFJwYjI0N1hHNGdJQ0FnSUNBZ0lHTjFjbkpsYm5RZ1BTQm1jbUZ0WlhOMFlXMXdPMXh1SUNBZ0lIMHNYRzVjYmlBZ0lDQnpkR0Z5ZERvZ0tDa2dQVDRnWTNWeWNtVnVkQ0E5SUdOMWNuSmxiblJVYVcxbEtDa3NYRzVjYmlBZ0lDQm5aWFJGYkdGd2MyVmtPaUFvS1NBOVBpQmxiR0Z3YzJWa1hHNTlPMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdjMlYwUjJ4dlltRnNSR2xzWVhScGIyNGdQU0FvYm1WM1JHbHNZWFJwYjI0cElEMCtJR1JwYkdGMGFXOXVJRDBnYm1WM1JHbHNZWFJwYjI0N0lsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3Rhc2svdGltZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfVGFzazIgPSByZXF1aXJlKCcuLi90YXNrL1Rhc2snKTtcblxudmFyIF9UYXNrMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1Rhc2syKTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG52YXIgX2RldGVjdCA9IHJlcXVpcmUoJy4uL3ZhbHVlLXR5cGVzL2RldGVjdCcpO1xuXG52YXIgX2RldGVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZXRlY3QpO1xuXG52YXIgX251bWVyaWNhbFZhbHVlcyA9IHJlcXVpcmUoJy4uL2luYy9udW1lcmljYWwtdmFsdWVzJyk7XG5cbnZhciBfbnVtZXJpY2FsVmFsdWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX251bWVyaWNhbFZhbHVlcyk7XG5cbnZhciBfZGV0ZWN0QWRhcHRlciA9IHJlcXVpcmUoJy4uL2luYy9kZXRlY3QtYWRhcHRlcicpO1xuXG52YXIgX2RldGVjdEFkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGV0ZWN0QWRhcHRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgTlVNX05VTUVSSUNBTF9WQUxVRVMgPSBfbnVtZXJpY2FsVmFsdWVzMi5kZWZhdWx0Lmxlbmd0aDtcblxudmFyIGRlZmF1bHRSZW5kZXJlciA9IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZTtcbiAgICB2YXIgYWRhcHRlciA9IF9yZWYuYWRhcHRlcjtcbiAgICB2YXIgYWRhcHRlckRhdGEgPSBfcmVmLmFkYXB0ZXJEYXRhO1xuICAgIHZhciBlbGVtZW50ID0gX3JlZi5lbGVtZW50O1xuICAgIHJldHVybiBhZGFwdGVyKGVsZW1lbnQsIHN0YXRlLCBhZGFwdGVyRGF0YSk7XG59O1xuXG52YXIgY29udmVydElmU2hvdWxkQmVOdW1iZXIgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gIWlzTmFOKHZhbHVlKSA/IHBhcnNlRmxvYXQodmFsdWUpIDogdmFsdWU7XG59O1xuXG52YXIgQWN0aW9uID0gZnVuY3Rpb24gKF9UYXNrKSB7XG4gICAgX2luaGVyaXRzKEFjdGlvbiwgX1Rhc2spO1xuXG4gICAgZnVuY3Rpb24gQWN0aW9uKCkge1xuICAgICAgICB2YXIgcHJvcHMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1swXTtcblxuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQWN0aW9uKTtcblxuICAgICAgICBwcm9wcy5zdGF0ZSA9IHt9O1xuICAgICAgICBwcm9wcy52YWx1ZUtleXMgPSBbXTtcbiAgICAgICAgcHJvcHMucGFyZW50S2V5cyA9IFtdO1xuICAgICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1Rhc2suY2FsbCh0aGlzLCBwcm9wcykpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgICMgU2V0IEFjdGlvbiBwcm9wZXJ0aWVzXG4gICAgICAgICMjIFNldCB1c2VyLWRlZmluZWQgQWN0aW9uIHByb3BlcnRpZXNcbiAgICAgICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgICAgICBAcmV0dXJuIFtBY3Rpb25dXG4gICAgKi9cblxuXG4gICAgQWN0aW9uLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiBzZXQoKSB7XG4gICAgICAgIHZhciBwcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzBdO1xuXG4gICAgICAgIHRoaXMudmFsdWVzID0gdGhpcy52YWx1ZXMgfHwge307XG5cbiAgICAgICAgdmFyIHZhbHVlcyA9IHByb3BzLnZhbHVlcztcblxuICAgICAgICB2YXIgcHJvcHNUb1NldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgWyd2YWx1ZXMnXSk7XG5cbiAgICAgICAgdmFyIGluaGVyaXRhYmxlID0ge307XG5cbiAgICAgICAgLy8gU2V0IG5vbi1jb25zdW1lZCBwcm9wZXJ0aWVzXG4gICAgICAgIF9UYXNrLnByb3RvdHlwZS5zZXQuY2FsbCh0aGlzLCBwcm9wc1RvU2V0KTtcblxuICAgICAgICAvLyBEZXRlY3QgY29ycmVjdCBgYWRhcHRlcmAgaWYgbm9uZSBleGlzdHMgYW5kIGBlbGVtZW50YCBpcyBiZWluZyBzZXRcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmFkYXB0ZXIpIHtcbiAgICAgICAgICAgICAgICAvLyBEdWNrdHlwaXNoIGNoZWNrIGZvciBBZGFwdGVyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGFwdGVyID0gKDAsIF9kZXRlY3RBZGFwdGVyMi5kZWZhdWx0KSh0aGlzLmVsZW1lbnQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYWRhcHRlci5nZXRFbGVtZW50RGF0YSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkYXB0ZXJEYXRhID0gdGhpcy5hZGFwdGVyLmdldEVsZW1lbnREYXRhKHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXRoaXMub25SZW5kZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uUmVuZGVyID0gZGVmYXVsdFJlbmRlcmVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUHJpbWUgYW4gb2JqZWN0IHRvIGluaGVyaXQgZnJvbSwgd2l0aCBvbmx5IGB2YWx1ZWAgcHJvcGVydGllc1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5kZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRlZmF1bHRWYWx1ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzVG9TZXQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBpbmhlcml0YWJsZVtrZXldID0gcHJvcHNUb1NldFtrZXldO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpc1trZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5oZXJpdGFibGVba2V5XSA9IHRoaXNba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgZXhpc3RpbmcgdmFsdWVzIHdpdGggaW5oZXJpdGFibGUgcHJvcGVydGllc1xuICAgICAgICBmb3IgKHZhciBfa2V5IGluIHRoaXMudmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy52YWx1ZXMuaGFzT3duUHJvcGVydHkoX2tleSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlc1tfa2V5XSA9IF9leHRlbmRzKHt9LCB0aGlzLnZhbHVlc1tfa2V5XSwgaW5oZXJpdGFibGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlXG4gICAgICAgIGlmICh2YWx1ZXMpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0VmFsdWVzKHZhbHVlcywgaW5oZXJpdGFibGUpO1xuXG4gICAgICAgICAgICAvLyBQcmVjb21wdXRlIG51bWJlciBvZiB2YWx1ZSBrZXkgYW5kIHBhcmVudCBrZXlzIHRvIGF2b2lkIHBlci1mcmFtZSBtZWFzdXJlbWVudFxuICAgICAgICAgICAgdGhpcy5udW1WYWx1ZUtleXMgPSB0aGlzLnZhbHVlS2V5cy5sZW5ndGg7XG4gICAgICAgICAgICB0aGlzLm51bVBhcmVudEtleXMgPSB0aGlzLnBhcmVudEtleXMubGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIEFjdGlvbi5wcm90b3R5cGUuc2V0VmFsdWVzID0gZnVuY3Rpb24gc2V0VmFsdWVzKHZhbHVlcywgaW5oZXJpdCkge1xuICAgICAgICAvLyBJdGVyYXRlIG92ZXIgYWxsIGluY29taW5nIHZhbHVlcyBhbmQgc2V0XG4gICAgICAgIGZvciAodmFyIGtleSBpbiB2YWx1ZXMpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHZhciBoYXNDaGlsZHJlbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHZhciBjaGlsZHJlbiA9IHt9O1xuXG4gICAgICAgICAgICAgICAgLy8gTWVyZ2UgaW50byBleGlzdGluZyB2YWx1ZSBvciBjcmVhdGUgbmV3XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlQWxyZWFkeUV4aXN0cyA9IHRoaXMudmFsdWVzW2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB2YXIgbmV3VmFsdWUgPSB2YWx1ZUFscmVhZHlFeGlzdHMgPyBfZXh0ZW5kcyh7fSwgdGhpcy52YWx1ZXNba2V5XSkgOiBfZXh0ZW5kcyh7fSwgaW5oZXJpdCk7XG5cbiAgICAgICAgICAgICAgICAvLyBJZiB2YWx1ZXMgaXMgbm90IGFuIG9iamVjdCwgYXNzaWduIHZhbHVlIHRvIGRlZmF1bHQgcHJvcFxuICAgICAgICAgICAgICAgIGlmICghKDAsIF91dGlscy5pc09iaikodmFsdWVzW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlW3RoaXMuZGVmYXVsdFZhbHVlUHJvcF0gPSB2YWx1ZXNba2V5XTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IF9leHRlbmRzKHt9LCBuZXdWYWx1ZSwgdmFsdWVzW2tleV0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIElmIHdlJ3ZlIGdvdCBhbiBhZGFwdGVyLCBnZXQgdGhlIGN1cnJlbnQgdmFsdWVcbiAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUuY3VycmVudCA9PT0gdW5kZWZpbmVkICYmIHRoaXMuYWRhcHRlcikge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS5jdXJyZW50ID0gY29udmVydElmU2hvdWxkQmVOdW1iZXIodGhpcy5hZGFwdGVyLmdldCh0aGlzLmVsZW1lbnQsIGtleSkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZS5mcm9tID09PSB1bmRlZmluZWQgJiYgdGhpcy5hZGFwdGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLmZyb20gPSBuZXdWYWx1ZS5jdXJyZW50O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIEFwcGx5IGRlZmF1bHQgdmFsdWUgcHJvcGVydGllc1xuICAgICAgICAgICAgICAgIGlmICghdmFsdWVBbHJlYWR5RXhpc3RzKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gX2V4dGVuZHMoe30sIHRoaXMuZGVmYXVsdFZhbHVlLCBuZXdWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gSWYgd2UgZG9uJ3QgaGF2ZSBhIHZhbHVlIHR5cGUgYW5kIHdlIGRvIGhhdmUgYW4gQWRhcHRlciwgY2hlY2sgZm9yIHR5cGUgd2l0aCB2YWx1ZSBrZXlcbiAgICAgICAgICAgICAgICBpZiAoIW5ld1ZhbHVlLnR5cGUgJiYgdGhpcy5hZGFwdGVyICYmIHRoaXMuYWRhcHRlci5jaGVja1ZhbHVlVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS50eXBlID0gdGhpcy5hZGFwdGVyLmNoZWNrVmFsdWVUeXBlKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gSWYgd2Ugc3RpbGwgZG9uJ3QgaGF2ZSBhIHZhbHVlIHR5cGUgYW5kIHRoaXMgaXMgdGhlIGZpcnN0IHRpbWUgd2UndmUgc2V0IHRoaXMgdmFsdWUsIGNoZWNrIG51bWVyaWNhbCB2YWx1ZXMgZm9yIHN0cmluZ3MgYW5kIHRlc3RcbiAgICAgICAgICAgICAgICBpZiAoIW5ld1ZhbHVlLnR5cGUgJiYgIXRoaXMudmFsdWVzW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUudHlwZSA9ICgwLCBfZGV0ZWN0Mi5kZWZhdWx0KShuZXdWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gSWYgd2UgaGF2ZSBhIHZhbHVlIHR5cGUsIGhhbmRsZS4gVGhpcyBpcyBteSBsZWFzdCBmYXZvdXJpdGUgcGFydCBvZiBQb3Btb3Rpb24sIHNvLi4uIGVuam95LlxuICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZS50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgTlVNX05VTUVSSUNBTF9WQUxVRVM7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByb3BOYW1lID0gX251bWVyaWNhbFZhbHVlczIuZGVmYXVsdFtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZVByb3AgPSBuZXdWYWx1ZVtwcm9wTmFtZV07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHRoaXMgcHJvcCBpcyBhIHN0cmluZyBhbmQgd2UgaGF2ZSBhIHNwbGl0dGVyLCBzcGxpdFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlLnR5cGUuaGFzT3duUHJvcGVydHkoJ3NwbGl0JykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3BsaXRQcm9wID0gKDAsIF91dGlscy5pc1N0cmluZykodmFsdWVQcm9wKSA/IG5ld1ZhbHVlLnR5cGUuc3BsaXQodmFsdWVQcm9wKSA6IHt9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgc3BsaXRLZXkgaW4gc3BsaXRQcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzcGxpdFByb3AuaGFzT3duUHJvcGVydHkoc3BsaXRLZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29tYmluZWRLZXkgPSBrZXkgKyBzcGxpdEtleTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgd2UgZG9uJ3QgaGF2ZSBhIGNoaWxkIHZhbHVlIGZvciB0aGlzIGtleSwgbWFrZSBvbmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY2hpbGRyZW5bY29tYmluZWRLZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRlZmF1bHRWYWx1ZSA9IG5ld1ZhbHVlLnR5cGUuZGVmYXVsdFByb3BzICYmIG5ld1ZhbHVlLnR5cGUuZGVmYXVsdFByb3BzW3NwbGl0S2V5XSA/IG5ld1ZhbHVlLnR5cGUuZGVmYXVsdFByb3BzW3NwbGl0S2V5XSA6IG5ld1ZhbHVlLnR5cGUuZGVmYXVsdFByb3BzIHx8IHt9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW5bY29tYmluZWRLZXldID0gX2V4dGVuZHMoe30sIG5ld1ZhbHVlLCBkZWZhdWx0VmFsdWUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkS2V5OiBzcGxpdEtleVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGNoaWxkcmVuW2NvbWJpbmVkS2V5XS50eXBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNDaGlsZHJlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbltjb21iaW5lZEtleV1bcHJvcE5hbWVdID0gcGFyc2VGbG9hdChzcGxpdFByb3Bbc3BsaXRLZXldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHdlIGhhdmUgYSB0ZW1wbGF0ZSBmdW5jdGlvbiwgZ2VuZXJhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW5ld1ZhbHVlLnRlbXBsYXRlICYmIG5ld1ZhbHVlLnR5cGUudGVtcGxhdGUgJiYgKDAsIF91dGlscy5pc1N0cmluZykodmFsdWVQcm9wKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS50ZW1wbGF0ZSA9IG5ld1ZhbHVlLnR5cGUudGVtcGxhdGUodmFsdWVQcm9wKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5ld1ZhbHVlLnR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSBfZXh0ZW5kcyh7fSwgbmV3VmFsdWUsIG5ld1ZhbHVlLnR5cGUuZGVmYXVsdFByb3BzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlUHJvcCAhPT0gdW5kZWZpbmVkICYmIG5ld1ZhbHVlLnR5cGUucGFyc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZVtwcm9wTmFtZV0gPSBuZXdWYWx1ZS50eXBlLnBhcnNlKHZhbHVlUHJvcCwgbmV3VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSAvLyBFbmQgdmFsdWUgdHlwZSBub25zZW5zZVxuXG4gICAgICAgICAgICAgICAgLy8gU2V0IGBwcmV2YCB0byBgY3VycmVudGAgZm9yIGZpcnN0IGZyYW1lIGFmdGVyIHNldFxuICAgICAgICAgICAgICAgIG5ld1ZhbHVlLnByZXYgPSBuZXdWYWx1ZS5jdXJyZW50O1xuXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhpcyB2YWx1ZSBkb2Vzbid0IGhhdmUgY2hpbGRyZW4sIGFkZCB0byB2YWx1ZUtleXNcbiAgICAgICAgICAgICAgICBpZiAoIWhhc0NoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlS2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlS2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBPciBhZGQgdG8gcGFyZW50S2V5c1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS5jaGlsZHJlbiA9IG5ld1ZhbHVlLmNoaWxkcmVuIHx8IHt9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJlbnRLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudEtleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFZhbHVlcyhjaGlsZHJlbik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMudmFsdWVzW2tleV0gPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKlxuICAgICAgICBEZWNpZGUgd2hldGhlciB0aGlzIEFjdGlvbiB3aWxsIHJlbmRlciBvbiBuZXh0IGZyYW1lXG4gICAgICAgICBAcGFyYW0gW0FjdGlvbl1cbiAgICAgICAgQHBhcmFtIFtudW1iZXJdXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJuIHRydWUgdG8gcmVuZGVyXG4gICAgKi9cblxuXG4gICAgQWN0aW9uLnByb3RvdHlwZS53aWxsUmVuZGVyID0gZnVuY3Rpb24gd2lsbFJlbmRlcihhY3Rpb24sIGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgICAgICAgdmFyIGhhc0NoYW5nZWQgPSBmYWxzZTtcblxuICAgICAgICAvLyBDaGVjayBpZiBiYXNlIHZhbHVlcyBoYXZlIHVwZGF0ZWRcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gdGhpcy52YWx1ZUtleXNbaV07XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuXG4gICAgICAgICAgICAvLyBSdW4gdHJhbnNmb3JtIGZ1bmN0aW9uIChpZiBwcmVzZW50KVxuICAgICAgICAgICAgaWYgKHZhbHVlLnRyYW5zZm9ybSkge1xuICAgICAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSB2YWx1ZS50cmFuc2Zvcm0odmFsdWUuY3VycmVudCwga2V5LCB0aGlzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ2FwIG1pbmltdW1cbiAgICAgICAgICAgIGlmICgoMCwgX3V0aWxzLmlzTnVtKSh2YWx1ZS5taW4pKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IE1hdGgubWF4KHZhbHVlLmN1cnJlbnQsIHZhbHVlLm1pbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENhcCBtYXhpbXVtXG4gICAgICAgICAgICBpZiAoKDAsIF91dGlscy5pc051bSkodmFsdWUubWF4KSkge1xuICAgICAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSBNYXRoLm1pbih2YWx1ZS5jdXJyZW50LCB2YWx1ZS5tYXgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBSb3VuZCBudW1iZXJcbiAgICAgICAgICAgIGlmICh2YWx1ZS5yb3VuZCkge1xuICAgICAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSBNYXRoLnJvdW5kKHZhbHVlLmN1cnJlbnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YWx1ZS5mcmFtZUNoYW5nZSA9IHZhbHVlLmN1cnJlbnQgLSB2YWx1ZS5wcmV2O1xuXG4gICAgICAgICAgICAvLyBVcGRhdGUgdmVsb2NpdHlcbiAgICAgICAgICAgIGlmICghdGhpcy5jYWxjdWxhdGVzVmVsb2NpdHkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS52ZWxvY2l0eSA9ICgwLCBfY2FsYy5zcGVlZFBlclNlY29uZCkodmFsdWUuZnJhbWVDaGFuZ2UsIGVsYXBzZWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiB0aGlzIHZhbHVlIGhhcyBjaGFuZ2VkXG4gICAgICAgICAgICBpZiAodmFsdWUucHJldiAhPT0gdmFsdWUuY3VycmVudCkge1xuICAgICAgICAgICAgICAgIGhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHZhbHVlLnByZXYgPSB2YWx1ZS5jdXJyZW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBBcHBlbmQgdW5pdFxuICAgICAgICAgICAgdmFyIHZhbHVlRm9yU3RhdGUgPSB2YWx1ZS50eXBlICYmIHZhbHVlLnR5cGUuc2VyaWFsaXplID8gdmFsdWUudHlwZS5zZXJpYWxpemUodmFsdWUuY3VycmVudCwgdmFsdWUpIDogdmFsdWUuY3VycmVudDtcblxuICAgICAgICAgICAgLy8gQWRkIHRvIHN0YXRlIGlmIHRoaXMgaXMgbm90IGEgY2hpbGQgdmF1ZVxuICAgICAgICAgICAgaWYgKCF2YWx1ZS5wYXJlbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlW2tleV0gPSB2YWx1ZUZvclN0YXRlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlc1t2YWx1ZS5wYXJlbnRdLmNoaWxkcmVuW3ZhbHVlLmNoaWxkS2V5XSA9IHZhbHVlRm9yU3RhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgcGFyZW50IHZhbHVlc1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdGhpcy5udW1QYXJlbnRLZXlzOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgX2tleTIgPSB0aGlzLnBhcmVudEtleXNbX2ldO1xuICAgICAgICAgICAgdmFyIF92YWx1ZSA9IHRoaXMudmFsdWVzW19rZXkyXTtcblxuICAgICAgICAgICAgX3ZhbHVlLmN1cnJlbnQgPSBfdmFsdWUudHlwZS5jb21iaW5lKF92YWx1ZS5jaGlsZHJlbiwgX3ZhbHVlLnRlbXBsYXRlKTtcblxuICAgICAgICAgICAgdGhpcy5zdGF0ZVtfa2V5Ml0gPSBfdmFsdWUuY3VycmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm9uRnJhbWUpIHtcbiAgICAgICAgICAgIHRoaXMub25GcmFtZSh0aGlzLnN0YXRlLCB0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLm9uQ2xlYW51cCA/IHRydWUgOiBoYXNDaGFuZ2VkO1xuICAgIH07XG5cbiAgICBBY3Rpb24ucHJvdG90eXBlLmluaGVyaXQgPSBmdW5jdGlvbiBpbmhlcml0KCkge1xuICAgICAgICB2YXIgcHJvcHMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1swXTtcbiAgICAgICAgdmFyIHZhbHVlcyA9IHByb3BzLnZhbHVlcztcblxuICAgICAgICB2YXIgcHJvcHNUb1NldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgWyd2YWx1ZXMnXSk7XG5cbiAgICAgICAgdmFyIG5ld0FjdGlvbiA9IF9UYXNrLnByb3RvdHlwZS5pbmhlcml0LmNhbGwodGhpcywgcHJvcHNUb1NldCk7XG5cbiAgICAgICAgaWYgKHZhbHVlcykge1xuICAgICAgICAgICAgbmV3QWN0aW9uLnNldCh7IHZhbHVlczogdmFsdWVzIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ld0FjdGlvbjtcbiAgICB9O1xuXG4gICAgQWN0aW9uLnByb3RvdHlwZS5wYXVzZSA9IGZ1bmN0aW9uIHBhdXNlKCkge1xuICAgICAgICBfVGFzay5wcm90b3R5cGUuc3RvcC5jYWxsKHRoaXMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgQWN0aW9uLnByb3RvdHlwZS5yZXN1bWUgPSBmdW5jdGlvbiByZXN1bWUoKSB7XG4gICAgICAgIF9UYXNrLnByb3RvdHlwZS5zdGFydC5jYWxsKHRoaXMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgQWN0aW9uLnByb3RvdHlwZS50b2dnbGUgPSBmdW5jdGlvbiB0b2dnbGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzQWN0aXZlID8gdGhpcy5wYXVzZSgpIDogdGhpcy5yZXN1bWUoKTtcbiAgICB9O1xuXG4gICAgQWN0aW9uLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgICB2YXIgdmFsdWVzID0gdGhpcy52YWx1ZXM7XG4gICAgICAgIF9UYXNrLnByb3RvdHlwZS5zdGFydC5jYWxsKHRoaXMpO1xuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiB2YWx1ZXMpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHZhbHVlc1trZXldLnByZXYgPSB2YWx1ZXNba2V5XS5vcmlnaW4gPSB2YWx1ZXNba2V5XS5jdXJyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIEFjdGlvbi5leHRlbmREZWZhdWx0VmFsdWUgPSBmdW5jdGlvbiBleHRlbmREZWZhdWx0VmFsdWUocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCB0aGlzLnByb3RvdHlwZS5kZWZhdWx0VmFsdWUsIHByb3BzKTtcbiAgICB9O1xuXG4gICAgQWN0aW9uLmV4dGVuZERlZmF1bHRQcm9wcyA9IGZ1bmN0aW9uIGV4dGVuZERlZmF1bHRQcm9wcyhwcm9wcykge1xuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHRoaXMucHJvdG90eXBlLmRlZmF1bHRQcm9wcywgcHJvcHMpO1xuICAgIH07XG5cbiAgICByZXR1cm4gQWN0aW9uO1xufShfVGFzazMuZGVmYXVsdCk7XG5cbkFjdGlvbi5wcm90b3R5cGUuZGVmYXVsdFZhbHVlUHJvcCA9ICdjdXJyZW50JztcbkFjdGlvbi5wcm90b3R5cGUuZGVmYXVsdFZhbHVlID0ge1xuICAgIGN1cnJlbnQ6IDAsXG4gICAgdmVsb2NpdHk6IDAsXG4gICAgcm91bmQ6IGZhbHNlLFxuICAgIG1pbjogdW5kZWZpbmVkLFxuICAgIG1heDogdW5kZWZpbmVkLFxuICAgIHRyYW5zZm9ybTogdW5kZWZpbmVkXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBBY3Rpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwwRmpkR2x2Ymk1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3UVVGQlFUczdPenRCUVVOQk96dEJRVU5CT3p0QlFVTkJPenM3TzBGQlEwRTdPenM3UVVGRFFUczdPenM3T3pzN096czdPenM3UVVGRlFTeEpRVUZOTEhWQ1FVRjFRaXd3UWtGQmFVSXNUVUZCYWtJN08wRkJSVGRDTEVsQlFVMHNhMEpCUVd0Q08xRkJRVWM3VVVGQlR6dFJRVUZUTzFGQlFXRTdWMEZCWXl4UlFVRlJMRTlCUVZJc1JVRkJhVUlzUzBGQmFrSXNSVUZCZDBJc1YwRkJlRUk3UTBGQk9VTTdPMEZCUlhoQ0xFbEJRVTBzTUVKQlFUQkNMRlZCUVVNc1MwRkJSRHRYUVVGWExFTkJRVU1zVFVGQlRTeExRVUZPTEVOQlFVUXNSMEZCWjBJc1YwRkJWeXhMUVVGWUxFTkJRV2hDTEVkQlFXOURMRXRCUVhCRE8wTkJRVmc3TzBsQlJURkNPenM3UVVGRFJpeGhRVVJGTEUxQlEwWXNSMEZCZDBJN1dVRkJXaXc0UkVGQlVTeHJRa0ZCU1RzN09FSkJSSFJDTEZGQlEzTkNPenRCUVVOd1FpeGpRVUZOTEV0QlFVNHNSMEZCWXl4RlFVRmtMRU5CUkc5Q08wRkJSWEJDTEdOQlFVMHNVMEZCVGl4SFFVRnJRaXhGUVVGc1FpeERRVVp2UWp0QlFVZHdRaXhqUVVGTkxGVkJRVTRzUjBGQmJVSXNSVUZCYmtJc1EwRkliMEk3WjBSQlNYQkNMR2xDUVVGTkxFdEJRVTRzUjBGS2IwSTdTMEZCZUVJN096czdPenM3T3pzN1FVRkVSU3h4UWtGbFJpeHhRa0ZCWjBJN1dVRkJXaXc0UkVGQlVTeHJRa0ZCU1RzN1FVRkRXaXhoUVVGTExFMUJRVXdzUjBGQll5eExRVUZMTEUxQlFVd3NTVUZCWlN4RlFVRm1MRU5CUkVZN08xbEJSMG9zVTBGQk1FSXNUVUZCTVVJc1QwRklTVHM3V1VGSFR5eHpRMEZCWlN4dFFrRklkRUk3TzBGQlNWb3NXVUZCVFN4alFVRmpMRVZCUVdRN096dEJRVXBOTEhkQ1FVOU9MRWRCUVU0c1dVRkJWU3hWUVVGV096czdRVUZRV1N4WlFWVlNMRXRCUVVzc1QwRkJUQ3hGUVVGak8wRkJRMlFzWjBKQlFVa3NRMEZCUXl4TFFVRkxMRTlCUVV3c1JVRkJZenM3UVVGRlppeHhRa0ZCU3l4UFFVRk1MRWRCUVdVc05rSkJRV01zUzBGQlN5eFBRVUZNTEVOQlFUZENMRU5CUm1VN08wRkJTV1lzYjBKQlFVa3NTMEZCU3l4UFFVRk1MRU5CUVdFc1kwRkJZaXhGUVVFMlFqdEJRVU0zUWl4NVFrRkJTeXhYUVVGTUxFZEJRVzFDTEV0QlFVc3NUMEZCVEN4RFFVRmhMR05CUVdJc1EwRkJORUlzUzBGQlN5eFBRVUZNTEVOQlFTOURMRU5CUkRaQ08ybENRVUZxUXp0aFFVcEtPenRCUVZOQkxHZENRVUZKTEVOQlFVTXNTMEZCU3l4UlFVRk1MRVZCUVdVN1FVRkRhRUlzY1VKQlFVc3NVVUZCVEN4SFFVRm5RaXhsUVVGb1FpeERRVVJuUWp0aFFVRndRanRUUVZaS096czdRVUZXV1N4aFFUQkNVQ3hKUVVGSkxFZEJRVW9zU1VGQlZ5eExRVUZMTEZsQlFVd3NSVUZCYlVJN1FVRkRMMElzWjBKQlFVa3NTMEZCU3l4WlFVRk1MRU5CUVd0Q0xHTkJRV3hDTEVOQlFXbERMRWRCUVdwRExFTkJRVW9zUlVGQk1rTTdRVUZEZGtNc2IwSkJRVWtzVjBGQlZ5eGpRVUZZTEVOQlFUQkNMRWRCUVRGQ0xFTkJRVW9zUlVGQmIwTTdRVUZEYUVNc1owTkJRVmtzUjBGQldpeEpRVUZ0UWl4WFFVRlhMRWRCUVZnc1EwRkJia0lzUTBGRVowTTdhVUpCUVhCRExFMUJSVThzU1VGQlNTeExRVUZMTEVkQlFVd3NUVUZCWXl4VFFVRmtMRVZCUVhsQ08wRkJRMmhETEdkRFFVRlpMRWRCUVZvc1NVRkJiVUlzUzBGQlN5eEhRVUZNTEVOQlFXNUNMRU5CUkdkRE8ybENRVUUzUWp0aFFVaFlPMU5CUkVvN096dEJRVEZDV1N4aFFYRkRVQ3hKUVVGSkxFbEJRVW9zU1VGQlZ5eExRVUZMTEUxQlFVd3NSVUZCWVR0QlFVTjZRaXhuUWtGQlNTeExRVUZMTEUxQlFVd3NRMEZCV1N4alFVRmFMRU5CUVRKQ0xFbEJRVE5DTEVOQlFVb3NSVUZCY1VNN1FVRkRha01zY1VKQlFVc3NUVUZCVEN4RFFVRlpMRWxCUVZvc2FVSkJRWGRDTEV0QlFVc3NUVUZCVEN4RFFVRlpMRWxCUVZvc1IwRkJjVUlzV1VGQk4wTXNRMEZFYVVNN1lVRkJja003VTBGRVNqczdPMEZCY2tOWkxGbEJORU5TTEUxQlFVb3NSVUZCV1R0QlFVTlNMR2xDUVVGTExGTkJRVXdzUTBGQlpTeE5RVUZtTEVWQlFYVkNMRmRCUVhaQ096czdRVUZFVVN4blFrRkpVaXhEUVVGTExGbEJRVXdzUjBGQmIwSXNTMEZCU3l4VFFVRk1MRU5CUVdVc1RVRkJaaXhEUVVwYU8wRkJTMUlzYVVKQlFVc3NZVUZCVEN4SFFVRnhRaXhMUVVGTExGVkJRVXdzUTBGQlowSXNUVUZCYUVJc1EwRk1ZanRUUVVGYU96dEJRVkZCTEdWQlFVOHNTVUZCVUN4RFFYQkVXVHM3TzBGQlptUXNjVUpCYzBWR0xDdENRVUZWTEZGQlFWRXNVMEZCVXpzN1FVRkZka0lzWVVGQlN5eEpRVUZKTEVkQlFVb3NTVUZCVnl4TlFVRm9RaXhGUVVGM1FqdEJRVU53UWl4blFrRkJTU3hQUVVGUExHTkJRVkFzUTBGQmMwSXNSMEZCZEVJc1EwRkJTaXhGUVVGblF6dEJRVU0xUWl4dlFrRkJTU3hqUVVGakxFdEJRV1FzUTBGRWQwSTdRVUZGTlVJc2IwSkJRVTBzVjBGQlZ5eEZRVUZZT3pzN1FVRkdjMElzYjBKQlMzUkNMSEZDUVVGeFFpeExRVUZMTEUxQlFVd3NRMEZCV1N4SFFVRmFMRTFCUVhGQ0xGTkJRWEpDTEVOQlRFTTdRVUZOTlVJc2IwSkJRVWtzVjBGQlZ5eHJRMEZCTUVJc1MwRkJTeXhOUVVGTUxFTkJRVmtzUjBGQldpeEZRVUV4UWl4blFrRkJiMFFzVVVGQmNFUTdPenRCUVU1aExHOUNRVk40UWl4RFFVRkRMR3RDUVVGTkxFOUJRVThzUjBGQlVDeERRVUZPTEVOQlFVUXNSVUZCY1VJN1FVRkRja0lzTmtKQlFWTXNTMEZCU3l4blFrRkJUQ3hEUVVGVUxFZEJRV3RETEU5QlFVOHNSMEZCVUN4RFFVRnNReXhEUVVSeFFqdHBRa0ZCZWtJc1RVRkZUenRCUVVOSUxEUkRRVUZuUWl4VlFVRmhMRTlCUVU4c1IwRkJVQ3hGUVVFM1FpeERRVVJITzJsQ1FVWlFPenM3UVVGVU5FSXNiMEpCWjBKNFFpeFRRVUZUTEU5QlFWUXNTMEZCY1VJc1UwRkJja0lzU1VGQmEwTXNTMEZCU3l4UFFVRk1MRVZCUVdNN1FVRkRhRVFzTmtKQlFWTXNUMEZCVkN4SFFVRnRRaXgzUWtGQmQwSXNTMEZCU3l4UFFVRk1MRU5CUVdFc1IwRkJZaXhEUVVGcFFpeExRVUZMTEU5QlFVd3NSVUZCWXl4SFFVRXZRaXhEUVVGNFFpeERRVUZ1UWl4RFFVUm5SRHRwUWtGQmNFUTdPMEZCU1VFc2IwSkJRVWtzVTBGQlV5eEpRVUZVTEV0QlFXdENMRk5CUVd4Q0xFbEJRU3RDTEV0QlFVc3NUMEZCVEN4RlFVRmpPMEZCUXpkRExEWkNRVUZUTEVsQlFWUXNSMEZCWjBJc1UwRkJVeXhQUVVGVUxFTkJSRFpDTzJsQ1FVRnFSRHM3TzBGQmNFSTBRaXh2UWtGNVFuaENMRU5CUVVNc2EwSkJRVVFzUlVGQmNVSTdRVUZEY2tJc05FTkJRV2RDTEV0QlFVc3NXVUZCVEN4RlFVRnpRaXhUUVVGMFF5eERRVVJ4UWp0cFFrRkJla0k3T3p0QlFYcENORUlzYjBKQk9FSjRRaXhEUVVGRExGTkJRVk1zU1VGQlZDeEpRVUZwUWl4TFFVRkxMRTlCUVV3c1NVRkJaMElzUzBGQlN5eFBRVUZNTEVOQlFXRXNZMEZCWWl4RlFVRTJRanRCUVVNdlJDdzJRa0ZCVXl4SlFVRlVMRWRCUVdkQ0xFdEJRVXNzVDBGQlRDeERRVUZoTEdOQlFXSXNRMEZCTkVJc1IwRkJOVUlzUTBGQmFFSXNRMEZFSzBRN2FVSkJRVzVGT3pzN1FVRTVRalJDTEc5Q1FXMURlRUlzUTBGQlF5eFRRVUZUTEVsQlFWUXNTVUZCYVVJc1EwRkJReXhMUVVGTExFMUJRVXdzUTBGQldTeEhRVUZhTEVOQlFVUXNSVUZCYlVJN1FVRkRja01zTmtKQlFWTXNTVUZCVkN4SFFVRm5RaXh6UWtGQlowSXNVVUZCYUVJc1EwRkJhRUlzUTBGRWNVTTdhVUpCUVhwRE96czdRVUZ1UXpSQ0xHOUNRWGREZUVJc1UwRkJVeXhKUVVGVUxFVkJRV1U3UVVGRFppeDVRa0ZCU3l4SlFVRkpMRWxCUVVrc1EwRkJTaXhGUVVGUExFbEJRVWtzYjBKQlFVb3NSVUZCTUVJc1IwRkJNVU1zUlVGQkswTTdRVUZETTBNc05FSkJRVTBzVjBGQlZ5d3dRa0ZCYVVJc1EwRkJha0lzUTBGQldDeERRVVJ4UXp0QlFVVXpReXcwUWtGQlRTeFpRVUZaTEZOQlFWTXNVVUZCVkN4RFFVRmFPenM3UVVGR2NVTXNORUpCUzNaRExGTkJRVk1zU1VGQlZDeERRVUZqTEdOQlFXUXNRMEZCTmtJc1QwRkJOMElzUTBGQlNpeEZRVUV5UXp0QlFVTjJReXhuUTBGQlRTeFpRVUZaTEhGQ1FVRlRMRk5CUVZRc1NVRkJjMElzVTBGQlV5eEpRVUZVTEVOQlFXTXNTMEZCWkN4RFFVRnZRaXhUUVVGd1FpeERRVUYwUWl4SFFVRjFSQ3hGUVVGMlJDeERRVVJ4UWpzN1FVRkhka01zYVVOQlFVc3NTVUZCU1N4UlFVRktMRWxCUVdkQ0xGTkJRWEpDTEVWQlFXZERPMEZCUXpWQ0xHOURRVUZKTEZWQlFWVXNZMEZCVml4RFFVRjVRaXhSUVVGNlFpeERRVUZLTEVWQlFYZERPMEZCUTNCRExIZERRVUZOTEdOQlFXTXNUVUZCVFN4UlFVRk9PenM3UVVGRVowSXNkME5CU1doRExFTkJRVU1zVTBGQlV5eFhRVUZVTEVOQlFVUXNSVUZCZDBJN1FVRkRlRUlzTkVOQlFVMHNaVUZCWlN4UlFVRkRMRU5CUVZNc1NVRkJWQ3hEUVVGakxGbEJRV1FzU1VGQk9FSXNVMEZCVXl4SlFVRlVMRU5CUVdNc1dVRkJaQ3hEUVVFeVFpeFJRVUV6UWl4RFFVRTVRaXhIUVVGelJTeFRRVUZUTEVsQlFWUXNRMEZCWXl4WlFVRmtMRU5CUVRKQ0xGRkJRVE5DTEVOQlFYWkZMRWRCUVRoSExGTkJRVk1zU1VGQlZDeERRVUZqTEZsQlFXUXNTVUZCT0VJc1JVRkJPVUlzUTBGRU0wYzdPMEZCUjNoQ0xHbEVRVUZUTEZkQlFWUXNhVUpCUTA4c1ZVRkRRVHRCUVVOSUxHOUVRVUZSTEVkQlFWSTdRVUZEUVN4elJFRkJWU3hSUVVGV096QkRRVXBLTEVOQlNIZENPenRCUVZWNFFpd3JRMEZCVHl4VFFVRlRMRmRCUVZRc1JVRkJjMElzU1VGQmRFSXNRMEZXYVVJN2NVTkJRVFZDT3p0QlFXRkJMR3RFUVVGakxFbEJRV1FzUTBGcVFtOURPMEZCYTBKd1F5dzJRMEZCVXl4WFFVRlVMRVZCUVhOQ0xGRkJRWFJDTEVsQlFXdERMRmRCUVZjc1ZVRkJWU3hSUVVGV0xFTkJRVmdzUTBGQmJFTXNRMEZzUW05RE8ybERRVUY0UXpzMlFrRkVTanM3TzBGQlNIVkRMR2REUVRKQ2JrTXNRMEZCUXl4VFFVRlRMRkZCUVZRc1NVRkJjVUlzVTBGQlV5eEpRVUZVTEVOQlFXTXNVVUZCWkN4SlFVRXdRaXh4UWtGQlV5eFRRVUZVTEVOQlFXaEVMRVZCUVhGRk8wRkJRM0pGTEhsRFFVRlRMRkZCUVZRc1IwRkJiMElzVTBGQlV5eEpRVUZVTEVOQlFXTXNVVUZCWkN4RFFVRjFRaXhUUVVGMlFpeERRVUZ3UWl4RFFVUnhSVHMyUWtGQmVrVTdlVUpCTTBKS0xFMUJPRUpQTEVsQlFVa3NVMEZCVXl4SlFVRlVMRU5CUVdNc1dVRkJaQ3hGUVVFMFFqdEJRVU51UXl4dlJFRkJaMElzVlVGQllTeFRRVUZUTEVsQlFWUXNRMEZCWXl4WlFVRmtMRU5CUVRkQ0xFTkJSRzFETzNsQ1FVRm9RenM3UVVGSlVDdzBRa0ZCU1N4alFVRmpMRk5CUVdRc1NVRkJNa0lzVTBGQlV5eEpRVUZVTEVOQlFXTXNTMEZCWkN4RlFVRnhRanRCUVVOb1JDeHhRMEZCVXl4UlFVRlVMRWxCUVhGQ0xGTkJRVk1zU1VGQlZDeERRVUZqTEV0QlFXUXNRMEZCYjBJc1UwRkJjRUlzUlVGQkswSXNVVUZCTDBJc1EwRkJja0lzUTBGRVowUTdlVUpCUVhCRU8zRkNRWFpEU2p0cFFrRkVTanM3TzBGQmVFTTBRaXgzUWtGMVJqVkNMRU5CUVZNc1NVRkJWQ3hIUVVGblFpeFRRVUZUTEU5QlFWUTdPenRCUVhaR1dTeHZRa0V3Um5oQ0xFTkJRVU1zVjBGQlJDeEZRVUZqTzBGQlEyUXNkMEpCUVVrc1MwRkJTeXhUUVVGTUxFTkJRV1VzVDBGQlppeERRVUYxUWl4SFFVRjJRaXhOUVVGblF5eERRVUZETEVOQlFVUXNSVUZCU1R0QlFVTndReXcyUWtGQlN5eFRRVUZNTEVOQlFXVXNTVUZCWml4RFFVRnZRaXhIUVVGd1FpeEZRVVJ2UXp0eFFrRkJlRU03T3p0QlFVUmpMR2xDUVVGc1FpeE5RVTFQTzBGQlEwZ3NhVU5CUVZNc1VVRkJWQ3hIUVVGdlFpeFRRVUZUTEZGQlFWUXNTVUZCY1VJc1JVRkJja0lzUTBGRWFrSTdPMEZCUjBnc05FSkJRVWtzUzBGQlN5eFZRVUZNTEVOQlFXZENMRTlCUVdoQ0xFTkJRWGRDTEVkQlFYaENMRTFCUVdsRExFTkJRVU1zUTBGQlJDeEZRVUZKTzBGQlEzSkRMR2xEUVVGTExGVkJRVXdzUTBGQlowSXNTVUZCYUVJc1EwRkJjVUlzUjBGQmNrSXNSVUZFY1VNN2VVSkJRWHBET3p0QlFVbEJMRFpDUVVGTExGTkJRVXdzUTBGQlpTeFJRVUZtTEVWQlVFYzdjVUpCVGxBN08wRkJaMEpCTEhGQ1FVRkxMRTFCUVV3c1EwRkJXU3hIUVVGYUxFbEJRVzFDTEZGQlFXNUNMRU5CTVVjMFFqdGhRVUZvUXp0VFFVUktPenM3T3pzN096czdPenM3UVVGNFJVWXNjVUpCWjAxR0xHbERRVUZYTEZGQlFWRXNXVUZCV1N4VFFVRlRPMEZCUTNCRExGbEJRVWtzWVVGQllTeExRVUZpT3pzN1FVRkVaME1zWVVGSkwwSXNTVUZCU1N4SlFVRkpMRU5CUVVvc1JVRkJUeXhKUVVGSkxFdEJRVXNzV1VGQlRDeEZRVUZ0UWl4SFFVRjJReXhGUVVFMFF6dEJRVU40UXl4blFrRkJUU3hOUVVGTkxFdEJRVXNzVTBGQlRDeERRVUZsTEVOQlFXWXNRMEZCVGl4RFFVUnJRenRCUVVWNFF5eG5Ra0ZCVFN4UlFVRlJMRXRCUVVzc1RVRkJUQ3hEUVVGWkxFZEJRVm9zUTBGQlVqczdPMEZCUm10RExHZENRVXR3UXl4TlFVRk5MRk5CUVU0c1JVRkJhVUk3UVVGRGFrSXNjMEpCUVUwc1QwRkJUaXhIUVVGblFpeE5RVUZOTEZOQlFVNHNRMEZCWjBJc1RVRkJUU3hQUVVGT0xFVkJRV1VzUjBGQkwwSXNSVUZCYjBNc1NVRkJjRU1zUTBGQmFFSXNRMEZFYVVJN1lVRkJja0k3T3p0QlFVeDNReXhuUWtGVmNFTXNhMEpCUVUwc1RVRkJUU3hIUVVGT0xFTkJRVllzUlVGQmMwSTdRVUZEYkVJc2MwSkJRVTBzVDBGQlRpeEhRVUZuUWl4TFFVRkxMRWRCUVV3c1EwRkJVeXhOUVVGTkxFOUJRVTRzUlVGQlpTeE5RVUZOTEVkQlFVNHNRMEZCZUVNc1EwRkVhMEk3WVVGQmRFSTdPenRCUVZaM1F5eG5Ra0ZsY0VNc2EwSkJRVTBzVFVGQlRTeEhRVUZPTEVOQlFWWXNSVUZCYzBJN1FVRkRiRUlzYzBKQlFVMHNUMEZCVGl4SFFVRm5RaXhMUVVGTExFZEJRVXdzUTBGQlV5eE5RVUZOTEU5QlFVNHNSVUZCWlN4TlFVRk5MRWRCUVU0c1EwRkJlRU1zUTBGRWEwSTdZVUZCZEVJN096dEJRV1ozUXl4blFrRnZRbkJETEUxQlFVMHNTMEZCVGl4RlFVRmhPMEZCUTJJc2MwSkJRVTBzVDBGQlRpeEhRVUZuUWl4TFFVRkxMRXRCUVV3c1EwRkJWeXhOUVVGTkxFOUJRVTRzUTBGQk0wSXNRMEZFWVR0aFFVRnFRanM3UVVGSlFTeHJRa0ZCVFN4WFFVRk9MRWRCUVc5Q0xFMUJRVTBzVDBGQlRpeEhRVUZuUWl4TlFVRk5MRWxCUVU0N096dEJRWGhDU1N4blFrRXlRbkJETEVOQlFVTXNTMEZCU3l4clFrRkJUQ3hGUVVGNVFqdEJRVU14UWl4elFrRkJUU3hSUVVGT0xFZEJRV2xDTERCQ1FVRmxMRTFCUVUwc1YwRkJUaXhGUVVGdFFpeFBRVUZzUXl4RFFVRnFRaXhEUVVRd1FqdGhRVUU1UWpzN08wRkJNMEozUXl4blFrRm5RM0JETEUxQlFVMHNTVUZCVGl4TFFVRmxMRTFCUVUwc1QwRkJUaXhGUVVGbE8wRkJRemxDTERaQ1FVRmhMRWxCUVdJc1EwRkVPRUk3UVVGRk9VSXNjMEpCUVUwc1NVRkJUaXhIUVVGaExFMUJRVTBzVDBGQlRpeERRVVpwUWp0aFFVRnNRenM3TzBGQmFFTjNReXhuUWtGelEyeERMR2RDUVVGblFpeExRVUZETEVOQlFVMHNTVUZCVGl4SlFVRmpMRTFCUVUwc1NVRkJUaXhEUVVGWExGTkJRVmdzUjBGQmQwSXNUVUZCVFN4SlFVRk9MRU5CUVZjc1UwRkJXQ3hEUVVGeFFpeE5RVUZOTEU5QlFVNHNSVUZCWlN4TFFVRndReXhEUVVGMlF5eEhRVUZ2Uml4TlFVRk5MRTlCUVU0N096dEJRWFJEYkVVc1owSkJlVU53UXl4RFFVRkRMRTFCUVUwc1RVRkJUaXhGUVVGak8wRkJRMllzY1VKQlFVc3NTMEZCVEN4RFFVRlhMRWRCUVZnc1NVRkJhMElzWVVGQmJFSXNRMEZFWlR0aFFVRnVRaXhOUVVWUE8wRkJRMGdzY1VKQlFVc3NUVUZCVEN4RFFVRlpMRTFCUVUwc1RVRkJUaXhEUVVGYUxFTkJRVEJDTEZGQlFURkNMRU5CUVcxRExFMUJRVTBzVVVGQlRpeERRVUZ1UXl4SFFVRnhSQ3hoUVVGeVJDeERRVVJITzJGQlJsQTdVMEY2UTBvN096dEJRVXB2UXl4aFFYRkVMMElzU1VGQlNTeExRVUZKTEVOQlFVb3NSVUZCVHl4TFFVRkpMRXRCUVVzc1lVRkJUQ3hGUVVGdlFpeEpRVUY0UXl4RlFVRTJRenRCUVVONlF5eG5Ra0ZCVFN4UlFVRk5MRXRCUVVzc1ZVRkJUQ3hEUVVGblFpeEZRVUZvUWl4RFFVRk9MRU5CUkcxRE8wRkJSWHBETEdkQ1FVRk5MRk5CUVZFc1MwRkJTeXhOUVVGTUxFTkJRVmtzUzBGQldpeERRVUZTTEVOQlJtMURPenRCUVVsNlF5eHRRa0ZCVFN4UFFVRk9MRWRCUVdkQ0xFOUJRVTBzU1VGQlRpeERRVUZYTEU5QlFWZ3NRMEZCYlVJc1QwRkJUU3hSUVVGT0xFVkJRV2RDTEU5QlFVMHNVVUZCVGl4RFFVRnVSQ3hEUVVwNVF6czdRVUZOZWtNc2FVSkJRVXNzUzBGQlRDeERRVUZYTEV0QlFWZ3NTVUZCYTBJc1QwRkJUU3hQUVVGT0xFTkJUblZDTzFOQlFUZERPenRCUVZOQkxGbEJRVWtzUzBGQlN5eFBRVUZNTEVWQlFXTTdRVUZEWkN4cFFrRkJTeXhQUVVGTUxFTkJRV0VzUzBGQlN5eExRVUZNTEVWQlFWa3NTVUZCZWtJc1JVRkVZenRUUVVGc1FqczdRVUZKUVN4bFFVRlBMRWxCUVVNc1EwRkJTeXhUUVVGTUxFZEJRV3RDTEVsQlFXNUNMRWRCUVRCQ0xGVkJRVEZDTEVOQmJFVTJRanM3TzBGQmFFMTBReXh4UWtGeFVVWXNOa0pCUVc5Q08xbEJRVm9zT0VSQlFWRXNhMEpCUVVrN1dVRkRVaXhUUVVFd1FpeE5RVUV4UWl4UFFVUlJPenRaUVVOSExITkRRVUZsTEcxQ1FVUnNRanM3UVVGRmFFSXNXVUZCVFN4WlFVRlpMR2RDUVVGTkxFOUJRVTRzV1VGQll5eFZRVUZrTEVOQlFWb3NRMEZHVlRzN1FVRkphRUlzV1VGQlNTeE5RVUZLTEVWQlFWazdRVUZEVWl4elFrRkJWU3hIUVVGV0xFTkJRV01zUlVGQlJTeGpRVUZHTEVWQlFXUXNSVUZFVVR0VFFVRmFPenRCUVVsQkxHVkJRVThzVTBGQlVDeERRVkpuUWpzN08wRkJjbEZzUWl4eFFrRm5Va1lzZVVKQlFWRTdRVUZEU2l4M1FrRkJUU3hKUVVGT0xGbEJSRWs3UVVGRlNpeGxRVUZQTEVsQlFWQXNRMEZHU1RzN08wRkJhRkpPTEhGQ1FYRlNSaXd5UWtGQlV6dEJRVU5NTEhkQ1FVRk5MRXRCUVU0c1dVRkVTenRCUVVWTUxHVkJRVThzU1VGQlVDeERRVVpMT3pzN1FVRnlVbEFzY1VKQk1GSkdMREpDUVVGVE8wRkJRMHdzWlVGQlR5eExRVUZMTEZGQlFVd3NSMEZCWjBJc1MwRkJTeXhMUVVGTUxFVkJRV2hDTEVkQlFTdENMRXRCUVVzc1RVRkJUQ3hGUVVFdlFpeERRVVJHT3pzN1FVRXhVbEFzY1VKQk9GSkdMSGxDUVVGUk8wRkJRMG9zV1VGQlRTeFRRVUZUTEV0QlFVc3NUVUZCVEN4RFFVUllPMEZCUlVvc2QwSkJRVTBzUzBGQlRpeFpRVVpKT3p0QlFVbEtMR0ZCUVVzc1NVRkJTU3hIUVVGS0xFbEJRVmNzVFVGQmFFSXNSVUZCZDBJN1FVRkRjRUlzWjBKQlFVa3NUMEZCVHl4alFVRlFMRU5CUVhOQ0xFZEJRWFJDTEVOQlFVb3NSVUZCWjBNN1FVRkROVUlzZFVKQlFVOHNSMEZCVUN4RlFVRlpMRWxCUVZvc1IwRkJiVUlzVDBGQlR5eEhRVUZRTEVWQlFWa3NUVUZCV2l4SFFVRnhRaXhQUVVGUExFZEJRVkFzUlVGQldTeFBRVUZhTEVOQlJGbzdZVUZCYUVNN1UwRkVTanM3UVVGTlFTeGxRVUZQTEVsQlFWQXNRMEZXU1RzN08wRkJPVkpPTEZkQk1sTkxMR2xFUVVGdFFpeFBRVUZQTzBGQlF6ZENMRFJDUVVGWkxFdEJRVXNzVTBGQlRDeERRVUZsTEZsQlFXWXNSVUZCWjBNc1RVRkJOVU1zUTBGRU5rSTdPenRCUVROVEwwSXNWMEVyVTBzc2FVUkJRVzFDTEU5QlFVODdRVUZETjBJc05FSkJRVmtzUzBGQlN5eFRRVUZNTEVOQlFXVXNXVUZCWml4RlFVRm5ReXhOUVVFMVF5eERRVVEyUWpzN08xZEJMMU12UWpzN08wRkJiMVJPTEU5QlFVOHNVMEZCVUN4RFFVRnBRaXhuUWtGQmFrSXNSMEZCYjBNc1UwRkJjRU03UVVGRFFTeFBRVUZQTEZOQlFWQXNRMEZCYVVJc1dVRkJha0lzUjBGQlowTTdRVUZETlVJc1lVRkJVeXhEUVVGVU8wRkJRMEVzWTBGQlZTeERRVUZXTzBGQlEwRXNWMEZCVHl4TFFVRlFPMEZCUTBFc1UwRkJTeXhUUVVGTU8wRkJRMEVzVTBGQlN5eFRRVUZNTzBGQlEwRXNaVUZCVnl4VFFVRllPME5CVGtvN08ydENRVk5sSWl3aVptbHNaU0k2SWtGamRHbHZiaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnVkdGemF5Qm1jbTl0SUNjdUxpOTBZWE5yTDFSaGMyc25PMXh1YVcxd2IzSjBJSHNnYzNCbFpXUlFaWEpUWldOdmJtUWdmU0JtY205dElDY3VMaTlwYm1NdlkyRnNZeWM3WEc1cGJYQnZjblFnZXlCcGMwNTFiU3dnYVhOUFltb3NJR2x6VTNSeWFXNW5JSDBnWm5KdmJTQW5MaTR2YVc1akwzVjBhV3h6Snp0Y2JtbHRjRzl5ZENCa1pYUmxZM1JXWVd4MVpWUjVjR1VnWm5KdmJTQW5MaTR2ZG1Gc2RXVXRkSGx3WlhNdlpHVjBaV04wSnp0Y2JtbHRjRzl5ZENCT1ZVMUZVa2xEUVV4ZlZrRk1WVVZUSUdaeWIyMGdKeTR1TDJsdVl5OXVkVzFsY21sallXd3RkbUZzZFdWekp6dGNibWx0Y0c5eWRDQmtaWFJsWTNSQlpHRndkR1Z5SUdaeWIyMGdKeTR1TDJsdVl5OWtaWFJsWTNRdFlXUmhjSFJsY2ljN1hHNWNibU52Ym5OMElFNVZUVjlPVlUxRlVrbERRVXhmVmtGTVZVVlRJRDBnVGxWTlJWSkpRMEZNWDFaQlRGVkZVeTVzWlc1bmRHZzdYRzVjYm1OdmJuTjBJR1JsWm1GMWJIUlNaVzVrWlhKbGNpQTlJQ2g3SUhOMFlYUmxMQ0JoWkdGd2RHVnlMQ0JoWkdGd2RHVnlSR0YwWVN3Z1pXeGxiV1Z1ZENCOUtTQTlQaUJoWkdGd2RHVnlLR1ZzWlcxbGJuUXNJSE4wWVhSbExDQmhaR0Z3ZEdWeVJHRjBZU2s3WEc1Y2JtTnZibk4wSUdOdmJuWmxjblJKWmxOb2IzVnNaRUpsVG5WdFltVnlJRDBnS0haaGJIVmxLU0E5UGlBaGFYTk9ZVTRvZG1Gc2RXVXBJRDhnY0dGeWMyVkdiRzloZENoMllXeDFaU2tnT2lCMllXeDFaVHRjYmx4dVkyeGhjM01nUVdOMGFXOXVJR1Y0ZEdWdVpITWdWR0Z6YXlCN1hHNGdJQ0FnWTI5dWMzUnlkV04wYjNJb2NISnZjSE1nUFNCN2ZTa2dlMXh1SUNBZ0lDQWdJQ0J3Y205d2N5NXpkR0YwWlNBOUlIdDlPMXh1SUNBZ0lDQWdJQ0J3Y205d2N5NTJZV3gxWlV0bGVYTWdQU0JiWFR0Y2JpQWdJQ0FnSUNBZ2NISnZjSE11Y0dGeVpXNTBTMlY1Y3lBOUlGdGRPMXh1SUNBZ0lDQWdJQ0J6ZFhCbGNpaHdjbTl3Y3lrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHlwY2JpQWdJQ0FnSUNBZ0l5QlRaWFFnUVdOMGFXOXVJSEJ5YjNCbGNuUnBaWE5jYmlBZ0lDQWdJQ0FnSXlNZ1UyVjBJSFZ6WlhJdFpHVm1hVzVsWkNCQlkzUnBiMjRnY0hKdmNHVnlkR2xsYzF4dVhHNGdJQ0FnSUNBZ0lFQndZWEpoYlNCYmIySnFaV04wWFZ4dUlDQWdJQ0FnSUNCQWNtVjBkWEp1SUZ0QlkzUnBiMjVkWEc0Z0lDQWdLaTljYmlBZ0lDQnpaWFFvY0hKdmNITWdQU0I3ZlNrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG5aaGJIVmxjeUE5SUhSb2FYTXVkbUZzZFdWeklIeDhJSHQ5TzF4dVhHNGdJQ0FnSUNBZ0lHTnZibk4wSUhzZ2RtRnNkV1Z6TENBdUxpNXdjbTl3YzFSdlUyVjBJSDBnUFNCd2NtOXdjenRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdhVzVvWlhKcGRHRmliR1VnUFNCN2ZUdGNibHh1SUNBZ0lDQWdJQ0F2THlCVFpYUWdibTl1TFdOdmJuTjFiV1ZrSUhCeWIzQmxjblJwWlhOY2JpQWdJQ0FnSUNBZ2MzVndaWEl1YzJWMEtIQnliM0J6Vkc5VFpYUXBPMXh1WEc0Z0lDQWdJQ0FnSUM4dklFUmxkR1ZqZENCamIzSnlaV04wSUdCaFpHRndkR1Z5WUNCcFppQnViMjVsSUdWNGFYTjBjeUJoYm1RZ1lHVnNaVzFsYm5SZ0lHbHpJR0psYVc1bklITmxkRnh1SUNBZ0lDQWdJQ0JwWmlBb2RHaHBjeTVsYkdWdFpXNTBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvSVhSb2FYTXVZV1JoY0hSbGNpa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzh2SUVSMVkydDBlWEJwYzJnZ1kyaGxZMnNnWm05eUlFRmtZWEIwWlhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbUZrWVhCMFpYSWdQU0JrWlhSbFkzUkJaR0Z3ZEdWeUtIUm9hWE11Wld4bGJXVnVkQ2s3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9kR2hwY3k1aFpHRndkR1Z5TG1kbGRFVnNaVzFsYm5SRVlYUmhLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WVdSaGNIUmxja1JoZEdFZ1BTQjBhR2x6TG1Ga1lYQjBaWEl1WjJWMFJXeGxiV1Z1ZEVSaGRHRW9kR2hwY3k1bGJHVnRaVzUwS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNnaGRHaHBjeTV2YmxKbGJtUmxjaWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTXViMjVTWlc1a1pYSWdQU0JrWldaaGRXeDBVbVZ1WkdWeVpYSTdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0F2THlCUWNtbHRaU0JoYmlCdlltcGxZM1FnZEc4Z2FXNW9aWEpwZENCbWNtOXRMQ0IzYVhSb0lHOXViSGtnWUhaaGJIVmxZQ0J3Y205d1pYSjBhV1Z6WEc0Z0lDQWdJQ0FnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUIwYUdsekxtUmxabUYxYkhSV1lXeDFaU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0hSb2FYTXVaR1ZtWVhWc2RGWmhiSFZsTG1oaGMwOTNibEJ5YjNCbGNuUjVLR3RsZVNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvY0hKdmNITlViMU5sZEM1b1lYTlBkMjVRY205d1pYSjBlU2hyWlhrcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsdWFHVnlhWFJoWW14bFcydGxlVjBnUFNCd2NtOXdjMVJ2VTJWMFcydGxlVjA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJR2xtSUNoMGFHbHpXMnRsZVYwZ0lUMDlJSFZ1WkdWbWFXNWxaQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBibWhsY21sMFlXSnNaVnRyWlhsZElEMGdkR2hwYzF0clpYbGRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUM4dklGVndaR0YwWlNCbGVHbHpkR2x1WnlCMllXeDFaWE1nZDJsMGFDQnBibWhsY21sMFlXSnNaU0J3Y205d1pYSjBhV1Z6WEc0Z0lDQWdJQ0FnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUIwYUdsekxuWmhiSFZsY3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIUm9hWE11ZG1Gc2RXVnpMbWhoYzA5M2JsQnliM0JsY25SNUtHdGxlU2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMblpoYkhWbGMxdHJaWGxkSUQwZ2V5QXVMaTUwYUdsekxuWmhiSFZsYzF0clpYbGRMQ0F1TGk1cGJtaGxjbWwwWVdKc1pTQjlPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnTHk4Z1ZYQmtZWFJsWEc0Z0lDQWdJQ0FnSUdsbUlDaDJZV3gxWlhNcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVjMlYwVm1Gc2RXVnpLSFpoYkhWbGN5d2dhVzVvWlhKcGRHRmliR1VwTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCUWNtVmpiMjF3ZFhSbElHNTFiV0psY2lCdlppQjJZV3gxWlNCclpYa2dZVzVrSUhCaGNtVnVkQ0JyWlhseklIUnZJR0YyYjJsa0lIQmxjaTFtY21GdFpTQnRaV0Z6ZFhKbGJXVnVkRnh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV1ZFcxV1lXeDFaVXRsZVhNZ1BTQjBhR2x6TG5aaGJIVmxTMlY1Y3k1c1pXNW5kR2c3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG01MWJWQmhjbVZ1ZEV0bGVYTWdQU0IwYUdsekxuQmhjbVZ1ZEV0bGVYTXViR1Z1WjNSb08xeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYzJWMFZtRnNkV1Z6S0haaGJIVmxjeXdnYVc1b1pYSnBkQ2tnZTF4dUlDQWdJQ0FnSUNBdkx5QkpkR1Z5WVhSbElHOTJaWElnWVd4c0lHbHVZMjl0YVc1bklIWmhiSFZsY3lCaGJtUWdjMlYwWEc0Z0lDQWdJQ0FnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUIyWVd4MVpYTXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2gyWVd4MVpYTXVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2EyVjVLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUd4bGRDQm9ZWE5EYUdsc1pISmxiaUE5SUdaaGJITmxPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElHTm9hV3hrY21WdUlEMGdlMzA3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdkx5Qk5aWEpuWlNCcGJuUnZJR1Y0YVhOMGFXNW5JSFpoYkhWbElHOXlJR055WldGMFpTQnVaWGRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQjJZV3gxWlVGc2NtVmhaSGxGZUdsemRITWdQU0IwYUdsekxuWmhiSFZsYzF0clpYbGRJQ0U5UFNCMWJtUmxabWx1WldRN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JHVjBJRzVsZDFaaGJIVmxJRDBnZG1Gc2RXVkJiSEpsWVdSNVJYaHBjM1J6SUQ4Z2V5QXVMaTUwYUdsekxuWmhiSFZsYzF0clpYbGRJSDBnT2lCN0lDNHVMbWx1YUdWeWFYUWdmVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM4dklFbG1JSFpoYkhWbGN5QnBjeUJ1YjNRZ1lXNGdiMkpxWldOMExDQmhjM05wWjI0Z2RtRnNkV1VnZEc4Z1pHVm1ZWFZzZENCd2NtOXdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0NGcGMwOWlhaWgyWVd4MVpYTmJhMlY1WFNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYm1WM1ZtRnNkV1ZiZEdocGN5NWtaV1poZFd4MFZtRnNkV1ZRY205d1hTQTlJSFpoYkhWbGMxdHJaWGxkTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHNWxkMVpoYkhWbElEMGdleUF1TGk1dVpYZFdZV3gxWlN3Z0xpNHVkbUZzZFdWelcydGxlVjBnZlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXZMeUJKWmlCM1pTZDJaU0JuYjNRZ1lXNGdZV1JoY0hSbGNpd2daMlYwSUhSb1pTQmpkWEp5Wlc1MElIWmhiSFZsWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHNWxkMVpoYkhWbExtTjFjbkpsYm5RZ1BUMDlJSFZ1WkdWbWFXNWxaQ0FtSmlCMGFHbHpMbUZrWVhCMFpYSXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JtVjNWbUZzZFdVdVkzVnljbVZ1ZENBOUlHTnZiblpsY25SSlpsTm9iM1ZzWkVKbFRuVnRZbVZ5S0hSb2FYTXVZV1JoY0hSbGNpNW5aWFFvZEdocGN5NWxiR1Z0Wlc1MExDQnJaWGtwS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvYm1WM1ZtRnNkV1V1Wm5KdmJTQTlQVDBnZFc1a1pXWnBibVZrSUNZbUlIUm9hWE11WVdSaGNIUmxjaWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnVaWGRXWVd4MVpTNW1jbTl0SUQwZ2JtVjNWbUZzZFdVdVkzVnljbVZ1ZER0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXZMeUJCY0hCc2VTQmtaV1poZFd4MElIWmhiSFZsSUhCeWIzQmxjblJwWlhOY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9JWFpoYkhWbFFXeHlaV0ZrZVVWNGFYTjBjeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnVaWGRXWVd4MVpTQTlJSHNnTGk0dWRHaHBjeTVrWldaaGRXeDBWbUZzZFdVc0lDNHVMbTVsZDFaaGJIVmxJSDA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0x5OGdTV1lnZDJVZ1pHOXVKM1FnYUdGMlpTQmhJSFpoYkhWbElIUjVjR1VnWVc1a0lIZGxJR1J2SUdoaGRtVWdZVzRnUVdSaGNIUmxjaXdnWTJobFkyc2dabTl5SUhSNWNHVWdkMmwwYUNCMllXeDFaU0JyWlhsY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9JVzVsZDFaaGJIVmxMblI1Y0dVZ0ppWWdkR2hwY3k1aFpHRndkR1Z5SUNZbUlIUm9hWE11WVdSaGNIUmxjaTVqYUdWamExWmhiSFZsVkhsd1pTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCdVpYZFdZV3gxWlM1MGVYQmxJRDBnZEdocGN5NWhaR0Z3ZEdWeUxtTm9aV05yVm1Gc2RXVlVlWEJsS0d0bGVTazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1NXWWdkMlVnYzNScGJHd2daRzl1SjNRZ2FHRjJaU0JoSUhaaGJIVmxJSFI1Y0dVZ1lXNWtJSFJvYVhNZ2FYTWdkR2hsSUdacGNuTjBJSFJwYldVZ2QyVW5kbVVnYzJWMElIUm9hWE1nZG1Gc2RXVXNJR05vWldOcklHNTFiV1Z5YVdOaGJDQjJZV3gxWlhNZ1ptOXlJSE4wY21sdVozTWdZVzVrSUhSbGMzUmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvSVc1bGQxWmhiSFZsTG5SNWNHVWdKaVlnSVhSb2FYTXVkbUZzZFdWelcydGxlVjBwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdibVYzVm1Gc2RXVXVkSGx3WlNBOUlHUmxkR1ZqZEZaaGJIVmxWSGx3WlNodVpYZFdZV3gxWlNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdMeThnU1dZZ2QyVWdhR0YyWlNCaElIWmhiSFZsSUhSNWNHVXNJR2hoYm1Sc1pTNGdWR2hwY3lCcGN5QnRlU0JzWldGemRDQm1ZWFp2ZFhKcGRHVWdjR0Z5ZENCdlppQlFiM0J0YjNScGIyNHNJSE52TGk0dUlHVnVhbTk1TGx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDaHVaWGRXWVd4MVpTNTBlWEJsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnVGxWTlgwNVZUVVZTU1VOQlRGOVdRVXhWUlZNN0lHa3JLeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdjSEp2Y0U1aGJXVWdQU0JPVlUxRlVrbERRVXhmVmtGTVZVVlRXMmxkTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdkbUZzZFdWUWNtOXdJRDBnYm1WM1ZtRnNkV1ZiY0hKdmNFNWhiV1ZkTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdkx5QkpaaUIwYUdseklIQnliM0FnYVhNZ1lTQnpkSEpwYm1jZ1lXNWtJSGRsSUdoaGRtVWdZU0J6Y0d4cGRIUmxjaXdnYzNCc2FYUmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2h1WlhkV1lXeDFaUzUwZVhCbExtaGhjMDkzYmxCeWIzQmxjblI1S0NkemNHeHBkQ2NwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2MzQnNhWFJRY205d0lEMGdhWE5UZEhKcGJtY29kbUZzZFdWUWNtOXdLU0EvSUc1bGQxWmhiSFZsTG5SNWNHVXVjM0JzYVhRb2RtRnNkV1ZRY205d0tTQTZJSHQ5TzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdabTl5SUNoc1pYUWdjM0JzYVhSTFpYa2dhVzRnYzNCc2FYUlFjbTl3S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDaHpjR3hwZEZCeWIzQXVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2MzQnNhWFJMWlhrcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQmpiMjFpYVc1bFpFdGxlU0E5SUd0bGVTQXJJSE53YkdsMFMyVjVPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdkx5QkpaaUIzWlNCa2IyNG5kQ0JvWVhabElHRWdZMmhwYkdRZ2RtRnNkV1VnWm05eUlIUm9hWE1nYTJWNUxDQnRZV3RsSUc5dVpWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0NGamFHbHNaSEpsYmx0amIyMWlhVzVsWkV0bGVWMHBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCa1pXWmhkV3gwVm1Gc2RXVWdQU0FvYm1WM1ZtRnNkV1V1ZEhsd1pTNWtaV1poZFd4MFVISnZjSE1nSmlZZ2JtVjNWbUZzZFdVdWRIbHdaUzVrWldaaGRXeDBVSEp2Y0hOYmMzQnNhWFJMWlhsZEtTQS9JRzVsZDFaaGJIVmxMblI1Y0dVdVpHVm1ZWFZzZEZCeWIzQnpXM053YkdsMFMyVjVYU0E2SUc1bGQxWmhiSFZsTG5SNWNHVXVaR1ZtWVhWc2RGQnliM0J6SUh4OElIdDlPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMmhwYkdSeVpXNWJZMjl0WW1sdVpXUkxaWGxkSUQwZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXVMaTV1WlhkV1lXeDFaU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTGk0dVpHVm1ZWFZzZEZaaGJIVmxMRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J3WVhKbGJuUTZJR3RsZVN4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyaHBiR1JMWlhrNklITndiR2wwUzJWNVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlR0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdSbGJHVjBaU0JqYUdsc1pISmxibHRqYjIxaWFXNWxaRXRsZVYwdWRIbHdaVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhR0Z6UTJocGJHUnlaVzRnUFNCMGNuVmxPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTJocGJHUnlaVzViWTI5dFltbHVaV1JMWlhsZFczQnliM0JPWVcxbFhTQTlJSEJoY25ObFJteHZZWFFvYzNCc2FYUlFjbTl3VzNOd2JHbDBTMlY1WFNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdkx5QkpaaUIzWlNCb1lYWmxJR0VnZEdWdGNHeGhkR1VnWm5WdVkzUnBiMjRzSUdkbGJtVnlZWFJsWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLQ0Z1WlhkV1lXeDFaUzUwWlcxd2JHRjBaU0FtSmlCdVpYZFdZV3gxWlM1MGVYQmxMblJsYlhCc1lYUmxJQ1ltSUdselUzUnlhVzVuS0haaGJIVmxVSEp2Y0NrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JtVjNWbUZzZFdVdWRHVnRjR3hoZEdVZ1BTQnVaWGRXWVd4MVpTNTBlWEJsTG5SbGJYQnNZWFJsS0haaGJIVmxVSEp2Y0NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmU0JsYkhObElHbG1JQ2h1WlhkV1lXeDFaUzUwZVhCbExtUmxabUYxYkhSUWNtOXdjeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHNWxkMVpoYkhWbElEMGdleUF1TGk1dVpYZFdZV3gxWlN3Z0xpNHVibVYzVm1Gc2RXVXVkSGx3WlM1a1pXWmhkV3gwVUhKdmNITWdmVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIWmhiSFZsVUhKdmNDQWhQVDBnZFc1a1pXWnBibVZrSUNZbUlHNWxkMVpoYkhWbExuUjVjR1V1Y0dGeWMyVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCdVpYZFdZV3gxWlZ0d2NtOXdUbUZ0WlYwZ1BTQnVaWGRXWVd4MVpTNTBlWEJsTG5CaGNuTmxLSFpoYkhWbFVISnZjQ3dnYm1WM1ZtRnNkV1VwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmU0F2THlCRmJtUWdkbUZzZFdVZ2RIbHdaU0J1YjI1elpXNXpaVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1UyVjBJR0J3Y21WMllDQjBieUJnWTNWeWNtVnVkR0FnWm05eUlHWnBjbk4wSUdaeVlXMWxJR0ZtZEdWeUlITmxkRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRzVsZDFaaGJIVmxMbkJ5WlhZZ1BTQnVaWGRXWVd4MVpTNWpkWEp5Wlc1ME8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDOHZJRWxtSUhSb2FYTWdkbUZzZFdVZ1pHOWxjMjRuZENCb1lYWmxJR05vYVd4a2NtVnVMQ0JoWkdRZ2RHOGdkbUZzZFdWTFpYbHpYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0NGb1lYTkRhR2xzWkhKbGJpa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9kR2hwY3k1MllXeDFaVXRsZVhNdWFXNWtaWGhQWmloclpYa3BJRDA5UFNBdE1Ta2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1MllXeDFaVXRsZVhNdWNIVnphQ2hyWlhrcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdkx5QlBjaUJoWkdRZ2RHOGdjR0Z5Wlc1MFMyVjVjMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUc1bGQxWmhiSFZsTG1Ob2FXeGtjbVZ1SUQwZ2JtVjNWbUZzZFdVdVkyaHBiR1J5Wlc0Z2ZId2dlMzA3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0hSb2FYTXVjR0Z5Wlc1MFMyVjVjeTVwYm1SbGVFOW1LR3RsZVNrZ1BUMDlJQzB4S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbkJoY21WdWRFdGxlWE11Y0hWemFDaHJaWGtwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV6WlhSV1lXeDFaWE1vWTJocGJHUnlaVzRwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11ZG1Gc2RXVnpXMnRsZVYwZ1BTQnVaWGRXWVd4MVpUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JseHVJQ0FnSUM4cVhHNGdJQ0FnSUNBZ0lFUmxZMmxrWlNCM2FHVjBhR1Z5SUhSb2FYTWdRV04wYVc5dUlIZHBiR3dnY21WdVpHVnlJRzl1SUc1bGVIUWdabkpoYldWY2JseHVJQ0FnSUNBZ0lDQkFjR0Z5WVcwZ1cwRmpkR2x2YmwxY2JpQWdJQ0FnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkWEc0Z0lDQWdJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVnh1SUNBZ0lDQWdJQ0JBY21WMGRYSnVJRnRpYjI5c1pXRnVYVG9nVW1WMGRYSnVJSFJ5ZFdVZ2RHOGdjbVZ1WkdWeVhHNGdJQ0FnS2k5Y2JpQWdJQ0IzYVd4c1VtVnVaR1Z5S0dGamRHbHZiaXdnWm5KaGJXVlRkR0Z0Y0N3Z1pXeGhjSE5sWkNrZ2UxeHVJQ0FnSUNBZ0lDQnNaWFFnYUdGelEyaGhibWRsWkNBOUlHWmhiSE5sTzF4dVhHNGdJQ0FnSUNBZ0lDOHZJRU5vWldOcklHbG1JR0poYzJVZ2RtRnNkV1Z6SUdoaGRtVWdkWEJrWVhSbFpDQmNiaUFnSUNBZ0lDQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0IwYUdsekxtNTFiVlpoYkhWbFMyVjVjenNnYVNzcktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0JyWlhrZ1BTQjBhR2x6TG5aaGJIVmxTMlY1YzF0cFhUdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJSFpoYkhWbElEMGdkR2hwY3k1MllXeDFaWE5iYTJWNVhUdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdVblZ1SUhSeVlXNXpabTl5YlNCbWRXNWpkR2x2YmlBb2FXWWdjSEpsYzJWdWRDbGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaDJZV3gxWlM1MGNtRnVjMlp2Y20wcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZV3gxWlM1amRYSnlaVzUwSUQwZ2RtRnNkV1V1ZEhKaGJuTm1iM0p0S0haaGJIVmxMbU4xY25KbGJuUXNJR3RsZVN3Z2RHaHBjeWs3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJRU5oY0NCdGFXNXBiWFZ0WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvYVhOT2RXMG9kbUZzZFdVdWJXbHVLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhaaGJIVmxMbU4xY25KbGJuUWdQU0JOWVhSb0xtMWhlQ2gyWVd4MVpTNWpkWEp5Wlc1MExDQjJZV3gxWlM1dGFXNHBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QkRZWEFnYldGNGFXMTFiVnh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLR2x6VG5WdEtIWmhiSFZsTG0xaGVDa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IyWVd4MVpTNWpkWEp5Wlc1MElEMGdUV0YwYUM1dGFXNG9kbUZzZFdVdVkzVnljbVZ1ZEN3Z2RtRnNkV1V1YldGNEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1VtOTFibVFnYm5WdFltVnlYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9kbUZzZFdVdWNtOTFibVFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMllXeDFaUzVqZFhKeVpXNTBJRDBnVFdGMGFDNXliM1Z1WkNoMllXeDFaUzVqZFhKeVpXNTBLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ2RtRnNkV1V1Wm5KaGJXVkRhR0Z1WjJVZ1BTQjJZV3gxWlM1amRYSnlaVzUwSUMwZ2RtRnNkV1V1Y0hKbGRqdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdWWEJrWVhSbElIWmxiRzlqYVhSNVhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb0lYUm9hWE11WTJGc1kzVnNZWFJsYzFabGJHOWphWFI1S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnNkV1V1ZG1Wc2IyTnBkSGtnUFNCemNHVmxaRkJsY2xObFkyOXVaQ2gyWVd4MVpTNW1jbUZ0WlVOb1lXNW5aU3dnWld4aGNITmxaQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJRWxtSUhSb2FYTWdkbUZzZFdVZ2FHRnpJR05vWVc1blpXUmNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaDJZV3gxWlM1d2NtVjJJQ0U5UFNCMllXeDFaUzVqZFhKeVpXNTBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYUdGelEyaGhibWRsWkNBOUlIUnlkV1U3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVXVjSEpsZGlBOUlIWmhiSFZsTG1OMWNuSmxiblE3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJRUZ3Y0dWdVpDQjFibWwwWEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCMllXeDFaVVp2Y2xOMFlYUmxJRDBnS0haaGJIVmxMblI1Y0dVZ0ppWWdkbUZzZFdVdWRIbHdaUzV6WlhKcFlXeHBlbVVwSUQ4Z2RtRnNkV1V1ZEhsd1pTNXpaWEpwWVd4cGVtVW9kbUZzZFdVdVkzVnljbVZ1ZEN3Z2RtRnNkV1VwSURvZ2RtRnNkV1V1WTNWeWNtVnVkRHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnUVdSa0lIUnZJSE4wWVhSbElHbG1JSFJvYVhNZ2FYTWdibTkwSUdFZ1kyaHBiR1FnZG1GMVpWeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tDRjJZV3gxWlM1d1lYSmxiblFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbk4wWVhSbFcydGxlVjBnUFNCMllXeDFaVVp2Y2xOMFlYUmxPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMblpoYkhWbGMxdDJZV3gxWlM1d1lYSmxiblJkTG1Ob2FXeGtjbVZ1VzNaaGJIVmxMbU5vYVd4a1MyVjVYU0E5SUhaaGJIVmxSbTl5VTNSaGRHVTdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0F2THlCVmNHUmhkR1VnY0dGeVpXNTBJSFpoYkhWbGMxeHVJQ0FnSUNBZ0lDQm1iM0lnS0d4bGRDQnBJRDBnTURzZ2FTQThJSFJvYVhNdWJuVnRVR0Z5Wlc1MFMyVjVjenNnYVNzcktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0JyWlhrZ1BTQjBhR2x6TG5CaGNtVnVkRXRsZVhOYmFWMDdYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0IyWVd4MVpTQTlJSFJvYVhNdWRtRnNkV1Z6VzJ0bGVWMDdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmhiSFZsTG1OMWNuSmxiblFnUFNCMllXeDFaUzUwZVhCbExtTnZiV0pwYm1Vb2RtRnNkV1V1WTJocGJHUnlaVzRzSUhaaGJIVmxMblJsYlhCc1lYUmxLVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1emRHRjBaVnRyWlhsZElEMGdkbUZzZFdVdVkzVnljbVZ1ZER0Y2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbTl1Um5KaGJXVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YjI1R2NtRnRaU2gwYUdsekxuTjBZWFJsTENCMGFHbHpLVHRjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlBb2RHaHBjeTV2YmtOc1pXRnVkWEFwSUQ4Z2RISjFaU0E2SUdoaGMwTm9ZVzVuWldRN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYVc1b1pYSnBkQ2h3Y205d2N5QTlJSHQ5S1NCN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUhzZ2RtRnNkV1Z6TENBdUxpNXdjbTl3YzFSdlUyVjBJSDBnUFNCd2NtOXdjenRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdibVYzUVdOMGFXOXVJRDBnYzNWd1pYSXVhVzVvWlhKcGRDaHdjbTl3YzFSdlUyVjBLVHRjYmx4dUlDQWdJQ0FnSUNCcFppQW9kbUZzZFdWektTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCdVpYZEJZM1JwYjI0dWMyVjBLSHNnZG1Gc2RXVnpJSDBwTzF4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHNWxkMEZqZEdsdmJqdGNiaUFnSUNCOVhHNWNiaUFnSUNCd1lYVnpaU2dwSUh0Y2JpQWdJQ0FnSUNBZ2MzVndaWEl1YzNSdmNDZ3BPMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3p0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J5WlhOMWJXVW9LU0I3WEc0Z0lDQWdJQ0FnSUhOMWNHVnlMbk4wWVhKMEtDazdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQWdJSDFjYmx4dUlDQWdJSFJ2WjJkc1pTZ3BJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNdWFYTkJZM1JwZG1VZ1B5QjBhR2x6TG5CaGRYTmxLQ2tnT2lCMGFHbHpMbkpsYzNWdFpTZ3BPMXh1SUNBZ0lIMWNibHh1SUNBZ0lITjBZWEowS0NrZ2UxeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCMllXeDFaWE1nUFNCMGFHbHpMblpoYkhWbGN6dGNiaUFnSUNBZ0lDQWdjM1Z3WlhJdWMzUmhjblFvS1R0Y2JseHVJQ0FnSUNBZ0lDQm1iM0lnS0d4bGRDQnJaWGtnYVc0Z2RtRnNkV1Z6S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RtRnNkV1Z6TG1oaGMwOTNibEJ5YjNCbGNuUjVLR3RsZVNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZV3gxWlhOYmEyVjVYUzV3Y21WMklEMGdkbUZzZFdWelcydGxlVjB1YjNKcFoybHVJRDBnZG1Gc2RXVnpXMnRsZVYwdVkzVnljbVZ1ZER0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNBZ0lIMWNibHh1SUNBZ0lITjBZWFJwWXlCbGVIUmxibVJFWldaaGRXeDBWbUZzZFdVb2NISnZjSE1wSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhzZ0xpNHVkR2hwY3k1d2NtOTBiM1I1Y0dVdVpHVm1ZWFZzZEZaaGJIVmxMQ0F1TGk1d2NtOXdjeUI5TzF4dUlDQWdJSDFjYmx4dUlDQWdJSE4wWVhScFl5QmxlSFJsYm1SRVpXWmhkV3gwVUhKdmNITW9jSEp2Y0hNcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIc2dMaTR1ZEdocGN5NXdjbTkwYjNSNWNHVXVaR1ZtWVhWc2RGQnliM0J6TENBdUxpNXdjbTl3Y3lCOU8xeHVJQ0FnSUgxY2JuMWNibHh1UVdOMGFXOXVMbkJ5YjNSdmRIbHdaUzVrWldaaGRXeDBWbUZzZFdWUWNtOXdJRDBnSjJOMWNuSmxiblFuTzF4dVFXTjBhVzl1TG5CeWIzUnZkSGx3WlM1a1pXWmhkV3gwVm1Gc2RXVWdQU0I3WEc0Z0lDQWdZM1Z5Y21WdWREb2dNQ3hjYmlBZ0lDQjJaV3h2WTJsMGVUb2dNQ3hjYmlBZ0lDQnliM1Z1WkRvZ1ptRnNjMlVzWEc0Z0lDQWdiV2x1T2lCMWJtUmxabWx1WldRc1hHNGdJQ0FnYldGNE9pQjFibVJsWm1sdVpXUXNYRzRnSUNBZ2RISmhibk5tYjNKdE9pQjFibVJsWm1sdVpXUmNibjA3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUVGamRHbHZianRjYmlKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvQWN0aW9uLmpzXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX0FjdGlvbjIgPSByZXF1aXJlKCcuLi9hY3Rpb25zL0FjdGlvbicpO1xuXG52YXIgX0FjdGlvbjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BY3Rpb24yKTtcblxudmFyIF9nZW5lcmF0ZUJsZW5kQ3VydmUgPSByZXF1aXJlKCcuL2Zsb3cvZ2VuZXJhdGUtYmxlbmQtY3VydmUnKTtcblxudmFyIF9nZW5lcmF0ZUJsZW5kQ3VydmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2VuZXJhdGVCbGVuZEN1cnZlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG4vKlxuICAgIE1ldGhvZHMgYW5kIHByb3BlcnRpZXMgdG8gYWRkIHRvIGJvdW5kIEFjdGlvbnNcbiovXG52YXIgYm91bmRPblN0YXJ0ID0gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgIHJldHVybiBhY3Rpb24uZmxvdy5hY3RpdmF0ZUFjdGlvbihhY3Rpb24uaWQsIGFjdGlvbik7XG59O1xudmFyIGJvdW5kT25TdG9wID0gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgIHJldHVybiBhY3Rpb24uZmxvdy5kZWFjdGl2YXRlQWN0aW9uKGFjdGlvbi5pZCk7XG59O1xudmFyIGJvdW5kUHJvcHMgPSBmdW5jdGlvbiAoZmxvdykge1xuICAgIHJldHVybiB7XG4gICAgICAgIGZsb3c6IGZsb3csXG4gICAgICAgIGlzUHJpb3JpdHk6IHRydWUsXG4gICAgICAgIG9uQWN0aXZhdGU6IGJvdW5kT25TdGFydCxcbiAgICAgICAgb25EZWFjdGl2YXRlOiBib3VuZE9uU3RvcFxuICAgIH07XG59O1xuXG52YXIgRmxvdyA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gICAgX2luaGVyaXRzKEZsb3csIF9BY3Rpb24pO1xuXG4gICAgZnVuY3Rpb24gRmxvdyhwcm9wcykge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRmxvdyk7XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICAgICAgX3RoaXMuYWN0aXZlQWN0aW9ucyA9IHt9O1xuICAgICAgICBfdGhpcy5udW1BY3RpdmVBY3Rpb25zID0gMDtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIEZsb3cucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIHNldChwcm9wcykge1xuICAgICAgICBfQWN0aW9uLnByb3RvdHlwZS5zZXQuY2FsbCh0aGlzLCBwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5vbmNlKCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIC8qXG4gICAgICAgIEJpbmQgQWN0aW9uIHRvIEFjdG9yXG4gICAgKi9cblxuXG4gICAgRmxvdy5wcm90b3R5cGUuY29ubmVjdCA9IGZ1bmN0aW9uIGNvbm5lY3QoYWN0aW9uKSB7XG4gICAgICAgIHZhciBpbmhlcml0ZWRBY3Rpb24gPSBhY3Rpb24uaW5oZXJpdCgpO1xuICAgICAgICB2YXIgbmV3VmFsdWVzID0ge307XG4gICAgICAgIHZhciBoYXNOZXdWYWx1ZXMgPSBmYWxzZTtcblxuICAgICAgICAvLyBDcmVhdGUgdmFsdWVzIG9uIGFjdG9yIHRoYXQgZG9uJ3QgZXhpc3RcbiAgICAgICAgZm9yICh2YXIga2V5IGluIGluaGVyaXRlZEFjdGlvbi52YWx1ZXMpIHtcbiAgICAgICAgICAgIGlmIChpbmhlcml0ZWRBY3Rpb24udmFsdWVzLmhhc093blByb3BlcnR5KGtleSkgJiYgIXRoaXMudmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZXNba2V5XSA9IHt9O1xuICAgICAgICAgICAgICAgIGhhc05ld1ZhbHVlcyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaGFzTmV3VmFsdWVzKSB7XG4gICAgICAgICAgICB0aGlzLnNldCh7IHZhbHVlczogbmV3VmFsdWVzIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5oZXJpdGVkQWN0aW9uLnBhcmVudElkID0gYWN0aW9uLmlkO1xuXG4gICAgICAgIHJldHVybiBpbmhlcml0ZWRBY3Rpb24uc2V0KGJvdW5kUHJvcHModGhpcywgaW5oZXJpdGVkQWN0aW9uKSk7XG4gICAgfTtcblxuICAgIC8qXG4gICAgICAgIFN0YXJ0IEFjdG9yXG4gICAgICAgICBJZiBBY3Rpb24gaXMgcHJvdmlkZWQsIGJpbmQgaXQgdG8gdGhpcyBBY3RvciBhbmQgc3RhcnRcbiAgICAgICAgIEBwYXJhbSAob3B0aW9uYWwpIFtBY3Rpb25dXG4gICAgKi9cblxuXG4gICAgRmxvdy5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgICAgX0FjdGlvbi5wcm90b3R5cGUuc3RhcnQuY2FsbCh0aGlzKTtcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5hY3RpdmVBY3Rpb25zKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVBY3Rpb25zLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgYWN0aW9uID0gdGhpcy5hY3RpdmVBY3Rpb25zW2tleV07XG4gICAgICAgICAgICAgICAgaWYgKCFhY3Rpb24uaXNBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIEZsb3cucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICBfQWN0aW9uLnByb3RvdHlwZS5zdG9wLmNhbGwodGhpcyk7XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMuYWN0aXZlQWN0aW9ucykge1xuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlQWN0aW9ucy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVBY3Rpb25zW2tleV0uc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIEZsb3cucHJvdG90eXBlLndpbGxSZW5kZXIgPSBmdW5jdGlvbiB3aWxsUmVuZGVyKGFjdG9yLCBmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMudmFsdWVLZXlzW2ldO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcbiAgICAgICAgICAgIHZhciBkcml2ZXIgPSB2YWx1ZS5udW1Ecml2ZXJzID8gdGhpcy5hY3RpdmVBY3Rpb25zW3ZhbHVlLmRyaXZlcnNbMF1dIDogZmFsc2U7XG4gICAgICAgICAgICB2YXIgbmV3Q3VycmVudCA9IHZhbHVlLm51bURyaXZlcnMgPyBkcml2ZXIudmFsdWVzW2tleV0uY3VycmVudCA6IHZhbHVlLmN1cnJlbnQ7XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZS5ibGVuZEN1cnZlKSB7XG4gICAgICAgICAgICAgICAgbmV3Q3VycmVudCA9IHZhbHVlLmJsZW5kQ3VydmUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IG5ld0N1cnJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gX0FjdGlvbi5wcm90b3R5cGUud2lsbFJlbmRlci5jYWxsKHRoaXMsIGFjdG9yLCBmcmFtZVN0YW1wLCBlbGFwc2VkKTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgQWRkIGFjdGl2ZSBhY3Rpb25zXG4gICAgICAgICBAcGFyYW0gW251bWJlcl1cbiAgICAgICAgQHBhcmFtIFtBY3Rpb25dXG4gICAgKi9cblxuXG4gICAgRmxvdy5wcm90b3R5cGUuYWN0aXZhdGVBY3Rpb24gPSBmdW5jdGlvbiBhY3RpdmF0ZUFjdGlvbihpZCwgYWN0aW9uKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlQWN0aW9uc1tpZF0gPSBhY3Rpb247XG4gICAgICAgIHRoaXMubnVtQWN0aXZlQWN0aW9ucysrO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWN0aW9uLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gYWN0aW9uLnZhbHVlS2V5c1tpXTtcbiAgICAgICAgICAgIHZhciBhY3Rpb25WYWx1ZSA9IGFjdGlvbi52YWx1ZXNba2V5XTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG5cbiAgICAgICAgICAgIC8vIElmIHdlJ3JlIGJsZW5kaW5nIHRoaXMgYWN0aW9uLCBhbmQgdGhlcmUncyBvbiBhbHJlYWR5IGluIHByb2dyZXNzXG4gICAgICAgICAgICBpZiAoYWN0aW9uLmJsZW5kICYmIHZhbHVlLm51bURyaXZlcnMgJiYgIXZhbHVlLmJsZW5kQ3VydmUgJiYgdmFsdWUuZHJpdmVyc1swXS5wcm90b3R5cGUgPT09IGFjdGlvbi5wcm90b3R5cGUpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS5ibGVuZEN1cnZlID0gKDAsIF9nZW5lcmF0ZUJsZW5kQ3VydmUyLmRlZmF1bHQpKHRoaXMuYWN0aXZlQWN0aW9uc1t2YWx1ZS5kcml2ZXJzWzBdXSwgYWN0aW9uLCB2YWx1ZSwga2V5KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIWFjdGlvbi5pc1NjcnViYmluZykge1xuICAgICAgICAgICAgICAgIHZhbHVlLmJsZW5kQ3VydmUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgLy8gUGFzcyBBY3RvciB2YWx1ZSBwcm9wZXJ0aWVzIHRvIEFjdGlvblxuICAgICAgICAgICAgICAgIGlmIChhY3Rpb25WYWx1ZS52ZWxvY2l0eSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb25WYWx1ZS52ZWxvY2l0eSA9IHZhbHVlLnZlbG9jaXR5O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGFjdGlvblZhbHVlLmZyb20gPSBhY3Rpb25WYWx1ZS5jdXJyZW50ID0gdmFsdWUuY3VycmVudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFsdWUuZHJpdmVycyA9IFtpZF07XG4gICAgICAgICAgICB2YWx1ZS5udW1Ecml2ZXJzID0gdmFsdWUuZHJpdmVycy5sZW5ndGg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5udW1BY3RpdmVBY3Rpb25zKSB7XG4gICAgICAgICAgICBfQWN0aW9uLnByb3RvdHlwZS5zdGFydC5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qXG4gICAgICAgIFJlbW92ZSBhY3RpdmUgYWN0aW9uc1xuICAgICAgICAgQHBhcmFtIFtudW1iZXJdXG4gICAgKi9cblxuXG4gICAgRmxvdy5wcm90b3R5cGUuZGVhY3RpdmF0ZUFjdGlvbiA9IGZ1bmN0aW9uIGRlYWN0aXZhdGVBY3Rpb24oaWQpIHtcbiAgICAgICAgdmFyIGFjdGlvbiA9IHRoaXMuYWN0aXZlQWN0aW9uc1tpZF07XG5cbiAgICAgICAgaWYgKGFjdGlvbikge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhY3Rpb24ubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIga2V5ID0gYWN0aW9uLnZhbHVlS2V5c1tpXTtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuICAgICAgICAgICAgICAgIHZhciBkcml2ZXJJbmRleCA9IHZhbHVlLmRyaXZlcnMuaW5kZXhPZihpZCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoZHJpdmVySW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLmRyaXZlcnMuc3BsaWNlKGRyaXZlckluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUubnVtRHJpdmVycy0tO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuYWN0aXZlQWN0aW9uc1tpZF07XG4gICAgICAgICAgICB0aGlzLm51bUFjdGl2ZUFjdGlvbnMtLTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5udW1BY3RpdmVBY3Rpb25zICYmIHRoaXMuaXNBY3RpdmUpIHtcbiAgICAgICAgICAgIF9BY3Rpb24ucHJvdG90eXBlLnN0b3AuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gRmxvdztcbn0oX0FjdGlvbjMuZGVmYXVsdCk7XG5cbkZsb3cucHJvdG90eXBlLmRlZmF1bHRWYWx1ZSA9IF9BY3Rpb24zLmRlZmF1bHQuZXh0ZW5kRGVmYXVsdFZhbHVlKHtcbiAgICBkcml2ZXJzOiBbXSxcbiAgICBudW1Ecml2ZXJzOiAwXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gRmxvdztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDBac2IzY3Vhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0QlFVRkJPenM3TzBGQlEwRTdPenM3T3pzN096czdPenM3T3p0QlFVdEJMRWxCUVUwc1pVRkJaU3hWUVVGRExFMUJRVVE3VjBGQldTeFBRVUZQTEVsQlFWQXNRMEZCV1N4alFVRmFMRU5CUVRKQ0xFOUJRVThzUlVGQlVDeEZRVUZYTEUxQlFYUkRPME5CUVZvN1FVRkRja0lzU1VGQlRTeGpRVUZqTEZWQlFVTXNUVUZCUkR0WFFVRlpMRTlCUVU4c1NVRkJVQ3hEUVVGWkxHZENRVUZhTEVOQlFUWkNMRTlCUVU4c1JVRkJVRHREUVVGNlF6dEJRVU53UWl4SlFVRk5MR0ZCUVdFc1ZVRkJReXhKUVVGRU8xZEJRVmM3UVVGRE1VSXNhMEpCUkRCQ08wRkJSVEZDTEc5Q1FVRlpMRWxCUVZvN1FVRkRRU3h2UWtGQldTeFpRVUZhTzBGQlEwRXNjMEpCUVdNc1YwRkJaRHM3UTBGS1pUczdTVUZQWWpzN08wRkJRMFlzWVVGRVJTeEpRVU5HTEVOQlFWa3NTMEZCV2l4RlFVRnRRanM0UWtGRWFrSXNUVUZEYVVJN08zRkVRVU5tTEcxQ1FVRk5MRXRCUVU0c1IwRkVaVHM3UVVGRlppeGpRVUZMTEdGQlFVd3NSMEZCY1VJc1JVRkJja0lzUTBGR1pUdEJRVWRtTEdOQlFVc3NaMEpCUVV3c1IwRkJkMElzUTBGQmVFSXNRMEZJWlRzN1MwRkJia0k3TzBGQlJFVXNiVUpCVDBZc2JVSkJRVWtzVDBGQlR6dEJRVU5RTERCQ1FVRk5MRWRCUVU0c1dVRkJWU3hMUVVGV0xFVkJSRTg3TzBGQlIxQXNZVUZCU3l4SlFVRk1MRWRCU0U4N08wRkJTMUFzWlVGQlR5eEpRVUZRTEVOQlRFODdPenM3T3pzN08wRkJVRlFzYlVKQmEwSkdMREpDUVVGUkxGRkJRVkU3UVVGRFdpeFpRVUZOTEd0Q1FVRnJRaXhQUVVGUExFOUJRVkFzUlVGQmJFSXNRMEZFVFR0QlFVVmFMRmxCUVVrc1dVRkJXU3hGUVVGYUxFTkJSbEU3UVVGSFdpeFpRVUZKTEdWQlFXVXNTMEZCWmpzN08wRkJTRkVzWVVGTlVDeEpRVUZKTEVkQlFVb3NTVUZCVnl4blFrRkJaMElzVFVGQmFFSXNSVUZCZDBJN1FVRkRjRU1zWjBKQlFVa3NaMEpCUVdkQ0xFMUJRV2hDTEVOQlFYVkNMR05CUVhaQ0xFTkJRWE5ETEVkQlFYUkRMRXRCUVRoRExFTkJRVU1zUzBGQlN5eE5RVUZNTEVOQlFWa3NZMEZCV2l4RFFVRXlRaXhIUVVFelFpeERRVUZFTEVWQlFXdERPMEZCUTJoR0xEQkNRVUZWTEVkQlFWWXNTVUZCYVVJc1JVRkJha0lzUTBGRVowWTdRVUZGYUVZc0swSkJRV1VzU1VGQlppeERRVVpuUmp0aFFVRndSanRUUVVSS096dEJRVTlCTEZsQlFVa3NXVUZCU2l4RlFVRnJRanRCUVVOa0xHbENRVUZMTEVkQlFVd3NRMEZCVXl4RlFVRkZMRkZCUVZFc1UwRkJVaXhGUVVGWUxFVkJSR003VTBGQmJFSTdPMEZCU1VFc2QwSkJRV2RDTEZGQlFXaENMRWRCUVRKQ0xFOUJRVThzUlVGQlVDeERRV3BDWmpzN1FVRnRRbG9zWlVGQlR5eG5Ra0ZCWjBJc1IwRkJhRUlzUTBGQmIwSXNWMEZCVnl4SlFVRllMRVZCUVdsQ0xHVkJRV3BDTEVOQlFYQkNMRU5CUVZBc1EwRnVRbGs3T3pzN096czdPenM3UVVGc1FtUXNiVUpCSzBOR0xIbENRVUZSTzBGQlEwb3NNRUpCUVUwc1MwRkJUaXhaUVVSSk96dEJRVWRLTEdGQlFVc3NTVUZCU1N4SFFVRktMRWxCUVZjc1MwRkJTeXhoUVVGTUxFVkJRVzlDTzBGQlEyaERMR2RDUVVGSkxFdEJRVXNzWVVGQlRDeERRVUZ0UWl4alFVRnVRaXhEUVVGclF5eEhRVUZzUXl4RFFVRktMRVZCUVRSRE8wRkJRM2hETEc5Q1FVRk5MRk5CUVZNc1MwRkJTeXhoUVVGTUxFTkJRVzFDTEVkQlFXNUNMRU5CUVZRc1EwRkVhME03UVVGRmVFTXNiMEpCUVVrc1EwRkJReXhQUVVGUExGRkJRVkFzUlVGQmFVSTdRVUZEYkVJc01rSkJRVThzUzBGQlVDeEhRVVJyUWp0cFFrRkJkRUk3WVVGR1NqdFRRVVJLT3p0QlFWTkJMR1ZCUVU4c1NVRkJVQ3hEUVZwSk96czdRVUV2UTA0c2JVSkJPRVJHTEhWQ1FVRlBPMEZCUTBnc01FSkJRVTBzU1VGQlRpeFpRVVJIT3p0QlFVZElMR0ZCUVVzc1NVRkJTU3hIUVVGS0xFbEJRVmNzUzBGQlN5eGhRVUZNTEVWQlFXOUNPMEZCUTJoRExHZENRVUZKTEV0QlFVc3NZVUZCVEN4RFFVRnRRaXhqUVVGdVFpeERRVUZyUXl4SFFVRnNReXhEUVVGS0xFVkJRVFJETzBGQlEzaERMSEZDUVVGTExHRkJRVXdzUTBGQmJVSXNSMEZCYmtJc1JVRkJkMElzU1VGQmVFSXNSMEZFZDBNN1lVRkJOVU03VTBGRVNqczdRVUZOUVN4bFFVRlBMRWxCUVZBc1EwRlVSenM3TzBGQk9VUk1MRzFDUVRCRlJpeHBRMEZCVnl4UFFVRlBMRmxCUVZrc1UwRkJVenRCUVVOdVF5eGhRVUZMTEVsQlFVa3NTVUZCU1N4RFFVRktMRVZCUVU4c1NVRkJTU3hMUVVGTExGbEJRVXdzUlVGQmJVSXNSMEZCZGtNc1JVRkJORU03UVVGRGVFTXNaMEpCUVUwc1RVRkJUU3hMUVVGTExGTkJRVXdzUTBGQlpTeERRVUZtTEVOQlFVNHNRMEZFYTBNN1FVRkZlRU1zWjBKQlFVMHNVVUZCVVN4TFFVRkxMRTFCUVV3c1EwRkJXU3hIUVVGYUxFTkJRVklzUTBGR2EwTTdRVUZIZUVNc1owSkJRVTBzVTBGQlV5eE5RVUZOTEZWQlFVNHNSMEZCYlVJc1MwRkJTeXhoUVVGTUxFTkJRVzFDTEUxQlFVMHNUMEZCVGl4RFFVRmpMRU5CUVdRc1EwRkJia0lzUTBGQmJrSXNSMEZCTUVRc1MwRkJNVVFzUTBGSWVVSTdRVUZKZUVNc1owSkJRVWtzWVVGQllTeE5RVUZOTEZWQlFVNHNSMEZCYlVJc1QwRkJUeXhOUVVGUUxFTkJRV01zUjBGQlpDeEZRVUZ0UWl4UFFVRnVRaXhIUVVFMlFpeE5RVUZOTEU5QlFVNHNRMEZLZWtJN08wRkJUWGhETEdkQ1FVRkpMRTFCUVUwc1ZVRkJUaXhGUVVGclFqdEJRVU5zUWl3MlFrRkJZU3hOUVVGTkxGVkJRVTRzUlVGQllpeERRVVJyUWp0aFFVRjBRanM3UVVGSlFTeHJRa0ZCVFN4UFFVRk9MRWRCUVdkQ0xGVkJRV2hDTEVOQlZuZERPMU5CUVRWRE96dEJRV0ZCTEdWQlFVOHNhMEpCUVUwc1ZVRkJUaXhaUVVGcFFpeExRVUZxUWl4RlFVRjNRaXhWUVVGNFFpeEZRVUZ2UXl4UFFVRndReXhEUVVGUUxFTkJaRzFET3pzN096czdPenM3TzBGQk1VVnlReXh0UWtGcFIwWXNlVU5CUVdVc1NVRkJTU3hSUVVGUk8wRkJRM1pDTEdGQlFVc3NZVUZCVEN4RFFVRnRRaXhGUVVGdVFpeEpRVUY1UWl4TlFVRjZRaXhEUVVSMVFqdEJRVVYyUWl4aFFVRkxMR2RDUVVGTUxFZEJSblZDT3p0QlFVbDJRaXhoUVVGTExFbEJRVWtzU1VGQlNTeERRVUZLTEVWQlFVOHNTVUZCU1N4UFFVRlBMRmxCUVZBc1JVRkJjVUlzUjBGQmVrTXNSVUZCT0VNN1FVRkRNVU1zWjBKQlFVMHNUVUZCVFN4UFFVRlBMRk5CUVZBc1EwRkJhVUlzUTBGQmFrSXNRMEZCVGl4RFFVUnZRenRCUVVVeFF5eG5Ra0ZCVFN4alFVRmpMRTlCUVU4c1RVRkJVQ3hEUVVGakxFZEJRV1FzUTBGQlpDeERRVVp2UXp0QlFVY3hReXhuUWtGQlRTeFJRVUZSTEV0QlFVc3NUVUZCVEN4RFFVRlpMRWRCUVZvc1EwRkJVanM3TzBGQlNHOURMR2RDUVUxMFF5eFBRVUZQTEV0QlFWQXNTVUZCWjBJc1RVRkJUU3hWUVVGT0xFbEJRVzlDTEVOQlFVTXNUVUZCVFN4VlFVRk9MRWxCUVhGQ0xFMUJRVTBzVDBGQlRpeERRVUZqTEVOQlFXUXNSVUZCYVVJc1UwRkJha0lzUzBGQkswSXNUMEZCVHl4VFFVRlFMRVZCUVcxQ08wRkJRelZITEhOQ1FVRk5MRlZCUVU0c1IwRkJiVUlzYTBOQlFXMUNMRXRCUVVzc1lVRkJUQ3hEUVVGdFFpeE5RVUZOTEU5QlFVNHNRMEZCWXl4RFFVRmtMRU5CUVc1Q0xFTkJRVzVDTEVWQlFYbEVMRTFCUVhwRUxFVkJRV2xGTEV0QlFXcEZMRVZCUVhkRkxFZEJRWGhGTEVOQlFXNUNMRU5CUkRSSE8yRkJRV2hJTEUxQlJVOHNTVUZCU1N4RFFVRkRMRTlCUVU4c1YwRkJVQ3hGUVVGdlFqdEJRVU0xUWl4elFrRkJUU3hWUVVGT0xFZEJRVzFDTEZOQlFXNUNPenRCUVVRMFFpeHZRa0ZIZUVJc1dVRkJXU3hSUVVGYUxFdEJRWGxDTEVOQlFYcENMRVZCUVRSQ08wRkJRelZDTEdkRFFVRlpMRkZCUVZvc1IwRkJkVUlzVFVGQlRTeFJRVUZPTEVOQlJFczdhVUpCUVdoRE96dEJRVWxCTERSQ1FVRlpMRWxCUVZvc1IwRkJiVUlzV1VGQldTeFBRVUZhTEVkQlFYTkNMRTFCUVUwc1QwRkJUaXhEUVZCaU8yRkJRWHBDT3p0QlFWVlFMR3RDUVVGTkxFOUJRVTRzUjBGQlowSXNRMEZCUXl4RlFVRkVMRU5CUVdoQ0xFTkJiRUl3UXp0QlFXMUNNVU1zYTBKQlFVMHNWVUZCVGl4SFFVRnRRaXhOUVVGTkxFOUJRVTRzUTBGQll5eE5RVUZrTEVOQmJrSjFRanRUUVVFNVF6czdRVUZ6UWtFc1dVRkJTU3hMUVVGTExHZENRVUZNTEVWQlFYVkNPMEZCUTNaQ0xEaENRVUZOTEV0QlFVNHNXVUZFZFVJN1UwRkJNMEk3T3pzN096czdPenRCUVROSVJpeHRRa0Z4U1VZc05rTkJRV2xDTEVsQlFVazdRVUZEYWtJc1dVRkJUU3hUUVVGVExFdEJRVXNzWVVGQlRDeERRVUZ0UWl4RlFVRnVRaXhEUVVGVUxFTkJSRmM3TzBGQlIycENMRmxCUVVrc1RVRkJTaXhGUVVGWk8wRkJRMUlzYVVKQlFVc3NTVUZCU1N4SlFVRkpMRU5CUVVvc1JVRkJUeXhKUVVGSkxFOUJRVThzV1VGQlVDeEZRVUZ4UWl4SFFVRjZReXhGUVVFNFF6dEJRVU14UXl4dlFrRkJUU3hOUVVGTkxFOUJRVThzVTBGQlVDeERRVUZwUWl4RFFVRnFRaXhEUVVGT0xFTkJSRzlETzBGQlJURkRMRzlDUVVGTkxGRkJRVkVzUzBGQlN5eE5RVUZNTEVOQlFWa3NSMEZCV2l4RFFVRlNMRU5CUm05RE8wRkJSekZETEc5Q1FVRk5MR05CUVdNc1RVRkJUU3hQUVVGT0xFTkJRV01zVDBGQlpDeERRVUZ6UWl4RlFVRjBRaXhEUVVGa0xFTkJTRzlET3p0QlFVc3hReXh2UWtGQlNTeG5Ra0ZCWjBJc1EwRkJReXhEUVVGRUxFVkJRVWs3UVVGRGNFSXNNRUpCUVUwc1QwRkJUaXhEUVVGakxFMUJRV1FzUTBGQmNVSXNWMEZCY2tJc1JVRkJhME1zUTBGQmJFTXNSVUZFYjBJN1FVRkZjRUlzTUVKQlFVMHNWVUZCVGl4SFFVWnZRanRwUWtGQmVFSTdZVUZNU2pzN1FVRlhRU3h0UWtGQlR5eExRVUZMTEdGQlFVd3NRMEZCYlVJc1JVRkJia0lzUTBGQlVDeERRVnBSTzBGQllWSXNhVUpCUVVzc1owSkJRVXdzUjBGaVVUdFRRVUZhT3p0QlFXZENRU3haUVVGSkxFTkJRVU1zUzBGQlN5eG5Ra0ZCVEN4SlFVRjVRaXhMUVVGTExGRkJRVXdzUlVGQlpUdEJRVU42UXl3NFFrRkJUU3hKUVVGT0xGbEJSSGxETzFOQlFUZERPenM3VjBGNFNrWTdPenRCUVRoS1RpeExRVUZMTEZOQlFVd3NRMEZCWlN4WlFVRm1MRWRCUVRoQ0xHbENRVUZQTEd0Q1FVRlFMRU5CUVRCQ08wRkJRM0JFTEdGQlFWTXNSVUZCVkR0QlFVTkJMR2RDUVVGWkxFTkJRVm83UTBGR01FSXNRMEZCT1VJN08ydENRVXRsSWl3aVptbHNaU0k2SWtac2IzY3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFF2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJRUZqZEdsdmJpQm1jbTl0SUNjdUxpOWhZM1JwYjI1ekwwRmpkR2x2YmljN1hHNXBiWEJ2Y25RZ1oyVnVaWEpoZEdWQ2JHVnVaRU4xY25abElHWnliMjBnSnk0dlpteHZkeTluWlc1bGNtRjBaUzFpYkdWdVpDMWpkWEoyWlNjN1hHNWNiaThxWEc0Z0lDQWdUV1YwYUc5a2N5QmhibVFnY0hKdmNHVnlkR2xsY3lCMGJ5QmhaR1FnZEc4Z1ltOTFibVFnUVdOMGFXOXVjMXh1S2k5Y2JtTnZibk4wSUdKdmRXNWtUMjVUZEdGeWRDQTlJQ2hoWTNScGIyNHBJRDArSUdGamRHbHZiaTVtYkc5M0xtRmpkR2wyWVhSbFFXTjBhVzl1S0dGamRHbHZiaTVwWkN3Z1lXTjBhVzl1S1R0Y2JtTnZibk4wSUdKdmRXNWtUMjVUZEc5d0lEMGdLR0ZqZEdsdmJpa2dQVDRnWVdOMGFXOXVMbVpzYjNjdVpHVmhZM1JwZG1GMFpVRmpkR2x2YmloaFkzUnBiMjR1YVdRcE8xeHVZMjl1YzNRZ1ltOTFibVJRY205d2N5QTlJQ2htYkc5M0tTQTlQaUFvZTF4dUlDQWdJR1pzYjNjc1hHNGdJQ0FnYVhOUWNtbHZjbWwwZVRvZ2RISjFaU3hjYmlBZ0lDQnZia0ZqZEdsMllYUmxPaUJpYjNWdVpFOXVVM1JoY25Rc1hHNGdJQ0FnYjI1RVpXRmpkR2wyWVhSbE9pQmliM1Z1WkU5dVUzUnZjRnh1ZlNrN1hHNWNibU5zWVhOeklFWnNiM2NnWlhoMFpXNWtjeUJCWTNScGIyNGdlMXh1SUNBZ0lHTnZibk4wY25WamRHOXlLSEJ5YjNCektTQjdYRzRnSUNBZ0lDQWdJSE4xY0dWeUtIQnliM0J6S1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVoWTNScGRtVkJZM1JwYjI1eklEMGdlMzA3WEc0Z0lDQWdJQ0FnSUhSb2FYTXViblZ0UVdOMGFYWmxRV04wYVc5dWN5QTlJREE3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjMlYwS0hCeWIzQnpLU0I3WEc0Z0lDQWdJQ0FnSUhOMWNHVnlMbk5sZENod2NtOXdjeWs3WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV2Ym1ObEtDazdYRzVjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHlwY2JpQWdJQ0FnSUNBZ1FtbHVaQ0JCWTNScGIyNGdkRzhnUVdOMGIzSmNiaUFnSUNBcUwxeHVJQ0FnSUdOdmJtNWxZM1FvWVdOMGFXOXVLU0I3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJR2x1YUdWeWFYUmxaRUZqZEdsdmJpQTlJR0ZqZEdsdmJpNXBibWhsY21sMEtDazdYRzRnSUNBZ0lDQWdJR3hsZENCdVpYZFdZV3gxWlhNZ1BTQjdmVHRjYmlBZ0lDQWdJQ0FnYkdWMElHaGhjMDVsZDFaaGJIVmxjeUE5SUdaaGJITmxPMXh1WEc0Z0lDQWdJQ0FnSUM4dklFTnlaV0YwWlNCMllXeDFaWE1nYjI0Z1lXTjBiM0lnZEdoaGRDQmtiMjRuZENCbGVHbHpkRnh1SUNBZ0lDQWdJQ0JtYjNJZ0tHeGxkQ0JyWlhrZ2FXNGdhVzVvWlhKcGRHVmtRV04wYVc5dUxuWmhiSFZsY3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHbHVhR1Z5YVhSbFpFRmpkR2x2Ymk1MllXeDFaWE11YUdGelQzZHVVSEp2Y0dWeWRIa29hMlY1S1NBbUppQWhkR2hwY3k1MllXeDFaWE11YUdGelQzZHVVSEp2Y0dWeWRIa29hMlY1S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHNWxkMVpoYkhWbGMxdHJaWGxkSUQwZ2UzMDdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhR0Z6VG1WM1ZtRnNkV1Z6SUQwZ2RISjFaVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUdsbUlDaG9ZWE5PWlhkV1lXeDFaWE1wSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWMyVjBLSHNnZG1Gc2RXVnpPaUJ1WlhkV1lXeDFaWE1nZlNrN1hHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0JwYm1obGNtbDBaV1JCWTNScGIyNHVjR0Z5Wlc1MFNXUWdQU0JoWTNScGIyNHVhV1E3WEc1Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUdsdWFHVnlhWFJsWkVGamRHbHZiaTV6WlhRb1ltOTFibVJRY205d2N5aDBhR2x6TENCcGJtaGxjbWwwWldSQlkzUnBiMjRwS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0F2S2x4dUlDQWdJQ0FnSUNCVGRHRnlkQ0JCWTNSdmNseHVYRzRnSUNBZ0lDQWdJRWxtSUVGamRHbHZiaUJwY3lCd2NtOTJhV1JsWkN3Z1ltbHVaQ0JwZENCMGJ5QjBhR2x6SUVGamRHOXlJR0Z1WkNCemRHRnlkRnh1WEc0Z0lDQWdJQ0FnSUVCd1lYSmhiU0FvYjNCMGFXOXVZV3dwSUZ0QlkzUnBiMjVkWEc0Z0lDQWdLaTljYmlBZ0lDQnpkR0Z5ZENncElIdGNiaUFnSUNBZ0lDQWdjM1Z3WlhJdWMzUmhjblFvS1R0Y2JseHVJQ0FnSUNBZ0lDQm1iM0lnS0d4bGRDQnJaWGtnYVc0Z2RHaHBjeTVoWTNScGRtVkJZM1JwYjI1ektTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9kR2hwY3k1aFkzUnBkbVZCWTNScGIyNXpMbWhoYzA5M2JsQnliM0JsY25SNUtHdGxlU2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0JoWTNScGIyNGdQU0IwYUdsekxtRmpkR2wyWlVGamRHbHZibk5iYTJWNVhUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvSVdGamRHbHZiaTVwYzBGamRHbDJaU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmhZM1JwYjI0dWMzUmhjblFvS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjenRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnpkRzl3S0NrZ2UxeHVJQ0FnSUNBZ0lDQnpkWEJsY2k1emRHOXdLQ2s3WEc1Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2EyVjVJR2x1SUhSb2FYTXVZV04wYVhabFFXTjBhVzl1Y3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIUm9hWE11WVdOMGFYWmxRV04wYVc5dWN5NW9ZWE5QZDI1UWNtOXdaWEowZVNoclpYa3BLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NWhZM1JwZG1WQlkzUnBiMjV6VzJ0bGVWMHVjM1J2Y0NncE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lDQWdmVnh1WEc0Z0lDQWdkMmxzYkZKbGJtUmxjaWhoWTNSdmNpd2dabkpoYldWVGRHRnRjQ3dnWld4aGNITmxaQ2tnZTF4dUlDQWdJQ0FnSUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElIUm9hWE11Ym5WdFZtRnNkV1ZMWlhsek95QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElHdGxlU0E5SUhSb2FYTXVkbUZzZFdWTFpYbHpXMmxkTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2RtRnNkV1VnUFNCMGFHbHpMblpoYkhWbGMxdHJaWGxkTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ1pISnBkbVZ5SUQwZ2RtRnNkV1V1Ym5WdFJISnBkbVZ5Y3lBL0lIUm9hWE11WVdOMGFYWmxRV04wYVc5dWMxdDJZV3gxWlM1a2NtbDJaWEp6V3pCZFhTQTZJR1poYkhObE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnYkdWMElHNWxkME4xY25KbGJuUWdQU0IyWVd4MVpTNXVkVzFFY21sMlpYSnpJRDhnWkhKcGRtVnlMblpoYkhWbGMxdHJaWGxkTG1OMWNuSmxiblFnT2lCMllXeDFaUzVqZFhKeVpXNTBPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvZG1Gc2RXVXVZbXhsYm1SRGRYSjJaU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUc1bGQwTjFjbkpsYm5RZ1BTQjJZV3gxWlM1aWJHVnVaRU4xY25abEtDazdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUhaaGJIVmxMbU4xY25KbGJuUWdQU0J1WlhkRGRYSnlaVzUwTzF4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlITjFjR1Z5TG5kcGJHeFNaVzVrWlhJb1lXTjBiM0lzSUdaeVlXMWxVM1JoYlhBc0lHVnNZWEJ6WldRcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUM4cVhHNGdJQ0FnSUNBZ0lFRmtaQ0JoWTNScGRtVWdZV04wYVc5dWMxeHVYRzRnSUNBZ0lDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhWeHVJQ0FnSUNBZ0lDQkFjR0Z5WVcwZ1cwRmpkR2x2YmwxY2JpQWdJQ0FxTDF4dUlDQWdJR0ZqZEdsMllYUmxRV04wYVc5dUtHbGtMQ0JoWTNScGIyNHBJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWhZM1JwZG1WQlkzUnBiMjV6VzJsa1hTQTlJR0ZqZEdsdmJqdGNiaUFnSUNBZ0lDQWdkR2hwY3k1dWRXMUJZM1JwZG1WQlkzUnBiMjV6S3lzN1hHNWNiaUFnSUNBZ0lDQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0JoWTNScGIyNHViblZ0Vm1Gc2RXVkxaWGx6T3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUd0bGVTQTlJR0ZqZEdsdmJpNTJZV3gxWlV0bGVYTmJhVjA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCaFkzUnBiMjVXWVd4MVpTQTlJR0ZqZEdsdmJpNTJZV3gxWlhOYmEyVjVYVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUhaaGJIVmxJRDBnZEdocGN5NTJZV3gxWlhOYmEyVjVYVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnU1dZZ2QyVW5jbVVnWW14bGJtUnBibWNnZEdocGN5QmhZM1JwYjI0c0lHRnVaQ0IwYUdWeVpTZHpJRzl1SUdGc2NtVmhaSGtnYVc0Z2NISnZaM0psYzNOY2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoaFkzUnBiMjR1WW14bGJtUWdKaVlnZG1Gc2RXVXViblZ0UkhKcGRtVnljeUFtSmlBaGRtRnNkV1V1WW14bGJtUkRkWEoyWlNBbUppQW9kbUZzZFdVdVpISnBkbVZ5YzFzd1hTNXdjbTkwYjNSNWNHVWdQVDA5SUdGamRHbHZiaTV3Y205MGIzUjVjR1VwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnNkV1V1WW14bGJtUkRkWEoyWlNBOUlHZGxibVZ5WVhSbFFteGxibVJEZFhKMlpTaDBhR2x6TG1GamRHbDJaVUZqZEdsdmJuTmJkbUZzZFdVdVpISnBkbVZ5YzFzd1hWMHNJR0ZqZEdsdmJpd2dkbUZzZFdVc0lHdGxlU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2FXWWdLQ0ZoWTNScGIyNHVhWE5UWTNKMVltSnBibWNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMllXeDFaUzVpYkdWdVpFTjFjblpsSUQwZ2RXNWtaV1pwYm1Wa08xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDOHZJRkJoYzNNZ1FXTjBiM0lnZG1Gc2RXVWdjSEp2Y0dWeWRHbGxjeUIwYnlCQlkzUnBiMjVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb1lXTjBhVzl1Vm1Gc2RXVXVkbVZzYjJOcGRIa2dQVDA5SURBcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWVdOMGFXOXVWbUZzZFdVdWRtVnNiMk5wZEhrZ1BTQjJZV3gxWlM1MlpXeHZZMmwwZVR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmhZM1JwYjI1V1lXeDFaUzVtY205dElEMGdZV04wYVc5dVZtRnNkV1V1WTNWeWNtVnVkQ0E5SUhaaGJIVmxMbU4xY25KbGJuUTdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUhaaGJIVmxMbVJ5YVhabGNuTWdQU0JiYVdSZE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVXViblZ0UkhKcGRtVnljeUE5SUhaaGJIVmxMbVJ5YVhabGNuTXViR1Z1WjNSb08xeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnYVdZZ0tIUm9hWE11Ym5WdFFXTjBhWFpsUVdOMGFXOXVjeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjM1Z3WlhJdWMzUmhjblFvS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JseHVJQ0FnSUM4cVhHNGdJQ0FnSUNBZ0lGSmxiVzkyWlNCaFkzUnBkbVVnWVdOMGFXOXVjMXh1WEc0Z0lDQWdJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVnh1SUNBZ0lDb3ZYRzRnSUNBZ1pHVmhZM1JwZG1GMFpVRmpkR2x2YmlocFpDa2dlMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQmhZM1JwYjI0Z1BTQjBhR2x6TG1GamRHbDJaVUZqZEdsdmJuTmJhV1JkTzF4dVhHNGdJQ0FnSUNBZ0lHbG1JQ2hoWTNScGIyNHBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2dZV04wYVc5dUxtNTFiVlpoYkhWbFMyVjVjenNnYVNzcktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2EyVjVJRDBnWVdOMGFXOXVMblpoYkhWbFMyVjVjMXRwWFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0IyWVd4MVpTQTlJSFJvYVhNdWRtRnNkV1Z6VzJ0bGVWMDdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ1pISnBkbVZ5U1c1a1pYZ2dQU0IyWVd4MVpTNWtjbWwyWlhKekxtbHVaR1Y0VDJZb2FXUXBPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHUnlhWFpsY2tsdVpHVjRJQ0U5UFNBdE1Ta2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMllXeDFaUzVrY21sMlpYSnpMbk53YkdsalpTaGtjbWwyWlhKSmJtUmxlQ3dnTVNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFpoYkhWbExtNTFiVVJ5YVhabGNuTXRMVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lHUmxiR1YwWlNCMGFHbHpMbUZqZEdsMlpVRmpkR2x2Ym5OYmFXUmRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV1ZFcxQlkzUnBkbVZCWTNScGIyNXpMUzA3WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQnBaaUFvSVhSb2FYTXViblZ0UVdOMGFYWmxRV04wYVc5dWN5QW1KaUIwYUdsekxtbHpRV04wYVhabEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCemRYQmxjaTV6ZEc5d0tDazdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzU5WEc1Y2JrWnNiM2N1Y0hKdmRHOTBlWEJsTG1SbFptRjFiSFJXWVd4MVpTQTlJRUZqZEdsdmJpNWxlSFJsYm1SRVpXWmhkV3gwVm1Gc2RXVW9lMXh1SUNBZ0lHUnlhWFpsY25NNklGdGRMRnh1SUNBZ0lHNTFiVVJ5YVhabGNuTTZJREJjYm4wcE8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQkdiRzkzTzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvRmxvdy5qc1xuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9BY3Rpb24yID0gcmVxdWlyZSgnLi9BY3Rpb24nKTtcblxudmFyIF9BY3Rpb24zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQWN0aW9uMik7XG5cbnZhciBfcHJlc2V0RWFzaW5nID0gcmVxdWlyZSgnLi9lYXNpbmcvcHJlc2V0LWVhc2luZycpO1xuXG52YXIgX3ByZXNldEVhc2luZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmVzZXRFYXNpbmcpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIENPVU5UID0gJ0NvdW50JztcbnZhciBORVhUX1NURVBTID0ge1xuICAgIGxvb3A6ICdyZXN0YXJ0JyxcbiAgICB5b3lvOiAncmV2ZXJzZScsXG4gICAgZmxpcDogJ2ZsaXBWYWx1ZXMnXG59O1xuXG52YXIgVHdlZW4gPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICAgIF9pbmhlcml0cyhUd2VlbiwgX0FjdGlvbik7XG5cbiAgICBmdW5jdGlvbiBUd2VlbigpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFR3ZWVuKTtcblxuICAgICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9XG5cbiAgICBUd2Vlbi5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5lbGFwc2VkID0gMDtcbiAgICAgICAgdGhpcy5mbGlwQ291bnQgPSB0aGlzLnlveW9Db3VudCA9IHRoaXMubG9vcENvdW50ID0gMDtcbiAgICAgICAgdGhpcy5pc1NjcnViYmluZyA9IGZhbHNlO1xuXG4gICAgICAgIHJldHVybiBfQWN0aW9uLnByb3RvdHlwZS5zdGFydC5jYWxsKHRoaXMpO1xuICAgIH07XG5cbiAgICBUd2Vlbi5wcm90b3R5cGUub25VcGRhdGUgPSBmdW5jdGlvbiBvblVwZGF0ZSh0d2VlbiwgZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgICAgICB2YXIgcHJvZ3Jlc3NUYXJnZXQgPSB0aGlzLnBsYXlEaXJlY3Rpb24gPT09IDEgPyAxIDogMDtcblxuICAgICAgICB0aGlzLmVuZGVkID0gdHJ1ZTtcblxuICAgICAgICBpZiAoIXRoaXMuaXNTY3J1YmJpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuZWxhcHNlZCArPSBlbGFwc2VkICogdGhpcy5kaWxhdGUgKiB0aGlzLnBsYXlEaXJlY3Rpb247XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSB0aGlzLnZhbHVlS2V5c1tpXTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG5cbiAgICAgICAgICAgIHZhciBwcm9ncmVzcyA9ICgwLCBfY2FsYy5yZXN0cmljdCkoKDAsIF9jYWxjLmdldFByb2dyZXNzRnJvbVZhbHVlKSh0aGlzLmVsYXBzZWQgLSB2YWx1ZS5kZWxheSwgMCwgdmFsdWUuZHVyYXRpb24pLCAwLCAxKTtcblxuICAgICAgICAgICAgLy8gTWFyayBUd2VlbiBhcyBOT1QgZW5kZWQgaWYgc3RpbGwgaW4gcHJvZ3Jlc3NcbiAgICAgICAgICAgIGlmIChwcm9ncmVzcyAhPT0gcHJvZ3Jlc3NUYXJnZXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFN0ZXAgcHJvZ3Jlc3MgaWYgd2UncmUgc3RlcHBpbmdcbiAgICAgICAgICAgIGlmICh2YWx1ZS5zdGVwcykge1xuICAgICAgICAgICAgICAgIHByb2dyZXNzID0gKDAsIF9jYWxjLnN0ZXBQcm9ncmVzcykocHJvZ3Jlc3MsIHZhbHVlLnN0ZXBzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRWFzZSBwcm9ncmVzc1xuICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9ICgwLCBfY2FsYy5lYXNlKShwcm9ncmVzcywgdmFsdWUuZnJvbSwgdmFsdWUudG8sIHZhbHVlLmVhc2UpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIFR3ZWVuLnByb3RvdHlwZS5vbkZyYW1lRW5kID0gZnVuY3Rpb24gb25GcmFtZUVuZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZW5kZWQgJiYgIXRoaXMuaXNTY3J1YmJpbmcpIHtcbiAgICAgICAgICAgIHZhciBzdGVwVGFrZW4gPSBmYWxzZTtcblxuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIE5FWFRfU1RFUFMpIHtcbiAgICAgICAgICAgICAgICBpZiAoTkVYVF9TVEVQUy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoMCwgX3V0aWxzLmlzTnVtKSh0aGlzW2tleV0pICYmIHRoaXNba2V5XSA+IHRoaXNba2V5ICsgQ09VTlRdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2tleSArIENPVU5UXSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RlcFRha2VuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbTkVYVF9TVEVQU1trZXldXSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXN0ZXBUYWtlbikge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcGxldGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBUd2Vlbi5wcm90b3R5cGUuZmxpcFZhbHVlcyA9IGZ1bmN0aW9uIGZsaXBWYWx1ZXMoKSB7XG4gICAgICAgIHZhciB2YWx1ZXMgPSB0aGlzLnZhbHVlcztcblxuICAgICAgICB0aGlzLmVsYXBzZWQgPSB0aGlzLmR1cmF0aW9uIC0gdGhpcy5lbGFwc2VkO1xuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiB2YWx1ZXMpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHZhbHVlc1trZXldO1xuICAgICAgICAgICAgICAgIHZhciBfcmVmID0gW3ZhbHVlLmZyb20sIHZhbHVlLnRvXTtcbiAgICAgICAgICAgICAgICB2YWx1ZS50byA9IF9yZWZbMF07XG4gICAgICAgICAgICAgICAgdmFsdWUuZnJvbSA9IF9yZWZbMV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgVHdlZW4ucHJvdG90eXBlLnJldmVyc2UgPSBmdW5jdGlvbiByZXZlcnNlKCkge1xuICAgICAgICB0aGlzLnBsYXlEaXJlY3Rpb24gKj0gLTE7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBUd2Vlbi5wcm90b3R5cGUucmVzdGFydCA9IGZ1bmN0aW9uIHJlc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuZWxhcHNlZCA9IHRoaXMucGxheURpcmVjdGlvbiA9PT0gMSA/IDAgOiB0aGlzLmR1cmF0aW9uO1xuICAgICAgICB0aGlzLnN0YXJ0ZWQgPSAoMCwgX3V0aWxzLmN1cnJlbnRUaW1lKSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgVHdlZW4ucHJvdG90eXBlLnNlZWsgPSBmdW5jdGlvbiBzZWVrKHByb2dyZXNzKSB7XG4gICAgICAgIHRoaXMuc2Vla1RpbWUodGhpcy5kdXJhdGlvbiAqIHByb2dyZXNzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIFR3ZWVuLnByb3RvdHlwZS5zZWVrVGltZSA9IGZ1bmN0aW9uIHNlZWtUaW1lKGVsYXBzZWQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzQWN0aXZlIHx8IHRoaXMuaXNTY3J1YmJpbmcpIHtcbiAgICAgICAgICAgIHRoaXMub25jZSgpO1xuICAgICAgICAgICAgdGhpcy5pc1NjcnViYmluZyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmVsYXBzZWQgPSBlbGFwc2VkO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICByZXR1cm4gVHdlZW47XG59KF9BY3Rpb24zLmRlZmF1bHQpO1xuXG5Ud2Vlbi5wcm90b3R5cGUuZGVmYXVsdFZhbHVlUHJvcCA9ICd0byc7XG5Ud2Vlbi5wcm90b3R5cGUuZGVmYXVsdFZhbHVlID0gX0FjdGlvbjMuZGVmYXVsdC5leHRlbmREZWZhdWx0VmFsdWUoe1xuICAgIGRlbGF5OiAwLFxuICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgZWFzZTogX3ByZXNldEVhc2luZzIuZGVmYXVsdC5lYXNlT3V0LFxuICAgIGVsYXBzZWQ6IDAsXG4gICAgZnJvbTogMCxcbiAgICBzdGVwczogMCxcbiAgICB0bzogMCxcbiAgICByb3VuZDogZmFsc2Vcbn0pO1xuVHdlZW4ucHJvdG90eXBlLmRlZmF1bHRQcm9wcyA9IF9BY3Rpb24zLmRlZmF1bHQuZXh0ZW5kRGVmYXVsdFByb3BzKHtcbiAgICBibGVuZDogdHJ1ZSxcbiAgICBkaWxhdGU6IDEsXG4gICAgbG9vcDogMCxcbiAgICB5b3lvOiAwLFxuICAgIGZsaXA6IDAsXG4gICAgbG9vcENvdW50OiAwLFxuICAgIHlveW9Db3VudDogMCxcbiAgICBmbGlwQ291bnQ6IDAsXG4gICAgcGxheURpcmVjdGlvbjogMSxcbiAgICBpc1NjcnViYmluZzogZmFsc2UsXG4gICAgZW5kZWQ6IGZhbHNlLFxuICAgIGVsYXBzZWQ6IDBcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBUd2Vlbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDFSM1pXVnVMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN1FVRkJRVHM3T3p0QlFVTkJPenM3TzBGQlEwRTdPMEZCUTBFN096czdPenM3T3pzN1FVRkZRU3hKUVVGTkxGRkJRVkVzVDBGQlVqdEJRVU5PTEVsQlFVMHNZVUZCWVR0QlFVTm1MRlZCUVUwc1UwRkJUanRCUVVOQkxGVkJRVTBzVTBGQlRqdEJRVU5CTEZWQlFVMHNXVUZCVGp0RFFVaEZPenRKUVUxQk96czdPenM3T3pzN2IwSkJRMFlzZVVKQlFWRTdRVUZEU2l4aFFVRkxMRTlCUVV3c1IwRkJaU3hEUVVGbUxFTkJSRWs3UVVGRlNpeGhRVUZMTEZOQlFVd3NSMEZCYVVJc1MwRkJTeXhUUVVGTUxFZEJRV2xDTEV0QlFVc3NVMEZCVEN4SFFVRnBRaXhEUVVGcVFpeERRVVk1UWp0QlFVZEtMR0ZCUVVzc1YwRkJUQ3hIUVVGdFFpeExRVUZ1UWl4RFFVaEpPenRCUVV0S0xHVkJRVThzYTBKQlFVMHNTMEZCVGl4WFFVRlFMRU5CVEVrN096dEJRVVJPTEc5Q1FWTkdMRFpDUVVGVExFOUJRVThzV1VGQldTeFRRVUZUTzBGQlEycERMRmxCUVUwc2FVSkJRV2xDTEVsQlFVTXNRMEZCU3l4aFFVRk1MRXRCUVhWQ0xFTkJRWFpDTEVkQlFUUkNMRU5CUVRkQ0xFZEJRV2xETEVOQlFXcERMRU5CUkZVN08wRkJSMnBETEdGQlFVc3NTMEZCVEN4SFFVRmhMRWxCUVdJc1EwRklhVU03TzBGQlMycERMRmxCUVVrc1EwRkJReXhMUVVGTExGZEJRVXdzUlVGQmEwSTdRVUZEYmtJc2FVSkJRVXNzVDBGQlRDeEpRVUZuUWl4UFFVRkRMRWRCUVZVc1MwRkJTeXhOUVVGTUxFZEJRV1VzUzBGQlN5eGhRVUZNTEVOQlJIWkNPMU5CUVhaQ096dEJRVWxCTEdGQlFVc3NTVUZCU1N4SlFVRkpMRU5CUVVvc1JVRkJUeXhKUVVGSkxFdEJRVXNzV1VGQlRDeEZRVUZ0UWl4SFFVRjJReXhGUVVFMFF6dEJRVU40UXl4blFrRkJUU3hOUVVGTkxFdEJRVXNzVTBGQlRDeERRVUZsTEVOQlFXWXNRMEZCVGl4RFFVUnJRenRCUVVWNFF5eG5Ra0ZCVFN4UlFVRlJMRXRCUVVzc1RVRkJUQ3hEUVVGWkxFZEJRVm9zUTBGQlVpeERRVVpyUXpzN1FVRkplRU1zWjBKQlFVa3NWMEZCVnl4dlFrRkJVeXhuUTBGQmNVSXNTMEZCU3l4UFFVRk1MRWRCUVdVc1RVRkJUU3hMUVVGT0xFVkJRV0VzUTBGQmFrUXNSVUZCYjBRc1RVRkJUU3hSUVVGT0xFTkJRVGRFTEVWQlFUaEZMRU5CUVRsRkxFVkJRV2xHTEVOQlFXcEdMRU5CUVZnN096dEJRVXB2UXl4blFrRlBjRU1zWVVGQllTeGpRVUZpTEVWQlFUWkNPMEZCUXpkQ0xIRkNRVUZMTEV0QlFVd3NSMEZCWVN4TFFVRmlMRU5CUkRaQ08yRkJRV3BET3pzN1FVRlFkME1zWjBKQldYQkRMRTFCUVUwc1MwRkJUaXhGUVVGaE8wRkJRMklzTWtKQlFWY3NkMEpCUVdFc1VVRkJZaXhGUVVGMVFpeE5RVUZOTEV0QlFVNHNRMEZCYkVNc1EwRkVZVHRoUVVGcVFqczdPMEZCV25kRExHbENRV2xDZUVNc1EwRkJUU3hQUVVGT0xFZEJRV2RDTEdkQ1FVRkxMRkZCUVV3c1JVRkJaU3hOUVVGTkxFbEJRVTRzUlVGQldTeE5RVUZOTEVWQlFVNHNSVUZCVlN4TlFVRk5MRWxCUVU0c1EwRkJja1FzUTBGcVFuZERPMU5CUVRWRE96czdRVUZzUWtZc2IwSkJkVU5HTEcxRFFVRmhPMEZCUTFRc1dVRkJTU3hMUVVGTExFdEJRVXdzU1VGQll5eERRVUZETEV0QlFVc3NWMEZCVEN4RlFVRnJRanRCUVVOcVF5eG5Ra0ZCU1N4WlFVRlpMRXRCUVZvc1EwRkVOa0k3TzBGQlIycERMR2xDUVVGTExFbEJRVWtzUjBGQlNpeEpRVUZYTEZWQlFXaENMRVZCUVRSQ08wRkJRM2hDTEc5Q1FVRkpMRmRCUVZjc1kwRkJXQ3hEUVVFd1FpeEhRVUV4UWl4RFFVRktMRVZCUVc5RE8wRkJRMmhETEhkQ1FVRkpMR3RDUVVGTkxFdEJRVXNzUjBGQlRDeERRVUZPTEV0QlFXOUNMRXRCUVVzc1IwRkJUQ3hKUVVGWkxFdEJRVXNzVFVGQlRTeExRVUZPTEVOQlFXcENMRVZCUVN0Q08wRkJRMjVFTERaQ1FVRkxMRTFCUVUwc1MwRkJUaXhEUVVGTUxFZEJSRzFFTzBGQlJXNUVMRzlEUVVGWkxFbEJRVm9zUTBGR2JVUTdRVUZIYmtRc05rSkJRVXNzVjBGQlZ5eEhRVUZZTEVOQlFVd3NTVUZJYlVRN2NVSkJRWFpFTzJsQ1FVUktPMkZCUkVvN08wRkJWVUVzWjBKQlFVa3NRMEZCUXl4VFFVRkVMRVZCUVZrN1FVRkRXaXh4UWtGQlN5eFJRVUZNTEVkQlJGazdZVUZCYUVJN1UwRmlTanM3TzBGQmVFTkdMRzlDUVRKRVJpeHRRMEZCWVR0QlFVTlVMRmxCUVUwc1UwRkJVeXhMUVVGTExFMUJRVXdzUTBGRVRqczdRVUZIVkN4aFFVRkxMRTlCUVV3c1IwRkJaU3hMUVVGTExGRkJRVXdzUjBGQlowSXNTMEZCU3l4UFFVRk1MRU5CU0hSQ096dEJRVXRVTEdGQlFVc3NTVUZCU1N4SFFVRktMRWxCUVZjc1RVRkJhRUlzUlVGQmQwSTdRVUZEY0VJc1owSkJRVWtzVDBGQlR5eGpRVUZRTEVOQlFYTkNMRWRCUVhSQ0xFTkJRVW9zUlVGQlowTTdRVUZETlVJc2IwSkJRVTBzVVVGQlVTeFBRVUZQTEVkQlFWQXNRMEZCVWl4RFFVUnpRanN5UWtGRlNDeERRVUZETEUxQlFVMHNTVUZCVGl4RlFVRlpMRTFCUVUwc1JVRkJUaXhGUVVaV08wRkJSVE5DTEhOQ1FVRk5MRVZCUVU0c1YwRkdNa0k3UVVGRmFrSXNjMEpCUVUwc1NVRkJUaXhYUVVacFFqdGhRVUZvUXp0VFFVUktPenRCUVU5QkxHVkJRVThzU1VGQlVDeERRVnBUT3pzN1FVRXpSRmdzYjBKQk1FVkdMRFpDUVVGVk8wRkJRMDRzWVVGQlN5eGhRVUZNTEVsQlFYTkNMRU5CUVVNc1EwRkJSQ3hEUVVSb1FqdEJRVVZPTEdWQlFVOHNTVUZCVUN4RFFVWk5PenM3UVVFeFJWSXNiMEpCSzBWR0xEWkNRVUZWTzBGQlEwNHNZVUZCU3l4UFFVRk1MRWRCUVdVc1NVRkJReXhEUVVGTExHRkJRVXdzUzBGQmRVSXNRMEZCZGtJc1IwRkJORUlzUTBGQk4wSXNSMEZCYVVNc1MwRkJTeXhSUVVGTUxFTkJSREZETzBGQlJVNHNZVUZCU3l4UFFVRk1MRWRCUVdVc2VVSkJRV1lzUTBGR1RUdEJRVWRPTEdWQlFVOHNTVUZCVUN4RFFVaE5PenM3UVVFdlJWSXNiMEpCY1VaR0xIRkNRVUZMTEZWQlFWVTdRVUZEV0N4aFFVRkxMRkZCUVV3c1EwRkJZeXhMUVVGTExGRkJRVXdzUjBGQlowSXNVVUZCYUVJc1EwRkJaQ3hEUVVSWE8wRkJSVmdzWlVGQlR5eEpRVUZRTEVOQlJsYzdPenRCUVhKR1lpeHZRa0V3UmtZc05rSkJRVk1zVTBGQlV6dEJRVU5rTEZsQlFVa3NRMEZCUXl4TFFVRkxMRkZCUVV3c1NVRkJhVUlzUzBGQlN5eFhRVUZNTEVWQlFXdENPMEZCUTNCRExHbENRVUZMTEVsQlFVd3NSMEZFYjBNN1FVRkZjRU1zYVVKQlFVc3NWMEZCVEN4SFFVRnRRaXhKUVVGdVFpeERRVVp2UXp0VFFVRjRRenM3UVVGTFFTeGhRVUZMTEU5QlFVd3NSMEZCWlN4UFFVRm1MRU5CVG1NN08wRkJVV1FzWlVGQlR5eEpRVUZRTEVOQlVtTTdPenRYUVRGR2FFSTdPenRCUVhOSFRpeE5RVUZOTEZOQlFVNHNRMEZCWjBJc1owSkJRV2hDTEVkQlFXMURMRWxCUVc1RE8wRkJRMEVzVFVGQlRTeFRRVUZPTEVOQlFXZENMRmxCUVdoQ0xFZEJRU3RDTEdsQ1FVRlBMR3RDUVVGUUxFTkJRVEJDTzBGQlEzSkVMRmRCUVU4c1EwRkJVRHRCUVVOQkxHTkJRVlVzUjBGQlZqdEJRVU5CTEZWQlFVMHNkVUpCUVU4c1QwRkJVRHRCUVVOT0xHRkJRVk1zUTBGQlZEdEJRVU5CTEZWQlFVMHNRMEZCVGp0QlFVTkJMRmRCUVU4c1EwRkJVRHRCUVVOQkxGRkJRVWtzUTBGQlNqdEJRVU5CTEZkQlFVOHNTMEZCVUR0RFFWSXlRaXhEUVVFdlFqdEJRVlZCTEUxQlFVMHNVMEZCVGl4RFFVRm5RaXhaUVVGb1FpeEhRVUVyUWl4cFFrRkJUeXhyUWtGQlVDeERRVUV3UWp0QlFVTnlSQ3hYUVVGUExFbEJRVkE3UVVGRFFTeFpRVUZSTEVOQlFWSTdRVUZEUVN4VlFVRk5MRU5CUVU0N1FVRkRRU3hWUVVGTkxFTkJRVTQ3UVVGRFFTeFZRVUZOTEVOQlFVNDdRVUZEUVN4bFFVRlhMRU5CUVZnN1FVRkRRU3hsUVVGWExFTkJRVmc3UVVGRFFTeGxRVUZYTEVOQlFWZzdRVUZEUVN4dFFrRkJaU3hEUVVGbU8wRkJRMEVzYVVKQlFXRXNTMEZCWWp0QlFVTkJMRmRCUVU4c1MwRkJVRHRCUVVOQkxHRkJRVk1zUTBGQlZEdERRVm95UWl4RFFVRXZRanM3YTBKQlpXVWlMQ0ptYVd4bElqb2lWSGRsWlc0dWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUXZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElFRmpkR2x2YmlCbWNtOXRJQ2N1TDBGamRHbHZiaWM3WEc1cGJYQnZjblFnWldGemFXNW5JR1p5YjIwZ0p5NHZaV0Z6YVc1bkwzQnlaWE5sZEMxbFlYTnBibWNuTzF4dWFXMXdiM0owSUhzZ1kzVnljbVZ1ZEZScGJXVXNJR2x6VG5WdElIMGdabkp2YlNBbkxpNHZhVzVqTDNWMGFXeHpKenRjYm1sdGNHOXlkQ0I3SUdWaGMyVXNJSEpsYzNSeWFXTjBMQ0JuWlhSUWNtOW5jbVZ6YzBaeWIyMVdZV3gxWlN3Z2MzUmxjRkJ5YjJkeVpYTnpJSDBnWm5KdmJTQW5MaTR2YVc1akwyTmhiR01uTzF4dVhHNWpiMjV6ZENCRFQxVk9WQ0E5SUNkRGIzVnVkQ2M3WEc1amIyNXpkQ0JPUlZoVVgxTlVSVkJUSUQwZ2UxeHVJQ0FnSUd4dmIzQTZJQ2R5WlhOMFlYSjBKeXhjYmlBZ0lDQjViM2x2T2lBbmNtVjJaWEp6WlNjc1hHNGdJQ0FnWm14cGNEb2dKMlpzYVhCV1lXeDFaWE1uWEc1OU8xeHVYRzVqYkdGemN5QlVkMlZsYmlCbGVIUmxibVJ6SUVGamRHbHZiaUI3WEc0Z0lDQWdjM1JoY25Rb0tTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdVpXeGhjSE5sWkNBOUlEQTdYRzRnSUNBZ0lDQWdJSFJvYVhNdVpteHBjRU52ZFc1MElEMGdkR2hwY3k1NWIzbHZRMjkxYm5RZ1BTQjBhR2x6TG14dmIzQkRiM1Z1ZENBOUlEQTdYRzRnSUNBZ0lDQWdJSFJvYVhNdWFYTlRZM0oxWW1KcGJtY2dQU0JtWVd4elpUdGNibHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdjM1Z3WlhJdWMzUmhjblFvS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J2YmxWd1pHRjBaU2gwZDJWbGJpd2dabkpoYldWVGRHRnRjQ3dnWld4aGNITmxaQ2tnZTF4dUlDQWdJQ0FnSUNCamIyNXpkQ0J3Y205bmNtVnpjMVJoY21kbGRDQTlJQ2gwYUdsekxuQnNZWGxFYVhKbFkzUnBiMjRnUFQwOUlERXBJRDhnTVNBNklEQTdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NWxibVJsWkNBOUlIUnlkV1U3WEc1Y2JpQWdJQ0FnSUNBZ2FXWWdLQ0YwYUdsekxtbHpVMk55ZFdKaWFXNW5LU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG1Wc1lYQnpaV1FnS3owZ0tHVnNZWEJ6WldRZ0tpQjBhR2x6TG1ScGJHRjBaU2tnS2lCMGFHbHpMbkJzWVhsRWFYSmxZM1JwYjI0N1hHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUhSb2FYTXViblZ0Vm1Gc2RXVkxaWGx6T3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUd0bGVTQTlJSFJvYVhNdWRtRnNkV1ZMWlhselcybGRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnZG1Gc2RXVWdQU0IwYUdsekxuWmhiSFZsYzF0clpYbGRPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQnNaWFFnY0hKdlozSmxjM01nUFNCeVpYTjBjbWxqZENoblpYUlFjbTluY21WemMwWnliMjFXWVd4MVpTaDBhR2x6TG1Wc1lYQnpaV1FnTFNCMllXeDFaUzVrWld4aGVTd2dNQ3dnZG1Gc2RXVXVaSFZ5WVhScGIyNHBMQ0F3TENBeEtUdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdUV0Z5YXlCVWQyVmxiaUJoY3lCT1QxUWdaVzVrWldRZ2FXWWdjM1JwYkd3Z2FXNGdjSEp2WjNKbGMzTmNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaHdjbTluY21WemN5QWhQVDBnY0hKdlozSmxjM05VWVhKblpYUXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtVnVaR1ZrSUQwZ1ptRnNjMlU3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJRk4wWlhBZ2NISnZaM0psYzNNZ2FXWWdkMlVuY21VZ2MzUmxjSEJwYm1kY2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMllXeDFaUzV6ZEdWd2N5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEJ5YjJkeVpYTnpJRDBnYzNSbGNGQnliMmR5WlhOektIQnliMmR5WlhOekxDQjJZV3gxWlM1emRHVndjeWs3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJRVZoYzJVZ2NISnZaM0psYzNOY2JpQWdJQ0FnSUNBZ0lDQWdJSFpoYkhWbExtTjFjbkpsYm5RZ1BTQmxZWE5sS0hCeWIyZHlaWE56TENCMllXeDFaUzVtY205dExDQjJZV3gxWlM1MGJ5d2dkbUZzZFdVdVpXRnpaU2s3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0J2YmtaeVlXMWxSVzVrS0NrZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvZEdocGN5NWxibVJsWkNBbUppQWhkR2hwY3k1cGMxTmpjblZpWW1sdVp5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2JHVjBJSE4wWlhCVVlXdGxiaUE5SUdaaGJITmxPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQm1iM0lnS0d4bGRDQnJaWGtnYVc0Z1RrVllWRjlUVkVWUVV5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoT1JWaFVYMU5VUlZCVExtaGhjMDkzYmxCeWIzQmxjblI1S0d0bGVTa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLR2x6VG5WdEtIUm9hWE5iYTJWNVhTa2dKaVlnZEdocGMxdHJaWGxkSUQ0Z2RHaHBjMXRyWlhrZ0t5QkRUMVZPVkYwcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE5iYTJWNUlDc2dRMDlWVGxSZEt5czdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnpkR1Z3VkdGclpXNGdQU0IwY25WbE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjMXRPUlZoVVgxTlVSVkJUVzJ0bGVWMWRLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDZ2hjM1JsY0ZSaGEyVnVLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NWpiMjF3YkdWMFpTZ3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzRnSUNBZ1pteHBjRlpoYkhWbGN5Z3BJSHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdkbUZzZFdWeklEMGdkR2hwY3k1MllXeDFaWE03WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVsYkdGd2MyVmtJRDBnZEdocGN5NWtkWEpoZEdsdmJpQXRJSFJvYVhNdVpXeGhjSE5sWkR0Y2JseHVJQ0FnSUNBZ0lDQm1iM0lnS0d4bGRDQnJaWGtnYVc0Z2RtRnNkV1Z6S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RtRnNkV1Z6TG1oaGMwOTNibEJ5YjNCbGNuUjVLR3RsZVNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCMllXeDFaU0E5SUhaaGJIVmxjMXRyWlhsZE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lGdDJZV3gxWlM1MGJ5d2dkbUZzZFdVdVpuSnZiVjBnUFNCYmRtRnNkV1V1Wm5KdmJTd2dkbUZzZFdVdWRHOWRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WMlpYSnpaU2dwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV3YkdGNVJHbHlaV04wYVc5dUlDbzlJQzB4TzF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnSUNCOVhHNWNiaUFnSUNCeVpYTjBZWEowS0NrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG1Wc1lYQnpaV1FnUFNBb2RHaHBjeTV3YkdGNVJHbHlaV04wYVc5dUlEMDlQU0F4S1NBL0lEQWdPaUIwYUdsekxtUjFjbUYwYVc5dU8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG5OMFlYSjBaV1FnUFNCamRYSnlaVzUwVkdsdFpTZ3BPMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3p0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J6WldWcktIQnliMmR5WlhOektTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdWMyVmxhMVJwYldVb2RHaHBjeTVrZFhKaGRHbHZiaUFxSUhCeWIyZHlaWE56S1R0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2MyVmxhMVJwYldVb1pXeGhjSE5sWkNrZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvSVhSb2FYTXVhWE5CWTNScGRtVWdmSHdnZEdocGN5NXBjMU5qY25WaVltbHVaeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1dmJtTmxLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG1selUyTnlkV0ppYVc1bklEMGdkSEoxWlR0Y2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdVpXeGhjSE5sWkNBOUlHVnNZWEJ6WldRN1hHNWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lDQWdmVnh1ZlZ4dVhHNVVkMlZsYmk1d2NtOTBiM1I1Y0dVdVpHVm1ZWFZzZEZaaGJIVmxVSEp2Y0NBOUlDZDBieWM3WEc1VWQyVmxiaTV3Y205MGIzUjVjR1V1WkdWbVlYVnNkRlpoYkhWbElEMGdRV04wYVc5dUxtVjRkR1Z1WkVSbFptRjFiSFJXWVd4MVpTaDdYRzRnSUNBZ1pHVnNZWGs2SURBc1hHNGdJQ0FnWkhWeVlYUnBiMjQ2SURNd01DeGNiaUFnSUNCbFlYTmxPaUJsWVhOcGJtY3VaV0Z6WlU5MWRDeGNiaUFnSUNCbGJHRndjMlZrT2lBd0xGeHVJQ0FnSUdaeWIyMDZJREFzWEc0Z0lDQWdjM1JsY0hNNklEQXNYRzRnSUNBZ2RHODZJREFzWEc0Z0lDQWdjbTkxYm1RNklHWmhiSE5sWEc1OUtUdGNibFIzWldWdUxuQnliM1J2ZEhsd1pTNWtaV1poZFd4MFVISnZjSE1nUFNCQlkzUnBiMjR1WlhoMFpXNWtSR1ZtWVhWc2RGQnliM0J6S0h0Y2JpQWdJQ0JpYkdWdVpEb2dkSEoxWlN4Y2JpQWdJQ0JrYVd4aGRHVTZJREVzWEc0Z0lDQWdiRzl2Y0RvZ01DeGNiaUFnSUNCNWIzbHZPaUF3TEZ4dUlDQWdJR1pzYVhBNklEQXNYRzRnSUNBZ2JHOXZjRU52ZFc1ME9pQXdMRnh1SUNBZ0lIbHZlVzlEYjNWdWREb2dNQ3hjYmlBZ0lDQm1iR2x3UTI5MWJuUTZJREFzWEc0Z0lDQWdjR3hoZVVScGNtVmpkR2x2YmpvZ01TeGNiaUFnSUNCcGMxTmpjblZpWW1sdVp6b2dabUZzYzJVc1hHNGdJQ0FnWlc1a1pXUTZJR1poYkhObExGeHVJQ0FnSUdWc1lYQnpaV1E2SURCY2JuMHBPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JVZDJWbGJqdGNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9Ud2Vlbi5qc1xuICoqIG1vZHVsZSBpZCA9IDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9BY3Rpb24yID0gcmVxdWlyZSgnLi9BY3Rpb24nKTtcblxudmFyIF9BY3Rpb24zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQWN0aW9uMik7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgUGh5c2ljcyA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gICAgX2luaGVyaXRzKFBoeXNpY3MsIF9BY3Rpb24pO1xuXG4gICAgZnVuY3Rpb24gUGh5c2ljcygpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBoeXNpY3MpO1xuXG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5jYWxsLmFwcGx5KF9BY3Rpb24sIFt0aGlzXS5jb25jYXQoYXJncykpKTtcblxuICAgICAgICBfdGhpcy5pbmFjdGl2ZUZyYW1lcyA9IDA7XG4gICAgICAgIF90aGlzLmNhbGN1bGF0ZXNWZWxvY2l0eSA9IHRydWU7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBQaHlzaWNzLnByb3RvdHlwZS5vblVwZGF0ZSA9IGZ1bmN0aW9uIG9uVXBkYXRlKHBoeXNpY3MsIGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gZmFsc2U7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gdGhpcy52YWx1ZUtleXNbaV07XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuICAgICAgICAgICAgdmFyIHByZXZpb3VzVmFsdWUgPSB2YWx1ZS5wcmV2O1xuXG4gICAgICAgICAgICAvLyBBcHBseSBhY2NlbGVyYXRpb25cbiAgICAgICAgICAgIHZhbHVlLnZlbG9jaXR5ICs9ICgwLCBfY2FsYy5zcGVlZFBlckZyYW1lKSh2YWx1ZS5hY2NlbGVyYXRpb24sIGVsYXBzZWQpO1xuXG4gICAgICAgICAgICAvLyBBcHBseSBmcmljdGlvblxuICAgICAgICAgICAgdmFsdWUudmVsb2NpdHkgKj0gTWF0aC5wb3coMSAtIHZhbHVlLmZyaWN0aW9uLCBlbGFwc2VkIC8gMTAwKTtcblxuICAgICAgICAgICAgLy8gQXBwbHkgc3ByaW5nXG4gICAgICAgICAgICBpZiAodmFsdWUuc3ByaW5nICYmICgwLCBfdXRpbHMuaXNOdW0pKHZhbHVlLnRvKSkge1xuICAgICAgICAgICAgICAgIHZhciBkaXN0YW5jZVRvVGFyZ2V0ID0gdmFsdWUudG8gLSB2YWx1ZS5jdXJyZW50O1xuICAgICAgICAgICAgICAgIHZhbHVlLnZlbG9jaXR5ICs9IGRpc3RhbmNlVG9UYXJnZXQgKiAoMCwgX2NhbGMuc3BlZWRQZXJGcmFtZSkodmFsdWUuc3ByaW5nLCBlbGFwc2VkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQXBwbHkgbGF0ZXN0IHZlbG9jaXR5XG4gICAgICAgICAgICB2YWx1ZS5jdXJyZW50ICs9ICgwLCBfY2FsYy5zcGVlZFBlckZyYW1lKSh2YWx1ZS52ZWxvY2l0eSwgZWxhcHNlZCk7XG5cbiAgICAgICAgICAgIC8vIERldGVjdCBib3VuY2VcbiAgICAgICAgICAgIGlmICh2YWx1ZS5taW4gIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS5jdXJyZW50IDwgdmFsdWUubWluIHx8IHZhbHVlLm1heCAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLmN1cnJlbnQgPiB2YWx1ZS5tYXgpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS52ZWxvY2l0eSAqPSAtdmFsdWUuYm91bmNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDaGVjayBpZiB2YWx1ZSBoYXMgY2hhbmdlZFxuICAgICAgICAgICAgaWYgKHZhbHVlLmN1cnJlbnQgIT09IHByZXZpb3VzVmFsdWUgfHwgTWF0aC5hYnModmFsdWUudmVsb2NpdHkpID49IHZhbHVlLnN0b3BTcGVlZCB8fCB2YWx1ZS5zcHJpbmcgJiYgdmFsdWUuY3VycmVudCAhPT0gdmFsdWUudG8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIFBoeXNpY3MucHJvdG90eXBlLm9uRnJhbWVFbmQgPSBmdW5jdGlvbiBvbkZyYW1lRW5kKCkge1xuICAgICAgICBpZiAodGhpcy5tYXhJbmFjdGl2ZUZyYW1lcyAhPT0gSW5maW5pdHkpIHtcbiAgICAgICAgICAgIHRoaXMuaW5hY3RpdmVGcmFtZXMgPSB0aGlzLmhhc0NoYW5nZWQgPyAxIDogdGhpcy5pbmFjdGl2ZUZyYW1lcyArIDE7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmluYWN0aXZlRnJhbWVzID49IHRoaXMubWF4SW5hY3RpdmVGcmFtZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIFBoeXNpY3M7XG59KF9BY3Rpb24zLmRlZmF1bHQpO1xuXG5QaHlzaWNzLnByb3RvdHlwZS5kZWZhdWx0VmFsdWVQcm9wID0gJ3ZlbG9jaXR5JztcblBoeXNpY3MucHJvdG90eXBlLmRlZmF1bHRWYWx1ZSA9IF9BY3Rpb24zLmRlZmF1bHQuZXh0ZW5kRGVmYXVsdFZhbHVlKHtcbiAgICBhY2NlbGVyYXRpb246IDAsIC8vIFtudW1iZXJdOiBBY2NlbGVyYXRpb24gdG8gYXBwbHkgdG8gdmFsdWUsIGluIHVuaXRzIHBlciBzZWNvbmRcbiAgICBib3VuY2U6IDAsIC8vIFtudW1iZXJdOiBGYWN0b3IgdG8gbXVsdGlwbHkgdmVsb2NpdHkgYnkgb24gYm91bmNlXG4gICAgc3ByaW5nOiAwLCAvLyBbbnVtYmVyXTogU3ByaW5nIHN0cmVuZ3RoIGR1cmluZyAnc3RyaW5nJ1xuICAgIHN0b3BTcGVlZDogMC4wMDEsIC8vIFtudW1iZXJdOiBTdG9wIHNpbXVsYXRpb24gdW5kZXIgdGhpcyBzcGVlZFxuICAgIGZyaWN0aW9uOiAwIC8vIFtudW1iZXJdOiBGcmljdGlvbiB0byBhcHBseSBwZXIgZnJhbWUsIDAtMVxufSk7XG5QaHlzaWNzLnByb3RvdHlwZS5kZWZhdWx0UHJvcHMgPSBfQWN0aW9uMy5kZWZhdWx0LmV4dGVuZERlZmF1bHRQcm9wcyh7XG4gICAgbWF4SW5hY3RpdmVGcmFtZXM6IDNcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBQaHlzaWNzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMUJvZVhOcFkzTXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0QlFVRkJPenM3TzBGQlEwRTdPMEZCUTBFN096czdPenM3T3pzN1NVRkZUVHM3TzBGQlEwWXNZVUZFUlN4UFFVTkdMRWRCUVhGQ096aENRVVJ1UWl4VFFVTnRRanM3TUVOQlFVNDdPMU5CUVUwN08zRkVRVU5xUWl3d1EwRkJVeXhMUVVGVUxFZEJSR2xDT3p0QlFVVnFRaXhqUVVGTExHTkJRVXdzUjBGQmMwSXNRMEZCZEVJc1EwRkdhVUk3UVVGSGFrSXNZMEZCU3l4clFrRkJUQ3hIUVVFd1FpeEpRVUV4UWl4RFFVaHBRanM3UzBGQmNrSTdPMEZCUkVVc2MwSkJUMFlzTmtKQlFWTXNVMEZCVXl4WlFVRlpMRk5CUVZNN1FVRkRia01zWVVGQlN5eFZRVUZNTEVkQlFXdENMRXRCUVd4Q0xFTkJSRzFET3p0QlFVZHVReXhoUVVGTExFbEJRVWtzU1VGQlNTeERRVUZLTEVWQlFVOHNTVUZCU1N4TFFVRkxMRmxCUVV3c1JVRkJiVUlzUjBGQmRrTXNSVUZCTkVNN1FVRkRlRU1zWjBKQlFVMHNUVUZCVFN4TFFVRkxMRk5CUVV3c1EwRkJaU3hEUVVGbUxFTkJRVTRzUTBGRWEwTTdRVUZGZUVNc1owSkJRVTBzVVVGQlVTeExRVUZMTEUxQlFVd3NRMEZCV1N4SFFVRmFMRU5CUVZJc1EwRkdhME03UVVGSGVFTXNaMEpCUVUwc1owSkJRV2RDTEUxQlFVMHNTVUZCVGpzN08wRkJTR3RDTEdsQ1FVMTRReXhEUVVGTkxGRkJRVTRzU1VGQmEwSXNlVUpCUVdNc1RVRkJUU3haUVVGT0xFVkJRVzlDTEU5QlFXeERMRU5CUVd4Q096czdRVUZPZDBNc2FVSkJVM2hETEVOQlFVMHNVVUZCVGl4aFFVRnRRaXhKUVVGSkxFMUJRVTBzVVVGQlRpeEZRVUZ2UWl4VlFVRlZMRWRCUVZZc1EwRkJNME03T3p0QlFWUjNReXhuUWtGWmNFTXNUVUZCVFN4TlFVRk9MRWxCUVdkQ0xHdENRVUZOTEUxQlFVMHNSVUZCVGl4RFFVRjBRaXhGUVVGcFF6dEJRVU5xUXl4dlFrRkJUU3h0UWtGQmJVSXNUVUZCVFN4RlFVRk9MRWRCUVZjc1RVRkJUU3hQUVVGT0xFTkJSRWc3UVVGRmFrTXNjMEpCUVUwc1VVRkJUaXhKUVVGclFpeHRRa0ZCYlVJc2VVSkJRV01zVFVGQlRTeE5RVUZPTEVWQlFXTXNUMEZCTlVJc1EwRkJia0lzUTBGR1pUdGhRVUZ5UXpzN08wRkJXbmRETEdsQ1FXdENlRU1zUTBGQlRTeFBRVUZPTEVsQlFXbENMSGxDUVVGakxFMUJRVTBzVVVGQlRpeEZRVUZuUWl4UFFVRTVRaXhEUVVGcVFqczdPMEZCYkVKM1F5eG5Ra0Z4UW5CRExFdEJRVU1zUTBGQlRTeEhRVUZPTEV0QlFXTXNVMEZCWkN4SlFVRXlRaXhOUVVGTkxFOUJRVTRzUjBGQlowSXNUVUZCVFN4SFFVRk9MRWxCUVdVc1RVRkJUU3hIUVVGT0xFdEJRV01zVTBGQlpDeEpRVUV5UWl4TlFVRk5MRTlCUVU0c1IwRkJaMElzVFVGQlRTeEhRVUZPTEVWQlFWazdRVUZEYkVnc2MwSkJRVTBzVVVGQlRpeEpRVUZyUWl4RFFVRkZMRTFCUVUwc1RVRkJUaXhEUVVRNFJqdGhRVUYwU0RzN08wRkJja0ozUXl4blFrRXdRbkJETEUxQlFVMHNUMEZCVGl4TFFVRnJRaXhoUVVGc1FpeEpRVUZ0UXl4TFFVRkxMRWRCUVV3c1EwRkJVeXhOUVVGTkxGRkJRVTRzUTBGQlZDeEpRVUUwUWl4TlFVRk5MRk5CUVU0c1NVRkJiMElzVFVGQlRTeE5RVUZPTEVsQlFXZENMRTFCUVUwc1QwRkJUaXhMUVVGclFpeE5RVUZOTEVWQlFVNHNSVUZCVnp0QlFVTm9TU3h4UWtGQlN5eFZRVUZNTEVkQlFXdENMRWxCUVd4Q0xFTkJSR2RKTzJGQlFYQkpPMU5CTVVKS096czdRVUZXUml4elFrRXdRMFlzYlVOQlFXRTdRVUZEVkN4WlFVRkpMRXRCUVVzc2FVSkJRVXdzUzBGQk1rSXNVVUZCTTBJc1JVRkJjVU03UVVGRGNrTXNhVUpCUVVzc1kwRkJUQ3hIUVVGelFpeExRVUZMTEZWQlFVd3NSMEZCYTBJc1EwRkJiRUlzUjBGQmMwSXNTMEZCU3l4alFVRk1MRWRCUVhOQ0xFTkJRWFJDTEVOQlJGQTdPMEZCUjNKRExHZENRVUZKTEV0QlFVc3NZMEZCVEN4SlFVRjFRaXhMUVVGTExHbENRVUZNTEVWQlFYZENPMEZCUXk5RExIRkNRVUZMTEZGQlFVd3NSMEZFSzBNN1lVRkJia1E3VTBGSVNqczdPMWRCTTBOR096czdRVUZ4UkU0c1VVRkJVU3hUUVVGU0xFTkJRV3RDTEdkQ1FVRnNRaXhIUVVGeFF5eFZRVUZ5UXp0QlFVTkJMRkZCUVZFc1UwRkJVaXhEUVVGclFpeFpRVUZzUWl4SFFVRnBReXhwUWtGQlR5eHJRa0ZCVUN4RFFVRXdRanRCUVVOMlJDeHJRa0ZCWXl4RFFVRmtPMEZCUTBFc1dVRkJVU3hEUVVGU08wRkJRMEVzV1VGQlVTeERRVUZTTzBGQlEwRXNaVUZCVnl4TFFVRllPMEZCUTBFc1kwRkJWU3hEUVVGV08wRkJUSFZFTEVOQlFURkNMRU5CUVdwRE8wRkJUMEVzVVVGQlVTeFRRVUZTTEVOQlFXdENMRmxCUVd4Q0xFZEJRV2xETEdsQ1FVRlBMR3RDUVVGUUxFTkJRVEJDTzBGQlEzWkVMSFZDUVVGdFFpeERRVUZ1UWp0RFFVUTJRaXhEUVVGcVF6czdhMEpCU1dVaUxDSm1hV3hsSWpvaVVHaDVjMmxqY3k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRDOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1FXTjBhVzl1SUdaeWIyMGdKeTR2UVdOMGFXOXVKenRjYm1sdGNHOXlkQ0I3SUhOd1pXVmtVR1Z5Um5KaGJXVWdmU0JtY205dElDY3VMaTlwYm1NdlkyRnNZeWM3WEc1cGJYQnZjblFnZXlCcGMwNTFiU0I5SUdaeWIyMGdKeTR1TDJsdVl5OTFkR2xzY3ljN1hHNWNibU5zWVhOeklGQm9lWE5wWTNNZ1pYaDBaVzVrY3lCQlkzUnBiMjRnZTF4dUlDQWdJR052Ym5OMGNuVmpkRzl5S0M0dUxtRnlaM01wSUh0Y2JpQWdJQ0FnSUNBZ2MzVndaWElvTGk0dVlYSm5jeWs3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVhVzVoWTNScGRtVkdjbUZ0WlhNZ1BTQXdPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtTmhiR04xYkdGMFpYTldaV3h2WTJsMGVTQTlJSFJ5ZFdVN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYjI1VmNHUmhkR1VvY0doNWMybGpjeXdnWm5KaGJXVlRkR0Z0Y0N3Z1pXeGhjSE5sWkNrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG1oaGMwTm9ZVzVuWldRZ1BTQm1ZV3h6WlR0Y2JseHVJQ0FnSUNBZ0lDQm1iM0lnS0d4bGRDQnBJRDBnTURzZ2FTQThJSFJvYVhNdWJuVnRWbUZzZFdWTFpYbHpPeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJR3RsZVNBOUlIUm9hWE11ZG1Gc2RXVkxaWGx6VzJsZE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdkbUZzZFdVZ1BTQjBhR2x6TG5aaGJIVmxjMXRyWlhsZE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdjSEpsZG1sdmRYTldZV3gxWlNBOUlIWmhiSFZsTG5CeVpYWTdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJRUZ3Y0d4NUlHRmpZMlZzWlhKaGRHbHZibHh1SUNBZ0lDQWdJQ0FnSUNBZ2RtRnNkV1V1ZG1Wc2IyTnBkSGtnS3owZ2MzQmxaV1JRWlhKR2NtRnRaU2gyWVd4MVpTNWhZMk5sYkdWeVlYUnBiMjRzSUdWc1lYQnpaV1FwTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCQmNIQnNlU0JtY21samRHbHZibHh1SUNBZ0lDQWdJQ0FnSUNBZ2RtRnNkV1V1ZG1Wc2IyTnBkSGtnS2owZ0tERWdMU0IyWVd4MVpTNW1jbWxqZEdsdmJpa2dLaW9nS0dWc1lYQnpaV1FnTHlBeE1EQXBPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJCY0hCc2VTQnpjSEpwYm1kY2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMllXeDFaUzV6Y0hKcGJtY2dKaVlnYVhOT2RXMG9kbUZzZFdVdWRHOHBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdaR2x6ZEdGdVkyVlViMVJoY21kbGRDQTlJSFpoYkhWbExuUnZJQzBnZG1Gc2RXVXVZM1Z5Y21WdWREdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZV3gxWlM1MlpXeHZZMmwwZVNBclBTQmthWE4wWVc1alpWUnZWR0Z5WjJWMElDb2djM0JsWldSUVpYSkdjbUZ0WlNoMllXeDFaUzV6Y0hKcGJtY3NJR1ZzWVhCelpXUXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QkJjSEJzZVNCc1lYUmxjM1FnZG1Wc2IyTnBkSGxjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmhiSFZsTG1OMWNuSmxiblFnS3owZ2MzQmxaV1JRWlhKR2NtRnRaU2gyWVd4MVpTNTJaV3h2WTJsMGVTd2daV3hoY0hObFpDazdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJRVJsZEdWamRDQmliM1Z1WTJWY2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNnb2RtRnNkV1V1YldsdUlDRTlQU0IxYm1SbFptbHVaV1FnSmlZZ2RtRnNkV1V1WTNWeWNtVnVkQ0E4SUhaaGJIVmxMbTFwYmlrZ2ZId2dLSFpoYkhWbExtMWhlQ0FoUFQwZ2RXNWtaV1pwYm1Wa0lDWW1JSFpoYkhWbExtTjFjbkpsYm5RZ1BpQjJZV3gxWlM1dFlYZ3BLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVXVkbVZzYjJOcGRIa2dLajBnTFNCMllXeDFaUzVpYjNWdVkyVTdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJRU5vWldOcklHbG1JSFpoYkhWbElHaGhjeUJqYUdGdVoyVmtYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9kbUZzZFdVdVkzVnljbVZ1ZENBaFBUMGdjSEpsZG1sdmRYTldZV3gxWlNCOGZDQk5ZWFJvTG1GaWN5aDJZV3gxWlM1MlpXeHZZMmwwZVNrZ1BqMGdkbUZzZFdVdWMzUnZjRk53WldWa0lIeDhJQ2gyWVd4MVpTNXpjSEpwYm1jZ0ppWWdkbUZzZFdVdVkzVnljbVZ1ZENBaFBUMGdkbUZzZFdVdWRHOHBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NW9ZWE5EYUdGdVoyVmtJRDBnZEhKMVpUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JseHVJQ0FnSUc5dVJuSmhiV1ZGYm1Rb0tTQjdYRzRnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbTFoZUVsdVlXTjBhWFpsUm5KaGJXVnpJQ0U5UFNCSmJtWnBibWwwZVNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXBibUZqZEdsMlpVWnlZVzFsY3lBOUlIUm9hWE11YUdGelEyaGhibWRsWkNBL0lERWdPaUIwYUdsekxtbHVZV04wYVhabFJuSmhiV1Z6SUNzZ01UdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFJvYVhNdWFXNWhZM1JwZG1WR2NtRnRaWE1nUGowZ2RHaHBjeTV0WVhoSmJtRmpkR2wyWlVaeVlXMWxjeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVZMjl0Y0d4bGRHVW9LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNibjFjYmx4dVVHaDVjMmxqY3k1d2NtOTBiM1I1Y0dVdVpHVm1ZWFZzZEZaaGJIVmxVSEp2Y0NBOUlDZDJaV3h2WTJsMGVTYzdYRzVRYUhsemFXTnpMbkJ5YjNSdmRIbHdaUzVrWldaaGRXeDBWbUZzZFdVZ1BTQkJZM1JwYjI0dVpYaDBaVzVrUkdWbVlYVnNkRlpoYkhWbEtIdGNiaUFnSUNCaFkyTmxiR1Z5WVhScGIyNDZJREFzSUM4dklGdHVkVzFpWlhKZE9pQkJZMk5sYkdWeVlYUnBiMjRnZEc4Z1lYQndiSGtnZEc4Z2RtRnNkV1VzSUdsdUlIVnVhWFJ6SUhCbGNpQnpaV052Ym1SY2JpQWdJQ0JpYjNWdVkyVTZJREFzSUM4dklGdHVkVzFpWlhKZE9pQkdZV04wYjNJZ2RHOGdiWFZzZEdsd2JIa2dkbVZzYjJOcGRIa2dZbmtnYjI0Z1ltOTFibU5sWEc0Z0lDQWdjM0J5YVc1bk9pQXdMQ0F2THlCYmJuVnRZbVZ5WFRvZ1UzQnlhVzVuSUhOMGNtVnVaM1JvSUdSMWNtbHVaeUFuYzNSeWFXNW5KMXh1SUNBZ0lITjBiM0JUY0dWbFpEb2dNQzR3TURFc0lDOHZJRnR1ZFcxaVpYSmRPaUJUZEc5d0lITnBiWFZzWVhScGIyNGdkVzVrWlhJZ2RHaHBjeUJ6Y0dWbFpGeHVJQ0FnSUdaeWFXTjBhVzl1T2lBd0lDOHZJRnR1ZFcxaVpYSmRPaUJHY21samRHbHZiaUIwYnlCaGNIQnNlU0J3WlhJZ1puSmhiV1VzSURBdE1WeHVmU2s3WEc1UWFIbHphV056TG5CeWIzUnZkSGx3WlM1a1pXWmhkV3gwVUhKdmNITWdQU0JCWTNScGIyNHVaWGgwWlc1a1JHVm1ZWFZzZEZCeWIzQnpLSHRjYmlBZ0lDQnRZWGhKYm1GamRHbDJaVVp5WVcxbGN6b2dNMXh1ZlNrN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElGQm9lWE5wWTNNN1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL1BoeXNpY3MuanNcbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfQWN0aW9uMiA9IHJlcXVpcmUoJy4vQWN0aW9uJyk7XG5cbnZhciBfQWN0aW9uMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0FjdGlvbjIpO1xuXG52YXIgX1BvaW50ZXIgPSByZXF1aXJlKCcuLi9pbnB1dC9Qb2ludGVyJyk7XG5cbnZhciBfUG9pbnRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Qb2ludGVyKTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG4vKlxuICAgIFNjcmFwZSB4L3kgY29vcmRpbmF0ZXMgZnJvbSBwcm92aWRlZCBldmVudFxuXG4gICAgQHBhcmFtIFtldmVudF1cbiAgICBAcmV0dXJuIFtvYmplY3RdXG4qL1xudmFyIG1vdXNlRXZlbnRUb1BvaW50ID0gZnVuY3Rpb24gKGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB4OiBlLnBhZ2VYLFxuICAgICAgICB5OiBlLnBhZ2VZXG4gICAgfTtcbn07XG5cbnZhciB0b3VjaEV2ZW50VG9Qb2ludCA9IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIGNoYW5nZWRUb3VjaGVzID0gX3JlZi5jaGFuZ2VkVG91Y2hlcztcbiAgICByZXR1cm4ge1xuICAgICAgICB4OiBjaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYLFxuICAgICAgICB5OiBjaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZXG4gICAgfTtcbn07XG5cbnZhciBjcmVhdGVQb2ludGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICByZXR1cm4gZS50b3VjaGVzID8gbmV3IF9Qb2ludGVyMi5kZWZhdWx0KHRvdWNoRXZlbnRUb1BvaW50KGUpLCAndG91Y2htb3ZlJywgdG91Y2hFdmVudFRvUG9pbnQpIDogbmV3IF9Qb2ludGVyMi5kZWZhdWx0KG1vdXNlRXZlbnRUb1BvaW50KGUpLCAnbW91c2Vtb3ZlJywgbW91c2VFdmVudFRvUG9pbnQpO1xufTtcblxudmFyIGdldEFjdHVhbEV2ZW50ID0gZnVuY3Rpb24gKGUpIHtcbiAgICByZXR1cm4gZS5vcmlnaW5hbEV2ZW50IHx8IGU7XG59O1xuXG52YXIgVHJhY2sgPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICAgIF9pbmhlcml0cyhUcmFjaywgX0FjdGlvbik7XG5cbiAgICBmdW5jdGlvbiBUcmFjaygpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRyYWNrKTtcblxuICAgICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9XG5cbiAgICBUcmFjay5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiBzdGFydChpbnB1dCkge1xuICAgICAgICBfQWN0aW9uLnByb3RvdHlwZS5zdGFydC5jYWxsKHRoaXMpO1xuXG4gICAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICAgICAgdGhpcy5pbnB1dCA9IGlucHV0LnN0YXRlID8gaW5wdXQgOiBjcmVhdGVQb2ludGVyKGdldEFjdHVhbEV2ZW50KGlucHV0KSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlucHV0T2Zmc2V0ID0ge307XG4gICAgICAgIHRoaXMuaW5wdXRPcmlnaW4gPSBfZXh0ZW5kcyh7fSwgdGhpcy5pbnB1dC5zdGF0ZSk7XG4gICAgICAgIHRoaXMuaW5wdXQuc3RhcnQoKTtcbiAgICB9O1xuXG4gICAgVHJhY2sucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICBfQWN0aW9uLnByb3RvdHlwZS5zdG9wLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMuaW5wdXQuc3RvcCgpO1xuICAgIH07XG5cbiAgICBUcmFjay5wcm90b3R5cGUub25VcGRhdGUgPSBmdW5jdGlvbiBvblVwZGF0ZSh0cmFjaywgZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgICAgICB0aGlzLmlucHV0T2Zmc2V0ID0gKDAsIF9jYWxjLm9mZnNldCkodGhpcy5pbnB1dE9yaWdpbiwgdGhpcy5pbnB1dC5zdGF0ZSk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gdGhpcy52YWx1ZUtleXNbaV07XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmlucHV0T2Zmc2V0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmRpcmVjdCkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gdGhpcy5pbnB1dC5zdGF0ZVt2YWx1ZS53YXRjaCB8fCBrZXldO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSB2YWx1ZS5mcm9tICsgdGhpcy5pbnB1dE9mZnNldFt2YWx1ZS53YXRjaCB8fCBrZXldO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFNtb290aCB2YWx1ZSBpZiB3ZSBoYXZlIHNtb290aGluZ1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5zbW9vdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9ICgwLCBfY2FsYy5zbW9vdGgpKHZhbHVlLmN1cnJlbnQsIHZhbHVlLnByZXYsIGVsYXBzZWQsIHZhbHVlLnNtb290aCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBUcmFjaztcbn0oX0FjdGlvbjMuZGVmYXVsdCk7XG5cblRyYWNrLnByb3RvdHlwZS5kZWZhdWx0VmFsdWVQcm9wID0gJ3dhdGNoJztcblRyYWNrLnByb3RvdHlwZS5kZWZhdWx0VmFsdWUgPSBfQWN0aW9uMy5kZWZhdWx0LmV4dGVuZERlZmF1bHRWYWx1ZSh7XG4gICAgZGlyZWN0OiBmYWxzZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFRyYWNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMVJ5WVdOckxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3p0QlFVRkJPenM3TzBGQlEwRTdPenM3UVVGRFFUczdPenM3T3pzN096czdPenM3T3p0QlFWRkJMRWxCUVUwc2IwSkJRVzlDTEZWQlFVTXNRMEZCUkR0WFFVRlJPMEZCUXpsQ0xGZEJRVWNzUlVGQlJTeExRVUZHTzBGQlEwZ3NWMEZCUnl4RlFVRkZMRXRCUVVZN08wTkJSbTFDT3p0QlFVc3hRaXhKUVVGTkxHOUNRVUZ2UWp0UlFVRkhPMWRCUVhOQ08wRkJReTlETEZkQlFVY3NaVUZCWlN4RFFVRm1MRVZCUVd0Q0xFOUJRV3hDTzBGQlEwZ3NWMEZCUnl4bFFVRmxMRU5CUVdZc1JVRkJhMElzVDBGQmJFSTdPME5CUm0xQ096dEJRVXN4UWl4SlFVRk5MR2RDUVVGblFpeFZRVUZETEVOQlFVUTdWMEZCVHl4RlFVRkZMRTlCUVVZc1IwRkRla0lzYzBKQlFWa3NhMEpCUVd0Q0xFTkJRV3hDTEVOQlFWb3NSVUZCYTBNc1YwRkJiRU1zUlVGQkswTXNhVUpCUVM5RExFTkJSSGxDTEVkQlJYcENMSE5DUVVGWkxHdENRVUZyUWl4RFFVRnNRaXhEUVVGYUxFVkJRV3RETEZkQlFXeERMRVZCUVN0RExHbENRVUV2UXl4RFFVWjVRanREUVVGUU96dEJRVWwwUWl4SlFVRk5MR2xDUVVGcFFpeFZRVUZETEVOQlFVUTdWMEZCVHl4RlFVRkZMR0ZCUVVZc1NVRkJiVUlzUTBGQmJrSTdRMEZCVURzN1NVRkZha0k3T3pzN096czdPenR2UWtGRFJpeDFRa0ZCVFN4UFFVRlBPMEZCUTFRc01FSkJRVTBzUzBGQlRpeFpRVVJUT3p0QlFVZFVMRmxCUVVrc1MwRkJTaXhGUVVGWE8wRkJRMUFzYVVKQlFVc3NTMEZCVEN4SFFVRmhMRTFCUVUwc1MwRkJUaXhIUVVGakxFdEJRV1FzUjBGQmMwSXNZMEZCWXl4bFFVRmxMRXRCUVdZc1EwRkJaQ3hEUVVGMFFpeERRVVJPTzFOQlFWZzdPMEZCU1VFc1lVRkJTeXhYUVVGTUxFZEJRVzFDTEVWQlFXNUNMRU5CVUZNN1FVRlJWQ3hoUVVGTExGZEJRVXdzWjBKQlFYZENMRXRCUVVzc1MwRkJUQ3hEUVVGWExFdEJRVmdzUTBGQmVFSXNRMEZTVXp0QlFWTlVMR0ZCUVVzc1MwRkJUQ3hEUVVGWExFdEJRVmdzUjBGVVV6czdPMEZCUkZnc2IwSkJZVVlzZFVKQlFVODdRVUZEU0N3d1FrRkJUU3hKUVVGT0xGbEJSRWM3UVVGRlNDeGhRVUZMTEV0QlFVd3NRMEZCVnl4SlFVRllMRWRCUmtjN096dEJRV0pNTEc5Q1FXdENSaXcyUWtGQlV5eFBRVUZQTEZsQlFWa3NVMEZCVXp0QlFVTnFReXhoUVVGTExGZEJRVXdzUjBGQmJVSXNhMEpCUVU4c1MwRkJTeXhYUVVGTUxFVkJRV3RDTEV0QlFVc3NTMEZCVEN4RFFVRlhMRXRCUVZnc1EwRkJOVU1zUTBGRWFVTTdPMEZCUjJwRExHRkJRVXNzU1VGQlNTeEpRVUZKTEVOQlFVb3NSVUZCVHl4SlFVRkpMRXRCUVVzc1dVRkJUQ3hGUVVGdFFpeEhRVUYyUXl4RlFVRTBRenRCUVVONFF5eG5Ra0ZCVFN4TlFVRk5MRXRCUVVzc1UwRkJUQ3hEUVVGbExFTkJRV1lzUTBGQlRpeERRVVJyUXpzN1FVRkhlRU1zWjBKQlFVa3NTMEZCU3l4WFFVRk1MRU5CUVdsQ0xHTkJRV3BDTEVOQlFXZERMRWRCUVdoRExFTkJRVW9zUlVGQk1FTTdRVUZEZEVNc2IwSkJRVTBzVVVGQlVTeExRVUZMTEUxQlFVd3NRMEZCV1N4SFFVRmFMRU5CUVZJc1EwRkVaME03TzBGQlIzUkRMRzlDUVVGSkxFMUJRVTBzVFVGQlRpeEZRVUZqTzBGQlEyUXNNRUpCUVUwc1QwRkJUaXhIUVVGblFpeExRVUZMTEV0QlFVd3NRMEZCVnl4TFFVRllMRU5CUVdsQ0xFMUJRVTBzUzBGQlRpeEpRVUZsTEVkQlFXWXNRMEZCYWtNc1EwRkVZenRwUWtGQmJFSXNUVUZGVHp0QlFVTklMREJDUVVGTkxFOUJRVTRzUjBGQlowSXNUVUZCVFN4SlFVRk9MRWRCUVdFc1MwRkJTeXhYUVVGTUxFTkJRV2xDTEUxQlFVMHNTMEZCVGl4SlFVRmxMRWRCUVdZc1EwRkJPVUlzUTBGRVlqdHBRa0ZHVURzN08wRkJTSE5ETEc5Q1FWVnNReXhOUVVGTkxFMUJRVTRzUlVGQll6dEJRVU5rTERCQ1FVRk5MRTlCUVU0c1IwRkJaMElzYTBKQlFVOHNUVUZCVFN4UFFVRk9MRVZCUVdVc1RVRkJUU3hKUVVGT0xFVkJRVmtzVDBGQmJFTXNSVUZCTWtNc1RVRkJUU3hOUVVGT0xFTkJRVE5FTEVOQlJHTTdhVUpCUVd4Q08yRkJWa283VTBGSVNqczdPMWRCY2tKR096czdRVUV3UTA0c1RVRkJUU3hUUVVGT0xFTkJRV2RDTEdkQ1FVRm9RaXhIUVVGdFF5eFBRVUZ1UXp0QlFVTkJMRTFCUVUwc1UwRkJUaXhEUVVGblFpeFpRVUZvUWl4SFFVRXJRaXhwUWtGQlR5eHJRa0ZCVUN4RFFVRXdRanRCUVVOeVJDeFpRVUZSTEV0QlFWSTdRMEZFTWtJc1EwRkJMMEk3TzJ0Q1FVbGxJaXdpWm1sc1pTSTZJbFJ5WVdOckxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQkJZM1JwYjI0Z1puSnZiU0FuTGk5QlkzUnBiMjRuTzF4dWFXMXdiM0owSUZCdmFXNTBaWElnWm5KdmJTQW5MaTR2YVc1d2RYUXZVRzlwYm5SbGNpYzdYRzVwYlhCdmNuUWdleUJ6Ylc5dmRHZ3NJRzltWm5ObGRDQjlJR1p5YjIwZ0p5NHVMMmx1WXk5allXeGpKenRjYmx4dUx5cGNiaUFnSUNCVFkzSmhjR1VnZUM5NUlHTnZiM0prYVc1aGRHVnpJR1p5YjIwZ2NISnZkbWxrWldRZ1pYWmxiblJjYmx4dUlDQWdJRUJ3WVhKaGJTQmJaWFpsYm5SZFhHNGdJQ0FnUUhKbGRIVnliaUJiYjJKcVpXTjBYVnh1S2k5Y2JtTnZibk4wSUcxdmRYTmxSWFpsYm5SVWIxQnZhVzUwSUQwZ0tHVXBJRDArSUNoN1hHNGdJQ0FnZURvZ1pTNXdZV2RsV0N4Y2JpQWdJQ0I1T2lCbExuQmhaMlZaWEc1OUtUdGNibHh1WTI5dWMzUWdkRzkxWTJoRmRtVnVkRlJ2VUc5cGJuUWdQU0FvZXlCamFHRnVaMlZrVkc5MVkyaGxjeUI5S1NBOVBpQW9lMXh1SUNBZ0lIZzZJR05vWVc1blpXUlViM1ZqYUdWeld6QmRMbU5zYVdWdWRGZ3NYRzRnSUNBZ2VUb2dZMmhoYm1kbFpGUnZkV05vWlhOYk1GMHVZMnhwWlc1MFdWeHVmU2s3WEc1Y2JtTnZibk4wSUdOeVpXRjBaVkJ2YVc1MFpYSWdQU0FvWlNrZ1BUNGdaUzUwYjNWamFHVnpJRDljYmlBZ0lDQnVaWGNnVUc5cGJuUmxjaWgwYjNWamFFVjJaVzUwVkc5UWIybHVkQ2hsS1N3Z0ozUnZkV05vYlc5MlpTY3NJSFJ2ZFdOb1JYWmxiblJVYjFCdmFXNTBLU0E2SUZ4dUlDQWdJRzVsZHlCUWIybHVkR1Z5S0cxdmRYTmxSWFpsYm5SVWIxQnZhVzUwS0dVcExDQW5iVzkxYzJWdGIzWmxKeXdnYlc5MWMyVkZkbVZ1ZEZSdlVHOXBiblFwTzF4dVhHNWpiMjV6ZENCblpYUkJZM1IxWVd4RmRtVnVkQ0E5SUNobEtTQTlQaUJsTG05eWFXZHBibUZzUlhabGJuUWdmSHdnWlR0Y2JseHVZMnhoYzNNZ1ZISmhZMnNnWlhoMFpXNWtjeUJCWTNScGIyNGdlMXh1SUNBZ0lITjBZWEowS0dsdWNIVjBLU0I3WEc0Z0lDQWdJQ0FnSUhOMWNHVnlMbk4wWVhKMEtDazdYRzVjYmlBZ0lDQWdJQ0FnYVdZZ0tHbHVjSFYwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtbHVjSFYwSUQwZ2FXNXdkWFF1YzNSaGRHVWdQeUJwYm5CMWRDQTZJR055WldGMFpWQnZhVzUwWlhJb1oyVjBRV04wZFdGc1JYWmxiblFvYVc1d2RYUXBLVHRjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11YVc1d2RYUlBabVp6WlhRZ1BTQjdmVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXBibkIxZEU5eWFXZHBiaUE5SUhzZ0xpNHVkR2hwY3k1cGJuQjFkQzV6ZEdGMFpTQjlPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtbHVjSFYwTG5OMFlYSjBLQ2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjM1J2Y0NncElIdGNiaUFnSUNBZ0lDQWdjM1Z3WlhJdWMzUnZjQ2dwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbWx1Y0hWMExuTjBiM0FvS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J2YmxWd1pHRjBaU2gwY21GamF5d2dabkpoYldWVGRHRnRjQ3dnWld4aGNITmxaQ2tnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbWx1Y0hWMFQyWm1jMlYwSUQwZ2IyWm1jMlYwS0hSb2FYTXVhVzV3ZFhSUGNtbG5hVzRzSUhSb2FYTXVhVzV3ZFhRdWMzUmhkR1VwTzF4dVhHNGdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2dkR2hwY3k1dWRXMVdZV3gxWlV0bGVYTTdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdhMlY1SUQwZ2RHaHBjeTUyWVd4MVpVdGxlWE5iYVYwN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaDBhR2x6TG1sdWNIVjBUMlptYzJWMExtaGhjMDkzYmxCeWIzQmxjblI1S0d0bGVTa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQjJZV3gxWlNBOUlIUm9hWE11ZG1Gc2RXVnpXMnRsZVYwN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvZG1Gc2RXVXVaR2x5WldOMEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhaaGJIVmxMbU4xY25KbGJuUWdQU0IwYUdsekxtbHVjSFYwTG5OMFlYUmxXM1poYkhWbExuZGhkR05vSUh4OElHdGxlVjA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnNkV1V1WTNWeWNtVnVkQ0E5SUhaaGJIVmxMbVp5YjIwZ0t5QjBhR2x6TG1sdWNIVjBUMlptYzJWMFczWmhiSFZsTG5kaGRHTm9JSHg4SUd0bGVWMDdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1UyMXZiM1JvSUhaaGJIVmxJR2xtSUhkbElHaGhkbVVnYzIxdmIzUm9hVzVuWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIWmhiSFZsTG5OdGIyOTBhQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZV3gxWlM1amRYSnlaVzUwSUQwZ2MyMXZiM1JvS0haaGJIVmxMbU4xY25KbGJuUXNJSFpoYkhWbExuQnlaWFlzSUdWc1lYQnpaV1FzSUhaaGJIVmxMbk50YjI5MGFDazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVmVnh1WEc1VWNtRmpheTV3Y205MGIzUjVjR1V1WkdWbVlYVnNkRlpoYkhWbFVISnZjQ0E5SUNkM1lYUmphQ2M3WEc1VWNtRmpheTV3Y205MGIzUjVjR1V1WkdWbVlYVnNkRlpoYkhWbElEMGdRV04wYVc5dUxtVjRkR1Z1WkVSbFptRjFiSFJXWVd4MVpTaDdYRzRnSUNBZ1pHbHlaV04wT2lCbVlXeHpaVnh1ZlNrN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElGUnlZV05yTzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvVHJhY2suanNcbiAqKiBtb2R1bGUgaWQgPSA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfbG9vcCA9IHJlcXVpcmUoJy4vbG9vcCcpO1xuXG52YXIgbG9vcCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9sb29wKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfSAvKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCYXNlIFRhc2sgY2xhc3MgZm9yIGNyZWF0aW5nIGEgdGFzayBvbiB0aGUgbWFpbiByZW5kZXIgbG9vcC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuXG5cbmZ1bmN0aW9uIGNsZWFudXAoKSB7XG4gICAgdGhpcy5vbkNsZWFudXAgPSB1bmRlZmluZWQ7XG4gICAgbG9vcC5kZWFjdGl2YXRlKHRoaXMuaWQpO1xufVxuXG5mdW5jdGlvbiBhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLm9uQ2xlYW51cCA9IGNsZWFudXA7XG59XG5cbnZhciBUYXNrID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRhc2socHJvcHMpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRhc2spO1xuXG4gICAgICAgIHRoaXMuaWQgPSBsb29wLmdldFRhc2tJZCgpO1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHRoaXMuZGVmYXVsdFByb3BzKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5kZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kZWZhdWx0UHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSB0aGlzLmRlZmF1bHRQcm9wc1trZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0KHByb3BzKTtcbiAgICB9XG5cbiAgICBUYXNrLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiBzZXQocHJvcHMpIHtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgICAgICAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IHByb3BzW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgVGFzay5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgICAgbG9vcC5hY3RpdmF0ZSh0aGlzLmlkLCB0aGlzKTtcblxuICAgICAgICB0aGlzLm9uQWN0aXZhdGVMb29wID0gdGhpcy5vbkNsZWFudXAgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuaXNDb21wbGV0ZSA9IGZhbHNlO1xuXG4gICAgICAgIGlmICh0aGlzLm9uU3RhcnQpIHtcbiAgICAgICAgICAgIHRoaXMub25TdGFydCh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBUYXNrLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgICAgbG9vcC5kZWFjdGl2YXRlKHRoaXMuaWQpO1xuXG4gICAgICAgIGlmICh0aGlzLm9uU3RvcCkge1xuICAgICAgICAgICAgdGhpcy5vblN0b3AodGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgVGFzay5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uIG9uY2UoKSB7XG4gICAgICAgIGxvb3AuYWN0aXZhdGUodGhpcy5pZCwgdGhpcyk7XG4gICAgICAgIHRoaXMub25DbGVhbnVwID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLm9uQWN0aXZhdGVMb29wID0gYWN0aXZhdGU7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIFRhc2sucHJvdG90eXBlLmNvbXBsZXRlID0gZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICAgIHRoaXMuc3RvcCgpO1xuXG4gICAgICAgIGlmICh0aGlzLm9uQ29tcGxldGUpIHtcbiAgICAgICAgICAgIHRoaXMub25Db21wbGV0ZSh0aGlzKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKlxuICAgICAgICAjIEV4dGVuZCB0aGlzIFByb2Nlc3Mgd2l0aCBuZXcgcHJvcGVydGllc1xuICAgICAgICAjIyBSZXR1cm5zIG5ldyBpbnN0YW5jZSBvZiB0aGlzIFByb2Nlc3MncyBgcHJvdG90eXBlYCB3aXRoIGV4aXN0aW5nIGFuZCBuZXcgcHJvcGVydGllc1xuICAgICAgICAgQHBhcmFtIFtvYmplY3RdIChvcHRpb25hbClcbiAgICAgICAgQHJldHVybiBbUHJvY2Vzc11cbiAgICAqL1xuXG5cbiAgICBUYXNrLnByb3RvdHlwZS5pbmhlcml0ID0gZnVuY3Rpb24gaW5oZXJpdChwcm9wcykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzLmlkO1xuXG4gICAgICAgIHZhciBpbmhlcml0ZWRQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyh0aGlzLCBbJ2lkJ10pO1xuXG4gICAgICAgIHJldHVybiBuZXcgdGhpcy5jb25zdHJ1Y3RvcihfZXh0ZW5kcyh7fSwgaW5oZXJpdGVkUHJvcHMsIHByb3BzKSk7XG4gICAgfTtcblxuICAgIHJldHVybiBUYXNrO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBUYXNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkwWVhOckwxUmhjMnN1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPMEZCUjBFN08wbEJRVms3T3pzN096czdPenM3TzBGQlJWb3NVMEZCVXl4UFFVRlVMRWRCUVcxQ08wRkJRMllzVTBGQlN5eFRRVUZNTEVkQlFXbENMRk5CUVdwQ0xFTkJSR1U3UVVGRlppeFRRVUZMTEZWQlFVd3NRMEZCWjBJc1MwRkJTeXhGUVVGTUxFTkJRV2hDTEVOQlJtVTdRMEZCYmtJN08wRkJTMEVzVTBGQlV5eFJRVUZVTEVkQlFXOUNPMEZCUTJoQ0xGTkJRVXNzVTBGQlRDeEhRVUZwUWl4UFFVRnFRaXhEUVVSblFqdERRVUZ3UWpzN1NVRkpjVUk3UVVGRGFrSXNZVUZFYVVJc1NVRkRha0lzUTBGQldTeExRVUZhTEVWQlFXMUNPemhDUVVSR0xFMUJRMFU3TzBGQlEyWXNZVUZCU3l4RlFVRk1MRWRCUVZVc1MwRkJTeXhUUVVGTUxFVkJRVllzUTBGRVpUdEJRVVZtTEdGQlFVc3NVVUZCVEN4SFFVRm5RaXhMUVVGb1FpeERRVVpsT3p0QlFVbG1MRmxCUVVrc1MwRkJTeXhaUVVGTUxFVkJRVzFDTzBGQlEyNUNMR2xDUVVGTExFbEJRVWtzUjBGQlNpeEpRVUZYTEV0QlFVc3NXVUZCVEN4RlFVRnRRanRCUVVNdlFpeHZRa0ZCU1N4TFFVRkxMRmxCUVV3c1EwRkJhMElzWTBGQmJFSXNRMEZCYVVNc1IwRkJha01zUTBGQlNpeEZRVUV5UXp0QlFVTjJReXg1UWtGQlN5eEhRVUZNTEVsQlFWa3NTMEZCU3l4WlFVRk1MRU5CUVd0Q0xFZEJRV3hDTEVOQlFWb3NRMEZFZFVNN2FVSkJRVE5ETzJGQlJFbzdVMEZFU2pzN1FVRlJRU3hoUVVGTExFZEJRVXdzUTBGQlV5eExRVUZVTEVWQldtVTdTMEZCYmtJN08wRkJSR2xDTEcxQ1FXZENha0lzYlVKQlFVa3NUMEZCVHp0QlFVTlFMR0ZCUVVzc1NVRkJTU3hIUVVGS0xFbEJRVmNzUzBGQmFFSXNSVUZCZFVJN1FVRkRia0lzWjBKQlFVa3NUVUZCVFN4alFVRk9MRU5CUVhGQ0xFZEJRWEpDTEVOQlFVb3NSVUZCSzBJN1FVRkRNMElzY1VKQlFVc3NSMEZCVEN4SlFVRlpMRTFCUVUwc1IwRkJUaXhEUVVGYUxFTkJSREpDTzJGQlFTOUNPMU5CUkVvN08wRkJUVUVzWlVGQlR5eEpRVUZRTEVOQlVFODdPenRCUVdoQ1RTeHRRa0V3UW1wQ0xIbENRVUZSTzBGQlEwb3NZVUZCU3l4UlFVRk1MRU5CUVdNc1MwRkJTeXhGUVVGTUxFVkJRVk1zU1VGQmRrSXNSVUZFU1RzN1FVRkhTaXhoUVVGTExHTkJRVXdzUjBGQmMwSXNTMEZCU3l4VFFVRk1MRWRCUVdsQ0xGTkJRV3BDTEVOQlNHeENPMEZCU1Vvc1lVRkJTeXhWUVVGTUxFZEJRV3RDTEV0QlFXeENMRU5CU2trN08wRkJUVW9zV1VGQlNTeExRVUZMTEU5QlFVd3NSVUZCWXp0QlFVTmtMR2xDUVVGTExFOUJRVXdzUTBGQllTeEpRVUZpTEVWQlJHTTdVMEZCYkVJN08wRkJTVUVzWlVGQlR5eEpRVUZRTEVOQlZrazdPenRCUVRGQ1V5eHRRa0YxUTJwQ0xIVkNRVUZQTzBGQlEwZ3NZVUZCU3l4VlFVRk1MRU5CUVdkQ0xFdEJRVXNzUlVGQlRDeERRVUZvUWl4RFFVUkhPenRCUVVkSUxGbEJRVWtzUzBGQlN5eE5RVUZNTEVWQlFXRTdRVUZEWWl4cFFrRkJTeXhOUVVGTUxFTkJRVmtzU1VGQldpeEZRVVJoTzFOQlFXcENPenRCUVVsQkxHVkJRVThzU1VGQlVDeERRVkJIT3pzN1FVRjJRMVVzYlVKQmFVUnFRaXgxUWtGQlR6dEJRVU5JTEdGQlFVc3NVVUZCVEN4RFFVRmpMRXRCUVVzc1JVRkJUQ3hGUVVGVExFbEJRWFpDTEVWQlJFYzdRVUZGU0N4aFFVRkxMRk5CUVV3c1IwRkJhVUlzVTBGQmFrSXNRMEZHUnp0QlFVZElMR0ZCUVVzc1kwRkJUQ3hIUVVGelFpeFJRVUYwUWl4RFFVaEhPenRCUVV0SUxHVkJRVThzU1VGQlVDeERRVXhIT3pzN1FVRnFSRlVzYlVKQmVVUnFRaXdyUWtGQlZ6dEJRVU5RTEdGQlFVc3NTVUZCVEN4SFFVUlBPenRCUVVkUUxGbEJRVWtzUzBGQlN5eFZRVUZNTEVWQlFXbENPMEZCUTJwQ0xHbENRVUZMTEZWQlFVd3NRMEZCWjBJc1NVRkJhRUlzUlVGRWFVSTdVMEZCY2tJN096czdPenM3T3pzN08wRkJOVVJoTEcxQ1FYZEZha0lzTWtKQlFWRXNUMEZCVHp0WlFVTklMRXRCUVRCQ0xFdEJRVEZDTEVkQlJFYzdPMWxCUTBrc01FTkJRVzFDTEdOQlJIWkNPenRCUVVWWUxHVkJRVThzU1VGQlNTeExRVUZMTEZkQlFVd3NZMEZCYzBJc1owSkJRVzFDTEUxQlFUZERMRU5CUVZBc1EwRkdWenM3TzFkQmVFVkZJaXdpWm1sc1pTSTZJbFJoYzJzdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUXZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lMeXBjYmlBZ0lDQkNZWE5sSUZSaGMyc2dZMnhoYzNNZ1ptOXlJR055WldGMGFXNW5JR0VnZEdGemF5QnZiaUIwYUdVZ2JXRnBiaUJ5Wlc1a1pYSWdiRzl2Y0M1Y2Jpb3ZYRzVwYlhCdmNuUWdLaUJoY3lCc2IyOXdJR1p5YjIwZ0p5NHZiRzl2Y0NjN1hHNWNibVoxYm1OMGFXOXVJR05zWldGdWRYQW9LU0I3WEc0Z0lDQWdkR2hwY3k1dmJrTnNaV0Z1ZFhBZ1BTQjFibVJsWm1sdVpXUTdYRzRnSUNBZ2JHOXZjQzVrWldGamRHbDJZWFJsS0hSb2FYTXVhV1FwTzF4dWZWeHVYRzVtZFc1amRHbHZiaUJoWTNScGRtRjBaU2dwSUh0Y2JpQWdJQ0IwYUdsekxtOXVRMnhsWVc1MWNDQTlJR05zWldGdWRYQTdYRzU5WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdOc1lYTnpJRlJoYzJzZ2UxeHVJQ0FnSUdOdmJuTjBjblZqZEc5eUtIQnliM0J6S1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YVdRZ1BTQnNiMjl3TG1kbGRGUmhjMnRKWkNncE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1selFXTjBhWFpsSUQwZ1ptRnNjMlU3WEc1Y2JpQWdJQ0FnSUNBZ2FXWWdLSFJvYVhNdVpHVm1ZWFZzZEZCeWIzQnpLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQm1iM0lnS0d4bGRDQnJaWGtnYVc0Z2RHaHBjeTVrWldaaGRXeDBVSEp2Y0hNcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvZEdocGN5NWtaV1poZFd4MFVISnZjSE11YUdGelQzZHVVSEp2Y0dWeWRIa29hMlY1S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdselcydGxlVjBnUFNCMGFHbHpMbVJsWm1GMWJIUlFjbTl3YzF0clpYbGRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjMlYwS0hCeWIzQnpLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnpaWFFvY0hKdmNITXBJSHRjYmlBZ0lDQWdJQ0FnWm05eUlDaHNaWFFnYTJWNUlHbHVJSEJ5YjNCektTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9jSEp2Y0hNdWFHRnpUM2R1VUhKdmNHVnlkSGtvYTJWNUtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhOYmEyVjVYU0E5SUhCeWIzQnpXMnRsZVYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjenRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnpkR0Z5ZENncElIdGNiaUFnSUNBZ0lDQWdiRzl2Y0M1aFkzUnBkbUYwWlNoMGFHbHpMbWxrTENCMGFHbHpLVHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbTl1UVdOMGFYWmhkR1ZNYjI5d0lEMGdkR2hwY3k1dmJrTnNaV0Z1ZFhBZ1BTQjFibVJsWm1sdVpXUTdYRzRnSUNBZ0lDQWdJSFJvYVhNdWFYTkRiMjF3YkdWMFpTQTlJR1poYkhObE8xeHVYRzRnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbTl1VTNSaGNuUXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YjI1VGRHRnlkQ2gwYUdsektUdGNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhOMGIzQW9LU0I3WEc0Z0lDQWdJQ0FnSUd4dmIzQXVaR1ZoWTNScGRtRjBaU2gwYUdsekxtbGtLVHRjYmlBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUdsbUlDaDBhR2x6TG05dVUzUnZjQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1dmJsTjBiM0FvZEdocGN5azdYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnSUNCOVhHNWNiaUFnSUNCdmJtTmxLQ2tnZTF4dUlDQWdJQ0FnSUNCc2IyOXdMbUZqZEdsMllYUmxLSFJvYVhNdWFXUXNJSFJvYVhNcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG05dVEyeGxZVzUxY0NBOUlIVnVaR1ZtYVc1bFpEdGNiaUFnSUNBZ0lDQWdkR2hwY3k1dmJrRmpkR2wyWVhSbFRHOXZjQ0E5SUdGamRHbDJZWFJsTzF4dVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHTnZiWEJzWlhSbEtDa2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxuTjBiM0FvS1R0Y2JseHVJQ0FnSUNBZ0lDQnBaaUFvZEdocGN5NXZia052YlhCc1pYUmxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG05dVEyOXRjR3hsZEdVb2RHaHBjeWs3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0F2S2x4dUlDQWdJQ0FnSUNBaklFVjRkR1Z1WkNCMGFHbHpJRkJ5YjJObGMzTWdkMmwwYUNCdVpYY2djSEp2Y0dWeWRHbGxjMXh1SUNBZ0lDQWdJQ0FqSXlCU1pYUjFjbTV6SUc1bGR5QnBibk4wWVc1alpTQnZaaUIwYUdseklGQnliMk5sYzNNbmN5QmdjSEp2ZEc5MGVYQmxZQ0IzYVhSb0lHVjRhWE4wYVc1bklHRnVaQ0J1WlhjZ2NISnZjR1Z5ZEdsbGMxeHVYRzRnSUNBZ0lDQWdJRUJ3WVhKaGJTQmJiMkpxWldOMFhTQW9iM0IwYVc5dVlXd3BYRzRnSUNBZ0lDQWdJRUJ5WlhSMWNtNGdXMUJ5YjJObGMzTmRYRzRnSUNBZ0tpOWNiaUFnSUNCcGJtaGxjbWwwS0hCeWIzQnpLU0I3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJSHNnYVdRc0lDNHVMbWx1YUdWeWFYUmxaRkJ5YjNCeklIMGdQU0IwYUdsek8xeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2JtVjNJSFJvYVhNdVkyOXVjM1J5ZFdOMGIzSW9leUF1TGk1cGJtaGxjbWwwWldSUWNtOXdjeXdnTGk0dWNISnZjSE1nZlNrN1hHNGdJQ0FnZlZ4dWZTSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy90YXNrL1Rhc2suanNcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfVGFzazIgPSByZXF1aXJlKCcuLi90YXNrL1Rhc2snKTtcblxudmFyIF9UYXNrMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1Rhc2syKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBJbnB1dCA9IGZ1bmN0aW9uIChfVGFzaykge1xuICAgIF9pbmhlcml0cyhJbnB1dCwgX1Rhc2spO1xuXG4gICAgZnVuY3Rpb24gSW5wdXQoaW5pdGlhbFZhbHVlcywgcG9sbCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW5wdXQpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9UYXNrLmNhbGwodGhpcykpO1xuXG4gICAgICAgIF90aGlzLnN0YXRlID0gaW5pdGlhbFZhbHVlcztcblxuICAgICAgICBpZiAoKDAsIF91dGlscy5pc0Z1bmMpKHBvbGwpKSB7XG4gICAgICAgICAgICBfdGhpcy5vbkZyYW1lU3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLmxhdGVzdChfdGhpcy5wb2xsKCkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgTWFudWFsbHkgYWRkIGxhdGVzdCB2YWx1ZXNcbiAgICAgICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgICovXG5cblxuICAgIElucHV0LnByb3RvdHlwZS5sYXRlc3QgPSBmdW5jdGlvbiBsYXRlc3QocHJvcHMpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IF9leHRlbmRzKHt9LCB0aGlzLnN0YXRlLCBwcm9wcyk7XG4gICAgfTtcblxuICAgIHJldHVybiBJbnB1dDtcbn0oX1Rhc2szLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBJbnB1dDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJuQjFkQzlKYm5CMWRDNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN1FVRkJRVHM3T3p0QlFVTkJPenM3T3pzN096czdPMGxCUlhGQ096czdRVUZEYWtJc1lVRkVhVUlzUzBGRGFrSXNRMEZCV1N4aFFVRmFMRVZCUVRKQ0xFbEJRVE5DTEVWQlFXbERPemhDUVVSb1FpeFBRVU5uUWpzN2NVUkJRemRDTEd0Q1FVUTJRanM3UVVGRk4wSXNZMEZCU3l4TFFVRk1MRWRCUVdFc1lVRkJZaXhEUVVZMlFqczdRVUZKTjBJc1dVRkJTU3h0UWtGQlR5eEpRVUZRTEVOQlFVb3NSVUZCYTBJN1FVRkRaQ3hyUWtGQlN5eFpRVUZNTEVkQlFXOUNPM1ZDUVVGTkxFMUJRVXNzVFVGQlRDeERRVUZaTEUxQlFVc3NTVUZCVEN4RlFVRmFPMkZCUVU0c1EwRkVUanRUUVVGc1FqdHhRa0ZLTmtJN1MwRkJha003T3pzN096czdPMEZCUkdsQ0xHOUNRV1ZxUWl4NVFrRkJUeXhQUVVGUE8wRkJRMVlzWVVGQlN5eExRVUZNTEdkQ1FVRnJRaXhMUVVGTExFdEJRVXdzUlVGQlpTeE5RVUZxUXl4RFFVUlZPenM3VjBGbVJ5SXNJbVpwYkdVaU9pSkpibkIxZEM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRDOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1ZHRnpheUJtY205dElDY3VMaTkwWVhOckwxUmhjMnNuTzF4dWFXMXdiM0owSUhzZ2FYTkdkVzVqSUgwZ1puSnZiU0FuTGk0dmFXNWpMM1YwYVd4ekp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdZMnhoYzNNZ1NXNXdkWFFnWlhoMFpXNWtjeUJVWVhOcklIdGNiaUFnSUNCamIyNXpkSEoxWTNSdmNpaHBibWwwYVdGc1ZtRnNkV1Z6TENCd2IyeHNLU0I3WEc0Z0lDQWdJQ0FnSUhOMWNHVnlLQ2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjM1JoZEdVZ1BTQnBibWwwYVdGc1ZtRnNkV1Z6TzF4dVhHNGdJQ0FnSUNBZ0lHbG1JQ2hwYzBaMWJtTW9jRzlzYkNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXViMjVHY21GdFpWTjBZWEowSUQwZ0tDa2dQVDRnZEdocGN5NXNZWFJsYzNRb2RHaHBjeTV3YjJ4c0tDa3BPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeXBjYmlBZ0lDQWdJQ0FnVFdGdWRXRnNiSGtnWVdSa0lHeGhkR1Z6ZENCMllXeDFaWE5jYmx4dUlDQWdJQ0FnSUNCQWNHRnlZVzBnVzI5aWFtVmpkRjFjYmlBZ0lDQXFMMXh1SUNBZ0lHeGhkR1Z6ZENod2NtOXdjeWtnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbk4wWVhSbElEMGdleUF1TGk1MGFHbHpMbk4wWVhSbExDQXVMaTV3Y205d2N5QjlPMXh1SUNBZ0lIMWNibjFjYmlKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lucHV0L0lucHV0LmpzXG4gKiogbW9kdWxlIGlkID0gOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3RpbWVsaW5lID0gcmVxdWlyZSgnLi90aW1lbGluZScpO1xuXG52YXIgX3RpbWVsaW5lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RpbWVsaW5lKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIERFRkFVTFRfSU5URVJWQUwgPSAxMDA7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICh0d2VlbnMsIHByb3BzKSB7XG4gICAgdmFyIHByb3BzSXNEdXJhdGlvbiA9ICgwLCBfdXRpbHMuaXNOdW0pKHByb3BzKTtcbiAgICB2YXIgaW50ZXJ2YWwgPSBwcm9wc0lzRHVyYXRpb24gPyBwcm9wcyA6IHByb3BzID8gcHJvcHMuaW50ZXJ2YWwgfHwgREVGQVVMVF9JTlRFUlZBTCA6IERFRkFVTFRfSU5URVJWQUw7XG4gICAgdmFyIGF0ID0gMDtcbiAgICB2YXIgdGltZWxpbmVEZWZpbml0aW9uID0gdHdlZW5zLm1hcChmdW5jdGlvbiAodHdlZW4pIHtcbiAgICAgICAgdmFyIGRlZiA9IHsgdHdlZW46IHR3ZWVuLCBhdDogYXQgfTtcbiAgICAgICAgYXQgKz0gaW50ZXJ2YWw7XG4gICAgICAgIHJldHVybiBkZWY7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKDAsIF90aW1lbGluZTIuZGVmYXVsdCkodGltZWxpbmVEZWZpbml0aW9uLCBwcm9wcyk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1NdmMzUmhaMmRsY2k1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPMEZCUVVFN096czdRVUZEUVRzN096dEJRVVZCTEVsQlFVMHNiVUpCUVcxQ0xFZEJRVzVDT3p0clFrRkZVeXhWUVVGRExFMUJRVVFzUlVGQlV5eExRVUZVTEVWQlFXMUNPMEZCUXpsQ0xGRkJRVTBzYTBKQlFXdENMR3RDUVVGTkxFdEJRVTRzUTBGQmJFSXNRMEZFZDBJN1FVRkZPVUlzVVVGQlRTeFhRVUZYTEd0Q1FVRnJRaXhMUVVGc1FpeEhRVUV3UWl4UlFVRlJMRTFCUVUwc1VVRkJUaXhKUVVGclFpeG5Ra0ZCYkVJc1IwRkJjVU1zWjBKQlFUZERMRU5CUm1JN1FVRkhPVUlzVVVGQlNTeExRVUZMTEVOQlFVd3NRMEZJTUVJN1FVRkpPVUlzVVVGQlRTeHhRa0ZCY1VJc1QwRkJUeXhIUVVGUUxFTkJRVmNzVlVGQlF5eExRVUZFTEVWQlFWYzdRVUZETjBNc1dVRkJUU3hOUVVGTkxFVkJRVVVzV1VGQlJpeEZRVUZUTEUxQlFWUXNSVUZCVGl4RFFVUjFRenRCUVVVM1F5eGpRVUZOTEZGQlFVNHNRMEZHTmtNN1FVRkhOME1zWlVGQlR5eEhRVUZRTEVOQlNEWkRPMHRCUVZnc1EwRkJhRU1zUTBGS2QwSTdPMEZCVlRsQ0xGZEJRVThzZDBKQlFWTXNhMEpCUVZRc1JVRkJOa0lzUzBGQk4wSXNRMEZCVUN4RFFWWTRRanREUVVGdVFpSXNJbVpwYkdVaU9pSnpkR0ZuWjJWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQjBhVzFsYkdsdVpTQm1jbTl0SUNjdUwzUnBiV1ZzYVc1bEp6dGNibWx0Y0c5eWRDQjdJR2x6VG5WdElIMGdabkp2YlNBbkxpOTFkR2xzY3ljN1hHNWNibU52Ym5OMElFUkZSa0ZWVEZSZlNVNVVSVkpXUVV3Z1BTQXhNREE3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUNoMGQyVmxibk1zSUhCeWIzQnpLU0E5UGlCN1hHNGdJQ0FnWTI5dWMzUWdjSEp2Y0hOSmMwUjFjbUYwYVc5dUlEMGdhWE5PZFcwb2NISnZjSE1wTzF4dUlDQWdJR052Ym5OMElHbHVkR1Z5ZG1Gc0lEMGdjSEp2Y0hOSmMwUjFjbUYwYVc5dUlEOGdjSEp2Y0hNZ09pQndjbTl3Y3lBL0lIQnliM0J6TG1sdWRHVnlkbUZzSUh4OElFUkZSa0ZWVEZSZlNVNVVSVkpXUVV3Z09pQkVSVVpCVlV4VVgwbE9WRVZTVmtGTU8xeHVJQ0FnSUd4bGRDQmhkQ0E5SURBN1hHNGdJQ0FnWTI5dWMzUWdkR2x0Wld4cGJtVkVaV1pwYm1sMGFXOXVJRDBnZEhkbFpXNXpMbTFoY0Nnb2RIZGxaVzRwSUQwK0lIdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ1pHVm1JRDBnZXlCMGQyVmxiaXdnWVhRZ2ZUdGNiaUFnSUNBZ0lDQWdZWFFnS3owZ2FXNTBaWEoyWVd3N1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCa1pXWTdYRzRnSUNBZ2ZTazdYRzVjYmlBZ0lDQnlaWFIxY200Z2RHbHRaV3hwYm1Vb2RHbHRaV3hwYm1WRVpXWnBibWwwYVc5dUxDQndjbTl3Y3lrN1hHNTlPeUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL3N0YWdnZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSB0aW1lbGluZTtcblxudmFyIF9Ud2VlbiA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvVHdlZW4nKTtcblxudmFyIF9Ud2VlbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Ud2Vlbik7XG5cbnZhciBfcHJlc2V0RWFzaW5nID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9lYXNpbmcvcHJlc2V0LWVhc2luZycpO1xuXG52YXIgX3ByZXNldEVhc2luZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmVzZXRFYXNpbmcpO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuL2NhbGMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLypcbiAgICBAcGFyYW0gW2FycmF5XVxuICAgICAgICBTZXF1ZW50aWFsIGFycmF5IG9mIHR3ZWVucywgZWFjaCBpdGVtIGNhbiBiZSBhIHR3ZWVuIG9yIGRlZmluaXRpb24gb2JqOlxuXG4gICAgICAgIFtcbiAgICAgICAgICAgIG5ldyBUd2VlbigpLFxuICAgICAgICAgICAgc3RhZ2dlcigpLFxuICAgICAgICAgICAgdGltZWxpbmUoKSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0d2VlbjogbmV3IFR3ZWVuKCksXG4gICAgICAgICAgICAgICAgYXQ6IDEwMCxcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IFwiKz0xMDBcIlxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4qL1xudmFyIGFuYWx5emUgPSBmdW5jdGlvbiAoZGVmcykge1xuICAgIHZhciB0aW1lbGluZSA9IFtdO1xuICAgIHZhciBudW1EZWZzID0gZGVmcy5sZW5ndGg7XG4gICAgdmFyIGN1cnJlbnRQbGF5aGVhZCA9IDA7XG5cbiAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICB2YXIgZGVmID0gZGVmc1tpXTtcbiAgICAgICAgdmFyIGRlZklzT2JqID0gZGVmLnR3ZWVuID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICB2YXIgdHdlZW4gPSBkZWZJc09iaiA/IGRlZi50d2VlbiA6IGRlZjtcblxuICAgICAgICBpZiAoZGVmSXNPYmopIHtcbiAgICAgICAgICAgIGlmIChkZWYub2Zmc2V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UGxheWhlYWQgPSAoMCwgX2NhbGMucmVsYXRpdmVWYWx1ZSkoY3VycmVudFBsYXloZWFkLCBkZWYub2Zmc2V0KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGVmLmF0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UGxheWhlYWQgPSBkZWYuYXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZHVyYXRpb24gPSAwO1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdHdlZW4udmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAodHdlZW4udmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB0d2Vlbi52YWx1ZXNba2V5XTtcbiAgICAgICAgICAgICAgICBkdXJhdGlvbiA9IE1hdGgubWF4KGR1cmF0aW9uLCB2YWx1ZS5kdXJhdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aW1lbGluZS5wdXNoKHtcbiAgICAgICAgICAgIGZyb206IGN1cnJlbnRQbGF5aGVhZCxcbiAgICAgICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgICAgICAgIGZpcmU6IGZ1bmN0aW9uICh0aW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHR3ZWVuLnNlZWtUaW1lKHRpbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjdXJyZW50UGxheWhlYWQgKz0gZHVyYXRpb247XG4gICAgfTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtRGVmczsgaSsrKSB7XG4gICAgICAgIF9sb29wKGkpO1xuICAgIH1cblxuICAgIHJldHVybiB7IHRvdGFsVGltZTogY3VycmVudFBsYXloZWFkLCB0aW1lbGluZTogdGltZWxpbmUgfTtcbn07XG5cbnZhciBzZXRUd2VlbnMgPSBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciB0aW1lbGluZSA9IF9yZWYudGltZWxpbmU7XG4gICAgdmFyIHRpbWVsaW5lTGVuZ3RoID0gX3JlZi50aW1lbGluZUxlbmd0aDtcbiAgICB2YXIgdmFsdWVzID0gX3JlZi52YWx1ZXM7XG4gICAgdmFyIGR1cmF0aW9uID0gX3JlZi5kdXJhdGlvbjtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGltZWxpbmVMZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgX3R3ZWVuID0gdGltZWxpbmVbaV07XG4gICAgICAgIHZhciB0d2VlblRpbWUgPSB2YWx1ZXMucC5jdXJyZW50ICogZHVyYXRpb24gLSBfdHdlZW4uZnJvbTtcblxuICAgICAgICBpZiAodHdlZW5UaW1lID49IC01MCAmJiB0d2VlblRpbWUgPD0gX3R3ZWVuLmR1cmF0aW9uICsgNTApIHtcbiAgICAgICAgICAgIF90d2Vlbi5maXJlKHR3ZWVuVGltZSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5mdW5jdGlvbiB0aW1lbGluZShkZWYpIHtcbiAgICB2YXIgcHJvcHMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1sxXTtcblxuICAgIHZhciBfYW5hbHl6ZSA9IGFuYWx5emUoZGVmKTtcblxuICAgIHZhciB0b3RhbFRpbWUgPSBfYW5hbHl6ZS50b3RhbFRpbWU7XG4gICAgdmFyIHRpbWVsaW5lID0gX2FuYWx5emUudGltZWxpbmU7XG5cblxuICAgIHJldHVybiBuZXcgX1R3ZWVuMi5kZWZhdWx0KF9leHRlbmRzKHtcbiAgICAgICAgZWFzZTogX3ByZXNldEVhc2luZzIuZGVmYXVsdC5saW5lYXJcbiAgICB9LCBwcm9wcywge1xuICAgICAgICBkdXJhdGlvbjogdG90YWxUaW1lLFxuICAgICAgICB2YWx1ZXM6IHtcbiAgICAgICAgICAgIHA6IDFcbiAgICAgICAgfSxcbiAgICAgICAgdGltZWxpbmU6IHRpbWVsaW5lLFxuICAgICAgICB0aW1lbGluZUxlbmd0aDogdGltZWxpbmUubGVuZ3RoLFxuICAgICAgICBvblJlbmRlcjogc2V0VHdlZW5zXG4gICAgfSkpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1NdmRHbHRaV3hwYm1VdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3TzJ0Q1FXOUZkMEk3TzBGQmNFVjRRanM3T3p0QlFVTkJPenM3TzBGQlEwRTdPenM3T3pzN096czdPenM3T3pzN096czdRVUZwUWtFc1NVRkJUU3hWUVVGVkxGVkJRVU1zU1VGQlJDeEZRVUZWTzBGQlEzUkNMRkZCUVUwc1YwRkJWeXhGUVVGWUxFTkJSR2RDTzBGQlJYUkNMRkZCUVUwc1ZVRkJWU3hMUVVGTExFMUJRVXdzUTBGR1RUdEJRVWQwUWl4UlFVRkpMR3RDUVVGclFpeERRVUZzUWl4RFFVaHJRanM3TUVKQlMySTdRVUZEVEN4WlFVRk5MRTFCUVUwc1MwRkJTeXhEUVVGTUxFTkJRVTQ3UVVGRFRpeFpRVUZOTEZkQlFWY3NTVUZCU1N4TFFVRktMRWRCUVZrc1NVRkJXaXhIUVVGdFFpeExRVUZ1UWp0QlFVTnFRaXhaUVVGTkxGRkJRVkVzVjBGQllTeEpRVUZKTEV0QlFVb3NSMEZCV1N4SFFVRjZRanM3UVVGRlpDeFpRVUZKTEZGQlFVb3NSVUZCWXp0QlFVTldMR2RDUVVGSkxFbEJRVWtzVFVGQlNpeExRVUZsTEZOQlFXWXNSVUZCTUVJN1FVRkRNVUlzYTBOQlFXdENMSGxDUVVGakxHVkJRV1FzUlVGQkswSXNTVUZCU1N4TlFVRktMRU5CUVdwRUxFTkJSREJDTzJGQlFUbENMRTFCUlU4c1NVRkJTU3hKUVVGSkxFVkJRVW9zUzBGQlZ5eFRRVUZZTEVWQlFYTkNPMEZCUXpkQ0xHdERRVUZyUWl4SlFVRkpMRVZCUVVvc1EwRkVWenRoUVVFeFFqdFRRVWhZT3p0QlFWRkJMRmxCUVVrc1YwRkJWeXhEUVVGWU8wRkJRMG9zWVVGQlN5eEpRVUZKTEVkQlFVb3NTVUZCVnl4TlFVRk5MRTFCUVU0c1JVRkJZenRCUVVNeFFpeG5Ra0ZCU1N4TlFVRk5MRTFCUVU0c1EwRkJZU3hqUVVGaUxFTkJRVFJDTEVkQlFUVkNMRU5CUVVvc1JVRkJjME03UVVGRGJFTXNiMEpCUVUwc1VVRkJVU3hOUVVGTkxFMUJRVTRzUTBGQllTeEhRVUZpTEVOQlFWSXNRMEZFTkVJN1FVRkZiRU1zTWtKQlFWY3NTMEZCU3l4SFFVRk1MRU5CUVZNc1VVRkJWQ3hGUVVGdFFpeE5RVUZOTEZGQlFVNHNRMEZCT1VJc1EwRkdhME03WVVGQmRFTTdVMEZFU2pzN1FVRlBRU3hwUWtGQlV5eEpRVUZVTEVOQlFXTTdRVUZEVml4clFrRkJUU3hsUVVGT08wRkJRMEVzYzBKQlFWVXNVVUZCVmp0QlFVTkJMR3RDUVVGTkxGVkJRVU1zU1VGQlJEdDFRa0ZCVlN4TlFVRk5MRkZCUVU0c1EwRkJaU3hKUVVGbU8yRkJRVlk3VTBGSVZqczdRVUZOUVN3eVFrRkJiVUlzVVVGQmJrSTdUVUZvUTJ0Q096dEJRVXQwUWl4VFFVRkxMRWxCUVVrc1NVRkJTU3hEUVVGS0xFVkJRVThzU1VGQlNTeFBRVUZLTEVWQlFXRXNSMEZCTjBJc1JVRkJhME03WTBGQmVrSXNSMEZCZVVJN1MwRkJiRU03TzBGQk9FSkJMRmRCUVU4c1JVRkJSU3hYUVVGWExHVkJRVmdzUlVGQk5FSXNhMEpCUVRsQ0xFVkJRVkFzUTBGdVEzTkNPME5CUVZZN08wRkJjME5vUWl4SlFVRk5MRmxCUVZrc1owSkJRVzlFTzFGQlFXcEVMSGxDUVVGcFJEdFJRVUYyUXl4eFEwRkJkVU03VVVGQmRrSXNjVUpCUVhWQ08xRkJRV1lzZVVKQlFXVTdPMEZCUTJ4RkxGTkJRVXNzU1VGQlNTeEpRVUZKTEVOQlFVb3NSVUZCVHl4SlFVRkpMR05CUVVvc1JVRkJiMElzUjBGQmNFTXNSVUZCZVVNN1FVRkRja01zV1VGQlRTeFRRVUZSTEZOQlFWTXNRMEZCVkN4RFFVRlNMRU5CUkN0Q08wRkJSWEpETEZsQlFVMHNXVUZCV1N4TlFVRkRMRU5CUVU4c1EwRkJVQ3hEUVVGVExFOUJRVlFzUjBGQmJVSXNVVUZCYmtJc1IwRkJLMElzVDBGQlRTeEpRVUZPTEVOQlJtSTdPMEZCU1hKRExGbEJRVWtzWVVGQllTeERRVUZETEVWQlFVUXNTVUZCVHl4aFFVRmhMRTlCUVUwc1VVRkJUaXhIUVVGcFFpeEZRVUZxUWl4RlFVRnhRanRCUVVOMFJDeHRRa0ZCVFN4SlFVRk9MRU5CUVZjc1UwRkJXQ3hGUVVSelJEdFRRVUV4UkR0TFFVcEtPME5CUkdNN08wRkJWMGdzVTBGQlV5eFJRVUZVTEVOQlFXdENMRWRCUVd4Q0xFVkJRVzFETzFGQlFWb3NPRVJCUVZFc2EwSkJRVWs3TzIxQ1FVTmtMRkZCUVZFc1IwRkJVaXhGUVVSak96dFJRVU4wUXl3clFrRkVjME03VVVGRE0wSXNOa0pCUkRKQ096czdRVUZIT1VNc1YwRkJUenRCUVVOSUxHTkJRVTBzZFVKQlFVOHNUVUZCVUR0UFFVTklPMEZCUTBnc2EwSkJRVlVzVTBGQlZqdEJRVU5CTEdkQ1FVRlJPMEZCUTBvc1pVRkJSeXhEUVVGSU8xTkJSRW83UVVGSFFTeHJRa0ZCVlN4UlFVRldPMEZCUTBFc2QwSkJRV2RDTEZOQlFWTXNUVUZCVkR0QlFVTm9RaXhyUWtGQlZTeFRRVUZXTzAxQlZFY3NRMEZCVUN4RFFVZzRRenREUVVGdVF5SXNJbVpwYkdVaU9pSjBhVzFsYkdsdVpTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdWSGRsWlc0Z1puSnZiU0FuTGk0dllXTjBhVzl1Y3k5VWQyVmxiaWM3WEc1cGJYQnZjblFnWldGemFXNW5JR1p5YjIwZ0p5NHVMMkZqZEdsdmJuTXZaV0Z6YVc1bkwzQnlaWE5sZEMxbFlYTnBibWNuTzF4dWFXMXdiM0owSUhzZ2NtVnNZWFJwZG1WV1lXeDFaU0I5SUdaeWIyMGdKeTR2WTJGc1l5YzdYRzVjYmk4cVhHNGdJQ0FnUUhCaGNtRnRJRnRoY25KaGVWMWNiaUFnSUNBZ0lDQWdVMlZ4ZFdWdWRHbGhiQ0JoY25KaGVTQnZaaUIwZDJWbGJuTXNJR1ZoWTJnZ2FYUmxiU0JqWVc0Z1ltVWdZU0IwZDJWbGJpQnZjaUJrWldacGJtbDBhVzl1SUc5aWFqcGNibHh1SUNBZ0lDQWdJQ0JiWEc0Z0lDQWdJQ0FnSUNBZ0lDQnVaWGNnVkhkbFpXNG9LU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lITjBZV2RuWlhJb0tTeGNiaUFnSUNBZ0lDQWdJQ0FnSUhScGJXVnNhVzVsS0Nrc1hHNGdJQ0FnSUNBZ0lDQWdJQ0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEhkbFpXNDZJRzVsZHlCVWQyVmxiaWdwTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdGME9pQXhNREFzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYjJabWMyVjBPaUJjSWlzOU1UQXdYQ0pjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdYVnh1S2k5Y2JtTnZibk4wSUdGdVlXeDVlbVVnUFNBb1pHVm1jeWtnUFQ0Z2UxeHVJQ0FnSUdOdmJuTjBJSFJwYldWc2FXNWxJRDBnVzEwN1hHNGdJQ0FnWTI5dWMzUWdiblZ0UkdWbWN5QTlJR1JsWm5NdWJHVnVaM1JvTzF4dUlDQWdJR3hsZENCamRYSnlaVzUwVUd4aGVXaGxZV1FnUFNBd08xeHVYRzRnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQnVkVzFFWldaek95QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnWkdWbUlEMGdaR1ZtYzF0cFhUdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ1pHVm1TWE5QWW1vZ1BTQmtaV1l1ZEhkbFpXNGdQeUIwY25WbElEb2dabUZzYzJVN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUhSM1pXVnVJRDBnS0dSbFprbHpUMkpxS1NBL0lHUmxaaTUwZDJWbGJpQTZJR1JsWmp0Y2JseHVJQ0FnSUNBZ0lDQnBaaUFvWkdWbVNYTlBZbW9wSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoa1pXWXViMlptYzJWMElDRTlQU0IxYm1SbFptbHVaV1FwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamRYSnlaVzUwVUd4aGVXaGxZV1FnUFNCeVpXeGhkR2wyWlZaaGJIVmxLR04xY25KbGJuUlFiR0Y1YUdWaFpDd2daR1ZtTG05bVpuTmxkQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2FXWWdLR1JsWmk1aGRDQWhQVDBnZFc1a1pXWnBibVZrS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kzVnljbVZ1ZEZCc1lYbG9aV0ZrSUQwZ1pHVm1MbUYwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ2JHVjBJR1IxY21GMGFXOXVJRDBnTUR0Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2EyVjVJR2x1SUhSM1pXVnVMblpoYkhWbGN5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFIzWldWdUxuWmhiSFZsY3k1b1lYTlBkMjVRY205d1pYSjBlU2hyWlhrcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2RtRnNkV1VnUFNCMGQyVmxiaTUyWVd4MVpYTmJhMlY1WFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCa2RYSmhkR2x2YmlBOUlFMWhkR2d1YldGNEtHUjFjbUYwYVc5dUxDQjJZV3gxWlM1a2RYSmhkR2x2YmlrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQjBhVzFsYkdsdVpTNXdkWE5vS0h0Y2JpQWdJQ0FnSUNBZ0lDQWdJR1p5YjIwNklHTjFjbkpsYm5SUWJHRjVhR1ZoWkN4Y2JpQWdJQ0FnSUNBZ0lDQWdJR1IxY21GMGFXOXVPaUJrZFhKaGRHbHZiaXhjYmlBZ0lDQWdJQ0FnSUNBZ0lHWnBjbVU2SUNoMGFXMWxLU0E5UGlCMGQyVmxiaTV6WldWclZHbHRaU2gwYVcxbEtWeHVJQ0FnSUNBZ0lDQjlLVHRjYmx4dUlDQWdJQ0FnSUNCamRYSnlaVzUwVUd4aGVXaGxZV1FnS3owZ1pIVnlZWFJwYjI0N1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WMGRYSnVJSHNnZEc5MFlXeFVhVzFsT2lCamRYSnlaVzUwVUd4aGVXaGxZV1FzSUhScGJXVnNhVzVsSUgwN1hHNTlPMXh1WEc1amIyNXpkQ0J6WlhSVWQyVmxibk1nUFNBb2V5QjBhVzFsYkdsdVpTd2dkR2x0Wld4cGJtVk1aVzVuZEdnc0lIWmhiSFZsY3l3Z1pIVnlZWFJwYjI0Z2ZTa2dQVDRnZTF4dUlDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnZEdsdFpXeHBibVZNWlc1bmRHZzdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCMGQyVmxiaUE5SUhScGJXVnNhVzVsVzJsZE8xeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCMGQyVmxibFJwYldVZ1BTQW9kbUZzZFdWekxuQXVZM1Z5Y21WdWRDQXFJR1IxY21GMGFXOXVLU0F0SUhSM1pXVnVMbVp5YjIwN1hHNWNiaUFnSUNBZ0lDQWdhV1lnS0hSM1pXVnVWR2x0WlNBK1BTQXROVEFnSmlZZ2RIZGxaVzVVYVcxbElEdzlJSFIzWldWdUxtUjFjbUYwYVc5dUlDc2dOVEFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFIzWldWdUxtWnBjbVVvZEhkbFpXNVVhVzFsS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JuMDdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR1oxYm1OMGFXOXVJSFJwYldWc2FXNWxLR1JsWml3Z2NISnZjSE1nUFNCN2ZTa2dlMXh1SUNBZ0lHTnZibk4wSUhzZ2RHOTBZV3hVYVcxbExDQjBhVzFsYkdsdVpTQjlJRDBnWVc1aGJIbDZaU2hrWldZcE8xeHVYRzRnSUNBZ2NtVjBkWEp1SUc1bGR5QlVkMlZsYmloN1hHNGdJQ0FnSUNBZ0lHVmhjMlU2SUdWaGMybHVaeTVzYVc1bFlYSXNYRzRnSUNBZ0lDQWdJQzR1TG5CeWIzQnpMRnh1SUNBZ0lDQWdJQ0JrZFhKaGRHbHZiam9nZEc5MFlXeFVhVzFsTEZ4dUlDQWdJQ0FnSUNCMllXeDFaWE02SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEE2SURGY2JpQWdJQ0FnSUNBZ2ZTeGNiaUFnSUNBZ0lDQWdkR2x0Wld4cGJtVTZJSFJwYldWc2FXNWxMRnh1SUNBZ0lDQWdJQ0IwYVcxbGJHbHVaVXhsYm1kMGFEb2dkR2x0Wld4cGJtVXViR1Z1WjNSb0xGeHVJQ0FnSUNBZ0lDQnZibEpsYm1SbGNqb2djMlYwVkhkbFpXNXpYRzRnSUNBZ2ZTazdYRzU5SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL3RpbWVsaW5lLmpzXG4gKiogbW9kdWxlIGlkID0gMTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLypcbiAgICBPdmVycmlkZSBgZ2V0dGVyYCBhbmQgYHNldHRlcmAgdG8gcmVpbXBsZW1lbnQgdGhlIGludGVyZmFjZSBmb3IgbmV3IGVsZW1lbnQgdHlwZXMuXG5cbiAgICBTZXQgYC5zdGF0ZU1hcGAgYXMgYW4gb2JqZWN0IGtleS92YWx1ZSBtYXAgdG8gdHJhbnNsYXRlIGluY29taW5nIGtleXMgdG9cbiAgICBBUEktc3BlY2lmaWMga2V5cy4gRm9yIGluc3RhbmNlLCB7IHg6ICd0cmFuc2xhdGVYJyB9LiBcblxuICAgIFNldCBgLnZhbHVlVHlwZU1hcGAgYXMgYW4gb2JqZWN0IGtleS92YWx1ZSBtYXAgdG8gcmV0dXJuIGEgdmFsdWUgdHlwZSB3aXRoXG4gICAgYGdldFZhbHVlVHlwZShrZXkpYCAoa2V5IHdpbGwgYmUgbWFwcGVkIGFjY29yZGluZyB0byBgc3RhdGVNYXBgKVxuKi9cblxudmFyIG1hcEtleSA9IGZ1bmN0aW9uIChrZXksIG1hcCkge1xuICAgIHJldHVybiBtYXAgPyBtYXBba2V5XSB8fCBrZXkgOiBrZXk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIC8qXG4gICAgICAgIEFkYXB0ZXIgaXMgc2V0dGVyIGZ1bmN0aW9uXG4gICAgICAgICBAcGFyYW0gW29iamVjdF06IE9iamVjdCB0byBzZXQgcHJvcGVydGllcyBvblxuICAgICAgICBAcGFyYW0gW29iamVjdF06IEtleS92YWx1ZSBwcm9wZXJ0aWVzIHRvIHNldFxuICAgICovXG4gICAgdmFyIGFkYXB0ZXIgPSBmdW5jdGlvbiAoZWxlbWVudCwgcHJvcHMsIGRhdGEpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuc3RhdGVNYXApIHtcbiAgICAgICAgICAgIC8vIFRyYW5zbGF0ZSBwcm9wc1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1hcHBlZEtleSA9IG1hcEtleShrZXksIG9wdGlvbnMuc3RhdGVNYXApO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXBwZWRLZXkgIT09IGtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHNbbWFwcGVkS2V5XSA9IHByb3BzW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgcHJvcHNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvcHRpb25zLnNldHRlcihlbGVtZW50LCBwcm9wcywgZGF0YSk7XG4gICAgfTtcblxuICAgIGFkYXB0ZXIuZ2V0ID0gZnVuY3Rpb24gKGVsZW1lbnQsIGtleSkge1xuICAgICAgICByZXR1cm4gb3B0aW9ucy5nZXR0ZXIoZWxlbWVudCwgbWFwS2V5KGtleSwgb3B0aW9ucy5zdGF0ZU1hcCkpO1xuICAgIH07XG4gICAgYWRhcHRlci5jaGVja1ZhbHVlVHlwZSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnMudmFsdWVUeXBlTWFwID8gb3B0aW9ucy52YWx1ZVR5cGVNYXBbbWFwS2V5KGtleSwgb3B0aW9ucy5zdGF0ZU1hcCldIDogZmFsc2U7XG4gICAgfTtcbiAgICBhZGFwdGVyLmdldEVsZW1lbnREYXRhID0gb3B0aW9ucy5nZXRFbGVtZW50RGF0YTtcblxuICAgIHJldHVybiBhZGFwdGVyO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFpHRndkR1Z5TDJGa1lYQjBaWEl1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3T3pzN096dEJRVlZCTEVsQlFVMHNVMEZCVXl4VlFVRkRMRWRCUVVRc1JVRkJUU3hIUVVGT08xZEJRV01zVFVGQlRTeEpRVUZKTEVkQlFVb3NTMEZCV1N4SFFVRmFMRWRCUVd0Q0xFZEJRWGhDTzBOQlFXUTdPMnRDUVVWQkxGVkJRVU1zVDBGQlJDeEZRVUZoT3pzN096czdRVUZQZUVJc1VVRkJUU3hWUVVGVkxGVkJRVU1zVDBGQlJDeEZRVUZWTEV0QlFWWXNSVUZCYVVJc1NVRkJha0lzUlVGQk1FSTdRVUZEZEVNc1dVRkJTU3hSUVVGUkxGRkJRVklzUlVGQmEwSTdPMEZCUld4Q0xHbENRVUZMTEVsQlFVa3NSMEZCU2l4SlFVRlhMRXRCUVdoQ0xFVkJRWFZDTzBGQlEyNUNMRzlDUVVGSkxFMUJRVTBzWTBGQlRpeERRVUZ4UWl4SFFVRnlRaXhEUVVGS0xFVkJRU3RDTzBGQlF6TkNMSGRDUVVGTkxGbEJRVmtzVDBGQlR5eEhRVUZRTEVWQlFWa3NVVUZCVVN4UlFVRlNMRU5CUVhoQ0xFTkJSSEZDT3p0QlFVY3pRaXgzUWtGQlNTeGpRVUZqTEVkQlFXUXNSVUZCYlVJN1FVRkRia0lzT0VKQlFVMHNVMEZCVGl4SlFVRnRRaXhOUVVGTkxFZEJRVTRzUTBGQmJrSXNRMEZFYlVJN1FVRkZia0lzSzBKQlFVOHNUVUZCVFN4SFFVRk9MRU5CUVZBc1EwRkdiVUk3Y1VKQlFYWkNPMmxDUVVoS08yRkJSRW83VTBGR1NqczdRVUZqUVN4bFFVRlBMRkZCUVZFc1RVRkJVaXhEUVVGbExFOUJRV1lzUlVGQmQwSXNTMEZCZUVJc1JVRkJLMElzU1VGQkwwSXNRMEZCVUN4RFFXWnpRenRMUVVFeFFpeERRVkJST3p0QlFYbENlRUlzV1VGQlVTeEhRVUZTTEVkQlFXTXNWVUZCUXl4UFFVRkVMRVZCUVZVc1IwRkJWanRsUVVGclFpeFJRVUZSTEUxQlFWSXNRMEZCWlN4UFFVRm1MRVZCUVhkQ0xFOUJRVThzUjBGQlVDeEZRVUZaTEZGQlFWRXNVVUZCVWl4RFFVRndRenRMUVVGc1FpeERRWHBDVlR0QlFUQkNlRUlzV1VGQlVTeGpRVUZTTEVkQlFYbENMRlZCUVVNc1IwRkJSRHRsUVVGVExGRkJRVkVzV1VGQlVpeEhRVUYxUWl4UlFVRlJMRmxCUVZJc1EwRkJjVUlzVDBGQlR5eEhRVUZRTEVWQlFWa3NVVUZCVVN4UlFVRlNMRU5CUVdwRExFTkJRWFpDTEVkQlFUWkZMRXRCUVRkRk8wdEJRVlFzUTBFeFFrUTdRVUV5UW5oQ0xGbEJRVkVzWTBGQlVpeEhRVUY1UWl4UlFVRlJMR05CUVZJc1EwRXpRa1E3TzBGQk5rSjRRaXhYUVVGUExFOUJRVkFzUTBFM1FuZENPME5CUVdJaUxDSm1hV3hsSWpvaVlXUmhjSFJsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRDOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SXZLbHh1SUNBZ0lFOTJaWEp5YVdSbElHQm5aWFIwWlhKZ0lHRnVaQ0JnYzJWMGRHVnlZQ0IwYnlCeVpXbHRjR3hsYldWdWRDQjBhR1VnYVc1MFpYSm1ZV05sSUdadmNpQnVaWGNnWld4bGJXVnVkQ0IwZVhCbGN5NWNibHh1SUNBZ0lGTmxkQ0JnTG5OMFlYUmxUV0Z3WUNCaGN5QmhiaUJ2WW1wbFkzUWdhMlY1TDNaaGJIVmxJRzFoY0NCMGJ5QjBjbUZ1YzJ4aGRHVWdhVzVqYjIxcGJtY2dhMlY1Y3lCMGIxeHVJQ0FnSUVGUVNTMXpjR1ZqYVdacFl5QnJaWGx6TGlCR2IzSWdhVzV6ZEdGdVkyVXNJSHNnZURvZ0ozUnlZVzV6YkdGMFpWZ25JSDB1SUZ4dVhHNGdJQ0FnVTJWMElHQXVkbUZzZFdWVWVYQmxUV0Z3WUNCaGN5QmhiaUJ2WW1wbFkzUWdhMlY1TDNaaGJIVmxJRzFoY0NCMGJ5QnlaWFIxY200Z1lTQjJZV3gxWlNCMGVYQmxJSGRwZEdoY2JpQWdJQ0JnWjJWMFZtRnNkV1ZVZVhCbEtHdGxlU2xnSUNoclpYa2dkMmxzYkNCaVpTQnRZWEJ3WldRZ1lXTmpiM0prYVc1bklIUnZJR0J6ZEdGMFpVMWhjR0FwWEc0cUwxeHVYRzVqYjI1emRDQnRZWEJMWlhrZ1BTQW9hMlY1TENCdFlYQXBJRDArSUcxaGNDQS9JRzFoY0Z0clpYbGRJSHg4SUd0bGVTQTZJR3RsZVR0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ0tHOXdkR2x2Ym5NcElEMCtJSHRjYmlBZ0lDQXZLbHh1SUNBZ0lDQWdJQ0JCWkdGd2RHVnlJR2x6SUhObGRIUmxjaUJtZFc1amRHbHZibHh1WEc0Z0lDQWdJQ0FnSUVCd1lYSmhiU0JiYjJKcVpXTjBYVG9nVDJKcVpXTjBJSFJ2SUhObGRDQndjbTl3WlhKMGFXVnpJRzl1WEc0Z0lDQWdJQ0FnSUVCd1lYSmhiU0JiYjJKcVpXTjBYVG9nUzJWNUwzWmhiSFZsSUhCeWIzQmxjblJwWlhNZ2RHOGdjMlYwWEc0Z0lDQWdLaTljYmlBZ0lDQmpiMjV6ZENCaFpHRndkR1Z5SUQwZ0tHVnNaVzFsYm5Rc0lIQnliM0J6TENCa1lYUmhLU0E5UGlCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2h2Y0hScGIyNXpMbk4wWVhSbFRXRndLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJVY21GdWMyeGhkR1VnY0hKdmNITmNiaUFnSUNBZ0lDQWdJQ0FnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUJ3Y205d2N5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNod2NtOXdjeTVvWVhOUGQyNVFjbTl3WlhKMGVTaHJaWGtwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElHMWhjSEJsWkV0bGVTQTlJRzFoY0V0bGVTaHJaWGtzSUc5d2RHbHZibk11YzNSaGRHVk5ZWEFwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHMWhjSEJsWkV0bGVTQWhQVDBnYTJWNUtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQndjbTl3YzF0dFlYQndaV1JMWlhsZElEMGdjSEp2Y0hOYmEyVjVYVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1JsYkdWMFpTQndjbTl3YzF0clpYbGRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHOXdkR2x2Ym5NdWMyVjBkR1Z5S0dWc1pXMWxiblFzSUhCeWIzQnpMQ0JrWVhSaEtUdGNiaUFnSUNCOU8xeHVYRzRnSUNBZ1lXUmhjSFJsY2k1blpYUWdQU0FvWld4bGJXVnVkQ3dnYTJWNUtTQTlQaUJ2Y0hScGIyNXpMbWRsZEhSbGNpaGxiR1Z0Wlc1MExDQnRZWEJMWlhrb2EyVjVMQ0J2Y0hScGIyNXpMbk4wWVhSbFRXRndLU2s3WEc0Z0lDQWdZV1JoY0hSbGNpNWphR1ZqYTFaaGJIVmxWSGx3WlNBOUlDaHJaWGtwSUQwK0lHOXdkR2x2Ym5NdWRtRnNkV1ZVZVhCbFRXRndJRDhnYjNCMGFXOXVjeTUyWVd4MVpWUjVjR1ZOWVhCYmJXRndTMlY1S0d0bGVTd2diM0IwYVc5dWN5NXpkR0YwWlUxaGNDbGRJRG9nWm1Gc2MyVTdYRzRnSUNBZ1lXUmhjSFJsY2k1blpYUkZiR1Z0Wlc1MFJHRjBZU0E5SUc5d2RHbHZibk11WjJWMFJXeGxiV1Z1ZEVSaGRHRTdYRzVjYmlBZ0lDQnlaWFIxY200Z1lXUmhjSFJsY2p0Y2JuMDdJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hZGFwdGVyL2FkYXB0ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5zZXR0ZXIgPSBleHBvcnRzLmdldHRlciA9IHVuZGVmaW5lZDtcblxudmFyIF9hZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVyJyk7XG5cbnZhciBfYWRhcHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hZGFwdGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGdldHRlciA9IGV4cG9ydHMuZ2V0dGVyID0gZnVuY3Rpb24gKGVsZW1lbnQsIGtleSkge1xuICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZShrZXkpO1xufTtcbnZhciBzZXR0ZXIgPSBleHBvcnRzLnNldHRlciA9IGZ1bmN0aW9uIChlbGVtZW50LCBwcm9wcykge1xuICAgIGZvciAodmFyIGtleSBpbiBwcm9wcykge1xuICAgICAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBwcm9wc1trZXldKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9ICgwLCBfYWRhcHRlcjIuZGVmYXVsdCkoeyBnZXR0ZXI6IGdldHRlciwgc2V0dGVyOiBzZXR0ZXIgfSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwyRjBkSEl0WVdSaGNIUmxjaTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096dEJRVUZCT3pzN096czdRVUZGVHl4SlFVRk5MREJDUVVGVExGVkJRVU1zVDBGQlJDeEZRVUZWTEVkQlFWWTdWMEZCYTBJc1VVRkJVU3haUVVGU0xFTkJRWEZDTEVkQlFYSkNPME5CUVd4Q08wRkJRMllzU1VGQlRTd3dRa0ZCVXl4VlFVRkRMRTlCUVVRc1JVRkJWU3hMUVVGV0xFVkJRVzlDTzBGQlEzUkRMRk5CUVVzc1NVRkJTU3hIUVVGS0xFbEJRVmNzUzBGQmFFSXNSVUZCZFVJN1FVRkRia0lzV1VGQlNTeE5RVUZOTEdOQlFVNHNRMEZCY1VJc1IwRkJja0lzUTBGQlNpeEZRVUVyUWp0QlFVTXpRaXh2UWtGQlVTeFpRVUZTTEVOQlFYRkNMRWRCUVhKQ0xFVkJRVEJDTEUxQlFVMHNSMEZCVGl4RFFVRXhRaXhGUVVReVFqdFRRVUV2UWp0TFFVUktPME5CUkd0Q096dHJRa0ZSVUN4MVFrRkJZeXhGUVVGRkxHTkJRVVlzUlVGQlZTeGpRVUZXTEVWQlFXUWlMQ0ptYVd4bElqb2lZWFIwY2kxaFpHRndkR1Z5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMEwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCamNtVmhkR1ZCWkdGd2RHVnlJR1p5YjIwZ0p5NHZZV1JoY0hSbGNpYzdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQm5aWFIwWlhJZ1BTQW9aV3hsYldWdWRDd2dhMlY1S1NBOVBpQmxiR1Z0Wlc1MExtZGxkRUYwZEhKcFluVjBaU2hyWlhrcE8xeHVaWGh3YjNKMElHTnZibk4wSUhObGRIUmxjaUE5SUNobGJHVnRaVzUwTENCd2NtOXdjeWtnUFQ0Z2UxeHVJQ0FnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUJ3Y205d2N5a2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb2NISnZjSE11YUdGelQzZHVVSEp2Y0dWeWRIa29hMlY1S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWld4bGJXVnVkQzV6WlhSQmRIUnlhV0oxZEdVb2EyVjVMQ0J3Y205d2MxdHJaWGxkS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JuMDdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR055WldGMFpVRmtZWEIwWlhJb2V5Qm5aWFIwWlhJc0lITmxkSFJsY2lCOUtUc2lYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hZGFwdGVyL2F0dHItYWRhcHRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDEzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfc3RhdGVNYXAgPSByZXF1aXJlKCcuL2Nzcy9zdGF0ZS1tYXAnKTtcblxudmFyIF9zdGF0ZU1hcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdGF0ZU1hcCk7XG5cbnZhciBfdmFsdWVUeXBlTWFwID0gcmVxdWlyZSgnLi9jc3MvdmFsdWUtdHlwZS1tYXAnKTtcblxudmFyIF92YWx1ZVR5cGVNYXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdmFsdWVUeXBlTWFwKTtcblxudmFyIF9idWlsZCA9IHJlcXVpcmUoJy4vY3NzL2J1aWxkJyk7XG5cbnZhciBfYnVpbGQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYnVpbGQpO1xuXG52YXIgX3ByZWZpeGVyID0gcmVxdWlyZSgnLi9jc3MvcHJlZml4ZXInKTtcblxudmFyIF9wcmVmaXhlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmVmaXhlcik7XG5cbnZhciBfdHJhbnNmb3JtUHJvcHMgPSByZXF1aXJlKCcuL2Nzcy90cmFuc2Zvcm0tcHJvcHMnKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2Zvcm1Qcm9wcyk7XG5cbnZhciBfYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcicpO1xuXG52YXIgX2FkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWRhcHRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9ICgwLCBfYWRhcHRlcjIuZGVmYXVsdCkoe1xuICAgIGdldHRlcjogZnVuY3Rpb24gKGVsZW1lbnQsIGtleSkge1xuICAgICAgICByZXR1cm4gIV90cmFuc2Zvcm1Qcm9wczIuZGVmYXVsdFtrZXldID8gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCwgbnVsbClbKDAsIF9wcmVmaXhlcjIuZGVmYXVsdCkoa2V5KV0gOiBfdmFsdWVUeXBlTWFwMi5kZWZhdWx0W2tleV0uZGVmYXVsdFByb3BzLmN1cnJlbnQgfHwgMDtcbiAgICB9LFxuICAgIHNldHRlcjogZnVuY3Rpb24gKGVsZW1lbnQsIHByb3BzKSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LnN0eWxlLmNzc1RleHQgKz0gKDAsIF9idWlsZDIuZGVmYXVsdCkocHJvcHMpO1xuICAgIH0sXG4gICAgdmFsdWVUeXBlTWFwOiBfdmFsdWVUeXBlTWFwMi5kZWZhdWx0LFxuICAgIHN0YXRlTWFwOiBfc3RhdGVNYXAyLmRlZmF1bHRcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMMk56Y3kxaFpHRndkR1Z5TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdRVUZCUVRzN096dEJRVU5CT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3TzBGQlEwRTdPenM3T3p0clFrRkZaU3gxUWtGQll6dEJRVU42UWl4WlFVRlJMRlZCUVVNc1QwRkJSQ3hGUVVGVkxFZEJRVllzUlVGQmEwSTdRVUZEZEVJc1pVRkJUeXhEUVVGRkxIbENRVUZsTEVkQlFXWXNRMEZCUkN4SFFVTktMRTlCUVU4c1owSkJRVkFzUTBGQmQwSXNUMEZCZUVJc1JVRkJhVU1zU1VGQmFrTXNSVUZCZFVNc2QwSkJRVk1zUjBGQlZDeERRVUYyUXl4RFFVUkhMRWRCUlVnc2RVSkJRV0VzUjBGQllpeEZRVUZyUWl4WlFVRnNRaXhEUVVFclFpeFBRVUV2UWl4SlFVRXdReXhEUVVFeFF5eERRVWhyUWp0TFFVRnNRanRCUVV0U0xGbEJRVkVzVlVGQlF5eFBRVUZFTEVWQlFWVXNTMEZCVmp0bFFVRnZRaXhSUVVGUkxFdEJRVklzUTBGQll5eFBRVUZrTEVsQlFYbENMSEZDUVVGdlFpeExRVUZ3UWl4RFFVRjZRanRMUVVGd1FqdEJRVU5TTEhkRFFWQjVRanRCUVZGNlFpeG5RMEZTZVVJN1EwRkJaQ0lzSW1acGJHVWlPaUpqYzNNdFlXUmhjSFJsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRDOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2MzUmhkR1ZOWVhBZ1puSnZiU0FuTGk5amMzTXZjM1JoZEdVdGJXRndKenRjYm1sdGNHOXlkQ0IyWVd4MVpWUjVjR1ZOWVhBZ1puSnZiU0FuTGk5amMzTXZkbUZzZFdVdGRIbHdaUzF0WVhBbk8xeHVhVzF3YjNKMElHSjFhV3hrVUhKdmNHVnlkSGxUZEhKcGJtY2dabkp2YlNBbkxpOWpjM012WW5WcGJHUW5PMXh1YVcxd2IzSjBJSEJ5WldacGVHVnlJR1p5YjIwZ0p5NHZZM056TDNCeVpXWnBlR1Z5Snp0Y2JtbHRjRzl5ZENCMGNtRnVjMlp2Y20xUWNtOXdjeUJtY205dElDY3VMMk56Y3k5MGNtRnVjMlp2Y20wdGNISnZjSE1uTzF4dWFXMXdiM0owSUdOeVpXRjBaVUZrWVhCMFpYSWdabkp2YlNBbkxpOWhaR0Z3ZEdWeUp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdZM0psWVhSbFFXUmhjSFJsY2loN1hHNGdJQ0FnWjJWMGRHVnlPaUFvWld4bGJXVnVkQ3dnYTJWNUtTQTlQaUI3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUFvSVhSeVlXNXpabTl5YlZCeWIzQnpXMnRsZVYwcElEOWNiaUFnSUNBZ0lDQWdJQ0FnSUhkcGJtUnZkeTVuWlhSRGIyMXdkWFJsWkZOMGVXeGxLR1ZzWlcxbGJuUXNJRzUxYkd3cFczQnlaV1pwZUdWeUtHdGxlU2xkSURwY2JpQWdJQ0FnSUNBZ0lDQWdJSFpoYkhWbFZIbHdaVTFoY0Z0clpYbGRMbVJsWm1GMWJIUlFjbTl3Y3k1amRYSnlaVzUwSUh4OElEQTdYRzRnSUNBZ2ZTeGNiaUFnSUNCelpYUjBaWEk2SUNobGJHVnRaVzUwTENCd2NtOXdjeWtnUFQ0Z1pXeGxiV1Z1ZEM1emRIbHNaUzVqYzNOVVpYaDBJQ3M5SUdKMWFXeGtVSEp2Y0dWeWRIbFRkSEpwYm1jb2NISnZjSE1wTEZ4dUlDQWdJSFpoYkhWbFZIbHdaVTFoY0N4Y2JpQWdJQ0J6ZEdGMFpVMWhjRnh1ZlNrN1hHNWNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9jc3MtYWRhcHRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDE0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcicpO1xuXG52YXIgX2FkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWRhcHRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9ICgwLCBfYWRhcHRlcjIuZGVmYXVsdCkoe1xuICAgIGdldHRlcjogZnVuY3Rpb24gKG9iamVjdCwga2V5KSB7XG4gICAgICAgIHJldHVybiBvYmplY3Rba2V5XTtcbiAgICB9LFxuICAgIHNldHRlcjogZnVuY3Rpb24gKG9iamVjdCwgcHJvcHMpIHtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgICAgICAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIG9iamVjdFtrZXldID0gcHJvcHNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMMjlpYW1WamRDMWhaR0Z3ZEdWeUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3UVVGQlFUczdPenM3TzJ0Q1FVVmxMSFZDUVVGak8wRkJRM3BDTEZsQlFWRXNWVUZCUXl4TlFVRkVMRVZCUVZNc1IwRkJWRHRsUVVGcFFpeFBRVUZQTEVkQlFWQTdTMEZCYWtJN1FVRkRVaXhaUVVGUkxGVkJRVU1zVFVGQlJDeEZRVUZUTEV0QlFWUXNSVUZCYlVJN1FVRkRka0lzWVVGQlN5eEpRVUZKTEVkQlFVb3NTVUZCVnl4TFFVRm9RaXhGUVVGMVFqdEJRVU51UWl4blFrRkJTU3hOUVVGTkxHTkJRVTRzUTBGQmNVSXNSMEZCY2tJc1EwRkJTaXhGUVVFclFqdEJRVU16UWl4MVFrRkJUeXhIUVVGUUxFbEJRV01zVFVGQlRTeEhRVUZPTEVOQlFXUXNRMEZFTWtJN1lVRkJMMEk3VTBGRVNqdExRVVJKTzBOQlJrY2lMQ0ptYVd4bElqb2liMkpxWldOMExXRmtZWEIwWlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUXZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElHTnlaV0YwWlVGa1lYQjBaWElnWm5KdmJTQW5MaTloWkdGd2RHVnlKenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnWTNKbFlYUmxRV1JoY0hSbGNpaDdYRzRnSUNBZ1oyVjBkR1Z5T2lBb2IySnFaV04wTENCclpYa3BJRDArSUc5aWFtVmpkRnRyWlhsZExGeHVJQ0FnSUhObGRIUmxjam9nS0c5aWFtVmpkQ3dnY0hKdmNITXBJRDArSUh0Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2EyVjVJR2x1SUhCeWIzQnpLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvY0hKdmNITXVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2EyVjVLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUc5aWFtVmpkRnRyWlhsZElEMGdjSEp2Y0hOYmEyVjVYVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNibjBwT3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FkYXB0ZXIvb2JqZWN0LWFkYXB0ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5nZXRFbGVtZW50RGF0YSA9IGV4cG9ydHMuc2V0dGVyID0gZXhwb3J0cy5nZXR0ZXIgPSB1bmRlZmluZWQ7XG5cbnZhciBfc3RhdGVNYXAgPSByZXF1aXJlKCcuL2Nzcy9zdGF0ZS1tYXAnKTtcblxudmFyIF9zdGF0ZU1hcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdGF0ZU1hcCk7XG5cbnZhciBfdmFsdWVUeXBlTWFwID0gcmVxdWlyZSgnLi9zdmcvdmFsdWUtdHlwZS1tYXAnKTtcblxudmFyIF92YWx1ZVR5cGVNYXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdmFsdWVUeXBlTWFwKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wcyA9IHJlcXVpcmUoJy4vY3NzL3RyYW5zZm9ybS1wcm9wcycpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zZm9ybVByb3BzKTtcblxudmFyIF9idWlsZCA9IHJlcXVpcmUoJy4vc3ZnL2J1aWxkJyk7XG5cbnZhciBfYnVpbGQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYnVpbGQpO1xuXG52YXIgX2F0dHJBZGFwdGVyID0gcmVxdWlyZSgnLi9hdHRyLWFkYXB0ZXInKTtcblxudmFyIF9hZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVyJyk7XG5cbnZhciBfYWRhcHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hZGFwdGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGdldHRlciA9IGV4cG9ydHMuZ2V0dGVyID0gZnVuY3Rpb24gKGVsZW1lbnQsIGtleSkge1xuICAgIHJldHVybiAhX3RyYW5zZm9ybVByb3BzMi5kZWZhdWx0W2tleV0gPyAoMCwgX2F0dHJBZGFwdGVyLmdldHRlcikoZWxlbWVudCwga2V5KSA6IF92YWx1ZVR5cGVNYXAyLmRlZmF1bHRba2V5XSAmJiBfdmFsdWVUeXBlTWFwMi5kZWZhdWx0W2tleV0uZGVmYXVsdFByb3BzID8gX3ZhbHVlVHlwZU1hcDIuZGVmYXVsdFtrZXldLmRlZmF1bHRQcm9wcy5jdXJyZW50IDogMDtcbn07XG52YXIgc2V0dGVyID0gZXhwb3J0cy5zZXR0ZXIgPSBmdW5jdGlvbiAoZWxlbWVudCwgcHJvcHMsIGRhdGEpIHtcbiAgICByZXR1cm4gKDAsIF9hdHRyQWRhcHRlci5zZXR0ZXIpKGVsZW1lbnQsICgwLCBfYnVpbGQyLmRlZmF1bHQpKHByb3BzLCBkYXRhKSk7XG59O1xudmFyIGdldEVsZW1lbnREYXRhID0gZXhwb3J0cy5nZXRFbGVtZW50RGF0YSA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgdmFyIGJCb3ggPSBlbGVtZW50LmdldEJCb3goKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB4OiBiQm94LngsXG4gICAgICAgIHk6IGJCb3gueSxcbiAgICAgICAgd2lkdGg6IGJCb3gud2lkdGgsXG4gICAgICAgIGhlaWdodDogYkJveC5oZWlnaHRcbiAgICB9O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gKDAsIF9hZGFwdGVyMi5kZWZhdWx0KSh7IGdldHRlcjogZ2V0dGVyLCBzZXR0ZXI6IHNldHRlciwgc3RhdGVNYXA6IF9zdGF0ZU1hcDIuZGVmYXVsdCwgdmFsdWVUeXBlTWFwOiBfdmFsdWVUeXBlTWFwMi5kZWZhdWx0LCBnZXRFbGVtZW50RGF0YTogZ2V0RWxlbWVudERhdGEgfSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwzTjJaeTFoWkdGd2RHVnlMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN08wRkJRVUU3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3TzBGQlEwRTdPenM3UVVGRFFUczdRVUZEUVRzN096czdPMEZCUlU4c1NVRkJUU3d3UWtGQlV5eFZRVUZETEU5QlFVUXNSVUZCVlN4SFFVRldPMWRCUVd0Q0xFTkJRVVVzZVVKQlFXVXNSMEZCWml4RFFVRkVMRWRCUVhkQ0xIbENRVUZYTEU5QlFWZ3NSVUZCYjBJc1IwRkJjRUlzUTBGQmVrSXNSMEZCYjBRc2MwSkJRVU1zUTBGQllTeEhRVUZpTEV0QlFYRkNMSFZDUVVGaExFZEJRV0lzUlVGQmEwSXNXVUZCYkVJc1IwRkJhME1zZFVKQlFXRXNSMEZCWWl4RlFVRnJRaXhaUVVGc1FpeERRVUVyUWl4UFFVRXZRaXhIUVVGNVF5eERRVUZxUnp0RFFVRjBSVHRCUVVObUxFbEJRVTBzTUVKQlFWTXNWVUZCUXl4UFFVRkVMRVZCUVZVc1MwRkJWaXhGUVVGcFFpeEpRVUZxUWp0WFFVRXdRaXg1UWtGQlZ5eFBRVUZZTEVWQlFXOUNMSEZDUVVGTkxFdEJRVTRzUlVGQllTeEpRVUZpTEVOQlFYQkNPME5CUVRGQ08wRkJRMllzU1VGQlRTd3dRMEZCYVVJc1ZVRkJReXhQUVVGRUxFVkJRV0U3UVVGRGRrTXNVVUZCVFN4UFFVRlBMRkZCUVZFc1QwRkJVaXhGUVVGUUxFTkJSR2xETzBGQlJYWkRMRmRCUVU4N1FVRkRTQ3hYUVVGSExFdEJRVXNzUTBGQlREdEJRVU5JTEZkQlFVY3NTMEZCU3l4RFFVRk1PMEZCUTBnc1pVRkJUeXhMUVVGTExFdEJRVXc3UVVGRFVDeG5Ra0ZCVVN4TFFVRkxMRTFCUVV3N1MwRktXaXhEUVVaMVF6dERRVUZpT3p0clFrRlZaaXgxUWtGQll5eEZRVUZGTEdOQlFVWXNSVUZCVlN4alFVRldMRVZCUVd0Q0xEUkNRVUZzUWl4RlFVRTBRaXh2UTBGQk5VSXNSVUZCTUVNc09FSkJRVEZETEVWQlFXUWlMQ0ptYVd4bElqb2ljM1puTFdGa1lYQjBaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhOMFlYUmxUV0Z3SUdaeWIyMGdKeTR2WTNOekwzTjBZWFJsTFcxaGNDYzdYRzVwYlhCdmNuUWdkbUZzZFdWVWVYQmxUV0Z3SUdaeWIyMGdKeTR2YzNabkwzWmhiSFZsTFhSNWNHVXRiV0Z3Snp0Y2JtbHRjRzl5ZENCMGNtRnVjMlp2Y20xUWNtOXdjeUJtY205dElDY3VMMk56Y3k5MGNtRnVjMlp2Y20wdGNISnZjSE1uTzF4dWFXMXdiM0owSUdKMWFXeGtJR1p5YjIwZ0p5NHZjM1puTDJKMWFXeGtKenRjYm1sdGNHOXlkQ0I3SUdkbGRIUmxjaUJoY3lCaGRIUnlSMlYwZEdWeUxDQnpaWFIwWlhJZ1lYTWdZWFIwY2xObGRIUmxjaUI5SUdaeWIyMGdKeTR2WVhSMGNpMWhaR0Z3ZEdWeUp6dGNibWx0Y0c5eWRDQmpjbVZoZEdWQlpHRndkR1Z5SUdaeWIyMGdKeTR2WVdSaGNIUmxjaWM3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JuWlhSMFpYSWdQU0FvWld4bGJXVnVkQ3dnYTJWNUtTQTlQaUFvSVhSeVlXNXpabTl5YlZCeWIzQnpXMnRsZVYwcElEOGdZWFIwY2tkbGRIUmxjaWhsYkdWdFpXNTBMQ0JyWlhrcElEb2dLSFpoYkhWbFZIbHdaVTFoY0Z0clpYbGRJQ1ltSUhaaGJIVmxWSGx3WlUxaGNGdHJaWGxkTG1SbFptRjFiSFJRY205d2N5a2dQeUIyWVd4MVpWUjVjR1ZOWVhCYmEyVjVYUzVrWldaaGRXeDBVSEp2Y0hNdVkzVnljbVZ1ZENBNklEQTdYRzVsZUhCdmNuUWdZMjl1YzNRZ2MyVjBkR1Z5SUQwZ0tHVnNaVzFsYm5Rc0lIQnliM0J6TENCa1lYUmhLU0E5UGlCaGRIUnlVMlYwZEdWeUtHVnNaVzFsYm5Rc0lHSjFhV3hrS0hCeWIzQnpMQ0JrWVhSaEtTazdYRzVsZUhCdmNuUWdZMjl1YzNRZ1oyVjBSV3hsYldWdWRFUmhkR0VnUFNBb1pXeGxiV1Z1ZENrZ1BUNGdlMXh1SUNBZ0lHTnZibk4wSUdKQ2IzZ2dQU0JsYkdWdFpXNTBMbWRsZEVKQ2IzZ29LVHRjYmlBZ0lDQnlaWFIxY200Z2UxeHVJQ0FnSUNBZ0lDQjRPaUJpUW05NExuZ3NYRzRnSUNBZ0lDQWdJSGs2SUdKQ2IzZ3VlU3hjYmlBZ0lDQWdJQ0FnZDJsa2RHZzZJR0pDYjNndWQybGtkR2dzSUZ4dUlDQWdJQ0FnSUNCb1pXbG5hSFE2SUdKQ2IzZ3VhR1ZwWjJoMFhHNGdJQ0FnZlR0Y2JuMDdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR055WldGMFpVRmtZWEIwWlhJb2V5Qm5aWFIwWlhJc0lITmxkSFJsY2l3Z2MzUmhkR1ZOWVhBc0lIWmhiSFZsVkhsd1pVMWhjQ3dnWjJWMFJXeGxiV1Z1ZEVSaGRHRWdmU2s3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FkYXB0ZXIvc3ZnLWFkYXB0ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2J1aWxkID0gcmVxdWlyZSgnLi9zdmctcGF0aC9idWlsZCcpO1xuXG52YXIgX2J1aWxkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2J1aWxkKTtcblxudmFyIF9zdGF0ZU1hcCA9IHJlcXVpcmUoJy4vY3NzL3N0YXRlLW1hcCcpO1xuXG52YXIgX3N0YXRlTWFwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0YXRlTWFwKTtcblxudmFyIF9zdmdBZGFwdGVyID0gcmVxdWlyZSgnLi9zdmctYWRhcHRlcicpO1xuXG52YXIgX2FkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXInKTtcblxudmFyIF9hZGFwdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FkYXB0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSAoMCwgX2FkYXB0ZXIyLmRlZmF1bHQpKHtcbiAgICBnZXR0ZXI6IF9zdmdBZGFwdGVyLmdldHRlcixcbiAgICBzZXR0ZXI6IGZ1bmN0aW9uIChlbGVtZW50LCBwcm9wcywgb3B0cykge1xuICAgICAgICB2YXIgcGF0aExlbmd0aCA9IG9wdHMgPyBvcHRzLnBhdGhMZW5ndGggOiAwO1xuICAgICAgICByZXR1cm4gKDAsIF9zdmdBZGFwdGVyLnNldHRlcikoZWxlbWVudCwgKDAsIF9idWlsZDIuZGVmYXVsdCkocHJvcHMsIHBhdGhMZW5ndGgpLCBvcHRzKTtcbiAgICB9LFxuICAgIHN0YXRlTWFwOiBfc3RhdGVNYXAyLmRlZmF1bHQsXG4gICAgZ2V0RWxlbWVudERhdGE6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7IHBhdGhMZW5ndGg6IGVsZW1lbnQuZ2V0VG90YWxMZW5ndGgoKSB9LCAoMCwgX3N2Z0FkYXB0ZXIuZ2V0RWxlbWVudERhdGEpKGVsZW1lbnQpKTtcbiAgICB9XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFpHRndkR1Z5TDNOMlp5MXdZWFJvTFdGa1lYQjBaWEl1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPMEZCUVVFN096czdRVUZEUVRzN096dEJRVU5CT3p0QlFVTkJPenM3T3pzN2EwSkJSV1VzZFVKQlFXTTdRVUZEZWtJc09FSkJSSGxDTzBGQlJYcENMRmxCUVZFc1ZVRkJReXhQUVVGRUxFVkJRVlVzUzBGQlZpeEZRVUZwUWl4SlFVRnFRaXhGUVVFd1FqdEJRVU01UWl4WlFVRk5MR0ZCUVdFc1QwRkJUeXhMUVVGTExGVkJRVXdzUjBGQmEwSXNRMEZCZWtJc1EwRkVWenRCUVVVNVFpeGxRVUZQTEhkQ1FVRlBMRTlCUVZBc1JVRkJaMElzY1VKQlFVMHNTMEZCVGl4RlFVRmhMRlZCUVdJc1EwRkJhRUlzUlVGQk1FTXNTVUZCTVVNc1EwRkJVQ3hEUVVZNFFqdExRVUV4UWp0QlFVbFNMR2REUVU1NVFqdEJRVTk2UWl4dlFrRkJaMElzVlVGQlF5eFBRVUZFT3pCQ1FVRm5RaXhaUVVGWkxGRkJRVkVzWTBGQlVpeEZRVUZhTEVsQlFYbERMR2REUVVGbExFOUJRV1k3UzBGQmVrUTdRMEZRVENJc0ltWnBiR1VpT2lKemRtY3RjR0YwYUMxaFpHRndkR1Z5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMEwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCaWRXbHNaQ0JtY205dElDY3VMM04yWnkxd1lYUm9MMkoxYVd4a0p6dGNibWx0Y0c5eWRDQnpkR0YwWlUxaGNDQm1jbTl0SUNjdUwyTnpjeTl6ZEdGMFpTMXRZWEFuTzF4dWFXMXdiM0owSUhzZ1oyVjBkR1Z5TENCelpYUjBaWElzSUdkbGRFVnNaVzFsYm5SRVlYUmhJSDBnWm5KdmJTQW5MaTl6ZG1jdFlXUmhjSFJsY2ljN1hHNXBiWEJ2Y25RZ1kzSmxZWFJsUVdSaGNIUmxjaUJtY205dElDY3VMMkZrWVhCMFpYSW5PMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JqY21WaGRHVkJaR0Z3ZEdWeUtIdGNiaUFnSUNCblpYUjBaWElzWEc0Z0lDQWdjMlYwZEdWeU9pQW9aV3hsYldWdWRDd2djSEp2Y0hNc0lHOXdkSE1wSUQwK0lIdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2NHRjBhRXhsYm1kMGFDQTlJRzl3ZEhNZ1B5QnZjSFJ6TG5CaGRHaE1aVzVuZEdnZ09pQXdPMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdjMlYwZEdWeUtHVnNaVzFsYm5Rc0lHSjFhV3hrS0hCeWIzQnpMQ0J3WVhSb1RHVnVaM1JvS1N3Z2IzQjBjeWs3WEc0Z0lDQWdmU3hjYmlBZ0lDQnpkR0YwWlUxaGNDeGNiaUFnSUNCblpYUkZiR1Z0Wlc1MFJHRjBZVG9nS0dWc1pXMWxiblFwSUQwK0lDaDdJSEJoZEdoTVpXNW5kR2c2SUdWc1pXMWxiblF1WjJWMFZHOTBZV3hNWlc1bmRHZ29LU3dnTGk0dVoyVjBSV3hsYldWdWRFUmhkR0VvWld4bGJXVnVkQ2tnZlNsY2JuMHBPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9zdmctcGF0aC1hZGFwdGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9jcmVhdGVFYXNpbmcgPSByZXF1aXJlKCcuL2NyZWF0ZS1lYXNpbmcnKTtcblxudmFyIF9jcmVhdGVFYXNpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlRWFzaW5nKTtcblxudmFyIF9jcmVhdGVCZXppZXIgPSByZXF1aXJlKCcuL2NyZWF0ZS1iZXppZXInKTtcblxudmFyIF9jcmVhdGVCZXppZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQmV6aWVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gVmFsdWVzXG4vKlxuICAgIEVhc2luZyBmdW5jdGlvbnNcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgXG4gICAgR2VuZXJhdGVzIGFuZCBwcm92aWRlcyBlYXNpbmcgZnVuY3Rpb25zIGJhc2VkIG9uIGJhc2VGdW5jdGlvbiBkZWZpbml0aW9uc1xuICAgIFxuICAgIEEgY2FsbCB0byBlYXNpbmdGdW5jdGlvbi5nZXQoJ2Z1bmN0aW9uTmFtZScpIHJldHVybnMgYSBmdW5jdGlvbiB0aGF0IGNhbiBiZSBwYXNzZWQ6XG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MgMC0xXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBBbXAgbW9kaWZpZXIsIG9ubHkgYWNjZXB0ZWQgaW4gc29tZSBlYXNpbmcgZnVuY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQgaXMgdXNlZCB0byBhZGp1c3Qgb3ZlcmFsbCBzdHJlbmd0aFxuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBFYXNlZCBwcm9ncmVzc1xuICAgICAgICBcbiAgICBXZSBjYW4gZ2VuZXJhdGUgbmV3IGZ1bmN0aW9ucyBieSBzZW5kaW5nIGFuIGVhc2luZyBmdW5jdGlvbiB0aHJvdWdoIGVhc2luZ0Z1bmN0aW9uLmV4dGVuZChuYW1lLCBtZXRob2QpLlxuICAgIFdoaWNoIHdpbGwgbWFrZSBuYW1lSW4sIG5hbWVPdXQgYW5kIG5hbWVJbk91dCBmdW5jdGlvbnMgYXZhaWxhYmxlIHRvIHVzZS5cbiAgICAgICAgXG4gICAgRWFzaW5nIGZ1bmN0aW9ucyBmcm9tIFJvYmVydCBQZW5uZXJcbiAgICBodHRwOi8vd3d3LnJvYmVydHBlbm5lci5jb20vZWFzaW5nL1xuICAgICAgICBcbiAgICBCZXppZXIgY3VydmUgaW50ZXJwcmV0b3IgY3JlYXRlZCBmcm9tIEdhw6t0YW4gUmVuYXVkZWF1J3Mgb3JpZ2luYWwgQmV6aWVyRWFzaW5nICBcbiAgICBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNpbmcvYmxvYi9tYXN0ZXIvaW5kZXguanMgIFxuICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9MSUNFTlNFXG5cbiAgICBBbnRpY2lwYXRlIGVhc2luZyBjcmVhdGVkIGJ5IEVsbGlvdCBHaW5vXG4gICAgaHR0cHM6Ly90d2l0dGVyLmNvbS9FbGxpb3RHZW5vXG4qL1xuLy8gSW1wb3J0c1xudmFyIERFRkFVTFRfQkFDS19TVFJFTkdUSCA9IDEuNTI1O1xudmFyIERFRkFVTFRfUE9XX1NUUkVOR1RIID0gMjtcblxuLypcbiAgICBFYWNoIG9mIHRoZXNlIGJhc2UgZnVuY3Rpb25zIGlzIGFuIGVhc2VJblxuICAgIFxuICAgIE9uIGluaXQsIHdlIHVzZSAubWlycm9yIGFuZCAucmV2ZXJzZSB0byBnZW5lcmF0ZSBlYXNlSW5PdXQgYW5kXG4gICAgZWFzZU91dCBmdW5jdGlvbnMgcmVzcGVjdGl2ZWx5LlxuKi9cbnZhciBiYXNlRWFzaW5nID0ge1xuICAgIGVhc2U6IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICB2YXIgc3RyZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBERUZBVUxUX1BPV19TVFJFTkdUSCA6IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgcmV0dXJuIE1hdGgucG93KHByb2dyZXNzLCBzdHJlbmd0aCk7XG4gICAgfSxcbiAgICBjaXJjOiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgcmV0dXJuIDEgLSBNYXRoLnNpbihNYXRoLmFjb3MocHJvZ3Jlc3MpKTtcbiAgICB9LFxuICAgIGJhY2s6IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICB2YXIgc3RyZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBERUZBVUxUX0JBQ0tfU1RSRU5HVEggOiBhcmd1bWVudHNbMV07XG4gICAgICAgIHJldHVybiBwcm9ncmVzcyAqIHByb2dyZXNzICogKChzdHJlbmd0aCArIDEpICogcHJvZ3Jlc3MgLSBzdHJlbmd0aCk7XG4gICAgfVxufTtcblxuLy8gVXRpbGl0eSBmdW5jdGlvbnNcbnZhciBnZW5lcmF0ZVBvd2VyRWFzaW5nID0gZnVuY3Rpb24gKHN0cmVuZ3RoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICByZXR1cm4gYmFzZUVhc2luZy5lYXNlKHByb2dyZXNzLCBzdHJlbmd0aCk7XG4gICAgfTtcbn07XG5cblsnY3ViaWMnLCAncXVhcnQnLCAncXVpbnQnXS5mb3JFYWNoKGZ1bmN0aW9uIChlYXNpbmdOYW1lLCBpKSB7XG4gICAgcmV0dXJuIGJhc2VFYXNpbmdbZWFzaW5nTmFtZV0gPSBnZW5lcmF0ZVBvd2VyRWFzaW5nKGkgKyAzKTtcbn0pO1xuXG4vLyBHZW5lcmF0ZSBpbi9vdXQvaW5PdXQgdmFyaWF0aW9uc1xuZm9yICh2YXIga2V5IGluIGJhc2VFYXNpbmcpIHtcbiAgICBpZiAoYmFzZUVhc2luZy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHZhciBlYXNpbmdGdW5jdGlvbiA9ICgwLCBfY3JlYXRlRWFzaW5nMi5kZWZhdWx0KShiYXNlRWFzaW5nW2tleV0pO1xuICAgICAgICBiYXNlRWFzaW5nW2tleSArICdJbiddID0gZWFzaW5nRnVuY3Rpb24uaW47XG4gICAgICAgIGJhc2VFYXNpbmdba2V5ICsgJ091dCddID0gZWFzaW5nRnVuY3Rpb24ub3V0O1xuICAgICAgICBiYXNlRWFzaW5nW2tleSArICdJbk91dCddID0gZWFzaW5nRnVuY3Rpb24uaW5PdXQ7XG4gICAgfVxufVxuXG5iYXNlRWFzaW5nLmxpbmVhciA9IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgIHJldHVybiBwcm9ncmVzcztcbn07XG5iYXNlRWFzaW5nLmFudGljaXBhdGUgPSBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICB2YXIgc3RyZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBERUZBVUxUX0JBQ0tfU1RSRU5HVEggOiBhcmd1bWVudHNbMV07XG4gICAgcmV0dXJuIChwcm9ncmVzcyAqPSAyKSA8IDEgPyAwLjUgKiBiYXNlRWFzaW5nLmJhY2tJbihwcm9ncmVzcywgc3RyZW5ndGgpIDogMC41ICogKDIgLSBNYXRoLnBvdygyLCAtMTAgKiAocHJvZ3Jlc3MgLSAxKSkpO1xufTtcblxuYmFzZUVhc2luZy5jcmVhdGVWYXJpYXRpb25zID0gX2NyZWF0ZUVhc2luZzIuZGVmYXVsdDtcbmJhc2VFYXNpbmcuY3ViaWNCZXppZXIgPSBfY3JlYXRlQmV6aWVyMi5kZWZhdWx0O1xuYmFzZUVhc2luZy5tb2RpZnkgPSBmdW5jdGlvbiAoZWFzaW5nKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgcmV0dXJuIGVhc2luZy5hcHBseSh1bmRlZmluZWQsIFtwcm9ncmVzc10uY29uY2F0KGFyZ3MpKTtcbiAgICB9O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gYmFzZUVhc2luZztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDJWaGMybHVaeTl3Y21WelpYUXRaV0Z6YVc1bkxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3UVVFd1FrRTdPenM3UVVGRFFUczdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3TzBGQlIwRXNTVUZCVFN4M1FrRkJkMElzUzBGQmVFSTdRVUZEVGl4SlFVRk5MSFZDUVVGMVFpeERRVUYyUWpzN096czdPenM3UVVGUlRpeEpRVUZOTEdGQlFXRTdRVUZEWml4VlFVRk5MRlZCUVVNc1VVRkJSRHRaUVVGWExHbEZRVUZYTzNkQ1FVRjVRaXhWUVVGWk8wdEJRVE5FTzBGQlEwNHNWVUZCVFR0bFFVRlpMRWxCUVVrc1MwRkJTeXhIUVVGTUxFTkJRVk1zUzBGQlN5eEpRVUZNTEVOQlFWVXNVVUZCVml4RFFVRlVMRU5CUVVvN1MwRkJXanRCUVVOT0xGVkJRVTBzVlVGQlF5eFJRVUZFTzFsQlFWY3NhVVZCUVZjN1pVRkJNRUlzVVVGQlF5eEhRVUZYTEZGQlFWZ3NTVUZCZDBJc1EwRkJReXhYUVVGWExFTkJRVmdzUTBGQlJDeEhRVUZwUWl4UlFVRnFRaXhIUVVFMFFpeFJRVUUxUWl4RFFVRjZRanRMUVVGb1JEdERRVWhLT3pzN1FVRlBUaXhKUVVGTkxITkNRVUZ6UWl4VlFVRkRMRkZCUVVRN1YwRkJZeXhWUVVGRExGRkJRVVE3WlVGQll5eFhRVUZYTEVsQlFWZ3NRMEZCWjBJc1VVRkJhRUlzUlVGQk1FSXNVVUZCTVVJN1MwRkJaRHREUVVGa096dEJRVVUxUWl4RFFVRkRMRTlCUVVRc1JVRkJWU3hQUVVGV0xFVkJRVzFDTEU5QlFXNUNMRVZCUVRSQ0xFOUJRVFZDTEVOQlFXOURMRlZCUVVNc1ZVRkJSQ3hGUVVGaExFTkJRV0k3VjBGQmJVSXNWMEZCVnl4VlFVRllMRWxCUVhsQ0xHOUNRVUZ2UWl4SlFVRkpMRU5CUVVvc1EwRkJOME03UTBGQmJrSXNRMEZCY0VNN096dEJRVWRCTEV0QlFVc3NTVUZCU1N4SFFVRktMRWxCUVZjc1ZVRkJhRUlzUlVGQk5FSTdRVUZEZUVJc1VVRkJTU3hYUVVGWExHTkJRVmdzUTBGQk1FSXNSMEZCTVVJc1EwRkJTaXhGUVVGdlF6dEJRVU5vUXl4WlFVRk5MR2xDUVVGcFFpdzBRa0ZCY1VJc1YwRkJWeXhIUVVGWUxFTkJRWEpDTEVOQlFXcENMRU5CUkRCQ08wRkJSV2hETEcxQ1FVRmpMRlZCUVdRc1NVRkJlVUlzWlVGQlpTeEZRVUZtTEVOQlJrODdRVUZIYUVNc2JVSkJRV01zVjBGQlpDeEpRVUV3UWl4bFFVRmxMRWRCUVdZc1EwRklUVHRCUVVsb1F5eHRRa0ZCWXl4aFFVRmtMRWxCUVRSQ0xHVkJRV1VzUzBGQlppeERRVXBKTzB0QlFYQkRPME5CUkVvN08wRkJVMEVzVjBGQlZ5eE5RVUZZTEVkQlFXOUNPMWRCUVZrN1EwRkJXanRCUVVOd1FpeFhRVUZYTEZWQlFWZ3NSMEZCZDBJc1ZVRkJReXhSUVVGRU8xRkJRVmNzYVVWQlFWYzdWMEZETVVNc1EwRkJSU3haUVVGVkxFTkJRVllzUTBGQlJDeEhRVUZuUWl4RFFVRm9RaXhIUVVGeFFpeE5RVUZOTEZkQlFWY3NUVUZCV0N4RFFVRnJRaXhSUVVGc1FpeEZRVUUwUWl4UlFVRTFRaXhEUVVGT0xFZEJRU3RETEU5QlFVOHNTVUZCU1N4TFFVRkxMRWRCUVV3c1EwRkJVeXhEUVVGVUxFVkJRVmtzUTBGQlF5eEZRVUZFTEVsQlFVOHNWMEZCVnl4RFFVRllMRU5CUVZBc1EwRkJhRUlzUTBGQlVEdERRVVJxUkRzN1FVRkhlRUlzVjBGQlZ5eG5Ra0ZCV0R0QlFVTkJMRmRCUVZjc1YwRkJXRHRCUVVOQkxGZEJRVmNzVFVGQldDeEhRVUZ2UWl4VlFVRkRMRTFCUVVRN2MwTkJRVms3T3pzN1YwRkJVeXhWUVVGRExGRkJRVVE3WlVGQll5eDVRa0ZCVHl4cFFrRkJZU3hMUVVGd1FqdExRVUZrTzBOQlFYSkNPenRyUWtGRlRDSXNJbVpwYkdVaU9pSndjbVZ6WlhRdFpXRnphVzVuTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMEwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpOHFYRzRnSUNBZ1JXRnphVzVuSUdaMWJtTjBhVzl1YzF4dUlDQWdJQzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMxY2JpQWdJQ0JjYmlBZ0lDQkhaVzVsY21GMFpYTWdZVzVrSUhCeWIzWnBaR1Z6SUdWaGMybHVaeUJtZFc1amRHbHZibk1nWW1GelpXUWdiMjRnWW1GelpVWjFibU4wYVc5dUlHUmxabWx1YVhScGIyNXpYRzRnSUNBZ1hHNGdJQ0FnUVNCallXeHNJSFJ2SUdWaGMybHVaMFoxYm1OMGFXOXVMbWRsZENnblpuVnVZM1JwYjI1T1lXMWxKeWtnY21WMGRYSnVjeUJoSUdaMWJtTjBhVzl1SUhSb1lYUWdZMkZ1SUdKbElIQmhjM05sWkRwY2JpQWdJQ0FnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCUWNtOW5jbVZ6Y3lBd0xURmNiaUFnSUNBZ0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZElDaHZjSFJwYjI1aGJDazZJRUZ0Y0NCdGIyUnBabWxsY2l3Z2IyNXNlU0JoWTJObGNIUmxaQ0JwYmlCemIyMWxJR1ZoYzJsdVp5Qm1kVzVqZEdsdmJuTmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR0Z1WkNCcGN5QjFjMlZrSUhSdklHRmthblZ6ZENCdmRtVnlZV3hzSUhOMGNtVnVaM1JvWEc0Z0lDQWdJQ0FnSUVCeVpYUjFjbTRnVzI1MWJXSmxjbDA2SUVWaGMyVmtJSEJ5YjJkeVpYTnpYRzRnSUNBZ0lDQWdJRnh1SUNBZ0lGZGxJR05oYmlCblpXNWxjbUYwWlNCdVpYY2dablZ1WTNScGIyNXpJR0o1SUhObGJtUnBibWNnWVc0Z1pXRnphVzVuSUdaMWJtTjBhVzl1SUhSb2NtOTFaMmdnWldGemFXNW5SblZ1WTNScGIyNHVaWGgwWlc1a0tHNWhiV1VzSUcxbGRHaHZaQ2t1WEc0Z0lDQWdWMmhwWTJnZ2QybHNiQ0J0WVd0bElHNWhiV1ZKYml3Z2JtRnRaVTkxZENCaGJtUWdibUZ0WlVsdVQzVjBJR1oxYm1OMGFXOXVjeUJoZG1GcGJHRmliR1VnZEc4Z2RYTmxMbHh1SUNBZ0lDQWdJQ0JjYmlBZ0lDQkZZWE5wYm1jZ1puVnVZM1JwYjI1eklHWnliMjBnVW05aVpYSjBJRkJsYm01bGNseHVJQ0FnSUdoMGRIQTZMeTkzZDNjdWNtOWlaWEowY0dWdWJtVnlMbU52YlM5bFlYTnBibWN2WEc0Z0lDQWdJQ0FnSUZ4dUlDQWdJRUpsZW1sbGNpQmpkWEoyWlNCcGJuUmxjbkJ5WlhSdmNpQmpjbVZoZEdWa0lHWnliMjBnUjJIRHEzUmhiaUJTWlc1aGRXUmxZWFVuY3lCdmNtbG5hVzVoYkNCQ1pYcHBaWEpGWVhOcGJtY2dJRnh1SUNBZ0lHaDBkSEJ6T2k4dloybDBhSFZpTG1OdmJTOW5jbVV2WW1WNmFXVnlMV1ZoYzJsdVp5OWliRzlpTDIxaGMzUmxjaTlwYm1SbGVDNXFjeUFnWEc0Z0lDQWdhSFIwY0hNNkx5OW5hWFJvZFdJdVkyOXRMMmR5WlM5aVpYcHBaWEl0WldGemFXNW5MMkpzYjJJdmJXRnpkR1Z5TDB4SlEwVk9VMFZjYmx4dUlDQWdJRUZ1ZEdsamFYQmhkR1VnWldGemFXNW5JR055WldGMFpXUWdZbmtnUld4c2FXOTBJRWRwYm05Y2JpQWdJQ0JvZEhSd2N6b3ZMM1IzYVhSMFpYSXVZMjl0TDBWc2JHbHZkRWRsYm05Y2Jpb3ZYRzR2THlCSmJYQnZjblJ6WEc1cGJYQnZjblFnWTNKbFlYUmxSV0Z6YVc1blJuVnVZM1JwYjI0Z1puSnZiU0FuTGk5amNtVmhkR1V0WldGemFXNW5KenRjYm1sdGNHOXlkQ0JqZFdKcFkwSmxlbWxsY2lCbWNtOXRJQ2N1TDJOeVpXRjBaUzFpWlhwcFpYSW5PMXh1WEc0dkx5QldZV3gxWlhOY2JtTnZibk4wSUVSRlJrRlZURlJmUWtGRFMxOVRWRkpGVGtkVVNDQTlJREV1TlRJMU8xeHVZMjl1YzNRZ1JFVkdRVlZNVkY5UVQxZGZVMVJTUlU1SFZFZ2dQU0F5TzF4dVhHNHZLbHh1SUNBZ0lFVmhZMmdnYjJZZ2RHaGxjMlVnWW1GelpTQm1kVzVqZEdsdmJuTWdhWE1nWVc0Z1pXRnpaVWx1WEc0Z0lDQWdYRzRnSUNBZ1QyNGdhVzVwZEN3Z2QyVWdkWE5sSUM1dGFYSnliM0lnWVc1a0lDNXlaWFpsY25ObElIUnZJR2RsYm1WeVlYUmxJR1ZoYzJWSmJrOTFkQ0JoYm1SY2JpQWdJQ0JsWVhObFQzVjBJR1oxYm1OMGFXOXVjeUJ5WlhOd1pXTjBhWFpsYkhrdVhHNHFMMXh1WTI5dWMzUWdZbUZ6WlVWaGMybHVaeUE5SUh0Y2JpQWdJQ0JsWVhObE9pQW9jSEp2WjNKbGMzTXNJSE4wY21WdVozUm9JRDBnUkVWR1FWVk1WRjlRVDFkZlUxUlNSVTVIVkVncElEMCtJSEJ5YjJkeVpYTnpJQ29xSUhOMGNtVnVaM1JvTEZ4dUlDQWdJR05wY21NNklIQnliMmR5WlhOeklEMCtJREVnTFNCTllYUm9Mbk5wYmloTllYUm9MbUZqYjNNb2NISnZaM0psYzNNcEtTeGNiaUFnSUNCaVlXTnJPaUFvY0hKdlozSmxjM01zSUhOMGNtVnVaM1JvSUQwZ1JFVkdRVlZNVkY5Q1FVTkxYMU5VVWtWT1IxUklLU0E5UGlBb2NISnZaM0psYzNNZ0tpQndjbTluY21WemN5a2dLaUFvS0hOMGNtVnVaM1JvSUNzZ01Ta2dLaUJ3Y205bmNtVnpjeUF0SUhOMGNtVnVaM1JvS1Z4dWZUdGNibHh1THk4Z1ZYUnBiR2wwZVNCbWRXNWpkR2x2Ym5OY2JtTnZibk4wSUdkbGJtVnlZWFJsVUc5M1pYSkZZWE5wYm1jZ1BTQW9jM1J5Wlc1bmRHZ3BJRDArSUNod2NtOW5jbVZ6Y3lrZ1BUNGdZbUZ6WlVWaGMybHVaeTVsWVhObEtIQnliMmR5WlhOekxDQnpkSEpsYm1kMGFDazdYRzVjYmxzblkzVmlhV01uTENBbmNYVmhjblFuTENBbmNYVnBiblFuWFM1bWIzSkZZV05vS0NobFlYTnBibWRPWVcxbExDQnBLU0E5UGlCaVlYTmxSV0Z6YVc1blcyVmhjMmx1WjA1aGJXVmRJRDBnWjJWdVpYSmhkR1ZRYjNkbGNrVmhjMmx1WnlocElDc2dNeWtwTzF4dVhHNHZMeUJIWlc1bGNtRjBaU0JwYmk5dmRYUXZhVzVQZFhRZ2RtRnlhV0YwYVc5dWMxeHVabTl5SUNoc1pYUWdhMlY1SUdsdUlHSmhjMlZGWVhOcGJtY3BJSHRjYmlBZ0lDQnBaaUFvWW1GelpVVmhjMmx1Wnk1b1lYTlBkMjVRY205d1pYSjBlU2hyWlhrcEtTQjdYRzRnSUNBZ0lDQWdJR052Ym5OMElHVmhjMmx1WjBaMWJtTjBhVzl1SUQwZ1kzSmxZWFJsUldGemFXNW5SblZ1WTNScGIyNG9ZbUZ6WlVWaGMybHVaMXRyWlhsZEtUdGNiaUFnSUNBZ0lDQWdZbUZ6WlVWaGMybHVaMXRnSkh0clpYbDlTVzVnWFNBOUlHVmhjMmx1WjBaMWJtTjBhVzl1TG1sdU8xeHVJQ0FnSUNBZ0lDQmlZWE5sUldGemFXNW5XMkFrZTJ0bGVYMVBkWFJnWFNBOUlHVmhjMmx1WjBaMWJtTjBhVzl1TG05MWREdGNiaUFnSUNBZ0lDQWdZbUZ6WlVWaGMybHVaMXRnSkh0clpYbDlTVzVQZFhSZ1hTQTlJR1ZoYzJsdVowWjFibU4wYVc5dUxtbHVUM1YwTzF4dUlDQWdJSDFjYm4xY2JseHVZbUZ6WlVWaGMybHVaeTVzYVc1bFlYSWdQU0J3Y205bmNtVnpjeUE5UGlCd2NtOW5jbVZ6Y3p0Y2JtSmhjMlZGWVhOcGJtY3VZVzUwYVdOcGNHRjBaU0E5SUNod2NtOW5jbVZ6Y3l3Z2MzUnlaVzVuZEdnZ1BTQkVSVVpCVlV4VVgwSkJRMHRmVTFSU1JVNUhWRWdwSUQwK1hHNGdJQ0FnS0Nod2NtOW5jbVZ6Y3lvOU1pa2dQQ0F4S1NBL0lEQXVOU0FxSUdKaGMyVkZZWE5wYm1jdVltRmphMGx1S0hCeWIyZHlaWE56TENCemRISmxibWQwYUNrZ09pQWdNQzQxSUNvZ0tESWdMU0JOWVhSb0xuQnZkeWd5TENBdE1UQWdLaUFvY0hKdlozSmxjM01nTFNBeEtTa3BPMXh1WEc1aVlYTmxSV0Z6YVc1bkxtTnlaV0YwWlZaaGNtbGhkR2x2Ym5NZ1BTQmpjbVZoZEdWRllYTnBibWRHZFc1amRHbHZianRjYm1KaGMyVkZZWE5wYm1jdVkzVmlhV05DWlhwcFpYSWdQU0JqZFdKcFkwSmxlbWxsY2p0Y2JtSmhjMlZGWVhOcGJtY3ViVzlrYVdaNUlEMGdLR1ZoYzJsdVp5d2dMaTR1WVhKbmN5a2dQVDRnS0hCeWIyZHlaWE56S1NBOVBpQmxZWE5wYm1jb2NISnZaM0psYzNNc0lDNHVMbUZ5WjNNcE8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQmlZWE5sUldGemFXNW5PeUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9lYXNpbmcvcHJlc2V0LWVhc2luZy5qc1xuICoqIG1vZHVsZSBpZCA9IDE4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfRmxvdyA9IHJlcXVpcmUoJy4uL0Zsb3cnKTtcblxudmFyIF9GbG93MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Zsb3cpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgU0FWRV9QUk9QID0gJ19fcG1fZmxvdyc7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChlbGVtZW50LCBhZGFwdGVyKSB7XG4gICAgaWYgKGVsZW1lbnRbU0FWRV9QUk9QXSkge1xuICAgICAgICByZXR1cm4gZWxlbWVudFtTQVZFX1BST1BdO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBmbG93ID0gbmV3IF9GbG93Mi5kZWZhdWx0KHsgZWxlbWVudDogZWxlbWVudCwgYWRhcHRlcjogYWRhcHRlciB9KTtcblxuICAgICAgICAvLyBCaW5kIGFkYXB0ZXIgdG8gZWxlbWVudFxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgU0FWRV9QUk9QLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHZhbHVlOiBmbG93XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBmbG93O1xuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwyWnNiM2N2WjJWMExXWnNiM2N1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dEJRVUZCT3pzN096czdRVUZGUVN4SlFVRk5MRmxCUVZrc1YwRkJXanM3YTBKQlJWTXNWVUZCUXl4UFFVRkVMRVZCUVZVc1QwRkJWaXhGUVVGelFqdEJRVU5xUXl4UlFVRkpMRkZCUVZFc1UwRkJVaXhEUVVGS0xFVkJRWGRDTzBGQlEzQkNMR1ZCUVU4c1VVRkJVU3hUUVVGU0xFTkJRVkFzUTBGRWIwSTdTMEZCZUVJc1RVRkZUenRCUVVOSUxGbEJRVTBzVDBGQlR5eHRRa0ZCVXl4RlFVRkZMR2RDUVVGR0xFVkJRVmNzWjBKQlFWZ3NSVUZCVkN4RFFVRlFPenM3UVVGRVNDeGpRVWxJTEVOQlFVOHNZMEZCVUN4RFFVRnpRaXhQUVVGMFFpeEZRVUVyUWl4VFFVRXZRaXhGUVVFd1F6dEJRVU4wUXl4M1FrRkJXU3hMUVVGYU8wRkJRMEVzYzBKQlFWVXNTMEZCVmp0QlFVTkJMRzFDUVVGUExFbEJRVkE3VTBGSVNpeEZRVXBIT3p0QlFWVklMR1ZCUVU4c1NVRkJVQ3hEUVZaSE8wdEJSbEE3UTBGRVZ5SXNJbVpwYkdVaU9pSm5aWFF0Wm14dmR5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdSbXh2ZHlCbWNtOXRJQ2N1TGk5R2JHOTNKenRjYmx4dVkyOXVjM1FnVTBGV1JWOVFVazlRSUQwZ0oxOWZjRzFmWm14dmR5YzdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJQ2hsYkdWdFpXNTBMQ0JoWkdGd2RHVnlLU0E5UGlCN1hHNGdJQ0FnYVdZZ0tHVnNaVzFsYm5SYlUwRldSVjlRVWs5UVhTa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdaV3hsYldWdWRGdFRRVlpGWDFCU1QxQmRPMXh1SUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUdac2IzY2dQU0J1WlhjZ1JteHZkeWg3SUdWc1pXMWxiblFzSUdGa1lYQjBaWElnZlNrN1hHNWNiaUFnSUNBZ0lDQWdMeThnUW1sdVpDQmhaR0Z3ZEdWeUlIUnZJR1ZzWlcxbGJuUmNiaUFnSUNBZ0lDQWdUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblI1S0dWc1pXMWxiblFzSUZOQlZrVmZVRkpQVUN3Z2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWlc1MWJXVnlZV0pzWlRvZ1ptRnNjMlVzWEc0Z0lDQWdJQ0FnSUNBZ0lDQjNjbWwwWVdKc1pUb2dabUZzYzJVc1hHNGdJQ0FnSUNBZ0lDQWdJQ0IyWVd4MVpUb2dabXh2ZDF4dUlDQWdJQ0FnSUNCOUtUdGNibHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdabXh2ZHp0Y2JpQWdJQ0I5WEc1OU8xeHVYRzVjYmlKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvZmxvdy9nZXQtZmxvdy5qc1xuICoqIG1vZHVsZSBpZCA9IDE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnN0ZXBQcm9ncmVzcyA9IGV4cG9ydHMuc3BlZWRQZXJTZWNvbmQgPSBleHBvcnRzLnNwZWVkUGVyRnJhbWUgPSBleHBvcnRzLnNtb290aCA9IGV4cG9ydHMucmVzdHJpY3QgPSBleHBvcnRzLnJlbGF0aXZlVmFsdWUgPSBleHBvcnRzLnJhbmRvbSA9IGV4cG9ydHMucmFkaWFuc1RvRGVncmVlcyA9IGV4cG9ydHMucG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZSA9IGV4cG9ydHMub2Zmc2V0ID0gZXhwb3J0cy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSA9IGV4cG9ydHMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MgPSBleHBvcnRzLmh5cG90ZW51c2UgPSBleHBvcnRzLmVhc2UgPSBleHBvcnRzLmRpc3RhbmNlID0gZXhwb3J0cy5kaWxhdGUgPSBleHBvcnRzLmRlZ3JlZXNUb1JhZGlhbnMgPSBleHBvcnRzLmFuZ2xlID0gdW5kZWZpbmVkO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgWkVST19QT0lOVCA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDAsXG4gICAgejogMFxufTtcblxudmFyIGRpc3RhbmNlMUQgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBNYXRoLmFicyhhIC0gYik7XG59O1xuXG4vKlxuICAgIEFuZ2xlIGJldHdlZW4gcG9pbnRzXG4gICAgXG4gICAgVHJhbnNsYXRlcyB0aGUgaHlwb3RoZXRpY2FsIGxpbmUgc28gdGhhdCB0aGUgJ2Zyb20nIGNvb3JkaW5hdGVzXG4gICAgYXJlIGF0IDAsMFxuICAgIFxuICAgIEBwYXJhbSBbb2JqZWN0XTogWCBhbmQgWSBjb29yZGluYXRlcyBvZiBmcm9tIHBvaW50XG4gICAgQHBhcmFtIFtvYmplY3RdOiBYIGFuZCBZIGNvcmRpbmF0ZXMgb2YgdG8gcG9pbnRcbiAgICBAcmV0dXJuIFtyYWRpYW5dOiBBbmdsZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzIGluIHJhZGlhbnNcbiovXG52YXIgYW5nbGUgPSBleHBvcnRzLmFuZ2xlID0gZnVuY3Rpb24gKGEpIHtcbiAgICB2YXIgYiA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IFpFUk9fUE9JTlQgOiBhcmd1bWVudHNbMV07XG4gICAgcmV0dXJuIHJhZGlhbnNUb0RlZ3JlZXMoTWF0aC5hdGFuMihhLnggLSBiLngsIGEueSAtIGIueSkpO1xufTtcblxuLypcbiAgICBDb252ZXJ0IGRlZ3JlZXMgdG8gcmFkaWFuc1xuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgaW4gZGVncmVlc1xuICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGluIHJhZGlhbnNcbiovXG52YXIgZGVncmVlc1RvUmFkaWFucyA9IGV4cG9ydHMuZGVncmVlc1RvUmFkaWFucyA9IGZ1bmN0aW9uIChkZWdyZWVzKSB7XG4gICAgcmV0dXJuIGRlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xufTtcblxuLypcbiAgICBEaWxhdGVcbiAgICBcbiAgICBDaGFuZ2UgdGhlIHByb2dyZXNzaW9uIGJldHdlZW4gYSBhbmQgYiBhY2NvcmRpbmcgdG8gZGlsYXRpb24uXG4gICAgXG4gICAgU28gZGlsYXRpb24gPSAwLjUgd291bGQgY2hhbmdlXG4gICAgXG4gICAgYSAtLS0tLS0tLS0gYlxuICAgIFxuICAgIHRvXG4gICAgXG4gICAgYSAtLS0tIGJcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFByZXZpb3VzIHZhbHVlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBEaWxhdGUgcHJvZ3Jlc3MgYnkgeFxuICAgIEByZXR1cm4gW251bWJlcl06IFByZXZpb3VzIHZhbHVlIHBsdXMgdGhlIGRpbGF0ZWQgZGlmZmVyZW5jZVxuKi9cbnZhciBkaWxhdGUgPSBleHBvcnRzLmRpbGF0ZSA9IGZ1bmN0aW9uIChhLCBiLCBkaWxhdGlvbikge1xuICAgIHJldHVybiBhICsgKGIgLSBhKSAqIGRpbGF0aW9uO1xufTtcblxuLypcbiAgICBEaXN0YW5jZVxuICAgIFxuICAgIFJldHVybnMgdGhlIGRpc3RhbmNlIGJldHdlZW4gdHdvIG4gZGltZW5zaW9uYWwgcG9pbnRzLlxuICAgIFxuICAgIEBwYXJhbSBbb2JqZWN0L251bWJlcl06IHggYW5kIHkgb3IganVzdCB4IG9mIHBvaW50IEFcbiAgICBAcGFyYW0gW29iamVjdC9udW1iZXJdOiAob3B0aW9uYWwpOiB4IGFuZCB5IG9yIGp1c3QgeCBvZiBwb2ludCBCXG4gICAgQHJldHVybiBbbnVtYmVyXTogVGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIHR3byBwb2ludHNcbiovXG52YXIgZGlzdGFuY2UgPSBleHBvcnRzLmRpc3RhbmNlID0gZnVuY3Rpb24gKGEpIHtcbiAgICB2YXIgYiA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IFpFUk9fUE9JTlQgOiBhcmd1bWVudHNbMV07XG5cbiAgICAvLyAxRCBkaW1lbnNpb25zXG4gICAgaWYgKCgwLCBfdXRpbHMuaXNOdW0pKGEpKSB7XG4gICAgICAgIHJldHVybiBkaXN0YW5jZTFEKGEsIGIpO1xuXG4gICAgICAgIC8vIE11bHRpLWRpbWVuc2lvbmFsXG4gICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciB4RGVsdGEgPSBkaXN0YW5jZTFEKGEueCwgYi54KTtcbiAgICAgICAgICAgIHZhciB5RGVsdGEgPSBkaXN0YW5jZTFEKGEueSwgYi55KTtcbiAgICAgICAgICAgIHZhciB6RGVsdGEgPSAoMCwgX3V0aWxzLmlzTnVtKShhLnopID8gZGlzdGFuY2UxRChhLnosIGIueikgOiAwO1xuXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHhEZWx0YSwgMikgKyBNYXRoLnBvdyh5RGVsdGEsIDIpICsgTWF0aC5wb3coekRlbHRhLCAyKSk7XG4gICAgICAgIH1cbn07XG5cbi8qXG4gICAgRWFzZSB2YWx1ZSB3aXRoaW4gcmFuZ2VkIHBhcmFtZXRlcnNcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzIGJldHdlZW4gMCBhbmQgMVxuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgb2YgMCBwcm9ncmVzc1xuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgb2YgMSBwcm9ncmVzc1xuICAgIEBwYXJhbSBbc3RyaW5nIHx8IGZ1bmN0aW9uXTogTmFtZSBvZiBwcmVzZXQgZWFzaW5nXG4gICAgICAgIHRvIHVzZSBvciBnZW5lcmF0ZWQgZWFzaW5nIGZ1bmN0aW9uXG4gICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgb2YgZWFzZWQgcHJvZ3Jlc3MgaW4gcmFuZ2VcbiovXG52YXIgZWFzZSA9IGV4cG9ydHMuZWFzZSA9IGZ1bmN0aW9uIChwcm9ncmVzcywgZnJvbSwgdG8sIGVhc2UpIHtcbiAgICB2YXIgcHJvZ3Jlc3NMaW1pdGVkID0gcmVzdHJpY3QocHJvZ3Jlc3MsIDAsIDEpO1xuICAgIHZhciBlYXNlZFByb2dyZXNzID0gZWFzZShwcm9ncmVzc0xpbWl0ZWQpO1xuXG4gICAgcmV0dXJuIGdldFZhbHVlRnJvbVByb2dyZXNzKGVhc2VkUHJvZ3Jlc3MsIGZyb20sIHRvKTtcbn07XG5cbi8qXG4gICAgSHlwb3RlbnVzZVxuICAgIFxuICAgIFJldHVybnMgdGhlIGh5cG90ZW51c2UsIHNpZGUgQywgZ2l2ZW4gdGhlIGxlbmd0aHMgb2Ygc2lkZXMgQSBhbmQgQi5cbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IExlbmd0aCBvZiBBXG4gICAgQHBhcmFtIFtudW1iZXJdOiBMZW5ndGggb2YgQlxuICAgIEByZXR1cm4gW251bWJlcl06IExlbmd0aCBvZiBDXG4qL1xudmFyIGh5cG90ZW51c2UgPSBleHBvcnRzLmh5cG90ZW51c2UgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBNYXRoLnNxcnQoYSAqIGEgKyBiICogYik7XG59O1xuXG4vKlxuICAgIFZhbHVlIGluIHJhbmdlIGZyb20gcHJvZ3Jlc3NcbiAgICBcbiAgICBHaXZlbiBhIGxvd2VyIGxpbWl0IGFuZCBhbiB1cHBlciBsaW1pdCwgd2UgcmV0dXJuIHRoZSB2YWx1ZSB3aXRoaW5cbiAgICB0aGF0IHJhbmdlIGFzIGV4cHJlc3NlZCBieSBwcm9ncmVzcyAoYSBudW1iZXIgZnJvbSAwLTEpXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBUaGUgcHJvZ3Jlc3MgYmV0d2VlbiBsb3dlciBhbmQgdXBwZXIgbGltaXRzIGV4cHJlc3NlZCAwLTFcbiAgICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IG9mIHJhbmdlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBVcHBlciBsaW1pdCBvZiByYW5nZVxuICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGFzIGNhbGN1bGF0ZWQgZnJvbSBwcm9ncmVzcyB3aXRoaW4gcmFuZ2UgKG5vdCBsaW1pdGVkIHdpdGhpbiByYW5nZSlcbiovXG52YXIgZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MgPSBleHBvcnRzLmdldFZhbHVlRnJvbVByb2dyZXNzID0gZnVuY3Rpb24gKHByb2dyZXNzLCBmcm9tLCB0bykge1xuICAgIHJldHVybiAtcHJvZ3Jlc3MgKiBmcm9tICsgcHJvZ3Jlc3MgKiB0byArIGZyb207XG59O1xuXG4vKlxuICAgIFByb2dyZXNzIHdpdGhpbiBnaXZlbiByYW5nZVxuICAgIFxuICAgIEdpdmVuIGEgbG93ZXIgbGltaXQgYW5kIGFuIHVwcGVyIGxpbWl0LCB3ZSByZXR1cm4gdGhlIHByb2dyZXNzXG4gICAgKGV4cHJlc3NlZCBhcyBhIG51bWJlciAwLTEpIHJlcHJlc2VudGVkIGJ5IHRoZSBnaXZlbiB2YWx1ZSwgYW5kXG4gICAgbGltaXQgdGhhdCBwcm9ncmVzcyB0byB3aXRoaW4gMC0xLlxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgdG8gZmluZCBwcm9ncmVzcyB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiAgICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXRcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBQcm9ncmVzcyBvZiB2YWx1ZSB3aXRoaW4gcmFuZ2UgYXMgZXhwcmVzc2VkIDAtMVxuKi9cbnZhciBnZXRQcm9ncmVzc0Zyb21WYWx1ZSA9IGV4cG9ydHMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUsIGZyb20sIHRvKSB7XG4gICAgcmV0dXJuICh2YWx1ZSAtIGZyb20pIC8gKHRvIC0gZnJvbSk7XG59O1xuXG4vKlxuICAgIE9mZnNldCBiZXR3ZWVuIHR3byBvYmplY3RzIG9mIG51bWJlcnNcblxuICAgIElmIHByb3BlcnR5IGlzIGZvdW5kIGluIGIgbm90IHByZXNlbnQgaW4gYSwgaXQgd2lsbCByZXR1cm4gYDBgIGZvciB0aGF0IHByb3AuXG4gICAgXG4gICAgQHBhcmFtIFtQb2ludF06IEZpcnN0IG9iamVjdFxuICAgIEBwYXJhbSBbUG9pbnRdOiBTZWNvbmQgb2JqZWN0XG4gICAgQHJldHVybiBbT2Zmc2V0XTogRGlzdGFuY2UgbWV0cmljcyBiZXR3ZWVuIHR3byBwb2ludHNcbiovXG52YXIgb2Zmc2V0ID0gZXhwb3J0cy5vZmZzZXQgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgIHZhciBvZmZzZXQgPSB7fTtcblxuICAgIGZvciAodmFyIGtleSBpbiBiKSB7XG4gICAgICAgIGlmIChiLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIG9mZnNldFtrZXldID0gKDAsIF91dGlscy5oYXNQcm9wZXJ0eSkoYSwga2V5KSA/IGJba2V5XSAtIGFba2V5XSA6IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2Zmc2V0O1xufTtcblxuLypcbiAgICBQb2ludCBmcm9tIGFuZ2xlIGFuZCBkaXN0YW5jZVxuICAgIFxuICAgIEBwYXJhbSBbb2JqZWN0XTogMkQgcG9pbnQgb2Ygb3JpZ2luXG4gICAgQHBhcmFtIFtudW1iZXJdOiBBbmdsZSBmcm9tIG9yaWdpblxuICAgIEBwYXJhbSBbbnVtYmVyXTogRGlzdGFuY2UgZnJvbSBvcmlnaW5cbiAgICBAcmV0dXJuIFtvYmplY3RdOiBDYWxjdWxhdGVkIDJEIHBvaW50XG4qL1xudmFyIHBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UgPSBleHBvcnRzLnBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UgPSBmdW5jdGlvbiAob3JpZ2luLCBhbmdsZSwgZGlzdGFuY2UpIHtcbiAgICBhbmdsZSA9IGRlZ3JlZXNUb1JhZGlhbnMoYW5nbGUpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogZGlzdGFuY2UgKiBNYXRoLmNvcyhhbmdsZSkgKyBvcmlnaW4ueCxcbiAgICAgICAgeTogZGlzdGFuY2UgKiBNYXRoLnNpbihhbmdsZSkgKyBvcmlnaW4ueVxuICAgIH07XG59O1xuXG4vKlxuICAgIENvbnZlcnQgcmFkaWFucyB0byBkZWdyZWVzXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBpbiByYWRpYW5zXG4gICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgaW4gZGVncmVlc1xuKi9cbnZhciByYWRpYW5zVG9EZWdyZWVzID0gZXhwb3J0cy5yYWRpYW5zVG9EZWdyZWVzID0gZnVuY3Rpb24gKHJhZGlhbnMpIHtcbiAgICByZXR1cm4gcmFkaWFucyAqIDE4MCAvIE1hdGguUEk7XG59O1xuXG4vKlxuICAgIFJldHVybiByYW5kb20gbnVtYmVyIGJldHdlZW4gcmFuZ2VcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogT3V0cHV0IG1pbmltdW1cbiAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogT3V0cHV0IG1heGltdW1cbiAgICBAcmV0dXJuIFtudW1iZXJdOiBSYW5kb20gbnVtYmVyIHdpdGhpbiByYW5nZSwgb3IgMCBhbmQgMSBpZiBub25lIHByb3ZpZGVkXG4qL1xudmFyIHJhbmRvbSA9IGV4cG9ydHMucmFuZG9tID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBtaW4gPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyAwIDogYXJndW1lbnRzWzBdO1xuICAgIHZhciBtYXggPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyAxIDogYXJndW1lbnRzWzFdO1xuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XG59O1xuXG4vKlxuICAgIENhbGN1bGF0ZSByZWxhdGl2ZSB2YWx1ZVxuICAgIFxuICAgIFRha2VzIHRoZSBvcGVyYXRvciBhbmQgdmFsdWUgZnJvbSBhIHN0cmluZywgaWUgXCIrPTVcIiwgYW5kIGFwcGxpZXNcbiAgICB0byB0aGUgY3VycmVudCB2YWx1ZSB0byByZXNvbHZlIGEgbmV3IHRhcmdldC5cbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcbiAgICBAcGFyYW0gW3N0cmluZ106IFJlbGF0aXZlIHZhbHVlXG4gICAgQHJldHVybiBbbnVtYmVyXTogTmV3IHZhbHVlXG4qL1xudmFyIHJlbGF0aXZlVmFsdWUgPSBleHBvcnRzLnJlbGF0aXZlVmFsdWUgPSBmdW5jdGlvbiAoY3VycmVudCwgcmVsYXRpdmUpIHtcbiAgICB2YXIgbmV3VmFsdWUgPSBjdXJyZW50O1xuICAgIHZhciBlcXVhdGlvbiA9IHJlbGF0aXZlLnNwbGl0KCc9Jyk7XG4gICAgdmFyIG9wZXJhdG9yID0gZXF1YXRpb25bMF07XG5cbiAgICB2YXIgX2ZpbmRWYWx1ZUFuZFVuaXQgPSAoMCwgX3V0aWxzLmZpbmRWYWx1ZUFuZFVuaXQpKGVxdWF0aW9uWzFdKTtcblxuICAgIHZhciB1bml0ID0gX2ZpbmRWYWx1ZUFuZFVuaXQudW5pdDtcbiAgICB2YXIgdmFsdWUgPSBfZmluZFZhbHVlQW5kVW5pdC52YWx1ZTtcblxuXG4gICAgdmFsdWUgPSBwYXJzZUZsb2F0KHZhbHVlKTtcblxuICAgIHN3aXRjaCAob3BlcmF0b3IpIHtcbiAgICAgICAgY2FzZSAnKyc6XG4gICAgICAgICAgICBuZXdWYWx1ZSArPSB2YWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICctJzpcbiAgICAgICAgICAgIG5ld1ZhbHVlIC09IHZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJyonOlxuICAgICAgICAgICAgbmV3VmFsdWUgKj0gdmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnLyc6XG4gICAgICAgICAgICBuZXdWYWx1ZSAvPSB2YWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmICh1bml0KSB7XG4gICAgICAgIG5ld1ZhbHVlICs9IHVuaXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld1ZhbHVlO1xufTtcblxuLypcbiAgICBSZXN0cmljdCB2YWx1ZSB0byByYW5nZVxuICAgIFxuICAgIFJldHVybiB2YWx1ZSB3aXRoaW4gdGhlIHJhbmdlIG9mIGxvd2VyTGltaXQgYW5kIHVwcGVyTGltaXRcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIHRvIGtlZXAgd2l0aGluIHJhbmdlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBvZiByYW5nZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXQgb2YgcmFuZ2VcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBhcyBsaW1pdGVkIHdpdGhpbiBnaXZlbiByYW5nZVxuKi9cbnZhciByZXN0cmljdCA9IGV4cG9ydHMucmVzdHJpY3QgPSBmdW5jdGlvbiAodmFsdWUsIG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIE1hdGgubWF4KE1hdGgubWluKHZhbHVlLCBtYXgpLCBtaW4pO1xufTtcblxuLypcbiAgICBGcmFtZXJhdGUtaW5kZXBlbmRlbnQgc21vb3RoaW5nXG5cbiAgICBAcGFyYW0gW251bWJlcl06IE5ldyB2YWx1ZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogT2xkIHZhbHVlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvblxuICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBTbW9vdGhpbmcgKDAgaXMgbm9uZSlcbiovXG52YXIgc21vb3RoID0gZXhwb3J0cy5zbW9vdGggPSBmdW5jdGlvbiAobmV3VmFsdWUsIG9sZFZhbHVlLCBkdXJhdGlvbikge1xuICAgIHZhciBzbW9vdGhpbmcgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDMgfHwgYXJndW1lbnRzWzNdID09PSB1bmRlZmluZWQgPyAwIDogYXJndW1lbnRzWzNdO1xuICAgIHJldHVybiAoMCwgX3V0aWxzLnRvRGVjaW1hbCkob2xkVmFsdWUgKyBkdXJhdGlvbiAqIChuZXdWYWx1ZSAtIG9sZFZhbHVlKSAvIE1hdGgubWF4KHNtb290aGluZywgZHVyYXRpb24pKTtcbn07XG5cbi8qXG4gICAgQ29udmVydCB4IHBlciBzZWNvbmQgdG8gcGVyIGZyYW1lIHZlbG9jaXR5IGJhc2VkIG9uIGZwc1xuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVW5pdCBwZXIgc2Vjb25kXG4gICAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvbiBpbiBtc1xuKi9cbnZhciBzcGVlZFBlckZyYW1lID0gZXhwb3J0cy5zcGVlZFBlckZyYW1lID0gZnVuY3Rpb24gKHhwcywgZnJhbWVEdXJhdGlvbikge1xuICAgIHJldHVybiAoMCwgX3V0aWxzLmlzTnVtKSh4cHMpID8geHBzIC8gKDEwMDAgLyBmcmFtZUR1cmF0aW9uKSA6IDA7XG59O1xuXG4vKlxuICAgIENvbnZlcnQgdmVsb2NpdHkgaW50byB2ZWxpY2l0eSBwZXIgc2Vjb25kXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBVbml0IHBlciBmcmFtZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb24gaW4gbXNcbiovXG52YXIgc3BlZWRQZXJTZWNvbmQgPSBleHBvcnRzLnNwZWVkUGVyU2Vjb25kID0gZnVuY3Rpb24gKHZlbG9jaXR5LCBmcmFtZUR1cmF0aW9uKSB7XG4gICAgcmV0dXJuIHZlbG9jaXR5ICogKDEwMDAgLyBmcmFtZUR1cmF0aW9uKTtcbn07XG5cbi8qXG4gICAgQ3JlYXRlIHN0ZXBwZWQgdmVyc2lvbiBvZiAwLTEgcHJvZ3Jlc3NcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcbiAgICBAcGFyYW0gW2ludF06IE51bWJlciBvZiBzdGVwc1xuICAgIEByZXR1cm4gW251bWJlcl06IFN0ZXBwZWQgdmFsdWVcbiovXG52YXIgc3RlcFByb2dyZXNzID0gZXhwb3J0cy5zdGVwUHJvZ3Jlc3MgPSBmdW5jdGlvbiAocHJvZ3Jlc3MsIHN0ZXBzKSB7XG4gICAgdmFyIHNlZ21lbnQgPSAxIC8gKHN0ZXBzIC0gMSk7XG4gICAgdmFyIHRhcmdldCA9IDEgLSAxIC8gc3RlcHM7XG4gICAgdmFyIHByb2dyZXNzT2ZUYXJnZXQgPSBNYXRoLm1pbihwcm9ncmVzcyAvIHRhcmdldCwgMSk7XG5cbiAgICByZXR1cm4gTWF0aC5mbG9vcihwcm9ncmVzc09mVGFyZ2V0IC8gc2VnbWVudCkgKiBzZWdtZW50O1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJtTXZZMkZzWXk1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenRCUVVGQk96dEJRVTlCTEVsQlFVMHNZVUZCWVR0QlFVTm1MRTlCUVVjc1EwRkJTRHRCUVVOQkxFOUJRVWNzUTBGQlNEdEJRVU5CTEU5QlFVY3NRMEZCU0R0RFFVaEZPenRCUVUxT0xFbEJRVTBzWVVGQllTeFZRVUZETEVOQlFVUXNSVUZCU1N4RFFVRktPMWRCUVZVc1MwRkJTeXhIUVVGTUxFTkJRVk1zU1VGQlNTeERRVUZLTzBOQlFXNUNPenM3T3pzN096czdPenM3UVVGWldpeEpRVUZOTEhkQ1FVRlJMRlZCUVVNc1EwRkJSRHRSUVVGSkxEQkVRVUZKTzFkQlFXVXNhVUpCUVdsQ0xFdEJRVXNzUzBGQlRDeERRVUZYTEVWQlFVVXNRMEZCUml4SFFVRk5MRVZCUVVVc1EwRkJSaXhGUVVGTExFVkJRVVVzUTBGQlJpeEhRVUZOTEVWQlFVVXNRMEZCUml4RFFVRTNRenREUVVGMlFqczdPenM3T3pzN1FVRlJaQ3hKUVVGTkxEaERRVUZ0UWl4VlFVRkRMRTlCUVVRN1YwRkJZU3hWUVVGVkxFdEJRVXNzUlVGQlRDeEhRVUZWTEVkQlFYQkNPME5CUVdJN096czdPenM3T3pzN096czdPenM3T3pzN08wRkJiMEo2UWl4SlFVRk5MREJDUVVGVExGVkJRVU1zUTBGQlJDeEZRVUZKTEVOQlFVb3NSVUZCVHl4UlFVRlFPMWRCUVc5Q0xFbEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVb3NRMEZCUkN4SFFVRlZMRkZCUVZZN1EwRkJla0k3T3pzN096czdPenM3TzBGQlYyWXNTVUZCVFN3NFFrRkJWeXhWUVVGRExFTkJRVVFzUlVGQmRVSTdVVUZCYmtJc01FUkJRVWtzTUVKQlFXVTdPenRCUVVVelF5eFJRVUZKTEd0Q1FVRk5MRU5CUVU0c1EwRkJTaXhGUVVGak8wRkJRMVlzWlVGQlR5eFhRVUZYTEVOQlFWZ3NSVUZCWXl4RFFVRmtMRU5CUVZBN096dEJRVVJWTEV0QlFXUXNUVUZKVHp0QlFVTklMR2RDUVVGTkxGTkJRVk1zVjBGQlZ5eEZRVUZGTEVOQlFVWXNSVUZCU3l4RlFVRkZMRU5CUVVZc1EwRkJla0lzUTBGRVNEdEJRVVZJTEdkQ1FVRk5MRk5CUVZNc1YwRkJWeXhGUVVGRkxFTkJRVVlzUlVGQlN5eEZRVUZGTEVOQlFVWXNRMEZCZWtJc1EwRkdTRHRCUVVkSUxHZENRVUZOTEZOQlFWTXNhVUpCUVVNc1EwRkJUU3hGUVVGRkxFTkJRVVlzUTBGQlVDeEhRVUZsTEZkQlFWY3NSVUZCUlN4RFFVRkdMRVZCUVVzc1JVRkJSU3hEUVVGR0xFTkJRUzlDTEVkQlFYTkRMRU5CUVhSRExFTkJTRm83TzBGQlMwZ3NiVUpCUVU4c1MwRkJTeXhKUVVGTUxFTkJRVlVzVTBGQlF5eFJRVUZWTEVWQlFWZ3NXVUZCYVVJc1VVRkJWU3hGUVVFelFpeFpRVUZwUXl4UlFVRlZMRVZCUVRORExFTkJRV3BDTEVOQlRFYzdVMEZLVUR0RFFVWnZRanM3T3pzN096czdPenM3TzBGQmVVSnFRaXhKUVVGTkxITkNRVUZQTEZWQlFVTXNVVUZCUkN4RlFVRlhMRWxCUVZnc1JVRkJhVUlzUlVGQmFrSXNSVUZCY1VJc1NVRkJja0lzUlVGQk9FSTdRVUZET1VNc1VVRkJUU3hyUWtGQmEwSXNVMEZCVXl4UlFVRlVMRVZCUVcxQ0xFTkJRVzVDTEVWQlFYTkNMRU5CUVhSQ0xFTkJRV3hDTEVOQlJIZERPMEZCUlRsRExGRkJRVTBzWjBKQlFXZENMRXRCUVVzc1pVRkJUQ3hEUVVGb1FpeERRVVozUXpzN1FVRkpPVU1zVjBGQlR5eHhRa0ZCY1VJc1lVRkJja0lzUlVGQmIwTXNTVUZCY0VNc1JVRkJNRU1zUlVGQk1VTXNRMEZCVUN4RFFVbzRRenREUVVFNVFqczdPenM3T3pzN096czdRVUZuUW1Jc1NVRkJUU3hyUTBGQllTeFZRVUZETEVOQlFVUXNSVUZCU1N4RFFVRktPMWRCUVZVc1MwRkJTeXhKUVVGTUxFTkJRVlVzUTBGQlF5eEhRVUZKTEVOQlFVb3NSMEZCVlN4SlFVRkpMRU5CUVVvN1EwRkJMMEk3T3pzN096czdPenM3T3pzN1FVRmhia0lzU1VGQlRTeHpSRUZCZFVJc1ZVRkJReXhSUVVGRUxFVkJRVmNzU1VGQldDeEZRVUZwUWl4RlFVRnFRanRYUVVGM1FpeERRVUZITEZGQlFVWXNSMEZCWVN4SlFVRmlMRWRCUVhOQ0xGZEJRVmNzUlVGQldDeEhRVUZwUWl4SlFVRjRRenREUVVGNFFqczdPenM3T3pzN096czdPenM3UVVGak4wSXNTVUZCVFN4elJFRkJkVUlzVlVGQlF5eExRVUZFTEVWQlFWRXNTVUZCVWl4RlFVRmpMRVZCUVdRN1YwRkJjVUlzUTBGQlF5eFJRVUZSTEVsQlFWSXNRMEZCUkN4SlFVRnJRaXhMUVVGTExFbEJRVXdzUTBGQmJFSTdRMEZCY2tJN096czdPenM3T3pzN08wRkJWemRDTEVsQlFVMHNNRUpCUVZNc1ZVRkJReXhEUVVGRUxFVkJRVWtzUTBGQlNpeEZRVUZWTzBGQlF6VkNMRkZCUVUwc1UwRkJVeXhGUVVGVUxFTkJSSE5DT3p0QlFVYzFRaXhUUVVGTExFbEJRVWtzUjBGQlNpeEpRVUZYTEVOQlFXaENMRVZCUVcxQ08wRkJRMllzV1VGQlNTeEZRVUZGTEdOQlFVWXNRMEZCYVVJc1IwRkJha0lzUTBGQlNpeEZRVUV5UWp0QlFVTjJRaXh0UWtGQlR5eEhRVUZRTEVsQlFXTXNkMEpCUVZrc1EwRkJXaXhGUVVGbExFZEJRV1lzU1VGQmMwSXNSVUZCUlN4SFFVRkdMRWxCUVZNc1JVRkJSU3hIUVVGR0xFTkJRVlFzUjBGQmEwSXNRMEZCZUVNc1EwRkVVenRUUVVFelFqdExRVVJLT3p0QlFVMUJMRmRCUVU4c1RVRkJVQ3hEUVZRMFFqdERRVUZXT3pzN096czdPenM3TzBGQmIwSm1MRWxCUVUwc1owVkJRVFJDTEZWQlFVTXNUVUZCUkN4RlFVRlRMRXRCUVZRc1JVRkJaMElzVVVGQmFFSXNSVUZCTmtJN1FVRkRiRVVzV1VGQlVTeHBRa0ZCYVVJc1MwRkJha0lzUTBGQlVpeERRVVJyUlRzN1FVRkhiRVVzVjBGQlR6dEJRVU5JTEZkQlFVY3NWMEZCVnl4TFFVRkxMRWRCUVV3c1EwRkJVeXhMUVVGVUxFTkJRVmdzUjBGQk5rSXNUMEZCVHl4RFFVRlFPMEZCUTJoRExGZEJRVWNzVjBGQlZ5eExRVUZMTEVkQlFVd3NRMEZCVXl4TFFVRlVMRU5CUVZnc1IwRkJOa0lzVDBGQlR5eERRVUZRTzB0QlJuQkRMRU5CU0d0Rk8wTkJRVGRDT3pzN096czdPenRCUVdWc1F5eEpRVUZOTERoRFFVRnRRaXhWUVVGRExFOUJRVVE3VjBGQllTeFZRVUZWTEVkQlFWWXNSMEZCWjBJc1MwRkJTeXhGUVVGTU8wTkJRVGRDT3pzN096czdPenM3UVVGVGVrSXNTVUZCVFN3d1FrRkJVenRSUVVGRExEUkVRVUZOTzFGQlFVY3NORVJCUVUwN1YwRkJUU3hMUVVGTExFMUJRVXdzVFVGQmFVSXNUVUZCVFN4SFFVRk9MRU5CUVdwQ0xFZEJRVGhDTEVkQlFUbENPME5CUVhSQ096czdPenM3T3pzN096czdRVUZaWml4SlFVRk5MSGREUVVGblFpeFZRVUZETEU5QlFVUXNSVUZCVlN4UlFVRldMRVZCUVhWQ08wRkJRMmhFTEZGQlFVa3NWMEZCVnl4UFFVRllMRU5CUkRSRE8wRkJSV2hFTEZGQlFVMHNWMEZCVnl4VFFVRlRMRXRCUVZRc1EwRkJaU3hIUVVGbUxFTkJRVmdzUTBGR01FTTdRVUZIYUVRc1VVRkJUU3hYUVVGWExGTkJRVk1zUTBGQlZDeERRVUZZTEVOQlNEQkRPenMwUWtGSk1VSXNOa0pCUVdsQ0xGTkJRVk1zUTBGQlZDeERRVUZxUWl4RlFVb3dRanM3VVVGSk1VTXNPRUpCU2pCRE8xRkJTWEJETEdkRFFVcHZRenM3TzBGQlRXaEVMRmxCUVZFc1YwRkJWeXhMUVVGWUxFTkJRVklzUTBGT1owUTdPMEZCVVdoRUxGbEJRVkVzVVVGQlVqdEJRVU5CTEdGQlFVc3NSMEZCVER0QlFVTkpMSGRDUVVGWkxFdEJRVm9zUTBGRVNqdEJRVVZKTEd0Q1FVWktPMEZCUkVFc1lVRkpTeXhIUVVGTU8wRkJRMGtzZDBKQlFWa3NTMEZCV2l4RFFVUktPMEZCUlVrc2EwSkJSa283UVVGS1FTeGhRVTlMTEVkQlFVdzdRVUZEU1N4M1FrRkJXU3hMUVVGYUxFTkJSRW83UVVGRlNTeHJRa0ZHU2p0QlFWQkJMR0ZCVlVzc1IwRkJURHRCUVVOSkxIZENRVUZaTEV0QlFWb3NRMEZFU2p0QlFVVkpMR3RDUVVaS08wRkJWa0VzUzBGU1owUTdPMEZCZFVKb1JDeFJRVUZKTEVsQlFVb3NSVUZCVlR0QlFVTk9MRzlDUVVGWkxFbEJRVm9zUTBGRVRUdExRVUZXT3p0QlFVbEJMRmRCUVU4c1VVRkJVQ3hEUVROQ1owUTdRMEZCZGtJN096czdPenM3T3pzN096dEJRWGREZEVJc1NVRkJUU3c0UWtGQlZ5eFZRVUZETEV0QlFVUXNSVUZCVVN4SFFVRlNMRVZCUVdFc1IwRkJZanRYUVVGeFFpeExRVUZMTEVkQlFVd3NRMEZCVXl4TFFVRkxMRWRCUVV3c1EwRkJVeXhMUVVGVUxFVkJRV2RDTEVkQlFXaENMRU5CUVZRc1JVRkJLMElzUjBGQkwwSTdRMEZCY2tJN096czdPenM3T3pzN1FVRlZha0lzU1VGQlRTd3dRa0ZCVXl4VlFVRkRMRkZCUVVRc1JVRkJWeXhSUVVGWUxFVkJRWEZDTEZGQlFYSkNPMUZCUVN0Q0xHdEZRVUZaTzFkQlFVMHNjMEpCUVZVc1YwRkJXU3haUVVGWkxGZEJRVmNzVVVGQldDeERRVUZhTEVkQlFXMURMRXRCUVVzc1IwRkJUQ3hEUVVGVExGTkJRVlFzUlVGQmIwSXNVVUZCY0VJc1EwRkJia003UTBGQmRrVTdPenM3T3pzN08wRkJVV1lzU1VGQlRTeDNRMEZCWjBJc1ZVRkJReXhIUVVGRUxFVkJRVTBzWVVGQlRqdFhRVUYzUWl4cFFrRkJReXhEUVVGTkxFZEJRVTRzUTBGQlJDeEhRVUZsTEU5QlFVOHNUMEZCVHl4aFFVRlFMRU5CUVZBc1IwRkJLMElzUTBGQk9VTTdRMEZCZUVJN096czdPenM3TzBGQlVYUkNMRWxCUVUwc01FTkJRV2xDTEZWQlFVTXNVVUZCUkN4RlFVRlhMR0ZCUVZnN1YwRkJOa0lzV1VGQldTeFBRVUZQTEdGQlFWQXNRMEZCV2p0RFFVRTNRanM3T3pzN096czdPMEZCVTNaQ0xFbEJRVTBzYzBOQlFXVXNWVUZCUXl4UlFVRkVMRVZCUVZjc1MwRkJXQ3hGUVVGeFFqdEJRVU0zUXl4UlFVRk5MRlZCUVZVc1MwRkJTeXhSUVVGUkxFTkJRVklzUTBGQlRDeERRVVEyUWp0QlFVVTNReXhSUVVGTkxGTkJRVk1zU1VGQlN5eEpRVUZKTEV0QlFVb3NRMEZHZVVJN1FVRkhOME1zVVVGQlRTeHRRa0ZCYlVJc1MwRkJTeXhIUVVGTUxFTkJRVk1zVjBGQlZ5eE5RVUZZTEVWQlFXMUNMRU5CUVRWQ0xFTkJRVzVDTEVOQlNIVkRPenRCUVVzM1F5eFhRVUZQTEV0QlFVc3NTMEZCVEN4RFFVRlhMRzFDUVVGdFFpeFBRVUZ1UWl4RFFVRllMRWRCUVhsRExFOUJRWHBETEVOQlRITkRPME5CUVhKQ0lpd2labWxzWlNJNkltTmhiR011YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUh0Y2JpQWdJQ0JvWVhOUWNtOXdaWEowZVN4Y2JpQWdJQ0JwYzA1MWJTeGNiaUFnSUNCbWFXNWtWbUZzZFdWQmJtUlZibWwwTEZ4dUlDQWdJSFJ2UkdWamFXMWhiRnh1ZlNCbWNtOXRJQ2N1TDNWMGFXeHpKenRjYmx4dVkyOXVjM1FnV2tWU1QxOVFUMGxPVkNBOUlIdGNiaUFnSUNCNE9pQXdMRnh1SUNBZ0lIazZJREFzWEc0Z0lDQWdlam9nTUZ4dWZUdGNibHh1WTI5dWMzUWdaR2x6ZEdGdVkyVXhSQ0E5SUNoaExDQmlLU0E5UGlCTllYUm9MbUZpY3loaElDMGdZaWs3WEc1Y2JpOHFYRzRnSUNBZ1FXNW5iR1VnWW1WMGQyVmxiaUJ3YjJsdWRITmNiaUFnSUNCY2JpQWdJQ0JVY21GdWMyeGhkR1Z6SUhSb1pTQm9lWEJ2ZEdobGRHbGpZV3dnYkdsdVpTQnpieUIwYUdGMElIUm9aU0FuWm5KdmJTY2dZMjl2Y21ScGJtRjBaWE5jYmlBZ0lDQmhjbVVnWVhRZ01Dd3dYRzRnSUNBZ1hHNGdJQ0FnUUhCaGNtRnRJRnR2WW1wbFkzUmRPaUJZSUdGdVpDQlpJR052YjNKa2FXNWhkR1Z6SUc5bUlHWnliMjBnY0c5cGJuUmNiaUFnSUNCQWNHRnlZVzBnVzI5aWFtVmpkRjA2SUZnZ1lXNWtJRmtnWTI5eVpHbHVZWFJsY3lCdlppQjBieUJ3YjJsdWRGeHVJQ0FnSUVCeVpYUjFjbTRnVzNKaFpHbGhibDA2SUVGdVoyeGxJR0psZEhkbFpXNGdkR2hsSUhSM2J5QndiMmx1ZEhNZ2FXNGdjbUZrYVdGdWMxeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQmhibWRzWlNBOUlDaGhMQ0JpSUQwZ1drVlNUMTlRVDBsT1ZDa2dQVDRnY21Ga2FXRnVjMVJ2UkdWbmNtVmxjeWhOWVhSb0xtRjBZVzR5S0dFdWVDQXRJR0l1ZUN3Z1lTNTVJQzBnWWk1NUtTazdYRzVjYmk4cVhHNGdJQ0FnUTI5dWRtVnlkQ0JrWldkeVpXVnpJSFJ2SUhKaFpHbGhibk5jYmlBZ0lDQmNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZaaGJIVmxJR2x1SUdSbFozSmxaWE5jYmlBZ0lDQkFjbVYwZFhKdUlGdHVkVzFpWlhKZE9pQldZV3gxWlNCcGJpQnlZV1JwWVc1elhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHUmxaM0psWlhOVWIxSmhaR2xoYm5NZ1BTQW9aR1ZuY21WbGN5a2dQVDRnWkdWbmNtVmxjeUFxSUUxaGRHZ3VVRWtnTHlBeE9EQTdYRzVjYmk4cVhHNGdJQ0FnUkdsc1lYUmxYRzRnSUNBZ1hHNGdJQ0FnUTJoaGJtZGxJSFJvWlNCd2NtOW5jbVZ6YzJsdmJpQmlaWFIzWldWdUlHRWdZVzVrSUdJZ1lXTmpiM0prYVc1bklIUnZJR1JwYkdGMGFXOXVMbHh1SUNBZ0lGeHVJQ0FnSUZOdklHUnBiR0YwYVc5dUlEMGdNQzQxSUhkdmRXeGtJR05vWVc1blpWeHVJQ0FnSUZ4dUlDQWdJR0VnTFMwdExTMHRMUzB0SUdKY2JpQWdJQ0JjYmlBZ0lDQjBiMXh1SUNBZ0lGeHVJQ0FnSUdFZ0xTMHRMU0JpWEc0Z0lDQWdYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCUWNtVjJhVzkxY3lCMllXeDFaVnh1SUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1EzVnljbVZ1ZENCMllXeDFaVnh1SUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1JHbHNZWFJsSUhCeWIyZHlaWE56SUdKNUlIaGNiaUFnSUNCQWNtVjBkWEp1SUZ0dWRXMWlaWEpkT2lCUWNtVjJhVzkxY3lCMllXeDFaU0J3YkhWeklIUm9aU0JrYVd4aGRHVmtJR1JwWm1abGNtVnVZMlZjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnWkdsc1lYUmxJRDBnS0dFc0lHSXNJR1JwYkdGMGFXOXVLU0E5UGlCaElDc2dLQ2hpSUMwZ1lTa2dLaUJrYVd4aGRHbHZiaWs3WEc1Y2JpOHFYRzRnSUNBZ1JHbHpkR0Z1WTJWY2JpQWdJQ0JjYmlBZ0lDQlNaWFIxY201eklIUm9aU0JrYVhOMFlXNWpaU0JpWlhSM1pXVnVJSFIzYnlCdUlHUnBiV1Z1YzJsdmJtRnNJSEJ2YVc1MGN5NWNiaUFnSUNCY2JpQWdJQ0JBY0dGeVlXMGdXMjlpYW1WamRDOXVkVzFpWlhKZE9pQjRJR0Z1WkNCNUlHOXlJR3AxYzNRZ2VDQnZaaUJ3YjJsdWRDQkJYRzRnSUNBZ1FIQmhjbUZ0SUZ0dlltcGxZM1F2Ym5WdFltVnlYVG9nS0c5d2RHbHZibUZzS1RvZ2VDQmhibVFnZVNCdmNpQnFkWE4wSUhnZ2IyWWdjRzlwYm5RZ1FseHVJQ0FnSUVCeVpYUjFjbTRnVzI1MWJXSmxjbDA2SUZSb1pTQmthWE4wWVc1alpTQmlaWFIzWldWdUlIUm9aU0IwZDI4Z2NHOXBiblJ6WEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdScGMzUmhibU5sSUQwZ0tHRXNJR0lnUFNCYVJWSlBYMUJQU1U1VUtTQTlQaUI3WEc0Z0lDQWdMeThnTVVRZ1pHbHRaVzV6YVc5dWMxeHVJQ0FnSUdsbUlDaHBjMDUxYlNoaEtTa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdaR2x6ZEdGdVkyVXhSQ2hoTENCaUtUdGNibHh1SUNBZ0lDOHZJRTExYkhScExXUnBiV1Z1YzJsdmJtRnNYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnZUVSbGJIUmhJRDBnWkdsemRHRnVZMlV4UkNoaExuZ3NJR0l1ZUNrN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUhsRVpXeDBZU0E5SUdScGMzUmhibU5sTVVRb1lTNTVMQ0JpTG5rcE8xeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCNlJHVnNkR0VnUFNBb2FYTk9kVzBvWVM1NktTa2dQeUJrYVhOMFlXNWpaVEZFS0dFdWVpd2dZaTU2S1NBNklEQTdYRzVjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJRTFoZEdndWMzRnlkQ2dvZUVSbGJIUmhJQ29xSURJcElDc2dLSGxFWld4MFlTQXFLaUF5S1NBcklDaDZSR1ZzZEdFZ0tpb2dNaWtwTzF4dUlDQWdJSDFjYm4wN1hHNWNiaThxWEc0Z0lDQWdSV0Z6WlNCMllXeDFaU0IzYVhSb2FXNGdjbUZ1WjJWa0lIQmhjbUZ0WlhSbGNuTmNiaUFnSUNCY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRkJ5YjJkeVpYTnpJR0psZEhkbFpXNGdNQ0JoYm1RZ01WeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVm1Gc2RXVWdiMllnTUNCd2NtOW5jbVZ6YzF4dUlDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dWbUZzZFdVZ2IyWWdNU0J3Y205bmNtVnpjMXh1SUNBZ0lFQndZWEpoYlNCYmMzUnlhVzVuSUh4OElHWjFibU4wYVc5dVhUb2dUbUZ0WlNCdlppQndjbVZ6WlhRZ1pXRnphVzVuWEc0Z0lDQWdJQ0FnSUhSdklIVnpaU0J2Y2lCblpXNWxjbUYwWldRZ1pXRnphVzVuSUdaMWJtTjBhVzl1WEc0Z0lDQWdRSEpsZEhWeWJpQmJiblZ0WW1WeVhUb2dWbUZzZFdVZ2IyWWdaV0Z6WldRZ2NISnZaM0psYzNNZ2FXNGdjbUZ1WjJWY2Jpb3ZJRnh1Wlhod2IzSjBJR052Ym5OMElHVmhjMlVnUFNBb2NISnZaM0psYzNNc0lHWnliMjBzSUhSdkxDQmxZWE5sS1NBOVBpQjdYRzRnSUNBZ1kyOXVjM1FnY0hKdlozSmxjM05NYVcxcGRHVmtJRDBnY21WemRISnBZM1FvY0hKdlozSmxjM01zSURBc0lERXBPMXh1SUNBZ0lHTnZibk4wSUdWaGMyVmtVSEp2WjNKbGMzTWdQU0JsWVhObEtIQnliMmR5WlhOelRHbHRhWFJsWkNrN1hHNWNiaUFnSUNCeVpYUjFjbTRnWjJWMFZtRnNkV1ZHY205dFVISnZaM0psYzNNb1pXRnpaV1JRY205bmNtVnpjeXdnWm5KdmJTd2dkRzhwTzF4dWZUdGNiaUJjYmk4cVhHNGdJQ0FnU0hsd2IzUmxiblZ6WlZ4dUlDQWdJRnh1SUNBZ0lGSmxkSFZ5Ym5NZ2RHaGxJR2g1Y0c5MFpXNTFjMlVzSUhOcFpHVWdReXdnWjJsMlpXNGdkR2hsSUd4bGJtZDBhSE1nYjJZZ2MybGtaWE1nUVNCaGJtUWdRaTVjYmlBZ0lDQmNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUV4bGJtZDBhQ0J2WmlCQlhHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJNWlc1bmRHZ2diMllnUWx4dUlDQWdJRUJ5WlhSMWNtNGdXMjUxYldKbGNsMDZJRXhsYm1kMGFDQnZaaUJEWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdoNWNHOTBaVzUxYzJVZ1BTQW9ZU3dnWWlrZ1BUNGdUV0YwYUM1emNYSjBLQ2hoSUNvZ1lTa2dLeUFvWWlBcUlHSXBLVHRjYmx4dUx5cGNiaUFnSUNCV1lXeDFaU0JwYmlCeVlXNW5aU0JtY205dElIQnliMmR5WlhOelhHNGdJQ0FnWEc0Z0lDQWdSMmwyWlc0Z1lTQnNiM2RsY2lCc2FXMXBkQ0JoYm1RZ1lXNGdkWEJ3WlhJZ2JHbHRhWFFzSUhkbElISmxkSFZ5YmlCMGFHVWdkbUZzZFdVZ2QybDBhR2x1WEc0Z0lDQWdkR2hoZENCeVlXNW5aU0JoY3lCbGVIQnlaWE56WldRZ1lua2djSEp2WjNKbGMzTWdLR0VnYm5WdFltVnlJR1p5YjIwZ01DMHhLVnh1SUNBZ0lGeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVkdobElIQnliMmR5WlhOeklHSmxkSGRsWlc0Z2JHOTNaWElnWVc1a0lIVndjR1Z5SUd4cGJXbDBjeUJsZUhCeVpYTnpaV1FnTUMweFhHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJNYjNkbGNpQnNhVzFwZENCdlppQnlZVzVuWlZ4dUlDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dWWEJ3WlhJZ2JHbHRhWFFnYjJZZ2NtRnVaMlZjYmlBZ0lDQkFjbVYwZFhKdUlGdHVkVzFpWlhKZE9pQldZV3gxWlNCaGN5QmpZV3hqZFd4aGRHVmtJR1p5YjIwZ2NISnZaM0psYzNNZ2QybDBhR2x1SUhKaGJtZGxJQ2h1YjNRZ2JHbHRhWFJsWkNCM2FYUm9hVzRnY21GdVoyVXBYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR2RsZEZaaGJIVmxSbkp2YlZCeWIyZHlaWE56SUQwZ0tIQnliMmR5WlhOekxDQm1jbTl0TENCMGJ5a2dQVDRnS0MwZ2NISnZaM0psYzNNZ0tpQm1jbTl0S1NBcklDaHdjbTluY21WemN5QXFJSFJ2S1NBcklHWnliMjA3WEc1Y2JpOHFYRzRnSUNBZ1VISnZaM0psYzNNZ2QybDBhR2x1SUdkcGRtVnVJSEpoYm1kbFhHNGdJQ0FnWEc0Z0lDQWdSMmwyWlc0Z1lTQnNiM2RsY2lCc2FXMXBkQ0JoYm1RZ1lXNGdkWEJ3WlhJZ2JHbHRhWFFzSUhkbElISmxkSFZ5YmlCMGFHVWdjSEp2WjNKbGMzTmNiaUFnSUNBb1pYaHdjbVZ6YzJWa0lHRnpJR0VnYm5WdFltVnlJREF0TVNrZ2NtVndjbVZ6Wlc1MFpXUWdZbmtnZEdobElHZHBkbVZ1SUhaaGJIVmxMQ0JoYm1SY2JpQWdJQ0JzYVcxcGRDQjBhR0YwSUhCeWIyZHlaWE56SUhSdklIZHBkR2hwYmlBd0xURXVYRzRnSUNBZ1hHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJXWVd4MVpTQjBieUJtYVc1a0lIQnliMmR5WlhOeklIZHBkR2hwYmlCbmFYWmxiaUJ5WVc1blpWeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVEc5M1pYSWdiR2x0YVhRZ1hHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJWY0hCbGNpQnNhVzFwZEZ4dUlDQWdJRUJ5WlhSMWNtNGdXMjUxYldKbGNsMDZJRkJ5YjJkeVpYTnpJRzltSUhaaGJIVmxJSGRwZEdocGJpQnlZVzVuWlNCaGN5QmxlSEJ5WlhOelpXUWdNQzB4WEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdkbGRGQnliMmR5WlhOelJuSnZiVlpoYkhWbElEMGdLSFpoYkhWbExDQm1jbTl0TENCMGJ5a2dQVDRnS0haaGJIVmxJQzBnWm5KdmJTa2dMeUFvZEc4Z0xTQm1jbTl0S1R0Y2JseHVMeXBjYmlBZ0lDQlBabVp6WlhRZ1ltVjBkMlZsYmlCMGQyOGdiMkpxWldOMGN5QnZaaUJ1ZFcxaVpYSnpYRzVjYmlBZ0lDQkpaaUJ3Y205d1pYSjBlU0JwY3lCbWIzVnVaQ0JwYmlCaUlHNXZkQ0J3Y21WelpXNTBJR2x1SUdFc0lHbDBJSGRwYkd3Z2NtVjBkWEp1SUdBd1lDQm1iM0lnZEdoaGRDQndjbTl3TGx4dUlDQWdJRnh1SUNBZ0lFQndZWEpoYlNCYlVHOXBiblJkT2lCR2FYSnpkQ0J2WW1wbFkzUmNiaUFnSUNCQWNHRnlZVzBnVzFCdmFXNTBYVG9nVTJWamIyNWtJRzlpYW1WamRGeHVJQ0FnSUVCeVpYUjFjbTRnVzA5bVpuTmxkRjA2SUVScGMzUmhibU5sSUcxbGRISnBZM01nWW1WMGQyVmxiaUIwZDI4Z2NHOXBiblJ6WEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUc5bVpuTmxkQ0E5SUNoaExDQmlLU0E5UGlCN1hHNGdJQ0FnWTI5dWMzUWdiMlptYzJWMElEMGdlMzA3WEc1Y2JpQWdJQ0JtYjNJZ0tHeGxkQ0JyWlhrZ2FXNGdZaWtnZTF4dUlDQWdJQ0FnSUNCcFppQW9ZaTVvWVhOUGQyNVFjbTl3WlhKMGVTaHJaWGtwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J2Wm1aelpYUmJhMlY1WFNBOUlHaGhjMUJ5YjNCbGNuUjVLR0VzSUd0bGVTa2dQeUJpVzJ0bGVWMGdMU0JoVzJ0bGVWMGdPaUF3TzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WMGRYSnVJRzltWm5ObGREdGNibjA3WEc1Y2JpOHFYRzRnSUNBZ1VHOXBiblFnWm5KdmJTQmhibWRzWlNCaGJtUWdaR2x6ZEdGdVkyVmNiaUFnSUNCY2JpQWdJQ0JBY0dGeVlXMGdXMjlpYW1WamRGMDZJREpFSUhCdmFXNTBJRzltSUc5eWFXZHBibHh1SUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1FXNW5iR1VnWm5KdmJTQnZjbWxuYVc1Y2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRVJwYzNSaGJtTmxJR1p5YjIwZ2IzSnBaMmx1WEc0Z0lDQWdRSEpsZEhWeWJpQmJiMkpxWldOMFhUb2dRMkZzWTNWc1lYUmxaQ0F5UkNCd2IybHVkRnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0J3YjJsdWRFWnliMjFCYm1kc1pVRnVaRVJwYzNSaGJtTmxJRDBnS0c5eWFXZHBiaXdnWVc1bmJHVXNJR1JwYzNSaGJtTmxLU0E5UGlCN1hHNGdJQ0FnWVc1bmJHVWdQU0JrWldkeVpXVnpWRzlTWVdScFlXNXpLR0Z1WjJ4bEtUdGNibHh1SUNBZ0lISmxkSFZ5YmlCN1hHNGdJQ0FnSUNBZ0lIZzZJR1JwYzNSaGJtTmxJQ29nVFdGMGFDNWpiM01vWVc1bmJHVXBJQ3NnYjNKcFoybHVMbmdzWEc0Z0lDQWdJQ0FnSUhrNklHUnBjM1JoYm1ObElDb2dUV0YwYUM1emFXNG9ZVzVuYkdVcElDc2diM0pwWjJsdUxubGNiaUFnSUNCOU8xeHVmVHRjYmx4dUx5cGNiaUFnSUNCRGIyNTJaWEowSUhKaFpHbGhibk1nZEc4Z1pHVm5jbVZsYzF4dUlDQWdJRnh1SUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1ZtRnNkV1VnYVc0Z2NtRmthV0Z1YzF4dUlDQWdJRUJ5WlhSMWNtNGdXMjUxYldKbGNsMDZJRlpoYkhWbElHbHVJR1JsWjNKbFpYTmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdjbUZrYVdGdWMxUnZSR1ZuY21WbGN5QTlJQ2h5WVdScFlXNXpLU0E5UGlCeVlXUnBZVzV6SUNvZ01UZ3dJQzhnVFdGMGFDNVFTVHRjYmx4dUx5cGNiaUFnSUNCU1pYUjFjbTRnY21GdVpHOXRJRzUxYldKbGNpQmlaWFIzWldWdUlISmhibWRsWEc0Z0lDQWdYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkSUNodmNIUnBiMjVoYkNrNklFOTFkSEIxZENCdGFXNXBiWFZ0WEc0Z0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZElDaHZjSFJwYjI1aGJDazZJRTkxZEhCMWRDQnRZWGhwYlhWdFhHNGdJQ0FnUUhKbGRIVnliaUJiYm5WdFltVnlYVG9nVW1GdVpHOXRJRzUxYldKbGNpQjNhWFJvYVc0Z2NtRnVaMlVzSUc5eUlEQWdZVzVrSURFZ2FXWWdibTl1WlNCd2NtOTJhV1JsWkZ4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCeVlXNWtiMjBnUFNBb2JXbHVJRDBnTUN3Z2JXRjRJRDBnTVNrZ1BUNGdUV0YwYUM1eVlXNWtiMjBvS1NBcUlDaHRZWGdnTFNCdGFXNHBJQ3NnYldsdU8xeHVYRzR2S2x4dUlDQWdJRU5oYkdOMWJHRjBaU0J5Wld4aGRHbDJaU0IyWVd4MVpWeHVJQ0FnSUZ4dUlDQWdJRlJoYTJWeklIUm9aU0J2Y0dWeVlYUnZjaUJoYm1RZ2RtRnNkV1VnWm5KdmJTQmhJSE4wY21sdVp5d2dhV1VnWENJclBUVmNJaXdnWVc1a0lHRndjR3hwWlhOY2JpQWdJQ0IwYnlCMGFHVWdZM1Z5Y21WdWRDQjJZV3gxWlNCMGJ5QnlaWE52YkhabElHRWdibVYzSUhSaGNtZGxkQzVjYmlBZ0lDQmNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUVOMWNuSmxiblFnZG1Gc2RXVmNiaUFnSUNCQWNHRnlZVzBnVzNOMGNtbHVaMTA2SUZKbGJHRjBhWFpsSUhaaGJIVmxYRzRnSUNBZ1FISmxkSFZ5YmlCYmJuVnRZbVZ5WFRvZ1RtVjNJSFpoYkhWbFhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElISmxiR0YwYVhabFZtRnNkV1VnUFNBb1kzVnljbVZ1ZEN3Z2NtVnNZWFJwZG1VcElEMCtJSHRjYmlBZ0lDQnNaWFFnYm1WM1ZtRnNkV1VnUFNCamRYSnlaVzUwTzF4dUlDQWdJR052Ym5OMElHVnhkV0YwYVc5dUlEMGdjbVZzWVhScGRtVXVjM0JzYVhRb0p6MG5LVHRjYmlBZ0lDQmpiMjV6ZENCdmNHVnlZWFJ2Y2lBOUlHVnhkV0YwYVc5dVd6QmRPMXh1SUNBZ0lHeGxkQ0I3SUhWdWFYUXNJSFpoYkhWbElIMGdQU0JtYVc1a1ZtRnNkV1ZCYm1SVmJtbDBLR1Z4ZFdGMGFXOXVXekZkS1R0Y2JseHVJQ0FnSUhaaGJIVmxJRDBnY0dGeWMyVkdiRzloZENoMllXeDFaU2s3WEc1Y2JpQWdJQ0J6ZDJsMFkyZ2dLRzl3WlhKaGRHOXlLU0I3WEc0Z0lDQWdZMkZ6WlNBbkt5YzZYRzRnSUNBZ0lDQWdJRzVsZDFaaGJIVmxJQ3M5SUhaaGJIVmxPMXh1SUNBZ0lDQWdJQ0JpY21WaGF6dGNiaUFnSUNCallYTmxJQ2N0SnpwY2JpQWdJQ0FnSUNBZ2JtVjNWbUZzZFdVZ0xUMGdkbUZzZFdVN1hHNGdJQ0FnSUNBZ0lHSnlaV0ZyTzF4dUlDQWdJR05oYzJVZ0p5b25PbHh1SUNBZ0lDQWdJQ0J1WlhkV1lXeDFaU0FxUFNCMllXeDFaVHRjYmlBZ0lDQWdJQ0FnWW5KbFlXczdYRzRnSUNBZ1kyRnpaU0FuTHljNlhHNGdJQ0FnSUNBZ0lHNWxkMVpoYkhWbElDODlJSFpoYkhWbE8xeHVJQ0FnSUNBZ0lDQmljbVZoYXp0Y2JpQWdJQ0I5WEc0Z0lDQWdYRzRnSUNBZ2FXWWdLSFZ1YVhRcElIdGNiaUFnSUNBZ0lDQWdibVYzVm1Gc2RXVWdLejBnZFc1cGREdGNiaUFnSUNCOVhHNWNiaUFnSUNCeVpYUjFjbTRnYm1WM1ZtRnNkV1U3WEc1OU8xeHVYRzR2S2x4dUlDQWdJRkpsYzNSeWFXTjBJSFpoYkhWbElIUnZJSEpoYm1kbFhHNGdJQ0FnWEc0Z0lDQWdVbVYwZFhKdUlIWmhiSFZsSUhkcGRHaHBiaUIwYUdVZ2NtRnVaMlVnYjJZZ2JHOTNaWEpNYVcxcGRDQmhibVFnZFhCd1pYSk1hVzFwZEZ4dUlDQWdJRnh1SUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1ZtRnNkV1VnZEc4Z2EyVmxjQ0IzYVhSb2FXNGdjbUZ1WjJWY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRXh2ZDJWeUlHeHBiV2wwSUc5bUlISmhibWRsWEc0Z0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQlZjSEJsY2lCc2FXMXBkQ0J2WmlCeVlXNW5aVnh1SUNBZ0lFQnlaWFIxY200Z1cyNTFiV0psY2wwNklGWmhiSFZsSUdGeklHeHBiV2wwWldRZ2QybDBhR2x1SUdkcGRtVnVJSEpoYm1kbFhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElISmxjM1J5YVdOMElEMGdLSFpoYkhWbExDQnRhVzRzSUcxaGVDa2dQVDRnVFdGMGFDNXRZWGdvVFdGMGFDNXRhVzRvZG1Gc2RXVXNJRzFoZUNrc0lHMXBiaWs3WEc1Y2JpOHFYRzRnSUNBZ1JuSmhiV1Z5WVhSbExXbHVaR1Z3Wlc1a1pXNTBJSE50YjI5MGFHbHVaMXh1WEc0Z0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQk9aWGNnZG1Gc2RXVmNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUU5c1pDQjJZV3gxWlZ4dUlDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dSbkpoYldVZ1pIVnlZWFJwYjI1Y2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMGdLRzl3ZEdsdmJtRnNLVG9nVTIxdmIzUm9hVzVuSUNnd0lHbHpJRzV2Ym1VcFhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElITnRiMjkwYUNBOUlDaHVaWGRXWVd4MVpTd2diMnhrVm1Gc2RXVXNJR1IxY21GMGFXOXVMQ0J6Ylc5dmRHaHBibWNnUFNBd0tTQTlQaUIwYjBSbFkybHRZV3dvYjJ4a1ZtRnNkV1VnS3lBb1pIVnlZWFJwYjI0Z0tpQW9ibVYzVm1Gc2RXVWdMU0J2YkdSV1lXeDFaU2tnTHlCTllYUm9MbTFoZUNoemJXOXZkR2hwYm1jc0lHUjFjbUYwYVc5dUtTa3BPMXh1WEc0dktseHVJQ0FnSUVOdmJuWmxjblFnZUNCd1pYSWdjMlZqYjI1a0lIUnZJSEJsY2lCbWNtRnRaU0IyWld4dlkybDBlU0JpWVhObFpDQnZiaUJtY0hOY2JpQWdJQ0JjYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklGVnVhWFFnY0dWeUlITmxZMjl1WkZ4dUlDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dSbkpoYldVZ1pIVnlZWFJwYjI0Z2FXNGdiWE5jYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYzNCbFpXUlFaWEpHY21GdFpTQTlJQ2g0Y0hNc0lHWnlZVzFsUkhWeVlYUnBiMjRwSUQwK0lDaHBjMDUxYlNoNGNITXBLU0EvSUhod2N5QXZJQ2d4TURBd0lDOGdabkpoYldWRWRYSmhkR2x2YmlrZ09pQXdPMXh1WEc0dktseHVJQ0FnSUVOdmJuWmxjblFnZG1Wc2IyTnBkSGtnYVc1MGJ5QjJaV3hwWTJsMGVTQndaWElnYzJWamIyNWtYRzRnSUNBZ1hHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJWYm1sMElIQmxjaUJtY21GdFpWeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nUm5KaGJXVWdaSFZ5WVhScGIyNGdhVzRnYlhOY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2MzQmxaV1JRWlhKVFpXTnZibVFnUFNBb2RtVnNiMk5wZEhrc0lHWnlZVzFsUkhWeVlYUnBiMjRwSUQwK0lIWmxiRzlqYVhSNUlDb2dLREV3TURBZ0x5Qm1jbUZ0WlVSMWNtRjBhVzl1S1R0Y2JseHVMeXBjYmlBZ0lDQkRjbVZoZEdVZ2MzUmxjSEJsWkNCMlpYSnphVzl1SUc5bUlEQXRNU0J3Y205bmNtVnpjMXh1SUNBZ0lGeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nUTNWeWNtVnVkQ0IyWVd4MVpWeHVJQ0FnSUVCd1lYSmhiU0JiYVc1MFhUb2dUblZ0WW1WeUlHOW1JSE4wWlhCelhHNGdJQ0FnUUhKbGRIVnliaUJiYm5WdFltVnlYVG9nVTNSbGNIQmxaQ0IyWVd4MVpWeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnpkR1Z3VUhKdlozSmxjM01nUFNBb2NISnZaM0psYzNNc0lITjBaWEJ6S1NBOVBpQjdYRzRnSUNBZ1kyOXVjM1FnYzJWbmJXVnVkQ0E5SURFZ0x5QW9jM1JsY0hNZ0xTQXhLVHRjYmlBZ0lDQmpiMjV6ZENCMFlYSm5aWFFnUFNBeElDMGdLREVnTHlCemRHVndjeWs3WEc0Z0lDQWdZMjl1YzNRZ2NISnZaM0psYzNOUFpsUmhjbWRsZENBOUlFMWhkR2d1YldsdUtIQnliMmR5WlhOeklDOGdkR0Z5WjJWMExDQXhLVHRjYmx4dUlDQWdJSEpsZEhWeWJpQk5ZWFJvTG1ac2IyOXlLSEJ5YjJkeVpYTnpUMlpVWVhKblpYUWdMeUJ6WldkdFpXNTBLU0FxSUhObFoyMWxiblE3WEc1OU95SmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvY2FsYy5qc1xuICoqIG1vZHVsZSBpZCA9IDIwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgQ0FNRUxfQ0FTRV9QQVRURVJOID0gLyhbYS16XSkoW0EtWl0pL2c7XG52YXIgUkVQTEFDRV9URU1QTEFURSA9ICckMS0kMic7XG52YXIgSEFTX1BFUkZPUk1BTkNFX05PVyA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCcgJiYgcGVyZm9ybWFuY2Uubm93O1xuXG4vKlxuICAgIEdldCB2YXIgdHlwZSBhcyBzdHJpbmdcbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtzdHJpbmddOiBSZXR1cm5zLCBmb3IgaW5zdGFuY2UgJ09iamVjdCcgaWYgW29iamVjdCBPYmplY3RdXG4qL1xudmFyIHZhclR5cGUgPSBmdW5jdGlvbiAodmFyaWFibGUpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhcmlhYmxlKS5zbGljZSg4LCAtMSk7XG59O1xuXG4vKlxuICAgIENvbnZlcnQgY2FtZWxDYXNlIHRvIGRhc2gtY2FzZVxuXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHJldHVybiBbc3RyaW5nXVxuKi9cbnZhciBjYW1lbFRvRGFzaCA9IGV4cG9ydHMuY2FtZWxUb0Rhc2ggPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKENBTUVMX0NBU0VfUEFUVEVSTiwgUkVQTEFDRV9URU1QTEFURSkudG9Mb3dlckNhc2UoKTtcbn07XG5cbnZhciBjcmVhdGVEZWxpbWl0ZWQgPSBleHBvcnRzLmNyZWF0ZURlbGltaXRlZCA9IGZ1bmN0aW9uICh2YWx1ZXMsIHRlcm1zLCBkZWxpbWl0ZXIsIGNob3ApIHtcbiAgICB2YXIgbnVtVGVybXMgPSB0ZXJtcy5sZW5ndGg7XG4gICAgdmFyIGNvbWJpbmVkID0gJyc7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVRlcm1zOyBpKyspIHtcbiAgICAgICAgdmFyIHRlcm0gPSB0ZXJtc1tpXTtcbiAgICAgICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eSh0ZXJtKSkge1xuICAgICAgICAgICAgY29tYmluZWQgKz0gdmFsdWVzW3Rlcm1dICsgZGVsaW1pdGVyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNob3ApIHtcbiAgICAgICAgY29tYmluZWQgPSBjb21iaW5lZC5zbGljZSgwLCAtY2hvcCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbWJpbmVkO1xufTtcblxuLypcbiAgICBDcmVhdGUgYSBmdW5jdGlvbiBzdHJpbmdcblxuICAgICcyMHB4JywgJ3RyYW5zbGF0ZScgLT4gJ3RyYW5zbGF0ZSgyMHB4KSdcblxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEByZXR1cm4gW3N0cmluZ11cbiovXG52YXIgY3JlYXRlRnVuY3Rpb25TdHJpbmcgPSBleHBvcnRzLmNyZWF0ZUZ1bmN0aW9uU3RyaW5nID0gZnVuY3Rpb24gKHZhbHVlLCBwcmVmaXgpIHtcbiAgICByZXR1cm4gcHJlZml4ICsgJygnICsgdmFsdWUgKyAnKSc7XG59O1xuXG4vKlxuICAgIEdlbmVyYXRlIGN1cnJlbnQgdGltZXN0YW1wXG4gICAgXG4gICAgQHJldHVybiBbdGltZXN0YW1wXTogQ3VycmVudCBVTklYIHRpbWVzdGFtcFxuKi9cbnZhciBjdXJyZW50VGltZSA9IGV4cG9ydHMuY3VycmVudFRpbWUgPSBIQVNfUEVSRk9STUFOQ0VfTk9XID8gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBwZXJmb3JtYW5jZS5ub3coKTtcbn0gOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xufTtcblxuLypcbiAgICBTcGxpdCBhIHZhbHVlIGludG8gYSB2YWx1ZS91bml0IG9iamVjdFxuICAgIFxuICAgICAgICBcIjIwMHB4XCIgLT4geyB2YWx1ZTogMjAwLCB1bml0OiBcInB4XCIgfVxuICAgICAgICBcbiAgICBAcGFyYW0gW3N0cmluZ106IFZhbHVlIHRvIHNwbGl0XG4gICAgQHJldHVybiBbb2JqZWN0XTogT2JqZWN0IHdpdGggdmFsdWUgYW5kIHVuaXQgcHJvcHNcbiovXG52YXIgZmluZFZhbHVlQW5kVW5pdCA9IGV4cG9ydHMuZmluZFZhbHVlQW5kVW5pdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZS5tYXRjaCkge1xuICAgICAgICB2YXIgc3BsaXRWYWx1ZSA9IHZhbHVlLm1hdGNoKC8oLT9cXGQqXFwuP1xcZCopKC4qKS8pO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcGFyc2VGbG9hdChzcGxpdFZhbHVlWzFdKSxcbiAgICAgICAgICAgIHVuaXQ6IHNwbGl0VmFsdWVbMl1cbiAgICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4geyB2YWx1ZTogdmFsdWUgfTtcbiAgICB9XG59O1xuXG4vKlxuICAgIFNwbGl0IGNvbG9yIHN0cmluZyBpbnRvIG1hcCBvZiBjb2xvciBwcm9wZXJ0aWVzXG5cbiAgICBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMClcIiwgW1wiUmVkXCIsICdHcmVlblwiLCBcIkJsdWVcIiwgXCJBbHBoYVwiXVxuXG4gICAgeyBSZWQ6IDI1NS4uLiB9XG4qL1xudmFyIGdldENvbG9yVmFsdWVzID0gZXhwb3J0cy5nZXRDb2xvclZhbHVlcyA9IGZ1bmN0aW9uICh2YWx1ZSwgY29sb3JUZXJtcykge1xuICAgIHZhciBudW1Db2xvclRlcm1zID0gY29sb3JUZXJtcy5sZW5ndGg7XG4gICAgdmFyIGNvbG9yVmFsdWVzID0ge307XG4gICAgdmFyIGNvbG9ycyA9IHNwbGl0Q29tbWFEZWxpbWl0ZWQoZ2V0VmFsdWVGcm9tRnVuY3Rpb25TdHJpbmcodmFsdWUpKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtQ29sb3JUZXJtczsgaSsrKSB7XG4gICAgICAgIGNvbG9yVmFsdWVzW2NvbG9yVGVybXNbaV1dID0gY29sb3JzW2ldICE9PSB1bmRlZmluZWQgPyBjb2xvcnNbaV0gOiAxO1xuICAgIH1cblxuICAgIHJldHVybiBjb2xvclZhbHVlcztcbn07XG5cbi8qXG4gICAgR2V0IHZhbHVlIGZyb20gZnVuY3Rpb24gc3RyaW5nXG5cbiAgICBcInRyYW5zbGF0ZVgoMjBweClcIiAtPiBcIjIwcHhcIlxuKi9cbnZhciBnZXRWYWx1ZUZyb21GdW5jdGlvblN0cmluZyA9IGV4cG9ydHMuZ2V0VmFsdWVGcm9tRnVuY3Rpb25TdHJpbmcgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUuc3Vic3RyaW5nKHZhbHVlLmluZGV4T2YoJygnKSArIDEsIHZhbHVlLmxhc3RJbmRleE9mKCcpJykpO1xufTtcblxuLypcbiAgICBDaGVjayBpZiB0d28gb2JqZWN0cyBoYXZlIGNoYW5nZWQgZnJvbSBlYWNoIG90aGVyXG4gICAgXG4gICAgQHBhcmFtIFtvYmplY3RdOiBJbnB1dCBBXG4gICAgQHBhcmFtIFtvYmplY3RdOiBJbnB1dCBCXG4gICAgQHJldHVybiBbYm9vbGVhbl06IFRydWUgaWYgZGlmZmVyZW50XG4qL1xudmFyIGhhc0NoYW5nZWQgPSBleHBvcnRzLmhhc0NoYW5nZWQgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgIHZhciBjaGFuZ2VkID0gZmFsc2U7XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gYSkge1xuICAgICAgICBpZiAoYS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICBpZiAoaGFzUHJvcGVydHkoYiwga2V5KSkge1xuICAgICAgICAgICAgICAgIGlmIChhW2tleV0gIT09IGJba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoYW5nZWQ7XG59O1xuXG4vKlxuICAgIENoZWNrIGlmIG9iamVjdCBoYXMgcHJvcGVydHkgYW5kIGl0IGlzbid0IHVuZGVmaW5lZFxuXG4gICAgQHBhcmFtIFtvYmplY3RdXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHJldHVybiBbYm9vbGVhbl1cbiovXG52YXIgaGFzUHJvcGVydHkgPSBleHBvcnRzLmhhc1Byb3BlcnR5ID0gZnVuY3Rpb24gKG9iamVjdCwgcHJvcGVydHlOYW1lKSB7XG4gICAgcmV0dXJuIG9iamVjdC5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eU5hbWUpICYmIG9iamVjdFtwcm9wZXJ0eU5hbWVdICE9PSB1bmRlZmluZWQ7XG59O1xuXG4vKlxuICAgIElzIHV0aWxzIHZhciBhbiBhcnJheSA/IFxuICAgIFxuICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdXRpbHMudmFyVHlwZSA9PT0gJ0FycmF5J1xuKi9cbnZhciBpc0FycmF5ID0gZXhwb3J0cy5pc0FycmF5ID0gZnVuY3Rpb24gKGFycikge1xuICAgIHJldHVybiB2YXJUeXBlKGFycikgPT09ICdBcnJheSc7XG59O1xuXG4vKlxuICAgIElzIHV0aWxzIHZhciBhIGZ1bmN0aW9uID8gXG4gICAgXG4gICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB1dGlscy52YXJUeXBlID09PSAnRnVuY3Rpb24nXG4qL1xudmFyIGlzRnVuYyA9IGV4cG9ydHMuaXNGdW5jID0gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB2YXJUeXBlKG9iaikgPT09ICdGdW5jdGlvbic7XG59O1xuXG4vKlxuICAgIElzIHV0aWxzIHZhciBhIG51bWJlcj9cbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiA9PT0gJ251bWJlcidcbiovXG52YXIgaXNOdW0gPSBleHBvcnRzLmlzTnVtID0gZnVuY3Rpb24gKG51bSkge1xuICAgIHJldHVybiB0eXBlb2YgbnVtID09PSAnbnVtYmVyJztcbn07XG5cbi8qXG4gICAgSXMgdXRpbHMgdmFyIGFuIG9iamVjdD9cbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiA9PT0gJ29iamVjdCdcbiovXG52YXIgaXNPYmogPSBleHBvcnRzLmlzT2JqID0gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jztcbn07XG5cbi8qXG4gICAgSXMgdXRpbHMgYSByZWxhdGl2ZSB2YWx1ZSBhc3NpZ25tZW50P1xuICAgIFxuICAgIEBwYXJhbSBbc3RyaW5nXTogVmFyaWFibGUgdG8gdGVzdFxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBJZiB1dGlscyBsb29rcyBsaWtlIGEgcmVsYXRpdmUgdmFsdWUgYXNzaWdubWVudFxuKi9cbnZhciBpc1JlbGF0aXZlVmFsdWUgPSBleHBvcnRzLmlzUmVsYXRpdmVWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mICYmIHZhbHVlLmluZGV4T2YoJz0nKSA+IDAgPyB0cnVlIDogZmFsc2U7XG59O1xuXG4vKlxuICAgIElzIHV0aWxzIHZhciBhIHN0cmluZyA/IFxuICAgIFxuICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mIHN0ciA9PT0gJ3N0cmluZydcbiovXG52YXIgaXNTdHJpbmcgPSBleHBvcnRzLmlzU3RyaW5nID0gZnVuY3Rpb24gKHN0cikge1xuICAgIHJldHVybiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJztcbn07XG5cbi8qXG4gICAgQHBhcmFtIFtzdHJpbmcgfHwgTm9kZUxpc3RdOlxuICAgICAgICBJZiBzdHJpbmcsIHRyZWF0ZWQgYXMgc2VsZWN0b3IuXG4gICAgICAgIElmIG5vdCwgdHJlYXRlZCBhcyBwcmVleGlzdGluZyBOb2RlTGlzdFxuXG4gICAgQHJldHVybiBbQXJyYXldXG4qL1xudmFyIHNlbGVjdERvbSA9IGV4cG9ydHMuc2VsZWN0RG9tID0gZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgdmFyIG5vZGVzID0gdHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpIDogc2VsZWN0b3I7XG4gICAgcmV0dXJuIG5vZGVzLmxlbmd0aCA/IFtdLnNsaWNlLmNhbGwobm9kZXMpIDogW10ucHVzaChub2Rlcyk7XG59O1xuXG4vKlxuICAgIFNwbGl0IGNvbW1hLWRlbGltaXRlZCBzdHJpbmdcblxuICAgIFwiZm9vLGJhclwiIC0+IFtcImZvb1wiLCBcImJhclwiXVxuXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHJldHVybiBbYXJyYXldXG4qL1xudmFyIHNwbGl0Q29tbWFEZWxpbWl0ZWQgPSBleHBvcnRzLnNwbGl0Q29tbWFEZWxpbWl0ZWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodmFsdWUpID8gdmFsdWUuc3BsaXQoLyxcXHMqLykgOiBbdmFsdWVdO1xufTtcblxuLypcbiAgICBTcGxpdCBzcGFjZS1kZWxpbWl0ZWQgc3RyaW5nXG5cbiAgICBcImZvbyBiYXJcIiAtPiBbXCJmb29cIiwgXCJiYXJcIl1cblxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEByZXR1cm4gW2FycmF5XVxuKi9cbnZhciBzcGxpdFNwYWNlRGVsaW1pdGVkID0gZXhwb3J0cy5zcGxpdFNwYWNlRGVsaW1pdGVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHZhbHVlKSA/IHZhbHVlLnNwbGl0KCcgJykgOiBbdmFsdWVdO1xufTtcblxuLypcbiAgICBDb252ZXJ0IG51bWJlciB0byB4IGRlY2ltYWwgcGxhY2VzXG5cbiAgICBAcGFyYW0gW251bWJlcl1cbiAgICBAcGFyYW0gW251bWJlcl1cbiAgICBAcmV0dXJuIFtudW1iZXJdXG4qL1xudmFyIHRvRGVjaW1hbCA9IGV4cG9ydHMudG9EZWNpbWFsID0gZnVuY3Rpb24gKG51bSkge1xuICAgIHZhciBwcmVjaXNpb24gPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyAyIDogYXJndW1lbnRzWzFdO1xuXG4gICAgcHJlY2lzaW9uID0gTWF0aC5wb3coMTAsIHByZWNpc2lvbik7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobnVtICogcHJlY2lzaW9uKSAvIHByZWNpc2lvbjtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12ZFhScGJITXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3TzBGQlFVRXNTVUZCVFN4eFFrRkJjVUlzYVVKQlFYSkNPMEZCUTA0c1NVRkJUU3h0UWtGQmJVSXNUMEZCYmtJN1FVRkRUaXhKUVVGTkxITkNRVUYxUWl4UFFVRlBMRmRCUVZBc1MwRkJkVUlzVjBGQmRrSXNTVUZCYzBNc1dVRkJXU3hIUVVGYU96czdPenM3T3p0QlFWRnVSU3hKUVVGTkxGVkJRVlU3VjBGQldTeFBRVUZQTEZOQlFWQXNRMEZCYVVJc1VVRkJha0lzUTBGQk1FSXNTVUZCTVVJc1EwRkJLMElzVVVGQkwwSXNSVUZCZVVNc1MwRkJla01zUTBGQkswTXNRMEZCTDBNc1JVRkJhMFFzUTBGQlF5eERRVUZFTzBOQlFUbEVPenM3T3pzN096dEJRVkZVTEVsQlFVMHNiME5CUVdNc1ZVRkJReXhOUVVGRU8xZEJRVmtzVDBGQlR5eFBRVUZRTEVOQlFXVXNhMEpCUVdZc1JVRkJiVU1zWjBKQlFXNURMRVZCUVhGRUxGZEJRWEpFTzBOQlFWbzdPMEZCUlhCQ0xFbEJRVTBzTkVOQlFXdENMRlZCUVVNc1RVRkJSQ3hGUVVGVExFdEJRVlFzUlVGQlowSXNVMEZCYUVJc1JVRkJNa0lzU1VGQk0wSXNSVUZCYjBNN1FVRkRMMFFzVVVGQlRTeFhRVUZYTEUxQlFVMHNUVUZCVGl4RFFVUTRRenRCUVVVdlJDeFJRVUZKTEZkQlFWY3NSVUZCV0N4RFFVWXlSRHM3UVVGSkwwUXNVMEZCU3l4SlFVRkpMRWxCUVVrc1EwRkJTaXhGUVVGUExFbEJRVWtzVVVGQlNpeEZRVUZqTEVkQlFUbENMRVZCUVcxRE8wRkJReTlDTEZsQlFVMHNUMEZCVHl4TlFVRk5MRU5CUVU0c1EwRkJVQ3hEUVVSNVFqdEJRVVV2UWl4WlFVRkpMRTlCUVU4c1kwRkJVQ3hEUVVGelFpeEpRVUYwUWl4RFFVRktMRVZCUVdsRE8wRkJRemRDTEhkQ1FVRlpMRTlCUVU4c1NVRkJVQ3hKUVVGbExGTkJRV1lzUTBGRWFVSTdVMEZCYWtNN1MwRkdTanM3UVVGUFFTeFJRVUZKTEVsQlFVb3NSVUZCVlR0QlFVTk9MRzFDUVVGWExGTkJRVk1zUzBGQlZDeERRVUZsTEVOQlFXWXNSVUZCYTBJc1EwRkJReXhKUVVGRUxFTkJRVGRDTEVOQlJFMDdTMEZCVmpzN1FVRkpRU3hYUVVGUExGRkJRVkFzUTBGbUswUTdRMEZCY0VNN096czdPenM3T3pzN08wRkJNa0o0UWl4SlFVRk5MSE5FUVVGMVFpeFZRVUZETEV0QlFVUXNSVUZCVVN4TlFVRlNPMWRCUVhOQ0xHVkJRVlU3UTBGQmFFTTdPenM3T3pzN1FVRlBOMElzU1VGQlRTeHZRMEZCWXl4elFrRkJjMEk3VjBGQlRTeFpRVUZaTEVkQlFWbzdRMEZCVGl4SFFVRXdRanRYUVVGTkxFbEJRVWtzU1VGQlNpeEhRVUZYTEU5QlFWZzdRMEZCVGpzN096czdPenM3T3p0QlFWVndSU3hKUVVGTkxEaERRVUZ0UWl4VlFVRkRMRXRCUVVRc1JVRkJWenRCUVVOMlF5eFJRVUZKTEUxQlFVMHNTMEZCVGl4RlFVRmhPMEZCUTJJc1dVRkJUU3hoUVVGaExFMUJRVTBzUzBGQlRpeERRVUZaTEcxQ1FVRmFMRU5CUVdJc1EwRkVUenM3UVVGSFlpeGxRVUZQTzBGQlEwZ3NiVUpCUVU4c1YwRkJWeXhYUVVGWExFTkJRVmdzUTBGQldDeERRVUZRTzBGQlEwRXNhMEpCUVU4c1YwRkJWeXhEUVVGWUxFTkJRVkE3VTBGR1NpeERRVWhoTzB0QlFXcENMRTFCVDA4N1FVRkRTQ3hsUVVGUExFVkJRVVVzV1VGQlJpeEZRVUZRTEVOQlJFYzdTMEZRVUR0RFFVUTBRanM3T3pzN096czdPMEZCYjBKNlFpeEpRVUZOTERCRFFVRnBRaXhWUVVGRExFdEJRVVFzUlVGQlVTeFZRVUZTTEVWQlFYVkNPMEZCUTJwRUxGRkJRVTBzWjBKQlFXZENMRmRCUVZjc1RVRkJXQ3hEUVVReVFqdEJRVVZxUkN4UlFVRk5MR05CUVdNc1JVRkJaQ3hEUVVZeVF6dEJRVWRxUkN4UlFVRk5MRk5CUVZNc2IwSkJRVzlDTERKQ1FVRXlRaXhMUVVFelFpeERRVUZ3UWl4RFFVRlVMRU5CU0RKRE96dEJRVXRxUkN4VFFVRkxMRWxCUVVrc1NVRkJTU3hEUVVGS0xFVkJRVThzU1VGQlNTeGhRVUZLTEVWQlFXMUNMRWRCUVc1RExFVkJRWGRETzBGQlEzQkRMRzlDUVVGWkxGZEJRVmNzUTBGQldDeERRVUZhTEVsQlFUWkNMRTFCUVVNc1EwRkJUeXhEUVVGUUxFMUJRV01zVTBGQlpDeEhRVUV5UWl4UFFVRlBMRU5CUVZBc1EwRkJOVUlzUjBGQmQwTXNRMEZCZUVNc1EwRkVUenRMUVVGNFF6czdRVUZKUVN4WFFVRlBMRmRCUVZBc1EwRlVhVVE3UTBGQmRrSTdPenM3T3pzN1FVRnBRblpDTEVsQlFVMHNhMFZCUVRaQ0xGVkJRVU1zUzBGQlJEdFhRVUZYTEUxQlFVMHNVMEZCVGl4RFFVRm5RaXhOUVVGTkxFOUJRVTRzUTBGQll5eEhRVUZrTEVsQlFYRkNMRU5CUVhKQ0xFVkJRWGRDTEUxQlFVMHNWMEZCVGl4RFFVRnJRaXhIUVVGc1FpeERRVUY0UXp0RFFVRllPenM3T3pzN096czdRVUZUYmtNc1NVRkJUU3hyUTBGQllTeFZRVUZETEVOQlFVUXNSVUZCU1N4RFFVRktMRVZCUVZVN1FVRkRhRU1zVVVGQlNTeFZRVUZWTEV0QlFWWXNRMEZFTkVJN08wRkJSMmhETEZOQlFVc3NTVUZCU1N4SFFVRktMRWxCUVZjc1EwRkJhRUlzUlVGQmJVSTdRVUZEWml4WlFVRkpMRVZCUVVVc1kwRkJSaXhEUVVGcFFpeEhRVUZxUWl4RFFVRktMRVZCUVRKQ08wRkJRM1pDTEdkQ1FVRkpMRmxCUVZrc1EwRkJXaXhGUVVGbExFZEJRV1lzUTBGQlNpeEZRVUY1UWp0QlFVTnlRaXh2UWtGQlNTeEZRVUZGTEVkQlFVWXNUVUZCVnl4RlFVRkZMRWRCUVVZc1EwRkJXQ3hGUVVGdFFqdEJRVU51UWl3NFFrRkJWU3hKUVVGV0xFTkJSRzFDTzJsQ1FVRjJRanRoUVVSS0xFMUJTVTg3UVVGRFNDd3dRa0ZCVlN4SlFVRldMRU5CUkVjN1lVRktVRHRUUVVSS08wdEJSRW83TzBGQldVRXNWMEZCVHl4UFFVRlFMRU5CWm1kRE8wTkJRVlk3T3pzN096czdPenRCUVhsQ2JrSXNTVUZCVFN4dlEwRkJZeXhWUVVGRExFMUJRVVFzUlVGQlV5eFpRVUZVTzFkQlFUQkNMRTlCUVU4c1kwRkJVQ3hEUVVGelFpeFpRVUYwUWl4TFFVRjFReXhQUVVGUExGbEJRVkFzVFVGQmVVSXNVMEZCZWtJN1EwRkJha1U3T3pzN096czdPMEZCVVhCQ0xFbEJRVTBzTkVKQlFWVXNWVUZCUXl4SFFVRkVPMWRCUVZNc1VVRkJVU3hIUVVGU0xFMUJRV2xDTEU5QlFXcENPME5CUVZRN096czdPenM3TzBGQlVXaENMRWxCUVUwc01FSkJRVk1zVlVGQlF5eEhRVUZFTzFkQlFWTXNVVUZCVVN4SFFVRlNMRTFCUVdsQ0xGVkJRV3BDTzBOQlFWUTdPenM3T3pzN08wRkJVV1lzU1VGQlRTeDNRa0ZCVVN4VlFVRkRMRWRCUVVRN1YwRkJVeXhQUVVGUExFZEJRVkFzUzBGQlpTeFJRVUZtTzBOQlFWUTdPenM3T3pzN08wRkJVV1FzU1VGQlRTeDNRa0ZCVVN4VlFVRkRMRWRCUVVRN1YwRkJVeXhQUVVGUExFZEJRVkFzUzBGQlpTeFJRVUZtTzBOQlFWUTdPenM3T3pzN08wRkJVV1FzU1VGQlRTdzBRMEZCYTBJc1ZVRkJReXhMUVVGRU8xZEJRVmNzUzBGQlF5eEpRVUZUTEUxQlFVMHNUMEZCVGl4SlFVRnBRaXhOUVVGTkxFOUJRVTRzUTBGQll5eEhRVUZrTEVsQlFYRkNMRU5CUVhKQ0xFZEJRVEJDTEVsQlFYSkVMRWRCUVRSRUxFdEJRVFZFTzBOQlFWZzdPenM3T3pzN08wRkJVWGhDTEVsQlFVMHNPRUpCUVZjc1ZVRkJReXhIUVVGRU8xZEJRVk1zVDBGQlR5eEhRVUZRTEV0QlFXVXNVVUZCWmp0RFFVRlVPenM3T3pzN096czdRVUZUYWtJc1NVRkJUU3huUTBGQldTeFZRVUZETEZGQlFVUXNSVUZCWXp0QlFVTnVReXhSUVVGTkxGRkJRVkVzVDBGQlVTeFJRVUZRTEV0QlFXOUNMRkZCUVhCQ0xFZEJRV2RETEZOQlFWTXNaMEpCUVZRc1EwRkJNRUlzVVVGQk1VSXNRMEZCYWtNc1IwRkJkVVVzVVVGQmRrVXNRMEZFY1VJN1FVRkZia01zVjBGQlR5eExRVUZETEVOQlFVMHNUVUZCVGl4SFFVRm5RaXhIUVVGSExFdEJRVWdzUTBGQlV5eEpRVUZVTEVOQlFXTXNTMEZCWkN4RFFVRnFRaXhIUVVGM1F5eEhRVUZITEVsQlFVZ3NRMEZCVVN4TFFVRlNMRU5CUVhoRExFTkJSalJDTzBOQlFXUTdPenM3T3pzN096czdRVUZoYkVJc1NVRkJUU3h2UkVGQmMwSXNWVUZCUXl4TFFVRkVPMWRCUVZjc1UwRkJVeXhMUVVGVUxFbEJRV3RDTEUxQlFVMHNTMEZCVGl4RFFVRlpMRTFCUVZvc1EwRkJiRUlzUjBGQmQwTXNRMEZCUXl4TFFVRkVMRU5CUVhoRE8wTkJRVmc3T3pzN096czdPenM3UVVGVk5VSXNTVUZCVFN4dlJFRkJjMElzVlVGQlF5eExRVUZFTzFkQlFWY3NVMEZCVXl4TFFVRlVMRWxCUVd0Q0xFMUJRVTBzUzBGQlRpeERRVUZaTEVkQlFWb3NRMEZCYkVJc1IwRkJjVU1zUTBGQlF5eExRVUZFTEVOQlFYSkRPME5CUVZnN096czdPenM3T3p0QlFWTTFRaXhKUVVGTkxHZERRVUZaTEZWQlFVTXNSMEZCUkN4RlFVRjNRanRSUVVGc1FpeHJSVUZCV1N4cFFrRkJUVHM3UVVGRE4wTXNlVUpCUVZrc1NVRkJUU3hWUVVGc1FpeERRVVEyUXp0QlFVVTNReXhYUVVGUExFdEJRVXNzUzBGQlRDeERRVUZYTEUxQlFVMHNVMEZCVGl4RFFVRllMRWRCUVRoQ0xGTkJRVGxDTEVOQlJuTkRPME5CUVhoQ0lpd2labWxzWlNJNkluVjBhV3h6TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMEwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltTnZibk4wSUVOQlRVVk1YME5CVTBWZlVFRlVWRVZTVGlBOUlDOG9XMkV0ZWwwcEtGdEJMVnBkS1M5bk8xeHVZMjl1YzNRZ1VrVlFURUZEUlY5VVJVMVFURUZVUlNBOUlDY2tNUzBrTWljN1hHNWpiMjV6ZENCSVFWTmZVRVZTUms5U1RVRk9RMFZmVGs5WElEMGdLSFI1Y0dWdlppQndaWEptYjNKdFlXNWpaU0FoUFQwZ0ozVnVaR1ZtYVc1bFpDY2dKaVlnY0dWeVptOXliV0Z1WTJVdWJtOTNLVHRjYmx4dUx5cGNiaUFnSUNCSFpYUWdkbUZ5SUhSNWNHVWdZWE1nYzNSeWFXNW5YRzRnSUNBZ1hHNGdJQ0FnUUhCaGNtRnRPaUJXWVhKcFlXSnNaU0IwYnlCMFpYTjBYRzRnSUNBZ1FISmxkSFZ5YmlCYmMzUnlhVzVuWFRvZ1VtVjBkWEp1Y3l3Z1ptOXlJR2x1YzNSaGJtTmxJQ2RQWW1wbFkzUW5JR2xtSUZ0dlltcGxZM1FnVDJKcVpXTjBYVnh1S2k5Y2JtTnZibk4wSUhaaGNsUjVjR1VnUFNCMllYSnBZV0pzWlNBOVBpQlBZbXBsWTNRdWNISnZkRzkwZVhCbExuUnZVM1J5YVc1bkxtTmhiR3dvZG1GeWFXRmliR1VwTG5Oc2FXTmxLRGdzSUMweEtUdGNibHh1THlwY2JpQWdJQ0JEYjI1MlpYSjBJR05oYldWc1EyRnpaU0IwYnlCa1lYTm9MV05oYzJWY2JseHVJQ0FnSUVCd1lYSmhiU0JiYzNSeWFXNW5YVnh1SUNBZ0lFQnlaWFIxY200Z1czTjBjbWx1WjExY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ1kyRnRaV3hVYjBSaGMyZ2dQU0FvYzNSeWFXNW5LU0E5UGlCemRISnBibWN1Y21Wd2JHRmpaU2hEUVUxRlRGOURRVk5GWDFCQlZGUkZVazRzSUZKRlVFeEJRMFZmVkVWTlVFeEJWRVVwTG5SdlRHOTNaWEpEWVhObEtDazdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQmpjbVZoZEdWRVpXeHBiV2wwWldRZ1BTQW9kbUZzZFdWekxDQjBaWEp0Y3l3Z1pHVnNhVzFwZEdWeUxDQmphRzl3S1NBOVBpQjdYRzRnSUNBZ1kyOXVjM1FnYm5WdFZHVnliWE1nUFNCMFpYSnRjeTVzWlc1bmRHZzdYRzRnSUNBZ2JHVjBJR052YldKcGJtVmtJRDBnSnljN1hHNWNiaUFnSUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElHNTFiVlJsY20xek95QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnZEdWeWJTQTlJSFJsY20xelcybGRPMXh1SUNBZ0lDQWdJQ0JwWmlBb2RtRnNkV1Z6TG1oaGMwOTNibEJ5YjNCbGNuUjVLSFJsY20wcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyMWlhVzVsWkNBclBTQjJZV3gxWlhOYmRHVnliVjBnS3lCa1pXeHBiV2wwWlhJN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNCcFppQW9ZMmh2Y0NrZ2UxeHVJQ0FnSUNBZ0lDQmpiMjFpYVc1bFpDQTlJR052YldKcGJtVmtMbk5zYVdObEtEQXNJQzFqYUc5d0tUdGNiaUFnSUNCOVhHNWNiaUFnSUNCeVpYUjFjbTRnWTI5dFltbHVaV1E3WEc1OU8xeHVYRzR2S2x4dUlDQWdJRU55WldGMFpTQmhJR1oxYm1OMGFXOXVJSE4wY21sdVoxeHVYRzRnSUNBZ0p6SXdjSGduTENBbmRISmhibk5zWVhSbEp5QXRQaUFuZEhKaGJuTnNZWFJsS0RJd2NIZ3BKMXh1WEc0Z0lDQWdRSEJoY21GdElGdHpkSEpwYm1kZFhHNGdJQ0FnUUhCaGNtRnRJRnR6ZEhKcGJtZGRYRzRnSUNBZ1FISmxkSFZ5YmlCYmMzUnlhVzVuWFZ4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCamNtVmhkR1ZHZFc1amRHbHZibE4wY21sdVp5QTlJQ2gyWVd4MVpTd2djSEpsWm1sNEtTQTlQaUJnSkh0d2NtVm1hWGg5S0NSN2RtRnNkV1Y5S1dBN1hHNWNiaThxWEc0Z0lDQWdSMlZ1WlhKaGRHVWdZM1Z5Y21WdWRDQjBhVzFsYzNSaGJYQmNiaUFnSUNCY2JpQWdJQ0JBY21WMGRYSnVJRnQwYVcxbGMzUmhiWEJkT2lCRGRYSnlaVzUwSUZWT1NWZ2dkR2x0WlhOMFlXMXdYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR04xY25KbGJuUlVhVzFsSUQwZ1NFRlRYMUJGVWtaUFVrMUJUa05GWDA1UFZ5QS9JQ2dwSUQwK0lIQmxjbVp2Y20xaGJtTmxMbTV2ZHlncElEb2dLQ2tnUFQ0Z2JtVjNJRVJoZEdVb0tTNW5aWFJVYVcxbEtDazdYRzVjYmk4cVhHNGdJQ0FnVTNCc2FYUWdZU0IyWVd4MVpTQnBiblJ2SUdFZ2RtRnNkV1V2ZFc1cGRDQnZZbXBsWTNSY2JpQWdJQ0JjYmlBZ0lDQWdJQ0FnWENJeU1EQndlRndpSUMwK0lIc2dkbUZzZFdVNklESXdNQ3dnZFc1cGREb2dYQ0p3ZUZ3aUlIMWNiaUFnSUNBZ0lDQWdYRzRnSUNBZ1FIQmhjbUZ0SUZ0emRISnBibWRkT2lCV1lXeDFaU0IwYnlCemNHeHBkRnh1SUNBZ0lFQnlaWFIxY200Z1cyOWlhbVZqZEYwNklFOWlhbVZqZENCM2FYUm9JSFpoYkhWbElHRnVaQ0IxYm1sMElIQnliM0J6WEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdacGJtUldZV3gxWlVGdVpGVnVhWFFnUFNBb2RtRnNkV1VwSUQwK0lIdGNiaUFnSUNCcFppQW9kbUZzZFdVdWJXRjBZMmdwSUh0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnYzNCc2FYUldZV3gxWlNBOUlIWmhiSFZsTG0xaGRHTm9LQzhvTFQ5Y1hHUXFYRnd1UDF4Y1pDb3BLQzRxS1M4cE8xeHVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMllXeDFaVG9nY0dGeWMyVkdiRzloZENoemNHeHBkRlpoYkhWbFd6RmRLU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lIVnVhWFE2SUNCemNHeHBkRlpoYkhWbFd6SmRYRzRnSUNBZ0lDQWdJSDA3WEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIc2dkbUZzZFdVZ2ZUdGNiaUFnSUNCOVhHNTlPMXh1WEc0dktseHVJQ0FnSUZOd2JHbDBJR052Ykc5eUlITjBjbWx1WnlCcGJuUnZJRzFoY0NCdlppQmpiMnh2Y2lCd2NtOXdaWEowYVdWelhHNWNiaUFnSUNCY0luSm5ZbUVvTWpVMUxDQXlOVFVzSURJMU5Td2dNQ2xjSWl3Z1cxd2lVbVZrWENJc0lDZEhjbVZsYmx3aUxDQmNJa0pzZFdWY0lpd2dYQ0pCYkhCb1lWd2lYVnh1WEc0Z0lDQWdleUJTWldRNklESTFOUzR1TGlCOVhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHZGxkRU52Ykc5eVZtRnNkV1Z6SUQwZ0tIWmhiSFZsTENCamIyeHZjbFJsY20xektTQTlQaUI3WEc0Z0lDQWdZMjl1YzNRZ2JuVnRRMjlzYjNKVVpYSnRjeUE5SUdOdmJHOXlWR1Z5YlhNdWJHVnVaM1JvTzF4dUlDQWdJR052Ym5OMElHTnZiRzl5Vm1Gc2RXVnpJRDBnZTMwN1hHNGdJQ0FnWTI5dWMzUWdZMjlzYjNKeklEMGdjM0JzYVhSRGIyMXRZVVJsYkdsdGFYUmxaQ2huWlhSV1lXeDFaVVp5YjIxR2RXNWpkR2x2YmxOMGNtbHVaeWgyWVd4MVpTa3BPMXh1WEc0Z0lDQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0J1ZFcxRGIyeHZjbFJsY20xek95QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ1kyOXNiM0pXWVd4MVpYTmJZMjlzYjNKVVpYSnRjMXRwWFYwZ1BTQW9ZMjlzYjNKelcybGRJQ0U5UFNCMWJtUmxabWx1WldRcElEOGdZMjlzYjNKelcybGRJRG9nTVR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J5WlhSMWNtNGdZMjlzYjNKV1lXeDFaWE03WEc1OU8xeHVYRzR2S2x4dUlDQWdJRWRsZENCMllXeDFaU0JtY205dElHWjFibU4wYVc5dUlITjBjbWx1WjF4dVhHNGdJQ0FnWENKMGNtRnVjMnhoZEdWWUtESXdjSGdwWENJZ0xUNGdYQ0l5TUhCNFhDSmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdaMlYwVm1Gc2RXVkdjbTl0Um5WdVkzUnBiMjVUZEhKcGJtY2dQU0FvZG1Gc2RXVXBJRDArSUhaaGJIVmxMbk4xWW5OMGNtbHVaeWgyWVd4MVpTNXBibVJsZUU5bUtDY29KeWtnS3lBeExDQjJZV3gxWlM1c1lYTjBTVzVrWlhoUFppZ25LU2NwS1R0Y2JseHVMeXBjYmlBZ0lDQkRhR1ZqYXlCcFppQjBkMjhnYjJKcVpXTjBjeUJvWVhabElHTm9ZVzVuWldRZ1puSnZiU0JsWVdOb0lHOTBhR1Z5WEc0Z0lDQWdYRzRnSUNBZ1FIQmhjbUZ0SUZ0dlltcGxZM1JkT2lCSmJuQjFkQ0JCWEc0Z0lDQWdRSEJoY21GdElGdHZZbXBsWTNSZE9pQkpibkIxZENCQ1hHNGdJQ0FnUUhKbGRIVnliaUJiWW05dmJHVmhibDA2SUZSeWRXVWdhV1lnWkdsbVptVnlaVzUwWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdoaGMwTm9ZVzVuWldRZ1BTQW9ZU3dnWWlrZ1BUNGdlMXh1SUNBZ0lHeGxkQ0JqYUdGdVoyVmtJRDBnWm1Gc2MyVTdYRzVjYmlBZ0lDQm1iM0lnS0d4bGRDQnJaWGtnYVc0Z1lTa2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb1lTNW9ZWE5QZDI1UWNtOXdaWEowZVNoclpYa3BLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvYUdGelVISnZjR1Z5ZEhrb1lpd2dhMlY1S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hoVzJ0bGVWMGdJVDA5SUdKYmEyVjVYU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmphR0Z1WjJWa0lEMGdkSEoxWlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR05vWVc1blpXUWdQU0IwY25WbE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WMGRYSnVJR05vWVc1blpXUTdYRzU5TzF4dVhHNHZLbHh1SUNBZ0lFTm9aV05ySUdsbUlHOWlhbVZqZENCb1lYTWdjSEp2Y0dWeWRIa2dZVzVrSUdsMElHbHpiaWQwSUhWdVpHVm1hVzVsWkZ4dVhHNGdJQ0FnUUhCaGNtRnRJRnR2WW1wbFkzUmRYRzRnSUNBZ1FIQmhjbUZ0SUZ0emRISnBibWRkWEc0Z0lDQWdRSEpsZEhWeWJpQmJZbTl2YkdWaGJsMWNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdhR0Z6VUhKdmNHVnlkSGtnUFNBb2IySnFaV04wTENCd2NtOXdaWEowZVU1aGJXVXBJRDArSUc5aWFtVmpkQzVvWVhOUGQyNVFjbTl3WlhKMGVTaHdjbTl3WlhKMGVVNWhiV1VwSUNZbUlHOWlhbVZqZEZ0d2NtOXdaWEowZVU1aGJXVmRJQ0U5UFNCMWJtUmxabWx1WldRN1hHNWNiaThxWEc0Z0lDQWdTWE1nZFhScGJITWdkbUZ5SUdGdUlHRnljbUY1SUQ4Z1hHNGdJQ0FnWEc0Z0lDQWdRSEJoY21GdE9pQldZWEpwWVdKc1pTQjBieUIwWlhOMFhHNGdJQ0FnUUhKbGRIVnliaUJiWW05dmJHVmhibDA2SUZKbGRIVnlibk1nZEhKMVpTQnBaaUIxZEdsc2N5NTJZWEpVZVhCbElEMDlQU0FuUVhKeVlYa25YRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR2x6UVhKeVlYa2dQU0FvWVhKeUtTQTlQaUIyWVhKVWVYQmxLR0Z5Y2lrZ1BUMDlJQ2RCY25KaGVTYzdYRzVjYmk4cVhHNGdJQ0FnU1hNZ2RYUnBiSE1nZG1GeUlHRWdablZ1WTNScGIyNGdQeUJjYmlBZ0lDQmNiaUFnSUNCQWNHRnlZVzA2SUZaaGNtbGhZbXhsSUhSdklIUmxjM1JjYmlBZ0lDQkFjbVYwZFhKdUlGdGliMjlzWldGdVhUb2dVbVYwZFhKdWN5QjBjblZsSUdsbUlIVjBhV3h6TG5aaGNsUjVjR1VnUFQwOUlDZEdkVzVqZEdsdmJpZGNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdhWE5HZFc1aklEMGdLRzlpYWlrZ1BUNGdkbUZ5Vkhsd1pTaHZZbW9wSUQwOVBTQW5SblZ1WTNScGIyNG5PMXh1WEc0dktseHVJQ0FnSUVseklIVjBhV3h6SUhaaGNpQmhJRzUxYldKbGNqOWNiaUFnSUNCY2JpQWdJQ0JBY0dGeVlXMDZJRlpoY21saFlteGxJSFJ2SUhSbGMzUmNiaUFnSUNCQWNtVjBkWEp1SUZ0aWIyOXNaV0Z1WFRvZ1VtVjBkWEp1Y3lCMGNuVmxJR2xtSUhSNWNHVnZaaUE5UFQwZ0oyNTFiV0psY2lkY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2FYTk9kVzBnUFNBb2JuVnRLU0E5UGlCMGVYQmxiMllnYm5WdElEMDlQU0FuYm5WdFltVnlKenRjYmx4dUx5cGNiaUFnSUNCSmN5QjFkR2xzY3lCMllYSWdZVzRnYjJKcVpXTjBQMXh1SUNBZ0lGeHVJQ0FnSUVCd1lYSmhiVG9nVm1GeWFXRmliR1VnZEc4Z2RHVnpkRnh1SUNBZ0lFQnlaWFIxY200Z1cySnZiMnhsWVc1ZE9pQlNaWFIxY201eklIUnlkV1VnYVdZZ2RIbHdaVzltSUQwOVBTQW5iMkpxWldOMEoxeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnBjMDlpYWlBOUlDaHZZbW9wSUQwK0lIUjVjR1Z2WmlCdlltb2dQVDA5SUNkdlltcGxZM1FuTzF4dVhHNHZLbHh1SUNBZ0lFbHpJSFYwYVd4eklHRWdjbVZzWVhScGRtVWdkbUZzZFdVZ1lYTnphV2R1YldWdWREOWNiaUFnSUNCY2JpQWdJQ0JBY0dGeVlXMGdXM04wY21sdVoxMDZJRlpoY21saFlteGxJSFJ2SUhSbGMzUmNiaUFnSUNCQWNtVjBkWEp1SUZ0aWIyOXNaV0Z1WFRvZ1NXWWdkWFJwYkhNZ2JHOXZhM01nYkdsclpTQmhJSEpsYkdGMGFYWmxJSFpoYkhWbElHRnpjMmxuYm0xbGJuUmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdhWE5TWld4aGRHbDJaVlpoYkhWbElEMGdLSFpoYkhWbEtTQTlQaUFvZG1Gc2RXVWdKaVlnZG1Gc2RXVXVhVzVrWlhoUFppQW1KaUIyWVd4MVpTNXBibVJsZUU5bUtDYzlKeWtnUGlBd0tTQS9JSFJ5ZFdVZ09pQm1ZV3h6WlR0Y2JseHVMeXBjYmlBZ0lDQkpjeUIxZEdsc2N5QjJZWElnWVNCemRISnBibWNnUHlCY2JpQWdJQ0JjYmlBZ0lDQkFjR0Z5WVcwNklGWmhjbWxoWW14bElIUnZJSFJsYzNSY2JpQWdJQ0JBY21WMGRYSnVJRnRpYjI5c1pXRnVYVG9nVW1WMGRYSnVjeUIwY25WbElHbG1JSFI1Y0dWdlppQnpkSElnUFQwOUlDZHpkSEpwYm1jblhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHbHpVM1J5YVc1bklEMGdLSE4wY2lrZ1BUNGdkSGx3Wlc5bUlITjBjaUE5UFQwZ0ozTjBjbWx1WnljN1hHNWNiaThxWEc0Z0lDQWdRSEJoY21GdElGdHpkSEpwYm1jZ2ZId2dUbTlrWlV4cGMzUmRPbHh1SUNBZ0lDQWdJQ0JKWmlCemRISnBibWNzSUhSeVpXRjBaV1FnWVhNZ2MyVnNaV04wYjNJdVhHNGdJQ0FnSUNBZ0lFbG1JRzV2ZEN3Z2RISmxZWFJsWkNCaGN5QndjbVZsZUdsemRHbHVaeUJPYjJSbFRHbHpkRnh1WEc0Z0lDQWdRSEpsZEhWeWJpQmJRWEp5WVhsZFhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElITmxiR1ZqZEVSdmJTQTlJQ2h6Wld4bFkzUnZjaWtnUFQ0Z2UxeHVJQ0FnSUdOdmJuTjBJRzV2WkdWeklEMGdLSFI1Y0dWdlppQnpaV3hsWTNSdmNpQTlQVDBnSjNOMGNtbHVaeWNwSUQ4Z1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZja0ZzYkNoelpXeGxZM1J2Y2lrZ09pQnpaV3hsWTNSdmNqdGNiaUFnSUNCeVpYUjFjbTRnS0c1dlpHVnpMbXhsYm1kMGFDa2dQeUJiWFM1emJHbGpaUzVqWVd4c0tHNXZaR1Z6S1NBNklGdGRMbkIxYzJnb2JtOWtaWE1wTzF4dWZUdGNibHh1THlwY2JpQWdJQ0JUY0d4cGRDQmpiMjF0WVMxa1pXeHBiV2wwWldRZ2MzUnlhVzVuWEc1Y2JpQWdJQ0JjSW1admJ5eGlZWEpjSWlBdFBpQmJYQ0ptYjI5Y0lpd2dYQ0ppWVhKY0lsMWNibHh1SUNBZ0lFQndZWEpoYlNCYmMzUnlhVzVuWFZ4dUlDQWdJRUJ5WlhSMWNtNGdXMkZ5Y21GNVhWeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnpjR3hwZEVOdmJXMWhSR1ZzYVcxcGRHVmtJRDBnS0haaGJIVmxLU0E5UGlCcGMxTjBjbWx1WnloMllXeDFaU2tnUHlCMllXeDFaUzV6Y0d4cGRDZ3ZMRnhjY3lvdktTQTZJRnQyWVd4MVpWMDdYRzVjYmk4cVhHNGdJQ0FnVTNCc2FYUWdjM0JoWTJVdFpHVnNhVzFwZEdWa0lITjBjbWx1WjF4dVhHNGdJQ0FnWENKbWIyOGdZbUZ5WENJZ0xUNGdXMXdpWm05dlhDSXNJRndpWW1GeVhDSmRYRzVjYmlBZ0lDQkFjR0Z5WVcwZ1czTjBjbWx1WjExY2JpQWdJQ0JBY21WMGRYSnVJRnRoY25KaGVWMWNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdjM0JzYVhSVGNHRmpaVVJsYkdsdGFYUmxaQ0E5SUNoMllXeDFaU2tnUFQ0Z2FYTlRkSEpwYm1jb2RtRnNkV1VwSUQ4Z2RtRnNkV1V1YzNCc2FYUW9KeUFuS1NBNklGdDJZV3gxWlYwN1hHNWNiaThxWEc0Z0lDQWdRMjl1ZG1WeWRDQnVkVzFpWlhJZ2RHOGdlQ0JrWldOcGJXRnNJSEJzWVdObGMxeHVYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkWEc0Z0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZFhHNGdJQ0FnUUhKbGRIVnliaUJiYm5WdFltVnlYVnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0IwYjBSbFkybHRZV3dnUFNBb2JuVnRMQ0J3Y21WamFYTnBiMjRnUFNBeUtTQTlQaUI3WEc0Z0lDQWdjSEpsWTJsemFXOXVJRDBnTVRBZ0tpb2djSEpsWTJsemFXOXVPMXh1SUNBZ0lISmxkSFZ5YmlCTllYUm9Mbkp2ZFc1a0tHNTFiU0FxSUhCeVpXTnBjMmx2YmlrZ0x5QndjbVZqYVhOcGIyNDdYRzU5TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy91dGlscy5qc1xuICoqIG1vZHVsZSBpZCA9IDIxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGVmYXVsdFByb3BzID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kZWZhdWx0LXByb3BzJyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IF9kZWZhdWx0UHJvcHMub3BhY2l0eVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OWhiSEJvWVM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPMEZCUVVFN08ydENRVVZsTzBGQlExZ3NkVU5CUkZjaUxDSm1hV3hsSWpvaVlXeHdhR0V1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhzZ2IzQmhZMmwwZVNCOUlHWnliMjBnSnk0dmMyVjBkR2x1WjNNdlpHVm1ZWFZzZEMxd2NtOXdjeWM3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUh0Y2JpQWdJQ0JrWldaaGRXeDBVSEp2Y0hNNklHOXdZV05wZEhsY2JuMDdJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9hbHBoYS5qc1xuICoqIG1vZHVsZSBpZCA9IDIyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdW5pdCA9IHJlcXVpcmUoJy4vdW5pdCcpO1xuXG52YXIgX3VuaXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdW5pdCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgdW5pdDogJ2RlZycsXG4gICAgICAgIHR5cGU6IF91bml0Mi5kZWZhdWx0XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OWhibWRzWlM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPMEZCUVVFN096czdPenRyUWtGRlpUdEJRVU5ZTEd0Q1FVRmpPMEZCUTFZc1kwRkJUU3hMUVVGT08wRkJRMEVzTkVKQlJsVTdTMEZCWkNJc0ltWnBiR1VpT2lKaGJtZHNaUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZFc1cGRGUjVjR1VnWm5KdmJTQW5MaTkxYm1sMEp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdlMXh1SUNBZ0lHUmxabUYxYkhSUWNtOXdjem9nZTF4dUlDQWdJQ0FnSUNCMWJtbDBPaUFuWkdWbkp5eGNiaUFnSUNBZ0lDQWdkSGx3WlRvZ2RXNXBkRlI1Y0dWY2JpQWdJQ0I5WEc1OU95SmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9hbmdsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDIzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcmdiID0gcmVxdWlyZSgnLi9yZ2InKTtcblxudmFyIF9yZ2IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmdiKTtcblxudmFyIF9oc2wgPSByZXF1aXJlKCcuL2hzbCcpO1xuXG52YXIgX2hzbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oc2wpO1xuXG52YXIgX2hleCA9IHJlcXVpcmUoJy4vaGV4Jyk7XG5cbnZhciBfaGV4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hleCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBjb2xvclR5cGVzID0gW19yZ2IyLmRlZmF1bHQsIF9oc2wyLmRlZmF1bHQsIF9oZXgyLmRlZmF1bHRdO1xudmFyIG51bUNvbG9yVHlwZXMgPSBjb2xvclR5cGVzLmxlbmd0aDtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGRlZmF1bHRQcm9wczogX2V4dGVuZHMoe30sIF9yZ2IyLmRlZmF1bHQuZGVmYXVsdFByb3BzLCBfaHNsMi5kZWZhdWx0LmRlZmF1bHRQcm9wcyksXG5cbiAgICB0ZXN0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIF9yZ2IyLmRlZmF1bHQudGVzdCh2YWx1ZSkgfHwgX2hleDIuZGVmYXVsdC50ZXN0KHZhbHVlKSB8fCBfaHNsMi5kZWZhdWx0LnRlc3QodmFsdWUpO1xuICAgIH0sXG5cbiAgICBzcGxpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtQ29sb3JUeXBlczsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY29sb3JUeXBlc1tpXS50ZXN0KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb2xvclR5cGVzW2ldLnNwbGl0KHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBjb21iaW5lOiBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZXMuUmVkICE9PSB1bmRlZmluZWQgPyBfcmdiMi5kZWZhdWx0LmNvbWJpbmUodmFsdWVzKSA6IF9oc2wyLmRlZmF1bHQuY29tYmluZSh2YWx1ZXMpO1xuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTlqYjJ4dmNpNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN1FVRkJRVHM3T3p0QlFVTkJPenM3TzBGQlEwRTdPenM3T3p0QlFVVkJMRWxCUVUwc1lVRkJZU3cyUTBGQllqdEJRVU5PTEVsQlFVMHNaMEpCUVdkQ0xGZEJRVmNzVFVGQldEczdhMEpCUlZBN1FVRkRXQ3dyUWtGQmJVSXNZMEZCU1N4WlFVRktMRVZCUVhGQ0xHTkJRVWtzV1VGQlNpeERRVUY0UXpzN1FVRkZRU3hWUVVGTkxGVkJRVU1zUzBGQlJEdGxRVUZYTEdOQlFVa3NTVUZCU2l4RFFVRlRMRXRCUVZRc1MwRkJiVUlzWTBGQlNTeEpRVUZLTEVOQlFWTXNTMEZCVkN4RFFVRnVRaXhKUVVGelF5eGpRVUZKTEVsQlFVb3NRMEZCVXl4TFFVRlVMRU5CUVhSRE8wdEJRVmc3TzBGQlJVNHNWMEZCVHl4VlFVRkRMRXRCUVVRc1JVRkJWenRCUVVOa0xHRkJRVXNzU1VGQlNTeEpRVUZKTEVOQlFVb3NSVUZCVHl4SlFVRkpMR0ZCUVVvc1JVRkJiVUlzUjBGQmJrTXNSVUZCZDBNN1FVRkRjRU1zWjBKQlFVa3NWMEZCVnl4RFFVRllMRVZCUVdNc1NVRkJaQ3hEUVVGdFFpeExRVUZ1UWl4RFFVRktMRVZCUVN0Q08wRkJRek5DTEhWQ1FVRlBMRmRCUVZjc1EwRkJXQ3hGUVVGakxFdEJRV1FzUTBGQmIwSXNTMEZCY0VJc1EwRkJVQ3hEUVVReVFqdGhRVUV2UWp0VFFVUktPMHRCUkVjN08wRkJVVkFzWVVGQlV5eFZRVUZETEUxQlFVUTdaVUZCV1N4TlFVRkRMRU5CUVU4c1IwRkJVQ3hMUVVGbExGTkJRV1lzUjBGQk5FSXNZMEZCU1N4UFFVRktMRU5CUVZrc1RVRkJXaXhEUVVFM1FpeEhRVUZ0UkN4alFVRkpMRTlCUVVvc1EwRkJXU3hOUVVGYUxFTkJRVzVFTzB0QlFWb2lMQ0ptYVd4bElqb2lZMjlzYjNJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUXZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElISm5ZaUJtY205dElDY3VMM0puWWljN1hHNXBiWEJ2Y25RZ2FITnNJR1p5YjIwZ0p5NHZhSE5zSnp0Y2JtbHRjRzl5ZENCb1pYZ2dabkp2YlNBbkxpOW9aWGduTzF4dVhHNWpiMjV6ZENCamIyeHZjbFI1Y0dWeklEMGdXM0puWWl3Z2FITnNMQ0JvWlhoZE8xeHVZMjl1YzNRZ2JuVnRRMjlzYjNKVWVYQmxjeUE5SUdOdmJHOXlWSGx3WlhNdWJHVnVaM1JvTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCN1hHNGdJQ0FnWkdWbVlYVnNkRkJ5YjNCek9pQjdJQzR1TG5KbllpNWtaV1poZFd4MFVISnZjSE1zSUM0dUxtaHpiQzVrWldaaGRXeDBVSEp2Y0hNZ2ZTeGNibHh1SUNBZ0lIUmxjM1E2SUNoMllXeDFaU2tnUFQ0Z2NtZGlMblJsYzNRb2RtRnNkV1VwSUh4OElHaGxlQzUwWlhOMEtIWmhiSFZsS1NCOGZDQm9jMnd1ZEdWemRDaDJZV3gxWlNrc1hHNWNiaUFnSUNCemNHeHBkRG9nS0haaGJIVmxLU0E5UGlCN1hHNGdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2diblZ0UTI5c2IzSlVlWEJsY3pzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvWTI5c2IzSlVlWEJsYzF0cFhTNTBaWE4wS0haaGJIVmxLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJqYjJ4dmNsUjVjR1Z6VzJsZExuTndiR2wwS0haaGJIVmxLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMHNYRzVjYmlBZ0lDQmpiMjFpYVc1bE9pQW9kbUZzZFdWektTQTlQaUFvZG1Gc2RXVnpMbEpsWkNBaFBUMGdkVzVrWldacGJtVmtLU0EvSUhKbllpNWpiMjFpYVc1bEtIWmhiSFZsY3lrZ09pQm9jMnd1WTI5dFltbHVaU2gyWVd4MVpYTXBYRzU5TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2NvbG9yLmpzXG4gKiogbW9kdWxlIGlkID0gMjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG52YXIgRkxPQVRfUkVHRVggPSAvKC0pPyhcXGRbXFxkXFwuXSopL2c7XG52YXIgZ2VuZXJhdGVUb2tlbiA9IGZ1bmN0aW9uICh0b2tlbikge1xuICAgIHJldHVybiAnJHsnICsgdG9rZW4gKyAnfSc7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG5cbiAgICB0ZXN0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIG1hdGNoZXMgPSB2YWx1ZS5tYXRjaChGTE9BVF9SRUdFWCk7XG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzLmlzQXJyYXkpKG1hdGNoZXMpICYmIG1hdGNoZXMubGVuZ3RoID4gMTtcbiAgICB9LFxuXG4gICAgdGVtcGxhdGU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgY291bnRlciA9IDA7XG4gICAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKEZMT0FUX1JFR0VYLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2VuZXJhdGVUb2tlbihjb3VudGVyKyspO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgc3BsaXRWYWx1ZSA9IHt9O1xuXG4gICAgICAgIHZhbHVlLm1hdGNoKEZMT0FUX1JFR0VYKS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwgaSkge1xuICAgICAgICAgICAgcmV0dXJuIHNwbGl0VmFsdWVbaV0gPSB2YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHNwbGl0VmFsdWU7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMsIHRlbXBsYXRlKSB7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiB2YWx1ZXMpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlID0gdGVtcGxhdGUucmVwbGFjZShnZW5lcmF0ZVRva2VuKGtleSksIHZhbHVlc1trZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICB9XG5cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTlqYjIxd2JHVjRMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN1FVRkJRVHM3UVVGRlFTeEpRVUZOTEdOQlFXTXNhMEpCUVdRN1FVRkRUaXhKUVVGTkxHZENRVUZuUWl4VlFVRkRMRXRCUVVRN1YwRkJWeXhQUVVGUExFdEJRVkFzUjBGQlpTeEhRVUZtTzBOQlFWZzdPMnRDUVVWUU96dEJRVVZZTEZWQlFVMHNWVUZCUXl4TFFVRkVMRVZCUVZjN1FVRkRZaXhaUVVGTkxGVkJRVlVzVFVGQlRTeExRVUZPTEVOQlFWa3NWMEZCV2l4RFFVRldMRU5CUkU4N1FVRkZZaXhsUVVGUkxHOUNRVUZSTEU5QlFWSXNTMEZCYjBJc1VVRkJVU3hOUVVGU0xFZEJRV2xDTEVOQlFXcENMRU5CUm1ZN1MwRkJXRHM3UVVGTFRpeGpRVUZWTEZWQlFVTXNTMEZCUkN4RlFVRlhPMEZCUTJwQ0xGbEJRVWtzVlVGQlZTeERRVUZXTEVOQlJHRTdRVUZGYWtJc1pVRkJUeXhOUVVGTkxFOUJRVTRzUTBGQll5eFhRVUZrTEVWQlFUSkNPMjFDUVVGTkxHTkJRV01zVTBGQlpEdFRRVUZPTEVOQlFXeERMRU5CUm1sQ08wdEJRVmc3TzBGQlMxWXNWMEZCVHl4VlFVRkRMRXRCUVVRc1JVRkJWenRCUVVOa0xGbEJRVTBzWVVGQllTeEZRVUZpTEVOQlJGRTdPMEZCUjJRc1kwRkJUU3hMUVVGT0xFTkJRVmtzVjBGQldpeEZRVUY1UWl4UFFVRjZRaXhEUVVGcFF5eFZRVUZETEV0QlFVUXNSVUZCVVN4RFFVRlNPMjFDUVVGakxGZEJRVmNzUTBGQldDeEpRVUZuUWl4TFFVRm9RanRUUVVGa0xFTkJRV3BETEVOQlNHTTdPMEZCUzJRc1pVRkJUeXhWUVVGUUxFTkJUR003UzBGQldEczdRVUZSVUN4aFFVRlRMRlZCUVVNc1RVRkJSQ3hGUVVGVExGRkJRVlFzUlVGQmMwSTdRVUZETTBJc1lVRkJTeXhKUVVGSkxFZEJRVW9zU1VGQlZ5eE5RVUZvUWl4RlFVRjNRanRCUVVOd1FpeG5Ra0ZCU1N4UFFVRlBMR05CUVZBc1EwRkJjMElzUjBGQmRFSXNRMEZCU2l4RlFVRm5RenRCUVVNMVFpd3lRa0ZCVnl4VFFVRlRMRTlCUVZRc1EwRkJhVUlzWTBGQll5eEhRVUZrTEVOQlFXcENMRVZCUVhGRExFOUJRVThzUjBGQlVDeERRVUZ5UXl4RFFVRllMRU5CUkRSQ08yRkJRV2hETzFOQlJFbzdPMEZCVFVFc1pVRkJUeXhSUVVGUUxFTkJVREpDTzB0QlFYUkNJaXdpWm1sc1pTSTZJbU52YlhCc1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFF2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSHNnYVhOQmNuSmhlU0I5SUdaeWIyMGdKeTR1TDJsdVl5OTFkR2xzY3ljN1hHNWNibU52Ym5OMElFWk1UMEZVWDFKRlIwVllJRDBnTHlndEtUOG9YRnhrVzF4Y1pGeGNMbDBxS1M5bk8xeHVZMjl1YzNRZ1oyVnVaWEpoZEdWVWIydGxiaUE5SUNoMGIydGxiaWtnUFQ0Z0p5UjdKeUFySUhSdmEyVnVJQ3NnSjMwbk8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQjdYRzVjYmlBZ0lDQjBaWE4wT2lBb2RtRnNkV1VwSUQwK0lIdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2JXRjBZMmhsY3lBOUlIWmhiSFZsTG0xaGRHTm9LRVpNVDBGVVgxSkZSMFZZS1R0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUNocGMwRnljbUY1S0cxaGRHTm9aWE1wSUNZbUlHMWhkR05vWlhNdWJHVnVaM1JvSUQ0Z01TazdYRzRnSUNBZ2ZTeGNibHh1SUNBZ0lIUmxiWEJzWVhSbE9pQW9kbUZzZFdVcElEMCtJSHRjYmlBZ0lDQWdJQ0FnYkdWMElHTnZkVzUwWlhJZ1BTQXdPMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkbUZzZFdVdWNtVndiR0ZqWlNoR1RFOUJWRjlTUlVkRldDd2dLQ2tnUFQ0Z1oyVnVaWEpoZEdWVWIydGxiaWhqYjNWdWRHVnlLeXNwS1R0Y2JpQWdJQ0I5TEZ4dVhHNGdJQ0FnYzNCc2FYUTZJQ2gyWVd4MVpTa2dQVDRnZTF4dUlDQWdJQ0FnSUNCamIyNXpkQ0J6Y0d4cGRGWmhiSFZsSUQwZ2UzMDdYRzVjYmlBZ0lDQWdJQ0FnZG1Gc2RXVXViV0YwWTJnb1JreFBRVlJmVWtWSFJWZ3BMbVp2Y2tWaFkyZ29LSFpoYkhWbExDQnBLU0E5UGlCemNHeHBkRlpoYkhWbFcybGRJRDBnZG1Gc2RXVXBPMXh1WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJ6Y0d4cGRGWmhiSFZsTzF4dUlDQWdJSDBzWEc1Y2JpQWdJQ0JqYjIxaWFXNWxPaUFvZG1Gc2RXVnpMQ0IwWlcxd2JHRjBaU2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQm1iM0lnS0d4bGRDQnJaWGtnYVc0Z2RtRnNkV1Z6S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RtRnNkV1Z6TG1oaGMwOTNibEJ5YjNCbGNuUjVLR3RsZVNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBaVzF3YkdGMFpTQTlJSFJsYlhCc1lYUmxMbkpsY0d4aFkyVW9aMlZ1WlhKaGRHVlViMnRsYmloclpYa3BMQ0IyWVd4MVpYTmJhMlY1WFNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHVnRjR3hoZEdVN1hHNGdJQ0FnZlZ4dVhHNTlPeUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvY29tcGxleC5qc1xuICoqIG1vZHVsZSBpZCA9IDI1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfcmdiID0gcmVxdWlyZSgnLi9yZ2InKTtcblxudmFyIF9yZ2IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmdiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGRlZmF1bHRQcm9wczogX3JnYjIuZGVmYXVsdC5kZWZhdWx0UHJvcHMsXG5cbiAgICB0ZXN0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlICYmIHZhbHVlLmluZGV4T2YoJyMnKSA+IC0xO1xuICAgIH0sXG5cbiAgICBzcGxpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciByID0gdm9pZCAwLFxuICAgICAgICAgICAgZyA9IHZvaWQgMCxcbiAgICAgICAgICAgIGIgPSB2b2lkIDA7XG5cbiAgICAgICAgLy8gSWYgd2UgaGF2ZSA2IGNoYXJhY3RlcnMsIGllICNGRjAwMDBcbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+IDQpIHtcbiAgICAgICAgICAgIHIgPSB2YWx1ZS5zdWJzdHIoMSwgMik7XG4gICAgICAgICAgICBnID0gdmFsdWUuc3Vic3RyKDMsIDIpO1xuICAgICAgICAgICAgYiA9IHZhbHVlLnN1YnN0cig1LCAyKTtcblxuICAgICAgICAgICAgLy8gT3Igd2UgaGF2ZSAzIGNoYXJhY3RlcnMsIGllICNGMDBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByID0gdmFsdWUuc3Vic3RyKDEsIDEpO1xuICAgICAgICAgICAgICAgIGcgPSB2YWx1ZS5zdWJzdHIoMiwgMSk7XG4gICAgICAgICAgICAgICAgYiA9IHZhbHVlLnN1YnN0cigzLCAxKTtcbiAgICAgICAgICAgICAgICByICs9IHI7XG4gICAgICAgICAgICAgICAgZyArPSBnO1xuICAgICAgICAgICAgICAgIGIgKz0gYjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgUmVkOiBwYXJzZUludChyLCAxNiksXG4gICAgICAgICAgICBHcmVlbjogcGFyc2VJbnQoZywgMTYpLFxuICAgICAgICAgICAgQmx1ZTogcGFyc2VJbnQoYiwgMTYpLFxuICAgICAgICAgICAgQWxwaGE6IDFcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICByZXR1cm4gX3JnYjIuZGVmYXVsdC5jb21iaW5lKHZhbHVlcyk7XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OW9aWGd1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dEJRVUZCT3pzN096czdhMEpCUldVN1FVRkRXQ3hyUWtGQll5eGpRVUZKTEZsQlFVbzdPMEZCUldRc1ZVRkJUU3hWUVVGRExFdEJRVVE3WlVGQldTeFRRVUZUTEUxQlFVMHNUMEZCVGl4RFFVRmpMRWRCUVdRc1NVRkJjVUlzUTBGQlF5eERRVUZFTzB0QlFURkRPenRCUVVWT0xGZEJRVThzVlVGQlF5eExRVUZFTEVWQlFWYzdRVUZEWkN4WlFVRkpMRlZCUVVvN1dVRkJUeXhWUVVGUU8xbEJRVlVzVlVGQlZqczdPMEZCUkdNc1dVRkpWaXhOUVVGTkxFMUJRVTRzUjBGQlpTeERRVUZtTEVWQlFXdENPMEZCUTJ4Q0xHZENRVUZKTEUxQlFVMHNUVUZCVGl4RFFVRmhMRU5CUVdJc1JVRkJaMElzUTBGQmFFSXNRMEZCU2l4RFFVUnJRanRCUVVWc1FpeG5Ra0ZCU1N4TlFVRk5MRTFCUVU0c1EwRkJZU3hEUVVGaUxFVkJRV2RDTEVOQlFXaENMRU5CUVVvc1EwRkdhMEk3UVVGSGJFSXNaMEpCUVVrc1RVRkJUU3hOUVVGT0xFTkJRV0VzUTBGQllpeEZRVUZuUWl4RFFVRm9RaXhEUVVGS096czdRVUZJYTBJc1UwRkJkRUlzVFVGTlR6dEJRVU5JTEc5Q1FVRkpMRTFCUVUwc1RVRkJUaXhEUVVGaExFTkJRV0lzUlVGQlowSXNRMEZCYUVJc1EwRkJTaXhEUVVSSE8wRkJSVWdzYjBKQlFVa3NUVUZCVFN4TlFVRk9MRU5CUVdFc1EwRkJZaXhGUVVGblFpeERRVUZvUWl4RFFVRktMRU5CUmtjN1FVRkhTQ3h2UWtGQlNTeE5RVUZOTEUxQlFVNHNRMEZCWVN4RFFVRmlMRVZCUVdkQ0xFTkJRV2hDTEVOQlFVb3NRMEZJUnp0QlFVbElMSEZDUVVGTExFTkJRVXdzUTBGS1J6dEJRVXRJTEhGQ1FVRkxMRU5CUVV3c1EwRk1SenRCUVUxSUxIRkNRVUZMTEVOQlFVd3NRMEZPUnp0aFFVNVFPenRCUVdWQkxHVkJRVTg3UVVGRFNDeHBRa0ZCU3l4VFFVRlRMRU5CUVZRc1JVRkJXU3hGUVVGYUxFTkJRVXc3UVVGRFFTeHRRa0ZCVHl4VFFVRlRMRU5CUVZRc1JVRkJXU3hGUVVGYUxFTkJRVkE3UVVGRFFTeHJRa0ZCVFN4VFFVRlRMRU5CUVZRc1JVRkJXU3hGUVVGYUxFTkJRVTQ3UVVGRFFTeHRRa0ZCVHl4RFFVRlFPMU5CU2tvc1EwRnVRbU03UzBGQldEczdRVUV5UWxBc1lVRkJVeXhWUVVGRExFMUJRVVE3WlVGQldTeGpRVUZKTEU5QlFVb3NRMEZCV1N4TlFVRmFPMHRCUVZvaUxDSm1hV3hsSWpvaWFHVjRMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwTDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0J5WjJJZ1puSnZiU0FuTGk5eVoySW5PMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0I3WEc0Z0lDQWdaR1ZtWVhWc2RGQnliM0J6T2lCeVoySXVaR1ZtWVhWc2RGQnliM0J6TEZ4dVhHNGdJQ0FnZEdWemREb2dLSFpoYkhWbEtTQTlQaUFvZG1Gc2RXVWdKaVlnZG1Gc2RXVXVhVzVrWlhoUFppZ25JeWNwSUQ0Z0xURXBMRnh1WEc0Z0lDQWdjM0JzYVhRNklDaDJZV3gxWlNrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0JzWlhRZ2Npd2daeXdnWWp0Y2JseHVJQ0FnSUNBZ0lDQXZMeUJKWmlCM1pTQm9ZWFpsSURZZ1kyaGhjbUZqZEdWeWN5d2dhV1VnSTBaR01EQXdNRnh1SUNBZ0lDQWdJQ0JwWmlBb2RtRnNkV1V1YkdWdVozUm9JRDRnTkNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY2lBOUlIWmhiSFZsTG5OMVluTjBjaWd4TENBeUtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUdjZ1BTQjJZV3gxWlM1emRXSnpkSElvTXl3Z01pazdYRzRnSUNBZ0lDQWdJQ0FnSUNCaUlEMGdkbUZzZFdVdWMzVmljM1J5S0RVc0lESXBPMXh1WEc0Z0lDQWdJQ0FnSUM4dklFOXlJSGRsSUdoaGRtVWdNeUJqYUdGeVlXTjBaWEp6TENCcFpTQWpSakF3WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlJRDBnZG1Gc2RXVXVjM1ZpYzNSeUtERXNJREVwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdaeUE5SUhaaGJIVmxMbk4xWW5OMGNpZ3lMQ0F4S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJR0lnUFNCMllXeDFaUzV6ZFdKemRISW9NeXdnTVNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5SUNzOUlISTdYRzRnSUNBZ0lDQWdJQ0FnSUNCbklDczlJR2M3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmlJQ3M5SUdJN1hHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1VtVmtPaUJ3WVhKelpVbHVkQ2h5TENBeE5pa3NYRzRnSUNBZ0lDQWdJQ0FnSUNCSGNtVmxiam9nY0dGeWMyVkpiblFvWnl3Z01UWXBMRnh1SUNBZ0lDQWdJQ0FnSUNBZ1FteDFaVG9nY0dGeWMyVkpiblFvWWl3Z01UWXBMRnh1SUNBZ0lDQWdJQ0FnSUNBZ1FXeHdhR0U2SURGY2JpQWdJQ0FnSUNBZ2ZUdGNiaUFnSUNCOUxGeHVYRzRnSUNBZ1kyOXRZbWx1WlRvZ0tIWmhiSFZsY3lrZ1BUNGdjbWRpTG1OdmJXSnBibVVvZG1Gc2RXVnpLVnh1ZlRzaVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2hleC5qc1xuICoqIG1vZHVsZSBpZCA9IDI2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGVmYXVsdFByb3BzID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kZWZhdWx0LXByb3BzJyk7XG5cbnZhciBfZGljdGlvbmFyeSA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGljdGlvbmFyeScpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgSHVlOiB7XG4gICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICBtYXg6IDM2MFxuICAgICAgICB9LFxuICAgICAgICBTYXR1cmF0aW9uOiBfZGVmYXVsdFByb3BzLnBlcmNlbnQsXG4gICAgICAgIExpZ2h0bmVzczogX2RlZmF1bHRQcm9wcy5wZXJjZW50LFxuICAgICAgICBBbHBoYTogX2RlZmF1bHRQcm9wcy5vcGFjaXR5XG4gICAgfSxcblxuICAgIHRlc3Q6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgJiYgdmFsdWUuaW5kZXhPZignaHNsJykgPiAtMTtcbiAgICB9LFxuXG4gICAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gKDAsIF91dGlscy5nZXRDb2xvclZhbHVlcykodmFsdWUsIF9kaWN0aW9uYXJ5LmhzbCk7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMuY3JlYXRlRnVuY3Rpb25TdHJpbmcpKCgwLCBfdXRpbHMuY3JlYXRlRGVsaW1pdGVkKSh2YWx1ZXMsIF9kaWN0aW9uYXJ5LmhzbCwgJywgJywgMiksICdoc2xhJyk7XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OW9jMnd1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dEJRVUZCT3p0QlFVTkJPenRCUVVOQk96dHJRa0ZGWlR0QlFVTllMR3RDUVVGak8wRkJRMVlzWVVGQlN6dEJRVU5FTEdsQ1FVRkxMRU5CUVV3N1FVRkRRU3hwUWtGQlN5eEhRVUZNTzFOQlJrbzdRVUZKUVN4NVEwRk1WVHRCUVUxV0xIZERRVTVWTzBGQlQxWXNiME5CVUZVN1MwRkJaRHM3UVVGVlFTeFZRVUZOTEZWQlFVTXNTMEZCUkR0bFFVRlpMRk5CUVZNc1RVRkJUU3hQUVVGT0xFTkJRV01zUzBGQlpDeEpRVUYxUWl4RFFVRkRMRU5CUVVRN1MwRkJOVU03TzBGQlJVNHNWMEZCVHl4VlFVRkRMRXRCUVVRN1pVRkJWeXd5UWtGQlpTeExRVUZtTzB0QlFWZzdPMEZCUlZBc1lVRkJVeXhWUVVGRExFMUJRVVE3WlVGQldTeHBRMEZCY1VJc05FSkJRV2RDTEUxQlFXaENMRzFDUVVGclF5eEpRVUZzUXl4RlFVRjNReXhEUVVGNFF5eERRVUZ5UWl4RlFVRnBSU3hOUVVGcVJUdExRVUZhSWl3aVptbHNaU0k2SW1oemJDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdleUJ3WlhKalpXNTBMQ0J2Y0dGamFYUjVJSDBnWm5KdmJTQW5MaTl6WlhSMGFXNW5jeTlrWldaaGRXeDBMWEJ5YjNCekp6dGNibWx0Y0c5eWRDQjdJR2h6YkNCaGN5Qm9jMnhVWlhKdGN5QjlJR1p5YjIwZ0p5NHZjMlYwZEdsdVozTXZaR2xqZEdsdmJtRnllU2M3WEc1cGJYQnZjblFnZXlCamNtVmhkR1ZFWld4cGJXbDBaV1FzSUdOeVpXRjBaVVoxYm1OMGFXOXVVM1J5YVc1bkxDQm5aWFJEYjJ4dmNsWmhiSFZsY3lCOUlHWnliMjBnSnk0dUwybHVZeTkxZEdsc2N5YzdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJSHRjYmlBZ0lDQmtaV1poZFd4MFVISnZjSE02SUh0Y2JpQWdJQ0FnSUNBZ1NIVmxPaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnRhVzQ2SURBc1hHNGdJQ0FnSUNBZ0lDQWdJQ0J0WVhnNklETTJNRnh1SUNBZ0lDQWdJQ0I5TEZ4dUlDQWdJQ0FnSUNCVFlYUjFjbUYwYVc5dU9pQndaWEpqWlc1MExGeHVJQ0FnSUNBZ0lDQk1hV2RvZEc1bGMzTTZJSEJsY21ObGJuUXNYRzRnSUNBZ0lDQWdJRUZzY0doaE9pQnZjR0ZqYVhSNVhHNGdJQ0FnZlN4Y2JseHVJQ0FnSUhSbGMzUTZJQ2gyWVd4MVpTa2dQVDRnS0haaGJIVmxJQ1ltSUhaaGJIVmxMbWx1WkdWNFQyWW9KMmh6YkNjcElENGdMVEVwTEZ4dVhHNGdJQ0FnYzNCc2FYUTZJQ2gyWVd4MVpTa2dQVDRnWjJWMFEyOXNiM0pXWVd4MVpYTW9kbUZzZFdVc0lHaHpiRlJsY20xektTeGNibHh1SUNBZ0lHTnZiV0pwYm1VNklDaDJZV3gxWlhNcElEMCtJR055WldGMFpVWjFibU4wYVc5dVUzUnlhVzVuS0dOeVpXRjBaVVJsYkdsdGFYUmxaQ2gyWVd4MVpYTXNJR2h6YkZSbGNtMXpMQ0FuTENBbkxDQXlLU3dnSjJoemJHRW5LVnh1ZlR0Y2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9oc2wuanNcbiAqKiBtb2R1bGUgaWQgPSAyN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3VuaXQgPSByZXF1aXJlKCcuL3VuaXQnKTtcblxudmFyIF91bml0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3VuaXQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIHVuaXQ6ICdweCcsXG4gICAgICAgIHR5cGU6IF91bml0Mi5kZWZhdWx0XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OXdlQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN08wRkJRVUU3T3pzN096dHJRa0ZGWlR0QlFVTllMR3RDUVVGak8wRkJRMVlzWTBGQlRTeEpRVUZPTzBGQlEwRXNORUpCUmxVN1MwRkJaQ0lzSW1acGJHVWlPaUp3ZUM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRDOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2RXNXBkRlI1Y0dVZ1puSnZiU0FuTGk5MWJtbDBKenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnZTF4dUlDQWdJR1JsWm1GMWJIUlFjbTl3Y3pvZ2UxeHVJQ0FnSUNBZ0lDQjFibWwwT2lBbmNIZ25MRnh1SUNBZ0lDQWdJQ0IwZVhCbE9pQjFibWwwVkhsd1pWeHVJQ0FnSUgxY2JuMDdJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9weC5qc1xuICoqIG1vZHVsZSBpZCA9IDI4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxudmFyIF9kaWN0aW9uYXJ5ID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kaWN0aW9uYXJ5Jyk7XG5cbnZhciBfZGVmYXVsdFByb3BzID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kZWZhdWx0LXByb3BzJyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgUmVkOiBfZGVmYXVsdFByb3BzLnJnYixcbiAgICAgICAgR3JlZW46IF9kZWZhdWx0UHJvcHMucmdiLFxuICAgICAgICBCbHVlOiBfZGVmYXVsdFByb3BzLnJnYixcbiAgICAgICAgQWxwaGE6IF9kZWZhdWx0UHJvcHMub3BhY2l0eVxuICAgIH0sXG5cbiAgICB0ZXN0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlICYmIHZhbHVlLmluZGV4T2YoJ3JnYicpID4gLTE7XG4gICAgfSxcblxuICAgIHNwbGl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMuZ2V0Q29sb3JWYWx1ZXMpKHZhbHVlLCBfZGljdGlvbmFyeS5yZ2IpO1xuICAgIH0sXG5cbiAgICBjb21iaW5lOiBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzLmNyZWF0ZUZ1bmN0aW9uU3RyaW5nKSgoMCwgX3V0aWxzLmNyZWF0ZURlbGltaXRlZCkodmFsdWVzLCBfZGljdGlvbmFyeS5yZ2IsICcsICcsIDIpLCAncmdiYScpO1xuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTl5WjJJdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenRCUVVGQk96dEJRVU5CT3p0QlFVTkJPenRyUWtGRlpUdEJRVU5ZTEd0Q1FVRmpPMEZCUTFZc09FSkJSRlU3UVVGRlZpeG5RMEZHVlR0QlFVZFdMQ3RDUVVoVk8wRkJTVllzYjBOQlNsVTdTMEZCWkRzN1FVRlBRU3hWUVVGTkxGVkJRVU1zUzBGQlJEdGxRVUZaTEZOQlFWTXNUVUZCVFN4UFFVRk9MRU5CUVdNc1MwRkJaQ3hKUVVGMVFpeERRVUZETEVOQlFVUTdTMEZCTlVNN08wRkJSVTRzVjBGQlR5eFZRVUZETEV0QlFVUTdaVUZCVnl3eVFrRkJaU3hMUVVGbU8wdEJRVmc3TzBGQlJWQXNZVUZCVXl4VlFVRkRMRTFCUVVRN1pVRkJXU3hwUTBGQmNVSXNORUpCUVdkQ0xFMUJRV2hDTEcxQ1FVRnJReXhKUVVGc1F5eEZRVUYzUXl4RFFVRjRReXhEUVVGeVFpeEZRVUZwUlN4TlFVRnFSVHRMUVVGYUlpd2labWxzWlNJNkluSm5ZaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZXlCamNtVmhkR1ZFWld4cGJXbDBaV1FzSUdOeVpXRjBaVVoxYm1OMGFXOXVVM1J5YVc1bkxDQm5aWFJEYjJ4dmNsWmhiSFZsY3lCOUlHWnliMjBnSnk0dUwybHVZeTkxZEdsc2N5YzdYRzVwYlhCdmNuUWdleUJ5WjJJZ1lYTWdjbWRpVkdWeWJYTWdmU0JtY205dElDY3VMM05sZEhScGJtZHpMMlJwWTNScGIyNWhjbmtuTzF4dWFXMXdiM0owSUhzZ2NtZGlJR0Z6SUdSbFptRjFiSFJTUjBJc0lHOXdZV05wZEhrZ1lYTWdaR1ZtWVhWc2RFOXdZV05wZEhrZ2ZTQm1jbTl0SUNjdUwzTmxkSFJwYm1kekwyUmxabUYxYkhRdGNISnZjSE1uTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCN1hHNGdJQ0FnWkdWbVlYVnNkRkJ5YjNCek9pQjdYRzRnSUNBZ0lDQWdJRkpsWkRvZ1pHVm1ZWFZzZEZKSFFpeGNiaUFnSUNBZ0lDQWdSM0psWlc0NklHUmxabUYxYkhSU1IwSXNYRzRnSUNBZ0lDQWdJRUpzZFdVNklHUmxabUYxYkhSU1IwSXNYRzRnSUNBZ0lDQWdJRUZzY0doaE9pQmtaV1poZFd4MFQzQmhZMmwwZVZ4dUlDQWdJSDBzWEc1Y2JpQWdJQ0IwWlhOME9pQW9kbUZzZFdVcElEMCtJQ2gyWVd4MVpTQW1KaUIyWVd4MVpTNXBibVJsZUU5bUtDZHlaMkluS1NBK0lDMHhLU3hjYmx4dUlDQWdJSE53YkdsME9pQW9kbUZzZFdVcElEMCtJR2RsZEVOdmJHOXlWbUZzZFdWektIWmhiSFZsTENCeVoySlVaWEp0Y3lrc1hHNWNiaUFnSUNCamIyMWlhVzVsT2lBb2RtRnNkV1Z6S1NBOVBpQmpjbVZoZEdWR2RXNWpkR2x2YmxOMGNtbHVaeWhqY21WaGRHVkVaV3hwYldsMFpXUW9kbUZzZFdWekxDQnlaMkpVWlhKdGN5d2dKeXdnSnl3Z01pa3NJQ2R5WjJKaEp5bGNibjA3SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvcmdiLmpzXG4gKiogbW9kdWxlIGlkID0gMjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBjdXJyZW50OiAxXG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OXpZMkZzWlM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdhMEpCUVdVN1FVRkRXQ3hyUWtGQll6dEJRVU5XTEdsQ1FVRlRMRU5CUVZRN1MwRkVTaUlzSW1acGJHVWlPaUp6WTJGc1pTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpsZUhCdmNuUWdaR1ZtWVhWc2RDQjdYRzRnSUNBZ1pHVm1ZWFZzZEZCeWIzQnpPaUI3WEc0Z0lDQWdJQ0FnSUdOMWNuSmxiblE2SURGY2JpQWdJQ0I5WEc1OU95SmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9zY2FsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY29sb3IgPSByZXF1aXJlKCcuL2NvbG9yJyk7XG5cbnZhciBfY29sb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29sb3IpO1xuXG52YXIgX3B4ID0gcmVxdWlyZSgnLi9weCcpO1xuXG52YXIgX2RpY3Rpb25hcnkgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RpY3Rpb25hcnknKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgc2hhZG93V2l0aG91dENvbG9yVGVybXMgPSBfZGljdGlvbmFyeS5zaGFkb3cuc2xpY2UoMCwgNCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IF9leHRlbmRzKHt9LCBfY29sb3IyLmRlZmF1bHQuZGVmYXVsdFByb3BzLCB7XG4gICAgICAgIFg6IF9weC5kZWZhdWx0UHJvcHMsXG4gICAgICAgIFk6IF9weC5kZWZhdWx0UHJvcHMsXG4gICAgICAgIFJhZGl1czogX3B4LmRlZmF1bHRQcm9wcyxcbiAgICAgICAgU3ByZWFkOiBfcHguZGVmYXVsdFByb3BzXG4gICAgfSksXG5cbiAgICBzcGxpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBiaXRzID0gKDAsIF91dGlscy5zcGxpdFNwYWNlRGVsaW1pdGVkKSh2YWx1ZSk7XG4gICAgICAgIHZhciBoYXNSZWFjaGVkQ29sb3IgPSBmYWxzZTtcbiAgICAgICAgdmFyIGNvbG9yUHJvcCA9ICcnO1xuICAgICAgICB2YXIgc3BsaXRWYWx1ZSA9IHt9O1xuXG4gICAgICAgIGJpdHMuZm9yRWFjaChmdW5jdGlvbiAoYml0LCBpKSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSd2ZSByZWFjaGVkIHRoZSBjb2xvciBwcm9wcywgYXBwZW5kIHRvIGNvbG9yIHN0cmluZ1xuICAgICAgICAgICAgaWYgKGhhc1JlYWNoZWRDb2xvciB8fCBfY29sb3IyLmRlZmF1bHQudGVzdChiaXQpKSB7XG4gICAgICAgICAgICAgICAgaGFzUmVhY2hlZENvbG9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb2xvclByb3AgKz0gYml0O1xuXG4gICAgICAgICAgICAgICAgLy8gRWxzZSBwcm9jZXNzIHNoYWRvdyB2YWx1ZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3BsaXRWYWx1ZVtfZGljdGlvbmFyeS5zaGFkb3dbaV1dID0gYml0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIHNwbGl0Q29sb3JQcm9wcyA9IF9jb2xvcjIuZGVmYXVsdC5zcGxpdChjb2xvclByb3ApO1xuXG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3BsaXRWYWx1ZSwgeyBzcGxpdENvbG9yUHJvcHM6IHNwbGl0Q29sb3JQcm9wcyB9KTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICByZXR1cm4gKDAsIF91dGlscy5jcmVhdGVEZWxpbWl0ZWQpKHZhbHVlcywgc2hhZG93V2l0aG91dENvbG9yVGVybXMsICcgJykgKyBfY29sb3IyLmRlZmF1bHQuY29tYmluZSh2YWx1ZXMpO1xuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTl6YUdGa2IzY3Vhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN08wRkJRVUU3T3pzN1FVRkRRVHM3UVVGRFFUczdRVUZEUVRzN096dEJRVVZCTEVsQlFVMHNNRUpCUVRCQ0xHMUNRVUZaTEV0QlFWb3NRMEZCYTBJc1EwRkJiRUlzUlVGQmNVSXNRMEZCY2tJc1EwRkJNVUk3TzJ0Q1FVVlRPMEZCUTFnc0swSkJRMDhzWjBKQlFVMHNXVUZCVGp0QlFVTklPMEZCUTBFN1FVRkRRVHRCUVVOQk8wMUJURW83TzBGQlVVRXNWMEZCVHl4VlFVRkRMRXRCUVVRc1JVRkJWenRCUVVOa0xGbEJRVTBzVDBGQlR5eG5RMEZCYjBJc1MwRkJjRUlzUTBGQlVDeERRVVJSTzBGQlJXUXNXVUZCU1N4clFrRkJhMElzUzBGQmJFSXNRMEZHVlR0QlFVZGtMRmxCUVVrc1dVRkJXU3hGUVVGYUxFTkJTRlU3UVVGSlpDeFpRVUZKTEdGQlFXRXNSVUZCWWl4RFFVcFZPenRCUVUxa0xHRkJRVXNzVDBGQlRDeERRVUZoTEZWQlFVTXNSMEZCUkN4RlFVRk5MRU5CUVU0c1JVRkJXVHM3UVVGRmNrSXNaMEpCUVVrc2JVSkJRVzFDTEdkQ1FVRk5MRWxCUVU0c1EwRkJWeXhIUVVGWUxFTkJRVzVDTEVWQlFXOURPMEZCUTNCRExHdERRVUZyUWl4SlFVRnNRaXhEUVVSdlF6dEJRVVZ3UXl3MlFrRkJZU3hIUVVGaU96czdRVUZHYjBNc1lVRkJlRU1zVFVGTFR6dEJRVU5JTEN0Q1FVRlhMRzFDUVVGWkxFTkJRVm9zUTBGQldDeEpRVUUyUWl4SFFVRTNRaXhEUVVSSE8ybENRVXhRTzFOQlJsTXNRMEZCWWl4RFFVNWpPenRCUVd0Q1pDeFpRVUZOTEd0Q1FVRnJRaXhuUWtGQlRTeExRVUZPTEVOQlFWa3NVMEZCV2l4RFFVRnNRaXhEUVd4Q1VUczdRVUZ2UW1Rc05FSkJRVmtzWTBGQldTeHRRMEZCZUVJc1EwRndRbU03UzBGQldEczdRVUYxUWxBc1lVRkJVeXhWUVVGRExFMUJRVVE3WlVGQldTdzBRa0ZCWjBJc1RVRkJhRUlzUlVGQmQwSXNkVUpCUVhoQ0xFVkJRV2xFTEVkQlFXcEVMRWxCUVhkRUxHZENRVUZOTEU5QlFVNHNRMEZCWXl4TlFVRmtMRU5CUVhoRU8wdEJRVm9pTENKbWFXeGxJam9pYzJoaFpHOTNMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwTDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0JqYjJ4dmNpQm1jbTl0SUNjdUwyTnZiRzl5Snp0Y2JtbHRjRzl5ZENCN0lHUmxabUYxYkhSUWNtOXdjeUJoY3lCd2VFUmxabUYxYkhSUWNtOXdjeUI5SUdaeWIyMGdKeTR2Y0hnbk8xeHVhVzF3YjNKMElIc2djMmhoWkc5M0lHRnpJSE5vWVdSdmQxUmxjbTF6SUgwZ1puSnZiU0FuTGk5elpYUjBhVzVuY3k5a2FXTjBhVzl1WVhKNUp6dGNibWx0Y0c5eWRDQjdJSE53YkdsMFUzQmhZMlZFWld4cGJXbDBaV1FzSUdOeVpXRjBaVVJsYkdsdGFYUmxaQ0I5SUdaeWIyMGdKeTR1TDJsdVl5OTFkR2xzY3ljN1hHNWNibU52Ym5OMElITm9ZV1J2ZDFkcGRHaHZkWFJEYjJ4dmNsUmxjbTF6SUQwZ2MyaGhaRzkzVkdWeWJYTXVjMnhwWTJVb01Dd2dOQ2s3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUh0Y2JpQWdJQ0JrWldaaGRXeDBVSEp2Y0hNNklIdGNiaUFnSUNBZ0lDQWdMaTR1WTI5c2IzSXVaR1ZtWVhWc2RGQnliM0J6TEZ4dUlDQWdJQ0FnSUNCWU9pQndlRVJsWm1GMWJIUlFjbTl3Y3l4Y2JpQWdJQ0FnSUNBZ1dUb2djSGhFWldaaGRXeDBVSEp2Y0hNc1hHNGdJQ0FnSUNBZ0lGSmhaR2wxY3pvZ2NIaEVaV1poZFd4MFVISnZjSE1zWEc0Z0lDQWdJQ0FnSUZOd2NtVmhaRG9nY0hoRVpXWmhkV3gwVUhKdmNITmNiaUFnSUNCOUxGeHVYRzRnSUNBZ2MzQnNhWFE2SUNoMllXeDFaU2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCaWFYUnpJRDBnYzNCc2FYUlRjR0ZqWlVSbGJHbHRhWFJsWkNoMllXeDFaU2s3WEc0Z0lDQWdJQ0FnSUd4bGRDQm9ZWE5TWldGamFHVmtRMjlzYjNJZ1BTQm1ZV3h6WlR0Y2JpQWdJQ0FnSUNBZ2JHVjBJR052Ykc5eVVISnZjQ0E5SUNjbk8xeHVJQ0FnSUNBZ0lDQnNaWFFnYzNCc2FYUldZV3gxWlNBOUlIdDlPMXh1WEc0Z0lDQWdJQ0FnSUdKcGRITXVabTl5UldGamFDZ29ZbWwwTENCcEtTQTlQaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJKWmlCM1pTZDJaU0J5WldGamFHVmtJSFJvWlNCamIyeHZjaUJ3Y205d2N5d2dZWEJ3Wlc1a0lIUnZJR052Ykc5eUlITjBjbWx1WjF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0doaGMxSmxZV05vWldSRGIyeHZjaUI4ZkNCamIyeHZjaTUwWlhOMEtHSnBkQ2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCb1lYTlNaV0ZqYUdWa1EyOXNiM0lnUFNCMGNuVmxPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR052Ykc5eVVISnZjQ0FyUFNCaWFYUTdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJRVZzYzJVZ2NISnZZMlZ6Y3lCemFHRmtiM2NnZG1Gc2RXVmNiaUFnSUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYzNCc2FYUldZV3gxWlZ0emFHRmtiM2RVWlhKdGMxdHBYVjBnUFNCaWFYUTdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMHBPMXh1WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJSE53YkdsMFEyOXNiM0pRY205d2N5QTlJR052Ykc5eUxuTndiR2wwS0dOdmJHOXlVSEp2Y0NrN1hHNWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIc2dMaTR1YzNCc2FYUldZV3gxWlN3Z2MzQnNhWFJEYjJ4dmNsQnliM0J6SUgwN1hHNGdJQ0FnZlN4Y2JseHVJQ0FnSUdOdmJXSnBibVU2SUNoMllXeDFaWE1wSUQwK0lHTnlaV0YwWlVSbGJHbHRhWFJsWkNoMllXeDFaWE1zSUhOb1lXUnZkMWRwZEdodmRYUkRiMnh2Y2xSbGNtMXpMQ0FuSUNjcElDc2dZMjlzYjNJdVkyOXRZbWx1WlNoMllXeDFaWE1wWEc1OU8xeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9zaGFkb3cuanNcbiAqKiBtb2R1bGUgaWQgPSAzMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICB0ZXN0OiBmdW5jdGlvbiAodW5wYXJzZWQpIHtcbiAgICAgICAgdmFyIF9maW5kVmFsdWVBbmRVbml0ID0gKDAsIF91dGlscy5maW5kVmFsdWVBbmRVbml0KSh1bnBhcnNlZCk7XG5cbiAgICAgICAgdmFyIHZhbHVlID0gX2ZpbmRWYWx1ZUFuZFVuaXQudmFsdWU7XG5cbiAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMuaXNOdW0pKHZhbHVlKSAmJiAhaXNOYU4odmFsdWUpID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH0sXG5cbiAgICBwYXJzZTogZnVuY3Rpb24gKHVucGFyc2VkLCBwYXJlbnQpIHtcbiAgICAgICAgdmFyIF9maW5kVmFsdWVBbmRVbml0MiA9ICgwLCBfdXRpbHMuZmluZFZhbHVlQW5kVW5pdCkodW5wYXJzZWQpO1xuXG4gICAgICAgIHZhciB2YWx1ZSA9IF9maW5kVmFsdWVBbmRVbml0Mi52YWx1ZTtcbiAgICAgICAgdmFyIHVuaXQgPSBfZmluZFZhbHVlQW5kVW5pdDIudW5pdDtcblxuXG4gICAgICAgIGlmICh1bml0ICYmIHVuaXQgIT09IHVuaXQpIHtcbiAgICAgICAgICAgIHBhcmVudC51bml0ID0gdW5pdDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9LFxuXG4gICAgc2VyaWFsaXplOiBmdW5jdGlvbiAocGFyc2VkLCBwYXJlbnQpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlZCArIChwYXJlbnQudW5pdCB8fCAnJyk7XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OTFibWwwTG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdRVUZCUVRzN2EwSkJSV1U3UVVGRFdDeFZRVUZOTEZWQlFWVXNVVUZCVml4RlFVRnZRanRuUTBGRFNpdzJRa0ZCYVVJc1VVRkJha0lzUlVGRVNUczdXVUZEWkN4blEwRkVZenM3UVVGRmRFSXNaVUZCVHl4cFFrRkJReXhEUVVGTkxFdEJRVTRzUzBGQlowSXNRMEZCUXl4TlFVRk5MRXRCUVU0c1EwRkJSQ3hIUVVGcFFpeEpRVUZzUXl4SFFVRjVReXhMUVVGNlF5eERRVVpsTzB0QlFYQkNPenRCUVV0T0xGZEJRVThzVlVGQlZTeFJRVUZXTEVWQlFXOUNMRTFCUVhCQ0xFVkJRVFJDTzJsRFFVTlFMRFpDUVVGcFFpeFJRVUZxUWl4RlFVUlBPenRaUVVOMlFpeHBRMEZFZFVJN1dVRkRhRUlzSzBKQlJHZENPenM3UVVGSEwwSXNXVUZCU1N4UlFVRlJMRk5CUVZNc1NVRkJWQ3hGUVVGbE8wRkJRM1pDTEcxQ1FVRlBMRWxCUVZBc1IwRkJZeXhKUVVGa0xFTkJSSFZDTzFOQlFUTkNPenRCUVVsQkxHVkJRVThzUzBGQlVDeERRVkFyUWp0TFFVRTFRanM3UVVGVlVDeGxRVUZYTEZWQlFVTXNUVUZCUkN4RlFVRlRMRTFCUVZRN1pVRkJiMElzVlVGQlZTeFBRVUZQTEVsQlFWQXNTVUZCWlN4RlFVRm1MRU5CUVZZN1MwRkJjRUlpTENKbWFXeGxJam9pZFc1cGRDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdleUJwYzA1MWJTd2dabWx1WkZaaGJIVmxRVzVrVlc1cGRDQjlJR1p5YjIwZ0p5NHVMMmx1WXk5MWRHbHNjeWM3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUh0Y2JpQWdJQ0IwWlhOME9pQm1kVzVqZEdsdmJpQW9kVzV3WVhKelpXUXBJSHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdleUIyWVd4MVpTQjlJRDBnWm1sdVpGWmhiSFZsUVc1a1ZXNXBkQ2gxYm5CaGNuTmxaQ2s3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUFvYVhOT2RXMG9kbUZzZFdVcElDWW1JQ0ZwYzA1aFRpaDJZV3gxWlNrcElEOGdkSEoxWlNBNklHWmhiSE5sTzF4dUlDQWdJSDBzWEc1Y2JpQWdJQ0J3WVhKelpUb2dablZ1WTNScGIyNGdLSFZ1Y0dGeWMyVmtMQ0J3WVhKbGJuUXBJSHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdleUIyWVd4MVpTd2dkVzVwZENCOUlEMGdabWx1WkZaaGJIVmxRVzVrVlc1cGRDaDFibkJoY25ObFpDazdYRzVjYmlBZ0lDQWdJQ0FnYVdZZ0tIVnVhWFFnSmlZZ2RXNXBkQ0FoUFQwZ2RXNXBkQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjR0Z5Wlc1MExuVnVhWFFnUFNCMWJtbDBPMXh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhaaGJIVmxPMXh1SUNBZ0lIMHNYRzVjYmlBZ0lDQnpaWEpwWVd4cGVtVTZJQ2h3WVhKelpXUXNJSEJoY21WdWRDa2dQVDRnY0dGeWMyVmtJQ3NnS0hCaGNtVnVkQzUxYm1sMElIeDhJQ2NuS1Z4dWZUdGNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvdW5pdC5qc1xuICoqIG1vZHVsZSBpZCA9IDMyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmNoYWluID0gZXhwb3J0cy5jaXJjdWxhck1vdGlvbiA9IGV4cG9ydHMuY3JlYXRlTWFwcGVyID0gdW5kZWZpbmVkO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpO1xuXG52YXIgY3JlYXRlTWFwcGVyID0gZXhwb3J0cy5jcmVhdGVNYXBwZXIgPSBmdW5jdGlvbiAoaW5wdXQsIG91dHB1dCkge1xuICAgIHZhciBtYXBMZW5ndGggPSBpbnB1dC5sZW5ndGg7XG4gICAgdmFyIGZpbmFsSW5kZXggPSBtYXBMZW5ndGggLSAxO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAvLyBJZiB2YWx1ZSBvdXRzaWRlIG1pbmltdW0gaW5wdXQgcmFuZ2UsIHF1aWNrbHkgcmV0dXJuXG4gICAgICAgIGlmICh2YWx1ZSA8PSBpbnB1dFswXSkge1xuICAgICAgICAgICAgcmV0dXJuIG91dHB1dFswXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHZhbHVlIG91dHNpZGUgbWF4aW11bSBpbnB1dCByYW5nZSwgcXVpY2tseSByZXR1cm5cbiAgICAgICAgaWYgKHZhbHVlID49IGlucHV0W2ZpbmFsSW5kZXhdKSB7XG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0W2ZpbmFsSW5kZXhdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgd2l0aGluIG92ZXJhbGwgaW5wdXQgcmFuZ2UsIGZpbmQgc3BlY2lmaWMgcmFuZ2VcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBtYXBMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHZhbHVlIDwgaW5wdXRbaV0gfHwgaSA9PT0gZmluYWxJbmRleCkge1xuICAgICAgICAgICAgICAgIHZhciBwcm9ncmVzc0luUmFuZ2UgPSAoMCwgX2NhbGMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUpKHZhbHVlLCBpbnB1dFtpIC0gMV0sIGlucHV0W2ldKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKDAsIF9jYWxjLmdldFZhbHVlRnJvbVByb2dyZXNzKShwcm9ncmVzc0luUmFuZ2UsIG91dHB1dFtpIC0gMV0sIG91dHB1dFtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xufTtcblxudmFyIGNpcmN1bGFyTW90aW9uID0gZXhwb3J0cy5jaXJjdWxhck1vdGlvbiA9IGZ1bmN0aW9uICh2LCBrZXksIF9yZWYpIHtcbiAgICB2YXIgdmFsdWVzID0gX3JlZi52YWx1ZXM7XG5cbiAgICB2YXIgb3JpZ2luWCA9IHZhbHVlcy5vcmlnaW5YID8gdmFsdWVzLm9yaWdpblguY3VycmVudCA6IDA7XG4gICAgdmFyIG9yaWdpblkgPSB2YWx1ZXMub3JpZ2luWSA/IHZhbHVlcy5vcmlnaW5ZLmN1cnJlbnQgOiAwO1xuXG4gICAgcmV0dXJuICgwLCBfY2FsYy5wb2ludEZyb21BbmdsZUFuZERpc3RhbmNlKSh7XG4gICAgICAgIHg6IG9yaWdpblgsXG4gICAgICAgIHk6IG9yaWdpbllcbiAgICB9LCB2YWx1ZXMuYW5nbGUuY3VycmVudCwgdmFsdWVzLmRpc3RhbmNlLmN1cnJlbnQpW2tleV07XG59O1xuXG4vKlxuICAgIENvbWJpbmUgdHJhbnNmb3JtZXJzIGludG8gb25lIGZ1bmN0aW9uIHRoYXQgY2FsbHMgZXZlcnlcbiAgICB0cmFuc2Zvcm1lciBpbiB0aGUgYXJyYXkgYW5kIHJldHVybnMgdGhlIHJlc3VsdFxuXG4gICAgQHBhcmFtIFthcnJheV1cbiAgICBAcmV0dXJuIFtmdW5jdGlvbl1cbiovXG52YXIgY2hhaW4gPSBleHBvcnRzLmNoYWluID0gZnVuY3Rpb24gKHRyYW5zZm9ybWVycykge1xuICAgIHZhciBudW1UcmFuc2Zvcm1lcnMgPSB0cmFuc2Zvcm1lcnMubGVuZ3RoO1xuICAgIHZhciBpID0gMDtcblxuICAgIC8qXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgICAgICBAcGFyYW0gW3N0cmluZ11cbiAgICAgICAgQHBhcmFtIFtBY3Rpb25dXG4gICAgICAgIEByZXR1cm4gW251bWJlcl1cbiAgICAqL1xuICAgIHJldHVybiBmdW5jdGlvbiAodiwga2V5LCBhKSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBudW1UcmFuc2Zvcm1lcnM7IGkrKykge1xuICAgICAgICAgICAgdiA9IHRyYW5zZm9ybWVyc1tpXSh2LCBrZXksIGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHY7XG4gICAgfTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12ZEhKaGJuTm1iM0p0WlhKekxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3TzBGQlFVRTdPMEZCUlU4c1NVRkJUU3h6UTBGQlpTeFZRVUZETEV0QlFVUXNSVUZCVVN4TlFVRlNMRVZCUVcxQ08wRkJRek5ETEZGQlFVMHNXVUZCV1N4TlFVRk5MRTFCUVU0c1EwRkVlVUk3UVVGRk0wTXNVVUZCVFN4aFFVRmhMRmxCUVZrc1EwRkJXaXhEUVVaM1FqczdRVUZKTTBNc1YwRkJUeXhWUVVGRExFdEJRVVFzUlVGQlZ6czdRVUZGWkN4WlFVRkpMRk5CUVZNc1RVRkJUU3hEUVVGT0xFTkJRVlFzUlVGQmJVSTdRVUZEYmtJc2JVSkJRVThzVDBGQlR5eERRVUZRTEVOQlFWQXNRMEZFYlVJN1UwRkJka0k3T3p0QlFVWmpMRmxCVDFZc1UwRkJVeXhOUVVGTkxGVkJRVTRzUTBGQlZDeEZRVUUwUWp0QlFVTTFRaXh0UWtGQlR5eFBRVUZQTEZWQlFWQXNRMEZCVUN4RFFVUTBRanRUUVVGb1F6czdPMEZCVUdNc1lVRlpWQ3hKUVVGSkxFbEJRVWtzUTBGQlNpeEZRVUZQTEVsQlFVa3NVMEZCU2l4RlFVRmxMRWRCUVM5Q0xFVkJRVzlETzBGQlEyaERMR2RDUVVGSkxGRkJRVkVzVFVGQlRTeERRVUZPTEVOQlFWSXNTVUZCYjBJc1RVRkJUU3hWUVVGT0xFVkJRV3RDTzBGQlEzUkRMRzlDUVVGTkxHdENRVUZyUWl4blEwRkJjVUlzUzBGQmNrSXNSVUZCTkVJc1RVRkJUU3hKUVVGSkxFTkJRVW9zUTBGQmJFTXNSVUZCTUVNc1RVRkJUU3hEUVVGT0xFTkJRVEZETEVOQlFXeENMRU5CUkdkRE8wRkJSWFJETEhWQ1FVRlBMR2REUVVGeFFpeGxRVUZ5UWl4RlFVRnpReXhQUVVGUExFbEJRVWtzUTBGQlNpeERRVUUzUXl4RlFVRnhSQ3hQUVVGUExFTkJRVkFzUTBGQmNrUXNRMEZCVUN4RFFVWnpRenRoUVVFeFF6dFRRVVJLTzB0QldrY3NRMEZLYjBNN1EwRkJia0k3TzBGQmVVSnlRaXhKUVVGTkxEQkRRVUZwUWl4VlFVRkRMRU5CUVVRc1JVRkJTU3hIUVVGS0xGRkJRWGRDTzFGQlFXSXNjVUpCUVdFN08wRkJRMnhFTEZGQlFVMHNWVUZCVlN4TlFVRkRMRU5CUVU4c1QwRkJVQ3hIUVVGclFpeFBRVUZQTEU5QlFWQXNRMEZCWlN4UFFVRm1MRWRCUVhsQ0xFTkJRVFZETEVOQlJHdERPMEZCUld4RUxGRkJRVTBzVlVGQlZTeE5RVUZETEVOQlFVOHNUMEZCVUN4SFFVRnJRaXhQUVVGUExFOUJRVkFzUTBGQlpTeFBRVUZtTEVkQlFYbENMRU5CUVRWRExFTkJSbXRET3p0QlFVbHNSQ3hYUVVGUExIRkRRVUV3UWp0QlFVTTNRaXhYUVVGSExFOUJRVWc3UVVGRFFTeFhRVUZITEU5QlFVZzdTMEZHUnl4RlFVZEtMRTlCUVU4c1MwRkJVQ3hEUVVGaExFOUJRV0lzUlVGQmMwSXNUMEZCVHl4UlFVRlFMRU5CUVdkQ0xFOUJRV2hDTEVOQlNHeENMRU5CUnpKRExFZEJTRE5ETEVOQlFWQXNRMEZLYTBRN1EwRkJlRUk3T3pzN096czdPenRCUVdsQ2RrSXNTVUZCVFN4M1FrRkJVU3hWUVVGRExGbEJRVVFzUlVGQmEwSTdRVUZEYmtNc1VVRkJUU3hyUWtGQmEwSXNZVUZCWVN4TlFVRmlMRU5CUkZjN1FVRkZia01zVVVGQlNTeEpRVUZKTEVOQlFVbzdPenM3T3pzN08wRkJSaXRDTEZkQlZUVkNMRlZCUVVNc1EwRkJSQ3hGUVVGSkxFZEJRVW9zUlVGQlV5eERRVUZVTEVWQlFXVTdRVUZEYkVJc1lVRkJTeXhKUVVGSkxFTkJRVW9zUlVGQlR5eEpRVUZKTEdWQlFVb3NSVUZCY1VJc1IwRkJha01zUlVGQmMwTTdRVUZEYkVNc1owSkJRVWtzWVVGQllTeERRVUZpTEVWQlFXZENMRU5CUVdoQ0xFVkJRVzFDTEVkQlFXNUNMRVZCUVhkQ0xFTkJRWGhDTEVOQlFVb3NRMEZFYTBNN1UwRkJkRU03TzBGQlNVRXNaVUZCVHl4RFFVRlFMRU5CVEd0Q08wdEJRV1lzUTBGV05FSTdRMEZCYkVJaUxDSm1hV3hsSWpvaWRISmhibk5tYjNKdFpYSnpMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwTDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3SUdkbGRGQnliMmR5WlhOelJuSnZiVlpoYkhWbExDQm5aWFJXWVd4MVpVWnliMjFRY205bmNtVnpjeXdnY0c5cGJuUkdjbTl0UVc1bmJHVkJibVJFYVhOMFlXNWpaU0I5SUdaeWIyMGdKeTR1TDJsdVl5OWpZV3hqSnp0Y2JseHVaWGh3YjNKMElHTnZibk4wSUdOeVpXRjBaVTFoY0hCbGNpQTlJQ2hwYm5CMWRDd2diM1YwY0hWMEtTQTlQaUI3WEc0Z0lDQWdZMjl1YzNRZ2JXRndUR1Z1WjNSb0lEMGdhVzV3ZFhRdWJHVnVaM1JvTzF4dUlDQWdJR052Ym5OMElHWnBibUZzU1c1a1pYZ2dQU0J0WVhCTVpXNW5kR2dnTFNBeE8xeHVYRzRnSUNBZ2NtVjBkWEp1SUNoMllXeDFaU2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQXZMeUJKWmlCMllXeDFaU0J2ZFhSemFXUmxJRzFwYm1sdGRXMGdhVzV3ZFhRZ2NtRnVaMlVzSUhGMWFXTnJiSGtnY21WMGRYSnVYRzRnSUNBZ0lDQWdJR2xtSUNoMllXeDFaU0E4UFNCcGJuQjFkRnN3WFNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJRzkxZEhCMWRGc3dYVHRjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDOHZJRWxtSUhaaGJIVmxJRzkxZEhOcFpHVWdiV0Y0YVcxMWJTQnBibkIxZENCeVlXNW5aU3dnY1hWcFkydHNlU0J5WlhSMWNtNWNiaUFnSUNBZ0lDQWdhV1lnS0haaGJIVmxJRDQ5SUdsdWNIVjBXMlpwYm1Gc1NXNWtaWGhkS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdiM1YwY0hWMFcyWnBibUZzU1c1a1pYaGRPMXh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0x5OGdTV1lnZDJsMGFHbHVJRzkyWlhKaGJHd2dhVzV3ZFhRZ2NtRnVaMlVzSUdacGJtUWdjM0JsWTJsbWFXTWdjbUZ1WjJWY2JpQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREU3SUdrZ1BDQnRZWEJNWlc1bmRHZzdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIWmhiSFZsSUR3Z2FXNXdkWFJiYVYwZ2ZId2dhU0E5UFQwZ1ptbHVZV3hKYm1SbGVDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElIQnliMmR5WlhOelNXNVNZVzVuWlNBOUlHZGxkRkJ5YjJkeVpYTnpSbkp2YlZaaGJIVmxLSFpoYkhWbExDQnBibkIxZEZ0cElDMGdNVjBzSUdsdWNIVjBXMmxkS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnWjJWMFZtRnNkV1ZHY205dFVISnZaM0psYzNNb2NISnZaM0psYzNOSmJsSmhibWRsTENCdmRYUndkWFJiYVNBdElERmRMQ0J2ZFhSd2RYUmJhVjBwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVHRjYm4wN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCamFYSmpkV3hoY2sxdmRHbHZiaUE5SUNoMkxDQnJaWGtzSUhzZ2RtRnNkV1Z6SUgwcElEMCtJSHRjYmlBZ0lDQmpiMjV6ZENCdmNtbG5hVzVZSUQwZ0tIWmhiSFZsY3k1dmNtbG5hVzVZS1NBL0lIWmhiSFZsY3k1dmNtbG5hVzVZTG1OMWNuSmxiblFnT2lBd08xeHVJQ0FnSUdOdmJuTjBJRzl5YVdkcGJsa2dQU0FvZG1Gc2RXVnpMbTl5YVdkcGJsa3BJRDhnZG1Gc2RXVnpMbTl5YVdkcGJsa3VZM1Z5Y21WdWRDQTZJREE3WEc1Y2JpQWdJQ0J5WlhSMWNtNGdjRzlwYm5SR2NtOXRRVzVuYkdWQmJtUkVhWE4wWVc1alpTaDdYRzRnSUNBZ0lDQWdJSGc2SUc5eWFXZHBibGdzWEc0Z0lDQWdJQ0FnSUhrNklHOXlhV2RwYmxrZ1hHNGdJQ0FnZlN3Z2RtRnNkV1Z6TG1GdVoyeGxMbU4xY25KbGJuUXNJSFpoYkhWbGN5NWthWE4wWVc1alpTNWpkWEp5Wlc1MEtWdHJaWGxkTzF4dWZUdGNibHh1THlwY2JpQWdJQ0JEYjIxaWFXNWxJSFJ5WVc1elptOXliV1Z5Y3lCcGJuUnZJRzl1WlNCbWRXNWpkR2x2YmlCMGFHRjBJR05oYkd4eklHVjJaWEo1WEc0Z0lDQWdkSEpoYm5ObWIzSnRaWElnYVc0Z2RHaGxJR0Z5Y21GNUlHRnVaQ0J5WlhSMWNtNXpJSFJvWlNCeVpYTjFiSFJjYmx4dUlDQWdJRUJ3WVhKaGJTQmJZWEp5WVhsZFhHNGdJQ0FnUUhKbGRIVnliaUJiWm5WdVkzUnBiMjVkWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdOb1lXbHVJRDBnS0hSeVlXNXpabTl5YldWeWN5a2dQVDRnZTF4dUlDQWdJR052Ym5OMElHNTFiVlJ5WVc1elptOXliV1Z5Y3lBOUlIUnlZVzV6Wm05eWJXVnljeTVzWlc1bmRHZzdYRzRnSUNBZ2JHVjBJR2tnUFNBd08xeHVYRzRnSUNBZ0x5cGNiaUFnSUNBZ0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZFhHNGdJQ0FnSUNBZ0lFQndZWEpoYlNCYmMzUnlhVzVuWFZ4dUlDQWdJQ0FnSUNCQWNHRnlZVzBnVzBGamRHbHZibDFjYmlBZ0lDQWdJQ0FnUUhKbGRIVnliaUJiYm5WdFltVnlYVnh1SUNBZ0lDb3ZYRzRnSUNBZ2NtVjBkWEp1SUNoMkxDQnJaWGtzSUdFcElEMCtJSHRjYmlBZ0lDQWdJQ0FnWm05eUlDaHBJRDBnTURzZ2FTQThJRzUxYlZSeVlXNXpabTl5YldWeWN6c2dhU3NyS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IySUQwZ2RISmhibk5tYjNKdFpYSnpXMmxkS0hZc0lHdGxlU3dnWVNrN1hHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkanRjYmlBZ0lDQjlPMXh1ZlRzaVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy90cmFuc2Zvcm1lcnMuanNcbiAqKiBtb2R1bGUgaWQgPSAzM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2NvbG9yID0gcmVxdWlyZSgnLi4vdmFsdWUtdHlwZXMvY29sb3InKTtcblxudmFyIF9jb2xvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb2xvcik7XG5cbnZhciBfY29tcGxleCA9IHJlcXVpcmUoJy4uL3ZhbHVlLXR5cGVzL2NvbXBsZXgnKTtcblxudmFyIF9jb21wbGV4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbXBsZXgpO1xuXG52YXIgX3VuaXQgPSByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy91bml0Jyk7XG5cbnZhciBfdW5pdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91bml0KTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG52YXIgX251bWVyaWNhbFZhbHVlcyA9IHJlcXVpcmUoJy4uL2luYy9udW1lcmljYWwtdmFsdWVzJyk7XG5cbnZhciBfbnVtZXJpY2FsVmFsdWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX251bWVyaWNhbFZhbHVlcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBOVU1fTlVNRVJJQ0FMX1ZBTFVFUyA9IF9udW1lcmljYWxWYWx1ZXMyLmRlZmF1bHQubGVuZ3RoO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IE5VTV9OVU1FUklDQUxfVkFMVUVTOyBpKyspIHtcbiAgICAgICAgdmFyIHZhbHVlUHJvcCA9IHZhbHVlW19udW1lcmljYWxWYWx1ZXMyLmRlZmF1bHRbaV1dO1xuICAgICAgICBpZiAoKDAsIF91dGlscy5pc1N0cmluZykodmFsdWVQcm9wKSkge1xuICAgICAgICAgICAgaWYgKF9jb2xvcjIuZGVmYXVsdC50ZXN0KHZhbHVlUHJvcCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbG9yMi5kZWZhdWx0O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChfY29tcGxleDIuZGVmYXVsdC50ZXN0KHZhbHVlUHJvcCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbXBsZXgyLmRlZmF1bHQ7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKF91bml0Mi5kZWZhdWx0LnRlc3QodmFsdWVQcm9wKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdW5pdDIuZGVmYXVsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTlrWlhSbFkzUXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0QlFVRkJPenM3TzBGQlEwRTdPenM3UVVGRFFUczdPenRCUVVOQk96dEJRVU5CT3pzN096czdRVUZGUVN4SlFVRk5MSFZDUVVGMVFpd3dRa0ZCYVVJc1RVRkJha0k3TzJ0Q1FVVmtMRlZCUVVNc1MwRkJSQ3hGUVVGWE8wRkJRM1JDTEZOQlFVc3NTVUZCU1N4SlFVRkpMRU5CUVVvc1JVRkJUeXhKUVVGSkxHOUNRVUZLTEVWQlFUQkNMRWRCUVRGRExFVkJRU3RETzBGQlF6TkRMRmxCUVUwc1dVRkJXU3hOUVVGTkxEQkNRVUZwUWl4RFFVRnFRaXhEUVVGT0xFTkJRVm9zUTBGRWNVTTdRVUZGTTBNc1dVRkJTU3h4UWtGQlV5eFRRVUZVTEVOQlFVb3NSVUZCZVVJN1FVRkRja0lzWjBKQlFVa3NaMEpCUVZVc1NVRkJWaXhEUVVGbExGTkJRV1lzUTBGQlNpeEZRVUVyUWp0QlFVTXpRaXgxUTBGRU1rSTdZVUZCTDBJc1RVRkZUeXhKUVVGSkxHdENRVUZaTEVsQlFWb3NRMEZCYVVJc1UwRkJha0lzUTBGQlNpeEZRVUZwUXp0QlFVTndReXg1UTBGRWIwTTdZVUZCYWtNc1RVRkZRU3hKUVVGSkxHVkJRVk1zU1VGQlZDeERRVUZqTEZOQlFXUXNRMEZCU2l4RlFVRTRRanRCUVVOcVF5eHpRMEZFYVVNN1lVRkJPVUk3VTBGTVdEdExRVVpLTzBOQlJGY2lMQ0ptYVd4bElqb2laR1YwWldOMExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQmpiMnh2Y2xSNWNHVWdabkp2YlNBbkxpNHZkbUZzZFdVdGRIbHdaWE12WTI5c2IzSW5PMXh1YVcxd2IzSjBJR052YlhCc1pYaFVlWEJsSUdaeWIyMGdKeTR1TDNaaGJIVmxMWFI1Y0dWekwyTnZiWEJzWlhnbk8xeHVhVzF3YjNKMElIVnVhWFJVZVhCbElHWnliMjBnSnk0dUwzWmhiSFZsTFhSNWNHVnpMM1Z1YVhRbk8xeHVhVzF3YjNKMElIc2dhWE5UZEhKcGJtY2dmU0JtY205dElDY3VMaTlwYm1NdmRYUnBiSE1uTzF4dWFXMXdiM0owSUU1VlRVVlNTVU5CVEY5V1FVeFZSVk1nWm5KdmJTQW5MaTR2YVc1akwyNTFiV1Z5YVdOaGJDMTJZV3gxWlhNbk8xeHVYRzVqYjI1emRDQk9WVTFmVGxWTlJWSkpRMEZNWDFaQlRGVkZVeUE5SUU1VlRVVlNTVU5CVEY5V1FVeFZSVk11YkdWdVozUm9PMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0FvZG1Gc2RXVXBJRDArSUh0Y2JpQWdJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUU1VlRWOU9WVTFGVWtsRFFVeGZWa0ZNVlVWVE95QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnZG1Gc2RXVlFjbTl3SUQwZ2RtRnNkV1ZiVGxWTlJWSkpRMEZNWDFaQlRGVkZVMXRwWFYwN1hHNGdJQ0FnSUNBZ0lHbG1JQ2hwYzFOMGNtbHVaeWgyWVd4MVpWQnliM0FwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb1kyOXNiM0pVZVhCbExuUmxjM1FvZG1Gc2RXVlFjbTl3S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCamIyeHZjbFI1Y0dVN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5SUdWc2MyVWdhV1lnS0dOdmJYQnNaWGhVZVhCbExuUmxjM1FvZG1Gc2RXVlFjbTl3S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCamIyMXdiR1Y0Vkhsd1pUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0JwWmlBb2RXNXBkRlI1Y0dVdWRHVnpkQ2gyWVd4MVpWQnliM0FwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUhWdWFYUlVlWEJsTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVnh1ZlRzaVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2RldGVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDM0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBbJ2N1cnJlbnQnLCAnZnJvbScsICd0bycsICd2ZWxvY2l0eSddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1NdmJuVnRaWEpwWTJGc0xYWmhiSFZsY3k1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdhMEpCUVdVc1EwRkJReXhUUVVGRUxFVkJRVmtzVFVGQldpeEZRVUZ2UWl4SlFVRndRaXhGUVVFd1FpeFZRVUV4UWlJc0ltWnBiR1VpT2lKdWRXMWxjbWxqWVd3dGRtRnNkV1Z6TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMEwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltVjRjRzl5ZENCa1pXWmhkV3gwSUZzblkzVnljbVZ1ZENjc0lDZG1jbTl0Snl3Z0ozUnZKeXdnSjNabGJHOWphWFI1SjEwN0lsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy9udW1lcmljYWwtdmFsdWVzLmpzXG4gKiogbW9kdWxlIGlkID0gMzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9vYmplY3RBZGFwdGVyID0gcmVxdWlyZSgnLi4vYWRhcHRlci9vYmplY3QtYWRhcHRlcicpO1xuXG52YXIgX29iamVjdEFkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JqZWN0QWRhcHRlcik7XG5cbnZhciBfY3NzQWRhcHRlciA9IHJlcXVpcmUoJy4uL2FkYXB0ZXIvY3NzLWFkYXB0ZXInKTtcblxudmFyIF9jc3NBZGFwdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Nzc0FkYXB0ZXIpO1xuXG52YXIgX3N2Z0FkYXB0ZXIgPSByZXF1aXJlKCcuLi9hZGFwdGVyL3N2Zy1hZGFwdGVyJyk7XG5cbnZhciBfc3ZnQWRhcHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdmdBZGFwdGVyKTtcblxudmFyIF9zdmdQYXRoQWRhcHRlciA9IHJlcXVpcmUoJy4uL2FkYXB0ZXIvc3ZnLXBhdGgtYWRhcHRlcicpO1xuXG52YXIgX3N2Z1BhdGhBZGFwdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N2Z1BhdGhBZGFwdGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICB2YXIgZGV0ZWN0ZWRBZGFwdGVyID0gX29iamVjdEFkYXB0ZXIyLmRlZmF1bHQ7XG5cbiAgICAvLyBJZiBIVE1MRWxlbWVudCBsb2FkIENTU1xuICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgZWxlbWVudC50YWdOYW1lID09PSAnc3ZnJykge1xuICAgICAgICBkZXRlY3RlZEFkYXB0ZXIgPSBfY3NzQWRhcHRlcjIuZGVmYXVsdDtcblxuICAgICAgICAvLyBPciBTVkdcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBTVkdFbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC50YWdOYW1lID09PSAncGF0aCcpIHtcbiAgICAgICAgICAgICAgICBkZXRlY3RlZEFkYXB0ZXIgPSBfc3ZnUGF0aEFkYXB0ZXIyLmRlZmF1bHQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRldGVjdGVkQWRhcHRlciA9IF9zdmdBZGFwdGVyMi5kZWZhdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICByZXR1cm4gZGV0ZWN0ZWRBZGFwdGVyO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJtTXZaR1YwWldOMExXRmtZWEIwWlhJdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenRCUVVGQk96czdPMEZCUTBFN096czdRVUZEUVRzN096dEJRVU5CT3pzN096czdhMEpCUldVc1ZVRkJReXhQUVVGRUxFVkJRV0U3UVVGRGVFSXNVVUZCU1N4NVEwRkJTanM3TzBGQlJIZENMRkZCU1hCQ0xHMUNRVUZ0UWl4WFFVRnVRaXhKUVVGclF5eFJRVUZSTEU5QlFWSXNTMEZCYjBJc1MwRkJjRUlzUlVGQk1rSTdRVUZETjBRN096dEJRVVEyUkN4TFFVRnFSU3hOUVVsUExFbEJRVWtzYlVKQlFXMUNMRlZCUVc1Q0xFVkJRU3RDTzBGQlEzUkRMR2RDUVVGSkxGRkJRVkVzVDBGQlVpeExRVUZ2UWl4TlFVRndRaXhGUVVFMFFqdEJRVU0xUWl3eVJFRkVORUk3WVVGQmFFTXNUVUZGVHp0QlFVTklMSFZFUVVSSE8yRkJSbEE3VTBGRVJ6czdRVUZSVUN4WFFVRlBMR1ZCUVZBc1EwRm9RbmRDTzBOQlFXSWlMQ0ptYVd4bElqb2laR1YwWldOMExXRmtZWEIwWlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUXZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElHOWlhbVZqZEVGa1lYQjBaWElnWm5KdmJTQW5MaTR2WVdSaGNIUmxjaTl2WW1wbFkzUXRZV1JoY0hSbGNpYzdYRzVwYlhCdmNuUWdZM056UVdSaGNIUmxjaUJtY205dElDY3VMaTloWkdGd2RHVnlMMk56Y3kxaFpHRndkR1Z5Snp0Y2JtbHRjRzl5ZENCemRtZEJaR0Z3ZEdWeUlHWnliMjBnSnk0dUwyRmtZWEIwWlhJdmMzWm5MV0ZrWVhCMFpYSW5PMXh1YVcxd2IzSjBJSE4yWjFCaGRHaEJaR0Z3ZEdWeUlHWnliMjBnSnk0dUwyRmtZWEIwWlhJdmMzWm5MWEJoZEdndFlXUmhjSFJsY2ljN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElDaGxiR1Z0Wlc1MEtTQTlQaUI3WEc0Z0lDQWdiR1YwSUdSbGRHVmpkR1ZrUVdSaGNIUmxjaUE5SUc5aWFtVmpkRUZrWVhCMFpYSTdYRzVjYmlBZ0lDQXZMeUJKWmlCSVZFMU1SV3hsYldWdWRDQnNiMkZrSUVOVFUxeHVJQ0FnSUdsbUlDaGxiR1Z0Wlc1MElHbHVjM1JoYm1ObGIyWWdTRlJOVEVWc1pXMWxiblFnZkh3Z1pXeGxiV1Z1ZEM1MFlXZE9ZVzFsSUQwOVBTQW5jM1puSnlrZ2UxeHVJQ0FnSUNBZ0lDQmtaWFJsWTNSbFpFRmtZWEIwWlhJZ1BTQmpjM05CWkdGd2RHVnlPMXh1WEc0Z0lDQWdMeThnVDNJZ1UxWkhYRzRnSUNBZ2ZTQmxiSE5sSUdsbUlDaGxiR1Z0Wlc1MElHbHVjM1JoYm1ObGIyWWdVMVpIUld4bGJXVnVkQ2tnZTF4dUlDQWdJQ0FnSUNCcFppQW9aV3hsYldWdWRDNTBZV2RPWVcxbElEMDlQU0FuY0dGMGFDY3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHUmxkR1ZqZEdWa1FXUmhjSFJsY2lBOUlITjJaMUJoZEdoQlpHRndkR1Z5TzF4dUlDQWdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdaR1YwWldOMFpXUkJaR0Z3ZEdWeUlEMGdjM1puUVdSaGNIUmxjanRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJSEpsZEhWeWJpQmtaWFJsWTNSbFpFRmtZWEIwWlhJN1hHNTlPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL2RldGVjdC1hZGFwdGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi4vLi4vaW5jL2NhbGMnKTtcblxudmFyIEJMRU5EX0FDQ1VSQUNZID0gNjA7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvdXRBY3Rpb24sIGluQWN0aW9uLCBmbG93VmFsdWUsIGtleSkge1xuICAgIHZhciBvdXRWYWx1ZSA9IG91dEFjdGlvbi52YWx1ZXNba2V5XTtcblxuICAgIGlmIChvdXRBY3Rpb24uZWxhcHNlZCA9PT0gdW5kZWZpbmVkIHx8ICFvdXRWYWx1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGluVmFsdWUgPSBpbkFjdGlvbi52YWx1ZXNba2V5XTtcbiAgICB2YXIgb3V0VG90YWxEdXJhdGlvbiA9IG91dFZhbHVlLmRlbGF5ICsgb3V0VmFsdWUuZHVyYXRpb247XG4gICAgdmFyIHRpbWVVbnRpbE91dEVuZCA9IE1hdGgubWluKG91dFRvdGFsRHVyYXRpb24gLSBvdXRBY3Rpb24uZWxhcHNlZCwgaW5WYWx1ZS5kZWxheSArIGluVmFsdWUuZHVyYXRpb24pO1xuICAgIHZhciBpblBvc2l0aW9uQXRPdXRFbmQgPSAoMCwgX2NhbGMuZWFzZSkoKDAsIF9jYWxjLnJlc3RyaWN0KSgoMCwgX2NhbGMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUpKHRpbWVVbnRpbE91dEVuZCwgMCwgaW5WYWx1ZS5kZWxheSArIGluVmFsdWUuZHVyYXRpb24pLCAwLCAxKSwgaW5WYWx1ZS5mcm9tLCBpblZhbHVlLnRvLCBpblZhbHVlLmVhc2UpO1xuICAgIHZhciBpbkJpZ2dlclRoYW5PdXRBdFN0YXJ0ID0gaW5WYWx1ZS5mcm9tID4gb3V0VmFsdWUuY3VycmVudDtcbiAgICB2YXIgaW5CaWdnZXJUaGFuT3V0QXRFbmQgPSBpblBvc2l0aW9uQXRPdXRFbmQgPiBvdXRWYWx1ZS50bztcbiAgICB2YXIgdHdlZW5zSW50ZXJzZWN0ID0gaW5CaWdnZXJUaGFuT3V0QXRTdGFydCAhPT0gaW5CaWdnZXJUaGFuT3V0QXRFbmQ7XG5cbiAgICB2YXIgYmxlbmRDdXJ2ZSA9IFtbMCwgb3V0VmFsdWUuY3VycmVudF0sIFt0aW1lVW50aWxPdXRFbmQsIGluUG9zaXRpb25BdE91dEVuZF1dO1xuXG4gICAgLy8gSWYgdHdlZW5zIGludGVyc2VjdCwgcmVzb2x2ZSB0d2VlbnMgYXQgYSByZXNvbHV0aW9uIHRvIGZpbmQgZXhhY3RseSB3aGVyZVxuICAgIGlmICh0d2VlbnNJbnRlcnNlY3QpIHtcbiAgICAgICAgdmFyIHRpbWVTdGVwVG9UZXN0ID0gdGltZVVudGlsT3V0RW5kIC8gQkxFTkRfQUNDVVJBQ1k7XG4gICAgICAgIHZhciBmb3VuZFAxID0gZmFsc2U7XG4gICAgICAgIHZhciBmb3VuZFAyID0gZmFsc2U7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gQkxFTkRfQUNDVVJBQ1k7IGkrKykge1xuICAgICAgICAgICAgdmFyIHRpbWVTdGVwID0gaSAqIHRpbWVTdGVwVG9UZXN0O1xuICAgICAgICAgICAgdmFyIG91dEF0VGltZSA9ICgwLCBfY2FsYy5lYXNlKSgoMCwgX2NhbGMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUpKG91dEFjdGlvbi5lbGFwc2VkICsgdGltZVN0ZXAsIG91dFZhbHVlLmRlbGF5LCBvdXRWYWx1ZS5kdXJhdGlvbiksIG91dFZhbHVlLmZyb20sIG91dFZhbHVlLnRvLCBvdXRWYWx1ZS5lYXNlKTtcbiAgICAgICAgICAgIHZhciBpbkF0VGltZSA9ICgwLCBfY2FsYy5lYXNlKSgoMCwgX2NhbGMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUpKGluQWN0aW9uLmVsYXBzZWQgKyB0aW1lU3RlcCwgaW5WYWx1ZS5kZWxheSwgaW5WYWx1ZS5kdXJhdGlvbiksIGluVmFsdWUuZnJvbSwgaW5WYWx1ZS50bywgaW5WYWx1ZS5lYXNlKTtcblxuICAgICAgICAgICAgaWYgKCFmb3VuZFAxICYmIChpbkJpZ2dlclRoYW5PdXRBdFN0YXJ0ICYmIGluQXRUaW1lIDwgb3V0QXRUaW1lIHx8ICFpbkJpZ2dlclRoYW5PdXRBdFN0YXJ0ICYmIGluQXRUaW1lID4gb3V0QXRUaW1lKSkge1xuICAgICAgICAgICAgICAgIGJsZW5kQ3VydmUuc3BsaWNlKDEsIDAsIFt0aW1lU3RlcCwgaW5BdFRpbWVdKTtcbiAgICAgICAgICAgICAgICBmb3VuZFAxID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGZvdW5kUDEgJiYgKGluQmlnZ2VyVGhhbk91dEF0U3RhcnQgJiYgaW5BdFRpbWUgPCBvdXRWYWx1ZS5jdXJyZW50IHx8ICFpbkJpZ2dlclRoYW5PdXRBdFN0YXJ0ICYmIGluQXRUaW1lID4gb3V0VmFsdWUuY3VycmVudCkpIHtcbiAgICAgICAgICAgICAgICBibGVuZEN1cnZlWzJdID0gW3RpbWVTdGVwLCBpbkF0VGltZV07XG4gICAgICAgICAgICAgICAgZm91bmRQMiA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChmb3VuZFAyKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYmxlbmRDdXJ2ZS5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgLy8gUGFzcyBiZXR3ZWVuIHR3ZWVucyB1c2luZyBpbmNvbWluZyBlYXNpbmcgaWYganVzdCB0d28gcG9pbnRzXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYmxlbmRQcm9ncmVzcyA9ICgwLCBfY2FsYy5yZXN0cmljdCkoKDAsIF9jYWxjLmdldFByb2dyZXNzRnJvbVZhbHVlKShpbkFjdGlvbi5lbGFwc2VkLCBibGVuZEN1cnZlWzBdWzBdLCBibGVuZEN1cnZlWzFdWzBdKSwgMCwgMSk7XG5cbiAgICAgICAgICAgIGlmIChibGVuZFByb2dyZXNzID09PSAxKSB7XG4gICAgICAgICAgICAgICAgZmxvd1ZhbHVlLmJsZW5kQ3VydmUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiAoMCwgX2NhbGMuZWFzZSkoYmxlbmRQcm9ncmVzcywgb3V0VmFsdWUuY3VycmVudCwgaW5WYWx1ZS5jdXJyZW50LCBpblZhbHVlLmVhc2UpO1xuICAgICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFBhc3MgYmV0d2VlbiB0d2VlbnMgdXNpbmcgYmV6aWVyIGludGVycG9sYXRpb25cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBibGVuZFByb2dyZXNzID0gKDAsIF9jYWxjLnJlc3RyaWN0KSgoMCwgX2NhbGMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUpKGluQWN0aW9uLmVsYXBzZWQsIGJsZW5kQ3VydmVbMF1bMF0sIGJsZW5kQ3VydmVbMl1bMF0pLCAwLCAxKTtcbiAgICAgICAgICAgIHZhciBhUCA9ICgwLCBfY2FsYy5nZXRWYWx1ZUZyb21Qcm9ncmVzcykoYmxlbmRQcm9ncmVzcywgYmxlbmRDdXJ2ZVswXVsxXSwgYmxlbmRDdXJ2ZVsxXVsxXSk7XG4gICAgICAgICAgICB2YXIgYlAgPSAoMCwgX2NhbGMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MpKGJsZW5kUHJvZ3Jlc3MsIGJsZW5kQ3VydmVbMV1bMV0sIGJsZW5kQ3VydmVbMl1bMV0pO1xuXG4gICAgICAgICAgICBpZiAoYmxlbmRQcm9ncmVzcyA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGZsb3dWYWx1ZS5ibGVuZEN1cnZlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHJldHVybiBpblZhbHVlLmN1cnJlbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiAoMCwgX2NhbGMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MpKGJsZW5kUHJvZ3Jlc3MsIGFQLCBiUCk7XG4gICAgICAgIH07XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDJac2IzY3ZaMlZ1WlhKaGRHVXRZbXhsYm1RdFkzVnlkbVV1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dEJRVUZCT3p0QlFVVkJMRWxCUVUwc2FVSkJRV2xDTEVWQlFXcENPenRyUWtGRlV5eFZRVUZETEZOQlFVUXNSVUZCV1N4UlFVRmFMRVZCUVhOQ0xGTkJRWFJDTEVWQlFXbERMRWRCUVdwRExFVkJRWGxETzBGQlEzQkVMRkZCUVUwc1YwRkJWeXhWUVVGVkxFMUJRVllzUTBGQmFVSXNSMEZCYWtJc1EwRkJXQ3hEUVVRNFF6czdRVUZIY0VRc1VVRkJTU3hWUVVGVkxFOUJRVllzUzBGQmMwSXNVMEZCZEVJc1NVRkJiVU1zUTBGQlF5eFJRVUZFTEVWQlFWYzdRVUZET1VNc1pVRkVPRU03UzBGQmJFUTdPMEZCU1VFc1VVRkJUU3hWUVVGVkxGTkJRVk1zVFVGQlZDeERRVUZuUWl4SFFVRm9RaXhEUVVGV0xFTkJVRGhETzBGQlVYQkVMRkZCUVUwc2JVSkJRVzFDTEZOQlFWTXNTMEZCVkN4SFFVRnBRaXhUUVVGVExGRkJRVlFzUTBGU1ZUdEJRVk53UkN4UlFVRk5MR3RDUVVGclFpeExRVUZMTEVkQlFVd3NRMEZCVXl4dFFrRkJiVUlzVlVGQlZTeFBRVUZXTEVWQlFXMUNMRkZCUVZFc1MwRkJVaXhIUVVGblFpeFJRVUZSTEZGQlFWSXNRMEZCYWtZc1EwRlVPRU03UVVGVmNFUXNVVUZCVFN4eFFrRkJjVUlzWjBKQlFVc3NiMEpCUVZNc1owTkJRWEZDTEdWQlFYSkNMRVZCUVhORExFTkJRWFJETEVWQlFYbERMRkZCUVZFc1MwRkJVaXhIUVVGblFpeFJRVUZSTEZGQlFWSXNRMEZCYkVVc1JVRkJjVVlzUTBGQmNrWXNSVUZCZDBZc1EwRkJlRVlzUTBGQlRDeEZRVUZwUnl4UlFVRlJMRWxCUVZJc1JVRkJZeXhSUVVGUkxFVkJRVklzUlVGQldTeFJRVUZSTEVsQlFWSXNRMEZCYUVvc1EwRldPRU03UVVGWGNFUXNVVUZCVFN4NVFrRkJlVUlzVVVGQlVTeEpRVUZTTEVkQlFXVXNVMEZCVXl4UFFVRlVMRU5CV0UwN1FVRlpjRVFzVVVGQlRTeDFRa0ZCZFVJc2NVSkJRWEZDTEZOQlFWTXNSVUZCVkN4RFFWcEZPMEZCWVhCRUxGRkJRVTBzYTBKQlFXdENMREpDUVVFeVFpeHZRa0ZCTTBJc1EwRmlORUk3TzBGQlpYQkVMRkZCUVUwc1lVRkJZU3hEUVVGRExFTkJRVU1zUTBGQlJDeEZRVUZKTEZOQlFWTXNUMEZCVkN4RFFVRk1MRVZCUVhkQ0xFTkJRVU1zWlVGQlJDeEZRVUZyUWl4clFrRkJiRUlzUTBGQmVFSXNRMEZCWWpzN08wRkJaamhETEZGQmEwSm9SQ3hsUVVGS0xFVkJRWEZDTzBGQlEycENMRmxCUVUwc2FVSkJRV2xDTEd0Q1FVRnJRaXhqUVVGc1FpeERRVVJPTzBGQlJXcENMRmxCUVVrc1ZVRkJWU3hMUVVGV0xFTkJSbUU3UVVGSGFrSXNXVUZCU1N4VlFVRlZMRXRCUVZZc1EwRklZVHM3UVVGTGFrSXNZVUZCU3l4SlFVRkpMRWxCUVVrc1EwRkJTaXhGUVVGUExFdEJRVXNzWTBGQlRDeEZRVUZ4UWl4SFFVRnlReXhGUVVFd1F6dEJRVU4wUXl4blFrRkJUU3hYUVVGWExFbEJRVWtzWTBGQlNpeERRVVJ4UWp0QlFVVjBReXhuUWtGQlRTeFpRVUZaTEdkQ1FVRkxMR2REUVVGeFFpeFZRVUZWTEU5QlFWWXNSMEZCYjBJc1VVRkJjRUlzUlVGQk9FSXNVMEZCVXl4TFFVRlVMRVZCUVdkQ0xGTkJRVk1zVVVGQlZDeERRVUY0UlN4RlFVRTBSaXhUUVVGVExFbEJRVlFzUlVGQlpTeFRRVUZUTEVWQlFWUXNSVUZCWVN4VFFVRlRMRWxCUVZRc1EwRkJjRWtzUTBGR1owTTdRVUZIZEVNc1owSkJRVTBzVjBGQlZ5eG5Ra0ZCU3l4blEwRkJjVUlzVTBGQlV5eFBRVUZVTEVkQlFXMUNMRkZCUVc1Q0xFVkJRVFpDTEZGQlFWRXNTMEZCVWl4RlFVRmxMRkZCUVZFc1VVRkJVaXhEUVVGMFJTeEZRVUY1Uml4UlFVRlJMRWxCUVZJc1JVRkJZeXhSUVVGUkxFVkJRVklzUlVGQldTeFJRVUZSTEVsQlFWSXNRMEZCT1Vnc1EwRklaME03TzBGQlMzUkRMR2RDUVVGSkxFTkJRVU1zVDBGQlJDeExRVUZoTEhOQ1FVRkRMRWxCUVRCQ0xGZEJRVmNzVTBGQldDeEpRVUV3UWl4RFFVRkRMSE5DUVVGRUxFbEJRVEpDTEZkQlFWY3NVMEZCV0N4RFFVRTNSaXhGUVVGeFNEdEJRVU55U0N3eVFrRkJWeXhOUVVGWUxFTkJRV3RDTEVOQlFXeENMRVZCUVhGQ0xFTkJRWEpDTEVWQlFYZENMRU5CUVVNc1VVRkJSQ3hGUVVGWExGRkJRVmdzUTBGQmVFSXNSVUZFY1VnN1FVRkZja2dzTUVKQlFWVXNTVUZCVml4RFFVWnhTRHRoUVVGNlNEczdRVUZMUVN4blFrRkJTU3haUVVGWkxITkNRVUZETEVsQlFUQkNMRmRCUVZjc1UwRkJVeXhQUVVGVUxFbEJRWE5DTEVOQlFVTXNjMEpCUVVRc1NVRkJNa0lzVjBGQlZ5eFRRVUZUTEU5QlFWUXNRMEZCT1Vjc1JVRkJhMGs3UVVGRGJFa3NNa0pCUVZjc1EwRkJXQ3hKUVVGblFpeERRVUZETEZGQlFVUXNSVUZCVnl4UlFVRllMRU5CUVdoQ0xFTkJSR3RKTzBGQlJXeEpMREJDUVVGVkxFbEJRVllzUTBGR2EwazdZVUZCZEVrN08wRkJTMEVzWjBKQlFVa3NUMEZCU2l4RlFVRmhPMEZCUTFRc2MwSkJSRk03WVVGQllqdFRRV1pLTzB0QlRFbzdPMEZCTUVKQkxGRkJRVWtzVjBGQlZ5eE5RVUZZTEV0QlFYTkNMRU5CUVhSQ0xFVkJRWGxDT3p0QlFVVjZRaXhsUVVGUExGbEJRVTA3UVVGRFZDeG5Ra0ZCVFN4blFrRkJaMElzYjBKQlFWTXNaME5CUVhGQ0xGTkJRVk1zVDBGQlZDeEZRVUZyUWl4WFFVRlhMRU5CUVZnc1JVRkJZeXhEUVVGa0xFTkJRWFpETEVWQlFYbEVMRmRCUVZjc1EwRkJXQ3hGUVVGakxFTkJRV1FzUTBGQmVrUXNRMEZCVkN4RlFVRnhSaXhEUVVGeVJpeEZRVUYzUml4RFFVRjRSaXhEUVVGb1FpeERRVVJIT3p0QlFVZFVMR2RDUVVGSkxHdENRVUZyUWl4RFFVRnNRaXhGUVVGeFFqdEJRVU55UWl3d1FrRkJWU3hWUVVGV0xFZEJRWFZDTEZOQlFYWkNMRU5CUkhGQ08yRkJRWHBDT3p0QlFVbEJMRzFDUVVGUExHZENRVUZMTEdGQlFVd3NSVUZCYjBJc1UwRkJVeXhQUVVGVUxFVkJRV3RDTEZGQlFWRXNUMEZCVWl4RlFVRnBRaXhSUVVGUkxFbEJRVklzUTBGQk9VUXNRMEZRVXp0VFFVRk9MRU5CUm10Q08wdEJRVGRDTEUxQlYwODdPMEZCUlVnc1pVRkJUeXhaUVVGTk8wRkJRMVFzWjBKQlFVMHNaMEpCUVdkQ0xHOUNRVUZUTEdkRFFVRnhRaXhUUVVGVExFOUJRVlFzUlVGQmEwSXNWMEZCVnl4RFFVRllMRVZCUVdNc1EwRkJaQ3hEUVVGMlF5eEZRVUY1UkN4WFFVRlhMRU5CUVZnc1JVRkJZeXhEUVVGa0xFTkJRWHBFTEVOQlFWUXNSVUZCY1VZc1EwRkJja1lzUlVGQmQwWXNRMEZCZUVZc1EwRkJhRUlzUTBGRVJ6dEJRVVZVTEdkQ1FVRk5MRXRCUVVzc1owTkJRWEZDTEdGQlFYSkNMRVZCUVc5RExGZEJRVmNzUTBGQldDeEZRVUZqTEVOQlFXUXNRMEZCY0VNc1JVRkJjMFFzVjBGQlZ5eERRVUZZTEVWQlFXTXNRMEZCWkN4RFFVRjBSQ3hEUVVGTUxFTkJSa2M3UVVGSFZDeG5Ra0ZCVFN4TFFVRkxMR2REUVVGeFFpeGhRVUZ5UWl4RlFVRnZReXhYUVVGWExFTkJRVmdzUlVGQll5eERRVUZrTEVOQlFYQkRMRVZCUVhORUxGZEJRVmNzUTBGQldDeEZRVUZqTEVOQlFXUXNRMEZCZEVRc1EwRkJUQ3hEUVVoSE96dEJRVXRVTEdkQ1FVRkpMR3RDUVVGclFpeERRVUZzUWl4RlFVRnhRanRCUVVOeVFpd3dRa0ZCVlN4VlFVRldMRWRCUVhWQ0xGTkJRWFpDTEVOQlJIRkNPMEZCUlhKQ0xIVkNRVUZQTEZGQlFWRXNUMEZCVWl4RFFVWmpPMkZCUVhwQ096dEJRVXRCTEcxQ1FVRlBMR2REUVVGeFFpeGhRVUZ5UWl4RlFVRnZReXhGUVVGd1F5eEZRVUYzUXl4RlFVRjRReXhEUVVGUUxFTkJWbE03VTBGQlRpeERRVVpLTzB0QldGQTdRMEUxUTFjaUxDSm1hV3hsSWpvaVoyVnVaWEpoZEdVdFlteGxibVF0WTNWeWRtVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFF2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSHNnWjJWMFVISnZaM0psYzNOR2NtOXRWbUZzZFdVc0lHZGxkRlpoYkhWbFJuSnZiVkJ5YjJkeVpYTnpMQ0JsWVhObExDQnlaWE4wY21samRDQjlJR1p5YjIwZ0p5NHVMeTR1TDJsdVl5OWpZV3hqSnp0Y2JseHVZMjl1YzNRZ1FreEZUa1JmUVVORFZWSkJRMWtnUFNBMk1EdGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdLRzkxZEVGamRHbHZiaXdnYVc1QlkzUnBiMjRzSUdac2IzZFdZV3gxWlN3Z2EyVjVLU0E5UGlCN1hHNGdJQ0FnWTI5dWMzUWdiM1YwVm1Gc2RXVWdQU0J2ZFhSQlkzUnBiMjR1ZG1Gc2RXVnpXMnRsZVYwN1hHNWNiaUFnSUNCcFppQW9iM1YwUVdOMGFXOXVMbVZzWVhCelpXUWdQVDA5SUhWdVpHVm1hVzVsWkNCOGZDQWhiM1YwVm1Gc2RXVXBJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHTnZibk4wSUdsdVZtRnNkV1VnUFNCcGJrRmpkR2x2Ymk1MllXeDFaWE5iYTJWNVhUdGNiaUFnSUNCamIyNXpkQ0J2ZFhSVWIzUmhiRVIxY21GMGFXOXVJRDBnYjNWMFZtRnNkV1V1WkdWc1lYa2dLeUJ2ZFhSV1lXeDFaUzVrZFhKaGRHbHZianRjYmlBZ0lDQmpiMjV6ZENCMGFXMWxWVzUwYVd4UGRYUkZibVFnUFNCTllYUm9MbTFwYmlodmRYUlViM1JoYkVSMWNtRjBhVzl1SUMwZ2IzVjBRV04wYVc5dUxtVnNZWEJ6WldRc0lHbHVWbUZzZFdVdVpHVnNZWGtnS3lCcGJsWmhiSFZsTG1SMWNtRjBhVzl1S1R0Y2JpQWdJQ0JqYjI1emRDQnBibEJ2YzJsMGFXOXVRWFJQZFhSRmJtUWdQU0JsWVhObEtISmxjM1J5YVdOMEtHZGxkRkJ5YjJkeVpYTnpSbkp2YlZaaGJIVmxLSFJwYldWVmJuUnBiRTkxZEVWdVpDd2dNQ3dnYVc1V1lXeDFaUzVrWld4aGVTQXJJR2x1Vm1Gc2RXVXVaSFZ5WVhScGIyNHBMQ0F3TENBeEtTd2dhVzVXWVd4MVpTNW1jbTl0TENCcGJsWmhiSFZsTG5SdkxDQnBibFpoYkhWbExtVmhjMlVwTzF4dUlDQWdJR052Ym5OMElHbHVRbWxuWjJWeVZHaGhiazkxZEVGMFUzUmhjblFnUFNCcGJsWmhiSFZsTG1aeWIyMGdQaUJ2ZFhSV1lXeDFaUzVqZFhKeVpXNTBPMXh1SUNBZ0lHTnZibk4wSUdsdVFtbG5aMlZ5VkdoaGJrOTFkRUYwUlc1a0lEMGdhVzVRYjNOcGRHbHZia0YwVDNWMFJXNWtJRDRnYjNWMFZtRnNkV1V1ZEc4N1hHNGdJQ0FnWTI5dWMzUWdkSGRsWlc1elNXNTBaWEp6WldOMElEMGdhVzVDYVdkblpYSlVhR0Z1VDNWMFFYUlRkR0Z5ZENBaFBUMGdhVzVDYVdkblpYSlVhR0Z1VDNWMFFYUkZibVE3WEc1Y2JpQWdJQ0JqYjI1emRDQmliR1Z1WkVOMWNuWmxJRDBnVzFzd0xDQnZkWFJXWVd4MVpTNWpkWEp5Wlc1MFhTd2dXM1JwYldWVmJuUnBiRTkxZEVWdVpDd2dhVzVRYjNOcGRHbHZia0YwVDNWMFJXNWtYVjA3WEc1Y2JpQWdJQ0F2THlCSlppQjBkMlZsYm5NZ2FXNTBaWEp6WldOMExDQnlaWE52YkhabElIUjNaV1Z1Y3lCaGRDQmhJSEpsYzI5c2RYUnBiMjRnZEc4Z1ptbHVaQ0JsZUdGamRHeDVJSGRvWlhKbFhHNGdJQ0FnYVdZZ0tIUjNaV1Z1YzBsdWRHVnljMlZqZENrZ2UxeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCMGFXMWxVM1JsY0ZSdlZHVnpkQ0E5SUhScGJXVlZiblJwYkU5MWRFVnVaQ0F2SUVKTVJVNUVYMEZEUTFWU1FVTlpPMXh1SUNBZ0lDQWdJQ0JzWlhRZ1ptOTFibVJRTVNBOUlHWmhiSE5sTzF4dUlDQWdJQ0FnSUNCc1pYUWdabTkxYm1SUU1pQTlJR1poYkhObE8xeHVYRzRnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHc5SUVKTVJVNUVYMEZEUTFWU1FVTlpPeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJSFJwYldWVGRHVndJRDBnYVNBcUlIUnBiV1ZUZEdWd1ZHOVVaWE4wTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2IzVjBRWFJVYVcxbElEMGdaV0Z6WlNoblpYUlFjbTluY21WemMwWnliMjFXWVd4MVpTaHZkWFJCWTNScGIyNHVaV3hoY0hObFpDQXJJSFJwYldWVGRHVndMQ0J2ZFhSV1lXeDFaUzVrWld4aGVTd2diM1YwVm1Gc2RXVXVaSFZ5WVhScGIyNHBMQ0J2ZFhSV1lXeDFaUzVtY205dExDQnZkWFJXWVd4MVpTNTBieXdnYjNWMFZtRnNkV1V1WldGelpTazdYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0JwYmtGMFZHbHRaU0E5SUdWaGMyVW9aMlYwVUhKdlozSmxjM05HY205dFZtRnNkV1VvYVc1QlkzUnBiMjR1Wld4aGNITmxaQ0FySUhScGJXVlRkR1Z3TENCcGJsWmhiSFZsTG1SbGJHRjVMQ0JwYmxaaGJIVmxMbVIxY21GMGFXOXVLU3dnYVc1V1lXeDFaUzVtY205dExDQnBibFpoYkhWbExuUnZMQ0JwYmxaaGJIVmxMbVZoYzJVcE8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9JV1p2ZFc1a1VERWdKaVlnS0NocGJrSnBaMmRsY2xSb1lXNVBkWFJCZEZOMFlYSjBJQ1ltSUdsdVFYUlVhVzFsSUR3Z2IzVjBRWFJVYVcxbEtTQjhmQ0FvSVdsdVFtbG5aMlZ5VkdoaGJrOTFkRUYwVTNSaGNuUWdKaVlnYVc1QmRGUnBiV1VnUGlCdmRYUkJkRlJwYldVcEtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR0pzWlc1a1EzVnlkbVV1YzNCc2FXTmxLREVzSURBc0lGdDBhVzFsVTNSbGNDd2dhVzVCZEZScGJXVmRLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JtYjNWdVpGQXhJRDBnZEhKMVpUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHWnZkVzVrVURFZ0ppWWdLQ2hwYmtKcFoyZGxjbFJvWVc1UGRYUkJkRk4wWVhKMElDWW1JR2x1UVhSVWFXMWxJRHdnYjNWMFZtRnNkV1V1WTNWeWNtVnVkQ2tnZkh3Z0tDRnBia0pwWjJkbGNsUm9ZVzVQZFhSQmRGTjBZWEowSUNZbUlHbHVRWFJVYVcxbElENGdiM1YwVm1Gc2RXVXVZM1Z5Y21WdWRDa3BLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWW14bGJtUkRkWEoyWlZzeVhTQTlJRnQwYVcxbFUzUmxjQ3dnYVc1QmRGUnBiV1ZkTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdadmRXNWtVRElnUFNCMGNuVmxPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9abTkxYm1SUU1pa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR0p5WldGck8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnYVdZZ0tHSnNaVzVrUTNWeWRtVXViR1Z1WjNSb0lEMDlQU0F5S1NCN1hHNGdJQ0FnSUNBZ0lDOHZJRkJoYzNNZ1ltVjBkMlZsYmlCMGQyVmxibk1nZFhOcGJtY2dhVzVqYjIxcGJtY2daV0Z6YVc1bklHbG1JR3AxYzNRZ2RIZHZJSEJ2YVc1MGMxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z0tDa2dQVDRnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ1lteGxibVJRY205bmNtVnpjeUE5SUhKbGMzUnlhV04wS0dkbGRGQnliMmR5WlhOelJuSnZiVlpoYkhWbEtHbHVRV04wYVc5dUxtVnNZWEJ6WldRc0lHSnNaVzVrUTNWeWRtVmJNRjFiTUYwc0lHSnNaVzVrUTNWeWRtVmJNVjFiTUYwcExDQXdMQ0F4S1R0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHSnNaVzVrVUhKdlozSmxjM01nUFQwOUlERXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JtYkc5M1ZtRnNkV1V1WW14bGJtUkRkWEoyWlNBOUlIVnVaR1ZtYVc1bFpEdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJR1ZoYzJVb1lteGxibVJRY205bmNtVnpjeXdnYjNWMFZtRnNkV1V1WTNWeWNtVnVkQ3dnYVc1V1lXeDFaUzVqZFhKeVpXNTBMQ0JwYmxaaGJIVmxMbVZoYzJVcE8xeHVJQ0FnSUNBZ0lDQjlPMXh1SUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDOHZJRkJoYzNNZ1ltVjBkMlZsYmlCMGQyVmxibk1nZFhOcGJtY2dZbVY2YVdWeUlHbHVkR1Z5Y0c5c1lYUnBiMjVjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJQ2dwSUQwK0lIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJR0pzWlc1a1VISnZaM0psYzNNZ1BTQnlaWE4wY21samRDaG5aWFJRY205bmNtVnpjMFp5YjIxV1lXeDFaU2hwYmtGamRHbHZiaTVsYkdGd2MyVmtMQ0JpYkdWdVpFTjFjblpsV3pCZFd6QmRMQ0JpYkdWdVpFTjFjblpsV3pKZFd6QmRLU3dnTUN3Z01TazdYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0JoVUNBOUlHZGxkRlpoYkhWbFJuSnZiVkJ5YjJkeVpYTnpLR0pzWlc1a1VISnZaM0psYzNNc0lHSnNaVzVrUTNWeWRtVmJNRjFiTVYwc0lHSnNaVzVrUTNWeWRtVmJNVjFiTVYwcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdZbEFnUFNCblpYUldZV3gxWlVaeWIyMVFjbTluY21WemN5aGliR1Z1WkZCeWIyZHlaWE56TENCaWJHVnVaRU4xY25abFd6RmRXekZkTENCaWJHVnVaRU4xY25abFd6SmRXekZkS1R0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHSnNaVzVrVUhKdlozSmxjM01nUFQwOUlERXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JtYkc5M1ZtRnNkV1V1WW14bGJtUkRkWEoyWlNBOUlIVnVaR1ZtYVc1bFpEdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z2FXNVdZV3gxWlM1amRYSnlaVzUwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z1oyVjBWbUZzZFdWR2NtOXRVSEp2WjNKbGMzTW9ZbXhsYm1SUWNtOW5jbVZ6Y3l3Z1lWQXNJR0pRS1R0Y2JpQWdJQ0FnSUNBZ2ZUdGNiaUFnSUNCOVhHNTlPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9mbG93L2dlbmVyYXRlLWJsZW5kLWN1cnZlLmpzXG4gKiogbW9kdWxlIGlkID0gMzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9JbnB1dDIgPSByZXF1aXJlKCcuL0lucHV0Jyk7XG5cbnZhciBfSW5wdXQzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfSW5wdXQyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgUG9pbnRlciA9IGZ1bmN0aW9uIChfSW5wdXQpIHtcbiAgICBfaW5oZXJpdHMoUG9pbnRlciwgX0lucHV0KTtcblxuICAgIGZ1bmN0aW9uIFBvaW50ZXIoaW5pdGlhbFN0YXRlLCBtb3ZlRXZlbnQsIGV2ZW50VG9Qb2ludCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUG9pbnRlcik7XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0lucHV0LmNhbGwodGhpcywgaW5pdGlhbFN0YXRlKSk7XG5cbiAgICAgICAgX3RoaXMuZXZlbnRUb1BvaW50ID0gZXZlbnRUb1BvaW50O1xuICAgICAgICBfdGhpcy5tb3ZlRXZlbnQgPSBtb3ZlRXZlbnQ7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBQb2ludGVyLnByb3RvdHlwZS5sYXRlc3QgPSBmdW5jdGlvbiBsYXRlc3QoZSkge1xuICAgICAgICBfSW5wdXQucHJvdG90eXBlLmxhdGVzdC5jYWxsKHRoaXMsIHRoaXMuZXZlbnRUb1BvaW50KGUpKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH07XG5cbiAgICBQb2ludGVyLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICBfSW5wdXQucHJvdG90eXBlLnN0YXJ0LmNhbGwodGhpcyk7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHRoaXMubW92ZUV2ZW50LCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMi5sYXRlc3QoZSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBQb2ludGVyLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgICAgX0lucHV0LnByb3RvdHlwZS5zdG9wLmNhbGwodGhpcyk7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMubW92ZUV2ZW50LCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMy5sYXRlc3QoZSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gUG9pbnRlcjtcbn0oX0lucHV0My5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUG9pbnRlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJuQjFkQzlRYjJsdWRHVnlMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN1FVRkJRVHM3T3pzN096czdPenM3TzBsQlJYRkNPenM3UVVGRGFrSXNZVUZFYVVJc1QwRkRha0lzUTBGQldTeFpRVUZhTEVWQlFUQkNMRk5CUVRGQ0xFVkJRWEZETEZsQlFYSkRMRVZCUVcxRU96aENRVVJzUXl4VFFVTnJRenM3Y1VSQlF5OURMR3RDUVVGTkxGbEJRVTRzUjBGRUswTTdPMEZCUlM5RExHTkJRVXNzV1VGQlRDeEhRVUZ2UWl4WlFVRndRaXhEUVVZclF6dEJRVWN2UXl4alFVRkxMRk5CUVV3c1IwRkJhVUlzVTBGQmFrSXNRMEZJSzBNN08wdEJRVzVFT3p0QlFVUnBRaXh6UWtGUGFrSXNlVUpCUVU4c1IwRkJSenRCUVVOT0xIbENRVUZOTEUxQlFVNHNXVUZCWVN4TFFVRkxMRmxCUVV3c1EwRkJhMElzUTBGQmJFSXNRMEZCWWl4RlFVUk5PMEZCUlU0c1ZVRkJSU3hqUVVGR0xFZEJSazA3T3p0QlFWQlBMSE5DUVZscVFpeDVRa0ZCVVRzN08wRkJRMG9zZVVKQlFVMHNTMEZCVGl4WlFVUkpPMEZCUlVvc2FVSkJRVk1zWlVGQlZDeERRVUY1UWl4blFrRkJla0lzUTBGQk1FTXNTMEZCU3l4VFFVRk1MRVZCUVdkQ0xGVkJRVU1zUTBGQlJEdHRRa0ZCVHl4UFFVRkxMRTFCUVV3c1EwRkJXU3hEUVVGYU8xTkJRVkFzUTBGQk1VUXNRMEZHU1RzN08wRkJXbE1zYzBKQmFVSnFRaXgxUWtGQlR6czdPMEZCUTBnc2VVSkJRVTBzU1VGQlRpeFpRVVJITzBGQlJVZ3NhVUpCUVZNc1pVRkJWQ3hEUVVGNVFpeHRRa0ZCZWtJc1EwRkJOa01zUzBGQlN5eFRRVUZNTEVWQlFXZENMRlZCUVVNc1EwRkJSRHR0UWtGQlR5eFBRVUZMTEUxQlFVd3NRMEZCV1N4RFFVRmFPMU5CUVZBc1EwRkJOMFFzUTBGR1J6czdPMWRCYWtKVklpd2labWxzWlNJNklsQnZhVzUwWlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUXZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElFbHVjSFYwSUdaeWIyMGdKeTR2U1c1d2RYUW5PMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JqYkdGemN5QlFiMmx1ZEdWeUlHVjRkR1Z1WkhNZ1NXNXdkWFFnZTF4dUlDQWdJR052Ym5OMGNuVmpkRzl5S0dsdWFYUnBZV3hUZEdGMFpTd2diVzkyWlVWMlpXNTBMQ0JsZG1WdWRGUnZVRzlwYm5RcElIdGNiaUFnSUNBZ0lDQWdjM1Z3WlhJb2FXNXBkR2xoYkZOMFlYUmxLVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWxkbVZ1ZEZSdlVHOXBiblFnUFNCbGRtVnVkRlJ2VUc5cGJuUTdYRzRnSUNBZ0lDQWdJSFJvYVhNdWJXOTJaVVYyWlc1MElEMGdiVzkyWlVWMlpXNTBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHeGhkR1Z6ZENobEtTQjdYRzRnSUNBZ0lDQWdJSE4xY0dWeUxteGhkR1Z6ZENoMGFHbHpMbVYyWlc1MFZHOVFiMmx1ZENobEtTazdYRzRnSUNBZ0lDQWdJR1V1Y0hKbGRtVnVkRVJsWm1GMWJIUW9LVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnpkR0Z5ZENncElIdGNiaUFnSUNBZ0lDQWdjM1Z3WlhJdWMzUmhjblFvS1R0Y2JpQWdJQ0FnSUNBZ1pHOWpkVzFsYm5RdVpHOWpkVzFsYm5SRmJHVnRaVzUwTG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvZEdocGN5NXRiM1psUlhabGJuUXNJQ2hsS1NBOVBpQjBhR2x6TG14aGRHVnpkQ2hsS1NrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYzNSdmNDZ3BJSHRjYmlBZ0lDQWdJQ0FnYzNWd1pYSXVjM1J2Y0NncE8xeHVJQ0FnSUNBZ0lDQmtiMk4xYldWdWRDNWtiMk4xYldWdWRFVnNaVzFsYm5RdWNtVnRiM1psUlhabGJuUk1hWE4wWlc1bGNpaDBhR2x6TG0xdmRtVkZkbVZ1ZEN3Z0tHVXBJRDArSUhSb2FYTXViR0YwWlhOMEtHVXBLVHRjYmlBZ0lDQjlYRzU5WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lucHV0L1BvaW50ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAzOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWFjdGl2YXRlID0gZXhwb3J0cy5nZXRUYXNrSWQgPSB1bmRlZmluZWQ7XG5leHBvcnRzLmFjdGl2YXRlID0gYWN0aXZhdGU7XG5cbnZhciBfdGltZXIgPSByZXF1aXJlKCcuL3RpbWVyJyk7XG5cbnZhciBfdGltZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdGltZXIpO1xuXG52YXIgX3RpY2sgPSByZXF1aXJlKCcuL3RpY2snKTtcblxudmFyIF90aWNrMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RpY2spO1xuXG52YXIgX21hbmFnZXIgPSByZXF1aXJlKCcuL21hbmFnZXInKTtcblxudmFyIF9tYW5hZ2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21hbmFnZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgdGFza1N0ZXBPcmRlciA9IFt7IG5hbWU6ICdvbkZyYW1lU3RhcnQnIH0sIHsgbmFtZTogJ29uVXBkYXRlJyB9LCB7IG5hbWU6ICd3aWxsUmVuZGVyJywgZGVjaWRlUmVuZGVyOiB0cnVlIH0sIHsgbmFtZTogJ29uUHJlUmVuZGVyJywgaXNSZW5kZXI6IHRydWUgfSwgeyBuYW1lOiAnb25SZW5kZXInLCBpc1JlbmRlcjogdHJ1ZSB9LCB7IG5hbWU6ICdvblBvc3RSZW5kZXInLCBpc1JlbmRlcjogdHJ1ZSB9LCB7IG5hbWU6ICdvbkZyYW1lRW5kJyB9LCB7IG5hbWU6ICdvbkNsZWFudXAnIH1dOyAvKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcmUgcmVuZGVyIGxvb3BcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNvbWUgZGVjaWNpc29ucyBoZXJlIGhhdmUgYmVlbiB0YWtlbiBpbiB0aGUgbmFtZSBvZiBwZXJmb3JtYW5jZS4gQWxsIGhhaWwgcGVyZm9ybWFuY2UuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKEl0IHR1cm5zIG91dCBtaWNyb29wdGltaXNhdGlvbnMgZG8gbWF0dGVyIHdoZW4geW91IGhhdmUgMTZtcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG5cbnZhciBudW1UYXNrU3RlcHMgPSB0YXNrU3RlcE9yZGVyLmxlbmd0aDtcblxuLy8gW2Jvb2xlYW5dOiBJcyBsb29wIHJ1bm5pbmc/XG52YXIgaXNSdW5uaW5nID0gZmFsc2U7XG5cbi8qXG4gICAgW3RpbWVzdGFtcF06IEZyYW1lIHRpbWVzdGFtcFxuICAgIFtpbnRdOiBUaW1lIHNpbmNlIGxhc3QgZnJhbWVcbiovXG5mdW5jdGlvbiBmaXJlQWxsKGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgICB2YXIgYWN0aXZlSWRzID0gX21hbmFnZXIyLmRlZmF1bHQuZ2V0QWN0aXZlSWRzKCk7XG4gICAgdmFyIGFjdGl2ZVRhc2tDb3VudCA9IGFjdGl2ZUlkcy5sZW5ndGg7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVRhc2tTdGVwczsgaSsrKSB7XG4gICAgICAgIHZhciBzdGVwID0gdGFza1N0ZXBPcmRlcltpXTtcblxuICAgICAgICBmb3IgKHZhciBpMiA9IDA7IGkyIDwgYWN0aXZlVGFza0NvdW50OyBpMisrKSB7XG4gICAgICAgICAgICB2YXIgdGFzayA9IF9tYW5hZ2VyMi5kZWZhdWx0LmFjdGl2ZVRhc2tzW2FjdGl2ZUlkc1tpMl1dO1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAvLyBDaGVjayBpZiB0aGlzIHRhc2sgaGFzIHRoaXMgc3RlcCwgb3IgaWYgaXQncyBhIHJlbmRlciBzdGVwIHRoYXQgd2UncmUgcmVuZGVyaW5nIHRoaXMgZnJhbWVcbiAgICAgICAgICAgIGlmICh0YXNrICYmIHRhc2tbc3RlcC5uYW1lXSAmJiAoIXN0ZXAuaXNSZW5kZXIgfHwgc3RlcC5pc1JlbmRlciAmJiB0YXNrLl9yZW5kZXJUaGlzRnJhbWUgPT09IHRydWUpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGFza1tzdGVwLm5hbWVdLmNhbGwodGFzaywgdGFzaywgZnJhbWVTdGFtcCwgZWxhcHNlZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIHRoaXMgaXMgYSBkZWNpZGUgcmVuZGVyIHN0ZXAgYW5kIGl0IHJldHVybnMgYGZhbHNlYCwgc2V0IHdpbGxSZW5kZXIgdG8gZmFsc2VcbiAgICAgICAgICAgIGlmIChzdGVwLmRlY2lkZVJlbmRlcikge1xuICAgICAgICAgICAgICAgIHRhc2suX3JlbmRlclRoaXNGcmFtZSA9IHRhc2tbc3RlcC5uYW1lXSAmJiByZXN1bHQgIT09IHRydWUgPyBmYWxzZSA6IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gX21hbmFnZXIyLmRlZmF1bHQuZ2V0Tm9uQmFja2dyb3VuZFJ1bm5pbmdDb3VudCgpO1xufVxuXG4vLyBGdW5jdGlvbiB0byBmaXJlIGV2ZXJ5IGZyYW1lXG5mdW5jdGlvbiBmcmFtZShmcmFtZVN0YW1wKSB7XG4gICAgX3RpbWVyMi5kZWZhdWx0LnVwZGF0ZShmcmFtZVN0YW1wKTtcbiAgICBpc1J1bm5pbmcgPSBmaXJlQWxsKGZyYW1lU3RhbXAsIF90aW1lcjIuZGVmYXVsdC5nZXRFbGFwc2VkKCkpO1xuXG4gICAgaWYgKGlzUnVubmluZykge1xuICAgICAgICAoMCwgX3RpY2syLmRlZmF1bHQpKGZyYW1lKTtcbiAgICB9XG59XG5cbi8vIFN0YXJ0IGxvb3BcbmZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgIGlmICghaXNSdW5uaW5nKSB7XG4gICAgICAgIF90aW1lcjIuZGVmYXVsdC5zdGFydCgpO1xuICAgICAgICBpc1J1bm5pbmcgPSB0cnVlO1xuICAgICAgICAoMCwgX3RpY2syLmRlZmF1bHQpKGZyYW1lKTtcbiAgICB9XG59XG5cbi8vIEV4cG9ydHNcbnZhciBnZXRUYXNrSWQgPSBleHBvcnRzLmdldFRhc2tJZCA9IF9tYW5hZ2VyMi5kZWZhdWx0LmdldFRhc2tJZDtcblxuLypcbiAgICBbaW50XTogdGFzayBJRCB0byBhY3RpdmF0ZVxuICAgIFt0YXNrXTogdGFzayB0byBhY3RpdmF0ZVxuKi9cbmZ1bmN0aW9uIGFjdGl2YXRlKGlkLCB0YXNrKSB7XG4gICAgX21hbmFnZXIyLmRlZmF1bHQuYWN0aXZhdGUoaWQsIHRhc2spO1xuXG4gICAgaWYgKCFpc1J1bm5pbmcpIHtcbiAgICAgICAgc3RhcnQoKTtcbiAgICB9XG59XG5cbi8qXG4gICAgW2ludF06IHRhc2sgSUQgdG8gZGVhY3RpdmF0ZVxuKi9cbnZhciBkZWFjdGl2YXRlID0gZXhwb3J0cy5kZWFjdGl2YXRlID0gX21hbmFnZXIyLmRlZmF1bHQuZGVhY3RpdmF0ZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MFlYTnJMMnh2YjNBdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenRSUVdsR1owSTdPMEZCTTBWb1FqczdPenRCUVVOQk96czdPMEZCUTBFN096czdPenRCUVVWQkxFbEJRVTBzWjBKQlFXZENMRU5CUTJ4Q0xFVkJRVVVzVFVGQlRTeGpRVUZPTEVWQlJHZENMRVZCUld4Q0xFVkJRVVVzVFVGQlRTeFZRVUZPTEVWQlJtZENMRVZCUjJ4Q0xFVkJRVVVzVFVGQlRTeFpRVUZPTEVWQlFXOUNMR05CUVdNc1NVRkJaQ3hGUVVoS0xFVkJTV3hDTEVWQlFVVXNUVUZCVFN4aFFVRk9MRVZCUVhGQ0xGVkJRVlVzU1VGQlZpeEZRVXBNTEVWQlMyeENMRVZCUVVVc1RVRkJUU3hWUVVGT0xFVkJRV3RDTEZWQlFWVXNTVUZCVml4RlFVeEdMRVZCVFd4Q0xFVkJRVVVzVFVGQlRTeGpRVUZPTEVWQlFYTkNMRlZCUVZVc1NVRkJWaXhGUVU1T0xFVkJUMnhDTEVWQlFVVXNUVUZCVFN4WlFVRk9MRVZCVUdkQ0xFVkJVV3hDTEVWQlFVVXNUVUZCVFN4WFFVRk9MRVZCVW1kQ0xFTkJRV2hDT3pzN096czdPMEZCVlU0c1NVRkJUU3hsUVVGbExHTkJRV01zVFVGQlpEczdPMEZCUjNKQ0xFbEJRVWtzV1VGQldTeExRVUZhT3pzN096czdRVUZOU2l4VFFVRlRMRTlCUVZRc1EwRkJhVUlzVlVGQmFrSXNSVUZCTmtJc1QwRkJOMElzUlVGQmMwTTdRVUZEYkVNc1VVRkJUU3haUVVGWkxHdENRVUZSTEZsQlFWSXNSVUZCV2l4RFFVUTBRanRCUVVWc1F5eFJRVUZOTEd0Q1FVRnJRaXhWUVVGVkxFMUJRVllzUTBGR1ZUczdRVUZKYkVNc1UwRkJTeXhKUVVGSkxFbEJRVWtzUTBGQlNpeEZRVUZQTEVsQlFVa3NXVUZCU2l4RlFVRnJRaXhIUVVGc1F5eEZRVUYxUXp0QlFVTnVReXhaUVVGTkxFOUJRVThzWTBGQll5eERRVUZrTEVOQlFWQXNRMEZFTmtJN08wRkJSMjVETEdGQlFVc3NTVUZCU1N4TFFVRkxMRU5CUVV3c1JVRkJVU3hMUVVGTExHVkJRVXdzUlVGQmMwSXNTVUZCZGtNc1JVRkJOa003UVVGRGVrTXNaMEpCUVUwc1QwRkJUeXhyUWtGQlVTeFhRVUZTTEVOQlFXOUNMRlZCUVZVc1JVRkJWaXhEUVVGd1FpeERRVUZRTEVOQlJHMURPMEZCUlhwRExHZENRVUZKTEZOQlFWTXNTMEZCVkRzN08wRkJSbkZETEdkQ1FVdHlReXhSUVVGUkxFdEJRVXNzUzBGQlN5eEpRVUZNTEVOQlFXSXNTMEZCTkVJc1EwRkJReXhMUVVGTExGRkJRVXdzU1VGQmEwSXNTMEZCU3l4UlFVRk1MRWxCUVdsQ0xFdEJRVXNzWjBKQlFVd3NTMEZCTUVJc1NVRkJNVUlzUTBGQmFFVXNSVUZCYTBjN1FVRkRiRWNzZVVKQlFWTXNTMEZCU3l4TFFVRkxMRWxCUVV3c1EwRkJUQ3hEUVVGblFpeEpRVUZvUWl4RFFVRnhRaXhKUVVGeVFpeEZRVUV5UWl4SlFVRXpRaXhGUVVGcFF5eFZRVUZxUXl4RlFVRTJReXhQUVVFM1F5eERRVUZVTEVOQlJHdEhPMkZCUVhSSE96czdRVUZNZVVNc1owSkJWWEpETEV0QlFVc3NXVUZCVEN4RlFVRnRRanRCUVVOdVFpeHhRa0ZCU3l4blFrRkJUQ3hIUVVGM1FpeEpRVUZETEVOQlFVc3NTMEZCU3l4SlFVRk1MRU5CUVV3c1NVRkJiVUlzVjBGQlZ5eEpRVUZZTEVkQlFXMUNMRXRCUVhaRExFZEJRU3RETEVsQlFTOURMRU5CUkV3N1lVRkJka0k3VTBGV1NqdExRVWhLT3p0QlFXMUNRU3hYUVVGUExHdENRVUZSTERSQ1FVRlNMRVZCUVZBc1EwRjJRbXRETzBOQlFYUkRPenM3UVVFeVFrRXNVMEZCVXl4TFFVRlVMRU5CUVdVc1ZVRkJaaXhGUVVFeVFqdEJRVU4yUWl4dlFrRkJUU3hOUVVGT0xFTkJRV0VzVlVGQllpeEZRVVIxUWp0QlFVVjJRaXhuUWtGQldTeFJRVUZSTEZWQlFWSXNSVUZCYjBJc1owSkJRVTBzVlVGQlRpeEZRVUZ3UWl4RFFVRmFMRU5CUm5WQ096dEJRVWwyUWl4UlFVRkpMRk5CUVVvc1JVRkJaVHRCUVVOWUxEUkNRVUZMTEV0QlFVd3NSVUZFVnp0TFFVRm1PME5CU2tvN096dEJRVlZCTEZOQlFWTXNTMEZCVkN4SFFVRnBRanRCUVVOaUxGRkJRVWtzUTBGQlF5eFRRVUZFTEVWQlFWazdRVUZEV2l4M1FrRkJUU3hMUVVGT0xFZEJSRms3UVVGRldpeHZRa0ZCV1N4SlFVRmFMRU5CUmxrN1FVRkhXaXcwUWtGQlN5eExRVUZNTEVWQlNGazdTMEZCYUVJN1EwRkVTanM3TzBGQlUwOHNTVUZCVFN4blEwRkJXU3hyUWtGQlVTeFRRVUZTT3pzN096czdRVUZOYkVJc1UwRkJVeXhSUVVGVUxFTkJRV3RDTEVWQlFXeENMRVZCUVhOQ0xFbEJRWFJDTEVWQlFUUkNPMEZCUXk5Q0xITkNRVUZSTEZGQlFWSXNRMEZCYVVJc1JVRkJha0lzUlVGQmNVSXNTVUZCY2tJc1JVRkVLMEk3TzBGQlJ5OUNMRkZCUVVrc1EwRkJReXhUUVVGRUxFVkJRVms3UVVGRFdpeG5Ra0ZFV1R0TFFVRm9RanREUVVoSE96czdPenRCUVZkQkxFbEJRVTBzYTBOQlFXRXNhMEpCUVZFc1ZVRkJVaUlzSW1acGJHVWlPaUpzYjI5d0xtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaThxWEc0Z0lDQWdRMjl5WlNCeVpXNWtaWElnYkc5dmNGeHVYRzRnSUNBZ1UyOXRaU0JrWldOcFkybHpiMjV6SUdobGNtVWdhR0YyWlNCaVpXVnVJSFJoYTJWdUlHbHVJSFJvWlNCdVlXMWxJRzltSUhCbGNtWnZjbTFoYm1ObExpQkJiR3dnYUdGcGJDQndaWEptYjNKdFlXNWpaUzVjYmlBZ0lDQW9TWFFnZEhWeWJuTWdiM1YwSUcxcFkzSnZiM0IwYVcxcGMyRjBhVzl1Y3lCa2J5QnRZWFIwWlhJZ2QyaGxiaUI1YjNVZ2FHRjJaU0F4Tm0xektWeHVLaTljYm1sdGNHOXlkQ0IwYVcxbGNpQm1jbTl0SUNjdUwzUnBiV1Z5Snp0Y2JtbHRjRzl5ZENCMGFXTnJJR1p5YjIwZ0p5NHZkR2xqYXljN1hHNXBiWEJ2Y25RZ2JXRnVZV2RsY2lCbWNtOXRJQ2N1TDIxaGJtRm5aWEluTzF4dVhHNWpiMjV6ZENCMFlYTnJVM1JsY0U5eVpHVnlJRDBnVzF4dUlDQWdJSHNnYm1GdFpUb2dKMjl1Um5KaGJXVlRkR0Z5ZENjZ2ZTeGNiaUFnSUNCN0lHNWhiV1U2SUNkdmJsVndaR0YwWlNjZ2ZTeGNiaUFnSUNCN0lHNWhiV1U2SUNkM2FXeHNVbVZ1WkdWeUp5d2daR1ZqYVdSbFVtVnVaR1Z5T2lCMGNuVmxJSDBzWEc0Z0lDQWdleUJ1WVcxbE9pQW5iMjVRY21WU1pXNWtaWEluTENCcGMxSmxibVJsY2pvZ2RISjFaU0I5TEZ4dUlDQWdJSHNnYm1GdFpUb2dKMjl1VW1WdVpHVnlKeXdnYVhOU1pXNWtaWEk2SUhSeWRXVWdmU3hjYmlBZ0lDQjdJRzVoYldVNklDZHZibEJ2YzNSU1pXNWtaWEluTENCcGMxSmxibVJsY2pvZ2RISjFaU0I5TEZ4dUlDQWdJSHNnYm1GdFpUb2dKMjl1Um5KaGJXVkZibVFuSUgwc1hHNGdJQ0FnZXlCdVlXMWxPaUFuYjI1RGJHVmhiblZ3SnlCOVhHNWRPMXh1WTI5dWMzUWdiblZ0VkdGemExTjBaWEJ6SUQwZ2RHRnphMU4wWlhCUGNtUmxjaTVzWlc1bmRHZzdYRzVjYmk4dklGdGliMjlzWldGdVhUb2dTWE1nYkc5dmNDQnlkVzV1YVc1blAxeHViR1YwSUdselVuVnVibWx1WnlBOUlHWmhiSE5sTzF4dVhHNHZLbHh1SUNBZ0lGdDBhVzFsYzNSaGJYQmRPaUJHY21GdFpTQjBhVzFsYzNSaGJYQmNiaUFnSUNCYmFXNTBYVG9nVkdsdFpTQnphVzVqWlNCc1lYTjBJR1p5WVcxbFhHNHFMMXh1Wm5WdVkzUnBiMjRnWm1seVpVRnNiQ2htY21GdFpWTjBZVzF3TENCbGJHRndjMlZrS1NCN1hHNGdJQ0FnWTI5dWMzUWdZV04wYVhabFNXUnpJRDBnYldGdVlXZGxjaTVuWlhSQlkzUnBkbVZKWkhNb0tUdGNiaUFnSUNCamIyNXpkQ0JoWTNScGRtVlVZWE5yUTI5MWJuUWdQU0JoWTNScGRtVkpaSE11YkdWdVozUm9PMXh1WEc0Z0lDQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0J1ZFcxVVlYTnJVM1JsY0hNN0lHa3JLeWtnZTF4dUlDQWdJQ0FnSUNCamIyNXpkQ0J6ZEdWd0lEMGdkR0Z6YTFOMFpYQlBjbVJsY2x0cFhUdGNibHh1SUNBZ0lDQWdJQ0JtYjNJZ0tHeGxkQ0JwTWlBOUlEQTdJR2t5SUR3Z1lXTjBhWFpsVkdGemEwTnZkVzUwT3lCcE1pc3JLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCMFlYTnJJRDBnYldGdVlXZGxjaTVoWTNScGRtVlVZWE5yYzF0aFkzUnBkbVZKWkhOYmFUSmRYVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHeGxkQ0J5WlhOMWJIUWdQU0JtWVd4elpUdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdRMmhsWTJzZ2FXWWdkR2hwY3lCMFlYTnJJR2hoY3lCMGFHbHpJSE4wWlhBc0lHOXlJR2xtSUdsMEozTWdZU0J5Wlc1a1pYSWdjM1JsY0NCMGFHRjBJSGRsSjNKbElISmxibVJsY21sdVp5QjBhR2x6SUdaeVlXMWxYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9kR0Z6YXlBbUppQjBZWE5yVzNOMFpYQXVibUZ0WlYwZ0ppWWdLQ0Z6ZEdWd0xtbHpVbVZ1WkdWeUlIeDhJQ2h6ZEdWd0xtbHpVbVZ1WkdWeUlDWW1JSFJoYzJzdVgzSmxibVJsY2xSb2FYTkdjbUZ0WlNBOVBUMGdkSEoxWlNrcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVZ6ZFd4MElEMGdkR0Z6YTF0emRHVndMbTVoYldWZExtTmhiR3dvZEdGemF5d2dkR0Z6YXl3Z1puSmhiV1ZUZEdGdGNDd2daV3hoY0hObFpDazdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUM4dklFbG1JSFJvYVhNZ2FYTWdZU0JrWldOcFpHVWdjbVZ1WkdWeUlITjBaWEFnWVc1a0lHbDBJSEpsZEhWeWJuTWdZR1poYkhObFlDd2djMlYwSUhkcGJHeFNaVzVrWlhJZ2RHOGdabUZzYzJWY2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoemRHVndMbVJsWTJsa1pWSmxibVJsY2lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUmhjMnN1WDNKbGJtUmxjbFJvYVhOR2NtRnRaU0E5SUNoMFlYTnJXM04wWlhBdWJtRnRaVjBnSmlZZ2NtVnpkV3gwSUNFOVBTQjBjblZsS1NBL0lHWmhiSE5sSURvZ2RISjFaVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lISmxkSFZ5YmlCdFlXNWhaMlZ5TG1kbGRFNXZia0poWTJ0bmNtOTFibVJTZFc1dWFXNW5RMjkxYm5Rb0tUdGNibjFjYmx4dUx5OGdSblZ1WTNScGIyNGdkRzhnWm1seVpTQmxkbVZ5ZVNCbWNtRnRaVnh1Wm5WdVkzUnBiMjRnWm5KaGJXVW9abkpoYldWVGRHRnRjQ2tnZTF4dUlDQWdJSFJwYldWeUxuVndaR0YwWlNobWNtRnRaVk4wWVcxd0tUdGNiaUFnSUNCcGMxSjFibTVwYm1jZ1BTQm1hWEpsUVd4c0tHWnlZVzFsVTNSaGJYQXNJSFJwYldWeUxtZGxkRVZzWVhCelpXUW9LU2s3WEc1Y2JpQWdJQ0JwWmlBb2FYTlNkVzV1YVc1bktTQjdYRzRnSUNBZ0lDQWdJSFJwWTJzb1puSmhiV1VwTzF4dUlDQWdJSDFjYm4xY2JseHVMeThnVTNSaGNuUWdiRzl2Y0Z4dVpuVnVZM1JwYjI0Z2MzUmhjblFvS1NCN1hHNGdJQ0FnYVdZZ0tDRnBjMUoxYm01cGJtY3BJSHRjYmlBZ0lDQWdJQ0FnZEdsdFpYSXVjM1JoY25Rb0tUdGNiaUFnSUNBZ0lDQWdhWE5TZFc1dWFXNW5JRDBnZEhKMVpUdGNiaUFnSUNBZ0lDQWdkR2xqYXlobWNtRnRaU2s3WEc0Z0lDQWdmVnh1ZlZ4dVhHNHZMeUJGZUhCdmNuUnpYRzVsZUhCdmNuUWdZMjl1YzNRZ1oyVjBWR0Z6YTBsa0lEMGdiV0Z1WVdkbGNpNW5aWFJVWVhOclNXUTdYRzVjYmk4cVhHNGdJQ0FnVzJsdWRGMDZJSFJoYzJzZ1NVUWdkRzhnWVdOMGFYWmhkR1ZjYmlBZ0lDQmJkR0Z6YTEwNklIUmhjMnNnZEc4Z1lXTjBhWFpoZEdWY2Jpb3ZYRzVsZUhCdmNuUWdablZ1WTNScGIyNGdZV04wYVhaaGRHVW9hV1FzSUhSaGMyc3BJSHRjYmlBZ0lDQnRZVzVoWjJWeUxtRmpkR2wyWVhSbEtHbGtMQ0IwWVhOcktUdGNibHh1SUNBZ0lHbG1JQ2doYVhOU2RXNXVhVzVuS1NCN1hHNGdJQ0FnSUNBZ0lITjBZWEowS0NrN1hHNGdJQ0FnZlZ4dWZWeHVYRzR2S2x4dUlDQWdJRnRwYm5SZE9pQjBZWE5ySUVsRUlIUnZJR1JsWVdOMGFYWmhkR1ZjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnWkdWaFkzUnBkbUYwWlNBOUlHMWhibUZuWlhJdVpHVmhZM1JwZG1GMFpUc2lYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy90YXNrL2xvb3AuanNcbiAqKiBtb2R1bGUgaWQgPSAzOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIFRSQU5TTEFURSA9ICd0cmFuc2xhdGUnO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgeDogVFJBTlNMQVRFICsgJ1gnLFxuICAgIHk6IFRSQU5TTEFURSArICdZJyxcbiAgICB6OiBUUkFOU0xBVEUgKyAnWidcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwyTnpjeTl6ZEdGMFpTMXRZWEF1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN08wRkJRVUVzU1VGQlRTeFpRVUZaTEZkQlFWbzdPMnRDUVVWVE8wRkJRMWdzVDBGQlJ5eFpRVUZaTEVkQlFWbzdRVUZEU0N4UFFVRkhMRmxCUVZrc1IwRkJXanRCUVVOSUxFOUJRVWNzV1VGQldTeEhRVUZhSWl3aVptbHNaU0k2SW5OMFlYUmxMVzFoY0M1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRDOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SmpiMjV6ZENCVVVrRk9VMHhCVkVVZ1BTQW5kSEpoYm5Oc1lYUmxKenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnZTF4dUlDQWdJSGc2SUZSU1FVNVRURUZVUlNBcklDZFlKeXhjYmlBZ0lDQjVPaUJVVWtGT1UweEJWRVVnS3lBbldTY3NYRzRnSUNBZ2Vqb2dWRkpCVGxOTVFWUkZJQ3NnSjFvblhHNTlPeUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9jc3Mvc3RhdGUtbWFwLmpzXG4gKiogbW9kdWxlIGlkID0gNDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9hbmdsZSA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL2FuZ2xlJyk7XG5cbnZhciBfYW5nbGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYW5nbGUpO1xuXG52YXIgX2FscGhhID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvYWxwaGEnKTtcblxudmFyIF9hbHBoYTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hbHBoYSk7XG5cbnZhciBfY29sb3IgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9jb2xvcicpO1xuXG52YXIgX2NvbG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbG9yKTtcblxudmFyIF9zY2FsZSA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL3NjYWxlJyk7XG5cbnZhciBfc2NhbGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2NhbGUpO1xuXG52YXIgX3NoYWRvdyA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL3NoYWRvdycpO1xuXG52YXIgX3NoYWRvdzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaGFkb3cpO1xuXG52YXIgX3B4ID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvcHgnKTtcblxudmFyIF9weDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9weCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICAvLyBDb2xvciBwcm9wc1xuICAgIGNvbG9yOiBfY29sb3IyLmRlZmF1bHQsXG4gICAgYmFja2dyb3VuZENvbG9yOiBfY29sb3IyLmRlZmF1bHQsXG4gICAgb3V0bGluZUNvbG9yOiBfY29sb3IyLmRlZmF1bHQsXG4gICAgZmlsbDogX2NvbG9yMi5kZWZhdWx0LFxuICAgIHN0cm9rZTogX2NvbG9yMi5kZWZhdWx0LFxuXG4gICAgLy8gQm9yZGVyIHByb3BzXG4gICAgYm9yZGVyQ29sb3I6IF9jb2xvcjIuZGVmYXVsdCxcbiAgICBib3JkZXJUb3BDb2xvcjogX2NvbG9yMi5kZWZhdWx0LFxuICAgIGJvcmRlclJpZ2h0Q29sb3I6IF9jb2xvcjIuZGVmYXVsdCxcbiAgICBib3JkZXJCb3R0b21Db2xvcjogX2NvbG9yMi5kZWZhdWx0LFxuICAgIGJvcmRlckxlZnRDb2xvcjogX2NvbG9yMi5kZWZhdWx0LFxuICAgIGJvcmRlclJhZGl1czogX3B4Mi5kZWZhdWx0LFxuXG4gICAgLy8gUG9zaXRpb25pbmdcbiAgICB3aWR0aDogX3B4Mi5kZWZhdWx0LFxuICAgIGhlaWdodDogX3B4Mi5kZWZhdWx0LFxuXG4gICAgLy8gU2hhZG93c1xuICAgIHRleHRTaGFkb3c6IF9zaGFkb3cyLmRlZmF1bHQsXG4gICAgYm94U2hhZG93OiBfc2hhZG93Mi5kZWZhdWx0LFxuXG4gICAgLy8gVHJhbnNmb3JtIHByb3BlcnRpZXNcbiAgICByb3RhdGU6IF9hbmdsZTIuZGVmYXVsdCxcbiAgICByb3RhdGVYOiBfYW5nbGUyLmRlZmF1bHQsXG4gICAgcm90YXRlWTogX2FuZ2xlMi5kZWZhdWx0LFxuICAgIHJvdGF0ZVo6IF9hbmdsZTIuZGVmYXVsdCxcbiAgICBzY2FsZTogX3NjYWxlMi5kZWZhdWx0LFxuICAgIHNjYWxlWDogX3NjYWxlMi5kZWZhdWx0LFxuICAgIHNjYWxlWTogX3NjYWxlMi5kZWZhdWx0LFxuICAgIHNjYWxlWjogX3NjYWxlMi5kZWZhdWx0LFxuICAgIHNrZXdYOiBfYW5nbGUyLmRlZmF1bHQsXG4gICAgc2tld1k6IF9hbmdsZTIuZGVmYXVsdCxcbiAgICBkaXN0YW5jZTogX3B4Mi5kZWZhdWx0LFxuICAgIHRyYW5zbGF0ZVg6IF9weDIuZGVmYXVsdCxcbiAgICB0cmFuc2xhdGVZOiBfcHgyLmRlZmF1bHQsXG4gICAgdHJhbnNsYXRlWjogX3B4Mi5kZWZhdWx0LFxuICAgIHBlcnNwZWN0aXZlOiBfcHgyLmRlZmF1bHQsXG4gICAgb3BhY2l0eTogX2FscGhhMi5kZWZhdWx0XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMMk56Y3k5MllXeDFaUzEwZVhCbExXMWhjQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN08wRkJRVUU3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3TzBGQlEwRTdPenM3UVVGRFFUczdPenRCUVVOQk96czdPenM3YTBKQlJXVTdPMEZCUlZnc01FSkJSbGM3UVVGSFdDeHZRMEZJVnp0QlFVbFlMR2xEUVVwWE8wRkJTMWdzZVVKQlRGYzdRVUZOV0N3eVFrRk9WenM3TzBGQlUxZ3NaME5CVkZjN1FVRlZXQ3h0UTBGV1Z6dEJRVmRZTEhGRFFWaFhPMEZCV1Znc2MwTkJXbGM3UVVGaFdDeHZRMEZpVnp0QlFXTllMRGhDUVdSWE96czdRVUZwUWxnc2RVSkJha0pYTzBGQmEwSllMSGRDUVd4Q1Z6czdPMEZCY1VKWUxHZERRWEpDVnp0QlFYTkNXQ3dyUWtGMFFsYzdPenRCUVhsQ1dDd3lRa0Y2UWxjN1FVRXdRbGdzTkVKQk1VSlhPMEZCTWtKWUxEUkNRVE5DVnp0QlFUUkNXQ3cwUWtFMVFsYzdRVUUyUWxnc01FSkJOMEpYTzBGQk9FSllMREpDUVRsQ1Z6dEJRU3RDV0N3eVFrRXZRbGM3UVVGblExZ3NNa0pCYUVOWE8wRkJhVU5ZTERCQ1FXcERWenRCUVd0RFdDd3dRa0ZzUTFjN1FVRnRRMWdzTUVKQmJrTlhPMEZCYjBOWUxEUkNRWEJEVnp0QlFYRkRXQ3cwUWtGeVExYzdRVUZ6UTFnc05FSkJkRU5YTzBGQmRVTllMRFpDUVhaRFZ6dEJRWGREV0N3MFFrRjRRMWNpTENKbWFXeGxJam9pZG1Gc2RXVXRkSGx3WlMxdFlYQXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFF2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJR0Z1WjJ4bElHWnliMjBnSnk0dUx5NHVMM1poYkhWbExYUjVjR1Z6TDJGdVoyeGxKenRjYm1sdGNHOXlkQ0JoYkhCb1lTQm1jbTl0SUNjdUxpOHVMaTkyWVd4MVpTMTBlWEJsY3k5aGJIQm9ZU2M3WEc1cGJYQnZjblFnWTI5c2IzSWdabkp2YlNBbkxpNHZMaTR2ZG1Gc2RXVXRkSGx3WlhNdlkyOXNiM0luTzF4dWFXMXdiM0owSUhOallXeGxJR1p5YjIwZ0p5NHVMeTR1TDNaaGJIVmxMWFI1Y0dWekwzTmpZV3hsSnp0Y2JtbHRjRzl5ZENCemFHRmtiM2NnWm5KdmJTQW5MaTR2TGk0dmRtRnNkV1V0ZEhsd1pYTXZjMmhoWkc5M0p6dGNibWx0Y0c5eWRDQndlQ0JtY205dElDY3VMaTh1TGk5MllXeDFaUzEwZVhCbGN5OXdlQ2M3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUh0Y2JpQWdJQ0F2THlCRGIyeHZjaUJ3Y205d2MxeHVJQ0FnSUdOdmJHOXlPaUJqYjJ4dmNpeGNiaUFnSUNCaVlXTnJaM0p2ZFc1a1EyOXNiM0k2SUdOdmJHOXlMRnh1SUNBZ0lHOTFkR3hwYm1WRGIyeHZjam9nWTI5c2IzSXNYRzRnSUNBZ1ptbHNiRG9nWTI5c2IzSXNYRzRnSUNBZ2MzUnliMnRsT2lCamIyeHZjaXhjYmx4dUlDQWdJQzh2SUVKdmNtUmxjaUJ3Y205d2MxeHVJQ0FnSUdKdmNtUmxja052Ykc5eU9pQmpiMnh2Y2l4Y2JpQWdJQ0JpYjNKa1pYSlViM0JEYjJ4dmNqb2dZMjlzYjNJc1hHNGdJQ0FnWW05eVpHVnlVbWxuYUhSRGIyeHZjam9nWTI5c2IzSXNYRzRnSUNBZ1ltOXlaR1Z5UW05MGRHOXRRMjlzYjNJNklHTnZiRzl5TEZ4dUlDQWdJR0p2Y21SbGNreGxablJEYjJ4dmNqb2dZMjlzYjNJc1hHNGdJQ0FnWW05eVpHVnlVbUZrYVhWek9pQndlQ3hjYmx4dUlDQWdJQzh2SUZCdmMybDBhVzl1YVc1blhHNGdJQ0FnZDJsa2RHZzZJSEI0TEZ4dUlDQWdJR2hsYVdkb2REb2djSGdzWEc1Y2JpQWdJQ0F2THlCVGFHRmtiM2R6WEc0Z0lDQWdkR1Y0ZEZOb1lXUnZkem9nYzJoaFpHOTNMRnh1SUNBZ0lHSnZlRk5vWVdSdmR6b2djMmhoWkc5M0xDQWdJRnh1WEc0Z0lDQWdMeThnVkhKaGJuTm1iM0p0SUhCeWIzQmxjblJwWlhOY2JpQWdJQ0J5YjNSaGRHVTZJR0Z1WjJ4bExGeHVJQ0FnSUhKdmRHRjBaVmc2SUdGdVoyeGxMRnh1SUNBZ0lISnZkR0YwWlZrNklHRnVaMnhsTEZ4dUlDQWdJSEp2ZEdGMFpWbzZJR0Z1WjJ4bExGeHVJQ0FnSUhOallXeGxPaUJ6WTJGc1pTeGNiaUFnSUNCelkyRnNaVmc2SUhOallXeGxMRnh1SUNBZ0lITmpZV3hsV1RvZ2MyTmhiR1VzWEc0Z0lDQWdjMk5oYkdWYU9pQnpZMkZzWlN4Y2JpQWdJQ0J6YTJWM1dEb2dZVzVuYkdVc1hHNGdJQ0FnYzJ0bGQxazZJR0Z1WjJ4bExGeHVJQ0FnSUdScGMzUmhibU5sT2lCd2VDeGNiaUFnSUNCMGNtRnVjMnhoZEdWWU9pQndlQ3hjYmlBZ0lDQjBjbUZ1YzJ4aGRHVlpPaUJ3ZUN4Y2JpQWdJQ0IwY21GdWMyeGhkR1ZhT2lCd2VDeGNiaUFnSUNCd1pYSnpjR1ZqZEdsMlpUb2djSGdzWEc0Z0lDQWdiM0JoWTJsMGVUb2dZV3h3YUdGY2JuMDdJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hZGFwdGVyL2Nzcy92YWx1ZS10eXBlLW1hcC5qc1xuICoqIG1vZHVsZSBpZCA9IDQxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdHJhbnNmb3JtUHJvcHMgPSByZXF1aXJlKCcuL3RyYW5zZm9ybS1wcm9wcycpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zZm9ybVByb3BzKTtcblxudmFyIF9wcmVmaXhlciA9IHJlcXVpcmUoJy4vcHJlZml4ZXInKTtcblxudmFyIF9wcmVmaXhlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmVmaXhlcik7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi8uLi9pbmMvdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIFRSQU5TTEFURV9aID0gJ3RyYW5zbGF0ZVonO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoc3RhdGUsIGRpc2FibGVIYXJkd2FyZUFjY2VsZXJhdGlvbikge1xuICAgIHZhciBwcm9wZXJ0eVN0cmluZyA9ICcnO1xuICAgIHZhciB0cmFuc2Zvcm1TdHJpbmcgPSAnJztcbiAgICB2YXIgdHJhbnNmb3JtSGFzWiA9IGZhbHNlO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHN0YXRlKSB7XG4gICAgICAgIGlmIChzdGF0ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBzdGF0ZVtrZXldO1xuXG4gICAgICAgICAgICBpZiAoX3RyYW5zZm9ybVByb3BzMi5kZWZhdWx0W2tleV0pIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1TdHJpbmcgKz0ga2V5ICsgJygnICsgdmFsdWUgKyAnKSAnO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybUhhc1ogPSBrZXkgPT09IFRSQU5TTEFURV9aID8gdHJ1ZSA6IHRyYW5zZm9ybUhhc1o7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHByb3BlcnR5U3RyaW5nICs9ICc7JyArICgwLCBfcHJlZml4ZXIyLmRlZmF1bHQpKCgwLCBfdXRpbHMuY2FtZWxUb0Rhc2gpKGtleSkpICsgJzonICsgdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHJhbnNmb3JtU3RyaW5nICE9PSAnJykge1xuICAgICAgICBpZiAoIXRyYW5zZm9ybUhhc1ogJiYgIWRpc2FibGVIYXJkd2FyZUFjY2VsZXJhdGlvbikge1xuICAgICAgICAgICAgdHJhbnNmb3JtU3RyaW5nICs9IFRSQU5TTEFURV9aICsgJygwcHgpJztcbiAgICAgICAgfVxuXG4gICAgICAgIHByb3BlcnR5U3RyaW5nICs9ICc7JyArICgwLCBfcHJlZml4ZXIyLmRlZmF1bHQpKCd0cmFuc2Zvcm0nKSArICc6JyArIHRyYW5zZm9ybVN0cmluZztcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydHlTdHJpbmc7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMMk56Y3k5aWRXbHNaQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN08wRkJRVUU3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3TzBGQlJVRXNTVUZCVFN4alFVRmpMRmxCUVdRN08ydENRVVZUTEZWQlFVTXNTMEZCUkN4RlFVRlJMREpDUVVGU0xFVkJRWGRETzBGQlEyNUVMRkZCUVVrc2FVSkJRV2xDTEVWQlFXcENMRU5CUkN0RE8wRkJSVzVFTEZGQlFVa3NhMEpCUVd0Q0xFVkJRV3hDTEVOQlJpdERPMEZCUjI1RUxGRkJRVWtzWjBKQlFXZENMRXRCUVdoQ0xFTkJTQ3RET3p0QlFVdHVSQ3hUUVVGTExFbEJRVWtzUjBGQlNpeEpRVUZYTEV0QlFXaENMRVZCUVhWQ08wRkJRMjVDTEZsQlFVa3NUVUZCVFN4alFVRk9MRU5CUVhGQ0xFZEJRWEpDTEVOQlFVb3NSVUZCSzBJN1FVRkRNMElzWjBKQlFVMHNVVUZCVVN4TlFVRk5MRWRCUVU0c1EwRkJVaXhEUVVSeFFqczdRVUZITTBJc1owSkJRVWtzZVVKQlFXVXNSMEZCWml4RFFVRktMRVZCUVhsQ08wRkJRM0pDTEcxRFFVRnRRaXhOUVVGTkxFZEJRVTRzUjBGQldTeExRVUZhTEVkQlFXOUNMRWxCUVhCQ0xFTkJSRVU3UVVGRmNrSXNaME5CUVdkQ0xFZEJRVU1zUzBGQlVTeFhRVUZTTEVkQlFYVkNMRWxCUVhoQ0xFZEJRU3RDTEdGQlFTOUNMRU5CUmtzN1lVRkJla0lzVFVGSlR6dEJRVU5JTEd0RFFVRnJRaXhOUVVGTkxIZENRVUZUTEhkQ1FVRlpMRWRCUVZvc1EwRkJWQ3hEUVVGT0xFZEJRVzFETEVkQlFXNURMRWRCUVhsRExFdEJRWHBETEVOQlJHWTdZVUZLVUR0VFFVaEtPMHRCUkVvN08wRkJZMEVzVVVGQlNTeHZRa0ZCYjBJc1JVRkJjRUlzUlVGQmQwSTdRVUZEZUVJc1dVRkJTU3hEUVVGRExHRkJRVVFzU1VGQmEwSXNRMEZCUXl3eVFrRkJSQ3hGUVVFNFFqdEJRVU5vUkN3clFrRkJiVUlzWTBGQll5eFBRVUZrTEVOQlJEWkNPMU5CUVhCRU96dEJRVWxCTERCQ1FVRnJRaXhOUVVGTkxIZENRVUZUTEZkQlFWUXNRMEZCVGl4SFFVRTRRaXhIUVVFNVFpeEhRVUZ2UXl4bFFVRndReXhEUVV4Tk8wdEJRVFZDT3p0QlFWRkJMRmRCUVU4c1kwRkJVQ3hEUVROQ2JVUTdRMEZCZUVNaUxDSm1hV3hsSWpvaVluVnBiR1F1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhSeVlXNXpabTl5YlZCeWIzQnpJR1p5YjIwZ0p5NHZkSEpoYm5ObWIzSnRMWEJ5YjNCekp6dGNibWx0Y0c5eWRDQndjbVZtYVhobGNpQm1jbTl0SUNjdUwzQnlaV1pwZUdWeUp6dGNibWx0Y0c5eWRDQjdJR05oYldWc1ZHOUVZWE5vSUgwZ1puSnZiU0FuTGk0dkxpNHZhVzVqTDNWMGFXeHpKenRjYmx4dVkyOXVjM1FnVkZKQlRsTk1RVlJGWDFvZ1BTQW5kSEpoYm5Oc1lYUmxXaWM3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUNoemRHRjBaU3dnWkdsellXSnNaVWhoY21SM1lYSmxRV05qWld4bGNtRjBhVzl1S1NBOVBpQjdYRzRnSUNBZ2JHVjBJSEJ5YjNCbGNuUjVVM1J5YVc1bklEMGdKeWM3WEc0Z0lDQWdiR1YwSUhSeVlXNXpabTl5YlZOMGNtbHVaeUE5SUNjbk8xeHVJQ0FnSUd4bGRDQjBjbUZ1YzJadmNtMUlZWE5hSUQwZ1ptRnNjMlU3WEc1Y2JpQWdJQ0JtYjNJZ0tHeGxkQ0JyWlhrZ2FXNGdjM1JoZEdVcElIdGNiaUFnSUNBZ0lDQWdhV1lnS0hOMFlYUmxMbWhoYzA5M2JsQnliM0JsY25SNUtHdGxlU2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElIWmhiSFZsSUQwZ2MzUmhkR1ZiYTJWNVhUdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFJ5WVc1elptOXliVkJ5YjNCelcydGxlVjBwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGNtRnVjMlp2Y20xVGRISnBibWNnS3owZ2EyVjVJQ3NnSnlnbklDc2dkbUZzZFdVZ0t5QW5LU0FuTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSeVlXNXpabTl5YlVoaGMxb2dQU0FvYTJWNUlEMDlQU0JVVWtGT1UweEJWRVZmV2lrZ1B5QjBjblZsSURvZ2RISmhibk5tYjNKdFNHRnpXanRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQndjbTl3WlhKMGVWTjBjbWx1WnlBclBTQW5PeWNnS3lCd2NtVm1hWGhsY2loallXMWxiRlJ2UkdGemFDaHJaWGtwS1NBcklDYzZKeUFySUhaaGJIVmxPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2FXWWdLSFJ5WVc1elptOXliVk4wY21sdVp5QWhQVDBnSnljcElIdGNiaUFnSUNBZ0lDQWdhV1lnS0NGMGNtRnVjMlp2Y20xSVlYTmFJQ1ltSUNGa2FYTmhZbXhsU0dGeVpIZGhjbVZCWTJObGJHVnlZWFJwYjI0cElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSeVlXNXpabTl5YlZOMGNtbHVaeUFyUFNCVVVrRk9VMHhCVkVWZldpQXJJQ2NvTUhCNEtTYzdYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCd2NtOXdaWEowZVZOMGNtbHVaeUFyUFNBbk95Y2dLeUJ3Y21WbWFYaGxjaWduZEhKaGJuTm1iM0p0SnlrZ0t5QW5PaWNnS3lCMGNtRnVjMlp2Y20xVGRISnBibWM3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjbVYwZFhKdUlIQnliM0JsY25SNVUzUnlhVzVuTzF4dWZUc2lYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hZGFwdGVyL2Nzcy9idWlsZC5qc1xuICoqIG1vZHVsZSBpZCA9IDQyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgY2FjaGUgPSB7fTtcbnZhciBwcmVmaXhlcyA9IFsnV2Via2l0JywgJ01veicsICdPJywgJ21zJywgJyddO1xudmFyIG51bVByZWZpeGVzID0gcHJlZml4ZXMubGVuZ3RoO1xudmFyIHRlc3RFbGVtZW50ID0gdm9pZCAwO1xuXG4vKlxuICAgIFRlc3Qgc3R5bGUgcHJvcGVydHkgZm9yIHByZWZpeGVkIHZlcnNpb25cbiAgICBcbiAgICBAcGFyYW0gW3N0cmluZ106IFN0eWxlIHByb3BlcnR5XG4gICAgQHJldHVybiBbc3RyaW5nXTogQ2FjaGVkIHByb3BlcnR5IG5hbWVcbiovXG52YXIgdGVzdFByZWZpeCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICB0ZXN0RWxlbWVudCA9IHRlc3RFbGVtZW50IHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgaWYgKGNhY2hlW2tleV0gPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjYWNoZVtrZXldID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1QcmVmaXhlczsgaSsrKSB7XG4gICAgICAgIHZhciBwcmVmaXggPSBwcmVmaXhlc1tpXSxcbiAgICAgICAgICAgIHByZWZpeGVkID0gcHJlZml4ID09PSAnJyA/IGtleSA6IHByZWZpeCArIGtleS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGtleS5zbGljZSgxKTtcblxuICAgICAgICBpZiAocHJlZml4ZWQgaW4gdGVzdEVsZW1lbnQuc3R5bGUpIHtcbiAgICAgICAgICAgIGNhY2hlW2tleV0gPSBwcmVmaXhlZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjYWNoZVtrZXldO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBjYWNoZVtrZXldIHx8IHRlc3RQcmVmaXgoa2V5KTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwyTnpjeTl3Y21WbWFYaGxjaTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN1FVRkJRU3hKUVVGTkxGRkJRVkVzUlVGQlVqdEJRVU5PTEVsQlFVMHNWMEZCVnl4RFFVRkRMRkZCUVVRc1JVRkJWU3hMUVVGV0xFVkJRV2RDTEVkQlFXaENMRVZCUVc5Q0xFbEJRWEJDTEVWQlFUQkNMRVZCUVRGQ0xFTkJRVmc3UVVGRFRpeEpRVUZOTEdOQlFXTXNVMEZCVXl4TlFVRlVPMEZCUTNCQ0xFbEJRVWtzYjBKQlFVbzdPenM3T3pzN08wRkJVVUVzU1VGQlRTeGhRVUZoTEZWQlFVTXNSMEZCUkN4RlFVRlRPMEZCUTNoQ0xHdENRVUZqTEdWQlFXVXNVMEZCVXl4aFFVRlVMRU5CUVhWQ0xFdEJRWFpDTEVOQlFXWXNRMEZFVlRzN1FVRkhlRUlzVVVGQlNTeE5RVUZOTEVkQlFVNHNUVUZCWlN4TFFVRm1MRVZCUVhOQ08wRkJRM1JDTEdWQlFVOHNTMEZCVUN4RFFVUnpRanRMUVVFeFFpeE5RVVZQTzBGQlEwZ3NZMEZCVFN4SFFVRk9MRWxCUVdFc1MwRkJZaXhEUVVSSE8wdEJSbEE3TzBGQlRVRXNVMEZCU3l4SlFVRkpMRWxCUVVrc1EwRkJTaXhGUVVGUExFbEJRVWtzVjBGQlNpeEZRVUZwUWl4SFFVRnFReXhGUVVGelF6dEJRVU5zUXl4WlFVRkpMRk5CUVZNc1UwRkJVeXhEUVVGVUxFTkJRVlE3V1VGRFFTeFhRVUZYTEUxQlFVTXNTMEZCVnl4RlFVRllMRWRCUVdsQ0xFZEJRV3hDTEVkQlFYZENMRk5CUVZNc1NVRkJTU3hOUVVGS0xFTkJRVmNzUTBGQldDeEZRVUZqTEZkQlFXUXNSVUZCVkN4SFFVRjFReXhKUVVGSkxFdEJRVW9zUTBGQlZTeERRVUZXTEVOQlFYWkRMRU5CUmt3N08wRkJTV3hETEZsQlFVa3NXVUZCV1N4WlFVRlpMRXRCUVZvc1JVRkJiVUk3UVVGREwwSXNhMEpCUVUwc1IwRkJUaXhKUVVGaExGRkJRV0lzUTBGRUswSTdVMEZCYmtNN1MwRktTanM3UVVGVFFTeFhRVUZQTEUxQlFVMHNSMEZCVGl4RFFVRlFMRU5CYkVKM1FqdERRVUZVT3p0clFrRnhRa29zVlVGQlF5eEhRVUZFTzFkQlFWTXNUVUZCVFN4SFFVRk9MRXRCUVdNc1YwRkJWeXhIUVVGWUxFTkJRV1E3UTBGQlZDSXNJbVpwYkdVaU9pSndjbVZtYVhobGNpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpqYjI1emRDQmpZV05vWlNBOUlIdDlPMXh1WTI5dWMzUWdjSEpsWm1sNFpYTWdQU0JiSjFkbFltdHBkQ2NzSjAxdmVpY3NKMDhuTENkdGN5Y3NJQ2NuWFR0Y2JtTnZibk4wSUc1MWJWQnlaV1pwZUdWeklEMGdjSEpsWm1sNFpYTXViR1Z1WjNSb08xeHViR1YwSUhSbGMzUkZiR1Z0Wlc1ME8xeHVYRzR2S2x4dUlDQWdJRlJsYzNRZ2MzUjViR1VnY0hKdmNHVnlkSGtnWm05eUlIQnlaV1pwZUdWa0lIWmxjbk5wYjI1Y2JpQWdJQ0JjYmlBZ0lDQkFjR0Z5WVcwZ1czTjBjbWx1WjEwNklGTjBlV3hsSUhCeWIzQmxjblI1WEc0Z0lDQWdRSEpsZEhWeWJpQmJjM1J5YVc1blhUb2dRMkZqYUdWa0lIQnliM0JsY25SNUlHNWhiV1ZjYmlvdlhHNWpiMjV6ZENCMFpYTjBVSEpsWm1sNElEMGdLR3RsZVNrZ1BUNGdlMXh1SUNBZ0lIUmxjM1JGYkdWdFpXNTBJRDBnZEdWemRFVnNaVzFsYm5RZ2ZId2daRzlqZFcxbGJuUXVZM0psWVhSbFJXeGxiV1Z1ZENnblpHbDJKeWs3WEc1Y2JpQWdJQ0JwWmlBb1kyRmphR1ZiYTJWNVhTQTlQVDBnWm1Gc2MyVXBJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR1poYkhObE8xeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUdOaFkyaGxXMnRsZVYwZ1BTQm1ZV3h6WlR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JtYjNJZ0tIWmhjaUJwSUQwZ01Ec2dhU0E4SUc1MWJWQnlaV1pwZUdWek95QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ2RtRnlJSEJ5WldacGVDQTlJSEJ5WldacGVHVnpXMmxkTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdjSEpsWm1sNFpXUWdQU0FvY0hKbFptbDRJRDA5UFNBbkp5a2dQeUJyWlhrZ09pQndjbVZtYVhnZ0t5QnJaWGt1WTJoaGNrRjBLREFwTG5SdlZYQndaWEpEWVhObEtDa2dLeUJyWlhrdWMyeHBZMlVvTVNrN1hHNWNiaUFnSUNBZ0lDQWdhV1lnS0hCeVpXWnBlR1ZrSUdsdUlIUmxjM1JGYkdWdFpXNTBMbk4wZVd4bEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCallXTm9aVnRyWlhsZElEMGdjSEpsWm1sNFpXUTdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzRnSUNBZ1hHNGdJQ0FnY21WMGRYSnVJR05oWTJobFcydGxlVjA3WEc1OU8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQW9hMlY1S1NBOVBpQmpZV05vWlZ0clpYbGRJSHg4SUhSbGMzUlFjbVZtYVhnb2EyVjVLVHNpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9jc3MvcHJlZml4ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA0M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2RpY3Rpb25hcnkgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9zZXR0aW5ncy9kaWN0aW9uYXJ5Jyk7XG5cbnZhciB0cmFuc2Zvcm1Qcm9wcyA9IHt9O1xuXG52YXIgU0NBTEUgPSAnc2NhbGUnO1xudmFyIFJPVEFURSA9ICdyb3RhdGUnO1xudmFyIFRSQU5TRk9STV9QRVJTUEVDVElWRSA9ICd0cmFuc2Zvcm1QZXJzcGVjdGl2ZSc7XG52YXIgVEVSTVMgPSBbJ3RyYW5zbGF0ZScsIFNDQUxFLCBST1RBVEUsICdza2V3JywgVFJBTlNGT1JNX1BFUlNQRUNUSVZFXTtcblxudHJhbnNmb3JtUHJvcHNbUk9UQVRFXSA9IHRyYW5zZm9ybVByb3BzW1NDQUxFXSA9IHRyYW5zZm9ybVByb3BzW1RSQU5TRk9STV9QRVJTUEVDVElWRV0gPSB0cnVlO1xuXG5URVJNUy5mb3JFYWNoKGZ1bmN0aW9uICh0ZXJtKSB7XG4gIHJldHVybiBfZGljdGlvbmFyeS5heGVzLmZvckVhY2goZnVuY3Rpb24gKGF4aXMpIHtcbiAgICByZXR1cm4gdHJhbnNmb3JtUHJvcHNbdGVybSArIGF4aXNdID0gdHJ1ZTtcbiAgfSk7XG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gdHJhbnNmb3JtUHJvcHM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwyTnpjeTkwY21GdWMyWnZjbTB0Y0hKdmNITXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0QlFVRkJPenRCUVVWQkxFbEJRVWtzYVVKQlFXbENMRVZCUVdwQ096dEJRVVZLTEVsQlFVMHNVVUZCVVN4UFFVRlNPMEZCUTA0c1NVRkJUU3hUUVVGVExGRkJRVlE3UVVGRFRpeEpRVUZOTEhkQ1FVRjNRaXh6UWtGQmVFSTdRVUZEVGl4SlFVRk5MRkZCUVZFc1EwRkJReXhYUVVGRUxFVkJRV01zUzBGQlpDeEZRVUZ4UWl4TlFVRnlRaXhGUVVFMlFpeE5RVUUzUWl4RlFVRnhReXh4UWtGQmNrTXNRMEZCVWpzN1FVRkZUaXhsUVVGbExFMUJRV1lzU1VGQmVVSXNaVUZCWlN4TFFVRm1MRWxCUVhkQ0xHVkJRV1VzY1VKQlFXWXNTVUZCZDBNc1NVRkJlRU03TzBGQlJXcEVMRTFCUVUwc1QwRkJUaXhEUVVGakxGVkJRVU1zU1VGQlJEdFRRVUZWTEdsQ1FVRkxMRTlCUVV3c1EwRkJZU3hWUVVGRExFbEJRVVE3VjBGQlZTeGxRVUZsTEU5QlFVOHNTVUZCVUN4RFFVRm1MRWRCUVRoQ0xFbEJRVGxDTzBkQlFWWTdRMEZCZGtJc1EwRkJaRHM3YTBKQlJXVWlMQ0ptYVd4bElqb2lkSEpoYm5ObWIzSnRMWEJ5YjNCekxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQjdJR0Y0WlhNZ2ZTQm1jbTl0SUNjdUxpOHVMaTkyWVd4MVpTMTBlWEJsY3k5elpYUjBhVzVuY3k5a2FXTjBhVzl1WVhKNUp6dGNibHh1YkdWMElIUnlZVzV6Wm05eWJWQnliM0J6SUQwZ2UzMDdYRzVjYm1OdmJuTjBJRk5EUVV4RklEMGdKM05qWVd4bEp6dGNibU52Ym5OMElGSlBWRUZVUlNBOUlDZHliM1JoZEdVbk8xeHVZMjl1YzNRZ1ZGSkJUbE5HVDFKTlgxQkZVbE5RUlVOVVNWWkZJRDBnSjNSeVlXNXpabTl5YlZCbGNuTndaV04wYVhabEp6dGNibU52Ym5OMElGUkZVazFUSUQwZ1d5ZDBjbUZ1YzJ4aGRHVW5MQ0JUUTBGTVJTd2dVazlVUVZSRkxDQW5jMnRsZHljc0lGUlNRVTVUUms5U1RWOVFSVkpUVUVWRFZFbFdSVjA3WEc1Y2JuUnlZVzV6Wm05eWJWQnliM0J6VzFKUFZFRlVSVjBnUFNCMGNtRnVjMlp2Y20xUWNtOXdjMXRUUTBGTVJWMGdQU0IwY21GdWMyWnZjbTFRY205d2MxdFVVa0ZPVTBaUFVrMWZVRVZTVTFCRlExUkpWa1ZkSUQwZ2RISjFaVHRjYmx4dVZFVlNUVk11Wm05eVJXRmphQ2dvZEdWeWJTa2dQVDRnWVhobGN5NW1iM0pGWVdOb0tDaGhlR2x6S1NBOVBpQjBjbUZ1YzJadmNtMVFjbTl3YzF0MFpYSnRJQ3NnWVhocGMxMGdQU0IwY25WbEtTazdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJSFJ5WVc1elptOXliVkJ5YjNCek95SmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hZGFwdGVyL2Nzcy90cmFuc2Zvcm0tcHJvcHMuanNcbiAqKiBtb2R1bGUgaWQgPSA0NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2FscGhhID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvYWxwaGEnKTtcblxudmFyIF9hbHBoYTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hbHBoYSk7XG5cbnZhciBfY29sb3IgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9jb2xvcicpO1xuXG52YXIgX2NvbG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbG9yKTtcblxudmFyIF9jb21wbGV4ID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvY29tcGxleCcpO1xuXG52YXIgX2NvbXBsZXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcGxleCk7XG5cbnZhciBfc2NhbGUgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9zY2FsZScpO1xuXG52YXIgX3NjYWxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NjYWxlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGZpbGw6IF9jb2xvcjIuZGVmYXVsdCxcbiAgICBzdHJva2U6IF9jb2xvcjIuZGVmYXVsdCxcbiAgICBzY2FsZTogX3NjYWxlMi5kZWZhdWx0LFxuICAgIHNjYWxlWDogX3NjYWxlMi5kZWZhdWx0LFxuICAgIHNjYWxlWTogX3NjYWxlMi5kZWZhdWx0LFxuICAgIGQ6IF9jb21wbGV4Mi5kZWZhdWx0LFxuICAgIHBvaW50czogX2NvbXBsZXgyLmRlZmF1bHQsXG4gICAgb3BhY2l0eTogX2FscGhhMi5kZWZhdWx0LFxuICAgIGZpbGxPcGFjaXR5OiBfYWxwaGEyLmRlZmF1bHQsXG4gICAgc3Ryb2tlT3BhY2l0eTogX2FscGhhMi5kZWZhdWx0XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMM04yWnk5MllXeDFaUzEwZVhCbExXMWhjQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN08wRkJRVUU3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3TzBGQlEwRTdPenM3T3p0clFrRkZaVHRCUVVOWUxIbENRVVJYTzBGQlJWZ3NNa0pCUmxjN1FVRkhXQ3d3UWtGSVZ6dEJRVWxZTERKQ1FVcFhPMEZCUzFnc01rSkJURmM3UVVGTldDeDNRa0ZPVnp0QlFVOVlMRFpDUVZCWE8wRkJVVmdzTkVKQlVsYzdRVUZUV0N4blEwRlVWenRCUVZWWUxHdERRVlpYSWl3aVptbHNaU0k2SW5aaGJIVmxMWFI1Y0dVdGJXRndMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwTDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0JoYkhCb1lTQm1jbTl0SUNjdUxpOHVMaTkyWVd4MVpTMTBlWEJsY3k5aGJIQm9ZU2M3WEc1cGJYQnZjblFnWTI5c2IzSWdabkp2YlNBbkxpNHZMaTR2ZG1Gc2RXVXRkSGx3WlhNdlkyOXNiM0luTzF4dWFXMXdiM0owSUdOdmJYQnNaWGdnWm5KdmJTQW5MaTR2TGk0dmRtRnNkV1V0ZEhsd1pYTXZZMjl0Y0d4bGVDYzdYRzVwYlhCdmNuUWdjMk5oYkdVZ1puSnZiU0FuTGk0dkxpNHZkbUZzZFdVdGRIbHdaWE12YzJOaGJHVW5PMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0I3WEc0Z0lDQWdabWxzYkRvZ1kyOXNiM0lzWEc0Z0lDQWdjM1J5YjJ0bE9pQmpiMnh2Y2l4Y2JpQWdJQ0J6WTJGc1pUb2djMk5oYkdVc1hHNGdJQ0FnYzJOaGJHVllPaUJ6WTJGc1pTeGNiaUFnSUNCelkyRnNaVms2SUhOallXeGxMRnh1SUNBZ0lHUTZJR052YlhCc1pYZ3NYRzRnSUNBZ2NHOXBiblJ6T2lCamIyMXdiR1Y0TEZ4dUlDQWdJRzl3WVdOcGRIazZJR0ZzY0doaExGeHVJQ0FnSUdacGJHeFBjR0ZqYVhSNU9pQmhiSEJvWVN4Y2JpQWdJQ0J6ZEhKdmEyVlBjR0ZqYVhSNU9pQmhiSEJvWVZ4dWZUc2lYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hZGFwdGVyL3N2Zy92YWx1ZS10eXBlLW1hcC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBidWlsZDtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uLy4uL2luYy91dGlscycpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzID0gcmVxdWlyZSgnLi4vY3NzL3RyYW5zZm9ybS1wcm9wcycpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zZm9ybVByb3BzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIFpFUk9fTk9UX1pFUk8gPSAwLjAwMDE7XG5cbmZ1bmN0aW9uIGJ1aWxkKHN0YXRlLCBkYXRhKSB7XG4gICAgdmFyIGhhc1RyYW5zZm9ybSA9IGZhbHNlO1xuICAgIHZhciBwcm9wcyA9IHt9O1xuICAgIHZhciBzY2FsZSA9IHN0YXRlLnNjYWxlICE9PSB1bmRlZmluZWQgPyBzdGF0ZS5zY2FsZSB8fCBaRVJPX05PVF9aRVJPIDogc3RhdGUuc2NhbGVYIHx8IDE7XG4gICAgdmFyIHNjYWxlWSA9IHN0YXRlLnNjYWxlWSAhPT0gdW5kZWZpbmVkID8gc3RhdGUuc2NhbGVZIHx8IFpFUk9fTk9UX1pFUk8gOiBzY2FsZSB8fCAxO1xuICAgIHZhciB0cmFuc2Zvcm1PcmlnaW5YID0gZGF0YS53aWR0aCAqICgoc3RhdGUub3JpZ2luWCB8fCA1MCkgLyAxMDApICsgZGF0YS54O1xuICAgIHZhciB0cmFuc2Zvcm1PcmlnaW5ZID0gZGF0YS5oZWlnaHQgKiAoKHN0YXRlLm9yaWdpblkgfHwgNTApIC8gMTAwKSArIGRhdGEueTtcbiAgICB2YXIgc2NhbGVUcmFuc2Zvcm1YID0gLXRyYW5zZm9ybU9yaWdpblggKiAoc2NhbGUgKiAxKTtcbiAgICB2YXIgc2NhbGVUcmFuc2Zvcm1ZID0gLXRyYW5zZm9ybU9yaWdpblkgKiAoc2NhbGVZICogMSk7XG4gICAgdmFyIHNjYWxlUmVwbGFjZVggPSB0cmFuc2Zvcm1PcmlnaW5YIC8gc2NhbGU7XG4gICAgdmFyIHNjYWxlUmVwbGFjZVkgPSB0cmFuc2Zvcm1PcmlnaW5ZIC8gc2NhbGVZO1xuICAgIHZhciB0cmFuc2Zvcm0gPSB7XG4gICAgICAgIHRyYW5zbGF0ZTogJ3RyYW5zbGF0ZSgnICsgc3RhdGUudHJhbnNsYXRlWCArICcsICcgKyBzdGF0ZS50cmFuc2xhdGVZICsgJykgJyxcbiAgICAgICAgc2NhbGU6ICd0cmFuc2xhdGUoJyArIHNjYWxlVHJhbnNmb3JtWCArICcsICcgKyBzY2FsZVRyYW5zZm9ybVkgKyAnKSBzY2FsZSgnICsgc2NhbGUgKyAnLCAnICsgc2NhbGVZICsgJykgdHJhbnNsYXRlKCcgKyBzY2FsZVJlcGxhY2VYICsgJywgJyArIHNjYWxlUmVwbGFjZVkgKyAnKSAnLFxuICAgICAgICByb3RhdGU6ICdyb3RhdGUoJyArIHN0YXRlLnJvdGF0ZSArICcsICcgKyB0cmFuc2Zvcm1PcmlnaW5YICsgJywgJyArIHRyYW5zZm9ybU9yaWdpblkgKyAnKSAnLFxuICAgICAgICBza2V3WDogJ3NrZXdYKCcgKyBzdGF0ZS5za2V3WCArICcpICcsXG4gICAgICAgIHNrZXdZOiAnc2tld1koJyArIHN0YXRlLnNrZXdZICsgJykgJ1xuICAgIH07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc3RhdGUpIHtcbiAgICAgICAgaWYgKHN0YXRlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIGlmIChfdHJhbnNmb3JtUHJvcHMyLmRlZmF1bHRba2V5XSkge1xuICAgICAgICAgICAgICAgIGhhc1RyYW5zZm9ybSA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHByb3BzWygwLCBfdXRpbHMuY2FtZWxUb0Rhc2gpKGtleSldID0gc3RhdGVba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChoYXNUcmFuc2Zvcm0pIHtcbiAgICAgICAgcHJvcHMudHJhbnNmb3JtID0gJyc7XG5cbiAgICAgICAgZm9yICh2YXIgX2tleSBpbiB0cmFuc2Zvcm0pIHtcbiAgICAgICAgICAgIGlmICh0cmFuc2Zvcm0uaGFzT3duUHJvcGVydHkoX2tleSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGVmYXVsdFZhbHVlID0gX2tleSA9PT0gJ3NjYWxlJyA/ICcxJyA6ICcwJztcbiAgICAgICAgICAgICAgICBwcm9wcy50cmFuc2Zvcm0gKz0gdHJhbnNmb3JtW19rZXldLnJlcGxhY2UoL3VuZGVmaW5lZC9nLCBkZWZhdWx0VmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BzO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMM04yWnk5aWRXbHNaQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN2EwSkJTM2RDT3p0QlFVeDRRanM3UVVGRFFUczdPenM3TzBGQlJVRXNTVUZCVFN4blFrRkJaMElzVFVGQmFFSTdPMEZCUlZNc1UwRkJVeXhMUVVGVUxFTkJRV1VzUzBGQlppeEZRVUZ6UWl4SlFVRjBRaXhGUVVFMFFqdEJRVU4yUXl4UlFVRkpMR1ZCUVdVc1MwRkJaaXhEUVVSdFF6dEJRVVYyUXl4UlFVRk5MRkZCUVZFc1JVRkJVaXhEUVVacFF6dEJRVWQyUXl4UlFVRk5MRkZCUVZFc1RVRkJUU3hMUVVGT0xFdEJRV2RDTEZOQlFXaENMRWRCUVRSQ0xFMUJRVTBzUzBGQlRpeEpRVUZsTEdGQlFXWXNSMEZCSzBJc1RVRkJUU3hOUVVGT0xFbEJRV2RDTEVOQlFXaENMRU5CU0d4RE8wRkJTWFpETEZGQlFVMHNVMEZCVXl4TlFVRk5MRTFCUVU0c1MwRkJhVUlzVTBGQmFrSXNSMEZCTmtJc1RVRkJUU3hOUVVGT0xFbEJRV2RDTEdGQlFXaENMRWRCUVdkRExGTkJRVk1zUTBGQlZDeERRVXB5UXp0QlFVdDJReXhSUVVGTkxHMUNRVUZ0UWl4TFFVRkxMRXRCUVV3c1NVRkJZeXhEUVVGRExFMUJRVTBzVDBGQlRpeEpRVUZwUWl4RlFVRnFRaXhEUVVGRUxFZEJRWGRDTEVkQlFYaENMRU5CUVdRc1IwRkJOa01zUzBGQlN5eERRVUZNTEVOQlRDOUNPMEZCVFhaRExGRkJRVTBzYlVKQlFXMUNMRXRCUVVzc1RVRkJUQ3hKUVVGbExFTkJRVU1zVFVGQlRTeFBRVUZPTEVsQlFXbENMRVZCUVdwQ0xFTkJRVVFzUjBGQmQwSXNSMEZCZUVJc1EwRkJaaXhIUVVFNFF5eExRVUZMTEVOQlFVd3NRMEZPYUVNN1FVRlBka01zVVVGQlRTeHJRa0ZCYTBJc1EwRkJSU3huUWtGQlJpeEpRVUZ6UWl4UlFVRlJMRU5CUVZJc1EwRkJkRUlzUTBGUVpUdEJRVkYyUXl4UlFVRk5MR3RDUVVGclFpeERRVUZGTEdkQ1FVRkdMRWxCUVhOQ0xGTkJRVk1zUTBGQlZDeERRVUYwUWl4RFFWSmxPMEZCVTNaRExGRkJRVTBzWjBKQlFXZENMRzFDUVVGdFFpeExRVUZ1UWl4RFFWUnBRanRCUVZWMlF5eFJRVUZOTEdkQ1FVRm5RaXh0UWtGQmJVSXNUVUZCYmtJc1EwRldhVUk3UVVGWGRrTXNVVUZCVFN4WlFVRlpPMEZCUTJRc2EwTkJRWGRDTEUxQlFVMHNWVUZCVGl4VlFVRnhRaXhOUVVGTkxGVkJRVTRzVDBGQk4wTTdRVUZEUVN3NFFrRkJiMElzZVVKQlFXOUNMQ3RDUVVFd1FpeGxRVUZWTERCQ1FVRnhRaXgxUWtGQmEwSXNiMEpCUVc1SU8wRkJRMEVzTkVKQlFXdENMRTFCUVUwc1RVRkJUaXhWUVVGcFFpd3dRa0ZCY1VJc2RVSkJRWGhFTzBGQlEwRXNNRUpCUVdkQ0xFMUJRVTBzUzBGQlRpeFBRVUZvUWp0QlFVTkJMREJDUVVGblFpeE5RVUZOTEV0QlFVNHNUMEZCYUVJN1MwRk1SU3hEUVZocFF6czdRVUZ0UW5aRExGTkJRVXNzU1VGQlNTeEhRVUZLTEVsQlFWY3NTMEZCYUVJc1JVRkJkVUk3UVVGRGJrSXNXVUZCU1N4TlFVRk5MR05CUVU0c1EwRkJjVUlzUjBGQmNrSXNRMEZCU2l4RlFVRXJRanRCUVVNelFpeG5Ra0ZCU1N4NVFrRkJaU3hIUVVGbUxFTkJRVW9zUlVGQmVVSTdRVUZEY2tJc0swSkJRV1VzU1VGQlppeERRVVJ4UWp0aFFVRjZRaXhOUVVWUE8wRkJRMGdzYzBKQlFVMHNkMEpCUVZrc1IwRkJXaXhEUVVGT0xFbEJRVEJDTEUxQlFVMHNSMEZCVGl4RFFVRXhRaXhEUVVSSE8yRkJSbEE3VTBGRVNqdExRVVJLT3p0QlFWVkJMRkZCUVVrc1dVRkJTaXhGUVVGclFqdEJRVU5rTEdOQlFVMHNVMEZCVGl4SFFVRnJRaXhGUVVGc1FpeERRVVJqT3p0QlFVZGtMR0ZCUVVzc1NVRkJTU3hKUVVGS0xFbEJRVmNzVTBGQmFFSXNSVUZCTWtJN1FVRkRka0lzWjBKQlFVa3NWVUZCVlN4alFVRldMRU5CUVhsQ0xFbEJRWHBDTEVOQlFVb3NSVUZCYlVNN1FVRkRMMElzYjBKQlFVMHNaVUZCWlN4SlFVRkRMRXRCUVZFc1QwRkJVaXhIUVVGdFFpeEhRVUZ3UWl4SFFVRXdRaXhIUVVFeFFpeERRVVJWTzBGQlJTOUNMSE5DUVVGTkxGTkJRVTRzU1VGQmJVSXNWVUZCVlN4SlFVRldMRVZCUVdVc1QwRkJaaXhEUVVGMVFpeFpRVUYyUWl4RlFVRnhReXhaUVVGeVF5eERRVUZ1UWl4RFFVWXJRanRoUVVGdVF6dFRRVVJLTzB0QlNFbzdPMEZCVjBFc1YwRkJUeXhMUVVGUUxFTkJlRU4xUXp0RFFVRTFRaUlzSW1acGJHVWlPaUppZFdsc1pDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdleUJqWVcxbGJGUnZSR0Z6YUNCOUlHWnliMjBnSnk0dUx5NHVMMmx1WXk5MWRHbHNjeWM3WEc1cGJYQnZjblFnZEhKaGJuTm1iM0p0VUhKdmNITWdabkp2YlNBbkxpNHZZM056TDNSeVlXNXpabTl5YlMxd2NtOXdjeWM3WEc1Y2JtTnZibk4wSUZwRlVrOWZUazlVWDFwRlVrOGdQU0F3TGpBd01ERTdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR1oxYm1OMGFXOXVJR0oxYVd4a0tITjBZWFJsTENCa1lYUmhLU0I3WEc0Z0lDQWdiR1YwSUdoaGMxUnlZVzV6Wm05eWJTQTlJR1poYkhObE8xeHVJQ0FnSUdOdmJuTjBJSEJ5YjNCeklEMGdlMzA3WEc0Z0lDQWdZMjl1YzNRZ2MyTmhiR1VnUFNCemRHRjBaUzV6WTJGc1pTQWhQVDBnZFc1a1pXWnBibVZrSUQ4Z2MzUmhkR1V1YzJOaGJHVWdmSHdnV2tWU1QxOU9UMVJmV2tWU1R5QTZJSE4wWVhSbExuTmpZV3hsV0NCOGZDQXhPMXh1SUNBZ0lHTnZibk4wSUhOallXeGxXU0E5SUhOMFlYUmxMbk5qWVd4bFdTQWhQVDBnZFc1a1pXWnBibVZrSUQ4Z2MzUmhkR1V1YzJOaGJHVlpJSHg4SUZwRlVrOWZUazlVWDFwRlVrOGdPaUJ6WTJGc1pTQjhmQ0F4TzF4dUlDQWdJR052Ym5OMElIUnlZVzV6Wm05eWJVOXlhV2RwYmxnZ1BTQmtZWFJoTG5kcFpIUm9JQ29nS0NoemRHRjBaUzV2Y21sbmFXNVlJSHg4SURVd0tTQXZJREV3TUNrZ0t5QmtZWFJoTG5nN1hHNGdJQ0FnWTI5dWMzUWdkSEpoYm5ObWIzSnRUM0pwWjJsdVdTQTlJR1JoZEdFdWFHVnBaMmgwSUNvZ0tDaHpkR0YwWlM1dmNtbG5hVzVaSUh4OElEVXdLU0F2SURFd01Da2dLeUJrWVhSaExuazdYRzRnSUNBZ1kyOXVjM1FnYzJOaGJHVlVjbUZ1YzJadmNtMVlJRDBnTFNCMGNtRnVjMlp2Y20xUGNtbG5hVzVZSUNvZ0tITmpZV3hsSUNvZ01TazdYRzRnSUNBZ1kyOXVjM1FnYzJOaGJHVlVjbUZ1YzJadmNtMVpJRDBnTFNCMGNtRnVjMlp2Y20xUGNtbG5hVzVaSUNvZ0tITmpZV3hsV1NBcUlERXBPMXh1SUNBZ0lHTnZibk4wSUhOallXeGxVbVZ3YkdGalpWZ2dQU0IwY21GdWMyWnZjbTFQY21sbmFXNVlJQzhnYzJOaGJHVTdYRzRnSUNBZ1kyOXVjM1FnYzJOaGJHVlNaWEJzWVdObFdTQTlJSFJ5WVc1elptOXliVTl5YVdkcGJsa2dMeUJ6WTJGc1pWazdYRzRnSUNBZ1kyOXVjM1FnZEhKaGJuTm1iM0p0SUQwZ2UxeHVJQ0FnSUNBZ0lDQjBjbUZ1YzJ4aGRHVTZJR0IwY21GdWMyeGhkR1VvSkh0emRHRjBaUzUwY21GdWMyeGhkR1ZZZlN3Z0pIdHpkR0YwWlM1MGNtRnVjMnhoZEdWWmZTa2dZQ3hjYmlBZ0lDQWdJQ0FnYzJOaGJHVTZJR0IwY21GdWMyeGhkR1VvSkh0elkyRnNaVlJ5WVc1elptOXliVmg5TENBa2UzTmpZV3hsVkhKaGJuTm1iM0p0V1gwcElITmpZV3hsS0NSN2MyTmhiR1Y5TENBa2UzTmpZV3hsV1gwcElIUnlZVzV6YkdGMFpTZ2tlM05qWVd4bFVtVndiR0ZqWlZoOUxDQWtlM05qWVd4bFVtVndiR0ZqWlZsOUtTQmdMRnh1SUNBZ0lDQWdJQ0J5YjNSaGRHVTZJR0J5YjNSaGRHVW9KSHR6ZEdGMFpTNXliM1JoZEdWOUxDQWtlM1J5WVc1elptOXliVTl5YVdkcGJsaDlMQ0FrZTNSeVlXNXpabTl5YlU5eWFXZHBibGw5S1NCZ0xGeHVJQ0FnSUNBZ0lDQnphMlYzV0RvZ1lITnJaWGRZS0NSN2MzUmhkR1V1YzJ0bGQxaDlLU0JnTEZ4dUlDQWdJQ0FnSUNCemEyVjNXVG9nWUhOclpYZFpLQ1I3YzNSaGRHVXVjMnRsZDFsOUtTQmdYRzRnSUNBZ2ZUdGNibHh1SUNBZ0lHWnZjaUFvYkdWMElHdGxlU0JwYmlCemRHRjBaU2tnZTF4dUlDQWdJQ0FnSUNCcFppQW9jM1JoZEdVdWFHRnpUM2R1VUhKdmNHVnlkSGtvYTJWNUtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFJ5WVc1elptOXliVkJ5YjNCelcydGxlVjBwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCb1lYTlVjbUZ1YzJadmNtMGdQU0IwY25WbE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J3Y205d2MxdGpZVzFsYkZSdlJHRnphQ2hyWlhrcFhTQTlJSE4wWVhSbFcydGxlVjA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmlBZ0lDQnBaaUFvYUdGelZISmhibk5tYjNKdEtTQjdYRzRnSUNBZ0lDQWdJSEJ5YjNCekxuUnlZVzV6Wm05eWJTQTlJQ2NuTzF4dVhHNGdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHdGxlU0JwYmlCMGNtRnVjMlp2Y20wcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaDBjbUZ1YzJadmNtMHVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2EyVjVLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJR1JsWm1GMWJIUldZV3gxWlNBOUlDaHJaWGtnUFQwOUlDZHpZMkZzWlNjcElEOGdKekVuSURvZ0p6QW5PMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEJ5YjNCekxuUnlZVzV6Wm05eWJTQXJQU0IwY21GdWMyWnZjbTFiYTJWNVhTNXlaWEJzWVdObEtDOTFibVJsWm1sdVpXUXZaeXdnWkdWbVlYVnNkRlpoYkhWbEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JseHVJQ0FnSUhKbGRIVnliaUJ3Y205d2N6dGNibjBpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9zdmcvYnVpbGQuanNcbiAqKiBtb2R1bGUgaWQgPSA0NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLypcbiAgICBDb252ZXJ0IHBlcmNlbnRhZ2UgdG8gcGl4ZWxzXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBQZXJjZW50YWdlIG9mIHRvdGFsIGxlbmd0aFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVG90YWwgbGVuZ3RoXG4qL1xudmFyIHBlcmNlbnRUb1BpeGVscyA9IGZ1bmN0aW9uIChwZXJjZW50LCBsZW5ndGgpIHtcbiAgICByZXR1cm4gcGFyc2VGbG9hdChwZXJjZW50KSAvIDEwMCAqIGxlbmd0aCArICdweCc7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoc3RhdGUsIGxlbmd0aCkge1xuICAgIHZhciBzdHlsZXMgPSB7fTtcbiAgICB2YXIgZGFzaEFycmF5U3R5bGVzID0ge1xuICAgICAgICBsZW5ndGg6IDAsXG4gICAgICAgIHNwYWNpbmc6IGxlbmd0aCArICdweCdcbiAgICB9O1xuICAgIHZhciBoYXNEYXNoQXJyYXkgPSBmYWxzZTtcblxuICAgIGZvciAodmFyIGtleSBpbiBzdGF0ZSkge1xuICAgICAgICBpZiAoc3RhdGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gc3RhdGVba2V5XTtcblxuICAgICAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdsZW5ndGgnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ3NwYWNpbmcnOlxuICAgICAgICAgICAgICAgICAgICBoYXNEYXNoQXJyYXkgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBkYXNoQXJyYXlTdHlsZXNba2V5XSA9IHBlcmNlbnRUb1BpeGVscyh2YWx1ZSwgbGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnb2Zmc2V0JzpcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzWydzdHJva2UtZGFzaG9mZnNldCddID0gcGVyY2VudFRvUGl4ZWxzKC12YWx1ZSwgbGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChoYXNEYXNoQXJyYXkpIHtcbiAgICAgICAgc3R5bGVzWydzdHJva2UtZGFzaGFycmF5J10gPSBkYXNoQXJyYXlTdHlsZXMubGVuZ3RoICsgJyAnICsgZGFzaEFycmF5U3R5bGVzLnNwYWNpbmc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0eWxlcztcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwzTjJaeTF3WVhSb0wySjFhV3hrTG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3T3p0QlFVMUJMRWxCUVUwc2EwSkJRV3RDTEZWQlFVTXNUMEZCUkN4RlFVRlZMRTFCUVZZN1YwRkJjVUlzVlVGQlF5eERRVUZYTEU5QlFWZ3NTVUZCYzBJc1IwRkJkRUlzUjBGQk5rSXNUVUZCT1VJc1IwRkJkVU1zU1VGQmRrTTdRMEZCY2tJN08ydENRVVZVTEZWQlFVTXNTMEZCUkN4RlFVRlJMRTFCUVZJc1JVRkJiVUk3UVVGRE9VSXNVVUZCVFN4VFFVRlRMRVZCUVZRc1EwRkVkMEk3UVVGRk9VSXNVVUZCVFN4clFrRkJhMEk3UVVGRGNFSXNaMEpCUVZFc1EwRkJVanRCUVVOQkxHbENRVUZUTEZOQlFWTXNTVUZCVkR0TFFVWlFMRU5CUm5kQ08wRkJUVGxDTEZGQlFVa3NaVUZCWlN4TFFVRm1MRU5CVGpCQ096dEJRVkU1UWl4VFFVRkxMRWxCUVVrc1IwRkJTaXhKUVVGWExFdEJRV2hDTEVWQlFYVkNPMEZCUTI1Q0xGbEJRVWtzVFVGQlRTeGpRVUZPTEVOQlFYRkNMRWRCUVhKQ0xFTkJRVW9zUlVGQkswSTdRVUZETTBJc1owSkJRVTBzVVVGQlVTeE5RVUZOTEVkQlFVNHNRMEZCVWl4RFFVUnhRanM3UVVGSE0wSXNiMEpCUVZFc1IwRkJVanRCUVVOQkxIRkNRVUZMTEZGQlFVd3NRMEZFUVR0QlFVVkJMSEZDUVVGTExGTkJRVXc3UVVGRFNTeHRRMEZCWlN4SlFVRm1MRU5CUkVvN1FVRkZTU3h2UTBGQlowSXNSMEZCYUVJc1NVRkJkVUlzWjBKQlFXZENMRXRCUVdoQ0xFVkJRWFZDTEUxQlFYWkNMRU5CUVhaQ0xFTkJSa283UVVGSFNTd3dRa0ZJU2p0QlFVWkJMSEZDUVUxTExGRkJRVXc3UVVGRFNTd3lRa0ZCVHl4dFFrRkJVQ3hKUVVFNFFpeG5Ra0ZCWjBJc1EwRkJReXhMUVVGRUxFVkJRVkVzVFVGQmVFSXNRMEZCT1VJc1EwRkVTanRCUVVWSkxEQkNRVVpLTzBGQlRrRTdRVUZWU1N3eVFrRkJUeXhIUVVGUUxFbEJRV01zUzBGQlpDeERRVVJLTzBGQlZFRXNZVUZJTWtJN1UwRkJMMEk3UzBGRVNqczdRVUZ0UWtFc1VVRkJTU3haUVVGS0xFVkJRV3RDTzBGQlEyUXNaVUZCVHl4clFrRkJVQ3hKUVVFMlFpeG5Ra0ZCWjBJc1RVRkJhRUlzUjBGQmVVSXNSMEZCZWtJc1IwRkJLMElzWjBKQlFXZENMRTlCUVdoQ0xFTkJSRGxETzB0QlFXeENPenRCUVVsQkxGZEJRVThzVFVGQlVDeERRUzlDT0VJN1EwRkJia0lpTENKbWFXeGxJam9pWW5WcGJHUXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFF2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTHlwY2JpQWdJQ0JEYjI1MlpYSjBJSEJsY21ObGJuUmhaMlVnZEc4Z2NHbDRaV3h6WEc0Z0lDQWdYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCUVpYSmpaVzUwWVdkbElHOW1JSFJ2ZEdGc0lHeGxibWQwYUZ4dUlDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dWRzkwWVd3Z2JHVnVaM1JvWEc0cUwxeHVZMjl1YzNRZ2NHVnlZMlZ1ZEZSdlVHbDRaV3h6SUQwZ0tIQmxjbU5sYm5Rc0lHeGxibWQwYUNrZ1BUNGdLSEJoY25ObFJteHZZWFFvY0dWeVkyVnVkQ2tnTHlBeE1EQXBJQ29nYkdWdVozUm9JQ3NnSjNCNEp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdLSE4wWVhSbExDQnNaVzVuZEdncElEMCtJSHRjYmlBZ0lDQmpiMjV6ZENCemRIbHNaWE1nUFNCN2ZUdGNiaUFnSUNCamIyNXpkQ0JrWVhOb1FYSnlZWGxUZEhsc1pYTWdQU0I3WEc0Z0lDQWdJQ0FnSUd4bGJtZDBhRG9nTUN4Y2JpQWdJQ0FnSUNBZ2MzQmhZMmx1WnpvZ2JHVnVaM1JvSUNzZ0ozQjRKMXh1SUNBZ0lIMDdYRzRnSUNBZ2JHVjBJR2hoYzBSaGMyaEJjbkpoZVNBOUlHWmhiSE5sTzF4dVhHNGdJQ0FnWm05eUlDaHNaWFFnYTJWNUlHbHVJSE4wWVhSbEtTQjdYRzRnSUNBZ0lDQWdJR2xtSUNoemRHRjBaUzVvWVhOUGQyNVFjbTl3WlhKMGVTaHJaWGtwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQjJZV3gxWlNBOUlITjBZWFJsVzJ0bGVWMDdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lITjNhWFJqYUNBb2EyVjVLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpZWE5sSUNkc1pXNW5kR2duT2x4dUlDQWdJQ0FnSUNBZ0lDQWdZMkZ6WlNBbmMzQmhZMmx1WnljNlhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FHRnpSR0Z6YUVGeWNtRjVJRDBnZEhKMVpUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmtZWE5vUVhKeVlYbFRkSGxzWlhOYmEyVjVYU0E5SUhCbGNtTmxiblJVYjFCcGVHVnNjeWgyWVd4MVpTd2diR1Z1WjNSb0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmljbVZoYXp0Y2JpQWdJQ0FnSUNBZ0lDQWdJR05oYzJVZ0oyOW1abk5sZENjNlhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2MzUjViR1Z6V3lkemRISnZhMlV0WkdGemFHOW1abk5sZENkZElEMGdjR1Z5WTJWdWRGUnZVR2w0Wld4ektDMTJZV3gxWlN3Z2JHVnVaM1JvS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCaWNtVmhhenRjYmlBZ0lDQWdJQ0FnSUNBZ0lHUmxabUYxYkhRNlhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2MzUjViR1Z6VzJ0bGVWMGdQU0IyWVd4MVpUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JseHVJQ0FnSUdsbUlDaG9ZWE5FWVhOb1FYSnlZWGtwSUh0Y2JpQWdJQ0FnSUNBZ2MzUjViR1Z6V3lkemRISnZhMlV0WkdGemFHRnljbUY1SjEwZ1BTQmtZWE5vUVhKeVlYbFRkSGxzWlhNdWJHVnVaM1JvSUNzZ0p5QW5JQ3NnWkdGemFFRnljbUY1VTNSNWJHVnpMbk53WVdOcGJtYzdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NtVjBkWEp1SUhOMGVXeGxjenRjYm4wN0lsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FkYXB0ZXIvc3ZnLXBhdGgvYnVpbGQuanNcbiAqKiBtb2R1bGUgaWQgPSA0N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIHJnYiA9IGV4cG9ydHMucmdiID0ge1xuICAgIG1pbjogMCxcbiAgICBtYXg6IDI1NSxcbiAgICByb3VuZDogdHJ1ZVxufTtcblxudmFyIG9wYWNpdHkgPSBleHBvcnRzLm9wYWNpdHkgPSB7XG4gICAgbWluOiAwLFxuICAgIG1heDogMVxufTtcblxudmFyIHBlcmNlbnQgPSBleHBvcnRzLnBlcmNlbnQgPSB7XG4gICAgbWluOiAwLFxuICAgIG1heDogMTAwLFxuICAgIHVuaXQ6ICclJ1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OXpaWFIwYVc1bmN5OWtaV1poZFd4MExYQnliM0J6TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096dEJRVUZQTEVsQlFVMHNiMEpCUVUwN1FVRkRaaXhUUVVGTExFTkJRVXc3UVVGRFFTeFRRVUZMTEVkQlFVdzdRVUZEUVN4WFFVRlBMRWxCUVZBN1EwRklVenM3UVVGTlRpeEpRVUZOTERSQ1FVRlZPMEZCUTI1Q0xGTkJRVXNzUTBGQlREdEJRVU5CTEZOQlFVc3NRMEZCVER0RFFVWlRPenRCUVV0T0xFbEJRVTBzTkVKQlFWVTdRVUZEYmtJc1UwRkJTeXhEUVVGTU8wRkJRMEVzVTBGQlN5eEhRVUZNTzBGQlEwRXNWVUZCVFN4SFFVRk9PME5CU0ZNaUxDSm1hV3hsSWpvaVpHVm1ZWFZzZEMxd2NtOXdjeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKbGVIQnZjblFnWTI5dWMzUWdjbWRpSUQwZ2UxeHVJQ0FnSUcxcGJqb2dNQ3hjYmlBZ0lDQnRZWGc2SURJMU5TeGNiaUFnSUNCeWIzVnVaRG9nZEhKMVpWeHVmVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJRzl3WVdOcGRIa2dQU0I3WEc0Z0lDQWdiV2x1T2lBd0xGeHVJQ0FnSUcxaGVEb2dNVnh1ZlR0Y2JseHVaWGh3YjNKMElHTnZibk4wSUhCbGNtTmxiblFnUFNCN1hHNGdJQ0FnYldsdU9pQXdMRnh1SUNBZ0lHMWhlRG9nTVRBd0xGeHVJQ0FnSUhWdWFYUTZJQ2NsSjF4dWZUc2lYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kZWZhdWx0LXByb3BzLmpzXG4gKiogbW9kdWxlIGlkID0gNDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBYID0gJ1gnO1xudmFyIFkgPSAnWSc7XG52YXIgQUxQSEEgPSAnQWxwaGEnO1xuXG52YXIgYXhlcyA9IGV4cG9ydHMuYXhlcyA9IFtYLCBZLCAnWiddO1xudmFyIHJnYiA9IGV4cG9ydHMucmdiID0gWydSZWQnLCAnR3JlZW4nLCAnQmx1ZScsIEFMUEhBXTtcbnZhciBoc2wgPSBleHBvcnRzLmhzbCA9IFsnSHVlJywgJ1NhdHVyYXRpb24nLCAnTGlnaHRuZXNzJywgQUxQSEFdO1xudmFyIHBvc2l0aW9ucyA9IGV4cG9ydHMucG9zaXRpb25zID0gWydUb3AnLCAnUmlnaHQnLCAnQm90dG9tJywgJ0xlZnQnXTtcbnZhciBzaGFkb3cgPSBleHBvcnRzLnNoYWRvdyA9IFtYLCBZLCAnUmFkaXVzJywgJ1NwcmVhZCcsICdDb2xvciddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5elpYUjBhVzVuY3k5a2FXTjBhVzl1WVhKNUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenRCUVVGQkxFbEJRVTBzU1VGQlNTeEhRVUZLTzBGQlEwNHNTVUZCVFN4SlFVRkpMRWRCUVVvN1FVRkRUaXhKUVVGTkxGRkJRVkVzVDBGQlVqczdRVUZGUXl4SlFVRk5MSE5DUVVGUExFTkJRVU1zUTBGQlJDeEZRVUZKTEVOQlFVb3NSVUZCVHl4SFFVRlFMRU5CUVZBN1FVRkRUaXhKUVVGTkxHOUNRVUZOTEVOQlFVTXNTMEZCUkN4RlFVRlJMRTlCUVZJc1JVRkJhVUlzVFVGQmFrSXNSVUZCZVVJc1MwRkJla0lzUTBGQlRqdEJRVU5PTEVsQlFVMHNiMEpCUVUwc1EwRkJReXhMUVVGRUxFVkJRVkVzV1VGQlVpeEZRVUZ6UWl4WFFVRjBRaXhGUVVGdFF5eExRVUZ1UXl4RFFVRk9PMEZCUTA0c1NVRkJUU3huUTBGQldTeERRVUZETEV0QlFVUXNSVUZCVVN4UFFVRlNMRVZCUVdsQ0xGRkJRV3BDTEVWQlFUSkNMRTFCUVROQ0xFTkJRVm83UVVGRFRpeEpRVUZOTERCQ1FVRlRMRU5CUVVNc1EwRkJSQ3hGUVVGSkxFTkJRVW9zUlVGQlR5eFJRVUZRTEVWQlFXbENMRkZCUVdwQ0xFVkJRVEpDTEU5QlFUTkNMRU5CUVZRaUxDSm1hV3hsSWpvaVpHbGpkR2x2Ym1GeWVTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpqYjI1emRDQllJRDBnSjFnbk8xeHVZMjl1YzNRZ1dTQTlJQ2RaSnp0Y2JtTnZibk4wSUVGTVVFaEJJRDBnSjBGc2NHaGhKenRjYmx4dVpYaHdiM0owSUdOdmJuTjBJR0Y0WlhNZ1BTQmJXQ3dnV1N3Z0oxb25YVHRjYm1WNGNHOXlkQ0JqYjI1emRDQnlaMklnUFNCYkoxSmxaQ2NzSUNkSGNtVmxiaWNzSUNkQ2JIVmxKeXdnUVV4UVNFRmRPMXh1Wlhod2IzSjBJR052Ym5OMElHaHpiQ0E5SUZzblNIVmxKeXdnSjFOaGRIVnlZWFJwYjI0bkxDQW5UR2xuYUhSdVpYTnpKeXdnUVV4UVNFRmRPMXh1Wlhod2IzSjBJR052Ym5OMElIQnZjMmwwYVc5dWN5QTlJRnNuVkc5d0p5d2dKMUpwWjJoMEp5d2dKMEp2ZEhSdmJTY3NJQ2RNWldaMEoxMDdYRzVsZUhCdmNuUWdZMjl1YzNRZ2MyaGhaRzkzSUQwZ1cxZ3NJRmtzSUNkU1lXUnBkWE1uTENBblUzQnlaV0ZrSnl3Z0owTnZiRzl5SjEwN0lsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3NldHRpbmdzL2RpY3Rpb25hcnkuanNcbiAqKiBtb2R1bGUgaWQgPSA0OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVFYXNpbmdGdW5jdGlvbjtcbi8qXG4gICAgTWlycm9yIGVhc2luZ1xuICAgIFxuICAgIE1pcnJvcnMgdGhlIHByb3ZpZGVkIGVhc2luZyBmdW5jdGlvbiwgdXNlZCBoZXJlIGZvciBtaXJyb3JpbmcgYW5cbiAgICBlYXNlSW4gaW50byBhbiBlYXNlSW5PdXRcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzLCBmcm9tIDAgLSAxLCBvZiBjdXJyZW50IHNoaWZ0XG4gICAgQHBhcmFtIFtmdW5jdGlvbl06IFRoZSBlYXNpbmcgZnVuY3Rpb24gdG8gbWlycm9yXG4gICAgQHJldHVybnMgW251bWJlcl06IFRoZSBlYXNpbmctYWRqdXN0ZWQgZGVsdGFcbiovXG52YXIgbWlycm9yRWFzaW5nID0gZnVuY3Rpb24gKG1ldGhvZCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAocHJvZ3Jlc3MsIHN0cmVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBwcm9ncmVzcyA8PSAwLjUgPyBtZXRob2QoMiAqIHByb2dyZXNzLCBzdHJlbmd0aCkgLyAyIDogKDIgLSBtZXRob2QoMiAqICgxIC0gcHJvZ3Jlc3MpLCBzdHJlbmd0aCkpIC8gMjtcbiAgICB9O1xufTtcblxuLypcbiAgICBSZXZlcnNlIGVhc2luZ1xuICAgIFxuICAgIFJldmVyc2VzIHRoZSBvdXRwdXQgb2YgdGhlIHByb3ZpZGVkIGVhc2luZyBmdW5jdGlvbiwgdXNlZCBmb3IgZmxpcHBpbmcgZWFzZUluXG4gICAgY3VydmUgdG8gYW4gZWFzZU91dC5cbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzLCBmcm9tIDAgLSAxLCBvZiBjdXJyZW50IHNoaWZ0XG4gICAgQHBhcmFtIFtmdW5jdGlvbl06IFRoZSBlYXNpbmcgZnVuY3Rpb24gdG8gcmV2ZXJzZVxuICAgIEByZXR1cm5zIFtudW1iZXJdOiBUaGUgZWFzaW5nLWFkanVzdGVkIGRlbHRhXG4qL1xudmFyIHJldmVyc2VFYXNpbmcgPSBmdW5jdGlvbiAobWV0aG9kKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwcm9ncmVzcywgc3RyZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIDEgLSBtZXRob2QoMSAtIHByb2dyZXNzLCBzdHJlbmd0aCk7XG4gICAgfTtcbn07XG5cbi8qXG4gICAgRWFzaW5nIGNsYXNzXG5cbiAgICBJZiBwcm92aWRlZCBlYXNpbmcgZnVuY3Rpb24sIHJldHVybnMgZWFzaW5nIGZ1bmN0aW9uIHdpdGggXG4gICAgaW4vb3V0L2luT3V0IHZhcmlhdGlvbnNcblxuICAgIElmIHByb3ZpZGVkIGZvdXIgYXJndW1lbnRzLCByZXR1cm5zIG5ldyBCZXppZXIgY2xhc3MgaW5zdGVhZC5cbiovXG5mdW5jdGlvbiBjcmVhdGVFYXNpbmdGdW5jdGlvbihtZXRob2QpIHtcbiAgICB2YXIgZWFzaW5nRnVuY3Rpb24gPSBmdW5jdGlvbiAocHJvZ3Jlc3MsIHN0cmVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBtZXRob2QocHJvZ3Jlc3MsIHN0cmVuZ3RoKTtcbiAgICB9O1xuXG4gICAgZWFzaW5nRnVuY3Rpb24uaW4gPSBmdW5jdGlvbiAocHJvZ3Jlc3MsIHN0cmVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBtZXRob2QocHJvZ3Jlc3MsIHN0cmVuZ3RoKTtcbiAgICB9O1xuICAgIGVhc2luZ0Z1bmN0aW9uLm91dCA9IHJldmVyc2VFYXNpbmcobWV0aG9kKTtcbiAgICBlYXNpbmdGdW5jdGlvbi5pbk91dCA9IG1pcnJvckVhc2luZyhtZXRob2QpO1xuXG4gICAgcmV0dXJuIGVhc2luZ0Z1bmN0aW9uO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMlZoYzJsdVp5OWpjbVZoZEdVdFpXRnphVzVuTG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096dHJRa0ZuUTNkQ096czdPenM3T3pzN096dEJRWFJDZUVJc1NVRkJUU3hsUVVGbExGVkJRVU1zVFVGQlJEdFhRVUZaTEZWQlFVTXNVVUZCUkN4RlFVRlhMRkZCUVZnN1pVRkJkMElzVVVGQlF5eEpRVUZaTEVkQlFWb3NSMEZCYlVJc1QwRkJUeXhKUVVGSkxGRkJRVW9zUlVGQll5eFJRVUZ5UWl4SlFVRnBReXhEUVVGcVF5eEhRVUZ4UXl4RFFVRkRMRWxCUVVrc1QwRkJUeXhMUVVGTExFbEJRVWtzVVVGQlNpeERRVUZNTEVWQlFXOUNMRkZCUVROQ0xFTkJRVW9zUTBGQlJDeEhRVUUyUXl4RFFVRTNRenRMUVVGcVJqdERRVUZhT3pzN096czdPenM3T3pzN1FVRlpja0lzU1VGQlRTeG5Ra0ZCWjBJc1ZVRkJReXhOUVVGRU8xZEJRVmtzVlVGQlF5eFJRVUZFTEVWQlFWY3NVVUZCV0R0bFFVRjNRaXhKUVVGSkxFOUJRVThzU1VGQlNTeFJRVUZLTEVWQlFXTXNVVUZCY2tJc1EwRkJTanRMUVVGNFFqdERRVUZhT3pzN096czdPenM3TzBGQlZWQXNVMEZCVXl4dlFrRkJWQ3hEUVVFNFFpeE5RVUU1UWl4RlFVRnpRenRCUVVOcVJDeFJRVUZKTEdsQ1FVRnBRaXhWUVVGRExGRkJRVVFzUlVGQlZ5eFJRVUZZTzJWQlFYZENMRTlCUVU4c1VVRkJVQ3hGUVVGcFFpeFJRVUZxUWp0TFFVRjRRaXhEUVVRMFFqczdRVUZIYWtRc2JVSkJRV1VzUlVGQlppeEhRVUZ2UWl4VlFVRkRMRkZCUVVRc1JVRkJWeXhSUVVGWU8yVkJRWGRDTEU5QlFVOHNVVUZCVUN4RlFVRnBRaXhSUVVGcVFqdExRVUY0UWl4RFFVZzJRanRCUVVscVJDeHRRa0ZCWlN4SFFVRm1MRWRCUVhGQ0xHTkJRV01zVFVGQlpDeERRVUZ5UWl4RFFVcHBSRHRCUVV0cVJDeHRRa0ZCWlN4TFFVRm1MRWRCUVhWQ0xHRkJRV0VzVFVGQllpeERRVUYyUWl4RFFVeHBSRHM3UVVGUGFrUXNWMEZCVHl4alFVRlFMRU5CVUdsRU8wTkJRWFJESWl3aVptbHNaU0k2SW1OeVpXRjBaUzFsWVhOcGJtY3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFF2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTHlwY2JpQWdJQ0JOYVhKeWIzSWdaV0Z6YVc1blhHNGdJQ0FnWEc0Z0lDQWdUV2x5Y205eWN5QjBhR1VnY0hKdmRtbGtaV1FnWldGemFXNW5JR1oxYm1OMGFXOXVMQ0IxYzJWa0lHaGxjbVVnWm05eUlHMXBjbkp2Y21sdVp5QmhibHh1SUNBZ0lHVmhjMlZKYmlCcGJuUnZJR0Z1SUdWaGMyVkpiazkxZEZ4dUlDQWdJRnh1SUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1VISnZaM0psYzNNc0lHWnliMjBnTUNBdElERXNJRzltSUdOMWNuSmxiblFnYzJocFpuUmNiaUFnSUNCQWNHRnlZVzBnVzJaMWJtTjBhVzl1WFRvZ1ZHaGxJR1ZoYzJsdVp5Qm1kVzVqZEdsdmJpQjBieUJ0YVhKeWIzSmNiaUFnSUNCQWNtVjBkWEp1Y3lCYmJuVnRZbVZ5WFRvZ1ZHaGxJR1ZoYzJsdVp5MWhaR3AxYzNSbFpDQmtaV3gwWVZ4dUtpOWNibU52Ym5OMElHMXBjbkp2Y2tWaGMybHVaeUE5SUNodFpYUm9iMlFwSUQwK0lDaHdjbTluY21WemN5d2djM1J5Wlc1bmRHZ3BJRDArSUNod2NtOW5jbVZ6Y3lBOFBTQXdMalVwSUQ4Z2JXVjBhRzlrS0RJZ0tpQndjbTluY21WemN5d2djM1J5Wlc1bmRHZ3BJQzhnTWlBNklDZ3lJQzBnYldWMGFHOWtLRElnS2lBb01TQXRJSEJ5YjJkeVpYTnpLU3dnYzNSeVpXNW5kR2dwS1NBdklESTdYRzRnSUNBZ0lDQWdJRnh1THlwY2JpQWdJQ0JTWlhabGNuTmxJR1ZoYzJsdVoxeHVJQ0FnSUZ4dUlDQWdJRkpsZG1WeWMyVnpJSFJvWlNCdmRYUndkWFFnYjJZZ2RHaGxJSEJ5YjNacFpHVmtJR1ZoYzJsdVp5Qm1kVzVqZEdsdmJpd2dkWE5sWkNCbWIzSWdabXhwY0hCcGJtY2daV0Z6WlVsdVhHNGdJQ0FnWTNWeWRtVWdkRzhnWVc0Z1pXRnpaVTkxZEM1Y2JpQWdJQ0JjYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklGQnliMmR5WlhOekxDQm1jbTl0SURBZ0xTQXhMQ0J2WmlCamRYSnlaVzUwSUhOb2FXWjBYRzRnSUNBZ1FIQmhjbUZ0SUZ0bWRXNWpkR2x2YmwwNklGUm9aU0JsWVhOcGJtY2dablZ1WTNScGIyNGdkRzhnY21WMlpYSnpaVnh1SUNBZ0lFQnlaWFIxY201eklGdHVkVzFpWlhKZE9pQlVhR1VnWldGemFXNW5MV0ZrYW5WemRHVmtJR1JsYkhSaFhHNHFMMXh1WTI5dWMzUWdjbVYyWlhKelpVVmhjMmx1WnlBOUlDaHRaWFJvYjJRcElEMCtJQ2h3Y205bmNtVnpjeXdnYzNSeVpXNW5kR2dwSUQwK0lERWdMU0J0WlhSb2IyUW9NU0F0SUhCeWIyZHlaWE56TENCemRISmxibWQwYUNrN1hHNWNiaThxWEc0Z0lDQWdSV0Z6YVc1bklHTnNZWE56WEc1Y2JpQWdJQ0JKWmlCd2NtOTJhV1JsWkNCbFlYTnBibWNnWm5WdVkzUnBiMjRzSUhKbGRIVnlibk1nWldGemFXNW5JR1oxYm1OMGFXOXVJSGRwZEdnZ1hHNGdJQ0FnYVc0dmIzVjBMMmx1VDNWMElIWmhjbWxoZEdsdmJuTmNibHh1SUNBZ0lFbG1JSEJ5YjNacFpHVmtJR1p2ZFhJZ1lYSm5kVzFsYm5SekxDQnlaWFIxY201eklHNWxkeUJDWlhwcFpYSWdZMnhoYzNNZ2FXNXpkR1ZoWkM1Y2Jpb3ZYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQm1kVzVqZEdsdmJpQmpjbVZoZEdWRllYTnBibWRHZFc1amRHbHZiaWh0WlhSb2IyUXBJSHRjYmlBZ0lDQnNaWFFnWldGemFXNW5SblZ1WTNScGIyNGdQU0FvY0hKdlozSmxjM01zSUhOMGNtVnVaM1JvS1NBOVBpQnRaWFJvYjJRb2NISnZaM0psYzNNc0lITjBjbVZ1WjNSb0tUdGNibHh1SUNBZ0lHVmhjMmx1WjBaMWJtTjBhVzl1TG1sdUlEMGdLSEJ5YjJkeVpYTnpMQ0J6ZEhKbGJtZDBhQ2tnUFQ0Z2JXVjBhRzlrS0hCeWIyZHlaWE56TENCemRISmxibWQwYUNrN1hHNGdJQ0FnWldGemFXNW5SblZ1WTNScGIyNHViM1YwSUQwZ2NtVjJaWEp6WlVWaGMybHVaeWh0WlhSb2IyUXBPMXh1SUNBZ0lHVmhjMmx1WjBaMWJtTjBhVzl1TG1sdVQzVjBJRDBnYldseWNtOXlSV0Z6YVc1bktHMWxkR2h2WkNrN1hHNWNiaUFnSUNCeVpYUjFjbTRnWldGemFXNW5SblZ1WTNScGIyNDdYRzU5WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvZWFzaW5nL2NyZWF0ZS1lYXNpbmcuanNcbiAqKiBtb2R1bGUgaWQgPSA1MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gY3ViaWNCZXppZXI7XG4vKlxuICAgIEJlemllciBmdW5jdGlvbiBnZW5lcmF0b3JcbiAgICAgICAgXG4gICAgR2HDq3RhbiBSZW5hdWRlYXUncyBCZXppZXJFYXNpbmdcbiAgICBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNpbmcvYmxvYi9tYXN0ZXIvaW5kZXguanMgIFxuICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9MSUNFTlNFXG4gICAgWW91J3JlIGEgaGVyb1xuICAgIFxuICAgIFVzZVxuICAgIFxuICAgICAgICB2YXIgZWFzZU91dCA9IG5ldyBCZXppZXIoLjE3LC42NywuODMsLjY3KSxcbiAgICAgICAgICAgIHggPSBlYXNlT3V0KDAuNSk7IC8vIHJldHVybnMgMC42MjcuLi5cbiovXG5cbi8vIENvbnN0YW50c1xudmFyIE5FV1RPTl9JVEVSQVRJT05TID0gODtcbnZhciBORVdUT05fTUlOX1NMT1BFID0gMC4wMDE7XG52YXIgU1VCRElWSVNJT05fUFJFQ0lTSU9OID0gMC4wMDAwMDAxO1xudmFyIFNVQkRJVklTSU9OX01BWF9JVEVSQVRJT05TID0gMTA7XG52YXIgS19TUExJTkVfVEFCTEVfU0laRSA9IDExO1xudmFyIEtfU0FNUExFX1NURVBfU0laRSA9IDEuMCAvIChLX1NQTElORV9UQUJMRV9TSVpFIC0gMS4wKTtcbnZhciBGTE9BVF8zMl9TVVBQT1JURUQgPSB0eXBlb2YgRmxvYXQzMkFycmF5ICE9PSAndW5kZWZpbmVkJztcblxuLy8gSGVscGVyIG1ldGhvZHNcbnZhciBhID0gZnVuY3Rpb24gKGExLCBhMikge1xuICAgIHJldHVybiAxLjAgLSAzLjAgKiBhMiArIDMuMCAqIGExO1xufTtcbnZhciBiID0gZnVuY3Rpb24gKGExLCBhMikge1xuICAgIHJldHVybiAzLjAgKiBhMiAtIDYuMCAqIGExO1xufTtcbnZhciBjID0gZnVuY3Rpb24gKGExKSB7XG4gICAgcmV0dXJuIDMuMCAqIGExO1xufTtcblxudmFyIGdldFNsb3BlID0gZnVuY3Rpb24gKHQsIGExLCBhMikge1xuICAgIHJldHVybiAzLjAgKiBhKGExLCBhMikgKiB0ICogdCArIDIuMCAqIGIoYTEsIGEyKSAqIHQgKyBjKGExKTtcbn07XG5cbnZhciBjYWxjQmV6aWVyID0gZnVuY3Rpb24gKHQsIGExLCBhMikge1xuICAgIHJldHVybiAoKGEoYTEsIGEyKSAqIHQgKyBiKGExLCBhMikpICogdCArIGMoYTEpKSAqIHQ7XG59O1xuXG4vKlxuICAgIENyZWF0ZSBhIGN1YmljIGJlemllciByZXNvbHZlclxuKi9cbmZ1bmN0aW9uIGN1YmljQmV6aWVyKG1YMSwgbVkxLCBtWDIsIG1ZMikge1xuICAgIHZhciBzYW1wbGVWYWx1ZXMgPSBGTE9BVF8zMl9TVVBQT1JURUQgPyBuZXcgRmxvYXQzMkFycmF5KEtfU1BMSU5FX1RBQkxFX1NJWkUpIDogbmV3IEFycmF5KEtfU1BMSU5FX1RBQkxFX1NJWkUpO1xuICAgIHZhciBfcHJlY29tcHV0ZWQgPSBmYWxzZTtcblxuICAgIHZhciBiaW5hcnlTdWJkaXZpZGUgPSBmdW5jdGlvbiAoYVgsIGFBLCBhQikge1xuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIHZhciBjdXJyZW50WCA9IHZvaWQgMDtcbiAgICAgICAgdmFyIGN1cnJlbnRUID0gdm9pZCAwO1xuXG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGN1cnJlbnRUID0gYUEgKyAoYUIgLSBhQSkgLyAyLjA7XG4gICAgICAgICAgICBjdXJyZW50WCA9IGNhbGNCZXppZXIoY3VycmVudFQsIG1YMSwgbVgyKSAtIGFYO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRYID4gMC4wKSB7XG4gICAgICAgICAgICAgICAgYUIgPSBjdXJyZW50VDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYUEgPSBjdXJyZW50VDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSB3aGlsZSAoTWF0aC5hYnMoY3VycmVudFgpID4gU1VCRElWSVNJT05fUFJFQ0lTSU9OICYmICsraSA8IFNVQkRJVklTSU9OX01BWF9JVEVSQVRJT05TKTtcblxuICAgICAgICByZXR1cm4gY3VycmVudFQ7XG4gICAgfTtcblxuICAgIHZhciBuZXd0b25SYXBoc29uSXRlcmF0ZSA9IGZ1bmN0aW9uIChhWCwgYUd1ZXNzVCkge1xuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIHZhciBjdXJyZW50U2xvcGUgPSAwO1xuICAgICAgICB2YXIgY3VycmVudFggPSB2b2lkIDA7XG5cbiAgICAgICAgZm9yICg7IGkgPCBORVdUT05fSVRFUkFUSU9OUzsgKytpKSB7XG4gICAgICAgICAgICBjdXJyZW50U2xvcGUgPSBnZXRTbG9wZShhR3Vlc3NULCBtWDEsIG1YMik7XG5cbiAgICAgICAgICAgIGlmIChjdXJyZW50U2xvcGUgPT09IDAuMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhR3Vlc3NUO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjdXJyZW50WCA9IGNhbGNCZXppZXIoYUd1ZXNzVCwgbVgxLCBtWDIpIC0gYVg7XG4gICAgICAgICAgICBhR3Vlc3NUIC09IGN1cnJlbnRYIC8gY3VycmVudFNsb3BlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFHdWVzc1Q7XG4gICAgfTtcblxuICAgIHZhciBjYWxjU2FtcGxlVmFsdWVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IEtfU1BMSU5FX1RBQkxFX1NJWkU7ICsraSkge1xuICAgICAgICAgICAgc2FtcGxlVmFsdWVzW2ldID0gY2FsY0JlemllcihpICogS19TQU1QTEVfU1RFUF9TSVpFLCBtWDEsIG1YMik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIGdldFRGb3JYID0gZnVuY3Rpb24gKGFYKSB7XG4gICAgICAgIHZhciBpbnRlcnZhbFN0YXJ0ID0gMC4wO1xuICAgICAgICB2YXIgY3VycmVudFNhbXBsZSA9IDE7XG4gICAgICAgIHZhciBsYXN0U2FtcGxlID0gS19TUExJTkVfVEFCTEVfU0laRSAtIDE7XG4gICAgICAgIHZhciBkaXN0ID0gMC4wO1xuICAgICAgICB2YXIgZ3Vlc3NGb3JUID0gMC4wO1xuICAgICAgICB2YXIgaW5pdGlhbFNsb3BlID0gMC4wO1xuXG4gICAgICAgIGZvciAoOyBjdXJyZW50U2FtcGxlICE9IGxhc3RTYW1wbGUgJiYgc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdIDw9IGFYOyArK2N1cnJlbnRTYW1wbGUpIHtcbiAgICAgICAgICAgIGludGVydmFsU3RhcnQgKz0gS19TQU1QTEVfU1RFUF9TSVpFO1xuICAgICAgICB9XG5cbiAgICAgICAgLS1jdXJyZW50U2FtcGxlO1xuXG4gICAgICAgIGRpc3QgPSAoYVggLSBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0pIC8gKHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlICsgMV0gLSBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0pO1xuICAgICAgICBndWVzc0ZvclQgPSBpbnRlcnZhbFN0YXJ0ICsgZGlzdCAqIEtfU0FNUExFX1NURVBfU0laRTtcblxuICAgICAgICBpbml0aWFsU2xvcGUgPSBnZXRTbG9wZShndWVzc0ZvclQsIG1YMSwgbVgyKTtcblxuICAgICAgICAvLyBJZiBzbG9wZSBpcyBncmVhdGVyIHRoYW4gbWluXG4gICAgICAgIGlmIChpbml0aWFsU2xvcGUgPj0gTkVXVE9OX01JTl9TTE9QRSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ld3RvblJhcGhzb25JdGVyYXRlKGFYLCBndWVzc0ZvclQpO1xuICAgICAgICAgICAgLy8gU2xvcGUgaXMgZXF1YWwgdG8gbWluXG4gICAgICAgIH0gZWxzZSBpZiAoaW5pdGlhbFNsb3BlID09PSAwLjApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ3Vlc3NGb3JUO1xuICAgICAgICAgICAgICAgIC8vIFNsb3BlIGlzIGxlc3MgdGhhbiBtaW5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBiaW5hcnlTdWJkaXZpZGUoYVgsIGludGVydmFsU3RhcnQsIGludGVydmFsU3RhcnQgKyBLX1NBTVBMRV9TVEVQX1NJWkUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIHByZWNvbXB1dGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF9wcmVjb21wdXRlZCA9IHRydWU7XG4gICAgICAgIGlmIChtWDEgIT0gbVkxIHx8IG1YMiAhPSBtWTIpIHtcbiAgICAgICAgICAgIGNhbGNTYW1wbGVWYWx1ZXMoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgcmVzb2x2ZXIgPSBmdW5jdGlvbiAoYVgpIHtcbiAgICAgICAgdmFyIHJldHVyblZhbHVlID0gdm9pZCAwO1xuXG4gICAgICAgIGlmICghX3ByZWNvbXB1dGVkKSB7XG4gICAgICAgICAgICBwcmVjb21wdXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBsaW5lYXIgZ3JhZGllbnQsIHJldHVybiBYIGFzIFRcbiAgICAgICAgaWYgKG1YMSA9PT0gbVkxICYmIG1YMiA9PT0gbVkyKSB7XG4gICAgICAgICAgICByZXR1cm5WYWx1ZSA9IGFYO1xuXG4gICAgICAgICAgICAvLyBJZiBhdCBzdGFydCwgcmV0dXJuIDBcbiAgICAgICAgfSBlbHNlIGlmIChhWCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVyblZhbHVlID0gMDtcblxuICAgICAgICAgICAgICAgIC8vIElmIGF0IGVuZCwgcmV0dXJuIDFcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYVggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblZhbHVlID0gY2FsY0JlemllcihnZXRURm9yWChhWCksIG1ZMSwgbVkyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICAgIH07XG5cbiAgICByZXR1cm4gcmVzb2x2ZXI7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwyVmhjMmx1Wnk5amNtVmhkR1V0WW1WNmFXVnlMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3p0clFrRnRRM2RDT3pzN096czdPenM3T3pzN096czdPMEZCY0VKNFFpeEpRVUZOTEc5Q1FVRnZRaXhEUVVGd1FqdEJRVU5PTEVsQlFVMHNiVUpCUVcxQ0xFdEJRVzVDTzBGQlEwNHNTVUZCVFN4M1FrRkJkMElzVTBGQmVFSTdRVUZEVGl4SlFVRk5MRFpDUVVFMlFpeEZRVUUzUWp0QlFVTk9MRWxCUVUwc2MwSkJRWE5DTEVWQlFYUkNPMEZCUTA0c1NVRkJUU3h4UWtGQmNVSXNUMEZCVHl4elFrRkJjMElzUjBGQmRFSXNRMEZCVUR0QlFVTXpRaXhKUVVGTkxIRkNRVUZ6UWl4UFFVRlBMRmxCUVZBc1MwRkJkMElzVjBGQmVFSTdPenRCUVVjMVFpeEpRVUZOTEVsQlFVa3NWVUZCUXl4RlFVRkVMRVZCUVVzc1JVRkJURHRYUVVGWkxFMUJRVTBzVFVGQlRTeEZRVUZPTEVkQlFWY3NUVUZCVFN4RlFVRk9PME5CUVRkQ08wRkJRMVlzU1VGQlRTeEpRVUZKTEZWQlFVTXNSVUZCUkN4RlFVRkxMRVZCUVV3N1YwRkJXU3hOUVVGTkxFVkJRVTRzUjBGQlZ5eE5RVUZOTEVWQlFVNDdRMEZCZGtJN1FVRkRWaXhKUVVGTkxFbEJRVWtzVlVGQlF5eEZRVUZFTzFkQlFWRXNUVUZCVFN4RlFVRk9PME5CUVZJN08wRkJSVllzU1VGQlRTeFhRVUZYTEZWQlFVTXNRMEZCUkN4RlFVRkpMRVZCUVVvc1JVRkJVU3hGUVVGU08xZEJRV1VzVFVGQlRTeEZRVUZGTEVWQlFVWXNSVUZCVFN4RlFVRk9MRU5CUVU0c1IwRkJhMElzUTBGQmJFSXNSMEZCYzBJc1EwRkJkRUlzUjBGQk1FSXNUVUZCVFN4RlFVRkZMRVZCUVVZc1JVRkJUU3hGUVVGT0xFTkJRVTRzUjBGQmEwSXNRMEZCYkVJc1IwRkJjMElzUlVGQlJTeEZRVUZHTEVOQlFXaEVPME5CUVdZN08wRkJSV3BDTEVsQlFVMHNZVUZCWVN4VlFVRkRMRU5CUVVRc1JVRkJTU3hGUVVGS0xFVkJRVkVzUlVGQlVqdFhRVUZsTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVZc1JVRkJUU3hGUVVGT0xFbEJRVmtzUTBGQldpeEhRVUZuUWl4RlFVRkZMRVZCUVVZc1JVRkJUU3hGUVVGT0xFTkJRV2hDTEVOQlFVUXNSMEZCT0VJc1EwRkJPVUlzUjBGQmEwTXNSVUZCUlN4RlFVRkdMRU5CUVd4RExFTkJRVVFzUjBGQk5FTXNRMEZCTlVNN1EwRkJaanM3T3pzN1FVRkxTaXhUUVVGVExGZEJRVlFzUTBGQmNVSXNSMEZCY2tJc1JVRkJNRUlzUjBGQk1VSXNSVUZCSzBJc1IwRkJMMElzUlVGQmIwTXNSMEZCY0VNc1JVRkJlVU03UVVGRGNFUXNVVUZCVFN4bFFVRmxMSEZDUVVGeFFpeEpRVUZKTEZsQlFVb3NRMEZCYVVJc2JVSkJRV3BDTEVOQlFYSkNMRWRCUVRaRUxFbEJRVWtzUzBGQlNpeERRVUZWTEcxQ1FVRldMRU5CUVRkRUxFTkJSQ3RDTzBGQlJYQkVMRkZCUVVrc1pVRkJaU3hMUVVGbUxFTkJSbWRFT3p0QlFVbHdSQ3hSUVVGTkxHdENRVUZyUWl4VlFVRkRMRVZCUVVRc1JVRkJTeXhGUVVGTUxFVkJRVk1zUlVGQlZDeEZRVUZuUWp0QlFVTndReXhaUVVGSkxFbEJRVWtzUTBGQlNpeERRVVJuUXp0QlFVVndReXhaUVVGSkxHbENRVUZLTEVOQlJtOURPMEZCUjNCRExGbEJRVWtzYVVKQlFVb3NRMEZJYjBNN08wRkJTM0JETEZkQlFVYzdRVUZEUXl4MVFrRkJWeXhMUVVGTExFTkJRVU1zUzBGQlN5eEZRVUZNTEVOQlFVUXNSMEZCV1N4SFFVRmFMRU5CUkdwQ08wRkJSVU1zZFVKQlFWY3NWMEZCVnl4UlFVRllMRVZCUVhGQ0xFZEJRWEpDTEVWQlFUQkNMRWRCUVRGQ0xFbEJRV2xETEVWQlFXcERMRU5CUmxvN1FVRkhReXhuUWtGQlNTeFhRVUZYTEVkQlFWZ3NSVUZCWjBJN1FVRkRhRUlzY1VKQlFVc3NVVUZCVEN4RFFVUm5RanRoUVVGd1FpeE5RVVZQTzBGQlEwZ3NjVUpCUVVzc1VVRkJUQ3hEUVVSSE8yRkJSbEE3VTBGSVNpeFJRVkZUTEV0QlFVc3NSMEZCVEN4RFFVRlRMRkZCUVZRc1NVRkJjVUlzY1VKQlFYSkNMRWxCUVRoRExFVkJRVVVzUTBGQlJpeEhRVUZOTERCQ1FVRk9MRVZCWW01Q096dEJRV1Z3UXl4bFFVRlBMRkZCUVZBc1EwRm1iME03UzBGQmFFSXNRMEZLTkVJN08wRkJjMEp3UkN4UlFVRk5MSFZDUVVGMVFpeFZRVUZETEVWQlFVUXNSVUZCU3l4UFFVRk1MRVZCUVdsQ08wRkJRekZETEZsQlFVa3NTVUZCU1N4RFFVRktMRU5CUkhORE8wRkJSVEZETEZsQlFVa3NaVUZCWlN4RFFVRm1MRU5CUm5ORE8wRkJSekZETEZsQlFVa3NhVUpCUVVvc1EwRklNRU03TzBGQlN6RkRMR1ZCUVU4c1NVRkJTU3hwUWtGQlNpeEZRVUYxUWl4RlFVRkZMRU5CUVVZc1JVRkJTenRCUVVNdlFpd3lRa0ZCWlN4VFFVRlRMRTlCUVZRc1JVRkJhMElzUjBGQmJFSXNSVUZCZFVJc1IwRkJka0lzUTBGQlppeERRVVFyUWpzN1FVRkhMMElzWjBKQlFVa3NhVUpCUVdsQ0xFZEJRV3BDTEVWQlFYTkNPMEZCUTNSQ0xIVkNRVUZQTEU5QlFWQXNRMEZFYzBJN1lVRkJNVUk3TzBGQlNVRXNkVUpCUVZjc1YwRkJWeXhQUVVGWUxFVkJRVzlDTEVkQlFYQkNMRVZCUVhsQ0xFZEJRWHBDTEVsQlFXZERMRVZCUVdoRExFTkJVRzlDTzBGQlVTOUNMSFZDUVVGWExGZEJRVmNzV1VGQldDeERRVkp2UWp0VFFVRnVRenM3UVVGWFFTeGxRVUZQTEU5QlFWQXNRMEZvUWpCRE8wdEJRV3BDTEVOQmRFSjFRanM3UVVGNVEzQkVMRkZCUVUwc2JVSkJRVzFDTEZsQlFVMDdRVUZETTBJc1lVRkJTeXhKUVVGSkxFbEJRVWtzUTBGQlNpeEZRVUZQTEVsQlFVa3NiVUpCUVVvc1JVRkJlVUlzUlVGQlJTeERRVUZHTEVWQlFVczdRVUZETVVNc2VVSkJRV0VzUTBGQllpeEpRVUZyUWl4WFFVRlhMRWxCUVVrc2EwSkJRVW9zUlVGQmQwSXNSMEZCYmtNc1JVRkJkME1zUjBGQmVFTXNRMEZCYkVJc1EwRkVNRU03VTBGQk9VTTdTMEZFY1VJc1EwRjZRekpDT3p0QlFTdERjRVFzVVVGQlRTeFhRVUZYTEZWQlFVTXNSVUZCUkN4RlFVRlJPMEZCUTNKQ0xGbEJRVWtzWjBKQlFXZENMRWRCUVdoQ0xFTkJSR2xDTzBGQlJYSkNMRmxCUVVrc1owSkJRV2RDTEVOQlFXaENMRU5CUm1sQ08wRkJSM0pDTEZsQlFVa3NZVUZCWVN4elFrRkJjMElzUTBGQmRFSXNRMEZJU1R0QlFVbHlRaXhaUVVGSkxFOUJRVThzUjBGQlVDeERRVXBwUWp0QlFVdHlRaXhaUVVGSkxGbEJRVmtzUjBGQldpeERRVXhwUWp0QlFVMXlRaXhaUVVGSkxHVkJRV1VzUjBGQlppeERRVTVwUWpzN1FVRlJja0lzWlVGQlR5eHBRa0ZCYVVJc1ZVRkJha0lzU1VGQkswSXNZVUZCWVN4aFFVRmlMRXRCUVN0Q0xFVkJRUzlDTEVWQlFXMURMRVZCUVVVc1lVRkJSaXhGUVVGcFFqdEJRVU4wUml3MlFrRkJhVUlzYTBKQlFXcENMRU5CUkhOR08xTkJRVEZHT3p0QlFVbEJMRlZCUVVVc1lVRkJSaXhEUVZweFFqczdRVUZqY2tJc1pVRkJUeXhEUVVGRExFdEJRVXNzWVVGQllTeGhRVUZpTEVOQlFVd3NRMEZCUkN4SlFVRnpReXhoUVVGaExHZENRVUZqTEVOQlFXUXNRMEZCWWl4SFFVRm5ReXhoUVVGaExHRkJRV0lzUTBGQmFFTXNRMEZCZEVNc1EwRmtZenRCUVdWeVFpeHZRa0ZCV1N4blFrRkJaMElzVDBGQlR5eHJRa0ZCVUN4RFFXWlFPenRCUVdsQ2NrSXNkVUpCUVdVc1UwRkJVeXhUUVVGVUxFVkJRVzlDTEVkQlFYQkNMRVZCUVhsQ0xFZEJRWHBDTEVOQlFXWTdPenRCUVdwQ2NVSXNXVUZ2UW1wQ0xHZENRVUZuUWl4blFrRkJhRUlzUlVGQmEwTTdRVUZEYkVNc2JVSkJRVThzY1VKQlFYRkNMRVZCUVhKQ0xFVkJRWGxDTEZOQlFYcENMRU5CUVZBN08wRkJSR3RETEZOQlFYUkRMRTFCUjA4c1NVRkJTU3hwUWtGQmFVSXNSMEZCYWtJc1JVRkJjMEk3UVVGRE4wSXNkVUpCUVU4c1UwRkJVRHM3UVVGRU5rSXNZVUZCTVVJc1RVRkhRVHRCUVVOSUxESkNRVUZQTEdkQ1FVRm5RaXhGUVVGb1FpeEZRVUZ2UWl4aFFVRndRaXhGUVVGdFF5eG5Ra0ZCWjBJc2EwSkJRV2hDTEVOQlFURkRMRU5CUkVjN2FVSkJTRUU3UzBGMlFrMHNRMEV2UTIxRE96dEJRVGhGY0VRc1VVRkJUU3hoUVVGaExGbEJRVTA3UVVGRGNrSXNkVUpCUVdVc1NVRkJaaXhEUVVSeFFqdEJRVVZ5UWl4WlFVRkpMRTlCUVU4c1IwRkJVQ3hKUVVGakxFOUJRVThzUjBGQlVDeEZRVUZaTzBGQlF6RkNMQ3RDUVVRd1FqdFRRVUU1UWp0TFFVWmxMRU5CT1VWcFF6czdRVUZ4Um5CRUxGRkJRVTBzVjBGQlZ5eFZRVUZETEVWQlFVUXNSVUZCVVR0QlFVTnlRaXhaUVVGSkxHOUNRVUZLTEVOQlJIRkNPenRCUVVkeVFpeFpRVUZKTEVOQlFVTXNXVUZCUkN4RlFVRmxPMEZCUTJZc2VVSkJSR1U3VTBGQmJrSTdPenRCUVVoeFFpeFpRVkZxUWl4UlFVRlJMRWRCUVZJc1NVRkJaU3hSUVVGUkxFZEJRVklzUlVGQllUdEJRVU0xUWl3d1FrRkJZeXhGUVVGa096czdRVUZFTkVJc1UwRkJhRU1zVFVGSlR5eEpRVUZKTEU5QlFVOHNRMEZCVUN4RlFVRlZPMEZCUTJwQ0xEaENRVUZqTEVOQlFXUTdPenRCUVVScFFpeGhRVUZrTEUxQlNVRXNTVUZCU1N4UFFVRlBMRU5CUVZBc1JVRkJWVHRCUVVOcVFpeHJRMEZCWXl4RFFVRmtMRU5CUkdsQ08ybENRVUZrTEUxQlIwRTdRVUZEU0N4clEwRkJZeXhYUVVGWExGTkJRVk1zUlVGQlZDeERRVUZZTEVWQlFYbENMRWRCUVhwQ0xFVkJRVGhDTEVkQlFUbENMRU5CUVdRc1EwRkVSenRwUWtGSVFUczdRVUZQVUN4bFFVRlBMRmRCUVZBc1EwRjJRbkZDTzB0QlFWSXNRMEZ5Um0xRE96dEJRU3RIY0VRc1YwRkJUeXhSUVVGUUxFTkJMMGR2UkR0RFFVRjZReUlzSW1acGJHVWlPaUpqY21WaGRHVXRZbVY2YVdWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaThxWEc0Z0lDQWdRbVY2YVdWeUlHWjFibU4wYVc5dUlHZGxibVZ5WVhSdmNseHVJQ0FnSUNBZ0lDQmNiaUFnSUNCSFljT3JkR0Z1SUZKbGJtRjFaR1ZoZFNkeklFSmxlbWxsY2tWaGMybHVaMXh1SUNBZ0lHaDBkSEJ6T2k4dloybDBhSFZpTG1OdmJTOW5jbVV2WW1WNmFXVnlMV1ZoYzJsdVp5OWliRzlpTDIxaGMzUmxjaTlwYm1SbGVDNXFjeUFnWEc0Z0lDQWdhSFIwY0hNNkx5OW5hWFJvZFdJdVkyOXRMMmR5WlM5aVpYcHBaWEl0WldGemFXNW5MMkpzYjJJdmJXRnpkR1Z5TDB4SlEwVk9VMFZjYmlBZ0lDQlpiM1VuY21VZ1lTQm9aWEp2WEc0Z0lDQWdYRzRnSUNBZ1ZYTmxYRzRnSUNBZ1hHNGdJQ0FnSUNBZ0lIWmhjaUJsWVhObFQzVjBJRDBnYm1WM0lFSmxlbWxsY2lndU1UY3NMalkzTEM0NE15d3VOamNwTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdlQ0E5SUdWaGMyVlBkWFFvTUM0MUtUc2dMeThnY21WMGRYSnVjeUF3TGpZeU55NHVMbHh1S2k5Y2JseHVMeThnUTI5dWMzUmhiblJ6WEc1amIyNXpkQ0JPUlZkVVQwNWZTVlJGVWtGVVNVOU9VeUE5SURnN1hHNWpiMjV6ZENCT1JWZFVUMDVmVFVsT1gxTk1UMUJGSUQwZ01DNHdNREU3WEc1amIyNXpkQ0JUVlVKRVNWWkpVMGxQVGw5UVVrVkRTVk5KVDA0Z1BTQXdMakF3TURBd01ERTdYRzVqYjI1emRDQlRWVUpFU1ZaSlUwbFBUbDlOUVZoZlNWUkZVa0ZVU1U5T1V5QTlJREV3TzF4dVkyOXVjM1FnUzE5VFVFeEpUa1ZmVkVGQ1RFVmZVMGxhUlNBOUlERXhPMXh1WTI5dWMzUWdTMTlUUVUxUVRFVmZVMVJGVUY5VFNWcEZJRDBnTVM0d0lDOGdLRXRmVTFCTVNVNUZYMVJCUWt4RlgxTkpXa1VnTFNBeExqQXBPMXh1WTI5dWMzUWdSa3hQUVZSZk16SmZVMVZRVUU5U1ZFVkVJRDBnS0hSNWNHVnZaaUJHYkc5aGRETXlRWEp5WVhrZ0lUMDlJQ2QxYm1SbFptbHVaV1FuS1R0Y2JseHVMeThnU0dWc2NHVnlJRzFsZEdodlpITmNibU52Ym5OMElHRWdQU0FvWVRFc0lHRXlLU0E5UGlBeExqQWdMU0F6TGpBZ0tpQmhNaUFySURNdU1DQXFJR0V4TzF4dVkyOXVjM1FnWWlBOUlDaGhNU3dnWVRJcElEMCtJRE11TUNBcUlHRXlJQzBnTmk0d0lDb2dZVEU3WEc1amIyNXpkQ0JqSUQwZ0tHRXhLU0E5UGlBekxqQWdLaUJoTVR0Y2JseHVZMjl1YzNRZ1oyVjBVMnh2Y0dVZ1BTQW9kQ3dnWVRFc0lHRXlLU0E5UGlBekxqQWdLaUJoS0dFeExDQmhNaWtnS2lCMElDb2dkQ0FySURJdU1DQXFJR0lvWVRFc0lHRXlLU0FxSUhRZ0t5QmpLR0V4S1R0Y2JseHVZMjl1YzNRZ1kyRnNZMEpsZW1sbGNpQTlJQ2gwTENCaE1Td2dZVElwSUQwK0lDZ29ZU2hoTVN3Z1lUSXBJQ29nZENBcklHSW9ZVEVzSUdFeUtTa2dLaUIwSUNzZ1l5aGhNU2twSUNvZ2REdGNibHh1THlwY2JpQWdJQ0JEY21WaGRHVWdZU0JqZFdKcFl5QmlaWHBwWlhJZ2NtVnpiMngyWlhKY2Jpb3ZYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQm1kVzVqZEdsdmJpQmpkV0pwWTBKbGVtbGxjaWh0V0RFc0lHMVpNU3dnYlZneUxDQnRXVElwSUh0Y2JpQWdJQ0JqYjI1emRDQnpZVzF3YkdWV1lXeDFaWE1nUFNCR1RFOUJWRjh6TWw5VFZWQlFUMUpVUlVRZ1B5QnVaWGNnUm14dllYUXpNa0Z5Y21GNUtFdGZVMUJNU1U1RlgxUkJRa3hGWDFOSldrVXBJRG9nYm1WM0lFRnljbUY1S0V0ZlUxQk1TVTVGWDFSQlFreEZYMU5KV2tVcE8xeHVJQ0FnSUd4bGRDQmZjSEpsWTI5dGNIVjBaV1FnUFNCbVlXeHpaVHRjYmx4dUlDQWdJR052Ym5OMElHSnBibUZ5ZVZOMVltUnBkbWxrWlNBOUlDaGhXQ3dnWVVFc0lHRkNLU0E5UGlCN1hHNGdJQ0FnSUNBZ0lHeGxkQ0JwSUQwZ01EdGNiaUFnSUNBZ0lDQWdiR1YwSUdOMWNuSmxiblJZTzF4dUlDQWdJQ0FnSUNCc1pYUWdZM1Z5Y21WdWRGUTdYRzVjYmlBZ0lDQWdJQ0FnWkc4Z2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWTNWeWNtVnVkRlFnUFNCaFFTQXJJQ2hoUWlBdElHRkJLU0F2SURJdU1EdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOMWNuSmxiblJZSUQwZ1kyRnNZMEpsZW1sbGNpaGpkWEp5Wlc1MFZDd2diVmd4TENCdFdESXBJQzBnWVZnN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb1kzVnljbVZ1ZEZnZ1BpQXdMakFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCaFFpQTlJR04xY25KbGJuUlVPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCaFFTQTlJR04xY25KbGJuUlVPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlJSGRvYVd4bElDaE5ZWFJvTG1GaWN5aGpkWEp5Wlc1MFdDa2dQaUJUVlVKRVNWWkpVMGxQVGw5UVVrVkRTVk5KVDA0Z0ppWWdLeXRwSUR3Z1UxVkNSRWxXU1ZOSlQwNWZUVUZZWDBsVVJWSkJWRWxQVGxNcE8xeHVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQmpkWEp5Wlc1MFZEdGNiaUFnSUNCOU8xeHVYRzRnSUNBZ1kyOXVjM1FnYm1WM2RHOXVVbUZ3YUhOdmJrbDBaWEpoZEdVZ1BTQW9ZVmdzSUdGSGRXVnpjMVFwSUQwK0lIdGNiaUFnSUNBZ0lDQWdiR1YwSUdrZ1BTQXdPMXh1SUNBZ0lDQWdJQ0JzWlhRZ1kzVnljbVZ1ZEZOc2IzQmxJRDBnTUR0Y2JpQWdJQ0FnSUNBZ2JHVjBJR04xY25KbGJuUllPMXh1WEc0Z0lDQWdJQ0FnSUdadmNpQW9PeUJwSUR3Z1RrVlhWRTlPWDBsVVJWSkJWRWxQVGxNN0lDc3JhU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdZM1Z5Y21WdWRGTnNiM0JsSUQwZ1oyVjBVMnh2Y0dVb1lVZDFaWE56VkN3Z2JWZ3hMQ0J0V0RJcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvWTNWeWNtVnVkRk5zYjNCbElEMDlQU0F3TGpBcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z1lVZDFaWE56VkR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQWdJQ0FnWTNWeWNtVnVkRmdnUFNCallXeGpRbVY2YVdWeUtHRkhkV1Z6YzFRc0lHMVlNU3dnYlZneUtTQXRJR0ZZTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZVWQxWlhOelZDQXRQU0JqZFhKeVpXNTBXQ0F2SUdOMWNuSmxiblJUYkc5d1pUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR0ZIZFdWemMxUTdYRzRnSUNBZ2ZUdGNibHh1SUNBZ0lHTnZibk4wSUdOaGJHTlRZVzF3YkdWV1lXeDFaWE1nUFNBb0tTQTlQaUI3WEc0Z0lDQWdJQ0FnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z1MxOVRVRXhKVGtWZlZFRkNURVZmVTBsYVJUc2dLeXRwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J6WVcxd2JHVldZV3gxWlhOYmFWMGdQU0JqWVd4alFtVjZhV1Z5S0drZ0tpQkxYMU5CVFZCTVJWOVRWRVZRWDFOSldrVXNJRzFZTVN3Z2JWZ3lLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDA3WEc1Y2JpQWdJQ0JqYjI1emRDQm5aWFJVUm05eVdDQTlJQ2hoV0NrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0JzWlhRZ2FXNTBaWEoyWVd4VGRHRnlkQ0E5SURBdU1EdGNiaUFnSUNBZ0lDQWdiR1YwSUdOMWNuSmxiblJUWVcxd2JHVWdQU0F4TzF4dUlDQWdJQ0FnSUNCc1pYUWdiR0Z6ZEZOaGJYQnNaU0E5SUV0ZlUxQk1TVTVGWDFSQlFreEZYMU5KV2tVZ0xTQXhPMXh1SUNBZ0lDQWdJQ0JzWlhRZ1pHbHpkQ0E5SURBdU1EdGNiaUFnSUNBZ0lDQWdiR1YwSUdkMVpYTnpSbTl5VkNBOUlEQXVNRHRjYmlBZ0lDQWdJQ0FnYkdWMElHbHVhWFJwWVd4VGJHOXdaU0E5SURBdU1EdGNiaUFnSUNBZ0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNCbWIzSWdLRHNnWTNWeWNtVnVkRk5oYlhCc1pTQWhQU0JzWVhOMFUyRnRjR3hsSUNZbUlITmhiWEJzWlZaaGJIVmxjMXRqZFhKeVpXNTBVMkZ0Y0d4bFhTQThQU0JoV0RzZ0t5dGpkWEp5Wlc1MFUyRnRjR3hsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwYm5SbGNuWmhiRk4wWVhKMElDczlJRXRmVTBGTlVFeEZYMU5VUlZCZlUwbGFSVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ0xTMWpkWEp5Wlc1MFUyRnRjR3hsTzF4dUlDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ1pHbHpkQ0E5SUNoaFdDQXRJSE5oYlhCc1pWWmhiSFZsYzF0amRYSnlaVzUwVTJGdGNHeGxYU2tnTHlBb2MyRnRjR3hsVm1Gc2RXVnpXMk4xY25KbGJuUlRZVzF3YkdVck1WMGdMU0J6WVcxd2JHVldZV3gxWlhOYlkzVnljbVZ1ZEZOaGJYQnNaVjBwTzF4dUlDQWdJQ0FnSUNCbmRXVnpjMFp2Y2xRZ1BTQnBiblJsY25aaGJGTjBZWEowSUNzZ1pHbHpkQ0FxSUV0ZlUwRk5VRXhGWDFOVVJWQmZVMGxhUlR0Y2JpQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lHbHVhWFJwWVd4VGJHOXdaU0E5SUdkbGRGTnNiM0JsS0dkMVpYTnpSbTl5VkN3Z2JWZ3hMQ0J0V0RJcE8xeHVJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdMeThnU1dZZ2MyeHZjR1VnYVhNZ1ozSmxZWFJsY2lCMGFHRnVJRzFwYmx4dUlDQWdJQ0FnSUNCcFppQW9hVzVwZEdsaGJGTnNiM0JsSUQ0OUlFNUZWMVJQVGw5TlNVNWZVMHhQVUVVcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJ1WlhkMGIyNVNZWEJvYzI5dVNYUmxjbUYwWlNoaFdDd2daM1ZsYzNOR2IzSlVLVHRjYmlBZ0lDQWdJQ0FnTHk4Z1UyeHZjR1VnYVhNZ1pYRjFZV3dnZEc4Z2JXbHVYRzRnSUNBZ0lDQWdJSDBnWld4elpTQnBaaUFvYVc1cGRHbGhiRk5zYjNCbElEMDlQU0F3TGpBcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJuZFdWemMwWnZjbFE3WEc0Z0lDQWdJQ0FnSUM4dklGTnNiM0JsSUdseklHeGxjM01nZEdoaGJpQnRhVzVjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCaWFXNWhjbmxUZFdKa2FYWnBaR1VvWVZnc0lHbHVkR1Z5ZG1Gc1UzUmhjblFzSUdsdWRHVnlkbUZzVTNSaGNuUWdLeUJMWDFOQlRWQk1SVjlUVkVWUVgxTkpXa1VwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlR0Y2JseHVJQ0FnSUdOdmJuTjBJSEJ5WldOdmJYQjFkR1VnUFNBb0tTQTlQaUI3WEc0Z0lDQWdJQ0FnSUY5d2NtVmpiMjF3ZFhSbFpDQTlJSFJ5ZFdVN1hHNGdJQ0FnSUNBZ0lHbG1JQ2h0V0RFZ0lUMGdiVmt4SUh4OElHMVlNaUFoUFNCdFdUSXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTmhiR05UWVcxd2JHVldZV3gxWlhNb0tUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMDdYRzVjYmlBZ0lDQmpiMjV6ZENCeVpYTnZiSFpsY2lBOUlDaGhXQ2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQnNaWFFnY21WMGRYSnVWbUZzZFdVN1hHNWNiaUFnSUNBZ0lDQWdhV1lnS0NGZmNISmxZMjl0Y0hWMFpXUXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIQnlaV052YlhCMWRHVW9LVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ0x5OGdTV1lnYkdsdVpXRnlJR2R5WVdScFpXNTBMQ0J5WlhSMWNtNGdXQ0JoY3lCVVhHNGdJQ0FnSUNBZ0lHbG1JQ2h0V0RFZ1BUMDlJRzFaTVNBbUppQnRXRElnUFQwOUlHMVpNaWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdVZtRnNkV1VnUFNCaFdEdGNiaUFnSUNBZ0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNBdkx5QkpaaUJoZENCemRHRnlkQ3dnY21WMGRYSnVJREJjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJR2xtSUNoaFdDQTlQVDBnTUNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVWbUZzZFdVZ1BTQXdPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lDOHZJRWxtSUdGMElHVnVaQ3dnY21WMGRYSnVJREZjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJR2xtSUNoaFdDQTlQVDBnTVNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVWbUZzZFdVZ1BTQXhPMXh1WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY201V1lXeDFaU0E5SUdOaGJHTkNaWHBwWlhJb1oyVjBWRVp2Y2xnb1lWZ3BMQ0J0V1RFc0lHMVpNaWs3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCeVpYUjFjbTVXWVd4MVpUdGNiaUFnSUNCOU8xeHVYRzRnSUNBZ2NtVjBkWEp1SUhKbGMyOXNkbVZ5TzF4dWZWeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL2Vhc2luZy9jcmVhdGUtYmV6aWVyLmpzXG4gKiogbW9kdWxlIGlkID0gNTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8qXG4gICAgRGV0ZWN0IGFuZCBsb2FkIGFuIGFwcHJvcHJpYXRlIGNsb2NrIHNldHRpbmcgZm9yIHRoZSBlbnZpcm9ubWVudFxuKi9cblxudmFyIGhhc1JBRiA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPyB0cnVlIDogZmFsc2U7XG5cbnZhciB0aWNrID0gdm9pZCAwO1xuXG5pZiAoaGFzUkFGKSB7XG4gICAgdGljayA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShjYWxsYmFjayk7XG4gICAgfTtcbn0gZWxzZSB7XG4gICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLypcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBGb3IgSUU4LzkgRmxpbnN0b25lcyBhbmQgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRzXG4gICAgICAgICAgICAgVGFrZW4gZnJvbSBQYXVsIElyaXNoLiBXZSd2ZSBzdHJpcHBlZCBvdXQgY2FuY2VsQW5pbWF0aW9uRnJhbWUgY2hlY2tzIGJlY2F1c2Ugd2UgZG9uJ3QgZm94IHdpdGggdGhhdFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBodHRwOi8vcGF1bGlyaXNoLmNvbS8yMDExL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtYW5pbWF0aW5nL1xuICAgICAgICAgICAgaHR0cDovL215Lm9wZXJhLmNvbS9lbW9sbGVyL2Jsb2cvMjAxMS8xMi8yMC9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWVyLWFuaW1hdGluZ1xuICAgICAgICAgICAgIFxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHBvbHlmaWxsIGJ5IEVyaWsgTcO2bGxlci4gZml4ZXMgZnJvbSBQYXVsIElyaXNoIGFuZCBUaW5vIFppamRlbFxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgTUlUIGxpY2Vuc2VcbiAgICAgICAgKi9cbiAgICAgICAgdmFyIGxhc3RUaW1lID0gMDtcblxuICAgICAgICB0aWNrID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB2YXIgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgIHZhciB0aW1lVG9DYWxsID0gTWF0aC5tYXgoMCwgMTYgLSAoY3VycmVudFRpbWUgLSBsYXN0VGltZSkpO1xuXG4gICAgICAgICAgICBsYXN0VGltZSA9IGN1cnJlbnRUaW1lICsgdGltZVRvQ2FsbDtcblxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGxhc3RUaW1lKTtcbiAgICAgICAgICAgIH0sIHRpbWVUb0NhbGwpO1xuICAgICAgICB9O1xuICAgIH0pKCk7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHRpY2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTBZWE5yTDNScFkyc3Vhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096dEJRVWxCTEVsQlFVMHNVMEZCVXl4UFFVRlJMRTFCUVZBc1MwRkJhMElzVjBGQmJFSXNTVUZCYVVNc1QwRkJUeXh4UWtGQlVDeEhRVUZuUXl4SlFVRnNSU3hIUVVGNVJTeExRVUY2UlRzN1FVRkZaaXhKUVVGSkxHRkJRVW83TzBGQlJVRXNTVUZCU1N4TlFVRktMRVZCUVZrN1FVRkRVaXhYUVVGUExGVkJRVU1zVVVGQlJEdGxRVUZqTEU5QlFVOHNjVUpCUVZBc1EwRkJOa0lzVVVGQk4wSTdTMEZCWkN4RFFVUkRPME5CUVZvc1RVRkhUenM3T3pzN096czdPenM3T3pzN08wRkJaVWdzV1VGQlNTeFhRVUZYTEVOQlFWZzdPMEZCUlVvc1pVRkJUeXhWUVVGRExGRkJRVVFzUlVGQll6dEJRVU5xUWl4blFrRkJUU3hqUVVGakxFbEJRVWtzU1VGQlNpeEhRVUZYTEU5QlFWZ3NSVUZCWkN4RFFVUlhPMEZCUldwQ0xHZENRVUZOTEdGQlFXRXNTMEZCU3l4SFFVRk1MRU5CUVZNc1EwRkJWQ3hGUVVGWkxFMUJRVTBzWTBGQll5eFJRVUZrTEVOQlFVNHNRMEZCZWtJc1EwRkdWenM3UVVGSmFrSXNkVUpCUVZjc1kwRkJZeXhWUVVGa0xFTkJTazA3TzBGQlRXcENMSFZDUVVGWE8zVkNRVUZOTEZOQlFWTXNVVUZCVkR0aFFVRk9MRVZCUVRCQ0xGVkJRWEpETEVWQlRtbENPMU5CUVdRN1UwRnFRa283UTBGSVVEczdhMEpCT0VKbElpd2labWxzWlNJNkluUnBZMnN1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUx5cGNiaUFnSUNCRVpYUmxZM1FnWVc1a0lHeHZZV1FnWVc0Z1lYQndjbTl3Y21saGRHVWdZMnh2WTJzZ2MyVjBkR2x1WnlCbWIzSWdkR2hsSUdWdWRtbHliMjV0Wlc1MFhHNHFMMXh1WEc1amIyNXpkQ0JvWVhOU1FVWWdQU0FvZEhsd1pXOW1JSGRwYm1SdmR5QWhQVDBnSjNWdVpHVm1hVzVsWkNjZ0ppWWdkMmx1Wkc5M0xuSmxjWFZsYzNSQmJtbHRZWFJwYjI1R2NtRnRaU2tnUHlCMGNuVmxJRG9nWm1Gc2MyVTdYRzVjYm14bGRDQjBhV05yTzF4dVhHNXBaaUFvYUdGelVrRkdLU0I3WEc0Z0lDQWdkR2xqYXlBOUlDaGpZV3hzWW1GamF5a2dQVDRnZDJsdVpHOTNMbkpsY1hWbGMzUkJibWx0WVhScGIyNUdjbUZ0WlNoallXeHNZbUZqYXlrN1hHNWNibjBnWld4elpTQjdYRzRnSUNBZ0x5cGNiaUFnSUNBZ0lDQWdjbVZ4ZFdWemRFRnVhVzFoZEdsdmJrWnlZVzFsSUhCdmJIbG1hV3hzWEc0Z0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNCR2IzSWdTVVU0THprZ1JteHBibk4wYjI1bGN5QmhibVFnYm05dUxXSnliM2R6WlhJZ1pXNTJhWEp2Ym0xbGJuUnpYRzVjYmlBZ0lDQWdJQ0FnVkdGclpXNGdabkp2YlNCUVlYVnNJRWx5YVhOb0xpQlhaU2QyWlNCemRISnBjSEJsWkNCdmRYUWdZMkZ1WTJWc1FXNXBiV0YwYVc5dVJuSmhiV1VnWTJobFkydHpJR0psWTJGMWMyVWdkMlVnWkc5dUozUWdabTk0SUhkcGRHZ2dkR2hoZEZ4dUlDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ2FIUjBjRG92TDNCaGRXeHBjbWx6YUM1amIyMHZNakF4TVM5eVpYRjFaWE4wWVc1cGJXRjBhVzl1Wm5KaGJXVXRabTl5TFhOdFlYSjBMV0Z1YVcxaGRHbHVaeTljYmlBZ0lDQWdJQ0FnYUhSMGNEb3ZMMjE1TG05d1pYSmhMbU52YlM5bGJXOXNiR1Z5TDJKc2IyY3ZNakF4TVM4eE1pOHlNQzl5WlhGMVpYTjBZVzVwYldGMGFXOXVabkpoYldVdFptOXlMWE50WVhKMExXVnlMV0Z1YVcxaGRHbHVaMXh1SUNBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUhKbGNYVmxjM1JCYm1sdFlYUnBiMjVHY21GdFpTQndiMng1Wm1sc2JDQmllU0JGY21scklFM0R0bXhzWlhJdUlHWnBlR1Z6SUdaeWIyMGdVR0YxYkNCSmNtbHphQ0JoYm1RZ1ZHbHVieUJhYVdwa1pXeGNiaUFnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0JOU1ZRZ2JHbGpaVzV6WlZ4dUlDQWdJQ292WEc0Z0lDQWdiR1YwSUd4aGMzUlVhVzFsSUQwZ01EdGNibHh1SUNBZ0lIUnBZMnNnUFNBb1kyRnNiR0poWTJzcElEMCtJSHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdZM1Z5Y21WdWRGUnBiV1VnUFNCdVpYY2dSR0YwWlNncExtZGxkRlJwYldVb0tUdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2RHbHRaVlJ2UTJGc2JDQTlJRTFoZEdndWJXRjRLREFzSURFMklDMGdLR04xY25KbGJuUlVhVzFsSUMwZ2JHRnpkRlJwYldVcEtUdGNibHh1SUNBZ0lDQWdJQ0JzWVhOMFZHbHRaU0E5SUdOMWNuSmxiblJVYVcxbElDc2dkR2x0WlZSdlEyRnNiRHRjYmx4dUlDQWdJQ0FnSUNCelpYUlVhVzFsYjNWMEtDZ3BJRDArSUdOaGJHeGlZV05yS0d4aGMzUlVhVzFsS1N3Z2RHbHRaVlJ2UTJGc2JDazdYRzRnSUNBZ2ZUdGNibjFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnZEdsamF6c2lYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy90YXNrL3RpY2suanNcbiAqKiBtb2R1bGUgaWQgPSA1MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vLyBbaW50XTogSW5jcmVtZW50ZWQgZm9yIGVhY2ggbmV3IHJ1bm5pbmcgdGFza1xudmFyIGN1cnJlbnRUYXNrSWQgPSAwO1xuXG4vLyBbaW50XTogTnVtYmVyIG9mIGFsbCBydW5uaW5nIHRhc2tlc1xudmFyIHRvdGFsUnVubmluZ0NvdW50ID0gMDtcblxuLy8gW2ludF06IE51bWJlciBvZiBydW5uaW5nIHRhc2tlcyBleGNsdWRpbmcgYmFja2dyb3VuZCB0YXNrZXNcbnZhciBub25CYWNrZ3JvdW5kUnVubmluZ0NvdW50ID0gMDtcblxuLy8gW2FycmF5XTogQXJyYXkgb2YgcnVubmluZyB0YXNrIElEc1xudmFyIHJ1bm5pbmdJZHMgPSBbXTtcblxuLy8gW29iamVjdF06IE1hcCBvZiBydW5uaW5nIHRhc2tlc1xudmFyIGFjdGl2ZVRhc2tzID0ge307XG5cbi8vIFthcnJheV06IEFycmF5IG9mIHRhc2sgSURzIHF1ZXVlZCBmb3IgYWN0aXZhdGlvblxudmFyIGFjdGl2YXRlUXVldWUgPSBbXTtcblxuLy8gW2FycmF5XTogQXJyYXkgb2YgdGFzayBJRHMgcXVldWVkIGZvciBkZWFjdGl2YXRpb25cbnZhciBkZWFjdGl2YXRlUXVldWUgPSBbXTtcblxuLypcbiAgICBVcGRhdGUgYWN0aXZhdGUvZGVhY3RpdmF0ZSBxdWV1ZXNcblxuICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgIEBwYXJhbSBbYXJyYXldXG4gICAgQHBhcmFtIFthcnJheV1cbiovXG52YXIgdXBkYXRlUXVldWVzID0gZnVuY3Rpb24gKGlkLCBpbkxpc3QsIG91dExpc3QpIHtcbiAgICB2YXIgaW5Qb3NpdGlvbiA9IGluTGlzdC5pbmRleE9mKGlkKTtcbiAgICB2YXIgb3V0UG9zaXRpb24gPSBvdXRMaXN0LmluZGV4T2YoaWQpO1xuXG4gICAgaWYgKGluUG9zaXRpb24gPT09IC0xKSB7XG4gICAgICAgIGluTGlzdC5wdXNoKGlkKTtcbiAgICB9XG5cbiAgICBpZiAob3V0UG9zaXRpb24gPiAtMSkge1xuICAgICAgICBvdXRMaXN0LnNwbGljZShvdXRQb3NpdGlvbiwgMSk7XG4gICAgfVxufTtcblxuLypcbiAgICBVcGRhdGUgcnVubmluZ1xuXG4gICAgW2Jvb2xlYW5dOiBgdHJ1ZWAgdG8gYWRkXG4gICAgW2Jvb2xlYW5dOiBgdHJ1ZWAgaWYgbGF6eVxuKi9cbnZhciB1cGRhdGVSdW5uaW5nQ291bnQgPSBmdW5jdGlvbiAoYWRkLCBpc0xhenkpIHtcbiAgICB2YXIgbW9kaWZ5ID0gYWRkID8gMSA6IC0xO1xuXG4gICAgdG90YWxSdW5uaW5nQ291bnQgKz0gbW9kaWZ5O1xuXG4gICAgaWYgKCFpc0xhenkpIHtcbiAgICAgICAgbm9uQmFja2dyb3VuZFJ1bm5pbmdDb3VudCArPSBtb2RpZnk7XG4gICAgfVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGFjdGl2ZVRhc2tzOiBhY3RpdmVUYXNrcyxcblxuICAgIC8vIEFjdGl2YXRlIGEgdGFza1xuICAgIGFjdGl2YXRlOiBmdW5jdGlvbiAoaWQsIHRhc2spIHtcbiAgICAgICAgYWN0aXZlVGFza3NbaWRdID0gdGFzaztcbiAgICAgICAgdGFzay5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIHVwZGF0ZVF1ZXVlcyhpZCwgYWN0aXZhdGVRdWV1ZSwgZGVhY3RpdmF0ZVF1ZXVlKTtcblxuICAgICAgICBpZiAodGFzay5vbkFjdGl2YXRlKSB7XG4gICAgICAgICAgICB0YXNrLm9uQWN0aXZhdGUodGFzayk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGFzay5vbkFjdGl2YXRlT25jZSkge1xuICAgICAgICAgICAgdGFzay5vbkFjdGl2YXRlT25jZSh0YXNrKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBEZWFjdGl2YXRlIGEgdGFza1xuICAgIGRlYWN0aXZhdGU6IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICB2YXIgdGFzayA9IGFjdGl2ZVRhc2tzW2lkXTtcblxuICAgICAgICBpZiAodGFzaykge1xuICAgICAgICAgICAgdXBkYXRlUXVldWVzKGlkLCBkZWFjdGl2YXRlUXVldWUsIGFjdGl2YXRlUXVldWUpO1xuICAgICAgICAgICAgdGFzay5pc0FjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAodGFzay5vbkRlYWN0aXZhdGUpIHtcbiAgICAgICAgICAgICAgICB0YXNrLm9uRGVhY3RpdmF0ZSh0YXNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBOdW1iZXIgYmFja2dyb3VuZCB0YXNrZXNcbiAgICBnZXROb25CYWNrZ3JvdW5kUnVubmluZ0NvdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBub25CYWNrZ3JvdW5kUnVubmluZ0NvdW50O1xuICAgIH0sXG5cbiAgICAvLyBJbmNyZW1lbnQgY3VycmVudCB0YXNrIElEIGFuZCByZXR1cm5cbiAgICBnZXRUYXNrSWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRUYXNrSWQrKztcbiAgICB9LFxuXG4gICAgLy8gUmVzb2x2ZSBhY3RpdmF0ZS9kZWFjdGl2YXRlIHRhc2tlcyBhbmQgcmV0dXJuIGFjdGl2ZSBpZHNcbiAgICBnZXRBY3RpdmVJZHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLypcbiAgICAgICAgICAgIHRhc2sgZGVhY3RpdmF0ZSBxdWV1ZVxuICAgICAgICAqL1xuICAgICAgICB2YXIgZGVhY3RpdmF0ZVF1ZXVlTGVuZ3RoID0gZGVhY3RpdmF0ZVF1ZXVlLmxlbmd0aDtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRlYWN0aXZhdGVRdWV1ZUxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaWQgPSBkZWFjdGl2YXRlUXVldWVbaV07XG4gICAgICAgICAgICB2YXIgYWN0aXZlSWRJbmRleCA9IHJ1bm5pbmdJZHMuaW5kZXhPZihpZCk7XG4gICAgICAgICAgICB2YXIgdGFzayA9IGFjdGl2ZVRhc2tzW2lkXTtcblxuICAgICAgICAgICAgLy8gSWYgdGhpcyBpcyBhIHJ1bm5pbmcgdGFzaywgZGVhY3RpdmF0ZVxuICAgICAgICAgICAgaWYgKGFjdGl2ZUlkSW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgIHJ1bm5pbmdJZHMuc3BsaWNlKGFjdGl2ZUlkSW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZVJ1bm5pbmdDb3VudChmYWxzZSwgdGFzay5pc0xhenkpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBhY3RpdmVUYXNrc1tpZF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKlxuICAgICAgICAgICAgRW1wdHkgZGVhY3RpdmF0ZSBxdWV1ZS4gV2UgdXNlIGBBcnJheS5zcGxpY2VgIGJlY2F1c2UgaXQgZG9lc24ndFxuICAgICAgICAgICAgd29ya3Mgb24gdGhlIG9yaWdpbmFsIGFycmF5IHNvIHdlIGRvbid0IGhhdmUgdG8gZ2FyYmFnZSBjb2xsZWN0IGFueXRoaW5nXG4gICAgICAgICovXG4gICAgICAgIGRlYWN0aXZhdGVRdWV1ZS5zcGxpY2UoMCwgZGVhY3RpdmF0ZVF1ZXVlTGVuZ3RoKTtcblxuICAgICAgICAvKlxuICAgICAgICAgICAgdGFzayBhY3RpdmF0ZSBxdWV1ZVxuICAgICAgICAqL1xuICAgICAgICB2YXIgYWN0aXZhdGVRdWV1ZUxlbmd0aCA9IGFjdGl2YXRlUXVldWUubGVuZ3RoO1xuXG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhY3RpdmF0ZVF1ZXVlTGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgX2lkID0gYWN0aXZhdGVRdWV1ZVtfaV07XG4gICAgICAgICAgICB2YXIgX2FjdGl2ZUlkSW5kZXggPSBydW5uaW5nSWRzLmluZGV4T2YoX2lkKTtcbiAgICAgICAgICAgIHZhciBfdGFzayA9IGFjdGl2ZVRhc2tzW19pZF07XG5cbiAgICAgICAgICAgIC8vIElmIHRhc2sgaXNuJ3QgYWxyZWFkeSBydW5uaW5nLCBhY3RpdmF0ZVxuICAgICAgICAgICAgaWYgKF9hY3RpdmVJZEluZGV4ID09PSAtMSAmJiBfdGFzaykge1xuICAgICAgICAgICAgICAgIGlmIChfdGFzay5pc1ByaW9yaXR5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmdJZHMudW5zaGlmdChfaWQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmdJZHMucHVzaChfaWQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChfdGFzay5vbkFjdGl2YXRlTG9vcCkge1xuICAgICAgICAgICAgICAgICAgICBfdGFzay5vbkFjdGl2YXRlTG9vcCgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHVwZGF0ZVJ1bm5pbmdDb3VudCh0cnVlLCBfdGFzay5pc0xhenkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYWN0aXZhdGVRdWV1ZS5zcGxpY2UoMCwgYWN0aXZhdGVRdWV1ZUxlbmd0aCk7XG5cbiAgICAgICAgcmV0dXJuIHJ1bm5pbmdJZHM7XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MFlYTnJMMjFoYm1GblpYSXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0QlFVTkJMRWxCUVVrc1owSkJRV2RDTEVOQlFXaENPenM3UVVGSFNpeEpRVUZKTEc5Q1FVRnZRaXhEUVVGd1FqczdPMEZCUjBvc1NVRkJTU3cwUWtGQk5FSXNRMEZCTlVJN096dEJRVWRLTEVsQlFVMHNZVUZCWVN4RlFVRmlPenM3UVVGSFRpeEpRVUZOTEdOQlFXTXNSVUZCWkRzN08wRkJSMDRzU1VGQlRTeG5Ra0ZCWjBJc1JVRkJhRUk3T3p0QlFVZE9MRWxCUVUwc2EwSkJRV3RDTEVWQlFXeENPenM3T3pzN096czdRVUZUVGl4SlFVRk5MR1ZCUVdVc1ZVRkJReXhGUVVGRUxFVkJRVXNzVFVGQlRDeEZRVUZoTEU5QlFXSXNSVUZCZVVJN1FVRkRNVU1zVVVGQlRTeGhRVUZoTEU5QlFVOHNUMEZCVUN4RFFVRmxMRVZCUVdZc1EwRkJZaXhEUVVSdlF6dEJRVVV4UXl4UlFVRk5MR05CUVdNc1VVRkJVU3hQUVVGU0xFTkJRV2RDTEVWQlFXaENMRU5CUVdRc1EwRkdiME03TzBGQlNURkRMRkZCUVVrc1pVRkJaU3hEUVVGRExFTkJRVVFzUlVGQlNUdEJRVU51UWl4bFFVRlBMRWxCUVZBc1EwRkJXU3hGUVVGYUxFVkJSRzFDTzB0QlFYWkNPenRCUVVsQkxGRkJRVWtzWTBGQll5eERRVUZETEVOQlFVUXNSVUZCU1R0QlFVTnNRaXhuUWtGQlVTeE5RVUZTTEVOQlFXVXNWMEZCWml4RlFVRTBRaXhEUVVFMVFpeEZRVVJyUWp0TFFVRjBRanREUVZKcFFqczdPenM3T3pzN1FVRnRRbkpDTEVsQlFVMHNjVUpCUVhGQ0xGVkJRVU1zUjBGQlJDeEZRVUZOTEUxQlFVNHNSVUZCYVVJN1FVRkRlRU1zVVVGQlRTeFRRVUZUTEUxQlFVMHNRMEZCVGl4SFFVRlZMRU5CUVVNc1EwRkJSQ3hEUVVSbE96dEJRVWQ0UXl4NVFrRkJjVUlzVFVGQmNrSXNRMEZJZDBNN08wRkJTM2hETEZGQlFVa3NRMEZCUXl4TlFVRkVMRVZCUVZNN1FVRkRWQ3h4UTBGQk5rSXNUVUZCTjBJc1EwRkVVenRMUVVGaU8wTkJUSFZDT3p0clFrRlZXanRCUVVOWUxEUkNRVVJYT3pzN1FVRkpXQ3hqUVVGVkxGVkJRVU1zUlVGQlJDeEZRVUZMTEVsQlFVd3NSVUZCWXp0QlFVTndRaXh2UWtGQldTeEZRVUZhTEVsQlFXdENMRWxCUVd4Q0xFTkJSRzlDTzBGQlJYQkNMR0ZCUVVzc1VVRkJUQ3hIUVVGblFpeEpRVUZvUWl4RFFVWnZRanRCUVVkd1FpeHhRa0ZCWVN4RlFVRmlMRVZCUVdsQ0xHRkJRV3BDTEVWQlFXZERMR1ZCUVdoRExFVkJTRzlDT3p0QlFVdHdRaXhaUVVGSkxFdEJRVXNzVlVGQlRDeEZRVUZwUWp0QlFVTnFRaXhwUWtGQlN5eFZRVUZNTEVOQlFXZENMRWxCUVdoQ0xFVkJSR2xDTzFOQlFYSkNPenRCUVVsQkxGbEJRVWtzUzBGQlN5eGpRVUZNTEVWQlFYRkNPMEZCUTNKQ0xHbENRVUZMTEdOQlFVd3NRMEZCYjBJc1NVRkJjRUlzUlVGRWNVSTdVMEZCZWtJN1MwRlVUVHM3TzBGQlpWWXNaMEpCUVZrc1ZVRkJReXhGUVVGRUxFVkJRVkU3UVVGRGFFSXNXVUZCVFN4UFFVRlBMRmxCUVZrc1JVRkJXaXhEUVVGUUxFTkJSRlU3TzBGQlIyaENMRmxCUVVrc1NVRkJTaXhGUVVGVk8wRkJRMDRzZVVKQlFXRXNSVUZCWWl4RlFVRnBRaXhsUVVGcVFpeEZRVUZyUXl4aFFVRnNReXhGUVVSTk8wRkJSVTRzYVVKQlFVc3NVVUZCVEN4SFFVRm5RaXhMUVVGb1FpeERRVVpOT3p0QlFVbE9MR2RDUVVGSkxFdEJRVXNzV1VGQlRDeEZRVUZ0UWp0QlFVTnVRaXh4UWtGQlN5eFpRVUZNTEVOQlFXdENMRWxCUVd4Q0xFVkJSRzFDTzJGQlFYWkNPMU5CU2tvN1MwRklVVHM3TzBGQlkxb3NhME5CUVRoQ08yVkJRVTA3UzBGQlRqczdPMEZCUnpsQ0xHVkJRVmM3WlVGQlRUdExRVUZPT3pzN1FVRkhXQ3hyUWtGQll5eFpRVUZOT3pzN08wRkJTV2hDTEZsQlFVMHNkMEpCUVhkQ0xHZENRVUZuUWl4TlFVRm9RaXhEUVVwa096dEJRVTFvUWl4aFFVRkxMRWxCUVVrc1NVRkJTU3hEUVVGS0xFVkJRVThzU1VGQlNTeHhRa0ZCU2l4RlFVRXlRaXhIUVVFelF5eEZRVUZuUkR0QlFVTTFReXhuUWtGQlRTeExRVUZMTEdkQ1FVRm5RaXhEUVVGb1FpeERRVUZNTEVOQlJITkRPMEZCUlRWRExHZENRVUZOTEdkQ1FVRm5RaXhYUVVGWExFOUJRVmdzUTBGQmJVSXNSVUZCYmtJc1EwRkJhRUlzUTBGR2MwTTdRVUZITlVNc1owSkJRVTBzVDBGQlR5eFpRVUZaTEVWQlFWb3NRMEZCVURzN08wRkJTSE5ETEdkQ1FVMTRReXhuUWtGQlowSXNRMEZCUXl4RFFVRkVMRVZCUVVrN1FVRkRjRUlzTWtKQlFWY3NUVUZCV0N4RFFVRnJRaXhoUVVGc1FpeEZRVUZwUXl4RFFVRnFReXhGUVVSdlFqdEJRVVZ3UWl4dFEwRkJiVUlzUzBGQmJrSXNSVUZCTUVJc1MwRkJTeXhOUVVGTUxFTkJRVEZDTEVOQlJtOUNPMEZCUjNCQ0xIVkNRVUZQTEZsQlFWa3NSVUZCV2l4RFFVRlFMRU5CU0c5Q08yRkJRWGhDTzFOQlRrbzdPenM3T3p0QlFVNW5RaXgxUWtGMVFtaENMRU5CUVdkQ0xFMUJRV2hDTEVOQlFYVkNMRU5CUVhaQ0xFVkJRVEJDTEhGQ1FVRXhRanM3T3pzN1FVRjJRbWRDTEZsQk5FSldMSE5DUVVGelFpeGpRVUZqTEUxQlFXUXNRMEUxUWxvN08wRkJPRUpvUWl4aFFVRkxMRWxCUVVrc1MwRkJTU3hEUVVGS0xFVkJRVThzUzBGQlNTeHRRa0ZCU2l4RlFVRjVRaXhKUVVGNlF5eEZRVUU0UXp0QlFVTXhReXhuUWtGQlRTeE5RVUZMTEdOQlFXTXNSVUZCWkN4RFFVRk1MRU5CUkc5RE8wRkJSVEZETEdkQ1FVRk5MR2xDUVVGblFpeFhRVUZYTEU5QlFWZ3NRMEZCYlVJc1IwRkJia0lzUTBGQmFFSXNRMEZHYjBNN1FVRkhNVU1zWjBKQlFVMHNVVUZCVHl4WlFVRlpMRWRCUVZvc1EwRkJVRHM3TzBGQlNHOURMR2RDUVUxMFF5eHRRa0ZCYTBJc1EwRkJReXhEUVVGRUxFbEJRVTBzUzBGQmVFSXNSVUZCT0VJN1FVRkRPVUlzYjBKQlFVa3NUVUZCU3l4VlFVRk1MRVZCUVdsQ08wRkJRMnBDTEN0Q1FVRlhMRTlCUVZnc1EwRkJiVUlzUjBGQmJrSXNSVUZFYVVJN2FVSkJRWEpDTEUxQlJVODdRVUZEU0N3clFrRkJWeXhKUVVGWUxFTkJRV2RDTEVkQlFXaENMRVZCUkVjN2FVSkJSbEE3TzBGQlRVRXNiMEpCUVVrc1RVRkJTeXhqUVVGTUxFVkJRWEZDTzBGQlEzSkNMREJDUVVGTExHTkJRVXdzUjBGRWNVSTdhVUpCUVhwQ096dEJRVWxCTEcxRFFVRnRRaXhKUVVGdVFpeEZRVUY1UWl4TlFVRkxMRTFCUVV3c1EwRkJla0lzUTBGWU9FSTdZVUZCYkVNN1UwRk9TanM3UVVGeFFrRXNjMEpCUVdNc1RVRkJaQ3hEUVVGeFFpeERRVUZ5UWl4RlFVRjNRaXh0UWtGQmVFSXNSVUZ1UkdkQ096dEJRWEZFYUVJc1pVRkJUeXhWUVVGUUxFTkJja1JuUWp0TFFVRk9JaXdpWm1sc1pTSTZJbTFoYm1GblpYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFF2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTHk4Z1cybHVkRjA2SUVsdVkzSmxiV1Z1ZEdWa0lHWnZjaUJsWVdOb0lHNWxkeUJ5ZFc1dWFXNW5JSFJoYzJ0Y2JteGxkQ0JqZFhKeVpXNTBWR0Z6YTBsa0lEMGdNRHRjYmx4dUx5OGdXMmx1ZEYwNklFNTFiV0psY2lCdlppQmhiR3dnY25WdWJtbHVaeUIwWVhOclpYTmNibXhsZENCMGIzUmhiRkoxYm01cGJtZERiM1Z1ZENBOUlEQTdYRzVjYmk4dklGdHBiblJkT2lCT2RXMWlaWElnYjJZZ2NuVnVibWx1WnlCMFlYTnJaWE1nWlhoamJIVmthVzVuSUdKaFkydG5jbTkxYm1RZ2RHRnphMlZ6WEc1c1pYUWdibTl1UW1GamEyZHliM1Z1WkZKMWJtNXBibWREYjNWdWRDQTlJREE3WEc1Y2JpOHZJRnRoY25KaGVWMDZJRUZ5Y21GNUlHOW1JSEoxYm01cGJtY2dkR0Z6YXlCSlJITmNibU52Ym5OMElISjFibTVwYm1kSlpITWdQU0JiWFR0Y2JseHVMeThnVzI5aWFtVmpkRjA2SUUxaGNDQnZaaUJ5ZFc1dWFXNW5JSFJoYzJ0bGMxeHVZMjl1YzNRZ1lXTjBhWFpsVkdGemEzTWdQU0I3ZlR0Y2JseHVMeThnVzJGeWNtRjVYVG9nUVhKeVlYa2diMllnZEdGemF5QkpSSE1nY1hWbGRXVmtJR1p2Y2lCaFkzUnBkbUYwYVc5dVhHNWpiMjV6ZENCaFkzUnBkbUYwWlZGMVpYVmxJRDBnVzEwN1hHNWNiaTh2SUZ0aGNuSmhlVjA2SUVGeWNtRjVJRzltSUhSaGMyc2dTVVJ6SUhGMVpYVmxaQ0JtYjNJZ1pHVmhZM1JwZG1GMGFXOXVYRzVqYjI1emRDQmtaV0ZqZEdsMllYUmxVWFZsZFdVZ1BTQmJYVHRjYmx4dUx5cGNiaUFnSUNCVmNHUmhkR1VnWVdOMGFYWmhkR1V2WkdWaFkzUnBkbUYwWlNCeGRXVjFaWE5jYmx4dUlDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhWeHVJQ0FnSUVCd1lYSmhiU0JiWVhKeVlYbGRYRzRnSUNBZ1FIQmhjbUZ0SUZ0aGNuSmhlVjFjYmlvdlhHNWpiMjV6ZENCMWNHUmhkR1ZSZFdWMVpYTWdQU0FvYVdRc0lHbHVUR2x6ZEN3Z2IzVjBUR2x6ZENrZ1BUNGdlMXh1SUNBZ0lHTnZibk4wSUdsdVVHOXphWFJwYjI0Z1BTQnBia3hwYzNRdWFXNWtaWGhQWmlocFpDazdYRzRnSUNBZ1kyOXVjM1FnYjNWMFVHOXphWFJwYjI0Z1BTQnZkWFJNYVhOMExtbHVaR1Y0VDJZb2FXUXBPMXh1WEc0Z0lDQWdhV1lnS0dsdVVHOXphWFJwYjI0Z1BUMDlJQzB4S1NCN1hHNGdJQ0FnSUNBZ0lHbHVUR2x6ZEM1d2RYTm9LR2xrS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JwWmlBb2IzVjBVRzl6YVhScGIyNGdQaUF0TVNrZ2UxeHVJQ0FnSUNBZ0lDQnZkWFJNYVhOMExuTndiR2xqWlNodmRYUlFiM05wZEdsdmJpd2dNU2s3WEc0Z0lDQWdmVnh1ZlR0Y2JseHVMeXBjYmlBZ0lDQlZjR1JoZEdVZ2NuVnVibWx1WjF4dVhHNGdJQ0FnVzJKdmIyeGxZVzVkT2lCZ2RISjFaV0FnZEc4Z1lXUmtYRzRnSUNBZ1cySnZiMnhsWVc1ZE9pQmdkSEoxWldBZ2FXWWdiR0Y2ZVZ4dUtpOWNibU52Ym5OMElIVndaR0YwWlZKMWJtNXBibWREYjNWdWRDQTlJQ2hoWkdRc0lHbHpUR0Y2ZVNrZ1BUNGdlMXh1SUNBZ0lHTnZibk4wSUcxdlpHbG1lU0E5SUdGa1pDQS9JREVnT2lBdE1UdGNibHh1SUNBZ0lIUnZkR0ZzVW5WdWJtbHVaME52ZFc1MElDczlJRzF2WkdsbWVUdGNibHh1SUNBZ0lHbG1JQ2doYVhOTVlYcDVLU0I3WEc0Z0lDQWdJQ0FnSUc1dmJrSmhZMnRuY205MWJtUlNkVzV1YVc1blEyOTFiblFnS3owZ2JXOWthV1o1TzF4dUlDQWdJSDFjYm4wN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElIdGNiaUFnSUNCaFkzUnBkbVZVWVhOcmN5eGNibHh1SUNBZ0lDOHZJRUZqZEdsMllYUmxJR0VnZEdGemExeHVJQ0FnSUdGamRHbDJZWFJsT2lBb2FXUXNJSFJoYzJzcElEMCtJSHRjYmlBZ0lDQWdJQ0FnWVdOMGFYWmxWR0Z6YTNOYmFXUmRJRDBnZEdGemF6dGNiaUFnSUNBZ0lDQWdkR0Z6YXk1cGMwRmpkR2wyWlNBOUlIUnlkV1U3WEc0Z0lDQWdJQ0FnSUhWd1pHRjBaVkYxWlhWbGN5aHBaQ3dnWVdOMGFYWmhkR1ZSZFdWMVpTd2daR1ZoWTNScGRtRjBaVkYxWlhWbEtUdGNibHh1SUNBZ0lDQWdJQ0JwWmlBb2RHRnpheTV2YmtGamRHbDJZWFJsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwWVhOckxtOXVRV04wYVhaaGRHVW9kR0Z6YXlrN1hHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0JwWmlBb2RHRnpheTV2YmtGamRHbDJZWFJsVDI1alpTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHRnpheTV2YmtGamRHbDJZWFJsVDI1alpTaDBZWE5yS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgwc1hHNWNiaUFnSUNBdkx5QkVaV0ZqZEdsMllYUmxJR0VnZEdGemExeHVJQ0FnSUdSbFlXTjBhWFpoZEdVNklDaHBaQ2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCMFlYTnJJRDBnWVdOMGFYWmxWR0Z6YTNOYmFXUmRPMXh1WEc0Z0lDQWdJQ0FnSUdsbUlDaDBZWE5yS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IxY0dSaGRHVlJkV1YxWlhNb2FXUXNJR1JsWVdOMGFYWmhkR1ZSZFdWMVpTd2dZV04wYVhaaGRHVlJkV1YxWlNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwWVhOckxtbHpRV04wYVhabElEMGdabUZzYzJVN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaDBZWE5yTG05dVJHVmhZM1JwZG1GMFpTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJoYzJzdWIyNUVaV0ZqZEdsMllYUmxLSFJoYzJzcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlN4Y2JseHVJQ0FnSUM4dklFNTFiV0psY2lCaVlXTnJaM0p2ZFc1a0lIUmhjMnRsYzF4dUlDQWdJR2RsZEU1dmJrSmhZMnRuY205MWJtUlNkVzV1YVc1blEyOTFiblE2SUNncElEMCtJRzV2YmtKaFkydG5jbTkxYm1SU2RXNXVhVzVuUTI5MWJuUXNYRzVjYmlBZ0lDQXZMeUJKYm1OeVpXMWxiblFnWTNWeWNtVnVkQ0IwWVhOcklFbEVJR0Z1WkNCeVpYUjFjbTVjYmlBZ0lDQm5aWFJVWVhOclNXUTZJQ2dwSUQwK0lHTjFjbkpsYm5SVVlYTnJTV1FyS3l4Y2JseHVJQ0FnSUM4dklGSmxjMjlzZG1VZ1lXTjBhWFpoZEdVdlpHVmhZM1JwZG1GMFpTQjBZWE5yWlhNZ1lXNWtJSEpsZEhWeWJpQmhZM1JwZG1VZ2FXUnpYRzRnSUNBZ1oyVjBRV04wYVhabFNXUnpPaUFvS1NBOVBpQjdYRzRnSUNBZ0lDQWdJQzhxWEc0Z0lDQWdJQ0FnSUNBZ0lDQjBZWE5ySUdSbFlXTjBhWFpoZEdVZ2NYVmxkV1ZjYmlBZ0lDQWdJQ0FnS2k5Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnWkdWaFkzUnBkbUYwWlZGMVpYVmxUR1Z1WjNSb0lEMGdaR1ZoWTNScGRtRjBaVkYxWlhWbExteGxibWQwYUR0Y2JseHVJQ0FnSUNBZ0lDQm1iM0lnS0d4bGRDQnBJRDBnTURzZ2FTQThJR1JsWVdOMGFYWmhkR1ZSZFdWMVpVeGxibWQwYURzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCcFpDQTlJR1JsWVdOMGFYWmhkR1ZSZFdWMVpWdHBYVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUdGamRHbDJaVWxrU1c1a1pYZ2dQU0J5ZFc1dWFXNW5TV1J6TG1sdVpHVjRUMllvYVdRcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdkR0Z6YXlBOUlHRmpkR2wyWlZSaGMydHpXMmxrWFR0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1NXWWdkR2hwY3lCcGN5QmhJSEoxYm01cGJtY2dkR0Z6YXl3Z1pHVmhZM1JwZG1GMFpWeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHRmpkR2wyWlVsa1NXNWtaWGdnUGlBdE1Ta2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEoxYm01cGJtZEpaSE11YzNCc2FXTmxLR0ZqZEdsMlpVbGtTVzVrWlhnc0lERXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFZ3WkdGMFpWSjFibTVwYm1kRGIzVnVkQ2htWVd4elpTd2dkR0Z6YXk1cGMweGhlbmtwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdSbGJHVjBaU0JoWTNScGRtVlVZWE5yYzF0cFpGMDdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0F2S2x4dUlDQWdJQ0FnSUNBZ0lDQWdSVzF3ZEhrZ1pHVmhZM1JwZG1GMFpTQnhkV1YxWlM0Z1YyVWdkWE5sSUdCQmNuSmhlUzV6Y0d4cFkyVmdJR0psWTJGMWMyVWdhWFFnWkc5bGMyNG5kRnh1SUNBZ0lDQWdJQ0FnSUNBZ2QyOXlhM01nYjI0Z2RHaGxJRzl5YVdkcGJtRnNJR0Z5Y21GNUlITnZJSGRsSUdSdmJpZDBJR2hoZG1VZ2RHOGdaMkZ5WW1GblpTQmpiMnhzWldOMElHRnVlWFJvYVc1blhHNGdJQ0FnSUNBZ0lDb3ZYRzRnSUNBZ0lDQWdJR1JsWVdOMGFYWmhkR1ZSZFdWMVpTNXpjR3hwWTJVb01Dd2daR1ZoWTNScGRtRjBaVkYxWlhWbFRHVnVaM1JvS1R0Y2JseHVJQ0FnSUNBZ0lDQXZLbHh1SUNBZ0lDQWdJQ0FnSUNBZ2RHRnpheUJoWTNScGRtRjBaU0J4ZFdWMVpWeHVJQ0FnSUNBZ0lDQXFMMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQmhZM1JwZG1GMFpWRjFaWFZsVEdWdVozUm9JRDBnWVdOMGFYWmhkR1ZSZFdWMVpTNXNaVzVuZEdnN1hHNWNiaUFnSUNBZ0lDQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0JoWTNScGRtRjBaVkYxWlhWbFRHVnVaM1JvT3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUdsa0lEMGdZV04wYVhaaGRHVlJkV1YxWlZ0cFhUdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJR0ZqZEdsMlpVbGtTVzVrWlhnZ1BTQnlkVzV1YVc1blNXUnpMbWx1WkdWNFQyWW9hV1FwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2RHRnpheUE5SUdGamRHbDJaVlJoYzJ0elcybGtYVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnU1dZZ2RHRnpheUJwYzI0bmRDQmhiSEpsWVdSNUlISjFibTVwYm1jc0lHRmpkR2wyWVhSbFhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb1lXTjBhWFpsU1dSSmJtUmxlQ0E5UFQwZ0xURWdKaVlnZEdGemF5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMFlYTnJMbWx6VUhKcGIzSnBkSGtwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjblZ1Ym1sdVowbGtjeTUxYm5Ob2FXWjBLR2xrS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlkVzV1YVc1blNXUnpMbkIxYzJnb2FXUXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDaDBZWE5yTG05dVFXTjBhWFpoZEdWTWIyOXdLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUmhjMnN1YjI1QlkzUnBkbUYwWlV4dmIzQW9LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMWNHUmhkR1ZTZFc1dWFXNW5RMjkxYm5Rb2RISjFaU3dnZEdGemF5NXBjMHhoZW5rcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdZV04wYVhaaGRHVlJkV1YxWlM1emNHeHBZMlVvTUN3Z1lXTjBhWFpoZEdWUmRXVjFaVXhsYm1kMGFDazdYRzVjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSEoxYm01cGJtZEpaSE03WEc0Z0lDQWdmVnh1ZlR0Y2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy90YXNrL21hbmFnZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA1M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIiLCJmaWxlIjoicG9wbW90aW9uLmdsb2JhbC5qcyJ9