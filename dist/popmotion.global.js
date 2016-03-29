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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9sb2FkL2dsb2JhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBQVk7Ozs7QUFFWixJQUFNLFFBQVEsT0FBTyxNQUFQOztBQUVkLFVBQVUsVUFBVixHQUF1QixZQUFZO0FBQy9CLFdBQU8sTUFBUCxHQUFnQixLQUFoQixDQUQrQjtDQUFaOztBQUl2QixPQUFPLE1BQVAsR0FBZ0IsT0FBTyxTQUFQLEdBQW1CLFNBQW5CIiwiZmlsZSI6Imdsb2JhbC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBwb3Btb3Rpb24gZnJvbSAnLi4vcG9wbW90aW9uJztcblxuY29uc3QgVUlyZWYgPSB3aW5kb3cubW90aW9uO1xuXG5wb3Btb3Rpb24ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICB3aW5kb3cubW90aW9uID0gVUlyZWY7XG59O1xuXG53aW5kb3cubW90aW9uID0gd2luZG93LnBvcG1vdGlvbiA9IHBvcG1vdGlvbjsiXX0=

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.transformers = exports.valueType = exports.setGlobalDilation = exports.utils = exports.calc = exports.detectFlow = exports.easing = exports.svgPath = exports.svg = exports.object = exports.css = exports.attr = exports.createAdapter = exports.timeline = exports.stagger = exports.task = exports.input = exports.track = exports.physics = exports.tween = exports.flow = undefined;
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wb3Btb3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztzQkFtQ1M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF6QkYsSUFBTSxzQkFBTztzQ0FBSTs7Ozs0RUFBcUI7Q0FBekI7O0FBQ2IsSUFBTSx3QkFBUSxVQUFDLEtBQUQ7V0FBVyxvQkFBVSxLQUFWO0NBQVg7QUFDZCxJQUFNLDRCQUFVLFVBQUMsS0FBRDtXQUFXLHNCQUFZLEtBQVo7Q0FBWDtBQUNoQixJQUFNLHdCQUFRO3VDQUFJOzs7OzZFQUFzQjtDQUExQjtBQUNkLElBQU0sd0JBQVE7dUNBQUk7Ozs7NkVBQXNCO0NBQTFCO0FBQ2QsSUFBTSxzQkFBTzt1Q0FBSTs7Ozs0RUFBcUI7Q0FBekI7UUFDYjtRQUNBOzs7O1FBR0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOzs7O1FBR0E7QUFFQSxJQUFNLG1EQUFOOzs7UUFHSztRQUNBOzs7O0FBZUwsSUFBTSxnQ0FBWSxFQUFFLHNCQUFGLEVBQVMsc0JBQVQsRUFBZ0Isc0JBQWhCLEVBQXVCLDBCQUF2QixFQUFnQyxrQkFBaEMsRUFBcUMsa0JBQXJDLEVBQTBDLGdCQUExQyxFQUE4QyxrQkFBOUMsRUFBbUQsc0JBQW5ELEVBQTBELHdCQUExRCxFQUFrRSxvQkFBbEUsRUFBWjs7O1FBR0Q7Ozs7Ozs7Ozs7O0FBVVosaUJBQU8sU0FBUCxDQUFpQixFQUFqQixHQUFzQixVQUFVLE9BQVYsRUFBbUI7QUFDckMsUUFBSSxDQUFDLFFBQVEsT0FBUixFQUFpQjtBQUNsQixrQkFBVSx1QkFBUSxPQUFSLENBQVYsQ0FEa0I7S0FBdEI7O0FBSUEsV0FBTyxRQUFRLE9BQVIsQ0FBZ0IsSUFBaEIsQ0FBUCxDQUxxQztDQUFuQiIsImZpbGUiOiJwb3Btb3Rpb24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0IGNsYXNzZXMgLSBsb25nIHRlcm0gZ29hbCB0byBtb3ZlIHRvd2FyZHMgY29tcG9zaXRpb25cbmltcG9ydCBBY3Rpb24gZnJvbSAnLi9hY3Rpb25zL0FjdGlvbic7XG5pbXBvcnQgRmxvdyBmcm9tICcuL2FjdGlvbnMvRmxvdyc7XG5pbXBvcnQgVHdlZW4gZnJvbSAnLi9hY3Rpb25zL1R3ZWVuJztcbmltcG9ydCBQaHlzaWNzIGZyb20gJy4vYWN0aW9ucy9QaHlzaWNzJztcbmltcG9ydCBUcmFjayBmcm9tICcuL2FjdGlvbnMvVHJhY2snO1xuaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrL1Rhc2snO1xuaW1wb3J0IElucHV0IGZyb20gJy4vaW5wdXQvSW5wdXQnO1xuXG4vLyBFeHBvcnQgZmFjdG9yeSBmdW5jdGlvbnNcbmV4cG9ydCBjb25zdCBmbG93ID0gKC4uLmFyZ3MpID0+IG5ldyBGbG93KC4uLmFyZ3MpO1xuZXhwb3J0IGNvbnN0IHR3ZWVuID0gKHByb3BzKSA9PiBuZXcgVHdlZW4ocHJvcHMpO1xuZXhwb3J0IGNvbnN0IHBoeXNpY3MgPSAocHJvcHMpID0+IG5ldyBQaHlzaWNzKHByb3BzKTtcbmV4cG9ydCBjb25zdCB0cmFjayA9ICguLi5hcmdzKSA9PiBuZXcgVHJhY2soLi4uYXJncyk7XG5leHBvcnQgY29uc3QgaW5wdXQgPSAoLi4uYXJncykgPT4gbmV3IElucHV0KC4uLmFyZ3MpO1xuZXhwb3J0IGNvbnN0IHRhc2sgPSAoLi4uYXJncykgPT4gbmV3IFRhc2soLi4uYXJncyk7XG5leHBvcnQgc3RhZ2dlciBmcm9tICcuL2luYy9zdGFnZ2VyJztcbmV4cG9ydCB0aW1lbGluZSBmcm9tICcuL2luYy90aW1lbGluZSc7XG5cbi8vIEFkYXB0ZXJzXG5leHBvcnQgY3JlYXRlQWRhcHRlciBmcm9tICcuL2FkYXB0ZXIvYWRhcHRlcic7XG5leHBvcnQgYXR0ciBmcm9tICcuL2FkYXB0ZXIvYXR0ci1hZGFwdGVyJztcbmV4cG9ydCBjc3MgZnJvbSAnLi9hZGFwdGVyL2Nzcy1hZGFwdGVyJztcbmV4cG9ydCBvYmplY3QgZnJvbSAnLi9hZGFwdGVyL29iamVjdC1hZGFwdGVyJztcbmV4cG9ydCBzdmcgZnJvbSAnLi9hZGFwdGVyL3N2Zy1hZGFwdGVyJztcbmV4cG9ydCBzdmdQYXRoIGZyb20gJy4vYWRhcHRlci9zdmctcGF0aC1hZGFwdGVyJztcblxuLy8gRWFzaW5nXG5leHBvcnQgZWFzaW5nIGZyb20gJy4vYWN0aW9ucy9lYXNpbmcvcHJlc2V0LWVhc2luZyc7XG5pbXBvcnQgZ2V0RmxvdyBmcm9tICcuL2FjdGlvbnMvZmxvdy9nZXQtZmxvdyc7XG5leHBvcnQgY29uc3QgZGV0ZWN0RmxvdyA9IGdldEZsb3c7XG5cbi8vIFV0aWxzXG5leHBvcnQgKiBhcyBjYWxjIGZyb20gJy4vaW5jL2NhbGMnO1xuZXhwb3J0ICogYXMgdXRpbHMgZnJvbSAnLi9pbmMvdXRpbHMnO1xuZXhwb3J0IHsgc2V0R2xvYmFsRGlsYXRpb24gfSBmcm9tICcuL3Rhc2svdGltZXInO1xuXG4vLyBWYWx1ZSB0eXBlc1xuaW1wb3J0IGFscGhhIGZyb20gJy4vdmFsdWUtdHlwZXMvYWxwaGEnO1xuaW1wb3J0IGFuZ2xlIGZyb20gJy4vdmFsdWUtdHlwZXMvYW5nbGUnO1xuaW1wb3J0IGNvbG9yIGZyb20gJy4vdmFsdWUtdHlwZXMvY29sb3InO1xuaW1wb3J0IGNvbXBsZXggZnJvbSAnLi92YWx1ZS10eXBlcy9jb21wbGV4JztcbmltcG9ydCBoZXggZnJvbSAnLi92YWx1ZS10eXBlcy9oZXgnO1xuaW1wb3J0IGhzbCBmcm9tICcuL3ZhbHVlLXR5cGVzL2hzbCc7XG5pbXBvcnQgcHggZnJvbSAnLi92YWx1ZS10eXBlcy9weCc7XG5pbXBvcnQgcmdiIGZyb20gJy4vdmFsdWUtdHlwZXMvcmdiJztcbmltcG9ydCBzY2FsZSBmcm9tICcuL3ZhbHVlLXR5cGVzL3NjYWxlJztcbmltcG9ydCBzaGFkb3cgZnJvbSAnLi92YWx1ZS10eXBlcy9zaGFkb3cnO1xuaW1wb3J0IHVuaXQgZnJvbSAnLi92YWx1ZS10eXBlcy91bml0JztcbmV4cG9ydCBjb25zdCB2YWx1ZVR5cGUgPSB7IGFscGhhLCBhbmdsZSwgY29sb3IsIGNvbXBsZXgsIGhleCwgaHNsLCBweCwgcmdiLCBzY2FsZSwgc2hhZG93LCB1bml0IH07XG5cbi8vIFRyYW5zZm9ybWVyc1xuZXhwb3J0ICogYXMgdHJhbnNmb3JtZXJzIGZyb20gJy4vaW5jL3RyYW5zZm9ybWVycyc7XG5cbi8qXG4gICAgUmV0dXJucyBhIHZlcnNpb24gb2YgdGhlIEFjdGlvbiBib3VuZCB0byBhIEZsb3dcblxuICAgIFdlJ3JlIGFkZGluZyBgb25gIGhlcmUgYmVjYXVzZSBGbG93IGV4dGVuZHMgQWN0aW9uLFxuICAgIG90aGVyd2lzZSBjcmVhdGluZyBhIGNpcmN1bGFyIG1vZHVsYXIgZGVwZW5kZW5jeS4gRnV0dXJlXG4gICAgcmVmYWN0b3JpbmcsIGllIG1vdmluZyB0byBhIGNvbXBvc2l0aW9uYWwgbW9kZWwgd2lsbFxuICAgIHJlbW92ZSB0aGUgbmVlZCBmb3IgdXMgdG8gZG8gdGhpcyBoZXJlLlxuKi9cbkFjdGlvbi5wcm90b3R5cGUub24gPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIGlmICghZWxlbWVudC5jb25uZWN0KSB7XG4gICAgICAgIGVsZW1lbnQgPSBnZXRGbG93KGVsZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50LmNvbm5lY3QodGhpcyk7XG59OyJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90YXNrL3RpbWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQSxJQUFNLGNBQWMsRUFBZDs7QUFFTixJQUFJLFVBQVUsQ0FBVjtBQUNKLElBQUksVUFBVSxJQUFWO0FBQ0osSUFBSSxXQUFXLENBQVg7O2tCQUVXO0FBQ1gsWUFBUSxVQUFDLFVBQUQsRUFBZ0I7QUFDcEIsa0JBQVUsS0FBSyxHQUFMLENBQVMsS0FBSyxHQUFMLENBQVMsYUFBYSxPQUFiLEVBQXNCLFdBQS9CLENBQVQsRUFBc0QsQ0FBdEQsSUFBMkQsUUFBM0QsQ0FEVTtBQUVwQixrQkFBVSxVQUFWLENBRm9CO0tBQWhCOztBQUtSLFdBQU87ZUFBTSxVQUFVLHlCQUFWO0tBQU47O0FBRVAsZ0JBQVk7ZUFBTTtLQUFOOztBQUdULElBQU0sZ0RBQW9CLFVBQUMsV0FBRDtXQUFpQixXQUFXLFdBQVg7Q0FBakIiLCJmaWxlIjoidGltZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3VycmVudFRpbWUgfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuXG5jb25zdCBNQVhfRUxBUFNFRCA9IDMzO1xuXG5sZXQgY3VycmVudCA9IDA7XG5sZXQgZWxhcHNlZCA9IDE2Ljc7XG5sZXQgZGlsYXRpb24gPSAxO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgdXBkYXRlOiAoZnJhbWVzdGFtcCkgPT4ge1xuICAgICAgICBlbGFwc2VkID0gTWF0aC5tYXgoTWF0aC5taW4oZnJhbWVzdGFtcCAtIGN1cnJlbnQsIE1BWF9FTEFQU0VEKSwgMSkgKiBkaWxhdGlvbjtcbiAgICAgICAgY3VycmVudCA9IGZyYW1lc3RhbXA7XG4gICAgfSxcblxuICAgIHN0YXJ0OiAoKSA9PiBjdXJyZW50ID0gY3VycmVudFRpbWUoKSxcblxuICAgIGdldEVsYXBzZWQ6ICgpID0+IGVsYXBzZWRcbn07XG5cbmV4cG9ydCBjb25zdCBzZXRHbG9iYWxEaWxhdGlvbiA9IChuZXdEaWxhdGlvbikgPT4gZGlsYXRpb24gPSBuZXdEaWxhdGlvbjsiXX0=

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
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
	
	var Action = function (_Task) {
	    _inherits(Action, _Task);
	
	    function Action(props) {
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
	
	            this.onRender = defaultRenderer;
	        }
	
	        // Prime an object to inherit from, with only `value` properties
	        for (var key in this.defaultValue) {
	            if (this.defaultValue.hasOwnProperty(key) && propsToSet.hasOwnProperty(key)) {
	                inheritable[key] = propsToSet[key];
	            }
	        }
	
	        // Update existing values with inheritable properties
	        for (var key in this.values) {
	            if (this.values.hasOwnProperty(key)) {
	                this.values[key] = _extends({}, this.values[key], inheritable);
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
	
	    Action.prototype.get = function get(key) {
	        return this.state[key];
	    };
	
	    Action.prototype.setValues = function setValues(values, inherit) {
	        // Iterate over all incoming values and set
	        for (var key in values) {
	            if (values.hasOwnProperty(key)) {
	                var hasChildren = false;
	                var children = {};
	                // Merge into existing value or create new
	                var newValue = this.values[key] ? _extends({}, this.values[key]) : _extends({}, this.defaultValue, inherit);
	
	                // If values is not an object, assign value to default prop
	                if (!(0, _utils.isObj)(values[key])) {
	                    newValue[this.defaultValueProp] = values[key];
	                } else {
	                    newValue = _extends({}, newValue, values[key]);
	                }
	
	                // If we've got an adapter, get the current value
	                if (values[key].current === undefined && this.adapter) {
	                    newValue.current = this.adapter.get(this.element, key);
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
	        for (var i = 0; i < this.numParentKeys; i++) {
	            var key = this.parentKeys[i];
	            var value = this.values[key];
	
	            value.current = value.type.combine(value.children, value.template);
	
	            this.state[key] = value.current;
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL0FjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPQSxJQUFNLHVCQUF1QiwwQkFBaUIsTUFBakI7O0FBRTdCLElBQU0sa0JBQWtCO1FBQUc7UUFBTztRQUFTO1FBQWE7V0FBYyxRQUFRLE9BQVIsRUFBaUIsS0FBakIsRUFBd0IsV0FBeEI7Q0FBOUM7O0lBRWxCOzs7QUFDRixhQURFLE1BQ0YsQ0FBWSxLQUFaLEVBQW1COzhCQURqQixRQUNpQjs7QUFDZixjQUFNLEtBQU4sR0FBYyxFQUFkLENBRGU7QUFFZixjQUFNLFNBQU4sR0FBa0IsRUFBbEIsQ0FGZTtBQUdmLGNBQU0sVUFBTixHQUFtQixFQUFuQixDQUhlO2dEQUlmLGlCQUFNLEtBQU4sR0FKZTtLQUFuQjs7Ozs7Ozs7O0FBREUscUJBZUYscUJBQWdCO1lBQVosOERBQVEsa0JBQUk7O0FBQ1osYUFBSyxNQUFMLEdBQWMsS0FBSyxNQUFMLElBQWUsRUFBZixDQURGOztZQUdKLFNBQTBCLE1BQTFCLE9BSEk7O1lBR08sc0NBQWUsbUJBSHRCOztBQUlaLFlBQU0sY0FBYyxFQUFkOzs7QUFKTSx3QkFPTixHQUFOLFlBQVUsVUFBVjs7O0FBUFksWUFVUixLQUFLLE9BQUwsRUFBYztBQUNkLGdCQUFJLENBQUMsS0FBSyxPQUFMLEVBQWM7O0FBRWYscUJBQUssT0FBTCxHQUFlLDZCQUFjLEtBQUssT0FBTCxDQUE3QixDQUZlOztBQUlmLG9CQUFJLEtBQUssT0FBTCxDQUFhLGNBQWIsRUFBNkI7QUFDN0IseUJBQUssV0FBTCxHQUFtQixLQUFLLE9BQUwsQ0FBYSxjQUFiLENBQTRCLEtBQUssT0FBTCxDQUEvQyxDQUQ2QjtpQkFBakM7YUFKSjs7QUFTQSxpQkFBSyxRQUFMLEdBQWdCLGVBQWhCLENBVmM7U0FBbEI7OztBQVZZLGFBd0JQLElBQUksR0FBSixJQUFXLEtBQUssWUFBTCxFQUFtQjtBQUMvQixnQkFB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TUFBTCxDQURYO0FBRUosd0JBQU0sS0FBTixZQUZJOztBQUlKLGFBQUssSUFBSSxHQUFKLElBQVcsTUFBaEIsRUFBd0I7QUFDcEIsZ0JBQUksT0FBTyxjQUFQLENBQXNCLEdBQXRCLENBQUosRUFBZ0M7QUFDNUIsdUJBQU8sR0FBUCxFQUFZLElBQVosR0FBbUIsT0FBTyxHQUFQLEVBQVksTUFBWixHQUFxQixPQUFPLEdBQVAsRUFBWSxPQUFaLENBRFo7YUFBaEM7U0FESjs7QUFNQSxlQUFPLElBQVAsQ0FWSTs7O0FBalJOLFdBOFJLLGlEQUFtQixPQUFPO0FBQzdCLDRCQUFZLEtBQUssU0FBTCxDQUFlLFlBQWYsRUFBZ0MsTUFBNUMsQ0FENkI7OztBQTlSL0IsV0FrU0ssaURBQW1CLE9BQU87QUFDN0IsNEJBQVksS0FBSyxTQUFMLENBQWUsWUFBZixFQUFnQyxNQUE1QyxDQUQ2Qjs7O1dBbFMvQjs7O0FBdVNOLE9BQU8sU0FBUCxDQUFpQixnQkFBakIsR0FBb0MsU0FBcEM7QUFDQSxPQUFPLFNBQVAsQ0FBaUIsWUFBakIsR0FBZ0M7QUFDNUIsYUFBUyxDQUFUO0FBQ0EsY0FBVSxDQUFWO0FBQ0EsV0FBTyxLQUFQO0FBQ0EsU0FBSyxTQUFMO0FBQ0EsU0FBSyxTQUFMO0FBQ0EsZUFBVyxTQUFYO0NBTko7O2tCQVNlIiwiZmlsZSI6IkFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGFzayBmcm9tICcuLi90YXNrL1Rhc2snO1xuaW1wb3J0IHsgc3BlZWRQZXJTZWNvbmQgfSBmcm9tICcuLi9pbmMvY2FsYyc7XG5pbXBvcnQgeyBpc051bSwgaXNPYmosIGlzU3RyaW5nIH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcbmltcG9ydCBkZXRlY3RWYWx1ZVR5cGUgZnJvbSAnLi4vdmFsdWUtdHlwZXMvZGV0ZWN0JztcbmltcG9ydCBOVU1FUklDQUxfVkFMVUVTIGZyb20gJy4uL2luYy9udW1lcmljYWwtdmFsdWVzJztcbmltcG9ydCBkZXRlY3RBZGFwdGVyIGZyb20gJy4uL2luYy9kZXRlY3QtYWRhcHRlcic7XG5cbmNvbnN0IE5VTV9OVU1FUklDQUxfVkFMVUVTID0gTlVNRVJJQ0FMX1ZBTFVFUy5sZW5ndGg7XG5cbmNvbnN0IGRlZmF1bHRSZW5kZXJlciA9ICh7IHN0YXRlLCBhZGFwdGVyLCBhZGFwdGVyRGF0YSwgZWxlbWVudCB9KSA9PiBhZGFwdGVyKGVsZW1lbnQsIHN0YXRlLCBhZGFwdGVyRGF0YSk7XG5cbmNsYXNzIEFjdGlvbiBleHRlbmRzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHByb3BzLnN0YXRlID0ge307XG4gICAgICAgIHByb3BzLnZhbHVlS2V5cyA9IFtdO1xuICAgICAgICBwcm9wcy5wYXJlbnRLZXlzID0gW107XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIFNldCBBY3Rpb24gcHJvcGVydGllc1xuICAgICAgICAjIyBTZXQgdXNlci1kZWZpbmVkIEFjdGlvbiBwcm9wZXJ0aWVzXG5cbiAgICAgICAgQHBhcmFtIFtvYmplY3RdXG4gICAgICAgIEByZXR1cm4gW0FjdGlvbl1cbiAgICAqL1xuICAgIHNldChwcm9wcyA9IHt9KSB7XG4gICAgICAgIHRoaXMudmFsdWVzID0gdGhpcy52YWx1ZXMgfHwge307XG5cbiAgICAgICAgY29uc3QgeyB2YWx1ZXMsIC4uLnByb3BzVG9TZXQgfSA9IHByb3BzO1xuICAgICAgICBjb25zdCBpbmhlcml0YWJsZSA9IHt9O1xuXG4gICAgICAgIC8vIFNldCBub24tY29uc3VtZWQgcHJvcGVydGllc1xuICAgICAgICBzdXBlci5zZXQocHJvcHNUb1NldCk7XG5cbiAgICAgICAgLy8gRGV0ZWN0IGNvcnJlY3QgYGFkYXB0ZXJgIGlmIG5vbmUgZXhpc3RzIGFuZCBgZWxlbWVudGAgaXMgYmVpbmcgc2V0XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5hZGFwdGVyKSB7XG4gICAgICAgICAgICAgICAgLy8gRHVja3R5cGlzaCBjaGVjayBmb3IgQWRhcHRlclxuICAgICAgICAgICAgICAgIHRoaXMuYWRhcHRlciA9IGRldGVjdEFkYXB0ZXIodGhpcy5lbGVtZW50KTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFkYXB0ZXIuZ2V0RWxlbWVudERhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGFwdGVyRGF0YSA9IHRoaXMuYWRhcHRlci5nZXRFbGVtZW50RGF0YSh0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5vblJlbmRlciA9IGRlZmF1bHRSZW5kZXJlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFByaW1lIGFuIG9iamVjdCB0byBpbmhlcml0IGZyb20sIHdpdGggb25seSBgdmFsdWVgIHByb3BlcnRpZXNcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMuZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kZWZhdWx0VmFsdWUuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBwcm9wc1RvU2V0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBpbmhlcml0YWJsZVtrZXldID0gcHJvcHNUb1NldFtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIGV4aXN0aW5nIHZhbHVlcyB3aXRoIGluaGVyaXRhYmxlIHByb3BlcnRpZXNcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMudmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy52YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWVzW2tleV0gPSB7IC4uLnRoaXMudmFsdWVzW2tleV0sIC4uLmluaGVyaXRhYmxlIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGVcbiAgICAgICAgaWYgKHZhbHVlcykge1xuICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZXModmFsdWVzLCBpbmhlcml0YWJsZSk7XG5cbiAgICAgICAgICAgIC8vIFByZWNvbXB1dGUgbnVtYmVyIG9mIHZhbHVlIGtleSBhbmQgcGFyZW50IGtleXMgdG8gYXZvaWQgcGVyLWZyYW1lIG1lYXN1cmVtZW50XG4gICAgICAgICAgICB0aGlzLm51bVZhbHVlS2V5cyA9IHRoaXMudmFsdWVLZXlzLmxlbmd0aDtcbiAgICAgICAgICAgIHRoaXMubnVtUGFyZW50S2V5cyA9IHRoaXMucGFyZW50S2V5cy5sZW5ndGg7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBnZXQoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlW2tleV07XG4gICAgfVxuXG4gICAgc2V0VmFsdWVzKHZhbHVlcywgaW5oZXJpdCkge1xuICAgICAgICAvLyBJdGVyYXRlIG92ZXIgYWxsIGluY29taW5nIHZhbHVlcyBhbmQgc2V0XG4gICAgICAgIGZvciAobGV0IGtleSBpbiB2YWx1ZXMpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGxldCBoYXNDaGlsZHJlbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkcmVuID0ge307XG4gICAgICAgICAgICAgICAgLy8gTWVyZ2UgaW50byBleGlzdGluZyB2YWx1ZSBvciBjcmVhdGUgbmV3XG4gICAgICAgICAgICAgICAgbGV0IG5ld1ZhbHVlID0gdGhpcy52YWx1ZXNba2V5XSA/IHsgLi4udGhpcy52YWx1ZXNba2V5XSB9IDogeyAuLi50aGlzLmRlZmF1bHRWYWx1ZSwgLi4uaW5oZXJpdCB9O1xuXG4gICAgICAgICAgICAgICAgLy8gSWYgdmFsdWVzIGlzIG5vdCBhbiBvYmplY3QsIGFzc2lnbiB2YWx1ZSB0byBkZWZhdWx0IHByb3BcbiAgICAgICAgICAgICAgICBpZiAoIWlzT2JqKHZhbHVlc1trZXldKSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZVt0aGlzLmRlZmF1bHRWYWx1ZVByb3BdID0gdmFsdWVzW2tleV07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSB7IC4uLm5ld1ZhbHVlLCAuLi52YWx1ZXNba2V5XSB9O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIElmIHdlJ3ZlIGdvdCBhbiBhZGFwdGVyLCBnZXQgdGhlIGN1cnJlbnQgdmFsdWVcbiAgICAgICAgICAgICAgICBpZiAodmFsdWVzW2tleV0uY3VycmVudCA9PT0gdW5kZWZpbmVkICYmIHRoaXMuYWRhcHRlcikge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS5jdXJyZW50ID0gdGhpcy5hZGFwdGVyLmdldCh0aGlzLmVsZW1lbnQsIGtleSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gSWYgd2UgZG9uJ3QgaGF2ZSBhIHZhbHVlIHR5cGUgYW5kIHdlIGRvIGhhdmUgYW4gQWRhcHRlciwgY2hlY2sgZm9yIHR5cGUgd2l0aCB2YWx1ZSBrZXlcbiAgICAgICAgICAgICAgICBpZiAoIW5ld1ZhbHVlLnR5cGUgJiYgdGhpcy5hZGFwdGVyICYmIHRoaXMuYWRhcHRlci5jaGVja1ZhbHVlVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS50eXBlID0gdGhpcy5hZGFwdGVyLmNoZWNrVmFsdWVUeXBlKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gSWYgd2Ugc3RpbGwgZG9uJ3QgaGF2ZSBhIHZhbHVlIHR5cGUgYW5kIHRoaXMgaXMgdGhlIGZpcnN0IHRpbWUgd2UndmUgc2V0IHRoaXMgdmFsdWUsIGNoZWNrIG51bWVyaWNhbCB2YWx1ZXMgZm9yIHN0cmluZ3MgYW5kIHRlc3RcbiAgICAgICAgICAgICAgICBpZiAoIW5ld1ZhbHVlLnR5cGUgJiYgIXRoaXMudmFsdWVzW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUudHlwZSA9IGRldGVjdFZhbHVlVHlwZShuZXdWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gSWYgd2UgaGF2ZSBhIHZhbHVlIHR5cGUsIGhhbmRsZS4gVGhpcyBpcyBteSBsZWFzdCBmYXZvdXJpdGUgcGFydCBvZiBQb3Btb3Rpb24sIHNvLi4uIGVuam95LlxuICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZS50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTlVNX05VTUVSSUNBTF9WQUxVRVM7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvcE5hbWUgPSBOVU1FUklDQUxfVkFMVUVTW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWVQcm9wID0gbmV3VmFsdWVbcHJvcE5hbWVdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGlzIHByb3AgaXMgYSBzdHJpbmcgYW5kIHdlIGhhdmUgYSBzcGxpdHRlciwgc3BsaXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZS50eXBlLmhhc093blByb3BlcnR5KCdzcGxpdCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3BsaXRQcm9wID0gaXNTdHJpbmcodmFsdWVQcm9wKSA/IG5ld1ZhbHVlLnR5cGUuc3BsaXQodmFsdWVQcm9wKSA6IHt9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgc3BsaXRLZXkgaW4gc3BsaXRQcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzcGxpdFByb3AuaGFzT3duUHJvcGVydHkoc3BsaXRLZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21iaW5lZEtleSA9IGtleSArIHNwbGl0S2V5O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSBkb24ndCBoYXZlIGEgY2hpbGQgdmFsdWUgZm9yIHRoaXMga2V5LCBtYWtlIG9uZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjaGlsZHJlbltjb21iaW5lZEtleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkZWZhdWx0VmFsdWUgPSAobmV3VmFsdWUudHlwZS5kZWZhdWx0UHJvcHMgJiYgbmV3VmFsdWUudHlwZS5kZWZhdWx0UHJvcHNbc3BsaXRLZXldKSA/IG5ld1ZhbHVlLnR5cGUuZGVmYXVsdFByb3BzW3NwbGl0S2V5XSA6IG5ld1ZhbHVlLnR5cGUuZGVmYXVsdFByb3BzIHx8IHt9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW5bY29tYmluZWRLZXldID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5uZXdWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uZGVmYXVsdFZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRLZXk6IHNwbGl0S2V5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBjaGlsZHJlbltjb21iaW5lZEtleV0udHlwZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzQ2hpbGRyZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW5bY29tYmluZWRLZXldW3Byb3BOYW1lXSA9IHBhcnNlRmxvYXQoc3BsaXRQcm9wW3NwbGl0S2V5XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSBoYXZlIGEgdGVtcGxhdGUgZnVuY3Rpb24sIGdlbmVyYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFuZXdWYWx1ZS50ZW1wbGF0ZSAmJiBuZXdWYWx1ZS50eXBlLnRlbXBsYXRlICYmIGlzU3RyaW5nKHZhbHVlUHJvcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUudGVtcGxhdGUgPSBuZXdWYWx1ZS50eXBlLnRlbXBsYXRlKHZhbHVlUHJvcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChuZXdWYWx1ZS50eXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0geyAuLi5uZXdWYWx1ZSwgLi4ubmV3VmFsdWUudHlwZS5kZWZhdWx0UHJvcHMgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlUHJvcCAhPT0gdW5kZWZpbmVkICYmIG5ld1ZhbHVlLnR5cGUucGFyc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZVtwcm9wTmFtZV0gPSBuZXdWYWx1ZS50eXBlLnBhcnNlKHZhbHVlUHJvcCwgbmV3VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSAvLyBFbmQgdmFsdWUgdHlwZSBub25zZW5zZVxuXG4gICAgICAgICAgICAgICAgLy8gU2V0IGBwcmV2YCB0byBgY3VycmVudGAgZm9yIGZpcnN0IGZyYW1lIGFmdGVyIHNldFxuICAgICAgICAgICAgICAgIG5ld1ZhbHVlLnByZXYgPSBuZXdWYWx1ZS5jdXJyZW50O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIElmIHRoaXMgdmFsdWUgZG9lc24ndCBoYXZlIGNoaWxkcmVuLCBhZGQgdG8gdmFsdWVLZXlzXG4gICAgICAgICAgICAgICAgaWYgKCFoYXNDaGlsZHJlbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy52YWx1ZUtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZUtleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBPciBhZGQgdG8gcGFyZW50S2V5c1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLmNoaWxkcmVuID0gbmV3VmFsdWUuY2hpbGRyZW4gfHwge307XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudEtleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZXMoY2hpbGRyZW4pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMudmFsdWVzW2tleV0gPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICAgIERlY2lkZSB3aGV0aGVyIHRoaXMgQWN0aW9uIHdpbGwgcmVuZGVyIG9uIG5leHQgZnJhbWVcblxuICAgICAgICBAcGFyYW0gW0FjdGlvbl1cbiAgICAgICAgQHBhcmFtIFtudW1iZXJdXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJuIHRydWUgdG8gcmVuZGVyXG4gICAgKi9cbiAgICB3aWxsUmVuZGVyKGFjdGlvbiwgZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgICAgICBsZXQgaGFzQ2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vIENoZWNrIGlmIGJhc2UgdmFsdWVzIGhhdmUgdXBkYXRlZCBcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSB0aGlzLnZhbHVlS2V5c1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcblxuICAgICAgICAgICAgLy8gUnVuIHRyYW5zZm9ybSBmdW5jdGlvbiAoaWYgcHJlc2VudClcbiAgICAgICAgICAgIGlmICh2YWx1ZS50cmFuc2Zvcm0pIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gdmFsdWUudHJhbnNmb3JtKHZhbHVlLmN1cnJlbnQsIGtleSwgdGhpcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENhcCBtaW5pbXVtXG4gICAgICAgICAgICBpZiAoaXNOdW0odmFsdWUubWluKSkge1xuICAgICAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSBNYXRoLm1heCh2YWx1ZS5jdXJyZW50LCB2YWx1ZS5taW4pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDYXAgbWF4aW11bVxuICAgICAgICAgICAgaWYgKGlzTnVtKHZhbHVlLm1heCkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gTWF0aC5taW4odmFsdWUuY3VycmVudCwgdmFsdWUubWF4KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUm91bmQgbnVtYmVyXG4gICAgICAgICAgICBpZiAodmFsdWUucm91bmQpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gTWF0aC5yb3VuZCh2YWx1ZS5jdXJyZW50KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFsdWUuZnJhbWVDaGFuZ2UgPSB2YWx1ZS5jdXJyZW50IC0gdmFsdWUucHJldjtcblxuICAgICAgICAgICAgLy8gVXBkYXRlIHZlbG9jaXR5XG4gICAgICAgICAgICBpZiAoIXRoaXMuY2FsY3VsYXRlc1ZlbG9jaXR5KSB7XG4gICAgICAgICAgICAgICAgdmFsdWUudmVsb2NpdHkgPSBzcGVlZFBlclNlY29uZCh2YWx1ZS5mcmFtZUNoYW5nZSwgZWxhcHNlZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIHRoaXMgdmFsdWUgaGFzIGNoYW5nZWRcbiAgICAgICAgICAgIGlmICh2YWx1ZS5wcmV2ICE9PSB2YWx1ZS5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdmFsdWUucHJldiA9IHZhbHVlLmN1cnJlbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEFwcGVuZCB1bml0XG4gICAgICAgICAgICBjb25zdCB2YWx1ZUZvclN0YXRlID0gKHZhbHVlLnR5cGUgJiYgdmFsdWUudHlwZS5zZXJpYWxpemUpID8gdmFsdWUudHlwZS5zZXJpYWxpemUodmFsdWUuY3VycmVudCwgdmFsdWUpIDogdmFsdWUuY3VycmVudDtcblxuICAgICAgICAgICAgLy8gQWRkIHRvIHN0YXRlIGlmIHRoaXMgaXMgbm90IGEgY2hpbGQgdmF1ZVxuICAgICAgICAgICAgaWYgKCF2YWx1ZS5wYXJlbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlW2tleV0gPSB2YWx1ZUZvclN0YXRlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlc1t2YWx1ZS5wYXJlbnRdLmNoaWxkcmVuW3ZhbHVlLmNoaWxkS2V5XSA9IHZhbHVlRm9yU3RhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgcGFyZW50IHZhbHVlc1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtUGFyZW50S2V5czsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSB0aGlzLnBhcmVudEtleXNbaV07XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG5cbiAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSB2YWx1ZS50eXBlLmNvbWJpbmUodmFsdWUuY2hpbGRyZW4sIHZhbHVlLnRlbXBsYXRlKTtcblxuICAgICAgICAgICAgdGhpcy5zdGF0ZVtrZXldID0gdmFsdWUuY3VycmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm9uRnJhbWUpIHtcbiAgICAgICAgICAgIHRoaXMub25GcmFtZSh0aGlzLnN0YXRlLCB0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAodGhpcy5vbkNsZWFudXApID8gdHJ1ZSA6IGhhc0NoYW5nZWQ7XG4gICAgfVxuXG4gICAgaW5oZXJpdChwcm9wcyA9IHt9KSB7XG4gICAgICAgIGNvbnN0IHsgdmFsdWVzLCAuLi5wcm9wc1RvU2V0IH0gPSBwcm9wcztcbiAgICAgICAgY29uc3QgbmV3QWN0aW9uID0gc3VwZXIuaW5oZXJpdChwcm9wc1RvU2V0KTtcblxuICAgICAgICBpZiAodmFsdWVzKSB7XG4gICAgICAgICAgICBuZXdBY3Rpb24uc2V0KHsgdmFsdWVzIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ld0FjdGlvbjtcbiAgICB9XG5cbiAgICBwYXVzZSgpIHtcbiAgICAgICAgc3VwZXIuc3RvcCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXN1bWUoKSB7XG4gICAgICAgIHN1cGVyLnN0YXJ0KCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNBY3RpdmUgPyB0aGlzLnBhdXNlKCkgOiB0aGlzLnJlc3VtZSgpO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLnZhbHVlcztcbiAgICAgICAgc3VwZXIuc3RhcnQoKTtcblxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZXNba2V5XS5wcmV2ID0gdmFsdWVzW2tleV0ub3JpZ2luID0gdmFsdWVzW2tleV0uY3VycmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHN0YXRpYyBleHRlbmREZWZhdWx0VmFsdWUocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIHsgLi4udGhpcy5wcm90b3R5cGUuZGVmYXVsdFZhbHVlLCAuLi5wcm9wcyB9O1xuICAgIH1cblxuICAgIHN0YXRpYyBleHRlbmREZWZhdWx0UHJvcHMocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIHsgLi4udGhpcy5wcm90b3R5cGUuZGVmYXVsdFByb3BzLCAuLi5wcm9wcyB9O1xuICAgIH1cbn1cblxuQWN0aW9uLnByb3RvdHlwZS5kZWZhdWx0VmFsdWVQcm9wID0gJ2N1cnJlbnQnO1xuQWN0aW9uLnByb3RvdHlwZS5kZWZhdWx0VmFsdWUgPSB7XG4gICAgY3VycmVudDogMCxcbiAgICB2ZWxvY2l0eTogMCxcbiAgICByb3VuZDogZmFsc2UsXG4gICAgbWluOiB1bmRlZmluZWQsXG4gICAgbWF4OiB1bmRlZmluZWQsXG4gICAgdHJhbnNmb3JtOiB1bmRlZmluZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFjdGlvbjtcbiJdfQ==

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
	                actionValue.velocity += value.velocity;
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
	//# sourceMappingURL=data:application/json;base64,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Q3pDLDhCQUFNLElBQU4sWUFEeUM7U0FBN0M7OztXQW5KRjs7O0FBeUpOLEtBQUssU0FBTCxDQUFlLFlBQWYsR0FBOEIsaUJBQU8sa0JBQVAsQ0FBMEI7QUFDcEQsYUFBUyxFQUFUO0FBQ0EsZ0JBQVksQ0FBWjtDQUYwQixDQUE5Qjs7a0JBS2UiLCJmaWxlIjoiRmxvdy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWN0aW9uIGZyb20gJy4uL2FjdGlvbnMvQWN0aW9uJztcbmltcG9ydCBnZW5lcmF0ZUJsZW5kQ3VydmUgZnJvbSAnLi9mbG93L2dlbmVyYXRlLWJsZW5kLWN1cnZlJztcblxuLypcbiAgICBNZXRob2RzIGFuZCBwcm9wZXJ0aWVzIHRvIGFkZCB0byBib3VuZCBBY3Rpb25zXG4qL1xuY29uc3QgYm91bmRPblN0YXJ0ID0gKGFjdGlvbikgPT4gYWN0aW9uLmZsb3cuYWN0aXZhdGVBY3Rpb24oYWN0aW9uLmlkLCBhY3Rpb24pO1xuY29uc3QgYm91bmRPblN0b3AgPSAoYWN0aW9uKSA9PiBhY3Rpb24uZmxvdy5kZWFjdGl2YXRlQWN0aW9uKGFjdGlvbi5pZCk7XG5jb25zdCBib3VuZFByb3BzID0gKGZsb3cpID0+ICh7XG4gICAgZmxvdyxcbiAgICBpc1ByaW9yaXR5OiB0cnVlLFxuICAgIG9uQWN0aXZhdGU6IGJvdW5kT25TdGFydCxcbiAgICBvbkRlYWN0aXZhdGU6IGJvdW5kT25TdG9wXG59KTtcblxuY2xhc3MgRmxvdyBleHRlbmRzIEFjdGlvbiB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLmFjdGl2ZUFjdGlvbnMgPSB7fTtcbiAgICAgICAgdGhpcy5udW1BY3RpdmVBY3Rpb25zID0gMDtcbiAgICB9XG5cbiAgICBzZXQocHJvcHMpIHtcbiAgICAgICAgc3VwZXIuc2V0KHByb3BzKTtcblxuICAgICAgICB0aGlzLm9uY2UoKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBCaW5kIEFjdGlvbiB0byBBY3RvclxuICAgICovXG4gICAgY29ubmVjdChhY3Rpb24pIHtcbiAgICAgICAgY29uc3QgaW5oZXJpdGVkQWN0aW9uID0gYWN0aW9uLmluaGVyaXQoKTtcbiAgICAgICAgbGV0IG5ld1ZhbHVlcyA9IHt9O1xuICAgICAgICBsZXQgaGFzTmV3VmFsdWVzID0gZmFsc2U7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHZhbHVlcyBvbiBhY3RvciB0aGF0IGRvbid0IGV4aXN0XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBpbmhlcml0ZWRBY3Rpb24udmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAoaW5oZXJpdGVkQWN0aW9uLnZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmICF0aGlzLnZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgbmV3VmFsdWVzW2tleV0gPSB7fTtcbiAgICAgICAgICAgICAgICBoYXNOZXdWYWx1ZXMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhhc05ld1ZhbHVlcykge1xuICAgICAgICAgICAgdGhpcy5zZXQoeyB2YWx1ZXM6IG5ld1ZhbHVlcyB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbmhlcml0ZWRBY3Rpb24uc2V0KGJvdW5kUHJvcHModGhpcywgaW5oZXJpdGVkQWN0aW9uKSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgU3RhcnQgQWN0b3JcblxuICAgICAgICBJZiBBY3Rpb24gaXMgcHJvdmlkZWQsIGJpbmQgaXQgdG8gdGhpcyBBY3RvciBhbmQgc3RhcnRcblxuICAgICAgICBAcGFyYW0gKG9wdGlvbmFsKSBbQWN0aW9uXVxuICAgICovXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHN1cGVyLnN0YXJ0KCk7XG5cbiAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMuYWN0aXZlQWN0aW9ucykge1xuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlQWN0aW9ucy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWN0aW9uID0gdGhpcy5hY3RpdmVBY3Rpb25zW2tleV07XG4gICAgICAgICAgICAgICAgaWYgKCFhY3Rpb24uaXNBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc3RvcCgpIHtcbiAgICAgICAgc3VwZXIuc3RvcCgpO1xuXG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLmFjdGl2ZUFjdGlvbnMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZUFjdGlvbnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlQWN0aW9uc1trZXldLnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHdpbGxSZW5kZXIoYWN0b3IsIGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSB0aGlzLnZhbHVlS2V5c1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcbiAgICAgICAgICAgIGNvbnN0IGRyaXZlciA9IHZhbHVlLm51bURyaXZlcnMgPyB0aGlzLmFjdGl2ZUFjdGlvbnNbdmFsdWUuZHJpdmVyc1swXV0gOiBmYWxzZTtcbiAgICAgICAgICAgIGxldCBuZXdDdXJyZW50ID0gdmFsdWUubnVtRHJpdmVycyA/IGRyaXZlci52YWx1ZXNba2V5XS5jdXJyZW50IDogdmFsdWUuY3VycmVudDtcblxuICAgICAgICAgICAgaWYgKHZhbHVlLmJsZW5kQ3VydmUpIHtcbiAgICAgICAgICAgICAgICBuZXdDdXJyZW50ID0gdmFsdWUuYmxlbmRDdXJ2ZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gbmV3Q3VycmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdXBlci53aWxsUmVuZGVyKGFjdG9yLCBmcmFtZVN0YW1wLCBlbGFwc2VkKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBBZGQgYWN0aXZlIGFjdGlvbnNcblxuICAgICAgICBAcGFyYW0gW251bWJlcl1cbiAgICAgICAgQHBhcmFtIFtBY3Rpb25dXG4gICAgKi9cbiAgICBhY3RpdmF0ZUFjdGlvbihpZCwgYWN0aW9uKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlQWN0aW9uc1tpZF0gPSBhY3Rpb247XG4gICAgICAgIHRoaXMubnVtQWN0aXZlQWN0aW9ucysrO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWN0aW9uLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBhY3Rpb24udmFsdWVLZXlzW2ldO1xuICAgICAgICAgICAgY29uc3QgYWN0aW9uVmFsdWUgPSBhY3Rpb24udmFsdWVzW2tleV07XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG5cbiAgICAgICAgICAgIC8vIElmIHdlJ3JlIGJsZW5kaW5nIHRoaXMgYWN0aW9uLCBhbmQgdGhlcmUncyBvbiBhbHJlYWR5IGluIHByb2dyZXNzXG4gICAgICAgICAgICBpZiAoYWN0aW9uLmJsZW5kICYmIHZhbHVlLm51bURyaXZlcnMgJiYgIXZhbHVlLmJsZW5kQ3VydmUgJiYgKHZhbHVlLmRyaXZlcnNbMF0ucHJvdG90eXBlID09PSBhY3Rpb24ucHJvdG90eXBlKSkge1xuICAgICAgICAgICAgICAgIHZhbHVlLmJsZW5kQ3VydmUgPSBnZW5lcmF0ZUJsZW5kQ3VydmUodGhpcy5hY3RpdmVBY3Rpb25zW3ZhbHVlLmRyaXZlcnNbMF1dLCBhY3Rpb24sIHZhbHVlLCBrZXkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghYWN0aW9uLmlzU2NydWJiaW5nKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUuYmxlbmRDdXJ2ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAvLyBQYXNzIEFjdG9yIHZhbHVlIHByb3BlcnRpZXMgdG8gQWN0aW9uXG4gICAgICAgICAgICAgICAgYWN0aW9uVmFsdWUudmVsb2NpdHkgKz0gdmFsdWUudmVsb2NpdHk7XG4gICAgICAgICAgICAgICAgYWN0aW9uVmFsdWUuZnJvbSA9IGFjdGlvblZhbHVlLmN1cnJlbnQgPSB2YWx1ZS5jdXJyZW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YWx1ZS5kcml2ZXJzID0gW2lkXTtcbiAgICAgICAgICAgIHZhbHVlLm51bURyaXZlcnMgPSB2YWx1ZS5kcml2ZXJzLmxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm51bUFjdGl2ZUFjdGlvbnMpIHtcbiAgICAgICAgICAgIHN1cGVyLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBSZW1vdmUgYWN0aXZlIGFjdGlvbnNcblxuICAgICAgICBAcGFyYW0gW251bWJlcl1cbiAgICAqL1xuICAgIGRlYWN0aXZhdGVBY3Rpb24oaWQpIHtcbiAgICAgICAgY29uc3QgYWN0aW9uID0gdGhpcy5hY3RpdmVBY3Rpb25zW2lkXTtcblxuICAgICAgICBpZiAoYWN0aW9uKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFjdGlvbi5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGFjdGlvbi52YWx1ZUtleXNbaV07XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRyaXZlckluZGV4ID0gdmFsdWUuZHJpdmVycy5pbmRleE9mKGlkKTtcblxuICAgICAgICAgICAgICAgIGlmIChkcml2ZXJJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUuZHJpdmVycy5zcGxpY2UoZHJpdmVySW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5udW1Ecml2ZXJzLS07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5hY3RpdmVBY3Rpb25zW2lkXTtcbiAgICAgICAgICAgIHRoaXMubnVtQWN0aXZlQWN0aW9ucy0tO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLm51bUFjdGl2ZUFjdGlvbnMgJiYgdGhpcy5pc0FjdGl2ZSkge1xuICAgICAgICAgICAgc3VwZXIuc3RvcCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5GbG93LnByb3RvdHlwZS5kZWZhdWx0VmFsdWUgPSBBY3Rpb24uZXh0ZW5kRGVmYXVsdFZhbHVlKHtcbiAgICBkcml2ZXJzOiBbXSxcbiAgICBudW1Ecml2ZXJzOiAwXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgRmxvdztcbiJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL1R3ZWVuLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtBLElBQU0sUUFBUSxPQUFSO0FBQ04sSUFBTSxhQUFhO0FBQ2YsVUFBTSxTQUFOO0FBQ0EsVUFBTSxTQUFOO0FBQ0EsVUFBTSxZQUFOO0NBSEU7O0lBTUE7Ozs7Ozs7OztvQkFDRix5QkFBUTtBQUNKLGFBQUssT0FBTCxHQUFlLENBQWYsQ0FESTtBQUVKLGFBQUssU0FBTCxHQUFpQixLQUFLLFNBQUwsR0FBaUIsS0FBSyxTQUFMLEdBQWlCLENBQWpCLENBRjlCO0FBR0osYUFBSyxXQUFMLEdBQW1CLEtBQW5CLENBSEk7O0FBS0osZUFBTyxrQkFBTSxLQUFOLFdBQVAsQ0FMSTs7O0FBRE4sb0JBU0YsNkJBQVMsT0FBTyxZQUFZLFNBQVM7QUFDakMsWUFBTSxpQkFBaUIsSUFBQyxDQUFLLGFBQUwsS0FBdUIsQ0FBdkIsR0FBNEIsQ0FBN0IsR0FBaUMsQ0FBakMsQ0FEVTs7QUFHakMsYUFBSyxLQUFMLEdBQWEsSUFBYixDQUhpQzs7QUFLakMsWUFBSSxDQUFDLEtBQUssV0FBTCxFQUFrQjtBQUNuQixpQkFBSyxPQUFMLElBQWdCLE9BQUMsR0FBVSxLQUFLLE1BQUwsR0FBZSxLQUFLLGFBQUwsQ0FEdkI7U0FBdkI7O0FBSUEsYUFBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksS0FBSyxZQUFMLEVBQW1CLEdBQXZDLEVBQTRDO0FBQ3hDLGdCQUFNLE1BQU0sS0FBSyxTQUFMLENBQWUsQ0FBZixDQUFOLENBRGtDO0FBRXhDLGdCQUFNLFFBQVEsS0FBSyxNQUFMLENBQVksR0FBWixDQUFSLENBRmtDOztBQUl4QyxnQkFBSSxXQUFXLG9CQUFTLGdDQUFxQixLQUFLLE9BQUwsR0FBZSxNQUFNLEtBQU4sRUFBYSxDQUFqRCxFQUFvRCxNQUFNLFFBQU4sQ0FBN0QsRUFBOEUsQ0FBOUUsRUFBaUYsQ0FBakYsQ0FBWDs7O0FBSm9DLGdCQU9w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LFlBQWhCLEdBQStCLGlCQUFPLGtCQUFQLENBQTBCO0FBQ3JELFdBQU8sSUFBUDtBQUNBLFlBQVEsQ0FBUjtBQUNBLFVBQU0sQ0FBTjtBQUNBLFVBQU0sQ0FBTjtBQUNBLFVBQU0sQ0FBTjtBQUNBLGVBQVcsQ0FBWDtBQUNBLGVBQVcsQ0FBWDtBQUNBLGVBQVcsQ0FBWDtBQUNBLG1CQUFlLENBQWY7QUFDQSxpQkFBYSxLQUFiO0FBQ0EsV0FBTyxLQUFQO0FBQ0EsYUFBUyxDQUFUO0NBWjJCLENBQS9COztrQkFlZSIsImZpbGUiOiJUd2Vlbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWN0aW9uIGZyb20gJy4vQWN0aW9uJztcbmltcG9ydCBlYXNpbmcgZnJvbSAnLi9lYXNpbmcvcHJlc2V0LWVhc2luZyc7XG5pbXBvcnQgeyBjdXJyZW50VGltZSwgaXNOdW0gfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuaW1wb3J0IHsgZWFzZSwgcmVzdHJpY3QsIGdldFByb2dyZXNzRnJvbVZhbHVlLCBzdGVwUHJvZ3Jlc3MgfSBmcm9tICcuLi9pbmMvY2FsYyc7XG5cbmNvbnN0IENPVU5UID0gJ0NvdW50JztcbmNvbnN0IE5FWFRfU1RFUFMgPSB7XG4gICAgbG9vcDogJ3Jlc3RhcnQnLFxuICAgIHlveW86ICdyZXZlcnNlJyxcbiAgICBmbGlwOiAnZmxpcFZhbHVlcydcbn07XG5cbmNsYXNzIFR3ZWVuIGV4dGVuZHMgQWN0aW9uIHtcbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5lbGFwc2VkID0gMDtcbiAgICAgICAgdGhpcy5mbGlwQ291bnQgPSB0aGlzLnlveW9Db3VudCA9IHRoaXMubG9vcENvdW50ID0gMDtcbiAgICAgICAgdGhpcy5pc1NjcnViYmluZyA9IGZhbHNlO1xuXG4gICAgICAgIHJldHVybiBzdXBlci5zdGFydCgpO1xuICAgIH1cblxuICAgIG9uVXBkYXRlKHR3ZWVuLCBmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgICAgIGNvbnN0IHByb2dyZXNzVGFyZ2V0ID0gKHRoaXMucGxheURpcmVjdGlvbiA9PT0gMSkgPyAxIDogMDtcblxuICAgICAgICB0aGlzLmVuZGVkID0gdHJ1ZTtcblxuICAgICAgICBpZiAoIXRoaXMuaXNTY3J1YmJpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuZWxhcHNlZCArPSAoZWxhcHNlZCAqIHRoaXMuZGlsYXRlKSAqIHRoaXMucGxheURpcmVjdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gdGhpcy52YWx1ZUtleXNbaV07XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG5cbiAgICAgICAgICAgIGxldCBwcm9ncmVzcyA9IHJlc3RyaWN0KGdldFByb2dyZXNzRnJvbVZhbHVlKHRoaXMuZWxhcHNlZCAtIHZhbHVlLmRlbGF5LCAwLCB2YWx1ZS5kdXJhdGlvbiksIDAsIDEpO1xuXG4gICAgICAgICAgICAvLyBNYXJrIFR3ZWVuIGFzIE5PVCBlbmRlZCBpZiBzdGlsbCBpbiBwcm9ncmVzc1xuICAgICAgICAgICAgaWYgKHByb2dyZXNzICE9PSBwcm9ncmVzc1RhcmdldCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5kZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU3RlcCBwcm9ncmVzcyBpZiB3ZSdyZSBzdGVwcGluZ1xuICAgICAgICAgICAgaWYgKHZhbHVlLnN0ZXBzKSB7XG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3MgPSBzdGVwUHJvZ3Jlc3MocHJvZ3Jlc3MsIHZhbHVlLnN0ZXBzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRWFzZSBwcm9ncmVzc1xuICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IGVhc2UocHJvZ3Jlc3MsIHZhbHVlLmZyb20sIHZhbHVlLnRvLCB2YWx1ZS5lYXNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uRnJhbWVFbmQoKSB7XG4gICAgICAgIGlmICh0aGlzLmVuZGVkICYmICF0aGlzLmlzU2NydWJiaW5nKSB7XG4gICAgICAgICAgICBsZXQgc3RlcFRha2VuID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBORVhUX1NURVBTKSB7XG4gICAgICAgICAgICAgICAgaWYgKE5FWFRfU1RFUFMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNOdW0odGhpc1trZXldKSAmJiB0aGlzW2tleV0gPiB0aGlzW2tleSArIENPVU5UXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1trZXkgKyBDT1VOVF0rKztcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXBUYWtlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW05FWFRfU1RFUFNba2V5XV0oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFzdGVwVGFrZW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmbGlwVmFsdWVzKCkge1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLnZhbHVlcztcblxuICAgICAgICB0aGlzLmVsYXBzZWQgPSB0aGlzLmR1cmF0aW9uIC0gdGhpcy5lbGFwc2VkO1xuXG4gICAgICAgIGZvciAobGV0IGtleSBpbiB2YWx1ZXMpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdmFsdWVzW2tleV07XG4gICAgICAgICAgICAgICAgW3ZhbHVlLnRvLCB2YWx1ZS5mcm9tXSA9IFt2YWx1ZS5mcm9tLCB2YWx1ZS50b107XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXZlcnNlKCkge1xuICAgICAgICB0aGlzLnBsYXlEaXJlY3Rpb24gKj0gLTE7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJlc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuZWxhcHNlZCA9ICh0aGlzLnBsYXlEaXJlY3Rpb24gPT09IDEpID8gMCA6IHRoaXMuZHVyYXRpb247XG4gICAgICAgIHRoaXMuc3RhcnRlZCA9IGN1cnJlbnRUaW1lKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNlZWsocHJvZ3Jlc3MpIHtcbiAgICAgICAgdGhpcy5zZWVrVGltZSh0aGlzLmR1cmF0aW9uICogcHJvZ3Jlc3MpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZWVrVGltZShlbGFwc2VkKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0FjdGl2ZSB8fCB0aGlzLmlzU2NydWJiaW5nKSB7XG4gICAgICAgICAgICB0aGlzLm9uY2UoKTtcbiAgICAgICAgICAgIHRoaXMuaXNTY3J1YmJpbmcgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5lbGFwc2VkID0gZWxhcHNlZDtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG5cblR3ZWVuLnByb3RvdHlwZS5kZWZhdWx0VmFsdWVQcm9wID0gJ3RvJztcblR3ZWVuLnByb3RvdHlwZS5kZWZhdWx0VmFsdWUgPSBBY3Rpb24uZXh0ZW5kRGVmYXVsdFZhbHVlKHtcbiAgICBkZWxheTogMCxcbiAgICBkdXJhdGlvbjogMzAwLFxuICAgIGVhc2U6IGVhc2luZy5lYXNlT3V0LFxuICAgIGVsYXBzZWQ6IDAsXG4gICAgZnJvbTogMCxcbiAgICBzdGVwczogMCxcbiAgICB0bzogMCxcbiAgICByb3VuZDogZmFsc2Vcbn0pO1xuVHdlZW4ucHJvdG90eXBlLmRlZmF1bHRQcm9wcyA9IEFjdGlvbi5leHRlbmREZWZhdWx0UHJvcHMoe1xuICAgIGJsZW5kOiB0cnVlLFxuICAgIGRpbGF0ZTogMSxcbiAgICBsb29wOiAwLFxuICAgIHlveW86IDAsXG4gICAgZmxpcDogMCxcbiAgICBsb29wQ291bnQ6IDAsXG4gICAgeW95b0NvdW50OiAwLFxuICAgIGZsaXBDb3VudDogMCxcbiAgICBwbGF5RGlyZWN0aW9uOiAxLFxuICAgIGlzU2NydWJiaW5nOiBmYWxzZSxcbiAgICBlbmRlZDogZmFsc2UsXG4gICAgZWxhcHNlZDogMFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFR3ZWVuO1xuIl19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL1BoeXNpY3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJTTs7O0FBQ0YsYUFERSxPQUNGLEdBQXFCOzhCQURuQixTQUNtQjs7MENBQU47O1NBQU07O3FEQUNqQiwwQ0FBUyxLQUFULEdBRGlCOztBQUVqQixjQUFLLGNBQUwsR0FBc0IsQ0FBdEIsQ0FGaUI7QUFHakIsY0FBSyxrQkFBTCxHQUEwQixJQUExQixDQUhpQjs7S0FBckI7O0FBREUsc0JBT0YsNkJBQVMsU0FBUyxZQUFZLFNBQVM7QUFDbkMsYUFBSyxVQUFMLEdBQWtCLEtBQWxCLENBRG1DOztBQUduQyxhQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxLQUFLLFlBQUwsRUFBbUIsR0FBdkMsRUFBNEM7QUFDeEMsZ0JBQU0sTUFBTSxLQUFLLFNBQUwsQ0FBZSxDQUFmLENBQU4sQ0FEa0M7QUFFeEMsZ0JBQU0sUUFBUSxLQUFLLE1BQUwsQ0FBWSxHQUFaLENBQVIsQ0FGa0M7QUFHeEMsZ0JBQU0sZ0JBQWdCLE1BQU0sSUFBTjs7O0FBSGtCLGlCQU14QyxDQUFNLFFBQU4sSUFBa0IseUJBQWMsTUFBTSxZQUFOLEVBQW9CLE9BQWxDLENBQWxCOzs7QUFOd0MsaUJBU3hDLENBQU0sUUFBTixhQUFtQixJQUFJLE1BQU0sUUFBTixFQUFvQixVQUFVLEdBQVYsQ0FBM0M7OztBQVR3QyxnQkFZcEMsTUFBTSxNQUFOLElBQWdCLGtCQUFNLE1BQU0sRUFBTixDQUF0QixFQUFpQztBQUNqQyxvQkFBTSxtQkFBbUIsTUFBTSxFQUFOLEdBQVcsTUFBTSxPQUFOLENBREg7QUFFakMsc0JBQU0sUUFBTixJQUFrQixtQkFBbUIseUJBQWMsTUFBTSxNQUFOLEVBQWMsT0FBNUIsQ0FBbkIsQ0FGZTthQUFyQzs7O0FBWndDLGlCQWtCeEMsQ0FBTSxPQUFOLElBQWlCLHlCQUFjLE1BQU0sUUFBTixFQUFnQixPQUE5QixDQUFqQjs7O0FBbEJ3QyxnQkFxQnBDLEtBQUMsQ0FBTSxHQUFOLEtBQWMsU0FBZCxJQUEyQixNQUFNLE9BQU4sR0FBZ0IsTUFBTSxHQUFOLElBQWUsTUFBTSxHQUFOLEtBQWMsU0FBZCxJQUEyQixNQUFNLE9BQU4sR0FBZ0IsTUFBTSxHQUFOLEVBQVk7QUFDbEgsc0JBQU0sUUFBTixJQUFrQixDQUFFLE1BQU0sTUFBTixDQUQ4RjthQUF0SDs7O0FBckJ3QyxnQkEwQnBDLE1BQU0sT0FBTixLQUFrQixhQUFsQixJQUFtQyxLQUFLLEdBQUwsQ0FBUyxNQUFNLFFBQU4sQ0FBVCxJQUE0QixNQUFNLFNBQU4sSUFBb0IsTUFBTSxNQUFOLElBQWdCLE1BQU0sT0FBTixLQUFrQixNQUFNLEVBQU4sRUFBVztBQUNoSSxxQkFBSyxVQUFMLEdBQWtCLElBQWxCLENBRGdJO2FBQXBJO1NBMUJKOzs7QUFWRixzQkEwQ0YsbUNBQWE7QUFDVCxZQUFJLEtBQUssaUJBQUwsS0FBMkIsUUFBM0IsRUFBcUM7QUFDckMsaUJBQUssY0FBTCxHQUFzQixLQUFLLFVBQUwsR0FBa0IsQ0FBbEIsR0FBc0IsS0FBSyxjQUFMLEdBQXNCLENBQXRCLENBRFA7O0FBR3JDLGdCQUFJLEtBQUssY0FBTCxJQUF1QixLQUFLLGlCQUFMLEVBQXdCO0FBQy9DLHFCQUFLLFFBQUwsR0FEK0M7YUFBbkQ7U0FISjs7O1dBM0NGOzs7QUFxRE4sUUFBUSxTQUFSLENBQWtCLGdCQUFsQixHQUFxQyxVQUFyQztBQUNBLFFBQVEsU0FBUixDQUFrQixZQUFsQixHQUFpQyxpQkFBTyxrQkFBUCxDQUEwQjtBQUN2RCxrQkFBYyxDQUFkO0FBQ0EsWUFBUSxDQUFSO0FBQ0EsWUFBUSxDQUFSO0FBQ0EsZUFBVyxLQUFYO0FBQ0EsY0FBVSxDQUFWO0FBTHVELENBQTFCLENBQWpDO0FBT0EsUUFBUSxTQUFSLENBQWtCLFlBQWxCLEdBQWlDLGlCQUFPLGtCQUFQLENBQTBCO0FBQ3ZELHVCQUFtQixDQUFuQjtDQUQ2QixDQUFqQzs7a0JBSWUiLCJmaWxlIjoiUGh5c2ljcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWN0aW9uIGZyb20gJy4vQWN0aW9uJztcbmltcG9ydCB7IHNwZWVkUGVyRnJhbWUgfSBmcm9tICcuLi9pbmMvY2FsYyc7XG5pbXBvcnQgeyBpc051bSB9IGZyb20gJy4uL2luYy91dGlscyc7XG5cbmNsYXNzIFBoeXNpY3MgZXh0ZW5kcyBBY3Rpb24ge1xuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJncyk7XG4gICAgICAgIHRoaXMuaW5hY3RpdmVGcmFtZXMgPSAwO1xuICAgICAgICB0aGlzLmNhbGN1bGF0ZXNWZWxvY2l0eSA9IHRydWU7XG4gICAgfVxuXG4gICAgb25VcGRhdGUocGh5c2ljcywgZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgICAgICB0aGlzLmhhc0NoYW5nZWQgPSBmYWxzZTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHRoaXMudmFsdWVLZXlzW2ldO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuICAgICAgICAgICAgY29uc3QgcHJldmlvdXNWYWx1ZSA9IHZhbHVlLnByZXY7XG5cbiAgICAgICAgICAgIC8vIEFwcGx5IGFjY2VsZXJhdGlvblxuICAgICAgICAgICAgdmFsdWUudmVsb2NpdHkgKz0gc3BlZWRQZXJGcmFtZSh2YWx1ZS5hY2NlbGVyYXRpb24sIGVsYXBzZWQpO1xuXG4gICAgICAgICAgICAvLyBBcHBseSBmcmljdGlvblxuICAgICAgICAgICAgdmFsdWUudmVsb2NpdHkgKj0gKDEgLSB2YWx1ZS5mcmljdGlvbikgKiogKGVsYXBzZWQgLyAxMDApO1xuXG4gICAgICAgICAgICAvLyBBcHBseSBzcHJpbmdcbiAgICAgICAgICAgIGlmICh2YWx1ZS5zcHJpbmcgJiYgaXNOdW0odmFsdWUudG8pKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGlzdGFuY2VUb1RhcmdldCA9IHZhbHVlLnRvIC0gdmFsdWUuY3VycmVudDtcbiAgICAgICAgICAgICAgICB2YWx1ZS52ZWxvY2l0eSArPSBkaXN0YW5jZVRvVGFyZ2V0ICogc3BlZWRQZXJGcmFtZSh2YWx1ZS5zcHJpbmcsIGVsYXBzZWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBBcHBseSBsYXRlc3QgdmVsb2NpdHlcbiAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgKz0gc3BlZWRQZXJGcmFtZSh2YWx1ZS52ZWxvY2l0eSwgZWxhcHNlZCk7XG5cbiAgICAgICAgICAgIC8vIERldGVjdCBib3VuY2VcbiAgICAgICAgICAgIGlmICgodmFsdWUubWluICE9PSB1bmRlZmluZWQgJiYgdmFsdWUuY3VycmVudCA8IHZhbHVlLm1pbikgfHwgKHZhbHVlLm1heCAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLmN1cnJlbnQgPiB2YWx1ZS5tYXgpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUudmVsb2NpdHkgKj0gLSB2YWx1ZS5ib3VuY2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHZhbHVlIGhhcyBjaGFuZ2VkXG4gICAgICAgICAgICBpZiAodmFsdWUuY3VycmVudCAhPT0gcHJldmlvdXNWYWx1ZSB8fCBNYXRoLmFicyh2YWx1ZS52ZWxvY2l0eSkgPj0gdmFsdWUuc3RvcFNwZWVkIHx8ICh2YWx1ZS5zcHJpbmcgJiYgdmFsdWUuY3VycmVudCAhPT0gdmFsdWUudG8pKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uRnJhbWVFbmQoKSB7XG4gICAgICAgIGlmICh0aGlzLm1heEluYWN0aXZlRnJhbWVzICE9PSBJbmZpbml0eSkge1xuICAgICAgICAgICAgdGhpcy5pbmFjdGl2ZUZyYW1lcyA9IHRoaXMuaGFzQ2hhbmdlZCA/IDEgOiB0aGlzLmluYWN0aXZlRnJhbWVzICsgMTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuaW5hY3RpdmVGcmFtZXMgPj0gdGhpcy5tYXhJbmFjdGl2ZUZyYW1lcykge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcGxldGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuUGh5c2ljcy5wcm90b3R5cGUuZGVmYXVsdFZhbHVlUHJvcCA9ICd2ZWxvY2l0eSc7XG5QaHlzaWNzLnByb3RvdHlwZS5kZWZhdWx0VmFsdWUgPSBBY3Rpb24uZXh0ZW5kRGVmYXVsdFZhbHVlKHtcbiAgICBhY2NlbGVyYXRpb246IDAsIC8vIFtudW1iZXJdOiBBY2NlbGVyYXRpb24gdG8gYXBwbHkgdG8gdmFsdWUsIGluIHVuaXRzIHBlciBzZWNvbmRcbiAgICBib3VuY2U6IDAsIC8vIFtudW1iZXJdOiBGYWN0b3IgdG8gbXVsdGlwbHkgdmVsb2NpdHkgYnkgb24gYm91bmNlXG4gICAgc3ByaW5nOiAwLCAvLyBbbnVtYmVyXTogU3ByaW5nIHN0cmVuZ3RoIGR1cmluZyAnc3RyaW5nJ1xuICAgIHN0b3BTcGVlZDogMC4wMDEsIC8vIFtudW1iZXJdOiBTdG9wIHNpbXVsYXRpb24gdW5kZXIgdGhpcyBzcGVlZFxuICAgIGZyaWN0aW9uOiAwIC8vIFtudW1iZXJdOiBGcmljdGlvbiB0byBhcHBseSBwZXIgZnJhbWUsIDAtMVxufSk7XG5QaHlzaWNzLnByb3RvdHlwZS5kZWZhdWx0UHJvcHMgPSBBY3Rpb24uZXh0ZW5kRGVmYXVsdFByb3BzKHtcbiAgICBtYXhJbmFjdGl2ZUZyYW1lczogM1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFBoeXNpY3M7XG4iXX0=

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL1RyYWNrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLElBQU0sb0JBQW9CLFVBQUMsQ0FBRDtXQUFRO0FBQzlCLFdBQUcsRUFBRSxLQUFGO0FBQ0gsV0FBRyxFQUFFLEtBQUY7O0NBRm1COztBQUsxQixJQUFNLG9CQUFvQjtRQUFHO1dBQXNCO0FBQy9DLFdBQUcsZUFBZSxDQUFmLEVBQWtCLE9BQWxCO0FBQ0gsV0FBRyxlQUFlLENBQWYsRUFBa0IsT0FBbEI7O0NBRm1COztBQUsxQixJQUFNLGdCQUFnQixVQUFDLENBQUQ7V0FBTyxFQUFFLE9BQUYsR0FDekIsc0JBQVksa0JBQWtCLENBQWxCLENBQVosRUFBa0MsV0FBbEMsRUFBK0MsaUJBQS9DLENBRHlCLEdBRXpCLHNCQUFZLGtCQUFrQixDQUFsQixDQUFaLEVBQWtDLFdBQWxDLEVBQStDLGlCQUEvQyxDQUZ5QjtDQUFQOztBQUl0QixJQUFNLGlCQUFpQixVQUFDLENBQUQ7V0FBTyxFQUFFLGFBQUYsSUFBbUIsQ0FBbkI7Q0FBUDs7SUFFakI7Ozs7Ozs7OztvQkFDRix1QkFBTSxPQUFPO0FBQ1QsMEJBQU0sS0FBTixZQURTOztBQUdULFlBQUksS0FBSixFQUFXO0FBQ1AsaUJBQUssS0FBTCxHQUFhLE1BQU0sS0FBTixHQUFjLEtBQWQsR0FBc0IsY0FBYyxlQUFlLEtBQWYsQ0FBZCxDQUF0QixDQUROO1NBQVg7O0FBSUEsYUFBSyxXQUFMLEdBQW1CLEVBQW5CLENBUFM7QUFRVCxhQUFLLFdBQUwsZ0JBQXdCLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FBeEIsQ0FSUztBQVNULGFBQUssS0FBTCxDQUFXLEtBQVgsR0FUUzs7O0FBRFgsb0JBYUYsdUJBQU87QUFDSCwwQkFBTSxJQUFOLFlBREc7QUFFSCxhQUFLLEtBQUwsQ0FBVyxJQUFYLEdBRkc7OztBQWJMLG9CQWtCRiw2QkFBUyxPQUFPLFlBQVksU0FBUztBQUNqQyxhQUFLLFdBQUwsR0FBbUIsa0JBQU8sS0FBSyxXQUFMLEVBQWtCLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FBNUMsQ0FEaUM7O0FBR2pDLGFBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLEtBQUssWUFBTCxFQUFtQixHQUF2QyxFQUE0QztBQUN4QyxnQkFBTSxNQUFNLEtBQUssU0FBTCxDQUFlLENBQWYsQ0FBTixDQURrQzs7QUFHeEMsZ0JBQUksS0FBSyxXQUFMLENBQWlCLGNBQWpCLENBQWdDLEdBQWhDLENBQUosRUFBMEM7QUFDdEMsb0JBQU0sUUFBUSxLQUFLLE1BQUwsQ0FBWSxHQUFaLENBQVIsQ0FEZ0M7O0FBR3RDLG9CQUFJLE1BQU0sTUFBTixFQUFjO0FBQ2QsMEJBQU0sT0FBTixHQUFnQixLQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLE1BQU0sS0FBTixJQUFlLEdBQWYsQ0FBakMsQ0FEYztpQkFBbEIsTUFFTztBQUNILDBCQUFNLE9BQU4sR0FBZ0IsTUFBTSxJQUFOLEdBQWEsS0FBSyxXQUFMLENBQWlCLE1BQU0sS0FBTixJQUFlLEdBQWYsQ0FBOUIsQ0FEYjtpQkFGUDs7O0FBSHNDLG9CQVVsQyxNQUFNLE1BQU4sRUFBYztBQUNkLDBCQUFNLE9BQU4sR0FBZ0Isa0JBQU8sTUFBTSxPQUFOLEVBQWUsTUFBTSxJQUFOLEVBQVksT0FBbEMsRUFBMkMsTUFBTSxNQUFOLENBQTNELENBRGM7aUJBQWxCO2FBVko7U0FISjs7O1dBckJGOzs7QUEwQ04sTUFBTSxTQUFOLENBQWdCLGdCQUFoQixHQUFtQyxPQUFuQztBQUNBLE1BQU0sU0FBTixDQUFnQixZQUFoQixHQUErQixpQkFBTyxrQkFBUCxDQUEwQjtBQUNyRCxZQUFRLEtBQVI7Q0FEMkIsQ0FBL0I7O2tCQUllIiwiZmlsZSI6IlRyYWNrLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY3Rpb24gZnJvbSAnLi9BY3Rpb24nO1xuaW1wb3J0IFBvaW50ZXIgZnJvbSAnLi4vaW5wdXQvUG9pbnRlcic7XG5pbXBvcnQgeyBzbW9vdGgsIG9mZnNldCB9IGZyb20gJy4uL2luYy9jYWxjJztcblxuLypcbiAgICBTY3JhcGUgeC95IGNvb3JkaW5hdGVzIGZyb20gcHJvdmlkZWQgZXZlbnRcblxuICAgIEBwYXJhbSBbZXZlbnRdXG4gICAgQHJldHVybiBbb2JqZWN0XVxuKi9cbmNvbnN0IG1vdXNlRXZlbnRUb1BvaW50ID0gKGUpID0+ICh7XG4gICAgeDogZS5wYWdlWCxcbiAgICB5OiBlLnBhZ2VZXG59KTtcblxuY29uc3QgdG91Y2hFdmVudFRvUG9pbnQgPSAoeyBjaGFuZ2VkVG91Y2hlcyB9KSA9PiAoe1xuICAgIHg6IGNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFgsXG4gICAgeTogY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WVxufSk7XG5cbmNvbnN0IGNyZWF0ZVBvaW50ZXIgPSAoZSkgPT4gZS50b3VjaGVzID9cbiAgICBuZXcgUG9pbnRlcih0b3VjaEV2ZW50VG9Qb2ludChlKSwgJ3RvdWNobW92ZScsIHRvdWNoRXZlbnRUb1BvaW50KSA6IFxuICAgIG5ldyBQb2ludGVyKG1vdXNlRXZlbnRUb1BvaW50KGUpLCAnbW91c2Vtb3ZlJywgbW91c2VFdmVudFRvUG9pbnQpO1xuXG5jb25zdCBnZXRBY3R1YWxFdmVudCA9IChlKSA9PiBlLm9yaWdpbmFsRXZlbnQgfHwgZTtcblxuY2xhc3MgVHJhY2sgZXh0ZW5kcyBBY3Rpb24ge1xuICAgIHN0YXJ0KGlucHV0KSB7XG4gICAgICAgIHN1cGVyLnN0YXJ0KCk7XG5cbiAgICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0ID0gaW5wdXQuc3RhdGUgPyBpbnB1dCA6IGNyZWF0ZVBvaW50ZXIoZ2V0QWN0dWFsRXZlbnQoaW5wdXQpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW5wdXRPZmZzZXQgPSB7fTtcbiAgICAgICAgdGhpcy5pbnB1dE9yaWdpbiA9IHsgLi4udGhpcy5pbnB1dC5zdGF0ZSB9O1xuICAgICAgICB0aGlzLmlucHV0LnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgc3RvcCgpIHtcbiAgICAgICAgc3VwZXIuc3RvcCgpO1xuICAgICAgICB0aGlzLmlucHV0LnN0b3AoKTtcbiAgICB9XG5cbiAgICBvblVwZGF0ZSh0cmFjaywgZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgICAgICB0aGlzLmlucHV0T2Zmc2V0ID0gb2Zmc2V0KHRoaXMuaW5wdXRPcmlnaW4sIHRoaXMuaW5wdXQuc3RhdGUpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gdGhpcy52YWx1ZUtleXNbaV07XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmlucHV0T2Zmc2V0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG5cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUuZGlyZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSB0aGlzLmlucHV0LnN0YXRlW3ZhbHVlLndhdGNoIHx8IGtleV07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IHZhbHVlLmZyb20gKyB0aGlzLmlucHV0T2Zmc2V0W3ZhbHVlLndhdGNoIHx8IGtleV07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gU21vb3RoIHZhbHVlIGlmIHdlIGhhdmUgc21vb3RoaW5nXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLnNtb290aCkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gc21vb3RoKHZhbHVlLmN1cnJlbnQsIHZhbHVlLnByZXYsIGVsYXBzZWQsIHZhbHVlLnNtb290aCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5UcmFjay5wcm90b3R5cGUuZGVmYXVsdFZhbHVlUHJvcCA9ICd3YXRjaCc7XG5UcmFjay5wcm90b3R5cGUuZGVmYXVsdFZhbHVlID0gQWN0aW9uLmV4dGVuZERlZmF1bHRWYWx1ZSh7XG4gICAgZGlyZWN0OiBmYWxzZVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFRyYWNrO1xuIl19

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90YXNrL1Rhc2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7SUFHWTs7Ozs7Ozs7OztBQUVaLFNBQVMsT0FBVCxHQUFtQjtBQUNmLFNBQUssU0FBTCxHQUFpQixTQUFqQixDQURlO0FBRWYsU0FBSyxVQUFMLENBQWdCLEtBQUssRUFBTCxDQUFoQixDQUZlO0NBQW5COztBQUtBLFNBQVMsUUFBVCxHQUFvQjtBQUNoQixTQUFLLFNBQUwsR0FBaUIsT0FBakIsQ0FEZ0I7Q0FBcEI7O0lBSXFCO0FBQ2pCLGFBRGlCLElBQ2pCLENBQVksS0FBWixFQUFtQjs4QkFERixNQUNFOztBQUNmLGFBQUssRUFBTCxHQUFVLEtBQUssU0FBTCxFQUFWLENBRGU7QUFFZixhQUFLLFFBQUwsR0FBZ0IsS0FBaEIsQ0FGZTs7QUFJZixZQUFJLEtBQUssWUFBTCxFQUFtQjtBQUNuQixpQkFBSyxJQUFJLEdBQUosSUFBVyxLQUFLLFlBQUwsRUFBbUI7QUFDL0Isb0JBQUksS0FBSyxZQUFMLENBQWtCLGNBQWxCLENBQWlDLEdBQWpDLENBQUosRUFBMkM7QUFDdkMseUJBQUssR0FBTCxJQUFZLEtBQUssWUFBTCxDQUFrQixHQUFsQixDQUFaLENBRHVDO2lCQUEzQzthQURKO1NBREo7O0FBUUEsYUFBSyxHQUFMLENBQVMsS0FBVCxFQVplO0tBQW5COztBQURpQixtQkFnQmpCLG1CQUFJLE9BQU87QUFDUCxhQUFLLElBQUksR0FBSixJQUFXLEtBQWhCLEVBQXVCO0FBQ25CLGdCQUFJLE1BQU0sY0FBTixDQUFxQixHQUFyQixDQUFKLEVBQStCO0FBQzNCLHFCQUFLLEdBQUwsSUFBWSxNQUFNLEdBQU4sQ0FBWixDQUQyQjthQUEvQjtTQURKOztBQU1BLGVBQU8sSUFBUCxDQVBPOzs7QUFoQk0sbUJBMEJqQix5QkFBUTtBQUNKLGFBQUssUUFBTCxDQUFjLEtBQUssRUFBTCxFQUFTLElBQXZCLEVBREk7O0FBR0osYUFBSyxjQUFMLEdBQXNCLEtBQUssU0FBTCxHQUFpQixTQUFqQixDQUhsQjtBQUlKLGFBQUssVUFBTCxHQUFrQixLQUFsQixDQUpJOztBQU1KLFlBQUksS0FBSyxPQUFMLEVBQWM7QUFDZCxpQkFBSyxPQUFMLENBQWEsSUFBYixFQURjO1NBQWxCOztBQUlBLGVBQU8sSUFBUCxDQVZJOzs7QUExQlMsbUJBdUNqQix1QkFBTztBQUNILGFBQUssVUFBTCxDQUFnQixLQUFLLEVBQUwsQ0FBaEIsQ0FERzs7QUFHSCxZQUFJLEtBQUssTUFBTCxFQUFhO0FBQ2IsaUJBQUssTUFBTCxDQUFZLElBQVosRUFEYTtTQUFqQjs7QUFJQSxlQUFPLElBQVAsQ0FQRzs7O0FBdkNVLG1CQWlEakIsdUJBQU87QUFDSCxhQUFLLFFBQUwsQ0FBYyxLQUFLLEVBQUwsRUFBUyxJQUF2QixFQURHO0FBRUgsYUFBSyxTQUFMLEdBQWlCLFNBQWpCLENBRkc7QUFHSCxhQUFLLGNBQUwsR0FBc0IsUUFBdEIsQ0FIRzs7QUFLSCxlQUFPLElBQVAsQ0FMRzs7O0FBakRVLG1CQXlEakIsK0JBQVc7QUFDUCxhQUFLLElBQUwsR0FETzs7QUFHUCxZQUFJLEtBQUssVUFBTCxFQUFpQjtBQUNqQixpQkFBSyxVQUFMLENBQWdCLElBQWhCLEVBRGlCO1NBQXJCOzs7Ozs7Ozs7O0FBNURhLG1CQXdFakIsMkJBQVEsT0FBTztZQUNILEtBQTBCLEtBQTFCLEdBREc7O1lBQ0ksMENBQW1CLGNBRHZCOztBQUVYLGVBQU8sSUFBSSxLQUFLLFdBQUwsY0FBc0IsZ0JBQW1CLE1BQTdDLENBQVAsQ0FGVzs7O1dBeEVFIiwiZmlsZSI6IlRhc2suanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgICBCYXNlIFRhc2sgY2xhc3MgZm9yIGNyZWF0aW5nIGEgdGFzayBvbiB0aGUgbWFpbiByZW5kZXIgbG9vcC5cbiovXG5pbXBvcnQgKiBhcyBsb29wIGZyb20gJy4vbG9vcCc7XG5cbmZ1bmN0aW9uIGNsZWFudXAoKSB7XG4gICAgdGhpcy5vbkNsZWFudXAgPSB1bmRlZmluZWQ7XG4gICAgbG9vcC5kZWFjdGl2YXRlKHRoaXMuaWQpO1xufVxuXG5mdW5jdGlvbiBhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLm9uQ2xlYW51cCA9IGNsZWFudXA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHRoaXMuaWQgPSBsb29wLmdldFRhc2tJZCgpO1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHRoaXMuZGVmYXVsdFByb3BzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5kZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kZWZhdWx0UHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSB0aGlzLmRlZmF1bHRQcm9wc1trZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0KHByb3BzKTtcbiAgICB9XG5cbiAgICBzZXQocHJvcHMpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHByb3BzKSB7XG4gICAgICAgICAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IHByb3BzW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgbG9vcC5hY3RpdmF0ZSh0aGlzLmlkLCB0aGlzKTtcblxuICAgICAgICB0aGlzLm9uQWN0aXZhdGVMb29wID0gdGhpcy5vbkNsZWFudXAgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuaXNDb21wbGV0ZSA9IGZhbHNlO1xuXG4gICAgICAgIGlmICh0aGlzLm9uU3RhcnQpIHtcbiAgICAgICAgICAgIHRoaXMub25TdGFydCh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHN0b3AoKSB7XG4gICAgICAgIGxvb3AuZGVhY3RpdmF0ZSh0aGlzLmlkKTtcbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLm9uU3RvcCkge1xuICAgICAgICAgICAgdGhpcy5vblN0b3AodGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBvbmNlKCkge1xuICAgICAgICBsb29wLmFjdGl2YXRlKHRoaXMuaWQsIHRoaXMpO1xuICAgICAgICB0aGlzLm9uQ2xlYW51cCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5vbkFjdGl2YXRlTG9vcCA9IGFjdGl2YXRlO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGNvbXBsZXRlKCkge1xuICAgICAgICB0aGlzLnN0b3AoKTtcblxuICAgICAgICBpZiAodGhpcy5vbkNvbXBsZXRlKSB7XG4gICAgICAgICAgICB0aGlzLm9uQ29tcGxldGUodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIEV4dGVuZCB0aGlzIFByb2Nlc3Mgd2l0aCBuZXcgcHJvcGVydGllc1xuICAgICAgICAjIyBSZXR1cm5zIG5ldyBpbnN0YW5jZSBvZiB0aGlzIFByb2Nlc3MncyBgcHJvdG90eXBlYCB3aXRoIGV4aXN0aW5nIGFuZCBuZXcgcHJvcGVydGllc1xuXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XSAob3B0aW9uYWwpXG4gICAgICAgIEByZXR1cm4gW1Byb2Nlc3NdXG4gICAgKi9cbiAgICBpbmhlcml0KHByb3BzKSB7XG4gICAgICAgIGNvbnN0IHsgaWQsIC4uLmluaGVyaXRlZFByb3BzIH0gPSB0aGlzO1xuICAgICAgICByZXR1cm4gbmV3IHRoaXMuY29uc3RydWN0b3IoeyAuLi5pbmhlcml0ZWRQcm9wcywgLi4ucHJvcHMgfSk7XG4gICAgfVxufSJdfQ==

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbnB1dC9JbnB1dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUdxQjs7O0FBQ2pCLGFBRGlCLEtBQ2pCLENBQVksYUFBWixFQUEyQixJQUEzQixFQUFpQzs4QkFEaEIsT0FDZ0I7O3FEQUM3QixrQkFENkI7O0FBRTdCLGNBQUssS0FBTCxHQUFhLGFBQWIsQ0FGNkI7O0FBSTdCLFlBQUksbUJBQU8sSUFBUCxDQUFKLEVBQWtCO0FBQ2Qsa0JBQUssWUFBTCxHQUFvQjt1QkFBTSxNQUFLLE1BQUwsQ0FBWSxNQUFLLElBQUwsRUFBWjthQUFOLENBRE47U0FBbEI7cUJBSjZCO0tBQWpDOzs7Ozs7O0FBRGlCLG9CQWVqQix5QkFBTyxPQUFPO0FBQ1YsYUFBSyxLQUFMLGdCQUFrQixLQUFLLEtBQUwsRUFBZSxNQUFqQyxDQURVOzs7V0FmRyIsImZpbGUiOiJJbnB1dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGFzayBmcm9tICcuLi90YXNrL1Rhc2snO1xuaW1wb3J0IHsgaXNGdW5jIH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXQgZXh0ZW5kcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3Rvcihpbml0aWFsVmFsdWVzLCBwb2xsKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBpbml0aWFsVmFsdWVzO1xuXG4gICAgICAgIGlmIChpc0Z1bmMocG9sbCkpIHtcbiAgICAgICAgICAgIHRoaXMub25GcmFtZVN0YXJ0ID0gKCkgPT4gdGhpcy5sYXRlc3QodGhpcy5wb2xsKCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgTWFudWFsbHkgYWRkIGxhdGVzdCB2YWx1ZXNcblxuICAgICAgICBAcGFyYW0gW29iamVjdF1cbiAgICAqL1xuICAgIGxhdGVzdChwcm9wcykge1xuICAgICAgICB0aGlzLnN0YXRlID0geyAuLi50aGlzLnN0YXRlLCAuLi5wcm9wcyB9O1xuICAgIH1cbn1cbiJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvc3RhZ2dlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFHQSxJQUFNLG1CQUFtQixHQUFuQjs7a0JBRVMsVUFBQyxNQUFELEVBQVMsS0FBVCxFQUFtQjtBQUM5QixRQUFNLGtCQUFrQixrQkFBTSxLQUFOLENBQWxCLENBRHdCO0FBRTlCLFFBQU0sV0FBVyxrQkFBa0IsS0FBbEIsR0FBMEIsUUFBUSxNQUFNLFFBQU4sSUFBa0IsZ0JBQWxCLEdBQXFDLGdCQUE3QyxDQUZiO0FBRzlCLFFBQUksS0FBSyxDQUFMLENBSDBCO0FBSTlCLFFBQU0scUJBQXFCLE9BQU8sR0FBUCxDQUFXLFVBQUMsS0FBRCxFQUFXO0FBQzdDLFlBQU0sTUFBTSxFQUFFLFlBQUYsRUFBUyxNQUFULEVBQU4sQ0FEdUM7QUFFN0MsY0FBTSxRQUFOLENBRjZDO0FBRzdDLGVBQU8sR0FBUCxDQUg2QztLQUFYLENBQWhDLENBSndCOztBQVU5QixXQUFPLHdCQUFTLGtCQUFULEVBQTZCLEtBQTdCLENBQVAsQ0FWOEI7Q0FBbkIiLCJmaWxlIjoic3RhZ2dlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdGltZWxpbmUgZnJvbSAnLi90aW1lbGluZSc7XG5pbXBvcnQgeyBpc051bSB9IGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCBERUZBVUxUX0lOVEVSVkFMID0gMTAwO1xuXG5leHBvcnQgZGVmYXVsdCAodHdlZW5zLCBwcm9wcykgPT4ge1xuICAgIGNvbnN0IHByb3BzSXNEdXJhdGlvbiA9IGlzTnVtKHByb3BzKTtcbiAgICBjb25zdCBpbnRlcnZhbCA9IHByb3BzSXNEdXJhdGlvbiA/IHByb3BzIDogcHJvcHMgPyBwcm9wcy5pbnRlcnZhbCB8fCBERUZBVUxUX0lOVEVSVkFMIDogREVGQVVMVF9JTlRFUlZBTDtcbiAgICBsZXQgYXQgPSAwO1xuICAgIGNvbnN0IHRpbWVsaW5lRGVmaW5pdGlvbiA9IHR3ZWVucy5tYXAoKHR3ZWVuKSA9PiB7XG4gICAgICAgIGNvbnN0IGRlZiA9IHsgdHdlZW4sIGF0IH07XG4gICAgICAgIGF0ICs9IGludGVydmFsO1xuICAgICAgICByZXR1cm4gZGVmO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRpbWVsaW5lKHRpbWVsaW5lRGVmaW5pdGlvbiwgcHJvcHMpO1xufTsiXX0=

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvdGltZWxpbmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBb0V3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFqRHhCLElBQU0sVUFBVSxVQUFDLElBQUQsRUFBVTtBQUN0QixRQUFNLFdBQVcsRUFBWCxDQURnQjtBQUV0QixRQUFNLFVBQVUsS0FBSyxNQUFMLENBRk07QUFHdEIsUUFBSSxrQkFBa0IsQ0FBbEIsQ0FIa0I7OzBCQUtiO0FBQ0wsWUFBTSxNQUFNLEtBQUssQ0FBTCxDQUFOO0FBQ04sWUFBTSxXQUFXLElBQUksS0FBSixHQUFZLElBQVosR0FBbUIsS0FBbkI7QUFDakIsWUFBTSxRQUFRLFdBQWEsSUFBSSxLQUFKLEdBQVksR0FBekI7O0FBRWQsWUFBSSxRQUFKLEVBQWM7QUFDVixnQkFBSSxJQUFJLE1BQUosS0FBZSxTQUFmLEVBQTBCO0FBQzFCLGtDQUFrQix5QkFBYyxlQUFkLEVBQStCLElBQUksTUFBSixDQUFqRCxDQUQwQjthQUE5QixNQUVPLElBQUksSUFBSSxFQUFKLEtBQVcsU0FBWCxFQUFzQjtBQUM3QixrQ0FBa0IsSUFBSSxFQUFKLENBRFc7YUFBMUI7U0FIWDs7QUFRQSxZQUFJLFdBQVcsQ0FBWDtBQUNKLGFBQUssSUFBSSxHQUFKLElBQVcsTUFBTSxNQUFOLEVBQWM7QUFDMUIsZ0JBQUksTUFBTSxNQUFOLENBQWEsY0FBYixDQUE0QixHQUE1QixDQUFKLEVBQXNDO0FBQ2xDLG9CQUFNLFFBQVEsTUFBTSxNQUFOLENBQWEsR0FBYixDQUFSLENBRDRCO0FBRWxDLDJCQUFXLEtBQUssR0FBTCxDQUFTLFFBQVQsRUFBbUIsTUFBTSxRQUFOLENBQTlCLENBRmtDO2FBQXRDO1NBREo7O0FBT0EsaUJBQVMsSUFBVCxDQUFjO0FBQ1Ysa0JBQU0sZUFBTjtBQUNBLHNCQUFVLFFBQVY7QUFDQSxrQkFBTSxVQUFDLElBQUQ7dUJBQVUsTUFBTSxRQUFOLENBQWUsSUFBZjthQUFWO1NBSFY7O0FBTUEsMkJBQW1CLFFBQW5CO01BaENrQjs7QUFLdEIsU0FBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksT0FBSixFQUFhLEdBQTdCLEVBQWtDO2NBQXpCLEdBQXlCO0tBQWxDOztBQThCQSxXQUFPLEVBQUUsV0FBVyxlQUFYLEVBQTRCLGtCQUE5QixFQUFQLENBbkNzQjtDQUFWOztBQXNDaEIsSUFBTSxZQUFZLGdCQUFvRDtRQUFqRCx5QkFBaUQ7UUFBdkMscUNBQXVDO1FBQXZCLHFCQUF1QjtRQUFmLHlCQUFlOztBQUNsRSxTQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxjQUFKLEVBQW9CLEdBQXBDLEVBQXlDO0FBQ3JDLFlBQU0sU0FBUSxTQUFTLENBQVQsQ0FBUixDQUQrQjtBQUVyQyxZQUFNLFlBQVksTUFBQyxDQUFPLENBQVAsQ0FBUyxPQUFULEdBQW1CLFFBQW5CLEdBQStCLE9BQU0sSUFBTixDQUZiOztBQUlyQyxZQUFJLGFBQWEsQ0FBQyxFQUFELElBQU8sYUFBYSxPQUFNLFFBQU4sR0FBaUIsRUFBakIsRUFBcUI7QUFDdEQsbUJBQU0sSUFBTixDQUFXLFNBQVgsRUFEc0Q7U0FBMUQ7S0FKSjtDQURjOztBQVdILFNBQVMsUUFBVCxDQUFrQixHQUFsQixFQUFtQztRQUFaLDhEQUFRLGtCQUFJOzttQkFDZCxRQUFRLEdBQVIsRUFEYzs7UUFDdEMsK0JBRHNDO1FBQzNCLDZCQUQyQjs7QUFHOUMsV0FBTztBQUNILGNBQU0sdUJBQU8sTUFBUDtPQUNIO0FBQ0gsa0JBQVUsU0FBVjtBQUNBLGdCQUFRO0FBQ0osZUFBRyxDQUFIO1NBREo7QUFHQSxrQkFBVSxRQUFWO0FBQ0Esd0JBQWdCLFNBQVMsTUFBVDtBQUNoQixrQkFBVSxTQUFWO01BVEcsQ0FBUCxDQUg4QztDQUFuQyIsImZpbGUiOiJ0aW1lbGluZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHdlZW4gZnJvbSAnLi4vYWN0aW9ucy9Ud2Vlbic7XG5pbXBvcnQgZWFzaW5nIGZyb20gJy4uL2FjdGlvbnMvZWFzaW5nL3ByZXNldC1lYXNpbmcnO1xuaW1wb3J0IHsgcmVsYXRpdmVWYWx1ZSB9IGZyb20gJy4vY2FsYyc7XG5cbi8qXG4gICAgQHBhcmFtIFthcnJheV1cbiAgICAgICAgU2VxdWVudGlhbCBhcnJheSBvZiB0d2VlbnMsIGVhY2ggaXRlbSBjYW4gYmUgYSB0d2VlbiBvciBkZWZpbml0aW9uIG9iajpcblxuICAgICAgICBbXG4gICAgICAgICAgICBuZXcgVHdlZW4oKSxcbiAgICAgICAgICAgIHN0YWdnZXIoKSxcbiAgICAgICAgICAgIHRpbWVsaW5lKCksXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHdlZW46IG5ldyBUd2VlbigpLFxuICAgICAgICAgICAgICAgIGF0OiAxMDAsXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiBcIis9MTAwXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuKi9cbmNvbnN0IGFuYWx5emUgPSAoZGVmcykgPT4ge1xuICAgIGNvbnN0IHRpbWVsaW5lID0gW107XG4gICAgY29uc3QgbnVtRGVmcyA9IGRlZnMubGVuZ3RoO1xuICAgIGxldCBjdXJyZW50UGxheWhlYWQgPSAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1EZWZzOyBpKyspIHtcbiAgICAgICAgY29uc3QgZGVmID0gZGVmc1tpXTtcbiAgICAgICAgY29uc3QgZGVmSXNPYmogPSBkZWYudHdlZW4gPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIGNvbnN0IHR3ZWVuID0gKGRlZklzT2JqKSA/IGRlZi50d2VlbiA6IGRlZjtcblxuICAgICAgICBpZiAoZGVmSXNPYmopIHtcbiAgICAgICAgICAgIGlmIChkZWYub2Zmc2V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UGxheWhlYWQgPSByZWxhdGl2ZVZhbHVlKGN1cnJlbnRQbGF5aGVhZCwgZGVmLm9mZnNldCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRlZi5hdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFBsYXloZWFkID0gZGVmLmF0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGR1cmF0aW9uID0gMDtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHR3ZWVuLnZhbHVlcykge1xuICAgICAgICAgICAgaWYgKHR3ZWVuLnZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0d2Vlbi52YWx1ZXNba2V5XTtcbiAgICAgICAgICAgICAgICBkdXJhdGlvbiA9IE1hdGgubWF4KGR1cmF0aW9uLCB2YWx1ZS5kdXJhdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aW1lbGluZS5wdXNoKHtcbiAgICAgICAgICAgIGZyb206IGN1cnJlbnRQbGF5aGVhZCxcbiAgICAgICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgICAgICAgIGZpcmU6ICh0aW1lKSA9PiB0d2Vlbi5zZWVrVGltZSh0aW1lKVxuICAgICAgICB9KTtcblxuICAgICAgICBjdXJyZW50UGxheWhlYWQgKz0gZHVyYXRpb247XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgdG90YWxUaW1lOiBjdXJyZW50UGxheWhlYWQsIHRpbWVsaW5lIH07XG59O1xuXG5jb25zdCBzZXRUd2VlbnMgPSAoeyB0aW1lbGluZSwgdGltZWxpbmVMZW5ndGgsIHZhbHVlcywgZHVyYXRpb24gfSkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGltZWxpbmVMZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB0d2VlbiA9IHRpbWVsaW5lW2ldO1xuICAgICAgICBjb25zdCB0d2VlblRpbWUgPSAodmFsdWVzLnAuY3VycmVudCAqIGR1cmF0aW9uKSAtIHR3ZWVuLmZyb207XG5cbiAgICAgICAgaWYgKHR3ZWVuVGltZSA+PSAtNTAgJiYgdHdlZW5UaW1lIDw9IHR3ZWVuLmR1cmF0aW9uICsgNTApIHtcbiAgICAgICAgICAgIHR3ZWVuLmZpcmUodHdlZW5UaW1lKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRpbWVsaW5lKGRlZiwgcHJvcHMgPSB7fSkge1xuICAgIGNvbnN0IHsgdG90YWxUaW1lLCB0aW1lbGluZSB9ID0gYW5hbHl6ZShkZWYpO1xuXG4gICAgcmV0dXJuIG5ldyBUd2Vlbih7XG4gICAgICAgIGVhc2U6IGVhc2luZy5saW5lYXIsXG4gICAgICAgIC4uLnByb3BzLFxuICAgICAgICBkdXJhdGlvbjogdG90YWxUaW1lLFxuICAgICAgICB2YWx1ZXM6IHtcbiAgICAgICAgICAgIHA6IDFcbiAgICAgICAgfSxcbiAgICAgICAgdGltZWxpbmU6IHRpbWVsaW5lLFxuICAgICAgICB0aW1lbGluZUxlbmd0aDogdGltZWxpbmUubGVuZ3RoLFxuICAgICAgICBvblJlbmRlcjogc2V0VHdlZW5zXG4gICAgfSk7XG59Il19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2F0dHItYWRhcHRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVPLElBQU0sMEJBQVMsVUFBQyxPQUFELEVBQVUsR0FBVjtXQUFrQixRQUFRLFlBQVIsQ0FBcUIsR0FBckI7Q0FBbEI7QUFDZixJQUFNLDBCQUFTLFVBQUMsT0FBRCxFQUFVLEtBQVYsRUFBb0I7QUFDdEMsU0FBSyxJQUFJLEdBQUosSUFBVyxLQUFoQixFQUF1QjtBQUNuQixZQUFJLE1BQU0sY0FBTixDQUFxQixHQUFyQixDQUFKLEVBQStCO0FBQzNCLG9CQUFRLFlBQVIsQ0FBcUIsR0FBckIsRUFBMEIsTUFBTSxHQUFOLENBQTFCLEVBRDJCO1NBQS9CO0tBREo7Q0FEa0I7O2tCQVFQLHVCQUFjLEVBQUUsY0FBRixFQUFVLGNBQVYsRUFBZCIsImZpbGUiOiJhdHRyLWFkYXB0ZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZUFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcblxuZXhwb3J0IGNvbnN0IGdldHRlciA9IChlbGVtZW50LCBrZXkpID0+IGVsZW1lbnQuZ2V0QXR0cmlidXRlKGtleSk7XG5leHBvcnQgY29uc3Qgc2V0dGVyID0gKGVsZW1lbnQsIHByb3BzKSA9PiB7XG4gICAgZm9yIChsZXQga2V5IGluIHByb3BzKSB7XG4gICAgICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHByb3BzW2tleV0pO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQWRhcHRlcih7IGdldHRlciwgc2V0dGVyIH0pOyJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2Nzcy1hZGFwdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkFPZSx1QkFBYztBQUN6QixZQUFRLFVBQUMsT0FBRCxFQUFVLEdBQVYsRUFBa0I7QUFDdEIsZUFBTyxDQUFFLHlCQUFlLEdBQWYsQ0FBRCxHQUNKLE9BQU8sZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsSUFBakMsRUFBdUMsd0JBQVMsR0FBVCxDQUF2QyxDQURHLEdBRUgsdUJBQWEsR0FBYixFQUFrQixZQUFsQixDQUErQixPQUEvQixJQUEwQyxDQUExQyxDQUhrQjtLQUFsQjtBQUtSLFlBQVEsVUFBQyxPQUFELEVBQVUsS0FBVjtlQUFvQixRQUFRLEtBQVIsQ0FBYyxPQUFkLElBQXlCLHFCQUFvQixLQUFwQixDQUF6QjtLQUFwQjtBQUNSLHdDQVB5QjtBQVF6QixnQ0FSeUI7Q0FBZCIsImZpbGUiOiJjc3MtYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3RhdGVNYXAgZnJvbSAnLi9jc3Mvc3RhdGUtbWFwJztcbmltcG9ydCB2YWx1ZVR5cGVNYXAgZnJvbSAnLi9jc3MvdmFsdWUtdHlwZS1tYXAnO1xuaW1wb3J0IGJ1aWxkUHJvcGVydHlTdHJpbmcgZnJvbSAnLi9jc3MvYnVpbGQnO1xuaW1wb3J0IHByZWZpeGVyIGZyb20gJy4vY3NzL3ByZWZpeGVyJztcbmltcG9ydCB0cmFuc2Zvcm1Qcm9wcyBmcm9tICcuL2Nzcy90cmFuc2Zvcm0tcHJvcHMnO1xuaW1wb3J0IGNyZWF0ZUFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQWRhcHRlcih7XG4gICAgZ2V0dGVyOiAoZWxlbWVudCwga2V5KSA9PiB7XG4gICAgICAgIHJldHVybiAoIXRyYW5zZm9ybVByb3BzW2tleV0pID9cbiAgICAgICAgICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsIG51bGwpW3ByZWZpeGVyKGtleSldIDpcbiAgICAgICAgICAgIHZhbHVlVHlwZU1hcFtrZXldLmRlZmF1bHRQcm9wcy5jdXJyZW50IHx8IDA7XG4gICAgfSxcbiAgICBzZXR0ZXI6IChlbGVtZW50LCBwcm9wcykgPT4gZWxlbWVudC5zdHlsZS5jc3NUZXh0ICs9IGJ1aWxkUHJvcGVydHlTdHJpbmcocHJvcHMpLFxuICAgIHZhbHVlVHlwZU1hcCxcbiAgICBzdGF0ZU1hcFxufSk7XG5cbiJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL29iamVjdC1hZGFwdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7a0JBRWUsdUJBQWM7QUFDekIsWUFBUSxVQUFDLE1BQUQsRUFBUyxHQUFUO2VBQWlCLE9BQU8sR0FBUDtLQUFqQjtBQUNSLFlBQVEsVUFBQyxNQUFELEVBQVMsS0FBVCxFQUFtQjtBQUN2QixhQUFLLElBQUksR0FBSixJQUFXLEtBQWhCLEVBQXVCO0FBQ25CLGdCQUFJLE1BQU0sY0FBTixDQUFxQixHQUFyQixDQUFKLEVBQStCO0FBQzNCLHVCQUFPLEdBQVAsSUFBYyxNQUFNLEdBQU4sQ0FBZCxDQUQyQjthQUEvQjtTQURKO0tBREk7Q0FGRyIsImZpbGUiOiJvYmplY3QtYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlQWRhcHRlciBmcm9tICcuL2FkYXB0ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVBZGFwdGVyKHtcbiAgICBnZXR0ZXI6IChvYmplY3QsIGtleSkgPT4gb2JqZWN0W2tleV0sXG4gICAgc2V0dGVyOiAob2JqZWN0LCBwcm9wcykgPT4ge1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gcHJvcHMpIHtcbiAgICAgICAgICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgb2JqZWN0W2tleV0gPSBwcm9wc1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSk7Il19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL3N2Zy1hZGFwdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT08sSUFBTSwwQkFBUyxVQUFDLE9BQUQsRUFBVSxHQUFWO1dBQWtCLENBQUUseUJBQWUsR0FBZixDQUFELEdBQXdCLHlCQUFXLE9BQVgsRUFBb0IsR0FBcEIsQ0FBekIsR0FBb0Qsc0JBQUMsQ0FBYSxHQUFiLEtBQXFCLHVCQUFhLEdBQWIsRUFBa0IsWUFBbEIsR0FBa0MsdUJBQWEsR0FBYixFQUFrQixZQUFsQixDQUErQixPQUEvQixHQUF5QyxDQUFqRztDQUF0RTtBQUNmLElBQU0sMEJBQVMsVUFBQyxPQUFELEVBQVUsS0FBVixFQUFpQixJQUFqQjtXQUEwQix5QkFBVyxPQUFYLEVBQW9CLHFCQUFNLEtBQU4sRUFBYSxJQUFiLENBQXBCO0NBQTFCO0FBQ2YsSUFBTSwwQ0FBaUIsVUFBQyxPQUFELEVBQWE7QUFDdkMsUUFBTSxPQUFPLFFBQVEsT0FBUixFQUFQLENBRGlDO0FBRXZDLFdBQU87QUFDSCxXQUFHLEtBQUssQ0FBTDtBQUNILFdBQUcsS0FBSyxDQUFMO0FBQ0gsZUFBTyxLQUFLLEtBQUw7QUFDUCxnQkFBUSxLQUFLLE1BQUw7S0FKWixDQUZ1QztDQUFiOztrQkFVZix1QkFBYyxFQUFFLGNBQUYsRUFBVSxjQUFWLEVBQWtCLDRCQUFsQixFQUE0QixvQ0FBNUIsRUFBMEMsOEJBQTFDLEVBQWQiLCJmaWxlIjoic3ZnLWFkYXB0ZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0YXRlTWFwIGZyb20gJy4vY3NzL3N0YXRlLW1hcCc7XG5pbXBvcnQgdmFsdWVUeXBlTWFwIGZyb20gJy4vc3ZnL3ZhbHVlLXR5cGUtbWFwJztcbmltcG9ydCB0cmFuc2Zvcm1Qcm9wcyBmcm9tICcuL2Nzcy90cmFuc2Zvcm0tcHJvcHMnO1xuaW1wb3J0IGJ1aWxkIGZyb20gJy4vc3ZnL2J1aWxkJztcbmltcG9ydCB7IGdldHRlciBhcyBhdHRyR2V0dGVyLCBzZXR0ZXIgYXMgYXR0clNldHRlciB9IGZyb20gJy4vYXR0ci1hZGFwdGVyJztcbmltcG9ydCBjcmVhdGVBZGFwdGVyIGZyb20gJy4vYWRhcHRlcic7XG5cbmV4cG9ydCBjb25zdCBnZXR0ZXIgPSAoZWxlbWVudCwga2V5KSA9PiAoIXRyYW5zZm9ybVByb3BzW2tleV0pID8gYXR0ckdldHRlcihlbGVtZW50LCBrZXkpIDogKHZhbHVlVHlwZU1hcFtrZXldICYmIHZhbHVlVHlwZU1hcFtrZXldLmRlZmF1bHRQcm9wcykgPyB2YWx1ZVR5cGVNYXBba2V5XS5kZWZhdWx0UHJvcHMuY3VycmVudCA6IDA7XG5leHBvcnQgY29uc3Qgc2V0dGVyID0gKGVsZW1lbnQsIHByb3BzLCBkYXRhKSA9PiBhdHRyU2V0dGVyKGVsZW1lbnQsIGJ1aWxkKHByb3BzLCBkYXRhKSk7XG5leHBvcnQgY29uc3QgZ2V0RWxlbWVudERhdGEgPSAoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGJCb3ggPSBlbGVtZW50LmdldEJCb3goKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB4OiBiQm94LngsXG4gICAgICAgIHk6IGJCb3gueSxcbiAgICAgICAgd2lkdGg6IGJCb3gud2lkdGgsIFxuICAgICAgICBoZWlnaHQ6IGJCb3guaGVpZ2h0XG4gICAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUFkYXB0ZXIoeyBnZXR0ZXIsIHNldHRlciwgc3RhdGVNYXAsIHZhbHVlVHlwZU1hcCwgZ2V0RWxlbWVudERhdGEgfSk7XG4iXX0=

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL3N2Zy1wYXRoLWFkYXB0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkFLZSx1QkFBYztBQUN6Qiw4QkFEeUI7QUFFekIsWUFBUSxVQUFDLE9BQUQsRUFBVSxLQUFWLEVBQWlCLElBQWpCLEVBQTBCO0FBQzlCLFlBQU0sYUFBYSxPQUFPLEtBQUssVUFBTCxHQUFrQixDQUF6QixDQURXO0FBRTlCLGVBQU8sd0JBQU8sT0FBUCxFQUFnQixxQkFBTSxLQUFOLEVBQWEsVUFBYixDQUFoQixFQUEwQyxJQUExQyxDQUFQLENBRjhCO0tBQTFCO0FBSVIsZ0NBTnlCO0FBT3pCLG9CQUFnQixVQUFDLE9BQUQ7MEJBQWdCLFlBQVksUUFBUSxjQUFSLEVBQVosSUFBeUMsZ0NBQWUsT0FBZjtLQUF6RDtDQVBMIiwiZmlsZSI6InN2Zy1wYXRoLWFkYXB0ZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJ1aWxkIGZyb20gJy4vc3ZnLXBhdGgvYnVpbGQnO1xuaW1wb3J0IHN0YXRlTWFwIGZyb20gJy4vY3NzL3N0YXRlLW1hcCc7XG5pbXBvcnQgeyBnZXR0ZXIsIHNldHRlciwgZ2V0RWxlbWVudERhdGEgfSBmcm9tICcuL3N2Zy1hZGFwdGVyJztcbmltcG9ydCBjcmVhdGVBZGFwdGVyIGZyb20gJy4vYWRhcHRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUFkYXB0ZXIoe1xuICAgIGdldHRlcixcbiAgICBzZXR0ZXI6IChlbGVtZW50LCBwcm9wcywgb3B0cykgPT4ge1xuICAgICAgICBjb25zdCBwYXRoTGVuZ3RoID0gb3B0cyA/IG9wdHMucGF0aExlbmd0aCA6IDA7XG4gICAgICAgIHJldHVybiBzZXR0ZXIoZWxlbWVudCwgYnVpbGQocHJvcHMsIHBhdGhMZW5ndGgpLCBvcHRzKTtcbiAgICB9LFxuICAgIHN0YXRlTWFwLFxuICAgIGdldEVsZW1lbnREYXRhOiAoZWxlbWVudCkgPT4gKHsgcGF0aExlbmd0aDogZWxlbWVudC5nZXRUb3RhbExlbmd0aCgpLCAuLi5nZXRFbGVtZW50RGF0YShlbGVtZW50KSB9KVxufSk7XG4iXX0=

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2Vhc2luZy9wcmVzZXQtZWFzaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEJBLElBQU0sd0JBQXdCLEtBQXhCO0FBQ04sSUFBTSx1QkFBdUIsQ0FBdkI7Ozs7Ozs7O0FBUU4sSUFBTSxhQUFhO0FBQ2YsVUFBTSxVQUFDLFFBQUQ7WUFBVyxpRUFBVzt3QkFBeUIsVUFBWTtLQUEzRDtBQUNOLFVBQU07ZUFBWSxJQUFJLEtBQUssR0FBTCxDQUFTLEtBQUssSUFBTCxDQUFVLFFBQVYsQ0FBVCxDQUFKO0tBQVo7QUFDTixVQUFNLFVBQUMsUUFBRDtZQUFXLGlFQUFXO2VBQTBCLFFBQUMsR0FBVyxRQUFYLElBQXdCLENBQUMsV0FBVyxDQUFYLENBQUQsR0FBaUIsUUFBakIsR0FBNEIsUUFBNUIsQ0FBekI7S0FBaEQ7Q0FISjs7O0FBT04sSUFBTSxzQkFBc0IsVUFBQyxRQUFEO1dBQWMsVUFBQyxRQUFEO2VBQWMsV0FBVyxJQUFYLENBQWdCLFFBQWhCLEVBQTBCLFFBQTFCO0tBQWQ7Q0FBZDs7QUFFNUIsQ0FBQyxPQUFELEVBQVUsT0FBVixFQUFtQixPQUFuQixFQUE0QixPQUE1QixDQUFvQyxVQUFDLFVBQUQsRUFBYSxDQUFiO1dBQW1CLFdBQVcsVUFBWCxJQUF5QixvQkFBb0IsSUFBSSxDQUFKLENBQTdDO0NBQW5CLENBQXBDOzs7QUFHQSxLQUFLLElBQUksR0FBSixJQUFXLFVBQWhCLEVBQTRCO0FBQ3hCLFFBQUksV0FBVyxjQUFYLENBQTBCLEdBQTFCLENBQUosRUFBb0M7QUFDaEMsWUFBTSxpQkFBaUIsNEJBQXFCLFdBQVcsR0FBWCxDQUFyQixDQUFqQixDQUQwQjtBQUVoQyxtQkFBYyxVQUFkLElBQXlCLGVBQWUsRUFBZixDQUZPO0FBR2hDLG1CQUFjLFdBQWQsSUFBMEIsZUFBZSxHQUFmLENBSE07QUFJaEMsbUJBQWMsYUFBZCxJQUE0QixlQUFlLEtBQWYsQ0FKSTtLQUFwQztDQURKOztBQVNBLFdBQVcsTUFBWCxHQUFvQjtXQUFZO0NBQVo7QUFDcEIsV0FBVyxVQUFYLEdBQXdCLFVBQUMsUUFBRDtRQUFXLGlFQUFXO1dBQzFDLENBQUUsWUFBVSxDQUFWLENBQUQsR0FBZ0IsQ0FBaEIsR0FBcUIsTUFBTSxXQUFXLE1BQVgsQ0FBa0IsUUFBbEIsRUFBNEIsUUFBNUIsQ0FBTixHQUErQyxPQUFPLElBQUksS0FBSyxHQUFMLENBQVMsQ0FBVCxFQUFZLENBQUMsRUFBRCxJQUFPLFdBQVcsQ0FBWCxDQUFQLENBQWhCLENBQVA7Q0FEakQ7O0FBR3hCLFdBQVcsZ0JBQVg7QUFDQSxXQUFXLFdBQVg7QUFDQSxXQUFXLE1BQVgsR0FBb0IsVUFBQyxNQUFEO3NDQUFZOzs7O1dBQVMsVUFBQyxRQUFEO2VBQWMseUJBQU8saUJBQWEsS0FBcEI7S0FBZDtDQUFyQjs7a0JBRUwiLCJmaWxlIjoicHJlc2V0LWVhc2luZy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICAgIEVhc2luZyBmdW5jdGlvbnNcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgXG4gICAgR2VuZXJhdGVzIGFuZCBwcm92aWRlcyBlYXNpbmcgZnVuY3Rpb25zIGJhc2VkIG9uIGJhc2VGdW5jdGlvbiBkZWZpbml0aW9uc1xuICAgIFxuICAgIEEgY2FsbCB0byBlYXNpbmdGdW5jdGlvbi5nZXQoJ2Z1bmN0aW9uTmFtZScpIHJldHVybnMgYSBmdW5jdGlvbiB0aGF0IGNhbiBiZSBwYXNzZWQ6XG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MgMC0xXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBBbXAgbW9kaWZpZXIsIG9ubHkgYWNjZXB0ZWQgaW4gc29tZSBlYXNpbmcgZnVuY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQgaXMgdXNlZCB0byBhZGp1c3Qgb3ZlcmFsbCBzdHJlbmd0aFxuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBFYXNlZCBwcm9ncmVzc1xuICAgICAgICBcbiAgICBXZSBjYW4gZ2VuZXJhdGUgbmV3IGZ1bmN0aW9ucyBieSBzZW5kaW5nIGFuIGVhc2luZyBmdW5jdGlvbiB0aHJvdWdoIGVhc2luZ0Z1bmN0aW9uLmV4dGVuZChuYW1lLCBtZXRob2QpLlxuICAgIFdoaWNoIHdpbGwgbWFrZSBuYW1lSW4sIG5hbWVPdXQgYW5kIG5hbWVJbk91dCBmdW5jdGlvbnMgYXZhaWxhYmxlIHRvIHVzZS5cbiAgICAgICAgXG4gICAgRWFzaW5nIGZ1bmN0aW9ucyBmcm9tIFJvYmVydCBQZW5uZXJcbiAgICBodHRwOi8vd3d3LnJvYmVydHBlbm5lci5jb20vZWFzaW5nL1xuICAgICAgICBcbiAgICBCZXppZXIgY3VydmUgaW50ZXJwcmV0b3IgY3JlYXRlZCBmcm9tIEdhw6t0YW4gUmVuYXVkZWF1J3Mgb3JpZ2luYWwgQmV6aWVyRWFzaW5nICBcbiAgICBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNpbmcvYmxvYi9tYXN0ZXIvaW5kZXguanMgIFxuICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9MSUNFTlNFXG5cbiAgICBBbnRpY2lwYXRlIGVhc2luZyBjcmVhdGVkIGJ5IEVsbGlvdCBHaW5vXG4gICAgaHR0cHM6Ly90d2l0dGVyLmNvbS9FbGxpb3RHZW5vXG4qL1xuLy8gSW1wb3J0c1xuaW1wb3J0IGNyZWF0ZUVhc2luZ0Z1bmN0aW9uIGZyb20gJy4vY3JlYXRlLWVhc2luZyc7XG5pbXBvcnQgY3ViaWNCZXppZXIgZnJvbSAnLi9jcmVhdGUtYmV6aWVyJztcblxuLy8gVmFsdWVzXG5jb25zdCBERUZBVUxUX0JBQ0tfU1RSRU5HVEggPSAxLjUyNTtcbmNvbnN0IERFRkFVTFRfUE9XX1NUUkVOR1RIID0gMjtcblxuLypcbiAgICBFYWNoIG9mIHRoZXNlIGJhc2UgZnVuY3Rpb25zIGlzIGFuIGVhc2VJblxuICAgIFxuICAgIE9uIGluaXQsIHdlIHVzZSAubWlycm9yIGFuZCAucmV2ZXJzZSB0byBnZW5lcmF0ZSBlYXNlSW5PdXQgYW5kXG4gICAgZWFzZU91dCBmdW5jdGlvbnMgcmVzcGVjdGl2ZWx5LlxuKi9cbmNvbnN0IGJhc2VFYXNpbmcgPSB7XG4gICAgZWFzZTogKHByb2dyZXNzLCBzdHJlbmd0aCA9IERFRkFVTFRfUE9XX1NUUkVOR1RIKSA9PiBwcm9ncmVzcyAqKiBzdHJlbmd0aCxcbiAgICBjaXJjOiBwcm9ncmVzcyA9PiAxIC0gTWF0aC5zaW4oTWF0aC5hY29zKHByb2dyZXNzKSksXG4gICAgYmFjazogKHByb2dyZXNzLCBzdHJlbmd0aCA9IERFRkFVTFRfQkFDS19TVFJFTkdUSCkgPT4gKHByb2dyZXNzICogcHJvZ3Jlc3MpICogKChzdHJlbmd0aCArIDEpICogcHJvZ3Jlc3MgLSBzdHJlbmd0aClcbn07XG5cbi8vIFV0aWxpdHkgZnVuY3Rpb25zXG5jb25zdCBnZW5lcmF0ZVBvd2VyRWFzaW5nID0gKHN0cmVuZ3RoKSA9PiAocHJvZ3Jlc3MpID0+IGJhc2VFYXNpbmcuZWFzZShwcm9ncmVzcywgc3RyZW5ndGgpO1xuXG5bJ2N1YmljJywgJ3F1YXJ0JywgJ3F1aW50J10uZm9yRWFjaCgoZWFzaW5nTmFtZSwgaSkgPT4gYmFzZUVhc2luZ1tlYXNpbmdOYW1lXSA9IGdlbmVyYXRlUG93ZXJFYXNpbmcoaSArIDMpKTtcblxuLy8gR2VuZXJhdGUgaW4vb3V0L2luT3V0IHZhcmlhdGlvbnNcbmZvciAobGV0IGtleSBpbiBiYXNlRWFzaW5nKSB7XG4gICAgaWYgKGJhc2VFYXNpbmcuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBjb25zdCBlYXNpbmdGdW5jdGlvbiA9IGNyZWF0ZUVhc2luZ0Z1bmN0aW9uKGJhc2VFYXNpbmdba2V5XSk7XG4gICAgICAgIGJhc2VFYXNpbmdbYCR7a2V5fUluYF0gPSBlYXNpbmdGdW5jdGlvbi5pbjtcbiAgICAgICAgYmFzZUVhc2luZ1tgJHtrZXl9T3V0YF0gPSBlYXNpbmdGdW5jdGlvbi5vdXQ7XG4gICAgICAgIGJhc2VFYXNpbmdbYCR7a2V5fUluT3V0YF0gPSBlYXNpbmdGdW5jdGlvbi5pbk91dDtcbiAgICB9XG59XG5cbmJhc2VFYXNpbmcubGluZWFyID0gcHJvZ3Jlc3MgPT4gcHJvZ3Jlc3M7XG5iYXNlRWFzaW5nLmFudGljaXBhdGUgPSAocHJvZ3Jlc3MsIHN0cmVuZ3RoID0gREVGQVVMVF9CQUNLX1NUUkVOR1RIKSA9PlxuICAgICgocHJvZ3Jlc3MqPTIpIDwgMSkgPyAwLjUgKiBiYXNlRWFzaW5nLmJhY2tJbihwcm9ncmVzcywgc3RyZW5ndGgpIDogIDAuNSAqICgyIC0gTWF0aC5wb3coMiwgLTEwICogKHByb2dyZXNzIC0gMSkpKTtcblxuYmFzZUVhc2luZy5jcmVhdGVWYXJpYXRpb25zID0gY3JlYXRlRWFzaW5nRnVuY3Rpb247XG5iYXNlRWFzaW5nLmN1YmljQmV6aWVyID0gY3ViaWNCZXppZXI7XG5iYXNlRWFzaW5nLm1vZGlmeSA9IChlYXNpbmcsIC4uLmFyZ3MpID0+IChwcm9ncmVzcykgPT4gZWFzaW5nKHByb2dyZXNzLCAuLi5hcmdzKTtcblxuZXhwb3J0IGRlZmF1bHQgYmFzZUVhc2luZzsiXX0=

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _Flow = __webpack_require__(4);
	
	var _Flow2 = _interopRequireDefault(_Flow);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var SAVE_PROP = '__pm_flow';
	
	exports.default = function (element) {
	    if (element[SAVE_PROP]) {
	        return element[SAVE_PROP];
	    } else {
	        var flow = new _Flow2.default({ element: element });
	
	        // Bind adapter to element
	        Object.defineProperty(element, SAVE_PROP, {
	            enumerable: false,
	            writable: false,
	            value: flow
	        });
	
	        return flow;
	    }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2Zsb3cvZ2V0LWZsb3cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVBLElBQU0sWUFBWSxXQUFaOztrQkFFUyxVQUFDLE9BQUQsRUFBYTtBQUN4QixRQUFJLFFBQVEsU0FBUixDQUFKLEVBQXdCO0FBQ3BCLGVBQU8sUUFBUSxTQUFSLENBQVAsQ0FEb0I7S0FBeEIsTUFFTztBQUNILFlBQU0sT0FBTyxtQkFBUyxFQUFFLGdCQUFGLEVBQVQsQ0FBUDs7O0FBREgsY0FJSCxDQUFPLGNBQVAsQ0FBc0IsT0FBdEIsRUFBK0IsU0FBL0IsRUFBMEM7QUFDdEMsd0JBQVksS0FBWjtBQUNBLHNCQUFVLEtBQVY7QUFDQSxtQkFBTyxJQUFQO1NBSEosRUFKRzs7QUFVSCxlQUFPLElBQVAsQ0FWRztLQUZQO0NBRFciLCJmaWxlIjoiZ2V0LWZsb3cuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZsb3cgZnJvbSAnLi4vRmxvdyc7XG5cbmNvbnN0IFNBVkVfUFJPUCA9ICdfX3BtX2Zsb3cnO1xuXG5leHBvcnQgZGVmYXVsdCAoZWxlbWVudCkgPT4ge1xuICAgIGlmIChlbGVtZW50W1NBVkVfUFJPUF0pIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRbU0FWRV9QUk9QXTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBmbG93ID0gbmV3IEZsb3coeyBlbGVtZW50IH0pO1xuXG4gICAgICAgIC8vIEJpbmQgYWRhcHRlciB0byBlbGVtZW50XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCBTQVZFX1BST1AsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgICAgICAgdmFsdWU6IGZsb3dcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGZsb3c7XG4gICAgfVxufTtcblxuXG4iXX0=

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
	//# sourceMappingURL=data:application/json;base64,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ImZpbGUiOiJjYWxjLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgaGFzUHJvcGVydHksXG4gICAgaXNOdW0sXG4gICAgZmluZFZhbHVlQW5kVW5pdCxcbiAgICB0b0RlY2ltYWxcbn0gZnJvbSAnLi91dGlscyc7XG5cbmNvbnN0IFpFUk9fUE9JTlQgPSB7XG4gICAgeDogMCxcbiAgICB5OiAwLFxuICAgIHo6IDBcbn07XG5cbmNvbnN0IGRpc3RhbmNlMUQgPSAoYSwgYikgPT4gTWF0aC5hYnMoYSAtIGIpO1xuXG4vKlxuICAgIEFuZ2xlIGJldHdlZW4gcG9pbnRzXG4gICAgXG4gICAgVHJhbnNsYXRlcyB0aGUgaHlwb3RoZXRpY2FsIGxpbmUgc28gdGhhdCB0aGUgJ2Zyb20nIGNvb3JkaW5hdGVzXG4gICAgYXJlIGF0IDAsMFxuICAgIFxuICAgIEBwYXJhbSBbb2JqZWN0XTogWCBhbmQgWSBjb29yZGluYXRlcyBvZiBmcm9tIHBvaW50XG4gICAgQHBhcmFtIFtvYmplY3RdOiBYIGFuZCBZIGNvcmRpbmF0ZXMgb2YgdG8gcG9pbnRcbiAgICBAcmV0dXJuIFtyYWRpYW5dOiBBbmdsZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzIGluIHJhZGlhbnNcbiovXG5leHBvcnQgY29uc3QgYW5nbGUgPSAoYSwgYiA9IFpFUk9fUE9JTlQpID0+IHJhZGlhbnNUb0RlZ3JlZXMoTWF0aC5hdGFuMihhLnggLSBiLngsIGEueSAtIGIueSkpO1xuXG4vKlxuICAgIENvbnZlcnQgZGVncmVlcyB0byByYWRpYW5zXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBpbiBkZWdyZWVzXG4gICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgaW4gcmFkaWFuc1xuKi9cbmV4cG9ydCBjb25zdCBkZWdyZWVzVG9SYWRpYW5zID0gKGRlZ3JlZXMpID0+IGRlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xuXG4vKlxuICAgIERpbGF0ZVxuICAgIFxuICAgIENoYW5nZSB0aGUgcHJvZ3Jlc3Npb24gYmV0d2VlbiBhIGFuZCBiIGFjY29yZGluZyB0byBkaWxhdGlvbi5cbiAgICBcbiAgICBTbyBkaWxhdGlvbiA9IDAuNSB3b3VsZCBjaGFuZ2VcbiAgICBcbiAgICBhIC0tLS0tLS0tLSBiXG4gICAgXG4gICAgdG9cbiAgICBcbiAgICBhIC0tLS0gYlxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogUHJldmlvdXMgdmFsdWVcbiAgICBAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcbiAgICBAcGFyYW0gW251bWJlcl06IERpbGF0ZSBwcm9ncmVzcyBieSB4XG4gICAgQHJldHVybiBbbnVtYmVyXTogUHJldmlvdXMgdmFsdWUgcGx1cyB0aGUgZGlsYXRlZCBkaWZmZXJlbmNlXG4qL1xuZXhwb3J0IGNvbnN0IGRpbGF0ZSA9IChhLCBiLCBkaWxhdGlvbikgPT4gYSArICgoYiAtIGEpICogZGlsYXRpb24pO1xuXG4vKlxuICAgIERpc3RhbmNlXG4gICAgXG4gICAgUmV0dXJucyB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0d28gbiBkaW1lbnNpb25hbCBwb2ludHMuXG4gICAgXG4gICAgQHBhcmFtIFtvYmplY3QvbnVtYmVyXTogeCBhbmQgeSBvciBqdXN0IHggb2YgcG9pbnQgQVxuICAgIEBwYXJhbSBbb2JqZWN0L251bWJlcl06IChvcHRpb25hbCk6IHggYW5kIHkgb3IganVzdCB4IG9mIHBvaW50IEJcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBUaGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgdHdvIHBvaW50c1xuKi9cbmV4cG9ydCBjb25zdCBkaXN0YW5jZSA9IChhLCBiID0gWkVST19QT0lOVCkgPT4ge1xuICAgIC8vIDFEIGRpbWVuc2lvbnNcbiAgICBpZiAoaXNOdW0oYSkpIHtcbiAgICAgICAgcmV0dXJuIGRpc3RhbmNlMUQoYSwgYik7XG5cbiAgICAvLyBNdWx0aS1kaW1lbnNpb25hbFxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHhEZWx0YSA9IGRpc3RhbmNlMUQoYS54LCBiLngpO1xuICAgICAgICBjb25zdCB5RGVsdGEgPSBkaXN0YW5jZTFEKGEueSwgYi55KTtcbiAgICAgICAgY29uc3QgekRlbHRhID0gKGlzTnVtKGEueikpID8gZGlzdGFuY2UxRChhLnosIGIueikgOiAwO1xuXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoKHhEZWx0YSAqKiAyKSArICh5RGVsdGEgKiogMikgKyAoekRlbHRhICoqIDIpKTtcbiAgICB9XG59O1xuXG4vKlxuICAgIEVhc2UgdmFsdWUgd2l0aGluIHJhbmdlZCBwYXJhbWV0ZXJzXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcyBiZXR3ZWVuIDAgYW5kIDFcbiAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIG9mIDAgcHJvZ3Jlc3NcbiAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIG9mIDEgcHJvZ3Jlc3NcbiAgICBAcGFyYW0gW3N0cmluZyB8fCBmdW5jdGlvbl06IE5hbWUgb2YgcHJlc2V0IGVhc2luZ1xuICAgICAgICB0byB1c2Ugb3IgZ2VuZXJhdGVkIGVhc2luZyBmdW5jdGlvblxuICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIG9mIGVhc2VkIHByb2dyZXNzIGluIHJhbmdlXG4qLyBcbmV4cG9ydCBjb25zdCBlYXNlID0gKHByb2dyZXNzLCBmcm9tLCB0bywgZWFzZSkgPT4ge1xuICAgIGNvbnN0IHByb2dyZXNzTGltaXRlZCA9IHJlc3RyaWN0KHByb2dyZXNzLCAwLCAxKTtcbiAgICBjb25zdCBlYXNlZFByb2dyZXNzID0gZWFzZShwcm9ncmVzc0xpbWl0ZWQpO1xuXG4gICAgcmV0dXJuIGdldFZhbHVlRnJvbVByb2dyZXNzKGVhc2VkUHJvZ3Jlc3MsIGZyb20sIHRvKTtcbn07XG4gXG4vKlxuICAgIEh5cG90ZW51c2VcbiAgICBcbiAgICBSZXR1cm5zIHRoZSBoeXBvdGVudXNlLCBzaWRlIEMsIGdpdmVuIHRoZSBsZW5ndGhzIG9mIHNpZGVzIEEgYW5kIEIuXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBMZW5ndGggb2YgQVxuICAgIEBwYXJhbSBbbnVtYmVyXTogTGVuZ3RoIG9mIEJcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBMZW5ndGggb2YgQ1xuKi9cbmV4cG9ydCBjb25zdCBoeXBvdGVudXNlID0gKGEsIGIpID0+IE1hdGguc3FydCgoYSAqIGEpICsgKGIgKiBiKSk7XG5cbi8qXG4gICAgVmFsdWUgaW4gcmFuZ2UgZnJvbSBwcm9ncmVzc1xuICAgIFxuICAgIEdpdmVuIGEgbG93ZXIgbGltaXQgYW5kIGFuIHVwcGVyIGxpbWl0LCB3ZSByZXR1cm4gdGhlIHZhbHVlIHdpdGhpblxuICAgIHRoYXQgcmFuZ2UgYXMgZXhwcmVzc2VkIGJ5IHByb2dyZXNzIChhIG51bWJlciBmcm9tIDAtMSlcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFRoZSBwcm9ncmVzcyBiZXR3ZWVuIGxvd2VyIGFuZCB1cHBlciBsaW1pdHMgZXhwcmVzc2VkIDAtMVxuICAgIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgb2YgcmFuZ2VcbiAgICBAcGFyYW0gW251bWJlcl06IFVwcGVyIGxpbWl0IG9mIHJhbmdlXG4gICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgYXMgY2FsY3VsYXRlZCBmcm9tIHByb2dyZXNzIHdpdGhpbiByYW5nZSAobm90IGxpbWl0ZWQgd2l0aGluIHJhbmdlKVxuKi9cbmV4cG9ydCBjb25zdCBnZXRWYWx1ZUZyb21Qcm9ncmVzcyA9IChwcm9ncmVzcywgZnJvbSwgdG8pID0+ICgtIHByb2dyZXNzICogZnJvbSkgKyAocHJvZ3Jlc3MgKiB0bykgKyBmcm9tO1xuXG4vKlxuICAgIFByb2dyZXNzIHdpdGhpbiBnaXZlbiByYW5nZVxuICAgIFxuICAgIEdpdmVuIGEgbG93ZXIgbGltaXQgYW5kIGFuIHVwcGVyIGxpbWl0LCB3ZSByZXR1cm4gdGhlIHByb2dyZXNzXG4gICAgKGV4cHJlc3NlZCBhcyBhIG51bWJlciAwLTEpIHJlcHJlc2VudGVkIGJ5IHRoZSBnaXZlbiB2YWx1ZSwgYW5kXG4gICAgbGltaXQgdGhhdCBwcm9ncmVzcyB0byB3aXRoaW4gMC0xLlxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgdG8gZmluZCBwcm9ncmVzcyB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiAgICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXRcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBQcm9ncmVzcyBvZiB2YWx1ZSB3aXRoaW4gcmFuZ2UgYXMgZXhwcmVzc2VkIDAtMVxuKi9cbmV4cG9ydCBjb25zdCBnZXRQcm9ncmVzc0Zyb21WYWx1ZSA9ICh2YWx1ZSwgZnJvbSwgdG8pID0+ICh2YWx1ZSAtIGZyb20pIC8gKHRvIC0gZnJvbSk7XG5cbi8qXG4gICAgT2Zmc2V0IGJldHdlZW4gdHdvIG9iamVjdHMgb2YgbnVtYmVyc1xuXG4gICAgSWYgcHJvcGVydHkgaXMgZm91bmQgaW4gYiBub3QgcHJlc2VudCBpbiBhLCBpdCB3aWxsIHJldHVybiBgMGAgZm9yIHRoYXQgcHJvcC5cbiAgICBcbiAgICBAcGFyYW0gW1BvaW50XTogRmlyc3Qgb2JqZWN0XG4gICAgQHBhcmFtIFtQb2ludF06IFNlY29uZCBvYmplY3RcbiAgICBAcmV0dXJuIFtPZmZzZXRdOiBEaXN0YW5jZSBtZXRyaWNzIGJldHdlZW4gdHdvIHBvaW50c1xuKi9cbmV4cG9ydCBjb25zdCBvZmZzZXQgPSAoYSwgYikgPT4ge1xuICAgIGNvbnN0IG9mZnNldCA9IHt9O1xuXG4gICAgZm9yIChsZXQga2V5IGluIGIpIHtcbiAgICAgICAgaWYgKGIuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgb2Zmc2V0W2tleV0gPSBoYXNQcm9wZXJ0eShhLCBrZXkpID8gYltrZXldIC0gYVtrZXldIDogMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvZmZzZXQ7XG59O1xuXG4vKlxuICAgIFBvaW50IGZyb20gYW5nbGUgYW5kIGRpc3RhbmNlXG4gICAgXG4gICAgQHBhcmFtIFtvYmplY3RdOiAyRCBwb2ludCBvZiBvcmlnaW5cbiAgICBAcGFyYW0gW251bWJlcl06IEFuZ2xlIGZyb20gb3JpZ2luXG4gICAgQHBhcmFtIFtudW1iZXJdOiBEaXN0YW5jZSBmcm9tIG9yaWdpblxuICAgIEByZXR1cm4gW29iamVjdF06IENhbGN1bGF0ZWQgMkQgcG9pbnRcbiovXG5leHBvcnQgY29uc3QgcG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZSA9IChvcmlnaW4sIGFuZ2xlLCBkaXN0YW5jZSkgPT4ge1xuICAgIGFuZ2xlID0gZGVncmVlc1RvUmFkaWFucyhhbmdsZSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB4OiBkaXN0YW5jZSAqIE1hdGguY29zKGFuZ2xlKSArIG9yaWdpbi54LFxuICAgICAgICB5OiBkaXN0YW5jZSAqIE1hdGguc2luKGFuZ2xlKSArIG9yaWdpbi55XG4gICAgfTtcbn07XG5cbi8qXG4gICAgQ29udmVydCByYWRpYW5zIHRvIGRlZ3JlZXNcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIGluIHJhZGlhbnNcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBpbiBkZWdyZWVzXG4qL1xuZXhwb3J0IGNvbnN0IHJhZGlhbnNUb0RlZ3JlZXMgPSAocmFkaWFucykgPT4gcmFkaWFucyAqIDE4MCAvIE1hdGguUEk7XG5cbi8qXG4gICAgUmV0dXJuIHJhbmRvbSBudW1iZXIgYmV0d2VlbiByYW5nZVxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBPdXRwdXQgbWluaW11bVxuICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBPdXRwdXQgbWF4aW11bVxuICAgIEByZXR1cm4gW251bWJlcl06IFJhbmRvbSBudW1iZXIgd2l0aGluIHJhbmdlLCBvciAwIGFuZCAxIGlmIG5vbmUgcHJvdmlkZWRcbiovXG5leHBvcnQgY29uc3QgcmFuZG9tID0gKG1pbiA9IDAsIG1heCA9IDEpID0+IE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcblxuLypcbiAgICBDYWxjdWxhdGUgcmVsYXRpdmUgdmFsdWVcbiAgICBcbiAgICBUYWtlcyB0aGUgb3BlcmF0b3IgYW5kIHZhbHVlIGZyb20gYSBzdHJpbmcsIGllIFwiKz01XCIsIGFuZCBhcHBsaWVzXG4gICAgdG8gdGhlIGN1cnJlbnQgdmFsdWUgdG8gcmVzb2x2ZSBhIG5ldyB0YXJnZXQuXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gICAgQHBhcmFtIFtzdHJpbmddOiBSZWxhdGl2ZSB2YWx1ZVxuICAgIEByZXR1cm4gW251bWJlcl06IE5ldyB2YWx1ZVxuKi9cbmV4cG9ydCBjb25zdCByZWxhdGl2ZVZhbHVlID0gKGN1cnJlbnQsIHJlbGF0aXZlKSA9PiB7XG4gICAgbGV0IG5ld1ZhbHVlID0gY3VycmVudDtcbiAgICBjb25zdCBlcXVhdGlvbiA9IHJlbGF0aXZlLnNwbGl0KCc9Jyk7XG4gICAgY29uc3Qgb3BlcmF0b3IgPSBlcXVhdGlvblswXTtcbiAgICBsZXQgeyB1bml0LCB2YWx1ZSB9ID0gZmluZFZhbHVlQW5kVW5pdChlcXVhdGlvblsxXSk7XG5cbiAgICB2YWx1ZSA9IHBhcnNlRmxvYXQodmFsdWUpO1xuXG4gICAgc3dpdGNoIChvcGVyYXRvcikge1xuICAgIGNhc2UgJysnOlxuICAgICAgICBuZXdWYWx1ZSArPSB2YWx1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgY2FzZSAnLSc6XG4gICAgICAgIG5ld1ZhbHVlIC09IHZhbHVlO1xuICAgICAgICBicmVhaztcbiAgICBjYXNlICcqJzpcbiAgICAgICAgbmV3VmFsdWUgKj0gdmFsdWU7XG4gICAgICAgIGJyZWFrO1xuICAgIGNhc2UgJy8nOlxuICAgICAgICBuZXdWYWx1ZSAvPSB2YWx1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIFxuICAgIGlmICh1bml0KSB7XG4gICAgICAgIG5ld1ZhbHVlICs9IHVuaXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld1ZhbHVlO1xufTtcblxuLypcbiAgICBSZXN0cmljdCB2YWx1ZSB0byByYW5nZVxuICAgIFxuICAgIFJldHVybiB2YWx1ZSB3aXRoaW4gdGhlIHJhbmdlIG9mIGxvd2VyTGltaXQgYW5kIHVwcGVyTGltaXRcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIHRvIGtlZXAgd2l0aGluIHJhbmdlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBvZiByYW5nZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXQgb2YgcmFuZ2VcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBhcyBsaW1pdGVkIHdpdGhpbiBnaXZlbiByYW5nZVxuKi9cbmV4cG9ydCBjb25zdCByZXN0cmljdCA9ICh2YWx1ZSwgbWluLCBtYXgpID0+IE1hdGgubWF4KE1hdGgubWluKHZhbHVlLCBtYXgpLCBtaW4pO1xuXG4vKlxuICAgIEZyYW1lcmF0ZS1pbmRlcGVuZGVudCBzbW9vdGhpbmdcblxuICAgIEBwYXJhbSBbbnVtYmVyXTogTmV3IHZhbHVlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBPbGQgdmFsdWVcbiAgICBAcGFyYW0gW251bWJlcl06IEZyYW1lIGR1cmF0aW9uXG4gICAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IFNtb290aGluZyAoMCBpcyBub25lKVxuKi9cbmV4cG9ydCBjb25zdCBzbW9vdGggPSAobmV3VmFsdWUsIG9sZFZhbHVlLCBkdXJhdGlvbiwgc21vb3RoaW5nID0gMCkgPT4gdG9EZWNpbWFsKG9sZFZhbHVlICsgKGR1cmF0aW9uICogKG5ld1ZhbHVlIC0gb2xkVmFsdWUpIC8gTWF0aC5tYXgoc21vb3RoaW5nLCBkdXJhdGlvbikpKTtcblxuLypcbiAgICBDb252ZXJ0IHggcGVyIHNlY29uZCB0byBwZXIgZnJhbWUgdmVsb2NpdHkgYmFzZWQgb24gZnBzXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBVbml0IHBlciBzZWNvbmRcbiAgICBAcGFyYW0gW251bWJlcl06IEZyYW1lIGR1cmF0aW9uIGluIG1zXG4qL1xuZXhwb3J0IGNvbnN0IHNwZWVkUGVyRnJhbWUgPSAoeHBzLCBmcmFtZUR1cmF0aW9uKSA9PiAoaXNOdW0oeHBzKSkgPyB4cHMgLyAoMTAwMCAvIGZyYW1lRHVyYXRpb24pIDogMDtcblxuLypcbiAgICBDb252ZXJ0IHZlbG9jaXR5IGludG8gdmVsaWNpdHkgcGVyIHNlY29uZFxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVW5pdCBwZXIgZnJhbWVcbiAgICBAcGFyYW0gW251bWJlcl06IEZyYW1lIGR1cmF0aW9uIGluIG1zXG4qL1xuZXhwb3J0IGNvbnN0IHNwZWVkUGVyU2Vjb25kID0gKHZlbG9jaXR5LCBmcmFtZUR1cmF0aW9uKSA9PiB2ZWxvY2l0eSAqICgxMDAwIC8gZnJhbWVEdXJhdGlvbik7XG5cbi8qXG4gICAgQ3JlYXRlIHN0ZXBwZWQgdmVyc2lvbiBvZiAwLTEgcHJvZ3Jlc3NcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcbiAgICBAcGFyYW0gW2ludF06IE51bWJlciBvZiBzdGVwc1xuICAgIEByZXR1cm4gW251bWJlcl06IFN0ZXBwZWQgdmFsdWVcbiovXG5leHBvcnQgY29uc3Qgc3RlcFByb2dyZXNzID0gKHByb2dyZXNzLCBzdGVwcykgPT4ge1xuICAgIGNvbnN0IHNlZ21lbnQgPSAxIC8gKHN0ZXBzIC0gMSk7XG4gICAgY29uc3QgdGFyZ2V0ID0gMSAtICgxIC8gc3RlcHMpO1xuICAgIGNvbnN0IHByb2dyZXNzT2ZUYXJnZXQgPSBNYXRoLm1pbihwcm9ncmVzcyAvIHRhcmdldCwgMSk7XG5cbiAgICByZXR1cm4gTWF0aC5mbG9vcihwcm9ncmVzc09mVGFyZ2V0IC8gc2VnbWVudCkgKiBzZWdtZW50O1xufTsiXX0=

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9hbHBoYS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7a0JBRWU7QUFDWCx1Q0FEVyIsImZpbGUiOiJhbHBoYS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBvcGFjaXR5IH0gZnJvbSAnLi9zZXR0aW5ncy9kZWZhdWx0LXByb3BzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRlZmF1bHRQcm9wczogb3BhY2l0eVxufTsiXX0=

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9hbmdsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O2tCQUVlO0FBQ1gsa0JBQWM7QUFDVixjQUFNLEtBQU47QUFDQSw0QkFGVTtLQUFkIiwiZmlsZSI6ImFuZ2xlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1bml0VHlwZSBmcm9tICcuL3VuaXQnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIHVuaXQ6ICdkZWcnLFxuICAgICAgICB0eXBlOiB1bml0VHlwZVxuICAgIH1cbn07Il19

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9jb2xvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBLElBQU0sYUFBYSw2Q0FBYjtBQUNOLElBQU0sZ0JBQWdCLFdBQVcsTUFBWDs7a0JBRVA7QUFDWCwrQkFBbUIsY0FBSSxZQUFKLEVBQXFCLGNBQUksWUFBSixDQUF4Qzs7QUFFQSxVQUFNLFVBQUMsS0FBRDtlQUFXLGNBQUksSUFBSixDQUFTLEtBQVQsS0FBbUIsY0FBSSxJQUFKLENBQVMsS0FBVCxDQUFuQixJQUFzQyxjQUFJLElBQUosQ0FBUyxLQUFULENBQXRDO0tBQVg7O0FBRU4sV0FBTyxVQUFDLEtBQUQsRUFBVztBQUNkLGFBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLGFBQUosRUFBbUIsR0FBbkMsRUFBd0M7QUFDcEMsZ0JBQUksV0FBVyxDQUFYLEVBQWMsSUFBZCxDQUFtQixLQUFuQixDQUFKLEVBQStCO0FBQzNCLHVCQUFPLFdBQVcsQ0FBWCxFQUFjLEtBQWQsQ0FBb0IsS0FBcEIsQ0FBUCxDQUQyQjthQUEvQjtTQURKO0tBREc7O0FBUVAsYUFBUyxVQUFDLE1BQUQ7ZUFBWSxNQUFDLENBQU8sR0FBUCxLQUFlLFNBQWYsR0FBNEIsY0FBSSxPQUFKLENBQVksTUFBWixDQUE3QixHQUFtRCxjQUFJLE9BQUosQ0FBWSxNQUFaLENBQW5EO0tBQVoiLCJmaWxlIjoiY29sb3IuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJnYiBmcm9tICcuL3JnYic7XG5pbXBvcnQgaHNsIGZyb20gJy4vaHNsJztcbmltcG9ydCBoZXggZnJvbSAnLi9oZXgnO1xuXG5jb25zdCBjb2xvclR5cGVzID0gW3JnYiwgaHNsLCBoZXhdO1xuY29uc3QgbnVtQ29sb3JUeXBlcyA9IGNvbG9yVHlwZXMubGVuZ3RoO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGVmYXVsdFByb3BzOiB7IC4uLnJnYi5kZWZhdWx0UHJvcHMsIC4uLmhzbC5kZWZhdWx0UHJvcHMgfSxcblxuICAgIHRlc3Q6ICh2YWx1ZSkgPT4gcmdiLnRlc3QodmFsdWUpIHx8IGhleC50ZXN0KHZhbHVlKSB8fCBoc2wudGVzdCh2YWx1ZSksXG5cbiAgICBzcGxpdDogKHZhbHVlKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQ29sb3JUeXBlczsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY29sb3JUeXBlc1tpXS50ZXN0KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb2xvclR5cGVzW2ldLnNwbGl0KHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBjb21iaW5lOiAodmFsdWVzKSA9PiAodmFsdWVzLlJlZCAhPT0gdW5kZWZpbmVkKSA/IHJnYi5jb21iaW5lKHZhbHVlcykgOiBoc2wuY29tYmluZSh2YWx1ZXMpXG59O1xuIl19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9jb21wbGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLElBQU0sY0FBYyxrQkFBZDtBQUNOLElBQU0sZ0JBQWdCLFVBQUMsS0FBRDtXQUFXLE9BQU8sS0FBUCxHQUFlLEdBQWY7Q0FBWDs7a0JBRVA7O0FBRVgsVUFBTSxVQUFDLEtBQUQsRUFBVztBQUNiLFlBQU0sVUFBVSxNQUFNLEtBQU4sQ0FBWSxXQUFaLENBQVYsQ0FETztBQUViLGVBQVEsb0JBQVEsT0FBUixLQUFvQixRQUFRLE1BQVIsR0FBaUIsQ0FBakIsQ0FGZjtLQUFYOztBQUtOLGNBQVUsVUFBQyxLQUFELEVBQVc7QUFDakIsWUFBSSxVQUFVLENBQVYsQ0FEYTtBQUVqQixlQUFPLE1BQU0sT0FBTixDQUFjLFdBQWQsRUFBMkI7bUJBQU0sY0FBYyxTQUFkO1NBQU4sQ0FBbEMsQ0FGaUI7S0FBWDs7QUFLVixXQUFPLFVBQUMsS0FBRCxFQUFXO0FBQ2QsWUFBTSxhQUFhLEVBQWIsQ0FEUTs7QUFHZCxjQUFNLEtBQU4sQ0FBWSxXQUFaLEVBQXlCLE9BQXpCLENBQWlDLFVBQUMsS0FBRCxFQUFRLENBQVI7bUJBQWMsV0FBVyxDQUFYLElBQWdCLEtBQWhCO1NBQWQsQ0FBakMsQ0FIYzs7QUFLZCxlQUFPLFVBQVAsQ0FMYztLQUFYOztBQVFQLGFBQVMsVUFBQyxNQUFELEVBQVMsUUFBVCxFQUFzQjtBQUMzQixhQUFLLElBQUksR0FBSixJQUFXLE1BQWhCLEVBQXdCO0FBQ3BCLGdCQUFJLE9BQU8sY0FBUCxDQUFzQixHQUF0QixDQUFKLEVBQWdDO0FBQzVCLDJCQUFXLFNBQVMsT0FBVCxDQUFpQixjQUFjLEdBQWQsQ0FBakIsRUFBcUMsT0FBTyxHQUFQLENBQXJDLENBQVgsQ0FENEI7YUFBaEM7U0FESjs7QUFNQSxlQUFPLFFBQVAsQ0FQMkI7S0FBdEIiLCJmaWxlIjoiY29tcGxleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc0FycmF5IH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcblxuY29uc3QgRkxPQVRfUkVHRVggPSAvKC0pPyhcXGRbXFxkXFwuXSopL2c7XG5jb25zdCBnZW5lcmF0ZVRva2VuID0gKHRva2VuKSA9PiAnJHsnICsgdG9rZW4gKyAnfSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIHRlc3Q6ICh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBtYXRjaGVzID0gdmFsdWUubWF0Y2goRkxPQVRfUkVHRVgpO1xuICAgICAgICByZXR1cm4gKGlzQXJyYXkobWF0Y2hlcykgJiYgbWF0Y2hlcy5sZW5ndGggPiAxKTtcbiAgICB9LFxuXG4gICAgdGVtcGxhdGU6ICh2YWx1ZSkgPT4ge1xuICAgICAgICBsZXQgY291bnRlciA9IDA7XG4gICAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKEZMT0FUX1JFR0VYLCAoKSA9PiBnZW5lcmF0ZVRva2VuKGNvdW50ZXIrKykpO1xuICAgIH0sXG5cbiAgICBzcGxpdDogKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IHNwbGl0VmFsdWUgPSB7fTtcblxuICAgICAgICB2YWx1ZS5tYXRjaChGTE9BVF9SRUdFWCkuZm9yRWFjaCgodmFsdWUsIGkpID0+IHNwbGl0VmFsdWVbaV0gPSB2YWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIHNwbGl0VmFsdWU7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6ICh2YWx1ZXMsIHRlbXBsYXRlKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiB2YWx1ZXMpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlID0gdGVtcGxhdGUucmVwbGFjZShnZW5lcmF0ZVRva2VuKGtleSksIHZhbHVlc1trZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICB9XG5cbn07Il19

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
	        var r = undefined,
	            g = undefined,
	            b = undefined;
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9oZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztrQkFFZTtBQUNYLGtCQUFjLGNBQUksWUFBSjs7QUFFZCxVQUFNLFVBQUMsS0FBRDtlQUFZLFNBQVMsTUFBTSxPQUFOLENBQWMsR0FBZCxJQUFxQixDQUFDLENBQUQ7S0FBMUM7O0FBRU4sV0FBTyxVQUFDLEtBQUQsRUFBVztBQUNkLFlBQUksYUFBSjtZQUFPLGFBQVA7WUFBVSxhQUFWOzs7QUFEYyxZQUlWLE1BQU0sTUFBTixHQUFlLENBQWYsRUFBa0I7QUFDbEIsZ0JBQUksTUFBTSxNQUFOLENBQWEsQ0FBYixFQUFnQixDQUFoQixDQUFKLENBRGtCO0FBRWxCLGdCQUFJLE1BQU0sTUFBTixDQUFhLENBQWIsRUFBZ0IsQ0FBaEIsQ0FBSixDQUZrQjtBQUdsQixnQkFBSSxNQUFNLE1BQU4sQ0FBYSxDQUFiLEVBQWdCLENBQWhCLENBQUo7OztBQUhrQixTQUF0QixNQU1PO0FBQ0gsb0JBQUksTUFBTSxNQUFOLENBQWEsQ0FBYixFQUFnQixDQUFoQixDQUFKLENBREc7QUFFSCxvQkFBSSxNQUFNLE1BQU4sQ0FBYSxDQUFiLEVBQWdCLENBQWhCLENBQUosQ0FGRztBQUdILG9CQUFJLE1BQU0sTUFBTixDQUFhLENBQWIsRUFBZ0IsQ0FBaEIsQ0FBSixDQUhHO0FBSUgscUJBQUssQ0FBTCxDQUpHO0FBS0gscUJBQUssQ0FBTCxDQUxHO0FBTUgscUJBQUssQ0FBTCxDQU5HO2FBTlA7O0FBZUEsZUFBTztBQUNILGlCQUFLLFNBQVMsQ0FBVCxFQUFZLEVBQVosQ0FBTDtBQUNBLG1CQUFPLFNBQVMsQ0FBVCxFQUFZLEVBQVosQ0FBUDtBQUNBLGtCQUFNLFNBQVMsQ0FBVCxFQUFZLEVBQVosQ0FBTjtBQUNBLG1CQUFPLENBQVA7U0FKSixDQW5CYztLQUFYOztBQTJCUCxhQUFTLFVBQUMsTUFBRDtlQUFZLGNBQUksT0FBSixDQUFZLE1BQVo7S0FBWiIsImZpbGUiOiJoZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJnYiBmcm9tICcuL3JnYic7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkZWZhdWx0UHJvcHM6IHJnYi5kZWZhdWx0UHJvcHMsXG5cbiAgICB0ZXN0OiAodmFsdWUpID0+ICh2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mKCcjJykgPiAtMSksXG5cbiAgICBzcGxpdDogKHZhbHVlKSA9PiB7XG4gICAgICAgIGxldCByLCBnLCBiO1xuXG4gICAgICAgIC8vIElmIHdlIGhhdmUgNiBjaGFyYWN0ZXJzLCBpZSAjRkYwMDAwXG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiA0KSB7XG4gICAgICAgICAgICByID0gdmFsdWUuc3Vic3RyKDEsIDIpO1xuICAgICAgICAgICAgZyA9IHZhbHVlLnN1YnN0cigzLCAyKTtcbiAgICAgICAgICAgIGIgPSB2YWx1ZS5zdWJzdHIoNSwgMik7XG5cbiAgICAgICAgLy8gT3Igd2UgaGF2ZSAzIGNoYXJhY3RlcnMsIGllICNGMDBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHIgPSB2YWx1ZS5zdWJzdHIoMSwgMSk7XG4gICAgICAgICAgICBnID0gdmFsdWUuc3Vic3RyKDIsIDEpO1xuICAgICAgICAgICAgYiA9IHZhbHVlLnN1YnN0cigzLCAxKTtcbiAgICAgICAgICAgIHIgKz0gcjtcbiAgICAgICAgICAgIGcgKz0gZztcbiAgICAgICAgICAgIGIgKz0gYjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBSZWQ6IHBhcnNlSW50KHIsIDE2KSxcbiAgICAgICAgICAgIEdyZWVuOiBwYXJzZUludChnLCAxNiksXG4gICAgICAgICAgICBCbHVlOiBwYXJzZUludChiLCAxNiksXG4gICAgICAgICAgICBBbHBoYTogMVxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICBjb21iaW5lOiAodmFsdWVzKSA9PiByZ2IuY29tYmluZSh2YWx1ZXMpXG59OyJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9oc2wuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztrQkFJZTtBQUNYLGtCQUFjO0FBQ1YsYUFBSztBQUNELGlCQUFLLENBQUw7QUFDQSxpQkFBSyxHQUFMO1NBRko7QUFJQSx5Q0FMVTtBQU1WLHdDQU5VO0FBT1Ysb0NBUFU7S0FBZDs7QUFVQSxVQUFNLFVBQUMsS0FBRDtlQUFZLFNBQVMsTUFBTSxPQUFOLENBQWMsS0FBZCxJQUF1QixDQUFDLENBQUQ7S0FBNUM7O0FBRU4sV0FBTyxVQUFDLEtBQUQ7ZUFBVywyQkFBZSxLQUFmO0tBQVg7O0FBRVAsYUFBUyxVQUFDLE1BQUQ7ZUFBWSxpQ0FBcUIsNEJBQWdCLE1BQWhCLG1CQUFrQyxJQUFsQyxFQUF3QyxDQUF4QyxDQUFyQixFQUFpRSxNQUFqRTtLQUFaIiwiZmlsZSI6ImhzbC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwZXJjZW50LCBvcGFjaXR5IH0gZnJvbSAnLi9zZXR0aW5ncy9kZWZhdWx0LXByb3BzJztcbmltcG9ydCB7IGhzbCBhcyBoc2xUZXJtcyB9IGZyb20gJy4vc2V0dGluZ3MvZGljdGlvbmFyeSc7XG5pbXBvcnQgeyBjcmVhdGVEZWxpbWl0ZWQsIGNyZWF0ZUZ1bmN0aW9uU3RyaW5nLCBnZXRDb2xvclZhbHVlcyB9IGZyb20gJy4uL2luYy91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgSHVlOiB7XG4gICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICBtYXg6IDM2MFxuICAgICAgICB9LFxuICAgICAgICBTYXR1cmF0aW9uOiBwZXJjZW50LFxuICAgICAgICBMaWdodG5lc3M6IHBlcmNlbnQsXG4gICAgICAgIEFscGhhOiBvcGFjaXR5XG4gICAgfSxcblxuICAgIHRlc3Q6ICh2YWx1ZSkgPT4gKHZhbHVlICYmIHZhbHVlLmluZGV4T2YoJ2hzbCcpID4gLTEpLFxuXG4gICAgc3BsaXQ6ICh2YWx1ZSkgPT4gZ2V0Q29sb3JWYWx1ZXModmFsdWUsIGhzbFRlcm1zKSxcblxuICAgIGNvbWJpbmU6ICh2YWx1ZXMpID0+IGNyZWF0ZUZ1bmN0aW9uU3RyaW5nKGNyZWF0ZURlbGltaXRlZCh2YWx1ZXMsIGhzbFRlcm1zLCAnLCAnLCAyKSwgJ2hzbGEnKVxufTtcbiJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9weC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O2tCQUVlO0FBQ1gsa0JBQWM7QUFDVixjQUFNLElBQU47QUFDQSw0QkFGVTtLQUFkIiwiZmlsZSI6InB4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1bml0VHlwZSBmcm9tICcuL3VuaXQnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIHVuaXQ6ICdweCcsXG4gICAgICAgIHR5cGU6IHVuaXRUeXBlXG4gICAgfVxufTsiXX0=

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9yZ2IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztrQkFJZTtBQUNYLGtCQUFjO0FBQ1YsOEJBRFU7QUFFVixnQ0FGVTtBQUdWLCtCQUhVO0FBSVYsb0NBSlU7S0FBZDs7QUFPQSxVQUFNLFVBQUMsS0FBRDtlQUFZLFNBQVMsTUFBTSxPQUFOLENBQWMsS0FBZCxJQUF1QixDQUFDLENBQUQ7S0FBNUM7O0FBRU4sV0FBTyxVQUFDLEtBQUQ7ZUFBVywyQkFBZSxLQUFmO0tBQVg7O0FBRVAsYUFBUyxVQUFDLE1BQUQ7ZUFBWSxpQ0FBcUIsNEJBQWdCLE1BQWhCLG1CQUFrQyxJQUFsQyxFQUF3QyxDQUF4QyxDQUFyQixFQUFpRSxNQUFqRTtLQUFaIiwiZmlsZSI6InJnYi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVEZWxpbWl0ZWQsIGNyZWF0ZUZ1bmN0aW9uU3RyaW5nLCBnZXRDb2xvclZhbHVlcyB9IGZyb20gJy4uL2luYy91dGlscyc7XG5pbXBvcnQgeyByZ2IgYXMgcmdiVGVybXMgfSBmcm9tICcuL3NldHRpbmdzL2RpY3Rpb25hcnknO1xuaW1wb3J0IHsgcmdiIGFzIGRlZmF1bHRSR0IsIG9wYWNpdHkgYXMgZGVmYXVsdE9wYWNpdHkgfSBmcm9tICcuL3NldHRpbmdzL2RlZmF1bHQtcHJvcHMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIFJlZDogZGVmYXVsdFJHQixcbiAgICAgICAgR3JlZW46IGRlZmF1bHRSR0IsXG4gICAgICAgIEJsdWU6IGRlZmF1bHRSR0IsXG4gICAgICAgIEFscGhhOiBkZWZhdWx0T3BhY2l0eVxuICAgIH0sXG5cbiAgICB0ZXN0OiAodmFsdWUpID0+ICh2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mKCdyZ2InKSA+IC0xKSxcblxuICAgIHNwbGl0OiAodmFsdWUpID0+IGdldENvbG9yVmFsdWVzKHZhbHVlLCByZ2JUZXJtcyksXG5cbiAgICBjb21iaW5lOiAodmFsdWVzKSA9PiBjcmVhdGVGdW5jdGlvblN0cmluZyhjcmVhdGVEZWxpbWl0ZWQodmFsdWVzLCByZ2JUZXJtcywgJywgJywgMiksICdyZ2JhJylcbn07Il19

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
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9zaGFkb3cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0EsSUFBTSwwQkFBMEIsbUJBQVksS0FBWixDQUFrQixDQUFsQixFQUFxQixDQUFyQixDQUExQjs7a0JBRVM7QUFDWCwrQkFDTyxnQkFBTSxZQUFOO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7TUFMSjs7QUFRQSxXQUFPLFVBQUMsS0FBRCxFQUFXO0FBQ2QsWUFBTSxPQUFPLGdDQUFvQixLQUFwQixDQUFQLENBRFE7QUFFZCxZQUFJLGtCQUFrQixLQUFsQixDQUZVO0FBR2QsWUFBSSxZQUFZLEVBQVosQ0FIVTtBQUlkLFlBQUksYUFBYSxFQUFiLENBSlU7O0FBTWQsYUFBSyxPQUFMLENBQWEsVUFBQyxHQUFELEVBQU0sQ0FBTixFQUFZOztBQUVyQixnQkFBSSxtQkFBbUIsZ0JBQU0sSUFBTixDQUFXLEdBQVgsQ0FBbkIsRUFBb0M7QUFDcEMsa0NBQWtCLElBQWxCLENBRG9DO0FBRXBDLDZCQUFhLEdBQWI7OztBQUZvQyxhQUF4QyxNQUtPO0FBQ0gsK0JBQVcsbUJBQVksQ0FBWixDQUFYLElBQTZCLEdBQTdCLENBREc7aUJBTFA7U0FGUyxDQUFiLENBTmM7O0FBa0JkLFlBQU0sa0JBQWtCLGdCQUFNLEtBQU4sQ0FBWSxTQUFaLENBQWxCLENBbEJROztBQW9CZCw0QkFBWSxjQUFZLG1DQUF4QixDQXBCYztLQUFYOztBQXVCUCxhQUFTLFVBQUMsTUFBRDtlQUFZLDRCQUFnQixNQUFoQixFQUF3Qix1QkFBeEIsRUFBaUQsR0FBakQsSUFBd0QsZ0JBQU0sT0FBTixDQUFjLE1BQWQsQ0FBeEQ7S0FBWiIsImZpbGUiOiJzaGFkb3cuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbG9yIGZyb20gJy4vY29sb3InO1xuaW1wb3J0IHsgZGVmYXVsdFByb3BzIGFzIHB4RGVmYXVsdFByb3BzIH0gZnJvbSAnLi9weCc7XG5pbXBvcnQgeyBzaGFkb3cgYXMgc2hhZG93VGVybXMgfSBmcm9tICcuL3NldHRpbmdzL2RpY3Rpb25hcnknO1xuaW1wb3J0IHsgc3BsaXRTcGFjZURlbGltaXRlZCwgY3JlYXRlRGVsaW1pdGVkIH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcblxuY29uc3Qgc2hhZG93V2l0aG91dENvbG9yVGVybXMgPSBzaGFkb3dUZXJtcy5zbGljZSgwLCA0KTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICAuLi5jb2xvci5kZWZhdWx0UHJvcHMsXG4gICAgICAgIFg6IHB4RGVmYXVsdFByb3BzLFxuICAgICAgICBZOiBweERlZmF1bHRQcm9wcyxcbiAgICAgICAgUmFkaXVzOiBweERlZmF1bHRQcm9wcyxcbiAgICAgICAgU3ByZWFkOiBweERlZmF1bHRQcm9wc1xuICAgIH0sXG5cbiAgICBzcGxpdDogKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IGJpdHMgPSBzcGxpdFNwYWNlRGVsaW1pdGVkKHZhbHVlKTtcbiAgICAgICAgbGV0IGhhc1JlYWNoZWRDb2xvciA9IGZhbHNlO1xuICAgICAgICBsZXQgY29sb3JQcm9wID0gJyc7XG4gICAgICAgIGxldCBzcGxpdFZhbHVlID0ge307XG5cbiAgICAgICAgYml0cy5mb3JFYWNoKChiaXQsIGkpID0+IHtcbiAgICAgICAgICAgIC8vIElmIHdlJ3ZlIHJlYWNoZWQgdGhlIGNvbG9yIHByb3BzLCBhcHBlbmQgdG8gY29sb3Igc3RyaW5nXG4gICAgICAgICAgICBpZiAoaGFzUmVhY2hlZENvbG9yIHx8IGNvbG9yLnRlc3QoYml0KSkge1xuICAgICAgICAgICAgICAgIGhhc1JlYWNoZWRDb2xvciA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29sb3JQcm9wICs9IGJpdDtcblxuICAgICAgICAgICAgLy8gRWxzZSBwcm9jZXNzIHNoYWRvdyB2YWx1ZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzcGxpdFZhbHVlW3NoYWRvd1Rlcm1zW2ldXSA9IGJpdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3Qgc3BsaXRDb2xvclByb3BzID0gY29sb3Iuc3BsaXQoY29sb3JQcm9wKTtcblxuICAgICAgICByZXR1cm4geyAuLi5zcGxpdFZhbHVlLCBzcGxpdENvbG9yUHJvcHMgfTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogKHZhbHVlcykgPT4gY3JlYXRlRGVsaW1pdGVkKHZhbHVlcywgc2hhZG93V2l0aG91dENvbG9yVGVybXMsICcgJykgKyBjb2xvci5jb21iaW5lKHZhbHVlcylcbn07XG4iXX0=

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy91bml0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztrQkFFZTtBQUNYLFVBQU0sVUFBVSxRQUFWLEVBQW9CO2dDQUNKLDZCQUFpQixRQUFqQixFQURJOztZQUNkLGdDQURjOztBQUV0QixlQUFPLGlCQUFDLENBQU0sS0FBTixLQUFnQixDQUFDLE1BQU0sS0FBTixDQUFELEdBQWlCLElBQWxDLEdBQXlDLEtBQXpDLENBRmU7S0FBcEI7O0FBS04sV0FBTyxVQUFVLFFBQVYsRUFBb0IsTUFBcEIsRUFBNEI7aUNBQ1AsNkJBQWlCLFFBQWpCLEVBRE87O1lBQ3ZCLGlDQUR1QjtZQUNoQiwrQkFEZ0I7O0FBRy9CLFlBQUksUUFBUSxTQUFTLElBQVQsRUFBZTtBQUN2QixtQkFBTyxJQUFQLEdBQWMsSUFBZCxDQUR1QjtTQUEzQjs7QUFJQSxlQUFPLEtBQVAsQ0FQK0I7S0FBNUI7O0FBVVAsZUFBVyxVQUFDLE1BQUQsRUFBUyxNQUFUO2VBQW9CLFVBQVUsT0FBTyxJQUFQLElBQWUsRUFBZixDQUFWO0tBQXBCIiwiZmlsZSI6InVuaXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNOdW0sIGZpbmRWYWx1ZUFuZFVuaXQgfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgdGVzdDogZnVuY3Rpb24gKHVucGFyc2VkKSB7XG4gICAgICAgIGNvbnN0IHsgdmFsdWUgfSA9IGZpbmRWYWx1ZUFuZFVuaXQodW5wYXJzZWQpO1xuICAgICAgICByZXR1cm4gKGlzTnVtKHZhbHVlKSAmJiAhaXNOYU4odmFsdWUpKSA/IHRydWUgOiBmYWxzZTtcbiAgICB9LFxuXG4gICAgcGFyc2U6IGZ1bmN0aW9uICh1bnBhcnNlZCwgcGFyZW50KSB7XG4gICAgICAgIGNvbnN0IHsgdmFsdWUsIHVuaXQgfSA9IGZpbmRWYWx1ZUFuZFVuaXQodW5wYXJzZWQpO1xuXG4gICAgICAgIGlmICh1bml0ICYmIHVuaXQgIT09IHVuaXQpIHtcbiAgICAgICAgICAgIHBhcmVudC51bml0ID0gdW5pdDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9LFxuXG4gICAgc2VyaWFsaXplOiAocGFyc2VkLCBwYXJlbnQpID0+IHBhcnNlZCArIChwYXJlbnQudW5pdCB8fCAnJylcbn07XG4iXX0=

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.chain = exports.circularMotion = exports.createMapper = undefined;
	
	var _calc = __webpack_require__(20);
	
	var createMapper = exports.createMapper = function (from, to) {
	    var mapLength = from.length;
	
	    return function (value) {
	        for (var i = 1; i < mapLength; i++) {
	            if (value < from[i] || i === mapLength) {
	                return (0, _calc.getValueFromProgress)((0, _calc.restrict)((0, _calc.getProgressFromValue)(value, from[i - 1], from[i]), 0, 1), to[i - 1], to[i]);
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvdHJhbnNmb3JtZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFTyxJQUFNLHNDQUFlLFVBQUMsSUFBRCxFQUFPLEVBQVAsRUFBYztBQUN0QyxRQUFNLFlBQVksS0FBSyxNQUFMLENBRG9COztBQUd0QyxXQUFPLFVBQUMsS0FBRCxFQUFXO0FBQ2QsYUFBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksU0FBSixFQUFlLEdBQS9CLEVBQW9DO0FBQ2hDLGdCQUFJLFFBQVEsS0FBSyxDQUFMLENBQVIsSUFBbUIsTUFBTSxTQUFOLEVBQWlCO0FBQ3BDLHVCQUFPLGdDQUFxQixvQkFBUyxnQ0FBcUIsS0FBckIsRUFBNEIsS0FBSyxJQUFJLENBQUosQ0FBakMsRUFBeUMsS0FBSyxDQUFMLENBQXpDLENBQVQsRUFBNEQsQ0FBNUQsRUFBK0QsQ0FBL0QsQ0FBckIsRUFBd0YsR0FBRyxJQUFJLENBQUosQ0FBM0YsRUFBbUcsR0FBRyxDQUFILENBQW5HLENBQVAsQ0FEb0M7YUFBeEM7U0FESjtLQURHLENBSCtCO0NBQWQ7O0FBWXJCLElBQU0sMENBQWlCLFVBQUMsQ0FBRCxFQUFJLEdBQUosUUFBd0I7UUFBYixxQkFBYTs7QUFDbEQsUUFBTSxVQUFVLE1BQUMsQ0FBTyxPQUFQLEdBQWtCLE9BQU8sT0FBUCxDQUFlLE9BQWYsR0FBeUIsQ0FBNUMsQ0FEa0M7QUFFbEQsUUFBTSxVQUFVLE1BQUMsQ0FBTyxPQUFQLEdBQWtCLE9BQU8sT0FBUCxDQUFlLE9BQWYsR0FBeUIsQ0FBNUMsQ0FGa0M7O0FBSWxELFdBQU8scUNBQTBCO0FBQzdCLFdBQUcsT0FBSDtBQUNBLFdBQUcsT0FBSDtLQUZHLEVBR0osT0FBTyxLQUFQLENBQWEsT0FBYixFQUFzQixPQUFPLFFBQVAsQ0FBZ0IsT0FBaEIsQ0FIbEIsQ0FHMkMsR0FIM0MsQ0FBUCxDQUprRDtDQUF4Qjs7Ozs7Ozs7O0FBaUJ2QixJQUFNLHdCQUFRLFVBQUMsWUFBRCxFQUFrQjtBQUNuQyxRQUFNLGtCQUFrQixhQUFhLE1BQWIsQ0FEVztBQUVuQyxRQUFJLElBQUksQ0FBSjs7Ozs7Ozs7QUFGK0IsV0FVNUIsVUFBQyxDQUFELEVBQUksR0FBSixFQUFTLENBQVQsRUFBZTtBQUNsQixhQUFLLElBQUksQ0FBSixFQUFPLElBQUksZUFBSixFQUFxQixHQUFqQyxFQUFzQztBQUNsQyxnQkFBSSxhQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsR0FBbkIsRUFBd0IsQ0FBeEIsQ0FBSixDQURrQztTQUF0Qzs7QUFJQSxlQUFPLENBQVAsQ0FMa0I7S0FBZixDQVY0QjtDQUFsQiIsImZpbGUiOiJ0cmFuc2Zvcm1lcnMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUsIGdldFZhbHVlRnJvbVByb2dyZXNzLCByZXN0cmljdCwgcG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZSB9IGZyb20gJy4uL2luYy9jYWxjJztcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZU1hcHBlciA9IChmcm9tLCB0bykgPT4ge1xuICAgIGNvbnN0IG1hcExlbmd0aCA9IGZyb20ubGVuZ3RoO1xuXG4gICAgcmV0dXJuICh2YWx1ZSkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IG1hcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPCBmcm9tW2ldIHx8IGkgPT09IG1hcExlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBnZXRWYWx1ZUZyb21Qcm9ncmVzcyhyZXN0cmljdChnZXRQcm9ncmVzc0Zyb21WYWx1ZSh2YWx1ZSwgZnJvbVtpIC0gMV0sIGZyb21baV0pLCAwLCAxKSwgdG9baSAtIDFdLCB0b1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGNpcmN1bGFyTW90aW9uID0gKHYsIGtleSwgeyB2YWx1ZXMgfSkgPT4ge1xuICAgIGNvbnN0IG9yaWdpblggPSAodmFsdWVzLm9yaWdpblgpID8gdmFsdWVzLm9yaWdpblguY3VycmVudCA6IDA7XG4gICAgY29uc3Qgb3JpZ2luWSA9ICh2YWx1ZXMub3JpZ2luWSkgPyB2YWx1ZXMub3JpZ2luWS5jdXJyZW50IDogMDtcblxuICAgIHJldHVybiBwb2ludEZyb21BbmdsZUFuZERpc3RhbmNlKHtcbiAgICAgICAgeDogb3JpZ2luWCxcbiAgICAgICAgeTogb3JpZ2luWSBcbiAgICB9LCB2YWx1ZXMuYW5nbGUuY3VycmVudCwgdmFsdWVzLmRpc3RhbmNlLmN1cnJlbnQpW2tleV07XG59O1xuXG4vKlxuICAgIENvbWJpbmUgdHJhbnNmb3JtZXJzIGludG8gb25lIGZ1bmN0aW9uIHRoYXQgY2FsbHMgZXZlcnlcbiAgICB0cmFuc2Zvcm1lciBpbiB0aGUgYXJyYXkgYW5kIHJldHVybnMgdGhlIHJlc3VsdFxuXG4gICAgQHBhcmFtIFthcnJheV1cbiAgICBAcmV0dXJuIFtmdW5jdGlvbl1cbiovXG5leHBvcnQgY29uc3QgY2hhaW4gPSAodHJhbnNmb3JtZXJzKSA9PiB7XG4gICAgY29uc3QgbnVtVHJhbnNmb3JtZXJzID0gdHJhbnNmb3JtZXJzLmxlbmd0aDtcbiAgICBsZXQgaSA9IDA7XG5cbiAgICAvKlxuICAgICAgICBAcGFyYW0gW251bWJlcl1cbiAgICAgICAgQHBhcmFtIFtzdHJpbmddXG4gICAgICAgIEBwYXJhbSBbQWN0aW9uXVxuICAgICAgICBAcmV0dXJuIFtudW1iZXJdXG4gICAgKi9cbiAgICByZXR1cm4gKHYsIGtleSwgYSkgPT4ge1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbnVtVHJhbnNmb3JtZXJzOyBpKyspIHtcbiAgICAgICAgICAgIHYgPSB0cmFuc2Zvcm1lcnNbaV0odiwga2V5LCBhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2O1xuICAgIH07XG59OyJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9kZXRlY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTUEsSUFBTSx1QkFBdUIsMEJBQWlCLE1BQWpCOztrQkFFZCxVQUFDLEtBQUQsRUFBVztBQUN0QixTQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxvQkFBSixFQUEwQixHQUExQyxFQUErQztBQUMzQyxZQUFNLFlBQVksTUFBTSwwQkFBaUIsQ0FBakIsQ0FBTixDQUFaLENBRHFDO0FBRTNDLFlBQUkscUJBQVMsU0FBVCxDQUFKLEVBQXlCO0FBQ3JCLGdCQUFJLGdCQUFVLElBQVYsQ0FBZSxTQUFmLENBQUosRUFBK0I7QUFDM0IsdUNBRDJCO2FBQS9CLE1BRU8sSUFBSSxrQkFBWSxJQUFaLENBQWlCLFNBQWpCLENBQUosRUFBaUM7QUFDcEMseUNBRG9DO2FBQWpDLE1BRUEsSUFBSSxlQUFTLElBQVQsQ0FBYyxTQUFkLENBQUosRUFBOEI7QUFDakMsc0NBRGlDO2FBQTlCO1NBTFg7S0FGSjtDQURXIiwiZmlsZSI6ImRldGVjdC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29sb3JUeXBlIGZyb20gJy4uL3ZhbHVlLXR5cGVzL2NvbG9yJztcbmltcG9ydCBjb21wbGV4VHlwZSBmcm9tICcuLi92YWx1ZS10eXBlcy9jb21wbGV4JztcbmltcG9ydCB1bml0VHlwZSBmcm9tICcuLi92YWx1ZS10eXBlcy91bml0JztcbmltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcbmltcG9ydCBOVU1FUklDQUxfVkFMVUVTIGZyb20gJy4uL2luYy9udW1lcmljYWwtdmFsdWVzJztcblxuY29uc3QgTlVNX05VTUVSSUNBTF9WQUxVRVMgPSBOVU1FUklDQUxfVkFMVUVTLmxlbmd0aDtcblxuZXhwb3J0IGRlZmF1bHQgKHZhbHVlKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBOVU1fTlVNRVJJQ0FMX1ZBTFVFUzsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlUHJvcCA9IHZhbHVlW05VTUVSSUNBTF9WQUxVRVNbaV1dO1xuICAgICAgICBpZiAoaXNTdHJpbmcodmFsdWVQcm9wKSkge1xuICAgICAgICAgICAgaWYgKGNvbG9yVHlwZS50ZXN0KHZhbHVlUHJvcCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29sb3JUeXBlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb21wbGV4VHlwZS50ZXN0KHZhbHVlUHJvcCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29tcGxleFR5cGU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHVuaXRUeXBlLnRlc3QodmFsdWVQcm9wKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB1bml0VHlwZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07Il19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvZGV0ZWN0LWFkYXB0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkFLZSxVQUFDLE9BQUQsRUFBYTtBQUN4QixRQUFJLHlDQUFKOzs7QUFEd0IsUUFJcEIsbUJBQW1CLFdBQW5CLElBQWtDLFFBQVEsT0FBUixLQUFvQixLQUFwQixFQUEyQjtBQUM3RDs7O0FBRDZELEtBQWpFLE1BSU8sSUFBSSxtQkFBbUIsVUFBbkIsRUFBK0I7QUFDdEMsZ0JBQUksUUFBUSxPQUFSLEtBQW9CLE1BQXBCLEVBQTRCO0FBQzVCLDJEQUQ0QjthQUFoQyxNQUVPO0FBQ0gsdURBREc7YUFGUDtTQURHOztBQVFQLFdBQU8sZUFBUCxDQWhCd0I7Q0FBYiIsImZpbGUiOiJkZXRlY3QtYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgb2JqZWN0QWRhcHRlciBmcm9tICcuLi9hZGFwdGVyL29iamVjdC1hZGFwdGVyJztcbmltcG9ydCBjc3NBZGFwdGVyIGZyb20gJy4uL2FkYXB0ZXIvY3NzLWFkYXB0ZXInO1xuaW1wb3J0IHN2Z0FkYXB0ZXIgZnJvbSAnLi4vYWRhcHRlci9zdmctYWRhcHRlcic7XG5pbXBvcnQgc3ZnUGF0aEFkYXB0ZXIgZnJvbSAnLi4vYWRhcHRlci9zdmctcGF0aC1hZGFwdGVyJztcblxuZXhwb3J0IGRlZmF1bHQgKGVsZW1lbnQpID0+IHtcbiAgICBsZXQgZGV0ZWN0ZWRBZGFwdGVyID0gb2JqZWN0QWRhcHRlcjtcblxuICAgIC8vIElmIEhUTUxFbGVtZW50IGxvYWQgQ1NTXG4gICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBlbGVtZW50LnRhZ05hbWUgPT09ICdzdmcnKSB7XG4gICAgICAgIGRldGVjdGVkQWRhcHRlciA9IGNzc0FkYXB0ZXI7XG5cbiAgICAvLyBPciBTVkdcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBTVkdFbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50LnRhZ05hbWUgPT09ICdwYXRoJykge1xuICAgICAgICAgICAgZGV0ZWN0ZWRBZGFwdGVyID0gc3ZnUGF0aEFkYXB0ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZXRlY3RlZEFkYXB0ZXIgPSBzdmdBZGFwdGVyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRldGVjdGVkQWRhcHRlcjtcbn07XG4iXX0=

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2Zsb3cvZ2VuZXJhdGUtYmxlbmQtY3VydmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUEsSUFBTSxpQkFBaUIsRUFBakI7O2tCQUVTLFVBQUMsU0FBRCxFQUFZLFFBQVosRUFBc0IsU0FBdEIsRUFBaUMsR0FBakMsRUFBeUM7QUFDcEQsUUFBTSxXQUFXLFVBQVUsTUFBVixDQUFpQixHQUFqQixDQUFYLENBRDhDOztBQUdwRCxRQUFJLFVBQVUsT0FBVixLQUFzQixTQUF0QixJQUFtQyxDQUFDLFFBQUQsRUFBVztBQUM5QyxlQUQ4QztLQUFsRDs7QUFJQSxRQUFNLFVBQVUsU0FBUyxNQUFULENBQWdCLEdBQWhCLENBQVYsQ0FQOEM7QUFRcEQsUUFBTSxtQkFBbUIsU0FBUyxLQUFULEdBQWlCLFNBQVMsUUFBVCxDQVJVO0FBU3BELFFBQU0sa0JBQWtCLEtBQUssR0FBTCxDQUFTLG1CQUFtQixVQUFVLE9BQVYsRUFBbUIsUUFBUSxLQUFSLEdBQWdCLFFBQVEsUUFBUixDQUFqRixDQVQ4QztBQVVwRCxRQUFNLHFCQUFxQixnQkFBSyxvQkFBUyxnQ0FBcUIsZUFBckIsRUFBc0MsQ0FBdEMsRUFBeUMsUUFBUSxLQUFSLEdBQWdCLFFBQVEsUUFBUixDQUFsRSxFQUFxRixDQUFyRixFQUF3RixDQUF4RixDQUFMLEVBQWlHLFFBQVEsSUFBUixFQUFjLFFBQVEsRUFBUixFQUFZLFFBQVEsSUFBUixDQUFoSixDQVY4QztBQVdwRCxRQUFNLHlCQUF5QixRQUFRLElBQVIsR0FBZSxTQUFTLE9BQVQsQ0FYTTtBQVlwRCxRQUFNLHVCQUF1QixxQkFBcUIsU0FBUyxFQUFULENBWkU7QUFhcEQsUUFBTSxrQkFBa0IsMkJBQTJCLG9CQUEzQixDQWI0Qjs7QUFlcEQsUUFBTSxhQUFhLENBQUMsQ0FBQyxDQUFELEVBQUksU0FBUyxPQUFULENBQUwsRUFBd0IsQ0FBQyxlQUFELEVBQWtCLGtCQUFsQixDQUF4QixDQUFiOzs7QUFmOEMsUUFrQmhELGVBQUosRUFBcUI7QUFDakIsWUFBTSxpQkFBaUIsa0JBQWtCLGNBQWxCLENBRE47QUFFakIsWUFBSSxVQUFVLEtBQVYsQ0FGYTtBQUdqQixZQUFJLFVBQVUsS0FBVixDQUhhOztBQUtqQixhQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sS0FBSyxjQUFMLEVBQXFCLEdBQXJDLEVBQTBDO0FBQ3RDLGdCQUFNLFdBQVcsSUFBSSxjQUFKLENBRHFCO0FBRXRDLGdCQUFNLFlBQVksZ0JBQUssZ0NBQXFCLFVBQVUsT0FBVixHQUFvQixRQUFwQixFQUE4QixTQUFTLEtBQVQsRUFBZ0IsU0FBUyxRQUFULENBQXhFLEVBQTRGLFNBQVMsSUFBVCxFQUFlLFNBQVMsRUFBVCxFQUFhLFNBQVMsSUFBVCxDQUFwSSxDQUZnQztBQUd0QyxnQkFBTSxXQUFXLGdCQUFLLGdDQUFxQixTQUFTLE9BQVQsR0FBbUIsUUFBbkIsRUFBNkIsUUFBUSxLQUFSLEVBQWUsUUFBUSxRQUFSLENBQXRFLEVBQXlGLFFBQVEsSUFBUixFQUFjLFFBQVEsRUFBUixFQUFZLFFBQVEsSUFBUixDQUE5SCxDQUhnQzs7QUFLdEMsZ0JBQUksQ0FBQyxPQUFELEtBQWEsc0JBQUMsSUFBMEIsV0FBVyxTQUFYLElBQTBCLENBQUMsc0JBQUQsSUFBMkIsV0FBVyxTQUFYLENBQTdGLEVBQXFIO0FBQ3JILDJCQUFXLE1BQVgsQ0FBa0IsQ0FBbEIsRUFBcUIsQ0FBckIsRUFBd0IsQ0FBQyxRQUFELEVBQVcsUUFBWCxDQUF4QixFQURxSDtBQUVySCwwQkFBVSxJQUFWLENBRnFIO2FBQXpIOztBQUtBLGdCQUFJLFlBQVksc0JBQUMsSUFBMEIsV0FBVyxTQUFTLE9BQVQsSUFBc0IsQ0FBQyxzQkFBRCxJQUEyQixXQUFXLFNBQVMsT0FBVCxDQUE5RyxFQUFrSTtBQUNsSSwyQkFBVyxDQUFYLElBQWdCLENBQUMsUUFBRCxFQUFXLFFBQVgsQ0FBaEIsQ0FEa0k7QUFFbEksMEJBQVUsSUFBVixDQUZrSTthQUF0STs7QUFLQSxnQkFBSSxPQUFKLEVBQWE7QUFDVCxzQkFEUzthQUFiO1NBZko7S0FMSjs7QUEwQkEsUUFBSSxXQUFXLE1BQVgsS0FBc0IsQ0FBdEIsRUFBeUI7O0FBRXpCLGVBQU8sWUFBTTtBQUNULGdCQUFNLGdCQUFnQixvQkFBUyxnQ0FBcUIsU0FBUyxPQUFULEVBQWtCLFdBQVcsQ0FBWCxFQUFjLENBQWQsQ0FBdkMsRUFBeUQsV0FBVyxDQUFYLEVBQWMsQ0FBZCxDQUF6RCxDQUFULEVBQXFGLENBQXJGLEVBQXdGLENBQXhGLENBQWhCLENBREc7O0FBR1QsZ0JBQUksa0JBQWtCLENBQWxCLEVBQXFCO0FBQ3JCLDBCQUFVLFVBQVYsR0FBdUIsU0FBdkIsQ0FEcUI7YUFBekI7O0FBSUEsbUJBQU8sZ0JBQUssYUFBTCxFQUFvQixTQUFTLE9BQVQsRUFBa0IsUUFBUSxPQUFSLEVBQWlCLFFBQVEsSUFBUixDQUE5RCxDQVBTO1NBQU4sQ0FGa0I7S0FBN0IsTUFXTzs7QUFFSCxlQUFPLFlBQU07QUFDVCxnQkFBTSxnQkFBZ0Isb0JBQVMsZ0NBQXFCLFNBQVMsT0FBVCxFQUFrQixXQUFXLENBQVgsRUFBYyxDQUFkLENBQXZDLEVBQXlELFdBQVcsQ0FBWCxFQUFjLENBQWQsQ0FBekQsQ0FBVCxFQUFxRixDQUFyRixFQUF3RixDQUF4RixDQUFoQixDQURHO0FBRVQsZ0JBQU0sS0FBSyxnQ0FBcUIsYUFBckIsRUFBb0MsV0FBVyxDQUFYLEVBQWMsQ0FBZCxDQUFwQyxFQUFzRCxXQUFXLENBQVgsRUFBYyxDQUFkLENBQXRELENBQUwsQ0FGRztBQUdULGdCQUFNLEtBQUssZ0NBQXFCLGFBQXJCLEVBQW9DLFdBQVcsQ0FBWCxFQUFjLENBQWQsQ0FBcEMsRUFBc0QsV0FBVyxDQUFYLEVBQWMsQ0FBZCxDQUF0RCxDQUFMLENBSEc7O0FBS1QsZ0JBQUksa0JBQWtCLENBQWxCLEVBQXFCO0FBQ3JCLDBCQUFVLFVBQVYsR0FBdUIsU0FBdkIsQ0FEcUI7QUFFckIsdUJBQU8sUUFBUSxPQUFSLENBRmM7YUFBekI7O0FBS0EsbUJBQU8sZ0NBQXFCLGFBQXJCLEVBQW9DLEVBQXBDLEVBQXdDLEVBQXhDLENBQVAsQ0FWUztTQUFOLENBRko7S0FYUDtDQTVDVyIsImZpbGUiOiJnZW5lcmF0ZS1ibGVuZC1jdXJ2ZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRQcm9ncmVzc0Zyb21WYWx1ZSwgZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MsIGVhc2UsIHJlc3RyaWN0IH0gZnJvbSAnLi4vLi4vaW5jL2NhbGMnO1xuXG5jb25zdCBCTEVORF9BQ0NVUkFDWSA9IDYwO1xuXG5leHBvcnQgZGVmYXVsdCAob3V0QWN0aW9uLCBpbkFjdGlvbiwgZmxvd1ZhbHVlLCBrZXkpID0+IHtcbiAgICBjb25zdCBvdXRWYWx1ZSA9IG91dEFjdGlvbi52YWx1ZXNba2V5XTtcblxuICAgIGlmIChvdXRBY3Rpb24uZWxhcHNlZCA9PT0gdW5kZWZpbmVkIHx8ICFvdXRWYWx1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaW5WYWx1ZSA9IGluQWN0aW9uLnZhbHVlc1trZXldO1xuICAgIGNvbnN0IG91dFRvdGFsRHVyYXRpb24gPSBvdXRWYWx1ZS5kZWxheSArIG91dFZhbHVlLmR1cmF0aW9uO1xuICAgIGNvbnN0IHRpbWVVbnRpbE91dEVuZCA9IE1hdGgubWluKG91dFRvdGFsRHVyYXRpb24gLSBvdXRBY3Rpb24uZWxhcHNlZCwgaW5WYWx1ZS5kZWxheSArIGluVmFsdWUuZHVyYXRpb24pO1xuICAgIGNvbnN0IGluUG9zaXRpb25BdE91dEVuZCA9IGVhc2UocmVzdHJpY3QoZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUodGltZVVudGlsT3V0RW5kLCAwLCBpblZhbHVlLmRlbGF5ICsgaW5WYWx1ZS5kdXJhdGlvbiksIDAsIDEpLCBpblZhbHVlLmZyb20sIGluVmFsdWUudG8sIGluVmFsdWUuZWFzZSk7XG4gICAgY29uc3QgaW5CaWdnZXJUaGFuT3V0QXRTdGFydCA9IGluVmFsdWUuZnJvbSA+IG91dFZhbHVlLmN1cnJlbnQ7XG4gICAgY29uc3QgaW5CaWdnZXJUaGFuT3V0QXRFbmQgPSBpblBvc2l0aW9uQXRPdXRFbmQgPiBvdXRWYWx1ZS50bztcbiAgICBjb25zdCB0d2VlbnNJbnRlcnNlY3QgPSBpbkJpZ2dlclRoYW5PdXRBdFN0YXJ0ICE9PSBpbkJpZ2dlclRoYW5PdXRBdEVuZDtcblxuICAgIGNvbnN0IGJsZW5kQ3VydmUgPSBbWzAsIG91dFZhbHVlLmN1cnJlbnRdLCBbdGltZVVudGlsT3V0RW5kLCBpblBvc2l0aW9uQXRPdXRFbmRdXTtcblxuICAgIC8vIElmIHR3ZWVucyBpbnRlcnNlY3QsIHJlc29sdmUgdHdlZW5zIGF0IGEgcmVzb2x1dGlvbiB0byBmaW5kIGV4YWN0bHkgd2hlcmVcbiAgICBpZiAodHdlZW5zSW50ZXJzZWN0KSB7XG4gICAgICAgIGNvbnN0IHRpbWVTdGVwVG9UZXN0ID0gdGltZVVudGlsT3V0RW5kIC8gQkxFTkRfQUNDVVJBQ1k7XG4gICAgICAgIGxldCBmb3VuZFAxID0gZmFsc2U7XG4gICAgICAgIGxldCBmb3VuZFAyID0gZmFsc2U7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gQkxFTkRfQUNDVVJBQ1k7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgdGltZVN0ZXAgPSBpICogdGltZVN0ZXBUb1Rlc3Q7XG4gICAgICAgICAgICBjb25zdCBvdXRBdFRpbWUgPSBlYXNlKGdldFByb2dyZXNzRnJvbVZhbHVlKG91dEFjdGlvbi5lbGFwc2VkICsgdGltZVN0ZXAsIG91dFZhbHVlLmRlbGF5LCBvdXRWYWx1ZS5kdXJhdGlvbiksIG91dFZhbHVlLmZyb20sIG91dFZhbHVlLnRvLCBvdXRWYWx1ZS5lYXNlKTtcbiAgICAgICAgICAgIGNvbnN0IGluQXRUaW1lID0gZWFzZShnZXRQcm9ncmVzc0Zyb21WYWx1ZShpbkFjdGlvbi5lbGFwc2VkICsgdGltZVN0ZXAsIGluVmFsdWUuZGVsYXksIGluVmFsdWUuZHVyYXRpb24pLCBpblZhbHVlLmZyb20sIGluVmFsdWUudG8sIGluVmFsdWUuZWFzZSk7XG5cbiAgICAgICAgICAgIGlmICghZm91bmRQMSAmJiAoKGluQmlnZ2VyVGhhbk91dEF0U3RhcnQgJiYgaW5BdFRpbWUgPCBvdXRBdFRpbWUpIHx8ICghaW5CaWdnZXJUaGFuT3V0QXRTdGFydCAmJiBpbkF0VGltZSA+IG91dEF0VGltZSkpKSB7XG4gICAgICAgICAgICAgICAgYmxlbmRDdXJ2ZS5zcGxpY2UoMSwgMCwgW3RpbWVTdGVwLCBpbkF0VGltZV0pO1xuICAgICAgICAgICAgICAgIGZvdW5kUDEgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZm91bmRQMSAmJiAoKGluQmlnZ2VyVGhhbk91dEF0U3RhcnQgJiYgaW5BdFRpbWUgPCBvdXRWYWx1ZS5jdXJyZW50KSB8fCAoIWluQmlnZ2VyVGhhbk91dEF0U3RhcnQgJiYgaW5BdFRpbWUgPiBvdXRWYWx1ZS5jdXJyZW50KSkpIHtcbiAgICAgICAgICAgICAgICBibGVuZEN1cnZlWzJdID0gW3RpbWVTdGVwLCBpbkF0VGltZV07XG4gICAgICAgICAgICAgICAgZm91bmRQMiA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChmb3VuZFAyKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYmxlbmRDdXJ2ZS5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgLy8gUGFzcyBiZXR3ZWVuIHR3ZWVucyB1c2luZyBpbmNvbWluZyBlYXNpbmcgaWYganVzdCB0d28gcG9pbnRzXG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBibGVuZFByb2dyZXNzID0gcmVzdHJpY3QoZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUoaW5BY3Rpb24uZWxhcHNlZCwgYmxlbmRDdXJ2ZVswXVswXSwgYmxlbmRDdXJ2ZVsxXVswXSksIDAsIDEpO1xuXG4gICAgICAgICAgICBpZiAoYmxlbmRQcm9ncmVzcyA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGZsb3dWYWx1ZS5ibGVuZEN1cnZlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZWFzZShibGVuZFByb2dyZXNzLCBvdXRWYWx1ZS5jdXJyZW50LCBpblZhbHVlLmN1cnJlbnQsIGluVmFsdWUuZWFzZSk7XG4gICAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gUGFzcyBiZXR3ZWVuIHR3ZWVucyB1c2luZyBiZXppZXIgaW50ZXJwb2xhdGlvblxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYmxlbmRQcm9ncmVzcyA9IHJlc3RyaWN0KGdldFByb2dyZXNzRnJvbVZhbHVlKGluQWN0aW9uLmVsYXBzZWQsIGJsZW5kQ3VydmVbMF1bMF0sIGJsZW5kQ3VydmVbMl1bMF0pLCAwLCAxKTtcbiAgICAgICAgICAgIGNvbnN0IGFQID0gZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MoYmxlbmRQcm9ncmVzcywgYmxlbmRDdXJ2ZVswXVsxXSwgYmxlbmRDdXJ2ZVsxXVsxXSk7XG4gICAgICAgICAgICBjb25zdCBiUCA9IGdldFZhbHVlRnJvbVByb2dyZXNzKGJsZW5kUHJvZ3Jlc3MsIGJsZW5kQ3VydmVbMV1bMV0sIGJsZW5kQ3VydmVbMl1bMV0pO1xuXG4gICAgICAgICAgICBpZiAoYmxlbmRQcm9ncmVzcyA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGZsb3dWYWx1ZS5ibGVuZEN1cnZlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHJldHVybiBpblZhbHVlLmN1cnJlbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBnZXRWYWx1ZUZyb21Qcm9ncmVzcyhibGVuZFByb2dyZXNzLCBhUCwgYlApO1xuICAgICAgICB9O1xuICAgIH1cbn07XG4iXX0=

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbnB1dC9Qb2ludGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUI7OztBQUNqQixhQURpQixPQUNqQixDQUFZLFlBQVosRUFBMEIsU0FBMUIsRUFBcUMsWUFBckMsRUFBbUQ7OEJBRGxDLFNBQ2tDOztxREFDL0Msa0JBQU0sWUFBTixHQUQrQzs7QUFFL0MsY0FBSyxZQUFMLEdBQW9CLFlBQXBCLENBRitDO0FBRy9DLGNBQUssU0FBTCxHQUFpQixTQUFqQixDQUgrQzs7S0FBbkQ7O0FBRGlCLHNCQU9qQix5QkFBTyxHQUFHO0FBQ04seUJBQU0sTUFBTixZQUFhLEtBQUssWUFBTCxDQUFrQixDQUFsQixDQUFiLEVBRE07QUFFTixVQUFFLGNBQUYsR0FGTTs7O0FBUE8sc0JBWWpCLHlCQUFROzs7QUFDSix5QkFBTSxLQUFOLFlBREk7QUFFSixpQkFBUyxlQUFULENBQXlCLGdCQUF6QixDQUEwQyxLQUFLLFNBQUwsRUFBZ0IsVUFBQyxDQUFEO21CQUFPLE9BQUssTUFBTCxDQUFZLENBQVo7U0FBUCxDQUExRCxDQUZJOzs7QUFaUyxzQkFpQmpCLHVCQUFPOzs7QUFDSCx5QkFBTSxJQUFOLFlBREc7QUFFSCxpQkFBUyxlQUFULENBQXlCLG1CQUF6QixDQUE2QyxLQUFLLFNBQUwsRUFBZ0IsVUFBQyxDQUFEO21CQUFPLE9BQUssTUFBTCxDQUFZLENBQVo7U0FBUCxDQUE3RCxDQUZHOzs7V0FqQlUiLCJmaWxlIjoiUG9pbnRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW5wdXQgZnJvbSAnLi9JbnB1dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvaW50ZXIgZXh0ZW5kcyBJbnB1dCB7XG4gICAgY29uc3RydWN0b3IoaW5pdGlhbFN0YXRlLCBtb3ZlRXZlbnQsIGV2ZW50VG9Qb2ludCkge1xuICAgICAgICBzdXBlcihpbml0aWFsU3RhdGUpO1xuICAgICAgICB0aGlzLmV2ZW50VG9Qb2ludCA9IGV2ZW50VG9Qb2ludDtcbiAgICAgICAgdGhpcy5tb3ZlRXZlbnQgPSBtb3ZlRXZlbnQ7XG4gICAgfVxuXG4gICAgbGF0ZXN0KGUpIHtcbiAgICAgICAgc3VwZXIubGF0ZXN0KHRoaXMuZXZlbnRUb1BvaW50KGUpKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBzdXBlci5zdGFydCgpO1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLm1vdmVFdmVudCwgKGUpID0+IHRoaXMubGF0ZXN0KGUpKTtcbiAgICB9XG5cbiAgICBzdG9wKCkge1xuICAgICAgICBzdXBlci5zdG9wKCk7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMubW92ZUV2ZW50LCAoZSkgPT4gdGhpcy5sYXRlc3QoZSkpO1xuICAgIH1cbn1cbiJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90YXNrL2xvb3AuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztRQWlGZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7QUF2RWhCLElBQU0sZ0JBQWdCLENBQ2xCLEVBQUUsTUFBTSxjQUFOLEVBRGdCLEVBRWxCLEVBQUUsTUFBTSxVQUFOLEVBRmdCLEVBR2xCLEVBQUUsTUFBTSxZQUFOLEVBQW9CLGNBQWMsSUFBZCxFQUhKLEVBSWxCLEVBQUUsTUFBTSxhQUFOLEVBQXFCLFVBQVUsSUFBVixFQUpMLEVBS2xCLEVBQUUsTUFBTSxVQUFOLEVBQWtCLFVBQVUsSUFBVixFQUxGLEVBTWxCLEVBQUUsTUFBTSxjQUFOLEVBQXNCLFVBQVUsSUFBVixFQU5OLEVBT2xCLEVBQUUsTUFBTSxZQUFOLEVBUGdCLEVBUWxCLEVBQUUsTUFBTSxXQUFOLEVBUmdCLENBQWhCOzs7Ozs7O0FBVU4sSUFBTSxlQUFlLGNBQWMsTUFBZDs7O0FBR3JCLElBQUksWUFBWSxLQUFaOzs7Ozs7QUFNSixTQUFTLE9BQVQsQ0FBaUIsVUFBakIsRUFBNkIsT0FBN0IsRUFBc0M7QUFDbEMsUUFBTSxZQUFZLGtCQUFRLFlBQVIsRUFBWixDQUQ0QjtBQUVsQyxRQUFNLGtCQUFrQixVQUFVLE1BQVYsQ0FGVTs7QUFJbEMsU0FBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksWUFBSixFQUFrQixHQUFsQyxFQUF1QztBQUNuQyxZQUFNLE9BQU8sY0FBYyxDQUFkLENBQVAsQ0FENkI7O0FBR25DLGFBQUssSUFBSSxLQUFLLENBQUwsRUFBUSxLQUFLLGVBQUwsRUFBc0IsSUFBdkMsRUFBNkM7QUFDekMsZ0JBQU0sT0FBTyxrQkFBUSxXQUFSLENBQW9CLFVBQVUsRUFBVixDQUFwQixDQUFQLENBRG1DO0FBRXpDLGdCQUFJLFNBQVMsS0FBVDs7O0FBRnFDLGdCQUtyQyxRQUFRLEtBQUssS0FBSyxJQUFMLENBQWIsS0FBNEIsQ0FBQyxLQUFLLFFBQUwsSUFBa0IsS0FBSyxRQUFMLElBQWlCLEtBQUssZ0JBQUwsS0FBMEIsSUFBMUIsQ0FBaEUsRUFBa0c7QUFDbEcseUJBQVMsS0FBSyxLQUFLLElBQUwsQ0FBTCxDQUFnQixJQUFoQixDQUFxQixJQUFyQixFQUEyQixJQUEzQixFQUFpQyxVQUFqQyxFQUE2QyxPQUE3QyxDQUFULENBRGtHO2FBQXRHOzs7QUFMeUMsZ0JBVXJDLEtBQUssWUFBTCxFQUFtQjtBQUNuQixxQkFBSyxnQkFBTCxHQUF3QixJQUFDLENBQUssS0FBSyxJQUFMLENBQUwsSUFBbUIsV0FBVyxJQUFYLEdBQW1CLEtBQXZDLEdBQStDLElBQS9DLENBREw7YUFBdkI7U0FWSjtLQUhKOztBQW1CQSxXQUFPLGtCQUFRLDRCQUFSLEVBQVAsQ0F2QmtDO0NBQXRDOzs7QUEyQkEsU0FBUyxLQUFULENBQWUsVUFBZixFQUEyQjtBQUN2QixvQkFBTSxNQUFOLENBQWEsVUFBYixFQUR1QjtBQUV2QixnQkFBWSxRQUFRLFVBQVIsRUFBb0IsZ0JBQU0sVUFBTixFQUFwQixDQUFaLENBRnVCOztBQUl2QixRQUFJLFNBQUosRUFBZTtBQUNYLDRCQUFLLEtBQUwsRUFEVztLQUFmO0NBSko7OztBQVVBLFNBQVMsS0FBVCxHQUFpQjtBQUNiLFFBQUksQ0FBQyxTQUFELEVBQVk7QUFDWix3QkFBTSxLQUFOLEdBRFk7QUFFWixvQkFBWSxJQUFaLENBRlk7QUFHWiw0QkFBSyxLQUFMLEVBSFk7S0FBaEI7Q0FESjs7O0FBU08sSUFBTSxnQ0FBWSxrQkFBUSxTQUFSOzs7Ozs7QUFNbEIsU0FBUyxRQUFULENBQWtCLEVBQWxCLEVBQXNCLElBQXRCLEVBQTRCO0FBQy9CLHNCQUFRLFFBQVIsQ0FBaUIsRUFBakIsRUFBcUIsSUFBckIsRUFEK0I7O0FBRy9CLFFBQUksQ0FBQyxTQUFELEVBQVk7QUFDWixnQkFEWTtLQUFoQjtDQUhHOzs7OztBQVdBLElBQU0sa0NBQWEsa0JBQVEsVUFBUiIsImZpbGUiOiJsb29wLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gICAgQ29yZSByZW5kZXIgbG9vcFxuXG4gICAgU29tZSBkZWNpY2lzb25zIGhlcmUgaGF2ZSBiZWVuIHRha2VuIGluIHRoZSBuYW1lIG9mIHBlcmZvcm1hbmNlLiBBbGwgaGFpbCBwZXJmb3JtYW5jZS5cbiAgICAoSXQgdHVybnMgb3V0IG1pY3Jvb3B0aW1pc2F0aW9ucyBkbyBtYXR0ZXIgd2hlbiB5b3UgaGF2ZSAxNm1zKVxuKi9cbmltcG9ydCB0aW1lciBmcm9tICcuL3RpbWVyJztcbmltcG9ydCB0aWNrIGZyb20gJy4vdGljayc7XG5pbXBvcnQgbWFuYWdlciBmcm9tICcuL21hbmFnZXInO1xuXG5jb25zdCB0YXNrU3RlcE9yZGVyID0gW1xuICAgIHsgbmFtZTogJ29uRnJhbWVTdGFydCcgfSxcbiAgICB7IG5hbWU6ICdvblVwZGF0ZScgfSxcbiAgICB7IG5hbWU6ICd3aWxsUmVuZGVyJywgZGVjaWRlUmVuZGVyOiB0cnVlIH0sXG4gICAgeyBuYW1lOiAnb25QcmVSZW5kZXInLCBpc1JlbmRlcjogdHJ1ZSB9LFxuICAgIHsgbmFtZTogJ29uUmVuZGVyJywgaXNSZW5kZXI6IHRydWUgfSxcbiAgICB7IG5hbWU6ICdvblBvc3RSZW5kZXInLCBpc1JlbmRlcjogdHJ1ZSB9LFxuICAgIHsgbmFtZTogJ29uRnJhbWVFbmQnIH0sXG4gICAgeyBuYW1lOiAnb25DbGVhbnVwJyB9XG5dO1xuY29uc3QgbnVtVGFza1N0ZXBzID0gdGFza1N0ZXBPcmRlci5sZW5ndGg7XG5cbi8vIFtib29sZWFuXTogSXMgbG9vcCBydW5uaW5nP1xubGV0IGlzUnVubmluZyA9IGZhbHNlO1xuXG4vKlxuICAgIFt0aW1lc3RhbXBdOiBGcmFtZSB0aW1lc3RhbXBcbiAgICBbaW50XTogVGltZSBzaW5jZSBsYXN0IGZyYW1lXG4qL1xuZnVuY3Rpb24gZmlyZUFsbChmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgY29uc3QgYWN0aXZlSWRzID0gbWFuYWdlci5nZXRBY3RpdmVJZHMoKTtcbiAgICBjb25zdCBhY3RpdmVUYXNrQ291bnQgPSBhY3RpdmVJZHMubGVuZ3RoO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1UYXNrU3RlcHM7IGkrKykge1xuICAgICAgICBjb25zdCBzdGVwID0gdGFza1N0ZXBPcmRlcltpXTtcblxuICAgICAgICBmb3IgKGxldCBpMiA9IDA7IGkyIDwgYWN0aXZlVGFza0NvdW50OyBpMisrKSB7XG4gICAgICAgICAgICBjb25zdCB0YXNrID0gbWFuYWdlci5hY3RpdmVUYXNrc1thY3RpdmVJZHNbaTJdXTtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBmYWxzZTtcblxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhpcyB0YXNrIGhhcyB0aGlzIHN0ZXAsIG9yIGlmIGl0J3MgYSByZW5kZXIgc3RlcCB0aGF0IHdlJ3JlIHJlbmRlcmluZyB0aGlzIGZyYW1lXG4gICAgICAgICAgICBpZiAodGFzayAmJiB0YXNrW3N0ZXAubmFtZV0gJiYgKCFzdGVwLmlzUmVuZGVyIHx8IChzdGVwLmlzUmVuZGVyICYmIHRhc2suX3JlbmRlclRoaXNGcmFtZSA9PT0gdHJ1ZSkpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGFza1tzdGVwLm5hbWVdLmNhbGwodGFzaywgdGFzaywgZnJhbWVTdGFtcCwgZWxhcHNlZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIHRoaXMgaXMgYSBkZWNpZGUgcmVuZGVyIHN0ZXAgYW5kIGl0IHJldHVybnMgYGZhbHNlYCwgc2V0IHdpbGxSZW5kZXIgdG8gZmFsc2VcbiAgICAgICAgICAgIGlmIChzdGVwLmRlY2lkZVJlbmRlcikge1xuICAgICAgICAgICAgICAgIHRhc2suX3JlbmRlclRoaXNGcmFtZSA9ICh0YXNrW3N0ZXAubmFtZV0gJiYgcmVzdWx0ICE9PSB0cnVlKSA/IGZhbHNlIDogdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtYW5hZ2VyLmdldE5vbkJhY2tncm91bmRSdW5uaW5nQ291bnQoKTtcbn1cblxuLy8gRnVuY3Rpb24gdG8gZmlyZSBldmVyeSBmcmFtZVxuZnVuY3Rpb24gZnJhbWUoZnJhbWVTdGFtcCkge1xuICAgIHRpbWVyLnVwZGF0ZShmcmFtZVN0YW1wKTtcbiAgICBpc1J1bm5pbmcgPSBmaXJlQWxsKGZyYW1lU3RhbXAsIHRpbWVyLmdldEVsYXBzZWQoKSk7XG5cbiAgICBpZiAoaXNSdW5uaW5nKSB7XG4gICAgICAgIHRpY2soZnJhbWUpO1xuICAgIH1cbn1cblxuLy8gU3RhcnQgbG9vcFxuZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgaWYgKCFpc1J1bm5pbmcpIHtcbiAgICAgICAgdGltZXIuc3RhcnQoKTtcbiAgICAgICAgaXNSdW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgdGljayhmcmFtZSk7XG4gICAgfVxufVxuXG4vLyBFeHBvcnRzXG5leHBvcnQgY29uc3QgZ2V0VGFza0lkID0gbWFuYWdlci5nZXRUYXNrSWQ7XG5cbi8qXG4gICAgW2ludF06IHRhc2sgSUQgdG8gYWN0aXZhdGVcbiAgICBbdGFza106IHRhc2sgdG8gYWN0aXZhdGVcbiovXG5leHBvcnQgZnVuY3Rpb24gYWN0aXZhdGUoaWQsIHRhc2spIHtcbiAgICBtYW5hZ2VyLmFjdGl2YXRlKGlkLCB0YXNrKTtcblxuICAgIGlmICghaXNSdW5uaW5nKSB7XG4gICAgICAgIHN0YXJ0KCk7XG4gICAgfVxufVxuXG4vKlxuICAgIFtpbnRdOiB0YXNrIElEIHRvIGRlYWN0aXZhdGVcbiovXG5leHBvcnQgY29uc3QgZGVhY3RpdmF0ZSA9IG1hbmFnZXIuZGVhY3RpdmF0ZTsiXX0=

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2Nzcy92YWx1ZS10eXBlLW1hcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBT2U7O0FBRVgsMEJBRlc7QUFHWCxvQ0FIVztBQUlYLGlDQUpXO0FBS1gseUJBTFc7QUFNWCwyQkFOVzs7O0FBU1gsZ0NBVFc7QUFVWCxtQ0FWVztBQVdYLHFDQVhXO0FBWVgsc0NBWlc7QUFhWCxvQ0FiVztBQWNYLDhCQWRXOzs7QUFpQlgsdUJBakJXO0FBa0JYLHdCQWxCVzs7O0FBcUJYLGdDQXJCVztBQXNCWCwrQkF0Qlc7OztBQXlCWCwyQkF6Qlc7QUEwQlgsNEJBMUJXO0FBMkJYLDRCQTNCVztBQTRCWCw0QkE1Qlc7QUE2QlgsMEJBN0JXO0FBOEJYLDJCQTlCVztBQStCWCwyQkEvQlc7QUFnQ1gsMkJBaENXO0FBaUNYLDBCQWpDVztBQWtDWCwwQkFsQ1c7QUFtQ1gsMEJBbkNXO0FBb0NYLDRCQXBDVztBQXFDWCw0QkFyQ1c7QUFzQ1gsNEJBdENXO0FBdUNYLDZCQXZDVztBQXdDWCw0QkF4Q1ciLCJmaWxlIjoidmFsdWUtdHlwZS1tYXAuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFuZ2xlIGZyb20gJy4uLy4uL3ZhbHVlLXR5cGVzL2FuZ2xlJztcbmltcG9ydCBhbHBoYSBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9hbHBoYSc7XG5pbXBvcnQgY29sb3IgZnJvbSAnLi4vLi4vdmFsdWUtdHlwZXMvY29sb3InO1xuaW1wb3J0IHNjYWxlIGZyb20gJy4uLy4uL3ZhbHVlLXR5cGVzL3NjYWxlJztcbmltcG9ydCBzaGFkb3cgZnJvbSAnLi4vLi4vdmFsdWUtdHlwZXMvc2hhZG93JztcbmltcG9ydCBweCBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9weCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICAvLyBDb2xvciBwcm9wc1xuICAgIGNvbG9yOiBjb2xvcixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yLFxuICAgIG91dGxpbmVDb2xvcjogY29sb3IsXG4gICAgZmlsbDogY29sb3IsXG4gICAgc3Ryb2tlOiBjb2xvcixcblxuICAgIC8vIEJvcmRlciBwcm9wc1xuICAgIGJvcmRlckNvbG9yOiBjb2xvcixcbiAgICBib3JkZXJUb3BDb2xvcjogY29sb3IsXG4gICAgYm9yZGVyUmlnaHRDb2xvcjogY29sb3IsXG4gICAgYm9yZGVyQm90dG9tQ29sb3I6IGNvbG9yLFxuICAgIGJvcmRlckxlZnRDb2xvcjogY29sb3IsXG4gICAgYm9yZGVyUmFkaXVzOiBweCxcblxuICAgIC8vIFBvc2l0aW9uaW5nXG4gICAgd2lkdGg6IHB4LFxuICAgIGhlaWdodDogcHgsXG5cbiAgICAvLyBTaGFkb3dzXG4gICAgdGV4dFNoYWRvdzogc2hhZG93LFxuICAgIGJveFNoYWRvdzogc2hhZG93LCAgIFxuXG4gICAgLy8gVHJhbnNmb3JtIHByb3BlcnRpZXNcbiAgICByb3RhdGU6IGFuZ2xlLFxuICAgIHJvdGF0ZVg6IGFuZ2xlLFxuICAgIHJvdGF0ZVk6IGFuZ2xlLFxuICAgIHJvdGF0ZVo6IGFuZ2xlLFxuICAgIHNjYWxlOiBzY2FsZSxcbiAgICBzY2FsZVg6IHNjYWxlLFxuICAgIHNjYWxlWTogc2NhbGUsXG4gICAgc2NhbGVaOiBzY2FsZSxcbiAgICBza2V3WDogYW5nbGUsXG4gICAgc2tld1k6IGFuZ2xlLFxuICAgIGRpc3RhbmNlOiBweCxcbiAgICB0cmFuc2xhdGVYOiBweCxcbiAgICB0cmFuc2xhdGVZOiBweCxcbiAgICB0cmFuc2xhdGVaOiBweCxcbiAgICBwZXJzcGVjdGl2ZTogcHgsXG4gICAgb3BhY2l0eTogYWxwaGFcbn07Il19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2Nzcy9idWlsZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBSUEsSUFBTSxjQUFjLFlBQWQ7O2tCQUVTLFVBQUMsS0FBRCxFQUFRLDJCQUFSLEVBQXdDO0FBQ25ELFFBQUksaUJBQWlCLEVBQWpCLENBRCtDO0FBRW5ELFFBQUksa0JBQWtCLEVBQWxCLENBRitDO0FBR25ELFFBQUksZ0JBQWdCLEtBQWhCLENBSCtDOztBQUtuRCxTQUFLLElBQUksR0FBSixJQUFXLEtBQWhCLEVBQXVCO0FBQ25CLFlBQUksTUFBTSxjQUFOLENBQXFCLEdBQXJCLENBQUosRUFBK0I7QUFDM0IsZ0JBQU0sUUFBUSxNQUFNLEdBQU4sQ0FBUixDQURxQjs7QUFHM0IsZ0JBQUkseUJBQWUsR0FBZixDQUFKLEVBQXlCO0FBQ3JCLG1DQUFtQixNQUFNLEdBQU4sR0FBWSxLQUFaLEdBQW9CLElBQXBCLENBREU7QUFFckIsZ0NBQWdCLEdBQUMsS0FBUSxXQUFSLEdBQXVCLElBQXhCLEdBQStCLGFBQS9CLENBRks7YUFBekIsTUFJTztBQUNILGtDQUFrQixNQUFNLHdCQUFTLHdCQUFZLEdBQVosQ0FBVCxDQUFOLEdBQW1DLEdBQW5DLEdBQXlDLEtBQXpDLENBRGY7YUFKUDtTQUhKO0tBREo7O0FBY0EsUUFBSSxvQkFBb0IsRUFBcEIsRUFBd0I7QUFDeEIsWUFBSSxDQUFDLGFBQUQsSUFBa0IsQ0FBQywyQkFBRCxFQUE4QjtBQUNoRCwrQkFBbUIsY0FBYyxPQUFkLENBRDZCO1NBQXBEOztBQUlBLDBCQUFrQixNQUFNLHdCQUFTLFdBQVQsQ0FBTixHQUE4QixHQUE5QixHQUFvQyxlQUFwQyxDQUxNO0tBQTVCOztBQVFBLFdBQU8sY0FBUCxDQTNCbUQ7Q0FBeEMiLCJmaWxlIjoiYnVpbGQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRyYW5zZm9ybVByb3BzIGZyb20gJy4vdHJhbnNmb3JtLXByb3BzJztcbmltcG9ydCBwcmVmaXhlciBmcm9tICcuL3ByZWZpeGVyJztcbmltcG9ydCB7IGNhbWVsVG9EYXNoIH0gZnJvbSAnLi4vLi4vaW5jL3V0aWxzJztcblxuY29uc3QgVFJBTlNMQVRFX1ogPSAndHJhbnNsYXRlWic7XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSwgZGlzYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uKSA9PiB7XG4gICAgbGV0IHByb3BlcnR5U3RyaW5nID0gJyc7XG4gICAgbGV0IHRyYW5zZm9ybVN0cmluZyA9ICcnO1xuICAgIGxldCB0cmFuc2Zvcm1IYXNaID0gZmFsc2U7XG5cbiAgICBmb3IgKGxldCBrZXkgaW4gc3RhdGUpIHtcbiAgICAgICAgaWYgKHN0YXRlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gc3RhdGVba2V5XTtcblxuICAgICAgICAgICAgaWYgKHRyYW5zZm9ybVByb3BzW2tleV0pIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1TdHJpbmcgKz0ga2V5ICsgJygnICsgdmFsdWUgKyAnKSAnO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybUhhc1ogPSAoa2V5ID09PSBUUkFOU0xBVEVfWikgPyB0cnVlIDogdHJhbnNmb3JtSGFzWjtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eVN0cmluZyArPSAnOycgKyBwcmVmaXhlcihjYW1lbFRvRGFzaChrZXkpKSArICc6JyArIHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRyYW5zZm9ybVN0cmluZyAhPT0gJycpIHtcbiAgICAgICAgaWYgKCF0cmFuc2Zvcm1IYXNaICYmICFkaXNhYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybVN0cmluZyArPSBUUkFOU0xBVEVfWiArICcoMHB4KSc7XG4gICAgICAgIH1cblxuICAgICAgICBwcm9wZXJ0eVN0cmluZyArPSAnOycgKyBwcmVmaXhlcigndHJhbnNmb3JtJykgKyAnOicgKyB0cmFuc2Zvcm1TdHJpbmc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5U3RyaW5nO1xufTsiXX0=

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	var cache = {};
	var prefixes = ['Webkit', 'Moz', 'O', 'ms', ''];
	var numPrefixes = prefixes.length;
	var testElement = undefined;
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2Nzcy9wcmVmaXhlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxJQUFNLFFBQVEsRUFBUjtBQUNOLElBQU0sV0FBVyxDQUFDLFFBQUQsRUFBVSxLQUFWLEVBQWdCLEdBQWhCLEVBQW9CLElBQXBCLEVBQTBCLEVBQTFCLENBQVg7QUFDTixJQUFNLGNBQWMsU0FBUyxNQUFUO0FBQ3BCLElBQUksdUJBQUo7Ozs7Ozs7O0FBUUEsSUFBTSxhQUFhLFVBQUMsR0FBRCxFQUFTO0FBQ3hCLGtCQUFjLGVBQWUsU0FBUyxhQUFULENBQXVCLEtBQXZCLENBQWYsQ0FEVTs7QUFHeEIsUUFBSSxNQUFNLEdBQU4sTUFBZSxLQUFmLEVBQXNCO0FBQ3RCLGVBQU8sS0FBUCxDQURzQjtLQUExQixNQUVPO0FBQ0gsY0FBTSxHQUFOLElBQWEsS0FBYixDQURHO0tBRlA7O0FBTUEsU0FBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksV0FBSixFQUFpQixHQUFqQyxFQUFzQztBQUNsQyxZQUFJLFNBQVMsU0FBUyxDQUFULENBQVQ7WUFDQSxXQUFXLE1BQUMsS0FBVyxFQUFYLEdBQWlCLEdBQWxCLEdBQXdCLFNBQVMsSUFBSSxNQUFKLENBQVcsQ0FBWCxFQUFjLFdBQWQsRUFBVCxHQUF1QyxJQUFJLEtBQUosQ0FBVSxDQUFWLENBQXZDLENBRkw7O0FBSWxDLFlBQUksWUFBWSxZQUFZLEtBQVosRUFBbUI7QUFDL0Isa0JBQU0sR0FBTixJQUFhLFFBQWIsQ0FEK0I7U0FBbkM7S0FKSjs7QUFTQSxXQUFPLE1BQU0sR0FBTixDQUFQLENBbEJ3QjtDQUFUOztrQkFxQkosVUFBQyxHQUFEO1dBQVMsTUFBTSxHQUFOLEtBQWMsV0FBVyxHQUFYLENBQWQ7Q0FBVCIsImZpbGUiOiJwcmVmaXhlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjYWNoZSA9IHt9O1xuY29uc3QgcHJlZml4ZXMgPSBbJ1dlYmtpdCcsJ01veicsJ08nLCdtcycsICcnXTtcbmNvbnN0IG51bVByZWZpeGVzID0gcHJlZml4ZXMubGVuZ3RoO1xubGV0IHRlc3RFbGVtZW50O1xuXG4vKlxuICAgIFRlc3Qgc3R5bGUgcHJvcGVydHkgZm9yIHByZWZpeGVkIHZlcnNpb25cbiAgICBcbiAgICBAcGFyYW0gW3N0cmluZ106IFN0eWxlIHByb3BlcnR5XG4gICAgQHJldHVybiBbc3RyaW5nXTogQ2FjaGVkIHByb3BlcnR5IG5hbWVcbiovXG5jb25zdCB0ZXN0UHJlZml4ID0gKGtleSkgPT4ge1xuICAgIHRlc3RFbGVtZW50ID0gdGVzdEVsZW1lbnQgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBpZiAoY2FjaGVba2V5XSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNhY2hlW2tleV0gPSBmYWxzZTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVByZWZpeGVzOyBpKyspIHtcbiAgICAgICAgdmFyIHByZWZpeCA9IHByZWZpeGVzW2ldLFxuICAgICAgICAgICAgcHJlZml4ZWQgPSAocHJlZml4ID09PSAnJykgPyBrZXkgOiBwcmVmaXggKyBrZXkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBrZXkuc2xpY2UoMSk7XG5cbiAgICAgICAgaWYgKHByZWZpeGVkIGluIHRlc3RFbGVtZW50LnN0eWxlKSB7XG4gICAgICAgICAgICBjYWNoZVtrZXldID0gcHJlZml4ZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGNhY2hlW2tleV07XG59O1xuXG5leHBvcnQgZGVmYXVsdCAoa2V5KSA9PiBjYWNoZVtrZXldIHx8IHRlc3RQcmVmaXgoa2V5KTsiXX0=

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2Nzcy90cmFuc2Zvcm0tcHJvcHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUEsSUFBSSxpQkFBaUIsRUFBakI7O0FBRUosSUFBTSxRQUFRLE9BQVI7QUFDTixJQUFNLFNBQVMsUUFBVDtBQUNOLElBQU0sd0JBQXdCLHNCQUF4QjtBQUNOLElBQU0sUUFBUSxDQUFDLFdBQUQsRUFBYyxLQUFkLEVBQXFCLE1BQXJCLEVBQTZCLE1BQTdCLEVBQXFDLHFCQUFyQyxDQUFSOztBQUVOLGVBQWUsTUFBZixJQUF5QixlQUFlLEtBQWYsSUFBd0IsZUFBZSxxQkFBZixJQUF3QyxJQUF4Qzs7QUFFakQsTUFBTSxPQUFOLENBQWMsVUFBQyxJQUFEO1NBQVUsaUJBQUssT0FBTCxDQUFhLFVBQUMsSUFBRDtXQUFVLGVBQWUsT0FBTyxJQUFQLENBQWYsR0FBOEIsSUFBOUI7R0FBVjtDQUF2QixDQUFkOztrQkFFZSIsImZpbGUiOiJ0cmFuc2Zvcm0tcHJvcHMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXhlcyB9IGZyb20gJy4uLy4uL3ZhbHVlLXR5cGVzL3NldHRpbmdzL2RpY3Rpb25hcnknO1xuXG5sZXQgdHJhbnNmb3JtUHJvcHMgPSB7fTtcblxuY29uc3QgU0NBTEUgPSAnc2NhbGUnO1xuY29uc3QgUk9UQVRFID0gJ3JvdGF0ZSc7XG5jb25zdCBUUkFOU0ZPUk1fUEVSU1BFQ1RJVkUgPSAndHJhbnNmb3JtUGVyc3BlY3RpdmUnO1xuY29uc3QgVEVSTVMgPSBbJ3RyYW5zbGF0ZScsIFNDQUxFLCBST1RBVEUsICdza2V3JywgVFJBTlNGT1JNX1BFUlNQRUNUSVZFXTtcblxudHJhbnNmb3JtUHJvcHNbUk9UQVRFXSA9IHRyYW5zZm9ybVByb3BzW1NDQUxFXSA9IHRyYW5zZm9ybVByb3BzW1RSQU5TRk9STV9QRVJTUEVDVElWRV0gPSB0cnVlO1xuXG5URVJNUy5mb3JFYWNoKCh0ZXJtKSA9PiBheGVzLmZvckVhY2goKGF4aXMpID0+IHRyYW5zZm9ybVByb3BzW3Rlcm0gKyBheGlzXSA9IHRydWUpKTtcblxuZXhwb3J0IGRlZmF1bHQgdHJhbnNmb3JtUHJvcHM7Il19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL3N2Zy92YWx1ZS10eXBlLW1hcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQUtlO0FBQ1gseUJBRFc7QUFFWCwyQkFGVztBQUdYLDBCQUhXO0FBSVgsMkJBSlc7QUFLWCwyQkFMVztBQU1YLHdCQU5XO0FBT1gsNkJBUFc7QUFRWCw0QkFSVztBQVNYLGdDQVRXO0FBVVgsa0NBVlciLCJmaWxlIjoidmFsdWUtdHlwZS1tYXAuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFscGhhIGZyb20gJy4uLy4uL3ZhbHVlLXR5cGVzL2FscGhhJztcbmltcG9ydCBjb2xvciBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9jb2xvcic7XG5pbXBvcnQgY29tcGxleCBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9jb21wbGV4JztcbmltcG9ydCBzY2FsZSBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9zY2FsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBmaWxsOiBjb2xvcixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHNjYWxlOiBzY2FsZSxcbiAgICBzY2FsZVg6IHNjYWxlLFxuICAgIHNjYWxlWTogc2NhbGUsXG4gICAgZDogY29tcGxleCxcbiAgICBwb2ludHM6IGNvbXBsZXgsXG4gICAgb3BhY2l0eTogYWxwaGEsXG4gICAgZmlsbE9wYWNpdHk6IGFscGhhLFxuICAgIHN0cm9rZU9wYWNpdHk6IGFscGhhXG59OyJdfQ==

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
	
	        for (var key in transform) {
	            if (transform.hasOwnProperty(key)) {
	                var defaultValue = key === 'scale' ? '1' : '0';
	                props.transform += transform[key].replace(/undefined/g, defaultValue);
	            }
	        }
	    }
	
	    return props;
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL3N2Zy9idWlsZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7a0JBS3dCOzs7Ozs7Ozs7O0FBRnhCLElBQU0sZ0JBQWdCLE1BQWhCOztBQUVTLFNBQVMsS0FBVCxDQUFlLEtBQWYsRUFBc0IsSUFBdEIsRUFBNEI7QUFDdkMsUUFBSSxlQUFlLEtBQWYsQ0FEbUM7QUFFdkMsUUFBTSxRQUFRLEVBQVIsQ0FGaUM7QUFHdkMsUUFBTSxRQUFRLE1BQU0sS0FBTixLQUFnQixTQUFoQixHQUE0QixNQUFNLEtBQU4sSUFBZSxhQUFmLEdBQStCLE1BQU0sTUFBTixJQUFnQixDQUFoQixDQUhsQztBQUl2QyxRQUFNLFNBQVMsTUFBTSxNQUFOLEtBQWlCLFNBQWpCLEdBQTZCLE1BQU0sTUFBTixJQUFnQixhQUFoQixHQUFnQyxTQUFTLENBQVQsQ0FKckM7QUFLdkMsUUFBTSxtQkFBbUIsS0FBSyxLQUFMLElBQWMsQ0FBQyxNQUFNLE9BQU4sSUFBaUIsRUFBakIsQ0FBRCxHQUF3QixHQUF4QixDQUFkLEdBQTZDLEtBQUssQ0FBTCxDQUwvQjtBQU12QyxRQUFNLG1CQUFtQixLQUFLLE1BQUwsSUFBZSxDQUFDLE1BQU0sT0FBTixJQUFpQixFQUFqQixDQUFELEdBQXdCLEdBQXhCLENBQWYsR0FBOEMsS0FBSyxDQUFMLENBTmhDO0FBT3ZDLFFBQU0sa0JBQWtCLENBQUUsZ0JBQUYsSUFBc0IsUUFBUSxDQUFSLENBQXRCLENBUGU7QUFRdkMsUUFBTSxrQkFBa0IsQ0FBRSxnQkFBRixJQUFzQixTQUFTLENBQVQsQ0FBdEIsQ0FSZTtBQVN2QyxRQUFNLGdCQUFnQixtQkFBbUIsS0FBbkIsQ0FUaUI7QUFVdkMsUUFBTSxnQkFBZ0IsbUJBQW1CLE1BQW5CLENBVmlCO0FBV3ZDLFFBQU0sWUFBWTtBQUNkLGtDQUF3QixNQUFNLFVBQU4sVUFBcUIsTUFBTSxVQUFOLE9BQTdDO0FBQ0EsOEJBQW9CLHlCQUFvQiwrQkFBMEIsZUFBVSwwQkFBcUIsdUJBQWtCLG9CQUFuSDtBQUNBLDRCQUFrQixNQUFNLE1BQU4sVUFBaUIsMEJBQXFCLHVCQUF4RDtBQUNBLDBCQUFnQixNQUFNLEtBQU4sT0FBaEI7QUFDQSwwQkFBZ0IsTUFBTSxLQUFOLE9BQWhCO0tBTEUsQ0FYaUM7O0FBbUJ2QyxTQUFLLElBQUksR0FBSixJQUFXLEtBQWhCLEVBQXVCO0FBQ25CLFlBQUksTUFBTSxjQUFOLENBQXFCLEdBQXJCLENBQUosRUFBK0I7QUFDM0IsZ0JBQUkseUJBQWUsR0FBZixDQUFKLEVBQXlCO0FBQ3JCLCtCQUFlLElBQWYsQ0FEcUI7YUFBekIsTUFFTztBQUNILHNCQUFNLHdCQUFZLEdBQVosQ0FBTixJQUEwQixNQUFNLEdBQU4sQ0FBMUIsQ0FERzthQUZQO1NBREo7S0FESjs7QUFVQSxRQUFJLFlBQUosRUFBa0I7QUFDZCxjQUFNLFNBQU4sR0FBa0IsRUFBbEIsQ0FEYzs7QUFHZCxhQUFLLElBQUksR0FBSixJQUFXLFNBQWhCLEVBQTJCO0FBQ3ZCLGdCQUFJLFVBQVUsY0FBVixDQUF5QixHQUF6QixDQUFKLEVBQW1DO0FBQy9CLG9CQUFNLGVBQWUsR0FBQyxLQUFRLE9BQVIsR0FBbUIsR0FBcEIsR0FBMEIsR0FBMUIsQ0FEVTtBQUUvQixzQkFBTSxTQUFOLElBQW1CLFVBQVUsR0FBVixFQUFlLE9BQWYsQ0FBdUIsWUFBdkIsRUFBcUMsWUFBckMsQ0FBbkIsQ0FGK0I7YUFBbkM7U0FESjtLQUhKOztBQVdBLFdBQU8sS0FBUCxDQXhDdUM7Q0FBNUIiLCJmaWxlIjoiYnVpbGQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2FtZWxUb0Rhc2ggfSBmcm9tICcuLi8uLi9pbmMvdXRpbHMnO1xuaW1wb3J0IHRyYW5zZm9ybVByb3BzIGZyb20gJy4uL2Nzcy90cmFuc2Zvcm0tcHJvcHMnO1xuXG5jb25zdCBaRVJPX05PVF9aRVJPID0gMC4wMDAxO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZChzdGF0ZSwgZGF0YSkge1xuICAgIGxldCBoYXNUcmFuc2Zvcm0gPSBmYWxzZTtcbiAgICBjb25zdCBwcm9wcyA9IHt9O1xuICAgIGNvbnN0IHNjYWxlID0gc3RhdGUuc2NhbGUgIT09IHVuZGVmaW5lZCA/IHN0YXRlLnNjYWxlIHx8IFpFUk9fTk9UX1pFUk8gOiBzdGF0ZS5zY2FsZVggfHwgMTtcbiAgICBjb25zdCBzY2FsZVkgPSBzdGF0ZS5zY2FsZVkgIT09IHVuZGVmaW5lZCA/IHN0YXRlLnNjYWxlWSB8fCBaRVJPX05PVF9aRVJPIDogc2NhbGUgfHwgMTtcbiAgICBjb25zdCB0cmFuc2Zvcm1PcmlnaW5YID0gZGF0YS53aWR0aCAqICgoc3RhdGUub3JpZ2luWCB8fCA1MCkgLyAxMDApICsgZGF0YS54O1xuICAgIGNvbnN0IHRyYW5zZm9ybU9yaWdpblkgPSBkYXRhLmhlaWdodCAqICgoc3RhdGUub3JpZ2luWSB8fCA1MCkgLyAxMDApICsgZGF0YS55O1xuICAgIGNvbnN0IHNjYWxlVHJhbnNmb3JtWCA9IC0gdHJhbnNmb3JtT3JpZ2luWCAqIChzY2FsZSAqIDEpO1xuICAgIGNvbnN0IHNjYWxlVHJhbnNmb3JtWSA9IC0gdHJhbnNmb3JtT3JpZ2luWSAqIChzY2FsZVkgKiAxKTtcbiAgICBjb25zdCBzY2FsZVJlcGxhY2VYID0gdHJhbnNmb3JtT3JpZ2luWCAvIHNjYWxlO1xuICAgIGNvbnN0IHNjYWxlUmVwbGFjZVkgPSB0cmFuc2Zvcm1PcmlnaW5ZIC8gc2NhbGVZO1xuICAgIGNvbnN0IHRyYW5zZm9ybSA9IHtcbiAgICAgICAgdHJhbnNsYXRlOiBgdHJhbnNsYXRlKCR7c3RhdGUudHJhbnNsYXRlWH0sICR7c3RhdGUudHJhbnNsYXRlWX0pIGAsXG4gICAgICAgIHNjYWxlOiBgdHJhbnNsYXRlKCR7c2NhbGVUcmFuc2Zvcm1YfSwgJHtzY2FsZVRyYW5zZm9ybVl9KSBzY2FsZSgke3NjYWxlfSwgJHtzY2FsZVl9KSB0cmFuc2xhdGUoJHtzY2FsZVJlcGxhY2VYfSwgJHtzY2FsZVJlcGxhY2VZfSkgYCxcbiAgICAgICAgcm90YXRlOiBgcm90YXRlKCR7c3RhdGUucm90YXRlfSwgJHt0cmFuc2Zvcm1PcmlnaW5YfSwgJHt0cmFuc2Zvcm1PcmlnaW5ZfSkgYCxcbiAgICAgICAgc2tld1g6IGBza2V3WCgke3N0YXRlLnNrZXdYfSkgYCxcbiAgICAgICAgc2tld1k6IGBza2V3WSgke3N0YXRlLnNrZXdZfSkgYFxuICAgIH07XG5cbiAgICBmb3IgKGxldCBrZXkgaW4gc3RhdGUpIHtcbiAgICAgICAgaWYgKHN0YXRlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIGlmICh0cmFuc2Zvcm1Qcm9wc1trZXldKSB7XG4gICAgICAgICAgICAgICAgaGFzVHJhbnNmb3JtID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJvcHNbY2FtZWxUb0Rhc2goa2V5KV0gPSBzdGF0ZVtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGhhc1RyYW5zZm9ybSkge1xuICAgICAgICBwcm9wcy50cmFuc2Zvcm0gPSAnJztcblxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdHJhbnNmb3JtKSB7XG4gICAgICAgICAgICBpZiAodHJhbnNmb3JtLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkZWZhdWx0VmFsdWUgPSAoa2V5ID09PSAnc2NhbGUnKSA/ICcxJyA6ICcwJztcbiAgICAgICAgICAgICAgICBwcm9wcy50cmFuc2Zvcm0gKz0gdHJhbnNmb3JtW2tleV0ucmVwbGFjZSgvdW5kZWZpbmVkL2csIGRlZmF1bHRWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcHM7XG59Il19

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
	        var currentX = undefined;
	        var currentT = undefined;
	
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
	        var currentX = undefined;
	
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
	        var returnValue = undefined;
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2Vhc2luZy9jcmVhdGUtYmV6aWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztrQkFtQ3dCOzs7Ozs7Ozs7Ozs7Ozs7O0FBcEJ4QixJQUFNLG9CQUFvQixDQUFwQjtBQUNOLElBQU0sbUJBQW1CLEtBQW5CO0FBQ04sSUFBTSx3QkFBd0IsU0FBeEI7QUFDTixJQUFNLDZCQUE2QixFQUE3QjtBQUNOLElBQU0sc0JBQXNCLEVBQXRCO0FBQ04sSUFBTSxxQkFBcUIsT0FBTyxzQkFBc0IsR0FBdEIsQ0FBUDtBQUMzQixJQUFNLHFCQUFzQixPQUFPLFlBQVAsS0FBd0IsV0FBeEI7OztBQUc1QixJQUFNLElBQUksVUFBQyxFQUFELEVBQUssRUFBTDtXQUFZLE1BQU0sTUFBTSxFQUFOLEdBQVcsTUFBTSxFQUFOO0NBQTdCO0FBQ1YsSUFBTSxJQUFJLFVBQUMsRUFBRCxFQUFLLEVBQUw7V0FBWSxNQUFNLEVBQU4sR0FBVyxNQUFNLEVBQU47Q0FBdkI7QUFDVixJQUFNLElBQUksVUFBQyxFQUFEO1dBQVEsTUFBTSxFQUFOO0NBQVI7O0FBRVYsSUFBTSxXQUFXLFVBQUMsQ0FBRCxFQUFJLEVBQUosRUFBUSxFQUFSO1dBQWUsTUFBTSxFQUFFLEVBQUYsRUFBTSxFQUFOLENBQU4sR0FBa0IsQ0FBbEIsR0FBc0IsQ0FBdEIsR0FBMEIsTUFBTSxFQUFFLEVBQUYsRUFBTSxFQUFOLENBQU4sR0FBa0IsQ0FBbEIsR0FBc0IsRUFBRSxFQUFGLENBQWhEO0NBQWY7O0FBRWpCLElBQU0sYUFBYSxVQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUjtXQUFlLENBQUMsQ0FBQyxFQUFFLEVBQUYsRUFBTSxFQUFOLElBQVksQ0FBWixHQUFnQixFQUFFLEVBQUYsRUFBTSxFQUFOLENBQWhCLENBQUQsR0FBOEIsQ0FBOUIsR0FBa0MsRUFBRSxFQUFGLENBQWxDLENBQUQsR0FBNEMsQ0FBNUM7Q0FBZjs7Ozs7QUFLSixTQUFTLFdBQVQsQ0FBcUIsR0FBckIs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LEVBQXlCLFNBQXpCLENBQVA7O0FBRGtDLFNBQXRDLE1BR08sSUFBSSxpQkFBaUIsR0FBakIsRUFBc0I7QUFDN0IsdUJBQU8sU0FBUDs7QUFENkIsYUFBMUIsTUFHQTtBQUNILDJCQUFPLGdCQUFnQixFQUFoQixFQUFvQixhQUFwQixFQUFtQyxnQkFBZ0Isa0JBQWhCLENBQTFDLENBREc7aUJBSEE7S0F2Qk0sQ0EvQ21DOztBQThFcEQsUUFBTSxhQUFhLFlBQU07QUFDckIsdUJBQWUsSUFBZixDQURxQjtBQUVyQixZQUFJLE9BQU8sR0FBUCxJQUFjLE9BQU8sR0FBUCxFQUFZO0FBQzFCLCtCQUQwQjtTQUE5QjtLQUZlLENBOUVpQzs7QUFxRnBELFFBQU0sV0FBVyxVQUFDLEVBQUQsRUFBUTtBQUNyQixZQUFJLHVCQUFKLENBRHFCOztBQUdyQixZQUFJLENBQUMsWUFBRCxFQUFlO0FBQ2YseUJBRGU7U0FBbkI7OztBQUhxQixZQVFqQixRQUFRLEdBQVIsSUFBZSxRQUFRLEdBQVIsRUFBYTtBQUM1QiwwQkFBYyxFQUFkOzs7QUFENEIsU0FBaEMsTUFJTyxJQUFJLE9BQU8sQ0FBUCxFQUFVO0FBQ2pCLDhCQUFjLENBQWQ7OztBQURpQixhQUFkLE1BSUEsSUFBSSxPQUFPLENBQVAsRUFBVTtBQUNqQixrQ0FBYyxDQUFkLENBRGlCO2lCQUFkLE1BR0E7QUFDSCxrQ0FBYyxXQUFXLFNBQVMsRUFBVCxDQUFYLEVBQXlCLEdBQXpCLEVBQThCLEdBQTlCLENBQWQsQ0FERztpQkFIQTs7QUFPUCxlQUFPLFdBQVAsQ0F2QnFCO0tBQVIsQ0FyRm1DOztBQStHcEQsV0FBTyxRQUFQLENBL0dvRDtDQUF6QyIsImZpbGUiOiJjcmVhdGUtYmV6aWVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gICAgQmV6aWVyIGZ1bmN0aW9uIGdlbmVyYXRvclxuICAgICAgICBcbiAgICBHYcOrdGFuIFJlbmF1ZGVhdSdzIEJlemllckVhc2luZ1xuICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9pbmRleC5qcyAgXG4gICAgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAgICBZb3UncmUgYSBoZXJvXG4gICAgXG4gICAgVXNlXG4gICAgXG4gICAgICAgIHZhciBlYXNlT3V0ID0gbmV3IEJlemllciguMTcsLjY3LC44MywuNjcpLFxuICAgICAgICAgICAgeCA9IGVhc2VPdXQoMC41KTsgLy8gcmV0dXJucyAwLjYyNy4uLlxuKi9cblxuLy8gQ29uc3RhbnRzXG5jb25zdCBORVdUT05fSVRFUkFUSU9OUyA9IDg7XG5jb25zdCBORVdUT05fTUlOX1NMT1BFID0gMC4wMDE7XG5jb25zdCBTVUJESVZJU0lPTl9QUkVDSVNJT04gPSAwLjAwMDAwMDE7XG5jb25zdCBTVUJESVZJU0lPTl9NQVhfSVRFUkFUSU9OUyA9IDEwO1xuY29uc3QgS19TUExJTkVfVEFCTEVfU0laRSA9IDExO1xuY29uc3QgS19TQU1QTEVfU1RFUF9TSVpFID0gMS4wIC8gKEtfU1BMSU5FX1RBQkxFX1NJWkUgLSAxLjApO1xuY29uc3QgRkxPQVRfMzJfU1VQUE9SVEVEID0gKHR5cGVvZiBGbG9hdDMyQXJyYXkgIT09ICd1bmRlZmluZWQnKTtcblxuLy8gSGVscGVyIG1ldGhvZHNcbmNvbnN0IGEgPSAoYTEsIGEyKSA9PiAxLjAgLSAzLjAgKiBhMiArIDMuMCAqIGExO1xuY29uc3QgYiA9IChhMSwgYTIpID0+IDMuMCAqIGEyIC0gNi4wICogYTE7XG5jb25zdCBjID0gKGExKSA9PiAzLjAgKiBhMTtcblxuY29uc3QgZ2V0U2xvcGUgPSAodCwgYTEsIGEyKSA9PiAzLjAgKiBhKGExLCBhMikgKiB0ICogdCArIDIuMCAqIGIoYTEsIGEyKSAqIHQgKyBjKGExKTtcblxuY29uc3QgY2FsY0JlemllciA9ICh0LCBhMSwgYTIpID0+ICgoYShhMSwgYTIpICogdCArIGIoYTEsIGEyKSkgKiB0ICsgYyhhMSkpICogdDtcblxuLypcbiAgICBDcmVhdGUgYSBjdWJpYyBiZXppZXIgcmVzb2x2ZXJcbiovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjdWJpY0JlemllcihtWDEsIG1ZMSwgbVgyLCBtWTIpIHtcbiAgICBjb25zdCBzYW1wbGVWYWx1ZXMgPSBGTE9BVF8zMl9TVVBQT1JURUQgPyBuZXcgRmxvYXQzMkFycmF5KEtfU1BMSU5FX1RBQkxFX1NJWkUpIDogbmV3IEFycmF5KEtfU1BMSU5FX1RBQkxFX1NJWkUpO1xuICAgIGxldCBfcHJlY29tcHV0ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGJpbmFyeVN1YmRpdmlkZSA9IChhWCwgYUEsIGFCKSA9PiB7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgbGV0IGN1cnJlbnRYO1xuICAgICAgICBsZXQgY3VycmVudFQ7XG5cbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgY3VycmVudFQgPSBhQSArIChhQiAtIGFBKSAvIDIuMDtcbiAgICAgICAgICAgIGN1cnJlbnRYID0gY2FsY0JlemllcihjdXJyZW50VCwgbVgxLCBtWDIpIC0gYVg7XG4gICAgICAgICAgICBpZiAoY3VycmVudFggPiAwLjApIHtcbiAgICAgICAgICAgICAgICBhQiA9IGN1cnJlbnRUO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhQSA9IGN1cnJlbnRUO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IHdoaWxlIChNYXRoLmFicyhjdXJyZW50WCkgPiBTVUJESVZJU0lPTl9QUkVDSVNJT04gJiYgKytpIDwgU1VCRElWSVNJT05fTUFYX0lURVJBVElPTlMpO1xuXG4gICAgICAgIHJldHVybiBjdXJyZW50VDtcbiAgICB9O1xuXG4gICAgY29uc3QgbmV3dG9uUmFwaHNvbkl0ZXJhdGUgPSAoYVgsIGFHdWVzc1QpID0+IHtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBsZXQgY3VycmVudFNsb3BlID0gMDtcbiAgICAgICAgbGV0IGN1cnJlbnRYO1xuXG4gICAgICAgIGZvciAoOyBpIDwgTkVXVE9OX0lURVJBVElPTlM7ICsraSkge1xuICAgICAgICAgICAgY3VycmVudFNsb3BlID0gZ2V0U2xvcGUoYUd1ZXNzVCwgbVgxLCBtWDIpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoY3VycmVudFNsb3BlID09PSAwLjApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYUd1ZXNzVDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY3VycmVudFggPSBjYWxjQmV6aWVyKGFHdWVzc1QsIG1YMSwgbVgyKSAtIGFYO1xuICAgICAgICAgICAgYUd1ZXNzVCAtPSBjdXJyZW50WCAvIGN1cnJlbnRTbG9wZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGFHdWVzc1Q7XG4gICAgfTtcblxuICAgIGNvbnN0IGNhbGNTYW1wbGVWYWx1ZXMgPSAoKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgS19TUExJTkVfVEFCTEVfU0laRTsgKytpKSB7XG4gICAgICAgICAgICBzYW1wbGVWYWx1ZXNbaV0gPSBjYWxjQmV6aWVyKGkgKiBLX1NBTVBMRV9TVEVQX1NJWkUsIG1YMSwgbVgyKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBnZXRURm9yWCA9IChhWCkgPT4ge1xuICAgICAgICBsZXQgaW50ZXJ2YWxTdGFydCA9IDAuMDtcbiAgICAgICAgbGV0IGN1cnJlbnRTYW1wbGUgPSAxO1xuICAgICAgICBsZXQgbGFzdFNhbXBsZSA9IEtfU1BMSU5FX1RBQkxFX1NJWkUgLSAxO1xuICAgICAgICBsZXQgZGlzdCA9IDAuMDtcbiAgICAgICAgbGV0IGd1ZXNzRm9yVCA9IDAuMDtcbiAgICAgICAgbGV0IGluaXRpYWxTbG9wZSA9IDAuMDtcbiAgICAgICAgICAgIFxuICAgICAgICBmb3IgKDsgY3VycmVudFNhbXBsZSAhPSBsYXN0U2FtcGxlICYmIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSA8PSBhWDsgKytjdXJyZW50U2FtcGxlKSB7XG4gICAgICAgICAgICBpbnRlcnZhbFN0YXJ0ICs9IEtfU0FNUExFX1NURVBfU0laRTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLS1jdXJyZW50U2FtcGxlO1xuICAgICAgICBcbiAgICAgICAgZGlzdCA9IChhWCAtIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSkgLyAoc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGUrMV0gLSBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0pO1xuICAgICAgICBndWVzc0ZvclQgPSBpbnRlcnZhbFN0YXJ0ICsgZGlzdCAqIEtfU0FNUExFX1NURVBfU0laRTtcbiAgICAgICAgXG4gICAgICAgIGluaXRpYWxTbG9wZSA9IGdldFNsb3BlKGd1ZXNzRm9yVCwgbVgxLCBtWDIpO1xuICAgICAgICBcbiAgICAgICAgLy8gSWYgc2xvcGUgaXMgZ3JlYXRlciB0aGFuIG1pblxuICAgICAgICBpZiAoaW5pdGlhbFNsb3BlID49IE5FV1RPTl9NSU5fU0xPUEUpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXd0b25SYXBoc29uSXRlcmF0ZShhWCwgZ3Vlc3NGb3JUKTtcbiAgICAgICAgLy8gU2xvcGUgaXMgZXF1YWwgdG8gbWluXG4gICAgICAgIH0gZWxzZSBpZiAoaW5pdGlhbFNsb3BlID09PSAwLjApIHtcbiAgICAgICAgICAgIHJldHVybiBndWVzc0ZvclQ7XG4gICAgICAgIC8vIFNsb3BlIGlzIGxlc3MgdGhhbiBtaW5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBiaW5hcnlTdWJkaXZpZGUoYVgsIGludGVydmFsU3RhcnQsIGludGVydmFsU3RhcnQgKyBLX1NBTVBMRV9TVEVQX1NJWkUpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHByZWNvbXB1dGUgPSAoKSA9PiB7XG4gICAgICAgIF9wcmVjb21wdXRlZCA9IHRydWU7XG4gICAgICAgIGlmIChtWDEgIT0gbVkxIHx8IG1YMiAhPSBtWTIpIHtcbiAgICAgICAgICAgIGNhbGNTYW1wbGVWYWx1ZXMoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCByZXNvbHZlciA9IChhWCkgPT4ge1xuICAgICAgICBsZXQgcmV0dXJuVmFsdWU7XG5cbiAgICAgICAgaWYgKCFfcHJlY29tcHV0ZWQpIHtcbiAgICAgICAgICAgIHByZWNvbXB1dGUoKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gSWYgbGluZWFyIGdyYWRpZW50LCByZXR1cm4gWCBhcyBUXG4gICAgICAgIGlmIChtWDEgPT09IG1ZMSAmJiBtWDIgPT09IG1ZMikge1xuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSBhWDtcbiAgICAgICAgICAgIFxuICAgICAgICAvLyBJZiBhdCBzdGFydCwgcmV0dXJuIDBcbiAgICAgICAgfSBlbHNlIGlmIChhWCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSAwO1xuICAgICAgICAgICAgXG4gICAgICAgIC8vIElmIGF0IGVuZCwgcmV0dXJuIDFcbiAgICAgICAgfSBlbHNlIGlmIChhWCA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSAxO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm5WYWx1ZSA9IGNhbGNCZXppZXIoZ2V0VEZvclgoYVgpLCBtWTEsIG1ZMik7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiByZXR1cm5WYWx1ZTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHJlc29sdmVyO1xufVxuIl19

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	/*
	    Detect and load an appropriate clock setting for the environment
	*/
	
	var hasRAF = typeof window !== 'undefined' && window.requestAnimationFrame ? true : false;
	
	var tick = undefined;
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90YXNrL3RpY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLElBQU0sU0FBUyxPQUFRLE1BQVAsS0FBa0IsV0FBbEIsSUFBaUMsT0FBTyxxQkFBUCxHQUFnQyxJQUFsRSxHQUF5RSxLQUF6RTs7QUFFZixJQUFJLGdCQUFKOztBQUVBLElBQUksTUFBSixFQUFZO0FBQ1IsV0FBTyxVQUFDLFFBQUQ7ZUFBYyxPQUFPLHFCQUFQLENBQTZCLFFBQTdCO0tBQWQsQ0FEQztDQUFaLE1BR087Ozs7Ozs7Ozs7Ozs7OztBQWVILFlBQUksV0FBVyxDQUFYOztBQUVKLGVBQU8sVUFBQyxRQUFELEVBQWM7QUFDakIsZ0JBQU0sY0FBYyxJQUFJLElBQUosR0FBVyxPQUFYLEVBQWQsQ0FEVztBQUVqQixnQkFBTSxhQUFhLEtBQUssR0FBTCxDQUFTLENBQVQsRUFBWSxNQUFNLGNBQWMsUUFBZCxDQUFOLENBQXpCLENBRlc7O0FBSWpCLHVCQUFXLGNBQWMsVUFBZCxDQUpNOztBQU1qQix1QkFBVzt1QkFBTSxTQUFTLFFBQVQ7YUFBTixFQUEwQixVQUFyQyxFQU5pQjtTQUFkO1NBakJKO0NBSFA7O2tCQThCZSIsImZpbGUiOiJ0aWNrLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gICAgRGV0ZWN0IGFuZCBsb2FkIGFuIGFwcHJvcHJpYXRlIGNsb2NrIHNldHRpbmcgZm9yIHRoZSBlbnZpcm9ubWVudFxuKi9cblxuY29uc3QgaGFzUkFGID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpID8gdHJ1ZSA6IGZhbHNlO1xuXG5sZXQgdGljaztcblxuaWYgKGhhc1JBRikge1xuICAgIHRpY2sgPSAoY2FsbGJhY2spID0+IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spO1xuXG59IGVsc2Uge1xuICAgIC8qXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbFxuICAgICAgICBcbiAgICAgICAgRm9yIElFOC85IEZsaW5zdG9uZXMgYW5kIG5vbi1icm93c2VyIGVudmlyb25tZW50c1xuXG4gICAgICAgIFRha2VuIGZyb20gUGF1bCBJcmlzaC4gV2UndmUgc3RyaXBwZWQgb3V0IGNhbmNlbEFuaW1hdGlvbkZyYW1lIGNoZWNrcyBiZWNhdXNlIHdlIGRvbid0IGZveCB3aXRoIHRoYXRcbiAgICAgICAgXG4gICAgICAgIGh0dHA6Ly9wYXVsaXJpc2guY29tLzIwMTEvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1hbmltYXRpbmcvXG4gICAgICAgIGh0dHA6Ly9teS5vcGVyYS5jb20vZW1vbGxlci9ibG9nLzIwMTEvMTIvMjAvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1lci1hbmltYXRpbmdcbiAgICAgICAgIFxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGwgYnkgRXJpayBNw7ZsbGVyLiBmaXhlcyBmcm9tIFBhdWwgSXJpc2ggYW5kIFRpbm8gWmlqZGVsXG4gICAgICAgICBcbiAgICAgICAgTUlUIGxpY2Vuc2VcbiAgICAqL1xuICAgIGxldCBsYXN0VGltZSA9IDA7XG5cbiAgICB0aWNrID0gKGNhbGxiYWNrKSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIGNvbnN0IHRpbWVUb0NhbGwgPSBNYXRoLm1heCgwLCAxNiAtIChjdXJyZW50VGltZSAtIGxhc3RUaW1lKSk7XG5cbiAgICAgICAgbGFzdFRpbWUgPSBjdXJyZW50VGltZSArIHRpbWVUb0NhbGw7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBjYWxsYmFjayhsYXN0VGltZSksIHRpbWVUb0NhbGwpO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRpY2s7Il19

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
	
	        for (var i = 0; i < activateQueueLength; i++) {
	            var id = activateQueue[i];
	            var activeIdIndex = runningIds.indexOf(id);
	            var task = activeTasks[id];
	
	            // If task isn't already running, activate
	            if (activeIdIndex === -1 && task) {
	                if (task.isPriority) {
	                    runningIds.unshift(id);
	                } else {
	                    runningIds.push(id);
	                }
	
	                if (task.onActivateLoop) {
	                    task.onActivateLoop();
	                }
	
	                updateRunningCount(true, task.isLazy);
	            }
	        }
	
	        activateQueue.splice(0, activateQueueLength);
	
	        return runningIds;
	    }
	};
	//# sourceMappingURL=data:application/json;base64,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QXZCLEVBQTBCLHFCQUExQjs7Ozs7QUF2QmdCLFlBNEJWLHNCQUFzQixjQUFjLE1BQWQsQ0E1Qlo7O0FBOEJoQixhQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxtQkFBSixFQUF5QixHQUF6QyxFQUE4QztBQUMxQyxnQkFBTSxLQUFLLGNBQWMsQ0FBZCxDQUFMLENBRG9DO0FBRTFDLGdCQUFNLGdCQUFnQixXQUFXLE9BQVgsQ0FBbUIsRUFBbkIsQ0FBaEIsQ0FGb0M7QUFHMUMsZ0JBQU0sT0FBTyxZQUFZLEVBQVosQ0FBUDs7O0FBSG9DLGdCQU10QyxrQkFBa0IsQ0FBQyxDQUFELElBQU0sSUFBeEIsRUFBOEI7QUFDOUIsb0JBQUksS0FBSyxVQUFMLEVBQWlCO0FBQ2pCLCtCQUFXLE9BQVgsQ0FBbUIsRUFBbkIsRUFEaUI7aUJBQXJCLE1BRU87QUFDSCwrQkFBVyxJQUFYLENBQWdCLEVBQWhCLEVBREc7aUJBRlA7O0FBTUEsb0JBQUksS0FBSyxjQUFMLEVBQXFCO0FBQ3JCLHlCQUFLLGNBQUwsR0FEcUI7aUJBQXpCOztBQUlBLG1DQUFtQixJQUFuQixFQUF5QixLQUFLLE1BQUwsQ0FBekIsQ0FYOEI7YUFBbEM7U0FOSjs7QUFxQkEsc0JBQWMsTUFBZCxDQUFxQixDQUFyQixFQUF3QixtQkFBeEIsRUFuRGdCOztBQXFEaEIsZUFBTyxVQUFQLENBckRnQjtLQUFOIiwiZmlsZSI6Im1hbmFnZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiLy8gW2ludF06IEluY3JlbWVudGVkIGZvciBlYWNoIG5ldyBydW5uaW5nIHRhc2tcbmxldCBjdXJyZW50VGFza0lkID0gMDtcblxuLy8gW2ludF06IE51bWJlciBvZiBhbGwgcnVubmluZyB0YXNrZXNcbmxldCB0b3RhbFJ1bm5pbmdDb3VudCA9IDA7XG5cbi8vIFtpbnRdOiBOdW1iZXIgb2YgcnVubmluZyB0YXNrZXMgZXhjbHVkaW5nIGJhY2tncm91bmQgdGFza2VzXG5sZXQgbm9uQmFja2dyb3VuZFJ1bm5pbmdDb3VudCA9IDA7XG5cbi8vIFthcnJheV06IEFycmF5IG9mIHJ1bm5pbmcgdGFzayBJRHNcbmNvbnN0IHJ1bm5pbmdJZHMgPSBbXTtcblxuLy8gW29iamVjdF06IE1hcCBvZiBydW5uaW5nIHRhc2tlc1xuY29uc3QgYWN0aXZlVGFza3MgPSB7fTtcblxuLy8gW2FycmF5XTogQXJyYXkgb2YgdGFzayBJRHMgcXVldWVkIGZvciBhY3RpdmF0aW9uXG5jb25zdCBhY3RpdmF0ZVF1ZXVlID0gW107XG5cbi8vIFthcnJheV06IEFycmF5IG9mIHRhc2sgSURzIHF1ZXVlZCBmb3IgZGVhY3RpdmF0aW9uXG5jb25zdCBkZWFjdGl2YXRlUXVldWUgPSBbXTtcblxuLypcbiAgICBVcGRhdGUgYWN0aXZhdGUvZGVhY3RpdmF0ZSBxdWV1ZXNcblxuICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgIEBwYXJhbSBbYXJyYXldXG4gICAgQHBhcmFtIFthcnJheV1cbiovXG5jb25zdCB1cGRhdGVRdWV1ZXMgPSAoaWQsIGluTGlzdCwgb3V0TGlzdCkgPT4ge1xuICAgIGNvbnN0IGluUG9zaXRpb24gPSBpbkxpc3QuaW5kZXhPZihpZCk7XG4gICAgY29uc3Qgb3V0UG9zaXRpb24gPSBvdXRMaXN0LmluZGV4T2YoaWQpO1xuXG4gICAgaWYgKGluUG9zaXRpb24gPT09IC0xKSB7XG4gICAgICAgIGluTGlzdC5wdXNoKGlkKTtcbiAgICB9XG5cbiAgICBpZiAob3V0UG9zaXRpb24gPiAtMSkge1xuICAgICAgICBvdXRMaXN0LnNwbGljZShvdXRQb3NpdGlvbiwgMSk7XG4gICAgfVxufTtcblxuLypcbiAgICBVcGRhdGUgcnVubmluZ1xuXG4gICAgW2Jvb2xlYW5dOiBgdHJ1ZWAgdG8gYWRkXG4gICAgW2Jvb2xlYW5dOiBgdHJ1ZWAgaWYgbGF6eVxuKi9cbmNvbnN0IHVwZGF0ZVJ1bm5pbmdDb3VudCA9IChhZGQsIGlzTGF6eSkgPT4ge1xuICAgIGNvbnN0IG1vZGlmeSA9IGFkZCA/IDEgOiAtMTtcblxuICAgIHRvdGFsUnVubmluZ0NvdW50ICs9IG1vZGlmeTtcblxuICAgIGlmICghaXNMYXp5KSB7XG4gICAgICAgIG5vbkJhY2tncm91bmRSdW5uaW5nQ291bnQgKz0gbW9kaWZ5O1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBhY3RpdmVUYXNrcyxcblxuICAgIC8vIEFjdGl2YXRlIGEgdGFza1xuICAgIGFjdGl2YXRlOiAoaWQsIHRhc2spID0+IHtcbiAgICAgICAgYWN0aXZlVGFza3NbaWRdID0gdGFzaztcbiAgICAgICAgdGFzay5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIHVwZGF0ZVF1ZXVlcyhpZCwgYWN0aXZhdGVRdWV1ZSwgZGVhY3RpdmF0ZVF1ZXVlKTtcblxuICAgICAgICBpZiAodGFzay5vbkFjdGl2YXRlKSB7XG4gICAgICAgICAgICB0YXNrLm9uQWN0aXZhdGUodGFzayk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGFzay5vbkFjdGl2YXRlT25jZSkge1xuICAgICAgICAgICAgdGFzay5vbkFjdGl2YXRlT25jZSh0YXNrKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBEZWFjdGl2YXRlIGEgdGFza1xuICAgIGRlYWN0aXZhdGU6IChpZCkgPT4ge1xuICAgICAgICBjb25zdCB0YXNrID0gYWN0aXZlVGFza3NbaWRdO1xuXG4gICAgICAgIGlmICh0YXNrKSB7XG4gICAgICAgICAgICB1cGRhdGVRdWV1ZXMoaWQsIGRlYWN0aXZhdGVRdWV1ZSwgYWN0aXZhdGVRdWV1ZSk7XG4gICAgICAgICAgICB0YXNrLmlzQWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmICh0YXNrLm9uRGVhY3RpdmF0ZSkge1xuICAgICAgICAgICAgICAgIHRhc2sub25EZWFjdGl2YXRlKHRhc2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIE51bWJlciBiYWNrZ3JvdW5kIHRhc2tlc1xuICAgIGdldE5vbkJhY2tncm91bmRSdW5uaW5nQ291bnQ6ICgpID0+IG5vbkJhY2tncm91bmRSdW5uaW5nQ291bnQsXG5cbiAgICAvLyBJbmNyZW1lbnQgY3VycmVudCB0YXNrIElEIGFuZCByZXR1cm5cbiAgICBnZXRUYXNrSWQ6ICgpID0+IGN1cnJlbnRUYXNrSWQrKyxcblxuICAgIC8vIFJlc29sdmUgYWN0aXZhdGUvZGVhY3RpdmF0ZSB0YXNrZXMgYW5kIHJldHVybiBhY3RpdmUgaWRzXG4gICAgZ2V0QWN0aXZlSWRzOiAoKSA9PiB7XG4gICAgICAgIC8qXG4gICAgICAgICAgICB0YXNrIGRlYWN0aXZhdGUgcXVldWVcbiAgICAgICAgKi9cbiAgICAgICAgY29uc3QgZGVhY3RpdmF0ZVF1ZXVlTGVuZ3RoID0gZGVhY3RpdmF0ZVF1ZXVlLmxlbmd0aDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlYWN0aXZhdGVRdWV1ZUxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBpZCA9IGRlYWN0aXZhdGVRdWV1ZVtpXTtcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZUlkSW5kZXggPSBydW5uaW5nSWRzLmluZGV4T2YoaWQpO1xuICAgICAgICAgICAgY29uc3QgdGFzayA9IGFjdGl2ZVRhc2tzW2lkXTtcblxuICAgICAgICAgICAgLy8gSWYgdGhpcyBpcyBhIHJ1bm5pbmcgdGFzaywgZGVhY3RpdmF0ZVxuICAgICAgICAgICAgaWYgKGFjdGl2ZUlkSW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgIHJ1bm5pbmdJZHMuc3BsaWNlKGFjdGl2ZUlkSW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZVJ1bm5pbmdDb3VudChmYWxzZSwgdGFzay5pc0xhenkpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBhY3RpdmVUYXNrc1tpZF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKlxuICAgICAgICAgICAgRW1wdHkgZGVhY3RpdmF0ZSBxdWV1ZS4gV2UgdXNlIGBBcnJheS5zcGxpY2VgIGJlY2F1c2UgaXQgZG9lc24ndFxuICAgICAgICAgICAgd29ya3Mgb24gdGhlIG9yaWdpbmFsIGFycmF5IHNvIHdlIGRvbid0IGhhdmUgdG8gZ2FyYmFnZSBjb2xsZWN0IGFueXRoaW5nXG4gICAgICAgICovXG4gICAgICAgIGRlYWN0aXZhdGVRdWV1ZS5zcGxpY2UoMCwgZGVhY3RpdmF0ZVF1ZXVlTGVuZ3RoKTtcblxuICAgICAgICAvKlxuICAgICAgICAgICAgdGFzayBhY3RpdmF0ZSBxdWV1ZVxuICAgICAgICAqL1xuICAgICAgICBjb25zdCBhY3RpdmF0ZVF1ZXVlTGVuZ3RoID0gYWN0aXZhdGVRdWV1ZS5sZW5ndGg7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY3RpdmF0ZVF1ZXVlTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gYWN0aXZhdGVRdWV1ZVtpXTtcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZUlkSW5kZXggPSBydW5uaW5nSWRzLmluZGV4T2YoaWQpO1xuICAgICAgICAgICAgY29uc3QgdGFzayA9IGFjdGl2ZVRhc2tzW2lkXTtcblxuICAgICAgICAgICAgLy8gSWYgdGFzayBpc24ndCBhbHJlYWR5IHJ1bm5pbmcsIGFjdGl2YXRlXG4gICAgICAgICAgICBpZiAoYWN0aXZlSWRJbmRleCA9PT0gLTEgJiYgdGFzaykge1xuICAgICAgICAgICAgICAgIGlmICh0YXNrLmlzUHJpb3JpdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ0lkcy51bnNoaWZ0KGlkKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBydW5uaW5nSWRzLnB1c2goaWQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0YXNrLm9uQWN0aXZhdGVMb29wKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2sub25BY3RpdmF0ZUxvb3AoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB1cGRhdGVSdW5uaW5nQ291bnQodHJ1ZSwgdGFzay5pc0xhenkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYWN0aXZhdGVRdWV1ZS5zcGxpY2UoMCwgYWN0aXZhdGVRdWV1ZUxlbmd0aCk7XG5cbiAgICAgICAgcmV0dXJuIHJ1bm5pbmdJZHM7XG4gICAgfVxufTtcbiJdfQ==

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGFlZjE2MWY5NzYyYjBlYzRkOWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvYWQvZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9wb3Btb3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rhc2svdGltZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvQWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL0Zsb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvVHdlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvUGh5c2ljcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9UcmFjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGFzay9UYXNrLmpzIiwid2VicGFjazovLy8uL3NyYy9pbnB1dC9JbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL3N0YWdnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy90aW1lbGluZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9hZGFwdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hZGFwdGVyL2F0dHItYWRhcHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9jc3MtYWRhcHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9vYmplY3QtYWRhcHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9zdmctYWRhcHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9zdmctcGF0aC1hZGFwdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2Vhc2luZy9wcmVzZXQtZWFzaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2Zsb3cvZ2V0LWZsb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy9jYWxjLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL2FscGhhLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9hbmdsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvY29sb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL2NvbXBsZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL2hleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvaHNsLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9weC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvcmdiLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9zY2FsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvc2hhZG93LmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy91bml0LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvdHJhbnNmb3JtZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9kZXRlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy9udW1lcmljYWwtdmFsdWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvZGV0ZWN0LWFkYXB0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvZmxvdy9nZW5lcmF0ZS1ibGVuZC1jdXJ2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5wdXQvUG9pbnRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGFzay9sb29wLmpzIiwid2VicGFjazovLy8uL3NyYy9hZGFwdGVyL2Nzcy9zdGF0ZS1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkYXB0ZXIvY3NzL3ZhbHVlLXR5cGUtbWFwLmpzIiwid2VicGFjazovLy8uL3NyYy9hZGFwdGVyL2Nzcy9idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9jc3MvcHJlZml4ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkYXB0ZXIvY3NzL3RyYW5zZm9ybS1wcm9wcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9zdmcvdmFsdWUtdHlwZS1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkYXB0ZXIvc3ZnL2J1aWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9hZGFwdGVyL3N2Zy1wYXRoL2J1aWxkLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kZWZhdWx0LXByb3BzLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kaWN0aW9uYXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2Vhc2luZy9jcmVhdGUtZWFzaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2Vhc2luZy9jcmVhdGUtYmV6aWVyLmpzIiwid2VicGFjazovLy8uL3NyYy90YXNrL3RpY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rhc2svbWFuYWdlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx3Qzs7Ozs7OztBQ3RDQTs7QUFFQTs7QUFFQTs7QUFFQSx3Q0FBdUMsNkJBQTZCLFlBQVksRUFBRSxPQUFPLGlCQUFpQixtQkFBbUIsdUJBQXVCLDRFQUE0RSxFQUFFLEVBQUUsc0JBQXNCLGVBQWUsRUFBRTs7QUFFM1E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTJDLCtwQjs7Ozs7O0FDZjNDOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7O0FBRUE7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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1RkFBc0YsYUFBYTtBQUNuRztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTJDLDI4Szs7Ozs7O0FDMUczQzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLHdDQUF1QyxtQkFBbUI7O0FBRTFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLDRDQUEyQywrdEM7Ozs7OztBQzVCM0M7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBMkMsK29lOzs7Ozs7QUM3VDNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBbUIsY0FBYztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEscUJBQW9COztBQUVwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsaUJBQWdCO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBbUIsbUJBQW1CO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFF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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTJDLHVsSjs7Ozs7O0FDekQzQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTJDLDJ1Rjs7Ozs7O0FDOUMzQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUEyQyx1d0I7Ozs7OztBQ25CM0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUEyQywycUM7Ozs7OztBQ1ozQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTJDLHU5Rjs7Ozs7O0FDekQzQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDhCQUE2QjtBQUM3Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFjLHVCQUF1QjtBQUNyQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBdUIseUJBQXlCO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFjLGtFQUFrRTtBQUNoRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVM7QUFDVDs7QUFFQTtBQUNBLGNBQWE7QUFDYjtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUEyQywrMFU7Ozs7OztBQ2pLM0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQSw0Q0FBMkMsdTFFOzs7Ozs7QUM5QzNDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXVCLDJCQUEyQjtBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBdUIseUJBQXlCO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNENBQTJDLDI3USIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDBhZWYxNjFmOTc2MmIwZWM0ZDllXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3BvcG1vdGlvbiA9IHJlcXVpcmUoJy4uL3BvcG1vdGlvbicpO1xuXG52YXIgcG9wbW90aW9uID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3BvcG1vdGlvbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbnZhciBVSXJlZiA9IHdpbmRvdy5tb3Rpb247XG5cbnBvcG1vdGlvbi5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgIHdpbmRvdy5tb3Rpb24gPSBVSXJlZjtcbn07XG5cbndpbmRvdy5tb3Rpb24gPSB3aW5kb3cucG9wbW90aW9uID0gcG9wbW90aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlzYjJGa0wyZHNiMkpoYkM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPMGxCUVZrN096czdRVUZGV2l4SlFVRk5MRkZCUVZFc1QwRkJUeXhOUVVGUU96dEJRVVZrTEZWQlFWVXNWVUZCVml4SFFVRjFRaXhaUVVGWk8wRkJReTlDTEZkQlFVOHNUVUZCVUN4SFFVRm5RaXhMUVVGb1FpeERRVVFyUWp0RFFVRmFPenRCUVVsMlFpeFBRVUZQTEUxQlFWQXNSMEZCWjBJc1QwRkJUeXhUUVVGUUxFZEJRVzFDTEZOQlFXNUNJaXdpWm1sc1pTSTZJbWRzYjJKaGJDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdLaUJoY3lCd2IzQnRiM1JwYjI0Z1puSnZiU0FuTGk0dmNHOXdiVzkwYVc5dUp6dGNibHh1WTI5dWMzUWdWVWx5WldZZ1BTQjNhVzVrYjNjdWJXOTBhVzl1TzF4dVhHNXdiM0J0YjNScGIyNHVibTlEYjI1bWJHbGpkQ0E5SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNCM2FXNWtiM2N1Ylc5MGFXOXVJRDBnVlVseVpXWTdYRzU5TzF4dVhHNTNhVzVrYjNjdWJXOTBhVzl1SUQwZ2QybHVaRzkzTG5CdmNHMXZkR2x2YmlBOUlIQnZjRzF2ZEdsdmJqc2lYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9sb2FkL2dsb2JhbC5qc1xuICoqIG1vZHVsZSBpZCA9IDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMudHJhbnNmb3JtZXJzID0gZXhwb3J0cy52YWx1ZVR5cGUgPSBleHBvcnRzLnNldEdsb2JhbERpbGF0aW9uID0gZXhwb3J0cy51dGlscyA9IGV4cG9ydHMuY2FsYyA9IGV4cG9ydHMuZGV0ZWN0RmxvdyA9IGV4cG9ydHMuZWFzaW5nID0gZXhwb3J0cy5zdmdQYXRoID0gZXhwb3J0cy5zdmcgPSBleHBvcnRzLm9iamVjdCA9IGV4cG9ydHMuY3NzID0gZXhwb3J0cy5hdHRyID0gZXhwb3J0cy5jcmVhdGVBZGFwdGVyID0gZXhwb3J0cy50aW1lbGluZSA9IGV4cG9ydHMuc3RhZ2dlciA9IGV4cG9ydHMudGFzayA9IGV4cG9ydHMuaW5wdXQgPSBleHBvcnRzLnRyYWNrID0gZXhwb3J0cy5waHlzaWNzID0gZXhwb3J0cy50d2VlbiA9IGV4cG9ydHMuZmxvdyA9IHVuZGVmaW5lZDtcblxudmFyIF90aW1lciA9IHJlcXVpcmUoJy4vdGFzay90aW1lcicpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3NldEdsb2JhbERpbGF0aW9uJywge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdGltZXIuc2V0R2xvYmFsRGlsYXRpb247XG4gICAgfVxufSk7XG5cbnZhciBfQWN0aW9uID0gcmVxdWlyZSgnLi9hY3Rpb25zL0FjdGlvbicpO1xuXG52YXIgX0FjdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BY3Rpb24pO1xuXG52YXIgX0Zsb3cgPSByZXF1aXJlKCcuL2FjdGlvbnMvRmxvdycpO1xuXG52YXIgX0Zsb3cyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRmxvdyk7XG5cbnZhciBfVHdlZW4gPSByZXF1aXJlKCcuL2FjdGlvbnMvVHdlZW4nKTtcblxudmFyIF9Ud2VlbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Ud2Vlbik7XG5cbnZhciBfUGh5c2ljcyA9IHJlcXVpcmUoJy4vYWN0aW9ucy9QaHlzaWNzJyk7XG5cbnZhciBfUGh5c2ljczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9QaHlzaWNzKTtcblxudmFyIF9UcmFjayA9IHJlcXVpcmUoJy4vYWN0aW9ucy9UcmFjaycpO1xuXG52YXIgX1RyYWNrMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RyYWNrKTtcblxudmFyIF9UYXNrID0gcmVxdWlyZSgnLi90YXNrL1Rhc2snKTtcblxudmFyIF9UYXNrMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1Rhc2spO1xuXG52YXIgX0lucHV0ID0gcmVxdWlyZSgnLi9pbnB1dC9JbnB1dCcpO1xuXG52YXIgX0lucHV0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0lucHV0KTtcblxudmFyIF9zdGFnZ2VyMiA9IHJlcXVpcmUoJy4vaW5jL3N0YWdnZXInKTtcblxudmFyIF9zdGFnZ2VyMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0YWdnZXIyKTtcblxudmFyIF90aW1lbGluZTIgPSByZXF1aXJlKCcuL2luYy90aW1lbGluZScpO1xuXG52YXIgX3RpbWVsaW5lMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RpbWVsaW5lMik7XG5cbnZhciBfYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlci9hZGFwdGVyJyk7XG5cbnZhciBfYWRhcHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hZGFwdGVyKTtcblxudmFyIF9hdHRyQWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlci9hdHRyLWFkYXB0ZXInKTtcblxudmFyIF9hdHRyQWRhcHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hdHRyQWRhcHRlcik7XG5cbnZhciBfY3NzQWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlci9jc3MtYWRhcHRlcicpO1xuXG52YXIgX2Nzc0FkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3NzQWRhcHRlcik7XG5cbnZhciBfb2JqZWN0QWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlci9vYmplY3QtYWRhcHRlcicpO1xuXG52YXIgX29iamVjdEFkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JqZWN0QWRhcHRlcik7XG5cbnZhciBfc3ZnQWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlci9zdmctYWRhcHRlcicpO1xuXG52YXIgX3N2Z0FkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ZnQWRhcHRlcik7XG5cbnZhciBfc3ZnUGF0aEFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXIvc3ZnLXBhdGgtYWRhcHRlcicpO1xuXG52YXIgX3N2Z1BhdGhBZGFwdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N2Z1BhdGhBZGFwdGVyKTtcblxudmFyIF9wcmVzZXRFYXNpbmcgPSByZXF1aXJlKCcuL2FjdGlvbnMvZWFzaW5nL3ByZXNldC1lYXNpbmcnKTtcblxudmFyIF9wcmVzZXRFYXNpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlc2V0RWFzaW5nKTtcblxudmFyIF9nZXRGbG93ID0gcmVxdWlyZSgnLi9hY3Rpb25zL2Zsb3cvZ2V0LWZsb3cnKTtcblxudmFyIF9nZXRGbG93MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldEZsb3cpO1xuXG52YXIgX2NhbGMyID0gcmVxdWlyZSgnLi9pbmMvY2FsYycpO1xuXG52YXIgX2NhbGMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfY2FsYzIpO1xuXG52YXIgX3V0aWxzMiA9IHJlcXVpcmUoJy4vaW5jL3V0aWxzJyk7XG5cbnZhciBfdXRpbHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdXRpbHMyKTtcblxudmFyIF9hbHBoYSA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvYWxwaGEnKTtcblxudmFyIF9hbHBoYTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hbHBoYSk7XG5cbnZhciBfYW5nbGUgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL2FuZ2xlJyk7XG5cbnZhciBfYW5nbGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYW5nbGUpO1xuXG52YXIgX2NvbG9yID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy9jb2xvcicpO1xuXG52YXIgX2NvbG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbG9yKTtcblxudmFyIF9jb21wbGV4ID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy9jb21wbGV4Jyk7XG5cbnZhciBfY29tcGxleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21wbGV4KTtcblxudmFyIF9oZXggPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL2hleCcpO1xuXG52YXIgX2hleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oZXgpO1xuXG52YXIgX2hzbCA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvaHNsJyk7XG5cbnZhciBfaHNsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hzbCk7XG5cbnZhciBfcHggPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL3B4Jyk7XG5cbnZhciBfcHgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHgpO1xuXG52YXIgX3JnYiA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvcmdiJyk7XG5cbnZhciBfcmdiMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JnYik7XG5cbnZhciBfc2NhbGUgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL3NjYWxlJyk7XG5cbnZhciBfc2NhbGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2NhbGUpO1xuXG52YXIgX3NoYWRvdyA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvc2hhZG93Jyk7XG5cbnZhciBfc2hhZG93MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NoYWRvdyk7XG5cbnZhciBfdW5pdCA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvdW5pdCcpO1xuXG52YXIgX3VuaXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdW5pdCk7XG5cbnZhciBfdHJhbnNmb3JtZXJzMiA9IHJlcXVpcmUoJy4vaW5jL3RyYW5zZm9ybWVycycpO1xuXG52YXIgX3RyYW5zZm9ybWVycyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF90cmFuc2Zvcm1lcnMyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gRXhwb3J0IGZhY3RvcnkgZnVuY3Rpb25zXG52YXIgZmxvdyA9IGV4cG9ydHMuZmxvdyA9IGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KF9GbG93Mi5kZWZhdWx0LCBbbnVsbF0uY29uY2F0KGFyZ3MpKSkoKTtcbn07IC8vIEltcG9ydCBjbGFzc2VzIC0gbG9uZyB0ZXJtIGdvYWwgdG8gbW92ZSB0b3dhcmRzIGNvbXBvc2l0aW9uXG5cbnZhciB0d2VlbiA9IGV4cG9ydHMudHdlZW4gPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICByZXR1cm4gbmV3IF9Ud2VlbjIuZGVmYXVsdChwcm9wcyk7XG59O1xudmFyIHBoeXNpY3MgPSBleHBvcnRzLnBoeXNpY3MgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICByZXR1cm4gbmV3IF9QaHlzaWNzMi5kZWZhdWx0KHByb3BzKTtcbn07XG52YXIgdHJhY2sgPSBleHBvcnRzLnRyYWNrID0gZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseShfVHJhY2syLmRlZmF1bHQsIFtudWxsXS5jb25jYXQoYXJncykpKSgpO1xufTtcbnZhciBpbnB1dCA9IGV4cG9ydHMuaW5wdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjMpLCBfa2V5MyA9IDA7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcbiAgICAgICAgYXJnc1tfa2V5M10gPSBhcmd1bWVudHNbX2tleTNdO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KF9JbnB1dDIuZGVmYXVsdCwgW251bGxdLmNvbmNhdChhcmdzKSkpKCk7XG59O1xudmFyIHRhc2sgPSBleHBvcnRzLnRhc2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgX2xlbjQgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjQpLCBfa2V5NCA9IDA7IF9rZXk0IDwgX2xlbjQ7IF9rZXk0KyspIHtcbiAgICAgICAgYXJnc1tfa2V5NF0gPSBhcmd1bWVudHNbX2tleTRdO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KF9UYXNrMi5kZWZhdWx0LCBbbnVsbF0uY29uY2F0KGFyZ3MpKSkoKTtcbn07XG5leHBvcnRzLnN0YWdnZXIgPSBfc3RhZ2dlcjMuZGVmYXVsdDtcbmV4cG9ydHMudGltZWxpbmUgPSBfdGltZWxpbmUzLmRlZmF1bHQ7XG5cbi8vIEFkYXB0ZXJzXG5cbmV4cG9ydHMuY3JlYXRlQWRhcHRlciA9IF9hZGFwdGVyMi5kZWZhdWx0O1xuZXhwb3J0cy5hdHRyID0gX2F0dHJBZGFwdGVyMi5kZWZhdWx0O1xuZXhwb3J0cy5jc3MgPSBfY3NzQWRhcHRlcjIuZGVmYXVsdDtcbmV4cG9ydHMub2JqZWN0ID0gX29iamVjdEFkYXB0ZXIyLmRlZmF1bHQ7XG5leHBvcnRzLnN2ZyA9IF9zdmdBZGFwdGVyMi5kZWZhdWx0O1xuZXhwb3J0cy5zdmdQYXRoID0gX3N2Z1BhdGhBZGFwdGVyMi5kZWZhdWx0O1xuXG4vLyBFYXNpbmdcblxuZXhwb3J0cy5lYXNpbmcgPSBfcHJlc2V0RWFzaW5nMi5kZWZhdWx0O1xudmFyIGRldGVjdEZsb3cgPSBleHBvcnRzLmRldGVjdEZsb3cgPSBfZ2V0RmxvdzIuZGVmYXVsdDtcblxuLy8gVXRpbHNcbmV4cG9ydHMuY2FsYyA9IF9jYWxjO1xuZXhwb3J0cy51dGlscyA9IF91dGlscztcblxuLy8gVmFsdWUgdHlwZXNcblxudmFyIHZhbHVlVHlwZSA9IGV4cG9ydHMudmFsdWVUeXBlID0geyBhbHBoYTogX2FscGhhMi5kZWZhdWx0LCBhbmdsZTogX2FuZ2xlMi5kZWZhdWx0LCBjb2xvcjogX2NvbG9yMi5kZWZhdWx0LCBjb21wbGV4OiBfY29tcGxleDIuZGVmYXVsdCwgaGV4OiBfaGV4Mi5kZWZhdWx0LCBoc2w6IF9oc2wyLmRlZmF1bHQsIHB4OiBfcHgyLmRlZmF1bHQsIHJnYjogX3JnYjIuZGVmYXVsdCwgc2NhbGU6IF9zY2FsZTIuZGVmYXVsdCwgc2hhZG93OiBfc2hhZG93Mi5kZWZhdWx0LCB1bml0OiBfdW5pdDIuZGVmYXVsdCB9O1xuXG4vLyBUcmFuc2Zvcm1lcnNcbmV4cG9ydHMudHJhbnNmb3JtZXJzID0gX3RyYW5zZm9ybWVycztcblxuLypcbiAgICBSZXR1cm5zIGEgdmVyc2lvbiBvZiB0aGUgQWN0aW9uIGJvdW5kIHRvIGEgRmxvd1xuXG4gICAgV2UncmUgYWRkaW5nIGBvbmAgaGVyZSBiZWNhdXNlIEZsb3cgZXh0ZW5kcyBBY3Rpb24sXG4gICAgb3RoZXJ3aXNlIGNyZWF0aW5nIGEgY2lyY3VsYXIgbW9kdWxhciBkZXBlbmRlbmN5LiBGdXR1cmVcbiAgICByZWZhY3RvcmluZywgaWUgbW92aW5nIHRvIGEgY29tcG9zaXRpb25hbCBtb2RlbCB3aWxsXG4gICAgcmVtb3ZlIHRoZSBuZWVkIGZvciB1cyB0byBkbyB0aGlzIGhlcmUuXG4qL1xuXG5fQWN0aW9uMi5kZWZhdWx0LnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgaWYgKCFlbGVtZW50LmNvbm5lY3QpIHtcbiAgICAgICAgZWxlbWVudCA9ICgwLCBfZ2V0RmxvdzIuZGVmYXVsdCkoZWxlbWVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQuY29ubmVjdCh0aGlzKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXdiM0J0YjNScGIyNHVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenR6UWtGdFExTTdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN1FVRjZRa1lzU1VGQlRTeHpRa0ZCVHp0elEwRkJTVHM3T3pzMFJVRkJjVUk3UTBGQmVrSTdPMEZCUTJJc1NVRkJUU3gzUWtGQlVTeFZRVUZETEV0QlFVUTdWMEZCVnl4dlFrRkJWU3hMUVVGV08wTkJRVmc3UVVGRFpDeEpRVUZOTERSQ1FVRlZMRlZCUVVNc1MwRkJSRHRYUVVGWExITkNRVUZaTEV0QlFWbzdRMEZCV0R0QlFVTm9RaXhKUVVGTkxIZENRVUZSTzNWRFFVRkpPenM3T3paRlFVRnpRanREUVVFeFFqdEJRVU5rTEVsQlFVMHNkMEpCUVZFN2RVTkJRVWs3T3pzN05rVkJRWE5DTzBOQlFURkNPMEZCUTJRc1NVRkJUU3h6UWtGQlR6dDFRMEZCU1RzN096czBSVUZCY1VJN1EwRkJla0k3VVVGRFlqdFJRVU5CT3pzN08xRkJSMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPenM3TzFGQlIwRTdRVUZGUVN4SlFVRk5MRzFFUVVGT096czdVVUZIU3p0UlFVTkJPenM3TzBGQlpVd3NTVUZCVFN4blEwRkJXU3hGUVVGRkxITkNRVUZHTEVWQlFWTXNjMEpCUVZRc1JVRkJaMElzYzBKQlFXaENMRVZCUVhWQ0xEQkNRVUYyUWl4RlFVRm5ReXhyUWtGQmFFTXNSVUZCY1VNc2EwSkJRWEpETEVWQlFUQkRMR2RDUVVFeFF5eEZRVUU0UXl4clFrRkJPVU1zUlVGQmJVUXNjMEpCUVc1RUxFVkJRVEJFTEhkQ1FVRXhSQ3hGUVVGclJTeHZRa0ZCYkVVc1JVRkJXanM3TzFGQlIwUTdPenM3T3pzN096czdPMEZCVlZvc2FVSkJRVThzVTBGQlVDeERRVUZwUWl4RlFVRnFRaXhIUVVGelFpeFZRVUZWTEU5QlFWWXNSVUZCYlVJN1FVRkRja01zVVVGQlNTeERRVUZETEZGQlFWRXNUMEZCVWl4RlFVRnBRanRCUVVOc1FpeHJRa0ZCVlN4MVFrRkJVU3hQUVVGU0xFTkJRVllzUTBGRWEwSTdTMEZCZEVJN08wRkJTVUVzVjBGQlR5eFJRVUZSTEU5QlFWSXNRMEZCWjBJc1NVRkJhRUlzUTBGQlVDeERRVXh4UXp0RFFVRnVRaUlzSW1acGJHVWlPaUp3YjNCdGIzUnBiMjR1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUx5OGdTVzF3YjNKMElHTnNZWE56WlhNZ0xTQnNiMjVuSUhSbGNtMGdaMjloYkNCMGJ5QnRiM1psSUhSdmQyRnlaSE1nWTI5dGNHOXphWFJwYjI1Y2JtbHRjRzl5ZENCQlkzUnBiMjRnWm5KdmJTQW5MaTloWTNScGIyNXpMMEZqZEdsdmJpYzdYRzVwYlhCdmNuUWdSbXh2ZHlCbWNtOXRJQ2N1TDJGamRHbHZibk12Um14dmR5YzdYRzVwYlhCdmNuUWdWSGRsWlc0Z1puSnZiU0FuTGk5aFkzUnBiMjV6TDFSM1pXVnVKenRjYm1sdGNHOXlkQ0JRYUhsemFXTnpJR1p5YjIwZ0p5NHZZV04wYVc5dWN5OVFhSGx6YVdOekp6dGNibWx0Y0c5eWRDQlVjbUZqYXlCbWNtOXRJQ2N1TDJGamRHbHZibk12VkhKaFkyc25PMXh1YVcxd2IzSjBJRlJoYzJzZ1puSnZiU0FuTGk5MFlYTnJMMVJoYzJzbk8xeHVhVzF3YjNKMElFbHVjSFYwSUdaeWIyMGdKeTR2YVc1d2RYUXZTVzV3ZFhRbk8xeHVYRzR2THlCRmVIQnZjblFnWm1GamRHOXllU0JtZFc1amRHbHZibk5jYm1WNGNHOXlkQ0JqYjI1emRDQm1iRzkzSUQwZ0tDNHVMbUZ5WjNNcElEMCtJRzVsZHlCR2JHOTNLQzR1TG1GeVozTXBPMXh1Wlhod2IzSjBJR052Ym5OMElIUjNaV1Z1SUQwZ0tIQnliM0J6S1NBOVBpQnVaWGNnVkhkbFpXNG9jSEp2Y0hNcE8xeHVaWGh3YjNKMElHTnZibk4wSUhCb2VYTnBZM01nUFNBb2NISnZjSE1wSUQwK0lHNWxkeUJRYUhsemFXTnpLSEJ5YjNCektUdGNibVY0Y0c5eWRDQmpiMjV6ZENCMGNtRmpheUE5SUNndUxpNWhjbWR6S1NBOVBpQnVaWGNnVkhKaFkyc29MaTR1WVhKbmN5azdYRzVsZUhCdmNuUWdZMjl1YzNRZ2FXNXdkWFFnUFNBb0xpNHVZWEpuY3lrZ1BUNGdibVYzSUVsdWNIVjBLQzR1TG1GeVozTXBPMXh1Wlhod2IzSjBJR052Ym5OMElIUmhjMnNnUFNBb0xpNHVZWEpuY3lrZ1BUNGdibVYzSUZSaGMyc29MaTR1WVhKbmN5azdYRzVsZUhCdmNuUWdjM1JoWjJkbGNpQm1jbTl0SUNjdUwybHVZeTl6ZEdGbloyVnlKenRjYm1WNGNHOXlkQ0IwYVcxbGJHbHVaU0JtY205dElDY3VMMmx1WXk5MGFXMWxiR2x1WlNjN1hHNWNiaTh2SUVGa1lYQjBaWEp6WEc1bGVIQnZjblFnWTNKbFlYUmxRV1JoY0hSbGNpQm1jbTl0SUNjdUwyRmtZWEIwWlhJdllXUmhjSFJsY2ljN1hHNWxlSEJ2Y25RZ1lYUjBjaUJtY205dElDY3VMMkZrWVhCMFpYSXZZWFIwY2kxaFpHRndkR1Z5Snp0Y2JtVjRjRzl5ZENCamMzTWdabkp2YlNBbkxpOWhaR0Z3ZEdWeUwyTnpjeTFoWkdGd2RHVnlKenRjYm1WNGNHOXlkQ0J2WW1wbFkzUWdabkp2YlNBbkxpOWhaR0Z3ZEdWeUwyOWlhbVZqZEMxaFpHRndkR1Z5Snp0Y2JtVjRjRzl5ZENCemRtY2dabkp2YlNBbkxpOWhaR0Z3ZEdWeUwzTjJaeTFoWkdGd2RHVnlKenRjYm1WNGNHOXlkQ0J6ZG1kUVlYUm9JR1p5YjIwZ0p5NHZZV1JoY0hSbGNpOXpkbWN0Y0dGMGFDMWhaR0Z3ZEdWeUp6dGNibHh1THk4Z1JXRnphVzVuWEc1bGVIQnZjblFnWldGemFXNW5JR1p5YjIwZ0p5NHZZV04wYVc5dWN5OWxZWE5wYm1jdmNISmxjMlYwTFdWaGMybHVaeWM3WEc1cGJYQnZjblFnWjJWMFJteHZkeUJtY205dElDY3VMMkZqZEdsdmJuTXZabXh2ZHk5blpYUXRabXh2ZHljN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnWkdWMFpXTjBSbXh2ZHlBOUlHZGxkRVpzYjNjN1hHNWNiaTh2SUZWMGFXeHpYRzVsZUhCdmNuUWdLaUJoY3lCallXeGpJR1p5YjIwZ0p5NHZhVzVqTDJOaGJHTW5PMXh1Wlhod2IzSjBJQ29nWVhNZ2RYUnBiSE1nWm5KdmJTQW5MaTlwYm1NdmRYUnBiSE1uTzF4dVpYaHdiM0owSUhzZ2MyVjBSMnh2WW1Gc1JHbHNZWFJwYjI0Z2ZTQm1jbTl0SUNjdUwzUmhjMnN2ZEdsdFpYSW5PMXh1WEc0dkx5QldZV3gxWlNCMGVYQmxjMXh1YVcxd2IzSjBJR0ZzY0doaElHWnliMjBnSnk0dmRtRnNkV1V0ZEhsd1pYTXZZV3h3YUdFbk8xeHVhVzF3YjNKMElHRnVaMnhsSUdaeWIyMGdKeTR2ZG1Gc2RXVXRkSGx3WlhNdllXNW5iR1VuTzF4dWFXMXdiM0owSUdOdmJHOXlJR1p5YjIwZ0p5NHZkbUZzZFdVdGRIbHdaWE12WTI5c2IzSW5PMXh1YVcxd2IzSjBJR052YlhCc1pYZ2dabkp2YlNBbkxpOTJZV3gxWlMxMGVYQmxjeTlqYjIxd2JHVjRKenRjYm1sdGNHOXlkQ0JvWlhnZ1puSnZiU0FuTGk5MllXeDFaUzEwZVhCbGN5OW9aWGduTzF4dWFXMXdiM0owSUdoemJDQm1jbTl0SUNjdUwzWmhiSFZsTFhSNWNHVnpMMmh6YkNjN1hHNXBiWEJ2Y25RZ2NIZ2dabkp2YlNBbkxpOTJZV3gxWlMxMGVYQmxjeTl3ZUNjN1hHNXBiWEJ2Y25RZ2NtZGlJR1p5YjIwZ0p5NHZkbUZzZFdVdGRIbHdaWE12Y21kaUp6dGNibWx0Y0c5eWRDQnpZMkZzWlNCbWNtOXRJQ2N1TDNaaGJIVmxMWFI1Y0dWekwzTmpZV3hsSnp0Y2JtbHRjRzl5ZENCemFHRmtiM2NnWm5KdmJTQW5MaTkyWVd4MVpTMTBlWEJsY3k5emFHRmtiM2NuTzF4dWFXMXdiM0owSUhWdWFYUWdabkp2YlNBbkxpOTJZV3gxWlMxMGVYQmxjeTkxYm1sMEp6dGNibVY0Y0c5eWRDQmpiMjV6ZENCMllXeDFaVlI1Y0dVZ1BTQjdJR0ZzY0doaExDQmhibWRzWlN3Z1kyOXNiM0lzSUdOdmJYQnNaWGdzSUdobGVDd2dhSE5zTENCd2VDd2djbWRpTENCelkyRnNaU3dnYzJoaFpHOTNMQ0IxYm1sMElIMDdYRzVjYmk4dklGUnlZVzV6Wm05eWJXVnljMXh1Wlhod2IzSjBJQ29nWVhNZ2RISmhibk5tYjNKdFpYSnpJR1p5YjIwZ0p5NHZhVzVqTDNSeVlXNXpabTl5YldWeWN5YzdYRzVjYmk4cVhHNGdJQ0FnVW1WMGRYSnVjeUJoSUhabGNuTnBiMjRnYjJZZ2RHaGxJRUZqZEdsdmJpQmliM1Z1WkNCMGJ5QmhJRVpzYjNkY2JseHVJQ0FnSUZkbEozSmxJR0ZrWkdsdVp5QmdiMjVnSUdobGNtVWdZbVZqWVhWelpTQkdiRzkzSUdWNGRHVnVaSE1nUVdOMGFXOXVMRnh1SUNBZ0lHOTBhR1Z5ZDJselpTQmpjbVZoZEdsdVp5QmhJR05wY21OMWJHRnlJRzF2WkhWc1lYSWdaR1Z3Wlc1a1pXNWplUzRnUm5WMGRYSmxYRzRnSUNBZ2NtVm1ZV04wYjNKcGJtY3NJR2xsSUcxdmRtbHVaeUIwYnlCaElHTnZiWEJ2YzJsMGFXOXVZV3dnYlc5a1pXd2dkMmxzYkZ4dUlDQWdJSEpsYlc5MlpTQjBhR1VnYm1WbFpDQm1iM0lnZFhNZ2RHOGdaRzhnZEdocGN5Qm9aWEpsTGx4dUtpOWNia0ZqZEdsdmJpNXdjbTkwYjNSNWNHVXViMjRnUFNCbWRXNWpkR2x2YmlBb1pXeGxiV1Z1ZENrZ2UxeHVJQ0FnSUdsbUlDZ2haV3hsYldWdWRDNWpiMjV1WldOMEtTQjdYRzRnSUNBZ0lDQWdJR1ZzWlcxbGJuUWdQU0JuWlhSR2JHOTNLR1ZzWlcxbGJuUXBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lISmxkSFZ5YmlCbGJHVnRaVzUwTG1OdmJtNWxZM1FvZEdocGN5azdYRzU5T3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3BvcG1vdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuc2V0R2xvYmFsRGlsYXRpb24gPSB1bmRlZmluZWQ7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxudmFyIE1BWF9FTEFQU0VEID0gMzM7XG5cbnZhciBjdXJyZW50ID0gMDtcbnZhciBlbGFwc2VkID0gMTYuNztcbnZhciBkaWxhdGlvbiA9IDE7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChmcmFtZXN0YW1wKSB7XG4gICAgICAgIGVsYXBzZWQgPSBNYXRoLm1heChNYXRoLm1pbihmcmFtZXN0YW1wIC0gY3VycmVudCwgTUFYX0VMQVBTRUQpLCAxKSAqIGRpbGF0aW9uO1xuICAgICAgICBjdXJyZW50ID0gZnJhbWVzdGFtcDtcbiAgICB9LFxuXG4gICAgc3RhcnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnQgPSAoMCwgX3V0aWxzLmN1cnJlbnRUaW1lKSgpO1xuICAgIH0sXG5cbiAgICBnZXRFbGFwc2VkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBlbGFwc2VkO1xuICAgIH1cbn07XG52YXIgc2V0R2xvYmFsRGlsYXRpb24gPSBleHBvcnRzLnNldEdsb2JhbERpbGF0aW9uID0gZnVuY3Rpb24gKG5ld0RpbGF0aW9uKSB7XG4gICAgcmV0dXJuIGRpbGF0aW9uID0gbmV3RGlsYXRpb247XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkwWVhOckwzUnBiV1Z5TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3UVVGRlFTeEpRVUZOTEdOQlFXTXNSVUZCWkRzN1FVRkZUaXhKUVVGSkxGVkJRVlVzUTBGQlZqdEJRVU5LTEVsQlFVa3NWVUZCVlN4SlFVRldPMEZCUTBvc1NVRkJTU3hYUVVGWExFTkJRVmc3TzJ0Q1FVVlhPMEZCUTFnc1dVRkJVU3hWUVVGRExGVkJRVVFzUlVGQlowSTdRVUZEY0VJc2EwSkJRVlVzUzBGQlN5eEhRVUZNTEVOQlFWTXNTMEZCU3l4SFFVRk1MRU5CUVZNc1lVRkJZU3hQUVVGaUxFVkJRWE5DTEZkQlFTOUNMRU5CUVZRc1JVRkJjMFFzUTBGQmRFUXNTVUZCTWtRc1VVRkJNMFFzUTBGRVZUdEJRVVZ3UWl4clFrRkJWU3hWUVVGV0xFTkJSbTlDTzB0QlFXaENPenRCUVV0U0xGZEJRVTg3WlVGQlRTeFZRVUZWTEhsQ1FVRldPMHRCUVU0N08wRkJSVkFzWjBKQlFWazdaVUZCVFR0TFFVRk9PenRCUVVkVUxFbEJRVTBzWjBSQlFXOUNMRlZCUVVNc1YwRkJSRHRYUVVGcFFpeFhRVUZYTEZkQlFWZzdRMEZCYWtJaUxDSm1hV3hsSWpvaWRHbHRaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhzZ1kzVnljbVZ1ZEZScGJXVWdmU0JtY205dElDY3VMaTlwYm1NdmRYUnBiSE1uTzF4dVhHNWpiMjV6ZENCTlFWaGZSVXhCVUZORlJDQTlJRE16TzF4dVhHNXNaWFFnWTNWeWNtVnVkQ0E5SURBN1hHNXNaWFFnWld4aGNITmxaQ0E5SURFMkxqYzdYRzVzWlhRZ1pHbHNZWFJwYjI0Z1BTQXhPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0I3WEc0Z0lDQWdkWEJrWVhSbE9pQW9abkpoYldWemRHRnRjQ2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQmxiR0Z3YzJWa0lEMGdUV0YwYUM1dFlYZ29UV0YwYUM1dGFXNG9abkpoYldWemRHRnRjQ0F0SUdOMWNuSmxiblFzSUUxQldGOUZURUZRVTBWRUtTd2dNU2tnS2lCa2FXeGhkR2x2Ymp0Y2JpQWdJQ0FnSUNBZ1kzVnljbVZ1ZENBOUlHWnlZVzFsYzNSaGJYQTdYRzRnSUNBZ2ZTeGNibHh1SUNBZ0lITjBZWEowT2lBb0tTQTlQaUJqZFhKeVpXNTBJRDBnWTNWeWNtVnVkRlJwYldVb0tTeGNibHh1SUNBZ0lHZGxkRVZzWVhCelpXUTZJQ2dwSUQwK0lHVnNZWEJ6WldSY2JuMDdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQnpaWFJIYkc5aVlXeEVhV3hoZEdsdmJpQTlJQ2h1WlhkRWFXeGhkR2x2YmlrZ1BUNGdaR2xzWVhScGIyNGdQU0J1WlhkRWFXeGhkR2x2YmpzaVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3Rhc2svdGltZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfVGFzazIgPSByZXF1aXJlKCcuLi90YXNrL1Rhc2snKTtcblxudmFyIF9UYXNrMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1Rhc2syKTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG52YXIgX2RldGVjdCA9IHJlcXVpcmUoJy4uL3ZhbHVlLXR5cGVzL2RldGVjdCcpO1xuXG52YXIgX2RldGVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZXRlY3QpO1xuXG52YXIgX251bWVyaWNhbFZhbHVlcyA9IHJlcXVpcmUoJy4uL2luYy9udW1lcmljYWwtdmFsdWVzJyk7XG5cbnZhciBfbnVtZXJpY2FsVmFsdWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX251bWVyaWNhbFZhbHVlcyk7XG5cbnZhciBfZGV0ZWN0QWRhcHRlciA9IHJlcXVpcmUoJy4uL2luYy9kZXRlY3QtYWRhcHRlcicpO1xuXG52YXIgX2RldGVjdEFkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGV0ZWN0QWRhcHRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgTlVNX05VTUVSSUNBTF9WQUxVRVMgPSBfbnVtZXJpY2FsVmFsdWVzMi5kZWZhdWx0Lmxlbmd0aDtcblxudmFyIGRlZmF1bHRSZW5kZXJlciA9IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZTtcbiAgICB2YXIgYWRhcHRlciA9IF9yZWYuYWRhcHRlcjtcbiAgICB2YXIgYWRhcHRlckRhdGEgPSBfcmVmLmFkYXB0ZXJEYXRhO1xuICAgIHZhciBlbGVtZW50ID0gX3JlZi5lbGVtZW50O1xuICAgIHJldHVybiBhZGFwdGVyKGVsZW1lbnQsIHN0YXRlLCBhZGFwdGVyRGF0YSk7XG59O1xuXG52YXIgQWN0aW9uID0gZnVuY3Rpb24gKF9UYXNrKSB7XG4gICAgX2luaGVyaXRzKEFjdGlvbiwgX1Rhc2spO1xuXG4gICAgZnVuY3Rpb24gQWN0aW9uKHByb3BzKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBY3Rpb24pO1xuXG4gICAgICAgIHByb3BzLnN0YXRlID0ge307XG4gICAgICAgIHByb3BzLnZhbHVlS2V5cyA9IFtdO1xuICAgICAgICBwcm9wcy5wYXJlbnRLZXlzID0gW107XG4gICAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfVGFzay5jYWxsKHRoaXMsIHByb3BzKSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgIyBTZXQgQWN0aW9uIHByb3BlcnRpZXNcbiAgICAgICAgIyMgU2V0IHVzZXItZGVmaW5lZCBBY3Rpb24gcHJvcGVydGllc1xuICAgICAgICAgQHBhcmFtIFtvYmplY3RdXG4gICAgICAgIEByZXR1cm4gW0FjdGlvbl1cbiAgICAqL1xuXG4gICAgQWN0aW9uLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiBzZXQoKSB7XG4gICAgICAgIHZhciBwcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzBdO1xuXG4gICAgICAgIHRoaXMudmFsdWVzID0gdGhpcy52YWx1ZXMgfHwge307XG5cbiAgICAgICAgdmFyIHZhbHVlcyA9IHByb3BzLnZhbHVlcztcblxuICAgICAgICB2YXIgcHJvcHNUb1NldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgWyd2YWx1ZXMnXSk7XG5cbiAgICAgICAgdmFyIGluaGVyaXRhYmxlID0ge307XG5cbiAgICAgICAgLy8gU2V0IG5vbi1jb25zdW1lZCBwcm9wZXJ0aWVzXG4gICAgICAgIF9UYXNrLnByb3RvdHlwZS5zZXQuY2FsbCh0aGlzLCBwcm9wc1RvU2V0KTtcblxuICAgICAgICAvLyBEZXRlY3QgY29ycmVjdCBgYWRhcHRlcmAgaWYgbm9uZSBleGlzdHMgYW5kIGBlbGVtZW50YCBpcyBiZWluZyBzZXRcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmFkYXB0ZXIpIHtcbiAgICAgICAgICAgICAgICAvLyBEdWNrdHlwaXNoIGNoZWNrIGZvciBBZGFwdGVyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGFwdGVyID0gKDAsIF9kZXRlY3RBZGFwdGVyMi5kZWZhdWx0KSh0aGlzLmVsZW1lbnQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYWRhcHRlci5nZXRFbGVtZW50RGF0YSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkYXB0ZXJEYXRhID0gdGhpcy5hZGFwdGVyLmdldEVsZW1lbnREYXRhKHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLm9uUmVuZGVyID0gZGVmYXVsdFJlbmRlcmVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUHJpbWUgYW4gb2JqZWN0IHRvIGluaGVyaXQgZnJvbSwgd2l0aCBvbmx5IGB2YWx1ZWAgcHJvcGVydGllc1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5kZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRlZmF1bHRWYWx1ZS5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHByb3BzVG9TZXQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGluaGVyaXRhYmxlW2tleV0gPSBwcm9wc1RvU2V0W2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgZXhpc3RpbmcgdmFsdWVzIHdpdGggaW5oZXJpdGFibGUgcHJvcGVydGllc1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy52YWx1ZXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZXNba2V5XSA9IF9leHRlbmRzKHt9LCB0aGlzLnZhbHVlc1trZXldLCBpbmhlcml0YWJsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGVcbiAgICAgICAgaWYgKHZhbHVlcykge1xuICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZXModmFsdWVzLCBpbmhlcml0YWJsZSk7XG5cbiAgICAgICAgICAgIC8vIFByZWNvbXB1dGUgbnVtYmVyIG9mIHZhbHVlIGtleSBhbmQgcGFyZW50IGtleXMgdG8gYXZvaWQgcGVyLWZyYW1lIG1lYXN1cmVtZW50XG4gICAgICAgICAgICB0aGlzLm51bVZhbHVlS2V5cyA9IHRoaXMudmFsdWVLZXlzLmxlbmd0aDtcbiAgICAgICAgICAgIHRoaXMubnVtUGFyZW50S2V5cyA9IHRoaXMucGFyZW50S2V5cy5sZW5ndGg7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgQWN0aW9uLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiBnZXQoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlW2tleV07XG4gICAgfTtcblxuICAgIEFjdGlvbi5wcm90b3R5cGUuc2V0VmFsdWVzID0gZnVuY3Rpb24gc2V0VmFsdWVzKHZhbHVlcywgaW5oZXJpdCkge1xuICAgICAgICAvLyBJdGVyYXRlIG92ZXIgYWxsIGluY29taW5nIHZhbHVlcyBhbmQgc2V0XG4gICAgICAgIGZvciAodmFyIGtleSBpbiB2YWx1ZXMpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHZhciBoYXNDaGlsZHJlbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHZhciBjaGlsZHJlbiA9IHt9O1xuICAgICAgICAgICAgICAgIC8vIE1lcmdlIGludG8gZXhpc3RpbmcgdmFsdWUgb3IgY3JlYXRlIG5ld1xuICAgICAgICAgICAgICAgIHZhciBuZXdWYWx1ZSA9IHRoaXMudmFsdWVzW2tleV0gPyBfZXh0ZW5kcyh7fSwgdGhpcy52YWx1ZXNba2V5XSkgOiBfZXh0ZW5kcyh7fSwgdGhpcy5kZWZhdWx0VmFsdWUsIGluaGVyaXQpO1xuXG4gICAgICAgICAgICAgICAgLy8gSWYgdmFsdWVzIGlzIG5vdCBhbiBvYmplY3QsIGFzc2lnbiB2YWx1ZSB0byBkZWZhdWx0IHByb3BcbiAgICAgICAgICAgICAgICBpZiAoISgwLCBfdXRpbHMuaXNPYmopKHZhbHVlc1trZXldKSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZVt0aGlzLmRlZmF1bHRWYWx1ZVByb3BdID0gdmFsdWVzW2tleV07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSBfZXh0ZW5kcyh7fSwgbmV3VmFsdWUsIHZhbHVlc1trZXldKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBJZiB3ZSd2ZSBnb3QgYW4gYWRhcHRlciwgZ2V0IHRoZSBjdXJyZW50IHZhbHVlXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlc1trZXldLmN1cnJlbnQgPT09IHVuZGVmaW5lZCAmJiB0aGlzLmFkYXB0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUuY3VycmVudCA9IHRoaXMuYWRhcHRlci5nZXQodGhpcy5lbGVtZW50LCBrZXkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIElmIHdlIGRvbid0IGhhdmUgYSB2YWx1ZSB0eXBlIGFuZCB3ZSBkbyBoYXZlIGFuIEFkYXB0ZXIsIGNoZWNrIGZvciB0eXBlIHdpdGggdmFsdWUga2V5XG4gICAgICAgICAgICAgICAgaWYgKCFuZXdWYWx1ZS50eXBlICYmIHRoaXMuYWRhcHRlciAmJiB0aGlzLmFkYXB0ZXIuY2hlY2tWYWx1ZVR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUudHlwZSA9IHRoaXMuYWRhcHRlci5jaGVja1ZhbHVlVHlwZShrZXkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIElmIHdlIHN0aWxsIGRvbid0IGhhdmUgYSB2YWx1ZSB0eXBlIGFuZCB0aGlzIGlzIHRoZSBmaXJzdCB0aW1lIHdlJ3ZlIHNldCB0aGlzIHZhbHVlLCBjaGVjayBudW1lcmljYWwgdmFsdWVzIGZvciBzdHJpbmdzIGFuZCB0ZXN0XG4gICAgICAgICAgICAgICAgaWYgKCFuZXdWYWx1ZS50eXBlICYmICF0aGlzLnZhbHVlc1trZXldKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLnR5cGUgPSAoMCwgX2RldGVjdDIuZGVmYXVsdCkobmV3VmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIElmIHdlIGhhdmUgYSB2YWx1ZSB0eXBlLCBoYW5kbGUuIFRoaXMgaXMgbXkgbGVhc3QgZmF2b3VyaXRlIHBhcnQgb2YgUG9wbW90aW9uLCBzby4uLiBlbmpveS5cbiAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IE5VTV9OVU1FUklDQUxfVkFMVUVTOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm9wTmFtZSA9IF9udW1lcmljYWxWYWx1ZXMyLmRlZmF1bHRbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWVQcm9wID0gbmV3VmFsdWVbcHJvcE5hbWVdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGlzIHByb3AgaXMgYSBzdHJpbmcgYW5kIHdlIGhhdmUgYSBzcGxpdHRlciwgc3BsaXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZS50eXBlLmhhc093blByb3BlcnR5KCdzcGxpdCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNwbGl0UHJvcCA9ICgwLCBfdXRpbHMuaXNTdHJpbmcpKHZhbHVlUHJvcCkgPyBuZXdWYWx1ZS50eXBlLnNwbGl0KHZhbHVlUHJvcCkgOiB7fTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHNwbGl0S2V5IGluIHNwbGl0UHJvcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3BsaXRQcm9wLmhhc093blByb3BlcnR5KHNwbGl0S2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbWJpbmVkS2V5ID0ga2V5ICsgc3BsaXRLZXk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHdlIGRvbid0IGhhdmUgYSBjaGlsZCB2YWx1ZSBmb3IgdGhpcyBrZXksIG1ha2Ugb25lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNoaWxkcmVuW2NvbWJpbmVkS2V5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkZWZhdWx0VmFsdWUgPSBuZXdWYWx1ZS50eXBlLmRlZmF1bHRQcm9wcyAmJiBuZXdWYWx1ZS50eXBlLmRlZmF1bHRQcm9wc1tzcGxpdEtleV0gPyBuZXdWYWx1ZS50eXBlLmRlZmF1bHRQcm9wc1tzcGxpdEtleV0gOiBuZXdWYWx1ZS50eXBlLmRlZmF1bHRQcm9wcyB8fCB7fTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuW2NvbWJpbmVkS2V5XSA9IF9leHRlbmRzKHt9LCBuZXdWYWx1ZSwgZGVmYXVsdFZhbHVlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudDoga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZEtleTogc3BsaXRLZXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBjaGlsZHJlbltjb21iaW5lZEtleV0udHlwZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzQ2hpbGRyZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW5bY29tYmluZWRLZXldW3Byb3BOYW1lXSA9IHBhcnNlRmxvYXQoc3BsaXRQcm9wW3NwbGl0S2V5XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSBoYXZlIGEgdGVtcGxhdGUgZnVuY3Rpb24sIGdlbmVyYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFuZXdWYWx1ZS50ZW1wbGF0ZSAmJiBuZXdWYWx1ZS50eXBlLnRlbXBsYXRlICYmICgwLCBfdXRpbHMuaXNTdHJpbmcpKHZhbHVlUHJvcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUudGVtcGxhdGUgPSBuZXdWYWx1ZS50eXBlLnRlbXBsYXRlKHZhbHVlUHJvcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChuZXdWYWx1ZS50eXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gX2V4dGVuZHMoe30sIG5ld1ZhbHVlLCBuZXdWYWx1ZS50eXBlLmRlZmF1bHRQcm9wcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZVByb3AgIT09IHVuZGVmaW5lZCAmJiBuZXdWYWx1ZS50eXBlLnBhcnNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWVbcHJvcE5hbWVdID0gbmV3VmFsdWUudHlwZS5wYXJzZSh2YWx1ZVByb3AsIG5ld1ZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gLy8gRW5kIHZhbHVlIHR5cGUgbm9uc2Vuc2VcblxuICAgICAgICAgICAgICAgIC8vIFNldCBgcHJldmAgdG8gYGN1cnJlbnRgIGZvciBmaXJzdCBmcmFtZSBhZnRlciBzZXRcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZS5wcmV2ID0gbmV3VmFsdWUuY3VycmVudDtcblxuICAgICAgICAgICAgICAgIC8vIElmIHRoaXMgdmFsdWUgZG9lc24ndCBoYXZlIGNoaWxkcmVuLCBhZGQgdG8gdmFsdWVLZXlzXG4gICAgICAgICAgICAgICAgaWYgKCFoYXNDaGlsZHJlbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy52YWx1ZUtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZUtleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gT3IgYWRkIHRvIHBhcmVudEtleXNcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUuY2hpbGRyZW4gPSBuZXdWYWx1ZS5jaGlsZHJlbiB8fCB7fTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnRLZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZXMoY2hpbGRyZW4pO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlc1trZXldID0gbmV3VmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgRGVjaWRlIHdoZXRoZXIgdGhpcyBBY3Rpb24gd2lsbCByZW5kZXIgb24gbmV4dCBmcmFtZVxuICAgICAgICAgQHBhcmFtIFtBY3Rpb25dXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgICAgICBAcGFyYW0gW251bWJlcl1cbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybiB0cnVlIHRvIHJlbmRlclxuICAgICovXG5cbiAgICBBY3Rpb24ucHJvdG90eXBlLndpbGxSZW5kZXIgPSBmdW5jdGlvbiB3aWxsUmVuZGVyKGFjdGlvbiwgZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgICAgICB2YXIgaGFzQ2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vIENoZWNrIGlmIGJhc2UgdmFsdWVzIGhhdmUgdXBkYXRlZFxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSB0aGlzLnZhbHVlS2V5c1tpXTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG5cbiAgICAgICAgICAgIC8vIFJ1biB0cmFuc2Zvcm0gZnVuY3Rpb24gKGlmIHByZXNlbnQpXG4gICAgICAgICAgICBpZiAodmFsdWUudHJhbnNmb3JtKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IHZhbHVlLnRyYW5zZm9ybSh2YWx1ZS5jdXJyZW50LCBrZXksIHRoaXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDYXAgbWluaW11bVxuICAgICAgICAgICAgaWYgKCgwLCBfdXRpbHMuaXNOdW0pKHZhbHVlLm1pbikpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gTWF0aC5tYXgodmFsdWUuY3VycmVudCwgdmFsdWUubWluKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ2FwIG1heGltdW1cbiAgICAgICAgICAgIGlmICgoMCwgX3V0aWxzLmlzTnVtKSh2YWx1ZS5tYXgpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IE1hdGgubWluKHZhbHVlLmN1cnJlbnQsIHZhbHVlLm1heCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJvdW5kIG51bWJlclxuICAgICAgICAgICAgaWYgKHZhbHVlLnJvdW5kKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IE1hdGgucm91bmQodmFsdWUuY3VycmVudCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhbHVlLmZyYW1lQ2hhbmdlID0gdmFsdWUuY3VycmVudCAtIHZhbHVlLnByZXY7XG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSB2ZWxvY2l0eVxuICAgICAgICAgICAgaWYgKCF0aGlzLmNhbGN1bGF0ZXNWZWxvY2l0eSkge1xuICAgICAgICAgICAgICAgIHZhbHVlLnZlbG9jaXR5ID0gKDAsIF9jYWxjLnNwZWVkUGVyU2Vjb25kKSh2YWx1ZS5mcmFtZUNoYW5nZSwgZWxhcHNlZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIHRoaXMgdmFsdWUgaGFzIGNoYW5nZWRcbiAgICAgICAgICAgIGlmICh2YWx1ZS5wcmV2ICE9PSB2YWx1ZS5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdmFsdWUucHJldiA9IHZhbHVlLmN1cnJlbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEFwcGVuZCB1bml0XG4gICAgICAgICAgICB2YXIgdmFsdWVGb3JTdGF0ZSA9IHZhbHVlLnR5cGUgJiYgdmFsdWUudHlwZS5zZXJpYWxpemUgPyB2YWx1ZS50eXBlLnNlcmlhbGl6ZSh2YWx1ZS5jdXJyZW50LCB2YWx1ZSkgOiB2YWx1ZS5jdXJyZW50O1xuXG4gICAgICAgICAgICAvLyBBZGQgdG8gc3RhdGUgaWYgdGhpcyBpcyBub3QgYSBjaGlsZCB2YXVlXG4gICAgICAgICAgICBpZiAoIXZhbHVlLnBhcmVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVba2V5XSA9IHZhbHVlRm9yU3RhdGU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWVzW3ZhbHVlLnBhcmVudF0uY2hpbGRyZW5bdmFsdWUuY2hpbGRLZXldID0gdmFsdWVGb3JTdGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSBwYXJlbnQgdmFsdWVzXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5udW1QYXJlbnRLZXlzOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSB0aGlzLnBhcmVudEtleXNbaV07XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuXG4gICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gdmFsdWUudHlwZS5jb21iaW5lKHZhbHVlLmNoaWxkcmVuLCB2YWx1ZS50ZW1wbGF0ZSk7XG5cbiAgICAgICAgICAgIHRoaXMuc3RhdGVba2V5XSA9IHZhbHVlLmN1cnJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5vbkZyYW1lKSB7XG4gICAgICAgICAgICB0aGlzLm9uRnJhbWUodGhpcy5zdGF0ZSwgdGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5vbkNsZWFudXAgPyB0cnVlIDogaGFzQ2hhbmdlZDtcbiAgICB9O1xuXG4gICAgQWN0aW9uLnByb3RvdHlwZS5pbmhlcml0ID0gZnVuY3Rpb24gaW5oZXJpdCgpIHtcbiAgICAgICAgdmFyIHByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMF07XG4gICAgICAgIHZhciB2YWx1ZXMgPSBwcm9wcy52YWx1ZXM7XG5cbiAgICAgICAgdmFyIHByb3BzVG9TZXQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFsndmFsdWVzJ10pO1xuXG4gICAgICAgIHZhciBuZXdBY3Rpb24gPSBfVGFzay5wcm90b3R5cGUuaW5oZXJpdC5jYWxsKHRoaXMsIHByb3BzVG9TZXQpO1xuXG4gICAgICAgIGlmICh2YWx1ZXMpIHtcbiAgICAgICAgICAgIG5ld0FjdGlvbi5zZXQoeyB2YWx1ZXM6IHZhbHVlcyB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXdBY3Rpb247XG4gICAgfTtcblxuICAgIEFjdGlvbi5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbiBwYXVzZSgpIHtcbiAgICAgICAgX1Rhc2sucHJvdG90eXBlLnN0b3AuY2FsbCh0aGlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIEFjdGlvbi5wcm90b3R5cGUucmVzdW1lID0gZnVuY3Rpb24gcmVzdW1lKCkge1xuICAgICAgICBfVGFzay5wcm90b3R5cGUuc3RhcnQuY2FsbCh0aGlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIEFjdGlvbi5wcm90b3R5cGUudG9nZ2xlID0gZnVuY3Rpb24gdG9nZ2xlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0FjdGl2ZSA/IHRoaXMucGF1c2UoKSA6IHRoaXMucmVzdW1lKCk7XG4gICAgfTtcblxuICAgIEFjdGlvbi5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgICAgdmFyIHZhbHVlcyA9IHRoaXMudmFsdWVzO1xuICAgICAgICBfVGFzay5wcm90b3R5cGUuc3RhcnQuY2FsbCh0aGlzKTtcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZXNba2V5XS5wcmV2ID0gdmFsdWVzW2tleV0ub3JpZ2luID0gdmFsdWVzW2tleV0uY3VycmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBBY3Rpb24uZXh0ZW5kRGVmYXVsdFZhbHVlID0gZnVuY3Rpb24gZXh0ZW5kRGVmYXVsdFZhbHVlKHByb3BzKSB7XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgdGhpcy5wcm90b3R5cGUuZGVmYXVsdFZhbHVlLCBwcm9wcyk7XG4gICAgfTtcblxuICAgIEFjdGlvbi5leHRlbmREZWZhdWx0UHJvcHMgPSBmdW5jdGlvbiBleHRlbmREZWZhdWx0UHJvcHMocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCB0aGlzLnByb3RvdHlwZS5kZWZhdWx0UHJvcHMsIHByb3BzKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIEFjdGlvbjtcbn0oX1Rhc2szLmRlZmF1bHQpO1xuXG5BY3Rpb24ucHJvdG90eXBlLmRlZmF1bHRWYWx1ZVByb3AgPSAnY3VycmVudCc7XG5BY3Rpb24ucHJvdG90eXBlLmRlZmF1bHRWYWx1ZSA9IHtcbiAgICBjdXJyZW50OiAwLFxuICAgIHZlbG9jaXR5OiAwLFxuICAgIHJvdW5kOiBmYWxzZSxcbiAgICBtaW46IHVuZGVmaW5lZCxcbiAgICBtYXg6IHVuZGVmaW5lZCxcbiAgICB0cmFuc2Zvcm06IHVuZGVmaW5lZFxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQWN0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMEZqZEdsdmJpNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdRVUZQUVN4SlFVRk5MSFZDUVVGMVFpd3dRa0ZCYVVJc1RVRkJha0k3TzBGQlJUZENMRWxCUVUwc2EwSkJRV3RDTzFGQlFVYzdVVUZCVHp0UlFVRlRPMUZCUVdFN1YwRkJZeXhSUVVGUkxFOUJRVklzUlVGQmFVSXNTMEZCYWtJc1JVRkJkMElzVjBGQmVFSTdRMEZCT1VNN08wbEJSV3hDT3pzN1FVRkRSaXhoUVVSRkxFMUJRMFlzUTBGQldTeExRVUZhTEVWQlFXMUNPemhDUVVScVFpeFJRVU5wUWpzN1FVRkRaaXhqUVVGTkxFdEJRVTRzUjBGQll5eEZRVUZrTEVOQlJHVTdRVUZGWml4alFVRk5MRk5CUVU0c1IwRkJhMElzUlVGQmJFSXNRMEZHWlR0QlFVZG1MR05CUVUwc1ZVRkJUaXhIUVVGdFFpeEZRVUZ1UWl4RFFVaGxPMmRFUVVsbUxHbENRVUZOTEV0QlFVNHNSMEZLWlR0TFFVRnVRanM3T3pzN096czdPMEZCUkVVc2NVSkJaVVlzY1VKQlFXZENPMWxCUVZvc09FUkJRVkVzYTBKQlFVazdPMEZCUTFvc1lVRkJTeXhOUVVGTUxFZEJRV01zUzBGQlN5eE5RVUZNTEVsQlFXVXNSVUZCWml4RFFVUkdPenRaUVVkS0xGTkJRVEJDTEUxQlFURkNMRTlCU0VrN08xbEJSMDhzYzBOQlFXVXNiVUpCU0hSQ096dEJRVWxhTEZsQlFVMHNZMEZCWXl4RlFVRmtPenM3UVVGS1RTeDNRa0ZQVGl4SFFVRk9MRmxCUVZVc1ZVRkJWanM3TzBGQlVGa3NXVUZWVWl4TFFVRkxMRTlCUVV3c1JVRkJZenRCUVVOa0xHZENRVUZKTEVOQlFVTXNTMEZCU3l4UFFVRk1MRVZCUVdNN08wRkJSV1lzY1VKQlFVc3NUMEZCVEN4SFFVRmxMRFpDUVVGakxFdEJRVXNzVDBGQlRDeERRVUUzUWl4RFFVWmxPenRCUVVsbUxHOUNRVUZKTEV0QlFVc3NUMEZCVEN4RFFVRmhMR05CUVdJc1JVRkJOa0k3UVVGRE4wSXNlVUpCUVVzc1YwRkJUQ3hIUVVGdFFpeExRVUZMTEU5QlFVd3NRMEZCWVN4alFVRmlMRU5CUVRSQ0xFdEJRVXNzVDBGQlRDeERRVUV2UXl4RFFVUTJRanRwUWtGQmFrTTdZVUZLU2pzN1FVRlRRU3hwUWtGQlN5eFJRVUZNTEVkQlFXZENMR1ZCUVdoQ0xFTkJWbU03VTBGQmJFSTdPenRCUVZaWkxHRkJkMEpRTEVsQlFVa3NSMEZCU2l4SlFVRlhMRXRCUVVzc1dVRkJUQ3hGUVVGdFFqdEJRVU12UWl4blFrRkJTU3hMUVVGTExGbEJRVXdzUTBGQmEwSXNZMEZCYkVJc1EwRkJhVU1zUjBGQmFrTXNTMEZCZVVNc1YwRkJWeXhqUVVGWUxFTkJRVEJDTEVkQlFURkNMRU5CUVhwRExFVkJRWGxGTzBGQlEzcEZMRFJDUVVGWkxFZEJRVm9zU1VGQmJVSXNWMEZCVnl4SFFVRllMRU5CUVc1Q0xFTkJSSGxGTzJGQlFUZEZPMU5CUkVvN096dEJRWGhDV1N4aFFTdENVQ3hKUVVGSkxFZEJRVW9zU1VGQlZ5eExRVUZMTEUxQlFVd3NSVUZCWVR0QlFVTjZRaXhuUWtGQlNTeExRVUZMTEUxQlFVd3NRMEZCV1N4alFVRmFMRU5CUVRKQ0xFZEJRVE5DTEVOQlFVb3NSVUZCY1VNN1FVRkRha01zY1VKQlFVc3NUVUZCVEN4RFFVRlpMRWRCUVZvc2FVSkJRWGRDTEV0QlFVc3NUVUZCVEN4RFFVRlpMRWRCUVZvc1IwRkJjVUlzV1VGQk4wTXNRMEZFYVVNN1lVRkJja003VTBGRVNqczdPMEZCTDBKWkxGbEJjME5TTEUxQlFVb3NSVUZCV1R0QlFVTlNMR2xDUVVGTExGTkJRVXdzUTBGQlpTeE5RVUZtTEVWQlFYVkNMRmRCUVhaQ096czdRVUZFVVN4blFrRkpVaXhEUVVGTExGbEJRVXdzUjBGQmIwSXNTMEZCU3l4VFFVRk1MRU5CUVdVc1RVRkJaaXhEUVVwYU8wRkJTMUlzYVVKQlFVc3NZVUZCVEN4SFFVRnhRaXhMUVVGTExGVkJRVXdzUTBGQlowSXNUVUZCYUVJc1EwRk1ZanRUUVVGYU96dEJRVkZCTEdWQlFVOHNTVUZCVUN4RFFUbERXVHM3TzBGQlptUXNjVUpCWjBWR0xHMUNRVUZKTEV0QlFVczdRVUZEVEN4bFFVRlBMRXRCUVVzc1MwRkJUQ3hEUVVGWExFZEJRVmdzUTBGQlVDeERRVVJMT3pzN1FVRm9SVkFzY1VKQmIwVkdMQ3RDUVVGVkxGRkJRVkVzVTBGQlV6czdRVUZGZGtJc1lVRkJTeXhKUVVGSkxFZEJRVW9zU1VGQlZ5eE5RVUZvUWl4RlFVRjNRanRCUVVOd1FpeG5Ra0ZCU1N4UFFVRlBMR05CUVZBc1EwRkJjMElzUjBGQmRFSXNRMEZCU2l4RlFVRm5RenRCUVVNMVFpeHZRa0ZCU1N4alFVRmpMRXRCUVdRc1EwRkVkMEk3UVVGRk5VSXNiMEpCUVUwc1YwRkJWeXhGUVVGWU96dEJRVVp6UWl4dlFrRkplRUlzVjBGQlZ5eExRVUZMTEUxQlFVd3NRMEZCV1N4SFFVRmFMR2xDUVVGM1FpeExRVUZMTEUxQlFVd3NRMEZCV1N4SFFVRmFMRVZCUVhoQ0xHZENRVUZyUkN4TFFVRkxMRmxCUVV3c1JVRkJjMElzVVVGQmVFVTdPenRCUVVwaExHOUNRVTk0UWl4RFFVRkRMR3RDUVVGTkxFOUJRVThzUjBGQlVDeERRVUZPTEVOQlFVUXNSVUZCY1VJN1FVRkRja0lzTmtKQlFWTXNTMEZCU3l4blFrRkJUQ3hEUVVGVUxFZEJRV3RETEU5QlFVOHNSMEZCVUN4RFFVRnNReXhEUVVSeFFqdHBRa0ZCZWtJc1RVRkZUenRCUVVOSUxEUkRRVUZuUWl4VlFVRmhMRTlCUVU4c1IwRkJVQ3hGUVVFM1FpeERRVVJITzJsQ1FVWlFPenM3UVVGUU5FSXNiMEpCWTNoQ0xFOUJRVThzUjBGQlVDeEZRVUZaTEU5QlFWb3NTMEZCZDBJc1UwRkJlRUlzU1VGQmNVTXNTMEZCU3l4UFFVRk1MRVZCUVdNN1FVRkRia1FzTmtKQlFWTXNUMEZCVkN4SFFVRnRRaXhMUVVGTExFOUJRVXdzUTBGQllTeEhRVUZpTEVOQlFXbENMRXRCUVVzc1QwRkJUQ3hGUVVGakxFZEJRUzlDTEVOQlFXNUNMRU5CUkcxRU8ybENRVUYyUkRzN08wRkJaRFJDTEc5Q1FXMUNlRUlzUTBGQlF5eFRRVUZUTEVsQlFWUXNTVUZCYVVJc1MwRkJTeXhQUVVGTUxFbEJRV2RDTEV0QlFVc3NUMEZCVEN4RFFVRmhMR05CUVdJc1JVRkJOa0k3UVVGREwwUXNOa0pCUVZNc1NVRkJWQ3hIUVVGblFpeExRVUZMTEU5QlFVd3NRMEZCWVN4alFVRmlMRU5CUVRSQ0xFZEJRVFZDTEVOQlFXaENMRU5CUkN0RU8ybENRVUZ1UlRzN08wRkJia0kwUWl4dlFrRjNRbmhDTEVOQlFVTXNVMEZCVXl4SlFVRlVMRWxCUVdsQ0xFTkJRVU1zUzBGQlN5eE5RVUZNTEVOQlFWa3NSMEZCV2l4RFFVRkVMRVZCUVcxQ08wRkJRM0pETERaQ1FVRlRMRWxCUVZRc1IwRkJaMElzYzBKQlFXZENMRkZCUVdoQ0xFTkJRV2hDTEVOQlJIRkRPMmxDUVVGNlF6czdPMEZCZUVJMFFpeHZRa0UyUW5oQ0xGTkJRVk1zU1VGQlZDeEZRVUZsTzBGQlEyWXNlVUpCUVVzc1NVRkJTU3hKUVVGSkxFTkJRVW9zUlVGQlR5eEpRVUZKTEc5Q1FVRktMRVZCUVRCQ0xFZEJRVEZETEVWQlFTdERPMEZCUXpORExEUkNRVUZOTEZkQlFWY3NNRUpCUVdsQ0xFTkJRV3BDTEVOQlFWZ3NRMEZFY1VNN1FVRkZNME1zTkVKQlFVMHNXVUZCV1N4VFFVRlRMRkZCUVZRc1EwRkJXanM3TzBGQlJuRkRMRFJDUVV0MlF5eFRRVUZUTEVsQlFWUXNRMEZCWXl4alFVRmtMRU5CUVRaQ0xFOUJRVGRDTEVOQlFVb3NSVUZCTWtNN1FVRkRka01zWjBOQlFVMHNXVUZCV1N4eFFrRkJVeXhUUVVGVUxFbEJRWE5DTEZOQlFWTXNTVUZCVkN4RFFVRmpMRXRCUVdRc1EwRkJiMElzVTBGQmNFSXNRMEZCZEVJc1IwRkJkVVFzUlVGQmRrUXNRMEZFY1VJN08wRkJSM1pETEdsRFFVRkxMRWxCUVVrc1VVRkJTaXhKUVVGblFpeFRRVUZ5UWl4RlFVRm5RenRCUVVNMVFpeHZRMEZCU1N4VlFVRlZMR05CUVZZc1EwRkJlVUlzVVVGQmVrSXNRMEZCU2l4RlFVRjNRenRCUVVOd1F5eDNRMEZCVFN4alFVRmpMRTFCUVUwc1VVRkJUanM3TzBGQlJHZENMSGREUVVsb1F5eERRVUZETEZOQlFWTXNWMEZCVkN4RFFVRkVMRVZCUVhkQ08wRkJRM2hDTERSRFFVRk5MR1ZCUVdVc1VVRkJReXhEUVVGVExFbEJRVlFzUTBGQll5eFpRVUZrTEVsQlFUaENMRk5CUVZNc1NVRkJWQ3hEUVVGakxGbEJRV1FzUTBGQk1rSXNVVUZCTTBJc1EwRkJPVUlzUjBGQmMwVXNVMEZCVXl4SlFVRlVMRU5CUVdNc1dVRkJaQ3hEUVVFeVFpeFJRVUV6UWl4RFFVRjJSU3hIUVVFNFJ5eFRRVUZUTEVsQlFWUXNRMEZCWXl4WlFVRmtMRWxCUVRoQ0xFVkJRVGxDTEVOQlJETkhPenRCUVVkNFFpeHBSRUZCVXl4WFFVRlVMR2xDUVVOUExGVkJRMEU3UVVGRFNDeHZSRUZCVVN4SFFVRlNPMEZCUTBFc2MwUkJRVlVzVVVGQlZqc3dRMEZLU2l4RFFVaDNRanM3UVVGVmVFSXNLME5CUVU4c1UwRkJVeXhYUVVGVUxFVkJRWE5DTEVsQlFYUkNMRU5CVm1sQ08zRkRRVUUxUWpzN1FVRmhRU3hyUkVGQll5eEpRVUZrTEVOQmFrSnZRenRCUVd0Q2NFTXNOa05CUVZNc1YwRkJWQ3hGUVVGelFpeFJRVUYwUWl4SlFVRnJReXhYUVVGWExGVkJRVlVzVVVGQlZpeERRVUZZTEVOQlFXeERMRU5CYkVKdlF6dHBRMEZCZUVNN05rSkJSRW83T3p0QlFVaDFReXhuUTBFeVFtNURMRU5CUVVNc1UwRkJVeXhSUVVGVUxFbEJRWEZDTEZOQlFWTXNTVUZCVkN4RFFVRmpMRkZCUVdRc1NVRkJNRUlzY1VKQlFWTXNVMEZCVkN4RFFVRm9SQ3hGUVVGeFJUdEJRVU55UlN4NVEwRkJVeXhSUVVGVUxFZEJRVzlDTEZOQlFWTXNTVUZCVkN4RFFVRmpMRkZCUVdRc1EwRkJkVUlzVTBGQmRrSXNRMEZCY0VJc1EwRkVjVVU3TmtKQlFYcEZPM2xDUVROQ1NpeE5RVGhDVHl4SlFVRkpMRk5CUVZNc1NVRkJWQ3hEUVVGakxGbEJRV1FzUlVGQk5FSTdRVUZEYmtNc2IwUkJRV2RDTEZWQlFXRXNVMEZCVXl4SlFVRlVMRU5CUVdNc1dVRkJaQ3hEUVVFM1FpeERRVVJ0UXp0NVFrRkJhRU03TzBGQlNWQXNORUpCUVVrc1kwRkJZeXhUUVVGa0xFbEJRVEpDTEZOQlFWTXNTVUZCVkN4RFFVRmpMRXRCUVdRc1JVRkJjVUk3UVVGRGFFUXNjVU5CUVZNc1VVRkJWQ3hKUVVGeFFpeFRRVUZUTEVsQlFWUXNRMEZCWXl4TFFVRmtMRU5CUVc5Q0xGTkJRWEJDTEVWQlFTdENMRkZCUVM5Q0xFTkJRWEpDTEVOQlJHZEVPM2xDUVVGd1JEdHhRa0YyUTBvN2FVSkJSRW83T3p0QlFUZENORUlzZDBKQk5FVTFRaXhEUVVGVExFbEJRVlFzUjBGQlowSXNVMEZCVXl4UFFVRlVPenM3UVVFMVJWa3NiMEpCSzBWNFFpeERRVUZETEZkQlFVUXNSVUZCWXp0QlFVTmtMSGRDUVVGSkxFdEJRVXNzVTBGQlRDeERRVUZsTEU5QlFXWXNRMEZCZFVJc1IwRkJka0lzVFVGQlowTXNRMEZCUXl4RFFVRkVMRVZCUVVrN1FVRkRjRU1zTmtKQlFVc3NVMEZCVEN4RFFVRmxMRWxCUVdZc1EwRkJiMElzUjBGQmNFSXNSVUZFYjBNN2NVSkJRWGhET3pzN1FVRkVZeXhwUWtGQmJFSXNUVUZOVHp0QlFVTklMR2xEUVVGVExGRkJRVlFzUjBGQmIwSXNVMEZCVXl4UlFVRlVMRWxCUVhGQ0xFVkJRWEpDTEVOQlJHcENPenRCUVVkSUxEUkNRVUZKTEV0QlFVc3NWVUZCVEN4RFFVRm5RaXhQUVVGb1FpeERRVUYzUWl4SFFVRjRRaXhOUVVGcFF5eERRVUZETEVOQlFVUXNSVUZCU1R0QlFVTnlReXhwUTBGQlN5eFZRVUZNTEVOQlFXZENMRWxCUVdoQ0xFTkJRWEZDTEVkQlFYSkNMRVZCUkhGRE8zbENRVUY2UXpzN1FVRkpRU3cyUWtGQlN5eFRRVUZNTEVOQlFXVXNVVUZCWml4RlFWQkhPM0ZDUVU1UU96dEJRV2RDUVN4eFFrRkJTeXhOUVVGTUxFTkJRVmtzUjBGQldpeEpRVUZ0UWl4UlFVRnVRaXhEUVM5R05FSTdZVUZCYUVNN1UwRkVTanM3T3pzN096czdPenM3UVVGMFJVWXNjVUpCYlV4R0xHbERRVUZYTEZGQlFWRXNXVUZCV1N4VFFVRlRPMEZCUTNCRExGbEJRVWtzWVVGQllTeExRVUZpT3pzN1FVRkVaME1zWVVGSkwwSXNTVUZCU1N4SlFVRkpMRU5CUVVvc1JVRkJUeXhKUVVGSkxFdEJRVXNzV1VGQlRDeEZRVUZ0UWl4SFFVRjJReXhGUVVFMFF6dEJRVU40UXl4blFrRkJUU3hOUVVGTkxFdEJRVXNzVTBGQlRDeERRVUZsTEVOQlFXWXNRMEZCVGl4RFFVUnJRenRCUVVWNFF5eG5Ra0ZCVFN4UlFVRlJMRXRCUVVzc1RVRkJUQ3hEUVVGWkxFZEJRVm9zUTBGQlVqczdPMEZCUm10RExHZENRVXR3UXl4TlFVRk5MRk5CUVU0c1JVRkJhVUk3UVVGRGFrSXNjMEpCUVUwc1QwRkJUaXhIUVVGblFpeE5RVUZOTEZOQlFVNHNRMEZCWjBJc1RVRkJUU3hQUVVGT0xFVkJRV1VzUjBGQkwwSXNSVUZCYjBNc1NVRkJjRU1zUTBGQmFFSXNRMEZFYVVJN1lVRkJja0k3T3p0QlFVeDNReXhuUWtGVmNFTXNhMEpCUVUwc1RVRkJUU3hIUVVGT0xFTkJRVllzUlVGQmMwSTdRVUZEYkVJc2MwSkJRVTBzVDBGQlRpeEhRVUZuUWl4TFFVRkxMRWRCUVV3c1EwRkJVeXhOUVVGTkxFOUJRVTRzUlVGQlpTeE5RVUZOTEVkQlFVNHNRMEZCZUVNc1EwRkVhMEk3WVVGQmRFSTdPenRCUVZaM1F5eG5Ra0ZsY0VNc2EwSkJRVTBzVFVGQlRTeEhRVUZPTEVOQlFWWXNSVUZCYzBJN1FVRkRiRUlzYzBKQlFVMHNUMEZCVGl4SFFVRm5RaXhMUVVGTExFZEJRVXdzUTBGQlV5eE5RVUZOTEU5QlFVNHNSVUZCWlN4TlFVRk5MRWRCUVU0c1EwRkJlRU1zUTBGRWEwSTdZVUZCZEVJN096dEJRV1ozUXl4blFrRnZRbkJETEUxQlFVMHNTMEZCVGl4RlFVRmhPMEZCUTJJc2MwSkJRVTBzVDBGQlRpeEhRVUZuUWl4TFFVRkxMRXRCUVV3c1EwRkJWeXhOUVVGTkxFOUJRVTRzUTBGQk0wSXNRMEZFWVR0aFFVRnFRanM3UVVGSlFTeHJRa0ZCVFN4WFFVRk9MRWRCUVc5Q0xFMUJRVTBzVDBGQlRpeEhRVUZuUWl4TlFVRk5MRWxCUVU0N096dEJRWGhDU1N4blFrRXlRbkJETEVOQlFVTXNTMEZCU3l4clFrRkJUQ3hGUVVGNVFqdEJRVU14UWl4elFrRkJUU3hSUVVGT0xFZEJRV2xDTERCQ1FVRmxMRTFCUVUwc1YwRkJUaXhGUVVGdFFpeFBRVUZzUXl4RFFVRnFRaXhEUVVRd1FqdGhRVUU1UWpzN08wRkJNMEozUXl4blFrRm5RM0JETEUxQlFVMHNTVUZCVGl4TFFVRmxMRTFCUVUwc1QwRkJUaXhGUVVGbE8wRkJRemxDTERaQ1FVRmhMRWxCUVdJc1EwRkVPRUk3UVVGRk9VSXNjMEpCUVUwc1NVRkJUaXhIUVVGaExFMUJRVTBzVDBGQlRpeERRVVpwUWp0aFFVRnNRenM3TzBGQmFFTjNReXhuUWtGelEyeERMR2RDUVVGblFpeExRVUZETEVOQlFVMHNTVUZCVGl4SlFVRmpMRTFCUVUwc1NVRkJUaXhEUVVGWExGTkJRVmdzUjBGQmQwSXNUVUZCVFN4SlFVRk9MRU5CUVZjc1UwRkJXQ3hEUVVGeFFpeE5RVUZOTEU5QlFVNHNSVUZCWlN4TFFVRndReXhEUVVGMlF5eEhRVUZ2Uml4TlFVRk5MRTlCUVU0N096dEJRWFJEYkVVc1owSkJlVU53UXl4RFFVRkRMRTFCUVUwc1RVRkJUaXhGUVVGak8wRkJRMllzY1VKQlFVc3NTMEZCVEN4RFFVRlhMRWRCUVZnc1NVRkJhMElzWVVGQmJFSXNRMEZFWlR0aFFVRnVRaXhOUVVWUE8wRkJRMGdzY1VKQlFVc3NUVUZCVEN4RFFVRlpMRTFCUVUwc1RVRkJUaXhEUVVGYUxFTkJRVEJDTEZGQlFURkNMRU5CUVcxRExFMUJRVTBzVVVGQlRpeERRVUZ1UXl4SFFVRnhSQ3hoUVVGeVJDeERRVVJITzJGQlJsQTdVMEY2UTBvN096dEJRVXB2UXl4aFFYRkVMMElzU1VGQlNTeEpRVUZKTEVOQlFVb3NSVUZCVHl4SlFVRkpMRXRCUVVzc1lVRkJUQ3hGUVVGdlFpeEhRVUY0UXl4RlFVRTJRenRCUVVONlF5eG5Ra0ZCVFN4TlFVRk5MRXRCUVVzc1ZVRkJUQ3hEUVVGblFpeERRVUZvUWl4RFFVRk9MRU5CUkcxRE8wRkJSWHBETEdkQ1FVRk5MRkZCUVZFc1MwRkJTeXhOUVVGTUxFTkJRVmtzUjBGQldpeERRVUZTTEVOQlJtMURPenRCUVVsNlF5eHJRa0ZCVFN4UFFVRk9MRWRCUVdkQ0xFMUJRVTBzU1VGQlRpeERRVUZYTEU5QlFWZ3NRMEZCYlVJc1RVRkJUU3hSUVVGT0xFVkJRV2RDTEUxQlFVMHNVVUZCVGl4RFFVRnVSQ3hEUVVwNVF6czdRVUZOZWtNc2FVSkJRVXNzUzBGQlRDeERRVUZYTEVkQlFWZ3NTVUZCYTBJc1RVRkJUU3hQUVVGT0xFTkJUblZDTzFOQlFUZERPenRCUVZOQkxGbEJRVWtzUzBGQlN5eFBRVUZNTEVWQlFXTTdRVUZEWkN4cFFrRkJTeXhQUVVGTUxFTkJRV0VzUzBGQlN5eExRVUZNTEVWQlFWa3NTVUZCZWtJc1JVRkVZenRUUVVGc1FqczdRVUZKUVN4bFFVRlBMRWxCUVVNc1EwRkJTeXhUUVVGTUxFZEJRV3RDTEVsQlFXNUNMRWRCUVRCQ0xGVkJRVEZDTEVOQmJFVTJRanM3TzBGQmJreDBReXh4UWtGM1VFWXNOa0pCUVc5Q08xbEJRVm9zT0VSQlFWRXNhMEpCUVVrN1dVRkRVaXhUUVVFd1FpeE5RVUV4UWl4UFFVUlJPenRaUVVOSExITkRRVUZsTEcxQ1FVUnNRanM3UVVGRmFFSXNXVUZCVFN4WlFVRlpMR2RDUVVGTkxFOUJRVTRzV1VGQll5eFZRVUZrTEVOQlFWb3NRMEZHVlRzN1FVRkphRUlzV1VGQlNTeE5RVUZLTEVWQlFWazdRVUZEVWl4elFrRkJWU3hIUVVGV0xFTkJRV01zUlVGQlJTeGpRVUZHTEVWQlFXUXNSVUZFVVR0VFFVRmFPenRCUVVsQkxHVkJRVThzVTBGQlVDeERRVkpuUWpzN08wRkJlRkJzUWl4eFFrRnRVVVlzZVVKQlFWRTdRVUZEU2l4M1FrRkJUU3hKUVVGT0xGbEJSRWs3UVVGRlNpeGxRVUZQTEVsQlFWQXNRMEZHU1RzN08wRkJibEZPTEhGQ1FYZFJSaXd5UWtGQlV6dEJRVU5NTEhkQ1FVRk5MRXRCUVU0c1dVRkVTenRCUVVWTUxHVkJRVThzU1VGQlVDeERRVVpMT3pzN1FVRjRVVkFzY1VKQk5sRkdMREpDUVVGVE8wRkJRMHdzWlVGQlR5eExRVUZMTEZGQlFVd3NSMEZCWjBJc1MwRkJTeXhMUVVGTUxFVkJRV2hDTEVkQlFTdENMRXRCUVVzc1RVRkJUQ3hGUVVFdlFpeERRVVJHT3pzN1FVRTNVVkFzY1VKQmFWSkdMSGxDUVVGUk8wRkJRMG9zV1VGQlRTeFRRVUZUTEV0QlFVc3NUVUZCVEN4RFFVUllPMEZCUlVvc2QwSkJRVTBzUzBGQlRpeFpRVVpKT3p0QlFVbEtMR0ZCUVVzc1NVRkJTU3hIUVVGS0xFbEJRVmNzVFVGQmFFSXNSVUZCZDBJN1FVRkRjRUlzWjBKQlFVa3NUMEZCVHl4alFVRlFMRU5CUVhOQ0xFZEJRWFJDTEVOQlFVb3NSVUZCWjBNN1FVRkROVUlzZFVKQlFVOHNSMEZCVUN4RlFVRlpMRWxCUVZvc1IwRkJiVUlzVDBGQlR5eEhRVUZRTEVWQlFWa3NUVUZCV2l4SFFVRnhRaXhQUVVGUExFZEJRVkFzUlVGQldTeFBRVUZhTEVOQlJGbzdZVUZCYUVNN1UwRkVTanM3UVVGTlFTeGxRVUZQTEVsQlFWQXNRMEZXU1RzN08wRkJhbEpPTEZkQk9GSkxMR2xFUVVGdFFpeFBRVUZQTzBGQlF6ZENMRFJDUVVGWkxFdEJRVXNzVTBGQlRDeERRVUZsTEZsQlFXWXNSVUZCWjBNc1RVRkJOVU1zUTBGRU5rSTdPenRCUVRsU0wwSXNWMEZyVTBzc2FVUkJRVzFDTEU5QlFVODdRVUZETjBJc05FSkJRVmtzUzBGQlN5eFRRVUZNTEVOQlFXVXNXVUZCWml4RlFVRm5ReXhOUVVFMVF5eERRVVEyUWpzN08xZEJiRk12UWpzN08wRkJkVk5PTEU5QlFVOHNVMEZCVUN4RFFVRnBRaXhuUWtGQmFrSXNSMEZCYjBNc1UwRkJjRU03UVVGRFFTeFBRVUZQTEZOQlFWQXNRMEZCYVVJc1dVRkJha0lzUjBGQlowTTdRVUZETlVJc1lVRkJVeXhEUVVGVU8wRkJRMEVzWTBGQlZTeERRVUZXTzBGQlEwRXNWMEZCVHl4TFFVRlFPMEZCUTBFc1UwRkJTeXhUUVVGTU8wRkJRMEVzVTBGQlN5eFRRVUZNTzBGQlEwRXNaVUZCVnl4VFFVRllPME5CVGtvN08ydENRVk5sSWl3aVptbHNaU0k2SWtGamRHbHZiaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnVkdGemF5Qm1jbTl0SUNjdUxpOTBZWE5yTDFSaGMyc25PMXh1YVcxd2IzSjBJSHNnYzNCbFpXUlFaWEpUWldOdmJtUWdmU0JtY205dElDY3VMaTlwYm1NdlkyRnNZeWM3WEc1cGJYQnZjblFnZXlCcGMwNTFiU3dnYVhOUFltb3NJR2x6VTNSeWFXNW5JSDBnWm5KdmJTQW5MaTR2YVc1akwzVjBhV3h6Snp0Y2JtbHRjRzl5ZENCa1pYUmxZM1JXWVd4MVpWUjVjR1VnWm5KdmJTQW5MaTR2ZG1Gc2RXVXRkSGx3WlhNdlpHVjBaV04wSnp0Y2JtbHRjRzl5ZENCT1ZVMUZVa2xEUVV4ZlZrRk1WVVZUSUdaeWIyMGdKeTR1TDJsdVl5OXVkVzFsY21sallXd3RkbUZzZFdWekp6dGNibWx0Y0c5eWRDQmtaWFJsWTNSQlpHRndkR1Z5SUdaeWIyMGdKeTR1TDJsdVl5OWtaWFJsWTNRdFlXUmhjSFJsY2ljN1hHNWNibU52Ym5OMElFNVZUVjlPVlUxRlVrbERRVXhmVmtGTVZVVlRJRDBnVGxWTlJWSkpRMEZNWDFaQlRGVkZVeTVzWlc1bmRHZzdYRzVjYm1OdmJuTjBJR1JsWm1GMWJIUlNaVzVrWlhKbGNpQTlJQ2g3SUhOMFlYUmxMQ0JoWkdGd2RHVnlMQ0JoWkdGd2RHVnlSR0YwWVN3Z1pXeGxiV1Z1ZENCOUtTQTlQaUJoWkdGd2RHVnlLR1ZzWlcxbGJuUXNJSE4wWVhSbExDQmhaR0Z3ZEdWeVJHRjBZU2s3WEc1Y2JtTnNZWE56SUVGamRHbHZiaUJsZUhSbGJtUnpJRlJoYzJzZ2UxeHVJQ0FnSUdOdmJuTjBjblZqZEc5eUtIQnliM0J6S1NCN1hHNGdJQ0FnSUNBZ0lIQnliM0J6TG5OMFlYUmxJRDBnZTMwN1hHNGdJQ0FnSUNBZ0lIQnliM0J6TG5aaGJIVmxTMlY1Y3lBOUlGdGRPMXh1SUNBZ0lDQWdJQ0J3Y205d2N5NXdZWEpsYm5STFpYbHpJRDBnVzEwN1hHNGdJQ0FnSUNBZ0lITjFjR1Z5S0hCeWIzQnpLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQXZLbHh1SUNBZ0lDQWdJQ0FqSUZObGRDQkJZM1JwYjI0Z2NISnZjR1Z5ZEdsbGMxeHVJQ0FnSUNBZ0lDQWpJeUJUWlhRZ2RYTmxjaTFrWldacGJtVmtJRUZqZEdsdmJpQndjbTl3WlhKMGFXVnpYRzVjYmlBZ0lDQWdJQ0FnUUhCaGNtRnRJRnR2WW1wbFkzUmRYRzRnSUNBZ0lDQWdJRUJ5WlhSMWNtNGdXMEZqZEdsdmJsMWNiaUFnSUNBcUwxeHVJQ0FnSUhObGRDaHdjbTl3Y3lBOUlIdDlLU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVkbUZzZFdWeklEMGdkR2hwY3k1MllXeDFaWE1nZkh3Z2UzMDdYRzVjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdleUIyWVd4MVpYTXNJQzR1TG5CeWIzQnpWRzlUWlhRZ2ZTQTlJSEJ5YjNCek8xeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCcGJtaGxjbWwwWVdKc1pTQTlJSHQ5TzF4dVhHNGdJQ0FnSUNBZ0lDOHZJRk5sZENCdWIyNHRZMjl1YzNWdFpXUWdjSEp2Y0dWeWRHbGxjMXh1SUNBZ0lDQWdJQ0J6ZFhCbGNpNXpaWFFvY0hKdmNITlViMU5sZENrN1hHNWNiaUFnSUNBZ0lDQWdMeThnUkdWMFpXTjBJR052Y25KbFkzUWdZR0ZrWVhCMFpYSmdJR2xtSUc1dmJtVWdaWGhwYzNSeklHRnVaQ0JnWld4bGJXVnVkR0FnYVhNZ1ltVnBibWNnYzJWMFhHNGdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxtVnNaVzFsYm5RcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDZ2hkR2hwY3k1aFpHRndkR1Z5S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0x5OGdSSFZqYTNSNWNHbHphQ0JqYUdWamF5Qm1iM0lnUVdSaGNIUmxjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVlXUmhjSFJsY2lBOUlHUmxkR1ZqZEVGa1lYQjBaWElvZEdocGN5NWxiR1Z0Wlc1MEtUdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbUZrWVhCMFpYSXVaMlYwUld4bGJXVnVkRVJoZEdFcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NWhaR0Z3ZEdWeVJHRjBZU0E5SUhSb2FYTXVZV1JoY0hSbGNpNW5aWFJGYkdWdFpXNTBSR0YwWVNoMGFHbHpMbVZzWlcxbGJuUXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV2YmxKbGJtUmxjaUE5SUdSbFptRjFiSFJTWlc1a1pYSmxjanRjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDOHZJRkJ5YVcxbElHRnVJRzlpYW1WamRDQjBieUJwYm1obGNtbDBJR1p5YjIwc0lIZHBkR2dnYjI1c2VTQmdkbUZzZFdWZ0lIQnliM0JsY25ScFpYTmNiaUFnSUNBZ0lDQWdabTl5SUNoc1pYUWdhMlY1SUdsdUlIUm9hWE11WkdWbVlYVnNkRlpoYkhWbEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9kR2hwY3k1a1pXWmhkV3gwVm1Gc2RXVXVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2EyVjVLU0FtSmlCd2NtOXdjMVJ2VTJWMExtaGhjMDkzYmxCeWIzQmxjblI1S0d0bGVTa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwYm1obGNtbDBZV0pzWlZ0clpYbGRJRDBnY0hKdmNITlViMU5sZEZ0clpYbGRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnTHk4Z1ZYQmtZWFJsSUdWNGFYTjBhVzVuSUhaaGJIVmxjeUIzYVhSb0lHbHVhR1Z5YVhSaFlteGxJSEJ5YjNCbGNuUnBaWE5jYmlBZ0lDQWdJQ0FnWm05eUlDaHNaWFFnYTJWNUlHbHVJSFJvYVhNdWRtRnNkV1Z6S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RHaHBjeTUyWVd4MVpYTXVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2EyVjVLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVkbUZzZFdWelcydGxlVjBnUFNCN0lDNHVMblJvYVhNdWRtRnNkV1Z6VzJ0bGVWMHNJQzR1TG1sdWFHVnlhWFJoWW14bElIMDdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0F2THlCVmNHUmhkR1ZjYmlBZ0lDQWdJQ0FnYVdZZ0tIWmhiSFZsY3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXpaWFJXWVd4MVpYTW9kbUZzZFdWekxDQnBibWhsY21sMFlXSnNaU2s3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUZCeVpXTnZiWEIxZEdVZ2JuVnRZbVZ5SUc5bUlIWmhiSFZsSUd0bGVTQmhibVFnY0dGeVpXNTBJR3RsZVhNZ2RHOGdZWFp2YVdRZ2NHVnlMV1p5WVcxbElHMWxZWE4xY21WdFpXNTBYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbTUxYlZaaGJIVmxTMlY1Y3lBOUlIUm9hWE11ZG1Gc2RXVkxaWGx6TG14bGJtZDBhRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11Ym5WdFVHRnlaVzUwUzJWNWN5QTlJSFJvYVhNdWNHRnlaVzUwUzJWNWN5NXNaVzVuZEdnN1hHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3p0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JuWlhRb2EyVjVLU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxuTjBZWFJsVzJ0bGVWMDdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2MyVjBWbUZzZFdWektIWmhiSFZsY3l3Z2FXNW9aWEpwZENrZ2UxeHVJQ0FnSUNBZ0lDQXZMeUJKZEdWeVlYUmxJRzkyWlhJZ1lXeHNJR2x1WTI5dGFXNW5JSFpoYkhWbGN5QmhibVFnYzJWMFhHNGdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHdGxlU0JwYmlCMllXeDFaWE1wSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMllXeDFaWE11YUdGelQzZHVVSEp2Y0dWeWRIa29hMlY1S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHeGxkQ0JvWVhORGFHbHNaSEpsYmlBOUlHWmhiSE5sTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJR05vYVd4a2NtVnVJRDBnZTMwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0x5OGdUV1Z5WjJVZ2FXNTBieUJsZUdsemRHbHVaeUIyWVd4MVpTQnZjaUJqY21WaGRHVWdibVYzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYkdWMElHNWxkMVpoYkhWbElEMGdkR2hwY3k1MllXeDFaWE5iYTJWNVhTQS9JSHNnTGk0dWRHaHBjeTUyWVd4MVpYTmJhMlY1WFNCOUlEb2dleUF1TGk1MGFHbHpMbVJsWm1GMWJIUldZV3gxWlN3Z0xpNHVhVzVvWlhKcGRDQjlPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1NXWWdkbUZzZFdWeklHbHpJRzV2ZENCaGJpQnZZbXBsWTNRc0lHRnpjMmxuYmlCMllXeDFaU0IwYnlCa1pXWmhkV3gwSUhCeWIzQmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvSVdselQySnFLSFpoYkhWbGMxdHJaWGxkS1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J1WlhkV1lXeDFaVnQwYUdsekxtUmxabUYxYkhSV1lXeDFaVkJ5YjNCZElEMGdkbUZzZFdWelcydGxlVjA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JtVjNWbUZzZFdVZ1BTQjdJQzR1TG01bGQxWmhiSFZsTENBdUxpNTJZV3gxWlhOYmEyVjVYU0I5TzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDOHZJRWxtSUhkbEozWmxJR2R2ZENCaGJpQmhaR0Z3ZEdWeUxDQm5aWFFnZEdobElHTjFjbkpsYm5RZ2RtRnNkV1ZjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RtRnNkV1Z6VzJ0bGVWMHVZM1Z5Y21WdWRDQTlQVDBnZFc1a1pXWnBibVZrSUNZbUlIUm9hWE11WVdSaGNIUmxjaWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnVaWGRXWVd4MVpTNWpkWEp5Wlc1MElEMGdkR2hwY3k1aFpHRndkR1Z5TG1kbGRDaDBhR2x6TG1Wc1pXMWxiblFzSUd0bGVTazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1NXWWdkMlVnWkc5dUozUWdhR0YyWlNCaElIWmhiSFZsSUhSNWNHVWdZVzVrSUhkbElHUnZJR2hoZG1VZ1lXNGdRV1JoY0hSbGNpd2dZMmhsWTJzZ1ptOXlJSFI1Y0dVZ2QybDBhQ0IyWVd4MVpTQnJaWGxjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb0lXNWxkMVpoYkhWbExuUjVjR1VnSmlZZ2RHaHBjeTVoWkdGd2RHVnlJQ1ltSUhSb2FYTXVZV1JoY0hSbGNpNWphR1ZqYTFaaGJIVmxWSGx3WlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J1WlhkV1lXeDFaUzUwZVhCbElEMGdkR2hwY3k1aFpHRndkR1Z5TG1Ob1pXTnJWbUZzZFdWVWVYQmxLR3RsZVNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdMeThnU1dZZ2QyVWdjM1JwYkd3Z1pHOXVKM1FnYUdGMlpTQmhJSFpoYkhWbElIUjVjR1VnWVc1a0lIUm9hWE1nYVhNZ2RHaGxJR1pwY25OMElIUnBiV1VnZDJVbmRtVWdjMlYwSUhSb2FYTWdkbUZzZFdVc0lHTm9aV05ySUc1MWJXVnlhV05oYkNCMllXeDFaWE1nWm05eUlITjBjbWx1WjNNZ1lXNWtJSFJsYzNSY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9JVzVsZDFaaGJIVmxMblI1Y0dVZ0ppWWdJWFJvYVhNdWRtRnNkV1Z6VzJ0bGVWMHBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JtVjNWbUZzZFdVdWRIbHdaU0E5SUdSbGRHVmpkRlpoYkhWbFZIbHdaU2h1WlhkV1lXeDFaU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0x5OGdTV1lnZDJVZ2FHRjJaU0JoSUhaaGJIVmxJSFI1Y0dVc0lHaGhibVJzWlM0Z1ZHaHBjeUJwY3lCdGVTQnNaV0Z6ZENCbVlYWnZkWEpwZEdVZ2NHRnlkQ0J2WmlCUWIzQnRiM1JwYjI0c0lITnZMaTR1SUdWdWFtOTVMbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNodVpYZFdZV3gxWlM1MGVYQmxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2dUbFZOWDA1VlRVVlNTVU5CVEY5V1FVeFZSVk03SUdrckt5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2NISnZjRTVoYldVZ1BTQk9WVTFGVWtsRFFVeGZWa0ZNVlVWVFcybGRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2RtRnNkV1ZRY205d0lEMGdibVYzVm1Gc2RXVmJjSEp2Y0U1aGJXVmRPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0F2THlCSlppQjBhR2x6SUhCeWIzQWdhWE1nWVNCemRISnBibWNnWVc1a0lIZGxJR2hoZG1VZ1lTQnpjR3hwZEhSbGNpd2djM0JzYVhSY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDaHVaWGRXWVd4MVpTNTBlWEJsTG1oaGMwOTNibEJ5YjNCbGNuUjVLQ2R6Y0d4cGRDY3BLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnYzNCc2FYUlFjbTl3SUQwZ2FYTlRkSEpwYm1jb2RtRnNkV1ZRY205d0tTQS9JRzVsZDFaaGJIVmxMblI1Y0dVdWMzQnNhWFFvZG1Gc2RXVlFjbTl3S1NBNklIdDlPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2MzQnNhWFJMWlhrZ2FXNGdjM0JzYVhSUWNtOXdLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoemNHeHBkRkJ5YjNBdWFHRnpUM2R1VUhKdmNHVnlkSGtvYzNCc2FYUkxaWGtwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCamIyMWlhVzVsWkV0bGVTQTlJR3RsZVNBcklITndiR2wwUzJWNU8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0F2THlCSlppQjNaU0JrYjI0bmRDQm9ZWFpsSUdFZ1kyaHBiR1FnZG1Gc2RXVWdabTl5SUhSb2FYTWdhMlY1TENCdFlXdGxJRzl1WlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLQ0ZqYUdsc1pISmxibHRqYjIxaWFXNWxaRXRsZVYwcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0JrWldaaGRXeDBWbUZzZFdVZ1BTQW9ibVYzVm1Gc2RXVXVkSGx3WlM1a1pXWmhkV3gwVUhKdmNITWdKaVlnYm1WM1ZtRnNkV1V1ZEhsd1pTNWtaV1poZFd4MFVISnZjSE5iYzNCc2FYUkxaWGxkS1NBL0lHNWxkMVpoYkhWbExuUjVjR1V1WkdWbVlYVnNkRkJ5YjNCelczTndiR2wwUzJWNVhTQTZJRzVsZDFaaGJIVmxMblI1Y0dVdVpHVm1ZWFZzZEZCeWIzQnpJSHg4SUh0OU8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyaHBiR1J5Wlc1YlkyOXRZbWx1WldSTFpYbGRJRDBnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdUxpNXVaWGRXWVd4MVpTeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdMaTR1WkdWbVlYVnNkRlpoYkhWbExGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQndZWEpsYm5RNklHdGxlU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTJocGJHUkxaWGs2SUhOd2JHbDBTMlY1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1JsYkdWMFpTQmphR2xzWkhKbGJsdGpiMjFpYVc1bFpFdGxlVjB1ZEhsd1pUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FHRnpRMmhwYkdSeVpXNGdQU0IwY25WbE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMmhwYkdSeVpXNWJZMjl0WW1sdVpXUkxaWGxkVzNCeWIzQk9ZVzFsWFNBOUlIQmhjbk5sUm14dllYUW9jM0JzYVhSUWNtOXdXM053YkdsMFMyVjVYU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0F2THlCSlppQjNaU0JvWVhabElHRWdkR1Z0Y0d4aGRHVWdablZ1WTNScGIyNHNJR2RsYm1WeVlYUmxYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tDRnVaWGRXWVd4MVpTNTBaVzF3YkdGMFpTQW1KaUJ1WlhkV1lXeDFaUzUwZVhCbExuUmxiWEJzWVhSbElDWW1JR2x6VTNSeWFXNW5LSFpoYkhWbFVISnZjQ2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYm1WM1ZtRnNkV1V1ZEdWdGNHeGhkR1VnUFNCdVpYZFdZV3gxWlM1MGVYQmxMblJsYlhCc1lYUmxLSFpoYkhWbFVISnZjQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUdsbUlDaHVaWGRXWVd4MVpTNTBlWEJsTG1SbFptRjFiSFJRY205d2N5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUc1bGQxWmhiSFZsSUQwZ2V5QXVMaTV1WlhkV1lXeDFaU3dnTGk0dWJtVjNWbUZzZFdVdWRIbHdaUzVrWldaaGRXeDBVSEp2Y0hNZ2ZUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0haaGJIVmxVSEp2Y0NBaFBUMGdkVzVrWldacGJtVmtJQ1ltSUc1bGQxWmhiSFZsTG5SNWNHVXVjR0Z5YzJVcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J1WlhkV1lXeDFaVnR3Y205d1RtRnRaVjBnUFNCdVpYZFdZV3gxWlM1MGVYQmxMbkJoY25ObEtIWmhiSFZsVUhKdmNDd2dibVYzVm1Gc2RXVXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZTQXZMeUJGYm1RZ2RtRnNkV1VnZEhsd1pTQnViMjV6Wlc1elpWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdMeThnVTJWMElHQndjbVYyWUNCMGJ5QmdZM1Z5Y21WdWRHQWdabTl5SUdacGNuTjBJR1p5WVcxbElHRm1kR1Z5SUhObGRGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHNWxkMVpoYkhWbExuQnlaWFlnUFNCdVpYZFdZV3gxWlM1amRYSnlaVzUwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM4dklFbG1JSFJvYVhNZ2RtRnNkV1VnWkc5bGMyNG5kQ0JvWVhabElHTm9hV3hrY21WdUxDQmhaR1FnZEc4Z2RtRnNkV1ZMWlhselhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLQ0ZvWVhORGFHbHNaSEpsYmlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RHaHBjeTUyWVd4MVpVdGxlWE11YVc1a1pYaFBaaWhyWlhrcElEMDlQU0F0TVNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTUyWVd4MVpVdGxlWE11Y0hWemFDaHJaWGtwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0F2THlCUGNpQmhaR1FnZEc4Z2NHRnlaVzUwUzJWNWMxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRzVsZDFaaGJIVmxMbU5vYVd4a2NtVnVJRDBnYm1WM1ZtRnNkV1V1WTJocGJHUnlaVzRnZkh3Z2UzMDdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFJvYVhNdWNHRnlaVzUwUzJWNWN5NXBibVJsZUU5bUtHdGxlU2tnUFQwOUlDMHhLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxuQmhjbVZ1ZEV0bGVYTXVjSFZ6YUNoclpYa3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXpaWFJXWVd4MVpYTW9ZMmhwYkdSeVpXNHBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVkbUZzZFdWelcydGxlVjBnUFNCdVpYZFdZV3gxWlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJQzhxWEc0Z0lDQWdJQ0FnSUVSbFkybGtaU0IzYUdWMGFHVnlJSFJvYVhNZ1FXTjBhVzl1SUhkcGJHd2djbVZ1WkdWeUlHOXVJRzVsZUhRZ1puSmhiV1ZjYmx4dUlDQWdJQ0FnSUNCQWNHRnlZVzBnVzBGamRHbHZibDFjYmlBZ0lDQWdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRYRzRnSUNBZ0lDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhWeHVJQ0FnSUNBZ0lDQkFjbVYwZFhKdUlGdGliMjlzWldGdVhUb2dVbVYwZFhKdUlIUnlkV1VnZEc4Z2NtVnVaR1Z5WEc0Z0lDQWdLaTljYmlBZ0lDQjNhV3hzVW1WdVpHVnlLR0ZqZEdsdmJpd2dabkpoYldWVGRHRnRjQ3dnWld4aGNITmxaQ2tnZTF4dUlDQWdJQ0FnSUNCc1pYUWdhR0Z6UTJoaGJtZGxaQ0E5SUdaaGJITmxPMXh1WEc0Z0lDQWdJQ0FnSUM4dklFTm9aV05ySUdsbUlHSmhjMlVnZG1Gc2RXVnpJR2hoZG1VZ2RYQmtZWFJsWkNCY2JpQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQjBhR2x6TG01MWJWWmhiSFZsUzJWNWN6c2dhU3NyS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQnJaWGtnUFNCMGFHbHpMblpoYkhWbFMyVjVjMXRwWFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElIWmhiSFZsSUQwZ2RHaHBjeTUyWVd4MVpYTmJhMlY1WFR0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1VuVnVJSFJ5WVc1elptOXliU0JtZFc1amRHbHZiaUFvYVdZZ2NISmxjMlZ1ZENsY2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMllXeDFaUzUwY21GdWMyWnZjbTBwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMllXeDFaUzVqZFhKeVpXNTBJRDBnZG1Gc2RXVXVkSEpoYm5ObWIzSnRLSFpoYkhWbExtTjFjbkpsYm5Rc0lHdGxlU3dnZEdocGN5azdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUM4dklFTmhjQ0J0YVc1cGJYVnRYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9hWE5PZFcwb2RtRnNkV1V1YldsdUtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFpoYkhWbExtTjFjbkpsYm5RZ1BTQk5ZWFJvTG0xaGVDaDJZV3gxWlM1amRYSnlaVzUwTENCMllXeDFaUzV0YVc0cE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCRFlYQWdiV0Y0YVcxMWJWeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHbHpUblZ0S0haaGJIVmxMbTFoZUNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZV3gxWlM1amRYSnlaVzUwSUQwZ1RXRjBhQzV0YVc0b2RtRnNkV1V1WTNWeWNtVnVkQ3dnZG1Gc2RXVXViV0Y0S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnVW05MWJtUWdiblZ0WW1WeVhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RtRnNkV1V1Y205MWJtUXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IyWVd4MVpTNWpkWEp5Wlc1MElEMGdUV0YwYUM1eWIzVnVaQ2gyWVd4MVpTNWpkWEp5Wlc1MEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVXVabkpoYldWRGFHRnVaMlVnUFNCMllXeDFaUzVqZFhKeVpXNTBJQzBnZG1Gc2RXVXVjSEpsZGp0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1ZYQmtZWFJsSUhabGJHOWphWFI1WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvSVhSb2FYTXVZMkZzWTNWc1lYUmxjMVpsYkc5amFYUjVLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVXVkbVZzYjJOcGRIa2dQU0J6Y0dWbFpGQmxjbE5sWTI5dVpDaDJZV3gxWlM1bWNtRnRaVU5vWVc1blpTd2daV3hoY0hObFpDazdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUM4dklFbG1JSFJvYVhNZ2RtRnNkV1VnYUdGeklHTm9ZVzVuWldSY2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMllXeDFaUzV3Y21WMklDRTlQU0IyWVd4MVpTNWpkWEp5Wlc1MEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhR0Z6UTJoaGJtZGxaQ0E5SUhSeWRXVTdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZzZFdVdWNISmxkaUE5SUhaaGJIVmxMbU4xY25KbGJuUTdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUM4dklFRndjR1Z1WkNCMWJtbDBYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0IyWVd4MVpVWnZjbE4wWVhSbElEMGdLSFpoYkhWbExuUjVjR1VnSmlZZ2RtRnNkV1V1ZEhsd1pTNXpaWEpwWVd4cGVtVXBJRDhnZG1Gc2RXVXVkSGx3WlM1elpYSnBZV3hwZW1Vb2RtRnNkV1V1WTNWeWNtVnVkQ3dnZG1Gc2RXVXBJRG9nZG1Gc2RXVXVZM1Z5Y21WdWREdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdRV1JrSUhSdklITjBZWFJsSUdsbUlIUm9hWE1nYVhNZ2JtOTBJR0VnWTJocGJHUWdkbUYxWlZ4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0NGMllXeDFaUzV3WVhKbGJuUXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxuTjBZWFJsVzJ0bGVWMGdQU0IyWVd4MVpVWnZjbE4wWVhSbE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxuWmhiSFZsYzF0MllXeDFaUzV3WVhKbGJuUmRMbU5vYVd4a2NtVnVXM1poYkhWbExtTm9hV3hrUzJWNVhTQTlJSFpoYkhWbFJtOXlVM1JoZEdVN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQXZMeUJWY0dSaGRHVWdjR0Z5Wlc1MElIWmhiSFZsYzF4dUlDQWdJQ0FnSUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElIUm9hWE11Ym5WdFVHRnlaVzUwUzJWNWN6c2dhU3NyS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQnJaWGtnUFNCMGFHbHpMbkJoY21WdWRFdGxlWE5iYVYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQjJZV3gxWlNBOUlIUm9hWE11ZG1Gc2RXVnpXMnRsZVYwN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUhaaGJIVmxMbU4xY25KbGJuUWdQU0IyWVd4MVpTNTBlWEJsTG1OdmJXSnBibVVvZG1Gc2RXVXVZMmhwYkdSeVpXNHNJSFpoYkhWbExuUmxiWEJzWVhSbEtUdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV6ZEdGMFpWdHJaWGxkSUQwZ2RtRnNkV1V1WTNWeWNtVnVkRHRjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxtOXVSbkpoYldVcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXViMjVHY21GdFpTaDBhR2x6TG5OMFlYUmxMQ0IwYUdsektUdGNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUFvZEdocGN5NXZia05zWldGdWRYQXBJRDhnZEhKMVpTQTZJR2hoYzBOb1lXNW5aV1E3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdhVzVvWlhKcGRDaHdjbTl3Y3lBOUlIdDlLU0I3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJSHNnZG1Gc2RXVnpMQ0F1TGk1d2NtOXdjMVJ2VTJWMElIMGdQU0J3Y205d2N6dGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2JtVjNRV04wYVc5dUlEMGdjM1Z3WlhJdWFXNW9aWEpwZENod2NtOXdjMVJ2VTJWMEtUdGNibHh1SUNBZ0lDQWdJQ0JwWmlBb2RtRnNkV1Z6S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J1WlhkQlkzUnBiMjR1YzJWMEtIc2dkbUZzZFdWeklIMHBPMXh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUc1bGQwRmpkR2x2Ymp0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J3WVhWelpTZ3BJSHRjYmlBZ0lDQWdJQ0FnYzNWd1pYSXVjM1J2Y0NncE8xeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjenRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnlaWE4xYldVb0tTQjdYRzRnSUNBZ0lDQWdJSE4xY0dWeUxuTjBZWEowS0NrN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNBZ0lIMWNibHh1SUNBZ0lIUnZaMmRzWlNncElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE11YVhOQlkzUnBkbVVnUHlCMGFHbHpMbkJoZFhObEtDa2dPaUIwYUdsekxuSmxjM1Z0WlNncE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhOMFlYSjBLQ2tnZTF4dUlDQWdJQ0FnSUNCamIyNXpkQ0IyWVd4MVpYTWdQU0IwYUdsekxuWmhiSFZsY3p0Y2JpQWdJQ0FnSUNBZ2MzVndaWEl1YzNSaGNuUW9LVHRjYmx4dUlDQWdJQ0FnSUNCbWIzSWdLR3hsZENCclpYa2dhVzRnZG1Gc2RXVnpLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvZG1Gc2RXVnpMbWhoYzA5M2JsQnliM0JsY25SNUtHdGxlU2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMllXeDFaWE5iYTJWNVhTNXdjbVYySUQwZ2RtRnNkV1Z6VzJ0bGVWMHViM0pwWjJsdUlEMGdkbUZzZFdWelcydGxlVjB1WTNWeWNtVnVkRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhOMFlYUnBZeUJsZUhSbGJtUkVaV1poZFd4MFZtRnNkV1VvY0hKdmNITXBJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSHNnTGk0dWRHaHBjeTV3Y205MGIzUjVjR1V1WkdWbVlYVnNkRlpoYkhWbExDQXVMaTV3Y205d2N5QjlPMXh1SUNBZ0lIMWNibHh1SUNBZ0lITjBZWFJwWXlCbGVIUmxibVJFWldaaGRXeDBVSEp2Y0hNb2NISnZjSE1wSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhzZ0xpNHVkR2hwY3k1d2NtOTBiM1I1Y0dVdVpHVm1ZWFZzZEZCeWIzQnpMQ0F1TGk1d2NtOXdjeUI5TzF4dUlDQWdJSDFjYm4xY2JseHVRV04wYVc5dUxuQnliM1J2ZEhsd1pTNWtaV1poZFd4MFZtRnNkV1ZRY205d0lEMGdKMk4xY25KbGJuUW5PMXh1UVdOMGFXOXVMbkJ5YjNSdmRIbHdaUzVrWldaaGRXeDBWbUZzZFdVZ1BTQjdYRzRnSUNBZ1kzVnljbVZ1ZERvZ01DeGNiaUFnSUNCMlpXeHZZMmwwZVRvZ01DeGNiaUFnSUNCeWIzVnVaRG9nWm1Gc2MyVXNYRzRnSUNBZ2JXbHVPaUIxYm1SbFptbHVaV1FzWEc0Z0lDQWdiV0Y0T2lCMWJtUmxabWx1WldRc1hHNGdJQ0FnZEhKaGJuTm1iM0p0T2lCMWJtUmxabWx1WldSY2JuMDdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJRUZqZEdsdmJqdGNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9BY3Rpb24uanNcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfQWN0aW9uMiA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvQWN0aW9uJyk7XG5cbnZhciBfQWN0aW9uMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0FjdGlvbjIpO1xuXG52YXIgX2dlbmVyYXRlQmxlbmRDdXJ2ZSA9IHJlcXVpcmUoJy4vZmxvdy9nZW5lcmF0ZS1ibGVuZC1jdXJ2ZScpO1xuXG52YXIgX2dlbmVyYXRlQmxlbmRDdXJ2ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZW5lcmF0ZUJsZW5kQ3VydmUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8qXG4gICAgTWV0aG9kcyBhbmQgcHJvcGVydGllcyB0byBhZGQgdG8gYm91bmQgQWN0aW9uc1xuKi9cbnZhciBib3VuZE9uU3RhcnQgPSBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgcmV0dXJuIGFjdGlvbi5mbG93LmFjdGl2YXRlQWN0aW9uKGFjdGlvbi5pZCwgYWN0aW9uKTtcbn07XG52YXIgYm91bmRPblN0b3AgPSBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgcmV0dXJuIGFjdGlvbi5mbG93LmRlYWN0aXZhdGVBY3Rpb24oYWN0aW9uLmlkKTtcbn07XG52YXIgYm91bmRQcm9wcyA9IGZ1bmN0aW9uIChmbG93KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZmxvdzogZmxvdyxcbiAgICAgICAgaXNQcmlvcml0eTogdHJ1ZSxcbiAgICAgICAgb25BY3RpdmF0ZTogYm91bmRPblN0YXJ0LFxuICAgICAgICBvbkRlYWN0aXZhdGU6IGJvdW5kT25TdG9wXG4gICAgfTtcbn07XG5cbnZhciBGbG93ID0gZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgICBfaW5oZXJpdHMoRmxvdywgX0FjdGlvbik7XG5cbiAgICBmdW5jdGlvbiBGbG93KHByb3BzKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBGbG93KTtcblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgICAgICBfdGhpcy5hY3RpdmVBY3Rpb25zID0ge307XG4gICAgICAgIF90aGlzLm51bUFjdGl2ZUFjdGlvbnMgPSAwO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgRmxvdy5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gc2V0KHByb3BzKSB7XG4gICAgICAgIF9BY3Rpb24ucHJvdG90eXBlLnNldC5jYWxsKHRoaXMsIHByb3BzKTtcblxuICAgICAgICB0aGlzLm9uY2UoKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgQmluZCBBY3Rpb24gdG8gQWN0b3JcbiAgICAqL1xuXG4gICAgRmxvdy5wcm90b3R5cGUuY29ubmVjdCA9IGZ1bmN0aW9uIGNvbm5lY3QoYWN0aW9uKSB7XG4gICAgICAgIHZhciBpbmhlcml0ZWRBY3Rpb24gPSBhY3Rpb24uaW5oZXJpdCgpO1xuICAgICAgICB2YXIgbmV3VmFsdWVzID0ge307XG4gICAgICAgIHZhciBoYXNOZXdWYWx1ZXMgPSBmYWxzZTtcblxuICAgICAgICAvLyBDcmVhdGUgdmFsdWVzIG9uIGFjdG9yIHRoYXQgZG9uJ3QgZXhpc3RcbiAgICAgICAgZm9yICh2YXIga2V5IGluIGluaGVyaXRlZEFjdGlvbi52YWx1ZXMpIHtcbiAgICAgICAgICAgIGlmIChpbmhlcml0ZWRBY3Rpb24udmFsdWVzLmhhc093blByb3BlcnR5KGtleSkgJiYgIXRoaXMudmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZXNba2V5XSA9IHt9O1xuICAgICAgICAgICAgICAgIGhhc05ld1ZhbHVlcyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaGFzTmV3VmFsdWVzKSB7XG4gICAgICAgICAgICB0aGlzLnNldCh7IHZhbHVlczogbmV3VmFsdWVzIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluaGVyaXRlZEFjdGlvbi5zZXQoYm91bmRQcm9wcyh0aGlzLCBpbmhlcml0ZWRBY3Rpb24pKTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgU3RhcnQgQWN0b3JcbiAgICAgICAgIElmIEFjdGlvbiBpcyBwcm92aWRlZCwgYmluZCBpdCB0byB0aGlzIEFjdG9yIGFuZCBzdGFydFxuICAgICAgICAgQHBhcmFtIChvcHRpb25hbCkgW0FjdGlvbl1cbiAgICAqL1xuXG4gICAgRmxvdy5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgICAgX0FjdGlvbi5wcm90b3R5cGUuc3RhcnQuY2FsbCh0aGlzKTtcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5hY3RpdmVBY3Rpb25zKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVBY3Rpb25zLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgYWN0aW9uID0gdGhpcy5hY3RpdmVBY3Rpb25zW2tleV07XG4gICAgICAgICAgICAgICAgaWYgKCFhY3Rpb24uaXNBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIEZsb3cucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICBfQWN0aW9uLnByb3RvdHlwZS5zdG9wLmNhbGwodGhpcyk7XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMuYWN0aXZlQWN0aW9ucykge1xuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlQWN0aW9ucy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVBY3Rpb25zW2tleV0uc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIEZsb3cucHJvdG90eXBlLndpbGxSZW5kZXIgPSBmdW5jdGlvbiB3aWxsUmVuZGVyKGFjdG9yLCBmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMudmFsdWVLZXlzW2ldO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcbiAgICAgICAgICAgIHZhciBkcml2ZXIgPSB2YWx1ZS5udW1Ecml2ZXJzID8gdGhpcy5hY3RpdmVBY3Rpb25zW3ZhbHVlLmRyaXZlcnNbMF1dIDogZmFsc2U7XG4gICAgICAgICAgICB2YXIgbmV3Q3VycmVudCA9IHZhbHVlLm51bURyaXZlcnMgPyBkcml2ZXIudmFsdWVzW2tleV0uY3VycmVudCA6IHZhbHVlLmN1cnJlbnQ7XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZS5ibGVuZEN1cnZlKSB7XG4gICAgICAgICAgICAgICAgbmV3Q3VycmVudCA9IHZhbHVlLmJsZW5kQ3VydmUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IG5ld0N1cnJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gX0FjdGlvbi5wcm90b3R5cGUud2lsbFJlbmRlci5jYWxsKHRoaXMsIGFjdG9yLCBmcmFtZVN0YW1wLCBlbGFwc2VkKTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgQWRkIGFjdGl2ZSBhY3Rpb25zXG4gICAgICAgICBAcGFyYW0gW251bWJlcl1cbiAgICAgICAgQHBhcmFtIFtBY3Rpb25dXG4gICAgKi9cblxuICAgIEZsb3cucHJvdG90eXBlLmFjdGl2YXRlQWN0aW9uID0gZnVuY3Rpb24gYWN0aXZhdGVBY3Rpb24oaWQsIGFjdGlvbikge1xuICAgICAgICB0aGlzLmFjdGl2ZUFjdGlvbnNbaWRdID0gYWN0aW9uO1xuICAgICAgICB0aGlzLm51bUFjdGl2ZUFjdGlvbnMrKztcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFjdGlvbi5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgICAgICAgdmFyIGtleSA9IGFjdGlvbi52YWx1ZUtleXNbaV07XG4gICAgICAgICAgICB2YXIgYWN0aW9uVmFsdWUgPSBhY3Rpb24udmFsdWVzW2tleV07XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuXG4gICAgICAgICAgICAvLyBJZiB3ZSdyZSBibGVuZGluZyB0aGlzIGFjdGlvbiwgYW5kIHRoZXJlJ3Mgb24gYWxyZWFkeSBpbiBwcm9ncmVzc1xuICAgICAgICAgICAgaWYgKGFjdGlvbi5ibGVuZCAmJiB2YWx1ZS5udW1Ecml2ZXJzICYmICF2YWx1ZS5ibGVuZEN1cnZlICYmIHZhbHVlLmRyaXZlcnNbMF0ucHJvdG90eXBlID09PSBhY3Rpb24ucHJvdG90eXBlKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUuYmxlbmRDdXJ2ZSA9ICgwLCBfZ2VuZXJhdGVCbGVuZEN1cnZlMi5kZWZhdWx0KSh0aGlzLmFjdGl2ZUFjdGlvbnNbdmFsdWUuZHJpdmVyc1swXV0sIGFjdGlvbiwgdmFsdWUsIGtleSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFhY3Rpb24uaXNTY3J1YmJpbmcpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS5ibGVuZEN1cnZlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIC8vIFBhc3MgQWN0b3IgdmFsdWUgcHJvcGVydGllcyB0byBBY3Rpb25cbiAgICAgICAgICAgICAgICBhY3Rpb25WYWx1ZS52ZWxvY2l0eSArPSB2YWx1ZS52ZWxvY2l0eTtcbiAgICAgICAgICAgICAgICBhY3Rpb25WYWx1ZS5mcm9tID0gYWN0aW9uVmFsdWUuY3VycmVudCA9IHZhbHVlLmN1cnJlbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhbHVlLmRyaXZlcnMgPSBbaWRdO1xuICAgICAgICAgICAgdmFsdWUubnVtRHJpdmVycyA9IHZhbHVlLmRyaXZlcnMubGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubnVtQWN0aXZlQWN0aW9ucykge1xuICAgICAgICAgICAgX0FjdGlvbi5wcm90b3R5cGUuc3RhcnQuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKlxuICAgICAgICBSZW1vdmUgYWN0aXZlIGFjdGlvbnNcbiAgICAgICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgICovXG5cbiAgICBGbG93LnByb3RvdHlwZS5kZWFjdGl2YXRlQWN0aW9uID0gZnVuY3Rpb24gZGVhY3RpdmF0ZUFjdGlvbihpZCkge1xuICAgICAgICB2YXIgYWN0aW9uID0gdGhpcy5hY3RpdmVBY3Rpb25zW2lkXTtcblxuICAgICAgICBpZiAoYWN0aW9uKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFjdGlvbi5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBrZXkgPSBhY3Rpb24udmFsdWVLZXlzW2ldO1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG4gICAgICAgICAgICAgICAgdmFyIGRyaXZlckluZGV4ID0gdmFsdWUuZHJpdmVycy5pbmRleE9mKGlkKTtcblxuICAgICAgICAgICAgICAgIGlmIChkcml2ZXJJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUuZHJpdmVycy5zcGxpY2UoZHJpdmVySW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5udW1Ecml2ZXJzLS07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5hY3RpdmVBY3Rpb25zW2lkXTtcbiAgICAgICAgICAgIHRoaXMubnVtQWN0aXZlQWN0aW9ucy0tO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLm51bUFjdGl2ZUFjdGlvbnMgJiYgdGhpcy5pc0FjdGl2ZSkge1xuICAgICAgICAgICAgX0FjdGlvbi5wcm90b3R5cGUuc3RvcC5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBGbG93O1xufShfQWN0aW9uMy5kZWZhdWx0KTtcblxuRmxvdy5wcm90b3R5cGUuZGVmYXVsdFZhbHVlID0gX0FjdGlvbjMuZGVmYXVsdC5leHRlbmREZWZhdWx0VmFsdWUoe1xuICAgIGRyaXZlcnM6IFtdLFxuICAgIG51bURyaXZlcnM6IDBcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBGbG93O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMFpzYjNjdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096czdPenM3T3pzN096czdPenM3UVVGTlFTeEpRVUZOTEdWQlFXVXNWVUZCUXl4TlFVRkVPMWRCUVZrc1QwRkJUeXhKUVVGUUxFTkJRVmtzWTBGQldpeERRVUV5UWl4UFFVRlBMRVZCUVZBc1JVRkJWeXhOUVVGMFF6dERRVUZhTzBGQlEzSkNMRWxCUVUwc1kwRkJZeXhWUVVGRExFMUJRVVE3VjBGQldTeFBRVUZQTEVsQlFWQXNRMEZCV1N4blFrRkJXaXhEUVVFMlFpeFBRVUZQTEVWQlFWQTdRMEZCZWtNN1FVRkRjRUlzU1VGQlRTeGhRVUZoTEZWQlFVTXNTVUZCUkR0WFFVRlhPMEZCUXpGQ0xHdENRVVF3UWp0QlFVVXhRaXh2UWtGQldTeEpRVUZhTzBGQlEwRXNiMEpCUVZrc1dVRkJXanRCUVVOQkxITkNRVUZqTEZkQlFXUTdPME5CU21VN08wbEJUMkk3T3p0QlFVTkdMR0ZCUkVVc1NVRkRSaXhEUVVGWkxFdEJRVm9zUlVGQmJVSTdPRUpCUkdwQ0xFMUJRMmxDT3p0eFJFRkRaaXh0UWtGQlRTeExRVUZPTEVkQlJHVTdPMEZCUldZc1kwRkJTeXhoUVVGTUxFZEJRWEZDTEVWQlFYSkNMRU5CUm1VN1FVRkhaaXhqUVVGTExHZENRVUZNTEVkQlFYZENMRU5CUVhoQ0xFTkJTR1U3TzB0QlFXNUNPenRCUVVSRkxHMUNRVTlHTEcxQ1FVRkpMRTlCUVU4N1FVRkRVQ3d3UWtGQlRTeEhRVUZPTEZsQlFWVXNTMEZCVml4RlFVUlBPenRCUVVkUUxHRkJRVXNzU1VGQlRDeEhRVWhQT3p0QlFVdFFMR1ZCUVU4c1NVRkJVQ3hEUVV4UE96czdPenM3TzBGQlVGUXNiVUpCYTBKR0xESkNRVUZSTEZGQlFWRTdRVUZEV2l4WlFVRk5MR3RDUVVGclFpeFBRVUZQTEU5QlFWQXNSVUZCYkVJc1EwRkVUVHRCUVVWYUxGbEJRVWtzV1VGQldTeEZRVUZhTEVOQlJsRTdRVUZIV2l4WlFVRkpMR1ZCUVdVc1MwRkJaanM3TzBGQlNGRXNZVUZOVUN4SlFVRkpMRWRCUVVvc1NVRkJWeXhuUWtGQlowSXNUVUZCYUVJc1JVRkJkMEk3UVVGRGNFTXNaMEpCUVVrc1owSkJRV2RDTEUxQlFXaENMRU5CUVhWQ0xHTkJRWFpDTEVOQlFYTkRMRWRCUVhSRExFdEJRVGhETEVOQlFVTXNTMEZCU3l4TlFVRk1MRU5CUVZrc1kwRkJXaXhEUVVFeVFpeEhRVUV6UWl4RFFVRkVMRVZCUVd0RE8wRkJRMmhHTERCQ1FVRlZMRWRCUVZZc1NVRkJhVUlzUlVGQmFrSXNRMEZFWjBZN1FVRkZhRVlzSzBKQlFXVXNTVUZCWml4RFFVWm5SanRoUVVGd1JqdFRRVVJLT3p0QlFVOUJMRmxCUVVrc1dVRkJTaXhGUVVGclFqdEJRVU5rTEdsQ1FVRkxMRWRCUVV3c1EwRkJVeXhGUVVGRkxGRkJRVkVzVTBGQlVpeEZRVUZZTEVWQlJHTTdVMEZCYkVJN08wRkJTVUVzWlVGQlR5eG5Ra0ZCWjBJc1IwRkJhRUlzUTBGQmIwSXNWMEZCVnl4SlFVRllMRVZCUVdsQ0xHVkJRV3BDTEVOQlFYQkNMRU5CUVZBc1EwRnFRbGs3T3pzN096czdPenRCUVd4Q1pDeHRRa0UyUTBZc2VVSkJRVkU3UVVGRFNpd3dRa0ZCVFN4TFFVRk9MRmxCUkVrN08wRkJSMG9zWVVGQlN5eEpRVUZKTEVkQlFVb3NTVUZCVnl4TFFVRkxMR0ZCUVV3c1JVRkJiMEk3UVVGRGFFTXNaMEpCUVVrc1MwRkJTeXhoUVVGTUxFTkJRVzFDTEdOQlFXNUNMRU5CUVd0RExFZEJRV3hETEVOQlFVb3NSVUZCTkVNN1FVRkRlRU1zYjBKQlFVMHNVMEZCVXl4TFFVRkxMR0ZCUVV3c1EwRkJiVUlzUjBGQmJrSXNRMEZCVkN4RFFVUnJRenRCUVVWNFF5eHZRa0ZCU1N4RFFVRkRMRTlCUVU4c1VVRkJVQ3hGUVVGcFFqdEJRVU5zUWl3eVFrRkJUeXhMUVVGUUxFZEJSR3RDTzJsQ1FVRjBRanRoUVVaS08xTkJSRW83TzBGQlUwRXNaVUZCVHl4SlFVRlFMRU5CV2trN096dEJRVGREVGl4dFFrRTBSRVlzZFVKQlFVODdRVUZEU0N3d1FrRkJUU3hKUVVGT0xGbEJSRWM3TzBGQlIwZ3NZVUZCU3l4SlFVRkpMRWRCUVVvc1NVRkJWeXhMUVVGTExHRkJRVXdzUlVGQmIwSTdRVUZEYUVNc1owSkJRVWtzUzBGQlN5eGhRVUZNTEVOQlFXMUNMR05CUVc1Q0xFTkJRV3RETEVkQlFXeERMRU5CUVVvc1JVRkJORU03UVVGRGVFTXNjVUpCUVVzc1lVRkJUQ3hEUVVGdFFpeEhRVUZ1UWl4RlFVRjNRaXhKUVVGNFFpeEhRVVIzUXp0aFFVRTFRenRUUVVSS096dEJRVTFCTEdWQlFVOHNTVUZCVUN4RFFWUkhPenM3UVVFMVJFd3NiVUpCZDBWR0xHbERRVUZYTEU5QlFVOHNXVUZCV1N4VFFVRlRPMEZCUTI1RExHRkJRVXNzU1VGQlNTeEpRVUZKTEVOQlFVb3NSVUZCVHl4SlFVRkpMRXRCUVVzc1dVRkJUQ3hGUVVGdFFpeEhRVUYyUXl4RlFVRTBRenRCUVVONFF5eG5Ra0ZCVFN4TlFVRk5MRXRCUVVzc1UwRkJUQ3hEUVVGbExFTkJRV1lzUTBGQlRpeERRVVJyUXp0QlFVVjRReXhuUWtGQlRTeFJRVUZSTEV0QlFVc3NUVUZCVEN4RFFVRlpMRWRCUVZvc1EwRkJVaXhEUVVaclF6dEJRVWQ0UXl4blFrRkJUU3hUUVVGVExFMUJRVTBzVlVGQlRpeEhRVUZ0UWl4TFFVRkxMR0ZCUVV3c1EwRkJiVUlzVFVGQlRTeFBRVUZPTEVOQlFXTXNRMEZCWkN4RFFVRnVRaXhEUVVGdVFpeEhRVUV3UkN4TFFVRXhSQ3hEUVVoNVFqdEJRVWw0UXl4blFrRkJTU3hoUVVGaExFMUJRVTBzVlVGQlRpeEhRVUZ0UWl4UFFVRlBMRTFCUVZBc1EwRkJZeXhIUVVGa0xFVkJRVzFDTEU5QlFXNUNMRWRCUVRaQ0xFMUJRVTBzVDBGQlRpeERRVXA2UWpzN1FVRk5lRU1zWjBKQlFVa3NUVUZCVFN4VlFVRk9MRVZCUVd0Q08wRkJRMnhDTERaQ1FVRmhMRTFCUVUwc1ZVRkJUaXhGUVVGaUxFTkJSR3RDTzJGQlFYUkNPenRCUVVsQkxHdENRVUZOTEU5QlFVNHNSMEZCWjBJc1ZVRkJhRUlzUTBGV2QwTTdVMEZCTlVNN08wRkJZVUVzWlVGQlR5eHJRa0ZCVFN4VlFVRk9MRmxCUVdsQ0xFdEJRV3BDTEVWQlFYZENMRlZCUVhoQ0xFVkJRVzlETEU5QlFYQkRMRU5CUVZBc1EwRmtiVU03T3pzN096czdPenRCUVhoRmNrTXNiVUpCSzBaR0xIbERRVUZsTEVsQlFVa3NVVUZCVVR0QlFVTjJRaXhoUVVGTExHRkJRVXdzUTBGQmJVSXNSVUZCYmtJc1NVRkJlVUlzVFVGQmVrSXNRMEZFZFVJN1FVRkZka0lzWVVGQlN5eG5Ra0ZCVEN4SFFVWjFRanM3UVVGSmRrSXNZVUZCU3l4SlFVRkpMRWxCUVVrc1EwRkJTaXhGUVVGUExFbEJRVWtzVDBGQlR5eFpRVUZRTEVWQlFYRkNMRWRCUVhwRExFVkJRVGhETzBGQlF6RkRMR2RDUVVGTkxFMUJRVTBzVDBGQlR5eFRRVUZRTEVOQlFXbENMRU5CUVdwQ0xFTkJRVTRzUTBGRWIwTTdRVUZGTVVNc1owSkJRVTBzWTBGQll5eFBRVUZQTEUxQlFWQXNRMEZCWXl4SFFVRmtMRU5CUVdRc1EwRkdiME03UVVGSE1VTXNaMEpCUVUwc1VVRkJVU3hMUVVGTExFMUJRVXdzUTBGQldTeEhRVUZhTEVOQlFWSTdPenRCUVVodlF5eG5Ra0ZOZEVNc1QwRkJUeXhMUVVGUUxFbEJRV2RDTEUxQlFVMHNWVUZCVGl4SlFVRnZRaXhEUVVGRExFMUJRVTBzVlVGQlRpeEpRVUZ4UWl4TlFVRk5MRTlCUVU0c1EwRkJZeXhEUVVGa0xFVkJRV2xDTEZOQlFXcENMRXRCUVN0Q0xFOUJRVThzVTBGQlVDeEZRVUZ0UWp0QlFVTTFSeXh6UWtGQlRTeFZRVUZPTEVkQlFXMUNMR3REUVVGdFFpeExRVUZMTEdGQlFVd3NRMEZCYlVJc1RVRkJUU3hQUVVGT0xFTkJRV01zUTBGQlpDeERRVUZ1UWl4RFFVRnVRaXhGUVVGNVJDeE5RVUY2UkN4RlFVRnBSU3hMUVVGcVJTeEZRVUYzUlN4SFFVRjRSU3hEUVVGdVFpeERRVVEwUnp0aFFVRm9TQ3hOUVVWUExFbEJRVWtzUTBGQlF5eFBRVUZQTEZkQlFWQXNSVUZCYjBJN1FVRkROVUlzYzBKQlFVMHNWVUZCVGl4SFFVRnRRaXhUUVVGdVFqczdRVUZFTkVJc01rSkJSelZDTEVOQlFWa3NVVUZCV2l4SlFVRjNRaXhOUVVGTkxGRkJRVTRzUTBGSVNUdEJRVWsxUWl3MFFrRkJXU3hKUVVGYUxFZEJRVzFDTEZsQlFWa3NUMEZCV2l4SFFVRnpRaXhOUVVGTkxFOUJRVTRzUTBGS1lqdGhRVUY2UWpzN1FVRlBVQ3hyUWtGQlRTeFBRVUZPTEVkQlFXZENMRU5CUVVNc1JVRkJSQ3hEUVVGb1FpeERRV1l3UXp0QlFXZENNVU1zYTBKQlFVMHNWVUZCVGl4SFFVRnRRaXhOUVVGTkxFOUJRVTRzUTBGQll5eE5RVUZrTEVOQmFFSjFRanRUUVVFNVF6czdRVUZ0UWtFc1dVRkJTU3hMUVVGTExHZENRVUZNTEVWQlFYVkNPMEZCUTNaQ0xEaENRVUZOTEV0QlFVNHNXVUZFZFVJN1UwRkJNMEk3T3pzN096czdPMEZCZEVoR0xHMUNRV2RKUml3MlEwRkJhVUlzU1VGQlNUdEJRVU5xUWl4WlFVRk5MRk5CUVZNc1MwRkJTeXhoUVVGTUxFTkJRVzFDTEVWQlFXNUNMRU5CUVZRc1EwRkVWenM3UVVGSGFrSXNXVUZCU1N4TlFVRktMRVZCUVZrN1FVRkRVaXhwUWtGQlN5eEpRVUZKTEVsQlFVa3NRMEZCU2l4RlFVRlBMRWxCUVVrc1QwRkJUeXhaUVVGUUxFVkJRWEZDTEVkQlFYcERMRVZCUVRoRE8wRkJRekZETEc5Q1FVRk5MRTFCUVUwc1QwRkJUeXhUUVVGUUxFTkJRV2xDTEVOQlFXcENMRU5CUVU0c1EwRkViME03UVVGRk1VTXNiMEpCUVUwc1VVRkJVU3hMUVVGTExFMUJRVXdzUTBGQldTeEhRVUZhTEVOQlFWSXNRMEZHYjBNN1FVRkhNVU1zYjBKQlFVMHNZMEZCWXl4TlFVRk5MRTlCUVU0c1EwRkJZeXhQUVVGa0xFTkJRWE5DTEVWQlFYUkNMRU5CUVdRc1EwRkliME03TzBGQlN6RkRMRzlDUVVGSkxHZENRVUZuUWl4RFFVRkRMRU5CUVVRc1JVRkJTVHRCUVVOd1Fpd3dRa0ZCVFN4UFFVRk9MRU5CUVdNc1RVRkJaQ3hEUVVGeFFpeFhRVUZ5UWl4RlFVRnJReXhEUVVGc1F5eEZRVVJ2UWp0QlFVVndRaXd3UWtGQlRTeFZRVUZPTEVkQlJtOUNPMmxDUVVGNFFqdGhRVXhLT3p0QlFWZEJMRzFDUVVGUExFdEJRVXNzWVVGQlRDeERRVUZ0UWl4RlFVRnVRaXhEUVVGUUxFTkJXbEU3UVVGaFVpeHBRa0ZCU3l4blFrRkJUQ3hIUVdKUk8xTkJRVm83TzBGQlowSkJMRmxCUVVrc1EwRkJReXhMUVVGTExHZENRVUZNTEVsQlFYbENMRXRCUVVzc1VVRkJUQ3hGUVVGbE8wRkJRM3BETERoQ1FVRk5MRWxCUVU0c1dVRkVlVU03VTBGQk4wTTdPenRYUVc1S1JqczdPMEZCZVVwT0xFdEJRVXNzVTBGQlRDeERRVUZsTEZsQlFXWXNSMEZCT0VJc2FVSkJRVThzYTBKQlFWQXNRMEZCTUVJN1FVRkRjRVFzWVVGQlV5eEZRVUZVTzBGQlEwRXNaMEpCUVZrc1EwRkJXanREUVVZd1FpeERRVUU1UWpzN2EwSkJTMlVpTENKbWFXeGxJam9pUm14dmR5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdRV04wYVc5dUlHWnliMjBnSnk0dUwyRmpkR2x2Ym5NdlFXTjBhVzl1Snp0Y2JtbHRjRzl5ZENCblpXNWxjbUYwWlVKc1pXNWtRM1Z5ZG1VZ1puSnZiU0FuTGk5bWJHOTNMMmRsYm1WeVlYUmxMV0pzWlc1a0xXTjFjblpsSnp0Y2JseHVMeXBjYmlBZ0lDQk5aWFJvYjJSeklHRnVaQ0J3Y205d1pYSjBhV1Z6SUhSdklHRmtaQ0IwYnlCaWIzVnVaQ0JCWTNScGIyNXpYRzRxTDF4dVkyOXVjM1FnWW05MWJtUlBibE4wWVhKMElEMGdLR0ZqZEdsdmJpa2dQVDRnWVdOMGFXOXVMbVpzYjNjdVlXTjBhWFpoZEdWQlkzUnBiMjRvWVdOMGFXOXVMbWxrTENCaFkzUnBiMjRwTzF4dVkyOXVjM1FnWW05MWJtUlBibE4wYjNBZ1BTQW9ZV04wYVc5dUtTQTlQaUJoWTNScGIyNHVabXh2ZHk1a1pXRmpkR2wyWVhSbFFXTjBhVzl1S0dGamRHbHZiaTVwWkNrN1hHNWpiMjV6ZENCaWIzVnVaRkJ5YjNCeklEMGdLR1pzYjNjcElEMCtJQ2g3WEc0Z0lDQWdabXh2ZHl4Y2JpQWdJQ0JwYzFCeWFXOXlhWFI1T2lCMGNuVmxMRnh1SUNBZ0lHOXVRV04wYVhaaGRHVTZJR0p2ZFc1a1QyNVRkR0Z5ZEN4Y2JpQWdJQ0J2YmtSbFlXTjBhWFpoZEdVNklHSnZkVzVrVDI1VGRHOXdYRzU5S1R0Y2JseHVZMnhoYzNNZ1JteHZkeUJsZUhSbGJtUnpJRUZqZEdsdmJpQjdYRzRnSUNBZ1kyOXVjM1J5ZFdOMGIzSW9jSEp2Y0hNcElIdGNiaUFnSUNBZ0lDQWdjM1Z3WlhJb2NISnZjSE1wTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbUZqZEdsMlpVRmpkR2x2Ym5NZ1BTQjdmVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXVkVzFCWTNScGRtVkJZM1JwYjI1eklEMGdNRHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnpaWFFvY0hKdmNITXBJSHRjYmlBZ0lDQWdJQ0FnYzNWd1pYSXVjMlYwS0hCeWIzQnpLVHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbTl1WTJVb0tUdGNibHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3p0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0F2S2x4dUlDQWdJQ0FnSUNCQ2FXNWtJRUZqZEdsdmJpQjBieUJCWTNSdmNseHVJQ0FnSUNvdlhHNGdJQ0FnWTI5dWJtVmpkQ2hoWTNScGIyNHBJSHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdhVzVvWlhKcGRHVmtRV04wYVc5dUlEMGdZV04wYVc5dUxtbHVhR1Z5YVhRb0tUdGNiaUFnSUNBZ0lDQWdiR1YwSUc1bGQxWmhiSFZsY3lBOUlIdDlPMXh1SUNBZ0lDQWdJQ0JzWlhRZ2FHRnpUbVYzVm1Gc2RXVnpJRDBnWm1Gc2MyVTdYRzVjYmlBZ0lDQWdJQ0FnTHk4Z1EzSmxZWFJsSUhaaGJIVmxjeUJ2YmlCaFkzUnZjaUIwYUdGMElHUnZiaWQwSUdWNGFYTjBYRzRnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR3RsZVNCcGJpQnBibWhsY21sMFpXUkJZM1JwYjI0dWRtRnNkV1Z6S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2FXNW9aWEpwZEdWa1FXTjBhVzl1TG5aaGJIVmxjeTVvWVhOUGQyNVFjbTl3WlhKMGVTaHJaWGtwSUNZbUlDRjBhR2x6TG5aaGJIVmxjeTVvWVhOUGQyNVFjbTl3WlhKMGVTaHJaWGtwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JtVjNWbUZzZFdWelcydGxlVjBnUFNCN2ZUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQm9ZWE5PWlhkV1lXeDFaWE1nUFNCMGNuVmxPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnYVdZZ0tHaGhjMDVsZDFaaGJIVmxjeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1elpYUW9leUIyWVd4MVpYTTZJRzVsZDFaaGJIVmxjeUI5S1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnBibWhsY21sMFpXUkJZM1JwYjI0dWMyVjBLR0p2ZFc1a1VISnZjSE1vZEdocGN5d2dhVzVvWlhKcGRHVmtRV04wYVc5dUtTazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5cGNiaUFnSUNBZ0lDQWdVM1JoY25RZ1FXTjBiM0pjYmx4dUlDQWdJQ0FnSUNCSlppQkJZM1JwYjI0Z2FYTWdjSEp2ZG1sa1pXUXNJR0pwYm1RZ2FYUWdkRzhnZEdocGN5QkJZM1J2Y2lCaGJtUWdjM1JoY25SY2JseHVJQ0FnSUNBZ0lDQkFjR0Z5WVcwZ0tHOXdkR2x2Ym1Gc0tTQmJRV04wYVc5dVhWeHVJQ0FnSUNvdlhHNGdJQ0FnYzNSaGNuUW9LU0I3WEc0Z0lDQWdJQ0FnSUhOMWNHVnlMbk4wWVhKMEtDazdYRzVjYmlBZ0lDQWdJQ0FnWm05eUlDaHNaWFFnYTJWNUlHbHVJSFJvYVhNdVlXTjBhWFpsUVdOMGFXOXVjeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0hSb2FYTXVZV04wYVhabFFXTjBhVzl1Y3k1b1lYTlBkMjVRY205d1pYSjBlU2hyWlhrcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ1lXTjBhVzl1SUQwZ2RHaHBjeTVoWTNScGRtVkJZM1JwYjI1elcydGxlVjA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tDRmhZM1JwYjI0dWFYTkJZM1JwZG1VcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWVdOMGFXOXVMbk4wWVhKMEtDazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYzNSdmNDZ3BJSHRjYmlBZ0lDQWdJQ0FnYzNWd1pYSXVjM1J2Y0NncE8xeHVYRzRnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR3RsZVNCcGJpQjBhR2x6TG1GamRHbDJaVUZqZEdsdmJuTXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxtRmpkR2wyWlVGamRHbHZibk11YUdGelQzZHVVSEp2Y0dWeWRIa29hMlY1S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WVdOMGFYWmxRV04wYVc5dWMxdHJaWGxkTG5OMGIzQW9LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhkcGJHeFNaVzVrWlhJb1lXTjBiM0lzSUdaeVlXMWxVM1JoYlhBc0lHVnNZWEJ6WldRcElIdGNiaUFnSUNBZ0lDQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0IwYUdsekxtNTFiVlpoYkhWbFMyVjVjenNnYVNzcktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0JyWlhrZ1BTQjBhR2x6TG5aaGJIVmxTMlY1YzF0cFhUdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJSFpoYkhWbElEMGdkR2hwY3k1MllXeDFaWE5iYTJWNVhUdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJR1J5YVhabGNpQTlJSFpoYkhWbExtNTFiVVJ5YVhabGNuTWdQeUIwYUdsekxtRmpkR2wyWlVGamRHbHZibk5iZG1Gc2RXVXVaSEpwZG1WeWMxc3dYVjBnT2lCbVlXeHpaVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHeGxkQ0J1WlhkRGRYSnlaVzUwSUQwZ2RtRnNkV1V1Ym5WdFJISnBkbVZ5Y3lBL0lHUnlhWFpsY2k1MllXeDFaWE5iYTJWNVhTNWpkWEp5Wlc1MElEb2dkbUZzZFdVdVkzVnljbVZ1ZER0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIWmhiSFZsTG1Kc1pXNWtRM1Z5ZG1VcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnVaWGREZFhKeVpXNTBJRDBnZG1Gc2RXVXVZbXhsYm1SRGRYSjJaU2dwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQjJZV3gxWlM1amRYSnlaVzUwSUQwZ2JtVjNRM1Z5Y21WdWREdGNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJ6ZFhCbGNpNTNhV3hzVW1WdVpHVnlLR0ZqZEc5eUxDQm1jbUZ0WlZOMFlXMXdMQ0JsYkdGd2MyVmtLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQXZLbHh1SUNBZ0lDQWdJQ0JCWkdRZ1lXTjBhWFpsSUdGamRHbHZibk5jYmx4dUlDQWdJQ0FnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDFjYmlBZ0lDQWdJQ0FnUUhCaGNtRnRJRnRCWTNScGIyNWRYRzRnSUNBZ0tpOWNiaUFnSUNCaFkzUnBkbUYwWlVGamRHbHZiaWhwWkN3Z1lXTjBhVzl1S1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WVdOMGFYWmxRV04wYVc5dWMxdHBaRjBnUFNCaFkzUnBiMjQ3WEc0Z0lDQWdJQ0FnSUhSb2FYTXViblZ0UVdOMGFYWmxRV04wYVc5dWN5c3JPMXh1WEc0Z0lDQWdJQ0FnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z1lXTjBhVzl1TG01MWJWWmhiSFZsUzJWNWN6c2dhU3NyS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQnJaWGtnUFNCaFkzUnBiMjR1ZG1Gc2RXVkxaWGx6VzJsZE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdZV04wYVc5dVZtRnNkV1VnUFNCaFkzUnBiMjR1ZG1Gc2RXVnpXMnRsZVYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQjJZV3gxWlNBOUlIUm9hWE11ZG1Gc2RXVnpXMnRsZVYwN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUM4dklFbG1JSGRsSjNKbElHSnNaVzVrYVc1bklIUm9hWE1nWVdOMGFXOXVMQ0JoYm1RZ2RHaGxjbVVuY3lCdmJpQmhiSEpsWVdSNUlHbHVJSEJ5YjJkeVpYTnpYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9ZV04wYVc5dUxtSnNaVzVrSUNZbUlIWmhiSFZsTG01MWJVUnlhWFpsY25NZ0ppWWdJWFpoYkhWbExtSnNaVzVrUTNWeWRtVWdKaVlnS0haaGJIVmxMbVJ5YVhabGNuTmJNRjB1Y0hKdmRHOTBlWEJsSUQwOVBTQmhZM1JwYjI0dWNISnZkRzkwZVhCbEtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFpoYkhWbExtSnNaVzVrUTNWeWRtVWdQU0JuWlc1bGNtRjBaVUpzWlc1a1EzVnlkbVVvZEdocGN5NWhZM1JwZG1WQlkzUnBiMjV6VzNaaGJIVmxMbVJ5YVhabGNuTmJNRjFkTENCaFkzUnBiMjRzSUhaaGJIVmxMQ0JyWlhrcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJR2xtSUNnaFlXTjBhVzl1TG1selUyTnlkV0ppYVc1bktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZzZFdVdVlteGxibVJEZFhKMlpTQTlJSFZ1WkdWbWFXNWxaRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0F2THlCUVlYTnpJRUZqZEc5eUlIWmhiSFZsSUhCeWIzQmxjblJwWlhNZ2RHOGdRV04wYVc5dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1lXTjBhVzl1Vm1Gc2RXVXVkbVZzYjJOcGRIa2dLejBnZG1Gc2RXVXVkbVZzYjJOcGRIazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZV04wYVc5dVZtRnNkV1V1Wm5KdmJTQTlJR0ZqZEdsdmJsWmhiSFZsTG1OMWNuSmxiblFnUFNCMllXeDFaUzVqZFhKeVpXNTBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNCMllXeDFaUzVrY21sMlpYSnpJRDBnVzJsa1hUdGNiaUFnSUNBZ0lDQWdJQ0FnSUhaaGJIVmxMbTUxYlVSeWFYWmxjbk1nUFNCMllXeDFaUzVrY21sMlpYSnpMbXhsYm1kMGFEdGNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUdsbUlDaDBhR2x6TG01MWJVRmpkR2wyWlVGamRHbHZibk1wSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSE4xY0dWeUxuTjBZWEowS0NrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNBdktseHVJQ0FnSUNBZ0lDQlNaVzF2ZG1VZ1lXTjBhWFpsSUdGamRHbHZibk5jYmx4dUlDQWdJQ0FnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDFjYmlBZ0lDQXFMMXh1SUNBZ0lHUmxZV04wYVhaaGRHVkJZM1JwYjI0b2FXUXBJSHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdZV04wYVc5dUlEMGdkR2hwY3k1aFkzUnBkbVZCWTNScGIyNXpXMmxrWFR0Y2JseHVJQ0FnSUNBZ0lDQnBaaUFvWVdOMGFXOXVLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQm1iM0lnS0d4bGRDQnBJRDBnTURzZ2FTQThJR0ZqZEdsdmJpNXVkVzFXWVd4MVpVdGxlWE03SUdrckt5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElHdGxlU0E5SUdGamRHbHZiaTUyWVd4MVpVdGxlWE5iYVYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnZG1Gc2RXVWdQU0IwYUdsekxuWmhiSFZsYzF0clpYbGRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElHUnlhWFpsY2tsdVpHVjRJRDBnZG1Gc2RXVXVaSEpwZG1WeWN5NXBibVJsZUU5bUtHbGtLVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDaGtjbWwyWlhKSmJtUmxlQ0FoUFQwZ0xURXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnNkV1V1WkhKcGRtVnljeTV6Y0d4cFkyVW9aSEpwZG1WeVNXNWtaWGdzSURFcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IyWVd4MVpTNXVkVzFFY21sMlpYSnpMUzA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQmtaV3hsZEdVZ2RHaHBjeTVoWTNScGRtVkJZM1JwYjI1elcybGtYVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11Ym5WdFFXTjBhWFpsUVdOMGFXOXVjeTB0TzF4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdhV1lnS0NGMGFHbHpMbTUxYlVGamRHbDJaVUZqZEdsdmJuTWdKaVlnZEdocGN5NXBjMEZqZEdsMlpTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2MzVndaWEl1YzNSdmNDZ3BPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVnh1ZlZ4dVhHNUdiRzkzTG5CeWIzUnZkSGx3WlM1a1pXWmhkV3gwVm1Gc2RXVWdQU0JCWTNScGIyNHVaWGgwWlc1a1JHVm1ZWFZzZEZaaGJIVmxLSHRjYmlBZ0lDQmtjbWwyWlhKek9pQmJYU3hjYmlBZ0lDQnVkVzFFY21sMlpYSnpPaUF3WEc1OUtUdGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdSbXh2ZHp0Y2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL0Zsb3cuanNcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfQWN0aW9uMiA9IHJlcXVpcmUoJy4vQWN0aW9uJyk7XG5cbnZhciBfQWN0aW9uMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0FjdGlvbjIpO1xuXG52YXIgX3ByZXNldEVhc2luZyA9IHJlcXVpcmUoJy4vZWFzaW5nL3ByZXNldC1lYXNpbmcnKTtcblxudmFyIF9wcmVzZXRFYXNpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlc2V0RWFzaW5nKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBDT1VOVCA9ICdDb3VudCc7XG52YXIgTkVYVF9TVEVQUyA9IHtcbiAgICBsb29wOiAncmVzdGFydCcsXG4gICAgeW95bzogJ3JldmVyc2UnLFxuICAgIGZsaXA6ICdmbGlwVmFsdWVzJ1xufTtcblxudmFyIFR3ZWVuID0gZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgICBfaW5oZXJpdHMoVHdlZW4sIF9BY3Rpb24pO1xuXG4gICAgZnVuY3Rpb24gVHdlZW4oKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUd2Vlbik7XG5cbiAgICAgICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfVxuXG4gICAgVHdlZW4ucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuZWxhcHNlZCA9IDA7XG4gICAgICAgIHRoaXMuZmxpcENvdW50ID0gdGhpcy55b3lvQ291bnQgPSB0aGlzLmxvb3BDb3VudCA9IDA7XG4gICAgICAgIHRoaXMuaXNTY3J1YmJpbmcgPSBmYWxzZTtcblxuICAgICAgICByZXR1cm4gX0FjdGlvbi5wcm90b3R5cGUuc3RhcnQuY2FsbCh0aGlzKTtcbiAgICB9O1xuXG4gICAgVHdlZW4ucHJvdG90eXBlLm9uVXBkYXRlID0gZnVuY3Rpb24gb25VcGRhdGUodHdlZW4sIGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgICAgICAgdmFyIHByb2dyZXNzVGFyZ2V0ID0gdGhpcy5wbGF5RGlyZWN0aW9uID09PSAxID8gMSA6IDA7XG5cbiAgICAgICAgdGhpcy5lbmRlZCA9IHRydWU7XG5cbiAgICAgICAgaWYgKCF0aGlzLmlzU2NydWJiaW5nKSB7XG4gICAgICAgICAgICB0aGlzLmVsYXBzZWQgKz0gZWxhcHNlZCAqIHRoaXMuZGlsYXRlICogdGhpcy5wbGF5RGlyZWN0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gdGhpcy52YWx1ZUtleXNbaV07XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuXG4gICAgICAgICAgICB2YXIgcHJvZ3Jlc3MgPSAoMCwgX2NhbGMucmVzdHJpY3QpKCgwLCBfY2FsYy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSkodGhpcy5lbGFwc2VkIC0gdmFsdWUuZGVsYXksIDAsIHZhbHVlLmR1cmF0aW9uKSwgMCwgMSk7XG5cbiAgICAgICAgICAgIC8vIE1hcmsgVHdlZW4gYXMgTk9UIGVuZGVkIGlmIHN0aWxsIGluIHByb2dyZXNzXG4gICAgICAgICAgICBpZiAocHJvZ3Jlc3MgIT09IHByb2dyZXNzVGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTdGVwIHByb2dyZXNzIGlmIHdlJ3JlIHN0ZXBwaW5nXG4gICAgICAgICAgICBpZiAodmFsdWUuc3RlcHMpIHtcbiAgICAgICAgICAgICAgICBwcm9ncmVzcyA9ICgwLCBfY2FsYy5zdGVwUHJvZ3Jlc3MpKHByb2dyZXNzLCB2YWx1ZS5zdGVwcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEVhc2UgcHJvZ3Jlc3NcbiAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSAoMCwgX2NhbGMuZWFzZSkocHJvZ3Jlc3MsIHZhbHVlLmZyb20sIHZhbHVlLnRvLCB2YWx1ZS5lYXNlKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBUd2Vlbi5wcm90b3R5cGUub25GcmFtZUVuZCA9IGZ1bmN0aW9uIG9uRnJhbWVFbmQoKSB7XG4gICAgICAgIGlmICh0aGlzLmVuZGVkICYmICF0aGlzLmlzU2NydWJiaW5nKSB7XG4gICAgICAgICAgICB2YXIgc3RlcFRha2VuID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBORVhUX1NURVBTKSB7XG4gICAgICAgICAgICAgICAgaWYgKE5FWFRfU1RFUFMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKDAsIF91dGlscy5pc051bSkodGhpc1trZXldKSAmJiB0aGlzW2tleV0gPiB0aGlzW2tleSArIENPVU5UXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1trZXkgKyBDT1VOVF0rKztcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXBUYWtlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW05FWFRfU1RFUFNba2V5XV0oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFzdGVwVGFrZW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgVHdlZW4ucHJvdG90eXBlLmZsaXBWYWx1ZXMgPSBmdW5jdGlvbiBmbGlwVmFsdWVzKCkge1xuICAgICAgICB2YXIgdmFsdWVzID0gdGhpcy52YWx1ZXM7XG5cbiAgICAgICAgdGhpcy5lbGFwc2VkID0gdGhpcy5kdXJhdGlvbiAtIHRoaXMuZWxhcHNlZDtcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB2YWx1ZXNba2V5XTtcbiAgICAgICAgICAgICAgICB2YXIgX3JlZiA9IFt2YWx1ZS5mcm9tLCB2YWx1ZS50b107XG4gICAgICAgICAgICAgICAgdmFsdWUudG8gPSBfcmVmWzBdO1xuICAgICAgICAgICAgICAgIHZhbHVlLmZyb20gPSBfcmVmWzFdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIFR3ZWVuLnByb3RvdHlwZS5yZXZlcnNlID0gZnVuY3Rpb24gcmV2ZXJzZSgpIHtcbiAgICAgICAgdGhpcy5wbGF5RGlyZWN0aW9uICo9IC0xO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgVHdlZW4ucHJvdG90eXBlLnJlc3RhcnQgPSBmdW5jdGlvbiByZXN0YXJ0KCkge1xuICAgICAgICB0aGlzLmVsYXBzZWQgPSB0aGlzLnBsYXlEaXJlY3Rpb24gPT09IDEgPyAwIDogdGhpcy5kdXJhdGlvbjtcbiAgICAgICAgdGhpcy5zdGFydGVkID0gKDAsIF91dGlscy5jdXJyZW50VGltZSkoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIFR3ZWVuLnByb3RvdHlwZS5zZWVrID0gZnVuY3Rpb24gc2Vlayhwcm9ncmVzcykge1xuICAgICAgICB0aGlzLnNlZWtUaW1lKHRoaXMuZHVyYXRpb24gKiBwcm9ncmVzcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBUd2Vlbi5wcm90b3R5cGUuc2Vla1RpbWUgPSBmdW5jdGlvbiBzZWVrVGltZShlbGFwc2VkKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0FjdGl2ZSB8fCB0aGlzLmlzU2NydWJiaW5nKSB7XG4gICAgICAgICAgICB0aGlzLm9uY2UoKTtcbiAgICAgICAgICAgIHRoaXMuaXNTY3J1YmJpbmcgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5lbGFwc2VkID0gZWxhcHNlZDtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgcmV0dXJuIFR3ZWVuO1xufShfQWN0aW9uMy5kZWZhdWx0KTtcblxuVHdlZW4ucHJvdG90eXBlLmRlZmF1bHRWYWx1ZVByb3AgPSAndG8nO1xuVHdlZW4ucHJvdG90eXBlLmRlZmF1bHRWYWx1ZSA9IF9BY3Rpb24zLmRlZmF1bHQuZXh0ZW5kRGVmYXVsdFZhbHVlKHtcbiAgICBkZWxheTogMCxcbiAgICBkdXJhdGlvbjogMzAwLFxuICAgIGVhc2U6IF9wcmVzZXRFYXNpbmcyLmRlZmF1bHQuZWFzZU91dCxcbiAgICBlbGFwc2VkOiAwLFxuICAgIGZyb206IDAsXG4gICAgc3RlcHM6IDAsXG4gICAgdG86IDAsXG4gICAgcm91bmQ6IGZhbHNlXG59KTtcblR3ZWVuLnByb3RvdHlwZS5kZWZhdWx0UHJvcHMgPSBfQWN0aW9uMy5kZWZhdWx0LmV4dGVuZERlZmF1bHRQcm9wcyh7XG4gICAgYmxlbmQ6IHRydWUsXG4gICAgZGlsYXRlOiAxLFxuICAgIGxvb3A6IDAsXG4gICAgeW95bzogMCxcbiAgICBmbGlwOiAwLFxuICAgIGxvb3BDb3VudDogMCxcbiAgICB5b3lvQ291bnQ6IDAsXG4gICAgZmxpcENvdW50OiAwLFxuICAgIHBsYXlEaXJlY3Rpb246IDEsXG4gICAgaXNTY3J1YmJpbmc6IGZhbHNlLFxuICAgIGVuZGVkOiBmYWxzZSxcbiAgICBlbGFwc2VkOiAwXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gVHdlZW47XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwxUjNaV1Z1TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenRCUVV0QkxFbEJRVTBzVVVGQlVTeFBRVUZTTzBGQlEwNHNTVUZCVFN4aFFVRmhPMEZCUTJZc1ZVRkJUU3hUUVVGT08wRkJRMEVzVlVGQlRTeFRRVUZPTzBGQlEwRXNWVUZCVFN4WlFVRk9PME5CU0VVN08wbEJUVUU3T3pzN096czdPenR2UWtGRFJpeDVRa0ZCVVR0QlFVTktMR0ZCUVVzc1QwRkJUQ3hIUVVGbExFTkJRV1lzUTBGRVNUdEJRVVZLTEdGQlFVc3NVMEZCVEN4SFFVRnBRaXhMUVVGTExGTkJRVXdzUjBGQmFVSXNTMEZCU3l4VFFVRk1MRWRCUVdsQ0xFTkJRV3BDTEVOQlJqbENPMEZCUjBvc1lVRkJTeXhYUVVGTUxFZEJRVzFDTEV0QlFXNUNMRU5CU0VrN08wRkJTMG9zWlVGQlR5eHJRa0ZCVFN4TFFVRk9MRmRCUVZBc1EwRk1TVHM3TzBGQlJFNHNiMEpCVTBZc05rSkJRVk1zVDBGQlR5eFpRVUZaTEZOQlFWTTdRVUZEYWtNc1dVRkJUU3hwUWtGQmFVSXNTVUZCUXl4RFFVRkxMR0ZCUVV3c1MwRkJkVUlzUTBGQmRrSXNSMEZCTkVJc1EwRkJOMElzUjBGQmFVTXNRMEZCYWtNc1EwRkVWVHM3UVVGSGFrTXNZVUZCU3l4TFFVRk1MRWRCUVdFc1NVRkJZaXhEUVVocFF6czdRVUZMYWtNc1dVRkJTU3hEUVVGRExFdEJRVXNzVjBGQlRDeEZRVUZyUWp0QlFVTnVRaXhwUWtGQlN5eFBRVUZNTEVsQlFXZENMRTlCUVVNc1IwRkJWU3hMUVVGTExFMUJRVXdzUjBGQlpTeExRVUZMTEdGQlFVd3NRMEZFZGtJN1UwRkJka0k3TzBGQlNVRXNZVUZCU3l4SlFVRkpMRWxCUVVrc1EwRkJTaXhGUVVGUExFbEJRVWtzUzBGQlN5eFpRVUZNTEVWQlFXMUNMRWRCUVhaRExFVkJRVFJETzBGQlEzaERMR2RDUVVGTkxFMUJRVTBzUzBGQlN5eFRRVUZNTEVOQlFXVXNRMEZCWml4RFFVRk9MRU5CUkd0RE8wRkJSWGhETEdkQ1FVRk5MRkZCUVZFc1MwRkJTeXhOUVVGTUxFTkJRVmtzUjBGQldpeERRVUZTTEVOQlJtdERPenRCUVVsNFF5eG5Ra0ZCU1N4WFFVRlhMRzlDUVVGVExHZERRVUZ4UWl4TFFVRkxMRTlCUVV3c1IwRkJaU3hOUVVGTkxFdEJRVTRzUlVGQllTeERRVUZxUkN4RlFVRnZSQ3hOUVVGTkxGRkJRVTRzUTBGQk4wUXNSVUZCT0VVc1EwRkJPVVVzUlVGQmFVWXNRMEZCYWtZc1EwRkJXRHM3TzBGQlNtOURMR2RDUVU5d1F5eGhRVUZoTEdOQlFXSXNSVUZCTmtJN1FVRkROMElzY1VKQlFVc3NTMEZCVEN4SFFVRmhMRXRCUVdJc1EwRkVOa0k3WVVGQmFrTTdPenRCUVZCM1F5eG5Ra0ZaY0VNc1RVRkJUU3hMUVVGT0xFVkJRV0U3UVVGRFlpd3lRa0ZCVnl4M1FrRkJZU3hSUVVGaUxFVkJRWFZDTEUxQlFVMHNTMEZCVGl4RFFVRnNReXhEUVVSaE8yRkJRV3BDT3pzN1FVRmFkME1zYVVKQmFVSjRReXhEUVVGTkxFOUJRVTRzUjBGQlowSXNaMEpCUVVzc1VVRkJUQ3hGUVVGbExFMUJRVTBzU1VGQlRpeEZRVUZaTEUxQlFVMHNSVUZCVGl4RlFVRlZMRTFCUVUwc1NVRkJUaXhEUVVGeVJDeERRV3BDZDBNN1UwRkJOVU03T3p0QlFXeENSaXh2UWtGMVEwWXNiVU5CUVdFN1FVRkRWQ3haUVVGSkxFdEJRVXNzUzBGQlRDeEpRVUZqTEVOQlFVTXNTMEZCU3l4WFFVRk1MRVZCUVd0Q08wRkJRMnBETEdkQ1FVRkpMRmxCUVZrc1MwRkJXaXhEUVVRMlFqczdRVUZIYWtNc2FVSkJRVXNzU1VGQlNTeEhRVUZLTEVsQlFWY3NWVUZCYUVJc1JVRkJORUk3UVVGRGVFSXNiMEpCUVVrc1YwRkJWeXhqUVVGWUxFTkJRVEJDTEVkQlFURkNMRU5CUVVvc1JVRkJiME03UVVGRGFFTXNkMEpCUVVrc2EwSkJRVTBzUzBGQlN5eEhRVUZNTEVOQlFVNHNTMEZCYjBJc1MwRkJTeXhIUVVGTUxFbEJRVmtzUzBGQlN5eE5RVUZOTEV0QlFVNHNRMEZCYWtJc1JVRkJLMEk3UVVGRGJrUXNOa0pCUVVzc1RVRkJUU3hMUVVGT0xFTkJRVXdzUjBGRWJVUTdRVUZGYmtRc2IwTkJRVmtzU1VGQldpeERRVVp0UkR0QlFVZHVSQ3cyUWtGQlN5eFhRVUZYTEVkQlFWZ3NRMEZCVEN4SlFVaHRSRHR4UWtGQmRrUTdhVUpCUkVvN1lVRkVTanM3UVVGVlFTeG5Ra0ZCU1N4RFFVRkRMRk5CUVVRc1JVRkJXVHRCUVVOYUxIRkNRVUZMTEZGQlFVd3NSMEZFV1R0aFFVRm9RanRUUVdKS096czdRVUY0UTBZc2IwSkJNa1JHTEcxRFFVRmhPMEZCUTFRc1dVRkJUU3hUUVVGVExFdEJRVXNzVFVGQlRDeERRVVJPT3p0QlFVZFVMR0ZCUVVzc1QwRkJUQ3hIUVVGbExFdEJRVXNzVVVGQlRDeEhRVUZuUWl4TFFVRkxMRTlCUVV3c1EwRklkRUk3TzBGQlMxUXNZVUZCU3l4SlFVRkpMRWRCUVVvc1NVRkJWeXhOUVVGb1FpeEZRVUYzUWp0QlFVTndRaXhuUWtGQlNTeFBRVUZQTEdOQlFWQXNRMEZCYzBJc1IwRkJkRUlzUTBGQlNpeEZRVUZuUXp0QlFVTTFRaXh2UWtGQlRTeFJRVUZSTEU5QlFVOHNSMEZCVUN4RFFVRlNMRU5CUkhOQ096SkNRVVZJTEVOQlFVTXNUVUZCVFN4SlFVRk9MRVZCUVZrc1RVRkJUU3hGUVVGT0xFVkJSbFk3UVVGRk0wSXNjMEpCUVUwc1JVRkJUaXhYUVVZeVFqdEJRVVZxUWl4elFrRkJUU3hKUVVGT0xGZEJSbWxDTzJGQlFXaERPMU5CUkVvN08wRkJUMEVzWlVGQlR5eEpRVUZRTEVOQldsTTdPenRCUVRORVdDeHZRa0V3UlVZc05rSkJRVlU3UVVGRFRpeGhRVUZMTEdGQlFVd3NTVUZCYzBJc1EwRkJReXhEUVVGRUxFTkJSR2hDTzBGQlJVNHNaVUZCVHl4SlFVRlFMRU5CUmswN096dEJRVEZGVWl4dlFrRXJSVVlzTmtKQlFWVTdRVUZEVGl4aFFVRkxMRTlCUVV3c1IwRkJaU3hKUVVGRExFTkJRVXNzWVVGQlRDeExRVUYxUWl4RFFVRjJRaXhIUVVFMFFpeERRVUUzUWl4SFFVRnBReXhMUVVGTExGRkJRVXdzUTBGRU1VTTdRVUZGVGl4aFFVRkxMRTlCUVV3c1IwRkJaU3g1UWtGQlppeERRVVpOTzBGQlIwNHNaVUZCVHl4SlFVRlFMRU5CU0UwN096dEJRUzlGVWl4dlFrRnhSa1lzY1VKQlFVc3NWVUZCVlR0QlFVTllMR0ZCUVVzc1VVRkJUQ3hEUVVGakxFdEJRVXNzVVVGQlRDeEhRVUZuUWl4UlFVRm9RaXhEUVVGa0xFTkJSRmM3UVVGRldDeGxRVUZQTEVsQlFWQXNRMEZHVnpzN08wRkJja1ppTEc5Q1FUQkdSaXcyUWtGQlV5eFRRVUZUTzBGQlEyUXNXVUZCU1N4RFFVRkRMRXRCUVVzc1VVRkJUQ3hKUVVGcFFpeExRVUZMTEZkQlFVd3NSVUZCYTBJN1FVRkRjRU1zYVVKQlFVc3NTVUZCVEN4SFFVUnZRenRCUVVWd1F5eHBRa0ZCU3l4WFFVRk1MRWRCUVcxQ0xFbEJRVzVDTEVOQlJtOURPMU5CUVhoRE96dEJRVXRCTEdGQlFVc3NUMEZCVEN4SFFVRmxMRTlCUVdZc1EwRk9ZenM3UVVGUlpDeGxRVUZQTEVsQlFWQXNRMEZTWXpzN08xZEJNVVpvUWpzN08wRkJjMGRPTEUxQlFVMHNVMEZCVGl4RFFVRm5RaXhuUWtGQmFFSXNSMEZCYlVNc1NVRkJia003UVVGRFFTeE5RVUZOTEZOQlFVNHNRMEZCWjBJc1dVRkJhRUlzUjBGQkswSXNhVUpCUVU4c2EwSkJRVkFzUTBGQk1FSTdRVUZEY2tRc1YwRkJUeXhEUVVGUU8wRkJRMEVzWTBGQlZTeEhRVUZXTzBGQlEwRXNWVUZCVFN4MVFrRkJUeXhQUVVGUU8wRkJRMDRzWVVGQlV5eERRVUZVTzBGQlEwRXNWVUZCVFN4RFFVRk9PMEZCUTBFc1YwRkJUeXhEUVVGUU8wRkJRMEVzVVVGQlNTeERRVUZLTzBGQlEwRXNWMEZCVHl4TFFVRlFPME5CVWpKQ0xFTkJRUzlDTzBGQlZVRXNUVUZCVFN4VFFVRk9MRU5CUVdkQ0xGbEJRV2hDTEVkQlFTdENMR2xDUVVGUExHdENRVUZRTEVOQlFUQkNPMEZCUTNKRUxGZEJRVThzU1VGQlVEdEJRVU5CTEZsQlFWRXNRMEZCVWp0QlFVTkJMRlZCUVUwc1EwRkJUanRCUVVOQkxGVkJRVTBzUTBGQlRqdEJRVU5CTEZWQlFVMHNRMEZCVGp0QlFVTkJMR1ZCUVZjc1EwRkJXRHRCUVVOQkxHVkJRVmNzUTBGQldEdEJRVU5CTEdWQlFWY3NRMEZCV0R0QlFVTkJMRzFDUVVGbExFTkJRV1k3UVVGRFFTeHBRa0ZCWVN4TFFVRmlPMEZCUTBFc1YwRkJUeXhMUVVGUU8wRkJRMEVzWVVGQlV5eERRVUZVTzBOQldqSkNMRU5CUVM5Q096dHJRa0ZsWlNJc0ltWnBiR1VpT2lKVWQyVmxiaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnUVdOMGFXOXVJR1p5YjIwZ0p5NHZRV04wYVc5dUp6dGNibWx0Y0c5eWRDQmxZWE5wYm1jZ1puSnZiU0FuTGk5bFlYTnBibWN2Y0hKbGMyVjBMV1ZoYzJsdVp5YzdYRzVwYlhCdmNuUWdleUJqZFhKeVpXNTBWR2x0WlN3Z2FYTk9kVzBnZlNCbWNtOXRJQ2N1TGk5cGJtTXZkWFJwYkhNbk8xeHVhVzF3YjNKMElIc2daV0Z6WlN3Z2NtVnpkSEpwWTNRc0lHZGxkRkJ5YjJkeVpYTnpSbkp2YlZaaGJIVmxMQ0J6ZEdWd1VISnZaM0psYzNNZ2ZTQm1jbTl0SUNjdUxpOXBibU12WTJGc1l5YzdYRzVjYm1OdmJuTjBJRU5QVlU1VUlEMGdKME52ZFc1MEp6dGNibU52Ym5OMElFNUZXRlJmVTFSRlVGTWdQU0I3WEc0Z0lDQWdiRzl2Y0RvZ0ozSmxjM1JoY25RbkxGeHVJQ0FnSUhsdmVXODZJQ2R5WlhabGNuTmxKeXhjYmlBZ0lDQm1iR2x3T2lBblpteHBjRlpoYkhWbGN5ZGNibjA3WEc1Y2JtTnNZWE56SUZSM1pXVnVJR1Y0ZEdWdVpITWdRV04wYVc5dUlIdGNiaUFnSUNCemRHRnlkQ2dwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVsYkdGd2MyVmtJRDBnTUR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVtYkdsd1EyOTFiblFnUFNCMGFHbHpMbmx2ZVc5RGIzVnVkQ0E5SUhSb2FYTXViRzl2Y0VOdmRXNTBJRDBnTUR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVwYzFOamNuVmlZbWx1WnlBOUlHWmhiSE5sTzF4dVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCemRYQmxjaTV6ZEdGeWRDZ3BPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHOXVWWEJrWVhSbEtIUjNaV1Z1TENCbWNtRnRaVk4wWVcxd0xDQmxiR0Z3YzJWa0tTQjdYRzRnSUNBZ0lDQWdJR052Ym5OMElIQnliMmR5WlhOelZHRnlaMlYwSUQwZ0tIUm9hWE11Y0d4aGVVUnBjbVZqZEdsdmJpQTlQVDBnTVNrZ1B5QXhJRG9nTUR0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG1WdVpHVmtJRDBnZEhKMVpUdGNibHh1SUNBZ0lDQWdJQ0JwWmlBb0lYUm9hWE11YVhOVFkzSjFZbUpwYm1jcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVaV3hoY0hObFpDQXJQU0FvWld4aGNITmxaQ0FxSUhSb2FYTXVaR2xzWVhSbEtTQXFJSFJvYVhNdWNHeGhlVVJwY21WamRHbHZianRjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2dkR2hwY3k1dWRXMVdZV3gxWlV0bGVYTTdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdhMlY1SUQwZ2RHaHBjeTUyWVd4MVpVdGxlWE5iYVYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQjJZV3gxWlNBOUlIUm9hWE11ZG1Gc2RXVnpXMnRsZVYwN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUd4bGRDQndjbTluY21WemN5QTlJSEpsYzNSeWFXTjBLR2RsZEZCeWIyZHlaWE56Um5KdmJWWmhiSFZsS0hSb2FYTXVaV3hoY0hObFpDQXRJSFpoYkhWbExtUmxiR0Y1TENBd0xDQjJZV3gxWlM1a2RYSmhkR2x2Ymlrc0lEQXNJREVwTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCTllYSnJJRlIzWldWdUlHRnpJRTVQVkNCbGJtUmxaQ0JwWmlCemRHbHNiQ0JwYmlCd2NtOW5jbVZ6YzF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0hCeWIyZHlaWE56SUNFOVBTQndjbTluY21WemMxUmhjbWRsZENrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11Wlc1a1pXUWdQU0JtWVd4elpUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1UzUmxjQ0J3Y205bmNtVnpjeUJwWmlCM1pTZHlaU0J6ZEdWd2NHbHVaMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFpoYkhWbExuTjBaWEJ6S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NISnZaM0psYzNNZ1BTQnpkR1Z3VUhKdlozSmxjM01vY0hKdlozSmxjM01zSUhaaGJIVmxMbk4wWlhCektUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1JXRnpaU0J3Y205bmNtVnpjMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RtRnNkV1V1WTNWeWNtVnVkQ0E5SUdWaGMyVW9jSEp2WjNKbGMzTXNJSFpoYkhWbExtWnliMjBzSUhaaGJIVmxMblJ2TENCMllXeDFaUzVsWVhObEtUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lHOXVSbkpoYldWRmJtUW9LU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDaDBhR2x6TG1WdVpHVmtJQ1ltSUNGMGFHbHpMbWx6VTJOeWRXSmlhVzVuS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JzWlhRZ2MzUmxjRlJoYTJWdUlEMGdabUZzYzJVN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUJPUlZoVVgxTlVSVkJUS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLRTVGV0ZSZlUxUkZVRk11YUdGelQzZHVVSEp2Y0dWeWRIa29hMlY1S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2FYTk9kVzBvZEdocGMxdHJaWGxkS1NBbUppQjBhR2x6VzJ0bGVWMGdQaUIwYUdselcydGxlU0FySUVOUFZVNVVYU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGMxdHJaWGtnS3lCRFQxVk9WRjByS3p0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhOMFpYQlVZV3RsYmlBOUlIUnlkV1U3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdselcwNUZXRlJmVTFSRlVGTmJhMlY1WFYwb0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0NGemRHVndWR0ZyWlc0cElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG1OdmJYQnNaWFJsS0NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0JtYkdsd1ZtRnNkV1Z6S0NrZ2UxeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCMllXeDFaWE1nUFNCMGFHbHpMblpoYkhWbGN6dGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxtVnNZWEJ6WldRZ1BTQjBhR2x6TG1SMWNtRjBhVzl1SUMwZ2RHaHBjeTVsYkdGd2MyVmtPMXh1WEc0Z0lDQWdJQ0FnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUIyWVd4MVpYTXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2gyWVd4MVpYTXVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2EyVjVLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJSFpoYkhWbElEMGdkbUZzZFdWelcydGxlVjA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnVzNaaGJIVmxMblJ2TENCMllXeDFaUzVtY205dFhTQTlJRnQyWVd4MVpTNW1jbTl0TENCMllXeDFaUzUwYjEwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjenRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnlaWFpsY25ObEtDa2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxuQnNZWGxFYVhKbFkzUnBiMjRnS2owZ0xURTdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQWdJSDFjYmx4dUlDQWdJSEpsYzNSaGNuUW9LU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaV3hoY0hObFpDQTlJQ2gwYUdsekxuQnNZWGxFYVhKbFkzUnBiMjRnUFQwOUlERXBJRDhnTUNBNklIUm9hWE11WkhWeVlYUnBiMjQ3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjM1JoY25SbFpDQTlJR04xY25KbGJuUlVhVzFsS0NrN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNBZ0lIMWNibHh1SUNBZ0lITmxaV3NvY0hKdlozSmxjM01wSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV6WldWclZHbHRaU2gwYUdsekxtUjFjbUYwYVc5dUlDb2djSEp2WjNKbGMzTXBPMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3p0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J6WldWclZHbHRaU2hsYkdGd2MyVmtLU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDZ2hkR2hwY3k1cGMwRmpkR2wyWlNCOGZDQjBhR2x6TG1selUyTnlkV0ppYVc1bktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbTl1WTJVb0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVhWE5UWTNKMVltSnBibWNnUFNCMGNuVmxPMXh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVsYkdGd2MyVmtJRDBnWld4aGNITmxaRHRjYmx4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnSUNCOVhHNTlYRzVjYmxSM1pXVnVMbkJ5YjNSdmRIbHdaUzVrWldaaGRXeDBWbUZzZFdWUWNtOXdJRDBnSjNSdkp6dGNibFIzWldWdUxuQnliM1J2ZEhsd1pTNWtaV1poZFd4MFZtRnNkV1VnUFNCQlkzUnBiMjR1WlhoMFpXNWtSR1ZtWVhWc2RGWmhiSFZsS0h0Y2JpQWdJQ0JrWld4aGVUb2dNQ3hjYmlBZ0lDQmtkWEpoZEdsdmJqb2dNekF3TEZ4dUlDQWdJR1ZoYzJVNklHVmhjMmx1Wnk1bFlYTmxUM1YwTEZ4dUlDQWdJR1ZzWVhCelpXUTZJREFzWEc0Z0lDQWdabkp2YlRvZ01DeGNiaUFnSUNCemRHVndjem9nTUN4Y2JpQWdJQ0IwYnpvZ01DeGNiaUFnSUNCeWIzVnVaRG9nWm1Gc2MyVmNibjBwTzF4dVZIZGxaVzR1Y0hKdmRHOTBlWEJsTG1SbFptRjFiSFJRY205d2N5QTlJRUZqZEdsdmJpNWxlSFJsYm1SRVpXWmhkV3gwVUhKdmNITW9lMXh1SUNBZ0lHSnNaVzVrT2lCMGNuVmxMRnh1SUNBZ0lHUnBiR0YwWlRvZ01TeGNiaUFnSUNCc2IyOXdPaUF3TEZ4dUlDQWdJSGx2ZVc4NklEQXNYRzRnSUNBZ1pteHBjRG9nTUN4Y2JpQWdJQ0JzYjI5d1EyOTFiblE2SURBc1hHNGdJQ0FnZVc5NWIwTnZkVzUwT2lBd0xGeHVJQ0FnSUdac2FYQkRiM1Z1ZERvZ01DeGNiaUFnSUNCd2JHRjVSR2x5WldOMGFXOXVPaUF4TEZ4dUlDQWdJR2x6VTJOeWRXSmlhVzVuT2lCbVlXeHpaU3hjYmlBZ0lDQmxibVJsWkRvZ1ptRnNjMlVzWEc0Z0lDQWdaV3hoY0hObFpEb2dNRnh1ZlNrN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElGUjNaV1Z1TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvVHdlZW4uanNcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfQWN0aW9uMiA9IHJlcXVpcmUoJy4vQWN0aW9uJyk7XG5cbnZhciBfQWN0aW9uMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0FjdGlvbjIpO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFBoeXNpY3MgPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICAgIF9pbmhlcml0cyhQaHlzaWNzLCBfQWN0aW9uKTtcblxuICAgIGZ1bmN0aW9uIFBoeXNpY3MoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQaHlzaWNzKTtcblxuICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uY2FsbC5hcHBseShfQWN0aW9uLCBbdGhpc10uY29uY2F0KGFyZ3MpKSk7XG5cbiAgICAgICAgX3RoaXMuaW5hY3RpdmVGcmFtZXMgPSAwO1xuICAgICAgICBfdGhpcy5jYWxjdWxhdGVzVmVsb2NpdHkgPSB0cnVlO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgUGh5c2ljcy5wcm90b3R5cGUub25VcGRhdGUgPSBmdW5jdGlvbiBvblVwZGF0ZShwaHlzaWNzLCBmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgICAgIHRoaXMuaGFzQ2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMudmFsdWVLZXlzW2ldO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcbiAgICAgICAgICAgIHZhciBwcmV2aW91c1ZhbHVlID0gdmFsdWUucHJldjtcblxuICAgICAgICAgICAgLy8gQXBwbHkgYWNjZWxlcmF0aW9uXG4gICAgICAgICAgICB2YWx1ZS52ZWxvY2l0eSArPSAoMCwgX2NhbGMuc3BlZWRQZXJGcmFtZSkodmFsdWUuYWNjZWxlcmF0aW9uLCBlbGFwc2VkKTtcblxuICAgICAgICAgICAgLy8gQXBwbHkgZnJpY3Rpb25cbiAgICAgICAgICAgIHZhbHVlLnZlbG9jaXR5ICo9IE1hdGgucG93KDEgLSB2YWx1ZS5mcmljdGlvbiwgZWxhcHNlZCAvIDEwMCk7XG5cbiAgICAgICAgICAgIC8vIEFwcGx5IHNwcmluZ1xuICAgICAgICAgICAgaWYgKHZhbHVlLnNwcmluZyAmJiAoMCwgX3V0aWxzLmlzTnVtKSh2YWx1ZS50bykpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGlzdGFuY2VUb1RhcmdldCA9IHZhbHVlLnRvIC0gdmFsdWUuY3VycmVudDtcbiAgICAgICAgICAgICAgICB2YWx1ZS52ZWxvY2l0eSArPSBkaXN0YW5jZVRvVGFyZ2V0ICogKDAsIF9jYWxjLnNwZWVkUGVyRnJhbWUpKHZhbHVlLnNwcmluZywgZWxhcHNlZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEFwcGx5IGxhdGVzdCB2ZWxvY2l0eVxuICAgICAgICAgICAgdmFsdWUuY3VycmVudCArPSAoMCwgX2NhbGMuc3BlZWRQZXJGcmFtZSkodmFsdWUudmVsb2NpdHksIGVsYXBzZWQpO1xuXG4gICAgICAgICAgICAvLyBEZXRlY3QgYm91bmNlXG4gICAgICAgICAgICBpZiAodmFsdWUubWluICE9PSB1bmRlZmluZWQgJiYgdmFsdWUuY3VycmVudCA8IHZhbHVlLm1pbiB8fCB2YWx1ZS5tYXggIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS5jdXJyZW50ID4gdmFsdWUubWF4KSB7XG4gICAgICAgICAgICAgICAgdmFsdWUudmVsb2NpdHkgKj0gLXZhbHVlLmJvdW5jZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdmFsdWUgaGFzIGNoYW5nZWRcbiAgICAgICAgICAgIGlmICh2YWx1ZS5jdXJyZW50ICE9PSBwcmV2aW91c1ZhbHVlIHx8IE1hdGguYWJzKHZhbHVlLnZlbG9jaXR5KSA+PSB2YWx1ZS5zdG9wU3BlZWQgfHwgdmFsdWUuc3ByaW5nICYmIHZhbHVlLmN1cnJlbnQgIT09IHZhbHVlLnRvKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBQaHlzaWNzLnByb3RvdHlwZS5vbkZyYW1lRW5kID0gZnVuY3Rpb24gb25GcmFtZUVuZCgpIHtcbiAgICAgICAgaWYgKHRoaXMubWF4SW5hY3RpdmVGcmFtZXMgIT09IEluZmluaXR5KSB7XG4gICAgICAgICAgICB0aGlzLmluYWN0aXZlRnJhbWVzID0gdGhpcy5oYXNDaGFuZ2VkID8gMSA6IHRoaXMuaW5hY3RpdmVGcmFtZXMgKyAxO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5pbmFjdGl2ZUZyYW1lcyA+PSB0aGlzLm1heEluYWN0aXZlRnJhbWVzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBQaHlzaWNzO1xufShfQWN0aW9uMy5kZWZhdWx0KTtcblxuUGh5c2ljcy5wcm90b3R5cGUuZGVmYXVsdFZhbHVlUHJvcCA9ICd2ZWxvY2l0eSc7XG5QaHlzaWNzLnByb3RvdHlwZS5kZWZhdWx0VmFsdWUgPSBfQWN0aW9uMy5kZWZhdWx0LmV4dGVuZERlZmF1bHRWYWx1ZSh7XG4gICAgYWNjZWxlcmF0aW9uOiAwLCAvLyBbbnVtYmVyXTogQWNjZWxlcmF0aW9uIHRvIGFwcGx5IHRvIHZhbHVlLCBpbiB1bml0cyBwZXIgc2Vjb25kXG4gICAgYm91bmNlOiAwLCAvLyBbbnVtYmVyXTogRmFjdG9yIHRvIG11bHRpcGx5IHZlbG9jaXR5IGJ5IG9uIGJvdW5jZVxuICAgIHNwcmluZzogMCwgLy8gW251bWJlcl06IFNwcmluZyBzdHJlbmd0aCBkdXJpbmcgJ3N0cmluZydcbiAgICBzdG9wU3BlZWQ6IDAuMDAxLCAvLyBbbnVtYmVyXTogU3RvcCBzaW11bGF0aW9uIHVuZGVyIHRoaXMgc3BlZWRcbiAgICBmcmljdGlvbjogMCAvLyBbbnVtYmVyXTogRnJpY3Rpb24gdG8gYXBwbHkgcGVyIGZyYW1lLCAwLTFcbn0pO1xuUGh5c2ljcy5wcm90b3R5cGUuZGVmYXVsdFByb3BzID0gX0FjdGlvbjMuZGVmYXVsdC5leHRlbmREZWZhdWx0UHJvcHMoe1xuICAgIG1heEluYWN0aXZlRnJhbWVzOiAzXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUGh5c2ljcztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDFCb2VYTnBZM011YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3T3pzN096czdPenM3T3pzN1NVRkpUVHM3TzBGQlEwWXNZVUZFUlN4UFFVTkdMRWRCUVhGQ096aENRVVJ1UWl4VFFVTnRRanM3TUVOQlFVNDdPMU5CUVUwN08zRkVRVU5xUWl3d1EwRkJVeXhMUVVGVUxFZEJSR2xDT3p0QlFVVnFRaXhqUVVGTExHTkJRVXdzUjBGQmMwSXNRMEZCZEVJc1EwRkdhVUk3UVVGSGFrSXNZMEZCU3l4clFrRkJUQ3hIUVVFd1FpeEpRVUV4UWl4RFFVaHBRanM3UzBGQmNrSTdPMEZCUkVVc2MwSkJUMFlzTmtKQlFWTXNVMEZCVXl4WlFVRlpMRk5CUVZNN1FVRkRia01zWVVGQlN5eFZRVUZNTEVkQlFXdENMRXRCUVd4Q0xFTkJSRzFET3p0QlFVZHVReXhoUVVGTExFbEJRVWtzU1VGQlNTeERRVUZLTEVWQlFVOHNTVUZCU1N4TFFVRkxMRmxCUVV3c1JVRkJiVUlzUjBGQmRrTXNSVUZCTkVNN1FVRkRlRU1zWjBKQlFVMHNUVUZCVFN4TFFVRkxMRk5CUVV3c1EwRkJaU3hEUVVGbUxFTkJRVTRzUTBGRWEwTTdRVUZGZUVNc1owSkJRVTBzVVVGQlVTeExRVUZMTEUxQlFVd3NRMEZCV1N4SFFVRmFMRU5CUVZJc1EwRkdhME03UVVGSGVFTXNaMEpCUVUwc1owSkJRV2RDTEUxQlFVMHNTVUZCVGpzN08wRkJTR3RDTEdsQ1FVMTRReXhEUVVGTkxGRkJRVTRzU1VGQmEwSXNlVUpCUVdNc1RVRkJUU3haUVVGT0xFVkJRVzlDTEU5QlFXeERMRU5CUVd4Q096czdRVUZPZDBNc2FVSkJVM2hETEVOQlFVMHNVVUZCVGl4aFFVRnRRaXhKUVVGSkxFMUJRVTBzVVVGQlRpeEZRVUZ2UWl4VlFVRlZMRWRCUVZZc1EwRkJNME03T3p0QlFWUjNReXhuUWtGWmNFTXNUVUZCVFN4TlFVRk9MRWxCUVdkQ0xHdENRVUZOTEUxQlFVMHNSVUZCVGl4RFFVRjBRaXhGUVVGcFF6dEJRVU5xUXl4dlFrRkJUU3h0UWtGQmJVSXNUVUZCVFN4RlFVRk9MRWRCUVZjc1RVRkJUU3hQUVVGT0xFTkJSRWc3UVVGRmFrTXNjMEpCUVUwc1VVRkJUaXhKUVVGclFpeHRRa0ZCYlVJc2VVSkJRV01zVFVGQlRTeE5RVUZPTEVWQlFXTXNUMEZCTlVJc1EwRkJia0lzUTBGR1pUdGhRVUZ5UXpzN08wRkJXbmRETEdsQ1FXdENlRU1zUTBGQlRTeFBRVUZPTEVsQlFXbENMSGxDUVVGakxFMUJRVTBzVVVGQlRpeEZRVUZuUWl4UFFVRTVRaXhEUVVGcVFqczdPMEZCYkVKM1F5eG5Ra0Z4UW5CRExFdEJRVU1zUTBGQlRTeEhRVUZPTEV0QlFXTXNVMEZCWkN4SlFVRXlRaXhOUVVGTkxFOUJRVTRzUjBGQlowSXNUVUZCVFN4SFFVRk9MRWxCUVdVc1RVRkJUU3hIUVVGT0xFdEJRV01zVTBGQlpDeEpRVUV5UWl4TlFVRk5MRTlCUVU0c1IwRkJaMElzVFVGQlRTeEhRVUZPTEVWQlFWazdRVUZEYkVnc2MwSkJRVTBzVVVGQlRpeEpRVUZyUWl4RFFVRkZMRTFCUVUwc1RVRkJUaXhEUVVRNFJqdGhRVUYwU0RzN08wRkJja0ozUXl4blFrRXdRbkJETEUxQlFVMHNUMEZCVGl4TFFVRnJRaXhoUVVGc1FpeEpRVUZ0UXl4TFFVRkxMRWRCUVV3c1EwRkJVeXhOUVVGTkxGRkJRVTRzUTBGQlZDeEpRVUUwUWl4TlFVRk5MRk5CUVU0c1NVRkJiMElzVFVGQlRTeE5RVUZPTEVsQlFXZENMRTFCUVUwc1QwRkJUaXhMUVVGclFpeE5RVUZOTEVWQlFVNHNSVUZCVnp0QlFVTm9TU3h4UWtGQlN5eFZRVUZNTEVkQlFXdENMRWxCUVd4Q0xFTkJSR2RKTzJGQlFYQkpPMU5CTVVKS096czdRVUZXUml4elFrRXdRMFlzYlVOQlFXRTdRVUZEVkN4WlFVRkpMRXRCUVVzc2FVSkJRVXdzUzBGQk1rSXNVVUZCTTBJc1JVRkJjVU03UVVGRGNrTXNhVUpCUVVzc1kwRkJUQ3hIUVVGelFpeExRVUZMTEZWQlFVd3NSMEZCYTBJc1EwRkJiRUlzUjBGQmMwSXNTMEZCU3l4alFVRk1MRWRCUVhOQ0xFTkJRWFJDTEVOQlJGQTdPMEZCUjNKRExHZENRVUZKTEV0QlFVc3NZMEZCVEN4SlFVRjFRaXhMUVVGTExHbENRVUZNTEVWQlFYZENPMEZCUXk5RExIRkNRVUZMTEZGQlFVd3NSMEZFSzBNN1lVRkJia1E3VTBGSVNqczdPMWRCTTBOR096czdRVUZ4UkU0c1VVRkJVU3hUUVVGU0xFTkJRV3RDTEdkQ1FVRnNRaXhIUVVGeFF5eFZRVUZ5UXp0QlFVTkJMRkZCUVZFc1UwRkJVaXhEUVVGclFpeFpRVUZzUWl4SFFVRnBReXhwUWtGQlR5eHJRa0ZCVUN4RFFVRXdRanRCUVVOMlJDeHJRa0ZCWXl4RFFVRmtPMEZCUTBFc1dVRkJVU3hEUVVGU08wRkJRMEVzV1VGQlVTeERRVUZTTzBGQlEwRXNaVUZCVnl4TFFVRllPMEZCUTBFc1kwRkJWU3hEUVVGV08wRkJUSFZFTEVOQlFURkNMRU5CUVdwRE8wRkJUMEVzVVVGQlVTeFRRVUZTTEVOQlFXdENMRmxCUVd4Q0xFZEJRV2xETEdsQ1FVRlBMR3RDUVVGUUxFTkJRVEJDTzBGQlEzWkVMSFZDUVVGdFFpeERRVUZ1UWp0RFFVUTJRaXhEUVVGcVF6czdhMEpCU1dVaUxDSm1hV3hsSWpvaVVHaDVjMmxqY3k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRDOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1FXTjBhVzl1SUdaeWIyMGdKeTR2UVdOMGFXOXVKenRjYm1sdGNHOXlkQ0I3SUhOd1pXVmtVR1Z5Um5KaGJXVWdmU0JtY205dElDY3VMaTlwYm1NdlkyRnNZeWM3WEc1cGJYQnZjblFnZXlCcGMwNTFiU0I5SUdaeWIyMGdKeTR1TDJsdVl5OTFkR2xzY3ljN1hHNWNibU5zWVhOeklGQm9lWE5wWTNNZ1pYaDBaVzVrY3lCQlkzUnBiMjRnZTF4dUlDQWdJR052Ym5OMGNuVmpkRzl5S0M0dUxtRnlaM01wSUh0Y2JpQWdJQ0FnSUNBZ2MzVndaWElvTGk0dVlYSm5jeWs3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVhVzVoWTNScGRtVkdjbUZ0WlhNZ1BTQXdPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtTmhiR04xYkdGMFpYTldaV3h2WTJsMGVTQTlJSFJ5ZFdVN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYjI1VmNHUmhkR1VvY0doNWMybGpjeXdnWm5KaGJXVlRkR0Z0Y0N3Z1pXeGhjSE5sWkNrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG1oaGMwTm9ZVzVuWldRZ1BTQm1ZV3h6WlR0Y2JseHVJQ0FnSUNBZ0lDQm1iM0lnS0d4bGRDQnBJRDBnTURzZ2FTQThJSFJvYVhNdWJuVnRWbUZzZFdWTFpYbHpPeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJR3RsZVNBOUlIUm9hWE11ZG1Gc2RXVkxaWGx6VzJsZE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdkbUZzZFdVZ1BTQjBhR2x6TG5aaGJIVmxjMXRyWlhsZE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdjSEpsZG1sdmRYTldZV3gxWlNBOUlIWmhiSFZsTG5CeVpYWTdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJRUZ3Y0d4NUlHRmpZMlZzWlhKaGRHbHZibHh1SUNBZ0lDQWdJQ0FnSUNBZ2RtRnNkV1V1ZG1Wc2IyTnBkSGtnS3owZ2MzQmxaV1JRWlhKR2NtRnRaU2gyWVd4MVpTNWhZMk5sYkdWeVlYUnBiMjRzSUdWc1lYQnpaV1FwTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCQmNIQnNlU0JtY21samRHbHZibHh1SUNBZ0lDQWdJQ0FnSUNBZ2RtRnNkV1V1ZG1Wc2IyTnBkSGtnS2owZ0tERWdMU0IyWVd4MVpTNW1jbWxqZEdsdmJpa2dLaW9nS0dWc1lYQnpaV1FnTHlBeE1EQXBPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJCY0hCc2VTQnpjSEpwYm1kY2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMllXeDFaUzV6Y0hKcGJtY2dKaVlnYVhOT2RXMG9kbUZzZFdVdWRHOHBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdaR2x6ZEdGdVkyVlViMVJoY21kbGRDQTlJSFpoYkhWbExuUnZJQzBnZG1Gc2RXVXVZM1Z5Y21WdWREdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZV3gxWlM1MlpXeHZZMmwwZVNBclBTQmthWE4wWVc1alpWUnZWR0Z5WjJWMElDb2djM0JsWldSUVpYSkdjbUZ0WlNoMllXeDFaUzV6Y0hKcGJtY3NJR1ZzWVhCelpXUXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QkJjSEJzZVNCc1lYUmxjM1FnZG1Wc2IyTnBkSGxjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmhiSFZsTG1OMWNuSmxiblFnS3owZ2MzQmxaV1JRWlhKR2NtRnRaU2gyWVd4MVpTNTJaV3h2WTJsMGVTd2daV3hoY0hObFpDazdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJRVJsZEdWamRDQmliM1Z1WTJWY2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNnb2RtRnNkV1V1YldsdUlDRTlQU0IxYm1SbFptbHVaV1FnSmlZZ2RtRnNkV1V1WTNWeWNtVnVkQ0E4SUhaaGJIVmxMbTFwYmlrZ2ZId2dLSFpoYkhWbExtMWhlQ0FoUFQwZ2RXNWtaV1pwYm1Wa0lDWW1JSFpoYkhWbExtTjFjbkpsYm5RZ1BpQjJZV3gxWlM1dFlYZ3BLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVXVkbVZzYjJOcGRIa2dLajBnTFNCMllXeDFaUzVpYjNWdVkyVTdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJRU5vWldOcklHbG1JSFpoYkhWbElHaGhjeUJqYUdGdVoyVmtYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9kbUZzZFdVdVkzVnljbVZ1ZENBaFBUMGdjSEpsZG1sdmRYTldZV3gxWlNCOGZDQk5ZWFJvTG1GaWN5aDJZV3gxWlM1MlpXeHZZMmwwZVNrZ1BqMGdkbUZzZFdVdWMzUnZjRk53WldWa0lIeDhJQ2gyWVd4MVpTNXpjSEpwYm1jZ0ppWWdkbUZzZFdVdVkzVnljbVZ1ZENBaFBUMGdkbUZzZFdVdWRHOHBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NW9ZWE5EYUdGdVoyVmtJRDBnZEhKMVpUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JseHVJQ0FnSUc5dVJuSmhiV1ZGYm1Rb0tTQjdYRzRnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbTFoZUVsdVlXTjBhWFpsUm5KaGJXVnpJQ0U5UFNCSmJtWnBibWwwZVNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXBibUZqZEdsMlpVWnlZVzFsY3lBOUlIUm9hWE11YUdGelEyaGhibWRsWkNBL0lERWdPaUIwYUdsekxtbHVZV04wYVhabFJuSmhiV1Z6SUNzZ01UdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFJvYVhNdWFXNWhZM1JwZG1WR2NtRnRaWE1nUGowZ2RHaHBjeTV0WVhoSmJtRmpkR2wyWlVaeVlXMWxjeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVZMjl0Y0d4bGRHVW9LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNibjFjYmx4dVVHaDVjMmxqY3k1d2NtOTBiM1I1Y0dVdVpHVm1ZWFZzZEZaaGJIVmxVSEp2Y0NBOUlDZDJaV3h2WTJsMGVTYzdYRzVRYUhsemFXTnpMbkJ5YjNSdmRIbHdaUzVrWldaaGRXeDBWbUZzZFdVZ1BTQkJZM1JwYjI0dVpYaDBaVzVrUkdWbVlYVnNkRlpoYkhWbEtIdGNiaUFnSUNCaFkyTmxiR1Z5WVhScGIyNDZJREFzSUM4dklGdHVkVzFpWlhKZE9pQkJZMk5sYkdWeVlYUnBiMjRnZEc4Z1lYQndiSGtnZEc4Z2RtRnNkV1VzSUdsdUlIVnVhWFJ6SUhCbGNpQnpaV052Ym1SY2JpQWdJQ0JpYjNWdVkyVTZJREFzSUM4dklGdHVkVzFpWlhKZE9pQkdZV04wYjNJZ2RHOGdiWFZzZEdsd2JIa2dkbVZzYjJOcGRIa2dZbmtnYjI0Z1ltOTFibU5sWEc0Z0lDQWdjM0J5YVc1bk9pQXdMQ0F2THlCYmJuVnRZbVZ5WFRvZ1UzQnlhVzVuSUhOMGNtVnVaM1JvSUdSMWNtbHVaeUFuYzNSeWFXNW5KMXh1SUNBZ0lITjBiM0JUY0dWbFpEb2dNQzR3TURFc0lDOHZJRnR1ZFcxaVpYSmRPaUJUZEc5d0lITnBiWFZzWVhScGIyNGdkVzVrWlhJZ2RHaHBjeUJ6Y0dWbFpGeHVJQ0FnSUdaeWFXTjBhVzl1T2lBd0lDOHZJRnR1ZFcxaVpYSmRPaUJHY21samRHbHZiaUIwYnlCaGNIQnNlU0J3WlhJZ1puSmhiV1VzSURBdE1WeHVmU2s3WEc1UWFIbHphV056TG5CeWIzUnZkSGx3WlM1a1pXWmhkV3gwVUhKdmNITWdQU0JCWTNScGIyNHVaWGgwWlc1a1JHVm1ZWFZzZEZCeWIzQnpLSHRjYmlBZ0lDQnRZWGhKYm1GamRHbDJaVVp5WVcxbGN6b2dNMXh1ZlNrN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElGQm9lWE5wWTNNN1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL1BoeXNpY3MuanNcbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfQWN0aW9uMiA9IHJlcXVpcmUoJy4vQWN0aW9uJyk7XG5cbnZhciBfQWN0aW9uMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0FjdGlvbjIpO1xuXG52YXIgX1BvaW50ZXIgPSByZXF1aXJlKCcuLi9pbnB1dC9Qb2ludGVyJyk7XG5cbnZhciBfUG9pbnRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Qb2ludGVyKTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG4vKlxuICAgIFNjcmFwZSB4L3kgY29vcmRpbmF0ZXMgZnJvbSBwcm92aWRlZCBldmVudFxuXG4gICAgQHBhcmFtIFtldmVudF1cbiAgICBAcmV0dXJuIFtvYmplY3RdXG4qL1xudmFyIG1vdXNlRXZlbnRUb1BvaW50ID0gZnVuY3Rpb24gKGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB4OiBlLnBhZ2VYLFxuICAgICAgICB5OiBlLnBhZ2VZXG4gICAgfTtcbn07XG5cbnZhciB0b3VjaEV2ZW50VG9Qb2ludCA9IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIGNoYW5nZWRUb3VjaGVzID0gX3JlZi5jaGFuZ2VkVG91Y2hlcztcbiAgICByZXR1cm4ge1xuICAgICAgICB4OiBjaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYLFxuICAgICAgICB5OiBjaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZXG4gICAgfTtcbn07XG5cbnZhciBjcmVhdGVQb2ludGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICByZXR1cm4gZS50b3VjaGVzID8gbmV3IF9Qb2ludGVyMi5kZWZhdWx0KHRvdWNoRXZlbnRUb1BvaW50KGUpLCAndG91Y2htb3ZlJywgdG91Y2hFdmVudFRvUG9pbnQpIDogbmV3IF9Qb2ludGVyMi5kZWZhdWx0KG1vdXNlRXZlbnRUb1BvaW50KGUpLCAnbW91c2Vtb3ZlJywgbW91c2VFdmVudFRvUG9pbnQpO1xufTtcblxudmFyIGdldEFjdHVhbEV2ZW50ID0gZnVuY3Rpb24gKGUpIHtcbiAgICByZXR1cm4gZS5vcmlnaW5hbEV2ZW50IHx8IGU7XG59O1xuXG52YXIgVHJhY2sgPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICAgIF9pbmhlcml0cyhUcmFjaywgX0FjdGlvbik7XG5cbiAgICBmdW5jdGlvbiBUcmFjaygpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRyYWNrKTtcblxuICAgICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9XG5cbiAgICBUcmFjay5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiBzdGFydChpbnB1dCkge1xuICAgICAgICBfQWN0aW9uLnByb3RvdHlwZS5zdGFydC5jYWxsKHRoaXMpO1xuXG4gICAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICAgICAgdGhpcy5pbnB1dCA9IGlucHV0LnN0YXRlID8gaW5wdXQgOiBjcmVhdGVQb2ludGVyKGdldEFjdHVhbEV2ZW50KGlucHV0KSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlucHV0T2Zmc2V0ID0ge307XG4gICAgICAgIHRoaXMuaW5wdXRPcmlnaW4gPSBfZXh0ZW5kcyh7fSwgdGhpcy5pbnB1dC5zdGF0ZSk7XG4gICAgICAgIHRoaXMuaW5wdXQuc3RhcnQoKTtcbiAgICB9O1xuXG4gICAgVHJhY2sucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICBfQWN0aW9uLnByb3RvdHlwZS5zdG9wLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMuaW5wdXQuc3RvcCgpO1xuICAgIH07XG5cbiAgICBUcmFjay5wcm90b3R5cGUub25VcGRhdGUgPSBmdW5jdGlvbiBvblVwZGF0ZSh0cmFjaywgZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgICAgICB0aGlzLmlucHV0T2Zmc2V0ID0gKDAsIF9jYWxjLm9mZnNldCkodGhpcy5pbnB1dE9yaWdpbiwgdGhpcy5pbnB1dC5zdGF0ZSk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gdGhpcy52YWx1ZUtleXNbaV07XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmlucHV0T2Zmc2V0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmRpcmVjdCkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gdGhpcy5pbnB1dC5zdGF0ZVt2YWx1ZS53YXRjaCB8fCBrZXldO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSB2YWx1ZS5mcm9tICsgdGhpcy5pbnB1dE9mZnNldFt2YWx1ZS53YXRjaCB8fCBrZXldO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFNtb290aCB2YWx1ZSBpZiB3ZSBoYXZlIHNtb290aGluZ1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5zbW9vdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9ICgwLCBfY2FsYy5zbW9vdGgpKHZhbHVlLmN1cnJlbnQsIHZhbHVlLnByZXYsIGVsYXBzZWQsIHZhbHVlLnNtb290aCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBUcmFjaztcbn0oX0FjdGlvbjMuZGVmYXVsdCk7XG5cblRyYWNrLnByb3RvdHlwZS5kZWZhdWx0VmFsdWVQcm9wID0gJ3dhdGNoJztcblRyYWNrLnByb3RvdHlwZS5kZWZhdWx0VmFsdWUgPSBfQWN0aW9uMy5kZWZhdWx0LmV4dGVuZERlZmF1bHRWYWx1ZSh7XG4gICAgZGlyZWN0OiBmYWxzZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFRyYWNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMVJ5WVdOckxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenRCUVZWQkxFbEJRVTBzYjBKQlFXOUNMRlZCUVVNc1EwRkJSRHRYUVVGUk8wRkJRemxDTEZkQlFVY3NSVUZCUlN4TFFVRkdPMEZCUTBnc1YwRkJSeXhGUVVGRkxFdEJRVVk3TzBOQlJtMUNPenRCUVVzeFFpeEpRVUZOTEc5Q1FVRnZRanRSUVVGSE8xZEJRWE5DTzBGQlF5OURMRmRCUVVjc1pVRkJaU3hEUVVGbUxFVkJRV3RDTEU5QlFXeENPMEZCUTBnc1YwRkJSeXhsUVVGbExFTkJRV1lzUlVGQmEwSXNUMEZCYkVJN08wTkJSbTFDT3p0QlFVc3hRaXhKUVVGTkxHZENRVUZuUWl4VlFVRkRMRU5CUVVRN1YwRkJUeXhGUVVGRkxFOUJRVVlzUjBGRGVrSXNjMEpCUVZrc2EwSkJRV3RDTEVOQlFXeENMRU5CUVZvc1JVRkJhME1zVjBGQmJFTXNSVUZCSzBNc2FVSkJRUzlETEVOQlJIbENMRWRCUlhwQ0xITkNRVUZaTEd0Q1FVRnJRaXhEUVVGc1FpeERRVUZhTEVWQlFXdERMRmRCUVd4RExFVkJRU3RETEdsQ1FVRXZReXhEUVVaNVFqdERRVUZRT3p0QlFVbDBRaXhKUVVGTkxHbENRVUZwUWl4VlFVRkRMRU5CUVVRN1YwRkJUeXhGUVVGRkxHRkJRVVlzU1VGQmJVSXNRMEZCYmtJN1EwRkJVRHM3U1VGRmFrSTdPenM3T3pzN096dHZRa0ZEUml4MVFrRkJUU3hQUVVGUE8wRkJRMVFzTUVKQlFVMHNTMEZCVGl4WlFVUlRPenRCUVVkVUxGbEJRVWtzUzBGQlNpeEZRVUZYTzBGQlExQXNhVUpCUVVzc1MwRkJUQ3hIUVVGaExFMUJRVTBzUzBGQlRpeEhRVUZqTEV0QlFXUXNSMEZCYzBJc1kwRkJZeXhsUVVGbExFdEJRV1lzUTBGQlpDeERRVUYwUWl4RFFVUk9PMU5CUVZnN08wRkJTVUVzWVVGQlN5eFhRVUZNTEVkQlFXMUNMRVZCUVc1Q0xFTkJVRk03UVVGUlZDeGhRVUZMTEZkQlFVd3NaMEpCUVhkQ0xFdEJRVXNzUzBGQlRDeERRVUZYTEV0QlFWZ3NRMEZCZUVJc1EwRlNVenRCUVZOVUxHRkJRVXNzUzBGQlRDeERRVUZYTEV0QlFWZ3NSMEZVVXpzN08wRkJSRmdzYjBKQllVWXNkVUpCUVU4N1FVRkRTQ3d3UWtGQlRTeEpRVUZPTEZsQlJFYzdRVUZGU0N4aFFVRkxMRXRCUVV3c1EwRkJWeXhKUVVGWUxFZEJSa2M3T3p0QlFXSk1MRzlDUVd0Q1JpdzJRa0ZCVXl4UFFVRlBMRmxCUVZrc1UwRkJVenRCUVVOcVF5eGhRVUZMTEZkQlFVd3NSMEZCYlVJc2EwSkJRVThzUzBGQlN5eFhRVUZNTEVWQlFXdENMRXRCUVVzc1MwRkJUQ3hEUVVGWExFdEJRVmdzUTBGQk5VTXNRMEZFYVVNN08wRkJSMnBETEdGQlFVc3NTVUZCU1N4SlFVRkpMRU5CUVVvc1JVRkJUeXhKUVVGSkxFdEJRVXNzV1VGQlRDeEZRVUZ0UWl4SFFVRjJReXhGUVVFMFF6dEJRVU40UXl4blFrRkJUU3hOUVVGTkxFdEJRVXNzVTBGQlRDeERRVUZsTEVOQlFXWXNRMEZCVGl4RFFVUnJRenM3UVVGSGVFTXNaMEpCUVVrc1MwRkJTeXhYUVVGTUxFTkJRV2xDTEdOQlFXcENMRU5CUVdkRExFZEJRV2hETEVOQlFVb3NSVUZCTUVNN1FVRkRkRU1zYjBKQlFVMHNVVUZCVVN4TFFVRkxMRTFCUVV3c1EwRkJXU3hIUVVGYUxFTkJRVklzUTBGRVowTTdPMEZCUjNSRExHOUNRVUZKTEUxQlFVMHNUVUZCVGl4RlFVRmpPMEZCUTJRc01FSkJRVTBzVDBGQlRpeEhRVUZuUWl4TFFVRkxMRXRCUVV3c1EwRkJWeXhMUVVGWUxFTkJRV2xDTEUxQlFVMHNTMEZCVGl4SlFVRmxMRWRCUVdZc1EwRkJha01zUTBGRVl6dHBRa0ZCYkVJc1RVRkZUenRCUVVOSUxEQkNRVUZOTEU5QlFVNHNSMEZCWjBJc1RVRkJUU3hKUVVGT0xFZEJRV0VzUzBGQlN5eFhRVUZNTEVOQlFXbENMRTFCUVUwc1MwRkJUaXhKUVVGbExFZEJRV1lzUTBGQk9VSXNRMEZFWWp0cFFrRkdVRHM3TzBGQlNITkRMRzlDUVZWc1F5eE5RVUZOTEUxQlFVNHNSVUZCWXp0QlFVTmtMREJDUVVGTkxFOUJRVTRzUjBGQlowSXNhMEpCUVU4c1RVRkJUU3hQUVVGT0xFVkJRV1VzVFVGQlRTeEpRVUZPTEVWQlFWa3NUMEZCYkVNc1JVRkJNa01zVFVGQlRTeE5RVUZPTEVOQlFUTkVMRU5CUkdNN2FVSkJRV3hDTzJGQlZrbzdVMEZJU2pzN08xZEJja0pHT3pzN1FVRXdRMDRzVFVGQlRTeFRRVUZPTEVOQlFXZENMR2RDUVVGb1FpeEhRVUZ0UXl4UFFVRnVRenRCUVVOQkxFMUJRVTBzVTBGQlRpeERRVUZuUWl4WlFVRm9RaXhIUVVFclFpeHBRa0ZCVHl4clFrRkJVQ3hEUVVFd1FqdEJRVU55UkN4WlFVRlJMRXRCUVZJN1EwRkVNa0lzUTBGQkwwSTdPMnRDUVVsbElpd2labWxzWlNJNklsUnlZV05yTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMEwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCQlkzUnBiMjRnWm5KdmJTQW5MaTlCWTNScGIyNG5PMXh1YVcxd2IzSjBJRkJ2YVc1MFpYSWdabkp2YlNBbkxpNHZhVzV3ZFhRdlVHOXBiblJsY2ljN1hHNXBiWEJ2Y25RZ2V5QnpiVzl2ZEdnc0lHOW1abk5sZENCOUlHWnliMjBnSnk0dUwybHVZeTlqWVd4akp6dGNibHh1THlwY2JpQWdJQ0JUWTNKaGNHVWdlQzk1SUdOdmIzSmthVzVoZEdWeklHWnliMjBnY0hKdmRtbGtaV1FnWlhabGJuUmNibHh1SUNBZ0lFQndZWEpoYlNCYlpYWmxiblJkWEc0Z0lDQWdRSEpsZEhWeWJpQmJiMkpxWldOMFhWeHVLaTljYm1OdmJuTjBJRzF2ZFhObFJYWmxiblJVYjFCdmFXNTBJRDBnS0dVcElEMCtJQ2g3WEc0Z0lDQWdlRG9nWlM1d1lXZGxXQ3hjYmlBZ0lDQjVPaUJsTG5CaFoyVlpYRzU5S1R0Y2JseHVZMjl1YzNRZ2RHOTFZMmhGZG1WdWRGUnZVRzlwYm5RZ1BTQW9leUJqYUdGdVoyVmtWRzkxWTJobGN5QjlLU0E5UGlBb2UxeHVJQ0FnSUhnNklHTm9ZVzVuWldSVWIzVmphR1Z6V3pCZExtTnNhV1Z1ZEZnc1hHNGdJQ0FnZVRvZ1kyaGhibWRsWkZSdmRXTm9aWE5iTUYwdVkyeHBaVzUwV1Z4dWZTazdYRzVjYm1OdmJuTjBJR055WldGMFpWQnZhVzUwWlhJZ1BTQW9aU2tnUFQ0Z1pTNTBiM1ZqYUdWeklEOWNiaUFnSUNCdVpYY2dVRzlwYm5SbGNpaDBiM1ZqYUVWMlpXNTBWRzlRYjJsdWRDaGxLU3dnSjNSdmRXTm9iVzkyWlNjc0lIUnZkV05vUlhabGJuUlViMUJ2YVc1MEtTQTZJRnh1SUNBZ0lHNWxkeUJRYjJsdWRHVnlLRzF2ZFhObFJYWmxiblJVYjFCdmFXNTBLR1VwTENBbmJXOTFjMlZ0YjNabEp5d2diVzkxYzJWRmRtVnVkRlJ2VUc5cGJuUXBPMXh1WEc1amIyNXpkQ0JuWlhSQlkzUjFZV3hGZG1WdWRDQTlJQ2hsS1NBOVBpQmxMbTl5YVdkcGJtRnNSWFpsYm5RZ2ZId2daVHRjYmx4dVkyeGhjM01nVkhKaFkyc2daWGgwWlc1a2N5QkJZM1JwYjI0Z2UxeHVJQ0FnSUhOMFlYSjBLR2x1Y0hWMEtTQjdYRzRnSUNBZ0lDQWdJSE4xY0dWeUxuTjBZWEowS0NrN1hHNWNiaUFnSUNBZ0lDQWdhV1lnS0dsdWNIVjBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG1sdWNIVjBJRDBnYVc1d2RYUXVjM1JoZEdVZ1B5QnBibkIxZENBNklHTnlaV0YwWlZCdmFXNTBaWElvWjJWMFFXTjBkV0ZzUlhabGJuUW9hVzV3ZFhRcEtUdGNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVhVzV3ZFhSUFptWnpaWFFnUFNCN2ZUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1cGJuQjFkRTl5YVdkcGJpQTlJSHNnTGk0dWRHaHBjeTVwYm5CMWRDNXpkR0YwWlNCOU8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1sdWNIVjBMbk4wWVhKMEtDazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2MzUnZjQ2dwSUh0Y2JpQWdJQ0FnSUNBZ2MzVndaWEl1YzNSdmNDZ3BPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtbHVjSFYwTG5OMGIzQW9LVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnZibFZ3WkdGMFpTaDBjbUZqYXl3Z1puSmhiV1ZUZEdGdGNDd2daV3hoY0hObFpDa2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxtbHVjSFYwVDJabWMyVjBJRDBnYjJabWMyVjBLSFJvYVhNdWFXNXdkWFJQY21sbmFXNHNJSFJvYVhNdWFXNXdkWFF1YzNSaGRHVXBPMXh1WEc0Z0lDQWdJQ0FnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z2RHaHBjeTV1ZFcxV1lXeDFaVXRsZVhNN0lHa3JLeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2EyVjVJRDBnZEdocGN5NTJZV3gxWlV0bGVYTmJhVjA3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbWx1Y0hWMFQyWm1jMlYwTG1oaGMwOTNibEJ5YjNCbGNuUjVLR3RsZVNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCMllXeDFaU0E5SUhSb2FYTXVkbUZzZFdWelcydGxlVjA3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9kbUZzZFdVdVpHbHlaV04wS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFpoYkhWbExtTjFjbkpsYm5RZ1BTQjBhR2x6TG1sdWNIVjBMbk4wWVhSbFczWmhiSFZsTG5kaGRHTm9JSHg4SUd0bGVWMDdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVXVZM1Z5Y21WdWRDQTlJSFpoYkhWbExtWnliMjBnS3lCMGFHbHpMbWx1Y0hWMFQyWm1jMlYwVzNaaGJIVmxMbmRoZEdOb0lIeDhJR3RsZVYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdMeThnVTIxdmIzUm9JSFpoYkhWbElHbG1JSGRsSUdoaGRtVWdjMjF2YjNSb2FXNW5YRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0haaGJIVmxMbk50YjI5MGFDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMllXeDFaUzVqZFhKeVpXNTBJRDBnYzIxdmIzUm9LSFpoYkhWbExtTjFjbkpsYm5Rc0lIWmhiSFZsTG5CeVpYWXNJR1ZzWVhCelpXUXNJSFpoYkhWbExuTnRiMjkwYUNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dWZWeHVYRzVVY21GamF5NXdjbTkwYjNSNWNHVXVaR1ZtWVhWc2RGWmhiSFZsVUhKdmNDQTlJQ2QzWVhSamFDYzdYRzVVY21GamF5NXdjbTkwYjNSNWNHVXVaR1ZtWVhWc2RGWmhiSFZsSUQwZ1FXTjBhVzl1TG1WNGRHVnVaRVJsWm1GMWJIUldZV3gxWlNoN1hHNGdJQ0FnWkdseVpXTjBPaUJtWVd4elpWeHVmU2s3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUZSeVlXTnJPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9UcmFjay5qc1xuICoqIG1vZHVsZSBpZCA9IDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9sb29wID0gcmVxdWlyZSgnLi9sb29wJyk7XG5cbnZhciBsb29wID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2xvb3ApO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9IC8qXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJhc2UgVGFzayBjbGFzcyBmb3IgY3JlYXRpbmcgYSB0YXNrIG9uIHRoZSBtYWluIHJlbmRlciBsb29wLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG5cbmZ1bmN0aW9uIGNsZWFudXAoKSB7XG4gICAgdGhpcy5vbkNsZWFudXAgPSB1bmRlZmluZWQ7XG4gICAgbG9vcC5kZWFjdGl2YXRlKHRoaXMuaWQpO1xufVxuXG5mdW5jdGlvbiBhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLm9uQ2xlYW51cCA9IGNsZWFudXA7XG59XG5cbnZhciBUYXNrID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRhc2socHJvcHMpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRhc2spO1xuXG4gICAgICAgIHRoaXMuaWQgPSBsb29wLmdldFRhc2tJZCgpO1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHRoaXMuZGVmYXVsdFByb3BzKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5kZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kZWZhdWx0UHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSB0aGlzLmRlZmF1bHRQcm9wc1trZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0KHByb3BzKTtcbiAgICB9XG5cbiAgICBUYXNrLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiBzZXQocHJvcHMpIHtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgICAgICAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IHByb3BzW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgVGFzay5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgICAgbG9vcC5hY3RpdmF0ZSh0aGlzLmlkLCB0aGlzKTtcblxuICAgICAgICB0aGlzLm9uQWN0aXZhdGVMb29wID0gdGhpcy5vbkNsZWFudXAgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuaXNDb21wbGV0ZSA9IGZhbHNlO1xuXG4gICAgICAgIGlmICh0aGlzLm9uU3RhcnQpIHtcbiAgICAgICAgICAgIHRoaXMub25TdGFydCh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBUYXNrLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgICAgbG9vcC5kZWFjdGl2YXRlKHRoaXMuaWQpO1xuXG4gICAgICAgIGlmICh0aGlzLm9uU3RvcCkge1xuICAgICAgICAgICAgdGhpcy5vblN0b3AodGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgVGFzay5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uIG9uY2UoKSB7XG4gICAgICAgIGxvb3AuYWN0aXZhdGUodGhpcy5pZCwgdGhpcyk7XG4gICAgICAgIHRoaXMub25DbGVhbnVwID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLm9uQWN0aXZhdGVMb29wID0gYWN0aXZhdGU7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIFRhc2sucHJvdG90eXBlLmNvbXBsZXRlID0gZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICAgIHRoaXMuc3RvcCgpO1xuXG4gICAgICAgIGlmICh0aGlzLm9uQ29tcGxldGUpIHtcbiAgICAgICAgICAgIHRoaXMub25Db21wbGV0ZSh0aGlzKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKlxuICAgICAgICAjIEV4dGVuZCB0aGlzIFByb2Nlc3Mgd2l0aCBuZXcgcHJvcGVydGllc1xuICAgICAgICAjIyBSZXR1cm5zIG5ldyBpbnN0YW5jZSBvZiB0aGlzIFByb2Nlc3MncyBgcHJvdG90eXBlYCB3aXRoIGV4aXN0aW5nIGFuZCBuZXcgcHJvcGVydGllc1xuICAgICAgICAgQHBhcmFtIFtvYmplY3RdIChvcHRpb25hbClcbiAgICAgICAgQHJldHVybiBbUHJvY2Vzc11cbiAgICAqL1xuXG4gICAgVGFzay5wcm90b3R5cGUuaW5oZXJpdCA9IGZ1bmN0aW9uIGluaGVyaXQocHJvcHMpIHtcbiAgICAgICAgdmFyIGlkID0gdGhpcy5pZDtcblxuICAgICAgICB2YXIgaW5oZXJpdGVkUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXModGhpcywgWydpZCddKTtcblxuICAgICAgICByZXR1cm4gbmV3IHRoaXMuY29uc3RydWN0b3IoX2V4dGVuZHMoe30sIGluaGVyaXRlZFByb3BzLCBwcm9wcykpO1xuICAgIH07XG5cbiAgICByZXR1cm4gVGFzaztcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gVGFzaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MFlYTnJMMVJoYzJzdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN1NVRkhXVHM3T3pzN096czdPenRCUVVWYUxGTkJRVk1zVDBGQlZDeEhRVUZ0UWp0QlFVTm1MRk5CUVVzc1UwRkJUQ3hIUVVGcFFpeFRRVUZxUWl4RFFVUmxPMEZCUldZc1UwRkJTeXhWUVVGTUxFTkJRV2RDTEV0QlFVc3NSVUZCVEN4RFFVRm9RaXhEUVVabE8wTkJRVzVDT3p0QlFVdEJMRk5CUVZNc1VVRkJWQ3hIUVVGdlFqdEJRVU5vUWl4VFFVRkxMRk5CUVV3c1IwRkJhVUlzVDBGQmFrSXNRMEZFWjBJN1EwRkJjRUk3TzBsQlNYRkNPMEZCUTJwQ0xHRkJSR2xDTEVsQlEycENMRU5CUVZrc1MwRkJXaXhGUVVGdFFqczRRa0ZFUml4TlFVTkZPenRCUVVObUxHRkJRVXNzUlVGQlRDeEhRVUZWTEV0QlFVc3NVMEZCVEN4RlFVRldMRU5CUkdVN1FVRkZaaXhoUVVGTExGRkJRVXdzUjBGQlowSXNTMEZCYUVJc1EwRkdaVHM3UVVGSlppeFpRVUZKTEV0QlFVc3NXVUZCVEN4RlFVRnRRanRCUVVOdVFpeHBRa0ZCU3l4SlFVRkpMRWRCUVVvc1NVRkJWeXhMUVVGTExGbEJRVXdzUlVGQmJVSTdRVUZETDBJc2IwSkJRVWtzUzBGQlN5eFpRVUZNTEVOQlFXdENMR05CUVd4Q0xFTkJRV2xETEVkQlFXcERMRU5CUVVvc1JVRkJNa003UVVGRGRrTXNlVUpCUVVzc1IwRkJUQ3hKUVVGWkxFdEJRVXNzV1VGQlRDeERRVUZyUWl4SFFVRnNRaXhEUVVGYUxFTkJSSFZETzJsQ1FVRXpRenRoUVVSS08xTkJSRW83TzBGQlVVRXNZVUZCU3l4SFFVRk1MRU5CUVZNc1MwRkJWQ3hGUVZwbE8wdEJRVzVDT3p0QlFVUnBRaXh0UWtGblFtcENMRzFDUVVGSkxFOUJRVTg3UVVGRFVDeGhRVUZMTEVsQlFVa3NSMEZCU2l4SlFVRlhMRXRCUVdoQ0xFVkJRWFZDTzBGQlEyNUNMR2RDUVVGSkxFMUJRVTBzWTBGQlRpeERRVUZ4UWl4SFFVRnlRaXhEUVVGS0xFVkJRU3RDTzBGQlF6TkNMSEZDUVVGTExFZEJRVXdzU1VGQldTeE5RVUZOTEVkQlFVNHNRMEZCV2l4RFFVUXlRanRoUVVFdlFqdFRRVVJLT3p0QlFVMUJMR1ZCUVU4c1NVRkJVQ3hEUVZCUE96czdRVUZvUWswc2JVSkJNRUpxUWl4NVFrRkJVVHRCUVVOS0xHRkJRVXNzVVVGQlRDeERRVUZqTEV0QlFVc3NSVUZCVEN4RlFVRlRMRWxCUVhaQ0xFVkJSRWs3TzBGQlIwb3NZVUZCU3l4alFVRk1MRWRCUVhOQ0xFdEJRVXNzVTBGQlRDeEhRVUZwUWl4VFFVRnFRaXhEUVVoc1FqdEJRVWxLTEdGQlFVc3NWVUZCVEN4SFFVRnJRaXhMUVVGc1FpeERRVXBKT3p0QlFVMUtMRmxCUVVrc1MwRkJTeXhQUVVGTUxFVkJRV003UVVGRFpDeHBRa0ZCU3l4UFFVRk1MRU5CUVdFc1NVRkJZaXhGUVVSak8xTkJRV3hDT3p0QlFVbEJMR1ZCUVU4c1NVRkJVQ3hEUVZaSk96czdRVUV4UWxNc2JVSkJkVU5xUWl4MVFrRkJUenRCUVVOSUxHRkJRVXNzVlVGQlRDeERRVUZuUWl4TFFVRkxMRVZCUVV3c1EwRkJhRUlzUTBGRVJ6czdRVUZIU0N4WlFVRkpMRXRCUVVzc1RVRkJUQ3hGUVVGaE8wRkJRMklzYVVKQlFVc3NUVUZCVEN4RFFVRlpMRWxCUVZvc1JVRkVZVHRUUVVGcVFqczdRVUZKUVN4bFFVRlBMRWxCUVZBc1EwRlFSenM3TzBGQmRrTlZMRzFDUVdsRWFrSXNkVUpCUVU4N1FVRkRTQ3hoUVVGTExGRkJRVXdzUTBGQll5eExRVUZMTEVWQlFVd3NSVUZCVXl4SlFVRjJRaXhGUVVSSE8wRkJSVWdzWVVGQlN5eFRRVUZNTEVkQlFXbENMRk5CUVdwQ0xFTkJSa2M3UVVGSFNDeGhRVUZMTEdOQlFVd3NSMEZCYzBJc1VVRkJkRUlzUTBGSVJ6czdRVUZMU0N4bFFVRlBMRWxCUVZBc1EwRk1SenM3TzBGQmFrUlZMRzFDUVhsRWFrSXNLMEpCUVZjN1FVRkRVQ3hoUVVGTExFbEJRVXdzUjBGRVR6czdRVUZIVUN4WlFVRkpMRXRCUVVzc1ZVRkJUQ3hGUVVGcFFqdEJRVU5xUWl4cFFrRkJTeXhWUVVGTUxFTkJRV2RDTEVsQlFXaENMRVZCUkdsQ08xTkJRWEpDT3pzN096czdPenM3TzBGQk5VUmhMRzFDUVhkRmFrSXNNa0pCUVZFc1QwRkJUenRaUVVOSUxFdEJRVEJDTEV0QlFURkNMRWRCUkVjN08xbEJRMGtzTUVOQlFXMUNMR05CUkhaQ096dEJRVVZZTEdWQlFVOHNTVUZCU1N4TFFVRkxMRmRCUVV3c1kwRkJjMElzWjBKQlFXMUNMRTFCUVRkRExFTkJRVkFzUTBGR1Z6czdPMWRCZUVWRklpd2labWxzWlNJNklsUmhjMnN1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUx5cGNiaUFnSUNCQ1lYTmxJRlJoYzJzZ1kyeGhjM01nWm05eUlHTnlaV0YwYVc1bklHRWdkR0Z6YXlCdmJpQjBhR1VnYldGcGJpQnlaVzVrWlhJZ2JHOXZjQzVjYmlvdlhHNXBiWEJ2Y25RZ0tpQmhjeUJzYjI5d0lHWnliMjBnSnk0dmJHOXZjQ2M3WEc1Y2JtWjFibU4wYVc5dUlHTnNaV0Z1ZFhBb0tTQjdYRzRnSUNBZ2RHaHBjeTV2YmtOc1pXRnVkWEFnUFNCMWJtUmxabWx1WldRN1hHNGdJQ0FnYkc5dmNDNWtaV0ZqZEdsMllYUmxLSFJvYVhNdWFXUXBPMXh1ZlZ4dVhHNW1kVzVqZEdsdmJpQmhZM1JwZG1GMFpTZ3BJSHRjYmlBZ0lDQjBhR2x6TG05dVEyeGxZVzUxY0NBOUlHTnNaV0Z1ZFhBN1hHNTlYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR05zWVhOeklGUmhjMnNnZTF4dUlDQWdJR052Ym5OMGNuVmpkRzl5S0hCeWIzQnpLU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVhV1FnUFNCc2IyOXdMbWRsZEZSaGMydEpaQ2dwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbWx6UVdOMGFYWmxJRDBnWm1Gc2MyVTdYRzVjYmlBZ0lDQWdJQ0FnYVdZZ0tIUm9hWE11WkdWbVlYVnNkRkJ5YjNCektTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCbWIzSWdLR3hsZENCclpYa2dhVzRnZEdocGN5NWtaV1poZFd4MFVISnZjSE1wSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9kR2hwY3k1a1pXWmhkV3gwVUhKdmNITXVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2EyVjVLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6VzJ0bGVWMGdQU0IwYUdsekxtUmxabUYxYkhSUWNtOXdjMXRyWlhsZE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdWMyVjBLSEJ5YjNCektUdGNiaUFnSUNCOVhHNWNiaUFnSUNCelpYUW9jSEp2Y0hNcElIdGNiaUFnSUNBZ0lDQWdabTl5SUNoc1pYUWdhMlY1SUdsdUlIQnliM0J6S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2NISnZjSE11YUdGelQzZHVVSEp2Y0dWeWRIa29hMlY1S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE5iYTJWNVhTQTlJSEJ5YjNCelcydGxlVjA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnSUNCOVhHNWNiaUFnSUNCemRHRnlkQ2dwSUh0Y2JpQWdJQ0FnSUNBZ2JHOXZjQzVoWTNScGRtRjBaU2gwYUdsekxtbGtMQ0IwYUdsektUdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxtOXVRV04wYVhaaGRHVk1iMjl3SUQwZ2RHaHBjeTV2YmtOc1pXRnVkWEFnUFNCMWJtUmxabWx1WldRN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YVhORGIyMXdiR1YwWlNBOUlHWmhiSE5sTzF4dVhHNGdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxtOXVVM1JoY25RcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXViMjVUZEdGeWRDaDBhR2x6S1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQWdJSDFjYmx4dUlDQWdJSE4wYjNBb0tTQjdYRzRnSUNBZ0lDQWdJR3h2YjNBdVpHVmhZM1JwZG1GMFpTaDBhR2x6TG1sa0tUdGNiaUFnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbTl1VTNSdmNDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV2YmxOMGIzQW9kR2hwY3lrN1hHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3p0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J2Ym1ObEtDa2dlMXh1SUNBZ0lDQWdJQ0JzYjI5d0xtRmpkR2wyWVhSbEtIUm9hWE11YVdRc0lIUm9hWE1wTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbTl1UTJ4bFlXNTFjQ0E5SUhWdVpHVm1hVzVsWkR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV2YmtGamRHbDJZWFJsVEc5dmNDQTlJR0ZqZEdsMllYUmxPMXh1WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVJQ0FnSUgxY2JseHVJQ0FnSUdOdmJYQnNaWFJsS0NrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG5OMGIzQW9LVHRjYmx4dUlDQWdJQ0FnSUNCcFppQW9kR2hwY3k1dmJrTnZiWEJzWlhSbEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbTl1UTI5dGNHeGxkR1VvZEdocGN5azdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmlBZ0lDQXZLbHh1SUNBZ0lDQWdJQ0FqSUVWNGRHVnVaQ0IwYUdseklGQnliMk5sYzNNZ2QybDBhQ0J1WlhjZ2NISnZjR1Z5ZEdsbGMxeHVJQ0FnSUNBZ0lDQWpJeUJTWlhSMWNtNXpJRzVsZHlCcGJuTjBZVzVqWlNCdlppQjBhR2x6SUZCeWIyTmxjM01uY3lCZ2NISnZkRzkwZVhCbFlDQjNhWFJvSUdWNGFYTjBhVzVuSUdGdVpDQnVaWGNnY0hKdmNHVnlkR2xsYzF4dVhHNGdJQ0FnSUNBZ0lFQndZWEpoYlNCYmIySnFaV04wWFNBb2IzQjBhVzl1WVd3cFhHNGdJQ0FnSUNBZ0lFQnlaWFIxY200Z1cxQnliMk5sYzNOZFhHNGdJQ0FnS2k5Y2JpQWdJQ0JwYm1obGNtbDBLSEJ5YjNCektTQjdYRzRnSUNBZ0lDQWdJR052Ym5OMElIc2dhV1FzSUM0dUxtbHVhR1Z5YVhSbFpGQnliM0J6SUgwZ1BTQjBhR2x6TzF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnYm1WM0lIUm9hWE11WTI5dWMzUnlkV04wYjNJb2V5QXVMaTVwYm1obGNtbDBaV1JRY205d2N5d2dMaTR1Y0hKdmNITWdmU2s3WEc0Z0lDQWdmVnh1ZlNKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3Rhc2svVGFzay5qc1xuICoqIG1vZHVsZSBpZCA9IDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9UYXNrMiA9IHJlcXVpcmUoJy4uL3Rhc2svVGFzaycpO1xuXG52YXIgX1Rhc2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVGFzazIpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIElucHV0ID0gZnVuY3Rpb24gKF9UYXNrKSB7XG4gICAgX2luaGVyaXRzKElucHV0LCBfVGFzayk7XG5cbiAgICBmdW5jdGlvbiBJbnB1dChpbml0aWFsVmFsdWVzLCBwb2xsKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbnB1dCk7XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1Rhc2suY2FsbCh0aGlzKSk7XG5cbiAgICAgICAgX3RoaXMuc3RhdGUgPSBpbml0aWFsVmFsdWVzO1xuXG4gICAgICAgIGlmICgoMCwgX3V0aWxzLmlzRnVuYykocG9sbCkpIHtcbiAgICAgICAgICAgIF90aGlzLm9uRnJhbWVTdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMubGF0ZXN0KF90aGlzLnBvbGwoKSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBNYW51YWxseSBhZGQgbGF0ZXN0IHZhbHVlc1xuICAgICAgICAgQHBhcmFtIFtvYmplY3RdXG4gICAgKi9cblxuICAgIElucHV0LnByb3RvdHlwZS5sYXRlc3QgPSBmdW5jdGlvbiBsYXRlc3QocHJvcHMpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IF9leHRlbmRzKHt9LCB0aGlzLnN0YXRlLCBwcm9wcyk7XG4gICAgfTtcblxuICAgIHJldHVybiBJbnB1dDtcbn0oX1Rhc2szLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBJbnB1dDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJuQjFkQzlKYm5CMWRDNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN096czdPenM3T3pzN096czdPenRKUVVkeFFqczdPMEZCUTJwQ0xHRkJSR2xDTEV0QlEycENMRU5CUVZrc1lVRkJXaXhGUVVFeVFpeEpRVUV6UWl4RlFVRnBRenM0UWtGRWFFSXNUMEZEWjBJN08zRkVRVU0zUWl4clFrRkVOa0k3TzBGQlJUZENMR05CUVVzc1MwRkJUQ3hIUVVGaExHRkJRV0lzUTBGR05rSTdPMEZCU1RkQ0xGbEJRVWtzYlVKQlFVOHNTVUZCVUN4RFFVRktMRVZCUVd0Q08wRkJRMlFzYTBKQlFVc3NXVUZCVEN4SFFVRnZRanQxUWtGQlRTeE5RVUZMTEUxQlFVd3NRMEZCV1N4TlFVRkxMRWxCUVV3c1JVRkJXanRoUVVGT0xFTkJSRTQ3VTBGQmJFSTdjVUpCU2paQ08wdEJRV3BET3pzN096czdPMEZCUkdsQ0xHOUNRV1ZxUWl4NVFrRkJUeXhQUVVGUE8wRkJRMVlzWVVGQlN5eExRVUZNTEdkQ1FVRnJRaXhMUVVGTExFdEJRVXdzUlVGQlpTeE5RVUZxUXl4RFFVUlZPenM3VjBGbVJ5SXNJbVpwYkdVaU9pSkpibkIxZEM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRDOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1ZHRnpheUJtY205dElDY3VMaTkwWVhOckwxUmhjMnNuTzF4dWFXMXdiM0owSUhzZ2FYTkdkVzVqSUgwZ1puSnZiU0FuTGk0dmFXNWpMM1YwYVd4ekp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdZMnhoYzNNZ1NXNXdkWFFnWlhoMFpXNWtjeUJVWVhOcklIdGNiaUFnSUNCamIyNXpkSEoxWTNSdmNpaHBibWwwYVdGc1ZtRnNkV1Z6TENCd2IyeHNLU0I3WEc0Z0lDQWdJQ0FnSUhOMWNHVnlLQ2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjM1JoZEdVZ1BTQnBibWwwYVdGc1ZtRnNkV1Z6TzF4dVhHNGdJQ0FnSUNBZ0lHbG1JQ2hwYzBaMWJtTW9jRzlzYkNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXViMjVHY21GdFpWTjBZWEowSUQwZ0tDa2dQVDRnZEdocGN5NXNZWFJsYzNRb2RHaHBjeTV3YjJ4c0tDa3BPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeXBjYmlBZ0lDQWdJQ0FnVFdGdWRXRnNiSGtnWVdSa0lHeGhkR1Z6ZENCMllXeDFaWE5jYmx4dUlDQWdJQ0FnSUNCQWNHRnlZVzBnVzI5aWFtVmpkRjFjYmlBZ0lDQXFMMXh1SUNBZ0lHeGhkR1Z6ZENod2NtOXdjeWtnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbk4wWVhSbElEMGdleUF1TGk1MGFHbHpMbk4wWVhSbExDQXVMaTV3Y205d2N5QjlPMXh1SUNBZ0lIMWNibjFjYmlKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lucHV0L0lucHV0LmpzXG4gKiogbW9kdWxlIGlkID0gOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3RpbWVsaW5lID0gcmVxdWlyZSgnLi90aW1lbGluZScpO1xuXG52YXIgX3RpbWVsaW5lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RpbWVsaW5lKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIERFRkFVTFRfSU5URVJWQUwgPSAxMDA7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICh0d2VlbnMsIHByb3BzKSB7XG4gICAgdmFyIHByb3BzSXNEdXJhdGlvbiA9ICgwLCBfdXRpbHMuaXNOdW0pKHByb3BzKTtcbiAgICB2YXIgaW50ZXJ2YWwgPSBwcm9wc0lzRHVyYXRpb24gPyBwcm9wcyA6IHByb3BzID8gcHJvcHMuaW50ZXJ2YWwgfHwgREVGQVVMVF9JTlRFUlZBTCA6IERFRkFVTFRfSU5URVJWQUw7XG4gICAgdmFyIGF0ID0gMDtcbiAgICB2YXIgdGltZWxpbmVEZWZpbml0aW9uID0gdHdlZW5zLm1hcChmdW5jdGlvbiAodHdlZW4pIHtcbiAgICAgICAgdmFyIGRlZiA9IHsgdHdlZW46IHR3ZWVuLCBhdDogYXQgfTtcbiAgICAgICAgYXQgKz0gaW50ZXJ2YWw7XG4gICAgICAgIHJldHVybiBkZWY7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKDAsIF90aW1lbGluZTIuZGVmYXVsdCkodGltZWxpbmVEZWZpbml0aW9uLCBwcm9wcyk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1NdmMzUmhaMmRsY2k1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3T3pzN096czdRVUZIUVN4SlFVRk5MRzFDUVVGdFFpeEhRVUZ1UWpzN2EwSkJSVk1zVlVGQlF5eE5RVUZFTEVWQlFWTXNTMEZCVkN4RlFVRnRRanRCUVVNNVFpeFJRVUZOTEd0Q1FVRnJRaXhyUWtGQlRTeExRVUZPTEVOQlFXeENMRU5CUkhkQ08wRkJSVGxDTEZGQlFVMHNWMEZCVnl4clFrRkJhMElzUzBGQmJFSXNSMEZCTUVJc1VVRkJVU3hOUVVGTkxGRkJRVTRzU1VGQmEwSXNaMEpCUVd4Q0xFZEJRWEZETEdkQ1FVRTNReXhEUVVaaU8wRkJSemxDTEZGQlFVa3NTMEZCU3l4RFFVRk1MRU5CU0RCQ08wRkJTVGxDTEZGQlFVMHNjVUpCUVhGQ0xFOUJRVThzUjBGQlVDeERRVUZYTEZWQlFVTXNTMEZCUkN4RlFVRlhPMEZCUXpkRExGbEJRVTBzVFVGQlRTeEZRVUZGTEZsQlFVWXNSVUZCVXl4TlFVRlVMRVZCUVU0c1EwRkVkVU03UVVGRk4wTXNZMEZCVFN4UlFVRk9MRU5CUmpaRE8wRkJSemRETEdWQlFVOHNSMEZCVUN4RFFVZzJRenRMUVVGWUxFTkJRV2hETEVOQlNuZENPenRCUVZVNVFpeFhRVUZQTEhkQ1FVRlRMR3RDUVVGVUxFVkJRVFpDTEV0QlFUZENMRU5CUVZBc1EwRldPRUk3UTBGQmJrSWlMQ0ptYVd4bElqb2ljM1JoWjJkbGNpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdkR2x0Wld4cGJtVWdabkp2YlNBbkxpOTBhVzFsYkdsdVpTYzdYRzVwYlhCdmNuUWdleUJwYzA1MWJTQjlJR1p5YjIwZ0p5NHZkWFJwYkhNbk8xeHVYRzVqYjI1emRDQkVSVVpCVlV4VVgwbE9WRVZTVmtGTUlEMGdNVEF3TzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENBb2RIZGxaVzV6TENCd2NtOXdjeWtnUFQ0Z2UxeHVJQ0FnSUdOdmJuTjBJSEJ5YjNCelNYTkVkWEpoZEdsdmJpQTlJR2x6VG5WdEtIQnliM0J6S1R0Y2JpQWdJQ0JqYjI1emRDQnBiblJsY25aaGJDQTlJSEJ5YjNCelNYTkVkWEpoZEdsdmJpQS9JSEJ5YjNCeklEb2djSEp2Y0hNZ1B5QndjbTl3Y3k1cGJuUmxjblpoYkNCOGZDQkVSVVpCVlV4VVgwbE9WRVZTVmtGTUlEb2dSRVZHUVZWTVZGOUpUbFJGVWxaQlREdGNiaUFnSUNCc1pYUWdZWFFnUFNBd08xeHVJQ0FnSUdOdmJuTjBJSFJwYldWc2FXNWxSR1ZtYVc1cGRHbHZiaUE5SUhSM1pXVnVjeTV0WVhBb0tIUjNaV1Z1S1NBOVBpQjdYRzRnSUNBZ0lDQWdJR052Ym5OMElHUmxaaUE5SUhzZ2RIZGxaVzRzSUdGMElIMDdYRzRnSUNBZ0lDQWdJR0YwSUNzOUlHbHVkR1Z5ZG1Gc08xeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1pHVm1PMXh1SUNBZ0lIMHBPMXh1WEc0Z0lDQWdjbVYwZFhKdUlIUnBiV1ZzYVc1bEtIUnBiV1ZzYVc1bFJHVm1hVzVwZEdsdmJpd2djSEp2Y0hNcE8xeHVmVHNpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL3N0YWdnZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdGltZWxpbmU7XG5cbnZhciBfVHdlZW4gPSByZXF1aXJlKCcuLi9hY3Rpb25zL1R3ZWVuJyk7XG5cbnZhciBfVHdlZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVHdlZW4pO1xuXG52YXIgX3ByZXNldEVhc2luZyA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvZWFzaW5nL3ByZXNldC1lYXNpbmcnKTtcblxudmFyIF9wcmVzZXRFYXNpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlc2V0RWFzaW5nKTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi9jYWxjJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qXG4gICAgQHBhcmFtIFthcnJheV1cbiAgICAgICAgU2VxdWVudGlhbCBhcnJheSBvZiB0d2VlbnMsIGVhY2ggaXRlbSBjYW4gYmUgYSB0d2VlbiBvciBkZWZpbml0aW9uIG9iajpcblxuICAgICAgICBbXG4gICAgICAgICAgICBuZXcgVHdlZW4oKSxcbiAgICAgICAgICAgIHN0YWdnZXIoKSxcbiAgICAgICAgICAgIHRpbWVsaW5lKCksXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHdlZW46IG5ldyBUd2VlbigpLFxuICAgICAgICAgICAgICAgIGF0OiAxMDAsXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiBcIis9MTAwXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuKi9cbnZhciBhbmFseXplID0gZnVuY3Rpb24gKGRlZnMpIHtcbiAgICB2YXIgdGltZWxpbmUgPSBbXTtcbiAgICB2YXIgbnVtRGVmcyA9IGRlZnMubGVuZ3RoO1xuICAgIHZhciBjdXJyZW50UGxheWhlYWQgPSAwO1xuXG4gICAgdmFyIF9sb29wID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgdmFyIGRlZiA9IGRlZnNbaV07XG4gICAgICAgIHZhciBkZWZJc09iaiA9IGRlZi50d2VlbiA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgdmFyIHR3ZWVuID0gZGVmSXNPYmogPyBkZWYudHdlZW4gOiBkZWY7XG5cbiAgICAgICAgaWYgKGRlZklzT2JqKSB7XG4gICAgICAgICAgICBpZiAoZGVmLm9mZnNldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFBsYXloZWFkID0gKDAsIF9jYWxjLnJlbGF0aXZlVmFsdWUpKGN1cnJlbnRQbGF5aGVhZCwgZGVmLm9mZnNldCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRlZi5hdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFBsYXloZWFkID0gZGVmLmF0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGR1cmF0aW9uID0gMDtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHR3ZWVuLnZhbHVlcykge1xuICAgICAgICAgICAgaWYgKHR3ZWVuLnZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gdHdlZW4udmFsdWVzW2tleV07XG4gICAgICAgICAgICAgICAgZHVyYXRpb24gPSBNYXRoLm1heChkdXJhdGlvbiwgdmFsdWUuZHVyYXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGltZWxpbmUucHVzaCh7XG4gICAgICAgICAgICBmcm9tOiBjdXJyZW50UGxheWhlYWQsXG4gICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICAgICAgICBmaXJlOiBmdW5jdGlvbiAodGltZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0d2Vlbi5zZWVrVGltZSh0aW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY3VycmVudFBsYXloZWFkICs9IGR1cmF0aW9uO1xuICAgIH07XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bURlZnM7IGkrKykge1xuICAgICAgICBfbG9vcChpKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyB0b3RhbFRpbWU6IGN1cnJlbnRQbGF5aGVhZCwgdGltZWxpbmU6IHRpbWVsaW5lIH07XG59O1xuXG52YXIgc2V0VHdlZW5zID0gZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgdGltZWxpbmUgPSBfcmVmLnRpbWVsaW5lO1xuICAgIHZhciB0aW1lbGluZUxlbmd0aCA9IF9yZWYudGltZWxpbmVMZW5ndGg7XG4gICAgdmFyIHZhbHVlcyA9IF9yZWYudmFsdWVzO1xuICAgIHZhciBkdXJhdGlvbiA9IF9yZWYuZHVyYXRpb247XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRpbWVsaW5lTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIF90d2VlbiA9IHRpbWVsaW5lW2ldO1xuICAgICAgICB2YXIgdHdlZW5UaW1lID0gdmFsdWVzLnAuY3VycmVudCAqIGR1cmF0aW9uIC0gX3R3ZWVuLmZyb207XG5cbiAgICAgICAgaWYgKHR3ZWVuVGltZSA+PSAtNTAgJiYgdHdlZW5UaW1lIDw9IF90d2Vlbi5kdXJhdGlvbiArIDUwKSB7XG4gICAgICAgICAgICBfdHdlZW4uZmlyZSh0d2VlblRpbWUpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZnVuY3Rpb24gdGltZWxpbmUoZGVmKSB7XG4gICAgdmFyIHByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMV07XG5cbiAgICB2YXIgX2FuYWx5emUgPSBhbmFseXplKGRlZik7XG5cbiAgICB2YXIgdG90YWxUaW1lID0gX2FuYWx5emUudG90YWxUaW1lO1xuICAgIHZhciB0aW1lbGluZSA9IF9hbmFseXplLnRpbWVsaW5lO1xuXG4gICAgcmV0dXJuIG5ldyBfVHdlZW4yLmRlZmF1bHQoX2V4dGVuZHMoe1xuICAgICAgICBlYXNlOiBfcHJlc2V0RWFzaW5nMi5kZWZhdWx0LmxpbmVhclxuICAgIH0sIHByb3BzLCB7XG4gICAgICAgIGR1cmF0aW9uOiB0b3RhbFRpbWUsXG4gICAgICAgIHZhbHVlczoge1xuICAgICAgICAgICAgcDogMVxuICAgICAgICB9LFxuICAgICAgICB0aW1lbGluZTogdGltZWxpbmUsXG4gICAgICAgIHRpbWVsaW5lTGVuZ3RoOiB0aW1lbGluZS5sZW5ndGgsXG4gICAgICAgIG9uUmVuZGVyOiBzZXRUd2VlbnNcbiAgICB9KSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12ZEdsdFpXeHBibVV1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdhMEpCYjBWM1FqczdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdRVUZxUkhoQ0xFbEJRVTBzVlVGQlZTeFZRVUZETEVsQlFVUXNSVUZCVlR0QlFVTjBRaXhSUVVGTkxGZEJRVmNzUlVGQldDeERRVVJuUWp0QlFVVjBRaXhSUVVGTkxGVkJRVlVzUzBGQlN5eE5RVUZNTEVOQlJrMDdRVUZIZEVJc1VVRkJTU3hyUWtGQmEwSXNRMEZCYkVJc1EwRklhMEk3T3pCQ1FVdGlPMEZCUTB3c1dVRkJUU3hOUVVGTkxFdEJRVXNzUTBGQlRDeERRVUZPTzBGQlEwNHNXVUZCVFN4WFFVRlhMRWxCUVVrc1MwRkJTaXhIUVVGWkxFbEJRVm9zUjBGQmJVSXNTMEZCYmtJN1FVRkRha0lzV1VGQlRTeFJRVUZSTEZkQlFXRXNTVUZCU1N4TFFVRktMRWRCUVZrc1IwRkJla0k3TzBGQlJXUXNXVUZCU1N4UlFVRktMRVZCUVdNN1FVRkRWaXhuUWtGQlNTeEpRVUZKTEUxQlFVb3NTMEZCWlN4VFFVRm1MRVZCUVRCQ08wRkJRekZDTEd0RFFVRnJRaXg1UWtGQll5eGxRVUZrTEVWQlFTdENMRWxCUVVrc1RVRkJTaXhEUVVGcVJDeERRVVF3UWp0aFFVRTVRaXhOUVVWUExFbEJRVWtzU1VGQlNTeEZRVUZLTEV0QlFWY3NVMEZCV0N4RlFVRnpRanRCUVVNM1FpeHJRMEZCYTBJc1NVRkJTU3hGUVVGS0xFTkJSRmM3WVVGQk1VSTdVMEZJV0RzN1FVRlJRU3haUVVGSkxGZEJRVmNzUTBGQldEdEJRVU5LTEdGQlFVc3NTVUZCU1N4SFFVRktMRWxCUVZjc1RVRkJUU3hOUVVGT0xFVkJRV003UVVGRE1VSXNaMEpCUVVrc1RVRkJUU3hOUVVGT0xFTkJRV0VzWTBGQllpeERRVUUwUWl4SFFVRTFRaXhEUVVGS0xFVkJRWE5ETzBGQlEyeERMRzlDUVVGTkxGRkJRVkVzVFVGQlRTeE5RVUZPTEVOQlFXRXNSMEZCWWl4RFFVRlNMRU5CUkRSQ08wRkJSV3hETERKQ1FVRlhMRXRCUVVzc1IwRkJUQ3hEUVVGVExGRkJRVlFzUlVGQmJVSXNUVUZCVFN4UlFVRk9MRU5CUVRsQ0xFTkJSbXRETzJGQlFYUkRPMU5CUkVvN08wRkJUMEVzYVVKQlFWTXNTVUZCVkN4RFFVRmpPMEZCUTFZc2EwSkJRVTBzWlVGQlRqdEJRVU5CTEhOQ1FVRlZMRkZCUVZZN1FVRkRRU3hyUWtGQlRTeFZRVUZETEVsQlFVUTdkVUpCUVZVc1RVRkJUU3hSUVVGT0xFTkJRV1VzU1VGQlpqdGhRVUZXTzFOQlNGWTdPMEZCVFVFc01rSkJRVzFDTEZGQlFXNUNPMDFCYUVOclFqczdRVUZMZEVJc1UwRkJTeXhKUVVGSkxFbEJRVWtzUTBGQlNpeEZRVUZQTEVsQlFVa3NUMEZCU2l4RlFVRmhMRWRCUVRkQ0xFVkJRV3RETzJOQlFYcENMRWRCUVhsQ08wdEJRV3hET3p0QlFUaENRU3hYUVVGUExFVkJRVVVzVjBGQlZ5eGxRVUZZTEVWQlFUUkNMR3RDUVVFNVFpeEZRVUZRTEVOQmJrTnpRanREUVVGV096dEJRWE5EYUVJc1NVRkJUU3haUVVGWkxHZENRVUZ2UkR0UlFVRnFSQ3g1UWtGQmFVUTdVVUZCZGtNc2NVTkJRWFZETzFGQlFYWkNMSEZDUVVGMVFqdFJRVUZtTEhsQ1FVRmxPenRCUVVOc1JTeFRRVUZMTEVsQlFVa3NTVUZCU1N4RFFVRktMRVZCUVU4c1NVRkJTU3hqUVVGS0xFVkJRVzlDTEVkQlFYQkRMRVZCUVhsRE8wRkJRM0pETEZsQlFVMHNVMEZCVVN4VFFVRlRMRU5CUVZRc1EwRkJVaXhEUVVRclFqdEJRVVZ5UXl4WlFVRk5MRmxCUVZrc1RVRkJReXhEUVVGUExFTkJRVkFzUTBGQlV5eFBRVUZVTEVkQlFXMUNMRkZCUVc1Q0xFZEJRU3RDTEU5QlFVMHNTVUZCVGl4RFFVWmlPenRCUVVseVF5eFpRVUZKTEdGQlFXRXNRMEZCUXl4RlFVRkVMRWxCUVU4c1lVRkJZU3hQUVVGTkxGRkJRVTRzUjBGQmFVSXNSVUZCYWtJc1JVRkJjVUk3UVVGRGRFUXNiVUpCUVUwc1NVRkJUaXhEUVVGWExGTkJRVmdzUlVGRWMwUTdVMEZCTVVRN1MwRktTanREUVVSak96dEJRVmRJTEZOQlFWTXNVVUZCVkN4RFFVRnJRaXhIUVVGc1FpeEZRVUZ0UXp0UlFVRmFMRGhFUVVGUkxHdENRVUZKT3p0dFFrRkRaQ3hSUVVGUkxFZEJRVklzUlVGRVl6czdVVUZEZEVNc0swSkJSSE5ETzFGQlF6TkNMRFpDUVVReVFqczdRVUZIT1VNc1YwRkJUenRCUVVOSUxHTkJRVTBzZFVKQlFVOHNUVUZCVUR0UFFVTklPMEZCUTBnc2EwSkJRVlVzVTBGQlZqdEJRVU5CTEdkQ1FVRlJPMEZCUTBvc1pVRkJSeXhEUVVGSU8xTkJSRW83UVVGSFFTeHJRa0ZCVlN4UlFVRldPMEZCUTBFc2QwSkJRV2RDTEZOQlFWTXNUVUZCVkR0QlFVTm9RaXhyUWtGQlZTeFRRVUZXTzAxQlZFY3NRMEZCVUN4RFFVZzRRenREUVVGdVF5SXNJbVpwYkdVaU9pSjBhVzFsYkdsdVpTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdWSGRsWlc0Z1puSnZiU0FuTGk0dllXTjBhVzl1Y3k5VWQyVmxiaWM3WEc1cGJYQnZjblFnWldGemFXNW5JR1p5YjIwZ0p5NHVMMkZqZEdsdmJuTXZaV0Z6YVc1bkwzQnlaWE5sZEMxbFlYTnBibWNuTzF4dWFXMXdiM0owSUhzZ2NtVnNZWFJwZG1WV1lXeDFaU0I5SUdaeWIyMGdKeTR2WTJGc1l5YzdYRzVjYmk4cVhHNGdJQ0FnUUhCaGNtRnRJRnRoY25KaGVWMWNiaUFnSUNBZ0lDQWdVMlZ4ZFdWdWRHbGhiQ0JoY25KaGVTQnZaaUIwZDJWbGJuTXNJR1ZoWTJnZ2FYUmxiU0JqWVc0Z1ltVWdZU0IwZDJWbGJpQnZjaUJrWldacGJtbDBhVzl1SUc5aWFqcGNibHh1SUNBZ0lDQWdJQ0JiWEc0Z0lDQWdJQ0FnSUNBZ0lDQnVaWGNnVkhkbFpXNG9LU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lITjBZV2RuWlhJb0tTeGNiaUFnSUNBZ0lDQWdJQ0FnSUhScGJXVnNhVzVsS0Nrc1hHNGdJQ0FnSUNBZ0lDQWdJQ0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEhkbFpXNDZJRzVsZHlCVWQyVmxiaWdwTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdGME9pQXhNREFzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYjJabWMyVjBPaUJjSWlzOU1UQXdYQ0pjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdYVnh1S2k5Y2JtTnZibk4wSUdGdVlXeDVlbVVnUFNBb1pHVm1jeWtnUFQ0Z2UxeHVJQ0FnSUdOdmJuTjBJSFJwYldWc2FXNWxJRDBnVzEwN1hHNGdJQ0FnWTI5dWMzUWdiblZ0UkdWbWN5QTlJR1JsWm5NdWJHVnVaM1JvTzF4dUlDQWdJR3hsZENCamRYSnlaVzUwVUd4aGVXaGxZV1FnUFNBd08xeHVYRzRnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQnVkVzFFWldaek95QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnWkdWbUlEMGdaR1ZtYzF0cFhUdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ1pHVm1TWE5QWW1vZ1BTQmtaV1l1ZEhkbFpXNGdQeUIwY25WbElEb2dabUZzYzJVN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUhSM1pXVnVJRDBnS0dSbFprbHpUMkpxS1NBL0lHUmxaaTUwZDJWbGJpQTZJR1JsWmp0Y2JseHVJQ0FnSUNBZ0lDQnBaaUFvWkdWbVNYTlBZbW9wSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoa1pXWXViMlptYzJWMElDRTlQU0IxYm1SbFptbHVaV1FwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamRYSnlaVzUwVUd4aGVXaGxZV1FnUFNCeVpXeGhkR2wyWlZaaGJIVmxLR04xY25KbGJuUlFiR0Y1YUdWaFpDd2daR1ZtTG05bVpuTmxkQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2FXWWdLR1JsWmk1aGRDQWhQVDBnZFc1a1pXWnBibVZrS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kzVnljbVZ1ZEZCc1lYbG9aV0ZrSUQwZ1pHVm1MbUYwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ2JHVjBJR1IxY21GMGFXOXVJRDBnTUR0Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2EyVjVJR2x1SUhSM1pXVnVMblpoYkhWbGN5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFIzWldWdUxuWmhiSFZsY3k1b1lYTlBkMjVRY205d1pYSjBlU2hyWlhrcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2RtRnNkV1VnUFNCMGQyVmxiaTUyWVd4MVpYTmJhMlY1WFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCa2RYSmhkR2x2YmlBOUlFMWhkR2d1YldGNEtHUjFjbUYwYVc5dUxDQjJZV3gxWlM1a2RYSmhkR2x2YmlrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQjBhVzFsYkdsdVpTNXdkWE5vS0h0Y2JpQWdJQ0FnSUNBZ0lDQWdJR1p5YjIwNklHTjFjbkpsYm5SUWJHRjVhR1ZoWkN4Y2JpQWdJQ0FnSUNBZ0lDQWdJR1IxY21GMGFXOXVPaUJrZFhKaGRHbHZiaXhjYmlBZ0lDQWdJQ0FnSUNBZ0lHWnBjbVU2SUNoMGFXMWxLU0E5UGlCMGQyVmxiaTV6WldWclZHbHRaU2gwYVcxbEtWeHVJQ0FnSUNBZ0lDQjlLVHRjYmx4dUlDQWdJQ0FnSUNCamRYSnlaVzUwVUd4aGVXaGxZV1FnS3owZ1pIVnlZWFJwYjI0N1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WMGRYSnVJSHNnZEc5MFlXeFVhVzFsT2lCamRYSnlaVzUwVUd4aGVXaGxZV1FzSUhScGJXVnNhVzVsSUgwN1hHNTlPMXh1WEc1amIyNXpkQ0J6WlhSVWQyVmxibk1nUFNBb2V5QjBhVzFsYkdsdVpTd2dkR2x0Wld4cGJtVk1aVzVuZEdnc0lIWmhiSFZsY3l3Z1pIVnlZWFJwYjI0Z2ZTa2dQVDRnZTF4dUlDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnZEdsdFpXeHBibVZNWlc1bmRHZzdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCMGQyVmxiaUE5SUhScGJXVnNhVzVsVzJsZE8xeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCMGQyVmxibFJwYldVZ1BTQW9kbUZzZFdWekxuQXVZM1Z5Y21WdWRDQXFJR1IxY21GMGFXOXVLU0F0SUhSM1pXVnVMbVp5YjIwN1hHNWNiaUFnSUNBZ0lDQWdhV1lnS0hSM1pXVnVWR2x0WlNBK1BTQXROVEFnSmlZZ2RIZGxaVzVVYVcxbElEdzlJSFIzWldWdUxtUjFjbUYwYVc5dUlDc2dOVEFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFIzWldWdUxtWnBjbVVvZEhkbFpXNVVhVzFsS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JuMDdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR1oxYm1OMGFXOXVJSFJwYldWc2FXNWxLR1JsWml3Z2NISnZjSE1nUFNCN2ZTa2dlMXh1SUNBZ0lHTnZibk4wSUhzZ2RHOTBZV3hVYVcxbExDQjBhVzFsYkdsdVpTQjlJRDBnWVc1aGJIbDZaU2hrWldZcE8xeHVYRzRnSUNBZ2NtVjBkWEp1SUc1bGR5QlVkMlZsYmloN1hHNGdJQ0FnSUNBZ0lHVmhjMlU2SUdWaGMybHVaeTVzYVc1bFlYSXNYRzRnSUNBZ0lDQWdJQzR1TG5CeWIzQnpMRnh1SUNBZ0lDQWdJQ0JrZFhKaGRHbHZiam9nZEc5MFlXeFVhVzFsTEZ4dUlDQWdJQ0FnSUNCMllXeDFaWE02SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEE2SURGY2JpQWdJQ0FnSUNBZ2ZTeGNiaUFnSUNBZ0lDQWdkR2x0Wld4cGJtVTZJSFJwYldWc2FXNWxMRnh1SUNBZ0lDQWdJQ0IwYVcxbGJHbHVaVXhsYm1kMGFEb2dkR2x0Wld4cGJtVXViR1Z1WjNSb0xGeHVJQ0FnSUNBZ0lDQnZibEpsYm1SbGNqb2djMlYwVkhkbFpXNXpYRzRnSUNBZ2ZTazdYRzU5SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL3RpbWVsaW5lLmpzXG4gKiogbW9kdWxlIGlkID0gMTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLypcbiAgICBPdmVycmlkZSBgZ2V0dGVyYCBhbmQgYHNldHRlcmAgdG8gcmVpbXBsZW1lbnQgdGhlIGludGVyZmFjZSBmb3IgbmV3IGVsZW1lbnQgdHlwZXMuXG5cbiAgICBTZXQgYC5zdGF0ZU1hcGAgYXMgYW4gb2JqZWN0IGtleS92YWx1ZSBtYXAgdG8gdHJhbnNsYXRlIGluY29taW5nIGtleXMgdG9cbiAgICBBUEktc3BlY2lmaWMga2V5cy4gRm9yIGluc3RhbmNlLCB7IHg6ICd0cmFuc2xhdGVYJyB9LiBcblxuICAgIFNldCBgLnZhbHVlVHlwZU1hcGAgYXMgYW4gb2JqZWN0IGtleS92YWx1ZSBtYXAgdG8gcmV0dXJuIGEgdmFsdWUgdHlwZSB3aXRoXG4gICAgYGdldFZhbHVlVHlwZShrZXkpYCAoa2V5IHdpbGwgYmUgbWFwcGVkIGFjY29yZGluZyB0byBgc3RhdGVNYXBgKVxuKi9cblxudmFyIG1hcEtleSA9IGZ1bmN0aW9uIChrZXksIG1hcCkge1xuICAgIHJldHVybiBtYXAgPyBtYXBba2V5XSB8fCBrZXkgOiBrZXk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIC8qXG4gICAgICAgIEFkYXB0ZXIgaXMgc2V0dGVyIGZ1bmN0aW9uXG4gICAgICAgICBAcGFyYW0gW29iamVjdF06IE9iamVjdCB0byBzZXQgcHJvcGVydGllcyBvblxuICAgICAgICBAcGFyYW0gW29iamVjdF06IEtleS92YWx1ZSBwcm9wZXJ0aWVzIHRvIHNldFxuICAgICovXG4gICAgdmFyIGFkYXB0ZXIgPSBmdW5jdGlvbiAoZWxlbWVudCwgcHJvcHMsIGRhdGEpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuc3RhdGVNYXApIHtcbiAgICAgICAgICAgIC8vIFRyYW5zbGF0ZSBwcm9wc1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1hcHBlZEtleSA9IG1hcEtleShrZXksIG9wdGlvbnMuc3RhdGVNYXApO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXBwZWRLZXkgIT09IGtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHNbbWFwcGVkS2V5XSA9IHByb3BzW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgcHJvcHNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvcHRpb25zLnNldHRlcihlbGVtZW50LCBwcm9wcywgZGF0YSk7XG4gICAgfTtcblxuICAgIGFkYXB0ZXIuZ2V0ID0gZnVuY3Rpb24gKGVsZW1lbnQsIGtleSkge1xuICAgICAgICByZXR1cm4gb3B0aW9ucy5nZXR0ZXIoZWxlbWVudCwgbWFwS2V5KGtleSwgb3B0aW9ucy5zdGF0ZU1hcCkpO1xuICAgIH07XG4gICAgYWRhcHRlci5jaGVja1ZhbHVlVHlwZSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnMudmFsdWVUeXBlTWFwID8gb3B0aW9ucy52YWx1ZVR5cGVNYXBbbWFwS2V5KGtleSwgb3B0aW9ucy5zdGF0ZU1hcCldIDogZmFsc2U7XG4gICAgfTtcbiAgICBhZGFwdGVyLmdldEVsZW1lbnREYXRhID0gb3B0aW9ucy5nZXRFbGVtZW50RGF0YTtcblxuICAgIHJldHVybiBhZGFwdGVyO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFpHRndkR1Z5TDJGa1lYQjBaWEl1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3T3pzN096dEJRVlZCTEVsQlFVMHNVMEZCVXl4VlFVRkRMRWRCUVVRc1JVRkJUU3hIUVVGT08xZEJRV01zVFVGQlRTeEpRVUZKTEVkQlFVb3NTMEZCV1N4SFFVRmFMRWRCUVd0Q0xFZEJRWGhDTzBOQlFXUTdPMnRDUVVWQkxGVkJRVU1zVDBGQlJDeEZRVUZoT3pzN096czdRVUZQZUVJc1VVRkJUU3hWUVVGVkxGVkJRVU1zVDBGQlJDeEZRVUZWTEV0QlFWWXNSVUZCYVVJc1NVRkJha0lzUlVGQk1FSTdRVUZEZEVNc1dVRkJTU3hSUVVGUkxGRkJRVklzUlVGQmEwSTdPMEZCUld4Q0xHbENRVUZMTEVsQlFVa3NSMEZCU2l4SlFVRlhMRXRCUVdoQ0xFVkJRWFZDTzBGQlEyNUNMRzlDUVVGSkxFMUJRVTBzWTBGQlRpeERRVUZ4UWl4SFFVRnlRaXhEUVVGS0xFVkJRU3RDTzBGQlF6TkNMSGRDUVVGTkxGbEJRVmtzVDBGQlR5eEhRVUZRTEVWQlFWa3NVVUZCVVN4UlFVRlNMRU5CUVhoQ0xFTkJSSEZDT3p0QlFVY3pRaXgzUWtGQlNTeGpRVUZqTEVkQlFXUXNSVUZCYlVJN1FVRkRia0lzT0VKQlFVMHNVMEZCVGl4SlFVRnRRaXhOUVVGTkxFZEJRVTRzUTBGQmJrSXNRMEZFYlVJN1FVRkZia0lzSzBKQlFVOHNUVUZCVFN4SFFVRk9MRU5CUVZBc1EwRkdiVUk3Y1VKQlFYWkNPMmxDUVVoS08yRkJSRW83VTBGR1NqczdRVUZqUVN4bFFVRlBMRkZCUVZFc1RVRkJVaXhEUVVGbExFOUJRV1lzUlVGQmQwSXNTMEZCZUVJc1JVRkJLMElzU1VGQkwwSXNRMEZCVUN4RFFXWnpRenRMUVVFeFFpeERRVkJST3p0QlFYbENlRUlzV1VGQlVTeEhRVUZTTEVkQlFXTXNWVUZCUXl4UFFVRkVMRVZCUVZVc1IwRkJWanRsUVVGclFpeFJRVUZSTEUxQlFWSXNRMEZCWlN4UFFVRm1MRVZCUVhkQ0xFOUJRVThzUjBGQlVDeEZRVUZaTEZGQlFWRXNVVUZCVWl4RFFVRndRenRMUVVGc1FpeERRWHBDVlR0QlFUQkNlRUlzV1VGQlVTeGpRVUZTTEVkQlFYbENMRlZCUVVNc1IwRkJSRHRsUVVGVExGRkJRVkVzV1VGQlVpeEhRVUYxUWl4UlFVRlJMRmxCUVZJc1EwRkJjVUlzVDBGQlR5eEhRVUZRTEVWQlFWa3NVVUZCVVN4UlFVRlNMRU5CUVdwRExFTkJRWFpDTEVkQlFUWkZMRXRCUVRkRk8wdEJRVlFzUTBFeFFrUTdRVUV5UW5oQ0xGbEJRVkVzWTBGQlVpeEhRVUY1UWl4UlFVRlJMR05CUVZJc1EwRXpRa1E3TzBGQk5rSjRRaXhYUVVGUExFOUJRVkFzUTBFM1FuZENPME5CUVdJaUxDSm1hV3hsSWpvaVlXUmhjSFJsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRDOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SXZLbHh1SUNBZ0lFOTJaWEp5YVdSbElHQm5aWFIwWlhKZ0lHRnVaQ0JnYzJWMGRHVnlZQ0IwYnlCeVpXbHRjR3hsYldWdWRDQjBhR1VnYVc1MFpYSm1ZV05sSUdadmNpQnVaWGNnWld4bGJXVnVkQ0IwZVhCbGN5NWNibHh1SUNBZ0lGTmxkQ0JnTG5OMFlYUmxUV0Z3WUNCaGN5QmhiaUJ2WW1wbFkzUWdhMlY1TDNaaGJIVmxJRzFoY0NCMGJ5QjBjbUZ1YzJ4aGRHVWdhVzVqYjIxcGJtY2dhMlY1Y3lCMGIxeHVJQ0FnSUVGUVNTMXpjR1ZqYVdacFl5QnJaWGx6TGlCR2IzSWdhVzV6ZEdGdVkyVXNJSHNnZURvZ0ozUnlZVzV6YkdGMFpWZ25JSDB1SUZ4dVhHNGdJQ0FnVTJWMElHQXVkbUZzZFdWVWVYQmxUV0Z3WUNCaGN5QmhiaUJ2WW1wbFkzUWdhMlY1TDNaaGJIVmxJRzFoY0NCMGJ5QnlaWFIxY200Z1lTQjJZV3gxWlNCMGVYQmxJSGRwZEdoY2JpQWdJQ0JnWjJWMFZtRnNkV1ZVZVhCbEtHdGxlU2xnSUNoclpYa2dkMmxzYkNCaVpTQnRZWEJ3WldRZ1lXTmpiM0prYVc1bklIUnZJR0J6ZEdGMFpVMWhjR0FwWEc0cUwxeHVYRzVqYjI1emRDQnRZWEJMWlhrZ1BTQW9hMlY1TENCdFlYQXBJRDArSUcxaGNDQS9JRzFoY0Z0clpYbGRJSHg4SUd0bGVTQTZJR3RsZVR0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ0tHOXdkR2x2Ym5NcElEMCtJSHRjYmlBZ0lDQXZLbHh1SUNBZ0lDQWdJQ0JCWkdGd2RHVnlJR2x6SUhObGRIUmxjaUJtZFc1amRHbHZibHh1WEc0Z0lDQWdJQ0FnSUVCd1lYSmhiU0JiYjJKcVpXTjBYVG9nVDJKcVpXTjBJSFJ2SUhObGRDQndjbTl3WlhKMGFXVnpJRzl1WEc0Z0lDQWdJQ0FnSUVCd1lYSmhiU0JiYjJKcVpXTjBYVG9nUzJWNUwzWmhiSFZsSUhCeWIzQmxjblJwWlhNZ2RHOGdjMlYwWEc0Z0lDQWdLaTljYmlBZ0lDQmpiMjV6ZENCaFpHRndkR1Z5SUQwZ0tHVnNaVzFsYm5Rc0lIQnliM0J6TENCa1lYUmhLU0E5UGlCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2h2Y0hScGIyNXpMbk4wWVhSbFRXRndLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJVY21GdWMyeGhkR1VnY0hKdmNITmNiaUFnSUNBZ0lDQWdJQ0FnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUJ3Y205d2N5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNod2NtOXdjeTVvWVhOUGQyNVFjbTl3WlhKMGVTaHJaWGtwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElHMWhjSEJsWkV0bGVTQTlJRzFoY0V0bGVTaHJaWGtzSUc5d2RHbHZibk11YzNSaGRHVk5ZWEFwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHMWhjSEJsWkV0bGVTQWhQVDBnYTJWNUtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQndjbTl3YzF0dFlYQndaV1JMWlhsZElEMGdjSEp2Y0hOYmEyVjVYVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1JsYkdWMFpTQndjbTl3YzF0clpYbGRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHOXdkR2x2Ym5NdWMyVjBkR1Z5S0dWc1pXMWxiblFzSUhCeWIzQnpMQ0JrWVhSaEtUdGNiaUFnSUNCOU8xeHVYRzRnSUNBZ1lXUmhjSFJsY2k1blpYUWdQU0FvWld4bGJXVnVkQ3dnYTJWNUtTQTlQaUJ2Y0hScGIyNXpMbWRsZEhSbGNpaGxiR1Z0Wlc1MExDQnRZWEJMWlhrb2EyVjVMQ0J2Y0hScGIyNXpMbk4wWVhSbFRXRndLU2s3WEc0Z0lDQWdZV1JoY0hSbGNpNWphR1ZqYTFaaGJIVmxWSGx3WlNBOUlDaHJaWGtwSUQwK0lHOXdkR2x2Ym5NdWRtRnNkV1ZVZVhCbFRXRndJRDhnYjNCMGFXOXVjeTUyWVd4MVpWUjVjR1ZOWVhCYmJXRndTMlY1S0d0bGVTd2diM0IwYVc5dWN5NXpkR0YwWlUxaGNDbGRJRG9nWm1Gc2MyVTdYRzRnSUNBZ1lXUmhjSFJsY2k1blpYUkZiR1Z0Wlc1MFJHRjBZU0E5SUc5d2RHbHZibk11WjJWMFJXeGxiV1Z1ZEVSaGRHRTdYRzVjYmlBZ0lDQnlaWFIxY200Z1lXUmhjSFJsY2p0Y2JuMDdJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hZGFwdGVyL2FkYXB0ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5zZXR0ZXIgPSBleHBvcnRzLmdldHRlciA9IHVuZGVmaW5lZDtcblxudmFyIF9hZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVyJyk7XG5cbnZhciBfYWRhcHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hZGFwdGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGdldHRlciA9IGV4cG9ydHMuZ2V0dGVyID0gZnVuY3Rpb24gKGVsZW1lbnQsIGtleSkge1xuICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZShrZXkpO1xufTtcbnZhciBzZXR0ZXIgPSBleHBvcnRzLnNldHRlciA9IGZ1bmN0aW9uIChlbGVtZW50LCBwcm9wcykge1xuICAgIGZvciAodmFyIGtleSBpbiBwcm9wcykge1xuICAgICAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBwcm9wc1trZXldKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9ICgwLCBfYWRhcHRlcjIuZGVmYXVsdCkoeyBnZXR0ZXI6IGdldHRlciwgc2V0dGVyOiBzZXR0ZXIgfSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwyRjBkSEl0WVdSaGNIUmxjaTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3T3p0QlFVVlBMRWxCUVUwc01FSkJRVk1zVlVGQlF5eFBRVUZFTEVWQlFWVXNSMEZCVmp0WFFVRnJRaXhSUVVGUkxGbEJRVklzUTBGQmNVSXNSMEZCY2tJN1EwRkJiRUk3UVVGRFppeEpRVUZOTERCQ1FVRlRMRlZCUVVNc1QwRkJSQ3hGUVVGVkxFdEJRVllzUlVGQmIwSTdRVUZEZEVNc1UwRkJTeXhKUVVGSkxFZEJRVW9zU1VGQlZ5eExRVUZvUWl4RlFVRjFRanRCUVVOdVFpeFpRVUZKTEUxQlFVMHNZMEZCVGl4RFFVRnhRaXhIUVVGeVFpeERRVUZLTEVWQlFTdENPMEZCUXpOQ0xHOUNRVUZSTEZsQlFWSXNRMEZCY1VJc1IwRkJja0lzUlVGQk1FSXNUVUZCVFN4SFFVRk9MRU5CUVRGQ0xFVkJSREpDTzFOQlFTOUNPMHRCUkVvN1EwRkVhMEk3TzJ0Q1FWRlFMSFZDUVVGakxFVkJRVVVzWTBGQlJpeEZRVUZWTEdOQlFWWXNSVUZCWkNJc0ltWnBiR1VpT2lKaGRIUnlMV0ZrWVhCMFpYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFF2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJR055WldGMFpVRmtZWEIwWlhJZ1puSnZiU0FuTGk5aFpHRndkR1Z5Snp0Y2JseHVaWGh3YjNKMElHTnZibk4wSUdkbGRIUmxjaUE5SUNobGJHVnRaVzUwTENCclpYa3BJRDArSUdWc1pXMWxiblF1WjJWMFFYUjBjbWxpZFhSbEtHdGxlU2s3WEc1bGVIQnZjblFnWTI5dWMzUWdjMlYwZEdWeUlEMGdLR1ZzWlcxbGJuUXNJSEJ5YjNCektTQTlQaUI3WEc0Z0lDQWdabTl5SUNoc1pYUWdhMlY1SUdsdUlIQnliM0J6S1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2h3Y205d2N5NW9ZWE5QZDI1UWNtOXdaWEowZVNoclpYa3BLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmxiR1Z0Wlc1MExuTmxkRUYwZEhKcFluVjBaU2hyWlhrc0lIQnliM0J6VzJ0bGVWMHBPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVnh1ZlR0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1kzSmxZWFJsUVdSaGNIUmxjaWg3SUdkbGRIUmxjaXdnYzJWMGRHVnlJSDBwT3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FkYXB0ZXIvYXR0ci1hZGFwdGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9zdGF0ZU1hcCA9IHJlcXVpcmUoJy4vY3NzL3N0YXRlLW1hcCcpO1xuXG52YXIgX3N0YXRlTWFwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0YXRlTWFwKTtcblxudmFyIF92YWx1ZVR5cGVNYXAgPSByZXF1aXJlKCcuL2Nzcy92YWx1ZS10eXBlLW1hcCcpO1xuXG52YXIgX3ZhbHVlVHlwZU1hcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF92YWx1ZVR5cGVNYXApO1xuXG52YXIgX2J1aWxkID0gcmVxdWlyZSgnLi9jc3MvYnVpbGQnKTtcblxudmFyIF9idWlsZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9idWlsZCk7XG5cbnZhciBfcHJlZml4ZXIgPSByZXF1aXJlKCcuL2Nzcy9wcmVmaXhlcicpO1xuXG52YXIgX3ByZWZpeGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ByZWZpeGVyKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wcyA9IHJlcXVpcmUoJy4vY3NzL3RyYW5zZm9ybS1wcm9wcycpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zZm9ybVByb3BzKTtcblxudmFyIF9hZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVyJyk7XG5cbnZhciBfYWRhcHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hZGFwdGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gKDAsIF9hZGFwdGVyMi5kZWZhdWx0KSh7XG4gICAgZ2V0dGVyOiBmdW5jdGlvbiAoZWxlbWVudCwga2V5KSB7XG4gICAgICAgIHJldHVybiAhX3RyYW5zZm9ybVByb3BzMi5kZWZhdWx0W2tleV0gPyB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCBudWxsKVsoMCwgX3ByZWZpeGVyMi5kZWZhdWx0KShrZXkpXSA6IF92YWx1ZVR5cGVNYXAyLmRlZmF1bHRba2V5XS5kZWZhdWx0UHJvcHMuY3VycmVudCB8fCAwO1xuICAgIH0sXG4gICAgc2V0dGVyOiBmdW5jdGlvbiAoZWxlbWVudCwgcHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuc3R5bGUuY3NzVGV4dCArPSAoMCwgX2J1aWxkMi5kZWZhdWx0KShwcm9wcyk7XG4gICAgfSxcbiAgICB2YWx1ZVR5cGVNYXA6IF92YWx1ZVR5cGVNYXAyLmRlZmF1bHQsXG4gICAgc3RhdGVNYXA6IF9zdGF0ZU1hcDIuZGVmYXVsdFxufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwyTnpjeTFoWkdGd2RHVnlMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3p0clFrRlBaU3gxUWtGQll6dEJRVU42UWl4WlFVRlJMRlZCUVVNc1QwRkJSQ3hGUVVGVkxFZEJRVllzUlVGQmEwSTdRVUZEZEVJc1pVRkJUeXhEUVVGRkxIbENRVUZsTEVkQlFXWXNRMEZCUkN4SFFVTktMRTlCUVU4c1owSkJRVkFzUTBGQmQwSXNUMEZCZUVJc1JVRkJhVU1zU1VGQmFrTXNSVUZCZFVNc2QwSkJRVk1zUjBGQlZDeERRVUYyUXl4RFFVUkhMRWRCUlVnc2RVSkJRV0VzUjBGQllpeEZRVUZyUWl4WlFVRnNRaXhEUVVFclFpeFBRVUV2UWl4SlFVRXdReXhEUVVFeFF5eERRVWhyUWp0TFFVRnNRanRCUVV0U0xGbEJRVkVzVlVGQlF5eFBRVUZFTEVWQlFWVXNTMEZCVmp0bFFVRnZRaXhSUVVGUkxFdEJRVklzUTBGQll5eFBRVUZrTEVsQlFYbENMSEZDUVVGdlFpeExRVUZ3UWl4RFFVRjZRanRMUVVGd1FqdEJRVU5TTEhkRFFWQjVRanRCUVZGNlFpeG5RMEZTZVVJN1EwRkJaQ0lzSW1acGJHVWlPaUpqYzNNdFlXUmhjSFJsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRDOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2MzUmhkR1ZOWVhBZ1puSnZiU0FuTGk5amMzTXZjM1JoZEdVdGJXRndKenRjYm1sdGNHOXlkQ0IyWVd4MVpWUjVjR1ZOWVhBZ1puSnZiU0FuTGk5amMzTXZkbUZzZFdVdGRIbHdaUzF0WVhBbk8xeHVhVzF3YjNKMElHSjFhV3hrVUhKdmNHVnlkSGxUZEhKcGJtY2dabkp2YlNBbkxpOWpjM012WW5WcGJHUW5PMXh1YVcxd2IzSjBJSEJ5WldacGVHVnlJR1p5YjIwZ0p5NHZZM056TDNCeVpXWnBlR1Z5Snp0Y2JtbHRjRzl5ZENCMGNtRnVjMlp2Y20xUWNtOXdjeUJtY205dElDY3VMMk56Y3k5MGNtRnVjMlp2Y20wdGNISnZjSE1uTzF4dWFXMXdiM0owSUdOeVpXRjBaVUZrWVhCMFpYSWdabkp2YlNBbkxpOWhaR0Z3ZEdWeUp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdZM0psWVhSbFFXUmhjSFJsY2loN1hHNGdJQ0FnWjJWMGRHVnlPaUFvWld4bGJXVnVkQ3dnYTJWNUtTQTlQaUI3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUFvSVhSeVlXNXpabTl5YlZCeWIzQnpXMnRsZVYwcElEOWNiaUFnSUNBZ0lDQWdJQ0FnSUhkcGJtUnZkeTVuWlhSRGIyMXdkWFJsWkZOMGVXeGxLR1ZzWlcxbGJuUXNJRzUxYkd3cFczQnlaV1pwZUdWeUtHdGxlU2xkSURwY2JpQWdJQ0FnSUNBZ0lDQWdJSFpoYkhWbFZIbHdaVTFoY0Z0clpYbGRMbVJsWm1GMWJIUlFjbTl3Y3k1amRYSnlaVzUwSUh4OElEQTdYRzRnSUNBZ2ZTeGNiaUFnSUNCelpYUjBaWEk2SUNobGJHVnRaVzUwTENCd2NtOXdjeWtnUFQ0Z1pXeGxiV1Z1ZEM1emRIbHNaUzVqYzNOVVpYaDBJQ3M5SUdKMWFXeGtVSEp2Y0dWeWRIbFRkSEpwYm1jb2NISnZjSE1wTEZ4dUlDQWdJSFpoYkhWbFZIbHdaVTFoY0N4Y2JpQWdJQ0J6ZEdGMFpVMWhjRnh1ZlNrN1hHNWNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9jc3MtYWRhcHRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDE0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcicpO1xuXG52YXIgX2FkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWRhcHRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9ICgwLCBfYWRhcHRlcjIuZGVmYXVsdCkoe1xuICAgIGdldHRlcjogZnVuY3Rpb24gKG9iamVjdCwga2V5KSB7XG4gICAgICAgIHJldHVybiBvYmplY3Rba2V5XTtcbiAgICB9LFxuICAgIHNldHRlcjogZnVuY3Rpb24gKG9iamVjdCwgcHJvcHMpIHtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgICAgICAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIG9iamVjdFtrZXldID0gcHJvcHNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMMjlpYW1WamRDMWhaR0Z3ZEdWeUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN096czdhMEpCUldVc2RVSkJRV003UVVGRGVrSXNXVUZCVVN4VlFVRkRMRTFCUVVRc1JVRkJVeXhIUVVGVU8yVkJRV2xDTEU5QlFVOHNSMEZCVUR0TFFVRnFRanRCUVVOU0xGbEJRVkVzVlVGQlF5eE5RVUZFTEVWQlFWTXNTMEZCVkN4RlFVRnRRanRCUVVOMlFpeGhRVUZMTEVsQlFVa3NSMEZCU2l4SlFVRlhMRXRCUVdoQ0xFVkJRWFZDTzBGQlEyNUNMR2RDUVVGSkxFMUJRVTBzWTBGQlRpeERRVUZ4UWl4SFFVRnlRaXhEUVVGS0xFVkJRU3RDTzBGQlF6TkNMSFZDUVVGUExFZEJRVkFzU1VGQll5eE5RVUZOTEVkQlFVNHNRMEZCWkN4RFFVUXlRanRoUVVFdlFqdFRRVVJLTzB0QlJFazdRMEZHUnlJc0ltWnBiR1VpT2lKdlltcGxZM1F0WVdSaGNIUmxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnWTNKbFlYUmxRV1JoY0hSbGNpQm1jbTl0SUNjdUwyRmtZWEIwWlhJbk8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQmpjbVZoZEdWQlpHRndkR1Z5S0h0Y2JpQWdJQ0JuWlhSMFpYSTZJQ2h2WW1wbFkzUXNJR3RsZVNrZ1BUNGdiMkpxWldOMFcydGxlVjBzWEc0Z0lDQWdjMlYwZEdWeU9pQW9iMkpxWldOMExDQndjbTl3Y3lrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0JtYjNJZ0tHeGxkQ0JyWlhrZ2FXNGdjSEp2Y0hNcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaHdjbTl3Y3k1b1lYTlBkMjVRY205d1pYSjBlU2hyWlhrcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdiMkpxWldOMFcydGxlVjBnUFNCd2NtOXdjMXRyWlhsZE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dWZTazdJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hZGFwdGVyL29iamVjdC1hZGFwdGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZ2V0RWxlbWVudERhdGEgPSBleHBvcnRzLnNldHRlciA9IGV4cG9ydHMuZ2V0dGVyID0gdW5kZWZpbmVkO1xuXG52YXIgX3N0YXRlTWFwID0gcmVxdWlyZSgnLi9jc3Mvc3RhdGUtbWFwJyk7XG5cbnZhciBfc3RhdGVNYXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RhdGVNYXApO1xuXG52YXIgX3ZhbHVlVHlwZU1hcCA9IHJlcXVpcmUoJy4vc3ZnL3ZhbHVlLXR5cGUtbWFwJyk7XG5cbnZhciBfdmFsdWVUeXBlTWFwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ZhbHVlVHlwZU1hcCk7XG5cbnZhciBfdHJhbnNmb3JtUHJvcHMgPSByZXF1aXJlKCcuL2Nzcy90cmFuc2Zvcm0tcHJvcHMnKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2Zvcm1Qcm9wcyk7XG5cbnZhciBfYnVpbGQgPSByZXF1aXJlKCcuL3N2Zy9idWlsZCcpO1xuXG52YXIgX2J1aWxkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2J1aWxkKTtcblxudmFyIF9hdHRyQWRhcHRlciA9IHJlcXVpcmUoJy4vYXR0ci1hZGFwdGVyJyk7XG5cbnZhciBfYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcicpO1xuXG52YXIgX2FkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWRhcHRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBnZXR0ZXIgPSBleHBvcnRzLmdldHRlciA9IGZ1bmN0aW9uIChlbGVtZW50LCBrZXkpIHtcbiAgICByZXR1cm4gIV90cmFuc2Zvcm1Qcm9wczIuZGVmYXVsdFtrZXldID8gKDAsIF9hdHRyQWRhcHRlci5nZXR0ZXIpKGVsZW1lbnQsIGtleSkgOiBfdmFsdWVUeXBlTWFwMi5kZWZhdWx0W2tleV0gJiYgX3ZhbHVlVHlwZU1hcDIuZGVmYXVsdFtrZXldLmRlZmF1bHRQcm9wcyA/IF92YWx1ZVR5cGVNYXAyLmRlZmF1bHRba2V5XS5kZWZhdWx0UHJvcHMuY3VycmVudCA6IDA7XG59O1xudmFyIHNldHRlciA9IGV4cG9ydHMuc2V0dGVyID0gZnVuY3Rpb24gKGVsZW1lbnQsIHByb3BzLCBkYXRhKSB7XG4gICAgcmV0dXJuICgwLCBfYXR0ckFkYXB0ZXIuc2V0dGVyKShlbGVtZW50LCAoMCwgX2J1aWxkMi5kZWZhdWx0KShwcm9wcywgZGF0YSkpO1xufTtcbnZhciBnZXRFbGVtZW50RGF0YSA9IGV4cG9ydHMuZ2V0RWxlbWVudERhdGEgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIHZhciBiQm94ID0gZWxlbWVudC5nZXRCQm94KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogYkJveC54LFxuICAgICAgICB5OiBiQm94LnksXG4gICAgICAgIHdpZHRoOiBiQm94LndpZHRoLFxuICAgICAgICBoZWlnaHQ6IGJCb3guaGVpZ2h0XG4gICAgfTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9ICgwLCBfYWRhcHRlcjIuZGVmYXVsdCkoeyBnZXR0ZXI6IGdldHRlciwgc2V0dGVyOiBzZXR0ZXIsIHN0YXRlTWFwOiBfc3RhdGVNYXAyLmRlZmF1bHQsIHZhbHVlVHlwZU1hcDogX3ZhbHVlVHlwZU1hcDIuZGVmYXVsdCwgZ2V0RWxlbWVudERhdGE6IGdldEVsZW1lbnREYXRhIH0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMM04yWnkxaFpHRndkR1Z5TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN08wRkJUMDhzU1VGQlRTd3dRa0ZCVXl4VlFVRkRMRTlCUVVRc1JVRkJWU3hIUVVGV08xZEJRV3RDTEVOQlFVVXNlVUpCUVdVc1IwRkJaaXhEUVVGRUxFZEJRWGRDTEhsQ1FVRlhMRTlCUVZnc1JVRkJiMElzUjBGQmNFSXNRMEZCZWtJc1IwRkJiMFFzYzBKQlFVTXNRMEZCWVN4SFFVRmlMRXRCUVhGQ0xIVkNRVUZoTEVkQlFXSXNSVUZCYTBJc1dVRkJiRUlzUjBGQmEwTXNkVUpCUVdFc1IwRkJZaXhGUVVGclFpeFpRVUZzUWl4RFFVRXJRaXhQUVVFdlFpeEhRVUY1UXl4RFFVRnFSenREUVVGMFJUdEJRVU5tTEVsQlFVMHNNRUpCUVZNc1ZVRkJReXhQUVVGRUxFVkJRVlVzUzBGQlZpeEZRVUZwUWl4SlFVRnFRanRYUVVFd1FpeDVRa0ZCVnl4UFFVRllMRVZCUVc5Q0xIRkNRVUZOTEV0QlFVNHNSVUZCWVN4SlFVRmlMRU5CUVhCQ08wTkJRVEZDTzBGQlEyWXNTVUZCVFN3d1EwRkJhVUlzVlVGQlF5eFBRVUZFTEVWQlFXRTdRVUZEZGtNc1VVRkJUU3hQUVVGUExGRkJRVkVzVDBGQlVpeEZRVUZRTEVOQlJHbERPMEZCUlhaRExGZEJRVTg3UVVGRFNDeFhRVUZITEV0QlFVc3NRMEZCVER0QlFVTklMRmRCUVVjc1MwRkJTeXhEUVVGTU8wRkJRMGdzWlVGQlR5eExRVUZMTEV0QlFVdzdRVUZEVUN4blFrRkJVU3hMUVVGTExFMUJRVXc3UzBGS1dpeERRVVoxUXp0RFFVRmlPenRyUWtGVlppeDFRa0ZCWXl4RlFVRkZMR05CUVVZc1JVRkJWU3hqUVVGV0xFVkJRV3RDTERSQ1FVRnNRaXhGUVVFMFFpeHZRMEZCTlVJc1JVRkJNRU1zT0VKQlFURkRMRVZCUVdRaUxDSm1hV3hsSWpvaWMzWm5MV0ZrWVhCMFpYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFF2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSE4wWVhSbFRXRndJR1p5YjIwZ0p5NHZZM056TDNOMFlYUmxMVzFoY0NjN1hHNXBiWEJ2Y25RZ2RtRnNkV1ZVZVhCbFRXRndJR1p5YjIwZ0p5NHZjM1puTDNaaGJIVmxMWFI1Y0dVdGJXRndKenRjYm1sdGNHOXlkQ0IwY21GdWMyWnZjbTFRY205d2N5Qm1jbTl0SUNjdUwyTnpjeTkwY21GdWMyWnZjbTB0Y0hKdmNITW5PMXh1YVcxd2IzSjBJR0oxYVd4a0lHWnliMjBnSnk0dmMzWm5MMkoxYVd4a0p6dGNibWx0Y0c5eWRDQjdJR2RsZEhSbGNpQmhjeUJoZEhSeVIyVjBkR1Z5TENCelpYUjBaWElnWVhNZ1lYUjBjbE5sZEhSbGNpQjlJR1p5YjIwZ0p5NHZZWFIwY2kxaFpHRndkR1Z5Snp0Y2JtbHRjRzl5ZENCamNtVmhkR1ZCWkdGd2RHVnlJR1p5YjIwZ0p5NHZZV1JoY0hSbGNpYzdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQm5aWFIwWlhJZ1BTQW9aV3hsYldWdWRDd2dhMlY1S1NBOVBpQW9JWFJ5WVc1elptOXliVkJ5YjNCelcydGxlVjBwSUQ4Z1lYUjBja2RsZEhSbGNpaGxiR1Z0Wlc1MExDQnJaWGtwSURvZ0tIWmhiSFZsVkhsd1pVMWhjRnRyWlhsZElDWW1JSFpoYkhWbFZIbHdaVTFoY0Z0clpYbGRMbVJsWm1GMWJIUlFjbTl3Y3lrZ1B5QjJZV3gxWlZSNWNHVk5ZWEJiYTJWNVhTNWtaV1poZFd4MFVISnZjSE11WTNWeWNtVnVkQ0E2SURBN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnYzJWMGRHVnlJRDBnS0dWc1pXMWxiblFzSUhCeWIzQnpMQ0JrWVhSaEtTQTlQaUJoZEhSeVUyVjBkR1Z5S0dWc1pXMWxiblFzSUdKMWFXeGtLSEJ5YjNCekxDQmtZWFJoS1NrN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnWjJWMFJXeGxiV1Z1ZEVSaGRHRWdQU0FvWld4bGJXVnVkQ2tnUFQ0Z2UxeHVJQ0FnSUdOdmJuTjBJR0pDYjNnZ1BTQmxiR1Z0Wlc1MExtZGxkRUpDYjNnb0tUdGNiaUFnSUNCeVpYUjFjbTRnZTF4dUlDQWdJQ0FnSUNCNE9pQmlRbTk0TG5nc1hHNGdJQ0FnSUNBZ0lIazZJR0pDYjNndWVTeGNiaUFnSUNBZ0lDQWdkMmxrZEdnNklHSkNiM2d1ZDJsa2RHZ3NJRnh1SUNBZ0lDQWdJQ0JvWldsbmFIUTZJR0pDYjNndWFHVnBaMmgwWEc0Z0lDQWdmVHRjYm4wN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHTnlaV0YwWlVGa1lYQjBaWElvZXlCblpYUjBaWElzSUhObGRIUmxjaXdnYzNSaGRHVk5ZWEFzSUhaaGJIVmxWSGx3WlUxaGNDd2daMlYwUld4bGJXVnVkRVJoZEdFZ2ZTazdYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9zdmctYWRhcHRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDE2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfYnVpbGQgPSByZXF1aXJlKCcuL3N2Zy1wYXRoL2J1aWxkJyk7XG5cbnZhciBfYnVpbGQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYnVpbGQpO1xuXG52YXIgX3N0YXRlTWFwID0gcmVxdWlyZSgnLi9jc3Mvc3RhdGUtbWFwJyk7XG5cbnZhciBfc3RhdGVNYXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RhdGVNYXApO1xuXG52YXIgX3N2Z0FkYXB0ZXIgPSByZXF1aXJlKCcuL3N2Zy1hZGFwdGVyJyk7XG5cbnZhciBfYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcicpO1xuXG52YXIgX2FkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWRhcHRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9ICgwLCBfYWRhcHRlcjIuZGVmYXVsdCkoe1xuICAgIGdldHRlcjogX3N2Z0FkYXB0ZXIuZ2V0dGVyLFxuICAgIHNldHRlcjogZnVuY3Rpb24gKGVsZW1lbnQsIHByb3BzLCBvcHRzKSB7XG4gICAgICAgIHZhciBwYXRoTGVuZ3RoID0gb3B0cyA/IG9wdHMucGF0aExlbmd0aCA6IDA7XG4gICAgICAgIHJldHVybiAoMCwgX3N2Z0FkYXB0ZXIuc2V0dGVyKShlbGVtZW50LCAoMCwgX2J1aWxkMi5kZWZhdWx0KShwcm9wcywgcGF0aExlbmd0aCksIG9wdHMpO1xuICAgIH0sXG4gICAgc3RhdGVNYXA6IF9zdGF0ZU1hcDIuZGVmYXVsdCxcbiAgICBnZXRFbGVtZW50RGF0YTogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHsgcGF0aExlbmd0aDogZWxlbWVudC5nZXRUb3RhbExlbmd0aCgpIH0sICgwLCBfc3ZnQWRhcHRlci5nZXRFbGVtZW50RGF0YSkoZWxlbWVudCkpO1xuICAgIH1cbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMM04yWnkxd1lYUm9MV0ZrWVhCMFpYSXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenM3T3pzN096czdPenM3T3p0clFrRkxaU3gxUWtGQll6dEJRVU42UWl3NFFrRkVlVUk3UVVGRmVrSXNXVUZCVVN4VlFVRkRMRTlCUVVRc1JVRkJWU3hMUVVGV0xFVkJRV2xDTEVsQlFXcENMRVZCUVRCQ08wRkJRemxDTEZsQlFVMHNZVUZCWVN4UFFVRlBMRXRCUVVzc1ZVRkJUQ3hIUVVGclFpeERRVUY2UWl4RFFVUlhPMEZCUlRsQ0xHVkJRVThzZDBKQlFVOHNUMEZCVUN4RlFVRm5RaXh4UWtGQlRTeExRVUZPTEVWQlFXRXNWVUZCWWl4RFFVRm9RaXhGUVVFd1F5eEpRVUV4UXl4RFFVRlFMRU5CUmpoQ08wdEJRVEZDTzBGQlNWSXNaME5CVG5sQ08wRkJUM3BDTEc5Q1FVRm5RaXhWUVVGRExFOUJRVVE3TUVKQlFXZENMRmxCUVZrc1VVRkJVU3hqUVVGU0xFVkJRVm9zU1VGQmVVTXNaME5CUVdVc1QwRkJaanRMUVVGNlJEdERRVkJNSWl3aVptbHNaU0k2SW5OMlp5MXdZWFJvTFdGa1lYQjBaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUdKMWFXeGtJR1p5YjIwZ0p5NHZjM1puTFhCaGRHZ3ZZblZwYkdRbk8xeHVhVzF3YjNKMElITjBZWFJsVFdGd0lHWnliMjBnSnk0dlkzTnpMM04wWVhSbExXMWhjQ2M3WEc1cGJYQnZjblFnZXlCblpYUjBaWElzSUhObGRIUmxjaXdnWjJWMFJXeGxiV1Z1ZEVSaGRHRWdmU0JtY205dElDY3VMM04yWnkxaFpHRndkR1Z5Snp0Y2JtbHRjRzl5ZENCamNtVmhkR1ZCWkdGd2RHVnlJR1p5YjIwZ0p5NHZZV1JoY0hSbGNpYzdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR055WldGMFpVRmtZWEIwWlhJb2UxeHVJQ0FnSUdkbGRIUmxjaXhjYmlBZ0lDQnpaWFIwWlhJNklDaGxiR1Z0Wlc1MExDQndjbTl3Y3l3Z2IzQjBjeWtnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCd1lYUm9UR1Z1WjNSb0lEMGdiM0IwY3lBL0lHOXdkSE11Y0dGMGFFeGxibWQwYUNBNklEQTdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnpaWFIwWlhJb1pXeGxiV1Z1ZEN3Z1luVnBiR1FvY0hKdmNITXNJSEJoZEdoTVpXNW5kR2dwTENCdmNIUnpLVHRjYmlBZ0lDQjlMRnh1SUNBZ0lITjBZWFJsVFdGd0xGeHVJQ0FnSUdkbGRFVnNaVzFsYm5SRVlYUmhPaUFvWld4bGJXVnVkQ2tnUFQ0Z0tIc2djR0YwYUV4bGJtZDBhRG9nWld4bGJXVnVkQzVuWlhSVWIzUmhiRXhsYm1kMGFDZ3BMQ0F1TGk1blpYUkZiR1Z0Wlc1MFJHRjBZU2hsYkdWdFpXNTBLU0I5S1Z4dWZTazdYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9zdmctcGF0aC1hZGFwdGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9jcmVhdGVFYXNpbmcgPSByZXF1aXJlKCcuL2NyZWF0ZS1lYXNpbmcnKTtcblxudmFyIF9jcmVhdGVFYXNpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlRWFzaW5nKTtcblxudmFyIF9jcmVhdGVCZXppZXIgPSByZXF1aXJlKCcuL2NyZWF0ZS1iZXppZXInKTtcblxudmFyIF9jcmVhdGVCZXppZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQmV6aWVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gVmFsdWVzXG4vKlxuICAgIEVhc2luZyBmdW5jdGlvbnNcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgXG4gICAgR2VuZXJhdGVzIGFuZCBwcm92aWRlcyBlYXNpbmcgZnVuY3Rpb25zIGJhc2VkIG9uIGJhc2VGdW5jdGlvbiBkZWZpbml0aW9uc1xuICAgIFxuICAgIEEgY2FsbCB0byBlYXNpbmdGdW5jdGlvbi5nZXQoJ2Z1bmN0aW9uTmFtZScpIHJldHVybnMgYSBmdW5jdGlvbiB0aGF0IGNhbiBiZSBwYXNzZWQ6XG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MgMC0xXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBBbXAgbW9kaWZpZXIsIG9ubHkgYWNjZXB0ZWQgaW4gc29tZSBlYXNpbmcgZnVuY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQgaXMgdXNlZCB0byBhZGp1c3Qgb3ZlcmFsbCBzdHJlbmd0aFxuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBFYXNlZCBwcm9ncmVzc1xuICAgICAgICBcbiAgICBXZSBjYW4gZ2VuZXJhdGUgbmV3IGZ1bmN0aW9ucyBieSBzZW5kaW5nIGFuIGVhc2luZyBmdW5jdGlvbiB0aHJvdWdoIGVhc2luZ0Z1bmN0aW9uLmV4dGVuZChuYW1lLCBtZXRob2QpLlxuICAgIFdoaWNoIHdpbGwgbWFrZSBuYW1lSW4sIG5hbWVPdXQgYW5kIG5hbWVJbk91dCBmdW5jdGlvbnMgYXZhaWxhYmxlIHRvIHVzZS5cbiAgICAgICAgXG4gICAgRWFzaW5nIGZ1bmN0aW9ucyBmcm9tIFJvYmVydCBQZW5uZXJcbiAgICBodHRwOi8vd3d3LnJvYmVydHBlbm5lci5jb20vZWFzaW5nL1xuICAgICAgICBcbiAgICBCZXppZXIgY3VydmUgaW50ZXJwcmV0b3IgY3JlYXRlZCBmcm9tIEdhw6t0YW4gUmVuYXVkZWF1J3Mgb3JpZ2luYWwgQmV6aWVyRWFzaW5nICBcbiAgICBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNpbmcvYmxvYi9tYXN0ZXIvaW5kZXguanMgIFxuICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9MSUNFTlNFXG5cbiAgICBBbnRpY2lwYXRlIGVhc2luZyBjcmVhdGVkIGJ5IEVsbGlvdCBHaW5vXG4gICAgaHR0cHM6Ly90d2l0dGVyLmNvbS9FbGxpb3RHZW5vXG4qL1xuLy8gSW1wb3J0c1xudmFyIERFRkFVTFRfQkFDS19TVFJFTkdUSCA9IDEuNTI1O1xudmFyIERFRkFVTFRfUE9XX1NUUkVOR1RIID0gMjtcblxuLypcbiAgICBFYWNoIG9mIHRoZXNlIGJhc2UgZnVuY3Rpb25zIGlzIGFuIGVhc2VJblxuICAgIFxuICAgIE9uIGluaXQsIHdlIHVzZSAubWlycm9yIGFuZCAucmV2ZXJzZSB0byBnZW5lcmF0ZSBlYXNlSW5PdXQgYW5kXG4gICAgZWFzZU91dCBmdW5jdGlvbnMgcmVzcGVjdGl2ZWx5LlxuKi9cbnZhciBiYXNlRWFzaW5nID0ge1xuICAgIGVhc2U6IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICB2YXIgc3RyZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBERUZBVUxUX1BPV19TVFJFTkdUSCA6IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgcmV0dXJuIE1hdGgucG93KHByb2dyZXNzLCBzdHJlbmd0aCk7XG4gICAgfSxcbiAgICBjaXJjOiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgcmV0dXJuIDEgLSBNYXRoLnNpbihNYXRoLmFjb3MocHJvZ3Jlc3MpKTtcbiAgICB9LFxuICAgIGJhY2s6IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICB2YXIgc3RyZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBERUZBVUxUX0JBQ0tfU1RSRU5HVEggOiBhcmd1bWVudHNbMV07XG4gICAgICAgIHJldHVybiBwcm9ncmVzcyAqIHByb2dyZXNzICogKChzdHJlbmd0aCArIDEpICogcHJvZ3Jlc3MgLSBzdHJlbmd0aCk7XG4gICAgfVxufTtcblxuLy8gVXRpbGl0eSBmdW5jdGlvbnNcbnZhciBnZW5lcmF0ZVBvd2VyRWFzaW5nID0gZnVuY3Rpb24gKHN0cmVuZ3RoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICByZXR1cm4gYmFzZUVhc2luZy5lYXNlKHByb2dyZXNzLCBzdHJlbmd0aCk7XG4gICAgfTtcbn07XG5cblsnY3ViaWMnLCAncXVhcnQnLCAncXVpbnQnXS5mb3JFYWNoKGZ1bmN0aW9uIChlYXNpbmdOYW1lLCBpKSB7XG4gICAgcmV0dXJuIGJhc2VFYXNpbmdbZWFzaW5nTmFtZV0gPSBnZW5lcmF0ZVBvd2VyRWFzaW5nKGkgKyAzKTtcbn0pO1xuXG4vLyBHZW5lcmF0ZSBpbi9vdXQvaW5PdXQgdmFyaWF0aW9uc1xuZm9yICh2YXIga2V5IGluIGJhc2VFYXNpbmcpIHtcbiAgICBpZiAoYmFzZUVhc2luZy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHZhciBlYXNpbmdGdW5jdGlvbiA9ICgwLCBfY3JlYXRlRWFzaW5nMi5kZWZhdWx0KShiYXNlRWFzaW5nW2tleV0pO1xuICAgICAgICBiYXNlRWFzaW5nW2tleSArICdJbiddID0gZWFzaW5nRnVuY3Rpb24uaW47XG4gICAgICAgIGJhc2VFYXNpbmdba2V5ICsgJ091dCddID0gZWFzaW5nRnVuY3Rpb24ub3V0O1xuICAgICAgICBiYXNlRWFzaW5nW2tleSArICdJbk91dCddID0gZWFzaW5nRnVuY3Rpb24uaW5PdXQ7XG4gICAgfVxufVxuXG5iYXNlRWFzaW5nLmxpbmVhciA9IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgIHJldHVybiBwcm9ncmVzcztcbn07XG5iYXNlRWFzaW5nLmFudGljaXBhdGUgPSBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICB2YXIgc3RyZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBERUZBVUxUX0JBQ0tfU1RSRU5HVEggOiBhcmd1bWVudHNbMV07XG4gICAgcmV0dXJuIChwcm9ncmVzcyAqPSAyKSA8IDEgPyAwLjUgKiBiYXNlRWFzaW5nLmJhY2tJbihwcm9ncmVzcywgc3RyZW5ndGgpIDogMC41ICogKDIgLSBNYXRoLnBvdygyLCAtMTAgKiAocHJvZ3Jlc3MgLSAxKSkpO1xufTtcblxuYmFzZUVhc2luZy5jcmVhdGVWYXJpYXRpb25zID0gX2NyZWF0ZUVhc2luZzIuZGVmYXVsdDtcbmJhc2VFYXNpbmcuY3ViaWNCZXppZXIgPSBfY3JlYXRlQmV6aWVyMi5kZWZhdWx0O1xuYmFzZUVhc2luZy5tb2RpZnkgPSBmdW5jdGlvbiAoZWFzaW5nKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgcmV0dXJuIGVhc2luZy5hcHBseSh1bmRlZmluZWQsIFtwcm9ncmVzc10uY29uY2F0KGFyZ3MpKTtcbiAgICB9O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gYmFzZUVhc2luZztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDJWaGMybHVaeTl3Y21WelpYUXRaV0Z6YVc1bkxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3TzBGQk9FSkJMRWxCUVUwc2QwSkJRWGRDTEV0QlFYaENPMEZCUTA0c1NVRkJUU3gxUWtGQmRVSXNRMEZCZGtJN096czdPenM3TzBGQlVVNHNTVUZCVFN4aFFVRmhPMEZCUTJZc1ZVRkJUU3hWUVVGRExGRkJRVVE3V1VGQlZ5eHBSVUZCVnp0M1FrRkJlVUlzVlVGQldUdExRVUV6UkR0QlFVTk9MRlZCUVUwN1pVRkJXU3hKUVVGSkxFdEJRVXNzUjBGQlRDeERRVUZUTEV0QlFVc3NTVUZCVEN4RFFVRlZMRkZCUVZZc1EwRkJWQ3hEUVVGS08wdEJRVm83UVVGRFRpeFZRVUZOTEZWQlFVTXNVVUZCUkR0WlFVRlhMR2xGUVVGWE8yVkJRVEJDTEZGQlFVTXNSMEZCVnl4UlFVRllMRWxCUVhkQ0xFTkJRVU1zVjBGQlZ5eERRVUZZTEVOQlFVUXNSMEZCYVVJc1VVRkJha0lzUjBGQk5FSXNVVUZCTlVJc1EwRkJla0k3UzBGQmFFUTdRMEZJU2pzN08wRkJUMDRzU1VGQlRTeHpRa0ZCYzBJc1ZVRkJReXhSUVVGRU8xZEJRV01zVlVGQlF5eFJRVUZFTzJWQlFXTXNWMEZCVnl4SlFVRllMRU5CUVdkQ0xGRkJRV2hDTEVWQlFUQkNMRkZCUVRGQ08wdEJRV1E3UTBGQlpEczdRVUZGTlVJc1EwRkJReXhQUVVGRUxFVkJRVlVzVDBGQlZpeEZRVUZ0UWl4UFFVRnVRaXhGUVVFMFFpeFBRVUUxUWl4RFFVRnZReXhWUVVGRExGVkJRVVFzUlVGQllTeERRVUZpTzFkQlFXMUNMRmRCUVZjc1ZVRkJXQ3hKUVVGNVFpeHZRa0ZCYjBJc1NVRkJTU3hEUVVGS0xFTkJRVGRETzBOQlFXNUNMRU5CUVhCRE96czdRVUZIUVN4TFFVRkxMRWxCUVVrc1IwRkJTaXhKUVVGWExGVkJRV2hDTEVWQlFUUkNPMEZCUTNoQ0xGRkJRVWtzVjBGQlZ5eGpRVUZZTEVOQlFUQkNMRWRCUVRGQ0xFTkJRVW9zUlVGQmIwTTdRVUZEYUVNc1dVRkJUU3hwUWtGQmFVSXNORUpCUVhGQ0xGZEJRVmNzUjBGQldDeERRVUZ5UWl4RFFVRnFRaXhEUVVRd1FqdEJRVVZvUXl4dFFrRkJZeXhWUVVGa0xFbEJRWGxDTEdWQlFXVXNSVUZCWml4RFFVWlBPMEZCUjJoRExHMUNRVUZqTEZkQlFXUXNTVUZCTUVJc1pVRkJaU3hIUVVGbUxFTkJTRTA3UVVGSmFFTXNiVUpCUVdNc1lVRkJaQ3hKUVVFMFFpeGxRVUZsTEV0QlFXWXNRMEZLU1R0TFFVRndRenREUVVSS096dEJRVk5CTEZkQlFWY3NUVUZCV0N4SFFVRnZRanRYUVVGWk8wTkJRVm83UVVGRGNFSXNWMEZCVnl4VlFVRllMRWRCUVhkQ0xGVkJRVU1zVVVGQlJEdFJRVUZYTEdsRlFVRlhPMWRCUXpGRExFTkJRVVVzV1VGQlZTeERRVUZXTEVOQlFVUXNSMEZCWjBJc1EwRkJhRUlzUjBGQmNVSXNUVUZCVFN4WFFVRlhMRTFCUVZnc1EwRkJhMElzVVVGQmJFSXNSVUZCTkVJc1VVRkJOVUlzUTBGQlRpeEhRVUVyUXl4UFFVRlBMRWxCUVVrc1MwRkJTeXhIUVVGTUxFTkJRVk1zUTBGQlZDeEZRVUZaTEVOQlFVTXNSVUZCUkN4SlFVRlBMRmRCUVZjc1EwRkJXQ3hEUVVGUUxFTkJRV2hDTEVOQlFWQTdRMEZFYWtRN08wRkJSM2hDTEZkQlFWY3NaMEpCUVZnN1FVRkRRU3hYUVVGWExGZEJRVmc3UVVGRFFTeFhRVUZYTEUxQlFWZ3NSMEZCYjBJc1ZVRkJReXhOUVVGRU8zTkRRVUZaT3pzN08xZEJRVk1zVlVGQlF5eFJRVUZFTzJWQlFXTXNlVUpCUVU4c2FVSkJRV0VzUzBGQmNFSTdTMEZCWkR0RFFVRnlRanM3YTBKQlJVd2lMQ0ptYVd4bElqb2ljSEpsYzJWMExXVmhjMmx1Wnk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRDOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SXZLbHh1SUNBZ0lFVmhjMmx1WnlCbWRXNWpkR2x2Ym5OY2JpQWdJQ0F0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdFhHNGdJQ0FnWEc0Z0lDQWdSMlZ1WlhKaGRHVnpJR0Z1WkNCd2NtOTJhV1JsY3lCbFlYTnBibWNnWm5WdVkzUnBiMjV6SUdKaGMyVmtJRzl1SUdKaGMyVkdkVzVqZEdsdmJpQmtaV1pwYm1sMGFXOXVjMXh1SUNBZ0lGeHVJQ0FnSUVFZ1kyRnNiQ0IwYnlCbFlYTnBibWRHZFc1amRHbHZiaTVuWlhRb0oyWjFibU4wYVc5dVRtRnRaU2NwSUhKbGRIVnlibk1nWVNCbWRXNWpkR2x2YmlCMGFHRjBJR05oYmlCaVpTQndZWE56WldRNlhHNGdJQ0FnSUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1VISnZaM0psYzNNZ01DMHhYRzRnSUNBZ0lDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhTQW9iM0IwYVc5dVlXd3BPaUJCYlhBZ2JXOWthV1pwWlhJc0lHOXViSGtnWVdOalpYQjBaV1FnYVc0Z2MyOXRaU0JsWVhOcGJtY2dablZ1WTNScGIyNXpYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JoYm1RZ2FYTWdkWE5sWkNCMGJ5QmhaR3AxYzNRZ2IzWmxjbUZzYkNCemRISmxibWQwYUZ4dUlDQWdJQ0FnSUNCQWNtVjBkWEp1SUZ0dWRXMWlaWEpkT2lCRllYTmxaQ0J3Y205bmNtVnpjMXh1SUNBZ0lDQWdJQ0JjYmlBZ0lDQlhaU0JqWVc0Z1oyVnVaWEpoZEdVZ2JtVjNJR1oxYm1OMGFXOXVjeUJpZVNCelpXNWthVzVuSUdGdUlHVmhjMmx1WnlCbWRXNWpkR2x2YmlCMGFISnZkV2RvSUdWaGMybHVaMFoxYm1OMGFXOXVMbVY0ZEdWdVpDaHVZVzFsTENCdFpYUm9iMlFwTGx4dUlDQWdJRmRvYVdOb0lIZHBiR3dnYldGclpTQnVZVzFsU1c0c0lHNWhiV1ZQZFhRZ1lXNWtJRzVoYldWSmJrOTFkQ0JtZFc1amRHbHZibk1nWVhaaGFXeGhZbXhsSUhSdklIVnpaUzVjYmlBZ0lDQWdJQ0FnWEc0Z0lDQWdSV0Z6YVc1bklHWjFibU4wYVc5dWN5Qm1jbTl0SUZKdlltVnlkQ0JRWlc1dVpYSmNiaUFnSUNCb2RIUndPaTh2ZDNkM0xuSnZZbVZ5ZEhCbGJtNWxjaTVqYjIwdlpXRnphVzVuTDF4dUlDQWdJQ0FnSUNCY2JpQWdJQ0JDWlhwcFpYSWdZM1Z5ZG1VZ2FXNTBaWEp3Y21WMGIzSWdZM0psWVhSbFpDQm1jbTl0SUVkaHc2dDBZVzRnVW1WdVlYVmtaV0YxSjNNZ2IzSnBaMmx1WVd3Z1FtVjZhV1Z5UldGemFXNW5JQ0JjYmlBZ0lDQm9kSFJ3Y3pvdkwyZHBkR2gxWWk1amIyMHZaM0psTDJKbGVtbGxjaTFsWVhOcGJtY3ZZbXh2WWk5dFlYTjBaWEl2YVc1a1pYZ3Vhbk1nSUZ4dUlDQWdJR2gwZEhCek9pOHZaMmwwYUhWaUxtTnZiUzluY21VdlltVjZhV1Z5TFdWaGMybHVaeTlpYkc5aUwyMWhjM1JsY2k5TVNVTkZUbE5GWEc1Y2JpQWdJQ0JCYm5ScFkybHdZWFJsSUdWaGMybHVaeUJqY21WaGRHVmtJR0o1SUVWc2JHbHZkQ0JIYVc1dlhHNGdJQ0FnYUhSMGNITTZMeTkwZDJsMGRHVnlMbU52YlM5RmJHeHBiM1JIWlc1dlhHNHFMMXh1THk4Z1NXMXdiM0owYzF4dWFXMXdiM0owSUdOeVpXRjBaVVZoYzJsdVowWjFibU4wYVc5dUlHWnliMjBnSnk0dlkzSmxZWFJsTFdWaGMybHVaeWM3WEc1cGJYQnZjblFnWTNWaWFXTkNaWHBwWlhJZ1puSnZiU0FuTGk5amNtVmhkR1V0WW1WNmFXVnlKenRjYmx4dUx5OGdWbUZzZFdWelhHNWpiMjV6ZENCRVJVWkJWVXhVWDBKQlEwdGZVMVJTUlU1SFZFZ2dQU0F4TGpVeU5UdGNibU52Ym5OMElFUkZSa0ZWVEZSZlVFOVhYMU5VVWtWT1IxUklJRDBnTWp0Y2JseHVMeXBjYmlBZ0lDQkZZV05vSUc5bUlIUm9aWE5sSUdKaGMyVWdablZ1WTNScGIyNXpJR2x6SUdGdUlHVmhjMlZKYmx4dUlDQWdJRnh1SUNBZ0lFOXVJR2x1YVhRc0lIZGxJSFZ6WlNBdWJXbHljbTl5SUdGdVpDQXVjbVYyWlhKelpTQjBieUJuWlc1bGNtRjBaU0JsWVhObFNXNVBkWFFnWVc1a1hHNGdJQ0FnWldGelpVOTFkQ0JtZFc1amRHbHZibk1nY21WemNHVmpkR2wyWld4NUxseHVLaTljYm1OdmJuTjBJR0poYzJWRllYTnBibWNnUFNCN1hHNGdJQ0FnWldGelpUb2dLSEJ5YjJkeVpYTnpMQ0J6ZEhKbGJtZDBhQ0E5SUVSRlJrRlZURlJmVUU5WFgxTlVVa1ZPUjFSSUtTQTlQaUJ3Y205bmNtVnpjeUFxS2lCemRISmxibWQwYUN4Y2JpQWdJQ0JqYVhKak9pQndjbTluY21WemN5QTlQaUF4SUMwZ1RXRjBhQzV6YVc0b1RXRjBhQzVoWTI5ektIQnliMmR5WlhOektTa3NYRzRnSUNBZ1ltRmphem9nS0hCeWIyZHlaWE56TENCemRISmxibWQwYUNBOUlFUkZSa0ZWVEZSZlFrRkRTMTlUVkZKRlRrZFVTQ2tnUFQ0Z0tIQnliMmR5WlhOeklDb2djSEp2WjNKbGMzTXBJQ29nS0NoemRISmxibWQwYUNBcklERXBJQ29nY0hKdlozSmxjM01nTFNCemRISmxibWQwYUNsY2JuMDdYRzVjYmk4dklGVjBhV3hwZEhrZ1puVnVZM1JwYjI1elhHNWpiMjV6ZENCblpXNWxjbUYwWlZCdmQyVnlSV0Z6YVc1bklEMGdLSE4wY21WdVozUm9LU0E5UGlBb2NISnZaM0psYzNNcElEMCtJR0poYzJWRllYTnBibWN1WldGelpTaHdjbTluY21WemN5d2djM1J5Wlc1bmRHZ3BPMXh1WEc1YkoyTjFZbWxqSnl3Z0ozRjFZWEowSnl3Z0ozRjFhVzUwSjEwdVptOXlSV0ZqYUNnb1pXRnphVzVuVG1GdFpTd2dhU2tnUFQ0Z1ltRnpaVVZoYzJsdVoxdGxZWE5wYm1kT1lXMWxYU0E5SUdkbGJtVnlZWFJsVUc5M1pYSkZZWE5wYm1jb2FTQXJJRE1wS1R0Y2JseHVMeThnUjJWdVpYSmhkR1VnYVc0dmIzVjBMMmx1VDNWMElIWmhjbWxoZEdsdmJuTmNibVp2Y2lBb2JHVjBJR3RsZVNCcGJpQmlZWE5sUldGemFXNW5LU0I3WEc0Z0lDQWdhV1lnS0dKaGMyVkZZWE5wYm1jdWFHRnpUM2R1VUhKdmNHVnlkSGtvYTJWNUtTa2dlMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQmxZWE5wYm1kR2RXNWpkR2x2YmlBOUlHTnlaV0YwWlVWaGMybHVaMFoxYm1OMGFXOXVLR0poYzJWRllYTnBibWRiYTJWNVhTazdYRzRnSUNBZ0lDQWdJR0poYzJWRllYTnBibWRiWUNSN2EyVjVmVWx1WUYwZ1BTQmxZWE5wYm1kR2RXNWpkR2x2Ymk1cGJqdGNiaUFnSUNBZ0lDQWdZbUZ6WlVWaGMybHVaMXRnSkh0clpYbDlUM1YwWUYwZ1BTQmxZWE5wYm1kR2RXNWpkR2x2Ymk1dmRYUTdYRzRnSUNBZ0lDQWdJR0poYzJWRllYTnBibWRiWUNSN2EyVjVmVWx1VDNWMFlGMGdQU0JsWVhOcGJtZEdkVzVqZEdsdmJpNXBiazkxZER0Y2JpQWdJQ0I5WEc1OVhHNWNibUpoYzJWRllYTnBibWN1YkdsdVpXRnlJRDBnY0hKdlozSmxjM01nUFQ0Z2NISnZaM0psYzNNN1hHNWlZWE5sUldGemFXNW5MbUZ1ZEdsamFYQmhkR1VnUFNBb2NISnZaM0psYzNNc0lITjBjbVZ1WjNSb0lEMGdSRVZHUVZWTVZGOUNRVU5MWDFOVVVrVk9SMVJJS1NBOVBseHVJQ0FnSUNnb2NISnZaM0psYzNNcVBUSXBJRHdnTVNrZ1B5QXdMalVnS2lCaVlYTmxSV0Z6YVc1bkxtSmhZMnRKYmlod2NtOW5jbVZ6Y3l3Z2MzUnlaVzVuZEdncElEb2dJREF1TlNBcUlDZ3lJQzBnVFdGMGFDNXdiM2NvTWl3Z0xURXdJQ29nS0hCeWIyZHlaWE56SUMwZ01Ta3BLVHRjYmx4dVltRnpaVVZoYzJsdVp5NWpjbVZoZEdWV1lYSnBZWFJwYjI1eklEMGdZM0psWVhSbFJXRnphVzVuUm5WdVkzUnBiMjQ3WEc1aVlYTmxSV0Z6YVc1bkxtTjFZbWxqUW1WNmFXVnlJRDBnWTNWaWFXTkNaWHBwWlhJN1hHNWlZWE5sUldGemFXNW5MbTF2WkdsbWVTQTlJQ2hsWVhOcGJtY3NJQzR1TG1GeVozTXBJRDArSUNod2NtOW5jbVZ6Y3lrZ1BUNGdaV0Z6YVc1bktIQnliMmR5WlhOekxDQXVMaTVoY21kektUdGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdZbUZ6WlVWaGMybHVaenNpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9lYXNpbmcvcHJlc2V0LWVhc2luZy5qc1xuICoqIG1vZHVsZSBpZCA9IDE4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfRmxvdyA9IHJlcXVpcmUoJy4uL0Zsb3cnKTtcblxudmFyIF9GbG93MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Zsb3cpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgU0FWRV9QUk9QID0gJ19fcG1fZmxvdyc7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnRbU0FWRV9QUk9QXSkge1xuICAgICAgICByZXR1cm4gZWxlbWVudFtTQVZFX1BST1BdO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBmbG93ID0gbmV3IF9GbG93Mi5kZWZhdWx0KHsgZWxlbWVudDogZWxlbWVudCB9KTtcblxuICAgICAgICAvLyBCaW5kIGFkYXB0ZXIgdG8gZWxlbWVudFxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgU0FWRV9QUk9QLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHZhbHVlOiBmbG93XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBmbG93O1xuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwyWnNiM2N2WjJWMExXWnNiM2N1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3T3p0QlFVVkJMRWxCUVUwc1dVRkJXU3hYUVVGYU96dHJRa0ZGVXl4VlFVRkRMRTlCUVVRc1JVRkJZVHRCUVVONFFpeFJRVUZKTEZGQlFWRXNVMEZCVWl4RFFVRktMRVZCUVhkQ08wRkJRM0JDTEdWQlFVOHNVVUZCVVN4VFFVRlNMRU5CUVZBc1EwRkViMEk3UzBGQmVFSXNUVUZGVHp0QlFVTklMRmxCUVUwc1QwRkJUeXh0UWtGQlV5eEZRVUZGTEdkQ1FVRkdMRVZCUVZRc1EwRkJVRHM3TzBGQlJFZ3NZMEZKU0N4RFFVRlBMR05CUVZBc1EwRkJjMElzVDBGQmRFSXNSVUZCSzBJc1UwRkJMMElzUlVGQk1FTTdRVUZEZEVNc2QwSkJRVmtzUzBGQldqdEJRVU5CTEhOQ1FVRlZMRXRCUVZZN1FVRkRRU3h0UWtGQlR5eEpRVUZRTzFOQlNFb3NSVUZLUnpzN1FVRlZTQ3hsUVVGUExFbEJRVkFzUTBGV1J6dExRVVpRTzBOQlJGY2lMQ0ptYVd4bElqb2laMlYwTFdac2IzY3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFF2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJRVpzYjNjZ1puSnZiU0FuTGk0dlJteHZkeWM3WEc1Y2JtTnZibk4wSUZOQlZrVmZVRkpQVUNBOUlDZGZYM0J0WDJac2IzY25PMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0FvWld4bGJXVnVkQ2tnUFQ0Z2UxeHVJQ0FnSUdsbUlDaGxiR1Z0Wlc1MFcxTkJWa1ZmVUZKUFVGMHBJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR1ZzWlcxbGJuUmJVMEZXUlY5UVVrOVFYVHRjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCbWJHOTNJRDBnYm1WM0lFWnNiM2NvZXlCbGJHVnRaVzUwSUgwcE8xeHVYRzRnSUNBZ0lDQWdJQzh2SUVKcGJtUWdZV1JoY0hSbGNpQjBieUJsYkdWdFpXNTBYRzRnSUNBZ0lDQWdJRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNobGJHVnRaVzUwTENCVFFWWkZYMUJTVDFBc0lIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdWdWRXMWxjbUZpYkdVNklHWmhiSE5sTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdkM0pwZEdGaWJHVTZJR1poYkhObExGeHVJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVTZJR1pzYjNkY2JpQWdJQ0FnSUNBZ2ZTazdYRzVjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR1pzYjNjN1hHNGdJQ0FnZlZ4dWZUdGNibHh1WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvZmxvdy9nZXQtZmxvdy5qc1xuICoqIG1vZHVsZSBpZCA9IDE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnN0ZXBQcm9ncmVzcyA9IGV4cG9ydHMuc3BlZWRQZXJTZWNvbmQgPSBleHBvcnRzLnNwZWVkUGVyRnJhbWUgPSBleHBvcnRzLnNtb290aCA9IGV4cG9ydHMucmVzdHJpY3QgPSBleHBvcnRzLnJlbGF0aXZlVmFsdWUgPSBleHBvcnRzLnJhbmRvbSA9IGV4cG9ydHMucmFkaWFuc1RvRGVncmVlcyA9IGV4cG9ydHMucG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZSA9IGV4cG9ydHMub2Zmc2V0ID0gZXhwb3J0cy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSA9IGV4cG9ydHMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MgPSBleHBvcnRzLmh5cG90ZW51c2UgPSBleHBvcnRzLmVhc2UgPSBleHBvcnRzLmRpc3RhbmNlID0gZXhwb3J0cy5kaWxhdGUgPSBleHBvcnRzLmRlZ3JlZXNUb1JhZGlhbnMgPSBleHBvcnRzLmFuZ2xlID0gdW5kZWZpbmVkO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgWkVST19QT0lOVCA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDAsXG4gICAgejogMFxufTtcblxudmFyIGRpc3RhbmNlMUQgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBNYXRoLmFicyhhIC0gYik7XG59O1xuXG4vKlxuICAgIEFuZ2xlIGJldHdlZW4gcG9pbnRzXG4gICAgXG4gICAgVHJhbnNsYXRlcyB0aGUgaHlwb3RoZXRpY2FsIGxpbmUgc28gdGhhdCB0aGUgJ2Zyb20nIGNvb3JkaW5hdGVzXG4gICAgYXJlIGF0IDAsMFxuICAgIFxuICAgIEBwYXJhbSBbb2JqZWN0XTogWCBhbmQgWSBjb29yZGluYXRlcyBvZiBmcm9tIHBvaW50XG4gICAgQHBhcmFtIFtvYmplY3RdOiBYIGFuZCBZIGNvcmRpbmF0ZXMgb2YgdG8gcG9pbnRcbiAgICBAcmV0dXJuIFtyYWRpYW5dOiBBbmdsZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzIGluIHJhZGlhbnNcbiovXG52YXIgYW5nbGUgPSBleHBvcnRzLmFuZ2xlID0gZnVuY3Rpb24gKGEpIHtcbiAgICB2YXIgYiA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IFpFUk9fUE9JTlQgOiBhcmd1bWVudHNbMV07XG4gICAgcmV0dXJuIHJhZGlhbnNUb0RlZ3JlZXMoTWF0aC5hdGFuMihhLnggLSBiLngsIGEueSAtIGIueSkpO1xufTtcblxuLypcbiAgICBDb252ZXJ0IGRlZ3JlZXMgdG8gcmFkaWFuc1xuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgaW4gZGVncmVlc1xuICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGluIHJhZGlhbnNcbiovXG52YXIgZGVncmVlc1RvUmFkaWFucyA9IGV4cG9ydHMuZGVncmVlc1RvUmFkaWFucyA9IGZ1bmN0aW9uIChkZWdyZWVzKSB7XG4gICAgcmV0dXJuIGRlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xufTtcblxuLypcbiAgICBEaWxhdGVcbiAgICBcbiAgICBDaGFuZ2UgdGhlIHByb2dyZXNzaW9uIGJldHdlZW4gYSBhbmQgYiBhY2NvcmRpbmcgdG8gZGlsYXRpb24uXG4gICAgXG4gICAgU28gZGlsYXRpb24gPSAwLjUgd291bGQgY2hhbmdlXG4gICAgXG4gICAgYSAtLS0tLS0tLS0gYlxuICAgIFxuICAgIHRvXG4gICAgXG4gICAgYSAtLS0tIGJcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFByZXZpb3VzIHZhbHVlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBEaWxhdGUgcHJvZ3Jlc3MgYnkgeFxuICAgIEByZXR1cm4gW251bWJlcl06IFByZXZpb3VzIHZhbHVlIHBsdXMgdGhlIGRpbGF0ZWQgZGlmZmVyZW5jZVxuKi9cbnZhciBkaWxhdGUgPSBleHBvcnRzLmRpbGF0ZSA9IGZ1bmN0aW9uIChhLCBiLCBkaWxhdGlvbikge1xuICAgIHJldHVybiBhICsgKGIgLSBhKSAqIGRpbGF0aW9uO1xufTtcblxuLypcbiAgICBEaXN0YW5jZVxuICAgIFxuICAgIFJldHVybnMgdGhlIGRpc3RhbmNlIGJldHdlZW4gdHdvIG4gZGltZW5zaW9uYWwgcG9pbnRzLlxuICAgIFxuICAgIEBwYXJhbSBbb2JqZWN0L251bWJlcl06IHggYW5kIHkgb3IganVzdCB4IG9mIHBvaW50IEFcbiAgICBAcGFyYW0gW29iamVjdC9udW1iZXJdOiAob3B0aW9uYWwpOiB4IGFuZCB5IG9yIGp1c3QgeCBvZiBwb2ludCBCXG4gICAgQHJldHVybiBbbnVtYmVyXTogVGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIHR3byBwb2ludHNcbiovXG52YXIgZGlzdGFuY2UgPSBleHBvcnRzLmRpc3RhbmNlID0gZnVuY3Rpb24gKGEpIHtcbiAgICB2YXIgYiA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IFpFUk9fUE9JTlQgOiBhcmd1bWVudHNbMV07XG5cbiAgICAvLyAxRCBkaW1lbnNpb25zXG4gICAgaWYgKCgwLCBfdXRpbHMuaXNOdW0pKGEpKSB7XG4gICAgICAgIHJldHVybiBkaXN0YW5jZTFEKGEsIGIpO1xuXG4gICAgICAgIC8vIE11bHRpLWRpbWVuc2lvbmFsXG4gICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciB4RGVsdGEgPSBkaXN0YW5jZTFEKGEueCwgYi54KTtcbiAgICAgICAgICAgIHZhciB5RGVsdGEgPSBkaXN0YW5jZTFEKGEueSwgYi55KTtcbiAgICAgICAgICAgIHZhciB6RGVsdGEgPSAoMCwgX3V0aWxzLmlzTnVtKShhLnopID8gZGlzdGFuY2UxRChhLnosIGIueikgOiAwO1xuXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHhEZWx0YSwgMikgKyBNYXRoLnBvdyh5RGVsdGEsIDIpICsgTWF0aC5wb3coekRlbHRhLCAyKSk7XG4gICAgICAgIH1cbn07XG5cbi8qXG4gICAgRWFzZSB2YWx1ZSB3aXRoaW4gcmFuZ2VkIHBhcmFtZXRlcnNcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzIGJldHdlZW4gMCBhbmQgMVxuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgb2YgMCBwcm9ncmVzc1xuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgb2YgMSBwcm9ncmVzc1xuICAgIEBwYXJhbSBbc3RyaW5nIHx8IGZ1bmN0aW9uXTogTmFtZSBvZiBwcmVzZXQgZWFzaW5nXG4gICAgICAgIHRvIHVzZSBvciBnZW5lcmF0ZWQgZWFzaW5nIGZ1bmN0aW9uXG4gICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgb2YgZWFzZWQgcHJvZ3Jlc3MgaW4gcmFuZ2VcbiovXG52YXIgZWFzZSA9IGV4cG9ydHMuZWFzZSA9IGZ1bmN0aW9uIChwcm9ncmVzcywgZnJvbSwgdG8sIGVhc2UpIHtcbiAgICB2YXIgcHJvZ3Jlc3NMaW1pdGVkID0gcmVzdHJpY3QocHJvZ3Jlc3MsIDAsIDEpO1xuICAgIHZhciBlYXNlZFByb2dyZXNzID0gZWFzZShwcm9ncmVzc0xpbWl0ZWQpO1xuXG4gICAgcmV0dXJuIGdldFZhbHVlRnJvbVByb2dyZXNzKGVhc2VkUHJvZ3Jlc3MsIGZyb20sIHRvKTtcbn07XG5cbi8qXG4gICAgSHlwb3RlbnVzZVxuICAgIFxuICAgIFJldHVybnMgdGhlIGh5cG90ZW51c2UsIHNpZGUgQywgZ2l2ZW4gdGhlIGxlbmd0aHMgb2Ygc2lkZXMgQSBhbmQgQi5cbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IExlbmd0aCBvZiBBXG4gICAgQHBhcmFtIFtudW1iZXJdOiBMZW5ndGggb2YgQlxuICAgIEByZXR1cm4gW251bWJlcl06IExlbmd0aCBvZiBDXG4qL1xudmFyIGh5cG90ZW51c2UgPSBleHBvcnRzLmh5cG90ZW51c2UgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBNYXRoLnNxcnQoYSAqIGEgKyBiICogYik7XG59O1xuXG4vKlxuICAgIFZhbHVlIGluIHJhbmdlIGZyb20gcHJvZ3Jlc3NcbiAgICBcbiAgICBHaXZlbiBhIGxvd2VyIGxpbWl0IGFuZCBhbiB1cHBlciBsaW1pdCwgd2UgcmV0dXJuIHRoZSB2YWx1ZSB3aXRoaW5cbiAgICB0aGF0IHJhbmdlIGFzIGV4cHJlc3NlZCBieSBwcm9ncmVzcyAoYSBudW1iZXIgZnJvbSAwLTEpXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBUaGUgcHJvZ3Jlc3MgYmV0d2VlbiBsb3dlciBhbmQgdXBwZXIgbGltaXRzIGV4cHJlc3NlZCAwLTFcbiAgICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IG9mIHJhbmdlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBVcHBlciBsaW1pdCBvZiByYW5nZVxuICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGFzIGNhbGN1bGF0ZWQgZnJvbSBwcm9ncmVzcyB3aXRoaW4gcmFuZ2UgKG5vdCBsaW1pdGVkIHdpdGhpbiByYW5nZSlcbiovXG52YXIgZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MgPSBleHBvcnRzLmdldFZhbHVlRnJvbVByb2dyZXNzID0gZnVuY3Rpb24gKHByb2dyZXNzLCBmcm9tLCB0bykge1xuICAgIHJldHVybiAtcHJvZ3Jlc3MgKiBmcm9tICsgcHJvZ3Jlc3MgKiB0byArIGZyb207XG59O1xuXG4vKlxuICAgIFByb2dyZXNzIHdpdGhpbiBnaXZlbiByYW5nZVxuICAgIFxuICAgIEdpdmVuIGEgbG93ZXIgbGltaXQgYW5kIGFuIHVwcGVyIGxpbWl0LCB3ZSByZXR1cm4gdGhlIHByb2dyZXNzXG4gICAgKGV4cHJlc3NlZCBhcyBhIG51bWJlciAwLTEpIHJlcHJlc2VudGVkIGJ5IHRoZSBnaXZlbiB2YWx1ZSwgYW5kXG4gICAgbGltaXQgdGhhdCBwcm9ncmVzcyB0byB3aXRoaW4gMC0xLlxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgdG8gZmluZCBwcm9ncmVzcyB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiAgICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXRcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBQcm9ncmVzcyBvZiB2YWx1ZSB3aXRoaW4gcmFuZ2UgYXMgZXhwcmVzc2VkIDAtMVxuKi9cbnZhciBnZXRQcm9ncmVzc0Zyb21WYWx1ZSA9IGV4cG9ydHMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUsIGZyb20sIHRvKSB7XG4gICAgcmV0dXJuICh2YWx1ZSAtIGZyb20pIC8gKHRvIC0gZnJvbSk7XG59O1xuXG4vKlxuICAgIE9mZnNldCBiZXR3ZWVuIHR3byBvYmplY3RzIG9mIG51bWJlcnNcblxuICAgIElmIHByb3BlcnR5IGlzIGZvdW5kIGluIGIgbm90IHByZXNlbnQgaW4gYSwgaXQgd2lsbCByZXR1cm4gYDBgIGZvciB0aGF0IHByb3AuXG4gICAgXG4gICAgQHBhcmFtIFtQb2ludF06IEZpcnN0IG9iamVjdFxuICAgIEBwYXJhbSBbUG9pbnRdOiBTZWNvbmQgb2JqZWN0XG4gICAgQHJldHVybiBbT2Zmc2V0XTogRGlzdGFuY2UgbWV0cmljcyBiZXR3ZWVuIHR3byBwb2ludHNcbiovXG52YXIgb2Zmc2V0ID0gZXhwb3J0cy5vZmZzZXQgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgIHZhciBvZmZzZXQgPSB7fTtcblxuICAgIGZvciAodmFyIGtleSBpbiBiKSB7XG4gICAgICAgIGlmIChiLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIG9mZnNldFtrZXldID0gKDAsIF91dGlscy5oYXNQcm9wZXJ0eSkoYSwga2V5KSA/IGJba2V5XSAtIGFba2V5XSA6IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2Zmc2V0O1xufTtcblxuLypcbiAgICBQb2ludCBmcm9tIGFuZ2xlIGFuZCBkaXN0YW5jZVxuICAgIFxuICAgIEBwYXJhbSBbb2JqZWN0XTogMkQgcG9pbnQgb2Ygb3JpZ2luXG4gICAgQHBhcmFtIFtudW1iZXJdOiBBbmdsZSBmcm9tIG9yaWdpblxuICAgIEBwYXJhbSBbbnVtYmVyXTogRGlzdGFuY2UgZnJvbSBvcmlnaW5cbiAgICBAcmV0dXJuIFtvYmplY3RdOiBDYWxjdWxhdGVkIDJEIHBvaW50XG4qL1xudmFyIHBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UgPSBleHBvcnRzLnBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UgPSBmdW5jdGlvbiAob3JpZ2luLCBhbmdsZSwgZGlzdGFuY2UpIHtcbiAgICBhbmdsZSA9IGRlZ3JlZXNUb1JhZGlhbnMoYW5nbGUpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogZGlzdGFuY2UgKiBNYXRoLmNvcyhhbmdsZSkgKyBvcmlnaW4ueCxcbiAgICAgICAgeTogZGlzdGFuY2UgKiBNYXRoLnNpbihhbmdsZSkgKyBvcmlnaW4ueVxuICAgIH07XG59O1xuXG4vKlxuICAgIENvbnZlcnQgcmFkaWFucyB0byBkZWdyZWVzXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBpbiByYWRpYW5zXG4gICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgaW4gZGVncmVlc1xuKi9cbnZhciByYWRpYW5zVG9EZWdyZWVzID0gZXhwb3J0cy5yYWRpYW5zVG9EZWdyZWVzID0gZnVuY3Rpb24gKHJhZGlhbnMpIHtcbiAgICByZXR1cm4gcmFkaWFucyAqIDE4MCAvIE1hdGguUEk7XG59O1xuXG4vKlxuICAgIFJldHVybiByYW5kb20gbnVtYmVyIGJldHdlZW4gcmFuZ2VcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogT3V0cHV0IG1pbmltdW1cbiAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogT3V0cHV0IG1heGltdW1cbiAgICBAcmV0dXJuIFtudW1iZXJdOiBSYW5kb20gbnVtYmVyIHdpdGhpbiByYW5nZSwgb3IgMCBhbmQgMSBpZiBub25lIHByb3ZpZGVkXG4qL1xudmFyIHJhbmRvbSA9IGV4cG9ydHMucmFuZG9tID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBtaW4gPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyAwIDogYXJndW1lbnRzWzBdO1xuICAgIHZhciBtYXggPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyAxIDogYXJndW1lbnRzWzFdO1xuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XG59O1xuXG4vKlxuICAgIENhbGN1bGF0ZSByZWxhdGl2ZSB2YWx1ZVxuICAgIFxuICAgIFRha2VzIHRoZSBvcGVyYXRvciBhbmQgdmFsdWUgZnJvbSBhIHN0cmluZywgaWUgXCIrPTVcIiwgYW5kIGFwcGxpZXNcbiAgICB0byB0aGUgY3VycmVudCB2YWx1ZSB0byByZXNvbHZlIGEgbmV3IHRhcmdldC5cbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcbiAgICBAcGFyYW0gW3N0cmluZ106IFJlbGF0aXZlIHZhbHVlXG4gICAgQHJldHVybiBbbnVtYmVyXTogTmV3IHZhbHVlXG4qL1xudmFyIHJlbGF0aXZlVmFsdWUgPSBleHBvcnRzLnJlbGF0aXZlVmFsdWUgPSBmdW5jdGlvbiAoY3VycmVudCwgcmVsYXRpdmUpIHtcbiAgICB2YXIgbmV3VmFsdWUgPSBjdXJyZW50O1xuICAgIHZhciBlcXVhdGlvbiA9IHJlbGF0aXZlLnNwbGl0KCc9Jyk7XG4gICAgdmFyIG9wZXJhdG9yID0gZXF1YXRpb25bMF07XG5cbiAgICB2YXIgX2ZpbmRWYWx1ZUFuZFVuaXQgPSAoMCwgX3V0aWxzLmZpbmRWYWx1ZUFuZFVuaXQpKGVxdWF0aW9uWzFdKTtcblxuICAgIHZhciB1bml0ID0gX2ZpbmRWYWx1ZUFuZFVuaXQudW5pdDtcbiAgICB2YXIgdmFsdWUgPSBfZmluZFZhbHVlQW5kVW5pdC52YWx1ZTtcblxuICAgIHZhbHVlID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG5cbiAgICBzd2l0Y2ggKG9wZXJhdG9yKSB7XG4gICAgICAgIGNhc2UgJysnOlxuICAgICAgICAgICAgbmV3VmFsdWUgKz0gdmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnLSc6XG4gICAgICAgICAgICBuZXdWYWx1ZSAtPSB2YWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICcqJzpcbiAgICAgICAgICAgIG5ld1ZhbHVlICo9IHZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJy8nOlxuICAgICAgICAgICAgbmV3VmFsdWUgLz0gdmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAodW5pdCkge1xuICAgICAgICBuZXdWYWx1ZSArPSB1bml0O1xuICAgIH1cblxuICAgIHJldHVybiBuZXdWYWx1ZTtcbn07XG5cbi8qXG4gICAgUmVzdHJpY3QgdmFsdWUgdG8gcmFuZ2VcbiAgICBcbiAgICBSZXR1cm4gdmFsdWUgd2l0aGluIHRoZSByYW5nZSBvZiBsb3dlckxpbWl0IGFuZCB1cHBlckxpbWl0XG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSB0byBrZWVwIHdpdGhpbiByYW5nZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgb2YgcmFuZ2VcbiAgICBAcGFyYW0gW251bWJlcl06IFVwcGVyIGxpbWl0IG9mIHJhbmdlXG4gICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgYXMgbGltaXRlZCB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiovXG52YXIgcmVzdHJpY3QgPSBleHBvcnRzLnJlc3RyaWN0ID0gZnVuY3Rpb24gKHZhbHVlLCBtaW4sIG1heCkge1xuICAgIHJldHVybiBNYXRoLm1heChNYXRoLm1pbih2YWx1ZSwgbWF4KSwgbWluKTtcbn07XG5cbi8qXG4gICAgRnJhbWVyYXRlLWluZGVwZW5kZW50IHNtb290aGluZ1xuXG4gICAgQHBhcmFtIFtudW1iZXJdOiBOZXcgdmFsdWVcbiAgICBAcGFyYW0gW251bWJlcl06IE9sZCB2YWx1ZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb25cbiAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogU21vb3RoaW5nICgwIGlzIG5vbmUpXG4qL1xudmFyIHNtb290aCA9IGV4cG9ydHMuc21vb3RoID0gZnVuY3Rpb24gKG5ld1ZhbHVlLCBvbGRWYWx1ZSwgZHVyYXRpb24pIHtcbiAgICB2YXIgc21vb3RoaW5nID0gYXJndW1lbnRzLmxlbmd0aCA8PSAzIHx8IGFyZ3VtZW50c1szXSA9PT0gdW5kZWZpbmVkID8gMCA6IGFyZ3VtZW50c1szXTtcbiAgICByZXR1cm4gKDAsIF91dGlscy50b0RlY2ltYWwpKG9sZFZhbHVlICsgZHVyYXRpb24gKiAobmV3VmFsdWUgLSBvbGRWYWx1ZSkgLyBNYXRoLm1heChzbW9vdGhpbmcsIGR1cmF0aW9uKSk7XG59O1xuXG4vKlxuICAgIENvbnZlcnQgeCBwZXIgc2Vjb25kIHRvIHBlciBmcmFtZSB2ZWxvY2l0eSBiYXNlZCBvbiBmcHNcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFVuaXQgcGVyIHNlY29uZFxuICAgIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb24gaW4gbXNcbiovXG52YXIgc3BlZWRQZXJGcmFtZSA9IGV4cG9ydHMuc3BlZWRQZXJGcmFtZSA9IGZ1bmN0aW9uICh4cHMsIGZyYW1lRHVyYXRpb24pIHtcbiAgICByZXR1cm4gKDAsIF91dGlscy5pc051bSkoeHBzKSA/IHhwcyAvICgxMDAwIC8gZnJhbWVEdXJhdGlvbikgOiAwO1xufTtcblxuLypcbiAgICBDb252ZXJ0IHZlbG9jaXR5IGludG8gdmVsaWNpdHkgcGVyIHNlY29uZFxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVW5pdCBwZXIgZnJhbWVcbiAgICBAcGFyYW0gW251bWJlcl06IEZyYW1lIGR1cmF0aW9uIGluIG1zXG4qL1xudmFyIHNwZWVkUGVyU2Vjb25kID0gZXhwb3J0cy5zcGVlZFBlclNlY29uZCA9IGZ1bmN0aW9uICh2ZWxvY2l0eSwgZnJhbWVEdXJhdGlvbikge1xuICAgIHJldHVybiB2ZWxvY2l0eSAqICgxMDAwIC8gZnJhbWVEdXJhdGlvbik7XG59O1xuXG4vKlxuICAgIENyZWF0ZSBzdGVwcGVkIHZlcnNpb24gb2YgMC0xIHByb2dyZXNzXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gICAgQHBhcmFtIFtpbnRdOiBOdW1iZXIgb2Ygc3RlcHNcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBTdGVwcGVkIHZhbHVlXG4qL1xudmFyIHN0ZXBQcm9ncmVzcyA9IGV4cG9ydHMuc3RlcFByb2dyZXNzID0gZnVuY3Rpb24gKHByb2dyZXNzLCBzdGVwcykge1xuICAgIHZhciBzZWdtZW50ID0gMSAvIChzdGVwcyAtIDEpO1xuICAgIHZhciB0YXJnZXQgPSAxIC0gMSAvIHN0ZXBzO1xuICAgIHZhciBwcm9ncmVzc09mVGFyZ2V0ID0gTWF0aC5taW4ocHJvZ3Jlc3MgLyB0YXJnZXQsIDEpO1xuXG4gICAgcmV0dXJuIE1hdGguZmxvb3IocHJvZ3Jlc3NPZlRhcmdldCAvIHNlZ21lbnQpICogc2VnbWVudDtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12WTJGc1l5NXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN08wRkJUMEVzU1VGQlRTeGhRVUZoTzBGQlEyWXNUMEZCUnl4RFFVRklPMEZCUTBFc1QwRkJSeXhEUVVGSU8wRkJRMEVzVDBGQlJ5eERRVUZJTzBOQlNFVTdPMEZCVFU0c1NVRkJUU3hoUVVGaExGVkJRVU1zUTBGQlJDeEZRVUZKTEVOQlFVbzdWMEZCVlN4TFFVRkxMRWRCUVV3c1EwRkJVeXhKUVVGSkxFTkJRVW83UTBGQmJrSTdPenM3T3pzN096czdPenRCUVZsYUxFbEJRVTBzZDBKQlFWRXNWVUZCUXl4RFFVRkVPMUZCUVVrc01FUkJRVWs3VjBGQlpTeHBRa0ZCYVVJc1MwRkJTeXhMUVVGTUxFTkJRVmNzUlVGQlJTeERRVUZHTEVkQlFVMHNSVUZCUlN4RFFVRkdMRVZCUVVzc1JVRkJSU3hEUVVGR0xFZEJRVTBzUlVGQlJTeERRVUZHTEVOQlFUZERPME5CUVhaQ096czdPenM3T3p0QlFWRmtMRWxCUVUwc09FTkJRVzFDTEZWQlFVTXNUMEZCUkR0WFFVRmhMRlZCUVZVc1MwRkJTeXhGUVVGTUxFZEJRVlVzUjBGQmNFSTdRMEZCWWpzN096czdPenM3T3pzN096czdPenM3T3pzN1FVRnZRbnBDTEVsQlFVMHNNRUpCUVZNc1ZVRkJReXhEUVVGRUxFVkJRVWtzUTBGQlNpeEZRVUZQTEZGQlFWQTdWMEZCYjBJc1NVRkJTeXhEUVVGRExFbEJRVWtzUTBGQlNpeERRVUZFTEVkQlFWVXNVVUZCVmp0RFFVRjZRanM3T3pzN096czdPenM3UVVGWFppeEpRVUZOTERoQ1FVRlhMRlZCUVVNc1EwRkJSQ3hGUVVGMVFqdFJRVUZ1UWl3d1JFRkJTU3d3UWtGQlpUczdPMEZCUlRORExGRkJRVWtzYTBKQlFVMHNRMEZCVGl4RFFVRktMRVZCUVdNN1FVRkRWaXhsUVVGUExGZEJRVmNzUTBGQldDeEZRVUZqTEVOQlFXUXNRMEZCVURzN08wRkJSRlVzUzBGQlpDeE5RVWxQTzBGQlEwZ3NaMEpCUVUwc1UwRkJVeXhYUVVGWExFVkJRVVVzUTBGQlJpeEZRVUZMTEVWQlFVVXNRMEZCUml4RFFVRjZRaXhEUVVSSU8wRkJSVWdzWjBKQlFVMHNVMEZCVXl4WFFVRlhMRVZCUVVVc1EwRkJSaXhGUVVGTExFVkJRVVVzUTBGQlJpeERRVUY2UWl4RFFVWklPMEZCUjBnc1owSkJRVTBzVTBGQlV5eHBRa0ZCUXl4RFFVRk5MRVZCUVVVc1EwRkJSaXhEUVVGUUxFZEJRV1VzVjBGQlZ5eEZRVUZGTEVOQlFVWXNSVUZCU3l4RlFVRkZMRU5CUVVZc1EwRkJMMElzUjBGQmMwTXNRMEZCZEVNc1EwRklXanM3UVVGTFNDeHRRa0ZCVHl4TFFVRkxMRWxCUVV3c1EwRkJWU3hUUVVGRExGRkJRVlVzUlVGQldDeFpRVUZwUWl4UlFVRlZMRVZCUVROQ0xGbEJRV2xETEZGQlFWVXNSVUZCTTBNc1EwRkJha0lzUTBGTVJ6dFRRVXBRTzBOQlJtOUNPenM3T3pzN096czdPenM3UVVGNVFtcENMRWxCUVUwc2MwSkJRVThzVlVGQlF5eFJRVUZFTEVWQlFWY3NTVUZCV0N4RlFVRnBRaXhGUVVGcVFpeEZRVUZ4UWl4SlFVRnlRaXhGUVVFNFFqdEJRVU01UXl4UlFVRk5MR3RDUVVGclFpeFRRVUZUTEZGQlFWUXNSVUZCYlVJc1EwRkJia0lzUlVGQmMwSXNRMEZCZEVJc1EwRkJiRUlzUTBGRWQwTTdRVUZGT1VNc1VVRkJUU3huUWtGQlowSXNTMEZCU3l4bFFVRk1MRU5CUVdoQ0xFTkJSbmRET3p0QlFVazVReXhYUVVGUExIRkNRVUZ4UWl4aFFVRnlRaXhGUVVGdlF5eEpRVUZ3UXl4RlFVRXdReXhGUVVFeFF5eERRVUZRTEVOQlNqaERPME5CUVRsQ096czdPenM3T3pzN096dEJRV2RDWWl4SlFVRk5MR3REUVVGaExGVkJRVU1zUTBGQlJDeEZRVUZKTEVOQlFVbzdWMEZCVlN4TFFVRkxMRWxCUVV3c1EwRkJWU3hEUVVGRExFZEJRVWtzUTBGQlNpeEhRVUZWTEVsQlFVa3NRMEZCU2p0RFFVRXZRanM3T3pzN096czdPenM3T3p0QlFXRnVRaXhKUVVGTkxITkVRVUYxUWl4VlFVRkRMRkZCUVVRc1JVRkJWeXhKUVVGWUxFVkJRV2xDTEVWQlFXcENPMWRCUVhkQ0xFTkJRVWNzVVVGQlJpeEhRVUZoTEVsQlFXSXNSMEZCYzBJc1YwRkJWeXhGUVVGWUxFZEJRV2xDTEVsQlFYaERPME5CUVhoQ096czdPenM3T3pzN096czdPenRCUVdNM1FpeEpRVUZOTEhORVFVRjFRaXhWUVVGRExFdEJRVVFzUlVGQlVTeEpRVUZTTEVWQlFXTXNSVUZCWkR0WFFVRnhRaXhEUVVGRExGRkJRVkVzU1VGQlVpeERRVUZFTEVsQlFXdENMRXRCUVVzc1NVRkJUQ3hEUVVGc1FqdERRVUZ5UWpzN096czdPenM3T3pzN1FVRlhOMElzU1VGQlRTd3dRa0ZCVXl4VlFVRkRMRU5CUVVRc1JVRkJTU3hEUVVGS0xFVkJRVlU3UVVGRE5VSXNVVUZCVFN4VFFVRlRMRVZCUVZRc1EwRkVjMEk3TzBGQlJ6VkNMRk5CUVVzc1NVRkJTU3hIUVVGS0xFbEJRVmNzUTBGQmFFSXNSVUZCYlVJN1FVRkRaaXhaUVVGSkxFVkJRVVVzWTBGQlJpeERRVUZwUWl4SFFVRnFRaXhEUVVGS0xFVkJRVEpDTzBGQlEzWkNMRzFDUVVGUExFZEJRVkFzU1VGQll5eDNRa0ZCV1N4RFFVRmFMRVZCUVdVc1IwRkJaaXhKUVVGelFpeEZRVUZGTEVkQlFVWXNTVUZCVXl4RlFVRkZMRWRCUVVZc1EwRkJWQ3hIUVVGclFpeERRVUY0UXl4RFFVUlRPMU5CUVROQ08wdEJSRW83TzBGQlRVRXNWMEZCVHl4TlFVRlFMRU5CVkRSQ08wTkJRVlk3T3pzN096czdPenM3UVVGdlFtWXNTVUZCVFN4blJVRkJORUlzVlVGQlF5eE5RVUZFTEVWQlFWTXNTMEZCVkN4RlFVRm5RaXhSUVVGb1FpeEZRVUUyUWp0QlFVTnNSU3haUVVGUkxHbENRVUZwUWl4TFFVRnFRaXhEUVVGU0xFTkJSR3RGT3p0QlFVZHNSU3hYUVVGUE8wRkJRMGdzVjBGQlJ5eFhRVUZYTEV0QlFVc3NSMEZCVEN4RFFVRlRMRXRCUVZRc1EwRkJXQ3hIUVVFMlFpeFBRVUZQTEVOQlFWQTdRVUZEYUVNc1YwRkJSeXhYUVVGWExFdEJRVXNzUjBGQlRDeERRVUZUTEV0QlFWUXNRMEZCV0N4SFFVRTJRaXhQUVVGUExFTkJRVkE3UzBGR2NFTXNRMEZJYTBVN1EwRkJOMEk3T3pzN096czdPMEZCWld4RExFbEJRVTBzT0VOQlFXMUNMRlZCUVVNc1QwRkJSRHRYUVVGaExGVkJRVlVzUjBGQlZpeEhRVUZuUWl4TFFVRkxMRVZCUVV3N1EwRkJOMEk3T3pzN096czdPenRCUVZONlFpeEpRVUZOTERCQ1FVRlRPMUZCUVVNc05FUkJRVTA3VVVGQlJ5dzBSRUZCVFR0WFFVRk5MRXRCUVVzc1RVRkJUQ3hOUVVGcFFpeE5RVUZOTEVkQlFVNHNRMEZCYWtJc1IwRkJPRUlzUjBGQk9VSTdRMEZCZEVJN096czdPenM3T3pzN096dEJRVmxtTEVsQlFVMHNkME5CUVdkQ0xGVkJRVU1zVDBGQlJDeEZRVUZWTEZGQlFWWXNSVUZCZFVJN1FVRkRhRVFzVVVGQlNTeFhRVUZYTEU5QlFWZ3NRMEZFTkVNN1FVRkZhRVFzVVVGQlRTeFhRVUZYTEZOQlFWTXNTMEZCVkN4RFFVRmxMRWRCUVdZc1EwRkJXQ3hEUVVZd1F6dEJRVWRvUkN4UlFVRk5MRmRCUVZjc1UwRkJVeXhEUVVGVUxFTkJRVmdzUTBGSU1FTTdPelJDUVVreFFpdzJRa0ZCYVVJc1UwRkJVeXhEUVVGVUxFTkJRV3BDTEVWQlNqQkNPenRSUVVreFF5dzRRa0ZLTUVNN1VVRkpjRU1zWjBOQlNtOURPenRCUVUxb1JDeFpRVUZSTEZkQlFWY3NTMEZCV0N4RFFVRlNMRU5CVG1kRU96dEJRVkZvUkN4WlFVRlJMRkZCUVZJN1FVRkRRU3hoUVVGTExFZEJRVXc3UVVGRFNTeDNRa0ZCV1N4TFFVRmFMRU5CUkVvN1FVRkZTU3hyUWtGR1NqdEJRVVJCTEdGQlNVc3NSMEZCVER0QlFVTkpMSGRDUVVGWkxFdEJRVm9zUTBGRVNqdEJRVVZKTEd0Q1FVWktPMEZCU2tFc1lVRlBTeXhIUVVGTU8wRkJRMGtzZDBKQlFWa3NTMEZCV2l4RFFVUktPMEZCUlVrc2EwSkJSa283UVVGUVFTeGhRVlZMTEVkQlFVdzdRVUZEU1N4M1FrRkJXU3hMUVVGYUxFTkJSRW83UVVGRlNTeHJRa0ZHU2p0QlFWWkJMRXRCVW1kRU96dEJRWFZDYUVRc1VVRkJTU3hKUVVGS0xFVkJRVlU3UVVGRFRpeHZRa0ZCV1N4SlFVRmFMRU5CUkUwN1MwRkJWanM3UVVGSlFTeFhRVUZQTEZGQlFWQXNRMEV6UW1kRU8wTkJRWFpDT3pzN096czdPenM3T3pzN1FVRjNRM1JDTEVsQlFVMHNPRUpCUVZjc1ZVRkJReXhMUVVGRUxFVkJRVkVzUjBGQlVpeEZRVUZoTEVkQlFXSTdWMEZCY1VJc1MwRkJTeXhIUVVGTUxFTkJRVk1zUzBGQlN5eEhRVUZNTEVOQlFWTXNTMEZCVkN4RlFVRm5RaXhIUVVGb1FpeERRVUZVTEVWQlFTdENMRWRCUVM5Q08wTkJRWEpDT3pzN096czdPenM3TzBGQlZXcENMRWxCUVUwc01FSkJRVk1zVlVGQlF5eFJRVUZFTEVWQlFWY3NVVUZCV0N4RlFVRnhRaXhSUVVGeVFqdFJRVUVyUWl4clJVRkJXVHRYUVVGTkxITkNRVUZWTEZkQlFWa3NXVUZCV1N4WFFVRlhMRkZCUVZnc1EwRkJXaXhIUVVGdFF5eExRVUZMTEVkQlFVd3NRMEZCVXl4VFFVRlVMRVZCUVc5Q0xGRkJRWEJDTEVOQlFXNURPME5CUVhaRk96czdPenM3T3p0QlFWRm1MRWxCUVUwc2QwTkJRV2RDTEZWQlFVTXNSMEZCUkN4RlFVRk5MR0ZCUVU0N1YwRkJkMElzYVVKQlFVTXNRMEZCVFN4SFFVRk9MRU5CUVVRc1IwRkJaU3hQUVVGUExFOUJRVThzWVVGQlVDeERRVUZRTEVkQlFTdENMRU5CUVRsRE8wTkJRWGhDT3pzN096czdPenRCUVZGMFFpeEpRVUZOTERCRFFVRnBRaXhWUVVGRExGRkJRVVFzUlVGQlZ5eGhRVUZZTzFkQlFUWkNMRmxCUVZrc1QwRkJUeXhoUVVGUUxFTkJRVm83UTBGQk4wSTdPenM3T3pzN096dEJRVk4yUWl4SlFVRk5MSE5EUVVGbExGVkJRVU1zVVVGQlJDeEZRVUZYTEV0QlFWZ3NSVUZCY1VJN1FVRkROME1zVVVGQlRTeFZRVUZWTEV0QlFVc3NVVUZCVVN4RFFVRlNMRU5CUVV3c1EwRkVOa0k3UVVGRk4wTXNVVUZCVFN4VFFVRlRMRWxCUVVzc1NVRkJTU3hMUVVGS0xFTkJSbmxDTzBGQlJ6ZERMRkZCUVUwc2JVSkJRVzFDTEV0QlFVc3NSMEZCVEN4RFFVRlRMRmRCUVZjc1RVRkJXQ3hGUVVGdFFpeERRVUUxUWl4RFFVRnVRaXhEUVVoMVF6czdRVUZMTjBNc1YwRkJUeXhMUVVGTExFdEJRVXdzUTBGQlZ5eHRRa0ZCYlVJc1QwRkJia0lzUTBGQldDeEhRVUY1UXl4UFFVRjZReXhEUVV4elF6dERRVUZ5UWlJc0ltWnBiR1VpT2lKallXeGpMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwTDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3WEc0Z0lDQWdhR0Z6VUhKdmNHVnlkSGtzWEc0Z0lDQWdhWE5PZFcwc1hHNGdJQ0FnWm1sdVpGWmhiSFZsUVc1a1ZXNXBkQ3hjYmlBZ0lDQjBiMFJsWTJsdFlXeGNibjBnWm5KdmJTQW5MaTkxZEdsc2N5YzdYRzVjYm1OdmJuTjBJRnBGVWs5ZlVFOUpUbFFnUFNCN1hHNGdJQ0FnZURvZ01DeGNiaUFnSUNCNU9pQXdMRnh1SUNBZ0lIbzZJREJjYm4wN1hHNWNibU52Ym5OMElHUnBjM1JoYm1ObE1VUWdQU0FvWVN3Z1lpa2dQVDRnVFdGMGFDNWhZbk1vWVNBdElHSXBPMXh1WEc0dktseHVJQ0FnSUVGdVoyeGxJR0psZEhkbFpXNGdjRzlwYm5SelhHNGdJQ0FnWEc0Z0lDQWdWSEpoYm5Oc1lYUmxjeUIwYUdVZ2FIbHdiM1JvWlhScFkyRnNJR3hwYm1VZ2MyOGdkR2hoZENCMGFHVWdKMlp5YjIwbklHTnZiM0prYVc1aGRHVnpYRzRnSUNBZ1lYSmxJR0YwSURBc01GeHVJQ0FnSUZ4dUlDQWdJRUJ3WVhKaGJTQmJiMkpxWldOMFhUb2dXQ0JoYm1RZ1dTQmpiMjl5WkdsdVlYUmxjeUJ2WmlCbWNtOXRJSEJ2YVc1MFhHNGdJQ0FnUUhCaGNtRnRJRnR2WW1wbFkzUmRPaUJZSUdGdVpDQlpJR052Y21ScGJtRjBaWE1nYjJZZ2RHOGdjRzlwYm5SY2JpQWdJQ0JBY21WMGRYSnVJRnR5WVdScFlXNWRPaUJCYm1kc1pTQmlaWFIzWldWdUlIUm9aU0IwZDI4Z2NHOXBiblJ6SUdsdUlISmhaR2xoYm5OY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ1lXNW5iR1VnUFNBb1lTd2dZaUE5SUZwRlVrOWZVRTlKVGxRcElEMCtJSEpoWkdsaGJuTlViMFJsWjNKbFpYTW9UV0YwYUM1aGRHRnVNaWhoTG5nZ0xTQmlMbmdzSUdFdWVTQXRJR0l1ZVNrcE8xeHVYRzR2S2x4dUlDQWdJRU52Ym5abGNuUWdaR1ZuY21WbGN5QjBieUJ5WVdScFlXNXpYRzRnSUNBZ1hHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJXWVd4MVpTQnBiaUJrWldkeVpXVnpYRzRnSUNBZ1FISmxkSFZ5YmlCYmJuVnRZbVZ5WFRvZ1ZtRnNkV1VnYVc0Z2NtRmthV0Z1YzF4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCa1pXZHlaV1Z6Vkc5U1lXUnBZVzV6SUQwZ0tHUmxaM0psWlhNcElEMCtJR1JsWjNKbFpYTWdLaUJOWVhSb0xsQkpJQzhnTVRnd08xeHVYRzR2S2x4dUlDQWdJRVJwYkdGMFpWeHVJQ0FnSUZ4dUlDQWdJRU5vWVc1blpTQjBhR1VnY0hKdlozSmxjM05wYjI0Z1ltVjBkMlZsYmlCaElHRnVaQ0JpSUdGalkyOXlaR2x1WnlCMGJ5QmthV3hoZEdsdmJpNWNiaUFnSUNCY2JpQWdJQ0JUYnlCa2FXeGhkR2x2YmlBOUlEQXVOU0IzYjNWc1pDQmphR0Z1WjJWY2JpQWdJQ0JjYmlBZ0lDQmhJQzB0TFMwdExTMHRMU0JpWEc0Z0lDQWdYRzRnSUNBZ2RHOWNiaUFnSUNCY2JpQWdJQ0JoSUMwdExTMGdZbHh1SUNBZ0lGeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVUhKbGRtbHZkWE1nZG1Gc2RXVmNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUVOMWNuSmxiblFnZG1Gc2RXVmNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUVScGJHRjBaU0J3Y205bmNtVnpjeUJpZVNCNFhHNGdJQ0FnUUhKbGRIVnliaUJiYm5WdFltVnlYVG9nVUhKbGRtbHZkWE1nZG1Gc2RXVWdjR3gxY3lCMGFHVWdaR2xzWVhSbFpDQmthV1ptWlhKbGJtTmxYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR1JwYkdGMFpTQTlJQ2hoTENCaUxDQmthV3hoZEdsdmJpa2dQVDRnWVNBcklDZ29ZaUF0SUdFcElDb2daR2xzWVhScGIyNHBPMXh1WEc0dktseHVJQ0FnSUVScGMzUmhibU5sWEc0Z0lDQWdYRzRnSUNBZ1VtVjBkWEp1Y3lCMGFHVWdaR2x6ZEdGdVkyVWdZbVYwZDJWbGJpQjBkMjhnYmlCa2FXMWxibk5wYjI1aGJDQndiMmx1ZEhNdVhHNGdJQ0FnWEc0Z0lDQWdRSEJoY21GdElGdHZZbXBsWTNRdmJuVnRZbVZ5WFRvZ2VDQmhibVFnZVNCdmNpQnFkWE4wSUhnZ2IyWWdjRzlwYm5RZ1FWeHVJQ0FnSUVCd1lYSmhiU0JiYjJKcVpXTjBMMjUxYldKbGNsMDZJQ2h2Y0hScGIyNWhiQ2s2SUhnZ1lXNWtJSGtnYjNJZ2FuVnpkQ0I0SUc5bUlIQnZhVzUwSUVKY2JpQWdJQ0JBY21WMGRYSnVJRnR1ZFcxaVpYSmRPaUJVYUdVZ1pHbHpkR0Z1WTJVZ1ltVjBkMlZsYmlCMGFHVWdkSGR2SUhCdmFXNTBjMXh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JrYVhOMFlXNWpaU0E5SUNoaExDQmlJRDBnV2tWU1QxOVFUMGxPVkNrZ1BUNGdlMXh1SUNBZ0lDOHZJREZFSUdScGJXVnVjMmx2Ym5OY2JpQWdJQ0JwWmlBb2FYTk9kVzBvWVNrcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHUnBjM1JoYm1ObE1VUW9ZU3dnWWlrN1hHNWNiaUFnSUNBdkx5Qk5kV3gwYVMxa2FXMWxibk5wYjI1aGJGeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJSGhFWld4MFlTQTlJR1JwYzNSaGJtTmxNVVFvWVM1NExDQmlMbmdwTzF4dUlDQWdJQ0FnSUNCamIyNXpkQ0I1UkdWc2RHRWdQU0JrYVhOMFlXNWpaVEZFS0dFdWVTd2dZaTU1S1R0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnZWtSbGJIUmhJRDBnS0dselRuVnRLR0V1ZWlrcElEOGdaR2x6ZEdGdVkyVXhSQ2hoTG5vc0lHSXVlaWtnT2lBd08xeHVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQk5ZWFJvTG5OeGNuUW9LSGhFWld4MFlTQXFLaUF5S1NBcklDaDVSR1ZzZEdFZ0tpb2dNaWtnS3lBb2VrUmxiSFJoSUNvcUlESXBLVHRjYmlBZ0lDQjlYRzU5TzF4dVhHNHZLbHh1SUNBZ0lFVmhjMlVnZG1Gc2RXVWdkMmwwYUdsdUlISmhibWRsWkNCd1lYSmhiV1YwWlhKelhHNGdJQ0FnWEc0Z0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQlFjbTluY21WemN5QmlaWFIzWldWdUlEQWdZVzVrSURGY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRlpoYkhWbElHOW1JREFnY0hKdlozSmxjM05jYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklGWmhiSFZsSUc5bUlERWdjSEp2WjNKbGMzTmNiaUFnSUNCQWNHRnlZVzBnVzNOMGNtbHVaeUI4ZkNCbWRXNWpkR2x2YmwwNklFNWhiV1VnYjJZZ2NISmxjMlYwSUdWaGMybHVaMXh1SUNBZ0lDQWdJQ0IwYnlCMWMyVWdiM0lnWjJWdVpYSmhkR1ZrSUdWaGMybHVaeUJtZFc1amRHbHZibHh1SUNBZ0lFQnlaWFIxY200Z1cyNTFiV0psY2wwNklGWmhiSFZsSUc5bUlHVmhjMlZrSUhCeWIyZHlaWE56SUdsdUlISmhibWRsWEc0cUx5QmNibVY0Y0c5eWRDQmpiMjV6ZENCbFlYTmxJRDBnS0hCeWIyZHlaWE56TENCbWNtOXRMQ0IwYnl3Z1pXRnpaU2tnUFQ0Z2UxeHVJQ0FnSUdOdmJuTjBJSEJ5YjJkeVpYTnpUR2x0YVhSbFpDQTlJSEpsYzNSeWFXTjBLSEJ5YjJkeVpYTnpMQ0F3TENBeEtUdGNiaUFnSUNCamIyNXpkQ0JsWVhObFpGQnliMmR5WlhOeklEMGdaV0Z6WlNod2NtOW5jbVZ6YzB4cGJXbDBaV1FwTzF4dVhHNGdJQ0FnY21WMGRYSnVJR2RsZEZaaGJIVmxSbkp2YlZCeWIyZHlaWE56S0dWaGMyVmtVSEp2WjNKbGMzTXNJR1p5YjIwc0lIUnZLVHRjYm4wN1hHNGdYRzR2S2x4dUlDQWdJRWg1Y0c5MFpXNTFjMlZjYmlBZ0lDQmNiaUFnSUNCU1pYUjFjbTV6SUhSb1pTQm9lWEJ2ZEdWdWRYTmxMQ0J6YVdSbElFTXNJR2RwZG1WdUlIUm9aU0JzWlc1bmRHaHpJRzltSUhOcFpHVnpJRUVnWVc1a0lFSXVYRzRnSUNBZ1hHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJNWlc1bmRHZ2diMllnUVZ4dUlDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dUR1Z1WjNSb0lHOW1JRUpjYmlBZ0lDQkFjbVYwZFhKdUlGdHVkVzFpWlhKZE9pQk1aVzVuZEdnZ2IyWWdRMXh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JvZVhCdmRHVnVkWE5sSUQwZ0tHRXNJR0lwSUQwK0lFMWhkR2d1YzNGeWRDZ29ZU0FxSUdFcElDc2dLR0lnS2lCaUtTazdYRzVjYmk4cVhHNGdJQ0FnVm1Gc2RXVWdhVzRnY21GdVoyVWdabkp2YlNCd2NtOW5jbVZ6YzF4dUlDQWdJRnh1SUNBZ0lFZHBkbVZ1SUdFZ2JHOTNaWElnYkdsdGFYUWdZVzVrSUdGdUlIVndjR1Z5SUd4cGJXbDBMQ0IzWlNCeVpYUjFjbTRnZEdobElIWmhiSFZsSUhkcGRHaHBibHh1SUNBZ0lIUm9ZWFFnY21GdVoyVWdZWE1nWlhod2NtVnpjMlZrSUdKNUlIQnliMmR5WlhOeklDaGhJRzUxYldKbGNpQm1jbTl0SURBdE1TbGNiaUFnSUNCY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRlJvWlNCd2NtOW5jbVZ6Y3lCaVpYUjNaV1Z1SUd4dmQyVnlJR0Z1WkNCMWNIQmxjaUJzYVcxcGRITWdaWGh3Y21WemMyVmtJREF0TVZ4dUlDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dURzkzWlhJZ2JHbHRhWFFnYjJZZ2NtRnVaMlZjYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklGVndjR1Z5SUd4cGJXbDBJRzltSUhKaGJtZGxYRzRnSUNBZ1FISmxkSFZ5YmlCYmJuVnRZbVZ5WFRvZ1ZtRnNkV1VnWVhNZ1kyRnNZM1ZzWVhSbFpDQm1jbTl0SUhCeWIyZHlaWE56SUhkcGRHaHBiaUJ5WVc1blpTQW9ibTkwSUd4cGJXbDBaV1FnZDJsMGFHbHVJSEpoYm1kbEtWeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQm5aWFJXWVd4MVpVWnliMjFRY205bmNtVnpjeUE5SUNod2NtOW5jbVZ6Y3l3Z1puSnZiU3dnZEc4cElEMCtJQ2d0SUhCeWIyZHlaWE56SUNvZ1puSnZiU2tnS3lBb2NISnZaM0psYzNNZ0tpQjBieWtnS3lCbWNtOXRPMXh1WEc0dktseHVJQ0FnSUZCeWIyZHlaWE56SUhkcGRHaHBiaUJuYVhabGJpQnlZVzVuWlZ4dUlDQWdJRnh1SUNBZ0lFZHBkbVZ1SUdFZ2JHOTNaWElnYkdsdGFYUWdZVzVrSUdGdUlIVndjR1Z5SUd4cGJXbDBMQ0IzWlNCeVpYUjFjbTRnZEdobElIQnliMmR5WlhOelhHNGdJQ0FnS0dWNGNISmxjM05sWkNCaGN5QmhJRzUxYldKbGNpQXdMVEVwSUhKbGNISmxjMlZ1ZEdWa0lHSjVJSFJvWlNCbmFYWmxiaUIyWVd4MVpTd2dZVzVrWEc0Z0lDQWdiR2x0YVhRZ2RHaGhkQ0J3Y205bmNtVnpjeUIwYnlCM2FYUm9hVzRnTUMweExseHVJQ0FnSUZ4dUlDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dWbUZzZFdVZ2RHOGdabWx1WkNCd2NtOW5jbVZ6Y3lCM2FYUm9hVzRnWjJsMlpXNGdjbUZ1WjJWY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRXh2ZDJWeUlHeHBiV2wwSUZ4dUlDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dWWEJ3WlhJZ2JHbHRhWFJjYmlBZ0lDQkFjbVYwZFhKdUlGdHVkVzFpWlhKZE9pQlFjbTluY21WemN5QnZaaUIyWVd4MVpTQjNhWFJvYVc0Z2NtRnVaMlVnWVhNZ1pYaHdjbVZ6YzJWa0lEQXRNVnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JuWlhSUWNtOW5jbVZ6YzBaeWIyMVdZV3gxWlNBOUlDaDJZV3gxWlN3Z1puSnZiU3dnZEc4cElEMCtJQ2gyWVd4MVpTQXRJR1p5YjIwcElDOGdLSFJ2SUMwZ1puSnZiU2s3WEc1Y2JpOHFYRzRnSUNBZ1QyWm1jMlYwSUdKbGRIZGxaVzRnZEhkdklHOWlhbVZqZEhNZ2IyWWdiblZ0WW1WeWMxeHVYRzRnSUNBZ1NXWWdjSEp2Y0dWeWRIa2dhWE1nWm05MWJtUWdhVzRnWWlCdWIzUWdjSEpsYzJWdWRDQnBiaUJoTENCcGRDQjNhV3hzSUhKbGRIVnliaUJnTUdBZ1ptOXlJSFJvWVhRZ2NISnZjQzVjYmlBZ0lDQmNiaUFnSUNCQWNHRnlZVzBnVzFCdmFXNTBYVG9nUm1seWMzUWdiMkpxWldOMFhHNGdJQ0FnUUhCaGNtRnRJRnRRYjJsdWRGMDZJRk5sWTI5dVpDQnZZbXBsWTNSY2JpQWdJQ0JBY21WMGRYSnVJRnRQWm1aelpYUmRPaUJFYVhOMFlXNWpaU0J0WlhSeWFXTnpJR0psZEhkbFpXNGdkSGR2SUhCdmFXNTBjMXh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0J2Wm1aelpYUWdQU0FvWVN3Z1lpa2dQVDRnZTF4dUlDQWdJR052Ym5OMElHOW1abk5sZENBOUlIdDlPMXh1WEc0Z0lDQWdabTl5SUNoc1pYUWdhMlY1SUdsdUlHSXBJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tHSXVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2EyVjVLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdiMlptYzJWMFcydGxlVjBnUFNCb1lYTlFjbTl3WlhKMGVTaGhMQ0JyWlhrcElEOGdZbHRyWlhsZElDMGdZVnRyWlhsZElEb2dNRHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJSEpsZEhWeWJpQnZabVp6WlhRN1hHNTlPMXh1WEc0dktseHVJQ0FnSUZCdmFXNTBJR1p5YjIwZ1lXNW5iR1VnWVc1a0lHUnBjM1JoYm1ObFhHNGdJQ0FnWEc0Z0lDQWdRSEJoY21GdElGdHZZbXBsWTNSZE9pQXlSQ0J3YjJsdWRDQnZaaUJ2Y21sbmFXNWNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUVGdVoyeGxJR1p5YjIwZ2IzSnBaMmx1WEc0Z0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQkVhWE4wWVc1alpTQm1jbTl0SUc5eWFXZHBibHh1SUNBZ0lFQnlaWFIxY200Z1cyOWlhbVZqZEYwNklFTmhiR04xYkdGMFpXUWdNa1FnY0c5cGJuUmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdjRzlwYm5SR2NtOXRRVzVuYkdWQmJtUkVhWE4wWVc1alpTQTlJQ2h2Y21sbmFXNHNJR0Z1WjJ4bExDQmthWE4wWVc1alpTa2dQVDRnZTF4dUlDQWdJR0Z1WjJ4bElEMGdaR1ZuY21WbGMxUnZVbUZrYVdGdWN5aGhibWRzWlNrN1hHNWNiaUFnSUNCeVpYUjFjbTRnZTF4dUlDQWdJQ0FnSUNCNE9pQmthWE4wWVc1alpTQXFJRTFoZEdndVkyOXpLR0Z1WjJ4bEtTQXJJRzl5YVdkcGJpNTRMRnh1SUNBZ0lDQWdJQ0I1T2lCa2FYTjBZVzVqWlNBcUlFMWhkR2d1YzJsdUtHRnVaMnhsS1NBcklHOXlhV2RwYmk1NVhHNGdJQ0FnZlR0Y2JuMDdYRzVjYmk4cVhHNGdJQ0FnUTI5dWRtVnlkQ0J5WVdScFlXNXpJSFJ2SUdSbFozSmxaWE5jYmlBZ0lDQmNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZaaGJIVmxJR2x1SUhKaFpHbGhibk5jYmlBZ0lDQkFjbVYwZFhKdUlGdHVkVzFpWlhKZE9pQldZV3gxWlNCcGJpQmtaV2R5WldWelhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElISmhaR2xoYm5OVWIwUmxaM0psWlhNZ1BTQW9jbUZrYVdGdWN5a2dQVDRnY21Ga2FXRnVjeUFxSURFNE1DQXZJRTFoZEdndVVFazdYRzVjYmk4cVhHNGdJQ0FnVW1WMGRYSnVJSEpoYm1SdmJTQnVkVzFpWlhJZ1ltVjBkMlZsYmlCeVlXNW5aVnh1SUNBZ0lGeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYU0FvYjNCMGFXOXVZV3dwT2lCUGRYUndkWFFnYldsdWFXMTFiVnh1SUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFNBb2IzQjBhVzl1WVd3cE9pQlBkWFJ3ZFhRZ2JXRjRhVzExYlZ4dUlDQWdJRUJ5WlhSMWNtNGdXMjUxYldKbGNsMDZJRkpoYm1SdmJTQnVkVzFpWlhJZ2QybDBhR2x1SUhKaGJtZGxMQ0J2Y2lBd0lHRnVaQ0F4SUdsbUlHNXZibVVnY0hKdmRtbGtaV1JjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnY21GdVpHOXRJRDBnS0cxcGJpQTlJREFzSUcxaGVDQTlJREVwSUQwK0lFMWhkR2d1Y21GdVpHOXRLQ2tnS2lBb2JXRjRJQzBnYldsdUtTQXJJRzFwYmp0Y2JseHVMeXBjYmlBZ0lDQkRZV3hqZFd4aGRHVWdjbVZzWVhScGRtVWdkbUZzZFdWY2JpQWdJQ0JjYmlBZ0lDQlVZV3RsY3lCMGFHVWdiM0JsY21GMGIzSWdZVzVrSUhaaGJIVmxJR1p5YjIwZ1lTQnpkSEpwYm1jc0lHbGxJRndpS3owMVhDSXNJR0Z1WkNCaGNIQnNhV1Z6WEc0Z0lDQWdkRzhnZEdobElHTjFjbkpsYm5RZ2RtRnNkV1VnZEc4Z2NtVnpiMngyWlNCaElHNWxkeUIwWVhKblpYUXVYRzRnSUNBZ1hHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJEZFhKeVpXNTBJSFpoYkhWbFhHNGdJQ0FnUUhCaGNtRnRJRnR6ZEhKcGJtZGRPaUJTWld4aGRHbDJaU0IyWVd4MVpWeHVJQ0FnSUVCeVpYUjFjbTRnVzI1MWJXSmxjbDA2SUU1bGR5QjJZV3gxWlZ4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCeVpXeGhkR2wyWlZaaGJIVmxJRDBnS0dOMWNuSmxiblFzSUhKbGJHRjBhWFpsS1NBOVBpQjdYRzRnSUNBZ2JHVjBJRzVsZDFaaGJIVmxJRDBnWTNWeWNtVnVkRHRjYmlBZ0lDQmpiMjV6ZENCbGNYVmhkR2x2YmlBOUlISmxiR0YwYVhabExuTndiR2wwS0NjOUp5azdYRzRnSUNBZ1kyOXVjM1FnYjNCbGNtRjBiM0lnUFNCbGNYVmhkR2x2Ymxzd1hUdGNiaUFnSUNCc1pYUWdleUIxYm1sMExDQjJZV3gxWlNCOUlEMGdabWx1WkZaaGJIVmxRVzVrVlc1cGRDaGxjWFZoZEdsdmJsc3hYU2s3WEc1Y2JpQWdJQ0IyWVd4MVpTQTlJSEJoY25ObFJteHZZWFFvZG1Gc2RXVXBPMXh1WEc0Z0lDQWdjM2RwZEdOb0lDaHZjR1Z5WVhSdmNpa2dlMXh1SUNBZ0lHTmhjMlVnSnlzbk9seHVJQ0FnSUNBZ0lDQnVaWGRXWVd4MVpTQXJQU0IyWVd4MVpUdGNiaUFnSUNBZ0lDQWdZbkpsWVdzN1hHNGdJQ0FnWTJGelpTQW5MU2M2WEc0Z0lDQWdJQ0FnSUc1bGQxWmhiSFZsSUMwOUlIWmhiSFZsTzF4dUlDQWdJQ0FnSUNCaWNtVmhhenRjYmlBZ0lDQmpZWE5sSUNjcUp6cGNiaUFnSUNBZ0lDQWdibVYzVm1Gc2RXVWdLajBnZG1Gc2RXVTdYRzRnSUNBZ0lDQWdJR0p5WldGck8xeHVJQ0FnSUdOaGMyVWdKeThuT2x4dUlDQWdJQ0FnSUNCdVpYZFdZV3gxWlNBdlBTQjJZV3gxWlR0Y2JpQWdJQ0FnSUNBZ1luSmxZV3M3WEc0Z0lDQWdmVnh1SUNBZ0lGeHVJQ0FnSUdsbUlDaDFibWwwS1NCN1hHNGdJQ0FnSUNBZ0lHNWxkMVpoYkhWbElDczlJSFZ1YVhRN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WMGRYSnVJRzVsZDFaaGJIVmxPMXh1ZlR0Y2JseHVMeXBjYmlBZ0lDQlNaWE4wY21samRDQjJZV3gxWlNCMGJ5QnlZVzVuWlZ4dUlDQWdJRnh1SUNBZ0lGSmxkSFZ5YmlCMllXeDFaU0IzYVhSb2FXNGdkR2hsSUhKaGJtZGxJRzltSUd4dmQyVnlUR2x0YVhRZ1lXNWtJSFZ3Y0dWeVRHbHRhWFJjYmlBZ0lDQmNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZaaGJIVmxJSFJ2SUd0bFpYQWdkMmwwYUdsdUlISmhibWRsWEc0Z0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQk1iM2RsY2lCc2FXMXBkQ0J2WmlCeVlXNW5aVnh1SUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1ZYQndaWElnYkdsdGFYUWdiMllnY21GdVoyVmNiaUFnSUNCQWNtVjBkWEp1SUZ0dWRXMWlaWEpkT2lCV1lXeDFaU0JoY3lCc2FXMXBkR1ZrSUhkcGRHaHBiaUJuYVhabGJpQnlZVzVuWlZ4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCeVpYTjBjbWxqZENBOUlDaDJZV3gxWlN3Z2JXbHVMQ0J0WVhncElEMCtJRTFoZEdndWJXRjRLRTFoZEdndWJXbHVLSFpoYkhWbExDQnRZWGdwTENCdGFXNHBPMXh1WEc0dktseHVJQ0FnSUVaeVlXMWxjbUYwWlMxcGJtUmxjR1Z1WkdWdWRDQnpiVzl2ZEdocGJtZGNibHh1SUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1RtVjNJSFpoYkhWbFhHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJQYkdRZ2RtRnNkV1ZjYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklFWnlZVzFsSUdSMWNtRjBhVzl1WEc0Z0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZElDaHZjSFJwYjI1aGJDazZJRk50YjI5MGFHbHVaeUFvTUNCcGN5QnViMjVsS1Z4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCemJXOXZkR2dnUFNBb2JtVjNWbUZzZFdVc0lHOXNaRlpoYkhWbExDQmtkWEpoZEdsdmJpd2djMjF2YjNSb2FXNW5JRDBnTUNrZ1BUNGdkRzlFWldOcGJXRnNLRzlzWkZaaGJIVmxJQ3NnS0dSMWNtRjBhVzl1SUNvZ0tHNWxkMVpoYkhWbElDMGdiMnhrVm1Gc2RXVXBJQzhnVFdGMGFDNXRZWGdvYzIxdmIzUm9hVzVuTENCa2RYSmhkR2x2YmlrcEtUdGNibHh1THlwY2JpQWdJQ0JEYjI1MlpYSjBJSGdnY0dWeUlITmxZMjl1WkNCMGJ5QndaWElnWm5KaGJXVWdkbVZzYjJOcGRIa2dZbUZ6WldRZ2IyNGdabkJ6WEc0Z0lDQWdYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCVmJtbDBJSEJsY2lCelpXTnZibVJjYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklFWnlZVzFsSUdSMWNtRjBhVzl1SUdsdUlHMXpYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJSE53WldWa1VHVnlSbkpoYldVZ1BTQW9lSEJ6TENCbWNtRnRaVVIxY21GMGFXOXVLU0E5UGlBb2FYTk9kVzBvZUhCektTa2dQeUI0Y0hNZ0x5QW9NVEF3TUNBdklHWnlZVzFsUkhWeVlYUnBiMjRwSURvZ01EdGNibHh1THlwY2JpQWdJQ0JEYjI1MlpYSjBJSFpsYkc5amFYUjVJR2x1ZEc4Z2RtVnNhV05wZEhrZ2NHVnlJSE5sWTI5dVpGeHVJQ0FnSUZ4dUlDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dWVzVwZENCd1pYSWdabkpoYldWY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRVp5WVcxbElHUjFjbUYwYVc5dUlHbHVJRzF6WEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUhOd1pXVmtVR1Z5VTJWamIyNWtJRDBnS0habGJHOWphWFI1TENCbWNtRnRaVVIxY21GMGFXOXVLU0E5UGlCMlpXeHZZMmwwZVNBcUlDZ3hNREF3SUM4Z1puSmhiV1ZFZFhKaGRHbHZiaWs3WEc1Y2JpOHFYRzRnSUNBZ1EzSmxZWFJsSUhOMFpYQndaV1FnZG1WeWMybHZiaUJ2WmlBd0xURWdjSEp2WjNKbGMzTmNiaUFnSUNCY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRU4xY25KbGJuUWdkbUZzZFdWY2JpQWdJQ0JBY0dGeVlXMGdXMmx1ZEYwNklFNTFiV0psY2lCdlppQnpkR1Z3YzF4dUlDQWdJRUJ5WlhSMWNtNGdXMjUxYldKbGNsMDZJRk4wWlhCd1pXUWdkbUZzZFdWY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2MzUmxjRkJ5YjJkeVpYTnpJRDBnS0hCeWIyZHlaWE56TENCemRHVndjeWtnUFQ0Z2UxeHVJQ0FnSUdOdmJuTjBJSE5sWjIxbGJuUWdQU0F4SUM4Z0tITjBaWEJ6SUMwZ01TazdYRzRnSUNBZ1kyOXVjM1FnZEdGeVoyVjBJRDBnTVNBdElDZ3hJQzhnYzNSbGNITXBPMXh1SUNBZ0lHTnZibk4wSUhCeWIyZHlaWE56VDJaVVlYSm5aWFFnUFNCTllYUm9MbTFwYmlod2NtOW5jbVZ6Y3lBdklIUmhjbWRsZEN3Z01TazdYRzVjYmlBZ0lDQnlaWFIxY200Z1RXRjBhQzVtYkc5dmNpaHdjbTluY21WemMwOW1WR0Z5WjJWMElDOGdjMlZuYldWdWRDa2dLaUJ6WldkdFpXNTBPMXh1ZlRzaVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy9jYWxjLmpzXG4gKiogbW9kdWxlIGlkID0gMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBDQU1FTF9DQVNFX1BBVFRFUk4gPSAvKFthLXpdKShbQS1aXSkvZztcbnZhciBSRVBMQUNFX1RFTVBMQVRFID0gJyQxLSQyJztcbnZhciBIQVNfUEVSRk9STUFOQ0VfTk9XID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJyAmJiBwZXJmb3JtYW5jZS5ub3c7XG5cbi8qXG4gICAgR2V0IHZhciB0eXBlIGFzIHN0cmluZ1xuICAgIFxuICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgIEByZXR1cm4gW3N0cmluZ106IFJldHVybnMsIGZvciBpbnN0YW5jZSAnT2JqZWN0JyBpZiBbb2JqZWN0IE9iamVjdF1cbiovXG52YXIgdmFyVHlwZSA9IGZ1bmN0aW9uICh2YXJpYWJsZSkge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFyaWFibGUpLnNsaWNlKDgsIC0xKTtcbn07XG5cbi8qXG4gICAgQ29udmVydCBjYW1lbENhc2UgdG8gZGFzaC1jYXNlXG5cbiAgICBAcGFyYW0gW3N0cmluZ11cbiAgICBAcmV0dXJuIFtzdHJpbmddXG4qL1xudmFyIGNhbWVsVG9EYXNoID0gZXhwb3J0cy5jYW1lbFRvRGFzaCA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoQ0FNRUxfQ0FTRV9QQVRURVJOLCBSRVBMQUNFX1RFTVBMQVRFKS50b0xvd2VyQ2FzZSgpO1xufTtcblxudmFyIGNyZWF0ZURlbGltaXRlZCA9IGV4cG9ydHMuY3JlYXRlRGVsaW1pdGVkID0gZnVuY3Rpb24gKHZhbHVlcywgdGVybXMsIGRlbGltaXRlciwgY2hvcCkge1xuICAgIHZhciBudW1UZXJtcyA9IHRlcm1zLmxlbmd0aDtcbiAgICB2YXIgY29tYmluZWQgPSAnJztcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtVGVybXM7IGkrKykge1xuICAgICAgICB2YXIgdGVybSA9IHRlcm1zW2ldO1xuICAgICAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KHRlcm0pKSB7XG4gICAgICAgICAgICBjb21iaW5lZCArPSB2YWx1ZXNbdGVybV0gKyBkZWxpbWl0ZXI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY2hvcCkge1xuICAgICAgICBjb21iaW5lZCA9IGNvbWJpbmVkLnNsaWNlKDAsIC1jaG9wKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tYmluZWQ7XG59O1xuXG4vKlxuICAgIENyZWF0ZSBhIGZ1bmN0aW9uIHN0cmluZ1xuXG4gICAgJzIwcHgnLCAndHJhbnNsYXRlJyAtPiAndHJhbnNsYXRlKDIwcHgpJ1xuXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHJldHVybiBbc3RyaW5nXVxuKi9cbnZhciBjcmVhdGVGdW5jdGlvblN0cmluZyA9IGV4cG9ydHMuY3JlYXRlRnVuY3Rpb25TdHJpbmcgPSBmdW5jdGlvbiAodmFsdWUsIHByZWZpeCkge1xuICAgIHJldHVybiBwcmVmaXggKyAnKCcgKyB2YWx1ZSArICcpJztcbn07XG5cbi8qXG4gICAgR2VuZXJhdGUgY3VycmVudCB0aW1lc3RhbXBcbiAgICBcbiAgICBAcmV0dXJuIFt0aW1lc3RhbXBdOiBDdXJyZW50IFVOSVggdGltZXN0YW1wXG4qL1xudmFyIGN1cnJlbnRUaW1lID0gZXhwb3J0cy5jdXJyZW50VGltZSA9IEhBU19QRVJGT1JNQU5DRV9OT1cgPyBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHBlcmZvcm1hbmNlLm5vdygpO1xufSA6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG59O1xuXG4vKlxuICAgIFNwbGl0IGEgdmFsdWUgaW50byBhIHZhbHVlL3VuaXQgb2JqZWN0XG4gICAgXG4gICAgICAgIFwiMjAwcHhcIiAtPiB7IHZhbHVlOiAyMDAsIHVuaXQ6IFwicHhcIiB9XG4gICAgICAgIFxuICAgIEBwYXJhbSBbc3RyaW5nXTogVmFsdWUgdG8gc3BsaXRcbiAgICBAcmV0dXJuIFtvYmplY3RdOiBPYmplY3Qgd2l0aCB2YWx1ZSBhbmQgdW5pdCBwcm9wc1xuKi9cbnZhciBmaW5kVmFsdWVBbmRVbml0ID0gZXhwb3J0cy5maW5kVmFsdWVBbmRVbml0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlLm1hdGNoKSB7XG4gICAgICAgIHZhciBzcGxpdFZhbHVlID0gdmFsdWUubWF0Y2goLygtP1xcZCpcXC4/XFxkKikoLiopLyk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiBwYXJzZUZsb2F0KHNwbGl0VmFsdWVbMV0pLFxuICAgICAgICAgICAgdW5pdDogc3BsaXRWYWx1ZVsyXVxuICAgICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB7IHZhbHVlOiB2YWx1ZSB9O1xuICAgIH1cbn07XG5cbi8qXG4gICAgU3BsaXQgY29sb3Igc3RyaW5nIGludG8gbWFwIG9mIGNvbG9yIHByb3BlcnRpZXNcblxuICAgIFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwKVwiLCBbXCJSZWRcIiwgJ0dyZWVuXCIsIFwiQmx1ZVwiLCBcIkFscGhhXCJdXG5cbiAgICB7IFJlZDogMjU1Li4uIH1cbiovXG52YXIgZ2V0Q29sb3JWYWx1ZXMgPSBleHBvcnRzLmdldENvbG9yVmFsdWVzID0gZnVuY3Rpb24gKHZhbHVlLCBjb2xvclRlcm1zKSB7XG4gICAgdmFyIG51bUNvbG9yVGVybXMgPSBjb2xvclRlcm1zLmxlbmd0aDtcbiAgICB2YXIgY29sb3JWYWx1ZXMgPSB7fTtcbiAgICB2YXIgY29sb3JzID0gc3BsaXRDb21tYURlbGltaXRlZChnZXRWYWx1ZUZyb21GdW5jdGlvblN0cmluZyh2YWx1ZSkpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1Db2xvclRlcm1zOyBpKyspIHtcbiAgICAgICAgY29sb3JWYWx1ZXNbY29sb3JUZXJtc1tpXV0gPSBjb2xvcnNbaV0gIT09IHVuZGVmaW5lZCA/IGNvbG9yc1tpXSA6IDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbG9yVmFsdWVzO1xufTtcblxuLypcbiAgICBHZXQgdmFsdWUgZnJvbSBmdW5jdGlvbiBzdHJpbmdcblxuICAgIFwidHJhbnNsYXRlWCgyMHB4KVwiIC0+IFwiMjBweFwiXG4qL1xudmFyIGdldFZhbHVlRnJvbUZ1bmN0aW9uU3RyaW5nID0gZXhwb3J0cy5nZXRWYWx1ZUZyb21GdW5jdGlvblN0cmluZyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5zdWJzdHJpbmcodmFsdWUuaW5kZXhPZignKCcpICsgMSwgdmFsdWUubGFzdEluZGV4T2YoJyknKSk7XG59O1xuXG4vKlxuICAgIENoZWNrIGlmIHR3byBvYmplY3RzIGhhdmUgY2hhbmdlZCBmcm9tIGVhY2ggb3RoZXJcbiAgICBcbiAgICBAcGFyYW0gW29iamVjdF06IElucHV0IEFcbiAgICBAcGFyYW0gW29iamVjdF06IElucHV0IEJcbiAgICBAcmV0dXJuIFtib29sZWFuXTogVHJ1ZSBpZiBkaWZmZXJlbnRcbiovXG52YXIgaGFzQ2hhbmdlZCA9IGV4cG9ydHMuaGFzQ2hhbmdlZCA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgdmFyIGNoYW5nZWQgPSBmYWxzZTtcblxuICAgIGZvciAodmFyIGtleSBpbiBhKSB7XG4gICAgICAgIGlmIChhLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIGlmIChoYXNQcm9wZXJ0eShiLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFba2V5XSAhPT0gYltrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY2hhbmdlZDtcbn07XG5cbi8qXG4gICAgQ2hlY2sgaWYgb2JqZWN0IGhhcyBwcm9wZXJ0eSBhbmQgaXQgaXNuJ3QgdW5kZWZpbmVkXG5cbiAgICBAcGFyYW0gW29iamVjdF1cbiAgICBAcGFyYW0gW3N0cmluZ11cbiAgICBAcmV0dXJuIFtib29sZWFuXVxuKi9cbnZhciBoYXNQcm9wZXJ0eSA9IGV4cG9ydHMuaGFzUHJvcGVydHkgPSBmdW5jdGlvbiAob2JqZWN0LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICByZXR1cm4gb2JqZWN0Lmhhc093blByb3BlcnR5KHByb3BlcnR5TmFtZSkgJiYgb2JqZWN0W3Byb3BlcnR5TmFtZV0gIT09IHVuZGVmaW5lZDtcbn07XG5cbi8qXG4gICAgSXMgdXRpbHMgdmFyIGFuIGFycmF5ID8gXG4gICAgXG4gICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB1dGlscy52YXJUeXBlID09PSAnQXJyYXknXG4qL1xudmFyIGlzQXJyYXkgPSBleHBvcnRzLmlzQXJyYXkgPSBmdW5jdGlvbiAoYXJyKSB7XG4gICAgcmV0dXJuIHZhclR5cGUoYXJyKSA9PT0gJ0FycmF5Jztcbn07XG5cbi8qXG4gICAgSXMgdXRpbHMgdmFyIGEgZnVuY3Rpb24gPyBcbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHV0aWxzLnZhclR5cGUgPT09ICdGdW5jdGlvbidcbiovXG52YXIgaXNGdW5jID0gZXhwb3J0cy5pc0Z1bmMgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIHZhclR5cGUob2JqKSA9PT0gJ0Z1bmN0aW9uJztcbn07XG5cbi8qXG4gICAgSXMgdXRpbHMgdmFyIGEgbnVtYmVyP1xuICAgIFxuICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mID09PSAnbnVtYmVyJ1xuKi9cbnZhciBpc051bSA9IGV4cG9ydHMuaXNOdW0gPSBmdW5jdGlvbiAobnVtKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBudW0gPT09ICdudW1iZXInO1xufTtcblxuLypcbiAgICBJcyB1dGlscyB2YXIgYW4gb2JqZWN0P1xuICAgIFxuICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mID09PSAnb2JqZWN0J1xuKi9cbnZhciBpc09iaiA9IGV4cG9ydHMuaXNPYmogPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdvYmplY3QnO1xufTtcblxuLypcbiAgICBJcyB1dGlscyBhIHJlbGF0aXZlIHZhbHVlIGFzc2lnbm1lbnQ/XG4gICAgXG4gICAgQHBhcmFtIFtzdHJpbmddOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgQHJldHVybiBbYm9vbGVhbl06IElmIHV0aWxzIGxvb2tzIGxpa2UgYSByZWxhdGl2ZSB2YWx1ZSBhc3NpZ25tZW50XG4qL1xudmFyIGlzUmVsYXRpdmVWYWx1ZSA9IGV4cG9ydHMuaXNSZWxhdGl2ZVZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICYmIHZhbHVlLmluZGV4T2YgJiYgdmFsdWUuaW5kZXhPZignPScpID4gMCA/IHRydWUgOiBmYWxzZTtcbn07XG5cbi8qXG4gICAgSXMgdXRpbHMgdmFyIGEgc3RyaW5nID8gXG4gICAgXG4gICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJ1xuKi9cbnZhciBpc1N0cmluZyA9IGV4cG9ydHMuaXNTdHJpbmcgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnO1xufTtcblxuLypcbiAgICBAcGFyYW0gW3N0cmluZyB8fCBOb2RlTGlzdF06XG4gICAgICAgIElmIHN0cmluZywgdHJlYXRlZCBhcyBzZWxlY3Rvci5cbiAgICAgICAgSWYgbm90LCB0cmVhdGVkIGFzIHByZWV4aXN0aW5nIE5vZGVMaXN0XG5cbiAgICBAcmV0dXJuIFtBcnJheV1cbiovXG52YXIgc2VsZWN0RG9tID0gZXhwb3J0cy5zZWxlY3REb20gPSBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICB2YXIgbm9kZXMgPSB0eXBlb2Ygc2VsZWN0b3IgPT09ICdzdHJpbmcnID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikgOiBzZWxlY3RvcjtcbiAgICByZXR1cm4gbm9kZXMubGVuZ3RoID8gW10uc2xpY2UuY2FsbChub2RlcykgOiBbXS5wdXNoKG5vZGVzKTtcbn07XG5cbi8qXG4gICAgU3BsaXQgY29tbWEtZGVsaW1pdGVkIHN0cmluZ1xuXG4gICAgXCJmb28sYmFyXCIgLT4gW1wiZm9vXCIsIFwiYmFyXCJdXG5cbiAgICBAcGFyYW0gW3N0cmluZ11cbiAgICBAcmV0dXJuIFthcnJheV1cbiovXG52YXIgc3BsaXRDb21tYURlbGltaXRlZCA9IGV4cG9ydHMuc3BsaXRDb21tYURlbGltaXRlZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiBpc1N0cmluZyh2YWx1ZSkgPyB2YWx1ZS5zcGxpdCgvLFxccyovKSA6IFt2YWx1ZV07XG59O1xuXG4vKlxuICAgIFNwbGl0IHNwYWNlLWRlbGltaXRlZCBzdHJpbmdcblxuICAgIFwiZm9vIGJhclwiIC0+IFtcImZvb1wiLCBcImJhclwiXVxuXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHJldHVybiBbYXJyYXldXG4qL1xudmFyIHNwbGl0U3BhY2VEZWxpbWl0ZWQgPSBleHBvcnRzLnNwbGl0U3BhY2VEZWxpbWl0ZWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodmFsdWUpID8gdmFsdWUuc3BsaXQoJyAnKSA6IFt2YWx1ZV07XG59O1xuXG4vKlxuICAgIENvbnZlcnQgbnVtYmVyIHRvIHggZGVjaW1hbCBwbGFjZXNcblxuICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgIEByZXR1cm4gW251bWJlcl1cbiovXG52YXIgdG9EZWNpbWFsID0gZXhwb3J0cy50b0RlY2ltYWwgPSBmdW5jdGlvbiAobnVtKSB7XG4gICAgdmFyIHByZWNpc2lvbiA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IDIgOiBhcmd1bWVudHNbMV07XG5cbiAgICBwcmVjaXNpb24gPSBNYXRoLnBvdygxMCwgcHJlY2lzaW9uKTtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChudW0gKiBwcmVjaXNpb24pIC8gcHJlY2lzaW9uO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJtTXZkWFJwYkhNdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPMEZCUVVFc1NVRkJUU3h4UWtGQmNVSXNhVUpCUVhKQ08wRkJRMDRzU1VGQlRTeHRRa0ZCYlVJc1QwRkJia0k3UVVGRFRpeEpRVUZOTEhOQ1FVRjFRaXhQUVVGUExGZEJRVkFzUzBGQmRVSXNWMEZCZGtJc1NVRkJjME1zV1VGQldTeEhRVUZhT3pzN096czdPenRCUVZGdVJTeEpRVUZOTEZWQlFWVTdWMEZCV1N4UFFVRlBMRk5CUVZBc1EwRkJhVUlzVVVGQmFrSXNRMEZCTUVJc1NVRkJNVUlzUTBGQkswSXNVVUZCTDBJc1JVRkJlVU1zUzBGQmVrTXNRMEZCSzBNc1EwRkJMME1zUlVGQmEwUXNRMEZCUXl4RFFVRkVPME5CUVRsRU96czdPenM3T3p0QlFWRlVMRWxCUVUwc2IwTkJRV01zVlVGQlF5eE5RVUZFTzFkQlFWa3NUMEZCVHl4UFFVRlFMRU5CUVdVc2EwSkJRV1lzUlVGQmJVTXNaMEpCUVc1RExFVkJRWEZFTEZkQlFYSkVPME5CUVZvN08wRkJSWEJDTEVsQlFVMHNORU5CUVd0Q0xGVkJRVU1zVFVGQlJDeEZRVUZUTEV0QlFWUXNSVUZCWjBJc1UwRkJhRUlzUlVGQk1rSXNTVUZCTTBJc1JVRkJiME03UVVGREwwUXNVVUZCVFN4WFFVRlhMRTFCUVUwc1RVRkJUaXhEUVVRNFF6dEJRVVV2UkN4UlFVRkpMRmRCUVZjc1JVRkJXQ3hEUVVZeVJEczdRVUZKTDBRc1UwRkJTeXhKUVVGSkxFbEJRVWtzUTBGQlNpeEZRVUZQTEVsQlFVa3NVVUZCU2l4RlFVRmpMRWRCUVRsQ0xFVkJRVzFETzBGQlF5OUNMRmxCUVUwc1QwRkJUeXhOUVVGTkxFTkJRVTRzUTBGQlVDeERRVVI1UWp0QlFVVXZRaXhaUVVGSkxFOUJRVThzWTBGQlVDeERRVUZ6UWl4SlFVRjBRaXhEUVVGS0xFVkJRV2xETzBGQlF6ZENMSGRDUVVGWkxFOUJRVThzU1VGQlVDeEpRVUZsTEZOQlFXWXNRMEZFYVVJN1UwRkJha003UzBGR1NqczdRVUZQUVN4UlFVRkpMRWxCUVVvc1JVRkJWVHRCUVVOT0xHMUNRVUZYTEZOQlFWTXNTMEZCVkN4RFFVRmxMRU5CUVdZc1JVRkJhMElzUTBGQlF5eEpRVUZFTEVOQlFUZENMRU5CUkUwN1MwRkJWanM3UVVGSlFTeFhRVUZQTEZGQlFWQXNRMEZtSzBRN1EwRkJjRU03T3pzN096czdPenM3TzBGQk1rSjRRaXhKUVVGTkxITkVRVUYxUWl4VlFVRkRMRXRCUVVRc1JVRkJVU3hOUVVGU08xZEJRWE5DTEdWQlFWVTdRMEZCYUVNN096czdPenM3UVVGUE4wSXNTVUZCVFN4dlEwRkJZeXh6UWtGQmMwSTdWMEZCVFN4WlFVRlpMRWRCUVZvN1EwRkJUaXhIUVVFd1FqdFhRVUZOTEVsQlFVa3NTVUZCU2l4SFFVRlhMRTlCUVZnN1EwRkJUanM3T3pzN096czdPenRCUVZWd1JTeEpRVUZOTERoRFFVRnRRaXhWUVVGRExFdEJRVVFzUlVGQlZ6dEJRVU4yUXl4UlFVRkpMRTFCUVUwc1MwRkJUaXhGUVVGaE8wRkJRMklzV1VGQlRTeGhRVUZoTEUxQlFVMHNTMEZCVGl4RFFVRlpMRzFDUVVGYUxFTkJRV0lzUTBGRVR6czdRVUZIWWl4bFFVRlBPMEZCUTBnc2JVSkJRVThzVjBGQlZ5eFhRVUZYTEVOQlFWZ3NRMEZCV0N4RFFVRlFPMEZCUTBFc2EwSkJRVThzVjBGQlZ5eERRVUZZTEVOQlFWQTdVMEZHU2l4RFFVaGhPMHRCUVdwQ0xFMUJUMDg3UVVGRFNDeGxRVUZQTEVWQlFVVXNXVUZCUml4RlFVRlFMRU5CUkVjN1MwRlFVRHREUVVRMFFqczdPenM3T3pzN08wRkJiMEo2UWl4SlFVRk5MREJEUVVGcFFpeFZRVUZETEV0QlFVUXNSVUZCVVN4VlFVRlNMRVZCUVhWQ08wRkJRMnBFTEZGQlFVMHNaMEpCUVdkQ0xGZEJRVmNzVFVGQldDeERRVVF5UWp0QlFVVnFSQ3hSUVVGTkxHTkJRV01zUlVGQlpDeERRVVl5UXp0QlFVZHFSQ3hSUVVGTkxGTkJRVk1zYjBKQlFXOUNMREpDUVVFeVFpeExRVUV6UWl4RFFVRndRaXhEUVVGVUxFTkJTREpET3p0QlFVdHFSQ3hUUVVGTExFbEJRVWtzU1VGQlNTeERRVUZLTEVWQlFVOHNTVUZCU1N4aFFVRktMRVZCUVcxQ0xFZEJRVzVETEVWQlFYZERPMEZCUTNCRExHOUNRVUZaTEZkQlFWY3NRMEZCV0N4RFFVRmFMRWxCUVRaQ0xFMUJRVU1zUTBGQlR5eERRVUZRTEUxQlFXTXNVMEZCWkN4SFFVRXlRaXhQUVVGUExFTkJRVkFzUTBGQk5VSXNSMEZCZDBNc1EwRkJlRU1zUTBGRVR6dExRVUY0UXpzN1FVRkpRU3hYUVVGUExGZEJRVkFzUTBGVWFVUTdRMEZCZGtJN096czdPenM3UVVGcFFuWkNMRWxCUVUwc2EwVkJRVFpDTEZWQlFVTXNTMEZCUkR0WFFVRlhMRTFCUVUwc1UwRkJUaXhEUVVGblFpeE5RVUZOTEU5QlFVNHNRMEZCWXl4SFFVRmtMRWxCUVhGQ0xFTkJRWEpDTEVWQlFYZENMRTFCUVUwc1YwRkJUaXhEUVVGclFpeEhRVUZzUWl4RFFVRjRRenREUVVGWU96czdPenM3T3pzN1FVRlRia01zU1VGQlRTeHJRMEZCWVN4VlFVRkRMRU5CUVVRc1JVRkJTU3hEUVVGS0xFVkJRVlU3UVVGRGFFTXNVVUZCU1N4VlFVRlZMRXRCUVZZc1EwRkVORUk3TzBGQlIyaERMRk5CUVVzc1NVRkJTU3hIUVVGS0xFbEJRVmNzUTBGQmFFSXNSVUZCYlVJN1FVRkRaaXhaUVVGSkxFVkJRVVVzWTBGQlJpeERRVUZwUWl4SFFVRnFRaXhEUVVGS0xFVkJRVEpDTzBGQlEzWkNMR2RDUVVGSkxGbEJRVmtzUTBGQldpeEZRVUZsTEVkQlFXWXNRMEZCU2l4RlFVRjVRanRCUVVOeVFpeHZRa0ZCU1N4RlFVRkZMRWRCUVVZc1RVRkJWeXhGUVVGRkxFZEJRVVlzUTBGQldDeEZRVUZ0UWp0QlFVTnVRaXc0UWtGQlZTeEpRVUZXTEVOQlJHMUNPMmxDUVVGMlFqdGhRVVJLTEUxQlNVODdRVUZEU0N3d1FrRkJWU3hKUVVGV0xFTkJSRWM3WVVGS1VEdFRRVVJLTzB0QlJFbzdPMEZCV1VFc1YwRkJUeXhQUVVGUUxFTkJabWRETzBOQlFWWTdPenM3T3pzN096dEJRWGxDYmtJc1NVRkJUU3h2UTBGQll5eFZRVUZETEUxQlFVUXNSVUZCVXl4WlFVRlVPMWRCUVRCQ0xFOUJRVThzWTBGQlVDeERRVUZ6UWl4WlFVRjBRaXhMUVVGMVF5eFBRVUZQTEZsQlFWQXNUVUZCZVVJc1UwRkJla0k3UTBGQmFrVTdPenM3T3pzN08wRkJVWEJDTEVsQlFVMHNORUpCUVZVc1ZVRkJReXhIUVVGRU8xZEJRVk1zVVVGQlVTeEhRVUZTTEUxQlFXbENMRTlCUVdwQ08wTkJRVlE3T3pzN096czdPMEZCVVdoQ0xFbEJRVTBzTUVKQlFWTXNWVUZCUXl4SFFVRkVPMWRCUVZNc1VVRkJVU3hIUVVGU0xFMUJRV2xDTEZWQlFXcENPME5CUVZRN096czdPenM3TzBGQlVXWXNTVUZCVFN4M1FrRkJVU3hWUVVGRExFZEJRVVE3VjBGQlV5eFBRVUZQTEVkQlFWQXNTMEZCWlN4UlFVRm1PME5CUVZRN096czdPenM3TzBGQlVXUXNTVUZCVFN4M1FrRkJVU3hWUVVGRExFZEJRVVE3VjBGQlV5eFBRVUZQTEVkQlFWQXNTMEZCWlN4UlFVRm1PME5CUVZRN096czdPenM3TzBGQlVXUXNTVUZCVFN3MFEwRkJhMElzVlVGQlF5eExRVUZFTzFkQlFWY3NTMEZCUXl4SlFVRlRMRTFCUVUwc1QwRkJUaXhKUVVGcFFpeE5RVUZOTEU5QlFVNHNRMEZCWXl4SFFVRmtMRWxCUVhGQ0xFTkJRWEpDTEVkQlFUQkNMRWxCUVhKRUxFZEJRVFJFTEV0QlFUVkVPME5CUVZnN096czdPenM3TzBGQlVYaENMRWxCUVUwc09FSkJRVmNzVlVGQlF5eEhRVUZFTzFkQlFWTXNUMEZCVHl4SFFVRlFMRXRCUVdVc1VVRkJaanREUVVGVU96czdPenM3T3pzN1FVRlRha0lzU1VGQlRTeG5RMEZCV1N4VlFVRkRMRkZCUVVRc1JVRkJZenRCUVVOdVF5eFJRVUZOTEZGQlFWRXNUMEZCVVN4UlFVRlFMRXRCUVc5Q0xGRkJRWEJDTEVkQlFXZERMRk5CUVZNc1owSkJRVlFzUTBGQk1FSXNVVUZCTVVJc1EwRkJha01zUjBGQmRVVXNVVUZCZGtVc1EwRkVjVUk3UVVGRmJrTXNWMEZCVHl4TFFVRkRMRU5CUVUwc1RVRkJUaXhIUVVGblFpeEhRVUZITEV0QlFVZ3NRMEZCVXl4SlFVRlVMRU5CUVdNc1MwRkJaQ3hEUVVGcVFpeEhRVUYzUXl4SFFVRkhMRWxCUVVnc1EwRkJVU3hMUVVGU0xFTkJRWGhETEVOQlJqUkNPME5CUVdRN096czdPenM3T3pzN1FVRmhiRUlzU1VGQlRTeHZSRUZCYzBJc1ZVRkJReXhMUVVGRU8xZEJRVmNzVTBGQlV5eExRVUZVTEVsQlFXdENMRTFCUVUwc1MwRkJUaXhEUVVGWkxFMUJRVm9zUTBGQmJFSXNSMEZCZDBNc1EwRkJReXhMUVVGRUxFTkJRWGhETzBOQlFWZzdPenM3T3pzN096czdRVUZWTlVJc1NVRkJUU3h2UkVGQmMwSXNWVUZCUXl4TFFVRkVPMWRCUVZjc1UwRkJVeXhMUVVGVUxFbEJRV3RDTEUxQlFVMHNTMEZCVGl4RFFVRlpMRWRCUVZvc1EwRkJiRUlzUjBGQmNVTXNRMEZCUXl4TFFVRkVMRU5CUVhKRE8wTkJRVmc3T3pzN096czdPenRCUVZNMVFpeEpRVUZOTEdkRFFVRlpMRlZCUVVNc1IwRkJSQ3hGUVVGM1FqdFJRVUZzUWl4clJVRkJXU3hwUWtGQlRUczdRVUZETjBNc2VVSkJRVmtzU1VGQlRTeFZRVUZzUWl4RFFVUTJRenRCUVVVM1F5eFhRVUZQTEV0QlFVc3NTMEZCVEN4RFFVRlhMRTFCUVUwc1UwRkJUaXhEUVVGWUxFZEJRVGhDTEZOQlFUbENMRU5CUm5ORE8wTkJRWGhDSWl3aVptbHNaU0k2SW5WMGFXeHpMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwTDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1OdmJuTjBJRU5CVFVWTVgwTkJVMFZmVUVGVVZFVlNUaUE5SUM4b1cyRXRlbDBwS0Z0QkxWcGRLUzluTzF4dVkyOXVjM1FnVWtWUVRFRkRSVjlVUlUxUVRFRlVSU0E5SUNja01TMGtNaWM3WEc1amIyNXpkQ0JJUVZOZlVFVlNSazlTVFVGT1EwVmZUazlYSUQwZ0tIUjVjR1Z2WmlCd1pYSm1iM0p0WVc1alpTQWhQVDBnSjNWdVpHVm1hVzVsWkNjZ0ppWWdjR1Z5Wm05eWJXRnVZMlV1Ym05M0tUdGNibHh1THlwY2JpQWdJQ0JIWlhRZ2RtRnlJSFI1Y0dVZ1lYTWdjM1J5YVc1blhHNGdJQ0FnWEc0Z0lDQWdRSEJoY21GdE9pQldZWEpwWVdKc1pTQjBieUIwWlhOMFhHNGdJQ0FnUUhKbGRIVnliaUJiYzNSeWFXNW5YVG9nVW1WMGRYSnVjeXdnWm05eUlHbHVjM1JoYm1ObElDZFBZbXBsWTNRbklHbG1JRnR2WW1wbFkzUWdUMkpxWldOMFhWeHVLaTljYm1OdmJuTjBJSFpoY2xSNWNHVWdQU0IyWVhKcFlXSnNaU0E5UGlCUFltcGxZM1F1Y0hKdmRHOTBlWEJsTG5SdlUzUnlhVzVuTG1OaGJHd29kbUZ5YVdGaWJHVXBMbk5zYVdObEtEZ3NJQzB4S1R0Y2JseHVMeXBjYmlBZ0lDQkRiMjUyWlhKMElHTmhiV1ZzUTJGelpTQjBieUJrWVhOb0xXTmhjMlZjYmx4dUlDQWdJRUJ3WVhKaGJTQmJjM1J5YVc1blhWeHVJQ0FnSUVCeVpYUjFjbTRnVzNOMGNtbHVaMTFjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnWTJGdFpXeFViMFJoYzJnZ1BTQW9jM1J5YVc1bktTQTlQaUJ6ZEhKcGJtY3VjbVZ3YkdGalpTaERRVTFGVEY5RFFWTkZYMUJCVkZSRlVrNHNJRkpGVUV4QlEwVmZWRVZOVUV4QlZFVXBMblJ2VEc5M1pYSkRZWE5sS0NrN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCamNtVmhkR1ZFWld4cGJXbDBaV1FnUFNBb2RtRnNkV1Z6TENCMFpYSnRjeXdnWkdWc2FXMXBkR1Z5TENCamFHOXdLU0E5UGlCN1hHNGdJQ0FnWTI5dWMzUWdiblZ0VkdWeWJYTWdQU0IwWlhKdGN5NXNaVzVuZEdnN1hHNGdJQ0FnYkdWMElHTnZiV0pwYm1Wa0lEMGdKeWM3WEc1Y2JpQWdJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUc1MWJWUmxjbTF6T3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdkR1Z5YlNBOUlIUmxjbTF6VzJsZE8xeHVJQ0FnSUNBZ0lDQnBaaUFvZG1Gc2RXVnpMbWhoYzA5M2JsQnliM0JsY25SNUtIUmxjbTBwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjIxaWFXNWxaQ0FyUFNCMllXeDFaWE5iZEdWeWJWMGdLeUJrWld4cGJXbDBaWEk3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0JwWmlBb1kyaHZjQ2tnZTF4dUlDQWdJQ0FnSUNCamIyMWlhVzVsWkNBOUlHTnZiV0pwYm1Wa0xuTnNhV05sS0RBc0lDMWphRzl3S1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J5WlhSMWNtNGdZMjl0WW1sdVpXUTdYRzU5TzF4dVhHNHZLbHh1SUNBZ0lFTnlaV0YwWlNCaElHWjFibU4wYVc5dUlITjBjbWx1WjF4dVhHNGdJQ0FnSnpJd2NIZ25MQ0FuZEhKaGJuTnNZWFJsSnlBdFBpQW5kSEpoYm5Oc1lYUmxLREl3Y0hncEoxeHVYRzRnSUNBZ1FIQmhjbUZ0SUZ0emRISnBibWRkWEc0Z0lDQWdRSEJoY21GdElGdHpkSEpwYm1kZFhHNGdJQ0FnUUhKbGRIVnliaUJiYzNSeWFXNW5YVnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JqY21WaGRHVkdkVzVqZEdsdmJsTjBjbWx1WnlBOUlDaDJZV3gxWlN3Z2NISmxabWw0S1NBOVBpQmdKSHR3Y21WbWFYaDlLQ1I3ZG1Gc2RXVjlLV0E3WEc1Y2JpOHFYRzRnSUNBZ1IyVnVaWEpoZEdVZ1kzVnljbVZ1ZENCMGFXMWxjM1JoYlhCY2JpQWdJQ0JjYmlBZ0lDQkFjbVYwZFhKdUlGdDBhVzFsYzNSaGJYQmRPaUJEZFhKeVpXNTBJRlZPU1ZnZ2RHbHRaWE4wWVcxd1hHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHTjFjbkpsYm5SVWFXMWxJRDBnU0VGVFgxQkZVa1pQVWsxQlRrTkZYMDVQVnlBL0lDZ3BJRDArSUhCbGNtWnZjbTFoYm1ObExtNXZkeWdwSURvZ0tDa2dQVDRnYm1WM0lFUmhkR1VvS1M1blpYUlVhVzFsS0NrN1hHNWNiaThxWEc0Z0lDQWdVM0JzYVhRZ1lTQjJZV3gxWlNCcGJuUnZJR0VnZG1Gc2RXVXZkVzVwZENCdlltcGxZM1JjYmlBZ0lDQmNiaUFnSUNBZ0lDQWdYQ0l5TURCd2VGd2lJQzArSUhzZ2RtRnNkV1U2SURJd01Dd2dkVzVwZERvZ1hDSndlRndpSUgxY2JpQWdJQ0FnSUNBZ1hHNGdJQ0FnUUhCaGNtRnRJRnR6ZEhKcGJtZGRPaUJXWVd4MVpTQjBieUJ6Y0d4cGRGeHVJQ0FnSUVCeVpYUjFjbTRnVzI5aWFtVmpkRjA2SUU5aWFtVmpkQ0IzYVhSb0lIWmhiSFZsSUdGdVpDQjFibWwwSUhCeWIzQnpYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR1pwYm1SV1lXeDFaVUZ1WkZWdWFYUWdQU0FvZG1Gc2RXVXBJRDArSUh0Y2JpQWdJQ0JwWmlBb2RtRnNkV1V1YldGMFkyZ3BJSHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdjM0JzYVhSV1lXeDFaU0E5SUhaaGJIVmxMbTFoZEdOb0tDOG9MVDljWEdRcVhGd3VQMXhjWkNvcEtDNHFLUzhwTzF4dVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IyWVd4MVpUb2djR0Z5YzJWR2JHOWhkQ2h6Y0d4cGRGWmhiSFZsV3pGZEtTeGNiaUFnSUNBZ0lDQWdJQ0FnSUhWdWFYUTZJQ0J6Y0d4cGRGWmhiSFZsV3pKZFhHNGdJQ0FnSUNBZ0lIMDdYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhzZ2RtRnNkV1VnZlR0Y2JpQWdJQ0I5WEc1OU8xeHVYRzR2S2x4dUlDQWdJRk53YkdsMElHTnZiRzl5SUhOMGNtbHVaeUJwYm5SdklHMWhjQ0J2WmlCamIyeHZjaUJ3Y205d1pYSjBhV1Z6WEc1Y2JpQWdJQ0JjSW5KblltRW9NalUxTENBeU5UVXNJREkxTlN3Z01DbGNJaXdnVzF3aVVtVmtYQ0lzSUNkSGNtVmxibHdpTENCY0lrSnNkV1ZjSWl3Z1hDSkJiSEJvWVZ3aVhWeHVYRzRnSUNBZ2V5QlNaV1E2SURJMU5TNHVMaUI5WEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdkbGRFTnZiRzl5Vm1Gc2RXVnpJRDBnS0haaGJIVmxMQ0JqYjJ4dmNsUmxjbTF6S1NBOVBpQjdYRzRnSUNBZ1kyOXVjM1FnYm5WdFEyOXNiM0pVWlhKdGN5QTlJR052Ykc5eVZHVnliWE11YkdWdVozUm9PMXh1SUNBZ0lHTnZibk4wSUdOdmJHOXlWbUZzZFdWeklEMGdlMzA3WEc0Z0lDQWdZMjl1YzNRZ1kyOXNiM0p6SUQwZ2MzQnNhWFJEYjIxdFlVUmxiR2x0YVhSbFpDaG5aWFJXWVd4MVpVWnliMjFHZFc1amRHbHZibE4wY21sdVp5aDJZV3gxWlNrcE8xeHVYRzRnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQnVkVzFEYjJ4dmNsUmxjbTF6T3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnWTI5c2IzSldZV3gxWlhOYlkyOXNiM0pVWlhKdGMxdHBYVjBnUFNBb1kyOXNiM0p6VzJsZElDRTlQU0IxYm1SbFptbHVaV1FwSUQ4Z1kyOXNiM0p6VzJsZElEb2dNVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnlaWFIxY200Z1kyOXNiM0pXWVd4MVpYTTdYRzU5TzF4dVhHNHZLbHh1SUNBZ0lFZGxkQ0IyWVd4MVpTQm1jbTl0SUdaMWJtTjBhVzl1SUhOMGNtbHVaMXh1WEc0Z0lDQWdYQ0owY21GdWMyeGhkR1ZZS0RJd2NIZ3BYQ0lnTFQ0Z1hDSXlNSEI0WENKY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ1oyVjBWbUZzZFdWR2NtOXRSblZ1WTNScGIyNVRkSEpwYm1jZ1BTQW9kbUZzZFdVcElEMCtJSFpoYkhWbExuTjFZbk4wY21sdVp5aDJZV3gxWlM1cGJtUmxlRTltS0Njb0p5a2dLeUF4TENCMllXeDFaUzVzWVhOMFNXNWtaWGhQWmlnbktTY3BLVHRjYmx4dUx5cGNiaUFnSUNCRGFHVmpheUJwWmlCMGQyOGdiMkpxWldOMGN5Qm9ZWFpsSUdOb1lXNW5aV1FnWm5KdmJTQmxZV05vSUc5MGFHVnlYRzRnSUNBZ1hHNGdJQ0FnUUhCaGNtRnRJRnR2WW1wbFkzUmRPaUJKYm5CMWRDQkJYRzRnSUNBZ1FIQmhjbUZ0SUZ0dlltcGxZM1JkT2lCSmJuQjFkQ0JDWEc0Z0lDQWdRSEpsZEhWeWJpQmJZbTl2YkdWaGJsMDZJRlJ5ZFdVZ2FXWWdaR2xtWm1WeVpXNTBYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR2hoYzBOb1lXNW5aV1FnUFNBb1lTd2dZaWtnUFQ0Z2UxeHVJQ0FnSUd4bGRDQmphR0Z1WjJWa0lEMGdabUZzYzJVN1hHNWNiaUFnSUNCbWIzSWdLR3hsZENCclpYa2dhVzRnWVNrZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvWVM1b1lYTlBkMjVRY205d1pYSjBlU2hyWlhrcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9hR0Z6VUhKdmNHVnlkSGtvWWl3Z2EyVjVLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDaGhXMnRsZVYwZ0lUMDlJR0piYTJWNVhTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamFHRnVaMlZrSUQwZ2RISjFaVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTm9ZVzVuWldRZ1BTQjBjblZsTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjbVYwZFhKdUlHTm9ZVzVuWldRN1hHNTlPMXh1WEc0dktseHVJQ0FnSUVOb1pXTnJJR2xtSUc5aWFtVmpkQ0JvWVhNZ2NISnZjR1Z5ZEhrZ1lXNWtJR2wwSUdsemJpZDBJSFZ1WkdWbWFXNWxaRnh1WEc0Z0lDQWdRSEJoY21GdElGdHZZbXBsWTNSZFhHNGdJQ0FnUUhCaGNtRnRJRnR6ZEhKcGJtZGRYRzRnSUNBZ1FISmxkSFZ5YmlCYlltOXZiR1ZoYmwxY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2FHRnpVSEp2Y0dWeWRIa2dQU0FvYjJKcVpXTjBMQ0J3Y205d1pYSjBlVTVoYldVcElEMCtJRzlpYW1WamRDNW9ZWE5QZDI1UWNtOXdaWEowZVNod2NtOXdaWEowZVU1aGJXVXBJQ1ltSUc5aWFtVmpkRnR3Y205d1pYSjBlVTVoYldWZElDRTlQU0IxYm1SbFptbHVaV1E3WEc1Y2JpOHFYRzRnSUNBZ1NYTWdkWFJwYkhNZ2RtRnlJR0Z1SUdGeWNtRjVJRDhnWEc0Z0lDQWdYRzRnSUNBZ1FIQmhjbUZ0T2lCV1lYSnBZV0pzWlNCMGJ5QjBaWE4wWEc0Z0lDQWdRSEpsZEhWeWJpQmJZbTl2YkdWaGJsMDZJRkpsZEhWeWJuTWdkSEoxWlNCcFppQjFkR2xzY3k1MllYSlVlWEJsSUQwOVBTQW5RWEp5WVhrblhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHbHpRWEp5WVhrZ1BTQW9ZWEp5S1NBOVBpQjJZWEpVZVhCbEtHRnljaWtnUFQwOUlDZEJjbkpoZVNjN1hHNWNiaThxWEc0Z0lDQWdTWE1nZFhScGJITWdkbUZ5SUdFZ1puVnVZM1JwYjI0Z1B5QmNiaUFnSUNCY2JpQWdJQ0JBY0dGeVlXMDZJRlpoY21saFlteGxJSFJ2SUhSbGMzUmNiaUFnSUNCQWNtVjBkWEp1SUZ0aWIyOXNaV0Z1WFRvZ1VtVjBkWEp1Y3lCMGNuVmxJR2xtSUhWMGFXeHpMblpoY2xSNWNHVWdQVDA5SUNkR2RXNWpkR2x2YmlkY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2FYTkdkVzVqSUQwZ0tHOWlhaWtnUFQ0Z2RtRnlWSGx3WlNodlltb3BJRDA5UFNBblJuVnVZM1JwYjI0bk8xeHVYRzR2S2x4dUlDQWdJRWx6SUhWMGFXeHpJSFpoY2lCaElHNTFiV0psY2o5Y2JpQWdJQ0JjYmlBZ0lDQkFjR0Z5WVcwNklGWmhjbWxoWW14bElIUnZJSFJsYzNSY2JpQWdJQ0JBY21WMGRYSnVJRnRpYjI5c1pXRnVYVG9nVW1WMGRYSnVjeUIwY25WbElHbG1JSFI1Y0dWdlppQTlQVDBnSjI1MWJXSmxjaWRjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYVhOT2RXMGdQU0FvYm5WdEtTQTlQaUIwZVhCbGIyWWdiblZ0SUQwOVBTQW5iblZ0WW1WeUp6dGNibHh1THlwY2JpQWdJQ0JKY3lCMWRHbHNjeUIyWVhJZ1lXNGdiMkpxWldOMFAxeHVJQ0FnSUZ4dUlDQWdJRUJ3WVhKaGJUb2dWbUZ5YVdGaWJHVWdkRzhnZEdWemRGeHVJQ0FnSUVCeVpYUjFjbTRnVzJKdmIyeGxZVzVkT2lCU1pYUjFjbTV6SUhSeWRXVWdhV1lnZEhsd1pXOW1JRDA5UFNBbmIySnFaV04wSjF4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCcGMwOWlhaUE5SUNodlltb3BJRDArSUhSNWNHVnZaaUJ2WW1vZ1BUMDlJQ2R2WW1wbFkzUW5PMXh1WEc0dktseHVJQ0FnSUVseklIVjBhV3h6SUdFZ2NtVnNZWFJwZG1VZ2RtRnNkV1VnWVhOemFXZHViV1Z1ZEQ5Y2JpQWdJQ0JjYmlBZ0lDQkFjR0Z5WVcwZ1czTjBjbWx1WjEwNklGWmhjbWxoWW14bElIUnZJSFJsYzNSY2JpQWdJQ0JBY21WMGRYSnVJRnRpYjI5c1pXRnVYVG9nU1dZZ2RYUnBiSE1nYkc5dmEzTWdiR2xyWlNCaElISmxiR0YwYVhabElIWmhiSFZsSUdGemMybG5ibTFsYm5SY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2FYTlNaV3hoZEdsMlpWWmhiSFZsSUQwZ0tIWmhiSFZsS1NBOVBpQW9kbUZzZFdVZ0ppWWdkbUZzZFdVdWFXNWtaWGhQWmlBbUppQjJZV3gxWlM1cGJtUmxlRTltS0NjOUp5a2dQaUF3S1NBL0lIUnlkV1VnT2lCbVlXeHpaVHRjYmx4dUx5cGNiaUFnSUNCSmN5QjFkR2xzY3lCMllYSWdZU0J6ZEhKcGJtY2dQeUJjYmlBZ0lDQmNiaUFnSUNCQWNHRnlZVzA2SUZaaGNtbGhZbXhsSUhSdklIUmxjM1JjYmlBZ0lDQkFjbVYwZFhKdUlGdGliMjlzWldGdVhUb2dVbVYwZFhKdWN5QjBjblZsSUdsbUlIUjVjR1Z2WmlCemRISWdQVDA5SUNkemRISnBibWNuWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdselUzUnlhVzVuSUQwZ0tITjBjaWtnUFQ0Z2RIbHdaVzltSUhOMGNpQTlQVDBnSjNOMGNtbHVaeWM3WEc1Y2JpOHFYRzRnSUNBZ1FIQmhjbUZ0SUZ0emRISnBibWNnZkh3Z1RtOWtaVXhwYzNSZE9seHVJQ0FnSUNBZ0lDQkpaaUJ6ZEhKcGJtY3NJSFJ5WldGMFpXUWdZWE1nYzJWc1pXTjBiM0l1WEc0Z0lDQWdJQ0FnSUVsbUlHNXZkQ3dnZEhKbFlYUmxaQ0JoY3lCd2NtVmxlR2x6ZEdsdVp5Qk9iMlJsVEdsemRGeHVYRzRnSUNBZ1FISmxkSFZ5YmlCYlFYSnlZWGxkWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUhObGJHVmpkRVJ2YlNBOUlDaHpaV3hsWTNSdmNpa2dQVDRnZTF4dUlDQWdJR052Ym5OMElHNXZaR1Z6SUQwZ0tIUjVjR1Z2WmlCelpXeGxZM1J2Y2lBOVBUMGdKM04wY21sdVp5Y3BJRDhnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNrRnNiQ2h6Wld4bFkzUnZjaWtnT2lCelpXeGxZM1J2Y2p0Y2JpQWdJQ0J5WlhSMWNtNGdLRzV2WkdWekxteGxibWQwYUNrZ1B5QmJYUzV6YkdsalpTNWpZV3hzS0c1dlpHVnpLU0E2SUZ0ZExuQjFjMmdvYm05a1pYTXBPMXh1ZlR0Y2JseHVMeXBjYmlBZ0lDQlRjR3hwZENCamIyMXRZUzFrWld4cGJXbDBaV1FnYzNSeWFXNW5YRzVjYmlBZ0lDQmNJbVp2Ynl4aVlYSmNJaUF0UGlCYlhDSm1iMjljSWl3Z1hDSmlZWEpjSWwxY2JseHVJQ0FnSUVCd1lYSmhiU0JiYzNSeWFXNW5YVnh1SUNBZ0lFQnlaWFIxY200Z1cyRnljbUY1WFZ4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCemNHeHBkRU52YlcxaFJHVnNhVzFwZEdWa0lEMGdLSFpoYkhWbEtTQTlQaUJwYzFOMGNtbHVaeWgyWVd4MVpTa2dQeUIyWVd4MVpTNXpjR3hwZENndkxGeGNjeW92S1NBNklGdDJZV3gxWlYwN1hHNWNiaThxWEc0Z0lDQWdVM0JzYVhRZ2MzQmhZMlV0WkdWc2FXMXBkR1ZrSUhOMGNtbHVaMXh1WEc0Z0lDQWdYQ0ptYjI4Z1ltRnlYQ0lnTFQ0Z1cxd2labTl2WENJc0lGd2lZbUZ5WENKZFhHNWNiaUFnSUNCQWNHRnlZVzBnVzNOMGNtbHVaMTFjYmlBZ0lDQkFjbVYwZFhKdUlGdGhjbkpoZVYxY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2MzQnNhWFJUY0dGalpVUmxiR2x0YVhSbFpDQTlJQ2gyWVd4MVpTa2dQVDRnYVhOVGRISnBibWNvZG1Gc2RXVXBJRDhnZG1Gc2RXVXVjM0JzYVhRb0p5QW5LU0E2SUZ0MllXeDFaVjA3WEc1Y2JpOHFYRzRnSUNBZ1EyOXVkbVZ5ZENCdWRXMWlaWElnZEc4Z2VDQmtaV05wYldGc0lIQnNZV05sYzF4dVhHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkWEc0Z0lDQWdRSEpsZEhWeWJpQmJiblZ0WW1WeVhWeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQjBiMFJsWTJsdFlXd2dQU0FvYm5WdExDQndjbVZqYVhOcGIyNGdQU0F5S1NBOVBpQjdYRzRnSUNBZ2NISmxZMmx6YVc5dUlEMGdNVEFnS2lvZ2NISmxZMmx6YVc5dU8xeHVJQ0FnSUhKbGRIVnliaUJOWVhSb0xuSnZkVzVrS0c1MWJTQXFJSEJ5WldOcGMybHZiaWtnTHlCd2NtVmphWE5wYjI0N1hHNTlPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL3V0aWxzLmpzXG4gKiogbW9kdWxlIGlkID0gMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9kZWZhdWx0UHJvcHMgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RlZmF1bHQtcHJvcHMnKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGRlZmF1bHRQcm9wczogX2RlZmF1bHRQcm9wcy5vcGFjaXR5XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5aGJIQm9ZUzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdhMEpCUldVN1FVRkRXQ3gxUTBGRVZ5SXNJbVpwYkdVaU9pSmhiSEJvWVM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRDOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2V5QnZjR0ZqYVhSNUlIMGdabkp2YlNBbkxpOXpaWFIwYVc1bmN5OWtaV1poZFd4MExYQnliM0J6Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2UxeHVJQ0FnSUdSbFptRjFiSFJRY205d2N6b2diM0JoWTJsMGVWeHVmVHNpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvYWxwaGEuanNcbiAqKiBtb2R1bGUgaWQgPSAyMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3VuaXQgPSByZXF1aXJlKCcuL3VuaXQnKTtcblxudmFyIF91bml0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3VuaXQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIHVuaXQ6ICdkZWcnLFxuICAgICAgICB0eXBlOiBfdW5pdDIuZGVmYXVsdFxuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTloYm1kc1pTNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN096czdPMnRDUVVWbE8wRkJRMWdzYTBKQlFXTTdRVUZEVml4alFVRk5MRXRCUVU0N1FVRkRRU3cwUWtGR1ZUdExRVUZrSWl3aVptbHNaU0k2SW1GdVoyeGxMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwTDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0IxYm1sMFZIbHdaU0JtY205dElDY3VMM1Z1YVhRbk8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQjdYRzRnSUNBZ1pHVm1ZWFZzZEZCeWIzQnpPaUI3WEc0Z0lDQWdJQ0FnSUhWdWFYUTZJQ2RrWldjbkxGeHVJQ0FnSUNBZ0lDQjBlWEJsT2lCMWJtbDBWSGx3WlZ4dUlDQWdJSDFjYm4wN0lsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2FuZ2xlLmpzXG4gKiogbW9kdWxlIGlkID0gMjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9yZ2IgPSByZXF1aXJlKCcuL3JnYicpO1xuXG52YXIgX3JnYjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZ2IpO1xuXG52YXIgX2hzbCA9IHJlcXVpcmUoJy4vaHNsJyk7XG5cbnZhciBfaHNsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hzbCk7XG5cbnZhciBfaGV4ID0gcmVxdWlyZSgnLi9oZXgnKTtcblxudmFyIF9oZXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGV4KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGNvbG9yVHlwZXMgPSBbX3JnYjIuZGVmYXVsdCwgX2hzbDIuZGVmYXVsdCwgX2hleDIuZGVmYXVsdF07XG52YXIgbnVtQ29sb3JUeXBlcyA9IGNvbG9yVHlwZXMubGVuZ3RoO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgZGVmYXVsdFByb3BzOiBfZXh0ZW5kcyh7fSwgX3JnYjIuZGVmYXVsdC5kZWZhdWx0UHJvcHMsIF9oc2wyLmRlZmF1bHQuZGVmYXVsdFByb3BzKSxcblxuICAgIHRlc3Q6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gX3JnYjIuZGVmYXVsdC50ZXN0KHZhbHVlKSB8fCBfaGV4Mi5kZWZhdWx0LnRlc3QodmFsdWUpIHx8IF9oc2wyLmRlZmF1bHQudGVzdCh2YWx1ZSk7XG4gICAgfSxcblxuICAgIHNwbGl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1Db2xvclR5cGVzOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChjb2xvclR5cGVzW2ldLnRlc3QodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbG9yVHlwZXNbaV0uc3BsaXQodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlcy5SZWQgIT09IHVuZGVmaW5lZCA/IF9yZ2IyLmRlZmF1bHQuY29tYmluZSh2YWx1ZXMpIDogX2hzbDIuZGVmYXVsdC5jb21iaW5lKHZhbHVlcyk7XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OWpiMnh2Y2k1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3T3pzN096czdPenM3T3pzN096dEJRVWxCTEVsQlFVMHNZVUZCWVN3MlEwRkJZanRCUVVOT0xFbEJRVTBzWjBKQlFXZENMRmRCUVZjc1RVRkJXRHM3YTBKQlJWQTdRVUZEV0N3clFrRkJiVUlzWTBGQlNTeFpRVUZLTEVWQlFYRkNMR05CUVVrc1dVRkJTaXhEUVVGNFF6czdRVUZGUVN4VlFVRk5MRlZCUVVNc1MwRkJSRHRsUVVGWExHTkJRVWtzU1VGQlNpeERRVUZUTEV0QlFWUXNTMEZCYlVJc1kwRkJTU3hKUVVGS0xFTkJRVk1zUzBGQlZDeERRVUZ1UWl4SlFVRnpReXhqUVVGSkxFbEJRVW9zUTBGQlV5eExRVUZVTEVOQlFYUkRPMHRCUVZnN08wRkJSVTRzVjBGQlR5eFZRVUZETEV0QlFVUXNSVUZCVnp0QlFVTmtMR0ZCUVVzc1NVRkJTU3hKUVVGSkxFTkJRVW9zUlVGQlR5eEpRVUZKTEdGQlFVb3NSVUZCYlVJc1IwRkJia01zUlVGQmQwTTdRVUZEY0VNc1owSkJRVWtzVjBGQlZ5eERRVUZZTEVWQlFXTXNTVUZCWkN4RFFVRnRRaXhMUVVGdVFpeERRVUZLTEVWQlFTdENPMEZCUXpOQ0xIVkNRVUZQTEZkQlFWY3NRMEZCV0N4RlFVRmpMRXRCUVdRc1EwRkJiMElzUzBGQmNFSXNRMEZCVUN4RFFVUXlRanRoUVVFdlFqdFRRVVJLTzB0QlJFYzdPMEZCVVZBc1lVRkJVeXhWUVVGRExFMUJRVVE3WlVGQldTeE5RVUZETEVOQlFVOHNSMEZCVUN4TFFVRmxMRk5CUVdZc1IwRkJORUlzWTBGQlNTeFBRVUZLTEVOQlFWa3NUVUZCV2l4RFFVRTNRaXhIUVVGdFJDeGpRVUZKTEU5QlFVb3NRMEZCV1N4TlFVRmFMRU5CUVc1RU8wdEJRVm9pTENKbWFXeGxJam9pWTI5c2IzSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFF2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSEpuWWlCbWNtOXRJQ2N1TDNKbllpYzdYRzVwYlhCdmNuUWdhSE5zSUdaeWIyMGdKeTR2YUhOc0p6dGNibWx0Y0c5eWRDQm9aWGdnWm5KdmJTQW5MaTlvWlhnbk8xeHVYRzVqYjI1emRDQmpiMnh2Y2xSNWNHVnpJRDBnVzNKbllpd2dhSE5zTENCb1pYaGRPMXh1WTI5dWMzUWdiblZ0UTI5c2IzSlVlWEJsY3lBOUlHTnZiRzl5Vkhsd1pYTXViR1Z1WjNSb08xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQjdYRzRnSUNBZ1pHVm1ZWFZzZEZCeWIzQnpPaUI3SUM0dUxuSm5ZaTVrWldaaGRXeDBVSEp2Y0hNc0lDNHVMbWh6YkM1a1pXWmhkV3gwVUhKdmNITWdmU3hjYmx4dUlDQWdJSFJsYzNRNklDaDJZV3gxWlNrZ1BUNGdjbWRpTG5SbGMzUW9kbUZzZFdVcElIeDhJR2hsZUM1MFpYTjBLSFpoYkhWbEtTQjhmQ0JvYzJ3dWRHVnpkQ2gyWVd4MVpTa3NYRzVjYmlBZ0lDQnpjR3hwZERvZ0tIWmhiSFZsS1NBOVBpQjdYRzRnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnYm5WdFEyOXNiM0pVZVhCbGN6c2dhU3NyS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb1kyOXNiM0pVZVhCbGMxdHBYUzUwWlhOMEtIWmhiSFZsS1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCamIyeHZjbFI1Y0dWelcybGRMbk53YkdsMEtIWmhiSFZsS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDBzWEc1Y2JpQWdJQ0JqYjIxaWFXNWxPaUFvZG1Gc2RXVnpLU0E5UGlBb2RtRnNkV1Z6TGxKbFpDQWhQVDBnZFc1a1pXWnBibVZrS1NBL0lISm5ZaTVqYjIxaWFXNWxLSFpoYkhWbGN5a2dPaUJvYzJ3dVkyOXRZbWx1WlNoMllXeDFaWE1wWEc1OU8xeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9jb2xvci5qc1xuICoqIG1vZHVsZSBpZCA9IDI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxudmFyIEZMT0FUX1JFR0VYID0gLygtKT8oXFxkW1xcZFxcLl0qKS9nO1xudmFyIGdlbmVyYXRlVG9rZW4gPSBmdW5jdGlvbiAodG9rZW4pIHtcbiAgICByZXR1cm4gJyR7JyArIHRva2VuICsgJ30nO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuXG4gICAgdGVzdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBtYXRjaGVzID0gdmFsdWUubWF0Y2goRkxPQVRfUkVHRVgpO1xuICAgICAgICByZXR1cm4gKDAsIF91dGlscy5pc0FycmF5KShtYXRjaGVzKSAmJiBtYXRjaGVzLmxlbmd0aCA+IDE7XG4gICAgfSxcblxuICAgIHRlbXBsYXRlOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIGNvdW50ZXIgPSAwO1xuICAgICAgICByZXR1cm4gdmFsdWUucmVwbGFjZShGTE9BVF9SRUdFWCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGdlbmVyYXRlVG9rZW4oY291bnRlcisrKTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIHNwbGl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIHNwbGl0VmFsdWUgPSB7fTtcblxuICAgICAgICB2YWx1ZS5tYXRjaChGTE9BVF9SRUdFWCkuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGkpIHtcbiAgICAgICAgICAgIHJldHVybiBzcGxpdFZhbHVlW2ldID0gdmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBzcGxpdFZhbHVlO1xuICAgIH0sXG5cbiAgICBjb21iaW5lOiBmdW5jdGlvbiAodmFsdWVzLCB0ZW1wbGF0ZSkge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZSA9IHRlbXBsYXRlLnJlcGxhY2UoZ2VuZXJhdGVUb2tlbihrZXkpLCB2YWx1ZXNba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgfVxuXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5amIyMXdiR1Y0TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenRCUVVWQkxFbEJRVTBzWTBGQll5eHJRa0ZCWkR0QlFVTk9MRWxCUVUwc1owSkJRV2RDTEZWQlFVTXNTMEZCUkR0WFFVRlhMRTlCUVU4c1MwRkJVQ3hIUVVGbExFZEJRV1k3UTBGQldEczdhMEpCUlZBN08wRkJSVmdzVlVGQlRTeFZRVUZETEV0QlFVUXNSVUZCVnp0QlFVTmlMRmxCUVUwc1ZVRkJWU3hOUVVGTkxFdEJRVTRzUTBGQldTeFhRVUZhTEVOQlFWWXNRMEZFVHp0QlFVVmlMR1ZCUVZFc2IwSkJRVkVzVDBGQlVpeExRVUZ2UWl4UlFVRlJMRTFCUVZJc1IwRkJhVUlzUTBGQmFrSXNRMEZHWmp0TFFVRllPenRCUVV0T0xHTkJRVlVzVlVGQlF5eExRVUZFTEVWQlFWYzdRVUZEYWtJc1dVRkJTU3hWUVVGVkxFTkJRVllzUTBGRVlUdEJRVVZxUWl4bFFVRlBMRTFCUVUwc1QwRkJUaXhEUVVGakxGZEJRV1FzUlVGQk1rSTdiVUpCUVUwc1kwRkJZeXhUUVVGa08xTkJRVTRzUTBGQmJFTXNRMEZHYVVJN1MwRkJXRHM3UVVGTFZpeFhRVUZQTEZWQlFVTXNTMEZCUkN4RlFVRlhPMEZCUTJRc1dVRkJUU3hoUVVGaExFVkJRV0lzUTBGRVVUczdRVUZIWkN4alFVRk5MRXRCUVU0c1EwRkJXU3hYUVVGYUxFVkJRWGxDTEU5QlFYcENMRU5CUVdsRExGVkJRVU1zUzBGQlJDeEZRVUZSTEVOQlFWSTdiVUpCUVdNc1YwRkJWeXhEUVVGWUxFbEJRV2RDTEV0QlFXaENPMU5CUVdRc1EwRkJha01zUTBGSVl6czdRVUZMWkN4bFFVRlBMRlZCUVZBc1EwRk1ZenRMUVVGWU96dEJRVkZRTEdGQlFWTXNWVUZCUXl4TlFVRkVMRVZCUVZNc1VVRkJWQ3hGUVVGelFqdEJRVU16UWl4aFFVRkxMRWxCUVVrc1IwRkJTaXhKUVVGWExFMUJRV2hDTEVWQlFYZENPMEZCUTNCQ0xHZENRVUZKTEU5QlFVOHNZMEZCVUN4RFFVRnpRaXhIUVVGMFFpeERRVUZLTEVWQlFXZERPMEZCUXpWQ0xESkNRVUZYTEZOQlFWTXNUMEZCVkN4RFFVRnBRaXhqUVVGakxFZEJRV1FzUTBGQmFrSXNSVUZCY1VNc1QwRkJUeXhIUVVGUUxFTkJRWEpETEVOQlFWZ3NRMEZFTkVJN1lVRkJhRU03VTBGRVNqczdRVUZOUVN4bFFVRlBMRkZCUVZBc1EwRlFNa0k3UzBGQmRFSWlMQ0ptYVd4bElqb2lZMjl0Y0d4bGVDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdleUJwYzBGeWNtRjVJSDBnWm5KdmJTQW5MaTR2YVc1akwzVjBhV3h6Snp0Y2JseHVZMjl1YzNRZ1JreFBRVlJmVWtWSFJWZ2dQU0F2S0MwcFB5aGNYR1JiWEZ4a1hGd3VYU29wTDJjN1hHNWpiMjV6ZENCblpXNWxjbUYwWlZSdmEyVnVJRDBnS0hSdmEyVnVLU0E5UGlBbkpIc25JQ3NnZEc5clpXNGdLeUFuZlNjN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElIdGNibHh1SUNBZ0lIUmxjM1E2SUNoMllXeDFaU2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCdFlYUmphR1Z6SUQwZ2RtRnNkV1V1YldGMFkyZ29Sa3hQUVZSZlVrVkhSVmdwTzF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnS0dselFYSnlZWGtvYldGMFkyaGxjeWtnSmlZZ2JXRjBZMmhsY3k1c1pXNW5kR2dnUGlBeEtUdGNiaUFnSUNCOUxGeHVYRzRnSUNBZ2RHVnRjR3hoZEdVNklDaDJZV3gxWlNrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0JzWlhRZ1kyOTFiblJsY2lBOUlEQTdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjJZV3gxWlM1eVpYQnNZV05sS0VaTVQwRlVYMUpGUjBWWUxDQW9LU0E5UGlCblpXNWxjbUYwWlZSdmEyVnVLR052ZFc1MFpYSXJLeWtwTzF4dUlDQWdJSDBzWEc1Y2JpQWdJQ0J6Y0d4cGREb2dLSFpoYkhWbEtTQTlQaUI3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJSE53YkdsMFZtRnNkV1VnUFNCN2ZUdGNibHh1SUNBZ0lDQWdJQ0IyWVd4MVpTNXRZWFJqYUNoR1RFOUJWRjlTUlVkRldDa3VabTl5UldGamFDZ29kbUZzZFdVc0lHa3BJRDArSUhOd2JHbDBWbUZzZFdWYmFWMGdQU0IyWVd4MVpTazdYRzVjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSE53YkdsMFZtRnNkV1U3WEc0Z0lDQWdmU3hjYmx4dUlDQWdJR052YldKcGJtVTZJQ2gyWVd4MVpYTXNJSFJsYlhCc1lYUmxLU0E5UGlCN1hHNGdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHdGxlU0JwYmlCMllXeDFaWE1wSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMllXeDFaWE11YUdGelQzZHVVSEp2Y0dWeWRIa29hMlY1S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUmxiWEJzWVhSbElEMGdkR1Z0Y0d4aGRHVXVjbVZ3YkdGalpTaG5aVzVsY21GMFpWUnZhMlZ1S0d0bGVTa3NJSFpoYkhWbGMxdHJaWGxkS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMFpXMXdiR0YwWlR0Y2JpQWdJQ0I5WEc1Y2JuMDdJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9jb21wbGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9yZ2IgPSByZXF1aXJlKCcuL3JnYicpO1xuXG52YXIgX3JnYjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZ2IpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgZGVmYXVsdFByb3BzOiBfcmdiMi5kZWZhdWx0LmRlZmF1bHRQcm9wcyxcblxuICAgIHRlc3Q6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgJiYgdmFsdWUuaW5kZXhPZignIycpID4gLTE7XG4gICAgfSxcblxuICAgIHNwbGl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIHIgPSB1bmRlZmluZWQsXG4gICAgICAgICAgICBnID0gdW5kZWZpbmVkLFxuICAgICAgICAgICAgYiA9IHVuZGVmaW5lZDtcblxuICAgICAgICAvLyBJZiB3ZSBoYXZlIDYgY2hhcmFjdGVycywgaWUgI0ZGMDAwMFxuICAgICAgICBpZiAodmFsdWUubGVuZ3RoID4gNCkge1xuICAgICAgICAgICAgciA9IHZhbHVlLnN1YnN0cigxLCAyKTtcbiAgICAgICAgICAgIGcgPSB2YWx1ZS5zdWJzdHIoMywgMik7XG4gICAgICAgICAgICBiID0gdmFsdWUuc3Vic3RyKDUsIDIpO1xuXG4gICAgICAgICAgICAvLyBPciB3ZSBoYXZlIDMgY2hhcmFjdGVycywgaWUgI0YwMFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHIgPSB2YWx1ZS5zdWJzdHIoMSwgMSk7XG4gICAgICAgICAgICAgICAgZyA9IHZhbHVlLnN1YnN0cigyLCAxKTtcbiAgICAgICAgICAgICAgICBiID0gdmFsdWUuc3Vic3RyKDMsIDEpO1xuICAgICAgICAgICAgICAgIHIgKz0gcjtcbiAgICAgICAgICAgICAgICBnICs9IGc7XG4gICAgICAgICAgICAgICAgYiArPSBiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBSZWQ6IHBhcnNlSW50KHIsIDE2KSxcbiAgICAgICAgICAgIEdyZWVuOiBwYXJzZUludChnLCAxNiksXG4gICAgICAgICAgICBCbHVlOiBwYXJzZUludChiLCAxNiksXG4gICAgICAgICAgICBBbHBoYTogMVxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICBjb21iaW5lOiBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgIHJldHVybiBfcmdiMi5kZWZhdWx0LmNvbWJpbmUodmFsdWVzKTtcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5b1pYZ3Vhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenRyUWtGRlpUdEJRVU5ZTEd0Q1FVRmpMR05CUVVrc1dVRkJTanM3UVVGRlpDeFZRVUZOTEZWQlFVTXNTMEZCUkR0bFFVRlpMRk5CUVZNc1RVRkJUU3hQUVVGT0xFTkJRV01zUjBGQlpDeEpRVUZ4UWl4RFFVRkRMRU5CUVVRN1MwRkJNVU03TzBGQlJVNHNWMEZCVHl4VlFVRkRMRXRCUVVRc1JVRkJWenRCUVVOa0xGbEJRVWtzWVVGQlNqdFpRVUZQTEdGQlFWQTdXVUZCVlN4aFFVRldPenM3UVVGRVl5eFpRVWxXTEUxQlFVMHNUVUZCVGl4SFFVRmxMRU5CUVdZc1JVRkJhMEk3UVVGRGJFSXNaMEpCUVVrc1RVRkJUU3hOUVVGT0xFTkJRV0VzUTBGQllpeEZRVUZuUWl4RFFVRm9RaXhEUVVGS0xFTkJSR3RDTzBGQlJXeENMR2RDUVVGSkxFMUJRVTBzVFVGQlRpeERRVUZoTEVOQlFXSXNSVUZCWjBJc1EwRkJhRUlzUTBGQlNpeERRVVpyUWp0QlFVZHNRaXhuUWtGQlNTeE5RVUZOTEUxQlFVNHNRMEZCWVN4RFFVRmlMRVZCUVdkQ0xFTkJRV2hDTEVOQlFVbzdPenRCUVVoclFpeFRRVUYwUWl4TlFVMVBPMEZCUTBnc2IwSkJRVWtzVFVGQlRTeE5RVUZPTEVOQlFXRXNRMEZCWWl4RlFVRm5RaXhEUVVGb1FpeERRVUZLTEVOQlJFYzdRVUZGU0N4dlFrRkJTU3hOUVVGTkxFMUJRVTRzUTBGQllTeERRVUZpTEVWQlFXZENMRU5CUVdoQ0xFTkJRVW9zUTBGR1J6dEJRVWRJTEc5Q1FVRkpMRTFCUVUwc1RVRkJUaXhEUVVGaExFTkJRV0lzUlVGQlowSXNRMEZCYUVJc1EwRkJTaXhEUVVoSE8wRkJTVWdzY1VKQlFVc3NRMEZCVEN4RFFVcEhPMEZCUzBnc2NVSkJRVXNzUTBGQlRDeERRVXhITzBGQlRVZ3NjVUpCUVVzc1EwRkJUQ3hEUVU1SE8yRkJUbEE3TzBGQlpVRXNaVUZCVHp0QlFVTklMR2xDUVVGTExGTkJRVk1zUTBGQlZDeEZRVUZaTEVWQlFWb3NRMEZCVER0QlFVTkJMRzFDUVVGUExGTkJRVk1zUTBGQlZDeEZRVUZaTEVWQlFWb3NRMEZCVUR0QlFVTkJMR3RDUVVGTkxGTkJRVk1zUTBGQlZDeEZRVUZaTEVWQlFWb3NRMEZCVGp0QlFVTkJMRzFDUVVGUExFTkJRVkE3VTBGS1NpeERRVzVDWXp0TFFVRllPenRCUVRKQ1VDeGhRVUZUTEZWQlFVTXNUVUZCUkR0bFFVRlpMR05CUVVrc1QwRkJTaXhEUVVGWkxFMUJRVm83UzBGQldpSXNJbVpwYkdVaU9pSm9aWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhKbllpQm1jbTl0SUNjdUwzSm5ZaWM3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUh0Y2JpQWdJQ0JrWldaaGRXeDBVSEp2Y0hNNklISm5ZaTVrWldaaGRXeDBVSEp2Y0hNc1hHNWNiaUFnSUNCMFpYTjBPaUFvZG1Gc2RXVXBJRDArSUNoMllXeDFaU0FtSmlCMllXeDFaUzVwYm1SbGVFOW1LQ2NqSnlrZ1BpQXRNU2tzWEc1Y2JpQWdJQ0J6Y0d4cGREb2dLSFpoYkhWbEtTQTlQaUI3WEc0Z0lDQWdJQ0FnSUd4bGRDQnlMQ0JuTENCaU8xeHVYRzRnSUNBZ0lDQWdJQzh2SUVsbUlIZGxJR2hoZG1VZ05pQmphR0Z5WVdOMFpYSnpMQ0JwWlNBalJrWXdNREF3WEc0Z0lDQWdJQ0FnSUdsbUlDaDJZV3gxWlM1c1pXNW5kR2dnUGlBMEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCeUlEMGdkbUZzZFdVdWMzVmljM1J5S0RFc0lESXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1p5QTlJSFpoYkhWbExuTjFZbk4wY2lnekxDQXlLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHSWdQU0IyWVd4MVpTNXpkV0p6ZEhJb05Td2dNaWs3WEc1Y2JpQWdJQ0FnSUNBZ0x5OGdUM0lnZDJVZ2FHRjJaU0F6SUdOb1lYSmhZM1JsY25Nc0lHbGxJQ05HTURCY2JpQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSElnUFNCMllXeDFaUzV6ZFdKemRISW9NU3dnTVNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JuSUQwZ2RtRnNkV1V1YzNWaWMzUnlLRElzSURFcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWWlBOUlIWmhiSFZsTG5OMVluTjBjaWd6TENBeEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUhJZ0t6MGdjanRjYmlBZ0lDQWdJQ0FnSUNBZ0lHY2dLejBnWnp0Y2JpQWdJQ0FnSUNBZ0lDQWdJR0lnS3owZ1lqdGNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQlNaV1E2SUhCaGNuTmxTVzUwS0hJc0lERTJLU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lFZHlaV1Z1T2lCd1lYSnpaVWx1ZENobkxDQXhOaWtzWEc0Z0lDQWdJQ0FnSUNBZ0lDQkNiSFZsT2lCd1lYSnpaVWx1ZENoaUxDQXhOaWtzWEc0Z0lDQWdJQ0FnSUNBZ0lDQkJiSEJvWVRvZ01WeHVJQ0FnSUNBZ0lDQjlPMXh1SUNBZ0lIMHNYRzVjYmlBZ0lDQmpiMjFpYVc1bE9pQW9kbUZzZFdWektTQTlQaUJ5WjJJdVkyOXRZbWx1WlNoMllXeDFaWE1wWEc1OU95SmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9oZXguanNcbiAqKiBtb2R1bGUgaWQgPSAyNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2RlZmF1bHRQcm9wcyA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGVmYXVsdC1wcm9wcycpO1xuXG52YXIgX2RpY3Rpb25hcnkgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RpY3Rpb25hcnknKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIEh1ZToge1xuICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgbWF4OiAzNjBcbiAgICAgICAgfSxcbiAgICAgICAgU2F0dXJhdGlvbjogX2RlZmF1bHRQcm9wcy5wZXJjZW50LFxuICAgICAgICBMaWdodG5lc3M6IF9kZWZhdWx0UHJvcHMucGVyY2VudCxcbiAgICAgICAgQWxwaGE6IF9kZWZhdWx0UHJvcHMub3BhY2l0eVxuICAgIH0sXG5cbiAgICB0ZXN0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlICYmIHZhbHVlLmluZGV4T2YoJ2hzbCcpID4gLTE7XG4gICAgfSxcblxuICAgIHNwbGl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMuZ2V0Q29sb3JWYWx1ZXMpKHZhbHVlLCBfZGljdGlvbmFyeS5oc2wpO1xuICAgIH0sXG5cbiAgICBjb21iaW5lOiBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzLmNyZWF0ZUZ1bmN0aW9uU3RyaW5nKSgoMCwgX3V0aWxzLmNyZWF0ZURlbGltaXRlZCkodmFsdWVzLCBfZGljdGlvbmFyeS5oc2wsICcsICcsIDIpLCAnaHNsYScpO1xuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTlvYzJ3dWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096dHJRa0ZKWlR0QlFVTllMR3RDUVVGak8wRkJRMVlzWVVGQlN6dEJRVU5FTEdsQ1FVRkxMRU5CUVV3N1FVRkRRU3hwUWtGQlN5eEhRVUZNTzFOQlJrbzdRVUZKUVN4NVEwRk1WVHRCUVUxV0xIZERRVTVWTzBGQlQxWXNiME5CVUZVN1MwRkJaRHM3UVVGVlFTeFZRVUZOTEZWQlFVTXNTMEZCUkR0bFFVRlpMRk5CUVZNc1RVRkJUU3hQUVVGT0xFTkJRV01zUzBGQlpDeEpRVUYxUWl4RFFVRkRMRU5CUVVRN1MwRkJOVU03TzBGQlJVNHNWMEZCVHl4VlFVRkRMRXRCUVVRN1pVRkJWeXd5UWtGQlpTeExRVUZtTzB0QlFWZzdPMEZCUlZBc1lVRkJVeXhWUVVGRExFMUJRVVE3WlVGQldTeHBRMEZCY1VJc05FSkJRV2RDTEUxQlFXaENMRzFDUVVGclF5eEpRVUZzUXl4RlFVRjNReXhEUVVGNFF5eERRVUZ5UWl4RlFVRnBSU3hOUVVGcVJUdExRVUZhSWl3aVptbHNaU0k2SW1oemJDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdleUJ3WlhKalpXNTBMQ0J2Y0dGamFYUjVJSDBnWm5KdmJTQW5MaTl6WlhSMGFXNW5jeTlrWldaaGRXeDBMWEJ5YjNCekp6dGNibWx0Y0c5eWRDQjdJR2h6YkNCaGN5Qm9jMnhVWlhKdGN5QjlJR1p5YjIwZ0p5NHZjMlYwZEdsdVozTXZaR2xqZEdsdmJtRnllU2M3WEc1cGJYQnZjblFnZXlCamNtVmhkR1ZFWld4cGJXbDBaV1FzSUdOeVpXRjBaVVoxYm1OMGFXOXVVM1J5YVc1bkxDQm5aWFJEYjJ4dmNsWmhiSFZsY3lCOUlHWnliMjBnSnk0dUwybHVZeTkxZEdsc2N5YzdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJSHRjYmlBZ0lDQmtaV1poZFd4MFVISnZjSE02SUh0Y2JpQWdJQ0FnSUNBZ1NIVmxPaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnRhVzQ2SURBc1hHNGdJQ0FnSUNBZ0lDQWdJQ0J0WVhnNklETTJNRnh1SUNBZ0lDQWdJQ0I5TEZ4dUlDQWdJQ0FnSUNCVFlYUjFjbUYwYVc5dU9pQndaWEpqWlc1MExGeHVJQ0FnSUNBZ0lDQk1hV2RvZEc1bGMzTTZJSEJsY21ObGJuUXNYRzRnSUNBZ0lDQWdJRUZzY0doaE9pQnZjR0ZqYVhSNVhHNGdJQ0FnZlN4Y2JseHVJQ0FnSUhSbGMzUTZJQ2gyWVd4MVpTa2dQVDRnS0haaGJIVmxJQ1ltSUhaaGJIVmxMbWx1WkdWNFQyWW9KMmh6YkNjcElENGdMVEVwTEZ4dVhHNGdJQ0FnYzNCc2FYUTZJQ2gyWVd4MVpTa2dQVDRnWjJWMFEyOXNiM0pXWVd4MVpYTW9kbUZzZFdVc0lHaHpiRlJsY20xektTeGNibHh1SUNBZ0lHTnZiV0pwYm1VNklDaDJZV3gxWlhNcElEMCtJR055WldGMFpVWjFibU4wYVc5dVUzUnlhVzVuS0dOeVpXRjBaVVJsYkdsdGFYUmxaQ2gyWVd4MVpYTXNJR2h6YkZSbGNtMXpMQ0FuTENBbkxDQXlLU3dnSjJoemJHRW5LVnh1ZlR0Y2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9oc2wuanNcbiAqKiBtb2R1bGUgaWQgPSAyN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3VuaXQgPSByZXF1aXJlKCcuL3VuaXQnKTtcblxudmFyIF91bml0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3VuaXQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIHVuaXQ6ICdweCcsXG4gICAgICAgIHR5cGU6IF91bml0Mi5kZWZhdWx0XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OXdlQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3TzJ0Q1FVVmxPMEZCUTFnc2EwSkJRV003UVVGRFZpeGpRVUZOTEVsQlFVNDdRVUZEUVN3MFFrRkdWVHRMUVVGa0lpd2labWxzWlNJNkluQjRMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwTDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0IxYm1sMFZIbHdaU0JtY205dElDY3VMM1Z1YVhRbk8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQjdYRzRnSUNBZ1pHVm1ZWFZzZEZCeWIzQnpPaUI3WEc0Z0lDQWdJQ0FnSUhWdWFYUTZJQ2R3ZUNjc1hHNGdJQ0FnSUNBZ0lIUjVjR1U2SUhWdWFYUlVlWEJsWEc0Z0lDQWdmVnh1ZlRzaVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3B4LmpzXG4gKiogbW9kdWxlIGlkID0gMjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG52YXIgX2RpY3Rpb25hcnkgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RpY3Rpb25hcnknKTtcblxudmFyIF9kZWZhdWx0UHJvcHMgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RlZmF1bHQtcHJvcHMnKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBSZWQ6IF9kZWZhdWx0UHJvcHMucmdiLFxuICAgICAgICBHcmVlbjogX2RlZmF1bHRQcm9wcy5yZ2IsXG4gICAgICAgIEJsdWU6IF9kZWZhdWx0UHJvcHMucmdiLFxuICAgICAgICBBbHBoYTogX2RlZmF1bHRQcm9wcy5vcGFjaXR5XG4gICAgfSxcblxuICAgIHRlc3Q6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgJiYgdmFsdWUuaW5kZXhPZigncmdiJykgPiAtMTtcbiAgICB9LFxuXG4gICAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gKDAsIF91dGlscy5nZXRDb2xvclZhbHVlcykodmFsdWUsIF9kaWN0aW9uYXJ5LnJnYik7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMuY3JlYXRlRnVuY3Rpb25TdHJpbmcpKCgwLCBfdXRpbHMuY3JlYXRlRGVsaW1pdGVkKSh2YWx1ZXMsIF9kaWN0aW9uYXJ5LnJnYiwgJywgJywgMiksICdyZ2JhJyk7XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OXlaMkl1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3T3p0clFrRkpaVHRCUVVOWUxHdENRVUZqTzBGQlExWXNPRUpCUkZVN1FVRkZWaXhuUTBGR1ZUdEJRVWRXTEN0Q1FVaFZPMEZCU1ZZc2IwTkJTbFU3UzBGQlpEczdRVUZQUVN4VlFVRk5MRlZCUVVNc1MwRkJSRHRsUVVGWkxGTkJRVk1zVFVGQlRTeFBRVUZPTEVOQlFXTXNTMEZCWkN4SlFVRjFRaXhEUVVGRExFTkJRVVE3UzBGQk5VTTdPMEZCUlU0c1YwRkJUeXhWUVVGRExFdEJRVVE3WlVGQlZ5d3lRa0ZCWlN4TFFVRm1PMHRCUVZnN08wRkJSVkFzWVVGQlV5eFZRVUZETEUxQlFVUTdaVUZCV1N4cFEwRkJjVUlzTkVKQlFXZENMRTFCUVdoQ0xHMUNRVUZyUXl4SlFVRnNReXhGUVVGM1F5eERRVUY0UXl4RFFVRnlRaXhGUVVGcFJTeE5RVUZxUlR0TFFVRmFJaXdpWm1sc1pTSTZJbkpuWWk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRDOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2V5QmpjbVZoZEdWRVpXeHBiV2wwWldRc0lHTnlaV0YwWlVaMWJtTjBhVzl1VTNSeWFXNW5MQ0JuWlhSRGIyeHZjbFpoYkhWbGN5QjlJR1p5YjIwZ0p5NHVMMmx1WXk5MWRHbHNjeWM3WEc1cGJYQnZjblFnZXlCeVoySWdZWE1nY21kaVZHVnliWE1nZlNCbWNtOXRJQ2N1TDNObGRIUnBibWR6TDJScFkzUnBiMjVoY25rbk8xeHVhVzF3YjNKMElIc2djbWRpSUdGeklHUmxabUYxYkhSU1IwSXNJRzl3WVdOcGRIa2dZWE1nWkdWbVlYVnNkRTl3WVdOcGRIa2dmU0JtY205dElDY3VMM05sZEhScGJtZHpMMlJsWm1GMWJIUXRjSEp2Y0hNbk8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQjdYRzRnSUNBZ1pHVm1ZWFZzZEZCeWIzQnpPaUI3WEc0Z0lDQWdJQ0FnSUZKbFpEb2daR1ZtWVhWc2RGSkhRaXhjYmlBZ0lDQWdJQ0FnUjNKbFpXNDZJR1JsWm1GMWJIUlNSMElzWEc0Z0lDQWdJQ0FnSUVKc2RXVTZJR1JsWm1GMWJIUlNSMElzWEc0Z0lDQWdJQ0FnSUVGc2NHaGhPaUJrWldaaGRXeDBUM0JoWTJsMGVWeHVJQ0FnSUgwc1hHNWNiaUFnSUNCMFpYTjBPaUFvZG1Gc2RXVXBJRDArSUNoMllXeDFaU0FtSmlCMllXeDFaUzVwYm1SbGVFOW1LQ2R5WjJJbktTQStJQzB4S1N4Y2JseHVJQ0FnSUhOd2JHbDBPaUFvZG1Gc2RXVXBJRDArSUdkbGRFTnZiRzl5Vm1Gc2RXVnpLSFpoYkhWbExDQnlaMkpVWlhKdGN5a3NYRzVjYmlBZ0lDQmpiMjFpYVc1bE9pQW9kbUZzZFdWektTQTlQaUJqY21WaGRHVkdkVzVqZEdsdmJsTjBjbWx1WnloamNtVmhkR1ZFWld4cGJXbDBaV1FvZG1Gc2RXVnpMQ0J5WjJKVVpYSnRjeXdnSnl3Z0p5d2dNaWtzSUNkeVoySmhKeWxjYm4wN0lsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3JnYi5qc1xuICoqIG1vZHVsZSBpZCA9IDI5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgY3VycmVudDogMVxuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTl6WTJGc1pTNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3YTBKQlFXVTdRVUZEV0N4clFrRkJZenRCUVVOV0xHbENRVUZUTEVOQlFWUTdTMEZFU2lJc0ltWnBiR1VpT2lKelkyRnNaUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKbGVIQnZjblFnWkdWbVlYVnNkQ0I3WEc0Z0lDQWdaR1ZtWVhWc2RGQnliM0J6T2lCN1hHNGdJQ0FnSUNBZ0lHTjFjbkpsYm5RNklERmNiaUFnSUNCOVhHNTlPeUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvc2NhbGUuanNcbiAqKiBtb2R1bGUgaWQgPSAzMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2NvbG9yID0gcmVxdWlyZSgnLi9jb2xvcicpO1xuXG52YXIgX2NvbG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbG9yKTtcblxudmFyIF9weCA9IHJlcXVpcmUoJy4vcHgnKTtcblxudmFyIF9kaWN0aW9uYXJ5ID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kaWN0aW9uYXJ5Jyk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHNoYWRvd1dpdGhvdXRDb2xvclRlcm1zID0gX2RpY3Rpb25hcnkuc2hhZG93LnNsaWNlKDAsIDQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgZGVmYXVsdFByb3BzOiBfZXh0ZW5kcyh7fSwgX2NvbG9yMi5kZWZhdWx0LmRlZmF1bHRQcm9wcywge1xuICAgICAgICBYOiBfcHguZGVmYXVsdFByb3BzLFxuICAgICAgICBZOiBfcHguZGVmYXVsdFByb3BzLFxuICAgICAgICBSYWRpdXM6IF9weC5kZWZhdWx0UHJvcHMsXG4gICAgICAgIFNwcmVhZDogX3B4LmRlZmF1bHRQcm9wc1xuICAgIH0pLFxuXG4gICAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgYml0cyA9ICgwLCBfdXRpbHMuc3BsaXRTcGFjZURlbGltaXRlZCkodmFsdWUpO1xuICAgICAgICB2YXIgaGFzUmVhY2hlZENvbG9yID0gZmFsc2U7XG4gICAgICAgIHZhciBjb2xvclByb3AgPSAnJztcbiAgICAgICAgdmFyIHNwbGl0VmFsdWUgPSB7fTtcblxuICAgICAgICBiaXRzLmZvckVhY2goZnVuY3Rpb24gKGJpdCwgaSkge1xuICAgICAgICAgICAgLy8gSWYgd2UndmUgcmVhY2hlZCB0aGUgY29sb3IgcHJvcHMsIGFwcGVuZCB0byBjb2xvciBzdHJpbmdcbiAgICAgICAgICAgIGlmIChoYXNSZWFjaGVkQ29sb3IgfHwgX2NvbG9yMi5kZWZhdWx0LnRlc3QoYml0KSkge1xuICAgICAgICAgICAgICAgIGhhc1JlYWNoZWRDb2xvciA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29sb3JQcm9wICs9IGJpdDtcblxuICAgICAgICAgICAgICAgIC8vIEVsc2UgcHJvY2VzcyBzaGFkb3cgdmFsdWVcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNwbGl0VmFsdWVbX2RpY3Rpb25hcnkuc2hhZG93W2ldXSA9IGJpdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBzcGxpdENvbG9yUHJvcHMgPSBfY29sb3IyLmRlZmF1bHQuc3BsaXQoY29sb3JQcm9wKTtcblxuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHNwbGl0VmFsdWUsIHsgc3BsaXRDb2xvclByb3BzOiBzcGxpdENvbG9yUHJvcHMgfSk7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMuY3JlYXRlRGVsaW1pdGVkKSh2YWx1ZXMsIHNoYWRvd1dpdGhvdXRDb2xvclRlcm1zLCAnICcpICsgX2NvbG9yMi5kZWZhdWx0LmNvbWJpbmUodmFsdWVzKTtcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5emFHRmtiM2N1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3T3pzN096czdPenM3TzBGQlMwRXNTVUZCVFN3d1FrRkJNRUlzYlVKQlFWa3NTMEZCV2l4RFFVRnJRaXhEUVVGc1FpeEZRVUZ4UWl4RFFVRnlRaXhEUVVFeFFqczdhMEpCUlZNN1FVRkRXQ3dyUWtGRFR5eG5Ra0ZCVFN4WlFVRk9PMEZCUTBnN1FVRkRRVHRCUVVOQk8wRkJRMEU3VFVGTVNqczdRVUZSUVN4WFFVRlBMRlZCUVVNc1MwRkJSQ3hGUVVGWE8wRkJRMlFzV1VGQlRTeFBRVUZQTEdkRFFVRnZRaXhMUVVGd1FpeERRVUZRTEVOQlJGRTdRVUZGWkN4WlFVRkpMR3RDUVVGclFpeExRVUZzUWl4RFFVWlZPMEZCUjJRc1dVRkJTU3haUVVGWkxFVkJRVm9zUTBGSVZUdEJRVWxrTEZsQlFVa3NZVUZCWVN4RlFVRmlMRU5CU2xVN08wRkJUV1FzWVVGQlN5eFBRVUZNTEVOQlFXRXNWVUZCUXl4SFFVRkVMRVZCUVUwc1EwRkJUaXhGUVVGWk96dEJRVVZ5UWl4blFrRkJTU3h0UWtGQmJVSXNaMEpCUVUwc1NVRkJUaXhEUVVGWExFZEJRVmdzUTBGQmJrSXNSVUZCYjBNN1FVRkRjRU1zYTBOQlFXdENMRWxCUVd4Q0xFTkJSRzlETzBGQlJYQkRMRFpDUVVGaExFZEJRV0k3T3p0QlFVWnZReXhoUVVGNFF5eE5RVXRQTzBGQlEwZ3NLMEpCUVZjc2JVSkJRVmtzUTBGQldpeERRVUZZTEVsQlFUWkNMRWRCUVRkQ0xFTkJSRWM3YVVKQlRGQTdVMEZHVXl4RFFVRmlMRU5CVG1NN08wRkJhMEprTEZsQlFVMHNhMEpCUVd0Q0xHZENRVUZOTEV0QlFVNHNRMEZCV1N4VFFVRmFMRU5CUVd4Q0xFTkJiRUpST3p0QlFXOUNaQ3cwUWtGQldTeGpRVUZaTEcxRFFVRjRRaXhEUVhCQ1l6dExRVUZZT3p0QlFYVkNVQ3hoUVVGVExGVkJRVU1zVFVGQlJEdGxRVUZaTERSQ1FVRm5RaXhOUVVGb1FpeEZRVUYzUWl4MVFrRkJlRUlzUlVGQmFVUXNSMEZCYWtRc1NVRkJkMFFzWjBKQlFVMHNUMEZCVGl4RFFVRmpMRTFCUVdRc1EwRkJlRVE3UzBGQldpSXNJbVpwYkdVaU9pSnphR0ZrYjNjdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUXZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElHTnZiRzl5SUdaeWIyMGdKeTR2WTI5c2IzSW5PMXh1YVcxd2IzSjBJSHNnWkdWbVlYVnNkRkJ5YjNCeklHRnpJSEI0UkdWbVlYVnNkRkJ5YjNCeklIMGdabkp2YlNBbkxpOXdlQ2M3WEc1cGJYQnZjblFnZXlCemFHRmtiM2NnWVhNZ2MyaGhaRzkzVkdWeWJYTWdmU0JtY205dElDY3VMM05sZEhScGJtZHpMMlJwWTNScGIyNWhjbmtuTzF4dWFXMXdiM0owSUhzZ2MzQnNhWFJUY0dGalpVUmxiR2x0YVhSbFpDd2dZM0psWVhSbFJHVnNhVzFwZEdWa0lIMGdabkp2YlNBbkxpNHZhVzVqTDNWMGFXeHpKenRjYmx4dVkyOXVjM1FnYzJoaFpHOTNWMmwwYUc5MWRFTnZiRzl5VkdWeWJYTWdQU0J6YUdGa2IzZFVaWEp0Y3k1emJHbGpaU2d3TENBMEtUdGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdlMXh1SUNBZ0lHUmxabUYxYkhSUWNtOXdjem9nZTF4dUlDQWdJQ0FnSUNBdUxpNWpiMnh2Y2k1a1pXWmhkV3gwVUhKdmNITXNYRzRnSUNBZ0lDQWdJRmc2SUhCNFJHVm1ZWFZzZEZCeWIzQnpMRnh1SUNBZ0lDQWdJQ0JaT2lCd2VFUmxabUYxYkhSUWNtOXdjeXhjYmlBZ0lDQWdJQ0FnVW1Ga2FYVnpPaUJ3ZUVSbFptRjFiSFJRY205d2N5eGNiaUFnSUNBZ0lDQWdVM0J5WldGa09pQndlRVJsWm1GMWJIUlFjbTl3YzF4dUlDQWdJSDBzWEc1Y2JpQWdJQ0J6Y0d4cGREb2dLSFpoYkhWbEtTQTlQaUI3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJR0pwZEhNZ1BTQnpjR3hwZEZOd1lXTmxSR1ZzYVcxcGRHVmtLSFpoYkhWbEtUdGNiaUFnSUNBZ0lDQWdiR1YwSUdoaGMxSmxZV05vWldSRGIyeHZjaUE5SUdaaGJITmxPMXh1SUNBZ0lDQWdJQ0JzWlhRZ1kyOXNiM0pRY205d0lEMGdKeWM3WEc0Z0lDQWdJQ0FnSUd4bGRDQnpjR3hwZEZaaGJIVmxJRDBnZTMwN1hHNWNiaUFnSUNBZ0lDQWdZbWwwY3k1bWIzSkZZV05vS0NoaWFYUXNJR2twSUQwK0lIdGNiaUFnSUNBZ0lDQWdJQ0FnSUM4dklFbG1JSGRsSjNabElISmxZV05vWldRZ2RHaGxJR052Ykc5eUlIQnliM0J6TENCaGNIQmxibVFnZEc4Z1kyOXNiM0lnYzNSeWFXNW5YRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9hR0Z6VW1WaFkyaGxaRU52Ykc5eUlIeDhJR052Ykc5eUxuUmxjM1FvWW1sMEtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2hoYzFKbFlXTm9aV1JEYjJ4dmNpQTlJSFJ5ZFdVN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyOXNiM0pRY205d0lDczlJR0pwZER0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1JXeHpaU0J3Y205alpYTnpJSE5vWVdSdmR5QjJZV3gxWlZ4dUlDQWdJQ0FnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnpjR3hwZEZaaGJIVmxXM05vWVdSdmQxUmxjbTF6VzJsZFhTQTlJR0pwZER0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlNrN1hHNWNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2MzQnNhWFJEYjJ4dmNsQnliM0J6SUQwZ1kyOXNiM0l1YzNCc2FYUW9ZMjlzYjNKUWNtOXdLVHRjYmx4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZXlBdUxpNXpjR3hwZEZaaGJIVmxMQ0J6Y0d4cGRFTnZiRzl5VUhKdmNITWdmVHRjYmlBZ0lDQjlMRnh1WEc0Z0lDQWdZMjl0WW1sdVpUb2dLSFpoYkhWbGN5a2dQVDRnWTNKbFlYUmxSR1ZzYVcxcGRHVmtLSFpoYkhWbGN5d2djMmhoWkc5M1YybDBhRzkxZEVOdmJHOXlWR1Z5YlhNc0lDY2dKeWtnS3lCamIyeHZjaTVqYjIxaWFXNWxLSFpoYkhWbGN5bGNibjA3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3NoYWRvdy5qc1xuICoqIG1vZHVsZSBpZCA9IDMxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIHRlc3Q6IGZ1bmN0aW9uICh1bnBhcnNlZCkge1xuICAgICAgICB2YXIgX2ZpbmRWYWx1ZUFuZFVuaXQgPSAoMCwgX3V0aWxzLmZpbmRWYWx1ZUFuZFVuaXQpKHVucGFyc2VkKTtcblxuICAgICAgICB2YXIgdmFsdWUgPSBfZmluZFZhbHVlQW5kVW5pdC52YWx1ZTtcblxuICAgICAgICByZXR1cm4gKDAsIF91dGlscy5pc051bSkodmFsdWUpICYmICFpc05hTih2YWx1ZSkgPyB0cnVlIDogZmFsc2U7XG4gICAgfSxcblxuICAgIHBhcnNlOiBmdW5jdGlvbiAodW5wYXJzZWQsIHBhcmVudCkge1xuICAgICAgICB2YXIgX2ZpbmRWYWx1ZUFuZFVuaXQyID0gKDAsIF91dGlscy5maW5kVmFsdWVBbmRVbml0KSh1bnBhcnNlZCk7XG5cbiAgICAgICAgdmFyIHZhbHVlID0gX2ZpbmRWYWx1ZUFuZFVuaXQyLnZhbHVlO1xuICAgICAgICB2YXIgdW5pdCA9IF9maW5kVmFsdWVBbmRVbml0Mi51bml0O1xuXG4gICAgICAgIGlmICh1bml0ICYmIHVuaXQgIT09IHVuaXQpIHtcbiAgICAgICAgICAgIHBhcmVudC51bml0ID0gdW5pdDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9LFxuXG4gICAgc2VyaWFsaXplOiBmdW5jdGlvbiAocGFyc2VkLCBwYXJlbnQpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlZCArIChwYXJlbnQudW5pdCB8fCAnJyk7XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OTFibWwwTG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenRyUWtGRlpUdEJRVU5ZTEZWQlFVMHNWVUZCVlN4UlFVRldMRVZCUVc5Q08yZERRVU5LTERaQ1FVRnBRaXhSUVVGcVFpeEZRVVJKT3p0WlFVTmtMR2REUVVSak96dEJRVVYwUWl4bFFVRlBMR2xDUVVGRExFTkJRVTBzUzBGQlRpeExRVUZuUWl4RFFVRkRMRTFCUVUwc1MwRkJUaXhEUVVGRUxFZEJRV2xDTEVsQlFXeERMRWRCUVhsRExFdEJRWHBETEVOQlJtVTdTMEZCY0VJN08wRkJTMDRzVjBGQlR5eFZRVUZWTEZGQlFWWXNSVUZCYjBJc1RVRkJjRUlzUlVGQk5FSTdhVU5CUTFBc05rSkJRV2xDTEZGQlFXcENMRVZCUkU4N08xbEJRM1pDTEdsRFFVUjFRanRaUVVOb1Fpd3JRa0ZFWjBJN08wRkJSeTlDTEZsQlFVa3NVVUZCVVN4VFFVRlRMRWxCUVZRc1JVRkJaVHRCUVVOMlFpeHRRa0ZCVHl4SlFVRlFMRWRCUVdNc1NVRkJaQ3hEUVVSMVFqdFRRVUV6UWpzN1FVRkpRU3hsUVVGUExFdEJRVkFzUTBGUUswSTdTMEZCTlVJN08wRkJWVkFzWlVGQlZ5eFZRVUZETEUxQlFVUXNSVUZCVXl4TlFVRlVPMlZCUVc5Q0xGVkJRVlVzVDBGQlR5eEpRVUZRTEVsQlFXVXNSVUZCWml4RFFVRldPMHRCUVhCQ0lpd2labWxzWlNJNkluVnVhWFF1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhzZ2FYTk9kVzBzSUdacGJtUldZV3gxWlVGdVpGVnVhWFFnZlNCbWNtOXRJQ2N1TGk5cGJtTXZkWFJwYkhNbk8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQjdYRzRnSUNBZ2RHVnpkRG9nWm5WdVkzUnBiMjRnS0hWdWNHRnljMlZrS1NCN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUhzZ2RtRnNkV1VnZlNBOUlHWnBibVJXWVd4MVpVRnVaRlZ1YVhRb2RXNXdZWEp6WldRcE8xeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z0tHbHpUblZ0S0haaGJIVmxLU0FtSmlBaGFYTk9ZVTRvZG1Gc2RXVXBLU0EvSUhSeWRXVWdPaUJtWVd4elpUdGNiaUFnSUNCOUxGeHVYRzRnSUNBZ2NHRnljMlU2SUdaMWJtTjBhVzl1SUNoMWJuQmhjbk5sWkN3Z2NHRnlaVzUwS1NCN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUhzZ2RtRnNkV1VzSUhWdWFYUWdmU0E5SUdacGJtUldZV3gxWlVGdVpGVnVhWFFvZFc1d1lYSnpaV1FwTzF4dVhHNGdJQ0FnSUNBZ0lHbG1JQ2gxYm1sMElDWW1JSFZ1YVhRZ0lUMDlJSFZ1YVhRcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhCaGNtVnVkQzUxYm1sMElEMGdkVzVwZER0Y2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjJZV3gxWlR0Y2JpQWdJQ0I5TEZ4dVhHNGdJQ0FnYzJWeWFXRnNhWHBsT2lBb2NHRnljMlZrTENCd1lYSmxiblFwSUQwK0lIQmhjbk5sWkNBcklDaHdZWEpsYm5RdWRXNXBkQ0I4ZkNBbkp5bGNibjA3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3VuaXQuanNcbiAqKiBtb2R1bGUgaWQgPSAzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5jaGFpbiA9IGV4cG9ydHMuY2lyY3VsYXJNb3Rpb24gPSBleHBvcnRzLmNyZWF0ZU1hcHBlciA9IHVuZGVmaW5lZDtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKTtcblxudmFyIGNyZWF0ZU1hcHBlciA9IGV4cG9ydHMuY3JlYXRlTWFwcGVyID0gZnVuY3Rpb24gKGZyb20sIHRvKSB7XG4gICAgdmFyIG1hcExlbmd0aCA9IGZyb20ubGVuZ3RoO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IG1hcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPCBmcm9tW2ldIHx8IGkgPT09IG1hcExlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoMCwgX2NhbGMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MpKCgwLCBfY2FsYy5yZXN0cmljdCkoKDAsIF9jYWxjLmdldFByb2dyZXNzRnJvbVZhbHVlKSh2YWx1ZSwgZnJvbVtpIC0gMV0sIGZyb21baV0pLCAwLCAxKSwgdG9baSAtIDFdLCB0b1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xufTtcblxudmFyIGNpcmN1bGFyTW90aW9uID0gZXhwb3J0cy5jaXJjdWxhck1vdGlvbiA9IGZ1bmN0aW9uICh2LCBrZXksIF9yZWYpIHtcbiAgICB2YXIgdmFsdWVzID0gX3JlZi52YWx1ZXM7XG5cbiAgICB2YXIgb3JpZ2luWCA9IHZhbHVlcy5vcmlnaW5YID8gdmFsdWVzLm9yaWdpblguY3VycmVudCA6IDA7XG4gICAgdmFyIG9yaWdpblkgPSB2YWx1ZXMub3JpZ2luWSA/IHZhbHVlcy5vcmlnaW5ZLmN1cnJlbnQgOiAwO1xuXG4gICAgcmV0dXJuICgwLCBfY2FsYy5wb2ludEZyb21BbmdsZUFuZERpc3RhbmNlKSh7XG4gICAgICAgIHg6IG9yaWdpblgsXG4gICAgICAgIHk6IG9yaWdpbllcbiAgICB9LCB2YWx1ZXMuYW5nbGUuY3VycmVudCwgdmFsdWVzLmRpc3RhbmNlLmN1cnJlbnQpW2tleV07XG59O1xuXG4vKlxuICAgIENvbWJpbmUgdHJhbnNmb3JtZXJzIGludG8gb25lIGZ1bmN0aW9uIHRoYXQgY2FsbHMgZXZlcnlcbiAgICB0cmFuc2Zvcm1lciBpbiB0aGUgYXJyYXkgYW5kIHJldHVybnMgdGhlIHJlc3VsdFxuXG4gICAgQHBhcmFtIFthcnJheV1cbiAgICBAcmV0dXJuIFtmdW5jdGlvbl1cbiovXG52YXIgY2hhaW4gPSBleHBvcnRzLmNoYWluID0gZnVuY3Rpb24gKHRyYW5zZm9ybWVycykge1xuICAgIHZhciBudW1UcmFuc2Zvcm1lcnMgPSB0cmFuc2Zvcm1lcnMubGVuZ3RoO1xuICAgIHZhciBpID0gMDtcblxuICAgIC8qXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgICAgICBAcGFyYW0gW3N0cmluZ11cbiAgICAgICAgQHBhcmFtIFtBY3Rpb25dXG4gICAgICAgIEByZXR1cm4gW251bWJlcl1cbiAgICAqL1xuICAgIHJldHVybiBmdW5jdGlvbiAodiwga2V5LCBhKSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBudW1UcmFuc2Zvcm1lcnM7IGkrKykge1xuICAgICAgICAgICAgdiA9IHRyYW5zZm9ybWVyc1tpXSh2LCBrZXksIGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHY7XG4gICAgfTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12ZEhKaGJuTm1iM0p0WlhKekxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN1FVRkZUeXhKUVVGTkxITkRRVUZsTEZWQlFVTXNTVUZCUkN4RlFVRlBMRVZCUVZBc1JVRkJZenRCUVVOMFF5eFJRVUZOTEZsQlFWa3NTMEZCU3l4TlFVRk1MRU5CUkc5Q096dEJRVWQwUXl4WFFVRlBMRlZCUVVNc1MwRkJSQ3hGUVVGWE8wRkJRMlFzWVVGQlN5eEpRVUZKTEVsQlFVa3NRMEZCU2l4RlFVRlBMRWxCUVVrc1UwRkJTaXhGUVVGbExFZEJRUzlDTEVWQlFXOURPMEZCUTJoRExHZENRVUZKTEZGQlFWRXNTMEZCU3l4RFFVRk1MRU5CUVZJc1NVRkJiVUlzVFVGQlRTeFRRVUZPTEVWQlFXbENPMEZCUTNCRExIVkNRVUZQTEdkRFFVRnhRaXh2UWtGQlV5eG5RMEZCY1VJc1MwRkJja0lzUlVGQk5FSXNTMEZCU3l4SlFVRkpMRU5CUVVvc1EwRkJha01zUlVGQmVVTXNTMEZCU3l4RFFVRk1MRU5CUVhwRExFTkJRVlFzUlVGQk5FUXNRMEZCTlVRc1JVRkJLMFFzUTBGQkwwUXNRMEZCY2tJc1JVRkJkMFlzUjBGQlJ5eEpRVUZKTEVOQlFVb3NRMEZCTTBZc1JVRkJiVWNzUjBGQlJ5eERRVUZJTEVOQlFXNUhMRU5CUVZBc1EwRkViME03WVVGQmVFTTdVMEZFU2p0TFFVUkhMRU5CU0N0Q08wTkJRV1E3TzBGQldYSkNMRWxCUVUwc01FTkJRV2xDTEZWQlFVTXNRMEZCUkN4RlFVRkpMRWRCUVVvc1VVRkJkMEk3VVVGQllpeHhRa0ZCWVRzN1FVRkRiRVFzVVVGQlRTeFZRVUZWTEUxQlFVTXNRMEZCVHl4UFFVRlFMRWRCUVd0Q0xFOUJRVThzVDBGQlVDeERRVUZsTEU5QlFXWXNSMEZCZVVJc1EwRkJOVU1zUTBGRWEwTTdRVUZGYkVRc1VVRkJUU3hWUVVGVkxFMUJRVU1zUTBGQlR5eFBRVUZRTEVkQlFXdENMRTlCUVU4c1QwRkJVQ3hEUVVGbExFOUJRV1lzUjBGQmVVSXNRMEZCTlVNc1EwRkdhME03TzBGQlNXeEVMRmRCUVU4c2NVTkJRVEJDTzBGQlF6ZENMRmRCUVVjc1QwRkJTRHRCUVVOQkxGZEJRVWNzVDBGQlNEdExRVVpITEVWQlIwb3NUMEZCVHl4TFFVRlFMRU5CUVdFc1QwRkJZaXhGUVVGelFpeFBRVUZQTEZGQlFWQXNRMEZCWjBJc1QwRkJhRUlzUTBGSWJFSXNRMEZITWtNc1IwRklNME1zUTBGQlVDeERRVXByUkR0RFFVRjRRanM3T3pzN096czdPMEZCYVVKMlFpeEpRVUZOTEhkQ1FVRlJMRlZCUVVNc1dVRkJSQ3hGUVVGclFqdEJRVU51UXl4UlFVRk5MR3RDUVVGclFpeGhRVUZoTEUxQlFXSXNRMEZFVnp0QlFVVnVReXhSUVVGSkxFbEJRVWtzUTBGQlNqczdPenM3T3pzN1FVRkdLMElzVjBGVk5VSXNWVUZCUXl4RFFVRkVMRVZCUVVrc1IwRkJTaXhGUVVGVExFTkJRVlFzUlVGQlpUdEJRVU5zUWl4aFFVRkxMRWxCUVVrc1EwRkJTaXhGUVVGUExFbEJRVWtzWlVGQlNpeEZRVUZ4UWl4SFFVRnFReXhGUVVGelF6dEJRVU5zUXl4blFrRkJTU3hoUVVGaExFTkJRV0lzUlVGQlowSXNRMEZCYUVJc1JVRkJiVUlzUjBGQmJrSXNSVUZCZDBJc1EwRkJlRUlzUTBGQlNpeERRVVJyUXp0VFFVRjBRenM3UVVGSlFTeGxRVUZQTEVOQlFWQXNRMEZNYTBJN1MwRkJaaXhEUVZZMFFqdERRVUZzUWlJc0ltWnBiR1VpT2lKMGNtRnVjMlp2Y20xbGNuTXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFF2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSHNnWjJWMFVISnZaM0psYzNOR2NtOXRWbUZzZFdVc0lHZGxkRlpoYkhWbFJuSnZiVkJ5YjJkeVpYTnpMQ0J5WlhOMGNtbGpkQ3dnY0c5cGJuUkdjbTl0UVc1bmJHVkJibVJFYVhOMFlXNWpaU0I5SUdaeWIyMGdKeTR1TDJsdVl5OWpZV3hqSnp0Y2JseHVaWGh3YjNKMElHTnZibk4wSUdOeVpXRjBaVTFoY0hCbGNpQTlJQ2htY205dExDQjBieWtnUFQ0Z2UxeHVJQ0FnSUdOdmJuTjBJRzFoY0V4bGJtZDBhQ0E5SUdaeWIyMHViR1Z1WjNSb08xeHVYRzRnSUNBZ2NtVjBkWEp1SUNoMllXeDFaU2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQm1iM0lnS0d4bGRDQnBJRDBnTVRzZ2FTQThJRzFoY0V4bGJtZDBhRHNnYVNzcktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9kbUZzZFdVZ1BDQm1jbTl0VzJsZElIeDhJR2tnUFQwOUlHMWhjRXhsYm1kMGFDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQm5aWFJXWVd4MVpVWnliMjFRY205bmNtVnpjeWh5WlhOMGNtbGpkQ2huWlhSUWNtOW5jbVZ6YzBaeWIyMVdZV3gxWlNoMllXeDFaU3dnWm5KdmJWdHBJQzBnTVYwc0lHWnliMjFiYVYwcExDQXdMQ0F4S1N3Z2RHOWJhU0F0SURGZExDQjBiMXRwWFNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5TzF4dWZUdGNibHh1Wlhod2IzSjBJR052Ym5OMElHTnBjbU4xYkdGeVRXOTBhVzl1SUQwZ0tIWXNJR3RsZVN3Z2V5QjJZV3gxWlhNZ2ZTa2dQVDRnZTF4dUlDQWdJR052Ym5OMElHOXlhV2RwYmxnZ1BTQW9kbUZzZFdWekxtOXlhV2RwYmxncElEOGdkbUZzZFdWekxtOXlhV2RwYmxndVkzVnljbVZ1ZENBNklEQTdYRzRnSUNBZ1kyOXVjM1FnYjNKcFoybHVXU0E5SUNoMllXeDFaWE11YjNKcFoybHVXU2tnUHlCMllXeDFaWE11YjNKcFoybHVXUzVqZFhKeVpXNTBJRG9nTUR0Y2JseHVJQ0FnSUhKbGRIVnliaUJ3YjJsdWRFWnliMjFCYm1kc1pVRnVaRVJwYzNSaGJtTmxLSHRjYmlBZ0lDQWdJQ0FnZURvZ2IzSnBaMmx1V0N4Y2JpQWdJQ0FnSUNBZ2VUb2diM0pwWjJsdVdTQmNiaUFnSUNCOUxDQjJZV3gxWlhNdVlXNW5iR1V1WTNWeWNtVnVkQ3dnZG1Gc2RXVnpMbVJwYzNSaGJtTmxMbU4xY25KbGJuUXBXMnRsZVYwN1hHNTlPMXh1WEc0dktseHVJQ0FnSUVOdmJXSnBibVVnZEhKaGJuTm1iM0p0WlhKeklHbHVkRzhnYjI1bElHWjFibU4wYVc5dUlIUm9ZWFFnWTJGc2JITWdaWFpsY25sY2JpQWdJQ0IwY21GdWMyWnZjbTFsY2lCcGJpQjBhR1VnWVhKeVlYa2dZVzVrSUhKbGRIVnlibk1nZEdobElISmxjM1ZzZEZ4dVhHNGdJQ0FnUUhCaGNtRnRJRnRoY25KaGVWMWNiaUFnSUNCQWNtVjBkWEp1SUZ0bWRXNWpkR2x2YmwxY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ1kyaGhhVzRnUFNBb2RISmhibk5tYjNKdFpYSnpLU0E5UGlCN1hHNGdJQ0FnWTI5dWMzUWdiblZ0VkhKaGJuTm1iM0p0WlhKeklEMGdkSEpoYm5ObWIzSnRaWEp6TG14bGJtZDBhRHRjYmlBZ0lDQnNaWFFnYVNBOUlEQTdYRzVjYmlBZ0lDQXZLbHh1SUNBZ0lDQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMWNiaUFnSUNBZ0lDQWdRSEJoY21GdElGdHpkSEpwYm1kZFhHNGdJQ0FnSUNBZ0lFQndZWEpoYlNCYlFXTjBhVzl1WFZ4dUlDQWdJQ0FnSUNCQWNtVjBkWEp1SUZ0dWRXMWlaWEpkWEc0Z0lDQWdLaTljYmlBZ0lDQnlaWFIxY200Z0tIWXNJR3RsZVN3Z1lTa2dQVDRnZTF4dUlDQWdJQ0FnSUNCbWIzSWdLR2tnUFNBd095QnBJRHdnYm5WdFZISmhibk5tYjNKdFpYSnpPeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhZZ1BTQjBjbUZ1YzJadmNtMWxjbk5iYVYwb2Rpd2dhMlY1TENCaEtUdGNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIyTzF4dUlDQWdJSDA3WEc1OU95SmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvdHJhbnNmb3JtZXJzLmpzXG4gKiogbW9kdWxlIGlkID0gMzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9jb2xvciA9IHJlcXVpcmUoJy4uL3ZhbHVlLXR5cGVzL2NvbG9yJyk7XG5cbnZhciBfY29sb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29sb3IpO1xuXG52YXIgX2NvbXBsZXggPSByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9jb21wbGV4Jyk7XG5cbnZhciBfY29tcGxleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21wbGV4KTtcblxudmFyIF91bml0ID0gcmVxdWlyZSgnLi4vdmFsdWUtdHlwZXMvdW5pdCcpO1xuXG52YXIgX3VuaXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdW5pdCk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxudmFyIF9udW1lcmljYWxWYWx1ZXMgPSByZXF1aXJlKCcuLi9pbmMvbnVtZXJpY2FsLXZhbHVlcycpO1xuXG52YXIgX251bWVyaWNhbFZhbHVlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9udW1lcmljYWxWYWx1ZXMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgTlVNX05VTUVSSUNBTF9WQUxVRVMgPSBfbnVtZXJpY2FsVmFsdWVzMi5kZWZhdWx0Lmxlbmd0aDtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBOVU1fTlVNRVJJQ0FMX1ZBTFVFUzsgaSsrKSB7XG4gICAgICAgIHZhciB2YWx1ZVByb3AgPSB2YWx1ZVtfbnVtZXJpY2FsVmFsdWVzMi5kZWZhdWx0W2ldXTtcbiAgICAgICAgaWYgKCgwLCBfdXRpbHMuaXNTdHJpbmcpKHZhbHVlUHJvcCkpIHtcbiAgICAgICAgICAgIGlmIChfY29sb3IyLmRlZmF1bHQudGVzdCh2YWx1ZVByb3ApKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb2xvcjIuZGVmYXVsdDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoX2NvbXBsZXgyLmRlZmF1bHQudGVzdCh2YWx1ZVByb3ApKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb21wbGV4Mi5kZWZhdWx0O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChfdW5pdDIuZGVmYXVsdC50ZXN0KHZhbHVlUHJvcCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3VuaXQyLmRlZmF1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5a1pYUmxZM1F1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPMEZCVFVFc1NVRkJUU3gxUWtGQmRVSXNNRUpCUVdsQ0xFMUJRV3BDT3p0clFrRkZaQ3hWUVVGRExFdEJRVVFzUlVGQlZ6dEJRVU4wUWl4VFFVRkxMRWxCUVVrc1NVRkJTU3hEUVVGS0xFVkJRVThzU1VGQlNTeHZRa0ZCU2l4RlFVRXdRaXhIUVVFeFF5eEZRVUVyUXp0QlFVTXpReXhaUVVGTkxGbEJRVmtzVFVGQlRTd3dRa0ZCYVVJc1EwRkJha0lzUTBGQlRpeERRVUZhTEVOQlJIRkRPMEZCUlRORExGbEJRVWtzY1VKQlFWTXNVMEZCVkN4RFFVRktMRVZCUVhsQ08wRkJRM0pDTEdkQ1FVRkpMR2RDUVVGVkxFbEJRVllzUTBGQlpTeFRRVUZtTEVOQlFVb3NSVUZCSzBJN1FVRkRNMElzZFVOQlJESkNPMkZCUVM5Q0xFMUJSVThzU1VGQlNTeHJRa0ZCV1N4SlFVRmFMRU5CUVdsQ0xGTkJRV3BDTEVOQlFVb3NSVUZCYVVNN1FVRkRjRU1zZVVOQlJHOURPMkZCUVdwRExFMUJSVUVzU1VGQlNTeGxRVUZUTEVsQlFWUXNRMEZCWXl4VFFVRmtMRU5CUVVvc1JVRkJPRUk3UVVGRGFrTXNjME5CUkdsRE8yRkJRVGxDTzFOQlRGZzdTMEZHU2p0RFFVUlhJaXdpWm1sc1pTSTZJbVJsZEdWamRDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdZMjlzYjNKVWVYQmxJR1p5YjIwZ0p5NHVMM1poYkhWbExYUjVjR1Z6TDJOdmJHOXlKenRjYm1sdGNHOXlkQ0JqYjIxd2JHVjRWSGx3WlNCbWNtOXRJQ2N1TGk5MllXeDFaUzEwZVhCbGN5OWpiMjF3YkdWNEp6dGNibWx0Y0c5eWRDQjFibWwwVkhsd1pTQm1jbTl0SUNjdUxpOTJZV3gxWlMxMGVYQmxjeTkxYm1sMEp6dGNibWx0Y0c5eWRDQjdJR2x6VTNSeWFXNW5JSDBnWm5KdmJTQW5MaTR2YVc1akwzVjBhV3h6Snp0Y2JtbHRjRzl5ZENCT1ZVMUZVa2xEUVV4ZlZrRk1WVVZUSUdaeWIyMGdKeTR1TDJsdVl5OXVkVzFsY21sallXd3RkbUZzZFdWekp6dGNibHh1WTI5dWMzUWdUbFZOWDA1VlRVVlNTVU5CVEY5V1FVeFZSVk1nUFNCT1ZVMUZVa2xEUVV4ZlZrRk1WVVZUTG14bGJtZDBhRHRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnS0haaGJIVmxLU0E5UGlCN1hHNGdJQ0FnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCT1ZVMWZUbFZOUlZKSlEwRk1YMVpCVEZWRlV6c2dhU3NyS1NCN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUhaaGJIVmxVSEp2Y0NBOUlIWmhiSFZsVzA1VlRVVlNTVU5CVEY5V1FVeFZSVk5iYVYxZE8xeHVJQ0FnSUNBZ0lDQnBaaUFvYVhOVGRISnBibWNvZG1Gc2RXVlFjbTl3S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHTnZiRzl5Vkhsd1pTNTBaWE4wS0haaGJIVmxVSEp2Y0NrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z1kyOXNiM0pVZVhCbE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJR2xtSUNoamIyMXdiR1Y0Vkhsd1pTNTBaWE4wS0haaGJIVmxVSEp2Y0NrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z1kyOXRjR3hsZUZSNWNHVTdYRzRnSUNBZ0lDQWdJQ0FnSUNCOUlHVnNjMlVnYVdZZ0tIVnVhWFJVZVhCbExuUmxjM1FvZG1Gc2RXVlFjbTl3S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCMWJtbDBWSGx3WlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYm4wN0lsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2RldGVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDM0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBbJ2N1cnJlbnQnLCAnZnJvbScsICd0bycsICd2ZWxvY2l0eSddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1NdmJuVnRaWEpwWTJGc0xYWmhiSFZsY3k1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdhMEpCUVdVc1EwRkJReXhUUVVGRUxFVkJRVmtzVFVGQldpeEZRVUZ2UWl4SlFVRndRaXhGUVVFd1FpeFZRVUV4UWlJc0ltWnBiR1VpT2lKdWRXMWxjbWxqWVd3dGRtRnNkV1Z6TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMEwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltVjRjRzl5ZENCa1pXWmhkV3gwSUZzblkzVnljbVZ1ZENjc0lDZG1jbTl0Snl3Z0ozUnZKeXdnSjNabGJHOWphWFI1SjEwN0lsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy9udW1lcmljYWwtdmFsdWVzLmpzXG4gKiogbW9kdWxlIGlkID0gMzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9vYmplY3RBZGFwdGVyID0gcmVxdWlyZSgnLi4vYWRhcHRlci9vYmplY3QtYWRhcHRlcicpO1xuXG52YXIgX29iamVjdEFkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JqZWN0QWRhcHRlcik7XG5cbnZhciBfY3NzQWRhcHRlciA9IHJlcXVpcmUoJy4uL2FkYXB0ZXIvY3NzLWFkYXB0ZXInKTtcblxudmFyIF9jc3NBZGFwdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Nzc0FkYXB0ZXIpO1xuXG52YXIgX3N2Z0FkYXB0ZXIgPSByZXF1aXJlKCcuLi9hZGFwdGVyL3N2Zy1hZGFwdGVyJyk7XG5cbnZhciBfc3ZnQWRhcHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdmdBZGFwdGVyKTtcblxudmFyIF9zdmdQYXRoQWRhcHRlciA9IHJlcXVpcmUoJy4uL2FkYXB0ZXIvc3ZnLXBhdGgtYWRhcHRlcicpO1xuXG52YXIgX3N2Z1BhdGhBZGFwdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N2Z1BhdGhBZGFwdGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICB2YXIgZGV0ZWN0ZWRBZGFwdGVyID0gX29iamVjdEFkYXB0ZXIyLmRlZmF1bHQ7XG5cbiAgICAvLyBJZiBIVE1MRWxlbWVudCBsb2FkIENTU1xuICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgZWxlbWVudC50YWdOYW1lID09PSAnc3ZnJykge1xuICAgICAgICBkZXRlY3RlZEFkYXB0ZXIgPSBfY3NzQWRhcHRlcjIuZGVmYXVsdDtcblxuICAgICAgICAvLyBPciBTVkdcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBTVkdFbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC50YWdOYW1lID09PSAncGF0aCcpIHtcbiAgICAgICAgICAgICAgICBkZXRlY3RlZEFkYXB0ZXIgPSBfc3ZnUGF0aEFkYXB0ZXIyLmRlZmF1bHQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRldGVjdGVkQWRhcHRlciA9IF9zdmdBZGFwdGVyMi5kZWZhdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICByZXR1cm4gZGV0ZWN0ZWRBZGFwdGVyO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJtTXZaR1YwWldOMExXRmtZWEIwWlhJdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096czdPenM3T3pzN096czdPenRyUWtGTFpTeFZRVUZETEU5QlFVUXNSVUZCWVR0QlFVTjRRaXhSUVVGSkxIbERRVUZLT3pzN1FVRkVkMElzVVVGSmNFSXNiVUpCUVcxQ0xGZEJRVzVDTEVsQlFXdERMRkZCUVZFc1QwRkJVaXhMUVVGdlFpeExRVUZ3UWl4RlFVRXlRanRCUVVNM1JEczdPMEZCUkRaRUxFdEJRV3BGTEUxQlNVOHNTVUZCU1N4dFFrRkJiVUlzVlVGQmJrSXNSVUZCSzBJN1FVRkRkRU1zWjBKQlFVa3NVVUZCVVN4UFFVRlNMRXRCUVc5Q0xFMUJRWEJDTEVWQlFUUkNPMEZCUXpWQ0xESkVRVVEwUWp0aFFVRm9ReXhOUVVWUE8wRkJRMGdzZFVSQlJFYzdZVUZHVUR0VFFVUkhPenRCUVZGUUxGZEJRVThzWlVGQlVDeERRV2hDZDBJN1EwRkJZaUlzSW1acGJHVWlPaUprWlhSbFkzUXRZV1JoY0hSbGNpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdiMkpxWldOMFFXUmhjSFJsY2lCbWNtOXRJQ2N1TGk5aFpHRndkR1Z5TDI5aWFtVmpkQzFoWkdGd2RHVnlKenRjYm1sdGNHOXlkQ0JqYzNOQlpHRndkR1Z5SUdaeWIyMGdKeTR1TDJGa1lYQjBaWEl2WTNOekxXRmtZWEIwWlhJbk8xeHVhVzF3YjNKMElITjJaMEZrWVhCMFpYSWdabkp2YlNBbkxpNHZZV1JoY0hSbGNpOXpkbWN0WVdSaGNIUmxjaWM3WEc1cGJYQnZjblFnYzNablVHRjBhRUZrWVhCMFpYSWdabkp2YlNBbkxpNHZZV1JoY0hSbGNpOXpkbWN0Y0dGMGFDMWhaR0Z3ZEdWeUp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdLR1ZzWlcxbGJuUXBJRDArSUh0Y2JpQWdJQ0JzWlhRZ1pHVjBaV04wWldSQlpHRndkR1Z5SUQwZ2IySnFaV04wUVdSaGNIUmxjanRjYmx4dUlDQWdJQzh2SUVsbUlFaFVUVXhGYkdWdFpXNTBJR3h2WVdRZ1ExTlRYRzRnSUNBZ2FXWWdLR1ZzWlcxbGJuUWdhVzV6ZEdGdVkyVnZaaUJJVkUxTVJXeGxiV1Z1ZENCOGZDQmxiR1Z0Wlc1MExuUmhaMDVoYldVZ1BUMDlJQ2R6ZG1jbktTQjdYRzRnSUNBZ0lDQWdJR1JsZEdWamRHVmtRV1JoY0hSbGNpQTlJR056YzBGa1lYQjBaWEk3WEc1Y2JpQWdJQ0F2THlCUGNpQlRWa2RjYmlBZ0lDQjlJR1ZzYzJVZ2FXWWdLR1ZzWlcxbGJuUWdhVzV6ZEdGdVkyVnZaaUJUVmtkRmJHVnRaVzUwS1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2hsYkdWdFpXNTBMblJoWjA1aGJXVWdQVDA5SUNkd1lYUm9KeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdaR1YwWldOMFpXUkJaR0Z3ZEdWeUlEMGdjM1puVUdGMGFFRmtZWEIwWlhJN1hHNGdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JrWlhSbFkzUmxaRUZrWVhCMFpYSWdQU0J6ZG1kQlpHRndkR1Z5TzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WMGRYSnVJR1JsZEdWamRHVmtRV1JoY0hSbGNqdGNibjA3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy9kZXRlY3QtYWRhcHRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDM2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4uLy4uL2luYy9jYWxjJyk7XG5cbnZhciBCTEVORF9BQ0NVUkFDWSA9IDYwO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3V0QWN0aW9uLCBpbkFjdGlvbiwgZmxvd1ZhbHVlLCBrZXkpIHtcbiAgICB2YXIgb3V0VmFsdWUgPSBvdXRBY3Rpb24udmFsdWVzW2tleV07XG5cbiAgICBpZiAob3V0QWN0aW9uLmVsYXBzZWQgPT09IHVuZGVmaW5lZCB8fCAhb3V0VmFsdWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBpblZhbHVlID0gaW5BY3Rpb24udmFsdWVzW2tleV07XG4gICAgdmFyIG91dFRvdGFsRHVyYXRpb24gPSBvdXRWYWx1ZS5kZWxheSArIG91dFZhbHVlLmR1cmF0aW9uO1xuICAgIHZhciB0aW1lVW50aWxPdXRFbmQgPSBNYXRoLm1pbihvdXRUb3RhbER1cmF0aW9uIC0gb3V0QWN0aW9uLmVsYXBzZWQsIGluVmFsdWUuZGVsYXkgKyBpblZhbHVlLmR1cmF0aW9uKTtcbiAgICB2YXIgaW5Qb3NpdGlvbkF0T3V0RW5kID0gKDAsIF9jYWxjLmVhc2UpKCgwLCBfY2FsYy5yZXN0cmljdCkoKDAsIF9jYWxjLmdldFByb2dyZXNzRnJvbVZhbHVlKSh0aW1lVW50aWxPdXRFbmQsIDAsIGluVmFsdWUuZGVsYXkgKyBpblZhbHVlLmR1cmF0aW9uKSwgMCwgMSksIGluVmFsdWUuZnJvbSwgaW5WYWx1ZS50bywgaW5WYWx1ZS5lYXNlKTtcbiAgICB2YXIgaW5CaWdnZXJUaGFuT3V0QXRTdGFydCA9IGluVmFsdWUuZnJvbSA+IG91dFZhbHVlLmN1cnJlbnQ7XG4gICAgdmFyIGluQmlnZ2VyVGhhbk91dEF0RW5kID0gaW5Qb3NpdGlvbkF0T3V0RW5kID4gb3V0VmFsdWUudG87XG4gICAgdmFyIHR3ZWVuc0ludGVyc2VjdCA9IGluQmlnZ2VyVGhhbk91dEF0U3RhcnQgIT09IGluQmlnZ2VyVGhhbk91dEF0RW5kO1xuXG4gICAgdmFyIGJsZW5kQ3VydmUgPSBbWzAsIG91dFZhbHVlLmN1cnJlbnRdLCBbdGltZVVudGlsT3V0RW5kLCBpblBvc2l0aW9uQXRPdXRFbmRdXTtcblxuICAgIC8vIElmIHR3ZWVucyBpbnRlcnNlY3QsIHJlc29sdmUgdHdlZW5zIGF0IGEgcmVzb2x1dGlvbiB0byBmaW5kIGV4YWN0bHkgd2hlcmVcbiAgICBpZiAodHdlZW5zSW50ZXJzZWN0KSB7XG4gICAgICAgIHZhciB0aW1lU3RlcFRvVGVzdCA9IHRpbWVVbnRpbE91dEVuZCAvIEJMRU5EX0FDQ1VSQUNZO1xuICAgICAgICB2YXIgZm91bmRQMSA9IGZhbHNlO1xuICAgICAgICB2YXIgZm91bmRQMiA9IGZhbHNlO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDw9IEJMRU5EX0FDQ1VSQUNZOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0aW1lU3RlcCA9IGkgKiB0aW1lU3RlcFRvVGVzdDtcbiAgICAgICAgICAgIHZhciBvdXRBdFRpbWUgPSAoMCwgX2NhbGMuZWFzZSkoKDAsIF9jYWxjLmdldFByb2dyZXNzRnJvbVZhbHVlKShvdXRBY3Rpb24uZWxhcHNlZCArIHRpbWVTdGVwLCBvdXRWYWx1ZS5kZWxheSwgb3V0VmFsdWUuZHVyYXRpb24pLCBvdXRWYWx1ZS5mcm9tLCBvdXRWYWx1ZS50bywgb3V0VmFsdWUuZWFzZSk7XG4gICAgICAgICAgICB2YXIgaW5BdFRpbWUgPSAoMCwgX2NhbGMuZWFzZSkoKDAsIF9jYWxjLmdldFByb2dyZXNzRnJvbVZhbHVlKShpbkFjdGlvbi5lbGFwc2VkICsgdGltZVN0ZXAsIGluVmFsdWUuZGVsYXksIGluVmFsdWUuZHVyYXRpb24pLCBpblZhbHVlLmZyb20sIGluVmFsdWUudG8sIGluVmFsdWUuZWFzZSk7XG5cbiAgICAgICAgICAgIGlmICghZm91bmRQMSAmJiAoaW5CaWdnZXJUaGFuT3V0QXRTdGFydCAmJiBpbkF0VGltZSA8IG91dEF0VGltZSB8fCAhaW5CaWdnZXJUaGFuT3V0QXRTdGFydCAmJiBpbkF0VGltZSA+IG91dEF0VGltZSkpIHtcbiAgICAgICAgICAgICAgICBibGVuZEN1cnZlLnNwbGljZSgxLCAwLCBbdGltZVN0ZXAsIGluQXRUaW1lXSk7XG4gICAgICAgICAgICAgICAgZm91bmRQMSA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChmb3VuZFAxICYmIChpbkJpZ2dlclRoYW5PdXRBdFN0YXJ0ICYmIGluQXRUaW1lIDwgb3V0VmFsdWUuY3VycmVudCB8fCAhaW5CaWdnZXJUaGFuT3V0QXRTdGFydCAmJiBpbkF0VGltZSA+IG91dFZhbHVlLmN1cnJlbnQpKSB7XG4gICAgICAgICAgICAgICAgYmxlbmRDdXJ2ZVsyXSA9IFt0aW1lU3RlcCwgaW5BdFRpbWVdO1xuICAgICAgICAgICAgICAgIGZvdW5kUDIgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZm91bmRQMikge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGJsZW5kQ3VydmUubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIC8vIFBhc3MgYmV0d2VlbiB0d2VlbnMgdXNpbmcgaW5jb21pbmcgZWFzaW5nIGlmIGp1c3QgdHdvIHBvaW50c1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGJsZW5kUHJvZ3Jlc3MgPSAoMCwgX2NhbGMucmVzdHJpY3QpKCgwLCBfY2FsYy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSkoaW5BY3Rpb24uZWxhcHNlZCwgYmxlbmRDdXJ2ZVswXVswXSwgYmxlbmRDdXJ2ZVsxXVswXSksIDAsIDEpO1xuXG4gICAgICAgICAgICBpZiAoYmxlbmRQcm9ncmVzcyA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGZsb3dWYWx1ZS5ibGVuZEN1cnZlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gKDAsIF9jYWxjLmVhc2UpKGJsZW5kUHJvZ3Jlc3MsIG91dFZhbHVlLmN1cnJlbnQsIGluVmFsdWUuY3VycmVudCwgaW5WYWx1ZS5lYXNlKTtcbiAgICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBQYXNzIGJldHdlZW4gdHdlZW5zIHVzaW5nIGJlemllciBpbnRlcnBvbGF0aW9uXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYmxlbmRQcm9ncmVzcyA9ICgwLCBfY2FsYy5yZXN0cmljdCkoKDAsIF9jYWxjLmdldFByb2dyZXNzRnJvbVZhbHVlKShpbkFjdGlvbi5lbGFwc2VkLCBibGVuZEN1cnZlWzBdWzBdLCBibGVuZEN1cnZlWzJdWzBdKSwgMCwgMSk7XG4gICAgICAgICAgICB2YXIgYVAgPSAoMCwgX2NhbGMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MpKGJsZW5kUHJvZ3Jlc3MsIGJsZW5kQ3VydmVbMF1bMV0sIGJsZW5kQ3VydmVbMV1bMV0pO1xuICAgICAgICAgICAgdmFyIGJQID0gKDAsIF9jYWxjLmdldFZhbHVlRnJvbVByb2dyZXNzKShibGVuZFByb2dyZXNzLCBibGVuZEN1cnZlWzFdWzFdLCBibGVuZEN1cnZlWzJdWzFdKTtcblxuICAgICAgICAgICAgaWYgKGJsZW5kUHJvZ3Jlc3MgPT09IDEpIHtcbiAgICAgICAgICAgICAgICBmbG93VmFsdWUuYmxlbmRDdXJ2ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5WYWx1ZS5jdXJyZW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gKDAsIF9jYWxjLmdldFZhbHVlRnJvbVByb2dyZXNzKShibGVuZFByb2dyZXNzLCBhUCwgYlApO1xuICAgICAgICB9O1xuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwyWnNiM2N2WjJWdVpYSmhkR1V0WW14bGJtUXRZM1Z5ZG1VdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3TzBGQlJVRXNTVUZCVFN4cFFrRkJhVUlzUlVGQmFrSTdPMnRDUVVWVExGVkJRVU1zVTBGQlJDeEZRVUZaTEZGQlFWb3NSVUZCYzBJc1UwRkJkRUlzUlVGQmFVTXNSMEZCYWtNc1JVRkJlVU03UVVGRGNFUXNVVUZCVFN4WFFVRlhMRlZCUVZVc1RVRkJWaXhEUVVGcFFpeEhRVUZxUWl4RFFVRllMRU5CUkRoRE96dEJRVWR3UkN4UlFVRkpMRlZCUVZVc1QwRkJWaXhMUVVGelFpeFRRVUYwUWl4SlFVRnRReXhEUVVGRExGRkJRVVFzUlVGQlZ6dEJRVU01UXl4bFFVUTRRenRMUVVGc1JEczdRVUZKUVN4UlFVRk5MRlZCUVZVc1UwRkJVeXhOUVVGVUxFTkJRV2RDTEVkQlFXaENMRU5CUVZZc1EwRlFPRU03UVVGUmNFUXNVVUZCVFN4dFFrRkJiVUlzVTBGQlV5eExRVUZVTEVkQlFXbENMRk5CUVZNc1VVRkJWQ3hEUVZKVk8wRkJVM0JFTEZGQlFVMHNhMEpCUVd0Q0xFdEJRVXNzUjBGQlRDeERRVUZUTEcxQ1FVRnRRaXhWUVVGVkxFOUJRVllzUlVGQmJVSXNVVUZCVVN4TFFVRlNMRWRCUVdkQ0xGRkJRVkVzVVVGQlVpeERRVUZxUml4RFFWUTRRenRCUVZWd1JDeFJRVUZOTEhGQ1FVRnhRaXhuUWtGQlN5eHZRa0ZCVXl4blEwRkJjVUlzWlVGQmNrSXNSVUZCYzBNc1EwRkJkRU1zUlVGQmVVTXNVVUZCVVN4TFFVRlNMRWRCUVdkQ0xGRkJRVkVzVVVGQlVpeERRVUZzUlN4RlFVRnhSaXhEUVVGeVJpeEZRVUYzUml4RFFVRjRSaXhEUVVGTUxFVkJRV2xITEZGQlFWRXNTVUZCVWl4RlFVRmpMRkZCUVZFc1JVRkJVaXhGUVVGWkxGRkJRVkVzU1VGQlVpeERRVUZvU2l4RFFWWTRRenRCUVZkd1JDeFJRVUZOTEhsQ1FVRjVRaXhSUVVGUkxFbEJRVklzUjBGQlpTeFRRVUZUTEU5QlFWUXNRMEZZVFR0QlFWbHdSQ3hSUVVGTkxIVkNRVUYxUWl4eFFrRkJjVUlzVTBGQlV5eEZRVUZVTEVOQldrVTdRVUZoY0VRc1VVRkJUU3hyUWtGQmEwSXNNa0pCUVRKQ0xHOUNRVUV6UWl4RFFXSTBRanM3UVVGbGNFUXNVVUZCVFN4aFFVRmhMRU5CUVVNc1EwRkJReXhEUVVGRUxFVkJRVWtzVTBGQlV5eFBRVUZVTEVOQlFVd3NSVUZCZDBJc1EwRkJReXhsUVVGRUxFVkJRV3RDTEd0Q1FVRnNRaXhEUVVGNFFpeERRVUZpT3pzN1FVRm1PRU1zVVVGclFtaEVMR1ZCUVVvc1JVRkJjVUk3UVVGRGFrSXNXVUZCVFN4cFFrRkJhVUlzYTBKQlFXdENMR05CUVd4Q0xFTkJSRTQ3UVVGRmFrSXNXVUZCU1N4VlFVRlZMRXRCUVZZc1EwRkdZVHRCUVVkcVFpeFpRVUZKTEZWQlFWVXNTMEZCVml4RFFVaGhPenRCUVV0cVFpeGhRVUZMTEVsQlFVa3NTVUZCU1N4RFFVRktMRVZCUVU4c1MwRkJTeXhqUVVGTUxFVkJRWEZDTEVkQlFYSkRMRVZCUVRCRE8wRkJRM1JETEdkQ1FVRk5MRmRCUVZjc1NVRkJTU3hqUVVGS0xFTkJSSEZDTzBGQlJYUkRMR2RDUVVGTkxGbEJRVmtzWjBKQlFVc3NaME5CUVhGQ0xGVkJRVlVzVDBGQlZpeEhRVUZ2UWl4UlFVRndRaXhGUVVFNFFpeFRRVUZUTEV0QlFWUXNSVUZCWjBJc1UwRkJVeXhSUVVGVUxFTkJRWGhGTEVWQlFUUkdMRk5CUVZNc1NVRkJWQ3hGUVVGbExGTkJRVk1zUlVGQlZDeEZRVUZoTEZOQlFWTXNTVUZCVkN4RFFVRndTU3hEUVVablF6dEJRVWQwUXl4blFrRkJUU3hYUVVGWExHZENRVUZMTEdkRFFVRnhRaXhUUVVGVExFOUJRVlFzUjBGQmJVSXNVVUZCYmtJc1JVRkJOa0lzVVVGQlVTeExRVUZTTEVWQlFXVXNVVUZCVVN4UlFVRlNMRU5CUVhSRkxFVkJRWGxHTEZGQlFWRXNTVUZCVWl4RlFVRmpMRkZCUVZFc1JVRkJVaXhGUVVGWkxGRkJRVkVzU1VGQlVpeERRVUU1U0N4RFFVaG5RenM3UVVGTGRFTXNaMEpCUVVrc1EwRkJReXhQUVVGRUxFdEJRV0VzYzBKQlFVTXNTVUZCTUVJc1YwRkJWeXhUUVVGWUxFbEJRVEJDTEVOQlFVTXNjMEpCUVVRc1NVRkJNa0lzVjBGQlZ5eFRRVUZZTEVOQlFUZEdMRVZCUVhGSU8wRkJRM0pJTERKQ1FVRlhMRTFCUVZnc1EwRkJhMElzUTBGQmJFSXNSVUZCY1VJc1EwRkJja0lzUlVGQmQwSXNRMEZCUXl4UlFVRkVMRVZCUVZjc1VVRkJXQ3hEUVVGNFFpeEZRVVJ4U0R0QlFVVnlTQ3d3UWtGQlZTeEpRVUZXTEVOQlJuRklPMkZCUVhwSU96dEJRVXRCTEdkQ1FVRkpMRmxCUVZrc2MwSkJRVU1zU1VGQk1FSXNWMEZCVnl4VFFVRlRMRTlCUVZRc1NVRkJjMElzUTBGQlF5eHpRa0ZCUkN4SlFVRXlRaXhYUVVGWExGTkJRVk1zVDBGQlZDeERRVUU1Unl4RlFVRnJTVHRCUVVOc1NTd3lRa0ZCVnl4RFFVRllMRWxCUVdkQ0xFTkJRVU1zVVVGQlJDeEZRVUZYTEZGQlFWZ3NRMEZCYUVJc1EwRkVhMGs3UVVGRmJFa3NNRUpCUVZVc1NVRkJWaXhEUVVaclNUdGhRVUYwU1RzN1FVRkxRU3huUWtGQlNTeFBRVUZLTEVWQlFXRTdRVUZEVkN4elFrRkVVenRoUVVGaU8xTkJaa283UzBGTVNqczdRVUV3UWtFc1VVRkJTU3hYUVVGWExFMUJRVmdzUzBGQmMwSXNRMEZCZEVJc1JVRkJlVUk3TzBGQlJYcENMR1ZCUVU4c1dVRkJUVHRCUVVOVUxHZENRVUZOTEdkQ1FVRm5RaXh2UWtGQlV5eG5RMEZCY1VJc1UwRkJVeXhQUVVGVUxFVkJRV3RDTEZkQlFWY3NRMEZCV0N4RlFVRmpMRU5CUVdRc1EwRkJka01zUlVGQmVVUXNWMEZCVnl4RFFVRllMRVZCUVdNc1EwRkJaQ3hEUVVGNlJDeERRVUZVTEVWQlFYRkdMRU5CUVhKR0xFVkJRWGRHTEVOQlFYaEdMRU5CUVdoQ0xFTkJSRWM3TzBGQlIxUXNaMEpCUVVrc2EwSkJRV3RDTEVOQlFXeENMRVZCUVhGQ08wRkJRM0pDTERCQ1FVRlZMRlZCUVZZc1IwRkJkVUlzVTBGQmRrSXNRMEZFY1VJN1lVRkJla0k3TzBGQlNVRXNiVUpCUVU4c1owSkJRVXNzWVVGQlRDeEZRVUZ2UWl4VFFVRlRMRTlCUVZRc1JVRkJhMElzVVVGQlVTeFBRVUZTTEVWQlFXbENMRkZCUVZFc1NVRkJVaXhEUVVFNVJDeERRVkJUTzFOQlFVNHNRMEZHYTBJN1MwRkJOMElzVFVGWFR6czdRVUZGU0N4bFFVRlBMRmxCUVUwN1FVRkRWQ3huUWtGQlRTeG5Ra0ZCWjBJc2IwSkJRVk1zWjBOQlFYRkNMRk5CUVZNc1QwRkJWQ3hGUVVGclFpeFhRVUZYTEVOQlFWZ3NSVUZCWXl4RFFVRmtMRU5CUVhaRExFVkJRWGxFTEZkQlFWY3NRMEZCV0N4RlFVRmpMRU5CUVdRc1EwRkJla1FzUTBGQlZDeEZRVUZ4Uml4RFFVRnlSaXhGUVVGM1JpeERRVUY0Uml4RFFVRm9RaXhEUVVSSE8wRkJSVlFzWjBKQlFVMHNTMEZCU3l4blEwRkJjVUlzWVVGQmNrSXNSVUZCYjBNc1YwRkJWeXhEUVVGWUxFVkJRV01zUTBGQlpDeERRVUZ3UXl4RlFVRnpSQ3hYUVVGWExFTkJRVmdzUlVGQll5eERRVUZrTEVOQlFYUkVMRU5CUVV3c1EwRkdSenRCUVVkVUxHZENRVUZOTEV0QlFVc3NaME5CUVhGQ0xHRkJRWEpDTEVWQlFXOURMRmRCUVZjc1EwRkJXQ3hGUVVGakxFTkJRV1FzUTBGQmNFTXNSVUZCYzBRc1YwRkJWeXhEUVVGWUxFVkJRV01zUTBGQlpDeERRVUYwUkN4RFFVRk1MRU5CU0VjN08wRkJTMVFzWjBKQlFVa3NhMEpCUVd0Q0xFTkJRV3hDTEVWQlFYRkNPMEZCUTNKQ0xEQkNRVUZWTEZWQlFWWXNSMEZCZFVJc1UwRkJka0lzUTBGRWNVSTdRVUZGY2tJc2RVSkJRVThzVVVGQlVTeFBRVUZTTEVOQlJtTTdZVUZCZWtJN08wRkJTMEVzYlVKQlFVOHNaME5CUVhGQ0xHRkJRWEpDTEVWQlFXOURMRVZCUVhCRExFVkJRWGRETEVWQlFYaERMRU5CUVZBc1EwRldVenRUUVVGT0xFTkJSa283UzBGWVVEdERRVFZEVnlJc0ltWnBiR1VpT2lKblpXNWxjbUYwWlMxaWJHVnVaQzFqZFhKMlpTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdleUJuWlhSUWNtOW5jbVZ6YzBaeWIyMVdZV3gxWlN3Z1oyVjBWbUZzZFdWR2NtOXRVSEp2WjNKbGMzTXNJR1ZoYzJVc0lISmxjM1J5YVdOMElIMGdabkp2YlNBbkxpNHZMaTR2YVc1akwyTmhiR01uTzF4dVhHNWpiMjV6ZENCQ1RFVk9SRjlCUTBOVlVrRkRXU0E5SURZd08xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQW9iM1YwUVdOMGFXOXVMQ0JwYmtGamRHbHZiaXdnWm14dmQxWmhiSFZsTENCclpYa3BJRDArSUh0Y2JpQWdJQ0JqYjI1emRDQnZkWFJXWVd4MVpTQTlJRzkxZEVGamRHbHZiaTUyWVd4MVpYTmJhMlY1WFR0Y2JseHVJQ0FnSUdsbUlDaHZkWFJCWTNScGIyNHVaV3hoY0hObFpDQTlQVDBnZFc1a1pXWnBibVZrSUh4OElDRnZkWFJXWVd4MVpTa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNDdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ1kyOXVjM1FnYVc1V1lXeDFaU0E5SUdsdVFXTjBhVzl1TG5aaGJIVmxjMXRyWlhsZE8xeHVJQ0FnSUdOdmJuTjBJRzkxZEZSdmRHRnNSSFZ5WVhScGIyNGdQU0J2ZFhSV1lXeDFaUzVrWld4aGVTQXJJRzkxZEZaaGJIVmxMbVIxY21GMGFXOXVPMXh1SUNBZ0lHTnZibk4wSUhScGJXVlZiblJwYkU5MWRFVnVaQ0E5SUUxaGRHZ3ViV2x1S0c5MWRGUnZkR0ZzUkhWeVlYUnBiMjRnTFNCdmRYUkJZM1JwYjI0dVpXeGhjSE5sWkN3Z2FXNVdZV3gxWlM1a1pXeGhlU0FySUdsdVZtRnNkV1V1WkhWeVlYUnBiMjRwTzF4dUlDQWdJR052Ym5OMElHbHVVRzl6YVhScGIyNUJkRTkxZEVWdVpDQTlJR1ZoYzJVb2NtVnpkSEpwWTNRb1oyVjBVSEp2WjNKbGMzTkdjbTl0Vm1Gc2RXVW9kR2x0WlZWdWRHbHNUM1YwUlc1a0xDQXdMQ0JwYmxaaGJIVmxMbVJsYkdGNUlDc2dhVzVXWVd4MVpTNWtkWEpoZEdsdmJpa3NJREFzSURFcExDQnBibFpoYkhWbExtWnliMjBzSUdsdVZtRnNkV1V1ZEc4c0lHbHVWbUZzZFdVdVpXRnpaU2s3WEc0Z0lDQWdZMjl1YzNRZ2FXNUNhV2RuWlhKVWFHRnVUM1YwUVhSVGRHRnlkQ0E5SUdsdVZtRnNkV1V1Wm5KdmJTQStJRzkxZEZaaGJIVmxMbU4xY25KbGJuUTdYRzRnSUNBZ1kyOXVjM1FnYVc1Q2FXZG5aWEpVYUdGdVQzVjBRWFJGYm1RZ1BTQnBibEJ2YzJsMGFXOXVRWFJQZFhSRmJtUWdQaUJ2ZFhSV1lXeDFaUzUwYnp0Y2JpQWdJQ0JqYjI1emRDQjBkMlZsYm5OSmJuUmxjbk5sWTNRZ1BTQnBia0pwWjJkbGNsUm9ZVzVQZFhSQmRGTjBZWEowSUNFOVBTQnBia0pwWjJkbGNsUm9ZVzVQZFhSQmRFVnVaRHRjYmx4dUlDQWdJR052Ym5OMElHSnNaVzVrUTNWeWRtVWdQU0JiV3pBc0lHOTFkRlpoYkhWbExtTjFjbkpsYm5SZExDQmJkR2x0WlZWdWRHbHNUM1YwUlc1a0xDQnBibEJ2YzJsMGFXOXVRWFJQZFhSRmJtUmRYVHRjYmx4dUlDQWdJQzh2SUVsbUlIUjNaV1Z1Y3lCcGJuUmxjbk5sWTNRc0lISmxjMjlzZG1VZ2RIZGxaVzV6SUdGMElHRWdjbVZ6YjJ4MWRHbHZiaUIwYnlCbWFXNWtJR1Y0WVdOMGJIa2dkMmhsY21WY2JpQWdJQ0JwWmlBb2RIZGxaVzV6U1c1MFpYSnpaV04wS1NCN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUhScGJXVlRkR1Z3Vkc5VVpYTjBJRDBnZEdsdFpWVnVkR2xzVDNWMFJXNWtJQzhnUWt4RlRrUmZRVU5EVlZKQlExazdYRzRnSUNBZ0lDQWdJR3hsZENCbWIzVnVaRkF4SUQwZ1ptRnNjMlU3WEc0Z0lDQWdJQ0FnSUd4bGRDQm1iM1Z1WkZBeUlEMGdabUZzYzJVN1hHNWNiaUFnSUNBZ0lDQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQRDBnUWt4RlRrUmZRVU5EVlZKQlExazdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdkR2x0WlZOMFpYQWdQU0JwSUNvZ2RHbHRaVk4wWlhCVWIxUmxjM1E3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCdmRYUkJkRlJwYldVZ1BTQmxZWE5sS0dkbGRGQnliMmR5WlhOelJuSnZiVlpoYkhWbEtHOTFkRUZqZEdsdmJpNWxiR0Z3YzJWa0lDc2dkR2x0WlZOMFpYQXNJRzkxZEZaaGJIVmxMbVJsYkdGNUxDQnZkWFJXWVd4MVpTNWtkWEpoZEdsdmJpa3NJRzkxZEZaaGJIVmxMbVp5YjIwc0lHOTFkRlpoYkhWbExuUnZMQ0J2ZFhSV1lXeDFaUzVsWVhObEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJR2x1UVhSVWFXMWxJRDBnWldGelpTaG5aWFJRY205bmNtVnpjMFp5YjIxV1lXeDFaU2hwYmtGamRHbHZiaTVsYkdGd2MyVmtJQ3NnZEdsdFpWTjBaWEFzSUdsdVZtRnNkV1V1WkdWc1lYa3NJR2x1Vm1Gc2RXVXVaSFZ5WVhScGIyNHBMQ0JwYmxaaGJIVmxMbVp5YjIwc0lHbHVWbUZzZFdVdWRHOHNJR2x1Vm1Gc2RXVXVaV0Z6WlNrN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDZ2habTkxYm1SUU1TQW1KaUFvS0dsdVFtbG5aMlZ5VkdoaGJrOTFkRUYwVTNSaGNuUWdKaVlnYVc1QmRGUnBiV1VnUENCdmRYUkJkRlJwYldVcElIeDhJQ2doYVc1Q2FXZG5aWEpVYUdGdVQzVjBRWFJUZEdGeWRDQW1KaUJwYmtGMFZHbHRaU0ErSUc5MWRFRjBWR2x0WlNrcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZbXhsYm1SRGRYSjJaUzV6Y0d4cFkyVW9NU3dnTUN3Z1czUnBiV1ZUZEdWd0xDQnBia0YwVkdsdFpWMHBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1p2ZFc1a1VERWdQU0IwY25WbE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb1ptOTFibVJRTVNBbUppQW9LR2x1UW1sbloyVnlWR2hoYms5MWRFRjBVM1JoY25RZ0ppWWdhVzVCZEZScGJXVWdQQ0J2ZFhSV1lXeDFaUzVqZFhKeVpXNTBLU0I4ZkNBb0lXbHVRbWxuWjJWeVZHaGhiazkxZEVGMFUzUmhjblFnSmlZZ2FXNUJkRlJwYldVZ1BpQnZkWFJXWVd4MVpTNWpkWEp5Wlc1MEtTa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JpYkdWdVpFTjFjblpsV3pKZElEMGdXM1JwYldWVGRHVndMQ0JwYmtGMFZHbHRaVjA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWm05MWJtUlFNaUE5SUhSeWRXVTdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaG1iM1Z1WkZBeUtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZbkpsWVdzN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0JwWmlBb1lteGxibVJEZFhKMlpTNXNaVzVuZEdnZ1BUMDlJRElwSUh0Y2JpQWdJQ0FnSUNBZ0x5OGdVR0Z6Y3lCaVpYUjNaV1Z1SUhSM1pXVnVjeUIxYzJsdVp5QnBibU52YldsdVp5QmxZWE5wYm1jZ2FXWWdhblZ6ZENCMGQyOGdjRzlwYm5SelhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlBb0tTQTlQaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCaWJHVnVaRkJ5YjJkeVpYTnpJRDBnY21WemRISnBZM1FvWjJWMFVISnZaM0psYzNOR2NtOXRWbUZzZFdVb2FXNUJZM1JwYjI0dVpXeGhjSE5sWkN3Z1lteGxibVJEZFhKMlpWc3dYVnN3WFN3Z1lteGxibVJEZFhKMlpWc3hYVnN3WFNrc0lEQXNJREVwTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb1lteGxibVJRY205bmNtVnpjeUE5UFQwZ01Ta2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1pzYjNkV1lXeDFaUzVpYkdWdVpFTjFjblpsSUQwZ2RXNWtaV1pwYm1Wa08xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdaV0Z6WlNoaWJHVnVaRkJ5YjJkeVpYTnpMQ0J2ZFhSV1lXeDFaUzVqZFhKeVpXNTBMQ0JwYmxaaGJIVmxMbU4xY25KbGJuUXNJR2x1Vm1Gc2RXVXVaV0Z6WlNrN1hHNGdJQ0FnSUNBZ0lIMDdYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0x5OGdVR0Z6Y3lCaVpYUjNaV1Z1SUhSM1pXVnVjeUIxYzJsdVp5QmlaWHBwWlhJZ2FXNTBaWEp3YjJ4aGRHbHZibHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdLQ2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdZbXhsYm1SUWNtOW5jbVZ6Y3lBOUlISmxjM1J5YVdOMEtHZGxkRkJ5YjJkeVpYTnpSbkp2YlZaaGJIVmxLR2x1UVdOMGFXOXVMbVZzWVhCelpXUXNJR0pzWlc1a1EzVnlkbVZiTUYxYk1GMHNJR0pzWlc1a1EzVnlkbVZiTWwxYk1GMHBMQ0F3TENBeEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJR0ZRSUQwZ1oyVjBWbUZzZFdWR2NtOXRVSEp2WjNKbGMzTW9ZbXhsYm1SUWNtOW5jbVZ6Y3l3Z1lteGxibVJEZFhKMlpWc3dYVnN4WFN3Z1lteGxibVJEZFhKMlpWc3hYVnN4WFNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQmlVQ0E5SUdkbGRGWmhiSFZsUm5KdmJWQnliMmR5WlhOektHSnNaVzVrVUhKdlozSmxjM01zSUdKc1pXNWtRM1Z5ZG1WYk1WMWJNVjBzSUdKc1pXNWtRM1Z5ZG1WYk1sMWJNVjBwTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb1lteGxibVJRY205bmNtVnpjeUE5UFQwZ01Ta2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1pzYjNkV1lXeDFaUzVpYkdWdVpFTjFjblpsSUQwZ2RXNWtaV1pwYm1Wa08xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCcGJsWmhiSFZsTG1OMWNuSmxiblE3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCblpYUldZV3gxWlVaeWIyMVFjbTluY21WemN5aGliR1Z1WkZCeWIyZHlaWE56TENCaFVDd2dZbEFwTzF4dUlDQWdJQ0FnSUNCOU8xeHVJQ0FnSUgxY2JuMDdYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9mbG93L2dlbmVyYXRlLWJsZW5kLWN1cnZlLmpzXG4gKiogbW9kdWxlIGlkID0gMzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9JbnB1dDIgPSByZXF1aXJlKCcuL0lucHV0Jyk7XG5cbnZhciBfSW5wdXQzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfSW5wdXQyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgUG9pbnRlciA9IGZ1bmN0aW9uIChfSW5wdXQpIHtcbiAgICBfaW5oZXJpdHMoUG9pbnRlciwgX0lucHV0KTtcblxuICAgIGZ1bmN0aW9uIFBvaW50ZXIoaW5pdGlhbFN0YXRlLCBtb3ZlRXZlbnQsIGV2ZW50VG9Qb2ludCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUG9pbnRlcik7XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0lucHV0LmNhbGwodGhpcywgaW5pdGlhbFN0YXRlKSk7XG5cbiAgICAgICAgX3RoaXMuZXZlbnRUb1BvaW50ID0gZXZlbnRUb1BvaW50O1xuICAgICAgICBfdGhpcy5tb3ZlRXZlbnQgPSBtb3ZlRXZlbnQ7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBQb2ludGVyLnByb3RvdHlwZS5sYXRlc3QgPSBmdW5jdGlvbiBsYXRlc3QoZSkge1xuICAgICAgICBfSW5wdXQucHJvdG90eXBlLmxhdGVzdC5jYWxsKHRoaXMsIHRoaXMuZXZlbnRUb1BvaW50KGUpKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH07XG5cbiAgICBQb2ludGVyLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICBfSW5wdXQucHJvdG90eXBlLnN0YXJ0LmNhbGwodGhpcyk7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHRoaXMubW92ZUV2ZW50LCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMi5sYXRlc3QoZSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBQb2ludGVyLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgICAgX0lucHV0LnByb3RvdHlwZS5zdG9wLmNhbGwodGhpcyk7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMubW92ZUV2ZW50LCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMy5sYXRlc3QoZSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gUG9pbnRlcjtcbn0oX0lucHV0My5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUG9pbnRlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJuQjFkQzlRYjJsdWRHVnlMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdPenM3T3pzN096czdTVUZGY1VJN096dEJRVU5xUWl4aFFVUnBRaXhQUVVOcVFpeERRVUZaTEZsQlFWb3NSVUZCTUVJc1UwRkJNVUlzUlVGQmNVTXNXVUZCY2tNc1JVRkJiVVE3T0VKQlJHeERMRk5CUTJ0RE96dHhSRUZETDBNc2EwSkJRVTBzV1VGQlRpeEhRVVFyUXpzN1FVRkZMME1zWTBGQlN5eFpRVUZNTEVkQlFXOUNMRmxCUVhCQ0xFTkJSaXRETzBGQlJ5OURMR05CUVVzc1UwRkJUQ3hIUVVGcFFpeFRRVUZxUWl4RFFVZ3JRenM3UzBGQmJrUTdPMEZCUkdsQ0xITkNRVTlxUWl4NVFrRkJUeXhIUVVGSE8wRkJRMDRzZVVKQlFVMHNUVUZCVGl4WlFVRmhMRXRCUVVzc1dVRkJUQ3hEUVVGclFpeERRVUZzUWl4RFFVRmlMRVZCUkUwN1FVRkZUaXhWUVVGRkxHTkJRVVlzUjBGR1RUczdPMEZCVUU4c2MwSkJXV3BDTEhsQ1FVRlJPenM3UVVGRFNpeDVRa0ZCVFN4TFFVRk9MRmxCUkVrN1FVRkZTaXhwUWtGQlV5eGxRVUZVTEVOQlFYbENMR2RDUVVGNlFpeERRVUV3UXl4TFFVRkxMRk5CUVV3c1JVRkJaMElzVlVGQlF5eERRVUZFTzIxQ1FVRlBMRTlCUVVzc1RVRkJUQ3hEUVVGWkxFTkJRVm83VTBGQlVDeERRVUV4UkN4RFFVWkpPenM3UVVGYVV5eHpRa0ZwUW1wQ0xIVkNRVUZQT3pzN1FVRkRTQ3g1UWtGQlRTeEpRVUZPTEZsQlJFYzdRVUZGU0N4cFFrRkJVeXhsUVVGVUxFTkJRWGxDTEcxQ1FVRjZRaXhEUVVFMlF5eExRVUZMTEZOQlFVd3NSVUZCWjBJc1ZVRkJReXhEUVVGRU8yMUNRVUZQTEU5QlFVc3NUVUZCVEN4RFFVRlpMRU5CUVZvN1UwRkJVQ3hEUVVFM1JDeERRVVpIT3pzN1YwRnFRbFVpTENKbWFXeGxJam9pVUc5cGJuUmxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnU1c1d2RYUWdabkp2YlNBbkxpOUpibkIxZENjN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHTnNZWE56SUZCdmFXNTBaWElnWlhoMFpXNWtjeUJKYm5CMWRDQjdYRzRnSUNBZ1kyOXVjM1J5ZFdOMGIzSW9hVzVwZEdsaGJGTjBZWFJsTENCdGIzWmxSWFpsYm5Rc0lHVjJaVzUwVkc5UWIybHVkQ2tnZTF4dUlDQWdJQ0FnSUNCemRYQmxjaWhwYm1sMGFXRnNVM1JoZEdVcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1WMlpXNTBWRzlRYjJsdWRDQTlJR1YyWlc1MFZHOVFiMmx1ZER0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV0YjNabFJYWmxiblFnUFNCdGIzWmxSWFpsYm5RN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYkdGMFpYTjBLR1VwSUh0Y2JpQWdJQ0FnSUNBZ2MzVndaWEl1YkdGMFpYTjBLSFJvYVhNdVpYWmxiblJVYjFCdmFXNTBLR1VwS1R0Y2JpQWdJQ0FnSUNBZ1pTNXdjbVYyWlc1MFJHVm1ZWFZzZENncE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhOMFlYSjBLQ2tnZTF4dUlDQWdJQ0FnSUNCemRYQmxjaTV6ZEdGeWRDZ3BPMXh1SUNBZ0lDQWdJQ0JrYjJOMWJXVnVkQzVrYjJOMWJXVnVkRVZzWlcxbGJuUXVZV1JrUlhabGJuUk1hWE4wWlc1bGNpaDBhR2x6TG0xdmRtVkZkbVZ1ZEN3Z0tHVXBJRDArSUhSb2FYTXViR0YwWlhOMEtHVXBLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnpkRzl3S0NrZ2UxeHVJQ0FnSUNBZ0lDQnpkWEJsY2k1emRHOXdLQ2s3WEc0Z0lDQWdJQ0FnSUdSdlkzVnRaVzUwTG1SdlkzVnRaVzUwUld4bGJXVnVkQzV5WlcxdmRtVkZkbVZ1ZEV4cGMzUmxibVZ5S0hSb2FYTXViVzkyWlVWMlpXNTBMQ0FvWlNrZ1BUNGdkR2hwY3k1c1lYUmxjM1FvWlNrcE8xeHVJQ0FnSUgxY2JuMWNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5wdXQvUG9pbnRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDM4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlYWN0aXZhdGUgPSBleHBvcnRzLmdldFRhc2tJZCA9IHVuZGVmaW5lZDtcbmV4cG9ydHMuYWN0aXZhdGUgPSBhY3RpdmF0ZTtcblxudmFyIF90aW1lciA9IHJlcXVpcmUoJy4vdGltZXInKTtcblxudmFyIF90aW1lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90aW1lcik7XG5cbnZhciBfdGljayA9IHJlcXVpcmUoJy4vdGljaycpO1xuXG52YXIgX3RpY2syID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdGljayk7XG5cbnZhciBfbWFuYWdlciA9IHJlcXVpcmUoJy4vbWFuYWdlcicpO1xuXG52YXIgX21hbmFnZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWFuYWdlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciB0YXNrU3RlcE9yZGVyID0gW3sgbmFtZTogJ29uRnJhbWVTdGFydCcgfSwgeyBuYW1lOiAnb25VcGRhdGUnIH0sIHsgbmFtZTogJ3dpbGxSZW5kZXInLCBkZWNpZGVSZW5kZXI6IHRydWUgfSwgeyBuYW1lOiAnb25QcmVSZW5kZXInLCBpc1JlbmRlcjogdHJ1ZSB9LCB7IG5hbWU6ICdvblJlbmRlcicsIGlzUmVuZGVyOiB0cnVlIH0sIHsgbmFtZTogJ29uUG9zdFJlbmRlcicsIGlzUmVuZGVyOiB0cnVlIH0sIHsgbmFtZTogJ29uRnJhbWVFbmQnIH0sIHsgbmFtZTogJ29uQ2xlYW51cCcgfV07IC8qXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29yZSByZW5kZXIgbG9vcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU29tZSBkZWNpY2lzb25zIGhlcmUgaGF2ZSBiZWVuIHRha2VuIGluIHRoZSBuYW1lIG9mIHBlcmZvcm1hbmNlLiBBbGwgaGFpbCBwZXJmb3JtYW5jZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoSXQgdHVybnMgb3V0IG1pY3Jvb3B0aW1pc2F0aW9ucyBkbyBtYXR0ZXIgd2hlbiB5b3UgaGF2ZSAxNm1zKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cblxudmFyIG51bVRhc2tTdGVwcyA9IHRhc2tTdGVwT3JkZXIubGVuZ3RoO1xuXG4vLyBbYm9vbGVhbl06IElzIGxvb3AgcnVubmluZz9cbnZhciBpc1J1bm5pbmcgPSBmYWxzZTtcblxuLypcbiAgICBbdGltZXN0YW1wXTogRnJhbWUgdGltZXN0YW1wXG4gICAgW2ludF06IFRpbWUgc2luY2UgbGFzdCBmcmFtZVxuKi9cbmZ1bmN0aW9uIGZpcmVBbGwoZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgIHZhciBhY3RpdmVJZHMgPSBfbWFuYWdlcjIuZGVmYXVsdC5nZXRBY3RpdmVJZHMoKTtcbiAgICB2YXIgYWN0aXZlVGFza0NvdW50ID0gYWN0aXZlSWRzLmxlbmd0aDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtVGFza1N0ZXBzOyBpKyspIHtcbiAgICAgICAgdmFyIHN0ZXAgPSB0YXNrU3RlcE9yZGVyW2ldO1xuXG4gICAgICAgIGZvciAodmFyIGkyID0gMDsgaTIgPCBhY3RpdmVUYXNrQ291bnQ7IGkyKyspIHtcbiAgICAgICAgICAgIHZhciB0YXNrID0gX21hbmFnZXIyLmRlZmF1bHQuYWN0aXZlVGFza3NbYWN0aXZlSWRzW2kyXV07XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoaXMgdGFzayBoYXMgdGhpcyBzdGVwLCBvciBpZiBpdCdzIGEgcmVuZGVyIHN0ZXAgdGhhdCB3ZSdyZSByZW5kZXJpbmcgdGhpcyBmcmFtZVxuICAgICAgICAgICAgaWYgKHRhc2sgJiYgdGFza1tzdGVwLm5hbWVdICYmICghc3RlcC5pc1JlbmRlciB8fCBzdGVwLmlzUmVuZGVyICYmIHRhc2suX3JlbmRlclRoaXNGcmFtZSA9PT0gdHJ1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0YXNrW3N0ZXAubmFtZV0uY2FsbCh0YXNrLCB0YXNrLCBmcmFtZVN0YW1wLCBlbGFwc2VkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgdGhpcyBpcyBhIGRlY2lkZSByZW5kZXIgc3RlcCBhbmQgaXQgcmV0dXJucyBgZmFsc2VgLCBzZXQgd2lsbFJlbmRlciB0byBmYWxzZVxuICAgICAgICAgICAgaWYgKHN0ZXAuZGVjaWRlUmVuZGVyKSB7XG4gICAgICAgICAgICAgICAgdGFzay5fcmVuZGVyVGhpc0ZyYW1lID0gdGFza1tzdGVwLm5hbWVdICYmIHJlc3VsdCAhPT0gdHJ1ZSA/IGZhbHNlIDogdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBfbWFuYWdlcjIuZGVmYXVsdC5nZXROb25CYWNrZ3JvdW5kUnVubmluZ0NvdW50KCk7XG59XG5cbi8vIEZ1bmN0aW9uIHRvIGZpcmUgZXZlcnkgZnJhbWVcbmZ1bmN0aW9uIGZyYW1lKGZyYW1lU3RhbXApIHtcbiAgICBfdGltZXIyLmRlZmF1bHQudXBkYXRlKGZyYW1lU3RhbXApO1xuICAgIGlzUnVubmluZyA9IGZpcmVBbGwoZnJhbWVTdGFtcCwgX3RpbWVyMi5kZWZhdWx0LmdldEVsYXBzZWQoKSk7XG5cbiAgICBpZiAoaXNSdW5uaW5nKSB7XG4gICAgICAgICgwLCBfdGljazIuZGVmYXVsdCkoZnJhbWUpO1xuICAgIH1cbn1cblxuLy8gU3RhcnQgbG9vcFxuZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgaWYgKCFpc1J1bm5pbmcpIHtcbiAgICAgICAgX3RpbWVyMi5kZWZhdWx0LnN0YXJ0KCk7XG4gICAgICAgIGlzUnVubmluZyA9IHRydWU7XG4gICAgICAgICgwLCBfdGljazIuZGVmYXVsdCkoZnJhbWUpO1xuICAgIH1cbn1cblxuLy8gRXhwb3J0c1xudmFyIGdldFRhc2tJZCA9IGV4cG9ydHMuZ2V0VGFza0lkID0gX21hbmFnZXIyLmRlZmF1bHQuZ2V0VGFza0lkO1xuXG4vKlxuICAgIFtpbnRdOiB0YXNrIElEIHRvIGFjdGl2YXRlXG4gICAgW3Rhc2tdOiB0YXNrIHRvIGFjdGl2YXRlXG4qL1xuZnVuY3Rpb24gYWN0aXZhdGUoaWQsIHRhc2spIHtcbiAgICBfbWFuYWdlcjIuZGVmYXVsdC5hY3RpdmF0ZShpZCwgdGFzayk7XG5cbiAgICBpZiAoIWlzUnVubmluZykge1xuICAgICAgICBzdGFydCgpO1xuICAgIH1cbn1cblxuLypcbiAgICBbaW50XTogdGFzayBJRCB0byBkZWFjdGl2YXRlXG4qL1xudmFyIGRlYWN0aXZhdGUgPSBleHBvcnRzLmRlYWN0aXZhdGUgPSBfbWFuYWdlcjIuZGVmYXVsdC5kZWFjdGl2YXRlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkwWVhOckwyeHZiM0F1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dFJRV2xHWjBJN096czdPenM3T3pzN096czdPenM3UVVGMlJXaENMRWxCUVUwc1owSkJRV2RDTEVOQlEyeENMRVZCUVVVc1RVRkJUU3hqUVVGT0xFVkJSR2RDTEVWQlJXeENMRVZCUVVVc1RVRkJUU3hWUVVGT0xFVkJSbWRDTEVWQlIyeENMRVZCUVVVc1RVRkJUU3haUVVGT0xFVkJRVzlDTEdOQlFXTXNTVUZCWkN4RlFVaEtMRVZCU1d4Q0xFVkJRVVVzVFVGQlRTeGhRVUZPTEVWQlFYRkNMRlZCUVZVc1NVRkJWaXhGUVVwTUxFVkJTMnhDTEVWQlFVVXNUVUZCVFN4VlFVRk9MRVZCUVd0Q0xGVkJRVlVzU1VGQlZpeEZRVXhHTEVWQlRXeENMRVZCUVVVc1RVRkJUU3hqUVVGT0xFVkJRWE5DTEZWQlFWVXNTVUZCVml4RlFVNU9MRVZCVDJ4Q0xFVkJRVVVzVFVGQlRTeFpRVUZPTEVWQlVHZENMRVZCVVd4Q0xFVkJRVVVzVFVGQlRTeFhRVUZPTEVWQlVtZENMRU5CUVdoQ096czdPenM3TzBGQlZVNHNTVUZCVFN4bFFVRmxMR05CUVdNc1RVRkJaRHM3TzBGQlIzSkNMRWxCUVVrc1dVRkJXU3hMUVVGYU96czdPenM3UVVGTlNpeFRRVUZUTEU5QlFWUXNRMEZCYVVJc1ZVRkJha0lzUlVGQk5rSXNUMEZCTjBJc1JVRkJjME03UVVGRGJFTXNVVUZCVFN4WlFVRlpMR3RDUVVGUkxGbEJRVklzUlVGQldpeERRVVEwUWp0QlFVVnNReXhSUVVGTkxHdENRVUZyUWl4VlFVRlZMRTFCUVZZc1EwRkdWVHM3UVVGSmJFTXNVMEZCU3l4SlFVRkpMRWxCUVVrc1EwRkJTaXhGUVVGUExFbEJRVWtzV1VGQlNpeEZRVUZyUWl4SFFVRnNReXhGUVVGMVF6dEJRVU51UXl4WlFVRk5MRTlCUVU4c1kwRkJZeXhEUVVGa0xFTkJRVkFzUTBGRU5rSTdPMEZCUjI1RExHRkJRVXNzU1VGQlNTeExRVUZMTEVOQlFVd3NSVUZCVVN4TFFVRkxMR1ZCUVV3c1JVRkJjMElzU1VGQmRrTXNSVUZCTmtNN1FVRkRla01zWjBKQlFVMHNUMEZCVHl4clFrRkJVU3hYUVVGU0xFTkJRVzlDTEZWQlFWVXNSVUZCVml4RFFVRndRaXhEUVVGUUxFTkJSRzFETzBGQlJYcERMR2RDUVVGSkxGTkJRVk1zUzBGQlZEczdPMEZCUm5GRExHZENRVXR5UXl4UlFVRlJMRXRCUVVzc1MwRkJTeXhKUVVGTUxFTkJRV0lzUzBGQk5FSXNRMEZCUXl4TFFVRkxMRkZCUVV3c1NVRkJhMElzUzBGQlN5eFJRVUZNTEVsQlFXbENMRXRCUVVzc1owSkJRVXdzUzBGQk1FSXNTVUZCTVVJc1EwRkJhRVVzUlVGQmEwYzdRVUZEYkVjc2VVSkJRVk1zUzBGQlN5eExRVUZMTEVsQlFVd3NRMEZCVEN4RFFVRm5RaXhKUVVGb1FpeERRVUZ4UWl4SlFVRnlRaXhGUVVFeVFpeEpRVUV6UWl4RlFVRnBReXhWUVVGcVF5eEZRVUUyUXl4UFFVRTNReXhEUVVGVUxFTkJSR3RITzJGQlFYUkhPenM3UVVGTWVVTXNaMEpCVlhKRExFdEJRVXNzV1VGQlRDeEZRVUZ0UWp0QlFVTnVRaXh4UWtGQlN5eG5Ra0ZCVEN4SFFVRjNRaXhKUVVGRExFTkJRVXNzUzBGQlN5eEpRVUZNTEVOQlFVd3NTVUZCYlVJc1YwRkJWeXhKUVVGWUxFZEJRVzFDTEV0QlFYWkRMRWRCUVN0RExFbEJRUzlETEVOQlJFdzdZVUZCZGtJN1UwRldTanRMUVVoS096dEJRVzFDUVN4WFFVRlBMR3RDUVVGUkxEUkNRVUZTTEVWQlFWQXNRMEYyUW10RE8wTkJRWFJET3pzN1FVRXlRa0VzVTBGQlV5eExRVUZVTEVOQlFXVXNWVUZCWml4RlFVRXlRanRCUVVOMlFpeHZRa0ZCVFN4TlFVRk9MRU5CUVdFc1ZVRkJZaXhGUVVSMVFqdEJRVVYyUWl4blFrRkJXU3hSUVVGUkxGVkJRVklzUlVGQmIwSXNaMEpCUVUwc1ZVRkJUaXhGUVVGd1FpeERRVUZhTEVOQlJuVkNPenRCUVVsMlFpeFJRVUZKTEZOQlFVb3NSVUZCWlR0QlFVTllMRFJDUVVGTExFdEJRVXdzUlVGRVZ6dExRVUZtTzBOQlNrbzdPenRCUVZWQkxGTkJRVk1zUzBGQlZDeEhRVUZwUWp0QlFVTmlMRkZCUVVrc1EwRkJReXhUUVVGRUxFVkJRVms3UVVGRFdpeDNRa0ZCVFN4TFFVRk9MRWRCUkZrN1FVRkZXaXh2UWtGQldTeEpRVUZhTEVOQlJsazdRVUZIV2l3MFFrRkJTeXhMUVVGTUxFVkJTRms3UzBGQmFFSTdRMEZFU2pzN08wRkJVMDhzU1VGQlRTeG5RMEZCV1N4clFrRkJVU3hUUVVGU096czdPenM3UVVGTmJFSXNVMEZCVXl4UlFVRlVMRU5CUVd0Q0xFVkJRV3hDTEVWQlFYTkNMRWxCUVhSQ0xFVkJRVFJDTzBGQlF5OUNMSE5DUVVGUkxGRkJRVklzUTBGQmFVSXNSVUZCYWtJc1JVRkJjVUlzU1VGQmNrSXNSVUZFSzBJN08wRkJSeTlDTEZGQlFVa3NRMEZCUXl4VFFVRkVMRVZCUVZrN1FVRkRXaXhuUWtGRVdUdExRVUZvUWp0RFFVaEhPenM3T3p0QlFWZEJMRWxCUVUwc2EwTkJRV0VzYTBKQlFWRXNWVUZCVWlJc0ltWnBiR1VpT2lKc2IyOXdMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwTDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk4cVhHNGdJQ0FnUTI5eVpTQnlaVzVrWlhJZ2JHOXZjRnh1WEc0Z0lDQWdVMjl0WlNCa1pXTnBZMmx6YjI1eklHaGxjbVVnYUdGMlpTQmlaV1Z1SUhSaGEyVnVJR2x1SUhSb1pTQnVZVzFsSUc5bUlIQmxjbVp2Y20xaGJtTmxMaUJCYkd3Z2FHRnBiQ0J3WlhKbWIzSnRZVzVqWlM1Y2JpQWdJQ0FvU1hRZ2RIVnlibk1nYjNWMElHMXBZM0p2YjNCMGFXMXBjMkYwYVc5dWN5QmtieUJ0WVhSMFpYSWdkMmhsYmlCNWIzVWdhR0YyWlNBeE5tMXpLVnh1S2k5Y2JtbHRjRzl5ZENCMGFXMWxjaUJtY205dElDY3VMM1JwYldWeUp6dGNibWx0Y0c5eWRDQjBhV05ySUdaeWIyMGdKeTR2ZEdsamF5YzdYRzVwYlhCdmNuUWdiV0Z1WVdkbGNpQm1jbTl0SUNjdUwyMWhibUZuWlhJbk8xeHVYRzVqYjI1emRDQjBZWE5yVTNSbGNFOXlaR1Z5SUQwZ1cxeHVJQ0FnSUhzZ2JtRnRaVG9nSjI5dVJuSmhiV1ZUZEdGeWRDY2dmU3hjYmlBZ0lDQjdJRzVoYldVNklDZHZibFZ3WkdGMFpTY2dmU3hjYmlBZ0lDQjdJRzVoYldVNklDZDNhV3hzVW1WdVpHVnlKeXdnWkdWamFXUmxVbVZ1WkdWeU9pQjBjblZsSUgwc1hHNGdJQ0FnZXlCdVlXMWxPaUFuYjI1UWNtVlNaVzVrWlhJbkxDQnBjMUpsYm1SbGNqb2dkSEoxWlNCOUxGeHVJQ0FnSUhzZ2JtRnRaVG9nSjI5dVVtVnVaR1Z5Snl3Z2FYTlNaVzVrWlhJNklIUnlkV1VnZlN4Y2JpQWdJQ0I3SUc1aGJXVTZJQ2R2YmxCdmMzUlNaVzVrWlhJbkxDQnBjMUpsYm1SbGNqb2dkSEoxWlNCOUxGeHVJQ0FnSUhzZ2JtRnRaVG9nSjI5dVJuSmhiV1ZGYm1RbklIMHNYRzRnSUNBZ2V5QnVZVzFsT2lBbmIyNURiR1ZoYm5Wd0p5QjlYRzVkTzF4dVkyOXVjM1FnYm5WdFZHRnphMU4wWlhCeklEMGdkR0Z6YTFOMFpYQlBjbVJsY2k1c1pXNW5kR2c3WEc1Y2JpOHZJRnRpYjI5c1pXRnVYVG9nU1hNZ2JHOXZjQ0J5ZFc1dWFXNW5QMXh1YkdWMElHbHpVblZ1Ym1sdVp5QTlJR1poYkhObE8xeHVYRzR2S2x4dUlDQWdJRnQwYVcxbGMzUmhiWEJkT2lCR2NtRnRaU0IwYVcxbGMzUmhiWEJjYmlBZ0lDQmJhVzUwWFRvZ1ZHbHRaU0J6YVc1alpTQnNZWE4wSUdaeVlXMWxYRzRxTDF4dVpuVnVZM1JwYjI0Z1ptbHlaVUZzYkNobWNtRnRaVk4wWVcxd0xDQmxiR0Z3YzJWa0tTQjdYRzRnSUNBZ1kyOXVjM1FnWVdOMGFYWmxTV1J6SUQwZ2JXRnVZV2RsY2k1blpYUkJZM1JwZG1WSlpITW9LVHRjYmlBZ0lDQmpiMjV6ZENCaFkzUnBkbVZVWVhOclEyOTFiblFnUFNCaFkzUnBkbVZKWkhNdWJHVnVaM1JvTzF4dVhHNGdJQ0FnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCdWRXMVVZWE5yVTNSbGNITTdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCemRHVndJRDBnZEdGemExTjBaWEJQY21SbGNsdHBYVHRjYmx4dUlDQWdJQ0FnSUNCbWIzSWdLR3hsZENCcE1pQTlJREE3SUdreUlEd2dZV04wYVhabFZHRnphME52ZFc1ME95QnBNaXNyS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQjBZWE5ySUQwZ2JXRnVZV2RsY2k1aFkzUnBkbVZVWVhOcmMxdGhZM1JwZG1WSlpITmJhVEpkWFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJR3hsZENCeVpYTjFiSFFnUFNCbVlXeHpaVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnUTJobFkyc2dhV1lnZEdocGN5QjBZWE5ySUdoaGN5QjBhR2x6SUhOMFpYQXNJRzl5SUdsbUlHbDBKM01nWVNCeVpXNWtaWElnYzNSbGNDQjBhR0YwSUhkbEozSmxJSEpsYm1SbGNtbHVaeUIwYUdseklHWnlZVzFsWEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvZEdGemF5QW1KaUIwWVhOclczTjBaWEF1Ym1GdFpWMGdKaVlnS0NGemRHVndMbWx6VW1WdVpHVnlJSHg4SUNoemRHVndMbWx6VW1WdVpHVnlJQ1ltSUhSaGMyc3VYM0psYm1SbGNsUm9hWE5HY21GdFpTQTlQVDBnZEhKMVpTa3BLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WemRXeDBJRDBnZEdGemExdHpkR1Z3TG01aGJXVmRMbU5oYkd3b2RHRnpheXdnZEdGemF5d2dabkpoYldWVGRHRnRjQ3dnWld4aGNITmxaQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJRWxtSUhSb2FYTWdhWE1nWVNCa1pXTnBaR1VnY21WdVpHVnlJSE4wWlhBZ1lXNWtJR2wwSUhKbGRIVnlibk1nWUdaaGJITmxZQ3dnYzJWMElIZHBiR3hTWlc1a1pYSWdkRzhnWm1Gc2MyVmNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaHpkR1Z3TG1SbFkybGtaVkpsYm1SbGNpa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJoYzJzdVgzSmxibVJsY2xSb2FYTkdjbUZ0WlNBOUlDaDBZWE5yVzNOMFpYQXVibUZ0WlYwZ0ppWWdjbVZ6ZFd4MElDRTlQU0IwY25WbEtTQS9JR1poYkhObElEb2dkSEoxWlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJSEpsZEhWeWJpQnRZVzVoWjJWeUxtZGxkRTV2YmtKaFkydG5jbTkxYm1SU2RXNXVhVzVuUTI5MWJuUW9LVHRjYm4xY2JseHVMeThnUm5WdVkzUnBiMjRnZEc4Z1ptbHlaU0JsZG1WeWVTQm1jbUZ0WlZ4dVpuVnVZM1JwYjI0Z1puSmhiV1VvWm5KaGJXVlRkR0Z0Y0NrZ2UxeHVJQ0FnSUhScGJXVnlMblZ3WkdGMFpTaG1jbUZ0WlZOMFlXMXdLVHRjYmlBZ0lDQnBjMUoxYm01cGJtY2dQU0JtYVhKbFFXeHNLR1p5WVcxbFUzUmhiWEFzSUhScGJXVnlMbWRsZEVWc1lYQnpaV1FvS1NrN1hHNWNiaUFnSUNCcFppQW9hWE5TZFc1dWFXNW5LU0I3WEc0Z0lDQWdJQ0FnSUhScFkyc29abkpoYldVcE8xeHVJQ0FnSUgxY2JuMWNibHh1THk4Z1UzUmhjblFnYkc5dmNGeHVablZ1WTNScGIyNGdjM1JoY25Rb0tTQjdYRzRnSUNBZ2FXWWdLQ0ZwYzFKMWJtNXBibWNwSUh0Y2JpQWdJQ0FnSUNBZ2RHbHRaWEl1YzNSaGNuUW9LVHRjYmlBZ0lDQWdJQ0FnYVhOU2RXNXVhVzVuSUQwZ2RISjFaVHRjYmlBZ0lDQWdJQ0FnZEdsamF5aG1jbUZ0WlNrN1hHNGdJQ0FnZlZ4dWZWeHVYRzR2THlCRmVIQnZjblJ6WEc1bGVIQnZjblFnWTI5dWMzUWdaMlYwVkdGemEwbGtJRDBnYldGdVlXZGxjaTVuWlhSVVlYTnJTV1E3WEc1Y2JpOHFYRzRnSUNBZ1cybHVkRjA2SUhSaGMyc2dTVVFnZEc4Z1lXTjBhWFpoZEdWY2JpQWdJQ0JiZEdGemExMDZJSFJoYzJzZ2RHOGdZV04wYVhaaGRHVmNiaW92WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnWVdOMGFYWmhkR1VvYVdRc0lIUmhjMnNwSUh0Y2JpQWdJQ0J0WVc1aFoyVnlMbUZqZEdsMllYUmxLR2xrTENCMFlYTnJLVHRjYmx4dUlDQWdJR2xtSUNnaGFYTlNkVzV1YVc1bktTQjdYRzRnSUNBZ0lDQWdJSE4wWVhKMEtDazdYRzRnSUNBZ2ZWeHVmVnh1WEc0dktseHVJQ0FnSUZ0cGJuUmRPaUIwWVhOcklFbEVJSFJ2SUdSbFlXTjBhWFpoZEdWY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ1pHVmhZM1JwZG1GMFpTQTlJRzFoYm1GblpYSXVaR1ZoWTNScGRtRjBaVHNpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdGFzay9sb29wLmpzXG4gKiogbW9kdWxlIGlkID0gMzlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBUUkFOU0xBVEUgPSAndHJhbnNsYXRlJztcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIHg6IFRSQU5TTEFURSArICdYJyxcbiAgICB5OiBUUkFOU0xBVEUgKyAnWScsXG4gICAgejogVFJBTlNMQVRFICsgJ1onXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMMk56Y3k5emRHRjBaUzF0WVhBdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPMEZCUVVFc1NVRkJUU3haUVVGWkxGZEJRVm83TzJ0Q1FVVlRPMEZCUTFnc1QwRkJSeXhaUVVGWkxFZEJRVm83UVVGRFNDeFBRVUZITEZsQlFWa3NSMEZCV2p0QlFVTklMRTlCUVVjc1dVRkJXU3hIUVVGYUlpd2labWxzWlNJNkluTjBZWFJsTFcxaGNDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpqYjI1emRDQlVVa0ZPVTB4QlZFVWdQU0FuZEhKaGJuTnNZWFJsSnp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2UxeHVJQ0FnSUhnNklGUlNRVTVUVEVGVVJTQXJJQ2RZSnl4Y2JpQWdJQ0I1T2lCVVVrRk9VMHhCVkVVZ0t5QW5XU2NzWEc0Z0lDQWdlam9nVkZKQlRsTk1RVlJGSUNzZ0oxb25YRzU5T3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FkYXB0ZXIvY3NzL3N0YXRlLW1hcC5qc1xuICoqIG1vZHVsZSBpZCA9IDQwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfYW5nbGUgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9hbmdsZScpO1xuXG52YXIgX2FuZ2xlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FuZ2xlKTtcblxudmFyIF9hbHBoYSA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL2FscGhhJyk7XG5cbnZhciBfYWxwaGEyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWxwaGEpO1xuXG52YXIgX2NvbG9yID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvY29sb3InKTtcblxudmFyIF9jb2xvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb2xvcik7XG5cbnZhciBfc2NhbGUgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9zY2FsZScpO1xuXG52YXIgX3NjYWxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NjYWxlKTtcblxudmFyIF9zaGFkb3cgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9zaGFkb3cnKTtcblxudmFyIF9zaGFkb3cyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2hhZG93KTtcblxudmFyIF9weCA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL3B4Jyk7XG5cbnZhciBfcHgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgLy8gQ29sb3IgcHJvcHNcbiAgICBjb2xvcjogX2NvbG9yMi5kZWZhdWx0LFxuICAgIGJhY2tncm91bmRDb2xvcjogX2NvbG9yMi5kZWZhdWx0LFxuICAgIG91dGxpbmVDb2xvcjogX2NvbG9yMi5kZWZhdWx0LFxuICAgIGZpbGw6IF9jb2xvcjIuZGVmYXVsdCxcbiAgICBzdHJva2U6IF9jb2xvcjIuZGVmYXVsdCxcblxuICAgIC8vIEJvcmRlciBwcm9wc1xuICAgIGJvcmRlckNvbG9yOiBfY29sb3IyLmRlZmF1bHQsXG4gICAgYm9yZGVyVG9wQ29sb3I6IF9jb2xvcjIuZGVmYXVsdCxcbiAgICBib3JkZXJSaWdodENvbG9yOiBfY29sb3IyLmRlZmF1bHQsXG4gICAgYm9yZGVyQm90dG9tQ29sb3I6IF9jb2xvcjIuZGVmYXVsdCxcbiAgICBib3JkZXJMZWZ0Q29sb3I6IF9jb2xvcjIuZGVmYXVsdCxcbiAgICBib3JkZXJSYWRpdXM6IF9weDIuZGVmYXVsdCxcblxuICAgIC8vIFBvc2l0aW9uaW5nXG4gICAgd2lkdGg6IF9weDIuZGVmYXVsdCxcbiAgICBoZWlnaHQ6IF9weDIuZGVmYXVsdCxcblxuICAgIC8vIFNoYWRvd3NcbiAgICB0ZXh0U2hhZG93OiBfc2hhZG93Mi5kZWZhdWx0LFxuICAgIGJveFNoYWRvdzogX3NoYWRvdzIuZGVmYXVsdCxcblxuICAgIC8vIFRyYW5zZm9ybSBwcm9wZXJ0aWVzXG4gICAgcm90YXRlOiBfYW5nbGUyLmRlZmF1bHQsXG4gICAgcm90YXRlWDogX2FuZ2xlMi5kZWZhdWx0LFxuICAgIHJvdGF0ZVk6IF9hbmdsZTIuZGVmYXVsdCxcbiAgICByb3RhdGVaOiBfYW5nbGUyLmRlZmF1bHQsXG4gICAgc2NhbGU6IF9zY2FsZTIuZGVmYXVsdCxcbiAgICBzY2FsZVg6IF9zY2FsZTIuZGVmYXVsdCxcbiAgICBzY2FsZVk6IF9zY2FsZTIuZGVmYXVsdCxcbiAgICBzY2FsZVo6IF9zY2FsZTIuZGVmYXVsdCxcbiAgICBza2V3WDogX2FuZ2xlMi5kZWZhdWx0LFxuICAgIHNrZXdZOiBfYW5nbGUyLmRlZmF1bHQsXG4gICAgZGlzdGFuY2U6IF9weDIuZGVmYXVsdCxcbiAgICB0cmFuc2xhdGVYOiBfcHgyLmRlZmF1bHQsXG4gICAgdHJhbnNsYXRlWTogX3B4Mi5kZWZhdWx0LFxuICAgIHRyYW5zbGF0ZVo6IF9weDIuZGVmYXVsdCxcbiAgICBwZXJzcGVjdGl2ZTogX3B4Mi5kZWZhdWx0LFxuICAgIG9wYWNpdHk6IF9hbHBoYTIuZGVmYXVsdFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFpHRndkR1Z5TDJOemN5OTJZV3gxWlMxMGVYQmxMVzFoY0M1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdhMEpCVDJVN08wRkJSVmdzTUVKQlJsYzdRVUZIV0N4dlEwRklWenRCUVVsWUxHbERRVXBYTzBGQlMxZ3NlVUpCVEZjN1FVRk5XQ3d5UWtGT1Z6czdPMEZCVTFnc1owTkJWRmM3UVVGVldDeHRRMEZXVnp0QlFWZFlMSEZEUVZoWE8wRkJXVmdzYzBOQldsYzdRVUZoV0N4dlEwRmlWenRCUVdOWUxEaENRV1JYT3pzN1FVRnBRbGdzZFVKQmFrSlhPMEZCYTBKWUxIZENRV3hDVnpzN08wRkJjVUpZTEdkRFFYSkNWenRCUVhOQ1dDd3JRa0YwUWxjN096dEJRWGxDV0N3eVFrRjZRbGM3UVVFd1FsZ3NORUpCTVVKWE8wRkJNa0pZTERSQ1FUTkNWenRCUVRSQ1dDdzBRa0UxUWxjN1FVRTJRbGdzTUVKQk4wSlhPMEZCT0VKWUxESkNRVGxDVnp0QlFTdENXQ3d5UWtFdlFsYzdRVUZuUTFnc01rSkJhRU5YTzBGQmFVTllMREJDUVdwRFZ6dEJRV3REV0N3d1FrRnNRMWM3UVVGdFExZ3NNRUpCYmtOWE8wRkJiME5ZTERSQ1FYQkRWenRCUVhGRFdDdzBRa0Z5UTFjN1FVRnpRMWdzTkVKQmRFTlhPMEZCZFVOWUxEWkNRWFpEVnp0QlFYZERXQ3cwUWtGNFExY2lMQ0ptYVd4bElqb2lkbUZzZFdVdGRIbHdaUzF0WVhBdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUXZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElHRnVaMnhsSUdaeWIyMGdKeTR1THk0dUwzWmhiSFZsTFhSNWNHVnpMMkZ1WjJ4bEp6dGNibWx0Y0c5eWRDQmhiSEJvWVNCbWNtOXRJQ2N1TGk4dUxpOTJZV3gxWlMxMGVYQmxjeTloYkhCb1lTYzdYRzVwYlhCdmNuUWdZMjlzYjNJZ1puSnZiU0FuTGk0dkxpNHZkbUZzZFdVdGRIbHdaWE12WTI5c2IzSW5PMXh1YVcxd2IzSjBJSE5qWVd4bElHWnliMjBnSnk0dUx5NHVMM1poYkhWbExYUjVjR1Z6TDNOallXeGxKenRjYm1sdGNHOXlkQ0J6YUdGa2IzY2dabkp2YlNBbkxpNHZMaTR2ZG1Gc2RXVXRkSGx3WlhNdmMyaGhaRzkzSnp0Y2JtbHRjRzl5ZENCd2VDQm1jbTl0SUNjdUxpOHVMaTkyWVd4MVpTMTBlWEJsY3k5d2VDYzdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJSHRjYmlBZ0lDQXZMeUJEYjJ4dmNpQndjbTl3YzF4dUlDQWdJR052Ykc5eU9pQmpiMnh2Y2l4Y2JpQWdJQ0JpWVdOclozSnZkVzVrUTI5c2IzSTZJR052Ykc5eUxGeHVJQ0FnSUc5MWRHeHBibVZEYjJ4dmNqb2dZMjlzYjNJc1hHNGdJQ0FnWm1sc2JEb2dZMjlzYjNJc1hHNGdJQ0FnYzNSeWIydGxPaUJqYjJ4dmNpeGNibHh1SUNBZ0lDOHZJRUp2Y21SbGNpQndjbTl3YzF4dUlDQWdJR0p2Y21SbGNrTnZiRzl5T2lCamIyeHZjaXhjYmlBZ0lDQmliM0prWlhKVWIzQkRiMnh2Y2pvZ1kyOXNiM0lzWEc0Z0lDQWdZbTl5WkdWeVVtbG5hSFJEYjJ4dmNqb2dZMjlzYjNJc1hHNGdJQ0FnWW05eVpHVnlRbTkwZEc5dFEyOXNiM0k2SUdOdmJHOXlMRnh1SUNBZ0lHSnZjbVJsY2t4bFpuUkRiMnh2Y2pvZ1kyOXNiM0lzWEc0Z0lDQWdZbTl5WkdWeVVtRmthWFZ6T2lCd2VDeGNibHh1SUNBZ0lDOHZJRkJ2YzJsMGFXOXVhVzVuWEc0Z0lDQWdkMmxrZEdnNklIQjRMRnh1SUNBZ0lHaGxhV2RvZERvZ2NIZ3NYRzVjYmlBZ0lDQXZMeUJUYUdGa2IzZHpYRzRnSUNBZ2RHVjRkRk5vWVdSdmR6b2djMmhoWkc5M0xGeHVJQ0FnSUdKdmVGTm9ZV1J2ZHpvZ2MyaGhaRzkzTENBZ0lGeHVYRzRnSUNBZ0x5OGdWSEpoYm5ObWIzSnRJSEJ5YjNCbGNuUnBaWE5jYmlBZ0lDQnliM1JoZEdVNklHRnVaMnhsTEZ4dUlDQWdJSEp2ZEdGMFpWZzZJR0Z1WjJ4bExGeHVJQ0FnSUhKdmRHRjBaVms2SUdGdVoyeGxMRnh1SUNBZ0lISnZkR0YwWlZvNklHRnVaMnhsTEZ4dUlDQWdJSE5qWVd4bE9pQnpZMkZzWlN4Y2JpQWdJQ0J6WTJGc1pWZzZJSE5qWVd4bExGeHVJQ0FnSUhOallXeGxXVG9nYzJOaGJHVXNYRzRnSUNBZ2MyTmhiR1ZhT2lCelkyRnNaU3hjYmlBZ0lDQnphMlYzV0RvZ1lXNW5iR1VzWEc0Z0lDQWdjMnRsZDFrNklHRnVaMnhsTEZ4dUlDQWdJR1JwYzNSaGJtTmxPaUJ3ZUN4Y2JpQWdJQ0IwY21GdWMyeGhkR1ZZT2lCd2VDeGNiaUFnSUNCMGNtRnVjMnhoZEdWWk9pQndlQ3hjYmlBZ0lDQjBjbUZ1YzJ4aGRHVmFPaUJ3ZUN4Y2JpQWdJQ0J3WlhKemNHVmpkR2wyWlRvZ2NIZ3NYRzRnSUNBZ2IzQmhZMmwwZVRvZ1lXeHdhR0ZjYm4wN0lsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FkYXB0ZXIvY3NzL3ZhbHVlLXR5cGUtbWFwLmpzXG4gKiogbW9kdWxlIGlkID0gNDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wcyA9IHJlcXVpcmUoJy4vdHJhbnNmb3JtLXByb3BzJyk7XG5cbnZhciBfdHJhbnNmb3JtUHJvcHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNmb3JtUHJvcHMpO1xuXG52YXIgX3ByZWZpeGVyID0gcmVxdWlyZSgnLi9wcmVmaXhlcicpO1xuXG52YXIgX3ByZWZpeGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ByZWZpeGVyKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uLy4uL2luYy91dGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgVFJBTlNMQVRFX1ogPSAndHJhbnNsYXRlWic7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChzdGF0ZSwgZGlzYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uKSB7XG4gICAgdmFyIHByb3BlcnR5U3RyaW5nID0gJyc7XG4gICAgdmFyIHRyYW5zZm9ybVN0cmluZyA9ICcnO1xuICAgIHZhciB0cmFuc2Zvcm1IYXNaID0gZmFsc2U7XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc3RhdGUpIHtcbiAgICAgICAgaWYgKHN0YXRlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHN0YXRlW2tleV07XG5cbiAgICAgICAgICAgIGlmIChfdHJhbnNmb3JtUHJvcHMyLmRlZmF1bHRba2V5XSkge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybVN0cmluZyArPSBrZXkgKyAnKCcgKyB2YWx1ZSArICcpICc7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtSGFzWiA9IGtleSA9PT0gVFJBTlNMQVRFX1ogPyB0cnVlIDogdHJhbnNmb3JtSGFzWjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJvcGVydHlTdHJpbmcgKz0gJzsnICsgKDAsIF9wcmVmaXhlcjIuZGVmYXVsdCkoKDAsIF91dGlscy5jYW1lbFRvRGFzaCkoa2V5KSkgKyAnOicgKyB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0cmFuc2Zvcm1TdHJpbmcgIT09ICcnKSB7XG4gICAgICAgIGlmICghdHJhbnNmb3JtSGFzWiAmJiAhZGlzYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm1TdHJpbmcgKz0gVFJBTlNMQVRFX1ogKyAnKDBweCknO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJvcGVydHlTdHJpbmcgKz0gJzsnICsgKDAsIF9wcmVmaXhlcjIuZGVmYXVsdCkoJ3RyYW5zZm9ybScpICsgJzonICsgdHJhbnNmb3JtU3RyaW5nO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0eVN0cmluZztcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwyTnpjeTlpZFdsc1pDNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN096czdPenM3T3pzN08wRkJTVUVzU1VGQlRTeGpRVUZqTEZsQlFXUTdPMnRDUVVWVExGVkJRVU1zUzBGQlJDeEZRVUZSTERKQ1FVRlNMRVZCUVhkRE8wRkJRMjVFTEZGQlFVa3NhVUpCUVdsQ0xFVkJRV3BDTEVOQlJDdERPMEZCUlc1RUxGRkJRVWtzYTBKQlFXdENMRVZCUVd4Q0xFTkJSaXRETzBGQlIyNUVMRkZCUVVrc1owSkJRV2RDTEV0QlFXaENMRU5CU0N0RE96dEJRVXR1UkN4VFFVRkxMRWxCUVVrc1IwRkJTaXhKUVVGWExFdEJRV2hDTEVWQlFYVkNPMEZCUTI1Q0xGbEJRVWtzVFVGQlRTeGpRVUZPTEVOQlFYRkNMRWRCUVhKQ0xFTkJRVW9zUlVGQkswSTdRVUZETTBJc1owSkJRVTBzVVVGQlVTeE5RVUZOTEVkQlFVNHNRMEZCVWl4RFFVUnhRanM3UVVGSE0wSXNaMEpCUVVrc2VVSkJRV1VzUjBGQlppeERRVUZLTEVWQlFYbENPMEZCUTNKQ0xHMURRVUZ0UWl4TlFVRk5MRWRCUVU0c1IwRkJXU3hMUVVGYUxFZEJRVzlDTEVsQlFYQkNMRU5CUkVVN1FVRkZja0lzWjBOQlFXZENMRWRCUVVNc1MwRkJVU3hYUVVGU0xFZEJRWFZDTEVsQlFYaENMRWRCUVN0Q0xHRkJRUzlDTEVOQlJrczdZVUZCZWtJc1RVRkpUenRCUVVOSUxHdERRVUZyUWl4TlFVRk5MSGRDUVVGVExIZENRVUZaTEVkQlFWb3NRMEZCVkN4RFFVRk9MRWRCUVcxRExFZEJRVzVETEVkQlFYbERMRXRCUVhwRExFTkJSR1k3WVVGS1VEdFRRVWhLTzB0QlJFbzdPMEZCWTBFc1VVRkJTU3h2UWtGQmIwSXNSVUZCY0VJc1JVRkJkMEk3UVVGRGVFSXNXVUZCU1N4RFFVRkRMR0ZCUVVRc1NVRkJhMElzUTBGQlF5d3lRa0ZCUkN4RlFVRTRRanRCUVVOb1JDd3JRa0ZCYlVJc1kwRkJZeXhQUVVGa0xFTkJSRFpDTzFOQlFYQkVPenRCUVVsQkxEQkNRVUZyUWl4TlFVRk5MSGRDUVVGVExGZEJRVlFzUTBGQlRpeEhRVUU0UWl4SFFVRTVRaXhIUVVGdlF5eGxRVUZ3UXl4RFFVeE5PMHRCUVRWQ096dEJRVkZCTEZkQlFVOHNZMEZCVUN4RFFUTkNiVVE3UTBGQmVFTWlMQ0ptYVd4bElqb2lZblZwYkdRdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUXZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElIUnlZVzV6Wm05eWJWQnliM0J6SUdaeWIyMGdKeTR2ZEhKaGJuTm1iM0p0TFhCeWIzQnpKenRjYm1sdGNHOXlkQ0J3Y21WbWFYaGxjaUJtY205dElDY3VMM0J5WldacGVHVnlKenRjYm1sdGNHOXlkQ0I3SUdOaGJXVnNWRzlFWVhOb0lIMGdabkp2YlNBbkxpNHZMaTR2YVc1akwzVjBhV3h6Snp0Y2JseHVZMjl1YzNRZ1ZGSkJUbE5NUVZSRlgxb2dQU0FuZEhKaGJuTnNZWFJsV2ljN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElDaHpkR0YwWlN3Z1pHbHpZV0pzWlVoaGNtUjNZWEpsUVdOalpXeGxjbUYwYVc5dUtTQTlQaUI3WEc0Z0lDQWdiR1YwSUhCeWIzQmxjblI1VTNSeWFXNW5JRDBnSnljN1hHNGdJQ0FnYkdWMElIUnlZVzV6Wm05eWJWTjBjbWx1WnlBOUlDY25PMXh1SUNBZ0lHeGxkQ0IwY21GdWMyWnZjbTFJWVhOYUlEMGdabUZzYzJVN1hHNWNiaUFnSUNCbWIzSWdLR3hsZENCclpYa2dhVzRnYzNSaGRHVXBJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tITjBZWFJsTG1oaGMwOTNibEJ5YjNCbGNuUjVLR3RsZVNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJSFpoYkhWbElEMGdjM1JoZEdWYmEyVjVYVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0hSeVlXNXpabTl5YlZCeWIzQnpXMnRsZVYwcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBjbUZ1YzJadmNtMVRkSEpwYm1jZ0t6MGdhMlY1SUNzZ0p5Z25JQ3NnZG1Gc2RXVWdLeUFuS1NBbk8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUnlZVzV6Wm05eWJVaGhjMW9nUFNBb2EyVjVJRDA5UFNCVVVrRk9VMHhCVkVWZldpa2dQeUIwY25WbElEb2dkSEpoYm5ObWIzSnRTR0Z6V2p0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J3Y205d1pYSjBlVk4wY21sdVp5QXJQU0FuT3ljZ0t5QndjbVZtYVhobGNpaGpZVzFsYkZSdlJHRnphQ2hyWlhrcEtTQXJJQ2M2SnlBcklIWmhiSFZsTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVnh1WEc0Z0lDQWdhV1lnS0hSeVlXNXpabTl5YlZOMGNtbHVaeUFoUFQwZ0p5Y3BJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tDRjBjbUZ1YzJadmNtMUlZWE5hSUNZbUlDRmthWE5oWW14bFNHRnlaSGRoY21WQlkyTmxiR1Z5WVhScGIyNHBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUnlZVzV6Wm05eWJWTjBjbWx1WnlBclBTQlVVa0ZPVTB4QlZFVmZXaUFySUNjb01IQjRLU2M3WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQndjbTl3WlhKMGVWTjBjbWx1WnlBclBTQW5PeWNnS3lCd2NtVm1hWGhsY2lnbmRISmhibk5tYjNKdEp5a2dLeUFuT2ljZ0t5QjBjbUZ1YzJadmNtMVRkSEpwYm1jN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WMGRYSnVJSEJ5YjNCbGNuUjVVM1J5YVc1bk8xeHVmVHNpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9jc3MvYnVpbGQuanNcbiAqKiBtb2R1bGUgaWQgPSA0MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIGNhY2hlID0ge307XG52YXIgcHJlZml4ZXMgPSBbJ1dlYmtpdCcsICdNb3onLCAnTycsICdtcycsICcnXTtcbnZhciBudW1QcmVmaXhlcyA9IHByZWZpeGVzLmxlbmd0aDtcbnZhciB0ZXN0RWxlbWVudCA9IHVuZGVmaW5lZDtcblxuLypcbiAgICBUZXN0IHN0eWxlIHByb3BlcnR5IGZvciBwcmVmaXhlZCB2ZXJzaW9uXG4gICAgXG4gICAgQHBhcmFtIFtzdHJpbmddOiBTdHlsZSBwcm9wZXJ0eVxuICAgIEByZXR1cm4gW3N0cmluZ106IENhY2hlZCBwcm9wZXJ0eSBuYW1lXG4qL1xudmFyIHRlc3RQcmVmaXggPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgdGVzdEVsZW1lbnQgPSB0ZXN0RWxlbWVudCB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGlmIChjYWNoZVtrZXldID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2FjaGVba2V5XSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtUHJlZml4ZXM7IGkrKykge1xuICAgICAgICB2YXIgcHJlZml4ID0gcHJlZml4ZXNbaV0sXG4gICAgICAgICAgICBwcmVmaXhlZCA9IHByZWZpeCA9PT0gJycgPyBrZXkgOiBwcmVmaXggKyBrZXkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBrZXkuc2xpY2UoMSk7XG5cbiAgICAgICAgaWYgKHByZWZpeGVkIGluIHRlc3RFbGVtZW50LnN0eWxlKSB7XG4gICAgICAgICAgICBjYWNoZVtrZXldID0gcHJlZml4ZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY2FjaGVba2V5XTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gY2FjaGVba2V5XSB8fCB0ZXN0UHJlZml4KGtleSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMMk56Y3k5d2NtVm1hWGhsY2k1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdRVUZCUVN4SlFVRk5MRkZCUVZFc1JVRkJVanRCUVVOT0xFbEJRVTBzVjBGQlZ5eERRVUZETEZGQlFVUXNSVUZCVlN4TFFVRldMRVZCUVdkQ0xFZEJRV2hDTEVWQlFXOUNMRWxCUVhCQ0xFVkJRVEJDTEVWQlFURkNMRU5CUVZnN1FVRkRUaXhKUVVGTkxHTkJRV01zVTBGQlV5eE5RVUZVTzBGQlEzQkNMRWxCUVVrc2RVSkJRVW83T3pzN096czdPMEZCVVVFc1NVRkJUU3hoUVVGaExGVkJRVU1zUjBGQlJDeEZRVUZUTzBGQlEzaENMR3RDUVVGakxHVkJRV1VzVTBGQlV5eGhRVUZVTEVOQlFYVkNMRXRCUVhaQ0xFTkJRV1lzUTBGRVZUczdRVUZIZUVJc1VVRkJTU3hOUVVGTkxFZEJRVTRzVFVGQlpTeExRVUZtTEVWQlFYTkNPMEZCUTNSQ0xHVkJRVThzUzBGQlVDeERRVVJ6UWp0TFFVRXhRaXhOUVVWUE8wRkJRMGdzWTBGQlRTeEhRVUZPTEVsQlFXRXNTMEZCWWl4RFFVUkhPMHRCUmxBN08wRkJUVUVzVTBGQlN5eEpRVUZKTEVsQlFVa3NRMEZCU2l4RlFVRlBMRWxCUVVrc1YwRkJTaXhGUVVGcFFpeEhRVUZxUXl4RlFVRnpRenRCUVVOc1F5eFpRVUZKTEZOQlFWTXNVMEZCVXl4RFFVRlVMRU5CUVZRN1dVRkRRU3hYUVVGWExFMUJRVU1zUzBGQlZ5eEZRVUZZTEVkQlFXbENMRWRCUVd4Q0xFZEJRWGRDTEZOQlFWTXNTVUZCU1N4TlFVRktMRU5CUVZjc1EwRkJXQ3hGUVVGakxGZEJRV1FzUlVGQlZDeEhRVUYxUXl4SlFVRkpMRXRCUVVvc1EwRkJWU3hEUVVGV0xFTkJRWFpETEVOQlJrdzdPMEZCU1d4RExGbEJRVWtzV1VGQldTeFpRVUZaTEV0QlFWb3NSVUZCYlVJN1FVRkRMMElzYTBKQlFVMHNSMEZCVGl4SlFVRmhMRkZCUVdJc1EwRkVLMEk3VTBGQmJrTTdTMEZLU2pzN1FVRlRRU3hYUVVGUExFMUJRVTBzUjBGQlRpeERRVUZRTEVOQmJFSjNRanREUVVGVU96dHJRa0Z4UWtvc1ZVRkJReXhIUVVGRU8xZEJRVk1zVFVGQlRTeEhRVUZPTEV0QlFXTXNWMEZCVnl4SFFVRllMRU5CUVdRN1EwRkJWQ0lzSW1acGJHVWlPaUp3Y21WbWFYaGxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKamIyNXpkQ0JqWVdOb1pTQTlJSHQ5TzF4dVkyOXVjM1FnY0hKbFptbDRaWE1nUFNCYkoxZGxZbXRwZENjc0owMXZlaWNzSjA4bkxDZHRjeWNzSUNjblhUdGNibU52Ym5OMElHNTFiVkJ5WldacGVHVnpJRDBnY0hKbFptbDRaWE11YkdWdVozUm9PMXh1YkdWMElIUmxjM1JGYkdWdFpXNTBPMXh1WEc0dktseHVJQ0FnSUZSbGMzUWdjM1I1YkdVZ2NISnZjR1Z5ZEhrZ1ptOXlJSEJ5WldacGVHVmtJSFpsY25OcGIyNWNiaUFnSUNCY2JpQWdJQ0JBY0dGeVlXMGdXM04wY21sdVoxMDZJRk4wZVd4bElIQnliM0JsY25SNVhHNGdJQ0FnUUhKbGRIVnliaUJiYzNSeWFXNW5YVG9nUTJGamFHVmtJSEJ5YjNCbGNuUjVJRzVoYldWY2Jpb3ZYRzVqYjI1emRDQjBaWE4wVUhKbFptbDRJRDBnS0d0bGVTa2dQVDRnZTF4dUlDQWdJSFJsYzNSRmJHVnRaVzUwSUQwZ2RHVnpkRVZzWlcxbGJuUWdmSHdnWkc5amRXMWxiblF1WTNKbFlYUmxSV3hsYldWdWRDZ25aR2wySnlrN1hHNWNiaUFnSUNCcFppQW9ZMkZqYUdWYmEyVjVYU0E5UFQwZ1ptRnNjMlVwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUdaaGJITmxPMXh1SUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lHTmhZMmhsVzJ0bGVWMGdQU0JtWVd4elpUdGNiaUFnSUNCOVhHNWNiaUFnSUNCbWIzSWdLSFpoY2lCcElEMGdNRHNnYVNBOElHNTFiVkJ5WldacGVHVnpPeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdkbUZ5SUhCeVpXWnBlQ0E5SUhCeVpXWnBlR1Z6VzJsZExGeHVJQ0FnSUNBZ0lDQWdJQ0FnY0hKbFptbDRaV1FnUFNBb2NISmxabWw0SUQwOVBTQW5KeWtnUHlCclpYa2dPaUJ3Y21WbWFYZ2dLeUJyWlhrdVkyaGhja0YwS0RBcExuUnZWWEJ3WlhKRFlYTmxLQ2tnS3lCclpYa3VjMnhwWTJVb01TazdYRzVjYmlBZ0lDQWdJQ0FnYVdZZ0tIQnlaV1pwZUdWa0lHbHVJSFJsYzNSRmJHVnRaVzUwTG5OMGVXeGxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpZV05vWlZ0clpYbGRJRDBnY0hKbFptbDRaV1E3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc0Z0lDQWdYRzRnSUNBZ2NtVjBkWEp1SUdOaFkyaGxXMnRsZVYwN1hHNTlPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0FvYTJWNUtTQTlQaUJqWVdOb1pWdHJaWGxkSUh4OElIUmxjM1JRY21WbWFYZ29hMlY1S1RzaVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FkYXB0ZXIvY3NzL3ByZWZpeGVyLmpzXG4gKiogbW9kdWxlIGlkID0gNDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9kaWN0aW9uYXJ5ID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvc2V0dGluZ3MvZGljdGlvbmFyeScpO1xuXG52YXIgdHJhbnNmb3JtUHJvcHMgPSB7fTtcblxudmFyIFNDQUxFID0gJ3NjYWxlJztcbnZhciBST1RBVEUgPSAncm90YXRlJztcbnZhciBUUkFOU0ZPUk1fUEVSU1BFQ1RJVkUgPSAndHJhbnNmb3JtUGVyc3BlY3RpdmUnO1xudmFyIFRFUk1TID0gWyd0cmFuc2xhdGUnLCBTQ0FMRSwgUk9UQVRFLCAnc2tldycsIFRSQU5TRk9STV9QRVJTUEVDVElWRV07XG5cbnRyYW5zZm9ybVByb3BzW1JPVEFURV0gPSB0cmFuc2Zvcm1Qcm9wc1tTQ0FMRV0gPSB0cmFuc2Zvcm1Qcm9wc1tUUkFOU0ZPUk1fUEVSU1BFQ1RJVkVdID0gdHJ1ZTtcblxuVEVSTVMuZm9yRWFjaChmdW5jdGlvbiAodGVybSkge1xuICByZXR1cm4gX2RpY3Rpb25hcnkuYXhlcy5mb3JFYWNoKGZ1bmN0aW9uIChheGlzKSB7XG4gICAgcmV0dXJuIHRyYW5zZm9ybVByb3BzW3Rlcm0gKyBheGlzXSA9IHRydWU7XG4gIH0pO1xufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHRyYW5zZm9ybVByb3BzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMMk56Y3k5MGNtRnVjMlp2Y20wdGNISnZjSE11YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPMEZCUlVFc1NVRkJTU3hwUWtGQmFVSXNSVUZCYWtJN08wRkJSVW9zU1VGQlRTeFJRVUZSTEU5QlFWSTdRVUZEVGl4SlFVRk5MRk5CUVZNc1VVRkJWRHRCUVVOT0xFbEJRVTBzZDBKQlFYZENMSE5DUVVGNFFqdEJRVU5PTEVsQlFVMHNVVUZCVVN4RFFVRkRMRmRCUVVRc1JVRkJZeXhMUVVGa0xFVkJRWEZDTEUxQlFYSkNMRVZCUVRaQ0xFMUJRVGRDTEVWQlFYRkRMSEZDUVVGeVF5eERRVUZTT3p0QlFVVk9MR1ZCUVdVc1RVRkJaaXhKUVVGNVFpeGxRVUZsTEV0QlFXWXNTVUZCZDBJc1pVRkJaU3h4UWtGQlppeEpRVUYzUXl4SlFVRjRRenM3UVVGRmFrUXNUVUZCVFN4UFFVRk9MRU5CUVdNc1ZVRkJReXhKUVVGRU8xTkJRVlVzYVVKQlFVc3NUMEZCVEN4RFFVRmhMRlZCUVVNc1NVRkJSRHRYUVVGVkxHVkJRV1VzVDBGQlR5eEpRVUZRTEVOQlFXWXNSMEZCT0VJc1NVRkJPVUk3UjBGQlZqdERRVUYyUWl4RFFVRmtPenRyUWtGRlpTSXNJbVpwYkdVaU9pSjBjbUZ1YzJadmNtMHRjSEp2Y0hNdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUXZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElIc2dZWGhsY3lCOUlHWnliMjBnSnk0dUx5NHVMM1poYkhWbExYUjVjR1Z6TDNObGRIUnBibWR6TDJScFkzUnBiMjVoY25rbk8xeHVYRzVzWlhRZ2RISmhibk5tYjNKdFVISnZjSE1nUFNCN2ZUdGNibHh1WTI5dWMzUWdVME5CVEVVZ1BTQW5jMk5oYkdVbk8xeHVZMjl1YzNRZ1VrOVVRVlJGSUQwZ0ozSnZkR0YwWlNjN1hHNWpiMjV6ZENCVVVrRk9VMFpQVWsxZlVFVlNVMUJGUTFSSlZrVWdQU0FuZEhKaGJuTm1iM0p0VUdWeWMzQmxZM1JwZG1Vbk8xeHVZMjl1YzNRZ1ZFVlNUVk1nUFNCYkozUnlZVzV6YkdGMFpTY3NJRk5EUVV4RkxDQlNUMVJCVkVVc0lDZHphMlYzSnl3Z1ZGSkJUbE5HVDFKTlgxQkZVbE5RUlVOVVNWWkZYVHRjYmx4dWRISmhibk5tYjNKdFVISnZjSE5iVWs5VVFWUkZYU0E5SUhSeVlXNXpabTl5YlZCeWIzQnpXMU5EUVV4RlhTQTlJSFJ5WVc1elptOXliVkJ5YjNCelcxUlNRVTVUUms5U1RWOVFSVkpUVUVWRFZFbFdSVjBnUFNCMGNuVmxPMXh1WEc1VVJWSk5VeTVtYjNKRllXTm9LQ2gwWlhKdEtTQTlQaUJoZUdWekxtWnZja1ZoWTJnb0tHRjRhWE1wSUQwK0lIUnlZVzV6Wm05eWJWQnliM0J6VzNSbGNtMGdLeUJoZUdselhTQTlJSFJ5ZFdVcEtUdGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdkSEpoYm5ObWIzSnRVSEp2Y0hNN0lsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FkYXB0ZXIvY3NzL3RyYW5zZm9ybS1wcm9wcy5qc1xuICoqIG1vZHVsZSBpZCA9IDQ0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfYWxwaGEgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9hbHBoYScpO1xuXG52YXIgX2FscGhhMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FscGhhKTtcblxudmFyIF9jb2xvciA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL2NvbG9yJyk7XG5cbnZhciBfY29sb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29sb3IpO1xuXG52YXIgX2NvbXBsZXggPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9jb21wbGV4Jyk7XG5cbnZhciBfY29tcGxleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21wbGV4KTtcblxudmFyIF9zY2FsZSA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL3NjYWxlJyk7XG5cbnZhciBfc2NhbGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2NhbGUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgZmlsbDogX2NvbG9yMi5kZWZhdWx0LFxuICAgIHN0cm9rZTogX2NvbG9yMi5kZWZhdWx0LFxuICAgIHNjYWxlOiBfc2NhbGUyLmRlZmF1bHQsXG4gICAgc2NhbGVYOiBfc2NhbGUyLmRlZmF1bHQsXG4gICAgc2NhbGVZOiBfc2NhbGUyLmRlZmF1bHQsXG4gICAgZDogX2NvbXBsZXgyLmRlZmF1bHQsXG4gICAgcG9pbnRzOiBfY29tcGxleDIuZGVmYXVsdCxcbiAgICBvcGFjaXR5OiBfYWxwaGEyLmRlZmF1bHQsXG4gICAgZmlsbE9wYWNpdHk6IF9hbHBoYTIuZGVmYXVsdCxcbiAgICBzdHJva2VPcGFjaXR5OiBfYWxwaGEyLmRlZmF1bHRcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwzTjJaeTkyWVd4MVpTMTBlWEJsTFcxaGNDNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN096czdPenM3T3pzN096czdPenM3TzJ0Q1FVdGxPMEZCUTFnc2VVSkJSRmM3UVVGRldDd3lRa0ZHVnp0QlFVZFlMREJDUVVoWE8wRkJTVmdzTWtKQlNsYzdRVUZMV0N3eVFrRk1WenRCUVUxWUxIZENRVTVYTzBGQlQxZ3NOa0pCVUZjN1FVRlJXQ3cwUWtGU1Z6dEJRVk5ZTEdkRFFWUlhPMEZCVlZnc2EwTkJWbGNpTENKbWFXeGxJam9pZG1Gc2RXVXRkSGx3WlMxdFlYQXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFF2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJR0ZzY0doaElHWnliMjBnSnk0dUx5NHVMM1poYkhWbExYUjVjR1Z6TDJGc2NHaGhKenRjYm1sdGNHOXlkQ0JqYjJ4dmNpQm1jbTl0SUNjdUxpOHVMaTkyWVd4MVpTMTBlWEJsY3k5amIyeHZjaWM3WEc1cGJYQnZjblFnWTI5dGNHeGxlQ0JtY205dElDY3VMaTh1TGk5MllXeDFaUzEwZVhCbGN5OWpiMjF3YkdWNEp6dGNibWx0Y0c5eWRDQnpZMkZzWlNCbWNtOXRJQ2N1TGk4dUxpOTJZV3gxWlMxMGVYQmxjeTl6WTJGc1pTYzdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJSHRjYmlBZ0lDQm1hV3hzT2lCamIyeHZjaXhjYmlBZ0lDQnpkSEp2YTJVNklHTnZiRzl5TEZ4dUlDQWdJSE5qWVd4bE9pQnpZMkZzWlN4Y2JpQWdJQ0J6WTJGc1pWZzZJSE5qWVd4bExGeHVJQ0FnSUhOallXeGxXVG9nYzJOaGJHVXNYRzRnSUNBZ1pEb2dZMjl0Y0d4bGVDeGNiaUFnSUNCd2IybHVkSE02SUdOdmJYQnNaWGdzWEc0Z0lDQWdiM0JoWTJsMGVUb2dZV3h3YUdFc1hHNGdJQ0FnWm1sc2JFOXdZV05wZEhrNklHRnNjR2hoTEZ4dUlDQWdJSE4wY205clpVOXdZV05wZEhrNklHRnNjR2hoWEc1OU95SmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hZGFwdGVyL3N2Zy92YWx1ZS10eXBlLW1hcC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBidWlsZDtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uLy4uL2luYy91dGlscycpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzID0gcmVxdWlyZSgnLi4vY3NzL3RyYW5zZm9ybS1wcm9wcycpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zZm9ybVByb3BzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIFpFUk9fTk9UX1pFUk8gPSAwLjAwMDE7XG5cbmZ1bmN0aW9uIGJ1aWxkKHN0YXRlLCBkYXRhKSB7XG4gICAgdmFyIGhhc1RyYW5zZm9ybSA9IGZhbHNlO1xuICAgIHZhciBwcm9wcyA9IHt9O1xuICAgIHZhciBzY2FsZSA9IHN0YXRlLnNjYWxlICE9PSB1bmRlZmluZWQgPyBzdGF0ZS5zY2FsZSB8fCBaRVJPX05PVF9aRVJPIDogc3RhdGUuc2NhbGVYIHx8IDE7XG4gICAgdmFyIHNjYWxlWSA9IHN0YXRlLnNjYWxlWSAhPT0gdW5kZWZpbmVkID8gc3RhdGUuc2NhbGVZIHx8IFpFUk9fTk9UX1pFUk8gOiBzY2FsZSB8fCAxO1xuICAgIHZhciB0cmFuc2Zvcm1PcmlnaW5YID0gZGF0YS53aWR0aCAqICgoc3RhdGUub3JpZ2luWCB8fCA1MCkgLyAxMDApICsgZGF0YS54O1xuICAgIHZhciB0cmFuc2Zvcm1PcmlnaW5ZID0gZGF0YS5oZWlnaHQgKiAoKHN0YXRlLm9yaWdpblkgfHwgNTApIC8gMTAwKSArIGRhdGEueTtcbiAgICB2YXIgc2NhbGVUcmFuc2Zvcm1YID0gLXRyYW5zZm9ybU9yaWdpblggKiAoc2NhbGUgKiAxKTtcbiAgICB2YXIgc2NhbGVUcmFuc2Zvcm1ZID0gLXRyYW5zZm9ybU9yaWdpblkgKiAoc2NhbGVZICogMSk7XG4gICAgdmFyIHNjYWxlUmVwbGFjZVggPSB0cmFuc2Zvcm1PcmlnaW5YIC8gc2NhbGU7XG4gICAgdmFyIHNjYWxlUmVwbGFjZVkgPSB0cmFuc2Zvcm1PcmlnaW5ZIC8gc2NhbGVZO1xuICAgIHZhciB0cmFuc2Zvcm0gPSB7XG4gICAgICAgIHRyYW5zbGF0ZTogJ3RyYW5zbGF0ZSgnICsgc3RhdGUudHJhbnNsYXRlWCArICcsICcgKyBzdGF0ZS50cmFuc2xhdGVZICsgJykgJyxcbiAgICAgICAgc2NhbGU6ICd0cmFuc2xhdGUoJyArIHNjYWxlVHJhbnNmb3JtWCArICcsICcgKyBzY2FsZVRyYW5zZm9ybVkgKyAnKSBzY2FsZSgnICsgc2NhbGUgKyAnLCAnICsgc2NhbGVZICsgJykgdHJhbnNsYXRlKCcgKyBzY2FsZVJlcGxhY2VYICsgJywgJyArIHNjYWxlUmVwbGFjZVkgKyAnKSAnLFxuICAgICAgICByb3RhdGU6ICdyb3RhdGUoJyArIHN0YXRlLnJvdGF0ZSArICcsICcgKyB0cmFuc2Zvcm1PcmlnaW5YICsgJywgJyArIHRyYW5zZm9ybU9yaWdpblkgKyAnKSAnLFxuICAgICAgICBza2V3WDogJ3NrZXdYKCcgKyBzdGF0ZS5za2V3WCArICcpICcsXG4gICAgICAgIHNrZXdZOiAnc2tld1koJyArIHN0YXRlLnNrZXdZICsgJykgJ1xuICAgIH07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc3RhdGUpIHtcbiAgICAgICAgaWYgKHN0YXRlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIGlmIChfdHJhbnNmb3JtUHJvcHMyLmRlZmF1bHRba2V5XSkge1xuICAgICAgICAgICAgICAgIGhhc1RyYW5zZm9ybSA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHByb3BzWygwLCBfdXRpbHMuY2FtZWxUb0Rhc2gpKGtleSldID0gc3RhdGVba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChoYXNUcmFuc2Zvcm0pIHtcbiAgICAgICAgcHJvcHMudHJhbnNmb3JtID0gJyc7XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHRyYW5zZm9ybSkge1xuICAgICAgICAgICAgaWYgKHRyYW5zZm9ybS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRlZmF1bHRWYWx1ZSA9IGtleSA9PT0gJ3NjYWxlJyA/ICcxJyA6ICcwJztcbiAgICAgICAgICAgICAgICBwcm9wcy50cmFuc2Zvcm0gKz0gdHJhbnNmb3JtW2tleV0ucmVwbGFjZSgvdW5kZWZpbmVkL2csIGRlZmF1bHRWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcHM7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwzTjJaeTlpZFdsc1pDNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3YTBKQlMzZENPenM3T3pzN096czdPMEZCUm5oQ0xFbEJRVTBzWjBKQlFXZENMRTFCUVdoQ096dEJRVVZUTEZOQlFWTXNTMEZCVkN4RFFVRmxMRXRCUVdZc1JVRkJjMElzU1VGQmRFSXNSVUZCTkVJN1FVRkRka01zVVVGQlNTeGxRVUZsTEV0QlFXWXNRMEZFYlVNN1FVRkZka01zVVVGQlRTeFJRVUZSTEVWQlFWSXNRMEZHYVVNN1FVRkhka01zVVVGQlRTeFJRVUZSTEUxQlFVMHNTMEZCVGl4TFFVRm5RaXhUUVVGb1FpeEhRVUUwUWl4TlFVRk5MRXRCUVU0c1NVRkJaU3hoUVVGbUxFZEJRU3RDTEUxQlFVMHNUVUZCVGl4SlFVRm5RaXhEUVVGb1FpeERRVWhzUXp0QlFVbDJReXhSUVVGTkxGTkJRVk1zVFVGQlRTeE5RVUZPTEV0QlFXbENMRk5CUVdwQ0xFZEJRVFpDTEUxQlFVMHNUVUZCVGl4SlFVRm5RaXhoUVVGb1FpeEhRVUZuUXl4VFFVRlRMRU5CUVZRc1EwRktja003UVVGTGRrTXNVVUZCVFN4dFFrRkJiVUlzUzBGQlN5eExRVUZNTEVsQlFXTXNRMEZCUXl4TlFVRk5MRTlCUVU0c1NVRkJhVUlzUlVGQmFrSXNRMEZCUkN4SFFVRjNRaXhIUVVGNFFpeERRVUZrTEVkQlFUWkRMRXRCUVVzc1EwRkJUQ3hEUVV3dlFqdEJRVTEyUXl4UlFVRk5MRzFDUVVGdFFpeExRVUZMTEUxQlFVd3NTVUZCWlN4RFFVRkRMRTFCUVUwc1QwRkJUaXhKUVVGcFFpeEZRVUZxUWl4RFFVRkVMRWRCUVhkQ0xFZEJRWGhDTEVOQlFXWXNSMEZCT0VNc1MwRkJTeXhEUVVGTUxFTkJUbWhETzBGQlQzWkRMRkZCUVUwc2EwSkJRV3RDTEVOQlFVVXNaMEpCUVVZc1NVRkJjMElzVVVGQlVTeERRVUZTTEVOQlFYUkNMRU5CVUdVN1FVRlJka01zVVVGQlRTeHJRa0ZCYTBJc1EwRkJSU3huUWtGQlJpeEpRVUZ6UWl4VFFVRlRMRU5CUVZRc1EwRkJkRUlzUTBGU1pUdEJRVk4yUXl4UlFVRk5MR2RDUVVGblFpeHRRa0ZCYlVJc1MwRkJia0lzUTBGVWFVSTdRVUZWZGtNc1VVRkJUU3huUWtGQlowSXNiVUpCUVcxQ0xFMUJRVzVDTEVOQlZtbENPMEZCVjNaRExGRkJRVTBzV1VGQldUdEJRVU5rTEd0RFFVRjNRaXhOUVVGTkxGVkJRVTRzVlVGQmNVSXNUVUZCVFN4VlFVRk9MRTlCUVRkRE8wRkJRMEVzT0VKQlFXOUNMSGxDUVVGdlFpd3JRa0ZCTUVJc1pVRkJWU3d3UWtGQmNVSXNkVUpCUVd0Q0xHOUNRVUZ1U0R0QlFVTkJMRFJDUVVGclFpeE5RVUZOTEUxQlFVNHNWVUZCYVVJc01FSkJRWEZDTEhWQ1FVRjRSRHRCUVVOQkxEQkNRVUZuUWl4TlFVRk5MRXRCUVU0c1QwRkJhRUk3UVVGRFFTd3dRa0ZCWjBJc1RVRkJUU3hMUVVGT0xFOUJRV2hDTzB0QlRFVXNRMEZZYVVNN08wRkJiVUoyUXl4VFFVRkxMRWxCUVVrc1IwRkJTaXhKUVVGWExFdEJRV2hDTEVWQlFYVkNPMEZCUTI1Q0xGbEJRVWtzVFVGQlRTeGpRVUZPTEVOQlFYRkNMRWRCUVhKQ0xFTkJRVW9zUlVGQkswSTdRVUZETTBJc1owSkJRVWtzZVVKQlFXVXNSMEZCWml4RFFVRktMRVZCUVhsQ08wRkJRM0pDTEN0Q1FVRmxMRWxCUVdZc1EwRkVjVUk3WVVGQmVrSXNUVUZGVHp0QlFVTklMSE5DUVVGTkxIZENRVUZaTEVkQlFWb3NRMEZCVGl4SlFVRXdRaXhOUVVGTkxFZEJRVTRzUTBGQk1VSXNRMEZFUnp0aFFVWlFPMU5CUkVvN1MwRkVTanM3UVVGVlFTeFJRVUZKTEZsQlFVb3NSVUZCYTBJN1FVRkRaQ3hqUVVGTkxGTkJRVTRzUjBGQmEwSXNSVUZCYkVJc1EwRkVZenM3UVVGSFpDeGhRVUZMTEVsQlFVa3NSMEZCU2l4SlFVRlhMRk5CUVdoQ0xFVkJRVEpDTzBGQlEzWkNMR2RDUVVGSkxGVkJRVlVzWTBGQlZpeERRVUY1UWl4SFFVRjZRaXhEUVVGS0xFVkJRVzFETzBGQlF5OUNMRzlDUVVGTkxHVkJRV1VzUjBGQlF5eExRVUZSTEU5QlFWSXNSMEZCYlVJc1IwRkJjRUlzUjBGQk1FSXNSMEZCTVVJc1EwRkVWVHRCUVVVdlFpeHpRa0ZCVFN4VFFVRk9MRWxCUVcxQ0xGVkJRVlVzUjBGQlZpeEZRVUZsTEU5QlFXWXNRMEZCZFVJc1dVRkJka0lzUlVGQmNVTXNXVUZCY2tNc1EwRkJia0lzUTBGR0swSTdZVUZCYmtNN1UwRkVTanRMUVVoS096dEJRVmRCTEZkQlFVOHNTMEZCVUN4RFFYaERkVU03UTBGQk5VSWlMQ0ptYVd4bElqb2lZblZwYkdRdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUXZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElIc2dZMkZ0Wld4VWIwUmhjMmdnZlNCbWNtOXRJQ2N1TGk4dUxpOXBibU12ZFhScGJITW5PMXh1YVcxd2IzSjBJSFJ5WVc1elptOXliVkJ5YjNCeklHWnliMjBnSnk0dUwyTnpjeTkwY21GdWMyWnZjbTB0Y0hKdmNITW5PMXh1WEc1amIyNXpkQ0JhUlZKUFgwNVBWRjlhUlZKUElEMGdNQzR3TURBeE8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQm1kVzVqZEdsdmJpQmlkV2xzWkNoemRHRjBaU3dnWkdGMFlTa2dlMXh1SUNBZ0lHeGxkQ0JvWVhOVWNtRnVjMlp2Y20wZ1BTQm1ZV3h6WlR0Y2JpQWdJQ0JqYjI1emRDQndjbTl3Y3lBOUlIdDlPMXh1SUNBZ0lHTnZibk4wSUhOallXeGxJRDBnYzNSaGRHVXVjMk5oYkdVZ0lUMDlJSFZ1WkdWbWFXNWxaQ0EvSUhOMFlYUmxMbk5qWVd4bElIeDhJRnBGVWs5ZlRrOVVYMXBGVWs4Z09pQnpkR0YwWlM1elkyRnNaVmdnZkh3Z01UdGNiaUFnSUNCamIyNXpkQ0J6WTJGc1pWa2dQU0J6ZEdGMFpTNXpZMkZzWlZrZ0lUMDlJSFZ1WkdWbWFXNWxaQ0EvSUhOMFlYUmxMbk5qWVd4bFdTQjhmQ0JhUlZKUFgwNVBWRjlhUlZKUElEb2djMk5oYkdVZ2ZId2dNVHRjYmlBZ0lDQmpiMjV6ZENCMGNtRnVjMlp2Y20xUGNtbG5hVzVZSUQwZ1pHRjBZUzUzYVdSMGFDQXFJQ2dvYzNSaGRHVXViM0pwWjJsdVdDQjhmQ0ExTUNrZ0x5QXhNREFwSUNzZ1pHRjBZUzU0TzF4dUlDQWdJR052Ym5OMElIUnlZVzV6Wm05eWJVOXlhV2RwYmxrZ1BTQmtZWFJoTG1obGFXZG9kQ0FxSUNnb2MzUmhkR1V1YjNKcFoybHVXU0I4ZkNBMU1Da2dMeUF4TURBcElDc2daR0YwWVM1NU8xeHVJQ0FnSUdOdmJuTjBJSE5qWVd4bFZISmhibk5tYjNKdFdDQTlJQzBnZEhKaGJuTm1iM0p0VDNKcFoybHVXQ0FxSUNoelkyRnNaU0FxSURFcE8xeHVJQ0FnSUdOdmJuTjBJSE5qWVd4bFZISmhibk5tYjNKdFdTQTlJQzBnZEhKaGJuTm1iM0p0VDNKcFoybHVXU0FxSUNoelkyRnNaVmtnS2lBeEtUdGNiaUFnSUNCamIyNXpkQ0J6WTJGc1pWSmxjR3hoWTJWWUlEMGdkSEpoYm5ObWIzSnRUM0pwWjJsdVdDQXZJSE5qWVd4bE8xeHVJQ0FnSUdOdmJuTjBJSE5qWVd4bFVtVndiR0ZqWlZrZ1BTQjBjbUZ1YzJadmNtMVBjbWxuYVc1WklDOGdjMk5oYkdWWk8xeHVJQ0FnSUdOdmJuTjBJSFJ5WVc1elptOXliU0E5SUh0Y2JpQWdJQ0FnSUNBZ2RISmhibk5zWVhSbE9pQmdkSEpoYm5Oc1lYUmxLQ1I3YzNSaGRHVXVkSEpoYm5Oc1lYUmxXSDBzSUNSN2MzUmhkR1V1ZEhKaGJuTnNZWFJsV1gwcElHQXNYRzRnSUNBZ0lDQWdJSE5qWVd4bE9pQmdkSEpoYm5Oc1lYUmxLQ1I3YzJOaGJHVlVjbUZ1YzJadmNtMVlmU3dnSkh0elkyRnNaVlJ5WVc1elptOXliVmw5S1NCelkyRnNaU2drZTNOallXeGxmU3dnSkh0elkyRnNaVmw5S1NCMGNtRnVjMnhoZEdVb0pIdHpZMkZzWlZKbGNHeGhZMlZZZlN3Z0pIdHpZMkZzWlZKbGNHeGhZMlZaZlNrZ1lDeGNiaUFnSUNBZ0lDQWdjbTkwWVhSbE9pQmdjbTkwWVhSbEtDUjdjM1JoZEdVdWNtOTBZWFJsZlN3Z0pIdDBjbUZ1YzJadmNtMVBjbWxuYVc1WWZTd2dKSHQwY21GdWMyWnZjbTFQY21sbmFXNVpmU2tnWUN4Y2JpQWdJQ0FnSUNBZ2MydGxkMWc2SUdCemEyVjNXQ2drZTNOMFlYUmxMbk5yWlhkWWZTa2dZQ3hjYmlBZ0lDQWdJQ0FnYzJ0bGQxazZJR0J6YTJWM1dTZ2tlM04wWVhSbExuTnJaWGRaZlNrZ1lGeHVJQ0FnSUgwN1hHNWNiaUFnSUNCbWIzSWdLR3hsZENCclpYa2dhVzRnYzNSaGRHVXBJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tITjBZWFJsTG1oaGMwOTNibEJ5YjNCbGNuUjVLR3RsZVNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaDBjbUZ1YzJadmNtMVFjbTl3YzF0clpYbGRLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYUdGelZISmhibk5tYjNKdElEMGdkSEoxWlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjSEp2Y0hOYlkyRnRaV3hVYjBSaGMyZ29hMlY1S1YwZ1BTQnpkR0YwWlZ0clpYbGRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2FXWWdLR2hoYzFSeVlXNXpabTl5YlNrZ2UxeHVJQ0FnSUNBZ0lDQndjbTl3Y3k1MGNtRnVjMlp2Y20wZ1BTQW5KenRjYmx4dUlDQWdJQ0FnSUNCbWIzSWdLR3hsZENCclpYa2dhVzRnZEhKaGJuTm1iM0p0S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RISmhibk5tYjNKdExtaGhjMDkzYmxCeWIzQmxjblI1S0d0bGVTa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQmtaV1poZFd4MFZtRnNkV1VnUFNBb2EyVjVJRDA5UFNBbmMyTmhiR1VuS1NBL0lDY3hKeUE2SUNjd0p6dGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQndjbTl3Y3k1MGNtRnVjMlp2Y20wZ0t6MGdkSEpoYm5ObWIzSnRXMnRsZVYwdWNtVndiR0ZqWlNndmRXNWtaV1pwYm1Wa0wyY3NJR1JsWm1GMWJIUldZV3gxWlNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0J5WlhSMWNtNGdjSEp2Y0hNN1hHNTlJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hZGFwdGVyL3N2Zy9idWlsZC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vKlxuICAgIENvbnZlcnQgcGVyY2VudGFnZSB0byBwaXhlbHNcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFBlcmNlbnRhZ2Ugb2YgdG90YWwgbGVuZ3RoXG4gICAgQHBhcmFtIFtudW1iZXJdOiBUb3RhbCBsZW5ndGhcbiovXG52YXIgcGVyY2VudFRvUGl4ZWxzID0gZnVuY3Rpb24gKHBlcmNlbnQsIGxlbmd0aCkge1xuICAgIHJldHVybiBwYXJzZUZsb2F0KHBlcmNlbnQpIC8gMTAwICogbGVuZ3RoICsgJ3B4Jztcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChzdGF0ZSwgbGVuZ3RoKSB7XG4gICAgdmFyIHN0eWxlcyA9IHt9O1xuICAgIHZhciBkYXNoQXJyYXlTdHlsZXMgPSB7XG4gICAgICAgIGxlbmd0aDogMCxcbiAgICAgICAgc3BhY2luZzogbGVuZ3RoICsgJ3B4J1xuICAgIH07XG4gICAgdmFyIGhhc0Rhc2hBcnJheSA9IGZhbHNlO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHN0YXRlKSB7XG4gICAgICAgIGlmIChzdGF0ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBzdGF0ZVtrZXldO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2xlbmd0aCc6XG4gICAgICAgICAgICAgICAgY2FzZSAnc3BhY2luZyc6XG4gICAgICAgICAgICAgICAgICAgIGhhc0Rhc2hBcnJheSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGRhc2hBcnJheVN0eWxlc1trZXldID0gcGVyY2VudFRvUGl4ZWxzKHZhbHVlLCBsZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdvZmZzZXQnOlxuICAgICAgICAgICAgICAgICAgICBzdHlsZXNbJ3N0cm9rZS1kYXNob2Zmc2V0J10gPSBwZXJjZW50VG9QaXhlbHMoLXZhbHVlLCBsZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBzdHlsZXNba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGhhc0Rhc2hBcnJheSkge1xuICAgICAgICBzdHlsZXNbJ3N0cm9rZS1kYXNoYXJyYXknXSA9IGRhc2hBcnJheVN0eWxlcy5sZW5ndGggKyAnICcgKyBkYXNoQXJyYXlTdHlsZXMuc3BhY2luZztcbiAgICB9XG5cbiAgICByZXR1cm4gc3R5bGVzO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFpHRndkR1Z5TDNOMlp5MXdZWFJvTDJKMWFXeGtMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdPenRCUVUxQkxFbEJRVTBzYTBKQlFXdENMRlZCUVVNc1QwRkJSQ3hGUVVGVkxFMUJRVlk3VjBGQmNVSXNWVUZCUXl4RFFVRlhMRTlCUVZnc1NVRkJjMElzUjBGQmRFSXNSMEZCTmtJc1RVRkJPVUlzUjBGQmRVTXNTVUZCZGtNN1EwRkJja0k3TzJ0Q1FVVlVMRlZCUVVNc1MwRkJSQ3hGUVVGUkxFMUJRVklzUlVGQmJVSTdRVUZET1VJc1VVRkJUU3hUUVVGVExFVkJRVlFzUTBGRWQwSTdRVUZGT1VJc1VVRkJUU3hyUWtGQmEwSTdRVUZEY0VJc1owSkJRVkVzUTBGQlVqdEJRVU5CTEdsQ1FVRlRMRk5CUVZNc1NVRkJWRHRMUVVaUUxFTkJSbmRDTzBGQlRUbENMRkZCUVVrc1pVRkJaU3hMUVVGbUxFTkJUakJDT3p0QlFWRTVRaXhUUVVGTExFbEJRVWtzUjBGQlNpeEpRVUZYTEV0QlFXaENMRVZCUVhWQ08wRkJRMjVDTEZsQlFVa3NUVUZCVFN4alFVRk9MRU5CUVhGQ0xFZEJRWEpDTEVOQlFVb3NSVUZCSzBJN1FVRkRNMElzWjBKQlFVMHNVVUZCVVN4TlFVRk5MRWRCUVU0c1EwRkJVaXhEUVVSeFFqczdRVUZITTBJc2IwSkJRVkVzUjBGQlVqdEJRVU5CTEhGQ1FVRkxMRkZCUVV3c1EwRkVRVHRCUVVWQkxIRkNRVUZMTEZOQlFVdzdRVUZEU1N4dFEwRkJaU3hKUVVGbUxFTkJSRW83UVVGRlNTeHZRMEZCWjBJc1IwRkJhRUlzU1VGQmRVSXNaMEpCUVdkQ0xFdEJRV2hDTEVWQlFYVkNMRTFCUVhaQ0xFTkJRWFpDTEVOQlJrbzdRVUZIU1N3d1FrRklTanRCUVVaQkxIRkNRVTFMTEZGQlFVdzdRVUZEU1N3eVFrRkJUeXh0UWtGQlVDeEpRVUU0UWl4blFrRkJaMElzUTBGQlF5eExRVUZFTEVWQlFWRXNUVUZCZUVJc1EwRkJPVUlzUTBGRVNqdEJRVVZKTERCQ1FVWktPMEZCVGtFN1FVRlZTU3d5UWtGQlR5eEhRVUZRTEVsQlFXTXNTMEZCWkN4RFFVUktPMEZCVkVFc1lVRklNa0k3VTBGQkwwSTdTMEZFU2pzN1FVRnRRa0VzVVVGQlNTeFpRVUZLTEVWQlFXdENPMEZCUTJRc1pVRkJUeXhyUWtGQlVDeEpRVUUyUWl4blFrRkJaMElzVFVGQmFFSXNSMEZCZVVJc1IwRkJla0lzUjBGQkswSXNaMEpCUVdkQ0xFOUJRV2hDTEVOQlJEbERPMHRCUVd4Q096dEJRVWxCTEZkQlFVOHNUVUZCVUN4RFFTOUNPRUk3UTBGQmJrSWlMQ0ptYVd4bElqb2lZblZwYkdRdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUXZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lMeXBjYmlBZ0lDQkRiMjUyWlhKMElIQmxjbU5sYm5SaFoyVWdkRzhnY0dsNFpXeHpYRzRnSUNBZ1hHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJRWlhKalpXNTBZV2RsSUc5bUlIUnZkR0ZzSUd4bGJtZDBhRnh1SUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1ZHOTBZV3dnYkdWdVozUm9YRzRxTDF4dVkyOXVjM1FnY0dWeVkyVnVkRlJ2VUdsNFpXeHpJRDBnS0hCbGNtTmxiblFzSUd4bGJtZDBhQ2tnUFQ0Z0tIQmhjbk5sUm14dllYUW9jR1Z5WTJWdWRDa2dMeUF4TURBcElDb2diR1Z1WjNSb0lDc2dKM0I0Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ0tITjBZWFJsTENCc1pXNW5kR2dwSUQwK0lIdGNiaUFnSUNCamIyNXpkQ0J6ZEhsc1pYTWdQU0I3ZlR0Y2JpQWdJQ0JqYjI1emRDQmtZWE5vUVhKeVlYbFRkSGxzWlhNZ1BTQjdYRzRnSUNBZ0lDQWdJR3hsYm1kMGFEb2dNQ3hjYmlBZ0lDQWdJQ0FnYzNCaFkybHVaem9nYkdWdVozUm9JQ3NnSjNCNEoxeHVJQ0FnSUgwN1hHNGdJQ0FnYkdWMElHaGhjMFJoYzJoQmNuSmhlU0E5SUdaaGJITmxPMXh1WEc0Z0lDQWdabTl5SUNoc1pYUWdhMlY1SUdsdUlITjBZWFJsS1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2h6ZEdGMFpTNW9ZWE5QZDI1UWNtOXdaWEowZVNoclpYa3BLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCMllXeDFaU0E5SUhOMFlYUmxXMnRsZVYwN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUhOM2FYUmphQ0FvYTJWNUtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCallYTmxJQ2RzWlc1bmRHZ25PbHh1SUNBZ0lDQWdJQ0FnSUNBZ1kyRnpaU0FuYzNCaFkybHVaeWM2WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYUdGelJHRnphRUZ5Y21GNUlEMGdkSEoxWlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCa1lYTm9RWEp5WVhsVGRIbHNaWE5iYTJWNVhTQTlJSEJsY21ObGJuUlViMUJwZUdWc2N5aDJZV3gxWlN3Z2JHVnVaM1JvS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCaWNtVmhhenRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTmhjMlVnSjI5bVpuTmxkQ2M2WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYzNSNWJHVnpXeWR6ZEhKdmEyVXRaR0Z6YUc5bVpuTmxkQ2RkSUQwZ2NHVnlZMlZ1ZEZSdlVHbDRaV3h6S0MxMllXeDFaU3dnYkdWdVozUm9LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JpY21WaGF6dGNiaUFnSUNBZ0lDQWdJQ0FnSUdSbFptRjFiSFE2WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYzNSNWJHVnpXMnRsZVYwZ1BTQjJZV3gxWlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJR2xtSUNob1lYTkVZWE5vUVhKeVlYa3BJSHRjYmlBZ0lDQWdJQ0FnYzNSNWJHVnpXeWR6ZEhKdmEyVXRaR0Z6YUdGeWNtRjVKMTBnUFNCa1lYTm9RWEp5WVhsVGRIbHNaWE11YkdWdVozUm9JQ3NnSnlBbklDc2daR0Z6YUVGeWNtRjVVM1I1YkdWekxuTndZV05wYm1jN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WMGRYSnVJSE4wZVd4bGN6dGNibjA3SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9zdmctcGF0aC9idWlsZC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgcmdiID0gZXhwb3J0cy5yZ2IgPSB7XG4gICAgbWluOiAwLFxuICAgIG1heDogMjU1LFxuICAgIHJvdW5kOiB0cnVlXG59O1xuXG52YXIgb3BhY2l0eSA9IGV4cG9ydHMub3BhY2l0eSA9IHtcbiAgICBtaW46IDAsXG4gICAgbWF4OiAxXG59O1xuXG52YXIgcGVyY2VudCA9IGV4cG9ydHMucGVyY2VudCA9IHtcbiAgICBtaW46IDAsXG4gICAgbWF4OiAxMDAsXG4gICAgdW5pdDogJyUnXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5elpYUjBhVzVuY3k5a1pXWmhkV3gwTFhCeWIzQnpMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3p0QlFVRlBMRWxCUVUwc2IwSkJRVTA3UVVGRFppeFRRVUZMTEVOQlFVdzdRVUZEUVN4VFFVRkxMRWRCUVV3N1FVRkRRU3hYUVVGUExFbEJRVkE3UTBGSVV6czdRVUZOVGl4SlFVRk5MRFJDUVVGVk8wRkJRMjVDTEZOQlFVc3NRMEZCVER0QlFVTkJMRk5CUVVzc1EwRkJURHREUVVaVE96dEJRVXRPTEVsQlFVMHNORUpCUVZVN1FVRkRia0lzVTBGQlN5eERRVUZNTzBGQlEwRXNVMEZCU3l4SFFVRk1PMEZCUTBFc1ZVRkJUU3hIUVVGT08wTkJTRk1pTENKbWFXeGxJam9pWkdWbVlYVnNkQzF3Y205d2N5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpsZUhCdmNuUWdZMjl1YzNRZ2NtZGlJRDBnZTF4dUlDQWdJRzFwYmpvZ01DeGNiaUFnSUNCdFlYZzZJREkxTlN4Y2JpQWdJQ0J5YjNWdVpEb2dkSEoxWlZ4dWZUdGNibHh1Wlhod2IzSjBJR052Ym5OMElHOXdZV05wZEhrZ1BTQjdYRzRnSUNBZ2JXbHVPaUF3TEZ4dUlDQWdJRzFoZURvZ01WeHVmVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJSEJsY21ObGJuUWdQU0I3WEc0Z0lDQWdiV2x1T2lBd0xGeHVJQ0FnSUcxaGVEb2dNVEF3TEZ4dUlDQWdJSFZ1YVhRNklDY2xKMXh1ZlRzaVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3NldHRpbmdzL2RlZmF1bHQtcHJvcHMuanNcbiAqKiBtb2R1bGUgaWQgPSA0OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIFggPSAnWCc7XG52YXIgWSA9ICdZJztcbnZhciBBTFBIQSA9ICdBbHBoYSc7XG5cbnZhciBheGVzID0gZXhwb3J0cy5heGVzID0gW1gsIFksICdaJ107XG52YXIgcmdiID0gZXhwb3J0cy5yZ2IgPSBbJ1JlZCcsICdHcmVlbicsICdCbHVlJywgQUxQSEFdO1xudmFyIGhzbCA9IGV4cG9ydHMuaHNsID0gWydIdWUnLCAnU2F0dXJhdGlvbicsICdMaWdodG5lc3MnLCBBTFBIQV07XG52YXIgcG9zaXRpb25zID0gZXhwb3J0cy5wb3NpdGlvbnMgPSBbJ1RvcCcsICdSaWdodCcsICdCb3R0b20nLCAnTGVmdCddO1xudmFyIHNoYWRvdyA9IGV4cG9ydHMuc2hhZG93ID0gW1gsIFksICdSYWRpdXMnLCAnU3ByZWFkJywgJ0NvbG9yJ107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTl6WlhSMGFXNW5jeTlrYVdOMGFXOXVZWEo1TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096dEJRVUZCTEVsQlFVMHNTVUZCU1N4SFFVRktPMEZCUTA0c1NVRkJUU3hKUVVGSkxFZEJRVW83UVVGRFRpeEpRVUZOTEZGQlFWRXNUMEZCVWpzN1FVRkZReXhKUVVGTkxITkNRVUZQTEVOQlFVTXNRMEZCUkN4RlFVRkpMRU5CUVVvc1JVRkJUeXhIUVVGUUxFTkJRVkE3UVVGRFRpeEpRVUZOTEc5Q1FVRk5MRU5CUVVNc1MwRkJSQ3hGUVVGUkxFOUJRVklzUlVGQmFVSXNUVUZCYWtJc1JVRkJlVUlzUzBGQmVrSXNRMEZCVGp0QlFVTk9MRWxCUVUwc2IwSkJRVTBzUTBGQlF5eExRVUZFTEVWQlFWRXNXVUZCVWl4RlFVRnpRaXhYUVVGMFFpeEZRVUZ0UXl4TFFVRnVReXhEUVVGT08wRkJRMDRzU1VGQlRTeG5RMEZCV1N4RFFVRkRMRXRCUVVRc1JVRkJVU3hQUVVGU0xFVkJRV2xDTEZGQlFXcENMRVZCUVRKQ0xFMUJRVE5DTEVOQlFWbzdRVUZEVGl4SlFVRk5MREJDUVVGVExFTkJRVU1zUTBGQlJDeEZRVUZKTEVOQlFVb3NSVUZCVHl4UlFVRlFMRVZCUVdsQ0xGRkJRV3BDTEVWQlFUSkNMRTlCUVROQ0xFTkJRVlFpTENKbWFXeGxJam9pWkdsamRHbHZibUZ5ZVM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRDOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SmpiMjV6ZENCWUlEMGdKMWduTzF4dVkyOXVjM1FnV1NBOUlDZFpKenRjYm1OdmJuTjBJRUZNVUVoQklEMGdKMEZzY0doaEp6dGNibHh1Wlhod2IzSjBJR052Ym5OMElHRjRaWE1nUFNCYldDd2dXU3dnSjFvblhUdGNibVY0Y0c5eWRDQmpiMjV6ZENCeVoySWdQU0JiSjFKbFpDY3NJQ2RIY21WbGJpY3NJQ2RDYkhWbEp5d2dRVXhRU0VGZE8xeHVaWGh3YjNKMElHTnZibk4wSUdoemJDQTlJRnNuU0hWbEp5d2dKMU5oZEhWeVlYUnBiMjRuTENBblRHbG5hSFJ1WlhOekp5d2dRVXhRU0VGZE8xeHVaWGh3YjNKMElHTnZibk4wSUhCdmMybDBhVzl1Y3lBOUlGc25WRzl3Snl3Z0oxSnBaMmgwSnl3Z0owSnZkSFJ2YlNjc0lDZE1aV1owSjEwN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnYzJoaFpHOTNJRDBnVzFnc0lGa3NJQ2RTWVdScGRYTW5MQ0FuVTNCeVpXRmtKeXdnSjBOdmJHOXlKMTA3SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvc2V0dGluZ3MvZGljdGlvbmFyeS5qc1xuICoqIG1vZHVsZSBpZCA9IDQ5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZUVhc2luZ0Z1bmN0aW9uO1xuLypcbiAgICBNaXJyb3IgZWFzaW5nXG4gICAgXG4gICAgTWlycm9ycyB0aGUgcHJvdmlkZWQgZWFzaW5nIGZ1bmN0aW9uLCB1c2VkIGhlcmUgZm9yIG1pcnJvcmluZyBhblxuICAgIGVhc2VJbiBpbnRvIGFuIGVhc2VJbk91dFxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MsIGZyb20gMCAtIDEsIG9mIGN1cnJlbnQgc2hpZnRcbiAgICBAcGFyYW0gW2Z1bmN0aW9uXTogVGhlIGVhc2luZyBmdW5jdGlvbiB0byBtaXJyb3JcbiAgICBAcmV0dXJucyBbbnVtYmVyXTogVGhlIGVhc2luZy1hZGp1c3RlZCBkZWx0YVxuKi9cbnZhciBtaXJyb3JFYXNpbmcgPSBmdW5jdGlvbiAobWV0aG9kKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwcm9ncmVzcywgc3RyZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHByb2dyZXNzIDw9IDAuNSA/IG1ldGhvZCgyICogcHJvZ3Jlc3MsIHN0cmVuZ3RoKSAvIDIgOiAoMiAtIG1ldGhvZCgyICogKDEgLSBwcm9ncmVzcyksIHN0cmVuZ3RoKSkgLyAyO1xuICAgIH07XG59O1xuXG4vKlxuICAgIFJldmVyc2UgZWFzaW5nXG4gICAgXG4gICAgUmV2ZXJzZXMgdGhlIG91dHB1dCBvZiB0aGUgcHJvdmlkZWQgZWFzaW5nIGZ1bmN0aW9uLCB1c2VkIGZvciBmbGlwcGluZyBlYXNlSW5cbiAgICBjdXJ2ZSB0byBhbiBlYXNlT3V0LlxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MsIGZyb20gMCAtIDEsIG9mIGN1cnJlbnQgc2hpZnRcbiAgICBAcGFyYW0gW2Z1bmN0aW9uXTogVGhlIGVhc2luZyBmdW5jdGlvbiB0byByZXZlcnNlXG4gICAgQHJldHVybnMgW251bWJlcl06IFRoZSBlYXNpbmctYWRqdXN0ZWQgZGVsdGFcbiovXG52YXIgcmV2ZXJzZUVhc2luZyA9IGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHByb2dyZXNzLCBzdHJlbmd0aCkge1xuICAgICAgICByZXR1cm4gMSAtIG1ldGhvZCgxIC0gcHJvZ3Jlc3MsIHN0cmVuZ3RoKTtcbiAgICB9O1xufTtcblxuLypcbiAgICBFYXNpbmcgY2xhc3NcblxuICAgIElmIHByb3ZpZGVkIGVhc2luZyBmdW5jdGlvbiwgcmV0dXJucyBlYXNpbmcgZnVuY3Rpb24gd2l0aCBcbiAgICBpbi9vdXQvaW5PdXQgdmFyaWF0aW9uc1xuXG4gICAgSWYgcHJvdmlkZWQgZm91ciBhcmd1bWVudHMsIHJldHVybnMgbmV3IEJlemllciBjbGFzcyBpbnN0ZWFkLlxuKi9cbmZ1bmN0aW9uIGNyZWF0ZUVhc2luZ0Z1bmN0aW9uKG1ldGhvZCkge1xuICAgIHZhciBlYXNpbmdGdW5jdGlvbiA9IGZ1bmN0aW9uIChwcm9ncmVzcywgc3RyZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIG1ldGhvZChwcm9ncmVzcywgc3RyZW5ndGgpO1xuICAgIH07XG5cbiAgICBlYXNpbmdGdW5jdGlvbi5pbiA9IGZ1bmN0aW9uIChwcm9ncmVzcywgc3RyZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIG1ldGhvZChwcm9ncmVzcywgc3RyZW5ndGgpO1xuICAgIH07XG4gICAgZWFzaW5nRnVuY3Rpb24ub3V0ID0gcmV2ZXJzZUVhc2luZyhtZXRob2QpO1xuICAgIGVhc2luZ0Z1bmN0aW9uLmluT3V0ID0gbWlycm9yRWFzaW5nKG1ldGhvZCk7XG5cbiAgICByZXR1cm4gZWFzaW5nRnVuY3Rpb247XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwyVmhjMmx1Wnk5amNtVmhkR1V0WldGemFXNW5MbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3p0clFrRm5RM2RDT3pzN096czdPenM3T3p0QlFYUkNlRUlzU1VGQlRTeGxRVUZsTEZWQlFVTXNUVUZCUkR0WFFVRlpMRlZCUVVNc1VVRkJSQ3hGUVVGWExGRkJRVmc3WlVGQmQwSXNVVUZCUXl4SlFVRlpMRWRCUVZvc1IwRkJiVUlzVDBGQlR5eEpRVUZKTEZGQlFVb3NSVUZCWXl4UlFVRnlRaXhKUVVGcFF5eERRVUZxUXl4SFFVRnhReXhEUVVGRExFbEJRVWtzVDBGQlR5eExRVUZMTEVsQlFVa3NVVUZCU2l4RFFVRk1MRVZCUVc5Q0xGRkJRVE5DTEVOQlFVb3NRMEZCUkN4SFFVRTJReXhEUVVFM1F6dExRVUZxUmp0RFFVRmFPenM3T3pzN096czdPenM3UVVGWmNrSXNTVUZCVFN4blFrRkJaMElzVlVGQlF5eE5RVUZFTzFkQlFWa3NWVUZCUXl4UlFVRkVMRVZCUVZjc1VVRkJXRHRsUVVGM1FpeEpRVUZKTEU5QlFVOHNTVUZCU1N4UlFVRktMRVZCUVdNc1VVRkJja0lzUTBGQlNqdExRVUY0UWp0RFFVRmFPenM3T3pzN096czdPMEZCVlZBc1UwRkJVeXh2UWtGQlZDeERRVUU0UWl4TlFVRTVRaXhGUVVGelF6dEJRVU5xUkN4UlFVRkpMR2xDUVVGcFFpeFZRVUZETEZGQlFVUXNSVUZCVnl4UlFVRllPMlZCUVhkQ0xFOUJRVThzVVVGQlVDeEZRVUZwUWl4UlFVRnFRanRMUVVGNFFpeERRVVEwUWpzN1FVRkhha1FzYlVKQlFXVXNSVUZCWml4SFFVRnZRaXhWUVVGRExGRkJRVVFzUlVGQlZ5eFJRVUZZTzJWQlFYZENMRTlCUVU4c1VVRkJVQ3hGUVVGcFFpeFJRVUZxUWp0TFFVRjRRaXhEUVVnMlFqdEJRVWxxUkN4dFFrRkJaU3hIUVVGbUxFZEJRWEZDTEdOQlFXTXNUVUZCWkN4RFFVRnlRaXhEUVVwcFJEdEJRVXRxUkN4dFFrRkJaU3hMUVVGbUxFZEJRWFZDTEdGQlFXRXNUVUZCWWl4RFFVRjJRaXhEUVV4cFJEczdRVUZQYWtRc1YwRkJUeXhqUVVGUUxFTkJVR2xFTzBOQlFYUkRJaXdpWm1sc1pTSTZJbU55WldGMFpTMWxZWE5wYm1jdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUXZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lMeXBjYmlBZ0lDQk5hWEp5YjNJZ1pXRnphVzVuWEc0Z0lDQWdYRzRnSUNBZ1RXbHljbTl5Y3lCMGFHVWdjSEp2ZG1sa1pXUWdaV0Z6YVc1bklHWjFibU4wYVc5dUxDQjFjMlZrSUdobGNtVWdabTl5SUcxcGNuSnZjbWx1WnlCaGJseHVJQ0FnSUdWaGMyVkpiaUJwYm5SdklHRnVJR1ZoYzJWSmJrOTFkRnh1SUNBZ0lGeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVUhKdlozSmxjM01zSUdaeWIyMGdNQ0F0SURFc0lHOW1JR04xY25KbGJuUWdjMmhwWm5SY2JpQWdJQ0JBY0dGeVlXMGdXMloxYm1OMGFXOXVYVG9nVkdobElHVmhjMmx1WnlCbWRXNWpkR2x2YmlCMGJ5QnRhWEp5YjNKY2JpQWdJQ0JBY21WMGRYSnVjeUJiYm5WdFltVnlYVG9nVkdobElHVmhjMmx1WnkxaFpHcDFjM1JsWkNCa1pXeDBZVnh1S2k5Y2JtTnZibk4wSUcxcGNuSnZja1ZoYzJsdVp5QTlJQ2h0WlhSb2IyUXBJRDArSUNod2NtOW5jbVZ6Y3l3Z2MzUnlaVzVuZEdncElEMCtJQ2h3Y205bmNtVnpjeUE4UFNBd0xqVXBJRDhnYldWMGFHOWtLRElnS2lCd2NtOW5jbVZ6Y3l3Z2MzUnlaVzVuZEdncElDOGdNaUE2SUNneUlDMGdiV1YwYUc5a0tESWdLaUFvTVNBdElIQnliMmR5WlhOektTd2djM1J5Wlc1bmRHZ3BLU0F2SURJN1hHNGdJQ0FnSUNBZ0lGeHVMeXBjYmlBZ0lDQlNaWFpsY25ObElHVmhjMmx1WjF4dUlDQWdJRnh1SUNBZ0lGSmxkbVZ5YzJWeklIUm9aU0J2ZFhSd2RYUWdiMllnZEdobElIQnliM1pwWkdWa0lHVmhjMmx1WnlCbWRXNWpkR2x2Yml3Z2RYTmxaQ0JtYjNJZ1pteHBjSEJwYm1jZ1pXRnpaVWx1WEc0Z0lDQWdZM1Z5ZG1VZ2RHOGdZVzRnWldGelpVOTFkQzVjYmlBZ0lDQmNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZCeWIyZHlaWE56TENCbWNtOXRJREFnTFNBeExDQnZaaUJqZFhKeVpXNTBJSE5vYVdaMFhHNGdJQ0FnUUhCaGNtRnRJRnRtZFc1amRHbHZibDA2SUZSb1pTQmxZWE5wYm1jZ1puVnVZM1JwYjI0Z2RHOGdjbVYyWlhKelpWeHVJQ0FnSUVCeVpYUjFjbTV6SUZ0dWRXMWlaWEpkT2lCVWFHVWdaV0Z6YVc1bkxXRmthblZ6ZEdWa0lHUmxiSFJoWEc0cUwxeHVZMjl1YzNRZ2NtVjJaWEp6WlVWaGMybHVaeUE5SUNodFpYUm9iMlFwSUQwK0lDaHdjbTluY21WemN5d2djM1J5Wlc1bmRHZ3BJRDArSURFZ0xTQnRaWFJvYjJRb01TQXRJSEJ5YjJkeVpYTnpMQ0J6ZEhKbGJtZDBhQ2s3WEc1Y2JpOHFYRzRnSUNBZ1JXRnphVzVuSUdOc1lYTnpYRzVjYmlBZ0lDQkpaaUJ3Y205MmFXUmxaQ0JsWVhOcGJtY2dablZ1WTNScGIyNHNJSEpsZEhWeWJuTWdaV0Z6YVc1bklHWjFibU4wYVc5dUlIZHBkR2dnWEc0Z0lDQWdhVzR2YjNWMEwybHVUM1YwSUhaaGNtbGhkR2x2Ym5OY2JseHVJQ0FnSUVsbUlIQnliM1pwWkdWa0lHWnZkWElnWVhKbmRXMWxiblJ6TENCeVpYUjFjbTV6SUc1bGR5QkNaWHBwWlhJZ1kyeGhjM01nYVc1emRHVmhaQzVjYmlvdlhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCbWRXNWpkR2x2YmlCamNtVmhkR1ZGWVhOcGJtZEdkVzVqZEdsdmJpaHRaWFJvYjJRcElIdGNiaUFnSUNCc1pYUWdaV0Z6YVc1blJuVnVZM1JwYjI0Z1BTQW9jSEp2WjNKbGMzTXNJSE4wY21WdVozUm9LU0E5UGlCdFpYUm9iMlFvY0hKdlozSmxjM01zSUhOMGNtVnVaM1JvS1R0Y2JseHVJQ0FnSUdWaGMybHVaMFoxYm1OMGFXOXVMbWx1SUQwZ0tIQnliMmR5WlhOekxDQnpkSEpsYm1kMGFDa2dQVDRnYldWMGFHOWtLSEJ5YjJkeVpYTnpMQ0J6ZEhKbGJtZDBhQ2s3WEc0Z0lDQWdaV0Z6YVc1blJuVnVZM1JwYjI0dWIzVjBJRDBnY21WMlpYSnpaVVZoYzJsdVp5aHRaWFJvYjJRcE8xeHVJQ0FnSUdWaGMybHVaMFoxYm1OMGFXOXVMbWx1VDNWMElEMGdiV2x5Y205eVJXRnphVzVuS0cxbGRHaHZaQ2s3WEc1Y2JpQWdJQ0J5WlhSMWNtNGdaV0Z6YVc1blJuVnVZM1JwYjI0N1hHNTlYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9lYXNpbmcvY3JlYXRlLWVhc2luZy5qc1xuICoqIG1vZHVsZSBpZCA9IDUwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBjdWJpY0Jlemllcjtcbi8qXG4gICAgQmV6aWVyIGZ1bmN0aW9uIGdlbmVyYXRvclxuICAgICAgICBcbiAgICBHYcOrdGFuIFJlbmF1ZGVhdSdzIEJlemllckVhc2luZ1xuICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9pbmRleC5qcyAgXG4gICAgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAgICBZb3UncmUgYSBoZXJvXG4gICAgXG4gICAgVXNlXG4gICAgXG4gICAgICAgIHZhciBlYXNlT3V0ID0gbmV3IEJlemllciguMTcsLjY3LC44MywuNjcpLFxuICAgICAgICAgICAgeCA9IGVhc2VPdXQoMC41KTsgLy8gcmV0dXJucyAwLjYyNy4uLlxuKi9cblxuLy8gQ29uc3RhbnRzXG52YXIgTkVXVE9OX0lURVJBVElPTlMgPSA4O1xudmFyIE5FV1RPTl9NSU5fU0xPUEUgPSAwLjAwMTtcbnZhciBTVUJESVZJU0lPTl9QUkVDSVNJT04gPSAwLjAwMDAwMDE7XG52YXIgU1VCRElWSVNJT05fTUFYX0lURVJBVElPTlMgPSAxMDtcbnZhciBLX1NQTElORV9UQUJMRV9TSVpFID0gMTE7XG52YXIgS19TQU1QTEVfU1RFUF9TSVpFID0gMS4wIC8gKEtfU1BMSU5FX1RBQkxFX1NJWkUgLSAxLjApO1xudmFyIEZMT0FUXzMyX1NVUFBPUlRFRCA9IHR5cGVvZiBGbG9hdDMyQXJyYXkgIT09ICd1bmRlZmluZWQnO1xuXG4vLyBIZWxwZXIgbWV0aG9kc1xudmFyIGEgPSBmdW5jdGlvbiAoYTEsIGEyKSB7XG4gICAgcmV0dXJuIDEuMCAtIDMuMCAqIGEyICsgMy4wICogYTE7XG59O1xudmFyIGIgPSBmdW5jdGlvbiAoYTEsIGEyKSB7XG4gICAgcmV0dXJuIDMuMCAqIGEyIC0gNi4wICogYTE7XG59O1xudmFyIGMgPSBmdW5jdGlvbiAoYTEpIHtcbiAgICByZXR1cm4gMy4wICogYTE7XG59O1xuXG52YXIgZ2V0U2xvcGUgPSBmdW5jdGlvbiAodCwgYTEsIGEyKSB7XG4gICAgcmV0dXJuIDMuMCAqIGEoYTEsIGEyKSAqIHQgKiB0ICsgMi4wICogYihhMSwgYTIpICogdCArIGMoYTEpO1xufTtcblxudmFyIGNhbGNCZXppZXIgPSBmdW5jdGlvbiAodCwgYTEsIGEyKSB7XG4gICAgcmV0dXJuICgoYShhMSwgYTIpICogdCArIGIoYTEsIGEyKSkgKiB0ICsgYyhhMSkpICogdDtcbn07XG5cbi8qXG4gICAgQ3JlYXRlIGEgY3ViaWMgYmV6aWVyIHJlc29sdmVyXG4qL1xuZnVuY3Rpb24gY3ViaWNCZXppZXIobVgxLCBtWTEsIG1YMiwgbVkyKSB7XG4gICAgdmFyIHNhbXBsZVZhbHVlcyA9IEZMT0FUXzMyX1NVUFBPUlRFRCA/IG5ldyBGbG9hdDMyQXJyYXkoS19TUExJTkVfVEFCTEVfU0laRSkgOiBuZXcgQXJyYXkoS19TUExJTkVfVEFCTEVfU0laRSk7XG4gICAgdmFyIF9wcmVjb21wdXRlZCA9IGZhbHNlO1xuXG4gICAgdmFyIGJpbmFyeVN1YmRpdmlkZSA9IGZ1bmN0aW9uIChhWCwgYUEsIGFCKSB7XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgdmFyIGN1cnJlbnRYID0gdW5kZWZpbmVkO1xuICAgICAgICB2YXIgY3VycmVudFQgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgY3VycmVudFQgPSBhQSArIChhQiAtIGFBKSAvIDIuMDtcbiAgICAgICAgICAgIGN1cnJlbnRYID0gY2FsY0JlemllcihjdXJyZW50VCwgbVgxLCBtWDIpIC0gYVg7XG4gICAgICAgICAgICBpZiAoY3VycmVudFggPiAwLjApIHtcbiAgICAgICAgICAgICAgICBhQiA9IGN1cnJlbnRUO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhQSA9IGN1cnJlbnRUO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IHdoaWxlIChNYXRoLmFicyhjdXJyZW50WCkgPiBTVUJESVZJU0lPTl9QUkVDSVNJT04gJiYgKytpIDwgU1VCRElWSVNJT05fTUFYX0lURVJBVElPTlMpO1xuXG4gICAgICAgIHJldHVybiBjdXJyZW50VDtcbiAgICB9O1xuXG4gICAgdmFyIG5ld3RvblJhcGhzb25JdGVyYXRlID0gZnVuY3Rpb24gKGFYLCBhR3Vlc3NUKSB7XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgdmFyIGN1cnJlbnRTbG9wZSA9IDA7XG4gICAgICAgIHZhciBjdXJyZW50WCA9IHVuZGVmaW5lZDtcblxuICAgICAgICBmb3IgKDsgaSA8IE5FV1RPTl9JVEVSQVRJT05TOyArK2kpIHtcbiAgICAgICAgICAgIGN1cnJlbnRTbG9wZSA9IGdldFNsb3BlKGFHdWVzc1QsIG1YMSwgbVgyKTtcblxuICAgICAgICAgICAgaWYgKGN1cnJlbnRTbG9wZSA9PT0gMC4wKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFHdWVzc1Q7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGN1cnJlbnRYID0gY2FsY0JlemllcihhR3Vlc3NULCBtWDEsIG1YMikgLSBhWDtcbiAgICAgICAgICAgIGFHdWVzc1QgLT0gY3VycmVudFggLyBjdXJyZW50U2xvcGU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYUd1ZXNzVDtcbiAgICB9O1xuXG4gICAgdmFyIGNhbGNTYW1wbGVWYWx1ZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgS19TUExJTkVfVEFCTEVfU0laRTsgKytpKSB7XG4gICAgICAgICAgICBzYW1wbGVWYWx1ZXNbaV0gPSBjYWxjQmV6aWVyKGkgKiBLX1NBTVBMRV9TVEVQX1NJWkUsIG1YMSwgbVgyKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgZ2V0VEZvclggPSBmdW5jdGlvbiAoYVgpIHtcbiAgICAgICAgdmFyIGludGVydmFsU3RhcnQgPSAwLjA7XG4gICAgICAgIHZhciBjdXJyZW50U2FtcGxlID0gMTtcbiAgICAgICAgdmFyIGxhc3RTYW1wbGUgPSBLX1NQTElORV9UQUJMRV9TSVpFIC0gMTtcbiAgICAgICAgdmFyIGRpc3QgPSAwLjA7XG4gICAgICAgIHZhciBndWVzc0ZvclQgPSAwLjA7XG4gICAgICAgIHZhciBpbml0aWFsU2xvcGUgPSAwLjA7XG5cbiAgICAgICAgZm9yICg7IGN1cnJlbnRTYW1wbGUgIT0gbGFzdFNhbXBsZSAmJiBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0gPD0gYVg7ICsrY3VycmVudFNhbXBsZSkge1xuICAgICAgICAgICAgaW50ZXJ2YWxTdGFydCArPSBLX1NBTVBMRV9TVEVQX1NJWkU7XG4gICAgICAgIH1cblxuICAgICAgICAtLWN1cnJlbnRTYW1wbGU7XG5cbiAgICAgICAgZGlzdCA9IChhWCAtIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSkgLyAoc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGUgKyAxXSAtIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSk7XG4gICAgICAgIGd1ZXNzRm9yVCA9IGludGVydmFsU3RhcnQgKyBkaXN0ICogS19TQU1QTEVfU1RFUF9TSVpFO1xuXG4gICAgICAgIGluaXRpYWxTbG9wZSA9IGdldFNsb3BlKGd1ZXNzRm9yVCwgbVgxLCBtWDIpO1xuXG4gICAgICAgIC8vIElmIHNsb3BlIGlzIGdyZWF0ZXIgdGhhbiBtaW5cbiAgICAgICAgaWYgKGluaXRpYWxTbG9wZSA+PSBORVdUT05fTUlOX1NMT1BFKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3dG9uUmFwaHNvbkl0ZXJhdGUoYVgsIGd1ZXNzRm9yVCk7XG4gICAgICAgICAgICAvLyBTbG9wZSBpcyBlcXVhbCB0byBtaW5cbiAgICAgICAgfSBlbHNlIGlmIChpbml0aWFsU2xvcGUgPT09IDAuMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBndWVzc0ZvclQ7XG4gICAgICAgICAgICAgICAgLy8gU2xvcGUgaXMgbGVzcyB0aGFuIG1pblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJpbmFyeVN1YmRpdmlkZShhWCwgaW50ZXJ2YWxTdGFydCwgaW50ZXJ2YWxTdGFydCArIEtfU0FNUExFX1NURVBfU0laRSk7XG4gICAgICAgICAgICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgcHJlY29tcHV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3ByZWNvbXB1dGVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKG1YMSAhPSBtWTEgfHwgbVgyICE9IG1ZMikge1xuICAgICAgICAgICAgY2FsY1NhbXBsZVZhbHVlcygpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHZhciByZXNvbHZlciA9IGZ1bmN0aW9uIChhWCkge1xuICAgICAgICB2YXIgcmV0dXJuVmFsdWUgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgaWYgKCFfcHJlY29tcHV0ZWQpIHtcbiAgICAgICAgICAgIHByZWNvbXB1dGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGxpbmVhciBncmFkaWVudCwgcmV0dXJuIFggYXMgVFxuICAgICAgICBpZiAobVgxID09PSBtWTEgJiYgbVgyID09PSBtWTIpIHtcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gYVg7XG5cbiAgICAgICAgICAgIC8vIElmIGF0IHN0YXJ0LCByZXR1cm4gMFxuICAgICAgICB9IGVsc2UgaWYgKGFYID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSAwO1xuXG4gICAgICAgICAgICAgICAgLy8gSWYgYXQgZW5kLCByZXR1cm4gMVxuICAgICAgICAgICAgfSBlbHNlIGlmIChhWCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IDE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSBjYWxjQmV6aWVyKGdldFRGb3JYKGFYKSwgbVkxLCBtWTIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmV0dXJuVmFsdWU7XG4gICAgfTtcblxuICAgIHJldHVybiByZXNvbHZlcjtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDJWaGMybHVaeTlqY21WaGRHVXRZbVY2YVdWeUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenRyUWtGdFEzZENPenM3T3pzN096czdPenM3T3pzN08wRkJjRUo0UWl4SlFVRk5MRzlDUVVGdlFpeERRVUZ3UWp0QlFVTk9MRWxCUVUwc2JVSkJRVzFDTEV0QlFXNUNPMEZCUTA0c1NVRkJUU3gzUWtGQmQwSXNVMEZCZUVJN1FVRkRUaXhKUVVGTkxEWkNRVUUyUWl4RlFVRTNRanRCUVVOT0xFbEJRVTBzYzBKQlFYTkNMRVZCUVhSQ08wRkJRMDRzU1VGQlRTeHhRa0ZCY1VJc1QwRkJUeXh6UWtGQmMwSXNSMEZCZEVJc1EwRkJVRHRCUVVNelFpeEpRVUZOTEhGQ1FVRnpRaXhQUVVGUExGbEJRVkFzUzBGQmQwSXNWMEZCZUVJN096dEJRVWMxUWl4SlFVRk5MRWxCUVVrc1ZVRkJReXhGUVVGRUxFVkJRVXNzUlVGQlREdFhRVUZaTEUxQlFVMHNUVUZCVFN4RlFVRk9MRWRCUVZjc1RVRkJUU3hGUVVGT08wTkJRVGRDTzBGQlExWXNTVUZCVFN4SlFVRkpMRlZCUVVNc1JVRkJSQ3hGUVVGTExFVkJRVXc3VjBGQldTeE5RVUZOTEVWQlFVNHNSMEZCVnl4TlFVRk5MRVZCUVU0N1EwRkJka0k3UVVGRFZpeEpRVUZOTEVsQlFVa3NWVUZCUXl4RlFVRkVPMWRCUVZFc1RVRkJUU3hGUVVGT08wTkJRVkk3TzBGQlJWWXNTVUZCVFN4WFFVRlhMRlZCUVVNc1EwRkJSQ3hGUVVGSkxFVkJRVW9zUlVGQlVTeEZRVUZTTzFkQlFXVXNUVUZCVFN4RlFVRkZMRVZCUVVZc1JVRkJUU3hGUVVGT0xFTkJRVTRzUjBGQmEwSXNRMEZCYkVJc1IwRkJjMElzUTBGQmRFSXNSMEZCTUVJc1RVRkJUU3hGUVVGRkxFVkJRVVlzUlVGQlRTeEZRVUZPTEVOQlFVNHNSMEZCYTBJc1EwRkJiRUlzUjBGQmMwSXNSVUZCUlN4RlFVRkdMRU5CUVdoRU8wTkJRV1k3TzBGQlJXcENMRWxCUVUwc1lVRkJZU3hWUVVGRExFTkJRVVFzUlVGQlNTeEZRVUZLTEVWQlFWRXNSVUZCVWp0WFFVRmxMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVlzUlVGQlRTeEZRVUZPTEVsQlFWa3NRMEZCV2l4SFFVRm5RaXhGUVVGRkxFVkJRVVlzUlVGQlRTeEZRVUZPTEVOQlFXaENMRU5CUVVRc1IwRkJPRUlzUTBGQk9VSXNSMEZCYTBNc1JVRkJSU3hGUVVGR0xFTkJRV3hETEVOQlFVUXNSMEZCTkVNc1EwRkJOVU03UTBGQlpqczdPenM3UVVGTFNpeFRRVUZUTEZkQlFWUXNRMEZCY1VJc1IwRkJja0lzUlVGQk1FSXNSMEZCTVVJc1JVRkJLMElzUjBGQkwwSXNSVUZCYjBNc1IwRkJjRU1zUlVGQmVVTTdRVUZEY0VRc1VVRkJUU3hsUVVGbExIRkNRVUZ4UWl4SlFVRkpMRmxCUVVvc1EwRkJhVUlzYlVKQlFXcENMRU5CUVhKQ0xFZEJRVFpFTEVsQlFVa3NTMEZCU2l4RFFVRlZMRzFDUVVGV0xFTkJRVGRFTEVOQlJDdENPMEZCUlhCRUxGRkJRVWtzWlVGQlpTeExRVUZtTEVOQlJtZEVPenRCUVVsd1JDeFJRVUZOTEd0Q1FVRnJRaXhWUVVGRExFVkJRVVFzUlVGQlN5eEZRVUZNTEVWQlFWTXNSVUZCVkN4RlFVRm5RanRCUVVOd1F5eFpRVUZKTEVsQlFVa3NRMEZCU2l4RFFVUm5RenRCUVVWd1F5eFpRVUZKTEc5Q1FVRktMRU5CUm05RE8wRkJSM0JETEZsQlFVa3NiMEpCUVVvc1EwRkliME03TzBGQlMzQkRMRmRCUVVjN1FVRkRReXgxUWtGQlZ5eExRVUZMTEVOQlFVTXNTMEZCU3l4RlFVRk1MRU5CUVVRc1IwRkJXU3hIUVVGYUxFTkJSR3BDTzBGQlJVTXNkVUpCUVZjc1YwRkJWeXhSUVVGWUxFVkJRWEZDTEVkQlFYSkNMRVZCUVRCQ0xFZEJRVEZDTEVsQlFXbERMRVZCUVdwRExFTkJSbG83UVVGSFF5eG5Ra0ZCU1N4WFFVRlhMRWRCUVZnc1JVRkJaMEk3UVVGRGFFSXNjVUpCUVVzc1VVRkJUQ3hEUVVSblFqdGhRVUZ3UWl4TlFVVlBPMEZCUTBnc2NVSkJRVXNzVVVGQlRDeERRVVJITzJGQlJsQTdVMEZJU2l4UlFWRlRMRXRCUVVzc1IwRkJUQ3hEUVVGVExGRkJRVlFzU1VGQmNVSXNjVUpCUVhKQ0xFbEJRVGhETEVWQlFVVXNRMEZCUml4SFFVRk5MREJDUVVGT0xFVkJZbTVDT3p0QlFXVndReXhsUVVGUExGRkJRVkFzUTBGbWIwTTdTMEZCYUVJc1EwRktORUk3TzBGQmMwSndSQ3hSUVVGTkxIVkNRVUYxUWl4VlFVRkRMRVZCUVVRc1JVRkJTeXhQUVVGTUxFVkJRV2xDTzBGQlF6RkRMRmxCUVVrc1NVRkJTU3hEUVVGS0xFTkJSSE5ETzBGQlJURkRMRmxCUVVrc1pVRkJaU3hEUVVGbUxFTkJSbk5ETzBGQlJ6RkRMRmxCUVVrc2IwSkJRVW9zUTBGSU1FTTdPMEZCU3pGRExHVkJRVThzU1VGQlNTeHBRa0ZCU2l4RlFVRjFRaXhGUVVGRkxFTkJRVVlzUlVGQlN6dEJRVU12UWl3eVFrRkJaU3hUUVVGVExFOUJRVlFzUlVGQmEwSXNSMEZCYkVJc1JVRkJkVUlzUjBGQmRrSXNRMEZCWml4RFFVUXJRanM3UVVGSEwwSXNaMEpCUVVrc2FVSkJRV2xDTEVkQlFXcENMRVZCUVhOQ08wRkJRM1JDTEhWQ1FVRlBMRTlCUVZBc1EwRkVjMEk3WVVGQk1VSTdPMEZCU1VFc2RVSkJRVmNzVjBGQlZ5eFBRVUZZTEVWQlFXOUNMRWRCUVhCQ0xFVkJRWGxDTEVkQlFYcENMRWxCUVdkRExFVkJRV2hETEVOQlVHOUNPMEZCVVM5Q0xIVkNRVUZYTEZkQlFWY3NXVUZCV0N4RFFWSnZRanRUUVVGdVF6czdRVUZYUVN4bFFVRlBMRTlCUVZBc1EwRm9RakJETzB0QlFXcENMRU5CZEVKMVFqczdRVUY1UTNCRUxGRkJRVTBzYlVKQlFXMUNMRmxCUVUwN1FVRkRNMElzWVVGQlN5eEpRVUZKTEVsQlFVa3NRMEZCU2l4RlFVRlBMRWxCUVVrc2JVSkJRVW9zUlVGQmVVSXNSVUZCUlN4RFFVRkdMRVZCUVVzN1FVRkRNVU1zZVVKQlFXRXNRMEZCWWl4SlFVRnJRaXhYUVVGWExFbEJRVWtzYTBKQlFVb3NSVUZCZDBJc1IwRkJia01zUlVGQmQwTXNSMEZCZUVNc1EwRkJiRUlzUTBGRU1FTTdVMEZCT1VNN1MwRkVjVUlzUTBGNlF6SkNPenRCUVN0RGNFUXNVVUZCVFN4WFFVRlhMRlZCUVVNc1JVRkJSQ3hGUVVGUk8wRkJRM0pDTEZsQlFVa3NaMEpCUVdkQ0xFZEJRV2hDTEVOQlJHbENPMEZCUlhKQ0xGbEJRVWtzWjBKQlFXZENMRU5CUVdoQ0xFTkJSbWxDTzBGQlIzSkNMRmxCUVVrc1lVRkJZU3h6UWtGQmMwSXNRMEZCZEVJc1EwRklTVHRCUVVseVFpeFpRVUZKTEU5QlFVOHNSMEZCVUN4RFFVcHBRanRCUVV0eVFpeFpRVUZKTEZsQlFWa3NSMEZCV2l4RFFVeHBRanRCUVUxeVFpeFpRVUZKTEdWQlFXVXNSMEZCWml4RFFVNXBRanM3UVVGUmNrSXNaVUZCVHl4cFFrRkJhVUlzVlVGQmFrSXNTVUZCSzBJc1lVRkJZU3hoUVVGaUxFdEJRU3RDTEVWQlFTOUNMRVZCUVcxRExFVkJRVVVzWVVGQlJpeEZRVUZwUWp0QlFVTjBSaXcyUWtGQmFVSXNhMEpCUVdwQ0xFTkJSSE5HTzFOQlFURkdPenRCUVVsQkxGVkJRVVVzWVVGQlJpeERRVnB4UWpzN1FVRmpja0lzWlVGQlR5eERRVUZETEV0QlFVc3NZVUZCWVN4aFFVRmlMRU5CUVV3c1EwRkJSQ3hKUVVGelF5eGhRVUZoTEdkQ1FVRmpMRU5CUVdRc1EwRkJZaXhIUVVGblF5eGhRVUZoTEdGQlFXSXNRMEZCYUVNc1EwRkJkRU1zUTBGa1l6dEJRV1Z5UWl4dlFrRkJXU3huUWtGQlowSXNUMEZCVHl4clFrRkJVQ3hEUVdaUU96dEJRV2xDY2tJc2RVSkJRV1VzVTBGQlV5eFRRVUZVTEVWQlFXOUNMRWRCUVhCQ0xFVkJRWGxDTEVkQlFYcENMRU5CUVdZN096dEJRV3BDY1VJc1dVRnZRbXBDTEdkQ1FVRm5RaXhuUWtGQmFFSXNSVUZCYTBNN1FVRkRiRU1zYlVKQlFVOHNjVUpCUVhGQ0xFVkJRWEpDTEVWQlFYbENMRk5CUVhwQ0xFTkJRVkE3TzBGQlJHdERMRk5CUVhSRExFMUJSMDhzU1VGQlNTeHBRa0ZCYVVJc1IwRkJha0lzUlVGQmMwSTdRVUZETjBJc2RVSkJRVThzVTBGQlVEczdRVUZFTmtJc1lVRkJNVUlzVFVGSFFUdEJRVU5JTERKQ1FVRlBMR2RDUVVGblFpeEZRVUZvUWl4RlFVRnZRaXhoUVVGd1FpeEZRVUZ0UXl4blFrRkJaMElzYTBKQlFXaENMRU5CUVRGRExFTkJSRWM3YVVKQlNFRTdTMEYyUWswc1EwRXZRMjFET3p0QlFUaEZjRVFzVVVGQlRTeGhRVUZoTEZsQlFVMDdRVUZEY2tJc2RVSkJRV1VzU1VGQlppeERRVVJ4UWp0QlFVVnlRaXhaUVVGSkxFOUJRVThzUjBGQlVDeEpRVUZqTEU5QlFVOHNSMEZCVUN4RlFVRlpPMEZCUXpGQ0xDdENRVVF3UWp0VFFVRTVRanRMUVVabExFTkJPVVZwUXpzN1FVRnhSbkJFTEZGQlFVMHNWMEZCVnl4VlFVRkRMRVZCUVVRc1JVRkJVVHRCUVVOeVFpeFpRVUZKTEhWQ1FVRktMRU5CUkhGQ096dEJRVWR5UWl4WlFVRkpMRU5CUVVNc1dVRkJSQ3hGUVVGbE8wRkJRMllzZVVKQlJHVTdVMEZCYmtJN096dEJRVWh4UWl4WlFWRnFRaXhSUVVGUkxFZEJRVklzU1VGQlpTeFJRVUZSTEVkQlFWSXNSVUZCWVR0QlFVTTFRaXd3UWtGQll5eEZRVUZrT3pzN1FVRkVORUlzVTBGQmFFTXNUVUZKVHl4SlFVRkpMRTlCUVU4c1EwRkJVQ3hGUVVGVk8wRkJRMnBDTERoQ1FVRmpMRU5CUVdRN096dEJRVVJwUWl4aFFVRmtMRTFCU1VFc1NVRkJTU3hQUVVGUExFTkJRVkFzUlVGQlZUdEJRVU5xUWl4clEwRkJZeXhEUVVGa0xFTkJSR2xDTzJsQ1FVRmtMRTFCUjBFN1FVRkRTQ3hyUTBGQll5eFhRVUZYTEZOQlFWTXNSVUZCVkN4RFFVRllMRVZCUVhsQ0xFZEJRWHBDTEVWQlFUaENMRWRCUVRsQ0xFTkJRV1FzUTBGRVJ6dHBRa0ZJUVRzN1FVRlBVQ3hsUVVGUExGZEJRVkFzUTBGMlFuRkNPMHRCUVZJc1EwRnlSbTFET3p0QlFTdEhjRVFzVjBGQlR5eFJRVUZRTEVOQkwwZHZSRHREUVVGNlF5SXNJbVpwYkdVaU9pSmpjbVZoZEdVdFltVjZhV1Z5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMEwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpOHFYRzRnSUNBZ1FtVjZhV1Z5SUdaMWJtTjBhVzl1SUdkbGJtVnlZWFJ2Y2x4dUlDQWdJQ0FnSUNCY2JpQWdJQ0JIWWNPcmRHRnVJRkpsYm1GMVpHVmhkU2R6SUVKbGVtbGxja1ZoYzJsdVoxeHVJQ0FnSUdoMGRIQnpPaTh2WjJsMGFIVmlMbU52YlM5bmNtVXZZbVY2YVdWeUxXVmhjMmx1Wnk5aWJHOWlMMjFoYzNSbGNpOXBibVJsZUM1cWN5QWdYRzRnSUNBZ2FIUjBjSE02THk5bmFYUm9kV0l1WTI5dEwyZHlaUzlpWlhwcFpYSXRaV0Z6YVc1bkwySnNiMkl2YldGemRHVnlMMHhKUTBWT1UwVmNiaUFnSUNCWmIzVW5jbVVnWVNCb1pYSnZYRzRnSUNBZ1hHNGdJQ0FnVlhObFhHNGdJQ0FnWEc0Z0lDQWdJQ0FnSUhaaGNpQmxZWE5sVDNWMElEMGdibVYzSUVKbGVtbGxjaWd1TVRjc0xqWTNMQzQ0TXl3dU5qY3BMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2VDQTlJR1ZoYzJWUGRYUW9NQzQxS1RzZ0x5OGdjbVYwZFhKdWN5QXdMall5Tnk0dUxseHVLaTljYmx4dUx5OGdRMjl1YzNSaGJuUnpYRzVqYjI1emRDQk9SVmRVVDA1ZlNWUkZVa0ZVU1U5T1V5QTlJRGc3WEc1amIyNXpkQ0JPUlZkVVQwNWZUVWxPWDFOTVQxQkZJRDBnTUM0d01ERTdYRzVqYjI1emRDQlRWVUpFU1ZaSlUwbFBUbDlRVWtWRFNWTkpUMDRnUFNBd0xqQXdNREF3TURFN1hHNWpiMjV6ZENCVFZVSkVTVlpKVTBsUFRsOU5RVmhmU1ZSRlVrRlVTVTlPVXlBOUlERXdPMXh1WTI5dWMzUWdTMTlUVUV4SlRrVmZWRUZDVEVWZlUwbGFSU0E5SURFeE8xeHVZMjl1YzNRZ1MxOVRRVTFRVEVWZlUxUkZVRjlUU1ZwRklEMGdNUzR3SUM4Z0tFdGZVMUJNU1U1RlgxUkJRa3hGWDFOSldrVWdMU0F4TGpBcE8xeHVZMjl1YzNRZ1JreFBRVlJmTXpKZlUxVlFVRTlTVkVWRUlEMGdLSFI1Y0dWdlppQkdiRzloZERNeVFYSnlZWGtnSVQwOUlDZDFibVJsWm1sdVpXUW5LVHRjYmx4dUx5OGdTR1ZzY0dWeUlHMWxkR2h2WkhOY2JtTnZibk4wSUdFZ1BTQW9ZVEVzSUdFeUtTQTlQaUF4TGpBZ0xTQXpMakFnS2lCaE1pQXJJRE11TUNBcUlHRXhPMXh1WTI5dWMzUWdZaUE5SUNoaE1Td2dZVElwSUQwK0lETXVNQ0FxSUdFeUlDMGdOaTR3SUNvZ1lURTdYRzVqYjI1emRDQmpJRDBnS0dFeEtTQTlQaUF6TGpBZ0tpQmhNVHRjYmx4dVkyOXVjM1FnWjJWMFUyeHZjR1VnUFNBb2RDd2dZVEVzSUdFeUtTQTlQaUF6TGpBZ0tpQmhLR0V4TENCaE1pa2dLaUIwSUNvZ2RDQXJJREl1TUNBcUlHSW9ZVEVzSUdFeUtTQXFJSFFnS3lCaktHRXhLVHRjYmx4dVkyOXVjM1FnWTJGc1kwSmxlbWxsY2lBOUlDaDBMQ0JoTVN3Z1lUSXBJRDArSUNnb1lTaGhNU3dnWVRJcElDb2dkQ0FySUdJb1lURXNJR0V5S1NrZ0tpQjBJQ3NnWXloaE1Ta3BJQ29nZER0Y2JseHVMeXBjYmlBZ0lDQkRjbVZoZEdVZ1lTQmpkV0pwWXlCaVpYcHBaWElnY21WemIyeDJaWEpjYmlvdlhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCbWRXNWpkR2x2YmlCamRXSnBZMEpsZW1sbGNpaHRXREVzSUcxWk1Td2diVmd5TENCdFdUSXBJSHRjYmlBZ0lDQmpiMjV6ZENCellXMXdiR1ZXWVd4MVpYTWdQU0JHVEU5QlZGOHpNbDlUVlZCUVQxSlVSVVFnUHlCdVpYY2dSbXh2WVhRek1rRnljbUY1S0V0ZlUxQk1TVTVGWDFSQlFreEZYMU5KV2tVcElEb2dibVYzSUVGeWNtRjVLRXRmVTFCTVNVNUZYMVJCUWt4RlgxTkpXa1VwTzF4dUlDQWdJR3hsZENCZmNISmxZMjl0Y0hWMFpXUWdQU0JtWVd4elpUdGNibHh1SUNBZ0lHTnZibk4wSUdKcGJtRnllVk4xWW1ScGRtbGtaU0E5SUNoaFdDd2dZVUVzSUdGQ0tTQTlQaUI3WEc0Z0lDQWdJQ0FnSUd4bGRDQnBJRDBnTUR0Y2JpQWdJQ0FnSUNBZ2JHVjBJR04xY25KbGJuUllPMXh1SUNBZ0lDQWdJQ0JzWlhRZ1kzVnljbVZ1ZEZRN1hHNWNiaUFnSUNBZ0lDQWdaRzhnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdZM1Z5Y21WdWRGUWdQU0JoUVNBcklDaGhRaUF0SUdGQktTQXZJREl1TUR0Y2JpQWdJQ0FnSUNBZ0lDQWdJR04xY25KbGJuUllJRDBnWTJGc1kwSmxlbWxsY2loamRYSnlaVzUwVkN3Z2JWZ3hMQ0J0V0RJcElDMGdZVmc3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvWTNWeWNtVnVkRmdnUGlBd0xqQXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JoUWlBOUlHTjFjbkpsYm5SVU8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JoUVNBOUlHTjFjbkpsYm5SVU8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOUlIZG9hV3hsSUNoTllYUm9MbUZpY3loamRYSnlaVzUwV0NrZ1BpQlRWVUpFU1ZaSlUwbFBUbDlRVWtWRFNWTkpUMDRnSmlZZ0t5dHBJRHdnVTFWQ1JFbFdTVk5KVDA1ZlRVRllYMGxVUlZKQlZFbFBUbE1wTzF4dVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCamRYSnlaVzUwVkR0Y2JpQWdJQ0I5TzF4dVhHNGdJQ0FnWTI5dWMzUWdibVYzZEc5dVVtRndhSE52YmtsMFpYSmhkR1VnUFNBb1lWZ3NJR0ZIZFdWemMxUXBJRDArSUh0Y2JpQWdJQ0FnSUNBZ2JHVjBJR2tnUFNBd08xeHVJQ0FnSUNBZ0lDQnNaWFFnWTNWeWNtVnVkRk5zYjNCbElEMGdNRHRjYmlBZ0lDQWdJQ0FnYkdWMElHTjFjbkpsYm5SWU8xeHVYRzRnSUNBZ0lDQWdJR1p2Y2lBb095QnBJRHdnVGtWWFZFOU9YMGxVUlZKQlZFbFBUbE03SUNzcmFTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kzVnljbVZ1ZEZOc2IzQmxJRDBnWjJWMFUyeHZjR1VvWVVkMVpYTnpWQ3dnYlZneExDQnRXRElwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9ZM1Z5Y21WdWRGTnNiM0JsSUQwOVBTQXdMakFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnWVVkMVpYTnpWRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdZM1Z5Y21WdWRGZ2dQU0JqWVd4alFtVjZhV1Z5S0dGSGRXVnpjMVFzSUcxWU1Td2diVmd5S1NBdElHRllPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1lVZDFaWE56VkNBdFBTQmpkWEp5Wlc1MFdDQXZJR04xY25KbGJuUlRiRzl3WlR0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHRkhkV1Z6YzFRN1hHNGdJQ0FnZlR0Y2JseHVJQ0FnSUdOdmJuTjBJR05oYkdOVFlXMXdiR1ZXWVd4MVpYTWdQU0FvS1NBOVBpQjdYRzRnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnUzE5VFVFeEpUa1ZmVkVGQ1RFVmZVMGxhUlRzZ0t5dHBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnpZVzF3YkdWV1lXeDFaWE5iYVYwZ1BTQmpZV3hqUW1WNmFXVnlLR2tnS2lCTFgxTkJUVkJNUlY5VFZFVlFYMU5KV2tVc0lHMVlNU3dnYlZneUtUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMDdYRzVjYmlBZ0lDQmpiMjV6ZENCblpYUlVSbTl5V0NBOUlDaGhXQ2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQnNaWFFnYVc1MFpYSjJZV3hUZEdGeWRDQTlJREF1TUR0Y2JpQWdJQ0FnSUNBZ2JHVjBJR04xY25KbGJuUlRZVzF3YkdVZ1BTQXhPMXh1SUNBZ0lDQWdJQ0JzWlhRZ2JHRnpkRk5oYlhCc1pTQTlJRXRmVTFCTVNVNUZYMVJCUWt4RlgxTkpXa1VnTFNBeE8xeHVJQ0FnSUNBZ0lDQnNaWFFnWkdsemRDQTlJREF1TUR0Y2JpQWdJQ0FnSUNBZ2JHVjBJR2QxWlhOelJtOXlWQ0E5SURBdU1EdGNiaUFnSUNBZ0lDQWdiR1YwSUdsdWFYUnBZV3hUYkc5d1pTQTlJREF1TUR0Y2JpQWdJQ0FnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0JtYjNJZ0tEc2dZM1Z5Y21WdWRGTmhiWEJzWlNBaFBTQnNZWE4wVTJGdGNHeGxJQ1ltSUhOaGJYQnNaVlpoYkhWbGMxdGpkWEp5Wlc1MFUyRnRjR3hsWFNBOFBTQmhXRHNnS3l0amRYSnlaVzUwVTJGdGNHeGxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBiblJsY25aaGJGTjBZWEowSUNzOUlFdGZVMEZOVUV4RlgxTlVSVkJmVTBsYVJUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnTFMxamRYSnlaVzUwVTJGdGNHeGxPMXh1SUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnWkdsemRDQTlJQ2hoV0NBdElITmhiWEJzWlZaaGJIVmxjMXRqZFhKeVpXNTBVMkZ0Y0d4bFhTa2dMeUFvYzJGdGNHeGxWbUZzZFdWelcyTjFjbkpsYm5SVFlXMXdiR1VyTVYwZ0xTQnpZVzF3YkdWV1lXeDFaWE5iWTNWeWNtVnVkRk5oYlhCc1pWMHBPMXh1SUNBZ0lDQWdJQ0JuZFdWemMwWnZjbFFnUFNCcGJuUmxjblpoYkZOMFlYSjBJQ3NnWkdsemRDQXFJRXRmVTBGTlVFeEZYMU5VUlZCZlUwbGFSVHRjYmlBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUdsdWFYUnBZV3hUYkc5d1pTQTlJR2RsZEZOc2IzQmxLR2QxWlhOelJtOXlWQ3dnYlZneExDQnRXRElwTzF4dUlDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ0x5OGdTV1lnYzJ4dmNHVWdhWE1nWjNKbFlYUmxjaUIwYUdGdUlHMXBibHh1SUNBZ0lDQWdJQ0JwWmlBb2FXNXBkR2xoYkZOc2IzQmxJRDQ5SUU1RlYxUlBUbDlOU1U1ZlUweFBVRVVwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQnVaWGQwYjI1U1lYQm9jMjl1U1hSbGNtRjBaU2hoV0N3Z1ozVmxjM05HYjNKVUtUdGNiaUFnSUNBZ0lDQWdMeThnVTJ4dmNHVWdhWE1nWlhGMVlXd2dkRzhnYldsdVhHNGdJQ0FnSUNBZ0lIMGdaV3h6WlNCcFppQW9hVzVwZEdsaGJGTnNiM0JsSUQwOVBTQXdMakFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQm5kV1Z6YzBadmNsUTdYRzRnSUNBZ0lDQWdJQzh2SUZOc2IzQmxJR2x6SUd4bGMzTWdkR2hoYmlCdGFXNWNiaUFnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJpYVc1aGNubFRkV0prYVhacFpHVW9ZVmdzSUdsdWRHVnlkbUZzVTNSaGNuUXNJR2x1ZEdWeWRtRnNVM1JoY25RZ0t5QkxYMU5CVFZCTVJWOVRWRVZRWDFOSldrVXBPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVHRjYmx4dUlDQWdJR052Ym5OMElIQnlaV052YlhCMWRHVWdQU0FvS1NBOVBpQjdYRzRnSUNBZ0lDQWdJRjl3Y21WamIyMXdkWFJsWkNBOUlIUnlkV1U3WEc0Z0lDQWdJQ0FnSUdsbUlDaHRXREVnSVQwZ2JWa3hJSHg4SUcxWU1pQWhQU0J0V1RJcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOaGJHTlRZVzF3YkdWV1lXeDFaWE1vS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgwN1hHNWNiaUFnSUNCamIyNXpkQ0J5WlhOdmJIWmxjaUE5SUNoaFdDa2dQVDRnZTF4dUlDQWdJQ0FnSUNCc1pYUWdjbVYwZFhKdVZtRnNkV1U3WEc1Y2JpQWdJQ0FnSUNBZ2FXWWdLQ0ZmY0hKbFkyOXRjSFYwWldRcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhCeVpXTnZiWEIxZEdVb0tUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnTHk4Z1NXWWdiR2x1WldGeUlHZHlZV1JwWlc1MExDQnlaWFIxY200Z1dDQmhjeUJVWEc0Z0lDQWdJQ0FnSUdsbUlDaHRXREVnUFQwOUlHMVpNU0FtSmlCdFdESWdQVDA5SUcxWk1pa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1Vm1Gc2RXVWdQU0JoV0R0Y2JpQWdJQ0FnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0F2THlCSlppQmhkQ0J6ZEdGeWRDd2djbVYwZFhKdUlEQmNiaUFnSUNBZ0lDQWdmU0JsYkhObElHbG1JQ2hoV0NBOVBUMGdNQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdVZtRnNkV1VnUFNBd08xeHVJQ0FnSUNBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUM4dklFbG1JR0YwSUdWdVpDd2djbVYwZFhKdUlERmNiaUFnSUNBZ0lDQWdmU0JsYkhObElHbG1JQ2hoV0NBOVBUMGdNU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdVZtRnNkV1VnUFNBeE8xeHVYRzRnSUNBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTVXWVd4MVpTQTlJR05oYkdOQ1pYcHBaWElvWjJWMFZFWnZjbGdvWVZncExDQnRXVEVzSUcxWk1pazdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJ5WlhSMWNtNVdZV3gxWlR0Y2JpQWdJQ0I5TzF4dVhHNGdJQ0FnY21WMGRYSnVJSEpsYzI5c2RtVnlPMXh1ZlZ4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvZWFzaW5nL2NyZWF0ZS1iZXppZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA1MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLypcbiAgICBEZXRlY3QgYW5kIGxvYWQgYW4gYXBwcm9wcmlhdGUgY2xvY2sgc2V0dGluZyBmb3IgdGhlIGVudmlyb25tZW50XG4qL1xuXG52YXIgaGFzUkFGID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA/IHRydWUgOiBmYWxzZTtcblxudmFyIHRpY2sgPSB1bmRlZmluZWQ7XG5cbmlmIChoYXNSQUYpIHtcbiAgICB0aWNrID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNhbGxiYWNrKTtcbiAgICB9O1xufSBlbHNlIHtcbiAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgICAvKlxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHBvbHlmaWxsXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEZvciBJRTgvOSBGbGluc3RvbmVzIGFuZCBub24tYnJvd3NlciBlbnZpcm9ubWVudHNcbiAgICAgICAgICAgICBUYWtlbiBmcm9tIFBhdWwgSXJpc2guIFdlJ3ZlIHN0cmlwcGVkIG91dCBjYW5jZWxBbmltYXRpb25GcmFtZSBjaGVja3MgYmVjYXVzZSB3ZSBkb24ndCBmb3ggd2l0aCB0aGF0XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGh0dHA6Ly9wYXVsaXJpc2guY29tLzIwMTEvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1hbmltYXRpbmcvXG4gICAgICAgICAgICBodHRwOi8vbXkub3BlcmEuY29tL2Vtb2xsZXIvYmxvZy8yMDExLzEyLzIwL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtZXItYW5pbWF0aW5nXG4gICAgICAgICAgICAgXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGwgYnkgRXJpayBNw7ZsbGVyLiBmaXhlcyBmcm9tIFBhdWwgSXJpc2ggYW5kIFRpbm8gWmlqZGVsXG4gICAgICAgICAgICAgXG4gICAgICAgICAgICBNSVQgbGljZW5zZVxuICAgICAgICAqL1xuICAgICAgICB2YXIgbGFzdFRpbWUgPSAwO1xuXG4gICAgICAgIHRpY2sgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHZhciBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgdmFyIHRpbWVUb0NhbGwgPSBNYXRoLm1heCgwLCAxNiAtIChjdXJyZW50VGltZSAtIGxhc3RUaW1lKSk7XG5cbiAgICAgICAgICAgIGxhc3RUaW1lID0gY3VycmVudFRpbWUgKyB0aW1lVG9DYWxsO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2sobGFzdFRpbWUpO1xuICAgICAgICAgICAgfSwgdGltZVRvQ2FsbCk7XG4gICAgICAgIH07XG4gICAgfSkoKTtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gdGljaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MFlYTnJMM1JwWTJzdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3p0QlFVbEJMRWxCUVUwc1UwRkJVeXhQUVVGUkxFMUJRVkFzUzBGQmEwSXNWMEZCYkVJc1NVRkJhVU1zVDBGQlR5eHhRa0ZCVUN4SFFVRm5ReXhKUVVGc1JTeEhRVUY1UlN4TFFVRjZSVHM3UVVGRlppeEpRVUZKTEdkQ1FVRktPenRCUVVWQkxFbEJRVWtzVFVGQlNpeEZRVUZaTzBGQlExSXNWMEZCVHl4VlFVRkRMRkZCUVVRN1pVRkJZeXhQUVVGUExIRkNRVUZRTEVOQlFUWkNMRkZCUVRkQ08wdEJRV1FzUTBGRVF6dERRVUZhTEUxQlIwODdPenM3T3pzN096czdPenM3T3p0QlFXVklMRmxCUVVrc1YwRkJWeXhEUVVGWU96dEJRVVZLTEdWQlFVOHNWVUZCUXl4UlFVRkVMRVZCUVdNN1FVRkRha0lzWjBKQlFVMHNZMEZCWXl4SlFVRkpMRWxCUVVvc1IwRkJWeXhQUVVGWUxFVkJRV1FzUTBGRVZ6dEJRVVZxUWl4blFrRkJUU3hoUVVGaExFdEJRVXNzUjBGQlRDeERRVUZUTEVOQlFWUXNSVUZCV1N4TlFVRk5MR05CUVdNc1VVRkJaQ3hEUVVGT0xFTkJRWHBDTEVOQlJsYzdPMEZCU1dwQ0xIVkNRVUZYTEdOQlFXTXNWVUZCWkN4RFFVcE5PenRCUVUxcVFpeDFRa0ZCVnp0MVFrRkJUU3hUUVVGVExGRkJRVlE3WVVGQlRpeEZRVUV3UWl4VlFVRnlReXhGUVU1cFFqdFRRVUZrTzFOQmFrSktPME5CU0ZBN08ydENRVGhDWlNJc0ltWnBiR1VpT2lKMGFXTnJMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwTDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk4cVhHNGdJQ0FnUkdWMFpXTjBJR0Z1WkNCc2IyRmtJR0Z1SUdGd2NISnZjSEpwWVhSbElHTnNiMk5ySUhObGRIUnBibWNnWm05eUlIUm9aU0JsYm5acGNtOXViV1Z1ZEZ4dUtpOWNibHh1WTI5dWMzUWdhR0Z6VWtGR0lEMGdLSFI1Y0dWdlppQjNhVzVrYjNjZ0lUMDlJQ2QxYm1SbFptbHVaV1FuSUNZbUlIZHBibVJ2ZHk1eVpYRjFaWE4wUVc1cGJXRjBhVzl1Um5KaGJXVXBJRDhnZEhKMVpTQTZJR1poYkhObE8xeHVYRzVzWlhRZ2RHbGphenRjYmx4dWFXWWdLR2hoYzFKQlJpa2dlMXh1SUNBZ0lIUnBZMnNnUFNBb1kyRnNiR0poWTJzcElEMCtJSGRwYm1SdmR5NXlaWEYxWlhOMFFXNXBiV0YwYVc5dVJuSmhiV1VvWTJGc2JHSmhZMnNwTzF4dVhHNTlJR1ZzYzJVZ2UxeHVJQ0FnSUM4cVhHNGdJQ0FnSUNBZ0lISmxjWFZsYzNSQmJtbHRZWFJwYjI1R2NtRnRaU0J3YjJ4NVptbHNiRnh1SUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnUm05eUlFbEZPQzg1SUVac2FXNXpkRzl1WlhNZ1lXNWtJRzV2YmkxaWNtOTNjMlZ5SUdWdWRtbHliMjV0Wlc1MGMxeHVYRzRnSUNBZ0lDQWdJRlJoYTJWdUlHWnliMjBnVUdGMWJDQkpjbWx6YUM0Z1YyVW5kbVVnYzNSeWFYQndaV1FnYjNWMElHTmhibU5sYkVGdWFXMWhkR2x2YmtaeVlXMWxJR05vWldOcmN5QmlaV05oZFhObElIZGxJR1J2YmlkMElHWnZlQ0IzYVhSb0lIUm9ZWFJjYmlBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUdoMGRIQTZMeTl3WVhWc2FYSnBjMmd1WTI5dEx6SXdNVEV2Y21WeGRXVnpkR0Z1YVcxaGRHbHZibVp5WVcxbExXWnZjaTF6YldGeWRDMWhibWx0WVhScGJtY3ZYRzRnSUNBZ0lDQWdJR2gwZEhBNkx5OXRlUzV2Y0dWeVlTNWpiMjB2WlcxdmJHeGxjaTlpYkc5bkx6SXdNVEV2TVRJdk1qQXZjbVZ4ZFdWemRHRnVhVzFoZEdsdmJtWnlZVzFsTFdadmNpMXpiV0Z5ZEMxbGNpMWhibWx0WVhScGJtZGNiaUFnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0J5WlhGMVpYTjBRVzVwYldGMGFXOXVSbkpoYldVZ2NHOXNlV1pwYkd3Z1lua2dSWEpwYXlCTnc3WnNiR1Z5TGlCbWFYaGxjeUJtY205dElGQmhkV3dnU1hKcGMyZ2dZVzVrSUZScGJtOGdXbWxxWkdWc1hHNGdJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdUVWxVSUd4cFkyVnVjMlZjYmlBZ0lDQXFMMXh1SUNBZ0lHeGxkQ0JzWVhOMFZHbHRaU0E5SURBN1hHNWNiaUFnSUNCMGFXTnJJRDBnS0dOaGJHeGlZV05yS1NBOVBpQjdYRzRnSUNBZ0lDQWdJR052Ym5OMElHTjFjbkpsYm5SVWFXMWxJRDBnYm1WM0lFUmhkR1VvS1M1blpYUlVhVzFsS0NrN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUhScGJXVlViME5oYkd3Z1BTQk5ZWFJvTG0xaGVDZ3dMQ0F4TmlBdElDaGpkWEp5Wlc1MFZHbHRaU0F0SUd4aGMzUlVhVzFsS1NrN1hHNWNiaUFnSUNBZ0lDQWdiR0Z6ZEZScGJXVWdQU0JqZFhKeVpXNTBWR2x0WlNBcklIUnBiV1ZVYjBOaGJHdzdYRzVjYmlBZ0lDQWdJQ0FnYzJWMFZHbHRaVzkxZENnb0tTQTlQaUJqWVd4c1ltRmpheWhzWVhOMFZHbHRaU2tzSUhScGJXVlViME5oYkd3cE8xeHVJQ0FnSUgwN1hHNTlYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJSFJwWTJzN0lsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3Rhc2svdGljay5qc1xuICoqIG1vZHVsZSBpZCA9IDUyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8vIFtpbnRdOiBJbmNyZW1lbnRlZCBmb3IgZWFjaCBuZXcgcnVubmluZyB0YXNrXG52YXIgY3VycmVudFRhc2tJZCA9IDA7XG5cbi8vIFtpbnRdOiBOdW1iZXIgb2YgYWxsIHJ1bm5pbmcgdGFza2VzXG52YXIgdG90YWxSdW5uaW5nQ291bnQgPSAwO1xuXG4vLyBbaW50XTogTnVtYmVyIG9mIHJ1bm5pbmcgdGFza2VzIGV4Y2x1ZGluZyBiYWNrZ3JvdW5kIHRhc2tlc1xudmFyIG5vbkJhY2tncm91bmRSdW5uaW5nQ291bnQgPSAwO1xuXG4vLyBbYXJyYXldOiBBcnJheSBvZiBydW5uaW5nIHRhc2sgSURzXG52YXIgcnVubmluZ0lkcyA9IFtdO1xuXG4vLyBbb2JqZWN0XTogTWFwIG9mIHJ1bm5pbmcgdGFza2VzXG52YXIgYWN0aXZlVGFza3MgPSB7fTtcblxuLy8gW2FycmF5XTogQXJyYXkgb2YgdGFzayBJRHMgcXVldWVkIGZvciBhY3RpdmF0aW9uXG52YXIgYWN0aXZhdGVRdWV1ZSA9IFtdO1xuXG4vLyBbYXJyYXldOiBBcnJheSBvZiB0YXNrIElEcyBxdWV1ZWQgZm9yIGRlYWN0aXZhdGlvblxudmFyIGRlYWN0aXZhdGVRdWV1ZSA9IFtdO1xuXG4vKlxuICAgIFVwZGF0ZSBhY3RpdmF0ZS9kZWFjdGl2YXRlIHF1ZXVlc1xuXG4gICAgQHBhcmFtIFtudW1iZXJdXG4gICAgQHBhcmFtIFthcnJheV1cbiAgICBAcGFyYW0gW2FycmF5XVxuKi9cbnZhciB1cGRhdGVRdWV1ZXMgPSBmdW5jdGlvbiAoaWQsIGluTGlzdCwgb3V0TGlzdCkge1xuICAgIHZhciBpblBvc2l0aW9uID0gaW5MaXN0LmluZGV4T2YoaWQpO1xuICAgIHZhciBvdXRQb3NpdGlvbiA9IG91dExpc3QuaW5kZXhPZihpZCk7XG5cbiAgICBpZiAoaW5Qb3NpdGlvbiA9PT0gLTEpIHtcbiAgICAgICAgaW5MaXN0LnB1c2goaWQpO1xuICAgIH1cblxuICAgIGlmIChvdXRQb3NpdGlvbiA+IC0xKSB7XG4gICAgICAgIG91dExpc3Quc3BsaWNlKG91dFBvc2l0aW9uLCAxKTtcbiAgICB9XG59O1xuXG4vKlxuICAgIFVwZGF0ZSBydW5uaW5nXG5cbiAgICBbYm9vbGVhbl06IGB0cnVlYCB0byBhZGRcbiAgICBbYm9vbGVhbl06IGB0cnVlYCBpZiBsYXp5XG4qL1xudmFyIHVwZGF0ZVJ1bm5pbmdDb3VudCA9IGZ1bmN0aW9uIChhZGQsIGlzTGF6eSkge1xuICAgIHZhciBtb2RpZnkgPSBhZGQgPyAxIDogLTE7XG5cbiAgICB0b3RhbFJ1bm5pbmdDb3VudCArPSBtb2RpZnk7XG5cbiAgICBpZiAoIWlzTGF6eSkge1xuICAgICAgICBub25CYWNrZ3JvdW5kUnVubmluZ0NvdW50ICs9IG1vZGlmeTtcbiAgICB9XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgYWN0aXZlVGFza3M6IGFjdGl2ZVRhc2tzLFxuXG4gICAgLy8gQWN0aXZhdGUgYSB0YXNrXG4gICAgYWN0aXZhdGU6IGZ1bmN0aW9uIChpZCwgdGFzaykge1xuICAgICAgICBhY3RpdmVUYXNrc1tpZF0gPSB0YXNrO1xuICAgICAgICB0YXNrLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdXBkYXRlUXVldWVzKGlkLCBhY3RpdmF0ZVF1ZXVlLCBkZWFjdGl2YXRlUXVldWUpO1xuXG4gICAgICAgIGlmICh0YXNrLm9uQWN0aXZhdGUpIHtcbiAgICAgICAgICAgIHRhc2sub25BY3RpdmF0ZSh0YXNrKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0YXNrLm9uQWN0aXZhdGVPbmNlKSB7XG4gICAgICAgICAgICB0YXNrLm9uQWN0aXZhdGVPbmNlKHRhc2spO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIERlYWN0aXZhdGUgYSB0YXNrXG4gICAgZGVhY3RpdmF0ZTogZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHZhciB0YXNrID0gYWN0aXZlVGFza3NbaWRdO1xuXG4gICAgICAgIGlmICh0YXNrKSB7XG4gICAgICAgICAgICB1cGRhdGVRdWV1ZXMoaWQsIGRlYWN0aXZhdGVRdWV1ZSwgYWN0aXZhdGVRdWV1ZSk7XG4gICAgICAgICAgICB0YXNrLmlzQWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmICh0YXNrLm9uRGVhY3RpdmF0ZSkge1xuICAgICAgICAgICAgICAgIHRhc2sub25EZWFjdGl2YXRlKHRhc2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIE51bWJlciBiYWNrZ3JvdW5kIHRhc2tlc1xuICAgIGdldE5vbkJhY2tncm91bmRSdW5uaW5nQ291bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5vbkJhY2tncm91bmRSdW5uaW5nQ291bnQ7XG4gICAgfSxcblxuICAgIC8vIEluY3JlbWVudCBjdXJyZW50IHRhc2sgSUQgYW5kIHJldHVyblxuICAgIGdldFRhc2tJZDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gY3VycmVudFRhc2tJZCsrO1xuICAgIH0sXG5cbiAgICAvLyBSZXNvbHZlIGFjdGl2YXRlL2RlYWN0aXZhdGUgdGFza2VzIGFuZCByZXR1cm4gYWN0aXZlIGlkc1xuICAgIGdldEFjdGl2ZUlkczogZnVuY3Rpb24gKCkge1xuICAgICAgICAvKlxuICAgICAgICAgICAgdGFzayBkZWFjdGl2YXRlIHF1ZXVlXG4gICAgICAgICovXG4gICAgICAgIHZhciBkZWFjdGl2YXRlUXVldWVMZW5ndGggPSBkZWFjdGl2YXRlUXVldWUubGVuZ3RoO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGVhY3RpdmF0ZVF1ZXVlTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBpZCA9IGRlYWN0aXZhdGVRdWV1ZVtpXTtcbiAgICAgICAgICAgIHZhciBhY3RpdmVJZEluZGV4ID0gcnVubmluZ0lkcy5pbmRleE9mKGlkKTtcbiAgICAgICAgICAgIHZhciB0YXNrID0gYWN0aXZlVGFza3NbaWRdO1xuXG4gICAgICAgICAgICAvLyBJZiB0aGlzIGlzIGEgcnVubmluZyB0YXNrLCBkZWFjdGl2YXRlXG4gICAgICAgICAgICBpZiAoYWN0aXZlSWRJbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgcnVubmluZ0lkcy5zcGxpY2UoYWN0aXZlSWRJbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgdXBkYXRlUnVubmluZ0NvdW50KGZhbHNlLCB0YXNrLmlzTGF6eSk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGFjdGl2ZVRhc2tzW2lkXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qXG4gICAgICAgICAgICBFbXB0eSBkZWFjdGl2YXRlIHF1ZXVlLiBXZSB1c2UgYEFycmF5LnNwbGljZWAgYmVjYXVzZSBpdCBkb2Vzbid0XG4gICAgICAgICAgICB3b3JrcyBvbiB0aGUgb3JpZ2luYWwgYXJyYXkgc28gd2UgZG9uJ3QgaGF2ZSB0byBnYXJiYWdlIGNvbGxlY3QgYW55dGhpbmdcbiAgICAgICAgKi9cbiAgICAgICAgZGVhY3RpdmF0ZVF1ZXVlLnNwbGljZSgwLCBkZWFjdGl2YXRlUXVldWVMZW5ndGgpO1xuXG4gICAgICAgIC8qXG4gICAgICAgICAgICB0YXNrIGFjdGl2YXRlIHF1ZXVlXG4gICAgICAgICovXG4gICAgICAgIHZhciBhY3RpdmF0ZVF1ZXVlTGVuZ3RoID0gYWN0aXZhdGVRdWV1ZS5sZW5ndGg7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhY3RpdmF0ZVF1ZXVlTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBpZCA9IGFjdGl2YXRlUXVldWVbaV07XG4gICAgICAgICAgICB2YXIgYWN0aXZlSWRJbmRleCA9IHJ1bm5pbmdJZHMuaW5kZXhPZihpZCk7XG4gICAgICAgICAgICB2YXIgdGFzayA9IGFjdGl2ZVRhc2tzW2lkXTtcblxuICAgICAgICAgICAgLy8gSWYgdGFzayBpc24ndCBhbHJlYWR5IHJ1bm5pbmcsIGFjdGl2YXRlXG4gICAgICAgICAgICBpZiAoYWN0aXZlSWRJbmRleCA9PT0gLTEgJiYgdGFzaykge1xuICAgICAgICAgICAgICAgIGlmICh0YXNrLmlzUHJpb3JpdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ0lkcy51bnNoaWZ0KGlkKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBydW5uaW5nSWRzLnB1c2goaWQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0YXNrLm9uQWN0aXZhdGVMb29wKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2sub25BY3RpdmF0ZUxvb3AoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB1cGRhdGVSdW5uaW5nQ291bnQodHJ1ZSwgdGFzay5pc0xhenkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYWN0aXZhdGVRdWV1ZS5zcGxpY2UoMCwgYWN0aXZhdGVRdWV1ZUxlbmd0aCk7XG5cbiAgICAgICAgcmV0dXJuIHJ1bm5pbmdJZHM7XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MFlYTnJMMjFoYm1GblpYSXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0QlFVTkJMRWxCUVVrc1owSkJRV2RDTEVOQlFXaENPenM3UVVGSFNpeEpRVUZKTEc5Q1FVRnZRaXhEUVVGd1FqczdPMEZCUjBvc1NVRkJTU3cwUWtGQk5FSXNRMEZCTlVJN096dEJRVWRLTEVsQlFVMHNZVUZCWVN4RlFVRmlPenM3UVVGSFRpeEpRVUZOTEdOQlFXTXNSVUZCWkRzN08wRkJSMDRzU1VGQlRTeG5Ra0ZCWjBJc1JVRkJhRUk3T3p0QlFVZE9MRWxCUVUwc2EwSkJRV3RDTEVWQlFXeENPenM3T3pzN096czdRVUZUVGl4SlFVRk5MR1ZCUVdVc1ZVRkJReXhGUVVGRUxFVkJRVXNzVFVGQlRDeEZRVUZoTEU5QlFXSXNSVUZCZVVJN1FVRkRNVU1zVVVGQlRTeGhRVUZoTEU5QlFVOHNUMEZCVUN4RFFVRmxMRVZCUVdZc1EwRkJZaXhEUVVSdlF6dEJRVVV4UXl4UlFVRk5MR05CUVdNc1VVRkJVU3hQUVVGU0xFTkJRV2RDTEVWQlFXaENMRU5CUVdRc1EwRkdiME03TzBGQlNURkRMRkZCUVVrc1pVRkJaU3hEUVVGRExFTkJRVVFzUlVGQlNUdEJRVU51UWl4bFFVRlBMRWxCUVZBc1EwRkJXU3hGUVVGYUxFVkJSRzFDTzB0QlFYWkNPenRCUVVsQkxGRkJRVWtzWTBGQll5eERRVUZETEVOQlFVUXNSVUZCU1R0QlFVTnNRaXhuUWtGQlVTeE5RVUZTTEVOQlFXVXNWMEZCWml4RlFVRTBRaXhEUVVFMVFpeEZRVVJyUWp0TFFVRjBRanREUVZKcFFqczdPenM3T3pzN1FVRnRRbkpDTEVsQlFVMHNjVUpCUVhGQ0xGVkJRVU1zUjBGQlJDeEZRVUZOTEUxQlFVNHNSVUZCYVVJN1FVRkRlRU1zVVVGQlRTeFRRVUZUTEUxQlFVMHNRMEZCVGl4SFFVRlZMRU5CUVVNc1EwRkJSQ3hEUVVSbE96dEJRVWQ0UXl4NVFrRkJjVUlzVFVGQmNrSXNRMEZJZDBNN08wRkJTM2hETEZGQlFVa3NRMEZCUXl4TlFVRkVMRVZCUVZNN1FVRkRWQ3h4UTBGQk5rSXNUVUZCTjBJc1EwRkVVenRMUVVGaU8wTkJUSFZDT3p0clFrRlZXanRCUVVOWUxEUkNRVVJYT3pzN1FVRkpXQ3hqUVVGVkxGVkJRVU1zUlVGQlJDeEZRVUZMTEVsQlFVd3NSVUZCWXp0QlFVTndRaXh2UWtGQldTeEZRVUZhTEVsQlFXdENMRWxCUVd4Q0xFTkJSRzlDTzBGQlJYQkNMR0ZCUVVzc1VVRkJUQ3hIUVVGblFpeEpRVUZvUWl4RFFVWnZRanRCUVVkd1FpeHhRa0ZCWVN4RlFVRmlMRVZCUVdsQ0xHRkJRV3BDTEVWQlFXZERMR1ZCUVdoRExFVkJTRzlDT3p0QlFVdHdRaXhaUVVGSkxFdEJRVXNzVlVGQlRDeEZRVUZwUWp0QlFVTnFRaXhwUWtGQlN5eFZRVUZNTEVOQlFXZENMRWxCUVdoQ0xFVkJSR2xDTzFOQlFYSkNPenRCUVVsQkxGbEJRVWtzUzBGQlN5eGpRVUZNTEVWQlFYRkNPMEZCUTNKQ0xHbENRVUZMTEdOQlFVd3NRMEZCYjBJc1NVRkJjRUlzUlVGRWNVSTdVMEZCZWtJN1MwRlVUVHM3TzBGQlpWWXNaMEpCUVZrc1ZVRkJReXhGUVVGRUxFVkJRVkU3UVVGRGFFSXNXVUZCVFN4UFFVRlBMRmxCUVZrc1JVRkJXaXhEUVVGUUxFTkJSRlU3TzBGQlIyaENMRmxCUVVrc1NVRkJTaXhGUVVGVk8wRkJRMDRzZVVKQlFXRXNSVUZCWWl4RlFVRnBRaXhsUVVGcVFpeEZRVUZyUXl4aFFVRnNReXhGUVVSTk8wRkJSVTRzYVVKQlFVc3NVVUZCVEN4SFFVRm5RaXhMUVVGb1FpeERRVVpOT3p0QlFVbE9MR2RDUVVGSkxFdEJRVXNzV1VGQlRDeEZRVUZ0UWp0QlFVTnVRaXh4UWtGQlN5eFpRVUZNTEVOQlFXdENMRWxCUVd4Q0xFVkJSRzFDTzJGQlFYWkNPMU5CU2tvN1MwRklVVHM3TzBGQlkxb3NhME5CUVRoQ08yVkJRVTA3UzBGQlRqczdPMEZCUnpsQ0xHVkJRVmM3WlVGQlRUdExRVUZPT3pzN1FVRkhXQ3hyUWtGQll5eFpRVUZOT3pzN08wRkJTV2hDTEZsQlFVMHNkMEpCUVhkQ0xHZENRVUZuUWl4TlFVRm9RaXhEUVVwa096dEJRVTFvUWl4aFFVRkxMRWxCUVVrc1NVRkJTU3hEUVVGS0xFVkJRVThzU1VGQlNTeHhRa0ZCU2l4RlFVRXlRaXhIUVVFelF5eEZRVUZuUkR0QlFVTTFReXhuUWtGQlRTeExRVUZMTEdkQ1FVRm5RaXhEUVVGb1FpeERRVUZNTEVOQlJITkRPMEZCUlRWRExHZENRVUZOTEdkQ1FVRm5RaXhYUVVGWExFOUJRVmdzUTBGQmJVSXNSVUZCYmtJc1EwRkJhRUlzUTBGR2MwTTdRVUZITlVNc1owSkJRVTBzVDBGQlR5eFpRVUZaTEVWQlFWb3NRMEZCVURzN08wRkJTSE5ETEdkQ1FVMTRReXhuUWtGQlowSXNRMEZCUXl4RFFVRkVMRVZCUVVrN1FVRkRjRUlzTWtKQlFWY3NUVUZCV0N4RFFVRnJRaXhoUVVGc1FpeEZRVUZwUXl4RFFVRnFReXhGUVVSdlFqdEJRVVZ3UWl4dFEwRkJiVUlzUzBGQmJrSXNSVUZCTUVJc1MwRkJTeXhOUVVGTUxFTkJRVEZDTEVOQlJtOUNPMEZCUjNCQ0xIVkNRVUZQTEZsQlFWa3NSVUZCV2l4RFFVRlFMRU5CU0c5Q08yRkJRWGhDTzFOQlRrbzdPenM3T3p0QlFVNW5RaXgxUWtGMVFtaENMRU5CUVdkQ0xFMUJRV2hDTEVOQlFYVkNMRU5CUVhaQ0xFVkJRVEJDTEhGQ1FVRXhRanM3T3pzN1FVRjJRbWRDTEZsQk5FSldMSE5DUVVGelFpeGpRVUZqTEUxQlFXUXNRMEUxUWxvN08wRkJPRUpvUWl4aFFVRkxMRWxCUVVrc1NVRkJTU3hEUVVGS0xFVkJRVThzU1VGQlNTeHRRa0ZCU2l4RlFVRjVRaXhIUVVGNlF5eEZRVUU0UXp0QlFVTXhReXhuUWtGQlRTeExRVUZMTEdOQlFXTXNRMEZCWkN4RFFVRk1MRU5CUkc5RE8wRkJSVEZETEdkQ1FVRk5MR2RDUVVGblFpeFhRVUZYTEU5QlFWZ3NRMEZCYlVJc1JVRkJia0lzUTBGQmFFSXNRMEZHYjBNN1FVRkhNVU1zWjBKQlFVMHNUMEZCVHl4WlFVRlpMRVZCUVZvc1EwRkJVRHM3TzBGQlNHOURMR2RDUVUxMFF5eHJRa0ZCYTBJc1EwRkJReXhEUVVGRUxFbEJRVTBzU1VGQmVFSXNSVUZCT0VJN1FVRkRPVUlzYjBKQlFVa3NTMEZCU3l4VlFVRk1MRVZCUVdsQ08wRkJRMnBDTEN0Q1FVRlhMRTlCUVZnc1EwRkJiVUlzUlVGQmJrSXNSVUZFYVVJN2FVSkJRWEpDTEUxQlJVODdRVUZEU0N3clFrRkJWeXhKUVVGWUxFTkJRV2RDTEVWQlFXaENMRVZCUkVjN2FVSkJSbEE3TzBGQlRVRXNiMEpCUVVrc1MwRkJTeXhqUVVGTUxFVkJRWEZDTzBGQlEzSkNMSGxDUVVGTExHTkJRVXdzUjBGRWNVSTdhVUpCUVhwQ096dEJRVWxCTEcxRFFVRnRRaXhKUVVGdVFpeEZRVUY1UWl4TFFVRkxMRTFCUVV3c1EwRkJla0lzUTBGWU9FSTdZVUZCYkVNN1UwRk9TanM3UVVGeFFrRXNjMEpCUVdNc1RVRkJaQ3hEUVVGeFFpeERRVUZ5UWl4RlFVRjNRaXh0UWtGQmVFSXNSVUZ1UkdkQ096dEJRWEZFYUVJc1pVRkJUeXhWUVVGUUxFTkJja1JuUWp0TFFVRk9JaXdpWm1sc1pTSTZJbTFoYm1GblpYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFF2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTHk4Z1cybHVkRjA2SUVsdVkzSmxiV1Z1ZEdWa0lHWnZjaUJsWVdOb0lHNWxkeUJ5ZFc1dWFXNW5JSFJoYzJ0Y2JteGxkQ0JqZFhKeVpXNTBWR0Z6YTBsa0lEMGdNRHRjYmx4dUx5OGdXMmx1ZEYwNklFNTFiV0psY2lCdlppQmhiR3dnY25WdWJtbHVaeUIwWVhOclpYTmNibXhsZENCMGIzUmhiRkoxYm01cGJtZERiM1Z1ZENBOUlEQTdYRzVjYmk4dklGdHBiblJkT2lCT2RXMWlaWElnYjJZZ2NuVnVibWx1WnlCMFlYTnJaWE1nWlhoamJIVmthVzVuSUdKaFkydG5jbTkxYm1RZ2RHRnphMlZ6WEc1c1pYUWdibTl1UW1GamEyZHliM1Z1WkZKMWJtNXBibWREYjNWdWRDQTlJREE3WEc1Y2JpOHZJRnRoY25KaGVWMDZJRUZ5Y21GNUlHOW1JSEoxYm01cGJtY2dkR0Z6YXlCSlJITmNibU52Ym5OMElISjFibTVwYm1kSlpITWdQU0JiWFR0Y2JseHVMeThnVzI5aWFtVmpkRjA2SUUxaGNDQnZaaUJ5ZFc1dWFXNW5JSFJoYzJ0bGMxeHVZMjl1YzNRZ1lXTjBhWFpsVkdGemEzTWdQU0I3ZlR0Y2JseHVMeThnVzJGeWNtRjVYVG9nUVhKeVlYa2diMllnZEdGemF5QkpSSE1nY1hWbGRXVmtJR1p2Y2lCaFkzUnBkbUYwYVc5dVhHNWpiMjV6ZENCaFkzUnBkbUYwWlZGMVpYVmxJRDBnVzEwN1hHNWNiaTh2SUZ0aGNuSmhlVjA2SUVGeWNtRjVJRzltSUhSaGMyc2dTVVJ6SUhGMVpYVmxaQ0JtYjNJZ1pHVmhZM1JwZG1GMGFXOXVYRzVqYjI1emRDQmtaV0ZqZEdsMllYUmxVWFZsZFdVZ1BTQmJYVHRjYmx4dUx5cGNiaUFnSUNCVmNHUmhkR1VnWVdOMGFYWmhkR1V2WkdWaFkzUnBkbUYwWlNCeGRXVjFaWE5jYmx4dUlDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhWeHVJQ0FnSUVCd1lYSmhiU0JiWVhKeVlYbGRYRzRnSUNBZ1FIQmhjbUZ0SUZ0aGNuSmhlVjFjYmlvdlhHNWpiMjV6ZENCMWNHUmhkR1ZSZFdWMVpYTWdQU0FvYVdRc0lHbHVUR2x6ZEN3Z2IzVjBUR2x6ZENrZ1BUNGdlMXh1SUNBZ0lHTnZibk4wSUdsdVVHOXphWFJwYjI0Z1BTQnBia3hwYzNRdWFXNWtaWGhQWmlocFpDazdYRzRnSUNBZ1kyOXVjM1FnYjNWMFVHOXphWFJwYjI0Z1BTQnZkWFJNYVhOMExtbHVaR1Y0VDJZb2FXUXBPMXh1WEc0Z0lDQWdhV1lnS0dsdVVHOXphWFJwYjI0Z1BUMDlJQzB4S1NCN1hHNGdJQ0FnSUNBZ0lHbHVUR2x6ZEM1d2RYTm9LR2xrS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JwWmlBb2IzVjBVRzl6YVhScGIyNGdQaUF0TVNrZ2UxeHVJQ0FnSUNBZ0lDQnZkWFJNYVhOMExuTndiR2xqWlNodmRYUlFiM05wZEdsdmJpd2dNU2s3WEc0Z0lDQWdmVnh1ZlR0Y2JseHVMeXBjYmlBZ0lDQlZjR1JoZEdVZ2NuVnVibWx1WjF4dVhHNGdJQ0FnVzJKdmIyeGxZVzVkT2lCZ2RISjFaV0FnZEc4Z1lXUmtYRzRnSUNBZ1cySnZiMnhsWVc1ZE9pQmdkSEoxWldBZ2FXWWdiR0Y2ZVZ4dUtpOWNibU52Ym5OMElIVndaR0YwWlZKMWJtNXBibWREYjNWdWRDQTlJQ2hoWkdRc0lHbHpUR0Y2ZVNrZ1BUNGdlMXh1SUNBZ0lHTnZibk4wSUcxdlpHbG1lU0E5SUdGa1pDQS9JREVnT2lBdE1UdGNibHh1SUNBZ0lIUnZkR0ZzVW5WdWJtbHVaME52ZFc1MElDczlJRzF2WkdsbWVUdGNibHh1SUNBZ0lHbG1JQ2doYVhOTVlYcDVLU0I3WEc0Z0lDQWdJQ0FnSUc1dmJrSmhZMnRuY205MWJtUlNkVzV1YVc1blEyOTFiblFnS3owZ2JXOWthV1o1TzF4dUlDQWdJSDFjYm4wN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElIdGNiaUFnSUNCaFkzUnBkbVZVWVhOcmN5eGNibHh1SUNBZ0lDOHZJRUZqZEdsMllYUmxJR0VnZEdGemExeHVJQ0FnSUdGamRHbDJZWFJsT2lBb2FXUXNJSFJoYzJzcElEMCtJSHRjYmlBZ0lDQWdJQ0FnWVdOMGFYWmxWR0Z6YTNOYmFXUmRJRDBnZEdGemF6dGNiaUFnSUNBZ0lDQWdkR0Z6YXk1cGMwRmpkR2wyWlNBOUlIUnlkV1U3WEc0Z0lDQWdJQ0FnSUhWd1pHRjBaVkYxWlhWbGN5aHBaQ3dnWVdOMGFYWmhkR1ZSZFdWMVpTd2daR1ZoWTNScGRtRjBaVkYxWlhWbEtUdGNibHh1SUNBZ0lDQWdJQ0JwWmlBb2RHRnpheTV2YmtGamRHbDJZWFJsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwWVhOckxtOXVRV04wYVhaaGRHVW9kR0Z6YXlrN1hHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0JwWmlBb2RHRnpheTV2YmtGamRHbDJZWFJsVDI1alpTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHRnpheTV2YmtGamRHbDJZWFJsVDI1alpTaDBZWE5yS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgwc1hHNWNiaUFnSUNBdkx5QkVaV0ZqZEdsMllYUmxJR0VnZEdGemExeHVJQ0FnSUdSbFlXTjBhWFpoZEdVNklDaHBaQ2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCMFlYTnJJRDBnWVdOMGFYWmxWR0Z6YTNOYmFXUmRPMXh1WEc0Z0lDQWdJQ0FnSUdsbUlDaDBZWE5yS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IxY0dSaGRHVlJkV1YxWlhNb2FXUXNJR1JsWVdOMGFYWmhkR1ZSZFdWMVpTd2dZV04wYVhaaGRHVlJkV1YxWlNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwWVhOckxtbHpRV04wYVhabElEMGdabUZzYzJVN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaDBZWE5yTG05dVJHVmhZM1JwZG1GMFpTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJoYzJzdWIyNUVaV0ZqZEdsMllYUmxLSFJoYzJzcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlN4Y2JseHVJQ0FnSUM4dklFNTFiV0psY2lCaVlXTnJaM0p2ZFc1a0lIUmhjMnRsYzF4dUlDQWdJR2RsZEU1dmJrSmhZMnRuY205MWJtUlNkVzV1YVc1blEyOTFiblE2SUNncElEMCtJRzV2YmtKaFkydG5jbTkxYm1SU2RXNXVhVzVuUTI5MWJuUXNYRzVjYmlBZ0lDQXZMeUJKYm1OeVpXMWxiblFnWTNWeWNtVnVkQ0IwWVhOcklFbEVJR0Z1WkNCeVpYUjFjbTVjYmlBZ0lDQm5aWFJVWVhOclNXUTZJQ2dwSUQwK0lHTjFjbkpsYm5SVVlYTnJTV1FyS3l4Y2JseHVJQ0FnSUM4dklGSmxjMjlzZG1VZ1lXTjBhWFpoZEdVdlpHVmhZM1JwZG1GMFpTQjBZWE5yWlhNZ1lXNWtJSEpsZEhWeWJpQmhZM1JwZG1VZ2FXUnpYRzRnSUNBZ1oyVjBRV04wYVhabFNXUnpPaUFvS1NBOVBpQjdYRzRnSUNBZ0lDQWdJQzhxWEc0Z0lDQWdJQ0FnSUNBZ0lDQjBZWE5ySUdSbFlXTjBhWFpoZEdVZ2NYVmxkV1ZjYmlBZ0lDQWdJQ0FnS2k5Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnWkdWaFkzUnBkbUYwWlZGMVpYVmxUR1Z1WjNSb0lEMGdaR1ZoWTNScGRtRjBaVkYxWlhWbExteGxibWQwYUR0Y2JseHVJQ0FnSUNBZ0lDQm1iM0lnS0d4bGRDQnBJRDBnTURzZ2FTQThJR1JsWVdOMGFYWmhkR1ZSZFdWMVpVeGxibWQwYURzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCcFpDQTlJR1JsWVdOMGFYWmhkR1ZSZFdWMVpWdHBYVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUdGamRHbDJaVWxrU1c1a1pYZ2dQU0J5ZFc1dWFXNW5TV1J6TG1sdVpHVjRUMllvYVdRcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdkR0Z6YXlBOUlHRmpkR2wyWlZSaGMydHpXMmxrWFR0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1NXWWdkR2hwY3lCcGN5QmhJSEoxYm01cGJtY2dkR0Z6YXl3Z1pHVmhZM1JwZG1GMFpWeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHRmpkR2wyWlVsa1NXNWtaWGdnUGlBdE1Ta2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEoxYm01cGJtZEpaSE11YzNCc2FXTmxLR0ZqZEdsMlpVbGtTVzVrWlhnc0lERXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFZ3WkdGMFpWSjFibTVwYm1kRGIzVnVkQ2htWVd4elpTd2dkR0Z6YXk1cGMweGhlbmtwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdSbGJHVjBaU0JoWTNScGRtVlVZWE5yYzF0cFpGMDdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0F2S2x4dUlDQWdJQ0FnSUNBZ0lDQWdSVzF3ZEhrZ1pHVmhZM1JwZG1GMFpTQnhkV1YxWlM0Z1YyVWdkWE5sSUdCQmNuSmhlUzV6Y0d4cFkyVmdJR0psWTJGMWMyVWdhWFFnWkc5bGMyNG5kRnh1SUNBZ0lDQWdJQ0FnSUNBZ2QyOXlhM01nYjI0Z2RHaGxJRzl5YVdkcGJtRnNJR0Z5Y21GNUlITnZJSGRsSUdSdmJpZDBJR2hoZG1VZ2RHOGdaMkZ5WW1GblpTQmpiMnhzWldOMElHRnVlWFJvYVc1blhHNGdJQ0FnSUNBZ0lDb3ZYRzRnSUNBZ0lDQWdJR1JsWVdOMGFYWmhkR1ZSZFdWMVpTNXpjR3hwWTJVb01Dd2daR1ZoWTNScGRtRjBaVkYxWlhWbFRHVnVaM1JvS1R0Y2JseHVJQ0FnSUNBZ0lDQXZLbHh1SUNBZ0lDQWdJQ0FnSUNBZ2RHRnpheUJoWTNScGRtRjBaU0J4ZFdWMVpWeHVJQ0FnSUNBZ0lDQXFMMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQmhZM1JwZG1GMFpWRjFaWFZsVEdWdVozUm9JRDBnWVdOMGFYWmhkR1ZSZFdWMVpTNXNaVzVuZEdnN1hHNWNiaUFnSUNBZ0lDQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0JoWTNScGRtRjBaVkYxWlhWbFRHVnVaM1JvT3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUdsa0lEMGdZV04wYVhaaGRHVlJkV1YxWlZ0cFhUdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJR0ZqZEdsMlpVbGtTVzVrWlhnZ1BTQnlkVzV1YVc1blNXUnpMbWx1WkdWNFQyWW9hV1FwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2RHRnpheUE5SUdGamRHbDJaVlJoYzJ0elcybGtYVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnU1dZZ2RHRnpheUJwYzI0bmRDQmhiSEpsWVdSNUlISjFibTVwYm1jc0lHRmpkR2wyWVhSbFhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb1lXTjBhWFpsU1dSSmJtUmxlQ0E5UFQwZ0xURWdKaVlnZEdGemF5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMFlYTnJMbWx6VUhKcGIzSnBkSGtwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjblZ1Ym1sdVowbGtjeTUxYm5Ob2FXWjBLR2xrS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlkVzV1YVc1blNXUnpMbkIxYzJnb2FXUXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDaDBZWE5yTG05dVFXTjBhWFpoZEdWTWIyOXdLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUmhjMnN1YjI1QlkzUnBkbUYwWlV4dmIzQW9LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMWNHUmhkR1ZTZFc1dWFXNW5RMjkxYm5Rb2RISjFaU3dnZEdGemF5NXBjMHhoZW5rcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdZV04wYVhaaGRHVlJkV1YxWlM1emNHeHBZMlVvTUN3Z1lXTjBhWFpoZEdWUmRXVjFaVXhsYm1kMGFDazdYRzVjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSEoxYm01cGJtZEpaSE03WEc0Z0lDQWdmVnh1ZlR0Y2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy90YXNrL21hbmFnZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA1M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIiLCJmaWxlIjoicG9wbW90aW9uLmdsb2JhbC5qcyJ9