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
	
	var _timer = __webpack_require__(4);
	
	Object.defineProperty(exports, 'setGlobalDilation', {
	    enumerable: true,
	    get: function () {
	        return _timer.setGlobalDilation;
	    }
	});
	
	var _Action = __webpack_require__(2);
	
	var _Action2 = _interopRequireDefault(_Action);
	
	var _Flow = __webpack_require__(3);
	
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
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _Task2 = __webpack_require__(8);
	
	var _Task3 = _interopRequireDefault(_Task2);
	
	var _calc = __webpack_require__(20);
	
	var _utils = __webpack_require__(21);
	
	var _detect = __webpack_require__(35);
	
	var _detect2 = _interopRequireDefault(_detect);
	
	var _numericalValues = __webpack_require__(36);
	
	var _numericalValues2 = _interopRequireDefault(_numericalValues);
	
	var _detectAdapter = __webpack_require__(37);
	
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
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _Action2 = __webpack_require__(2);
	
	var _Action3 = _interopRequireDefault(_Action2);
	
	var _generateBlendCurve = __webpack_require__(34);
	
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
	
	            /**
	             * TODO: replace with blend tree resolver
	             * Additive motion
	             * Bezier tween blend
	             */
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
	
	                if (actionValue.from === undefined) {
	                    actionValue.from = actionValue.current = value.current;
	                }
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
	//# sourceMappingURL=data:application/json;base64,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VUFBTixHQUZvQjtpQkFBeEI7YUFMSjs7QUFXQSxtQkFBTyxLQUFLLGFBQUwsQ0FBbUIsRUFBbkIsQ0FBUCxDQVpRO0FBYVIsaUJBQUssZ0JBQUwsR0FiUTtTQUFaOztBQWdCQSxZQUFJLENBQUMsS0FBSyxnQkFBTCxJQUF5QixLQUFLLFFBQUwsRUFBZTtBQUN6Qyw4QkFBTSxJQUFOLFlBRHlDO1NBQTdDOzs7V0EvSkY7OztBQXFLTixLQUFLLFNBQUwsQ0FBZSxZQUFmLEdBQThCLGlCQUFPLGtCQUFQLENBQTBCO0FBQ3BELGFBQVMsRUFBVDtBQUNBLGdCQUFZLENBQVo7Q0FGMEIsQ0FBOUI7O2tCQUtlIiwiZmlsZSI6IkZsb3cuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdGlvbiBmcm9tICcuLi9hY3Rpb25zL0FjdGlvbic7XG5pbXBvcnQgZ2VuZXJhdGVCbGVuZEN1cnZlIGZyb20gJy4vZmxvdy9nZW5lcmF0ZS1ibGVuZC1jdXJ2ZSc7XG5cbi8qXG4gICAgTWV0aG9kcyBhbmQgcHJvcGVydGllcyB0byBhZGQgdG8gYm91bmQgQWN0aW9uc1xuKi9cbmNvbnN0IGJvdW5kT25TdGFydCA9IChhY3Rpb24pID0+IGFjdGlvbi5mbG93LmFjdGl2YXRlQWN0aW9uKGFjdGlvbi5pZCwgYWN0aW9uKTtcbmNvbnN0IGJvdW5kT25TdG9wID0gKGFjdGlvbikgPT4gYWN0aW9uLmZsb3cuZGVhY3RpdmF0ZUFjdGlvbihhY3Rpb24uaWQpO1xuY29uc3QgYm91bmRQcm9wcyA9IChmbG93KSA9PiAoe1xuICAgIGZsb3csXG4gICAgaXNQcmlvcml0eTogdHJ1ZSxcbiAgICBvbkFjdGl2YXRlOiBib3VuZE9uU3RhcnQsXG4gICAgb25EZWFjdGl2YXRlOiBib3VuZE9uU3RvcFxufSk7XG5cbmNsYXNzIEZsb3cgZXh0ZW5kcyBBY3Rpb24ge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5hY3RpdmVBY3Rpb25zID0ge307XG4gICAgICAgIHRoaXMubnVtQWN0aXZlQWN0aW9ucyA9IDA7XG4gICAgfVxuXG4gICAgc2V0KHByb3BzKSB7XG4gICAgICAgIHN1cGVyLnNldChwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5vbmNlKCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgQmluZCBBY3Rpb24gdG8gQWN0b3JcbiAgICAqL1xuICAgIGNvbm5lY3QoYWN0aW9uKSB7XG4gICAgICAgIGNvbnN0IGluaGVyaXRlZEFjdGlvbiA9IGFjdGlvbi5pbmhlcml0KCk7XG4gICAgICAgIGxldCBuZXdWYWx1ZXMgPSB7fTtcbiAgICAgICAgbGV0IGhhc05ld1ZhbHVlcyA9IGZhbHNlO1xuXG4gICAgICAgIC8vIENyZWF0ZSB2YWx1ZXMgb24gYWN0b3IgdGhhdCBkb24ndCBleGlzdFxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gaW5oZXJpdGVkQWN0aW9uLnZhbHVlcykge1xuICAgICAgICAgICAgaWYgKGluaGVyaXRlZEFjdGlvbi52YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiAhdGhpcy52YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIG5ld1ZhbHVlc1trZXldID0ge307XG4gICAgICAgICAgICAgICAgaGFzTmV3VmFsdWVzID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoYXNOZXdWYWx1ZXMpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KHsgdmFsdWVzOiBuZXdWYWx1ZXMgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpbmhlcml0ZWRBY3Rpb24ucGFyZW50SWQgPSBhY3Rpb24uaWQ7XG5cbiAgICAgICAgcmV0dXJuIGluaGVyaXRlZEFjdGlvbi5zZXQoYm91bmRQcm9wcyh0aGlzLCBpbmhlcml0ZWRBY3Rpb24pKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBTdGFydCBBY3RvclxuXG4gICAgICAgIElmIEFjdGlvbiBpcyBwcm92aWRlZCwgYmluZCBpdCB0byB0aGlzIEFjdG9yIGFuZCBzdGFydFxuXG4gICAgICAgIEBwYXJhbSAob3B0aW9uYWwpIFtBY3Rpb25dXG4gICAgKi9cbiAgICBzdGFydCgpIHtcbiAgICAgICAgc3VwZXIuc3RhcnQoKTtcblxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5hY3RpdmVBY3Rpb25zKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVBY3Rpb25zLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhY3Rpb24gPSB0aGlzLmFjdGl2ZUFjdGlvbnNba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAoIWFjdGlvbi5pc0FjdGl2ZSkge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb24uc3RhcnQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzdG9wKCkge1xuICAgICAgICBzdXBlci5zdG9wKCk7XG5cbiAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMuYWN0aXZlQWN0aW9ucykge1xuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlQWN0aW9ucy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVBY3Rpb25zW2tleV0uc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgd2lsbFJlbmRlcihhY3RvciwgZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHRoaXMudmFsdWVLZXlzW2ldO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuICAgICAgICAgICAgY29uc3QgZHJpdmVyID0gdmFsdWUubnVtRHJpdmVycyA/IHRoaXMuYWN0aXZlQWN0aW9uc1t2YWx1ZS5kcml2ZXJzWzBdXSA6IGZhbHNlO1xuICAgICAgICAgICAgbGV0IG5ld0N1cnJlbnQgPSB2YWx1ZS5udW1Ecml2ZXJzID8gZHJpdmVyLnZhbHVlc1trZXldLmN1cnJlbnQgOiB2YWx1ZS5jdXJyZW50O1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFRPRE86IHJlcGxhY2Ugd2l0aCBibGVuZCB0cmVlIHJlc29sdmVyXG4gICAgICAgICAgICAgKiBBZGRpdGl2ZSBtb3Rpb25cbiAgICAgICAgICAgICAqIEJlemllciB0d2VlbiBibGVuZFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBpZiAodmFsdWUuYmxlbmRDdXJ2ZSkge1xuICAgICAgICAgICAgICAgIG5ld0N1cnJlbnQgPSB2YWx1ZS5ibGVuZEN1cnZlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSBuZXdDdXJyZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1cGVyLndpbGxSZW5kZXIoYWN0b3IsIGZyYW1lU3RhbXAsIGVsYXBzZWQpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIEFkZCBhY3RpdmUgYWN0aW9uc1xuXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgICAgICBAcGFyYW0gW0FjdGlvbl1cbiAgICAqL1xuICAgIGFjdGl2YXRlQWN0aW9uKGlkLCBhY3Rpb24pIHtcbiAgICAgICAgdGhpcy5hY3RpdmVBY3Rpb25zW2lkXSA9IGFjdGlvbjtcbiAgICAgICAgdGhpcy5udW1BY3RpdmVBY3Rpb25zKys7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY3Rpb24ubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGFjdGlvbi52YWx1ZUtleXNbaV07XG4gICAgICAgICAgICBjb25zdCBhY3Rpb25WYWx1ZSA9IGFjdGlvbi52YWx1ZXNba2V5XTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcblxuICAgICAgICAgICAgLy8gSWYgd2UncmUgYmxlbmRpbmcgdGhpcyBhY3Rpb24sIGFuZCB0aGVyZSdzIG9uIGFscmVhZHkgaW4gcHJvZ3Jlc3NcbiAgICAgICAgICAgIGlmIChhY3Rpb24uYmxlbmQgJiYgdmFsdWUubnVtRHJpdmVycyAmJiAhdmFsdWUuYmxlbmRDdXJ2ZSAmJiAodmFsdWUuZHJpdmVyc1swXS5wcm90b3R5cGUgPT09IGFjdGlvbi5wcm90b3R5cGUpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUuYmxlbmRDdXJ2ZSA9IGdlbmVyYXRlQmxlbmRDdXJ2ZSh0aGlzLmFjdGl2ZUFjdGlvbnNbdmFsdWUuZHJpdmVyc1swXV0sIGFjdGlvbiwgdmFsdWUsIGtleSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFhY3Rpb24uaXNTY3J1YmJpbmcpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS5ibGVuZEN1cnZlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIC8vIFBhc3MgQWN0b3IgdmFsdWUgcHJvcGVydGllcyB0byBBY3Rpb25cbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9uVmFsdWUudmVsb2NpdHkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uVmFsdWUudmVsb2NpdHkgPSB2YWx1ZS52ZWxvY2l0eTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9uVmFsdWUuZnJvbSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICBhY3Rpb25WYWx1ZS5mcm9tID0gYWN0aW9uVmFsdWUuY3VycmVudCA9IHZhbHVlLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YWx1ZS5kcml2ZXJzID0gW2lkXTtcbiAgICAgICAgICAgIHZhbHVlLm51bURyaXZlcnMgPSB2YWx1ZS5kcml2ZXJzLmxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm51bUFjdGl2ZUFjdGlvbnMpIHtcbiAgICAgICAgICAgIHN1cGVyLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBSZW1vdmUgYWN0aXZlIGFjdGlvbnNcblxuICAgICAgICBAcGFyYW0gW251bWJlcl1cbiAgICAqL1xuICAgIGRlYWN0aXZhdGVBY3Rpb24oaWQpIHtcbiAgICAgICAgY29uc3QgYWN0aW9uID0gdGhpcy5hY3RpdmVBY3Rpb25zW2lkXTtcblxuICAgICAgICBpZiAoYWN0aW9uKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFjdGlvbi5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGFjdGlvbi52YWx1ZUtleXNbaV07XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRyaXZlckluZGV4ID0gdmFsdWUuZHJpdmVycy5pbmRleE9mKGlkKTtcblxuICAgICAgICAgICAgICAgIGlmIChkcml2ZXJJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUuZHJpdmVycy5zcGxpY2UoZHJpdmVySW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5udW1Ecml2ZXJzLS07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5hY3RpdmVBY3Rpb25zW2lkXTtcbiAgICAgICAgICAgIHRoaXMubnVtQWN0aXZlQWN0aW9ucy0tO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLm51bUFjdGl2ZUFjdGlvbnMgJiYgdGhpcy5pc0FjdGl2ZSkge1xuICAgICAgICAgICAgc3VwZXIuc3RvcCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5GbG93LnByb3RvdHlwZS5kZWZhdWx0VmFsdWUgPSBBY3Rpb24uZXh0ZW5kRGVmYXVsdFZhbHVlKHtcbiAgICBkcml2ZXJzOiBbXSxcbiAgICBudW1Ecml2ZXJzOiAwXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgRmxvdztcbiJdfQ==

/***/ },
/* 4 */
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
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _Action2 = __webpack_require__(2);
	
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
	
	        // Set default `from` if none set
	        for (var i = 0; i < this.numValueKeys; i++) {
	            var key = this.valueKeys[i];
	            var value = this.values[key];
	            if (value.from === undefined) {
	                value.from = 0;
	            }
	        }
	
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
	    steps: 0,
	    to: 0,
	    round: false
	});
	Tween.prototype.defaultProps = _Action3.default.extendDefaultProps({
	    blend: false,
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
	//# sourceMappingURL=data:application/json;base64,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Qjs7O0FBK0dOLE1BQU0sU0FBTixDQUFnQixnQkFBaEIsR0FBbUMsSUFBbkM7QUFDQSxNQUFNLFNBQU4sQ0FBZ0IsWUFBaEIsR0FBK0IsaUJBQU8sa0JBQVAsQ0FBMEI7QUFDckQsV0FBTyxDQUFQO0FBQ0EsY0FBVSxHQUFWO0FBQ0EsVUFBTSx1QkFBTyxPQUFQO0FBQ04sYUFBUyxDQUFUO0FBQ0EsV0FBTyxDQUFQO0FBQ0EsUUFBSSxDQUFKO0FBQ0EsV0FBTyxLQUFQO0NBUDJCLENBQS9CO0FBU0EsTUFBTSxTQUFOLENBQWdCLFlBQWhCLEdBQStCLGlCQUFPLGtCQUFQLENBQTBCO0FBQ3JELFdBQU8sS0FBUDtBQUNBLFlBQVEsQ0FBUjtBQUNBLFVBQU0sQ0FBTjtBQUNBLFVBQU0sQ0FBTjtBQUNBLFVBQU0sQ0FBTjtBQUNBLGVBQVcsQ0FBWDtBQUNBLGVBQVcsQ0FBWDtBQUNBLGVBQVcsQ0FBWDtBQUNBLG1CQUFlLENBQWY7QUFDQSxpQkFBYSxLQUFiO0FBQ0EsV0FBTyxLQUFQO0FBQ0EsYUFBUyxDQUFUO0NBWjJCLENBQS9COztrQkFlZSIsImZpbGUiOiJUd2Vlbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWN0aW9uIGZyb20gJy4vQWN0aW9uJztcbmltcG9ydCBlYXNpbmcgZnJvbSAnLi9lYXNpbmcvcHJlc2V0LWVhc2luZyc7XG5pbXBvcnQgeyBjdXJyZW50VGltZSwgaXNOdW0gfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuaW1wb3J0IHsgZWFzZSwgcmVzdHJpY3QsIGdldFByb2dyZXNzRnJvbVZhbHVlLCBzdGVwUHJvZ3Jlc3MgfSBmcm9tICcuLi9pbmMvY2FsYyc7XG5cbmNvbnN0IENPVU5UID0gJ0NvdW50JztcbmNvbnN0IE5FWFRfU1RFUFMgPSB7XG4gICAgbG9vcDogJ3Jlc3RhcnQnLFxuICAgIHlveW86ICdyZXZlcnNlJyxcbiAgICBmbGlwOiAnZmxpcFZhbHVlcydcbn07XG5cbmNsYXNzIFR3ZWVuIGV4dGVuZHMgQWN0aW9uIHtcbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5lbGFwc2VkID0gMDtcbiAgICAgICAgdGhpcy5mbGlwQ291bnQgPSB0aGlzLnlveW9Db3VudCA9IHRoaXMubG9vcENvdW50ID0gMDtcbiAgICAgICAgdGhpcy5pc1NjcnViYmluZyA9IGZhbHNlO1xuXG4gICAgICAgIC8vIFNldCBkZWZhdWx0IGBmcm9tYCBpZiBub25lIHNldFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHRoaXMudmFsdWVLZXlzW2ldO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuICAgICAgICAgICAgaWYgKHZhbHVlLmZyb20gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICB2YWx1ZS5mcm9tID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdXBlci5zdGFydCgpO1xuICAgIH1cblxuICAgIG9uVXBkYXRlKHR3ZWVuLCBmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgICAgIGNvbnN0IHByb2dyZXNzVGFyZ2V0ID0gKHRoaXMucGxheURpcmVjdGlvbiA9PT0gMSkgPyAxIDogMDtcblxuICAgICAgICB0aGlzLmVuZGVkID0gdHJ1ZTtcblxuICAgICAgICBpZiAoIXRoaXMuaXNTY3J1YmJpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuZWxhcHNlZCArPSAoZWxhcHNlZCAqIHRoaXMuZGlsYXRlKSAqIHRoaXMucGxheURpcmVjdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gdGhpcy52YWx1ZUtleXNbaV07XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG5cbiAgICAgICAgICAgIGxldCBwcm9ncmVzcyA9IHJlc3RyaWN0KGdldFByb2dyZXNzRnJvbVZhbHVlKHRoaXMuZWxhcHNlZCAtIHZhbHVlLmRlbGF5LCAwLCB2YWx1ZS5kdXJhdGlvbiksIDAsIDEpO1xuXG4gICAgICAgICAgICAvLyBNYXJrIFR3ZWVuIGFzIE5PVCBlbmRlZCBpZiBzdGlsbCBpbiBwcm9ncmVzc1xuICAgICAgICAgICAgaWYgKHByb2dyZXNzICE9PSBwcm9ncmVzc1RhcmdldCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5kZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU3RlcCBwcm9ncmVzcyBpZiB3ZSdyZSBzdGVwcGluZ1xuICAgICAgICAgICAgaWYgKHZhbHVlLnN0ZXBzKSB7XG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3MgPSBzdGVwUHJvZ3Jlc3MocHJvZ3Jlc3MsIHZhbHVlLnN0ZXBzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRWFzZSBwcm9ncmVzc1xuICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IGVhc2UocHJvZ3Jlc3MsIHZhbHVlLmZyb20sIHZhbHVlLnRvLCB2YWx1ZS5lYXNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uRnJhbWVFbmQoKSB7XG4gICAgICAgIGlmICh0aGlzLmVuZGVkICYmICF0aGlzLmlzU2NydWJiaW5nKSB7XG4gICAgICAgICAgICBsZXQgc3RlcFRha2VuID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBORVhUX1NURVBTKSB7XG4gICAgICAgICAgICAgICAgaWYgKE5FWFRfU1RFUFMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNOdW0odGhpc1trZXldKSAmJiB0aGlzW2tleV0gPiB0aGlzW2tleSArIENPVU5UXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1trZXkgKyBDT1VOVF0rKztcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXBUYWtlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW05FWFRfU1RFUFNba2V5XV0oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFzdGVwVGFrZW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmbGlwVmFsdWVzKCkge1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLnZhbHVlcztcblxuICAgICAgICB0aGlzLmVsYXBzZWQgPSB0aGlzLmR1cmF0aW9uIC0gdGhpcy5lbGFwc2VkO1xuXG4gICAgICAgIGZvciAobGV0IGtleSBpbiB2YWx1ZXMpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdmFsdWVzW2tleV07XG4gICAgICAgICAgICAgICAgW3ZhbHVlLnRvLCB2YWx1ZS5mcm9tXSA9IFt2YWx1ZS5mcm9tLCB2YWx1ZS50b107XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXZlcnNlKCkge1xuICAgICAgICB0aGlzLnBsYXlEaXJlY3Rpb24gKj0gLTE7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJlc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuZWxhcHNlZCA9ICh0aGlzLnBsYXlEaXJlY3Rpb24gPT09IDEpID8gMCA6IHRoaXMuZHVyYXRpb247XG4gICAgICAgIHRoaXMuc3RhcnRlZCA9IGN1cnJlbnRUaW1lKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNlZWsocHJvZ3Jlc3MpIHtcbiAgICAgICAgdGhpcy5zZWVrVGltZSh0aGlzLmR1cmF0aW9uICogcHJvZ3Jlc3MpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZWVrVGltZShlbGFwc2VkKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0FjdGl2ZSB8fCB0aGlzLmlzU2NydWJiaW5nKSB7XG4gICAgICAgICAgICB0aGlzLm9uY2UoKTtcbiAgICAgICAgICAgIHRoaXMuaXNTY3J1YmJpbmcgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5lbGFwc2VkID0gZWxhcHNlZDtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG5cblR3ZWVuLnByb3RvdHlwZS5kZWZhdWx0VmFsdWVQcm9wID0gJ3RvJztcblR3ZWVuLnByb3RvdHlwZS5kZWZhdWx0VmFsdWUgPSBBY3Rpb24uZXh0ZW5kRGVmYXVsdFZhbHVlKHtcbiAgICBkZWxheTogMCxcbiAgICBkdXJhdGlvbjogMzAwLFxuICAgIGVhc2U6IGVhc2luZy5lYXNlT3V0LFxuICAgIGVsYXBzZWQ6IDAsXG4gICAgc3RlcHM6IDAsXG4gICAgdG86IDAsXG4gICAgcm91bmQ6IGZhbHNlXG59KTtcblR3ZWVuLnByb3RvdHlwZS5kZWZhdWx0UHJvcHMgPSBBY3Rpb24uZXh0ZW5kRGVmYXVsdFByb3BzKHtcbiAgICBibGVuZDogZmFsc2UsXG4gICAgZGlsYXRlOiAxLFxuICAgIGxvb3A6IDAsXG4gICAgeW95bzogMCxcbiAgICBmbGlwOiAwLFxuICAgIGxvb3BDb3VudDogMCxcbiAgICB5b3lvQ291bnQ6IDAsXG4gICAgZmxpcENvdW50OiAwLFxuICAgIHBsYXlEaXJlY3Rpb246IDEsXG4gICAgaXNTY3J1YmJpbmc6IGZhbHNlLFxuICAgIGVuZGVkOiBmYWxzZSxcbiAgICBlbGFwc2VkOiAwXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgVHdlZW47XG4iXX0=

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _Action2 = __webpack_require__(2);
	
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
	
	var _Action2 = __webpack_require__(2);
	
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
	                var inputProp = value.hasOwnProperty('watch') ? value.watch : key;
	
	                if (value.direct) {
	                    value.current = this.input.state[inputProp];
	                } else {
	                    value.current = value.from + this.inputOffset[inputProp];
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL1RyYWNrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQVFBLElBQU0sb0JBQW9CLFVBQUMsQ0FBRDtXQUFRO0FBQzlCLFdBQUcsRUFBRSxLQUFGO0FBQ0gsV0FBRyxFQUFFLEtBQUY7O0NBRm1COztBQUsxQixJQUFNLG9CQUFvQjtRQUFHO1dBQXNCO0FBQy9DLFdBQUcsZUFBZSxDQUFmLEVBQWtCLE9BQWxCO0FBQ0gsV0FBRyxlQUFlLENBQWYsRUFBa0IsT0FBbEI7O0NBRm1COztBQUsxQixJQUFNLGdCQUFnQixVQUFDLENBQUQ7V0FBTyxFQUFFLE9BQUYsR0FDekIsc0JBQVksa0JBQWtCLENBQWxCLENBQVosRUFBa0MsV0FBbEMsRUFBK0MsaUJBQS9DLENBRHlCLEdBRXpCLHNCQUFZLGtCQUFrQixDQUFsQixDQUFaLEVBQWtDLFdBQWxDLEVBQStDLGlCQUEvQyxDQUZ5QjtDQUFQOztBQUl0QixJQUFNLGlCQUFpQixVQUFDLENBQUQ7V0FBTyxFQUFFLGFBQUYsSUFBbUIsQ0FBbkI7Q0FBUDs7SUFFakI7Ozs7Ozs7OztvQkFDRix1QkFBTSxPQUFPO0FBQ1QsMEJBQU0sS0FBTixZQURTOztBQUdULFlBQUksS0FBSixFQUFXO0FBQ1AsaUJBQUssS0FBTCxHQUFhLE1BQU0sS0FBTixHQUFjLEtBQWQsR0FBc0IsY0FBYyxlQUFlLEtBQWYsQ0FBZCxDQUF0QixDQUROO1NBQVg7O0FBSUEsYUFBSyxXQUFMLEdBQW1CLEVBQW5CLENBUFM7QUFRVCxhQUFLLFdBQUwsZ0JBQXdCLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FBeEIsQ0FSUztBQVNULGFBQUssS0FBTCxDQUFXLEtBQVgsR0FUUzs7O0FBRFgsb0JBYUYsdUJBQU87QUFDSCwwQkFBTSxJQUFOLFlBREc7QUFFSCxhQUFLLEtBQUwsQ0FBVyxJQUFYLEdBRkc7OztBQWJMLG9CQWtCRiw2QkFBUyxPQUFPLFlBQVksU0FBUztBQUNqQyxhQUFLLFdBQUwsR0FBbUIsa0JBQU8sS0FBSyxXQUFMLEVBQWtCLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FBNUMsQ0FEaUM7O0FBR2pDLGFBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLEtBQUssWUFBTCxFQUFtQixHQUF2QyxFQUE0QztBQUN4QyxnQkFBTSxNQUFNLEtBQUssU0FBTCxDQUFlLENBQWYsQ0FBTixDQURrQzs7QUFHeEMsZ0JBQUksS0FBSyxXQUFMLENBQWlCLGNBQWpCLENBQWdDLEdBQWhDLENBQUosRUFBMEM7QUFDdEMsb0JBQU0sUUFBUSxLQUFLLE1BQUwsQ0FBWSxHQUFaLENBQVIsQ0FEZ0M7QUFFdEMsb0JBQU0sWUFBWSxNQUFNLGNBQU4sQ0FBcUIsT0FBckIsSUFBZ0MsTUFBTSxLQUFOLEdBQWMsR0FBOUMsQ0FGb0I7O0FBSXRDLG9CQUFJLE1BQU0sTUFBTixFQUFjO0FBQ2QsMEJBQU0sT0FBTixHQUFnQixLQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLFNBQWpCLENBQWhCLENBRGM7aUJBQWxCLE1BRU87QUFDSCwwQkFBTSxPQUFOLEdBQWdCLE1BQU0sSUFBTixHQUFhLEtBQUssV0FBTCxDQUFpQixTQUFqQixDQUFiLENBRGI7aUJBRlA7OztBQUpzQyxvQkFXbEMsTUFBTSxNQUFOLEVBQWM7QUFDZCwwQkFBTSxPQUFOLEdBQWdCLGtCQUFPLE1BQU0sT0FBTixFQUFlLE1BQU0sSUFBTixFQUFZLE9BQWxDLEVBQTJDLE1BQU0sTUFBTixDQUEzRCxDQURjO2lCQUFsQjthQVhKO1NBSEo7OztXQXJCRjs7O0FBMkNOLE1BQU0sU0FBTixDQUFnQixnQkFBaEIsR0FBbUMsT0FBbkM7QUFDQSxNQUFNLFNBQU4sQ0FBZ0IsWUFBaEIsR0FBK0IsaUJBQU8sa0JBQVAsQ0FBMEI7QUFDckQsWUFBUSxLQUFSO0NBRDJCLENBQS9COztrQkFJZSIsImZpbGUiOiJUcmFjay5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWN0aW9uIGZyb20gJy4vQWN0aW9uJztcbmltcG9ydCBQb2ludGVyIGZyb20gJy4uL2lucHV0L1BvaW50ZXInO1xuaW1wb3J0IHsgc21vb3RoLCBvZmZzZXQgfSBmcm9tICcuLi9pbmMvY2FsYyc7XG5cbi8qXG4gICAgU2NyYXBlIHgveSBjb29yZGluYXRlcyBmcm9tIHByb3ZpZGVkIGV2ZW50XG5cbiAgICBAcGFyYW0gW2V2ZW50XVxuICAgIEByZXR1cm4gW29iamVjdF1cbiovXG5jb25zdCBtb3VzZUV2ZW50VG9Qb2ludCA9IChlKSA9PiAoe1xuICAgIHg6IGUucGFnZVgsXG4gICAgeTogZS5wYWdlWVxufSk7XG5cbmNvbnN0IHRvdWNoRXZlbnRUb1BvaW50ID0gKHsgY2hhbmdlZFRvdWNoZXMgfSkgPT4gKHtcbiAgICB4OiBjaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYLFxuICAgIHk6IGNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFlcbn0pO1xuXG5jb25zdCBjcmVhdGVQb2ludGVyID0gKGUpID0+IGUudG91Y2hlcyA/XG4gICAgbmV3IFBvaW50ZXIodG91Y2hFdmVudFRvUG9pbnQoZSksICd0b3VjaG1vdmUnLCB0b3VjaEV2ZW50VG9Qb2ludCkgOiBcbiAgICBuZXcgUG9pbnRlcihtb3VzZUV2ZW50VG9Qb2ludChlKSwgJ21vdXNlbW92ZScsIG1vdXNlRXZlbnRUb1BvaW50KTtcblxuY29uc3QgZ2V0QWN0dWFsRXZlbnQgPSAoZSkgPT4gZS5vcmlnaW5hbEV2ZW50IHx8IGU7XG5cbmNsYXNzIFRyYWNrIGV4dGVuZHMgQWN0aW9uIHtcbiAgICBzdGFydChpbnB1dCkge1xuICAgICAgICBzdXBlci5zdGFydCgpO1xuXG4gICAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICAgICAgdGhpcy5pbnB1dCA9IGlucHV0LnN0YXRlID8gaW5wdXQgOiBjcmVhdGVQb2ludGVyKGdldEFjdHVhbEV2ZW50KGlucHV0KSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlucHV0T2Zmc2V0ID0ge307XG4gICAgICAgIHRoaXMuaW5wdXRPcmlnaW4gPSB7IC4uLnRoaXMuaW5wdXQuc3RhdGUgfTtcbiAgICAgICAgdGhpcy5pbnB1dC5zdGFydCgpO1xuICAgIH1cblxuICAgIHN0b3AoKSB7XG4gICAgICAgIHN1cGVyLnN0b3AoKTtcbiAgICAgICAgdGhpcy5pbnB1dC5zdG9wKCk7XG4gICAgfVxuXG4gICAgb25VcGRhdGUodHJhY2ssIGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgICAgICAgdGhpcy5pbnB1dE9mZnNldCA9IG9mZnNldCh0aGlzLmlucHV0T3JpZ2luLCB0aGlzLmlucHV0LnN0YXRlKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHRoaXMudmFsdWVLZXlzW2ldO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5pbnB1dE9mZnNldC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0UHJvcCA9IHZhbHVlLmhhc093blByb3BlcnR5KCd3YXRjaCcpID8gdmFsdWUud2F0Y2ggOiBrZXk7XG5cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUuZGlyZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSB0aGlzLmlucHV0LnN0YXRlW2lucHV0UHJvcF07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IHZhbHVlLmZyb20gKyB0aGlzLmlucHV0T2Zmc2V0W2lucHV0UHJvcF07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gU21vb3RoIHZhbHVlIGlmIHdlIGhhdmUgc21vb3RoaW5nXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLnNtb290aCkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gc21vb3RoKHZhbHVlLmN1cnJlbnQsIHZhbHVlLnByZXYsIGVsYXBzZWQsIHZhbHVlLnNtb290aCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5UcmFjay5wcm90b3R5cGUuZGVmYXVsdFZhbHVlUHJvcCA9ICd3YXRjaCc7XG5UcmFjay5wcm90b3R5cGUuZGVmYXVsdFZhbHVlID0gQWN0aW9uLmV4dGVuZERlZmF1bHRWYWx1ZSh7XG4gICAgZGlyZWN0OiBmYWxzZVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFRyYWNrO1xuIl19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2F0dHItYWRhcHRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7QUFFTyxJQUFNLDBCQUFTLFVBQUMsT0FBRCxFQUFVLEdBQVY7V0FBa0IsUUFBUSxZQUFSLENBQXFCLEdBQXJCO0NBQWxCO0FBQ2YsSUFBTSwwQkFBUyxVQUFDLE9BQUQsRUFBVSxLQUFWLEVBQW9CO0FBQ3RDLFNBQUssSUFBSSxHQUFKLElBQVcsS0FBaEIsRUFBdUI7QUFDbkIsWUFBSSxNQUFNLGNBQU4sQ0FBcUIsR0FBckIsQ0FBSixFQUErQjtBQUMzQixvQkFBUSxZQUFSLENBQXFCLEdBQXJCLEVBQTBCLE1BQU0sR0FBTixDQUExQixFQUQyQjtTQUEvQjtLQURKO0NBRGtCOztrQkFRUCx1QkFBYyxFQUFFLGNBQUYsRUFBVSxjQUFWLEVBQWQiLCJmaWxlIjoiYXR0ci1hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVBZGFwdGVyIGZyb20gJy4vYWRhcHRlcic7XG5cbmV4cG9ydCBjb25zdCBnZXR0ZXIgPSAoZWxlbWVudCwga2V5KSA9PiBlbGVtZW50LmdldEF0dHJpYnV0ZShrZXkpO1xuZXhwb3J0IGNvbnN0IHNldHRlciA9IChlbGVtZW50LCBwcm9wcykgPT4ge1xuICAgIGZvciAobGV0IGtleSBpbiBwcm9wcykge1xuICAgICAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBwcm9wc1trZXldKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUFkYXB0ZXIoeyBnZXR0ZXIsIHNldHRlciB9KTtcbiJdfQ==

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
	
	var _valueTypeMap = __webpack_require__(46);
	
	var _valueTypeMap2 = _interopRequireDefault(_valueTypeMap);
	
	var _transformProps = __webpack_require__(44);
	
	var _transformProps2 = _interopRequireDefault(_transformProps);
	
	var _build = __webpack_require__(47);
	
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
	
	var _build = __webpack_require__(45);
	
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
	
	var _Flow = __webpack_require__(3);
	
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
/* 35 */
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
	
	var _numericalValues = __webpack_require__(36);
	
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
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = ['current', 'from', 'to', 'velocity'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvbnVtZXJpY2FsLXZhbHVlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7a0JBQWUsQ0FBQyxTQUFELEVBQVksTUFBWixFQUFvQixJQUFwQixFQUEwQixVQUExQiIsImZpbGUiOiJudW1lcmljYWwtdmFsdWVzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFsnY3VycmVudCcsICdmcm9tJywgJ3RvJywgJ3ZlbG9jaXR5J107Il19

/***/ },
/* 37 */
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
	        _this.boundLatest = _this.latest.bind(_this);
	        return _this;
	    }
	
	    Pointer.prototype.latest = function latest(e) {
	        _Input.prototype.latest.call(this, this.eventToPoint(e));
	        e.preventDefault();
	    };
	
	    Pointer.prototype.start = function start() {
	        _Input.prototype.start.call(this);
	        document.documentElement.addEventListener(this.moveEvent, this.boundLatest);
	    };
	
	    Pointer.prototype.stop = function stop() {
	        _Input.prototype.stop.call(this);
	        document.documentElement.removeEventListener(this.moveEvent, this.boundLatest);
	    };
	
	    return Pointer;
	}(_Input3.default);
	
	exports.default = Pointer;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbnB1dC9Qb2ludGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRXFCOzs7QUFDakIsYUFEaUIsT0FDakIsQ0FBWSxZQUFaLEVBQTBCLFNBQTFCLEVBQXFDLFlBQXJDLEVBQW1EOzhCQURsQyxTQUNrQzs7cURBQy9DLGtCQUFNLFlBQU4sR0FEK0M7O0FBRS9DLGNBQUssWUFBTCxHQUFvQixZQUFwQixDQUYrQztBQUcvQyxjQUFLLFNBQUwsR0FBaUIsU0FBakIsQ0FIK0M7QUFJL0MsY0FBSyxXQUFMLEdBQW1CLE1BQUssTUFBTCxDQUFZLElBQVosT0FBbkIsQ0FKK0M7O0tBQW5EOztBQURpQixzQkFRakIseUJBQU8sR0FBRztBQUNOLHlCQUFNLE1BQU4sWUFBYSxLQUFLLFlBQUwsQ0FBa0IsQ0FBbEIsQ0FBYixFQURNO0FBRU4sVUFBRSxjQUFGLEdBRk07OztBQVJPLHNCQWFqQix5QkFBUTtBQUNKLHlCQUFNLEtBQU4sWUFESTtBQUVKLGlCQUFTLGVBQVQsQ0FBeUIsZ0JBQXpCLENBQTBDLEtBQUssU0FBTCxFQUFnQixLQUFLLFdBQUwsQ0FBMUQsQ0FGSTs7O0FBYlMsc0JBa0JqQix1QkFBTztBQUNILHlCQUFNLElBQU4sWUFERztBQUVILGlCQUFTLGVBQVQsQ0FBeUIsbUJBQXpCLENBQTZDLEtBQUssU0FBTCxFQUFnQixLQUFLLFdBQUwsQ0FBN0QsQ0FGRzs7O1dBbEJVIiwiZmlsZSI6IlBvaW50ZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElucHV0IGZyb20gJy4vSW5wdXQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2ludGVyIGV4dGVuZHMgSW5wdXQge1xuICAgIGNvbnN0cnVjdG9yKGluaXRpYWxTdGF0ZSwgbW92ZUV2ZW50LCBldmVudFRvUG9pbnQpIHtcbiAgICAgICAgc3VwZXIoaW5pdGlhbFN0YXRlKTtcbiAgICAgICAgdGhpcy5ldmVudFRvUG9pbnQgPSBldmVudFRvUG9pbnQ7XG4gICAgICAgIHRoaXMubW92ZUV2ZW50ID0gbW92ZUV2ZW50O1xuICAgICAgICB0aGlzLmJvdW5kTGF0ZXN0ID0gdGhpcy5sYXRlc3QuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBsYXRlc3QoZSkge1xuICAgICAgICBzdXBlci5sYXRlc3QodGhpcy5ldmVudFRvUG9pbnQoZSkpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHN1cGVyLnN0YXJ0KCk7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHRoaXMubW92ZUV2ZW50LCB0aGlzLmJvdW5kTGF0ZXN0KTtcbiAgICB9XG5cbiAgICBzdG9wKCkge1xuICAgICAgICBzdXBlci5zdG9wKCk7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMubW92ZUV2ZW50LCB0aGlzLmJvdW5kTGF0ZXN0KTtcbiAgICB9XG59XG4iXX0=

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.deactivate = exports.getTaskId = undefined;
	exports.activate = activate;
	
	var _timer = __webpack_require__(4);
	
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
	
	        propertyString += ';' + (0, _prefixer2.default)('transform', true) + ':' + transformString;
	    }
	
	    return propertyString;
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2Nzcy9idWlsZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTSxjQUFjLFlBQWQ7O2tCQUVTLFVBQUMsS0FBRCxFQUFRLDJCQUFSLEVBQXdDO0FBQ25ELFFBQUksaUJBQWlCLEVBQWpCLENBRCtDO0FBRW5ELFFBQUksa0JBQWtCLEVBQWxCLENBRitDO0FBR25ELFFBQUksZ0JBQWdCLEtBQWhCLENBSCtDOztBQUtuRCxTQUFLLElBQUksR0FBSixJQUFXLEtBQWhCLEVBQXVCO0FBQ25CLFlBQUksTUFBTSxjQUFOLENBQXFCLEdBQXJCLENBQUosRUFBK0I7QUFDM0IsZ0JBQU0sUUFBUSxNQUFNLEdBQU4sQ0FBUixDQURxQjs7QUFHM0IsZ0JBQUkseUJBQWUsR0FBZixDQUFKLEVBQXlCO0FBQ3JCLG1DQUFtQixNQUFNLEdBQU4sR0FBWSxLQUFaLEdBQW9CLElBQXBCLENBREU7QUFFckIsZ0NBQWdCLEdBQUMsS0FBUSxXQUFSLEdBQXVCLElBQXhCLEdBQStCLGFBQS9CLENBRks7YUFBekIsTUFJTztBQUNILGtDQUFrQixNQUFNLHdCQUFTLEdBQVQsRUFBYyxJQUFkLENBQU4sR0FBNEIsR0FBNUIsR0FBa0MsS0FBbEMsQ0FEZjthQUpQO1NBSEo7S0FESjs7QUFjQSxRQUFJLG9CQUFvQixFQUFwQixFQUF3QjtBQUN4QixZQUFJLENBQUMsYUFBRCxJQUFrQixDQUFDLDJCQUFELEVBQThCO0FBQ2hELCtCQUFtQixjQUFjLE9BQWQsQ0FENkI7U0FBcEQ7O0FBSUEsMEJBQWtCLE1BQU0sd0JBQVMsV0FBVCxFQUFxQixJQUFyQixDQUFOLEdBQW1DLEdBQW5DLEdBQXlDLGVBQXpDLENBTE07S0FBNUI7O0FBUUEsV0FBTyxjQUFQLENBM0JtRDtDQUF4QyIsImZpbGUiOiJidWlsZC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHJhbnNmb3JtUHJvcHMgZnJvbSAnLi90cmFuc2Zvcm0tcHJvcHMnO1xuaW1wb3J0IHByZWZpeGVyIGZyb20gJy4vcHJlZml4ZXInO1xuXG5jb25zdCBUUkFOU0xBVEVfWiA9ICd0cmFuc2xhdGVaJztcblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlLCBkaXNhYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pID0+IHtcbiAgICBsZXQgcHJvcGVydHlTdHJpbmcgPSAnJztcbiAgICBsZXQgdHJhbnNmb3JtU3RyaW5nID0gJyc7XG4gICAgbGV0IHRyYW5zZm9ybUhhc1ogPSBmYWxzZTtcblxuICAgIGZvciAobGV0IGtleSBpbiBzdGF0ZSkge1xuICAgICAgICBpZiAoc3RhdGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBzdGF0ZVtrZXldO1xuXG4gICAgICAgICAgICBpZiAodHJhbnNmb3JtUHJvcHNba2V5XSkge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybVN0cmluZyArPSBrZXkgKyAnKCcgKyB2YWx1ZSArICcpICc7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtSGFzWiA9IChrZXkgPT09IFRSQU5TTEFURV9aKSA/IHRydWUgOiB0cmFuc2Zvcm1IYXNaO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHByb3BlcnR5U3RyaW5nICs9ICc7JyArIHByZWZpeGVyKGtleSwgdHJ1ZSkgKyAnOicgKyB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0cmFuc2Zvcm1TdHJpbmcgIT09ICcnKSB7XG4gICAgICAgIGlmICghdHJhbnNmb3JtSGFzWiAmJiAhZGlzYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm1TdHJpbmcgKz0gVFJBTlNMQVRFX1ogKyAnKDBweCknO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJvcGVydHlTdHJpbmcgKz0gJzsnICsgcHJlZml4ZXIoJ3RyYW5zZm9ybScsdHJ1ZSkgKyAnOicgKyB0cmFuc2Zvcm1TdHJpbmc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5U3RyaW5nO1xufTsiXX0=

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
/* 46 */
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
/* 47 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOWE4YTIxZTgyNzcxODExM2M3NWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvYWQvZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9wb3Btb3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvQWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL0Zsb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rhc2svdGltZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvVHdlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvUGh5c2ljcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9UcmFjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGFzay9UYXNrLmpzIiwid2VicGFjazovLy8uL3NyYy9pbnB1dC9JbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL3N0YWdnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy90aW1lbGluZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9hZGFwdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hZGFwdGVyL2F0dHItYWRhcHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9jc3MtYWRhcHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9vYmplY3QtYWRhcHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9zdmctYWRhcHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9zdmctcGF0aC1hZGFwdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2Vhc2luZy9wcmVzZXQtZWFzaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2Zsb3cvZ2V0LWZsb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy9jYWxjLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL2FscGhhLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9hbmdsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvY29sb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL2NvbXBsZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL2hleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvaHNsLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9weC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvcmdiLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9zY2FsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvc2hhZG93LmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy91bml0LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvdHJhbnNmb3JtZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2Zsb3cvZ2VuZXJhdGUtYmxlbmQtY3VydmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL2RldGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL251bWVyaWNhbC12YWx1ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy9kZXRlY3QtYWRhcHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5wdXQvUG9pbnRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGFzay9sb29wLmpzIiwid2VicGFjazovLy8uL3NyYy9hZGFwdGVyL2Nzcy9zdGF0ZS1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkYXB0ZXIvY3NzL3ZhbHVlLXR5cGUtbWFwLmpzIiwid2VicGFjazovLy8uL3NyYy9hZGFwdGVyL2Nzcy9idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9jc3MvcHJlZml4ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkYXB0ZXIvY3NzL3RyYW5zZm9ybS1wcm9wcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9zdmctcGF0aC9idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9zdmcvdmFsdWUtdHlwZS1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkYXB0ZXIvc3ZnL2J1aWxkLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kZWZhdWx0LXByb3BzLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kaWN0aW9uYXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2Vhc2luZy9jcmVhdGUtZWFzaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2Vhc2luZy9jcmVhdGUtYmV6aWVyLmpzIiwid2VicGFjazovLy8uL3NyYy90YXNrL3RpY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rhc2svbWFuYWdlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx3Qzs7Ozs7OztBQ3RDQTs7QUFFQTs7QUFFQTs7QUFFQSx3Q0FBdUMsNkJBQTZCLFlBQVksRUFBRSxPQUFPLGlCQUFpQixtQkFBbUIsdUJBQXVCLDRFQUE0RSxFQUFFLEVBQUUsc0JBQXNCLGVBQWUsRUFBRTs7QUFFM1E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTJDLG1xQjs7Ozs7O0FDZjNDOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7O0FBRUE7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RUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1RkFBc0YsYUFBYTtBQUNuRztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTJDLHU5Szs7Ozs7O0FDMUczQzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLHdDQUF1QyxxQ0FBcUM7O0FBRTVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLDRDQUEyQywyeEM7Ozs7OztBQzVCM0M7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTJDLHVwZTs7Ozs7O0FDOVQzQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW1CLGNBQWM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHFCQUFvQjs7QUFFcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLGlCQUFnQjtBQUNoQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW1CLG1CQUFtQjtBQUN0QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtB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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBMkMsMnVGOzs7Ozs7QUM5QzNDOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBMkMsKytCOzs7Ozs7QUNsQzNDOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBMkMsbW1KOzs7Ozs7QUN6RDNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTJDLHV3Qjs7Ozs7O0FDbkIzQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTJDLDJxQzs7Ozs7O0FDWjNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBMkMsdTlGOzs7Ozs7QUN6RDNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsOEJBQTZCO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWMsdUJBQXVCO0FBQ3JDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHdCQUF1Qix5QkFBeUI7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWMsa0VBQWtFO0FBQ2hGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBUztBQUNUOztBQUVBO0FBQ0EsY0FBYTtBQUNiO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTJDLCswVTs7Ozs7O0FDakszQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBLDRDQUEyQyx1MUU7Ozs7OztBQzlDM0M7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBdUIsMkJBQTJCO0FBQ2xEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlCQUF3QiwwQkFBMEI7QUFDbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBMkMsMjdRIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgOWE4YTIxZTgyNzcxODExM2M3NWZcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfcG9wbW90aW9uID0gcmVxdWlyZSgnLi4vcG9wbW90aW9uJyk7XG5cbnZhciBwb3Btb3Rpb24gPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfcG9wbW90aW9uKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxudmFyIFVJcmVmID0gd2luZG93Lm1vdGlvbjtcblxucG9wbW90aW9uLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgd2luZG93Lm1vdGlvbiA9IFVJcmVmO1xufTtcblxud2luZG93Lm1vdGlvbiA9IHdpbmRvdy5wb3Btb3Rpb24gPSBwb3Btb3Rpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXNiMkZrTDJkc2IySmhiQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVRkJPenRKUVVGWk96czdPMEZCUlZvc1NVRkJUU3hSUVVGUkxFOUJRVThzVFVGQlVEczdRVUZGWkN4VlFVRlZMRlZCUVZZc1IwRkJkVUlzV1VGQldUdEJRVU12UWl4WFFVRlBMRTFCUVZBc1IwRkJaMElzUzBGQmFFSXNRMEZFSzBJN1EwRkJXanM3UVVGSmRrSXNUMEZCVHl4TlFVRlFMRWRCUVdkQ0xFOUJRVThzVTBGQlVDeEhRVUZ0UWl4VFFVRnVRaUlzSW1acGJHVWlPaUpuYkc5aVlXd3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFF2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJQ29nWVhNZ2NHOXdiVzkwYVc5dUlHWnliMjBnSnk0dUwzQnZjRzF2ZEdsdmJpYzdYRzVjYm1OdmJuTjBJRlZKY21WbUlEMGdkMmx1Wkc5M0xtMXZkR2x2Ymp0Y2JseHVjRzl3Ylc5MGFXOXVMbTV2UTI5dVpteHBZM1FnUFNCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ2QybHVaRzkzTG0xdmRHbHZiaUE5SUZWSmNtVm1PMXh1ZlR0Y2JseHVkMmx1Wkc5M0xtMXZkR2x2YmlBOUlIZHBibVJ2ZHk1d2IzQnRiM1JwYjI0Z1BTQndiM0J0YjNScGIyNDdJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9sb2FkL2dsb2JhbC5qc1xuICoqIG1vZHVsZSBpZCA9IDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuQWN0aW9uID0gZXhwb3J0cy50cmFuc2Zvcm1lcnMgPSBleHBvcnRzLnZhbHVlVHlwZSA9IGV4cG9ydHMuc2V0R2xvYmFsRGlsYXRpb24gPSBleHBvcnRzLnV0aWxzID0gZXhwb3J0cy5jYWxjID0gZXhwb3J0cy5kZXRlY3RGbG93ID0gZXhwb3J0cy5lYXNpbmcgPSBleHBvcnRzLnN2Z1BhdGggPSBleHBvcnRzLnN2ZyA9IGV4cG9ydHMub2JqZWN0ID0gZXhwb3J0cy5jc3MgPSBleHBvcnRzLmF0dHIgPSBleHBvcnRzLmNyZWF0ZUFkYXB0ZXIgPSBleHBvcnRzLnRpbWVsaW5lID0gZXhwb3J0cy5zdGFnZ2VyID0gZXhwb3J0cy50YXNrID0gZXhwb3J0cy5pbnB1dCA9IGV4cG9ydHMudHJhY2sgPSBleHBvcnRzLnBoeXNpY3MgPSBleHBvcnRzLnR3ZWVuID0gZXhwb3J0cy5mbG93ID0gdW5kZWZpbmVkO1xuXG52YXIgX3RpbWVyID0gcmVxdWlyZSgnLi90YXNrL3RpbWVyJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnc2V0R2xvYmFsRGlsYXRpb24nLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aW1lci5zZXRHbG9iYWxEaWxhdGlvbjtcbiAgICB9XG59KTtcblxudmFyIF9BY3Rpb24gPSByZXF1aXJlKCcuL2FjdGlvbnMvQWN0aW9uJyk7XG5cbnZhciBfQWN0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0FjdGlvbik7XG5cbnZhciBfRmxvdyA9IHJlcXVpcmUoJy4vYWN0aW9ucy9GbG93Jyk7XG5cbnZhciBfRmxvdzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9GbG93KTtcblxudmFyIF9Ud2VlbiA9IHJlcXVpcmUoJy4vYWN0aW9ucy9Ud2VlbicpO1xuXG52YXIgX1R3ZWVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1R3ZWVuKTtcblxudmFyIF9QaHlzaWNzID0gcmVxdWlyZSgnLi9hY3Rpb25zL1BoeXNpY3MnKTtcblxudmFyIF9QaHlzaWNzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BoeXNpY3MpO1xuXG52YXIgX1RyYWNrID0gcmVxdWlyZSgnLi9hY3Rpb25zL1RyYWNrJyk7XG5cbnZhciBfVHJhY2syID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVHJhY2spO1xuXG52YXIgX1Rhc2sgPSByZXF1aXJlKCcuL3Rhc2svVGFzaycpO1xuXG52YXIgX1Rhc2syID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVGFzayk7XG5cbnZhciBfSW5wdXQgPSByZXF1aXJlKCcuL2lucHV0L0lucHV0Jyk7XG5cbnZhciBfSW5wdXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfSW5wdXQpO1xuXG52YXIgX3N0YWdnZXIyID0gcmVxdWlyZSgnLi9pbmMvc3RhZ2dlcicpO1xuXG52YXIgX3N0YWdnZXIzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RhZ2dlcjIpO1xuXG52YXIgX3RpbWVsaW5lMiA9IHJlcXVpcmUoJy4vaW5jL3RpbWVsaW5lJyk7XG5cbnZhciBfdGltZWxpbmUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdGltZWxpbmUyKTtcblxudmFyIF9hZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVyL2FkYXB0ZXInKTtcblxudmFyIF9hZGFwdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FkYXB0ZXIpO1xuXG52YXIgX2F0dHJBZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVyL2F0dHItYWRhcHRlcicpO1xuXG52YXIgX2F0dHJBZGFwdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2F0dHJBZGFwdGVyKTtcblxudmFyIF9jc3NBZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVyL2Nzcy1hZGFwdGVyJyk7XG5cbnZhciBfY3NzQWRhcHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jc3NBZGFwdGVyKTtcblxudmFyIF9vYmplY3RBZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVyL29iamVjdC1hZGFwdGVyJyk7XG5cbnZhciBfb2JqZWN0QWRhcHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3RBZGFwdGVyKTtcblxudmFyIF9zdmdBZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVyL3N2Zy1hZGFwdGVyJyk7XG5cbnZhciBfc3ZnQWRhcHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdmdBZGFwdGVyKTtcblxudmFyIF9zdmdQYXRoQWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlci9zdmctcGF0aC1hZGFwdGVyJyk7XG5cbnZhciBfc3ZnUGF0aEFkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ZnUGF0aEFkYXB0ZXIpO1xuXG52YXIgX3ByZXNldEVhc2luZyA9IHJlcXVpcmUoJy4vYWN0aW9ucy9lYXNpbmcvcHJlc2V0LWVhc2luZycpO1xuXG52YXIgX3ByZXNldEVhc2luZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmVzZXRFYXNpbmcpO1xuXG52YXIgX2dldEZsb3cgPSByZXF1aXJlKCcuL2FjdGlvbnMvZmxvdy9nZXQtZmxvdycpO1xuXG52YXIgX2dldEZsb3cyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0Rmxvdyk7XG5cbnZhciBfY2FsYzIgPSByZXF1aXJlKCcuL2luYy9jYWxjJyk7XG5cbnZhciBfY2FsYyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9jYWxjMik7XG5cbnZhciBfdXRpbHMyID0gcmVxdWlyZSgnLi9pbmMvdXRpbHMnKTtcblxudmFyIF91dGlscyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF91dGlsczIpO1xuXG52YXIgX2FscGhhID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy9hbHBoYScpO1xuXG52YXIgX2FscGhhMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FscGhhKTtcblxudmFyIF9hbmdsZSA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvYW5nbGUnKTtcblxudmFyIF9hbmdsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hbmdsZSk7XG5cbnZhciBfY29sb3IgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL2NvbG9yJyk7XG5cbnZhciBfY29sb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29sb3IpO1xuXG52YXIgX2NvbXBsZXggPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL2NvbXBsZXgnKTtcblxudmFyIF9jb21wbGV4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbXBsZXgpO1xuXG52YXIgX2hleCA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvaGV4Jyk7XG5cbnZhciBfaGV4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hleCk7XG5cbnZhciBfaHNsID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy9oc2wnKTtcblxudmFyIF9oc2wyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaHNsKTtcblxudmFyIF9weCA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvcHgnKTtcblxudmFyIF9weDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9weCk7XG5cbnZhciBfcmdiID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy9yZ2InKTtcblxudmFyIF9yZ2IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmdiKTtcblxudmFyIF9zY2FsZSA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvc2NhbGUnKTtcblxudmFyIF9zY2FsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zY2FsZSk7XG5cbnZhciBfc2hhZG93ID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy9zaGFkb3cnKTtcblxudmFyIF9zaGFkb3cyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2hhZG93KTtcblxudmFyIF91bml0ID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy91bml0Jyk7XG5cbnZhciBfdW5pdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91bml0KTtcblxudmFyIF90cmFuc2Zvcm1lcnMyID0gcmVxdWlyZSgnLi9pbmMvdHJhbnNmb3JtZXJzJyk7XG5cbnZhciBfdHJhbnNmb3JtZXJzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3RyYW5zZm9ybWVyczIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vLyBFeHBvcnQgZmFjdG9yeSBmdW5jdGlvbnNcbnZhciBmbG93ID0gZXhwb3J0cy5mbG93ID0gZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoX0Zsb3cyLmRlZmF1bHQsIFtudWxsXS5jb25jYXQoYXJncykpKSgpO1xufTsgLy8gSW1wb3J0IGNsYXNzZXMgLSBsb25nIHRlcm0gZ29hbCB0byBtb3ZlIHRvd2FyZHMgY29tcG9zaXRpb25cblxudmFyIHR3ZWVuID0gZXhwb3J0cy50d2VlbiA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHJldHVybiBuZXcgX1R3ZWVuMi5kZWZhdWx0KHByb3BzKTtcbn07XG52YXIgcGh5c2ljcyA9IGV4cG9ydHMucGh5c2ljcyA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHJldHVybiBuZXcgX1BoeXNpY3MyLmRlZmF1bHQocHJvcHMpO1xufTtcbnZhciB0cmFjayA9IGV4cG9ydHMudHJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KF9UcmFjazIuZGVmYXVsdCwgW251bGxdLmNvbmNhdChhcmdzKSkpKCk7XG59O1xudmFyIGlucHV0ID0gZXhwb3J0cy5pbnB1dCA9IGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMyksIF9rZXkzID0gMDsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgICAgICBhcmdzW19rZXkzXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoX0lucHV0Mi5kZWZhdWx0LCBbbnVsbF0uY29uY2F0KGFyZ3MpKSkoKTtcbn07XG52YXIgdGFzayA9IGV4cG9ydHMudGFzayA9IGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBfbGVuNCA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuNCksIF9rZXk0ID0gMDsgX2tleTQgPCBfbGVuNDsgX2tleTQrKykge1xuICAgICAgICBhcmdzW19rZXk0XSA9IGFyZ3VtZW50c1tfa2V5NF07XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoX1Rhc2syLmRlZmF1bHQsIFtudWxsXS5jb25jYXQoYXJncykpKSgpO1xufTtcbmV4cG9ydHMuc3RhZ2dlciA9IF9zdGFnZ2VyMy5kZWZhdWx0O1xuZXhwb3J0cy50aW1lbGluZSA9IF90aW1lbGluZTMuZGVmYXVsdDtcblxuLy8gQWRhcHRlcnNcblxuZXhwb3J0cy5jcmVhdGVBZGFwdGVyID0gX2FkYXB0ZXIyLmRlZmF1bHQ7XG5leHBvcnRzLmF0dHIgPSBfYXR0ckFkYXB0ZXIyLmRlZmF1bHQ7XG5leHBvcnRzLmNzcyA9IF9jc3NBZGFwdGVyMi5kZWZhdWx0O1xuZXhwb3J0cy5vYmplY3QgPSBfb2JqZWN0QWRhcHRlcjIuZGVmYXVsdDtcbmV4cG9ydHMuc3ZnID0gX3N2Z0FkYXB0ZXIyLmRlZmF1bHQ7XG5leHBvcnRzLnN2Z1BhdGggPSBfc3ZnUGF0aEFkYXB0ZXIyLmRlZmF1bHQ7XG5cbi8vIEVhc2luZ1xuXG5leHBvcnRzLmVhc2luZyA9IF9wcmVzZXRFYXNpbmcyLmRlZmF1bHQ7XG52YXIgZGV0ZWN0RmxvdyA9IGV4cG9ydHMuZGV0ZWN0RmxvdyA9IF9nZXRGbG93Mi5kZWZhdWx0O1xuXG4vLyBVdGlsc1xuZXhwb3J0cy5jYWxjID0gX2NhbGM7XG5leHBvcnRzLnV0aWxzID0gX3V0aWxzO1xuXG4vLyBWYWx1ZSB0eXBlc1xuXG52YXIgdmFsdWVUeXBlID0gZXhwb3J0cy52YWx1ZVR5cGUgPSB7IGFscGhhOiBfYWxwaGEyLmRlZmF1bHQsIGFuZ2xlOiBfYW5nbGUyLmRlZmF1bHQsIGNvbG9yOiBfY29sb3IyLmRlZmF1bHQsIGNvbXBsZXg6IF9jb21wbGV4Mi5kZWZhdWx0LCBoZXg6IF9oZXgyLmRlZmF1bHQsIGhzbDogX2hzbDIuZGVmYXVsdCwgcHg6IF9weDIuZGVmYXVsdCwgcmdiOiBfcmdiMi5kZWZhdWx0LCBzY2FsZTogX3NjYWxlMi5kZWZhdWx0LCBzaGFkb3c6IF9zaGFkb3cyLmRlZmF1bHQsIHVuaXQ6IF91bml0Mi5kZWZhdWx0IH07XG5cbi8vIFRyYW5zZm9ybWVyc1xuZXhwb3J0cy50cmFuc2Zvcm1lcnMgPSBfdHJhbnNmb3JtZXJzO1xuXG4vKlxuICAgIFJldHVybnMgYSB2ZXJzaW9uIG9mIHRoZSBBY3Rpb24gYm91bmQgdG8gYSBGbG93XG5cbiAgICBXZSdyZSBhZGRpbmcgYG9uYCBoZXJlIGJlY2F1c2UgRmxvdyBleHRlbmRzIEFjdGlvbixcbiAgICBvdGhlcndpc2UgY3JlYXRpbmcgYSBjaXJjdWxhciBtb2R1bGFyIGRlcGVuZGVuY3kuIEZ1dHVyZVxuICAgIHJlZmFjdG9yaW5nLCBpZSBtb3ZpbmcgdG8gYSBjb21wb3NpdGlvbmFsIG1vZGVsIHdpbGxcbiAgICByZW1vdmUgdGhlIG5lZWQgZm9yIHVzIHRvIGRvIHRoaXMgaGVyZS5cbiovXG5cbl9BY3Rpb24yLmRlZmF1bHQucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICBpZiAoIWVsZW1lbnQuY29ubmVjdCkge1xuICAgICAgICBlbGVtZW50ID0gKDAsIF9nZXRGbG93Mi5kZWZhdWx0KShlbGVtZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudC5jb25uZWN0KHRoaXMpO1xufTtcblxuZXhwb3J0cy5BY3Rpb24gPSBfQWN0aW9uMi5kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl3YjNCdGIzUnBiMjR1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3T3p0elFrRnRRMU03T3pzN1FVRnNRMVE3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3TzBGQlEwRTdPenM3UVVGRFFUczdPenRCUVVOQk96czdPMEZCUTBFN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdRVUZ6UWtFN096czdPenM3T3pzN096dEJRVk5CT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3TzBGQlEwRTdPenM3UVVGRFFUczdPenRCUVVOQk96czdPMEZCUTBFN096czdRVUZEUVRzN096dEJRVU5CT3pzN08wRkJRMEU3T3pzN096czdPenM3T3pzN1FVRjBRMDhzU1VGQlRTeHpRa0ZCVHp0elEwRkJTVHM3T3pzMFJVRkJjVUk3UTBGQmVrSTdPMEZCUTJJc1NVRkJUU3gzUWtGQlVTeFZRVUZETEV0QlFVUTdWMEZCVnl4dlFrRkJWU3hMUVVGV08wTkJRVmc3UVVGRFpDeEpRVUZOTERSQ1FVRlZMRlZCUVVNc1MwRkJSRHRYUVVGWExITkNRVUZaTEV0QlFWbzdRMEZCV0R0QlFVTm9RaXhKUVVGTkxIZENRVUZSTzNWRFFVRkpPenM3T3paRlFVRnpRanREUVVFeFFqdEJRVU5rTEVsQlFVMHNkMEpCUVZFN2RVTkJRVWs3T3pzN05rVkJRWE5DTzBOQlFURkNPMEZCUTJRc1NVRkJUU3h6UWtGQlR6dDFRMEZCU1RzN096czBSVUZCY1VJN1EwRkJla0k3VVVGRFlqdFJRVU5CT3pzN08xRkJSMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPenM3TzFGQlIwRTdRVUZGUVN4SlFVRk5MRzFFUVVGT096czdVVUZIU3p0UlFVTkJPenM3TzBGQlpVd3NTVUZCVFN4blEwRkJXU3hGUVVGRkxITkNRVUZHTEVWQlFWTXNjMEpCUVZRc1JVRkJaMElzYzBKQlFXaENMRVZCUVhWQ0xEQkNRVUYyUWl4RlFVRm5ReXhyUWtGQmFFTXNSVUZCY1VNc2EwSkJRWEpETEVWQlFUQkRMR2RDUVVFeFF5eEZRVUU0UXl4clFrRkJPVU1zUlVGQmJVUXNjMEpCUVc1RUxFVkJRVEJFTEhkQ1FVRXhSQ3hGUVVGclJTeHZRa0ZCYkVVc1JVRkJXanM3TzFGQlIwUTdPenM3T3pzN096czdPMEZCVlZvc2FVSkJRVThzVTBGQlVDeERRVUZwUWl4RlFVRnFRaXhIUVVGelFpeFZRVUZWTEU5QlFWWXNSVUZCYlVJN1FVRkRja01zVVVGQlNTeERRVUZETEZGQlFWRXNUMEZCVWl4RlFVRnBRanRCUVVOc1FpeHJRa0ZCVlN4MVFrRkJVU3hQUVVGU0xFTkJRVllzUTBGRWEwSTdTMEZCZEVJN08wRkJTVUVzVjBGQlR5eFJRVUZSTEU5QlFWSXNRMEZCWjBJc1NVRkJhRUlzUTBGQlVDeERRVXh4UXp0RFFVRnVRanM3VVVGUllpSXNJbVpwYkdVaU9pSndiM0J0YjNScGIyNHVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFF2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTHk4Z1NXMXdiM0owSUdOc1lYTnpaWE1nTFNCc2IyNW5JSFJsY20wZ1oyOWhiQ0IwYnlCdGIzWmxJSFJ2ZDJGeVpITWdZMjl0Y0c5emFYUnBiMjVjYm1sdGNHOXlkQ0JCWTNScGIyNGdabkp2YlNBbkxpOWhZM1JwYjI1ekwwRmpkR2x2YmljN1hHNXBiWEJ2Y25RZ1JteHZkeUJtY205dElDY3VMMkZqZEdsdmJuTXZSbXh2ZHljN1hHNXBiWEJ2Y25RZ1ZIZGxaVzRnWm5KdmJTQW5MaTloWTNScGIyNXpMMVIzWldWdUp6dGNibWx0Y0c5eWRDQlFhSGx6YVdOeklHWnliMjBnSnk0dllXTjBhVzl1Y3k5UWFIbHphV056Snp0Y2JtbHRjRzl5ZENCVWNtRmpheUJtY205dElDY3VMMkZqZEdsdmJuTXZWSEpoWTJzbk8xeHVhVzF3YjNKMElGUmhjMnNnWm5KdmJTQW5MaTkwWVhOckwxUmhjMnNuTzF4dWFXMXdiM0owSUVsdWNIVjBJR1p5YjIwZ0p5NHZhVzV3ZFhRdlNXNXdkWFFuTzF4dVhHNHZMeUJGZUhCdmNuUWdabUZqZEc5eWVTQm1kVzVqZEdsdmJuTmNibVY0Y0c5eWRDQmpiMjV6ZENCbWJHOTNJRDBnS0M0dUxtRnlaM01wSUQwK0lHNWxkeUJHYkc5M0tDNHVMbUZ5WjNNcE8xeHVaWGh3YjNKMElHTnZibk4wSUhSM1pXVnVJRDBnS0hCeWIzQnpLU0E5UGlCdVpYY2dWSGRsWlc0b2NISnZjSE1wTzF4dVpYaHdiM0owSUdOdmJuTjBJSEJvZVhOcFkzTWdQU0FvY0hKdmNITXBJRDArSUc1bGR5QlFhSGx6YVdOektIQnliM0J6S1R0Y2JtVjRjRzl5ZENCamIyNXpkQ0IwY21GamF5QTlJQ2d1TGk1aGNtZHpLU0E5UGlCdVpYY2dWSEpoWTJzb0xpNHVZWEpuY3lrN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnYVc1d2RYUWdQU0FvTGk0dVlYSm5jeWtnUFQ0Z2JtVjNJRWx1Y0hWMEtDNHVMbUZ5WjNNcE8xeHVaWGh3YjNKMElHTnZibk4wSUhSaGMyc2dQU0FvTGk0dVlYSm5jeWtnUFQ0Z2JtVjNJRlJoYzJzb0xpNHVZWEpuY3lrN1hHNWxlSEJ2Y25RZ2MzUmhaMmRsY2lCbWNtOXRJQ2N1TDJsdVl5OXpkR0ZuWjJWeUp6dGNibVY0Y0c5eWRDQjBhVzFsYkdsdVpTQm1jbTl0SUNjdUwybHVZeTkwYVcxbGJHbHVaU2M3WEc1Y2JpOHZJRUZrWVhCMFpYSnpYRzVsZUhCdmNuUWdZM0psWVhSbFFXUmhjSFJsY2lCbWNtOXRJQ2N1TDJGa1lYQjBaWEl2WVdSaGNIUmxjaWM3WEc1bGVIQnZjblFnWVhSMGNpQm1jbTl0SUNjdUwyRmtZWEIwWlhJdllYUjBjaTFoWkdGd2RHVnlKenRjYm1WNGNHOXlkQ0JqYzNNZ1puSnZiU0FuTGk5aFpHRndkR1Z5TDJOemN5MWhaR0Z3ZEdWeUp6dGNibVY0Y0c5eWRDQnZZbXBsWTNRZ1puSnZiU0FuTGk5aFpHRndkR1Z5TDI5aWFtVmpkQzFoWkdGd2RHVnlKenRjYm1WNGNHOXlkQ0J6ZG1jZ1puSnZiU0FuTGk5aFpHRndkR1Z5TDNOMlp5MWhaR0Z3ZEdWeUp6dGNibVY0Y0c5eWRDQnpkbWRRWVhSb0lHWnliMjBnSnk0dllXUmhjSFJsY2k5emRtY3RjR0YwYUMxaFpHRndkR1Z5Snp0Y2JseHVMeThnUldGemFXNW5YRzVsZUhCdmNuUWdaV0Z6YVc1bklHWnliMjBnSnk0dllXTjBhVzl1Y3k5bFlYTnBibWN2Y0hKbGMyVjBMV1ZoYzJsdVp5YzdYRzVwYlhCdmNuUWdaMlYwUm14dmR5Qm1jbTl0SUNjdUwyRmpkR2x2Ym5NdlpteHZkeTluWlhRdFpteHZkeWM3WEc1bGVIQnZjblFnWTI5dWMzUWdaR1YwWldOMFJteHZkeUE5SUdkbGRFWnNiM2M3WEc1Y2JpOHZJRlYwYVd4elhHNWxlSEJ2Y25RZ0tpQmhjeUJqWVd4aklHWnliMjBnSnk0dmFXNWpMMk5oYkdNbk8xeHVaWGh3YjNKMElDb2dZWE1nZFhScGJITWdabkp2YlNBbkxpOXBibU12ZFhScGJITW5PMXh1Wlhod2IzSjBJSHNnYzJWMFIyeHZZbUZzUkdsc1lYUnBiMjRnZlNCbWNtOXRJQ2N1TDNSaGMyc3ZkR2x0WlhJbk8xeHVYRzR2THlCV1lXeDFaU0IwZVhCbGMxeHVhVzF3YjNKMElHRnNjR2hoSUdaeWIyMGdKeTR2ZG1Gc2RXVXRkSGx3WlhNdllXeHdhR0VuTzF4dWFXMXdiM0owSUdGdVoyeGxJR1p5YjIwZ0p5NHZkbUZzZFdVdGRIbHdaWE12WVc1bmJHVW5PMXh1YVcxd2IzSjBJR052Ykc5eUlHWnliMjBnSnk0dmRtRnNkV1V0ZEhsd1pYTXZZMjlzYjNJbk8xeHVhVzF3YjNKMElHTnZiWEJzWlhnZ1puSnZiU0FuTGk5MllXeDFaUzEwZVhCbGN5OWpiMjF3YkdWNEp6dGNibWx0Y0c5eWRDQm9aWGdnWm5KdmJTQW5MaTkyWVd4MVpTMTBlWEJsY3k5b1pYZ25PMXh1YVcxd2IzSjBJR2h6YkNCbWNtOXRJQ2N1TDNaaGJIVmxMWFI1Y0dWekwyaHpiQ2M3WEc1cGJYQnZjblFnY0hnZ1puSnZiU0FuTGk5MllXeDFaUzEwZVhCbGN5OXdlQ2M3WEc1cGJYQnZjblFnY21kaUlHWnliMjBnSnk0dmRtRnNkV1V0ZEhsd1pYTXZjbWRpSnp0Y2JtbHRjRzl5ZENCelkyRnNaU0JtY205dElDY3VMM1poYkhWbExYUjVjR1Z6TDNOallXeGxKenRjYm1sdGNHOXlkQ0J6YUdGa2IzY2dabkp2YlNBbkxpOTJZV3gxWlMxMGVYQmxjeTl6YUdGa2IzY25PMXh1YVcxd2IzSjBJSFZ1YVhRZ1puSnZiU0FuTGk5MllXeDFaUzEwZVhCbGN5OTFibWwwSnp0Y2JtVjRjRzl5ZENCamIyNXpkQ0IyWVd4MVpWUjVjR1VnUFNCN0lHRnNjR2hoTENCaGJtZHNaU3dnWTI5c2IzSXNJR052YlhCc1pYZ3NJR2hsZUN3Z2FITnNMQ0J3ZUN3Z2NtZGlMQ0J6WTJGc1pTd2djMmhoWkc5M0xDQjFibWwwSUgwN1hHNWNiaTh2SUZSeVlXNXpabTl5YldWeWMxeHVaWGh3YjNKMElDb2dZWE1nZEhKaGJuTm1iM0p0WlhKeklHWnliMjBnSnk0dmFXNWpMM1J5WVc1elptOXliV1Z5Y3ljN1hHNWNiaThxWEc0Z0lDQWdVbVYwZFhKdWN5QmhJSFpsY25OcGIyNGdiMllnZEdobElFRmpkR2x2YmlCaWIzVnVaQ0IwYnlCaElFWnNiM2RjYmx4dUlDQWdJRmRsSjNKbElHRmtaR2x1WnlCZ2IyNWdJR2hsY21VZ1ltVmpZWFZ6WlNCR2JHOTNJR1Y0ZEdWdVpITWdRV04wYVc5dUxGeHVJQ0FnSUc5MGFHVnlkMmx6WlNCamNtVmhkR2x1WnlCaElHTnBjbU4xYkdGeUlHMXZaSFZzWVhJZ1pHVndaVzVrWlc1amVTNGdSblYwZFhKbFhHNGdJQ0FnY21WbVlXTjBiM0pwYm1jc0lHbGxJRzF2ZG1sdVp5QjBieUJoSUdOdmJYQnZjMmwwYVc5dVlXd2diVzlrWld3Z2QybHNiRnh1SUNBZ0lISmxiVzkyWlNCMGFHVWdibVZsWkNCbWIzSWdkWE1nZEc4Z1pHOGdkR2hwY3lCb1pYSmxMbHh1S2k5Y2JrRmpkR2x2Ymk1d2NtOTBiM1I1Y0dVdWIyNGdQU0JtZFc1amRHbHZiaUFvWld4bGJXVnVkQ2tnZTF4dUlDQWdJR2xtSUNnaFpXeGxiV1Z1ZEM1amIyNXVaV04wS1NCN1hHNGdJQ0FnSUNBZ0lHVnNaVzFsYm5RZ1BTQm5aWFJHYkc5M0tHVnNaVzFsYm5RcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhKbGRIVnliaUJsYkdWdFpXNTBMbU52Ym01bFkzUW9kR2hwY3lrN1hHNTlPMXh1WEc1bGVIQnZjblFnZXlCQlkzUnBiMjRnZlRzaVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3BvcG1vdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9UYXNrMiA9IHJlcXVpcmUoJy4uL3Rhc2svVGFzaycpO1xuXG52YXIgX1Rhc2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVGFzazIpO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbnZhciBfZGV0ZWN0ID0gcmVxdWlyZSgnLi4vdmFsdWUtdHlwZXMvZGV0ZWN0Jyk7XG5cbnZhciBfZGV0ZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RldGVjdCk7XG5cbnZhciBfbnVtZXJpY2FsVmFsdWVzID0gcmVxdWlyZSgnLi4vaW5jL251bWVyaWNhbC12YWx1ZXMnKTtcblxudmFyIF9udW1lcmljYWxWYWx1ZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbnVtZXJpY2FsVmFsdWVzKTtcblxudmFyIF9kZXRlY3RBZGFwdGVyID0gcmVxdWlyZSgnLi4vaW5jL2RldGVjdC1hZGFwdGVyJyk7XG5cbnZhciBfZGV0ZWN0QWRhcHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZXRlY3RBZGFwdGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBOVU1fTlVNRVJJQ0FMX1ZBTFVFUyA9IF9udW1lcmljYWxWYWx1ZXMyLmRlZmF1bHQubGVuZ3RoO1xuXG52YXIgZGVmYXVsdFJlbmRlcmVyID0gZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlO1xuICAgIHZhciBhZGFwdGVyID0gX3JlZi5hZGFwdGVyO1xuICAgIHZhciBhZGFwdGVyRGF0YSA9IF9yZWYuYWRhcHRlckRhdGE7XG4gICAgdmFyIGVsZW1lbnQgPSBfcmVmLmVsZW1lbnQ7XG4gICAgcmV0dXJuIGFkYXB0ZXIoZWxlbWVudCwgc3RhdGUsIGFkYXB0ZXJEYXRhKTtcbn07XG5cbnZhciBjb252ZXJ0SWZTaG91bGRCZU51bWJlciA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiAhaXNOYU4odmFsdWUpID8gcGFyc2VGbG9hdCh2YWx1ZSkgOiB2YWx1ZTtcbn07XG5cbnZhciBBY3Rpb24gPSBmdW5jdGlvbiAoX1Rhc2spIHtcbiAgICBfaW5oZXJpdHMoQWN0aW9uLCBfVGFzayk7XG5cbiAgICBmdW5jdGlvbiBBY3Rpb24oKSB7XG4gICAgICAgIHZhciBwcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzBdO1xuXG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBY3Rpb24pO1xuXG4gICAgICAgIHByb3BzLnN0YXRlID0ge307XG4gICAgICAgIHByb3BzLnZhbHVlS2V5cyA9IFtdO1xuICAgICAgICBwcm9wcy5wYXJlbnRLZXlzID0gW107XG4gICAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfVGFzay5jYWxsKHRoaXMsIHByb3BzKSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgIyBTZXQgQWN0aW9uIHByb3BlcnRpZXNcbiAgICAgICAgIyMgU2V0IHVzZXItZGVmaW5lZCBBY3Rpb24gcHJvcGVydGllc1xuICAgICAgICAgQHBhcmFtIFtvYmplY3RdXG4gICAgICAgIEByZXR1cm4gW0FjdGlvbl1cbiAgICAqL1xuXG5cbiAgICBBY3Rpb24ucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIHNldCgpIHtcbiAgICAgICAgdmFyIHByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMF07XG5cbiAgICAgICAgdGhpcy52YWx1ZXMgPSB0aGlzLnZhbHVlcyB8fCB7fTtcblxuICAgICAgICB2YXIgdmFsdWVzID0gcHJvcHMudmFsdWVzO1xuXG4gICAgICAgIHZhciBwcm9wc1RvU2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbJ3ZhbHVlcyddKTtcblxuICAgICAgICB2YXIgaW5oZXJpdGFibGUgPSB7fTtcblxuICAgICAgICAvLyBTZXQgbm9uLWNvbnN1bWVkIHByb3BlcnRpZXNcbiAgICAgICAgX1Rhc2sucHJvdG90eXBlLnNldC5jYWxsKHRoaXMsIHByb3BzVG9TZXQpO1xuXG4gICAgICAgIC8vIERldGVjdCBjb3JyZWN0IGBhZGFwdGVyYCBpZiBub25lIGV4aXN0cyBhbmQgYGVsZW1lbnRgIGlzIGJlaW5nIHNldFxuICAgICAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuYWRhcHRlcikge1xuICAgICAgICAgICAgICAgIC8vIER1Y2t0eXBpc2ggY2hlY2sgZm9yIEFkYXB0ZXJcbiAgICAgICAgICAgICAgICB0aGlzLmFkYXB0ZXIgPSAoMCwgX2RldGVjdEFkYXB0ZXIyLmRlZmF1bHQpKHRoaXMuZWxlbWVudCk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hZGFwdGVyLmdldEVsZW1lbnREYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRhcHRlckRhdGEgPSB0aGlzLmFkYXB0ZXIuZ2V0RWxlbWVudERhdGEodGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5vblJlbmRlcikge1xuICAgICAgICAgICAgICAgIHRoaXMub25SZW5kZXIgPSBkZWZhdWx0UmVuZGVyZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQcmltZSBhbiBvYmplY3QgdG8gaW5oZXJpdCBmcm9tLCB3aXRoIG9ubHkgYHZhbHVlYCBwcm9wZXJ0aWVzXG4gICAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLmRlZmF1bHRWYWx1ZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGVmYXVsdFZhbHVlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNUb1NldC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGluaGVyaXRhYmxlW2tleV0gPSBwcm9wc1RvU2V0W2tleV07XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBpbmhlcml0YWJsZVtrZXldID0gdGhpc1trZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSBleGlzdGluZyB2YWx1ZXMgd2l0aCBpbmhlcml0YWJsZSBwcm9wZXJ0aWVzXG4gICAgICAgIGZvciAodmFyIF9rZXkgaW4gdGhpcy52YWx1ZXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlcy5oYXNPd25Qcm9wZXJ0eShfa2V5KSkge1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWVzW19rZXldID0gX2V4dGVuZHMoe30sIHRoaXMudmFsdWVzW19rZXldLCBpbmhlcml0YWJsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGVcbiAgICAgICAgaWYgKHZhbHVlcykge1xuICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZXModmFsdWVzLCBpbmhlcml0YWJsZSk7XG5cbiAgICAgICAgICAgIC8vIFByZWNvbXB1dGUgbnVtYmVyIG9mIHZhbHVlIGtleSBhbmQgcGFyZW50IGtleXMgdG8gYXZvaWQgcGVyLWZyYW1lIG1lYXN1cmVtZW50XG4gICAgICAgICAgICB0aGlzLm51bVZhbHVlS2V5cyA9IHRoaXMudmFsdWVLZXlzLmxlbmd0aDtcbiAgICAgICAgICAgIHRoaXMubnVtUGFyZW50S2V5cyA9IHRoaXMucGFyZW50S2V5cy5sZW5ndGg7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgQWN0aW9uLnByb3RvdHlwZS5zZXRWYWx1ZXMgPSBmdW5jdGlvbiBzZXRWYWx1ZXModmFsdWVzLCBpbmhlcml0KSB7XG4gICAgICAgIC8vIEl0ZXJhdGUgb3ZlciBhbGwgaW5jb21pbmcgdmFsdWVzIGFuZCBzZXRcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHZhbHVlcykge1xuICAgICAgICAgICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGhhc0NoaWxkcmVuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkcmVuID0ge307XG5cbiAgICAgICAgICAgICAgICAvLyBNZXJnZSBpbnRvIGV4aXN0aW5nIHZhbHVlIG9yIGNyZWF0ZSBuZXdcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWVBbHJlYWR5RXhpc3RzID0gdGhpcy52YWx1ZXNba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHZhciBuZXdWYWx1ZSA9IHZhbHVlQWxyZWFkeUV4aXN0cyA/IF9leHRlbmRzKHt9LCB0aGlzLnZhbHVlc1trZXldKSA6IF9leHRlbmRzKHt9LCBpbmhlcml0KTtcblxuICAgICAgICAgICAgICAgIC8vIElmIHZhbHVlcyBpcyBub3QgYW4gb2JqZWN0LCBhc3NpZ24gdmFsdWUgdG8gZGVmYXVsdCBwcm9wXG4gICAgICAgICAgICAgICAgaWYgKCEoMCwgX3V0aWxzLmlzT2JqKSh2YWx1ZXNba2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWVbdGhpcy5kZWZhdWx0VmFsdWVQcm9wXSA9IHZhbHVlc1trZXldO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gX2V4dGVuZHMoe30sIG5ld1ZhbHVlLCB2YWx1ZXNba2V5XSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gSWYgd2UndmUgZ290IGFuIGFkYXB0ZXIsIGdldCB0aGUgY3VycmVudCB2YWx1ZVxuICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZS5jdXJyZW50ID09PSB1bmRlZmluZWQgJiYgdGhpcy5hZGFwdGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLmN1cnJlbnQgPSBjb252ZXJ0SWZTaG91bGRCZU51bWJlcih0aGlzLmFkYXB0ZXIuZ2V0KHRoaXMuZWxlbWVudCwga2V5KSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlLmZyb20gPT09IHVuZGVmaW5lZCAmJiB0aGlzLmFkYXB0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUuZnJvbSA9IG5ld1ZhbHVlLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gQXBwbHkgZGVmYXVsdCB2YWx1ZSBwcm9wZXJ0aWVzXG4gICAgICAgICAgICAgICAgaWYgKCF2YWx1ZUFscmVhZHlFeGlzdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSBfZXh0ZW5kcyh7fSwgdGhpcy5kZWZhdWx0VmFsdWUsIG5ld1ZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBJZiB3ZSBkb24ndCBoYXZlIGEgdmFsdWUgdHlwZSBhbmQgd2UgZG8gaGF2ZSBhbiBBZGFwdGVyLCBjaGVjayBmb3IgdHlwZSB3aXRoIHZhbHVlIGtleVxuICAgICAgICAgICAgICAgIGlmICghbmV3VmFsdWUudHlwZSAmJiB0aGlzLmFkYXB0ZXIgJiYgdGhpcy5hZGFwdGVyLmNoZWNrVmFsdWVUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLnR5cGUgPSB0aGlzLmFkYXB0ZXIuY2hlY2tWYWx1ZVR5cGUoa2V5KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBJZiB3ZSBzdGlsbCBkb24ndCBoYXZlIGEgdmFsdWUgdHlwZSBhbmQgdGhpcyBpcyB0aGUgZmlyc3QgdGltZSB3ZSd2ZSBzZXQgdGhpcyB2YWx1ZSwgY2hlY2sgbnVtZXJpY2FsIHZhbHVlcyBmb3Igc3RyaW5ncyBhbmQgdGVzdFxuICAgICAgICAgICAgICAgIGlmICghbmV3VmFsdWUudHlwZSAmJiAhdGhpcy52YWx1ZXNba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS50eXBlID0gKDAsIF9kZXRlY3QyLmRlZmF1bHQpKG5ld1ZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBJZiB3ZSBoYXZlIGEgdmFsdWUgdHlwZSwgaGFuZGxlLiBUaGlzIGlzIG15IGxlYXN0IGZhdm91cml0ZSBwYXJ0IG9mIFBvcG1vdGlvbiwgc28uLi4gZW5qb3kuXG4gICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBOVU1fTlVNRVJJQ0FMX1ZBTFVFUzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJvcE5hbWUgPSBfbnVtZXJpY2FsVmFsdWVzMi5kZWZhdWx0W2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlUHJvcCA9IG5ld1ZhbHVlW3Byb3BOYW1lXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhpcyBwcm9wIGlzIGEgc3RyaW5nIGFuZCB3ZSBoYXZlIGEgc3BsaXR0ZXIsIHNwbGl0XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUudHlwZS5oYXNPd25Qcm9wZXJ0eSgnc3BsaXQnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzcGxpdFByb3AgPSAoMCwgX3V0aWxzLmlzU3RyaW5nKSh2YWx1ZVByb3ApID8gbmV3VmFsdWUudHlwZS5zcGxpdCh2YWx1ZVByb3ApIDoge307XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBzcGxpdEtleSBpbiBzcGxpdFByb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNwbGl0UHJvcC5oYXNPd25Qcm9wZXJ0eShzcGxpdEtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb21iaW5lZEtleSA9IGtleSArIHNwbGl0S2V5O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSBkb24ndCBoYXZlIGEgY2hpbGQgdmFsdWUgZm9yIHRoaXMga2V5LCBtYWtlIG9uZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjaGlsZHJlbltjb21iaW5lZEtleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGVmYXVsdFZhbHVlID0gbmV3VmFsdWUudHlwZS5kZWZhdWx0UHJvcHMgJiYgbmV3VmFsdWUudHlwZS5kZWZhdWx0UHJvcHNbc3BsaXRLZXldID8gbmV3VmFsdWUudHlwZS5kZWZhdWx0UHJvcHNbc3BsaXRLZXldIDogbmV3VmFsdWUudHlwZS5kZWZhdWx0UHJvcHMgfHwge307XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbltjb21iaW5lZEtleV0gPSBfZXh0ZW5kcyh7fSwgbmV3VmFsdWUsIGRlZmF1bHRWYWx1ZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRLZXk6IHNwbGl0S2V5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgY2hpbGRyZW5bY29tYmluZWRLZXldLnR5cGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc0NoaWxkcmVuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuW2NvbWJpbmVkS2V5XVtwcm9wTmFtZV0gPSBwYXJzZUZsb2F0KHNwbGl0UHJvcFtzcGxpdEtleV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgd2UgaGF2ZSBhIHRlbXBsYXRlIGZ1bmN0aW9uLCBnZW5lcmF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbmV3VmFsdWUudGVtcGxhdGUgJiYgbmV3VmFsdWUudHlwZS50ZW1wbGF0ZSAmJiAoMCwgX3V0aWxzLmlzU3RyaW5nKSh2YWx1ZVByb3ApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLnRlbXBsYXRlID0gbmV3VmFsdWUudHlwZS50ZW1wbGF0ZSh2YWx1ZVByb3ApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobmV3VmFsdWUudHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IF9leHRlbmRzKHt9LCBuZXdWYWx1ZSwgbmV3VmFsdWUudHlwZS5kZWZhdWx0UHJvcHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVQcm9wICE9PSB1bmRlZmluZWQgJiYgbmV3VmFsdWUudHlwZS5wYXJzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlW3Byb3BOYW1lXSA9IG5ld1ZhbHVlLnR5cGUucGFyc2UodmFsdWVQcm9wLCBuZXdWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IC8vIEVuZCB2YWx1ZSB0eXBlIG5vbnNlbnNlXG5cbiAgICAgICAgICAgICAgICAvLyBTZXQgYHByZXZgIHRvIGBjdXJyZW50YCBmb3IgZmlyc3QgZnJhbWUgYWZ0ZXIgc2V0XG4gICAgICAgICAgICAgICAgbmV3VmFsdWUucHJldiA9IG5ld1ZhbHVlLmN1cnJlbnQ7XG5cbiAgICAgICAgICAgICAgICAvLyBJZiB0aGlzIHZhbHVlIGRvZXNuJ3QgaGF2ZSBjaGlsZHJlbiwgYWRkIHRvIHZhbHVlS2V5c1xuICAgICAgICAgICAgICAgIGlmICghaGFzQ2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudmFsdWVLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWVLZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIE9yIGFkZCB0byBwYXJlbnRLZXlzXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLmNoaWxkcmVuID0gbmV3VmFsdWUuY2hpbGRyZW4gfHwge307XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50S2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0VmFsdWVzKGNoaWxkcmVuKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZXNba2V5XSA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qXG4gICAgICAgIERlY2lkZSB3aGV0aGVyIHRoaXMgQWN0aW9uIHdpbGwgcmVuZGVyIG9uIG5leHQgZnJhbWVcbiAgICAgICAgIEBwYXJhbSBbQWN0aW9uXVxuICAgICAgICBAcGFyYW0gW251bWJlcl1cbiAgICAgICAgQHBhcmFtIFtudW1iZXJdXG4gICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm4gdHJ1ZSB0byByZW5kZXJcbiAgICAqL1xuXG5cbiAgICBBY3Rpb24ucHJvdG90eXBlLndpbGxSZW5kZXIgPSBmdW5jdGlvbiB3aWxsUmVuZGVyKGFjdGlvbiwgZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgICAgICB2YXIgaGFzQ2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vIENoZWNrIGlmIGJhc2UgdmFsdWVzIGhhdmUgdXBkYXRlZFxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSB0aGlzLnZhbHVlS2V5c1tpXTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG5cbiAgICAgICAgICAgIC8vIFJ1biB0cmFuc2Zvcm0gZnVuY3Rpb24gKGlmIHByZXNlbnQpXG4gICAgICAgICAgICBpZiAodmFsdWUudHJhbnNmb3JtKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IHZhbHVlLnRyYW5zZm9ybSh2YWx1ZS5jdXJyZW50LCBrZXksIHRoaXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDYXAgbWluaW11bVxuICAgICAgICAgICAgaWYgKCgwLCBfdXRpbHMuaXNOdW0pKHZhbHVlLm1pbikpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gTWF0aC5tYXgodmFsdWUuY3VycmVudCwgdmFsdWUubWluKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ2FwIG1heGltdW1cbiAgICAgICAgICAgIGlmICgoMCwgX3V0aWxzLmlzTnVtKSh2YWx1ZS5tYXgpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IE1hdGgubWluKHZhbHVlLmN1cnJlbnQsIHZhbHVlLm1heCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJvdW5kIG51bWJlclxuICAgICAgICAgICAgaWYgKHZhbHVlLnJvdW5kKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IE1hdGgucm91bmQodmFsdWUuY3VycmVudCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhbHVlLmZyYW1lQ2hhbmdlID0gdmFsdWUuY3VycmVudCAtIHZhbHVlLnByZXY7XG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSB2ZWxvY2l0eVxuICAgICAgICAgICAgaWYgKCF0aGlzLmNhbGN1bGF0ZXNWZWxvY2l0eSkge1xuICAgICAgICAgICAgICAgIHZhbHVlLnZlbG9jaXR5ID0gKDAsIF9jYWxjLnNwZWVkUGVyU2Vjb25kKSh2YWx1ZS5mcmFtZUNoYW5nZSwgZWxhcHNlZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIHRoaXMgdmFsdWUgaGFzIGNoYW5nZWRcbiAgICAgICAgICAgIGlmICh2YWx1ZS5wcmV2ICE9PSB2YWx1ZS5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdmFsdWUucHJldiA9IHZhbHVlLmN1cnJlbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEFwcGVuZCB1bml0XG4gICAgICAgICAgICB2YXIgdmFsdWVGb3JTdGF0ZSA9IHZhbHVlLnR5cGUgJiYgdmFsdWUudHlwZS5zZXJpYWxpemUgPyB2YWx1ZS50eXBlLnNlcmlhbGl6ZSh2YWx1ZS5jdXJyZW50LCB2YWx1ZSkgOiB2YWx1ZS5jdXJyZW50O1xuXG4gICAgICAgICAgICAvLyBBZGQgdG8gc3RhdGUgaWYgdGhpcyBpcyBub3QgYSBjaGlsZCB2YXVlXG4gICAgICAgICAgICBpZiAoIXZhbHVlLnBhcmVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVba2V5XSA9IHZhbHVlRm9yU3RhdGU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWVzW3ZhbHVlLnBhcmVudF0uY2hpbGRyZW5bdmFsdWUuY2hpbGRLZXldID0gdmFsdWVGb3JTdGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSBwYXJlbnQgdmFsdWVzXG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB0aGlzLm51bVBhcmVudEtleXM7IF9pKyspIHtcbiAgICAgICAgICAgIHZhciBfa2V5MiA9IHRoaXMucGFyZW50S2V5c1tfaV07XG4gICAgICAgICAgICB2YXIgX3ZhbHVlID0gdGhpcy52YWx1ZXNbX2tleTJdO1xuXG4gICAgICAgICAgICBfdmFsdWUuY3VycmVudCA9IF92YWx1ZS50eXBlLmNvbWJpbmUoX3ZhbHVlLmNoaWxkcmVuLCBfdmFsdWUudGVtcGxhdGUpO1xuXG4gICAgICAgICAgICB0aGlzLnN0YXRlW19rZXkyXSA9IF92YWx1ZS5jdXJyZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMub25GcmFtZSkge1xuICAgICAgICAgICAgdGhpcy5vbkZyYW1lKHRoaXMuc3RhdGUsIHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMub25DbGVhbnVwID8gdHJ1ZSA6IGhhc0NoYW5nZWQ7XG4gICAgfTtcblxuICAgIEFjdGlvbi5wcm90b3R5cGUuaW5oZXJpdCA9IGZ1bmN0aW9uIGluaGVyaXQoKSB7XG4gICAgICAgIHZhciBwcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzBdO1xuICAgICAgICB2YXIgdmFsdWVzID0gcHJvcHMudmFsdWVzO1xuXG4gICAgICAgIHZhciBwcm9wc1RvU2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbJ3ZhbHVlcyddKTtcblxuICAgICAgICB2YXIgbmV3QWN0aW9uID0gX1Rhc2sucHJvdG90eXBlLmluaGVyaXQuY2FsbCh0aGlzLCBwcm9wc1RvU2V0KTtcblxuICAgICAgICBpZiAodmFsdWVzKSB7XG4gICAgICAgICAgICBuZXdBY3Rpb24uc2V0KHsgdmFsdWVzOiB2YWx1ZXMgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3QWN0aW9uO1xuICAgIH07XG5cbiAgICBBY3Rpb24ucHJvdG90eXBlLnBhdXNlID0gZnVuY3Rpb24gcGF1c2UoKSB7XG4gICAgICAgIF9UYXNrLnByb3RvdHlwZS5zdG9wLmNhbGwodGhpcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBBY3Rpb24ucHJvdG90eXBlLnJlc3VtZSA9IGZ1bmN0aW9uIHJlc3VtZSgpIHtcbiAgICAgICAgX1Rhc2sucHJvdG90eXBlLnN0YXJ0LmNhbGwodGhpcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBBY3Rpb24ucHJvdG90eXBlLnRvZ2dsZSA9IGZ1bmN0aW9uIHRvZ2dsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNBY3RpdmUgPyB0aGlzLnBhdXNlKCkgOiB0aGlzLnJlc3VtZSgpO1xuICAgIH07XG5cbiAgICBBY3Rpb24ucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICAgIHZhciB2YWx1ZXMgPSB0aGlzLnZhbHVlcztcbiAgICAgICAgX1Rhc2sucHJvdG90eXBlLnN0YXJ0LmNhbGwodGhpcyk7XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHZhbHVlcykge1xuICAgICAgICAgICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVzW2tleV0ucHJldiA9IHZhbHVlc1trZXldLm9yaWdpbiA9IHZhbHVlc1trZXldLmN1cnJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgQWN0aW9uLmV4dGVuZERlZmF1bHRWYWx1ZSA9IGZ1bmN0aW9uIGV4dGVuZERlZmF1bHRWYWx1ZShwcm9wcykge1xuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHRoaXMucHJvdG90eXBlLmRlZmF1bHRWYWx1ZSwgcHJvcHMpO1xuICAgIH07XG5cbiAgICBBY3Rpb24uZXh0ZW5kRGVmYXVsdFByb3BzID0gZnVuY3Rpb24gZXh0ZW5kRGVmYXVsdFByb3BzKHByb3BzKSB7XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgdGhpcy5wcm90b3R5cGUuZGVmYXVsdFByb3BzLCBwcm9wcyk7XG4gICAgfTtcblxuICAgIHJldHVybiBBY3Rpb247XG59KF9UYXNrMy5kZWZhdWx0KTtcblxuQWN0aW9uLnByb3RvdHlwZS5kZWZhdWx0VmFsdWVQcm9wID0gJ2N1cnJlbnQnO1xuQWN0aW9uLnByb3RvdHlwZS5kZWZhdWx0VmFsdWUgPSB7XG4gICAgY3VycmVudDogMCxcbiAgICB2ZWxvY2l0eTogMCxcbiAgICByb3VuZDogZmFsc2UsXG4gICAgbWluOiB1bmRlZmluZWQsXG4gICAgbWF4OiB1bmRlZmluZWQsXG4gICAgdHJhbnNmb3JtOiB1bmRlZmluZWRcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEFjdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDBGamRHbHZiaTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdRVUZCUVRzN096dEJRVU5CT3p0QlFVTkJPenRCUVVOQk96czdPMEZCUTBFN096czdRVUZEUVRzN096czdPenM3T3pzN096czdRVUZGUVN4SlFVRk5MSFZDUVVGMVFpd3dRa0ZCYVVJc1RVRkJha0k3TzBGQlJUZENMRWxCUVUwc2EwSkJRV3RDTzFGQlFVYzdVVUZCVHp0UlFVRlRPMUZCUVdFN1YwRkJZeXhSUVVGUkxFOUJRVklzUlVGQmFVSXNTMEZCYWtJc1JVRkJkMElzVjBGQmVFSTdRMEZCT1VNN08wRkJSWGhDTEVsQlFVMHNNRUpCUVRCQ0xGVkJRVU1zUzBGQlJEdFhRVUZYTEVOQlFVTXNUVUZCVFN4TFFVRk9MRU5CUVVRc1IwRkJaMElzVjBGQlZ5eExRVUZZTEVOQlFXaENMRWRCUVc5RExFdEJRWEJETzBOQlFWZzdPMGxCUlRGQ096czdRVUZEUml4aFFVUkZMRTFCUTBZc1IwRkJkMEk3V1VGQldpdzRSRUZCVVN4clFrRkJTVHM3T0VKQlJIUkNMRkZCUTNOQ096dEJRVU53UWl4alFVRk5MRXRCUVU0c1IwRkJZeXhGUVVGa0xFTkJSRzlDTzBGQlJYQkNMR05CUVUwc1UwRkJUaXhIUVVGclFpeEZRVUZzUWl4RFFVWnZRanRCUVVkd1FpeGpRVUZOTEZWQlFVNHNSMEZCYlVJc1JVRkJia0lzUTBGSWIwSTdaMFJCU1hCQ0xHbENRVUZOTEV0QlFVNHNSMEZLYjBJN1MwRkJlRUk3T3pzN096czdPenM3UVVGRVJTeHhRa0ZsUml4eFFrRkJaMEk3V1VGQldpdzRSRUZCVVN4clFrRkJTVHM3UVVGRFdpeGhRVUZMTEUxQlFVd3NSMEZCWXl4TFFVRkxMRTFCUVV3c1NVRkJaU3hGUVVGbUxFTkJSRVk3TzFsQlIwb3NVMEZCTUVJc1RVRkJNVUlzVDBGSVNUczdXVUZIVHl4elEwRkJaU3h0UWtGSWRFSTdPMEZCU1Zvc1dVRkJUU3hqUVVGakxFVkJRV1E3T3p0QlFVcE5MSGRDUVU5T0xFZEJRVTRzV1VGQlZTeFZRVUZXT3pzN1FVRlFXU3haUVZWU0xFdEJRVXNzVDBGQlRDeEZRVUZqTzBGQlEyUXNaMEpCUVVrc1EwRkJReXhMUVVGTExFOUJRVXdzUlVGQll6czdRVUZGWml4eFFrRkJTeXhQUVVGTUxFZEJRV1VzTmtKQlFXTXNTMEZCU3l4UFFVRk1MRU5CUVRkQ0xFTkJSbVU3TzBGQlNXWXNiMEpCUVVrc1MwRkJTeXhQUVVGTUxFTkJRV0VzWTBGQllpeEZRVUUyUWp0QlFVTTNRaXg1UWtGQlN5eFhRVUZNTEVkQlFXMUNMRXRCUVVzc1QwRkJUQ3hEUVVGaExHTkJRV0lzUTBGQk5FSXNTMEZCU3l4UFFVRk1MRU5CUVM5RExFTkJSRFpDTzJsQ1FVRnFRenRoUVVwS096dEJRVk5CTEdkQ1FVRkpMRU5CUVVNc1MwRkJTeXhSUVVGTUxFVkJRV1U3UVVGRGFFSXNjVUpCUVVzc1VVRkJUQ3hIUVVGblFpeGxRVUZvUWl4RFFVUm5RanRoUVVGd1FqdFRRVlpLT3pzN1FVRldXU3hoUVRCQ1VDeEpRVUZKTEVkQlFVb3NTVUZCVnl4TFFVRkxMRmxCUVV3c1JVRkJiVUk3UVVGREwwSXNaMEpCUVVrc1MwRkJTeXhaUVVGTUxFTkJRV3RDTEdOQlFXeENMRU5CUVdsRExFZEJRV3BETEVOQlFVb3NSVUZCTWtNN1FVRkRka01zYjBKQlFVa3NWMEZCVnl4alFVRllMRU5CUVRCQ0xFZEJRVEZDTEVOQlFVb3NSVUZCYjBNN1FVRkRhRU1zWjBOQlFWa3NSMEZCV2l4SlFVRnRRaXhYUVVGWExFZEJRVmdzUTBGQmJrSXNRMEZFWjBNN2FVSkJRWEJETEUxQlJVOHNTVUZCU1N4TFFVRkxMRWRCUVV3c1RVRkJZeXhUUVVGa0xFVkJRWGxDTzBGQlEyaERMR2REUVVGWkxFZEJRVm9zU1VGQmJVSXNTMEZCU3l4SFFVRk1MRU5CUVc1Q0xFTkJSR2RETzJsQ1FVRTNRanRoUVVoWU8xTkJSRW83T3p0QlFURkNXU3hoUVhGRFVDeEpRVUZKTEVsQlFVb3NTVUZCVnl4TFFVRkxMRTFCUVV3c1JVRkJZVHRCUVVONlFpeG5Ra0ZCU1N4TFFVRkxMRTFCUVV3c1EwRkJXU3hqUVVGYUxFTkJRVEpDTEVsQlFUTkNMRU5CUVVvc1JVRkJjVU03UVVGRGFrTXNjVUpCUVVzc1RVRkJUQ3hEUVVGWkxFbEJRVm9zYVVKQlFYZENMRXRCUVVzc1RVRkJUQ3hEUVVGWkxFbEJRVm9zUjBGQmNVSXNXVUZCTjBNc1EwRkVhVU03WVVGQmNrTTdVMEZFU2pzN08wRkJja05aTEZsQk5FTlNMRTFCUVVvc1JVRkJXVHRCUVVOU0xHbENRVUZMTEZOQlFVd3NRMEZCWlN4TlFVRm1MRVZCUVhWQ0xGZEJRWFpDT3pzN1FVRkVVU3huUWtGSlVpeERRVUZMTEZsQlFVd3NSMEZCYjBJc1MwRkJTeXhUUVVGTUxFTkJRV1VzVFVGQlppeERRVXBhTzBGQlMxSXNhVUpCUVVzc1lVRkJUQ3hIUVVGeFFpeExRVUZMTEZWQlFVd3NRMEZCWjBJc1RVRkJhRUlzUTBGTVlqdFRRVUZhT3p0QlFWRkJMR1ZCUVU4c1NVRkJVQ3hEUVhCRVdUczdPMEZCWm1Rc2NVSkJjMFZHTEN0Q1FVRlZMRkZCUVZFc1UwRkJVenM3UVVGRmRrSXNZVUZCU3l4SlFVRkpMRWRCUVVvc1NVRkJWeXhOUVVGb1FpeEZRVUYzUWp0QlFVTndRaXhuUWtGQlNTeFBRVUZQTEdOQlFWQXNRMEZCYzBJc1IwRkJkRUlzUTBGQlNpeEZRVUZuUXp0QlFVTTFRaXh2UWtGQlNTeGpRVUZqTEV0QlFXUXNRMEZFZDBJN1FVRkZOVUlzYjBKQlFVMHNWMEZCVnl4RlFVRllPenM3UVVGR2MwSXNiMEpCUzNSQ0xIRkNRVUZ4UWl4TFFVRkxMRTFCUVV3c1EwRkJXU3hIUVVGYUxFMUJRWEZDTEZOQlFYSkNMRU5CVEVNN1FVRk5OVUlzYjBKQlFVa3NWMEZCVnl4clEwRkJNRUlzUzBGQlN5eE5RVUZNTEVOQlFWa3NSMEZCV2l4RlFVRXhRaXhuUWtGQmIwUXNVVUZCY0VRN096dEJRVTVoTEc5Q1FWTjRRaXhEUVVGRExHdENRVUZOTEU5QlFVOHNSMEZCVUN4RFFVRk9MRU5CUVVRc1JVRkJjVUk3UVVGRGNrSXNOa0pCUVZNc1MwRkJTeXhuUWtGQlRDeERRVUZVTEVkQlFXdERMRTlCUVU4c1IwRkJVQ3hEUVVGc1F5eERRVVJ4UWp0cFFrRkJla0lzVFVGRlR6dEJRVU5JTERSRFFVRm5RaXhWUVVGaExFOUJRVThzUjBGQlVDeEZRVUUzUWl4RFFVUkhPMmxDUVVaUU96czdRVUZVTkVJc2IwSkJaMEo0UWl4VFFVRlRMRTlCUVZRc1MwRkJjVUlzVTBGQmNrSXNTVUZCYTBNc1MwRkJTeXhQUVVGTUxFVkJRV003UVVGRGFFUXNOa0pCUVZNc1QwRkJWQ3hIUVVGdFFpeDNRa0ZCZDBJc1MwRkJTeXhQUVVGTUxFTkJRV0VzUjBGQllpeERRVUZwUWl4TFFVRkxMRTlCUVV3c1JVRkJZeXhIUVVFdlFpeERRVUY0UWl4RFFVRnVRaXhEUVVSblJEdHBRa0ZCY0VRN08wRkJTVUVzYjBKQlFVa3NVMEZCVXl4SlFVRlVMRXRCUVd0Q0xGTkJRV3hDTEVsQlFTdENMRXRCUVVzc1QwRkJUQ3hGUVVGak8wRkJRemRETERaQ1FVRlRMRWxCUVZRc1IwRkJaMElzVTBGQlV5eFBRVUZVTEVOQlJEWkNPMmxDUVVGcVJEczdPMEZCY0VJMFFpeHZRa0Y1UW5oQ0xFTkJRVU1zYTBKQlFVUXNSVUZCY1VJN1FVRkRja0lzTkVOQlFXZENMRXRCUVVzc1dVRkJUQ3hGUVVGelFpeFRRVUYwUXl4RFFVUnhRanRwUWtGQmVrSTdPenRCUVhwQ05FSXNiMEpCT0VKNFFpeERRVUZETEZOQlFWTXNTVUZCVkN4SlFVRnBRaXhMUVVGTExFOUJRVXdzU1VGQlowSXNTMEZCU3l4UFFVRk1MRU5CUVdFc1kwRkJZaXhGUVVFMlFqdEJRVU12UkN3MlFrRkJVeXhKUVVGVUxFZEJRV2RDTEV0QlFVc3NUMEZCVEN4RFFVRmhMR05CUVdJc1EwRkJORUlzUjBGQk5VSXNRMEZCYUVJc1EwRkVLMFE3YVVKQlFXNUZPenM3UVVFNVFqUkNMRzlDUVcxRGVFSXNRMEZCUXl4VFFVRlRMRWxCUVZRc1NVRkJhVUlzUTBGQlF5eExRVUZMTEUxQlFVd3NRMEZCV1N4SFFVRmFMRU5CUVVRc1JVRkJiVUk3UVVGRGNrTXNOa0pCUVZNc1NVRkJWQ3hIUVVGblFpeHpRa0ZCWjBJc1VVRkJhRUlzUTBGQmFFSXNRMEZFY1VNN2FVSkJRWHBET3pzN1FVRnVRelJDTEc5Q1FYZERlRUlzVTBGQlV5eEpRVUZVTEVWQlFXVTdRVUZEWml4NVFrRkJTeXhKUVVGSkxFbEJRVWtzUTBGQlNpeEZRVUZQTEVsQlFVa3NiMEpCUVVvc1JVRkJNRUlzUjBGQk1VTXNSVUZCSzBNN1FVRkRNME1zTkVKQlFVMHNWMEZCVnl3d1FrRkJhVUlzUTBGQmFrSXNRMEZCV0N4RFFVUnhRenRCUVVVelF5dzBRa0ZCVFN4WlFVRlpMRk5CUVZNc1VVRkJWQ3hEUVVGYU96czdRVUZHY1VNc05FSkJTM1pETEZOQlFWTXNTVUZCVkN4RFFVRmpMR05CUVdRc1EwRkJOa0lzVDBGQk4wSXNRMEZCU2l4RlFVRXlRenRCUVVOMlF5eG5RMEZCVFN4WlFVRlpMSEZDUVVGVExGTkJRVlFzU1VGQmMwSXNVMEZCVXl4SlFVRlVMRU5CUVdNc1MwRkJaQ3hEUVVGdlFpeFRRVUZ3UWl4RFFVRjBRaXhIUVVGMVJDeEZRVUYyUkN4RFFVUnhRanM3UVVGSGRrTXNhVU5CUVVzc1NVRkJTU3hSUVVGS0xFbEJRV2RDTEZOQlFYSkNMRVZCUVdkRE8wRkJRelZDTEc5RFFVRkpMRlZCUVZVc1kwRkJWaXhEUVVGNVFpeFJRVUY2UWl4RFFVRktMRVZCUVhkRE8wRkJRM0JETEhkRFFVRk5MR05CUVdNc1RVRkJUU3hSUVVGT096czdRVUZFWjBJc2QwTkJTV2hETEVOQlFVTXNVMEZCVXl4WFFVRlVMRU5CUVVRc1JVRkJkMEk3UVVGRGVFSXNORU5CUVUwc1pVRkJaU3hSUVVGRExFTkJRVk1zU1VGQlZDeERRVUZqTEZsQlFXUXNTVUZCT0VJc1UwRkJVeXhKUVVGVUxFTkJRV01zV1VGQlpDeERRVUV5UWl4UlFVRXpRaXhEUVVFNVFpeEhRVUZ6UlN4VFFVRlRMRWxCUVZRc1EwRkJZeXhaUVVGa0xFTkJRVEpDTEZGQlFUTkNMRU5CUVhaRkxFZEJRVGhITEZOQlFWTXNTVUZCVkN4RFFVRmpMRmxCUVdRc1NVRkJPRUlzUlVGQk9VSXNRMEZFTTBjN08wRkJSM2hDTEdsRVFVRlRMRmRCUVZRc2FVSkJRMDhzVlVGRFFUdEJRVU5JTEc5RVFVRlJMRWRCUVZJN1FVRkRRU3h6UkVGQlZTeFJRVUZXT3pCRFFVcEtMRU5CU0hkQ096dEJRVlY0UWl3clEwRkJUeXhUUVVGVExGZEJRVlFzUlVGQmMwSXNTVUZCZEVJc1EwRldhVUk3Y1VOQlFUVkNPenRCUVdGQkxHdEVRVUZqTEVsQlFXUXNRMEZxUW05RE8wRkJhMEp3UXl3MlEwRkJVeXhYUVVGVUxFVkJRWE5DTEZGQlFYUkNMRWxCUVd0RExGZEJRVmNzVlVGQlZTeFJRVUZXTEVOQlFWZ3NRMEZCYkVNc1EwRnNRbTlETzJsRFFVRjRRenMyUWtGRVNqczdPMEZCU0hWRExHZERRVEpDYmtNc1EwRkJReXhUUVVGVExGRkJRVlFzU1VGQmNVSXNVMEZCVXl4SlFVRlVMRU5CUVdNc1VVRkJaQ3hKUVVFd1FpeHhRa0ZCVXl4VFFVRlVMRU5CUVdoRUxFVkJRWEZGTzBGQlEzSkZMSGxEUVVGVExGRkJRVlFzUjBGQmIwSXNVMEZCVXl4SlFVRlVMRU5CUVdNc1VVRkJaQ3hEUVVGMVFpeFRRVUYyUWl4RFFVRndRaXhEUVVSeFJUczJRa0ZCZWtVN2VVSkJNMEpLTEUxQk9FSlBMRWxCUVVrc1UwRkJVeXhKUVVGVUxFTkJRV01zV1VGQlpDeEZRVUUwUWp0QlFVTnVReXh2UkVGQlowSXNWVUZCWVN4VFFVRlRMRWxCUVZRc1EwRkJZeXhaUVVGa0xFTkJRVGRDTEVOQlJHMURPM2xDUVVGb1F6czdRVUZKVUN3MFFrRkJTU3hqUVVGakxGTkJRV1FzU1VGQk1rSXNVMEZCVXl4SlFVRlVMRU5CUVdNc1MwRkJaQ3hGUVVGeFFqdEJRVU5vUkN4eFEwRkJVeXhSUVVGVUxFbEJRWEZDTEZOQlFWTXNTVUZCVkN4RFFVRmpMRXRCUVdRc1EwRkJiMElzVTBGQmNFSXNSVUZCSzBJc1VVRkJMMElzUTBGQmNrSXNRMEZFWjBRN2VVSkJRWEJFTzNGQ1FYWkRTanRwUWtGRVNqczdPMEZCZUVNMFFpeDNRa0YxUmpWQ0xFTkJRVk1zU1VGQlZDeEhRVUZuUWl4VFFVRlRMRTlCUVZRN096dEJRWFpHV1N4dlFrRXdSbmhDTEVOQlFVTXNWMEZCUkN4RlFVRmpPMEZCUTJRc2QwSkJRVWtzUzBGQlN5eFRRVUZNTEVOQlFXVXNUMEZCWml4RFFVRjFRaXhIUVVGMlFpeE5RVUZuUXl4RFFVRkRMRU5CUVVRc1JVRkJTVHRCUVVOd1F5dzJRa0ZCU3l4VFFVRk1MRU5CUVdVc1NVRkJaaXhEUVVGdlFpeEhRVUZ3UWl4RlFVUnZRenR4UWtGQmVFTTdPenRCUVVSakxHbENRVUZzUWl4TlFVMVBPMEZCUTBnc2FVTkJRVk1zVVVGQlZDeEhRVUZ2UWl4VFFVRlRMRkZCUVZRc1NVRkJjVUlzUlVGQmNrSXNRMEZFYWtJN08wRkJSMGdzTkVKQlFVa3NTMEZCU3l4VlFVRk1MRU5CUVdkQ0xFOUJRV2hDTEVOQlFYZENMRWRCUVhoQ0xFMUJRV2xETEVOQlFVTXNRMEZCUkN4RlFVRkpPMEZCUTNKRExHbERRVUZMTEZWQlFVd3NRMEZCWjBJc1NVRkJhRUlzUTBGQmNVSXNSMEZCY2tJc1JVRkVjVU03ZVVKQlFYcERPenRCUVVsQkxEWkNRVUZMTEZOQlFVd3NRMEZCWlN4UlFVRm1MRVZCVUVjN2NVSkJUbEE3TzBGQlowSkJMSEZDUVVGTExFMUJRVXdzUTBGQldTeEhRVUZhTEVsQlFXMUNMRkZCUVc1Q0xFTkJNVWMwUWp0aFFVRm9RenRUUVVSS096czdPenM3T3pzN096czdRVUY0UlVZc2NVSkJaMDFHTEdsRFFVRlhMRkZCUVZFc1dVRkJXU3hUUVVGVE8wRkJRM0JETEZsQlFVa3NZVUZCWVN4TFFVRmlPenM3UVVGRVowTXNZVUZKTDBJc1NVRkJTU3hKUVVGSkxFTkJRVW9zUlVGQlR5eEpRVUZKTEV0QlFVc3NXVUZCVEN4RlFVRnRRaXhIUVVGMlF5eEZRVUUwUXp0QlFVTjRReXhuUWtGQlRTeE5RVUZOTEV0QlFVc3NVMEZCVEN4RFFVRmxMRU5CUVdZc1EwRkJUaXhEUVVSclF6dEJRVVY0UXl4blFrRkJUU3hSUVVGUkxFdEJRVXNzVFVGQlRDeERRVUZaTEVkQlFWb3NRMEZCVWpzN08wRkJSbXRETEdkQ1FVdHdReXhOUVVGTkxGTkJRVTRzUlVGQmFVSTdRVUZEYWtJc2MwSkJRVTBzVDBGQlRpeEhRVUZuUWl4TlFVRk5MRk5CUVU0c1EwRkJaMElzVFVGQlRTeFBRVUZPTEVWQlFXVXNSMEZCTDBJc1JVRkJiME1zU1VGQmNFTXNRMEZCYUVJc1EwRkVhVUk3WVVGQmNrSTdPenRCUVV4M1F5eG5Ra0ZWY0VNc2EwSkJRVTBzVFVGQlRTeEhRVUZPTEVOQlFWWXNSVUZCYzBJN1FVRkRiRUlzYzBKQlFVMHNUMEZCVGl4SFFVRm5RaXhMUVVGTExFZEJRVXdzUTBGQlV5eE5RVUZOTEU5QlFVNHNSVUZCWlN4TlFVRk5MRWRCUVU0c1EwRkJlRU1zUTBGRWEwSTdZVUZCZEVJN096dEJRVlozUXl4blFrRmxjRU1zYTBKQlFVMHNUVUZCVFN4SFFVRk9MRU5CUVZZc1JVRkJjMEk3UVVGRGJFSXNjMEpCUVUwc1QwRkJUaXhIUVVGblFpeExRVUZMTEVkQlFVd3NRMEZCVXl4TlFVRk5MRTlCUVU0c1JVRkJaU3hOUVVGTkxFZEJRVTRzUTBGQmVFTXNRMEZFYTBJN1lVRkJkRUk3T3p0QlFXWjNReXhuUWtGdlFuQkRMRTFCUVUwc1MwRkJUaXhGUVVGaE8wRkJRMklzYzBKQlFVMHNUMEZCVGl4SFFVRm5RaXhMUVVGTExFdEJRVXdzUTBGQlZ5eE5RVUZOTEU5QlFVNHNRMEZCTTBJc1EwRkVZVHRoUVVGcVFqczdRVUZKUVN4clFrRkJUU3hYUVVGT0xFZEJRVzlDTEUxQlFVMHNUMEZCVGl4SFFVRm5RaXhOUVVGTkxFbEJRVTQ3T3p0QlFYaENTU3huUWtFeVFuQkRMRU5CUVVNc1MwRkJTeXhyUWtGQlRDeEZRVUY1UWp0QlFVTXhRaXh6UWtGQlRTeFJRVUZPTEVkQlFXbENMREJDUVVGbExFMUJRVTBzVjBGQlRpeEZRVUZ0UWl4UFFVRnNReXhEUVVGcVFpeERRVVF3UWp0aFFVRTVRanM3TzBGQk0wSjNReXhuUWtGblEzQkRMRTFCUVUwc1NVRkJUaXhMUVVGbExFMUJRVTBzVDBGQlRpeEZRVUZsTzBGQlF6bENMRFpDUVVGaExFbEJRV0lzUTBGRU9FSTdRVUZGT1VJc2MwSkJRVTBzU1VGQlRpeEhRVUZoTEUxQlFVMHNUMEZCVGl4RFFVWnBRanRoUVVGc1F6czdPMEZCYUVOM1F5eG5Ra0Z6UTJ4RExHZENRVUZuUWl4TFFVRkRMRU5CUVUwc1NVRkJUaXhKUVVGakxFMUJRVTBzU1VGQlRpeERRVUZYTEZOQlFWZ3NSMEZCZDBJc1RVRkJUU3hKUVVGT0xFTkJRVmNzVTBGQldDeERRVUZ4UWl4TlFVRk5MRTlCUVU0c1JVRkJaU3hMUVVGd1F5eERRVUYyUXl4SFFVRnZSaXhOUVVGTkxFOUJRVTQ3T3p0QlFYUkRiRVVzWjBKQmVVTndReXhEUVVGRExFMUJRVTBzVFVGQlRpeEZRVUZqTzBGQlEyWXNjVUpCUVVzc1MwRkJUQ3hEUVVGWExFZEJRVmdzU1VGQmEwSXNZVUZCYkVJc1EwRkVaVHRoUVVGdVFpeE5RVVZQTzBGQlEwZ3NjVUpCUVVzc1RVRkJUQ3hEUVVGWkxFMUJRVTBzVFVGQlRpeERRVUZhTEVOQlFUQkNMRkZCUVRGQ0xFTkJRVzFETEUxQlFVMHNVVUZCVGl4RFFVRnVReXhIUVVGeFJDeGhRVUZ5UkN4RFFVUkhPMkZCUmxBN1UwRjZRMG83T3p0QlFVcHZReXhoUVhGRUwwSXNTVUZCU1N4TFFVRkpMRU5CUVVvc1JVRkJUeXhMUVVGSkxFdEJRVXNzWVVGQlRDeEZRVUZ2UWl4SlFVRjRReXhGUVVFMlF6dEJRVU42UXl4blFrRkJUU3hSUVVGTkxFdEJRVXNzVlVGQlRDeERRVUZuUWl4RlFVRm9RaXhEUVVGT0xFTkJSRzFETzBGQlJYcERMR2RDUVVGTkxGTkJRVkVzUzBGQlN5eE5RVUZNTEVOQlFWa3NTMEZCV2l4RFFVRlNMRU5CUm0xRE96dEJRVWw2UXl4dFFrRkJUU3hQUVVGT0xFZEJRV2RDTEU5QlFVMHNTVUZCVGl4RFFVRlhMRTlCUVZnc1EwRkJiVUlzVDBGQlRTeFJRVUZPTEVWQlFXZENMRTlCUVUwc1VVRkJUaXhEUVVGdVJDeERRVXA1UXpzN1FVRk5la01zYVVKQlFVc3NTMEZCVEN4RFFVRlhMRXRCUVZnc1NVRkJhMElzVDBGQlRTeFBRVUZPTEVOQlRuVkNPMU5CUVRkRE96dEJRVk5CTEZsQlFVa3NTMEZCU3l4UFFVRk1MRVZCUVdNN1FVRkRaQ3hwUWtGQlN5eFBRVUZNTEVOQlFXRXNTMEZCU3l4TFFVRk1MRVZCUVZrc1NVRkJla0lzUlVGRVl6dFRRVUZzUWpzN1FVRkpRU3hsUVVGUExFbEJRVU1zUTBGQlN5eFRRVUZNTEVkQlFXdENMRWxCUVc1Q0xFZEJRVEJDTEZWQlFURkNMRU5CYkVVMlFqczdPMEZCYUUxMFF5eHhRa0Z4VVVZc05rSkJRVzlDTzFsQlFWb3NPRVJCUVZFc2EwSkJRVWs3V1VGRFVpeFRRVUV3UWl4TlFVRXhRaXhQUVVSUk96dFpRVU5ITEhORFFVRmxMRzFDUVVSc1FqczdRVUZGYUVJc1dVRkJUU3haUVVGWkxHZENRVUZOTEU5QlFVNHNXVUZCWXl4VlFVRmtMRU5CUVZvc1EwRkdWVHM3UVVGSmFFSXNXVUZCU1N4TlFVRktMRVZCUVZrN1FVRkRVaXh6UWtGQlZTeEhRVUZXTEVOQlFXTXNSVUZCUlN4alFVRkdMRVZCUVdRc1JVRkVVVHRUUVVGYU96dEJRVWxCTEdWQlFVOHNVMEZCVUN4RFFWSm5RanM3TzBGQmNsRnNRaXh4UWtGblVrWXNlVUpCUVZFN1FVRkRTaXgzUWtGQlRTeEpRVUZPTEZsQlJFazdRVUZGU2l4bFFVRlBMRWxCUVZBc1EwRkdTVHM3TzBGQmFGSk9MSEZDUVhGU1Jpd3lRa0ZCVXp0QlFVTk1MSGRDUVVGTkxFdEJRVTRzV1VGRVN6dEJRVVZNTEdWQlFVOHNTVUZCVUN4RFFVWkxPenM3UVVGeVVsQXNjVUpCTUZKR0xESkNRVUZUTzBGQlEwd3NaVUZCVHl4TFFVRkxMRkZCUVV3c1IwRkJaMElzUzBGQlN5eExRVUZNTEVWQlFXaENMRWRCUVN0Q0xFdEJRVXNzVFVGQlRDeEZRVUV2UWl4RFFVUkdPenM3UVVFeFVsQXNjVUpCT0ZKR0xIbENRVUZSTzBGQlEwb3NXVUZCVFN4VFFVRlRMRXRCUVVzc1RVRkJUQ3hEUVVSWU8wRkJSVW9zZDBKQlFVMHNTMEZCVGl4WlFVWkpPenRCUVVsS0xHRkJRVXNzU1VGQlNTeEhRVUZLTEVsQlFWY3NUVUZCYUVJc1JVRkJkMEk3UVVGRGNFSXNaMEpCUVVrc1QwRkJUeXhqUVVGUUxFTkJRWE5DTEVkQlFYUkNMRU5CUVVvc1JVRkJaME03UVVGRE5VSXNkVUpCUVU4c1IwRkJVQ3hGUVVGWkxFbEJRVm9zUjBGQmJVSXNUMEZCVHl4SFFVRlFMRVZCUVZrc1RVRkJXaXhIUVVGeFFpeFBRVUZQTEVkQlFWQXNSVUZCV1N4UFFVRmFMRU5CUkZvN1lVRkJhRU03VTBGRVNqczdRVUZOUVN4bFFVRlBMRWxCUVZBc1EwRldTVHM3TzBGQk9WSk9MRmRCTWxOTExHbEVRVUZ0UWl4UFFVRlBPMEZCUXpkQ0xEUkNRVUZaTEV0QlFVc3NVMEZCVEN4RFFVRmxMRmxCUVdZc1JVRkJaME1zVFVGQk5VTXNRMEZFTmtJN096dEJRVE5UTDBJc1YwRXJVMHNzYVVSQlFXMUNMRTlCUVU4N1FVRkROMElzTkVKQlFWa3NTMEZCU3l4VFFVRk1MRU5CUVdVc1dVRkJaaXhGUVVGblF5eE5RVUUxUXl4RFFVUTJRanM3TzFkQkwxTXZRanM3TzBGQmIxUk9MRTlCUVU4c1UwRkJVQ3hEUVVGcFFpeG5Ra0ZCYWtJc1IwRkJiME1zVTBGQmNFTTdRVUZEUVN4UFFVRlBMRk5CUVZBc1EwRkJhVUlzV1VGQmFrSXNSMEZCWjBNN1FVRkROVUlzWVVGQlV5eERRVUZVTzBGQlEwRXNZMEZCVlN4RFFVRldPMEZCUTBFc1YwRkJUeXhMUVVGUU8wRkJRMEVzVTBGQlN5eFRRVUZNTzBGQlEwRXNVMEZCU3l4VFFVRk1PMEZCUTBFc1pVRkJWeXhUUVVGWU8wTkJUa283TzJ0Q1FWTmxJaXdpWm1sc1pTSTZJa0ZqZEdsdmJpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdWR0Z6YXlCbWNtOXRJQ2N1TGk5MFlYTnJMMVJoYzJzbk8xeHVhVzF3YjNKMElIc2djM0JsWldSUVpYSlRaV052Ym1RZ2ZTQm1jbTl0SUNjdUxpOXBibU12WTJGc1l5YzdYRzVwYlhCdmNuUWdleUJwYzA1MWJTd2dhWE5QWW1vc0lHbHpVM1J5YVc1bklIMGdabkp2YlNBbkxpNHZhVzVqTDNWMGFXeHpKenRjYm1sdGNHOXlkQ0JrWlhSbFkzUldZV3gxWlZSNWNHVWdabkp2YlNBbkxpNHZkbUZzZFdVdGRIbHdaWE12WkdWMFpXTjBKenRjYm1sdGNHOXlkQ0JPVlUxRlVrbERRVXhmVmtGTVZVVlRJR1p5YjIwZ0p5NHVMMmx1WXk5dWRXMWxjbWxqWVd3dGRtRnNkV1Z6Snp0Y2JtbHRjRzl5ZENCa1pYUmxZM1JCWkdGd2RHVnlJR1p5YjIwZ0p5NHVMMmx1WXk5a1pYUmxZM1F0WVdSaGNIUmxjaWM3WEc1Y2JtTnZibk4wSUU1VlRWOU9WVTFGVWtsRFFVeGZWa0ZNVlVWVElEMGdUbFZOUlZKSlEwRk1YMVpCVEZWRlV5NXNaVzVuZEdnN1hHNWNibU52Ym5OMElHUmxabUYxYkhSU1pXNWtaWEpsY2lBOUlDaDdJSE4wWVhSbExDQmhaR0Z3ZEdWeUxDQmhaR0Z3ZEdWeVJHRjBZU3dnWld4bGJXVnVkQ0I5S1NBOVBpQmhaR0Z3ZEdWeUtHVnNaVzFsYm5Rc0lITjBZWFJsTENCaFpHRndkR1Z5UkdGMFlTazdYRzVjYm1OdmJuTjBJR052Ym5abGNuUkpabE5vYjNWc1pFSmxUblZ0WW1WeUlEMGdLSFpoYkhWbEtTQTlQaUFoYVhOT1lVNG9kbUZzZFdVcElEOGdjR0Z5YzJWR2JHOWhkQ2gyWVd4MVpTa2dPaUIyWVd4MVpUdGNibHh1WTJ4aGMzTWdRV04wYVc5dUlHVjRkR1Z1WkhNZ1ZHRnpheUI3WEc0Z0lDQWdZMjl1YzNSeWRXTjBiM0lvY0hKdmNITWdQU0I3ZlNrZ2UxeHVJQ0FnSUNBZ0lDQndjbTl3Y3k1emRHRjBaU0E5SUh0OU8xeHVJQ0FnSUNBZ0lDQndjbTl3Y3k1MllXeDFaVXRsZVhNZ1BTQmJYVHRjYmlBZ0lDQWdJQ0FnY0hKdmNITXVjR0Z5Wlc1MFMyVjVjeUE5SUZ0ZE8xeHVJQ0FnSUNBZ0lDQnpkWEJsY2lod2NtOXdjeWs3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeXBjYmlBZ0lDQWdJQ0FnSXlCVFpYUWdRV04wYVc5dUlIQnliM0JsY25ScFpYTmNiaUFnSUNBZ0lDQWdJeU1nVTJWMElIVnpaWEl0WkdWbWFXNWxaQ0JCWTNScGIyNGdjSEp2Y0dWeWRHbGxjMXh1WEc0Z0lDQWdJQ0FnSUVCd1lYSmhiU0JiYjJKcVpXTjBYVnh1SUNBZ0lDQWdJQ0JBY21WMGRYSnVJRnRCWTNScGIyNWRYRzRnSUNBZ0tpOWNiaUFnSUNCelpYUW9jSEp2Y0hNZ1BTQjdmU2tnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMblpoYkhWbGN5QTlJSFJvYVhNdWRtRnNkV1Z6SUh4OElIdDlPMXh1WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJSHNnZG1Gc2RXVnpMQ0F1TGk1d2NtOXdjMVJ2VTJWMElIMGdQU0J3Y205d2N6dGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2FXNW9aWEpwZEdGaWJHVWdQU0I3ZlR0Y2JseHVJQ0FnSUNBZ0lDQXZMeUJUWlhRZ2JtOXVMV052Ym5OMWJXVmtJSEJ5YjNCbGNuUnBaWE5jYmlBZ0lDQWdJQ0FnYzNWd1pYSXVjMlYwS0hCeWIzQnpWRzlUWlhRcE8xeHVYRzRnSUNBZ0lDQWdJQzh2SUVSbGRHVmpkQ0JqYjNKeVpXTjBJR0JoWkdGd2RHVnlZQ0JwWmlCdWIyNWxJR1Y0YVhOMGN5QmhibVFnWUdWc1pXMWxiblJnSUdseklHSmxhVzVuSUhObGRGeHVJQ0FnSUNBZ0lDQnBaaUFvZEdocGN5NWxiR1Z0Wlc1MEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9JWFJvYVhNdVlXUmhjSFJsY2lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDOHZJRVIxWTJ0MGVYQnBjMmdnWTJobFkyc2dabTl5SUVGa1lYQjBaWEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtRmtZWEIwWlhJZ1BTQmtaWFJsWTNSQlpHRndkR1Z5S0hSb2FYTXVaV3hsYldWdWRDazdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RHaHBjeTVoWkdGd2RHVnlMbWRsZEVWc1pXMWxiblJFWVhSaEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVZV1JoY0hSbGNrUmhkR0VnUFNCMGFHbHpMbUZrWVhCMFpYSXVaMlYwUld4bGJXVnVkRVJoZEdFb2RHaHBjeTVsYkdWdFpXNTBLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2doZEdocGN5NXZibEpsYm1SbGNpa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWIyNVNaVzVrWlhJZ1BTQmtaV1poZFd4MFVtVnVaR1Z5WlhJN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQXZMeUJRY21sdFpTQmhiaUJ2WW1wbFkzUWdkRzhnYVc1b1pYSnBkQ0JtY205dExDQjNhWFJvSUc5dWJIa2dZSFpoYkhWbFlDQndjbTl3WlhKMGFXVnpYRzRnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR3RsZVNCcGJpQjBhR2x6TG1SbFptRjFiSFJXWVd4MVpTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFJvYVhNdVpHVm1ZWFZzZEZaaGJIVmxMbWhoYzA5M2JsQnliM0JsY25SNUtHdGxlU2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9jSEp2Y0hOVWIxTmxkQzVvWVhOUGQyNVFjbTl3WlhKMGVTaHJaWGtwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2x1YUdWeWFYUmhZbXhsVzJ0bGVWMGdQU0J3Y205d2MxUnZVMlYwVzJ0bGVWMDdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmU0JsYkhObElHbG1JQ2gwYUdselcydGxlVjBnSVQwOUlIVnVaR1ZtYVc1bFpDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcGJtaGxjbWwwWVdKc1pWdHJaWGxkSUQwZ2RHaHBjMXRyWlhsZE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQzh2SUZWd1pHRjBaU0JsZUdsemRHbHVaeUIyWVd4MVpYTWdkMmwwYUNCcGJtaGxjbWwwWVdKc1pTQndjbTl3WlhKMGFXVnpYRzRnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR3RsZVNCcGJpQjBhR2x6TG5aaGJIVmxjeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0hSb2FYTXVkbUZzZFdWekxtaGhjMDkzYmxCeWIzQmxjblI1S0d0bGVTa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxuWmhiSFZsYzF0clpYbGRJRDBnZXlBdUxpNTBhR2x6TG5aaGJIVmxjMXRyWlhsZExDQXVMaTVwYm1obGNtbDBZV0pzWlNCOU8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdMeThnVlhCa1lYUmxYRzRnSUNBZ0lDQWdJR2xtSUNoMllXeDFaWE1wSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWMyVjBWbUZzZFdWektIWmhiSFZsY3l3Z2FXNW9aWEpwZEdGaWJHVXBPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJRY21WamIyMXdkWFJsSUc1MWJXSmxjaUJ2WmlCMllXeDFaU0JyWlhrZ1lXNWtJSEJoY21WdWRDQnJaWGx6SUhSdklHRjJiMmxrSUhCbGNpMW1jbUZ0WlNCdFpXRnpkWEpsYldWdWRGeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXVkVzFXWVd4MVpVdGxlWE1nUFNCMGFHbHpMblpoYkhWbFMyVjVjeTVzWlc1bmRHZzdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbTUxYlZCaGNtVnVkRXRsZVhNZ1BTQjBhR2x6TG5CaGNtVnVkRXRsZVhNdWJHVnVaM1JvTzF4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjMlYwVm1Gc2RXVnpLSFpoYkhWbGN5d2dhVzVvWlhKcGRDa2dlMXh1SUNBZ0lDQWdJQ0F2THlCSmRHVnlZWFJsSUc5MlpYSWdZV3hzSUdsdVkyOXRhVzVuSUhaaGJIVmxjeUJoYm1RZ2MyVjBYRzRnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR3RsZVNCcGJpQjJZV3gxWlhNcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaDJZV3gxWlhNdWFHRnpUM2R1VUhKdmNHVnlkSGtvYTJWNUtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR3hsZENCb1lYTkRhR2xzWkhKbGJpQTlJR1poYkhObE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUdOb2FXeGtjbVZ1SUQwZ2UzMDdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0F2THlCTlpYSm5aU0JwYm5SdklHVjRhWE4wYVc1bklIWmhiSFZsSUc5eUlHTnlaV0YwWlNCdVpYZGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCMllXeDFaVUZzY21WaFpIbEZlR2x6ZEhNZ1BTQjBhR2x6TG5aaGJIVmxjMXRyWlhsZElDRTlQU0IxYm1SbFptbHVaV1E3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYkdWMElHNWxkMVpoYkhWbElEMGdkbUZzZFdWQmJISmxZV1I1UlhocGMzUnpJRDhnZXlBdUxpNTBhR2x6TG5aaGJIVmxjMXRyWlhsZElIMGdPaUI3SUM0dUxtbHVhR1Z5YVhRZ2ZUdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzh2SUVsbUlIWmhiSFZsY3lCcGN5QnViM1FnWVc0Z2IySnFaV04wTENCaGMzTnBaMjRnZG1Gc2RXVWdkRzhnWkdWbVlYVnNkQ0J3Y205d1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLQ0ZwYzA5aWFpaDJZV3gxWlhOYmEyVjVYU2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdibVYzVm1Gc2RXVmJkR2hwY3k1a1pXWmhkV3gwVm1Gc2RXVlFjbTl3WFNBOUlIWmhiSFZsYzF0clpYbGRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUc1bGQxWmhiSFZsSUQwZ2V5QXVMaTV1WlhkV1lXeDFaU3dnTGk0dWRtRnNkV1Z6VzJ0bGVWMGdmVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdkx5QkpaaUIzWlNkMlpTQm5iM1FnWVc0Z1lXUmhjSFJsY2l3Z1oyVjBJSFJvWlNCamRYSnlaVzUwSUhaaGJIVmxYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0c1bGQxWmhiSFZsTG1OMWNuSmxiblFnUFQwOUlIVnVaR1ZtYVc1bFpDQW1KaUIwYUdsekxtRmtZWEIwWlhJcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYm1WM1ZtRnNkV1V1WTNWeWNtVnVkQ0E5SUdOdmJuWmxjblJKWmxOb2IzVnNaRUpsVG5WdFltVnlLSFJvYVhNdVlXUmhjSFJsY2k1blpYUW9kR2hwY3k1bGJHVnRaVzUwTENCclpYa3BLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9ibVYzVm1Gc2RXVXVabkp2YlNBOVBUMGdkVzVrWldacGJtVmtJQ1ltSUhSb2FYTXVZV1JoY0hSbGNpa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCdVpYZFdZV3gxWlM1bWNtOXRJRDBnYm1WM1ZtRnNkV1V1WTNWeWNtVnVkRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdkx5QkJjSEJzZVNCa1pXWmhkV3gwSUhaaGJIVmxJSEJ5YjNCbGNuUnBaWE5jYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb0lYWmhiSFZsUVd4eVpXRmtlVVY0YVhOMGN5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCdVpYZFdZV3gxWlNBOUlIc2dMaTR1ZEdocGN5NWtaV1poZFd4MFZtRnNkV1VzSUM0dUxtNWxkMVpoYkhWbElIMDdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1NXWWdkMlVnWkc5dUozUWdhR0YyWlNCaElIWmhiSFZsSUhSNWNHVWdZVzVrSUhkbElHUnZJR2hoZG1VZ1lXNGdRV1JoY0hSbGNpd2dZMmhsWTJzZ1ptOXlJSFI1Y0dVZ2QybDBhQ0IyWVd4MVpTQnJaWGxjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb0lXNWxkMVpoYkhWbExuUjVjR1VnSmlZZ2RHaHBjeTVoWkdGd2RHVnlJQ1ltSUhSb2FYTXVZV1JoY0hSbGNpNWphR1ZqYTFaaGJIVmxWSGx3WlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J1WlhkV1lXeDFaUzUwZVhCbElEMGdkR2hwY3k1aFpHRndkR1Z5TG1Ob1pXTnJWbUZzZFdWVWVYQmxLR3RsZVNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdMeThnU1dZZ2QyVWdjM1JwYkd3Z1pHOXVKM1FnYUdGMlpTQmhJSFpoYkhWbElIUjVjR1VnWVc1a0lIUm9hWE1nYVhNZ2RHaGxJR1pwY25OMElIUnBiV1VnZDJVbmRtVWdjMlYwSUhSb2FYTWdkbUZzZFdVc0lHTm9aV05ySUc1MWJXVnlhV05oYkNCMllXeDFaWE1nWm05eUlITjBjbWx1WjNNZ1lXNWtJSFJsYzNSY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9JVzVsZDFaaGJIVmxMblI1Y0dVZ0ppWWdJWFJvYVhNdWRtRnNkV1Z6VzJ0bGVWMHBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JtVjNWbUZzZFdVdWRIbHdaU0E5SUdSbGRHVmpkRlpoYkhWbFZIbHdaU2h1WlhkV1lXeDFaU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0x5OGdTV1lnZDJVZ2FHRjJaU0JoSUhaaGJIVmxJSFI1Y0dVc0lHaGhibVJzWlM0Z1ZHaHBjeUJwY3lCdGVTQnNaV0Z6ZENCbVlYWnZkWEpwZEdVZ2NHRnlkQ0J2WmlCUWIzQnRiM1JwYjI0c0lITnZMaTR1SUdWdWFtOTVMbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNodVpYZFdZV3gxWlM1MGVYQmxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2dUbFZOWDA1VlRVVlNTVU5CVEY5V1FVeFZSVk03SUdrckt5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2NISnZjRTVoYldVZ1BTQk9WVTFGVWtsRFFVeGZWa0ZNVlVWVFcybGRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2RtRnNkV1ZRY205d0lEMGdibVYzVm1Gc2RXVmJjSEp2Y0U1aGJXVmRPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0F2THlCSlppQjBhR2x6SUhCeWIzQWdhWE1nWVNCemRISnBibWNnWVc1a0lIZGxJR2hoZG1VZ1lTQnpjR3hwZEhSbGNpd2djM0JzYVhSY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDaHVaWGRXWVd4MVpTNTBlWEJsTG1oaGMwOTNibEJ5YjNCbGNuUjVLQ2R6Y0d4cGRDY3BLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnYzNCc2FYUlFjbTl3SUQwZ2FYTlRkSEpwYm1jb2RtRnNkV1ZRY205d0tTQS9JRzVsZDFaaGJIVmxMblI1Y0dVdWMzQnNhWFFvZG1Gc2RXVlFjbTl3S1NBNklIdDlPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2MzQnNhWFJMWlhrZ2FXNGdjM0JzYVhSUWNtOXdLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoemNHeHBkRkJ5YjNBdWFHRnpUM2R1VUhKdmNHVnlkSGtvYzNCc2FYUkxaWGtwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCamIyMWlhVzVsWkV0bGVTQTlJR3RsZVNBcklITndiR2wwUzJWNU8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0F2THlCSlppQjNaU0JrYjI0bmRDQm9ZWFpsSUdFZ1kyaHBiR1FnZG1Gc2RXVWdabTl5SUhSb2FYTWdhMlY1TENCdFlXdGxJRzl1WlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLQ0ZqYUdsc1pISmxibHRqYjIxaWFXNWxaRXRsZVYwcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0JrWldaaGRXeDBWbUZzZFdVZ1BTQW9ibVYzVm1Gc2RXVXVkSGx3WlM1a1pXWmhkV3gwVUhKdmNITWdKaVlnYm1WM1ZtRnNkV1V1ZEhsd1pTNWtaV1poZFd4MFVISnZjSE5iYzNCc2FYUkxaWGxkS1NBL0lHNWxkMVpoYkhWbExuUjVjR1V1WkdWbVlYVnNkRkJ5YjNCelczTndiR2wwUzJWNVhTQTZJRzVsZDFaaGJIVmxMblI1Y0dVdVpHVm1ZWFZzZEZCeWIzQnpJSHg4SUh0OU8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyaHBiR1J5Wlc1YlkyOXRZbWx1WldSTFpYbGRJRDBnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdUxpNXVaWGRXWVd4MVpTeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdMaTR1WkdWbVlYVnNkRlpoYkhWbExGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQndZWEpsYm5RNklHdGxlU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTJocGJHUkxaWGs2SUhOd2JHbDBTMlY1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1JsYkdWMFpTQmphR2xzWkhKbGJsdGpiMjFpYVc1bFpFdGxlVjB1ZEhsd1pUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FHRnpRMmhwYkdSeVpXNGdQU0IwY25WbE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMmhwYkdSeVpXNWJZMjl0WW1sdVpXUkxaWGxkVzNCeWIzQk9ZVzFsWFNBOUlIQmhjbk5sUm14dllYUW9jM0JzYVhSUWNtOXdXM053YkdsMFMyVjVYU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0F2THlCSlppQjNaU0JvWVhabElHRWdkR1Z0Y0d4aGRHVWdablZ1WTNScGIyNHNJR2RsYm1WeVlYUmxYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tDRnVaWGRXWVd4MVpTNTBaVzF3YkdGMFpTQW1KaUJ1WlhkV1lXeDFaUzUwZVhCbExuUmxiWEJzWVhSbElDWW1JR2x6VTNSeWFXNW5LSFpoYkhWbFVISnZjQ2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYm1WM1ZtRnNkV1V1ZEdWdGNHeGhkR1VnUFNCdVpYZFdZV3gxWlM1MGVYQmxMblJsYlhCc1lYUmxLSFpoYkhWbFVISnZjQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUdsbUlDaHVaWGRXWVd4MVpTNTBlWEJsTG1SbFptRjFiSFJRY205d2N5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUc1bGQxWmhiSFZsSUQwZ2V5QXVMaTV1WlhkV1lXeDFaU3dnTGk0dWJtVjNWbUZzZFdVdWRIbHdaUzVrWldaaGRXeDBVSEp2Y0hNZ2ZUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0haaGJIVmxVSEp2Y0NBaFBUMGdkVzVrWldacGJtVmtJQ1ltSUc1bGQxWmhiSFZsTG5SNWNHVXVjR0Z5YzJVcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J1WlhkV1lXeDFaVnR3Y205d1RtRnRaVjBnUFNCdVpYZFdZV3gxWlM1MGVYQmxMbkJoY25ObEtIWmhiSFZsVUhKdmNDd2dibVYzVm1Gc2RXVXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZTQXZMeUJGYm1RZ2RtRnNkV1VnZEhsd1pTQnViMjV6Wlc1elpWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdMeThnVTJWMElHQndjbVYyWUNCMGJ5QmdZM1Z5Y21WdWRHQWdabTl5SUdacGNuTjBJR1p5WVcxbElHRm1kR1Z5SUhObGRGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHNWxkMVpoYkhWbExuQnlaWFlnUFNCdVpYZFdZV3gxWlM1amRYSnlaVzUwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM4dklFbG1JSFJvYVhNZ2RtRnNkV1VnWkc5bGMyNG5kQ0JvWVhabElHTm9hV3hrY21WdUxDQmhaR1FnZEc4Z2RtRnNkV1ZMWlhselhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLQ0ZvWVhORGFHbHNaSEpsYmlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RHaHBjeTUyWVd4MVpVdGxlWE11YVc1a1pYaFBaaWhyWlhrcElEMDlQU0F0TVNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTUyWVd4MVpVdGxlWE11Y0hWemFDaHJaWGtwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0F2THlCUGNpQmhaR1FnZEc4Z2NHRnlaVzUwUzJWNWMxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRzVsZDFaaGJIVmxMbU5vYVd4a2NtVnVJRDBnYm1WM1ZtRnNkV1V1WTJocGJHUnlaVzRnZkh3Z2UzMDdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFJvYVhNdWNHRnlaVzUwUzJWNWN5NXBibVJsZUU5bUtHdGxlU2tnUFQwOUlDMHhLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxuQmhjbVZ1ZEV0bGVYTXVjSFZ6YUNoclpYa3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXpaWFJXWVd4MVpYTW9ZMmhwYkdSeVpXNHBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVkbUZzZFdWelcydGxlVjBnUFNCdVpYZFdZV3gxWlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJQzhxWEc0Z0lDQWdJQ0FnSUVSbFkybGtaU0IzYUdWMGFHVnlJSFJvYVhNZ1FXTjBhVzl1SUhkcGJHd2djbVZ1WkdWeUlHOXVJRzVsZUhRZ1puSmhiV1ZjYmx4dUlDQWdJQ0FnSUNCQWNHRnlZVzBnVzBGamRHbHZibDFjYmlBZ0lDQWdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRYRzRnSUNBZ0lDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhWeHVJQ0FnSUNBZ0lDQkFjbVYwZFhKdUlGdGliMjlzWldGdVhUb2dVbVYwZFhKdUlIUnlkV1VnZEc4Z2NtVnVaR1Z5WEc0Z0lDQWdLaTljYmlBZ0lDQjNhV3hzVW1WdVpHVnlLR0ZqZEdsdmJpd2dabkpoYldWVGRHRnRjQ3dnWld4aGNITmxaQ2tnZTF4dUlDQWdJQ0FnSUNCc1pYUWdhR0Z6UTJoaGJtZGxaQ0E5SUdaaGJITmxPMXh1WEc0Z0lDQWdJQ0FnSUM4dklFTm9aV05ySUdsbUlHSmhjMlVnZG1Gc2RXVnpJR2hoZG1VZ2RYQmtZWFJsWkNCY2JpQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQjBhR2x6TG01MWJWWmhiSFZsUzJWNWN6c2dhU3NyS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQnJaWGtnUFNCMGFHbHpMblpoYkhWbFMyVjVjMXRwWFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElIWmhiSFZsSUQwZ2RHaHBjeTUyWVd4MVpYTmJhMlY1WFR0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1VuVnVJSFJ5WVc1elptOXliU0JtZFc1amRHbHZiaUFvYVdZZ2NISmxjMlZ1ZENsY2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMllXeDFaUzUwY21GdWMyWnZjbTBwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMllXeDFaUzVqZFhKeVpXNTBJRDBnZG1Gc2RXVXVkSEpoYm5ObWIzSnRLSFpoYkhWbExtTjFjbkpsYm5Rc0lHdGxlU3dnZEdocGN5azdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUM4dklFTmhjQ0J0YVc1cGJYVnRYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9hWE5PZFcwb2RtRnNkV1V1YldsdUtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFpoYkhWbExtTjFjbkpsYm5RZ1BTQk5ZWFJvTG0xaGVDaDJZV3gxWlM1amRYSnlaVzUwTENCMllXeDFaUzV0YVc0cE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCRFlYQWdiV0Y0YVcxMWJWeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHbHpUblZ0S0haaGJIVmxMbTFoZUNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZV3gxWlM1amRYSnlaVzUwSUQwZ1RXRjBhQzV0YVc0b2RtRnNkV1V1WTNWeWNtVnVkQ3dnZG1Gc2RXVXViV0Y0S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnVW05MWJtUWdiblZ0WW1WeVhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RtRnNkV1V1Y205MWJtUXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IyWVd4MVpTNWpkWEp5Wlc1MElEMGdUV0YwYUM1eWIzVnVaQ2gyWVd4MVpTNWpkWEp5Wlc1MEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVXVabkpoYldWRGFHRnVaMlVnUFNCMllXeDFaUzVqZFhKeVpXNTBJQzBnZG1Gc2RXVXVjSEpsZGp0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1ZYQmtZWFJsSUhabGJHOWphWFI1WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvSVhSb2FYTXVZMkZzWTNWc1lYUmxjMVpsYkc5amFYUjVLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVXVkbVZzYjJOcGRIa2dQU0J6Y0dWbFpGQmxjbE5sWTI5dVpDaDJZV3gxWlM1bWNtRnRaVU5vWVc1blpTd2daV3hoY0hObFpDazdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUM4dklFbG1JSFJvYVhNZ2RtRnNkV1VnYUdGeklHTm9ZVzVuWldSY2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMllXeDFaUzV3Y21WMklDRTlQU0IyWVd4MVpTNWpkWEp5Wlc1MEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhR0Z6UTJoaGJtZGxaQ0E5SUhSeWRXVTdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZzZFdVdWNISmxkaUE5SUhaaGJIVmxMbU4xY25KbGJuUTdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUM4dklFRndjR1Z1WkNCMWJtbDBYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0IyWVd4MVpVWnZjbE4wWVhSbElEMGdLSFpoYkhWbExuUjVjR1VnSmlZZ2RtRnNkV1V1ZEhsd1pTNXpaWEpwWVd4cGVtVXBJRDhnZG1Gc2RXVXVkSGx3WlM1elpYSnBZV3hwZW1Vb2RtRnNkV1V1WTNWeWNtVnVkQ3dnZG1Gc2RXVXBJRG9nZG1Gc2RXVXVZM1Z5Y21WdWREdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdRV1JrSUhSdklITjBZWFJsSUdsbUlIUm9hWE1nYVhNZ2JtOTBJR0VnWTJocGJHUWdkbUYxWlZ4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0NGMllXeDFaUzV3WVhKbGJuUXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxuTjBZWFJsVzJ0bGVWMGdQU0IyWVd4MVpVWnZjbE4wWVhSbE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxuWmhiSFZsYzF0MllXeDFaUzV3WVhKbGJuUmRMbU5vYVd4a2NtVnVXM1poYkhWbExtTm9hV3hrUzJWNVhTQTlJSFpoYkhWbFJtOXlVM1JoZEdVN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQXZMeUJWY0dSaGRHVWdjR0Z5Wlc1MElIWmhiSFZsYzF4dUlDQWdJQ0FnSUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElIUm9hWE11Ym5WdFVHRnlaVzUwUzJWNWN6c2dhU3NyS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQnJaWGtnUFNCMGFHbHpMbkJoY21WdWRFdGxlWE5iYVYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQjJZV3gxWlNBOUlIUm9hWE11ZG1Gc2RXVnpXMnRsZVYwN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUhaaGJIVmxMbU4xY25KbGJuUWdQU0IyWVd4MVpTNTBlWEJsTG1OdmJXSnBibVVvZG1Gc2RXVXVZMmhwYkdSeVpXNHNJSFpoYkhWbExuUmxiWEJzWVhSbEtUdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV6ZEdGMFpWdHJaWGxkSUQwZ2RtRnNkV1V1WTNWeWNtVnVkRHRjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxtOXVSbkpoYldVcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXViMjVHY21GdFpTaDBhR2x6TG5OMFlYUmxMQ0IwYUdsektUdGNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUFvZEdocGN5NXZia05zWldGdWRYQXBJRDhnZEhKMVpTQTZJR2hoYzBOb1lXNW5aV1E3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdhVzVvWlhKcGRDaHdjbTl3Y3lBOUlIdDlLU0I3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJSHNnZG1Gc2RXVnpMQ0F1TGk1d2NtOXdjMVJ2VTJWMElIMGdQU0J3Y205d2N6dGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2JtVjNRV04wYVc5dUlEMGdjM1Z3WlhJdWFXNW9aWEpwZENod2NtOXdjMVJ2VTJWMEtUdGNibHh1SUNBZ0lDQWdJQ0JwWmlBb2RtRnNkV1Z6S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J1WlhkQlkzUnBiMjR1YzJWMEtIc2dkbUZzZFdWeklIMHBPMXh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUc1bGQwRmpkR2x2Ymp0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J3WVhWelpTZ3BJSHRjYmlBZ0lDQWdJQ0FnYzNWd1pYSXVjM1J2Y0NncE8xeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjenRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnlaWE4xYldVb0tTQjdYRzRnSUNBZ0lDQWdJSE4xY0dWeUxuTjBZWEowS0NrN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNBZ0lIMWNibHh1SUNBZ0lIUnZaMmRzWlNncElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE11YVhOQlkzUnBkbVVnUHlCMGFHbHpMbkJoZFhObEtDa2dPaUIwYUdsekxuSmxjM1Z0WlNncE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhOMFlYSjBLQ2tnZTF4dUlDQWdJQ0FnSUNCamIyNXpkQ0IyWVd4MVpYTWdQU0IwYUdsekxuWmhiSFZsY3p0Y2JpQWdJQ0FnSUNBZ2MzVndaWEl1YzNSaGNuUW9LVHRjYmx4dUlDQWdJQ0FnSUNCbWIzSWdLR3hsZENCclpYa2dhVzRnZG1Gc2RXVnpLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvZG1Gc2RXVnpMbWhoYzA5M2JsQnliM0JsY25SNUtHdGxlU2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMllXeDFaWE5iYTJWNVhTNXdjbVYySUQwZ2RtRnNkV1Z6VzJ0bGVWMHViM0pwWjJsdUlEMGdkbUZzZFdWelcydGxlVjB1WTNWeWNtVnVkRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhOMFlYUnBZeUJsZUhSbGJtUkVaV1poZFd4MFZtRnNkV1VvY0hKdmNITXBJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSHNnTGk0dWRHaHBjeTV3Y205MGIzUjVjR1V1WkdWbVlYVnNkRlpoYkhWbExDQXVMaTV3Y205d2N5QjlPMXh1SUNBZ0lIMWNibHh1SUNBZ0lITjBZWFJwWXlCbGVIUmxibVJFWldaaGRXeDBVSEp2Y0hNb2NISnZjSE1wSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhzZ0xpNHVkR2hwY3k1d2NtOTBiM1I1Y0dVdVpHVm1ZWFZzZEZCeWIzQnpMQ0F1TGk1d2NtOXdjeUI5TzF4dUlDQWdJSDFjYm4xY2JseHVRV04wYVc5dUxuQnliM1J2ZEhsd1pTNWtaV1poZFd4MFZtRnNkV1ZRY205d0lEMGdKMk4xY25KbGJuUW5PMXh1UVdOMGFXOXVMbkJ5YjNSdmRIbHdaUzVrWldaaGRXeDBWbUZzZFdVZ1BTQjdYRzRnSUNBZ1kzVnljbVZ1ZERvZ01DeGNiaUFnSUNCMlpXeHZZMmwwZVRvZ01DeGNiaUFnSUNCeWIzVnVaRG9nWm1Gc2MyVXNYRzRnSUNBZ2JXbHVPaUIxYm1SbFptbHVaV1FzWEc0Z0lDQWdiV0Y0T2lCMWJtUmxabWx1WldRc1hHNGdJQ0FnZEhKaGJuTm1iM0p0T2lCMWJtUmxabWx1WldSY2JuMDdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJRUZqZEdsdmJqdGNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9BY3Rpb24uanNcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfQWN0aW9uMiA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvQWN0aW9uJyk7XG5cbnZhciBfQWN0aW9uMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0FjdGlvbjIpO1xuXG52YXIgX2dlbmVyYXRlQmxlbmRDdXJ2ZSA9IHJlcXVpcmUoJy4vZmxvdy9nZW5lcmF0ZS1ibGVuZC1jdXJ2ZScpO1xuXG52YXIgX2dlbmVyYXRlQmxlbmRDdXJ2ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZW5lcmF0ZUJsZW5kQ3VydmUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8qXG4gICAgTWV0aG9kcyBhbmQgcHJvcGVydGllcyB0byBhZGQgdG8gYm91bmQgQWN0aW9uc1xuKi9cbnZhciBib3VuZE9uU3RhcnQgPSBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgcmV0dXJuIGFjdGlvbi5mbG93LmFjdGl2YXRlQWN0aW9uKGFjdGlvbi5pZCwgYWN0aW9uKTtcbn07XG52YXIgYm91bmRPblN0b3AgPSBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgcmV0dXJuIGFjdGlvbi5mbG93LmRlYWN0aXZhdGVBY3Rpb24oYWN0aW9uLmlkKTtcbn07XG52YXIgYm91bmRQcm9wcyA9IGZ1bmN0aW9uIChmbG93KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZmxvdzogZmxvdyxcbiAgICAgICAgaXNQcmlvcml0eTogdHJ1ZSxcbiAgICAgICAgb25BY3RpdmF0ZTogYm91bmRPblN0YXJ0LFxuICAgICAgICBvbkRlYWN0aXZhdGU6IGJvdW5kT25TdG9wXG4gICAgfTtcbn07XG5cbnZhciBGbG93ID0gZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgICBfaW5oZXJpdHMoRmxvdywgX0FjdGlvbik7XG5cbiAgICBmdW5jdGlvbiBGbG93KHByb3BzKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBGbG93KTtcblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgICAgICBfdGhpcy5hY3RpdmVBY3Rpb25zID0ge307XG4gICAgICAgIF90aGlzLm51bUFjdGl2ZUFjdGlvbnMgPSAwO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgRmxvdy5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gc2V0KHByb3BzKSB7XG4gICAgICAgIF9BY3Rpb24ucHJvdG90eXBlLnNldC5jYWxsKHRoaXMsIHByb3BzKTtcblxuICAgICAgICB0aGlzLm9uY2UoKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgQmluZCBBY3Rpb24gdG8gQWN0b3JcbiAgICAqL1xuXG5cbiAgICBGbG93LnByb3RvdHlwZS5jb25uZWN0ID0gZnVuY3Rpb24gY29ubmVjdChhY3Rpb24pIHtcbiAgICAgICAgdmFyIGluaGVyaXRlZEFjdGlvbiA9IGFjdGlvbi5pbmhlcml0KCk7XG4gICAgICAgIHZhciBuZXdWYWx1ZXMgPSB7fTtcbiAgICAgICAgdmFyIGhhc05ld1ZhbHVlcyA9IGZhbHNlO1xuXG4gICAgICAgIC8vIENyZWF0ZSB2YWx1ZXMgb24gYWN0b3IgdGhhdCBkb24ndCBleGlzdFxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gaW5oZXJpdGVkQWN0aW9uLnZhbHVlcykge1xuICAgICAgICAgICAgaWYgKGluaGVyaXRlZEFjdGlvbi52YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiAhdGhpcy52YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIG5ld1ZhbHVlc1trZXldID0ge307XG4gICAgICAgICAgICAgICAgaGFzTmV3VmFsdWVzID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoYXNOZXdWYWx1ZXMpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KHsgdmFsdWVzOiBuZXdWYWx1ZXMgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpbmhlcml0ZWRBY3Rpb24ucGFyZW50SWQgPSBhY3Rpb24uaWQ7XG5cbiAgICAgICAgcmV0dXJuIGluaGVyaXRlZEFjdGlvbi5zZXQoYm91bmRQcm9wcyh0aGlzLCBpbmhlcml0ZWRBY3Rpb24pKTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgU3RhcnQgQWN0b3JcbiAgICAgICAgIElmIEFjdGlvbiBpcyBwcm92aWRlZCwgYmluZCBpdCB0byB0aGlzIEFjdG9yIGFuZCBzdGFydFxuICAgICAgICAgQHBhcmFtIChvcHRpb25hbCkgW0FjdGlvbl1cbiAgICAqL1xuXG5cbiAgICBGbG93LnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgICBfQWN0aW9uLnByb3RvdHlwZS5zdGFydC5jYWxsKHRoaXMpO1xuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLmFjdGl2ZUFjdGlvbnMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZUFjdGlvbnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHZhciBhY3Rpb24gPSB0aGlzLmFjdGl2ZUFjdGlvbnNba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAoIWFjdGlvbi5pc0FjdGl2ZSkge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb24uc3RhcnQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgRmxvdy5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAgIF9BY3Rpb24ucHJvdG90eXBlLnN0b3AuY2FsbCh0aGlzKTtcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5hY3RpdmVBY3Rpb25zKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVBY3Rpb25zLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUFjdGlvbnNba2V5XS5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgRmxvdy5wcm90b3R5cGUud2lsbFJlbmRlciA9IGZ1bmN0aW9uIHdpbGxSZW5kZXIoYWN0b3IsIGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gdGhpcy52YWx1ZUtleXNbaV07XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuICAgICAgICAgICAgdmFyIGRyaXZlciA9IHZhbHVlLm51bURyaXZlcnMgPyB0aGlzLmFjdGl2ZUFjdGlvbnNbdmFsdWUuZHJpdmVyc1swXV0gOiBmYWxzZTtcbiAgICAgICAgICAgIHZhciBuZXdDdXJyZW50ID0gdmFsdWUubnVtRHJpdmVycyA/IGRyaXZlci52YWx1ZXNba2V5XS5jdXJyZW50IDogdmFsdWUuY3VycmVudDtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBUT0RPOiByZXBsYWNlIHdpdGggYmxlbmQgdHJlZSByZXNvbHZlclxuICAgICAgICAgICAgICogQWRkaXRpdmUgbW90aW9uXG4gICAgICAgICAgICAgKiBCZXppZXIgdHdlZW4gYmxlbmRcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgaWYgKHZhbHVlLmJsZW5kQ3VydmUpIHtcbiAgICAgICAgICAgICAgICBuZXdDdXJyZW50ID0gdmFsdWUuYmxlbmRDdXJ2ZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gbmV3Q3VycmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBfQWN0aW9uLnByb3RvdHlwZS53aWxsUmVuZGVyLmNhbGwodGhpcywgYWN0b3IsIGZyYW1lU3RhbXAsIGVsYXBzZWQpO1xuICAgIH07XG5cbiAgICAvKlxuICAgICAgICBBZGQgYWN0aXZlIGFjdGlvbnNcbiAgICAgICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgICAgICBAcGFyYW0gW0FjdGlvbl1cbiAgICAqL1xuXG5cbiAgICBGbG93LnByb3RvdHlwZS5hY3RpdmF0ZUFjdGlvbiA9IGZ1bmN0aW9uIGFjdGl2YXRlQWN0aW9uKGlkLCBhY3Rpb24pIHtcbiAgICAgICAgdGhpcy5hY3RpdmVBY3Rpb25zW2lkXSA9IGFjdGlvbjtcbiAgICAgICAgdGhpcy5udW1BY3RpdmVBY3Rpb25zKys7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhY3Rpb24ubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBhY3Rpb24udmFsdWVLZXlzW2ldO1xuICAgICAgICAgICAgdmFyIGFjdGlvblZhbHVlID0gYWN0aW9uLnZhbHVlc1trZXldO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcblxuICAgICAgICAgICAgLy8gSWYgd2UncmUgYmxlbmRpbmcgdGhpcyBhY3Rpb24sIGFuZCB0aGVyZSdzIG9uIGFscmVhZHkgaW4gcHJvZ3Jlc3NcbiAgICAgICAgICAgIGlmIChhY3Rpb24uYmxlbmQgJiYgdmFsdWUubnVtRHJpdmVycyAmJiAhdmFsdWUuYmxlbmRDdXJ2ZSAmJiB2YWx1ZS5kcml2ZXJzWzBdLnByb3RvdHlwZSA9PT0gYWN0aW9uLnByb3RvdHlwZSkge1xuICAgICAgICAgICAgICAgIHZhbHVlLmJsZW5kQ3VydmUgPSAoMCwgX2dlbmVyYXRlQmxlbmRDdXJ2ZTIuZGVmYXVsdCkodGhpcy5hY3RpdmVBY3Rpb25zW3ZhbHVlLmRyaXZlcnNbMF1dLCBhY3Rpb24sIHZhbHVlLCBrZXkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghYWN0aW9uLmlzU2NydWJiaW5nKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUuYmxlbmRDdXJ2ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAvLyBQYXNzIEFjdG9yIHZhbHVlIHByb3BlcnRpZXMgdG8gQWN0aW9uXG4gICAgICAgICAgICAgICAgaWYgKGFjdGlvblZhbHVlLnZlbG9jaXR5ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvblZhbHVlLnZlbG9jaXR5ID0gdmFsdWUudmVsb2NpdHk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGFjdGlvblZhbHVlLmZyb20gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb25WYWx1ZS5mcm9tID0gYWN0aW9uVmFsdWUuY3VycmVudCA9IHZhbHVlLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YWx1ZS5kcml2ZXJzID0gW2lkXTtcbiAgICAgICAgICAgIHZhbHVlLm51bURyaXZlcnMgPSB2YWx1ZS5kcml2ZXJzLmxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm51bUFjdGl2ZUFjdGlvbnMpIHtcbiAgICAgICAgICAgIF9BY3Rpb24ucHJvdG90eXBlLnN0YXJ0LmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgUmVtb3ZlIGFjdGl2ZSBhY3Rpb25zXG4gICAgICAgICBAcGFyYW0gW251bWJlcl1cbiAgICAqL1xuXG5cbiAgICBGbG93LnByb3RvdHlwZS5kZWFjdGl2YXRlQWN0aW9uID0gZnVuY3Rpb24gZGVhY3RpdmF0ZUFjdGlvbihpZCkge1xuICAgICAgICB2YXIgYWN0aW9uID0gdGhpcy5hY3RpdmVBY3Rpb25zW2lkXTtcblxuICAgICAgICBpZiAoYWN0aW9uKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFjdGlvbi5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBrZXkgPSBhY3Rpb24udmFsdWVLZXlzW2ldO1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG4gICAgICAgICAgICAgICAgdmFyIGRyaXZlckluZGV4ID0gdmFsdWUuZHJpdmVycy5pbmRleE9mKGlkKTtcblxuICAgICAgICAgICAgICAgIGlmIChkcml2ZXJJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUuZHJpdmVycy5zcGxpY2UoZHJpdmVySW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5udW1Ecml2ZXJzLS07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5hY3RpdmVBY3Rpb25zW2lkXTtcbiAgICAgICAgICAgIHRoaXMubnVtQWN0aXZlQWN0aW9ucy0tO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLm51bUFjdGl2ZUFjdGlvbnMgJiYgdGhpcy5pc0FjdGl2ZSkge1xuICAgICAgICAgICAgX0FjdGlvbi5wcm90b3R5cGUuc3RvcC5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBGbG93O1xufShfQWN0aW9uMy5kZWZhdWx0KTtcblxuRmxvdy5wcm90b3R5cGUuZGVmYXVsdFZhbHVlID0gX0FjdGlvbjMuZGVmYXVsdC5leHRlbmREZWZhdWx0VmFsdWUoe1xuICAgIGRyaXZlcnM6IFtdLFxuICAgIG51bURyaXZlcnM6IDBcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBGbG93O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMFpzYjNjdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenRCUVVGQk96czdPMEZCUTBFN096czdPenM3T3pzN096czdPenRCUVV0QkxFbEJRVTBzWlVGQlpTeFZRVUZETEUxQlFVUTdWMEZCV1N4UFFVRlBMRWxCUVZBc1EwRkJXU3hqUVVGYUxFTkJRVEpDTEU5QlFVOHNSVUZCVUN4RlFVRlhMRTFCUVhSRE8wTkJRVm83UVVGRGNrSXNTVUZCVFN4alFVRmpMRlZCUVVNc1RVRkJSRHRYUVVGWkxFOUJRVThzU1VGQlVDeERRVUZaTEdkQ1FVRmFMRU5CUVRaQ0xFOUJRVThzUlVGQlVEdERRVUY2UXp0QlFVTndRaXhKUVVGTkxHRkJRV0VzVlVGQlF5eEpRVUZFTzFkQlFWYzdRVUZETVVJc2EwSkJSREJDTzBGQlJURkNMRzlDUVVGWkxFbEJRVm83UVVGRFFTeHZRa0ZCV1N4WlFVRmFPMEZCUTBFc2MwSkJRV01zVjBGQlpEczdRMEZLWlRzN1NVRlBZanM3TzBGQlEwWXNZVUZFUlN4SlFVTkdMRU5CUVZrc1MwRkJXaXhGUVVGdFFqczRRa0ZFYWtJc1RVRkRhVUk3TzNGRVFVTm1MRzFDUVVGTkxFdEJRVTRzUjBGRVpUczdRVUZGWml4alFVRkxMR0ZCUVV3c1IwRkJjVUlzUlVGQmNrSXNRMEZHWlR0QlFVZG1MR05CUVVzc1owSkJRVXdzUjBGQmQwSXNRMEZCZUVJc1EwRklaVHM3UzBGQmJrSTdPMEZCUkVVc2JVSkJUMFlzYlVKQlFVa3NUMEZCVHp0QlFVTlFMREJDUVVGTkxFZEJRVTRzV1VGQlZTeExRVUZXTEVWQlJFODdPMEZCUjFBc1lVRkJTeXhKUVVGTUxFZEJTRTg3TzBGQlMxQXNaVUZCVHl4SlFVRlFMRU5CVEU4N096czdPenM3TzBGQlVGUXNiVUpCYTBKR0xESkNRVUZSTEZGQlFWRTdRVUZEV2l4WlFVRk5MR3RDUVVGclFpeFBRVUZQTEU5QlFWQXNSVUZCYkVJc1EwRkVUVHRCUVVWYUxGbEJRVWtzV1VGQldTeEZRVUZhTEVOQlJsRTdRVUZIV2l4WlFVRkpMR1ZCUVdVc1MwRkJaanM3TzBGQlNGRXNZVUZOVUN4SlFVRkpMRWRCUVVvc1NVRkJWeXhuUWtGQlowSXNUVUZCYUVJc1JVRkJkMEk3UVVGRGNFTXNaMEpCUVVrc1owSkJRV2RDTEUxQlFXaENMRU5CUVhWQ0xHTkJRWFpDTEVOQlFYTkRMRWRCUVhSRExFdEJRVGhETEVOQlFVTXNTMEZCU3l4TlFVRk1MRU5CUVZrc1kwRkJXaXhEUVVFeVFpeEhRVUV6UWl4RFFVRkVMRVZCUVd0RE8wRkJRMmhHTERCQ1FVRlZMRWRCUVZZc1NVRkJhVUlzUlVGQmFrSXNRMEZFWjBZN1FVRkZhRVlzSzBKQlFXVXNTVUZCWml4RFFVWm5SanRoUVVGd1JqdFRRVVJLT3p0QlFVOUJMRmxCUVVrc1dVRkJTaXhGUVVGclFqdEJRVU5rTEdsQ1FVRkxMRWRCUVV3c1EwRkJVeXhGUVVGRkxGRkJRVkVzVTBGQlVpeEZRVUZZTEVWQlJHTTdVMEZCYkVJN08wRkJTVUVzZDBKQlFXZENMRkZCUVdoQ0xFZEJRVEpDTEU5QlFVOHNSVUZCVUN4RFFXcENaanM3UVVGdFFsb3NaVUZCVHl4blFrRkJaMElzUjBGQmFFSXNRMEZCYjBJc1YwRkJWeXhKUVVGWUxFVkJRV2xDTEdWQlFXcENMRU5CUVhCQ0xFTkJRVkFzUTBGdVFsazdPenM3T3pzN096czdRVUZzUW1Rc2JVSkJLME5HTEhsQ1FVRlJPMEZCUTBvc01FSkJRVTBzUzBGQlRpeFpRVVJKT3p0QlFVZEtMR0ZCUVVzc1NVRkJTU3hIUVVGS0xFbEJRVmNzUzBGQlN5eGhRVUZNTEVWQlFXOUNPMEZCUTJoRExHZENRVUZKTEV0QlFVc3NZVUZCVEN4RFFVRnRRaXhqUVVGdVFpeERRVUZyUXl4SFFVRnNReXhEUVVGS0xFVkJRVFJETzBGQlEzaERMRzlDUVVGTkxGTkJRVk1zUzBGQlN5eGhRVUZNTEVOQlFXMUNMRWRCUVc1Q0xFTkJRVlFzUTBGRWEwTTdRVUZGZUVNc2IwSkJRVWtzUTBGQlF5eFBRVUZQTEZGQlFWQXNSVUZCYVVJN1FVRkRiRUlzTWtKQlFVOHNTMEZCVUN4SFFVUnJRanRwUWtGQmRFSTdZVUZHU2p0VFFVUktPenRCUVZOQkxHVkJRVThzU1VGQlVDeERRVnBKT3pzN1FVRXZRMDRzYlVKQk9FUkdMSFZDUVVGUE8wRkJRMGdzTUVKQlFVMHNTVUZCVGl4WlFVUkhPenRCUVVkSUxHRkJRVXNzU1VGQlNTeEhRVUZLTEVsQlFWY3NTMEZCU3l4aFFVRk1MRVZCUVc5Q08wRkJRMmhETEdkQ1FVRkpMRXRCUVVzc1lVRkJUQ3hEUVVGdFFpeGpRVUZ1UWl4RFFVRnJReXhIUVVGc1F5eERRVUZLTEVWQlFUUkRPMEZCUTNoRExIRkNRVUZMTEdGQlFVd3NRMEZCYlVJc1IwRkJia0lzUlVGQmQwSXNTVUZCZUVJc1IwRkVkME03WVVGQk5VTTdVMEZFU2pzN1FVRk5RU3hsUVVGUExFbEJRVkFzUTBGVVJ6czdPMEZCT1VSTUxHMUNRVEJGUml4cFEwRkJWeXhQUVVGUExGbEJRVmtzVTBGQlV6dEJRVU51UXl4aFFVRkxMRWxCUVVrc1NVRkJTU3hEUVVGS0xFVkJRVThzU1VGQlNTeExRVUZMTEZsQlFVd3NSVUZCYlVJc1IwRkJka01zUlVGQk5FTTdRVUZEZUVNc1owSkJRVTBzVFVGQlRTeExRVUZMTEZOQlFVd3NRMEZCWlN4RFFVRm1MRU5CUVU0c1EwRkVhME03UVVGRmVFTXNaMEpCUVUwc1VVRkJVU3hMUVVGTExFMUJRVXdzUTBGQldTeEhRVUZhTEVOQlFWSXNRMEZHYTBNN1FVRkhlRU1zWjBKQlFVMHNVMEZCVXl4TlFVRk5MRlZCUVU0c1IwRkJiVUlzUzBGQlN5eGhRVUZNTEVOQlFXMUNMRTFCUVUwc1QwRkJUaXhEUVVGakxFTkJRV1FzUTBGQmJrSXNRMEZCYmtJc1IwRkJNRVFzUzBGQk1VUXNRMEZJZVVJN1FVRkplRU1zWjBKQlFVa3NZVUZCWVN4TlFVRk5MRlZCUVU0c1IwRkJiVUlzVDBGQlR5eE5RVUZRTEVOQlFXTXNSMEZCWkN4RlFVRnRRaXhQUVVGdVFpeEhRVUUyUWl4TlFVRk5MRTlCUVU0N096czdPenM3UVVGS2VrSXNaMEpCVjNCRExFMUJRVTBzVlVGQlRpeEZRVUZyUWp0QlFVTnNRaXcyUWtGQllTeE5RVUZOTEZWQlFVNHNSVUZCWWl4RFFVUnJRanRoUVVGMFFqczdRVUZKUVN4clFrRkJUU3hQUVVGT0xFZEJRV2RDTEZWQlFXaENMRU5CWm5kRE8xTkJRVFZET3p0QlFXdENRU3hsUVVGUExHdENRVUZOTEZWQlFVNHNXVUZCYVVJc1MwRkJha0lzUlVGQmQwSXNWVUZCZUVJc1JVRkJiME1zVDBGQmNFTXNRMEZCVUN4RFFXNUNiVU03T3pzN096czdPenM3UVVFeFJYSkRMRzFDUVhOSFJpeDVRMEZCWlN4SlFVRkpMRkZCUVZFN1FVRkRka0lzWVVGQlN5eGhRVUZNTEVOQlFXMUNMRVZCUVc1Q0xFbEJRWGxDTEUxQlFYcENMRU5CUkhWQ08wRkJSWFpDTEdGQlFVc3NaMEpCUVV3c1IwRkdkVUk3TzBGQlNYWkNMR0ZCUVVzc1NVRkJTU3hKUVVGSkxFTkJRVW9zUlVGQlR5eEpRVUZKTEU5QlFVOHNXVUZCVUN4RlFVRnhRaXhIUVVGNlF5eEZRVUU0UXp0QlFVTXhReXhuUWtGQlRTeE5RVUZOTEU5QlFVOHNVMEZCVUN4RFFVRnBRaXhEUVVGcVFpeERRVUZPTEVOQlJHOURPMEZCUlRGRExHZENRVUZOTEdOQlFXTXNUMEZCVHl4TlFVRlFMRU5CUVdNc1IwRkJaQ3hEUVVGa0xFTkJSbTlETzBGQlJ6RkRMR2RDUVVGTkxGRkJRVkVzUzBGQlN5eE5RVUZNTEVOQlFWa3NSMEZCV2l4RFFVRlNPenM3UVVGSWIwTXNaMEpCVFhSRExFOUJRVThzUzBGQlVDeEpRVUZuUWl4TlFVRk5MRlZCUVU0c1NVRkJiMElzUTBGQlF5eE5RVUZOTEZWQlFVNHNTVUZCY1VJc1RVRkJUU3hQUVVGT0xFTkJRV01zUTBGQlpDeEZRVUZwUWl4VFFVRnFRaXhMUVVFclFpeFBRVUZQTEZOQlFWQXNSVUZCYlVJN1FVRkROVWNzYzBKQlFVMHNWVUZCVGl4SFFVRnRRaXhyUTBGQmJVSXNTMEZCU3l4aFFVRk1MRU5CUVcxQ0xFMUJRVTBzVDBGQlRpeERRVUZqTEVOQlFXUXNRMEZCYmtJc1EwRkJia0lzUlVGQmVVUXNUVUZCZWtRc1JVRkJhVVVzUzBGQmFrVXNSVUZCZDBVc1IwRkJlRVVzUTBGQmJrSXNRMEZFTkVjN1lVRkJhRWdzVFVGRlR5eEpRVUZKTEVOQlFVTXNUMEZCVHl4WFFVRlFMRVZCUVc5Q08wRkJRelZDTEhOQ1FVRk5MRlZCUVU0c1IwRkJiVUlzVTBGQmJrSTdPMEZCUkRSQ0xHOUNRVWQ0UWl4WlFVRlpMRkZCUVZvc1MwRkJlVUlzUTBGQmVrSXNSVUZCTkVJN1FVRkROVUlzWjBOQlFWa3NVVUZCV2l4SFFVRjFRaXhOUVVGTkxGRkJRVTRzUTBGRVN6dHBRa0ZCYUVNN08wRkJTVUVzYjBKQlFVa3NXVUZCV1N4SlFVRmFMRXRCUVhGQ0xGTkJRWEpDTEVWQlFXZERPMEZCUTJ4RExHZERRVUZaTEVsQlFWb3NSMEZCYlVJc1dVRkJXU3hQUVVGYUxFZEJRWE5DTEUxQlFVMHNUMEZCVGl4RFFVUlFPMmxDUVVGd1F6dGhRVkJIT3p0QlFWbFFMR3RDUVVGTkxFOUJRVTRzUjBGQlowSXNRMEZCUXl4RlFVRkVMRU5CUVdoQ0xFTkJjRUl3UXp0QlFYRkNNVU1zYTBKQlFVMHNWVUZCVGl4SFFVRnRRaXhOUVVGTkxFOUJRVTRzUTBGQll5eE5RVUZrTEVOQmNrSjFRanRUUVVFNVF6czdRVUYzUWtFc1dVRkJTU3hMUVVGTExHZENRVUZNTEVWQlFYVkNPMEZCUTNaQ0xEaENRVUZOTEV0QlFVNHNXVUZFZFVJN1UwRkJNMEk3T3pzN096czdPenRCUVd4SlJpeHRRa0UwU1VZc05rTkJRV2xDTEVsQlFVazdRVUZEYWtJc1dVRkJUU3hUUVVGVExFdEJRVXNzWVVGQlRDeERRVUZ0UWl4RlFVRnVRaXhEUVVGVUxFTkJSRmM3TzBGQlIycENMRmxCUVVrc1RVRkJTaXhGUVVGWk8wRkJRMUlzYVVKQlFVc3NTVUZCU1N4SlFVRkpMRU5CUVVvc1JVRkJUeXhKUVVGSkxFOUJRVThzV1VGQlVDeEZRVUZ4UWl4SFFVRjZReXhGUVVFNFF6dEJRVU14UXl4dlFrRkJUU3hOUVVGTkxFOUJRVThzVTBGQlVDeERRVUZwUWl4RFFVRnFRaXhEUVVGT0xFTkJSRzlETzBGQlJURkRMRzlDUVVGTkxGRkJRVkVzUzBGQlN5eE5RVUZNTEVOQlFWa3NSMEZCV2l4RFFVRlNMRU5CUm05RE8wRkJSekZETEc5Q1FVRk5MR05CUVdNc1RVRkJUU3hQUVVGT0xFTkJRV01zVDBGQlpDeERRVUZ6UWl4RlFVRjBRaXhEUVVGa0xFTkJTRzlET3p0QlFVc3hReXh2UWtGQlNTeG5Ra0ZCWjBJc1EwRkJReXhEUVVGRUxFVkJRVWs3UVVGRGNFSXNNRUpCUVUwc1QwRkJUaXhEUVVGakxFMUJRV1FzUTBGQmNVSXNWMEZCY2tJc1JVRkJhME1zUTBGQmJFTXNSVUZFYjBJN1FVRkZjRUlzTUVKQlFVMHNWVUZCVGl4SFFVWnZRanRwUWtGQmVFSTdZVUZNU2pzN1FVRlhRU3h0UWtGQlR5eExRVUZMTEdGQlFVd3NRMEZCYlVJc1JVRkJia0lzUTBGQlVDeERRVnBSTzBGQllWSXNhVUpCUVVzc1owSkJRVXdzUjBGaVVUdFRRVUZhT3p0QlFXZENRU3haUVVGSkxFTkJRVU1zUzBGQlN5eG5Ra0ZCVEN4SlFVRjVRaXhMUVVGTExGRkJRVXdzUlVGQlpUdEJRVU42UXl3NFFrRkJUU3hKUVVGT0xGbEJSSGxETzFOQlFUZERPenM3VjBFdlNrWTdPenRCUVhGTFRpeExRVUZMTEZOQlFVd3NRMEZCWlN4WlFVRm1MRWRCUVRoQ0xHbENRVUZQTEd0Q1FVRlFMRU5CUVRCQ08wRkJRM0JFTEdGQlFWTXNSVUZCVkR0QlFVTkJMR2RDUVVGWkxFTkJRVm83UTBGR01FSXNRMEZCT1VJN08ydENRVXRsSWl3aVptbHNaU0k2SWtac2IzY3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFF2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJRUZqZEdsdmJpQm1jbTl0SUNjdUxpOWhZM1JwYjI1ekwwRmpkR2x2YmljN1hHNXBiWEJ2Y25RZ1oyVnVaWEpoZEdWQ2JHVnVaRU4xY25abElHWnliMjBnSnk0dlpteHZkeTluWlc1bGNtRjBaUzFpYkdWdVpDMWpkWEoyWlNjN1hHNWNiaThxWEc0Z0lDQWdUV1YwYUc5a2N5QmhibVFnY0hKdmNHVnlkR2xsY3lCMGJ5QmhaR1FnZEc4Z1ltOTFibVFnUVdOMGFXOXVjMXh1S2k5Y2JtTnZibk4wSUdKdmRXNWtUMjVUZEdGeWRDQTlJQ2hoWTNScGIyNHBJRDArSUdGamRHbHZiaTVtYkc5M0xtRmpkR2wyWVhSbFFXTjBhVzl1S0dGamRHbHZiaTVwWkN3Z1lXTjBhVzl1S1R0Y2JtTnZibk4wSUdKdmRXNWtUMjVUZEc5d0lEMGdLR0ZqZEdsdmJpa2dQVDRnWVdOMGFXOXVMbVpzYjNjdVpHVmhZM1JwZG1GMFpVRmpkR2x2YmloaFkzUnBiMjR1YVdRcE8xeHVZMjl1YzNRZ1ltOTFibVJRY205d2N5QTlJQ2htYkc5M0tTQTlQaUFvZTF4dUlDQWdJR1pzYjNjc1hHNGdJQ0FnYVhOUWNtbHZjbWwwZVRvZ2RISjFaU3hjYmlBZ0lDQnZia0ZqZEdsMllYUmxPaUJpYjNWdVpFOXVVM1JoY25Rc1hHNGdJQ0FnYjI1RVpXRmpkR2wyWVhSbE9pQmliM1Z1WkU5dVUzUnZjRnh1ZlNrN1hHNWNibU5zWVhOeklFWnNiM2NnWlhoMFpXNWtjeUJCWTNScGIyNGdlMXh1SUNBZ0lHTnZibk4wY25WamRHOXlLSEJ5YjNCektTQjdYRzRnSUNBZ0lDQWdJSE4xY0dWeUtIQnliM0J6S1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVoWTNScGRtVkJZM1JwYjI1eklEMGdlMzA3WEc0Z0lDQWdJQ0FnSUhSb2FYTXViblZ0UVdOMGFYWmxRV04wYVc5dWN5QTlJREE3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjMlYwS0hCeWIzQnpLU0I3WEc0Z0lDQWdJQ0FnSUhOMWNHVnlMbk5sZENod2NtOXdjeWs3WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV2Ym1ObEtDazdYRzVjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHlwY2JpQWdJQ0FnSUNBZ1FtbHVaQ0JCWTNScGIyNGdkRzhnUVdOMGIzSmNiaUFnSUNBcUwxeHVJQ0FnSUdOdmJtNWxZM1FvWVdOMGFXOXVLU0I3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJR2x1YUdWeWFYUmxaRUZqZEdsdmJpQTlJR0ZqZEdsdmJpNXBibWhsY21sMEtDazdYRzRnSUNBZ0lDQWdJR3hsZENCdVpYZFdZV3gxWlhNZ1BTQjdmVHRjYmlBZ0lDQWdJQ0FnYkdWMElHaGhjMDVsZDFaaGJIVmxjeUE5SUdaaGJITmxPMXh1WEc0Z0lDQWdJQ0FnSUM4dklFTnlaV0YwWlNCMllXeDFaWE1nYjI0Z1lXTjBiM0lnZEdoaGRDQmtiMjRuZENCbGVHbHpkRnh1SUNBZ0lDQWdJQ0JtYjNJZ0tHeGxkQ0JyWlhrZ2FXNGdhVzVvWlhKcGRHVmtRV04wYVc5dUxuWmhiSFZsY3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHbHVhR1Z5YVhSbFpFRmpkR2x2Ymk1MllXeDFaWE11YUdGelQzZHVVSEp2Y0dWeWRIa29hMlY1S1NBbUppQWhkR2hwY3k1MllXeDFaWE11YUdGelQzZHVVSEp2Y0dWeWRIa29hMlY1S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHNWxkMVpoYkhWbGMxdHJaWGxkSUQwZ2UzMDdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhR0Z6VG1WM1ZtRnNkV1Z6SUQwZ2RISjFaVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUdsbUlDaG9ZWE5PWlhkV1lXeDFaWE1wSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWMyVjBLSHNnZG1Gc2RXVnpPaUJ1WlhkV1lXeDFaWE1nZlNrN1hHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0JwYm1obGNtbDBaV1JCWTNScGIyNHVjR0Z5Wlc1MFNXUWdQU0JoWTNScGIyNHVhV1E3WEc1Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUdsdWFHVnlhWFJsWkVGamRHbHZiaTV6WlhRb1ltOTFibVJRY205d2N5aDBhR2x6TENCcGJtaGxjbWwwWldSQlkzUnBiMjRwS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0F2S2x4dUlDQWdJQ0FnSUNCVGRHRnlkQ0JCWTNSdmNseHVYRzRnSUNBZ0lDQWdJRWxtSUVGamRHbHZiaUJwY3lCd2NtOTJhV1JsWkN3Z1ltbHVaQ0JwZENCMGJ5QjBhR2x6SUVGamRHOXlJR0Z1WkNCemRHRnlkRnh1WEc0Z0lDQWdJQ0FnSUVCd1lYSmhiU0FvYjNCMGFXOXVZV3dwSUZ0QlkzUnBiMjVkWEc0Z0lDQWdLaTljYmlBZ0lDQnpkR0Z5ZENncElIdGNiaUFnSUNBZ0lDQWdjM1Z3WlhJdWMzUmhjblFvS1R0Y2JseHVJQ0FnSUNBZ0lDQm1iM0lnS0d4bGRDQnJaWGtnYVc0Z2RHaHBjeTVoWTNScGRtVkJZM1JwYjI1ektTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9kR2hwY3k1aFkzUnBkbVZCWTNScGIyNXpMbWhoYzA5M2JsQnliM0JsY25SNUtHdGxlU2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0JoWTNScGIyNGdQU0IwYUdsekxtRmpkR2wyWlVGamRHbHZibk5iYTJWNVhUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvSVdGamRHbHZiaTVwYzBGamRHbDJaU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmhZM1JwYjI0dWMzUmhjblFvS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjenRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnpkRzl3S0NrZ2UxeHVJQ0FnSUNBZ0lDQnpkWEJsY2k1emRHOXdLQ2s3WEc1Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2EyVjVJR2x1SUhSb2FYTXVZV04wYVhabFFXTjBhVzl1Y3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIUm9hWE11WVdOMGFYWmxRV04wYVc5dWN5NW9ZWE5QZDI1UWNtOXdaWEowZVNoclpYa3BLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NWhZM1JwZG1WQlkzUnBiMjV6VzJ0bGVWMHVjM1J2Y0NncE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lDQWdmVnh1WEc0Z0lDQWdkMmxzYkZKbGJtUmxjaWhoWTNSdmNpd2dabkpoYldWVGRHRnRjQ3dnWld4aGNITmxaQ2tnZTF4dUlDQWdJQ0FnSUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElIUm9hWE11Ym5WdFZtRnNkV1ZMWlhsek95QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElHdGxlU0E5SUhSb2FYTXVkbUZzZFdWTFpYbHpXMmxkTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2RtRnNkV1VnUFNCMGFHbHpMblpoYkhWbGMxdHJaWGxkTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ1pISnBkbVZ5SUQwZ2RtRnNkV1V1Ym5WdFJISnBkbVZ5Y3lBL0lIUm9hWE11WVdOMGFYWmxRV04wYVc5dWMxdDJZV3gxWlM1a2NtbDJaWEp6V3pCZFhTQTZJR1poYkhObE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnYkdWMElHNWxkME4xY25KbGJuUWdQU0IyWVd4MVpTNXVkVzFFY21sMlpYSnpJRDhnWkhKcGRtVnlMblpoYkhWbGMxdHJaWGxkTG1OMWNuSmxiblFnT2lCMllXeDFaUzVqZFhKeVpXNTBPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZLaXBjYmlBZ0lDQWdJQ0FnSUNBZ0lDQXFJRlJQUkU4NklISmxjR3hoWTJVZ2QybDBhQ0JpYkdWdVpDQjBjbVZsSUhKbGMyOXNkbVZ5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdLaUJCWkdScGRHbDJaU0J0YjNScGIyNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBcUlFSmxlbWxsY2lCMGQyVmxiaUJpYkdWdVpGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNvdlhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RtRnNkV1V1WW14bGJtUkRkWEoyWlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHNWxkME4xY25KbGJuUWdQU0IyWVd4MVpTNWliR1Z1WkVOMWNuWmxLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmhiSFZsTG1OMWNuSmxiblFnUFNCdVpYZERkWEp5Wlc1ME8xeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSE4xY0dWeUxuZHBiR3hTWlc1a1pYSW9ZV04wYjNJc0lHWnlZVzFsVTNSaGJYQXNJR1ZzWVhCelpXUXBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lDOHFYRzRnSUNBZ0lDQWdJRUZrWkNCaFkzUnBkbVVnWVdOMGFXOXVjMXh1WEc0Z0lDQWdJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVnh1SUNBZ0lDQWdJQ0JBY0dGeVlXMGdXMEZqZEdsdmJsMWNiaUFnSUNBcUwxeHVJQ0FnSUdGamRHbDJZWFJsUVdOMGFXOXVLR2xrTENCaFkzUnBiMjRwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVoWTNScGRtVkJZM1JwYjI1elcybGtYU0E5SUdGamRHbHZianRjYmlBZ0lDQWdJQ0FnZEdocGN5NXVkVzFCWTNScGRtVkJZM1JwYjI1ekt5czdYRzVjYmlBZ0lDQWdJQ0FnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCaFkzUnBiMjR1Ym5WdFZtRnNkV1ZMWlhsek95QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElHdGxlU0E5SUdGamRHbHZiaTUyWVd4MVpVdGxlWE5iYVYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQmhZM1JwYjI1V1lXeDFaU0E5SUdGamRHbHZiaTUyWVd4MVpYTmJhMlY1WFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElIWmhiSFZsSUQwZ2RHaHBjeTUyWVd4MVpYTmJhMlY1WFR0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1NXWWdkMlVuY21VZ1lteGxibVJwYm1jZ2RHaHBjeUJoWTNScGIyNHNJR0Z1WkNCMGFHVnlaU2R6SUc5dUlHRnNjbVZoWkhrZ2FXNGdjSEp2WjNKbGMzTmNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaGhZM1JwYjI0dVlteGxibVFnSmlZZ2RtRnNkV1V1Ym5WdFJISnBkbVZ5Y3lBbUppQWhkbUZzZFdVdVlteGxibVJEZFhKMlpTQW1KaUFvZG1Gc2RXVXVaSEpwZG1WeWMxc3dYUzV3Y205MGIzUjVjR1VnUFQwOUlHRmpkR2x2Ymk1d2NtOTBiM1I1Y0dVcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZzZFdVdVlteGxibVJEZFhKMlpTQTlJR2RsYm1WeVlYUmxRbXhsYm1SRGRYSjJaU2gwYUdsekxtRmpkR2wyWlVGamRHbHZibk5iZG1Gc2RXVXVaSEpwZG1WeWMxc3dYVjBzSUdGamRHbHZiaXdnZG1Gc2RXVXNJR3RsZVNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5SUdWc2MyVWdhV1lnS0NGaFkzUnBiMjR1YVhOVFkzSjFZbUpwYm1jcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZV3gxWlM1aWJHVnVaRU4xY25abElEMGdkVzVrWldacGJtVmtPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzh2SUZCaGMzTWdRV04wYjNJZ2RtRnNkV1VnY0hKdmNHVnlkR2xsY3lCMGJ5QkJZM1JwYjI1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9ZV04wYVc5dVZtRnNkV1V1ZG1Wc2IyTnBkSGtnUFQwOUlEQXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1lXTjBhVzl1Vm1Gc2RXVXVkbVZzYjJOcGRIa2dQU0IyWVd4MVpTNTJaV3h2WTJsMGVUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb1lXTjBhVzl1Vm1Gc2RXVXVabkp2YlNBOVBUMGdkVzVrWldacGJtVmtLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCaFkzUnBiMjVXWVd4MVpTNW1jbTl0SUQwZ1lXTjBhVzl1Vm1Gc2RXVXVZM1Z5Y21WdWRDQTlJSFpoYkhWbExtTjFjbkpsYm5RN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0IyWVd4MVpTNWtjbWwyWlhKeklEMGdXMmxrWFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFpoYkhWbExtNTFiVVJ5YVhabGNuTWdQU0IyWVd4MVpTNWtjbWwyWlhKekxteGxibWQwYUR0Y2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbTUxYlVGamRHbDJaVUZqZEdsdmJuTXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lITjFjR1Z5TG5OMFlYSjBLQ2s3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0F2S2x4dUlDQWdJQ0FnSUNCU1pXMXZkbVVnWVdOMGFYWmxJR0ZqZEdsdmJuTmNibHh1SUNBZ0lDQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMWNiaUFnSUNBcUwxeHVJQ0FnSUdSbFlXTjBhWFpoZEdWQlkzUnBiMjRvYVdRcElIdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ1lXTjBhVzl1SUQwZ2RHaHBjeTVoWTNScGRtVkJZM1JwYjI1elcybGtYVHRjYmx4dUlDQWdJQ0FnSUNCcFppQW9ZV04wYVc5dUtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElHRmpkR2x2Ymk1dWRXMVdZV3gxWlV0bGVYTTdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUd0bGVTQTlJR0ZqZEdsdmJpNTJZV3gxWlV0bGVYTmJhVjA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdkbUZzZFdVZ1BTQjBhR2x6TG5aaGJIVmxjMXRyWlhsZE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUdSeWFYWmxja2x1WkdWNElEMGdkbUZzZFdVdVpISnBkbVZ5Y3k1cGJtUmxlRTltS0dsa0tUdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoa2NtbDJaWEpKYm1SbGVDQWhQVDBnTFRFcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVXVaSEpwZG1WeWN5NXpjR3hwWTJVb1pISnBkbVZ5U1c1a1pYZ3NJREVwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZV3gxWlM1dWRXMUVjbWwyWlhKekxTMDdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNCa1pXeGxkR1VnZEdocGN5NWhZM1JwZG1WQlkzUnBiMjV6VzJsa1hUdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXViblZ0UVdOMGFYWmxRV04wYVc5dWN5MHRPMXh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ2FXWWdLQ0YwYUdsekxtNTFiVUZqZEdsMlpVRmpkR2x2Ym5NZ0ppWWdkR2hwY3k1cGMwRmpkR2wyWlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYzNWd1pYSXVjM1J2Y0NncE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVmVnh1WEc1R2JHOTNMbkJ5YjNSdmRIbHdaUzVrWldaaGRXeDBWbUZzZFdVZ1BTQkJZM1JwYjI0dVpYaDBaVzVrUkdWbVlYVnNkRlpoYkhWbEtIdGNiaUFnSUNCa2NtbDJaWEp6T2lCYlhTeGNiaUFnSUNCdWRXMUVjbWwyWlhKek9pQXdYRzU5S1R0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1JteHZkenRjYmlKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvRmxvdy5qc1xuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuc2V0R2xvYmFsRGlsYXRpb24gPSB1bmRlZmluZWQ7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxudmFyIE1BWF9FTEFQU0VEID0gMzM7XG5cbnZhciBjdXJyZW50ID0gMDtcbnZhciBlbGFwc2VkID0gMTYuNztcbnZhciBkaWxhdGlvbiA9IDE7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChmcmFtZXN0YW1wKSB7XG4gICAgICAgIGVsYXBzZWQgPSBNYXRoLm1heChNYXRoLm1pbihmcmFtZXN0YW1wIC0gY3VycmVudCwgTUFYX0VMQVBTRUQpLCAxKSAqIGRpbGF0aW9uO1xuICAgICAgICBjdXJyZW50ID0gZnJhbWVzdGFtcDtcbiAgICB9LFxuXG4gICAgc3RhcnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnQgPSAoMCwgX3V0aWxzLmN1cnJlbnRUaW1lKSgpO1xuICAgIH0sXG5cbiAgICBnZXRFbGFwc2VkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBlbGFwc2VkO1xuICAgIH1cbn07XG52YXIgc2V0R2xvYmFsRGlsYXRpb24gPSBleHBvcnRzLnNldEdsb2JhbERpbGF0aW9uID0gZnVuY3Rpb24gKG5ld0RpbGF0aW9uKSB7XG4gICAgcmV0dXJuIGRpbGF0aW9uID0gbmV3RGlsYXRpb247XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkwWVhOckwzUnBiV1Z5TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPMEZCUVVFN08wRkJSVUVzU1VGQlRTeGpRVUZqTEVWQlFXUTdPMEZCUlU0c1NVRkJTU3hWUVVGVkxFTkJRVlk3UVVGRFNpeEpRVUZKTEZWQlFWVXNTVUZCVmp0QlFVTktMRWxCUVVrc1YwRkJWeXhEUVVGWU96dHJRa0ZGVnp0QlFVTllMRmxCUVZFc1ZVRkJReXhWUVVGRUxFVkJRV2RDTzBGQlEzQkNMR3RDUVVGVkxFdEJRVXNzUjBGQlRDeERRVUZUTEV0QlFVc3NSMEZCVEN4RFFVRlRMR0ZCUVdFc1QwRkJZaXhGUVVGelFpeFhRVUV2UWl4RFFVRlVMRVZCUVhORUxFTkJRWFJFTEVsQlFUSkVMRkZCUVRORUxFTkJSRlU3UVVGRmNFSXNhMEpCUVZVc1ZVRkJWaXhEUVVadlFqdExRVUZvUWpzN1FVRkxVaXhYUVVGUE8yVkJRVTBzVlVGQlZTeDVRa0ZCVmp0TFFVRk9PenRCUVVWUUxHZENRVUZaTzJWQlFVMDdTMEZCVGpzN1FVRkhWQ3hKUVVGTkxHZEVRVUZ2UWl4VlFVRkRMRmRCUVVRN1YwRkJhVUlzVjBGQlZ5eFhRVUZZTzBOQlFXcENJaXdpWm1sc1pTSTZJblJwYldWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQjdJR04xY25KbGJuUlVhVzFsSUgwZ1puSnZiU0FuTGk0dmFXNWpMM1YwYVd4ekp6dGNibHh1WTI5dWMzUWdUVUZZWDBWTVFWQlRSVVFnUFNBek16dGNibHh1YkdWMElHTjFjbkpsYm5RZ1BTQXdPMXh1YkdWMElHVnNZWEJ6WldRZ1BTQXhOaTQzTzF4dWJHVjBJR1JwYkdGMGFXOXVJRDBnTVR0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2UxeHVJQ0FnSUhWd1pHRjBaVG9nS0daeVlXMWxjM1JoYlhBcElEMCtJSHRjYmlBZ0lDQWdJQ0FnWld4aGNITmxaQ0E5SUUxaGRHZ3ViV0Y0S0UxaGRHZ3ViV2x1S0daeVlXMWxjM1JoYlhBZ0xTQmpkWEp5Wlc1MExDQk5RVmhmUlV4QlVGTkZSQ2tzSURFcElDb2daR2xzWVhScGIyNDdYRzRnSUNBZ0lDQWdJR04xY25KbGJuUWdQU0JtY21GdFpYTjBZVzF3TzF4dUlDQWdJSDBzWEc1Y2JpQWdJQ0J6ZEdGeWREb2dLQ2tnUFQ0Z1kzVnljbVZ1ZENBOUlHTjFjbkpsYm5SVWFXMWxLQ2tzWEc1Y2JpQWdJQ0JuWlhSRmJHRndjMlZrT2lBb0tTQTlQaUJsYkdGd2MyVmtYRzU5TzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnYzJWMFIyeHZZbUZzUkdsc1lYUnBiMjRnUFNBb2JtVjNSR2xzWVhScGIyNHBJRDArSUdScGJHRjBhVzl1SUQwZ2JtVjNSR2xzWVhScGIyNDdJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy90YXNrL3RpbWVyLmpzXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX0FjdGlvbjIgPSByZXF1aXJlKCcuL0FjdGlvbicpO1xuXG52YXIgX0FjdGlvbjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BY3Rpb24yKTtcblxudmFyIF9wcmVzZXRFYXNpbmcgPSByZXF1aXJlKCcuL2Vhc2luZy9wcmVzZXQtZWFzaW5nJyk7XG5cbnZhciBfcHJlc2V0RWFzaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ByZXNldEVhc2luZyk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgQ09VTlQgPSAnQ291bnQnO1xudmFyIE5FWFRfU1RFUFMgPSB7XG4gICAgbG9vcDogJ3Jlc3RhcnQnLFxuICAgIHlveW86ICdyZXZlcnNlJyxcbiAgICBmbGlwOiAnZmxpcFZhbHVlcydcbn07XG5cbnZhciBUd2VlbiA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gICAgX2luaGVyaXRzKFR3ZWVuLCBfQWN0aW9uKTtcblxuICAgIGZ1bmN0aW9uIFR3ZWVuKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHdlZW4pO1xuXG4gICAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgIFR3ZWVuLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmVsYXBzZWQgPSAwO1xuICAgICAgICB0aGlzLmZsaXBDb3VudCA9IHRoaXMueW95b0NvdW50ID0gdGhpcy5sb29wQ291bnQgPSAwO1xuICAgICAgICB0aGlzLmlzU2NydWJiaW5nID0gZmFsc2U7XG5cbiAgICAgICAgLy8gU2V0IGRlZmF1bHQgYGZyb21gIGlmIG5vbmUgc2V0XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMudmFsdWVLZXlzW2ldO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcbiAgICAgICAgICAgIGlmICh2YWx1ZS5mcm9tID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS5mcm9tID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBfQWN0aW9uLnByb3RvdHlwZS5zdGFydC5jYWxsKHRoaXMpO1xuICAgIH07XG5cbiAgICBUd2Vlbi5wcm90b3R5cGUub25VcGRhdGUgPSBmdW5jdGlvbiBvblVwZGF0ZSh0d2VlbiwgZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgICAgICB2YXIgcHJvZ3Jlc3NUYXJnZXQgPSB0aGlzLnBsYXlEaXJlY3Rpb24gPT09IDEgPyAxIDogMDtcblxuICAgICAgICB0aGlzLmVuZGVkID0gdHJ1ZTtcblxuICAgICAgICBpZiAoIXRoaXMuaXNTY3J1YmJpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuZWxhcHNlZCArPSBlbGFwc2VkICogdGhpcy5kaWxhdGUgKiB0aGlzLnBsYXlEaXJlY3Rpb247XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSB0aGlzLnZhbHVlS2V5c1tpXTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG5cbiAgICAgICAgICAgIHZhciBwcm9ncmVzcyA9ICgwLCBfY2FsYy5yZXN0cmljdCkoKDAsIF9jYWxjLmdldFByb2dyZXNzRnJvbVZhbHVlKSh0aGlzLmVsYXBzZWQgLSB2YWx1ZS5kZWxheSwgMCwgdmFsdWUuZHVyYXRpb24pLCAwLCAxKTtcblxuICAgICAgICAgICAgLy8gTWFyayBUd2VlbiBhcyBOT1QgZW5kZWQgaWYgc3RpbGwgaW4gcHJvZ3Jlc3NcbiAgICAgICAgICAgIGlmIChwcm9ncmVzcyAhPT0gcHJvZ3Jlc3NUYXJnZXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFN0ZXAgcHJvZ3Jlc3MgaWYgd2UncmUgc3RlcHBpbmdcbiAgICAgICAgICAgIGlmICh2YWx1ZS5zdGVwcykge1xuICAgICAgICAgICAgICAgIHByb2dyZXNzID0gKDAsIF9jYWxjLnN0ZXBQcm9ncmVzcykocHJvZ3Jlc3MsIHZhbHVlLnN0ZXBzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRWFzZSBwcm9ncmVzc1xuICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9ICgwLCBfY2FsYy5lYXNlKShwcm9ncmVzcywgdmFsdWUuZnJvbSwgdmFsdWUudG8sIHZhbHVlLmVhc2UpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIFR3ZWVuLnByb3RvdHlwZS5vbkZyYW1lRW5kID0gZnVuY3Rpb24gb25GcmFtZUVuZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZW5kZWQgJiYgIXRoaXMuaXNTY3J1YmJpbmcpIHtcbiAgICAgICAgICAgIHZhciBzdGVwVGFrZW4gPSBmYWxzZTtcblxuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIE5FWFRfU1RFUFMpIHtcbiAgICAgICAgICAgICAgICBpZiAoTkVYVF9TVEVQUy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoMCwgX3V0aWxzLmlzTnVtKSh0aGlzW2tleV0pICYmIHRoaXNba2V5XSA+IHRoaXNba2V5ICsgQ09VTlRdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2tleSArIENPVU5UXSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RlcFRha2VuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbTkVYVF9TVEVQU1trZXldXSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXN0ZXBUYWtlbikge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcGxldGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBUd2Vlbi5wcm90b3R5cGUuZmxpcFZhbHVlcyA9IGZ1bmN0aW9uIGZsaXBWYWx1ZXMoKSB7XG4gICAgICAgIHZhciB2YWx1ZXMgPSB0aGlzLnZhbHVlcztcblxuICAgICAgICB0aGlzLmVsYXBzZWQgPSB0aGlzLmR1cmF0aW9uIC0gdGhpcy5lbGFwc2VkO1xuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiB2YWx1ZXMpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHZhbHVlc1trZXldO1xuICAgICAgICAgICAgICAgIHZhciBfcmVmID0gW3ZhbHVlLmZyb20sIHZhbHVlLnRvXTtcbiAgICAgICAgICAgICAgICB2YWx1ZS50byA9IF9yZWZbMF07XG4gICAgICAgICAgICAgICAgdmFsdWUuZnJvbSA9IF9yZWZbMV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgVHdlZW4ucHJvdG90eXBlLnJldmVyc2UgPSBmdW5jdGlvbiByZXZlcnNlKCkge1xuICAgICAgICB0aGlzLnBsYXlEaXJlY3Rpb24gKj0gLTE7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBUd2Vlbi5wcm90b3R5cGUucmVzdGFydCA9IGZ1bmN0aW9uIHJlc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuZWxhcHNlZCA9IHRoaXMucGxheURpcmVjdGlvbiA9PT0gMSA/IDAgOiB0aGlzLmR1cmF0aW9uO1xuICAgICAgICB0aGlzLnN0YXJ0ZWQgPSAoMCwgX3V0aWxzLmN1cnJlbnRUaW1lKSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgVHdlZW4ucHJvdG90eXBlLnNlZWsgPSBmdW5jdGlvbiBzZWVrKHByb2dyZXNzKSB7XG4gICAgICAgIHRoaXMuc2Vla1RpbWUodGhpcy5kdXJhdGlvbiAqIHByb2dyZXNzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIFR3ZWVuLnByb3RvdHlwZS5zZWVrVGltZSA9IGZ1bmN0aW9uIHNlZWtUaW1lKGVsYXBzZWQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzQWN0aXZlIHx8IHRoaXMuaXNTY3J1YmJpbmcpIHtcbiAgICAgICAgICAgIHRoaXMub25jZSgpO1xuICAgICAgICAgICAgdGhpcy5pc1NjcnViYmluZyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmVsYXBzZWQgPSBlbGFwc2VkO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICByZXR1cm4gVHdlZW47XG59KF9BY3Rpb24zLmRlZmF1bHQpO1xuXG5Ud2Vlbi5wcm90b3R5cGUuZGVmYXVsdFZhbHVlUHJvcCA9ICd0byc7XG5Ud2Vlbi5wcm90b3R5cGUuZGVmYXVsdFZhbHVlID0gX0FjdGlvbjMuZGVmYXVsdC5leHRlbmREZWZhdWx0VmFsdWUoe1xuICAgIGRlbGF5OiAwLFxuICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgZWFzZTogX3ByZXNldEVhc2luZzIuZGVmYXVsdC5lYXNlT3V0LFxuICAgIGVsYXBzZWQ6IDAsXG4gICAgc3RlcHM6IDAsXG4gICAgdG86IDAsXG4gICAgcm91bmQ6IGZhbHNlXG59KTtcblR3ZWVuLnByb3RvdHlwZS5kZWZhdWx0UHJvcHMgPSBfQWN0aW9uMy5kZWZhdWx0LmV4dGVuZERlZmF1bHRQcm9wcyh7XG4gICAgYmxlbmQ6IGZhbHNlLFxuICAgIGRpbGF0ZTogMSxcbiAgICBsb29wOiAwLFxuICAgIHlveW86IDAsXG4gICAgZmxpcDogMCxcbiAgICBsb29wQ291bnQ6IDAsXG4gICAgeW95b0NvdW50OiAwLFxuICAgIGZsaXBDb3VudDogMCxcbiAgICBwbGF5RGlyZWN0aW9uOiAxLFxuICAgIGlzU2NydWJiaW5nOiBmYWxzZSxcbiAgICBlbmRlZDogZmFsc2UsXG4gICAgZWxhcHNlZDogMFxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFR3ZWVuO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMVIzWldWdUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3UVVGQlFUczdPenRCUVVOQk96czdPMEZCUTBFN08wRkJRMEU3T3pzN096czdPenM3UVVGRlFTeEpRVUZOTEZGQlFWRXNUMEZCVWp0QlFVTk9MRWxCUVUwc1lVRkJZVHRCUVVObUxGVkJRVTBzVTBGQlRqdEJRVU5CTEZWQlFVMHNVMEZCVGp0QlFVTkJMRlZCUVUwc1dVRkJUanREUVVoRk96dEpRVTFCT3pzN096czdPenM3YjBKQlEwWXNlVUpCUVZFN1FVRkRTaXhoUVVGTExFOUJRVXdzUjBGQlpTeERRVUZtTEVOQlJFazdRVUZGU2l4aFFVRkxMRk5CUVV3c1IwRkJhVUlzUzBGQlN5eFRRVUZNTEVkQlFXbENMRXRCUVVzc1UwRkJUQ3hIUVVGcFFpeERRVUZxUWl4RFFVWTVRanRCUVVkS0xHRkJRVXNzVjBGQlRDeEhRVUZ0UWl4TFFVRnVRanM3TzBGQlNFa3NZVUZOUXl4SlFVRkpMRWxCUVVrc1EwRkJTaXhGUVVGUExFbEJRVWtzUzBGQlN5eFpRVUZNTEVWQlFXMUNMRWRCUVhaRExFVkJRVFJETzBGQlEzaERMR2RDUVVGTkxFMUJRVTBzUzBGQlN5eFRRVUZNTEVOQlFXVXNRMEZCWml4RFFVRk9MRU5CUkd0RE8wRkJSWGhETEdkQ1FVRk5MRkZCUVZFc1MwRkJTeXhOUVVGTUxFTkJRVmtzUjBGQldpeERRVUZTTEVOQlJtdERPMEZCUjNoRExHZENRVUZKTEUxQlFVMHNTVUZCVGl4TFFVRmxMRk5CUVdZc1JVRkJNRUk3UVVGRE5VSXNjMEpCUVUwc1NVRkJUaXhIUVVGaExFTkJRV0lzUTBGRU5FSTdZVUZCT1VJN1UwRklTanM3UVVGUlFTeGxRVUZQTEd0Q1FVRk5MRXRCUVU0c1YwRkJVQ3hEUVdSSk96czdRVUZFVGl4dlFrRnJRa1lzTmtKQlFWTXNUMEZCVHl4WlFVRlpMRk5CUVZNN1FVRkRha01zV1VGQlRTeHBRa0ZCYVVJc1NVRkJReXhEUVVGTExHRkJRVXdzUzBGQmRVSXNRMEZCZGtJc1IwRkJORUlzUTBGQk4wSXNSMEZCYVVNc1EwRkJha01zUTBGRVZUczdRVUZIYWtNc1lVRkJTeXhMUVVGTUxFZEJRV0VzU1VGQllpeERRVWhwUXpzN1FVRkxha01zV1VGQlNTeERRVUZETEV0QlFVc3NWMEZCVEN4RlFVRnJRanRCUVVOdVFpeHBRa0ZCU3l4UFFVRk1MRWxCUVdkQ0xFOUJRVU1zUjBGQlZTeExRVUZMTEUxQlFVd3NSMEZCWlN4TFFVRkxMR0ZCUVV3c1EwRkVka0k3VTBGQmRrSTdPMEZCU1VFc1lVRkJTeXhKUVVGSkxFbEJRVWtzUTBGQlNpeEZRVUZQTEVsQlFVa3NTMEZCU3l4WlFVRk1MRVZCUVcxQ0xFZEJRWFpETEVWQlFUUkRPMEZCUTNoRExHZENRVUZOTEUxQlFVMHNTMEZCU3l4VFFVRk1MRU5CUVdVc1EwRkJaaXhEUVVGT0xFTkJSR3RETzBGQlJYaERMR2RDUVVGTkxGRkJRVkVzUzBGQlN5eE5RVUZNTEVOQlFWa3NSMEZCV2l4RFFVRlNMRU5CUm10RE96dEJRVWw0UXl4blFrRkJTU3hYUVVGWExHOUNRVUZUTEdkRFFVRnhRaXhMUVVGTExFOUJRVXdzUjBGQlpTeE5RVUZOTEV0QlFVNHNSVUZCWVN4RFFVRnFSQ3hGUVVGdlJDeE5RVUZOTEZGQlFVNHNRMEZCTjBRc1JVRkJPRVVzUTBGQk9VVXNSVUZCYVVZc1EwRkJha1lzUTBGQldEczdPMEZCU205RExHZENRVTl3UXl4aFFVRmhMR05CUVdJc1JVRkJOa0k3UVVGRE4wSXNjVUpCUVVzc1MwRkJUQ3hIUVVGaExFdEJRV0lzUTBGRU5rSTdZVUZCYWtNN096dEJRVkIzUXl4blFrRlpjRU1zVFVGQlRTeExRVUZPTEVWQlFXRTdRVUZEWWl3eVFrRkJWeXgzUWtGQllTeFJRVUZpTEVWQlFYVkNMRTFCUVUwc1MwRkJUaXhEUVVGc1F5eERRVVJoTzJGQlFXcENPenM3UVVGYWQwTXNhVUpCYVVKNFF5eERRVUZOTEU5QlFVNHNSMEZCWjBJc1owSkJRVXNzVVVGQlRDeEZRVUZsTEUxQlFVMHNTVUZCVGl4RlFVRlpMRTFCUVUwc1JVRkJUaXhGUVVGVkxFMUJRVTBzU1VGQlRpeERRVUZ5UkN4RFFXcENkME03VTBGQk5VTTdPenRCUVROQ1JpeHZRa0ZuUkVZc2JVTkJRV0U3UVVGRFZDeFpRVUZKTEV0QlFVc3NTMEZCVEN4SlFVRmpMRU5CUVVNc1MwRkJTeXhYUVVGTUxFVkJRV3RDTzBGQlEycERMR2RDUVVGSkxGbEJRVmtzUzBGQldpeERRVVEyUWpzN1FVRkhha01zYVVKQlFVc3NTVUZCU1N4SFFVRktMRWxCUVZjc1ZVRkJhRUlzUlVGQk5FSTdRVUZEZUVJc2IwSkJRVWtzVjBGQlZ5eGpRVUZZTEVOQlFUQkNMRWRCUVRGQ0xFTkJRVW9zUlVGQmIwTTdRVUZEYUVNc2QwSkJRVWtzYTBKQlFVMHNTMEZCU3l4SFFVRk1MRU5CUVU0c1MwRkJiMElzUzBGQlN5eEhRVUZNTEVsQlFWa3NTMEZCU3l4TlFVRk5MRXRCUVU0c1EwRkJha0lzUlVGQkswSTdRVUZEYmtRc05rSkJRVXNzVFVGQlRTeExRVUZPTEVOQlFVd3NSMEZFYlVRN1FVRkZia1FzYjBOQlFWa3NTVUZCV2l4RFFVWnRSRHRCUVVkdVJDdzJRa0ZCU3l4WFFVRlhMRWRCUVZnc1EwRkJUQ3hKUVVodFJEdHhRa0ZCZGtRN2FVSkJSRW83WVVGRVNqczdRVUZWUVN4blFrRkJTU3hEUVVGRExGTkJRVVFzUlVGQldUdEJRVU5hTEhGQ1FVRkxMRkZCUVV3c1IwRkVXVHRoUVVGb1FqdFRRV0pLT3pzN1FVRnFSRVlzYjBKQmIwVkdMRzFEUVVGaE8wRkJRMVFzV1VGQlRTeFRRVUZUTEV0QlFVc3NUVUZCVEN4RFFVUk9PenRCUVVkVUxHRkJRVXNzVDBGQlRDeEhRVUZsTEV0QlFVc3NVVUZCVEN4SFFVRm5RaXhMUVVGTExFOUJRVXdzUTBGSWRFSTdPMEZCUzFRc1lVRkJTeXhKUVVGSkxFZEJRVW9zU1VGQlZ5eE5RVUZvUWl4RlFVRjNRanRCUVVOd1FpeG5Ra0ZCU1N4UFFVRlBMR05CUVZBc1EwRkJjMElzUjBGQmRFSXNRMEZCU2l4RlFVRm5RenRCUVVNMVFpeHZRa0ZCVFN4UlFVRlJMRTlCUVU4c1IwRkJVQ3hEUVVGU0xFTkJSSE5DT3pKQ1FVVklMRU5CUVVNc1RVRkJUU3hKUVVGT0xFVkJRVmtzVFVGQlRTeEZRVUZPTEVWQlJsWTdRVUZGTTBJc2MwSkJRVTBzUlVGQlRpeFhRVVl5UWp0QlFVVnFRaXh6UWtGQlRTeEpRVUZPTEZkQlJtbENPMkZCUVdoRE8xTkJSRW83TzBGQlQwRXNaVUZCVHl4SlFVRlFMRU5CV2xNN096dEJRWEJGV0N4dlFrRnRSa1lzTmtKQlFWVTdRVUZEVGl4aFFVRkxMR0ZCUVV3c1NVRkJjMElzUTBGQlF5eERRVUZFTEVOQlJHaENPMEZCUlU0c1pVRkJUeXhKUVVGUUxFTkJSazA3T3p0QlFXNUdVaXh2UWtGM1JrWXNOa0pCUVZVN1FVRkRUaXhoUVVGTExFOUJRVXdzUjBGQlpTeEpRVUZETEVOQlFVc3NZVUZCVEN4TFFVRjFRaXhEUVVGMlFpeEhRVUUwUWl4RFFVRTNRaXhIUVVGcFF5eExRVUZMTEZGQlFVd3NRMEZFTVVNN1FVRkZUaXhoUVVGTExFOUJRVXdzUjBGQlpTeDVRa0ZCWml4RFFVWk5PMEZCUjA0c1pVRkJUeXhKUVVGUUxFTkJTRTA3T3p0QlFYaEdVaXh2UWtFNFJrWXNjVUpCUVVzc1ZVRkJWVHRCUVVOWUxHRkJRVXNzVVVGQlRDeERRVUZqTEV0QlFVc3NVVUZCVEN4SFFVRm5RaXhSUVVGb1FpeERRVUZrTEVOQlJGYzdRVUZGV0N4bFFVRlBMRWxCUVZBc1EwRkdWenM3TzBGQk9VWmlMRzlDUVcxSFJpdzJRa0ZCVXl4VFFVRlRPMEZCUTJRc1dVRkJTU3hEUVVGRExFdEJRVXNzVVVGQlRDeEpRVUZwUWl4TFFVRkxMRmRCUVV3c1JVRkJhMEk3UVVGRGNFTXNhVUpCUVVzc1NVRkJUQ3hIUVVSdlF6dEJRVVZ3UXl4cFFrRkJTeXhYUVVGTUxFZEJRVzFDTEVsQlFXNUNMRU5CUm05RE8xTkJRWGhET3p0QlFVdEJMR0ZCUVVzc1QwRkJUQ3hIUVVGbExFOUJRV1lzUTBGT1l6czdRVUZSWkN4bFFVRlBMRWxCUVZBc1EwRlNZenM3TzFkQmJrZG9RanM3TzBGQkswZE9MRTFCUVUwc1UwRkJUaXhEUVVGblFpeG5Ra0ZCYUVJc1IwRkJiVU1zU1VGQmJrTTdRVUZEUVN4TlFVRk5MRk5CUVU0c1EwRkJaMElzV1VGQmFFSXNSMEZCSzBJc2FVSkJRVThzYTBKQlFWQXNRMEZCTUVJN1FVRkRja1FzVjBGQlR5eERRVUZRTzBGQlEwRXNZMEZCVlN4SFFVRldPMEZCUTBFc1ZVRkJUU3gxUWtGQlR5eFBRVUZRTzBGQlEwNHNZVUZCVXl4RFFVRlVPMEZCUTBFc1YwRkJUeXhEUVVGUU8wRkJRMEVzVVVGQlNTeERRVUZLTzBGQlEwRXNWMEZCVHl4TFFVRlFPME5CVURKQ0xFTkJRUzlDTzBGQlUwRXNUVUZCVFN4VFFVRk9MRU5CUVdkQ0xGbEJRV2hDTEVkQlFTdENMR2xDUVVGUExHdENRVUZRTEVOQlFUQkNPMEZCUTNKRUxGZEJRVThzUzBGQlVEdEJRVU5CTEZsQlFWRXNRMEZCVWp0QlFVTkJMRlZCUVUwc1EwRkJUanRCUVVOQkxGVkJRVTBzUTBGQlRqdEJRVU5CTEZWQlFVMHNRMEZCVGp0QlFVTkJMR1ZCUVZjc1EwRkJXRHRCUVVOQkxHVkJRVmNzUTBGQldEdEJRVU5CTEdWQlFWY3NRMEZCV0R0QlFVTkJMRzFDUVVGbExFTkJRV1k3UVVGRFFTeHBRa0ZCWVN4TFFVRmlPMEZCUTBFc1YwRkJUeXhMUVVGUU8wRkJRMEVzWVVGQlV5eERRVUZVTzBOQldqSkNMRU5CUVM5Q096dHJRa0ZsWlNJc0ltWnBiR1VpT2lKVWQyVmxiaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnUVdOMGFXOXVJR1p5YjIwZ0p5NHZRV04wYVc5dUp6dGNibWx0Y0c5eWRDQmxZWE5wYm1jZ1puSnZiU0FuTGk5bFlYTnBibWN2Y0hKbGMyVjBMV1ZoYzJsdVp5YzdYRzVwYlhCdmNuUWdleUJqZFhKeVpXNTBWR2x0WlN3Z2FYTk9kVzBnZlNCbWNtOXRJQ2N1TGk5cGJtTXZkWFJwYkhNbk8xeHVhVzF3YjNKMElIc2daV0Z6WlN3Z2NtVnpkSEpwWTNRc0lHZGxkRkJ5YjJkeVpYTnpSbkp2YlZaaGJIVmxMQ0J6ZEdWd1VISnZaM0psYzNNZ2ZTQm1jbTl0SUNjdUxpOXBibU12WTJGc1l5YzdYRzVjYm1OdmJuTjBJRU5QVlU1VUlEMGdKME52ZFc1MEp6dGNibU52Ym5OMElFNUZXRlJmVTFSRlVGTWdQU0I3WEc0Z0lDQWdiRzl2Y0RvZ0ozSmxjM1JoY25RbkxGeHVJQ0FnSUhsdmVXODZJQ2R5WlhabGNuTmxKeXhjYmlBZ0lDQm1iR2x3T2lBblpteHBjRlpoYkhWbGN5ZGNibjA3WEc1Y2JtTnNZWE56SUZSM1pXVnVJR1Y0ZEdWdVpITWdRV04wYVc5dUlIdGNiaUFnSUNCemRHRnlkQ2dwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVsYkdGd2MyVmtJRDBnTUR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVtYkdsd1EyOTFiblFnUFNCMGFHbHpMbmx2ZVc5RGIzVnVkQ0E5SUhSb2FYTXViRzl2Y0VOdmRXNTBJRDBnTUR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVwYzFOamNuVmlZbWx1WnlBOUlHWmhiSE5sTzF4dVhHNGdJQ0FnSUNBZ0lDOHZJRk5sZENCa1pXWmhkV3gwSUdCbWNtOXRZQ0JwWmlCdWIyNWxJSE5sZEZ4dUlDQWdJQ0FnSUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElIUm9hWE11Ym5WdFZtRnNkV1ZMWlhsek95QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElHdGxlU0E5SUhSb2FYTXVkbUZzZFdWTFpYbHpXMmxkTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2RtRnNkV1VnUFNCMGFHbHpMblpoYkhWbGMxdHJaWGxkTzF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0haaGJIVmxMbVp5YjIwZ1BUMDlJSFZ1WkdWbWFXNWxaQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0IyWVd4MVpTNW1jbTl0SUQwZ01EdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnpkWEJsY2k1emRHRnlkQ2dwTzF4dUlDQWdJSDFjYmx4dUlDQWdJRzl1VlhCa1lYUmxLSFIzWldWdUxDQm1jbUZ0WlZOMFlXMXdMQ0JsYkdGd2MyVmtLU0I3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJSEJ5YjJkeVpYTnpWR0Z5WjJWMElEMGdLSFJvYVhNdWNHeGhlVVJwY21WamRHbHZiaUE5UFQwZ01Ta2dQeUF4SURvZ01EdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxtVnVaR1ZrSUQwZ2RISjFaVHRjYmx4dUlDQWdJQ0FnSUNCcFppQW9JWFJvYVhNdWFYTlRZM0oxWW1KcGJtY3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11Wld4aGNITmxaQ0FyUFNBb1pXeGhjSE5sWkNBcUlIUm9hWE11Wkdsc1lYUmxLU0FxSUhSb2FYTXVjR3hoZVVScGNtVmpkR2x2Ymp0Y2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnZEdocGN5NXVkVzFXWVd4MVpVdGxlWE03SUdrckt5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnYTJWNUlEMGdkR2hwY3k1MllXeDFaVXRsZVhOYmFWMDdYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0IyWVd4MVpTQTlJSFJvYVhNdWRtRnNkV1Z6VzJ0bGVWMDdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lHeGxkQ0J3Y205bmNtVnpjeUE5SUhKbGMzUnlhV04wS0dkbGRGQnliMmR5WlhOelJuSnZiVlpoYkhWbEtIUm9hWE11Wld4aGNITmxaQ0F0SUhaaGJIVmxMbVJsYkdGNUxDQXdMQ0IyWVd4MVpTNWtkWEpoZEdsdmJpa3NJREFzSURFcE8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5Qk5ZWEpySUZSM1pXVnVJR0Z6SUU1UFZDQmxibVJsWkNCcFppQnpkR2xzYkNCcGJpQndjbTluY21WemMxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIQnliMmR5WlhOeklDRTlQU0J3Y205bmNtVnpjMVJoY21kbGRDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVpXNWtaV1FnUFNCbVlXeHpaVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdVM1JsY0NCd2NtOW5jbVZ6Y3lCcFppQjNaU2R5WlNCemRHVndjR2x1WjF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0haaGJIVmxMbk4wWlhCektTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjSEp2WjNKbGMzTWdQU0J6ZEdWd1VISnZaM0psYzNNb2NISnZaM0psYzNNc0lIWmhiSFZsTG5OMFpYQnpLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdSV0Z6WlNCd2NtOW5jbVZ6YzF4dUlDQWdJQ0FnSUNBZ0lDQWdkbUZzZFdVdVkzVnljbVZ1ZENBOUlHVmhjMlVvY0hKdlozSmxjM01zSUhaaGJIVmxMbVp5YjIwc0lIWmhiSFZsTG5SdkxDQjJZV3gxWlM1bFlYTmxLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJRzl1Um5KaGJXVkZibVFvS1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxtVnVaR1ZrSUNZbUlDRjBhR2x6TG1selUyTnlkV0ppYVc1bktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCc1pYUWdjM1JsY0ZSaGEyVnVJRDBnWm1Gc2MyVTdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHdGxlU0JwYmlCT1JWaFVYMU5VUlZCVEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0U1RldGUmZVMVJGVUZNdWFHRnpUM2R1VUhKdmNHVnlkSGtvYTJWNUtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9hWE5PZFcwb2RHaHBjMXRyWlhsZEtTQW1KaUIwYUdselcydGxlVjBnUGlCMGFHbHpXMnRsZVNBcklFTlBWVTVVWFNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjMXRyWlhrZ0t5QkRUMVZPVkYwckt6dGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lITjBaWEJVWVd0bGJpQTlJSFJ5ZFdVN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpXMDVGV0ZSZlUxUkZVRk5iYTJWNVhWMG9LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tDRnpkR1Z3VkdGclpXNHBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtTnZiWEJzWlhSbEtDazdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNCbWJHbHdWbUZzZFdWektDa2dlMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQjJZV3gxWlhNZ1BTQjBhR2x6TG5aaGJIVmxjenRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbVZzWVhCelpXUWdQU0IwYUdsekxtUjFjbUYwYVc5dUlDMGdkR2hwY3k1bGJHRndjMlZrTzF4dVhHNGdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHdGxlU0JwYmlCMllXeDFaWE1wSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMllXeDFaWE11YUdGelQzZHVVSEp2Y0dWeWRIa29hMlY1S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUhaaGJIVmxJRDBnZG1Gc2RXVnpXMnRsZVYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1czWmhiSFZsTG5SdkxDQjJZV3gxWlM1bWNtOXRYU0E5SUZ0MllXeDFaUzVtY205dExDQjJZV3gxWlM1MGIxMDdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3p0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J5WlhabGNuTmxLQ2tnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbkJzWVhsRWFYSmxZM1JwYjI0Z0tqMGdMVEU3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhKbGMzUmhjblFvS1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Wld4aGNITmxaQ0E5SUNoMGFHbHpMbkJzWVhsRWFYSmxZM1JwYjI0Z1BUMDlJREVwSUQ4Z01DQTZJSFJvYVhNdVpIVnlZWFJwYjI0N1hHNGdJQ0FnSUNBZ0lIUm9hWE11YzNSaGNuUmxaQ0E5SUdOMWNuSmxiblJVYVcxbEtDazdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQWdJSDFjYmx4dUlDQWdJSE5sWldzb2NISnZaM0psYzNNcElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1elpXVnJWR2x0WlNoMGFHbHpMbVIxY21GMGFXOXVJQ29nY0hKdlozSmxjM01wTzF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnSUNCOVhHNWNiaUFnSUNCelpXVnJWR2x0WlNobGJHRndjMlZrS1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2doZEdocGN5NXBjMEZqZEdsMlpTQjhmQ0IwYUdsekxtbHpVMk55ZFdKaWFXNW5LU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG05dVkyVW9LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YVhOVFkzSjFZbUpwYm1jZ1BTQjBjblZsTzF4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1bGJHRndjMlZrSUQwZ1pXeGhjSE5sWkR0Y2JseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjenRjYmlBZ0lDQjlYRzU5WEc1Y2JsUjNaV1Z1TG5CeWIzUnZkSGx3WlM1a1pXWmhkV3gwVm1Gc2RXVlFjbTl3SUQwZ0ozUnZKenRjYmxSM1pXVnVMbkJ5YjNSdmRIbHdaUzVrWldaaGRXeDBWbUZzZFdVZ1BTQkJZM1JwYjI0dVpYaDBaVzVrUkdWbVlYVnNkRlpoYkhWbEtIdGNiaUFnSUNCa1pXeGhlVG9nTUN4Y2JpQWdJQ0JrZFhKaGRHbHZiam9nTXpBd0xGeHVJQ0FnSUdWaGMyVTZJR1ZoYzJsdVp5NWxZWE5sVDNWMExGeHVJQ0FnSUdWc1lYQnpaV1E2SURBc1hHNGdJQ0FnYzNSbGNITTZJREFzWEc0Z0lDQWdkRzg2SURBc1hHNGdJQ0FnY205MWJtUTZJR1poYkhObFhHNTlLVHRjYmxSM1pXVnVMbkJ5YjNSdmRIbHdaUzVrWldaaGRXeDBVSEp2Y0hNZ1BTQkJZM1JwYjI0dVpYaDBaVzVrUkdWbVlYVnNkRkJ5YjNCektIdGNiaUFnSUNCaWJHVnVaRG9nWm1Gc2MyVXNYRzRnSUNBZ1pHbHNZWFJsT2lBeExGeHVJQ0FnSUd4dmIzQTZJREFzWEc0Z0lDQWdlVzk1YnpvZ01DeGNiaUFnSUNCbWJHbHdPaUF3TEZ4dUlDQWdJR3h2YjNCRGIzVnVkRG9nTUN4Y2JpQWdJQ0I1YjNsdlEyOTFiblE2SURBc1hHNGdJQ0FnWm14cGNFTnZkVzUwT2lBd0xGeHVJQ0FnSUhCc1lYbEVhWEpsWTNScGIyNDZJREVzWEc0Z0lDQWdhWE5UWTNKMVltSnBibWM2SUdaaGJITmxMRnh1SUNBZ0lHVnVaR1ZrT2lCbVlXeHpaU3hjYmlBZ0lDQmxiR0Z3YzJWa09pQXdYRzU5S1R0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1ZIZGxaVzQ3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvVHdlZW4uanNcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfQWN0aW9uMiA9IHJlcXVpcmUoJy4vQWN0aW9uJyk7XG5cbnZhciBfQWN0aW9uMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0FjdGlvbjIpO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFBoeXNpY3MgPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICAgIF9pbmhlcml0cyhQaHlzaWNzLCBfQWN0aW9uKTtcblxuICAgIGZ1bmN0aW9uIFBoeXNpY3MoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQaHlzaWNzKTtcblxuICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uY2FsbC5hcHBseShfQWN0aW9uLCBbdGhpc10uY29uY2F0KGFyZ3MpKSk7XG5cbiAgICAgICAgX3RoaXMuaW5hY3RpdmVGcmFtZXMgPSAwO1xuICAgICAgICBfdGhpcy5jYWxjdWxhdGVzVmVsb2NpdHkgPSB0cnVlO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgUGh5c2ljcy5wcm90b3R5cGUub25VcGRhdGUgPSBmdW5jdGlvbiBvblVwZGF0ZShwaHlzaWNzLCBmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgICAgIHRoaXMuaGFzQ2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMudmFsdWVLZXlzW2ldO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcbiAgICAgICAgICAgIHZhciBwcmV2aW91c1ZhbHVlID0gdmFsdWUucHJldjtcblxuICAgICAgICAgICAgLy8gQXBwbHkgYWNjZWxlcmF0aW9uXG4gICAgICAgICAgICB2YWx1ZS52ZWxvY2l0eSArPSAoMCwgX2NhbGMuc3BlZWRQZXJGcmFtZSkodmFsdWUuYWNjZWxlcmF0aW9uLCBlbGFwc2VkKTtcblxuICAgICAgICAgICAgLy8gQXBwbHkgZnJpY3Rpb25cbiAgICAgICAgICAgIHZhbHVlLnZlbG9jaXR5ICo9IE1hdGgucG93KDEgLSB2YWx1ZS5mcmljdGlvbiwgZWxhcHNlZCAvIDEwMCk7XG5cbiAgICAgICAgICAgIC8vIEFwcGx5IHNwcmluZ1xuICAgICAgICAgICAgaWYgKHZhbHVlLnNwcmluZyAmJiAoMCwgX3V0aWxzLmlzTnVtKSh2YWx1ZS50bykpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGlzdGFuY2VUb1RhcmdldCA9IHZhbHVlLnRvIC0gdmFsdWUuY3VycmVudDtcbiAgICAgICAgICAgICAgICB2YWx1ZS52ZWxvY2l0eSArPSBkaXN0YW5jZVRvVGFyZ2V0ICogKDAsIF9jYWxjLnNwZWVkUGVyRnJhbWUpKHZhbHVlLnNwcmluZywgZWxhcHNlZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEFwcGx5IGxhdGVzdCB2ZWxvY2l0eVxuICAgICAgICAgICAgdmFsdWUuY3VycmVudCArPSAoMCwgX2NhbGMuc3BlZWRQZXJGcmFtZSkodmFsdWUudmVsb2NpdHksIGVsYXBzZWQpO1xuXG4gICAgICAgICAgICAvLyBEZXRlY3QgYm91bmNlXG4gICAgICAgICAgICBpZiAodmFsdWUubWluICE9PSB1bmRlZmluZWQgJiYgdmFsdWUuY3VycmVudCA8IHZhbHVlLm1pbiB8fCB2YWx1ZS5tYXggIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS5jdXJyZW50ID4gdmFsdWUubWF4KSB7XG4gICAgICAgICAgICAgICAgdmFsdWUudmVsb2NpdHkgKj0gLXZhbHVlLmJvdW5jZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdmFsdWUgaGFzIGNoYW5nZWRcbiAgICAgICAgICAgIGlmICh2YWx1ZS5jdXJyZW50ICE9PSBwcmV2aW91c1ZhbHVlIHx8IE1hdGguYWJzKHZhbHVlLnZlbG9jaXR5KSA+PSB2YWx1ZS5zdG9wU3BlZWQgfHwgdmFsdWUuc3ByaW5nICYmIHZhbHVlLmN1cnJlbnQgIT09IHZhbHVlLnRvKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBQaHlzaWNzLnByb3RvdHlwZS5vbkZyYW1lRW5kID0gZnVuY3Rpb24gb25GcmFtZUVuZCgpIHtcbiAgICAgICAgaWYgKHRoaXMubWF4SW5hY3RpdmVGcmFtZXMgIT09IEluZmluaXR5KSB7XG4gICAgICAgICAgICB0aGlzLmluYWN0aXZlRnJhbWVzID0gdGhpcy5oYXNDaGFuZ2VkID8gMSA6IHRoaXMuaW5hY3RpdmVGcmFtZXMgKyAxO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5pbmFjdGl2ZUZyYW1lcyA+PSB0aGlzLm1heEluYWN0aXZlRnJhbWVzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBQaHlzaWNzO1xufShfQWN0aW9uMy5kZWZhdWx0KTtcblxuUGh5c2ljcy5wcm90b3R5cGUuZGVmYXVsdFZhbHVlUHJvcCA9ICd2ZWxvY2l0eSc7XG5QaHlzaWNzLnByb3RvdHlwZS5kZWZhdWx0VmFsdWUgPSBfQWN0aW9uMy5kZWZhdWx0LmV4dGVuZERlZmF1bHRWYWx1ZSh7XG4gICAgYWNjZWxlcmF0aW9uOiAwLCAvLyBbbnVtYmVyXTogQWNjZWxlcmF0aW9uIHRvIGFwcGx5IHRvIHZhbHVlLCBpbiB1bml0cyBwZXIgc2Vjb25kXG4gICAgYm91bmNlOiAwLCAvLyBbbnVtYmVyXTogRmFjdG9yIHRvIG11bHRpcGx5IHZlbG9jaXR5IGJ5IG9uIGJvdW5jZVxuICAgIHNwcmluZzogMCwgLy8gW251bWJlcl06IFNwcmluZyBzdHJlbmd0aCBkdXJpbmcgJ3N0cmluZydcbiAgICBzdG9wU3BlZWQ6IDAuMDAxLCAvLyBbbnVtYmVyXTogU3RvcCBzaW11bGF0aW9uIHVuZGVyIHRoaXMgc3BlZWRcbiAgICBmcmljdGlvbjogMCAvLyBbbnVtYmVyXTogRnJpY3Rpb24gdG8gYXBwbHkgcGVyIGZyYW1lLCAwLTFcbn0pO1xuUGh5c2ljcy5wcm90b3R5cGUuZGVmYXVsdFByb3BzID0gX0FjdGlvbjMuZGVmYXVsdC5leHRlbmREZWZhdWx0UHJvcHMoe1xuICAgIG1heEluYWN0aXZlRnJhbWVzOiAzXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUGh5c2ljcztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDFCb2VYTnBZM011YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dEJRVUZCT3pzN08wRkJRMEU3TzBGQlEwRTdPenM3T3pzN096czdTVUZGVFRzN08wRkJRMFlzWVVGRVJTeFBRVU5HTEVkQlFYRkNPemhDUVVSdVFpeFRRVU50UWpzN01FTkJRVTQ3TzFOQlFVMDdPM0ZFUVVOcVFpd3dRMEZCVXl4TFFVRlVMRWRCUkdsQ096dEJRVVZxUWl4alFVRkxMR05CUVV3c1IwRkJjMElzUTBGQmRFSXNRMEZHYVVJN1FVRkhha0lzWTBGQlN5eHJRa0ZCVEN4SFFVRXdRaXhKUVVFeFFpeERRVWhwUWpzN1MwRkJja0k3TzBGQlJFVXNjMEpCVDBZc05rSkJRVk1zVTBGQlV5eFpRVUZaTEZOQlFWTTdRVUZEYmtNc1lVRkJTeXhWUVVGTUxFZEJRV3RDTEV0QlFXeENMRU5CUkcxRE96dEJRVWR1UXl4aFFVRkxMRWxCUVVrc1NVRkJTU3hEUVVGS0xFVkJRVThzU1VGQlNTeExRVUZMTEZsQlFVd3NSVUZCYlVJc1IwRkJka01zUlVGQk5FTTdRVUZEZUVNc1owSkJRVTBzVFVGQlRTeExRVUZMTEZOQlFVd3NRMEZCWlN4RFFVRm1MRU5CUVU0c1EwRkVhME03UVVGRmVFTXNaMEpCUVUwc1VVRkJVU3hMUVVGTExFMUJRVXdzUTBGQldTeEhRVUZhTEVOQlFWSXNRMEZHYTBNN1FVRkhlRU1zWjBKQlFVMHNaMEpCUVdkQ0xFMUJRVTBzU1VGQlRqczdPMEZCU0d0Q0xHbENRVTE0UXl4RFFVRk5MRkZCUVU0c1NVRkJhMElzZVVKQlFXTXNUVUZCVFN4WlFVRk9MRVZCUVc5Q0xFOUJRV3hETEVOQlFXeENPenM3UVVGT2QwTXNhVUpCVTNoRExFTkJRVTBzVVVGQlRpeGhRVUZ0UWl4SlFVRkpMRTFCUVUwc1VVRkJUaXhGUVVGdlFpeFZRVUZWTEVkQlFWWXNRMEZCTTBNN096dEJRVlIzUXl4blFrRlpjRU1zVFVGQlRTeE5RVUZPTEVsQlFXZENMR3RDUVVGTkxFMUJRVTBzUlVGQlRpeERRVUYwUWl4RlFVRnBRenRCUVVOcVF5eHZRa0ZCVFN4dFFrRkJiVUlzVFVGQlRTeEZRVUZPTEVkQlFWY3NUVUZCVFN4UFFVRk9MRU5CUkVnN1FVRkZha01zYzBKQlFVMHNVVUZCVGl4SlFVRnJRaXh0UWtGQmJVSXNlVUpCUVdNc1RVRkJUU3hOUVVGT0xFVkJRV01zVDBGQk5VSXNRMEZCYmtJc1EwRkdaVHRoUVVGeVF6czdPMEZCV25kRExHbENRV3RDZUVNc1EwRkJUU3hQUVVGT0xFbEJRV2xDTEhsQ1FVRmpMRTFCUVUwc1VVRkJUaXhGUVVGblFpeFBRVUU1UWl4RFFVRnFRanM3TzBGQmJFSjNReXhuUWtGeFFuQkRMRXRCUVVNc1EwRkJUU3hIUVVGT0xFdEJRV01zVTBGQlpDeEpRVUV5UWl4TlFVRk5MRTlCUVU0c1IwRkJaMElzVFVGQlRTeEhRVUZPTEVsQlFXVXNUVUZCVFN4SFFVRk9MRXRCUVdNc1UwRkJaQ3hKUVVFeVFpeE5RVUZOTEU5QlFVNHNSMEZCWjBJc1RVRkJUU3hIUVVGT0xFVkJRVms3UVVGRGJFZ3NjMEpCUVUwc1VVRkJUaXhKUVVGclFpeERRVUZGTEUxQlFVMHNUVUZCVGl4RFFVUTRSanRoUVVGMFNEczdPMEZCY2tKM1F5eG5Ra0V3UW5CRExFMUJRVTBzVDBGQlRpeExRVUZyUWl4aFFVRnNRaXhKUVVGdFF5eExRVUZMTEVkQlFVd3NRMEZCVXl4TlFVRk5MRkZCUVU0c1EwRkJWQ3hKUVVFMFFpeE5RVUZOTEZOQlFVNHNTVUZCYjBJc1RVRkJUU3hOUVVGT0xFbEJRV2RDTEUxQlFVMHNUMEZCVGl4TFFVRnJRaXhOUVVGTkxFVkJRVTRzUlVGQlZ6dEJRVU5vU1N4eFFrRkJTeXhWUVVGTUxFZEJRV3RDTEVsQlFXeENMRU5CUkdkSk8yRkJRWEJKTzFOQk1VSktPenM3UVVGV1JpeHpRa0V3UTBZc2JVTkJRV0U3UVVGRFZDeFpRVUZKTEV0QlFVc3NhVUpCUVV3c1MwRkJNa0lzVVVGQk0wSXNSVUZCY1VNN1FVRkRja01zYVVKQlFVc3NZMEZCVEN4SFFVRnpRaXhMUVVGTExGVkJRVXdzUjBGQmEwSXNRMEZCYkVJc1IwRkJjMElzUzBGQlN5eGpRVUZNTEVkQlFYTkNMRU5CUVhSQ0xFTkJSRkE3TzBGQlIzSkRMR2RDUVVGSkxFdEJRVXNzWTBGQlRDeEpRVUYxUWl4TFFVRkxMR2xDUVVGTUxFVkJRWGRDTzBGQlF5OURMSEZDUVVGTExGRkJRVXdzUjBGRUswTTdZVUZCYmtRN1UwRklTanM3TzFkQk0wTkdPenM3UVVGeFJFNHNVVUZCVVN4VFFVRlNMRU5CUVd0Q0xHZENRVUZzUWl4SFFVRnhReXhWUVVGeVF6dEJRVU5CTEZGQlFWRXNVMEZCVWl4RFFVRnJRaXhaUVVGc1FpeEhRVUZwUXl4cFFrRkJUeXhyUWtGQlVDeERRVUV3UWp0QlFVTjJSQ3hyUWtGQll5eERRVUZrTzBGQlEwRXNXVUZCVVN4RFFVRlNPMEZCUTBFc1dVRkJVU3hEUVVGU08wRkJRMEVzWlVGQlZ5eExRVUZZTzBGQlEwRXNZMEZCVlN4RFFVRldPMEZCVEhWRUxFTkJRVEZDTEVOQlFXcERPMEZCVDBFc1VVRkJVU3hUUVVGU0xFTkJRV3RDTEZsQlFXeENMRWRCUVdsRExHbENRVUZQTEd0Q1FVRlFMRU5CUVRCQ08wRkJRM1pFTEhWQ1FVRnRRaXhEUVVGdVFqdERRVVEyUWl4RFFVRnFRenM3YTBKQlNXVWlMQ0ptYVd4bElqb2lVR2g1YzJsamN5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdRV04wYVc5dUlHWnliMjBnSnk0dlFXTjBhVzl1Snp0Y2JtbHRjRzl5ZENCN0lITndaV1ZrVUdWeVJuSmhiV1VnZlNCbWNtOXRJQ2N1TGk5cGJtTXZZMkZzWXljN1hHNXBiWEJ2Y25RZ2V5QnBjMDUxYlNCOUlHWnliMjBnSnk0dUwybHVZeTkxZEdsc2N5YzdYRzVjYm1Oc1lYTnpJRkJvZVhOcFkzTWdaWGgwWlc1a2N5QkJZM1JwYjI0Z2UxeHVJQ0FnSUdOdmJuTjBjblZqZEc5eUtDNHVMbUZ5WjNNcElIdGNiaUFnSUNBZ0lDQWdjM1Z3WlhJb0xpNHVZWEpuY3lrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YVc1aFkzUnBkbVZHY21GdFpYTWdQU0F3TzF4dUlDQWdJQ0FnSUNCMGFHbHpMbU5oYkdOMWJHRjBaWE5XWld4dlkybDBlU0E5SUhSeWRXVTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2IyNVZjR1JoZEdVb2NHaDVjMmxqY3l3Z1puSmhiV1ZUZEdGdGNDd2daV3hoY0hObFpDa2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxtaGhjME5vWVc1blpXUWdQU0JtWVd4elpUdGNibHh1SUNBZ0lDQWdJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUhSb2FYTXViblZ0Vm1Gc2RXVkxaWGx6T3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUd0bGVTQTlJSFJvYVhNdWRtRnNkV1ZMWlhselcybGRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnZG1Gc2RXVWdQU0IwYUdsekxuWmhiSFZsYzF0clpYbGRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnY0hKbGRtbHZkWE5XWVd4MVpTQTlJSFpoYkhWbExuQnlaWFk3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUVGd2NHeDVJR0ZqWTJWc1pYSmhkR2x2Ymx4dUlDQWdJQ0FnSUNBZ0lDQWdkbUZzZFdVdWRtVnNiMk5wZEhrZ0t6MGdjM0JsWldSUVpYSkdjbUZ0WlNoMllXeDFaUzVoWTJObGJHVnlZWFJwYjI0c0lHVnNZWEJ6WldRcE8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QkJjSEJzZVNCbWNtbGpkR2x2Ymx4dUlDQWdJQ0FnSUNBZ0lDQWdkbUZzZFdVdWRtVnNiMk5wZEhrZ0tqMGdLREVnTFNCMllXeDFaUzVtY21samRHbHZiaWtnS2lvZ0tHVnNZWEJ6WldRZ0x5QXhNREFwTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCQmNIQnNlU0J6Y0hKcGJtZGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaDJZV3gxWlM1emNISnBibWNnSmlZZ2FYTk9kVzBvZG1Gc2RXVXVkRzhwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnWkdsemRHRnVZMlZVYjFSaGNtZGxkQ0E5SUhaaGJIVmxMblJ2SUMwZ2RtRnNkV1V1WTNWeWNtVnVkRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IyWVd4MVpTNTJaV3h2WTJsMGVTQXJQU0JrYVhOMFlXNWpaVlJ2VkdGeVoyVjBJQ29nYzNCbFpXUlFaWEpHY21GdFpTaDJZV3gxWlM1emNISnBibWNzSUdWc1lYQnpaV1FwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJCY0hCc2VTQnNZWFJsYzNRZ2RtVnNiMk5wZEhsY2JpQWdJQ0FnSUNBZ0lDQWdJSFpoYkhWbExtTjFjbkpsYm5RZ0t6MGdjM0JsWldSUVpYSkdjbUZ0WlNoMllXeDFaUzUyWld4dlkybDBlU3dnWld4aGNITmxaQ2s3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUVSbGRHVmpkQ0JpYjNWdVkyVmNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDZ29kbUZzZFdVdWJXbHVJQ0U5UFNCMWJtUmxabWx1WldRZ0ppWWdkbUZzZFdVdVkzVnljbVZ1ZENBOElIWmhiSFZsTG0xcGJpa2dmSHdnS0haaGJIVmxMbTFoZUNBaFBUMGdkVzVrWldacGJtVmtJQ1ltSUhaaGJIVmxMbU4xY25KbGJuUWdQaUIyWVd4MVpTNXRZWGdwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnNkV1V1ZG1Wc2IyTnBkSGtnS2owZ0xTQjJZV3gxWlM1aWIzVnVZMlU3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUVOb1pXTnJJR2xtSUhaaGJIVmxJR2hoY3lCamFHRnVaMlZrWEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvZG1Gc2RXVXVZM1Z5Y21WdWRDQWhQVDBnY0hKbGRtbHZkWE5XWVd4MVpTQjhmQ0JOWVhSb0xtRmljeWgyWVd4MVpTNTJaV3h2WTJsMGVTa2dQajBnZG1Gc2RXVXVjM1J2Y0ZOd1pXVmtJSHg4SUNoMllXeDFaUzV6Y0hKcGJtY2dKaVlnZG1Gc2RXVXVZM1Z5Y21WdWRDQWhQVDBnZG1Gc2RXVXVkRzhwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVvWVhORGFHRnVaMlZrSUQwZ2RISjFaVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lHOXVSbkpoYldWRmJtUW9LU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDaDBhR2x6TG0xaGVFbHVZV04wYVhabFJuSmhiV1Z6SUNFOVBTQkpibVpwYm1sMGVTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVwYm1GamRHbDJaVVp5WVcxbGN5QTlJSFJvYVhNdWFHRnpRMmhoYm1kbFpDQS9JREVnT2lCMGFHbHpMbWx1WVdOMGFYWmxSbkpoYldWeklDc2dNVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0hSb2FYTXVhVzVoWTNScGRtVkdjbUZ0WlhNZ1BqMGdkR2hwY3k1dFlYaEpibUZqZEdsMlpVWnlZVzFsY3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WTI5dGNHeGxkR1VvS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYm4xY2JseHVVR2g1YzJsamN5NXdjbTkwYjNSNWNHVXVaR1ZtWVhWc2RGWmhiSFZsVUhKdmNDQTlJQ2QyWld4dlkybDBlU2M3WEc1UWFIbHphV056TG5CeWIzUnZkSGx3WlM1a1pXWmhkV3gwVm1Gc2RXVWdQU0JCWTNScGIyNHVaWGgwWlc1a1JHVm1ZWFZzZEZaaGJIVmxLSHRjYmlBZ0lDQmhZMk5sYkdWeVlYUnBiMjQ2SURBc0lDOHZJRnR1ZFcxaVpYSmRPaUJCWTJObGJHVnlZWFJwYjI0Z2RHOGdZWEJ3YkhrZ2RHOGdkbUZzZFdVc0lHbHVJSFZ1YVhSeklIQmxjaUJ6WldOdmJtUmNiaUFnSUNCaWIzVnVZMlU2SURBc0lDOHZJRnR1ZFcxaVpYSmRPaUJHWVdOMGIzSWdkRzhnYlhWc2RHbHdiSGtnZG1Wc2IyTnBkSGtnWW5rZ2IyNGdZbTkxYm1ObFhHNGdJQ0FnYzNCeWFXNW5PaUF3TENBdkx5QmJiblZ0WW1WeVhUb2dVM0J5YVc1bklITjBjbVZ1WjNSb0lHUjFjbWx1WnlBbmMzUnlhVzVuSjF4dUlDQWdJSE4wYjNCVGNHVmxaRG9nTUM0d01ERXNJQzh2SUZ0dWRXMWlaWEpkT2lCVGRHOXdJSE5wYlhWc1lYUnBiMjRnZFc1a1pYSWdkR2hwY3lCemNHVmxaRnh1SUNBZ0lHWnlhV04wYVc5dU9pQXdJQzh2SUZ0dWRXMWlaWEpkT2lCR2NtbGpkR2x2YmlCMGJ5QmhjSEJzZVNCd1pYSWdabkpoYldVc0lEQXRNVnh1ZlNrN1hHNVFhSGx6YVdOekxuQnliM1J2ZEhsd1pTNWtaV1poZFd4MFVISnZjSE1nUFNCQlkzUnBiMjR1WlhoMFpXNWtSR1ZtWVhWc2RGQnliM0J6S0h0Y2JpQWdJQ0J0WVhoSmJtRmpkR2wyWlVaeVlXMWxjem9nTTF4dWZTazdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJRkJvZVhOcFkzTTdYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9QaHlzaWNzLmpzXG4gKiogbW9kdWxlIGlkID0gNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX0FjdGlvbjIgPSByZXF1aXJlKCcuL0FjdGlvbicpO1xuXG52YXIgX0FjdGlvbjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BY3Rpb24yKTtcblxudmFyIF9Qb2ludGVyID0gcmVxdWlyZSgnLi4vaW5wdXQvUG9pbnRlcicpO1xuXG52YXIgX1BvaW50ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUG9pbnRlcik7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLypcbiAgICBTY3JhcGUgeC95IGNvb3JkaW5hdGVzIGZyb20gcHJvdmlkZWQgZXZlbnRcblxuICAgIEBwYXJhbSBbZXZlbnRdXG4gICAgQHJldHVybiBbb2JqZWN0XVxuKi9cbnZhciBtb3VzZUV2ZW50VG9Qb2ludCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogZS5wYWdlWCxcbiAgICAgICAgeTogZS5wYWdlWVxuICAgIH07XG59O1xuXG52YXIgdG91Y2hFdmVudFRvUG9pbnQgPSBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBjaGFuZ2VkVG91Y2hlcyA9IF9yZWYuY2hhbmdlZFRvdWNoZXM7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCxcbiAgICAgICAgeTogY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WVxuICAgIH07XG59O1xuXG52YXIgY3JlYXRlUG9pbnRlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgcmV0dXJuIGUudG91Y2hlcyA/IG5ldyBfUG9pbnRlcjIuZGVmYXVsdCh0b3VjaEV2ZW50VG9Qb2ludChlKSwgJ3RvdWNobW92ZScsIHRvdWNoRXZlbnRUb1BvaW50KSA6IG5ldyBfUG9pbnRlcjIuZGVmYXVsdChtb3VzZUV2ZW50VG9Qb2ludChlKSwgJ21vdXNlbW92ZScsIG1vdXNlRXZlbnRUb1BvaW50KTtcbn07XG5cbnZhciBnZXRBY3R1YWxFdmVudCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgcmV0dXJuIGUub3JpZ2luYWxFdmVudCB8fCBlO1xufTtcblxudmFyIFRyYWNrID0gZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgICBfaW5oZXJpdHMoVHJhY2ssIF9BY3Rpb24pO1xuXG4gICAgZnVuY3Rpb24gVHJhY2soKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUcmFjayk7XG5cbiAgICAgICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfVxuXG4gICAgVHJhY2sucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gc3RhcnQoaW5wdXQpIHtcbiAgICAgICAgX0FjdGlvbi5wcm90b3R5cGUuc3RhcnQuY2FsbCh0aGlzKTtcblxuICAgICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQgPSBpbnB1dC5zdGF0ZSA/IGlucHV0IDogY3JlYXRlUG9pbnRlcihnZXRBY3R1YWxFdmVudChpbnB1dCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbnB1dE9mZnNldCA9IHt9O1xuICAgICAgICB0aGlzLmlucHV0T3JpZ2luID0gX2V4dGVuZHMoe30sIHRoaXMuaW5wdXQuc3RhdGUpO1xuICAgICAgICB0aGlzLmlucHV0LnN0YXJ0KCk7XG4gICAgfTtcblxuICAgIFRyYWNrLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgICAgX0FjdGlvbi5wcm90b3R5cGUuc3RvcC5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLmlucHV0LnN0b3AoKTtcbiAgICB9O1xuXG4gICAgVHJhY2sucHJvdG90eXBlLm9uVXBkYXRlID0gZnVuY3Rpb24gb25VcGRhdGUodHJhY2ssIGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgICAgICAgdGhpcy5pbnB1dE9mZnNldCA9ICgwLCBfY2FsYy5vZmZzZXQpKHRoaXMuaW5wdXRPcmlnaW4sIHRoaXMuaW5wdXQuc3RhdGUpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMudmFsdWVLZXlzW2ldO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5pbnB1dE9mZnNldC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcbiAgICAgICAgICAgICAgICB2YXIgaW5wdXRQcm9wID0gdmFsdWUuaGFzT3duUHJvcGVydHkoJ3dhdGNoJykgPyB2YWx1ZS53YXRjaCA6IGtleTtcblxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5kaXJlY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IHRoaXMuaW5wdXQuc3RhdGVbaW5wdXRQcm9wXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gdmFsdWUuZnJvbSArIHRoaXMuaW5wdXRPZmZzZXRbaW5wdXRQcm9wXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBTbW9vdGggdmFsdWUgaWYgd2UgaGF2ZSBzbW9vdGhpbmdcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUuc21vb3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSAoMCwgX2NhbGMuc21vb3RoKSh2YWx1ZS5jdXJyZW50LCB2YWx1ZS5wcmV2LCBlbGFwc2VkLCB2YWx1ZS5zbW9vdGgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gVHJhY2s7XG59KF9BY3Rpb24zLmRlZmF1bHQpO1xuXG5UcmFjay5wcm90b3R5cGUuZGVmYXVsdFZhbHVlUHJvcCA9ICd3YXRjaCc7XG5UcmFjay5wcm90b3R5cGUuZGVmYXVsdFZhbHVlID0gX0FjdGlvbjMuZGVmYXVsdC5leHRlbmREZWZhdWx0VmFsdWUoe1xuICAgIGRpcmVjdDogZmFsc2Vcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBUcmFjaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDFSeVlXTnJMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096dEJRVUZCT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3T3pzN096czdPenM3T3pzN096dEJRVkZCTEVsQlFVMHNiMEpCUVc5Q0xGVkJRVU1zUTBGQlJEdFhRVUZSTzBGQlF6bENMRmRCUVVjc1JVRkJSU3hMUVVGR08wRkJRMGdzVjBGQlJ5eEZRVUZGTEV0QlFVWTdPME5CUm0xQ096dEJRVXN4UWl4SlFVRk5MRzlDUVVGdlFqdFJRVUZITzFkQlFYTkNPMEZCUXk5RExGZEJRVWNzWlVGQlpTeERRVUZtTEVWQlFXdENMRTlCUVd4Q08wRkJRMGdzVjBGQlJ5eGxRVUZsTEVOQlFXWXNSVUZCYTBJc1QwRkJiRUk3TzBOQlJtMUNPenRCUVVzeFFpeEpRVUZOTEdkQ1FVRm5RaXhWUVVGRExFTkJRVVE3VjBGQlR5eEZRVUZGTEU5QlFVWXNSMEZEZWtJc2MwSkJRVmtzYTBKQlFXdENMRU5CUVd4Q0xFTkJRVm9zUlVGQmEwTXNWMEZCYkVNc1JVRkJLME1zYVVKQlFTOURMRU5CUkhsQ0xFZEJSWHBDTEhOQ1FVRlpMR3RDUVVGclFpeERRVUZzUWl4RFFVRmFMRVZCUVd0RExGZEJRV3hETEVWQlFTdERMR2xDUVVFdlF5eERRVVo1UWp0RFFVRlFPenRCUVVsMFFpeEpRVUZOTEdsQ1FVRnBRaXhWUVVGRExFTkJRVVE3VjBGQlR5eEZRVUZGTEdGQlFVWXNTVUZCYlVJc1EwRkJia0k3UTBGQlVEczdTVUZGYWtJN096czdPenM3T3p0dlFrRkRSaXgxUWtGQlRTeFBRVUZQTzBGQlExUXNNRUpCUVUwc1MwRkJUaXhaUVVSVE96dEJRVWRVTEZsQlFVa3NTMEZCU2l4RlFVRlhPMEZCUTFBc2FVSkJRVXNzUzBGQlRDeEhRVUZoTEUxQlFVMHNTMEZCVGl4SFFVRmpMRXRCUVdRc1IwRkJjMElzWTBGQll5eGxRVUZsTEV0QlFXWXNRMEZCWkN4RFFVRjBRaXhEUVVST08xTkJRVmc3TzBGQlNVRXNZVUZCU3l4WFFVRk1MRWRCUVcxQ0xFVkJRVzVDTEVOQlVGTTdRVUZSVkN4aFFVRkxMRmRCUVV3c1owSkJRWGRDTEV0QlFVc3NTMEZCVEN4RFFVRlhMRXRCUVZnc1EwRkJlRUlzUTBGU1V6dEJRVk5VTEdGQlFVc3NTMEZCVEN4RFFVRlhMRXRCUVZnc1IwRlVVenM3TzBGQlJGZ3NiMEpCWVVZc2RVSkJRVTg3UVVGRFNDd3dRa0ZCVFN4SlFVRk9MRmxCUkVjN1FVRkZTQ3hoUVVGTExFdEJRVXdzUTBGQlZ5eEpRVUZZTEVkQlJrYzdPenRCUVdKTUxHOUNRV3RDUml3MlFrRkJVeXhQUVVGUExGbEJRVmtzVTBGQlV6dEJRVU5xUXl4aFFVRkxMRmRCUVV3c1IwRkJiVUlzYTBKQlFVOHNTMEZCU3l4WFFVRk1MRVZCUVd0Q0xFdEJRVXNzUzBGQlRDeERRVUZYTEV0QlFWZ3NRMEZCTlVNc1EwRkVhVU03TzBGQlIycERMR0ZCUVVzc1NVRkJTU3hKUVVGSkxFTkJRVW9zUlVGQlR5eEpRVUZKTEV0QlFVc3NXVUZCVEN4RlFVRnRRaXhIUVVGMlF5eEZRVUUwUXp0QlFVTjRReXhuUWtGQlRTeE5RVUZOTEV0QlFVc3NVMEZCVEN4RFFVRmxMRU5CUVdZc1EwRkJUaXhEUVVSclF6czdRVUZIZUVNc1owSkJRVWtzUzBGQlN5eFhRVUZNTEVOQlFXbENMR05CUVdwQ0xFTkJRV2RETEVkQlFXaERMRU5CUVVvc1JVRkJNRU03UVVGRGRFTXNiMEpCUVUwc1VVRkJVU3hMUVVGTExFMUJRVXdzUTBGQldTeEhRVUZhTEVOQlFWSXNRMEZFWjBNN1FVRkZkRU1zYjBKQlFVMHNXVUZCV1N4TlFVRk5MR05CUVU0c1EwRkJjVUlzVDBGQmNrSXNTVUZCWjBNc1RVRkJUU3hMUVVGT0xFZEJRV01zUjBGQk9VTXNRMEZHYjBJN08wRkJTWFJETEc5Q1FVRkpMRTFCUVUwc1RVRkJUaXhGUVVGak8wRkJRMlFzTUVKQlFVMHNUMEZCVGl4SFFVRm5RaXhMUVVGTExFdEJRVXdzUTBGQlZ5eExRVUZZTEVOQlFXbENMRk5CUVdwQ0xFTkJRV2hDTEVOQlJHTTdhVUpCUVd4Q0xFMUJSVTg3UVVGRFNDd3dRa0ZCVFN4UFFVRk9MRWRCUVdkQ0xFMUJRVTBzU1VGQlRpeEhRVUZoTEV0QlFVc3NWMEZCVEN4RFFVRnBRaXhUUVVGcVFpeERRVUZpTEVOQlJHSTdhVUpCUmxBN096dEJRVXB6UXl4dlFrRlhiRU1zVFVGQlRTeE5RVUZPTEVWQlFXTTdRVUZEWkN3d1FrRkJUU3hQUVVGT0xFZEJRV2RDTEd0Q1FVRlBMRTFCUVUwc1QwRkJUaXhGUVVGbExFMUJRVTBzU1VGQlRpeEZRVUZaTEU5QlFXeERMRVZCUVRKRExFMUJRVTBzVFVGQlRpeERRVUV6UkN4RFFVUmpPMmxDUVVGc1FqdGhRVmhLTzFOQlNFbzdPenRYUVhKQ1JqczdPMEZCTWtOT0xFMUJRVTBzVTBGQlRpeERRVUZuUWl4blFrRkJhRUlzUjBGQmJVTXNUMEZCYmtNN1FVRkRRU3hOUVVGTkxGTkJRVTRzUTBGQlowSXNXVUZCYUVJc1IwRkJLMElzYVVKQlFVOHNhMEpCUVZBc1EwRkJNRUk3UVVGRGNrUXNXVUZCVVN4TFFVRlNPME5CUkRKQ0xFTkJRUzlDT3p0clFrRkpaU0lzSW1acGJHVWlPaUpVY21GamF5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdRV04wYVc5dUlHWnliMjBnSnk0dlFXTjBhVzl1Snp0Y2JtbHRjRzl5ZENCUWIybHVkR1Z5SUdaeWIyMGdKeTR1TDJsdWNIVjBMMUJ2YVc1MFpYSW5PMXh1YVcxd2IzSjBJSHNnYzIxdmIzUm9MQ0J2Wm1aelpYUWdmU0JtY205dElDY3VMaTlwYm1NdlkyRnNZeWM3WEc1Y2JpOHFYRzRnSUNBZ1UyTnlZWEJsSUhndmVTQmpiMjl5WkdsdVlYUmxjeUJtY205dElIQnliM1pwWkdWa0lHVjJaVzUwWEc1Y2JpQWdJQ0JBY0dGeVlXMGdXMlYyWlc1MFhWeHVJQ0FnSUVCeVpYUjFjbTRnVzI5aWFtVmpkRjFjYmlvdlhHNWpiMjV6ZENCdGIzVnpaVVYyWlc1MFZHOVFiMmx1ZENBOUlDaGxLU0E5UGlBb2UxeHVJQ0FnSUhnNklHVXVjR0ZuWlZnc1hHNGdJQ0FnZVRvZ1pTNXdZV2RsV1Z4dWZTazdYRzVjYm1OdmJuTjBJSFJ2ZFdOb1JYWmxiblJVYjFCdmFXNTBJRDBnS0hzZ1kyaGhibWRsWkZSdmRXTm9aWE1nZlNrZ1BUNGdLSHRjYmlBZ0lDQjRPaUJqYUdGdVoyVmtWRzkxWTJobGMxc3dYUzVqYkdsbGJuUllMRnh1SUNBZ0lIazZJR05vWVc1blpXUlViM1ZqYUdWeld6QmRMbU5zYVdWdWRGbGNibjBwTzF4dVhHNWpiMjV6ZENCamNtVmhkR1ZRYjJsdWRHVnlJRDBnS0dVcElEMCtJR1V1ZEc5MVkyaGxjeUEvWEc0Z0lDQWdibVYzSUZCdmFXNTBaWElvZEc5MVkyaEZkbVZ1ZEZSdlVHOXBiblFvWlNrc0lDZDBiM1ZqYUcxdmRtVW5MQ0IwYjNWamFFVjJaVzUwVkc5UWIybHVkQ2tnT2lCY2JpQWdJQ0J1WlhjZ1VHOXBiblJsY2lodGIzVnpaVVYyWlc1MFZHOVFiMmx1ZENobEtTd2dKMjF2ZFhObGJXOTJaU2NzSUcxdmRYTmxSWFpsYm5SVWIxQnZhVzUwS1R0Y2JseHVZMjl1YzNRZ1oyVjBRV04wZFdGc1JYWmxiblFnUFNBb1pTa2dQVDRnWlM1dmNtbG5hVzVoYkVWMlpXNTBJSHg4SUdVN1hHNWNibU5zWVhOeklGUnlZV05ySUdWNGRHVnVaSE1nUVdOMGFXOXVJSHRjYmlBZ0lDQnpkR0Z5ZENocGJuQjFkQ2tnZTF4dUlDQWdJQ0FnSUNCemRYQmxjaTV6ZEdGeWRDZ3BPMXh1WEc0Z0lDQWdJQ0FnSUdsbUlDaHBibkIxZENrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXBibkIxZENBOUlHbHVjSFYwTG5OMFlYUmxJRDhnYVc1d2RYUWdPaUJqY21WaGRHVlFiMmx1ZEdWeUtHZGxkRUZqZEhWaGJFVjJaVzUwS0dsdWNIVjBLU2s3WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG1sdWNIVjBUMlptYzJWMElEMGdlMzA3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVhVzV3ZFhSUGNtbG5hVzRnUFNCN0lDNHVMblJvYVhNdWFXNXdkWFF1YzNSaGRHVWdmVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXBibkIxZEM1emRHRnlkQ2dwTzF4dUlDQWdJSDFjYmx4dUlDQWdJSE4wYjNBb0tTQjdYRzRnSUNBZ0lDQWdJSE4xY0dWeUxuTjBiM0FvS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVwYm5CMWRDNXpkRzl3S0NrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYjI1VmNHUmhkR1VvZEhKaFkyc3NJR1p5WVcxbFUzUmhiWEFzSUdWc1lYQnpaV1FwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVwYm5CMWRFOW1abk5sZENBOUlHOW1abk5sZENoMGFHbHpMbWx1Y0hWMFQzSnBaMmx1TENCMGFHbHpMbWx1Y0hWMExuTjBZWFJsS1R0Y2JseHVJQ0FnSUNBZ0lDQm1iM0lnS0d4bGRDQnBJRDBnTURzZ2FTQThJSFJvYVhNdWJuVnRWbUZzZFdWTFpYbHpPeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJR3RsZVNBOUlIUm9hWE11ZG1Gc2RXVkxaWGx6VzJsZE8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9kR2hwY3k1cGJuQjFkRTltWm5ObGRDNW9ZWE5QZDI1UWNtOXdaWEowZVNoclpYa3BLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdkbUZzZFdVZ1BTQjBhR2x6TG5aaGJIVmxjMXRyWlhsZE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUdsdWNIVjBVSEp2Y0NBOUlIWmhiSFZsTG1oaGMwOTNibEJ5YjNCbGNuUjVLQ2QzWVhSamFDY3BJRDhnZG1Gc2RXVXVkMkYwWTJnZ09pQnJaWGs3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9kbUZzZFdVdVpHbHlaV04wS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFpoYkhWbExtTjFjbkpsYm5RZ1BTQjBhR2x6TG1sdWNIVjBMbk4wWVhSbFcybHVjSFYwVUhKdmNGMDdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVXVZM1Z5Y21WdWRDQTlJSFpoYkhWbExtWnliMjBnS3lCMGFHbHpMbWx1Y0hWMFQyWm1jMlYwVzJsdWNIVjBVSEp2Y0YwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdMeThnVTIxdmIzUm9JSFpoYkhWbElHbG1JSGRsSUdoaGRtVWdjMjF2YjNSb2FXNW5YRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0haaGJIVmxMbk50YjI5MGFDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMllXeDFaUzVqZFhKeVpXNTBJRDBnYzIxdmIzUm9LSFpoYkhWbExtTjFjbkpsYm5Rc0lIWmhiSFZsTG5CeVpYWXNJR1ZzWVhCelpXUXNJSFpoYkhWbExuTnRiMjkwYUNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dWZWeHVYRzVVY21GamF5NXdjbTkwYjNSNWNHVXVaR1ZtWVhWc2RGWmhiSFZsVUhKdmNDQTlJQ2QzWVhSamFDYzdYRzVVY21GamF5NXdjbTkwYjNSNWNHVXVaR1ZtWVhWc2RGWmhiSFZsSUQwZ1FXTjBhVzl1TG1WNGRHVnVaRVJsWm1GMWJIUldZV3gxWlNoN1hHNGdJQ0FnWkdseVpXTjBPaUJtWVd4elpWeHVmU2s3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUZSeVlXTnJPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9UcmFjay5qc1xuICoqIG1vZHVsZSBpZCA9IDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9sb29wID0gcmVxdWlyZSgnLi9sb29wJyk7XG5cbnZhciBsb29wID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2xvb3ApO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9IC8qXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJhc2UgVGFzayBjbGFzcyBmb3IgY3JlYXRpbmcgYSB0YXNrIG9uIHRoZSBtYWluIHJlbmRlciBsb29wLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG5cblxuZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgICB0aGlzLm9uQ2xlYW51cCA9IHVuZGVmaW5lZDtcbiAgICBsb29wLmRlYWN0aXZhdGUodGhpcy5pZCk7XG59XG5cbmZ1bmN0aW9uIGFjdGl2YXRlKCkge1xuICAgIHRoaXMub25DbGVhbnVwID0gY2xlYW51cDtcbn1cblxudmFyIFRhc2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVGFzayhwcm9wcykge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGFzayk7XG5cbiAgICAgICAgdGhpcy5pZCA9IGxvb3AuZ2V0VGFza0lkKCk7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICBpZiAodGhpcy5kZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLmRlZmF1bHRQcm9wcykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRlZmF1bHRQcm9wcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IHRoaXMuZGVmYXVsdFByb3BzW2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXQocHJvcHMpO1xuICAgIH1cblxuICAgIFRhc2sucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIHNldChwcm9wcykge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICAgICAgICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhpc1trZXldID0gcHJvcHNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBUYXNrLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgICBsb29wLmFjdGl2YXRlKHRoaXMuaWQsIHRoaXMpO1xuXG4gICAgICAgIHRoaXMub25BY3RpdmF0ZUxvb3AgPSB0aGlzLm9uQ2xlYW51cCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5pc0NvbXBsZXRlID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHRoaXMub25TdGFydCkge1xuICAgICAgICAgICAgdGhpcy5vblN0YXJ0KHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIFRhc2sucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICBsb29wLmRlYWN0aXZhdGUodGhpcy5pZCk7XG5cbiAgICAgICAgaWYgKHRoaXMub25TdG9wKSB7XG4gICAgICAgICAgICB0aGlzLm9uU3RvcCh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBUYXNrLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gb25jZSgpIHtcbiAgICAgICAgbG9vcC5hY3RpdmF0ZSh0aGlzLmlkLCB0aGlzKTtcbiAgICAgICAgdGhpcy5vbkNsZWFudXAgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMub25BY3RpdmF0ZUxvb3AgPSBhY3RpdmF0ZTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgVGFzay5wcm90b3R5cGUuY29tcGxldGUgPSBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICAgICAgdGhpcy5zdG9wKCk7XG5cbiAgICAgICAgaWYgKHRoaXMub25Db21wbGV0ZSkge1xuICAgICAgICAgICAgdGhpcy5vbkNvbXBsZXRlKHRoaXMpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qXG4gICAgICAgICMgRXh0ZW5kIHRoaXMgUHJvY2VzcyB3aXRoIG5ldyBwcm9wZXJ0aWVzXG4gICAgICAgICMjIFJldHVybnMgbmV3IGluc3RhbmNlIG9mIHRoaXMgUHJvY2VzcydzIGBwcm90b3R5cGVgIHdpdGggZXhpc3RpbmcgYW5kIG5ldyBwcm9wZXJ0aWVzXG4gICAgICAgICBAcGFyYW0gW29iamVjdF0gKG9wdGlvbmFsKVxuICAgICAgICBAcmV0dXJuIFtQcm9jZXNzXVxuICAgICovXG5cblxuICAgIFRhc2sucHJvdG90eXBlLmluaGVyaXQgPSBmdW5jdGlvbiBpbmhlcml0KHByb3BzKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXMuaWQ7XG5cbiAgICAgICAgdmFyIGluaGVyaXRlZFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHRoaXMsIFsnaWQnXSk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyB0aGlzLmNvbnN0cnVjdG9yKF9leHRlbmRzKHt9LCBpbmhlcml0ZWRQcm9wcywgcHJvcHMpKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFRhc2s7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFRhc2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTBZWE5yTDFSaGMyc3Vhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN08wRkJSMEU3TzBsQlFWazdPenM3T3pzN096czdPMEZCUlZvc1UwRkJVeXhQUVVGVUxFZEJRVzFDTzBGQlEyWXNVMEZCU3l4VFFVRk1MRWRCUVdsQ0xGTkJRV3BDTEVOQlJHVTdRVUZGWml4VFFVRkxMRlZCUVV3c1EwRkJaMElzUzBGQlN5eEZRVUZNTEVOQlFXaENMRU5CUm1VN1EwRkJia0k3TzBGQlMwRXNVMEZCVXl4UlFVRlVMRWRCUVc5Q08wRkJRMmhDTEZOQlFVc3NVMEZCVEN4SFFVRnBRaXhQUVVGcVFpeERRVVJuUWp0RFFVRndRanM3U1VGSmNVSTdRVUZEYWtJc1lVRkVhVUlzU1VGRGFrSXNRMEZCV1N4TFFVRmFMRVZCUVcxQ096aENRVVJHTEUxQlEwVTdPMEZCUTJZc1lVRkJTeXhGUVVGTUxFZEJRVlVzUzBGQlN5eFRRVUZNTEVWQlFWWXNRMEZFWlR0QlFVVm1MR0ZCUVVzc1VVRkJUQ3hIUVVGblFpeExRVUZvUWl4RFFVWmxPenRCUVVsbUxGbEJRVWtzUzBGQlN5eFpRVUZNTEVWQlFXMUNPMEZCUTI1Q0xHbENRVUZMTEVsQlFVa3NSMEZCU2l4SlFVRlhMRXRCUVVzc1dVRkJUQ3hGUVVGdFFqdEJRVU12UWl4dlFrRkJTU3hMUVVGTExGbEJRVXdzUTBGQmEwSXNZMEZCYkVJc1EwRkJhVU1zUjBGQmFrTXNRMEZCU2l4RlFVRXlRenRCUVVOMlF5eDVRa0ZCU3l4SFFVRk1MRWxCUVZrc1MwRkJTeXhaUVVGTUxFTkJRV3RDTEVkQlFXeENMRU5CUVZvc1EwRkVkVU03YVVKQlFUTkRPMkZCUkVvN1UwRkVTanM3UVVGUlFTeGhRVUZMTEVkQlFVd3NRMEZCVXl4TFFVRlVMRVZCV21VN1MwRkJia0k3TzBGQlJHbENMRzFDUVdkQ2FrSXNiVUpCUVVrc1QwRkJUenRCUVVOUUxHRkJRVXNzU1VGQlNTeEhRVUZLTEVsQlFWY3NTMEZCYUVJc1JVRkJkVUk3UVVGRGJrSXNaMEpCUVVrc1RVRkJUU3hqUVVGT0xFTkJRWEZDTEVkQlFYSkNMRU5CUVVvc1JVRkJLMEk3UVVGRE0wSXNjVUpCUVVzc1IwRkJUQ3hKUVVGWkxFMUJRVTBzUjBGQlRpeERRVUZhTEVOQlJESkNPMkZCUVM5Q08xTkJSRW83TzBGQlRVRXNaVUZCVHl4SlFVRlFMRU5CVUU4N096dEJRV2hDVFN4dFFrRXdRbXBDTEhsQ1FVRlJPMEZCUTBvc1lVRkJTeXhSUVVGTUxFTkJRV01zUzBGQlN5eEZRVUZNTEVWQlFWTXNTVUZCZGtJc1JVRkVTVHM3UVVGSFNpeGhRVUZMTEdOQlFVd3NSMEZCYzBJc1MwRkJTeXhUUVVGTUxFZEJRV2xDTEZOQlFXcENMRU5CU0d4Q08wRkJTVW9zWVVGQlN5eFZRVUZNTEVkQlFXdENMRXRCUVd4Q0xFTkJTa2s3TzBGQlRVb3NXVUZCU1N4TFFVRkxMRTlCUVV3c1JVRkJZenRCUVVOa0xHbENRVUZMTEU5QlFVd3NRMEZCWVN4SlFVRmlMRVZCUkdNN1UwRkJiRUk3TzBGQlNVRXNaVUZCVHl4SlFVRlFMRU5CVmtrN096dEJRVEZDVXl4dFFrRjFRMnBDTEhWQ1FVRlBPMEZCUTBnc1lVRkJTeXhWUVVGTUxFTkJRV2RDTEV0QlFVc3NSVUZCVEN4RFFVRm9RaXhEUVVSSE96dEJRVWRJTEZsQlFVa3NTMEZCU3l4TlFVRk1MRVZCUVdFN1FVRkRZaXhwUWtGQlN5eE5RVUZNTEVOQlFWa3NTVUZCV2l4RlFVUmhPMU5CUVdwQ096dEJRVWxCTEdWQlFVOHNTVUZCVUN4RFFWQkhPenM3UVVGMlExVXNiVUpCYVVScVFpeDFRa0ZCVHp0QlFVTklMR0ZCUVVzc1VVRkJUQ3hEUVVGakxFdEJRVXNzUlVGQlRDeEZRVUZUTEVsQlFYWkNMRVZCUkVjN1FVRkZTQ3hoUVVGTExGTkJRVXdzUjBGQmFVSXNVMEZCYWtJc1EwRkdSenRCUVVkSUxHRkJRVXNzWTBGQlRDeEhRVUZ6UWl4UlFVRjBRaXhEUVVoSE96dEJRVXRJTEdWQlFVOHNTVUZCVUN4RFFVeEhPenM3UVVGcVJGVXNiVUpCZVVScVFpd3JRa0ZCVnp0QlFVTlFMR0ZCUVVzc1NVRkJUQ3hIUVVSUE96dEJRVWRRTEZsQlFVa3NTMEZCU3l4VlFVRk1MRVZCUVdsQ08wRkJRMnBDTEdsQ1FVRkxMRlZCUVV3c1EwRkJaMElzU1VGQmFFSXNSVUZFYVVJN1UwRkJja0k3T3pzN096czdPenM3TzBGQk5VUmhMRzFDUVhkRmFrSXNNa0pCUVZFc1QwRkJUenRaUVVOSUxFdEJRVEJDTEV0QlFURkNMRWRCUkVjN08xbEJRMGtzTUVOQlFXMUNMR05CUkhaQ096dEJRVVZZTEdWQlFVOHNTVUZCU1N4TFFVRkxMRmRCUVV3c1kwRkJjMElzWjBKQlFXMUNMRTFCUVRkRExFTkJRVkFzUTBGR1Z6czdPMWRCZUVWRklpd2labWxzWlNJNklsUmhjMnN1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUx5cGNiaUFnSUNCQ1lYTmxJRlJoYzJzZ1kyeGhjM01nWm05eUlHTnlaV0YwYVc1bklHRWdkR0Z6YXlCdmJpQjBhR1VnYldGcGJpQnlaVzVrWlhJZ2JHOXZjQzVjYmlvdlhHNXBiWEJ2Y25RZ0tpQmhjeUJzYjI5d0lHWnliMjBnSnk0dmJHOXZjQ2M3WEc1Y2JtWjFibU4wYVc5dUlHTnNaV0Z1ZFhBb0tTQjdYRzRnSUNBZ2RHaHBjeTV2YmtOc1pXRnVkWEFnUFNCMWJtUmxabWx1WldRN1hHNGdJQ0FnYkc5dmNDNWtaV0ZqZEdsMllYUmxLSFJvYVhNdWFXUXBPMXh1ZlZ4dVhHNW1kVzVqZEdsdmJpQmhZM1JwZG1GMFpTZ3BJSHRjYmlBZ0lDQjBhR2x6TG05dVEyeGxZVzUxY0NBOUlHTnNaV0Z1ZFhBN1hHNTlYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR05zWVhOeklGUmhjMnNnZTF4dUlDQWdJR052Ym5OMGNuVmpkRzl5S0hCeWIzQnpLU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVhV1FnUFNCc2IyOXdMbWRsZEZSaGMydEpaQ2dwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbWx6UVdOMGFYWmxJRDBnWm1Gc2MyVTdYRzVjYmlBZ0lDQWdJQ0FnYVdZZ0tIUm9hWE11WkdWbVlYVnNkRkJ5YjNCektTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCbWIzSWdLR3hsZENCclpYa2dhVzRnZEdocGN5NWtaV1poZFd4MFVISnZjSE1wSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9kR2hwY3k1a1pXWmhkV3gwVUhKdmNITXVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2EyVjVLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6VzJ0bGVWMGdQU0IwYUdsekxtUmxabUYxYkhSUWNtOXdjMXRyWlhsZE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdWMyVjBLSEJ5YjNCektUdGNiaUFnSUNCOVhHNWNiaUFnSUNCelpYUW9jSEp2Y0hNcElIdGNiaUFnSUNBZ0lDQWdabTl5SUNoc1pYUWdhMlY1SUdsdUlIQnliM0J6S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2NISnZjSE11YUdGelQzZHVVSEp2Y0dWeWRIa29hMlY1S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE5iYTJWNVhTQTlJSEJ5YjNCelcydGxlVjA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnSUNCOVhHNWNiaUFnSUNCemRHRnlkQ2dwSUh0Y2JpQWdJQ0FnSUNBZ2JHOXZjQzVoWTNScGRtRjBaU2gwYUdsekxtbGtMQ0IwYUdsektUdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxtOXVRV04wYVhaaGRHVk1iMjl3SUQwZ2RHaHBjeTV2YmtOc1pXRnVkWEFnUFNCMWJtUmxabWx1WldRN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YVhORGIyMXdiR1YwWlNBOUlHWmhiSE5sTzF4dVhHNGdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxtOXVVM1JoY25RcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXViMjVUZEdGeWRDaDBhR2x6S1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQWdJSDFjYmx4dUlDQWdJSE4wYjNBb0tTQjdYRzRnSUNBZ0lDQWdJR3h2YjNBdVpHVmhZM1JwZG1GMFpTaDBhR2x6TG1sa0tUdGNiaUFnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbTl1VTNSdmNDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV2YmxOMGIzQW9kR2hwY3lrN1hHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3p0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J2Ym1ObEtDa2dlMXh1SUNBZ0lDQWdJQ0JzYjI5d0xtRmpkR2wyWVhSbEtIUm9hWE11YVdRc0lIUm9hWE1wTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbTl1UTJ4bFlXNTFjQ0E5SUhWdVpHVm1hVzVsWkR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV2YmtGamRHbDJZWFJsVEc5dmNDQTlJR0ZqZEdsMllYUmxPMXh1WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVJQ0FnSUgxY2JseHVJQ0FnSUdOdmJYQnNaWFJsS0NrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG5OMGIzQW9LVHRjYmx4dUlDQWdJQ0FnSUNCcFppQW9kR2hwY3k1dmJrTnZiWEJzWlhSbEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbTl1UTI5dGNHeGxkR1VvZEdocGN5azdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmlBZ0lDQXZLbHh1SUNBZ0lDQWdJQ0FqSUVWNGRHVnVaQ0IwYUdseklGQnliMk5sYzNNZ2QybDBhQ0J1WlhjZ2NISnZjR1Z5ZEdsbGMxeHVJQ0FnSUNBZ0lDQWpJeUJTWlhSMWNtNXpJRzVsZHlCcGJuTjBZVzVqWlNCdlppQjBhR2x6SUZCeWIyTmxjM01uY3lCZ2NISnZkRzkwZVhCbFlDQjNhWFJvSUdWNGFYTjBhVzVuSUdGdVpDQnVaWGNnY0hKdmNHVnlkR2xsYzF4dVhHNGdJQ0FnSUNBZ0lFQndZWEpoYlNCYmIySnFaV04wWFNBb2IzQjBhVzl1WVd3cFhHNGdJQ0FnSUNBZ0lFQnlaWFIxY200Z1cxQnliMk5sYzNOZFhHNGdJQ0FnS2k5Y2JpQWdJQ0JwYm1obGNtbDBLSEJ5YjNCektTQjdYRzRnSUNBZ0lDQWdJR052Ym5OMElIc2dhV1FzSUM0dUxtbHVhR1Z5YVhSbFpGQnliM0J6SUgwZ1BTQjBhR2x6TzF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnYm1WM0lIUm9hWE11WTI5dWMzUnlkV04wYjNJb2V5QXVMaTVwYm1obGNtbDBaV1JRY205d2N5d2dMaTR1Y0hKdmNITWdmU2s3WEc0Z0lDQWdmVnh1ZlNKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3Rhc2svVGFzay5qc1xuICoqIG1vZHVsZSBpZCA9IDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9UYXNrMiA9IHJlcXVpcmUoJy4uL3Rhc2svVGFzaycpO1xuXG52YXIgX1Rhc2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVGFzazIpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIElucHV0ID0gZnVuY3Rpb24gKF9UYXNrKSB7XG4gICAgX2luaGVyaXRzKElucHV0LCBfVGFzayk7XG5cbiAgICBmdW5jdGlvbiBJbnB1dChpbml0aWFsVmFsdWVzLCBwb2xsKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbnB1dCk7XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1Rhc2suY2FsbCh0aGlzKSk7XG5cbiAgICAgICAgX3RoaXMuc3RhdGUgPSBpbml0aWFsVmFsdWVzO1xuXG4gICAgICAgIGlmICgoMCwgX3V0aWxzLmlzRnVuYykocG9sbCkpIHtcbiAgICAgICAgICAgIF90aGlzLm9uRnJhbWVTdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMubGF0ZXN0KF90aGlzLnBvbGwoKSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBNYW51YWxseSBhZGQgbGF0ZXN0IHZhbHVlc1xuICAgICAgICAgQHBhcmFtIFtvYmplY3RdXG4gICAgKi9cblxuXG4gICAgSW5wdXQucHJvdG90eXBlLmxhdGVzdCA9IGZ1bmN0aW9uIGxhdGVzdChwcm9wcykge1xuICAgICAgICB0aGlzLnN0YXRlID0gX2V4dGVuZHMoe30sIHRoaXMuc3RhdGUsIHByb3BzKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIElucHV0O1xufShfVGFzazMuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IElucHV0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm5CMWRDOUpibkIxZEM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3UVVGQlFUczdPenRCUVVOQk96czdPenM3T3pzN08wbEJSWEZDT3pzN1FVRkRha0lzWVVGRWFVSXNTMEZEYWtJc1EwRkJXU3hoUVVGYUxFVkJRVEpDTEVsQlFUTkNMRVZCUVdsRE96aENRVVJvUWl4UFFVTm5RanM3Y1VSQlF6ZENMR3RDUVVRMlFqczdRVUZGTjBJc1kwRkJTeXhMUVVGTUxFZEJRV0VzWVVGQllpeERRVVkyUWpzN1FVRkpOMElzV1VGQlNTeHRRa0ZCVHl4SlFVRlFMRU5CUVVvc1JVRkJhMEk3UVVGRFpDeHJRa0ZCU3l4WlFVRk1MRWRCUVc5Q08zVkNRVUZOTEUxQlFVc3NUVUZCVEN4RFFVRlpMRTFCUVVzc1NVRkJUQ3hGUVVGYU8yRkJRVTRzUTBGRVRqdFRRVUZzUWp0eFFrRktOa0k3UzBGQmFrTTdPenM3T3pzN08wRkJSR2xDTEc5Q1FXVnFRaXg1UWtGQlR5eFBRVUZQTzBGQlExWXNZVUZCU3l4TFFVRk1MR2RDUVVGclFpeExRVUZMTEV0QlFVd3NSVUZCWlN4TlFVRnFReXhEUVVSVk96czdWMEZtUnlJc0ltWnBiR1VpT2lKSmJuQjFkQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnVkdGemF5Qm1jbTl0SUNjdUxpOTBZWE5yTDFSaGMyc25PMXh1YVcxd2IzSjBJSHNnYVhOR2RXNWpJSDBnWm5KdmJTQW5MaTR2YVc1akwzVjBhV3h6Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1kyeGhjM01nU1c1d2RYUWdaWGgwWlc1a2N5QlVZWE5ySUh0Y2JpQWdJQ0JqYjI1emRISjFZM1J2Y2locGJtbDBhV0ZzVm1Gc2RXVnpMQ0J3YjJ4c0tTQjdYRzRnSUNBZ0lDQWdJSE4xY0dWeUtDazdYRzRnSUNBZ0lDQWdJSFJvYVhNdWMzUmhkR1VnUFNCcGJtbDBhV0ZzVm1Gc2RXVnpPMXh1WEc0Z0lDQWdJQ0FnSUdsbUlDaHBjMFoxYm1Nb2NHOXNiQ2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWIyNUdjbUZ0WlZOMFlYSjBJRDBnS0NrZ1BUNGdkR2hwY3k1c1lYUmxjM1FvZEdocGN5NXdiMnhzS0NrcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5cGNiaUFnSUNBZ0lDQWdUV0Z1ZFdGc2JIa2dZV1JrSUd4aGRHVnpkQ0IyWVd4MVpYTmNibHh1SUNBZ0lDQWdJQ0JBY0dGeVlXMGdXMjlpYW1WamRGMWNiaUFnSUNBcUwxeHVJQ0FnSUd4aGRHVnpkQ2h3Y205d2N5a2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxuTjBZWFJsSUQwZ2V5QXVMaTUwYUdsekxuTjBZWFJsTENBdUxpNXdjbTl3Y3lCOU8xeHVJQ0FnSUgxY2JuMWNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5wdXQvSW5wdXQuanNcbiAqKiBtb2R1bGUgaWQgPSA5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdGltZWxpbmUgPSByZXF1aXJlKCcuL3RpbWVsaW5lJyk7XG5cbnZhciBfdGltZWxpbmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdGltZWxpbmUpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgREVGQVVMVF9JTlRFUlZBTCA9IDEwMDtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHR3ZWVucywgcHJvcHMpIHtcbiAgICB2YXIgcHJvcHNJc0R1cmF0aW9uID0gKDAsIF91dGlscy5pc051bSkocHJvcHMpO1xuICAgIHZhciBpbnRlcnZhbCA9IHByb3BzSXNEdXJhdGlvbiA/IHByb3BzIDogcHJvcHMgPyBwcm9wcy5pbnRlcnZhbCB8fCBERUZBVUxUX0lOVEVSVkFMIDogREVGQVVMVF9JTlRFUlZBTDtcbiAgICB2YXIgYXQgPSAwO1xuICAgIHZhciB0aW1lbGluZURlZmluaXRpb24gPSB0d2VlbnMubWFwKGZ1bmN0aW9uICh0d2Vlbikge1xuICAgICAgICB2YXIgZGVmID0geyB0d2VlbjogdHdlZW4sIGF0OiBhdCB9O1xuICAgICAgICBhdCArPSBpbnRlcnZhbDtcbiAgICAgICAgcmV0dXJuIGRlZjtcbiAgICB9KTtcblxuICAgIHJldHVybiAoMCwgX3RpbWVsaW5lMi5kZWZhdWx0KSh0aW1lbGluZURlZmluaXRpb24sIHByb3BzKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12YzNSaFoyZGxjaTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN08wRkJRVUU3T3pzN1FVRkRRVHM3T3p0QlFVVkJMRWxCUVUwc2JVSkJRVzFDTEVkQlFXNUNPenRyUWtGRlV5eFZRVUZETEUxQlFVUXNSVUZCVXl4TFFVRlVMRVZCUVcxQ08wRkJRemxDTEZGQlFVMHNhMEpCUVd0Q0xHdENRVUZOTEV0QlFVNHNRMEZCYkVJc1EwRkVkMEk3UVVGRk9VSXNVVUZCVFN4WFFVRlhMR3RDUVVGclFpeExRVUZzUWl4SFFVRXdRaXhSUVVGUkxFMUJRVTBzVVVGQlRpeEpRVUZyUWl4blFrRkJiRUlzUjBGQmNVTXNaMEpCUVRkRExFTkJSbUk3UVVGSE9VSXNVVUZCU1N4TFFVRkxMRU5CUVV3c1EwRklNRUk3UVVGSk9VSXNVVUZCVFN4eFFrRkJjVUlzVDBGQlR5eEhRVUZRTEVOQlFWY3NWVUZCUXl4TFFVRkVMRVZCUVZjN1FVRkROME1zV1VGQlRTeE5RVUZOTEVWQlFVVXNXVUZCUml4RlFVRlRMRTFCUVZRc1JVRkJUaXhEUVVSMVF6dEJRVVUzUXl4alFVRk5MRkZCUVU0c1EwRkdOa003UVVGSE4wTXNaVUZCVHl4SFFVRlFMRU5CU0RaRE8wdEJRVmdzUTBGQmFFTXNRMEZLZDBJN08wRkJWVGxDTEZkQlFVOHNkMEpCUVZNc2EwSkJRVlFzUlVGQk5rSXNTMEZCTjBJc1EwRkJVQ3hEUVZZNFFqdERRVUZ1UWlJc0ltWnBiR1VpT2lKemRHRm5aMlZ5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMEwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCMGFXMWxiR2x1WlNCbWNtOXRJQ2N1TDNScGJXVnNhVzVsSnp0Y2JtbHRjRzl5ZENCN0lHbHpUblZ0SUgwZ1puSnZiU0FuTGk5MWRHbHNjeWM3WEc1Y2JtTnZibk4wSUVSRlJrRlZURlJmU1U1VVJWSldRVXdnUFNBeE1EQTdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJQ2gwZDJWbGJuTXNJSEJ5YjNCektTQTlQaUI3WEc0Z0lDQWdZMjl1YzNRZ2NISnZjSE5KYzBSMWNtRjBhVzl1SUQwZ2FYTk9kVzBvY0hKdmNITXBPMXh1SUNBZ0lHTnZibk4wSUdsdWRHVnlkbUZzSUQwZ2NISnZjSE5KYzBSMWNtRjBhVzl1SUQ4Z2NISnZjSE1nT2lCd2NtOXdjeUEvSUhCeWIzQnpMbWx1ZEdWeWRtRnNJSHg4SUVSRlJrRlZURlJmU1U1VVJWSldRVXdnT2lCRVJVWkJWVXhVWDBsT1ZFVlNWa0ZNTzF4dUlDQWdJR3hsZENCaGRDQTlJREE3WEc0Z0lDQWdZMjl1YzNRZ2RHbHRaV3hwYm1WRVpXWnBibWwwYVc5dUlEMGdkSGRsWlc1ekxtMWhjQ2dvZEhkbFpXNHBJRDArSUh0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnWkdWbUlEMGdleUIwZDJWbGJpd2dZWFFnZlR0Y2JpQWdJQ0FnSUNBZ1lYUWdLejBnYVc1MFpYSjJZV3c3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJrWldZN1hHNGdJQ0FnZlNrN1hHNWNiaUFnSUNCeVpYUjFjbTRnZEdsdFpXeHBibVVvZEdsdFpXeHBibVZFWldacGJtbDBhVzl1TENCd2NtOXdjeWs3WEc1OU95SmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvc3RhZ2dlci5qc1xuICoqIG1vZHVsZSBpZCA9IDEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHRpbWVsaW5lO1xuXG52YXIgX1R3ZWVuID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9Ud2VlbicpO1xuXG52YXIgX1R3ZWVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1R3ZWVuKTtcblxudmFyIF9wcmVzZXRFYXNpbmcgPSByZXF1aXJlKCcuLi9hY3Rpb25zL2Vhc2luZy9wcmVzZXQtZWFzaW5nJyk7XG5cbnZhciBfcHJlc2V0RWFzaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ByZXNldEVhc2luZyk7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4vY2FsYycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKlxuICAgIEBwYXJhbSBbYXJyYXldXG4gICAgICAgIFNlcXVlbnRpYWwgYXJyYXkgb2YgdHdlZW5zLCBlYWNoIGl0ZW0gY2FuIGJlIGEgdHdlZW4gb3IgZGVmaW5pdGlvbiBvYmo6XG5cbiAgICAgICAgW1xuICAgICAgICAgICAgbmV3IFR3ZWVuKCksXG4gICAgICAgICAgICBzdGFnZ2VyKCksXG4gICAgICAgICAgICB0aW1lbGluZSgpLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR3ZWVuOiBuZXcgVHdlZW4oKSxcbiAgICAgICAgICAgICAgICBhdDogMTAwLFxuICAgICAgICAgICAgICAgIG9mZnNldDogXCIrPTEwMFwiXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiovXG52YXIgYW5hbHl6ZSA9IGZ1bmN0aW9uIChkZWZzKSB7XG4gICAgdmFyIHRpbWVsaW5lID0gW107XG4gICAgdmFyIG51bURlZnMgPSBkZWZzLmxlbmd0aDtcbiAgICB2YXIgY3VycmVudFBsYXloZWFkID0gMDtcblxuICAgIHZhciBfbG9vcCA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIHZhciBkZWYgPSBkZWZzW2ldO1xuICAgICAgICB2YXIgZGVmSXNPYmogPSBkZWYudHdlZW4gPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIHZhciB0d2VlbiA9IGRlZklzT2JqID8gZGVmLnR3ZWVuIDogZGVmO1xuXG4gICAgICAgIGlmIChkZWZJc09iaikge1xuICAgICAgICAgICAgaWYgKGRlZi5vZmZzZXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRQbGF5aGVhZCA9ICgwLCBfY2FsYy5yZWxhdGl2ZVZhbHVlKShjdXJyZW50UGxheWhlYWQsIGRlZi5vZmZzZXQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkZWYuYXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRQbGF5aGVhZCA9IGRlZi5hdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkdXJhdGlvbiA9IDA7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiB0d2Vlbi52YWx1ZXMpIHtcbiAgICAgICAgICAgIGlmICh0d2Vlbi52YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHR3ZWVuLnZhbHVlc1trZXldO1xuICAgICAgICAgICAgICAgIGR1cmF0aW9uID0gTWF0aC5tYXgoZHVyYXRpb24sIHZhbHVlLmR1cmF0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRpbWVsaW5lLnB1c2goe1xuICAgICAgICAgICAgZnJvbTogY3VycmVudFBsYXloZWFkLFxuICAgICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgICAgICAgZmlyZTogZnVuY3Rpb24gKHRpbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHdlZW4uc2Vla1RpbWUodGltZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGN1cnJlbnRQbGF5aGVhZCArPSBkdXJhdGlvbjtcbiAgICB9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1EZWZzOyBpKyspIHtcbiAgICAgICAgX2xvb3AoaSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgdG90YWxUaW1lOiBjdXJyZW50UGxheWhlYWQsIHRpbWVsaW5lOiB0aW1lbGluZSB9O1xufTtcblxudmFyIHNldFR3ZWVucyA9IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIHRpbWVsaW5lID0gX3JlZi50aW1lbGluZTtcbiAgICB2YXIgdGltZWxpbmVMZW5ndGggPSBfcmVmLnRpbWVsaW5lTGVuZ3RoO1xuICAgIHZhciB2YWx1ZXMgPSBfcmVmLnZhbHVlcztcbiAgICB2YXIgZHVyYXRpb24gPSBfcmVmLmR1cmF0aW9uO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aW1lbGluZUxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBfdHdlZW4gPSB0aW1lbGluZVtpXTtcbiAgICAgICAgdmFyIHR3ZWVuVGltZSA9IHZhbHVlcy5wLmN1cnJlbnQgKiBkdXJhdGlvbiAtIF90d2Vlbi5mcm9tO1xuXG4gICAgICAgIGlmICh0d2VlblRpbWUgPj0gLTUwICYmIHR3ZWVuVGltZSA8PSBfdHdlZW4uZHVyYXRpb24gKyA1MCkge1xuICAgICAgICAgICAgX3R3ZWVuLmZpcmUodHdlZW5UaW1lKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmZ1bmN0aW9uIHRpbWVsaW5lKGRlZikge1xuICAgIHZhciBwcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzFdO1xuXG4gICAgdmFyIF9hbmFseXplID0gYW5hbHl6ZShkZWYpO1xuXG4gICAgdmFyIHRvdGFsVGltZSA9IF9hbmFseXplLnRvdGFsVGltZTtcbiAgICB2YXIgdGltZWxpbmUgPSBfYW5hbHl6ZS50aW1lbGluZTtcblxuXG4gICAgcmV0dXJuIG5ldyBfVHdlZW4yLmRlZmF1bHQoX2V4dGVuZHMoe1xuICAgICAgICBlYXNlOiBfcHJlc2V0RWFzaW5nMi5kZWZhdWx0LmxpbmVhclxuICAgIH0sIHByb3BzLCB7XG4gICAgICAgIGR1cmF0aW9uOiB0b3RhbFRpbWUsXG4gICAgICAgIHZhbHVlczoge1xuICAgICAgICAgICAgcDogMVxuICAgICAgICB9LFxuICAgICAgICB0aW1lbGluZTogdGltZWxpbmUsXG4gICAgICAgIHRpbWVsaW5lTGVuZ3RoOiB0aW1lbGluZS5sZW5ndGgsXG4gICAgICAgIG9uUmVuZGVyOiBzZXRUd2VlbnNcbiAgICB9KSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12ZEdsdFpXeHBibVV1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPMnRDUVc5RmQwSTdPMEZCY0VWNFFqczdPenRCUVVOQk96czdPMEZCUTBFN096czdPenM3T3pzN096czdPenM3T3pzN1FVRnBRa0VzU1VGQlRTeFZRVUZWTEZWQlFVTXNTVUZCUkN4RlFVRlZPMEZCUTNSQ0xGRkJRVTBzVjBGQlZ5eEZRVUZZTEVOQlJHZENPMEZCUlhSQ0xGRkJRVTBzVlVGQlZTeExRVUZMTEUxQlFVd3NRMEZHVFR0QlFVZDBRaXhSUVVGSkxHdENRVUZyUWl4RFFVRnNRaXhEUVVoclFqczdNRUpCUzJJN1FVRkRUQ3haUVVGTkxFMUJRVTBzUzBGQlN5eERRVUZNTEVOQlFVNDdRVUZEVGl4WlFVRk5MRmRCUVZjc1NVRkJTU3hMUVVGS0xFZEJRVmtzU1VGQldpeEhRVUZ0UWl4TFFVRnVRanRCUVVOcVFpeFpRVUZOTEZGQlFWRXNWMEZCWVN4SlFVRkpMRXRCUVVvc1IwRkJXU3hIUVVGNlFqczdRVUZGWkN4WlFVRkpMRkZCUVVvc1JVRkJZenRCUVVOV0xHZENRVUZKTEVsQlFVa3NUVUZCU2l4TFFVRmxMRk5CUVdZc1JVRkJNRUk3UVVGRE1VSXNhME5CUVd0Q0xIbENRVUZqTEdWQlFXUXNSVUZCSzBJc1NVRkJTU3hOUVVGS0xFTkJRV3BFTEVOQlJEQkNPMkZCUVRsQ0xFMUJSVThzU1VGQlNTeEpRVUZKTEVWQlFVb3NTMEZCVnl4VFFVRllMRVZCUVhOQ08wRkJRemRDTEd0RFFVRnJRaXhKUVVGSkxFVkJRVW9zUTBGRVZ6dGhRVUV4UWp0VFFVaFlPenRCUVZGQkxGbEJRVWtzVjBGQlZ5eERRVUZZTzBGQlEwb3NZVUZCU3l4SlFVRkpMRWRCUVVvc1NVRkJWeXhOUVVGTkxFMUJRVTRzUlVGQll6dEJRVU14UWl4blFrRkJTU3hOUVVGTkxFMUJRVTRzUTBGQllTeGpRVUZpTEVOQlFUUkNMRWRCUVRWQ0xFTkJRVW9zUlVGQmMwTTdRVUZEYkVNc2IwSkJRVTBzVVVGQlVTeE5RVUZOTEUxQlFVNHNRMEZCWVN4SFFVRmlMRU5CUVZJc1EwRkVORUk3UVVGRmJFTXNNa0pCUVZjc1MwRkJTeXhIUVVGTUxFTkJRVk1zVVVGQlZDeEZRVUZ0UWl4TlFVRk5MRkZCUVU0c1EwRkJPVUlzUTBGR2EwTTdZVUZCZEVNN1UwRkVTanM3UVVGUFFTeHBRa0ZCVXl4SlFVRlVMRU5CUVdNN1FVRkRWaXhyUWtGQlRTeGxRVUZPTzBGQlEwRXNjMEpCUVZVc1VVRkJWanRCUVVOQkxHdENRVUZOTEZWQlFVTXNTVUZCUkR0MVFrRkJWU3hOUVVGTkxGRkJRVTRzUTBGQlpTeEpRVUZtTzJGQlFWWTdVMEZJVmpzN1FVRk5RU3d5UWtGQmJVSXNVVUZCYmtJN1RVRm9RMnRDT3p0QlFVdDBRaXhUUVVGTExFbEJRVWtzU1VGQlNTeERRVUZLTEVWQlFVOHNTVUZCU1N4UFFVRktMRVZCUVdFc1IwRkJOMElzUlVGQmEwTTdZMEZCZWtJc1IwRkJlVUk3UzBGQmJFTTdPMEZCT0VKQkxGZEJRVThzUlVGQlJTeFhRVUZYTEdWQlFWZ3NSVUZCTkVJc2EwSkJRVGxDTEVWQlFWQXNRMEZ1UTNOQ08wTkJRVlk3TzBGQmMwTm9RaXhKUVVGTkxGbEJRVmtzWjBKQlFXOUVPMUZCUVdwRUxIbENRVUZwUkR0UlFVRjJReXh4UTBGQmRVTTdVVUZCZGtJc2NVSkJRWFZDTzFGQlFXWXNlVUpCUVdVN08wRkJRMnhGTEZOQlFVc3NTVUZCU1N4SlFVRkpMRU5CUVVvc1JVRkJUeXhKUVVGSkxHTkJRVW9zUlVGQmIwSXNSMEZCY0VNc1JVRkJlVU03UVVGRGNrTXNXVUZCVFN4VFFVRlJMRk5CUVZNc1EwRkJWQ3hEUVVGU0xFTkJSQ3RDTzBGQlJYSkRMRmxCUVUwc1dVRkJXU3hOUVVGRExFTkJRVThzUTBGQlVDeERRVUZUTEU5QlFWUXNSMEZCYlVJc1VVRkJia0lzUjBGQkswSXNUMEZCVFN4SlFVRk9MRU5CUm1JN08wRkJTWEpETEZsQlFVa3NZVUZCWVN4RFFVRkRMRVZCUVVRc1NVRkJUeXhoUVVGaExFOUJRVTBzVVVGQlRpeEhRVUZwUWl4RlFVRnFRaXhGUVVGeFFqdEJRVU4wUkN4dFFrRkJUU3hKUVVGT0xFTkJRVmNzVTBGQldDeEZRVVJ6UkR0VFFVRXhSRHRMUVVwS08wTkJSR003TzBGQlYwZ3NVMEZCVXl4UlFVRlVMRU5CUVd0Q0xFZEJRV3hDTEVWQlFXMURPMUZCUVZvc09FUkJRVkVzYTBKQlFVazdPMjFDUVVOa0xGRkJRVkVzUjBGQlVpeEZRVVJqT3p0UlFVTjBReXdyUWtGRWMwTTdVVUZETTBJc05rSkJSREpDT3pzN1FVRkhPVU1zVjBGQlR6dEJRVU5JTEdOQlFVMHNkVUpCUVU4c1RVRkJVRHRQUVVOSU8wRkJRMGdzYTBKQlFWVXNVMEZCVmp0QlFVTkJMR2RDUVVGUk8wRkJRMG9zWlVGQlJ5eERRVUZJTzFOQlJFbzdRVUZIUVN4clFrRkJWU3hSUVVGV08wRkJRMEVzZDBKQlFXZENMRk5CUVZNc1RVRkJWRHRCUVVOb1FpeHJRa0ZCVlN4VFFVRldPMDFCVkVjc1EwRkJVQ3hEUVVnNFF6dERRVUZ1UXlJc0ltWnBiR1VpT2lKMGFXMWxiR2x1WlM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRDOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1ZIZGxaVzRnWm5KdmJTQW5MaTR2WVdOMGFXOXVjeTlVZDJWbGJpYzdYRzVwYlhCdmNuUWdaV0Z6YVc1bklHWnliMjBnSnk0dUwyRmpkR2x2Ym5NdlpXRnphVzVuTDNCeVpYTmxkQzFsWVhOcGJtY25PMXh1YVcxd2IzSjBJSHNnY21Wc1lYUnBkbVZXWVd4MVpTQjlJR1p5YjIwZ0p5NHZZMkZzWXljN1hHNWNiaThxWEc0Z0lDQWdRSEJoY21GdElGdGhjbkpoZVYxY2JpQWdJQ0FnSUNBZ1UyVnhkV1Z1ZEdsaGJDQmhjbkpoZVNCdlppQjBkMlZsYm5Nc0lHVmhZMmdnYVhSbGJTQmpZVzRnWW1VZ1lTQjBkMlZsYmlCdmNpQmtaV1pwYm1sMGFXOXVJRzlpYWpwY2JseHVJQ0FnSUNBZ0lDQmJYRzRnSUNBZ0lDQWdJQ0FnSUNCdVpYY2dWSGRsWlc0b0tTeGNiaUFnSUNBZ0lDQWdJQ0FnSUhOMFlXZG5aWElvS1N4Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJwYldWc2FXNWxLQ2tzWEc0Z0lDQWdJQ0FnSUNBZ0lDQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkSGRsWlc0NklHNWxkeUJVZDJWbGJpZ3BMRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR0YwT2lBeE1EQXNYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdiMlptYzJWME9pQmNJaXM5TVRBd1hDSmNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ1hWeHVLaTljYm1OdmJuTjBJR0Z1WVd4NWVtVWdQU0FvWkdWbWN5a2dQVDRnZTF4dUlDQWdJR052Ym5OMElIUnBiV1ZzYVc1bElEMGdXMTA3WEc0Z0lDQWdZMjl1YzNRZ2JuVnRSR1ZtY3lBOUlHUmxabk11YkdWdVozUm9PMXh1SUNBZ0lHeGxkQ0JqZFhKeVpXNTBVR3hoZVdobFlXUWdQU0F3TzF4dVhHNGdJQ0FnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCdWRXMUVaV1p6T3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdaR1ZtSUQwZ1pHVm1jMXRwWFR0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnWkdWbVNYTlBZbW9nUFNCa1pXWXVkSGRsWlc0Z1B5QjBjblZsSURvZ1ptRnNjMlU3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJSFIzWldWdUlEMGdLR1JsWmtselQySnFLU0EvSUdSbFppNTBkMlZsYmlBNklHUmxaanRjYmx4dUlDQWdJQ0FnSUNCcFppQW9aR1ZtU1hOUFltb3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hrWldZdWIyWm1jMlYwSUNFOVBTQjFibVJsWm1sdVpXUXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqZFhKeVpXNTBVR3hoZVdobFlXUWdQU0J5Wld4aGRHbDJaVlpoYkhWbEtHTjFjbkpsYm5SUWJHRjVhR1ZoWkN3Z1pHVm1MbTltWm5ObGRDazdYRzRnSUNBZ0lDQWdJQ0FnSUNCOUlHVnNjMlVnYVdZZ0tHUmxaaTVoZENBaFBUMGdkVzVrWldacGJtVmtLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTNWeWNtVnVkRkJzWVhsb1pXRmtJRDBnWkdWbUxtRjBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnYkdWMElHUjFjbUYwYVc5dUlEMGdNRHRjYmlBZ0lDQWdJQ0FnWm05eUlDaHNaWFFnYTJWNUlHbHVJSFIzWldWdUxuWmhiSFZsY3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIUjNaV1Z1TG5aaGJIVmxjeTVvWVhOUGQyNVFjbTl3WlhKMGVTaHJaWGtwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnZG1Gc2RXVWdQU0IwZDJWbGJpNTJZV3gxWlhOYmEyVjVYVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JrZFhKaGRHbHZiaUE5SUUxaGRHZ3ViV0Y0S0dSMWNtRjBhVzl1TENCMllXeDFaUzVrZFhKaGRHbHZiaWs3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCMGFXMWxiR2x1WlM1d2RYTm9LSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHWnliMjA2SUdOMWNuSmxiblJRYkdGNWFHVmhaQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lHUjFjbUYwYVc5dU9pQmtkWEpoZEdsdmJpeGNiaUFnSUNBZ0lDQWdJQ0FnSUdacGNtVTZJQ2gwYVcxbEtTQTlQaUIwZDJWbGJpNXpaV1ZyVkdsdFpTaDBhVzFsS1Z4dUlDQWdJQ0FnSUNCOUtUdGNibHh1SUNBZ0lDQWdJQ0JqZFhKeVpXNTBVR3hoZVdobFlXUWdLejBnWkhWeVlYUnBiMjQ3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjbVYwZFhKdUlIc2dkRzkwWVd4VWFXMWxPaUJqZFhKeVpXNTBVR3hoZVdobFlXUXNJSFJwYldWc2FXNWxJSDA3WEc1OU8xeHVYRzVqYjI1emRDQnpaWFJVZDJWbGJuTWdQU0FvZXlCMGFXMWxiR2x1WlN3Z2RHbHRaV3hwYm1WTVpXNW5kR2dzSUhaaGJIVmxjeXdnWkhWeVlYUnBiMjRnZlNrZ1BUNGdlMXh1SUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2dkR2x0Wld4cGJtVk1aVzVuZEdnN0lHa3JLeWtnZTF4dUlDQWdJQ0FnSUNCamIyNXpkQ0IwZDJWbGJpQTlJSFJwYldWc2FXNWxXMmxkTzF4dUlDQWdJQ0FnSUNCamIyNXpkQ0IwZDJWbGJsUnBiV1VnUFNBb2RtRnNkV1Z6TG5BdVkzVnljbVZ1ZENBcUlHUjFjbUYwYVc5dUtTQXRJSFIzWldWdUxtWnliMjA3WEc1Y2JpQWdJQ0FnSUNBZ2FXWWdLSFIzWldWdVZHbHRaU0ErUFNBdE5UQWdKaVlnZEhkbFpXNVVhVzFsSUR3OUlIUjNaV1Z1TG1SMWNtRjBhVzl1SUNzZ05UQXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUjNaV1Z1TG1acGNtVW9kSGRsWlc1VWFXMWxLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYm4wN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHWjFibU4wYVc5dUlIUnBiV1ZzYVc1bEtHUmxaaXdnY0hKdmNITWdQU0I3ZlNrZ2UxeHVJQ0FnSUdOdmJuTjBJSHNnZEc5MFlXeFVhVzFsTENCMGFXMWxiR2x1WlNCOUlEMGdZVzVoYkhsNlpTaGtaV1lwTzF4dVhHNGdJQ0FnY21WMGRYSnVJRzVsZHlCVWQyVmxiaWg3WEc0Z0lDQWdJQ0FnSUdWaGMyVTZJR1ZoYzJsdVp5NXNhVzVsWVhJc1hHNGdJQ0FnSUNBZ0lDNHVMbkJ5YjNCekxGeHVJQ0FnSUNBZ0lDQmtkWEpoZEdsdmJqb2dkRzkwWVd4VWFXMWxMRnh1SUNBZ0lDQWdJQ0IyWVd4MVpYTTZJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIQTZJREZjYmlBZ0lDQWdJQ0FnZlN4Y2JpQWdJQ0FnSUNBZ2RHbHRaV3hwYm1VNklIUnBiV1ZzYVc1bExGeHVJQ0FnSUNBZ0lDQjBhVzFsYkdsdVpVeGxibWQwYURvZ2RHbHRaV3hwYm1VdWJHVnVaM1JvTEZ4dUlDQWdJQ0FnSUNCdmJsSmxibVJsY2pvZ2MyVjBWSGRsWlc1elhHNGdJQ0FnZlNrN1hHNTlJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvdGltZWxpbmUuanNcbiAqKiBtb2R1bGUgaWQgPSAxMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vKlxuICAgIE92ZXJyaWRlIGBnZXR0ZXJgIGFuZCBgc2V0dGVyYCB0byByZWltcGxlbWVudCB0aGUgaW50ZXJmYWNlIGZvciBuZXcgZWxlbWVudCB0eXBlcy5cblxuICAgIFNldCBgLnN0YXRlTWFwYCBhcyBhbiBvYmplY3Qga2V5L3ZhbHVlIG1hcCB0byB0cmFuc2xhdGUgaW5jb21pbmcga2V5cyB0b1xuICAgIEFQSS1zcGVjaWZpYyBrZXlzLiBGb3IgaW5zdGFuY2UsIHsgeDogJ3RyYW5zbGF0ZVgnIH0uIFxuXG4gICAgU2V0IGAudmFsdWVUeXBlTWFwYCBhcyBhbiBvYmplY3Qga2V5L3ZhbHVlIG1hcCB0byByZXR1cm4gYSB2YWx1ZSB0eXBlIHdpdGhcbiAgICBgZ2V0VmFsdWVUeXBlKGtleSlgIChrZXkgd2lsbCBiZSBtYXBwZWQgYWNjb3JkaW5nIHRvIGBzdGF0ZU1hcGApXG4qL1xuXG52YXIgbWFwS2V5ID0gZnVuY3Rpb24gKGtleSwgbWFwKSB7XG4gICAgcmV0dXJuIG1hcCA/IG1hcFtrZXldIHx8IGtleSA6IGtleTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgLypcbiAgICAgICAgQWRhcHRlciBpcyBzZXR0ZXIgZnVuY3Rpb25cbiAgICAgICAgIEBwYXJhbSBbb2JqZWN0XTogT2JqZWN0IHRvIHNldCBwcm9wZXJ0aWVzIG9uXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogS2V5L3ZhbHVlIHByb3BlcnRpZXMgdG8gc2V0XG4gICAgKi9cbiAgICB2YXIgYWRhcHRlciA9IGZ1bmN0aW9uIChlbGVtZW50LCBwcm9wcywgZGF0YSkge1xuICAgICAgICBpZiAob3B0aW9ucy5zdGF0ZU1hcCkge1xuICAgICAgICAgICAgLy8gVHJhbnNsYXRlIHByb3BzXG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWFwcGVkS2V5ID0gbWFwS2V5KGtleSwgb3B0aW9ucy5zdGF0ZU1hcCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hcHBlZEtleSAhPT0ga2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wc1ttYXBwZWRLZXldID0gcHJvcHNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBwcm9wc1trZXldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG9wdGlvbnMuc2V0dGVyKGVsZW1lbnQsIHByb3BzLCBkYXRhKTtcbiAgICB9O1xuXG4gICAgYWRhcHRlci5nZXQgPSBmdW5jdGlvbiAoZWxlbWVudCwga2V5KSB7XG4gICAgICAgIHJldHVybiBvcHRpb25zLmdldHRlcihlbGVtZW50LCBtYXBLZXkoa2V5LCBvcHRpb25zLnN0YXRlTWFwKSk7XG4gICAgfTtcbiAgICBhZGFwdGVyLmNoZWNrVmFsdWVUeXBlID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4gb3B0aW9ucy52YWx1ZVR5cGVNYXAgPyBvcHRpb25zLnZhbHVlVHlwZU1hcFttYXBLZXkoa2V5LCBvcHRpb25zLnN0YXRlTWFwKV0gOiBmYWxzZTtcbiAgICB9O1xuICAgIGFkYXB0ZXIuZ2V0RWxlbWVudERhdGEgPSBvcHRpb25zLmdldEVsZW1lbnREYXRhO1xuXG4gICAgcmV0dXJuIGFkYXB0ZXI7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMMkZrWVhCMFpYSXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenM3T3p0QlFWVkJMRWxCUVUwc1UwRkJVeXhWUVVGRExFZEJRVVFzUlVGQlRTeEhRVUZPTzFkQlFXTXNUVUZCVFN4SlFVRkpMRWRCUVVvc1MwRkJXU3hIUVVGYUxFZEJRV3RDTEVkQlFYaENPME5CUVdRN08ydENRVVZCTEZWQlFVTXNUMEZCUkN4RlFVRmhPenM3T3pzN1FVRlBlRUlzVVVGQlRTeFZRVUZWTEZWQlFVTXNUMEZCUkN4RlFVRlZMRXRCUVZZc1JVRkJhVUlzU1VGQmFrSXNSVUZCTUVJN1FVRkRkRU1zV1VGQlNTeFJRVUZSTEZGQlFWSXNSVUZCYTBJN08wRkJSV3hDTEdsQ1FVRkxMRWxCUVVrc1IwRkJTaXhKUVVGWExFdEJRV2hDTEVWQlFYVkNPMEZCUTI1Q0xHOUNRVUZKTEUxQlFVMHNZMEZCVGl4RFFVRnhRaXhIUVVGeVFpeERRVUZLTEVWQlFTdENPMEZCUXpOQ0xIZENRVUZOTEZsQlFWa3NUMEZCVHl4SFFVRlFMRVZCUVZrc1VVRkJVU3hSUVVGU0xFTkJRWGhDTEVOQlJIRkNPenRCUVVjelFpeDNRa0ZCU1N4alFVRmpMRWRCUVdRc1JVRkJiVUk3UVVGRGJrSXNPRUpCUVUwc1UwRkJUaXhKUVVGdFFpeE5RVUZOTEVkQlFVNHNRMEZCYmtJc1EwRkViVUk3UVVGRmJrSXNLMEpCUVU4c1RVRkJUU3hIUVVGT0xFTkJRVkFzUTBGR2JVSTdjVUpCUVhaQ08ybENRVWhLTzJGQlJFbzdVMEZHU2pzN1FVRmpRU3hsUVVGUExGRkJRVkVzVFVGQlVpeERRVUZsTEU5QlFXWXNSVUZCZDBJc1MwRkJlRUlzUlVGQkswSXNTVUZCTDBJc1EwRkJVQ3hEUVdaelF6dExRVUV4UWl4RFFWQlJPenRCUVhsQ2VFSXNXVUZCVVN4SFFVRlNMRWRCUVdNc1ZVRkJReXhQUVVGRUxFVkJRVlVzUjBGQlZqdGxRVUZyUWl4UlFVRlJMRTFCUVZJc1EwRkJaU3hQUVVGbUxFVkJRWGRDTEU5QlFVOHNSMEZCVUN4RlFVRlpMRkZCUVZFc1VVRkJVaXhEUVVGd1F6dExRVUZzUWl4RFFYcENWVHRCUVRCQ2VFSXNXVUZCVVN4alFVRlNMRWRCUVhsQ0xGVkJRVU1zUjBGQlJEdGxRVUZUTEZGQlFWRXNXVUZCVWl4SFFVRjFRaXhSUVVGUkxGbEJRVklzUTBGQmNVSXNUMEZCVHl4SFFVRlFMRVZCUVZrc1VVRkJVU3hSUVVGU0xFTkJRV3BETEVOQlFYWkNMRWRCUVRaRkxFdEJRVGRGTzB0QlFWUXNRMEV4UWtRN1FVRXlRbmhDTEZsQlFWRXNZMEZCVWl4SFFVRjVRaXhSUVVGUkxHTkJRVklzUTBFelFrUTdPMEZCTmtKNFFpeFhRVUZQTEU5QlFWQXNRMEUzUW5kQ08wTkJRV0lpTENKbWFXeGxJam9pWVdSaGNIUmxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJdktseHVJQ0FnSUU5MlpYSnlhV1JsSUdCblpYUjBaWEpnSUdGdVpDQmdjMlYwZEdWeVlDQjBieUJ5WldsdGNHeGxiV1Z1ZENCMGFHVWdhVzUwWlhKbVlXTmxJR1p2Y2lCdVpYY2daV3hsYldWdWRDQjBlWEJsY3k1Y2JseHVJQ0FnSUZObGRDQmdMbk4wWVhSbFRXRndZQ0JoY3lCaGJpQnZZbXBsWTNRZ2EyVjVMM1poYkhWbElHMWhjQ0IwYnlCMGNtRnVjMnhoZEdVZ2FXNWpiMjFwYm1jZ2EyVjVjeUIwYjF4dUlDQWdJRUZRU1MxemNHVmphV1pwWXlCclpYbHpMaUJHYjNJZ2FXNXpkR0Z1WTJVc0lIc2dlRG9nSjNSeVlXNXpiR0YwWlZnbklIMHVJRnh1WEc0Z0lDQWdVMlYwSUdBdWRtRnNkV1ZVZVhCbFRXRndZQ0JoY3lCaGJpQnZZbXBsWTNRZ2EyVjVMM1poYkhWbElHMWhjQ0IwYnlCeVpYUjFjbTRnWVNCMllXeDFaU0IwZVhCbElIZHBkR2hjYmlBZ0lDQmdaMlYwVm1Gc2RXVlVlWEJsS0d0bGVTbGdJQ2hyWlhrZ2QybHNiQ0JpWlNCdFlYQndaV1FnWVdOamIzSmthVzVuSUhSdklHQnpkR0YwWlUxaGNHQXBYRzRxTDF4dVhHNWpiMjV6ZENCdFlYQkxaWGtnUFNBb2EyVjVMQ0J0WVhBcElEMCtJRzFoY0NBL0lHMWhjRnRyWlhsZElIeDhJR3RsZVNBNklHdGxlVHRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnS0c5d2RHbHZibk1wSUQwK0lIdGNiaUFnSUNBdktseHVJQ0FnSUNBZ0lDQkJaR0Z3ZEdWeUlHbHpJSE5sZEhSbGNpQm1kVzVqZEdsdmJseHVYRzRnSUNBZ0lDQWdJRUJ3WVhKaGJTQmJiMkpxWldOMFhUb2dUMkpxWldOMElIUnZJSE5sZENCd2NtOXdaWEowYVdWeklHOXVYRzRnSUNBZ0lDQWdJRUJ3WVhKaGJTQmJiMkpxWldOMFhUb2dTMlY1TDNaaGJIVmxJSEJ5YjNCbGNuUnBaWE1nZEc4Z2MyVjBYRzRnSUNBZ0tpOWNiaUFnSUNCamIyNXpkQ0JoWkdGd2RHVnlJRDBnS0dWc1pXMWxiblFzSUhCeWIzQnpMQ0JrWVhSaEtTQTlQaUI3WEc0Z0lDQWdJQ0FnSUdsbUlDaHZjSFJwYjI1ekxuTjBZWFJsVFdGd0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QlVjbUZ1YzJ4aGRHVWdjSEp2Y0hOY2JpQWdJQ0FnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR3RsZVNCcGJpQndjbTl3Y3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2h3Y205d2N5NW9ZWE5QZDI1UWNtOXdaWEowZVNoclpYa3BLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUcxaGNIQmxaRXRsZVNBOUlHMWhjRXRsZVNoclpYa3NJRzl3ZEdsdmJuTXVjM1JoZEdWTllYQXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0cxaGNIQmxaRXRsZVNBaFBUMGdhMlY1S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCd2NtOXdjMXR0WVhCd1pXUkxaWGxkSUQwZ2NISnZjSE5iYTJWNVhUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHUmxiR1YwWlNCd2NtOXdjMXRyWlhsZE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUc5d2RHbHZibk11YzJWMGRHVnlLR1ZzWlcxbGJuUXNJSEJ5YjNCekxDQmtZWFJoS1R0Y2JpQWdJQ0I5TzF4dVhHNGdJQ0FnWVdSaGNIUmxjaTVuWlhRZ1BTQW9aV3hsYldWdWRDd2dhMlY1S1NBOVBpQnZjSFJwYjI1ekxtZGxkSFJsY2lobGJHVnRaVzUwTENCdFlYQkxaWGtvYTJWNUxDQnZjSFJwYjI1ekxuTjBZWFJsVFdGd0tTazdYRzRnSUNBZ1lXUmhjSFJsY2k1amFHVmphMVpoYkhWbFZIbHdaU0E5SUNoclpYa3BJRDArSUc5d2RHbHZibk11ZG1Gc2RXVlVlWEJsVFdGd0lEOGdiM0IwYVc5dWN5NTJZV3gxWlZSNWNHVk5ZWEJiYldGd1MyVjVLR3RsZVN3Z2IzQjBhVzl1Y3k1emRHRjBaVTFoY0NsZElEb2dabUZzYzJVN1hHNGdJQ0FnWVdSaGNIUmxjaTVuWlhSRmJHVnRaVzUwUkdGMFlTQTlJRzl3ZEdsdmJuTXVaMlYwUld4bGJXVnVkRVJoZEdFN1hHNWNiaUFnSUNCeVpYUjFjbTRnWVdSaGNIUmxjanRjYm4wN0lsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FkYXB0ZXIvYWRhcHRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDEyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnNldHRlciA9IGV4cG9ydHMuZ2V0dGVyID0gdW5kZWZpbmVkO1xuXG52YXIgX2FkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXInKTtcblxudmFyIF9hZGFwdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FkYXB0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgZ2V0dGVyID0gZXhwb3J0cy5nZXR0ZXIgPSBmdW5jdGlvbiAoZWxlbWVudCwga2V5KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKGtleSk7XG59O1xudmFyIHNldHRlciA9IGV4cG9ydHMuc2V0dGVyID0gZnVuY3Rpb24gKGVsZW1lbnQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHByb3BzW2tleV0pO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gKDAsIF9hZGFwdGVyMi5kZWZhdWx0KSh7IGdldHRlcjogZ2V0dGVyLCBzZXR0ZXI6IHNldHRlciB9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFpHRndkR1Z5TDJGMGRISXRZV1JoY0hSbGNpNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3p0QlFVRkJPenM3T3pzN1FVRkZUeXhKUVVGTkxEQkNRVUZUTEZWQlFVTXNUMEZCUkN4RlFVRlZMRWRCUVZZN1YwRkJhMElzVVVGQlVTeFpRVUZTTEVOQlFYRkNMRWRCUVhKQ08wTkJRV3hDTzBGQlEyWXNTVUZCVFN3d1FrRkJVeXhWUVVGRExFOUJRVVFzUlVGQlZTeExRVUZXTEVWQlFXOUNPMEZCUTNSRExGTkJRVXNzU1VGQlNTeEhRVUZLTEVsQlFWY3NTMEZCYUVJc1JVRkJkVUk3UVVGRGJrSXNXVUZCU1N4TlFVRk5MR05CUVU0c1EwRkJjVUlzUjBGQmNrSXNRMEZCU2l4RlFVRXJRanRCUVVNelFpeHZRa0ZCVVN4WlFVRlNMRU5CUVhGQ0xFZEJRWEpDTEVWQlFUQkNMRTFCUVUwc1IwRkJUaXhEUVVFeFFpeEZRVVF5UWp0VFFVRXZRanRMUVVSS08wTkJSR3RDT3p0clFrRlJVQ3gxUWtGQll5eEZRVUZGTEdOQlFVWXNSVUZCVlN4alFVRldMRVZCUVdRaUxDSm1hV3hsSWpvaVlYUjBjaTFoWkdGd2RHVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwTDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0JqY21WaGRHVkJaR0Z3ZEdWeUlHWnliMjBnSnk0dllXUmhjSFJsY2ljN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCblpYUjBaWElnUFNBb1pXeGxiV1Z1ZEN3Z2EyVjVLU0E5UGlCbGJHVnRaVzUwTG1kbGRFRjBkSEpwWW5WMFpTaHJaWGtwTzF4dVpYaHdiM0owSUdOdmJuTjBJSE5sZEhSbGNpQTlJQ2hsYkdWdFpXNTBMQ0J3Y205d2N5a2dQVDRnZTF4dUlDQWdJR1p2Y2lBb2JHVjBJR3RsZVNCcGJpQndjbTl3Y3lrZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvY0hKdmNITXVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2EyVjVLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdaV3hsYldWdWRDNXpaWFJCZEhSeWFXSjFkR1VvYTJWNUxDQndjbTl3YzF0clpYbGRLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYm4wN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHTnlaV0YwWlVGa1lYQjBaWElvZXlCblpYUjBaWElzSUhObGRIUmxjaUI5S1R0Y2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hZGFwdGVyL2F0dHItYWRhcHRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDEzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfc3RhdGVNYXAgPSByZXF1aXJlKCcuL2Nzcy9zdGF0ZS1tYXAnKTtcblxudmFyIF9zdGF0ZU1hcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdGF0ZU1hcCk7XG5cbnZhciBfdmFsdWVUeXBlTWFwID0gcmVxdWlyZSgnLi9jc3MvdmFsdWUtdHlwZS1tYXAnKTtcblxudmFyIF92YWx1ZVR5cGVNYXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdmFsdWVUeXBlTWFwKTtcblxudmFyIF9idWlsZCA9IHJlcXVpcmUoJy4vY3NzL2J1aWxkJyk7XG5cbnZhciBfYnVpbGQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYnVpbGQpO1xuXG52YXIgX3ByZWZpeGVyID0gcmVxdWlyZSgnLi9jc3MvcHJlZml4ZXInKTtcblxudmFyIF9wcmVmaXhlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmVmaXhlcik7XG5cbnZhciBfdHJhbnNmb3JtUHJvcHMgPSByZXF1aXJlKCcuL2Nzcy90cmFuc2Zvcm0tcHJvcHMnKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2Zvcm1Qcm9wcyk7XG5cbnZhciBfYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcicpO1xuXG52YXIgX2FkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWRhcHRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9ICgwLCBfYWRhcHRlcjIuZGVmYXVsdCkoe1xuICAgIGdldHRlcjogZnVuY3Rpb24gKGVsZW1lbnQsIGtleSkge1xuICAgICAgICByZXR1cm4gIV90cmFuc2Zvcm1Qcm9wczIuZGVmYXVsdFtrZXldID8gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCwgbnVsbClbKDAsIF9wcmVmaXhlcjIuZGVmYXVsdCkoa2V5KV0gOiBfdmFsdWVUeXBlTWFwMi5kZWZhdWx0W2tleV0uZGVmYXVsdFByb3BzLmN1cnJlbnQgfHwgMDtcbiAgICB9LFxuICAgIHNldHRlcjogZnVuY3Rpb24gKGVsZW1lbnQsIHByb3BzKSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LnN0eWxlLmNzc1RleHQgKz0gKDAsIF9idWlsZDIuZGVmYXVsdCkocHJvcHMpO1xuICAgIH0sXG4gICAgdmFsdWVUeXBlTWFwOiBfdmFsdWVUeXBlTWFwMi5kZWZhdWx0LFxuICAgIHN0YXRlTWFwOiBfc3RhdGVNYXAyLmRlZmF1bHRcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMMk56Y3kxaFpHRndkR1Z5TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdRVUZCUVRzN096dEJRVU5CT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3TzBGQlEwRTdPenM3T3p0clFrRkZaU3gxUWtGQll6dEJRVU42UWl4WlFVRlJMRlZCUVVNc1QwRkJSQ3hGUVVGVkxFZEJRVllzUlVGQmEwSTdRVUZEZEVJc1pVRkJUeXhEUVVGRkxIbENRVUZsTEVkQlFXWXNRMEZCUkN4SFFVTktMRTlCUVU4c1owSkJRVkFzUTBGQmQwSXNUMEZCZUVJc1JVRkJhVU1zU1VGQmFrTXNSVUZCZFVNc2QwSkJRVk1zUjBGQlZDeERRVUYyUXl4RFFVUkhMRWRCUlVnc2RVSkJRV0VzUjBGQllpeEZRVUZyUWl4WlFVRnNRaXhEUVVFclFpeFBRVUV2UWl4SlFVRXdReXhEUVVFeFF5eERRVWhyUWp0TFFVRnNRanRCUVV0U0xGbEJRVkVzVlVGQlF5eFBRVUZFTEVWQlFWVXNTMEZCVmp0bFFVRnZRaXhSUVVGUkxFdEJRVklzUTBGQll5eFBRVUZrTEVsQlFYbENMSEZDUVVGdlFpeExRVUZ3UWl4RFFVRjZRanRMUVVGd1FqdEJRVU5TTEhkRFFWQjVRanRCUVZGNlFpeG5RMEZTZVVJN1EwRkJaQ0lzSW1acGJHVWlPaUpqYzNNdFlXUmhjSFJsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRDOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2MzUmhkR1ZOWVhBZ1puSnZiU0FuTGk5amMzTXZjM1JoZEdVdGJXRndKenRjYm1sdGNHOXlkQ0IyWVd4MVpWUjVjR1ZOWVhBZ1puSnZiU0FuTGk5amMzTXZkbUZzZFdVdGRIbHdaUzF0WVhBbk8xeHVhVzF3YjNKMElHSjFhV3hrVUhKdmNHVnlkSGxUZEhKcGJtY2dabkp2YlNBbkxpOWpjM012WW5WcGJHUW5PMXh1YVcxd2IzSjBJSEJ5WldacGVHVnlJR1p5YjIwZ0p5NHZZM056TDNCeVpXWnBlR1Z5Snp0Y2JtbHRjRzl5ZENCMGNtRnVjMlp2Y20xUWNtOXdjeUJtY205dElDY3VMMk56Y3k5MGNtRnVjMlp2Y20wdGNISnZjSE1uTzF4dWFXMXdiM0owSUdOeVpXRjBaVUZrWVhCMFpYSWdabkp2YlNBbkxpOWhaR0Z3ZEdWeUp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdZM0psWVhSbFFXUmhjSFJsY2loN1hHNGdJQ0FnWjJWMGRHVnlPaUFvWld4bGJXVnVkQ3dnYTJWNUtTQTlQaUI3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUFvSVhSeVlXNXpabTl5YlZCeWIzQnpXMnRsZVYwcElEOWNiaUFnSUNBZ0lDQWdJQ0FnSUhkcGJtUnZkeTVuWlhSRGIyMXdkWFJsWkZOMGVXeGxLR1ZzWlcxbGJuUXNJRzUxYkd3cFczQnlaV1pwZUdWeUtHdGxlU2xkSURwY2JpQWdJQ0FnSUNBZ0lDQWdJSFpoYkhWbFZIbHdaVTFoY0Z0clpYbGRMbVJsWm1GMWJIUlFjbTl3Y3k1amRYSnlaVzUwSUh4OElEQTdYRzRnSUNBZ2ZTeGNiaUFnSUNCelpYUjBaWEk2SUNobGJHVnRaVzUwTENCd2NtOXdjeWtnUFQ0Z1pXeGxiV1Z1ZEM1emRIbHNaUzVqYzNOVVpYaDBJQ3M5SUdKMWFXeGtVSEp2Y0dWeWRIbFRkSEpwYm1jb2NISnZjSE1wTEZ4dUlDQWdJSFpoYkhWbFZIbHdaVTFoY0N4Y2JpQWdJQ0J6ZEdGMFpVMWhjRnh1ZlNrN1hHNWNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9jc3MtYWRhcHRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDE0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcicpO1xuXG52YXIgX2FkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWRhcHRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9ICgwLCBfYWRhcHRlcjIuZGVmYXVsdCkoe1xuICAgIGdldHRlcjogZnVuY3Rpb24gKG9iamVjdCwga2V5KSB7XG4gICAgICAgIHJldHVybiBvYmplY3Rba2V5XTtcbiAgICB9LFxuICAgIHNldHRlcjogZnVuY3Rpb24gKG9iamVjdCwgcHJvcHMpIHtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgICAgICAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIG9iamVjdFtrZXldID0gcHJvcHNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMMjlpYW1WamRDMWhaR0Z3ZEdWeUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3UVVGQlFUczdPenM3TzJ0Q1FVVmxMSFZDUVVGak8wRkJRM3BDTEZsQlFWRXNWVUZCUXl4TlFVRkVMRVZCUVZNc1IwRkJWRHRsUVVGcFFpeFBRVUZQTEVkQlFWQTdTMEZCYWtJN1FVRkRVaXhaUVVGUkxGVkJRVU1zVFVGQlJDeEZRVUZUTEV0QlFWUXNSVUZCYlVJN1FVRkRka0lzWVVGQlN5eEpRVUZKTEVkQlFVb3NTVUZCVnl4TFFVRm9RaXhGUVVGMVFqdEJRVU51UWl4blFrRkJTU3hOUVVGTkxHTkJRVTRzUTBGQmNVSXNSMEZCY2tJc1EwRkJTaXhGUVVFclFqdEJRVU16UWl4MVFrRkJUeXhIUVVGUUxFbEJRV01zVFVGQlRTeEhRVUZPTEVOQlFXUXNRMEZFTWtJN1lVRkJMMEk3VTBGRVNqdExRVVJKTzBOQlJrY2lMQ0ptYVd4bElqb2liMkpxWldOMExXRmtZWEIwWlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUXZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElHTnlaV0YwWlVGa1lYQjBaWElnWm5KdmJTQW5MaTloWkdGd2RHVnlKenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnWTNKbFlYUmxRV1JoY0hSbGNpaDdYRzRnSUNBZ1oyVjBkR1Z5T2lBb2IySnFaV04wTENCclpYa3BJRDArSUc5aWFtVmpkRnRyWlhsZExGeHVJQ0FnSUhObGRIUmxjam9nS0c5aWFtVmpkQ3dnY0hKdmNITXBJRDArSUh0Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2EyVjVJR2x1SUhCeWIzQnpLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvY0hKdmNITXVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2EyVjVLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUc5aWFtVmpkRnRyWlhsZElEMGdjSEp2Y0hOYmEyVjVYVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNibjBwT3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FkYXB0ZXIvb2JqZWN0LWFkYXB0ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5nZXRFbGVtZW50RGF0YSA9IGV4cG9ydHMuc2V0dGVyID0gZXhwb3J0cy5nZXR0ZXIgPSB1bmRlZmluZWQ7XG5cbnZhciBfc3RhdGVNYXAgPSByZXF1aXJlKCcuL2Nzcy9zdGF0ZS1tYXAnKTtcblxudmFyIF9zdGF0ZU1hcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdGF0ZU1hcCk7XG5cbnZhciBfdmFsdWVUeXBlTWFwID0gcmVxdWlyZSgnLi9zdmcvdmFsdWUtdHlwZS1tYXAnKTtcblxudmFyIF92YWx1ZVR5cGVNYXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdmFsdWVUeXBlTWFwKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wcyA9IHJlcXVpcmUoJy4vY3NzL3RyYW5zZm9ybS1wcm9wcycpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zZm9ybVByb3BzKTtcblxudmFyIF9idWlsZCA9IHJlcXVpcmUoJy4vc3ZnL2J1aWxkJyk7XG5cbnZhciBfYnVpbGQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYnVpbGQpO1xuXG52YXIgX2F0dHJBZGFwdGVyID0gcmVxdWlyZSgnLi9hdHRyLWFkYXB0ZXInKTtcblxudmFyIF9hZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVyJyk7XG5cbnZhciBfYWRhcHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hZGFwdGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGdldHRlciA9IGV4cG9ydHMuZ2V0dGVyID0gZnVuY3Rpb24gKGVsZW1lbnQsIGtleSkge1xuICAgIHJldHVybiAhX3RyYW5zZm9ybVByb3BzMi5kZWZhdWx0W2tleV0gPyAoMCwgX2F0dHJBZGFwdGVyLmdldHRlcikoZWxlbWVudCwga2V5KSA6IF92YWx1ZVR5cGVNYXAyLmRlZmF1bHRba2V5XSAmJiBfdmFsdWVUeXBlTWFwMi5kZWZhdWx0W2tleV0uZGVmYXVsdFByb3BzID8gX3ZhbHVlVHlwZU1hcDIuZGVmYXVsdFtrZXldLmRlZmF1bHRQcm9wcy5jdXJyZW50IDogMDtcbn07XG52YXIgc2V0dGVyID0gZXhwb3J0cy5zZXR0ZXIgPSBmdW5jdGlvbiAoZWxlbWVudCwgcHJvcHMsIGRhdGEpIHtcbiAgICByZXR1cm4gKDAsIF9hdHRyQWRhcHRlci5zZXR0ZXIpKGVsZW1lbnQsICgwLCBfYnVpbGQyLmRlZmF1bHQpKHByb3BzLCBkYXRhKSk7XG59O1xudmFyIGdldEVsZW1lbnREYXRhID0gZXhwb3J0cy5nZXRFbGVtZW50RGF0YSA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgdmFyIGJCb3ggPSBlbGVtZW50LmdldEJCb3goKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB4OiBiQm94LngsXG4gICAgICAgIHk6IGJCb3gueSxcbiAgICAgICAgd2lkdGg6IGJCb3gud2lkdGgsXG4gICAgICAgIGhlaWdodDogYkJveC5oZWlnaHRcbiAgICB9O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gKDAsIF9hZGFwdGVyMi5kZWZhdWx0KSh7IGdldHRlcjogZ2V0dGVyLCBzZXR0ZXI6IHNldHRlciwgc3RhdGVNYXA6IF9zdGF0ZU1hcDIuZGVmYXVsdCwgdmFsdWVUeXBlTWFwOiBfdmFsdWVUeXBlTWFwMi5kZWZhdWx0LCBnZXRFbGVtZW50RGF0YTogZ2V0RWxlbWVudERhdGEgfSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwzTjJaeTFoWkdGd2RHVnlMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN08wRkJRVUU3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3TzBGQlEwRTdPenM3UVVGRFFUczdRVUZEUVRzN096czdPMEZCUlU4c1NVRkJUU3d3UWtGQlV5eFZRVUZETEU5QlFVUXNSVUZCVlN4SFFVRldPMWRCUVd0Q0xFTkJRVVVzZVVKQlFXVXNSMEZCWml4RFFVRkVMRWRCUVhkQ0xIbENRVUZYTEU5QlFWZ3NSVUZCYjBJc1IwRkJjRUlzUTBGQmVrSXNSMEZCYjBRc2MwSkJRVU1zUTBGQllTeEhRVUZpTEV0QlFYRkNMSFZDUVVGaExFZEJRV0lzUlVGQmEwSXNXVUZCYkVJc1IwRkJhME1zZFVKQlFXRXNSMEZCWWl4RlFVRnJRaXhaUVVGc1FpeERRVUVyUWl4UFFVRXZRaXhIUVVGNVF5eERRVUZxUnp0RFFVRjBSVHRCUVVObUxFbEJRVTBzTUVKQlFWTXNWVUZCUXl4UFFVRkVMRVZCUVZVc1MwRkJWaXhGUVVGcFFpeEpRVUZxUWp0WFFVRXdRaXg1UWtGQlZ5eFBRVUZZTEVWQlFXOUNMSEZDUVVGTkxFdEJRVTRzUlVGQllTeEpRVUZpTEVOQlFYQkNPME5CUVRGQ08wRkJRMllzU1VGQlRTd3dRMEZCYVVJc1ZVRkJReXhQUVVGRUxFVkJRV0U3UVVGRGRrTXNVVUZCVFN4UFFVRlBMRkZCUVZFc1QwRkJVaXhGUVVGUUxFTkJSR2xETzBGQlJYWkRMRmRCUVU4N1FVRkRTQ3hYUVVGSExFdEJRVXNzUTBGQlREdEJRVU5JTEZkQlFVY3NTMEZCU3l4RFFVRk1PMEZCUTBnc1pVRkJUeXhMUVVGTExFdEJRVXc3UVVGRFVDeG5Ra0ZCVVN4TFFVRkxMRTFCUVV3N1MwRktXaXhEUVVaMVF6dERRVUZpT3p0clFrRlZaaXgxUWtGQll5eEZRVUZGTEdOQlFVWXNSVUZCVlN4alFVRldMRVZCUVd0Q0xEUkNRVUZzUWl4RlFVRTBRaXh2UTBGQk5VSXNSVUZCTUVNc09FSkJRVEZETEVWQlFXUWlMQ0ptYVd4bElqb2ljM1puTFdGa1lYQjBaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhOMFlYUmxUV0Z3SUdaeWIyMGdKeTR2WTNOekwzTjBZWFJsTFcxaGNDYzdYRzVwYlhCdmNuUWdkbUZzZFdWVWVYQmxUV0Z3SUdaeWIyMGdKeTR2YzNabkwzWmhiSFZsTFhSNWNHVXRiV0Z3Snp0Y2JtbHRjRzl5ZENCMGNtRnVjMlp2Y20xUWNtOXdjeUJtY205dElDY3VMMk56Y3k5MGNtRnVjMlp2Y20wdGNISnZjSE1uTzF4dWFXMXdiM0owSUdKMWFXeGtJR1p5YjIwZ0p5NHZjM1puTDJKMWFXeGtKenRjYm1sdGNHOXlkQ0I3SUdkbGRIUmxjaUJoY3lCaGRIUnlSMlYwZEdWeUxDQnpaWFIwWlhJZ1lYTWdZWFIwY2xObGRIUmxjaUI5SUdaeWIyMGdKeTR2WVhSMGNpMWhaR0Z3ZEdWeUp6dGNibWx0Y0c5eWRDQmpjbVZoZEdWQlpHRndkR1Z5SUdaeWIyMGdKeTR2WVdSaGNIUmxjaWM3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JuWlhSMFpYSWdQU0FvWld4bGJXVnVkQ3dnYTJWNUtTQTlQaUFvSVhSeVlXNXpabTl5YlZCeWIzQnpXMnRsZVYwcElEOGdZWFIwY2tkbGRIUmxjaWhsYkdWdFpXNTBMQ0JyWlhrcElEb2dLSFpoYkhWbFZIbHdaVTFoY0Z0clpYbGRJQ1ltSUhaaGJIVmxWSGx3WlUxaGNGdHJaWGxkTG1SbFptRjFiSFJRY205d2N5a2dQeUIyWVd4MVpWUjVjR1ZOWVhCYmEyVjVYUzVrWldaaGRXeDBVSEp2Y0hNdVkzVnljbVZ1ZENBNklEQTdYRzVsZUhCdmNuUWdZMjl1YzNRZ2MyVjBkR1Z5SUQwZ0tHVnNaVzFsYm5Rc0lIQnliM0J6TENCa1lYUmhLU0E5UGlCaGRIUnlVMlYwZEdWeUtHVnNaVzFsYm5Rc0lHSjFhV3hrS0hCeWIzQnpMQ0JrWVhSaEtTazdYRzVsZUhCdmNuUWdZMjl1YzNRZ1oyVjBSV3hsYldWdWRFUmhkR0VnUFNBb1pXeGxiV1Z1ZENrZ1BUNGdlMXh1SUNBZ0lHTnZibk4wSUdKQ2IzZ2dQU0JsYkdWdFpXNTBMbWRsZEVKQ2IzZ29LVHRjYmlBZ0lDQnlaWFIxY200Z2UxeHVJQ0FnSUNBZ0lDQjRPaUJpUW05NExuZ3NYRzRnSUNBZ0lDQWdJSGs2SUdKQ2IzZ3VlU3hjYmlBZ0lDQWdJQ0FnZDJsa2RHZzZJR0pDYjNndWQybGtkR2dzSUZ4dUlDQWdJQ0FnSUNCb1pXbG5hSFE2SUdKQ2IzZ3VhR1ZwWjJoMFhHNGdJQ0FnZlR0Y2JuMDdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR055WldGMFpVRmtZWEIwWlhJb2V5Qm5aWFIwWlhJc0lITmxkSFJsY2l3Z2MzUmhkR1ZOWVhBc0lIWmhiSFZsVkhsd1pVMWhjQ3dnWjJWMFJXeGxiV1Z1ZEVSaGRHRWdmU2s3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FkYXB0ZXIvc3ZnLWFkYXB0ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2J1aWxkID0gcmVxdWlyZSgnLi9zdmctcGF0aC9idWlsZCcpO1xuXG52YXIgX2J1aWxkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2J1aWxkKTtcblxudmFyIF9zdGF0ZU1hcCA9IHJlcXVpcmUoJy4vY3NzL3N0YXRlLW1hcCcpO1xuXG52YXIgX3N0YXRlTWFwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0YXRlTWFwKTtcblxudmFyIF9zdmdBZGFwdGVyID0gcmVxdWlyZSgnLi9zdmctYWRhcHRlcicpO1xuXG52YXIgX2FkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXInKTtcblxudmFyIF9hZGFwdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FkYXB0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSAoMCwgX2FkYXB0ZXIyLmRlZmF1bHQpKHtcbiAgICBnZXR0ZXI6IF9zdmdBZGFwdGVyLmdldHRlcixcbiAgICBzZXR0ZXI6IGZ1bmN0aW9uIChlbGVtZW50LCBwcm9wcywgb3B0cykge1xuICAgICAgICB2YXIgcGF0aExlbmd0aCA9IG9wdHMgPyBvcHRzLnBhdGhMZW5ndGggOiAwO1xuICAgICAgICByZXR1cm4gKDAsIF9zdmdBZGFwdGVyLnNldHRlcikoZWxlbWVudCwgKDAsIF9idWlsZDIuZGVmYXVsdCkocHJvcHMsIHBhdGhMZW5ndGgpLCBvcHRzKTtcbiAgICB9LFxuICAgIHN0YXRlTWFwOiBfc3RhdGVNYXAyLmRlZmF1bHQsXG4gICAgZ2V0RWxlbWVudERhdGE6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7IHBhdGhMZW5ndGg6IGVsZW1lbnQuZ2V0VG90YWxMZW5ndGgoKSB9LCAoMCwgX3N2Z0FkYXB0ZXIuZ2V0RWxlbWVudERhdGEpKGVsZW1lbnQpKTtcbiAgICB9XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFpHRndkR1Z5TDNOMlp5MXdZWFJvTFdGa1lYQjBaWEl1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPMEZCUVVFN096czdRVUZEUVRzN096dEJRVU5CT3p0QlFVTkJPenM3T3pzN2EwSkJSV1VzZFVKQlFXTTdRVUZEZWtJc09FSkJSSGxDTzBGQlJYcENMRmxCUVZFc1ZVRkJReXhQUVVGRUxFVkJRVlVzUzBGQlZpeEZRVUZwUWl4SlFVRnFRaXhGUVVFd1FqdEJRVU01UWl4WlFVRk5MR0ZCUVdFc1QwRkJUeXhMUVVGTExGVkJRVXdzUjBGQmEwSXNRMEZCZWtJc1EwRkVWenRCUVVVNVFpeGxRVUZQTEhkQ1FVRlBMRTlCUVZBc1JVRkJaMElzY1VKQlFVMHNTMEZCVGl4RlFVRmhMRlZCUVdJc1EwRkJhRUlzUlVGQk1FTXNTVUZCTVVNc1EwRkJVQ3hEUVVZNFFqdExRVUV4UWp0QlFVbFNMR2REUVU1NVFqdEJRVTk2UWl4dlFrRkJaMElzVlVGQlF5eFBRVUZFT3pCQ1FVRm5RaXhaUVVGWkxGRkJRVkVzWTBGQlVpeEZRVUZhTEVsQlFYbERMR2REUVVGbExFOUJRV1k3UzBGQmVrUTdRMEZRVENJc0ltWnBiR1VpT2lKemRtY3RjR0YwYUMxaFpHRndkR1Z5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMEwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCaWRXbHNaQ0JtY205dElDY3VMM04yWnkxd1lYUm9MMkoxYVd4a0p6dGNibWx0Y0c5eWRDQnpkR0YwWlUxaGNDQm1jbTl0SUNjdUwyTnpjeTl6ZEdGMFpTMXRZWEFuTzF4dWFXMXdiM0owSUhzZ1oyVjBkR1Z5TENCelpYUjBaWElzSUdkbGRFVnNaVzFsYm5SRVlYUmhJSDBnWm5KdmJTQW5MaTl6ZG1jdFlXUmhjSFJsY2ljN1hHNXBiWEJ2Y25RZ1kzSmxZWFJsUVdSaGNIUmxjaUJtY205dElDY3VMMkZrWVhCMFpYSW5PMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JqY21WaGRHVkJaR0Z3ZEdWeUtIdGNiaUFnSUNCblpYUjBaWElzWEc0Z0lDQWdjMlYwZEdWeU9pQW9aV3hsYldWdWRDd2djSEp2Y0hNc0lHOXdkSE1wSUQwK0lIdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2NHRjBhRXhsYm1kMGFDQTlJRzl3ZEhNZ1B5QnZjSFJ6TG5CaGRHaE1aVzVuZEdnZ09pQXdPMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdjMlYwZEdWeUtHVnNaVzFsYm5Rc0lHSjFhV3hrS0hCeWIzQnpMQ0J3WVhSb1RHVnVaM1JvS1N3Z2IzQjBjeWs3WEc0Z0lDQWdmU3hjYmlBZ0lDQnpkR0YwWlUxaGNDeGNiaUFnSUNCblpYUkZiR1Z0Wlc1MFJHRjBZVG9nS0dWc1pXMWxiblFwSUQwK0lDaDdJSEJoZEdoTVpXNW5kR2c2SUdWc1pXMWxiblF1WjJWMFZHOTBZV3hNWlc1bmRHZ29LU3dnTGk0dVoyVjBSV3hsYldWdWRFUmhkR0VvWld4bGJXVnVkQ2tnZlNsY2JuMHBPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9zdmctcGF0aC1hZGFwdGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9jcmVhdGVFYXNpbmcgPSByZXF1aXJlKCcuL2NyZWF0ZS1lYXNpbmcnKTtcblxudmFyIF9jcmVhdGVFYXNpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlRWFzaW5nKTtcblxudmFyIF9jcmVhdGVCZXppZXIgPSByZXF1aXJlKCcuL2NyZWF0ZS1iZXppZXInKTtcblxudmFyIF9jcmVhdGVCZXppZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQmV6aWVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gVmFsdWVzXG4vKlxuICAgIEVhc2luZyBmdW5jdGlvbnNcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgXG4gICAgR2VuZXJhdGVzIGFuZCBwcm92aWRlcyBlYXNpbmcgZnVuY3Rpb25zIGJhc2VkIG9uIGJhc2VGdW5jdGlvbiBkZWZpbml0aW9uc1xuICAgIFxuICAgIEEgY2FsbCB0byBlYXNpbmdGdW5jdGlvbi5nZXQoJ2Z1bmN0aW9uTmFtZScpIHJldHVybnMgYSBmdW5jdGlvbiB0aGF0IGNhbiBiZSBwYXNzZWQ6XG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MgMC0xXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBBbXAgbW9kaWZpZXIsIG9ubHkgYWNjZXB0ZWQgaW4gc29tZSBlYXNpbmcgZnVuY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQgaXMgdXNlZCB0byBhZGp1c3Qgb3ZlcmFsbCBzdHJlbmd0aFxuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBFYXNlZCBwcm9ncmVzc1xuICAgICAgICBcbiAgICBXZSBjYW4gZ2VuZXJhdGUgbmV3IGZ1bmN0aW9ucyBieSBzZW5kaW5nIGFuIGVhc2luZyBmdW5jdGlvbiB0aHJvdWdoIGVhc2luZ0Z1bmN0aW9uLmV4dGVuZChuYW1lLCBtZXRob2QpLlxuICAgIFdoaWNoIHdpbGwgbWFrZSBuYW1lSW4sIG5hbWVPdXQgYW5kIG5hbWVJbk91dCBmdW5jdGlvbnMgYXZhaWxhYmxlIHRvIHVzZS5cbiAgICAgICAgXG4gICAgRWFzaW5nIGZ1bmN0aW9ucyBmcm9tIFJvYmVydCBQZW5uZXJcbiAgICBodHRwOi8vd3d3LnJvYmVydHBlbm5lci5jb20vZWFzaW5nL1xuICAgICAgICBcbiAgICBCZXppZXIgY3VydmUgaW50ZXJwcmV0b3IgY3JlYXRlZCBmcm9tIEdhw6t0YW4gUmVuYXVkZWF1J3Mgb3JpZ2luYWwgQmV6aWVyRWFzaW5nICBcbiAgICBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNpbmcvYmxvYi9tYXN0ZXIvaW5kZXguanMgIFxuICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9MSUNFTlNFXG5cbiAgICBBbnRpY2lwYXRlIGVhc2luZyBjcmVhdGVkIGJ5IEVsbGlvdCBHaW5vXG4gICAgaHR0cHM6Ly90d2l0dGVyLmNvbS9FbGxpb3RHZW5vXG4qL1xuLy8gSW1wb3J0c1xudmFyIERFRkFVTFRfQkFDS19TVFJFTkdUSCA9IDEuNTI1O1xudmFyIERFRkFVTFRfUE9XX1NUUkVOR1RIID0gMjtcblxuLypcbiAgICBFYWNoIG9mIHRoZXNlIGJhc2UgZnVuY3Rpb25zIGlzIGFuIGVhc2VJblxuICAgIFxuICAgIE9uIGluaXQsIHdlIHVzZSAubWlycm9yIGFuZCAucmV2ZXJzZSB0byBnZW5lcmF0ZSBlYXNlSW5PdXQgYW5kXG4gICAgZWFzZU91dCBmdW5jdGlvbnMgcmVzcGVjdGl2ZWx5LlxuKi9cbnZhciBiYXNlRWFzaW5nID0ge1xuICAgIGVhc2U6IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICB2YXIgc3RyZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBERUZBVUxUX1BPV19TVFJFTkdUSCA6IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgcmV0dXJuIE1hdGgucG93KHByb2dyZXNzLCBzdHJlbmd0aCk7XG4gICAgfSxcbiAgICBjaXJjOiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgcmV0dXJuIDEgLSBNYXRoLnNpbihNYXRoLmFjb3MocHJvZ3Jlc3MpKTtcbiAgICB9LFxuICAgIGJhY2s6IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICB2YXIgc3RyZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBERUZBVUxUX0JBQ0tfU1RSRU5HVEggOiBhcmd1bWVudHNbMV07XG4gICAgICAgIHJldHVybiBwcm9ncmVzcyAqIHByb2dyZXNzICogKChzdHJlbmd0aCArIDEpICogcHJvZ3Jlc3MgLSBzdHJlbmd0aCk7XG4gICAgfVxufTtcblxuLy8gVXRpbGl0eSBmdW5jdGlvbnNcbnZhciBnZW5lcmF0ZVBvd2VyRWFzaW5nID0gZnVuY3Rpb24gKHN0cmVuZ3RoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICByZXR1cm4gYmFzZUVhc2luZy5lYXNlKHByb2dyZXNzLCBzdHJlbmd0aCk7XG4gICAgfTtcbn07XG5cblsnY3ViaWMnLCAncXVhcnQnLCAncXVpbnQnXS5mb3JFYWNoKGZ1bmN0aW9uIChlYXNpbmdOYW1lLCBpKSB7XG4gICAgcmV0dXJuIGJhc2VFYXNpbmdbZWFzaW5nTmFtZV0gPSBnZW5lcmF0ZVBvd2VyRWFzaW5nKGkgKyAzKTtcbn0pO1xuXG4vLyBHZW5lcmF0ZSBpbi9vdXQvaW5PdXQgdmFyaWF0aW9uc1xuZm9yICh2YXIga2V5IGluIGJhc2VFYXNpbmcpIHtcbiAgICBpZiAoYmFzZUVhc2luZy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHZhciBlYXNpbmdGdW5jdGlvbiA9ICgwLCBfY3JlYXRlRWFzaW5nMi5kZWZhdWx0KShiYXNlRWFzaW5nW2tleV0pO1xuICAgICAgICBiYXNlRWFzaW5nW2tleSArICdJbiddID0gZWFzaW5nRnVuY3Rpb24uaW47XG4gICAgICAgIGJhc2VFYXNpbmdba2V5ICsgJ091dCddID0gZWFzaW5nRnVuY3Rpb24ub3V0O1xuICAgICAgICBiYXNlRWFzaW5nW2tleSArICdJbk91dCddID0gZWFzaW5nRnVuY3Rpb24uaW5PdXQ7XG4gICAgfVxufVxuXG5iYXNlRWFzaW5nLmxpbmVhciA9IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgIHJldHVybiBwcm9ncmVzcztcbn07XG5iYXNlRWFzaW5nLmFudGljaXBhdGUgPSBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICB2YXIgc3RyZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBERUZBVUxUX0JBQ0tfU1RSRU5HVEggOiBhcmd1bWVudHNbMV07XG4gICAgcmV0dXJuIChwcm9ncmVzcyAqPSAyKSA8IDEgPyAwLjUgKiBiYXNlRWFzaW5nLmJhY2tJbihwcm9ncmVzcywgc3RyZW5ndGgpIDogMC41ICogKDIgLSBNYXRoLnBvdygyLCAtMTAgKiAocHJvZ3Jlc3MgLSAxKSkpO1xufTtcblxuYmFzZUVhc2luZy5jcmVhdGVWYXJpYXRpb25zID0gX2NyZWF0ZUVhc2luZzIuZGVmYXVsdDtcbmJhc2VFYXNpbmcuY3ViaWNCZXppZXIgPSBfY3JlYXRlQmV6aWVyMi5kZWZhdWx0O1xuYmFzZUVhc2luZy5tb2RpZnkgPSBmdW5jdGlvbiAoZWFzaW5nKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgcmV0dXJuIGVhc2luZy5hcHBseSh1bmRlZmluZWQsIFtwcm9ncmVzc10uY29uY2F0KGFyZ3MpKTtcbiAgICB9O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gYmFzZUVhc2luZztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDJWaGMybHVaeTl3Y21WelpYUXRaV0Z6YVc1bkxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3UVVFd1FrRTdPenM3UVVGRFFUczdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3TzBGQlIwRXNTVUZCVFN4M1FrRkJkMElzUzBGQmVFSTdRVUZEVGl4SlFVRk5MSFZDUVVGMVFpeERRVUYyUWpzN096czdPenM3UVVGUlRpeEpRVUZOTEdGQlFXRTdRVUZEWml4VlFVRk5MRlZCUVVNc1VVRkJSRHRaUVVGWExHbEZRVUZYTzNkQ1FVRjVRaXhWUVVGWk8wdEJRVE5FTzBGQlEwNHNWVUZCVFR0bFFVRlpMRWxCUVVrc1MwRkJTeXhIUVVGTUxFTkJRVk1zUzBGQlN5eEpRVUZNTEVOQlFWVXNVVUZCVml4RFFVRlVMRU5CUVVvN1MwRkJXanRCUVVOT0xGVkJRVTBzVlVGQlF5eFJRVUZFTzFsQlFWY3NhVVZCUVZjN1pVRkJNRUlzVVVGQlF5eEhRVUZYTEZGQlFWZ3NTVUZCZDBJc1EwRkJReXhYUVVGWExFTkJRVmdzUTBGQlJDeEhRVUZwUWl4UlFVRnFRaXhIUVVFMFFpeFJRVUUxUWl4RFFVRjZRanRMUVVGb1JEdERRVWhLT3pzN1FVRlBUaXhKUVVGTkxITkNRVUZ6UWl4VlFVRkRMRkZCUVVRN1YwRkJZeXhWUVVGRExGRkJRVVE3WlVGQll5eFhRVUZYTEVsQlFWZ3NRMEZCWjBJc1VVRkJhRUlzUlVGQk1FSXNVVUZCTVVJN1MwRkJaRHREUVVGa096dEJRVVUxUWl4RFFVRkRMRTlCUVVRc1JVRkJWU3hQUVVGV0xFVkJRVzFDTEU5QlFXNUNMRVZCUVRSQ0xFOUJRVFZDTEVOQlFXOURMRlZCUVVNc1ZVRkJSQ3hGUVVGaExFTkJRV0k3VjBGQmJVSXNWMEZCVnl4VlFVRllMRWxCUVhsQ0xHOUNRVUZ2UWl4SlFVRkpMRU5CUVVvc1EwRkJOME03UTBGQmJrSXNRMEZCY0VNN096dEJRVWRCTEV0QlFVc3NTVUZCU1N4SFFVRktMRWxCUVZjc1ZVRkJhRUlzUlVGQk5FSTdRVUZEZUVJc1VVRkJTU3hYUVVGWExHTkJRVmdzUTBGQk1FSXNSMEZCTVVJc1EwRkJTaXhGUVVGdlF6dEJRVU5vUXl4WlFVRk5MR2xDUVVGcFFpdzBRa0ZCY1VJc1YwRkJWeXhIUVVGWUxFTkJRWEpDTEVOQlFXcENMRU5CUkRCQ08wRkJSV2hETEcxQ1FVRmpMRlZCUVdRc1NVRkJlVUlzWlVGQlpTeEZRVUZtTEVOQlJrODdRVUZIYUVNc2JVSkJRV01zVjBGQlpDeEpRVUV3UWl4bFFVRmxMRWRCUVdZc1EwRklUVHRCUVVsb1F5eHRRa0ZCWXl4aFFVRmtMRWxCUVRSQ0xHVkJRV1VzUzBGQlppeERRVXBKTzB0QlFYQkRPME5CUkVvN08wRkJVMEVzVjBGQlZ5eE5RVUZZTEVkQlFXOUNPMWRCUVZrN1EwRkJXanRCUVVOd1FpeFhRVUZYTEZWQlFWZ3NSMEZCZDBJc1ZVRkJReXhSUVVGRU8xRkJRVmNzYVVWQlFWYzdWMEZETVVNc1EwRkJSU3haUVVGVkxFTkJRVllzUTBGQlJDeEhRVUZuUWl4RFFVRm9RaXhIUVVGeFFpeE5RVUZOTEZkQlFWY3NUVUZCV0N4RFFVRnJRaXhSUVVGc1FpeEZRVUUwUWl4UlFVRTFRaXhEUVVGT0xFZEJRU3RETEU5QlFVOHNTVUZCU1N4TFFVRkxMRWRCUVV3c1EwRkJVeXhEUVVGVUxFVkJRVmtzUTBGQlF5eEZRVUZFTEVsQlFVOHNWMEZCVnl4RFFVRllMRU5CUVZBc1EwRkJhRUlzUTBGQlVEdERRVVJxUkRzN1FVRkhlRUlzVjBGQlZ5eG5Ra0ZCV0R0QlFVTkJMRmRCUVZjc1YwRkJXRHRCUVVOQkxGZEJRVmNzVFVGQldDeEhRVUZ2UWl4VlFVRkRMRTFCUVVRN2MwTkJRVms3T3pzN1YwRkJVeXhWUVVGRExGRkJRVVE3WlVGQll5eDVRa0ZCVHl4cFFrRkJZU3hMUVVGd1FqdExRVUZrTzBOQlFYSkNPenRyUWtGRlRDSXNJbVpwYkdVaU9pSndjbVZ6WlhRdFpXRnphVzVuTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMEwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpOHFYRzRnSUNBZ1JXRnphVzVuSUdaMWJtTjBhVzl1YzF4dUlDQWdJQzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMxY2JpQWdJQ0JjYmlBZ0lDQkhaVzVsY21GMFpYTWdZVzVrSUhCeWIzWnBaR1Z6SUdWaGMybHVaeUJtZFc1amRHbHZibk1nWW1GelpXUWdiMjRnWW1GelpVWjFibU4wYVc5dUlHUmxabWx1YVhScGIyNXpYRzRnSUNBZ1hHNGdJQ0FnUVNCallXeHNJSFJ2SUdWaGMybHVaMFoxYm1OMGFXOXVMbWRsZENnblpuVnVZM1JwYjI1T1lXMWxKeWtnY21WMGRYSnVjeUJoSUdaMWJtTjBhVzl1SUhSb1lYUWdZMkZ1SUdKbElIQmhjM05sWkRwY2JpQWdJQ0FnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCUWNtOW5jbVZ6Y3lBd0xURmNiaUFnSUNBZ0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZElDaHZjSFJwYjI1aGJDazZJRUZ0Y0NCdGIyUnBabWxsY2l3Z2IyNXNlU0JoWTJObGNIUmxaQ0JwYmlCemIyMWxJR1ZoYzJsdVp5Qm1kVzVqZEdsdmJuTmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR0Z1WkNCcGN5QjFjMlZrSUhSdklHRmthblZ6ZENCdmRtVnlZV3hzSUhOMGNtVnVaM1JvWEc0Z0lDQWdJQ0FnSUVCeVpYUjFjbTRnVzI1MWJXSmxjbDA2SUVWaGMyVmtJSEJ5YjJkeVpYTnpYRzRnSUNBZ0lDQWdJRnh1SUNBZ0lGZGxJR05oYmlCblpXNWxjbUYwWlNCdVpYY2dablZ1WTNScGIyNXpJR0o1SUhObGJtUnBibWNnWVc0Z1pXRnphVzVuSUdaMWJtTjBhVzl1SUhSb2NtOTFaMmdnWldGemFXNW5SblZ1WTNScGIyNHVaWGgwWlc1a0tHNWhiV1VzSUcxbGRHaHZaQ2t1WEc0Z0lDQWdWMmhwWTJnZ2QybHNiQ0J0WVd0bElHNWhiV1ZKYml3Z2JtRnRaVTkxZENCaGJtUWdibUZ0WlVsdVQzVjBJR1oxYm1OMGFXOXVjeUJoZG1GcGJHRmliR1VnZEc4Z2RYTmxMbHh1SUNBZ0lDQWdJQ0JjYmlBZ0lDQkZZWE5wYm1jZ1puVnVZM1JwYjI1eklHWnliMjBnVW05aVpYSjBJRkJsYm01bGNseHVJQ0FnSUdoMGRIQTZMeTkzZDNjdWNtOWlaWEowY0dWdWJtVnlMbU52YlM5bFlYTnBibWN2WEc0Z0lDQWdJQ0FnSUZ4dUlDQWdJRUpsZW1sbGNpQmpkWEoyWlNCcGJuUmxjbkJ5WlhSdmNpQmpjbVZoZEdWa0lHWnliMjBnUjJIRHEzUmhiaUJTWlc1aGRXUmxZWFVuY3lCdmNtbG5hVzVoYkNCQ1pYcHBaWEpGWVhOcGJtY2dJRnh1SUNBZ0lHaDBkSEJ6T2k4dloybDBhSFZpTG1OdmJTOW5jbVV2WW1WNmFXVnlMV1ZoYzJsdVp5OWliRzlpTDIxaGMzUmxjaTlwYm1SbGVDNXFjeUFnWEc0Z0lDQWdhSFIwY0hNNkx5OW5hWFJvZFdJdVkyOXRMMmR5WlM5aVpYcHBaWEl0WldGemFXNW5MMkpzYjJJdmJXRnpkR1Z5TDB4SlEwVk9VMFZjYmx4dUlDQWdJRUZ1ZEdsamFYQmhkR1VnWldGemFXNW5JR055WldGMFpXUWdZbmtnUld4c2FXOTBJRWRwYm05Y2JpQWdJQ0JvZEhSd2N6b3ZMM1IzYVhSMFpYSXVZMjl0TDBWc2JHbHZkRWRsYm05Y2Jpb3ZYRzR2THlCSmJYQnZjblJ6WEc1cGJYQnZjblFnWTNKbFlYUmxSV0Z6YVc1blJuVnVZM1JwYjI0Z1puSnZiU0FuTGk5amNtVmhkR1V0WldGemFXNW5KenRjYm1sdGNHOXlkQ0JqZFdKcFkwSmxlbWxsY2lCbWNtOXRJQ2N1TDJOeVpXRjBaUzFpWlhwcFpYSW5PMXh1WEc0dkx5QldZV3gxWlhOY2JtTnZibk4wSUVSRlJrRlZURlJmUWtGRFMxOVRWRkpGVGtkVVNDQTlJREV1TlRJMU8xeHVZMjl1YzNRZ1JFVkdRVlZNVkY5UVQxZGZVMVJTUlU1SFZFZ2dQU0F5TzF4dVhHNHZLbHh1SUNBZ0lFVmhZMmdnYjJZZ2RHaGxjMlVnWW1GelpTQm1kVzVqZEdsdmJuTWdhWE1nWVc0Z1pXRnpaVWx1WEc0Z0lDQWdYRzRnSUNBZ1QyNGdhVzVwZEN3Z2QyVWdkWE5sSUM1dGFYSnliM0lnWVc1a0lDNXlaWFpsY25ObElIUnZJR2RsYm1WeVlYUmxJR1ZoYzJWSmJrOTFkQ0JoYm1SY2JpQWdJQ0JsWVhObFQzVjBJR1oxYm1OMGFXOXVjeUJ5WlhOd1pXTjBhWFpsYkhrdVhHNHFMMXh1WTI5dWMzUWdZbUZ6WlVWaGMybHVaeUE5SUh0Y2JpQWdJQ0JsWVhObE9pQW9jSEp2WjNKbGMzTXNJSE4wY21WdVozUm9JRDBnUkVWR1FWVk1WRjlRVDFkZlUxUlNSVTVIVkVncElEMCtJSEJ5YjJkeVpYTnpJQ29xSUhOMGNtVnVaM1JvTEZ4dUlDQWdJR05wY21NNklIQnliMmR5WlhOeklEMCtJREVnTFNCTllYUm9Mbk5wYmloTllYUm9MbUZqYjNNb2NISnZaM0psYzNNcEtTeGNiaUFnSUNCaVlXTnJPaUFvY0hKdlozSmxjM01zSUhOMGNtVnVaM1JvSUQwZ1JFVkdRVlZNVkY5Q1FVTkxYMU5VVWtWT1IxUklLU0E5UGlBb2NISnZaM0psYzNNZ0tpQndjbTluY21WemN5a2dLaUFvS0hOMGNtVnVaM1JvSUNzZ01Ta2dLaUJ3Y205bmNtVnpjeUF0SUhOMGNtVnVaM1JvS1Z4dWZUdGNibHh1THk4Z1ZYUnBiR2wwZVNCbWRXNWpkR2x2Ym5OY2JtTnZibk4wSUdkbGJtVnlZWFJsVUc5M1pYSkZZWE5wYm1jZ1BTQW9jM1J5Wlc1bmRHZ3BJRDArSUNod2NtOW5jbVZ6Y3lrZ1BUNGdZbUZ6WlVWaGMybHVaeTVsWVhObEtIQnliMmR5WlhOekxDQnpkSEpsYm1kMGFDazdYRzVjYmxzblkzVmlhV01uTENBbmNYVmhjblFuTENBbmNYVnBiblFuWFM1bWIzSkZZV05vS0NobFlYTnBibWRPWVcxbExDQnBLU0E5UGlCaVlYTmxSV0Z6YVc1blcyVmhjMmx1WjA1aGJXVmRJRDBnWjJWdVpYSmhkR1ZRYjNkbGNrVmhjMmx1WnlocElDc2dNeWtwTzF4dVhHNHZMeUJIWlc1bGNtRjBaU0JwYmk5dmRYUXZhVzVQZFhRZ2RtRnlhV0YwYVc5dWMxeHVabTl5SUNoc1pYUWdhMlY1SUdsdUlHSmhjMlZGWVhOcGJtY3BJSHRjYmlBZ0lDQnBaaUFvWW1GelpVVmhjMmx1Wnk1b1lYTlBkMjVRY205d1pYSjBlU2hyWlhrcEtTQjdYRzRnSUNBZ0lDQWdJR052Ym5OMElHVmhjMmx1WjBaMWJtTjBhVzl1SUQwZ1kzSmxZWFJsUldGemFXNW5SblZ1WTNScGIyNG9ZbUZ6WlVWaGMybHVaMXRyWlhsZEtUdGNiaUFnSUNBZ0lDQWdZbUZ6WlVWaGMybHVaMXRnSkh0clpYbDlTVzVnWFNBOUlHVmhjMmx1WjBaMWJtTjBhVzl1TG1sdU8xeHVJQ0FnSUNBZ0lDQmlZWE5sUldGemFXNW5XMkFrZTJ0bGVYMVBkWFJnWFNBOUlHVmhjMmx1WjBaMWJtTjBhVzl1TG05MWREdGNiaUFnSUNBZ0lDQWdZbUZ6WlVWaGMybHVaMXRnSkh0clpYbDlTVzVQZFhSZ1hTQTlJR1ZoYzJsdVowWjFibU4wYVc5dUxtbHVUM1YwTzF4dUlDQWdJSDFjYm4xY2JseHVZbUZ6WlVWaGMybHVaeTVzYVc1bFlYSWdQU0J3Y205bmNtVnpjeUE5UGlCd2NtOW5jbVZ6Y3p0Y2JtSmhjMlZGWVhOcGJtY3VZVzUwYVdOcGNHRjBaU0E5SUNod2NtOW5jbVZ6Y3l3Z2MzUnlaVzVuZEdnZ1BTQkVSVVpCVlV4VVgwSkJRMHRmVTFSU1JVNUhWRWdwSUQwK1hHNGdJQ0FnS0Nod2NtOW5jbVZ6Y3lvOU1pa2dQQ0F4S1NBL0lEQXVOU0FxSUdKaGMyVkZZWE5wYm1jdVltRmphMGx1S0hCeWIyZHlaWE56TENCemRISmxibWQwYUNrZ09pQWdNQzQxSUNvZ0tESWdMU0JOWVhSb0xuQnZkeWd5TENBdE1UQWdLaUFvY0hKdlozSmxjM01nTFNBeEtTa3BPMXh1WEc1aVlYTmxSV0Z6YVc1bkxtTnlaV0YwWlZaaGNtbGhkR2x2Ym5NZ1BTQmpjbVZoZEdWRllYTnBibWRHZFc1amRHbHZianRjYm1KaGMyVkZZWE5wYm1jdVkzVmlhV05DWlhwcFpYSWdQU0JqZFdKcFkwSmxlbWxsY2p0Y2JtSmhjMlZGWVhOcGJtY3ViVzlrYVdaNUlEMGdLR1ZoYzJsdVp5d2dMaTR1WVhKbmN5a2dQVDRnS0hCeWIyZHlaWE56S1NBOVBpQmxZWE5wYm1jb2NISnZaM0psYzNNc0lDNHVMbUZ5WjNNcE8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQmlZWE5sUldGemFXNW5PeUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9lYXNpbmcvcHJlc2V0LWVhc2luZy5qc1xuICoqIG1vZHVsZSBpZCA9IDE4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfRmxvdyA9IHJlcXVpcmUoJy4uL0Zsb3cnKTtcblxudmFyIF9GbG93MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Zsb3cpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgU0FWRV9QUk9QID0gJ19fcG1fZmxvdyc7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChlbGVtZW50LCBhZGFwdGVyKSB7XG4gICAgaWYgKGVsZW1lbnRbU0FWRV9QUk9QXSkge1xuICAgICAgICByZXR1cm4gZWxlbWVudFtTQVZFX1BST1BdO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBmbG93ID0gbmV3IF9GbG93Mi5kZWZhdWx0KHsgZWxlbWVudDogZWxlbWVudCwgYWRhcHRlcjogYWRhcHRlciB9KTtcblxuICAgICAgICAvLyBCaW5kIGFkYXB0ZXIgdG8gZWxlbWVudFxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgU0FWRV9QUk9QLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHZhbHVlOiBmbG93XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBmbG93O1xuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwyWnNiM2N2WjJWMExXWnNiM2N1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dEJRVUZCT3pzN096czdRVUZGUVN4SlFVRk5MRmxCUVZrc1YwRkJXanM3YTBKQlJWTXNWVUZCUXl4UFFVRkVMRVZCUVZVc1QwRkJWaXhGUVVGelFqdEJRVU5xUXl4UlFVRkpMRkZCUVZFc1UwRkJVaXhEUVVGS0xFVkJRWGRDTzBGQlEzQkNMR1ZCUVU4c1VVRkJVU3hUUVVGU0xFTkJRVkFzUTBGRWIwSTdTMEZCZUVJc1RVRkZUenRCUVVOSUxGbEJRVTBzVDBGQlR5eHRRa0ZCVXl4RlFVRkZMR2RDUVVGR0xFVkJRVmNzWjBKQlFWZ3NSVUZCVkN4RFFVRlFPenM3UVVGRVNDeGpRVWxJTEVOQlFVOHNZMEZCVUN4RFFVRnpRaXhQUVVGMFFpeEZRVUVyUWl4VFFVRXZRaXhGUVVFd1F6dEJRVU4wUXl4M1FrRkJXU3hMUVVGYU8wRkJRMEVzYzBKQlFWVXNTMEZCVmp0QlFVTkJMRzFDUVVGUExFbEJRVkE3VTBGSVNpeEZRVXBIT3p0QlFWVklMR1ZCUVU4c1NVRkJVQ3hEUVZaSE8wdEJSbEE3UTBGRVZ5SXNJbVpwYkdVaU9pSm5aWFF0Wm14dmR5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdSbXh2ZHlCbWNtOXRJQ2N1TGk5R2JHOTNKenRjYmx4dVkyOXVjM1FnVTBGV1JWOVFVazlRSUQwZ0oxOWZjRzFmWm14dmR5YzdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJQ2hsYkdWdFpXNTBMQ0JoWkdGd2RHVnlLU0E5UGlCN1hHNGdJQ0FnYVdZZ0tHVnNaVzFsYm5SYlUwRldSVjlRVWs5UVhTa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdaV3hsYldWdWRGdFRRVlpGWDFCU1QxQmRPMXh1SUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUdac2IzY2dQU0J1WlhjZ1JteHZkeWg3SUdWc1pXMWxiblFzSUdGa1lYQjBaWElnZlNrN1hHNWNiaUFnSUNBZ0lDQWdMeThnUW1sdVpDQmhaR0Z3ZEdWeUlIUnZJR1ZzWlcxbGJuUmNiaUFnSUNBZ0lDQWdUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblI1S0dWc1pXMWxiblFzSUZOQlZrVmZVRkpQVUN3Z2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWlc1MWJXVnlZV0pzWlRvZ1ptRnNjMlVzWEc0Z0lDQWdJQ0FnSUNBZ0lDQjNjbWwwWVdKc1pUb2dabUZzYzJVc1hHNGdJQ0FnSUNBZ0lDQWdJQ0IyWVd4MVpUb2dabXh2ZDF4dUlDQWdJQ0FnSUNCOUtUdGNibHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdabXh2ZHp0Y2JpQWdJQ0I5WEc1OU8xeHVYRzVjYmlKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvZmxvdy9nZXQtZmxvdy5qc1xuICoqIG1vZHVsZSBpZCA9IDE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnN0ZXBQcm9ncmVzcyA9IGV4cG9ydHMuc3BlZWRQZXJTZWNvbmQgPSBleHBvcnRzLnNwZWVkUGVyRnJhbWUgPSBleHBvcnRzLnNtb290aCA9IGV4cG9ydHMucmVzdHJpY3QgPSBleHBvcnRzLnJlbGF0aXZlVmFsdWUgPSBleHBvcnRzLnJhbmRvbSA9IGV4cG9ydHMucmFkaWFuc1RvRGVncmVlcyA9IGV4cG9ydHMucG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZSA9IGV4cG9ydHMub2Zmc2V0ID0gZXhwb3J0cy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSA9IGV4cG9ydHMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MgPSBleHBvcnRzLmh5cG90ZW51c2UgPSBleHBvcnRzLmVhc2UgPSBleHBvcnRzLmRpc3RhbmNlID0gZXhwb3J0cy5kaWxhdGUgPSBleHBvcnRzLmRlZ3JlZXNUb1JhZGlhbnMgPSBleHBvcnRzLmFuZ2xlID0gdW5kZWZpbmVkO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgWkVST19QT0lOVCA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDAsXG4gICAgejogMFxufTtcblxudmFyIGRpc3RhbmNlMUQgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBNYXRoLmFicyhhIC0gYik7XG59O1xuXG4vKlxuICAgIEFuZ2xlIGJldHdlZW4gcG9pbnRzXG4gICAgXG4gICAgVHJhbnNsYXRlcyB0aGUgaHlwb3RoZXRpY2FsIGxpbmUgc28gdGhhdCB0aGUgJ2Zyb20nIGNvb3JkaW5hdGVzXG4gICAgYXJlIGF0IDAsMFxuICAgIFxuICAgIEBwYXJhbSBbb2JqZWN0XTogWCBhbmQgWSBjb29yZGluYXRlcyBvZiBmcm9tIHBvaW50XG4gICAgQHBhcmFtIFtvYmplY3RdOiBYIGFuZCBZIGNvcmRpbmF0ZXMgb2YgdG8gcG9pbnRcbiAgICBAcmV0dXJuIFtyYWRpYW5dOiBBbmdsZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzIGluIHJhZGlhbnNcbiovXG52YXIgYW5nbGUgPSBleHBvcnRzLmFuZ2xlID0gZnVuY3Rpb24gKGEpIHtcbiAgICB2YXIgYiA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IFpFUk9fUE9JTlQgOiBhcmd1bWVudHNbMV07XG4gICAgcmV0dXJuIHJhZGlhbnNUb0RlZ3JlZXMoTWF0aC5hdGFuMihhLnggLSBiLngsIGEueSAtIGIueSkpO1xufTtcblxuLypcbiAgICBDb252ZXJ0IGRlZ3JlZXMgdG8gcmFkaWFuc1xuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgaW4gZGVncmVlc1xuICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGluIHJhZGlhbnNcbiovXG52YXIgZGVncmVlc1RvUmFkaWFucyA9IGV4cG9ydHMuZGVncmVlc1RvUmFkaWFucyA9IGZ1bmN0aW9uIChkZWdyZWVzKSB7XG4gICAgcmV0dXJuIGRlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xufTtcblxuLypcbiAgICBEaWxhdGVcbiAgICBcbiAgICBDaGFuZ2UgdGhlIHByb2dyZXNzaW9uIGJldHdlZW4gYSBhbmQgYiBhY2NvcmRpbmcgdG8gZGlsYXRpb24uXG4gICAgXG4gICAgU28gZGlsYXRpb24gPSAwLjUgd291bGQgY2hhbmdlXG4gICAgXG4gICAgYSAtLS0tLS0tLS0gYlxuICAgIFxuICAgIHRvXG4gICAgXG4gICAgYSAtLS0tIGJcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFByZXZpb3VzIHZhbHVlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBEaWxhdGUgcHJvZ3Jlc3MgYnkgeFxuICAgIEByZXR1cm4gW251bWJlcl06IFByZXZpb3VzIHZhbHVlIHBsdXMgdGhlIGRpbGF0ZWQgZGlmZmVyZW5jZVxuKi9cbnZhciBkaWxhdGUgPSBleHBvcnRzLmRpbGF0ZSA9IGZ1bmN0aW9uIChhLCBiLCBkaWxhdGlvbikge1xuICAgIHJldHVybiBhICsgKGIgLSBhKSAqIGRpbGF0aW9uO1xufTtcblxuLypcbiAgICBEaXN0YW5jZVxuICAgIFxuICAgIFJldHVybnMgdGhlIGRpc3RhbmNlIGJldHdlZW4gdHdvIG4gZGltZW5zaW9uYWwgcG9pbnRzLlxuICAgIFxuICAgIEBwYXJhbSBbb2JqZWN0L251bWJlcl06IHggYW5kIHkgb3IganVzdCB4IG9mIHBvaW50IEFcbiAgICBAcGFyYW0gW29iamVjdC9udW1iZXJdOiAob3B0aW9uYWwpOiB4IGFuZCB5IG9yIGp1c3QgeCBvZiBwb2ludCBCXG4gICAgQHJldHVybiBbbnVtYmVyXTogVGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIHR3byBwb2ludHNcbiovXG52YXIgZGlzdGFuY2UgPSBleHBvcnRzLmRpc3RhbmNlID0gZnVuY3Rpb24gKGEpIHtcbiAgICB2YXIgYiA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IFpFUk9fUE9JTlQgOiBhcmd1bWVudHNbMV07XG5cbiAgICAvLyAxRCBkaW1lbnNpb25zXG4gICAgaWYgKCgwLCBfdXRpbHMuaXNOdW0pKGEpKSB7XG4gICAgICAgIHJldHVybiBkaXN0YW5jZTFEKGEsIGIpO1xuXG4gICAgICAgIC8vIE11bHRpLWRpbWVuc2lvbmFsXG4gICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciB4RGVsdGEgPSBkaXN0YW5jZTFEKGEueCwgYi54KTtcbiAgICAgICAgICAgIHZhciB5RGVsdGEgPSBkaXN0YW5jZTFEKGEueSwgYi55KTtcbiAgICAgICAgICAgIHZhciB6RGVsdGEgPSAoMCwgX3V0aWxzLmlzTnVtKShhLnopID8gZGlzdGFuY2UxRChhLnosIGIueikgOiAwO1xuXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHhEZWx0YSwgMikgKyBNYXRoLnBvdyh5RGVsdGEsIDIpICsgTWF0aC5wb3coekRlbHRhLCAyKSk7XG4gICAgICAgIH1cbn07XG5cbi8qXG4gICAgRWFzZSB2YWx1ZSB3aXRoaW4gcmFuZ2VkIHBhcmFtZXRlcnNcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzIGJldHdlZW4gMCBhbmQgMVxuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgb2YgMCBwcm9ncmVzc1xuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgb2YgMSBwcm9ncmVzc1xuICAgIEBwYXJhbSBbc3RyaW5nIHx8IGZ1bmN0aW9uXTogTmFtZSBvZiBwcmVzZXQgZWFzaW5nXG4gICAgICAgIHRvIHVzZSBvciBnZW5lcmF0ZWQgZWFzaW5nIGZ1bmN0aW9uXG4gICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgb2YgZWFzZWQgcHJvZ3Jlc3MgaW4gcmFuZ2VcbiovXG52YXIgZWFzZSA9IGV4cG9ydHMuZWFzZSA9IGZ1bmN0aW9uIChwcm9ncmVzcywgZnJvbSwgdG8sIGVhc2UpIHtcbiAgICB2YXIgcHJvZ3Jlc3NMaW1pdGVkID0gcmVzdHJpY3QocHJvZ3Jlc3MsIDAsIDEpO1xuICAgIHZhciBlYXNlZFByb2dyZXNzID0gZWFzZShwcm9ncmVzc0xpbWl0ZWQpO1xuXG4gICAgcmV0dXJuIGdldFZhbHVlRnJvbVByb2dyZXNzKGVhc2VkUHJvZ3Jlc3MsIGZyb20sIHRvKTtcbn07XG5cbi8qXG4gICAgSHlwb3RlbnVzZVxuICAgIFxuICAgIFJldHVybnMgdGhlIGh5cG90ZW51c2UsIHNpZGUgQywgZ2l2ZW4gdGhlIGxlbmd0aHMgb2Ygc2lkZXMgQSBhbmQgQi5cbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IExlbmd0aCBvZiBBXG4gICAgQHBhcmFtIFtudW1iZXJdOiBMZW5ndGggb2YgQlxuICAgIEByZXR1cm4gW251bWJlcl06IExlbmd0aCBvZiBDXG4qL1xudmFyIGh5cG90ZW51c2UgPSBleHBvcnRzLmh5cG90ZW51c2UgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBNYXRoLnNxcnQoYSAqIGEgKyBiICogYik7XG59O1xuXG4vKlxuICAgIFZhbHVlIGluIHJhbmdlIGZyb20gcHJvZ3Jlc3NcbiAgICBcbiAgICBHaXZlbiBhIGxvd2VyIGxpbWl0IGFuZCBhbiB1cHBlciBsaW1pdCwgd2UgcmV0dXJuIHRoZSB2YWx1ZSB3aXRoaW5cbiAgICB0aGF0IHJhbmdlIGFzIGV4cHJlc3NlZCBieSBwcm9ncmVzcyAoYSBudW1iZXIgZnJvbSAwLTEpXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBUaGUgcHJvZ3Jlc3MgYmV0d2VlbiBsb3dlciBhbmQgdXBwZXIgbGltaXRzIGV4cHJlc3NlZCAwLTFcbiAgICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IG9mIHJhbmdlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBVcHBlciBsaW1pdCBvZiByYW5nZVxuICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGFzIGNhbGN1bGF0ZWQgZnJvbSBwcm9ncmVzcyB3aXRoaW4gcmFuZ2UgKG5vdCBsaW1pdGVkIHdpdGhpbiByYW5nZSlcbiovXG52YXIgZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MgPSBleHBvcnRzLmdldFZhbHVlRnJvbVByb2dyZXNzID0gZnVuY3Rpb24gKHByb2dyZXNzLCBmcm9tLCB0bykge1xuICAgIHJldHVybiAtcHJvZ3Jlc3MgKiBmcm9tICsgcHJvZ3Jlc3MgKiB0byArIGZyb207XG59O1xuXG4vKlxuICAgIFByb2dyZXNzIHdpdGhpbiBnaXZlbiByYW5nZVxuICAgIFxuICAgIEdpdmVuIGEgbG93ZXIgbGltaXQgYW5kIGFuIHVwcGVyIGxpbWl0LCB3ZSByZXR1cm4gdGhlIHByb2dyZXNzXG4gICAgKGV4cHJlc3NlZCBhcyBhIG51bWJlciAwLTEpIHJlcHJlc2VudGVkIGJ5IHRoZSBnaXZlbiB2YWx1ZSwgYW5kXG4gICAgbGltaXQgdGhhdCBwcm9ncmVzcyB0byB3aXRoaW4gMC0xLlxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgdG8gZmluZCBwcm9ncmVzcyB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiAgICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXRcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBQcm9ncmVzcyBvZiB2YWx1ZSB3aXRoaW4gcmFuZ2UgYXMgZXhwcmVzc2VkIDAtMVxuKi9cbnZhciBnZXRQcm9ncmVzc0Zyb21WYWx1ZSA9IGV4cG9ydHMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUsIGZyb20sIHRvKSB7XG4gICAgcmV0dXJuICh2YWx1ZSAtIGZyb20pIC8gKHRvIC0gZnJvbSk7XG59O1xuXG4vKlxuICAgIE9mZnNldCBiZXR3ZWVuIHR3byBvYmplY3RzIG9mIG51bWJlcnNcblxuICAgIElmIHByb3BlcnR5IGlzIGZvdW5kIGluIGIgbm90IHByZXNlbnQgaW4gYSwgaXQgd2lsbCByZXR1cm4gYDBgIGZvciB0aGF0IHByb3AuXG4gICAgXG4gICAgQHBhcmFtIFtQb2ludF06IEZpcnN0IG9iamVjdFxuICAgIEBwYXJhbSBbUG9pbnRdOiBTZWNvbmQgb2JqZWN0XG4gICAgQHJldHVybiBbT2Zmc2V0XTogRGlzdGFuY2UgbWV0cmljcyBiZXR3ZWVuIHR3byBwb2ludHNcbiovXG52YXIgb2Zmc2V0ID0gZXhwb3J0cy5vZmZzZXQgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgIHZhciBvZmZzZXQgPSB7fTtcblxuICAgIGZvciAodmFyIGtleSBpbiBiKSB7XG4gICAgICAgIGlmIChiLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIG9mZnNldFtrZXldID0gKDAsIF91dGlscy5oYXNQcm9wZXJ0eSkoYSwga2V5KSA/IGJba2V5XSAtIGFba2V5XSA6IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2Zmc2V0O1xufTtcblxuLypcbiAgICBQb2ludCBmcm9tIGFuZ2xlIGFuZCBkaXN0YW5jZVxuICAgIFxuICAgIEBwYXJhbSBbb2JqZWN0XTogMkQgcG9pbnQgb2Ygb3JpZ2luXG4gICAgQHBhcmFtIFtudW1iZXJdOiBBbmdsZSBmcm9tIG9yaWdpblxuICAgIEBwYXJhbSBbbnVtYmVyXTogRGlzdGFuY2UgZnJvbSBvcmlnaW5cbiAgICBAcmV0dXJuIFtvYmplY3RdOiBDYWxjdWxhdGVkIDJEIHBvaW50XG4qL1xudmFyIHBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UgPSBleHBvcnRzLnBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UgPSBmdW5jdGlvbiAob3JpZ2luLCBhbmdsZSwgZGlzdGFuY2UpIHtcbiAgICBhbmdsZSA9IGRlZ3JlZXNUb1JhZGlhbnMoYW5nbGUpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogZGlzdGFuY2UgKiBNYXRoLmNvcyhhbmdsZSkgKyBvcmlnaW4ueCxcbiAgICAgICAgeTogZGlzdGFuY2UgKiBNYXRoLnNpbihhbmdsZSkgKyBvcmlnaW4ueVxuICAgIH07XG59O1xuXG4vKlxuICAgIENvbnZlcnQgcmFkaWFucyB0byBkZWdyZWVzXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBpbiByYWRpYW5zXG4gICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgaW4gZGVncmVlc1xuKi9cbnZhciByYWRpYW5zVG9EZWdyZWVzID0gZXhwb3J0cy5yYWRpYW5zVG9EZWdyZWVzID0gZnVuY3Rpb24gKHJhZGlhbnMpIHtcbiAgICByZXR1cm4gcmFkaWFucyAqIDE4MCAvIE1hdGguUEk7XG59O1xuXG4vKlxuICAgIFJldHVybiByYW5kb20gbnVtYmVyIGJldHdlZW4gcmFuZ2VcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogT3V0cHV0IG1pbmltdW1cbiAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogT3V0cHV0IG1heGltdW1cbiAgICBAcmV0dXJuIFtudW1iZXJdOiBSYW5kb20gbnVtYmVyIHdpdGhpbiByYW5nZSwgb3IgMCBhbmQgMSBpZiBub25lIHByb3ZpZGVkXG4qL1xudmFyIHJhbmRvbSA9IGV4cG9ydHMucmFuZG9tID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBtaW4gPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyAwIDogYXJndW1lbnRzWzBdO1xuICAgIHZhciBtYXggPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyAxIDogYXJndW1lbnRzWzFdO1xuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XG59O1xuXG4vKlxuICAgIENhbGN1bGF0ZSByZWxhdGl2ZSB2YWx1ZVxuICAgIFxuICAgIFRha2VzIHRoZSBvcGVyYXRvciBhbmQgdmFsdWUgZnJvbSBhIHN0cmluZywgaWUgXCIrPTVcIiwgYW5kIGFwcGxpZXNcbiAgICB0byB0aGUgY3VycmVudCB2YWx1ZSB0byByZXNvbHZlIGEgbmV3IHRhcmdldC5cbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcbiAgICBAcGFyYW0gW3N0cmluZ106IFJlbGF0aXZlIHZhbHVlXG4gICAgQHJldHVybiBbbnVtYmVyXTogTmV3IHZhbHVlXG4qL1xudmFyIHJlbGF0aXZlVmFsdWUgPSBleHBvcnRzLnJlbGF0aXZlVmFsdWUgPSBmdW5jdGlvbiAoY3VycmVudCwgcmVsYXRpdmUpIHtcbiAgICB2YXIgbmV3VmFsdWUgPSBjdXJyZW50O1xuICAgIHZhciBlcXVhdGlvbiA9IHJlbGF0aXZlLnNwbGl0KCc9Jyk7XG4gICAgdmFyIG9wZXJhdG9yID0gZXF1YXRpb25bMF07XG5cbiAgICB2YXIgX2ZpbmRWYWx1ZUFuZFVuaXQgPSAoMCwgX3V0aWxzLmZpbmRWYWx1ZUFuZFVuaXQpKGVxdWF0aW9uWzFdKTtcblxuICAgIHZhciB1bml0ID0gX2ZpbmRWYWx1ZUFuZFVuaXQudW5pdDtcbiAgICB2YXIgdmFsdWUgPSBfZmluZFZhbHVlQW5kVW5pdC52YWx1ZTtcblxuXG4gICAgdmFsdWUgPSBwYXJzZUZsb2F0KHZhbHVlKTtcblxuICAgIHN3aXRjaCAob3BlcmF0b3IpIHtcbiAgICAgICAgY2FzZSAnKyc6XG4gICAgICAgICAgICBuZXdWYWx1ZSArPSB2YWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICctJzpcbiAgICAgICAgICAgIG5ld1ZhbHVlIC09IHZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJyonOlxuICAgICAgICAgICAgbmV3VmFsdWUgKj0gdmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnLyc6XG4gICAgICAgICAgICBuZXdWYWx1ZSAvPSB2YWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmICh1bml0KSB7XG4gICAgICAgIG5ld1ZhbHVlICs9IHVuaXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld1ZhbHVlO1xufTtcblxuLypcbiAgICBSZXN0cmljdCB2YWx1ZSB0byByYW5nZVxuICAgIFxuICAgIFJldHVybiB2YWx1ZSB3aXRoaW4gdGhlIHJhbmdlIG9mIGxvd2VyTGltaXQgYW5kIHVwcGVyTGltaXRcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIHRvIGtlZXAgd2l0aGluIHJhbmdlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBvZiByYW5nZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXQgb2YgcmFuZ2VcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBhcyBsaW1pdGVkIHdpdGhpbiBnaXZlbiByYW5nZVxuKi9cbnZhciByZXN0cmljdCA9IGV4cG9ydHMucmVzdHJpY3QgPSBmdW5jdGlvbiAodmFsdWUsIG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIE1hdGgubWF4KE1hdGgubWluKHZhbHVlLCBtYXgpLCBtaW4pO1xufTtcblxuLypcbiAgICBGcmFtZXJhdGUtaW5kZXBlbmRlbnQgc21vb3RoaW5nXG5cbiAgICBAcGFyYW0gW251bWJlcl06IE5ldyB2YWx1ZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogT2xkIHZhbHVlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvblxuICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBTbW9vdGhpbmcgKDAgaXMgbm9uZSlcbiovXG52YXIgc21vb3RoID0gZXhwb3J0cy5zbW9vdGggPSBmdW5jdGlvbiAobmV3VmFsdWUsIG9sZFZhbHVlLCBkdXJhdGlvbikge1xuICAgIHZhciBzbW9vdGhpbmcgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDMgfHwgYXJndW1lbnRzWzNdID09PSB1bmRlZmluZWQgPyAwIDogYXJndW1lbnRzWzNdO1xuICAgIHJldHVybiAoMCwgX3V0aWxzLnRvRGVjaW1hbCkob2xkVmFsdWUgKyBkdXJhdGlvbiAqIChuZXdWYWx1ZSAtIG9sZFZhbHVlKSAvIE1hdGgubWF4KHNtb290aGluZywgZHVyYXRpb24pKTtcbn07XG5cbi8qXG4gICAgQ29udmVydCB4IHBlciBzZWNvbmQgdG8gcGVyIGZyYW1lIHZlbG9jaXR5IGJhc2VkIG9uIGZwc1xuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVW5pdCBwZXIgc2Vjb25kXG4gICAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvbiBpbiBtc1xuKi9cbnZhciBzcGVlZFBlckZyYW1lID0gZXhwb3J0cy5zcGVlZFBlckZyYW1lID0gZnVuY3Rpb24gKHhwcywgZnJhbWVEdXJhdGlvbikge1xuICAgIHJldHVybiAoMCwgX3V0aWxzLmlzTnVtKSh4cHMpID8geHBzIC8gKDEwMDAgLyBmcmFtZUR1cmF0aW9uKSA6IDA7XG59O1xuXG4vKlxuICAgIENvbnZlcnQgdmVsb2NpdHkgaW50byB2ZWxpY2l0eSBwZXIgc2Vjb25kXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBVbml0IHBlciBmcmFtZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb24gaW4gbXNcbiovXG52YXIgc3BlZWRQZXJTZWNvbmQgPSBleHBvcnRzLnNwZWVkUGVyU2Vjb25kID0gZnVuY3Rpb24gKHZlbG9jaXR5LCBmcmFtZUR1cmF0aW9uKSB7XG4gICAgcmV0dXJuIHZlbG9jaXR5ICogKDEwMDAgLyBmcmFtZUR1cmF0aW9uKTtcbn07XG5cbi8qXG4gICAgQ3JlYXRlIHN0ZXBwZWQgdmVyc2lvbiBvZiAwLTEgcHJvZ3Jlc3NcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcbiAgICBAcGFyYW0gW2ludF06IE51bWJlciBvZiBzdGVwc1xuICAgIEByZXR1cm4gW251bWJlcl06IFN0ZXBwZWQgdmFsdWVcbiovXG52YXIgc3RlcFByb2dyZXNzID0gZXhwb3J0cy5zdGVwUHJvZ3Jlc3MgPSBmdW5jdGlvbiAocHJvZ3Jlc3MsIHN0ZXBzKSB7XG4gICAgdmFyIHNlZ21lbnQgPSAxIC8gKHN0ZXBzIC0gMSk7XG4gICAgdmFyIHRhcmdldCA9IDEgLSAxIC8gc3RlcHM7XG4gICAgdmFyIHByb2dyZXNzT2ZUYXJnZXQgPSBNYXRoLm1pbihwcm9ncmVzcyAvIHRhcmdldCwgMSk7XG5cbiAgICByZXR1cm4gTWF0aC5mbG9vcihwcm9ncmVzc09mVGFyZ2V0IC8gc2VnbWVudCkgKiBzZWdtZW50O1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJtTXZZMkZzWXk1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenRCUVVGQk96dEJRVTlCTEVsQlFVMHNZVUZCWVR0QlFVTm1MRTlCUVVjc1EwRkJTRHRCUVVOQkxFOUJRVWNzUTBGQlNEdEJRVU5CTEU5QlFVY3NRMEZCU0R0RFFVaEZPenRCUVUxT0xFbEJRVTBzWVVGQllTeFZRVUZETEVOQlFVUXNSVUZCU1N4RFFVRktPMWRCUVZVc1MwRkJTeXhIUVVGTUxFTkJRVk1zU1VGQlNTeERRVUZLTzBOQlFXNUNPenM3T3pzN096czdPenM3UVVGWldpeEpRVUZOTEhkQ1FVRlJMRlZCUVVNc1EwRkJSRHRSUVVGSkxEQkVRVUZKTzFkQlFXVXNhVUpCUVdsQ0xFdEJRVXNzUzBGQlRDeERRVUZYTEVWQlFVVXNRMEZCUml4SFFVRk5MRVZCUVVVc1EwRkJSaXhGUVVGTExFVkJRVVVzUTBGQlJpeEhRVUZOTEVWQlFVVXNRMEZCUml4RFFVRTNRenREUVVGMlFqczdPenM3T3pzN1FVRlJaQ3hKUVVGTkxEaERRVUZ0UWl4VlFVRkRMRTlCUVVRN1YwRkJZU3hWUVVGVkxFdEJRVXNzUlVGQlRDeEhRVUZWTEVkQlFYQkNPME5CUVdJN096czdPenM3T3pzN096czdPenM3T3pzN08wRkJiMEo2UWl4SlFVRk5MREJDUVVGVExGVkJRVU1zUTBGQlJDeEZRVUZKTEVOQlFVb3NSVUZCVHl4UlFVRlFPMWRCUVc5Q0xFbEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVb3NRMEZCUkN4SFFVRlZMRkZCUVZZN1EwRkJla0k3T3pzN096czdPenM3TzBGQlYyWXNTVUZCVFN3NFFrRkJWeXhWUVVGRExFTkJRVVFzUlVGQmRVSTdVVUZCYmtJc01FUkJRVWtzTUVKQlFXVTdPenRCUVVVelF5eFJRVUZKTEd0Q1FVRk5MRU5CUVU0c1EwRkJTaXhGUVVGak8wRkJRMVlzWlVGQlR5eFhRVUZYTEVOQlFWZ3NSVUZCWXl4RFFVRmtMRU5CUVZBN096dEJRVVJWTEV0QlFXUXNUVUZKVHp0QlFVTklMR2RDUVVGTkxGTkJRVk1zVjBGQlZ5eEZRVUZGTEVOQlFVWXNSVUZCU3l4RlFVRkZMRU5CUVVZc1EwRkJla0lzUTBGRVNEdEJRVVZJTEdkQ1FVRk5MRk5CUVZNc1YwRkJWeXhGUVVGRkxFTkJRVVlzUlVGQlN5eEZRVUZGTEVOQlFVWXNRMEZCZWtJc1EwRkdTRHRCUVVkSUxHZENRVUZOTEZOQlFWTXNhVUpCUVVNc1EwRkJUU3hGUVVGRkxFTkJRVVlzUTBGQlVDeEhRVUZsTEZkQlFWY3NSVUZCUlN4RFFVRkdMRVZCUVVzc1JVRkJSU3hEUVVGR0xFTkJRUzlDTEVkQlFYTkRMRU5CUVhSRExFTkJTRm83TzBGQlMwZ3NiVUpCUVU4c1MwRkJTeXhKUVVGTUxFTkJRVlVzVTBGQlF5eFJRVUZWTEVWQlFWZ3NXVUZCYVVJc1VVRkJWU3hGUVVFelFpeFpRVUZwUXl4UlFVRlZMRVZCUVRORExFTkJRV3BDTEVOQlRFYzdVMEZLVUR0RFFVWnZRanM3T3pzN096czdPenM3TzBGQmVVSnFRaXhKUVVGTkxITkNRVUZQTEZWQlFVTXNVVUZCUkN4RlFVRlhMRWxCUVZnc1JVRkJhVUlzUlVGQmFrSXNSVUZCY1VJc1NVRkJja0lzUlVGQk9FSTdRVUZET1VNc1VVRkJUU3hyUWtGQmEwSXNVMEZCVXl4UlFVRlVMRVZCUVcxQ0xFTkJRVzVDTEVWQlFYTkNMRU5CUVhSQ0xFTkJRV3hDTEVOQlJIZERPMEZCUlRsRExGRkJRVTBzWjBKQlFXZENMRXRCUVVzc1pVRkJUQ3hEUVVGb1FpeERRVVozUXpzN1FVRkpPVU1zVjBGQlR5eHhRa0ZCY1VJc1lVRkJja0lzUlVGQmIwTXNTVUZCY0VNc1JVRkJNRU1zUlVGQk1VTXNRMEZCVUN4RFFVbzRRenREUVVFNVFqczdPenM3T3pzN096czdRVUZuUW1Jc1NVRkJUU3hyUTBGQllTeFZRVUZETEVOQlFVUXNSVUZCU1N4RFFVRktPMWRCUVZVc1MwRkJTeXhKUVVGTUxFTkJRVlVzUTBGQlF5eEhRVUZKTEVOQlFVb3NSMEZCVlN4SlFVRkpMRU5CUVVvN1EwRkJMMEk3T3pzN096czdPenM3T3pzN1FVRmhia0lzU1VGQlRTeHpSRUZCZFVJc1ZVRkJReXhSUVVGRUxFVkJRVmNzU1VGQldDeEZRVUZwUWl4RlFVRnFRanRYUVVGM1FpeERRVUZITEZGQlFVWXNSMEZCWVN4SlFVRmlMRWRCUVhOQ0xGZEJRVmNzUlVGQldDeEhRVUZwUWl4SlFVRjRRenREUVVGNFFqczdPenM3T3pzN096czdPenM3UVVGak4wSXNTVUZCVFN4elJFRkJkVUlzVlVGQlF5eExRVUZFTEVWQlFWRXNTVUZCVWl4RlFVRmpMRVZCUVdRN1YwRkJjVUlzUTBGQlF5eFJRVUZSTEVsQlFWSXNRMEZCUkN4SlFVRnJRaXhMUVVGTExFbEJRVXdzUTBGQmJFSTdRMEZCY2tJN096czdPenM3T3pzN08wRkJWemRDTEVsQlFVMHNNRUpCUVZNc1ZVRkJReXhEUVVGRUxFVkJRVWtzUTBGQlNpeEZRVUZWTzBGQlF6VkNMRkZCUVUwc1UwRkJVeXhGUVVGVUxFTkJSSE5DT3p0QlFVYzFRaXhUUVVGTExFbEJRVWtzUjBGQlNpeEpRVUZYTEVOQlFXaENMRVZCUVcxQ08wRkJRMllzV1VGQlNTeEZRVUZGTEdOQlFVWXNRMEZCYVVJc1IwRkJha0lzUTBGQlNpeEZRVUV5UWp0QlFVTjJRaXh0UWtGQlR5eEhRVUZRTEVsQlFXTXNkMEpCUVZrc1EwRkJXaXhGUVVGbExFZEJRV1lzU1VGQmMwSXNSVUZCUlN4SFFVRkdMRWxCUVZNc1JVRkJSU3hIUVVGR0xFTkJRVlFzUjBGQmEwSXNRMEZCZUVNc1EwRkVVenRUUVVFelFqdExRVVJLT3p0QlFVMUJMRmRCUVU4c1RVRkJVQ3hEUVZRMFFqdERRVUZXT3pzN096czdPenM3TzBGQmIwSm1MRWxCUVUwc1owVkJRVFJDTEZWQlFVTXNUVUZCUkN4RlFVRlRMRXRCUVZRc1JVRkJaMElzVVVGQmFFSXNSVUZCTmtJN1FVRkRiRVVzV1VGQlVTeHBRa0ZCYVVJc1MwRkJha0lzUTBGQlVpeERRVVJyUlRzN1FVRkhiRVVzVjBGQlR6dEJRVU5JTEZkQlFVY3NWMEZCVnl4TFFVRkxMRWRCUVV3c1EwRkJVeXhMUVVGVUxFTkJRVmdzUjBGQk5rSXNUMEZCVHl4RFFVRlFPMEZCUTJoRExGZEJRVWNzVjBGQlZ5eExRVUZMTEVkQlFVd3NRMEZCVXl4TFFVRlVMRU5CUVZnc1IwRkJOa0lzVDBGQlR5eERRVUZRTzB0QlJuQkRMRU5CU0d0Rk8wTkJRVGRDT3pzN096czdPenRCUVdWc1F5eEpRVUZOTERoRFFVRnRRaXhWUVVGRExFOUJRVVE3VjBGQllTeFZRVUZWTEVkQlFWWXNSMEZCWjBJc1MwRkJTeXhGUVVGTU8wTkJRVGRDT3pzN096czdPenM3UVVGVGVrSXNTVUZCVFN3d1FrRkJVenRSUVVGRExEUkVRVUZOTzFGQlFVY3NORVJCUVUwN1YwRkJUU3hMUVVGTExFMUJRVXdzVFVGQmFVSXNUVUZCVFN4SFFVRk9MRU5CUVdwQ0xFZEJRVGhDTEVkQlFUbENPME5CUVhSQ096czdPenM3T3pzN096czdRVUZaWml4SlFVRk5MSGREUVVGblFpeFZRVUZETEU5QlFVUXNSVUZCVlN4UlFVRldMRVZCUVhWQ08wRkJRMmhFTEZGQlFVa3NWMEZCVnl4UFFVRllMRU5CUkRSRE8wRkJSV2hFTEZGQlFVMHNWMEZCVnl4VFFVRlRMRXRCUVZRc1EwRkJaU3hIUVVGbUxFTkJRVmdzUTBGR01FTTdRVUZIYUVRc1VVRkJUU3hYUVVGWExGTkJRVk1zUTBGQlZDeERRVUZZTEVOQlNEQkRPenMwUWtGSk1VSXNOa0pCUVdsQ0xGTkJRVk1zUTBGQlZDeERRVUZxUWl4RlFVb3dRanM3VVVGSk1VTXNPRUpCU2pCRE8xRkJTWEJETEdkRFFVcHZRenM3TzBGQlRXaEVMRmxCUVZFc1YwRkJWeXhMUVVGWUxFTkJRVklzUTBGT1owUTdPMEZCVVdoRUxGbEJRVkVzVVVGQlVqdEJRVU5CTEdGQlFVc3NSMEZCVER0QlFVTkpMSGRDUVVGWkxFdEJRVm9zUTBGRVNqdEJRVVZKTEd0Q1FVWktPMEZCUkVFc1lVRkpTeXhIUVVGTU8wRkJRMGtzZDBKQlFWa3NTMEZCV2l4RFFVUktPMEZCUlVrc2EwSkJSa283UVVGS1FTeGhRVTlMTEVkQlFVdzdRVUZEU1N4M1FrRkJXU3hMUVVGYUxFTkJSRW83UVVGRlNTeHJRa0ZHU2p0QlFWQkJMR0ZCVlVzc1IwRkJURHRCUVVOSkxIZENRVUZaTEV0QlFWb3NRMEZFU2p0QlFVVkpMR3RDUVVaS08wRkJWa0VzUzBGU1owUTdPMEZCZFVKb1JDeFJRVUZKTEVsQlFVb3NSVUZCVlR0QlFVTk9MRzlDUVVGWkxFbEJRVm9zUTBGRVRUdExRVUZXT3p0QlFVbEJMRmRCUVU4c1VVRkJVQ3hEUVROQ1owUTdRMEZCZGtJN096czdPenM3T3pzN096dEJRWGREZEVJc1NVRkJUU3c0UWtGQlZ5eFZRVUZETEV0QlFVUXNSVUZCVVN4SFFVRlNMRVZCUVdFc1IwRkJZanRYUVVGeFFpeExRVUZMTEVkQlFVd3NRMEZCVXl4TFFVRkxMRWRCUVV3c1EwRkJVeXhMUVVGVUxFVkJRV2RDTEVkQlFXaENMRU5CUVZRc1JVRkJLMElzUjBGQkwwSTdRMEZCY2tJN096czdPenM3T3pzN1FVRlZha0lzU1VGQlRTd3dRa0ZCVXl4VlFVRkRMRkZCUVVRc1JVRkJWeXhSUVVGWUxFVkJRWEZDTEZGQlFYSkNPMUZCUVN0Q0xHdEZRVUZaTzFkQlFVMHNjMEpCUVZVc1YwRkJXU3haUVVGWkxGZEJRVmNzVVVGQldDeERRVUZhTEVkQlFXMURMRXRCUVVzc1IwRkJUQ3hEUVVGVExGTkJRVlFzUlVGQmIwSXNVVUZCY0VJc1EwRkJia003UTBGQmRrVTdPenM3T3pzN08wRkJVV1lzU1VGQlRTeDNRMEZCWjBJc1ZVRkJReXhIUVVGRUxFVkJRVTBzWVVGQlRqdFhRVUYzUWl4cFFrRkJReXhEUVVGTkxFZEJRVTRzUTBGQlJDeEhRVUZsTEU5QlFVOHNUMEZCVHl4aFFVRlFMRU5CUVZBc1IwRkJLMElzUTBGQk9VTTdRMEZCZUVJN096czdPenM3TzBGQlVYUkNMRWxCUVUwc01FTkJRV2xDTEZWQlFVTXNVVUZCUkN4RlFVRlhMR0ZCUVZnN1YwRkJOa0lzV1VGQldTeFBRVUZQTEdGQlFWQXNRMEZCV2p0RFFVRTNRanM3T3pzN096czdPMEZCVTNaQ0xFbEJRVTBzYzBOQlFXVXNWVUZCUXl4UlFVRkVMRVZCUVZjc1MwRkJXQ3hGUVVGeFFqdEJRVU0zUXl4UlFVRk5MRlZCUVZVc1MwRkJTeXhSUVVGUkxFTkJRVklzUTBGQlRDeERRVVEyUWp0QlFVVTNReXhSUVVGTkxGTkJRVk1zU1VGQlN5eEpRVUZKTEV0QlFVb3NRMEZHZVVJN1FVRkhOME1zVVVGQlRTeHRRa0ZCYlVJc1MwRkJTeXhIUVVGTUxFTkJRVk1zVjBGQlZ5eE5RVUZZTEVWQlFXMUNMRU5CUVRWQ0xFTkJRVzVDTEVOQlNIVkRPenRCUVVzM1F5eFhRVUZQTEV0QlFVc3NTMEZCVEN4RFFVRlhMRzFDUVVGdFFpeFBRVUZ1UWl4RFFVRllMRWRCUVhsRExFOUJRWHBETEVOQlRITkRPME5CUVhKQ0lpd2labWxzWlNJNkltTmhiR011YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUh0Y2JpQWdJQ0JvWVhOUWNtOXdaWEowZVN4Y2JpQWdJQ0JwYzA1MWJTeGNiaUFnSUNCbWFXNWtWbUZzZFdWQmJtUlZibWwwTEZ4dUlDQWdJSFJ2UkdWamFXMWhiRnh1ZlNCbWNtOXRJQ2N1TDNWMGFXeHpKenRjYmx4dVkyOXVjM1FnV2tWU1QxOVFUMGxPVkNBOUlIdGNiaUFnSUNCNE9pQXdMRnh1SUNBZ0lIazZJREFzWEc0Z0lDQWdlam9nTUZ4dWZUdGNibHh1WTI5dWMzUWdaR2x6ZEdGdVkyVXhSQ0E5SUNoaExDQmlLU0E5UGlCTllYUm9MbUZpY3loaElDMGdZaWs3WEc1Y2JpOHFYRzRnSUNBZ1FXNW5iR1VnWW1WMGQyVmxiaUJ3YjJsdWRITmNiaUFnSUNCY2JpQWdJQ0JVY21GdWMyeGhkR1Z6SUhSb1pTQm9lWEJ2ZEdobGRHbGpZV3dnYkdsdVpTQnpieUIwYUdGMElIUm9aU0FuWm5KdmJTY2dZMjl2Y21ScGJtRjBaWE5jYmlBZ0lDQmhjbVVnWVhRZ01Dd3dYRzRnSUNBZ1hHNGdJQ0FnUUhCaGNtRnRJRnR2WW1wbFkzUmRPaUJZSUdGdVpDQlpJR052YjNKa2FXNWhkR1Z6SUc5bUlHWnliMjBnY0c5cGJuUmNiaUFnSUNCQWNHRnlZVzBnVzI5aWFtVmpkRjA2SUZnZ1lXNWtJRmtnWTI5eVpHbHVZWFJsY3lCdlppQjBieUJ3YjJsdWRGeHVJQ0FnSUVCeVpYUjFjbTRnVzNKaFpHbGhibDA2SUVGdVoyeGxJR0psZEhkbFpXNGdkR2hsSUhSM2J5QndiMmx1ZEhNZ2FXNGdjbUZrYVdGdWMxeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQmhibWRzWlNBOUlDaGhMQ0JpSUQwZ1drVlNUMTlRVDBsT1ZDa2dQVDRnY21Ga2FXRnVjMVJ2UkdWbmNtVmxjeWhOWVhSb0xtRjBZVzR5S0dFdWVDQXRJR0l1ZUN3Z1lTNTVJQzBnWWk1NUtTazdYRzVjYmk4cVhHNGdJQ0FnUTI5dWRtVnlkQ0JrWldkeVpXVnpJSFJ2SUhKaFpHbGhibk5jYmlBZ0lDQmNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZaaGJIVmxJR2x1SUdSbFozSmxaWE5jYmlBZ0lDQkFjbVYwZFhKdUlGdHVkVzFpWlhKZE9pQldZV3gxWlNCcGJpQnlZV1JwWVc1elhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHUmxaM0psWlhOVWIxSmhaR2xoYm5NZ1BTQW9aR1ZuY21WbGN5a2dQVDRnWkdWbmNtVmxjeUFxSUUxaGRHZ3VVRWtnTHlBeE9EQTdYRzVjYmk4cVhHNGdJQ0FnUkdsc1lYUmxYRzRnSUNBZ1hHNGdJQ0FnUTJoaGJtZGxJSFJvWlNCd2NtOW5jbVZ6YzJsdmJpQmlaWFIzWldWdUlHRWdZVzVrSUdJZ1lXTmpiM0prYVc1bklIUnZJR1JwYkdGMGFXOXVMbHh1SUNBZ0lGeHVJQ0FnSUZOdklHUnBiR0YwYVc5dUlEMGdNQzQxSUhkdmRXeGtJR05vWVc1blpWeHVJQ0FnSUZ4dUlDQWdJR0VnTFMwdExTMHRMUzB0SUdKY2JpQWdJQ0JjYmlBZ0lDQjBiMXh1SUNBZ0lGeHVJQ0FnSUdFZ0xTMHRMU0JpWEc0Z0lDQWdYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCUWNtVjJhVzkxY3lCMllXeDFaVnh1SUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1EzVnljbVZ1ZENCMllXeDFaVnh1SUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1JHbHNZWFJsSUhCeWIyZHlaWE56SUdKNUlIaGNiaUFnSUNCQWNtVjBkWEp1SUZ0dWRXMWlaWEpkT2lCUWNtVjJhVzkxY3lCMllXeDFaU0J3YkhWeklIUm9aU0JrYVd4aGRHVmtJR1JwWm1abGNtVnVZMlZjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnWkdsc1lYUmxJRDBnS0dFc0lHSXNJR1JwYkdGMGFXOXVLU0E5UGlCaElDc2dLQ2hpSUMwZ1lTa2dLaUJrYVd4aGRHbHZiaWs3WEc1Y2JpOHFYRzRnSUNBZ1JHbHpkR0Z1WTJWY2JpQWdJQ0JjYmlBZ0lDQlNaWFIxY201eklIUm9aU0JrYVhOMFlXNWpaU0JpWlhSM1pXVnVJSFIzYnlCdUlHUnBiV1Z1YzJsdmJtRnNJSEJ2YVc1MGN5NWNiaUFnSUNCY2JpQWdJQ0JBY0dGeVlXMGdXMjlpYW1WamRDOXVkVzFpWlhKZE9pQjRJR0Z1WkNCNUlHOXlJR3AxYzNRZ2VDQnZaaUJ3YjJsdWRDQkJYRzRnSUNBZ1FIQmhjbUZ0SUZ0dlltcGxZM1F2Ym5WdFltVnlYVG9nS0c5d2RHbHZibUZzS1RvZ2VDQmhibVFnZVNCdmNpQnFkWE4wSUhnZ2IyWWdjRzlwYm5RZ1FseHVJQ0FnSUVCeVpYUjFjbTRnVzI1MWJXSmxjbDA2SUZSb1pTQmthWE4wWVc1alpTQmlaWFIzWldWdUlIUm9aU0IwZDI4Z2NHOXBiblJ6WEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdScGMzUmhibU5sSUQwZ0tHRXNJR0lnUFNCYVJWSlBYMUJQU1U1VUtTQTlQaUI3WEc0Z0lDQWdMeThnTVVRZ1pHbHRaVzV6YVc5dWMxeHVJQ0FnSUdsbUlDaHBjMDUxYlNoaEtTa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdaR2x6ZEdGdVkyVXhSQ2hoTENCaUtUdGNibHh1SUNBZ0lDOHZJRTExYkhScExXUnBiV1Z1YzJsdmJtRnNYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnZUVSbGJIUmhJRDBnWkdsemRHRnVZMlV4UkNoaExuZ3NJR0l1ZUNrN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUhsRVpXeDBZU0E5SUdScGMzUmhibU5sTVVRb1lTNTVMQ0JpTG5rcE8xeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCNlJHVnNkR0VnUFNBb2FYTk9kVzBvWVM1NktTa2dQeUJrYVhOMFlXNWpaVEZFS0dFdWVpd2dZaTU2S1NBNklEQTdYRzVjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJRTFoZEdndWMzRnlkQ2dvZUVSbGJIUmhJQ29xSURJcElDc2dLSGxFWld4MFlTQXFLaUF5S1NBcklDaDZSR1ZzZEdFZ0tpb2dNaWtwTzF4dUlDQWdJSDFjYm4wN1hHNWNiaThxWEc0Z0lDQWdSV0Z6WlNCMllXeDFaU0IzYVhSb2FXNGdjbUZ1WjJWa0lIQmhjbUZ0WlhSbGNuTmNiaUFnSUNCY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRkJ5YjJkeVpYTnpJR0psZEhkbFpXNGdNQ0JoYm1RZ01WeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVm1Gc2RXVWdiMllnTUNCd2NtOW5jbVZ6YzF4dUlDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dWbUZzZFdVZ2IyWWdNU0J3Y205bmNtVnpjMXh1SUNBZ0lFQndZWEpoYlNCYmMzUnlhVzVuSUh4OElHWjFibU4wYVc5dVhUb2dUbUZ0WlNCdlppQndjbVZ6WlhRZ1pXRnphVzVuWEc0Z0lDQWdJQ0FnSUhSdklIVnpaU0J2Y2lCblpXNWxjbUYwWldRZ1pXRnphVzVuSUdaMWJtTjBhVzl1WEc0Z0lDQWdRSEpsZEhWeWJpQmJiblZ0WW1WeVhUb2dWbUZzZFdVZ2IyWWdaV0Z6WldRZ2NISnZaM0psYzNNZ2FXNGdjbUZ1WjJWY2Jpb3ZJRnh1Wlhod2IzSjBJR052Ym5OMElHVmhjMlVnUFNBb2NISnZaM0psYzNNc0lHWnliMjBzSUhSdkxDQmxZWE5sS1NBOVBpQjdYRzRnSUNBZ1kyOXVjM1FnY0hKdlozSmxjM05NYVcxcGRHVmtJRDBnY21WemRISnBZM1FvY0hKdlozSmxjM01zSURBc0lERXBPMXh1SUNBZ0lHTnZibk4wSUdWaGMyVmtVSEp2WjNKbGMzTWdQU0JsWVhObEtIQnliMmR5WlhOelRHbHRhWFJsWkNrN1hHNWNiaUFnSUNCeVpYUjFjbTRnWjJWMFZtRnNkV1ZHY205dFVISnZaM0psYzNNb1pXRnpaV1JRY205bmNtVnpjeXdnWm5KdmJTd2dkRzhwTzF4dWZUdGNiaUJjYmk4cVhHNGdJQ0FnU0hsd2IzUmxiblZ6WlZ4dUlDQWdJRnh1SUNBZ0lGSmxkSFZ5Ym5NZ2RHaGxJR2g1Y0c5MFpXNTFjMlVzSUhOcFpHVWdReXdnWjJsMlpXNGdkR2hsSUd4bGJtZDBhSE1nYjJZZ2MybGtaWE1nUVNCaGJtUWdRaTVjYmlBZ0lDQmNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUV4bGJtZDBhQ0J2WmlCQlhHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJNWlc1bmRHZ2diMllnUWx4dUlDQWdJRUJ5WlhSMWNtNGdXMjUxYldKbGNsMDZJRXhsYm1kMGFDQnZaaUJEWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdoNWNHOTBaVzUxYzJVZ1BTQW9ZU3dnWWlrZ1BUNGdUV0YwYUM1emNYSjBLQ2hoSUNvZ1lTa2dLeUFvWWlBcUlHSXBLVHRjYmx4dUx5cGNiaUFnSUNCV1lXeDFaU0JwYmlCeVlXNW5aU0JtY205dElIQnliMmR5WlhOelhHNGdJQ0FnWEc0Z0lDQWdSMmwyWlc0Z1lTQnNiM2RsY2lCc2FXMXBkQ0JoYm1RZ1lXNGdkWEJ3WlhJZ2JHbHRhWFFzSUhkbElISmxkSFZ5YmlCMGFHVWdkbUZzZFdVZ2QybDBhR2x1WEc0Z0lDQWdkR2hoZENCeVlXNW5aU0JoY3lCbGVIQnlaWE56WldRZ1lua2djSEp2WjNKbGMzTWdLR0VnYm5WdFltVnlJR1p5YjIwZ01DMHhLVnh1SUNBZ0lGeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVkdobElIQnliMmR5WlhOeklHSmxkSGRsWlc0Z2JHOTNaWElnWVc1a0lIVndjR1Z5SUd4cGJXbDBjeUJsZUhCeVpYTnpaV1FnTUMweFhHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJNYjNkbGNpQnNhVzFwZENCdlppQnlZVzVuWlZ4dUlDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dWWEJ3WlhJZ2JHbHRhWFFnYjJZZ2NtRnVaMlZjYmlBZ0lDQkFjbVYwZFhKdUlGdHVkVzFpWlhKZE9pQldZV3gxWlNCaGN5QmpZV3hqZFd4aGRHVmtJR1p5YjIwZ2NISnZaM0psYzNNZ2QybDBhR2x1SUhKaGJtZGxJQ2h1YjNRZ2JHbHRhWFJsWkNCM2FYUm9hVzRnY21GdVoyVXBYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR2RsZEZaaGJIVmxSbkp2YlZCeWIyZHlaWE56SUQwZ0tIQnliMmR5WlhOekxDQm1jbTl0TENCMGJ5a2dQVDRnS0MwZ2NISnZaM0psYzNNZ0tpQm1jbTl0S1NBcklDaHdjbTluY21WemN5QXFJSFJ2S1NBcklHWnliMjA3WEc1Y2JpOHFYRzRnSUNBZ1VISnZaM0psYzNNZ2QybDBhR2x1SUdkcGRtVnVJSEpoYm1kbFhHNGdJQ0FnWEc0Z0lDQWdSMmwyWlc0Z1lTQnNiM2RsY2lCc2FXMXBkQ0JoYm1RZ1lXNGdkWEJ3WlhJZ2JHbHRhWFFzSUhkbElISmxkSFZ5YmlCMGFHVWdjSEp2WjNKbGMzTmNiaUFnSUNBb1pYaHdjbVZ6YzJWa0lHRnpJR0VnYm5WdFltVnlJREF0TVNrZ2NtVndjbVZ6Wlc1MFpXUWdZbmtnZEdobElHZHBkbVZ1SUhaaGJIVmxMQ0JoYm1SY2JpQWdJQ0JzYVcxcGRDQjBhR0YwSUhCeWIyZHlaWE56SUhSdklIZHBkR2hwYmlBd0xURXVYRzRnSUNBZ1hHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJXWVd4MVpTQjBieUJtYVc1a0lIQnliMmR5WlhOeklIZHBkR2hwYmlCbmFYWmxiaUJ5WVc1blpWeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVEc5M1pYSWdiR2x0YVhRZ1hHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJWY0hCbGNpQnNhVzFwZEZ4dUlDQWdJRUJ5WlhSMWNtNGdXMjUxYldKbGNsMDZJRkJ5YjJkeVpYTnpJRzltSUhaaGJIVmxJSGRwZEdocGJpQnlZVzVuWlNCaGN5QmxlSEJ5WlhOelpXUWdNQzB4WEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdkbGRGQnliMmR5WlhOelJuSnZiVlpoYkhWbElEMGdLSFpoYkhWbExDQm1jbTl0TENCMGJ5a2dQVDRnS0haaGJIVmxJQzBnWm5KdmJTa2dMeUFvZEc4Z0xTQm1jbTl0S1R0Y2JseHVMeXBjYmlBZ0lDQlBabVp6WlhRZ1ltVjBkMlZsYmlCMGQyOGdiMkpxWldOMGN5QnZaaUJ1ZFcxaVpYSnpYRzVjYmlBZ0lDQkpaaUJ3Y205d1pYSjBlU0JwY3lCbWIzVnVaQ0JwYmlCaUlHNXZkQ0J3Y21WelpXNTBJR2x1SUdFc0lHbDBJSGRwYkd3Z2NtVjBkWEp1SUdBd1lDQm1iM0lnZEdoaGRDQndjbTl3TGx4dUlDQWdJRnh1SUNBZ0lFQndZWEpoYlNCYlVHOXBiblJkT2lCR2FYSnpkQ0J2WW1wbFkzUmNiaUFnSUNCQWNHRnlZVzBnVzFCdmFXNTBYVG9nVTJWamIyNWtJRzlpYW1WamRGeHVJQ0FnSUVCeVpYUjFjbTRnVzA5bVpuTmxkRjA2SUVScGMzUmhibU5sSUcxbGRISnBZM01nWW1WMGQyVmxiaUIwZDI4Z2NHOXBiblJ6WEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUc5bVpuTmxkQ0E5SUNoaExDQmlLU0E5UGlCN1hHNGdJQ0FnWTI5dWMzUWdiMlptYzJWMElEMGdlMzA3WEc1Y2JpQWdJQ0JtYjNJZ0tHeGxkQ0JyWlhrZ2FXNGdZaWtnZTF4dUlDQWdJQ0FnSUNCcFppQW9ZaTVvWVhOUGQyNVFjbTl3WlhKMGVTaHJaWGtwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J2Wm1aelpYUmJhMlY1WFNBOUlHaGhjMUJ5YjNCbGNuUjVLR0VzSUd0bGVTa2dQeUJpVzJ0bGVWMGdMU0JoVzJ0bGVWMGdPaUF3TzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WMGRYSnVJRzltWm5ObGREdGNibjA3WEc1Y2JpOHFYRzRnSUNBZ1VHOXBiblFnWm5KdmJTQmhibWRzWlNCaGJtUWdaR2x6ZEdGdVkyVmNiaUFnSUNCY2JpQWdJQ0JBY0dGeVlXMGdXMjlpYW1WamRGMDZJREpFSUhCdmFXNTBJRzltSUc5eWFXZHBibHh1SUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1FXNW5iR1VnWm5KdmJTQnZjbWxuYVc1Y2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRVJwYzNSaGJtTmxJR1p5YjIwZ2IzSnBaMmx1WEc0Z0lDQWdRSEpsZEhWeWJpQmJiMkpxWldOMFhUb2dRMkZzWTNWc1lYUmxaQ0F5UkNCd2IybHVkRnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0J3YjJsdWRFWnliMjFCYm1kc1pVRnVaRVJwYzNSaGJtTmxJRDBnS0c5eWFXZHBiaXdnWVc1bmJHVXNJR1JwYzNSaGJtTmxLU0E5UGlCN1hHNGdJQ0FnWVc1bmJHVWdQU0JrWldkeVpXVnpWRzlTWVdScFlXNXpLR0Z1WjJ4bEtUdGNibHh1SUNBZ0lISmxkSFZ5YmlCN1hHNGdJQ0FnSUNBZ0lIZzZJR1JwYzNSaGJtTmxJQ29nVFdGMGFDNWpiM01vWVc1bmJHVXBJQ3NnYjNKcFoybHVMbmdzWEc0Z0lDQWdJQ0FnSUhrNklHUnBjM1JoYm1ObElDb2dUV0YwYUM1emFXNG9ZVzVuYkdVcElDc2diM0pwWjJsdUxubGNiaUFnSUNCOU8xeHVmVHRjYmx4dUx5cGNiaUFnSUNCRGIyNTJaWEowSUhKaFpHbGhibk1nZEc4Z1pHVm5jbVZsYzF4dUlDQWdJRnh1SUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1ZtRnNkV1VnYVc0Z2NtRmthV0Z1YzF4dUlDQWdJRUJ5WlhSMWNtNGdXMjUxYldKbGNsMDZJRlpoYkhWbElHbHVJR1JsWjNKbFpYTmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdjbUZrYVdGdWMxUnZSR1ZuY21WbGN5QTlJQ2h5WVdScFlXNXpLU0E5UGlCeVlXUnBZVzV6SUNvZ01UZ3dJQzhnVFdGMGFDNVFTVHRjYmx4dUx5cGNiaUFnSUNCU1pYUjFjbTRnY21GdVpHOXRJRzUxYldKbGNpQmlaWFIzWldWdUlISmhibWRsWEc0Z0lDQWdYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkSUNodmNIUnBiMjVoYkNrNklFOTFkSEIxZENCdGFXNXBiWFZ0WEc0Z0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZElDaHZjSFJwYjI1aGJDazZJRTkxZEhCMWRDQnRZWGhwYlhWdFhHNGdJQ0FnUUhKbGRIVnliaUJiYm5WdFltVnlYVG9nVW1GdVpHOXRJRzUxYldKbGNpQjNhWFJvYVc0Z2NtRnVaMlVzSUc5eUlEQWdZVzVrSURFZ2FXWWdibTl1WlNCd2NtOTJhV1JsWkZ4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCeVlXNWtiMjBnUFNBb2JXbHVJRDBnTUN3Z2JXRjRJRDBnTVNrZ1BUNGdUV0YwYUM1eVlXNWtiMjBvS1NBcUlDaHRZWGdnTFNCdGFXNHBJQ3NnYldsdU8xeHVYRzR2S2x4dUlDQWdJRU5oYkdOMWJHRjBaU0J5Wld4aGRHbDJaU0IyWVd4MVpWeHVJQ0FnSUZ4dUlDQWdJRlJoYTJWeklIUm9aU0J2Y0dWeVlYUnZjaUJoYm1RZ2RtRnNkV1VnWm5KdmJTQmhJSE4wY21sdVp5d2dhV1VnWENJclBUVmNJaXdnWVc1a0lHRndjR3hwWlhOY2JpQWdJQ0IwYnlCMGFHVWdZM1Z5Y21WdWRDQjJZV3gxWlNCMGJ5QnlaWE52YkhabElHRWdibVYzSUhSaGNtZGxkQzVjYmlBZ0lDQmNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUVOMWNuSmxiblFnZG1Gc2RXVmNiaUFnSUNCQWNHRnlZVzBnVzNOMGNtbHVaMTA2SUZKbGJHRjBhWFpsSUhaaGJIVmxYRzRnSUNBZ1FISmxkSFZ5YmlCYmJuVnRZbVZ5WFRvZ1RtVjNJSFpoYkhWbFhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElISmxiR0YwYVhabFZtRnNkV1VnUFNBb1kzVnljbVZ1ZEN3Z2NtVnNZWFJwZG1VcElEMCtJSHRjYmlBZ0lDQnNaWFFnYm1WM1ZtRnNkV1VnUFNCamRYSnlaVzUwTzF4dUlDQWdJR052Ym5OMElHVnhkV0YwYVc5dUlEMGdjbVZzWVhScGRtVXVjM0JzYVhRb0p6MG5LVHRjYmlBZ0lDQmpiMjV6ZENCdmNHVnlZWFJ2Y2lBOUlHVnhkV0YwYVc5dVd6QmRPMXh1SUNBZ0lHeGxkQ0I3SUhWdWFYUXNJSFpoYkhWbElIMGdQU0JtYVc1a1ZtRnNkV1ZCYm1SVmJtbDBLR1Z4ZFdGMGFXOXVXekZkS1R0Y2JseHVJQ0FnSUhaaGJIVmxJRDBnY0dGeWMyVkdiRzloZENoMllXeDFaU2s3WEc1Y2JpQWdJQ0J6ZDJsMFkyZ2dLRzl3WlhKaGRHOXlLU0I3WEc0Z0lDQWdZMkZ6WlNBbkt5YzZYRzRnSUNBZ0lDQWdJRzVsZDFaaGJIVmxJQ3M5SUhaaGJIVmxPMXh1SUNBZ0lDQWdJQ0JpY21WaGF6dGNiaUFnSUNCallYTmxJQ2N0SnpwY2JpQWdJQ0FnSUNBZ2JtVjNWbUZzZFdVZ0xUMGdkbUZzZFdVN1hHNGdJQ0FnSUNBZ0lHSnlaV0ZyTzF4dUlDQWdJR05oYzJVZ0p5b25PbHh1SUNBZ0lDQWdJQ0J1WlhkV1lXeDFaU0FxUFNCMllXeDFaVHRjYmlBZ0lDQWdJQ0FnWW5KbFlXczdYRzRnSUNBZ1kyRnpaU0FuTHljNlhHNGdJQ0FnSUNBZ0lHNWxkMVpoYkhWbElDODlJSFpoYkhWbE8xeHVJQ0FnSUNBZ0lDQmljbVZoYXp0Y2JpQWdJQ0I5WEc0Z0lDQWdYRzRnSUNBZ2FXWWdLSFZ1YVhRcElIdGNiaUFnSUNBZ0lDQWdibVYzVm1Gc2RXVWdLejBnZFc1cGREdGNiaUFnSUNCOVhHNWNiaUFnSUNCeVpYUjFjbTRnYm1WM1ZtRnNkV1U3WEc1OU8xeHVYRzR2S2x4dUlDQWdJRkpsYzNSeWFXTjBJSFpoYkhWbElIUnZJSEpoYm1kbFhHNGdJQ0FnWEc0Z0lDQWdVbVYwZFhKdUlIWmhiSFZsSUhkcGRHaHBiaUIwYUdVZ2NtRnVaMlVnYjJZZ2JHOTNaWEpNYVcxcGRDQmhibVFnZFhCd1pYSk1hVzFwZEZ4dUlDQWdJRnh1SUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1ZtRnNkV1VnZEc4Z2EyVmxjQ0IzYVhSb2FXNGdjbUZ1WjJWY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRXh2ZDJWeUlHeHBiV2wwSUc5bUlISmhibWRsWEc0Z0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQlZjSEJsY2lCc2FXMXBkQ0J2WmlCeVlXNW5aVnh1SUNBZ0lFQnlaWFIxY200Z1cyNTFiV0psY2wwNklGWmhiSFZsSUdGeklHeHBiV2wwWldRZ2QybDBhR2x1SUdkcGRtVnVJSEpoYm1kbFhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElISmxjM1J5YVdOMElEMGdLSFpoYkhWbExDQnRhVzRzSUcxaGVDa2dQVDRnVFdGMGFDNXRZWGdvVFdGMGFDNXRhVzRvZG1Gc2RXVXNJRzFoZUNrc0lHMXBiaWs3WEc1Y2JpOHFYRzRnSUNBZ1JuSmhiV1Z5WVhSbExXbHVaR1Z3Wlc1a1pXNTBJSE50YjI5MGFHbHVaMXh1WEc0Z0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQk9aWGNnZG1Gc2RXVmNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUU5c1pDQjJZV3gxWlZ4dUlDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dSbkpoYldVZ1pIVnlZWFJwYjI1Y2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMGdLRzl3ZEdsdmJtRnNLVG9nVTIxdmIzUm9hVzVuSUNnd0lHbHpJRzV2Ym1VcFhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElITnRiMjkwYUNBOUlDaHVaWGRXWVd4MVpTd2diMnhrVm1Gc2RXVXNJR1IxY21GMGFXOXVMQ0J6Ylc5dmRHaHBibWNnUFNBd0tTQTlQaUIwYjBSbFkybHRZV3dvYjJ4a1ZtRnNkV1VnS3lBb1pIVnlZWFJwYjI0Z0tpQW9ibVYzVm1Gc2RXVWdMU0J2YkdSV1lXeDFaU2tnTHlCTllYUm9MbTFoZUNoemJXOXZkR2hwYm1jc0lHUjFjbUYwYVc5dUtTa3BPMXh1WEc0dktseHVJQ0FnSUVOdmJuWmxjblFnZUNCd1pYSWdjMlZqYjI1a0lIUnZJSEJsY2lCbWNtRnRaU0IyWld4dlkybDBlU0JpWVhObFpDQnZiaUJtY0hOY2JpQWdJQ0JjYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklGVnVhWFFnY0dWeUlITmxZMjl1WkZ4dUlDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dSbkpoYldVZ1pIVnlZWFJwYjI0Z2FXNGdiWE5jYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYzNCbFpXUlFaWEpHY21GdFpTQTlJQ2g0Y0hNc0lHWnlZVzFsUkhWeVlYUnBiMjRwSUQwK0lDaHBjMDUxYlNoNGNITXBLU0EvSUhod2N5QXZJQ2d4TURBd0lDOGdabkpoYldWRWRYSmhkR2x2YmlrZ09pQXdPMXh1WEc0dktseHVJQ0FnSUVOdmJuWmxjblFnZG1Wc2IyTnBkSGtnYVc1MGJ5QjJaV3hwWTJsMGVTQndaWElnYzJWamIyNWtYRzRnSUNBZ1hHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJWYm1sMElIQmxjaUJtY21GdFpWeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nUm5KaGJXVWdaSFZ5WVhScGIyNGdhVzRnYlhOY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2MzQmxaV1JRWlhKVFpXTnZibVFnUFNBb2RtVnNiMk5wZEhrc0lHWnlZVzFsUkhWeVlYUnBiMjRwSUQwK0lIWmxiRzlqYVhSNUlDb2dLREV3TURBZ0x5Qm1jbUZ0WlVSMWNtRjBhVzl1S1R0Y2JseHVMeXBjYmlBZ0lDQkRjbVZoZEdVZ2MzUmxjSEJsWkNCMlpYSnphVzl1SUc5bUlEQXRNU0J3Y205bmNtVnpjMXh1SUNBZ0lGeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nUTNWeWNtVnVkQ0IyWVd4MVpWeHVJQ0FnSUVCd1lYSmhiU0JiYVc1MFhUb2dUblZ0WW1WeUlHOW1JSE4wWlhCelhHNGdJQ0FnUUhKbGRIVnliaUJiYm5WdFltVnlYVG9nVTNSbGNIQmxaQ0IyWVd4MVpWeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnpkR1Z3VUhKdlozSmxjM01nUFNBb2NISnZaM0psYzNNc0lITjBaWEJ6S1NBOVBpQjdYRzRnSUNBZ1kyOXVjM1FnYzJWbmJXVnVkQ0E5SURFZ0x5QW9jM1JsY0hNZ0xTQXhLVHRjYmlBZ0lDQmpiMjV6ZENCMFlYSm5aWFFnUFNBeElDMGdLREVnTHlCemRHVndjeWs3WEc0Z0lDQWdZMjl1YzNRZ2NISnZaM0psYzNOUFpsUmhjbWRsZENBOUlFMWhkR2d1YldsdUtIQnliMmR5WlhOeklDOGdkR0Z5WjJWMExDQXhLVHRjYmx4dUlDQWdJSEpsZEhWeWJpQk5ZWFJvTG1ac2IyOXlLSEJ5YjJkeVpYTnpUMlpVWVhKblpYUWdMeUJ6WldkdFpXNTBLU0FxSUhObFoyMWxiblE3WEc1OU95SmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvY2FsYy5qc1xuICoqIG1vZHVsZSBpZCA9IDIwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgQ0FNRUxfQ0FTRV9QQVRURVJOID0gLyhbYS16XSkoW0EtWl0pL2c7XG52YXIgUkVQTEFDRV9URU1QTEFURSA9ICckMS0kMic7XG52YXIgSEFTX1BFUkZPUk1BTkNFX05PVyA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCcgJiYgcGVyZm9ybWFuY2Uubm93O1xuXG4vKlxuICAgIEdldCB2YXIgdHlwZSBhcyBzdHJpbmdcbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtzdHJpbmddOiBSZXR1cm5zLCBmb3IgaW5zdGFuY2UgJ09iamVjdCcgaWYgW29iamVjdCBPYmplY3RdXG4qL1xudmFyIHZhclR5cGUgPSBmdW5jdGlvbiAodmFyaWFibGUpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhcmlhYmxlKS5zbGljZSg4LCAtMSk7XG59O1xuXG4vKlxuICAgIENvbnZlcnQgY2FtZWxDYXNlIHRvIGRhc2gtY2FzZVxuXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHJldHVybiBbc3RyaW5nXVxuKi9cbnZhciBjYW1lbFRvRGFzaCA9IGV4cG9ydHMuY2FtZWxUb0Rhc2ggPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKENBTUVMX0NBU0VfUEFUVEVSTiwgUkVQTEFDRV9URU1QTEFURSkudG9Mb3dlckNhc2UoKTtcbn07XG5cbnZhciBjcmVhdGVEZWxpbWl0ZWQgPSBleHBvcnRzLmNyZWF0ZURlbGltaXRlZCA9IGZ1bmN0aW9uICh2YWx1ZXMsIHRlcm1zLCBkZWxpbWl0ZXIsIGNob3ApIHtcbiAgICB2YXIgbnVtVGVybXMgPSB0ZXJtcy5sZW5ndGg7XG4gICAgdmFyIGNvbWJpbmVkID0gJyc7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVRlcm1zOyBpKyspIHtcbiAgICAgICAgdmFyIHRlcm0gPSB0ZXJtc1tpXTtcbiAgICAgICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eSh0ZXJtKSkge1xuICAgICAgICAgICAgY29tYmluZWQgKz0gdmFsdWVzW3Rlcm1dICsgZGVsaW1pdGVyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNob3ApIHtcbiAgICAgICAgY29tYmluZWQgPSBjb21iaW5lZC5zbGljZSgwLCAtY2hvcCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbWJpbmVkO1xufTtcblxuLypcbiAgICBDcmVhdGUgYSBmdW5jdGlvbiBzdHJpbmdcblxuICAgICcyMHB4JywgJ3RyYW5zbGF0ZScgLT4gJ3RyYW5zbGF0ZSgyMHB4KSdcblxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEByZXR1cm4gW3N0cmluZ11cbiovXG52YXIgY3JlYXRlRnVuY3Rpb25TdHJpbmcgPSBleHBvcnRzLmNyZWF0ZUZ1bmN0aW9uU3RyaW5nID0gZnVuY3Rpb24gKHZhbHVlLCBwcmVmaXgpIHtcbiAgICByZXR1cm4gcHJlZml4ICsgJygnICsgdmFsdWUgKyAnKSc7XG59O1xuXG4vKlxuICAgIEdlbmVyYXRlIGN1cnJlbnQgdGltZXN0YW1wXG4gICAgXG4gICAgQHJldHVybiBbdGltZXN0YW1wXTogQ3VycmVudCBVTklYIHRpbWVzdGFtcFxuKi9cbnZhciBjdXJyZW50VGltZSA9IGV4cG9ydHMuY3VycmVudFRpbWUgPSBIQVNfUEVSRk9STUFOQ0VfTk9XID8gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBwZXJmb3JtYW5jZS5ub3coKTtcbn0gOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xufTtcblxuLypcbiAgICBTcGxpdCBhIHZhbHVlIGludG8gYSB2YWx1ZS91bml0IG9iamVjdFxuICAgIFxuICAgICAgICBcIjIwMHB4XCIgLT4geyB2YWx1ZTogMjAwLCB1bml0OiBcInB4XCIgfVxuICAgICAgICBcbiAgICBAcGFyYW0gW3N0cmluZ106IFZhbHVlIHRvIHNwbGl0XG4gICAgQHJldHVybiBbb2JqZWN0XTogT2JqZWN0IHdpdGggdmFsdWUgYW5kIHVuaXQgcHJvcHNcbiovXG52YXIgZmluZFZhbHVlQW5kVW5pdCA9IGV4cG9ydHMuZmluZFZhbHVlQW5kVW5pdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZS5tYXRjaCkge1xuICAgICAgICB2YXIgc3BsaXRWYWx1ZSA9IHZhbHVlLm1hdGNoKC8oLT9cXGQqXFwuP1xcZCopKC4qKS8pO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcGFyc2VGbG9hdChzcGxpdFZhbHVlWzFdKSxcbiAgICAgICAgICAgIHVuaXQ6IHNwbGl0VmFsdWVbMl1cbiAgICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4geyB2YWx1ZTogdmFsdWUgfTtcbiAgICB9XG59O1xuXG4vKlxuICAgIFNwbGl0IGNvbG9yIHN0cmluZyBpbnRvIG1hcCBvZiBjb2xvciBwcm9wZXJ0aWVzXG5cbiAgICBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMClcIiwgW1wiUmVkXCIsICdHcmVlblwiLCBcIkJsdWVcIiwgXCJBbHBoYVwiXVxuXG4gICAgeyBSZWQ6IDI1NS4uLiB9XG4qL1xudmFyIGdldENvbG9yVmFsdWVzID0gZXhwb3J0cy5nZXRDb2xvclZhbHVlcyA9IGZ1bmN0aW9uICh2YWx1ZSwgY29sb3JUZXJtcykge1xuICAgIHZhciBudW1Db2xvclRlcm1zID0gY29sb3JUZXJtcy5sZW5ndGg7XG4gICAgdmFyIGNvbG9yVmFsdWVzID0ge307XG4gICAgdmFyIGNvbG9ycyA9IHNwbGl0Q29tbWFEZWxpbWl0ZWQoZ2V0VmFsdWVGcm9tRnVuY3Rpb25TdHJpbmcodmFsdWUpKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtQ29sb3JUZXJtczsgaSsrKSB7XG4gICAgICAgIGNvbG9yVmFsdWVzW2NvbG9yVGVybXNbaV1dID0gY29sb3JzW2ldICE9PSB1bmRlZmluZWQgPyBjb2xvcnNbaV0gOiAxO1xuICAgIH1cblxuICAgIHJldHVybiBjb2xvclZhbHVlcztcbn07XG5cbi8qXG4gICAgR2V0IHZhbHVlIGZyb20gZnVuY3Rpb24gc3RyaW5nXG5cbiAgICBcInRyYW5zbGF0ZVgoMjBweClcIiAtPiBcIjIwcHhcIlxuKi9cbnZhciBnZXRWYWx1ZUZyb21GdW5jdGlvblN0cmluZyA9IGV4cG9ydHMuZ2V0VmFsdWVGcm9tRnVuY3Rpb25TdHJpbmcgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUuc3Vic3RyaW5nKHZhbHVlLmluZGV4T2YoJygnKSArIDEsIHZhbHVlLmxhc3RJbmRleE9mKCcpJykpO1xufTtcblxuLypcbiAgICBDaGVjayBpZiB0d28gb2JqZWN0cyBoYXZlIGNoYW5nZWQgZnJvbSBlYWNoIG90aGVyXG4gICAgXG4gICAgQHBhcmFtIFtvYmplY3RdOiBJbnB1dCBBXG4gICAgQHBhcmFtIFtvYmplY3RdOiBJbnB1dCBCXG4gICAgQHJldHVybiBbYm9vbGVhbl06IFRydWUgaWYgZGlmZmVyZW50XG4qL1xudmFyIGhhc0NoYW5nZWQgPSBleHBvcnRzLmhhc0NoYW5nZWQgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgIHZhciBjaGFuZ2VkID0gZmFsc2U7XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gYSkge1xuICAgICAgICBpZiAoYS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICBpZiAoaGFzUHJvcGVydHkoYiwga2V5KSkge1xuICAgICAgICAgICAgICAgIGlmIChhW2tleV0gIT09IGJba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoYW5nZWQ7XG59O1xuXG4vKlxuICAgIENoZWNrIGlmIG9iamVjdCBoYXMgcHJvcGVydHkgYW5kIGl0IGlzbid0IHVuZGVmaW5lZFxuXG4gICAgQHBhcmFtIFtvYmplY3RdXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHJldHVybiBbYm9vbGVhbl1cbiovXG52YXIgaGFzUHJvcGVydHkgPSBleHBvcnRzLmhhc1Byb3BlcnR5ID0gZnVuY3Rpb24gKG9iamVjdCwgcHJvcGVydHlOYW1lKSB7XG4gICAgcmV0dXJuIG9iamVjdC5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eU5hbWUpICYmIG9iamVjdFtwcm9wZXJ0eU5hbWVdICE9PSB1bmRlZmluZWQ7XG59O1xuXG4vKlxuICAgIElzIHV0aWxzIHZhciBhbiBhcnJheSA/IFxuICAgIFxuICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdXRpbHMudmFyVHlwZSA9PT0gJ0FycmF5J1xuKi9cbnZhciBpc0FycmF5ID0gZXhwb3J0cy5pc0FycmF5ID0gZnVuY3Rpb24gKGFycikge1xuICAgIHJldHVybiB2YXJUeXBlKGFycikgPT09ICdBcnJheSc7XG59O1xuXG4vKlxuICAgIElzIHV0aWxzIHZhciBhIGZ1bmN0aW9uID8gXG4gICAgXG4gICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB1dGlscy52YXJUeXBlID09PSAnRnVuY3Rpb24nXG4qL1xudmFyIGlzRnVuYyA9IGV4cG9ydHMuaXNGdW5jID0gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB2YXJUeXBlKG9iaikgPT09ICdGdW5jdGlvbic7XG59O1xuXG4vKlxuICAgIElzIHV0aWxzIHZhciBhIG51bWJlcj9cbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiA9PT0gJ251bWJlcidcbiovXG52YXIgaXNOdW0gPSBleHBvcnRzLmlzTnVtID0gZnVuY3Rpb24gKG51bSkge1xuICAgIHJldHVybiB0eXBlb2YgbnVtID09PSAnbnVtYmVyJztcbn07XG5cbi8qXG4gICAgSXMgdXRpbHMgdmFyIGFuIG9iamVjdD9cbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiA9PT0gJ29iamVjdCdcbiovXG52YXIgaXNPYmogPSBleHBvcnRzLmlzT2JqID0gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jztcbn07XG5cbi8qXG4gICAgSXMgdXRpbHMgYSByZWxhdGl2ZSB2YWx1ZSBhc3NpZ25tZW50P1xuICAgIFxuICAgIEBwYXJhbSBbc3RyaW5nXTogVmFyaWFibGUgdG8gdGVzdFxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBJZiB1dGlscyBsb29rcyBsaWtlIGEgcmVsYXRpdmUgdmFsdWUgYXNzaWdubWVudFxuKi9cbnZhciBpc1JlbGF0aXZlVmFsdWUgPSBleHBvcnRzLmlzUmVsYXRpdmVWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mICYmIHZhbHVlLmluZGV4T2YoJz0nKSA+IDAgPyB0cnVlIDogZmFsc2U7XG59O1xuXG4vKlxuICAgIElzIHV0aWxzIHZhciBhIHN0cmluZyA/IFxuICAgIFxuICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mIHN0ciA9PT0gJ3N0cmluZydcbiovXG52YXIgaXNTdHJpbmcgPSBleHBvcnRzLmlzU3RyaW5nID0gZnVuY3Rpb24gKHN0cikge1xuICAgIHJldHVybiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJztcbn07XG5cbi8qXG4gICAgQHBhcmFtIFtzdHJpbmcgfHwgTm9kZUxpc3RdOlxuICAgICAgICBJZiBzdHJpbmcsIHRyZWF0ZWQgYXMgc2VsZWN0b3IuXG4gICAgICAgIElmIG5vdCwgdHJlYXRlZCBhcyBwcmVleGlzdGluZyBOb2RlTGlzdFxuXG4gICAgQHJldHVybiBbQXJyYXldXG4qL1xudmFyIHNlbGVjdERvbSA9IGV4cG9ydHMuc2VsZWN0RG9tID0gZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgdmFyIG5vZGVzID0gdHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpIDogc2VsZWN0b3I7XG4gICAgcmV0dXJuIG5vZGVzLmxlbmd0aCA/IFtdLnNsaWNlLmNhbGwobm9kZXMpIDogW10ucHVzaChub2Rlcyk7XG59O1xuXG4vKlxuICAgIFNwbGl0IGNvbW1hLWRlbGltaXRlZCBzdHJpbmdcblxuICAgIFwiZm9vLGJhclwiIC0+IFtcImZvb1wiLCBcImJhclwiXVxuXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHJldHVybiBbYXJyYXldXG4qL1xudmFyIHNwbGl0Q29tbWFEZWxpbWl0ZWQgPSBleHBvcnRzLnNwbGl0Q29tbWFEZWxpbWl0ZWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodmFsdWUpID8gdmFsdWUuc3BsaXQoLyxcXHMqLykgOiBbdmFsdWVdO1xufTtcblxuLypcbiAgICBTcGxpdCBzcGFjZS1kZWxpbWl0ZWQgc3RyaW5nXG5cbiAgICBcImZvbyBiYXJcIiAtPiBbXCJmb29cIiwgXCJiYXJcIl1cblxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEByZXR1cm4gW2FycmF5XVxuKi9cbnZhciBzcGxpdFNwYWNlRGVsaW1pdGVkID0gZXhwb3J0cy5zcGxpdFNwYWNlRGVsaW1pdGVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHZhbHVlKSA/IHZhbHVlLnNwbGl0KCcgJykgOiBbdmFsdWVdO1xufTtcblxuLypcbiAgICBDb252ZXJ0IG51bWJlciB0byB4IGRlY2ltYWwgcGxhY2VzXG5cbiAgICBAcGFyYW0gW251bWJlcl1cbiAgICBAcGFyYW0gW251bWJlcl1cbiAgICBAcmV0dXJuIFtudW1iZXJdXG4qL1xudmFyIHRvRGVjaW1hbCA9IGV4cG9ydHMudG9EZWNpbWFsID0gZnVuY3Rpb24gKG51bSkge1xuICAgIHZhciBwcmVjaXNpb24gPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyAyIDogYXJndW1lbnRzWzFdO1xuXG4gICAgcHJlY2lzaW9uID0gTWF0aC5wb3coMTAsIHByZWNpc2lvbik7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobnVtICogcHJlY2lzaW9uKSAvIHByZWNpc2lvbjtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12ZFhScGJITXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3TzBGQlFVRXNTVUZCVFN4eFFrRkJjVUlzYVVKQlFYSkNPMEZCUTA0c1NVRkJUU3h0UWtGQmJVSXNUMEZCYmtJN1FVRkRUaXhKUVVGTkxITkNRVUYxUWl4UFFVRlBMRmRCUVZBc1MwRkJkVUlzVjBGQmRrSXNTVUZCYzBNc1dVRkJXU3hIUVVGYU96czdPenM3T3p0QlFWRnVSU3hKUVVGTkxGVkJRVlU3VjBGQldTeFBRVUZQTEZOQlFWQXNRMEZCYVVJc1VVRkJha0lzUTBGQk1FSXNTVUZCTVVJc1EwRkJLMElzVVVGQkwwSXNSVUZCZVVNc1MwRkJla01zUTBGQkswTXNRMEZCTDBNc1JVRkJhMFFzUTBGQlF5eERRVUZFTzBOQlFUbEVPenM3T3pzN096dEJRVkZVTEVsQlFVMHNiME5CUVdNc1ZVRkJReXhOUVVGRU8xZEJRVmtzVDBGQlR5eFBRVUZRTEVOQlFXVXNhMEpCUVdZc1JVRkJiVU1zWjBKQlFXNURMRVZCUVhGRUxGZEJRWEpFTzBOQlFWbzdPMEZCUlhCQ0xFbEJRVTBzTkVOQlFXdENMRlZCUVVNc1RVRkJSQ3hGUVVGVExFdEJRVlFzUlVGQlowSXNVMEZCYUVJc1JVRkJNa0lzU1VGQk0wSXNSVUZCYjBNN1FVRkRMMFFzVVVGQlRTeFhRVUZYTEUxQlFVMHNUVUZCVGl4RFFVUTRRenRCUVVVdlJDeFJRVUZKTEZkQlFWY3NSVUZCV0N4RFFVWXlSRHM3UVVGSkwwUXNVMEZCU3l4SlFVRkpMRWxCUVVrc1EwRkJTaXhGUVVGUExFbEJRVWtzVVVGQlNpeEZRVUZqTEVkQlFUbENMRVZCUVcxRE8wRkJReTlDTEZsQlFVMHNUMEZCVHl4TlFVRk5MRU5CUVU0c1EwRkJVQ3hEUVVSNVFqdEJRVVV2UWl4WlFVRkpMRTlCUVU4c1kwRkJVQ3hEUVVGelFpeEpRVUYwUWl4RFFVRktMRVZCUVdsRE8wRkJRemRDTEhkQ1FVRlpMRTlCUVU4c1NVRkJVQ3hKUVVGbExGTkJRV1lzUTBGRWFVSTdVMEZCYWtNN1MwRkdTanM3UVVGUFFTeFJRVUZKTEVsQlFVb3NSVUZCVlR0QlFVTk9MRzFDUVVGWExGTkJRVk1zUzBGQlZDeERRVUZsTEVOQlFXWXNSVUZCYTBJc1EwRkJReXhKUVVGRUxFTkJRVGRDTEVOQlJFMDdTMEZCVmpzN1FVRkpRU3hYUVVGUExGRkJRVkFzUTBGbUswUTdRMEZCY0VNN096czdPenM3T3pzN08wRkJNa0o0UWl4SlFVRk5MSE5FUVVGMVFpeFZRVUZETEV0QlFVUXNSVUZCVVN4TlFVRlNPMWRCUVhOQ0xHVkJRVlU3UTBGQmFFTTdPenM3T3pzN1FVRlBOMElzU1VGQlRTeHZRMEZCWXl4elFrRkJjMEk3VjBGQlRTeFpRVUZaTEVkQlFWbzdRMEZCVGl4SFFVRXdRanRYUVVGTkxFbEJRVWtzU1VGQlNpeEhRVUZYTEU5QlFWZzdRMEZCVGpzN096czdPenM3T3p0QlFWVndSU3hKUVVGTkxEaERRVUZ0UWl4VlFVRkRMRXRCUVVRc1JVRkJWenRCUVVOMlF5eFJRVUZKTEUxQlFVMHNTMEZCVGl4RlFVRmhPMEZCUTJJc1dVRkJUU3hoUVVGaExFMUJRVTBzUzBGQlRpeERRVUZaTEcxQ1FVRmFMRU5CUVdJc1EwRkVUenM3UVVGSFlpeGxRVUZQTzBGQlEwZ3NiVUpCUVU4c1YwRkJWeXhYUVVGWExFTkJRVmdzUTBGQldDeERRVUZRTzBGQlEwRXNhMEpCUVU4c1YwRkJWeXhEUVVGWUxFTkJRVkE3VTBGR1NpeERRVWhoTzB0QlFXcENMRTFCVDA4N1FVRkRTQ3hsUVVGUExFVkJRVVVzV1VGQlJpeEZRVUZRTEVOQlJFYzdTMEZRVUR0RFFVUTBRanM3T3pzN096czdPMEZCYjBKNlFpeEpRVUZOTERCRFFVRnBRaXhWUVVGRExFdEJRVVFzUlVGQlVTeFZRVUZTTEVWQlFYVkNPMEZCUTJwRUxGRkJRVTBzWjBKQlFXZENMRmRCUVZjc1RVRkJXQ3hEUVVReVFqdEJRVVZxUkN4UlFVRk5MR05CUVdNc1JVRkJaQ3hEUVVZeVF6dEJRVWRxUkN4UlFVRk5MRk5CUVZNc2IwSkJRVzlDTERKQ1FVRXlRaXhMUVVFelFpeERRVUZ3UWl4RFFVRlVMRU5CU0RKRE96dEJRVXRxUkN4VFFVRkxMRWxCUVVrc1NVRkJTU3hEUVVGS0xFVkJRVThzU1VGQlNTeGhRVUZLTEVWQlFXMUNMRWRCUVc1RExFVkJRWGRETzBGQlEzQkRMRzlDUVVGWkxGZEJRVmNzUTBGQldDeERRVUZhTEVsQlFUWkNMRTFCUVVNc1EwRkJUeXhEUVVGUUxFMUJRV01zVTBGQlpDeEhRVUV5UWl4UFFVRlBMRU5CUVZBc1EwRkJOVUlzUjBGQmQwTXNRMEZCZUVNc1EwRkVUenRMUVVGNFF6czdRVUZKUVN4WFFVRlBMRmRCUVZBc1EwRlVhVVE3UTBGQmRrSTdPenM3T3pzN1FVRnBRblpDTEVsQlFVMHNhMFZCUVRaQ0xGVkJRVU1zUzBGQlJEdFhRVUZYTEUxQlFVMHNVMEZCVGl4RFFVRm5RaXhOUVVGTkxFOUJRVTRzUTBGQll5eEhRVUZrTEVsQlFYRkNMRU5CUVhKQ0xFVkJRWGRDTEUxQlFVMHNWMEZCVGl4RFFVRnJRaXhIUVVGc1FpeERRVUY0UXp0RFFVRllPenM3T3pzN096czdRVUZUYmtNc1NVRkJUU3hyUTBGQllTeFZRVUZETEVOQlFVUXNSVUZCU1N4RFFVRktMRVZCUVZVN1FVRkRhRU1zVVVGQlNTeFZRVUZWTEV0QlFWWXNRMEZFTkVJN08wRkJSMmhETEZOQlFVc3NTVUZCU1N4SFFVRktMRWxCUVZjc1EwRkJhRUlzUlVGQmJVSTdRVUZEWml4WlFVRkpMRVZCUVVVc1kwRkJSaXhEUVVGcFFpeEhRVUZxUWl4RFFVRktMRVZCUVRKQ08wRkJRM1pDTEdkQ1FVRkpMRmxCUVZrc1EwRkJXaXhGUVVGbExFZEJRV1lzUTBGQlNpeEZRVUY1UWp0QlFVTnlRaXh2UWtGQlNTeEZRVUZGTEVkQlFVWXNUVUZCVnl4RlFVRkZMRWRCUVVZc1EwRkJXQ3hGUVVGdFFqdEJRVU51UWl3NFFrRkJWU3hKUVVGV0xFTkJSRzFDTzJsQ1FVRjJRanRoUVVSS0xFMUJTVTg3UVVGRFNDd3dRa0ZCVlN4SlFVRldMRU5CUkVjN1lVRktVRHRUUVVSS08wdEJSRW83TzBGQldVRXNWMEZCVHl4UFFVRlFMRU5CWm1kRE8wTkJRVlk3T3pzN096czdPenRCUVhsQ2JrSXNTVUZCVFN4dlEwRkJZeXhWUVVGRExFMUJRVVFzUlVGQlV5eFpRVUZVTzFkQlFUQkNMRTlCUVU4c1kwRkJVQ3hEUVVGelFpeFpRVUYwUWl4TFFVRjFReXhQUVVGUExGbEJRVkFzVFVGQmVVSXNVMEZCZWtJN1EwRkJha1U3T3pzN096czdPMEZCVVhCQ0xFbEJRVTBzTkVKQlFWVXNWVUZCUXl4SFFVRkVPMWRCUVZNc1VVRkJVU3hIUVVGU0xFMUJRV2xDTEU5QlFXcENPME5CUVZRN096czdPenM3TzBGQlVXaENMRWxCUVUwc01FSkJRVk1zVlVGQlF5eEhRVUZFTzFkQlFWTXNVVUZCVVN4SFFVRlNMRTFCUVdsQ0xGVkJRV3BDTzBOQlFWUTdPenM3T3pzN08wRkJVV1lzU1VGQlRTeDNRa0ZCVVN4VlFVRkRMRWRCUVVRN1YwRkJVeXhQUVVGUExFZEJRVkFzUzBGQlpTeFJRVUZtTzBOQlFWUTdPenM3T3pzN08wRkJVV1FzU1VGQlRTeDNRa0ZCVVN4VlFVRkRMRWRCUVVRN1YwRkJVeXhQUVVGUExFZEJRVkFzUzBGQlpTeFJRVUZtTzBOQlFWUTdPenM3T3pzN08wRkJVV1FzU1VGQlRTdzBRMEZCYTBJc1ZVRkJReXhMUVVGRU8xZEJRVmNzUzBGQlF5eEpRVUZUTEUxQlFVMHNUMEZCVGl4SlFVRnBRaXhOUVVGTkxFOUJRVTRzUTBGQll5eEhRVUZrTEVsQlFYRkNMRU5CUVhKQ0xFZEJRVEJDTEVsQlFYSkVMRWRCUVRSRUxFdEJRVFZFTzBOQlFWZzdPenM3T3pzN08wRkJVWGhDTEVsQlFVMHNPRUpCUVZjc1ZVRkJReXhIUVVGRU8xZEJRVk1zVDBGQlR5eEhRVUZRTEV0QlFXVXNVVUZCWmp0RFFVRlVPenM3T3pzN096czdRVUZUYWtJc1NVRkJUU3huUTBGQldTeFZRVUZETEZGQlFVUXNSVUZCWXp0QlFVTnVReXhSUVVGTkxGRkJRVkVzVDBGQlVTeFJRVUZRTEV0QlFXOUNMRkZCUVhCQ0xFZEJRV2RETEZOQlFWTXNaMEpCUVZRc1EwRkJNRUlzVVVGQk1VSXNRMEZCYWtNc1IwRkJkVVVzVVVGQmRrVXNRMEZFY1VJN1FVRkZia01zVjBGQlR5eExRVUZETEVOQlFVMHNUVUZCVGl4SFFVRm5RaXhIUVVGSExFdEJRVWdzUTBGQlV5eEpRVUZVTEVOQlFXTXNTMEZCWkN4RFFVRnFRaXhIUVVGM1F5eEhRVUZITEVsQlFVZ3NRMEZCVVN4TFFVRlNMRU5CUVhoRExFTkJSalJDTzBOQlFXUTdPenM3T3pzN096czdRVUZoYkVJc1NVRkJUU3h2UkVGQmMwSXNWVUZCUXl4TFFVRkVPMWRCUVZjc1UwRkJVeXhMUVVGVUxFbEJRV3RDTEUxQlFVMHNTMEZCVGl4RFFVRlpMRTFCUVZvc1EwRkJiRUlzUjBGQmQwTXNRMEZCUXl4TFFVRkVMRU5CUVhoRE8wTkJRVmc3T3pzN096czdPenM3UVVGVk5VSXNTVUZCVFN4dlJFRkJjMElzVlVGQlF5eExRVUZFTzFkQlFWY3NVMEZCVXl4TFFVRlVMRWxCUVd0Q0xFMUJRVTBzUzBGQlRpeERRVUZaTEVkQlFWb3NRMEZCYkVJc1IwRkJjVU1zUTBGQlF5eExRVUZFTEVOQlFYSkRPME5CUVZnN096czdPenM3T3p0QlFWTTFRaXhKUVVGTkxHZERRVUZaTEZWQlFVTXNSMEZCUkN4RlFVRjNRanRSUVVGc1FpeHJSVUZCV1N4cFFrRkJUVHM3UVVGRE4wTXNlVUpCUVZrc1NVRkJUU3hWUVVGc1FpeERRVVEyUXp0QlFVVTNReXhYUVVGUExFdEJRVXNzUzBGQlRDeERRVUZYTEUxQlFVMHNVMEZCVGl4RFFVRllMRWRCUVRoQ0xGTkJRVGxDTEVOQlJuTkRPME5CUVhoQ0lpd2labWxzWlNJNkluVjBhV3h6TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMEwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltTnZibk4wSUVOQlRVVk1YME5CVTBWZlVFRlVWRVZTVGlBOUlDOG9XMkV0ZWwwcEtGdEJMVnBkS1M5bk8xeHVZMjl1YzNRZ1VrVlFURUZEUlY5VVJVMVFURUZVUlNBOUlDY2tNUzBrTWljN1hHNWpiMjV6ZENCSVFWTmZVRVZTUms5U1RVRk9RMFZmVGs5WElEMGdLSFI1Y0dWdlppQndaWEptYjNKdFlXNWpaU0FoUFQwZ0ozVnVaR1ZtYVc1bFpDY2dKaVlnY0dWeVptOXliV0Z1WTJVdWJtOTNLVHRjYmx4dUx5cGNiaUFnSUNCSFpYUWdkbUZ5SUhSNWNHVWdZWE1nYzNSeWFXNW5YRzRnSUNBZ1hHNGdJQ0FnUUhCaGNtRnRPaUJXWVhKcFlXSnNaU0IwYnlCMFpYTjBYRzRnSUNBZ1FISmxkSFZ5YmlCYmMzUnlhVzVuWFRvZ1VtVjBkWEp1Y3l3Z1ptOXlJR2x1YzNSaGJtTmxJQ2RQWW1wbFkzUW5JR2xtSUZ0dlltcGxZM1FnVDJKcVpXTjBYVnh1S2k5Y2JtTnZibk4wSUhaaGNsUjVjR1VnUFNCMllYSnBZV0pzWlNBOVBpQlBZbXBsWTNRdWNISnZkRzkwZVhCbExuUnZVM1J5YVc1bkxtTmhiR3dvZG1GeWFXRmliR1VwTG5Oc2FXTmxLRGdzSUMweEtUdGNibHh1THlwY2JpQWdJQ0JEYjI1MlpYSjBJR05oYldWc1EyRnpaU0IwYnlCa1lYTm9MV05oYzJWY2JseHVJQ0FnSUVCd1lYSmhiU0JiYzNSeWFXNW5YVnh1SUNBZ0lFQnlaWFIxY200Z1czTjBjbWx1WjExY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ1kyRnRaV3hVYjBSaGMyZ2dQU0FvYzNSeWFXNW5LU0E5UGlCemRISnBibWN1Y21Wd2JHRmpaU2hEUVUxRlRGOURRVk5GWDFCQlZGUkZVazRzSUZKRlVFeEJRMFZmVkVWTlVFeEJWRVVwTG5SdlRHOTNaWEpEWVhObEtDazdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQmpjbVZoZEdWRVpXeHBiV2wwWldRZ1BTQW9kbUZzZFdWekxDQjBaWEp0Y3l3Z1pHVnNhVzFwZEdWeUxDQmphRzl3S1NBOVBpQjdYRzRnSUNBZ1kyOXVjM1FnYm5WdFZHVnliWE1nUFNCMFpYSnRjeTVzWlc1bmRHZzdYRzRnSUNBZ2JHVjBJR052YldKcGJtVmtJRDBnSnljN1hHNWNiaUFnSUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElHNTFiVlJsY20xek95QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnZEdWeWJTQTlJSFJsY20xelcybGRPMXh1SUNBZ0lDQWdJQ0JwWmlBb2RtRnNkV1Z6TG1oaGMwOTNibEJ5YjNCbGNuUjVLSFJsY20wcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyMWlhVzVsWkNBclBTQjJZV3gxWlhOYmRHVnliVjBnS3lCa1pXeHBiV2wwWlhJN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNCcFppQW9ZMmh2Y0NrZ2UxeHVJQ0FnSUNBZ0lDQmpiMjFpYVc1bFpDQTlJR052YldKcGJtVmtMbk5zYVdObEtEQXNJQzFqYUc5d0tUdGNiaUFnSUNCOVhHNWNiaUFnSUNCeVpYUjFjbTRnWTI5dFltbHVaV1E3WEc1OU8xeHVYRzR2S2x4dUlDQWdJRU55WldGMFpTQmhJR1oxYm1OMGFXOXVJSE4wY21sdVoxeHVYRzRnSUNBZ0p6SXdjSGduTENBbmRISmhibk5zWVhSbEp5QXRQaUFuZEhKaGJuTnNZWFJsS0RJd2NIZ3BKMXh1WEc0Z0lDQWdRSEJoY21GdElGdHpkSEpwYm1kZFhHNGdJQ0FnUUhCaGNtRnRJRnR6ZEhKcGJtZGRYRzRnSUNBZ1FISmxkSFZ5YmlCYmMzUnlhVzVuWFZ4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCamNtVmhkR1ZHZFc1amRHbHZibE4wY21sdVp5QTlJQ2gyWVd4MVpTd2djSEpsWm1sNEtTQTlQaUJnSkh0d2NtVm1hWGg5S0NSN2RtRnNkV1Y5S1dBN1hHNWNiaThxWEc0Z0lDQWdSMlZ1WlhKaGRHVWdZM1Z5Y21WdWRDQjBhVzFsYzNSaGJYQmNiaUFnSUNCY2JpQWdJQ0JBY21WMGRYSnVJRnQwYVcxbGMzUmhiWEJkT2lCRGRYSnlaVzUwSUZWT1NWZ2dkR2x0WlhOMFlXMXdYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR04xY25KbGJuUlVhVzFsSUQwZ1NFRlRYMUJGVWtaUFVrMUJUa05GWDA1UFZ5QS9JQ2dwSUQwK0lIQmxjbVp2Y20xaGJtTmxMbTV2ZHlncElEb2dLQ2tnUFQ0Z2JtVjNJRVJoZEdVb0tTNW5aWFJVYVcxbEtDazdYRzVjYmk4cVhHNGdJQ0FnVTNCc2FYUWdZU0IyWVd4MVpTQnBiblJ2SUdFZ2RtRnNkV1V2ZFc1cGRDQnZZbXBsWTNSY2JpQWdJQ0JjYmlBZ0lDQWdJQ0FnWENJeU1EQndlRndpSUMwK0lIc2dkbUZzZFdVNklESXdNQ3dnZFc1cGREb2dYQ0p3ZUZ3aUlIMWNiaUFnSUNBZ0lDQWdYRzRnSUNBZ1FIQmhjbUZ0SUZ0emRISnBibWRkT2lCV1lXeDFaU0IwYnlCemNHeHBkRnh1SUNBZ0lFQnlaWFIxY200Z1cyOWlhbVZqZEYwNklFOWlhbVZqZENCM2FYUm9JSFpoYkhWbElHRnVaQ0IxYm1sMElIQnliM0J6WEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdacGJtUldZV3gxWlVGdVpGVnVhWFFnUFNBb2RtRnNkV1VwSUQwK0lIdGNiaUFnSUNCcFppQW9kbUZzZFdVdWJXRjBZMmdwSUh0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnYzNCc2FYUldZV3gxWlNBOUlIWmhiSFZsTG0xaGRHTm9LQzhvTFQ5Y1hHUXFYRnd1UDF4Y1pDb3BLQzRxS1M4cE8xeHVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMllXeDFaVG9nY0dGeWMyVkdiRzloZENoemNHeHBkRlpoYkhWbFd6RmRLU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lIVnVhWFE2SUNCemNHeHBkRlpoYkhWbFd6SmRYRzRnSUNBZ0lDQWdJSDA3WEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIc2dkbUZzZFdVZ2ZUdGNiaUFnSUNCOVhHNTlPMXh1WEc0dktseHVJQ0FnSUZOd2JHbDBJR052Ykc5eUlITjBjbWx1WnlCcGJuUnZJRzFoY0NCdlppQmpiMnh2Y2lCd2NtOXdaWEowYVdWelhHNWNiaUFnSUNCY0luSm5ZbUVvTWpVMUxDQXlOVFVzSURJMU5Td2dNQ2xjSWl3Z1cxd2lVbVZrWENJc0lDZEhjbVZsYmx3aUxDQmNJa0pzZFdWY0lpd2dYQ0pCYkhCb1lWd2lYVnh1WEc0Z0lDQWdleUJTWldRNklESTFOUzR1TGlCOVhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHZGxkRU52Ykc5eVZtRnNkV1Z6SUQwZ0tIWmhiSFZsTENCamIyeHZjbFJsY20xektTQTlQaUI3WEc0Z0lDQWdZMjl1YzNRZ2JuVnRRMjlzYjNKVVpYSnRjeUE5SUdOdmJHOXlWR1Z5YlhNdWJHVnVaM1JvTzF4dUlDQWdJR052Ym5OMElHTnZiRzl5Vm1Gc2RXVnpJRDBnZTMwN1hHNGdJQ0FnWTI5dWMzUWdZMjlzYjNKeklEMGdjM0JzYVhSRGIyMXRZVVJsYkdsdGFYUmxaQ2huWlhSV1lXeDFaVVp5YjIxR2RXNWpkR2x2YmxOMGNtbHVaeWgyWVd4MVpTa3BPMXh1WEc0Z0lDQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0J1ZFcxRGIyeHZjbFJsY20xek95QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ1kyOXNiM0pXWVd4MVpYTmJZMjlzYjNKVVpYSnRjMXRwWFYwZ1BTQW9ZMjlzYjNKelcybGRJQ0U5UFNCMWJtUmxabWx1WldRcElEOGdZMjlzYjNKelcybGRJRG9nTVR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J5WlhSMWNtNGdZMjlzYjNKV1lXeDFaWE03WEc1OU8xeHVYRzR2S2x4dUlDQWdJRWRsZENCMllXeDFaU0JtY205dElHWjFibU4wYVc5dUlITjBjbWx1WjF4dVhHNGdJQ0FnWENKMGNtRnVjMnhoZEdWWUtESXdjSGdwWENJZ0xUNGdYQ0l5TUhCNFhDSmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdaMlYwVm1Gc2RXVkdjbTl0Um5WdVkzUnBiMjVUZEhKcGJtY2dQU0FvZG1Gc2RXVXBJRDArSUhaaGJIVmxMbk4xWW5OMGNtbHVaeWgyWVd4MVpTNXBibVJsZUU5bUtDY29KeWtnS3lBeExDQjJZV3gxWlM1c1lYTjBTVzVrWlhoUFppZ25LU2NwS1R0Y2JseHVMeXBjYmlBZ0lDQkRhR1ZqYXlCcFppQjBkMjhnYjJKcVpXTjBjeUJvWVhabElHTm9ZVzVuWldRZ1puSnZiU0JsWVdOb0lHOTBhR1Z5WEc0Z0lDQWdYRzRnSUNBZ1FIQmhjbUZ0SUZ0dlltcGxZM1JkT2lCSmJuQjFkQ0JCWEc0Z0lDQWdRSEJoY21GdElGdHZZbXBsWTNSZE9pQkpibkIxZENCQ1hHNGdJQ0FnUUhKbGRIVnliaUJiWW05dmJHVmhibDA2SUZSeWRXVWdhV1lnWkdsbVptVnlaVzUwWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdoaGMwTm9ZVzVuWldRZ1BTQW9ZU3dnWWlrZ1BUNGdlMXh1SUNBZ0lHeGxkQ0JqYUdGdVoyVmtJRDBnWm1Gc2MyVTdYRzVjYmlBZ0lDQm1iM0lnS0d4bGRDQnJaWGtnYVc0Z1lTa2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb1lTNW9ZWE5QZDI1UWNtOXdaWEowZVNoclpYa3BLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvYUdGelVISnZjR1Z5ZEhrb1lpd2dhMlY1S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hoVzJ0bGVWMGdJVDA5SUdKYmEyVjVYU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmphR0Z1WjJWa0lEMGdkSEoxWlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR05vWVc1blpXUWdQU0IwY25WbE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WMGRYSnVJR05vWVc1blpXUTdYRzU5TzF4dVhHNHZLbHh1SUNBZ0lFTm9aV05ySUdsbUlHOWlhbVZqZENCb1lYTWdjSEp2Y0dWeWRIa2dZVzVrSUdsMElHbHpiaWQwSUhWdVpHVm1hVzVsWkZ4dVhHNGdJQ0FnUUhCaGNtRnRJRnR2WW1wbFkzUmRYRzRnSUNBZ1FIQmhjbUZ0SUZ0emRISnBibWRkWEc0Z0lDQWdRSEpsZEhWeWJpQmJZbTl2YkdWaGJsMWNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdhR0Z6VUhKdmNHVnlkSGtnUFNBb2IySnFaV04wTENCd2NtOXdaWEowZVU1aGJXVXBJRDArSUc5aWFtVmpkQzVvWVhOUGQyNVFjbTl3WlhKMGVTaHdjbTl3WlhKMGVVNWhiV1VwSUNZbUlHOWlhbVZqZEZ0d2NtOXdaWEowZVU1aGJXVmRJQ0U5UFNCMWJtUmxabWx1WldRN1hHNWNiaThxWEc0Z0lDQWdTWE1nZFhScGJITWdkbUZ5SUdGdUlHRnljbUY1SUQ4Z1hHNGdJQ0FnWEc0Z0lDQWdRSEJoY21GdE9pQldZWEpwWVdKc1pTQjBieUIwWlhOMFhHNGdJQ0FnUUhKbGRIVnliaUJiWW05dmJHVmhibDA2SUZKbGRIVnlibk1nZEhKMVpTQnBaaUIxZEdsc2N5NTJZWEpVZVhCbElEMDlQU0FuUVhKeVlYa25YRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR2x6UVhKeVlYa2dQU0FvWVhKeUtTQTlQaUIyWVhKVWVYQmxLR0Z5Y2lrZ1BUMDlJQ2RCY25KaGVTYzdYRzVjYmk4cVhHNGdJQ0FnU1hNZ2RYUnBiSE1nZG1GeUlHRWdablZ1WTNScGIyNGdQeUJjYmlBZ0lDQmNiaUFnSUNCQWNHRnlZVzA2SUZaaGNtbGhZbXhsSUhSdklIUmxjM1JjYmlBZ0lDQkFjbVYwZFhKdUlGdGliMjlzWldGdVhUb2dVbVYwZFhKdWN5QjBjblZsSUdsbUlIVjBhV3h6TG5aaGNsUjVjR1VnUFQwOUlDZEdkVzVqZEdsdmJpZGNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdhWE5HZFc1aklEMGdLRzlpYWlrZ1BUNGdkbUZ5Vkhsd1pTaHZZbW9wSUQwOVBTQW5SblZ1WTNScGIyNG5PMXh1WEc0dktseHVJQ0FnSUVseklIVjBhV3h6SUhaaGNpQmhJRzUxYldKbGNqOWNiaUFnSUNCY2JpQWdJQ0JBY0dGeVlXMDZJRlpoY21saFlteGxJSFJ2SUhSbGMzUmNiaUFnSUNCQWNtVjBkWEp1SUZ0aWIyOXNaV0Z1WFRvZ1VtVjBkWEp1Y3lCMGNuVmxJR2xtSUhSNWNHVnZaaUE5UFQwZ0oyNTFiV0psY2lkY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2FYTk9kVzBnUFNBb2JuVnRLU0E5UGlCMGVYQmxiMllnYm5WdElEMDlQU0FuYm5WdFltVnlKenRjYmx4dUx5cGNiaUFnSUNCSmN5QjFkR2xzY3lCMllYSWdZVzRnYjJKcVpXTjBQMXh1SUNBZ0lGeHVJQ0FnSUVCd1lYSmhiVG9nVm1GeWFXRmliR1VnZEc4Z2RHVnpkRnh1SUNBZ0lFQnlaWFIxY200Z1cySnZiMnhsWVc1ZE9pQlNaWFIxY201eklIUnlkV1VnYVdZZ2RIbHdaVzltSUQwOVBTQW5iMkpxWldOMEoxeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnBjMDlpYWlBOUlDaHZZbW9wSUQwK0lIUjVjR1Z2WmlCdlltb2dQVDA5SUNkdlltcGxZM1FuTzF4dVhHNHZLbHh1SUNBZ0lFbHpJSFYwYVd4eklHRWdjbVZzWVhScGRtVWdkbUZzZFdVZ1lYTnphV2R1YldWdWREOWNiaUFnSUNCY2JpQWdJQ0JBY0dGeVlXMGdXM04wY21sdVoxMDZJRlpoY21saFlteGxJSFJ2SUhSbGMzUmNiaUFnSUNCQWNtVjBkWEp1SUZ0aWIyOXNaV0Z1WFRvZ1NXWWdkWFJwYkhNZ2JHOXZhM01nYkdsclpTQmhJSEpsYkdGMGFYWmxJSFpoYkhWbElHRnpjMmxuYm0xbGJuUmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdhWE5TWld4aGRHbDJaVlpoYkhWbElEMGdLSFpoYkhWbEtTQTlQaUFvZG1Gc2RXVWdKaVlnZG1Gc2RXVXVhVzVrWlhoUFppQW1KaUIyWVd4MVpTNXBibVJsZUU5bUtDYzlKeWtnUGlBd0tTQS9JSFJ5ZFdVZ09pQm1ZV3h6WlR0Y2JseHVMeXBjYmlBZ0lDQkpjeUIxZEdsc2N5QjJZWElnWVNCemRISnBibWNnUHlCY2JpQWdJQ0JjYmlBZ0lDQkFjR0Z5WVcwNklGWmhjbWxoWW14bElIUnZJSFJsYzNSY2JpQWdJQ0JBY21WMGRYSnVJRnRpYjI5c1pXRnVYVG9nVW1WMGRYSnVjeUIwY25WbElHbG1JSFI1Y0dWdlppQnpkSElnUFQwOUlDZHpkSEpwYm1jblhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHbHpVM1J5YVc1bklEMGdLSE4wY2lrZ1BUNGdkSGx3Wlc5bUlITjBjaUE5UFQwZ0ozTjBjbWx1WnljN1hHNWNiaThxWEc0Z0lDQWdRSEJoY21GdElGdHpkSEpwYm1jZ2ZId2dUbTlrWlV4cGMzUmRPbHh1SUNBZ0lDQWdJQ0JKWmlCemRISnBibWNzSUhSeVpXRjBaV1FnWVhNZ2MyVnNaV04wYjNJdVhHNGdJQ0FnSUNBZ0lFbG1JRzV2ZEN3Z2RISmxZWFJsWkNCaGN5QndjbVZsZUdsemRHbHVaeUJPYjJSbFRHbHpkRnh1WEc0Z0lDQWdRSEpsZEhWeWJpQmJRWEp5WVhsZFhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElITmxiR1ZqZEVSdmJTQTlJQ2h6Wld4bFkzUnZjaWtnUFQ0Z2UxeHVJQ0FnSUdOdmJuTjBJRzV2WkdWeklEMGdLSFI1Y0dWdlppQnpaV3hsWTNSdmNpQTlQVDBnSjNOMGNtbHVaeWNwSUQ4Z1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZja0ZzYkNoelpXeGxZM1J2Y2lrZ09pQnpaV3hsWTNSdmNqdGNiaUFnSUNCeVpYUjFjbTRnS0c1dlpHVnpMbXhsYm1kMGFDa2dQeUJiWFM1emJHbGpaUzVqWVd4c0tHNXZaR1Z6S1NBNklGdGRMbkIxYzJnb2JtOWtaWE1wTzF4dWZUdGNibHh1THlwY2JpQWdJQ0JUY0d4cGRDQmpiMjF0WVMxa1pXeHBiV2wwWldRZ2MzUnlhVzVuWEc1Y2JpQWdJQ0JjSW1admJ5eGlZWEpjSWlBdFBpQmJYQ0ptYjI5Y0lpd2dYQ0ppWVhKY0lsMWNibHh1SUNBZ0lFQndZWEpoYlNCYmMzUnlhVzVuWFZ4dUlDQWdJRUJ5WlhSMWNtNGdXMkZ5Y21GNVhWeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnpjR3hwZEVOdmJXMWhSR1ZzYVcxcGRHVmtJRDBnS0haaGJIVmxLU0E5UGlCcGMxTjBjbWx1WnloMllXeDFaU2tnUHlCMllXeDFaUzV6Y0d4cGRDZ3ZMRnhjY3lvdktTQTZJRnQyWVd4MVpWMDdYRzVjYmk4cVhHNGdJQ0FnVTNCc2FYUWdjM0JoWTJVdFpHVnNhVzFwZEdWa0lITjBjbWx1WjF4dVhHNGdJQ0FnWENKbWIyOGdZbUZ5WENJZ0xUNGdXMXdpWm05dlhDSXNJRndpWW1GeVhDSmRYRzVjYmlBZ0lDQkFjR0Z5WVcwZ1czTjBjbWx1WjExY2JpQWdJQ0JBY21WMGRYSnVJRnRoY25KaGVWMWNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdjM0JzYVhSVGNHRmpaVVJsYkdsdGFYUmxaQ0E5SUNoMllXeDFaU2tnUFQ0Z2FYTlRkSEpwYm1jb2RtRnNkV1VwSUQ4Z2RtRnNkV1V1YzNCc2FYUW9KeUFuS1NBNklGdDJZV3gxWlYwN1hHNWNiaThxWEc0Z0lDQWdRMjl1ZG1WeWRDQnVkVzFpWlhJZ2RHOGdlQ0JrWldOcGJXRnNJSEJzWVdObGMxeHVYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkWEc0Z0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZFhHNGdJQ0FnUUhKbGRIVnliaUJiYm5WdFltVnlYVnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0IwYjBSbFkybHRZV3dnUFNBb2JuVnRMQ0J3Y21WamFYTnBiMjRnUFNBeUtTQTlQaUI3WEc0Z0lDQWdjSEpsWTJsemFXOXVJRDBnTVRBZ0tpb2djSEpsWTJsemFXOXVPMXh1SUNBZ0lISmxkSFZ5YmlCTllYUm9Mbkp2ZFc1a0tHNTFiU0FxSUhCeVpXTnBjMmx2YmlrZ0x5QndjbVZqYVhOcGIyNDdYRzU5TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy91dGlscy5qc1xuICoqIG1vZHVsZSBpZCA9IDIxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGVmYXVsdFByb3BzID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kZWZhdWx0LXByb3BzJyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IF9kZWZhdWx0UHJvcHMub3BhY2l0eVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OWhiSEJvWVM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPMEZCUVVFN08ydENRVVZsTzBGQlExZ3NkVU5CUkZjaUxDSm1hV3hsSWpvaVlXeHdhR0V1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhzZ2IzQmhZMmwwZVNCOUlHWnliMjBnSnk0dmMyVjBkR2x1WjNNdlpHVm1ZWFZzZEMxd2NtOXdjeWM3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUh0Y2JpQWdJQ0JrWldaaGRXeDBVSEp2Y0hNNklHOXdZV05wZEhsY2JuMDdJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9hbHBoYS5qc1xuICoqIG1vZHVsZSBpZCA9IDIyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdW5pdCA9IHJlcXVpcmUoJy4vdW5pdCcpO1xuXG52YXIgX3VuaXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdW5pdCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgdW5pdDogJ2RlZycsXG4gICAgICAgIHR5cGU6IF91bml0Mi5kZWZhdWx0XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OWhibWRzWlM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPMEZCUVVFN096czdPenRyUWtGRlpUdEJRVU5ZTEd0Q1FVRmpPMEZCUTFZc1kwRkJUU3hMUVVGT08wRkJRMEVzTkVKQlJsVTdTMEZCWkNJc0ltWnBiR1VpT2lKaGJtZHNaUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZFc1cGRGUjVjR1VnWm5KdmJTQW5MaTkxYm1sMEp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdlMXh1SUNBZ0lHUmxabUYxYkhSUWNtOXdjem9nZTF4dUlDQWdJQ0FnSUNCMWJtbDBPaUFuWkdWbkp5eGNiaUFnSUNBZ0lDQWdkSGx3WlRvZ2RXNXBkRlI1Y0dWY2JpQWdJQ0I5WEc1OU95SmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9hbmdsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDIzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcmdiID0gcmVxdWlyZSgnLi9yZ2InKTtcblxudmFyIF9yZ2IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmdiKTtcblxudmFyIF9oc2wgPSByZXF1aXJlKCcuL2hzbCcpO1xuXG52YXIgX2hzbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oc2wpO1xuXG52YXIgX2hleCA9IHJlcXVpcmUoJy4vaGV4Jyk7XG5cbnZhciBfaGV4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hleCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBjb2xvclR5cGVzID0gW19yZ2IyLmRlZmF1bHQsIF9oc2wyLmRlZmF1bHQsIF9oZXgyLmRlZmF1bHRdO1xudmFyIG51bUNvbG9yVHlwZXMgPSBjb2xvclR5cGVzLmxlbmd0aDtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGRlZmF1bHRQcm9wczogX2V4dGVuZHMoe30sIF9yZ2IyLmRlZmF1bHQuZGVmYXVsdFByb3BzLCBfaHNsMi5kZWZhdWx0LmRlZmF1bHRQcm9wcyksXG5cbiAgICB0ZXN0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIF9yZ2IyLmRlZmF1bHQudGVzdCh2YWx1ZSkgfHwgX2hleDIuZGVmYXVsdC50ZXN0KHZhbHVlKSB8fCBfaHNsMi5kZWZhdWx0LnRlc3QodmFsdWUpO1xuICAgIH0sXG5cbiAgICBzcGxpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtQ29sb3JUeXBlczsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY29sb3JUeXBlc1tpXS50ZXN0KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb2xvclR5cGVzW2ldLnNwbGl0KHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBjb21iaW5lOiBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZXMuUmVkICE9PSB1bmRlZmluZWQgPyBfcmdiMi5kZWZhdWx0LmNvbWJpbmUodmFsdWVzKSA6IF9oc2wyLmRlZmF1bHQuY29tYmluZSh2YWx1ZXMpO1xuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTlqYjJ4dmNpNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN1FVRkJRVHM3T3p0QlFVTkJPenM3TzBGQlEwRTdPenM3T3p0QlFVVkJMRWxCUVUwc1lVRkJZU3cyUTBGQllqdEJRVU5PTEVsQlFVMHNaMEpCUVdkQ0xGZEJRVmNzVFVGQldEczdhMEpCUlZBN1FVRkRXQ3dyUWtGQmJVSXNZMEZCU1N4WlFVRktMRVZCUVhGQ0xHTkJRVWtzV1VGQlNpeERRVUY0UXpzN1FVRkZRU3hWUVVGTkxGVkJRVU1zUzBGQlJEdGxRVUZYTEdOQlFVa3NTVUZCU2l4RFFVRlRMRXRCUVZRc1MwRkJiVUlzWTBGQlNTeEpRVUZLTEVOQlFWTXNTMEZCVkN4RFFVRnVRaXhKUVVGelF5eGpRVUZKTEVsQlFVb3NRMEZCVXl4TFFVRlVMRU5CUVhSRE8wdEJRVmc3TzBGQlJVNHNWMEZCVHl4VlFVRkRMRXRCUVVRc1JVRkJWenRCUVVOa0xHRkJRVXNzU1VGQlNTeEpRVUZKTEVOQlFVb3NSVUZCVHl4SlFVRkpMR0ZCUVVvc1JVRkJiVUlzUjBGQmJrTXNSVUZCZDBNN1FVRkRjRU1zWjBKQlFVa3NWMEZCVnl4RFFVRllMRVZCUVdNc1NVRkJaQ3hEUVVGdFFpeExRVUZ1UWl4RFFVRktMRVZCUVN0Q08wRkJRek5DTEhWQ1FVRlBMRmRCUVZjc1EwRkJXQ3hGUVVGakxFdEJRV1FzUTBGQmIwSXNTMEZCY0VJc1EwRkJVQ3hEUVVReVFqdGhRVUV2UWp0VFFVUktPMHRCUkVjN08wRkJVVkFzWVVGQlV5eFZRVUZETEUxQlFVUTdaVUZCV1N4TlFVRkRMRU5CUVU4c1IwRkJVQ3hMUVVGbExGTkJRV1lzUjBGQk5FSXNZMEZCU1N4UFFVRktMRU5CUVZrc1RVRkJXaXhEUVVFM1FpeEhRVUZ0UkN4alFVRkpMRTlCUVVvc1EwRkJXU3hOUVVGYUxFTkJRVzVFTzB0QlFWb2lMQ0ptYVd4bElqb2lZMjlzYjNJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUXZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElISm5ZaUJtY205dElDY3VMM0puWWljN1hHNXBiWEJ2Y25RZ2FITnNJR1p5YjIwZ0p5NHZhSE5zSnp0Y2JtbHRjRzl5ZENCb1pYZ2dabkp2YlNBbkxpOW9aWGduTzF4dVhHNWpiMjV6ZENCamIyeHZjbFI1Y0dWeklEMGdXM0puWWl3Z2FITnNMQ0JvWlhoZE8xeHVZMjl1YzNRZ2JuVnRRMjlzYjNKVWVYQmxjeUE5SUdOdmJHOXlWSGx3WlhNdWJHVnVaM1JvTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCN1hHNGdJQ0FnWkdWbVlYVnNkRkJ5YjNCek9pQjdJQzR1TG5KbllpNWtaV1poZFd4MFVISnZjSE1zSUM0dUxtaHpiQzVrWldaaGRXeDBVSEp2Y0hNZ2ZTeGNibHh1SUNBZ0lIUmxjM1E2SUNoMllXeDFaU2tnUFQ0Z2NtZGlMblJsYzNRb2RtRnNkV1VwSUh4OElHaGxlQzUwWlhOMEtIWmhiSFZsS1NCOGZDQm9jMnd1ZEdWemRDaDJZV3gxWlNrc1hHNWNiaUFnSUNCemNHeHBkRG9nS0haaGJIVmxLU0E5UGlCN1hHNGdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2diblZ0UTI5c2IzSlVlWEJsY3pzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvWTI5c2IzSlVlWEJsYzF0cFhTNTBaWE4wS0haaGJIVmxLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJqYjJ4dmNsUjVjR1Z6VzJsZExuTndiR2wwS0haaGJIVmxLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMHNYRzVjYmlBZ0lDQmpiMjFpYVc1bE9pQW9kbUZzZFdWektTQTlQaUFvZG1Gc2RXVnpMbEpsWkNBaFBUMGdkVzVrWldacGJtVmtLU0EvSUhKbllpNWpiMjFpYVc1bEtIWmhiSFZsY3lrZ09pQm9jMnd1WTI5dFltbHVaU2gyWVd4MVpYTXBYRzU5TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2NvbG9yLmpzXG4gKiogbW9kdWxlIGlkID0gMjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG52YXIgRkxPQVRfUkVHRVggPSAvKC0pPyhcXGRbXFxkXFwuXSopL2c7XG52YXIgZ2VuZXJhdGVUb2tlbiA9IGZ1bmN0aW9uICh0b2tlbikge1xuICAgIHJldHVybiAnJHsnICsgdG9rZW4gKyAnfSc7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG5cbiAgICB0ZXN0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIG1hdGNoZXMgPSB2YWx1ZS5tYXRjaChGTE9BVF9SRUdFWCk7XG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzLmlzQXJyYXkpKG1hdGNoZXMpICYmIG1hdGNoZXMubGVuZ3RoID4gMTtcbiAgICB9LFxuXG4gICAgdGVtcGxhdGU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgY291bnRlciA9IDA7XG4gICAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKEZMT0FUX1JFR0VYLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2VuZXJhdGVUb2tlbihjb3VudGVyKyspO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgc3BsaXRWYWx1ZSA9IHt9O1xuXG4gICAgICAgIHZhbHVlLm1hdGNoKEZMT0FUX1JFR0VYKS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwgaSkge1xuICAgICAgICAgICAgcmV0dXJuIHNwbGl0VmFsdWVbaV0gPSB2YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHNwbGl0VmFsdWU7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMsIHRlbXBsYXRlKSB7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiB2YWx1ZXMpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlID0gdGVtcGxhdGUucmVwbGFjZShnZW5lcmF0ZVRva2VuKGtleSksIHZhbHVlc1trZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICB9XG5cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTlqYjIxd2JHVjRMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN1FVRkJRVHM3UVVGRlFTeEpRVUZOTEdOQlFXTXNhMEpCUVdRN1FVRkRUaXhKUVVGTkxHZENRVUZuUWl4VlFVRkRMRXRCUVVRN1YwRkJWeXhQUVVGUExFdEJRVkFzUjBGQlpTeEhRVUZtTzBOQlFWZzdPMnRDUVVWUU96dEJRVVZZTEZWQlFVMHNWVUZCUXl4TFFVRkVMRVZCUVZjN1FVRkRZaXhaUVVGTkxGVkJRVlVzVFVGQlRTeExRVUZPTEVOQlFWa3NWMEZCV2l4RFFVRldMRU5CUkU4N1FVRkZZaXhsUVVGUkxHOUNRVUZSTEU5QlFWSXNTMEZCYjBJc1VVRkJVU3hOUVVGU0xFZEJRV2xDTEVOQlFXcENMRU5CUm1ZN1MwRkJXRHM3UVVGTFRpeGpRVUZWTEZWQlFVTXNTMEZCUkN4RlFVRlhPMEZCUTJwQ0xGbEJRVWtzVlVGQlZTeERRVUZXTEVOQlJHRTdRVUZGYWtJc1pVRkJUeXhOUVVGTkxFOUJRVTRzUTBGQll5eFhRVUZrTEVWQlFUSkNPMjFDUVVGTkxHTkJRV01zVTBGQlpEdFRRVUZPTEVOQlFXeERMRU5CUm1sQ08wdEJRVmc3TzBGQlMxWXNWMEZCVHl4VlFVRkRMRXRCUVVRc1JVRkJWenRCUVVOa0xGbEJRVTBzWVVGQllTeEZRVUZpTEVOQlJGRTdPMEZCUjJRc1kwRkJUU3hMUVVGT0xFTkJRVmtzVjBGQldpeEZRVUY1UWl4UFFVRjZRaXhEUVVGcFF5eFZRVUZETEV0QlFVUXNSVUZCVVN4RFFVRlNPMjFDUVVGakxGZEJRVmNzUTBGQldDeEpRVUZuUWl4TFFVRm9RanRUUVVGa0xFTkJRV3BETEVOQlNHTTdPMEZCUzJRc1pVRkJUeXhWUVVGUUxFTkJUR003UzBGQldEczdRVUZSVUN4aFFVRlRMRlZCUVVNc1RVRkJSQ3hGUVVGVExGRkJRVlFzUlVGQmMwSTdRVUZETTBJc1lVRkJTeXhKUVVGSkxFZEJRVW9zU1VGQlZ5eE5RVUZvUWl4RlFVRjNRanRCUVVOd1FpeG5Ra0ZCU1N4UFFVRlBMR05CUVZBc1EwRkJjMElzUjBGQmRFSXNRMEZCU2l4RlFVRm5RenRCUVVNMVFpd3lRa0ZCVnl4VFFVRlRMRTlCUVZRc1EwRkJhVUlzWTBGQll5eEhRVUZrTEVOQlFXcENMRVZCUVhGRExFOUJRVThzUjBGQlVDeERRVUZ5UXl4RFFVRllMRU5CUkRSQ08yRkJRV2hETzFOQlJFbzdPMEZCVFVFc1pVRkJUeXhSUVVGUUxFTkJVREpDTzB0QlFYUkNJaXdpWm1sc1pTSTZJbU52YlhCc1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFF2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSHNnYVhOQmNuSmhlU0I5SUdaeWIyMGdKeTR1TDJsdVl5OTFkR2xzY3ljN1hHNWNibU52Ym5OMElFWk1UMEZVWDFKRlIwVllJRDBnTHlndEtUOG9YRnhrVzF4Y1pGeGNMbDBxS1M5bk8xeHVZMjl1YzNRZ1oyVnVaWEpoZEdWVWIydGxiaUE5SUNoMGIydGxiaWtnUFQ0Z0p5UjdKeUFySUhSdmEyVnVJQ3NnSjMwbk8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQjdYRzVjYmlBZ0lDQjBaWE4wT2lBb2RtRnNkV1VwSUQwK0lIdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2JXRjBZMmhsY3lBOUlIWmhiSFZsTG0xaGRHTm9LRVpNVDBGVVgxSkZSMFZZS1R0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUNocGMwRnljbUY1S0cxaGRHTm9aWE1wSUNZbUlHMWhkR05vWlhNdWJHVnVaM1JvSUQ0Z01TazdYRzRnSUNBZ2ZTeGNibHh1SUNBZ0lIUmxiWEJzWVhSbE9pQW9kbUZzZFdVcElEMCtJSHRjYmlBZ0lDQWdJQ0FnYkdWMElHTnZkVzUwWlhJZ1BTQXdPMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkbUZzZFdVdWNtVndiR0ZqWlNoR1RFOUJWRjlTUlVkRldDd2dLQ2tnUFQ0Z1oyVnVaWEpoZEdWVWIydGxiaWhqYjNWdWRHVnlLeXNwS1R0Y2JpQWdJQ0I5TEZ4dVhHNGdJQ0FnYzNCc2FYUTZJQ2gyWVd4MVpTa2dQVDRnZTF4dUlDQWdJQ0FnSUNCamIyNXpkQ0J6Y0d4cGRGWmhiSFZsSUQwZ2UzMDdYRzVjYmlBZ0lDQWdJQ0FnZG1Gc2RXVXViV0YwWTJnb1JreFBRVlJmVWtWSFJWZ3BMbVp2Y2tWaFkyZ29LSFpoYkhWbExDQnBLU0E5UGlCemNHeHBkRlpoYkhWbFcybGRJRDBnZG1Gc2RXVXBPMXh1WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJ6Y0d4cGRGWmhiSFZsTzF4dUlDQWdJSDBzWEc1Y2JpQWdJQ0JqYjIxaWFXNWxPaUFvZG1Gc2RXVnpMQ0IwWlcxd2JHRjBaU2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQm1iM0lnS0d4bGRDQnJaWGtnYVc0Z2RtRnNkV1Z6S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RtRnNkV1Z6TG1oaGMwOTNibEJ5YjNCbGNuUjVLR3RsZVNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBaVzF3YkdGMFpTQTlJSFJsYlhCc1lYUmxMbkpsY0d4aFkyVW9aMlZ1WlhKaGRHVlViMnRsYmloclpYa3BMQ0IyWVd4MVpYTmJhMlY1WFNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHVnRjR3hoZEdVN1hHNGdJQ0FnZlZ4dVhHNTlPeUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvY29tcGxleC5qc1xuICoqIG1vZHVsZSBpZCA9IDI1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfcmdiID0gcmVxdWlyZSgnLi9yZ2InKTtcblxudmFyIF9yZ2IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmdiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGRlZmF1bHRQcm9wczogX3JnYjIuZGVmYXVsdC5kZWZhdWx0UHJvcHMsXG5cbiAgICB0ZXN0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlICYmIHZhbHVlLmluZGV4T2YoJyMnKSA+IC0xO1xuICAgIH0sXG5cbiAgICBzcGxpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciByID0gdm9pZCAwLFxuICAgICAgICAgICAgZyA9IHZvaWQgMCxcbiAgICAgICAgICAgIGIgPSB2b2lkIDA7XG5cbiAgICAgICAgLy8gSWYgd2UgaGF2ZSA2IGNoYXJhY3RlcnMsIGllICNGRjAwMDBcbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+IDQpIHtcbiAgICAgICAgICAgIHIgPSB2YWx1ZS5zdWJzdHIoMSwgMik7XG4gICAgICAgICAgICBnID0gdmFsdWUuc3Vic3RyKDMsIDIpO1xuICAgICAgICAgICAgYiA9IHZhbHVlLnN1YnN0cig1LCAyKTtcblxuICAgICAgICAgICAgLy8gT3Igd2UgaGF2ZSAzIGNoYXJhY3RlcnMsIGllICNGMDBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByID0gdmFsdWUuc3Vic3RyKDEsIDEpO1xuICAgICAgICAgICAgICAgIGcgPSB2YWx1ZS5zdWJzdHIoMiwgMSk7XG4gICAgICAgICAgICAgICAgYiA9IHZhbHVlLnN1YnN0cigzLCAxKTtcbiAgICAgICAgICAgICAgICByICs9IHI7XG4gICAgICAgICAgICAgICAgZyArPSBnO1xuICAgICAgICAgICAgICAgIGIgKz0gYjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgUmVkOiBwYXJzZUludChyLCAxNiksXG4gICAgICAgICAgICBHcmVlbjogcGFyc2VJbnQoZywgMTYpLFxuICAgICAgICAgICAgQmx1ZTogcGFyc2VJbnQoYiwgMTYpLFxuICAgICAgICAgICAgQWxwaGE6IDFcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICByZXR1cm4gX3JnYjIuZGVmYXVsdC5jb21iaW5lKHZhbHVlcyk7XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OW9aWGd1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dEJRVUZCT3pzN096czdhMEpCUldVN1FVRkRXQ3hyUWtGQll5eGpRVUZKTEZsQlFVbzdPMEZCUldRc1ZVRkJUU3hWUVVGRExFdEJRVVE3WlVGQldTeFRRVUZUTEUxQlFVMHNUMEZCVGl4RFFVRmpMRWRCUVdRc1NVRkJjVUlzUTBGQlF5eERRVUZFTzB0QlFURkRPenRCUVVWT0xGZEJRVThzVlVGQlF5eExRVUZFTEVWQlFWYzdRVUZEWkN4WlFVRkpMRlZCUVVvN1dVRkJUeXhWUVVGUU8xbEJRVlVzVlVGQlZqczdPMEZCUkdNc1dVRkpWaXhOUVVGTkxFMUJRVTRzUjBGQlpTeERRVUZtTEVWQlFXdENPMEZCUTJ4Q0xHZENRVUZKTEUxQlFVMHNUVUZCVGl4RFFVRmhMRU5CUVdJc1JVRkJaMElzUTBGQmFFSXNRMEZCU2l4RFFVUnJRanRCUVVWc1FpeG5Ra0ZCU1N4TlFVRk5MRTFCUVU0c1EwRkJZU3hEUVVGaUxFVkJRV2RDTEVOQlFXaENMRU5CUVVvc1EwRkdhMEk3UVVGSGJFSXNaMEpCUVVrc1RVRkJUU3hOUVVGT0xFTkJRV0VzUTBGQllpeEZRVUZuUWl4RFFVRm9RaXhEUVVGS096czdRVUZJYTBJc1UwRkJkRUlzVFVGTlR6dEJRVU5JTEc5Q1FVRkpMRTFCUVUwc1RVRkJUaXhEUVVGaExFTkJRV0lzUlVGQlowSXNRMEZCYUVJc1EwRkJTaXhEUVVSSE8wRkJSVWdzYjBKQlFVa3NUVUZCVFN4TlFVRk9MRU5CUVdFc1EwRkJZaXhGUVVGblFpeERRVUZvUWl4RFFVRktMRU5CUmtjN1FVRkhTQ3h2UWtGQlNTeE5RVUZOTEUxQlFVNHNRMEZCWVN4RFFVRmlMRVZCUVdkQ0xFTkJRV2hDTEVOQlFVb3NRMEZJUnp0QlFVbElMSEZDUVVGTExFTkJRVXdzUTBGS1J6dEJRVXRJTEhGQ1FVRkxMRU5CUVV3c1EwRk1SenRCUVUxSUxIRkNRVUZMTEVOQlFVd3NRMEZPUnp0aFFVNVFPenRCUVdWQkxHVkJRVTg3UVVGRFNDeHBRa0ZCU3l4VFFVRlRMRU5CUVZRc1JVRkJXU3hGUVVGYUxFTkJRVXc3UVVGRFFTeHRRa0ZCVHl4VFFVRlRMRU5CUVZRc1JVRkJXU3hGUVVGYUxFTkJRVkE3UVVGRFFTeHJRa0ZCVFN4VFFVRlRMRU5CUVZRc1JVRkJXU3hGUVVGYUxFTkJRVTQ3UVVGRFFTeHRRa0ZCVHl4RFFVRlFPMU5CU2tvc1EwRnVRbU03UzBGQldEczdRVUV5UWxBc1lVRkJVeXhWUVVGRExFMUJRVVE3WlVGQldTeGpRVUZKTEU5QlFVb3NRMEZCV1N4TlFVRmFPMHRCUVZvaUxDSm1hV3hsSWpvaWFHVjRMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwTDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0J5WjJJZ1puSnZiU0FuTGk5eVoySW5PMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0I3WEc0Z0lDQWdaR1ZtWVhWc2RGQnliM0J6T2lCeVoySXVaR1ZtWVhWc2RGQnliM0J6TEZ4dVhHNGdJQ0FnZEdWemREb2dLSFpoYkhWbEtTQTlQaUFvZG1Gc2RXVWdKaVlnZG1Gc2RXVXVhVzVrWlhoUFppZ25JeWNwSUQ0Z0xURXBMRnh1WEc0Z0lDQWdjM0JzYVhRNklDaDJZV3gxWlNrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0JzWlhRZ2Npd2daeXdnWWp0Y2JseHVJQ0FnSUNBZ0lDQXZMeUJKWmlCM1pTQm9ZWFpsSURZZ1kyaGhjbUZqZEdWeWN5d2dhV1VnSTBaR01EQXdNRnh1SUNBZ0lDQWdJQ0JwWmlBb2RtRnNkV1V1YkdWdVozUm9JRDRnTkNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY2lBOUlIWmhiSFZsTG5OMVluTjBjaWd4TENBeUtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUdjZ1BTQjJZV3gxWlM1emRXSnpkSElvTXl3Z01pazdYRzRnSUNBZ0lDQWdJQ0FnSUNCaUlEMGdkbUZzZFdVdWMzVmljM1J5S0RVc0lESXBPMXh1WEc0Z0lDQWdJQ0FnSUM4dklFOXlJSGRsSUdoaGRtVWdNeUJqYUdGeVlXTjBaWEp6TENCcFpTQWpSakF3WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlJRDBnZG1Gc2RXVXVjM1ZpYzNSeUtERXNJREVwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdaeUE5SUhaaGJIVmxMbk4xWW5OMGNpZ3lMQ0F4S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJR0lnUFNCMllXeDFaUzV6ZFdKemRISW9NeXdnTVNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5SUNzOUlISTdYRzRnSUNBZ0lDQWdJQ0FnSUNCbklDczlJR2M3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmlJQ3M5SUdJN1hHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1VtVmtPaUJ3WVhKelpVbHVkQ2h5TENBeE5pa3NYRzRnSUNBZ0lDQWdJQ0FnSUNCSGNtVmxiam9nY0dGeWMyVkpiblFvWnl3Z01UWXBMRnh1SUNBZ0lDQWdJQ0FnSUNBZ1FteDFaVG9nY0dGeWMyVkpiblFvWWl3Z01UWXBMRnh1SUNBZ0lDQWdJQ0FnSUNBZ1FXeHdhR0U2SURGY2JpQWdJQ0FnSUNBZ2ZUdGNiaUFnSUNCOUxGeHVYRzRnSUNBZ1kyOXRZbWx1WlRvZ0tIWmhiSFZsY3lrZ1BUNGdjbWRpTG1OdmJXSnBibVVvZG1Gc2RXVnpLVnh1ZlRzaVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2hleC5qc1xuICoqIG1vZHVsZSBpZCA9IDI2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGVmYXVsdFByb3BzID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kZWZhdWx0LXByb3BzJyk7XG5cbnZhciBfZGljdGlvbmFyeSA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGljdGlvbmFyeScpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgSHVlOiB7XG4gICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICBtYXg6IDM2MFxuICAgICAgICB9LFxuICAgICAgICBTYXR1cmF0aW9uOiBfZGVmYXVsdFByb3BzLnBlcmNlbnQsXG4gICAgICAgIExpZ2h0bmVzczogX2RlZmF1bHRQcm9wcy5wZXJjZW50LFxuICAgICAgICBBbHBoYTogX2RlZmF1bHRQcm9wcy5vcGFjaXR5XG4gICAgfSxcblxuICAgIHRlc3Q6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgJiYgdmFsdWUuaW5kZXhPZignaHNsJykgPiAtMTtcbiAgICB9LFxuXG4gICAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gKDAsIF91dGlscy5nZXRDb2xvclZhbHVlcykodmFsdWUsIF9kaWN0aW9uYXJ5LmhzbCk7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMuY3JlYXRlRnVuY3Rpb25TdHJpbmcpKCgwLCBfdXRpbHMuY3JlYXRlRGVsaW1pdGVkKSh2YWx1ZXMsIF9kaWN0aW9uYXJ5LmhzbCwgJywgJywgMiksICdoc2xhJyk7XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OW9jMnd1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dEJRVUZCT3p0QlFVTkJPenRCUVVOQk96dHJRa0ZGWlR0QlFVTllMR3RDUVVGak8wRkJRMVlzWVVGQlN6dEJRVU5FTEdsQ1FVRkxMRU5CUVV3N1FVRkRRU3hwUWtGQlN5eEhRVUZNTzFOQlJrbzdRVUZKUVN4NVEwRk1WVHRCUVUxV0xIZERRVTVWTzBGQlQxWXNiME5CVUZVN1MwRkJaRHM3UVVGVlFTeFZRVUZOTEZWQlFVTXNTMEZCUkR0bFFVRlpMRk5CUVZNc1RVRkJUU3hQUVVGT0xFTkJRV01zUzBGQlpDeEpRVUYxUWl4RFFVRkRMRU5CUVVRN1MwRkJOVU03TzBGQlJVNHNWMEZCVHl4VlFVRkRMRXRCUVVRN1pVRkJWeXd5UWtGQlpTeExRVUZtTzB0QlFWZzdPMEZCUlZBc1lVRkJVeXhWUVVGRExFMUJRVVE3WlVGQldTeHBRMEZCY1VJc05FSkJRV2RDTEUxQlFXaENMRzFDUVVGclF5eEpRVUZzUXl4RlFVRjNReXhEUVVGNFF5eERRVUZ5UWl4RlFVRnBSU3hOUVVGcVJUdExRVUZhSWl3aVptbHNaU0k2SW1oemJDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdleUJ3WlhKalpXNTBMQ0J2Y0dGamFYUjVJSDBnWm5KdmJTQW5MaTl6WlhSMGFXNW5jeTlrWldaaGRXeDBMWEJ5YjNCekp6dGNibWx0Y0c5eWRDQjdJR2h6YkNCaGN5Qm9jMnhVWlhKdGN5QjlJR1p5YjIwZ0p5NHZjMlYwZEdsdVozTXZaR2xqZEdsdmJtRnllU2M3WEc1cGJYQnZjblFnZXlCamNtVmhkR1ZFWld4cGJXbDBaV1FzSUdOeVpXRjBaVVoxYm1OMGFXOXVVM1J5YVc1bkxDQm5aWFJEYjJ4dmNsWmhiSFZsY3lCOUlHWnliMjBnSnk0dUwybHVZeTkxZEdsc2N5YzdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJSHRjYmlBZ0lDQmtaV1poZFd4MFVISnZjSE02SUh0Y2JpQWdJQ0FnSUNBZ1NIVmxPaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnRhVzQ2SURBc1hHNGdJQ0FnSUNBZ0lDQWdJQ0J0WVhnNklETTJNRnh1SUNBZ0lDQWdJQ0I5TEZ4dUlDQWdJQ0FnSUNCVFlYUjFjbUYwYVc5dU9pQndaWEpqWlc1MExGeHVJQ0FnSUNBZ0lDQk1hV2RvZEc1bGMzTTZJSEJsY21ObGJuUXNYRzRnSUNBZ0lDQWdJRUZzY0doaE9pQnZjR0ZqYVhSNVhHNGdJQ0FnZlN4Y2JseHVJQ0FnSUhSbGMzUTZJQ2gyWVd4MVpTa2dQVDRnS0haaGJIVmxJQ1ltSUhaaGJIVmxMbWx1WkdWNFQyWW9KMmh6YkNjcElENGdMVEVwTEZ4dVhHNGdJQ0FnYzNCc2FYUTZJQ2gyWVd4MVpTa2dQVDRnWjJWMFEyOXNiM0pXWVd4MVpYTW9kbUZzZFdVc0lHaHpiRlJsY20xektTeGNibHh1SUNBZ0lHTnZiV0pwYm1VNklDaDJZV3gxWlhNcElEMCtJR055WldGMFpVWjFibU4wYVc5dVUzUnlhVzVuS0dOeVpXRjBaVVJsYkdsdGFYUmxaQ2gyWVd4MVpYTXNJR2h6YkZSbGNtMXpMQ0FuTENBbkxDQXlLU3dnSjJoemJHRW5LVnh1ZlR0Y2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9oc2wuanNcbiAqKiBtb2R1bGUgaWQgPSAyN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3VuaXQgPSByZXF1aXJlKCcuL3VuaXQnKTtcblxudmFyIF91bml0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3VuaXQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIHVuaXQ6ICdweCcsXG4gICAgICAgIHR5cGU6IF91bml0Mi5kZWZhdWx0XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OXdlQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN08wRkJRVUU3T3pzN096dHJRa0ZGWlR0QlFVTllMR3RDUVVGak8wRkJRMVlzWTBGQlRTeEpRVUZPTzBGQlEwRXNORUpCUmxVN1MwRkJaQ0lzSW1acGJHVWlPaUp3ZUM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRDOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2RXNXBkRlI1Y0dVZ1puSnZiU0FuTGk5MWJtbDBKenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnZTF4dUlDQWdJR1JsWm1GMWJIUlFjbTl3Y3pvZ2UxeHVJQ0FnSUNBZ0lDQjFibWwwT2lBbmNIZ25MRnh1SUNBZ0lDQWdJQ0IwZVhCbE9pQjFibWwwVkhsd1pWeHVJQ0FnSUgxY2JuMDdJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9weC5qc1xuICoqIG1vZHVsZSBpZCA9IDI4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxudmFyIF9kaWN0aW9uYXJ5ID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kaWN0aW9uYXJ5Jyk7XG5cbnZhciBfZGVmYXVsdFByb3BzID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kZWZhdWx0LXByb3BzJyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgUmVkOiBfZGVmYXVsdFByb3BzLnJnYixcbiAgICAgICAgR3JlZW46IF9kZWZhdWx0UHJvcHMucmdiLFxuICAgICAgICBCbHVlOiBfZGVmYXVsdFByb3BzLnJnYixcbiAgICAgICAgQWxwaGE6IF9kZWZhdWx0UHJvcHMub3BhY2l0eVxuICAgIH0sXG5cbiAgICB0ZXN0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlICYmIHZhbHVlLmluZGV4T2YoJ3JnYicpID4gLTE7XG4gICAgfSxcblxuICAgIHNwbGl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMuZ2V0Q29sb3JWYWx1ZXMpKHZhbHVlLCBfZGljdGlvbmFyeS5yZ2IpO1xuICAgIH0sXG5cbiAgICBjb21iaW5lOiBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzLmNyZWF0ZUZ1bmN0aW9uU3RyaW5nKSgoMCwgX3V0aWxzLmNyZWF0ZURlbGltaXRlZCkodmFsdWVzLCBfZGljdGlvbmFyeS5yZ2IsICcsICcsIDIpLCAncmdiYScpO1xuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTl5WjJJdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenRCUVVGQk96dEJRVU5CT3p0QlFVTkJPenRyUWtGRlpUdEJRVU5ZTEd0Q1FVRmpPMEZCUTFZc09FSkJSRlU3UVVGRlZpeG5RMEZHVlR0QlFVZFdMQ3RDUVVoVk8wRkJTVllzYjBOQlNsVTdTMEZCWkRzN1FVRlBRU3hWUVVGTkxGVkJRVU1zUzBGQlJEdGxRVUZaTEZOQlFWTXNUVUZCVFN4UFFVRk9MRU5CUVdNc1MwRkJaQ3hKUVVGMVFpeERRVUZETEVOQlFVUTdTMEZCTlVNN08wRkJSVTRzVjBGQlR5eFZRVUZETEV0QlFVUTdaVUZCVnl3eVFrRkJaU3hMUVVGbU8wdEJRVmc3TzBGQlJWQXNZVUZCVXl4VlFVRkRMRTFCUVVRN1pVRkJXU3hwUTBGQmNVSXNORUpCUVdkQ0xFMUJRV2hDTEcxQ1FVRnJReXhKUVVGc1F5eEZRVUYzUXl4RFFVRjRReXhEUVVGeVFpeEZRVUZwUlN4TlFVRnFSVHRMUVVGYUlpd2labWxzWlNJNkluSm5ZaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZXlCamNtVmhkR1ZFWld4cGJXbDBaV1FzSUdOeVpXRjBaVVoxYm1OMGFXOXVVM1J5YVc1bkxDQm5aWFJEYjJ4dmNsWmhiSFZsY3lCOUlHWnliMjBnSnk0dUwybHVZeTkxZEdsc2N5YzdYRzVwYlhCdmNuUWdleUJ5WjJJZ1lYTWdjbWRpVkdWeWJYTWdmU0JtY205dElDY3VMM05sZEhScGJtZHpMMlJwWTNScGIyNWhjbmtuTzF4dWFXMXdiM0owSUhzZ2NtZGlJR0Z6SUdSbFptRjFiSFJTUjBJc0lHOXdZV05wZEhrZ1lYTWdaR1ZtWVhWc2RFOXdZV05wZEhrZ2ZTQm1jbTl0SUNjdUwzTmxkSFJwYm1kekwyUmxabUYxYkhRdGNISnZjSE1uTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCN1hHNGdJQ0FnWkdWbVlYVnNkRkJ5YjNCek9pQjdYRzRnSUNBZ0lDQWdJRkpsWkRvZ1pHVm1ZWFZzZEZKSFFpeGNiaUFnSUNBZ0lDQWdSM0psWlc0NklHUmxabUYxYkhSU1IwSXNYRzRnSUNBZ0lDQWdJRUpzZFdVNklHUmxabUYxYkhSU1IwSXNYRzRnSUNBZ0lDQWdJRUZzY0doaE9pQmtaV1poZFd4MFQzQmhZMmwwZVZ4dUlDQWdJSDBzWEc1Y2JpQWdJQ0IwWlhOME9pQW9kbUZzZFdVcElEMCtJQ2gyWVd4MVpTQW1KaUIyWVd4MVpTNXBibVJsZUU5bUtDZHlaMkluS1NBK0lDMHhLU3hjYmx4dUlDQWdJSE53YkdsME9pQW9kbUZzZFdVcElEMCtJR2RsZEVOdmJHOXlWbUZzZFdWektIWmhiSFZsTENCeVoySlVaWEp0Y3lrc1hHNWNiaUFnSUNCamIyMWlhVzVsT2lBb2RtRnNkV1Z6S1NBOVBpQmpjbVZoZEdWR2RXNWpkR2x2YmxOMGNtbHVaeWhqY21WaGRHVkVaV3hwYldsMFpXUW9kbUZzZFdWekxDQnlaMkpVWlhKdGN5d2dKeXdnSnl3Z01pa3NJQ2R5WjJKaEp5bGNibjA3SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvcmdiLmpzXG4gKiogbW9kdWxlIGlkID0gMjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBjdXJyZW50OiAxXG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OXpZMkZzWlM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdhMEpCUVdVN1FVRkRXQ3hyUWtGQll6dEJRVU5XTEdsQ1FVRlRMRU5CUVZRN1MwRkVTaUlzSW1acGJHVWlPaUp6WTJGc1pTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpsZUhCdmNuUWdaR1ZtWVhWc2RDQjdYRzRnSUNBZ1pHVm1ZWFZzZEZCeWIzQnpPaUI3WEc0Z0lDQWdJQ0FnSUdOMWNuSmxiblE2SURGY2JpQWdJQ0I5WEc1OU95SmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9zY2FsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY29sb3IgPSByZXF1aXJlKCcuL2NvbG9yJyk7XG5cbnZhciBfY29sb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29sb3IpO1xuXG52YXIgX3B4ID0gcmVxdWlyZSgnLi9weCcpO1xuXG52YXIgX2RpY3Rpb25hcnkgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RpY3Rpb25hcnknKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgc2hhZG93V2l0aG91dENvbG9yVGVybXMgPSBfZGljdGlvbmFyeS5zaGFkb3cuc2xpY2UoMCwgNCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IF9leHRlbmRzKHt9LCBfY29sb3IyLmRlZmF1bHQuZGVmYXVsdFByb3BzLCB7XG4gICAgICAgIFg6IF9weC5kZWZhdWx0UHJvcHMsXG4gICAgICAgIFk6IF9weC5kZWZhdWx0UHJvcHMsXG4gICAgICAgIFJhZGl1czogX3B4LmRlZmF1bHRQcm9wcyxcbiAgICAgICAgU3ByZWFkOiBfcHguZGVmYXVsdFByb3BzXG4gICAgfSksXG5cbiAgICBzcGxpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBiaXRzID0gKDAsIF91dGlscy5zcGxpdFNwYWNlRGVsaW1pdGVkKSh2YWx1ZSk7XG4gICAgICAgIHZhciBoYXNSZWFjaGVkQ29sb3IgPSBmYWxzZTtcbiAgICAgICAgdmFyIGNvbG9yUHJvcCA9ICcnO1xuICAgICAgICB2YXIgc3BsaXRWYWx1ZSA9IHt9O1xuXG4gICAgICAgIGJpdHMuZm9yRWFjaChmdW5jdGlvbiAoYml0LCBpKSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSd2ZSByZWFjaGVkIHRoZSBjb2xvciBwcm9wcywgYXBwZW5kIHRvIGNvbG9yIHN0cmluZ1xuICAgICAgICAgICAgaWYgKGhhc1JlYWNoZWRDb2xvciB8fCBfY29sb3IyLmRlZmF1bHQudGVzdChiaXQpKSB7XG4gICAgICAgICAgICAgICAgaGFzUmVhY2hlZENvbG9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb2xvclByb3AgKz0gYml0O1xuXG4gICAgICAgICAgICAgICAgLy8gRWxzZSBwcm9jZXNzIHNoYWRvdyB2YWx1ZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3BsaXRWYWx1ZVtfZGljdGlvbmFyeS5zaGFkb3dbaV1dID0gYml0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIHNwbGl0Q29sb3JQcm9wcyA9IF9jb2xvcjIuZGVmYXVsdC5zcGxpdChjb2xvclByb3ApO1xuXG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3BsaXRWYWx1ZSwgeyBzcGxpdENvbG9yUHJvcHM6IHNwbGl0Q29sb3JQcm9wcyB9KTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICByZXR1cm4gKDAsIF91dGlscy5jcmVhdGVEZWxpbWl0ZWQpKHZhbHVlcywgc2hhZG93V2l0aG91dENvbG9yVGVybXMsICcgJykgKyBfY29sb3IyLmRlZmF1bHQuY29tYmluZSh2YWx1ZXMpO1xuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTl6YUdGa2IzY3Vhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN08wRkJRVUU3T3pzN1FVRkRRVHM3UVVGRFFUczdRVUZEUVRzN096dEJRVVZCTEVsQlFVMHNNRUpCUVRCQ0xHMUNRVUZaTEV0QlFWb3NRMEZCYTBJc1EwRkJiRUlzUlVGQmNVSXNRMEZCY2tJc1EwRkJNVUk3TzJ0Q1FVVlRPMEZCUTFnc0swSkJRMDhzWjBKQlFVMHNXVUZCVGp0QlFVTklPMEZCUTBFN1FVRkRRVHRCUVVOQk8wMUJURW83TzBGQlVVRXNWMEZCVHl4VlFVRkRMRXRCUVVRc1JVRkJWenRCUVVOa0xGbEJRVTBzVDBGQlR5eG5RMEZCYjBJc1MwRkJjRUlzUTBGQlVDeERRVVJSTzBGQlJXUXNXVUZCU1N4clFrRkJhMElzUzBGQmJFSXNRMEZHVlR0QlFVZGtMRmxCUVVrc1dVRkJXU3hGUVVGYUxFTkJTRlU3UVVGSlpDeFpRVUZKTEdGQlFXRXNSVUZCWWl4RFFVcFZPenRCUVUxa0xHRkJRVXNzVDBGQlRDeERRVUZoTEZWQlFVTXNSMEZCUkN4RlFVRk5MRU5CUVU0c1JVRkJXVHM3UVVGRmNrSXNaMEpCUVVrc2JVSkJRVzFDTEdkQ1FVRk5MRWxCUVU0c1EwRkJWeXhIUVVGWUxFTkJRVzVDTEVWQlFXOURPMEZCUTNCRExHdERRVUZyUWl4SlFVRnNRaXhEUVVSdlF6dEJRVVZ3UXl3MlFrRkJZU3hIUVVGaU96czdRVUZHYjBNc1lVRkJlRU1zVFVGTFR6dEJRVU5JTEN0Q1FVRlhMRzFDUVVGWkxFTkJRVm9zUTBGQldDeEpRVUUyUWl4SFFVRTNRaXhEUVVSSE8ybENRVXhRTzFOQlJsTXNRMEZCWWl4RFFVNWpPenRCUVd0Q1pDeFpRVUZOTEd0Q1FVRnJRaXhuUWtGQlRTeExRVUZPTEVOQlFWa3NVMEZCV2l4RFFVRnNRaXhEUVd4Q1VUczdRVUZ2UW1Rc05FSkJRVmtzWTBGQldTeHRRMEZCZUVJc1EwRndRbU03UzBGQldEczdRVUYxUWxBc1lVRkJVeXhWUVVGRExFMUJRVVE3WlVGQldTdzBRa0ZCWjBJc1RVRkJhRUlzUlVGQmQwSXNkVUpCUVhoQ0xFVkJRV2xFTEVkQlFXcEVMRWxCUVhkRUxHZENRVUZOTEU5QlFVNHNRMEZCWXl4TlFVRmtMRU5CUVhoRU8wdEJRVm9pTENKbWFXeGxJam9pYzJoaFpHOTNMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwTDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0JqYjJ4dmNpQm1jbTl0SUNjdUwyTnZiRzl5Snp0Y2JtbHRjRzl5ZENCN0lHUmxabUYxYkhSUWNtOXdjeUJoY3lCd2VFUmxabUYxYkhSUWNtOXdjeUI5SUdaeWIyMGdKeTR2Y0hnbk8xeHVhVzF3YjNKMElIc2djMmhoWkc5M0lHRnpJSE5vWVdSdmQxUmxjbTF6SUgwZ1puSnZiU0FuTGk5elpYUjBhVzVuY3k5a2FXTjBhVzl1WVhKNUp6dGNibWx0Y0c5eWRDQjdJSE53YkdsMFUzQmhZMlZFWld4cGJXbDBaV1FzSUdOeVpXRjBaVVJsYkdsdGFYUmxaQ0I5SUdaeWIyMGdKeTR1TDJsdVl5OTFkR2xzY3ljN1hHNWNibU52Ym5OMElITm9ZV1J2ZDFkcGRHaHZkWFJEYjJ4dmNsUmxjbTF6SUQwZ2MyaGhaRzkzVkdWeWJYTXVjMnhwWTJVb01Dd2dOQ2s3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUh0Y2JpQWdJQ0JrWldaaGRXeDBVSEp2Y0hNNklIdGNiaUFnSUNBZ0lDQWdMaTR1WTI5c2IzSXVaR1ZtWVhWc2RGQnliM0J6TEZ4dUlDQWdJQ0FnSUNCWU9pQndlRVJsWm1GMWJIUlFjbTl3Y3l4Y2JpQWdJQ0FnSUNBZ1dUb2djSGhFWldaaGRXeDBVSEp2Y0hNc1hHNGdJQ0FnSUNBZ0lGSmhaR2wxY3pvZ2NIaEVaV1poZFd4MFVISnZjSE1zWEc0Z0lDQWdJQ0FnSUZOd2NtVmhaRG9nY0hoRVpXWmhkV3gwVUhKdmNITmNiaUFnSUNCOUxGeHVYRzRnSUNBZ2MzQnNhWFE2SUNoMllXeDFaU2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCaWFYUnpJRDBnYzNCc2FYUlRjR0ZqWlVSbGJHbHRhWFJsWkNoMllXeDFaU2s3WEc0Z0lDQWdJQ0FnSUd4bGRDQm9ZWE5TWldGamFHVmtRMjlzYjNJZ1BTQm1ZV3h6WlR0Y2JpQWdJQ0FnSUNBZ2JHVjBJR052Ykc5eVVISnZjQ0E5SUNjbk8xeHVJQ0FnSUNBZ0lDQnNaWFFnYzNCc2FYUldZV3gxWlNBOUlIdDlPMXh1WEc0Z0lDQWdJQ0FnSUdKcGRITXVabTl5UldGamFDZ29ZbWwwTENCcEtTQTlQaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJKWmlCM1pTZDJaU0J5WldGamFHVmtJSFJvWlNCamIyeHZjaUJ3Y205d2N5d2dZWEJ3Wlc1a0lIUnZJR052Ykc5eUlITjBjbWx1WjF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0doaGMxSmxZV05vWldSRGIyeHZjaUI4ZkNCamIyeHZjaTUwWlhOMEtHSnBkQ2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCb1lYTlNaV0ZqYUdWa1EyOXNiM0lnUFNCMGNuVmxPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR052Ykc5eVVISnZjQ0FyUFNCaWFYUTdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJRVZzYzJVZ2NISnZZMlZ6Y3lCemFHRmtiM2NnZG1Gc2RXVmNiaUFnSUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYzNCc2FYUldZV3gxWlZ0emFHRmtiM2RVWlhKdGMxdHBYVjBnUFNCaWFYUTdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMHBPMXh1WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJSE53YkdsMFEyOXNiM0pRY205d2N5QTlJR052Ykc5eUxuTndiR2wwS0dOdmJHOXlVSEp2Y0NrN1hHNWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIc2dMaTR1YzNCc2FYUldZV3gxWlN3Z2MzQnNhWFJEYjJ4dmNsQnliM0J6SUgwN1hHNGdJQ0FnZlN4Y2JseHVJQ0FnSUdOdmJXSnBibVU2SUNoMllXeDFaWE1wSUQwK0lHTnlaV0YwWlVSbGJHbHRhWFJsWkNoMllXeDFaWE1zSUhOb1lXUnZkMWRwZEdodmRYUkRiMnh2Y2xSbGNtMXpMQ0FuSUNjcElDc2dZMjlzYjNJdVkyOXRZbWx1WlNoMllXeDFaWE1wWEc1OU8xeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9zaGFkb3cuanNcbiAqKiBtb2R1bGUgaWQgPSAzMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICB0ZXN0OiBmdW5jdGlvbiAodW5wYXJzZWQpIHtcbiAgICAgICAgdmFyIF9maW5kVmFsdWVBbmRVbml0ID0gKDAsIF91dGlscy5maW5kVmFsdWVBbmRVbml0KSh1bnBhcnNlZCk7XG5cbiAgICAgICAgdmFyIHZhbHVlID0gX2ZpbmRWYWx1ZUFuZFVuaXQudmFsdWU7XG5cbiAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMuaXNOdW0pKHZhbHVlKSAmJiAhaXNOYU4odmFsdWUpID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH0sXG5cbiAgICBwYXJzZTogZnVuY3Rpb24gKHVucGFyc2VkLCBwYXJlbnQpIHtcbiAgICAgICAgdmFyIF9maW5kVmFsdWVBbmRVbml0MiA9ICgwLCBfdXRpbHMuZmluZFZhbHVlQW5kVW5pdCkodW5wYXJzZWQpO1xuXG4gICAgICAgIHZhciB2YWx1ZSA9IF9maW5kVmFsdWVBbmRVbml0Mi52YWx1ZTtcbiAgICAgICAgdmFyIHVuaXQgPSBfZmluZFZhbHVlQW5kVW5pdDIudW5pdDtcblxuXG4gICAgICAgIGlmICh1bml0ICYmIHVuaXQgIT09IHVuaXQpIHtcbiAgICAgICAgICAgIHBhcmVudC51bml0ID0gdW5pdDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9LFxuXG4gICAgc2VyaWFsaXplOiBmdW5jdGlvbiAocGFyc2VkLCBwYXJlbnQpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlZCArIChwYXJlbnQudW5pdCB8fCAnJyk7XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OTFibWwwTG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdRVUZCUVRzN2EwSkJSV1U3UVVGRFdDeFZRVUZOTEZWQlFWVXNVVUZCVml4RlFVRnZRanRuUTBGRFNpdzJRa0ZCYVVJc1VVRkJha0lzUlVGRVNUczdXVUZEWkN4blEwRkVZenM3UVVGRmRFSXNaVUZCVHl4cFFrRkJReXhEUVVGTkxFdEJRVTRzUzBGQlowSXNRMEZCUXl4TlFVRk5MRXRCUVU0c1EwRkJSQ3hIUVVGcFFpeEpRVUZzUXl4SFFVRjVReXhMUVVGNlF5eERRVVpsTzB0QlFYQkNPenRCUVV0T0xGZEJRVThzVlVGQlZTeFJRVUZXTEVWQlFXOUNMRTFCUVhCQ0xFVkJRVFJDTzJsRFFVTlFMRFpDUVVGcFFpeFJRVUZxUWl4RlFVUlBPenRaUVVOMlFpeHBRMEZFZFVJN1dVRkRhRUlzSzBKQlJHZENPenM3UVVGSEwwSXNXVUZCU1N4UlFVRlJMRk5CUVZNc1NVRkJWQ3hGUVVGbE8wRkJRM1pDTEcxQ1FVRlBMRWxCUVZBc1IwRkJZeXhKUVVGa0xFTkJSSFZDTzFOQlFUTkNPenRCUVVsQkxHVkJRVThzUzBGQlVDeERRVkFyUWp0TFFVRTFRanM3UVVGVlVDeGxRVUZYTEZWQlFVTXNUVUZCUkN4RlFVRlRMRTFCUVZRN1pVRkJiMElzVlVGQlZTeFBRVUZQTEVsQlFWQXNTVUZCWlN4RlFVRm1MRU5CUVZZN1MwRkJjRUlpTENKbWFXeGxJam9pZFc1cGRDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdleUJwYzA1MWJTd2dabWx1WkZaaGJIVmxRVzVrVlc1cGRDQjlJR1p5YjIwZ0p5NHVMMmx1WXk5MWRHbHNjeWM3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUh0Y2JpQWdJQ0IwWlhOME9pQm1kVzVqZEdsdmJpQW9kVzV3WVhKelpXUXBJSHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdleUIyWVd4MVpTQjlJRDBnWm1sdVpGWmhiSFZsUVc1a1ZXNXBkQ2gxYm5CaGNuTmxaQ2s3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUFvYVhOT2RXMG9kbUZzZFdVcElDWW1JQ0ZwYzA1aFRpaDJZV3gxWlNrcElEOGdkSEoxWlNBNklHWmhiSE5sTzF4dUlDQWdJSDBzWEc1Y2JpQWdJQ0J3WVhKelpUb2dablZ1WTNScGIyNGdLSFZ1Y0dGeWMyVmtMQ0J3WVhKbGJuUXBJSHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdleUIyWVd4MVpTd2dkVzVwZENCOUlEMGdabWx1WkZaaGJIVmxRVzVrVlc1cGRDaDFibkJoY25ObFpDazdYRzVjYmlBZ0lDQWdJQ0FnYVdZZ0tIVnVhWFFnSmlZZ2RXNXBkQ0FoUFQwZ2RXNXBkQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjR0Z5Wlc1MExuVnVhWFFnUFNCMWJtbDBPMXh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhaaGJIVmxPMXh1SUNBZ0lIMHNYRzVjYmlBZ0lDQnpaWEpwWVd4cGVtVTZJQ2h3WVhKelpXUXNJSEJoY21WdWRDa2dQVDRnY0dGeWMyVmtJQ3NnS0hCaGNtVnVkQzUxYm1sMElIeDhJQ2NuS1Z4dWZUdGNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvdW5pdC5qc1xuICoqIG1vZHVsZSBpZCA9IDMyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmNoYWluID0gZXhwb3J0cy5jaXJjdWxhck1vdGlvbiA9IGV4cG9ydHMuY3JlYXRlTWFwcGVyID0gdW5kZWZpbmVkO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpO1xuXG52YXIgY3JlYXRlTWFwcGVyID0gZXhwb3J0cy5jcmVhdGVNYXBwZXIgPSBmdW5jdGlvbiAoaW5wdXQsIG91dHB1dCkge1xuICAgIHZhciBtYXBMZW5ndGggPSBpbnB1dC5sZW5ndGg7XG4gICAgdmFyIGZpbmFsSW5kZXggPSBtYXBMZW5ndGggLSAxO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAvLyBJZiB2YWx1ZSBvdXRzaWRlIG1pbmltdW0gaW5wdXQgcmFuZ2UsIHF1aWNrbHkgcmV0dXJuXG4gICAgICAgIGlmICh2YWx1ZSA8PSBpbnB1dFswXSkge1xuICAgICAgICAgICAgcmV0dXJuIG91dHB1dFswXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHZhbHVlIG91dHNpZGUgbWF4aW11bSBpbnB1dCByYW5nZSwgcXVpY2tseSByZXR1cm5cbiAgICAgICAgaWYgKHZhbHVlID49IGlucHV0W2ZpbmFsSW5kZXhdKSB7XG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0W2ZpbmFsSW5kZXhdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgd2l0aGluIG92ZXJhbGwgaW5wdXQgcmFuZ2UsIGZpbmQgc3BlY2lmaWMgcmFuZ2VcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBtYXBMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHZhbHVlIDwgaW5wdXRbaV0gfHwgaSA9PT0gZmluYWxJbmRleCkge1xuICAgICAgICAgICAgICAgIHZhciBwcm9ncmVzc0luUmFuZ2UgPSAoMCwgX2NhbGMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUpKHZhbHVlLCBpbnB1dFtpIC0gMV0sIGlucHV0W2ldKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKDAsIF9jYWxjLmdldFZhbHVlRnJvbVByb2dyZXNzKShwcm9ncmVzc0luUmFuZ2UsIG91dHB1dFtpIC0gMV0sIG91dHB1dFtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xufTtcblxudmFyIGNpcmN1bGFyTW90aW9uID0gZXhwb3J0cy5jaXJjdWxhck1vdGlvbiA9IGZ1bmN0aW9uICh2LCBrZXksIF9yZWYpIHtcbiAgICB2YXIgdmFsdWVzID0gX3JlZi52YWx1ZXM7XG5cbiAgICB2YXIgb3JpZ2luWCA9IHZhbHVlcy5vcmlnaW5YID8gdmFsdWVzLm9yaWdpblguY3VycmVudCA6IDA7XG4gICAgdmFyIG9yaWdpblkgPSB2YWx1ZXMub3JpZ2luWSA/IHZhbHVlcy5vcmlnaW5ZLmN1cnJlbnQgOiAwO1xuXG4gICAgcmV0dXJuICgwLCBfY2FsYy5wb2ludEZyb21BbmdsZUFuZERpc3RhbmNlKSh7XG4gICAgICAgIHg6IG9yaWdpblgsXG4gICAgICAgIHk6IG9yaWdpbllcbiAgICB9LCB2YWx1ZXMuYW5nbGUuY3VycmVudCwgdmFsdWVzLmRpc3RhbmNlLmN1cnJlbnQpW2tleV07XG59O1xuXG4vKlxuICAgIENvbWJpbmUgdHJhbnNmb3JtZXJzIGludG8gb25lIGZ1bmN0aW9uIHRoYXQgY2FsbHMgZXZlcnlcbiAgICB0cmFuc2Zvcm1lciBpbiB0aGUgYXJyYXkgYW5kIHJldHVybnMgdGhlIHJlc3VsdFxuXG4gICAgQHBhcmFtIFthcnJheV1cbiAgICBAcmV0dXJuIFtmdW5jdGlvbl1cbiovXG52YXIgY2hhaW4gPSBleHBvcnRzLmNoYWluID0gZnVuY3Rpb24gKHRyYW5zZm9ybWVycykge1xuICAgIHZhciBudW1UcmFuc2Zvcm1lcnMgPSB0cmFuc2Zvcm1lcnMubGVuZ3RoO1xuICAgIHZhciBpID0gMDtcblxuICAgIC8qXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgICAgICBAcGFyYW0gW3N0cmluZ11cbiAgICAgICAgQHBhcmFtIFtBY3Rpb25dXG4gICAgICAgIEByZXR1cm4gW251bWJlcl1cbiAgICAqL1xuICAgIHJldHVybiBmdW5jdGlvbiAodiwga2V5LCBhKSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBudW1UcmFuc2Zvcm1lcnM7IGkrKykge1xuICAgICAgICAgICAgdiA9IHRyYW5zZm9ybWVyc1tpXSh2LCBrZXksIGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHY7XG4gICAgfTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12ZEhKaGJuTm1iM0p0WlhKekxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3TzBGQlFVRTdPMEZCUlU4c1NVRkJUU3h6UTBGQlpTeFZRVUZETEV0QlFVUXNSVUZCVVN4TlFVRlNMRVZCUVcxQ08wRkJRek5ETEZGQlFVMHNXVUZCV1N4TlFVRk5MRTFCUVU0c1EwRkVlVUk3UVVGRk0wTXNVVUZCVFN4aFFVRmhMRmxCUVZrc1EwRkJXaXhEUVVaM1FqczdRVUZKTTBNc1YwRkJUeXhWUVVGRExFdEJRVVFzUlVGQlZ6czdRVUZGWkN4WlFVRkpMRk5CUVZNc1RVRkJUU3hEUVVGT0xFTkJRVlFzUlVGQmJVSTdRVUZEYmtJc2JVSkJRVThzVDBGQlR5eERRVUZRTEVOQlFWQXNRMEZFYlVJN1UwRkJka0k3T3p0QlFVWmpMRmxCVDFZc1UwRkJVeXhOUVVGTkxGVkJRVTRzUTBGQlZDeEZRVUUwUWp0QlFVTTFRaXh0UWtGQlR5eFBRVUZQTEZWQlFWQXNRMEZCVUN4RFFVUTBRanRUUVVGb1F6czdPMEZCVUdNc1lVRlpWQ3hKUVVGSkxFbEJRVWtzUTBGQlNpeEZRVUZQTEVsQlFVa3NVMEZCU2l4RlFVRmxMRWRCUVM5Q0xFVkJRVzlETzBGQlEyaERMR2RDUVVGSkxGRkJRVkVzVFVGQlRTeERRVUZPTEVOQlFWSXNTVUZCYjBJc1RVRkJUU3hWUVVGT0xFVkJRV3RDTzBGQlEzUkRMRzlDUVVGTkxHdENRVUZyUWl4blEwRkJjVUlzUzBGQmNrSXNSVUZCTkVJc1RVRkJUU3hKUVVGSkxFTkJRVW9zUTBGQmJFTXNSVUZCTUVNc1RVRkJUU3hEUVVGT0xFTkJRVEZETEVOQlFXeENMRU5CUkdkRE8wRkJSWFJETEhWQ1FVRlBMR2REUVVGeFFpeGxRVUZ5UWl4RlFVRnpReXhQUVVGUExFbEJRVWtzUTBGQlNpeERRVUUzUXl4RlFVRnhSQ3hQUVVGUExFTkJRVkFzUTBGQmNrUXNRMEZCVUN4RFFVWnpRenRoUVVFeFF6dFRRVVJLTzB0QldrY3NRMEZLYjBNN1EwRkJia0k3TzBGQmVVSnlRaXhKUVVGTkxEQkRRVUZwUWl4VlFVRkRMRU5CUVVRc1JVRkJTU3hIUVVGS0xGRkJRWGRDTzFGQlFXSXNjVUpCUVdFN08wRkJRMnhFTEZGQlFVMHNWVUZCVlN4TlFVRkRMRU5CUVU4c1QwRkJVQ3hIUVVGclFpeFBRVUZQTEU5QlFWQXNRMEZCWlN4UFFVRm1MRWRCUVhsQ0xFTkJRVFZETEVOQlJHdERPMEZCUld4RUxGRkJRVTBzVlVGQlZTeE5RVUZETEVOQlFVOHNUMEZCVUN4SFFVRnJRaXhQUVVGUExFOUJRVkFzUTBGQlpTeFBRVUZtTEVkQlFYbENMRU5CUVRWRExFTkJSbXRET3p0QlFVbHNSQ3hYUVVGUExIRkRRVUV3UWp0QlFVTTNRaXhYUVVGSExFOUJRVWc3UVVGRFFTeFhRVUZITEU5QlFVZzdTMEZHUnl4RlFVZEtMRTlCUVU4c1MwRkJVQ3hEUVVGaExFOUJRV0lzUlVGQmMwSXNUMEZCVHl4UlFVRlFMRU5CUVdkQ0xFOUJRV2hDTEVOQlNHeENMRU5CUnpKRExFZEJTRE5ETEVOQlFWQXNRMEZLYTBRN1EwRkJlRUk3T3pzN096czdPenRCUVdsQ2RrSXNTVUZCVFN4M1FrRkJVU3hWUVVGRExGbEJRVVFzUlVGQmEwSTdRVUZEYmtNc1VVRkJUU3hyUWtGQmEwSXNZVUZCWVN4TlFVRmlMRU5CUkZjN1FVRkZia01zVVVGQlNTeEpRVUZKTEVOQlFVbzdPenM3T3pzN08wRkJSaXRDTEZkQlZUVkNMRlZCUVVNc1EwRkJSQ3hGUVVGSkxFZEJRVW9zUlVGQlV5eERRVUZVTEVWQlFXVTdRVUZEYkVJc1lVRkJTeXhKUVVGSkxFTkJRVW9zUlVGQlR5eEpRVUZKTEdWQlFVb3NSVUZCY1VJc1IwRkJha01zUlVGQmMwTTdRVUZEYkVNc1owSkJRVWtzWVVGQllTeERRVUZpTEVWQlFXZENMRU5CUVdoQ0xFVkJRVzFDTEVkQlFXNUNMRVZCUVhkQ0xFTkJRWGhDTEVOQlFVb3NRMEZFYTBNN1UwRkJkRU03TzBGQlNVRXNaVUZCVHl4RFFVRlFMRU5CVEd0Q08wdEJRV1lzUTBGV05FSTdRMEZCYkVJaUxDSm1hV3hsSWpvaWRISmhibk5tYjNKdFpYSnpMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwTDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3SUdkbGRGQnliMmR5WlhOelJuSnZiVlpoYkhWbExDQm5aWFJXWVd4MVpVWnliMjFRY205bmNtVnpjeXdnY0c5cGJuUkdjbTl0UVc1bmJHVkJibVJFYVhOMFlXNWpaU0I5SUdaeWIyMGdKeTR1TDJsdVl5OWpZV3hqSnp0Y2JseHVaWGh3YjNKMElHTnZibk4wSUdOeVpXRjBaVTFoY0hCbGNpQTlJQ2hwYm5CMWRDd2diM1YwY0hWMEtTQTlQaUI3WEc0Z0lDQWdZMjl1YzNRZ2JXRndUR1Z1WjNSb0lEMGdhVzV3ZFhRdWJHVnVaM1JvTzF4dUlDQWdJR052Ym5OMElHWnBibUZzU1c1a1pYZ2dQU0J0WVhCTVpXNW5kR2dnTFNBeE8xeHVYRzRnSUNBZ2NtVjBkWEp1SUNoMllXeDFaU2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQXZMeUJKWmlCMllXeDFaU0J2ZFhSemFXUmxJRzFwYm1sdGRXMGdhVzV3ZFhRZ2NtRnVaMlVzSUhGMWFXTnJiSGtnY21WMGRYSnVYRzRnSUNBZ0lDQWdJR2xtSUNoMllXeDFaU0E4UFNCcGJuQjFkRnN3WFNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJRzkxZEhCMWRGc3dYVHRjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDOHZJRWxtSUhaaGJIVmxJRzkxZEhOcFpHVWdiV0Y0YVcxMWJTQnBibkIxZENCeVlXNW5aU3dnY1hWcFkydHNlU0J5WlhSMWNtNWNiaUFnSUNBZ0lDQWdhV1lnS0haaGJIVmxJRDQ5SUdsdWNIVjBXMlpwYm1Gc1NXNWtaWGhkS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdiM1YwY0hWMFcyWnBibUZzU1c1a1pYaGRPMXh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0x5OGdTV1lnZDJsMGFHbHVJRzkyWlhKaGJHd2dhVzV3ZFhRZ2NtRnVaMlVzSUdacGJtUWdjM0JsWTJsbWFXTWdjbUZ1WjJWY2JpQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREU3SUdrZ1BDQnRZWEJNWlc1bmRHZzdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIWmhiSFZsSUR3Z2FXNXdkWFJiYVYwZ2ZId2dhU0E5UFQwZ1ptbHVZV3hKYm1SbGVDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElIQnliMmR5WlhOelNXNVNZVzVuWlNBOUlHZGxkRkJ5YjJkeVpYTnpSbkp2YlZaaGJIVmxLSFpoYkhWbExDQnBibkIxZEZ0cElDMGdNVjBzSUdsdWNIVjBXMmxkS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnWjJWMFZtRnNkV1ZHY205dFVISnZaM0psYzNNb2NISnZaM0psYzNOSmJsSmhibWRsTENCdmRYUndkWFJiYVNBdElERmRMQ0J2ZFhSd2RYUmJhVjBwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVHRjYm4wN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCamFYSmpkV3hoY2sxdmRHbHZiaUE5SUNoMkxDQnJaWGtzSUhzZ2RtRnNkV1Z6SUgwcElEMCtJSHRjYmlBZ0lDQmpiMjV6ZENCdmNtbG5hVzVZSUQwZ0tIWmhiSFZsY3k1dmNtbG5hVzVZS1NBL0lIWmhiSFZsY3k1dmNtbG5hVzVZTG1OMWNuSmxiblFnT2lBd08xeHVJQ0FnSUdOdmJuTjBJRzl5YVdkcGJsa2dQU0FvZG1Gc2RXVnpMbTl5YVdkcGJsa3BJRDhnZG1Gc2RXVnpMbTl5YVdkcGJsa3VZM1Z5Y21WdWRDQTZJREE3WEc1Y2JpQWdJQ0J5WlhSMWNtNGdjRzlwYm5SR2NtOXRRVzVuYkdWQmJtUkVhWE4wWVc1alpTaDdYRzRnSUNBZ0lDQWdJSGc2SUc5eWFXZHBibGdzWEc0Z0lDQWdJQ0FnSUhrNklHOXlhV2RwYmxrZ1hHNGdJQ0FnZlN3Z2RtRnNkV1Z6TG1GdVoyeGxMbU4xY25KbGJuUXNJSFpoYkhWbGN5NWthWE4wWVc1alpTNWpkWEp5Wlc1MEtWdHJaWGxkTzF4dWZUdGNibHh1THlwY2JpQWdJQ0JEYjIxaWFXNWxJSFJ5WVc1elptOXliV1Z5Y3lCcGJuUnZJRzl1WlNCbWRXNWpkR2x2YmlCMGFHRjBJR05oYkd4eklHVjJaWEo1WEc0Z0lDQWdkSEpoYm5ObWIzSnRaWElnYVc0Z2RHaGxJR0Z5Y21GNUlHRnVaQ0J5WlhSMWNtNXpJSFJvWlNCeVpYTjFiSFJjYmx4dUlDQWdJRUJ3WVhKaGJTQmJZWEp5WVhsZFhHNGdJQ0FnUUhKbGRIVnliaUJiWm5WdVkzUnBiMjVkWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdOb1lXbHVJRDBnS0hSeVlXNXpabTl5YldWeWN5a2dQVDRnZTF4dUlDQWdJR052Ym5OMElHNTFiVlJ5WVc1elptOXliV1Z5Y3lBOUlIUnlZVzV6Wm05eWJXVnljeTVzWlc1bmRHZzdYRzRnSUNBZ2JHVjBJR2tnUFNBd08xeHVYRzRnSUNBZ0x5cGNiaUFnSUNBZ0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZFhHNGdJQ0FnSUNBZ0lFQndZWEpoYlNCYmMzUnlhVzVuWFZ4dUlDQWdJQ0FnSUNCQWNHRnlZVzBnVzBGamRHbHZibDFjYmlBZ0lDQWdJQ0FnUUhKbGRIVnliaUJiYm5WdFltVnlYVnh1SUNBZ0lDb3ZYRzRnSUNBZ2NtVjBkWEp1SUNoMkxDQnJaWGtzSUdFcElEMCtJSHRjYmlBZ0lDQWdJQ0FnWm05eUlDaHBJRDBnTURzZ2FTQThJRzUxYlZSeVlXNXpabTl5YldWeWN6c2dhU3NyS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IySUQwZ2RISmhibk5tYjNKdFpYSnpXMmxkS0hZc0lHdGxlU3dnWVNrN1hHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkanRjYmlBZ0lDQjlPMXh1ZlRzaVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy90cmFuc2Zvcm1lcnMuanNcbiAqKiBtb2R1bGUgaWQgPSAzM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuLi8uLi9pbmMvY2FsYycpO1xuXG52YXIgQkxFTkRfQUNDVVJBQ1kgPSA2MDtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG91dEFjdGlvbiwgaW5BY3Rpb24sIGZsb3dWYWx1ZSwga2V5KSB7XG4gICAgdmFyIG91dFZhbHVlID0gb3V0QWN0aW9uLnZhbHVlc1trZXldO1xuXG4gICAgaWYgKG91dEFjdGlvbi5lbGFwc2VkID09PSB1bmRlZmluZWQgfHwgIW91dFZhbHVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgaW5WYWx1ZSA9IGluQWN0aW9uLnZhbHVlc1trZXldO1xuICAgIHZhciBvdXRUb3RhbER1cmF0aW9uID0gb3V0VmFsdWUuZGVsYXkgKyBvdXRWYWx1ZS5kdXJhdGlvbjtcbiAgICB2YXIgdGltZVVudGlsT3V0RW5kID0gTWF0aC5taW4ob3V0VG90YWxEdXJhdGlvbiAtIG91dEFjdGlvbi5lbGFwc2VkLCBpblZhbHVlLmRlbGF5ICsgaW5WYWx1ZS5kdXJhdGlvbik7XG4gICAgdmFyIGluUG9zaXRpb25BdE91dEVuZCA9ICgwLCBfY2FsYy5lYXNlKSgoMCwgX2NhbGMucmVzdHJpY3QpKCgwLCBfY2FsYy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSkodGltZVVudGlsT3V0RW5kLCAwLCBpblZhbHVlLmRlbGF5ICsgaW5WYWx1ZS5kdXJhdGlvbiksIDAsIDEpLCBpblZhbHVlLmZyb20sIGluVmFsdWUudG8sIGluVmFsdWUuZWFzZSk7XG4gICAgdmFyIGluQmlnZ2VyVGhhbk91dEF0U3RhcnQgPSBpblZhbHVlLmZyb20gPiBvdXRWYWx1ZS5jdXJyZW50O1xuICAgIHZhciBpbkJpZ2dlclRoYW5PdXRBdEVuZCA9IGluUG9zaXRpb25BdE91dEVuZCA+IG91dFZhbHVlLnRvO1xuICAgIHZhciB0d2VlbnNJbnRlcnNlY3QgPSBpbkJpZ2dlclRoYW5PdXRBdFN0YXJ0ICE9PSBpbkJpZ2dlclRoYW5PdXRBdEVuZDtcblxuICAgIHZhciBibGVuZEN1cnZlID0gW1swLCBvdXRWYWx1ZS5jdXJyZW50XSwgW3RpbWVVbnRpbE91dEVuZCwgaW5Qb3NpdGlvbkF0T3V0RW5kXV07XG5cbiAgICAvLyBJZiB0d2VlbnMgaW50ZXJzZWN0LCByZXNvbHZlIHR3ZWVucyBhdCBhIHJlc29sdXRpb24gdG8gZmluZCBleGFjdGx5IHdoZXJlXG4gICAgaWYgKHR3ZWVuc0ludGVyc2VjdCkge1xuICAgICAgICB2YXIgdGltZVN0ZXBUb1Rlc3QgPSB0aW1lVW50aWxPdXRFbmQgLyBCTEVORF9BQ0NVUkFDWTtcbiAgICAgICAgdmFyIGZvdW5kUDEgPSBmYWxzZTtcbiAgICAgICAgdmFyIGZvdW5kUDIgPSBmYWxzZTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8PSBCTEVORF9BQ0NVUkFDWTsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdGltZVN0ZXAgPSBpICogdGltZVN0ZXBUb1Rlc3Q7XG4gICAgICAgICAgICB2YXIgb3V0QXRUaW1lID0gKDAsIF9jYWxjLmVhc2UpKCgwLCBfY2FsYy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSkob3V0QWN0aW9uLmVsYXBzZWQgKyB0aW1lU3RlcCwgb3V0VmFsdWUuZGVsYXksIG91dFZhbHVlLmR1cmF0aW9uKSwgb3V0VmFsdWUuZnJvbSwgb3V0VmFsdWUudG8sIG91dFZhbHVlLmVhc2UpO1xuICAgICAgICAgICAgdmFyIGluQXRUaW1lID0gKDAsIF9jYWxjLmVhc2UpKCgwLCBfY2FsYy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSkoaW5BY3Rpb24uZWxhcHNlZCArIHRpbWVTdGVwLCBpblZhbHVlLmRlbGF5LCBpblZhbHVlLmR1cmF0aW9uKSwgaW5WYWx1ZS5mcm9tLCBpblZhbHVlLnRvLCBpblZhbHVlLmVhc2UpO1xuXG4gICAgICAgICAgICBpZiAoIWZvdW5kUDEgJiYgKGluQmlnZ2VyVGhhbk91dEF0U3RhcnQgJiYgaW5BdFRpbWUgPCBvdXRBdFRpbWUgfHwgIWluQmlnZ2VyVGhhbk91dEF0U3RhcnQgJiYgaW5BdFRpbWUgPiBvdXRBdFRpbWUpKSB7XG4gICAgICAgICAgICAgICAgYmxlbmRDdXJ2ZS5zcGxpY2UoMSwgMCwgW3RpbWVTdGVwLCBpbkF0VGltZV0pO1xuICAgICAgICAgICAgICAgIGZvdW5kUDEgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZm91bmRQMSAmJiAoaW5CaWdnZXJUaGFuT3V0QXRTdGFydCAmJiBpbkF0VGltZSA8IG91dFZhbHVlLmN1cnJlbnQgfHwgIWluQmlnZ2VyVGhhbk91dEF0U3RhcnQgJiYgaW5BdFRpbWUgPiBvdXRWYWx1ZS5jdXJyZW50KSkge1xuICAgICAgICAgICAgICAgIGJsZW5kQ3VydmVbMl0gPSBbdGltZVN0ZXAsIGluQXRUaW1lXTtcbiAgICAgICAgICAgICAgICBmb3VuZFAyID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGZvdW5kUDIpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChibGVuZEN1cnZlLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAvLyBQYXNzIGJldHdlZW4gdHdlZW5zIHVzaW5nIGluY29taW5nIGVhc2luZyBpZiBqdXN0IHR3byBwb2ludHNcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBibGVuZFByb2dyZXNzID0gKDAsIF9jYWxjLnJlc3RyaWN0KSgoMCwgX2NhbGMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUpKGluQWN0aW9uLmVsYXBzZWQsIGJsZW5kQ3VydmVbMF1bMF0sIGJsZW5kQ3VydmVbMV1bMF0pLCAwLCAxKTtcblxuICAgICAgICAgICAgaWYgKGJsZW5kUHJvZ3Jlc3MgPT09IDEpIHtcbiAgICAgICAgICAgICAgICBmbG93VmFsdWUuYmxlbmRDdXJ2ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuICgwLCBfY2FsYy5lYXNlKShibGVuZFByb2dyZXNzLCBvdXRWYWx1ZS5jdXJyZW50LCBpblZhbHVlLmN1cnJlbnQsIGluVmFsdWUuZWFzZSk7XG4gICAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gUGFzcyBiZXR3ZWVuIHR3ZWVucyB1c2luZyBiZXppZXIgaW50ZXJwb2xhdGlvblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGJsZW5kUHJvZ3Jlc3MgPSAoMCwgX2NhbGMucmVzdHJpY3QpKCgwLCBfY2FsYy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSkoaW5BY3Rpb24uZWxhcHNlZCwgYmxlbmRDdXJ2ZVswXVswXSwgYmxlbmRDdXJ2ZVsyXVswXSksIDAsIDEpO1xuICAgICAgICAgICAgdmFyIGFQID0gKDAsIF9jYWxjLmdldFZhbHVlRnJvbVByb2dyZXNzKShibGVuZFByb2dyZXNzLCBibGVuZEN1cnZlWzBdWzFdLCBibGVuZEN1cnZlWzFdWzFdKTtcbiAgICAgICAgICAgIHZhciBiUCA9ICgwLCBfY2FsYy5nZXRWYWx1ZUZyb21Qcm9ncmVzcykoYmxlbmRQcm9ncmVzcywgYmxlbmRDdXJ2ZVsxXVsxXSwgYmxlbmRDdXJ2ZVsyXVsxXSk7XG5cbiAgICAgICAgICAgIGlmIChibGVuZFByb2dyZXNzID09PSAxKSB7XG4gICAgICAgICAgICAgICAgZmxvd1ZhbHVlLmJsZW5kQ3VydmUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGluVmFsdWUuY3VycmVudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuICgwLCBfY2FsYy5nZXRWYWx1ZUZyb21Qcm9ncmVzcykoYmxlbmRQcm9ncmVzcywgYVAsIGJQKTtcbiAgICAgICAgfTtcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMlpzYjNjdloyVnVaWEpoZEdVdFlteGxibVF0WTNWeWRtVXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0QlFVRkJPenRCUVVWQkxFbEJRVTBzYVVKQlFXbENMRVZCUVdwQ096dHJRa0ZGVXl4VlFVRkRMRk5CUVVRc1JVRkJXU3hSUVVGYUxFVkJRWE5DTEZOQlFYUkNMRVZCUVdsRExFZEJRV3BETEVWQlFYbERPMEZCUTNCRUxGRkJRVTBzVjBGQlZ5eFZRVUZWTEUxQlFWWXNRMEZCYVVJc1IwRkJha0lzUTBGQldDeERRVVE0UXpzN1FVRkhjRVFzVVVGQlNTeFZRVUZWTEU5QlFWWXNTMEZCYzBJc1UwRkJkRUlzU1VGQmJVTXNRMEZCUXl4UlFVRkVMRVZCUVZjN1FVRkRPVU1zWlVGRU9FTTdTMEZCYkVRN08wRkJTVUVzVVVGQlRTeFZRVUZWTEZOQlFWTXNUVUZCVkN4RFFVRm5RaXhIUVVGb1FpeERRVUZXTEVOQlVEaERPMEZCVVhCRUxGRkJRVTBzYlVKQlFXMUNMRk5CUVZNc1MwRkJWQ3hIUVVGcFFpeFRRVUZUTEZGQlFWUXNRMEZTVlR0QlFWTndSQ3hSUVVGTkxHdENRVUZyUWl4TFFVRkxMRWRCUVV3c1EwRkJVeXh0UWtGQmJVSXNWVUZCVlN4UFFVRldMRVZCUVcxQ0xGRkJRVkVzUzBGQlVpeEhRVUZuUWl4UlFVRlJMRkZCUVZJc1EwRkJha1lzUTBGVU9FTTdRVUZWY0VRc1VVRkJUU3h4UWtGQmNVSXNaMEpCUVVzc2IwSkJRVk1zWjBOQlFYRkNMR1ZCUVhKQ0xFVkJRWE5ETEVOQlFYUkRMRVZCUVhsRExGRkJRVkVzUzBGQlVpeEhRVUZuUWl4UlFVRlJMRkZCUVZJc1EwRkJiRVVzUlVGQmNVWXNRMEZCY2tZc1JVRkJkMFlzUTBGQmVFWXNRMEZCVEN4RlFVRnBSeXhSUVVGUkxFbEJRVklzUlVGQll5eFJRVUZSTEVWQlFWSXNSVUZCV1N4UlFVRlJMRWxCUVZJc1EwRkJhRW9zUTBGV09FTTdRVUZYY0VRc1VVRkJUU3g1UWtGQmVVSXNVVUZCVVN4SlFVRlNMRWRCUVdVc1UwRkJVeXhQUVVGVUxFTkJXRTA3UVVGWmNFUXNVVUZCVFN4MVFrRkJkVUlzY1VKQlFYRkNMRk5CUVZNc1JVRkJWQ3hEUVZwRk8wRkJZWEJFTEZGQlFVMHNhMEpCUVd0Q0xESkNRVUV5UWl4dlFrRkJNMElzUTBGaU5FSTdPMEZCWlhCRUxGRkJRVTBzWVVGQllTeERRVUZETEVOQlFVTXNRMEZCUkN4RlFVRkpMRk5CUVZNc1QwRkJWQ3hEUVVGTUxFVkJRWGRDTEVOQlFVTXNaVUZCUkN4RlFVRnJRaXhyUWtGQmJFSXNRMEZCZUVJc1EwRkJZanM3TzBGQlpqaERMRkZCYTBKb1JDeGxRVUZLTEVWQlFYRkNPMEZCUTJwQ0xGbEJRVTBzYVVKQlFXbENMR3RDUVVGclFpeGpRVUZzUWl4RFFVUk9PMEZCUldwQ0xGbEJRVWtzVlVGQlZTeExRVUZXTEVOQlJtRTdRVUZIYWtJc1dVRkJTU3hWUVVGVkxFdEJRVllzUTBGSVlUczdRVUZMYWtJc1lVRkJTeXhKUVVGSkxFbEJRVWtzUTBGQlNpeEZRVUZQTEV0QlFVc3NZMEZCVEN4RlFVRnhRaXhIUVVGeVF5eEZRVUV3UXp0QlFVTjBReXhuUWtGQlRTeFhRVUZYTEVsQlFVa3NZMEZCU2l4RFFVUnhRanRCUVVWMFF5eG5Ra0ZCVFN4WlFVRlpMR2RDUVVGTExHZERRVUZ4UWl4VlFVRlZMRTlCUVZZc1IwRkJiMElzVVVGQmNFSXNSVUZCT0VJc1UwRkJVeXhMUVVGVUxFVkJRV2RDTEZOQlFWTXNVVUZCVkN4RFFVRjRSU3hGUVVFMFJpeFRRVUZUTEVsQlFWUXNSVUZCWlN4VFFVRlRMRVZCUVZRc1JVRkJZU3hUUVVGVExFbEJRVlFzUTBGQmNFa3NRMEZHWjBNN1FVRkhkRU1zWjBKQlFVMHNWMEZCVnl4blFrRkJTeXhuUTBGQmNVSXNVMEZCVXl4UFFVRlVMRWRCUVcxQ0xGRkJRVzVDTEVWQlFUWkNMRkZCUVZFc1MwRkJVaXhGUVVGbExGRkJRVkVzVVVGQlVpeERRVUYwUlN4RlFVRjVSaXhSUVVGUkxFbEJRVklzUlVGQll5eFJRVUZSTEVWQlFWSXNSVUZCV1N4UlFVRlJMRWxCUVZJc1EwRkJPVWdzUTBGSVowTTdPMEZCUzNSRExHZENRVUZKTEVOQlFVTXNUMEZCUkN4TFFVRmhMSE5DUVVGRExFbEJRVEJDTEZkQlFWY3NVMEZCV0N4SlFVRXdRaXhEUVVGRExITkNRVUZFTEVsQlFUSkNMRmRCUVZjc1UwRkJXQ3hEUVVFM1JpeEZRVUZ4U0R0QlFVTnlTQ3d5UWtGQlZ5eE5RVUZZTEVOQlFXdENMRU5CUVd4Q0xFVkJRWEZDTEVOQlFYSkNMRVZCUVhkQ0xFTkJRVU1zVVVGQlJDeEZRVUZYTEZGQlFWZ3NRMEZCZUVJc1JVRkVjVWc3UVVGRmNrZ3NNRUpCUVZVc1NVRkJWaXhEUVVaeFNEdGhRVUY2U0RzN1FVRkxRU3huUWtGQlNTeFpRVUZaTEhOQ1FVRkRMRWxCUVRCQ0xGZEJRVmNzVTBGQlV5eFBRVUZVTEVsQlFYTkNMRU5CUVVNc2MwSkJRVVFzU1VGQk1rSXNWMEZCVnl4VFFVRlRMRTlCUVZRc1EwRkJPVWNzUlVGQmEwazdRVUZEYkVrc01rSkJRVmNzUTBGQldDeEpRVUZuUWl4RFFVRkRMRkZCUVVRc1JVRkJWeXhSUVVGWUxFTkJRV2hDTEVOQlJHdEpPMEZCUld4SkxEQkNRVUZWTEVsQlFWWXNRMEZHYTBrN1lVRkJkRWs3TzBGQlMwRXNaMEpCUVVrc1QwRkJTaXhGUVVGaE8wRkJRMVFzYzBKQlJGTTdZVUZCWWp0VFFXWktPMHRCVEVvN08wRkJNRUpCTEZGQlFVa3NWMEZCVnl4TlFVRllMRXRCUVhOQ0xFTkJRWFJDTEVWQlFYbENPenRCUVVWNlFpeGxRVUZQTEZsQlFVMDdRVUZEVkN4blFrRkJUU3huUWtGQlowSXNiMEpCUVZNc1owTkJRWEZDTEZOQlFWTXNUMEZCVkN4RlFVRnJRaXhYUVVGWExFTkJRVmdzUlVGQll5eERRVUZrTEVOQlFYWkRMRVZCUVhsRUxGZEJRVmNzUTBGQldDeEZRVUZqTEVOQlFXUXNRMEZCZWtRc1EwRkJWQ3hGUVVGeFJpeERRVUZ5Uml4RlFVRjNSaXhEUVVGNFJpeERRVUZvUWl4RFFVUkhPenRCUVVkVUxHZENRVUZKTEd0Q1FVRnJRaXhEUVVGc1FpeEZRVUZ4UWp0QlFVTnlRaXd3UWtGQlZTeFZRVUZXTEVkQlFYVkNMRk5CUVhaQ0xFTkJSSEZDTzJGQlFYcENPenRCUVVsQkxHMUNRVUZQTEdkQ1FVRkxMR0ZCUVV3c1JVRkJiMElzVTBGQlV5eFBRVUZVTEVWQlFXdENMRkZCUVZFc1QwRkJVaXhGUVVGcFFpeFJRVUZSTEVsQlFWSXNRMEZCT1VRc1EwRlFVenRUUVVGT0xFTkJSbXRDTzB0QlFUZENMRTFCVjA4N08wRkJSVWdzWlVGQlR5eFpRVUZOTzBGQlExUXNaMEpCUVUwc1owSkJRV2RDTEc5Q1FVRlRMR2REUVVGeFFpeFRRVUZUTEU5QlFWUXNSVUZCYTBJc1YwRkJWeXhEUVVGWUxFVkJRV01zUTBGQlpDeERRVUYyUXl4RlFVRjVSQ3hYUVVGWExFTkJRVmdzUlVGQll5eERRVUZrTEVOQlFYcEVMRU5CUVZRc1JVRkJjVVlzUTBGQmNrWXNSVUZCZDBZc1EwRkJlRVlzUTBGQmFFSXNRMEZFUnp0QlFVVlVMR2RDUVVGTkxFdEJRVXNzWjBOQlFYRkNMR0ZCUVhKQ0xFVkJRVzlETEZkQlFWY3NRMEZCV0N4RlFVRmpMRU5CUVdRc1EwRkJjRU1zUlVGQmMwUXNWMEZCVnl4RFFVRllMRVZCUVdNc1EwRkJaQ3hEUVVGMFJDeERRVUZNTEVOQlJrYzdRVUZIVkN4blFrRkJUU3hMUVVGTExHZERRVUZ4UWl4aFFVRnlRaXhGUVVGdlF5eFhRVUZYTEVOQlFWZ3NSVUZCWXl4RFFVRmtMRU5CUVhCRExFVkJRWE5FTEZkQlFWY3NRMEZCV0N4RlFVRmpMRU5CUVdRc1EwRkJkRVFzUTBGQlRDeERRVWhIT3p0QlFVdFVMR2RDUVVGSkxHdENRVUZyUWl4RFFVRnNRaXhGUVVGeFFqdEJRVU55UWl3d1FrRkJWU3hWUVVGV0xFZEJRWFZDTEZOQlFYWkNMRU5CUkhGQ08wRkJSWEpDTEhWQ1FVRlBMRkZCUVZFc1QwRkJVaXhEUVVaak8yRkJRWHBDT3p0QlFVdEJMRzFDUVVGUExHZERRVUZ4UWl4aFFVRnlRaXhGUVVGdlF5eEZRVUZ3UXl4RlFVRjNReXhGUVVGNFF5eERRVUZRTEVOQlZsTTdVMEZCVGl4RFFVWktPMHRCV0ZBN1EwRTFRMWNpTENKbWFXeGxJam9pWjJWdVpYSmhkR1V0WW14bGJtUXRZM1Z5ZG1VdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUXZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElIc2daMlYwVUhKdlozSmxjM05HY205dFZtRnNkV1VzSUdkbGRGWmhiSFZsUm5KdmJWQnliMmR5WlhOekxDQmxZWE5sTENCeVpYTjBjbWxqZENCOUlHWnliMjBnSnk0dUx5NHVMMmx1WXk5allXeGpKenRjYmx4dVkyOXVjM1FnUWt4RlRrUmZRVU5EVlZKQlExa2dQU0EyTUR0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ0tHOTFkRUZqZEdsdmJpd2dhVzVCWTNScGIyNHNJR1pzYjNkV1lXeDFaU3dnYTJWNUtTQTlQaUI3WEc0Z0lDQWdZMjl1YzNRZ2IzVjBWbUZzZFdVZ1BTQnZkWFJCWTNScGIyNHVkbUZzZFdWelcydGxlVjA3WEc1Y2JpQWdJQ0JwWmlBb2IzVjBRV04wYVc5dUxtVnNZWEJ6WldRZ1BUMDlJSFZ1WkdWbWFXNWxaQ0I4ZkNBaGIzVjBWbUZzZFdVcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdU8xeHVJQ0FnSUgxY2JseHVJQ0FnSUdOdmJuTjBJR2x1Vm1Gc2RXVWdQU0JwYmtGamRHbHZiaTUyWVd4MVpYTmJhMlY1WFR0Y2JpQWdJQ0JqYjI1emRDQnZkWFJVYjNSaGJFUjFjbUYwYVc5dUlEMGdiM1YwVm1Gc2RXVXVaR1ZzWVhrZ0t5QnZkWFJXWVd4MVpTNWtkWEpoZEdsdmJqdGNiaUFnSUNCamIyNXpkQ0IwYVcxbFZXNTBhV3hQZFhSRmJtUWdQU0JOWVhSb0xtMXBiaWh2ZFhSVWIzUmhiRVIxY21GMGFXOXVJQzBnYjNWMFFXTjBhVzl1TG1Wc1lYQnpaV1FzSUdsdVZtRnNkV1V1WkdWc1lYa2dLeUJwYmxaaGJIVmxMbVIxY21GMGFXOXVLVHRjYmlBZ0lDQmpiMjV6ZENCcGJsQnZjMmwwYVc5dVFYUlBkWFJGYm1RZ1BTQmxZWE5sS0hKbGMzUnlhV04wS0dkbGRGQnliMmR5WlhOelJuSnZiVlpoYkhWbEtIUnBiV1ZWYm5ScGJFOTFkRVZ1WkN3Z01Dd2dhVzVXWVd4MVpTNWtaV3hoZVNBcklHbHVWbUZzZFdVdVpIVnlZWFJwYjI0cExDQXdMQ0F4S1N3Z2FXNVdZV3gxWlM1bWNtOXRMQ0JwYmxaaGJIVmxMblJ2TENCcGJsWmhiSFZsTG1WaGMyVXBPMXh1SUNBZ0lHTnZibk4wSUdsdVFtbG5aMlZ5VkdoaGJrOTFkRUYwVTNSaGNuUWdQU0JwYmxaaGJIVmxMbVp5YjIwZ1BpQnZkWFJXWVd4MVpTNWpkWEp5Wlc1ME8xeHVJQ0FnSUdOdmJuTjBJR2x1UW1sbloyVnlWR2hoYms5MWRFRjBSVzVrSUQwZ2FXNVFiM05wZEdsdmJrRjBUM1YwUlc1a0lENGdiM1YwVm1Gc2RXVXVkRzg3WEc0Z0lDQWdZMjl1YzNRZ2RIZGxaVzV6U1c1MFpYSnpaV04wSUQwZ2FXNUNhV2RuWlhKVWFHRnVUM1YwUVhSVGRHRnlkQ0FoUFQwZ2FXNUNhV2RuWlhKVWFHRnVUM1YwUVhSRmJtUTdYRzVjYmlBZ0lDQmpiMjV6ZENCaWJHVnVaRU4xY25abElEMGdXMXN3TENCdmRYUldZV3gxWlM1amRYSnlaVzUwWFN3Z1czUnBiV1ZWYm5ScGJFOTFkRVZ1WkN3Z2FXNVFiM05wZEdsdmJrRjBUM1YwUlc1a1hWMDdYRzVjYmlBZ0lDQXZMeUJKWmlCMGQyVmxibk1nYVc1MFpYSnpaV04wTENCeVpYTnZiSFpsSUhSM1pXVnVjeUJoZENCaElISmxjMjlzZFhScGIyNGdkRzhnWm1sdVpDQmxlR0ZqZEd4NUlIZG9aWEpsWEc0Z0lDQWdhV1lnS0hSM1pXVnVjMGx1ZEdWeWMyVmpkQ2tnZTF4dUlDQWdJQ0FnSUNCamIyNXpkQ0IwYVcxbFUzUmxjRlJ2VkdWemRDQTlJSFJwYldWVmJuUnBiRTkxZEVWdVpDQXZJRUpNUlU1RVgwRkRRMVZTUVVOWk8xeHVJQ0FnSUNBZ0lDQnNaWFFnWm05MWJtUlFNU0E5SUdaaGJITmxPMXh1SUNBZ0lDQWdJQ0JzWlhRZ1ptOTFibVJRTWlBOUlHWmhiSE5sTzF4dVhHNGdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEdzlJRUpNUlU1RVgwRkRRMVZTUVVOWk95QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElIUnBiV1ZUZEdWd0lEMGdhU0FxSUhScGJXVlRkR1Z3Vkc5VVpYTjBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnYjNWMFFYUlVhVzFsSUQwZ1pXRnpaU2huWlhSUWNtOW5jbVZ6YzBaeWIyMVdZV3gxWlNodmRYUkJZM1JwYjI0dVpXeGhjSE5sWkNBcklIUnBiV1ZUZEdWd0xDQnZkWFJXWVd4MVpTNWtaV3hoZVN3Z2IzVjBWbUZzZFdVdVpIVnlZWFJwYjI0cExDQnZkWFJXWVd4MVpTNW1jbTl0TENCdmRYUldZV3gxWlM1MGJ5d2diM1YwVm1Gc2RXVXVaV0Z6WlNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQnBia0YwVkdsdFpTQTlJR1ZoYzJVb1oyVjBVSEp2WjNKbGMzTkdjbTl0Vm1Gc2RXVW9hVzVCWTNScGIyNHVaV3hoY0hObFpDQXJJSFJwYldWVGRHVndMQ0JwYmxaaGJIVmxMbVJsYkdGNUxDQnBibFpoYkhWbExtUjFjbUYwYVc5dUtTd2dhVzVXWVd4MVpTNW1jbTl0TENCcGJsWmhiSFZsTG5SdkxDQnBibFpoYkhWbExtVmhjMlVwTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb0lXWnZkVzVrVURFZ0ppWWdLQ2hwYmtKcFoyZGxjbFJvWVc1UGRYUkJkRk4wWVhKMElDWW1JR2x1UVhSVWFXMWxJRHdnYjNWMFFYUlVhVzFsS1NCOGZDQW9JV2x1UW1sbloyVnlWR2hoYms5MWRFRjBVM1JoY25RZ0ppWWdhVzVCZEZScGJXVWdQaUJ2ZFhSQmRGUnBiV1VwS1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHSnNaVzVrUTNWeWRtVXVjM0JzYVdObEtERXNJREFzSUZ0MGFXMWxVM1JsY0N3Z2FXNUJkRlJwYldWZEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQm1iM1Z1WkZBeElEMGdkSEoxWlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0dadmRXNWtVREVnSmlZZ0tDaHBia0pwWjJkbGNsUm9ZVzVQZFhSQmRGTjBZWEowSUNZbUlHbHVRWFJVYVcxbElEd2diM1YwVm1Gc2RXVXVZM1Z5Y21WdWRDa2dmSHdnS0NGcGJrSnBaMmRsY2xSb1lXNVBkWFJCZEZOMFlYSjBJQ1ltSUdsdVFYUlVhVzFsSUQ0Z2IzVjBWbUZzZFdVdVkzVnljbVZ1ZENrcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZbXhsYm1SRGRYSjJaVnN5WFNBOUlGdDBhVzFsVTNSbGNDd2dhVzVCZEZScGJXVmRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1p2ZFc1a1VESWdQU0IwY25WbE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb1ptOTFibVJRTWlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHSnlaV0ZyTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVnh1WEc0Z0lDQWdhV1lnS0dKc1pXNWtRM1Z5ZG1VdWJHVnVaM1JvSUQwOVBTQXlLU0I3WEc0Z0lDQWdJQ0FnSUM4dklGQmhjM01nWW1WMGQyVmxiaUIwZDJWbGJuTWdkWE5wYm1jZ2FXNWpiMjFwYm1jZ1pXRnphVzVuSUdsbUlHcDFjM1FnZEhkdklIQnZhVzUwYzF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnS0NrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnWW14bGJtUlFjbTluY21WemN5QTlJSEpsYzNSeWFXTjBLR2RsZEZCeWIyZHlaWE56Um5KdmJWWmhiSFZsS0dsdVFXTjBhVzl1TG1Wc1lYQnpaV1FzSUdKc1pXNWtRM1Z5ZG1WYk1GMWJNRjBzSUdKc1pXNWtRM1Z5ZG1WYk1WMWJNRjBwTENBd0xDQXhLVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0dKc1pXNWtVSEp2WjNKbGMzTWdQVDA5SURFcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQm1iRzkzVm1Gc2RXVXVZbXhsYm1SRGRYSjJaU0E5SUhWdVpHVm1hVzVsWkR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHVmhjMlVvWW14bGJtUlFjbTluY21WemN5d2diM1YwVm1Gc2RXVXVZM1Z5Y21WdWRDd2dhVzVXWVd4MVpTNWpkWEp5Wlc1MExDQnBibFpoYkhWbExtVmhjMlVwTzF4dUlDQWdJQ0FnSUNCOU8xeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUM4dklGQmhjM01nWW1WMGQyVmxiaUIwZDJWbGJuTWdkWE5wYm1jZ1ltVjZhV1Z5SUdsdWRHVnljRzlzWVhScGIyNWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlDZ3BJRDArSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElHSnNaVzVrVUhKdlozSmxjM01nUFNCeVpYTjBjbWxqZENoblpYUlFjbTluY21WemMwWnliMjFXWVd4MVpTaHBia0ZqZEdsdmJpNWxiR0Z3YzJWa0xDQmliR1Z1WkVOMWNuWmxXekJkV3pCZExDQmliR1Z1WkVOMWNuWmxXekpkV3pCZEtTd2dNQ3dnTVNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQmhVQ0E5SUdkbGRGWmhiSFZsUm5KdmJWQnliMmR5WlhOektHSnNaVzVrVUhKdlozSmxjM01zSUdKc1pXNWtRM1Z5ZG1WYk1GMWJNVjBzSUdKc1pXNWtRM1Z5ZG1WYk1WMWJNVjBwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ1lsQWdQU0JuWlhSV1lXeDFaVVp5YjIxUWNtOW5jbVZ6Y3loaWJHVnVaRkJ5YjJkeVpYTnpMQ0JpYkdWdVpFTjFjblpsV3pGZFd6RmRMQ0JpYkdWdVpFTjFjblpsV3pKZFd6RmRLVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0dKc1pXNWtVSEp2WjNKbGMzTWdQVDA5SURFcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQm1iRzkzVm1Gc2RXVXVZbXhsYm1SRGRYSjJaU0E5SUhWdVpHVm1hVzVsWkR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnYVc1V1lXeDFaUzVqZFhKeVpXNTBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnWjJWMFZtRnNkV1ZHY205dFVISnZaM0psYzNNb1lteGxibVJRY205bmNtVnpjeXdnWVZBc0lHSlFLVHRjYmlBZ0lDQWdJQ0FnZlR0Y2JpQWdJQ0I5WEc1OU8xeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL2Zsb3cvZ2VuZXJhdGUtYmxlbmQtY3VydmUuanNcbiAqKiBtb2R1bGUgaWQgPSAzNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2NvbG9yID0gcmVxdWlyZSgnLi4vdmFsdWUtdHlwZXMvY29sb3InKTtcblxudmFyIF9jb2xvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb2xvcik7XG5cbnZhciBfY29tcGxleCA9IHJlcXVpcmUoJy4uL3ZhbHVlLXR5cGVzL2NvbXBsZXgnKTtcblxudmFyIF9jb21wbGV4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbXBsZXgpO1xuXG52YXIgX3VuaXQgPSByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy91bml0Jyk7XG5cbnZhciBfdW5pdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91bml0KTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG52YXIgX251bWVyaWNhbFZhbHVlcyA9IHJlcXVpcmUoJy4uL2luYy9udW1lcmljYWwtdmFsdWVzJyk7XG5cbnZhciBfbnVtZXJpY2FsVmFsdWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX251bWVyaWNhbFZhbHVlcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBOVU1fTlVNRVJJQ0FMX1ZBTFVFUyA9IF9udW1lcmljYWxWYWx1ZXMyLmRlZmF1bHQubGVuZ3RoO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IE5VTV9OVU1FUklDQUxfVkFMVUVTOyBpKyspIHtcbiAgICAgICAgdmFyIHZhbHVlUHJvcCA9IHZhbHVlW19udW1lcmljYWxWYWx1ZXMyLmRlZmF1bHRbaV1dO1xuICAgICAgICBpZiAoKDAsIF91dGlscy5pc1N0cmluZykodmFsdWVQcm9wKSkge1xuICAgICAgICAgICAgaWYgKF9jb2xvcjIuZGVmYXVsdC50ZXN0KHZhbHVlUHJvcCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbG9yMi5kZWZhdWx0O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChfY29tcGxleDIuZGVmYXVsdC50ZXN0KHZhbHVlUHJvcCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbXBsZXgyLmRlZmF1bHQ7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKF91bml0Mi5kZWZhdWx0LnRlc3QodmFsdWVQcm9wKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdW5pdDIuZGVmYXVsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTlrWlhSbFkzUXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0QlFVRkJPenM3TzBGQlEwRTdPenM3UVVGRFFUczdPenRCUVVOQk96dEJRVU5CT3pzN096czdRVUZGUVN4SlFVRk5MSFZDUVVGMVFpd3dRa0ZCYVVJc1RVRkJha0k3TzJ0Q1FVVmtMRlZCUVVNc1MwRkJSQ3hGUVVGWE8wRkJRM1JDTEZOQlFVc3NTVUZCU1N4SlFVRkpMRU5CUVVvc1JVRkJUeXhKUVVGSkxHOUNRVUZLTEVWQlFUQkNMRWRCUVRGRExFVkJRU3RETzBGQlF6TkRMRmxCUVUwc1dVRkJXU3hOUVVGTkxEQkNRVUZwUWl4RFFVRnFRaXhEUVVGT0xFTkJRVm9zUTBGRWNVTTdRVUZGTTBNc1dVRkJTU3h4UWtGQlV5eFRRVUZVTEVOQlFVb3NSVUZCZVVJN1FVRkRja0lzWjBKQlFVa3NaMEpCUVZVc1NVRkJWaXhEUVVGbExGTkJRV1lzUTBGQlNpeEZRVUVyUWp0QlFVTXpRaXgxUTBGRU1rSTdZVUZCTDBJc1RVRkZUeXhKUVVGSkxHdENRVUZaTEVsQlFWb3NRMEZCYVVJc1UwRkJha0lzUTBGQlNpeEZRVUZwUXp0QlFVTndReXg1UTBGRWIwTTdZVUZCYWtNc1RVRkZRU3hKUVVGSkxHVkJRVk1zU1VGQlZDeERRVUZqTEZOQlFXUXNRMEZCU2l4RlFVRTRRanRCUVVOcVF5eHpRMEZFYVVNN1lVRkJPVUk3VTBGTVdEdExRVVpLTzBOQlJGY2lMQ0ptYVd4bElqb2laR1YwWldOMExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQmpiMnh2Y2xSNWNHVWdabkp2YlNBbkxpNHZkbUZzZFdVdGRIbHdaWE12WTI5c2IzSW5PMXh1YVcxd2IzSjBJR052YlhCc1pYaFVlWEJsSUdaeWIyMGdKeTR1TDNaaGJIVmxMWFI1Y0dWekwyTnZiWEJzWlhnbk8xeHVhVzF3YjNKMElIVnVhWFJVZVhCbElHWnliMjBnSnk0dUwzWmhiSFZsTFhSNWNHVnpMM1Z1YVhRbk8xeHVhVzF3YjNKMElIc2dhWE5UZEhKcGJtY2dmU0JtY205dElDY3VMaTlwYm1NdmRYUnBiSE1uTzF4dWFXMXdiM0owSUU1VlRVVlNTVU5CVEY5V1FVeFZSVk1nWm5KdmJTQW5MaTR2YVc1akwyNTFiV1Z5YVdOaGJDMTJZV3gxWlhNbk8xeHVYRzVqYjI1emRDQk9WVTFmVGxWTlJWSkpRMEZNWDFaQlRGVkZVeUE5SUU1VlRVVlNTVU5CVEY5V1FVeFZSVk11YkdWdVozUm9PMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0FvZG1Gc2RXVXBJRDArSUh0Y2JpQWdJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUU1VlRWOU9WVTFGVWtsRFFVeGZWa0ZNVlVWVE95QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnZG1Gc2RXVlFjbTl3SUQwZ2RtRnNkV1ZiVGxWTlJWSkpRMEZNWDFaQlRGVkZVMXRwWFYwN1hHNGdJQ0FnSUNBZ0lHbG1JQ2hwYzFOMGNtbHVaeWgyWVd4MVpWQnliM0FwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb1kyOXNiM0pVZVhCbExuUmxjM1FvZG1Gc2RXVlFjbTl3S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCamIyeHZjbFI1Y0dVN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5SUdWc2MyVWdhV1lnS0dOdmJYQnNaWGhVZVhCbExuUmxjM1FvZG1Gc2RXVlFjbTl3S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCamIyMXdiR1Y0Vkhsd1pUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0JwWmlBb2RXNXBkRlI1Y0dVdWRHVnpkQ2gyWVd4MVpWQnliM0FwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUhWdWFYUlVlWEJsTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVnh1ZlRzaVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2RldGVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDM1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBbJ2N1cnJlbnQnLCAnZnJvbScsICd0bycsICd2ZWxvY2l0eSddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1NdmJuVnRaWEpwWTJGc0xYWmhiSFZsY3k1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdhMEpCUVdVc1EwRkJReXhUUVVGRUxFVkJRVmtzVFVGQldpeEZRVUZ2UWl4SlFVRndRaXhGUVVFd1FpeFZRVUV4UWlJc0ltWnBiR1VpT2lKdWRXMWxjbWxqWVd3dGRtRnNkV1Z6TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMEwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltVjRjRzl5ZENCa1pXWmhkV3gwSUZzblkzVnljbVZ1ZENjc0lDZG1jbTl0Snl3Z0ozUnZKeXdnSjNabGJHOWphWFI1SjEwN0lsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy9udW1lcmljYWwtdmFsdWVzLmpzXG4gKiogbW9kdWxlIGlkID0gMzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9vYmplY3RBZGFwdGVyID0gcmVxdWlyZSgnLi4vYWRhcHRlci9vYmplY3QtYWRhcHRlcicpO1xuXG52YXIgX29iamVjdEFkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JqZWN0QWRhcHRlcik7XG5cbnZhciBfY3NzQWRhcHRlciA9IHJlcXVpcmUoJy4uL2FkYXB0ZXIvY3NzLWFkYXB0ZXInKTtcblxudmFyIF9jc3NBZGFwdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Nzc0FkYXB0ZXIpO1xuXG52YXIgX3N2Z0FkYXB0ZXIgPSByZXF1aXJlKCcuLi9hZGFwdGVyL3N2Zy1hZGFwdGVyJyk7XG5cbnZhciBfc3ZnQWRhcHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdmdBZGFwdGVyKTtcblxudmFyIF9zdmdQYXRoQWRhcHRlciA9IHJlcXVpcmUoJy4uL2FkYXB0ZXIvc3ZnLXBhdGgtYWRhcHRlcicpO1xuXG52YXIgX3N2Z1BhdGhBZGFwdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N2Z1BhdGhBZGFwdGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICB2YXIgZGV0ZWN0ZWRBZGFwdGVyID0gX29iamVjdEFkYXB0ZXIyLmRlZmF1bHQ7XG5cbiAgICAvLyBJZiBIVE1MRWxlbWVudCBsb2FkIENTU1xuICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgZWxlbWVudC50YWdOYW1lID09PSAnc3ZnJykge1xuICAgICAgICBkZXRlY3RlZEFkYXB0ZXIgPSBfY3NzQWRhcHRlcjIuZGVmYXVsdDtcblxuICAgICAgICAvLyBPciBTVkdcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBTVkdFbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC50YWdOYW1lID09PSAncGF0aCcpIHtcbiAgICAgICAgICAgICAgICBkZXRlY3RlZEFkYXB0ZXIgPSBfc3ZnUGF0aEFkYXB0ZXIyLmRlZmF1bHQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRldGVjdGVkQWRhcHRlciA9IF9zdmdBZGFwdGVyMi5kZWZhdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICByZXR1cm4gZGV0ZWN0ZWRBZGFwdGVyO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJtTXZaR1YwWldOMExXRmtZWEIwWlhJdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenRCUVVGQk96czdPMEZCUTBFN096czdRVUZEUVRzN096dEJRVU5CT3pzN096czdhMEpCUldVc1ZVRkJReXhQUVVGRUxFVkJRV0U3UVVGRGVFSXNVVUZCU1N4NVEwRkJTanM3TzBGQlJIZENMRkZCU1hCQ0xHMUNRVUZ0UWl4WFFVRnVRaXhKUVVGclF5eFJRVUZSTEU5QlFWSXNTMEZCYjBJc1MwRkJjRUlzUlVGQk1rSTdRVUZETjBRN096dEJRVVEyUkN4TFFVRnFSU3hOUVVsUExFbEJRVWtzYlVKQlFXMUNMRlZCUVc1Q0xFVkJRU3RDTzBGQlEzUkRMR2RDUVVGSkxGRkJRVkVzVDBGQlVpeExRVUZ2UWl4TlFVRndRaXhGUVVFMFFqdEJRVU0xUWl3eVJFRkVORUk3WVVGQmFFTXNUVUZGVHp0QlFVTklMSFZFUVVSSE8yRkJSbEE3VTBGRVJ6czdRVUZSVUN4WFFVRlBMR1ZCUVZBc1EwRm9RbmRDTzBOQlFXSWlMQ0ptYVd4bElqb2laR1YwWldOMExXRmtZWEIwWlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUXZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElHOWlhbVZqZEVGa1lYQjBaWElnWm5KdmJTQW5MaTR2WVdSaGNIUmxjaTl2WW1wbFkzUXRZV1JoY0hSbGNpYzdYRzVwYlhCdmNuUWdZM056UVdSaGNIUmxjaUJtY205dElDY3VMaTloWkdGd2RHVnlMMk56Y3kxaFpHRndkR1Z5Snp0Y2JtbHRjRzl5ZENCemRtZEJaR0Z3ZEdWeUlHWnliMjBnSnk0dUwyRmtZWEIwWlhJdmMzWm5MV0ZrWVhCMFpYSW5PMXh1YVcxd2IzSjBJSE4yWjFCaGRHaEJaR0Z3ZEdWeUlHWnliMjBnSnk0dUwyRmtZWEIwWlhJdmMzWm5MWEJoZEdndFlXUmhjSFJsY2ljN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElDaGxiR1Z0Wlc1MEtTQTlQaUI3WEc0Z0lDQWdiR1YwSUdSbGRHVmpkR1ZrUVdSaGNIUmxjaUE5SUc5aWFtVmpkRUZrWVhCMFpYSTdYRzVjYmlBZ0lDQXZMeUJKWmlCSVZFMU1SV3hsYldWdWRDQnNiMkZrSUVOVFUxeHVJQ0FnSUdsbUlDaGxiR1Z0Wlc1MElHbHVjM1JoYm1ObGIyWWdTRlJOVEVWc1pXMWxiblFnZkh3Z1pXeGxiV1Z1ZEM1MFlXZE9ZVzFsSUQwOVBTQW5jM1puSnlrZ2UxeHVJQ0FnSUNBZ0lDQmtaWFJsWTNSbFpFRmtZWEIwWlhJZ1BTQmpjM05CWkdGd2RHVnlPMXh1WEc0Z0lDQWdMeThnVDNJZ1UxWkhYRzRnSUNBZ2ZTQmxiSE5sSUdsbUlDaGxiR1Z0Wlc1MElHbHVjM1JoYm1ObGIyWWdVMVpIUld4bGJXVnVkQ2tnZTF4dUlDQWdJQ0FnSUNCcFppQW9aV3hsYldWdWRDNTBZV2RPWVcxbElEMDlQU0FuY0dGMGFDY3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHUmxkR1ZqZEdWa1FXUmhjSFJsY2lBOUlITjJaMUJoZEdoQlpHRndkR1Z5TzF4dUlDQWdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdaR1YwWldOMFpXUkJaR0Z3ZEdWeUlEMGdjM1puUVdSaGNIUmxjanRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJSEpsZEhWeWJpQmtaWFJsWTNSbFpFRmtZWEIwWlhJN1hHNTlPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL2RldGVjdC1hZGFwdGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9JbnB1dDIgPSByZXF1aXJlKCcuL0lucHV0Jyk7XG5cbnZhciBfSW5wdXQzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfSW5wdXQyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgUG9pbnRlciA9IGZ1bmN0aW9uIChfSW5wdXQpIHtcbiAgICBfaW5oZXJpdHMoUG9pbnRlciwgX0lucHV0KTtcblxuICAgIGZ1bmN0aW9uIFBvaW50ZXIoaW5pdGlhbFN0YXRlLCBtb3ZlRXZlbnQsIGV2ZW50VG9Qb2ludCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUG9pbnRlcik7XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0lucHV0LmNhbGwodGhpcywgaW5pdGlhbFN0YXRlKSk7XG5cbiAgICAgICAgX3RoaXMuZXZlbnRUb1BvaW50ID0gZXZlbnRUb1BvaW50O1xuICAgICAgICBfdGhpcy5tb3ZlRXZlbnQgPSBtb3ZlRXZlbnQ7XG4gICAgICAgIF90aGlzLmJvdW5kTGF0ZXN0ID0gX3RoaXMubGF0ZXN0LmJpbmQoX3RoaXMpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgUG9pbnRlci5wcm90b3R5cGUubGF0ZXN0ID0gZnVuY3Rpb24gbGF0ZXN0KGUpIHtcbiAgICAgICAgX0lucHV0LnByb3RvdHlwZS5sYXRlc3QuY2FsbCh0aGlzLCB0aGlzLmV2ZW50VG9Qb2ludChlKSk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9O1xuXG4gICAgUG9pbnRlci5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgICAgX0lucHV0LnByb3RvdHlwZS5zdGFydC5jYWxsKHRoaXMpO1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLm1vdmVFdmVudCwgdGhpcy5ib3VuZExhdGVzdCk7XG4gICAgfTtcblxuICAgIFBvaW50ZXIucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICBfSW5wdXQucHJvdG90eXBlLnN0b3AuY2FsbCh0aGlzKTtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5tb3ZlRXZlbnQsIHRoaXMuYm91bmRMYXRlc3QpO1xuICAgIH07XG5cbiAgICByZXR1cm4gUG9pbnRlcjtcbn0oX0lucHV0My5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUG9pbnRlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJuQjFkQzlRYjJsdWRHVnlMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN1FVRkJRVHM3T3pzN096czdPenM3TzBsQlJYRkNPenM3UVVGRGFrSXNZVUZFYVVJc1QwRkRha0lzUTBGQldTeFpRVUZhTEVWQlFUQkNMRk5CUVRGQ0xFVkJRWEZETEZsQlFYSkRMRVZCUVcxRU96aENRVVJzUXl4VFFVTnJRenM3Y1VSQlF5OURMR3RDUVVGTkxGbEJRVTRzUjBGRUswTTdPMEZCUlM5RExHTkJRVXNzV1VGQlRDeEhRVUZ2UWl4WlFVRndRaXhEUVVZclF6dEJRVWN2UXl4alFVRkxMRk5CUVV3c1IwRkJhVUlzVTBGQmFrSXNRMEZJSzBNN1FVRkpMME1zWTBGQlN5eFhRVUZNTEVkQlFXMUNMRTFCUVVzc1RVRkJUQ3hEUVVGWkxFbEJRVm9zVDBGQmJrSXNRMEZLSzBNN08wdEJRVzVFT3p0QlFVUnBRaXh6UWtGUmFrSXNlVUpCUVU4c1IwRkJSenRCUVVOT0xIbENRVUZOTEUxQlFVNHNXVUZCWVN4TFFVRkxMRmxCUVV3c1EwRkJhMElzUTBGQmJFSXNRMEZCWWl4RlFVUk5PMEZCUlU0c1ZVRkJSU3hqUVVGR0xFZEJSazA3T3p0QlFWSlBMSE5DUVdGcVFpeDVRa0ZCVVR0QlFVTktMSGxDUVVGTkxFdEJRVTRzV1VGRVNUdEJRVVZLTEdsQ1FVRlRMR1ZCUVZRc1EwRkJlVUlzWjBKQlFYcENMRU5CUVRCRExFdEJRVXNzVTBGQlRDeEZRVUZuUWl4TFFVRkxMRmRCUVV3c1EwRkJNVVFzUTBGR1NUczdPMEZCWWxNc2MwSkJhMEpxUWl4MVFrRkJUenRCUVVOSUxIbENRVUZOTEVsQlFVNHNXVUZFUnp0QlFVVklMR2xDUVVGVExHVkJRVlFzUTBGQmVVSXNiVUpCUVhwQ0xFTkJRVFpETEV0QlFVc3NVMEZCVEN4RlFVRm5RaXhMUVVGTExGZEJRVXdzUTBGQk4wUXNRMEZHUnpzN08xZEJiRUpWSWl3aVptbHNaU0k2SWxCdmFXNTBaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUVsdWNIVjBJR1p5YjIwZ0p5NHZTVzV3ZFhRbk8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQmpiR0Z6Y3lCUWIybHVkR1Z5SUdWNGRHVnVaSE1nU1c1d2RYUWdlMXh1SUNBZ0lHTnZibk4wY25WamRHOXlLR2x1YVhScFlXeFRkR0YwWlN3Z2JXOTJaVVYyWlc1MExDQmxkbVZ1ZEZSdlVHOXBiblFwSUh0Y2JpQWdJQ0FnSUNBZ2MzVndaWElvYVc1cGRHbGhiRk4wWVhSbEtUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1bGRtVnVkRlJ2VUc5cGJuUWdQU0JsZG1WdWRGUnZVRzlwYm5RN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Ylc5MlpVVjJaVzUwSUQwZ2JXOTJaVVYyWlc1ME8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1KdmRXNWtUR0YwWlhOMElEMGdkR2hwY3k1c1lYUmxjM1F1WW1sdVpDaDBhR2x6S1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JzWVhSbGMzUW9aU2tnZTF4dUlDQWdJQ0FnSUNCemRYQmxjaTVzWVhSbGMzUW9kR2hwY3k1bGRtVnVkRlJ2VUc5cGJuUW9aU2twTzF4dUlDQWdJQ0FnSUNCbExuQnlaWFpsYm5SRVpXWmhkV3gwS0NrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYzNSaGNuUW9LU0I3WEc0Z0lDQWdJQ0FnSUhOMWNHVnlMbk4wWVhKMEtDazdYRzRnSUNBZ0lDQWdJR1J2WTNWdFpXNTBMbVJ2WTNWdFpXNTBSV3hsYldWdWRDNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtIUm9hWE11Ylc5MlpVVjJaVzUwTENCMGFHbHpMbUp2ZFc1a1RHRjBaWE4wS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J6ZEc5d0tDa2dlMXh1SUNBZ0lDQWdJQ0J6ZFhCbGNpNXpkRzl3S0NrN1hHNGdJQ0FnSUNBZ0lHUnZZM1Z0Wlc1MExtUnZZM1Z0Wlc1MFJXeGxiV1Z1ZEM1eVpXMXZkbVZGZG1WdWRFeHBjM1JsYm1WeUtIUm9hWE11Ylc5MlpVVjJaVzUwTENCMGFHbHpMbUp2ZFc1a1RHRjBaWE4wS1R0Y2JpQWdJQ0I5WEc1OVhHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbnB1dC9Qb2ludGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMzhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVhY3RpdmF0ZSA9IGV4cG9ydHMuZ2V0VGFza0lkID0gdW5kZWZpbmVkO1xuZXhwb3J0cy5hY3RpdmF0ZSA9IGFjdGl2YXRlO1xuXG52YXIgX3RpbWVyID0gcmVxdWlyZSgnLi90aW1lcicpO1xuXG52YXIgX3RpbWVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RpbWVyKTtcblxudmFyIF90aWNrID0gcmVxdWlyZSgnLi90aWNrJyk7XG5cbnZhciBfdGljazIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90aWNrKTtcblxudmFyIF9tYW5hZ2VyID0gcmVxdWlyZSgnLi9tYW5hZ2VyJyk7XG5cbnZhciBfbWFuYWdlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tYW5hZ2VyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHRhc2tTdGVwT3JkZXIgPSBbeyBuYW1lOiAnb25GcmFtZVN0YXJ0JyB9LCB7IG5hbWU6ICdvblVwZGF0ZScgfSwgeyBuYW1lOiAnd2lsbFJlbmRlcicsIGRlY2lkZVJlbmRlcjogdHJ1ZSB9LCB7IG5hbWU6ICdvblByZVJlbmRlcicsIGlzUmVuZGVyOiB0cnVlIH0sIHsgbmFtZTogJ29uUmVuZGVyJywgaXNSZW5kZXI6IHRydWUgfSwgeyBuYW1lOiAnb25Qb3N0UmVuZGVyJywgaXNSZW5kZXI6IHRydWUgfSwgeyBuYW1lOiAnb25GcmFtZUVuZCcgfSwgeyBuYW1lOiAnb25DbGVhbnVwJyB9XTsgLypcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3JlIHJlbmRlciBsb29wXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTb21lIGRlY2ljaXNvbnMgaGVyZSBoYXZlIGJlZW4gdGFrZW4gaW4gdGhlIG5hbWUgb2YgcGVyZm9ybWFuY2UuIEFsbCBoYWlsIHBlcmZvcm1hbmNlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChJdCB0dXJucyBvdXQgbWljcm9vcHRpbWlzYXRpb25zIGRvIG1hdHRlciB3aGVuIHlvdSBoYXZlIDE2bXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuXG52YXIgbnVtVGFza1N0ZXBzID0gdGFza1N0ZXBPcmRlci5sZW5ndGg7XG5cbi8vIFtib29sZWFuXTogSXMgbG9vcCBydW5uaW5nP1xudmFyIGlzUnVubmluZyA9IGZhbHNlO1xuXG4vKlxuICAgIFt0aW1lc3RhbXBdOiBGcmFtZSB0aW1lc3RhbXBcbiAgICBbaW50XTogVGltZSBzaW5jZSBsYXN0IGZyYW1lXG4qL1xuZnVuY3Rpb24gZmlyZUFsbChmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgdmFyIGFjdGl2ZUlkcyA9IF9tYW5hZ2VyMi5kZWZhdWx0LmdldEFjdGl2ZUlkcygpO1xuICAgIHZhciBhY3RpdmVUYXNrQ291bnQgPSBhY3RpdmVJZHMubGVuZ3RoO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1UYXNrU3RlcHM7IGkrKykge1xuICAgICAgICB2YXIgc3RlcCA9IHRhc2tTdGVwT3JkZXJbaV07XG5cbiAgICAgICAgZm9yICh2YXIgaTIgPSAwOyBpMiA8IGFjdGl2ZVRhc2tDb3VudDsgaTIrKykge1xuICAgICAgICAgICAgdmFyIHRhc2sgPSBfbWFuYWdlcjIuZGVmYXVsdC5hY3RpdmVUYXNrc1thY3RpdmVJZHNbaTJdXTtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBmYWxzZTtcblxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhpcyB0YXNrIGhhcyB0aGlzIHN0ZXAsIG9yIGlmIGl0J3MgYSByZW5kZXIgc3RlcCB0aGF0IHdlJ3JlIHJlbmRlcmluZyB0aGlzIGZyYW1lXG4gICAgICAgICAgICBpZiAodGFzayAmJiB0YXNrW3N0ZXAubmFtZV0gJiYgKCFzdGVwLmlzUmVuZGVyIHx8IHN0ZXAuaXNSZW5kZXIgJiYgdGFzay5fcmVuZGVyVGhpc0ZyYW1lID09PSB0cnVlKSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRhc2tbc3RlcC5uYW1lXS5jYWxsKHRhc2ssIHRhc2ssIGZyYW1lU3RhbXAsIGVsYXBzZWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiB0aGlzIGlzIGEgZGVjaWRlIHJlbmRlciBzdGVwIGFuZCBpdCByZXR1cm5zIGBmYWxzZWAsIHNldCB3aWxsUmVuZGVyIHRvIGZhbHNlXG4gICAgICAgICAgICBpZiAoc3RlcC5kZWNpZGVSZW5kZXIpIHtcbiAgICAgICAgICAgICAgICB0YXNrLl9yZW5kZXJUaGlzRnJhbWUgPSB0YXNrW3N0ZXAubmFtZV0gJiYgcmVzdWx0ICE9PSB0cnVlID8gZmFsc2UgOiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIF9tYW5hZ2VyMi5kZWZhdWx0LmdldE5vbkJhY2tncm91bmRSdW5uaW5nQ291bnQoKTtcbn1cblxuLy8gRnVuY3Rpb24gdG8gZmlyZSBldmVyeSBmcmFtZVxuZnVuY3Rpb24gZnJhbWUoZnJhbWVTdGFtcCkge1xuICAgIF90aW1lcjIuZGVmYXVsdC51cGRhdGUoZnJhbWVTdGFtcCk7XG4gICAgaXNSdW5uaW5nID0gZmlyZUFsbChmcmFtZVN0YW1wLCBfdGltZXIyLmRlZmF1bHQuZ2V0RWxhcHNlZCgpKTtcblxuICAgIGlmIChpc1J1bm5pbmcpIHtcbiAgICAgICAgKDAsIF90aWNrMi5kZWZhdWx0KShmcmFtZSk7XG4gICAgfVxufVxuXG4vLyBTdGFydCBsb29wXG5mdW5jdGlvbiBzdGFydCgpIHtcbiAgICBpZiAoIWlzUnVubmluZykge1xuICAgICAgICBfdGltZXIyLmRlZmF1bHQuc3RhcnQoKTtcbiAgICAgICAgaXNSdW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgKDAsIF90aWNrMi5kZWZhdWx0KShmcmFtZSk7XG4gICAgfVxufVxuXG4vLyBFeHBvcnRzXG52YXIgZ2V0VGFza0lkID0gZXhwb3J0cy5nZXRUYXNrSWQgPSBfbWFuYWdlcjIuZGVmYXVsdC5nZXRUYXNrSWQ7XG5cbi8qXG4gICAgW2ludF06IHRhc2sgSUQgdG8gYWN0aXZhdGVcbiAgICBbdGFza106IHRhc2sgdG8gYWN0aXZhdGVcbiovXG5mdW5jdGlvbiBhY3RpdmF0ZShpZCwgdGFzaykge1xuICAgIF9tYW5hZ2VyMi5kZWZhdWx0LmFjdGl2YXRlKGlkLCB0YXNrKTtcblxuICAgIGlmICghaXNSdW5uaW5nKSB7XG4gICAgICAgIHN0YXJ0KCk7XG4gICAgfVxufVxuXG4vKlxuICAgIFtpbnRdOiB0YXNrIElEIHRvIGRlYWN0aXZhdGVcbiovXG52YXIgZGVhY3RpdmF0ZSA9IGV4cG9ydHMuZGVhY3RpdmF0ZSA9IF9tYW5hZ2VyMi5kZWZhdWx0LmRlYWN0aXZhdGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTBZWE5yTDJ4dmIzQXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0UlFXbEdaMEk3TzBGQk0wVm9RanM3T3p0QlFVTkJPenM3TzBGQlEwRTdPenM3T3p0QlFVVkJMRWxCUVUwc1owSkJRV2RDTEVOQlEyeENMRVZCUVVVc1RVRkJUU3hqUVVGT0xFVkJSR2RDTEVWQlJXeENMRVZCUVVVc1RVRkJUU3hWUVVGT0xFVkJSbWRDTEVWQlIyeENMRVZCUVVVc1RVRkJUU3haUVVGT0xFVkJRVzlDTEdOQlFXTXNTVUZCWkN4RlFVaEtMRVZCU1d4Q0xFVkJRVVVzVFVGQlRTeGhRVUZPTEVWQlFYRkNMRlZCUVZVc1NVRkJWaXhGUVVwTUxFVkJTMnhDTEVWQlFVVXNUVUZCVFN4VlFVRk9MRVZCUVd0Q0xGVkJRVlVzU1VGQlZpeEZRVXhHTEVWQlRXeENMRVZCUVVVc1RVRkJUU3hqUVVGT0xFVkJRWE5DTEZWQlFWVXNTVUZCVml4RlFVNU9MRVZCVDJ4Q0xFVkJRVVVzVFVGQlRTeFpRVUZPTEVWQlVHZENMRVZCVVd4Q0xFVkJRVVVzVFVGQlRTeFhRVUZPTEVWQlVtZENMRU5CUVdoQ096czdPenM3TzBGQlZVNHNTVUZCVFN4bFFVRmxMR05CUVdNc1RVRkJaRHM3TzBGQlIzSkNMRWxCUVVrc1dVRkJXU3hMUVVGYU96czdPenM3UVVGTlNpeFRRVUZUTEU5QlFWUXNRMEZCYVVJc1ZVRkJha0lzUlVGQk5rSXNUMEZCTjBJc1JVRkJjME03UVVGRGJFTXNVVUZCVFN4WlFVRlpMR3RDUVVGUkxGbEJRVklzUlVGQldpeERRVVEwUWp0QlFVVnNReXhSUVVGTkxHdENRVUZyUWl4VlFVRlZMRTFCUVZZc1EwRkdWVHM3UVVGSmJFTXNVMEZCU3l4SlFVRkpMRWxCUVVrc1EwRkJTaXhGUVVGUExFbEJRVWtzV1VGQlNpeEZRVUZyUWl4SFFVRnNReXhGUVVGMVF6dEJRVU51UXl4WlFVRk5MRTlCUVU4c1kwRkJZeXhEUVVGa0xFTkJRVkFzUTBGRU5rSTdPMEZCUjI1RExHRkJRVXNzU1VGQlNTeExRVUZMTEVOQlFVd3NSVUZCVVN4TFFVRkxMR1ZCUVV3c1JVRkJjMElzU1VGQmRrTXNSVUZCTmtNN1FVRkRla01zWjBKQlFVMHNUMEZCVHl4clFrRkJVU3hYUVVGU0xFTkJRVzlDTEZWQlFWVXNSVUZCVml4RFFVRndRaXhEUVVGUUxFTkJSRzFETzBGQlJYcERMR2RDUVVGSkxGTkJRVk1zUzBGQlZEczdPMEZCUm5GRExHZENRVXR5UXl4UlFVRlJMRXRCUVVzc1MwRkJTeXhKUVVGTUxFTkJRV0lzUzBGQk5FSXNRMEZCUXl4TFFVRkxMRkZCUVV3c1NVRkJhMElzUzBGQlN5eFJRVUZNTEVsQlFXbENMRXRCUVVzc1owSkJRVXdzUzBGQk1FSXNTVUZCTVVJc1EwRkJhRVVzUlVGQmEwYzdRVUZEYkVjc2VVSkJRVk1zUzBGQlN5eExRVUZMTEVsQlFVd3NRMEZCVEN4RFFVRm5RaXhKUVVGb1FpeERRVUZ4UWl4SlFVRnlRaXhGUVVFeVFpeEpRVUV6UWl4RlFVRnBReXhWUVVGcVF5eEZRVUUyUXl4UFFVRTNReXhEUVVGVUxFTkJSR3RITzJGQlFYUkhPenM3UVVGTWVVTXNaMEpCVlhKRExFdEJRVXNzV1VGQlRDeEZRVUZ0UWp0QlFVTnVRaXh4UWtGQlN5eG5Ra0ZCVEN4SFFVRjNRaXhKUVVGRExFTkJRVXNzUzBGQlN5eEpRVUZNTEVOQlFVd3NTVUZCYlVJc1YwRkJWeXhKUVVGWUxFZEJRVzFDTEV0QlFYWkRMRWRCUVN0RExFbEJRUzlETEVOQlJFdzdZVUZCZGtJN1UwRldTanRMUVVoS096dEJRVzFDUVN4WFFVRlBMR3RDUVVGUkxEUkNRVUZTTEVWQlFWQXNRMEYyUW10RE8wTkJRWFJET3pzN1FVRXlRa0VzVTBGQlV5eExRVUZVTEVOQlFXVXNWVUZCWml4RlFVRXlRanRCUVVOMlFpeHZRa0ZCVFN4TlFVRk9MRU5CUVdFc1ZVRkJZaXhGUVVSMVFqdEJRVVYyUWl4blFrRkJXU3hSUVVGUkxGVkJRVklzUlVGQmIwSXNaMEpCUVUwc1ZVRkJUaXhGUVVGd1FpeERRVUZhTEVOQlJuVkNPenRCUVVsMlFpeFJRVUZKTEZOQlFVb3NSVUZCWlR0QlFVTllMRFJDUVVGTExFdEJRVXdzUlVGRVZ6dExRVUZtTzBOQlNrbzdPenRCUVZWQkxGTkJRVk1zUzBGQlZDeEhRVUZwUWp0QlFVTmlMRkZCUVVrc1EwRkJReXhUUVVGRUxFVkJRVms3UVVGRFdpeDNRa0ZCVFN4TFFVRk9MRWRCUkZrN1FVRkZXaXh2UWtGQldTeEpRVUZhTEVOQlJsazdRVUZIV2l3MFFrRkJTeXhMUVVGTUxFVkJTRms3UzBGQmFFSTdRMEZFU2pzN08wRkJVMDhzU1VGQlRTeG5RMEZCV1N4clFrRkJVU3hUUVVGU096czdPenM3UVVGTmJFSXNVMEZCVXl4UlFVRlVMRU5CUVd0Q0xFVkJRV3hDTEVWQlFYTkNMRWxCUVhSQ0xFVkJRVFJDTzBGQlF5OUNMSE5DUVVGUkxGRkJRVklzUTBGQmFVSXNSVUZCYWtJc1JVRkJjVUlzU1VGQmNrSXNSVUZFSzBJN08wRkJSeTlDTEZGQlFVa3NRMEZCUXl4VFFVRkVMRVZCUVZrN1FVRkRXaXhuUWtGRVdUdExRVUZvUWp0RFFVaEhPenM3T3p0QlFWZEJMRWxCUVUwc2EwTkJRV0VzYTBKQlFWRXNWVUZCVWlJc0ltWnBiR1VpT2lKc2IyOXdMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwTDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk4cVhHNGdJQ0FnUTI5eVpTQnlaVzVrWlhJZ2JHOXZjRnh1WEc0Z0lDQWdVMjl0WlNCa1pXTnBZMmx6YjI1eklHaGxjbVVnYUdGMlpTQmlaV1Z1SUhSaGEyVnVJR2x1SUhSb1pTQnVZVzFsSUc5bUlIQmxjbVp2Y20xaGJtTmxMaUJCYkd3Z2FHRnBiQ0J3WlhKbWIzSnRZVzVqWlM1Y2JpQWdJQ0FvU1hRZ2RIVnlibk1nYjNWMElHMXBZM0p2YjNCMGFXMXBjMkYwYVc5dWN5QmtieUJ0WVhSMFpYSWdkMmhsYmlCNWIzVWdhR0YyWlNBeE5tMXpLVnh1S2k5Y2JtbHRjRzl5ZENCMGFXMWxjaUJtY205dElDY3VMM1JwYldWeUp6dGNibWx0Y0c5eWRDQjBhV05ySUdaeWIyMGdKeTR2ZEdsamF5YzdYRzVwYlhCdmNuUWdiV0Z1WVdkbGNpQm1jbTl0SUNjdUwyMWhibUZuWlhJbk8xeHVYRzVqYjI1emRDQjBZWE5yVTNSbGNFOXlaR1Z5SUQwZ1cxeHVJQ0FnSUhzZ2JtRnRaVG9nSjI5dVJuSmhiV1ZUZEdGeWRDY2dmU3hjYmlBZ0lDQjdJRzVoYldVNklDZHZibFZ3WkdGMFpTY2dmU3hjYmlBZ0lDQjdJRzVoYldVNklDZDNhV3hzVW1WdVpHVnlKeXdnWkdWamFXUmxVbVZ1WkdWeU9pQjBjblZsSUgwc1hHNGdJQ0FnZXlCdVlXMWxPaUFuYjI1UWNtVlNaVzVrWlhJbkxDQnBjMUpsYm1SbGNqb2dkSEoxWlNCOUxGeHVJQ0FnSUhzZ2JtRnRaVG9nSjI5dVVtVnVaR1Z5Snl3Z2FYTlNaVzVrWlhJNklIUnlkV1VnZlN4Y2JpQWdJQ0I3SUc1aGJXVTZJQ2R2YmxCdmMzUlNaVzVrWlhJbkxDQnBjMUpsYm1SbGNqb2dkSEoxWlNCOUxGeHVJQ0FnSUhzZ2JtRnRaVG9nSjI5dVJuSmhiV1ZGYm1RbklIMHNYRzRnSUNBZ2V5QnVZVzFsT2lBbmIyNURiR1ZoYm5Wd0p5QjlYRzVkTzF4dVkyOXVjM1FnYm5WdFZHRnphMU4wWlhCeklEMGdkR0Z6YTFOMFpYQlBjbVJsY2k1c1pXNW5kR2c3WEc1Y2JpOHZJRnRpYjI5c1pXRnVYVG9nU1hNZ2JHOXZjQ0J5ZFc1dWFXNW5QMXh1YkdWMElHbHpVblZ1Ym1sdVp5QTlJR1poYkhObE8xeHVYRzR2S2x4dUlDQWdJRnQwYVcxbGMzUmhiWEJkT2lCR2NtRnRaU0IwYVcxbGMzUmhiWEJjYmlBZ0lDQmJhVzUwWFRvZ1ZHbHRaU0J6YVc1alpTQnNZWE4wSUdaeVlXMWxYRzRxTDF4dVpuVnVZM1JwYjI0Z1ptbHlaVUZzYkNobWNtRnRaVk4wWVcxd0xDQmxiR0Z3YzJWa0tTQjdYRzRnSUNBZ1kyOXVjM1FnWVdOMGFYWmxTV1J6SUQwZ2JXRnVZV2RsY2k1blpYUkJZM1JwZG1WSlpITW9LVHRjYmlBZ0lDQmpiMjV6ZENCaFkzUnBkbVZVWVhOclEyOTFiblFnUFNCaFkzUnBkbVZKWkhNdWJHVnVaM1JvTzF4dVhHNGdJQ0FnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCdWRXMVVZWE5yVTNSbGNITTdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCemRHVndJRDBnZEdGemExTjBaWEJQY21SbGNsdHBYVHRjYmx4dUlDQWdJQ0FnSUNCbWIzSWdLR3hsZENCcE1pQTlJREE3SUdreUlEd2dZV04wYVhabFZHRnphME52ZFc1ME95QnBNaXNyS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQjBZWE5ySUQwZ2JXRnVZV2RsY2k1aFkzUnBkbVZVWVhOcmMxdGhZM1JwZG1WSlpITmJhVEpkWFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJR3hsZENCeVpYTjFiSFFnUFNCbVlXeHpaVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnUTJobFkyc2dhV1lnZEdocGN5QjBZWE5ySUdoaGN5QjBhR2x6SUhOMFpYQXNJRzl5SUdsbUlHbDBKM01nWVNCeVpXNWtaWElnYzNSbGNDQjBhR0YwSUhkbEozSmxJSEpsYm1SbGNtbHVaeUIwYUdseklHWnlZVzFsWEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvZEdGemF5QW1KaUIwWVhOclczTjBaWEF1Ym1GdFpWMGdKaVlnS0NGemRHVndMbWx6VW1WdVpHVnlJSHg4SUNoemRHVndMbWx6VW1WdVpHVnlJQ1ltSUhSaGMyc3VYM0psYm1SbGNsUm9hWE5HY21GdFpTQTlQVDBnZEhKMVpTa3BLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WemRXeDBJRDBnZEdGemExdHpkR1Z3TG01aGJXVmRMbU5oYkd3b2RHRnpheXdnZEdGemF5d2dabkpoYldWVGRHRnRjQ3dnWld4aGNITmxaQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJRWxtSUhSb2FYTWdhWE1nWVNCa1pXTnBaR1VnY21WdVpHVnlJSE4wWlhBZ1lXNWtJR2wwSUhKbGRIVnlibk1nWUdaaGJITmxZQ3dnYzJWMElIZHBiR3hTWlc1a1pYSWdkRzhnWm1Gc2MyVmNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaHpkR1Z3TG1SbFkybGtaVkpsYm1SbGNpa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJoYzJzdVgzSmxibVJsY2xSb2FYTkdjbUZ0WlNBOUlDaDBZWE5yVzNOMFpYQXVibUZ0WlYwZ0ppWWdjbVZ6ZFd4MElDRTlQU0IwY25WbEtTQS9JR1poYkhObElEb2dkSEoxWlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJSEpsZEhWeWJpQnRZVzVoWjJWeUxtZGxkRTV2YmtKaFkydG5jbTkxYm1SU2RXNXVhVzVuUTI5MWJuUW9LVHRjYm4xY2JseHVMeThnUm5WdVkzUnBiMjRnZEc4Z1ptbHlaU0JsZG1WeWVTQm1jbUZ0WlZ4dVpuVnVZM1JwYjI0Z1puSmhiV1VvWm5KaGJXVlRkR0Z0Y0NrZ2UxeHVJQ0FnSUhScGJXVnlMblZ3WkdGMFpTaG1jbUZ0WlZOMFlXMXdLVHRjYmlBZ0lDQnBjMUoxYm01cGJtY2dQU0JtYVhKbFFXeHNLR1p5WVcxbFUzUmhiWEFzSUhScGJXVnlMbWRsZEVWc1lYQnpaV1FvS1NrN1hHNWNiaUFnSUNCcFppQW9hWE5TZFc1dWFXNW5LU0I3WEc0Z0lDQWdJQ0FnSUhScFkyc29abkpoYldVcE8xeHVJQ0FnSUgxY2JuMWNibHh1THk4Z1UzUmhjblFnYkc5dmNGeHVablZ1WTNScGIyNGdjM1JoY25Rb0tTQjdYRzRnSUNBZ2FXWWdLQ0ZwYzFKMWJtNXBibWNwSUh0Y2JpQWdJQ0FnSUNBZ2RHbHRaWEl1YzNSaGNuUW9LVHRjYmlBZ0lDQWdJQ0FnYVhOU2RXNXVhVzVuSUQwZ2RISjFaVHRjYmlBZ0lDQWdJQ0FnZEdsamF5aG1jbUZ0WlNrN1hHNGdJQ0FnZlZ4dWZWeHVYRzR2THlCRmVIQnZjblJ6WEc1bGVIQnZjblFnWTI5dWMzUWdaMlYwVkdGemEwbGtJRDBnYldGdVlXZGxjaTVuWlhSVVlYTnJTV1E3WEc1Y2JpOHFYRzRnSUNBZ1cybHVkRjA2SUhSaGMyc2dTVVFnZEc4Z1lXTjBhWFpoZEdWY2JpQWdJQ0JiZEdGemExMDZJSFJoYzJzZ2RHOGdZV04wYVhaaGRHVmNiaW92WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnWVdOMGFYWmhkR1VvYVdRc0lIUmhjMnNwSUh0Y2JpQWdJQ0J0WVc1aFoyVnlMbUZqZEdsMllYUmxLR2xrTENCMFlYTnJLVHRjYmx4dUlDQWdJR2xtSUNnaGFYTlNkVzV1YVc1bktTQjdYRzRnSUNBZ0lDQWdJSE4wWVhKMEtDazdYRzRnSUNBZ2ZWeHVmVnh1WEc0dktseHVJQ0FnSUZ0cGJuUmRPaUIwWVhOcklFbEVJSFJ2SUdSbFlXTjBhWFpoZEdWY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ1pHVmhZM1JwZG1GMFpTQTlJRzFoYm1GblpYSXVaR1ZoWTNScGRtRjBaVHNpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdGFzay9sb29wLmpzXG4gKiogbW9kdWxlIGlkID0gMzlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBUUkFOU0xBVEUgPSAndHJhbnNsYXRlJztcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIHg6IFRSQU5TTEFURSArICdYJyxcbiAgICB5OiBUUkFOU0xBVEUgKyAnWScsXG4gICAgejogVFJBTlNMQVRFICsgJ1onXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMMk56Y3k5emRHRjBaUzF0WVhBdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPMEZCUVVFc1NVRkJUU3haUVVGWkxGZEJRVm83TzJ0Q1FVVlRPMEZCUTFnc1QwRkJSeXhaUVVGWkxFZEJRVm83UVVGRFNDeFBRVUZITEZsQlFWa3NSMEZCV2p0QlFVTklMRTlCUVVjc1dVRkJXU3hIUVVGYUlpd2labWxzWlNJNkluTjBZWFJsTFcxaGNDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpqYjI1emRDQlVVa0ZPVTB4QlZFVWdQU0FuZEhKaGJuTnNZWFJsSnp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2UxeHVJQ0FnSUhnNklGUlNRVTVUVEVGVVJTQXJJQ2RZSnl4Y2JpQWdJQ0I1T2lCVVVrRk9VMHhCVkVVZ0t5QW5XU2NzWEc0Z0lDQWdlam9nVkZKQlRsTk1RVlJGSUNzZ0oxb25YRzU5T3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FkYXB0ZXIvY3NzL3N0YXRlLW1hcC5qc1xuICoqIG1vZHVsZSBpZCA9IDQwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfYW5nbGUgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9hbmdsZScpO1xuXG52YXIgX2FuZ2xlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FuZ2xlKTtcblxudmFyIF9hbHBoYSA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL2FscGhhJyk7XG5cbnZhciBfYWxwaGEyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWxwaGEpO1xuXG52YXIgX2NvbG9yID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvY29sb3InKTtcblxudmFyIF9jb2xvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb2xvcik7XG5cbnZhciBfc2NhbGUgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9zY2FsZScpO1xuXG52YXIgX3NjYWxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NjYWxlKTtcblxudmFyIF9zaGFkb3cgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9zaGFkb3cnKTtcblxudmFyIF9zaGFkb3cyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2hhZG93KTtcblxudmFyIF9weCA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL3B4Jyk7XG5cbnZhciBfcHgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgLy8gQ29sb3IgcHJvcHNcbiAgICBjb2xvcjogX2NvbG9yMi5kZWZhdWx0LFxuICAgIGJhY2tncm91bmRDb2xvcjogX2NvbG9yMi5kZWZhdWx0LFxuICAgIG91dGxpbmVDb2xvcjogX2NvbG9yMi5kZWZhdWx0LFxuICAgIGZpbGw6IF9jb2xvcjIuZGVmYXVsdCxcbiAgICBzdHJva2U6IF9jb2xvcjIuZGVmYXVsdCxcblxuICAgIC8vIEJvcmRlciBwcm9wc1xuICAgIGJvcmRlckNvbG9yOiBfY29sb3IyLmRlZmF1bHQsXG4gICAgYm9yZGVyVG9wQ29sb3I6IF9jb2xvcjIuZGVmYXVsdCxcbiAgICBib3JkZXJSaWdodENvbG9yOiBfY29sb3IyLmRlZmF1bHQsXG4gICAgYm9yZGVyQm90dG9tQ29sb3I6IF9jb2xvcjIuZGVmYXVsdCxcbiAgICBib3JkZXJMZWZ0Q29sb3I6IF9jb2xvcjIuZGVmYXVsdCxcbiAgICBib3JkZXJSYWRpdXM6IF9weDIuZGVmYXVsdCxcblxuICAgIC8vIFBvc2l0aW9uaW5nXG4gICAgd2lkdGg6IF9weDIuZGVmYXVsdCxcbiAgICBoZWlnaHQ6IF9weDIuZGVmYXVsdCxcblxuICAgIC8vIFNoYWRvd3NcbiAgICB0ZXh0U2hhZG93OiBfc2hhZG93Mi5kZWZhdWx0LFxuICAgIGJveFNoYWRvdzogX3NoYWRvdzIuZGVmYXVsdCxcblxuICAgIC8vIFRyYW5zZm9ybSBwcm9wZXJ0aWVzXG4gICAgcm90YXRlOiBfYW5nbGUyLmRlZmF1bHQsXG4gICAgcm90YXRlWDogX2FuZ2xlMi5kZWZhdWx0LFxuICAgIHJvdGF0ZVk6IF9hbmdsZTIuZGVmYXVsdCxcbiAgICByb3RhdGVaOiBfYW5nbGUyLmRlZmF1bHQsXG4gICAgc2NhbGU6IF9zY2FsZTIuZGVmYXVsdCxcbiAgICBzY2FsZVg6IF9zY2FsZTIuZGVmYXVsdCxcbiAgICBzY2FsZVk6IF9zY2FsZTIuZGVmYXVsdCxcbiAgICBzY2FsZVo6IF9zY2FsZTIuZGVmYXVsdCxcbiAgICBza2V3WDogX2FuZ2xlMi5kZWZhdWx0LFxuICAgIHNrZXdZOiBfYW5nbGUyLmRlZmF1bHQsXG4gICAgZGlzdGFuY2U6IF9weDIuZGVmYXVsdCxcbiAgICB0cmFuc2xhdGVYOiBfcHgyLmRlZmF1bHQsXG4gICAgdHJhbnNsYXRlWTogX3B4Mi5kZWZhdWx0LFxuICAgIHRyYW5zbGF0ZVo6IF9weDIuZGVmYXVsdCxcbiAgICBwZXJzcGVjdGl2ZTogX3B4Mi5kZWZhdWx0LFxuICAgIG9wYWNpdHk6IF9hbHBoYTIuZGVmYXVsdFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFpHRndkR1Z5TDJOemN5OTJZV3gxWlMxMGVYQmxMVzFoY0M1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPMEZCUVVFN096czdRVUZEUVRzN096dEJRVU5CT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3T3pzN2EwSkJSV1U3TzBGQlJWZ3NNRUpCUmxjN1FVRkhXQ3h2UTBGSVZ6dEJRVWxZTEdsRFFVcFhPMEZCUzFnc2VVSkJURmM3UVVGTldDd3lRa0ZPVnpzN08wRkJVMWdzWjBOQlZGYzdRVUZWV0N4dFEwRldWenRCUVZkWUxIRkRRVmhYTzBGQldWZ3NjME5CV2xjN1FVRmhXQ3h2UTBGaVZ6dEJRV05ZTERoQ1FXUlhPenM3UVVGcFFsZ3NkVUpCYWtKWE8wRkJhMEpZTEhkQ1FXeENWenM3TzBGQmNVSllMR2REUVhKQ1Z6dEJRWE5DV0N3clFrRjBRbGM3T3p0QlFYbENXQ3d5UWtGNlFsYzdRVUV3UWxnc05FSkJNVUpYTzBGQk1rSllMRFJDUVROQ1Z6dEJRVFJDV0N3MFFrRTFRbGM3UVVFMlFsZ3NNRUpCTjBKWE8wRkJPRUpZTERKQ1FUbENWenRCUVN0Q1dDd3lRa0V2UWxjN1FVRm5RMWdzTWtKQmFFTlhPMEZCYVVOWUxEQkNRV3BEVnp0QlFXdERXQ3d3UWtGc1ExYzdRVUZ0UTFnc01FSkJia05YTzBGQmIwTllMRFJDUVhCRFZ6dEJRWEZEV0N3MFFrRnlRMWM3UVVGelExZ3NORUpCZEVOWE8wRkJkVU5ZTERaQ1FYWkRWenRCUVhkRFdDdzBRa0Y0UTFjaUxDSm1hV3hsSWpvaWRtRnNkV1V0ZEhsd1pTMXRZWEF1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUdGdVoyeGxJR1p5YjIwZ0p5NHVMeTR1TDNaaGJIVmxMWFI1Y0dWekwyRnVaMnhsSnp0Y2JtbHRjRzl5ZENCaGJIQm9ZU0JtY205dElDY3VMaTh1TGk5MllXeDFaUzEwZVhCbGN5OWhiSEJvWVNjN1hHNXBiWEJ2Y25RZ1kyOXNiM0lnWm5KdmJTQW5MaTR2TGk0dmRtRnNkV1V0ZEhsd1pYTXZZMjlzYjNJbk8xeHVhVzF3YjNKMElITmpZV3hsSUdaeWIyMGdKeTR1THk0dUwzWmhiSFZsTFhSNWNHVnpMM05qWVd4bEp6dGNibWx0Y0c5eWRDQnphR0ZrYjNjZ1puSnZiU0FuTGk0dkxpNHZkbUZzZFdVdGRIbHdaWE12YzJoaFpHOTNKenRjYm1sdGNHOXlkQ0J3ZUNCbWNtOXRJQ2N1TGk4dUxpOTJZV3gxWlMxMGVYQmxjeTl3ZUNjN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElIdGNiaUFnSUNBdkx5QkRiMnh2Y2lCd2NtOXdjMXh1SUNBZ0lHTnZiRzl5T2lCamIyeHZjaXhjYmlBZ0lDQmlZV05yWjNKdmRXNWtRMjlzYjNJNklHTnZiRzl5TEZ4dUlDQWdJRzkxZEd4cGJtVkRiMnh2Y2pvZ1kyOXNiM0lzWEc0Z0lDQWdabWxzYkRvZ1kyOXNiM0lzWEc0Z0lDQWdjM1J5YjJ0bE9pQmpiMnh2Y2l4Y2JseHVJQ0FnSUM4dklFSnZjbVJsY2lCd2NtOXdjMXh1SUNBZ0lHSnZjbVJsY2tOdmJHOXlPaUJqYjJ4dmNpeGNiaUFnSUNCaWIzSmtaWEpVYjNCRGIyeHZjam9nWTI5c2IzSXNYRzRnSUNBZ1ltOXlaR1Z5VW1sbmFIUkRiMnh2Y2pvZ1kyOXNiM0lzWEc0Z0lDQWdZbTl5WkdWeVFtOTBkRzl0UTI5c2IzSTZJR052Ykc5eUxGeHVJQ0FnSUdKdmNtUmxja3hsWm5SRGIyeHZjam9nWTI5c2IzSXNYRzRnSUNBZ1ltOXlaR1Z5VW1Ga2FYVnpPaUJ3ZUN4Y2JseHVJQ0FnSUM4dklGQnZjMmwwYVc5dWFXNW5YRzRnSUNBZ2QybGtkR2c2SUhCNExGeHVJQ0FnSUdobGFXZG9kRG9nY0hnc1hHNWNiaUFnSUNBdkx5QlRhR0ZrYjNkelhHNGdJQ0FnZEdWNGRGTm9ZV1J2ZHpvZ2MyaGhaRzkzTEZ4dUlDQWdJR0p2ZUZOb1lXUnZkem9nYzJoaFpHOTNMQ0FnSUZ4dVhHNGdJQ0FnTHk4Z1ZISmhibk5tYjNKdElIQnliM0JsY25ScFpYTmNiaUFnSUNCeWIzUmhkR1U2SUdGdVoyeGxMRnh1SUNBZ0lISnZkR0YwWlZnNklHRnVaMnhsTEZ4dUlDQWdJSEp2ZEdGMFpWazZJR0Z1WjJ4bExGeHVJQ0FnSUhKdmRHRjBaVm82SUdGdVoyeGxMRnh1SUNBZ0lITmpZV3hsT2lCelkyRnNaU3hjYmlBZ0lDQnpZMkZzWlZnNklITmpZV3hsTEZ4dUlDQWdJSE5qWVd4bFdUb2djMk5oYkdVc1hHNGdJQ0FnYzJOaGJHVmFPaUJ6WTJGc1pTeGNiaUFnSUNCemEyVjNXRG9nWVc1bmJHVXNYRzRnSUNBZ2MydGxkMWs2SUdGdVoyeGxMRnh1SUNBZ0lHUnBjM1JoYm1ObE9pQndlQ3hjYmlBZ0lDQjBjbUZ1YzJ4aGRHVllPaUJ3ZUN4Y2JpQWdJQ0IwY21GdWMyeGhkR1ZaT2lCd2VDeGNiaUFnSUNCMGNtRnVjMnhoZEdWYU9pQndlQ3hjYmlBZ0lDQndaWEp6Y0dWamRHbDJaVG9nY0hnc1hHNGdJQ0FnYjNCaFkybDBlVG9nWVd4d2FHRmNibjA3SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9jc3MvdmFsdWUtdHlwZS1tYXAuanNcbiAqKiBtb2R1bGUgaWQgPSA0MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzID0gcmVxdWlyZSgnLi90cmFuc2Zvcm0tcHJvcHMnKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2Zvcm1Qcm9wcyk7XG5cbnZhciBfcHJlZml4ZXIgPSByZXF1aXJlKCcuL3ByZWZpeGVyJyk7XG5cbnZhciBfcHJlZml4ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlZml4ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgVFJBTlNMQVRFX1ogPSAndHJhbnNsYXRlWic7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChzdGF0ZSwgZGlzYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uKSB7XG4gICAgdmFyIHByb3BlcnR5U3RyaW5nID0gJyc7XG4gICAgdmFyIHRyYW5zZm9ybVN0cmluZyA9ICcnO1xuICAgIHZhciB0cmFuc2Zvcm1IYXNaID0gZmFsc2U7XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc3RhdGUpIHtcbiAgICAgICAgaWYgKHN0YXRlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHN0YXRlW2tleV07XG5cbiAgICAgICAgICAgIGlmIChfdHJhbnNmb3JtUHJvcHMyLmRlZmF1bHRba2V5XSkge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybVN0cmluZyArPSBrZXkgKyAnKCcgKyB2YWx1ZSArICcpICc7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtSGFzWiA9IGtleSA9PT0gVFJBTlNMQVRFX1ogPyB0cnVlIDogdHJhbnNmb3JtSGFzWjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJvcGVydHlTdHJpbmcgKz0gJzsnICsgKDAsIF9wcmVmaXhlcjIuZGVmYXVsdCkoa2V5LCB0cnVlKSArICc6JyArIHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRyYW5zZm9ybVN0cmluZyAhPT0gJycpIHtcbiAgICAgICAgaWYgKCF0cmFuc2Zvcm1IYXNaICYmICFkaXNhYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybVN0cmluZyArPSBUUkFOU0xBVEVfWiArICcoMHB4KSc7XG4gICAgICAgIH1cblxuICAgICAgICBwcm9wZXJ0eVN0cmluZyArPSAnOycgKyAoMCwgX3ByZWZpeGVyMi5kZWZhdWx0KSgndHJhbnNmb3JtJywgdHJ1ZSkgKyAnOicgKyB0cmFuc2Zvcm1TdHJpbmc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5U3RyaW5nO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFpHRndkR1Z5TDJOemN5OWlkV2xzWkM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPMEZCUVVFN096czdRVUZEUVRzN096czdPMEZCUlVFc1NVRkJUU3hqUVVGakxGbEJRV1E3TzJ0Q1FVVlRMRlZCUVVNc1MwRkJSQ3hGUVVGUkxESkNRVUZTTEVWQlFYZERPMEZCUTI1RUxGRkJRVWtzYVVKQlFXbENMRVZCUVdwQ0xFTkJSQ3RETzBGQlJXNUVMRkZCUVVrc2EwSkJRV3RDTEVWQlFXeENMRU5CUml0RE8wRkJSMjVFTEZGQlFVa3NaMEpCUVdkQ0xFdEJRV2hDTEVOQlNDdERPenRCUVV0dVJDeFRRVUZMTEVsQlFVa3NSMEZCU2l4SlFVRlhMRXRCUVdoQ0xFVkJRWFZDTzBGQlEyNUNMRmxCUVVrc1RVRkJUU3hqUVVGT0xFTkJRWEZDTEVkQlFYSkNMRU5CUVVvc1JVRkJLMEk3UVVGRE0wSXNaMEpCUVUwc1VVRkJVU3hOUVVGTkxFZEJRVTRzUTBGQlVpeERRVVJ4UWpzN1FVRkhNMElzWjBKQlFVa3NlVUpCUVdVc1IwRkJaaXhEUVVGS0xFVkJRWGxDTzBGQlEzSkNMRzFEUVVGdFFpeE5RVUZOTEVkQlFVNHNSMEZCV1N4TFFVRmFMRWRCUVc5Q0xFbEJRWEJDTEVOQlJFVTdRVUZGY2tJc1owTkJRV2RDTEVkQlFVTXNTMEZCVVN4WFFVRlNMRWRCUVhWQ0xFbEJRWGhDTEVkQlFTdENMR0ZCUVM5Q0xFTkJSa3M3WVVGQmVrSXNUVUZKVHp0QlFVTklMR3REUVVGclFpeE5RVUZOTEhkQ1FVRlRMRWRCUVZRc1JVRkJZeXhKUVVGa0xFTkJRVTRzUjBGQk5FSXNSMEZCTlVJc1IwRkJhME1zUzBGQmJFTXNRMEZFWmp0aFFVcFFPMU5CU0VvN1MwRkVTanM3UVVGalFTeFJRVUZKTEc5Q1FVRnZRaXhGUVVGd1FpeEZRVUYzUWp0QlFVTjRRaXhaUVVGSkxFTkJRVU1zWVVGQlJDeEpRVUZyUWl4RFFVRkRMREpDUVVGRUxFVkJRVGhDTzBGQlEyaEVMQ3RDUVVGdFFpeGpRVUZqTEU5QlFXUXNRMEZFTmtJN1UwRkJjRVE3TzBGQlNVRXNNRUpCUVd0Q0xFMUJRVTBzZDBKQlFWTXNWMEZCVkN4RlFVRnhRaXhKUVVGeVFpeERRVUZPTEVkQlFXMURMRWRCUVc1RExFZEJRWGxETEdWQlFYcERMRU5CVEUwN1MwRkJOVUk3TzBGQlVVRXNWMEZCVHl4alFVRlFMRU5CTTBKdFJEdERRVUY0UXlJc0ltWnBiR1VpT2lKaWRXbHNaQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZEhKaGJuTm1iM0p0VUhKdmNITWdabkp2YlNBbkxpOTBjbUZ1YzJadmNtMHRjSEp2Y0hNbk8xeHVhVzF3YjNKMElIQnlaV1pwZUdWeUlHWnliMjBnSnk0dmNISmxabWw0WlhJbk8xeHVYRzVqYjI1emRDQlVVa0ZPVTB4QlZFVmZXaUE5SUNkMGNtRnVjMnhoZEdWYUp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdLSE4wWVhSbExDQmthWE5oWW14bFNHRnlaSGRoY21WQlkyTmxiR1Z5WVhScGIyNHBJRDArSUh0Y2JpQWdJQ0JzWlhRZ2NISnZjR1Z5ZEhsVGRISnBibWNnUFNBbkp6dGNiaUFnSUNCc1pYUWdkSEpoYm5ObWIzSnRVM1J5YVc1bklEMGdKeWM3WEc0Z0lDQWdiR1YwSUhSeVlXNXpabTl5YlVoaGMxb2dQU0JtWVd4elpUdGNibHh1SUNBZ0lHWnZjaUFvYkdWMElHdGxlU0JwYmlCemRHRjBaU2tnZTF4dUlDQWdJQ0FnSUNCcFppQW9jM1JoZEdVdWFHRnpUM2R1VUhKdmNHVnlkSGtvYTJWNUtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnZG1Gc2RXVWdQU0J6ZEdGMFpWdHJaWGxkTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RISmhibk5tYjNKdFVISnZjSE5iYTJWNVhTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJ5WVc1elptOXliVk4wY21sdVp5QXJQU0JyWlhrZ0t5QW5LQ2NnS3lCMllXeDFaU0FySUNjcElDYzdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkSEpoYm5ObWIzSnRTR0Z6V2lBOUlDaHJaWGtnUFQwOUlGUlNRVTVUVEVGVVJWOWFLU0EvSUhSeWRXVWdPaUIwY21GdWMyWnZjbTFJWVhOYU8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhCeWIzQmxjblI1VTNSeWFXNW5JQ3M5SUNjN0p5QXJJSEJ5WldacGVHVnlLR3RsZVN3Z2RISjFaU2tnS3lBbk9pY2dLeUIyWVd4MVpUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JseHVJQ0FnSUdsbUlDaDBjbUZ1YzJadmNtMVRkSEpwYm1jZ0lUMDlJQ2NuS1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2doZEhKaGJuTm1iM0p0U0dGeldpQW1KaUFoWkdsellXSnNaVWhoY21SM1lYSmxRV05qWld4bGNtRjBhVzl1S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwY21GdWMyWnZjbTFUZEhKcGJtY2dLejBnVkZKQlRsTk1RVlJGWDFvZ0t5QW5LREJ3ZUNrbk8xeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnY0hKdmNHVnlkSGxUZEhKcGJtY2dLejBnSnpzbklDc2djSEpsWm1sNFpYSW9KM1J5WVc1elptOXliU2NzZEhKMVpTa2dLeUFuT2ljZ0t5QjBjbUZ1YzJadmNtMVRkSEpwYm1jN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WMGRYSnVJSEJ5YjNCbGNuUjVVM1J5YVc1bk8xeHVmVHNpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9jc3MvYnVpbGQuanNcbiAqKiBtb2R1bGUgaWQgPSA0MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vLi4vaW5jL3V0aWxzJyk7XG5cbnZhciBjYW1lbENhY2hlID0ge307XG52YXIgZGFzaENhY2hlID0ge307XG52YXIgcHJlZml4ZXMgPSBbJ1dlYmtpdCcsICdNb3onLCAnTycsICdtcycsICcnXTtcbnZhciBudW1QcmVmaXhlcyA9IHByZWZpeGVzLmxlbmd0aDtcbnZhciB0ZXN0RWxlbWVudCA9IHZvaWQgMDtcblxuLypcbiAgICBUZXN0IHN0eWxlIHByb3BlcnR5IGZvciBwcmVmaXhlZCB2ZXJzaW9uXG4gICAgXG4gICAgQHBhcmFtIFtzdHJpbmddOiBTdHlsZSBwcm9wZXJ0eVxuICAgIEByZXR1cm4gW3N0cmluZ106IENhY2hlZCBwcm9wZXJ0eSBuYW1lXG4qL1xudmFyIHRlc3RQcmVmaXggPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgdGVzdEVsZW1lbnQgPSB0ZXN0RWxlbWVudCB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtUHJlZml4ZXM7IGkrKykge1xuICAgICAgICB2YXIgcHJlZml4ID0gcHJlZml4ZXNbaV07XG4gICAgICAgIHZhciBub1ByZWZpeCA9IHByZWZpeCA9PT0gJyc7XG4gICAgICAgIHZhciBwcmVmaXhlZFByb3BlcnR5TmFtZSA9IG5vUHJlZml4ID8ga2V5IDogcHJlZml4ICsga2V5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsga2V5LnNsaWNlKDEpO1xuXG4gICAgICAgIGlmIChwcmVmaXhlZFByb3BlcnR5TmFtZSBpbiB0ZXN0RWxlbWVudC5zdHlsZSkge1xuICAgICAgICAgICAgY2FtZWxDYWNoZVtrZXldID0gcHJlZml4ZWRQcm9wZXJ0eU5hbWU7XG4gICAgICAgICAgICBkYXNoQ2FjaGVba2V5XSA9ICcnICsgKG5vUHJlZml4ID8gJycgOiAnLScpICsgKDAsIF91dGlscy5jYW1lbFRvRGFzaCkocHJlZml4ZWRQcm9wZXJ0eU5hbWUpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGtleSwgYXNEYXNoQ2FzZSkge1xuICAgIHZhciBjYWNoZSA9IGFzRGFzaENhc2UgPyBkYXNoQ2FjaGUgOiBjYW1lbENhY2hlO1xuXG4gICAgaWYgKCFjYWNoZVtrZXldKSB7XG4gICAgICAgIHRlc3RQcmVmaXgoa2V5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2FjaGVba2V5XTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwyTnpjeTl3Y21WbWFYaGxjaTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN08wRkJRVUU3TzBGQlJVRXNTVUZCVFN4aFFVRmhMRVZCUVdJN1FVRkRUaXhKUVVGTkxGbEJRVmtzUlVGQldqdEJRVU5PTEVsQlFVMHNWMEZCVnl4RFFVRkRMRkZCUVVRc1JVRkJWU3hMUVVGV0xFVkJRV2RDTEVkQlFXaENMRVZCUVc5Q0xFbEJRWEJDTEVWQlFUQkNMRVZCUVRGQ0xFTkJRVmc3UVVGRFRpeEpRVUZOTEdOQlFXTXNVMEZCVXl4TlFVRlVPMEZCUTNCQ0xFbEJRVWtzYjBKQlFVbzdPenM3T3pzN08wRkJVVUVzU1VGQlRTeGhRVUZoTEZWQlFVTXNSMEZCUkN4RlFVRlRPMEZCUTNoQ0xHdENRVUZqTEdWQlFXVXNVMEZCVXl4aFFVRlVMRU5CUVhWQ0xFdEJRWFpDTEVOQlFXWXNRMEZFVlRzN1FVRkhlRUlzVTBGQlN5eEpRVUZKTEVsQlFVa3NRMEZCU2l4RlFVRlBMRWxCUVVrc1YwRkJTaXhGUVVGcFFpeEhRVUZxUXl4RlFVRnpRenRCUVVOc1F5eFpRVUZOTEZOQlFWTXNVMEZCVXl4RFFVRlVMRU5CUVZRc1EwRkVORUk3UVVGRmJFTXNXVUZCVFN4WFFVRlpMRmRCUVZjc1JVRkJXQ3hEUVVablFqdEJRVWRzUXl4WlFVRk5MSFZDUVVGMVFpeFhRVUZYTEVkQlFWZ3NSMEZCYVVJc1UwRkJVeXhKUVVGSkxFMUJRVW9zUTBGQlZ5eERRVUZZTEVWQlFXTXNWMEZCWkN4RlFVRlVMRWRCUVhWRExFbEJRVWtzUzBGQlNpeERRVUZWTEVOQlFWWXNRMEZCZGtNc1EwRklXanM3UVVGTGJFTXNXVUZCU1N4M1FrRkJkMElzV1VGQldTeExRVUZhTEVWQlFXMUNPMEZCUXpORExIVkNRVUZYTEVkQlFWZ3NTVUZCYTBJc2IwSkJRV3hDTEVOQlJESkRPMEZCUlRORExITkNRVUZWTEVkQlFWWXNWVUZCY1VJc1YwRkJWeXhGUVVGWUxFZEJRV2RDTEVkQlFXaENMRWxCUVhWQ0xIZENRVUZaTEc5Q1FVRmFMRU5CUVRWRExFTkJSakpETzFOQlFTOURPMHRCVEVvN1EwRklaVHM3YTBKQlpVb3NWVUZCUXl4SFFVRkVMRVZCUVUwc1ZVRkJUaXhGUVVGeFFqdEJRVU5vUXl4UlFVRk5MRkZCUVZFc1lVRkJZU3hUUVVGaUxFZEJRWGxDTEZWQlFYcENMRU5CUkd0Q096dEJRVWRvUXl4UlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGT0xFTkJRVVFzUlVGQllUdEJRVU5pTEcxQ1FVRlhMRWRCUVZnc1JVRkVZVHRMUVVGcVFqczdRVUZKUVN4WFFVRlBMRTFCUVUwc1IwRkJUaXhEUVVGUUxFTkJVR2RETzBOQlFYSkNJaXdpWm1sc1pTSTZJbkJ5WldacGVHVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwTDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3SUdOaGJXVnNWRzlFWVhOb0lIMGdabkp2YlNBbkxpNHZMaTR2YVc1akwzVjBhV3h6Snp0Y2JseHVZMjl1YzNRZ1kyRnRaV3hEWVdOb1pTQTlJSHQ5TzF4dVkyOXVjM1FnWkdGemFFTmhZMmhsSUQwZ2UzMDdYRzVqYjI1emRDQndjbVZtYVhobGN5QTlJRnNuVjJWaWEybDBKeXduVFc5Nkp5d25UeWNzSjIxekp5d2dKeWRkTzF4dVkyOXVjM1FnYm5WdFVISmxabWw0WlhNZ1BTQndjbVZtYVhobGN5NXNaVzVuZEdnN1hHNXNaWFFnZEdWemRFVnNaVzFsYm5RN1hHNWNiaThxWEc0Z0lDQWdWR1Z6ZENCemRIbHNaU0J3Y205d1pYSjBlU0JtYjNJZ2NISmxabWw0WldRZ2RtVnljMmx2Ymx4dUlDQWdJRnh1SUNBZ0lFQndZWEpoYlNCYmMzUnlhVzVuWFRvZ1UzUjViR1VnY0hKdmNHVnlkSGxjYmlBZ0lDQkFjbVYwZFhKdUlGdHpkSEpwYm1kZE9pQkRZV05vWldRZ2NISnZjR1Z5ZEhrZ2JtRnRaVnh1S2k5Y2JtTnZibk4wSUhSbGMzUlFjbVZtYVhnZ1BTQW9hMlY1S1NBOVBpQjdYRzRnSUNBZ2RHVnpkRVZzWlcxbGJuUWdQU0IwWlhOMFJXeGxiV1Z1ZENCOGZDQmtiMk4xYldWdWRDNWpjbVZoZEdWRmJHVnRaVzUwS0Nka2FYWW5LVHRjYmx4dUlDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnYm5WdFVISmxabWw0WlhNN0lHa3JLeWtnZTF4dUlDQWdJQ0FnSUNCamIyNXpkQ0J3Y21WbWFYZ2dQU0J3Y21WbWFYaGxjMXRwWFR0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnYm05UWNtVm1hWGdnUFNBb2NISmxabWw0SUQwOVBTQW5KeWs3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJSEJ5WldacGVHVmtVSEp2Y0dWeWRIbE9ZVzFsSUQwZ2JtOVFjbVZtYVhnZ1B5QnJaWGtnT2lCd2NtVm1hWGdnS3lCclpYa3VZMmhoY2tGMEtEQXBMblJ2VlhCd1pYSkRZWE5sS0NrZ0t5QnJaWGt1YzJ4cFkyVW9NU2s3WEc1Y2JpQWdJQ0FnSUNBZ2FXWWdLSEJ5WldacGVHVmtVSEp2Y0dWeWRIbE9ZVzFsSUdsdUlIUmxjM1JGYkdWdFpXNTBMbk4wZVd4bEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCallXMWxiRU5oWTJobFcydGxlVjBnUFNCd2NtVm1hWGhsWkZCeWIzQmxjblI1VG1GdFpUdGNiaUFnSUNBZ0lDQWdJQ0FnSUdSaGMyaERZV05vWlZ0clpYbGRJRDBnWUNSN0tHNXZVSEpsWm1sNElEOGdKeWNnT2lBbkxTY3BmU1I3WTJGdFpXeFViMFJoYzJnb2NISmxabWw0WldSUWNtOXdaWEowZVU1aGJXVXBmV0E3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1OU8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQW9hMlY1TENCaGMwUmhjMmhEWVhObEtTQTlQaUI3WEc0Z0lDQWdZMjl1YzNRZ1kyRmphR1VnUFNCaGMwUmhjMmhEWVhObElEOGdaR0Z6YUVOaFkyaGxJRG9nWTJGdFpXeERZV05vWlR0Y2JseHVJQ0FnSUdsbUlDZ2hZMkZqYUdWYmEyVjVYU2tnZTF4dUlDQWdJQ0FnSUNCMFpYTjBVSEpsWm1sNEtHdGxlU2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjbVYwZFhKdUlHTmhZMmhsVzJ0bGVWMDdYRzU5TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FkYXB0ZXIvY3NzL3ByZWZpeGVyLmpzXG4gKiogbW9kdWxlIGlkID0gNDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9kaWN0aW9uYXJ5ID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvc2V0dGluZ3MvZGljdGlvbmFyeScpO1xuXG52YXIgdHJhbnNmb3JtUHJvcHMgPSB7fTtcblxudmFyIFNDQUxFID0gJ3NjYWxlJztcbnZhciBST1RBVEUgPSAncm90YXRlJztcbnZhciBUUkFOU0ZPUk1fUEVSU1BFQ1RJVkUgPSAndHJhbnNmb3JtUGVyc3BlY3RpdmUnO1xudmFyIFRFUk1TID0gWyd0cmFuc2xhdGUnLCBTQ0FMRSwgUk9UQVRFLCAnc2tldycsIFRSQU5TRk9STV9QRVJTUEVDVElWRV07XG5cbnRyYW5zZm9ybVByb3BzW1JPVEFURV0gPSB0cmFuc2Zvcm1Qcm9wc1tTQ0FMRV0gPSB0cmFuc2Zvcm1Qcm9wc1tUUkFOU0ZPUk1fUEVSU1BFQ1RJVkVdID0gdHJ1ZTtcblxuVEVSTVMuZm9yRWFjaChmdW5jdGlvbiAodGVybSkge1xuICByZXR1cm4gX2RpY3Rpb25hcnkuYXhlcy5mb3JFYWNoKGZ1bmN0aW9uIChheGlzKSB7XG4gICAgcmV0dXJuIHRyYW5zZm9ybVByb3BzW3Rlcm0gKyBheGlzXSA9IHRydWU7XG4gIH0pO1xufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHRyYW5zZm9ybVByb3BzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMMk56Y3k5MGNtRnVjMlp2Y20wdGNISnZjSE11YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dEJRVUZCT3p0QlFVVkJMRWxCUVVrc2FVSkJRV2xDTEVWQlFXcENPenRCUVVWS0xFbEJRVTBzVVVGQlVTeFBRVUZTTzBGQlEwNHNTVUZCVFN4VFFVRlRMRkZCUVZRN1FVRkRUaXhKUVVGTkxIZENRVUYzUWl4elFrRkJlRUk3UVVGRFRpeEpRVUZOTEZGQlFWRXNRMEZCUXl4WFFVRkVMRVZCUVdNc1MwRkJaQ3hGUVVGeFFpeE5RVUZ5UWl4RlFVRTJRaXhOUVVFM1FpeEZRVUZ4UXl4eFFrRkJja01zUTBGQlVqczdRVUZGVGl4bFFVRmxMRTFCUVdZc1NVRkJlVUlzWlVGQlpTeExRVUZtTEVsQlFYZENMR1ZCUVdVc2NVSkJRV1lzU1VGQmQwTXNTVUZCZUVNN08wRkJSV3BFTEUxQlFVMHNUMEZCVGl4RFFVRmpMRlZCUVVNc1NVRkJSRHRUUVVGVkxHbENRVUZMTEU5QlFVd3NRMEZCWVN4VlFVRkRMRWxCUVVRN1YwRkJWU3hsUVVGbExFOUJRVThzU1VGQlVDeERRVUZtTEVkQlFUaENMRWxCUVRsQ08wZEJRVlk3UTBGQmRrSXNRMEZCWkRzN2EwSkJSV1VpTENKbWFXeGxJam9pZEhKaGJuTm1iM0p0TFhCeWIzQnpMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwTDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3SUdGNFpYTWdmU0JtY205dElDY3VMaTh1TGk5MllXeDFaUzEwZVhCbGN5OXpaWFIwYVc1bmN5OWthV04wYVc5dVlYSjVKenRjYmx4dWJHVjBJSFJ5WVc1elptOXliVkJ5YjNCeklEMGdlMzA3WEc1Y2JtTnZibk4wSUZORFFVeEZJRDBnSjNOallXeGxKenRjYm1OdmJuTjBJRkpQVkVGVVJTQTlJQ2R5YjNSaGRHVW5PMXh1WTI5dWMzUWdWRkpCVGxOR1QxSk5YMUJGVWxOUVJVTlVTVlpGSUQwZ0ozUnlZVzV6Wm05eWJWQmxjbk53WldOMGFYWmxKenRjYm1OdmJuTjBJRlJGVWsxVElEMGdXeWQwY21GdWMyeGhkR1VuTENCVFEwRk1SU3dnVWs5VVFWUkZMQ0FuYzJ0bGR5Y3NJRlJTUVU1VFJrOVNUVjlRUlZKVFVFVkRWRWxXUlYwN1hHNWNiblJ5WVc1elptOXliVkJ5YjNCelcxSlBWRUZVUlYwZ1BTQjBjbUZ1YzJadmNtMVFjbTl3YzF0VFEwRk1SVjBnUFNCMGNtRnVjMlp2Y20xUWNtOXdjMXRVVWtGT1UwWlBVazFmVUVWU1UxQkZRMVJKVmtWZElEMGdkSEoxWlR0Y2JseHVWRVZTVFZNdVptOXlSV0ZqYUNnb2RHVnliU2tnUFQ0Z1lYaGxjeTVtYjNKRllXTm9LQ2hoZUdsektTQTlQaUIwY21GdWMyWnZjbTFRY205d2MxdDBaWEp0SUNzZ1lYaHBjMTBnUFNCMGNuVmxLU2s3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUhSeVlXNXpabTl5YlZCeWIzQnpPeUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9jc3MvdHJhbnNmb3JtLXByb3BzLmpzXG4gKiogbW9kdWxlIGlkID0gNDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8qXG4gICAgQ29udmVydCBwZXJjZW50YWdlIHRvIHBpeGVsc1xuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogUGVyY2VudGFnZSBvZiB0b3RhbCBsZW5ndGhcbiAgICBAcGFyYW0gW251bWJlcl06IFRvdGFsIGxlbmd0aFxuKi9cbnZhciBwZXJjZW50VG9QaXhlbHMgPSBmdW5jdGlvbiAocGVyY2VudCwgbGVuZ3RoKSB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQocGVyY2VudCkgLyAxMDAgKiBsZW5ndGggKyAncHgnO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHN0YXRlLCBsZW5ndGgpIHtcbiAgICB2YXIgc3R5bGVzID0ge307XG4gICAgdmFyIGRhc2hBcnJheVN0eWxlcyA9IHtcbiAgICAgICAgbGVuZ3RoOiAwLFxuICAgICAgICBzcGFjaW5nOiBsZW5ndGggKyAncHgnXG4gICAgfTtcbiAgICB2YXIgaGFzRGFzaEFycmF5ID0gZmFsc2U7XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc3RhdGUpIHtcbiAgICAgICAgaWYgKHN0YXRlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHN0YXRlW2tleV07XG5cbiAgICAgICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnbGVuZ3RoJzpcbiAgICAgICAgICAgICAgICBjYXNlICdzcGFjaW5nJzpcbiAgICAgICAgICAgICAgICAgICAgaGFzRGFzaEFycmF5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgZGFzaEFycmF5U3R5bGVzW2tleV0gPSBwZXJjZW50VG9QaXhlbHModmFsdWUsIGxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ29mZnNldCc6XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlc1snc3Ryb2tlLWRhc2hvZmZzZXQnXSA9IHBlcmNlbnRUb1BpeGVscygtdmFsdWUsIGxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlc1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaGFzRGFzaEFycmF5KSB7XG4gICAgICAgIHN0eWxlc1snc3Ryb2tlLWRhc2hhcnJheSddID0gZGFzaEFycmF5U3R5bGVzLmxlbmd0aCArICcgJyArIGRhc2hBcnJheVN0eWxlcy5zcGFjaW5nO1xuICAgIH1cblxuICAgIHJldHVybiBzdHlsZXM7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMM04yWnkxd1lYUm9MMkoxYVd4a0xtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN096dEJRVTFCTEVsQlFVMHNhMEpCUVd0Q0xGVkJRVU1zVDBGQlJDeEZRVUZWTEUxQlFWWTdWMEZCY1VJc1ZVRkJReXhEUVVGWExFOUJRVmdzU1VGQmMwSXNSMEZCZEVJc1IwRkJOa0lzVFVGQk9VSXNSMEZCZFVNc1NVRkJka003UTBGQmNrSTdPMnRDUVVWVUxGVkJRVU1zUzBGQlJDeEZRVUZSTEUxQlFWSXNSVUZCYlVJN1FVRkRPVUlzVVVGQlRTeFRRVUZUTEVWQlFWUXNRMEZFZDBJN1FVRkZPVUlzVVVGQlRTeHJRa0ZCYTBJN1FVRkRjRUlzWjBKQlFWRXNRMEZCVWp0QlFVTkJMR2xDUVVGVExGTkJRVk1zU1VGQlZEdExRVVpRTEVOQlJuZENPMEZCVFRsQ0xGRkJRVWtzWlVGQlpTeExRVUZtTEVOQlRqQkNPenRCUVZFNVFpeFRRVUZMTEVsQlFVa3NSMEZCU2l4SlFVRlhMRXRCUVdoQ0xFVkJRWFZDTzBGQlEyNUNMRmxCUVVrc1RVRkJUU3hqUVVGT0xFTkJRWEZDTEVkQlFYSkNMRU5CUVVvc1JVRkJLMEk3UVVGRE0wSXNaMEpCUVUwc1VVRkJVU3hOUVVGTkxFZEJRVTRzUTBGQlVpeERRVVJ4UWpzN1FVRkhNMElzYjBKQlFWRXNSMEZCVWp0QlFVTkJMSEZDUVVGTExGRkJRVXdzUTBGRVFUdEJRVVZCTEhGQ1FVRkxMRk5CUVV3N1FVRkRTU3h0UTBGQlpTeEpRVUZtTEVOQlJFbzdRVUZGU1N4dlEwRkJaMElzUjBGQmFFSXNTVUZCZFVJc1owSkJRV2RDTEV0QlFXaENMRVZCUVhWQ0xFMUJRWFpDTEVOQlFYWkNMRU5CUmtvN1FVRkhTU3d3UWtGSVNqdEJRVVpCTEhGQ1FVMUxMRkZCUVV3N1FVRkRTU3d5UWtGQlR5eHRRa0ZCVUN4SlFVRTRRaXhuUWtGQlowSXNRMEZCUXl4TFFVRkVMRVZCUVZFc1RVRkJlRUlzUTBGQk9VSXNRMEZFU2p0QlFVVkpMREJDUVVaS08wRkJUa0U3UVVGVlNTd3lRa0ZCVHl4SFFVRlFMRWxCUVdNc1MwRkJaQ3hEUVVSS08wRkJWRUVzWVVGSU1rSTdVMEZCTDBJN1MwRkVTanM3UVVGdFFrRXNVVUZCU1N4WlFVRktMRVZCUVd0Q08wRkJRMlFzWlVGQlR5eHJRa0ZCVUN4SlFVRTJRaXhuUWtGQlowSXNUVUZCYUVJc1IwRkJlVUlzUjBGQmVrSXNSMEZCSzBJc1owSkJRV2RDTEU5QlFXaENMRU5CUkRsRE8wdEJRV3hDT3p0QlFVbEJMRmRCUVU4c1RVRkJVQ3hEUVM5Q09FSTdRMEZCYmtJaUxDSm1hV3hsSWpvaVluVnBiR1F1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUx5cGNiaUFnSUNCRGIyNTJaWEowSUhCbGNtTmxiblJoWjJVZ2RHOGdjR2w0Wld4elhHNGdJQ0FnWEc0Z0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQlFaWEpqWlc1MFlXZGxJRzltSUhSdmRHRnNJR3hsYm1kMGFGeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVkc5MFlXd2diR1Z1WjNSb1hHNHFMMXh1WTI5dWMzUWdjR1Z5WTJWdWRGUnZVR2w0Wld4eklEMGdLSEJsY21ObGJuUXNJR3hsYm1kMGFDa2dQVDRnS0hCaGNuTmxSbXh2WVhRb2NHVnlZMlZ1ZENrZ0x5QXhNREFwSUNvZ2JHVnVaM1JvSUNzZ0ozQjRKenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnS0hOMFlYUmxMQ0JzWlc1bmRHZ3BJRDArSUh0Y2JpQWdJQ0JqYjI1emRDQnpkSGxzWlhNZ1BTQjdmVHRjYmlBZ0lDQmpiMjV6ZENCa1lYTm9RWEp5WVhsVGRIbHNaWE1nUFNCN1hHNGdJQ0FnSUNBZ0lHeGxibWQwYURvZ01DeGNiaUFnSUNBZ0lDQWdjM0JoWTJsdVp6b2diR1Z1WjNSb0lDc2dKM0I0SjF4dUlDQWdJSDA3WEc0Z0lDQWdiR1YwSUdoaGMwUmhjMmhCY25KaGVTQTlJR1poYkhObE8xeHVYRzRnSUNBZ1ptOXlJQ2hzWlhRZ2EyVjVJR2x1SUhOMFlYUmxLU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDaHpkR0YwWlM1b1lYTlBkMjVRY205d1pYSjBlU2hyWlhrcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0IyWVd4MVpTQTlJSE4wWVhSbFcydGxlVjA3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJSE4zYVhSamFDQW9hMlY1S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqWVhObElDZHNaVzVuZEdnbk9seHVJQ0FnSUNBZ0lDQWdJQ0FnWTJGelpTQW5jM0JoWTJsdVp5YzZYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhR0Z6UkdGemFFRnljbUY1SUQwZ2RISjFaVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JrWVhOb1FYSnlZWGxUZEhsc1pYTmJhMlY1WFNBOUlIQmxjbU5sYm5SVWIxQnBlR1ZzY3loMllXeDFaU3dnYkdWdVozUm9LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JpY21WaGF6dGNiaUFnSUNBZ0lDQWdJQ0FnSUdOaGMyVWdKMjltWm5ObGRDYzZYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjM1I1YkdWeld5ZHpkSEp2YTJVdFpHRnphRzltWm5ObGRDZGRJRDBnY0dWeVkyVnVkRlJ2VUdsNFpXeHpLQzEyWVd4MVpTd2diR1Z1WjNSb0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmljbVZoYXp0Y2JpQWdJQ0FnSUNBZ0lDQWdJR1JsWm1GMWJIUTZYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjM1I1YkdWelcydGxlVjBnUFNCMllXeDFaVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lHbG1JQ2hvWVhORVlYTm9RWEp5WVhrcElIdGNiaUFnSUNBZ0lDQWdjM1I1YkdWeld5ZHpkSEp2YTJVdFpHRnphR0Z5Y21GNUoxMGdQU0JrWVhOb1FYSnlZWGxUZEhsc1pYTXViR1Z1WjNSb0lDc2dKeUFuSUNzZ1pHRnphRUZ5Y21GNVUzUjViR1Z6TG5Od1lXTnBibWM3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjbVYwZFhKdUlITjBlV3hsY3p0Y2JuMDdJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hZGFwdGVyL3N2Zy1wYXRoL2J1aWxkLmpzXG4gKiogbW9kdWxlIGlkID0gNDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9hbHBoYSA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL2FscGhhJyk7XG5cbnZhciBfYWxwaGEyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWxwaGEpO1xuXG52YXIgX2NvbG9yID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvY29sb3InKTtcblxudmFyIF9jb2xvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb2xvcik7XG5cbnZhciBfY29tcGxleCA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL2NvbXBsZXgnKTtcblxudmFyIF9jb21wbGV4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbXBsZXgpO1xuXG52YXIgX3NjYWxlID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvc2NhbGUnKTtcblxudmFyIF9zY2FsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zY2FsZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBmaWxsOiBfY29sb3IyLmRlZmF1bHQsXG4gICAgc3Ryb2tlOiBfY29sb3IyLmRlZmF1bHQsXG4gICAgc2NhbGU6IF9zY2FsZTIuZGVmYXVsdCxcbiAgICBzY2FsZVg6IF9zY2FsZTIuZGVmYXVsdCxcbiAgICBzY2FsZVk6IF9zY2FsZTIuZGVmYXVsdCxcbiAgICBkOiBfY29tcGxleDIuZGVmYXVsdCxcbiAgICBwb2ludHM6IF9jb21wbGV4Mi5kZWZhdWx0LFxuICAgIG9wYWNpdHk6IF9hbHBoYTIuZGVmYXVsdCxcbiAgICBmaWxsT3BhY2l0eTogX2FscGhhMi5kZWZhdWx0LFxuICAgIHN0cm9rZU9wYWNpdHk6IF9hbHBoYTIuZGVmYXVsdFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFpHRndkR1Z5TDNOMlp5OTJZV3gxWlMxMGVYQmxMVzFoY0M1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPMEZCUVVFN096czdRVUZEUVRzN096dEJRVU5CT3pzN08wRkJRMEU3T3pzN096dHJRa0ZGWlR0QlFVTllMSGxDUVVSWE8wRkJSVmdzTWtKQlJsYzdRVUZIV0N3d1FrRklWenRCUVVsWUxESkNRVXBYTzBGQlMxZ3NNa0pCVEZjN1FVRk5XQ3gzUWtGT1Z6dEJRVTlZTERaQ1FWQlhPMEZCVVZnc05FSkJVbGM3UVVGVFdDeG5RMEZVVnp0QlFWVllMR3REUVZaWElpd2labWxzWlNJNkluWmhiSFZsTFhSNWNHVXRiV0Z3TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMEwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCaGJIQm9ZU0JtY205dElDY3VMaTh1TGk5MllXeDFaUzEwZVhCbGN5OWhiSEJvWVNjN1hHNXBiWEJ2Y25RZ1kyOXNiM0lnWm5KdmJTQW5MaTR2TGk0dmRtRnNkV1V0ZEhsd1pYTXZZMjlzYjNJbk8xeHVhVzF3YjNKMElHTnZiWEJzWlhnZ1puSnZiU0FuTGk0dkxpNHZkbUZzZFdVdGRIbHdaWE12WTI5dGNHeGxlQ2M3WEc1cGJYQnZjblFnYzJOaGJHVWdabkp2YlNBbkxpNHZMaTR2ZG1Gc2RXVXRkSGx3WlhNdmMyTmhiR1VuTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCN1hHNGdJQ0FnWm1sc2JEb2dZMjlzYjNJc1hHNGdJQ0FnYzNSeWIydGxPaUJqYjJ4dmNpeGNiaUFnSUNCelkyRnNaVG9nYzJOaGJHVXNYRzRnSUNBZ2MyTmhiR1ZZT2lCelkyRnNaU3hjYmlBZ0lDQnpZMkZzWlZrNklITmpZV3hsTEZ4dUlDQWdJR1E2SUdOdmJYQnNaWGdzWEc0Z0lDQWdjRzlwYm5Sek9pQmpiMjF3YkdWNExGeHVJQ0FnSUc5d1lXTnBkSGs2SUdGc2NHaGhMRnh1SUNBZ0lHWnBiR3hQY0dGamFYUjVPaUJoYkhCb1lTeGNiaUFnSUNCemRISnZhMlZQY0dGamFYUjVPaUJoYkhCb1lWeHVmVHNpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9zdmcvdmFsdWUtdHlwZS1tYXAuanNcbiAqKiBtb2R1bGUgaWQgPSA0NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gYnVpbGQ7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi8uLi9pbmMvdXRpbHMnKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wcyA9IHJlcXVpcmUoJy4uL2Nzcy90cmFuc2Zvcm0tcHJvcHMnKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2Zvcm1Qcm9wcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBaRVJPX05PVF9aRVJPID0gMC4wMDAxO1xuXG5mdW5jdGlvbiBidWlsZChzdGF0ZSwgZGF0YSkge1xuICAgIHZhciBoYXNUcmFuc2Zvcm0gPSBmYWxzZTtcbiAgICB2YXIgcHJvcHMgPSB7fTtcbiAgICB2YXIgc2NhbGUgPSBzdGF0ZS5zY2FsZSAhPT0gdW5kZWZpbmVkID8gc3RhdGUuc2NhbGUgfHwgWkVST19OT1RfWkVSTyA6IHN0YXRlLnNjYWxlWCB8fCAxO1xuICAgIHZhciBzY2FsZVkgPSBzdGF0ZS5zY2FsZVkgIT09IHVuZGVmaW5lZCA/IHN0YXRlLnNjYWxlWSB8fCBaRVJPX05PVF9aRVJPIDogc2NhbGUgfHwgMTtcbiAgICB2YXIgdHJhbnNmb3JtT3JpZ2luWCA9IGRhdGEud2lkdGggKiAoKHN0YXRlLm9yaWdpblggfHwgNTApIC8gMTAwKSArIGRhdGEueDtcbiAgICB2YXIgdHJhbnNmb3JtT3JpZ2luWSA9IGRhdGEuaGVpZ2h0ICogKChzdGF0ZS5vcmlnaW5ZIHx8IDUwKSAvIDEwMCkgKyBkYXRhLnk7XG4gICAgdmFyIHNjYWxlVHJhbnNmb3JtWCA9IC10cmFuc2Zvcm1PcmlnaW5YICogKHNjYWxlICogMSk7XG4gICAgdmFyIHNjYWxlVHJhbnNmb3JtWSA9IC10cmFuc2Zvcm1PcmlnaW5ZICogKHNjYWxlWSAqIDEpO1xuICAgIHZhciBzY2FsZVJlcGxhY2VYID0gdHJhbnNmb3JtT3JpZ2luWCAvIHNjYWxlO1xuICAgIHZhciBzY2FsZVJlcGxhY2VZID0gdHJhbnNmb3JtT3JpZ2luWSAvIHNjYWxlWTtcbiAgICB2YXIgdHJhbnNmb3JtID0ge1xuICAgICAgICB0cmFuc2xhdGU6ICd0cmFuc2xhdGUoJyArIHN0YXRlLnRyYW5zbGF0ZVggKyAnLCAnICsgc3RhdGUudHJhbnNsYXRlWSArICcpICcsXG4gICAgICAgIHNjYWxlOiAndHJhbnNsYXRlKCcgKyBzY2FsZVRyYW5zZm9ybVggKyAnLCAnICsgc2NhbGVUcmFuc2Zvcm1ZICsgJykgc2NhbGUoJyArIHNjYWxlICsgJywgJyArIHNjYWxlWSArICcpIHRyYW5zbGF0ZSgnICsgc2NhbGVSZXBsYWNlWCArICcsICcgKyBzY2FsZVJlcGxhY2VZICsgJykgJyxcbiAgICAgICAgcm90YXRlOiAncm90YXRlKCcgKyBzdGF0ZS5yb3RhdGUgKyAnLCAnICsgdHJhbnNmb3JtT3JpZ2luWCArICcsICcgKyB0cmFuc2Zvcm1PcmlnaW5ZICsgJykgJyxcbiAgICAgICAgc2tld1g6ICdza2V3WCgnICsgc3RhdGUuc2tld1ggKyAnKSAnLFxuICAgICAgICBza2V3WTogJ3NrZXdZKCcgKyBzdGF0ZS5za2V3WSArICcpICdcbiAgICB9O1xuXG4gICAgZm9yICh2YXIga2V5IGluIHN0YXRlKSB7XG4gICAgICAgIGlmIChzdGF0ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICBpZiAoX3RyYW5zZm9ybVByb3BzMi5kZWZhdWx0W2tleV0pIHtcbiAgICAgICAgICAgICAgICBoYXNUcmFuc2Zvcm0gPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcm9wc1soMCwgX3V0aWxzLmNhbWVsVG9EYXNoKShrZXkpXSA9IHN0YXRlW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaGFzVHJhbnNmb3JtKSB7XG4gICAgICAgIHByb3BzLnRyYW5zZm9ybSA9ICcnO1xuXG4gICAgICAgIGZvciAodmFyIF9rZXkgaW4gdHJhbnNmb3JtKSB7XG4gICAgICAgICAgICBpZiAodHJhbnNmb3JtLmhhc093blByb3BlcnR5KF9rZXkpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRlZmF1bHRWYWx1ZSA9IF9rZXkgPT09ICdzY2FsZScgPyAnMScgOiAnMCc7XG4gICAgICAgICAgICAgICAgcHJvcHMudHJhbnNmb3JtICs9IHRyYW5zZm9ybVtfa2V5XS5yZXBsYWNlKC91bmRlZmluZWQvZywgZGVmYXVsdFZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwcm9wcztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFpHRndkR1Z5TDNOMlp5OWlkV2xzWkM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdhMEpCUzNkQ096dEJRVXg0UWpzN1FVRkRRVHM3T3pzN08wRkJSVUVzU1VGQlRTeG5Ra0ZCWjBJc1RVRkJhRUk3TzBGQlJWTXNVMEZCVXl4TFFVRlVMRU5CUVdVc1MwRkJaaXhGUVVGelFpeEpRVUYwUWl4RlFVRTBRanRCUVVOMlF5eFJRVUZKTEdWQlFXVXNTMEZCWml4RFFVUnRRenRCUVVWMlF5eFJRVUZOTEZGQlFWRXNSVUZCVWl4RFFVWnBRenRCUVVkMlF5eFJRVUZOTEZGQlFWRXNUVUZCVFN4TFFVRk9MRXRCUVdkQ0xGTkJRV2hDTEVkQlFUUkNMRTFCUVUwc1MwRkJUaXhKUVVGbExHRkJRV1lzUjBGQkswSXNUVUZCVFN4TlFVRk9MRWxCUVdkQ0xFTkJRV2hDTEVOQlNHeERPMEZCU1haRExGRkJRVTBzVTBGQlV5eE5RVUZOTEUxQlFVNHNTMEZCYVVJc1UwRkJha0lzUjBGQk5rSXNUVUZCVFN4TlFVRk9MRWxCUVdkQ0xHRkJRV2hDTEVkQlFXZERMRk5CUVZNc1EwRkJWQ3hEUVVweVF6dEJRVXQyUXl4UlFVRk5MRzFDUVVGdFFpeExRVUZMTEV0QlFVd3NTVUZCWXl4RFFVRkRMRTFCUVUwc1QwRkJUaXhKUVVGcFFpeEZRVUZxUWl4RFFVRkVMRWRCUVhkQ0xFZEJRWGhDTEVOQlFXUXNSMEZCTmtNc1MwRkJTeXhEUVVGTUxFTkJUQzlDTzBGQlRYWkRMRkZCUVUwc2JVSkJRVzFDTEV0QlFVc3NUVUZCVEN4SlFVRmxMRU5CUVVNc1RVRkJUU3hQUVVGT0xFbEJRV2xDTEVWQlFXcENMRU5CUVVRc1IwRkJkMElzUjBGQmVFSXNRMEZCWml4SFFVRTRReXhMUVVGTExFTkJRVXdzUTBGT2FFTTdRVUZQZGtNc1VVRkJUU3hyUWtGQmEwSXNRMEZCUlN4blFrRkJSaXhKUVVGelFpeFJRVUZSTEVOQlFWSXNRMEZCZEVJc1EwRlFaVHRCUVZGMlF5eFJRVUZOTEd0Q1FVRnJRaXhEUVVGRkxHZENRVUZHTEVsQlFYTkNMRk5CUVZNc1EwRkJWQ3hEUVVGMFFpeERRVkpsTzBGQlUzWkRMRkZCUVUwc1owSkJRV2RDTEcxQ1FVRnRRaXhMUVVGdVFpeERRVlJwUWp0QlFWVjJReXhSUVVGTkxHZENRVUZuUWl4dFFrRkJiVUlzVFVGQmJrSXNRMEZXYVVJN1FVRlhka01zVVVGQlRTeFpRVUZaTzBGQlEyUXNhME5CUVhkQ0xFMUJRVTBzVlVGQlRpeFZRVUZ4UWl4TlFVRk5MRlZCUVU0c1QwRkJOME03UVVGRFFTdzRRa0ZCYjBJc2VVSkJRVzlDTEN0Q1FVRXdRaXhsUVVGVkxEQkNRVUZ4UWl4MVFrRkJhMElzYjBKQlFXNUlPMEZCUTBFc05FSkJRV3RDTEUxQlFVMHNUVUZCVGl4VlFVRnBRaXd3UWtGQmNVSXNkVUpCUVhoRU8wRkJRMEVzTUVKQlFXZENMRTFCUVUwc1MwRkJUaXhQUVVGb1FqdEJRVU5CTERCQ1FVRm5RaXhOUVVGTkxFdEJRVTRzVDBGQmFFSTdTMEZNUlN4RFFWaHBRenM3UVVGdFFuWkRMRk5CUVVzc1NVRkJTU3hIUVVGS0xFbEJRVmNzUzBGQmFFSXNSVUZCZFVJN1FVRkRia0lzV1VGQlNTeE5RVUZOTEdOQlFVNHNRMEZCY1VJc1IwRkJja0lzUTBGQlNpeEZRVUVyUWp0QlFVTXpRaXhuUWtGQlNTeDVRa0ZCWlN4SFFVRm1MRU5CUVVvc1JVRkJlVUk3UVVGRGNrSXNLMEpCUVdVc1NVRkJaaXhEUVVSeFFqdGhRVUY2UWl4TlFVVlBPMEZCUTBnc2MwSkJRVTBzZDBKQlFWa3NSMEZCV2l4RFFVRk9MRWxCUVRCQ0xFMUJRVTBzUjBGQlRpeERRVUV4UWl4RFFVUkhPMkZCUmxBN1UwRkVTanRMUVVSS096dEJRVlZCTEZGQlFVa3NXVUZCU2l4RlFVRnJRanRCUVVOa0xHTkJRVTBzVTBGQlRpeEhRVUZyUWl4RlFVRnNRaXhEUVVSak96dEJRVWRrTEdGQlFVc3NTVUZCU1N4SlFVRktMRWxCUVZjc1UwRkJhRUlzUlVGQk1rSTdRVUZEZGtJc1owSkJRVWtzVlVGQlZTeGpRVUZXTEVOQlFYbENMRWxCUVhwQ0xFTkJRVW9zUlVGQmJVTTdRVUZETDBJc2IwSkJRVTBzWlVGQlpTeEpRVUZETEV0QlFWRXNUMEZCVWl4SFFVRnRRaXhIUVVGd1FpeEhRVUV3UWl4SFFVRXhRaXhEUVVSVk8wRkJSUzlDTEhOQ1FVRk5MRk5CUVU0c1NVRkJiVUlzVlVGQlZTeEpRVUZXTEVWQlFXVXNUMEZCWml4RFFVRjFRaXhaUVVGMlFpeEZRVUZ4UXl4WlFVRnlReXhEUVVGdVFpeERRVVlyUWp0aFFVRnVRenRUUVVSS08wdEJTRW83TzBGQlYwRXNWMEZCVHl4TFFVRlFMRU5CZUVOMVF6dERRVUUxUWlJc0ltWnBiR1VpT2lKaWRXbHNaQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZXlCallXMWxiRlJ2UkdGemFDQjlJR1p5YjIwZ0p5NHVMeTR1TDJsdVl5OTFkR2xzY3ljN1hHNXBiWEJ2Y25RZ2RISmhibk5tYjNKdFVISnZjSE1nWm5KdmJTQW5MaTR2WTNOekwzUnlZVzV6Wm05eWJTMXdjbTl3Y3ljN1hHNWNibU52Ym5OMElGcEZVazlmVGs5VVgxcEZVazhnUFNBd0xqQXdNREU3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdaMWJtTjBhVzl1SUdKMWFXeGtLSE4wWVhSbExDQmtZWFJoS1NCN1hHNGdJQ0FnYkdWMElHaGhjMVJ5WVc1elptOXliU0E5SUdaaGJITmxPMXh1SUNBZ0lHTnZibk4wSUhCeWIzQnpJRDBnZTMwN1hHNGdJQ0FnWTI5dWMzUWdjMk5oYkdVZ1BTQnpkR0YwWlM1elkyRnNaU0FoUFQwZ2RXNWtaV1pwYm1Wa0lEOGdjM1JoZEdVdWMyTmhiR1VnZkh3Z1drVlNUMTlPVDFSZldrVlNUeUE2SUhOMFlYUmxMbk5qWVd4bFdDQjhmQ0F4TzF4dUlDQWdJR052Ym5OMElITmpZV3hsV1NBOUlITjBZWFJsTG5OallXeGxXU0FoUFQwZ2RXNWtaV1pwYm1Wa0lEOGdjM1JoZEdVdWMyTmhiR1ZaSUh4OElGcEZVazlmVGs5VVgxcEZVazhnT2lCelkyRnNaU0I4ZkNBeE8xeHVJQ0FnSUdOdmJuTjBJSFJ5WVc1elptOXliVTl5YVdkcGJsZ2dQU0JrWVhSaExuZHBaSFJvSUNvZ0tDaHpkR0YwWlM1dmNtbG5hVzVZSUh4OElEVXdLU0F2SURFd01Da2dLeUJrWVhSaExuZzdYRzRnSUNBZ1kyOXVjM1FnZEhKaGJuTm1iM0p0VDNKcFoybHVXU0E5SUdSaGRHRXVhR1ZwWjJoMElDb2dLQ2h6ZEdGMFpTNXZjbWxuYVc1WklIeDhJRFV3S1NBdklERXdNQ2tnS3lCa1lYUmhMbms3WEc0Z0lDQWdZMjl1YzNRZ2MyTmhiR1ZVY21GdWMyWnZjbTFZSUQwZ0xTQjBjbUZ1YzJadmNtMVBjbWxuYVc1WUlDb2dLSE5qWVd4bElDb2dNU2s3WEc0Z0lDQWdZMjl1YzNRZ2MyTmhiR1ZVY21GdWMyWnZjbTFaSUQwZ0xTQjBjbUZ1YzJadmNtMVBjbWxuYVc1WklDb2dLSE5qWVd4bFdTQXFJREVwTzF4dUlDQWdJR052Ym5OMElITmpZV3hsVW1Wd2JHRmpaVmdnUFNCMGNtRnVjMlp2Y20xUGNtbG5hVzVZSUM4Z2MyTmhiR1U3WEc0Z0lDQWdZMjl1YzNRZ2MyTmhiR1ZTWlhCc1lXTmxXU0E5SUhSeVlXNXpabTl5YlU5eWFXZHBibGtnTHlCelkyRnNaVms3WEc0Z0lDQWdZMjl1YzNRZ2RISmhibk5tYjNKdElEMGdlMXh1SUNBZ0lDQWdJQ0IwY21GdWMyeGhkR1U2SUdCMGNtRnVjMnhoZEdVb0pIdHpkR0YwWlM1MGNtRnVjMnhoZEdWWWZTd2dKSHR6ZEdGMFpTNTBjbUZ1YzJ4aGRHVlpmU2tnWUN4Y2JpQWdJQ0FnSUNBZ2MyTmhiR1U2SUdCMGNtRnVjMnhoZEdVb0pIdHpZMkZzWlZSeVlXNXpabTl5YlZoOUxDQWtlM05qWVd4bFZISmhibk5tYjNKdFdYMHBJSE5qWVd4bEtDUjdjMk5oYkdWOUxDQWtlM05qWVd4bFdYMHBJSFJ5WVc1emJHRjBaU2drZTNOallXeGxVbVZ3YkdGalpWaDlMQ0FrZTNOallXeGxVbVZ3YkdGalpWbDlLU0JnTEZ4dUlDQWdJQ0FnSUNCeWIzUmhkR1U2SUdCeWIzUmhkR1VvSkh0emRHRjBaUzV5YjNSaGRHVjlMQ0FrZTNSeVlXNXpabTl5YlU5eWFXZHBibGg5TENBa2UzUnlZVzV6Wm05eWJVOXlhV2RwYmxsOUtTQmdMRnh1SUNBZ0lDQWdJQ0J6YTJWM1dEb2dZSE5yWlhkWUtDUjdjM1JoZEdVdWMydGxkMWg5S1NCZ0xGeHVJQ0FnSUNBZ0lDQnphMlYzV1RvZ1lITnJaWGRaS0NSN2MzUmhkR1V1YzJ0bGQxbDlLU0JnWEc0Z0lDQWdmVHRjYmx4dUlDQWdJR1p2Y2lBb2JHVjBJR3RsZVNCcGJpQnpkR0YwWlNrZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvYzNSaGRHVXVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2EyVjVLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0hSeVlXNXpabTl5YlZCeWIzQnpXMnRsZVYwcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQm9ZWE5VY21GdWMyWnZjbTBnUFNCMGNuVmxPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCd2NtOXdjMXRqWVcxbGJGUnZSR0Z6YUNoclpYa3BYU0E5SUhOMFlYUmxXMnRsZVYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0JwWmlBb2FHRnpWSEpoYm5ObWIzSnRLU0I3WEc0Z0lDQWdJQ0FnSUhCeWIzQnpMblJ5WVc1elptOXliU0E5SUNjbk8xeHVYRzRnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR3RsZVNCcGJpQjBjbUZ1YzJadmNtMHBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2gwY21GdWMyWnZjbTB1YUdGelQzZHVVSEp2Y0dWeWRIa29hMlY1S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUdSbFptRjFiSFJXWVd4MVpTQTlJQ2hyWlhrZ1BUMDlJQ2R6WTJGc1pTY3BJRDhnSnpFbklEb2dKekFuTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhCeWIzQnpMblJ5WVc1elptOXliU0FyUFNCMGNtRnVjMlp2Y20xYmEyVjVYUzV5WlhCc1lXTmxLQzkxYm1SbFptbHVaV1F2Wnl3Z1pHVm1ZWFZzZEZaaGJIVmxLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lISmxkSFZ5YmlCd2NtOXdjenRjYm4waVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FkYXB0ZXIvc3ZnL2J1aWxkLmpzXG4gKiogbW9kdWxlIGlkID0gNDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciByZ2IgPSBleHBvcnRzLnJnYiA9IHtcbiAgICBtaW46IDAsXG4gICAgbWF4OiAyNTUsXG4gICAgcm91bmQ6IHRydWVcbn07XG5cbnZhciBvcGFjaXR5ID0gZXhwb3J0cy5vcGFjaXR5ID0ge1xuICAgIG1pbjogMCxcbiAgICBtYXg6IDFcbn07XG5cbnZhciBwZXJjZW50ID0gZXhwb3J0cy5wZXJjZW50ID0ge1xuICAgIG1pbjogMCxcbiAgICBtYXg6IDEwMCxcbiAgICB1bml0OiAnJSdcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTl6WlhSMGFXNW5jeTlrWldaaGRXeDBMWEJ5YjNCekxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenRCUVVGUExFbEJRVTBzYjBKQlFVMDdRVUZEWml4VFFVRkxMRU5CUVV3N1FVRkRRU3hUUVVGTExFZEJRVXc3UVVGRFFTeFhRVUZQTEVsQlFWQTdRMEZJVXpzN1FVRk5UaXhKUVVGTkxEUkNRVUZWTzBGQlEyNUNMRk5CUVVzc1EwRkJURHRCUVVOQkxGTkJRVXNzUTBGQlREdERRVVpUT3p0QlFVdE9MRWxCUVUwc05FSkJRVlU3UVVGRGJrSXNVMEZCU3l4RFFVRk1PMEZCUTBFc1UwRkJTeXhIUVVGTU8wRkJRMEVzVlVGQlRTeEhRVUZPTzBOQlNGTWlMQ0ptYVd4bElqb2laR1ZtWVhWc2RDMXdjbTl3Y3k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRDOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SmxlSEJ2Y25RZ1kyOXVjM1FnY21kaUlEMGdlMXh1SUNBZ0lHMXBiam9nTUN4Y2JpQWdJQ0J0WVhnNklESTFOU3hjYmlBZ0lDQnliM1Z1WkRvZ2RISjFaVnh1ZlR0Y2JseHVaWGh3YjNKMElHTnZibk4wSUc5d1lXTnBkSGtnUFNCN1hHNGdJQ0FnYldsdU9pQXdMRnh1SUNBZ0lHMWhlRG9nTVZ4dWZUdGNibHh1Wlhod2IzSjBJR052Ym5OMElIQmxjbU5sYm5RZ1BTQjdYRzRnSUNBZ2JXbHVPaUF3TEZ4dUlDQWdJRzFoZURvZ01UQXdMRnh1SUNBZ0lIVnVhWFE2SUNjbEoxeHVmVHNpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvc2V0dGluZ3MvZGVmYXVsdC1wcm9wcy5qc1xuICoqIG1vZHVsZSBpZCA9IDQ4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgWCA9ICdYJztcbnZhciBZID0gJ1knO1xudmFyIEFMUEhBID0gJ0FscGhhJztcblxudmFyIGF4ZXMgPSBleHBvcnRzLmF4ZXMgPSBbWCwgWSwgJ1onXTtcbnZhciByZ2IgPSBleHBvcnRzLnJnYiA9IFsnUmVkJywgJ0dyZWVuJywgJ0JsdWUnLCBBTFBIQV07XG52YXIgaHNsID0gZXhwb3J0cy5oc2wgPSBbJ0h1ZScsICdTYXR1cmF0aW9uJywgJ0xpZ2h0bmVzcycsIEFMUEhBXTtcbnZhciBwb3NpdGlvbnMgPSBleHBvcnRzLnBvc2l0aW9ucyA9IFsnVG9wJywgJ1JpZ2h0JywgJ0JvdHRvbScsICdMZWZ0J107XG52YXIgc2hhZG93ID0gZXhwb3J0cy5zaGFkb3cgPSBbWCwgWSwgJ1JhZGl1cycsICdTcHJlYWQnLCAnQ29sb3InXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OXpaWFIwYVc1bmN5OWthV04wYVc5dVlYSjVMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3p0QlFVRkJMRWxCUVUwc1NVRkJTU3hIUVVGS08wRkJRMDRzU1VGQlRTeEpRVUZKTEVkQlFVbzdRVUZEVGl4SlFVRk5MRkZCUVZFc1QwRkJVanM3UVVGRlF5eEpRVUZOTEhOQ1FVRlBMRU5CUVVNc1EwRkJSQ3hGUVVGSkxFTkJRVW9zUlVGQlR5eEhRVUZRTEVOQlFWQTdRVUZEVGl4SlFVRk5MRzlDUVVGTkxFTkJRVU1zUzBGQlJDeEZRVUZSTEU5QlFWSXNSVUZCYVVJc1RVRkJha0lzUlVGQmVVSXNTMEZCZWtJc1EwRkJUanRCUVVOT0xFbEJRVTBzYjBKQlFVMHNRMEZCUXl4TFFVRkVMRVZCUVZFc1dVRkJVaXhGUVVGelFpeFhRVUYwUWl4RlFVRnRReXhMUVVGdVF5eERRVUZPTzBGQlEwNHNTVUZCVFN4blEwRkJXU3hEUVVGRExFdEJRVVFzUlVGQlVTeFBRVUZTTEVWQlFXbENMRkZCUVdwQ0xFVkJRVEpDTEUxQlFUTkNMRU5CUVZvN1FVRkRUaXhKUVVGTkxEQkNRVUZUTEVOQlFVTXNRMEZCUkN4RlFVRkpMRU5CUVVvc1JVRkJUeXhSUVVGUUxFVkJRV2xDTEZGQlFXcENMRVZCUVRKQ0xFOUJRVE5DTEVOQlFWUWlMQ0ptYVd4bElqb2laR2xqZEdsdmJtRnllUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKamIyNXpkQ0JZSUQwZ0oxZ25PMXh1WTI5dWMzUWdXU0E5SUNkWkp6dGNibU52Ym5OMElFRk1VRWhCSUQwZ0owRnNjR2hoSnp0Y2JseHVaWGh3YjNKMElHTnZibk4wSUdGNFpYTWdQU0JiV0N3Z1dTd2dKMW9uWFR0Y2JtVjRjRzl5ZENCamIyNXpkQ0J5WjJJZ1BTQmJKMUpsWkNjc0lDZEhjbVZsYmljc0lDZENiSFZsSnl3Z1FVeFFTRUZkTzF4dVpYaHdiM0owSUdOdmJuTjBJR2h6YkNBOUlGc25TSFZsSnl3Z0oxTmhkSFZ5WVhScGIyNG5MQ0FuVEdsbmFIUnVaWE56Snl3Z1FVeFFTRUZkTzF4dVpYaHdiM0owSUdOdmJuTjBJSEJ2YzJsMGFXOXVjeUE5SUZzblZHOXdKeXdnSjFKcFoyaDBKeXdnSjBKdmRIUnZiU2NzSUNkTVpXWjBKMTA3WEc1bGVIQnZjblFnWTI5dWMzUWdjMmhoWkc5M0lEMGdXMWdzSUZrc0lDZFNZV1JwZFhNbkxDQW5VM0J5WldGa0p5d2dKME52Ykc5eUoxMDdJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kaWN0aW9uYXJ5LmpzXG4gKiogbW9kdWxlIGlkID0gNDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlRWFzaW5nRnVuY3Rpb247XG4vKlxuICAgIE1pcnJvciBlYXNpbmdcbiAgICBcbiAgICBNaXJyb3JzIHRoZSBwcm92aWRlZCBlYXNpbmcgZnVuY3Rpb24sIHVzZWQgaGVyZSBmb3IgbWlycm9yaW5nIGFuXG4gICAgZWFzZUluIGludG8gYW4gZWFzZUluT3V0XG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcywgZnJvbSAwIC0gMSwgb2YgY3VycmVudCBzaGlmdFxuICAgIEBwYXJhbSBbZnVuY3Rpb25dOiBUaGUgZWFzaW5nIGZ1bmN0aW9uIHRvIG1pcnJvclxuICAgIEByZXR1cm5zIFtudW1iZXJdOiBUaGUgZWFzaW5nLWFkanVzdGVkIGRlbHRhXG4qL1xudmFyIG1pcnJvckVhc2luZyA9IGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHByb2dyZXNzLCBzdHJlbmd0aCkge1xuICAgICAgICByZXR1cm4gcHJvZ3Jlc3MgPD0gMC41ID8gbWV0aG9kKDIgKiBwcm9ncmVzcywgc3RyZW5ndGgpIC8gMiA6ICgyIC0gbWV0aG9kKDIgKiAoMSAtIHByb2dyZXNzKSwgc3RyZW5ndGgpKSAvIDI7XG4gICAgfTtcbn07XG5cbi8qXG4gICAgUmV2ZXJzZSBlYXNpbmdcbiAgICBcbiAgICBSZXZlcnNlcyB0aGUgb3V0cHV0IG9mIHRoZSBwcm92aWRlZCBlYXNpbmcgZnVuY3Rpb24sIHVzZWQgZm9yIGZsaXBwaW5nIGVhc2VJblxuICAgIGN1cnZlIHRvIGFuIGVhc2VPdXQuXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcywgZnJvbSAwIC0gMSwgb2YgY3VycmVudCBzaGlmdFxuICAgIEBwYXJhbSBbZnVuY3Rpb25dOiBUaGUgZWFzaW5nIGZ1bmN0aW9uIHRvIHJldmVyc2VcbiAgICBAcmV0dXJucyBbbnVtYmVyXTogVGhlIGVhc2luZy1hZGp1c3RlZCBkZWx0YVxuKi9cbnZhciByZXZlcnNlRWFzaW5nID0gZnVuY3Rpb24gKG1ldGhvZCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAocHJvZ3Jlc3MsIHN0cmVuZ3RoKSB7XG4gICAgICAgIHJldHVybiAxIC0gbWV0aG9kKDEgLSBwcm9ncmVzcywgc3RyZW5ndGgpO1xuICAgIH07XG59O1xuXG4vKlxuICAgIEVhc2luZyBjbGFzc1xuXG4gICAgSWYgcHJvdmlkZWQgZWFzaW5nIGZ1bmN0aW9uLCByZXR1cm5zIGVhc2luZyBmdW5jdGlvbiB3aXRoIFxuICAgIGluL291dC9pbk91dCB2YXJpYXRpb25zXG5cbiAgICBJZiBwcm92aWRlZCBmb3VyIGFyZ3VtZW50cywgcmV0dXJucyBuZXcgQmV6aWVyIGNsYXNzIGluc3RlYWQuXG4qL1xuZnVuY3Rpb24gY3JlYXRlRWFzaW5nRnVuY3Rpb24obWV0aG9kKSB7XG4gICAgdmFyIGVhc2luZ0Z1bmN0aW9uID0gZnVuY3Rpb24gKHByb2dyZXNzLCBzdHJlbmd0aCkge1xuICAgICAgICByZXR1cm4gbWV0aG9kKHByb2dyZXNzLCBzdHJlbmd0aCk7XG4gICAgfTtcblxuICAgIGVhc2luZ0Z1bmN0aW9uLmluID0gZnVuY3Rpb24gKHByb2dyZXNzLCBzdHJlbmd0aCkge1xuICAgICAgICByZXR1cm4gbWV0aG9kKHByb2dyZXNzLCBzdHJlbmd0aCk7XG4gICAgfTtcbiAgICBlYXNpbmdGdW5jdGlvbi5vdXQgPSByZXZlcnNlRWFzaW5nKG1ldGhvZCk7XG4gICAgZWFzaW5nRnVuY3Rpb24uaW5PdXQgPSBtaXJyb3JFYXNpbmcobWV0aG9kKTtcblxuICAgIHJldHVybiBlYXNpbmdGdW5jdGlvbjtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDJWaGMybHVaeTlqY21WaGRHVXRaV0Z6YVc1bkxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenRyUWtGblEzZENPenM3T3pzN096czdPenRCUVhSQ2VFSXNTVUZCVFN4bFFVRmxMRlZCUVVNc1RVRkJSRHRYUVVGWkxGVkJRVU1zVVVGQlJDeEZRVUZYTEZGQlFWZzdaVUZCZDBJc1VVRkJReXhKUVVGWkxFZEJRVm9zUjBGQmJVSXNUMEZCVHl4SlFVRkpMRkZCUVVvc1JVRkJZeXhSUVVGeVFpeEpRVUZwUXl4RFFVRnFReXhIUVVGeFF5eERRVUZETEVsQlFVa3NUMEZCVHl4TFFVRkxMRWxCUVVrc1VVRkJTaXhEUVVGTUxFVkJRVzlDTEZGQlFUTkNMRU5CUVVvc1EwRkJSQ3hIUVVFMlF5eERRVUUzUXp0TFFVRnFSanREUVVGYU96czdPenM3T3pzN096czdRVUZaY2tJc1NVRkJUU3huUWtGQlowSXNWVUZCUXl4TlFVRkVPMWRCUVZrc1ZVRkJReXhSUVVGRUxFVkJRVmNzVVVGQldEdGxRVUYzUWl4SlFVRkpMRTlCUVU4c1NVRkJTU3hSUVVGS0xFVkJRV01zVVVGQmNrSXNRMEZCU2p0TFFVRjRRanREUVVGYU96czdPenM3T3pzN08wRkJWVkFzVTBGQlV5eHZRa0ZCVkN4RFFVRTRRaXhOUVVFNVFpeEZRVUZ6UXp0QlFVTnFSQ3hSUVVGSkxHbENRVUZwUWl4VlFVRkRMRkZCUVVRc1JVRkJWeXhSUVVGWU8yVkJRWGRDTEU5QlFVOHNVVUZCVUN4RlFVRnBRaXhSUVVGcVFqdExRVUY0UWl4RFFVUTBRanM3UVVGSGFrUXNiVUpCUVdVc1JVRkJaaXhIUVVGdlFpeFZRVUZETEZGQlFVUXNSVUZCVnl4UlFVRllPMlZCUVhkQ0xFOUJRVThzVVVGQlVDeEZRVUZwUWl4UlFVRnFRanRMUVVGNFFpeERRVWcyUWp0QlFVbHFSQ3h0UWtGQlpTeEhRVUZtTEVkQlFYRkNMR05CUVdNc1RVRkJaQ3hEUVVGeVFpeERRVXBwUkR0QlFVdHFSQ3h0UWtGQlpTeExRVUZtTEVkQlFYVkNMR0ZCUVdFc1RVRkJZaXhEUVVGMlFpeERRVXhwUkRzN1FVRlBha1FzVjBGQlR5eGpRVUZRTEVOQlVHbEVPME5CUVhSRElpd2labWxzWlNJNkltTnlaV0YwWlMxbFlYTnBibWN1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUx5cGNiaUFnSUNCTmFYSnliM0lnWldGemFXNW5YRzRnSUNBZ1hHNGdJQ0FnVFdseWNtOXljeUIwYUdVZ2NISnZkbWxrWldRZ1pXRnphVzVuSUdaMWJtTjBhVzl1TENCMWMyVmtJR2hsY21VZ1ptOXlJRzFwY25KdmNtbHVaeUJoYmx4dUlDQWdJR1ZoYzJWSmJpQnBiblJ2SUdGdUlHVmhjMlZKYms5MWRGeHVJQ0FnSUZ4dUlDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dVSEp2WjNKbGMzTXNJR1p5YjIwZ01DQXRJREVzSUc5bUlHTjFjbkpsYm5RZ2MyaHBablJjYmlBZ0lDQkFjR0Z5WVcwZ1cyWjFibU4wYVc5dVhUb2dWR2hsSUdWaGMybHVaeUJtZFc1amRHbHZiaUIwYnlCdGFYSnliM0pjYmlBZ0lDQkFjbVYwZFhKdWN5QmJiblZ0WW1WeVhUb2dWR2hsSUdWaGMybHVaeTFoWkdwMWMzUmxaQ0JrWld4MFlWeHVLaTljYm1OdmJuTjBJRzFwY25KdmNrVmhjMmx1WnlBOUlDaHRaWFJvYjJRcElEMCtJQ2h3Y205bmNtVnpjeXdnYzNSeVpXNW5kR2dwSUQwK0lDaHdjbTluY21WemN5QThQU0F3TGpVcElEOGdiV1YwYUc5a0tESWdLaUJ3Y205bmNtVnpjeXdnYzNSeVpXNW5kR2dwSUM4Z01pQTZJQ2d5SUMwZ2JXVjBhRzlrS0RJZ0tpQW9NU0F0SUhCeWIyZHlaWE56S1N3Z2MzUnlaVzVuZEdncEtTQXZJREk3WEc0Z0lDQWdJQ0FnSUZ4dUx5cGNiaUFnSUNCU1pYWmxjbk5sSUdWaGMybHVaMXh1SUNBZ0lGeHVJQ0FnSUZKbGRtVnljMlZ6SUhSb1pTQnZkWFJ3ZFhRZ2IyWWdkR2hsSUhCeWIzWnBaR1ZrSUdWaGMybHVaeUJtZFc1amRHbHZiaXdnZFhObFpDQm1iM0lnWm14cGNIQnBibWNnWldGelpVbHVYRzRnSUNBZ1kzVnlkbVVnZEc4Z1lXNGdaV0Z6WlU5MWRDNWNiaUFnSUNCY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRkJ5YjJkeVpYTnpMQ0JtY205dElEQWdMU0F4TENCdlppQmpkWEp5Wlc1MElITm9hV1owWEc0Z0lDQWdRSEJoY21GdElGdG1kVzVqZEdsdmJsMDZJRlJvWlNCbFlYTnBibWNnWm5WdVkzUnBiMjRnZEc4Z2NtVjJaWEp6WlZ4dUlDQWdJRUJ5WlhSMWNtNXpJRnR1ZFcxaVpYSmRPaUJVYUdVZ1pXRnphVzVuTFdGa2FuVnpkR1ZrSUdSbGJIUmhYRzRxTDF4dVkyOXVjM1FnY21WMlpYSnpaVVZoYzJsdVp5QTlJQ2h0WlhSb2IyUXBJRDArSUNod2NtOW5jbVZ6Y3l3Z2MzUnlaVzVuZEdncElEMCtJREVnTFNCdFpYUm9iMlFvTVNBdElIQnliMmR5WlhOekxDQnpkSEpsYm1kMGFDazdYRzVjYmk4cVhHNGdJQ0FnUldGemFXNW5JR05zWVhOelhHNWNiaUFnSUNCSlppQndjbTkyYVdSbFpDQmxZWE5wYm1jZ1puVnVZM1JwYjI0c0lISmxkSFZ5Ym5NZ1pXRnphVzVuSUdaMWJtTjBhVzl1SUhkcGRHZ2dYRzRnSUNBZ2FXNHZiM1YwTDJsdVQzVjBJSFpoY21saGRHbHZibk5jYmx4dUlDQWdJRWxtSUhCeWIzWnBaR1ZrSUdadmRYSWdZWEpuZFcxbGJuUnpMQ0J5WlhSMWNtNXpJRzVsZHlCQ1pYcHBaWElnWTJ4aGMzTWdhVzV6ZEdWaFpDNWNiaW92WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JtZFc1amRHbHZiaUJqY21WaGRHVkZZWE5wYm1kR2RXNWpkR2x2YmlodFpYUm9iMlFwSUh0Y2JpQWdJQ0JzWlhRZ1pXRnphVzVuUm5WdVkzUnBiMjRnUFNBb2NISnZaM0psYzNNc0lITjBjbVZ1WjNSb0tTQTlQaUJ0WlhSb2IyUW9jSEp2WjNKbGMzTXNJSE4wY21WdVozUm9LVHRjYmx4dUlDQWdJR1ZoYzJsdVowWjFibU4wYVc5dUxtbHVJRDBnS0hCeWIyZHlaWE56TENCemRISmxibWQwYUNrZ1BUNGdiV1YwYUc5a0tIQnliMmR5WlhOekxDQnpkSEpsYm1kMGFDazdYRzRnSUNBZ1pXRnphVzVuUm5WdVkzUnBiMjR1YjNWMElEMGdjbVYyWlhKelpVVmhjMmx1WnlodFpYUm9iMlFwTzF4dUlDQWdJR1ZoYzJsdVowWjFibU4wYVc5dUxtbHVUM1YwSUQwZ2JXbHljbTl5UldGemFXNW5LRzFsZEdodlpDazdYRzVjYmlBZ0lDQnlaWFIxY200Z1pXRnphVzVuUm5WdVkzUnBiMjQ3WEc1OVhHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL2Vhc2luZy9jcmVhdGUtZWFzaW5nLmpzXG4gKiogbW9kdWxlIGlkID0gNTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGN1YmljQmV6aWVyO1xuLypcbiAgICBCZXppZXIgZnVuY3Rpb24gZ2VuZXJhdG9yXG4gICAgICAgIFxuICAgIEdhw6t0YW4gUmVuYXVkZWF1J3MgQmV6aWVyRWFzaW5nXG4gICAgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nL2Jsb2IvbWFzdGVyL2luZGV4LmpzICBcbiAgICBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNpbmcvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICAgIFlvdSdyZSBhIGhlcm9cbiAgICBcbiAgICBVc2VcbiAgICBcbiAgICAgICAgdmFyIGVhc2VPdXQgPSBuZXcgQmV6aWVyKC4xNywuNjcsLjgzLC42NyksXG4gICAgICAgICAgICB4ID0gZWFzZU91dCgwLjUpOyAvLyByZXR1cm5zIDAuNjI3Li4uXG4qL1xuXG4vLyBDb25zdGFudHNcbnZhciBORVdUT05fSVRFUkFUSU9OUyA9IDg7XG52YXIgTkVXVE9OX01JTl9TTE9QRSA9IDAuMDAxO1xudmFyIFNVQkRJVklTSU9OX1BSRUNJU0lPTiA9IDAuMDAwMDAwMTtcbnZhciBTVUJESVZJU0lPTl9NQVhfSVRFUkFUSU9OUyA9IDEwO1xudmFyIEtfU1BMSU5FX1RBQkxFX1NJWkUgPSAxMTtcbnZhciBLX1NBTVBMRV9TVEVQX1NJWkUgPSAxLjAgLyAoS19TUExJTkVfVEFCTEVfU0laRSAtIDEuMCk7XG52YXIgRkxPQVRfMzJfU1VQUE9SVEVEID0gdHlwZW9mIEZsb2F0MzJBcnJheSAhPT0gJ3VuZGVmaW5lZCc7XG5cbi8vIEhlbHBlciBtZXRob2RzXG52YXIgYSA9IGZ1bmN0aW9uIChhMSwgYTIpIHtcbiAgICByZXR1cm4gMS4wIC0gMy4wICogYTIgKyAzLjAgKiBhMTtcbn07XG52YXIgYiA9IGZ1bmN0aW9uIChhMSwgYTIpIHtcbiAgICByZXR1cm4gMy4wICogYTIgLSA2LjAgKiBhMTtcbn07XG52YXIgYyA9IGZ1bmN0aW9uIChhMSkge1xuICAgIHJldHVybiAzLjAgKiBhMTtcbn07XG5cbnZhciBnZXRTbG9wZSA9IGZ1bmN0aW9uICh0LCBhMSwgYTIpIHtcbiAgICByZXR1cm4gMy4wICogYShhMSwgYTIpICogdCAqIHQgKyAyLjAgKiBiKGExLCBhMikgKiB0ICsgYyhhMSk7XG59O1xuXG52YXIgY2FsY0JlemllciA9IGZ1bmN0aW9uICh0LCBhMSwgYTIpIHtcbiAgICByZXR1cm4gKChhKGExLCBhMikgKiB0ICsgYihhMSwgYTIpKSAqIHQgKyBjKGExKSkgKiB0O1xufTtcblxuLypcbiAgICBDcmVhdGUgYSBjdWJpYyBiZXppZXIgcmVzb2x2ZXJcbiovXG5mdW5jdGlvbiBjdWJpY0JlemllcihtWDEsIG1ZMSwgbVgyLCBtWTIpIHtcbiAgICB2YXIgc2FtcGxlVmFsdWVzID0gRkxPQVRfMzJfU1VQUE9SVEVEID8gbmV3IEZsb2F0MzJBcnJheShLX1NQTElORV9UQUJMRV9TSVpFKSA6IG5ldyBBcnJheShLX1NQTElORV9UQUJMRV9TSVpFKTtcbiAgICB2YXIgX3ByZWNvbXB1dGVkID0gZmFsc2U7XG5cbiAgICB2YXIgYmluYXJ5U3ViZGl2aWRlID0gZnVuY3Rpb24gKGFYLCBhQSwgYUIpIHtcbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICB2YXIgY3VycmVudFggPSB2b2lkIDA7XG4gICAgICAgIHZhciBjdXJyZW50VCA9IHZvaWQgMDtcblxuICAgICAgICBkbyB7XG4gICAgICAgICAgICBjdXJyZW50VCA9IGFBICsgKGFCIC0gYUEpIC8gMi4wO1xuICAgICAgICAgICAgY3VycmVudFggPSBjYWxjQmV6aWVyKGN1cnJlbnRULCBtWDEsIG1YMikgLSBhWDtcbiAgICAgICAgICAgIGlmIChjdXJyZW50WCA+IDAuMCkge1xuICAgICAgICAgICAgICAgIGFCID0gY3VycmVudFQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFBID0gY3VycmVudFQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gd2hpbGUgKE1hdGguYWJzKGN1cnJlbnRYKSA+IFNVQkRJVklTSU9OX1BSRUNJU0lPTiAmJiArK2kgPCBTVUJESVZJU0lPTl9NQVhfSVRFUkFUSU9OUyk7XG5cbiAgICAgICAgcmV0dXJuIGN1cnJlbnRUO1xuICAgIH07XG5cbiAgICB2YXIgbmV3dG9uUmFwaHNvbkl0ZXJhdGUgPSBmdW5jdGlvbiAoYVgsIGFHdWVzc1QpIHtcbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICB2YXIgY3VycmVudFNsb3BlID0gMDtcbiAgICAgICAgdmFyIGN1cnJlbnRYID0gdm9pZCAwO1xuXG4gICAgICAgIGZvciAoOyBpIDwgTkVXVE9OX0lURVJBVElPTlM7ICsraSkge1xuICAgICAgICAgICAgY3VycmVudFNsb3BlID0gZ2V0U2xvcGUoYUd1ZXNzVCwgbVgxLCBtWDIpO1xuXG4gICAgICAgICAgICBpZiAoY3VycmVudFNsb3BlID09PSAwLjApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYUd1ZXNzVDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY3VycmVudFggPSBjYWxjQmV6aWVyKGFHdWVzc1QsIG1YMSwgbVgyKSAtIGFYO1xuICAgICAgICAgICAgYUd1ZXNzVCAtPSBjdXJyZW50WCAvIGN1cnJlbnRTbG9wZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhR3Vlc3NUO1xuICAgIH07XG5cbiAgICB2YXIgY2FsY1NhbXBsZVZhbHVlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBLX1NQTElORV9UQUJMRV9TSVpFOyArK2kpIHtcbiAgICAgICAgICAgIHNhbXBsZVZhbHVlc1tpXSA9IGNhbGNCZXppZXIoaSAqIEtfU0FNUExFX1NURVBfU0laRSwgbVgxLCBtWDIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHZhciBnZXRURm9yWCA9IGZ1bmN0aW9uIChhWCkge1xuICAgICAgICB2YXIgaW50ZXJ2YWxTdGFydCA9IDAuMDtcbiAgICAgICAgdmFyIGN1cnJlbnRTYW1wbGUgPSAxO1xuICAgICAgICB2YXIgbGFzdFNhbXBsZSA9IEtfU1BMSU5FX1RBQkxFX1NJWkUgLSAxO1xuICAgICAgICB2YXIgZGlzdCA9IDAuMDtcbiAgICAgICAgdmFyIGd1ZXNzRm9yVCA9IDAuMDtcbiAgICAgICAgdmFyIGluaXRpYWxTbG9wZSA9IDAuMDtcblxuICAgICAgICBmb3IgKDsgY3VycmVudFNhbXBsZSAhPSBsYXN0U2FtcGxlICYmIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSA8PSBhWDsgKytjdXJyZW50U2FtcGxlKSB7XG4gICAgICAgICAgICBpbnRlcnZhbFN0YXJ0ICs9IEtfU0FNUExFX1NURVBfU0laRTtcbiAgICAgICAgfVxuXG4gICAgICAgIC0tY3VycmVudFNhbXBsZTtcblxuICAgICAgICBkaXN0ID0gKGFYIC0gc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdKSAvIChzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZSArIDFdIC0gc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdKTtcbiAgICAgICAgZ3Vlc3NGb3JUID0gaW50ZXJ2YWxTdGFydCArIGRpc3QgKiBLX1NBTVBMRV9TVEVQX1NJWkU7XG5cbiAgICAgICAgaW5pdGlhbFNsb3BlID0gZ2V0U2xvcGUoZ3Vlc3NGb3JULCBtWDEsIG1YMik7XG5cbiAgICAgICAgLy8gSWYgc2xvcGUgaXMgZ3JlYXRlciB0aGFuIG1pblxuICAgICAgICBpZiAoaW5pdGlhbFNsb3BlID49IE5FV1RPTl9NSU5fU0xPUEUpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXd0b25SYXBoc29uSXRlcmF0ZShhWCwgZ3Vlc3NGb3JUKTtcbiAgICAgICAgICAgIC8vIFNsb3BlIGlzIGVxdWFsIHRvIG1pblxuICAgICAgICB9IGVsc2UgaWYgKGluaXRpYWxTbG9wZSA9PT0gMC4wKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGd1ZXNzRm9yVDtcbiAgICAgICAgICAgICAgICAvLyBTbG9wZSBpcyBsZXNzIHRoYW4gbWluXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYmluYXJ5U3ViZGl2aWRlKGFYLCBpbnRlcnZhbFN0YXJ0LCBpbnRlcnZhbFN0YXJ0ICsgS19TQU1QTEVfU1RFUF9TSVpFKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgfTtcblxuICAgIHZhciBwcmVjb21wdXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfcHJlY29tcHV0ZWQgPSB0cnVlO1xuICAgICAgICBpZiAobVgxICE9IG1ZMSB8fCBtWDIgIT0gbVkyKSB7XG4gICAgICAgICAgICBjYWxjU2FtcGxlVmFsdWVzKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIHJlc29sdmVyID0gZnVuY3Rpb24gKGFYKSB7XG4gICAgICAgIHZhciByZXR1cm5WYWx1ZSA9IHZvaWQgMDtcblxuICAgICAgICBpZiAoIV9wcmVjb21wdXRlZCkge1xuICAgICAgICAgICAgcHJlY29tcHV0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgbGluZWFyIGdyYWRpZW50LCByZXR1cm4gWCBhcyBUXG4gICAgICAgIGlmIChtWDEgPT09IG1ZMSAmJiBtWDIgPT09IG1ZMikge1xuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSBhWDtcblxuICAgICAgICAgICAgLy8gSWYgYXQgc3RhcnQsIHJldHVybiAwXG4gICAgICAgIH0gZWxzZSBpZiAoYVggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IDA7XG5cbiAgICAgICAgICAgICAgICAvLyBJZiBhdCBlbmQsIHJldHVybiAxXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFYID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblZhbHVlID0gMTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IGNhbGNCZXppZXIoZ2V0VEZvclgoYVgpLCBtWTEsIG1ZMik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXR1cm5WYWx1ZTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHJlc29sdmVyO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMlZoYzJsdVp5OWpjbVZoZEdVdFltVjZhV1Z5TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096dHJRa0Z0UTNkQ096czdPenM3T3pzN096czdPenM3TzBGQmNFSjRRaXhKUVVGTkxHOUNRVUZ2UWl4RFFVRndRanRCUVVOT0xFbEJRVTBzYlVKQlFXMUNMRXRCUVc1Q08wRkJRMDRzU1VGQlRTeDNRa0ZCZDBJc1UwRkJlRUk3UVVGRFRpeEpRVUZOTERaQ1FVRTJRaXhGUVVFM1FqdEJRVU5PTEVsQlFVMHNjMEpCUVhOQ0xFVkJRWFJDTzBGQlEwNHNTVUZCVFN4eFFrRkJjVUlzVDBGQlR5eHpRa0ZCYzBJc1IwRkJkRUlzUTBGQlVEdEJRVU16UWl4SlFVRk5MSEZDUVVGelFpeFBRVUZQTEZsQlFWQXNTMEZCZDBJc1YwRkJlRUk3T3p0QlFVYzFRaXhKUVVGTkxFbEJRVWtzVlVGQlF5eEZRVUZFTEVWQlFVc3NSVUZCVER0WFFVRlpMRTFCUVUwc1RVRkJUU3hGUVVGT0xFZEJRVmNzVFVGQlRTeEZRVUZPTzBOQlFUZENPMEZCUTFZc1NVRkJUU3hKUVVGSkxGVkJRVU1zUlVGQlJDeEZRVUZMTEVWQlFVdzdWMEZCV1N4TlFVRk5MRVZCUVU0c1IwRkJWeXhOUVVGTkxFVkJRVTQ3UTBGQmRrSTdRVUZEVml4SlFVRk5MRWxCUVVrc1ZVRkJReXhGUVVGRU8xZEJRVkVzVFVGQlRTeEZRVUZPTzBOQlFWSTdPMEZCUlZZc1NVRkJUU3hYUVVGWExGVkJRVU1zUTBGQlJDeEZRVUZKTEVWQlFVb3NSVUZCVVN4RlFVRlNPMWRCUVdVc1RVRkJUU3hGUVVGRkxFVkJRVVlzUlVGQlRTeEZRVUZPTEVOQlFVNHNSMEZCYTBJc1EwRkJiRUlzUjBGQmMwSXNRMEZCZEVJc1IwRkJNRUlzVFVGQlRTeEZRVUZGTEVWQlFVWXNSVUZCVFN4RlFVRk9MRU5CUVU0c1IwRkJhMElzUTBGQmJFSXNSMEZCYzBJc1JVRkJSU3hGUVVGR0xFTkJRV2hFTzBOQlFXWTdPMEZCUldwQ0xFbEJRVTBzWVVGQllTeFZRVUZETEVOQlFVUXNSVUZCU1N4RlFVRktMRVZCUVZFc1JVRkJVanRYUVVGbExFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVWXNSVUZCVFN4RlFVRk9MRWxCUVZrc1EwRkJXaXhIUVVGblFpeEZRVUZGTEVWQlFVWXNSVUZCVFN4RlFVRk9MRU5CUVdoQ0xFTkJRVVFzUjBGQk9FSXNRMEZCT1VJc1IwRkJhME1zUlVGQlJTeEZRVUZHTEVOQlFXeERMRU5CUVVRc1IwRkJORU1zUTBGQk5VTTdRMEZCWmpzN096czdRVUZMU2l4VFFVRlRMRmRCUVZRc1EwRkJjVUlzUjBGQmNrSXNSVUZCTUVJc1IwRkJNVUlzUlVGQkswSXNSMEZCTDBJc1JVRkJiME1zUjBGQmNFTXNSVUZCZVVNN1FVRkRjRVFzVVVGQlRTeGxRVUZsTEhGQ1FVRnhRaXhKUVVGSkxGbEJRVW9zUTBGQmFVSXNiVUpCUVdwQ0xFTkJRWEpDTEVkQlFUWkVMRWxCUVVrc1MwRkJTaXhEUVVGVkxHMUNRVUZXTEVOQlFUZEVMRU5CUkN0Q08wRkJSWEJFTEZGQlFVa3NaVUZCWlN4TFFVRm1MRU5CUm1kRU96dEJRVWx3UkN4UlFVRk5MR3RDUVVGclFpeFZRVUZETEVWQlFVUXNSVUZCU3l4RlFVRk1MRVZCUVZNc1JVRkJWQ3hGUVVGblFqdEJRVU53UXl4WlFVRkpMRWxCUVVrc1EwRkJTaXhEUVVSblF6dEJRVVZ3UXl4WlFVRkpMR2xDUVVGS0xFTkJSbTlETzBGQlIzQkRMRmxCUVVrc2FVSkJRVW9zUTBGSWIwTTdPMEZCUzNCRExGZEJRVWM3UVVGRFF5eDFRa0ZCVnl4TFFVRkxMRU5CUVVNc1MwRkJTeXhGUVVGTUxFTkJRVVFzUjBGQldTeEhRVUZhTEVOQlJHcENPMEZCUlVNc2RVSkJRVmNzVjBGQlZ5eFJRVUZZTEVWQlFYRkNMRWRCUVhKQ0xFVkJRVEJDTEVkQlFURkNMRWxCUVdsRExFVkJRV3BETEVOQlJsbzdRVUZIUXl4blFrRkJTU3hYUVVGWExFZEJRVmdzUlVGQlowSTdRVUZEYUVJc2NVSkJRVXNzVVVGQlRDeERRVVJuUWp0aFFVRndRaXhOUVVWUE8wRkJRMGdzY1VKQlFVc3NVVUZCVEN4RFFVUkhPMkZCUmxBN1UwRklTaXhSUVZGVExFdEJRVXNzUjBGQlRDeERRVUZUTEZGQlFWUXNTVUZCY1VJc2NVSkJRWEpDTEVsQlFUaERMRVZCUVVVc1EwRkJSaXhIUVVGTkxEQkNRVUZPTEVWQlltNUNPenRCUVdWd1F5eGxRVUZQTEZGQlFWQXNRMEZtYjBNN1MwRkJhRUlzUTBGS05FSTdPMEZCYzBKd1JDeFJRVUZOTEhWQ1FVRjFRaXhWUVVGRExFVkJRVVFzUlVGQlN5eFBRVUZNTEVWQlFXbENPMEZCUXpGRExGbEJRVWtzU1VGQlNTeERRVUZLTEVOQlJITkRPMEZCUlRGRExGbEJRVWtzWlVGQlpTeERRVUZtTEVOQlJuTkRPMEZCUnpGRExGbEJRVWtzYVVKQlFVb3NRMEZJTUVNN08wRkJTekZETEdWQlFVOHNTVUZCU1N4cFFrRkJTaXhGUVVGMVFpeEZRVUZGTEVOQlFVWXNSVUZCU3p0QlFVTXZRaXd5UWtGQlpTeFRRVUZUTEU5QlFWUXNSVUZCYTBJc1IwRkJiRUlzUlVGQmRVSXNSMEZCZGtJc1EwRkJaaXhEUVVRclFqczdRVUZITDBJc1owSkJRVWtzYVVKQlFXbENMRWRCUVdwQ0xFVkJRWE5DTzBGQlEzUkNMSFZDUVVGUExFOUJRVkFzUTBGRWMwSTdZVUZCTVVJN08wRkJTVUVzZFVKQlFWY3NWMEZCVnl4UFFVRllMRVZCUVc5Q0xFZEJRWEJDTEVWQlFYbENMRWRCUVhwQ0xFbEJRV2RETEVWQlFXaERMRU5CVUc5Q08wRkJVUzlDTEhWQ1FVRlhMRmRCUVZjc1dVRkJXQ3hEUVZKdlFqdFRRVUZ1UXpzN1FVRlhRU3hsUVVGUExFOUJRVkFzUTBGb1FqQkRPMHRCUVdwQ0xFTkJkRUoxUWpzN1FVRjVRM0JFTEZGQlFVMHNiVUpCUVcxQ0xGbEJRVTA3UVVGRE0wSXNZVUZCU3l4SlFVRkpMRWxCUVVrc1EwRkJTaXhGUVVGUExFbEJRVWtzYlVKQlFVb3NSVUZCZVVJc1JVRkJSU3hEUVVGR0xFVkJRVXM3UVVGRE1VTXNlVUpCUVdFc1EwRkJZaXhKUVVGclFpeFhRVUZYTEVsQlFVa3NhMEpCUVVvc1JVRkJkMElzUjBGQmJrTXNSVUZCZDBNc1IwRkJlRU1zUTBGQmJFSXNRMEZFTUVNN1UwRkJPVU03UzBGRWNVSXNRMEY2UXpKQ096dEJRU3REY0VRc1VVRkJUU3hYUVVGWExGVkJRVU1zUlVGQlJDeEZRVUZSTzBGQlEzSkNMRmxCUVVrc1owSkJRV2RDTEVkQlFXaENMRU5CUkdsQ08wRkJSWEpDTEZsQlFVa3NaMEpCUVdkQ0xFTkJRV2hDTEVOQlJtbENPMEZCUjNKQ0xGbEJRVWtzWVVGQllTeHpRa0ZCYzBJc1EwRkJkRUlzUTBGSVNUdEJRVWx5UWl4WlFVRkpMRTlCUVU4c1IwRkJVQ3hEUVVwcFFqdEJRVXR5UWl4WlFVRkpMRmxCUVZrc1IwRkJXaXhEUVV4cFFqdEJRVTF5UWl4WlFVRkpMR1ZCUVdVc1IwRkJaaXhEUVU1cFFqczdRVUZSY2tJc1pVRkJUeXhwUWtGQmFVSXNWVUZCYWtJc1NVRkJLMElzWVVGQllTeGhRVUZpTEV0QlFTdENMRVZCUVM5Q0xFVkJRVzFETEVWQlFVVXNZVUZCUml4RlFVRnBRanRCUVVOMFJpdzJRa0ZCYVVJc2EwSkJRV3BDTEVOQlJITkdPMU5CUVRGR096dEJRVWxCTEZWQlFVVXNZVUZCUml4RFFWcHhRanM3UVVGamNrSXNaVUZCVHl4RFFVRkRMRXRCUVVzc1lVRkJZU3hoUVVGaUxFTkJRVXdzUTBGQlJDeEpRVUZ6UXl4aFFVRmhMR2RDUVVGakxFTkJRV1FzUTBGQllpeEhRVUZuUXl4aFFVRmhMR0ZCUVdJc1EwRkJhRU1zUTBGQmRFTXNRMEZrWXp0QlFXVnlRaXh2UWtGQldTeG5Ra0ZCWjBJc1QwRkJUeXhyUWtGQlVDeERRV1pRT3p0QlFXbENja0lzZFVKQlFXVXNVMEZCVXl4VFFVRlVMRVZCUVc5Q0xFZEJRWEJDTEVWQlFYbENMRWRCUVhwQ0xFTkJRV1k3T3p0QlFXcENjVUlzV1VGdlFtcENMR2RDUVVGblFpeG5Ra0ZCYUVJc1JVRkJhME03UVVGRGJFTXNiVUpCUVU4c2NVSkJRWEZDTEVWQlFYSkNMRVZCUVhsQ0xGTkJRWHBDTEVOQlFWQTdPMEZCUkd0RExGTkJRWFJETEUxQlIwOHNTVUZCU1N4cFFrRkJhVUlzUjBGQmFrSXNSVUZCYzBJN1FVRkROMElzZFVKQlFVOHNVMEZCVURzN1FVRkVOa0lzWVVGQk1VSXNUVUZIUVR0QlFVTklMREpDUVVGUExHZENRVUZuUWl4RlFVRm9RaXhGUVVGdlFpeGhRVUZ3UWl4RlFVRnRReXhuUWtGQlowSXNhMEpCUVdoQ0xFTkJRVEZETEVOQlJFYzdhVUpCU0VFN1MwRjJRazBzUTBFdlEyMURPenRCUVRoRmNFUXNVVUZCVFN4aFFVRmhMRmxCUVUwN1FVRkRja0lzZFVKQlFXVXNTVUZCWml4RFFVUnhRanRCUVVWeVFpeFpRVUZKTEU5QlFVOHNSMEZCVUN4SlFVRmpMRTlCUVU4c1IwRkJVQ3hGUVVGWk8wRkJRekZDTEN0Q1FVUXdRanRUUVVFNVFqdExRVVpsTEVOQk9VVnBRenM3UVVGeFJuQkVMRkZCUVUwc1YwRkJWeXhWUVVGRExFVkJRVVFzUlVGQlVUdEJRVU55UWl4WlFVRkpMRzlDUVVGS0xFTkJSSEZDT3p0QlFVZHlRaXhaUVVGSkxFTkJRVU1zV1VGQlJDeEZRVUZsTzBGQlEyWXNlVUpCUkdVN1UwRkJia0k3T3p0QlFVaHhRaXhaUVZGcVFpeFJRVUZSTEVkQlFWSXNTVUZCWlN4UlFVRlJMRWRCUVZJc1JVRkJZVHRCUVVNMVFpd3dRa0ZCWXl4RlFVRmtPenM3UVVGRU5FSXNVMEZCYUVNc1RVRkpUeXhKUVVGSkxFOUJRVThzUTBGQlVDeEZRVUZWTzBGQlEycENMRGhDUVVGakxFTkJRV1E3T3p0QlFVUnBRaXhoUVVGa0xFMUJTVUVzU1VGQlNTeFBRVUZQTEVOQlFWQXNSVUZCVlR0QlFVTnFRaXhyUTBGQll5eERRVUZrTEVOQlJHbENPMmxDUVVGa0xFMUJSMEU3UVVGRFNDeHJRMEZCWXl4WFFVRlhMRk5CUVZNc1JVRkJWQ3hEUVVGWUxFVkJRWGxDTEVkQlFYcENMRVZCUVRoQ0xFZEJRVGxDTEVOQlFXUXNRMEZFUnp0cFFrRklRVHM3UVVGUFVDeGxRVUZQTEZkQlFWQXNRMEYyUW5GQ08wdEJRVklzUTBGeVJtMURPenRCUVN0SGNFUXNWMEZCVHl4UlFVRlFMRU5CTDBkdlJEdERRVUY2UXlJc0ltWnBiR1VpT2lKamNtVmhkR1V0WW1WNmFXVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwTDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk4cVhHNGdJQ0FnUW1WNmFXVnlJR1oxYm1OMGFXOXVJR2RsYm1WeVlYUnZjbHh1SUNBZ0lDQWdJQ0JjYmlBZ0lDQkhZY09yZEdGdUlGSmxibUYxWkdWaGRTZHpJRUpsZW1sbGNrVmhjMmx1WjF4dUlDQWdJR2gwZEhCek9pOHZaMmwwYUhWaUxtTnZiUzluY21VdlltVjZhV1Z5TFdWaGMybHVaeTlpYkc5aUwyMWhjM1JsY2k5cGJtUmxlQzVxY3lBZ1hHNGdJQ0FnYUhSMGNITTZMeTluYVhSb2RXSXVZMjl0TDJkeVpTOWlaWHBwWlhJdFpXRnphVzVuTDJKc2IySXZiV0Z6ZEdWeUwweEpRMFZPVTBWY2JpQWdJQ0JaYjNVbmNtVWdZU0JvWlhKdlhHNGdJQ0FnWEc0Z0lDQWdWWE5sWEc0Z0lDQWdYRzRnSUNBZ0lDQWdJSFpoY2lCbFlYTmxUM1YwSUQwZ2JtVjNJRUpsZW1sbGNpZ3VNVGNzTGpZM0xDNDRNeXd1TmpjcExGeHVJQ0FnSUNBZ0lDQWdJQ0FnZUNBOUlHVmhjMlZQZFhRb01DNDFLVHNnTHk4Z2NtVjBkWEp1Y3lBd0xqWXlOeTR1TGx4dUtpOWNibHh1THk4Z1EyOXVjM1JoYm5SelhHNWpiMjV6ZENCT1JWZFVUMDVmU1ZSRlVrRlVTVTlPVXlBOUlEZzdYRzVqYjI1emRDQk9SVmRVVDA1ZlRVbE9YMU5NVDFCRklEMGdNQzR3TURFN1hHNWpiMjV6ZENCVFZVSkVTVlpKVTBsUFRsOVFVa1ZEU1ZOSlQwNGdQU0F3TGpBd01EQXdNREU3WEc1amIyNXpkQ0JUVlVKRVNWWkpVMGxQVGw5TlFWaGZTVlJGVWtGVVNVOU9VeUE5SURFd08xeHVZMjl1YzNRZ1MxOVRVRXhKVGtWZlZFRkNURVZmVTBsYVJTQTlJREV4TzF4dVkyOXVjM1FnUzE5VFFVMVFURVZmVTFSRlVGOVRTVnBGSUQwZ01TNHdJQzhnS0V0ZlUxQk1TVTVGWDFSQlFreEZYMU5KV2tVZ0xTQXhMakFwTzF4dVkyOXVjM1FnUmt4UFFWUmZNekpmVTFWUVVFOVNWRVZFSUQwZ0tIUjVjR1Z2WmlCR2JHOWhkRE15UVhKeVlYa2dJVDA5SUNkMWJtUmxabWx1WldRbktUdGNibHh1THk4Z1NHVnNjR1Z5SUcxbGRHaHZaSE5jYm1OdmJuTjBJR0VnUFNBb1lURXNJR0V5S1NBOVBpQXhMakFnTFNBekxqQWdLaUJoTWlBcklETXVNQ0FxSUdFeE8xeHVZMjl1YzNRZ1lpQTlJQ2hoTVN3Z1lUSXBJRDArSURNdU1DQXFJR0V5SUMwZ05pNHdJQ29nWVRFN1hHNWpiMjV6ZENCaklEMGdLR0V4S1NBOVBpQXpMakFnS2lCaE1UdGNibHh1WTI5dWMzUWdaMlYwVTJ4dmNHVWdQU0FvZEN3Z1lURXNJR0V5S1NBOVBpQXpMakFnS2lCaEtHRXhMQ0JoTWlrZ0tpQjBJQ29nZENBcklESXVNQ0FxSUdJb1lURXNJR0V5S1NBcUlIUWdLeUJqS0dFeEtUdGNibHh1WTI5dWMzUWdZMkZzWTBKbGVtbGxjaUE5SUNoMExDQmhNU3dnWVRJcElEMCtJQ2dvWVNoaE1Td2dZVElwSUNvZ2RDQXJJR0lvWVRFc0lHRXlLU2tnS2lCMElDc2dZeWhoTVNrcElDb2dkRHRjYmx4dUx5cGNiaUFnSUNCRGNtVmhkR1VnWVNCamRXSnBZeUJpWlhwcFpYSWdjbVZ6YjJ4MlpYSmNiaW92WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JtZFc1amRHbHZiaUJqZFdKcFkwSmxlbWxsY2lodFdERXNJRzFaTVN3Z2JWZ3lMQ0J0V1RJcElIdGNiaUFnSUNCamIyNXpkQ0J6WVcxd2JHVldZV3gxWlhNZ1BTQkdURTlCVkY4ek1sOVRWVkJRVDFKVVJVUWdQeUJ1WlhjZ1JteHZZWFF6TWtGeWNtRjVLRXRmVTFCTVNVNUZYMVJCUWt4RlgxTkpXa1VwSURvZ2JtVjNJRUZ5Y21GNUtFdGZVMUJNU1U1RlgxUkJRa3hGWDFOSldrVXBPMXh1SUNBZ0lHeGxkQ0JmY0hKbFkyOXRjSFYwWldRZ1BTQm1ZV3h6WlR0Y2JseHVJQ0FnSUdOdmJuTjBJR0pwYm1GeWVWTjFZbVJwZG1sa1pTQTlJQ2hoV0N3Z1lVRXNJR0ZDS1NBOVBpQjdYRzRnSUNBZ0lDQWdJR3hsZENCcElEMGdNRHRjYmlBZ0lDQWdJQ0FnYkdWMElHTjFjbkpsYm5SWU8xeHVJQ0FnSUNBZ0lDQnNaWFFnWTNWeWNtVnVkRlE3WEc1Y2JpQWdJQ0FnSUNBZ1pHOGdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kzVnljbVZ1ZEZRZ1BTQmhRU0FySUNoaFFpQXRJR0ZCS1NBdklESXVNRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTjFjbkpsYm5SWUlEMGdZMkZzWTBKbGVtbGxjaWhqZFhKeVpXNTBWQ3dnYlZneExDQnRXRElwSUMwZ1lWZzdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9ZM1Z5Y21WdWRGZ2dQaUF3TGpBcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmhRaUE5SUdOMWNuSmxiblJVTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmhRU0E5SUdOMWNuSmxiblJVTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5SUhkb2FXeGxJQ2hOWVhSb0xtRmljeWhqZFhKeVpXNTBXQ2tnUGlCVFZVSkVTVlpKVTBsUFRsOVFVa1ZEU1ZOSlQwNGdKaVlnS3l0cElEd2dVMVZDUkVsV1NWTkpUMDVmVFVGWVgwbFVSVkpCVkVsUFRsTXBPMXh1WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJqZFhKeVpXNTBWRHRjYmlBZ0lDQjlPMXh1WEc0Z0lDQWdZMjl1YzNRZ2JtVjNkRzl1VW1Gd2FITnZia2wwWlhKaGRHVWdQU0FvWVZnc0lHRkhkV1Z6YzFRcElEMCtJSHRjYmlBZ0lDQWdJQ0FnYkdWMElHa2dQU0F3TzF4dUlDQWdJQ0FnSUNCc1pYUWdZM1Z5Y21WdWRGTnNiM0JsSUQwZ01EdGNiaUFnSUNBZ0lDQWdiR1YwSUdOMWNuSmxiblJZTzF4dVhHNGdJQ0FnSUNBZ0lHWnZjaUFvT3lCcElEd2dUa1ZYVkU5T1gwbFVSVkpCVkVsUFRsTTdJQ3NyYVNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWTNWeWNtVnVkRk5zYjNCbElEMGdaMlYwVTJ4dmNHVW9ZVWQxWlhOelZDd2diVmd4TENCdFdESXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb1kzVnljbVZ1ZEZOc2IzQmxJRDA5UFNBd0xqQXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdZVWQxWlhOelZEdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0FnSUNBZ1kzVnljbVZ1ZEZnZ1BTQmpZV3hqUW1WNmFXVnlLR0ZIZFdWemMxUXNJRzFZTVN3Z2JWZ3lLU0F0SUdGWU8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWVVkMVpYTnpWQ0F0UFNCamRYSnlaVzUwV0NBdklHTjFjbkpsYm5SVGJHOXdaVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUdGSGRXVnpjMVE3WEc0Z0lDQWdmVHRjYmx4dUlDQWdJR052Ym5OMElHTmhiR05UWVcxd2JHVldZV3gxWlhNZ1BTQW9LU0E5UGlCN1hHNGdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2dTMTlUVUV4SlRrVmZWRUZDVEVWZlUwbGFSVHNnS3l0cEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCellXMXdiR1ZXWVd4MVpYTmJhVjBnUFNCallXeGpRbVY2YVdWeUtHa2dLaUJMWDFOQlRWQk1SVjlUVkVWUVgxTkpXa1VzSUcxWU1Td2diVmd5S1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgwN1hHNWNiaUFnSUNCamIyNXpkQ0JuWlhSVVJtOXlXQ0E5SUNoaFdDa2dQVDRnZTF4dUlDQWdJQ0FnSUNCc1pYUWdhVzUwWlhKMllXeFRkR0Z5ZENBOUlEQXVNRHRjYmlBZ0lDQWdJQ0FnYkdWMElHTjFjbkpsYm5SVFlXMXdiR1VnUFNBeE8xeHVJQ0FnSUNBZ0lDQnNaWFFnYkdGemRGTmhiWEJzWlNBOUlFdGZVMUJNU1U1RlgxUkJRa3hGWDFOSldrVWdMU0F4TzF4dUlDQWdJQ0FnSUNCc1pYUWdaR2x6ZENBOUlEQXVNRHRjYmlBZ0lDQWdJQ0FnYkdWMElHZDFaWE56Um05eVZDQTlJREF1TUR0Y2JpQWdJQ0FnSUNBZ2JHVjBJR2x1YVhScFlXeFRiRzl3WlNBOUlEQXVNRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQm1iM0lnS0RzZ1kzVnljbVZ1ZEZOaGJYQnNaU0FoUFNCc1lYTjBVMkZ0Y0d4bElDWW1JSE5oYlhCc1pWWmhiSFZsYzF0amRYSnlaVzUwVTJGdGNHeGxYU0E4UFNCaFdEc2dLeXRqZFhKeVpXNTBVMkZ0Y0d4bEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCcGJuUmxjblpoYkZOMFlYSjBJQ3M5SUV0ZlUwRk5VRXhGWDFOVVJWQmZVMGxhUlR0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdMUzFqZFhKeVpXNTBVMkZ0Y0d4bE8xeHVJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdaR2x6ZENBOUlDaGhXQ0F0SUhOaGJYQnNaVlpoYkhWbGMxdGpkWEp5Wlc1MFUyRnRjR3hsWFNrZ0x5QW9jMkZ0Y0d4bFZtRnNkV1Z6VzJOMWNuSmxiblJUWVcxd2JHVXJNVjBnTFNCellXMXdiR1ZXWVd4MVpYTmJZM1Z5Y21WdWRGTmhiWEJzWlYwcE8xeHVJQ0FnSUNBZ0lDQm5kV1Z6YzBadmNsUWdQU0JwYm5SbGNuWmhiRk4wWVhKMElDc2daR2x6ZENBcUlFdGZVMEZOVUV4RlgxTlVSVkJmVTBsYVJUdGNiaUFnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJR2x1YVhScFlXeFRiRzl3WlNBOUlHZGxkRk5zYjNCbEtHZDFaWE56Um05eVZDd2diVmd4TENCdFdESXBPMXh1SUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnTHk4Z1NXWWdjMnh2Y0dVZ2FYTWdaM0psWVhSbGNpQjBhR0Z1SUcxcGJseHVJQ0FnSUNBZ0lDQnBaaUFvYVc1cGRHbGhiRk5zYjNCbElENDlJRTVGVjFSUFRsOU5TVTVmVTB4UFVFVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCdVpYZDBiMjVTWVhCb2MyOXVTWFJsY21GMFpTaGhXQ3dnWjNWbGMzTkdiM0pVS1R0Y2JpQWdJQ0FnSUNBZ0x5OGdVMnh2Y0dVZ2FYTWdaWEYxWVd3Z2RHOGdiV2x1WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0JwWmlBb2FXNXBkR2xoYkZOc2IzQmxJRDA5UFNBd0xqQXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCbmRXVnpjMFp2Y2xRN1hHNGdJQ0FnSUNBZ0lDOHZJRk5zYjNCbElHbHpJR3hsYzNNZ2RHaGhiaUJ0YVc1Y2JpQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQmlhVzVoY25sVGRXSmthWFpwWkdVb1lWZ3NJR2x1ZEdWeWRtRnNVM1JoY25Rc0lHbHVkR1Z5ZG1Gc1UzUmhjblFnS3lCTFgxTkJUVkJNUlY5VFZFVlFYMU5KV2tVcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZUdGNibHh1SUNBZ0lHTnZibk4wSUhCeVpXTnZiWEIxZEdVZ1BTQW9LU0E5UGlCN1hHNGdJQ0FnSUNBZ0lGOXdjbVZqYjIxd2RYUmxaQ0E5SUhSeWRXVTdYRzRnSUNBZ0lDQWdJR2xtSUNodFdERWdJVDBnYlZreElIeDhJRzFZTWlBaFBTQnRXVElwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR05oYkdOVFlXMXdiR1ZXWVd4MVpYTW9LVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDA3WEc1Y2JpQWdJQ0JqYjI1emRDQnlaWE52YkhabGNpQTlJQ2hoV0NrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0JzWlhRZ2NtVjBkWEp1Vm1Gc2RXVTdYRzVjYmlBZ0lDQWdJQ0FnYVdZZ0tDRmZjSEpsWTI5dGNIVjBaV1FwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEJ5WldOdmJYQjFkR1VvS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdMeThnU1dZZ2JHbHVaV0Z5SUdkeVlXUnBaVzUwTENCeVpYUjFjbTRnV0NCaGN5QlVYRzRnSUNBZ0lDQWdJR2xtSUNodFdERWdQVDA5SUcxWk1TQW1KaUJ0V0RJZ1BUMDlJRzFaTWlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVWbUZzZFdVZ1BTQmhXRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQXZMeUJKWmlCaGRDQnpkR0Z5ZEN3Z2NtVjBkWEp1SURCY2JpQWdJQ0FnSUNBZ2ZTQmxiSE5sSUdsbUlDaGhXQ0E5UFQwZ01Da2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1Vm1Gc2RXVWdQU0F3TzF4dUlDQWdJQ0FnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJQzh2SUVsbUlHRjBJR1Z1WkN3Z2NtVjBkWEp1SURGY2JpQWdJQ0FnSUNBZ2ZTQmxiSE5sSUdsbUlDaGhXQ0E5UFQwZ01Ta2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1Vm1Gc2RXVWdQU0F4TzF4dVhHNGdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNVdZV3gxWlNBOUlHTmhiR05DWlhwcFpYSW9aMlYwVkVadmNsZ29ZVmdwTENCdFdURXNJRzFaTWlrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnlaWFIxY201V1lXeDFaVHRjYmlBZ0lDQjlPMXh1WEc0Z0lDQWdjbVYwZFhKdUlISmxjMjlzZG1WeU8xeHVmVnh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9lYXNpbmcvY3JlYXRlLWJlemllci5qc1xuICoqIG1vZHVsZSBpZCA9IDUxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vKlxuICAgIERldGVjdCBhbmQgbG9hZCBhbiBhcHByb3ByaWF0ZSBjbG9jayBzZXR0aW5nIGZvciB0aGUgZW52aXJvbm1lbnRcbiovXG5cbnZhciBoYXNSQUYgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID8gdHJ1ZSA6IGZhbHNlO1xuXG52YXIgdGljayA9IHZvaWQgMDtcblxuaWYgKGhhc1JBRikge1xuICAgIHRpY2sgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spO1xuICAgIH07XG59IGVsc2Uge1xuICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8qXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgRm9yIElFOC85IEZsaW5zdG9uZXMgYW5kIG5vbi1icm93c2VyIGVudmlyb25tZW50c1xuICAgICAgICAgICAgIFRha2VuIGZyb20gUGF1bCBJcmlzaC4gV2UndmUgc3RyaXBwZWQgb3V0IGNhbmNlbEFuaW1hdGlvbkZyYW1lIGNoZWNrcyBiZWNhdXNlIHdlIGRvbid0IGZveCB3aXRoIHRoYXRcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaHR0cDovL3BhdWxpcmlzaC5jb20vMjAxMS9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWFuaW1hdGluZy9cbiAgICAgICAgICAgIGh0dHA6Ly9teS5vcGVyYS5jb20vZW1vbGxlci9ibG9nLzIwMTEvMTIvMjAvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1lci1hbmltYXRpbmdcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbCBieSBFcmlrIE3DtmxsZXIuIGZpeGVzIGZyb20gUGF1bCBJcmlzaCBhbmQgVGlubyBaaWpkZWxcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgIE1JVCBsaWNlbnNlXG4gICAgICAgICovXG4gICAgICAgIHZhciBsYXN0VGltZSA9IDA7XG5cbiAgICAgICAgdGljayA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICB2YXIgdGltZVRvQ2FsbCA9IE1hdGgubWF4KDAsIDE2IC0gKGN1cnJlbnRUaW1lIC0gbGFzdFRpbWUpKTtcblxuICAgICAgICAgICAgbGFzdFRpbWUgPSBjdXJyZW50VGltZSArIHRpbWVUb0NhbGw7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhsYXN0VGltZSk7XG4gICAgICAgICAgICB9LCB0aW1lVG9DYWxsKTtcbiAgICAgICAgfTtcbiAgICB9KSgpO1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSB0aWNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkwWVhOckwzUnBZMnN1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenRCUVVsQkxFbEJRVTBzVTBGQlV5eFBRVUZSTEUxQlFWQXNTMEZCYTBJc1YwRkJiRUlzU1VGQmFVTXNUMEZCVHl4eFFrRkJVQ3hIUVVGblF5eEpRVUZzUlN4SFFVRjVSU3hMUVVGNlJUczdRVUZGWml4SlFVRkpMR0ZCUVVvN08wRkJSVUVzU1VGQlNTeE5RVUZLTEVWQlFWazdRVUZEVWl4WFFVRlBMRlZCUVVNc1VVRkJSRHRsUVVGakxFOUJRVThzY1VKQlFWQXNRMEZCTmtJc1VVRkJOMEk3UzBGQlpDeERRVVJETzBOQlFWb3NUVUZIVHpzN096czdPenM3T3pzN096czdPMEZCWlVnc1dVRkJTU3hYUVVGWExFTkJRVmc3TzBGQlJVb3NaVUZCVHl4VlFVRkRMRkZCUVVRc1JVRkJZenRCUVVOcVFpeG5Ra0ZCVFN4alFVRmpMRWxCUVVrc1NVRkJTaXhIUVVGWExFOUJRVmdzUlVGQlpDeERRVVJYTzBGQlJXcENMR2RDUVVGTkxHRkJRV0VzUzBGQlN5eEhRVUZNTEVOQlFWTXNRMEZCVkN4RlFVRlpMRTFCUVUwc1kwRkJZeXhSUVVGa0xFTkJRVTRzUTBGQmVrSXNRMEZHVnpzN1FVRkpha0lzZFVKQlFWY3NZMEZCWXl4VlFVRmtMRU5CU2swN08wRkJUV3BDTEhWQ1FVRlhPM1ZDUVVGTkxGTkJRVk1zVVVGQlZEdGhRVUZPTEVWQlFUQkNMRlZCUVhKRExFVkJUbWxDTzFOQlFXUTdVMEZxUWtvN1EwRklVRHM3YTBKQk9FSmxJaXdpWm1sc1pTSTZJblJwWTJzdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUXZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lMeXBjYmlBZ0lDQkVaWFJsWTNRZ1lXNWtJR3h2WVdRZ1lXNGdZWEJ3Y205d2NtbGhkR1VnWTJ4dlkyc2djMlYwZEdsdVp5Qm1iM0lnZEdobElHVnVkbWx5YjI1dFpXNTBYRzRxTDF4dVhHNWpiMjV6ZENCb1lYTlNRVVlnUFNBb2RIbHdaVzltSUhkcGJtUnZkeUFoUFQwZ0ozVnVaR1ZtYVc1bFpDY2dKaVlnZDJsdVpHOTNMbkpsY1hWbGMzUkJibWx0WVhScGIyNUdjbUZ0WlNrZ1B5QjBjblZsSURvZ1ptRnNjMlU3WEc1Y2JteGxkQ0IwYVdOck8xeHVYRzVwWmlBb2FHRnpVa0ZHS1NCN1hHNGdJQ0FnZEdsamF5QTlJQ2hqWVd4c1ltRmpheWtnUFQ0Z2QybHVaRzkzTG5KbGNYVmxjM1JCYm1sdFlYUnBiMjVHY21GdFpTaGpZV3hzWW1GamF5azdYRzVjYm4wZ1pXeHpaU0I3WEc0Z0lDQWdMeXBjYmlBZ0lDQWdJQ0FnY21WeGRXVnpkRUZ1YVcxaGRHbHZia1p5WVcxbElIQnZiSGxtYVd4c1hHNGdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQkdiM0lnU1VVNEx6a2dSbXhwYm5OMGIyNWxjeUJoYm1RZ2JtOXVMV0p5YjNkelpYSWdaVzUyYVhKdmJtMWxiblJ6WEc1Y2JpQWdJQ0FnSUNBZ1ZHRnJaVzRnWm5KdmJTQlFZWFZzSUVseWFYTm9MaUJYWlNkMlpTQnpkSEpwY0hCbFpDQnZkWFFnWTJGdVkyVnNRVzVwYldGMGFXOXVSbkpoYldVZ1kyaGxZMnR6SUdKbFkyRjFjMlVnZDJVZ1pHOXVKM1FnWm05NElIZHBkR2dnZEdoaGRGeHVJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdhSFIwY0RvdkwzQmhkV3hwY21semFDNWpiMjB2TWpBeE1TOXlaWEYxWlhOMFlXNXBiV0YwYVc5dVpuSmhiV1V0Wm05eUxYTnRZWEowTFdGdWFXMWhkR2x1Wnk5Y2JpQWdJQ0FnSUNBZ2FIUjBjRG92TDIxNUxtOXdaWEpoTG1OdmJTOWxiVzlzYkdWeUwySnNiMmN2TWpBeE1TOHhNaTh5TUM5eVpYRjFaWE4wWVc1cGJXRjBhVzl1Wm5KaGJXVXRabTl5TFhOdFlYSjBMV1Z5TFdGdWFXMWhkR2x1WjF4dUlDQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lISmxjWFZsYzNSQmJtbHRZWFJwYjI1R2NtRnRaU0J3YjJ4NVptbHNiQ0JpZVNCRmNtbHJJRTNEdG14c1pYSXVJR1pwZUdWeklHWnliMjBnVUdGMWJDQkpjbWx6YUNCaGJtUWdWR2x1YnlCYWFXcGtaV3hjYmlBZ0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNCTlNWUWdiR2xqWlc1elpWeHVJQ0FnSUNvdlhHNGdJQ0FnYkdWMElHeGhjM1JVYVcxbElEMGdNRHRjYmx4dUlDQWdJSFJwWTJzZ1BTQW9ZMkZzYkdKaFkyc3BJRDArSUh0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnWTNWeWNtVnVkRlJwYldVZ1BTQnVaWGNnUkdGMFpTZ3BMbWRsZEZScGJXVW9LVHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdkR2x0WlZSdlEyRnNiQ0E5SUUxaGRHZ3ViV0Y0S0RBc0lERTJJQzBnS0dOMWNuSmxiblJVYVcxbElDMGdiR0Z6ZEZScGJXVXBLVHRjYmx4dUlDQWdJQ0FnSUNCc1lYTjBWR2x0WlNBOUlHTjFjbkpsYm5SVWFXMWxJQ3NnZEdsdFpWUnZRMkZzYkR0Y2JseHVJQ0FnSUNBZ0lDQnpaWFJVYVcxbGIzVjBLQ2dwSUQwK0lHTmhiR3hpWVdOcktHeGhjM1JVYVcxbEtTd2dkR2x0WlZSdlEyRnNiQ2s3WEc0Z0lDQWdmVHRjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2RHbGphenNpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdGFzay90aWNrLmpzXG4gKiogbW9kdWxlIGlkID0gNTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLy8gW2ludF06IEluY3JlbWVudGVkIGZvciBlYWNoIG5ldyBydW5uaW5nIHRhc2tcbnZhciBjdXJyZW50VGFza0lkID0gMDtcblxuLy8gW2ludF06IE51bWJlciBvZiBhbGwgcnVubmluZyB0YXNrZXNcbnZhciB0b3RhbFJ1bm5pbmdDb3VudCA9IDA7XG5cbi8vIFtpbnRdOiBOdW1iZXIgb2YgcnVubmluZyB0YXNrZXMgZXhjbHVkaW5nIGJhY2tncm91bmQgdGFza2VzXG52YXIgbm9uQmFja2dyb3VuZFJ1bm5pbmdDb3VudCA9IDA7XG5cbi8vIFthcnJheV06IEFycmF5IG9mIHJ1bm5pbmcgdGFzayBJRHNcbnZhciBydW5uaW5nSWRzID0gW107XG5cbi8vIFtvYmplY3RdOiBNYXAgb2YgcnVubmluZyB0YXNrZXNcbnZhciBhY3RpdmVUYXNrcyA9IHt9O1xuXG4vLyBbYXJyYXldOiBBcnJheSBvZiB0YXNrIElEcyBxdWV1ZWQgZm9yIGFjdGl2YXRpb25cbnZhciBhY3RpdmF0ZVF1ZXVlID0gW107XG5cbi8vIFthcnJheV06IEFycmF5IG9mIHRhc2sgSURzIHF1ZXVlZCBmb3IgZGVhY3RpdmF0aW9uXG52YXIgZGVhY3RpdmF0ZVF1ZXVlID0gW107XG5cbi8qXG4gICAgVXBkYXRlIGFjdGl2YXRlL2RlYWN0aXZhdGUgcXVldWVzXG5cbiAgICBAcGFyYW0gW251bWJlcl1cbiAgICBAcGFyYW0gW2FycmF5XVxuICAgIEBwYXJhbSBbYXJyYXldXG4qL1xudmFyIHVwZGF0ZVF1ZXVlcyA9IGZ1bmN0aW9uIChpZCwgaW5MaXN0LCBvdXRMaXN0KSB7XG4gICAgdmFyIGluUG9zaXRpb24gPSBpbkxpc3QuaW5kZXhPZihpZCk7XG4gICAgdmFyIG91dFBvc2l0aW9uID0gb3V0TGlzdC5pbmRleE9mKGlkKTtcblxuICAgIGlmIChpblBvc2l0aW9uID09PSAtMSkge1xuICAgICAgICBpbkxpc3QucHVzaChpZCk7XG4gICAgfVxuXG4gICAgaWYgKG91dFBvc2l0aW9uID4gLTEpIHtcbiAgICAgICAgb3V0TGlzdC5zcGxpY2Uob3V0UG9zaXRpb24sIDEpO1xuICAgIH1cbn07XG5cbi8qXG4gICAgVXBkYXRlIHJ1bm5pbmdcblxuICAgIFtib29sZWFuXTogYHRydWVgIHRvIGFkZFxuICAgIFtib29sZWFuXTogYHRydWVgIGlmIGxhenlcbiovXG52YXIgdXBkYXRlUnVubmluZ0NvdW50ID0gZnVuY3Rpb24gKGFkZCwgaXNMYXp5KSB7XG4gICAgdmFyIG1vZGlmeSA9IGFkZCA/IDEgOiAtMTtcblxuICAgIHRvdGFsUnVubmluZ0NvdW50ICs9IG1vZGlmeTtcblxuICAgIGlmICghaXNMYXp5KSB7XG4gICAgICAgIG5vbkJhY2tncm91bmRSdW5uaW5nQ291bnQgKz0gbW9kaWZ5O1xuICAgIH1cbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBhY3RpdmVUYXNrczogYWN0aXZlVGFza3MsXG5cbiAgICAvLyBBY3RpdmF0ZSBhIHRhc2tcbiAgICBhY3RpdmF0ZTogZnVuY3Rpb24gKGlkLCB0YXNrKSB7XG4gICAgICAgIGFjdGl2ZVRhc2tzW2lkXSA9IHRhc2s7XG4gICAgICAgIHRhc2suaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICB1cGRhdGVRdWV1ZXMoaWQsIGFjdGl2YXRlUXVldWUsIGRlYWN0aXZhdGVRdWV1ZSk7XG5cbiAgICAgICAgaWYgKHRhc2sub25BY3RpdmF0ZSkge1xuICAgICAgICAgICAgdGFzay5vbkFjdGl2YXRlKHRhc2spO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRhc2sub25BY3RpdmF0ZU9uY2UpIHtcbiAgICAgICAgICAgIHRhc2sub25BY3RpdmF0ZU9uY2UodGFzayk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gRGVhY3RpdmF0ZSBhIHRhc2tcbiAgICBkZWFjdGl2YXRlOiBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgdmFyIHRhc2sgPSBhY3RpdmVUYXNrc1tpZF07XG5cbiAgICAgICAgaWYgKHRhc2spIHtcbiAgICAgICAgICAgIHVwZGF0ZVF1ZXVlcyhpZCwgZGVhY3RpdmF0ZVF1ZXVlLCBhY3RpdmF0ZVF1ZXVlKTtcbiAgICAgICAgICAgIHRhc2suaXNBY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKHRhc2sub25EZWFjdGl2YXRlKSB7XG4gICAgICAgICAgICAgICAgdGFzay5vbkRlYWN0aXZhdGUodGFzayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gTnVtYmVyIGJhY2tncm91bmQgdGFza2VzXG4gICAgZ2V0Tm9uQmFja2dyb3VuZFJ1bm5pbmdDb3VudDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbm9uQmFja2dyb3VuZFJ1bm5pbmdDb3VudDtcbiAgICB9LFxuXG4gICAgLy8gSW5jcmVtZW50IGN1cnJlbnQgdGFzayBJRCBhbmQgcmV0dXJuXG4gICAgZ2V0VGFza0lkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjdXJyZW50VGFza0lkKys7XG4gICAgfSxcblxuICAgIC8vIFJlc29sdmUgYWN0aXZhdGUvZGVhY3RpdmF0ZSB0YXNrZXMgYW5kIHJldHVybiBhY3RpdmUgaWRzXG4gICAgZ2V0QWN0aXZlSWRzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8qXG4gICAgICAgICAgICB0YXNrIGRlYWN0aXZhdGUgcXVldWVcbiAgICAgICAgKi9cbiAgICAgICAgdmFyIGRlYWN0aXZhdGVRdWV1ZUxlbmd0aCA9IGRlYWN0aXZhdGVRdWV1ZS5sZW5ndGg7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkZWFjdGl2YXRlUXVldWVMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGlkID0gZGVhY3RpdmF0ZVF1ZXVlW2ldO1xuICAgICAgICAgICAgdmFyIGFjdGl2ZUlkSW5kZXggPSBydW5uaW5nSWRzLmluZGV4T2YoaWQpO1xuICAgICAgICAgICAgdmFyIHRhc2sgPSBhY3RpdmVUYXNrc1tpZF07XG5cbiAgICAgICAgICAgIC8vIElmIHRoaXMgaXMgYSBydW5uaW5nIHRhc2ssIGRlYWN0aXZhdGVcbiAgICAgICAgICAgIGlmIChhY3RpdmVJZEluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICBydW5uaW5nSWRzLnNwbGljZShhY3RpdmVJZEluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVSdW5uaW5nQ291bnQoZmFsc2UsIHRhc2suaXNMYXp5KTtcbiAgICAgICAgICAgICAgICBkZWxldGUgYWN0aXZlVGFza3NbaWRdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLypcbiAgICAgICAgICAgIEVtcHR5IGRlYWN0aXZhdGUgcXVldWUuIFdlIHVzZSBgQXJyYXkuc3BsaWNlYCBiZWNhdXNlIGl0IGRvZXNuJ3RcbiAgICAgICAgICAgIHdvcmtzIG9uIHRoZSBvcmlnaW5hbCBhcnJheSBzbyB3ZSBkb24ndCBoYXZlIHRvIGdhcmJhZ2UgY29sbGVjdCBhbnl0aGluZ1xuICAgICAgICAqL1xuICAgICAgICBkZWFjdGl2YXRlUXVldWUuc3BsaWNlKDAsIGRlYWN0aXZhdGVRdWV1ZUxlbmd0aCk7XG5cbiAgICAgICAgLypcbiAgICAgICAgICAgIHRhc2sgYWN0aXZhdGUgcXVldWVcbiAgICAgICAgKi9cbiAgICAgICAgdmFyIGFjdGl2YXRlUXVldWVMZW5ndGggPSBhY3RpdmF0ZVF1ZXVlLmxlbmd0aDtcblxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYWN0aXZhdGVRdWV1ZUxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIF9pZCA9IGFjdGl2YXRlUXVldWVbX2ldO1xuICAgICAgICAgICAgdmFyIF9hY3RpdmVJZEluZGV4ID0gcnVubmluZ0lkcy5pbmRleE9mKF9pZCk7XG4gICAgICAgICAgICB2YXIgX3Rhc2sgPSBhY3RpdmVUYXNrc1tfaWRdO1xuXG4gICAgICAgICAgICAvLyBJZiB0YXNrIGlzbid0IGFscmVhZHkgcnVubmluZywgYWN0aXZhdGVcbiAgICAgICAgICAgIGlmIChfYWN0aXZlSWRJbmRleCA9PT0gLTEgJiYgX3Rhc2spIHtcbiAgICAgICAgICAgICAgICBpZiAoX3Rhc2suaXNQcmlvcml0eSkge1xuICAgICAgICAgICAgICAgICAgICBydW5uaW5nSWRzLnVuc2hpZnQoX2lkKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBydW5uaW5nSWRzLnB1c2goX2lkKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoX3Rhc2sub25BY3RpdmF0ZUxvb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgX3Rhc2sub25BY3RpdmF0ZUxvb3AoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB1cGRhdGVSdW5uaW5nQ291bnQodHJ1ZSwgX3Rhc2suaXNMYXp5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGFjdGl2YXRlUXVldWUuc3BsaWNlKDAsIGFjdGl2YXRlUXVldWVMZW5ndGgpO1xuXG4gICAgICAgIHJldHVybiBydW5uaW5nSWRzO1xuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTBZWE5yTDIxaGJtRm5aWEl1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dEJRVU5CTEVsQlFVa3NaMEpCUVdkQ0xFTkJRV2hDT3pzN1FVRkhTaXhKUVVGSkxHOUNRVUZ2UWl4RFFVRndRanM3TzBGQlIwb3NTVUZCU1N3MFFrRkJORUlzUTBGQk5VSTdPenRCUVVkS0xFbEJRVTBzWVVGQllTeEZRVUZpT3pzN1FVRkhUaXhKUVVGTkxHTkJRV01zUlVGQlpEczdPMEZCUjA0c1NVRkJUU3huUWtGQlowSXNSVUZCYUVJN096dEJRVWRPTEVsQlFVMHNhMEpCUVd0Q0xFVkJRV3hDT3pzN096czdPenM3UVVGVFRpeEpRVUZOTEdWQlFXVXNWVUZCUXl4RlFVRkVMRVZCUVVzc1RVRkJUQ3hGUVVGaExFOUJRV0lzUlVGQmVVSTdRVUZETVVNc1VVRkJUU3hoUVVGaExFOUJRVThzVDBGQlVDeERRVUZsTEVWQlFXWXNRMEZCWWl4RFFVUnZRenRCUVVVeFF5eFJRVUZOTEdOQlFXTXNVVUZCVVN4UFFVRlNMRU5CUVdkQ0xFVkJRV2hDTEVOQlFXUXNRMEZHYjBNN08wRkJTVEZETEZGQlFVa3NaVUZCWlN4RFFVRkRMRU5CUVVRc1JVRkJTVHRCUVVOdVFpeGxRVUZQTEVsQlFWQXNRMEZCV1N4RlFVRmFMRVZCUkcxQ08wdEJRWFpDT3p0QlFVbEJMRkZCUVVrc1kwRkJZeXhEUVVGRExFTkJRVVFzUlVGQlNUdEJRVU5zUWl4blFrRkJVU3hOUVVGU0xFTkJRV1VzVjBGQlppeEZRVUUwUWl4RFFVRTFRaXhGUVVSclFqdExRVUYwUWp0RFFWSnBRanM3T3pzN096czdRVUZ0UW5KQ0xFbEJRVTBzY1VKQlFYRkNMRlZCUVVNc1IwRkJSQ3hGUVVGTkxFMUJRVTRzUlVGQmFVSTdRVUZEZUVNc1VVRkJUU3hUUVVGVExFMUJRVTBzUTBGQlRpeEhRVUZWTEVOQlFVTXNRMEZCUkN4RFFVUmxPenRCUVVkNFF5eDVRa0ZCY1VJc1RVRkJja0lzUTBGSWQwTTdPMEZCUzNoRExGRkJRVWtzUTBGQlF5eE5RVUZFTEVWQlFWTTdRVUZEVkN4eFEwRkJOa0lzVFVGQk4wSXNRMEZFVXp0TFFVRmlPME5CVEhWQ096dHJRa0ZWV2p0QlFVTllMRFJDUVVSWE96czdRVUZKV0N4alFVRlZMRlZCUVVNc1JVRkJSQ3hGUVVGTExFbEJRVXdzUlVGQll6dEJRVU53UWl4dlFrRkJXU3hGUVVGYUxFbEJRV3RDTEVsQlFXeENMRU5CUkc5Q08wRkJSWEJDTEdGQlFVc3NVVUZCVEN4SFFVRm5RaXhKUVVGb1FpeERRVVp2UWp0QlFVZHdRaXh4UWtGQllTeEZRVUZpTEVWQlFXbENMR0ZCUVdwQ0xFVkJRV2RETEdWQlFXaERMRVZCU0c5Q096dEJRVXR3UWl4WlFVRkpMRXRCUVVzc1ZVRkJUQ3hGUVVGcFFqdEJRVU5xUWl4cFFrRkJTeXhWUVVGTUxFTkJRV2RDTEVsQlFXaENMRVZCUkdsQ08xTkJRWEpDT3p0QlFVbEJMRmxCUVVrc1MwRkJTeXhqUVVGTUxFVkJRWEZDTzBGQlEzSkNMR2xDUVVGTExHTkJRVXdzUTBGQmIwSXNTVUZCY0VJc1JVRkVjVUk3VTBGQmVrSTdTMEZVVFRzN08wRkJaVllzWjBKQlFWa3NWVUZCUXl4RlFVRkVMRVZCUVZFN1FVRkRhRUlzV1VGQlRTeFBRVUZQTEZsQlFWa3NSVUZCV2l4RFFVRlFMRU5CUkZVN08wRkJSMmhDTEZsQlFVa3NTVUZCU2l4RlFVRlZPMEZCUTA0c2VVSkJRV0VzUlVGQllpeEZRVUZwUWl4bFFVRnFRaXhGUVVGclF5eGhRVUZzUXl4RlFVUk5PMEZCUlU0c2FVSkJRVXNzVVVGQlRDeEhRVUZuUWl4TFFVRm9RaXhEUVVaTk96dEJRVWxPTEdkQ1FVRkpMRXRCUVVzc1dVRkJUQ3hGUVVGdFFqdEJRVU51UWl4eFFrRkJTeXhaUVVGTUxFTkJRV3RDTEVsQlFXeENMRVZCUkcxQ08yRkJRWFpDTzFOQlNrbzdTMEZJVVRzN08wRkJZMW9zYTBOQlFUaENPMlZCUVUwN1MwRkJUanM3TzBGQlJ6bENMR1ZCUVZjN1pVRkJUVHRMUVVGT096czdRVUZIV0N4clFrRkJZeXhaUVVGTk96czdPMEZCU1doQ0xGbEJRVTBzZDBKQlFYZENMR2RDUVVGblFpeE5RVUZvUWl4RFFVcGtPenRCUVUxb1FpeGhRVUZMTEVsQlFVa3NTVUZCU1N4RFFVRktMRVZCUVU4c1NVRkJTU3h4UWtGQlNpeEZRVUV5UWl4SFFVRXpReXhGUVVGblJEdEJRVU0xUXl4blFrRkJUU3hMUVVGTExHZENRVUZuUWl4RFFVRm9RaXhEUVVGTUxFTkJSSE5ETzBGQlJUVkRMR2RDUVVGTkxHZENRVUZuUWl4WFFVRlhMRTlCUVZnc1EwRkJiVUlzUlVGQmJrSXNRMEZCYUVJc1EwRkdjME03UVVGSE5VTXNaMEpCUVUwc1QwRkJUeXhaUVVGWkxFVkJRVm9zUTBGQlVEczdPMEZCU0hORExHZENRVTE0UXl4blFrRkJaMElzUTBGQlF5eERRVUZFTEVWQlFVazdRVUZEY0VJc01rSkJRVmNzVFVGQldDeERRVUZyUWl4aFFVRnNRaXhGUVVGcFF5eERRVUZxUXl4RlFVUnZRanRCUVVWd1FpeHRRMEZCYlVJc1MwRkJia0lzUlVGQk1FSXNTMEZCU3l4TlFVRk1MRU5CUVRGQ0xFTkJSbTlDTzBGQlIzQkNMSFZDUVVGUExGbEJRVmtzUlVGQldpeERRVUZRTEVOQlNHOUNPMkZCUVhoQ08xTkJUa283T3pzN096dEJRVTVuUWl4MVFrRjFRbWhDTEVOQlFXZENMRTFCUVdoQ0xFTkJRWFZDTEVOQlFYWkNMRVZCUVRCQ0xIRkNRVUV4UWpzN096czdRVUYyUW1kQ0xGbEJORUpXTEhOQ1FVRnpRaXhqUVVGakxFMUJRV1FzUTBFMVFsbzdPMEZCT0VKb1FpeGhRVUZMTEVsQlFVa3NTMEZCU1N4RFFVRktMRVZCUVU4c1MwRkJTU3h0UWtGQlNpeEZRVUY1UWl4SlFVRjZReXhGUVVFNFF6dEJRVU14UXl4blFrRkJUU3hOUVVGTExHTkJRV01zUlVGQlpDeERRVUZNTEVOQlJHOURPMEZCUlRGRExHZENRVUZOTEdsQ1FVRm5RaXhYUVVGWExFOUJRVmdzUTBGQmJVSXNSMEZCYmtJc1EwRkJhRUlzUTBGR2IwTTdRVUZITVVNc1owSkJRVTBzVVVGQlR5eFpRVUZaTEVkQlFWb3NRMEZCVURzN08wRkJTRzlETEdkQ1FVMTBReXh0UWtGQmEwSXNRMEZCUXl4RFFVRkVMRWxCUVUwc1MwRkJlRUlzUlVGQk9FSTdRVUZET1VJc2IwSkJRVWtzVFVGQlN5eFZRVUZNTEVWQlFXbENPMEZCUTJwQ0xDdENRVUZYTEU5QlFWZ3NRMEZCYlVJc1IwRkJia0lzUlVGRWFVSTdhVUpCUVhKQ0xFMUJSVTg3UVVGRFNDd3JRa0ZCVnl4SlFVRllMRU5CUVdkQ0xFZEJRV2hDTEVWQlJFYzdhVUpCUmxBN08wRkJUVUVzYjBKQlFVa3NUVUZCU3l4alFVRk1MRVZCUVhGQ08wRkJRM0pDTERCQ1FVRkxMR05CUVV3c1IwRkVjVUk3YVVKQlFYcENPenRCUVVsQkxHMURRVUZ0UWl4SlFVRnVRaXhGUVVGNVFpeE5RVUZMTEUxQlFVd3NRMEZCZWtJc1EwRllPRUk3WVVGQmJFTTdVMEZPU2pzN1FVRnhRa0VzYzBKQlFXTXNUVUZCWkN4RFFVRnhRaXhEUVVGeVFpeEZRVUYzUWl4dFFrRkJlRUlzUlVGdVJHZENPenRCUVhGRWFFSXNaVUZCVHl4VlFVRlFMRU5CY2tSblFqdExRVUZPSWl3aVptbHNaU0k2SW0xaGJtRm5aWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUx5OGdXMmx1ZEYwNklFbHVZM0psYldWdWRHVmtJR1p2Y2lCbFlXTm9JRzVsZHlCeWRXNXVhVzVuSUhSaGMydGNibXhsZENCamRYSnlaVzUwVkdGemEwbGtJRDBnTUR0Y2JseHVMeThnVzJsdWRGMDZJRTUxYldKbGNpQnZaaUJoYkd3Z2NuVnVibWx1WnlCMFlYTnJaWE5jYm14bGRDQjBiM1JoYkZKMWJtNXBibWREYjNWdWRDQTlJREE3WEc1Y2JpOHZJRnRwYm5SZE9pQk9kVzFpWlhJZ2IyWWdjblZ1Ym1sdVp5QjBZWE5yWlhNZ1pYaGpiSFZrYVc1bklHSmhZMnRuY205MWJtUWdkR0Z6YTJWelhHNXNaWFFnYm05dVFtRmphMmR5YjNWdVpGSjFibTVwYm1kRGIzVnVkQ0E5SURBN1hHNWNiaTh2SUZ0aGNuSmhlVjA2SUVGeWNtRjVJRzltSUhKMWJtNXBibWNnZEdGemF5QkpSSE5jYm1OdmJuTjBJSEoxYm01cGJtZEpaSE1nUFNCYlhUdGNibHh1THk4Z1cyOWlhbVZqZEYwNklFMWhjQ0J2WmlCeWRXNXVhVzVuSUhSaGMydGxjMXh1WTI5dWMzUWdZV04wYVhabFZHRnphM01nUFNCN2ZUdGNibHh1THk4Z1cyRnljbUY1WFRvZ1FYSnlZWGtnYjJZZ2RHRnpheUJKUkhNZ2NYVmxkV1ZrSUdadmNpQmhZM1JwZG1GMGFXOXVYRzVqYjI1emRDQmhZM1JwZG1GMFpWRjFaWFZsSUQwZ1cxMDdYRzVjYmk4dklGdGhjbkpoZVYwNklFRnljbUY1SUc5bUlIUmhjMnNnU1VSeklIRjFaWFZsWkNCbWIzSWdaR1ZoWTNScGRtRjBhVzl1WEc1amIyNXpkQ0JrWldGamRHbDJZWFJsVVhWbGRXVWdQU0JiWFR0Y2JseHVMeXBjYmlBZ0lDQlZjR1JoZEdVZ1lXTjBhWFpoZEdVdlpHVmhZM1JwZG1GMFpTQnhkV1YxWlhOY2JseHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVnh1SUNBZ0lFQndZWEpoYlNCYllYSnlZWGxkWEc0Z0lDQWdRSEJoY21GdElGdGhjbkpoZVYxY2Jpb3ZYRzVqYjI1emRDQjFjR1JoZEdWUmRXVjFaWE1nUFNBb2FXUXNJR2x1VEdsemRDd2diM1YwVEdsemRDa2dQVDRnZTF4dUlDQWdJR052Ym5OMElHbHVVRzl6YVhScGIyNGdQU0JwYmt4cGMzUXVhVzVrWlhoUFppaHBaQ2s3WEc0Z0lDQWdZMjl1YzNRZ2IzVjBVRzl6YVhScGIyNGdQU0J2ZFhSTWFYTjBMbWx1WkdWNFQyWW9hV1FwTzF4dVhHNGdJQ0FnYVdZZ0tHbHVVRzl6YVhScGIyNGdQVDA5SUMweEtTQjdYRzRnSUNBZ0lDQWdJR2x1VEdsemRDNXdkWE5vS0dsa0tUdGNiaUFnSUNCOVhHNWNiaUFnSUNCcFppQW9iM1YwVUc5emFYUnBiMjRnUGlBdE1Ta2dlMXh1SUNBZ0lDQWdJQ0J2ZFhSTWFYTjBMbk53YkdsalpTaHZkWFJRYjNOcGRHbHZiaXdnTVNrN1hHNGdJQ0FnZlZ4dWZUdGNibHh1THlwY2JpQWdJQ0JWY0dSaGRHVWdjblZ1Ym1sdVoxeHVYRzRnSUNBZ1cySnZiMnhsWVc1ZE9pQmdkSEoxWldBZ2RHOGdZV1JrWEc0Z0lDQWdXMkp2YjJ4bFlXNWRPaUJnZEhKMVpXQWdhV1lnYkdGNmVWeHVLaTljYm1OdmJuTjBJSFZ3WkdGMFpWSjFibTVwYm1kRGIzVnVkQ0E5SUNoaFpHUXNJR2x6VEdGNmVTa2dQVDRnZTF4dUlDQWdJR052Ym5OMElHMXZaR2xtZVNBOUlHRmtaQ0EvSURFZ09pQXRNVHRjYmx4dUlDQWdJSFJ2ZEdGc1VuVnVibWx1WjBOdmRXNTBJQ3M5SUcxdlpHbG1lVHRjYmx4dUlDQWdJR2xtSUNnaGFYTk1ZWHA1S1NCN1hHNGdJQ0FnSUNBZ0lHNXZia0poWTJ0bmNtOTFibVJTZFc1dWFXNW5RMjkxYm5RZ0t6MGdiVzlrYVdaNU8xeHVJQ0FnSUgxY2JuMDdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJSHRjYmlBZ0lDQmhZM1JwZG1WVVlYTnJjeXhjYmx4dUlDQWdJQzh2SUVGamRHbDJZWFJsSUdFZ2RHRnphMXh1SUNBZ0lHRmpkR2wyWVhSbE9pQW9hV1FzSUhSaGMyc3BJRDArSUh0Y2JpQWdJQ0FnSUNBZ1lXTjBhWFpsVkdGemEzTmJhV1JkSUQwZ2RHRnphenRjYmlBZ0lDQWdJQ0FnZEdGemF5NXBjMEZqZEdsMlpTQTlJSFJ5ZFdVN1hHNGdJQ0FnSUNBZ0lIVndaR0YwWlZGMVpYVmxjeWhwWkN3Z1lXTjBhWFpoZEdWUmRXVjFaU3dnWkdWaFkzUnBkbUYwWlZGMVpYVmxLVHRjYmx4dUlDQWdJQ0FnSUNCcFppQW9kR0Z6YXk1dmJrRmpkR2wyWVhSbEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMFlYTnJMbTl1UVdOMGFYWmhkR1VvZEdGemF5azdYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCcFppQW9kR0Z6YXk1dmJrRmpkR2wyWVhSbFQyNWpaU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR0Z6YXk1dmJrRmpkR2wyWVhSbFQyNWpaU2gwWVhOcktUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMHNYRzVjYmlBZ0lDQXZMeUJFWldGamRHbDJZWFJsSUdFZ2RHRnphMXh1SUNBZ0lHUmxZV04wYVhaaGRHVTZJQ2hwWkNrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQjBZWE5ySUQwZ1lXTjBhWFpsVkdGemEzTmJhV1JkTzF4dVhHNGdJQ0FnSUNBZ0lHbG1JQ2gwWVhOcktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMWNHUmhkR1ZSZFdWMVpYTW9hV1FzSUdSbFlXTjBhWFpoZEdWUmRXVjFaU3dnWVdOMGFYWmhkR1ZSZFdWMVpTazdYRzRnSUNBZ0lDQWdJQ0FnSUNCMFlYTnJMbWx6UVdOMGFYWmxJRDBnWm1Gc2MyVTdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2gwWVhOckxtOXVSR1ZoWTNScGRtRjBaU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSaGMyc3ViMjVFWldGamRHbDJZWFJsS0hSaGMyc3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZTeGNibHh1SUNBZ0lDOHZJRTUxYldKbGNpQmlZV05yWjNKdmRXNWtJSFJoYzJ0bGMxeHVJQ0FnSUdkbGRFNXZia0poWTJ0bmNtOTFibVJTZFc1dWFXNW5RMjkxYm5RNklDZ3BJRDArSUc1dmJrSmhZMnRuY205MWJtUlNkVzV1YVc1blEyOTFiblFzWEc1Y2JpQWdJQ0F2THlCSmJtTnlaVzFsYm5RZ1kzVnljbVZ1ZENCMFlYTnJJRWxFSUdGdVpDQnlaWFIxY201Y2JpQWdJQ0JuWlhSVVlYTnJTV1E2SUNncElEMCtJR04xY25KbGJuUlVZWE5yU1dRckt5eGNibHh1SUNBZ0lDOHZJRkpsYzI5c2RtVWdZV04wYVhaaGRHVXZaR1ZoWTNScGRtRjBaU0IwWVhOclpYTWdZVzVrSUhKbGRIVnliaUJoWTNScGRtVWdhV1J6WEc0Z0lDQWdaMlYwUVdOMGFYWmxTV1J6T2lBb0tTQTlQaUI3WEc0Z0lDQWdJQ0FnSUM4cVhHNGdJQ0FnSUNBZ0lDQWdJQ0IwWVhOcklHUmxZV04wYVhaaGRHVWdjWFZsZFdWY2JpQWdJQ0FnSUNBZ0tpOWNiaUFnSUNBZ0lDQWdZMjl1YzNRZ1pHVmhZM1JwZG1GMFpWRjFaWFZsVEdWdVozUm9JRDBnWkdWaFkzUnBkbUYwWlZGMVpYVmxMbXhsYm1kMGFEdGNibHh1SUNBZ0lDQWdJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUdSbFlXTjBhWFpoZEdWUmRXVjFaVXhsYm1kMGFEc2dhU3NyS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQnBaQ0E5SUdSbFlXTjBhWFpoZEdWUmRXVjFaVnRwWFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElHRmpkR2wyWlVsa1NXNWtaWGdnUFNCeWRXNXVhVzVuU1dSekxtbHVaR1Y0VDJZb2FXUXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnZEdGemF5QTlJR0ZqZEdsMlpWUmhjMnR6VzJsa1hUdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdTV1lnZEdocGN5QnBjeUJoSUhKMWJtNXBibWNnZEdGemF5d2daR1ZoWTNScGRtRjBaVnh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLR0ZqZEdsMlpVbGtTVzVrWlhnZ1BpQXRNU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKMWJtNXBibWRKWkhNdWMzQnNhV05sS0dGamRHbDJaVWxrU1c1a1pYZ3NJREVwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhWd1pHRjBaVkoxYm01cGJtZERiM1Z1ZENobVlXeHpaU3dnZEdGemF5NXBjMHhoZW5rcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHUmxiR1YwWlNCaFkzUnBkbVZVWVhOcmMxdHBaRjA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBdktseHVJQ0FnSUNBZ0lDQWdJQ0FnUlcxd2RIa2daR1ZoWTNScGRtRjBaU0J4ZFdWMVpTNGdWMlVnZFhObElHQkJjbkpoZVM1emNHeHBZMlZnSUdKbFkyRjFjMlVnYVhRZ1pHOWxjMjRuZEZ4dUlDQWdJQ0FnSUNBZ0lDQWdkMjl5YTNNZ2IyNGdkR2hsSUc5eWFXZHBibUZzSUdGeWNtRjVJSE52SUhkbElHUnZiaWQwSUdoaGRtVWdkRzhnWjJGeVltRm5aU0JqYjJ4c1pXTjBJR0Z1ZVhSb2FXNW5YRzRnSUNBZ0lDQWdJQ292WEc0Z0lDQWdJQ0FnSUdSbFlXTjBhWFpoZEdWUmRXVjFaUzV6Y0d4cFkyVW9NQ3dnWkdWaFkzUnBkbUYwWlZGMVpYVmxUR1Z1WjNSb0tUdGNibHh1SUNBZ0lDQWdJQ0F2S2x4dUlDQWdJQ0FnSUNBZ0lDQWdkR0Z6YXlCaFkzUnBkbUYwWlNCeGRXVjFaVnh1SUNBZ0lDQWdJQ0FxTDF4dUlDQWdJQ0FnSUNCamIyNXpkQ0JoWTNScGRtRjBaVkYxWlhWbFRHVnVaM1JvSUQwZ1lXTjBhWFpoZEdWUmRXVjFaUzVzWlc1bmRHZzdYRzVjYmlBZ0lDQWdJQ0FnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCaFkzUnBkbUYwWlZGMVpYVmxUR1Z1WjNSb095QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElHbGtJRDBnWVdOMGFYWmhkR1ZSZFdWMVpWdHBYVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUdGamRHbDJaVWxrU1c1a1pYZ2dQU0J5ZFc1dWFXNW5TV1J6TG1sdVpHVjRUMllvYVdRcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdkR0Z6YXlBOUlHRmpkR2wyWlZSaGMydHpXMmxrWFR0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1NXWWdkR0Z6YXlCcGMyNG5kQ0JoYkhKbFlXUjVJSEoxYm01cGJtY3NJR0ZqZEdsMllYUmxYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9ZV04wYVhabFNXUkpibVJsZUNBOVBUMGdMVEVnSmlZZ2RHRnpheWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDaDBZWE5yTG1selVISnBiM0pwZEhrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY25WdWJtbHVaMGxrY3k1MWJuTm9hV1owS0dsa0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J5ZFc1dWFXNW5TV1J6TG5CMWMyZ29hV1FwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2gwWVhOckxtOXVRV04wYVhaaGRHVk1iMjl3S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJoYzJzdWIyNUJZM1JwZG1GMFpVeHZiM0FvS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjFjR1JoZEdWU2RXNXVhVzVuUTI5MWJuUW9kSEoxWlN3Z2RHRnpheTVwYzB4aGVua3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnWVdOMGFYWmhkR1ZSZFdWMVpTNXpjR3hwWTJVb01Dd2dZV04wYVhaaGRHVlJkV1YxWlV4bGJtZDBhQ2s3WEc1Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhKMWJtNXBibWRKWkhNN1hHNGdJQ0FnZlZ4dWZUdGNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdGFzay9tYW5hZ2VyLmpzXG4gKiogbW9kdWxlIGlkID0gNTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIiwiZmlsZSI6InBvcG1vdGlvbi5nbG9iYWwuanMifQ==