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
	exports.transformers = exports.valueType = exports.setGlobalDilation = exports.utils = exports.calc = exports.detectFlow = exports.easing = exports.adapter = exports.timeline = exports.stagger = exports.task = exports.input = exports.track = exports.physics = exports.tween = exports.flow = undefined;
	
	var _timer = __webpack_require__(2);
	
	Object.defineProperty(exports, 'setGlobalDilation', {
	    enumerable: true,
	    get: function () {
	        return _timer.setGlobalDilation;
	    }
	});
	
	var _Action = __webpack_require__(3);
	
	var _Action2 = _interopRequireDefault(_Action);
	
	var _Flow = __webpack_require__(8);
	
	var _Flow2 = _interopRequireDefault(_Flow);
	
	var _Tween = __webpack_require__(4);
	
	var _Tween2 = _interopRequireDefault(_Tween);
	
	var _Physics = __webpack_require__(5);
	
	var _Physics2 = _interopRequireDefault(_Physics);
	
	var _Track = __webpack_require__(6);
	
	var _Track2 = _interopRequireDefault(_Track);
	
	var _Task = __webpack_require__(7);
	
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
	
	var _svgAdapter = __webpack_require__(15);
	
	var _svgAdapter2 = _interopRequireDefault(_svgAdapter);
	
	var _svgPathAdapter = __webpack_require__(16);
	
	var _svgPathAdapter2 = _interopRequireDefault(_svgPathAdapter);
	
	var _presetEasing = __webpack_require__(17);
	
	var _presetEasing2 = _interopRequireDefault(_presetEasing);
	
	var _getFlow = __webpack_require__(18);
	
	var _getFlow2 = _interopRequireDefault(_getFlow);
	
	var _calc2 = __webpack_require__(19);
	
	var _calc = _interopRequireWildcard(_calc2);
	
	var _utils2 = __webpack_require__(20);
	
	var _utils = _interopRequireWildcard(_utils2);
	
	var _alpha = __webpack_require__(21);
	
	var _alpha2 = _interopRequireDefault(_alpha);
	
	var _angle = __webpack_require__(22);
	
	var _angle2 = _interopRequireDefault(_angle);
	
	var _axes = __webpack_require__(23);
	
	var _axes2 = _interopRequireDefault(_axes);
	
	var _color = __webpack_require__(24);
	
	var _color2 = _interopRequireDefault(_color);
	
	var _complex = __webpack_require__(25);
	
	var _complex2 = _interopRequireDefault(_complex);
	
	var _hex = __webpack_require__(26);
	
	var _hex2 = _interopRequireDefault(_hex);
	
	var _hsl = __webpack_require__(27);
	
	var _hsl2 = _interopRequireDefault(_hsl);
	
	var _positions = __webpack_require__(28);
	
	var _positions2 = _interopRequireDefault(_positions);
	
	var _px = __webpack_require__(29);
	
	var _px2 = _interopRequireDefault(_px);
	
	var _rgb = __webpack_require__(30);
	
	var _rgb2 = _interopRequireDefault(_rgb);
	
	var _scale = __webpack_require__(31);
	
	var _scale2 = _interopRequireDefault(_scale);
	
	var _shadow = __webpack_require__(32);
	
	var _shadow2 = _interopRequireDefault(_shadow);
	
	var _unit = __webpack_require__(33);
	
	var _unit2 = _interopRequireDefault(_unit);
	
	var _transformers2 = __webpack_require__(34);
	
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
	
	var adapter = exports.adapter = { create: _adapter2.default, attr: _attrAdapter2.default, css: _cssAdapter2.default, svg: _svgAdapter2.default, svgPath: _svgPathAdapter2.default };
	
	// Easing
	exports.easing = _presetEasing2.default;
	var detectFlow = exports.detectFlow = _getFlow2.default;
	
	// Utils
	exports.calc = _calc;
	exports.utils = _utils;
	
	// Value types
	
	var valueType = exports.valueType = { alpha: _alpha2.default, angle: _angle2.default, axes: _axes2.default, color: _color2.default, complex: _complex2.default, hex: _hex2.default, hsl: _hsl2.default, positions: _positions2.default, px: _px2.default, rgb: _rgb2.default, scale: _scale2.default, shadow: _shadow2.default, unit: _unit2.default };
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wb3Btb3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztzQkFtQ1M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBekJGLElBQU0sc0JBQU87c0NBQUk7Ozs7NEVBQXFCO0NBQXpCOztBQUNiLElBQU0sd0JBQVEsVUFBQyxLQUFEO1dBQVcsb0JBQVUsS0FBVjtDQUFYO0FBQ2QsSUFBTSw0QkFBVSxVQUFDLEtBQUQ7V0FBVyxzQkFBWSxLQUFaO0NBQVg7QUFDaEIsSUFBTSx3QkFBUTt1Q0FBSTs7Ozs2RUFBc0I7Q0FBMUI7QUFDZCxJQUFNLHdCQUFRO3VDQUFJOzs7OzZFQUFzQjtDQUExQjtBQUNkLElBQU0sc0JBQU87dUNBQUk7Ozs7NEVBQXFCO0NBQXpCO1FBQ2I7UUFDQTs7OztBQVFBLElBQU0sNEJBQVUsRUFBRSx5QkFBRixFQUFVLDJCQUFWLEVBQWdCLHlCQUFoQixFQUFxQix5QkFBckIsRUFBMEIsaUNBQTFCLEVBQVY7OztRQUdOO0FBRUEsSUFBTSxtREFBTjs7O1FBR0s7UUFDQTs7OztBQWlCTCxJQUFNLGdDQUFZLEVBQUUsc0JBQUYsRUFBUyxzQkFBVCxFQUFnQixvQkFBaEIsRUFBc0Isc0JBQXRCLEVBQTZCLDBCQUE3QixFQUFzQyxrQkFBdEMsRUFBMkMsa0JBQTNDLEVBQWdELDhCQUFoRCxFQUEyRCxnQkFBM0QsRUFBK0Qsa0JBQS9ELEVBQW9FLHNCQUFwRSxFQUEyRSx3QkFBM0UsRUFBbUYsb0JBQW5GLEVBQVo7OztRQUdEOzs7Ozs7Ozs7OztBQVVaLGlCQUFPLFNBQVAsQ0FBaUIsRUFBakIsR0FBc0IsVUFBVSxPQUFWLEVBQW1CO0FBQ3JDLFFBQUksQ0FBQyxRQUFRLE9BQVIsRUFBaUI7QUFDbEIsa0JBQVUsdUJBQVEsT0FBUixDQUFWLENBRGtCO0tBQXRCOztBQUlBLFdBQU8sUUFBUSxPQUFSLENBQWdCLElBQWhCLENBQVAsQ0FMcUM7Q0FBbkIiLCJmaWxlIjoicG9wbW90aW9uLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydCBjbGFzc2VzIC0gbG9uZyB0ZXJtIGdvYWwgdG8gbW92ZSB0b3dhcmRzIGNvbXBvc2l0aW9uXG5pbXBvcnQgQWN0aW9uIGZyb20gJy4vYWN0aW9ucy9BY3Rpb24nO1xuaW1wb3J0IEZsb3cgZnJvbSAnLi9hY3Rpb25zL0Zsb3cnO1xuaW1wb3J0IFR3ZWVuIGZyb20gJy4vYWN0aW9ucy9Ud2Vlbic7XG5pbXBvcnQgUGh5c2ljcyBmcm9tICcuL2FjdGlvbnMvUGh5c2ljcyc7XG5pbXBvcnQgVHJhY2sgZnJvbSAnLi9hY3Rpb25zL1RyYWNrJztcbmltcG9ydCBUYXNrIGZyb20gJy4vdGFzay9UYXNrJztcbmltcG9ydCBJbnB1dCBmcm9tICcuL2lucHV0L0lucHV0JztcblxuLy8gRXhwb3J0IGZhY3RvcnkgZnVuY3Rpb25zXG5leHBvcnQgY29uc3QgZmxvdyA9ICguLi5hcmdzKSA9PiBuZXcgRmxvdyguLi5hcmdzKTtcbmV4cG9ydCBjb25zdCB0d2VlbiA9IChwcm9wcykgPT4gbmV3IFR3ZWVuKHByb3BzKTtcbmV4cG9ydCBjb25zdCBwaHlzaWNzID0gKHByb3BzKSA9PiBuZXcgUGh5c2ljcyhwcm9wcyk7XG5leHBvcnQgY29uc3QgdHJhY2sgPSAoLi4uYXJncykgPT4gbmV3IFRyYWNrKC4uLmFyZ3MpO1xuZXhwb3J0IGNvbnN0IGlucHV0ID0gKC4uLmFyZ3MpID0+IG5ldyBJbnB1dCguLi5hcmdzKTtcbmV4cG9ydCBjb25zdCB0YXNrID0gKC4uLmFyZ3MpID0+IG5ldyBUYXNrKC4uLmFyZ3MpO1xuZXhwb3J0IHN0YWdnZXIgZnJvbSAnLi9pbmMvc3RhZ2dlcic7XG5leHBvcnQgdGltZWxpbmUgZnJvbSAnLi9pbmMvdGltZWxpbmUnO1xuXG4vLyBBZGFwdGVyc1xuaW1wb3J0IGNyZWF0ZSBmcm9tICcuL2FkYXB0ZXIvYWRhcHRlcic7XG5pbXBvcnQgYXR0ciBmcm9tICcuL2FkYXB0ZXIvYXR0ci1hZGFwdGVyJztcbmltcG9ydCBjc3MgZnJvbSAnLi9hZGFwdGVyL2Nzcy1hZGFwdGVyJztcbmltcG9ydCBzdmcgZnJvbSAnLi9hZGFwdGVyL3N2Zy1hZGFwdGVyJztcbmltcG9ydCBzdmdQYXRoIGZyb20gJy4vYWRhcHRlci9zdmctcGF0aC1hZGFwdGVyJztcbmV4cG9ydCBjb25zdCBhZGFwdGVyID0geyBjcmVhdGUsIGF0dHIsIGNzcywgc3ZnLCBzdmdQYXRoIH07XG5cbi8vIEVhc2luZ1xuZXhwb3J0IGVhc2luZyBmcm9tICcuL2FjdGlvbnMvZWFzaW5nL3ByZXNldC1lYXNpbmcnO1xuaW1wb3J0IGdldEZsb3cgZnJvbSAnLi9hY3Rpb25zL2Zsb3cvZ2V0LWZsb3cnO1xuZXhwb3J0IGNvbnN0IGRldGVjdEZsb3cgPSBnZXRGbG93O1xuXG4vLyBVdGlsc1xuZXhwb3J0ICogYXMgY2FsYyBmcm9tICcuL2luYy9jYWxjJztcbmV4cG9ydCAqIGFzIHV0aWxzIGZyb20gJy4vaW5jL3V0aWxzJztcbmV4cG9ydCB7IHNldEdsb2JhbERpbGF0aW9uIH0gZnJvbSAnLi90YXNrL3RpbWVyJztcblxuLy8gVmFsdWUgdHlwZXNcbmltcG9ydCBhbHBoYSBmcm9tICcuL3ZhbHVlLXR5cGVzL2FscGhhJztcbmltcG9ydCBhbmdsZSBmcm9tICcuL3ZhbHVlLXR5cGVzL2FuZ2xlJztcbmltcG9ydCBheGVzIGZyb20gJy4vdmFsdWUtdHlwZXMvYXhlcyc7XG5pbXBvcnQgY29sb3IgZnJvbSAnLi92YWx1ZS10eXBlcy9jb2xvcic7XG5pbXBvcnQgY29tcGxleCBmcm9tICcuL3ZhbHVlLXR5cGVzL2NvbXBsZXgnO1xuaW1wb3J0IGhleCBmcm9tICcuL3ZhbHVlLXR5cGVzL2hleCc7XG5pbXBvcnQgaHNsIGZyb20gJy4vdmFsdWUtdHlwZXMvaHNsJztcbmltcG9ydCBwb3NpdGlvbnMgZnJvbSAnLi92YWx1ZS10eXBlcy9wb3NpdGlvbnMnO1xuaW1wb3J0IHB4IGZyb20gJy4vdmFsdWUtdHlwZXMvcHgnO1xuaW1wb3J0IHJnYiBmcm9tICcuL3ZhbHVlLXR5cGVzL3JnYic7XG5pbXBvcnQgc2NhbGUgZnJvbSAnLi92YWx1ZS10eXBlcy9zY2FsZSc7XG5pbXBvcnQgc2hhZG93IGZyb20gJy4vdmFsdWUtdHlwZXMvc2hhZG93JztcbmltcG9ydCB1bml0IGZyb20gJy4vdmFsdWUtdHlwZXMvdW5pdCc7XG5leHBvcnQgY29uc3QgdmFsdWVUeXBlID0geyBhbHBoYSwgYW5nbGUsIGF4ZXMsIGNvbG9yLCBjb21wbGV4LCBoZXgsIGhzbCwgcG9zaXRpb25zLCBweCwgcmdiLCBzY2FsZSwgc2hhZG93LCB1bml0IH07XG5cbi8vIFRyYW5zZm9ybWVyc1xuZXhwb3J0ICogYXMgdHJhbnNmb3JtZXJzIGZyb20gJy4vaW5jL3RyYW5zZm9ybWVycyc7XG5cbi8qXG4gICAgUmV0dXJucyBhIHZlcnNpb24gb2YgdGhlIEFjdGlvbiBib3VuZCB0byBhIEZsb3dcblxuICAgIFdlJ3JlIGFkZGluZyBgb25gIGhlcmUgYmVjYXVzZSBGbG93IGV4dGVuZHMgQWN0aW9uLFxuICAgIG90aGVyd2lzZSBjcmVhdGluZyBhIGNpcmN1bGFyIG1vZHVsYXIgZGVwZW5kZW5jeS4gRnV0dXJlXG4gICAgcmVmYWN0b3JpbmcsIGllIG1vdmluZyB0byBhIGNvbXBvc2l0aW9uYWwgbW9kZWwgd2lsbFxuICAgIHJlbW92ZSB0aGUgbmVlZCBmb3IgdXMgdG8gZG8gdGhpcyBoZXJlLlxuKi9cbkFjdGlvbi5wcm90b3R5cGUub24gPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIGlmICghZWxlbWVudC5jb25uZWN0KSB7XG4gICAgICAgIGVsZW1lbnQgPSBnZXRGbG93KGVsZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50LmNvbm5lY3QodGhpcyk7XG59OyJdfQ==

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.setGlobalDilation = undefined;
	
	var _utils = __webpack_require__(20);
	
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
	
	var _Task2 = __webpack_require__(7);
	
	var _Task3 = _interopRequireDefault(_Task2);
	
	var _calc = __webpack_require__(19);
	
	var _utils = __webpack_require__(20);
	
	var _detect = __webpack_require__(35);
	
	var _detect2 = _interopRequireDefault(_detect);
	
	var _numericalValues = __webpack_require__(36);
	
	var _numericalValues2 = _interopRequireDefault(_numericalValues);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var NUM_NUMERICAL_VALUES = _numericalValues2.default.length;
	
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
	                if (values[key].current === undefined && this.adapter && this.adapter.get) {
	                    newValue.current = this.adapter.get(key);
	                }
	
	                // If we don't have a value type and we do have an Adapter, check for type with value key
	                if (!newValue.type && this.adapter && this.adapter.getValueType) {
	                    newValue.type = this.adapter.getValueType(key);
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
	
	        if (this.onFrame) {
	            this.onFrame(this.state, this);
	        }
	
	        return this.onCleanup ? true : hasChanged;
	    };
	
	    /*
	        If we are rendering, recombine parent values first
	    */
	
	    Action.prototype.onPreRender = function onPreRender() {
	        // Update parent values
	        for (var i = 0; i < this.numParentKeys; i++) {
	            var key = this.parentKeys[i];
	            var value = this.values[key];
	
	            value.current = value.type.combine(value.children, value.template);
	
	            if (this.state[key] !== value.current) {
	                this.state[key] = value.current;
	            }
	        }
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
	//# sourceMappingURL=data:application/json;base64,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LEVBQWdDLE1BQTVDLENBRDZCOzs7QUFyUi9CLFdBeVJLLGlEQUFtQixPQUFPO0FBQzdCLDRCQUFZLEtBQUssU0FBTCxDQUFlLFlBQWYsRUFBZ0MsTUFBNUMsQ0FENkI7OztXQXpSL0I7OztBQThSTixPQUFPLFNBQVAsQ0FBaUIsZ0JBQWpCLEdBQW9DLFNBQXBDO0FBQ0EsT0FBTyxTQUFQLENBQWlCLFlBQWpCLEdBQWdDO0FBQzVCLGFBQVMsQ0FBVDtBQUNBLGNBQVUsQ0FBVjtBQUNBLFdBQU8sS0FBUDtBQUNBLFNBQUssU0FBTDtBQUNBLFNBQUssU0FBTDtBQUNBLGVBQVcsU0FBWDtDQU5KOztrQkFTZSIsImZpbGUiOiJBY3Rpb24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRhc2sgZnJvbSAnLi4vdGFzay9UYXNrJztcbmltcG9ydCB7IHNwZWVkUGVyU2Vjb25kIH0gZnJvbSAnLi4vaW5jL2NhbGMnO1xuaW1wb3J0IHsgaXNOdW0sIGlzT2JqLCBpc1N0cmluZyB9IGZyb20gJy4uL2luYy91dGlscyc7XG5pbXBvcnQgZGV0ZWN0VmFsdWVUeXBlIGZyb20gJy4uL3ZhbHVlLXR5cGVzL2RldGVjdCc7XG5pbXBvcnQgTlVNRVJJQ0FMX1ZBTFVFUyBmcm9tICcuLi9pbmMvbnVtZXJpY2FsLXZhbHVlcyc7XG5cbmNvbnN0IE5VTV9OVU1FUklDQUxfVkFMVUVTID0gTlVNRVJJQ0FMX1ZBTFVFUy5sZW5ndGg7XG5cbmNsYXNzIEFjdGlvbiBleHRlbmRzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHByb3BzLnN0YXRlID0ge307XG4gICAgICAgIHByb3BzLnZhbHVlS2V5cyA9IFtdO1xuICAgICAgICBwcm9wcy5wYXJlbnRLZXlzID0gW107XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIFNldCBBY3Rpb24gcHJvcGVydGllc1xuICAgICAgICAjIyBTZXQgdXNlci1kZWZpbmVkIEFjdGlvbiBwcm9wZXJ0aWVzXG5cbiAgICAgICAgQHBhcmFtIFtvYmplY3RdXG4gICAgICAgIEByZXR1cm4gW0FjdGlvbl1cbiAgICAqL1xuICAgIHNldChwcm9wcyA9IHt9KSB7XG4gICAgICAgIHRoaXMudmFsdWVzID0gdGhpcy52YWx1ZXMgfHwge307XG5cbiAgICAgICAgY29uc3QgeyB2YWx1ZXMsIC4uLnByb3BzVG9TZXQgfSA9IHByb3BzO1xuICAgICAgICBjb25zdCBpbmhlcml0YWJsZSA9IHt9O1xuXG4gICAgICAgIC8vIFNldCBub24tY29uc3VtZWQgcHJvcGVydGllc1xuICAgICAgICBzdXBlci5zZXQocHJvcHNUb1NldCk7XG5cbiAgICAgICAgLy8gUHJpbWUgYW4gb2JqZWN0IHRvIGluaGVyaXQgZnJvbSwgd2l0aCBvbmx5IGB2YWx1ZWAgcHJvcGVydGllc1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5kZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRlZmF1bHRWYWx1ZS5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHByb3BzVG9TZXQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGluaGVyaXRhYmxlW2tleV0gPSBwcm9wc1RvU2V0W2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgZXhpc3RpbmcgdmFsdWVzIHdpdGggaW5oZXJpdGFibGUgcHJvcGVydGllc1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy52YWx1ZXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZXNba2V5XSA9IHsgLi4udGhpcy52YWx1ZXNba2V5XSwgLi4uaW5oZXJpdGFibGUgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZVxuICAgICAgICBpZiAodmFsdWVzKSB7XG4gICAgICAgICAgICB0aGlzLnNldFZhbHVlcyh2YWx1ZXMsIGluaGVyaXRhYmxlKTtcblxuICAgICAgICAgICAgLy8gUHJlY29tcHV0ZSBudW1iZXIgb2YgdmFsdWUga2V5IGFuZCBwYXJlbnQga2V5cyB0byBhdm9pZCBwZXItZnJhbWUgbWVhc3VyZW1lbnRcbiAgICAgICAgICAgIHRoaXMubnVtVmFsdWVLZXlzID0gdGhpcy52YWx1ZUtleXMubGVuZ3RoO1xuICAgICAgICAgICAgdGhpcy5udW1QYXJlbnRLZXlzID0gdGhpcy5wYXJlbnRLZXlzLmxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGdldChrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGVba2V5XTtcbiAgICB9XG5cbiAgICBzZXRWYWx1ZXModmFsdWVzLCBpbmhlcml0KSB7XG4gICAgICAgIC8vIEl0ZXJhdGUgb3ZlciBhbGwgaW5jb21pbmcgdmFsdWVzIGFuZCBzZXRcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHZhbHVlcykge1xuICAgICAgICAgICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGhhc0NoaWxkcmVuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGRyZW4gPSB7fTtcbiAgICAgICAgICAgICAgICAvLyBNZXJnZSBpbnRvIGV4aXN0aW5nIHZhbHVlIG9yIGNyZWF0ZSBuZXdcbiAgICAgICAgICAgICAgICBsZXQgbmV3VmFsdWUgPSB0aGlzLnZhbHVlc1trZXldID8geyAuLi50aGlzLnZhbHVlc1trZXldIH0gOiB7IC4uLnRoaXMuZGVmYXVsdFZhbHVlLCAuLi5pbmhlcml0IH07XG5cbiAgICAgICAgICAgICAgICAvLyBJZiB2YWx1ZXMgaXMgbm90IGFuIG9iamVjdCwgYXNzaWduIHZhbHVlIHRvIGRlZmF1bHQgcHJvcFxuICAgICAgICAgICAgICAgIGlmICghaXNPYmoodmFsdWVzW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlW3RoaXMuZGVmYXVsdFZhbHVlUHJvcF0gPSB2YWx1ZXNba2V5XTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IHsgLi4ubmV3VmFsdWUsIC4uLnZhbHVlc1trZXldIH07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gSWYgd2UndmUgZ290IGFuIGFkYXB0ZXIsIGdldCB0aGUgY3VycmVudCB2YWx1ZVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZXNba2V5XS5jdXJyZW50ID09PSB1bmRlZmluZWQgJiYgdGhpcy5hZGFwdGVyICYmIHRoaXMuYWRhcHRlci5nZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUuY3VycmVudCA9IHRoaXMuYWRhcHRlci5nZXQoa2V5KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBJZiB3ZSBkb24ndCBoYXZlIGEgdmFsdWUgdHlwZSBhbmQgd2UgZG8gaGF2ZSBhbiBBZGFwdGVyLCBjaGVjayBmb3IgdHlwZSB3aXRoIHZhbHVlIGtleVxuICAgICAgICAgICAgICAgIGlmICghbmV3VmFsdWUudHlwZSAmJiB0aGlzLmFkYXB0ZXIgJiYgdGhpcy5hZGFwdGVyLmdldFZhbHVlVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS50eXBlID0gdGhpcy5hZGFwdGVyLmdldFZhbHVlVHlwZShrZXkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIElmIHdlIHN0aWxsIGRvbid0IGhhdmUgYSB2YWx1ZSB0eXBlIGFuZCB0aGlzIGlzIHRoZSBmaXJzdCB0aW1lIHdlJ3ZlIHNldCB0aGlzIHZhbHVlLCBjaGVjayBudW1lcmljYWwgdmFsdWVzIGZvciBzdHJpbmdzIGFuZCB0ZXN0XG4gICAgICAgICAgICAgICAgaWYgKCFuZXdWYWx1ZS50eXBlICYmICF0aGlzLnZhbHVlc1trZXldKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLnR5cGUgPSBkZXRlY3RWYWx1ZVR5cGUobmV3VmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIElmIHdlIGhhdmUgYSB2YWx1ZSB0eXBlLCBoYW5kbGUuIFRoaXMgaXMgbXkgbGVhc3QgZmF2b3VyaXRlIHBhcnQgb2YgUG9wbW90aW9uLCBzby4uLiBlbmpveS5cbiAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE5VTV9OVU1FUklDQUxfVkFMVUVTOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3BOYW1lID0gTlVNRVJJQ0FMX1ZBTFVFU1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlUHJvcCA9IG5ld1ZhbHVlW3Byb3BOYW1lXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhpcyBwcm9wIGlzIGEgc3RyaW5nIGFuZCB3ZSBoYXZlIGEgc3BsaXR0ZXIsIHNwbGl0XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUudHlwZS5oYXNPd25Qcm9wZXJ0eSgnc3BsaXQnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNwbGl0UHJvcCA9IGlzU3RyaW5nKHZhbHVlUHJvcCkgPyBuZXdWYWx1ZS50eXBlLnNwbGl0KHZhbHVlUHJvcCkgOiB7fTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHNwbGl0S2V5IGluIHNwbGl0UHJvcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3BsaXRQcm9wLmhhc093blByb3BlcnR5KHNwbGl0S2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tYmluZWRLZXkgPSBrZXkgKyBzcGxpdEtleTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgd2UgZG9uJ3QgaGF2ZSBhIGNoaWxkIHZhbHVlIGZvciB0aGlzIGtleSwgbWFrZSBvbmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY2hpbGRyZW5bY29tYmluZWRLZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVmYXVsdFZhbHVlID0gKG5ld1ZhbHVlLnR5cGUuZGVmYXVsdFByb3BzICYmIG5ld1ZhbHVlLnR5cGUuZGVmYXVsdFByb3BzW3NwbGl0S2V5XSkgPyBuZXdWYWx1ZS50eXBlLmRlZmF1bHRQcm9wc1tzcGxpdEtleV0gOiBuZXdWYWx1ZS50eXBlLmRlZmF1bHRQcm9wcyB8fCB7fTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuW2NvbWJpbmVkS2V5XSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ubmV3VmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmRlZmF1bHRWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkS2V5OiBzcGxpdEtleVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgY2hpbGRyZW5bY29tYmluZWRLZXldLnR5cGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc0NoaWxkcmVuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuW2NvbWJpbmVkS2V5XVtwcm9wTmFtZV0gPSBwYXJzZUZsb2F0KHNwbGl0UHJvcFtzcGxpdEtleV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgd2UgaGF2ZSBhIHRlbXBsYXRlIGZ1bmN0aW9uLCBnZW5lcmF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbmV3VmFsdWUudGVtcGxhdGUgJiYgbmV3VmFsdWUudHlwZS50ZW1wbGF0ZSAmJiBpc1N0cmluZyh2YWx1ZVByb3ApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLnRlbXBsYXRlID0gbmV3VmFsdWUudHlwZS50ZW1wbGF0ZSh2YWx1ZVByb3ApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobmV3VmFsdWUudHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IHsgLi4ubmV3VmFsdWUsIC4uLm5ld1ZhbHVlLnR5cGUuZGVmYXVsdFByb3BzIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZVByb3AgIT09IHVuZGVmaW5lZCAmJiBuZXdWYWx1ZS50eXBlLnBhcnNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWVbcHJvcE5hbWVdID0gbmV3VmFsdWUudHlwZS5wYXJzZSh2YWx1ZVByb3AsIG5ld1ZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gLy8gRW5kIHZhbHVlIHR5cGUgbm9uc2Vuc2VcblxuICAgICAgICAgICAgICAgIC8vIFNldCBgcHJldmAgdG8gYGN1cnJlbnRgIGZvciBmaXJzdCBmcmFtZSBhZnRlciBzZXRcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZS5wcmV2ID0gbmV3VmFsdWUuY3VycmVudDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGlzIHZhbHVlIGRvZXNuJ3QgaGF2ZSBjaGlsZHJlbiwgYWRkIHRvIHZhbHVlS2V5c1xuICAgICAgICAgICAgICAgIGlmICghaGFzQ2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudmFsdWVLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWVLZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gT3IgYWRkIHRvIHBhcmVudEtleXNcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS5jaGlsZHJlbiA9IG5ld1ZhbHVlLmNoaWxkcmVuIHx8IHt9O1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnRLZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0VmFsdWVzKGNoaWxkcmVuKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlc1trZXldID0gbmV3VmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBEZWNpZGUgd2hldGhlciB0aGlzIEFjdGlvbiB3aWxsIHJlbmRlciBvbiBuZXh0IGZyYW1lXG5cbiAgICAgICAgQHBhcmFtIFtBY3Rpb25dXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgICAgICBAcGFyYW0gW251bWJlcl1cbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybiB0cnVlIHRvIHJlbmRlclxuICAgICovXG4gICAgd2lsbFJlbmRlcihhY3Rpb24sIGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgICAgICAgbGV0IGhhc0NoYW5nZWQgPSBmYWxzZTtcblxuICAgICAgICAvLyBDaGVjayBpZiBiYXNlIHZhbHVlcyBoYXZlIHVwZGF0ZWQgXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gdGhpcy52YWx1ZUtleXNbaV07XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG5cbiAgICAgICAgICAgIC8vIFJ1biB0cmFuc2Zvcm0gZnVuY3Rpb24gKGlmIHByZXNlbnQpXG4gICAgICAgICAgICBpZiAodmFsdWUudHJhbnNmb3JtKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IHZhbHVlLnRyYW5zZm9ybSh2YWx1ZS5jdXJyZW50LCBrZXksIHRoaXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDYXAgbWluaW11bVxuICAgICAgICAgICAgaWYgKGlzTnVtKHZhbHVlLm1pbikpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gTWF0aC5tYXgodmFsdWUuY3VycmVudCwgdmFsdWUubWluKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ2FwIG1heGltdW1cbiAgICAgICAgICAgIGlmIChpc051bSh2YWx1ZS5tYXgpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IE1hdGgubWluKHZhbHVlLmN1cnJlbnQsIHZhbHVlLm1heCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJvdW5kIG51bWJlclxuICAgICAgICAgICAgaWYgKHZhbHVlLnJvdW5kKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IE1hdGgucm91bmQodmFsdWUuY3VycmVudCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhbHVlLmZyYW1lQ2hhbmdlID0gdmFsdWUuY3VycmVudCAtIHZhbHVlLnByZXY7XG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSB2ZWxvY2l0eVxuICAgICAgICAgICAgaWYgKCF0aGlzLmNhbGN1bGF0ZXNWZWxvY2l0eSkge1xuICAgICAgICAgICAgICAgIHZhbHVlLnZlbG9jaXR5ID0gc3BlZWRQZXJTZWNvbmQodmFsdWUuZnJhbWVDaGFuZ2UsIGVsYXBzZWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiB0aGlzIHZhbHVlIGhhcyBjaGFuZ2VkXG4gICAgICAgICAgICBpZiAodmFsdWUucHJldiAhPT0gdmFsdWUuY3VycmVudCkge1xuICAgICAgICAgICAgICAgIGhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHZhbHVlLnByZXYgPSB2YWx1ZS5jdXJyZW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBBcHBlbmQgdW5pdFxuICAgICAgICAgICAgY29uc3QgdmFsdWVGb3JTdGF0ZSA9ICh2YWx1ZS50eXBlICYmIHZhbHVlLnR5cGUuc2VyaWFsaXplKSA/IHZhbHVlLnR5cGUuc2VyaWFsaXplKHZhbHVlLmN1cnJlbnQsIHZhbHVlKSA6IHZhbHVlLmN1cnJlbnQ7XG5cbiAgICAgICAgICAgIC8vIEFkZCB0byBzdGF0ZSBpZiB0aGlzIGlzIG5vdCBhIGNoaWxkIHZhdWVcbiAgICAgICAgICAgIGlmICghdmFsdWUucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZVtrZXldID0gdmFsdWVGb3JTdGF0ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZXNbdmFsdWUucGFyZW50XS5jaGlsZHJlblt2YWx1ZS5jaGlsZEtleV0gPSB2YWx1ZUZvclN0YXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMub25GcmFtZSkge1xuICAgICAgICAgICAgdGhpcy5vbkZyYW1lKHRoaXMuc3RhdGUsIHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICh0aGlzLm9uQ2xlYW51cCkgPyB0cnVlIDogaGFzQ2hhbmdlZDtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBJZiB3ZSBhcmUgcmVuZGVyaW5nLCByZWNvbWJpbmUgcGFyZW50IHZhbHVlcyBmaXJzdFxuICAgICovXG4gICAgb25QcmVSZW5kZXIoKSB7XG4gICAgICAgIC8vIFVwZGF0ZSBwYXJlbnQgdmFsdWVzXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1QYXJlbnRLZXlzOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHRoaXMucGFyZW50S2V5c1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcblxuICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IHZhbHVlLnR5cGUuY29tYmluZSh2YWx1ZS5jaGlsZHJlbiwgdmFsdWUudGVtcGxhdGUpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZVtrZXldICE9PSB2YWx1ZS5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZVtrZXldID0gdmFsdWUuY3VycmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluaGVyaXQocHJvcHMgPSB7fSkge1xuICAgICAgICBjb25zdCB7IHZhbHVlcywgLi4ucHJvcHNUb1NldCB9ID0gcHJvcHM7XG4gICAgICAgIGNvbnN0IG5ld0FjdGlvbiA9IHN1cGVyLmluaGVyaXQocHJvcHNUb1NldCk7XG5cbiAgICAgICAgaWYgKHZhbHVlcykge1xuICAgICAgICAgICAgbmV3QWN0aW9uLnNldCh7IHZhbHVlcyB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXdBY3Rpb247XG4gICAgfVxuXG4gICAgcGF1c2UoKSB7XG4gICAgICAgIHN1cGVyLnN0b3AoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmVzdW1lKCkge1xuICAgICAgICBzdXBlci5zdGFydCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB0b2dnbGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzQWN0aXZlID8gdGhpcy5wYXVzZSgpIDogdGhpcy5yZXN1bWUoKTtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gdGhpcy52YWx1ZXM7XG4gICAgICAgIHN1cGVyLnN0YXJ0KCk7XG5cbiAgICAgICAgZm9yIChsZXQga2V5IGluIHZhbHVlcykge1xuICAgICAgICAgICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVzW2tleV0ucHJldiA9IHZhbHVlc1trZXldLm9yaWdpbiA9IHZhbHVlc1trZXldLmN1cnJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgZXh0ZW5kRGVmYXVsdFZhbHVlKHByb3BzKSB7XG4gICAgICAgIHJldHVybiB7IC4uLnRoaXMucHJvdG90eXBlLmRlZmF1bHRWYWx1ZSwgLi4ucHJvcHMgfTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZXh0ZW5kRGVmYXVsdFByb3BzKHByb3BzKSB7XG4gICAgICAgIHJldHVybiB7IC4uLnRoaXMucHJvdG90eXBlLmRlZmF1bHRQcm9wcywgLi4ucHJvcHMgfTtcbiAgICB9XG59XG5cbkFjdGlvbi5wcm90b3R5cGUuZGVmYXVsdFZhbHVlUHJvcCA9ICdjdXJyZW50JztcbkFjdGlvbi5wcm90b3R5cGUuZGVmYXVsdFZhbHVlID0ge1xuICAgIGN1cnJlbnQ6IDAsXG4gICAgdmVsb2NpdHk6IDAsXG4gICAgcm91bmQ6IGZhbHNlLFxuICAgIG1pbjogdW5kZWZpbmVkLFxuICAgIG1heDogdW5kZWZpbmVkLFxuICAgIHRyYW5zZm9ybTogdW5kZWZpbmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBY3Rpb247XG4iXX0=

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _Action2 = __webpack_require__(3);
	
	var _Action3 = _interopRequireDefault(_Action2);
	
	var _presetEasing = __webpack_require__(17);
	
	var _presetEasing2 = _interopRequireDefault(_presetEasing);
	
	var _utils = __webpack_require__(20);
	
	var _calc = __webpack_require__(19);
	
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
	        _Action.prototype.start.call(this);
	        this.elapsed = 0;
	        this.flipCount = this.yoyoCount = this.loopCount = 0;
	        this.isScrubbing = false;
	        return this;
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
	        if (!this.isActive) {
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL1R3ZWVuLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtBLElBQU0sUUFBUSxPQUFSO0FBQ04sSUFBTSxhQUFhO0FBQ2YsVUFBTSxTQUFOO0FBQ0EsVUFBTSxTQUFOO0FBQ0EsVUFBTSxZQUFOO0NBSEU7O0lBTUE7Ozs7Ozs7OztvQkFDRix5QkFBUTtBQUNKLDBCQUFNLEtBQU4sWUFESTtBQUVKLGFBQUssT0FBTCxHQUFlLENBQWYsQ0FGSTtBQUdKLGFBQUssU0FBTCxHQUFpQixLQUFLLFNBQUwsR0FBaUIsS0FBSyxTQUFMLEdBQWlCLENBQWpCLENBSDlCO0FBSUosYUFBSyxXQUFMLEdBQW1CLEtBQW5CLENBSkk7QUFLSixlQUFPLElBQVAsQ0FMSTs7O0FBRE4sb0JBU0YsNkJBQVMsT0FBTyxZQUFZLFNBQVM7QUFDakMsWUFBTSxpQkFBaUIsSUFBQyxDQUFLLGFBQUwsS0FBdUIsQ0FBdkIsR0FBNEIsQ0FBN0IsR0FBaUMsQ0FBakMsQ0FEVTs7QUFHakMsYUFBSyxLQUFMLEdBQWEsSUFBYixDQUhpQzs7QUFLakMsWUFBSSxDQUFDLEtBQUssV0FBTCxFQUFrQjtBQUNuQixpQkFBSyxPQUFMLElBQWdCLE9BQUMsR0FBVSxLQUFLLE1BQUwsR0FBZSxLQUFLLGFBQUwsQ0FEdkI7U0FBdkI7O0FBSUEsYUFBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksS0FBSyxZQUFMLEVBQW1CLEdBQXZDLEVBQTRDO0FBQ3hDLGdCQUFNLE1BQU0sS0FBSyxTQUFMLENBQWUsQ0FBZixDQUFOLENBRGtDO0FBRXhDLGdCQUFNLFFBQVEsS0FBSyxNQUFMLENBQVksR0FBWixDQUFSLENBRmtDOztBQUl4QyxnQkFBSSxXQUFXLG9CQUFTLGdDQUFxQixLQUFLLE9BQUwsR0FBZSxNQUFNLEtBQU4sRUFBYSxDQUFqRCxFQUFvRCxNQUFNLFFBQU4sQ0FBN0QsRUFBOEUsQ0FBOUUsRUFBaUYsQ0FBakYsQ0FBWDs7O0FBSm9DLGdCQU9wQyxhQUFhLGNBQWIsRUFBNkI7QUFDN0IscUJBQUssS0FBTCxHQUFhLEtBQWIsQ0FENkI7YUFBakM7OztBQVB3QyxnQkFZcEMsTUFBTSxLQUFOLEVBQWE7QUFDYiwyQkFBVyx3QkFBYSxRQUFiLEVBQXVCLE1BQU0sS0FBTixDQUFsQyxDQURhO2FBQWpCOzs7QUFad0MsaUJBaUJ4QyxDQUFNLE9BQU4sR0FBZ0IsZ0JBQUssUUFBTCxFQUFlLE1BQU0sSUFBTixFQUFZLE1BQU0sRUFBTixFQUFVLE1BQU0sSUFBTixDQUFyRCxDQWpCd0M7U0FBNUM7OztBQWxCRixvQkF1Q0YsbUNBQWE7QUFDVCxZQUFJLEtBQUssS0FBTCxJQUFjLENBQUMsS0FBSyxXQUFMLEVBQWtCO0FBQ2pDLGdCQUFJLFlBQVksS0FBWixDQUQ2Qjs7QUFHakMsaUJBQUssSUFBSSxHQUFKLElBQVcsVUFBaEIsRUFBNEI7QUFDeEIsb0JBQUksV0FBVyxjQUFYLENBQTBCLEdBQTFCLENBQUosRUFBb0M7QUFDaEMsd0JBQUksa0JBQU0sS0FBSyxHQUFMLENBQU4sS0FBb0IsS0FBSyxHQUFMLElBQVksS0FBSyxNQUFNLEtBQU4sQ0FBakIsRUFBK0I7QUFDbkQsNkJBQUssTUFBTSxLQUFOLENBQUwsR0FEbUQ7QUFFbkQsb0NBQVksSUFBWixDQUZtRDtBQUduRCw2QkFBSyxXQUFXLEdBQVgsQ0FBTCxJQUhtRDtxQkFBdkQ7aUJBREo7YUFESjs7QUFVQSxnQkFBSSxDQUFDLFNBQUQsRUFBWTtBQUNaLHFCQUFLLFFBQUwsR0FEWTthQUFoQjtTQWJKOzs7QUF4Q0Ysb0JBMkRGLG1DQUFhO0FBQ1QsWUFBTSxTQUFTLEtBQUssTUFBTCxDQUROOztBQUdULGFBQUssT0FBTCxHQUFlLEtBQUssUUFBTCxHQUFnQixLQUFLLE9BQUwsQ0FIdEI7O0FBS1QsYUFBSyxJQUFJLEdBQUosSUFBVyxNQUFoQixFQUF3QjtBQUNwQixnQkFBSSxPQUFPLGNBQVAsQ0FBc0IsR0FBdEIsQ0FBSixFQUFnQztBQUM1QixvQkFBTSxRQUFRLE9BQU8sR0FBUCxDQUFSLENBRHNCOzJCQUVILENBQUMsTUFBTSxJQUFOLEVBQVksTUFBTSxFQUFOLEVBRlY7QUFFM0Isc0JBQU0sRUFBTixXQUYyQjtBQUVqQixzQkFBTSxJQUFOLFdBRmlCO2FBQWhDO1NBREo7O0FBT0EsZUFBTyxJQUFQLENBWlM7OztBQTNEWCxvQkEwRUYsNkJBQVU7QUFDTixhQUFLLGFBQUwsSUFBc0IsQ0FBQyxDQUFELENBRGhCO0FBRU4sZUFBTyxJQUFQLENBRk07OztBQTFFUixvQkErRUYsNkJBQVU7QUFDTixhQUFLLE9BQUwsR0FBZSxJQUFDLENBQUssYUFBTCxLQUF1QixDQUF2QixHQUE0QixDQUE3QixHQUFpQyxLQUFLLFFBQUwsQ0FEMUM7QUFFTixhQUFLLE9BQUwsR0FBZSx5QkFBZixDQUZNO0FBR04sZUFBTyxJQUFQLENBSE07OztBQS9FUixvQkFxRkYscUJBQUssVUFBVTtBQUNYLGFBQUssUUFBTCxDQUFjLEtBQUssUUFBTCxHQUFnQixRQUFoQixDQUFkLENBRFc7QUFFWCxlQUFPLElBQVAsQ0FGVzs7O0FBckZiLG9CQTBGRiw2QkFBUyxTQUFTO0FBQ2QsWUFBSSxDQUFDLEtBQUssUUFBTCxFQUFlO0FBQ2hCLGlCQUFLLElBQUwsR0FEZ0I7QUFFaEIsaUJBQUssV0FBTCxHQUFtQixJQUFuQixDQUZnQjtTQUFwQjs7QUFLQSxhQUFLLE9BQUwsR0FBZSxPQUFmLENBTmM7O0FBUWQsZUFBTyxJQUFQLENBUmM7OztXQTFGaEI7OztBQXNHTixNQUFNLFNBQU4sQ0FBZ0IsZ0JBQWhCLEdBQW1DLElBQW5DO0FBQ0EsTUFBTSxTQUFOLENBQWdCLFlBQWhCLEdBQStCLGlCQUFPLGtCQUFQLENBQTBCO0FBQ3JELFdBQU8sQ0FBUDtBQUNBLGNBQVUsR0FBVjtBQUNBLFVBQU0sdUJBQU8sT0FBUDtBQUNOLGFBQVMsQ0FBVDtBQUNBLFVBQU0sQ0FBTjtBQUNBLFdBQU8sQ0FBUDtBQUNBLFFBQUksQ0FBSjtBQUNBLFdBQU8sS0FBUDtDQVIyQixDQUEvQjtBQVVBLE1BQU0sU0FBTixDQUFnQixZQUFoQixHQUErQixpQkFBTyxrQkFBUCxDQUEwQjtBQUNyRCxXQUFPLElBQVA7QUFDQSxZQUFRLENBQVI7QUFDQSxVQUFNLENBQU47QUFDQSxVQUFNLENBQU47QUFDQSxVQUFNLENBQU47QUFDQSxlQUFXLENBQVg7QUFDQSxlQUFXLENBQVg7QUFDQSxlQUFXLENBQVg7QUFDQSxtQkFBZSxDQUFmO0FBQ0EsaUJBQWEsS0FBYjtBQUNBLFdBQU8sS0FBUDtBQUNBLGFBQVMsQ0FBVDtDQVoyQixDQUEvQjs7a0JBZWUiLCJmaWxlIjoiVHdlZW4uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdGlvbiBmcm9tICcuL0FjdGlvbic7XG5pbXBvcnQgZWFzaW5nIGZyb20gJy4vZWFzaW5nL3ByZXNldC1lYXNpbmcnO1xuaW1wb3J0IHsgY3VycmVudFRpbWUsIGlzTnVtIH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcbmltcG9ydCB7IGVhc2UsIHJlc3RyaWN0LCBnZXRQcm9ncmVzc0Zyb21WYWx1ZSwgc3RlcFByb2dyZXNzIH0gZnJvbSAnLi4vaW5jL2NhbGMnO1xuXG5jb25zdCBDT1VOVCA9ICdDb3VudCc7XG5jb25zdCBORVhUX1NURVBTID0ge1xuICAgIGxvb3A6ICdyZXN0YXJ0JyxcbiAgICB5b3lvOiAncmV2ZXJzZScsXG4gICAgZmxpcDogJ2ZsaXBWYWx1ZXMnXG59O1xuXG5jbGFzcyBUd2VlbiBleHRlbmRzIEFjdGlvbiB7XG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHN1cGVyLnN0YXJ0KCk7XG4gICAgICAgIHRoaXMuZWxhcHNlZCA9IDA7XG4gICAgICAgIHRoaXMuZmxpcENvdW50ID0gdGhpcy55b3lvQ291bnQgPSB0aGlzLmxvb3BDb3VudCA9IDA7XG4gICAgICAgIHRoaXMuaXNTY3J1YmJpbmcgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgb25VcGRhdGUodHdlZW4sIGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgICAgICAgY29uc3QgcHJvZ3Jlc3NUYXJnZXQgPSAodGhpcy5wbGF5RGlyZWN0aW9uID09PSAxKSA/IDEgOiAwO1xuXG4gICAgICAgIHRoaXMuZW5kZWQgPSB0cnVlO1xuXG4gICAgICAgIGlmICghdGhpcy5pc1NjcnViYmluZykge1xuICAgICAgICAgICAgdGhpcy5lbGFwc2VkICs9IChlbGFwc2VkICogdGhpcy5kaWxhdGUpICogdGhpcy5wbGF5RGlyZWN0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSB0aGlzLnZhbHVlS2V5c1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcblxuICAgICAgICAgICAgbGV0IHByb2dyZXNzID0gcmVzdHJpY3QoZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUodGhpcy5lbGFwc2VkIC0gdmFsdWUuZGVsYXksIDAsIHZhbHVlLmR1cmF0aW9uKSwgMCwgMSk7XG5cbiAgICAgICAgICAgIC8vIE1hcmsgVHdlZW4gYXMgTk9UIGVuZGVkIGlmIHN0aWxsIGluIHByb2dyZXNzXG4gICAgICAgICAgICBpZiAocHJvZ3Jlc3MgIT09IHByb2dyZXNzVGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTdGVwIHByb2dyZXNzIGlmIHdlJ3JlIHN0ZXBwaW5nXG4gICAgICAgICAgICBpZiAodmFsdWUuc3RlcHMpIHtcbiAgICAgICAgICAgICAgICBwcm9ncmVzcyA9IHN0ZXBQcm9ncmVzcyhwcm9ncmVzcywgdmFsdWUuc3RlcHMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBFYXNlIHByb2dyZXNzXG4gICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gZWFzZShwcm9ncmVzcywgdmFsdWUuZnJvbSwgdmFsdWUudG8sIHZhbHVlLmVhc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25GcmFtZUVuZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZW5kZWQgJiYgIXRoaXMuaXNTY3J1YmJpbmcpIHtcbiAgICAgICAgICAgIGxldCBzdGVwVGFrZW4gPSBmYWxzZTtcblxuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIE5FWFRfU1RFUFMpIHtcbiAgICAgICAgICAgICAgICBpZiAoTkVYVF9TVEVQUy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc051bSh0aGlzW2tleV0pICYmIHRoaXNba2V5XSA+IHRoaXNba2V5ICsgQ09VTlRdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2tleSArIENPVU5UXSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RlcFRha2VuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbTkVYVF9TVEVQU1trZXldXSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXN0ZXBUYWtlbikge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcGxldGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZsaXBWYWx1ZXMoKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMudmFsdWVzO1xuXG4gICAgICAgIHRoaXMuZWxhcHNlZCA9IHRoaXMuZHVyYXRpb24gLSB0aGlzLmVsYXBzZWQ7XG5cbiAgICAgICAgZm9yIChsZXQga2V5IGluIHZhbHVlcykge1xuICAgICAgICAgICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB2YWx1ZXNba2V5XTtcbiAgICAgICAgICAgICAgICBbdmFsdWUudG8sIHZhbHVlLmZyb21dID0gW3ZhbHVlLmZyb20sIHZhbHVlLnRvXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJldmVyc2UoKSB7XG4gICAgICAgIHRoaXMucGxheURpcmVjdGlvbiAqPSAtMTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmVzdGFydCgpIHtcbiAgICAgICAgdGhpcy5lbGFwc2VkID0gKHRoaXMucGxheURpcmVjdGlvbiA9PT0gMSkgPyAwIDogdGhpcy5kdXJhdGlvbjtcbiAgICAgICAgdGhpcy5zdGFydGVkID0gY3VycmVudFRpbWUoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2Vlayhwcm9ncmVzcykge1xuICAgICAgICB0aGlzLnNlZWtUaW1lKHRoaXMuZHVyYXRpb24gKiBwcm9ncmVzcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNlZWtUaW1lKGVsYXBzZWQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzQWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLm9uY2UoKTtcbiAgICAgICAgICAgIHRoaXMuaXNTY3J1YmJpbmcgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5lbGFwc2VkID0gZWxhcHNlZDtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG5cblR3ZWVuLnByb3RvdHlwZS5kZWZhdWx0VmFsdWVQcm9wID0gJ3RvJztcblR3ZWVuLnByb3RvdHlwZS5kZWZhdWx0VmFsdWUgPSBBY3Rpb24uZXh0ZW5kRGVmYXVsdFZhbHVlKHtcbiAgICBkZWxheTogMCxcbiAgICBkdXJhdGlvbjogMzAwLFxuICAgIGVhc2U6IGVhc2luZy5lYXNlT3V0LFxuICAgIGVsYXBzZWQ6IDAsXG4gICAgZnJvbTogMCxcbiAgICBzdGVwczogMCxcbiAgICB0bzogMCxcbiAgICByb3VuZDogZmFsc2Vcbn0pO1xuVHdlZW4ucHJvdG90eXBlLmRlZmF1bHRQcm9wcyA9IEFjdGlvbi5leHRlbmREZWZhdWx0UHJvcHMoe1xuICAgIGJsZW5kOiB0cnVlLFxuICAgIGRpbGF0ZTogMSxcbiAgICBsb29wOiAwLFxuICAgIHlveW86IDAsXG4gICAgZmxpcDogMCxcbiAgICBsb29wQ291bnQ6IDAsXG4gICAgeW95b0NvdW50OiAwLFxuICAgIGZsaXBDb3VudDogMCxcbiAgICBwbGF5RGlyZWN0aW9uOiAxLFxuICAgIGlzU2NydWJiaW5nOiBmYWxzZSxcbiAgICBlbmRlZDogZmFsc2UsXG4gICAgZWxhcHNlZDogMFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFR3ZWVuO1xuIl19

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _Action2 = __webpack_require__(3);
	
	var _Action3 = _interopRequireDefault(_Action2);
	
	var _calc = __webpack_require__(19);
	
	var _utils = __webpack_require__(20);
	
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
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _Action2 = __webpack_require__(3);
	
	var _Action3 = _interopRequireDefault(_Action2);
	
	var _Pointer = __webpack_require__(37);
	
	var _Pointer2 = _interopRequireDefault(_Pointer);
	
	var _calc = __webpack_require__(19);
	
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
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _loop = __webpack_require__(38);
	
	var loop = _interopRequireWildcard(_loop);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*
	                                                                                                                                                              Base Task class for creating a task on the main render loop.
	                                                                                                                                                          */
	
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
	
	    Task.prototype._onActivate = function _onActivate() {
	        this.onCleanup = this._onCleanup;
	    };
	
	    Task.prototype._onCleanup = function _onCleanup() {
	        this.onCleanup = undefined;
	        loop.deactivate(this.id);
	    };
	
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
	
	        this.onCleanup = this.onActivate = undefined;
	        this.isComplete = false;
	
	        // Private `onStart`
	        if (this._onStart) {
	            this._onStart(this);
	        }
	
	        // Public `onStart`
	        if (this.onStart) {
	            this.onStart(this);
	        }
	
	        return this;
	    };
	
	    Task.prototype.stop = function stop() {
	        loop.deactivate(this.id);
	
	        // Private `onStop`
	        if (this._onStop) {
	            this._onStop(this);
	        }
	
	        // Public `onStop`
	        if (this.onStop) {
	            this.onStop(this);
	        }
	
	        return this;
	    };
	
	    Task.prototype.once = function once() {
	        loop.activate(this.id, this);
	        this.onActivate = this._onActivate;
	        this.onCleanup = undefined;
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90YXNrL1Rhc2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7SUFHWTs7Ozs7Ozs7OztJQUVTO0FBQ2pCLGFBRGlCLElBQ2pCLENBQVksS0FBWixFQUFtQjs4QkFERixNQUNFOztBQUNmLGFBQUssRUFBTCxHQUFVLEtBQUssU0FBTCxFQUFWLENBRGU7QUFFZixhQUFLLFFBQUwsR0FBZ0IsS0FBaEIsQ0FGZTs7QUFJZixZQUFJLEtBQUssWUFBTCxFQUFtQjtBQUNuQixpQkFBSyxJQUFJLEdBQUosSUFBVyxLQUFLLFlBQUwsRUFBbUI7QUFDL0Isb0JBQUksS0FBSyxZQUFMLENBQWtCLGNBQWxCLENBQWlDLEdBQWpDLENBQUosRUFBMkM7QUFDdkMseUJBQUssR0FBTCxJQUFZLEtBQUssWUFBTCxDQUFrQixHQUFsQixDQUFaLENBRHVDO2lCQUEzQzthQURKO1NBREo7O0FBUUEsYUFBSyxHQUFMLENBQVMsS0FBVCxFQVplO0tBQW5COztBQURpQixtQkFnQmpCLHFDQUFjO0FBQ1YsYUFBSyxTQUFMLEdBQWlCLEtBQUssVUFBTCxDQURQOzs7QUFoQkcsbUJBb0JqQixtQ0FBYTtBQUNULGFBQUssU0FBTCxHQUFpQixTQUFqQixDQURTO0FBRVQsYUFBSyxVQUFMLENBQWdCLEtBQUssRUFBTCxDQUFoQixDQUZTOzs7QUFwQkksbUJBeUJqQixtQkFBSSxPQUFPO0FBQ1AsYUFBSyxJQUFJLEdBQUosSUFBVyxLQUFoQixFQUF1QjtBQUNuQixnQkFBSSxNQUFNLGNBQU4sQ0FBcUIsR0FBckIsQ0FBSixFQUErQjtBQUMzQixxQkFBSyxHQUFMLElBQVksTUFBTSxHQUFOLENBQVosQ0FEMkI7YUFBL0I7U0FESjs7QUFNQSxlQUFPLElBQVAsQ0FQTzs7O0FBekJNLG1CQW1DakIseUJBQVE7QUFDSixhQUFLLFFBQUwsQ0FBYyxLQUFLLEVBQUwsRUFBUyxJQUF2QixFQURJOztBQUdKLGFBQUssU0FBTCxHQUFpQixLQUFLLFVBQUwsR0FBa0IsU0FBbEIsQ0FIYjtBQUlKLGFBQUssVUFBTCxHQUFrQixLQUFsQjs7O0FBSkksWUFPQSxLQUFLLFFBQUwsRUFBZTtBQUNmLGlCQUFLLFFBQUwsQ0FBYyxJQUFkLEVBRGU7U0FBbkI7OztBQVBJLFlBWUEsS0FBSyxPQUFMLEVBQWM7QUFDZCxpQkFBSyxPQUFMLENBQWEsSUFBYixFQURjO1NBQWxCOztBQUlBLGVBQU8sSUFBUCxDQWhCSTs7O0FBbkNTLG1CQXNEakIsdUJBQU87QUFDSCxhQUFLLFVBQUwsQ0FBZ0IsS0FBSyxFQUFMLENBQWhCOzs7QUFERyxZQUlDLEtBQUssT0FBTCxFQUFjO0FBQ2QsaUJBQUssT0FBTCxDQUFhLElBQWIsRUFEYztTQUFsQjs7O0FBSkcsWUFTQyxLQUFLLE1BQUwsRUFBYTtBQUNiLGlCQUFLLE1BQUwsQ0FBWSxJQUFaLEVBRGE7U0FBakI7O0FBSUEsZUFBTyxJQUFQLENBYkc7OztBQXREVSxtQkFzRWpCLHVCQUFPO0FBQ0gsYUFBSyxRQUFMLENBQWMsS0FBSyxFQUFMLEVBQVMsSUFBdkIsRUFERztBQUVILGFBQUssVUFBTCxHQUFrQixLQUFLLFdBQUwsQ0FGZjtBQUdILGFBQUssU0FBTCxHQUFpQixTQUFqQixDQUhHO0FBSUgsZUFBTyxJQUFQLENBSkc7OztBQXRFVSxtQkE2RWpCLCtCQUFXO0FBQ1AsYUFBSyxJQUFMLEdBRE87O0FBR1AsWUFBSSxLQUFLLFVBQUwsRUFBaUI7QUFDakIsaUJBQUssVUFBTCxDQUFnQixJQUFoQixFQURpQjtTQUFyQjs7Ozs7Ozs7OztBQWhGYSxtQkE0RmpCLDJCQUFRLE9BQU87WUFDSCxLQUEwQixLQUExQixHQURHOztZQUNJLDBDQUFtQixjQUR2Qjs7QUFFWCxlQUFPLElBQUksS0FBSyxXQUFMLGNBQXNCLGdCQUFtQixNQUE3QyxDQUFQLENBRlc7OztXQTVGRSIsImZpbGUiOiJUYXNrLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gICAgQmFzZSBUYXNrIGNsYXNzIGZvciBjcmVhdGluZyBhIHRhc2sgb24gdGhlIG1haW4gcmVuZGVyIGxvb3AuXG4qL1xuaW1wb3J0ICogYXMgbG9vcCBmcm9tICcuL2xvb3AnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICB0aGlzLmlkID0gbG9vcC5nZXRUYXNrSWQoKTtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIGlmICh0aGlzLmRlZmF1bHRQcm9wcykge1xuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMuZGVmYXVsdFByb3BzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGVmYXVsdFByb3BzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpc1trZXldID0gdGhpcy5kZWZhdWx0UHJvcHNba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldChwcm9wcyk7XG4gICAgfVxuXG4gICAgX29uQWN0aXZhdGUoKSB7XG4gICAgICAgIHRoaXMub25DbGVhbnVwID0gdGhpcy5fb25DbGVhbnVwO1xuICAgIH1cblxuICAgIF9vbkNsZWFudXAoKSB7XG4gICAgICAgIHRoaXMub25DbGVhbnVwID0gdW5kZWZpbmVkO1xuICAgICAgICBsb29wLmRlYWN0aXZhdGUodGhpcy5pZCk7XG4gICAgfVxuXG4gICAgc2V0KHByb3BzKSB7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBwcm9wcykge1xuICAgICAgICAgICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSBwcm9wc1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGxvb3AuYWN0aXZhdGUodGhpcy5pZCwgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5vbkNsZWFudXAgPSB0aGlzLm9uQWN0aXZhdGUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuaXNDb21wbGV0ZSA9IGZhbHNlO1xuXG4gICAgICAgIC8vIFByaXZhdGUgYG9uU3RhcnRgXG4gICAgICAgIGlmICh0aGlzLl9vblN0YXJ0KSB7XG4gICAgICAgICAgICB0aGlzLl9vblN0YXJ0KHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUHVibGljIGBvblN0YXJ0YFxuICAgICAgICBpZiAodGhpcy5vblN0YXJ0KSB7XG4gICAgICAgICAgICB0aGlzLm9uU3RhcnQodGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzdG9wKCkge1xuICAgICAgICBsb29wLmRlYWN0aXZhdGUodGhpcy5pZCk7XG5cbiAgICAgICAgLy8gUHJpdmF0ZSBgb25TdG9wYFxuICAgICAgICBpZiAodGhpcy5fb25TdG9wKSB7XG4gICAgICAgICAgICB0aGlzLl9vblN0b3AodGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQdWJsaWMgYG9uU3RvcGBcbiAgICAgICAgaWYgKHRoaXMub25TdG9wKSB7XG4gICAgICAgICAgICB0aGlzLm9uU3RvcCh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG9uY2UoKSB7XG4gICAgICAgIGxvb3AuYWN0aXZhdGUodGhpcy5pZCwgdGhpcyk7XG4gICAgICAgIHRoaXMub25BY3RpdmF0ZSA9IHRoaXMuX29uQWN0aXZhdGU7XG4gICAgICAgIHRoaXMub25DbGVhbnVwID0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBjb21wbGV0ZSgpIHtcbiAgICAgICAgdGhpcy5zdG9wKCk7XG5cbiAgICAgICAgaWYgKHRoaXMub25Db21wbGV0ZSkge1xuICAgICAgICAgICAgdGhpcy5vbkNvbXBsZXRlKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgIyBFeHRlbmQgdGhpcyBQcm9jZXNzIHdpdGggbmV3IHByb3BlcnRpZXNcbiAgICAgICAgIyMgUmV0dXJucyBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBQcm9jZXNzJ3MgYHByb3RvdHlwZWAgd2l0aCBleGlzdGluZyBhbmQgbmV3IHByb3BlcnRpZXNcblxuICAgICAgICBAcGFyYW0gW29iamVjdF0gKG9wdGlvbmFsKVxuICAgICAgICBAcmV0dXJuIFtQcm9jZXNzXVxuICAgICovXG4gICAgaW5oZXJpdChwcm9wcykge1xuICAgICAgICBjb25zdCB7IGlkLCAuLi5pbmhlcml0ZWRQcm9wcyB9ID0gdGhpcztcbiAgICAgICAgcmV0dXJuIG5ldyB0aGlzLmNvbnN0cnVjdG9yKHsgLi4uaW5oZXJpdGVkUHJvcHMsIC4uLnByb3BzIH0pO1xuICAgIH1cbn0iXX0=

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _Action2 = __webpack_require__(3);
	
	var _Action3 = _interopRequireDefault(_Action2);
	
	var _generateBlendCurve = __webpack_require__(39);
	
	var _generateBlendCurve2 = _interopRequireDefault(_generateBlendCurve);
	
	var _bindAdapter = __webpack_require__(40);
	
	var _bindAdapter2 = _interopRequireDefault(_bindAdapter);
	
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
	
	    Flow.prototype.set = function set(props, instant) {
	        if (!instant && this.behaviour) {
	            var action = this.behaviour(props);
	
	            if (action) {
	                if (action.length) {
	                    for (var i = 0; i < action.length; i++) {
	                        this.start(action[i]);
	                    }
	                } else {
	                    this.start(action);
	                }
	            }
	        } else {
	            // Bind `adapter` to an adapter, if not already
	            if (props.adapter && !props.adapter.setter) {
	                // Ducktypish check for Adapter
	                props.adapter = (0, _bindAdapter2.default)(props.adapter);
	            }
	
	            _Action.prototype.set.call(this, props);
	            this.once();
	        }
	
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
	
	    Flow.prototype.start = function start(action) {
	        _Action.prototype.start.call(this);
	
	        if (!this.isActive) {
	            for (var key in this.activeActions) {
	                if (this.activeActions.hasOwnProperty(key)) {
	                    var _action = this.activeActions[key];
	                    if (!_action.isActive) {
	                        _action.start();
	                    }
	                }
	            }
	        }
	
	        if (action) {
	            if (action.flow !== this) {
	                action = this.connect(action);
	            }
	
	            action.start();
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
	
	            if (driver.blendCurve) {
	                newCurrent = driver.blendCurve();
	            }
	
	            value.current = newCurrent;
	        }
	
	        return _Action.prototype.willRender.call(this, actor, frameStamp, elapsed);
	    };
	
	    Flow.prototype.onRender = function onRender(_ref) {
	        var state = _ref.state;
	        var adapter = _ref.adapter;
	
	        if (adapter && adapter.set) {
	            adapter.set(state);
	        }
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
	            if (action.blend && value.numDrivers) {
	                action.blendCurve = (0, _generateBlendCurve2.default)(this.activeActions[value.drivers[0]], action, key);
	            } else {
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
	//# sourceMappingURL=data:application/json;base64,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LDhCQUFNLEtBQU4sWUFEdUI7U0FBM0I7Ozs7Ozs7O0FBeEpGLG1CQWtLRiw2Q0FBaUIsSUFBSTtBQUNqQixZQUFNLFNBQVMsS0FBSyxhQUFMLENBQW1CLEVBQW5CLENBQVQsQ0FEVzs7QUFHakIsWUFBSSxNQUFKLEVBQVk7QUFDUixpQkFBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksT0FBTyxZQUFQLEVBQXFCLEdBQXpDLEVBQThDO0FBQzFDLG9CQUFNLE1BQU0sT0FBTyxTQUFQLENBQWlCLENBQWpCLENBQU4sQ0FEb0M7QUFFMUMsb0JBQU0sUUFBUSxLQUFLLE1BQUwsQ0FBWSxHQUFaLENBQVIsQ0FGb0M7QUFHMUMsb0JBQU0sY0FBYyxNQUFNLE9BQU4sQ0FBYyxPQUFkLENBQXNCLEVBQXRCLENBQWQsQ0FIb0M7O0FBSzFDLG9CQUFJLGdCQUFnQixDQUFDLENBQUQsRUFBSTtBQUNwQiwwQkFBTSxPQUFOLENBQWMsTUFBZCxDQUFxQixXQUFyQixFQUFrQyxDQUFsQyxFQURvQjtBQUVwQiwwQkFBTSxVQUFOLEdBRm9CO2lCQUF4QjthQUxKOztBQVdBLG1CQUFPLEtBQUssYUFBTCxDQUFtQixFQUFuQixDQUFQLENBWlE7QUFhUixpQkFBSyxnQkFBTCxHQWJRO1NBQVo7O0FBZ0JBLFlBQUksQ0FBQyxLQUFLLGdCQUFMLElBQXlCLEtBQUssUUFBTCxFQUFlO0FBQ3pDLDhCQUFNLElBQU4sWUFEeUM7U0FBN0M7OztXQXJMRjs7O0FBMkxOLEtBQUssU0FBTCxDQUFlLFlBQWYsR0FBOEIsaUJBQU8sa0JBQVAsQ0FBMEI7QUFDcEQsYUFBUyxFQUFUO0FBQ0EsZ0JBQVksQ0FBWjtDQUYwQixDQUE5Qjs7a0JBS2UiLCJmaWxlIjoiRmxvdy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWN0aW9uIGZyb20gJy4uL2FjdGlvbnMvQWN0aW9uJztcbmltcG9ydCBnZW5lcmF0ZUJsZW5kQ3VydmUgZnJvbSAnLi9mbG93L2dlbmVyYXRlLWJsZW5kLWN1cnZlJztcbmltcG9ydCBiaW5kQWRhcHRlciBmcm9tICcuLi9pbmMvYmluZC1hZGFwdGVyJztcblxuLypcbiAgICBNZXRob2RzIGFuZCBwcm9wZXJ0aWVzIHRvIGFkZCB0byBib3VuZCBBY3Rpb25zXG4qL1xuY29uc3QgYm91bmRPblN0YXJ0ID0gKGFjdGlvbikgPT4gYWN0aW9uLmZsb3cuYWN0aXZhdGVBY3Rpb24oYWN0aW9uLmlkLCBhY3Rpb24pO1xuY29uc3QgYm91bmRPblN0b3AgPSAoYWN0aW9uKSA9PiBhY3Rpb24uZmxvdy5kZWFjdGl2YXRlQWN0aW9uKGFjdGlvbi5pZCk7XG5jb25zdCBib3VuZFByb3BzID0gKGZsb3cpID0+ICh7XG4gICAgZmxvdyxcbiAgICBpc1ByaW9yaXR5OiB0cnVlLFxuICAgIG9uQWN0aXZhdGU6IGJvdW5kT25TdGFydCxcbiAgICBvbkRlYWN0aXZhdGU6IGJvdW5kT25TdG9wXG59KTtcblxuY2xhc3MgRmxvdyBleHRlbmRzIEFjdGlvbiB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLmFjdGl2ZUFjdGlvbnMgPSB7fTtcbiAgICAgICAgdGhpcy5udW1BY3RpdmVBY3Rpb25zID0gMDtcbiAgICB9XG5cbiAgICBzZXQocHJvcHMsIGluc3RhbnQpIHtcbiAgICAgICAgaWYgKCFpbnN0YW50ICYmIHRoaXMuYmVoYXZpb3VyKSB7XG4gICAgICAgICAgICBjb25zdCBhY3Rpb24gPSB0aGlzLmJlaGF2aW91cihwcm9wcyk7XG5cbiAgICAgICAgICAgIGlmIChhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9uLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFjdGlvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydChhY3Rpb25baV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydChhY3Rpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEJpbmQgYGFkYXB0ZXJgIHRvIGFuIGFkYXB0ZXIsIGlmIG5vdCBhbHJlYWR5XG4gICAgICAgICAgICBpZiAocHJvcHMuYWRhcHRlciAmJiAhcHJvcHMuYWRhcHRlci5zZXR0ZXIpIHtcbiAgICAgICAgICAgICAgICAvLyBEdWNrdHlwaXNoIGNoZWNrIGZvciBBZGFwdGVyXG4gICAgICAgICAgICAgICAgcHJvcHMuYWRhcHRlciA9IGJpbmRBZGFwdGVyKHByb3BzLmFkYXB0ZXIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdXBlci5zZXQocHJvcHMpO1xuICAgICAgICAgICAgdGhpcy5vbmNlKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBCaW5kIEFjdGlvbiB0byBBY3RvclxuICAgICovXG4gICAgY29ubmVjdChhY3Rpb24pIHtcbiAgICAgICAgY29uc3QgaW5oZXJpdGVkQWN0aW9uID0gYWN0aW9uLmluaGVyaXQoKTtcbiAgICAgICAgbGV0IG5ld1ZhbHVlcyA9IHt9O1xuICAgICAgICBsZXQgaGFzTmV3VmFsdWVzID0gZmFsc2U7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHZhbHVlcyBvbiBhY3RvciB0aGF0IGRvbid0IGV4aXN0XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBpbmhlcml0ZWRBY3Rpb24udmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAoaW5oZXJpdGVkQWN0aW9uLnZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmICF0aGlzLnZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgbmV3VmFsdWVzW2tleV0gPSB7fTtcbiAgICAgICAgICAgICAgICBoYXNOZXdWYWx1ZXMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhhc05ld1ZhbHVlcykge1xuICAgICAgICAgICAgdGhpcy5zZXQoeyB2YWx1ZXM6IG5ld1ZhbHVlcyB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbmhlcml0ZWRBY3Rpb24uc2V0KGJvdW5kUHJvcHModGhpcywgaW5oZXJpdGVkQWN0aW9uKSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgU3RhcnQgQWN0b3JcblxuICAgICAgICBJZiBBY3Rpb24gaXMgcHJvdmlkZWQsIGJpbmQgaXQgdG8gdGhpcyBBY3RvciBhbmQgc3RhcnRcblxuICAgICAgICBAcGFyYW0gKG9wdGlvbmFsKSBbQWN0aW9uXVxuICAgICovXG4gICAgc3RhcnQoYWN0aW9uKSB7XG4gICAgICAgIHN1cGVyLnN0YXJ0KCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLmlzQWN0aXZlKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5hY3RpdmVBY3Rpb25zKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlQWN0aW9ucy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFjdGlvbiA9IHRoaXMuYWN0aXZlQWN0aW9uc1trZXldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWFjdGlvbi5pc0FjdGl2ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYWN0aW9uKSB7XG4gICAgICAgICAgICBpZiAoYWN0aW9uLmZsb3cgIT09IHRoaXMpIHtcbiAgICAgICAgICAgICAgICBhY3Rpb24gPSB0aGlzLmNvbm5lY3QoYWN0aW9uKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYWN0aW9uLnN0YXJ0KCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzdG9wKCkge1xuICAgICAgICBzdXBlci5zdG9wKCk7XG5cbiAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMuYWN0aXZlQWN0aW9ucykge1xuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlQWN0aW9ucy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVBY3Rpb25zW2tleV0uc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgd2lsbFJlbmRlcihhY3RvciwgZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHRoaXMudmFsdWVLZXlzW2ldO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuICAgICAgICAgICAgY29uc3QgZHJpdmVyID0gdmFsdWUubnVtRHJpdmVycyA/IHRoaXMuYWN0aXZlQWN0aW9uc1t2YWx1ZS5kcml2ZXJzWzBdXSA6IGZhbHNlO1xuICAgICAgICAgICAgbGV0IG5ld0N1cnJlbnQgPSB2YWx1ZS5udW1Ecml2ZXJzID8gZHJpdmVyLnZhbHVlc1trZXldLmN1cnJlbnQgOiB2YWx1ZS5jdXJyZW50O1xuXG4gICAgICAgICAgICBpZiAoZHJpdmVyLmJsZW5kQ3VydmUpIHtcbiAgICAgICAgICAgICAgICBuZXdDdXJyZW50ID0gZHJpdmVyLmJsZW5kQ3VydmUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IG5ld0N1cnJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VwZXIud2lsbFJlbmRlcihhY3RvciwgZnJhbWVTdGFtcCwgZWxhcHNlZCk7XG4gICAgfVxuXG4gICAgb25SZW5kZXIoeyBzdGF0ZSwgYWRhcHRlciB9KSB7XG4gICAgICAgIGlmIChhZGFwdGVyICYmIGFkYXB0ZXIuc2V0KSB7XG4gICAgICAgICAgICBhZGFwdGVyLnNldChzdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBBZGQgYWN0aXZlIGFjdGlvbnNcblxuICAgICAgICBAcGFyYW0gW251bWJlcl1cbiAgICAgICAgQHBhcmFtIFtBY3Rpb25dXG4gICAgKi9cbiAgICBhY3RpdmF0ZUFjdGlvbihpZCwgYWN0aW9uKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlQWN0aW9uc1tpZF0gPSBhY3Rpb247XG4gICAgICAgIHRoaXMubnVtQWN0aXZlQWN0aW9ucysrO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWN0aW9uLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBhY3Rpb24udmFsdWVLZXlzW2ldO1xuICAgICAgICAgICAgY29uc3QgYWN0aW9uVmFsdWUgPSBhY3Rpb24udmFsdWVzW2tleV07XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG5cbiAgICAgICAgICAgIC8vIElmIHdlJ3JlIGJsZW5kaW5nIHRoaXMgYWN0aW9uLCBhbmQgdGhlcmUncyBvbiBhbHJlYWR5IGluIHByb2dyZXNzXG4gICAgICAgICAgICBpZiAoYWN0aW9uLmJsZW5kICYmIHZhbHVlLm51bURyaXZlcnMpIHtcbiAgICAgICAgICAgICAgICBhY3Rpb24uYmxlbmRDdXJ2ZSA9IGdlbmVyYXRlQmxlbmRDdXJ2ZSh0aGlzLmFjdGl2ZUFjdGlvbnNbdmFsdWUuZHJpdmVyc1swXV0sIGFjdGlvbiwga2V5KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gUGFzcyBBY3RvciB2YWx1ZSBwcm9wZXJ0aWVzIHRvIEFjdGlvblxuICAgICAgICAgICAgICAgIGFjdGlvblZhbHVlLnZlbG9jaXR5ICs9IHZhbHVlLnZlbG9jaXR5O1xuICAgICAgICAgICAgICAgIGFjdGlvblZhbHVlLmZyb20gPSBhY3Rpb25WYWx1ZS5jdXJyZW50ID0gdmFsdWUuY3VycmVudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFsdWUuZHJpdmVycyA9IFtpZF07XG4gICAgICAgICAgICB2YWx1ZS5udW1Ecml2ZXJzID0gdmFsdWUuZHJpdmVycy5sZW5ndGg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5udW1BY3RpdmVBY3Rpb25zKSB7XG4gICAgICAgICAgICBzdXBlci5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgUmVtb3ZlIGFjdGl2ZSBhY3Rpb25zXG5cbiAgICAgICAgQHBhcmFtIFtudW1iZXJdXG4gICAgKi9cbiAgICBkZWFjdGl2YXRlQWN0aW9uKGlkKSB7XG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IHRoaXMuYWN0aXZlQWN0aW9uc1tpZF07XG5cbiAgICAgICAgaWYgKGFjdGlvbikge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY3Rpb24ubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBhY3Rpb24udmFsdWVLZXlzW2ldO1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcbiAgICAgICAgICAgICAgICBjb25zdCBkcml2ZXJJbmRleCA9IHZhbHVlLmRyaXZlcnMuaW5kZXhPZihpZCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoZHJpdmVySW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLmRyaXZlcnMuc3BsaWNlKGRyaXZlckluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUubnVtRHJpdmVycy0tO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuYWN0aXZlQWN0aW9uc1tpZF07XG4gICAgICAgICAgICB0aGlzLm51bUFjdGl2ZUFjdGlvbnMtLTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5udW1BY3RpdmVBY3Rpb25zICYmIHRoaXMuaXNBY3RpdmUpIHtcbiAgICAgICAgICAgIHN1cGVyLnN0b3AoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuRmxvdy5wcm90b3R5cGUuZGVmYXVsdFZhbHVlID0gQWN0aW9uLmV4dGVuZERlZmF1bHRWYWx1ZSh7XG4gICAgZHJpdmVyczogW10sXG4gICAgbnVtRHJpdmVyczogMFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEZsb3c7XG4iXX0=

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _Task2 = __webpack_require__(7);
	
	var _Task3 = _interopRequireDefault(_Task2);
	
	var _utils = __webpack_require__(20);
	
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
	
	var _utils = __webpack_require__(20);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var DEFAULT_INTERVAL = 100;
	
	exports.default = function (tweens, props) {
	    var propsIsDuration = (0, _utils.isNum)(props);
	    var interval = propsIsDuration ? props : props ? props.interval || DEFAULT_INTERVAL : DEFAULT_INTERVAL;
	    var timelineDefinition = tweens.map(function (tween) {
	        return { tween: tween, at: interval };
	    });
	
	    return (0, _timeline2.default)(timelineDefinition, props);
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvc3RhZ2dlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFHQSxJQUFNLG1CQUFtQixHQUFuQjs7a0JBRVMsVUFBQyxNQUFELEVBQVMsS0FBVCxFQUFtQjtBQUM5QixRQUFNLGtCQUFrQixrQkFBTSxLQUFOLENBQWxCLENBRHdCO0FBRTlCLFFBQU0sV0FBVyxrQkFBa0IsS0FBbEIsR0FBMEIsUUFBUSxNQUFNLFFBQU4sSUFBa0IsZ0JBQWxCLEdBQXFDLGdCQUE3QyxDQUZiO0FBRzlCLFFBQU0scUJBQXFCLE9BQU8sR0FBUCxDQUFXLFVBQUMsS0FBRDtlQUFZLEVBQUUsWUFBRixFQUFTLElBQUksUUFBSjtLQUFyQixDQUFoQyxDQUh3Qjs7QUFLOUIsV0FBTyx3QkFBUyxrQkFBVCxFQUE2QixLQUE3QixDQUFQLENBTDhCO0NBQW5CIiwiZmlsZSI6InN0YWdnZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRpbWVsaW5lIGZyb20gJy4vdGltZWxpbmUnO1xuaW1wb3J0IHsgaXNOdW0gfSBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgREVGQVVMVF9JTlRFUlZBTCA9IDEwMDtcblxuZXhwb3J0IGRlZmF1bHQgKHR3ZWVucywgcHJvcHMpID0+IHtcbiAgICBjb25zdCBwcm9wc0lzRHVyYXRpb24gPSBpc051bShwcm9wcyk7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBwcm9wc0lzRHVyYXRpb24gPyBwcm9wcyA6IHByb3BzID8gcHJvcHMuaW50ZXJ2YWwgfHwgREVGQVVMVF9JTlRFUlZBTCA6IERFRkFVTFRfSU5URVJWQUw7XG4gICAgY29uc3QgdGltZWxpbmVEZWZpbml0aW9uID0gdHdlZW5zLm1hcCgodHdlZW4pID0+ICh7IHR3ZWVuLCBhdDogaW50ZXJ2YWwgfSkpO1xuXG4gICAgcmV0dXJuIHRpbWVsaW5lKHRpbWVsaW5lRGVmaW5pdGlvbiwgcHJvcHMpO1xufTsiXX0=

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	exports.default = timeline;
	
	var _Tween = __webpack_require__(4);
	
	var _Tween2 = _interopRequireDefault(_Tween);
	
	var _presetEasing = __webpack_require__(17);
	
	var _presetEasing2 = _interopRequireDefault(_presetEasing);
	
	var _calc = __webpack_require__(19);
	
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
	
	        currentPlayhead += defIsObj && def.offset ? def.at || (0, _calc.relativeValue)(currentPlayhead, def.offset) : 0;
	
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
	
	        currentPlayhead += tween.duration;
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvdGltZWxpbmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBK0R3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE1Q3hCLElBQU0sVUFBVSxVQUFDLElBQUQsRUFBVTtBQUN0QixRQUFNLFdBQVcsRUFBWCxDQURnQjtBQUV0QixRQUFNLFVBQVUsS0FBSyxNQUFMLENBRk07QUFHdEIsUUFBSSxrQkFBa0IsQ0FBbEIsQ0FIa0I7OzBCQUtiO0FBQ0wsWUFBTSxNQUFNLEtBQUssQ0FBTCxDQUFOO0FBQ04sWUFBTSxXQUFXLElBQUksS0FBSixHQUFZLElBQVosR0FBbUIsS0FBbkI7QUFDakIsWUFBTSxRQUFRLFdBQWEsSUFBSSxLQUFKLEdBQVksR0FBekI7O0FBRWQsMkJBQW9CLFFBQUMsSUFBWSxJQUFJLE1BQUosR0FDN0IsSUFBSSxFQUFKLElBQVUseUJBQWMsZUFBZCxFQUErQixJQUFJLE1BQUosQ0FBekMsR0FBdUQsQ0FEdkM7O0FBR3BCLFlBQUksV0FBVyxDQUFYO0FBQ0osYUFBSyxJQUFJLEdBQUosSUFBVyxNQUFNLE1BQU4sRUFBYztBQUMxQixnQkFBSSxNQUFNLE1BQU4sQ0FBYSxjQUFiLENBQTRCLEdBQTVCLENBQUosRUFBc0M7QUFDbEMsb0JBQU0sUUFBUSxNQUFNLE1BQU4sQ0FBYSxHQUFiLENBQVIsQ0FENEI7QUFFbEMsMkJBQVcsS0FBSyxHQUFMLENBQVMsUUFBVCxFQUFtQixNQUFNLFFBQU4sQ0FBOUIsQ0FGa0M7YUFBdEM7U0FESjs7QUFPQSxpQkFBUyxJQUFULENBQWM7QUFDVixrQkFBTSxlQUFOO0FBQ0Esc0JBQVUsUUFBVjtBQUNBLGtCQUFNLFVBQUMsSUFBRDt1QkFBVSxNQUFNLFFBQU4sQ0FBZSxJQUFmO2FBQVY7U0FIVjs7QUFNQSwyQkFBbUIsTUFBTSxRQUFOO01BM0JEOztBQUt0QixTQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxPQUFKLEVBQWEsR0FBN0IsRUFBa0M7Y0FBekIsR0FBeUI7S0FBbEM7O0FBeUJBLFdBQU8sRUFBRSxXQUFXLGVBQVgsRUFBNEIsa0JBQTlCLEVBQVAsQ0E5QnNCO0NBQVY7O0FBaUNoQixJQUFNLFlBQVksZ0JBQW9EO1FBQWpELHlCQUFpRDtRQUF2QyxxQ0FBdUM7UUFBdkIscUJBQXVCO1FBQWYseUJBQWU7O0FBQ2xFLFNBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLGNBQUosRUFBb0IsR0FBcEMsRUFBeUM7QUFDckMsWUFBTSxTQUFRLFNBQVMsQ0FBVCxDQUFSLENBRCtCO0FBRXJDLFlBQU0sWUFBWSxNQUFDLENBQU8sQ0FBUCxDQUFTLE9BQVQsR0FBbUIsUUFBbkIsR0FBK0IsT0FBTSxJQUFOLENBRmI7O0FBSXJDLFlBQUksYUFBYSxDQUFDLEVBQUQsSUFBTyxhQUFhLE9BQU0sUUFBTixHQUFpQixFQUFqQixFQUFxQjtBQUN0RCxtQkFBTSxJQUFOLENBQVcsU0FBWCxFQURzRDtTQUExRDtLQUpKO0NBRGM7O0FBV0gsU0FBUyxRQUFULENBQWtCLEdBQWxCLEVBQW1DO1FBQVosOERBQVEsa0JBQUk7O21CQUNkLFFBQVEsR0FBUixFQURjOztRQUN0QywrQkFEc0M7UUFDM0IsNkJBRDJCOztBQUc5QyxXQUFPO0FBQ0gsY0FBTSx1QkFBTyxNQUFQO09BQ0g7QUFDSCxrQkFBVSxTQUFWO0FBQ0EsZ0JBQVE7QUFDSixlQUFHLENBQUg7U0FESjtBQUdBLGtCQUFVLFFBQVY7QUFDQSx3QkFBZ0IsU0FBUyxNQUFUO0FBQ2hCLGtCQUFVLFNBQVY7TUFURyxDQUFQLENBSDhDO0NBQW5DIiwiZmlsZSI6InRpbWVsaW5lLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUd2VlbiBmcm9tICcuLi9hY3Rpb25zL1R3ZWVuJztcbmltcG9ydCBlYXNpbmcgZnJvbSAnLi4vYWN0aW9ucy9lYXNpbmcvcHJlc2V0LWVhc2luZyc7XG5pbXBvcnQgeyByZWxhdGl2ZVZhbHVlIH0gZnJvbSAnLi9jYWxjJztcblxuLypcbiAgICBAcGFyYW0gW2FycmF5XVxuICAgICAgICBTZXF1ZW50aWFsIGFycmF5IG9mIHR3ZWVucywgZWFjaCBpdGVtIGNhbiBiZSBhIHR3ZWVuIG9yIGRlZmluaXRpb24gb2JqOlxuXG4gICAgICAgIFtcbiAgICAgICAgICAgIG5ldyBUd2VlbigpLFxuICAgICAgICAgICAgc3RhZ2dlcigpLFxuICAgICAgICAgICAgdGltZWxpbmUoKSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0d2VlbjogbmV3IFR3ZWVuKCksXG4gICAgICAgICAgICAgICAgYXQ6IDEwMCxcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IFwiKz0xMDBcIlxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4qL1xuY29uc3QgYW5hbHl6ZSA9IChkZWZzKSA9PiB7XG4gICAgY29uc3QgdGltZWxpbmUgPSBbXTtcbiAgICBjb25zdCBudW1EZWZzID0gZGVmcy5sZW5ndGg7XG4gICAgbGV0IGN1cnJlbnRQbGF5aGVhZCA9IDA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bURlZnM7IGkrKykge1xuICAgICAgICBjb25zdCBkZWYgPSBkZWZzW2ldO1xuICAgICAgICBjb25zdCBkZWZJc09iaiA9IGRlZi50d2VlbiA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgY29uc3QgdHdlZW4gPSAoZGVmSXNPYmopID8gZGVmLnR3ZWVuIDogZGVmO1xuXG4gICAgICAgIGN1cnJlbnRQbGF5aGVhZCArPSAoKGRlZklzT2JqICYmIGRlZi5vZmZzZXQpID9cbiAgICAgICAgICAgIGRlZi5hdCB8fCByZWxhdGl2ZVZhbHVlKGN1cnJlbnRQbGF5aGVhZCwgZGVmLm9mZnNldCkgOiAwKTtcblxuICAgICAgICBsZXQgZHVyYXRpb24gPSAwO1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdHdlZW4udmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAodHdlZW4udmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHR3ZWVuLnZhbHVlc1trZXldO1xuICAgICAgICAgICAgICAgIGR1cmF0aW9uID0gTWF0aC5tYXgoZHVyYXRpb24sIHZhbHVlLmR1cmF0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRpbWVsaW5lLnB1c2goe1xuICAgICAgICAgICAgZnJvbTogY3VycmVudFBsYXloZWFkLFxuICAgICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgICAgICAgZmlyZTogKHRpbWUpID0+IHR3ZWVuLnNlZWtUaW1lKHRpbWUpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGN1cnJlbnRQbGF5aGVhZCArPSB0d2Vlbi5kdXJhdGlvbjtcbiAgICB9XG5cbiAgICByZXR1cm4geyB0b3RhbFRpbWU6IGN1cnJlbnRQbGF5aGVhZCwgdGltZWxpbmUgfTtcbn07XG5cbmNvbnN0IHNldFR3ZWVucyA9ICh7IHRpbWVsaW5lLCB0aW1lbGluZUxlbmd0aCwgdmFsdWVzLCBkdXJhdGlvbiB9KSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aW1lbGluZUxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHR3ZWVuID0gdGltZWxpbmVbaV07XG4gICAgICAgIGNvbnN0IHR3ZWVuVGltZSA9ICh2YWx1ZXMucC5jdXJyZW50ICogZHVyYXRpb24pIC0gdHdlZW4uZnJvbTtcblxuICAgICAgICBpZiAodHdlZW5UaW1lID49IC01MCAmJiB0d2VlblRpbWUgPD0gdHdlZW4uZHVyYXRpb24gKyA1MCkge1xuICAgICAgICAgICAgdHdlZW4uZmlyZSh0d2VlblRpbWUpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGltZWxpbmUoZGVmLCBwcm9wcyA9IHt9KSB7XG4gICAgY29uc3QgeyB0b3RhbFRpbWUsIHRpbWVsaW5lIH0gPSBhbmFseXplKGRlZik7XG5cbiAgICByZXR1cm4gbmV3IFR3ZWVuKHtcbiAgICAgICAgZWFzZTogZWFzaW5nLmxpbmVhcixcbiAgICAgICAgLi4ucHJvcHMsXG4gICAgICAgIGR1cmF0aW9uOiB0b3RhbFRpbWUsXG4gICAgICAgIHZhbHVlczoge1xuICAgICAgICAgICAgcDogMVxuICAgICAgICB9LFxuICAgICAgICB0aW1lbGluZTogdGltZWxpbmUsXG4gICAgICAgIHRpbWVsaW5lTGVuZ3RoOiB0aW1lbGluZS5sZW5ndGgsXG4gICAgICAgIG9uUmVuZGVyOiBzZXRUd2VlbnNcbiAgICB9KTtcbn0iXX0=

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/*
	    # Adapter class
	    ## Provides a getter/setter wrapper and property cache for different element types
	
	    Override `getter` and `setter` to reimplement the interface for new element types.
	
	    Set `Extended.prototype.stateMap` as an object key/value map to translate incoming keys to
	    API-specific keys. For instance, { x: 'translateX' }. 
	
	    Set `Extended.prototype.valueTypeMap` as an object key/value map to return a value type with
	    `getValueType(key)` (key will be mapped according to `stateMap`)
	*/
	
	var Adapter = function () {
	    function Adapter(element) {
	        _classCallCheck(this, Adapter);
	
	        this.element = element;
	        this.cache = {};
	    }
	
	    /*
	        Get element property
	         @param [string]: Key to read
	        @param [boolean]: If `true`, will override cached property
	    */
	
	    Adapter.prototype.get = function get(key, refresh) {
	        var mappedKey = this.mapStateKey(key);
	
	        if (refresh || !this.cache.hasOwnProperty(key)) {
	            var actualValue = this.getter(mappedKey);
	
	            if (actualValue !== undefined) {
	                return this.cache[mappedKey] = actualValue;
	            }
	        } else {
	            return this.cache[mappedKey];
	        }
	    };
	
	    /*
	        Set element properties
	         @param [object]: Key/value properties to set
	    */
	
	    Adapter.prototype.set = function set(props) {
	        // Translate props
	        for (var key in props) {
	            if (props.hasOwnProperty(key)) {
	                var mappedKey = this.mapStateKey(key);
	                this.cache[mappedKey] = props[key];
	            }
	        }
	
	        return this.setter(this.cache);
	    };
	
	    /*
	        Overridable element getter - default for plain object 
	    */
	
	    Adapter.prototype.getter = function getter(key) {
	        return this.element[key];
	    };
	
	    /*
	        Overridable element setter - default for plain object
	    */
	
	    Adapter.prototype.setter = function setter(props) {
	        for (var key in props) {
	            if (props.hasOwnProperty(key)) {
	                this.element[key] = props[key];
	            }
	        }
	    };
	
	    /*
	        Map state key as per `stateMap`, if present
	         @param [string]: Key to map
	        @return [string]: Mapped key, or original key if none found
	    */
	
	    Adapter.prototype.mapStateKey = function mapStateKey(key) {
	        return this.stateMap ? this.stateMap[key] || key : key;
	    };
	
	    /*
	        Get valueType of provided key
	         @param [string]: Name of property to map
	        @return [valueType]: Value type of property
	    */
	
	    Adapter.prototype.getValueType = function getValueType(key) {
	        return this.valueTypeMap ? this.valueTypeMap[this.mapStateKey(key)] : false;
	    };
	
	    return Adapter;
	}();
	
	exports.default = function (element) {
	    return new Adapter(element);
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2FkYXB0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQVlNO0FBQ0YsYUFERSxPQUNGLENBQVksT0FBWixFQUFxQjs4QkFEbkIsU0FDbUI7O0FBQ2pCLGFBQUssT0FBTCxHQUFlLE9BQWYsQ0FEaUI7QUFFakIsYUFBSyxLQUFMLEdBQWEsRUFBYixDQUZpQjtLQUFyQjs7Ozs7Ozs7QUFERSxzQkFZRixtQkFBSSxLQUFLLFNBQVM7QUFDZCxZQUFNLFlBQVksS0FBSyxXQUFMLENBQWlCLEdBQWpCLENBQVosQ0FEUTs7QUFHZCxZQUFJLFdBQVcsQ0FBQyxLQUFLLEtBQUwsQ0FBVyxjQUFYLENBQTBCLEdBQTFCLENBQUQsRUFBaUM7QUFDNUMsZ0JBQU0sY0FBYyxLQUFLLE1BQUwsQ0FBWSxTQUFaLENBQWQsQ0FEc0M7O0FBRzVDLGdCQUFJLGdCQUFnQixTQUFoQixFQUEyQjtBQUMzQix1QkFBTyxLQUFLLEtBQUwsQ0FBVyxTQUFYLElBQXdCLFdBQXhCLENBRG9CO2FBQS9CO1NBSEosTUFNTztBQUNILG1CQUFPLEtBQUssS0FBTCxDQUFXLFNBQVgsQ0FBUCxDQURHO1NBTlA7Ozs7Ozs7O0FBZkYsc0JBK0JGLG1CQUFJLE9BQU87O0FBRVAsYUFBSyxJQUFJLEdBQUosSUFBVyxLQUFoQixFQUF1QjtBQUNuQixnQkFBSSxNQUFNLGNBQU4sQ0FBcUIsR0FBckIsQ0FBSixFQUErQjtBQUMzQixvQkFBTSxZQUFZLEtBQUssV0FBTCxDQUFpQixHQUFqQixDQUFaLENBRHFCO0FBRTNCLHFCQUFLLEtBQUwsQ0FBVyxTQUFYLElBQXdCLE1BQU0sR0FBTixDQUF4QixDQUYyQjthQUEvQjtTQURKOztBQU9BLGVBQU8sS0FBSyxNQUFMLENBQVksS0FBSyxLQUFMLENBQW5CLENBVE87Ozs7Ozs7QUEvQlQsc0JBOENGLHlCQUFPLEtBQUs7QUFDUixlQUFPLEtBQUssT0FBTCxDQUFhLEdBQWIsQ0FBUCxDQURROzs7Ozs7O0FBOUNWLHNCQXFERix5QkFBTyxPQUFPO0FBQ1YsYUFBSyxJQUFJLEdBQUosSUFBVyxLQUFoQixFQUF1QjtBQUNuQixnQkFBSSxNQUFNLGNBQU4sQ0FBcUIsR0FBckIsQ0FBSixFQUErQjtBQUMzQixxQkFBSyxPQUFMLENBQWEsR0FBYixJQUFvQixNQUFNLEdBQU4sQ0FBcEIsQ0FEMkI7YUFBL0I7U0FESjs7Ozs7Ozs7O0FBdERGLHNCQW1FRixtQ0FBWSxLQUFLO0FBQ2IsZUFBTyxJQUFDLENBQUssUUFBTCxHQUFpQixLQUFLLFFBQUwsQ0FBYyxHQUFkLEtBQXNCLEdBQXRCLEdBQTRCLEdBQTlDLENBRE07Ozs7Ozs7OztBQW5FZixzQkE2RUYscUNBQWEsS0FBSztBQUNkLGVBQU8sSUFBQyxDQUFLLFlBQUwsR0FBcUIsS0FBSyxZQUFMLENBQWtCLEtBQUssV0FBTCxDQUFpQixHQUFqQixDQUFsQixDQUF0QixHQUFpRSxLQUFqRSxDQURPOzs7V0E3RWhCOzs7a0JBa0ZTLFVBQUMsT0FBRDtXQUFhLElBQUksT0FBSixDQUFZLE9BQVo7Q0FBYiIsImZpbGUiOiJhZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gICAgIyBBZGFwdGVyIGNsYXNzXG4gICAgIyMgUHJvdmlkZXMgYSBnZXR0ZXIvc2V0dGVyIHdyYXBwZXIgYW5kIHByb3BlcnR5IGNhY2hlIGZvciBkaWZmZXJlbnQgZWxlbWVudCB0eXBlc1xuXG4gICAgT3ZlcnJpZGUgYGdldHRlcmAgYW5kIGBzZXR0ZXJgIHRvIHJlaW1wbGVtZW50IHRoZSBpbnRlcmZhY2UgZm9yIG5ldyBlbGVtZW50IHR5cGVzLlxuXG4gICAgU2V0IGBFeHRlbmRlZC5wcm90b3R5cGUuc3RhdGVNYXBgIGFzIGFuIG9iamVjdCBrZXkvdmFsdWUgbWFwIHRvIHRyYW5zbGF0ZSBpbmNvbWluZyBrZXlzIHRvXG4gICAgQVBJLXNwZWNpZmljIGtleXMuIEZvciBpbnN0YW5jZSwgeyB4OiAndHJhbnNsYXRlWCcgfS4gXG5cbiAgICBTZXQgYEV4dGVuZGVkLnByb3RvdHlwZS52YWx1ZVR5cGVNYXBgIGFzIGFuIG9iamVjdCBrZXkvdmFsdWUgbWFwIHRvIHJldHVybiBhIHZhbHVlIHR5cGUgd2l0aFxuICAgIGBnZXRWYWx1ZVR5cGUoa2V5KWAgKGtleSB3aWxsIGJlIG1hcHBlZCBhY2NvcmRpbmcgdG8gYHN0YXRlTWFwYClcbiovXG5jbGFzcyBBZGFwdGVyIHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuY2FjaGUgPSB7fTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBHZXQgZWxlbWVudCBwcm9wZXJ0eVxuXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogS2V5IHRvIHJlYWRcbiAgICAgICAgQHBhcmFtIFtib29sZWFuXTogSWYgYHRydWVgLCB3aWxsIG92ZXJyaWRlIGNhY2hlZCBwcm9wZXJ0eVxuICAgICovXG4gICAgZ2V0KGtleSwgcmVmcmVzaCkge1xuICAgICAgICBjb25zdCBtYXBwZWRLZXkgPSB0aGlzLm1hcFN0YXRlS2V5KGtleSk7XG5cbiAgICAgICAgaWYgKHJlZnJlc2ggfHwgIXRoaXMuY2FjaGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgY29uc3QgYWN0dWFsVmFsdWUgPSB0aGlzLmdldHRlcihtYXBwZWRLZXkpO1xuXG4gICAgICAgICAgICBpZiAoYWN0dWFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNhY2hlW21hcHBlZEtleV0gPSBhY3R1YWxWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNhY2hlW21hcHBlZEtleV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBTZXQgZWxlbWVudCBwcm9wZXJ0aWVzXG5cbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBLZXkvdmFsdWUgcHJvcGVydGllcyB0byBzZXRcbiAgICAqL1xuICAgIHNldChwcm9wcykge1xuICAgICAgICAvLyBUcmFuc2xhdGUgcHJvcHNcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHByb3BzKSB7XG4gICAgICAgICAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1hcHBlZEtleSA9IHRoaXMubWFwU3RhdGVLZXkoa2V5KTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlW21hcHBlZEtleV0gPSBwcm9wc1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0dGVyKHRoaXMuY2FjaGUpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIE92ZXJyaWRhYmxlIGVsZW1lbnQgZ2V0dGVyIC0gZGVmYXVsdCBmb3IgcGxhaW4gb2JqZWN0IFxuICAgICovXG4gICAgZ2V0dGVyKGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50W2tleV07XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgT3ZlcnJpZGFibGUgZWxlbWVudCBzZXR0ZXIgLSBkZWZhdWx0IGZvciBwbGFpbiBvYmplY3RcbiAgICAqL1xuICAgIHNldHRlcihwcm9wcykge1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gcHJvcHMpIHtcbiAgICAgICAgICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50W2tleV0gPSBwcm9wc1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgTWFwIHN0YXRlIGtleSBhcyBwZXIgYHN0YXRlTWFwYCwgaWYgcHJlc2VudFxuXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogS2V5IHRvIG1hcFxuICAgICAgICBAcmV0dXJuIFtzdHJpbmddOiBNYXBwZWQga2V5LCBvciBvcmlnaW5hbCBrZXkgaWYgbm9uZSBmb3VuZFxuICAgICovXG4gICAgbWFwU3RhdGVLZXkoa2V5KSB7XG4gICAgICAgIHJldHVybiAodGhpcy5zdGF0ZU1hcCkgPyB0aGlzLnN0YXRlTWFwW2tleV0gfHwga2V5IDoga2V5O1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIEdldCB2YWx1ZVR5cGUgb2YgcHJvdmlkZWQga2V5XG5cbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBOYW1lIG9mIHByb3BlcnR5IHRvIG1hcFxuICAgICAgICBAcmV0dXJuIFt2YWx1ZVR5cGVdOiBWYWx1ZSB0eXBlIG9mIHByb3BlcnR5XG4gICAgKi9cbiAgICBnZXRWYWx1ZVR5cGUoa2V5KSB7XG4gICAgICAgIHJldHVybiAodGhpcy52YWx1ZVR5cGVNYXApID8gdGhpcy52YWx1ZVR5cGVNYXBbdGhpcy5tYXBTdGF0ZUtleShrZXkpXSA6IGZhbHNlO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKGVsZW1lbnQpID0+IG5ldyBBZGFwdGVyKGVsZW1lbnQpOyJdfQ==

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.getter = getter;
	exports.setter = setter;
	
	var _adapter = __webpack_require__(12);
	
	var _adapter2 = _interopRequireDefault(_adapter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getter(key) {
	    return this.element.getAttribute(key);
	}
	
	function setter(props) {
	    for (var key in props) {
	        if (props.hasOwnProperty(key)) {
	            this.element.setAttribute(key, props[key]);
	        }
	    }
	}
	
	exports.default = function (element) {
	    var attrAdapter = (0, _adapter2.default)(element);
	
	    attrAdapter.getter = getter;
	    attrAdapter.setter = setter;
	
	    return attrAdapter;
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2F0dHItYWRhcHRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7UUFFZ0I7UUFJQTs7Ozs7Ozs7QUFKVCxTQUFTLE1BQVQsQ0FBZ0IsR0FBaEIsRUFBcUI7QUFDeEIsV0FBTyxLQUFLLE9BQUwsQ0FBYSxZQUFiLENBQTBCLEdBQTFCLENBQVAsQ0FEd0I7Q0FBckI7O0FBSUEsU0FBUyxNQUFULENBQWdCLEtBQWhCLEVBQXVCO0FBQzFCLFNBQUssSUFBSSxHQUFKLElBQVcsS0FBaEIsRUFBdUI7QUFDbkIsWUFBSSxNQUFNLGNBQU4sQ0FBcUIsR0FBckIsQ0FBSixFQUErQjtBQUMzQixpQkFBSyxPQUFMLENBQWEsWUFBYixDQUEwQixHQUExQixFQUErQixNQUFNLEdBQU4sQ0FBL0IsRUFEMkI7U0FBL0I7S0FESjtDQURHOztrQkFRUSxVQUFDLE9BQUQsRUFBYTtBQUN4QixRQUFNLGNBQWMsdUJBQVEsT0FBUixDQUFkLENBRGtCOztBQUd4QixnQkFBWSxNQUFaLEdBQXFCLE1BQXJCLENBSHdCO0FBSXhCLGdCQUFZLE1BQVosR0FBcUIsTUFBckIsQ0FKd0I7O0FBTXhCLFdBQU8sV0FBUCxDQU53QjtDQUFiIiwiZmlsZSI6ImF0dHItYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYWRhcHRlciBmcm9tICcuL2FkYXB0ZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0dGVyKGtleSkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKGtleSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXR0ZXIocHJvcHMpIHtcbiAgICBmb3IgKGxldCBrZXkgaW4gcHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBwcm9wc1trZXldKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBhdHRyQWRhcHRlciA9IGFkYXB0ZXIoZWxlbWVudCk7XG5cbiAgICBhdHRyQWRhcHRlci5nZXR0ZXIgPSBnZXR0ZXI7XG4gICAgYXR0ckFkYXB0ZXIuc2V0dGVyID0gc2V0dGVyO1xuXG4gICAgcmV0dXJuIGF0dHJBZGFwdGVyO1xufTtcbiJdfQ==

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _stateMap = __webpack_require__(41);
	
	var _stateMap2 = _interopRequireDefault(_stateMap);
	
	var _valueTypeMap = __webpack_require__(42);
	
	var _valueTypeMap2 = _interopRequireDefault(_valueTypeMap);
	
	var _build = __webpack_require__(43);
	
	var _build2 = _interopRequireDefault(_build);
	
	var _prefixer = __webpack_require__(44);
	
	var _prefixer2 = _interopRequireDefault(_prefixer);
	
	var _transformProps = __webpack_require__(45);
	
	var _transformProps2 = _interopRequireDefault(_transformProps);
	
	var _adapter = __webpack_require__(12);
	
	var _adapter2 = _interopRequireDefault(_adapter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getter(key) {
	    return !_transformProps2.default[key] ? window.getComputedStyle(this.element, null)[(0, _prefixer2.default)(key)] : _valueTypeMap2.default[key].defaultProps.current || 0;
	}
	
	function setter(props) {
	    this.element.style.cssText += (0, _build2.default)(props);
	}
	
	exports.default = function (element) {
	    var cssAdapter = (0, _adapter2.default)(element);
	    cssAdapter.stateMap = _stateMap2.default;
	    cssAdapter.valueTypeMap = _valueTypeMap2.default;
	    cssAdapter.getter = getter;
	    cssAdapter.setter = setter;
	
	    return cssAdapter;
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2Nzcy1hZGFwdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9BLFNBQVMsTUFBVCxDQUFpQixHQUFqQixFQUFzQjtBQUNsQixXQUFPLENBQUUseUJBQWUsR0FBZixDQUFELEdBQ0osT0FBTyxnQkFBUCxDQUF3QixLQUFLLE9BQUwsRUFBYyxJQUF0QyxFQUE0Qyx3QkFBUyxHQUFULENBQTVDLENBREcsR0FFSCx1QkFBYSxHQUFiLEVBQWtCLFlBQWxCLENBQStCLE9BQS9CLElBQTBDLENBQTFDLENBSGM7Q0FBdEI7O0FBTUEsU0FBUyxNQUFULENBQWdCLEtBQWhCLEVBQXVCO0FBQ25CLFNBQUssT0FBTCxDQUFhLEtBQWIsQ0FBbUIsT0FBbkIsSUFBOEIscUJBQW9CLEtBQXBCLENBQTlCLENBRG1CO0NBQXZCOztrQkFJZSxVQUFDLE9BQUQsRUFBYTtBQUN4QixRQUFNLGFBQWEsdUJBQVEsT0FBUixDQUFiLENBRGtCO0FBRXhCLGVBQVcsUUFBWCxzQkFGd0I7QUFHeEIsZUFBVyxZQUFYLDBCQUh3QjtBQUl4QixlQUFXLE1BQVgsR0FBb0IsTUFBcEIsQ0FKd0I7QUFLeEIsZUFBVyxNQUFYLEdBQW9CLE1BQXBCLENBTHdCOztBQU94QixXQUFPLFVBQVAsQ0FQd0I7Q0FBYiIsImZpbGUiOiJjc3MtYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3RhdGVNYXAgZnJvbSAnLi9jc3Mvc3RhdGUtbWFwJztcbmltcG9ydCB2YWx1ZVR5cGVNYXAgZnJvbSAnLi9jc3MvdmFsdWUtdHlwZS1tYXAnO1xuaW1wb3J0IGJ1aWxkUHJvcGVydHlTdHJpbmcgZnJvbSAnLi9jc3MvYnVpbGQnO1xuaW1wb3J0IHByZWZpeGVyIGZyb20gJy4vY3NzL3ByZWZpeGVyJztcbmltcG9ydCB0cmFuc2Zvcm1Qcm9wcyBmcm9tICcuL2Nzcy90cmFuc2Zvcm0tcHJvcHMnO1xuaW1wb3J0IGFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcblxuZnVuY3Rpb24gZ2V0dGVyIChrZXkpIHtcbiAgICByZXR1cm4gKCF0cmFuc2Zvcm1Qcm9wc1trZXldKSA/XG4gICAgICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudCwgbnVsbClbcHJlZml4ZXIoa2V5KV0gOlxuICAgICAgICB2YWx1ZVR5cGVNYXBba2V5XS5kZWZhdWx0UHJvcHMuY3VycmVudCB8fCAwO1xufVxuXG5mdW5jdGlvbiBzZXR0ZXIocHJvcHMpIHtcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUuY3NzVGV4dCArPSBidWlsZFByb3BlcnR5U3RyaW5nKHByb3BzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBjc3NBZGFwdGVyID0gYWRhcHRlcihlbGVtZW50KTtcbiAgICBjc3NBZGFwdGVyLnN0YXRlTWFwID0gc3RhdGVNYXA7XG4gICAgY3NzQWRhcHRlci52YWx1ZVR5cGVNYXAgPSB2YWx1ZVR5cGVNYXA7XG4gICAgY3NzQWRhcHRlci5nZXR0ZXIgPSBnZXR0ZXI7XG4gICAgY3NzQWRhcHRlci5zZXR0ZXIgPSBzZXR0ZXI7XG5cbiAgICByZXR1cm4gY3NzQWRhcHRlcjtcbn07XG4iXX0=

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.setter = setter;
	
	var _stateMap = __webpack_require__(41);
	
	var _stateMap2 = _interopRequireDefault(_stateMap);
	
	var _valueTypeMap = __webpack_require__(47);
	
	var _valueTypeMap2 = _interopRequireDefault(_valueTypeMap);
	
	var _transformProps = __webpack_require__(45);
	
	var _transformProps2 = _interopRequireDefault(_transformProps);
	
	var _build = __webpack_require__(48);
	
	var _build2 = _interopRequireDefault(_build);
	
	var _attrAdapter = __webpack_require__(13);
	
	var _adapter = __webpack_require__(12);
	
	var _adapter2 = _interopRequireDefault(_adapter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function setter(props) {
	    this.attrSetter((0, _build2.default)(props, this.origin));
	}
	
	function getter(key) {
	    return !_transformProps2.default[key] ? this.attrGetter(key) : _valueTypeMap2.default[key] && _valueTypeMap2.default[key].defaultProps ? _valueTypeMap2.default[key].defaultProps.current : 0;
	}
	
	exports.default = function (element) {
	    var transformOriginX = arguments.length <= 1 || arguments[1] === undefined ? 50 : arguments[1];
	    var transformOriginY = arguments.length <= 2 || arguments[2] === undefined ? 50 : arguments[2];
	
	    var svgAdapter = (0, _adapter2.default)(element);
	    svgAdapter.stateMap = _stateMap2.default;
	    svgAdapter.valueTypeMap = _valueTypeMap2.default;
	    svgAdapter.getter = getter;
	    svgAdapter.setter = setter;
	    svgAdapter.attrGetter = _attrAdapter.getter;
	    svgAdapter.attrSetter = _attrAdapter.setter;
	
	    var bBox = element.getBBox();
	
	    svgAdapter.origin = {
	        x: bBox.width * (transformOriginX / 100) + bBox.x,
	        y: bBox.height * (transformOriginY / 100) + bBox.y
	    };
	
	    return svgAdapter;
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL3N2Zy1hZGFwdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztRQU9nQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBVCxTQUFTLE1BQVQsQ0FBZ0IsS0FBaEIsRUFBdUI7QUFDMUIsU0FBSyxVQUFMLENBQWdCLHFCQUFNLEtBQU4sRUFBYSxLQUFLLE1BQUwsQ0FBN0IsRUFEMEI7Q0FBdkI7O0FBSVAsU0FBUyxNQUFULENBQWdCLEdBQWhCLEVBQXFCO0FBQ2pCLFdBQU8sQ0FBRSx5QkFBZSxHQUFmLENBQUQsR0FBd0IsS0FBSyxVQUFMLENBQWdCLEdBQWhCLENBQXpCLEdBQWdELHNCQUFDLENBQWEsR0FBYixLQUFxQix1QkFBYSxHQUFiLEVBQWtCLFlBQWxCLEdBQWtDLHVCQUFhLEdBQWIsRUFBa0IsWUFBbEIsQ0FBK0IsT0FBL0IsR0FBeUMsQ0FBakcsQ0FEdEM7Q0FBckI7O2tCQUllLFVBQUMsT0FBRCxFQUEyRDtRQUFqRCx5RUFBbUIsa0JBQThCO1FBQTFCLHlFQUFtQixrQkFBTzs7QUFDdEUsUUFBTSxhQUFhLHVCQUFRLE9BQVIsQ0FBYixDQURnRTtBQUV0RSxlQUFXLFFBQVgsc0JBRnNFO0FBR3RFLGVBQVcsWUFBWCwwQkFIc0U7QUFJdEUsZUFBVyxNQUFYLEdBQW9CLE1BQXBCLENBSnNFO0FBS3RFLGVBQVcsTUFBWCxHQUFvQixNQUFwQixDQUxzRTtBQU10RSxlQUFXLFVBQVgsdUJBTnNFO0FBT3RFLGVBQVcsVUFBWCx1QkFQc0U7O0FBU3RFLFFBQU0sT0FBTyxRQUFRLE9BQVIsRUFBUCxDQVRnRTs7QUFXdEUsZUFBVyxNQUFYLEdBQW9CO0FBQ2hCLFdBQUcsS0FBSyxLQUFMLElBQWMsbUJBQW1CLEdBQW5CLENBQWQsR0FBd0MsS0FBSyxDQUFMO0FBQzNDLFdBQUcsS0FBSyxNQUFMLElBQWUsbUJBQW1CLEdBQW5CLENBQWYsR0FBeUMsS0FBSyxDQUFMO0tBRmhELENBWHNFOztBQWdCdEUsV0FBTyxVQUFQLENBaEJzRTtDQUEzRCIsImZpbGUiOiJzdmctYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzU3RhdGVNYXAgZnJvbSAnLi9jc3Mvc3RhdGUtbWFwJztcbmltcG9ydCB2YWx1ZVR5cGVNYXAgZnJvbSAnLi9zdmcvdmFsdWUtdHlwZS1tYXAnO1xuaW1wb3J0IHRyYW5zZm9ybVByb3BzIGZyb20gJy4vY3NzL3RyYW5zZm9ybS1wcm9wcyc7XG5pbXBvcnQgYnVpbGQgZnJvbSAnLi9zdmcvYnVpbGQnO1xuaW1wb3J0IHsgZ2V0dGVyIGFzIGF0dHJHZXR0ZXIsIHNldHRlciBhcyBhdHRyU2V0dGVyIH0gZnJvbSAnLi9hdHRyLWFkYXB0ZXInO1xuaW1wb3J0IGFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNldHRlcihwcm9wcykge1xuICAgIHRoaXMuYXR0clNldHRlcihidWlsZChwcm9wcywgdGhpcy5vcmlnaW4pKTtcbn1cblxuZnVuY3Rpb24gZ2V0dGVyKGtleSkge1xuICAgIHJldHVybiAoIXRyYW5zZm9ybVByb3BzW2tleV0pID8gdGhpcy5hdHRyR2V0dGVyKGtleSkgOiAodmFsdWVUeXBlTWFwW2tleV0gJiYgdmFsdWVUeXBlTWFwW2tleV0uZGVmYXVsdFByb3BzKSA/IHZhbHVlVHlwZU1hcFtrZXldLmRlZmF1bHRQcm9wcy5jdXJyZW50IDogMDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGVsZW1lbnQsIHRyYW5zZm9ybU9yaWdpblggPSA1MCwgdHJhbnNmb3JtT3JpZ2luWSA9IDUwKSA9PiB7XG4gICAgY29uc3Qgc3ZnQWRhcHRlciA9IGFkYXB0ZXIoZWxlbWVudCk7XG4gICAgc3ZnQWRhcHRlci5zdGF0ZU1hcCA9IGNzc1N0YXRlTWFwO1xuICAgIHN2Z0FkYXB0ZXIudmFsdWVUeXBlTWFwID0gdmFsdWVUeXBlTWFwO1xuICAgIHN2Z0FkYXB0ZXIuZ2V0dGVyID0gZ2V0dGVyO1xuICAgIHN2Z0FkYXB0ZXIuc2V0dGVyID0gc2V0dGVyO1xuICAgIHN2Z0FkYXB0ZXIuYXR0ckdldHRlciA9IGF0dHJHZXR0ZXI7XG4gICAgc3ZnQWRhcHRlci5hdHRyU2V0dGVyID0gYXR0clNldHRlcjtcbiAgICBcbiAgICBjb25zdCBiQm94ID0gZWxlbWVudC5nZXRCQm94KCk7XG5cbiAgICBzdmdBZGFwdGVyLm9yaWdpbiA9IHtcbiAgICAgICAgeDogYkJveC53aWR0aCAqICh0cmFuc2Zvcm1PcmlnaW5YIC8gMTAwKSArIGJCb3gueCxcbiAgICAgICAgeTogYkJveC5oZWlnaHQgKiAodHJhbnNmb3JtT3JpZ2luWSAvIDEwMCkgKyBiQm94LnlcbiAgICB9O1xuXG4gICAgcmV0dXJuIHN2Z0FkYXB0ZXI7XG59O1xuXG4iXX0=

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _build = __webpack_require__(46);
	
	var _build2 = _interopRequireDefault(_build);
	
	var _stateMap = __webpack_require__(41);
	
	var _stateMap2 = _interopRequireDefault(_stateMap);
	
	var _svgAdapter = __webpack_require__(15);
	
	var _svgAdapter2 = _interopRequireDefault(_svgAdapter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function setter(props) {
	    this.svgSetter((0, _build2.default)(props, this.pathLength));
	}
	
	exports.default = function (element) {
	    var adapter = (0, _svgAdapter2.default)(element);
	
	    adapter.stateMap = _stateMap2.default;
	    adapter.setter = setter;
	    adapter.svgSetter = _svgAdapter.setter;
	    adapter.pathLength = element.getTotalLength();
	
	    return adapter;
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL3N2Zy1wYXRoLWFkYXB0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUEsU0FBUyxNQUFULENBQWdCLEtBQWhCLEVBQXVCO0FBQ25CLFNBQUssU0FBTCxDQUFlLHFCQUFNLEtBQU4sRUFBYSxLQUFLLFVBQUwsQ0FBNUIsRUFEbUI7Q0FBdkI7O2tCQUllLFVBQUMsT0FBRCxFQUFhO0FBQ3hCLFFBQU0sVUFBVSwwQkFBVyxPQUFYLENBQVYsQ0FEa0I7O0FBR3hCLFlBQVEsUUFBUixzQkFId0I7QUFJeEIsWUFBUSxNQUFSLEdBQWlCLE1BQWpCLENBSndCO0FBS3hCLFlBQVEsU0FBUixzQkFMd0I7QUFNeEIsWUFBUSxVQUFSLEdBQXFCLFFBQVEsY0FBUixFQUFyQixDQU53Qjs7QUFReEIsV0FBTyxPQUFQLENBUndCO0NBQWIiLCJmaWxlIjoic3ZnLXBhdGgtYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYnVpbGQgZnJvbSAnLi9zdmctcGF0aC9idWlsZCc7XG5pbXBvcnQgY3NzU3RhdGVNYXAgZnJvbSAnLi9jc3Mvc3RhdGUtbWFwJztcbmltcG9ydCBzdmdBZGFwdGVyLCB7IHNldHRlciBhcyBzdmdTZXR0ZXIgfSBmcm9tICcuL3N2Zy1hZGFwdGVyJztcblxuZnVuY3Rpb24gc2V0dGVyKHByb3BzKSB7XG4gICAgdGhpcy5zdmdTZXR0ZXIoYnVpbGQocHJvcHMsIHRoaXMucGF0aExlbmd0aCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCAoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGFkYXB0ZXIgPSBzdmdBZGFwdGVyKGVsZW1lbnQpO1xuXG4gICAgYWRhcHRlci5zdGF0ZU1hcCA9IGNzc1N0YXRlTWFwO1xuICAgIGFkYXB0ZXIuc2V0dGVyID0gc2V0dGVyO1xuICAgIGFkYXB0ZXIuc3ZnU2V0dGVyID0gc3ZnU2V0dGVyO1xuICAgIGFkYXB0ZXIucGF0aExlbmd0aCA9IGVsZW1lbnQuZ2V0VG90YWxMZW5ndGgoKTtcblxuICAgIHJldHVybiBhZGFwdGVyO1xufTtcbiJdfQ==

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _createEasing = __webpack_require__(51);
	
	var _createEasing2 = _interopRequireDefault(_createEasing);
	
	var _createBezier = __webpack_require__(52);
	
	var _createBezier2 = _interopRequireDefault(_createBezier);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	e; /*
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
	
	// Values
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2Vhc2luZy9wcmVzZXQtZWFzaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThCQSxJQUFNLHdCQUF3QixLQUF4QjtBQUNOLElBQU0sdUJBQXVCLENBQXZCOzs7Ozs7OztBQVFOLElBQU0sYUFBYTtBQUNmLFVBQU0sVUFBQyxRQUFEO1lBQVcsaUVBQVc7d0JBQXlCLFVBQVk7S0FBM0Q7QUFDTixVQUFNO2VBQVksSUFBSSxLQUFLLEdBQUwsQ0FBUyxLQUFLLElBQUwsQ0FBVSxRQUFWLENBQVQsQ0FBSjtLQUFaO0FBQ04sVUFBTSxVQUFDLFFBQUQ7WUFBVyxpRUFBVztlQUEwQixRQUFDLEdBQVcsUUFBWCxJQUF3QixDQUFDLFdBQVcsQ0FBWCxDQUFELEdBQWlCLFFBQWpCLEdBQTRCLFFBQTVCLENBQXpCO0tBQWhEO0NBSEo7OztBQU9OLElBQU0sc0JBQXNCLFVBQUMsUUFBRDtXQUFjLFVBQUMsUUFBRDtlQUFjLFdBQVcsSUFBWCxDQUFnQixRQUFoQixFQUEwQixRQUExQjtLQUFkO0NBQWQ7O0FBRTVCLENBQUMsT0FBRCxFQUFVLE9BQVYsRUFBbUIsT0FBbkIsRUFBNEIsT0FBNUIsQ0FBb0MsVUFBQyxVQUFELEVBQWEsQ0FBYjtXQUFtQixXQUFXLFVBQVgsSUFBeUIsb0JBQW9CLElBQUksQ0FBSixDQUE3QztDQUFuQixDQUFwQzs7O0FBR0EsS0FBSyxJQUFJLEdBQUosSUFBVyxVQUFoQixFQUE0QjtBQUN4QixRQUFJLFdBQVcsY0FBWCxDQUEwQixHQUExQixDQUFKLEVBQW9DO0FBQ2hDLFlBQU0saUJBQWlCLDRCQUFxQixXQUFXLEdBQVgsQ0FBckIsQ0FBakIsQ0FEMEI7QUFFaEMsbUJBQWMsVUFBZCxJQUF5QixlQUFlLEVBQWYsQ0FGTztBQUdoQyxtQkFBYyxXQUFkLElBQTBCLGVBQWUsR0FBZixDQUhNO0FBSWhDLG1CQUFjLGFBQWQsSUFBNEIsZUFBZSxLQUFmLENBSkk7S0FBcEM7Q0FESjs7QUFTQSxXQUFXLE1BQVgsR0FBb0I7V0FBWTtDQUFaO0FBQ3BCLFdBQVcsVUFBWCxHQUF3QixVQUFDLFFBQUQ7UUFBVyxpRUFBVztXQUMxQyxDQUFFLFlBQVUsQ0FBVixDQUFELEdBQWdCLENBQWhCLEdBQXFCLE1BQU0sV0FBVyxNQUFYLENBQWtCLFFBQWxCLEVBQTRCLFFBQTVCLENBQU4sR0FBK0MsT0FBTyxJQUFJLEtBQUssR0FBTCxDQUFTLENBQVQsRUFBWSxDQUFDLEVBQUQsSUFBTyxXQUFXLENBQVgsQ0FBUCxDQUFoQixDQUFQO0NBRGpEOztBQUd4QixXQUFXLGdCQUFYO0FBQ0EsV0FBVyxXQUFYO0FBQ0EsV0FBVyxNQUFYLEdBQW9CLFVBQUMsTUFBRDtzQ0FBWTs7OztXQUFTLFVBQUMsUUFBRDtlQUFjLHlCQUFPLGlCQUFhLEtBQXBCO0tBQWQ7Q0FBckI7O2tCQUVMIiwiZmlsZSI6InByZXNldC1lYXNpbmcuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiZS8qXG4gICAgRWFzaW5nIGZ1bmN0aW9uc1xuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBcbiAgICBHZW5lcmF0ZXMgYW5kIHByb3ZpZGVzIGVhc2luZyBmdW5jdGlvbnMgYmFzZWQgb24gYmFzZUZ1bmN0aW9uIGRlZmluaXRpb25zXG4gICAgXG4gICAgQSBjYWxsIHRvIGVhc2luZ0Z1bmN0aW9uLmdldCgnZnVuY3Rpb25OYW1lJykgcmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHBhc3NlZDpcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcyAwLTFcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IEFtcCBtb2RpZmllciwgb25seSBhY2NlcHRlZCBpbiBzb21lIGVhc2luZyBmdW5jdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBpcyB1c2VkIHRvIGFkanVzdCBvdmVyYWxsIHN0cmVuZ3RoXG4gICAgICAgIEByZXR1cm4gW251bWJlcl06IEVhc2VkIHByb2dyZXNzXG4gICAgICAgIFxuICAgIFdlIGNhbiBnZW5lcmF0ZSBuZXcgZnVuY3Rpb25zIGJ5IHNlbmRpbmcgYW4gZWFzaW5nIGZ1bmN0aW9uIHRocm91Z2ggZWFzaW5nRnVuY3Rpb24uZXh0ZW5kKG5hbWUsIG1ldGhvZCkuXG4gICAgV2hpY2ggd2lsbCBtYWtlIG5hbWVJbiwgbmFtZU91dCBhbmQgbmFtZUluT3V0IGZ1bmN0aW9ucyBhdmFpbGFibGUgdG8gdXNlLlxuICAgICAgICBcbiAgICBFYXNpbmcgZnVuY3Rpb25zIGZyb20gUm9iZXJ0IFBlbm5lclxuICAgIGh0dHA6Ly93d3cucm9iZXJ0cGVubmVyLmNvbS9lYXNpbmcvXG4gICAgICAgIFxuICAgIEJlemllciBjdXJ2ZSBpbnRlcnByZXRvciBjcmVhdGVkIGZyb20gR2HDq3RhbiBSZW5hdWRlYXUncyBvcmlnaW5hbCBCZXppZXJFYXNpbmcgIFxuICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9pbmRleC5qcyAgXG4gICAgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcblxuICAgIEFudGljaXBhdGUgZWFzaW5nIGNyZWF0ZWQgYnkgRWxsaW90IEdpbm9cbiAgICBodHRwczovL3R3aXR0ZXIuY29tL0VsbGlvdEdlbm9cbiovXG4vLyBJbXBvcnRzXG5pbXBvcnQgY3JlYXRlRWFzaW5nRnVuY3Rpb24gZnJvbSAnLi9jcmVhdGUtZWFzaW5nJztcbmltcG9ydCBjdWJpY0JlemllciBmcm9tICcuL2NyZWF0ZS1iZXppZXInO1xuXG4vLyBWYWx1ZXNcbmNvbnN0IERFRkFVTFRfQkFDS19TVFJFTkdUSCA9IDEuNTI1O1xuY29uc3QgREVGQVVMVF9QT1dfU1RSRU5HVEggPSAyO1xuXG4vKlxuICAgIEVhY2ggb2YgdGhlc2UgYmFzZSBmdW5jdGlvbnMgaXMgYW4gZWFzZUluXG4gICAgXG4gICAgT24gaW5pdCwgd2UgdXNlIC5taXJyb3IgYW5kIC5yZXZlcnNlIHRvIGdlbmVyYXRlIGVhc2VJbk91dCBhbmRcbiAgICBlYXNlT3V0IGZ1bmN0aW9ucyByZXNwZWN0aXZlbHkuXG4qL1xuY29uc3QgYmFzZUVhc2luZyA9IHtcbiAgICBlYXNlOiAocHJvZ3Jlc3MsIHN0cmVuZ3RoID0gREVGQVVMVF9QT1dfU1RSRU5HVEgpID0+IHByb2dyZXNzICoqIHN0cmVuZ3RoLFxuICAgIGNpcmM6IHByb2dyZXNzID0+IDEgLSBNYXRoLnNpbihNYXRoLmFjb3MocHJvZ3Jlc3MpKSxcbiAgICBiYWNrOiAocHJvZ3Jlc3MsIHN0cmVuZ3RoID0gREVGQVVMVF9CQUNLX1NUUkVOR1RIKSA9PiAocHJvZ3Jlc3MgKiBwcm9ncmVzcykgKiAoKHN0cmVuZ3RoICsgMSkgKiBwcm9ncmVzcyAtIHN0cmVuZ3RoKVxufTtcblxuLy8gVXRpbGl0eSBmdW5jdGlvbnNcbmNvbnN0IGdlbmVyYXRlUG93ZXJFYXNpbmcgPSAoc3RyZW5ndGgpID0+IChwcm9ncmVzcykgPT4gYmFzZUVhc2luZy5lYXNlKHByb2dyZXNzLCBzdHJlbmd0aCk7XG5cblsnY3ViaWMnLCAncXVhcnQnLCAncXVpbnQnXS5mb3JFYWNoKChlYXNpbmdOYW1lLCBpKSA9PiBiYXNlRWFzaW5nW2Vhc2luZ05hbWVdID0gZ2VuZXJhdGVQb3dlckVhc2luZyhpICsgMykpO1xuXG4vLyBHZW5lcmF0ZSBpbi9vdXQvaW5PdXQgdmFyaWF0aW9uc1xuZm9yIChsZXQga2V5IGluIGJhc2VFYXNpbmcpIHtcbiAgICBpZiAoYmFzZUVhc2luZy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGNvbnN0IGVhc2luZ0Z1bmN0aW9uID0gY3JlYXRlRWFzaW5nRnVuY3Rpb24oYmFzZUVhc2luZ1trZXldKTtcbiAgICAgICAgYmFzZUVhc2luZ1tgJHtrZXl9SW5gXSA9IGVhc2luZ0Z1bmN0aW9uLmluO1xuICAgICAgICBiYXNlRWFzaW5nW2Ake2tleX1PdXRgXSA9IGVhc2luZ0Z1bmN0aW9uLm91dDtcbiAgICAgICAgYmFzZUVhc2luZ1tgJHtrZXl9SW5PdXRgXSA9IGVhc2luZ0Z1bmN0aW9uLmluT3V0O1xuICAgIH1cbn1cblxuYmFzZUVhc2luZy5saW5lYXIgPSBwcm9ncmVzcyA9PiBwcm9ncmVzcztcbmJhc2VFYXNpbmcuYW50aWNpcGF0ZSA9IChwcm9ncmVzcywgc3RyZW5ndGggPSBERUZBVUxUX0JBQ0tfU1RSRU5HVEgpID0+XG4gICAgKChwcm9ncmVzcyo9MikgPCAxKSA/IDAuNSAqIGJhc2VFYXNpbmcuYmFja0luKHByb2dyZXNzLCBzdHJlbmd0aCkgOiAgMC41ICogKDIgLSBNYXRoLnBvdygyLCAtMTAgKiAocHJvZ3Jlc3MgLSAxKSkpO1xuXG5iYXNlRWFzaW5nLmNyZWF0ZVZhcmlhdGlvbnMgPSBjcmVhdGVFYXNpbmdGdW5jdGlvbjtcbmJhc2VFYXNpbmcuY3ViaWNCZXppZXIgPSBjdWJpY0JlemllcjtcbmJhc2VFYXNpbmcubW9kaWZ5ID0gKGVhc2luZywgLi4uYXJncykgPT4gKHByb2dyZXNzKSA9PiBlYXNpbmcocHJvZ3Jlc3MsIC4uLmFyZ3MpO1xuXG5leHBvcnQgZGVmYXVsdCBiYXNlRWFzaW5nOyJdfQ==

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _Flow = __webpack_require__(8);
	
	var _Flow2 = _interopRequireDefault(_Flow);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var SAVE_PROP = '__pm_flow';
	
	exports.default = function (element) {
	    if (element[SAVE_PROP]) {
	        return element[SAVE_PROP];
	    } else {
	        var flow = new _Flow2.default({ adapter: element });
	
	        // Bind adapter to element
	        Object.defineProperty(element, SAVE_PROP, {
	            enumerable: false,
	            writable: false,
	            value: flow
	        });
	
	        return flow;
	    }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2Zsb3cvZ2V0LWZsb3cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVBLElBQU0sWUFBWSxXQUFaOztrQkFFUyxVQUFDLE9BQUQsRUFBYTtBQUN4QixRQUFJLFFBQVEsU0FBUixDQUFKLEVBQXdCO0FBQ3BCLGVBQU8sUUFBUSxTQUFSLENBQVAsQ0FEb0I7S0FBeEIsTUFFTztBQUNILFlBQU0sT0FBTyxtQkFBUyxFQUFFLFNBQVMsT0FBVCxFQUFYLENBQVA7OztBQURILGNBSUgsQ0FBTyxjQUFQLENBQXNCLE9BQXRCLEVBQStCLFNBQS9CLEVBQTBDO0FBQ3RDLHdCQUFZLEtBQVo7QUFDQSxzQkFBVSxLQUFWO0FBQ0EsbUJBQU8sSUFBUDtTQUhKLEVBSkc7O0FBVUgsZUFBTyxJQUFQLENBVkc7S0FGUDtDQURXIiwiZmlsZSI6ImdldC1mbG93LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGbG93IGZyb20gJy4uL0Zsb3cnO1xuXG5jb25zdCBTQVZFX1BST1AgPSAnX19wbV9mbG93JztcblxuZXhwb3J0IGRlZmF1bHQgKGVsZW1lbnQpID0+IHtcbiAgICBpZiAoZWxlbWVudFtTQVZFX1BST1BdKSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50W1NBVkVfUFJPUF07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZmxvdyA9IG5ldyBGbG93KHsgYWRhcHRlcjogZWxlbWVudCB9KTtcblxuICAgICAgICAvLyBCaW5kIGFkYXB0ZXIgdG8gZWxlbWVudFxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgU0FWRV9QUk9QLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHZhbHVlOiBmbG93XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBmbG93O1xuICAgIH1cbn07XG5cblxuIl19

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.stepProgress = exports.speedPerSecond = exports.speedPerFrame = exports.smooth = exports.restrict = exports.relativeValue = exports.random = exports.radiansToDegrees = exports.pointFromAngleAndDistance = exports.offset = exports.getProgressFromValue = exports.getValueFromProgress = exports.hypotenuse = exports.ease = exports.distance = exports.dilate = exports.degreesToRadians = exports.angle = undefined;
	
	var _utils = __webpack_require__(20);
	
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
/* 20 */
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
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _defaultProps = __webpack_require__(49);
	
	exports.default = {
	    defaultProps: _defaultProps.opacity
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9hbHBoYS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7a0JBRWU7QUFDWCx1Q0FEVyIsImZpbGUiOiJhbHBoYS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBvcGFjaXR5IH0gZnJvbSAnLi9zZXR0aW5ncy9kZWZhdWx0LXByb3BzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRlZmF1bHRQcm9wczogb3BhY2l0eVxufTsiXX0=

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _unit = __webpack_require__(33);
	
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
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(20);
	
	var _px = __webpack_require__(29);
	
	var _px2 = _interopRequireDefault(_px);
	
	var _dictionary = __webpack_require__(50);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    defaultProps: _px2.default.defaultProps,
	
	    /*
	        Split positions in format "X Y Z"
	        
	        @param [string]: Position values
	            "20% 30% 0" -> {20%, 30%, 0}
	            "20% 30%" -> {20%, 30%}
	            "20%" -> {20%, 20%}
	    */
	    split: function (value) {
	        var splitValues = (0, _utils.splitSpaceDelimited)(value);
	        var numAxes = splitValues.length;
	        var splitValue = {
	            X: splitValues[0],
	            Y: numAxes > 1 ? splitValues[1] : splitValues[0]
	        };
	
	        if (numAxes > 2) {
	            splitValue.Z = splitValues[2];
	        }
	
	        return splitValue;
	    },
	
	    combine: function (values) {
	        return (0, _utils.createDelimited)(values, _dictionary.axes, ' ');
	    }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9heGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O2tCQUllO0FBQ1gsa0JBQWMsYUFBWSxZQUFaOzs7Ozs7Ozs7O0FBVWQsV0FBTyxVQUFDLEtBQUQsRUFBVztBQUNkLFlBQU0sY0FBYyxnQ0FBb0IsS0FBcEIsQ0FBZCxDQURRO0FBRWQsWUFBTSxVQUFVLFlBQVksTUFBWixDQUZGO0FBR2QsWUFBTSxhQUFhO0FBQ2YsZUFBRyxZQUFZLENBQVosQ0FBSDtBQUNBLGVBQUcsT0FBQyxHQUFVLENBQVYsR0FBZSxZQUFZLENBQVosQ0FBaEIsR0FBaUMsWUFBWSxDQUFaLENBQWpDO1NBRkQsQ0FIUTs7QUFRZCxZQUFJLFVBQVUsQ0FBVixFQUFhO0FBQ2IsdUJBQVcsQ0FBWCxHQUFlLFlBQVksQ0FBWixDQUFmLENBRGE7U0FBakI7O0FBSUEsZUFBTyxVQUFQLENBWmM7S0FBWDs7QUFlUCxhQUFTLFVBQUMsTUFBRDtlQUFZLDRCQUFnQixNQUFoQixvQkFBOEIsR0FBOUI7S0FBWiIsImZpbGUiOiJheGVzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZURlbGltaXRlZCwgc3BsaXRTcGFjZURlbGltaXRlZCB9IGZyb20gJy4uL2luYy91dGlscyc7XG5pbXBvcnQgcHhWYWx1ZVR5cGUgZnJvbSAnLi9weCc7XG5pbXBvcnQgeyBheGVzIH0gZnJvbSAnLi9zZXR0aW5ncy9kaWN0aW9uYXJ5JztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRlZmF1bHRQcm9wczogcHhWYWx1ZVR5cGUuZGVmYXVsdFByb3BzLFxuICAgICAgICBcbiAgICAvKlxuICAgICAgICBTcGxpdCBwb3NpdGlvbnMgaW4gZm9ybWF0IFwiWCBZIFpcIlxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBQb3NpdGlvbiB2YWx1ZXNcbiAgICAgICAgICAgIFwiMjAlIDMwJSAwXCIgLT4gezIwJSwgMzAlLCAwfVxuICAgICAgICAgICAgXCIyMCUgMzAlXCIgLT4gezIwJSwgMzAlfVxuICAgICAgICAgICAgXCIyMCVcIiAtPiB7MjAlLCAyMCV9XG4gICAgKi9cbiAgICBzcGxpdDogKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IHNwbGl0VmFsdWVzID0gc3BsaXRTcGFjZURlbGltaXRlZCh2YWx1ZSk7XG4gICAgICAgIGNvbnN0IG51bUF4ZXMgPSBzcGxpdFZhbHVlcy5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHNwbGl0VmFsdWUgPSB7XG4gICAgICAgICAgICBYOiBzcGxpdFZhbHVlc1swXSxcbiAgICAgICAgICAgIFk6IChudW1BeGVzID4gMSkgPyBzcGxpdFZhbHVlc1sxXSA6IHNwbGl0VmFsdWVzWzBdXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKG51bUF4ZXMgPiAyKSB7XG4gICAgICAgICAgICBzcGxpdFZhbHVlLlogPSBzcGxpdFZhbHVlc1syXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzcGxpdFZhbHVlO1xuICAgIH0sXG5cbiAgICBjb21iaW5lOiAodmFsdWVzKSA9PiBjcmVhdGVEZWxpbWl0ZWQodmFsdWVzLCBheGVzLCAnICcpXG59O1xuIl19

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _rgb = __webpack_require__(30);
	
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
	
	var _utils = __webpack_require__(20);
	
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
	
	var _rgb = __webpack_require__(30);
	
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
	
	var _defaultProps = __webpack_require__(49);
	
	var _dictionary = __webpack_require__(50);
	
	var _utils = __webpack_require__(20);
	
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
	
	var _dictionary = __webpack_require__(50);
	
	var _utils = __webpack_require__(20);
	
	var _px = __webpack_require__(29);
	
	var _px2 = _interopRequireDefault(_px);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    defaultProps: _px2.default.defaultProps,
	
	    /*
	        Split dimensions in format "Top Right Bottom Left"
	        
	        @param [string]: Position values
	            "20px 0 30px 40px" -> {20px, 0, 30px, 40px}
	            "20px 0 30px" -> {20px, 0, 30px, 0}
	            "20px 0" -> {20px, 0, 20px, 0}
	            "20px" -> {20px, 20px, 20px, 20px}
	        
	        @return [object]: Object with T/R/B/L metrics
	    */
	    split: function (value) {
	        var splitValue = {};
	        var splitPositions = (0, _utils.splitSpaceDelimited)(value);
	        var numPositions = splitPositions.length;
	        var jumpBack = numPositions !== 1 ? 2 : 1;
	        var j = 0;
	
	        for (var i = 0; i < 4; i++) {
	            splitValue[_dictionary.positions[i]] = splitPositions[j];
	
	            // Jump back (to start) counter if we've reached the end of our values
	            j++;
	            j = j === numPositions ? j - jumpBack : j;
	        }
	
	        return splitValue;
	    },
	
	    combine: function (values) {
	        return (0, _utils.createDelimited)(values, _dictionary.positions, ' ');
	    }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9wb3NpdGlvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7a0JBSWU7QUFDWCxrQkFBYyxhQUFZLFlBQVo7Ozs7Ozs7Ozs7Ozs7QUFhZCxXQUFPLFVBQUMsS0FBRCxFQUFXO0FBQ2QsWUFBTSxhQUFhLEVBQWIsQ0FEUTtBQUVkLFlBQU0saUJBQWlCLGdDQUFvQixLQUFwQixDQUFqQixDQUZRO0FBR2QsWUFBTSxlQUFlLGVBQWUsTUFBZixDQUhQO0FBSWQsWUFBTSxXQUFXLFlBQUMsS0FBaUIsQ0FBakIsR0FBc0IsQ0FBdkIsR0FBMkIsQ0FBM0IsQ0FKSDtBQUtkLFlBQUksSUFBSSxDQUFKLENBTFU7O0FBT2QsYUFBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksQ0FBSixFQUFPLEdBQXZCLEVBQTRCO0FBQ3hCLHVCQUFXLHNCQUFVLENBQVYsQ0FBWCxJQUEyQixlQUFlLENBQWYsQ0FBM0I7OztBQUR3QixhQUl4QixHQUp3QjtBQUt4QixnQkFBSSxDQUFDLEtBQU0sWUFBTixHQUFzQixJQUFJLFFBQUosR0FBZSxDQUF0QyxDQUxvQjtTQUE1Qjs7QUFRQSxlQUFPLFVBQVAsQ0FmYztLQUFYOztBQWtCUCxhQUFTLFVBQUMsTUFBRDtlQUFZLDRCQUFnQixNQUFoQix5QkFBbUMsR0FBbkM7S0FBWiIsImZpbGUiOiJwb3NpdGlvbnMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcG9zaXRpb25zIH0gZnJvbSAnLi9zZXR0aW5ncy9kaWN0aW9uYXJ5JztcbmltcG9ydCB7IGNyZWF0ZURlbGltaXRlZCwgc3BsaXRTcGFjZURlbGltaXRlZCB9IGZyb20gJy4uL2luYy91dGlscyc7XG5pbXBvcnQgcHhWYWx1ZVR5cGUgZnJvbSAnLi9weCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkZWZhdWx0UHJvcHM6IHB4VmFsdWVUeXBlLmRlZmF1bHRQcm9wcyxcblxuICAgIC8qXG4gICAgICAgIFNwbGl0IGRpbWVuc2lvbnMgaW4gZm9ybWF0IFwiVG9wIFJpZ2h0IEJvdHRvbSBMZWZ0XCJcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogUG9zaXRpb24gdmFsdWVzXG4gICAgICAgICAgICBcIjIwcHggMCAzMHB4IDQwcHhcIiAtPiB7MjBweCwgMCwgMzBweCwgNDBweH1cbiAgICAgICAgICAgIFwiMjBweCAwIDMwcHhcIiAtPiB7MjBweCwgMCwgMzBweCwgMH1cbiAgICAgICAgICAgIFwiMjBweCAwXCIgLT4gezIwcHgsIDAsIDIwcHgsIDB9XG4gICAgICAgICAgICBcIjIwcHhcIiAtPiB7MjBweCwgMjBweCwgMjBweCwgMjBweH1cbiAgICAgICAgXG4gICAgICAgIEByZXR1cm4gW29iamVjdF06IE9iamVjdCB3aXRoIFQvUi9CL0wgbWV0cmljc1xuICAgICovXG4gICAgc3BsaXQ6ICh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBzcGxpdFZhbHVlID0ge307XG4gICAgICAgIGNvbnN0IHNwbGl0UG9zaXRpb25zID0gc3BsaXRTcGFjZURlbGltaXRlZCh2YWx1ZSk7XG4gICAgICAgIGNvbnN0IG51bVBvc2l0aW9ucyA9IHNwbGl0UG9zaXRpb25zLmxlbmd0aDtcbiAgICAgICAgY29uc3QganVtcEJhY2sgPSAobnVtUG9zaXRpb25zICE9PSAxKSA/IDIgOiAxO1xuICAgICAgICBsZXQgaiA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgIHNwbGl0VmFsdWVbcG9zaXRpb25zW2ldXSA9IHNwbGl0UG9zaXRpb25zW2pdO1xuXG4gICAgICAgICAgICAvLyBKdW1wIGJhY2sgKHRvIHN0YXJ0KSBjb3VudGVyIGlmIHdlJ3ZlIHJlYWNoZWQgdGhlIGVuZCBvZiBvdXIgdmFsdWVzXG4gICAgICAgICAgICBqKys7XG4gICAgICAgICAgICBqID0gKGogPT09IG51bVBvc2l0aW9ucykgPyBqIC0ganVtcEJhY2sgOiBqO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNwbGl0VmFsdWU7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6ICh2YWx1ZXMpID0+IGNyZWF0ZURlbGltaXRlZCh2YWx1ZXMsIHBvc2l0aW9ucywgJyAnKVxufTsiXX0=

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _unit = __webpack_require__(33);
	
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
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(20);
	
	var _dictionary = __webpack_require__(50);
	
	var _defaultProps = __webpack_require__(49);
	
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
/* 31 */
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
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _color = __webpack_require__(24);
	
	var _color2 = _interopRequireDefault(_color);
	
	var _px = __webpack_require__(29);
	
	var _dictionary = __webpack_require__(50);
	
	var _utils = __webpack_require__(20);
	
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
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(20);
	
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
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.chain = exports.circularMotion = exports.createMapper = undefined;
	
	var _calc = __webpack_require__(19);
	
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
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _color = __webpack_require__(24);
	
	var _color2 = _interopRequireDefault(_color);
	
	var _complex = __webpack_require__(25);
	
	var _complex2 = _interopRequireDefault(_complex);
	
	var _unit = __webpack_require__(33);
	
	var _unit2 = _interopRequireDefault(_unit);
	
	var _utils = __webpack_require__(20);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9kZXRlY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTUEsSUFBTSx1QkFBdUIsMEJBQWlCLE1BQWpCOztrQkFFZCxVQUFDLEtBQUQsRUFBVztBQUN0QixTQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxvQkFBSixFQUEwQixHQUExQyxFQUErQztBQUMzQyxZQUFNLFlBQVksTUFBTSwwQkFBaUIsQ0FBakIsQ0FBTixDQUFaLENBRHFDO0FBRTNDLFlBQUkscUJBQVMsU0FBVCxDQUFKLEVBQXlCO0FBQ3JCLGdCQUFJLGdCQUFVLElBQVYsQ0FBZSxTQUFmLENBQUosRUFBK0I7QUFDM0IsdUNBRDJCO2FBQS9CLE1BRU8sSUFBSSxrQkFBWSxJQUFaLENBQWlCLFNBQWpCLENBQUosRUFBaUM7QUFDcEMseUNBRG9DO2FBQWpDLE1BRUEsSUFBSSxlQUFTLElBQVQsQ0FBYyxTQUFkLENBQUosRUFBOEI7QUFDakMsc0NBRGlDO2FBQTlCO1NBTFg7S0FGSjtDQURXIiwiZmlsZSI6ImRldGVjdC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29sb3JUeXBlIGZyb20gJy4uL3ZhbHVlLXR5cGVzL2NvbG9yJztcbmltcG9ydCBjb21wbGV4VHlwZSBmcm9tICcuLi92YWx1ZS10eXBlcy9jb21wbGV4JztcbmltcG9ydCB1bml0VHlwZSBmcm9tICcuLi92YWx1ZS10eXBlcy91bml0JztcbmltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcbmltcG9ydCBOVU1FUklDQUxfVkFMVUVTIGZyb20gJy4uL2luYy9udW1lcmljYWwtdmFsdWVzJztcblxuY29uc3QgTlVNX05VTUVSSUNBTF9WQUxVRVMgPSBOVU1FUklDQUxfVkFMVUVTLmxlbmd0aDtcblxuZXhwb3J0IGRlZmF1bHQgKHZhbHVlKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBOVU1fTlVNRVJJQ0FMX1ZBTFVFUzsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlUHJvcCA9IHZhbHVlW05VTUVSSUNBTF9WQUxVRVNbaV1dO1xuICAgICAgICBpZiAoaXNTdHJpbmcodmFsdWVQcm9wKSkge1xuICAgICAgICAgICAgaWYgKGNvbG9yVHlwZS50ZXN0KHZhbHVlUHJvcCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29sb3JUeXBlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb21wbGV4VHlwZS50ZXN0KHZhbHVlUHJvcCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29tcGxleFR5cGU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHVuaXRUeXBlLnRlc3QodmFsdWVQcm9wKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB1bml0VHlwZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07Il19

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
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.deactivate = exports.getTaskId = undefined;
	exports.activate = activate;
	
	var _timer = __webpack_require__(2);
	
	var _timer2 = _interopRequireDefault(_timer);
	
	var _tick = __webpack_require__(53);
	
	var _tick2 = _interopRequireDefault(_tick);
	
	var _manager = __webpack_require__(54);
	
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
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _calc = __webpack_require__(19);
	
	var BLEND_ACCURACY = 10;
	
	exports.default = function (outAction, inAction, key) {
	    var outValue = outAction.values[key];
	
	    if (outAction.elapsed === undefined || !outValue) {
	        return;
	    }
	
	    var inValue = inAction.values[key];
	    var outTotalDuration = outValue.delay + outValue.duration;
	    var timeUntilOutEnd = outTotalDuration - outAction.elapsed;
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
	                inAction.blendCurve = undefined;
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
	                inAction.blendCurve = undefined;
	                return inValue.current;
	            }
	
	            return (0, _calc.getValueFromProgress)(blendProgress, aP, bP);
	        };
	    }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2Zsb3cvZ2VuZXJhdGUtYmxlbmQtY3VydmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUEsSUFBTSxpQkFBaUIsRUFBakI7O2tCQUVTLFVBQUMsU0FBRCxFQUFZLFFBQVosRUFBc0IsR0FBdEIsRUFBOEI7QUFDekMsUUFBTSxXQUFXLFVBQVUsTUFBVixDQUFpQixHQUFqQixDQUFYLENBRG1DOztBQUd6QyxRQUFJLFVBQVUsT0FBVixLQUFzQixTQUF0QixJQUFtQyxDQUFDLFFBQUQsRUFBVztBQUM5QyxlQUQ4QztLQUFsRDs7QUFJQSxRQUFNLFVBQVUsU0FBUyxNQUFULENBQWdCLEdBQWhCLENBQVYsQ0FQbUM7QUFRekMsUUFBTSxtQkFBbUIsU0FBUyxLQUFULEdBQWlCLFNBQVMsUUFBVCxDQVJEO0FBU3pDLFFBQU0sa0JBQWtCLG1CQUFtQixVQUFVLE9BQVYsQ0FURjtBQVV6QyxRQUFNLHFCQUFxQixnQkFBSyxvQkFBUyxnQ0FBcUIsZUFBckIsRUFBc0MsQ0FBdEMsRUFBeUMsUUFBUSxLQUFSLEdBQWdCLFFBQVEsUUFBUixDQUFsRSxFQUFxRixDQUFyRixFQUF3RixDQUF4RixDQUFMLEVBQWlHLFFBQVEsSUFBUixFQUFjLFFBQVEsRUFBUixFQUFZLFFBQVEsSUFBUixDQUFoSixDQVZtQztBQVd6QyxRQUFNLHlCQUF5QixRQUFRLElBQVIsR0FBZSxTQUFTLE9BQVQsQ0FYTDtBQVl6QyxRQUFNLHVCQUF1QixxQkFBcUIsU0FBUyxFQUFULENBWlQ7QUFhekMsUUFBTSxrQkFBa0IsMkJBQTJCLG9CQUEzQixDQWJpQjs7QUFlekMsUUFBTSxhQUFhLENBQUMsQ0FBQyxDQUFELEVBQUksU0FBUyxPQUFULENBQUwsRUFBd0IsQ0FBQyxlQUFELEVBQWtCLGtCQUFsQixDQUF4QixDQUFiOzs7QUFmbUMsUUFrQnJDLGVBQUosRUFBcUI7QUFDakIsWUFBTSxpQkFBaUIsa0JBQWtCLGNBQWxCLENBRE47QUFFakIsWUFBSSxVQUFVLEtBQVYsQ0FGYTtBQUdqQixZQUFJLFVBQVUsS0FBVixDQUhhOztBQUtqQixhQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sS0FBSyxjQUFMLEVBQXFCLEdBQXJDLEVBQTBDO0FBQ3RDLGdCQUFNLFdBQVcsSUFBSSxjQUFKLENBRHFCO0FBRXRDLGdCQUFNLFlBQVksZ0JBQUssZ0NBQXFCLFVBQVUsT0FBVixHQUFvQixRQUFwQixFQUE4QixTQUFTLEtBQVQsRUFBZ0IsU0FBUyxRQUFULENBQXhFLEVBQTRGLFNBQVMsSUFBVCxFQUFlLFNBQVMsRUFBVCxFQUFhLFNBQVMsSUFBVCxDQUFwSSxDQUZnQztBQUd0QyxnQkFBTSxXQUFXLGdCQUFLLGdDQUFxQixTQUFTLE9BQVQsR0FBbUIsUUFBbkIsRUFBNkIsUUFBUSxLQUFSLEVBQWUsUUFBUSxRQUFSLENBQXRFLEVBQXlGLFFBQVEsSUFBUixFQUFjLFFBQVEsRUFBUixFQUFZLFFBQVEsSUFBUixDQUE5SCxDQUhnQzs7QUFLdEMsZ0JBQUksQ0FBQyxPQUFELEtBQWEsc0JBQUMsSUFBMEIsV0FBVyxTQUFYLElBQTBCLENBQUMsc0JBQUQsSUFBMkIsV0FBVyxTQUFYLENBQTdGLEVBQXFIO0FBQ3JILDJCQUFXLE1BQVgsQ0FBa0IsQ0FBbEIsRUFBcUIsQ0FBckIsRUFBd0IsQ0FBQyxRQUFELEVBQVcsUUFBWCxDQUF4QixFQURxSDtBQUVySCwwQkFBVSxJQUFWLENBRnFIO2FBQXpIOztBQUtBLGdCQUFJLFlBQVksc0JBQUMsSUFBMEIsV0FBVyxTQUFTLE9BQVQsSUFBc0IsQ0FBQyxzQkFBRCxJQUEyQixXQUFXLFNBQVMsT0FBVCxDQUE5RyxFQUFrSTtBQUNsSSwyQkFBVyxDQUFYLElBQWdCLENBQUMsUUFBRCxFQUFXLFFBQVgsQ0FBaEIsQ0FEa0k7QUFFbEksMEJBQVUsSUFBVixDQUZrSTthQUF0STs7QUFLQSxnQkFBSSxPQUFKLEVBQWE7QUFDVCxzQkFEUzthQUFiO1NBZko7S0FMSjs7QUEwQkEsUUFBSSxXQUFXLE1BQVgsS0FBc0IsQ0FBdEIsRUFBeUI7O0FBRXpCLGVBQU8sWUFBTTtBQUNULGdCQUFNLGdCQUFnQixvQkFBUyxnQ0FBcUIsU0FBUyxPQUFULEVBQWtCLFdBQVcsQ0FBWCxFQUFjLENBQWQsQ0FBdkMsRUFBeUQsV0FBVyxDQUFYLEVBQWMsQ0FBZCxDQUF6RCxDQUFULEVBQXFGLENBQXJGLEVBQXdGLENBQXhGLENBQWhCLENBREc7O0FBR1QsZ0JBQUksa0JBQWtCLENBQWxCLEVBQXFCO0FBQ3JCLHlCQUFTLFVBQVQsR0FBc0IsU0FBdEIsQ0FEcUI7YUFBekI7O0FBSUEsbUJBQU8sZ0JBQUssYUFBTCxFQUFvQixTQUFTLE9BQVQsRUFBa0IsUUFBUSxPQUFSLEVBQWlCLFFBQVEsSUFBUixDQUE5RCxDQVBTO1NBQU4sQ0FGa0I7S0FBN0IsTUFXTzs7QUFFSCxlQUFPLFlBQU07QUFDVCxnQkFBTSxnQkFBZ0Isb0JBQVMsZ0NBQXFCLFNBQVMsT0FBVCxFQUFrQixXQUFXLENBQVgsRUFBYyxDQUFkLENBQXZDLEVBQXlELFdBQVcsQ0FBWCxFQUFjLENBQWQsQ0FBekQsQ0FBVCxFQUFxRixDQUFyRixFQUF3RixDQUF4RixDQUFoQixDQURHO0FBRVQsZ0JBQU0sS0FBSyxnQ0FBcUIsYUFBckIsRUFBb0MsV0FBVyxDQUFYLEVBQWMsQ0FBZCxDQUFwQyxFQUFzRCxXQUFXLENBQVgsRUFBYyxDQUFkLENBQXRELENBQUwsQ0FGRztBQUdULGdCQUFNLEtBQUssZ0NBQXFCLGFBQXJCLEVBQW9DLFdBQVcsQ0FBWCxFQUFjLENBQWQsQ0FBcEMsRUFBc0QsV0FBVyxDQUFYLEVBQWMsQ0FBZCxDQUF0RCxDQUFMLENBSEc7O0FBS1QsZ0JBQUksa0JBQWtCLENBQWxCLEVBQXFCO0FBQ3JCLHlCQUFTLFVBQVQsR0FBc0IsU0FBdEIsQ0FEcUI7QUFFckIsdUJBQU8sUUFBUSxPQUFSLENBRmM7YUFBekI7O0FBS0EsbUJBQU8sZ0NBQXFCLGFBQXJCLEVBQW9DLEVBQXBDLEVBQXdDLEVBQXhDLENBQVAsQ0FWUztTQUFOLENBRko7S0FYUDtDQTVDVyIsImZpbGUiOiJnZW5lcmF0ZS1ibGVuZC1jdXJ2ZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRQcm9ncmVzc0Zyb21WYWx1ZSwgZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MsIGVhc2UsIHJlc3RyaWN0IH0gZnJvbSAnLi4vLi4vaW5jL2NhbGMnO1xuXG5jb25zdCBCTEVORF9BQ0NVUkFDWSA9IDEwO1xuXG5leHBvcnQgZGVmYXVsdCAob3V0QWN0aW9uLCBpbkFjdGlvbiwga2V5KSA9PiB7XG4gICAgY29uc3Qgb3V0VmFsdWUgPSBvdXRBY3Rpb24udmFsdWVzW2tleV07XG5cbiAgICBpZiAob3V0QWN0aW9uLmVsYXBzZWQgPT09IHVuZGVmaW5lZCB8fCAhb3V0VmFsdWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGluVmFsdWUgPSBpbkFjdGlvbi52YWx1ZXNba2V5XTtcbiAgICBjb25zdCBvdXRUb3RhbER1cmF0aW9uID0gb3V0VmFsdWUuZGVsYXkgKyBvdXRWYWx1ZS5kdXJhdGlvbjtcbiAgICBjb25zdCB0aW1lVW50aWxPdXRFbmQgPSBvdXRUb3RhbER1cmF0aW9uIC0gb3V0QWN0aW9uLmVsYXBzZWQ7XG4gICAgY29uc3QgaW5Qb3NpdGlvbkF0T3V0RW5kID0gZWFzZShyZXN0cmljdChnZXRQcm9ncmVzc0Zyb21WYWx1ZSh0aW1lVW50aWxPdXRFbmQsIDAsIGluVmFsdWUuZGVsYXkgKyBpblZhbHVlLmR1cmF0aW9uKSwgMCwgMSksIGluVmFsdWUuZnJvbSwgaW5WYWx1ZS50bywgaW5WYWx1ZS5lYXNlKTtcbiAgICBjb25zdCBpbkJpZ2dlclRoYW5PdXRBdFN0YXJ0ID0gaW5WYWx1ZS5mcm9tID4gb3V0VmFsdWUuY3VycmVudDtcbiAgICBjb25zdCBpbkJpZ2dlclRoYW5PdXRBdEVuZCA9IGluUG9zaXRpb25BdE91dEVuZCA+IG91dFZhbHVlLnRvO1xuICAgIGNvbnN0IHR3ZWVuc0ludGVyc2VjdCA9IGluQmlnZ2VyVGhhbk91dEF0U3RhcnQgIT09IGluQmlnZ2VyVGhhbk91dEF0RW5kO1xuXG4gICAgY29uc3QgYmxlbmRDdXJ2ZSA9IFtbMCwgb3V0VmFsdWUuY3VycmVudF0sIFt0aW1lVW50aWxPdXRFbmQsIGluUG9zaXRpb25BdE91dEVuZF1dO1xuXG4gICAgLy8gSWYgdHdlZW5zIGludGVyc2VjdCwgcmVzb2x2ZSB0d2VlbnMgYXQgYSByZXNvbHV0aW9uIHRvIGZpbmQgZXhhY3RseSB3aGVyZVxuICAgIGlmICh0d2VlbnNJbnRlcnNlY3QpIHtcbiAgICAgICAgY29uc3QgdGltZVN0ZXBUb1Rlc3QgPSB0aW1lVW50aWxPdXRFbmQgLyBCTEVORF9BQ0NVUkFDWTtcbiAgICAgICAgbGV0IGZvdW5kUDEgPSBmYWxzZTtcbiAgICAgICAgbGV0IGZvdW5kUDIgPSBmYWxzZTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBCTEVORF9BQ0NVUkFDWTsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB0aW1lU3RlcCA9IGkgKiB0aW1lU3RlcFRvVGVzdDtcbiAgICAgICAgICAgIGNvbnN0IG91dEF0VGltZSA9IGVhc2UoZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUob3V0QWN0aW9uLmVsYXBzZWQgKyB0aW1lU3RlcCwgb3V0VmFsdWUuZGVsYXksIG91dFZhbHVlLmR1cmF0aW9uKSwgb3V0VmFsdWUuZnJvbSwgb3V0VmFsdWUudG8sIG91dFZhbHVlLmVhc2UpO1xuICAgICAgICAgICAgY29uc3QgaW5BdFRpbWUgPSBlYXNlKGdldFByb2dyZXNzRnJvbVZhbHVlKGluQWN0aW9uLmVsYXBzZWQgKyB0aW1lU3RlcCwgaW5WYWx1ZS5kZWxheSwgaW5WYWx1ZS5kdXJhdGlvbiksIGluVmFsdWUuZnJvbSwgaW5WYWx1ZS50bywgaW5WYWx1ZS5lYXNlKTtcblxuICAgICAgICAgICAgaWYgKCFmb3VuZFAxICYmICgoaW5CaWdnZXJUaGFuT3V0QXRTdGFydCAmJiBpbkF0VGltZSA8IG91dEF0VGltZSkgfHwgKCFpbkJpZ2dlclRoYW5PdXRBdFN0YXJ0ICYmIGluQXRUaW1lID4gb3V0QXRUaW1lKSkpIHtcbiAgICAgICAgICAgICAgICBibGVuZEN1cnZlLnNwbGljZSgxLCAwLCBbdGltZVN0ZXAsIGluQXRUaW1lXSk7XG4gICAgICAgICAgICAgICAgZm91bmRQMSA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChmb3VuZFAxICYmICgoaW5CaWdnZXJUaGFuT3V0QXRTdGFydCAmJiBpbkF0VGltZSA8IG91dFZhbHVlLmN1cnJlbnQpIHx8ICghaW5CaWdnZXJUaGFuT3V0QXRTdGFydCAmJiBpbkF0VGltZSA+IG91dFZhbHVlLmN1cnJlbnQpKSkge1xuICAgICAgICAgICAgICAgIGJsZW5kQ3VydmVbMl0gPSBbdGltZVN0ZXAsIGluQXRUaW1lXTtcbiAgICAgICAgICAgICAgICBmb3VuZFAyID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGZvdW5kUDIpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChibGVuZEN1cnZlLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAvLyBQYXNzIGJldHdlZW4gdHdlZW5zIHVzaW5nIGluY29taW5nIGVhc2luZyBpZiBqdXN0IHR3byBwb2ludHNcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJsZW5kUHJvZ3Jlc3MgPSByZXN0cmljdChnZXRQcm9ncmVzc0Zyb21WYWx1ZShpbkFjdGlvbi5lbGFwc2VkLCBibGVuZEN1cnZlWzBdWzBdLCBibGVuZEN1cnZlWzFdWzBdKSwgMCwgMSk7XG5cbiAgICAgICAgICAgIGlmIChibGVuZFByb2dyZXNzID09PSAxKSB7XG4gICAgICAgICAgICAgICAgaW5BY3Rpb24uYmxlbmRDdXJ2ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGVhc2UoYmxlbmRQcm9ncmVzcywgb3V0VmFsdWUuY3VycmVudCwgaW5WYWx1ZS5jdXJyZW50LCBpblZhbHVlLmVhc2UpO1xuICAgICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFBhc3MgYmV0d2VlbiB0d2VlbnMgdXNpbmcgYmV6aWVyIGludGVycG9sYXRpb25cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJsZW5kUHJvZ3Jlc3MgPSByZXN0cmljdChnZXRQcm9ncmVzc0Zyb21WYWx1ZShpbkFjdGlvbi5lbGFwc2VkLCBibGVuZEN1cnZlWzBdWzBdLCBibGVuZEN1cnZlWzJdWzBdKSwgMCwgMSk7XG4gICAgICAgICAgICBjb25zdCBhUCA9IGdldFZhbHVlRnJvbVByb2dyZXNzKGJsZW5kUHJvZ3Jlc3MsIGJsZW5kQ3VydmVbMF1bMV0sIGJsZW5kQ3VydmVbMV1bMV0pO1xuICAgICAgICAgICAgY29uc3QgYlAgPSBnZXRWYWx1ZUZyb21Qcm9ncmVzcyhibGVuZFByb2dyZXNzLCBibGVuZEN1cnZlWzFdWzFdLCBibGVuZEN1cnZlWzJdWzFdKTtcblxuICAgICAgICAgICAgaWYgKGJsZW5kUHJvZ3Jlc3MgPT09IDEpIHtcbiAgICAgICAgICAgICAgICBpbkFjdGlvbi5ibGVuZEN1cnZlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHJldHVybiBpblZhbHVlLmN1cnJlbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBnZXRWYWx1ZUZyb21Qcm9ncmVzcyhibGVuZFByb2dyZXNzLCBhUCwgYlApO1xuICAgICAgICB9O1xuICAgIH1cbn07XG4iXX0=

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _adapter = __webpack_require__(12);
	
	var _adapter2 = _interopRequireDefault(_adapter);
	
	var _cssAdapter = __webpack_require__(14);
	
	var _cssAdapter2 = _interopRequireDefault(_cssAdapter);
	
	var _svgAdapter = __webpack_require__(15);
	
	var _svgAdapter2 = _interopRequireDefault(_svgAdapter);
	
	var _svgPathAdapter = __webpack_require__(16);
	
	var _svgPathAdapter2 = _interopRequireDefault(_svgPathAdapter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (element) {
	    var detectedAdapter = _adapter2.default;
	
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
	
	    return detectedAdapter(element);
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvYmluZC1hZGFwdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBS2UsVUFBQyxPQUFELEVBQWE7QUFDeEIsUUFBSSxtQ0FBSjs7O0FBRHdCLFFBSXBCLG1CQUFtQixXQUFuQixJQUFrQyxRQUFRLE9BQVIsS0FBb0IsS0FBcEIsRUFBMkI7QUFDN0Q7OztBQUQ2RCxLQUFqRSxNQUlPLElBQUksbUJBQW1CLFVBQW5CLEVBQStCO0FBQ3RDLGdCQUFJLFFBQVEsT0FBUixLQUFvQixNQUFwQixFQUE0QjtBQUM1QiwyREFENEI7YUFBaEMsTUFFTztBQUNILHVEQURHO2FBRlA7U0FERzs7QUFRUCxXQUFPLGdCQUFnQixPQUFoQixDQUFQLENBaEJ3QjtDQUFiIiwiZmlsZSI6ImJpbmQtYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYWRhcHRlciBmcm9tICcuLi9hZGFwdGVyL2FkYXB0ZXInO1xuaW1wb3J0IGNzc0FkYXB0ZXIgZnJvbSAnLi4vYWRhcHRlci9jc3MtYWRhcHRlcic7XG5pbXBvcnQgc3ZnQWRhcHRlciBmcm9tICcuLi9hZGFwdGVyL3N2Zy1hZGFwdGVyJztcbmltcG9ydCBzdmdQYXRoQWRhcHRlciBmcm9tICcuLi9hZGFwdGVyL3N2Zy1wYXRoLWFkYXB0ZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoZWxlbWVudCkgPT4ge1xuICAgIGxldCBkZXRlY3RlZEFkYXB0ZXIgPSBhZGFwdGVyO1xuXG4gICAgLy8gSWYgSFRNTEVsZW1lbnQgbG9hZCBDU1NcbiAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IGVsZW1lbnQudGFnTmFtZSA9PT0gJ3N2ZycpIHtcbiAgICAgICAgZGV0ZWN0ZWRBZGFwdGVyID0gY3NzQWRhcHRlcjtcblxuICAgIC8vIE9yIFNWR1xuICAgIH0gZWxzZSBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIFNWR0VsZW1lbnQpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQudGFnTmFtZSA9PT0gJ3BhdGgnKSB7XG4gICAgICAgICAgICBkZXRlY3RlZEFkYXB0ZXIgPSBzdmdQYXRoQWRhcHRlcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRldGVjdGVkQWRhcHRlciA9IHN2Z0FkYXB0ZXI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGV0ZWN0ZWRBZGFwdGVyKGVsZW1lbnQpO1xufTtcbiJdfQ==

/***/ },
/* 41 */
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
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _angle = __webpack_require__(22);
	
	var _angle2 = _interopRequireDefault(_angle);
	
	var _alpha = __webpack_require__(21);
	
	var _alpha2 = _interopRequireDefault(_alpha);
	
	var _axes = __webpack_require__(23);
	
	var _axes2 = _interopRequireDefault(_axes);
	
	var _color = __webpack_require__(24);
	
	var _color2 = _interopRequireDefault(_color);
	
	var _scale = __webpack_require__(31);
	
	var _scale2 = _interopRequireDefault(_scale);
	
	var _shadow = __webpack_require__(32);
	
	var _shadow2 = _interopRequireDefault(_shadow);
	
	var _positions = __webpack_require__(28);
	
	var _positions2 = _interopRequireDefault(_positions);
	
	var _px = __webpack_require__(29);
	
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
	    margin: _positions2.default,
	    padding: _positions2.default,
	    width: _px2.default,
	    height: _px2.default,
	
	    // Axes
	    backgroundPosition: _axes2.default,
	    perspectiveOrigin: _axes2.default,
	    transformOrigin: _axes2.default,
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2Nzcy92YWx1ZS10eXBlLW1hcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkFTZTs7QUFFWCwwQkFGVztBQUdYLG9DQUhXO0FBSVgsaUNBSlc7QUFLWCx5QkFMVztBQU1YLDJCQU5XOzs7QUFTWCxnQ0FUVztBQVVYLG1DQVZXO0FBV1gscUNBWFc7QUFZWCxzQ0FaVztBQWFYLG9DQWJXO0FBY1gsOEJBZFc7OztBQWlCWCwrQkFqQlc7QUFrQlgsZ0NBbEJXO0FBbUJYLHVCQW5CVztBQW9CWCx3QkFwQlc7OztBQXVCWCxzQ0F2Qlc7QUF3QlgscUNBeEJXO0FBeUJYLG1DQXpCVzs7O0FBNEJYLGdDQTVCVztBQTZCWCwrQkE3Qlc7OztBQWdDWCwyQkFoQ1c7QUFpQ1gsNEJBakNXO0FBa0NYLDRCQWxDVztBQW1DWCw0QkFuQ1c7QUFvQ1gsMEJBcENXO0FBcUNYLDJCQXJDVztBQXNDWCwyQkF0Q1c7QUF1Q1gsMkJBdkNXO0FBd0NYLDBCQXhDVztBQXlDWCwwQkF6Q1c7QUEwQ1gsMEJBMUNXO0FBMkNYLDRCQTNDVztBQTRDWCw0QkE1Q1c7QUE2Q1gsNEJBN0NXO0FBOENYLDZCQTlDVztBQStDWCw0QkEvQ1ciLCJmaWxlIjoidmFsdWUtdHlwZS1tYXAuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFuZ2xlIGZyb20gJy4uLy4uL3ZhbHVlLXR5cGVzL2FuZ2xlJztcbmltcG9ydCBhbHBoYSBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9hbHBoYSc7XG5pbXBvcnQgYXhlcyBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9heGVzJztcbmltcG9ydCBjb2xvciBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9jb2xvcic7XG5pbXBvcnQgc2NhbGUgZnJvbSAnLi4vLi4vdmFsdWUtdHlwZXMvc2NhbGUnO1xuaW1wb3J0IHNoYWRvdyBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9zaGFkb3cnO1xuaW1wb3J0IHBvc2l0aW9ucyBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9wb3NpdGlvbnMnO1xuaW1wb3J0IHB4IGZyb20gJy4uLy4uL3ZhbHVlLXR5cGVzL3B4JztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIC8vIENvbG9yIHByb3BzXG4gICAgY29sb3I6IGNvbG9yLFxuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3IsXG4gICAgb3V0bGluZUNvbG9yOiBjb2xvcixcbiAgICBmaWxsOiBjb2xvcixcbiAgICBzdHJva2U6IGNvbG9yLFxuXG4gICAgLy8gQm9yZGVyIHByb3BzXG4gICAgYm9yZGVyQ29sb3I6IGNvbG9yLFxuICAgIGJvcmRlclRvcENvbG9yOiBjb2xvcixcbiAgICBib3JkZXJSaWdodENvbG9yOiBjb2xvcixcbiAgICBib3JkZXJCb3R0b21Db2xvcjogY29sb3IsXG4gICAgYm9yZGVyTGVmdENvbG9yOiBjb2xvcixcbiAgICBib3JkZXJSYWRpdXM6IHB4LFxuXG4gICAgLy8gUG9zaXRpb25pbmdcbiAgICBtYXJnaW46IHBvc2l0aW9ucyxcbiAgICBwYWRkaW5nOiBwb3NpdGlvbnMsXG4gICAgd2lkdGg6IHB4LFxuICAgIGhlaWdodDogcHgsXG5cbiAgICAvLyBBeGVzXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiBheGVzLFxuICAgIHBlcnNwZWN0aXZlT3JpZ2luOiBheGVzLFxuICAgIHRyYW5zZm9ybU9yaWdpbjogYXhlcyxcblxuICAgIC8vIFNoYWRvd3NcbiAgICB0ZXh0U2hhZG93OiBzaGFkb3csXG4gICAgYm94U2hhZG93OiBzaGFkb3csICAgXG5cbiAgICAvLyBUcmFuc2Zvcm0gcHJvcGVydGllc1xuICAgIHJvdGF0ZTogYW5nbGUsXG4gICAgcm90YXRlWDogYW5nbGUsXG4gICAgcm90YXRlWTogYW5nbGUsXG4gICAgcm90YXRlWjogYW5nbGUsXG4gICAgc2NhbGU6IHNjYWxlLFxuICAgIHNjYWxlWDogc2NhbGUsXG4gICAgc2NhbGVZOiBzY2FsZSxcbiAgICBzY2FsZVo6IHNjYWxlLFxuICAgIHNrZXdYOiBhbmdsZSxcbiAgICBza2V3WTogYW5nbGUsXG4gICAgZGlzdGFuY2U6IHB4LFxuICAgIHRyYW5zbGF0ZVg6IHB4LFxuICAgIHRyYW5zbGF0ZVk6IHB4LFxuICAgIHRyYW5zbGF0ZVo6IHB4LFxuICAgIHBlcnNwZWN0aXZlOiBweCxcbiAgICBvcGFjaXR5OiBhbHBoYVxufTsiXX0=

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _transformProps = __webpack_require__(45);
	
	var _transformProps2 = _interopRequireDefault(_transformProps);
	
	var _prefixer = __webpack_require__(44);
	
	var _prefixer2 = _interopRequireDefault(_prefixer);
	
	var _utils = __webpack_require__(20);
	
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
/* 44 */
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
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _dictionary = __webpack_require__(50);
	
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
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = build;
	/*
	    Convert percentage to pixels
	    
	    @param [number]: Percentage of total length
	    @param [number]: Total length
	*/
	var percentToPixels = function (percent, length) {
	    return parseFloat(percent) / 100 * length + 'px';
	};
	
	function build(state, length) {
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
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL3N2Zy1wYXRoL2J1aWxkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztrQkFRd0I7Ozs7Ozs7QUFGeEIsSUFBTSxrQkFBa0IsVUFBQyxPQUFELEVBQVUsTUFBVjtXQUFxQixVQUFDLENBQVcsT0FBWCxJQUFzQixHQUF0QixHQUE2QixNQUE5QixHQUF1QyxJQUF2QztDQUFyQjs7QUFFVCxTQUFTLEtBQVQsQ0FBZSxLQUFmLEVBQXNCLE1BQXRCLEVBQThCO0FBQ3pDLFFBQU0sU0FBUyxFQUFULENBRG1DO0FBRXpDLFFBQU0sa0JBQWtCO0FBQ3BCLGdCQUFRLENBQVI7QUFDQSxpQkFBUyxTQUFTLElBQVQ7S0FGUCxDQUZtQztBQU16QyxRQUFJLGVBQWUsS0FBZixDQU5xQzs7QUFRekMsU0FBSyxJQUFJLEdBQUosSUFBVyxLQUFoQixFQUF1QjtBQUNuQixZQUFJLE1BQU0sY0FBTixDQUFxQixHQUFyQixDQUFKLEVBQStCO0FBQzNCLGdCQUFNLFFBQVEsTUFBTSxHQUFOLENBQVIsQ0FEcUI7O0FBRzNCLG9CQUFRLEdBQVI7QUFDQSxxQkFBSyxRQUFMLENBREE7QUFFQSxxQkFBSyxTQUFMO0FBQ0ksbUNBQWUsSUFBZixDQURKO0FBRUksb0NBQWdCLEdBQWhCLElBQXVCLGdCQUFnQixLQUFoQixFQUF1QixNQUF2QixDQUF2QixDQUZKO0FBR0ksMEJBSEo7QUFGQSxxQkFNSyxRQUFMO0FBQ0ksMkJBQU8sbUJBQVAsSUFBOEIsZ0JBQWdCLENBQUMsS0FBRCxFQUFRLE1BQXhCLENBQTlCLENBREo7QUFFSSwwQkFGSjtBQU5BO0FBVUksMkJBQU8sR0FBUCxJQUFjLEtBQWQsQ0FESjtBQVRBLGFBSDJCO1NBQS9CO0tBREo7O0FBbUJBLFFBQUksWUFBSixFQUFrQjtBQUNkLGVBQU8sa0JBQVAsSUFBNkIsZ0JBQWdCLE1BQWhCLEdBQXlCLEdBQXpCLEdBQStCLGdCQUFnQixPQUFoQixDQUQ5QztLQUFsQjs7QUFJQSxXQUFPLE1BQVAsQ0EvQnlDO0NBQTlCIiwiZmlsZSI6ImJ1aWxkLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gICAgQ29udmVydCBwZXJjZW50YWdlIHRvIHBpeGVsc1xuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogUGVyY2VudGFnZSBvZiB0b3RhbCBsZW5ndGhcbiAgICBAcGFyYW0gW251bWJlcl06IFRvdGFsIGxlbmd0aFxuKi9cbmNvbnN0IHBlcmNlbnRUb1BpeGVscyA9IChwZXJjZW50LCBsZW5ndGgpID0+IChwYXJzZUZsb2F0KHBlcmNlbnQpIC8gMTAwKSAqIGxlbmd0aCArICdweCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkKHN0YXRlLCBsZW5ndGgpIHtcbiAgICBjb25zdCBzdHlsZXMgPSB7fTtcbiAgICBjb25zdCBkYXNoQXJyYXlTdHlsZXMgPSB7XG4gICAgICAgIGxlbmd0aDogMCxcbiAgICAgICAgc3BhY2luZzogbGVuZ3RoICsgJ3B4J1xuICAgIH07XG4gICAgbGV0IGhhc0Rhc2hBcnJheSA9IGZhbHNlO1xuXG4gICAgZm9yIChsZXQga2V5IGluIHN0YXRlKSB7XG4gICAgICAgIGlmIChzdGF0ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHN0YXRlW2tleV07XG5cbiAgICAgICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgICBjYXNlICdsZW5ndGgnOlxuICAgICAgICAgICAgY2FzZSAnc3BhY2luZyc6XG4gICAgICAgICAgICAgICAgaGFzRGFzaEFycmF5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBkYXNoQXJyYXlTdHlsZXNba2V5XSA9IHBlcmNlbnRUb1BpeGVscyh2YWx1ZSwgbGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ29mZnNldCc6XG4gICAgICAgICAgICAgICAgc3R5bGVzWydzdHJva2UtZGFzaG9mZnNldCddID0gcGVyY2VudFRvUGl4ZWxzKC12YWx1ZSwgbGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgc3R5bGVzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChoYXNEYXNoQXJyYXkpIHtcbiAgICAgICAgc3R5bGVzWydzdHJva2UtZGFzaGFycmF5J10gPSBkYXNoQXJyYXlTdHlsZXMubGVuZ3RoICsgJyAnICsgZGFzaEFycmF5U3R5bGVzLnNwYWNpbmc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0eWxlcztcbn0iXX0=

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _alpha = __webpack_require__(21);
	
	var _alpha2 = _interopRequireDefault(_alpha);
	
	var _axes = __webpack_require__(23);
	
	var _axes2 = _interopRequireDefault(_axes);
	
	var _color = __webpack_require__(24);
	
	var _color2 = _interopRequireDefault(_color);
	
	var _complex = __webpack_require__(25);
	
	var _complex2 = _interopRequireDefault(_complex);
	
	var _scale = __webpack_require__(31);
	
	var _scale2 = _interopRequireDefault(_scale);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    fill: _color2.default,
	    stroke: _color2.default,
	    scale: _scale2.default,
	    scaleX: _scale2.default,
	    scaleY: _scale2.default,
	    transformOrigin: _axes2.default,
	    d: _complex2.default,
	    points: _complex2.default,
	    opacity: _alpha2.default,
	    fillOpacity: _alpha2.default,
	    strokeOpacity: _alpha2.default
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL3N2Zy92YWx1ZS10eXBlLW1hcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkFNZTtBQUNYLHlCQURXO0FBRVgsMkJBRlc7QUFHWCwwQkFIVztBQUlYLDJCQUpXO0FBS1gsMkJBTFc7QUFNWCxtQ0FOVztBQU9YLHdCQVBXO0FBUVgsNkJBUlc7QUFTWCw0QkFUVztBQVVYLGdDQVZXO0FBV1gsa0NBWFciLCJmaWxlIjoidmFsdWUtdHlwZS1tYXAuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFscGhhIGZyb20gJy4uLy4uL3ZhbHVlLXR5cGVzL2FscGhhJztcbmltcG9ydCBheGVzIGZyb20gJy4uLy4uL3ZhbHVlLXR5cGVzL2F4ZXMnO1xuaW1wb3J0IGNvbG9yIGZyb20gJy4uLy4uL3ZhbHVlLXR5cGVzL2NvbG9yJztcbmltcG9ydCBjb21wbGV4IGZyb20gJy4uLy4uL3ZhbHVlLXR5cGVzL2NvbXBsZXgnO1xuaW1wb3J0IHNjYWxlIGZyb20gJy4uLy4uL3ZhbHVlLXR5cGVzL3NjYWxlJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGZpbGw6IGNvbG9yLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc2NhbGU6IHNjYWxlLFxuICAgIHNjYWxlWDogc2NhbGUsXG4gICAgc2NhbGVZOiBzY2FsZSxcbiAgICB0cmFuc2Zvcm1PcmlnaW46IGF4ZXMsXG4gICAgZDogY29tcGxleCxcbiAgICBwb2ludHM6IGNvbXBsZXgsXG4gICAgb3BhY2l0eTogYWxwaGEsXG4gICAgZmlsbE9wYWNpdHk6IGFscGhhLFxuICAgIHN0cm9rZU9wYWNpdHk6IGFscGhhXG59OyJdfQ==

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = build;
	
	var _utils = __webpack_require__(20);
	
	var _transformProps = __webpack_require__(45);
	
	var _transformProps2 = _interopRequireDefault(_transformProps);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ZERO_NOT_ZERO = 0.0001;
	
	function build(state, origin) {
	    var props = {},
	        hasTransform = false,
	        scale = state.scale !== undefined ? state.scale || ZERO_NOT_ZERO : state.scaleX || 1,
	        scaleY = state.scaleY !== undefined ? state.scaleY || ZERO_NOT_ZERO : scale || 1,
	        transformOriginX = origin.x,
	        transformOriginY = origin.y,
	        scaleTransformX = -transformOriginX * (scale * 1),
	        scaleTransformY = -transformOriginY * (scaleY * 1),
	        scaleReplaceX = transformOriginX / scale,
	        scaleReplaceY = transformOriginY / scaleY,
	        transform = {
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL3N2Zy9idWlsZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7a0JBS3dCOzs7Ozs7Ozs7O0FBRnhCLElBQU0sZ0JBQWdCLE1BQWhCOztBQUVTLFNBQVMsS0FBVCxDQUFlLEtBQWYsRUFBc0IsTUFBdEIsRUFBOEI7QUFDekMsUUFBSSxRQUFRLEVBQVI7UUFDQSxlQUFlLEtBQWY7UUFDQSxRQUFRLE1BQU0sS0FBTixLQUFnQixTQUFoQixHQUE0QixNQUFNLEtBQU4sSUFBZSxhQUFmLEdBQStCLE1BQU0sTUFBTixJQUFnQixDQUFoQjtRQUNuRSxTQUFTLE1BQU0sTUFBTixLQUFpQixTQUFqQixHQUE2QixNQUFNLE1BQU4sSUFBZ0IsYUFBaEIsR0FBZ0MsU0FBUyxDQUFUO1FBQ3RFLG1CQUFtQixPQUFPLENBQVA7UUFDbkIsbUJBQW1CLE9BQU8sQ0FBUDtRQUNuQixrQkFBa0IsQ0FBRSxnQkFBRixJQUFzQixRQUFRLENBQVIsQ0FBdEI7UUFDbEIsa0JBQWtCLENBQUUsZ0JBQUYsSUFBc0IsU0FBUyxDQUFULENBQXRCO1FBQ2xCLGdCQUFnQixtQkFBbUIsS0FBbkI7UUFDaEIsZ0JBQWdCLG1CQUFtQixNQUFuQjtRQUNoQixZQUFZO0FBQ1Isa0NBQXdCLE1BQU0sVUFBTixVQUFxQixNQUFNLFVBQU4sT0FBN0M7QUFDQSw4QkFBb0IseUJBQW9CLCtCQUEwQixlQUFVLDBCQUFxQix1QkFBa0Isb0JBQW5IO0FBQ0EsNEJBQWtCLE1BQU0sTUFBTixVQUFpQiwwQkFBcUIsdUJBQXhEO0FBQ0EsMEJBQWdCLE1BQU0sS0FBTixPQUFoQjtBQUNBLDBCQUFnQixNQUFNLEtBQU4sT0FBaEI7S0FMSixDQVhxQzs7QUFtQnpDLFNBQUssSUFBSSxHQUFKLElBQVcsS0FBaEIsRUFBdUI7QUFDbkIsWUFBSSxNQUFNLGNBQU4sQ0FBcUIsR0FBckIsQ0FBSixFQUErQjtBQUMzQixnQkFBSSx5QkFBZSxHQUFmLENBQUosRUFBeUI7QUFDckIsK0JBQWUsSUFBZixDQURxQjthQUF6QixNQUVPO0FBQ0gsc0JBQU0sd0JBQVksR0FBWixDQUFOLElBQTBCLE1BQU0sR0FBTixDQUExQixDQURHO2FBRlA7U0FESjtLQURKOztBQVVBLFFBQUksWUFBSixFQUFrQjtBQUNkLGNBQU0sU0FBTixHQUFrQixFQUFsQixDQURjOztBQUdkLGFBQUssSUFBSSxHQUFKLElBQVcsU0FBaEIsRUFBMkI7QUFDdkIsZ0JBQUksVUFBVSxjQUFWLENBQXlCLEdBQXpCLENBQUosRUFBbUM7QUFDL0Isb0JBQU0sZUFBZSxHQUFDLEtBQVEsT0FBUixHQUFtQixHQUFwQixHQUEwQixHQUExQixDQURVO0FBRS9CLHNCQUFNLFNBQU4sSUFBbUIsVUFBVSxHQUFWLEVBQWUsT0FBZixDQUF1QixZQUF2QixFQUFxQyxZQUFyQyxDQUFuQixDQUYrQjthQUFuQztTQURKO0tBSEo7O0FBV0EsV0FBTyxLQUFQLENBeEN5QztDQUE5QiIsImZpbGUiOiJidWlsZC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjYW1lbFRvRGFzaCB9IGZyb20gJy4uLy4uL2luYy91dGlscyc7XG5pbXBvcnQgdHJhbnNmb3JtUHJvcHMgZnJvbSAnLi4vY3NzL3RyYW5zZm9ybS1wcm9wcyc7XG5cbmNvbnN0IFpFUk9fTk9UX1pFUk8gPSAwLjAwMDE7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkKHN0YXRlLCBvcmlnaW4pIHtcbiAgICBsZXQgcHJvcHMgPSB7fSxcbiAgICAgICAgaGFzVHJhbnNmb3JtID0gZmFsc2UsXG4gICAgICAgIHNjYWxlID0gc3RhdGUuc2NhbGUgIT09IHVuZGVmaW5lZCA/IHN0YXRlLnNjYWxlIHx8IFpFUk9fTk9UX1pFUk8gOiBzdGF0ZS5zY2FsZVggfHwgMSxcbiAgICAgICAgc2NhbGVZID0gc3RhdGUuc2NhbGVZICE9PSB1bmRlZmluZWQgPyBzdGF0ZS5zY2FsZVkgfHwgWkVST19OT1RfWkVSTyA6IHNjYWxlIHx8IDEsXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpblggPSBvcmlnaW4ueCxcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luWSA9IG9yaWdpbi55LFxuICAgICAgICBzY2FsZVRyYW5zZm9ybVggPSAtIHRyYW5zZm9ybU9yaWdpblggKiAoc2NhbGUgKiAxKSxcbiAgICAgICAgc2NhbGVUcmFuc2Zvcm1ZID0gLSB0cmFuc2Zvcm1PcmlnaW5ZICogKHNjYWxlWSAqIDEpLFxuICAgICAgICBzY2FsZVJlcGxhY2VYID0gdHJhbnNmb3JtT3JpZ2luWCAvIHNjYWxlLFxuICAgICAgICBzY2FsZVJlcGxhY2VZID0gdHJhbnNmb3JtT3JpZ2luWSAvIHNjYWxlWSxcbiAgICAgICAgdHJhbnNmb3JtID0ge1xuICAgICAgICAgICAgdHJhbnNsYXRlOiBgdHJhbnNsYXRlKCR7c3RhdGUudHJhbnNsYXRlWH0sICR7c3RhdGUudHJhbnNsYXRlWX0pIGAsXG4gICAgICAgICAgICBzY2FsZTogYHRyYW5zbGF0ZSgke3NjYWxlVHJhbnNmb3JtWH0sICR7c2NhbGVUcmFuc2Zvcm1ZfSkgc2NhbGUoJHtzY2FsZX0sICR7c2NhbGVZfSkgdHJhbnNsYXRlKCR7c2NhbGVSZXBsYWNlWH0sICR7c2NhbGVSZXBsYWNlWX0pIGAsXG4gICAgICAgICAgICByb3RhdGU6IGByb3RhdGUoJHtzdGF0ZS5yb3RhdGV9LCAke3RyYW5zZm9ybU9yaWdpblh9LCAke3RyYW5zZm9ybU9yaWdpbll9KSBgLFxuICAgICAgICAgICAgc2tld1g6IGBza2V3WCgke3N0YXRlLnNrZXdYfSkgYCxcbiAgICAgICAgICAgIHNrZXdZOiBgc2tld1koJHtzdGF0ZS5za2V3WX0pIGBcbiAgICAgICAgfTtcblxuICAgIGZvciAobGV0IGtleSBpbiBzdGF0ZSkge1xuICAgICAgICBpZiAoc3RhdGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgaWYgKHRyYW5zZm9ybVByb3BzW2tleV0pIHtcbiAgICAgICAgICAgICAgICBoYXNUcmFuc2Zvcm0gPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcm9wc1tjYW1lbFRvRGFzaChrZXkpXSA9IHN0YXRlW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaGFzVHJhbnNmb3JtKSB7XG4gICAgICAgIHByb3BzLnRyYW5zZm9ybSA9ICcnO1xuXG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0cmFuc2Zvcm0pIHtcbiAgICAgICAgICAgIGlmICh0cmFuc2Zvcm0uaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRWYWx1ZSA9IChrZXkgPT09ICdzY2FsZScpID8gJzEnIDogJzAnO1xuICAgICAgICAgICAgICAgIHByb3BzLnRyYW5zZm9ybSArPSB0cmFuc2Zvcm1ba2V5XS5yZXBsYWNlKC91bmRlZmluZWQvZywgZGVmYXVsdFZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwcm9wcztcbn0iXX0=

/***/ },
/* 49 */
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
/* 50 */
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
/* 51 */
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
/* 52 */
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
/* 53 */
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
/* 54 */
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
	
	                if (task.onDeactivate) {
	                    task.onDeactivate(task);
	                }
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
	
	                updateRunningCount(true, task.isLazy);
	
	                if (task.onActivate) {
	                    task.onActivate(task);
	                }
	            }
	        }
	
	        activateQueue.splice(0, activateQueueLength);
	
	        return runningIds;
	    }
	};
	//# sourceMappingURL=data:application/json;base64,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Q0FBdkIsRUFBMEIscUJBQTFCOzs7OztBQTNCZ0IsWUFnQ1Ysc0JBQXNCLGNBQWMsTUFBZCxDQWhDWjs7QUFrQ2hCLGFBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLG1CQUFKLEVBQXlCLEdBQXpDLEVBQThDO0FBQzFDLGdCQUFNLEtBQUssY0FBYyxDQUFkLENBQUwsQ0FEb0M7QUFFMUMsZ0JBQU0sZ0JBQWdCLFdBQVcsT0FBWCxDQUFtQixFQUFuQixDQUFoQixDQUZvQztBQUcxQyxnQkFBTSxPQUFPLFlBQVksRUFBWixDQUFQOzs7QUFIb0MsZ0JBTXRDLGtCQUFrQixDQUFDLENBQUQsSUFBTSxJQUF4QixFQUE4QjtBQUM5QixvQkFBSSxLQUFLLFVBQUwsRUFBaUI7QUFDakIsK0JBQVcsT0FBWCxDQUFtQixFQUFuQixFQURpQjtpQkFBckIsTUFFTztBQUNILCtCQUFXLElBQVgsQ0FBZ0IsRUFBaEIsRUFERztpQkFGUDs7QUFNQSxtQ0FBbUIsSUFBbkIsRUFBeUIsS0FBSyxNQUFMLENBQXpCLENBUDhCOztBQVM5QixvQkFBSSxLQUFLLFVBQUwsRUFBaUI7QUFDakIseUJBQUssVUFBTCxDQUFnQixJQUFoQixFQURpQjtpQkFBckI7YUFUSjtTQU5KOztBQXFCQSxzQkFBYyxNQUFkLENBQXFCLENBQXJCLEVBQXdCLG1CQUF4QixFQXZEZ0I7O0FBeURoQixlQUFPLFVBQVAsQ0F6RGdCO0tBQU4iLCJmaWxlIjoibWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBbaW50XTogSW5jcmVtZW50ZWQgZm9yIGVhY2ggbmV3IHJ1bm5pbmcgdGFza1xubGV0IGN1cnJlbnRUYXNrSWQgPSAwO1xuXG4vLyBbaW50XTogTnVtYmVyIG9mIGFsbCBydW5uaW5nIHRhc2tlc1xubGV0IHRvdGFsUnVubmluZ0NvdW50ID0gMDtcblxuLy8gW2ludF06IE51bWJlciBvZiBydW5uaW5nIHRhc2tlcyBleGNsdWRpbmcgYmFja2dyb3VuZCB0YXNrZXNcbmxldCBub25CYWNrZ3JvdW5kUnVubmluZ0NvdW50ID0gMDtcblxuLy8gW2FycmF5XTogQXJyYXkgb2YgcnVubmluZyB0YXNrIElEc1xuY29uc3QgcnVubmluZ0lkcyA9IFtdO1xuXG4vLyBbb2JqZWN0XTogTWFwIG9mIHJ1bm5pbmcgdGFza2VzXG5jb25zdCBhY3RpdmVUYXNrcyA9IHt9O1xuXG4vLyBbYXJyYXldOiBBcnJheSBvZiB0YXNrIElEcyBxdWV1ZWQgZm9yIGFjdGl2YXRpb25cbmNvbnN0IGFjdGl2YXRlUXVldWUgPSBbXTtcblxuLy8gW2FycmF5XTogQXJyYXkgb2YgdGFzayBJRHMgcXVldWVkIGZvciBkZWFjdGl2YXRpb25cbmNvbnN0IGRlYWN0aXZhdGVRdWV1ZSA9IFtdO1xuXG4vKlxuICAgIFVwZGF0ZSBhY3RpdmF0ZS9kZWFjdGl2YXRlIHF1ZXVlc1xuXG4gICAgQHBhcmFtIFtudW1iZXJdXG4gICAgQHBhcmFtIFthcnJheV1cbiAgICBAcGFyYW0gW2FycmF5XVxuKi9cbmNvbnN0IHVwZGF0ZVF1ZXVlcyA9IChpZCwgaW5MaXN0LCBvdXRMaXN0KSA9PiB7XG4gICAgY29uc3QgaW5Qb3NpdGlvbiA9IGluTGlzdC5pbmRleE9mKGlkKTtcbiAgICBjb25zdCBvdXRQb3NpdGlvbiA9IG91dExpc3QuaW5kZXhPZihpZCk7XG5cbiAgICBpZiAoaW5Qb3NpdGlvbiA9PT0gLTEpIHtcbiAgICAgICAgaW5MaXN0LnB1c2goaWQpO1xuICAgIH1cblxuICAgIGlmIChvdXRQb3NpdGlvbiA+IC0xKSB7XG4gICAgICAgIG91dExpc3Quc3BsaWNlKG91dFBvc2l0aW9uLCAxKTtcbiAgICB9XG59O1xuXG4vKlxuICAgIFVwZGF0ZSBydW5uaW5nXG5cbiAgICBbYm9vbGVhbl06IGB0cnVlYCB0byBhZGRcbiAgICBbYm9vbGVhbl06IGB0cnVlYCBpZiBsYXp5XG4qL1xuY29uc3QgdXBkYXRlUnVubmluZ0NvdW50ID0gKGFkZCwgaXNMYXp5KSA9PiB7XG4gICAgY29uc3QgbW9kaWZ5ID0gYWRkID8gMSA6IC0xO1xuXG4gICAgdG90YWxSdW5uaW5nQ291bnQgKz0gbW9kaWZ5O1xuXG4gICAgaWYgKCFpc0xhenkpIHtcbiAgICAgICAgbm9uQmFja2dyb3VuZFJ1bm5pbmdDb3VudCArPSBtb2RpZnk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGFjdGl2ZVRhc2tzLFxuXG4gICAgLy8gQWN0aXZhdGUgYSB0YXNrXG4gICAgYWN0aXZhdGU6IChpZCwgdGFzaykgPT4ge1xuICAgICAgICBhY3RpdmVUYXNrc1tpZF0gPSB0YXNrO1xuICAgICAgICB0YXNrLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdXBkYXRlUXVldWVzKGlkLCBhY3RpdmF0ZVF1ZXVlLCBkZWFjdGl2YXRlUXVldWUpO1xuXG4gICAgICAgIGlmICh0YXNrLm9uQWN0aXZhdGUpIHtcbiAgICAgICAgICAgIHRhc2sub25BY3RpdmF0ZSh0YXNrKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBEZWFjdGl2YXRlIGEgdGFza1xuICAgIGRlYWN0aXZhdGU6IChpZCkgPT4ge1xuICAgICAgICBjb25zdCB0YXNrID0gYWN0aXZlVGFza3NbaWRdO1xuXG4gICAgICAgIGlmICh0YXNrKSB7XG4gICAgICAgICAgICB1cGRhdGVRdWV1ZXMoaWQsIGRlYWN0aXZhdGVRdWV1ZSwgYWN0aXZhdGVRdWV1ZSk7XG4gICAgICAgICAgICB0YXNrLmlzQWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmICh0YXNrLm9uRGVhY3RpdmF0ZSkge1xuICAgICAgICAgICAgICAgIHRhc2sub25EZWFjdGl2YXRlKHRhc2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIE51bWJlciBiYWNrZ3JvdW5kIHRhc2tlc1xuICAgIGdldE5vbkJhY2tncm91bmRSdW5uaW5nQ291bnQ6ICgpID0+IG5vbkJhY2tncm91bmRSdW5uaW5nQ291bnQsXG5cbiAgICAvLyBJbmNyZW1lbnQgY3VycmVudCB0YXNrIElEIGFuZCByZXR1cm5cbiAgICBnZXRUYXNrSWQ6ICgpID0+IGN1cnJlbnRUYXNrSWQrKyxcblxuICAgIC8vIFJlc29sdmUgYWN0aXZhdGUvZGVhY3RpdmF0ZSB0YXNrZXMgYW5kIHJldHVybiBhY3RpdmUgaWRzXG4gICAgZ2V0QWN0aXZlSWRzOiAoKSA9PiB7XG4gICAgICAgIC8qXG4gICAgICAgICAgICB0YXNrIGRlYWN0aXZhdGUgcXVldWVcbiAgICAgICAgKi9cbiAgICAgICAgY29uc3QgZGVhY3RpdmF0ZVF1ZXVlTGVuZ3RoID0gZGVhY3RpdmF0ZVF1ZXVlLmxlbmd0aDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlYWN0aXZhdGVRdWV1ZUxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBpZCA9IGRlYWN0aXZhdGVRdWV1ZVtpXTtcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZUlkSW5kZXggPSBydW5uaW5nSWRzLmluZGV4T2YoaWQpO1xuICAgICAgICAgICAgY29uc3QgdGFzayA9IGFjdGl2ZVRhc2tzW2lkXTtcblxuICAgICAgICAgICAgLy8gSWYgdGhpcyBpcyBhIHJ1bm5pbmcgdGFzaywgZGVhY3RpdmF0ZVxuICAgICAgICAgICAgaWYgKGFjdGl2ZUlkSW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgIHJ1bm5pbmdJZHMuc3BsaWNlKGFjdGl2ZUlkSW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZVJ1bm5pbmdDb3VudChmYWxzZSwgdGFzay5pc0xhenkpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBhY3RpdmVUYXNrc1tpZF07XG5cbiAgICAgICAgICAgICAgICBpZiAodGFzay5vbkRlYWN0aXZhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFzay5vbkRlYWN0aXZhdGUodGFzayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLypcbiAgICAgICAgICAgIEVtcHR5IGRlYWN0aXZhdGUgcXVldWUuIFdlIHVzZSBgQXJyYXkuc3BsaWNlYCBiZWNhdXNlIGl0IGRvZXNuJ3RcbiAgICAgICAgICAgIHdvcmtzIG9uIHRoZSBvcmlnaW5hbCBhcnJheSBzbyB3ZSBkb24ndCBoYXZlIHRvIGdhcmJhZ2UgY29sbGVjdCBhbnl0aGluZ1xuICAgICAgICAqL1xuICAgICAgICBkZWFjdGl2YXRlUXVldWUuc3BsaWNlKDAsIGRlYWN0aXZhdGVRdWV1ZUxlbmd0aCk7XG5cbiAgICAgICAgLypcbiAgICAgICAgICAgIHRhc2sgYWN0aXZhdGUgcXVldWVcbiAgICAgICAgKi9cbiAgICAgICAgY29uc3QgYWN0aXZhdGVRdWV1ZUxlbmd0aCA9IGFjdGl2YXRlUXVldWUubGVuZ3RoO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWN0aXZhdGVRdWV1ZUxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBpZCA9IGFjdGl2YXRlUXVldWVbaV07XG4gICAgICAgICAgICBjb25zdCBhY3RpdmVJZEluZGV4ID0gcnVubmluZ0lkcy5pbmRleE9mKGlkKTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2sgPSBhY3RpdmVUYXNrc1tpZF07XG5cbiAgICAgICAgICAgIC8vIElmIHRhc2sgaXNuJ3QgYWxyZWFkeSBydW5uaW5nLCBhY3RpdmF0ZVxuICAgICAgICAgICAgaWYgKGFjdGl2ZUlkSW5kZXggPT09IC0xICYmIHRhc2spIHtcbiAgICAgICAgICAgICAgICBpZiAodGFzay5pc1ByaW9yaXR5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmdJZHMudW5zaGlmdChpZCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ0lkcy5wdXNoKGlkKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB1cGRhdGVSdW5uaW5nQ291bnQodHJ1ZSwgdGFzay5pc0xhenkpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRhc2sub25BY3RpdmF0ZSkge1xuICAgICAgICAgICAgICAgICAgICB0YXNrLm9uQWN0aXZhdGUodGFzayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYWN0aXZhdGVRdWV1ZS5zcGxpY2UoMCwgYWN0aXZhdGVRdWV1ZUxlbmd0aCk7XG5cbiAgICAgICAgcmV0dXJuIHJ1bm5pbmdJZHM7XG4gICAgfVxufTtcbiJdfQ==

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTAxY2MwZTM3NDQyZmFhZTYzZTgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvYWQvZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9wb3Btb3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rhc2svdGltZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvQWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL1R3ZWVuLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL1BoeXNpY3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvVHJhY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rhc2svVGFzay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9GbG93LmpzIiwid2VicGFjazovLy8uL3NyYy9pbnB1dC9JbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL3N0YWdnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy90aW1lbGluZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9hZGFwdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hZGFwdGVyL2F0dHItYWRhcHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9jc3MtYWRhcHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9zdmctYWRhcHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9zdmctcGF0aC1hZGFwdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2Vhc2luZy9wcmVzZXQtZWFzaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2Zsb3cvZ2V0LWZsb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy9jYWxjLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL2FscGhhLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9hbmdsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvYXhlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvY29sb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL2NvbXBsZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL2hleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvaHNsLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9wb3NpdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL3B4LmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9yZ2IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL3NjYWxlLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9zaGFkb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL3VuaXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy90cmFuc2Zvcm1lcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL2RldGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL251bWVyaWNhbC12YWx1ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lucHV0L1BvaW50ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rhc2svbG9vcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9mbG93L2dlbmVyYXRlLWJsZW5kLWN1cnZlLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvYmluZC1hZGFwdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hZGFwdGVyL2Nzcy9zdGF0ZS1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkYXB0ZXIvY3NzL3ZhbHVlLXR5cGUtbWFwLmpzIiwid2VicGFjazovLy8uL3NyYy9hZGFwdGVyL2Nzcy9idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9jc3MvcHJlZml4ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkYXB0ZXIvY3NzL3RyYW5zZm9ybS1wcm9wcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9zdmctcGF0aC9idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9zdmcvdmFsdWUtdHlwZS1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkYXB0ZXIvc3ZnL2J1aWxkLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kZWZhdWx0LXByb3BzLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kaWN0aW9uYXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2Vhc2luZy9jcmVhdGUtZWFzaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2Vhc2luZy9jcmVhdGUtYmV6aWVyLmpzIiwid2VicGFjazovLy8uL3NyYy90YXNrL3RpY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rhc2svbWFuYWdlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx3Qzs7Ozs7OztBQ3RDQTs7QUFFQTs7QUFFQTs7QUFFQSx3Q0FBdUMsNkJBQTZCLFlBQVksRUFBRSxPQUFPLGlCQUFpQixtQkFBbUIsdUJBQXVCLDRFQUE0RSxFQUFFLEVBQUUsc0JBQXNCLGVBQWUsRUFBRTs7QUFFM1E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTJDLCtwQjs7Ozs7O0FDZjNDOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFD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OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTJDLDI5Qzs7Ozs7O0FDaEMzQzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUEyQyx1K0Q7Ozs7OztBQy9DM0M7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUEyQyxtMEY7Ozs7OztBQzFEM0M7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBMkMsMnpDOzs7Ozs7QUNoQzNDOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RixHQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1RkFBc0YsYUFBYTtBQUNuRztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTJDLG05Szs7Ozs7O0FDMUczQzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLHdDQUF1QyxtQkFBbUI7O0FBRTFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLDRDQUEyQywrdUM7Ozs7OztBQzVCM0M7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFD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TDs7QUFFQTtBQUNBLDRDQUEyQyx1MUU7Ozs7OztBQzlDM0M7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF1QiwyQkFBMkI7QUFDbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF1Qix5QkFBeUI7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBMkMsbStRIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgNTAxY2MwZTM3NDQyZmFhZTYzZThcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfcG9wbW90aW9uID0gcmVxdWlyZSgnLi4vcG9wbW90aW9uJyk7XG5cbnZhciBwb3Btb3Rpb24gPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfcG9wbW90aW9uKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxudmFyIFVJcmVmID0gd2luZG93Lm1vdGlvbjtcblxucG9wbW90aW9uLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgd2luZG93Lm1vdGlvbiA9IFVJcmVmO1xufTtcblxud2luZG93Lm1vdGlvbiA9IHdpbmRvdy5wb3Btb3Rpb24gPSBwb3Btb3Rpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXNiMkZrTDJkc2IySmhiQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN08wbEJRVms3T3pzN1FVRkZXaXhKUVVGTkxGRkJRVkVzVDBGQlR5eE5RVUZRT3p0QlFVVmtMRlZCUVZVc1ZVRkJWaXhIUVVGMVFpeFpRVUZaTzBGQlF5OUNMRmRCUVU4c1RVRkJVQ3hIUVVGblFpeExRVUZvUWl4RFFVUXJRanREUVVGYU96dEJRVWwyUWl4UFFVRlBMRTFCUVZBc1IwRkJaMElzVDBGQlR5eFRRVUZRTEVkQlFXMUNMRk5CUVc1Q0lpd2labWxzWlNJNkltZHNiMkpoYkM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRDOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ0tpQmhjeUJ3YjNCdGIzUnBiMjRnWm5KdmJTQW5MaTR2Y0c5d2JXOTBhVzl1Snp0Y2JseHVZMjl1YzNRZ1ZVbHlaV1lnUFNCM2FXNWtiM2N1Ylc5MGFXOXVPMXh1WEc1d2IzQnRiM1JwYjI0dWJtOURiMjVtYkdsamRDQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0IzYVc1a2IzY3ViVzkwYVc5dUlEMGdWVWx5WldZN1hHNTlPMXh1WEc1M2FXNWtiM2N1Ylc5MGFXOXVJRDBnZDJsdVpHOTNMbkJ2Y0cxdmRHbHZiaUE5SUhCdmNHMXZkR2x2YmpzaVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2xvYWQvZ2xvYmFsLmpzXG4gKiogbW9kdWxlIGlkID0gMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy50cmFuc2Zvcm1lcnMgPSBleHBvcnRzLnZhbHVlVHlwZSA9IGV4cG9ydHMuc2V0R2xvYmFsRGlsYXRpb24gPSBleHBvcnRzLnV0aWxzID0gZXhwb3J0cy5jYWxjID0gZXhwb3J0cy5kZXRlY3RGbG93ID0gZXhwb3J0cy5lYXNpbmcgPSBleHBvcnRzLmFkYXB0ZXIgPSBleHBvcnRzLnRpbWVsaW5lID0gZXhwb3J0cy5zdGFnZ2VyID0gZXhwb3J0cy50YXNrID0gZXhwb3J0cy5pbnB1dCA9IGV4cG9ydHMudHJhY2sgPSBleHBvcnRzLnBoeXNpY3MgPSBleHBvcnRzLnR3ZWVuID0gZXhwb3J0cy5mbG93ID0gdW5kZWZpbmVkO1xuXG52YXIgX3RpbWVyID0gcmVxdWlyZSgnLi90YXNrL3RpbWVyJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnc2V0R2xvYmFsRGlsYXRpb24nLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aW1lci5zZXRHbG9iYWxEaWxhdGlvbjtcbiAgICB9XG59KTtcblxudmFyIF9BY3Rpb24gPSByZXF1aXJlKCcuL2FjdGlvbnMvQWN0aW9uJyk7XG5cbnZhciBfQWN0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0FjdGlvbik7XG5cbnZhciBfRmxvdyA9IHJlcXVpcmUoJy4vYWN0aW9ucy9GbG93Jyk7XG5cbnZhciBfRmxvdzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9GbG93KTtcblxudmFyIF9Ud2VlbiA9IHJlcXVpcmUoJy4vYWN0aW9ucy9Ud2VlbicpO1xuXG52YXIgX1R3ZWVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1R3ZWVuKTtcblxudmFyIF9QaHlzaWNzID0gcmVxdWlyZSgnLi9hY3Rpb25zL1BoeXNpY3MnKTtcblxudmFyIF9QaHlzaWNzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BoeXNpY3MpO1xuXG52YXIgX1RyYWNrID0gcmVxdWlyZSgnLi9hY3Rpb25zL1RyYWNrJyk7XG5cbnZhciBfVHJhY2syID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVHJhY2spO1xuXG52YXIgX1Rhc2sgPSByZXF1aXJlKCcuL3Rhc2svVGFzaycpO1xuXG52YXIgX1Rhc2syID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVGFzayk7XG5cbnZhciBfSW5wdXQgPSByZXF1aXJlKCcuL2lucHV0L0lucHV0Jyk7XG5cbnZhciBfSW5wdXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfSW5wdXQpO1xuXG52YXIgX3N0YWdnZXIyID0gcmVxdWlyZSgnLi9pbmMvc3RhZ2dlcicpO1xuXG52YXIgX3N0YWdnZXIzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RhZ2dlcjIpO1xuXG52YXIgX3RpbWVsaW5lMiA9IHJlcXVpcmUoJy4vaW5jL3RpbWVsaW5lJyk7XG5cbnZhciBfdGltZWxpbmUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdGltZWxpbmUyKTtcblxudmFyIF9hZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVyL2FkYXB0ZXInKTtcblxudmFyIF9hZGFwdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FkYXB0ZXIpO1xuXG52YXIgX2F0dHJBZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVyL2F0dHItYWRhcHRlcicpO1xuXG52YXIgX2F0dHJBZGFwdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2F0dHJBZGFwdGVyKTtcblxudmFyIF9jc3NBZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVyL2Nzcy1hZGFwdGVyJyk7XG5cbnZhciBfY3NzQWRhcHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jc3NBZGFwdGVyKTtcblxudmFyIF9zdmdBZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVyL3N2Zy1hZGFwdGVyJyk7XG5cbnZhciBfc3ZnQWRhcHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdmdBZGFwdGVyKTtcblxudmFyIF9zdmdQYXRoQWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlci9zdmctcGF0aC1hZGFwdGVyJyk7XG5cbnZhciBfc3ZnUGF0aEFkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ZnUGF0aEFkYXB0ZXIpO1xuXG52YXIgX3ByZXNldEVhc2luZyA9IHJlcXVpcmUoJy4vYWN0aW9ucy9lYXNpbmcvcHJlc2V0LWVhc2luZycpO1xuXG52YXIgX3ByZXNldEVhc2luZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmVzZXRFYXNpbmcpO1xuXG52YXIgX2dldEZsb3cgPSByZXF1aXJlKCcuL2FjdGlvbnMvZmxvdy9nZXQtZmxvdycpO1xuXG52YXIgX2dldEZsb3cyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0Rmxvdyk7XG5cbnZhciBfY2FsYzIgPSByZXF1aXJlKCcuL2luYy9jYWxjJyk7XG5cbnZhciBfY2FsYyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9jYWxjMik7XG5cbnZhciBfdXRpbHMyID0gcmVxdWlyZSgnLi9pbmMvdXRpbHMnKTtcblxudmFyIF91dGlscyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF91dGlsczIpO1xuXG52YXIgX2FscGhhID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy9hbHBoYScpO1xuXG52YXIgX2FscGhhMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FscGhhKTtcblxudmFyIF9hbmdsZSA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvYW5nbGUnKTtcblxudmFyIF9hbmdsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hbmdsZSk7XG5cbnZhciBfYXhlcyA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvYXhlcycpO1xuXG52YXIgX2F4ZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXhlcyk7XG5cbnZhciBfY29sb3IgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL2NvbG9yJyk7XG5cbnZhciBfY29sb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29sb3IpO1xuXG52YXIgX2NvbXBsZXggPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL2NvbXBsZXgnKTtcblxudmFyIF9jb21wbGV4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbXBsZXgpO1xuXG52YXIgX2hleCA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvaGV4Jyk7XG5cbnZhciBfaGV4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hleCk7XG5cbnZhciBfaHNsID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy9oc2wnKTtcblxudmFyIF9oc2wyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaHNsKTtcblxudmFyIF9wb3NpdGlvbnMgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL3Bvc2l0aW9ucycpO1xuXG52YXIgX3Bvc2l0aW9uczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NpdGlvbnMpO1xuXG52YXIgX3B4ID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy9weCcpO1xuXG52YXIgX3B4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3B4KTtcblxudmFyIF9yZ2IgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL3JnYicpO1xuXG52YXIgX3JnYjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZ2IpO1xuXG52YXIgX3NjYWxlID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy9zY2FsZScpO1xuXG52YXIgX3NjYWxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NjYWxlKTtcblxudmFyIF9zaGFkb3cgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL3NoYWRvdycpO1xuXG52YXIgX3NoYWRvdzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaGFkb3cpO1xuXG52YXIgX3VuaXQgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL3VuaXQnKTtcblxudmFyIF91bml0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3VuaXQpO1xuXG52YXIgX3RyYW5zZm9ybWVyczIgPSByZXF1aXJlKCcuL2luYy90cmFuc2Zvcm1lcnMnKTtcblxudmFyIF90cmFuc2Zvcm1lcnMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdHJhbnNmb3JtZXJzMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8vIEV4cG9ydCBmYWN0b3J5IGZ1bmN0aW9uc1xudmFyIGZsb3cgPSBleHBvcnRzLmZsb3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseShfRmxvdzIuZGVmYXVsdCwgW251bGxdLmNvbmNhdChhcmdzKSkpKCk7XG59OyAvLyBJbXBvcnQgY2xhc3NlcyAtIGxvbmcgdGVybSBnb2FsIHRvIG1vdmUgdG93YXJkcyBjb21wb3NpdGlvblxuXG52YXIgdHdlZW4gPSBleHBvcnRzLnR3ZWVuID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgcmV0dXJuIG5ldyBfVHdlZW4yLmRlZmF1bHQocHJvcHMpO1xufTtcbnZhciBwaHlzaWNzID0gZXhwb3J0cy5waHlzaWNzID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgcmV0dXJuIG5ldyBfUGh5c2ljczIuZGVmYXVsdChwcm9wcyk7XG59O1xudmFyIHRyYWNrID0gZXhwb3J0cy50cmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoX1RyYWNrMi5kZWZhdWx0LCBbbnVsbF0uY29uY2F0KGFyZ3MpKSkoKTtcbn07XG52YXIgaW5wdXQgPSBleHBvcnRzLmlucHV0ID0gZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4zKSwgX2tleTMgPSAwOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XG4gICAgICAgIGFyZ3NbX2tleTNdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseShfSW5wdXQyLmRlZmF1bHQsIFtudWxsXS5jb25jYXQoYXJncykpKSgpO1xufTtcbnZhciB0YXNrID0gZXhwb3J0cy50YXNrID0gZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIF9sZW40ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW40KSwgX2tleTQgPSAwOyBfa2V5NCA8IF9sZW40OyBfa2V5NCsrKSB7XG4gICAgICAgIGFyZ3NbX2tleTRdID0gYXJndW1lbnRzW19rZXk0XTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseShfVGFzazIuZGVmYXVsdCwgW251bGxdLmNvbmNhdChhcmdzKSkpKCk7XG59O1xuZXhwb3J0cy5zdGFnZ2VyID0gX3N0YWdnZXIzLmRlZmF1bHQ7XG5leHBvcnRzLnRpbWVsaW5lID0gX3RpbWVsaW5lMy5kZWZhdWx0O1xuXG4vLyBBZGFwdGVyc1xuXG52YXIgYWRhcHRlciA9IGV4cG9ydHMuYWRhcHRlciA9IHsgY3JlYXRlOiBfYWRhcHRlcjIuZGVmYXVsdCwgYXR0cjogX2F0dHJBZGFwdGVyMi5kZWZhdWx0LCBjc3M6IF9jc3NBZGFwdGVyMi5kZWZhdWx0LCBzdmc6IF9zdmdBZGFwdGVyMi5kZWZhdWx0LCBzdmdQYXRoOiBfc3ZnUGF0aEFkYXB0ZXIyLmRlZmF1bHQgfTtcblxuLy8gRWFzaW5nXG5leHBvcnRzLmVhc2luZyA9IF9wcmVzZXRFYXNpbmcyLmRlZmF1bHQ7XG52YXIgZGV0ZWN0RmxvdyA9IGV4cG9ydHMuZGV0ZWN0RmxvdyA9IF9nZXRGbG93Mi5kZWZhdWx0O1xuXG4vLyBVdGlsc1xuZXhwb3J0cy5jYWxjID0gX2NhbGM7XG5leHBvcnRzLnV0aWxzID0gX3V0aWxzO1xuXG4vLyBWYWx1ZSB0eXBlc1xuXG52YXIgdmFsdWVUeXBlID0gZXhwb3J0cy52YWx1ZVR5cGUgPSB7IGFscGhhOiBfYWxwaGEyLmRlZmF1bHQsIGFuZ2xlOiBfYW5nbGUyLmRlZmF1bHQsIGF4ZXM6IF9heGVzMi5kZWZhdWx0LCBjb2xvcjogX2NvbG9yMi5kZWZhdWx0LCBjb21wbGV4OiBfY29tcGxleDIuZGVmYXVsdCwgaGV4OiBfaGV4Mi5kZWZhdWx0LCBoc2w6IF9oc2wyLmRlZmF1bHQsIHBvc2l0aW9uczogX3Bvc2l0aW9uczIuZGVmYXVsdCwgcHg6IF9weDIuZGVmYXVsdCwgcmdiOiBfcmdiMi5kZWZhdWx0LCBzY2FsZTogX3NjYWxlMi5kZWZhdWx0LCBzaGFkb3c6IF9zaGFkb3cyLmRlZmF1bHQsIHVuaXQ6IF91bml0Mi5kZWZhdWx0IH07XG5cbi8vIFRyYW5zZm9ybWVyc1xuZXhwb3J0cy50cmFuc2Zvcm1lcnMgPSBfdHJhbnNmb3JtZXJzO1xuXG4vKlxuICAgIFJldHVybnMgYSB2ZXJzaW9uIG9mIHRoZSBBY3Rpb24gYm91bmQgdG8gYSBGbG93XG5cbiAgICBXZSdyZSBhZGRpbmcgYG9uYCBoZXJlIGJlY2F1c2UgRmxvdyBleHRlbmRzIEFjdGlvbixcbiAgICBvdGhlcndpc2UgY3JlYXRpbmcgYSBjaXJjdWxhciBtb2R1bGFyIGRlcGVuZGVuY3kuIEZ1dHVyZVxuICAgIHJlZmFjdG9yaW5nLCBpZSBtb3ZpbmcgdG8gYSBjb21wb3NpdGlvbmFsIG1vZGVsIHdpbGxcbiAgICByZW1vdmUgdGhlIG5lZWQgZm9yIHVzIHRvIGRvIHRoaXMgaGVyZS5cbiovXG5cbl9BY3Rpb24yLmRlZmF1bHQucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICBpZiAoIWVsZW1lbnQuY29ubmVjdCkge1xuICAgICAgICBlbGVtZW50ID0gKDAsIF9nZXRGbG93Mi5kZWZhdWx0KShlbGVtZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudC5jb25uZWN0KHRoaXMpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5d2IzQnRiM1JwYjI0dWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096dHpRa0Z0UTFNN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN08wRkJla0pHTEVsQlFVMHNjMEpCUVU4N2MwTkJRVWs3T3pzN05FVkJRWEZDTzBOQlFYcENPenRCUVVOaUxFbEJRVTBzZDBKQlFWRXNWVUZCUXl4TFFVRkVPMWRCUVZjc2IwSkJRVlVzUzBGQlZqdERRVUZZTzBGQlEyUXNTVUZCVFN3MFFrRkJWU3hWUVVGRExFdEJRVVE3VjBGQlZ5eHpRa0ZCV1N4TFFVRmFPME5CUVZnN1FVRkRhRUlzU1VGQlRTeDNRa0ZCVVR0MVEwRkJTVHM3T3pzMlJVRkJjMEk3UTBGQk1VSTdRVUZEWkN4SlFVRk5MSGRDUVVGUk8zVkRRVUZKT3pzN096WkZRVUZ6UWp0RFFVRXhRanRCUVVOa0xFbEJRVTBzYzBKQlFVODdkVU5CUVVrN096czdORVZCUVhGQ08wTkJRWHBDTzFGQlEySTdVVUZEUVRzN096dEJRVkZCTEVsQlFVMHNORUpCUVZVc1JVRkJSU3g1UWtGQlJpeEZRVUZWTERKQ1FVRldMRVZCUVdkQ0xIbENRVUZvUWl4RlFVRnhRaXg1UWtGQmNrSXNSVUZCTUVJc2FVTkJRVEZDTEVWQlFWWTdPenRSUVVkT08wRkJSVUVzU1VGQlRTeHRSRUZCVGpzN08xRkJSMHM3VVVGRFFUczdPenRCUVdsQ1RDeEpRVUZOTEdkRFFVRlpMRVZCUVVVc2MwSkJRVVlzUlVGQlV5eHpRa0ZCVkN4RlFVRm5RaXh2UWtGQmFFSXNSVUZCYzBJc2MwSkJRWFJDTEVWQlFUWkNMREJDUVVFM1FpeEZRVUZ6UXl4clFrRkJkRU1zUlVGQk1rTXNhMEpCUVRORExFVkJRV2RFTERoQ1FVRm9SQ3hGUVVFeVJDeG5Ra0ZCTTBRc1JVRkJLMFFzYTBKQlFTOUVMRVZCUVc5RkxITkNRVUZ3UlN4RlFVRXlSU3gzUWtGQk0wVXNSVUZCYlVZc2IwSkJRVzVHTEVWQlFWbzdPenRSUVVkRU96czdPenM3T3pzN096dEJRVlZhTEdsQ1FVRlBMRk5CUVZBc1EwRkJhVUlzUlVGQmFrSXNSMEZCYzBJc1ZVRkJWU3hQUVVGV0xFVkJRVzFDTzBGQlEzSkRMRkZCUVVrc1EwRkJReXhSUVVGUkxFOUJRVklzUlVGQmFVSTdRVUZEYkVJc2EwSkJRVlVzZFVKQlFWRXNUMEZCVWl4RFFVRldMRU5CUkd0Q08wdEJRWFJDT3p0QlFVbEJMRmRCUVU4c1VVRkJVU3hQUVVGU0xFTkJRV2RDTEVsQlFXaENMRU5CUVZBc1EwRk1jVU03UTBGQmJrSWlMQ0ptYVd4bElqb2ljRzl3Ylc5MGFXOXVMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwTDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk4dklFbHRjRzl5ZENCamJHRnpjMlZ6SUMwZ2JHOXVaeUIwWlhKdElHZHZZV3dnZEc4Z2JXOTJaU0IwYjNkaGNtUnpJR052YlhCdmMybDBhVzl1WEc1cGJYQnZjblFnUVdOMGFXOXVJR1p5YjIwZ0p5NHZZV04wYVc5dWN5OUJZM1JwYjI0bk8xeHVhVzF3YjNKMElFWnNiM2NnWm5KdmJTQW5MaTloWTNScGIyNXpMMFpzYjNjbk8xeHVhVzF3YjNKMElGUjNaV1Z1SUdaeWIyMGdKeTR2WVdOMGFXOXVjeTlVZDJWbGJpYzdYRzVwYlhCdmNuUWdVR2g1YzJsamN5Qm1jbTl0SUNjdUwyRmpkR2x2Ym5NdlVHaDVjMmxqY3ljN1hHNXBiWEJ2Y25RZ1ZISmhZMnNnWm5KdmJTQW5MaTloWTNScGIyNXpMMVJ5WVdOckp6dGNibWx0Y0c5eWRDQlVZWE5ySUdaeWIyMGdKeTR2ZEdGemF5OVVZWE5ySnp0Y2JtbHRjRzl5ZENCSmJuQjFkQ0JtY205dElDY3VMMmx1Y0hWMEwwbHVjSFYwSnp0Y2JseHVMeThnUlhod2IzSjBJR1poWTNSdmNua2dablZ1WTNScGIyNXpYRzVsZUhCdmNuUWdZMjl1YzNRZ1pteHZkeUE5SUNndUxpNWhjbWR6S1NBOVBpQnVaWGNnUm14dmR5Z3VMaTVoY21kektUdGNibVY0Y0c5eWRDQmpiMjV6ZENCMGQyVmxiaUE5SUNod2NtOXdjeWtnUFQ0Z2JtVjNJRlIzWldWdUtIQnliM0J6S1R0Y2JtVjRjRzl5ZENCamIyNXpkQ0J3YUhsemFXTnpJRDBnS0hCeWIzQnpLU0E5UGlCdVpYY2dVR2g1YzJsamN5aHdjbTl3Y3lrN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnZEhKaFkyc2dQU0FvTGk0dVlYSm5jeWtnUFQ0Z2JtVjNJRlJ5WVdOcktDNHVMbUZ5WjNNcE8xeHVaWGh3YjNKMElHTnZibk4wSUdsdWNIVjBJRDBnS0M0dUxtRnlaM01wSUQwK0lHNWxkeUJKYm5CMWRDZ3VMaTVoY21kektUdGNibVY0Y0c5eWRDQmpiMjV6ZENCMFlYTnJJRDBnS0M0dUxtRnlaM01wSUQwK0lHNWxkeUJVWVhOcktDNHVMbUZ5WjNNcE8xeHVaWGh3YjNKMElITjBZV2RuWlhJZ1puSnZiU0FuTGk5cGJtTXZjM1JoWjJkbGNpYzdYRzVsZUhCdmNuUWdkR2x0Wld4cGJtVWdabkp2YlNBbkxpOXBibU12ZEdsdFpXeHBibVVuTzF4dVhHNHZMeUJCWkdGd2RHVnljMXh1YVcxd2IzSjBJR055WldGMFpTQm1jbTl0SUNjdUwyRmtZWEIwWlhJdllXUmhjSFJsY2ljN1hHNXBiWEJ2Y25RZ1lYUjBjaUJtY205dElDY3VMMkZrWVhCMFpYSXZZWFIwY2kxaFpHRndkR1Z5Snp0Y2JtbHRjRzl5ZENCamMzTWdabkp2YlNBbkxpOWhaR0Z3ZEdWeUwyTnpjeTFoWkdGd2RHVnlKenRjYm1sdGNHOXlkQ0J6ZG1jZ1puSnZiU0FuTGk5aFpHRndkR1Z5TDNOMlp5MWhaR0Z3ZEdWeUp6dGNibWx0Y0c5eWRDQnpkbWRRWVhSb0lHWnliMjBnSnk0dllXUmhjSFJsY2k5emRtY3RjR0YwYUMxaFpHRndkR1Z5Snp0Y2JtVjRjRzl5ZENCamIyNXpkQ0JoWkdGd2RHVnlJRDBnZXlCamNtVmhkR1VzSUdGMGRISXNJR056Y3l3Z2MzWm5MQ0J6ZG1kUVlYUm9JSDA3WEc1Y2JpOHZJRVZoYzJsdVoxeHVaWGh3YjNKMElHVmhjMmx1WnlCbWNtOXRJQ2N1TDJGamRHbHZibk12WldGemFXNW5MM0J5WlhObGRDMWxZWE5wYm1jbk8xeHVhVzF3YjNKMElHZGxkRVpzYjNjZ1puSnZiU0FuTGk5aFkzUnBiMjV6TDJac2IzY3ZaMlYwTFdac2IzY25PMXh1Wlhod2IzSjBJR052Ym5OMElHUmxkR1ZqZEVac2IzY2dQU0JuWlhSR2JHOTNPMXh1WEc0dkx5QlZkR2xzYzF4dVpYaHdiM0owSUNvZ1lYTWdZMkZzWXlCbWNtOXRJQ2N1TDJsdVl5OWpZV3hqSnp0Y2JtVjRjRzl5ZENBcUlHRnpJSFYwYVd4eklHWnliMjBnSnk0dmFXNWpMM1YwYVd4ekp6dGNibVY0Y0c5eWRDQjdJSE5sZEVkc2IySmhiRVJwYkdGMGFXOXVJSDBnWm5KdmJTQW5MaTkwWVhOckwzUnBiV1Z5Snp0Y2JseHVMeThnVm1Gc2RXVWdkSGx3WlhOY2JtbHRjRzl5ZENCaGJIQm9ZU0JtY205dElDY3VMM1poYkhWbExYUjVjR1Z6TDJGc2NHaGhKenRjYm1sdGNHOXlkQ0JoYm1kc1pTQm1jbTl0SUNjdUwzWmhiSFZsTFhSNWNHVnpMMkZ1WjJ4bEp6dGNibWx0Y0c5eWRDQmhlR1Z6SUdaeWIyMGdKeTR2ZG1Gc2RXVXRkSGx3WlhNdllYaGxjeWM3WEc1cGJYQnZjblFnWTI5c2IzSWdabkp2YlNBbkxpOTJZV3gxWlMxMGVYQmxjeTlqYjJ4dmNpYzdYRzVwYlhCdmNuUWdZMjl0Y0d4bGVDQm1jbTl0SUNjdUwzWmhiSFZsTFhSNWNHVnpMMk52YlhCc1pYZ25PMXh1YVcxd2IzSjBJR2hsZUNCbWNtOXRJQ2N1TDNaaGJIVmxMWFI1Y0dWekwyaGxlQ2M3WEc1cGJYQnZjblFnYUhOc0lHWnliMjBnSnk0dmRtRnNkV1V0ZEhsd1pYTXZhSE5zSnp0Y2JtbHRjRzl5ZENCd2IzTnBkR2x2Ym5NZ1puSnZiU0FuTGk5MllXeDFaUzEwZVhCbGN5OXdiM05wZEdsdmJuTW5PMXh1YVcxd2IzSjBJSEI0SUdaeWIyMGdKeTR2ZG1Gc2RXVXRkSGx3WlhNdmNIZ25PMXh1YVcxd2IzSjBJSEpuWWlCbWNtOXRJQ2N1TDNaaGJIVmxMWFI1Y0dWekwzSm5ZaWM3WEc1cGJYQnZjblFnYzJOaGJHVWdabkp2YlNBbkxpOTJZV3gxWlMxMGVYQmxjeTl6WTJGc1pTYzdYRzVwYlhCdmNuUWdjMmhoWkc5M0lHWnliMjBnSnk0dmRtRnNkV1V0ZEhsd1pYTXZjMmhoWkc5M0p6dGNibWx0Y0c5eWRDQjFibWwwSUdaeWIyMGdKeTR2ZG1Gc2RXVXRkSGx3WlhNdmRXNXBkQ2M3WEc1bGVIQnZjblFnWTI5dWMzUWdkbUZzZFdWVWVYQmxJRDBnZXlCaGJIQm9ZU3dnWVc1bmJHVXNJR0Y0WlhNc0lHTnZiRzl5TENCamIyMXdiR1Y0TENCb1pYZ3NJR2h6YkN3Z2NHOXphWFJwYjI1ekxDQndlQ3dnY21kaUxDQnpZMkZzWlN3Z2MyaGhaRzkzTENCMWJtbDBJSDA3WEc1Y2JpOHZJRlJ5WVc1elptOXliV1Z5YzF4dVpYaHdiM0owSUNvZ1lYTWdkSEpoYm5ObWIzSnRaWEp6SUdaeWIyMGdKeTR2YVc1akwzUnlZVzV6Wm05eWJXVnljeWM3WEc1Y2JpOHFYRzRnSUNBZ1VtVjBkWEp1Y3lCaElIWmxjbk5wYjI0Z2IyWWdkR2hsSUVGamRHbHZiaUJpYjNWdVpDQjBieUJoSUVac2IzZGNibHh1SUNBZ0lGZGxKM0psSUdGa1pHbHVaeUJnYjI1Z0lHaGxjbVVnWW1WallYVnpaU0JHYkc5M0lHVjRkR1Z1WkhNZ1FXTjBhVzl1TEZ4dUlDQWdJRzkwYUdWeWQybHpaU0JqY21WaGRHbHVaeUJoSUdOcGNtTjFiR0Z5SUcxdlpIVnNZWElnWkdWd1pXNWtaVzVqZVM0Z1JuVjBkWEpsWEc0Z0lDQWdjbVZtWVdOMGIzSnBibWNzSUdsbElHMXZkbWx1WnlCMGJ5QmhJR052YlhCdmMybDBhVzl1WVd3Z2JXOWtaV3dnZDJsc2JGeHVJQ0FnSUhKbGJXOTJaU0IwYUdVZ2JtVmxaQ0JtYjNJZ2RYTWdkRzhnWkc4Z2RHaHBjeUJvWlhKbExseHVLaTljYmtGamRHbHZiaTV3Y205MGIzUjVjR1V1YjI0Z1BTQm1kVzVqZEdsdmJpQW9aV3hsYldWdWRDa2dlMXh1SUNBZ0lHbG1JQ2doWld4bGJXVnVkQzVqYjI1dVpXTjBLU0I3WEc0Z0lDQWdJQ0FnSUdWc1pXMWxiblFnUFNCblpYUkdiRzkzS0dWc1pXMWxiblFwTzF4dUlDQWdJSDFjYmx4dUlDQWdJSEpsZEhWeWJpQmxiR1Z0Wlc1MExtTnZibTVsWTNRb2RHaHBjeWs3WEc1OU95SmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9wb3Btb3Rpb24uanNcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnNldEdsb2JhbERpbGF0aW9uID0gdW5kZWZpbmVkO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbnZhciBNQVhfRUxBUFNFRCA9IDMzO1xuXG52YXIgY3VycmVudCA9IDA7XG52YXIgZWxhcHNlZCA9IDE2Ljc7XG52YXIgZGlsYXRpb24gPSAxO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZnJhbWVzdGFtcCkge1xuICAgICAgICBlbGFwc2VkID0gTWF0aC5tYXgoTWF0aC5taW4oZnJhbWVzdGFtcCAtIGN1cnJlbnQsIE1BWF9FTEFQU0VEKSwgMSkgKiBkaWxhdGlvbjtcbiAgICAgICAgY3VycmVudCA9IGZyYW1lc3RhbXA7XG4gICAgfSxcblxuICAgIHN0YXJ0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjdXJyZW50ID0gKDAsIF91dGlscy5jdXJyZW50VGltZSkoKTtcbiAgICB9LFxuXG4gICAgZ2V0RWxhcHNlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZWxhcHNlZDtcbiAgICB9XG59O1xudmFyIHNldEdsb2JhbERpbGF0aW9uID0gZXhwb3J0cy5zZXRHbG9iYWxEaWxhdGlvbiA9IGZ1bmN0aW9uIChuZXdEaWxhdGlvbikge1xuICAgIHJldHVybiBkaWxhdGlvbiA9IG5ld0RpbGF0aW9uO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MFlYTnJMM1JwYldWeUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN1FVRkZRU3hKUVVGTkxHTkJRV01zUlVGQlpEczdRVUZGVGl4SlFVRkpMRlZCUVZVc1EwRkJWanRCUVVOS0xFbEJRVWtzVlVGQlZTeEpRVUZXTzBGQlEwb3NTVUZCU1N4WFFVRlhMRU5CUVZnN08ydENRVVZYTzBGQlExZ3NXVUZCVVN4VlFVRkRMRlZCUVVRc1JVRkJaMEk3UVVGRGNFSXNhMEpCUVZVc1MwRkJTeXhIUVVGTUxFTkJRVk1zUzBGQlN5eEhRVUZNTEVOQlFWTXNZVUZCWVN4UFFVRmlMRVZCUVhOQ0xGZEJRUzlDTEVOQlFWUXNSVUZCYzBRc1EwRkJkRVFzU1VGQk1rUXNVVUZCTTBRc1EwRkVWVHRCUVVWd1FpeHJRa0ZCVlN4VlFVRldMRU5CUm05Q08wdEJRV2hDT3p0QlFVdFNMRmRCUVU4N1pVRkJUU3hWUVVGVkxIbENRVUZXTzB0QlFVNDdPMEZCUlZBc1owSkJRVms3WlVGQlRUdExRVUZPT3p0QlFVZFVMRWxCUVUwc1owUkJRVzlDTEZWQlFVTXNWMEZCUkR0WFFVRnBRaXhYUVVGWExGZEJRVmc3UTBGQmFrSWlMQ0ptYVd4bElqb2lkR2x0WlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUXZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElIc2dZM1Z5Y21WdWRGUnBiV1VnZlNCbWNtOXRJQ2N1TGk5cGJtTXZkWFJwYkhNbk8xeHVYRzVqYjI1emRDQk5RVmhmUlV4QlVGTkZSQ0E5SURNek8xeHVYRzVzWlhRZ1kzVnljbVZ1ZENBOUlEQTdYRzVzWlhRZ1pXeGhjSE5sWkNBOUlERTJMamM3WEc1c1pYUWdaR2xzWVhScGIyNGdQU0F4TzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCN1hHNGdJQ0FnZFhCa1lYUmxPaUFvWm5KaGJXVnpkR0Z0Y0NrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0JsYkdGd2MyVmtJRDBnVFdGMGFDNXRZWGdvVFdGMGFDNXRhVzRvWm5KaGJXVnpkR0Z0Y0NBdElHTjFjbkpsYm5Rc0lFMUJXRjlGVEVGUVUwVkVLU3dnTVNrZ0tpQmthV3hoZEdsdmJqdGNiaUFnSUNBZ0lDQWdZM1Z5Y21WdWRDQTlJR1p5WVcxbGMzUmhiWEE3WEc0Z0lDQWdmU3hjYmx4dUlDQWdJSE4wWVhKME9pQW9LU0E5UGlCamRYSnlaVzUwSUQwZ1kzVnljbVZ1ZEZScGJXVW9LU3hjYmx4dUlDQWdJR2RsZEVWc1lYQnpaV1E2SUNncElEMCtJR1ZzWVhCelpXUmNibjA3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0J6WlhSSGJHOWlZV3hFYVd4aGRHbHZiaUE5SUNodVpYZEVhV3hoZEdsdmJpa2dQVDRnWkdsc1lYUnBiMjRnUFNCdVpYZEVhV3hoZEdsdmJqc2lYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy90YXNrL3RpbWVyLmpzXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX1Rhc2syID0gcmVxdWlyZSgnLi4vdGFzay9UYXNrJyk7XG5cbnZhciBfVGFzazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UYXNrMik7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxudmFyIF9kZXRlY3QgPSByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9kZXRlY3QnKTtcblxudmFyIF9kZXRlY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGV0ZWN0KTtcblxudmFyIF9udW1lcmljYWxWYWx1ZXMgPSByZXF1aXJlKCcuLi9pbmMvbnVtZXJpY2FsLXZhbHVlcycpO1xuXG52YXIgX251bWVyaWNhbFZhbHVlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9udW1lcmljYWxWYWx1ZXMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIE5VTV9OVU1FUklDQUxfVkFMVUVTID0gX251bWVyaWNhbFZhbHVlczIuZGVmYXVsdC5sZW5ndGg7XG5cbnZhciBBY3Rpb24gPSBmdW5jdGlvbiAoX1Rhc2spIHtcbiAgICBfaW5oZXJpdHMoQWN0aW9uLCBfVGFzayk7XG5cbiAgICBmdW5jdGlvbiBBY3Rpb24ocHJvcHMpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFjdGlvbik7XG5cbiAgICAgICAgcHJvcHMuc3RhdGUgPSB7fTtcbiAgICAgICAgcHJvcHMudmFsdWVLZXlzID0gW107XG4gICAgICAgIHByb3BzLnBhcmVudEtleXMgPSBbXTtcbiAgICAgICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9UYXNrLmNhbGwodGhpcywgcHJvcHMpKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIFNldCBBY3Rpb24gcHJvcGVydGllc1xuICAgICAgICAjIyBTZXQgdXNlci1kZWZpbmVkIEFjdGlvbiBwcm9wZXJ0aWVzXG4gICAgICAgICBAcGFyYW0gW29iamVjdF1cbiAgICAgICAgQHJldHVybiBbQWN0aW9uXVxuICAgICovXG5cbiAgICBBY3Rpb24ucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIHNldCgpIHtcbiAgICAgICAgdmFyIHByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMF07XG5cbiAgICAgICAgdGhpcy52YWx1ZXMgPSB0aGlzLnZhbHVlcyB8fCB7fTtcblxuICAgICAgICB2YXIgdmFsdWVzID0gcHJvcHMudmFsdWVzO1xuXG4gICAgICAgIHZhciBwcm9wc1RvU2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbJ3ZhbHVlcyddKTtcblxuICAgICAgICB2YXIgaW5oZXJpdGFibGUgPSB7fTtcblxuICAgICAgICAvLyBTZXQgbm9uLWNvbnN1bWVkIHByb3BlcnRpZXNcbiAgICAgICAgX1Rhc2sucHJvdG90eXBlLnNldC5jYWxsKHRoaXMsIHByb3BzVG9TZXQpO1xuXG4gICAgICAgIC8vIFByaW1lIGFuIG9iamVjdCB0byBpbmhlcml0IGZyb20sIHdpdGggb25seSBgdmFsdWVgIHByb3BlcnRpZXNcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMuZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kZWZhdWx0VmFsdWUuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBwcm9wc1RvU2V0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBpbmhlcml0YWJsZVtrZXldID0gcHJvcHNUb1NldFtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIGV4aXN0aW5nIHZhbHVlcyB3aXRoIGluaGVyaXRhYmxlIHByb3BlcnRpZXNcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMudmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy52YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWVzW2tleV0gPSBfZXh0ZW5kcyh7fSwgdGhpcy52YWx1ZXNba2V5XSwgaW5oZXJpdGFibGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlXG4gICAgICAgIGlmICh2YWx1ZXMpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0VmFsdWVzKHZhbHVlcywgaW5oZXJpdGFibGUpO1xuXG4gICAgICAgICAgICAvLyBQcmVjb21wdXRlIG51bWJlciBvZiB2YWx1ZSBrZXkgYW5kIHBhcmVudCBrZXlzIHRvIGF2b2lkIHBlci1mcmFtZSBtZWFzdXJlbWVudFxuICAgICAgICAgICAgdGhpcy5udW1WYWx1ZUtleXMgPSB0aGlzLnZhbHVlS2V5cy5sZW5ndGg7XG4gICAgICAgICAgICB0aGlzLm51bVBhcmVudEtleXMgPSB0aGlzLnBhcmVudEtleXMubGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIEFjdGlvbi5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gZ2V0KGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZVtrZXldO1xuICAgIH07XG5cbiAgICBBY3Rpb24ucHJvdG90eXBlLnNldFZhbHVlcyA9IGZ1bmN0aW9uIHNldFZhbHVlcyh2YWx1ZXMsIGluaGVyaXQpIHtcbiAgICAgICAgLy8gSXRlcmF0ZSBvdmVyIGFsbCBpbmNvbWluZyB2YWx1ZXMgYW5kIHNldFxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgaGFzQ2hpbGRyZW4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGRyZW4gPSB7fTtcbiAgICAgICAgICAgICAgICAvLyBNZXJnZSBpbnRvIGV4aXN0aW5nIHZhbHVlIG9yIGNyZWF0ZSBuZXdcbiAgICAgICAgICAgICAgICB2YXIgbmV3VmFsdWUgPSB0aGlzLnZhbHVlc1trZXldID8gX2V4dGVuZHMoe30sIHRoaXMudmFsdWVzW2tleV0pIDogX2V4dGVuZHMoe30sIHRoaXMuZGVmYXVsdFZhbHVlLCBpbmhlcml0KTtcblxuICAgICAgICAgICAgICAgIC8vIElmIHZhbHVlcyBpcyBub3QgYW4gb2JqZWN0LCBhc3NpZ24gdmFsdWUgdG8gZGVmYXVsdCBwcm9wXG4gICAgICAgICAgICAgICAgaWYgKCEoMCwgX3V0aWxzLmlzT2JqKSh2YWx1ZXNba2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWVbdGhpcy5kZWZhdWx0VmFsdWVQcm9wXSA9IHZhbHVlc1trZXldO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gX2V4dGVuZHMoe30sIG5ld1ZhbHVlLCB2YWx1ZXNba2V5XSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gSWYgd2UndmUgZ290IGFuIGFkYXB0ZXIsIGdldCB0aGUgY3VycmVudCB2YWx1ZVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZXNba2V5XS5jdXJyZW50ID09PSB1bmRlZmluZWQgJiYgdGhpcy5hZGFwdGVyICYmIHRoaXMuYWRhcHRlci5nZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUuY3VycmVudCA9IHRoaXMuYWRhcHRlci5nZXQoa2V5KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBJZiB3ZSBkb24ndCBoYXZlIGEgdmFsdWUgdHlwZSBhbmQgd2UgZG8gaGF2ZSBhbiBBZGFwdGVyLCBjaGVjayBmb3IgdHlwZSB3aXRoIHZhbHVlIGtleVxuICAgICAgICAgICAgICAgIGlmICghbmV3VmFsdWUudHlwZSAmJiB0aGlzLmFkYXB0ZXIgJiYgdGhpcy5hZGFwdGVyLmdldFZhbHVlVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS50eXBlID0gdGhpcy5hZGFwdGVyLmdldFZhbHVlVHlwZShrZXkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIElmIHdlIHN0aWxsIGRvbid0IGhhdmUgYSB2YWx1ZSB0eXBlIGFuZCB0aGlzIGlzIHRoZSBmaXJzdCB0aW1lIHdlJ3ZlIHNldCB0aGlzIHZhbHVlLCBjaGVjayBudW1lcmljYWwgdmFsdWVzIGZvciBzdHJpbmdzIGFuZCB0ZXN0XG4gICAgICAgICAgICAgICAgaWYgKCFuZXdWYWx1ZS50eXBlICYmICF0aGlzLnZhbHVlc1trZXldKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLnR5cGUgPSAoMCwgX2RldGVjdDIuZGVmYXVsdCkobmV3VmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIElmIHdlIGhhdmUgYSB2YWx1ZSB0eXBlLCBoYW5kbGUuIFRoaXMgaXMgbXkgbGVhc3QgZmF2b3VyaXRlIHBhcnQgb2YgUG9wbW90aW9uLCBzby4uLiBlbmpveS5cbiAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IE5VTV9OVU1FUklDQUxfVkFMVUVTOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm9wTmFtZSA9IF9udW1lcmljYWxWYWx1ZXMyLmRlZmF1bHRbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWVQcm9wID0gbmV3VmFsdWVbcHJvcE5hbWVdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGlzIHByb3AgaXMgYSBzdHJpbmcgYW5kIHdlIGhhdmUgYSBzcGxpdHRlciwgc3BsaXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZS50eXBlLmhhc093blByb3BlcnR5KCdzcGxpdCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNwbGl0UHJvcCA9ICgwLCBfdXRpbHMuaXNTdHJpbmcpKHZhbHVlUHJvcCkgPyBuZXdWYWx1ZS50eXBlLnNwbGl0KHZhbHVlUHJvcCkgOiB7fTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHNwbGl0S2V5IGluIHNwbGl0UHJvcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3BsaXRQcm9wLmhhc093blByb3BlcnR5KHNwbGl0S2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbWJpbmVkS2V5ID0ga2V5ICsgc3BsaXRLZXk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHdlIGRvbid0IGhhdmUgYSBjaGlsZCB2YWx1ZSBmb3IgdGhpcyBrZXksIG1ha2Ugb25lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNoaWxkcmVuW2NvbWJpbmVkS2V5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkZWZhdWx0VmFsdWUgPSBuZXdWYWx1ZS50eXBlLmRlZmF1bHRQcm9wcyAmJiBuZXdWYWx1ZS50eXBlLmRlZmF1bHRQcm9wc1tzcGxpdEtleV0gPyBuZXdWYWx1ZS50eXBlLmRlZmF1bHRQcm9wc1tzcGxpdEtleV0gOiBuZXdWYWx1ZS50eXBlLmRlZmF1bHRQcm9wcyB8fCB7fTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuW2NvbWJpbmVkS2V5XSA9IF9leHRlbmRzKHt9LCBuZXdWYWx1ZSwgZGVmYXVsdFZhbHVlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudDoga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZEtleTogc3BsaXRLZXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBjaGlsZHJlbltjb21iaW5lZEtleV0udHlwZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzQ2hpbGRyZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW5bY29tYmluZWRLZXldW3Byb3BOYW1lXSA9IHBhcnNlRmxvYXQoc3BsaXRQcm9wW3NwbGl0S2V5XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSBoYXZlIGEgdGVtcGxhdGUgZnVuY3Rpb24sIGdlbmVyYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFuZXdWYWx1ZS50ZW1wbGF0ZSAmJiBuZXdWYWx1ZS50eXBlLnRlbXBsYXRlICYmICgwLCBfdXRpbHMuaXNTdHJpbmcpKHZhbHVlUHJvcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUudGVtcGxhdGUgPSBuZXdWYWx1ZS50eXBlLnRlbXBsYXRlKHZhbHVlUHJvcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChuZXdWYWx1ZS50eXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gX2V4dGVuZHMoe30sIG5ld1ZhbHVlLCBuZXdWYWx1ZS50eXBlLmRlZmF1bHRQcm9wcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZVByb3AgIT09IHVuZGVmaW5lZCAmJiBuZXdWYWx1ZS50eXBlLnBhcnNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWVbcHJvcE5hbWVdID0gbmV3VmFsdWUudHlwZS5wYXJzZSh2YWx1ZVByb3AsIG5ld1ZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gLy8gRW5kIHZhbHVlIHR5cGUgbm9uc2Vuc2VcblxuICAgICAgICAgICAgICAgIC8vIFNldCBgcHJldmAgdG8gYGN1cnJlbnRgIGZvciBmaXJzdCBmcmFtZSBhZnRlciBzZXRcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZS5wcmV2ID0gbmV3VmFsdWUuY3VycmVudDtcblxuICAgICAgICAgICAgICAgIC8vIElmIHRoaXMgdmFsdWUgZG9lc24ndCBoYXZlIGNoaWxkcmVuLCBhZGQgdG8gdmFsdWVLZXlzXG4gICAgICAgICAgICAgICAgaWYgKCFoYXNDaGlsZHJlbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy52YWx1ZUtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZUtleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gT3IgYWRkIHRvIHBhcmVudEtleXNcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUuY2hpbGRyZW4gPSBuZXdWYWx1ZS5jaGlsZHJlbiB8fCB7fTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnRLZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZXMoY2hpbGRyZW4pO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlc1trZXldID0gbmV3VmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgRGVjaWRlIHdoZXRoZXIgdGhpcyBBY3Rpb24gd2lsbCByZW5kZXIgb24gbmV4dCBmcmFtZVxuICAgICAgICAgQHBhcmFtIFtBY3Rpb25dXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgICAgICBAcGFyYW0gW251bWJlcl1cbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybiB0cnVlIHRvIHJlbmRlclxuICAgICovXG5cbiAgICBBY3Rpb24ucHJvdG90eXBlLndpbGxSZW5kZXIgPSBmdW5jdGlvbiB3aWxsUmVuZGVyKGFjdGlvbiwgZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgICAgICB2YXIgaGFzQ2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vIENoZWNrIGlmIGJhc2UgdmFsdWVzIGhhdmUgdXBkYXRlZFxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSB0aGlzLnZhbHVlS2V5c1tpXTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG5cbiAgICAgICAgICAgIC8vIFJ1biB0cmFuc2Zvcm0gZnVuY3Rpb24gKGlmIHByZXNlbnQpXG4gICAgICAgICAgICBpZiAodmFsdWUudHJhbnNmb3JtKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IHZhbHVlLnRyYW5zZm9ybSh2YWx1ZS5jdXJyZW50LCBrZXksIHRoaXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDYXAgbWluaW11bVxuICAgICAgICAgICAgaWYgKCgwLCBfdXRpbHMuaXNOdW0pKHZhbHVlLm1pbikpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gTWF0aC5tYXgodmFsdWUuY3VycmVudCwgdmFsdWUubWluKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ2FwIG1heGltdW1cbiAgICAgICAgICAgIGlmICgoMCwgX3V0aWxzLmlzTnVtKSh2YWx1ZS5tYXgpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IE1hdGgubWluKHZhbHVlLmN1cnJlbnQsIHZhbHVlLm1heCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJvdW5kIG51bWJlclxuICAgICAgICAgICAgaWYgKHZhbHVlLnJvdW5kKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IE1hdGgucm91bmQodmFsdWUuY3VycmVudCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhbHVlLmZyYW1lQ2hhbmdlID0gdmFsdWUuY3VycmVudCAtIHZhbHVlLnByZXY7XG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSB2ZWxvY2l0eVxuICAgICAgICAgICAgaWYgKCF0aGlzLmNhbGN1bGF0ZXNWZWxvY2l0eSkge1xuICAgICAgICAgICAgICAgIHZhbHVlLnZlbG9jaXR5ID0gKDAsIF9jYWxjLnNwZWVkUGVyU2Vjb25kKSh2YWx1ZS5mcmFtZUNoYW5nZSwgZWxhcHNlZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIHRoaXMgdmFsdWUgaGFzIGNoYW5nZWRcbiAgICAgICAgICAgIGlmICh2YWx1ZS5wcmV2ICE9PSB2YWx1ZS5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdmFsdWUucHJldiA9IHZhbHVlLmN1cnJlbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEFwcGVuZCB1bml0XG4gICAgICAgICAgICB2YXIgdmFsdWVGb3JTdGF0ZSA9IHZhbHVlLnR5cGUgJiYgdmFsdWUudHlwZS5zZXJpYWxpemUgPyB2YWx1ZS50eXBlLnNlcmlhbGl6ZSh2YWx1ZS5jdXJyZW50LCB2YWx1ZSkgOiB2YWx1ZS5jdXJyZW50O1xuXG4gICAgICAgICAgICAvLyBBZGQgdG8gc3RhdGUgaWYgdGhpcyBpcyBub3QgYSBjaGlsZCB2YXVlXG4gICAgICAgICAgICBpZiAoIXZhbHVlLnBhcmVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVba2V5XSA9IHZhbHVlRm9yU3RhdGU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWVzW3ZhbHVlLnBhcmVudF0uY2hpbGRyZW5bdmFsdWUuY2hpbGRLZXldID0gdmFsdWVGb3JTdGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm9uRnJhbWUpIHtcbiAgICAgICAgICAgIHRoaXMub25GcmFtZSh0aGlzLnN0YXRlLCB0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLm9uQ2xlYW51cCA/IHRydWUgOiBoYXNDaGFuZ2VkO1xuICAgIH07XG5cbiAgICAvKlxuICAgICAgICBJZiB3ZSBhcmUgcmVuZGVyaW5nLCByZWNvbWJpbmUgcGFyZW50IHZhbHVlcyBmaXJzdFxuICAgICovXG5cbiAgICBBY3Rpb24ucHJvdG90eXBlLm9uUHJlUmVuZGVyID0gZnVuY3Rpb24gb25QcmVSZW5kZXIoKSB7XG4gICAgICAgIC8vIFVwZGF0ZSBwYXJlbnQgdmFsdWVzXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5udW1QYXJlbnRLZXlzOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSB0aGlzLnBhcmVudEtleXNbaV07XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuXG4gICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gdmFsdWUudHlwZS5jb21iaW5lKHZhbHVlLmNoaWxkcmVuLCB2YWx1ZS50ZW1wbGF0ZSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlW2tleV0gIT09IHZhbHVlLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlW2tleV0gPSB2YWx1ZS5jdXJyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIEFjdGlvbi5wcm90b3R5cGUuaW5oZXJpdCA9IGZ1bmN0aW9uIGluaGVyaXQoKSB7XG4gICAgICAgIHZhciBwcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzBdO1xuICAgICAgICB2YXIgdmFsdWVzID0gcHJvcHMudmFsdWVzO1xuXG4gICAgICAgIHZhciBwcm9wc1RvU2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbJ3ZhbHVlcyddKTtcblxuICAgICAgICB2YXIgbmV3QWN0aW9uID0gX1Rhc2sucHJvdG90eXBlLmluaGVyaXQuY2FsbCh0aGlzLCBwcm9wc1RvU2V0KTtcblxuICAgICAgICBpZiAodmFsdWVzKSB7XG4gICAgICAgICAgICBuZXdBY3Rpb24uc2V0KHsgdmFsdWVzOiB2YWx1ZXMgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3QWN0aW9uO1xuICAgIH07XG5cbiAgICBBY3Rpb24ucHJvdG90eXBlLnBhdXNlID0gZnVuY3Rpb24gcGF1c2UoKSB7XG4gICAgICAgIF9UYXNrLnByb3RvdHlwZS5zdG9wLmNhbGwodGhpcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBBY3Rpb24ucHJvdG90eXBlLnJlc3VtZSA9IGZ1bmN0aW9uIHJlc3VtZSgpIHtcbiAgICAgICAgX1Rhc2sucHJvdG90eXBlLnN0YXJ0LmNhbGwodGhpcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBBY3Rpb24ucHJvdG90eXBlLnRvZ2dsZSA9IGZ1bmN0aW9uIHRvZ2dsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNBY3RpdmUgPyB0aGlzLnBhdXNlKCkgOiB0aGlzLnJlc3VtZSgpO1xuICAgIH07XG5cbiAgICBBY3Rpb24ucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICAgIHZhciB2YWx1ZXMgPSB0aGlzLnZhbHVlcztcbiAgICAgICAgX1Rhc2sucHJvdG90eXBlLnN0YXJ0LmNhbGwodGhpcyk7XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHZhbHVlcykge1xuICAgICAgICAgICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVzW2tleV0ucHJldiA9IHZhbHVlc1trZXldLm9yaWdpbiA9IHZhbHVlc1trZXldLmN1cnJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgQWN0aW9uLmV4dGVuZERlZmF1bHRWYWx1ZSA9IGZ1bmN0aW9uIGV4dGVuZERlZmF1bHRWYWx1ZShwcm9wcykge1xuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHRoaXMucHJvdG90eXBlLmRlZmF1bHRWYWx1ZSwgcHJvcHMpO1xuICAgIH07XG5cbiAgICBBY3Rpb24uZXh0ZW5kRGVmYXVsdFByb3BzID0gZnVuY3Rpb24gZXh0ZW5kRGVmYXVsdFByb3BzKHByb3BzKSB7XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgdGhpcy5wcm90b3R5cGUuZGVmYXVsdFByb3BzLCBwcm9wcyk7XG4gICAgfTtcblxuICAgIHJldHVybiBBY3Rpb247XG59KF9UYXNrMy5kZWZhdWx0KTtcblxuQWN0aW9uLnByb3RvdHlwZS5kZWZhdWx0VmFsdWVQcm9wID0gJ2N1cnJlbnQnO1xuQWN0aW9uLnByb3RvdHlwZS5kZWZhdWx0VmFsdWUgPSB7XG4gICAgY3VycmVudDogMCxcbiAgICB2ZWxvY2l0eTogMCxcbiAgICByb3VuZDogZmFsc2UsXG4gICAgbWluOiB1bmRlZmluZWQsXG4gICAgbWF4OiB1bmRlZmluZWQsXG4gICAgdHJhbnNmb3JtOiB1bmRlZmluZWRcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEFjdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDBGamRHbHZiaTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096dEJRVTFCTEVsQlFVMHNkVUpCUVhWQ0xEQkNRVUZwUWl4TlFVRnFRanM3U1VGRmRrSTdPenRCUVVOR0xHRkJSRVVzVFVGRFJpeERRVUZaTEV0QlFWb3NSVUZCYlVJN09FSkJSR3BDTEZGQlEybENPenRCUVVObUxHTkJRVTBzUzBGQlRpeEhRVUZqTEVWQlFXUXNRMEZFWlR0QlFVVm1MR05CUVUwc1UwRkJUaXhIUVVGclFpeEZRVUZzUWl4RFFVWmxPMEZCUjJZc1kwRkJUU3hWUVVGT0xFZEJRVzFDTEVWQlFXNUNMRU5CU0dVN1owUkJTV1lzYVVKQlFVMHNTMEZCVGl4SFFVcGxPMHRCUVc1Q096czdPenM3T3pzN1FVRkVSU3h4UWtGbFJpeHhRa0ZCWjBJN1dVRkJXaXc0UkVGQlVTeHJRa0ZCU1RzN1FVRkRXaXhoUVVGTExFMUJRVXdzUjBGQll5eExRVUZMTEUxQlFVd3NTVUZCWlN4RlFVRm1MRU5CUkVZN08xbEJSMG9zVTBGQk1FSXNUVUZCTVVJc1QwRklTVHM3V1VGSFR5eHpRMEZCWlN4dFFrRklkRUk3TzBGQlNWb3NXVUZCVFN4alFVRmpMRVZCUVdRN096dEJRVXBOTEhkQ1FVOU9MRWRCUVU0c1dVRkJWU3hWUVVGV096czdRVUZRV1N4aFFWVlFMRWxCUVVrc1IwRkJTaXhKUVVGWExFdEJRVXNzV1VGQlRDeEZRVUZ0UWp0QlFVTXZRaXhuUWtGQlNTeExRVUZMTEZsQlFVd3NRMEZCYTBJc1kwRkJiRUlzUTBGQmFVTXNSMEZCYWtNc1MwRkJlVU1zVjBGQlZ5eGpRVUZZTEVOQlFUQkNMRWRCUVRGQ0xFTkJRWHBETEVWQlFYbEZPMEZCUTNwRkxEUkNRVUZaTEVkQlFWb3NTVUZCYlVJc1YwRkJWeXhIUVVGWUxFTkJRVzVDTEVOQlJIbEZPMkZCUVRkRk8xTkJSRW83T3p0QlFWWlpMR0ZCYVVKUUxFbEJRVWtzUjBGQlNpeEpRVUZYTEV0QlFVc3NUVUZCVEN4RlFVRmhPMEZCUTNwQ0xHZENRVUZKTEV0QlFVc3NUVUZCVEN4RFFVRlpMR05CUVZvc1EwRkJNa0lzUjBGQk0wSXNRMEZCU2l4RlFVRnhRenRCUVVOcVF5eHhRa0ZCU3l4TlFVRk1MRU5CUVZrc1IwRkJXaXhwUWtGQmQwSXNTMEZCU3l4TlFVRk1MRU5CUVZrc1IwRkJXaXhIUVVGeFFpeFpRVUUzUXl4RFFVUnBRenRoUVVGeVF6dFRRVVJLT3pzN1FVRnFRbGtzV1VGM1FsSXNUVUZCU2l4RlFVRlpPMEZCUTFJc2FVSkJRVXNzVTBGQlRDeERRVUZsTEUxQlFXWXNSVUZCZFVJc1YwRkJka0k3T3p0QlFVUlJMR2RDUVVsU0xFTkJRVXNzV1VGQlRDeEhRVUZ2UWl4TFFVRkxMRk5CUVV3c1EwRkJaU3hOUVVGbUxFTkJTbG83UVVGTFVpeHBRa0ZCU3l4aFFVRk1MRWRCUVhGQ0xFdEJRVXNzVlVGQlRDeERRVUZuUWl4TlFVRm9RaXhEUVV4aU8xTkJRVm83TzBGQlVVRXNaVUZCVHl4SlFVRlFMRU5CYUVOWk96czdRVUZtWkN4eFFrRnJSRVlzYlVKQlFVa3NTMEZCU3p0QlFVTk1MR1ZCUVU4c1MwRkJTeXhMUVVGTUxFTkJRVmNzUjBGQldDeERRVUZRTEVOQlJFczdPenRCUVd4RVVDeHhRa0Z6UkVZc0swSkJRVlVzVVVGQlVTeFRRVUZUT3p0QlFVVjJRaXhoUVVGTExFbEJRVWtzUjBGQlNpeEpRVUZYTEUxQlFXaENMRVZCUVhkQ08wRkJRM0JDTEdkQ1FVRkpMRTlCUVU4c1kwRkJVQ3hEUVVGelFpeEhRVUYwUWl4RFFVRktMRVZCUVdkRE8wRkJRelZDTEc5Q1FVRkpMR05CUVdNc1MwRkJaQ3hEUVVSM1FqdEJRVVUxUWl4dlFrRkJUU3hYUVVGWExFVkJRVmc3TzBGQlJuTkNMRzlDUVVsNFFpeFhRVUZYTEV0QlFVc3NUVUZCVEN4RFFVRlpMRWRCUVZvc2FVSkJRWGRDTEV0QlFVc3NUVUZCVEN4RFFVRlpMRWRCUVZvc1JVRkJlRUlzWjBKQlFXdEVMRXRCUVVzc1dVRkJUQ3hGUVVGelFpeFJRVUY0UlRzN08wRkJTbUVzYjBKQlQzaENMRU5CUVVNc2EwSkJRVTBzVDBGQlR5eEhRVUZRTEVOQlFVNHNRMEZCUkN4RlFVRnhRanRCUVVOeVFpdzJRa0ZCVXl4TFFVRkxMR2RDUVVGTUxFTkJRVlFzUjBGQmEwTXNUMEZCVHl4SFFVRlFMRU5CUVd4RExFTkJSSEZDTzJsQ1FVRjZRaXhOUVVWUE8wRkJRMGdzTkVOQlFXZENMRlZCUVdFc1QwRkJUeXhIUVVGUUxFVkJRVGRDTEVOQlJFYzdhVUpCUmxBN096dEJRVkEwUWl4dlFrRmplRUlzVDBGQlR5eEhRVUZRTEVWQlFWa3NUMEZCV2l4TFFVRjNRaXhUUVVGNFFpeEpRVUZ4UXl4TFFVRkxMRTlCUVV3c1NVRkJaMElzUzBGQlN5eFBRVUZNTEVOQlFXRXNSMEZCWWl4RlFVRnJRanRCUVVOMlJTdzJRa0ZCVXl4UFFVRlVMRWRCUVcxQ0xFdEJRVXNzVDBGQlRDeERRVUZoTEVkQlFXSXNRMEZCYVVJc1IwRkJha0lzUTBGQmJrSXNRMEZFZFVVN2FVSkJRVE5GT3pzN1FVRmtORUlzYjBKQmJVSjRRaXhEUVVGRExGTkJRVk1zU1VGQlZDeEpRVUZwUWl4TFFVRkxMRTlCUVV3c1NVRkJaMElzUzBGQlN5eFBRVUZNTEVOQlFXRXNXVUZCWWl4RlFVRXlRanRCUVVNM1JDdzJRa0ZCVXl4SlFVRlVMRWRCUVdkQ0xFdEJRVXNzVDBGQlRDeERRVUZoTEZsQlFXSXNRMEZCTUVJc1IwRkJNVUlzUTBGQmFFSXNRMEZFTmtRN2FVSkJRV3BGT3pzN1FVRnVRalJDTEc5Q1FYZENlRUlzUTBGQlF5eFRRVUZUTEVsQlFWUXNTVUZCYVVJc1EwRkJReXhMUVVGTExFMUJRVXdzUTBGQldTeEhRVUZhTEVOQlFVUXNSVUZCYlVJN1FVRkRja01zTmtKQlFWTXNTVUZCVkN4SFFVRm5RaXh6UWtGQlowSXNVVUZCYUVJc1EwRkJhRUlzUTBGRWNVTTdhVUpCUVhwRE96czdRVUY0UWpSQ0xHOUNRVFpDZUVJc1UwRkJVeXhKUVVGVUxFVkJRV1U3UVVGRFppeDVRa0ZCU3l4SlFVRkpMRWxCUVVrc1EwRkJTaXhGUVVGUExFbEJRVWtzYjBKQlFVb3NSVUZCTUVJc1IwRkJNVU1zUlVGQkswTTdRVUZETTBNc05FSkJRVTBzVjBGQlZ5d3dRa0ZCYVVJc1EwRkJha0lzUTBGQldDeERRVVJ4UXp0QlFVVXpReXcwUWtGQlRTeFpRVUZaTEZOQlFWTXNVVUZCVkN4RFFVRmFPenM3UVVGR2NVTXNORUpCUzNaRExGTkJRVk1zU1VGQlZDeERRVUZqTEdOQlFXUXNRMEZCTmtJc1QwRkJOMElzUTBGQlNpeEZRVUV5UXp0QlFVTjJReXhuUTBGQlRTeFpRVUZaTEhGQ1FVRlRMRk5CUVZRc1NVRkJjMElzVTBGQlV5eEpRVUZVTEVOQlFXTXNTMEZCWkN4RFFVRnZRaXhUUVVGd1FpeERRVUYwUWl4SFFVRjFSQ3hGUVVGMlJDeERRVVJ4UWpzN1FVRkhka01zYVVOQlFVc3NTVUZCU1N4UlFVRktMRWxCUVdkQ0xGTkJRWEpDTEVWQlFXZERPMEZCUXpWQ0xHOURRVUZKTEZWQlFWVXNZMEZCVml4RFFVRjVRaXhSUVVGNlFpeERRVUZLTEVWQlFYZERPMEZCUTNCRExIZERRVUZOTEdOQlFXTXNUVUZCVFN4UlFVRk9PenM3UVVGRVowSXNkME5CU1doRExFTkJRVU1zVTBGQlV5eFhRVUZVTEVOQlFVUXNSVUZCZDBJN1FVRkRlRUlzTkVOQlFVMHNaVUZCWlN4UlFVRkRMRU5CUVZNc1NVRkJWQ3hEUVVGakxGbEJRV1FzU1VGQk9FSXNVMEZCVXl4SlFVRlVMRU5CUVdNc1dVRkJaQ3hEUVVFeVFpeFJRVUV6UWl4RFFVRTVRaXhIUVVGelJTeFRRVUZUTEVsQlFWUXNRMEZCWXl4WlFVRmtMRU5CUVRKQ0xGRkJRVE5DTEVOQlFYWkZMRWRCUVRoSExGTkJRVk1zU1VGQlZDeERRVUZqTEZsQlFXUXNTVUZCT0VJc1JVRkJPVUlzUTBGRU0wYzdPMEZCUjNoQ0xHbEVRVUZUTEZkQlFWUXNhVUpCUTA4c1ZVRkRRVHRCUVVOSUxHOUVRVUZSTEVkQlFWSTdRVUZEUVN4elJFRkJWU3hSUVVGV096QkRRVXBLTEVOQlNIZENPenRCUVZWNFFpd3JRMEZCVHl4VFFVRlRMRmRCUVZRc1JVRkJjMElzU1VGQmRFSXNRMEZXYVVJN2NVTkJRVFZDT3p0QlFXRkJMR3RFUVVGakxFbEJRV1FzUTBGcVFtOURPMEZCYTBKd1F5dzJRMEZCVXl4WFFVRlVMRVZCUVhOQ0xGRkJRWFJDTEVsQlFXdERMRmRCUVZjc1ZVRkJWU3hSUVVGV0xFTkJRVmdzUTBGQmJFTXNRMEZzUW05RE8ybERRVUY0UXpzMlFrRkVTanM3TzBGQlNIVkRMR2REUVRKQ2JrTXNRMEZCUXl4VFFVRlRMRkZCUVZRc1NVRkJjVUlzVTBGQlV5eEpRVUZVTEVOQlFXTXNVVUZCWkN4SlFVRXdRaXh4UWtGQlV5eFRRVUZVTEVOQlFXaEVMRVZCUVhGRk8wRkJRM0pGTEhsRFFVRlRMRkZCUVZRc1IwRkJiMElzVTBGQlV5eEpRVUZVTEVOQlFXTXNVVUZCWkN4RFFVRjFRaXhUUVVGMlFpeERRVUZ3UWl4RFFVUnhSVHMyUWtGQmVrVTdlVUpCTTBKS0xFMUJPRUpQTEVsQlFVa3NVMEZCVXl4SlFVRlVMRU5CUVdNc1dVRkJaQ3hGUVVFMFFqdEJRVU51UXl4dlJFRkJaMElzVlVGQllTeFRRVUZUTEVsQlFWUXNRMEZCWXl4WlFVRmtMRU5CUVRkQ0xFTkJSRzFETzNsQ1FVRm9RenM3UVVGSlVDdzBRa0ZCU1N4alFVRmpMRk5CUVdRc1NVRkJNa0lzVTBGQlV5eEpRVUZVTEVOQlFXTXNTMEZCWkN4RlFVRnhRanRCUVVOb1JDeHhRMEZCVXl4UlFVRlVMRWxCUVhGQ0xGTkJRVk1zU1VGQlZDeERRVUZqTEV0QlFXUXNRMEZCYjBJc1UwRkJjRUlzUlVGQkswSXNVVUZCTDBJc1EwRkJja0lzUTBGRVowUTdlVUpCUVhCRU8zRkNRWFpEU2p0cFFrRkVTanM3TzBGQk4wSTBRaXgzUWtFMFJUVkNMRU5CUVZNc1NVRkJWQ3hIUVVGblFpeFRRVUZUTEU5QlFWUTdPenRCUVRWRldTeHZRa0VyUlhoQ0xFTkJRVU1zVjBGQlJDeEZRVUZqTzBGQlEyUXNkMEpCUVVrc1MwRkJTeXhUUVVGTUxFTkJRV1VzVDBGQlppeERRVUYxUWl4SFFVRjJRaXhOUVVGblF5eERRVUZETEVOQlFVUXNSVUZCU1R0QlFVTndReXcyUWtGQlN5eFRRVUZNTEVOQlFXVXNTVUZCWml4RFFVRnZRaXhIUVVGd1FpeEZRVVJ2UXp0eFFrRkJlRU03T3p0QlFVUmpMR2xDUVVGc1FpeE5RVTFQTzBGQlEwZ3NhVU5CUVZNc1VVRkJWQ3hIUVVGdlFpeFRRVUZUTEZGQlFWUXNTVUZCY1VJc1JVRkJja0lzUTBGRWFrSTdPMEZCUjBnc05FSkJRVWtzUzBGQlN5eFZRVUZNTEVOQlFXZENMRTlCUVdoQ0xFTkJRWGRDTEVkQlFYaENMRTFCUVdsRExFTkJRVU1zUTBGQlJDeEZRVUZKTzBGQlEzSkRMR2xEUVVGTExGVkJRVXdzUTBGQlowSXNTVUZCYUVJc1EwRkJjVUlzUjBGQmNrSXNSVUZFY1VNN2VVSkJRWHBET3p0QlFVbEJMRFpDUVVGTExGTkJRVXdzUTBGQlpTeFJRVUZtTEVWQlVFYzdjVUpCVGxBN08wRkJaMEpCTEhGQ1FVRkxMRTFCUVV3c1EwRkJXU3hIUVVGYUxFbEJRVzFDTEZGQlFXNUNMRU5CTDBZMFFqdGhRVUZvUXp0VFFVUktPenM3T3pzN096czdPenRCUVhoRVJpeHhRa0Z4UzBZc2FVTkJRVmNzVVVGQlVTeFpRVUZaTEZOQlFWTTdRVUZEY0VNc1dVRkJTU3hoUVVGaExFdEJRV0k3T3p0QlFVUm5ReXhoUVVrdlFpeEpRVUZKTEVsQlFVa3NRMEZCU2l4RlFVRlBMRWxCUVVrc1MwRkJTeXhaUVVGTUxFVkJRVzFDTEVkQlFYWkRMRVZCUVRSRE8wRkJRM2hETEdkQ1FVRk5MRTFCUVUwc1MwRkJTeXhUUVVGTUxFTkJRV1VzUTBGQlppeERRVUZPTEVOQlJHdERPMEZCUlhoRExHZENRVUZOTEZGQlFWRXNTMEZCU3l4TlFVRk1MRU5CUVZrc1IwRkJXaXhEUVVGU096czdRVUZHYTBNc1owSkJTM0JETEUxQlFVMHNVMEZCVGl4RlFVRnBRanRCUVVOcVFpeHpRa0ZCVFN4UFFVRk9MRWRCUVdkQ0xFMUJRVTBzVTBGQlRpeERRVUZuUWl4TlFVRk5MRTlCUVU0c1JVRkJaU3hIUVVFdlFpeEZRVUZ2UXl4SlFVRndReXhEUVVGb1FpeERRVVJwUWp0aFFVRnlRanM3TzBGQlRIZERMR2RDUVZWd1F5eHJRa0ZCVFN4TlFVRk5MRWRCUVU0c1EwRkJWaXhGUVVGelFqdEJRVU5zUWl4elFrRkJUU3hQUVVGT0xFZEJRV2RDTEV0QlFVc3NSMEZCVEN4RFFVRlRMRTFCUVUwc1QwRkJUaXhGUVVGbExFMUJRVTBzUjBGQlRpeERRVUY0UXl4RFFVUnJRanRoUVVGMFFqczdPMEZCVm5kRExHZENRV1Z3UXl4clFrRkJUU3hOUVVGTkxFZEJRVTRzUTBGQlZpeEZRVUZ6UWp0QlFVTnNRaXh6UWtGQlRTeFBRVUZPTEVkQlFXZENMRXRCUVVzc1IwRkJUQ3hEUVVGVExFMUJRVTBzVDBGQlRpeEZRVUZsTEUxQlFVMHNSMEZCVGl4RFFVRjRReXhEUVVSclFqdGhRVUYwUWpzN08wRkJabmRETEdkQ1FXOUNjRU1zVFVGQlRTeExRVUZPTEVWQlFXRTdRVUZEWWl4elFrRkJUU3hQUVVGT0xFZEJRV2RDTEV0QlFVc3NTMEZCVEN4RFFVRlhMRTFCUVUwc1QwRkJUaXhEUVVFelFpeERRVVJoTzJGQlFXcENPenRCUVVsQkxHdENRVUZOTEZkQlFVNHNSMEZCYjBJc1RVRkJUU3hQUVVGT0xFZEJRV2RDTEUxQlFVMHNTVUZCVGpzN08wRkJlRUpKTEdkQ1FUSkNjRU1zUTBGQlF5eExRVUZMTEd0Q1FVRk1MRVZCUVhsQ08wRkJRekZDTEhOQ1FVRk5MRkZCUVU0c1IwRkJhVUlzTUVKQlFXVXNUVUZCVFN4WFFVRk9MRVZCUVcxQ0xFOUJRV3hETEVOQlFXcENMRU5CUkRCQ08yRkJRVGxDT3pzN1FVRXpRbmRETEdkQ1FXZERjRU1zVFVGQlRTeEpRVUZPTEV0QlFXVXNUVUZCVFN4UFFVRk9MRVZCUVdVN1FVRkRPVUlzTmtKQlFXRXNTVUZCWWl4RFFVUTRRanRCUVVVNVFpeHpRa0ZCVFN4SlFVRk9MRWRCUVdFc1RVRkJUU3hQUVVGT0xFTkJSbWxDTzJGQlFXeERPenM3UVVGb1EzZERMR2RDUVhORGJFTXNaMEpCUVdkQ0xFdEJRVU1zUTBGQlRTeEpRVUZPTEVsQlFXTXNUVUZCVFN4SlFVRk9MRU5CUVZjc1UwRkJXQ3hIUVVGM1FpeE5RVUZOTEVsQlFVNHNRMEZCVnl4VFFVRllMRU5CUVhGQ0xFMUJRVTBzVDBGQlRpeEZRVUZsTEV0QlFYQkRMRU5CUVhaRExFZEJRVzlHTEUxQlFVMHNUMEZCVGpzN08wRkJkRU5zUlN4blFrRjVRM0JETEVOQlFVTXNUVUZCVFN4TlFVRk9MRVZCUVdNN1FVRkRaaXh4UWtGQlN5eExRVUZNTEVOQlFWY3NSMEZCV0N4SlFVRnJRaXhoUVVGc1FpeERRVVJsTzJGQlFXNUNMRTFCUlU4N1FVRkRTQ3h4UWtGQlN5eE5RVUZNTEVOQlFWa3NUVUZCVFN4TlFVRk9MRU5CUVZvc1EwRkJNRUlzVVVGQk1VSXNRMEZCYlVNc1RVRkJUU3hSUVVGT0xFTkJRVzVETEVkQlFYRkVMR0ZCUVhKRUxFTkJSRWM3WVVGR1VEdFRRWHBEU2pzN1FVRm5SRUVzV1VGQlNTeExRVUZMTEU5QlFVd3NSVUZCWXp0QlFVTmtMR2xDUVVGTExFOUJRVXdzUTBGQllTeExRVUZMTEV0QlFVd3NSVUZCV1N4SlFVRjZRaXhGUVVSak8xTkJRV3hDT3p0QlFVbEJMR1ZCUVU4c1NVRkJReXhEUVVGTExGTkJRVXdzUjBGQmEwSXNTVUZCYmtJc1IwRkJNRUlzVlVGQk1VSXNRMEY0UkRaQ096czdPenM3TzBGQmNrdDBReXh4UWtGdFQwWXNjVU5CUVdNN08wRkJSVllzWVVGQlN5eEpRVUZKTEVsQlFVa3NRMEZCU2l4RlFVRlBMRWxCUVVrc1MwRkJTeXhoUVVGTUxFVkJRVzlDTEVkQlFYaERMRVZCUVRaRE8wRkJRM3BETEdkQ1FVRk5MRTFCUVUwc1MwRkJTeXhWUVVGTUxFTkJRV2RDTEVOQlFXaENMRU5CUVU0c1EwRkViVU03UVVGRmVrTXNaMEpCUVUwc1VVRkJVU3hMUVVGTExFMUJRVXdzUTBGQldTeEhRVUZhTEVOQlFWSXNRMEZHYlVNN08wRkJTWHBETEd0Q1FVRk5MRTlCUVU0c1IwRkJaMElzVFVGQlRTeEpRVUZPTEVOQlFWY3NUMEZCV0N4RFFVRnRRaXhOUVVGTkxGRkJRVTRzUlVGQlowSXNUVUZCVFN4UlFVRk9MRU5CUVc1RUxFTkJTbmxET3p0QlFVMTZReXhuUWtGQlNTeExRVUZMTEV0QlFVd3NRMEZCVnl4SFFVRllMRTFCUVc5Q0xFMUJRVTBzVDBGQlRpeEZRVUZsTzBGQlEyNURMSEZDUVVGTExFdEJRVXdzUTBGQlZ5eEhRVUZZTEVsQlFXdENMRTFCUVUwc1QwRkJUaXhEUVVScFFqdGhRVUYyUXp0VFFVNUtPenM3UVVGeVQwWXNjVUpCYVZCR0xEWkNRVUZ2UWp0WlFVRmFMRGhFUVVGUkxHdENRVUZKTzFsQlExSXNVMEZCTUVJc1RVRkJNVUlzVDBGRVVUczdXVUZEUnl4elEwRkJaU3h0UWtGRWJFSTdPMEZCUldoQ0xGbEJRVTBzV1VGQldTeG5Ra0ZCVFN4UFFVRk9MRmxCUVdNc1ZVRkJaQ3hEUVVGYUxFTkJSbFU3TzBGQlNXaENMRmxCUVVrc1RVRkJTaXhGUVVGWk8wRkJRMUlzYzBKQlFWVXNSMEZCVml4RFFVRmpMRVZCUVVVc1kwRkJSaXhGUVVGa0xFVkJSRkU3VTBGQldqczdRVUZKUVN4bFFVRlBMRk5CUVZBc1EwRlNaMEk3T3p0QlFXcFFiRUlzY1VKQk5GQkdMSGxDUVVGUk8wRkJRMG9zZDBKQlFVMHNTVUZCVGl4WlFVUkpPMEZCUlVvc1pVRkJUeXhKUVVGUUxFTkJSa2s3T3p0QlFUVlFUaXh4UWtGcFVVWXNNa0pCUVZNN1FVRkRUQ3gzUWtGQlRTeExRVUZPTEZsQlJFczdRVUZGVEN4bFFVRlBMRWxCUVZBc1EwRkdTenM3TzBGQmFsRlFMSEZDUVhOUlJpd3lRa0ZCVXp0QlFVTk1MR1ZCUVU4c1MwRkJTeXhSUVVGTUxFZEJRV2RDTEV0QlFVc3NTMEZCVEN4RlFVRm9RaXhIUVVFclFpeExRVUZMTEUxQlFVd3NSVUZCTDBJc1EwRkVSanM3TzBGQmRGRlFMSEZDUVRCUlJpeDVRa0ZCVVR0QlFVTktMRmxCUVUwc1UwRkJVeXhMUVVGTExFMUJRVXdzUTBGRVdEdEJRVVZLTEhkQ1FVRk5MRXRCUVU0c1dVRkdTVHM3UVVGSlNpeGhRVUZMTEVsQlFVa3NSMEZCU2l4SlFVRlhMRTFCUVdoQ0xFVkJRWGRDTzBGQlEzQkNMR2RDUVVGSkxFOUJRVThzWTBGQlVDeERRVUZ6UWl4SFFVRjBRaXhEUVVGS0xFVkJRV2RETzBGQlF6VkNMSFZDUVVGUExFZEJRVkFzUlVGQldTeEpRVUZhTEVkQlFXMUNMRTlCUVU4c1IwRkJVQ3hGUVVGWkxFMUJRVm9zUjBGQmNVSXNUMEZCVHl4SFFVRlFMRVZCUVZrc1QwRkJXaXhEUVVSYU8yRkJRV2hETzFOQlJFbzdPenRCUVRsUlJpeFhRWEZTU3l4cFJFRkJiVUlzVDBGQlR6dEJRVU0zUWl3MFFrRkJXU3hMUVVGTExGTkJRVXdzUTBGQlpTeFpRVUZtTEVWQlFXZERMRTFCUVRWRExFTkJSRFpDT3pzN1FVRnlVaTlDTEZkQmVWSkxMR2xFUVVGdFFpeFBRVUZQTzBGQlF6ZENMRFJDUVVGWkxFdEJRVXNzVTBGQlRDeERRVUZsTEZsQlFXWXNSVUZCWjBNc1RVRkJOVU1zUTBGRU5rSTdPenRYUVhwU0wwSTdPenRCUVRoU1RpeFBRVUZQTEZOQlFWQXNRMEZCYVVJc1owSkJRV3BDTEVkQlFXOURMRk5CUVhCRE8wRkJRMEVzVDBGQlR5eFRRVUZRTEVOQlFXbENMRmxCUVdwQ0xFZEJRV2RETzBGQlF6VkNMR0ZCUVZNc1EwRkJWRHRCUVVOQkxHTkJRVlVzUTBGQlZqdEJRVU5CTEZkQlFVOHNTMEZCVUR0QlFVTkJMRk5CUVVzc1UwRkJURHRCUVVOQkxGTkJRVXNzVTBGQlREdEJRVU5CTEdWQlFWY3NVMEZCV0R0RFFVNUtPenRyUWtGVFpTSXNJbVpwYkdVaU9pSkJZM1JwYjI0dWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUXZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElGUmhjMnNnWm5KdmJTQW5MaTR2ZEdGemF5OVVZWE5ySnp0Y2JtbHRjRzl5ZENCN0lITndaV1ZrVUdWeVUyVmpiMjVrSUgwZ1puSnZiU0FuTGk0dmFXNWpMMk5oYkdNbk8xeHVhVzF3YjNKMElIc2dhWE5PZFcwc0lHbHpUMkpxTENCcGMxTjBjbWx1WnlCOUlHWnliMjBnSnk0dUwybHVZeTkxZEdsc2N5YzdYRzVwYlhCdmNuUWdaR1YwWldOMFZtRnNkV1ZVZVhCbElHWnliMjBnSnk0dUwzWmhiSFZsTFhSNWNHVnpMMlJsZEdWamRDYzdYRzVwYlhCdmNuUWdUbFZOUlZKSlEwRk1YMVpCVEZWRlV5Qm1jbTl0SUNjdUxpOXBibU12Ym5WdFpYSnBZMkZzTFhaaGJIVmxjeWM3WEc1Y2JtTnZibk4wSUU1VlRWOU9WVTFGVWtsRFFVeGZWa0ZNVlVWVElEMGdUbFZOUlZKSlEwRk1YMVpCVEZWRlV5NXNaVzVuZEdnN1hHNWNibU5zWVhOeklFRmpkR2x2YmlCbGVIUmxibVJ6SUZSaGMyc2dlMXh1SUNBZ0lHTnZibk4wY25WamRHOXlLSEJ5YjNCektTQjdYRzRnSUNBZ0lDQWdJSEJ5YjNCekxuTjBZWFJsSUQwZ2UzMDdYRzRnSUNBZ0lDQWdJSEJ5YjNCekxuWmhiSFZsUzJWNWN5QTlJRnRkTzF4dUlDQWdJQ0FnSUNCd2NtOXdjeTV3WVhKbGJuUkxaWGx6SUQwZ1cxMDdYRzRnSUNBZ0lDQWdJSE4xY0dWeUtIQnliM0J6S1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0F2S2x4dUlDQWdJQ0FnSUNBaklGTmxkQ0JCWTNScGIyNGdjSEp2Y0dWeWRHbGxjMXh1SUNBZ0lDQWdJQ0FqSXlCVFpYUWdkWE5sY2kxa1pXWnBibVZrSUVGamRHbHZiaUJ3Y205d1pYSjBhV1Z6WEc1Y2JpQWdJQ0FnSUNBZ1FIQmhjbUZ0SUZ0dlltcGxZM1JkWEc0Z0lDQWdJQ0FnSUVCeVpYUjFjbTRnVzBGamRHbHZibDFjYmlBZ0lDQXFMMXh1SUNBZ0lITmxkQ2h3Y205d2N5QTlJSHQ5S1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11ZG1Gc2RXVnpJRDBnZEdocGN5NTJZV3gxWlhNZ2ZId2dlMzA3WEc1Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnZXlCMllXeDFaWE1zSUM0dUxuQnliM0J6Vkc5VFpYUWdmU0E5SUhCeWIzQnpPMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQnBibWhsY21sMFlXSnNaU0E5SUh0OU8xeHVYRzRnSUNBZ0lDQWdJQzh2SUZObGRDQnViMjR0WTI5dWMzVnRaV1FnY0hKdmNHVnlkR2xsYzF4dUlDQWdJQ0FnSUNCemRYQmxjaTV6WlhRb2NISnZjSE5VYjFObGRDazdYRzVjYmlBZ0lDQWdJQ0FnTHk4Z1VISnBiV1VnWVc0Z2IySnFaV04wSUhSdklHbHVhR1Z5YVhRZ1puSnZiU3dnZDJsMGFDQnZibXg1SUdCMllXeDFaV0FnY0hKdmNHVnlkR2xsYzF4dUlDQWdJQ0FnSUNCbWIzSWdLR3hsZENCclpYa2dhVzRnZEdocGN5NWtaV1poZFd4MFZtRnNkV1VwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbVJsWm1GMWJIUldZV3gxWlM1b1lYTlBkMjVRY205d1pYSjBlU2hyWlhrcElDWW1JSEJ5YjNCelZHOVRaWFF1YUdGelQzZHVVSEp2Y0dWeWRIa29hMlY1S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbHVhR1Z5YVhSaFlteGxXMnRsZVYwZ1BTQndjbTl3YzFSdlUyVjBXMnRsZVYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQXZMeUJWY0dSaGRHVWdaWGhwYzNScGJtY2dkbUZzZFdWeklIZHBkR2dnYVc1b1pYSnBkR0ZpYkdVZ2NISnZjR1Z5ZEdsbGMxeHVJQ0FnSUNBZ0lDQm1iM0lnS0d4bGRDQnJaWGtnYVc0Z2RHaHBjeTUyWVd4MVpYTXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxuWmhiSFZsY3k1b1lYTlBkMjVRY205d1pYSjBlU2hyWlhrcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1MllXeDFaWE5iYTJWNVhTQTlJSHNnTGk0dWRHaHBjeTUyWVd4MVpYTmJhMlY1WFN3Z0xpNHVhVzVvWlhKcGRHRmliR1VnZlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDOHZJRlZ3WkdGMFpWeHVJQ0FnSUNBZ0lDQnBaaUFvZG1Gc2RXVnpLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG5ObGRGWmhiSFZsY3loMllXeDFaWE1zSUdsdWFHVnlhWFJoWW14bEtUdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdVSEpsWTI5dGNIVjBaU0J1ZFcxaVpYSWdiMllnZG1Gc2RXVWdhMlY1SUdGdVpDQndZWEpsYm5RZ2EyVjVjeUIwYnlCaGRtOXBaQ0J3WlhJdFpuSmhiV1VnYldWaGMzVnlaVzFsYm5SY2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWJuVnRWbUZzZFdWTFpYbHpJRDBnZEdocGN5NTJZV3gxWlV0bGVYTXViR1Z1WjNSb08xeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXVkVzFRWVhKbGJuUkxaWGx6SUQwZ2RHaHBjeTV3WVhKbGJuUkxaWGx6TG14bGJtZDBhRHRjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHZGxkQ2hyWlhrcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE11YzNSaGRHVmJhMlY1WFR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J6WlhSV1lXeDFaWE1vZG1Gc2RXVnpMQ0JwYm1obGNtbDBLU0I3WEc0Z0lDQWdJQ0FnSUM4dklFbDBaWEpoZEdVZ2IzWmxjaUJoYkd3Z2FXNWpiMjFwYm1jZ2RtRnNkV1Z6SUdGdVpDQnpaWFJjYmlBZ0lDQWdJQ0FnWm05eUlDaHNaWFFnYTJWNUlHbHVJSFpoYkhWbGN5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFpoYkhWbGN5NW9ZWE5QZDI1UWNtOXdaWEowZVNoclpYa3BLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYkdWMElHaGhjME5vYVd4a2NtVnVJRDBnWm1Gc2MyVTdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ1kyaHBiR1J5Wlc0Z1BTQjdmVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0F2THlCTlpYSm5aU0JwYm5SdklHVjRhWE4wYVc1bklIWmhiSFZsSUc5eUlHTnlaV0YwWlNCdVpYZGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnNaWFFnYm1WM1ZtRnNkV1VnUFNCMGFHbHpMblpoYkhWbGMxdHJaWGxkSUQ4Z2V5QXVMaTUwYUdsekxuWmhiSFZsYzF0clpYbGRJSDBnT2lCN0lDNHVMblJvYVhNdVpHVm1ZWFZzZEZaaGJIVmxMQ0F1TGk1cGJtaGxjbWwwSUgwN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXZMeUJKWmlCMllXeDFaWE1nYVhNZ2JtOTBJR0Z1SUc5aWFtVmpkQ3dnWVhOemFXZHVJSFpoYkhWbElIUnZJR1JsWm1GMWJIUWdjSEp2Y0Z4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDZ2hhWE5QWW1vb2RtRnNkV1Z6VzJ0bGVWMHBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHNWxkMVpoYkhWbFczUm9hWE11WkdWbVlYVnNkRlpoYkhWbFVISnZjRjBnUFNCMllXeDFaWE5iYTJWNVhUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J1WlhkV1lXeDFaU0E5SUhzZ0xpNHVibVYzVm1Gc2RXVXNJQzR1TG5aaGJIVmxjMXRyWlhsZElIMDdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1NXWWdkMlVuZG1VZ1oyOTBJR0Z1SUdGa1lYQjBaWElzSUdkbGRDQjBhR1VnWTNWeWNtVnVkQ0IyWVd4MVpWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2gyWVd4MVpYTmJhMlY1WFM1amRYSnlaVzUwSUQwOVBTQjFibVJsWm1sdVpXUWdKaVlnZEdocGN5NWhaR0Z3ZEdWeUlDWW1JSFJvYVhNdVlXUmhjSFJsY2k1blpYUXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JtVjNWbUZzZFdVdVkzVnljbVZ1ZENBOUlIUm9hWE11WVdSaGNIUmxjaTVuWlhRb2EyVjVLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdkx5QkpaaUIzWlNCa2IyNG5kQ0JvWVhabElHRWdkbUZzZFdVZ2RIbHdaU0JoYm1RZ2QyVWdaRzhnYUdGMlpTQmhiaUJCWkdGd2RHVnlMQ0JqYUdWamF5Qm1iM0lnZEhsd1pTQjNhWFJvSUhaaGJIVmxJR3RsZVZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDZ2hibVYzVm1Gc2RXVXVkSGx3WlNBbUppQjBhR2x6TG1Ga1lYQjBaWElnSmlZZ2RHaHBjeTVoWkdGd2RHVnlMbWRsZEZaaGJIVmxWSGx3WlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J1WlhkV1lXeDFaUzUwZVhCbElEMGdkR2hwY3k1aFpHRndkR1Z5TG1kbGRGWmhiSFZsVkhsd1pTaHJaWGtwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDOHZJRWxtSUhkbElITjBhV3hzSUdSdmJpZDBJR2hoZG1VZ1lTQjJZV3gxWlNCMGVYQmxJR0Z1WkNCMGFHbHpJR2x6SUhSb1pTQm1hWEp6ZENCMGFXMWxJSGRsSjNabElITmxkQ0IwYUdseklIWmhiSFZsTENCamFHVmpheUJ1ZFcxbGNtbGpZV3dnZG1Gc2RXVnpJR1p2Y2lCemRISnBibWR6SUdGdVpDQjBaWE4wWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tDRnVaWGRXWVd4MVpTNTBlWEJsSUNZbUlDRjBhR2x6TG5aaGJIVmxjMXRyWlhsZEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUc1bGQxWmhiSFZsTG5SNWNHVWdQU0JrWlhSbFkzUldZV3gxWlZSNWNHVW9ibVYzVm1Gc2RXVXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM4dklFbG1JSGRsSUdoaGRtVWdZU0IyWVd4MVpTQjBlWEJsTENCb1lXNWtiR1V1SUZSb2FYTWdhWE1nYlhrZ2JHVmhjM1FnWm1GMmIzVnlhWFJsSUhCaGNuUWdiMllnVUc5d2JXOTBhVzl1TENCemJ5NHVMaUJsYm1wdmVTNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvYm1WM1ZtRnNkV1V1ZEhsd1pTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElFNVZUVjlPVlUxRlVrbERRVXhmVmtGTVZVVlRPeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUhCeWIzQk9ZVzFsSUQwZ1RsVk5SVkpKUTBGTVgxWkJURlZGVTF0cFhUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUhaaGJIVmxVSEp2Y0NBOUlHNWxkMVpoYkhWbFczQnliM0JPWVcxbFhUdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdMeThnU1dZZ2RHaHBjeUJ3Y205d0lHbHpJR0VnYzNSeWFXNW5JR0Z1WkNCM1pTQm9ZWFpsSUdFZ2MzQnNhWFIwWlhJc0lITndiR2wwWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2JtVjNWbUZzZFdVdWRIbHdaUzVvWVhOUGQyNVFjbTl3WlhKMGVTZ25jM0JzYVhRbktTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJSE53YkdsMFVISnZjQ0E5SUdselUzUnlhVzVuS0haaGJIVmxVSEp2Y0NrZ1B5QnVaWGRXWVd4MVpTNTBlWEJsTG5Od2JHbDBLSFpoYkhWbFVISnZjQ2tnT2lCN2ZUdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdadmNpQW9iR1YwSUhOd2JHbDBTMlY1SUdsdUlITndiR2wwVUhKdmNDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvYzNCc2FYUlFjbTl3TG1oaGMwOTNibEJ5YjNCbGNuUjVLSE53YkdsMFMyVjVLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnWTI5dFltbHVaV1JMWlhrZ1BTQnJaWGtnS3lCemNHeHBkRXRsZVR0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdMeThnU1dZZ2QyVWdaRzl1SjNRZ2FHRjJaU0JoSUdOb2FXeGtJSFpoYkhWbElHWnZjaUIwYUdseklHdGxlU3dnYldGclpTQnZibVZjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDZ2hZMmhwYkdSeVpXNWJZMjl0WW1sdVpXUkxaWGxkS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdaR1ZtWVhWc2RGWmhiSFZsSUQwZ0tHNWxkMVpoYkhWbExuUjVjR1V1WkdWbVlYVnNkRkJ5YjNCeklDWW1JRzVsZDFaaGJIVmxMblI1Y0dVdVpHVm1ZWFZzZEZCeWIzQnpXM053YkdsMFMyVjVYU2tnUHlCdVpYZFdZV3gxWlM1MGVYQmxMbVJsWm1GMWJIUlFjbTl3YzF0emNHeHBkRXRsZVYwZ09pQnVaWGRXWVd4MVpTNTBlWEJsTG1SbFptRjFiSFJRY205d2N5QjhmQ0I3ZlR0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOb2FXeGtjbVZ1VzJOdmJXSnBibVZrUzJWNVhTQTlJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTGk0dWJtVjNWbUZzZFdVc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDNHVMbVJsWm1GMWJIUldZV3gxWlN4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NHRnlaVzUwT2lCclpYa3NYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR05vYVd4a1MyVjVPaUJ6Y0d4cGRFdGxlVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMDdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmtaV3hsZEdVZ1kyaHBiR1J5Wlc1YlkyOXRZbWx1WldSTFpYbGRMblI1Y0dVN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdoaGMwTm9hV3hrY21WdUlEMGdkSEoxWlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTm9hV3hrY21WdVcyTnZiV0pwYm1Wa1MyVjVYVnR3Y205d1RtRnRaVjBnUFNCd1lYSnpaVVpzYjJGMEtITndiR2wwVUhKdmNGdHpjR3hwZEV0bGVWMHBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdMeThnU1dZZ2QyVWdhR0YyWlNCaElIUmxiWEJzWVhSbElHWjFibU4wYVc5dUxDQm5aVzVsY21GMFpWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNnaGJtVjNWbUZzZFdVdWRHVnRjR3hoZEdVZ0ppWWdibVYzVm1Gc2RXVXVkSGx3WlM1MFpXMXdiR0YwWlNBbUppQnBjMU4wY21sdVp5aDJZV3gxWlZCeWIzQXBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRzVsZDFaaGJIVmxMblJsYlhCc1lYUmxJRDBnYm1WM1ZtRnNkV1V1ZEhsd1pTNTBaVzF3YkdGMFpTaDJZV3gxWlZCeWIzQXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0JwWmlBb2JtVjNWbUZzZFdVdWRIbHdaUzVrWldaaGRXeDBVSEp2Y0hNcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J1WlhkV1lXeDFaU0E5SUhzZ0xpNHVibVYzVm1Gc2RXVXNJQzR1TG01bGQxWmhiSFZsTG5SNWNHVXVaR1ZtWVhWc2RGQnliM0J6SUgwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2gyWVd4MVpWQnliM0FnSVQwOUlIVnVaR1ZtYVc1bFpDQW1KaUJ1WlhkV1lXeDFaUzUwZVhCbExuQmhjbk5sS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdibVYzVm1Gc2RXVmJjSEp2Y0U1aGJXVmRJRDBnYm1WM1ZtRnNkV1V1ZEhsd1pTNXdZWEp6WlNoMllXeDFaVkJ5YjNBc0lHNWxkMVpoYkhWbEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgwZ0x5OGdSVzVrSUhaaGJIVmxJSFI1Y0dVZ2JtOXVjMlZ1YzJWY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDOHZJRk5sZENCZ2NISmxkbUFnZEc4Z1lHTjFjbkpsYm5SZ0lHWnZjaUJtYVhKemRDQm1jbUZ0WlNCaFpuUmxjaUJ6WlhSY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCdVpYZFdZV3gxWlM1d2NtVjJJRDBnYm1WM1ZtRnNkV1V1WTNWeWNtVnVkRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0F2THlCSlppQjBhR2x6SUhaaGJIVmxJR1J2WlhOdUozUWdhR0YyWlNCamFHbHNaSEpsYml3Z1lXUmtJSFJ2SUhaaGJIVmxTMlY1YzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDZ2hhR0Z6UTJocGJHUnlaVzRwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0hSb2FYTXVkbUZzZFdWTFpYbHpMbWx1WkdWNFQyWW9hMlY1S1NBOVBUMGdMVEVwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVkbUZzZFdWTFpYbHpMbkIxYzJnb2EyVjVLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdMeThnVDNJZ1lXUmtJSFJ2SUhCaGNtVnVkRXRsZVhOY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnVaWGRXWVd4MVpTNWphR2xzWkhKbGJpQTlJRzVsZDFaaGJIVmxMbU5vYVd4a2NtVnVJSHg4SUh0OU8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDaDBhR2x6TG5CaGNtVnVkRXRsZVhNdWFXNWtaWGhQWmloclpYa3BJRDA5UFNBdE1Ta2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1d1lYSmxiblJMWlhsekxuQjFjMmdvYTJWNUtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWMyVjBWbUZzZFdWektHTm9hV3hrY21WdUtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxuWmhiSFZsYzF0clpYbGRJRDBnYm1WM1ZtRnNkV1U3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmlBZ0lDQXZLbHh1SUNBZ0lDQWdJQ0JFWldOcFpHVWdkMmhsZEdobGNpQjBhR2x6SUVGamRHbHZiaUIzYVd4c0lISmxibVJsY2lCdmJpQnVaWGgwSUdaeVlXMWxYRzVjYmlBZ0lDQWdJQ0FnUUhCaGNtRnRJRnRCWTNScGIyNWRYRzRnSUNBZ0lDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhWeHVJQ0FnSUNBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wxY2JpQWdJQ0FnSUNBZ1FISmxkSFZ5YmlCYlltOXZiR1ZoYmwwNklGSmxkSFZ5YmlCMGNuVmxJSFJ2SUhKbGJtUmxjbHh1SUNBZ0lDb3ZYRzRnSUNBZ2QybHNiRkpsYm1SbGNpaGhZM1JwYjI0c0lHWnlZVzFsVTNSaGJYQXNJR1ZzWVhCelpXUXBJSHRjYmlBZ0lDQWdJQ0FnYkdWMElHaGhjME5vWVc1blpXUWdQU0JtWVd4elpUdGNibHh1SUNBZ0lDQWdJQ0F2THlCRGFHVmpheUJwWmlCaVlYTmxJSFpoYkhWbGN5Qm9ZWFpsSUhWd1pHRjBaV1FnWEc0Z0lDQWdJQ0FnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z2RHaHBjeTV1ZFcxV1lXeDFaVXRsZVhNN0lHa3JLeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2EyVjVJRDBnZEdocGN5NTJZV3gxWlV0bGVYTmJhVjA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCMllXeDFaU0E5SUhSb2FYTXVkbUZzZFdWelcydGxlVjA3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUZKMWJpQjBjbUZ1YzJadmNtMGdablZ1WTNScGIyNGdLR2xtSUhCeVpYTmxiblFwWEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvZG1Gc2RXVXVkSEpoYm5ObWIzSnRLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVXVZM1Z5Y21WdWRDQTlJSFpoYkhWbExuUnlZVzV6Wm05eWJTaDJZV3gxWlM1amRYSnlaVzUwTENCclpYa3NJSFJvYVhNcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCRFlYQWdiV2x1YVcxMWJWeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHbHpUblZ0S0haaGJIVmxMbTFwYmlrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZV3gxWlM1amRYSnlaVzUwSUQwZ1RXRjBhQzV0WVhnb2RtRnNkV1V1WTNWeWNtVnVkQ3dnZG1Gc2RXVXViV2x1S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnUTJGd0lHMWhlR2x0ZFcxY2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNocGMwNTFiU2gyWVd4MVpTNXRZWGdwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnNkV1V1WTNWeWNtVnVkQ0E5SUUxaGRHZ3ViV2x1S0haaGJIVmxMbU4xY25KbGJuUXNJSFpoYkhWbExtMWhlQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJRkp2ZFc1a0lHNTFiV0psY2x4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0haaGJIVmxMbkp2ZFc1a0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZzZFdVdVkzVnljbVZ1ZENBOUlFMWhkR2d1Y205MWJtUW9kbUZzZFdVdVkzVnljbVZ1ZENrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJSFpoYkhWbExtWnlZVzFsUTJoaGJtZGxJRDBnZG1Gc2RXVXVZM1Z5Y21WdWRDQXRJSFpoYkhWbExuQnlaWFk3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUZWd1pHRjBaU0IyWld4dlkybDBlVnh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLQ0YwYUdsekxtTmhiR04xYkdGMFpYTldaV3h2WTJsMGVTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFpoYkhWbExuWmxiRzlqYVhSNUlEMGdjM0JsWldSUVpYSlRaV052Ym1Rb2RtRnNkV1V1Wm5KaGJXVkRhR0Z1WjJVc0lHVnNZWEJ6WldRcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCSlppQjBhR2x6SUhaaGJIVmxJR2hoY3lCamFHRnVaMlZrWEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvZG1Gc2RXVXVjSEpsZGlBaFBUMGdkbUZzZFdVdVkzVnljbVZ1ZENrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHaGhjME5vWVc1blpXUWdQU0IwY25WbE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIWmhiSFZsTG5CeVpYWWdQU0IyWVd4MVpTNWpkWEp5Wlc1ME8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCQmNIQmxibVFnZFc1cGRGeHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdkbUZzZFdWR2IzSlRkR0YwWlNBOUlDaDJZV3gxWlM1MGVYQmxJQ1ltSUhaaGJIVmxMblI1Y0dVdWMyVnlhV0ZzYVhwbEtTQS9JSFpoYkhWbExuUjVjR1V1YzJWeWFXRnNhWHBsS0haaGJIVmxMbU4xY25KbGJuUXNJSFpoYkhWbEtTQTZJSFpoYkhWbExtTjFjbkpsYm5RN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUM4dklFRmtaQ0IwYnlCemRHRjBaU0JwWmlCMGFHbHpJR2x6SUc1dmRDQmhJR05vYVd4a0lIWmhkV1ZjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2doZG1Gc2RXVXVjR0Z5Wlc1MEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1emRHRjBaVnRyWlhsZElEMGdkbUZzZFdWR2IzSlRkR0YwWlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1MllXeDFaWE5iZG1Gc2RXVXVjR0Z5Wlc1MFhTNWphR2xzWkhKbGJsdDJZV3gxWlM1amFHbHNaRXRsZVYwZ1BTQjJZV3gxWlVadmNsTjBZWFJsTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ2FXWWdLSFJvYVhNdWIyNUdjbUZ0WlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXZia1p5WVcxbEtIUm9hWE11YzNSaGRHVXNJSFJvYVhNcE8xeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJQ2gwYUdsekxtOXVRMnhsWVc1MWNDa2dQeUIwY25WbElEb2dhR0Z6UTJoaGJtZGxaRHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQXZLbHh1SUNBZ0lDQWdJQ0JKWmlCM1pTQmhjbVVnY21WdVpHVnlhVzVuTENCeVpXTnZiV0pwYm1VZ2NHRnlaVzUwSUhaaGJIVmxjeUJtYVhKemRGeHVJQ0FnSUNvdlhHNGdJQ0FnYjI1UWNtVlNaVzVrWlhJb0tTQjdYRzRnSUNBZ0lDQWdJQzh2SUZWd1pHRjBaU0J3WVhKbGJuUWdkbUZzZFdWelhHNGdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2dkR2hwY3k1dWRXMVFZWEpsYm5STFpYbHpPeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJR3RsZVNBOUlIUm9hWE11Y0dGeVpXNTBTMlY1YzF0cFhUdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJSFpoYkhWbElEMGdkR2hwY3k1MllXeDFaWE5iYTJWNVhUdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ2RtRnNkV1V1WTNWeWNtVnVkQ0E5SUhaaGJIVmxMblI1Y0dVdVkyOXRZbWx1WlNoMllXeDFaUzVqYUdsc1pISmxiaXdnZG1Gc2RXVXVkR1Z0Y0d4aGRHVXBPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvZEdocGN5NXpkR0YwWlZ0clpYbGRJQ0U5UFNCMllXeDFaUzVqZFhKeVpXNTBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXpkR0YwWlZ0clpYbGRJRDBnZG1Gc2RXVXVZM1Z5Y21WdWREdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JseHVJQ0FnSUdsdWFHVnlhWFFvY0hKdmNITWdQU0I3ZlNrZ2UxeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCN0lIWmhiSFZsY3l3Z0xpNHVjSEp2Y0hOVWIxTmxkQ0I5SUQwZ2NISnZjSE03WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJRzVsZDBGamRHbHZiaUE5SUhOMWNHVnlMbWx1YUdWeWFYUW9jSEp2Y0hOVWIxTmxkQ2s3WEc1Y2JpQWdJQ0FnSUNBZ2FXWWdLSFpoYkhWbGN5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2JtVjNRV04wYVc5dUxuTmxkQ2g3SUhaaGJIVmxjeUI5S1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnVaWGRCWTNScGIyNDdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NHRjFjMlVvS1NCN1hHNGdJQ0FnSUNBZ0lITjFjR1Z5TG5OMGIzQW9LVHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WemRXMWxLQ2tnZTF4dUlDQWdJQ0FnSUNCemRYQmxjaTV6ZEdGeWRDZ3BPMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3p0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0IwYjJkbmJHVW9LU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxtbHpRV04wYVhabElEOGdkR2hwY3k1d1lYVnpaU2dwSURvZ2RHaHBjeTV5WlhOMWJXVW9LVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnpkR0Z5ZENncElIdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2RtRnNkV1Z6SUQwZ2RHaHBjeTUyWVd4MVpYTTdYRzRnSUNBZ0lDQWdJSE4xY0dWeUxuTjBZWEowS0NrN1hHNWNiaUFnSUNBZ0lDQWdabTl5SUNoc1pYUWdhMlY1SUdsdUlIWmhiSFZsY3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIWmhiSFZsY3k1b1lYTlBkMjVRY205d1pYSjBlU2hyWlhrcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZzZFdWelcydGxlVjB1Y0hKbGRpQTlJSFpoYkhWbGMxdHJaWGxkTG05eWFXZHBiaUE5SUhaaGJIVmxjMXRyWlhsZExtTjFjbkpsYm5RN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0J6ZEdGMGFXTWdaWGgwWlc1a1JHVm1ZWFZzZEZaaGJIVmxLSEJ5YjNCektTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjdJQzR1TG5Sb2FYTXVjSEp2ZEc5MGVYQmxMbVJsWm1GMWJIUldZV3gxWlN3Z0xpNHVjSEp2Y0hNZ2ZUdGNiaUFnSUNCOVhHNWNiaUFnSUNCemRHRjBhV01nWlhoMFpXNWtSR1ZtWVhWc2RGQnliM0J6S0hCeWIzQnpLU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUI3SUM0dUxuUm9hWE11Y0hKdmRHOTBlWEJsTG1SbFptRjFiSFJRY205d2N5d2dMaTR1Y0hKdmNITWdmVHRjYmlBZ0lDQjlYRzU5WEc1Y2JrRmpkR2x2Ymk1d2NtOTBiM1I1Y0dVdVpHVm1ZWFZzZEZaaGJIVmxVSEp2Y0NBOUlDZGpkWEp5Wlc1MEp6dGNia0ZqZEdsdmJpNXdjbTkwYjNSNWNHVXVaR1ZtWVhWc2RGWmhiSFZsSUQwZ2UxeHVJQ0FnSUdOMWNuSmxiblE2SURBc1hHNGdJQ0FnZG1Wc2IyTnBkSGs2SURBc1hHNGdJQ0FnY205MWJtUTZJR1poYkhObExGeHVJQ0FnSUcxcGJqb2dkVzVrWldacGJtVmtMRnh1SUNBZ0lHMWhlRG9nZFc1a1pXWnBibVZrTEZ4dUlDQWdJSFJ5WVc1elptOXliVG9nZFc1a1pXWnBibVZrWEc1OU8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQkJZM1JwYjI0N1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL0FjdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9BY3Rpb24yID0gcmVxdWlyZSgnLi9BY3Rpb24nKTtcblxudmFyIF9BY3Rpb24zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQWN0aW9uMik7XG5cbnZhciBfcHJlc2V0RWFzaW5nID0gcmVxdWlyZSgnLi9lYXNpbmcvcHJlc2V0LWVhc2luZycpO1xuXG52YXIgX3ByZXNldEVhc2luZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmVzZXRFYXNpbmcpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIENPVU5UID0gJ0NvdW50JztcbnZhciBORVhUX1NURVBTID0ge1xuICAgIGxvb3A6ICdyZXN0YXJ0JyxcbiAgICB5b3lvOiAncmV2ZXJzZScsXG4gICAgZmxpcDogJ2ZsaXBWYWx1ZXMnXG59O1xuXG52YXIgVHdlZW4gPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICAgIF9pbmhlcml0cyhUd2VlbiwgX0FjdGlvbik7XG5cbiAgICBmdW5jdGlvbiBUd2VlbigpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFR3ZWVuKTtcblxuICAgICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9XG5cbiAgICBUd2Vlbi5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgICAgX0FjdGlvbi5wcm90b3R5cGUuc3RhcnQuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5lbGFwc2VkID0gMDtcbiAgICAgICAgdGhpcy5mbGlwQ291bnQgPSB0aGlzLnlveW9Db3VudCA9IHRoaXMubG9vcENvdW50ID0gMDtcbiAgICAgICAgdGhpcy5pc1NjcnViYmluZyA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgVHdlZW4ucHJvdG90eXBlLm9uVXBkYXRlID0gZnVuY3Rpb24gb25VcGRhdGUodHdlZW4sIGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgICAgICAgdmFyIHByb2dyZXNzVGFyZ2V0ID0gdGhpcy5wbGF5RGlyZWN0aW9uID09PSAxID8gMSA6IDA7XG5cbiAgICAgICAgdGhpcy5lbmRlZCA9IHRydWU7XG5cbiAgICAgICAgaWYgKCF0aGlzLmlzU2NydWJiaW5nKSB7XG4gICAgICAgICAgICB0aGlzLmVsYXBzZWQgKz0gZWxhcHNlZCAqIHRoaXMuZGlsYXRlICogdGhpcy5wbGF5RGlyZWN0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gdGhpcy52YWx1ZUtleXNbaV07XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuXG4gICAgICAgICAgICB2YXIgcHJvZ3Jlc3MgPSAoMCwgX2NhbGMucmVzdHJpY3QpKCgwLCBfY2FsYy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSkodGhpcy5lbGFwc2VkIC0gdmFsdWUuZGVsYXksIDAsIHZhbHVlLmR1cmF0aW9uKSwgMCwgMSk7XG5cbiAgICAgICAgICAgIC8vIE1hcmsgVHdlZW4gYXMgTk9UIGVuZGVkIGlmIHN0aWxsIGluIHByb2dyZXNzXG4gICAgICAgICAgICBpZiAocHJvZ3Jlc3MgIT09IHByb2dyZXNzVGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTdGVwIHByb2dyZXNzIGlmIHdlJ3JlIHN0ZXBwaW5nXG4gICAgICAgICAgICBpZiAodmFsdWUuc3RlcHMpIHtcbiAgICAgICAgICAgICAgICBwcm9ncmVzcyA9ICgwLCBfY2FsYy5zdGVwUHJvZ3Jlc3MpKHByb2dyZXNzLCB2YWx1ZS5zdGVwcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEVhc2UgcHJvZ3Jlc3NcbiAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSAoMCwgX2NhbGMuZWFzZSkocHJvZ3Jlc3MsIHZhbHVlLmZyb20sIHZhbHVlLnRvLCB2YWx1ZS5lYXNlKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBUd2Vlbi5wcm90b3R5cGUub25GcmFtZUVuZCA9IGZ1bmN0aW9uIG9uRnJhbWVFbmQoKSB7XG4gICAgICAgIGlmICh0aGlzLmVuZGVkICYmICF0aGlzLmlzU2NydWJiaW5nKSB7XG4gICAgICAgICAgICB2YXIgc3RlcFRha2VuID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBORVhUX1NURVBTKSB7XG4gICAgICAgICAgICAgICAgaWYgKE5FWFRfU1RFUFMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKDAsIF91dGlscy5pc051bSkodGhpc1trZXldKSAmJiB0aGlzW2tleV0gPiB0aGlzW2tleSArIENPVU5UXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1trZXkgKyBDT1VOVF0rKztcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXBUYWtlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW05FWFRfU1RFUFNba2V5XV0oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFzdGVwVGFrZW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgVHdlZW4ucHJvdG90eXBlLmZsaXBWYWx1ZXMgPSBmdW5jdGlvbiBmbGlwVmFsdWVzKCkge1xuICAgICAgICB2YXIgdmFsdWVzID0gdGhpcy52YWx1ZXM7XG5cbiAgICAgICAgdGhpcy5lbGFwc2VkID0gdGhpcy5kdXJhdGlvbiAtIHRoaXMuZWxhcHNlZDtcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB2YWx1ZXNba2V5XTtcbiAgICAgICAgICAgICAgICB2YXIgX3JlZiA9IFt2YWx1ZS5mcm9tLCB2YWx1ZS50b107XG4gICAgICAgICAgICAgICAgdmFsdWUudG8gPSBfcmVmWzBdO1xuICAgICAgICAgICAgICAgIHZhbHVlLmZyb20gPSBfcmVmWzFdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIFR3ZWVuLnByb3RvdHlwZS5yZXZlcnNlID0gZnVuY3Rpb24gcmV2ZXJzZSgpIHtcbiAgICAgICAgdGhpcy5wbGF5RGlyZWN0aW9uICo9IC0xO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgVHdlZW4ucHJvdG90eXBlLnJlc3RhcnQgPSBmdW5jdGlvbiByZXN0YXJ0KCkge1xuICAgICAgICB0aGlzLmVsYXBzZWQgPSB0aGlzLnBsYXlEaXJlY3Rpb24gPT09IDEgPyAwIDogdGhpcy5kdXJhdGlvbjtcbiAgICAgICAgdGhpcy5zdGFydGVkID0gKDAsIF91dGlscy5jdXJyZW50VGltZSkoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIFR3ZWVuLnByb3RvdHlwZS5zZWVrID0gZnVuY3Rpb24gc2Vlayhwcm9ncmVzcykge1xuICAgICAgICB0aGlzLnNlZWtUaW1lKHRoaXMuZHVyYXRpb24gKiBwcm9ncmVzcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBUd2Vlbi5wcm90b3R5cGUuc2Vla1RpbWUgPSBmdW5jdGlvbiBzZWVrVGltZShlbGFwc2VkKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0FjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5vbmNlKCk7XG4gICAgICAgICAgICB0aGlzLmlzU2NydWJiaW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZWxhcHNlZCA9IGVsYXBzZWQ7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIHJldHVybiBUd2Vlbjtcbn0oX0FjdGlvbjMuZGVmYXVsdCk7XG5cblR3ZWVuLnByb3RvdHlwZS5kZWZhdWx0VmFsdWVQcm9wID0gJ3RvJztcblR3ZWVuLnByb3RvdHlwZS5kZWZhdWx0VmFsdWUgPSBfQWN0aW9uMy5kZWZhdWx0LmV4dGVuZERlZmF1bHRWYWx1ZSh7XG4gICAgZGVsYXk6IDAsXG4gICAgZHVyYXRpb246IDMwMCxcbiAgICBlYXNlOiBfcHJlc2V0RWFzaW5nMi5kZWZhdWx0LmVhc2VPdXQsXG4gICAgZWxhcHNlZDogMCxcbiAgICBmcm9tOiAwLFxuICAgIHN0ZXBzOiAwLFxuICAgIHRvOiAwLFxuICAgIHJvdW5kOiBmYWxzZVxufSk7XG5Ud2Vlbi5wcm90b3R5cGUuZGVmYXVsdFByb3BzID0gX0FjdGlvbjMuZGVmYXVsdC5leHRlbmREZWZhdWx0UHJvcHMoe1xuICAgIGJsZW5kOiB0cnVlLFxuICAgIGRpbGF0ZTogMSxcbiAgICBsb29wOiAwLFxuICAgIHlveW86IDAsXG4gICAgZmxpcDogMCxcbiAgICBsb29wQ291bnQ6IDAsXG4gICAgeW95b0NvdW50OiAwLFxuICAgIGZsaXBDb3VudDogMCxcbiAgICBwbGF5RGlyZWN0aW9uOiAxLFxuICAgIGlzU2NydWJiaW5nOiBmYWxzZSxcbiAgICBlbmRlZDogZmFsc2UsXG4gICAgZWxhcHNlZDogMFxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFR3ZWVuO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMVIzWldWdUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3p0QlFVdEJMRWxCUVUwc1VVRkJVU3hQUVVGU08wRkJRMDRzU1VGQlRTeGhRVUZoTzBGQlEyWXNWVUZCVFN4VFFVRk9PMEZCUTBFc1ZVRkJUU3hUUVVGT08wRkJRMEVzVlVGQlRTeFpRVUZPTzBOQlNFVTdPMGxCVFVFN096czdPenM3T3p0dlFrRkRSaXg1UWtGQlVUdEJRVU5LTERCQ1FVRk5MRXRCUVU0c1dVRkVTVHRCUVVWS0xHRkJRVXNzVDBGQlRDeEhRVUZsTEVOQlFXWXNRMEZHU1R0QlFVZEtMR0ZCUVVzc1UwRkJUQ3hIUVVGcFFpeExRVUZMTEZOQlFVd3NSMEZCYVVJc1MwRkJTeXhUUVVGTUxFZEJRV2xDTEVOQlFXcENMRU5CU0RsQ08wRkJTVW9zWVVGQlN5eFhRVUZNTEVkQlFXMUNMRXRCUVc1Q0xFTkJTa2s3UVVGTFNpeGxRVUZQTEVsQlFWQXNRMEZNU1RzN08wRkJSRTRzYjBKQlUwWXNOa0pCUVZNc1QwRkJUeXhaUVVGWkxGTkJRVk03UVVGRGFrTXNXVUZCVFN4cFFrRkJhVUlzU1VGQlF5eERRVUZMTEdGQlFVd3NTMEZCZFVJc1EwRkJka0lzUjBGQk5FSXNRMEZCTjBJc1IwRkJhVU1zUTBGQmFrTXNRMEZFVlRzN1FVRkhha01zWVVGQlN5eExRVUZNTEVkQlFXRXNTVUZCWWl4RFFVaHBRenM3UVVGTGFrTXNXVUZCU1N4RFFVRkRMRXRCUVVzc1YwRkJUQ3hGUVVGclFqdEJRVU51UWl4cFFrRkJTeXhQUVVGTUxFbEJRV2RDTEU5QlFVTXNSMEZCVlN4TFFVRkxMRTFCUVV3c1IwRkJaU3hMUVVGTExHRkJRVXdzUTBGRWRrSTdVMEZCZGtJN08wRkJTVUVzWVVGQlN5eEpRVUZKTEVsQlFVa3NRMEZCU2l4RlFVRlBMRWxCUVVrc1MwRkJTeXhaUVVGTUxFVkJRVzFDTEVkQlFYWkRMRVZCUVRSRE8wRkJRM2hETEdkQ1FVRk5MRTFCUVUwc1MwRkJTeXhUUVVGTUxFTkJRV1VzUTBGQlppeERRVUZPTEVOQlJHdERPMEZCUlhoRExHZENRVUZOTEZGQlFWRXNTMEZCU3l4TlFVRk1MRU5CUVZrc1IwRkJXaXhEUVVGU0xFTkJSbXRET3p0QlFVbDRReXhuUWtGQlNTeFhRVUZYTEc5Q1FVRlRMR2REUVVGeFFpeExRVUZMTEU5QlFVd3NSMEZCWlN4TlFVRk5MRXRCUVU0c1JVRkJZU3hEUVVGcVJDeEZRVUZ2UkN4TlFVRk5MRkZCUVU0c1EwRkJOMFFzUlVGQk9FVXNRMEZCT1VVc1JVRkJhVVlzUTBGQmFrWXNRMEZCV0RzN08wRkJTbTlETEdkQ1FVOXdReXhoUVVGaExHTkJRV0lzUlVGQk5rSTdRVUZETjBJc2NVSkJRVXNzUzBGQlRDeEhRVUZoTEV0QlFXSXNRMEZFTmtJN1lVRkJha003T3p0QlFWQjNReXhuUWtGWmNFTXNUVUZCVFN4TFFVRk9MRVZCUVdFN1FVRkRZaXd5UWtGQlZ5eDNRa0ZCWVN4UlFVRmlMRVZCUVhWQ0xFMUJRVTBzUzBGQlRpeERRVUZzUXl4RFFVUmhPMkZCUVdwQ096czdRVUZhZDBNc2FVSkJhVUo0UXl4RFFVRk5MRTlCUVU0c1IwRkJaMElzWjBKQlFVc3NVVUZCVEN4RlFVRmxMRTFCUVUwc1NVRkJUaXhGUVVGWkxFMUJRVTBzUlVGQlRpeEZRVUZWTEUxQlFVMHNTVUZCVGl4RFFVRnlSQ3hEUVdwQ2QwTTdVMEZCTlVNN096dEJRV3hDUml4dlFrRjFRMFlzYlVOQlFXRTdRVUZEVkN4WlFVRkpMRXRCUVVzc1MwRkJUQ3hKUVVGakxFTkJRVU1zUzBGQlN5eFhRVUZNTEVWQlFXdENPMEZCUTJwRExHZENRVUZKTEZsQlFWa3NTMEZCV2l4RFFVUTJRanM3UVVGSGFrTXNhVUpCUVVzc1NVRkJTU3hIUVVGS0xFbEJRVmNzVlVGQmFFSXNSVUZCTkVJN1FVRkRlRUlzYjBKQlFVa3NWMEZCVnl4alFVRllMRU5CUVRCQ0xFZEJRVEZDTEVOQlFVb3NSVUZCYjBNN1FVRkRhRU1zZDBKQlFVa3NhMEpCUVUwc1MwRkJTeXhIUVVGTUxFTkJRVTRzUzBGQmIwSXNTMEZCU3l4SFFVRk1MRWxCUVZrc1MwRkJTeXhOUVVGTkxFdEJRVTRzUTBGQmFrSXNSVUZCSzBJN1FVRkRia1FzTmtKQlFVc3NUVUZCVFN4TFFVRk9MRU5CUVV3c1IwRkViVVE3UVVGRmJrUXNiME5CUVZrc1NVRkJXaXhEUVVadFJEdEJRVWR1UkN3MlFrRkJTeXhYUVVGWExFZEJRVmdzUTBGQlRDeEpRVWh0UkR0eFFrRkJka1E3YVVKQlJFbzdZVUZFU2pzN1FVRlZRU3huUWtGQlNTeERRVUZETEZOQlFVUXNSVUZCV1R0QlFVTmFMSEZDUVVGTExGRkJRVXdzUjBGRVdUdGhRVUZvUWp0VFFXSktPenM3UVVGNFEwWXNiMEpCTWtSR0xHMURRVUZoTzBGQlExUXNXVUZCVFN4VFFVRlRMRXRCUVVzc1RVRkJUQ3hEUVVST096dEJRVWRVTEdGQlFVc3NUMEZCVEN4SFFVRmxMRXRCUVVzc1VVRkJUQ3hIUVVGblFpeExRVUZMTEU5QlFVd3NRMEZJZEVJN08wRkJTMVFzWVVGQlN5eEpRVUZKTEVkQlFVb3NTVUZCVnl4TlFVRm9RaXhGUVVGM1FqdEJRVU53UWl4blFrRkJTU3hQUVVGUExHTkJRVkFzUTBGQmMwSXNSMEZCZEVJc1EwRkJTaXhGUVVGblF6dEJRVU0xUWl4dlFrRkJUU3hSUVVGUkxFOUJRVThzUjBGQlVDeERRVUZTTEVOQlJITkNPekpDUVVWSUxFTkJRVU1zVFVGQlRTeEpRVUZPTEVWQlFWa3NUVUZCVFN4RlFVRk9MRVZCUmxZN1FVRkZNMElzYzBKQlFVMHNSVUZCVGl4WFFVWXlRanRCUVVWcVFpeHpRa0ZCVFN4SlFVRk9MRmRCUm1sQ08yRkJRV2hETzFOQlJFbzdPMEZCVDBFc1pVRkJUeXhKUVVGUUxFTkJXbE03T3p0QlFUTkVXQ3h2UWtFd1JVWXNOa0pCUVZVN1FVRkRUaXhoUVVGTExHRkJRVXdzU1VGQmMwSXNRMEZCUXl4RFFVRkVMRU5CUkdoQ08wRkJSVTRzWlVGQlR5eEpRVUZRTEVOQlJrMDdPenRCUVRGRlVpeHZRa0VyUlVZc05rSkJRVlU3UVVGRFRpeGhRVUZMTEU5QlFVd3NSMEZCWlN4SlFVRkRMRU5CUVVzc1lVRkJUQ3hMUVVGMVFpeERRVUYyUWl4SFFVRTBRaXhEUVVFM1FpeEhRVUZwUXl4TFFVRkxMRkZCUVV3c1EwRkVNVU03UVVGRlRpeGhRVUZMTEU5QlFVd3NSMEZCWlN4NVFrRkJaaXhEUVVaTk8wRkJSMDRzWlVGQlR5eEpRVUZRTEVOQlNFMDdPenRCUVM5RlVpeHZRa0Z4UmtZc2NVSkJRVXNzVlVGQlZUdEJRVU5ZTEdGQlFVc3NVVUZCVEN4RFFVRmpMRXRCUVVzc1VVRkJUQ3hIUVVGblFpeFJRVUZvUWl4RFFVRmtMRU5CUkZjN1FVRkZXQ3hsUVVGUExFbEJRVkFzUTBGR1Z6czdPMEZCY2taaUxHOUNRVEJHUml3MlFrRkJVeXhUUVVGVE8wRkJRMlFzV1VGQlNTeERRVUZETEV0QlFVc3NVVUZCVEN4RlFVRmxPMEZCUTJoQ0xHbENRVUZMTEVsQlFVd3NSMEZFWjBJN1FVRkZhRUlzYVVKQlFVc3NWMEZCVEN4SFFVRnRRaXhKUVVGdVFpeERRVVpuUWp0VFFVRndRanM3UVVGTFFTeGhRVUZMTEU5QlFVd3NSMEZCWlN4UFFVRm1MRU5CVG1NN08wRkJVV1FzWlVGQlR5eEpRVUZRTEVOQlVtTTdPenRYUVRGR2FFSTdPenRCUVhOSFRpeE5RVUZOTEZOQlFVNHNRMEZCWjBJc1owSkJRV2hDTEVkQlFXMURMRWxCUVc1RE8wRkJRMEVzVFVGQlRTeFRRVUZPTEVOQlFXZENMRmxCUVdoQ0xFZEJRU3RDTEdsQ1FVRlBMR3RDUVVGUUxFTkJRVEJDTzBGQlEzSkVMRmRCUVU4c1EwRkJVRHRCUVVOQkxHTkJRVlVzUjBGQlZqdEJRVU5CTEZWQlFVMHNkVUpCUVU4c1QwRkJVRHRCUVVOT0xHRkJRVk1zUTBGQlZEdEJRVU5CTEZWQlFVMHNRMEZCVGp0QlFVTkJMRmRCUVU4c1EwRkJVRHRCUVVOQkxGRkJRVWtzUTBGQlNqdEJRVU5CTEZkQlFVOHNTMEZCVUR0RFFWSXlRaXhEUVVFdlFqdEJRVlZCTEUxQlFVMHNVMEZCVGl4RFFVRm5RaXhaUVVGb1FpeEhRVUVyUWl4cFFrRkJUeXhyUWtGQlVDeERRVUV3UWp0QlFVTnlSQ3hYUVVGUExFbEJRVkE3UVVGRFFTeFpRVUZSTEVOQlFWSTdRVUZEUVN4VlFVRk5MRU5CUVU0N1FVRkRRU3hWUVVGTkxFTkJRVTQ3UVVGRFFTeFZRVUZOTEVOQlFVNDdRVUZEUVN4bFFVRlhMRU5CUVZnN1FVRkRRU3hsUVVGWExFTkJRVmc3UVVGRFFTeGxRVUZYTEVOQlFWZzdRVUZEUVN4dFFrRkJaU3hEUVVGbU8wRkJRMEVzYVVKQlFXRXNTMEZCWWp0QlFVTkJMRmRCUVU4c1MwRkJVRHRCUVVOQkxHRkJRVk1zUTBGQlZEdERRVm95UWl4RFFVRXZRanM3YTBKQlpXVWlMQ0ptYVd4bElqb2lWSGRsWlc0dWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUXZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElFRmpkR2x2YmlCbWNtOXRJQ2N1TDBGamRHbHZiaWM3WEc1cGJYQnZjblFnWldGemFXNW5JR1p5YjIwZ0p5NHZaV0Z6YVc1bkwzQnlaWE5sZEMxbFlYTnBibWNuTzF4dWFXMXdiM0owSUhzZ1kzVnljbVZ1ZEZScGJXVXNJR2x6VG5WdElIMGdabkp2YlNBbkxpNHZhVzVqTDNWMGFXeHpKenRjYm1sdGNHOXlkQ0I3SUdWaGMyVXNJSEpsYzNSeWFXTjBMQ0JuWlhSUWNtOW5jbVZ6YzBaeWIyMVdZV3gxWlN3Z2MzUmxjRkJ5YjJkeVpYTnpJSDBnWm5KdmJTQW5MaTR2YVc1akwyTmhiR01uTzF4dVhHNWpiMjV6ZENCRFQxVk9WQ0E5SUNkRGIzVnVkQ2M3WEc1amIyNXpkQ0JPUlZoVVgxTlVSVkJUSUQwZ2UxeHVJQ0FnSUd4dmIzQTZJQ2R5WlhOMFlYSjBKeXhjYmlBZ0lDQjViM2x2T2lBbmNtVjJaWEp6WlNjc1hHNGdJQ0FnWm14cGNEb2dKMlpzYVhCV1lXeDFaWE1uWEc1OU8xeHVYRzVqYkdGemN5QlVkMlZsYmlCbGVIUmxibVJ6SUVGamRHbHZiaUI3WEc0Z0lDQWdjM1JoY25Rb0tTQjdYRzRnSUNBZ0lDQWdJSE4xY0dWeUxuTjBZWEowS0NrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Wld4aGNITmxaQ0E5SURBN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Wm14cGNFTnZkVzUwSUQwZ2RHaHBjeTU1YjNsdlEyOTFiblFnUFNCMGFHbHpMbXh2YjNCRGIzVnVkQ0E5SURBN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YVhOVFkzSjFZbUpwYm1jZ1BTQm1ZV3h6WlR0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2IyNVZjR1JoZEdVb2RIZGxaVzRzSUdaeVlXMWxVM1JoYlhBc0lHVnNZWEJ6WldRcElIdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2NISnZaM0psYzNOVVlYSm5aWFFnUFNBb2RHaHBjeTV3YkdGNVJHbHlaV04wYVc5dUlEMDlQU0F4S1NBL0lERWdPaUF3TzF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11Wlc1a1pXUWdQU0IwY25WbE8xeHVYRzRnSUNBZ0lDQWdJR2xtSUNnaGRHaHBjeTVwYzFOamNuVmlZbWx1WnlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NWxiR0Z3YzJWa0lDczlJQ2hsYkdGd2MyVmtJQ29nZEdocGN5NWthV3hoZEdVcElDb2dkR2hwY3k1d2JHRjVSR2x5WldOMGFXOXVPMXh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQjBhR2x6TG01MWJWWmhiSFZsUzJWNWN6c2dhU3NyS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQnJaWGtnUFNCMGFHbHpMblpoYkhWbFMyVjVjMXRwWFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElIWmhiSFZsSUQwZ2RHaHBjeTUyWVd4MVpYTmJhMlY1WFR0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnYkdWMElIQnliMmR5WlhOeklEMGdjbVZ6ZEhKcFkzUW9aMlYwVUhKdlozSmxjM05HY205dFZtRnNkV1VvZEdocGN5NWxiR0Z3YzJWa0lDMGdkbUZzZFdVdVpHVnNZWGtzSURBc0lIWmhiSFZsTG1SMWNtRjBhVzl1S1N3Z01Dd2dNU2s3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUUxaGNtc2dWSGRsWlc0Z1lYTWdUazlVSUdWdVpHVmtJR2xtSUhOMGFXeHNJR2x1SUhCeWIyZHlaWE56WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvY0hKdlozSmxjM01nSVQwOUlIQnliMmR5WlhOelZHRnlaMlYwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVsYm1SbFpDQTlJR1poYkhObE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCVGRHVndJSEJ5YjJkeVpYTnpJR2xtSUhkbEozSmxJSE4wWlhCd2FXNW5YRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9kbUZzZFdVdWMzUmxjSE1wSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCd2NtOW5jbVZ6Y3lBOUlITjBaWEJRY205bmNtVnpjeWh3Y205bmNtVnpjeXdnZG1Gc2RXVXVjM1JsY0hNcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCRllYTmxJSEJ5YjJkeVpYTnpYRzRnSUNBZ0lDQWdJQ0FnSUNCMllXeDFaUzVqZFhKeVpXNTBJRDBnWldGelpTaHdjbTluY21WemN5d2dkbUZzZFdVdVpuSnZiU3dnZG1Gc2RXVXVkRzhzSUhaaGJIVmxMbVZoYzJVcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2IyNUdjbUZ0WlVWdVpDZ3BJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tIUm9hWE11Wlc1a1pXUWdKaVlnSVhSb2FYTXVhWE5UWTNKMVltSnBibWNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR3hsZENCemRHVndWR0ZyWlc0Z1BTQm1ZV3h6WlR0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnWm05eUlDaHNaWFFnYTJWNUlHbHVJRTVGV0ZSZlUxUkZVRk1wSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9Ua1ZZVkY5VFZFVlFVeTVvWVhOUGQyNVFjbTl3WlhKMGVTaHJaWGtwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNocGMwNTFiU2gwYUdselcydGxlVjBwSUNZbUlIUm9hWE5iYTJWNVhTQStJSFJvYVhOYmEyVjVJQ3NnUTA5VlRsUmRLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdselcydGxlU0FySUVOUFZVNVVYU3NyTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYzNSbGNGUmhhMlZ1SUQwZ2RISjFaVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhOYlRrVllWRjlUVkVWUVUxdHJaWGxkWFNncE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvSVhOMFpYQlVZV3RsYmlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WTI5dGNHeGxkR1VvS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJR1pzYVhCV1lXeDFaWE1vS1NCN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUhaaGJIVmxjeUE5SUhSb2FYTXVkbUZzZFdWek8xeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdVpXeGhjSE5sWkNBOUlIUm9hWE11WkhWeVlYUnBiMjRnTFNCMGFHbHpMbVZzWVhCelpXUTdYRzVjYmlBZ0lDQWdJQ0FnWm05eUlDaHNaWFFnYTJWNUlHbHVJSFpoYkhWbGN5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFpoYkhWbGN5NW9ZWE5QZDI1UWNtOXdaWEowZVNoclpYa3BLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdkbUZzZFdVZ1BTQjJZV3gxWlhOYmEyVjVYVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JiZG1Gc2RXVXVkRzhzSUhaaGJIVmxMbVp5YjIxZElEMGdXM1poYkhWbExtWnliMjBzSUhaaGJIVmxMblJ2WFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNBZ0lIMWNibHh1SUNBZ0lISmxkbVZ5YzJVb0tTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdWNHeGhlVVJwY21WamRHbHZiaUFxUFNBdE1UdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjbVZ6ZEdGeWRDZ3BJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWxiR0Z3YzJWa0lEMGdLSFJvYVhNdWNHeGhlVVJwY21WamRHbHZiaUE5UFQwZ01Ta2dQeUF3SURvZ2RHaHBjeTVrZFhKaGRHbHZianRjYmlBZ0lDQWdJQ0FnZEdocGN5NXpkR0Z5ZEdWa0lEMGdZM1Z5Y21WdWRGUnBiV1VvS1R0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2MyVmxheWh3Y205bmNtVnpjeWtnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbk5sWld0VWFXMWxLSFJvYVhNdVpIVnlZWFJwYjI0Z0tpQndjbTluY21WemN5azdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQWdJSDFjYmx4dUlDQWdJSE5sWld0VWFXMWxLR1ZzWVhCelpXUXBJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tDRjBhR2x6TG1selFXTjBhWFpsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtOXVZMlVvS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWFYTlRZM0oxWW1KcGJtY2dQU0IwY25WbE8xeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NWxiR0Z3YzJWa0lEMGdaV3hoY0hObFpEdGNibHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3p0Y2JpQWdJQ0I5WEc1OVhHNWNibFIzWldWdUxuQnliM1J2ZEhsd1pTNWtaV1poZFd4MFZtRnNkV1ZRY205d0lEMGdKM1J2Snp0Y2JsUjNaV1Z1TG5CeWIzUnZkSGx3WlM1a1pXWmhkV3gwVm1Gc2RXVWdQU0JCWTNScGIyNHVaWGgwWlc1a1JHVm1ZWFZzZEZaaGJIVmxLSHRjYmlBZ0lDQmtaV3hoZVRvZ01DeGNiaUFnSUNCa2RYSmhkR2x2YmpvZ016QXdMRnh1SUNBZ0lHVmhjMlU2SUdWaGMybHVaeTVsWVhObFQzVjBMRnh1SUNBZ0lHVnNZWEJ6WldRNklEQXNYRzRnSUNBZ1puSnZiVG9nTUN4Y2JpQWdJQ0J6ZEdWd2N6b2dNQ3hjYmlBZ0lDQjBiem9nTUN4Y2JpQWdJQ0J5YjNWdVpEb2dabUZzYzJWY2JuMHBPMXh1VkhkbFpXNHVjSEp2ZEc5MGVYQmxMbVJsWm1GMWJIUlFjbTl3Y3lBOUlFRmpkR2x2Ymk1bGVIUmxibVJFWldaaGRXeDBVSEp2Y0hNb2UxeHVJQ0FnSUdKc1pXNWtPaUIwY25WbExGeHVJQ0FnSUdScGJHRjBaVG9nTVN4Y2JpQWdJQ0JzYjI5d09pQXdMRnh1SUNBZ0lIbHZlVzg2SURBc1hHNGdJQ0FnWm14cGNEb2dNQ3hjYmlBZ0lDQnNiMjl3UTI5MWJuUTZJREFzWEc0Z0lDQWdlVzk1YjBOdmRXNTBPaUF3TEZ4dUlDQWdJR1pzYVhCRGIzVnVkRG9nTUN4Y2JpQWdJQ0J3YkdGNVJHbHlaV04wYVc5dU9pQXhMRnh1SUNBZ0lHbHpVMk55ZFdKaWFXNW5PaUJtWVd4elpTeGNiaUFnSUNCbGJtUmxaRG9nWm1Gc2MyVXNYRzRnSUNBZ1pXeGhjSE5sWkRvZ01GeHVmU2s3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUZSM1pXVnVPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9Ud2Vlbi5qc1xuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9BY3Rpb24yID0gcmVxdWlyZSgnLi9BY3Rpb24nKTtcblxudmFyIF9BY3Rpb24zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQWN0aW9uMik7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgUGh5c2ljcyA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gICAgX2luaGVyaXRzKFBoeXNpY3MsIF9BY3Rpb24pO1xuXG4gICAgZnVuY3Rpb24gUGh5c2ljcygpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBoeXNpY3MpO1xuXG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5jYWxsLmFwcGx5KF9BY3Rpb24sIFt0aGlzXS5jb25jYXQoYXJncykpKTtcblxuICAgICAgICBfdGhpcy5pbmFjdGl2ZUZyYW1lcyA9IDA7XG4gICAgICAgIF90aGlzLmNhbGN1bGF0ZXNWZWxvY2l0eSA9IHRydWU7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBQaHlzaWNzLnByb3RvdHlwZS5vblVwZGF0ZSA9IGZ1bmN0aW9uIG9uVXBkYXRlKHBoeXNpY3MsIGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gZmFsc2U7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gdGhpcy52YWx1ZUtleXNbaV07XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuICAgICAgICAgICAgdmFyIHByZXZpb3VzVmFsdWUgPSB2YWx1ZS5wcmV2O1xuXG4gICAgICAgICAgICAvLyBBcHBseSBhY2NlbGVyYXRpb25cbiAgICAgICAgICAgIHZhbHVlLnZlbG9jaXR5ICs9ICgwLCBfY2FsYy5zcGVlZFBlckZyYW1lKSh2YWx1ZS5hY2NlbGVyYXRpb24sIGVsYXBzZWQpO1xuXG4gICAgICAgICAgICAvLyBBcHBseSBmcmljdGlvblxuICAgICAgICAgICAgdmFsdWUudmVsb2NpdHkgKj0gTWF0aC5wb3coMSAtIHZhbHVlLmZyaWN0aW9uLCBlbGFwc2VkIC8gMTAwKTtcblxuICAgICAgICAgICAgLy8gQXBwbHkgc3ByaW5nXG4gICAgICAgICAgICBpZiAodmFsdWUuc3ByaW5nICYmICgwLCBfdXRpbHMuaXNOdW0pKHZhbHVlLnRvKSkge1xuICAgICAgICAgICAgICAgIHZhciBkaXN0YW5jZVRvVGFyZ2V0ID0gdmFsdWUudG8gLSB2YWx1ZS5jdXJyZW50O1xuICAgICAgICAgICAgICAgIHZhbHVlLnZlbG9jaXR5ICs9IGRpc3RhbmNlVG9UYXJnZXQgKiAoMCwgX2NhbGMuc3BlZWRQZXJGcmFtZSkodmFsdWUuc3ByaW5nLCBlbGFwc2VkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQXBwbHkgbGF0ZXN0IHZlbG9jaXR5XG4gICAgICAgICAgICB2YWx1ZS5jdXJyZW50ICs9ICgwLCBfY2FsYy5zcGVlZFBlckZyYW1lKSh2YWx1ZS52ZWxvY2l0eSwgZWxhcHNlZCk7XG5cbiAgICAgICAgICAgIC8vIERldGVjdCBib3VuY2VcbiAgICAgICAgICAgIGlmICh2YWx1ZS5taW4gIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS5jdXJyZW50IDwgdmFsdWUubWluIHx8IHZhbHVlLm1heCAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLmN1cnJlbnQgPiB2YWx1ZS5tYXgpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS52ZWxvY2l0eSAqPSAtdmFsdWUuYm91bmNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDaGVjayBpZiB2YWx1ZSBoYXMgY2hhbmdlZFxuICAgICAgICAgICAgaWYgKHZhbHVlLmN1cnJlbnQgIT09IHByZXZpb3VzVmFsdWUgfHwgTWF0aC5hYnModmFsdWUudmVsb2NpdHkpID49IHZhbHVlLnN0b3BTcGVlZCB8fCB2YWx1ZS5zcHJpbmcgJiYgdmFsdWUuY3VycmVudCAhPT0gdmFsdWUudG8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIFBoeXNpY3MucHJvdG90eXBlLm9uRnJhbWVFbmQgPSBmdW5jdGlvbiBvbkZyYW1lRW5kKCkge1xuICAgICAgICBpZiAodGhpcy5tYXhJbmFjdGl2ZUZyYW1lcyAhPT0gSW5maW5pdHkpIHtcbiAgICAgICAgICAgIHRoaXMuaW5hY3RpdmVGcmFtZXMgPSB0aGlzLmhhc0NoYW5nZWQgPyAxIDogdGhpcy5pbmFjdGl2ZUZyYW1lcyArIDE7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmluYWN0aXZlRnJhbWVzID49IHRoaXMubWF4SW5hY3RpdmVGcmFtZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIFBoeXNpY3M7XG59KF9BY3Rpb24zLmRlZmF1bHQpO1xuXG5QaHlzaWNzLnByb3RvdHlwZS5kZWZhdWx0VmFsdWVQcm9wID0gJ3ZlbG9jaXR5JztcblBoeXNpY3MucHJvdG90eXBlLmRlZmF1bHRWYWx1ZSA9IF9BY3Rpb24zLmRlZmF1bHQuZXh0ZW5kRGVmYXVsdFZhbHVlKHtcbiAgICBhY2NlbGVyYXRpb246IDAsIC8vIFtudW1iZXJdOiBBY2NlbGVyYXRpb24gdG8gYXBwbHkgdG8gdmFsdWUsIGluIHVuaXRzIHBlciBzZWNvbmRcbiAgICBib3VuY2U6IDAsIC8vIFtudW1iZXJdOiBGYWN0b3IgdG8gbXVsdGlwbHkgdmVsb2NpdHkgYnkgb24gYm91bmNlXG4gICAgc3ByaW5nOiAwLCAvLyBbbnVtYmVyXTogU3ByaW5nIHN0cmVuZ3RoIGR1cmluZyAnc3RyaW5nJ1xuICAgIHN0b3BTcGVlZDogMC4wMDEsIC8vIFtudW1iZXJdOiBTdG9wIHNpbXVsYXRpb24gdW5kZXIgdGhpcyBzcGVlZFxuICAgIGZyaWN0aW9uOiAwIC8vIFtudW1iZXJdOiBGcmljdGlvbiB0byBhcHBseSBwZXIgZnJhbWUsIDAtMVxufSk7XG5QaHlzaWNzLnByb3RvdHlwZS5kZWZhdWx0UHJvcHMgPSBfQWN0aW9uMy5kZWZhdWx0LmV4dGVuZERlZmF1bHRQcm9wcyh7XG4gICAgbWF4SW5hY3RpdmVGcmFtZXM6IDNcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBQaHlzaWNzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMUJvZVhOcFkzTXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenM3T3pzN096czdPenM3U1VGSlRUczdPMEZCUTBZc1lVRkVSU3hQUVVOR0xFZEJRWEZDT3poQ1FVUnVRaXhUUVVOdFFqczdNRU5CUVU0N08xTkJRVTA3TzNGRVFVTnFRaXd3UTBGQlV5eExRVUZVTEVkQlJHbENPenRCUVVWcVFpeGpRVUZMTEdOQlFVd3NSMEZCYzBJc1EwRkJkRUlzUTBGR2FVSTdRVUZIYWtJc1kwRkJTeXhyUWtGQlRDeEhRVUV3UWl4SlFVRXhRaXhEUVVocFFqczdTMEZCY2tJN08wRkJSRVVzYzBKQlQwWXNOa0pCUVZNc1UwRkJVeXhaUVVGWkxGTkJRVk03UVVGRGJrTXNZVUZCU3l4VlFVRk1MRWRCUVd0Q0xFdEJRV3hDTEVOQlJHMURPenRCUVVkdVF5eGhRVUZMTEVsQlFVa3NTVUZCU1N4RFFVRktMRVZCUVU4c1NVRkJTU3hMUVVGTExGbEJRVXdzUlVGQmJVSXNSMEZCZGtNc1JVRkJORU03UVVGRGVFTXNaMEpCUVUwc1RVRkJUU3hMUVVGTExGTkJRVXdzUTBGQlpTeERRVUZtTEVOQlFVNHNRMEZFYTBNN1FVRkZlRU1zWjBKQlFVMHNVVUZCVVN4TFFVRkxMRTFCUVV3c1EwRkJXU3hIUVVGYUxFTkJRVklzUTBGR2EwTTdRVUZIZUVNc1owSkJRVTBzWjBKQlFXZENMRTFCUVUwc1NVRkJUanM3TzBGQlNHdENMR2xDUVUxNFF5eERRVUZOTEZGQlFVNHNTVUZCYTBJc2VVSkJRV01zVFVGQlRTeFpRVUZPTEVWQlFXOUNMRTlCUVd4RExFTkJRV3hDT3pzN1FVRk9kME1zYVVKQlUzaERMRU5CUVUwc1VVRkJUaXhoUVVGdFFpeEpRVUZKTEUxQlFVMHNVVUZCVGl4RlFVRnZRaXhWUVVGVkxFZEJRVllzUTBGQk0wTTdPenRCUVZSM1F5eG5Ra0ZaY0VNc1RVRkJUU3hOUVVGT0xFbEJRV2RDTEd0Q1FVRk5MRTFCUVUwc1JVRkJUaXhEUVVGMFFpeEZRVUZwUXp0QlFVTnFReXh2UWtGQlRTeHRRa0ZCYlVJc1RVRkJUU3hGUVVGT0xFZEJRVmNzVFVGQlRTeFBRVUZPTEVOQlJFZzdRVUZGYWtNc2MwSkJRVTBzVVVGQlRpeEpRVUZyUWl4dFFrRkJiVUlzZVVKQlFXTXNUVUZCVFN4TlFVRk9MRVZCUVdNc1QwRkJOVUlzUTBGQmJrSXNRMEZHWlR0aFFVRnlRenM3TzBGQlduZERMR2xDUVd0Q2VFTXNRMEZCVFN4UFFVRk9MRWxCUVdsQ0xIbENRVUZqTEUxQlFVMHNVVUZCVGl4RlFVRm5RaXhQUVVFNVFpeERRVUZxUWpzN08wRkJiRUozUXl4blFrRnhRbkJETEV0QlFVTXNRMEZCVFN4SFFVRk9MRXRCUVdNc1UwRkJaQ3hKUVVFeVFpeE5RVUZOTEU5QlFVNHNSMEZCWjBJc1RVRkJUU3hIUVVGT0xFbEJRV1VzVFVGQlRTeEhRVUZPTEV0QlFXTXNVMEZCWkN4SlFVRXlRaXhOUVVGTkxFOUJRVTRzUjBGQlowSXNUVUZCVFN4SFFVRk9MRVZCUVZrN1FVRkRiRWdzYzBKQlFVMHNVVUZCVGl4SlFVRnJRaXhEUVVGRkxFMUJRVTBzVFVGQlRpeERRVVE0Ump0aFFVRjBTRHM3TzBGQmNrSjNReXhuUWtFd1FuQkRMRTFCUVUwc1QwRkJUaXhMUVVGclFpeGhRVUZzUWl4SlFVRnRReXhMUVVGTExFZEJRVXdzUTBGQlV5eE5RVUZOTEZGQlFVNHNRMEZCVkN4SlFVRTBRaXhOUVVGTkxGTkJRVTRzU1VGQmIwSXNUVUZCVFN4TlFVRk9MRWxCUVdkQ0xFMUJRVTBzVDBGQlRpeExRVUZyUWl4TlFVRk5MRVZCUVU0c1JVRkJWenRCUVVOb1NTeHhRa0ZCU3l4VlFVRk1MRWRCUVd0Q0xFbEJRV3hDTEVOQlJHZEpPMkZCUVhCSk8xTkJNVUpLT3pzN1FVRldSaXh6UWtFd1EwWXNiVU5CUVdFN1FVRkRWQ3haUVVGSkxFdEJRVXNzYVVKQlFVd3NTMEZCTWtJc1VVRkJNMElzUlVGQmNVTTdRVUZEY2tNc2FVSkJRVXNzWTBGQlRDeEhRVUZ6UWl4TFFVRkxMRlZCUVV3c1IwRkJhMElzUTBGQmJFSXNSMEZCYzBJc1MwRkJTeXhqUVVGTUxFZEJRWE5DTEVOQlFYUkNMRU5CUkZBN08wRkJSM0pETEdkQ1FVRkpMRXRCUVVzc1kwRkJUQ3hKUVVGMVFpeExRVUZMTEdsQ1FVRk1MRVZCUVhkQ08wRkJReTlETEhGQ1FVRkxMRkZCUVV3c1IwRkVLME03WVVGQmJrUTdVMEZJU2pzN08xZEJNME5HT3pzN1FVRnhSRTRzVVVGQlVTeFRRVUZTTEVOQlFXdENMR2RDUVVGc1FpeEhRVUZ4UXl4VlFVRnlRenRCUVVOQkxGRkJRVkVzVTBGQlVpeERRVUZyUWl4WlFVRnNRaXhIUVVGcFF5eHBRa0ZCVHl4clFrRkJVQ3hEUVVFd1FqdEJRVU4yUkN4clFrRkJZeXhEUVVGa08wRkJRMEVzV1VGQlVTeERRVUZTTzBGQlEwRXNXVUZCVVN4RFFVRlNPMEZCUTBFc1pVRkJWeXhMUVVGWU8wRkJRMEVzWTBGQlZTeERRVUZXTzBGQlRIVkVMRU5CUVRGQ0xFTkJRV3BETzBGQlQwRXNVVUZCVVN4VFFVRlNMRU5CUVd0Q0xGbEJRV3hDTEVkQlFXbERMR2xDUVVGUExHdENRVUZRTEVOQlFUQkNPMEZCUTNaRUxIVkNRVUZ0UWl4RFFVRnVRanREUVVRMlFpeERRVUZxUXpzN2EwSkJTV1VpTENKbWFXeGxJam9pVUdoNWMybGpjeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnUVdOMGFXOXVJR1p5YjIwZ0p5NHZRV04wYVc5dUp6dGNibWx0Y0c5eWRDQjdJSE53WldWa1VHVnlSbkpoYldVZ2ZTQm1jbTl0SUNjdUxpOXBibU12WTJGc1l5YzdYRzVwYlhCdmNuUWdleUJwYzA1MWJTQjlJR1p5YjIwZ0p5NHVMMmx1WXk5MWRHbHNjeWM3WEc1Y2JtTnNZWE56SUZCb2VYTnBZM01nWlhoMFpXNWtjeUJCWTNScGIyNGdlMXh1SUNBZ0lHTnZibk4wY25WamRHOXlLQzR1TG1GeVozTXBJSHRjYmlBZ0lDQWdJQ0FnYzNWd1pYSW9MaTR1WVhKbmN5azdYRzRnSUNBZ0lDQWdJSFJvYVhNdWFXNWhZM1JwZG1WR2NtRnRaWE1nUFNBd08xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1OaGJHTjFiR0YwWlhOV1pXeHZZMmwwZVNBOUlIUnlkV1U3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdiMjVWY0dSaGRHVW9jR2g1YzJsamN5d2dabkpoYldWVGRHRnRjQ3dnWld4aGNITmxaQ2tnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbWhoYzBOb1lXNW5aV1FnUFNCbVlXeHpaVHRjYmx4dUlDQWdJQ0FnSUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElIUm9hWE11Ym5WdFZtRnNkV1ZMWlhsek95QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElHdGxlU0E5SUhSb2FYTXVkbUZzZFdWTFpYbHpXMmxkTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2RtRnNkV1VnUFNCMGFHbHpMblpoYkhWbGMxdHJaWGxkTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2NISmxkbWx2ZFhOV1lXeDFaU0E5SUhaaGJIVmxMbkJ5WlhZN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUM4dklFRndjR3g1SUdGalkyVnNaWEpoZEdsdmJseHVJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVXVkbVZzYjJOcGRIa2dLejBnYzNCbFpXUlFaWEpHY21GdFpTaDJZV3gxWlM1aFkyTmxiR1Z5WVhScGIyNHNJR1ZzWVhCelpXUXBPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJCY0hCc2VTQm1jbWxqZEdsdmJseHVJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVXVkbVZzYjJOcGRIa2dLajBnS0RFZ0xTQjJZV3gxWlM1bWNtbGpkR2x2YmlrZ0tpb2dLR1ZzWVhCelpXUWdMeUF4TURBcE8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QkJjSEJzZVNCemNISnBibWRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2gyWVd4MVpTNXpjSEpwYm1jZ0ppWWdhWE5PZFcwb2RtRnNkV1V1ZEc4cEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ1pHbHpkR0Z1WTJWVWIxUmhjbWRsZENBOUlIWmhiSFZsTG5SdklDMGdkbUZzZFdVdVkzVnljbVZ1ZER0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMllXeDFaUzUyWld4dlkybDBlU0FyUFNCa2FYTjBZVzVqWlZSdlZHRnlaMlYwSUNvZ2MzQmxaV1JRWlhKR2NtRnRaU2gyWVd4MVpTNXpjSEpwYm1jc0lHVnNZWEJ6WldRcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCQmNIQnNlU0JzWVhSbGMzUWdkbVZzYjJOcGRIbGNiaUFnSUNBZ0lDQWdJQ0FnSUhaaGJIVmxMbU4xY25KbGJuUWdLejBnYzNCbFpXUlFaWEpHY21GdFpTaDJZV3gxWlM1MlpXeHZZMmwwZVN3Z1pXeGhjSE5sWkNrN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUM4dklFUmxkR1ZqZENCaWIzVnVZMlZjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2dvZG1Gc2RXVXViV2x1SUNFOVBTQjFibVJsWm1sdVpXUWdKaVlnZG1Gc2RXVXVZM1Z5Y21WdWRDQThJSFpoYkhWbExtMXBiaWtnZkh3Z0tIWmhiSFZsTG0xaGVDQWhQVDBnZFc1a1pXWnBibVZrSUNZbUlIWmhiSFZsTG1OMWNuSmxiblFnUGlCMllXeDFaUzV0WVhncEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZzZFdVdWRtVnNiMk5wZEhrZ0tqMGdMU0IyWVd4MVpTNWliM1Z1WTJVN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdJQ0FnSUM4dklFTm9aV05ySUdsbUlIWmhiSFZsSUdoaGN5QmphR0Z1WjJWa1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RtRnNkV1V1WTNWeWNtVnVkQ0FoUFQwZ2NISmxkbWx2ZFhOV1lXeDFaU0I4ZkNCTllYUm9MbUZpY3loMllXeDFaUzUyWld4dlkybDBlU2tnUGowZ2RtRnNkV1V1YzNSdmNGTndaV1ZrSUh4OElDaDJZV3gxWlM1emNISnBibWNnSmlZZ2RtRnNkV1V1WTNWeWNtVnVkQ0FoUFQwZ2RtRnNkV1V1ZEc4cEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1b1lYTkRhR0Z1WjJWa0lEMGdkSEoxWlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJRzl1Um5KaGJXVkZibVFvS1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxtMWhlRWx1WVdOMGFYWmxSbkpoYldWeklDRTlQU0JKYm1acGJtbDBlU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1cGJtRmpkR2wyWlVaeVlXMWxjeUE5SUhSb2FYTXVhR0Z6UTJoaGJtZGxaQ0EvSURFZ09pQjBhR2x6TG1sdVlXTjBhWFpsUm5KaGJXVnpJQ3NnTVR0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIUm9hWE11YVc1aFkzUnBkbVZHY21GdFpYTWdQajBnZEdocGN5NXRZWGhKYm1GamRHbDJaVVp5WVcxbGN5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVkyOXRjR3hsZEdVb0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JuMWNibHh1VUdoNWMybGpjeTV3Y205MGIzUjVjR1V1WkdWbVlYVnNkRlpoYkhWbFVISnZjQ0E5SUNkMlpXeHZZMmwwZVNjN1hHNVFhSGx6YVdOekxuQnliM1J2ZEhsd1pTNWtaV1poZFd4MFZtRnNkV1VnUFNCQlkzUnBiMjR1WlhoMFpXNWtSR1ZtWVhWc2RGWmhiSFZsS0h0Y2JpQWdJQ0JoWTJObGJHVnlZWFJwYjI0NklEQXNJQzh2SUZ0dWRXMWlaWEpkT2lCQlkyTmxiR1Z5WVhScGIyNGdkRzhnWVhCd2JIa2dkRzhnZG1Gc2RXVXNJR2x1SUhWdWFYUnpJSEJsY2lCelpXTnZibVJjYmlBZ0lDQmliM1Z1WTJVNklEQXNJQzh2SUZ0dWRXMWlaWEpkT2lCR1lXTjBiM0lnZEc4Z2JYVnNkR2x3YkhrZ2RtVnNiMk5wZEhrZ1lua2diMjRnWW05MWJtTmxYRzRnSUNBZ2MzQnlhVzVuT2lBd0xDQXZMeUJiYm5WdFltVnlYVG9nVTNCeWFXNW5JSE4wY21WdVozUm9JR1IxY21sdVp5QW5jM1J5YVc1bkoxeHVJQ0FnSUhOMGIzQlRjR1ZsWkRvZ01DNHdNREVzSUM4dklGdHVkVzFpWlhKZE9pQlRkRzl3SUhOcGJYVnNZWFJwYjI0Z2RXNWtaWElnZEdocGN5QnpjR1ZsWkZ4dUlDQWdJR1p5YVdOMGFXOXVPaUF3SUM4dklGdHVkVzFpWlhKZE9pQkdjbWxqZEdsdmJpQjBieUJoY0hCc2VTQndaWElnWm5KaGJXVXNJREF0TVZ4dWZTazdYRzVRYUhsemFXTnpMbkJ5YjNSdmRIbHdaUzVrWldaaGRXeDBVSEp2Y0hNZ1BTQkJZM1JwYjI0dVpYaDBaVzVrUkdWbVlYVnNkRkJ5YjNCektIdGNiaUFnSUNCdFlYaEpibUZqZEdsMlpVWnlZVzFsY3pvZ00xeHVmU2s3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUZCb2VYTnBZM003WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvUGh5c2ljcy5qc1xuICoqIG1vZHVsZSBpZCA9IDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9BY3Rpb24yID0gcmVxdWlyZSgnLi9BY3Rpb24nKTtcblxudmFyIF9BY3Rpb24zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQWN0aW9uMik7XG5cbnZhciBfUG9pbnRlciA9IHJlcXVpcmUoJy4uL2lucHV0L1BvaW50ZXInKTtcblxudmFyIF9Qb2ludGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BvaW50ZXIpO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8qXG4gICAgU2NyYXBlIHgveSBjb29yZGluYXRlcyBmcm9tIHByb3ZpZGVkIGV2ZW50XG5cbiAgICBAcGFyYW0gW2V2ZW50XVxuICAgIEByZXR1cm4gW29iamVjdF1cbiovXG52YXIgbW91c2VFdmVudFRvUG9pbnQgPSBmdW5jdGlvbiAoZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHg6IGUucGFnZVgsXG4gICAgICAgIHk6IGUucGFnZVlcbiAgICB9O1xufTtcblxudmFyIHRvdWNoRXZlbnRUb1BvaW50ID0gZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgY2hhbmdlZFRvdWNoZXMgPSBfcmVmLmNoYW5nZWRUb3VjaGVzO1xuICAgIHJldHVybiB7XG4gICAgICAgIHg6IGNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFgsXG4gICAgICAgIHk6IGNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFlcbiAgICB9O1xufTtcblxudmFyIGNyZWF0ZVBvaW50ZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgIHJldHVybiBlLnRvdWNoZXMgPyBuZXcgX1BvaW50ZXIyLmRlZmF1bHQodG91Y2hFdmVudFRvUG9pbnQoZSksICd0b3VjaG1vdmUnLCB0b3VjaEV2ZW50VG9Qb2ludCkgOiBuZXcgX1BvaW50ZXIyLmRlZmF1bHQobW91c2VFdmVudFRvUG9pbnQoZSksICdtb3VzZW1vdmUnLCBtb3VzZUV2ZW50VG9Qb2ludCk7XG59O1xuXG52YXIgZ2V0QWN0dWFsRXZlbnQgPSBmdW5jdGlvbiAoZSkge1xuICAgIHJldHVybiBlLm9yaWdpbmFsRXZlbnQgfHwgZTtcbn07XG5cbnZhciBUcmFjayA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gICAgX2luaGVyaXRzKFRyYWNrLCBfQWN0aW9uKTtcblxuICAgIGZ1bmN0aW9uIFRyYWNrKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHJhY2spO1xuXG4gICAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgIFRyYWNrLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uIHN0YXJ0KGlucHV0KSB7XG4gICAgICAgIF9BY3Rpb24ucHJvdG90eXBlLnN0YXJ0LmNhbGwodGhpcyk7XG5cbiAgICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0ID0gaW5wdXQuc3RhdGUgPyBpbnB1dCA6IGNyZWF0ZVBvaW50ZXIoZ2V0QWN0dWFsRXZlbnQoaW5wdXQpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW5wdXRPZmZzZXQgPSB7fTtcbiAgICAgICAgdGhpcy5pbnB1dE9yaWdpbiA9IF9leHRlbmRzKHt9LCB0aGlzLmlucHV0LnN0YXRlKTtcbiAgICAgICAgdGhpcy5pbnB1dC5zdGFydCgpO1xuICAgIH07XG5cbiAgICBUcmFjay5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAgIF9BY3Rpb24ucHJvdG90eXBlLnN0b3AuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5pbnB1dC5zdG9wKCk7XG4gICAgfTtcblxuICAgIFRyYWNrLnByb3RvdHlwZS5vblVwZGF0ZSA9IGZ1bmN0aW9uIG9uVXBkYXRlKHRyYWNrLCBmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgICAgIHRoaXMuaW5wdXRPZmZzZXQgPSAoMCwgX2NhbGMub2Zmc2V0KSh0aGlzLmlucHV0T3JpZ2luLCB0aGlzLmlucHV0LnN0YXRlKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSB0aGlzLnZhbHVlS2V5c1tpXTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuaW5wdXRPZmZzZXQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG5cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUuZGlyZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSB0aGlzLmlucHV0LnN0YXRlW3ZhbHVlLndhdGNoIHx8IGtleV07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IHZhbHVlLmZyb20gKyB0aGlzLmlucHV0T2Zmc2V0W3ZhbHVlLndhdGNoIHx8IGtleV07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gU21vb3RoIHZhbHVlIGlmIHdlIGhhdmUgc21vb3RoaW5nXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLnNtb290aCkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gKDAsIF9jYWxjLnNtb290aCkodmFsdWUuY3VycmVudCwgdmFsdWUucHJldiwgZWxhcHNlZCwgdmFsdWUuc21vb3RoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIFRyYWNrO1xufShfQWN0aW9uMy5kZWZhdWx0KTtcblxuVHJhY2sucHJvdG90eXBlLmRlZmF1bHRWYWx1ZVByb3AgPSAnd2F0Y2gnO1xuVHJhY2sucHJvdG90eXBlLmRlZmF1bHRWYWx1ZSA9IF9BY3Rpb24zLmRlZmF1bHQuZXh0ZW5kRGVmYXVsdFZhbHVlKHtcbiAgICBkaXJlY3Q6IGZhbHNlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gVHJhY2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwxUnlZV05yTG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096dEJRVlZCTEVsQlFVMHNiMEpCUVc5Q0xGVkJRVU1zUTBGQlJEdFhRVUZSTzBGQlF6bENMRmRCUVVjc1JVRkJSU3hMUVVGR08wRkJRMGdzVjBGQlJ5eEZRVUZGTEV0QlFVWTdPME5CUm0xQ096dEJRVXN4UWl4SlFVRk5MRzlDUVVGdlFqdFJRVUZITzFkQlFYTkNPMEZCUXk5RExGZEJRVWNzWlVGQlpTeERRVUZtTEVWQlFXdENMRTlCUVd4Q08wRkJRMGdzVjBGQlJ5eGxRVUZsTEVOQlFXWXNSVUZCYTBJc1QwRkJiRUk3TzBOQlJtMUNPenRCUVVzeFFpeEpRVUZOTEdkQ1FVRm5RaXhWUVVGRExFTkJRVVE3VjBGQlR5eEZRVUZGTEU5QlFVWXNSMEZEZWtJc2MwSkJRVmtzYTBKQlFXdENMRU5CUVd4Q0xFTkJRVm9zUlVGQmEwTXNWMEZCYkVNc1JVRkJLME1zYVVKQlFTOURMRU5CUkhsQ0xFZEJSWHBDTEhOQ1FVRlpMR3RDUVVGclFpeERRVUZzUWl4RFFVRmFMRVZCUVd0RExGZEJRV3hETEVWQlFTdERMR2xDUVVFdlF5eERRVVo1UWp0RFFVRlFPenRCUVVsMFFpeEpRVUZOTEdsQ1FVRnBRaXhWUVVGRExFTkJRVVE3VjBGQlR5eEZRVUZGTEdGQlFVWXNTVUZCYlVJc1EwRkJia0k3UTBGQlVEczdTVUZGYWtJN096czdPenM3T3p0dlFrRkRSaXgxUWtGQlRTeFBRVUZQTzBGQlExUXNNRUpCUVUwc1MwRkJUaXhaUVVSVE96dEJRVWRVTEZsQlFVa3NTMEZCU2l4RlFVRlhPMEZCUTFBc2FVSkJRVXNzUzBGQlRDeEhRVUZoTEUxQlFVMHNTMEZCVGl4SFFVRmpMRXRCUVdRc1IwRkJjMElzWTBGQll5eGxRVUZsTEV0QlFXWXNRMEZCWkN4RFFVRjBRaXhEUVVST08xTkJRVmc3TzBGQlNVRXNZVUZCU3l4WFFVRk1MRWRCUVcxQ0xFVkJRVzVDTEVOQlVGTTdRVUZSVkN4aFFVRkxMRmRCUVV3c1owSkJRWGRDTEV0QlFVc3NTMEZCVEN4RFFVRlhMRXRCUVZnc1EwRkJlRUlzUTBGU1V6dEJRVk5VTEdGQlFVc3NTMEZCVEN4RFFVRlhMRXRCUVZnc1IwRlVVenM3TzBGQlJGZ3NiMEpCWVVZc2RVSkJRVTg3UVVGRFNDd3dRa0ZCVFN4SlFVRk9MRmxCUkVjN1FVRkZTQ3hoUVVGTExFdEJRVXdzUTBGQlZ5eEpRVUZZTEVkQlJrYzdPenRCUVdKTUxHOUNRV3RDUml3MlFrRkJVeXhQUVVGUExGbEJRVmtzVTBGQlV6dEJRVU5xUXl4aFFVRkxMRmRCUVV3c1IwRkJiVUlzYTBKQlFVOHNTMEZCU3l4WFFVRk1MRVZCUVd0Q0xFdEJRVXNzUzBGQlRDeERRVUZYTEV0QlFWZ3NRMEZCTlVNc1EwRkVhVU03TzBGQlIycERMR0ZCUVVzc1NVRkJTU3hKUVVGSkxFTkJRVW9zUlVGQlR5eEpRVUZKTEV0QlFVc3NXVUZCVEN4RlFVRnRRaXhIUVVGMlF5eEZRVUUwUXp0QlFVTjRReXhuUWtGQlRTeE5RVUZOTEV0QlFVc3NVMEZCVEN4RFFVRmxMRU5CUVdZc1EwRkJUaXhEUVVSclF6czdRVUZIZUVNc1owSkJRVWtzUzBGQlN5eFhRVUZNTEVOQlFXbENMR05CUVdwQ0xFTkJRV2RETEVkQlFXaERMRU5CUVVvc1JVRkJNRU03UVVGRGRFTXNiMEpCUVUwc1VVRkJVU3hMUVVGTExFMUJRVXdzUTBGQldTeEhRVUZhTEVOQlFWSXNRMEZFWjBNN08wRkJSM1JETEc5Q1FVRkpMRTFCUVUwc1RVRkJUaXhGUVVGak8wRkJRMlFzTUVKQlFVMHNUMEZCVGl4SFFVRm5RaXhMUVVGTExFdEJRVXdzUTBGQlZ5eExRVUZZTEVOQlFXbENMRTFCUVUwc1MwRkJUaXhKUVVGbExFZEJRV1lzUTBGQmFrTXNRMEZFWXp0cFFrRkJiRUlzVFVGRlR6dEJRVU5JTERCQ1FVRk5MRTlCUVU0c1IwRkJaMElzVFVGQlRTeEpRVUZPTEVkQlFXRXNTMEZCU3l4WFFVRk1MRU5CUVdsQ0xFMUJRVTBzUzBGQlRpeEpRVUZsTEVkQlFXWXNRMEZCT1VJc1EwRkVZanRwUWtGR1VEczdPMEZCU0hORExHOUNRVlZzUXl4TlFVRk5MRTFCUVU0c1JVRkJZenRCUVVOa0xEQkNRVUZOTEU5QlFVNHNSMEZCWjBJc2EwSkJRVThzVFVGQlRTeFBRVUZPTEVWQlFXVXNUVUZCVFN4SlFVRk9MRVZCUVZrc1QwRkJiRU1zUlVGQk1rTXNUVUZCVFN4TlFVRk9MRU5CUVRORUxFTkJSR003YVVKQlFXeENPMkZCVmtvN1UwRklTanM3TzFkQmNrSkdPenM3UVVFd1EwNHNUVUZCVFN4VFFVRk9MRU5CUVdkQ0xHZENRVUZvUWl4SFFVRnRReXhQUVVGdVF6dEJRVU5CTEUxQlFVMHNVMEZCVGl4RFFVRm5RaXhaUVVGb1FpeEhRVUVyUWl4cFFrRkJUeXhyUWtGQlVDeERRVUV3UWp0QlFVTnlSQ3haUVVGUkxFdEJRVkk3UTBGRU1rSXNRMEZCTDBJN08ydENRVWxsSWl3aVptbHNaU0k2SWxSeVlXTnJMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwTDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0JCWTNScGIyNGdabkp2YlNBbkxpOUJZM1JwYjI0bk8xeHVhVzF3YjNKMElGQnZhVzUwWlhJZ1puSnZiU0FuTGk0dmFXNXdkWFF2VUc5cGJuUmxjaWM3WEc1cGJYQnZjblFnZXlCemJXOXZkR2dzSUc5bVpuTmxkQ0I5SUdaeWIyMGdKeTR1TDJsdVl5OWpZV3hqSnp0Y2JseHVMeXBjYmlBZ0lDQlRZM0poY0dVZ2VDOTVJR052YjNKa2FXNWhkR1Z6SUdaeWIyMGdjSEp2ZG1sa1pXUWdaWFpsYm5SY2JseHVJQ0FnSUVCd1lYSmhiU0JiWlhabGJuUmRYRzRnSUNBZ1FISmxkSFZ5YmlCYmIySnFaV04wWFZ4dUtpOWNibU52Ym5OMElHMXZkWE5sUlhabGJuUlViMUJ2YVc1MElEMGdLR1VwSUQwK0lDaDdYRzRnSUNBZ2VEb2daUzV3WVdkbFdDeGNiaUFnSUNCNU9pQmxMbkJoWjJWWlhHNTlLVHRjYmx4dVkyOXVjM1FnZEc5MVkyaEZkbVZ1ZEZSdlVHOXBiblFnUFNBb2V5QmphR0Z1WjJWa1ZHOTFZMmhsY3lCOUtTQTlQaUFvZTF4dUlDQWdJSGc2SUdOb1lXNW5aV1JVYjNWamFHVnpXekJkTG1Oc2FXVnVkRmdzWEc0Z0lDQWdlVG9nWTJoaGJtZGxaRlJ2ZFdOb1pYTmJNRjB1WTJ4cFpXNTBXVnh1ZlNrN1hHNWNibU52Ym5OMElHTnlaV0YwWlZCdmFXNTBaWElnUFNBb1pTa2dQVDRnWlM1MGIzVmphR1Z6SUQ5Y2JpQWdJQ0J1WlhjZ1VHOXBiblJsY2loMGIzVmphRVYyWlc1MFZHOVFiMmx1ZENobEtTd2dKM1J2ZFdOb2JXOTJaU2NzSUhSdmRXTm9SWFpsYm5SVWIxQnZhVzUwS1NBNklGeHVJQ0FnSUc1bGR5QlFiMmx1ZEdWeUtHMXZkWE5sUlhabGJuUlViMUJ2YVc1MEtHVXBMQ0FuYlc5MWMyVnRiM1psSnl3Z2JXOTFjMlZGZG1WdWRGUnZVRzlwYm5RcE8xeHVYRzVqYjI1emRDQm5aWFJCWTNSMVlXeEZkbVZ1ZENBOUlDaGxLU0E5UGlCbExtOXlhV2RwYm1Gc1JYWmxiblFnZkh3Z1pUdGNibHh1WTJ4aGMzTWdWSEpoWTJzZ1pYaDBaVzVrY3lCQlkzUnBiMjRnZTF4dUlDQWdJSE4wWVhKMEtHbHVjSFYwS1NCN1hHNGdJQ0FnSUNBZ0lITjFjR1Z5TG5OMFlYSjBLQ2s3WEc1Y2JpQWdJQ0FnSUNBZ2FXWWdLR2x1Y0hWMEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbWx1Y0hWMElEMGdhVzV3ZFhRdWMzUmhkR1VnUHlCcGJuQjFkQ0E2SUdOeVpXRjBaVkJ2YVc1MFpYSW9aMlYwUVdOMGRXRnNSWFpsYm5Rb2FXNXdkWFFwS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdWFXNXdkWFJQWm1aelpYUWdQU0I3ZlR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVwYm5CMWRFOXlhV2RwYmlBOUlIc2dMaTR1ZEdocGN5NXBibkIxZEM1emRHRjBaU0I5TzF4dUlDQWdJQ0FnSUNCMGFHbHpMbWx1Y0hWMExuTjBZWEowS0NrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYzNSdmNDZ3BJSHRjYmlBZ0lDQWdJQ0FnYzNWd1pYSXVjM1J2Y0NncE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1sdWNIVjBMbk4wYjNBb0tUdGNiaUFnSUNCOVhHNWNiaUFnSUNCdmJsVndaR0YwWlNoMGNtRmpheXdnWm5KaGJXVlRkR0Z0Y0N3Z1pXeGhjSE5sWkNrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG1sdWNIVjBUMlptYzJWMElEMGdiMlptYzJWMEtIUm9hWE11YVc1d2RYUlBjbWxuYVc0c0lIUm9hWE11YVc1d2RYUXVjM1JoZEdVcE8xeHVYRzRnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnZEdocGN5NXVkVzFXWVd4MVpVdGxlWE03SUdrckt5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnYTJWNUlEMGdkR2hwY3k1MllXeDFaVXRsZVhOYmFWMDdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxtbHVjSFYwVDJabWMyVjBMbWhoYzA5M2JsQnliM0JsY25SNUtHdGxlU2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0IyWVd4MVpTQTlJSFJvYVhNdWRtRnNkV1Z6VzJ0bGVWMDdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RtRnNkV1V1WkdseVpXTjBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIWmhiSFZsTG1OMWNuSmxiblFnUFNCMGFHbHpMbWx1Y0hWMExuTjBZWFJsVzNaaGJIVmxMbmRoZEdOb0lIeDhJR3RsZVYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZzZFdVdVkzVnljbVZ1ZENBOUlIWmhiSFZsTG1aeWIyMGdLeUIwYUdsekxtbHVjSFYwVDJabWMyVjBXM1poYkhWbExuZGhkR05vSUh4OElHdGxlVjA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0x5OGdVMjF2YjNSb0lIWmhiSFZsSUdsbUlIZGxJR2hoZG1VZ2MyMXZiM1JvYVc1blhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFpoYkhWbExuTnRiMjkwYUNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IyWVd4MVpTNWpkWEp5Wlc1MElEMGdjMjF2YjNSb0tIWmhiSFZsTG1OMWNuSmxiblFzSUhaaGJIVmxMbkJ5WlhZc0lHVnNZWEJ6WldRc0lIWmhiSFZsTG5OdGIyOTBhQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVnh1ZlZ4dVhHNVVjbUZqYXk1d2NtOTBiM1I1Y0dVdVpHVm1ZWFZzZEZaaGJIVmxVSEp2Y0NBOUlDZDNZWFJqYUNjN1hHNVVjbUZqYXk1d2NtOTBiM1I1Y0dVdVpHVm1ZWFZzZEZaaGJIVmxJRDBnUVdOMGFXOXVMbVY0ZEdWdVpFUmxabUYxYkhSV1lXeDFaU2g3WEc0Z0lDQWdaR2x5WldOME9pQm1ZV3h6WlZ4dWZTazdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJRlJ5WVdOck8xeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL1RyYWNrLmpzXG4gKiogbW9kdWxlIGlkID0gNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2xvb3AgPSByZXF1aXJlKCcuL2xvb3AnKTtcblxudmFyIGxvb3AgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfbG9vcCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH0gLypcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmFzZSBUYXNrIGNsYXNzIGZvciBjcmVhdGluZyBhIHRhc2sgb24gdGhlIG1haW4gcmVuZGVyIGxvb3AuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cblxudmFyIFRhc2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVGFzayhwcm9wcykge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGFzayk7XG5cbiAgICAgICAgdGhpcy5pZCA9IGxvb3AuZ2V0VGFza0lkKCk7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICBpZiAodGhpcy5kZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLmRlZmF1bHRQcm9wcykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRlZmF1bHRQcm9wcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IHRoaXMuZGVmYXVsdFByb3BzW2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXQocHJvcHMpO1xuICAgIH1cblxuICAgIFRhc2sucHJvdG90eXBlLl9vbkFjdGl2YXRlID0gZnVuY3Rpb24gX29uQWN0aXZhdGUoKSB7XG4gICAgICAgIHRoaXMub25DbGVhbnVwID0gdGhpcy5fb25DbGVhbnVwO1xuICAgIH07XG5cbiAgICBUYXNrLnByb3RvdHlwZS5fb25DbGVhbnVwID0gZnVuY3Rpb24gX29uQ2xlYW51cCgpIHtcbiAgICAgICAgdGhpcy5vbkNsZWFudXAgPSB1bmRlZmluZWQ7XG4gICAgICAgIGxvb3AuZGVhY3RpdmF0ZSh0aGlzLmlkKTtcbiAgICB9O1xuXG4gICAgVGFzay5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gc2V0KHByb3BzKSB7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wcykge1xuICAgICAgICAgICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSBwcm9wc1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIFRhc2sucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICAgIGxvb3AuYWN0aXZhdGUodGhpcy5pZCwgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5vbkNsZWFudXAgPSB0aGlzLm9uQWN0aXZhdGUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuaXNDb21wbGV0ZSA9IGZhbHNlO1xuXG4gICAgICAgIC8vIFByaXZhdGUgYG9uU3RhcnRgXG4gICAgICAgIGlmICh0aGlzLl9vblN0YXJ0KSB7XG4gICAgICAgICAgICB0aGlzLl9vblN0YXJ0KHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUHVibGljIGBvblN0YXJ0YFxuICAgICAgICBpZiAodGhpcy5vblN0YXJ0KSB7XG4gICAgICAgICAgICB0aGlzLm9uU3RhcnQodGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgVGFzay5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAgIGxvb3AuZGVhY3RpdmF0ZSh0aGlzLmlkKTtcblxuICAgICAgICAvLyBQcml2YXRlIGBvblN0b3BgXG4gICAgICAgIGlmICh0aGlzLl9vblN0b3ApIHtcbiAgICAgICAgICAgIHRoaXMuX29uU3RvcCh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFB1YmxpYyBgb25TdG9wYFxuICAgICAgICBpZiAodGhpcy5vblN0b3ApIHtcbiAgICAgICAgICAgIHRoaXMub25TdG9wKHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIFRhc2sucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbiBvbmNlKCkge1xuICAgICAgICBsb29wLmFjdGl2YXRlKHRoaXMuaWQsIHRoaXMpO1xuICAgICAgICB0aGlzLm9uQWN0aXZhdGUgPSB0aGlzLl9vbkFjdGl2YXRlO1xuICAgICAgICB0aGlzLm9uQ2xlYW51cCA9IHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIFRhc2sucHJvdG90eXBlLmNvbXBsZXRlID0gZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICAgIHRoaXMuc3RvcCgpO1xuXG4gICAgICAgIGlmICh0aGlzLm9uQ29tcGxldGUpIHtcbiAgICAgICAgICAgIHRoaXMub25Db21wbGV0ZSh0aGlzKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKlxuICAgICAgICAjIEV4dGVuZCB0aGlzIFByb2Nlc3Mgd2l0aCBuZXcgcHJvcGVydGllc1xuICAgICAgICAjIyBSZXR1cm5zIG5ldyBpbnN0YW5jZSBvZiB0aGlzIFByb2Nlc3MncyBgcHJvdG90eXBlYCB3aXRoIGV4aXN0aW5nIGFuZCBuZXcgcHJvcGVydGllc1xuICAgICAgICAgQHBhcmFtIFtvYmplY3RdIChvcHRpb25hbClcbiAgICAgICAgQHJldHVybiBbUHJvY2Vzc11cbiAgICAqL1xuXG4gICAgVGFzay5wcm90b3R5cGUuaW5oZXJpdCA9IGZ1bmN0aW9uIGluaGVyaXQocHJvcHMpIHtcbiAgICAgICAgdmFyIGlkID0gdGhpcy5pZDtcblxuICAgICAgICB2YXIgaW5oZXJpdGVkUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXModGhpcywgWydpZCddKTtcblxuICAgICAgICByZXR1cm4gbmV3IHRoaXMuY29uc3RydWN0b3IoX2V4dGVuZHMoe30sIGluaGVyaXRlZFByb3BzLCBwcm9wcykpO1xuICAgIH07XG5cbiAgICByZXR1cm4gVGFzaztcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gVGFzaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MFlYTnJMMVJoYzJzdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN1NVRkhXVHM3T3pzN096czdPenRKUVVWVE8wRkJRMnBDTEdGQlJHbENMRWxCUTJwQ0xFTkJRVmtzUzBGQldpeEZRVUZ0UWpzNFFrRkVSaXhOUVVORk96dEJRVU5tTEdGQlFVc3NSVUZCVEN4SFFVRlZMRXRCUVVzc1UwRkJUQ3hGUVVGV0xFTkJSR1U3UVVGRlppeGhRVUZMTEZGQlFVd3NSMEZCWjBJc1MwRkJhRUlzUTBGR1pUczdRVUZKWml4WlFVRkpMRXRCUVVzc1dVRkJUQ3hGUVVGdFFqdEJRVU51UWl4cFFrRkJTeXhKUVVGSkxFZEJRVW9zU1VGQlZ5eExRVUZMTEZsQlFVd3NSVUZCYlVJN1FVRkRMMElzYjBKQlFVa3NTMEZCU3l4WlFVRk1MRU5CUVd0Q0xHTkJRV3hDTEVOQlFXbERMRWRCUVdwRExFTkJRVW9zUlVGQk1rTTdRVUZEZGtNc2VVSkJRVXNzUjBGQlRDeEpRVUZaTEV0QlFVc3NXVUZCVEN4RFFVRnJRaXhIUVVGc1FpeERRVUZhTEVOQlJIVkRPMmxDUVVFelF6dGhRVVJLTzFOQlJFbzdPMEZCVVVFc1lVRkJTeXhIUVVGTUxFTkJRVk1zUzBGQlZDeEZRVnBsTzB0QlFXNUNPenRCUVVScFFpeHRRa0ZuUW1wQ0xIRkRRVUZqTzBGQlExWXNZVUZCU3l4VFFVRk1MRWRCUVdsQ0xFdEJRVXNzVlVGQlRDeERRVVJRT3pzN1FVRm9Ra2NzYlVKQmIwSnFRaXh0UTBGQllUdEJRVU5VTEdGQlFVc3NVMEZCVEN4SFFVRnBRaXhUUVVGcVFpeERRVVJUTzBGQlJWUXNZVUZCU3l4VlFVRk1MRU5CUVdkQ0xFdEJRVXNzUlVGQlRDeERRVUZvUWl4RFFVWlRPenM3UVVGd1Fra3NiVUpCZVVKcVFpeHRRa0ZCU1N4UFFVRlBPMEZCUTFBc1lVRkJTeXhKUVVGSkxFZEJRVW9zU1VGQlZ5eExRVUZvUWl4RlFVRjFRanRCUVVOdVFpeG5Ra0ZCU1N4TlFVRk5MR05CUVU0c1EwRkJjVUlzUjBGQmNrSXNRMEZCU2l4RlFVRXJRanRCUVVNelFpeHhRa0ZCU3l4SFFVRk1MRWxCUVZrc1RVRkJUU3hIUVVGT0xFTkJRVm9zUTBGRU1rSTdZVUZCTDBJN1UwRkVTanM3UVVGTlFTeGxRVUZQTEVsQlFWQXNRMEZRVHpzN08wRkJla0pOTEcxQ1FXMURha0lzZVVKQlFWRTdRVUZEU2l4aFFVRkxMRkZCUVV3c1EwRkJZeXhMUVVGTExFVkJRVXdzUlVGQlV5eEpRVUYyUWl4RlFVUkpPenRCUVVkS0xHRkJRVXNzVTBGQlRDeEhRVUZwUWl4TFFVRkxMRlZCUVV3c1IwRkJhMElzVTBGQmJFSXNRMEZJWWp0QlFVbEtMR0ZCUVVzc1ZVRkJUQ3hIUVVGclFpeExRVUZzUWpzN08wRkJTa2tzV1VGUFFTeExRVUZMTEZGQlFVd3NSVUZCWlR0QlFVTm1MR2xDUVVGTExGRkJRVXdzUTBGQll5eEpRVUZrTEVWQlJHVTdVMEZCYmtJN096dEJRVkJKTEZsQldVRXNTMEZCU3l4UFFVRk1MRVZCUVdNN1FVRkRaQ3hwUWtGQlN5eFBRVUZNTEVOQlFXRXNTVUZCWWl4RlFVUmpPMU5CUVd4Q096dEJRVWxCTEdWQlFVOHNTVUZCVUN4RFFXaENTVHM3TzBGQmJrTlRMRzFDUVhORWFrSXNkVUpCUVU4N1FVRkRTQ3hoUVVGTExGVkJRVXdzUTBGQlowSXNTMEZCU3l4RlFVRk1MRU5CUVdoQ096czdRVUZFUnl4WlFVbERMRXRCUVVzc1QwRkJUQ3hGUVVGak8wRkJRMlFzYVVKQlFVc3NUMEZCVEN4RFFVRmhMRWxCUVdJc1JVRkVZenRUUVVGc1FqczdPMEZCU2tjc1dVRlRReXhMUVVGTExFMUJRVXdzUlVGQllUdEJRVU5pTEdsQ1FVRkxMRTFCUVV3c1EwRkJXU3hKUVVGYUxFVkJSR0U3VTBGQmFrSTdPMEZCU1VFc1pVRkJUeXhKUVVGUUxFTkJZa2M3T3p0QlFYUkVWU3h0UWtGelJXcENMSFZDUVVGUE8wRkJRMGdzWVVGQlN5eFJRVUZNTEVOQlFXTXNTMEZCU3l4RlFVRk1MRVZCUVZNc1NVRkJka0lzUlVGRVJ6dEJRVVZJTEdGQlFVc3NWVUZCVEN4SFFVRnJRaXhMUVVGTExGZEJRVXdzUTBGR1pqdEJRVWRJTEdGQlFVc3NVMEZCVEN4SFFVRnBRaXhUUVVGcVFpeERRVWhITzBGQlNVZ3NaVUZCVHl4SlFVRlFMRU5CU2tjN096dEJRWFJGVlN4dFFrRTJSV3BDTEN0Q1FVRlhPMEZCUTFBc1lVRkJTeXhKUVVGTUxFZEJSRTg3TzBGQlIxQXNXVUZCU1N4TFFVRkxMRlZCUVV3c1JVRkJhVUk3UVVGRGFrSXNhVUpCUVVzc1ZVRkJUQ3hEUVVGblFpeEpRVUZvUWl4RlFVUnBRanRUUVVGeVFqczdPenM3T3pzN096dEJRV2hHWVN4dFFrRTBSbXBDTERKQ1FVRlJMRTlCUVU4N1dVRkRTQ3hMUVVFd1FpeExRVUV4UWl4SFFVUkhPenRaUVVOSkxEQkRRVUZ0UWl4alFVUjJRanM3UVVGRldDeGxRVUZQTEVsQlFVa3NTMEZCU3l4WFFVRk1MR05CUVhOQ0xHZENRVUZ0UWl4TlFVRTNReXhEUVVGUUxFTkJSbGM3T3p0WFFUVkdSU0lzSW1acGJHVWlPaUpVWVhOckxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaThxWEc0Z0lDQWdRbUZ6WlNCVVlYTnJJR05zWVhOeklHWnZjaUJqY21WaGRHbHVaeUJoSUhSaGMyc2diMjRnZEdobElHMWhhVzRnY21WdVpHVnlJR3h2YjNBdVhHNHFMMXh1YVcxd2IzSjBJQ29nWVhNZ2JHOXZjQ0JtY205dElDY3VMMnh2YjNBbk8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQmpiR0Z6Y3lCVVlYTnJJSHRjYmlBZ0lDQmpiMjV6ZEhKMVkzUnZjaWh3Y205d2N5a2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxtbGtJRDBnYkc5dmNDNW5aWFJVWVhOclNXUW9LVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXBjMEZqZEdsMlpTQTlJR1poYkhObE8xeHVYRzRnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbVJsWm1GMWJIUlFjbTl3Y3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWm05eUlDaHNaWFFnYTJWNUlHbHVJSFJvYVhNdVpHVm1ZWFZzZEZCeWIzQnpLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIUm9hWE11WkdWbVlYVnNkRkJ5YjNCekxtaGhjMDkzYmxCeWIzQmxjblI1S0d0bGVTa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjMXRyWlhsZElEMGdkR2hwY3k1a1pXWmhkV3gwVUhKdmNITmJhMlY1WFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG5ObGRDaHdjbTl3Y3lrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnWDI5dVFXTjBhWFpoZEdVb0tTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdWIyNURiR1ZoYm5Wd0lEMGdkR2hwY3k1ZmIyNURiR1ZoYm5Wd08xeHVJQ0FnSUgxY2JseHVJQ0FnSUY5dmJrTnNaV0Z1ZFhBb0tTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdWIyNURiR1ZoYm5Wd0lEMGdkVzVrWldacGJtVmtPMXh1SUNBZ0lDQWdJQ0JzYjI5d0xtUmxZV04wYVhaaGRHVW9kR2hwY3k1cFpDazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2MyVjBLSEJ5YjNCektTQjdYRzRnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR3RsZVNCcGJpQndjbTl3Y3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIQnliM0J6TG1oaGMwOTNibEJ5YjNCbGNuUjVLR3RsZVNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6VzJ0bGVWMGdQU0J3Y205d2MxdHJaWGxkTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2MzUmhjblFvS1NCN1hHNGdJQ0FnSUNBZ0lHeHZiM0F1WVdOMGFYWmhkR1VvZEdocGN5NXBaQ3dnZEdocGN5azdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NXZia05zWldGdWRYQWdQU0IwYUdsekxtOXVRV04wYVhaaGRHVWdQU0IxYm1SbFptbHVaV1E3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVhWE5EYjIxd2JHVjBaU0E5SUdaaGJITmxPMXh1WEc0Z0lDQWdJQ0FnSUM4dklGQnlhWFpoZEdVZ1lHOXVVM1JoY25SZ1hHNGdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxsOXZibE4wWVhKMEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbDl2YmxOMFlYSjBLSFJvYVhNcE8xeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnTHk4Z1VIVmliR2xqSUdCdmJsTjBZWEowWUZ4dUlDQWdJQ0FnSUNCcFppQW9kR2hwY3k1dmJsTjBZWEowS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtOXVVM1JoY25Rb2RHaHBjeWs3WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjenRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnpkRzl3S0NrZ2UxeHVJQ0FnSUNBZ0lDQnNiMjl3TG1SbFlXTjBhWFpoZEdVb2RHaHBjeTVwWkNrN1hHNWNiaUFnSUNBZ0lDQWdMeThnVUhKcGRtRjBaU0JnYjI1VGRHOXdZRnh1SUNBZ0lDQWdJQ0JwWmlBb2RHaHBjeTVmYjI1VGRHOXdLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TGw5dmJsTjBiM0FvZEdocGN5azdYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBdkx5QlFkV0pzYVdNZ1lHOXVVM1J2Y0dCY2JpQWdJQ0FnSUNBZ2FXWWdLSFJvYVhNdWIyNVRkRzl3S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtOXVVM1J2Y0NoMGFHbHpLVHRjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHOXVZMlVvS1NCN1hHNGdJQ0FnSUNBZ0lHeHZiM0F1WVdOMGFYWmhkR1VvZEdocGN5NXBaQ3dnZEdocGN5azdYRzRnSUNBZ0lDQWdJSFJvYVhNdWIyNUJZM1JwZG1GMFpTQTlJSFJvYVhNdVgyOXVRV04wYVhaaGRHVTdYRzRnSUNBZ0lDQWdJSFJvYVhNdWIyNURiR1ZoYm5Wd0lEMGdkVzVrWldacGJtVmtPMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3p0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JqYjIxd2JHVjBaU2dwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV6ZEc5d0tDazdYRzVjYmlBZ0lDQWdJQ0FnYVdZZ0tIUm9hWE11YjI1RGIyMXdiR1YwWlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXZia052YlhCc1pYUmxLSFJvYVhNcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5cGNiaUFnSUNBZ0lDQWdJeUJGZUhSbGJtUWdkR2hwY3lCUWNtOWpaWE56SUhkcGRHZ2dibVYzSUhCeWIzQmxjblJwWlhOY2JpQWdJQ0FnSUNBZ0l5TWdVbVYwZFhKdWN5QnVaWGNnYVc1emRHRnVZMlVnYjJZZ2RHaHBjeUJRY205alpYTnpKM01nWUhCeWIzUnZkSGx3WldBZ2QybDBhQ0JsZUdsemRHbHVaeUJoYm1RZ2JtVjNJSEJ5YjNCbGNuUnBaWE5jYmx4dUlDQWdJQ0FnSUNCQWNHRnlZVzBnVzI5aWFtVmpkRjBnS0c5d2RHbHZibUZzS1Z4dUlDQWdJQ0FnSUNCQWNtVjBkWEp1SUZ0UWNtOWpaWE56WFZ4dUlDQWdJQ292WEc0Z0lDQWdhVzVvWlhKcGRDaHdjbTl3Y3lrZ2UxeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCN0lHbGtMQ0F1TGk1cGJtaGxjbWwwWldSUWNtOXdjeUI5SUQwZ2RHaHBjenRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJRzVsZHlCMGFHbHpMbU52Ym5OMGNuVmpkRzl5S0hzZ0xpNHVhVzVvWlhKcGRHVmtVSEp2Y0hNc0lDNHVMbkJ5YjNCeklIMHBPMXh1SUNBZ0lIMWNibjBpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdGFzay9UYXNrLmpzXG4gKiogbW9kdWxlIGlkID0gN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX0FjdGlvbjIgPSByZXF1aXJlKCcuLi9hY3Rpb25zL0FjdGlvbicpO1xuXG52YXIgX0FjdGlvbjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BY3Rpb24yKTtcblxudmFyIF9nZW5lcmF0ZUJsZW5kQ3VydmUgPSByZXF1aXJlKCcuL2Zsb3cvZ2VuZXJhdGUtYmxlbmQtY3VydmUnKTtcblxudmFyIF9nZW5lcmF0ZUJsZW5kQ3VydmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2VuZXJhdGVCbGVuZEN1cnZlKTtcblxudmFyIF9iaW5kQWRhcHRlciA9IHJlcXVpcmUoJy4uL2luYy9iaW5kLWFkYXB0ZXInKTtcblxudmFyIF9iaW5kQWRhcHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9iaW5kQWRhcHRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLypcbiAgICBNZXRob2RzIGFuZCBwcm9wZXJ0aWVzIHRvIGFkZCB0byBib3VuZCBBY3Rpb25zXG4qL1xudmFyIGJvdW5kT25TdGFydCA9IGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICByZXR1cm4gYWN0aW9uLmZsb3cuYWN0aXZhdGVBY3Rpb24oYWN0aW9uLmlkLCBhY3Rpb24pO1xufTtcbnZhciBib3VuZE9uU3RvcCA9IGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICByZXR1cm4gYWN0aW9uLmZsb3cuZGVhY3RpdmF0ZUFjdGlvbihhY3Rpb24uaWQpO1xufTtcbnZhciBib3VuZFByb3BzID0gZnVuY3Rpb24gKGZsb3cpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBmbG93OiBmbG93LFxuICAgICAgICBpc1ByaW9yaXR5OiB0cnVlLFxuICAgICAgICBvbkFjdGl2YXRlOiBib3VuZE9uU3RhcnQsXG4gICAgICAgIG9uRGVhY3RpdmF0ZTogYm91bmRPblN0b3BcbiAgICB9O1xufTtcblxudmFyIEZsb3cgPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICAgIF9pbmhlcml0cyhGbG93LCBfQWN0aW9uKTtcblxuICAgIGZ1bmN0aW9uIEZsb3cocHJvcHMpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZsb3cpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgICAgIF90aGlzLmFjdGl2ZUFjdGlvbnMgPSB7fTtcbiAgICAgICAgX3RoaXMubnVtQWN0aXZlQWN0aW9ucyA9IDA7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBGbG93LnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiBzZXQocHJvcHMsIGluc3RhbnQpIHtcbiAgICAgICAgaWYgKCFpbnN0YW50ICYmIHRoaXMuYmVoYXZpb3VyKSB7XG4gICAgICAgICAgICB2YXIgYWN0aW9uID0gdGhpcy5iZWhhdmlvdXIocHJvcHMpO1xuXG4gICAgICAgICAgICBpZiAoYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFjdGlvbi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhY3Rpb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnQoYWN0aW9uW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnQoYWN0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBCaW5kIGBhZGFwdGVyYCB0byBhbiBhZGFwdGVyLCBpZiBub3QgYWxyZWFkeVxuICAgICAgICAgICAgaWYgKHByb3BzLmFkYXB0ZXIgJiYgIXByb3BzLmFkYXB0ZXIuc2V0dGVyKSB7XG4gICAgICAgICAgICAgICAgLy8gRHVja3R5cGlzaCBjaGVjayBmb3IgQWRhcHRlclxuICAgICAgICAgICAgICAgIHByb3BzLmFkYXB0ZXIgPSAoMCwgX2JpbmRBZGFwdGVyMi5kZWZhdWx0KShwcm9wcy5hZGFwdGVyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgX0FjdGlvbi5wcm90b3R5cGUuc2V0LmNhbGwodGhpcywgcHJvcHMpO1xuICAgICAgICAgICAgdGhpcy5vbmNlKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgQmluZCBBY3Rpb24gdG8gQWN0b3JcbiAgICAqL1xuXG4gICAgRmxvdy5wcm90b3R5cGUuY29ubmVjdCA9IGZ1bmN0aW9uIGNvbm5lY3QoYWN0aW9uKSB7XG4gICAgICAgIHZhciBpbmhlcml0ZWRBY3Rpb24gPSBhY3Rpb24uaW5oZXJpdCgpO1xuICAgICAgICB2YXIgbmV3VmFsdWVzID0ge307XG4gICAgICAgIHZhciBoYXNOZXdWYWx1ZXMgPSBmYWxzZTtcblxuICAgICAgICAvLyBDcmVhdGUgdmFsdWVzIG9uIGFjdG9yIHRoYXQgZG9uJ3QgZXhpc3RcbiAgICAgICAgZm9yICh2YXIga2V5IGluIGluaGVyaXRlZEFjdGlvbi52YWx1ZXMpIHtcbiAgICAgICAgICAgIGlmIChpbmhlcml0ZWRBY3Rpb24udmFsdWVzLmhhc093blByb3BlcnR5KGtleSkgJiYgIXRoaXMudmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZXNba2V5XSA9IHt9O1xuICAgICAgICAgICAgICAgIGhhc05ld1ZhbHVlcyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaGFzTmV3VmFsdWVzKSB7XG4gICAgICAgICAgICB0aGlzLnNldCh7IHZhbHVlczogbmV3VmFsdWVzIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluaGVyaXRlZEFjdGlvbi5zZXQoYm91bmRQcm9wcyh0aGlzLCBpbmhlcml0ZWRBY3Rpb24pKTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgU3RhcnQgQWN0b3JcbiAgICAgICAgIElmIEFjdGlvbiBpcyBwcm92aWRlZCwgYmluZCBpdCB0byB0aGlzIEFjdG9yIGFuZCBzdGFydFxuICAgICAgICAgQHBhcmFtIChvcHRpb25hbCkgW0FjdGlvbl1cbiAgICAqL1xuXG4gICAgRmxvdy5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiBzdGFydChhY3Rpb24pIHtcbiAgICAgICAgX0FjdGlvbi5wcm90b3R5cGUuc3RhcnQuY2FsbCh0aGlzKTtcblxuICAgICAgICBpZiAoIXRoaXMuaXNBY3RpdmUpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLmFjdGl2ZUFjdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVBY3Rpb25zLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9hY3Rpb24gPSB0aGlzLmFjdGl2ZUFjdGlvbnNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFfYWN0aW9uLmlzQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYWN0aW9uLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYWN0aW9uKSB7XG4gICAgICAgICAgICBpZiAoYWN0aW9uLmZsb3cgIT09IHRoaXMpIHtcbiAgICAgICAgICAgICAgICBhY3Rpb24gPSB0aGlzLmNvbm5lY3QoYWN0aW9uKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYWN0aW9uLnN0YXJ0KCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgRmxvdy5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAgIF9BY3Rpb24ucHJvdG90eXBlLnN0b3AuY2FsbCh0aGlzKTtcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5hY3RpdmVBY3Rpb25zKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVBY3Rpb25zLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUFjdGlvbnNba2V5XS5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgRmxvdy5wcm90b3R5cGUud2lsbFJlbmRlciA9IGZ1bmN0aW9uIHdpbGxSZW5kZXIoYWN0b3IsIGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gdGhpcy52YWx1ZUtleXNbaV07XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuICAgICAgICAgICAgdmFyIGRyaXZlciA9IHZhbHVlLm51bURyaXZlcnMgPyB0aGlzLmFjdGl2ZUFjdGlvbnNbdmFsdWUuZHJpdmVyc1swXV0gOiBmYWxzZTtcbiAgICAgICAgICAgIHZhciBuZXdDdXJyZW50ID0gdmFsdWUubnVtRHJpdmVycyA/IGRyaXZlci52YWx1ZXNba2V5XS5jdXJyZW50IDogdmFsdWUuY3VycmVudDtcblxuICAgICAgICAgICAgaWYgKGRyaXZlci5ibGVuZEN1cnZlKSB7XG4gICAgICAgICAgICAgICAgbmV3Q3VycmVudCA9IGRyaXZlci5ibGVuZEN1cnZlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSBuZXdDdXJyZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF9BY3Rpb24ucHJvdG90eXBlLndpbGxSZW5kZXIuY2FsbCh0aGlzLCBhY3RvciwgZnJhbWVTdGFtcCwgZWxhcHNlZCk7XG4gICAgfTtcblxuICAgIEZsb3cucHJvdG90eXBlLm9uUmVuZGVyID0gZnVuY3Rpb24gb25SZW5kZXIoX3JlZikge1xuICAgICAgICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlO1xuICAgICAgICB2YXIgYWRhcHRlciA9IF9yZWYuYWRhcHRlcjtcblxuICAgICAgICBpZiAoYWRhcHRlciAmJiBhZGFwdGVyLnNldCkge1xuICAgICAgICAgICAgYWRhcHRlci5zZXQoc3RhdGUpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qXG4gICAgICAgIEFkZCBhY3RpdmUgYWN0aW9uc1xuICAgICAgICAgQHBhcmFtIFtudW1iZXJdXG4gICAgICAgIEBwYXJhbSBbQWN0aW9uXVxuICAgICovXG5cbiAgICBGbG93LnByb3RvdHlwZS5hY3RpdmF0ZUFjdGlvbiA9IGZ1bmN0aW9uIGFjdGl2YXRlQWN0aW9uKGlkLCBhY3Rpb24pIHtcbiAgICAgICAgdGhpcy5hY3RpdmVBY3Rpb25zW2lkXSA9IGFjdGlvbjtcbiAgICAgICAgdGhpcy5udW1BY3RpdmVBY3Rpb25zKys7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhY3Rpb24ubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBhY3Rpb24udmFsdWVLZXlzW2ldO1xuICAgICAgICAgICAgdmFyIGFjdGlvblZhbHVlID0gYWN0aW9uLnZhbHVlc1trZXldO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcblxuICAgICAgICAgICAgLy8gSWYgd2UncmUgYmxlbmRpbmcgdGhpcyBhY3Rpb24sIGFuZCB0aGVyZSdzIG9uIGFscmVhZHkgaW4gcHJvZ3Jlc3NcbiAgICAgICAgICAgIGlmIChhY3Rpb24uYmxlbmQgJiYgdmFsdWUubnVtRHJpdmVycykge1xuICAgICAgICAgICAgICAgIGFjdGlvbi5ibGVuZEN1cnZlID0gKDAsIF9nZW5lcmF0ZUJsZW5kQ3VydmUyLmRlZmF1bHQpKHRoaXMuYWN0aXZlQWN0aW9uc1t2YWx1ZS5kcml2ZXJzWzBdXSwgYWN0aW9uLCBrZXkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBQYXNzIEFjdG9yIHZhbHVlIHByb3BlcnRpZXMgdG8gQWN0aW9uXG4gICAgICAgICAgICAgICAgYWN0aW9uVmFsdWUudmVsb2NpdHkgKz0gdmFsdWUudmVsb2NpdHk7XG4gICAgICAgICAgICAgICAgYWN0aW9uVmFsdWUuZnJvbSA9IGFjdGlvblZhbHVlLmN1cnJlbnQgPSB2YWx1ZS5jdXJyZW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YWx1ZS5kcml2ZXJzID0gW2lkXTtcbiAgICAgICAgICAgIHZhbHVlLm51bURyaXZlcnMgPSB2YWx1ZS5kcml2ZXJzLmxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm51bUFjdGl2ZUFjdGlvbnMpIHtcbiAgICAgICAgICAgIF9BY3Rpb24ucHJvdG90eXBlLnN0YXJ0LmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgUmVtb3ZlIGFjdGl2ZSBhY3Rpb25zXG4gICAgICAgICBAcGFyYW0gW251bWJlcl1cbiAgICAqL1xuXG4gICAgRmxvdy5wcm90b3R5cGUuZGVhY3RpdmF0ZUFjdGlvbiA9IGZ1bmN0aW9uIGRlYWN0aXZhdGVBY3Rpb24oaWQpIHtcbiAgICAgICAgdmFyIGFjdGlvbiA9IHRoaXMuYWN0aXZlQWN0aW9uc1tpZF07XG5cbiAgICAgICAgaWYgKGFjdGlvbikge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhY3Rpb24ubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIga2V5ID0gYWN0aW9uLnZhbHVlS2V5c1tpXTtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuICAgICAgICAgICAgICAgIHZhciBkcml2ZXJJbmRleCA9IHZhbHVlLmRyaXZlcnMuaW5kZXhPZihpZCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoZHJpdmVySW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLmRyaXZlcnMuc3BsaWNlKGRyaXZlckluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUubnVtRHJpdmVycy0tO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuYWN0aXZlQWN0aW9uc1tpZF07XG4gICAgICAgICAgICB0aGlzLm51bUFjdGl2ZUFjdGlvbnMtLTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5udW1BY3RpdmVBY3Rpb25zICYmIHRoaXMuaXNBY3RpdmUpIHtcbiAgICAgICAgICAgIF9BY3Rpb24ucHJvdG90eXBlLnN0b3AuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gRmxvdztcbn0oX0FjdGlvbjMuZGVmYXVsdCk7XG5cbkZsb3cucHJvdG90eXBlLmRlZmF1bHRWYWx1ZSA9IF9BY3Rpb24zLmRlZmF1bHQuZXh0ZW5kRGVmYXVsdFZhbHVlKHtcbiAgICBkcml2ZXJzOiBbXSxcbiAgICBudW1Ecml2ZXJzOiAwXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gRmxvdztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDBac2IzY3Vhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPMEZCVDBFc1NVRkJUU3hsUVVGbExGVkJRVU1zVFVGQlJEdFhRVUZaTEU5QlFVOHNTVUZCVUN4RFFVRlpMR05CUVZvc1EwRkJNa0lzVDBGQlR5eEZRVUZRTEVWQlFWY3NUVUZCZEVNN1EwRkJXanRCUVVOeVFpeEpRVUZOTEdOQlFXTXNWVUZCUXl4TlFVRkVPMWRCUVZrc1QwRkJUeXhKUVVGUUxFTkJRVmtzWjBKQlFWb3NRMEZCTmtJc1QwRkJUeXhGUVVGUU8wTkJRWHBETzBGQlEzQkNMRWxCUVUwc1lVRkJZU3hWUVVGRExFbEJRVVE3VjBGQlZ6dEJRVU14UWl4clFrRkVNRUk3UVVGRk1VSXNiMEpCUVZrc1NVRkJXanRCUVVOQkxHOUNRVUZaTEZsQlFWbzdRVUZEUVN4elFrRkJZeXhYUVVGa096dERRVXBsT3p0SlFVOWlPenM3UVVGRFJpeGhRVVJGTEVsQlEwWXNRMEZCV1N4TFFVRmFMRVZCUVcxQ096aENRVVJxUWl4TlFVTnBRanM3Y1VSQlEyWXNiVUpCUVUwc1MwRkJUaXhIUVVSbE96dEJRVVZtTEdOQlFVc3NZVUZCVEN4SFFVRnhRaXhGUVVGeVFpeERRVVpsTzBGQlIyWXNZMEZCU3l4blFrRkJUQ3hIUVVGM1FpeERRVUY0UWl4RFFVaGxPenRMUVVGdVFqczdRVUZFUlN4dFFrRlBSaXh0UWtGQlNTeFBRVUZQTEZOQlFWTTdRVUZEYUVJc1dVRkJTU3hEUVVGRExFOUJRVVFzU1VGQldTeExRVUZMTEZOQlFVd3NSVUZCWjBJN1FVRkROVUlzWjBKQlFVMHNVMEZCVXl4TFFVRkxMRk5CUVV3c1EwRkJaU3hMUVVGbUxFTkJRVlFzUTBGRWMwSTdPMEZCUnpWQ0xHZENRVUZKTEUxQlFVb3NSVUZCV1R0QlFVTlNMRzlDUVVGSkxFOUJRVThzVFVGQlVDeEZRVUZsTzBGQlEyWXNlVUpCUVVzc1NVRkJTU3hKUVVGSkxFTkJRVW9zUlVGQlR5eEpRVUZKTEU5QlFVOHNUVUZCVUN4RlFVRmxMRWRCUVc1RExFVkJRWGRETzBGQlEzQkRMRFpDUVVGTExFdEJRVXdzUTBGQlZ5eFBRVUZQTEVOQlFWQXNRMEZCV0N4RlFVUnZRenR4UWtGQmVFTTdhVUpCUkVvc1RVRkpUenRCUVVOSUxIbENRVUZMTEV0QlFVd3NRMEZCVnl4TlFVRllMRVZCUkVjN2FVSkJTbEE3WVVGRVNqdFRRVWhLTEUxQldVODdPMEZCUlVnc1owSkJRVWtzVFVGQlRTeFBRVUZPTEVsQlFXbENMRU5CUVVNc1RVRkJUU3hQUVVGT0xFTkJRV01zVFVGQlpDeEZRVUZ6UWpzN1FVRkZlRU1zYzBKQlFVMHNUMEZCVGl4SFFVRm5RaXd5UWtGQldTeE5RVUZOTEU5QlFVNHNRMEZCTlVJc1EwRkdkME03WVVGQk5VTTdPMEZCUzBFc09FSkJRVTBzUjBGQlRpeFpRVUZWTEV0QlFWWXNSVUZRUnp0QlFWRklMR2xDUVVGTExFbEJRVXdzUjBGU1J6dFRRVnBRT3p0QlFYVkNRU3hsUVVGUExFbEJRVkFzUTBGNFFtZENPenM3T3pzN08wRkJVR3hDTEcxQ1FYRkRSaXd5UWtGQlVTeFJRVUZSTzBGQlExb3NXVUZCVFN4clFrRkJhMElzVDBGQlR5eFBRVUZRTEVWQlFXeENMRU5CUkUwN1FVRkZXaXhaUVVGSkxGbEJRVmtzUlVGQldpeERRVVpSTzBGQlIxb3NXVUZCU1N4bFFVRmxMRXRCUVdZN096dEJRVWhSTEdGQlRWQXNTVUZCU1N4SFFVRktMRWxCUVZjc1owSkJRV2RDTEUxQlFXaENMRVZCUVhkQ08wRkJRM0JETEdkQ1FVRkpMR2RDUVVGblFpeE5RVUZvUWl4RFFVRjFRaXhqUVVGMlFpeERRVUZ6UXl4SFFVRjBReXhMUVVFNFF5eERRVUZETEV0QlFVc3NUVUZCVEN4RFFVRlpMR05CUVZvc1EwRkJNa0lzUjBGQk0wSXNRMEZCUkN4RlFVRnJRenRCUVVOb1Jpd3dRa0ZCVlN4SFFVRldMRWxCUVdsQ0xFVkJRV3BDTEVOQlJHZEdPMEZCUldoR0xDdENRVUZsTEVsQlFXWXNRMEZHWjBZN1lVRkJjRVk3VTBGRVNqczdRVUZQUVN4WlFVRkpMRmxCUVVvc1JVRkJhMEk3UVVGRFpDeHBRa0ZCU3l4SFFVRk1MRU5CUVZNc1JVRkJSU3hSUVVGUkxGTkJRVklzUlVGQldDeEZRVVJqTzFOQlFXeENPenRCUVVsQkxHVkJRVThzWjBKQlFXZENMRWRCUVdoQ0xFTkJRVzlDTEZkQlFWY3NTVUZCV0N4RlFVRnBRaXhsUVVGcVFpeERRVUZ3UWl4RFFVRlFMRU5CYWtKWk96czdPenM3T3pzN1FVRnlRMlFzYlVKQlowVkdMSFZDUVVGTkxGRkJRVkU3UVVGRFZpd3dRa0ZCVFN4TFFVRk9MRmxCUkZVN08wRkJSMVlzV1VGQlNTeERRVUZETEV0QlFVc3NVVUZCVEN4RlFVRmxPMEZCUTJoQ0xHbENRVUZMTEVsQlFVa3NSMEZCU2l4SlFVRlhMRXRCUVVzc1lVRkJUQ3hGUVVGdlFqdEJRVU5vUXl4dlFrRkJTU3hMUVVGTExHRkJRVXdzUTBGQmJVSXNZMEZCYmtJc1EwRkJhME1zUjBGQmJFTXNRMEZCU2l4RlFVRTBRenRCUVVONFF5eDNRa0ZCVFN4VlFVRlRMRXRCUVVzc1lVRkJUQ3hEUVVGdFFpeEhRVUZ1UWl4RFFVRlVMRU5CUkd0RE8wRkJSWGhETEhkQ1FVRkpMRU5CUVVNc1VVRkJUeXhSUVVGUUxFVkJRV2xDTzBGQlEyeENMR2REUVVGUExFdEJRVkFzUjBGRWEwSTdjVUpCUVhSQ08ybENRVVpLTzJGQlJFbzdVMEZFU2pzN1FVRlhRU3haUVVGSkxFMUJRVW9zUlVGQldUdEJRVU5TTEdkQ1FVRkpMRTlCUVU4c1NVRkJVQ3hMUVVGblFpeEpRVUZvUWl4RlFVRnpRanRCUVVOMFFpeDVRa0ZCVXl4TFFVRkxMRTlCUVV3c1EwRkJZU3hOUVVGaUxFTkJRVlFzUTBGRWMwSTdZVUZCTVVJN08wRkJTVUVzYlVKQlFVOHNTMEZCVUN4SFFVeFJPMU5CUVZvN08wRkJVVUVzWlVGQlR5eEpRVUZRTEVOQmRFSlZPenM3UVVGb1JWb3NiVUpCZVVaR0xIVkNRVUZQTzBGQlEwZ3NNRUpCUVUwc1NVRkJUaXhaUVVSSE96dEJRVWRJTEdGQlFVc3NTVUZCU1N4SFFVRktMRWxCUVZjc1MwRkJTeXhoUVVGTUxFVkJRVzlDTzBGQlEyaERMR2RDUVVGSkxFdEJRVXNzWVVGQlRDeERRVUZ0UWl4alFVRnVRaXhEUVVGclF5eEhRVUZzUXl4RFFVRktMRVZCUVRSRE8wRkJRM2hETEhGQ1FVRkxMR0ZCUVV3c1EwRkJiVUlzUjBGQmJrSXNSVUZCZDBJc1NVRkJlRUlzUjBGRWQwTTdZVUZCTlVNN1UwRkVTanM3UVVGTlFTeGxRVUZQTEVsQlFWQXNRMEZVUnpzN08wRkJla1pNTEcxQ1FYRkhSaXhwUTBGQlZ5eFBRVUZQTEZsQlFWa3NVMEZCVXp0QlFVTnVReXhoUVVGTExFbEJRVWtzU1VGQlNTeERRVUZLTEVWQlFVOHNTVUZCU1N4TFFVRkxMRmxCUVV3c1JVRkJiVUlzUjBGQmRrTXNSVUZCTkVNN1FVRkRlRU1zWjBKQlFVMHNUVUZCVFN4TFFVRkxMRk5CUVV3c1EwRkJaU3hEUVVGbUxFTkJRVTRzUTBGRWEwTTdRVUZGZUVNc1owSkJRVTBzVVVGQlVTeExRVUZMTEUxQlFVd3NRMEZCV1N4SFFVRmFMRU5CUVZJc1EwRkdhME03UVVGSGVFTXNaMEpCUVUwc1UwRkJVeXhOUVVGTkxGVkJRVTRzUjBGQmJVSXNTMEZCU3l4aFFVRk1MRU5CUVcxQ0xFMUJRVTBzVDBGQlRpeERRVUZqTEVOQlFXUXNRMEZCYmtJc1EwRkJia0lzUjBGQk1FUXNTMEZCTVVRc1EwRkllVUk3UVVGSmVFTXNaMEpCUVVrc1lVRkJZU3hOUVVGTkxGVkJRVTRzUjBGQmJVSXNUMEZCVHl4TlFVRlFMRU5CUVdNc1IwRkJaQ3hGUVVGdFFpeFBRVUZ1UWl4SFFVRTJRaXhOUVVGTkxFOUJRVTRzUTBGS2VrSTdPMEZCVFhoRExHZENRVUZKTEU5QlFVOHNWVUZCVUN4RlFVRnRRanRCUVVOdVFpdzJRa0ZCWVN4UFFVRlBMRlZCUVZBc1JVRkJZaXhEUVVSdFFqdGhRVUYyUWpzN1FVRkpRU3hyUWtGQlRTeFBRVUZPTEVkQlFXZENMRlZCUVdoQ0xFTkJWbmRETzFOQlFUVkRPenRCUVdGQkxHVkJRVThzYTBKQlFVMHNWVUZCVGl4WlFVRnBRaXhMUVVGcVFpeEZRVUYzUWl4VlFVRjRRaXhGUVVGdlF5eFBRVUZ3UXl4RFFVRlFMRU5CWkcxRE96czdRVUZ5UjNKRExHMUNRWE5JUml4dFEwRkJOa0k3V1VGQmJFSXNiVUpCUVd0Q08xbEJRVmdzZFVKQlFWYzdPMEZCUTNwQ0xGbEJRVWtzVjBGQlZ5eFJRVUZSTEVkQlFWSXNSVUZCWVR0QlFVTjRRaXh2UWtGQlVTeEhRVUZTTEVOQlFWa3NTMEZCV2l4RlFVUjNRanRUUVVFMVFqczdPenM3T3pzN08wRkJka2hHTEcxQ1FXdEpSaXg1UTBGQlpTeEpRVUZKTEZGQlFWRTdRVUZEZGtJc1lVRkJTeXhoUVVGTUxFTkJRVzFDTEVWQlFXNUNMRWxCUVhsQ0xFMUJRWHBDTEVOQlJIVkNPMEZCUlhaQ0xHRkJRVXNzWjBKQlFVd3NSMEZHZFVJN08wRkJTWFpDTEdGQlFVc3NTVUZCU1N4SlFVRkpMRU5CUVVvc1JVRkJUeXhKUVVGSkxFOUJRVThzV1VGQlVDeEZRVUZ4UWl4SFFVRjZReXhGUVVFNFF6dEJRVU14UXl4blFrRkJUU3hOUVVGTkxFOUJRVThzVTBGQlVDeERRVUZwUWl4RFFVRnFRaXhEUVVGT0xFTkJSRzlETzBGQlJURkRMR2RDUVVGTkxHTkJRV01zVDBGQlR5eE5RVUZRTEVOQlFXTXNSMEZCWkN4RFFVRmtMRU5CUm05RE8wRkJSekZETEdkQ1FVRk5MRkZCUVZFc1MwRkJTeXhOUVVGTUxFTkJRVmtzUjBGQldpeERRVUZTT3pzN1FVRkliME1zWjBKQlRYUkRMRTlCUVU4c1MwRkJVQ3hKUVVGblFpeE5RVUZOTEZWQlFVNHNSVUZCYTBJN1FVRkRiRU1zZFVKQlFVOHNWVUZCVUN4SFFVRnZRaXhyUTBGQmJVSXNTMEZCU3l4aFFVRk1MRU5CUVcxQ0xFMUJRVTBzVDBGQlRpeERRVUZqTEVOQlFXUXNRMEZCYmtJc1EwRkJia0lzUlVGQmVVUXNUVUZCZWtRc1JVRkJhVVVzUjBGQmFrVXNRMEZCY0VJc1EwRkVhME03WVVGQmRFTXNUVUZGVHpzN1FVRkZTQ3cwUWtGQldTeFJRVUZhTEVsQlFYZENMRTFCUVUwc1VVRkJUaXhEUVVaeVFqdEJRVWRJTERSQ1FVRlpMRWxCUVZvc1IwRkJiVUlzV1VGQldTeFBRVUZhTEVkQlFYTkNMRTFCUVUwc1QwRkJUaXhEUVVoMFF6dGhRVVpRT3p0QlFWRkJMR3RDUVVGTkxFOUJRVTRzUjBGQlowSXNRMEZCUXl4RlFVRkVMRU5CUVdoQ0xFTkJaREJETzBGQlpURkRMR3RDUVVGTkxGVkJRVTRzUjBGQmJVSXNUVUZCVFN4UFFVRk9MRU5CUVdNc1RVRkJaQ3hEUVdaMVFqdFRRVUU1UXpzN1FVRnJRa0VzV1VGQlNTeExRVUZMTEdkQ1FVRk1MRVZCUVhWQ08wRkJRM1pDTERoQ1FVRk5MRXRCUVU0c1dVRkVkVUk3VTBGQk0wSTdPenM3T3pzN08wRkJlRXBHTEcxQ1FXdExSaXcyUTBGQmFVSXNTVUZCU1R0QlFVTnFRaXhaUVVGTkxGTkJRVk1zUzBGQlN5eGhRVUZNTEVOQlFXMUNMRVZCUVc1Q0xFTkJRVlFzUTBGRVZ6czdRVUZIYWtJc1dVRkJTU3hOUVVGS0xFVkJRVms3UVVGRFVpeHBRa0ZCU3l4SlFVRkpMRWxCUVVrc1EwRkJTaXhGUVVGUExFbEJRVWtzVDBGQlR5eFpRVUZRTEVWQlFYRkNMRWRCUVhwRExFVkJRVGhETzBGQlF6RkRMRzlDUVVGTkxFMUJRVTBzVDBGQlR5eFRRVUZRTEVOQlFXbENMRU5CUVdwQ0xFTkJRVTRzUTBGRWIwTTdRVUZGTVVNc2IwSkJRVTBzVVVGQlVTeExRVUZMTEUxQlFVd3NRMEZCV1N4SFFVRmFMRU5CUVZJc1EwRkdiME03UVVGSE1VTXNiMEpCUVUwc1kwRkJZeXhOUVVGTkxFOUJRVTRzUTBGQll5eFBRVUZrTEVOQlFYTkNMRVZCUVhSQ0xFTkJRV1FzUTBGSWIwTTdPMEZCU3pGRExHOUNRVUZKTEdkQ1FVRm5RaXhEUVVGRExFTkJRVVFzUlVGQlNUdEJRVU53UWl3d1FrRkJUU3hQUVVGT0xFTkJRV01zVFVGQlpDeERRVUZ4UWl4WFFVRnlRaXhGUVVGclF5eERRVUZzUXl4RlFVUnZRanRCUVVWd1Fpd3dRa0ZCVFN4VlFVRk9MRWRCUm05Q08ybENRVUY0UWp0aFFVeEtPenRCUVZkQkxHMUNRVUZQTEV0QlFVc3NZVUZCVEN4RFFVRnRRaXhGUVVGdVFpeERRVUZRTEVOQldsRTdRVUZoVWl4cFFrRkJTeXhuUWtGQlRDeEhRV0pSTzFOQlFWbzdPMEZCWjBKQkxGbEJRVWtzUTBGQlF5eExRVUZMTEdkQ1FVRk1MRWxCUVhsQ0xFdEJRVXNzVVVGQlRDeEZRVUZsTzBGQlEzcERMRGhDUVVGTkxFbEJRVTRzV1VGRWVVTTdVMEZCTjBNN096dFhRWEpNUmpzN08wRkJNa3hPTEV0QlFVc3NVMEZCVEN4RFFVRmxMRmxCUVdZc1IwRkJPRUlzYVVKQlFVOHNhMEpCUVZBc1EwRkJNRUk3UVVGRGNFUXNZVUZCVXl4RlFVRlVPMEZCUTBFc1owSkJRVmtzUTBGQldqdERRVVl3UWl4RFFVRTVRanM3YTBKQlMyVWlMQ0ptYVd4bElqb2lSbXh2ZHk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRDOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1FXTjBhVzl1SUdaeWIyMGdKeTR1TDJGamRHbHZibk12UVdOMGFXOXVKenRjYm1sdGNHOXlkQ0JuWlc1bGNtRjBaVUpzWlc1a1EzVnlkbVVnWm5KdmJTQW5MaTltYkc5M0wyZGxibVZ5WVhSbExXSnNaVzVrTFdOMWNuWmxKenRjYm1sdGNHOXlkQ0JpYVc1a1FXUmhjSFJsY2lCbWNtOXRJQ2N1TGk5cGJtTXZZbWx1WkMxaFpHRndkR1Z5Snp0Y2JseHVMeXBjYmlBZ0lDQk5aWFJvYjJSeklHRnVaQ0J3Y205d1pYSjBhV1Z6SUhSdklHRmtaQ0IwYnlCaWIzVnVaQ0JCWTNScGIyNXpYRzRxTDF4dVkyOXVjM1FnWW05MWJtUlBibE4wWVhKMElEMGdLR0ZqZEdsdmJpa2dQVDRnWVdOMGFXOXVMbVpzYjNjdVlXTjBhWFpoZEdWQlkzUnBiMjRvWVdOMGFXOXVMbWxrTENCaFkzUnBiMjRwTzF4dVkyOXVjM1FnWW05MWJtUlBibE4wYjNBZ1BTQW9ZV04wYVc5dUtTQTlQaUJoWTNScGIyNHVabXh2ZHk1a1pXRmpkR2wyWVhSbFFXTjBhVzl1S0dGamRHbHZiaTVwWkNrN1hHNWpiMjV6ZENCaWIzVnVaRkJ5YjNCeklEMGdLR1pzYjNjcElEMCtJQ2g3WEc0Z0lDQWdabXh2ZHl4Y2JpQWdJQ0JwYzFCeWFXOXlhWFI1T2lCMGNuVmxMRnh1SUNBZ0lHOXVRV04wYVhaaGRHVTZJR0p2ZFc1a1QyNVRkR0Z5ZEN4Y2JpQWdJQ0J2YmtSbFlXTjBhWFpoZEdVNklHSnZkVzVrVDI1VGRHOXdYRzU5S1R0Y2JseHVZMnhoYzNNZ1JteHZkeUJsZUhSbGJtUnpJRUZqZEdsdmJpQjdYRzRnSUNBZ1kyOXVjM1J5ZFdOMGIzSW9jSEp2Y0hNcElIdGNiaUFnSUNBZ0lDQWdjM1Z3WlhJb2NISnZjSE1wTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbUZqZEdsMlpVRmpkR2x2Ym5NZ1BTQjdmVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXVkVzFCWTNScGRtVkJZM1JwYjI1eklEMGdNRHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnpaWFFvY0hKdmNITXNJR2x1YzNSaGJuUXBJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tDRnBibk4wWVc1MElDWW1JSFJvYVhNdVltVm9ZWFpwYjNWeUtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0JoWTNScGIyNGdQU0IwYUdsekxtSmxhR0YyYVc5MWNpaHdjbTl3Y3lrN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaGhZM1JwYjI0cElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvWVdOMGFXOXVMbXhsYm1kMGFDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElHRmpkR2x2Ymk1c1pXNW5kR2c3SUdrckt5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1emRHRnlkQ2hoWTNScGIyNWJhVjBwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXpkR0Z5ZENoaFkzUnBiMjRwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJRUpwYm1RZ1lHRmtZWEIwWlhKZ0lIUnZJR0Z1SUdGa1lYQjBaWElzSUdsbUlHNXZkQ0JoYkhKbFlXUjVYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9jSEp2Y0hNdVlXUmhjSFJsY2lBbUppQWhjSEp2Y0hNdVlXUmhjSFJsY2k1elpYUjBaWElwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdkx5QkVkV05yZEhsd2FYTm9JR05vWldOcklHWnZjaUJCWkdGd2RHVnlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjSEp2Y0hNdVlXUmhjSFJsY2lBOUlHSnBibVJCWkdGd2RHVnlLSEJ5YjNCekxtRmtZWEIwWlhJcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0J6ZFhCbGNpNXpaWFFvY0hKdmNITXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV2Ym1ObEtDazdYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnSUNCOVhHNWNiaUFnSUNBdktseHVJQ0FnSUNBZ0lDQkNhVzVrSUVGamRHbHZiaUIwYnlCQlkzUnZjbHh1SUNBZ0lDb3ZYRzRnSUNBZ1kyOXVibVZqZENoaFkzUnBiMjRwSUh0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnYVc1b1pYSnBkR1ZrUVdOMGFXOXVJRDBnWVdOMGFXOXVMbWx1YUdWeWFYUW9LVHRjYmlBZ0lDQWdJQ0FnYkdWMElHNWxkMVpoYkhWbGN5QTlJSHQ5TzF4dUlDQWdJQ0FnSUNCc1pYUWdhR0Z6VG1WM1ZtRnNkV1Z6SUQwZ1ptRnNjMlU3WEc1Y2JpQWdJQ0FnSUNBZ0x5OGdRM0psWVhSbElIWmhiSFZsY3lCdmJpQmhZM1J2Y2lCMGFHRjBJR1J2YmlkMElHVjRhWE4wWEc0Z0lDQWdJQ0FnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUJwYm1obGNtbDBaV1JCWTNScGIyNHVkbUZzZFdWektTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9hVzVvWlhKcGRHVmtRV04wYVc5dUxuWmhiSFZsY3k1b1lYTlBkMjVRY205d1pYSjBlU2hyWlhrcElDWW1JQ0YwYUdsekxuWmhiSFZsY3k1b1lYTlBkMjVRY205d1pYSjBlU2hyWlhrcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdibVYzVm1Gc2RXVnpXMnRsZVYwZ1BTQjdmVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JvWVhOT1pYZFdZV3gxWlhNZ1BTQjBjblZsTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ2FXWWdLR2hoYzA1bGQxWmhiSFZsY3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXpaWFFvZXlCMllXeDFaWE02SUc1bGQxWmhiSFZsY3lCOUtUdGNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJwYm1obGNtbDBaV1JCWTNScGIyNHVjMlYwS0dKdmRXNWtVSEp2Y0hNb2RHaHBjeXdnYVc1b1pYSnBkR1ZrUVdOMGFXOXVLU2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeXBjYmlBZ0lDQWdJQ0FnVTNSaGNuUWdRV04wYjNKY2JseHVJQ0FnSUNBZ0lDQkpaaUJCWTNScGIyNGdhWE1nY0hKdmRtbGtaV1FzSUdKcGJtUWdhWFFnZEc4Z2RHaHBjeUJCWTNSdmNpQmhibVFnYzNSaGNuUmNibHh1SUNBZ0lDQWdJQ0JBY0dGeVlXMGdLRzl3ZEdsdmJtRnNLU0JiUVdOMGFXOXVYVnh1SUNBZ0lDb3ZYRzRnSUNBZ2MzUmhjblFvWVdOMGFXOXVLU0I3WEc0Z0lDQWdJQ0FnSUhOMWNHVnlMbk4wWVhKMEtDazdYRzVjYmlBZ0lDQWdJQ0FnYVdZZ0tDRjBhR2x6TG1selFXTjBhWFpsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JtYjNJZ0tHeGxkQ0JyWlhrZ2FXNGdkR2hwY3k1aFkzUnBkbVZCWTNScGIyNXpLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIUm9hWE11WVdOMGFYWmxRV04wYVc5dWN5NW9ZWE5QZDI1UWNtOXdaWEowZVNoclpYa3BLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUdGamRHbHZiaUE5SUhSb2FYTXVZV04wYVhabFFXTjBhVzl1YzF0clpYbGRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9JV0ZqZEdsdmJpNXBjMEZqZEdsMlpTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZV04wYVc5dUxuTjBZWEowS0NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCcFppQW9ZV04wYVc5dUtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9ZV04wYVc5dUxtWnNiM2NnSVQwOUlIUm9hWE1wSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCaFkzUnBiMjRnUFNCMGFHbHpMbU52Ym01bFkzUW9ZV04wYVc5dUtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnWVdOMGFXOXVMbk4wWVhKMEtDazdYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnSUNCOVhHNWNiaUFnSUNCemRHOXdLQ2tnZTF4dUlDQWdJQ0FnSUNCemRYQmxjaTV6ZEc5d0tDazdYRzVjYmlBZ0lDQWdJQ0FnWm05eUlDaHNaWFFnYTJWNUlHbHVJSFJvYVhNdVlXTjBhWFpsUVdOMGFXOXVjeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0hSb2FYTXVZV04wYVhabFFXTjBhVzl1Y3k1b1lYTlBkMjVRY205d1pYSjBlU2hyWlhrcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1aFkzUnBkbVZCWTNScGIyNXpXMnRsZVYwdWMzUnZjQ2dwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2QybHNiRkpsYm1SbGNpaGhZM1J2Y2l3Z1puSmhiV1ZUZEdGdGNDd2daV3hoY0hObFpDa2dlMXh1SUNBZ0lDQWdJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUhSb2FYTXViblZ0Vm1Gc2RXVkxaWGx6T3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUd0bGVTQTlJSFJvYVhNdWRtRnNkV1ZMWlhselcybGRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnZG1Gc2RXVWdQU0IwYUdsekxuWmhiSFZsYzF0clpYbGRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnWkhKcGRtVnlJRDBnZG1Gc2RXVXViblZ0UkhKcGRtVnljeUEvSUhSb2FYTXVZV04wYVhabFFXTjBhVzl1YzF0MllXeDFaUzVrY21sMlpYSnpXekJkWFNBNklHWmhiSE5sTzF4dUlDQWdJQ0FnSUNBZ0lDQWdiR1YwSUc1bGQwTjFjbkpsYm5RZ1BTQjJZV3gxWlM1dWRXMUVjbWwyWlhKeklEOGdaSEpwZG1WeUxuWmhiSFZsYzF0clpYbGRMbU4xY25KbGJuUWdPaUIyWVd4MVpTNWpkWEp5Wlc1ME8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9aSEpwZG1WeUxtSnNaVzVrUTNWeWRtVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J1WlhkRGRYSnlaVzUwSUQwZ1pISnBkbVZ5TG1Kc1pXNWtRM1Z5ZG1Vb0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVXVZM1Z5Y21WdWRDQTlJRzVsZDBOMWNuSmxiblE3WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2MzVndaWEl1ZDJsc2JGSmxibVJsY2loaFkzUnZjaXdnWm5KaGJXVlRkR0Z0Y0N3Z1pXeGhjSE5sWkNrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYjI1U1pXNWtaWElvZXlCemRHRjBaU3dnWVdSaGNIUmxjaUI5S1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2hoWkdGd2RHVnlJQ1ltSUdGa1lYQjBaWEl1YzJWMEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCaFpHRndkR1Z5TG5ObGRDaHpkR0YwWlNrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNBdktseHVJQ0FnSUNBZ0lDQkJaR1FnWVdOMGFYWmxJR0ZqZEdsdmJuTmNibHh1SUNBZ0lDQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMWNiaUFnSUNBZ0lDQWdRSEJoY21GdElGdEJZM1JwYjI1ZFhHNGdJQ0FnS2k5Y2JpQWdJQ0JoWTNScGRtRjBaVUZqZEdsdmJpaHBaQ3dnWVdOMGFXOXVLU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZV04wYVhabFFXTjBhVzl1YzF0cFpGMGdQU0JoWTNScGIyNDdYRzRnSUNBZ0lDQWdJSFJvYVhNdWJuVnRRV04wYVhabFFXTjBhVzl1Y3lzck8xeHVYRzRnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnWVdOMGFXOXVMbTUxYlZaaGJIVmxTMlY1Y3pzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCclpYa2dQU0JoWTNScGIyNHVkbUZzZFdWTFpYbHpXMmxkTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ1lXTjBhVzl1Vm1Gc2RXVWdQU0JoWTNScGIyNHVkbUZzZFdWelcydGxlVjA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCMllXeDFaU0E5SUhSb2FYTXVkbUZzZFdWelcydGxlVjA3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUVsbUlIZGxKM0psSUdKc1pXNWthVzVuSUhSb2FYTWdZV04wYVc5dUxDQmhibVFnZEdobGNtVW5jeUJ2YmlCaGJISmxZV1I1SUdsdUlIQnliMmR5WlhOelhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb1lXTjBhVzl1TG1Kc1pXNWtJQ1ltSUhaaGJIVmxMbTUxYlVSeWFYWmxjbk1wSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCaFkzUnBiMjR1WW14bGJtUkRkWEoyWlNBOUlHZGxibVZ5WVhSbFFteGxibVJEZFhKMlpTaDBhR2x6TG1GamRHbDJaVUZqZEdsdmJuTmJkbUZzZFdVdVpISnBkbVZ5YzFzd1hWMHNJR0ZqZEdsdmJpd2dhMlY1S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdMeThnVUdGemN5QkJZM1J2Y2lCMllXeDFaU0J3Y205d1pYSjBhV1Z6SUhSdklFRmpkR2x2Ymx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdGamRHbHZibFpoYkhWbExuWmxiRzlqYVhSNUlDczlJSFpoYkhWbExuWmxiRzlqYVhSNU8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHRmpkR2x2YmxaaGJIVmxMbVp5YjIwZ1BTQmhZM1JwYjI1V1lXeDFaUzVqZFhKeVpXNTBJRDBnZG1Gc2RXVXVZM1Z5Y21WdWREdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVXVaSEpwZG1WeWN5QTlJRnRwWkYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IyWVd4MVpTNXVkVzFFY21sMlpYSnpJRDBnZG1Gc2RXVXVaSEpwZG1WeWN5NXNaVzVuZEdnN1hHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0JwWmlBb2RHaHBjeTV1ZFcxQlkzUnBkbVZCWTNScGIyNXpLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnpkWEJsY2k1emRHRnlkQ2dwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHlwY2JpQWdJQ0FnSUNBZ1VtVnRiM1psSUdGamRHbDJaU0JoWTNScGIyNXpYRzVjYmlBZ0lDQWdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRYRzRnSUNBZ0tpOWNiaUFnSUNCa1pXRmpkR2wyWVhSbFFXTjBhVzl1S0dsa0tTQjdYRzRnSUNBZ0lDQWdJR052Ym5OMElHRmpkR2x2YmlBOUlIUm9hWE11WVdOMGFYWmxRV04wYVc5dWMxdHBaRjA3WEc1Y2JpQWdJQ0FnSUNBZ2FXWWdLR0ZqZEdsdmJpa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQmhZM1JwYjI0dWJuVnRWbUZzZFdWTFpYbHpPeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCclpYa2dQU0JoWTNScGIyNHVkbUZzZFdWTFpYbHpXMmxkTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJSFpoYkhWbElEMGdkR2hwY3k1MllXeDFaWE5iYTJWNVhUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCa2NtbDJaWEpKYm1SbGVDQTlJSFpoYkhWbExtUnlhWFpsY25NdWFXNWtaWGhQWmlocFpDazdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb1pISnBkbVZ5U1c1a1pYZ2dJVDA5SUMweEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhaaGJIVmxMbVJ5YVhabGNuTXVjM0JzYVdObEtHUnlhWFpsY2tsdVpHVjRMQ0F4S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZzZFdVdWJuVnRSSEpwZG1WeWN5MHRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ1pHVnNaWFJsSUhSb2FYTXVZV04wYVhabFFXTjBhVzl1YzF0cFpGMDdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbTUxYlVGamRHbDJaVUZqZEdsdmJuTXRMVHRjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lHbG1JQ2doZEdocGN5NXVkVzFCWTNScGRtVkJZM1JwYjI1eklDWW1JSFJvYVhNdWFYTkJZM1JwZG1VcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhOMWNHVnlMbk4wYjNBb0tUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNibjFjYmx4dVJteHZkeTV3Y205MGIzUjVjR1V1WkdWbVlYVnNkRlpoYkhWbElEMGdRV04wYVc5dUxtVjRkR1Z1WkVSbFptRjFiSFJXWVd4MVpTaDdYRzRnSUNBZ1pISnBkbVZ5Y3pvZ1cxMHNYRzRnSUNBZ2JuVnRSSEpwZG1WeWN6b2dNRnh1ZlNrN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElFWnNiM2M3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvRmxvdy5qc1xuICoqIG1vZHVsZSBpZCA9IDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9UYXNrMiA9IHJlcXVpcmUoJy4uL3Rhc2svVGFzaycpO1xuXG52YXIgX1Rhc2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVGFzazIpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIElucHV0ID0gZnVuY3Rpb24gKF9UYXNrKSB7XG4gICAgX2luaGVyaXRzKElucHV0LCBfVGFzayk7XG5cbiAgICBmdW5jdGlvbiBJbnB1dChpbml0aWFsVmFsdWVzLCBwb2xsKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbnB1dCk7XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1Rhc2suY2FsbCh0aGlzKSk7XG5cbiAgICAgICAgX3RoaXMuc3RhdGUgPSBpbml0aWFsVmFsdWVzO1xuXG4gICAgICAgIGlmICgoMCwgX3V0aWxzLmlzRnVuYykocG9sbCkpIHtcbiAgICAgICAgICAgIF90aGlzLm9uRnJhbWVTdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMubGF0ZXN0KF90aGlzLnBvbGwoKSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBNYW51YWxseSBhZGQgbGF0ZXN0IHZhbHVlc1xuICAgICAgICAgQHBhcmFtIFtvYmplY3RdXG4gICAgKi9cblxuICAgIElucHV0LnByb3RvdHlwZS5sYXRlc3QgPSBmdW5jdGlvbiBsYXRlc3QocHJvcHMpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IF9leHRlbmRzKHt9LCB0aGlzLnN0YXRlLCBwcm9wcyk7XG4gICAgfTtcblxuICAgIHJldHVybiBJbnB1dDtcbn0oX1Rhc2szLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBJbnB1dDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJuQjFkQzlKYm5CMWRDNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN096czdPenM3T3pzN096czdPenRKUVVkeFFqczdPMEZCUTJwQ0xHRkJSR2xDTEV0QlEycENMRU5CUVZrc1lVRkJXaXhGUVVFeVFpeEpRVUV6UWl4RlFVRnBRenM0UWtGRWFFSXNUMEZEWjBJN08zRkVRVU0zUWl4clFrRkVOa0k3TzBGQlJUZENMR05CUVVzc1MwRkJUQ3hIUVVGaExHRkJRV0lzUTBGR05rSTdPMEZCU1RkQ0xGbEJRVWtzYlVKQlFVOHNTVUZCVUN4RFFVRktMRVZCUVd0Q08wRkJRMlFzYTBKQlFVc3NXVUZCVEN4SFFVRnZRanQxUWtGQlRTeE5RVUZMTEUxQlFVd3NRMEZCV1N4TlFVRkxMRWxCUVV3c1JVRkJXanRoUVVGT0xFTkJSRTQ3VTBGQmJFSTdjVUpCU2paQ08wdEJRV3BET3pzN096czdPMEZCUkdsQ0xHOUNRV1ZxUWl4NVFrRkJUeXhQUVVGUE8wRkJRMVlzWVVGQlN5eExRVUZNTEdkQ1FVRnJRaXhMUVVGTExFdEJRVXdzUlVGQlpTeE5RVUZxUXl4RFFVUlZPenM3VjBGbVJ5SXNJbVpwYkdVaU9pSkpibkIxZEM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRDOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1ZHRnpheUJtY205dElDY3VMaTkwWVhOckwxUmhjMnNuTzF4dWFXMXdiM0owSUhzZ2FYTkdkVzVqSUgwZ1puSnZiU0FuTGk0dmFXNWpMM1YwYVd4ekp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdZMnhoYzNNZ1NXNXdkWFFnWlhoMFpXNWtjeUJVWVhOcklIdGNiaUFnSUNCamIyNXpkSEoxWTNSdmNpaHBibWwwYVdGc1ZtRnNkV1Z6TENCd2IyeHNLU0I3WEc0Z0lDQWdJQ0FnSUhOMWNHVnlLQ2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjM1JoZEdVZ1BTQnBibWwwYVdGc1ZtRnNkV1Z6TzF4dVhHNGdJQ0FnSUNBZ0lHbG1JQ2hwYzBaMWJtTW9jRzlzYkNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXViMjVHY21GdFpWTjBZWEowSUQwZ0tDa2dQVDRnZEdocGN5NXNZWFJsYzNRb2RHaHBjeTV3YjJ4c0tDa3BPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeXBjYmlBZ0lDQWdJQ0FnVFdGdWRXRnNiSGtnWVdSa0lHeGhkR1Z6ZENCMllXeDFaWE5jYmx4dUlDQWdJQ0FnSUNCQWNHRnlZVzBnVzI5aWFtVmpkRjFjYmlBZ0lDQXFMMXh1SUNBZ0lHeGhkR1Z6ZENod2NtOXdjeWtnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbk4wWVhSbElEMGdleUF1TGk1MGFHbHpMbk4wWVhSbExDQXVMaTV3Y205d2N5QjlPMXh1SUNBZ0lIMWNibjFjYmlKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lucHV0L0lucHV0LmpzXG4gKiogbW9kdWxlIGlkID0gOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3RpbWVsaW5lID0gcmVxdWlyZSgnLi90aW1lbGluZScpO1xuXG52YXIgX3RpbWVsaW5lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RpbWVsaW5lKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIERFRkFVTFRfSU5URVJWQUwgPSAxMDA7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICh0d2VlbnMsIHByb3BzKSB7XG4gICAgdmFyIHByb3BzSXNEdXJhdGlvbiA9ICgwLCBfdXRpbHMuaXNOdW0pKHByb3BzKTtcbiAgICB2YXIgaW50ZXJ2YWwgPSBwcm9wc0lzRHVyYXRpb24gPyBwcm9wcyA6IHByb3BzID8gcHJvcHMuaW50ZXJ2YWwgfHwgREVGQVVMVF9JTlRFUlZBTCA6IERFRkFVTFRfSU5URVJWQUw7XG4gICAgdmFyIHRpbWVsaW5lRGVmaW5pdGlvbiA9IHR3ZWVucy5tYXAoZnVuY3Rpb24gKHR3ZWVuKSB7XG4gICAgICAgIHJldHVybiB7IHR3ZWVuOiB0d2VlbiwgYXQ6IGludGVydmFsIH07XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKDAsIF90aW1lbGluZTIuZGVmYXVsdCkodGltZWxpbmVEZWZpbml0aW9uLCBwcm9wcyk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1NdmMzUmhaMmRsY2k1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3T3pzN096czdRVUZIUVN4SlFVRk5MRzFDUVVGdFFpeEhRVUZ1UWpzN2EwSkJSVk1zVlVGQlF5eE5RVUZFTEVWQlFWTXNTMEZCVkN4RlFVRnRRanRCUVVNNVFpeFJRVUZOTEd0Q1FVRnJRaXhyUWtGQlRTeExRVUZPTEVOQlFXeENMRU5CUkhkQ08wRkJSVGxDTEZGQlFVMHNWMEZCVnl4clFrRkJhMElzUzBGQmJFSXNSMEZCTUVJc1VVRkJVU3hOUVVGTkxGRkJRVTRzU1VGQmEwSXNaMEpCUVd4Q0xFZEJRWEZETEdkQ1FVRTNReXhEUVVaaU8wRkJSemxDTEZGQlFVMHNjVUpCUVhGQ0xFOUJRVThzUjBGQlVDeERRVUZYTEZWQlFVTXNTMEZCUkR0bFFVRlpMRVZCUVVVc1dVRkJSaXhGUVVGVExFbEJRVWtzVVVGQlNqdExRVUZ5UWl4RFFVRm9ReXhEUVVoM1FqczdRVUZMT1VJc1YwRkJUeXgzUWtGQlV5eHJRa0ZCVkN4RlFVRTJRaXhMUVVFM1FpeERRVUZRTEVOQlREaENPME5CUVc1Q0lpd2labWxzWlNJNkluTjBZV2RuWlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUXZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElIUnBiV1ZzYVc1bElHWnliMjBnSnk0dmRHbHRaV3hwYm1Vbk8xeHVhVzF3YjNKMElIc2dhWE5PZFcwZ2ZTQm1jbTl0SUNjdUwzVjBhV3h6Snp0Y2JseHVZMjl1YzNRZ1JFVkdRVlZNVkY5SlRsUkZVbFpCVENBOUlERXdNRHRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnS0hSM1pXVnVjeXdnY0hKdmNITXBJRDArSUh0Y2JpQWdJQ0JqYjI1emRDQndjbTl3YzBselJIVnlZWFJwYjI0Z1BTQnBjMDUxYlNod2NtOXdjeWs3WEc0Z0lDQWdZMjl1YzNRZ2FXNTBaWEoyWVd3Z1BTQndjbTl3YzBselJIVnlZWFJwYjI0Z1B5QndjbTl3Y3lBNklIQnliM0J6SUQ4Z2NISnZjSE11YVc1MFpYSjJZV3dnZkh3Z1JFVkdRVlZNVkY5SlRsUkZVbFpCVENBNklFUkZSa0ZWVEZSZlNVNVVSVkpXUVV3N1hHNGdJQ0FnWTI5dWMzUWdkR2x0Wld4cGJtVkVaV1pwYm1sMGFXOXVJRDBnZEhkbFpXNXpMbTFoY0Nnb2RIZGxaVzRwSUQwK0lDaDdJSFIzWldWdUxDQmhkRG9nYVc1MFpYSjJZV3dnZlNrcE8xeHVYRzRnSUNBZ2NtVjBkWEp1SUhScGJXVnNhVzVsS0hScGJXVnNhVzVsUkdWbWFXNXBkR2x2Yml3Z2NISnZjSE1wTzF4dWZUc2lYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvc3RhZ2dlci5qc1xuICoqIG1vZHVsZSBpZCA9IDEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB0aW1lbGluZTtcblxudmFyIF9Ud2VlbiA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvVHdlZW4nKTtcblxudmFyIF9Ud2VlbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Ud2Vlbik7XG5cbnZhciBfcHJlc2V0RWFzaW5nID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9lYXNpbmcvcHJlc2V0LWVhc2luZycpO1xuXG52YXIgX3ByZXNldEVhc2luZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmVzZXRFYXNpbmcpO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuL2NhbGMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLypcbiAgICBAcGFyYW0gW2FycmF5XVxuICAgICAgICBTZXF1ZW50aWFsIGFycmF5IG9mIHR3ZWVucywgZWFjaCBpdGVtIGNhbiBiZSBhIHR3ZWVuIG9yIGRlZmluaXRpb24gb2JqOlxuXG4gICAgICAgIFtcbiAgICAgICAgICAgIG5ldyBUd2VlbigpLFxuICAgICAgICAgICAgc3RhZ2dlcigpLFxuICAgICAgICAgICAgdGltZWxpbmUoKSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0d2VlbjogbmV3IFR3ZWVuKCksXG4gICAgICAgICAgICAgICAgYXQ6IDEwMCxcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IFwiKz0xMDBcIlxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4qL1xudmFyIGFuYWx5emUgPSBmdW5jdGlvbiAoZGVmcykge1xuICAgIHZhciB0aW1lbGluZSA9IFtdO1xuICAgIHZhciBudW1EZWZzID0gZGVmcy5sZW5ndGg7XG4gICAgdmFyIGN1cnJlbnRQbGF5aGVhZCA9IDA7XG5cbiAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICB2YXIgZGVmID0gZGVmc1tpXTtcbiAgICAgICAgdmFyIGRlZklzT2JqID0gZGVmLnR3ZWVuID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICB2YXIgdHdlZW4gPSBkZWZJc09iaiA/IGRlZi50d2VlbiA6IGRlZjtcblxuICAgICAgICBjdXJyZW50UGxheWhlYWQgKz0gZGVmSXNPYmogJiYgZGVmLm9mZnNldCA/IGRlZi5hdCB8fCAoMCwgX2NhbGMucmVsYXRpdmVWYWx1ZSkoY3VycmVudFBsYXloZWFkLCBkZWYub2Zmc2V0KSA6IDA7XG5cbiAgICAgICAgdmFyIGR1cmF0aW9uID0gMDtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHR3ZWVuLnZhbHVlcykge1xuICAgICAgICAgICAgaWYgKHR3ZWVuLnZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gdHdlZW4udmFsdWVzW2tleV07XG4gICAgICAgICAgICAgICAgZHVyYXRpb24gPSBNYXRoLm1heChkdXJhdGlvbiwgdmFsdWUuZHVyYXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGltZWxpbmUucHVzaCh7XG4gICAgICAgICAgICBmcm9tOiBjdXJyZW50UGxheWhlYWQsXG4gICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICAgICAgICBmaXJlOiBmdW5jdGlvbiAodGltZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0d2Vlbi5zZWVrVGltZSh0aW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY3VycmVudFBsYXloZWFkICs9IHR3ZWVuLmR1cmF0aW9uO1xuICAgIH07XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bURlZnM7IGkrKykge1xuICAgICAgICBfbG9vcChpKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyB0b3RhbFRpbWU6IGN1cnJlbnRQbGF5aGVhZCwgdGltZWxpbmU6IHRpbWVsaW5lIH07XG59O1xuXG52YXIgc2V0VHdlZW5zID0gZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgdGltZWxpbmUgPSBfcmVmLnRpbWVsaW5lO1xuICAgIHZhciB0aW1lbGluZUxlbmd0aCA9IF9yZWYudGltZWxpbmVMZW5ndGg7XG4gICAgdmFyIHZhbHVlcyA9IF9yZWYudmFsdWVzO1xuICAgIHZhciBkdXJhdGlvbiA9IF9yZWYuZHVyYXRpb247XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRpbWVsaW5lTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIF90d2VlbiA9IHRpbWVsaW5lW2ldO1xuICAgICAgICB2YXIgdHdlZW5UaW1lID0gdmFsdWVzLnAuY3VycmVudCAqIGR1cmF0aW9uIC0gX3R3ZWVuLmZyb207XG5cbiAgICAgICAgaWYgKHR3ZWVuVGltZSA+PSAtNTAgJiYgdHdlZW5UaW1lIDw9IF90d2Vlbi5kdXJhdGlvbiArIDUwKSB7XG4gICAgICAgICAgICBfdHdlZW4uZmlyZSh0d2VlblRpbWUpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZnVuY3Rpb24gdGltZWxpbmUoZGVmKSB7XG4gICAgdmFyIHByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMV07XG5cbiAgICB2YXIgX2FuYWx5emUgPSBhbmFseXplKGRlZik7XG5cbiAgICB2YXIgdG90YWxUaW1lID0gX2FuYWx5emUudG90YWxUaW1lO1xuICAgIHZhciB0aW1lbGluZSA9IF9hbmFseXplLnRpbWVsaW5lO1xuXG4gICAgcmV0dXJuIG5ldyBfVHdlZW4yLmRlZmF1bHQoX2V4dGVuZHMoe1xuICAgICAgICBlYXNlOiBfcHJlc2V0RWFzaW5nMi5kZWZhdWx0LmxpbmVhclxuICAgIH0sIHByb3BzLCB7XG4gICAgICAgIGR1cmF0aW9uOiB0b3RhbFRpbWUsXG4gICAgICAgIHZhbHVlczoge1xuICAgICAgICAgICAgcDogMVxuICAgICAgICB9LFxuICAgICAgICB0aW1lbGluZTogdGltZWxpbmUsXG4gICAgICAgIHRpbWVsaW5lTGVuZ3RoOiB0aW1lbGluZS5sZW5ndGgsXG4gICAgICAgIG9uUmVuZGVyOiBzZXRUd2VlbnNcbiAgICB9KSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12ZEdsdFpXeHBibVV1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdhMEpCSzBSM1FqczdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdRVUUxUTNoQ0xFbEJRVTBzVlVGQlZTeFZRVUZETEVsQlFVUXNSVUZCVlR0QlFVTjBRaXhSUVVGTkxGZEJRVmNzUlVGQldDeERRVVJuUWp0QlFVVjBRaXhSUVVGTkxGVkJRVlVzUzBGQlN5eE5RVUZNTEVOQlJrMDdRVUZIZEVJc1VVRkJTU3hyUWtGQmEwSXNRMEZCYkVJc1EwRklhMEk3T3pCQ1FVdGlPMEZCUTB3c1dVRkJUU3hOUVVGTkxFdEJRVXNzUTBGQlRDeERRVUZPTzBGQlEwNHNXVUZCVFN4WFFVRlhMRWxCUVVrc1MwRkJTaXhIUVVGWkxFbEJRVm9zUjBGQmJVSXNTMEZCYmtJN1FVRkRha0lzV1VGQlRTeFJRVUZSTEZkQlFXRXNTVUZCU1N4TFFVRktMRWRCUVZrc1IwRkJla0k3TzBGQlJXUXNNa0pCUVc5Q0xGRkJRVU1zU1VGQldTeEpRVUZKTEUxQlFVb3NSMEZETjBJc1NVRkJTU3hGUVVGS0xFbEJRVlVzZVVKQlFXTXNaVUZCWkN4RlFVRXJRaXhKUVVGSkxFMUJRVW9zUTBGQmVrTXNSMEZCZFVRc1EwRkVka003TzBGQlIzQkNMRmxCUVVrc1YwRkJWeXhEUVVGWU8wRkJRMG9zWVVGQlN5eEpRVUZKTEVkQlFVb3NTVUZCVnl4TlFVRk5MRTFCUVU0c1JVRkJZenRCUVVNeFFpeG5Ra0ZCU1N4TlFVRk5MRTFCUVU0c1EwRkJZU3hqUVVGaUxFTkJRVFJDTEVkQlFUVkNMRU5CUVVvc1JVRkJjME03UVVGRGJFTXNiMEpCUVUwc1VVRkJVU3hOUVVGTkxFMUJRVTRzUTBGQllTeEhRVUZpTEVOQlFWSXNRMEZFTkVJN1FVRkZiRU1zTWtKQlFWY3NTMEZCU3l4SFFVRk1MRU5CUVZNc1VVRkJWQ3hGUVVGdFFpeE5RVUZOTEZGQlFVNHNRMEZCT1VJc1EwRkdhME03WVVGQmRFTTdVMEZFU2pzN1FVRlBRU3hwUWtGQlV5eEpRVUZVTEVOQlFXTTdRVUZEVml4clFrRkJUU3hsUVVGT08wRkJRMEVzYzBKQlFWVXNVVUZCVmp0QlFVTkJMR3RDUVVGTkxGVkJRVU1zU1VGQlJEdDFRa0ZCVlN4TlFVRk5MRkZCUVU0c1EwRkJaU3hKUVVGbU8yRkJRVlk3VTBGSVZqczdRVUZOUVN3eVFrRkJiVUlzVFVGQlRTeFJRVUZPTzAxQk0wSkVPenRCUVV0MFFpeFRRVUZMTEVsQlFVa3NTVUZCU1N4RFFVRktMRVZCUVU4c1NVRkJTU3hQUVVGS0xFVkJRV0VzUjBGQk4wSXNSVUZCYTBNN1kwRkJla0lzUjBGQmVVSTdTMEZCYkVNN08wRkJlVUpCTEZkQlFVOHNSVUZCUlN4WFFVRlhMR1ZCUVZnc1JVRkJORUlzYTBKQlFUbENMRVZCUVZBc1EwRTVRbk5DTzBOQlFWWTdPMEZCYVVOb1FpeEpRVUZOTEZsQlFWa3NaMEpCUVc5RU8xRkJRV3BFTEhsQ1FVRnBSRHRSUVVGMlF5eHhRMEZCZFVNN1VVRkJka0lzY1VKQlFYVkNPMUZCUVdZc2VVSkJRV1U3TzBGQlEyeEZMRk5CUVVzc1NVRkJTU3hKUVVGSkxFTkJRVW9zUlVGQlR5eEpRVUZKTEdOQlFVb3NSVUZCYjBJc1IwRkJjRU1zUlVGQmVVTTdRVUZEY2tNc1dVRkJUU3hUUVVGUkxGTkJRVk1zUTBGQlZDeERRVUZTTEVOQlJDdENPMEZCUlhKRExGbEJRVTBzV1VGQldTeE5RVUZETEVOQlFVOHNRMEZCVUN4RFFVRlRMRTlCUVZRc1IwRkJiVUlzVVVGQmJrSXNSMEZCSzBJc1QwRkJUU3hKUVVGT0xFTkJSbUk3TzBGQlNYSkRMRmxCUVVrc1lVRkJZU3hEUVVGRExFVkJRVVFzU1VGQlR5eGhRVUZoTEU5QlFVMHNVVUZCVGl4SFFVRnBRaXhGUVVGcVFpeEZRVUZ4UWp0QlFVTjBSQ3h0UWtGQlRTeEpRVUZPTEVOQlFWY3NVMEZCV0N4RlFVUnpSRHRUUVVFeFJEdExRVXBLTzBOQlJHTTdPMEZCVjBnc1UwRkJVeXhSUVVGVUxFTkJRV3RDTEVkQlFXeENMRVZCUVcxRE8xRkJRVm9zT0VSQlFWRXNhMEpCUVVrN08yMUNRVU5rTEZGQlFWRXNSMEZCVWl4RlFVUmpPenRSUVVOMFF5d3JRa0ZFYzBNN1VVRkRNMElzTmtKQlJESkNPenRCUVVjNVF5eFhRVUZQTzBGQlEwZ3NZMEZCVFN4MVFrRkJUeXhOUVVGUU8wOUJRMGc3UVVGRFNDeHJRa0ZCVlN4VFFVRldPMEZCUTBFc1owSkJRVkU3UVVGRFNpeGxRVUZITEVOQlFVZzdVMEZFU2p0QlFVZEJMR3RDUVVGVkxGRkJRVlk3UVVGRFFTeDNRa0ZCWjBJc1UwRkJVeXhOUVVGVU8wRkJRMmhDTEd0Q1FVRlZMRk5CUVZZN1RVRlVSeXhEUVVGUUxFTkJTRGhETzBOQlFXNURJaXdpWm1sc1pTSTZJblJwYldWc2FXNWxMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwTDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0JVZDJWbGJpQm1jbTl0SUNjdUxpOWhZM1JwYjI1ekwxUjNaV1Z1Snp0Y2JtbHRjRzl5ZENCbFlYTnBibWNnWm5KdmJTQW5MaTR2WVdOMGFXOXVjeTlsWVhOcGJtY3ZjSEpsYzJWMExXVmhjMmx1WnljN1hHNXBiWEJ2Y25RZ2V5QnlaV3hoZEdsMlpWWmhiSFZsSUgwZ1puSnZiU0FuTGk5allXeGpKenRjYmx4dUx5cGNiaUFnSUNCQWNHRnlZVzBnVzJGeWNtRjVYVnh1SUNBZ0lDQWdJQ0JUWlhGMVpXNTBhV0ZzSUdGeWNtRjVJRzltSUhSM1pXVnVjeXdnWldGamFDQnBkR1Z0SUdOaGJpQmlaU0JoSUhSM1pXVnVJRzl5SUdSbFptbHVhWFJwYjI0Z2IySnFPbHh1WEc0Z0lDQWdJQ0FnSUZ0Y2JpQWdJQ0FnSUNBZ0lDQWdJRzVsZHlCVWQyVmxiaWdwTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdjM1JoWjJkbGNpZ3BMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2RHbHRaV3hwYm1Vb0tTeGNiaUFnSUNBZ0lDQWdJQ0FnSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGQyVmxiam9nYm1WM0lGUjNaV1Z1S0Nrc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1lYUTZJREV3TUN4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCdlptWnpaWFE2SUZ3aUt6MHhNREJjSWx4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0JkWEc0cUwxeHVZMjl1YzNRZ1lXNWhiSGw2WlNBOUlDaGtaV1p6S1NBOVBpQjdYRzRnSUNBZ1kyOXVjM1FnZEdsdFpXeHBibVVnUFNCYlhUdGNiaUFnSUNCamIyNXpkQ0J1ZFcxRVpXWnpJRDBnWkdWbWN5NXNaVzVuZEdnN1hHNGdJQ0FnYkdWMElHTjFjbkpsYm5SUWJHRjVhR1ZoWkNBOUlEQTdYRzVjYmlBZ0lDQm1iM0lnS0d4bGRDQnBJRDBnTURzZ2FTQThJRzUxYlVSbFpuTTdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCa1pXWWdQU0JrWldaelcybGRPMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQmtaV1pKYzA5aWFpQTlJR1JsWmk1MGQyVmxiaUEvSUhSeWRXVWdPaUJtWVd4elpUdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2RIZGxaVzRnUFNBb1pHVm1TWE5QWW1vcElEOGdaR1ZtTG5SM1pXVnVJRG9nWkdWbU8xeHVYRzRnSUNBZ0lDQWdJR04xY25KbGJuUlFiR0Y1YUdWaFpDQXJQU0FvS0dSbFprbHpUMkpxSUNZbUlHUmxaaTV2Wm1aelpYUXBJRDljYmlBZ0lDQWdJQ0FnSUNBZ0lHUmxaaTVoZENCOGZDQnlaV3hoZEdsMlpWWmhiSFZsS0dOMWNuSmxiblJRYkdGNWFHVmhaQ3dnWkdWbUxtOW1abk5sZENrZ09pQXdLVHRjYmx4dUlDQWdJQ0FnSUNCc1pYUWdaSFZ5WVhScGIyNGdQU0F3TzF4dUlDQWdJQ0FnSUNCbWIzSWdLR3hsZENCclpYa2dhVzRnZEhkbFpXNHVkbUZzZFdWektTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9kSGRsWlc0dWRtRnNkV1Z6TG1oaGMwOTNibEJ5YjNCbGNuUjVLR3RsZVNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCMllXeDFaU0E5SUhSM1pXVnVMblpoYkhWbGMxdHJaWGxkTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdSMWNtRjBhVzl1SUQwZ1RXRjBhQzV0WVhnb1pIVnlZWFJwYjI0c0lIWmhiSFZsTG1SMWNtRjBhVzl1S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lIUnBiV1ZzYVc1bExuQjFjMmdvZTF4dUlDQWdJQ0FnSUNBZ0lDQWdabkp2YlRvZ1kzVnljbVZ1ZEZCc1lYbG9aV0ZrTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdaSFZ5WVhScGIyNDZJR1IxY21GMGFXOXVMRnh1SUNBZ0lDQWdJQ0FnSUNBZ1ptbHlaVG9nS0hScGJXVXBJRDArSUhSM1pXVnVMbk5sWld0VWFXMWxLSFJwYldVcFhHNGdJQ0FnSUNBZ0lIMHBPMXh1WEc0Z0lDQWdJQ0FnSUdOMWNuSmxiblJRYkdGNWFHVmhaQ0FyUFNCMGQyVmxiaTVrZFhKaGRHbHZianRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnlaWFIxY200Z2V5QjBiM1JoYkZScGJXVTZJR04xY25KbGJuUlFiR0Y1YUdWaFpDd2dkR2x0Wld4cGJtVWdmVHRjYm4wN1hHNWNibU52Ym5OMElITmxkRlIzWldWdWN5QTlJQ2g3SUhScGJXVnNhVzVsTENCMGFXMWxiR2x1WlV4bGJtZDBhQ3dnZG1Gc2RXVnpMQ0JrZFhKaGRHbHZiaUI5S1NBOVBpQjdYRzRnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQjBhVzFsYkdsdVpVeGxibWQwYURzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJSFIzWldWdUlEMGdkR2x0Wld4cGJtVmJhVjA3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJSFIzWldWdVZHbHRaU0E5SUNoMllXeDFaWE11Y0M1amRYSnlaVzUwSUNvZ1pIVnlZWFJwYjI0cElDMGdkSGRsWlc0dVpuSnZiVHRjYmx4dUlDQWdJQ0FnSUNCcFppQW9kSGRsWlc1VWFXMWxJRDQ5SUMwMU1DQW1KaUIwZDJWbGJsUnBiV1VnUEQwZ2RIZGxaVzR1WkhWeVlYUnBiMjRnS3lBMU1Da2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RIZGxaVzR1Wm1seVpTaDBkMlZsYmxScGJXVXBPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVnh1ZlR0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1puVnVZM1JwYjI0Z2RHbHRaV3hwYm1Vb1pHVm1MQ0J3Y205d2N5QTlJSHQ5S1NCN1hHNGdJQ0FnWTI5dWMzUWdleUIwYjNSaGJGUnBiV1VzSUhScGJXVnNhVzVsSUgwZ1BTQmhibUZzZVhwbEtHUmxaaWs3WEc1Y2JpQWdJQ0J5WlhSMWNtNGdibVYzSUZSM1pXVnVLSHRjYmlBZ0lDQWdJQ0FnWldGelpUb2daV0Z6YVc1bkxteHBibVZoY2l4Y2JpQWdJQ0FnSUNBZ0xpNHVjSEp2Y0hNc1hHNGdJQ0FnSUNBZ0lHUjFjbUYwYVc5dU9pQjBiM1JoYkZScGJXVXNYRzRnSUNBZ0lDQWdJSFpoYkhWbGN6b2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NEb2dNVnh1SUNBZ0lDQWdJQ0I5TEZ4dUlDQWdJQ0FnSUNCMGFXMWxiR2x1WlRvZ2RHbHRaV3hwYm1Vc1hHNGdJQ0FnSUNBZ0lIUnBiV1ZzYVc1bFRHVnVaM1JvT2lCMGFXMWxiR2x1WlM1c1pXNW5kR2dzWEc0Z0lDQWdJQ0FnSUc5dVVtVnVaR1Z5T2lCelpYUlVkMlZsYm5OY2JpQWdJQ0I5S1R0Y2JuMGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvdGltZWxpbmUuanNcbiAqKiBtb2R1bGUgaWQgPSAxMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8qXG4gICAgIyBBZGFwdGVyIGNsYXNzXG4gICAgIyMgUHJvdmlkZXMgYSBnZXR0ZXIvc2V0dGVyIHdyYXBwZXIgYW5kIHByb3BlcnR5IGNhY2hlIGZvciBkaWZmZXJlbnQgZWxlbWVudCB0eXBlc1xuXG4gICAgT3ZlcnJpZGUgYGdldHRlcmAgYW5kIGBzZXR0ZXJgIHRvIHJlaW1wbGVtZW50IHRoZSBpbnRlcmZhY2UgZm9yIG5ldyBlbGVtZW50IHR5cGVzLlxuXG4gICAgU2V0IGBFeHRlbmRlZC5wcm90b3R5cGUuc3RhdGVNYXBgIGFzIGFuIG9iamVjdCBrZXkvdmFsdWUgbWFwIHRvIHRyYW5zbGF0ZSBpbmNvbWluZyBrZXlzIHRvXG4gICAgQVBJLXNwZWNpZmljIGtleXMuIEZvciBpbnN0YW5jZSwgeyB4OiAndHJhbnNsYXRlWCcgfS4gXG5cbiAgICBTZXQgYEV4dGVuZGVkLnByb3RvdHlwZS52YWx1ZVR5cGVNYXBgIGFzIGFuIG9iamVjdCBrZXkvdmFsdWUgbWFwIHRvIHJldHVybiBhIHZhbHVlIHR5cGUgd2l0aFxuICAgIGBnZXRWYWx1ZVR5cGUoa2V5KWAgKGtleSB3aWxsIGJlIG1hcHBlZCBhY2NvcmRpbmcgdG8gYHN0YXRlTWFwYClcbiovXG5cbnZhciBBZGFwdGVyID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEFkYXB0ZXIoZWxlbWVudCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQWRhcHRlcik7XG5cbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5jYWNoZSA9IHt9O1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIEdldCBlbGVtZW50IHByb3BlcnR5XG4gICAgICAgICBAcGFyYW0gW3N0cmluZ106IEtleSB0byByZWFkXG4gICAgICAgIEBwYXJhbSBbYm9vbGVhbl06IElmIGB0cnVlYCwgd2lsbCBvdmVycmlkZSBjYWNoZWQgcHJvcGVydHlcbiAgICAqL1xuXG4gICAgQWRhcHRlci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gZ2V0KGtleSwgcmVmcmVzaCkge1xuICAgICAgICB2YXIgbWFwcGVkS2V5ID0gdGhpcy5tYXBTdGF0ZUtleShrZXkpO1xuXG4gICAgICAgIGlmIChyZWZyZXNoIHx8ICF0aGlzLmNhY2hlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIHZhciBhY3R1YWxWYWx1ZSA9IHRoaXMuZ2V0dGVyKG1hcHBlZEtleSk7XG5cbiAgICAgICAgICAgIGlmIChhY3R1YWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVbbWFwcGVkS2V5XSA9IGFjdHVhbFZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVbbWFwcGVkS2V5XTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKlxuICAgICAgICBTZXQgZWxlbWVudCBwcm9wZXJ0aWVzXG4gICAgICAgICBAcGFyYW0gW29iamVjdF06IEtleS92YWx1ZSBwcm9wZXJ0aWVzIHRvIHNldFxuICAgICovXG5cbiAgICBBZGFwdGVyLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiBzZXQocHJvcHMpIHtcbiAgICAgICAgLy8gVHJhbnNsYXRlIHByb3BzXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wcykge1xuICAgICAgICAgICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWFwcGVkS2V5ID0gdGhpcy5tYXBTdGF0ZUtleShrZXkpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVbbWFwcGVkS2V5XSA9IHByb3BzW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5zZXR0ZXIodGhpcy5jYWNoZSk7XG4gICAgfTtcblxuICAgIC8qXG4gICAgICAgIE92ZXJyaWRhYmxlIGVsZW1lbnQgZ2V0dGVyIC0gZGVmYXVsdCBmb3IgcGxhaW4gb2JqZWN0IFxuICAgICovXG5cbiAgICBBZGFwdGVyLnByb3RvdHlwZS5nZXR0ZXIgPSBmdW5jdGlvbiBnZXR0ZXIoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnRba2V5XTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgT3ZlcnJpZGFibGUgZWxlbWVudCBzZXR0ZXIgLSBkZWZhdWx0IGZvciBwbGFpbiBvYmplY3RcbiAgICAqL1xuXG4gICAgQWRhcHRlci5wcm90b3R5cGUuc2V0dGVyID0gZnVuY3Rpb24gc2V0dGVyKHByb3BzKSB7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wcykge1xuICAgICAgICAgICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRba2V5XSA9IHByb3BzW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgTWFwIHN0YXRlIGtleSBhcyBwZXIgYHN0YXRlTWFwYCwgaWYgcHJlc2VudFxuICAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBLZXkgdG8gbWFwXG4gICAgICAgIEByZXR1cm4gW3N0cmluZ106IE1hcHBlZCBrZXksIG9yIG9yaWdpbmFsIGtleSBpZiBub25lIGZvdW5kXG4gICAgKi9cblxuICAgIEFkYXB0ZXIucHJvdG90eXBlLm1hcFN0YXRlS2V5ID0gZnVuY3Rpb24gbWFwU3RhdGVLZXkoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlTWFwID8gdGhpcy5zdGF0ZU1hcFtrZXldIHx8IGtleSA6IGtleTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgR2V0IHZhbHVlVHlwZSBvZiBwcm92aWRlZCBrZXlcbiAgICAgICAgIEBwYXJhbSBbc3RyaW5nXTogTmFtZSBvZiBwcm9wZXJ0eSB0byBtYXBcbiAgICAgICAgQHJldHVybiBbdmFsdWVUeXBlXTogVmFsdWUgdHlwZSBvZiBwcm9wZXJ0eVxuICAgICovXG5cbiAgICBBZGFwdGVyLnByb3RvdHlwZS5nZXRWYWx1ZVR5cGUgPSBmdW5jdGlvbiBnZXRWYWx1ZVR5cGUoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlVHlwZU1hcCA/IHRoaXMudmFsdWVUeXBlTWFwW3RoaXMubWFwU3RhdGVLZXkoa2V5KV0gOiBmYWxzZTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIEFkYXB0ZXI7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgcmV0dXJuIG5ldyBBZGFwdGVyKGVsZW1lbnQpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFpHRndkR1Z5TDJGa1lYQjBaWEl1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3T3pzN096czdPenM3T3p0SlFWbE5PMEZCUTBZc1lVRkVSU3hQUVVOR0xFTkJRVmtzVDBGQldpeEZRVUZ4UWpzNFFrRkVia0lzVTBGRGJVSTdPMEZCUTJwQ0xHRkJRVXNzVDBGQlRDeEhRVUZsTEU5QlFXWXNRMEZFYVVJN1FVRkZha0lzWVVGQlN5eExRVUZNTEVkQlFXRXNSVUZCWWl4RFFVWnBRanRMUVVGeVFqczdPenM3T3pzN1FVRkVSU3h6UWtGWlJpeHRRa0ZCU1N4TFFVRkxMRk5CUVZNN1FVRkRaQ3haUVVGTkxGbEJRVmtzUzBGQlN5eFhRVUZNTEVOQlFXbENMRWRCUVdwQ0xFTkJRVm9zUTBGRVVUczdRVUZIWkN4WlFVRkpMRmRCUVZjc1EwRkJReXhMUVVGTExFdEJRVXdzUTBGQlZ5eGpRVUZZTEVOQlFUQkNMRWRCUVRGQ0xFTkJRVVFzUlVGQmFVTTdRVUZETlVNc1owSkJRVTBzWTBGQll5eExRVUZMTEUxQlFVd3NRMEZCV1N4VFFVRmFMRU5CUVdRc1EwRkVjME03TzBGQlJ6VkRMR2RDUVVGSkxHZENRVUZuUWl4VFFVRm9RaXhGUVVFeVFqdEJRVU16UWl4MVFrRkJUeXhMUVVGTExFdEJRVXdzUTBGQlZ5eFRRVUZZTEVsQlFYZENMRmRCUVhoQ0xFTkJSRzlDTzJGQlFTOUNPMU5CU0Vvc1RVRk5UenRCUVVOSUxHMUNRVUZQTEV0QlFVc3NTMEZCVEN4RFFVRlhMRk5CUVZnc1EwRkJVQ3hEUVVSSE8xTkJUbEE3T3pzN096czdPMEZCWmtZc2MwSkJLMEpHTEcxQ1FVRkpMRTlCUVU4N08wRkJSVkFzWVVGQlN5eEpRVUZKTEVkQlFVb3NTVUZCVnl4TFFVRm9RaXhGUVVGMVFqdEJRVU51UWl4blFrRkJTU3hOUVVGTkxHTkJRVTRzUTBGQmNVSXNSMEZCY2tJc1EwRkJTaXhGUVVFclFqdEJRVU16UWl4dlFrRkJUU3haUVVGWkxFdEJRVXNzVjBGQlRDeERRVUZwUWl4SFFVRnFRaXhEUVVGYUxFTkJSSEZDTzBGQlJUTkNMSEZDUVVGTExFdEJRVXdzUTBGQlZ5eFRRVUZZTEVsQlFYZENMRTFCUVUwc1IwRkJUaXhEUVVGNFFpeERRVVl5UWp0aFFVRXZRanRUUVVSS096dEJRVTlCTEdWQlFVOHNTMEZCU3l4TlFVRk1MRU5CUVZrc1MwRkJTeXhMUVVGTUxFTkJRVzVDTEVOQlZFODdPenM3T3pzN1FVRXZRbFFzYzBKQk9FTkdMSGxDUVVGUExFdEJRVXM3UVVGRFVpeGxRVUZQTEV0QlFVc3NUMEZCVEN4RFFVRmhMRWRCUVdJc1EwRkJVQ3hEUVVSUk96czdPenM3TzBGQk9VTldMSE5DUVhGRVJpeDVRa0ZCVHl4UFFVRlBPMEZCUTFZc1lVRkJTeXhKUVVGSkxFZEJRVW9zU1VGQlZ5eExRVUZvUWl4RlFVRjFRanRCUVVOdVFpeG5Ra0ZCU1N4TlFVRk5MR05CUVU0c1EwRkJjVUlzUjBGQmNrSXNRMEZCU2l4RlFVRXJRanRCUVVNelFpeHhRa0ZCU3l4UFFVRk1MRU5CUVdFc1IwRkJZaXhKUVVGdlFpeE5RVUZOTEVkQlFVNHNRMEZCY0VJc1EwRkVNa0k3WVVGQkwwSTdVMEZFU2pzN096czdPenM3TzBGQmRFUkdMSE5DUVcxRlJpeHRRMEZCV1N4TFFVRkxPMEZCUTJJc1pVRkJUeXhKUVVGRExFTkJRVXNzVVVGQlRDeEhRVUZwUWl4TFFVRkxMRkZCUVV3c1EwRkJZeXhIUVVGa0xFdEJRWE5DTEVkQlFYUkNMRWRCUVRSQ0xFZEJRVGxETEVOQlJFMDdPenM3T3pzN096dEJRVzVGWml4elFrRTJSVVlzY1VOQlFXRXNTMEZCU3p0QlFVTmtMR1ZCUVU4c1NVRkJReXhEUVVGTExGbEJRVXdzUjBGQmNVSXNTMEZCU3l4WlFVRk1MRU5CUVd0Q0xFdEJRVXNzVjBGQlRDeERRVUZwUWl4SFFVRnFRaXhEUVVGc1FpeERRVUYwUWl4SFFVRnBSU3hMUVVGcVJTeERRVVJQT3pzN1YwRTNSV2hDT3pzN2EwSkJhMFpUTEZWQlFVTXNUMEZCUkR0WFFVRmhMRWxCUVVrc1QwRkJTaXhEUVVGWkxFOUJRVm83UTBGQllpSXNJbVpwYkdVaU9pSmhaR0Z3ZEdWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaThxWEc0Z0lDQWdJeUJCWkdGd2RHVnlJR05zWVhOelhHNGdJQ0FnSXlNZ1VISnZkbWxrWlhNZ1lTQm5aWFIwWlhJdmMyVjBkR1Z5SUhkeVlYQndaWElnWVc1a0lIQnliM0JsY25SNUlHTmhZMmhsSUdadmNpQmthV1ptWlhKbGJuUWdaV3hsYldWdWRDQjBlWEJsYzF4dVhHNGdJQ0FnVDNabGNuSnBaR1VnWUdkbGRIUmxjbUFnWVc1a0lHQnpaWFIwWlhKZ0lIUnZJSEpsYVcxd2JHVnRaVzUwSUhSb1pTQnBiblJsY21aaFkyVWdabTl5SUc1bGR5QmxiR1Z0Wlc1MElIUjVjR1Z6TGx4dVhHNGdJQ0FnVTJWMElHQkZlSFJsYm1SbFpDNXdjbTkwYjNSNWNHVXVjM1JoZEdWTllYQmdJR0Z6SUdGdUlHOWlhbVZqZENCclpYa3ZkbUZzZFdVZ2JXRndJSFJ2SUhSeVlXNXpiR0YwWlNCcGJtTnZiV2x1WnlCclpYbHpJSFJ2WEc0Z0lDQWdRVkJKTFhOd1pXTnBabWxqSUd0bGVYTXVJRVp2Y2lCcGJuTjBZVzVqWlN3Z2V5QjRPaUFuZEhKaGJuTnNZWFJsV0NjZ2ZTNGdYRzVjYmlBZ0lDQlRaWFFnWUVWNGRHVnVaR1ZrTG5CeWIzUnZkSGx3WlM1MllXeDFaVlI1Y0dWTllYQmdJR0Z6SUdGdUlHOWlhbVZqZENCclpYa3ZkbUZzZFdVZ2JXRndJSFJ2SUhKbGRIVnliaUJoSUhaaGJIVmxJSFI1Y0dVZ2QybDBhRnh1SUNBZ0lHQm5aWFJXWVd4MVpWUjVjR1VvYTJWNUtXQWdLR3RsZVNCM2FXeHNJR0psSUcxaGNIQmxaQ0JoWTJOdmNtUnBibWNnZEc4Z1lITjBZWFJsVFdGd1lDbGNiaW92WEc1amJHRnpjeUJCWkdGd2RHVnlJSHRjYmlBZ0lDQmpiMjV6ZEhKMVkzUnZjaWhsYkdWdFpXNTBLU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaV3hsYldWdWRDQTlJR1ZzWlcxbGJuUTdYRzRnSUNBZ0lDQWdJSFJvYVhNdVkyRmphR1VnUFNCN2ZUdGNiaUFnSUNCOVhHNWNiaUFnSUNBdktseHVJQ0FnSUNBZ0lDQkhaWFFnWld4bGJXVnVkQ0J3Y205d1pYSjBlVnh1WEc0Z0lDQWdJQ0FnSUVCd1lYSmhiU0JiYzNSeWFXNW5YVG9nUzJWNUlIUnZJSEpsWVdSY2JpQWdJQ0FnSUNBZ1FIQmhjbUZ0SUZ0aWIyOXNaV0Z1WFRvZ1NXWWdZSFJ5ZFdWZ0xDQjNhV3hzSUc5MlpYSnlhV1JsSUdOaFkyaGxaQ0J3Y205d1pYSjBlVnh1SUNBZ0lDb3ZYRzRnSUNBZ1oyVjBLR3RsZVN3Z2NtVm1jbVZ6YUNrZ2UxeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCdFlYQndaV1JMWlhrZ1BTQjBhR2x6TG0xaGNGTjBZWFJsUzJWNUtHdGxlU2s3WEc1Y2JpQWdJQ0FnSUNBZ2FXWWdLSEpsWm5KbGMyZ2dmSHdnSVhSb2FYTXVZMkZqYUdVdWFHRnpUM2R1VUhKdmNHVnlkSGtvYTJWNUtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnWVdOMGRXRnNWbUZzZFdVZ1BTQjBhR2x6TG1kbGRIUmxjaWh0WVhCd1pXUkxaWGtwTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb1lXTjBkV0ZzVm1Gc2RXVWdJVDA5SUhWdVpHVm1hVzVsWkNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpMbU5oWTJobFcyMWhjSEJsWkV0bGVWMGdQU0JoWTNSMVlXeFdZV3gxWlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpMbU5oWTJobFcyMWhjSEJsWkV0bGVWMDdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmlBZ0lDQXZLbHh1SUNBZ0lDQWdJQ0JUWlhRZ1pXeGxiV1Z1ZENCd2NtOXdaWEowYVdWelhHNWNiaUFnSUNBZ0lDQWdRSEJoY21GdElGdHZZbXBsWTNSZE9pQkxaWGt2ZG1Gc2RXVWdjSEp2Y0dWeWRHbGxjeUIwYnlCelpYUmNiaUFnSUNBcUwxeHVJQ0FnSUhObGRDaHdjbTl3Y3lrZ2UxeHVJQ0FnSUNBZ0lDQXZMeUJVY21GdWMyeGhkR1VnY0hKdmNITmNiaUFnSUNBZ0lDQWdabTl5SUNoc1pYUWdhMlY1SUdsdUlIQnliM0J6S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2NISnZjSE11YUdGelQzZHVVSEp2Y0dWeWRIa29hMlY1S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUcxaGNIQmxaRXRsZVNBOUlIUm9hWE11YldGd1UzUmhkR1ZMWlhrb2EyVjVLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtTmhZMmhsVzIxaGNIQmxaRXRsZVYwZ1BTQndjbTl3YzF0clpYbGRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNdWMyVjBkR1Z5S0hSb2FYTXVZMkZqYUdVcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUM4cVhHNGdJQ0FnSUNBZ0lFOTJaWEp5YVdSaFlteGxJR1ZzWlcxbGJuUWdaMlYwZEdWeUlDMGdaR1ZtWVhWc2RDQm1iM0lnY0d4aGFXNGdiMkpxWldOMElGeHVJQ0FnSUNvdlhHNGdJQ0FnWjJWMGRHVnlLR3RsZVNrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTVsYkdWdFpXNTBXMnRsZVYwN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHlwY2JpQWdJQ0FnSUNBZ1QzWmxjbkpwWkdGaWJHVWdaV3hsYldWdWRDQnpaWFIwWlhJZ0xTQmtaV1poZFd4MElHWnZjaUJ3YkdGcGJpQnZZbXBsWTNSY2JpQWdJQ0FxTDF4dUlDQWdJSE5sZEhSbGNpaHdjbTl3Y3lrZ2UxeHVJQ0FnSUNBZ0lDQm1iM0lnS0d4bGRDQnJaWGtnYVc0Z2NISnZjSE1wSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNod2NtOXdjeTVvWVhOUGQyNVFjbTl3WlhKMGVTaHJaWGtwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVsYkdWdFpXNTBXMnRsZVYwZ1BTQndjbTl3YzF0clpYbGRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5cGNiaUFnSUNBZ0lDQWdUV0Z3SUhOMFlYUmxJR3RsZVNCaGN5QndaWElnWUhOMFlYUmxUV0Z3WUN3Z2FXWWdjSEpsYzJWdWRGeHVYRzRnSUNBZ0lDQWdJRUJ3WVhKaGJTQmJjM1J5YVc1blhUb2dTMlY1SUhSdklHMWhjRnh1SUNBZ0lDQWdJQ0JBY21WMGRYSnVJRnR6ZEhKcGJtZGRPaUJOWVhCd1pXUWdhMlY1TENCdmNpQnZjbWxuYVc1aGJDQnJaWGtnYVdZZ2JtOXVaU0JtYjNWdVpGeHVJQ0FnSUNvdlhHNGdJQ0FnYldGd1UzUmhkR1ZMWlhrb2EyVjVLU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUFvZEdocGN5NXpkR0YwWlUxaGNDa2dQeUIwYUdsekxuTjBZWFJsVFdGd1cydGxlVjBnZkh3Z2EyVjVJRG9nYTJWNU8xeHVJQ0FnSUgxY2JseHVJQ0FnSUM4cVhHNGdJQ0FnSUNBZ0lFZGxkQ0IyWVd4MVpWUjVjR1VnYjJZZ2NISnZkbWxrWldRZ2EyVjVYRzVjYmlBZ0lDQWdJQ0FnUUhCaGNtRnRJRnR6ZEhKcGJtZGRPaUJPWVcxbElHOW1JSEJ5YjNCbGNuUjVJSFJ2SUcxaGNGeHVJQ0FnSUNBZ0lDQkFjbVYwZFhKdUlGdDJZV3gxWlZSNWNHVmRPaUJXWVd4MVpTQjBlWEJsSUc5bUlIQnliM0JsY25SNVhHNGdJQ0FnS2k5Y2JpQWdJQ0JuWlhSV1lXeDFaVlI1Y0dVb2EyVjVLU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUFvZEdocGN5NTJZV3gxWlZSNWNHVk5ZWEFwSUQ4Z2RHaHBjeTUyWVd4MVpWUjVjR1ZOWVhCYmRHaHBjeTV0WVhCVGRHRjBaVXRsZVNoclpYa3BYU0E2SUdaaGJITmxPMXh1SUNBZ0lIMWNibjFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnS0dWc1pXMWxiblFwSUQwK0lHNWxkeUJCWkdGd2RHVnlLR1ZzWlcxbGJuUXBPeUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9hZGFwdGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZ2V0dGVyID0gZ2V0dGVyO1xuZXhwb3J0cy5zZXR0ZXIgPSBzZXR0ZXI7XG5cbnZhciBfYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcicpO1xuXG52YXIgX2FkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWRhcHRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGdldHRlcihrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZShrZXkpO1xufVxuXG5mdW5jdGlvbiBzZXR0ZXIocHJvcHMpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBwcm9wc1trZXldKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICB2YXIgYXR0ckFkYXB0ZXIgPSAoMCwgX2FkYXB0ZXIyLmRlZmF1bHQpKGVsZW1lbnQpO1xuXG4gICAgYXR0ckFkYXB0ZXIuZ2V0dGVyID0gZ2V0dGVyO1xuICAgIGF0dHJBZGFwdGVyLnNldHRlciA9IHNldHRlcjtcblxuICAgIHJldHVybiBhdHRyQWRhcHRlcjtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwyRjBkSEl0WVdSaGNIUmxjaTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN1VVRkZaMEk3VVVGSlFUczdPenM3T3pzN1FVRktWQ3hUUVVGVExFMUJRVlFzUTBGQlowSXNSMEZCYUVJc1JVRkJjVUk3UVVGRGVFSXNWMEZCVHl4TFFVRkxMRTlCUVV3c1EwRkJZU3haUVVGaUxFTkJRVEJDTEVkQlFURkNMRU5CUVZBc1EwRkVkMEk3UTBGQmNrSTdPMEZCU1VFc1UwRkJVeXhOUVVGVUxFTkJRV2RDTEV0QlFXaENMRVZCUVhWQ08wRkJRekZDTEZOQlFVc3NTVUZCU1N4SFFVRktMRWxCUVZjc1MwRkJhRUlzUlVGQmRVSTdRVUZEYmtJc1dVRkJTU3hOUVVGTkxHTkJRVTRzUTBGQmNVSXNSMEZCY2tJc1EwRkJTaXhGUVVFclFqdEJRVU16UWl4cFFrRkJTeXhQUVVGTUxFTkJRV0VzV1VGQllpeERRVUV3UWl4SFFVRXhRaXhGUVVFclFpeE5RVUZOTEVkQlFVNHNRMEZCTDBJc1JVRkVNa0k3VTBGQkwwSTdTMEZFU2p0RFFVUkhPenRyUWtGUlVTeFZRVUZETEU5QlFVUXNSVUZCWVR0QlFVTjRRaXhSUVVGTkxHTkJRV01zZFVKQlFWRXNUMEZCVWl4RFFVRmtMRU5CUkd0Q096dEJRVWQ0UWl4blFrRkJXU3hOUVVGYUxFZEJRWEZDTEUxQlFYSkNMRU5CU0hkQ08wRkJTWGhDTEdkQ1FVRlpMRTFCUVZvc1IwRkJjVUlzVFVGQmNrSXNRMEZLZDBJN08wRkJUWGhDTEZkQlFVOHNWMEZCVUN4RFFVNTNRanREUVVGaUlpd2labWxzWlNJNkltRjBkSEl0WVdSaGNIUmxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnWVdSaGNIUmxjaUJtY205dElDY3VMMkZrWVhCMFpYSW5PMXh1WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnWjJWMGRHVnlLR3RsZVNrZ2UxeHVJQ0FnSUhKbGRIVnliaUIwYUdsekxtVnNaVzFsYm5RdVoyVjBRWFIwY21saWRYUmxLR3RsZVNrN1hHNTlYRzVjYm1WNGNHOXlkQ0JtZFc1amRHbHZiaUJ6WlhSMFpYSW9jSEp2Y0hNcElIdGNiaUFnSUNCbWIzSWdLR3hsZENCclpYa2dhVzRnY0hKdmNITXBJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tIQnliM0J6TG1oaGMwOTNibEJ5YjNCbGNuUjVLR3RsZVNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVaV3hsYldWdWRDNXpaWFJCZEhSeWFXSjFkR1VvYTJWNUxDQndjbTl3YzF0clpYbGRLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ0tHVnNaVzFsYm5RcElEMCtJSHRjYmlBZ0lDQmpiMjV6ZENCaGRIUnlRV1JoY0hSbGNpQTlJR0ZrWVhCMFpYSW9aV3hsYldWdWRDazdYRzVjYmlBZ0lDQmhkSFJ5UVdSaGNIUmxjaTVuWlhSMFpYSWdQU0JuWlhSMFpYSTdYRzRnSUNBZ1lYUjBja0ZrWVhCMFpYSXVjMlYwZEdWeUlEMGdjMlYwZEdWeU8xeHVYRzRnSUNBZ2NtVjBkWEp1SUdGMGRISkJaR0Z3ZEdWeU8xeHVmVHRjYmlKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FkYXB0ZXIvYXR0ci1hZGFwdGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9zdGF0ZU1hcCA9IHJlcXVpcmUoJy4vY3NzL3N0YXRlLW1hcCcpO1xuXG52YXIgX3N0YXRlTWFwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0YXRlTWFwKTtcblxudmFyIF92YWx1ZVR5cGVNYXAgPSByZXF1aXJlKCcuL2Nzcy92YWx1ZS10eXBlLW1hcCcpO1xuXG52YXIgX3ZhbHVlVHlwZU1hcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF92YWx1ZVR5cGVNYXApO1xuXG52YXIgX2J1aWxkID0gcmVxdWlyZSgnLi9jc3MvYnVpbGQnKTtcblxudmFyIF9idWlsZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9idWlsZCk7XG5cbnZhciBfcHJlZml4ZXIgPSByZXF1aXJlKCcuL2Nzcy9wcmVmaXhlcicpO1xuXG52YXIgX3ByZWZpeGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ByZWZpeGVyKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wcyA9IHJlcXVpcmUoJy4vY3NzL3RyYW5zZm9ybS1wcm9wcycpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zZm9ybVByb3BzKTtcblxudmFyIF9hZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVyJyk7XG5cbnZhciBfYWRhcHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hZGFwdGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gZ2V0dGVyKGtleSkge1xuICAgIHJldHVybiAhX3RyYW5zZm9ybVByb3BzMi5kZWZhdWx0W2tleV0gPyB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsZW1lbnQsIG51bGwpWygwLCBfcHJlZml4ZXIyLmRlZmF1bHQpKGtleSldIDogX3ZhbHVlVHlwZU1hcDIuZGVmYXVsdFtrZXldLmRlZmF1bHRQcm9wcy5jdXJyZW50IHx8IDA7XG59XG5cbmZ1bmN0aW9uIHNldHRlcihwcm9wcykge1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5jc3NUZXh0ICs9ICgwLCBfYnVpbGQyLmRlZmF1bHQpKHByb3BzKTtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICB2YXIgY3NzQWRhcHRlciA9ICgwLCBfYWRhcHRlcjIuZGVmYXVsdCkoZWxlbWVudCk7XG4gICAgY3NzQWRhcHRlci5zdGF0ZU1hcCA9IF9zdGF0ZU1hcDIuZGVmYXVsdDtcbiAgICBjc3NBZGFwdGVyLnZhbHVlVHlwZU1hcCA9IF92YWx1ZVR5cGVNYXAyLmRlZmF1bHQ7XG4gICAgY3NzQWRhcHRlci5nZXR0ZXIgPSBnZXR0ZXI7XG4gICAgY3NzQWRhcHRlci5zZXR0ZXIgPSBzZXR0ZXI7XG5cbiAgICByZXR1cm4gY3NzQWRhcHRlcjtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwyTnpjeTFoWkdGd2RHVnlMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3p0QlFVOUJMRk5CUVZNc1RVRkJWQ3hEUVVGcFFpeEhRVUZxUWl4RlFVRnpRanRCUVVOc1FpeFhRVUZQTEVOQlFVVXNlVUpCUVdVc1IwRkJaaXhEUVVGRUxFZEJRMG9zVDBGQlR5eG5Ra0ZCVUN4RFFVRjNRaXhMUVVGTExFOUJRVXdzUlVGQll5eEpRVUYwUXl4RlFVRTBReXgzUWtGQlV5eEhRVUZVTEVOQlFUVkRMRU5CUkVjc1IwRkZTQ3gxUWtGQllTeEhRVUZpTEVWQlFXdENMRmxCUVd4Q0xFTkJRU3RDTEU5QlFTOUNMRWxCUVRCRExFTkJRVEZETEVOQlNHTTdRMEZCZEVJN08wRkJUVUVzVTBGQlV5eE5RVUZVTEVOQlFXZENMRXRCUVdoQ0xFVkJRWFZDTzBGQlEyNUNMRk5CUVVzc1QwRkJUQ3hEUVVGaExFdEJRV0lzUTBGQmJVSXNUMEZCYmtJc1NVRkJPRUlzY1VKQlFXOUNMRXRCUVhCQ0xFTkJRVGxDTEVOQlJHMUNPME5CUVhaQ096dHJRa0ZKWlN4VlFVRkRMRTlCUVVRc1JVRkJZVHRCUVVONFFpeFJRVUZOTEdGQlFXRXNkVUpCUVZFc1QwRkJVaXhEUVVGaUxFTkJSR3RDTzBGQlJYaENMR1ZCUVZjc1VVRkJXQ3h6UWtGR2QwSTdRVUZIZUVJc1pVRkJWeXhaUVVGWUxEQkNRVWgzUWp0QlFVbDRRaXhsUVVGWExFMUJRVmdzUjBGQmIwSXNUVUZCY0VJc1EwRktkMEk3UVVGTGVFSXNaVUZCVnl4TlFVRllMRWRCUVc5Q0xFMUJRWEJDTEVOQlRIZENPenRCUVU5NFFpeFhRVUZQTEZWQlFWQXNRMEZRZDBJN1EwRkJZaUlzSW1acGJHVWlPaUpqYzNNdFlXUmhjSFJsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRDOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2MzUmhkR1ZOWVhBZ1puSnZiU0FuTGk5amMzTXZjM1JoZEdVdGJXRndKenRjYm1sdGNHOXlkQ0IyWVd4MVpWUjVjR1ZOWVhBZ1puSnZiU0FuTGk5amMzTXZkbUZzZFdVdGRIbHdaUzF0WVhBbk8xeHVhVzF3YjNKMElHSjFhV3hrVUhKdmNHVnlkSGxUZEhKcGJtY2dabkp2YlNBbkxpOWpjM012WW5WcGJHUW5PMXh1YVcxd2IzSjBJSEJ5WldacGVHVnlJR1p5YjIwZ0p5NHZZM056TDNCeVpXWnBlR1Z5Snp0Y2JtbHRjRzl5ZENCMGNtRnVjMlp2Y20xUWNtOXdjeUJtY205dElDY3VMMk56Y3k5MGNtRnVjMlp2Y20wdGNISnZjSE1uTzF4dWFXMXdiM0owSUdGa1lYQjBaWElnWm5KdmJTQW5MaTloWkdGd2RHVnlKenRjYmx4dVpuVnVZM1JwYjI0Z1oyVjBkR1Z5SUNoclpYa3BJSHRjYmlBZ0lDQnlaWFIxY200Z0tDRjBjbUZ1YzJadmNtMVFjbTl3YzF0clpYbGRLU0EvWEc0Z0lDQWdJQ0FnSUhkcGJtUnZkeTVuWlhSRGIyMXdkWFJsWkZOMGVXeGxLSFJvYVhNdVpXeGxiV1Z1ZEN3Z2JuVnNiQ2xiY0hKbFptbDRaWElvYTJWNUtWMGdPbHh1SUNBZ0lDQWdJQ0IyWVd4MVpWUjVjR1ZOWVhCYmEyVjVYUzVrWldaaGRXeDBVSEp2Y0hNdVkzVnljbVZ1ZENCOGZDQXdPMXh1ZlZ4dVhHNW1kVzVqZEdsdmJpQnpaWFIwWlhJb2NISnZjSE1wSUh0Y2JpQWdJQ0IwYUdsekxtVnNaVzFsYm5RdWMzUjViR1V1WTNOelZHVjRkQ0FyUFNCaWRXbHNaRkJ5YjNCbGNuUjVVM1J5YVc1bktIQnliM0J6S1R0Y2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdLR1ZzWlcxbGJuUXBJRDArSUh0Y2JpQWdJQ0JqYjI1emRDQmpjM05CWkdGd2RHVnlJRDBnWVdSaGNIUmxjaWhsYkdWdFpXNTBLVHRjYmlBZ0lDQmpjM05CWkdGd2RHVnlMbk4wWVhSbFRXRndJRDBnYzNSaGRHVk5ZWEE3WEc0Z0lDQWdZM056UVdSaGNIUmxjaTUyWVd4MVpWUjVjR1ZOWVhBZ1BTQjJZV3gxWlZSNWNHVk5ZWEE3WEc0Z0lDQWdZM056UVdSaGNIUmxjaTVuWlhSMFpYSWdQU0JuWlhSMFpYSTdYRzRnSUNBZ1kzTnpRV1JoY0hSbGNpNXpaWFIwWlhJZ1BTQnpaWFIwWlhJN1hHNWNiaUFnSUNCeVpYUjFjbTRnWTNOelFXUmhjSFJsY2p0Y2JuMDdYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9jc3MtYWRhcHRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDE0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnNldHRlciA9IHNldHRlcjtcblxudmFyIF9zdGF0ZU1hcCA9IHJlcXVpcmUoJy4vY3NzL3N0YXRlLW1hcCcpO1xuXG52YXIgX3N0YXRlTWFwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0YXRlTWFwKTtcblxudmFyIF92YWx1ZVR5cGVNYXAgPSByZXF1aXJlKCcuL3N2Zy92YWx1ZS10eXBlLW1hcCcpO1xuXG52YXIgX3ZhbHVlVHlwZU1hcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF92YWx1ZVR5cGVNYXApO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzID0gcmVxdWlyZSgnLi9jc3MvdHJhbnNmb3JtLXByb3BzJyk7XG5cbnZhciBfdHJhbnNmb3JtUHJvcHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNmb3JtUHJvcHMpO1xuXG52YXIgX2J1aWxkID0gcmVxdWlyZSgnLi9zdmcvYnVpbGQnKTtcblxudmFyIF9idWlsZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9idWlsZCk7XG5cbnZhciBfYXR0ckFkYXB0ZXIgPSByZXF1aXJlKCcuL2F0dHItYWRhcHRlcicpO1xuXG52YXIgX2FkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXInKTtcblxudmFyIF9hZGFwdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FkYXB0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBzZXR0ZXIocHJvcHMpIHtcbiAgICB0aGlzLmF0dHJTZXR0ZXIoKDAsIF9idWlsZDIuZGVmYXVsdCkocHJvcHMsIHRoaXMub3JpZ2luKSk7XG59XG5cbmZ1bmN0aW9uIGdldHRlcihrZXkpIHtcbiAgICByZXR1cm4gIV90cmFuc2Zvcm1Qcm9wczIuZGVmYXVsdFtrZXldID8gdGhpcy5hdHRyR2V0dGVyKGtleSkgOiBfdmFsdWVUeXBlTWFwMi5kZWZhdWx0W2tleV0gJiYgX3ZhbHVlVHlwZU1hcDIuZGVmYXVsdFtrZXldLmRlZmF1bHRQcm9wcyA/IF92YWx1ZVR5cGVNYXAyLmRlZmF1bHRba2V5XS5kZWZhdWx0UHJvcHMuY3VycmVudCA6IDA7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgdmFyIHRyYW5zZm9ybU9yaWdpblggPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyA1MCA6IGFyZ3VtZW50c1sxXTtcbiAgICB2YXIgdHJhbnNmb3JtT3JpZ2luWSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMiB8fCBhcmd1bWVudHNbMl0gPT09IHVuZGVmaW5lZCA/IDUwIDogYXJndW1lbnRzWzJdO1xuXG4gICAgdmFyIHN2Z0FkYXB0ZXIgPSAoMCwgX2FkYXB0ZXIyLmRlZmF1bHQpKGVsZW1lbnQpO1xuICAgIHN2Z0FkYXB0ZXIuc3RhdGVNYXAgPSBfc3RhdGVNYXAyLmRlZmF1bHQ7XG4gICAgc3ZnQWRhcHRlci52YWx1ZVR5cGVNYXAgPSBfdmFsdWVUeXBlTWFwMi5kZWZhdWx0O1xuICAgIHN2Z0FkYXB0ZXIuZ2V0dGVyID0gZ2V0dGVyO1xuICAgIHN2Z0FkYXB0ZXIuc2V0dGVyID0gc2V0dGVyO1xuICAgIHN2Z0FkYXB0ZXIuYXR0ckdldHRlciA9IF9hdHRyQWRhcHRlci5nZXR0ZXI7XG4gICAgc3ZnQWRhcHRlci5hdHRyU2V0dGVyID0gX2F0dHJBZGFwdGVyLnNldHRlcjtcblxuICAgIHZhciBiQm94ID0gZWxlbWVudC5nZXRCQm94KCk7XG5cbiAgICBzdmdBZGFwdGVyLm9yaWdpbiA9IHtcbiAgICAgICAgeDogYkJveC53aWR0aCAqICh0cmFuc2Zvcm1PcmlnaW5YIC8gMTAwKSArIGJCb3gueCxcbiAgICAgICAgeTogYkJveC5oZWlnaHQgKiAodHJhbnNmb3JtT3JpZ2luWSAvIDEwMCkgKyBiQm94LnlcbiAgICB9O1xuXG4gICAgcmV0dXJuIHN2Z0FkYXB0ZXI7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMM04yWnkxaFpHRndkR1Z5TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096dFJRVTluUWpzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3UVVGQlZDeFRRVUZUTEUxQlFWUXNRMEZCWjBJc1MwRkJhRUlzUlVGQmRVSTdRVUZETVVJc1UwRkJTeXhWUVVGTUxFTkJRV2RDTEhGQ1FVRk5MRXRCUVU0c1JVRkJZU3hMUVVGTExFMUJRVXdzUTBGQk4wSXNSVUZFTUVJN1EwRkJka0k3TzBGQlNWQXNVMEZCVXl4TlFVRlVMRU5CUVdkQ0xFZEJRV2hDTEVWQlFYRkNPMEZCUTJwQ0xGZEJRVThzUTBGQlJTeDVRa0ZCWlN4SFFVRm1MRU5CUVVRc1IwRkJkMElzUzBGQlN5eFZRVUZNTEVOQlFXZENMRWRCUVdoQ0xFTkJRWHBDTEVkQlFXZEVMSE5DUVVGRExFTkJRV0VzUjBGQllpeExRVUZ4UWl4MVFrRkJZU3hIUVVGaUxFVkJRV3RDTEZsQlFXeENMRWRCUVd0RExIVkNRVUZoTEVkQlFXSXNSVUZCYTBJc1dVRkJiRUlzUTBGQkswSXNUMEZCTDBJc1IwRkJlVU1zUTBGQmFrY3NRMEZFZEVNN1EwRkJja0k3TzJ0Q1FVbGxMRlZCUVVNc1QwRkJSQ3hGUVVFeVJEdFJRVUZxUkN4NVJVRkJiVUlzYTBKQlFUaENPMUZCUVRGQ0xIbEZRVUZ0UWl4clFrRkJUenM3UVVGRGRFVXNVVUZCVFN4aFFVRmhMSFZDUVVGUkxFOUJRVklzUTBGQllpeERRVVJuUlR0QlFVVjBSU3hsUVVGWExGRkJRVmdzYzBKQlJuTkZPMEZCUjNSRkxHVkJRVmNzV1VGQldDd3dRa0ZJYzBVN1FVRkpkRVVzWlVGQlZ5eE5RVUZZTEVkQlFXOUNMRTFCUVhCQ0xFTkJTbk5GTzBGQlMzUkZMR1ZCUVZjc1RVRkJXQ3hIUVVGdlFpeE5RVUZ3UWl4RFFVeHpSVHRCUVUxMFJTeGxRVUZYTEZWQlFWZ3NkVUpCVG5ORk8wRkJUM1JGTEdWQlFWY3NWVUZCV0N4MVFrRlFjMFU3TzBGQlUzUkZMRkZCUVUwc1QwRkJUeXhSUVVGUkxFOUJRVklzUlVGQlVDeERRVlJuUlRzN1FVRlhkRVVzWlVGQlZ5eE5RVUZZTEVkQlFXOUNPMEZCUTJoQ0xGZEJRVWNzUzBGQlN5eExRVUZNTEVsQlFXTXNiVUpCUVcxQ0xFZEJRVzVDTEVOQlFXUXNSMEZCZDBNc1MwRkJTeXhEUVVGTU8wRkJRek5ETEZkQlFVY3NTMEZCU3l4TlFVRk1MRWxCUVdVc2JVSkJRVzFDTEVkQlFXNUNMRU5CUVdZc1IwRkJlVU1zUzBGQlN5eERRVUZNTzB0QlJtaEVMRU5CV0hORk96dEJRV2RDZEVVc1YwRkJUeXhWUVVGUUxFTkJhRUp6UlR0RFFVRXpSQ0lzSW1acGJHVWlPaUp6ZG1jdFlXUmhjSFJsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRDOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1kzTnpVM1JoZEdWTllYQWdabkp2YlNBbkxpOWpjM012YzNSaGRHVXRiV0Z3Snp0Y2JtbHRjRzl5ZENCMllXeDFaVlI1Y0dWTllYQWdabkp2YlNBbkxpOXpkbWN2ZG1Gc2RXVXRkSGx3WlMxdFlYQW5PMXh1YVcxd2IzSjBJSFJ5WVc1elptOXliVkJ5YjNCeklHWnliMjBnSnk0dlkzTnpMM1J5WVc1elptOXliUzF3Y205d2N5YzdYRzVwYlhCdmNuUWdZblZwYkdRZ1puSnZiU0FuTGk5emRtY3ZZblZwYkdRbk8xeHVhVzF3YjNKMElIc2daMlYwZEdWeUlHRnpJR0YwZEhKSFpYUjBaWElzSUhObGRIUmxjaUJoY3lCaGRIUnlVMlYwZEdWeUlIMGdabkp2YlNBbkxpOWhkSFJ5TFdGa1lYQjBaWEluTzF4dWFXMXdiM0owSUdGa1lYQjBaWElnWm5KdmJTQW5MaTloWkdGd2RHVnlKenRjYmx4dVpYaHdiM0owSUdaMWJtTjBhVzl1SUhObGRIUmxjaWh3Y205d2N5a2dlMXh1SUNBZ0lIUm9hWE11WVhSMGNsTmxkSFJsY2loaWRXbHNaQ2h3Y205d2N5d2dkR2hwY3k1dmNtbG5hVzRwS1R0Y2JuMWNibHh1Wm5WdVkzUnBiMjRnWjJWMGRHVnlLR3RsZVNrZ2UxeHVJQ0FnSUhKbGRIVnliaUFvSVhSeVlXNXpabTl5YlZCeWIzQnpXMnRsZVYwcElEOGdkR2hwY3k1aGRIUnlSMlYwZEdWeUtHdGxlU2tnT2lBb2RtRnNkV1ZVZVhCbFRXRndXMnRsZVYwZ0ppWWdkbUZzZFdWVWVYQmxUV0Z3VzJ0bGVWMHVaR1ZtWVhWc2RGQnliM0J6S1NBL0lIWmhiSFZsVkhsd1pVMWhjRnRyWlhsZExtUmxabUYxYkhSUWNtOXdjeTVqZFhKeVpXNTBJRG9nTUR0Y2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdLR1ZzWlcxbGJuUXNJSFJ5WVc1elptOXliVTl5YVdkcGJsZ2dQU0ExTUN3Z2RISmhibk5tYjNKdFQzSnBaMmx1V1NBOUlEVXdLU0E5UGlCN1hHNGdJQ0FnWTI5dWMzUWdjM1puUVdSaGNIUmxjaUE5SUdGa1lYQjBaWElvWld4bGJXVnVkQ2s3WEc0Z0lDQWdjM1puUVdSaGNIUmxjaTV6ZEdGMFpVMWhjQ0E5SUdOemMxTjBZWFJsVFdGd08xeHVJQ0FnSUhOMlowRmtZWEIwWlhJdWRtRnNkV1ZVZVhCbFRXRndJRDBnZG1Gc2RXVlVlWEJsVFdGd08xeHVJQ0FnSUhOMlowRmtZWEIwWlhJdVoyVjBkR1Z5SUQwZ1oyVjBkR1Z5TzF4dUlDQWdJSE4yWjBGa1lYQjBaWEl1YzJWMGRHVnlJRDBnYzJWMGRHVnlPMXh1SUNBZ0lITjJaMEZrWVhCMFpYSXVZWFIwY2tkbGRIUmxjaUE5SUdGMGRISkhaWFIwWlhJN1hHNGdJQ0FnYzNablFXUmhjSFJsY2k1aGRIUnlVMlYwZEdWeUlEMGdZWFIwY2xObGRIUmxjanRjYmlBZ0lDQmNiaUFnSUNCamIyNXpkQ0JpUW05NElEMGdaV3hsYldWdWRDNW5aWFJDUW05NEtDazdYRzVjYmlBZ0lDQnpkbWRCWkdGd2RHVnlMbTl5YVdkcGJpQTlJSHRjYmlBZ0lDQWdJQ0FnZURvZ1lrSnZlQzUzYVdSMGFDQXFJQ2gwY21GdWMyWnZjbTFQY21sbmFXNVlJQzhnTVRBd0tTQXJJR0pDYjNndWVDeGNiaUFnSUNBZ0lDQWdlVG9nWWtKdmVDNW9aV2xuYUhRZ0tpQW9kSEpoYm5ObWIzSnRUM0pwWjJsdVdTQXZJREV3TUNrZ0t5QmlRbTk0TG5sY2JpQWdJQ0I5TzF4dVhHNGdJQ0FnY21WMGRYSnVJSE4yWjBGa1lYQjBaWEk3WEc1OU8xeHVYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9zdmctYWRhcHRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDE1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfYnVpbGQgPSByZXF1aXJlKCcuL3N2Zy1wYXRoL2J1aWxkJyk7XG5cbnZhciBfYnVpbGQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYnVpbGQpO1xuXG52YXIgX3N0YXRlTWFwID0gcmVxdWlyZSgnLi9jc3Mvc3RhdGUtbWFwJyk7XG5cbnZhciBfc3RhdGVNYXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RhdGVNYXApO1xuXG52YXIgX3N2Z0FkYXB0ZXIgPSByZXF1aXJlKCcuL3N2Zy1hZGFwdGVyJyk7XG5cbnZhciBfc3ZnQWRhcHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdmdBZGFwdGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gc2V0dGVyKHByb3BzKSB7XG4gICAgdGhpcy5zdmdTZXR0ZXIoKDAsIF9idWlsZDIuZGVmYXVsdCkocHJvcHMsIHRoaXMucGF0aExlbmd0aCkpO1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIHZhciBhZGFwdGVyID0gKDAsIF9zdmdBZGFwdGVyMi5kZWZhdWx0KShlbGVtZW50KTtcblxuICAgIGFkYXB0ZXIuc3RhdGVNYXAgPSBfc3RhdGVNYXAyLmRlZmF1bHQ7XG4gICAgYWRhcHRlci5zZXR0ZXIgPSBzZXR0ZXI7XG4gICAgYWRhcHRlci5zdmdTZXR0ZXIgPSBfc3ZnQWRhcHRlci5zZXR0ZXI7XG4gICAgYWRhcHRlci5wYXRoTGVuZ3RoID0gZWxlbWVudC5nZXRUb3RhbExlbmd0aCgpO1xuXG4gICAgcmV0dXJuIGFkYXB0ZXI7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMM04yWnkxd1lYUm9MV0ZrWVhCMFpYSXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenM3T3pzN096czdPMEZCU1VFc1UwRkJVeXhOUVVGVUxFTkJRV2RDTEV0QlFXaENMRVZCUVhWQ08wRkJRMjVDTEZOQlFVc3NVMEZCVEN4RFFVRmxMSEZDUVVGTkxFdEJRVTRzUlVGQllTeExRVUZMTEZWQlFVd3NRMEZCTlVJc1JVRkViVUk3UTBGQmRrSTdPMnRDUVVsbExGVkJRVU1zVDBGQlJDeEZRVUZoTzBGQlEzaENMRkZCUVUwc1ZVRkJWU3d3UWtGQlZ5eFBRVUZZTEVOQlFWWXNRMEZFYTBJN08wRkJSM2hDTEZsQlFWRXNVVUZCVWl4elFrRklkMEk3UVVGSmVFSXNXVUZCVVN4TlFVRlNMRWRCUVdsQ0xFMUJRV3BDTEVOQlNuZENPMEZCUzNoQ0xGbEJRVkVzVTBGQlVpeHpRa0ZNZDBJN1FVRk5lRUlzV1VGQlVTeFZRVUZTTEVkQlFYRkNMRkZCUVZFc1kwRkJVaXhGUVVGeVFpeERRVTUzUWpzN1FVRlJlRUlzVjBGQlR5eFBRVUZRTEVOQlVuZENPME5CUVdJaUxDSm1hV3hsSWpvaWMzWm5MWEJoZEdndFlXUmhjSFJsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRDOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1luVnBiR1FnWm5KdmJTQW5MaTl6ZG1jdGNHRjBhQzlpZFdsc1pDYzdYRzVwYlhCdmNuUWdZM056VTNSaGRHVk5ZWEFnWm5KdmJTQW5MaTlqYzNNdmMzUmhkR1V0YldGd0p6dGNibWx0Y0c5eWRDQnpkbWRCWkdGd2RHVnlMQ0I3SUhObGRIUmxjaUJoY3lCemRtZFRaWFIwWlhJZ2ZTQm1jbTl0SUNjdUwzTjJaeTFoWkdGd2RHVnlKenRjYmx4dVpuVnVZM1JwYjI0Z2MyVjBkR1Z5S0hCeWIzQnpLU0I3WEc0Z0lDQWdkR2hwY3k1emRtZFRaWFIwWlhJb1luVnBiR1FvY0hKdmNITXNJSFJvYVhNdWNHRjBhRXhsYm1kMGFDa3BPMXh1ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENBb1pXeGxiV1Z1ZENrZ1BUNGdlMXh1SUNBZ0lHTnZibk4wSUdGa1lYQjBaWElnUFNCemRtZEJaR0Z3ZEdWeUtHVnNaVzFsYm5RcE8xeHVYRzRnSUNBZ1lXUmhjSFJsY2k1emRHRjBaVTFoY0NBOUlHTnpjMU4wWVhSbFRXRndPMXh1SUNBZ0lHRmtZWEIwWlhJdWMyVjBkR1Z5SUQwZ2MyVjBkR1Z5TzF4dUlDQWdJR0ZrWVhCMFpYSXVjM1puVTJWMGRHVnlJRDBnYzNablUyVjBkR1Z5TzF4dUlDQWdJR0ZrWVhCMFpYSXVjR0YwYUV4bGJtZDBhQ0E5SUdWc1pXMWxiblF1WjJWMFZHOTBZV3hNWlc1bmRHZ29LVHRjYmx4dUlDQWdJSEpsZEhWeWJpQmhaR0Z3ZEdWeU8xeHVmVHRjYmlKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FkYXB0ZXIvc3ZnLXBhdGgtYWRhcHRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDE2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfY3JlYXRlRWFzaW5nID0gcmVxdWlyZSgnLi9jcmVhdGUtZWFzaW5nJyk7XG5cbnZhciBfY3JlYXRlRWFzaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUVhc2luZyk7XG5cbnZhciBfY3JlYXRlQmV6aWVyID0gcmVxdWlyZSgnLi9jcmVhdGUtYmV6aWVyJyk7XG5cbnZhciBfY3JlYXRlQmV6aWVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUJlemllcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmU7IC8qXG4gICAgICBFYXNpbmcgZnVuY3Rpb25zXG4gICAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBcbiAgICAgIEdlbmVyYXRlcyBhbmQgcHJvdmlkZXMgZWFzaW5nIGZ1bmN0aW9ucyBiYXNlZCBvbiBiYXNlRnVuY3Rpb24gZGVmaW5pdGlvbnNcbiAgICAgIFxuICAgICAgQSBjYWxsIHRvIGVhc2luZ0Z1bmN0aW9uLmdldCgnZnVuY3Rpb25OYW1lJykgcmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHBhc3NlZDpcbiAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzIDAtMVxuICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBBbXAgbW9kaWZpZXIsIG9ubHkgYWNjZXB0ZWQgaW4gc29tZSBlYXNpbmcgZnVuY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBpcyB1c2VkIHRvIGFkanVzdCBvdmVyYWxsIHN0cmVuZ3RoXG4gICAgICAgICAgQHJldHVybiBbbnVtYmVyXTogRWFzZWQgcHJvZ3Jlc3NcbiAgICAgICAgICBcbiAgICAgIFdlIGNhbiBnZW5lcmF0ZSBuZXcgZnVuY3Rpb25zIGJ5IHNlbmRpbmcgYW4gZWFzaW5nIGZ1bmN0aW9uIHRocm91Z2ggZWFzaW5nRnVuY3Rpb24uZXh0ZW5kKG5hbWUsIG1ldGhvZCkuXG4gICAgICBXaGljaCB3aWxsIG1ha2UgbmFtZUluLCBuYW1lT3V0IGFuZCBuYW1lSW5PdXQgZnVuY3Rpb25zIGF2YWlsYWJsZSB0byB1c2UuXG4gICAgICAgICAgXG4gICAgICBFYXNpbmcgZnVuY3Rpb25zIGZyb20gUm9iZXJ0IFBlbm5lclxuICAgICAgaHR0cDovL3d3dy5yb2JlcnRwZW5uZXIuY29tL2Vhc2luZy9cbiAgICAgICAgICBcbiAgICAgIEJlemllciBjdXJ2ZSBpbnRlcnByZXRvciBjcmVhdGVkIGZyb20gR2HDq3RhbiBSZW5hdWRlYXUncyBvcmlnaW5hbCBCZXppZXJFYXNpbmcgIFxuICAgICAgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nL2Jsb2IvbWFzdGVyL2luZGV4LmpzICBcbiAgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9MSUNFTlNFXG4gICAgICAgQW50aWNpcGF0ZSBlYXNpbmcgY3JlYXRlZCBieSBFbGxpb3QgR2lub1xuICAgICAgaHR0cHM6Ly90d2l0dGVyLmNvbS9FbGxpb3RHZW5vXG4gICAqL1xuLy8gSW1wb3J0c1xuXG4vLyBWYWx1ZXNcbnZhciBERUZBVUxUX0JBQ0tfU1RSRU5HVEggPSAxLjUyNTtcbnZhciBERUZBVUxUX1BPV19TVFJFTkdUSCA9IDI7XG5cbi8qXG4gICAgRWFjaCBvZiB0aGVzZSBiYXNlIGZ1bmN0aW9ucyBpcyBhbiBlYXNlSW5cbiAgICBcbiAgICBPbiBpbml0LCB3ZSB1c2UgLm1pcnJvciBhbmQgLnJldmVyc2UgdG8gZ2VuZXJhdGUgZWFzZUluT3V0IGFuZFxuICAgIGVhc2VPdXQgZnVuY3Rpb25zIHJlc3BlY3RpdmVseS5cbiovXG52YXIgYmFzZUVhc2luZyA9IHtcbiAgICBlYXNlOiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgdmFyIHN0cmVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gREVGQVVMVF9QT1dfU1RSRU5HVEggOiBhcmd1bWVudHNbMV07XG4gICAgICAgIHJldHVybiBNYXRoLnBvdyhwcm9ncmVzcywgc3RyZW5ndGgpO1xuICAgIH0sXG4gICAgY2lyYzogZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgICAgIHJldHVybiAxIC0gTWF0aC5zaW4oTWF0aC5hY29zKHByb2dyZXNzKSk7XG4gICAgfSxcbiAgICBiYWNrOiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgdmFyIHN0cmVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gREVGQVVMVF9CQUNLX1NUUkVOR1RIIDogYXJndW1lbnRzWzFdO1xuICAgICAgICByZXR1cm4gcHJvZ3Jlc3MgKiBwcm9ncmVzcyAqICgoc3RyZW5ndGggKyAxKSAqIHByb2dyZXNzIC0gc3RyZW5ndGgpO1xuICAgIH1cbn07XG5cbi8vIFV0aWxpdHkgZnVuY3Rpb25zXG52YXIgZ2VuZXJhdGVQb3dlckVhc2luZyA9IGZ1bmN0aW9uIChzdHJlbmd0aCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgcmV0dXJuIGJhc2VFYXNpbmcuZWFzZShwcm9ncmVzcywgc3RyZW5ndGgpO1xuICAgIH07XG59O1xuXG5bJ2N1YmljJywgJ3F1YXJ0JywgJ3F1aW50J10uZm9yRWFjaChmdW5jdGlvbiAoZWFzaW5nTmFtZSwgaSkge1xuICAgIHJldHVybiBiYXNlRWFzaW5nW2Vhc2luZ05hbWVdID0gZ2VuZXJhdGVQb3dlckVhc2luZyhpICsgMyk7XG59KTtcblxuLy8gR2VuZXJhdGUgaW4vb3V0L2luT3V0IHZhcmlhdGlvbnNcbmZvciAodmFyIGtleSBpbiBiYXNlRWFzaW5nKSB7XG4gICAgaWYgKGJhc2VFYXNpbmcuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICB2YXIgZWFzaW5nRnVuY3Rpb24gPSAoMCwgX2NyZWF0ZUVhc2luZzIuZGVmYXVsdCkoYmFzZUVhc2luZ1trZXldKTtcbiAgICAgICAgYmFzZUVhc2luZ1trZXkgKyAnSW4nXSA9IGVhc2luZ0Z1bmN0aW9uLmluO1xuICAgICAgICBiYXNlRWFzaW5nW2tleSArICdPdXQnXSA9IGVhc2luZ0Z1bmN0aW9uLm91dDtcbiAgICAgICAgYmFzZUVhc2luZ1trZXkgKyAnSW5PdXQnXSA9IGVhc2luZ0Z1bmN0aW9uLmluT3V0O1xuICAgIH1cbn1cblxuYmFzZUVhc2luZy5saW5lYXIgPSBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICByZXR1cm4gcHJvZ3Jlc3M7XG59O1xuYmFzZUVhc2luZy5hbnRpY2lwYXRlID0gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgdmFyIHN0cmVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gREVGQVVMVF9CQUNLX1NUUkVOR1RIIDogYXJndW1lbnRzWzFdO1xuICAgIHJldHVybiAocHJvZ3Jlc3MgKj0gMikgPCAxID8gMC41ICogYmFzZUVhc2luZy5iYWNrSW4ocHJvZ3Jlc3MsIHN0cmVuZ3RoKSA6IDAuNSAqICgyIC0gTWF0aC5wb3coMiwgLTEwICogKHByb2dyZXNzIC0gMSkpKTtcbn07XG5cbmJhc2VFYXNpbmcuY3JlYXRlVmFyaWF0aW9ucyA9IF9jcmVhdGVFYXNpbmcyLmRlZmF1bHQ7XG5iYXNlRWFzaW5nLmN1YmljQmV6aWVyID0gX2NyZWF0ZUJlemllcjIuZGVmYXVsdDtcbmJhc2VFYXNpbmcubW9kaWZ5ID0gZnVuY3Rpb24gKGVhc2luZykge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgICAgIHJldHVybiBlYXNpbmcuYXBwbHkodW5kZWZpbmVkLCBbcHJvZ3Jlc3NdLmNvbmNhdChhcmdzKSk7XG4gICAgfTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGJhc2VFYXNpbmc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwyVmhjMmx1Wnk5d2NtVnpaWFF0WldGemFXNW5MbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdPenM3T3pzN08wRkJRVUU3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenRCUVRoQ1FTeEpRVUZOTEhkQ1FVRjNRaXhMUVVGNFFqdEJRVU5PTEVsQlFVMHNkVUpCUVhWQ0xFTkJRWFpDT3pzN096czdPenRCUVZGT0xFbEJRVTBzWVVGQllUdEJRVU5tTEZWQlFVMHNWVUZCUXl4UlFVRkVPMWxCUVZjc2FVVkJRVmM3ZDBKQlFYbENMRlZCUVZrN1MwRkJNMFE3UVVGRFRpeFZRVUZOTzJWQlFWa3NTVUZCU1N4TFFVRkxMRWRCUVV3c1EwRkJVeXhMUVVGTExFbEJRVXdzUTBGQlZTeFJRVUZXTEVOQlFWUXNRMEZCU2p0TFFVRmFPMEZCUTA0c1ZVRkJUU3hWUVVGRExGRkJRVVE3V1VGQlZ5eHBSVUZCVnp0bFFVRXdRaXhSUVVGRExFZEJRVmNzVVVGQldDeEpRVUYzUWl4RFFVRkRMRmRCUVZjc1EwRkJXQ3hEUVVGRUxFZEJRV2xDTEZGQlFXcENMRWRCUVRSQ0xGRkJRVFZDTEVOQlFYcENPMHRCUVdoRU8wTkJTRW83T3p0QlFVOU9MRWxCUVUwc2MwSkJRWE5DTEZWQlFVTXNVVUZCUkR0WFFVRmpMRlZCUVVNc1VVRkJSRHRsUVVGakxGZEJRVmNzU1VGQldDeERRVUZuUWl4UlFVRm9RaXhGUVVFd1FpeFJRVUV4UWp0TFFVRmtPME5CUVdRN08wRkJSVFZDTEVOQlFVTXNUMEZCUkN4RlFVRlZMRTlCUVZZc1JVRkJiVUlzVDBGQmJrSXNSVUZCTkVJc1QwRkJOVUlzUTBGQmIwTXNWVUZCUXl4VlFVRkVMRVZCUVdFc1EwRkJZanRYUVVGdFFpeFhRVUZYTEZWQlFWZ3NTVUZCZVVJc2IwSkJRVzlDTEVsQlFVa3NRMEZCU2l4RFFVRTNRenREUVVGdVFpeERRVUZ3UXpzN08wRkJSMEVzUzBGQlN5eEpRVUZKTEVkQlFVb3NTVUZCVnl4VlFVRm9RaXhGUVVFMFFqdEJRVU40UWl4UlFVRkpMRmRCUVZjc1kwRkJXQ3hEUVVFd1FpeEhRVUV4UWl4RFFVRktMRVZCUVc5RE8wRkJRMmhETEZsQlFVMHNhVUpCUVdsQ0xEUkNRVUZ4UWl4WFFVRlhMRWRCUVZnc1EwRkJja0lzUTBGQmFrSXNRMEZFTUVJN1FVRkZhRU1zYlVKQlFXTXNWVUZCWkN4SlFVRjVRaXhsUVVGbExFVkJRV1lzUTBGR1R6dEJRVWRvUXl4dFFrRkJZeXhYUVVGa0xFbEJRVEJDTEdWQlFXVXNSMEZCWml4RFFVaE5PMEZCU1doRExHMUNRVUZqTEdGQlFXUXNTVUZCTkVJc1pVRkJaU3hMUVVGbUxFTkJTa2s3UzBGQmNFTTdRMEZFU2pzN1FVRlRRU3hYUVVGWExFMUJRVmdzUjBGQmIwSTdWMEZCV1R0RFFVRmFPMEZCUTNCQ0xGZEJRVmNzVlVGQldDeEhRVUYzUWl4VlFVRkRMRkZCUVVRN1VVRkJWeXhwUlVGQlZ6dFhRVU14UXl4RFFVRkZMRmxCUVZVc1EwRkJWaXhEUVVGRUxFZEJRV2RDTEVOQlFXaENMRWRCUVhGQ0xFMUJRVTBzVjBGQlZ5eE5RVUZZTEVOQlFXdENMRkZCUVd4Q0xFVkJRVFJDTEZGQlFUVkNMRU5CUVU0c1IwRkJLME1zVDBGQlR5eEpRVUZKTEV0QlFVc3NSMEZCVEN4RFFVRlRMRU5CUVZRc1JVRkJXU3hEUVVGRExFVkJRVVFzU1VGQlR5eFhRVUZYTEVOQlFWZ3NRMEZCVUN4RFFVRm9RaXhEUVVGUU8wTkJSR3BFT3p0QlFVZDRRaXhYUVVGWExHZENRVUZZTzBGQlEwRXNWMEZCVnl4WFFVRllPMEZCUTBFc1YwRkJWeXhOUVVGWUxFZEJRVzlDTEZWQlFVTXNUVUZCUkR0elEwRkJXVHM3T3p0WFFVRlRMRlZCUVVNc1VVRkJSRHRsUVVGakxIbENRVUZQTEdsQ1FVRmhMRXRCUVhCQ08wdEJRV1E3UTBGQmNrSTdPMnRDUVVWTUlpd2labWxzWlNJNkluQnlaWE5sZEMxbFlYTnBibWN1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaVpTOHFYRzRnSUNBZ1JXRnphVzVuSUdaMWJtTjBhVzl1YzF4dUlDQWdJQzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMxY2JpQWdJQ0JjYmlBZ0lDQkhaVzVsY21GMFpYTWdZVzVrSUhCeWIzWnBaR1Z6SUdWaGMybHVaeUJtZFc1amRHbHZibk1nWW1GelpXUWdiMjRnWW1GelpVWjFibU4wYVc5dUlHUmxabWx1YVhScGIyNXpYRzRnSUNBZ1hHNGdJQ0FnUVNCallXeHNJSFJ2SUdWaGMybHVaMFoxYm1OMGFXOXVMbWRsZENnblpuVnVZM1JwYjI1T1lXMWxKeWtnY21WMGRYSnVjeUJoSUdaMWJtTjBhVzl1SUhSb1lYUWdZMkZ1SUdKbElIQmhjM05sWkRwY2JpQWdJQ0FnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCUWNtOW5jbVZ6Y3lBd0xURmNiaUFnSUNBZ0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZElDaHZjSFJwYjI1aGJDazZJRUZ0Y0NCdGIyUnBabWxsY2l3Z2IyNXNlU0JoWTJObGNIUmxaQ0JwYmlCemIyMWxJR1ZoYzJsdVp5Qm1kVzVqZEdsdmJuTmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR0Z1WkNCcGN5QjFjMlZrSUhSdklHRmthblZ6ZENCdmRtVnlZV3hzSUhOMGNtVnVaM1JvWEc0Z0lDQWdJQ0FnSUVCeVpYUjFjbTRnVzI1MWJXSmxjbDA2SUVWaGMyVmtJSEJ5YjJkeVpYTnpYRzRnSUNBZ0lDQWdJRnh1SUNBZ0lGZGxJR05oYmlCblpXNWxjbUYwWlNCdVpYY2dablZ1WTNScGIyNXpJR0o1SUhObGJtUnBibWNnWVc0Z1pXRnphVzVuSUdaMWJtTjBhVzl1SUhSb2NtOTFaMmdnWldGemFXNW5SblZ1WTNScGIyNHVaWGgwWlc1a0tHNWhiV1VzSUcxbGRHaHZaQ2t1WEc0Z0lDQWdWMmhwWTJnZ2QybHNiQ0J0WVd0bElHNWhiV1ZKYml3Z2JtRnRaVTkxZENCaGJtUWdibUZ0WlVsdVQzVjBJR1oxYm1OMGFXOXVjeUJoZG1GcGJHRmliR1VnZEc4Z2RYTmxMbHh1SUNBZ0lDQWdJQ0JjYmlBZ0lDQkZZWE5wYm1jZ1puVnVZM1JwYjI1eklHWnliMjBnVW05aVpYSjBJRkJsYm01bGNseHVJQ0FnSUdoMGRIQTZMeTkzZDNjdWNtOWlaWEowY0dWdWJtVnlMbU52YlM5bFlYTnBibWN2WEc0Z0lDQWdJQ0FnSUZ4dUlDQWdJRUpsZW1sbGNpQmpkWEoyWlNCcGJuUmxjbkJ5WlhSdmNpQmpjbVZoZEdWa0lHWnliMjBnUjJIRHEzUmhiaUJTWlc1aGRXUmxZWFVuY3lCdmNtbG5hVzVoYkNCQ1pYcHBaWEpGWVhOcGJtY2dJRnh1SUNBZ0lHaDBkSEJ6T2k4dloybDBhSFZpTG1OdmJTOW5jbVV2WW1WNmFXVnlMV1ZoYzJsdVp5OWliRzlpTDIxaGMzUmxjaTlwYm1SbGVDNXFjeUFnWEc0Z0lDQWdhSFIwY0hNNkx5OW5hWFJvZFdJdVkyOXRMMmR5WlM5aVpYcHBaWEl0WldGemFXNW5MMkpzYjJJdmJXRnpkR1Z5TDB4SlEwVk9VMFZjYmx4dUlDQWdJRUZ1ZEdsamFYQmhkR1VnWldGemFXNW5JR055WldGMFpXUWdZbmtnUld4c2FXOTBJRWRwYm05Y2JpQWdJQ0JvZEhSd2N6b3ZMM1IzYVhSMFpYSXVZMjl0TDBWc2JHbHZkRWRsYm05Y2Jpb3ZYRzR2THlCSmJYQnZjblJ6WEc1cGJYQnZjblFnWTNKbFlYUmxSV0Z6YVc1blJuVnVZM1JwYjI0Z1puSnZiU0FuTGk5amNtVmhkR1V0WldGemFXNW5KenRjYm1sdGNHOXlkQ0JqZFdKcFkwSmxlbWxsY2lCbWNtOXRJQ2N1TDJOeVpXRjBaUzFpWlhwcFpYSW5PMXh1WEc0dkx5QldZV3gxWlhOY2JtTnZibk4wSUVSRlJrRlZURlJmUWtGRFMxOVRWRkpGVGtkVVNDQTlJREV1TlRJMU8xeHVZMjl1YzNRZ1JFVkdRVlZNVkY5UVQxZGZVMVJTUlU1SFZFZ2dQU0F5TzF4dVhHNHZLbHh1SUNBZ0lFVmhZMmdnYjJZZ2RHaGxjMlVnWW1GelpTQm1kVzVqZEdsdmJuTWdhWE1nWVc0Z1pXRnpaVWx1WEc0Z0lDQWdYRzRnSUNBZ1QyNGdhVzVwZEN3Z2QyVWdkWE5sSUM1dGFYSnliM0lnWVc1a0lDNXlaWFpsY25ObElIUnZJR2RsYm1WeVlYUmxJR1ZoYzJWSmJrOTFkQ0JoYm1SY2JpQWdJQ0JsWVhObFQzVjBJR1oxYm1OMGFXOXVjeUJ5WlhOd1pXTjBhWFpsYkhrdVhHNHFMMXh1WTI5dWMzUWdZbUZ6WlVWaGMybHVaeUE5SUh0Y2JpQWdJQ0JsWVhObE9pQW9jSEp2WjNKbGMzTXNJSE4wY21WdVozUm9JRDBnUkVWR1FWVk1WRjlRVDFkZlUxUlNSVTVIVkVncElEMCtJSEJ5YjJkeVpYTnpJQ29xSUhOMGNtVnVaM1JvTEZ4dUlDQWdJR05wY21NNklIQnliMmR5WlhOeklEMCtJREVnTFNCTllYUm9Mbk5wYmloTllYUm9MbUZqYjNNb2NISnZaM0psYzNNcEtTeGNiaUFnSUNCaVlXTnJPaUFvY0hKdlozSmxjM01zSUhOMGNtVnVaM1JvSUQwZ1JFVkdRVlZNVkY5Q1FVTkxYMU5VVWtWT1IxUklLU0E5UGlBb2NISnZaM0psYzNNZ0tpQndjbTluY21WemN5a2dLaUFvS0hOMGNtVnVaM1JvSUNzZ01Ta2dLaUJ3Y205bmNtVnpjeUF0SUhOMGNtVnVaM1JvS1Z4dWZUdGNibHh1THk4Z1ZYUnBiR2wwZVNCbWRXNWpkR2x2Ym5OY2JtTnZibk4wSUdkbGJtVnlZWFJsVUc5M1pYSkZZWE5wYm1jZ1BTQW9jM1J5Wlc1bmRHZ3BJRDArSUNod2NtOW5jbVZ6Y3lrZ1BUNGdZbUZ6WlVWaGMybHVaeTVsWVhObEtIQnliMmR5WlhOekxDQnpkSEpsYm1kMGFDazdYRzVjYmxzblkzVmlhV01uTENBbmNYVmhjblFuTENBbmNYVnBiblFuWFM1bWIzSkZZV05vS0NobFlYTnBibWRPWVcxbExDQnBLU0E5UGlCaVlYTmxSV0Z6YVc1blcyVmhjMmx1WjA1aGJXVmRJRDBnWjJWdVpYSmhkR1ZRYjNkbGNrVmhjMmx1WnlocElDc2dNeWtwTzF4dVhHNHZMeUJIWlc1bGNtRjBaU0JwYmk5dmRYUXZhVzVQZFhRZ2RtRnlhV0YwYVc5dWMxeHVabTl5SUNoc1pYUWdhMlY1SUdsdUlHSmhjMlZGWVhOcGJtY3BJSHRjYmlBZ0lDQnBaaUFvWW1GelpVVmhjMmx1Wnk1b1lYTlBkMjVRY205d1pYSjBlU2hyWlhrcEtTQjdYRzRnSUNBZ0lDQWdJR052Ym5OMElHVmhjMmx1WjBaMWJtTjBhVzl1SUQwZ1kzSmxZWFJsUldGemFXNW5SblZ1WTNScGIyNG9ZbUZ6WlVWaGMybHVaMXRyWlhsZEtUdGNiaUFnSUNBZ0lDQWdZbUZ6WlVWaGMybHVaMXRnSkh0clpYbDlTVzVnWFNBOUlHVmhjMmx1WjBaMWJtTjBhVzl1TG1sdU8xeHVJQ0FnSUNBZ0lDQmlZWE5sUldGemFXNW5XMkFrZTJ0bGVYMVBkWFJnWFNBOUlHVmhjMmx1WjBaMWJtTjBhVzl1TG05MWREdGNiaUFnSUNBZ0lDQWdZbUZ6WlVWaGMybHVaMXRnSkh0clpYbDlTVzVQZFhSZ1hTQTlJR1ZoYzJsdVowWjFibU4wYVc5dUxtbHVUM1YwTzF4dUlDQWdJSDFjYm4xY2JseHVZbUZ6WlVWaGMybHVaeTVzYVc1bFlYSWdQU0J3Y205bmNtVnpjeUE5UGlCd2NtOW5jbVZ6Y3p0Y2JtSmhjMlZGWVhOcGJtY3VZVzUwYVdOcGNHRjBaU0E5SUNod2NtOW5jbVZ6Y3l3Z2MzUnlaVzVuZEdnZ1BTQkVSVVpCVlV4VVgwSkJRMHRmVTFSU1JVNUhWRWdwSUQwK1hHNGdJQ0FnS0Nod2NtOW5jbVZ6Y3lvOU1pa2dQQ0F4S1NBL0lEQXVOU0FxSUdKaGMyVkZZWE5wYm1jdVltRmphMGx1S0hCeWIyZHlaWE56TENCemRISmxibWQwYUNrZ09pQWdNQzQxSUNvZ0tESWdMU0JOWVhSb0xuQnZkeWd5TENBdE1UQWdLaUFvY0hKdlozSmxjM01nTFNBeEtTa3BPMXh1WEc1aVlYTmxSV0Z6YVc1bkxtTnlaV0YwWlZaaGNtbGhkR2x2Ym5NZ1BTQmpjbVZoZEdWRllYTnBibWRHZFc1amRHbHZianRjYm1KaGMyVkZZWE5wYm1jdVkzVmlhV05DWlhwcFpYSWdQU0JqZFdKcFkwSmxlbWxsY2p0Y2JtSmhjMlZGWVhOcGJtY3ViVzlrYVdaNUlEMGdLR1ZoYzJsdVp5d2dMaTR1WVhKbmN5a2dQVDRnS0hCeWIyZHlaWE56S1NBOVBpQmxZWE5wYm1jb2NISnZaM0psYzNNc0lDNHVMbUZ5WjNNcE8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQmlZWE5sUldGemFXNW5PeUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9lYXNpbmcvcHJlc2V0LWVhc2luZy5qc1xuICoqIG1vZHVsZSBpZCA9IDE3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfRmxvdyA9IHJlcXVpcmUoJy4uL0Zsb3cnKTtcblxudmFyIF9GbG93MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Zsb3cpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgU0FWRV9QUk9QID0gJ19fcG1fZmxvdyc7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnRbU0FWRV9QUk9QXSkge1xuICAgICAgICByZXR1cm4gZWxlbWVudFtTQVZFX1BST1BdO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBmbG93ID0gbmV3IF9GbG93Mi5kZWZhdWx0KHsgYWRhcHRlcjogZWxlbWVudCB9KTtcblxuICAgICAgICAvLyBCaW5kIGFkYXB0ZXIgdG8gZWxlbWVudFxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgU0FWRV9QUk9QLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHZhbHVlOiBmbG93XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBmbG93O1xuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwyWnNiM2N2WjJWMExXWnNiM2N1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3T3p0QlFVVkJMRWxCUVUwc1dVRkJXU3hYUVVGYU96dHJRa0ZGVXl4VlFVRkRMRTlCUVVRc1JVRkJZVHRCUVVONFFpeFJRVUZKTEZGQlFWRXNVMEZCVWl4RFFVRktMRVZCUVhkQ08wRkJRM0JDTEdWQlFVOHNVVUZCVVN4VFFVRlNMRU5CUVZBc1EwRkViMEk3UzBGQmVFSXNUVUZGVHp0QlFVTklMRmxCUVUwc1QwRkJUeXh0UWtGQlV5eEZRVUZGTEZOQlFWTXNUMEZCVkN4RlFVRllMRU5CUVZBN096dEJRVVJJTEdOQlNVZ3NRMEZCVHl4alFVRlFMRU5CUVhOQ0xFOUJRWFJDTEVWQlFTdENMRk5CUVM5Q0xFVkJRVEJETzBGQlEzUkRMSGRDUVVGWkxFdEJRVm83UVVGRFFTeHpRa0ZCVlN4TFFVRldPMEZCUTBFc2JVSkJRVThzU1VGQlVEdFRRVWhLTEVWQlNrYzdPMEZCVlVnc1pVRkJUeXhKUVVGUUxFTkJWa2M3UzBGR1VEdERRVVJYSWl3aVptbHNaU0k2SW1kbGRDMW1iRzkzTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMEwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCR2JHOTNJR1p5YjIwZ0p5NHVMMFpzYjNjbk8xeHVYRzVqYjI1emRDQlRRVlpGWDFCU1QxQWdQU0FuWDE5d2JWOW1iRzkzSnp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ0tHVnNaVzFsYm5RcElEMCtJSHRjYmlBZ0lDQnBaaUFvWld4bGJXVnVkRnRUUVZaRlgxQlNUMUJkS1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCbGJHVnRaVzUwVzFOQlZrVmZVRkpQVUYwN1hHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdabXh2ZHlBOUlHNWxkeUJHYkc5M0tIc2dZV1JoY0hSbGNqb2daV3hsYldWdWRDQjlLVHRjYmx4dUlDQWdJQ0FnSUNBdkx5QkNhVzVrSUdGa1lYQjBaWElnZEc4Z1pXeGxiV1Z1ZEZ4dUlDQWdJQ0FnSUNCUFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29aV3hsYldWdWRDd2dVMEZXUlY5UVVrOVFMQ0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmxiblZ0WlhKaFlteGxPaUJtWVd4elpTeGNiaUFnSUNBZ0lDQWdJQ0FnSUhkeWFYUmhZbXhsT2lCbVlXeHpaU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmhiSFZsT2lCbWJHOTNYRzRnSUNBZ0lDQWdJSDBwTzF4dVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCbWJHOTNPMXh1SUNBZ0lIMWNibjA3WEc1Y2JseHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL2Zsb3cvZ2V0LWZsb3cuanNcbiAqKiBtb2R1bGUgaWQgPSAxOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5zdGVwUHJvZ3Jlc3MgPSBleHBvcnRzLnNwZWVkUGVyU2Vjb25kID0gZXhwb3J0cy5zcGVlZFBlckZyYW1lID0gZXhwb3J0cy5zbW9vdGggPSBleHBvcnRzLnJlc3RyaWN0ID0gZXhwb3J0cy5yZWxhdGl2ZVZhbHVlID0gZXhwb3J0cy5yYW5kb20gPSBleHBvcnRzLnJhZGlhbnNUb0RlZ3JlZXMgPSBleHBvcnRzLnBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UgPSBleHBvcnRzLm9mZnNldCA9IGV4cG9ydHMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUgPSBleHBvcnRzLmdldFZhbHVlRnJvbVByb2dyZXNzID0gZXhwb3J0cy5oeXBvdGVudXNlID0gZXhwb3J0cy5lYXNlID0gZXhwb3J0cy5kaXN0YW5jZSA9IGV4cG9ydHMuZGlsYXRlID0gZXhwb3J0cy5kZWdyZWVzVG9SYWRpYW5zID0gZXhwb3J0cy5hbmdsZSA9IHVuZGVmaW5lZDtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIFpFUk9fUE9JTlQgPSB7XG4gICAgeDogMCxcbiAgICB5OiAwLFxuICAgIHo6IDBcbn07XG5cbnZhciBkaXN0YW5jZTFEID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gTWF0aC5hYnMoYSAtIGIpO1xufTtcblxuLypcbiAgICBBbmdsZSBiZXR3ZWVuIHBvaW50c1xuICAgIFxuICAgIFRyYW5zbGF0ZXMgdGhlIGh5cG90aGV0aWNhbCBsaW5lIHNvIHRoYXQgdGhlICdmcm9tJyBjb29yZGluYXRlc1xuICAgIGFyZSBhdCAwLDBcbiAgICBcbiAgICBAcGFyYW0gW29iamVjdF06IFggYW5kIFkgY29vcmRpbmF0ZXMgb2YgZnJvbSBwb2ludFxuICAgIEBwYXJhbSBbb2JqZWN0XTogWCBhbmQgWSBjb3JkaW5hdGVzIG9mIHRvIHBvaW50XG4gICAgQHJldHVybiBbcmFkaWFuXTogQW5nbGUgYmV0d2VlbiB0aGUgdHdvIHBvaW50cyBpbiByYWRpYW5zXG4qL1xudmFyIGFuZ2xlID0gZXhwb3J0cy5hbmdsZSA9IGZ1bmN0aW9uIChhKSB7XG4gICAgdmFyIGIgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBaRVJPX1BPSU5UIDogYXJndW1lbnRzWzFdO1xuICAgIHJldHVybiByYWRpYW5zVG9EZWdyZWVzKE1hdGguYXRhbjIoYS54IC0gYi54LCBhLnkgLSBiLnkpKTtcbn07XG5cbi8qXG4gICAgQ29udmVydCBkZWdyZWVzIHRvIHJhZGlhbnNcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIGluIGRlZ3JlZXNcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBpbiByYWRpYW5zXG4qL1xudmFyIGRlZ3JlZXNUb1JhZGlhbnMgPSBleHBvcnRzLmRlZ3JlZXNUb1JhZGlhbnMgPSBmdW5jdGlvbiAoZGVncmVlcykge1xuICAgIHJldHVybiBkZWdyZWVzICogTWF0aC5QSSAvIDE4MDtcbn07XG5cbi8qXG4gICAgRGlsYXRlXG4gICAgXG4gICAgQ2hhbmdlIHRoZSBwcm9ncmVzc2lvbiBiZXR3ZWVuIGEgYW5kIGIgYWNjb3JkaW5nIHRvIGRpbGF0aW9uLlxuICAgIFxuICAgIFNvIGRpbGF0aW9uID0gMC41IHdvdWxkIGNoYW5nZVxuICAgIFxuICAgIGEgLS0tLS0tLS0tIGJcbiAgICBcbiAgICB0b1xuICAgIFxuICAgIGEgLS0tLSBiXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBQcmV2aW91cyB2YWx1ZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogRGlsYXRlIHByb2dyZXNzIGJ5IHhcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBQcmV2aW91cyB2YWx1ZSBwbHVzIHRoZSBkaWxhdGVkIGRpZmZlcmVuY2VcbiovXG52YXIgZGlsYXRlID0gZXhwb3J0cy5kaWxhdGUgPSBmdW5jdGlvbiAoYSwgYiwgZGlsYXRpb24pIHtcbiAgICByZXR1cm4gYSArIChiIC0gYSkgKiBkaWxhdGlvbjtcbn07XG5cbi8qXG4gICAgRGlzdGFuY2VcbiAgICBcbiAgICBSZXR1cm5zIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHR3byBuIGRpbWVuc2lvbmFsIHBvaW50cy5cbiAgICBcbiAgICBAcGFyYW0gW29iamVjdC9udW1iZXJdOiB4IGFuZCB5IG9yIGp1c3QgeCBvZiBwb2ludCBBXG4gICAgQHBhcmFtIFtvYmplY3QvbnVtYmVyXTogKG9wdGlvbmFsKTogeCBhbmQgeSBvciBqdXN0IHggb2YgcG9pbnQgQlxuICAgIEByZXR1cm4gW251bWJlcl06IFRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzXG4qL1xudmFyIGRpc3RhbmNlID0gZXhwb3J0cy5kaXN0YW5jZSA9IGZ1bmN0aW9uIChhKSB7XG4gICAgdmFyIGIgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBaRVJPX1BPSU5UIDogYXJndW1lbnRzWzFdO1xuXG4gICAgLy8gMUQgZGltZW5zaW9uc1xuICAgIGlmICgoMCwgX3V0aWxzLmlzTnVtKShhKSkge1xuICAgICAgICByZXR1cm4gZGlzdGFuY2UxRChhLCBiKTtcblxuICAgICAgICAvLyBNdWx0aS1kaW1lbnNpb25hbFxuICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgeERlbHRhID0gZGlzdGFuY2UxRChhLngsIGIueCk7XG4gICAgICAgICAgICB2YXIgeURlbHRhID0gZGlzdGFuY2UxRChhLnksIGIueSk7XG4gICAgICAgICAgICB2YXIgekRlbHRhID0gKDAsIF91dGlscy5pc051bSkoYS56KSA/IGRpc3RhbmNlMUQoYS56LCBiLnopIDogMDtcblxuICAgICAgICAgICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyh4RGVsdGEsIDIpICsgTWF0aC5wb3coeURlbHRhLCAyKSArIE1hdGgucG93KHpEZWx0YSwgMikpO1xuICAgICAgICB9XG59O1xuXG4vKlxuICAgIEVhc2UgdmFsdWUgd2l0aGluIHJhbmdlZCBwYXJhbWV0ZXJzXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcyBiZXR3ZWVuIDAgYW5kIDFcbiAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIG9mIDAgcHJvZ3Jlc3NcbiAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIG9mIDEgcHJvZ3Jlc3NcbiAgICBAcGFyYW0gW3N0cmluZyB8fCBmdW5jdGlvbl06IE5hbWUgb2YgcHJlc2V0IGVhc2luZ1xuICAgICAgICB0byB1c2Ugb3IgZ2VuZXJhdGVkIGVhc2luZyBmdW5jdGlvblxuICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIG9mIGVhc2VkIHByb2dyZXNzIGluIHJhbmdlXG4qL1xudmFyIGVhc2UgPSBleHBvcnRzLmVhc2UgPSBmdW5jdGlvbiAocHJvZ3Jlc3MsIGZyb20sIHRvLCBlYXNlKSB7XG4gICAgdmFyIHByb2dyZXNzTGltaXRlZCA9IHJlc3RyaWN0KHByb2dyZXNzLCAwLCAxKTtcbiAgICB2YXIgZWFzZWRQcm9ncmVzcyA9IGVhc2UocHJvZ3Jlc3NMaW1pdGVkKTtcblxuICAgIHJldHVybiBnZXRWYWx1ZUZyb21Qcm9ncmVzcyhlYXNlZFByb2dyZXNzLCBmcm9tLCB0byk7XG59O1xuXG4vKlxuICAgIEh5cG90ZW51c2VcbiAgICBcbiAgICBSZXR1cm5zIHRoZSBoeXBvdGVudXNlLCBzaWRlIEMsIGdpdmVuIHRoZSBsZW5ndGhzIG9mIHNpZGVzIEEgYW5kIEIuXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBMZW5ndGggb2YgQVxuICAgIEBwYXJhbSBbbnVtYmVyXTogTGVuZ3RoIG9mIEJcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBMZW5ndGggb2YgQ1xuKi9cbnZhciBoeXBvdGVudXNlID0gZXhwb3J0cy5oeXBvdGVudXNlID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KGEgKiBhICsgYiAqIGIpO1xufTtcblxuLypcbiAgICBWYWx1ZSBpbiByYW5nZSBmcm9tIHByb2dyZXNzXG4gICAgXG4gICAgR2l2ZW4gYSBsb3dlciBsaW1pdCBhbmQgYW4gdXBwZXIgbGltaXQsIHdlIHJldHVybiB0aGUgdmFsdWUgd2l0aGluXG4gICAgdGhhdCByYW5nZSBhcyBleHByZXNzZWQgYnkgcHJvZ3Jlc3MgKGEgbnVtYmVyIGZyb20gMC0xKVxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVGhlIHByb2dyZXNzIGJldHdlZW4gbG93ZXIgYW5kIHVwcGVyIGxpbWl0cyBleHByZXNzZWQgMC0xXG4gICAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBvZiByYW5nZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXQgb2YgcmFuZ2VcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBhcyBjYWxjdWxhdGVkIGZyb20gcHJvZ3Jlc3Mgd2l0aGluIHJhbmdlIChub3QgbGltaXRlZCB3aXRoaW4gcmFuZ2UpXG4qL1xudmFyIGdldFZhbHVlRnJvbVByb2dyZXNzID0gZXhwb3J0cy5nZXRWYWx1ZUZyb21Qcm9ncmVzcyA9IGZ1bmN0aW9uIChwcm9ncmVzcywgZnJvbSwgdG8pIHtcbiAgICByZXR1cm4gLXByb2dyZXNzICogZnJvbSArIHByb2dyZXNzICogdG8gKyBmcm9tO1xufTtcblxuLypcbiAgICBQcm9ncmVzcyB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiAgICBcbiAgICBHaXZlbiBhIGxvd2VyIGxpbWl0IGFuZCBhbiB1cHBlciBsaW1pdCwgd2UgcmV0dXJuIHRoZSBwcm9ncmVzc1xuICAgIChleHByZXNzZWQgYXMgYSBudW1iZXIgMC0xKSByZXByZXNlbnRlZCBieSB0aGUgZ2l2ZW4gdmFsdWUsIGFuZFxuICAgIGxpbWl0IHRoYXQgcHJvZ3Jlc3MgdG8gd2l0aGluIDAtMS5cbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIHRvIGZpbmQgcHJvZ3Jlc3Mgd2l0aGluIGdpdmVuIHJhbmdlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBcbiAgICBAcGFyYW0gW251bWJlcl06IFVwcGVyIGxpbWl0XG4gICAgQHJldHVybiBbbnVtYmVyXTogUHJvZ3Jlc3Mgb2YgdmFsdWUgd2l0aGluIHJhbmdlIGFzIGV4cHJlc3NlZCAwLTFcbiovXG52YXIgZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUgPSBleHBvcnRzLmdldFByb2dyZXNzRnJvbVZhbHVlID0gZnVuY3Rpb24gKHZhbHVlLCBmcm9tLCB0bykge1xuICAgIHJldHVybiAodmFsdWUgLSBmcm9tKSAvICh0byAtIGZyb20pO1xufTtcblxuLypcbiAgICBPZmZzZXQgYmV0d2VlbiB0d28gb2JqZWN0cyBvZiBudW1iZXJzXG5cbiAgICBJZiBwcm9wZXJ0eSBpcyBmb3VuZCBpbiBiIG5vdCBwcmVzZW50IGluIGEsIGl0IHdpbGwgcmV0dXJuIGAwYCBmb3IgdGhhdCBwcm9wLlxuICAgIFxuICAgIEBwYXJhbSBbUG9pbnRdOiBGaXJzdCBvYmplY3RcbiAgICBAcGFyYW0gW1BvaW50XTogU2Vjb25kIG9iamVjdFxuICAgIEByZXR1cm4gW09mZnNldF06IERpc3RhbmNlIG1ldHJpY3MgYmV0d2VlbiB0d28gcG9pbnRzXG4qL1xudmFyIG9mZnNldCA9IGV4cG9ydHMub2Zmc2V0ID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICB2YXIgb2Zmc2V0ID0ge307XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gYikge1xuICAgICAgICBpZiAoYi5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICBvZmZzZXRba2V5XSA9ICgwLCBfdXRpbHMuaGFzUHJvcGVydHkpKGEsIGtleSkgPyBiW2tleV0gLSBhW2tleV0gOiAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9mZnNldDtcbn07XG5cbi8qXG4gICAgUG9pbnQgZnJvbSBhbmdsZSBhbmQgZGlzdGFuY2VcbiAgICBcbiAgICBAcGFyYW0gW29iamVjdF06IDJEIHBvaW50IG9mIG9yaWdpblxuICAgIEBwYXJhbSBbbnVtYmVyXTogQW5nbGUgZnJvbSBvcmlnaW5cbiAgICBAcGFyYW0gW251bWJlcl06IERpc3RhbmNlIGZyb20gb3JpZ2luXG4gICAgQHJldHVybiBbb2JqZWN0XTogQ2FsY3VsYXRlZCAyRCBwb2ludFxuKi9cbnZhciBwb2ludEZyb21BbmdsZUFuZERpc3RhbmNlID0gZXhwb3J0cy5wb2ludEZyb21BbmdsZUFuZERpc3RhbmNlID0gZnVuY3Rpb24gKG9yaWdpbiwgYW5nbGUsIGRpc3RhbmNlKSB7XG4gICAgYW5nbGUgPSBkZWdyZWVzVG9SYWRpYW5zKGFuZ2xlKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHg6IGRpc3RhbmNlICogTWF0aC5jb3MoYW5nbGUpICsgb3JpZ2luLngsXG4gICAgICAgIHk6IGRpc3RhbmNlICogTWF0aC5zaW4oYW5nbGUpICsgb3JpZ2luLnlcbiAgICB9O1xufTtcblxuLypcbiAgICBDb252ZXJ0IHJhZGlhbnMgdG8gZGVncmVlc1xuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgaW4gcmFkaWFuc1xuICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGluIGRlZ3JlZXNcbiovXG52YXIgcmFkaWFuc1RvRGVncmVlcyA9IGV4cG9ydHMucmFkaWFuc1RvRGVncmVlcyA9IGZ1bmN0aW9uIChyYWRpYW5zKSB7XG4gICAgcmV0dXJuIHJhZGlhbnMgKiAxODAgLyBNYXRoLlBJO1xufTtcblxuLypcbiAgICBSZXR1cm4gcmFuZG9tIG51bWJlciBiZXR3ZWVuIHJhbmdlXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IE91dHB1dCBtaW5pbXVtXG4gICAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IE91dHB1dCBtYXhpbXVtXG4gICAgQHJldHVybiBbbnVtYmVyXTogUmFuZG9tIG51bWJlciB3aXRoaW4gcmFuZ2UsIG9yIDAgYW5kIDEgaWYgbm9uZSBwcm92aWRlZFxuKi9cbnZhciByYW5kb20gPSBleHBvcnRzLnJhbmRvbSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbWluID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gMCA6IGFyZ3VtZW50c1swXTtcbiAgICB2YXIgbWF4ID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gMSA6IGFyZ3VtZW50c1sxXTtcbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xufTtcblxuLypcbiAgICBDYWxjdWxhdGUgcmVsYXRpdmUgdmFsdWVcbiAgICBcbiAgICBUYWtlcyB0aGUgb3BlcmF0b3IgYW5kIHZhbHVlIGZyb20gYSBzdHJpbmcsIGllIFwiKz01XCIsIGFuZCBhcHBsaWVzXG4gICAgdG8gdGhlIGN1cnJlbnQgdmFsdWUgdG8gcmVzb2x2ZSBhIG5ldyB0YXJnZXQuXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gICAgQHBhcmFtIFtzdHJpbmddOiBSZWxhdGl2ZSB2YWx1ZVxuICAgIEByZXR1cm4gW251bWJlcl06IE5ldyB2YWx1ZVxuKi9cbnZhciByZWxhdGl2ZVZhbHVlID0gZXhwb3J0cy5yZWxhdGl2ZVZhbHVlID0gZnVuY3Rpb24gKGN1cnJlbnQsIHJlbGF0aXZlKSB7XG4gICAgdmFyIG5ld1ZhbHVlID0gY3VycmVudDtcbiAgICB2YXIgZXF1YXRpb24gPSByZWxhdGl2ZS5zcGxpdCgnPScpO1xuICAgIHZhciBvcGVyYXRvciA9IGVxdWF0aW9uWzBdO1xuXG4gICAgdmFyIF9maW5kVmFsdWVBbmRVbml0ID0gKDAsIF91dGlscy5maW5kVmFsdWVBbmRVbml0KShlcXVhdGlvblsxXSk7XG5cbiAgICB2YXIgdW5pdCA9IF9maW5kVmFsdWVBbmRVbml0LnVuaXQ7XG4gICAgdmFyIHZhbHVlID0gX2ZpbmRWYWx1ZUFuZFVuaXQudmFsdWU7XG5cbiAgICB2YWx1ZSA9IHBhcnNlRmxvYXQodmFsdWUpO1xuXG4gICAgc3dpdGNoIChvcGVyYXRvcikge1xuICAgICAgICBjYXNlICcrJzpcbiAgICAgICAgICAgIG5ld1ZhbHVlICs9IHZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJy0nOlxuICAgICAgICAgICAgbmV3VmFsdWUgLT0gdmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnKic6XG4gICAgICAgICAgICBuZXdWYWx1ZSAqPSB2YWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICcvJzpcbiAgICAgICAgICAgIG5ld1ZhbHVlIC89IHZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKHVuaXQpIHtcbiAgICAgICAgbmV3VmFsdWUgKz0gdW5pdDtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3VmFsdWU7XG59O1xuXG4vKlxuICAgIFJlc3RyaWN0IHZhbHVlIHRvIHJhbmdlXG4gICAgXG4gICAgUmV0dXJuIHZhbHVlIHdpdGhpbiB0aGUgcmFuZ2Ugb2YgbG93ZXJMaW1pdCBhbmQgdXBwZXJMaW1pdFxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgdG8ga2VlcCB3aXRoaW4gcmFuZ2VcbiAgICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IG9mIHJhbmdlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBVcHBlciBsaW1pdCBvZiByYW5nZVxuICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGFzIGxpbWl0ZWQgd2l0aGluIGdpdmVuIHJhbmdlXG4qL1xudmFyIHJlc3RyaWN0ID0gZXhwb3J0cy5yZXN0cmljdCA9IGZ1bmN0aW9uICh2YWx1ZSwgbWluLCBtYXgpIHtcbiAgICByZXR1cm4gTWF0aC5tYXgoTWF0aC5taW4odmFsdWUsIG1heCksIG1pbik7XG59O1xuXG4vKlxuICAgIEZyYW1lcmF0ZS1pbmRlcGVuZGVudCBzbW9vdGhpbmdcblxuICAgIEBwYXJhbSBbbnVtYmVyXTogTmV3IHZhbHVlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBPbGQgdmFsdWVcbiAgICBAcGFyYW0gW251bWJlcl06IEZyYW1lIGR1cmF0aW9uXG4gICAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IFNtb290aGluZyAoMCBpcyBub25lKVxuKi9cbnZhciBzbW9vdGggPSBleHBvcnRzLnNtb290aCA9IGZ1bmN0aW9uIChuZXdWYWx1ZSwgb2xkVmFsdWUsIGR1cmF0aW9uKSB7XG4gICAgdmFyIHNtb290aGluZyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMyB8fCBhcmd1bWVudHNbM10gPT09IHVuZGVmaW5lZCA/IDAgOiBhcmd1bWVudHNbM107XG4gICAgcmV0dXJuICgwLCBfdXRpbHMudG9EZWNpbWFsKShvbGRWYWx1ZSArIGR1cmF0aW9uICogKG5ld1ZhbHVlIC0gb2xkVmFsdWUpIC8gTWF0aC5tYXgoc21vb3RoaW5nLCBkdXJhdGlvbikpO1xufTtcblxuLypcbiAgICBDb252ZXJ0IHggcGVyIHNlY29uZCB0byBwZXIgZnJhbWUgdmVsb2NpdHkgYmFzZWQgb24gZnBzXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBVbml0IHBlciBzZWNvbmRcbiAgICBAcGFyYW0gW251bWJlcl06IEZyYW1lIGR1cmF0aW9uIGluIG1zXG4qL1xudmFyIHNwZWVkUGVyRnJhbWUgPSBleHBvcnRzLnNwZWVkUGVyRnJhbWUgPSBmdW5jdGlvbiAoeHBzLCBmcmFtZUR1cmF0aW9uKSB7XG4gICAgcmV0dXJuICgwLCBfdXRpbHMuaXNOdW0pKHhwcykgPyB4cHMgLyAoMTAwMCAvIGZyYW1lRHVyYXRpb24pIDogMDtcbn07XG5cbi8qXG4gICAgQ29udmVydCB2ZWxvY2l0eSBpbnRvIHZlbGljaXR5IHBlciBzZWNvbmRcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFVuaXQgcGVyIGZyYW1lXG4gICAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvbiBpbiBtc1xuKi9cbnZhciBzcGVlZFBlclNlY29uZCA9IGV4cG9ydHMuc3BlZWRQZXJTZWNvbmQgPSBmdW5jdGlvbiAodmVsb2NpdHksIGZyYW1lRHVyYXRpb24pIHtcbiAgICByZXR1cm4gdmVsb2NpdHkgKiAoMTAwMCAvIGZyYW1lRHVyYXRpb24pO1xufTtcblxuLypcbiAgICBDcmVhdGUgc3RlcHBlZCB2ZXJzaW9uIG9mIDAtMSBwcm9ncmVzc1xuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICAgIEBwYXJhbSBbaW50XTogTnVtYmVyIG9mIHN0ZXBzXG4gICAgQHJldHVybiBbbnVtYmVyXTogU3RlcHBlZCB2YWx1ZVxuKi9cbnZhciBzdGVwUHJvZ3Jlc3MgPSBleHBvcnRzLnN0ZXBQcm9ncmVzcyA9IGZ1bmN0aW9uIChwcm9ncmVzcywgc3RlcHMpIHtcbiAgICB2YXIgc2VnbWVudCA9IDEgLyAoc3RlcHMgLSAxKTtcbiAgICB2YXIgdGFyZ2V0ID0gMSAtIDEgLyBzdGVwcztcbiAgICB2YXIgcHJvZ3Jlc3NPZlRhcmdldCA9IE1hdGgubWluKHByb2dyZXNzIC8gdGFyZ2V0LCAxKTtcblxuICAgIHJldHVybiBNYXRoLmZsb29yKHByb2dyZXNzT2ZUYXJnZXQgLyBzZWdtZW50KSAqIHNlZ21lbnQ7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1NdlkyRnNZeTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPMEZCVDBFc1NVRkJUU3hoUVVGaE8wRkJRMllzVDBGQlJ5eERRVUZJTzBGQlEwRXNUMEZCUnl4RFFVRklPMEZCUTBFc1QwRkJSeXhEUVVGSU8wTkJTRVU3TzBGQlRVNHNTVUZCVFN4aFFVRmhMRlZCUVVNc1EwRkJSQ3hGUVVGSkxFTkJRVW83VjBGQlZTeExRVUZMTEVkQlFVd3NRMEZCVXl4SlFVRkpMRU5CUVVvN1EwRkJia0k3T3pzN096czdPenM3T3p0QlFWbGFMRWxCUVUwc2QwSkJRVkVzVlVGQlF5eERRVUZFTzFGQlFVa3NNRVJCUVVrN1YwRkJaU3hwUWtGQmFVSXNTMEZCU3l4TFFVRk1MRU5CUVZjc1JVRkJSU3hEUVVGR0xFZEJRVTBzUlVGQlJTeERRVUZHTEVWQlFVc3NSVUZCUlN4RFFVRkdMRWRCUVUwc1JVRkJSU3hEUVVGR0xFTkJRVGRETzBOQlFYWkNPenM3T3pzN096dEJRVkZrTEVsQlFVMHNPRU5CUVcxQ0xGVkJRVU1zVDBGQlJEdFhRVUZoTEZWQlFWVXNTMEZCU3l4RlFVRk1MRWRCUVZVc1IwRkJjRUk3UTBGQllqczdPenM3T3pzN096czdPenM3T3pzN096czdRVUZ2UW5wQ0xFbEJRVTBzTUVKQlFWTXNWVUZCUXl4RFFVRkVMRVZCUVVrc1EwRkJTaXhGUVVGUExGRkJRVkE3VjBGQmIwSXNTVUZCU3l4RFFVRkRMRWxCUVVrc1EwRkJTaXhEUVVGRUxFZEJRVlVzVVVGQlZqdERRVUY2UWpzN096czdPenM3T3pzN1FVRlhaaXhKUVVGTkxEaENRVUZYTEZWQlFVTXNRMEZCUkN4RlFVRjFRanRSUVVGdVFpd3dSRUZCU1N3d1FrRkJaVHM3TzBGQlJUTkRMRkZCUVVrc2EwSkJRVTBzUTBGQlRpeERRVUZLTEVWQlFXTTdRVUZEVml4bFFVRlBMRmRCUVZjc1EwRkJXQ3hGUVVGakxFTkJRV1FzUTBGQlVEczdPMEZCUkZVc1MwRkJaQ3hOUVVsUE8wRkJRMGdzWjBKQlFVMHNVMEZCVXl4WFFVRlhMRVZCUVVVc1EwRkJSaXhGUVVGTExFVkJRVVVzUTBGQlJpeERRVUY2UWl4RFFVUklPMEZCUlVnc1owSkJRVTBzVTBGQlV5eFhRVUZYTEVWQlFVVXNRMEZCUml4RlFVRkxMRVZCUVVVc1EwRkJSaXhEUVVGNlFpeERRVVpJTzBGQlIwZ3NaMEpCUVUwc1UwRkJVeXhwUWtGQlF5eERRVUZOTEVWQlFVVXNRMEZCUml4RFFVRlFMRWRCUVdVc1YwRkJWeXhGUVVGRkxFTkJRVVlzUlVGQlN5eEZRVUZGTEVOQlFVWXNRMEZCTDBJc1IwRkJjME1zUTBGQmRFTXNRMEZJV2pzN1FVRkxTQ3h0UWtGQlR5eExRVUZMTEVsQlFVd3NRMEZCVlN4VFFVRkRMRkZCUVZVc1JVRkJXQ3haUVVGcFFpeFJRVUZWTEVWQlFUTkNMRmxCUVdsRExGRkJRVlVzUlVGQk0wTXNRMEZCYWtJc1EwRk1SenRUUVVwUU8wTkJSbTlDT3pzN096czdPenM3T3pzN1FVRjVRbXBDTEVsQlFVMHNjMEpCUVU4c1ZVRkJReXhSUVVGRUxFVkJRVmNzU1VGQldDeEZRVUZwUWl4RlFVRnFRaXhGUVVGeFFpeEpRVUZ5UWl4RlFVRTRRanRCUVVNNVF5eFJRVUZOTEd0Q1FVRnJRaXhUUVVGVExGRkJRVlFzUlVGQmJVSXNRMEZCYmtJc1JVRkJjMElzUTBGQmRFSXNRMEZCYkVJc1EwRkVkME03UVVGRk9VTXNVVUZCVFN4blFrRkJaMElzUzBGQlN5eGxRVUZNTEVOQlFXaENMRU5CUm5kRE96dEJRVWs1UXl4WFFVRlBMSEZDUVVGeFFpeGhRVUZ5UWl4RlFVRnZReXhKUVVGd1F5eEZRVUV3UXl4RlFVRXhReXhEUVVGUUxFTkJTamhETzBOQlFUbENPenM3T3pzN096czdPenRCUVdkQ1lpeEpRVUZOTEd0RFFVRmhMRlZCUVVNc1EwRkJSQ3hGUVVGSkxFTkJRVW83VjBGQlZTeExRVUZMTEVsQlFVd3NRMEZCVlN4RFFVRkRMRWRCUVVrc1EwRkJTaXhIUVVGVkxFbEJRVWtzUTBGQlNqdERRVUV2UWpzN096czdPenM3T3pzN096dEJRV0Z1UWl4SlFVRk5MSE5FUVVGMVFpeFZRVUZETEZGQlFVUXNSVUZCVnl4SlFVRllMRVZCUVdsQ0xFVkJRV3BDTzFkQlFYZENMRU5CUVVjc1VVRkJSaXhIUVVGaExFbEJRV0lzUjBGQmMwSXNWMEZCVnl4RlFVRllMRWRCUVdsQ0xFbEJRWGhETzBOQlFYaENPenM3T3pzN096czdPenM3T3p0QlFXTTNRaXhKUVVGTkxITkVRVUYxUWl4VlFVRkRMRXRCUVVRc1JVRkJVU3hKUVVGU0xFVkJRV01zUlVGQlpEdFhRVUZ4UWl4RFFVRkRMRkZCUVZFc1NVRkJVaXhEUVVGRUxFbEJRV3RDTEV0QlFVc3NTVUZCVEN4RFFVRnNRanREUVVGeVFqczdPenM3T3pzN096czdRVUZYTjBJc1NVRkJUU3d3UWtGQlV5eFZRVUZETEVOQlFVUXNSVUZCU1N4RFFVRktMRVZCUVZVN1FVRkROVUlzVVVGQlRTeFRRVUZUTEVWQlFWUXNRMEZFYzBJN08wRkJSelZDTEZOQlFVc3NTVUZCU1N4SFFVRktMRWxCUVZjc1EwRkJhRUlzUlVGQmJVSTdRVUZEWml4WlFVRkpMRVZCUVVVc1kwRkJSaXhEUVVGcFFpeEhRVUZxUWl4RFFVRktMRVZCUVRKQ08wRkJRM1pDTEcxQ1FVRlBMRWRCUVZBc1NVRkJZeXgzUWtGQldTeERRVUZhTEVWQlFXVXNSMEZCWml4SlFVRnpRaXhGUVVGRkxFZEJRVVlzU1VGQlV5eEZRVUZGTEVkQlFVWXNRMEZCVkN4SFFVRnJRaXhEUVVGNFF5eERRVVJUTzFOQlFUTkNPMHRCUkVvN08wRkJUVUVzVjBGQlR5eE5RVUZRTEVOQlZEUkNPME5CUVZZN096czdPenM3T3pzN1FVRnZRbVlzU1VGQlRTeG5SVUZCTkVJc1ZVRkJReXhOUVVGRUxFVkJRVk1zUzBGQlZDeEZRVUZuUWl4UlFVRm9RaXhGUVVFMlFqdEJRVU5zUlN4WlFVRlJMR2xDUVVGcFFpeExRVUZxUWl4RFFVRlNMRU5CUkd0Rk96dEJRVWRzUlN4WFFVRlBPMEZCUTBnc1YwRkJSeXhYUVVGWExFdEJRVXNzUjBGQlRDeERRVUZUTEV0QlFWUXNRMEZCV0N4SFFVRTJRaXhQUVVGUExFTkJRVkE3UVVGRGFFTXNWMEZCUnl4WFFVRlhMRXRCUVVzc1IwRkJUQ3hEUVVGVExFdEJRVlFzUTBGQldDeEhRVUUyUWl4UFFVRlBMRU5CUVZBN1MwRkdjRU1zUTBGSWEwVTdRMEZCTjBJN096czdPenM3TzBGQlpXeERMRWxCUVUwc09FTkJRVzFDTEZWQlFVTXNUMEZCUkR0WFFVRmhMRlZCUVZVc1IwRkJWaXhIUVVGblFpeExRVUZMTEVWQlFVdzdRMEZCTjBJN096czdPenM3T3p0QlFWTjZRaXhKUVVGTkxEQkNRVUZUTzFGQlFVTXNORVJCUVUwN1VVRkJSeXcwUkVGQlRUdFhRVUZOTEV0QlFVc3NUVUZCVEN4TlFVRnBRaXhOUVVGTkxFZEJRVTRzUTBGQmFrSXNSMEZCT0VJc1IwRkJPVUk3UTBGQmRFSTdPenM3T3pzN096czdPenRCUVZsbUxFbEJRVTBzZDBOQlFXZENMRlZCUVVNc1QwRkJSQ3hGUVVGVkxGRkJRVllzUlVGQmRVSTdRVUZEYUVRc1VVRkJTU3hYUVVGWExFOUJRVmdzUTBGRU5FTTdRVUZGYUVRc1VVRkJUU3hYUVVGWExGTkJRVk1zUzBGQlZDeERRVUZsTEVkQlFXWXNRMEZCV0N4RFFVWXdRenRCUVVkb1JDeFJRVUZOTEZkQlFWY3NVMEZCVXl4RFFVRlVMRU5CUVZnc1EwRklNRU03T3pSQ1FVa3hRaXcyUWtGQmFVSXNVMEZCVXl4RFFVRlVMRU5CUVdwQ0xFVkJTakJDT3p0UlFVa3hReXc0UWtGS01FTTdVVUZKY0VNc1owTkJTbTlET3p0QlFVMW9SQ3haUVVGUkxGZEJRVmNzUzBGQldDeERRVUZTTEVOQlRtZEVPenRCUVZGb1JDeFpRVUZSTEZGQlFWSTdRVUZEUVN4aFFVRkxMRWRCUVV3N1FVRkRTU3gzUWtGQldTeExRVUZhTEVOQlJFbzdRVUZGU1N4clFrRkdTanRCUVVSQkxHRkJTVXNzUjBGQlREdEJRVU5KTEhkQ1FVRlpMRXRCUVZvc1EwRkVTanRCUVVWSkxHdENRVVpLTzBGQlNrRXNZVUZQU3l4SFFVRk1PMEZCUTBrc2QwSkJRVmtzUzBGQldpeERRVVJLTzBGQlJVa3NhMEpCUmtvN1FVRlFRU3hoUVZWTExFZEJRVXc3UVVGRFNTeDNRa0ZCV1N4TFFVRmFMRU5CUkVvN1FVRkZTU3hyUWtGR1NqdEJRVlpCTEV0QlVtZEVPenRCUVhWQ2FFUXNVVUZCU1N4SlFVRktMRVZCUVZVN1FVRkRUaXh2UWtGQldTeEpRVUZhTEVOQlJFMDdTMEZCVmpzN1FVRkpRU3hYUVVGUExGRkJRVkFzUTBFelFtZEVPME5CUVhaQ096czdPenM3T3pzN096czdRVUYzUTNSQ0xFbEJRVTBzT0VKQlFWY3NWVUZCUXl4TFFVRkVMRVZCUVZFc1IwRkJVaXhGUVVGaExFZEJRV0k3VjBGQmNVSXNTMEZCU3l4SFFVRk1MRU5CUVZNc1MwRkJTeXhIUVVGTUxFTkJRVk1zUzBGQlZDeEZRVUZuUWl4SFFVRm9RaXhEUVVGVUxFVkJRU3RDTEVkQlFTOUNPME5CUVhKQ096czdPenM3T3pzN08wRkJWV3BDTEVsQlFVMHNNRUpCUVZNc1ZVRkJReXhSUVVGRUxFVkJRVmNzVVVGQldDeEZRVUZ4UWl4UlFVRnlRanRSUVVFclFpeHJSVUZCV1R0WFFVRk5MSE5DUVVGVkxGZEJRVmtzV1VGQldTeFhRVUZYTEZGQlFWZ3NRMEZCV2l4SFFVRnRReXhMUVVGTExFZEJRVXdzUTBGQlV5eFRRVUZVTEVWQlFXOUNMRkZCUVhCQ0xFTkJRVzVETzBOQlFYWkZPenM3T3pzN096dEJRVkZtTEVsQlFVMHNkME5CUVdkQ0xGVkJRVU1zUjBGQlJDeEZRVUZOTEdGQlFVNDdWMEZCZDBJc2FVSkJRVU1zUTBGQlRTeEhRVUZPTEVOQlFVUXNSMEZCWlN4UFFVRlBMRTlCUVU4c1lVRkJVQ3hEUVVGUUxFZEJRU3RDTEVOQlFUbERPME5CUVhoQ096czdPenM3T3p0QlFWRjBRaXhKUVVGTkxEQkRRVUZwUWl4VlFVRkRMRkZCUVVRc1JVRkJWeXhoUVVGWU8xZEJRVFpDTEZsQlFWa3NUMEZCVHl4aFFVRlFMRU5CUVZvN1EwRkJOMEk3T3pzN096czdPenRCUVZOMlFpeEpRVUZOTEhORFFVRmxMRlZCUVVNc1VVRkJSQ3hGUVVGWExFdEJRVmdzUlVGQmNVSTdRVUZETjBNc1VVRkJUU3hWUVVGVkxFdEJRVXNzVVVGQlVTeERRVUZTTEVOQlFVd3NRMEZFTmtJN1FVRkZOME1zVVVGQlRTeFRRVUZUTEVsQlFVc3NTVUZCU1N4TFFVRktMRU5CUm5sQ08wRkJSemRETEZGQlFVMHNiVUpCUVcxQ0xFdEJRVXNzUjBGQlRDeERRVUZUTEZkQlFWY3NUVUZCV0N4RlFVRnRRaXhEUVVFMVFpeERRVUZ1UWl4RFFVaDFRenM3UVVGTE4wTXNWMEZCVHl4TFFVRkxMRXRCUVV3c1EwRkJWeXh0UWtGQmJVSXNUMEZCYmtJc1EwRkJXQ3hIUVVGNVF5eFBRVUY2UXl4RFFVeHpRenREUVVGeVFpSXNJbVpwYkdVaU9pSmpZV3hqTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMEwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCN1hHNGdJQ0FnYUdGelVISnZjR1Z5ZEhrc1hHNGdJQ0FnYVhOT2RXMHNYRzRnSUNBZ1ptbHVaRlpoYkhWbFFXNWtWVzVwZEN4Y2JpQWdJQ0IwYjBSbFkybHRZV3hjYm4wZ1puSnZiU0FuTGk5MWRHbHNjeWM3WEc1Y2JtTnZibk4wSUZwRlVrOWZVRTlKVGxRZ1BTQjdYRzRnSUNBZ2VEb2dNQ3hjYmlBZ0lDQjVPaUF3TEZ4dUlDQWdJSG82SURCY2JuMDdYRzVjYm1OdmJuTjBJR1JwYzNSaGJtTmxNVVFnUFNBb1lTd2dZaWtnUFQ0Z1RXRjBhQzVoWW5Nb1lTQXRJR0lwTzF4dVhHNHZLbHh1SUNBZ0lFRnVaMnhsSUdKbGRIZGxaVzRnY0c5cGJuUnpYRzRnSUNBZ1hHNGdJQ0FnVkhKaGJuTnNZWFJsY3lCMGFHVWdhSGx3YjNSb1pYUnBZMkZzSUd4cGJtVWdjMjhnZEdoaGRDQjBhR1VnSjJaeWIyMG5JR052YjNKa2FXNWhkR1Z6WEc0Z0lDQWdZWEpsSUdGMElEQXNNRnh1SUNBZ0lGeHVJQ0FnSUVCd1lYSmhiU0JiYjJKcVpXTjBYVG9nV0NCaGJtUWdXU0JqYjI5eVpHbHVZWFJsY3lCdlppQm1jbTl0SUhCdmFXNTBYRzRnSUNBZ1FIQmhjbUZ0SUZ0dlltcGxZM1JkT2lCWUlHRnVaQ0JaSUdOdmNtUnBibUYwWlhNZ2IyWWdkRzhnY0c5cGJuUmNiaUFnSUNCQWNtVjBkWEp1SUZ0eVlXUnBZVzVkT2lCQmJtZHNaU0JpWlhSM1pXVnVJSFJvWlNCMGQyOGdjRzlwYm5SeklHbHVJSEpoWkdsaGJuTmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdZVzVuYkdVZ1BTQW9ZU3dnWWlBOUlGcEZVazlmVUU5SlRsUXBJRDArSUhKaFpHbGhibk5VYjBSbFozSmxaWE1vVFdGMGFDNWhkR0Z1TWloaExuZ2dMU0JpTG5nc0lHRXVlU0F0SUdJdWVTa3BPMXh1WEc0dktseHVJQ0FnSUVOdmJuWmxjblFnWkdWbmNtVmxjeUIwYnlCeVlXUnBZVzV6WEc0Z0lDQWdYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCV1lXeDFaU0JwYmlCa1pXZHlaV1Z6WEc0Z0lDQWdRSEpsZEhWeWJpQmJiblZ0WW1WeVhUb2dWbUZzZFdVZ2FXNGdjbUZrYVdGdWMxeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQmtaV2R5WldWelZHOVNZV1JwWVc1eklEMGdLR1JsWjNKbFpYTXBJRDArSUdSbFozSmxaWE1nS2lCTllYUm9MbEJKSUM4Z01UZ3dPMXh1WEc0dktseHVJQ0FnSUVScGJHRjBaVnh1SUNBZ0lGeHVJQ0FnSUVOb1lXNW5aU0IwYUdVZ2NISnZaM0psYzNOcGIyNGdZbVYwZDJWbGJpQmhJR0Z1WkNCaUlHRmpZMjl5WkdsdVp5QjBieUJrYVd4aGRHbHZiaTVjYmlBZ0lDQmNiaUFnSUNCVGJ5QmthV3hoZEdsdmJpQTlJREF1TlNCM2IzVnNaQ0JqYUdGdVoyVmNiaUFnSUNCY2JpQWdJQ0JoSUMwdExTMHRMUzB0TFNCaVhHNGdJQ0FnWEc0Z0lDQWdkRzljYmlBZ0lDQmNiaUFnSUNCaElDMHRMUzBnWWx4dUlDQWdJRnh1SUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1VISmxkbWx2ZFhNZ2RtRnNkV1ZjYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklFTjFjbkpsYm5RZ2RtRnNkV1ZjYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklFUnBiR0YwWlNCd2NtOW5jbVZ6Y3lCaWVTQjRYRzRnSUNBZ1FISmxkSFZ5YmlCYmJuVnRZbVZ5WFRvZ1VISmxkbWx2ZFhNZ2RtRnNkV1VnY0d4MWN5QjBhR1VnWkdsc1lYUmxaQ0JrYVdabVpYSmxibU5sWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdScGJHRjBaU0E5SUNoaExDQmlMQ0JrYVd4aGRHbHZiaWtnUFQ0Z1lTQXJJQ2dvWWlBdElHRXBJQ29nWkdsc1lYUnBiMjRwTzF4dVhHNHZLbHh1SUNBZ0lFUnBjM1JoYm1ObFhHNGdJQ0FnWEc0Z0lDQWdVbVYwZFhKdWN5QjBhR1VnWkdsemRHRnVZMlVnWW1WMGQyVmxiaUIwZDI4Z2JpQmthVzFsYm5OcGIyNWhiQ0J3YjJsdWRITXVYRzRnSUNBZ1hHNGdJQ0FnUUhCaGNtRnRJRnR2WW1wbFkzUXZiblZ0WW1WeVhUb2dlQ0JoYm1RZ2VTQnZjaUJxZFhOMElIZ2diMllnY0c5cGJuUWdRVnh1SUNBZ0lFQndZWEpoYlNCYmIySnFaV04wTDI1MWJXSmxjbDA2SUNodmNIUnBiMjVoYkNrNklIZ2dZVzVrSUhrZ2IzSWdhblZ6ZENCNElHOW1JSEJ2YVc1MElFSmNiaUFnSUNCQWNtVjBkWEp1SUZ0dWRXMWlaWEpkT2lCVWFHVWdaR2x6ZEdGdVkyVWdZbVYwZDJWbGJpQjBhR1VnZEhkdklIQnZhVzUwYzF4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCa2FYTjBZVzVqWlNBOUlDaGhMQ0JpSUQwZ1drVlNUMTlRVDBsT1ZDa2dQVDRnZTF4dUlDQWdJQzh2SURGRUlHUnBiV1Z1YzJsdmJuTmNiaUFnSUNCcFppQW9hWE5PZFcwb1lTa3BJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR1JwYzNSaGJtTmxNVVFvWVN3Z1lpazdYRzVjYmlBZ0lDQXZMeUJOZFd4MGFTMWthVzFsYm5OcGIyNWhiRnh1SUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUhoRVpXeDBZU0E5SUdScGMzUmhibU5sTVVRb1lTNTRMQ0JpTG5ncE8xeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCNVJHVnNkR0VnUFNCa2FYTjBZVzVqWlRGRUtHRXVlU3dnWWk1NUtUdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2VrUmxiSFJoSUQwZ0tHbHpUblZ0S0dFdWVpa3BJRDhnWkdsemRHRnVZMlV4UkNoaExub3NJR0l1ZWlrZ09pQXdPMXh1WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJOWVhSb0xuTnhjblFvS0hoRVpXeDBZU0FxS2lBeUtTQXJJQ2g1UkdWc2RHRWdLaW9nTWlrZ0t5QW9la1JsYkhSaElDb3FJRElwS1R0Y2JpQWdJQ0I5WEc1OU8xeHVYRzR2S2x4dUlDQWdJRVZoYzJVZ2RtRnNkV1VnZDJsMGFHbHVJSEpoYm1kbFpDQndZWEpoYldWMFpYSnpYRzRnSUNBZ1hHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJRY205bmNtVnpjeUJpWlhSM1pXVnVJREFnWVc1a0lERmNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZaaGJIVmxJRzltSURBZ2NISnZaM0psYzNOY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRlpoYkhWbElHOW1JREVnY0hKdlozSmxjM05jYmlBZ0lDQkFjR0Z5WVcwZ1czTjBjbWx1WnlCOGZDQm1kVzVqZEdsdmJsMDZJRTVoYldVZ2IyWWdjSEpsYzJWMElHVmhjMmx1WjF4dUlDQWdJQ0FnSUNCMGJ5QjFjMlVnYjNJZ1oyVnVaWEpoZEdWa0lHVmhjMmx1WnlCbWRXNWpkR2x2Ymx4dUlDQWdJRUJ5WlhSMWNtNGdXMjUxYldKbGNsMDZJRlpoYkhWbElHOW1JR1ZoYzJWa0lIQnliMmR5WlhOeklHbHVJSEpoYm1kbFhHNHFMeUJjYm1WNGNHOXlkQ0JqYjI1emRDQmxZWE5sSUQwZ0tIQnliMmR5WlhOekxDQm1jbTl0TENCMGJ5d2daV0Z6WlNrZ1BUNGdlMXh1SUNBZ0lHTnZibk4wSUhCeWIyZHlaWE56VEdsdGFYUmxaQ0E5SUhKbGMzUnlhV04wS0hCeWIyZHlaWE56TENBd0xDQXhLVHRjYmlBZ0lDQmpiMjV6ZENCbFlYTmxaRkJ5YjJkeVpYTnpJRDBnWldGelpTaHdjbTluY21WemMweHBiV2wwWldRcE8xeHVYRzRnSUNBZ2NtVjBkWEp1SUdkbGRGWmhiSFZsUm5KdmJWQnliMmR5WlhOektHVmhjMlZrVUhKdlozSmxjM01zSUdaeWIyMHNJSFJ2S1R0Y2JuMDdYRzRnWEc0dktseHVJQ0FnSUVoNWNHOTBaVzUxYzJWY2JpQWdJQ0JjYmlBZ0lDQlNaWFIxY201eklIUm9aU0JvZVhCdmRHVnVkWE5sTENCemFXUmxJRU1zSUdkcGRtVnVJSFJvWlNCc1pXNW5kR2h6SUc5bUlITnBaR1Z6SUVFZ1lXNWtJRUl1WEc0Z0lDQWdYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCTVpXNW5kR2dnYjJZZ1FWeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVEdWdVozUm9JRzltSUVKY2JpQWdJQ0JBY21WMGRYSnVJRnR1ZFcxaVpYSmRPaUJNWlc1bmRHZ2diMllnUTF4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCb2VYQnZkR1Z1ZFhObElEMGdLR0VzSUdJcElEMCtJRTFoZEdndWMzRnlkQ2dvWVNBcUlHRXBJQ3NnS0dJZ0tpQmlLU2s3WEc1Y2JpOHFYRzRnSUNBZ1ZtRnNkV1VnYVc0Z2NtRnVaMlVnWm5KdmJTQndjbTluY21WemMxeHVJQ0FnSUZ4dUlDQWdJRWRwZG1WdUlHRWdiRzkzWlhJZ2JHbHRhWFFnWVc1a0lHRnVJSFZ3Y0dWeUlHeHBiV2wwTENCM1pTQnlaWFIxY200Z2RHaGxJSFpoYkhWbElIZHBkR2hwYmx4dUlDQWdJSFJvWVhRZ2NtRnVaMlVnWVhNZ1pYaHdjbVZ6YzJWa0lHSjVJSEJ5YjJkeVpYTnpJQ2hoSUc1MWJXSmxjaUJtY205dElEQXRNU2xjYmlBZ0lDQmNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZSb1pTQndjbTluY21WemN5QmlaWFIzWldWdUlHeHZkMlZ5SUdGdVpDQjFjSEJsY2lCc2FXMXBkSE1nWlhod2NtVnpjMlZrSURBdE1WeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVEc5M1pYSWdiR2x0YVhRZ2IyWWdjbUZ1WjJWY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRlZ3Y0dWeUlHeHBiV2wwSUc5bUlISmhibWRsWEc0Z0lDQWdRSEpsZEhWeWJpQmJiblZ0WW1WeVhUb2dWbUZzZFdVZ1lYTWdZMkZzWTNWc1lYUmxaQ0JtY205dElIQnliMmR5WlhOeklIZHBkR2hwYmlCeVlXNW5aU0FvYm05MElHeHBiV2wwWldRZ2QybDBhR2x1SUhKaGJtZGxLVnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JuWlhSV1lXeDFaVVp5YjIxUWNtOW5jbVZ6Y3lBOUlDaHdjbTluY21WemN5d2dabkp2YlN3Z2RHOHBJRDArSUNndElIQnliMmR5WlhOeklDb2dabkp2YlNrZ0t5QW9jSEp2WjNKbGMzTWdLaUIwYnlrZ0t5Qm1jbTl0TzF4dVhHNHZLbHh1SUNBZ0lGQnliMmR5WlhOeklIZHBkR2hwYmlCbmFYWmxiaUJ5WVc1blpWeHVJQ0FnSUZ4dUlDQWdJRWRwZG1WdUlHRWdiRzkzWlhJZ2JHbHRhWFFnWVc1a0lHRnVJSFZ3Y0dWeUlHeHBiV2wwTENCM1pTQnlaWFIxY200Z2RHaGxJSEJ5YjJkeVpYTnpYRzRnSUNBZ0tHVjRjSEpsYzNObFpDQmhjeUJoSUc1MWJXSmxjaUF3TFRFcElISmxjSEpsYzJWdWRHVmtJR0o1SUhSb1pTQm5hWFpsYmlCMllXeDFaU3dnWVc1a1hHNGdJQ0FnYkdsdGFYUWdkR2hoZENCd2NtOW5jbVZ6Y3lCMGJ5QjNhWFJvYVc0Z01DMHhMbHh1SUNBZ0lGeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVm1Gc2RXVWdkRzhnWm1sdVpDQndjbTluY21WemN5QjNhWFJvYVc0Z1oybDJaVzRnY21GdVoyVmNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUV4dmQyVnlJR3hwYldsMElGeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVlhCd1pYSWdiR2x0YVhSY2JpQWdJQ0JBY21WMGRYSnVJRnR1ZFcxaVpYSmRPaUJRY205bmNtVnpjeUJ2WmlCMllXeDFaU0IzYVhSb2FXNGdjbUZ1WjJVZ1lYTWdaWGh3Y21WemMyVmtJREF0TVZ4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCblpYUlFjbTluY21WemMwWnliMjFXWVd4MVpTQTlJQ2gyWVd4MVpTd2dabkp2YlN3Z2RHOHBJRDArSUNoMllXeDFaU0F0SUdaeWIyMHBJQzhnS0hSdklDMGdabkp2YlNrN1hHNWNiaThxWEc0Z0lDQWdUMlptYzJWMElHSmxkSGRsWlc0Z2RIZHZJRzlpYW1WamRITWdiMllnYm5WdFltVnljMXh1WEc0Z0lDQWdTV1lnY0hKdmNHVnlkSGtnYVhNZ1ptOTFibVFnYVc0Z1lpQnViM1FnY0hKbGMyVnVkQ0JwYmlCaExDQnBkQ0IzYVd4c0lISmxkSFZ5YmlCZ01HQWdabTl5SUhSb1lYUWdjSEp2Y0M1Y2JpQWdJQ0JjYmlBZ0lDQkFjR0Z5WVcwZ1cxQnZhVzUwWFRvZ1JtbHljM1FnYjJKcVpXTjBYRzRnSUNBZ1FIQmhjbUZ0SUZ0UWIybHVkRjA2SUZObFkyOXVaQ0J2WW1wbFkzUmNiaUFnSUNCQWNtVjBkWEp1SUZ0UFptWnpaWFJkT2lCRWFYTjBZVzVqWlNCdFpYUnlhV056SUdKbGRIZGxaVzRnZEhkdklIQnZhVzUwYzF4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCdlptWnpaWFFnUFNBb1lTd2dZaWtnUFQ0Z2UxeHVJQ0FnSUdOdmJuTjBJRzltWm5ObGRDQTlJSHQ5TzF4dVhHNGdJQ0FnWm05eUlDaHNaWFFnYTJWNUlHbHVJR0lwSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLR0l1YUdGelQzZHVVSEp2Y0dWeWRIa29hMlY1S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYjJabWMyVjBXMnRsZVYwZ1BTQm9ZWE5RY205d1pYSjBlU2hoTENCclpYa3BJRDhnWWx0clpYbGRJQzBnWVZ0clpYbGRJRG9nTUR0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JseHVJQ0FnSUhKbGRIVnliaUJ2Wm1aelpYUTdYRzU5TzF4dVhHNHZLbHh1SUNBZ0lGQnZhVzUwSUdaeWIyMGdZVzVuYkdVZ1lXNWtJR1JwYzNSaGJtTmxYRzRnSUNBZ1hHNGdJQ0FnUUhCaGNtRnRJRnR2WW1wbFkzUmRPaUF5UkNCd2IybHVkQ0J2WmlCdmNtbG5hVzVjYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklFRnVaMnhsSUdaeWIyMGdiM0pwWjJsdVhHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJFYVhOMFlXNWpaU0JtY205dElHOXlhV2RwYmx4dUlDQWdJRUJ5WlhSMWNtNGdXMjlpYW1WamRGMDZJRU5oYkdOMWJHRjBaV1FnTWtRZ2NHOXBiblJjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnY0c5cGJuUkdjbTl0UVc1bmJHVkJibVJFYVhOMFlXNWpaU0E5SUNodmNtbG5hVzRzSUdGdVoyeGxMQ0JrYVhOMFlXNWpaU2tnUFQ0Z2UxeHVJQ0FnSUdGdVoyeGxJRDBnWkdWbmNtVmxjMVJ2VW1Ga2FXRnVjeWhoYm1kc1pTazdYRzVjYmlBZ0lDQnlaWFIxY200Z2UxeHVJQ0FnSUNBZ0lDQjRPaUJrYVhOMFlXNWpaU0FxSUUxaGRHZ3VZMjl6S0dGdVoyeGxLU0FySUc5eWFXZHBiaTU0TEZ4dUlDQWdJQ0FnSUNCNU9pQmthWE4wWVc1alpTQXFJRTFoZEdndWMybHVLR0Z1WjJ4bEtTQXJJRzl5YVdkcGJpNTVYRzRnSUNBZ2ZUdGNibjA3WEc1Y2JpOHFYRzRnSUNBZ1EyOXVkbVZ5ZENCeVlXUnBZVzV6SUhSdklHUmxaM0psWlhOY2JpQWdJQ0JjYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklGWmhiSFZsSUdsdUlISmhaR2xoYm5OY2JpQWdJQ0JBY21WMGRYSnVJRnR1ZFcxaVpYSmRPaUJXWVd4MVpTQnBiaUJrWldkeVpXVnpYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJSEpoWkdsaGJuTlViMFJsWjNKbFpYTWdQU0FvY21Ga2FXRnVjeWtnUFQ0Z2NtRmthV0Z1Y3lBcUlERTRNQ0F2SUUxaGRHZ3VVRWs3WEc1Y2JpOHFYRzRnSUNBZ1VtVjBkWEp1SUhKaGJtUnZiU0J1ZFcxaVpYSWdZbVYwZDJWbGJpQnlZVzVuWlZ4dUlDQWdJRnh1SUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFNBb2IzQjBhVzl1WVd3cE9pQlBkWFJ3ZFhRZ2JXbHVhVzExYlZ4dUlDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhTQW9iM0IwYVc5dVlXd3BPaUJQZFhSd2RYUWdiV0Y0YVcxMWJWeHVJQ0FnSUVCeVpYUjFjbTRnVzI1MWJXSmxjbDA2SUZKaGJtUnZiU0J1ZFcxaVpYSWdkMmwwYUdsdUlISmhibWRsTENCdmNpQXdJR0Z1WkNBeElHbG1JRzV2Ym1VZ2NISnZkbWxrWldSY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2NtRnVaRzl0SUQwZ0tHMXBiaUE5SURBc0lHMWhlQ0E5SURFcElEMCtJRTFoZEdndWNtRnVaRzl0S0NrZ0tpQW9iV0Y0SUMwZ2JXbHVLU0FySUcxcGJqdGNibHh1THlwY2JpQWdJQ0JEWVd4amRXeGhkR1VnY21Wc1lYUnBkbVVnZG1Gc2RXVmNiaUFnSUNCY2JpQWdJQ0JVWVd0bGN5QjBhR1VnYjNCbGNtRjBiM0lnWVc1a0lIWmhiSFZsSUdaeWIyMGdZU0J6ZEhKcGJtY3NJR2xsSUZ3aUt6MDFYQ0lzSUdGdVpDQmhjSEJzYVdWelhHNGdJQ0FnZEc4Z2RHaGxJR04xY25KbGJuUWdkbUZzZFdVZ2RHOGdjbVZ6YjJ4MlpTQmhJRzVsZHlCMFlYSm5aWFF1WEc0Z0lDQWdYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCRGRYSnlaVzUwSUhaaGJIVmxYRzRnSUNBZ1FIQmhjbUZ0SUZ0emRISnBibWRkT2lCU1pXeGhkR2wyWlNCMllXeDFaVnh1SUNBZ0lFQnlaWFIxY200Z1cyNTFiV0psY2wwNklFNWxkeUIyWVd4MVpWeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnlaV3hoZEdsMlpWWmhiSFZsSUQwZ0tHTjFjbkpsYm5Rc0lISmxiR0YwYVhabEtTQTlQaUI3WEc0Z0lDQWdiR1YwSUc1bGQxWmhiSFZsSUQwZ1kzVnljbVZ1ZER0Y2JpQWdJQ0JqYjI1emRDQmxjWFZoZEdsdmJpQTlJSEpsYkdGMGFYWmxMbk53YkdsMEtDYzlKeWs3WEc0Z0lDQWdZMjl1YzNRZ2IzQmxjbUYwYjNJZ1BTQmxjWFZoZEdsdmJsc3dYVHRjYmlBZ0lDQnNaWFFnZXlCMWJtbDBMQ0IyWVd4MVpTQjlJRDBnWm1sdVpGWmhiSFZsUVc1a1ZXNXBkQ2hsY1hWaGRHbHZibHN4WFNrN1hHNWNiaUFnSUNCMllXeDFaU0E5SUhCaGNuTmxSbXh2WVhRb2RtRnNkV1VwTzF4dVhHNGdJQ0FnYzNkcGRHTm9JQ2h2Y0dWeVlYUnZjaWtnZTF4dUlDQWdJR05oYzJVZ0p5c25PbHh1SUNBZ0lDQWdJQ0J1WlhkV1lXeDFaU0FyUFNCMllXeDFaVHRjYmlBZ0lDQWdJQ0FnWW5KbFlXczdYRzRnSUNBZ1kyRnpaU0FuTFNjNlhHNGdJQ0FnSUNBZ0lHNWxkMVpoYkhWbElDMDlJSFpoYkhWbE8xeHVJQ0FnSUNBZ0lDQmljbVZoYXp0Y2JpQWdJQ0JqWVhObElDY3FKenBjYmlBZ0lDQWdJQ0FnYm1WM1ZtRnNkV1VnS2owZ2RtRnNkV1U3WEc0Z0lDQWdJQ0FnSUdKeVpXRnJPMXh1SUNBZ0lHTmhjMlVnSnk4bk9seHVJQ0FnSUNBZ0lDQnVaWGRXWVd4MVpTQXZQU0IyWVd4MVpUdGNiaUFnSUNBZ0lDQWdZbkpsWVdzN1hHNGdJQ0FnZlZ4dUlDQWdJRnh1SUNBZ0lHbG1JQ2gxYm1sMEtTQjdYRzRnSUNBZ0lDQWdJRzVsZDFaaGJIVmxJQ3M5SUhWdWFYUTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NtVjBkWEp1SUc1bGQxWmhiSFZsTzF4dWZUdGNibHh1THlwY2JpQWdJQ0JTWlhOMGNtbGpkQ0IyWVd4MVpTQjBieUJ5WVc1blpWeHVJQ0FnSUZ4dUlDQWdJRkpsZEhWeWJpQjJZV3gxWlNCM2FYUm9hVzRnZEdobElISmhibWRsSUc5bUlHeHZkMlZ5VEdsdGFYUWdZVzVrSUhWd2NHVnlUR2x0YVhSY2JpQWdJQ0JjYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklGWmhiSFZsSUhSdklHdGxaWEFnZDJsMGFHbHVJSEpoYm1kbFhHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJNYjNkbGNpQnNhVzFwZENCdlppQnlZVzVuWlZ4dUlDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dWWEJ3WlhJZ2JHbHRhWFFnYjJZZ2NtRnVaMlZjYmlBZ0lDQkFjbVYwZFhKdUlGdHVkVzFpWlhKZE9pQldZV3gxWlNCaGN5QnNhVzFwZEdWa0lIZHBkR2hwYmlCbmFYWmxiaUJ5WVc1blpWeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnlaWE4wY21samRDQTlJQ2gyWVd4MVpTd2diV2x1TENCdFlYZ3BJRDArSUUxaGRHZ3ViV0Y0S0UxaGRHZ3ViV2x1S0haaGJIVmxMQ0J0WVhncExDQnRhVzRwTzF4dVhHNHZLbHh1SUNBZ0lFWnlZVzFsY21GMFpTMXBibVJsY0dWdVpHVnVkQ0J6Ylc5dmRHaHBibWRjYmx4dUlDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dUbVYzSUhaaGJIVmxYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCUGJHUWdkbUZzZFdWY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRVp5WVcxbElHUjFjbUYwYVc5dVhHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRJQ2h2Y0hScGIyNWhiQ2s2SUZOdGIyOTBhR2x1WnlBb01DQnBjeUJ1YjI1bEtWeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnpiVzl2ZEdnZ1BTQW9ibVYzVm1Gc2RXVXNJRzlzWkZaaGJIVmxMQ0JrZFhKaGRHbHZiaXdnYzIxdmIzUm9hVzVuSUQwZ01Da2dQVDRnZEc5RVpXTnBiV0ZzS0c5c1pGWmhiSFZsSUNzZ0tHUjFjbUYwYVc5dUlDb2dLRzVsZDFaaGJIVmxJQzBnYjJ4a1ZtRnNkV1VwSUM4Z1RXRjBhQzV0WVhnb2MyMXZiM1JvYVc1bkxDQmtkWEpoZEdsdmJpa3BLVHRjYmx4dUx5cGNiaUFnSUNCRGIyNTJaWEowSUhnZ2NHVnlJSE5sWTI5dVpDQjBieUJ3WlhJZ1puSmhiV1VnZG1Wc2IyTnBkSGtnWW1GelpXUWdiMjRnWm5CelhHNGdJQ0FnWEc0Z0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQlZibWwwSUhCbGNpQnpaV052Ym1SY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRVp5WVcxbElHUjFjbUYwYVc5dUlHbHVJRzF6WEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUhOd1pXVmtVR1Z5Um5KaGJXVWdQU0FvZUhCekxDQm1jbUZ0WlVSMWNtRjBhVzl1S1NBOVBpQW9hWE5PZFcwb2VIQnpLU2tnUHlCNGNITWdMeUFvTVRBd01DQXZJR1p5WVcxbFJIVnlZWFJwYjI0cElEb2dNRHRjYmx4dUx5cGNiaUFnSUNCRGIyNTJaWEowSUhabGJHOWphWFI1SUdsdWRHOGdkbVZzYVdOcGRIa2djR1Z5SUhObFkyOXVaRnh1SUNBZ0lGeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVlc1cGRDQndaWElnWm5KaGJXVmNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUVaeVlXMWxJR1IxY21GMGFXOXVJR2x1SUcxelhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElITndaV1ZrVUdWeVUyVmpiMjVrSUQwZ0tIWmxiRzlqYVhSNUxDQm1jbUZ0WlVSMWNtRjBhVzl1S1NBOVBpQjJaV3h2WTJsMGVTQXFJQ2d4TURBd0lDOGdabkpoYldWRWRYSmhkR2x2YmlrN1hHNWNiaThxWEc0Z0lDQWdRM0psWVhSbElITjBaWEJ3WldRZ2RtVnljMmx2YmlCdlppQXdMVEVnY0hKdlozSmxjM05jYmlBZ0lDQmNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUVOMWNuSmxiblFnZG1Gc2RXVmNiaUFnSUNCQWNHRnlZVzBnVzJsdWRGMDZJRTUxYldKbGNpQnZaaUJ6ZEdWd2MxeHVJQ0FnSUVCeVpYUjFjbTRnVzI1MWJXSmxjbDA2SUZOMFpYQndaV1FnZG1Gc2RXVmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdjM1JsY0ZCeWIyZHlaWE56SUQwZ0tIQnliMmR5WlhOekxDQnpkR1Z3Y3lrZ1BUNGdlMXh1SUNBZ0lHTnZibk4wSUhObFoyMWxiblFnUFNBeElDOGdLSE4wWlhCeklDMGdNU2s3WEc0Z0lDQWdZMjl1YzNRZ2RHRnlaMlYwSUQwZ01TQXRJQ2d4SUM4Z2MzUmxjSE1wTzF4dUlDQWdJR052Ym5OMElIQnliMmR5WlhOelQyWlVZWEpuWlhRZ1BTQk5ZWFJvTG0xcGJpaHdjbTluY21WemN5QXZJSFJoY21kbGRDd2dNU2s3WEc1Y2JpQWdJQ0J5WlhSMWNtNGdUV0YwYUM1bWJHOXZjaWh3Y205bmNtVnpjMDltVkdGeVoyVjBJQzhnYzJWbmJXVnVkQ2tnS2lCelpXZHRaVzUwTzF4dWZUc2lYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvY2FsYy5qc1xuICoqIG1vZHVsZSBpZCA9IDE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgQ0FNRUxfQ0FTRV9QQVRURVJOID0gLyhbYS16XSkoW0EtWl0pL2c7XG52YXIgUkVQTEFDRV9URU1QTEFURSA9ICckMS0kMic7XG52YXIgSEFTX1BFUkZPUk1BTkNFX05PVyA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCcgJiYgcGVyZm9ybWFuY2Uubm93O1xuXG4vKlxuICAgIEdldCB2YXIgdHlwZSBhcyBzdHJpbmdcbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtzdHJpbmddOiBSZXR1cm5zLCBmb3IgaW5zdGFuY2UgJ09iamVjdCcgaWYgW29iamVjdCBPYmplY3RdXG4qL1xudmFyIHZhclR5cGUgPSBmdW5jdGlvbiAodmFyaWFibGUpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhcmlhYmxlKS5zbGljZSg4LCAtMSk7XG59O1xuXG4vKlxuICAgIENvbnZlcnQgY2FtZWxDYXNlIHRvIGRhc2gtY2FzZVxuXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHJldHVybiBbc3RyaW5nXVxuKi9cbnZhciBjYW1lbFRvRGFzaCA9IGV4cG9ydHMuY2FtZWxUb0Rhc2ggPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKENBTUVMX0NBU0VfUEFUVEVSTiwgUkVQTEFDRV9URU1QTEFURSkudG9Mb3dlckNhc2UoKTtcbn07XG5cbnZhciBjcmVhdGVEZWxpbWl0ZWQgPSBleHBvcnRzLmNyZWF0ZURlbGltaXRlZCA9IGZ1bmN0aW9uICh2YWx1ZXMsIHRlcm1zLCBkZWxpbWl0ZXIsIGNob3ApIHtcbiAgICB2YXIgbnVtVGVybXMgPSB0ZXJtcy5sZW5ndGg7XG4gICAgdmFyIGNvbWJpbmVkID0gJyc7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVRlcm1zOyBpKyspIHtcbiAgICAgICAgdmFyIHRlcm0gPSB0ZXJtc1tpXTtcbiAgICAgICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eSh0ZXJtKSkge1xuICAgICAgICAgICAgY29tYmluZWQgKz0gdmFsdWVzW3Rlcm1dICsgZGVsaW1pdGVyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNob3ApIHtcbiAgICAgICAgY29tYmluZWQgPSBjb21iaW5lZC5zbGljZSgwLCAtY2hvcCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbWJpbmVkO1xufTtcblxuLypcbiAgICBDcmVhdGUgYSBmdW5jdGlvbiBzdHJpbmdcblxuICAgICcyMHB4JywgJ3RyYW5zbGF0ZScgLT4gJ3RyYW5zbGF0ZSgyMHB4KSdcblxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEByZXR1cm4gW3N0cmluZ11cbiovXG52YXIgY3JlYXRlRnVuY3Rpb25TdHJpbmcgPSBleHBvcnRzLmNyZWF0ZUZ1bmN0aW9uU3RyaW5nID0gZnVuY3Rpb24gKHZhbHVlLCBwcmVmaXgpIHtcbiAgICByZXR1cm4gcHJlZml4ICsgJygnICsgdmFsdWUgKyAnKSc7XG59O1xuXG4vKlxuICAgIEdlbmVyYXRlIGN1cnJlbnQgdGltZXN0YW1wXG4gICAgXG4gICAgQHJldHVybiBbdGltZXN0YW1wXTogQ3VycmVudCBVTklYIHRpbWVzdGFtcFxuKi9cbnZhciBjdXJyZW50VGltZSA9IGV4cG9ydHMuY3VycmVudFRpbWUgPSBIQVNfUEVSRk9STUFOQ0VfTk9XID8gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBwZXJmb3JtYW5jZS5ub3coKTtcbn0gOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xufTtcblxuLypcbiAgICBTcGxpdCBhIHZhbHVlIGludG8gYSB2YWx1ZS91bml0IG9iamVjdFxuICAgIFxuICAgICAgICBcIjIwMHB4XCIgLT4geyB2YWx1ZTogMjAwLCB1bml0OiBcInB4XCIgfVxuICAgICAgICBcbiAgICBAcGFyYW0gW3N0cmluZ106IFZhbHVlIHRvIHNwbGl0XG4gICAgQHJldHVybiBbb2JqZWN0XTogT2JqZWN0IHdpdGggdmFsdWUgYW5kIHVuaXQgcHJvcHNcbiovXG52YXIgZmluZFZhbHVlQW5kVW5pdCA9IGV4cG9ydHMuZmluZFZhbHVlQW5kVW5pdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZS5tYXRjaCkge1xuICAgICAgICB2YXIgc3BsaXRWYWx1ZSA9IHZhbHVlLm1hdGNoKC8oLT9cXGQqXFwuP1xcZCopKC4qKS8pO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcGFyc2VGbG9hdChzcGxpdFZhbHVlWzFdKSxcbiAgICAgICAgICAgIHVuaXQ6IHNwbGl0VmFsdWVbMl1cbiAgICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4geyB2YWx1ZTogdmFsdWUgfTtcbiAgICB9XG59O1xuXG4vKlxuICAgIFNwbGl0IGNvbG9yIHN0cmluZyBpbnRvIG1hcCBvZiBjb2xvciBwcm9wZXJ0aWVzXG5cbiAgICBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMClcIiwgW1wiUmVkXCIsICdHcmVlblwiLCBcIkJsdWVcIiwgXCJBbHBoYVwiXVxuXG4gICAgeyBSZWQ6IDI1NS4uLiB9XG4qL1xudmFyIGdldENvbG9yVmFsdWVzID0gZXhwb3J0cy5nZXRDb2xvclZhbHVlcyA9IGZ1bmN0aW9uICh2YWx1ZSwgY29sb3JUZXJtcykge1xuICAgIHZhciBudW1Db2xvclRlcm1zID0gY29sb3JUZXJtcy5sZW5ndGg7XG4gICAgdmFyIGNvbG9yVmFsdWVzID0ge307XG4gICAgdmFyIGNvbG9ycyA9IHNwbGl0Q29tbWFEZWxpbWl0ZWQoZ2V0VmFsdWVGcm9tRnVuY3Rpb25TdHJpbmcodmFsdWUpKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtQ29sb3JUZXJtczsgaSsrKSB7XG4gICAgICAgIGNvbG9yVmFsdWVzW2NvbG9yVGVybXNbaV1dID0gY29sb3JzW2ldICE9PSB1bmRlZmluZWQgPyBjb2xvcnNbaV0gOiAxO1xuICAgIH1cblxuICAgIHJldHVybiBjb2xvclZhbHVlcztcbn07XG5cbi8qXG4gICAgR2V0IHZhbHVlIGZyb20gZnVuY3Rpb24gc3RyaW5nXG5cbiAgICBcInRyYW5zbGF0ZVgoMjBweClcIiAtPiBcIjIwcHhcIlxuKi9cbnZhciBnZXRWYWx1ZUZyb21GdW5jdGlvblN0cmluZyA9IGV4cG9ydHMuZ2V0VmFsdWVGcm9tRnVuY3Rpb25TdHJpbmcgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUuc3Vic3RyaW5nKHZhbHVlLmluZGV4T2YoJygnKSArIDEsIHZhbHVlLmxhc3RJbmRleE9mKCcpJykpO1xufTtcblxuLypcbiAgICBDaGVjayBpZiB0d28gb2JqZWN0cyBoYXZlIGNoYW5nZWQgZnJvbSBlYWNoIG90aGVyXG4gICAgXG4gICAgQHBhcmFtIFtvYmplY3RdOiBJbnB1dCBBXG4gICAgQHBhcmFtIFtvYmplY3RdOiBJbnB1dCBCXG4gICAgQHJldHVybiBbYm9vbGVhbl06IFRydWUgaWYgZGlmZmVyZW50XG4qL1xudmFyIGhhc0NoYW5nZWQgPSBleHBvcnRzLmhhc0NoYW5nZWQgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgIHZhciBjaGFuZ2VkID0gZmFsc2U7XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gYSkge1xuICAgICAgICBpZiAoYS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICBpZiAoaGFzUHJvcGVydHkoYiwga2V5KSkge1xuICAgICAgICAgICAgICAgIGlmIChhW2tleV0gIT09IGJba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoYW5nZWQ7XG59O1xuXG4vKlxuICAgIENoZWNrIGlmIG9iamVjdCBoYXMgcHJvcGVydHkgYW5kIGl0IGlzbid0IHVuZGVmaW5lZFxuXG4gICAgQHBhcmFtIFtvYmplY3RdXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHJldHVybiBbYm9vbGVhbl1cbiovXG52YXIgaGFzUHJvcGVydHkgPSBleHBvcnRzLmhhc1Byb3BlcnR5ID0gZnVuY3Rpb24gKG9iamVjdCwgcHJvcGVydHlOYW1lKSB7XG4gICAgcmV0dXJuIG9iamVjdC5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eU5hbWUpICYmIG9iamVjdFtwcm9wZXJ0eU5hbWVdICE9PSB1bmRlZmluZWQ7XG59O1xuXG4vKlxuICAgIElzIHV0aWxzIHZhciBhbiBhcnJheSA/IFxuICAgIFxuICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdXRpbHMudmFyVHlwZSA9PT0gJ0FycmF5J1xuKi9cbnZhciBpc0FycmF5ID0gZXhwb3J0cy5pc0FycmF5ID0gZnVuY3Rpb24gKGFycikge1xuICAgIHJldHVybiB2YXJUeXBlKGFycikgPT09ICdBcnJheSc7XG59O1xuXG4vKlxuICAgIElzIHV0aWxzIHZhciBhIGZ1bmN0aW9uID8gXG4gICAgXG4gICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB1dGlscy52YXJUeXBlID09PSAnRnVuY3Rpb24nXG4qL1xudmFyIGlzRnVuYyA9IGV4cG9ydHMuaXNGdW5jID0gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB2YXJUeXBlKG9iaikgPT09ICdGdW5jdGlvbic7XG59O1xuXG4vKlxuICAgIElzIHV0aWxzIHZhciBhIG51bWJlcj9cbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiA9PT0gJ251bWJlcidcbiovXG52YXIgaXNOdW0gPSBleHBvcnRzLmlzTnVtID0gZnVuY3Rpb24gKG51bSkge1xuICAgIHJldHVybiB0eXBlb2YgbnVtID09PSAnbnVtYmVyJztcbn07XG5cbi8qXG4gICAgSXMgdXRpbHMgdmFyIGFuIG9iamVjdD9cbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiA9PT0gJ29iamVjdCdcbiovXG52YXIgaXNPYmogPSBleHBvcnRzLmlzT2JqID0gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jztcbn07XG5cbi8qXG4gICAgSXMgdXRpbHMgYSByZWxhdGl2ZSB2YWx1ZSBhc3NpZ25tZW50P1xuICAgIFxuICAgIEBwYXJhbSBbc3RyaW5nXTogVmFyaWFibGUgdG8gdGVzdFxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBJZiB1dGlscyBsb29rcyBsaWtlIGEgcmVsYXRpdmUgdmFsdWUgYXNzaWdubWVudFxuKi9cbnZhciBpc1JlbGF0aXZlVmFsdWUgPSBleHBvcnRzLmlzUmVsYXRpdmVWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mICYmIHZhbHVlLmluZGV4T2YoJz0nKSA+IDAgPyB0cnVlIDogZmFsc2U7XG59O1xuXG4vKlxuICAgIElzIHV0aWxzIHZhciBhIHN0cmluZyA/IFxuICAgIFxuICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mIHN0ciA9PT0gJ3N0cmluZydcbiovXG52YXIgaXNTdHJpbmcgPSBleHBvcnRzLmlzU3RyaW5nID0gZnVuY3Rpb24gKHN0cikge1xuICAgIHJldHVybiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJztcbn07XG5cbi8qXG4gICAgQHBhcmFtIFtzdHJpbmcgfHwgTm9kZUxpc3RdOlxuICAgICAgICBJZiBzdHJpbmcsIHRyZWF0ZWQgYXMgc2VsZWN0b3IuXG4gICAgICAgIElmIG5vdCwgdHJlYXRlZCBhcyBwcmVleGlzdGluZyBOb2RlTGlzdFxuXG4gICAgQHJldHVybiBbQXJyYXldXG4qL1xudmFyIHNlbGVjdERvbSA9IGV4cG9ydHMuc2VsZWN0RG9tID0gZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgdmFyIG5vZGVzID0gdHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpIDogc2VsZWN0b3I7XG4gICAgcmV0dXJuIG5vZGVzLmxlbmd0aCA/IFtdLnNsaWNlLmNhbGwobm9kZXMpIDogW10ucHVzaChub2Rlcyk7XG59O1xuXG4vKlxuICAgIFNwbGl0IGNvbW1hLWRlbGltaXRlZCBzdHJpbmdcblxuICAgIFwiZm9vLGJhclwiIC0+IFtcImZvb1wiLCBcImJhclwiXVxuXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHJldHVybiBbYXJyYXldXG4qL1xudmFyIHNwbGl0Q29tbWFEZWxpbWl0ZWQgPSBleHBvcnRzLnNwbGl0Q29tbWFEZWxpbWl0ZWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodmFsdWUpID8gdmFsdWUuc3BsaXQoLyxcXHMqLykgOiBbdmFsdWVdO1xufTtcblxuLypcbiAgICBTcGxpdCBzcGFjZS1kZWxpbWl0ZWQgc3RyaW5nXG5cbiAgICBcImZvbyBiYXJcIiAtPiBbXCJmb29cIiwgXCJiYXJcIl1cblxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEByZXR1cm4gW2FycmF5XVxuKi9cbnZhciBzcGxpdFNwYWNlRGVsaW1pdGVkID0gZXhwb3J0cy5zcGxpdFNwYWNlRGVsaW1pdGVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHZhbHVlKSA/IHZhbHVlLnNwbGl0KCcgJykgOiBbdmFsdWVdO1xufTtcblxuLypcbiAgICBDb252ZXJ0IG51bWJlciB0byB4IGRlY2ltYWwgcGxhY2VzXG5cbiAgICBAcGFyYW0gW251bWJlcl1cbiAgICBAcGFyYW0gW251bWJlcl1cbiAgICBAcmV0dXJuIFtudW1iZXJdXG4qL1xudmFyIHRvRGVjaW1hbCA9IGV4cG9ydHMudG9EZWNpbWFsID0gZnVuY3Rpb24gKG51bSkge1xuICAgIHZhciBwcmVjaXNpb24gPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyAyIDogYXJndW1lbnRzWzFdO1xuXG4gICAgcHJlY2lzaW9uID0gTWF0aC5wb3coMTAsIHByZWNpc2lvbik7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobnVtICogcHJlY2lzaW9uKSAvIHByZWNpc2lvbjtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12ZFhScGJITXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3TzBGQlFVRXNTVUZCVFN4eFFrRkJjVUlzYVVKQlFYSkNPMEZCUTA0c1NVRkJUU3h0UWtGQmJVSXNUMEZCYmtJN1FVRkRUaXhKUVVGTkxITkNRVUYxUWl4UFFVRlBMRmRCUVZBc1MwRkJkVUlzVjBGQmRrSXNTVUZCYzBNc1dVRkJXU3hIUVVGYU96czdPenM3T3p0QlFWRnVSU3hKUVVGTkxGVkJRVlU3VjBGQldTeFBRVUZQTEZOQlFWQXNRMEZCYVVJc1VVRkJha0lzUTBGQk1FSXNTVUZCTVVJc1EwRkJLMElzVVVGQkwwSXNSVUZCZVVNc1MwRkJla01zUTBGQkswTXNRMEZCTDBNc1JVRkJhMFFzUTBGQlF5eERRVUZFTzBOQlFUbEVPenM3T3pzN096dEJRVkZVTEVsQlFVMHNiME5CUVdNc1ZVRkJReXhOUVVGRU8xZEJRVmtzVDBGQlR5eFBRVUZRTEVOQlFXVXNhMEpCUVdZc1JVRkJiVU1zWjBKQlFXNURMRVZCUVhGRUxGZEJRWEpFTzBOQlFWbzdPMEZCUlhCQ0xFbEJRVTBzTkVOQlFXdENMRlZCUVVNc1RVRkJSQ3hGUVVGVExFdEJRVlFzUlVGQlowSXNVMEZCYUVJc1JVRkJNa0lzU1VGQk0wSXNSVUZCYjBNN1FVRkRMMFFzVVVGQlRTeFhRVUZYTEUxQlFVMHNUVUZCVGl4RFFVUTRRenRCUVVVdlJDeFJRVUZKTEZkQlFWY3NSVUZCV0N4RFFVWXlSRHM3UVVGSkwwUXNVMEZCU3l4SlFVRkpMRWxCUVVrc1EwRkJTaXhGUVVGUExFbEJRVWtzVVVGQlNpeEZRVUZqTEVkQlFUbENMRVZCUVcxRE8wRkJReTlDTEZsQlFVMHNUMEZCVHl4TlFVRk5MRU5CUVU0c1EwRkJVQ3hEUVVSNVFqdEJRVVV2UWl4WlFVRkpMRTlCUVU4c1kwRkJVQ3hEUVVGelFpeEpRVUYwUWl4RFFVRktMRVZCUVdsRE8wRkJRemRDTEhkQ1FVRlpMRTlCUVU4c1NVRkJVQ3hKUVVGbExGTkJRV1lzUTBGRWFVSTdVMEZCYWtNN1MwRkdTanM3UVVGUFFTeFJRVUZKTEVsQlFVb3NSVUZCVlR0QlFVTk9MRzFDUVVGWExGTkJRVk1zUzBGQlZDeERRVUZsTEVOQlFXWXNSVUZCYTBJc1EwRkJReXhKUVVGRUxFTkJRVGRDTEVOQlJFMDdTMEZCVmpzN1FVRkpRU3hYUVVGUExGRkJRVkFzUTBGbUswUTdRMEZCY0VNN096czdPenM3T3pzN08wRkJNa0o0UWl4SlFVRk5MSE5FUVVGMVFpeFZRVUZETEV0QlFVUXNSVUZCVVN4TlFVRlNPMWRCUVhOQ0xHVkJRVlU3UTBGQmFFTTdPenM3T3pzN1FVRlBOMElzU1VGQlRTeHZRMEZCWXl4elFrRkJjMEk3VjBGQlRTeFpRVUZaTEVkQlFWbzdRMEZCVGl4SFFVRXdRanRYUVVGTkxFbEJRVWtzU1VGQlNpeEhRVUZYTEU5QlFWZzdRMEZCVGpzN096czdPenM3T3p0QlFWVndSU3hKUVVGTkxEaERRVUZ0UWl4VlFVRkRMRXRCUVVRc1JVRkJWenRCUVVOMlF5eFJRVUZKTEUxQlFVMHNTMEZCVGl4RlFVRmhPMEZCUTJJc1dVRkJUU3hoUVVGaExFMUJRVTBzUzBGQlRpeERRVUZaTEcxQ1FVRmFMRU5CUVdJc1EwRkVUenM3UVVGSFlpeGxRVUZQTzBGQlEwZ3NiVUpCUVU4c1YwRkJWeXhYUVVGWExFTkJRVmdzUTBGQldDeERRVUZRTzBGQlEwRXNhMEpCUVU4c1YwRkJWeXhEUVVGWUxFTkJRVkE3VTBGR1NpeERRVWhoTzB0QlFXcENMRTFCVDA4N1FVRkRTQ3hsUVVGUExFVkJRVVVzV1VGQlJpeEZRVUZRTEVOQlJFYzdTMEZRVUR0RFFVUTBRanM3T3pzN096czdPMEZCYjBKNlFpeEpRVUZOTERCRFFVRnBRaXhWUVVGRExFdEJRVVFzUlVGQlVTeFZRVUZTTEVWQlFYVkNPMEZCUTJwRUxGRkJRVTBzWjBKQlFXZENMRmRCUVZjc1RVRkJXQ3hEUVVReVFqdEJRVVZxUkN4UlFVRk5MR05CUVdNc1JVRkJaQ3hEUVVZeVF6dEJRVWRxUkN4UlFVRk5MRk5CUVZNc2IwSkJRVzlDTERKQ1FVRXlRaXhMUVVFelFpeERRVUZ3UWl4RFFVRlVMRU5CU0RKRE96dEJRVXRxUkN4VFFVRkxMRWxCUVVrc1NVRkJTU3hEUVVGS0xFVkJRVThzU1VGQlNTeGhRVUZLTEVWQlFXMUNMRWRCUVc1RExFVkJRWGRETzBGQlEzQkRMRzlDUVVGWkxGZEJRVmNzUTBGQldDeERRVUZhTEVsQlFUWkNMRTFCUVVNc1EwRkJUeXhEUVVGUUxFMUJRV01zVTBGQlpDeEhRVUV5UWl4UFFVRlBMRU5CUVZBc1EwRkJOVUlzUjBGQmQwTXNRMEZCZUVNc1EwRkVUenRMUVVGNFF6czdRVUZKUVN4WFFVRlBMRmRCUVZBc1EwRlVhVVE3UTBGQmRrSTdPenM3T3pzN1FVRnBRblpDTEVsQlFVMHNhMFZCUVRaQ0xGVkJRVU1zUzBGQlJEdFhRVUZYTEUxQlFVMHNVMEZCVGl4RFFVRm5RaXhOUVVGTkxFOUJRVTRzUTBGQll5eEhRVUZrTEVsQlFYRkNMRU5CUVhKQ0xFVkJRWGRDTEUxQlFVMHNWMEZCVGl4RFFVRnJRaXhIUVVGc1FpeERRVUY0UXp0RFFVRllPenM3T3pzN096czdRVUZUYmtNc1NVRkJUU3hyUTBGQllTeFZRVUZETEVOQlFVUXNSVUZCU1N4RFFVRktMRVZCUVZVN1FVRkRhRU1zVVVGQlNTeFZRVUZWTEV0QlFWWXNRMEZFTkVJN08wRkJSMmhETEZOQlFVc3NTVUZCU1N4SFFVRktMRWxCUVZjc1EwRkJhRUlzUlVGQmJVSTdRVUZEWml4WlFVRkpMRVZCUVVVc1kwRkJSaXhEUVVGcFFpeEhRVUZxUWl4RFFVRktMRVZCUVRKQ08wRkJRM1pDTEdkQ1FVRkpMRmxCUVZrc1EwRkJXaXhGUVVGbExFZEJRV1lzUTBGQlNpeEZRVUY1UWp0QlFVTnlRaXh2UWtGQlNTeEZRVUZGTEVkQlFVWXNUVUZCVnl4RlFVRkZMRWRCUVVZc1EwRkJXQ3hGUVVGdFFqdEJRVU51UWl3NFFrRkJWU3hKUVVGV0xFTkJSRzFDTzJsQ1FVRjJRanRoUVVSS0xFMUJTVTg3UVVGRFNDd3dRa0ZCVlN4SlFVRldMRU5CUkVjN1lVRktVRHRUUVVSS08wdEJSRW83TzBGQldVRXNWMEZCVHl4UFFVRlFMRU5CWm1kRE8wTkJRVlk3T3pzN096czdPenRCUVhsQ2JrSXNTVUZCVFN4dlEwRkJZeXhWUVVGRExFMUJRVVFzUlVGQlV5eFpRVUZVTzFkQlFUQkNMRTlCUVU4c1kwRkJVQ3hEUVVGelFpeFpRVUYwUWl4TFFVRjFReXhQUVVGUExGbEJRVkFzVFVGQmVVSXNVMEZCZWtJN1EwRkJha1U3T3pzN096czdPMEZCVVhCQ0xFbEJRVTBzTkVKQlFWVXNWVUZCUXl4SFFVRkVPMWRCUVZNc1VVRkJVU3hIUVVGU0xFMUJRV2xDTEU5QlFXcENPME5CUVZRN096czdPenM3TzBGQlVXaENMRWxCUVUwc01FSkJRVk1zVlVGQlF5eEhRVUZFTzFkQlFWTXNVVUZCVVN4SFFVRlNMRTFCUVdsQ0xGVkJRV3BDTzBOQlFWUTdPenM3T3pzN08wRkJVV1lzU1VGQlRTeDNRa0ZCVVN4VlFVRkRMRWRCUVVRN1YwRkJVeXhQUVVGUExFZEJRVkFzUzBGQlpTeFJRVUZtTzBOQlFWUTdPenM3T3pzN08wRkJVV1FzU1VGQlRTeDNRa0ZCVVN4VlFVRkRMRWRCUVVRN1YwRkJVeXhQUVVGUExFZEJRVkFzUzBGQlpTeFJRVUZtTzBOQlFWUTdPenM3T3pzN08wRkJVV1FzU1VGQlRTdzBRMEZCYTBJc1ZVRkJReXhMUVVGRU8xZEJRVmNzUzBGQlF5eEpRVUZUTEUxQlFVMHNUMEZCVGl4SlFVRnBRaXhOUVVGTkxFOUJRVTRzUTBGQll5eEhRVUZrTEVsQlFYRkNMRU5CUVhKQ0xFZEJRVEJDTEVsQlFYSkVMRWRCUVRSRUxFdEJRVFZFTzBOQlFWZzdPenM3T3pzN08wRkJVWGhDTEVsQlFVMHNPRUpCUVZjc1ZVRkJReXhIUVVGRU8xZEJRVk1zVDBGQlR5eEhRVUZRTEV0QlFXVXNVVUZCWmp0RFFVRlVPenM3T3pzN096czdRVUZUYWtJc1NVRkJUU3huUTBGQldTeFZRVUZETEZGQlFVUXNSVUZCWXp0QlFVTnVReXhSUVVGTkxGRkJRVkVzVDBGQlVTeFJRVUZRTEV0QlFXOUNMRkZCUVhCQ0xFZEJRV2RETEZOQlFWTXNaMEpCUVZRc1EwRkJNRUlzVVVGQk1VSXNRMEZCYWtNc1IwRkJkVVVzVVVGQmRrVXNRMEZFY1VJN1FVRkZia01zVjBGQlR5eExRVUZETEVOQlFVMHNUVUZCVGl4SFFVRm5RaXhIUVVGSExFdEJRVWdzUTBGQlV5eEpRVUZVTEVOQlFXTXNTMEZCWkN4RFFVRnFRaXhIUVVGM1F5eEhRVUZITEVsQlFVZ3NRMEZCVVN4TFFVRlNMRU5CUVhoRExFTkJSalJDTzBOQlFXUTdPenM3T3pzN096czdRVUZoYkVJc1NVRkJUU3h2UkVGQmMwSXNWVUZCUXl4TFFVRkVPMWRCUVZjc1UwRkJVeXhMUVVGVUxFbEJRV3RDTEUxQlFVMHNTMEZCVGl4RFFVRlpMRTFCUVZvc1EwRkJiRUlzUjBGQmQwTXNRMEZCUXl4TFFVRkVMRU5CUVhoRE8wTkJRVmc3T3pzN096czdPenM3UVVGVk5VSXNTVUZCVFN4dlJFRkJjMElzVlVGQlF5eExRVUZFTzFkQlFWY3NVMEZCVXl4TFFVRlVMRWxCUVd0Q0xFMUJRVTBzUzBGQlRpeERRVUZaTEVkQlFWb3NRMEZCYkVJc1IwRkJjVU1zUTBGQlF5eExRVUZFTEVOQlFYSkRPME5CUVZnN096czdPenM3T3p0QlFWTTFRaXhKUVVGTkxHZERRVUZaTEZWQlFVTXNSMEZCUkN4RlFVRjNRanRSUVVGc1FpeHJSVUZCV1N4cFFrRkJUVHM3UVVGRE4wTXNlVUpCUVZrc1NVRkJUU3hWUVVGc1FpeERRVVEyUXp0QlFVVTNReXhYUVVGUExFdEJRVXNzUzBGQlRDeERRVUZYTEUxQlFVMHNVMEZCVGl4RFFVRllMRWRCUVRoQ0xGTkJRVGxDTEVOQlJuTkRPME5CUVhoQ0lpd2labWxzWlNJNkluVjBhV3h6TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMEwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltTnZibk4wSUVOQlRVVk1YME5CVTBWZlVFRlVWRVZTVGlBOUlDOG9XMkV0ZWwwcEtGdEJMVnBkS1M5bk8xeHVZMjl1YzNRZ1VrVlFURUZEUlY5VVJVMVFURUZVUlNBOUlDY2tNUzBrTWljN1hHNWpiMjV6ZENCSVFWTmZVRVZTUms5U1RVRk9RMFZmVGs5WElEMGdLSFI1Y0dWdlppQndaWEptYjNKdFlXNWpaU0FoUFQwZ0ozVnVaR1ZtYVc1bFpDY2dKaVlnY0dWeVptOXliV0Z1WTJVdWJtOTNLVHRjYmx4dUx5cGNiaUFnSUNCSFpYUWdkbUZ5SUhSNWNHVWdZWE1nYzNSeWFXNW5YRzRnSUNBZ1hHNGdJQ0FnUUhCaGNtRnRPaUJXWVhKcFlXSnNaU0IwYnlCMFpYTjBYRzRnSUNBZ1FISmxkSFZ5YmlCYmMzUnlhVzVuWFRvZ1VtVjBkWEp1Y3l3Z1ptOXlJR2x1YzNSaGJtTmxJQ2RQWW1wbFkzUW5JR2xtSUZ0dlltcGxZM1FnVDJKcVpXTjBYVnh1S2k5Y2JtTnZibk4wSUhaaGNsUjVjR1VnUFNCMllYSnBZV0pzWlNBOVBpQlBZbXBsWTNRdWNISnZkRzkwZVhCbExuUnZVM1J5YVc1bkxtTmhiR3dvZG1GeWFXRmliR1VwTG5Oc2FXTmxLRGdzSUMweEtUdGNibHh1THlwY2JpQWdJQ0JEYjI1MlpYSjBJR05oYldWc1EyRnpaU0IwYnlCa1lYTm9MV05oYzJWY2JseHVJQ0FnSUVCd1lYSmhiU0JiYzNSeWFXNW5YVnh1SUNBZ0lFQnlaWFIxY200Z1czTjBjbWx1WjExY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ1kyRnRaV3hVYjBSaGMyZ2dQU0FvYzNSeWFXNW5LU0E5UGlCemRISnBibWN1Y21Wd2JHRmpaU2hEUVUxRlRGOURRVk5GWDFCQlZGUkZVazRzSUZKRlVFeEJRMFZmVkVWTlVFeEJWRVVwTG5SdlRHOTNaWEpEWVhObEtDazdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQmpjbVZoZEdWRVpXeHBiV2wwWldRZ1BTQW9kbUZzZFdWekxDQjBaWEp0Y3l3Z1pHVnNhVzFwZEdWeUxDQmphRzl3S1NBOVBpQjdYRzRnSUNBZ1kyOXVjM1FnYm5WdFZHVnliWE1nUFNCMFpYSnRjeTVzWlc1bmRHZzdYRzRnSUNBZ2JHVjBJR052YldKcGJtVmtJRDBnSnljN1hHNWNiaUFnSUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElHNTFiVlJsY20xek95QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnZEdWeWJTQTlJSFJsY20xelcybGRPMXh1SUNBZ0lDQWdJQ0JwWmlBb2RtRnNkV1Z6TG1oaGMwOTNibEJ5YjNCbGNuUjVLSFJsY20wcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyMWlhVzVsWkNBclBTQjJZV3gxWlhOYmRHVnliVjBnS3lCa1pXeHBiV2wwWlhJN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNCcFppQW9ZMmh2Y0NrZ2UxeHVJQ0FnSUNBZ0lDQmpiMjFpYVc1bFpDQTlJR052YldKcGJtVmtMbk5zYVdObEtEQXNJQzFqYUc5d0tUdGNiaUFnSUNCOVhHNWNiaUFnSUNCeVpYUjFjbTRnWTI5dFltbHVaV1E3WEc1OU8xeHVYRzR2S2x4dUlDQWdJRU55WldGMFpTQmhJR1oxYm1OMGFXOXVJSE4wY21sdVoxeHVYRzRnSUNBZ0p6SXdjSGduTENBbmRISmhibk5zWVhSbEp5QXRQaUFuZEhKaGJuTnNZWFJsS0RJd2NIZ3BKMXh1WEc0Z0lDQWdRSEJoY21GdElGdHpkSEpwYm1kZFhHNGdJQ0FnUUhCaGNtRnRJRnR6ZEhKcGJtZGRYRzRnSUNBZ1FISmxkSFZ5YmlCYmMzUnlhVzVuWFZ4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCamNtVmhkR1ZHZFc1amRHbHZibE4wY21sdVp5QTlJQ2gyWVd4MVpTd2djSEpsWm1sNEtTQTlQaUJnSkh0d2NtVm1hWGg5S0NSN2RtRnNkV1Y5S1dBN1hHNWNiaThxWEc0Z0lDQWdSMlZ1WlhKaGRHVWdZM1Z5Y21WdWRDQjBhVzFsYzNSaGJYQmNiaUFnSUNCY2JpQWdJQ0JBY21WMGRYSnVJRnQwYVcxbGMzUmhiWEJkT2lCRGRYSnlaVzUwSUZWT1NWZ2dkR2x0WlhOMFlXMXdYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR04xY25KbGJuUlVhVzFsSUQwZ1NFRlRYMUJGVWtaUFVrMUJUa05GWDA1UFZ5QS9JQ2dwSUQwK0lIQmxjbVp2Y20xaGJtTmxMbTV2ZHlncElEb2dLQ2tnUFQ0Z2JtVjNJRVJoZEdVb0tTNW5aWFJVYVcxbEtDazdYRzVjYmk4cVhHNGdJQ0FnVTNCc2FYUWdZU0IyWVd4MVpTQnBiblJ2SUdFZ2RtRnNkV1V2ZFc1cGRDQnZZbXBsWTNSY2JpQWdJQ0JjYmlBZ0lDQWdJQ0FnWENJeU1EQndlRndpSUMwK0lIc2dkbUZzZFdVNklESXdNQ3dnZFc1cGREb2dYQ0p3ZUZ3aUlIMWNiaUFnSUNBZ0lDQWdYRzRnSUNBZ1FIQmhjbUZ0SUZ0emRISnBibWRkT2lCV1lXeDFaU0IwYnlCemNHeHBkRnh1SUNBZ0lFQnlaWFIxY200Z1cyOWlhbVZqZEYwNklFOWlhbVZqZENCM2FYUm9JSFpoYkhWbElHRnVaQ0IxYm1sMElIQnliM0J6WEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdacGJtUldZV3gxWlVGdVpGVnVhWFFnUFNBb2RtRnNkV1VwSUQwK0lIdGNiaUFnSUNCcFppQW9kbUZzZFdVdWJXRjBZMmdwSUh0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnYzNCc2FYUldZV3gxWlNBOUlIWmhiSFZsTG0xaGRHTm9LQzhvTFQ5Y1hHUXFYRnd1UDF4Y1pDb3BLQzRxS1M4cE8xeHVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMllXeDFaVG9nY0dGeWMyVkdiRzloZENoemNHeHBkRlpoYkhWbFd6RmRLU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lIVnVhWFE2SUNCemNHeHBkRlpoYkhWbFd6SmRYRzRnSUNBZ0lDQWdJSDA3WEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIc2dkbUZzZFdVZ2ZUdGNiaUFnSUNCOVhHNTlPMXh1WEc0dktseHVJQ0FnSUZOd2JHbDBJR052Ykc5eUlITjBjbWx1WnlCcGJuUnZJRzFoY0NCdlppQmpiMnh2Y2lCd2NtOXdaWEowYVdWelhHNWNiaUFnSUNCY0luSm5ZbUVvTWpVMUxDQXlOVFVzSURJMU5Td2dNQ2xjSWl3Z1cxd2lVbVZrWENJc0lDZEhjbVZsYmx3aUxDQmNJa0pzZFdWY0lpd2dYQ0pCYkhCb1lWd2lYVnh1WEc0Z0lDQWdleUJTWldRNklESTFOUzR1TGlCOVhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHZGxkRU52Ykc5eVZtRnNkV1Z6SUQwZ0tIWmhiSFZsTENCamIyeHZjbFJsY20xektTQTlQaUI3WEc0Z0lDQWdZMjl1YzNRZ2JuVnRRMjlzYjNKVVpYSnRjeUE5SUdOdmJHOXlWR1Z5YlhNdWJHVnVaM1JvTzF4dUlDQWdJR052Ym5OMElHTnZiRzl5Vm1Gc2RXVnpJRDBnZTMwN1hHNGdJQ0FnWTI5dWMzUWdZMjlzYjNKeklEMGdjM0JzYVhSRGIyMXRZVVJsYkdsdGFYUmxaQ2huWlhSV1lXeDFaVVp5YjIxR2RXNWpkR2x2YmxOMGNtbHVaeWgyWVd4MVpTa3BPMXh1WEc0Z0lDQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0J1ZFcxRGIyeHZjbFJsY20xek95QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ1kyOXNiM0pXWVd4MVpYTmJZMjlzYjNKVVpYSnRjMXRwWFYwZ1BTQW9ZMjlzYjNKelcybGRJQ0U5UFNCMWJtUmxabWx1WldRcElEOGdZMjlzYjNKelcybGRJRG9nTVR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J5WlhSMWNtNGdZMjlzYjNKV1lXeDFaWE03WEc1OU8xeHVYRzR2S2x4dUlDQWdJRWRsZENCMllXeDFaU0JtY205dElHWjFibU4wYVc5dUlITjBjbWx1WjF4dVhHNGdJQ0FnWENKMGNtRnVjMnhoZEdWWUtESXdjSGdwWENJZ0xUNGdYQ0l5TUhCNFhDSmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdaMlYwVm1Gc2RXVkdjbTl0Um5WdVkzUnBiMjVUZEhKcGJtY2dQU0FvZG1Gc2RXVXBJRDArSUhaaGJIVmxMbk4xWW5OMGNtbHVaeWgyWVd4MVpTNXBibVJsZUU5bUtDY29KeWtnS3lBeExDQjJZV3gxWlM1c1lYTjBTVzVrWlhoUFppZ25LU2NwS1R0Y2JseHVMeXBjYmlBZ0lDQkRhR1ZqYXlCcFppQjBkMjhnYjJKcVpXTjBjeUJvWVhabElHTm9ZVzVuWldRZ1puSnZiU0JsWVdOb0lHOTBhR1Z5WEc0Z0lDQWdYRzRnSUNBZ1FIQmhjbUZ0SUZ0dlltcGxZM1JkT2lCSmJuQjFkQ0JCWEc0Z0lDQWdRSEJoY21GdElGdHZZbXBsWTNSZE9pQkpibkIxZENCQ1hHNGdJQ0FnUUhKbGRIVnliaUJiWW05dmJHVmhibDA2SUZSeWRXVWdhV1lnWkdsbVptVnlaVzUwWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdoaGMwTm9ZVzVuWldRZ1BTQW9ZU3dnWWlrZ1BUNGdlMXh1SUNBZ0lHeGxkQ0JqYUdGdVoyVmtJRDBnWm1Gc2MyVTdYRzVjYmlBZ0lDQm1iM0lnS0d4bGRDQnJaWGtnYVc0Z1lTa2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb1lTNW9ZWE5QZDI1UWNtOXdaWEowZVNoclpYa3BLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvYUdGelVISnZjR1Z5ZEhrb1lpd2dhMlY1S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hoVzJ0bGVWMGdJVDA5SUdKYmEyVjVYU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmphR0Z1WjJWa0lEMGdkSEoxWlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR05vWVc1blpXUWdQU0IwY25WbE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WMGRYSnVJR05vWVc1blpXUTdYRzU5TzF4dVhHNHZLbHh1SUNBZ0lFTm9aV05ySUdsbUlHOWlhbVZqZENCb1lYTWdjSEp2Y0dWeWRIa2dZVzVrSUdsMElHbHpiaWQwSUhWdVpHVm1hVzVsWkZ4dVhHNGdJQ0FnUUhCaGNtRnRJRnR2WW1wbFkzUmRYRzRnSUNBZ1FIQmhjbUZ0SUZ0emRISnBibWRkWEc0Z0lDQWdRSEpsZEhWeWJpQmJZbTl2YkdWaGJsMWNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdhR0Z6VUhKdmNHVnlkSGtnUFNBb2IySnFaV04wTENCd2NtOXdaWEowZVU1aGJXVXBJRDArSUc5aWFtVmpkQzVvWVhOUGQyNVFjbTl3WlhKMGVTaHdjbTl3WlhKMGVVNWhiV1VwSUNZbUlHOWlhbVZqZEZ0d2NtOXdaWEowZVU1aGJXVmRJQ0U5UFNCMWJtUmxabWx1WldRN1hHNWNiaThxWEc0Z0lDQWdTWE1nZFhScGJITWdkbUZ5SUdGdUlHRnljbUY1SUQ4Z1hHNGdJQ0FnWEc0Z0lDQWdRSEJoY21GdE9pQldZWEpwWVdKc1pTQjBieUIwWlhOMFhHNGdJQ0FnUUhKbGRIVnliaUJiWW05dmJHVmhibDA2SUZKbGRIVnlibk1nZEhKMVpTQnBaaUIxZEdsc2N5NTJZWEpVZVhCbElEMDlQU0FuUVhKeVlYa25YRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR2x6UVhKeVlYa2dQU0FvWVhKeUtTQTlQaUIyWVhKVWVYQmxLR0Z5Y2lrZ1BUMDlJQ2RCY25KaGVTYzdYRzVjYmk4cVhHNGdJQ0FnU1hNZ2RYUnBiSE1nZG1GeUlHRWdablZ1WTNScGIyNGdQeUJjYmlBZ0lDQmNiaUFnSUNCQWNHRnlZVzA2SUZaaGNtbGhZbXhsSUhSdklIUmxjM1JjYmlBZ0lDQkFjbVYwZFhKdUlGdGliMjlzWldGdVhUb2dVbVYwZFhKdWN5QjBjblZsSUdsbUlIVjBhV3h6TG5aaGNsUjVjR1VnUFQwOUlDZEdkVzVqZEdsdmJpZGNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdhWE5HZFc1aklEMGdLRzlpYWlrZ1BUNGdkbUZ5Vkhsd1pTaHZZbW9wSUQwOVBTQW5SblZ1WTNScGIyNG5PMXh1WEc0dktseHVJQ0FnSUVseklIVjBhV3h6SUhaaGNpQmhJRzUxYldKbGNqOWNiaUFnSUNCY2JpQWdJQ0JBY0dGeVlXMDZJRlpoY21saFlteGxJSFJ2SUhSbGMzUmNiaUFnSUNCQWNtVjBkWEp1SUZ0aWIyOXNaV0Z1WFRvZ1VtVjBkWEp1Y3lCMGNuVmxJR2xtSUhSNWNHVnZaaUE5UFQwZ0oyNTFiV0psY2lkY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2FYTk9kVzBnUFNBb2JuVnRLU0E5UGlCMGVYQmxiMllnYm5WdElEMDlQU0FuYm5WdFltVnlKenRjYmx4dUx5cGNiaUFnSUNCSmN5QjFkR2xzY3lCMllYSWdZVzRnYjJKcVpXTjBQMXh1SUNBZ0lGeHVJQ0FnSUVCd1lYSmhiVG9nVm1GeWFXRmliR1VnZEc4Z2RHVnpkRnh1SUNBZ0lFQnlaWFIxY200Z1cySnZiMnhsWVc1ZE9pQlNaWFIxY201eklIUnlkV1VnYVdZZ2RIbHdaVzltSUQwOVBTQW5iMkpxWldOMEoxeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnBjMDlpYWlBOUlDaHZZbW9wSUQwK0lIUjVjR1Z2WmlCdlltb2dQVDA5SUNkdlltcGxZM1FuTzF4dVhHNHZLbHh1SUNBZ0lFbHpJSFYwYVd4eklHRWdjbVZzWVhScGRtVWdkbUZzZFdVZ1lYTnphV2R1YldWdWREOWNiaUFnSUNCY2JpQWdJQ0JBY0dGeVlXMGdXM04wY21sdVoxMDZJRlpoY21saFlteGxJSFJ2SUhSbGMzUmNiaUFnSUNCQWNtVjBkWEp1SUZ0aWIyOXNaV0Z1WFRvZ1NXWWdkWFJwYkhNZ2JHOXZhM01nYkdsclpTQmhJSEpsYkdGMGFYWmxJSFpoYkhWbElHRnpjMmxuYm0xbGJuUmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdhWE5TWld4aGRHbDJaVlpoYkhWbElEMGdLSFpoYkhWbEtTQTlQaUFvZG1Gc2RXVWdKaVlnZG1Gc2RXVXVhVzVrWlhoUFppQW1KaUIyWVd4MVpTNXBibVJsZUU5bUtDYzlKeWtnUGlBd0tTQS9JSFJ5ZFdVZ09pQm1ZV3h6WlR0Y2JseHVMeXBjYmlBZ0lDQkpjeUIxZEdsc2N5QjJZWElnWVNCemRISnBibWNnUHlCY2JpQWdJQ0JjYmlBZ0lDQkFjR0Z5WVcwNklGWmhjbWxoWW14bElIUnZJSFJsYzNSY2JpQWdJQ0JBY21WMGRYSnVJRnRpYjI5c1pXRnVYVG9nVW1WMGRYSnVjeUIwY25WbElHbG1JSFI1Y0dWdlppQnpkSElnUFQwOUlDZHpkSEpwYm1jblhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHbHpVM1J5YVc1bklEMGdLSE4wY2lrZ1BUNGdkSGx3Wlc5bUlITjBjaUE5UFQwZ0ozTjBjbWx1WnljN1hHNWNiaThxWEc0Z0lDQWdRSEJoY21GdElGdHpkSEpwYm1jZ2ZId2dUbTlrWlV4cGMzUmRPbHh1SUNBZ0lDQWdJQ0JKWmlCemRISnBibWNzSUhSeVpXRjBaV1FnWVhNZ2MyVnNaV04wYjNJdVhHNGdJQ0FnSUNBZ0lFbG1JRzV2ZEN3Z2RISmxZWFJsWkNCaGN5QndjbVZsZUdsemRHbHVaeUJPYjJSbFRHbHpkRnh1WEc0Z0lDQWdRSEpsZEhWeWJpQmJRWEp5WVhsZFhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElITmxiR1ZqZEVSdmJTQTlJQ2h6Wld4bFkzUnZjaWtnUFQ0Z2UxeHVJQ0FnSUdOdmJuTjBJRzV2WkdWeklEMGdLSFI1Y0dWdlppQnpaV3hsWTNSdmNpQTlQVDBnSjNOMGNtbHVaeWNwSUQ4Z1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZja0ZzYkNoelpXeGxZM1J2Y2lrZ09pQnpaV3hsWTNSdmNqdGNiaUFnSUNCeVpYUjFjbTRnS0c1dlpHVnpMbXhsYm1kMGFDa2dQeUJiWFM1emJHbGpaUzVqWVd4c0tHNXZaR1Z6S1NBNklGdGRMbkIxYzJnb2JtOWtaWE1wTzF4dWZUdGNibHh1THlwY2JpQWdJQ0JUY0d4cGRDQmpiMjF0WVMxa1pXeHBiV2wwWldRZ2MzUnlhVzVuWEc1Y2JpQWdJQ0JjSW1admJ5eGlZWEpjSWlBdFBpQmJYQ0ptYjI5Y0lpd2dYQ0ppWVhKY0lsMWNibHh1SUNBZ0lFQndZWEpoYlNCYmMzUnlhVzVuWFZ4dUlDQWdJRUJ5WlhSMWNtNGdXMkZ5Y21GNVhWeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnpjR3hwZEVOdmJXMWhSR1ZzYVcxcGRHVmtJRDBnS0haaGJIVmxLU0E5UGlCcGMxTjBjbWx1WnloMllXeDFaU2tnUHlCMllXeDFaUzV6Y0d4cGRDZ3ZMRnhjY3lvdktTQTZJRnQyWVd4MVpWMDdYRzVjYmk4cVhHNGdJQ0FnVTNCc2FYUWdjM0JoWTJVdFpHVnNhVzFwZEdWa0lITjBjbWx1WjF4dVhHNGdJQ0FnWENKbWIyOGdZbUZ5WENJZ0xUNGdXMXdpWm05dlhDSXNJRndpWW1GeVhDSmRYRzVjYmlBZ0lDQkFjR0Z5WVcwZ1czTjBjbWx1WjExY2JpQWdJQ0JBY21WMGRYSnVJRnRoY25KaGVWMWNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdjM0JzYVhSVGNHRmpaVVJsYkdsdGFYUmxaQ0E5SUNoMllXeDFaU2tnUFQ0Z2FYTlRkSEpwYm1jb2RtRnNkV1VwSUQ4Z2RtRnNkV1V1YzNCc2FYUW9KeUFuS1NBNklGdDJZV3gxWlYwN1hHNWNiaThxWEc0Z0lDQWdRMjl1ZG1WeWRDQnVkVzFpWlhJZ2RHOGdlQ0JrWldOcGJXRnNJSEJzWVdObGMxeHVYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkWEc0Z0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZFhHNGdJQ0FnUUhKbGRIVnliaUJiYm5WdFltVnlYVnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0IwYjBSbFkybHRZV3dnUFNBb2JuVnRMQ0J3Y21WamFYTnBiMjRnUFNBeUtTQTlQaUI3WEc0Z0lDQWdjSEpsWTJsemFXOXVJRDBnTVRBZ0tpb2djSEpsWTJsemFXOXVPMXh1SUNBZ0lISmxkSFZ5YmlCTllYUm9Mbkp2ZFc1a0tHNTFiU0FxSUhCeVpXTnBjMmx2YmlrZ0x5QndjbVZqYVhOcGIyNDdYRzU5TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy91dGlscy5qc1xuICoqIG1vZHVsZSBpZCA9IDIwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGVmYXVsdFByb3BzID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kZWZhdWx0LXByb3BzJyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IF9kZWZhdWx0UHJvcHMub3BhY2l0eVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OWhiSEJvWVM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3YTBKQlJXVTdRVUZEV0N4MVEwRkVWeUlzSW1acGJHVWlPaUpoYkhCb1lTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdleUJ2Y0dGamFYUjVJSDBnWm5KdmJTQW5MaTl6WlhSMGFXNW5jeTlrWldaaGRXeDBMWEJ5YjNCekp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdlMXh1SUNBZ0lHUmxabUYxYkhSUWNtOXdjem9nYjNCaFkybDBlVnh1ZlRzaVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2FscGhhLmpzXG4gKiogbW9kdWxlIGlkID0gMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF91bml0ID0gcmVxdWlyZSgnLi91bml0Jyk7XG5cbnZhciBfdW5pdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91bml0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICB1bml0OiAnZGVnJyxcbiAgICAgICAgdHlwZTogX3VuaXQyLmRlZmF1bHRcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5aGJtZHNaUzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3TzJ0Q1FVVmxPMEZCUTFnc2EwSkJRV003UVVGRFZpeGpRVUZOTEV0QlFVNDdRVUZEUVN3MFFrRkdWVHRMUVVGa0lpd2labWxzWlNJNkltRnVaMnhsTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMEwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCMWJtbDBWSGx3WlNCbWNtOXRJQ2N1TDNWdWFYUW5PMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0I3WEc0Z0lDQWdaR1ZtWVhWc2RGQnliM0J6T2lCN1hHNGdJQ0FnSUNBZ0lIVnVhWFE2SUNka1pXY25MRnh1SUNBZ0lDQWdJQ0IwZVhCbE9pQjFibWwwVkhsd1pWeHVJQ0FnSUgxY2JuMDdJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9hbmdsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDIyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxudmFyIF9weCA9IHJlcXVpcmUoJy4vcHgnKTtcblxudmFyIF9weDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9weCk7XG5cbnZhciBfZGljdGlvbmFyeSA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGljdGlvbmFyeScpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgZGVmYXVsdFByb3BzOiBfcHgyLmRlZmF1bHQuZGVmYXVsdFByb3BzLFxuXG4gICAgLypcbiAgICAgICAgU3BsaXQgcG9zaXRpb25zIGluIGZvcm1hdCBcIlggWSBaXCJcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogUG9zaXRpb24gdmFsdWVzXG4gICAgICAgICAgICBcIjIwJSAzMCUgMFwiIC0+IHsyMCUsIDMwJSwgMH1cbiAgICAgICAgICAgIFwiMjAlIDMwJVwiIC0+IHsyMCUsIDMwJX1cbiAgICAgICAgICAgIFwiMjAlXCIgLT4gezIwJSwgMjAlfVxuICAgICovXG4gICAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgc3BsaXRWYWx1ZXMgPSAoMCwgX3V0aWxzLnNwbGl0U3BhY2VEZWxpbWl0ZWQpKHZhbHVlKTtcbiAgICAgICAgdmFyIG51bUF4ZXMgPSBzcGxpdFZhbHVlcy5sZW5ndGg7XG4gICAgICAgIHZhciBzcGxpdFZhbHVlID0ge1xuICAgICAgICAgICAgWDogc3BsaXRWYWx1ZXNbMF0sXG4gICAgICAgICAgICBZOiBudW1BeGVzID4gMSA/IHNwbGl0VmFsdWVzWzFdIDogc3BsaXRWYWx1ZXNbMF1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAobnVtQXhlcyA+IDIpIHtcbiAgICAgICAgICAgIHNwbGl0VmFsdWUuWiA9IHNwbGl0VmFsdWVzWzJdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNwbGl0VmFsdWU7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMuY3JlYXRlRGVsaW1pdGVkKSh2YWx1ZXMsIF9kaWN0aW9uYXJ5LmF4ZXMsICcgJyk7XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OWhlR1Z6TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3T3pzN096czdPMnRDUVVsbE8wRkJRMWdzYTBKQlFXTXNZVUZCV1N4WlFVRmFPenM3T3pzN096czdPMEZCVldRc1YwRkJUeXhWUVVGRExFdEJRVVFzUlVGQlZ6dEJRVU5rTEZsQlFVMHNZMEZCWXl4blEwRkJiMElzUzBGQmNFSXNRMEZCWkN4RFFVUlJPMEZCUldRc1dVRkJUU3hWUVVGVkxGbEJRVmtzVFVGQldpeERRVVpHTzBGQlIyUXNXVUZCVFN4aFFVRmhPMEZCUTJZc1pVRkJSeXhaUVVGWkxFTkJRVm9zUTBGQlNEdEJRVU5CTEdWQlFVY3NUMEZCUXl4SFFVRlZMRU5CUVZZc1IwRkJaU3haUVVGWkxFTkJRVm9zUTBGQmFFSXNSMEZCYVVNc1dVRkJXU3hEUVVGYUxFTkJRV3BETzFOQlJrUXNRMEZJVVRzN1FVRlJaQ3haUVVGSkxGVkJRVlVzUTBGQlZpeEZRVUZoTzBGQlEySXNkVUpCUVZjc1EwRkJXQ3hIUVVGbExGbEJRVmtzUTBGQldpeERRVUZtTEVOQlJHRTdVMEZCYWtJN08wRkJTVUVzWlVGQlR5eFZRVUZRTEVOQldtTTdTMEZCV0RzN1FVRmxVQ3hoUVVGVExGVkJRVU1zVFVGQlJEdGxRVUZaTERSQ1FVRm5RaXhOUVVGb1FpeHZRa0ZCT0VJc1IwRkJPVUk3UzBGQldpSXNJbVpwYkdVaU9pSmhlR1Z6TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMEwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCN0lHTnlaV0YwWlVSbGJHbHRhWFJsWkN3Z2MzQnNhWFJUY0dGalpVUmxiR2x0YVhSbFpDQjlJR1p5YjIwZ0p5NHVMMmx1WXk5MWRHbHNjeWM3WEc1cGJYQnZjblFnY0hoV1lXeDFaVlI1Y0dVZ1puSnZiU0FuTGk5d2VDYzdYRzVwYlhCdmNuUWdleUJoZUdWeklIMGdabkp2YlNBbkxpOXpaWFIwYVc1bmN5OWthV04wYVc5dVlYSjVKenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnZTF4dUlDQWdJR1JsWm1GMWJIUlFjbTl3Y3pvZ2NIaFdZV3gxWlZSNWNHVXVaR1ZtWVhWc2RGQnliM0J6TEZ4dUlDQWdJQ0FnSUNCY2JpQWdJQ0F2S2x4dUlDQWdJQ0FnSUNCVGNHeHBkQ0J3YjNOcGRHbHZibk1nYVc0Z1ptOXliV0YwSUZ3aVdDQlpJRnBjSWx4dUlDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ1FIQmhjbUZ0SUZ0emRISnBibWRkT2lCUWIzTnBkR2x2YmlCMllXeDFaWE5jYmlBZ0lDQWdJQ0FnSUNBZ0lGd2lNakFsSURNd0pTQXdYQ0lnTFQ0Z2V6SXdKU3dnTXpBbExDQXdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ1hDSXlNQ1VnTXpBbFhDSWdMVDRnZXpJd0pTd2dNekFsZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdYQ0l5TUNWY0lpQXRQaUI3TWpBbExDQXlNQ1Y5WEc0Z0lDQWdLaTljYmlBZ0lDQnpjR3hwZERvZ0tIWmhiSFZsS1NBOVBpQjdYRzRnSUNBZ0lDQWdJR052Ym5OMElITndiR2wwVm1Gc2RXVnpJRDBnYzNCc2FYUlRjR0ZqWlVSbGJHbHRhWFJsWkNoMllXeDFaU2s3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJRzUxYlVGNFpYTWdQU0J6Y0d4cGRGWmhiSFZsY3k1c1pXNW5kR2c3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJSE53YkdsMFZtRnNkV1VnUFNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JZT2lCemNHeHBkRlpoYkhWbGMxc3dYU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lGazZJQ2h1ZFcxQmVHVnpJRDRnTVNrZ1B5QnpjR3hwZEZaaGJIVmxjMXN4WFNBNklITndiR2wwVm1Gc2RXVnpXekJkWEc0Z0lDQWdJQ0FnSUgwN1hHNWNiaUFnSUNBZ0lDQWdhV1lnS0c1MWJVRjRaWE1nUGlBeUtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCemNHeHBkRlpoYkhWbExsb2dQU0J6Y0d4cGRGWmhiSFZsYzFzeVhUdGNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJ6Y0d4cGRGWmhiSFZsTzF4dUlDQWdJSDBzWEc1Y2JpQWdJQ0JqYjIxaWFXNWxPaUFvZG1Gc2RXVnpLU0E5UGlCamNtVmhkR1ZFWld4cGJXbDBaV1FvZG1Gc2RXVnpMQ0JoZUdWekxDQW5JQ2NwWEc1OU8xeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9heGVzLmpzXG4gKiogbW9kdWxlIGlkID0gMjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9yZ2IgPSByZXF1aXJlKCcuL3JnYicpO1xuXG52YXIgX3JnYjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZ2IpO1xuXG52YXIgX2hzbCA9IHJlcXVpcmUoJy4vaHNsJyk7XG5cbnZhciBfaHNsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hzbCk7XG5cbnZhciBfaGV4ID0gcmVxdWlyZSgnLi9oZXgnKTtcblxudmFyIF9oZXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGV4KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGNvbG9yVHlwZXMgPSBbX3JnYjIuZGVmYXVsdCwgX2hzbDIuZGVmYXVsdCwgX2hleDIuZGVmYXVsdF07XG52YXIgbnVtQ29sb3JUeXBlcyA9IGNvbG9yVHlwZXMubGVuZ3RoO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgZGVmYXVsdFByb3BzOiBfZXh0ZW5kcyh7fSwgX3JnYjIuZGVmYXVsdC5kZWZhdWx0UHJvcHMsIF9oc2wyLmRlZmF1bHQuZGVmYXVsdFByb3BzKSxcblxuICAgIHRlc3Q6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gX3JnYjIuZGVmYXVsdC50ZXN0KHZhbHVlKSB8fCBfaGV4Mi5kZWZhdWx0LnRlc3QodmFsdWUpIHx8IF9oc2wyLmRlZmF1bHQudGVzdCh2YWx1ZSk7XG4gICAgfSxcblxuICAgIHNwbGl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1Db2xvclR5cGVzOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChjb2xvclR5cGVzW2ldLnRlc3QodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbG9yVHlwZXNbaV0uc3BsaXQodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlcy5SZWQgIT09IHVuZGVmaW5lZCA/IF9yZ2IyLmRlZmF1bHQuY29tYmluZSh2YWx1ZXMpIDogX2hzbDIuZGVmYXVsdC5jb21iaW5lKHZhbHVlcyk7XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OWpiMnh2Y2k1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3T3pzN096czdPenM3T3pzN096dEJRVWxCTEVsQlFVMHNZVUZCWVN3MlEwRkJZanRCUVVOT0xFbEJRVTBzWjBKQlFXZENMRmRCUVZjc1RVRkJXRHM3YTBKQlJWQTdRVUZEV0N3clFrRkJiVUlzWTBGQlNTeFpRVUZLTEVWQlFYRkNMR05CUVVrc1dVRkJTaXhEUVVGNFF6czdRVUZGUVN4VlFVRk5MRlZCUVVNc1MwRkJSRHRsUVVGWExHTkJRVWtzU1VGQlNpeERRVUZUTEV0QlFWUXNTMEZCYlVJc1kwRkJTU3hKUVVGS0xFTkJRVk1zUzBGQlZDeERRVUZ1UWl4SlFVRnpReXhqUVVGSkxFbEJRVW9zUTBGQlV5eExRVUZVTEVOQlFYUkRPMHRCUVZnN08wRkJSVTRzVjBGQlR5eFZRVUZETEV0QlFVUXNSVUZCVnp0QlFVTmtMR0ZCUVVzc1NVRkJTU3hKUVVGSkxFTkJRVW9zUlVGQlR5eEpRVUZKTEdGQlFVb3NSVUZCYlVJc1IwRkJia01zUlVGQmQwTTdRVUZEY0VNc1owSkJRVWtzVjBGQlZ5eERRVUZZTEVWQlFXTXNTVUZCWkN4RFFVRnRRaXhMUVVGdVFpeERRVUZLTEVWQlFTdENPMEZCUXpOQ0xIVkNRVUZQTEZkQlFWY3NRMEZCV0N4RlFVRmpMRXRCUVdRc1EwRkJiMElzUzBGQmNFSXNRMEZCVUN4RFFVUXlRanRoUVVFdlFqdFRRVVJLTzB0QlJFYzdPMEZCVVZBc1lVRkJVeXhWUVVGRExFMUJRVVE3WlVGQldTeE5RVUZETEVOQlFVOHNSMEZCVUN4TFFVRmxMRk5CUVdZc1IwRkJORUlzWTBGQlNTeFBRVUZLTEVOQlFWa3NUVUZCV2l4RFFVRTNRaXhIUVVGdFJDeGpRVUZKTEU5QlFVb3NRMEZCV1N4TlFVRmFMRU5CUVc1RU8wdEJRVm9pTENKbWFXeGxJam9pWTI5c2IzSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFF2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSEpuWWlCbWNtOXRJQ2N1TDNKbllpYzdYRzVwYlhCdmNuUWdhSE5zSUdaeWIyMGdKeTR2YUhOc0p6dGNibWx0Y0c5eWRDQm9aWGdnWm5KdmJTQW5MaTlvWlhnbk8xeHVYRzVqYjI1emRDQmpiMnh2Y2xSNWNHVnpJRDBnVzNKbllpd2dhSE5zTENCb1pYaGRPMXh1WTI5dWMzUWdiblZ0UTI5c2IzSlVlWEJsY3lBOUlHTnZiRzl5Vkhsd1pYTXViR1Z1WjNSb08xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQjdYRzRnSUNBZ1pHVm1ZWFZzZEZCeWIzQnpPaUI3SUM0dUxuSm5ZaTVrWldaaGRXeDBVSEp2Y0hNc0lDNHVMbWh6YkM1a1pXWmhkV3gwVUhKdmNITWdmU3hjYmx4dUlDQWdJSFJsYzNRNklDaDJZV3gxWlNrZ1BUNGdjbWRpTG5SbGMzUW9kbUZzZFdVcElIeDhJR2hsZUM1MFpYTjBLSFpoYkhWbEtTQjhmQ0JvYzJ3dWRHVnpkQ2gyWVd4MVpTa3NYRzVjYmlBZ0lDQnpjR3hwZERvZ0tIWmhiSFZsS1NBOVBpQjdYRzRnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnYm5WdFEyOXNiM0pVZVhCbGN6c2dhU3NyS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb1kyOXNiM0pVZVhCbGMxdHBYUzUwWlhOMEtIWmhiSFZsS1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCamIyeHZjbFI1Y0dWelcybGRMbk53YkdsMEtIWmhiSFZsS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDBzWEc1Y2JpQWdJQ0JqYjIxaWFXNWxPaUFvZG1Gc2RXVnpLU0E5UGlBb2RtRnNkV1Z6TGxKbFpDQWhQVDBnZFc1a1pXWnBibVZrS1NBL0lISm5ZaTVqYjIxaWFXNWxLSFpoYkhWbGN5a2dPaUJvYzJ3dVkyOXRZbWx1WlNoMllXeDFaWE1wWEc1OU8xeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9jb2xvci5qc1xuICoqIG1vZHVsZSBpZCA9IDI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxudmFyIEZMT0FUX1JFR0VYID0gLygtKT8oXFxkW1xcZFxcLl0qKS9nO1xudmFyIGdlbmVyYXRlVG9rZW4gPSBmdW5jdGlvbiAodG9rZW4pIHtcbiAgICByZXR1cm4gJyR7JyArIHRva2VuICsgJ30nO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuXG4gICAgdGVzdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBtYXRjaGVzID0gdmFsdWUubWF0Y2goRkxPQVRfUkVHRVgpO1xuICAgICAgICByZXR1cm4gKDAsIF91dGlscy5pc0FycmF5KShtYXRjaGVzKSAmJiBtYXRjaGVzLmxlbmd0aCA+IDE7XG4gICAgfSxcblxuICAgIHRlbXBsYXRlOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIGNvdW50ZXIgPSAwO1xuICAgICAgICByZXR1cm4gdmFsdWUucmVwbGFjZShGTE9BVF9SRUdFWCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGdlbmVyYXRlVG9rZW4oY291bnRlcisrKTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIHNwbGl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIHNwbGl0VmFsdWUgPSB7fTtcblxuICAgICAgICB2YWx1ZS5tYXRjaChGTE9BVF9SRUdFWCkuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGkpIHtcbiAgICAgICAgICAgIHJldHVybiBzcGxpdFZhbHVlW2ldID0gdmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBzcGxpdFZhbHVlO1xuICAgIH0sXG5cbiAgICBjb21iaW5lOiBmdW5jdGlvbiAodmFsdWVzLCB0ZW1wbGF0ZSkge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZSA9IHRlbXBsYXRlLnJlcGxhY2UoZ2VuZXJhdGVUb2tlbihrZXkpLCB2YWx1ZXNba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgfVxuXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5amIyMXdiR1Y0TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenRCUVVWQkxFbEJRVTBzWTBGQll5eHJRa0ZCWkR0QlFVTk9MRWxCUVUwc1owSkJRV2RDTEZWQlFVTXNTMEZCUkR0WFFVRlhMRTlCUVU4c1MwRkJVQ3hIUVVGbExFZEJRV1k3UTBGQldEczdhMEpCUlZBN08wRkJSVmdzVlVGQlRTeFZRVUZETEV0QlFVUXNSVUZCVnp0QlFVTmlMRmxCUVUwc1ZVRkJWU3hOUVVGTkxFdEJRVTRzUTBGQldTeFhRVUZhTEVOQlFWWXNRMEZFVHp0QlFVVmlMR1ZCUVZFc2IwSkJRVkVzVDBGQlVpeExRVUZ2UWl4UlFVRlJMRTFCUVZJc1IwRkJhVUlzUTBGQmFrSXNRMEZHWmp0TFFVRllPenRCUVV0T0xHTkJRVlVzVlVGQlF5eExRVUZFTEVWQlFWYzdRVUZEYWtJc1dVRkJTU3hWUVVGVkxFTkJRVllzUTBGRVlUdEJRVVZxUWl4bFFVRlBMRTFCUVUwc1QwRkJUaXhEUVVGakxGZEJRV1FzUlVGQk1rSTdiVUpCUVUwc1kwRkJZeXhUUVVGa08xTkJRVTRzUTBGQmJFTXNRMEZHYVVJN1MwRkJXRHM3UVVGTFZpeFhRVUZQTEZWQlFVTXNTMEZCUkN4RlFVRlhPMEZCUTJRc1dVRkJUU3hoUVVGaExFVkJRV0lzUTBGRVVUczdRVUZIWkN4alFVRk5MRXRCUVU0c1EwRkJXU3hYUVVGYUxFVkJRWGxDTEU5QlFYcENMRU5CUVdsRExGVkJRVU1zUzBGQlJDeEZRVUZSTEVOQlFWSTdiVUpCUVdNc1YwRkJWeXhEUVVGWUxFbEJRV2RDTEV0QlFXaENPMU5CUVdRc1EwRkJha01zUTBGSVl6czdRVUZMWkN4bFFVRlBMRlZCUVZBc1EwRk1ZenRMUVVGWU96dEJRVkZRTEdGQlFWTXNWVUZCUXl4TlFVRkVMRVZCUVZNc1VVRkJWQ3hGUVVGelFqdEJRVU16UWl4aFFVRkxMRWxCUVVrc1IwRkJTaXhKUVVGWExFMUJRV2hDTEVWQlFYZENPMEZCUTNCQ0xHZENRVUZKTEU5QlFVOHNZMEZCVUN4RFFVRnpRaXhIUVVGMFFpeERRVUZLTEVWQlFXZERPMEZCUXpWQ0xESkNRVUZYTEZOQlFWTXNUMEZCVkN4RFFVRnBRaXhqUVVGakxFZEJRV1FzUTBGQmFrSXNSVUZCY1VNc1QwRkJUeXhIUVVGUUxFTkJRWEpETEVOQlFWZ3NRMEZFTkVJN1lVRkJhRU03VTBGRVNqczdRVUZOUVN4bFFVRlBMRkZCUVZBc1EwRlFNa0k3UzBGQmRFSWlMQ0ptYVd4bElqb2lZMjl0Y0d4bGVDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdleUJwYzBGeWNtRjVJSDBnWm5KdmJTQW5MaTR2YVc1akwzVjBhV3h6Snp0Y2JseHVZMjl1YzNRZ1JreFBRVlJmVWtWSFJWZ2dQU0F2S0MwcFB5aGNYR1JiWEZ4a1hGd3VYU29wTDJjN1hHNWpiMjV6ZENCblpXNWxjbUYwWlZSdmEyVnVJRDBnS0hSdmEyVnVLU0E5UGlBbkpIc25JQ3NnZEc5clpXNGdLeUFuZlNjN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElIdGNibHh1SUNBZ0lIUmxjM1E2SUNoMllXeDFaU2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCdFlYUmphR1Z6SUQwZ2RtRnNkV1V1YldGMFkyZ29Sa3hQUVZSZlVrVkhSVmdwTzF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnS0dselFYSnlZWGtvYldGMFkyaGxjeWtnSmlZZ2JXRjBZMmhsY3k1c1pXNW5kR2dnUGlBeEtUdGNiaUFnSUNCOUxGeHVYRzRnSUNBZ2RHVnRjR3hoZEdVNklDaDJZV3gxWlNrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0JzWlhRZ1kyOTFiblJsY2lBOUlEQTdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjJZV3gxWlM1eVpYQnNZV05sS0VaTVQwRlVYMUpGUjBWWUxDQW9LU0E5UGlCblpXNWxjbUYwWlZSdmEyVnVLR052ZFc1MFpYSXJLeWtwTzF4dUlDQWdJSDBzWEc1Y2JpQWdJQ0J6Y0d4cGREb2dLSFpoYkhWbEtTQTlQaUI3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJSE53YkdsMFZtRnNkV1VnUFNCN2ZUdGNibHh1SUNBZ0lDQWdJQ0IyWVd4MVpTNXRZWFJqYUNoR1RFOUJWRjlTUlVkRldDa3VabTl5UldGamFDZ29kbUZzZFdVc0lHa3BJRDArSUhOd2JHbDBWbUZzZFdWYmFWMGdQU0IyWVd4MVpTazdYRzVjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSE53YkdsMFZtRnNkV1U3WEc0Z0lDQWdmU3hjYmx4dUlDQWdJR052YldKcGJtVTZJQ2gyWVd4MVpYTXNJSFJsYlhCc1lYUmxLU0E5UGlCN1hHNGdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHdGxlU0JwYmlCMllXeDFaWE1wSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMllXeDFaWE11YUdGelQzZHVVSEp2Y0dWeWRIa29hMlY1S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUmxiWEJzWVhSbElEMGdkR1Z0Y0d4aGRHVXVjbVZ3YkdGalpTaG5aVzVsY21GMFpWUnZhMlZ1S0d0bGVTa3NJSFpoYkhWbGMxdHJaWGxkS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMFpXMXdiR0YwWlR0Y2JpQWdJQ0I5WEc1Y2JuMDdJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9jb21wbGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9yZ2IgPSByZXF1aXJlKCcuL3JnYicpO1xuXG52YXIgX3JnYjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZ2IpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgZGVmYXVsdFByb3BzOiBfcmdiMi5kZWZhdWx0LmRlZmF1bHRQcm9wcyxcblxuICAgIHRlc3Q6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgJiYgdmFsdWUuaW5kZXhPZignIycpID4gLTE7XG4gICAgfSxcblxuICAgIHNwbGl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIHIgPSB1bmRlZmluZWQsXG4gICAgICAgICAgICBnID0gdW5kZWZpbmVkLFxuICAgICAgICAgICAgYiA9IHVuZGVmaW5lZDtcblxuICAgICAgICAvLyBJZiB3ZSBoYXZlIDYgY2hhcmFjdGVycywgaWUgI0ZGMDAwMFxuICAgICAgICBpZiAodmFsdWUubGVuZ3RoID4gNCkge1xuICAgICAgICAgICAgciA9IHZhbHVlLnN1YnN0cigxLCAyKTtcbiAgICAgICAgICAgIGcgPSB2YWx1ZS5zdWJzdHIoMywgMik7XG4gICAgICAgICAgICBiID0gdmFsdWUuc3Vic3RyKDUsIDIpO1xuXG4gICAgICAgICAgICAvLyBPciB3ZSBoYXZlIDMgY2hhcmFjdGVycywgaWUgI0YwMFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHIgPSB2YWx1ZS5zdWJzdHIoMSwgMSk7XG4gICAgICAgICAgICAgICAgZyA9IHZhbHVlLnN1YnN0cigyLCAxKTtcbiAgICAgICAgICAgICAgICBiID0gdmFsdWUuc3Vic3RyKDMsIDEpO1xuICAgICAgICAgICAgICAgIHIgKz0gcjtcbiAgICAgICAgICAgICAgICBnICs9IGc7XG4gICAgICAgICAgICAgICAgYiArPSBiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBSZWQ6IHBhcnNlSW50KHIsIDE2KSxcbiAgICAgICAgICAgIEdyZWVuOiBwYXJzZUludChnLCAxNiksXG4gICAgICAgICAgICBCbHVlOiBwYXJzZUludChiLCAxNiksXG4gICAgICAgICAgICBBbHBoYTogMVxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICBjb21iaW5lOiBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgIHJldHVybiBfcmdiMi5kZWZhdWx0LmNvbWJpbmUodmFsdWVzKTtcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5b1pYZ3Vhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenRyUWtGRlpUdEJRVU5ZTEd0Q1FVRmpMR05CUVVrc1dVRkJTanM3UVVGRlpDeFZRVUZOTEZWQlFVTXNTMEZCUkR0bFFVRlpMRk5CUVZNc1RVRkJUU3hQUVVGT0xFTkJRV01zUjBGQlpDeEpRVUZ4UWl4RFFVRkRMRU5CUVVRN1MwRkJNVU03TzBGQlJVNHNWMEZCVHl4VlFVRkRMRXRCUVVRc1JVRkJWenRCUVVOa0xGbEJRVWtzWVVGQlNqdFpRVUZQTEdGQlFWQTdXVUZCVlN4aFFVRldPenM3UVVGRVl5eFpRVWxXTEUxQlFVMHNUVUZCVGl4SFFVRmxMRU5CUVdZc1JVRkJhMEk3UVVGRGJFSXNaMEpCUVVrc1RVRkJUU3hOUVVGT0xFTkJRV0VzUTBGQllpeEZRVUZuUWl4RFFVRm9RaXhEUVVGS0xFTkJSR3RDTzBGQlJXeENMR2RDUVVGSkxFMUJRVTBzVFVGQlRpeERRVUZoTEVOQlFXSXNSVUZCWjBJc1EwRkJhRUlzUTBGQlNpeERRVVpyUWp0QlFVZHNRaXhuUWtGQlNTeE5RVUZOTEUxQlFVNHNRMEZCWVN4RFFVRmlMRVZCUVdkQ0xFTkJRV2hDTEVOQlFVbzdPenRCUVVoclFpeFRRVUYwUWl4TlFVMVBPMEZCUTBnc2IwSkJRVWtzVFVGQlRTeE5RVUZPTEVOQlFXRXNRMEZCWWl4RlFVRm5RaXhEUVVGb1FpeERRVUZLTEVOQlJFYzdRVUZGU0N4dlFrRkJTU3hOUVVGTkxFMUJRVTRzUTBGQllTeERRVUZpTEVWQlFXZENMRU5CUVdoQ0xFTkJRVW9zUTBGR1J6dEJRVWRJTEc5Q1FVRkpMRTFCUVUwc1RVRkJUaXhEUVVGaExFTkJRV0lzUlVGQlowSXNRMEZCYUVJc1EwRkJTaXhEUVVoSE8wRkJTVWdzY1VKQlFVc3NRMEZCVEN4RFFVcEhPMEZCUzBnc2NVSkJRVXNzUTBGQlRDeERRVXhITzBGQlRVZ3NjVUpCUVVzc1EwRkJUQ3hEUVU1SE8yRkJUbEE3TzBGQlpVRXNaVUZCVHp0QlFVTklMR2xDUVVGTExGTkJRVk1zUTBGQlZDeEZRVUZaTEVWQlFWb3NRMEZCVER0QlFVTkJMRzFDUVVGUExGTkJRVk1zUTBGQlZDeEZRVUZaTEVWQlFWb3NRMEZCVUR0QlFVTkJMR3RDUVVGTkxGTkJRVk1zUTBGQlZDeEZRVUZaTEVWQlFWb3NRMEZCVGp0QlFVTkJMRzFDUVVGUExFTkJRVkE3VTBGS1NpeERRVzVDWXp0TFFVRllPenRCUVRKQ1VDeGhRVUZUTEZWQlFVTXNUVUZCUkR0bFFVRlpMR05CUVVrc1QwRkJTaXhEUVVGWkxFMUJRVm83UzBGQldpSXNJbVpwYkdVaU9pSm9aWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhKbllpQm1jbTl0SUNjdUwzSm5ZaWM3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUh0Y2JpQWdJQ0JrWldaaGRXeDBVSEp2Y0hNNklISm5ZaTVrWldaaGRXeDBVSEp2Y0hNc1hHNWNiaUFnSUNCMFpYTjBPaUFvZG1Gc2RXVXBJRDArSUNoMllXeDFaU0FtSmlCMllXeDFaUzVwYm1SbGVFOW1LQ2NqSnlrZ1BpQXRNU2tzWEc1Y2JpQWdJQ0J6Y0d4cGREb2dLSFpoYkhWbEtTQTlQaUI3WEc0Z0lDQWdJQ0FnSUd4bGRDQnlMQ0JuTENCaU8xeHVYRzRnSUNBZ0lDQWdJQzh2SUVsbUlIZGxJR2hoZG1VZ05pQmphR0Z5WVdOMFpYSnpMQ0JwWlNBalJrWXdNREF3WEc0Z0lDQWdJQ0FnSUdsbUlDaDJZV3gxWlM1c1pXNW5kR2dnUGlBMEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCeUlEMGdkbUZzZFdVdWMzVmljM1J5S0RFc0lESXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1p5QTlJSFpoYkhWbExuTjFZbk4wY2lnekxDQXlLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHSWdQU0IyWVd4MVpTNXpkV0p6ZEhJb05Td2dNaWs3WEc1Y2JpQWdJQ0FnSUNBZ0x5OGdUM0lnZDJVZ2FHRjJaU0F6SUdOb1lYSmhZM1JsY25Nc0lHbGxJQ05HTURCY2JpQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSElnUFNCMllXeDFaUzV6ZFdKemRISW9NU3dnTVNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JuSUQwZ2RtRnNkV1V1YzNWaWMzUnlLRElzSURFcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWWlBOUlIWmhiSFZsTG5OMVluTjBjaWd6TENBeEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUhJZ0t6MGdjanRjYmlBZ0lDQWdJQ0FnSUNBZ0lHY2dLejBnWnp0Y2JpQWdJQ0FnSUNBZ0lDQWdJR0lnS3owZ1lqdGNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQlNaV1E2SUhCaGNuTmxTVzUwS0hJc0lERTJLU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lFZHlaV1Z1T2lCd1lYSnpaVWx1ZENobkxDQXhOaWtzWEc0Z0lDQWdJQ0FnSUNBZ0lDQkNiSFZsT2lCd1lYSnpaVWx1ZENoaUxDQXhOaWtzWEc0Z0lDQWdJQ0FnSUNBZ0lDQkJiSEJvWVRvZ01WeHVJQ0FnSUNBZ0lDQjlPMXh1SUNBZ0lIMHNYRzVjYmlBZ0lDQmpiMjFpYVc1bE9pQW9kbUZzZFdWektTQTlQaUJ5WjJJdVkyOXRZbWx1WlNoMllXeDFaWE1wWEc1OU95SmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9oZXguanNcbiAqKiBtb2R1bGUgaWQgPSAyNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2RlZmF1bHRQcm9wcyA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGVmYXVsdC1wcm9wcycpO1xuXG52YXIgX2RpY3Rpb25hcnkgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RpY3Rpb25hcnknKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIEh1ZToge1xuICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgbWF4OiAzNjBcbiAgICAgICAgfSxcbiAgICAgICAgU2F0dXJhdGlvbjogX2RlZmF1bHRQcm9wcy5wZXJjZW50LFxuICAgICAgICBMaWdodG5lc3M6IF9kZWZhdWx0UHJvcHMucGVyY2VudCxcbiAgICAgICAgQWxwaGE6IF9kZWZhdWx0UHJvcHMub3BhY2l0eVxuICAgIH0sXG5cbiAgICB0ZXN0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlICYmIHZhbHVlLmluZGV4T2YoJ2hzbCcpID4gLTE7XG4gICAgfSxcblxuICAgIHNwbGl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMuZ2V0Q29sb3JWYWx1ZXMpKHZhbHVlLCBfZGljdGlvbmFyeS5oc2wpO1xuICAgIH0sXG5cbiAgICBjb21iaW5lOiBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzLmNyZWF0ZUZ1bmN0aW9uU3RyaW5nKSgoMCwgX3V0aWxzLmNyZWF0ZURlbGltaXRlZCkodmFsdWVzLCBfZGljdGlvbmFyeS5oc2wsICcsICcsIDIpLCAnaHNsYScpO1xuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTlvYzJ3dWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096dHJRa0ZKWlR0QlFVTllMR3RDUVVGak8wRkJRMVlzWVVGQlN6dEJRVU5FTEdsQ1FVRkxMRU5CUVV3N1FVRkRRU3hwUWtGQlN5eEhRVUZNTzFOQlJrbzdRVUZKUVN4NVEwRk1WVHRCUVUxV0xIZERRVTVWTzBGQlQxWXNiME5CVUZVN1MwRkJaRHM3UVVGVlFTeFZRVUZOTEZWQlFVTXNTMEZCUkR0bFFVRlpMRk5CUVZNc1RVRkJUU3hQUVVGT0xFTkJRV01zUzBGQlpDeEpRVUYxUWl4RFFVRkRMRU5CUVVRN1MwRkJOVU03TzBGQlJVNHNWMEZCVHl4VlFVRkRMRXRCUVVRN1pVRkJWeXd5UWtGQlpTeExRVUZtTzB0QlFWZzdPMEZCUlZBc1lVRkJVeXhWUVVGRExFMUJRVVE3WlVGQldTeHBRMEZCY1VJc05FSkJRV2RDTEUxQlFXaENMRzFDUVVGclF5eEpRVUZzUXl4RlFVRjNReXhEUVVGNFF5eERRVUZ5UWl4RlFVRnBSU3hOUVVGcVJUdExRVUZhSWl3aVptbHNaU0k2SW1oemJDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdleUJ3WlhKalpXNTBMQ0J2Y0dGamFYUjVJSDBnWm5KdmJTQW5MaTl6WlhSMGFXNW5jeTlrWldaaGRXeDBMWEJ5YjNCekp6dGNibWx0Y0c5eWRDQjdJR2h6YkNCaGN5Qm9jMnhVWlhKdGN5QjlJR1p5YjIwZ0p5NHZjMlYwZEdsdVozTXZaR2xqZEdsdmJtRnllU2M3WEc1cGJYQnZjblFnZXlCamNtVmhkR1ZFWld4cGJXbDBaV1FzSUdOeVpXRjBaVVoxYm1OMGFXOXVVM1J5YVc1bkxDQm5aWFJEYjJ4dmNsWmhiSFZsY3lCOUlHWnliMjBnSnk0dUwybHVZeTkxZEdsc2N5YzdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJSHRjYmlBZ0lDQmtaV1poZFd4MFVISnZjSE02SUh0Y2JpQWdJQ0FnSUNBZ1NIVmxPaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnRhVzQ2SURBc1hHNGdJQ0FnSUNBZ0lDQWdJQ0J0WVhnNklETTJNRnh1SUNBZ0lDQWdJQ0I5TEZ4dUlDQWdJQ0FnSUNCVFlYUjFjbUYwYVc5dU9pQndaWEpqWlc1MExGeHVJQ0FnSUNBZ0lDQk1hV2RvZEc1bGMzTTZJSEJsY21ObGJuUXNYRzRnSUNBZ0lDQWdJRUZzY0doaE9pQnZjR0ZqYVhSNVhHNGdJQ0FnZlN4Y2JseHVJQ0FnSUhSbGMzUTZJQ2gyWVd4MVpTa2dQVDRnS0haaGJIVmxJQ1ltSUhaaGJIVmxMbWx1WkdWNFQyWW9KMmh6YkNjcElENGdMVEVwTEZ4dVhHNGdJQ0FnYzNCc2FYUTZJQ2gyWVd4MVpTa2dQVDRnWjJWMFEyOXNiM0pXWVd4MVpYTW9kbUZzZFdVc0lHaHpiRlJsY20xektTeGNibHh1SUNBZ0lHTnZiV0pwYm1VNklDaDJZV3gxWlhNcElEMCtJR055WldGMFpVWjFibU4wYVc5dVUzUnlhVzVuS0dOeVpXRjBaVVJsYkdsdGFYUmxaQ2gyWVd4MVpYTXNJR2h6YkZSbGNtMXpMQ0FuTENBbkxDQXlLU3dnSjJoemJHRW5LVnh1ZlR0Y2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9oc2wuanNcbiAqKiBtb2R1bGUgaWQgPSAyN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2RpY3Rpb25hcnkgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RpY3Rpb25hcnknKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG52YXIgX3B4ID0gcmVxdWlyZSgnLi9weCcpO1xuXG52YXIgX3B4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3B4KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGRlZmF1bHRQcm9wczogX3B4Mi5kZWZhdWx0LmRlZmF1bHRQcm9wcyxcblxuICAgIC8qXG4gICAgICAgIFNwbGl0IGRpbWVuc2lvbnMgaW4gZm9ybWF0IFwiVG9wIFJpZ2h0IEJvdHRvbSBMZWZ0XCJcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogUG9zaXRpb24gdmFsdWVzXG4gICAgICAgICAgICBcIjIwcHggMCAzMHB4IDQwcHhcIiAtPiB7MjBweCwgMCwgMzBweCwgNDBweH1cbiAgICAgICAgICAgIFwiMjBweCAwIDMwcHhcIiAtPiB7MjBweCwgMCwgMzBweCwgMH1cbiAgICAgICAgICAgIFwiMjBweCAwXCIgLT4gezIwcHgsIDAsIDIwcHgsIDB9XG4gICAgICAgICAgICBcIjIwcHhcIiAtPiB7MjBweCwgMjBweCwgMjBweCwgMjBweH1cbiAgICAgICAgXG4gICAgICAgIEByZXR1cm4gW29iamVjdF06IE9iamVjdCB3aXRoIFQvUi9CL0wgbWV0cmljc1xuICAgICovXG4gICAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgc3BsaXRWYWx1ZSA9IHt9O1xuICAgICAgICB2YXIgc3BsaXRQb3NpdGlvbnMgPSAoMCwgX3V0aWxzLnNwbGl0U3BhY2VEZWxpbWl0ZWQpKHZhbHVlKTtcbiAgICAgICAgdmFyIG51bVBvc2l0aW9ucyA9IHNwbGl0UG9zaXRpb25zLmxlbmd0aDtcbiAgICAgICAgdmFyIGp1bXBCYWNrID0gbnVtUG9zaXRpb25zICE9PSAxID8gMiA6IDE7XG4gICAgICAgIHZhciBqID0gMDtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgc3BsaXRWYWx1ZVtfZGljdGlvbmFyeS5wb3NpdGlvbnNbaV1dID0gc3BsaXRQb3NpdGlvbnNbal07XG5cbiAgICAgICAgICAgIC8vIEp1bXAgYmFjayAodG8gc3RhcnQpIGNvdW50ZXIgaWYgd2UndmUgcmVhY2hlZCB0aGUgZW5kIG9mIG91ciB2YWx1ZXNcbiAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgIGogPSBqID09PSBudW1Qb3NpdGlvbnMgPyBqIC0ganVtcEJhY2sgOiBqO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNwbGl0VmFsdWU7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMuY3JlYXRlRGVsaW1pdGVkKSh2YWx1ZXMsIF9kaWN0aW9uYXJ5LnBvc2l0aW9ucywgJyAnKTtcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5d2IzTnBkR2x2Ym5NdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096czdPenM3YTBKQlNXVTdRVUZEV0N4clFrRkJZeXhoUVVGWkxGbEJRVm83T3pzN096czdPenM3T3pzN1FVRmhaQ3hYUVVGUExGVkJRVU1zUzBGQlJDeEZRVUZYTzBGQlEyUXNXVUZCVFN4aFFVRmhMRVZCUVdJc1EwRkVVVHRCUVVWa0xGbEJRVTBzYVVKQlFXbENMR2REUVVGdlFpeExRVUZ3UWl4RFFVRnFRaXhEUVVaUk8wRkJSMlFzV1VGQlRTeGxRVUZsTEdWQlFXVXNUVUZCWml4RFFVaFFPMEZCU1dRc1dVRkJUU3hYUVVGWExGbEJRVU1zUzBGQmFVSXNRMEZCYWtJc1IwRkJjMElzUTBGQmRrSXNSMEZCTWtJc1EwRkJNMElzUTBGS1NEdEJRVXRrTEZsQlFVa3NTVUZCU1N4RFFVRktMRU5CVEZVN08wRkJUMlFzWVVGQlN5eEpRVUZKTEVsQlFVa3NRMEZCU2l4RlFVRlBMRWxCUVVrc1EwRkJTaXhGUVVGUExFZEJRWFpDTEVWQlFUUkNPMEZCUTNoQ0xIVkNRVUZYTEhOQ1FVRlZMRU5CUVZZc1EwRkJXQ3hKUVVFeVFpeGxRVUZsTEVOQlFXWXNRMEZCTTBJN096dEJRVVIzUWl4aFFVbDRRaXhIUVVwM1FqdEJRVXQ0UWl4blFrRkJTU3hEUVVGRExFdEJRVTBzV1VGQlRpeEhRVUZ6UWl4SlFVRkpMRkZCUVVvc1IwRkJaU3hEUVVGMFF5eERRVXh2UWp0VFFVRTFRanM3UVVGUlFTeGxRVUZQTEZWQlFWQXNRMEZtWXp0TFFVRllPenRCUVd0Q1VDeGhRVUZUTEZWQlFVTXNUVUZCUkR0bFFVRlpMRFJDUVVGblFpeE5RVUZvUWl4NVFrRkJiVU1zUjBGQmJrTTdTMEZCV2lJc0ltWnBiR1VpT2lKd2IzTnBkR2x2Ym5NdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUXZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElIc2djRzl6YVhScGIyNXpJSDBnWm5KdmJTQW5MaTl6WlhSMGFXNW5jeTlrYVdOMGFXOXVZWEo1Snp0Y2JtbHRjRzl5ZENCN0lHTnlaV0YwWlVSbGJHbHRhWFJsWkN3Z2MzQnNhWFJUY0dGalpVUmxiR2x0YVhSbFpDQjlJR1p5YjIwZ0p5NHVMMmx1WXk5MWRHbHNjeWM3WEc1cGJYQnZjblFnY0hoV1lXeDFaVlI1Y0dVZ1puSnZiU0FuTGk5d2VDYzdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJSHRjYmlBZ0lDQmtaV1poZFd4MFVISnZjSE02SUhCNFZtRnNkV1ZVZVhCbExtUmxabUYxYkhSUWNtOXdjeXhjYmx4dUlDQWdJQzhxWEc0Z0lDQWdJQ0FnSUZOd2JHbDBJR1JwYldWdWMybHZibk1nYVc0Z1ptOXliV0YwSUZ3aVZHOXdJRkpwWjJoMElFSnZkSFJ2YlNCTVpXWjBYQ0pjYmlBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUVCd1lYSmhiU0JiYzNSeWFXNW5YVG9nVUc5emFYUnBiMjRnZG1Gc2RXVnpYRzRnSUNBZ0lDQWdJQ0FnSUNCY0lqSXdjSGdnTUNBek1IQjRJRFF3Y0hoY0lpQXRQaUI3TWpCd2VDd2dNQ3dnTXpCd2VDd2dOREJ3ZUgxY2JpQWdJQ0FnSUNBZ0lDQWdJRndpTWpCd2VDQXdJRE13Y0hoY0lpQXRQaUI3TWpCd2VDd2dNQ3dnTXpCd2VDd2dNSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lGd2lNakJ3ZUNBd1hDSWdMVDRnZXpJd2NIZ3NJREFzSURJd2NIZ3NJREI5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmNJakl3Y0hoY0lpQXRQaUI3TWpCd2VDd2dNakJ3ZUN3Z01qQndlQ3dnTWpCd2VIMWNiaUFnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJRUJ5WlhSMWNtNGdXMjlpYW1WamRGMDZJRTlpYW1WamRDQjNhWFJvSUZRdlVpOUNMMHdnYldWMGNtbGpjMXh1SUNBZ0lDb3ZYRzRnSUNBZ2MzQnNhWFE2SUNoMllXeDFaU2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCemNHeHBkRlpoYkhWbElEMGdlMzA3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJSE53YkdsMFVHOXphWFJwYjI1eklEMGdjM0JzYVhSVGNHRmpaVVJsYkdsdGFYUmxaQ2gyWVd4MVpTazdYRzRnSUNBZ0lDQWdJR052Ym5OMElHNTFiVkJ2YzJsMGFXOXVjeUE5SUhOd2JHbDBVRzl6YVhScGIyNXpMbXhsYm1kMGFEdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2FuVnRjRUpoWTJzZ1BTQW9iblZ0VUc5emFYUnBiMjV6SUNFOVBTQXhLU0EvSURJZ09pQXhPMXh1SUNBZ0lDQWdJQ0JzWlhRZ2FpQTlJREE3WEc1Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQTBPeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhOd2JHbDBWbUZzZFdWYmNHOXphWFJwYjI1elcybGRYU0E5SUhOd2JHbDBVRzl6YVhScGIyNXpXMnBkTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCS2RXMXdJR0poWTJzZ0tIUnZJSE4wWVhKMEtTQmpiM1Z1ZEdWeUlHbG1JSGRsSjNabElISmxZV05vWldRZ2RHaGxJR1Z1WkNCdlppQnZkWElnZG1Gc2RXVnpYRzRnSUNBZ0lDQWdJQ0FnSUNCcUt5czdYRzRnSUNBZ0lDQWdJQ0FnSUNCcUlEMGdLR29nUFQwOUlHNTFiVkJ2YzJsMGFXOXVjeWtnUHlCcUlDMGdhblZ0Y0VKaFkyc2dPaUJxTzF4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlITndiR2wwVm1Gc2RXVTdYRzRnSUNBZ2ZTeGNibHh1SUNBZ0lHTnZiV0pwYm1VNklDaDJZV3gxWlhNcElEMCtJR055WldGMFpVUmxiR2x0YVhSbFpDaDJZV3gxWlhNc0lIQnZjMmwwYVc5dWN5d2dKeUFuS1Z4dWZUc2lYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9wb3NpdGlvbnMuanNcbiAqKiBtb2R1bGUgaWQgPSAyOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3VuaXQgPSByZXF1aXJlKCcuL3VuaXQnKTtcblxudmFyIF91bml0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3VuaXQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIHVuaXQ6ICdweCcsXG4gICAgICAgIHR5cGU6IF91bml0Mi5kZWZhdWx0XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OXdlQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3TzJ0Q1FVVmxPMEZCUTFnc2EwSkJRV003UVVGRFZpeGpRVUZOTEVsQlFVNDdRVUZEUVN3MFFrRkdWVHRMUVVGa0lpd2labWxzWlNJNkluQjRMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwTDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0IxYm1sMFZIbHdaU0JtY205dElDY3VMM1Z1YVhRbk8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQjdYRzRnSUNBZ1pHVm1ZWFZzZEZCeWIzQnpPaUI3WEc0Z0lDQWdJQ0FnSUhWdWFYUTZJQ2R3ZUNjc1hHNGdJQ0FnSUNBZ0lIUjVjR1U2SUhWdWFYUlVlWEJsWEc0Z0lDQWdmVnh1ZlRzaVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3B4LmpzXG4gKiogbW9kdWxlIGlkID0gMjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG52YXIgX2RpY3Rpb25hcnkgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RpY3Rpb25hcnknKTtcblxudmFyIF9kZWZhdWx0UHJvcHMgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RlZmF1bHQtcHJvcHMnKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBSZWQ6IF9kZWZhdWx0UHJvcHMucmdiLFxuICAgICAgICBHcmVlbjogX2RlZmF1bHRQcm9wcy5yZ2IsXG4gICAgICAgIEJsdWU6IF9kZWZhdWx0UHJvcHMucmdiLFxuICAgICAgICBBbHBoYTogX2RlZmF1bHRQcm9wcy5vcGFjaXR5XG4gICAgfSxcblxuICAgIHRlc3Q6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgJiYgdmFsdWUuaW5kZXhPZigncmdiJykgPiAtMTtcbiAgICB9LFxuXG4gICAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gKDAsIF91dGlscy5nZXRDb2xvclZhbHVlcykodmFsdWUsIF9kaWN0aW9uYXJ5LnJnYik7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMuY3JlYXRlRnVuY3Rpb25TdHJpbmcpKCgwLCBfdXRpbHMuY3JlYXRlRGVsaW1pdGVkKSh2YWx1ZXMsIF9kaWN0aW9uYXJ5LnJnYiwgJywgJywgMiksICdyZ2JhJyk7XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OXlaMkl1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3T3p0clFrRkpaVHRCUVVOWUxHdENRVUZqTzBGQlExWXNPRUpCUkZVN1FVRkZWaXhuUTBGR1ZUdEJRVWRXTEN0Q1FVaFZPMEZCU1ZZc2IwTkJTbFU3UzBGQlpEczdRVUZQUVN4VlFVRk5MRlZCUVVNc1MwRkJSRHRsUVVGWkxGTkJRVk1zVFVGQlRTeFBRVUZPTEVOQlFXTXNTMEZCWkN4SlFVRjFRaXhEUVVGRExFTkJRVVE3UzBGQk5VTTdPMEZCUlU0c1YwRkJUeXhWUVVGRExFdEJRVVE3WlVGQlZ5d3lRa0ZCWlN4TFFVRm1PMHRCUVZnN08wRkJSVkFzWVVGQlV5eFZRVUZETEUxQlFVUTdaVUZCV1N4cFEwRkJjVUlzTkVKQlFXZENMRTFCUVdoQ0xHMUNRVUZyUXl4SlFVRnNReXhGUVVGM1F5eERRVUY0UXl4RFFVRnlRaXhGUVVGcFJTeE5RVUZxUlR0TFFVRmFJaXdpWm1sc1pTSTZJbkpuWWk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRDOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2V5QmpjbVZoZEdWRVpXeHBiV2wwWldRc0lHTnlaV0YwWlVaMWJtTjBhVzl1VTNSeWFXNW5MQ0JuWlhSRGIyeHZjbFpoYkhWbGN5QjlJR1p5YjIwZ0p5NHVMMmx1WXk5MWRHbHNjeWM3WEc1cGJYQnZjblFnZXlCeVoySWdZWE1nY21kaVZHVnliWE1nZlNCbWNtOXRJQ2N1TDNObGRIUnBibWR6TDJScFkzUnBiMjVoY25rbk8xeHVhVzF3YjNKMElIc2djbWRpSUdGeklHUmxabUYxYkhSU1IwSXNJRzl3WVdOcGRIa2dZWE1nWkdWbVlYVnNkRTl3WVdOcGRIa2dmU0JtY205dElDY3VMM05sZEhScGJtZHpMMlJsWm1GMWJIUXRjSEp2Y0hNbk8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQjdYRzRnSUNBZ1pHVm1ZWFZzZEZCeWIzQnpPaUI3WEc0Z0lDQWdJQ0FnSUZKbFpEb2daR1ZtWVhWc2RGSkhRaXhjYmlBZ0lDQWdJQ0FnUjNKbFpXNDZJR1JsWm1GMWJIUlNSMElzWEc0Z0lDQWdJQ0FnSUVKc2RXVTZJR1JsWm1GMWJIUlNSMElzWEc0Z0lDQWdJQ0FnSUVGc2NHaGhPaUJrWldaaGRXeDBUM0JoWTJsMGVWeHVJQ0FnSUgwc1hHNWNiaUFnSUNCMFpYTjBPaUFvZG1Gc2RXVXBJRDArSUNoMllXeDFaU0FtSmlCMllXeDFaUzVwYm1SbGVFOW1LQ2R5WjJJbktTQStJQzB4S1N4Y2JseHVJQ0FnSUhOd2JHbDBPaUFvZG1Gc2RXVXBJRDArSUdkbGRFTnZiRzl5Vm1Gc2RXVnpLSFpoYkhWbExDQnlaMkpVWlhKdGN5a3NYRzVjYmlBZ0lDQmpiMjFpYVc1bE9pQW9kbUZzZFdWektTQTlQaUJqY21WaGRHVkdkVzVqZEdsdmJsTjBjbWx1WnloamNtVmhkR1ZFWld4cGJXbDBaV1FvZG1Gc2RXVnpMQ0J5WjJKVVpYSnRjeXdnSnl3Z0p5d2dNaWtzSUNkeVoySmhKeWxjYm4wN0lsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3JnYi5qc1xuICoqIG1vZHVsZSBpZCA9IDMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgY3VycmVudDogMVxuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTl6WTJGc1pTNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3YTBKQlFXVTdRVUZEV0N4clFrRkJZenRCUVVOV0xHbENRVUZUTEVOQlFWUTdTMEZFU2lJc0ltWnBiR1VpT2lKelkyRnNaUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKbGVIQnZjblFnWkdWbVlYVnNkQ0I3WEc0Z0lDQWdaR1ZtWVhWc2RGQnliM0J6T2lCN1hHNGdJQ0FnSUNBZ0lHTjFjbkpsYm5RNklERmNiaUFnSUNCOVhHNTlPeUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvc2NhbGUuanNcbiAqKiBtb2R1bGUgaWQgPSAzMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2NvbG9yID0gcmVxdWlyZSgnLi9jb2xvcicpO1xuXG52YXIgX2NvbG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbG9yKTtcblxudmFyIF9weCA9IHJlcXVpcmUoJy4vcHgnKTtcblxudmFyIF9kaWN0aW9uYXJ5ID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kaWN0aW9uYXJ5Jyk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHNoYWRvd1dpdGhvdXRDb2xvclRlcm1zID0gX2RpY3Rpb25hcnkuc2hhZG93LnNsaWNlKDAsIDQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgZGVmYXVsdFByb3BzOiBfZXh0ZW5kcyh7fSwgX2NvbG9yMi5kZWZhdWx0LmRlZmF1bHRQcm9wcywge1xuICAgICAgICBYOiBfcHguZGVmYXVsdFByb3BzLFxuICAgICAgICBZOiBfcHguZGVmYXVsdFByb3BzLFxuICAgICAgICBSYWRpdXM6IF9weC5kZWZhdWx0UHJvcHMsXG4gICAgICAgIFNwcmVhZDogX3B4LmRlZmF1bHRQcm9wc1xuICAgIH0pLFxuXG4gICAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgYml0cyA9ICgwLCBfdXRpbHMuc3BsaXRTcGFjZURlbGltaXRlZCkodmFsdWUpO1xuICAgICAgICB2YXIgaGFzUmVhY2hlZENvbG9yID0gZmFsc2U7XG4gICAgICAgIHZhciBjb2xvclByb3AgPSAnJztcbiAgICAgICAgdmFyIHNwbGl0VmFsdWUgPSB7fTtcblxuICAgICAgICBiaXRzLmZvckVhY2goZnVuY3Rpb24gKGJpdCwgaSkge1xuICAgICAgICAgICAgLy8gSWYgd2UndmUgcmVhY2hlZCB0aGUgY29sb3IgcHJvcHMsIGFwcGVuZCB0byBjb2xvciBzdHJpbmdcbiAgICAgICAgICAgIGlmIChoYXNSZWFjaGVkQ29sb3IgfHwgX2NvbG9yMi5kZWZhdWx0LnRlc3QoYml0KSkge1xuICAgICAgICAgICAgICAgIGhhc1JlYWNoZWRDb2xvciA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29sb3JQcm9wICs9IGJpdDtcblxuICAgICAgICAgICAgICAgIC8vIEVsc2UgcHJvY2VzcyBzaGFkb3cgdmFsdWVcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNwbGl0VmFsdWVbX2RpY3Rpb25hcnkuc2hhZG93W2ldXSA9IGJpdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBzcGxpdENvbG9yUHJvcHMgPSBfY29sb3IyLmRlZmF1bHQuc3BsaXQoY29sb3JQcm9wKTtcblxuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHNwbGl0VmFsdWUsIHsgc3BsaXRDb2xvclByb3BzOiBzcGxpdENvbG9yUHJvcHMgfSk7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMuY3JlYXRlRGVsaW1pdGVkKSh2YWx1ZXMsIHNoYWRvd1dpdGhvdXRDb2xvclRlcm1zLCAnICcpICsgX2NvbG9yMi5kZWZhdWx0LmNvbWJpbmUodmFsdWVzKTtcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5emFHRmtiM2N1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3T3pzN096czdPenM3TzBGQlMwRXNTVUZCVFN3d1FrRkJNRUlzYlVKQlFWa3NTMEZCV2l4RFFVRnJRaXhEUVVGc1FpeEZRVUZ4UWl4RFFVRnlRaXhEUVVFeFFqczdhMEpCUlZNN1FVRkRXQ3dyUWtGRFR5eG5Ra0ZCVFN4WlFVRk9PMEZCUTBnN1FVRkRRVHRCUVVOQk8wRkJRMEU3VFVGTVNqczdRVUZSUVN4WFFVRlBMRlZCUVVNc1MwRkJSQ3hGUVVGWE8wRkJRMlFzV1VGQlRTeFBRVUZQTEdkRFFVRnZRaXhMUVVGd1FpeERRVUZRTEVOQlJGRTdRVUZGWkN4WlFVRkpMR3RDUVVGclFpeExRVUZzUWl4RFFVWlZPMEZCUjJRc1dVRkJTU3haUVVGWkxFVkJRVm9zUTBGSVZUdEJRVWxrTEZsQlFVa3NZVUZCWVN4RlFVRmlMRU5CU2xVN08wRkJUV1FzWVVGQlN5eFBRVUZNTEVOQlFXRXNWVUZCUXl4SFFVRkVMRVZCUVUwc1EwRkJUaXhGUVVGWk96dEJRVVZ5UWl4blFrRkJTU3h0UWtGQmJVSXNaMEpCUVUwc1NVRkJUaXhEUVVGWExFZEJRVmdzUTBGQmJrSXNSVUZCYjBNN1FVRkRjRU1zYTBOQlFXdENMRWxCUVd4Q0xFTkJSRzlETzBGQlJYQkRMRFpDUVVGaExFZEJRV0k3T3p0QlFVWnZReXhoUVVGNFF5eE5RVXRQTzBGQlEwZ3NLMEpCUVZjc2JVSkJRVmtzUTBGQldpeERRVUZZTEVsQlFUWkNMRWRCUVRkQ0xFTkJSRWM3YVVKQlRGQTdVMEZHVXl4RFFVRmlMRU5CVG1NN08wRkJhMEprTEZsQlFVMHNhMEpCUVd0Q0xHZENRVUZOTEV0QlFVNHNRMEZCV1N4VFFVRmFMRU5CUVd4Q0xFTkJiRUpST3p0QlFXOUNaQ3cwUWtGQldTeGpRVUZaTEcxRFFVRjRRaXhEUVhCQ1l6dExRVUZZT3p0QlFYVkNVQ3hoUVVGVExGVkJRVU1zVFVGQlJEdGxRVUZaTERSQ1FVRm5RaXhOUVVGb1FpeEZRVUYzUWl4MVFrRkJlRUlzUlVGQmFVUXNSMEZCYWtRc1NVRkJkMFFzWjBKQlFVMHNUMEZCVGl4RFFVRmpMRTFCUVdRc1EwRkJlRVE3UzBGQldpSXNJbVpwYkdVaU9pSnphR0ZrYjNjdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUXZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElHTnZiRzl5SUdaeWIyMGdKeTR2WTI5c2IzSW5PMXh1YVcxd2IzSjBJSHNnWkdWbVlYVnNkRkJ5YjNCeklHRnpJSEI0UkdWbVlYVnNkRkJ5YjNCeklIMGdabkp2YlNBbkxpOXdlQ2M3WEc1cGJYQnZjblFnZXlCemFHRmtiM2NnWVhNZ2MyaGhaRzkzVkdWeWJYTWdmU0JtY205dElDY3VMM05sZEhScGJtZHpMMlJwWTNScGIyNWhjbmtuTzF4dWFXMXdiM0owSUhzZ2MzQnNhWFJUY0dGalpVUmxiR2x0YVhSbFpDd2dZM0psWVhSbFJHVnNhVzFwZEdWa0lIMGdabkp2YlNBbkxpNHZhVzVqTDNWMGFXeHpKenRjYmx4dVkyOXVjM1FnYzJoaFpHOTNWMmwwYUc5MWRFTnZiRzl5VkdWeWJYTWdQU0J6YUdGa2IzZFVaWEp0Y3k1emJHbGpaU2d3TENBMEtUdGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdlMXh1SUNBZ0lHUmxabUYxYkhSUWNtOXdjem9nZTF4dUlDQWdJQ0FnSUNBdUxpNWpiMnh2Y2k1a1pXWmhkV3gwVUhKdmNITXNYRzRnSUNBZ0lDQWdJRmc2SUhCNFJHVm1ZWFZzZEZCeWIzQnpMRnh1SUNBZ0lDQWdJQ0JaT2lCd2VFUmxabUYxYkhSUWNtOXdjeXhjYmlBZ0lDQWdJQ0FnVW1Ga2FYVnpPaUJ3ZUVSbFptRjFiSFJRY205d2N5eGNiaUFnSUNBZ0lDQWdVM0J5WldGa09pQndlRVJsWm1GMWJIUlFjbTl3YzF4dUlDQWdJSDBzWEc1Y2JpQWdJQ0J6Y0d4cGREb2dLSFpoYkhWbEtTQTlQaUI3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJR0pwZEhNZ1BTQnpjR3hwZEZOd1lXTmxSR1ZzYVcxcGRHVmtLSFpoYkhWbEtUdGNiaUFnSUNBZ0lDQWdiR1YwSUdoaGMxSmxZV05vWldSRGIyeHZjaUE5SUdaaGJITmxPMXh1SUNBZ0lDQWdJQ0JzWlhRZ1kyOXNiM0pRY205d0lEMGdKeWM3WEc0Z0lDQWdJQ0FnSUd4bGRDQnpjR3hwZEZaaGJIVmxJRDBnZTMwN1hHNWNiaUFnSUNBZ0lDQWdZbWwwY3k1bWIzSkZZV05vS0NoaWFYUXNJR2twSUQwK0lIdGNiaUFnSUNBZ0lDQWdJQ0FnSUM4dklFbG1JSGRsSjNabElISmxZV05vWldRZ2RHaGxJR052Ykc5eUlIQnliM0J6TENCaGNIQmxibVFnZEc4Z1kyOXNiM0lnYzNSeWFXNW5YRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9hR0Z6VW1WaFkyaGxaRU52Ykc5eUlIeDhJR052Ykc5eUxuUmxjM1FvWW1sMEtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2hoYzFKbFlXTm9aV1JEYjJ4dmNpQTlJSFJ5ZFdVN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyOXNiM0pRY205d0lDczlJR0pwZER0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1JXeHpaU0J3Y205alpYTnpJSE5vWVdSdmR5QjJZV3gxWlZ4dUlDQWdJQ0FnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnpjR3hwZEZaaGJIVmxXM05vWVdSdmQxUmxjbTF6VzJsZFhTQTlJR0pwZER0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlNrN1hHNWNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2MzQnNhWFJEYjJ4dmNsQnliM0J6SUQwZ1kyOXNiM0l1YzNCc2FYUW9ZMjlzYjNKUWNtOXdLVHRjYmx4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZXlBdUxpNXpjR3hwZEZaaGJIVmxMQ0J6Y0d4cGRFTnZiRzl5VUhKdmNITWdmVHRjYmlBZ0lDQjlMRnh1WEc0Z0lDQWdZMjl0WW1sdVpUb2dLSFpoYkhWbGN5a2dQVDRnWTNKbFlYUmxSR1ZzYVcxcGRHVmtLSFpoYkhWbGN5d2djMmhoWkc5M1YybDBhRzkxZEVOdmJHOXlWR1Z5YlhNc0lDY2dKeWtnS3lCamIyeHZjaTVqYjIxaWFXNWxLSFpoYkhWbGN5bGNibjA3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3NoYWRvdy5qc1xuICoqIG1vZHVsZSBpZCA9IDMyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIHRlc3Q6IGZ1bmN0aW9uICh1bnBhcnNlZCkge1xuICAgICAgICB2YXIgX2ZpbmRWYWx1ZUFuZFVuaXQgPSAoMCwgX3V0aWxzLmZpbmRWYWx1ZUFuZFVuaXQpKHVucGFyc2VkKTtcblxuICAgICAgICB2YXIgdmFsdWUgPSBfZmluZFZhbHVlQW5kVW5pdC52YWx1ZTtcblxuICAgICAgICByZXR1cm4gKDAsIF91dGlscy5pc051bSkodmFsdWUpICYmICFpc05hTih2YWx1ZSkgPyB0cnVlIDogZmFsc2U7XG4gICAgfSxcblxuICAgIHBhcnNlOiBmdW5jdGlvbiAodW5wYXJzZWQsIHBhcmVudCkge1xuICAgICAgICB2YXIgX2ZpbmRWYWx1ZUFuZFVuaXQyID0gKDAsIF91dGlscy5maW5kVmFsdWVBbmRVbml0KSh1bnBhcnNlZCk7XG5cbiAgICAgICAgdmFyIHZhbHVlID0gX2ZpbmRWYWx1ZUFuZFVuaXQyLnZhbHVlO1xuICAgICAgICB2YXIgdW5pdCA9IF9maW5kVmFsdWVBbmRVbml0Mi51bml0O1xuXG4gICAgICAgIGlmICh1bml0ICYmIHVuaXQgIT09IHVuaXQpIHtcbiAgICAgICAgICAgIHBhcmVudC51bml0ID0gdW5pdDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9LFxuXG4gICAgc2VyaWFsaXplOiBmdW5jdGlvbiAocGFyc2VkLCBwYXJlbnQpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlZCArIChwYXJlbnQudW5pdCB8fCAnJyk7XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OTFibWwwTG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenRyUWtGRlpUdEJRVU5ZTEZWQlFVMHNWVUZCVlN4UlFVRldMRVZCUVc5Q08yZERRVU5LTERaQ1FVRnBRaXhSUVVGcVFpeEZRVVJKT3p0WlFVTmtMR2REUVVSak96dEJRVVYwUWl4bFFVRlBMR2xDUVVGRExFTkJRVTBzUzBGQlRpeExRVUZuUWl4RFFVRkRMRTFCUVUwc1MwRkJUaXhEUVVGRUxFZEJRV2xDTEVsQlFXeERMRWRCUVhsRExFdEJRWHBETEVOQlJtVTdTMEZCY0VJN08wRkJTMDRzVjBGQlR5eFZRVUZWTEZGQlFWWXNSVUZCYjBJc1RVRkJjRUlzUlVGQk5FSTdhVU5CUTFBc05rSkJRV2xDTEZGQlFXcENMRVZCUkU4N08xbEJRM1pDTEdsRFFVUjFRanRaUVVOb1Fpd3JRa0ZFWjBJN08wRkJSeTlDTEZsQlFVa3NVVUZCVVN4VFFVRlRMRWxCUVZRc1JVRkJaVHRCUVVOMlFpeHRRa0ZCVHl4SlFVRlFMRWRCUVdNc1NVRkJaQ3hEUVVSMVFqdFRRVUV6UWpzN1FVRkpRU3hsUVVGUExFdEJRVkFzUTBGUUswSTdTMEZCTlVJN08wRkJWVkFzWlVGQlZ5eFZRVUZETEUxQlFVUXNSVUZCVXl4TlFVRlVPMlZCUVc5Q0xGVkJRVlVzVDBGQlR5eEpRVUZRTEVsQlFXVXNSVUZCWml4RFFVRldPMHRCUVhCQ0lpd2labWxzWlNJNkluVnVhWFF1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhzZ2FYTk9kVzBzSUdacGJtUldZV3gxWlVGdVpGVnVhWFFnZlNCbWNtOXRJQ2N1TGk5cGJtTXZkWFJwYkhNbk8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQjdYRzRnSUNBZ2RHVnpkRG9nWm5WdVkzUnBiMjRnS0hWdWNHRnljMlZrS1NCN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUhzZ2RtRnNkV1VnZlNBOUlHWnBibVJXWVd4MVpVRnVaRlZ1YVhRb2RXNXdZWEp6WldRcE8xeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z0tHbHpUblZ0S0haaGJIVmxLU0FtSmlBaGFYTk9ZVTRvZG1Gc2RXVXBLU0EvSUhSeWRXVWdPaUJtWVd4elpUdGNiaUFnSUNCOUxGeHVYRzRnSUNBZ2NHRnljMlU2SUdaMWJtTjBhVzl1SUNoMWJuQmhjbk5sWkN3Z2NHRnlaVzUwS1NCN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUhzZ2RtRnNkV1VzSUhWdWFYUWdmU0E5SUdacGJtUldZV3gxWlVGdVpGVnVhWFFvZFc1d1lYSnpaV1FwTzF4dVhHNGdJQ0FnSUNBZ0lHbG1JQ2gxYm1sMElDWW1JSFZ1YVhRZ0lUMDlJSFZ1YVhRcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhCaGNtVnVkQzUxYm1sMElEMGdkVzVwZER0Y2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjJZV3gxWlR0Y2JpQWdJQ0I5TEZ4dVhHNGdJQ0FnYzJWeWFXRnNhWHBsT2lBb2NHRnljMlZrTENCd1lYSmxiblFwSUQwK0lIQmhjbk5sWkNBcklDaHdZWEpsYm5RdWRXNXBkQ0I4ZkNBbkp5bGNibjA3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3VuaXQuanNcbiAqKiBtb2R1bGUgaWQgPSAzM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5jaGFpbiA9IGV4cG9ydHMuY2lyY3VsYXJNb3Rpb24gPSBleHBvcnRzLmNyZWF0ZU1hcHBlciA9IHVuZGVmaW5lZDtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKTtcblxudmFyIGNyZWF0ZU1hcHBlciA9IGV4cG9ydHMuY3JlYXRlTWFwcGVyID0gZnVuY3Rpb24gKGZyb20sIHRvKSB7XG4gICAgdmFyIG1hcExlbmd0aCA9IGZyb20ubGVuZ3RoO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IG1hcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPCBmcm9tW2ldIHx8IGkgPT09IG1hcExlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoMCwgX2NhbGMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MpKCgwLCBfY2FsYy5yZXN0cmljdCkoKDAsIF9jYWxjLmdldFByb2dyZXNzRnJvbVZhbHVlKSh2YWx1ZSwgZnJvbVtpIC0gMV0sIGZyb21baV0pLCAwLCAxKSwgdG9baSAtIDFdLCB0b1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xufTtcblxudmFyIGNpcmN1bGFyTW90aW9uID0gZXhwb3J0cy5jaXJjdWxhck1vdGlvbiA9IGZ1bmN0aW9uICh2LCBrZXksIF9yZWYpIHtcbiAgICB2YXIgdmFsdWVzID0gX3JlZi52YWx1ZXM7XG5cbiAgICB2YXIgb3JpZ2luWCA9IHZhbHVlcy5vcmlnaW5YID8gdmFsdWVzLm9yaWdpblguY3VycmVudCA6IDA7XG4gICAgdmFyIG9yaWdpblkgPSB2YWx1ZXMub3JpZ2luWSA/IHZhbHVlcy5vcmlnaW5ZLmN1cnJlbnQgOiAwO1xuXG4gICAgcmV0dXJuICgwLCBfY2FsYy5wb2ludEZyb21BbmdsZUFuZERpc3RhbmNlKSh7XG4gICAgICAgIHg6IG9yaWdpblgsXG4gICAgICAgIHk6IG9yaWdpbllcbiAgICB9LCB2YWx1ZXMuYW5nbGUuY3VycmVudCwgdmFsdWVzLmRpc3RhbmNlLmN1cnJlbnQpW2tleV07XG59O1xuXG4vKlxuICAgIENvbWJpbmUgdHJhbnNmb3JtZXJzIGludG8gb25lIGZ1bmN0aW9uIHRoYXQgY2FsbHMgZXZlcnlcbiAgICB0cmFuc2Zvcm1lciBpbiB0aGUgYXJyYXkgYW5kIHJldHVybnMgdGhlIHJlc3VsdFxuXG4gICAgQHBhcmFtIFthcnJheV1cbiAgICBAcmV0dXJuIFtmdW5jdGlvbl1cbiovXG52YXIgY2hhaW4gPSBleHBvcnRzLmNoYWluID0gZnVuY3Rpb24gKHRyYW5zZm9ybWVycykge1xuICAgIHZhciBudW1UcmFuc2Zvcm1lcnMgPSB0cmFuc2Zvcm1lcnMubGVuZ3RoO1xuICAgIHZhciBpID0gMDtcblxuICAgIC8qXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgICAgICBAcGFyYW0gW3N0cmluZ11cbiAgICAgICAgQHBhcmFtIFtBY3Rpb25dXG4gICAgICAgIEByZXR1cm4gW251bWJlcl1cbiAgICAqL1xuICAgIHJldHVybiBmdW5jdGlvbiAodiwga2V5LCBhKSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBudW1UcmFuc2Zvcm1lcnM7IGkrKykge1xuICAgICAgICAgICAgdiA9IHRyYW5zZm9ybWVyc1tpXSh2LCBrZXksIGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHY7XG4gICAgfTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12ZEhKaGJuTm1iM0p0WlhKekxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN1FVRkZUeXhKUVVGTkxITkRRVUZsTEZWQlFVTXNTVUZCUkN4RlFVRlBMRVZCUVZBc1JVRkJZenRCUVVOMFF5eFJRVUZOTEZsQlFWa3NTMEZCU3l4TlFVRk1MRU5CUkc5Q096dEJRVWQwUXl4WFFVRlBMRlZCUVVNc1MwRkJSQ3hGUVVGWE8wRkJRMlFzWVVGQlN5eEpRVUZKTEVsQlFVa3NRMEZCU2l4RlFVRlBMRWxCUVVrc1UwRkJTaXhGUVVGbExFZEJRUzlDTEVWQlFXOURPMEZCUTJoRExHZENRVUZKTEZGQlFWRXNTMEZCU3l4RFFVRk1MRU5CUVZJc1NVRkJiVUlzVFVGQlRTeFRRVUZPTEVWQlFXbENPMEZCUTNCRExIVkNRVUZQTEdkRFFVRnhRaXh2UWtGQlV5eG5RMEZCY1VJc1MwRkJja0lzUlVGQk5FSXNTMEZCU3l4SlFVRkpMRU5CUVVvc1EwRkJha01zUlVGQmVVTXNTMEZCU3l4RFFVRk1MRU5CUVhwRExFTkJRVlFzUlVGQk5FUXNRMEZCTlVRc1JVRkJLMFFzUTBGQkwwUXNRMEZCY2tJc1JVRkJkMFlzUjBGQlJ5eEpRVUZKTEVOQlFVb3NRMEZCTTBZc1JVRkJiVWNzUjBGQlJ5eERRVUZJTEVOQlFXNUhMRU5CUVZBc1EwRkViME03WVVGQmVFTTdVMEZFU2p0TFFVUkhMRU5CU0N0Q08wTkJRV1E3TzBGQldYSkNMRWxCUVUwc01FTkJRV2xDTEZWQlFVTXNRMEZCUkN4RlFVRkpMRWRCUVVvc1VVRkJkMEk3VVVGQllpeHhRa0ZCWVRzN1FVRkRiRVFzVVVGQlRTeFZRVUZWTEUxQlFVTXNRMEZCVHl4UFFVRlFMRWRCUVd0Q0xFOUJRVThzVDBGQlVDeERRVUZsTEU5QlFXWXNSMEZCZVVJc1EwRkJOVU1zUTBGRWEwTTdRVUZGYkVRc1VVRkJUU3hWUVVGVkxFMUJRVU1zUTBGQlR5eFBRVUZRTEVkQlFXdENMRTlCUVU4c1QwRkJVQ3hEUVVGbExFOUJRV1lzUjBGQmVVSXNRMEZCTlVNc1EwRkdhME03TzBGQlNXeEVMRmRCUVU4c2NVTkJRVEJDTzBGQlF6ZENMRmRCUVVjc1QwRkJTRHRCUVVOQkxGZEJRVWNzVDBGQlNEdExRVVpITEVWQlIwb3NUMEZCVHl4TFFVRlFMRU5CUVdFc1QwRkJZaXhGUVVGelFpeFBRVUZQTEZGQlFWQXNRMEZCWjBJc1QwRkJhRUlzUTBGSWJFSXNRMEZITWtNc1IwRklNME1zUTBGQlVDeERRVXByUkR0RFFVRjRRanM3T3pzN096czdPMEZCYVVKMlFpeEpRVUZOTEhkQ1FVRlJMRlZCUVVNc1dVRkJSQ3hGUVVGclFqdEJRVU51UXl4UlFVRk5MR3RDUVVGclFpeGhRVUZoTEUxQlFXSXNRMEZFVnp0QlFVVnVReXhSUVVGSkxFbEJRVWtzUTBGQlNqczdPenM3T3pzN1FVRkdLMElzVjBGVk5VSXNWVUZCUXl4RFFVRkVMRVZCUVVrc1IwRkJTaXhGUVVGVExFTkJRVlFzUlVGQlpUdEJRVU5zUWl4aFFVRkxMRWxCUVVrc1EwRkJTaXhGUVVGUExFbEJRVWtzWlVGQlNpeEZRVUZ4UWl4SFFVRnFReXhGUVVGelF6dEJRVU5zUXl4blFrRkJTU3hoUVVGaExFTkJRV0lzUlVGQlowSXNRMEZCYUVJc1JVRkJiVUlzUjBGQmJrSXNSVUZCZDBJc1EwRkJlRUlzUTBGQlNpeERRVVJyUXp0VFFVRjBRenM3UVVGSlFTeGxRVUZQTEVOQlFWQXNRMEZNYTBJN1MwRkJaaXhEUVZZMFFqdERRVUZzUWlJc0ltWnBiR1VpT2lKMGNtRnVjMlp2Y20xbGNuTXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFF2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSHNnWjJWMFVISnZaM0psYzNOR2NtOXRWbUZzZFdVc0lHZGxkRlpoYkhWbFJuSnZiVkJ5YjJkeVpYTnpMQ0J5WlhOMGNtbGpkQ3dnY0c5cGJuUkdjbTl0UVc1bmJHVkJibVJFYVhOMFlXNWpaU0I5SUdaeWIyMGdKeTR1TDJsdVl5OWpZV3hqSnp0Y2JseHVaWGh3YjNKMElHTnZibk4wSUdOeVpXRjBaVTFoY0hCbGNpQTlJQ2htY205dExDQjBieWtnUFQ0Z2UxeHVJQ0FnSUdOdmJuTjBJRzFoY0V4bGJtZDBhQ0E5SUdaeWIyMHViR1Z1WjNSb08xeHVYRzRnSUNBZ2NtVjBkWEp1SUNoMllXeDFaU2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQm1iM0lnS0d4bGRDQnBJRDBnTVRzZ2FTQThJRzFoY0V4bGJtZDBhRHNnYVNzcktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9kbUZzZFdVZ1BDQm1jbTl0VzJsZElIeDhJR2tnUFQwOUlHMWhjRXhsYm1kMGFDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQm5aWFJXWVd4MVpVWnliMjFRY205bmNtVnpjeWh5WlhOMGNtbGpkQ2huWlhSUWNtOW5jbVZ6YzBaeWIyMVdZV3gxWlNoMllXeDFaU3dnWm5KdmJWdHBJQzBnTVYwc0lHWnliMjFiYVYwcExDQXdMQ0F4S1N3Z2RHOWJhU0F0SURGZExDQjBiMXRwWFNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5TzF4dWZUdGNibHh1Wlhod2IzSjBJR052Ym5OMElHTnBjbU4xYkdGeVRXOTBhVzl1SUQwZ0tIWXNJR3RsZVN3Z2V5QjJZV3gxWlhNZ2ZTa2dQVDRnZTF4dUlDQWdJR052Ym5OMElHOXlhV2RwYmxnZ1BTQW9kbUZzZFdWekxtOXlhV2RwYmxncElEOGdkbUZzZFdWekxtOXlhV2RwYmxndVkzVnljbVZ1ZENBNklEQTdYRzRnSUNBZ1kyOXVjM1FnYjNKcFoybHVXU0E5SUNoMllXeDFaWE11YjNKcFoybHVXU2tnUHlCMllXeDFaWE11YjNKcFoybHVXUzVqZFhKeVpXNTBJRG9nTUR0Y2JseHVJQ0FnSUhKbGRIVnliaUJ3YjJsdWRFWnliMjFCYm1kc1pVRnVaRVJwYzNSaGJtTmxLSHRjYmlBZ0lDQWdJQ0FnZURvZ2IzSnBaMmx1V0N4Y2JpQWdJQ0FnSUNBZ2VUb2diM0pwWjJsdVdTQmNiaUFnSUNCOUxDQjJZV3gxWlhNdVlXNW5iR1V1WTNWeWNtVnVkQ3dnZG1Gc2RXVnpMbVJwYzNSaGJtTmxMbU4xY25KbGJuUXBXMnRsZVYwN1hHNTlPMXh1WEc0dktseHVJQ0FnSUVOdmJXSnBibVVnZEhKaGJuTm1iM0p0WlhKeklHbHVkRzhnYjI1bElHWjFibU4wYVc5dUlIUm9ZWFFnWTJGc2JITWdaWFpsY25sY2JpQWdJQ0IwY21GdWMyWnZjbTFsY2lCcGJpQjBhR1VnWVhKeVlYa2dZVzVrSUhKbGRIVnlibk1nZEdobElISmxjM1ZzZEZ4dVhHNGdJQ0FnUUhCaGNtRnRJRnRoY25KaGVWMWNiaUFnSUNCQWNtVjBkWEp1SUZ0bWRXNWpkR2x2YmwxY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ1kyaGhhVzRnUFNBb2RISmhibk5tYjNKdFpYSnpLU0E5UGlCN1hHNGdJQ0FnWTI5dWMzUWdiblZ0VkhKaGJuTm1iM0p0WlhKeklEMGdkSEpoYm5ObWIzSnRaWEp6TG14bGJtZDBhRHRjYmlBZ0lDQnNaWFFnYVNBOUlEQTdYRzVjYmlBZ0lDQXZLbHh1SUNBZ0lDQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMWNiaUFnSUNBZ0lDQWdRSEJoY21GdElGdHpkSEpwYm1kZFhHNGdJQ0FnSUNBZ0lFQndZWEpoYlNCYlFXTjBhVzl1WFZ4dUlDQWdJQ0FnSUNCQWNtVjBkWEp1SUZ0dWRXMWlaWEpkWEc0Z0lDQWdLaTljYmlBZ0lDQnlaWFIxY200Z0tIWXNJR3RsZVN3Z1lTa2dQVDRnZTF4dUlDQWdJQ0FnSUNCbWIzSWdLR2tnUFNBd095QnBJRHdnYm5WdFZISmhibk5tYjNKdFpYSnpPeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhZZ1BTQjBjbUZ1YzJadmNtMWxjbk5iYVYwb2Rpd2dhMlY1TENCaEtUdGNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIyTzF4dUlDQWdJSDA3WEc1OU95SmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvdHJhbnNmb3JtZXJzLmpzXG4gKiogbW9kdWxlIGlkID0gMzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9jb2xvciA9IHJlcXVpcmUoJy4uL3ZhbHVlLXR5cGVzL2NvbG9yJyk7XG5cbnZhciBfY29sb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29sb3IpO1xuXG52YXIgX2NvbXBsZXggPSByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9jb21wbGV4Jyk7XG5cbnZhciBfY29tcGxleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21wbGV4KTtcblxudmFyIF91bml0ID0gcmVxdWlyZSgnLi4vdmFsdWUtdHlwZXMvdW5pdCcpO1xuXG52YXIgX3VuaXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdW5pdCk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxudmFyIF9udW1lcmljYWxWYWx1ZXMgPSByZXF1aXJlKCcuLi9pbmMvbnVtZXJpY2FsLXZhbHVlcycpO1xuXG52YXIgX251bWVyaWNhbFZhbHVlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9udW1lcmljYWxWYWx1ZXMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgTlVNX05VTUVSSUNBTF9WQUxVRVMgPSBfbnVtZXJpY2FsVmFsdWVzMi5kZWZhdWx0Lmxlbmd0aDtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBOVU1fTlVNRVJJQ0FMX1ZBTFVFUzsgaSsrKSB7XG4gICAgICAgIHZhciB2YWx1ZVByb3AgPSB2YWx1ZVtfbnVtZXJpY2FsVmFsdWVzMi5kZWZhdWx0W2ldXTtcbiAgICAgICAgaWYgKCgwLCBfdXRpbHMuaXNTdHJpbmcpKHZhbHVlUHJvcCkpIHtcbiAgICAgICAgICAgIGlmIChfY29sb3IyLmRlZmF1bHQudGVzdCh2YWx1ZVByb3ApKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb2xvcjIuZGVmYXVsdDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoX2NvbXBsZXgyLmRlZmF1bHQudGVzdCh2YWx1ZVByb3ApKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb21wbGV4Mi5kZWZhdWx0O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChfdW5pdDIuZGVmYXVsdC50ZXN0KHZhbHVlUHJvcCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3VuaXQyLmRlZmF1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5a1pYUmxZM1F1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPMEZCVFVFc1NVRkJUU3gxUWtGQmRVSXNNRUpCUVdsQ0xFMUJRV3BDT3p0clFrRkZaQ3hWUVVGRExFdEJRVVFzUlVGQlZ6dEJRVU4wUWl4VFFVRkxMRWxCUVVrc1NVRkJTU3hEUVVGS0xFVkJRVThzU1VGQlNTeHZRa0ZCU2l4RlFVRXdRaXhIUVVFeFF5eEZRVUVyUXp0QlFVTXpReXhaUVVGTkxGbEJRVmtzVFVGQlRTd3dRa0ZCYVVJc1EwRkJha0lzUTBGQlRpeERRVUZhTEVOQlJIRkRPMEZCUlRORExGbEJRVWtzY1VKQlFWTXNVMEZCVkN4RFFVRktMRVZCUVhsQ08wRkJRM0pDTEdkQ1FVRkpMR2RDUVVGVkxFbEJRVllzUTBGQlpTeFRRVUZtTEVOQlFVb3NSVUZCSzBJN1FVRkRNMElzZFVOQlJESkNPMkZCUVM5Q0xFMUJSVThzU1VGQlNTeHJRa0ZCV1N4SlFVRmFMRU5CUVdsQ0xGTkJRV3BDTEVOQlFVb3NSVUZCYVVNN1FVRkRjRU1zZVVOQlJHOURPMkZCUVdwRExFMUJSVUVzU1VGQlNTeGxRVUZUTEVsQlFWUXNRMEZCWXl4VFFVRmtMRU5CUVVvc1JVRkJPRUk3UVVGRGFrTXNjME5CUkdsRE8yRkJRVGxDTzFOQlRGZzdTMEZHU2p0RFFVUlhJaXdpWm1sc1pTSTZJbVJsZEdWamRDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdZMjlzYjNKVWVYQmxJR1p5YjIwZ0p5NHVMM1poYkhWbExYUjVjR1Z6TDJOdmJHOXlKenRjYm1sdGNHOXlkQ0JqYjIxd2JHVjRWSGx3WlNCbWNtOXRJQ2N1TGk5MllXeDFaUzEwZVhCbGN5OWpiMjF3YkdWNEp6dGNibWx0Y0c5eWRDQjFibWwwVkhsd1pTQm1jbTl0SUNjdUxpOTJZV3gxWlMxMGVYQmxjeTkxYm1sMEp6dGNibWx0Y0c5eWRDQjdJR2x6VTNSeWFXNW5JSDBnWm5KdmJTQW5MaTR2YVc1akwzVjBhV3h6Snp0Y2JtbHRjRzl5ZENCT1ZVMUZVa2xEUVV4ZlZrRk1WVVZUSUdaeWIyMGdKeTR1TDJsdVl5OXVkVzFsY21sallXd3RkbUZzZFdWekp6dGNibHh1WTI5dWMzUWdUbFZOWDA1VlRVVlNTVU5CVEY5V1FVeFZSVk1nUFNCT1ZVMUZVa2xEUVV4ZlZrRk1WVVZUTG14bGJtZDBhRHRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnS0haaGJIVmxLU0E5UGlCN1hHNGdJQ0FnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCT1ZVMWZUbFZOUlZKSlEwRk1YMVpCVEZWRlV6c2dhU3NyS1NCN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUhaaGJIVmxVSEp2Y0NBOUlIWmhiSFZsVzA1VlRVVlNTVU5CVEY5V1FVeFZSVk5iYVYxZE8xeHVJQ0FnSUNBZ0lDQnBaaUFvYVhOVGRISnBibWNvZG1Gc2RXVlFjbTl3S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHTnZiRzl5Vkhsd1pTNTBaWE4wS0haaGJIVmxVSEp2Y0NrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z1kyOXNiM0pVZVhCbE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJR2xtSUNoamIyMXdiR1Y0Vkhsd1pTNTBaWE4wS0haaGJIVmxVSEp2Y0NrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z1kyOXRjR3hsZUZSNWNHVTdYRzRnSUNBZ0lDQWdJQ0FnSUNCOUlHVnNjMlVnYVdZZ0tIVnVhWFJVZVhCbExuUmxjM1FvZG1Gc2RXVlFjbTl3S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCMWJtbDBWSGx3WlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYm4wN0lsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2RldGVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDM1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBbJ2N1cnJlbnQnLCAnZnJvbScsICd0bycsICd2ZWxvY2l0eSddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1NdmJuVnRaWEpwWTJGc0xYWmhiSFZsY3k1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdhMEpCUVdVc1EwRkJReXhUUVVGRUxFVkJRVmtzVFVGQldpeEZRVUZ2UWl4SlFVRndRaXhGUVVFd1FpeFZRVUV4UWlJc0ltWnBiR1VpT2lKdWRXMWxjbWxqWVd3dGRtRnNkV1Z6TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMEwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltVjRjRzl5ZENCa1pXWmhkV3gwSUZzblkzVnljbVZ1ZENjc0lDZG1jbTl0Snl3Z0ozUnZKeXdnSjNabGJHOWphWFI1SjEwN0lsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy9udW1lcmljYWwtdmFsdWVzLmpzXG4gKiogbW9kdWxlIGlkID0gMzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9JbnB1dDIgPSByZXF1aXJlKCcuL0lucHV0Jyk7XG5cbnZhciBfSW5wdXQzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfSW5wdXQyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgUG9pbnRlciA9IGZ1bmN0aW9uIChfSW5wdXQpIHtcbiAgICBfaW5oZXJpdHMoUG9pbnRlciwgX0lucHV0KTtcblxuICAgIGZ1bmN0aW9uIFBvaW50ZXIoaW5pdGlhbFN0YXRlLCBtb3ZlRXZlbnQsIGV2ZW50VG9Qb2ludCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUG9pbnRlcik7XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0lucHV0LmNhbGwodGhpcywgaW5pdGlhbFN0YXRlKSk7XG5cbiAgICAgICAgX3RoaXMuZXZlbnRUb1BvaW50ID0gZXZlbnRUb1BvaW50O1xuICAgICAgICBfdGhpcy5tb3ZlRXZlbnQgPSBtb3ZlRXZlbnQ7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBQb2ludGVyLnByb3RvdHlwZS5sYXRlc3QgPSBmdW5jdGlvbiBsYXRlc3QoZSkge1xuICAgICAgICBfSW5wdXQucHJvdG90eXBlLmxhdGVzdC5jYWxsKHRoaXMsIHRoaXMuZXZlbnRUb1BvaW50KGUpKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH07XG5cbiAgICBQb2ludGVyLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICBfSW5wdXQucHJvdG90eXBlLnN0YXJ0LmNhbGwodGhpcyk7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHRoaXMubW92ZUV2ZW50LCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMi5sYXRlc3QoZSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBQb2ludGVyLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgICAgX0lucHV0LnByb3RvdHlwZS5zdG9wLmNhbGwodGhpcyk7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMubW92ZUV2ZW50LCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMy5sYXRlc3QoZSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gUG9pbnRlcjtcbn0oX0lucHV0My5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUG9pbnRlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJuQjFkQzlRYjJsdWRHVnlMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdPenM3T3pzN096czdTVUZGY1VJN096dEJRVU5xUWl4aFFVUnBRaXhQUVVOcVFpeERRVUZaTEZsQlFWb3NSVUZCTUVJc1UwRkJNVUlzUlVGQmNVTXNXVUZCY2tNc1JVRkJiVVE3T0VKQlJHeERMRk5CUTJ0RE96dHhSRUZETDBNc2EwSkJRVTBzV1VGQlRpeEhRVVFyUXpzN1FVRkZMME1zWTBGQlN5eFpRVUZNTEVkQlFXOUNMRmxCUVhCQ0xFTkJSaXRETzBGQlJ5OURMR05CUVVzc1UwRkJUQ3hIUVVGcFFpeFRRVUZxUWl4RFFVZ3JRenM3UzBGQmJrUTdPMEZCUkdsQ0xITkNRVTlxUWl4NVFrRkJUeXhIUVVGSE8wRkJRMDRzZVVKQlFVMHNUVUZCVGl4WlFVRmhMRXRCUVVzc1dVRkJUQ3hEUVVGclFpeERRVUZzUWl4RFFVRmlMRVZCUkUwN1FVRkZUaXhWUVVGRkxHTkJRVVlzUjBGR1RUczdPMEZCVUU4c2MwSkJXV3BDTEhsQ1FVRlJPenM3UVVGRFNpeDVRa0ZCVFN4TFFVRk9MRmxCUkVrN1FVRkZTaXhwUWtGQlV5eGxRVUZVTEVOQlFYbENMR2RDUVVGNlFpeERRVUV3UXl4TFFVRkxMRk5CUVV3c1JVRkJaMElzVlVGQlF5eERRVUZFTzIxQ1FVRlBMRTlCUVVzc1RVRkJUQ3hEUVVGWkxFTkJRVm83VTBGQlVDeERRVUV4UkN4RFFVWkpPenM3UVVGYVV5eHpRa0ZwUW1wQ0xIVkNRVUZQT3pzN1FVRkRTQ3g1UWtGQlRTeEpRVUZPTEZsQlJFYzdRVUZGU0N4cFFrRkJVeXhsUVVGVUxFTkJRWGxDTEcxQ1FVRjZRaXhEUVVFMlF5eExRVUZMTEZOQlFVd3NSVUZCWjBJc1ZVRkJReXhEUVVGRU8yMUNRVUZQTEU5QlFVc3NUVUZCVEN4RFFVRlpMRU5CUVZvN1UwRkJVQ3hEUVVFM1JDeERRVVpIT3pzN1YwRnFRbFVpTENKbWFXeGxJam9pVUc5cGJuUmxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnU1c1d2RYUWdabkp2YlNBbkxpOUpibkIxZENjN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHTnNZWE56SUZCdmFXNTBaWElnWlhoMFpXNWtjeUJKYm5CMWRDQjdYRzRnSUNBZ1kyOXVjM1J5ZFdOMGIzSW9hVzVwZEdsaGJGTjBZWFJsTENCdGIzWmxSWFpsYm5Rc0lHVjJaVzUwVkc5UWIybHVkQ2tnZTF4dUlDQWdJQ0FnSUNCemRYQmxjaWhwYm1sMGFXRnNVM1JoZEdVcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1WMlpXNTBWRzlRYjJsdWRDQTlJR1YyWlc1MFZHOVFiMmx1ZER0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV0YjNabFJYWmxiblFnUFNCdGIzWmxSWFpsYm5RN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYkdGMFpYTjBLR1VwSUh0Y2JpQWdJQ0FnSUNBZ2MzVndaWEl1YkdGMFpYTjBLSFJvYVhNdVpYWmxiblJVYjFCdmFXNTBLR1VwS1R0Y2JpQWdJQ0FnSUNBZ1pTNXdjbVYyWlc1MFJHVm1ZWFZzZENncE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhOMFlYSjBLQ2tnZTF4dUlDQWdJQ0FnSUNCemRYQmxjaTV6ZEdGeWRDZ3BPMXh1SUNBZ0lDQWdJQ0JrYjJOMWJXVnVkQzVrYjJOMWJXVnVkRVZzWlcxbGJuUXVZV1JrUlhabGJuUk1hWE4wWlc1bGNpaDBhR2x6TG0xdmRtVkZkbVZ1ZEN3Z0tHVXBJRDArSUhSb2FYTXViR0YwWlhOMEtHVXBLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnpkRzl3S0NrZ2UxeHVJQ0FnSUNBZ0lDQnpkWEJsY2k1emRHOXdLQ2s3WEc0Z0lDQWdJQ0FnSUdSdlkzVnRaVzUwTG1SdlkzVnRaVzUwUld4bGJXVnVkQzV5WlcxdmRtVkZkbVZ1ZEV4cGMzUmxibVZ5S0hSb2FYTXViVzkyWlVWMlpXNTBMQ0FvWlNrZ1BUNGdkR2hwY3k1c1lYUmxjM1FvWlNrcE8xeHVJQ0FnSUgxY2JuMWNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5wdXQvUG9pbnRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDM3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlYWN0aXZhdGUgPSBleHBvcnRzLmdldFRhc2tJZCA9IHVuZGVmaW5lZDtcbmV4cG9ydHMuYWN0aXZhdGUgPSBhY3RpdmF0ZTtcblxudmFyIF90aW1lciA9IHJlcXVpcmUoJy4vdGltZXInKTtcblxudmFyIF90aW1lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90aW1lcik7XG5cbnZhciBfdGljayA9IHJlcXVpcmUoJy4vdGljaycpO1xuXG52YXIgX3RpY2syID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdGljayk7XG5cbnZhciBfbWFuYWdlciA9IHJlcXVpcmUoJy4vbWFuYWdlcicpO1xuXG52YXIgX21hbmFnZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWFuYWdlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciB0YXNrU3RlcE9yZGVyID0gW3sgbmFtZTogJ29uRnJhbWVTdGFydCcgfSwgeyBuYW1lOiAnb25VcGRhdGUnIH0sIHsgbmFtZTogJ3dpbGxSZW5kZXInLCBkZWNpZGVSZW5kZXI6IHRydWUgfSwgeyBuYW1lOiAnb25QcmVSZW5kZXInLCBpc1JlbmRlcjogdHJ1ZSB9LCB7IG5hbWU6ICdvblJlbmRlcicsIGlzUmVuZGVyOiB0cnVlIH0sIHsgbmFtZTogJ29uUG9zdFJlbmRlcicsIGlzUmVuZGVyOiB0cnVlIH0sIHsgbmFtZTogJ29uRnJhbWVFbmQnIH0sIHsgbmFtZTogJ29uQ2xlYW51cCcgfV07IC8qXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29yZSByZW5kZXIgbG9vcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU29tZSBkZWNpY2lzb25zIGhlcmUgaGF2ZSBiZWVuIHRha2VuIGluIHRoZSBuYW1lIG9mIHBlcmZvcm1hbmNlLiBBbGwgaGFpbCBwZXJmb3JtYW5jZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoSXQgdHVybnMgb3V0IG1pY3Jvb3B0aW1pc2F0aW9ucyBkbyBtYXR0ZXIgd2hlbiB5b3UgaGF2ZSAxNm1zKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cblxudmFyIG51bVRhc2tTdGVwcyA9IHRhc2tTdGVwT3JkZXIubGVuZ3RoO1xuXG4vLyBbYm9vbGVhbl06IElzIGxvb3AgcnVubmluZz9cbnZhciBpc1J1bm5pbmcgPSBmYWxzZTtcblxuLypcbiAgICBbdGltZXN0YW1wXTogRnJhbWUgdGltZXN0YW1wXG4gICAgW2ludF06IFRpbWUgc2luY2UgbGFzdCBmcmFtZVxuKi9cbmZ1bmN0aW9uIGZpcmVBbGwoZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgIHZhciBhY3RpdmVJZHMgPSBfbWFuYWdlcjIuZGVmYXVsdC5nZXRBY3RpdmVJZHMoKTtcbiAgICB2YXIgYWN0aXZlVGFza0NvdW50ID0gYWN0aXZlSWRzLmxlbmd0aDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtVGFza1N0ZXBzOyBpKyspIHtcbiAgICAgICAgdmFyIHN0ZXAgPSB0YXNrU3RlcE9yZGVyW2ldO1xuXG4gICAgICAgIGZvciAodmFyIGkyID0gMDsgaTIgPCBhY3RpdmVUYXNrQ291bnQ7IGkyKyspIHtcbiAgICAgICAgICAgIHZhciB0YXNrID0gX21hbmFnZXIyLmRlZmF1bHQuYWN0aXZlVGFza3NbYWN0aXZlSWRzW2kyXV07XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoaXMgdGFzayBoYXMgdGhpcyBzdGVwLCBvciBpZiBpdCdzIGEgcmVuZGVyIHN0ZXAgdGhhdCB3ZSdyZSByZW5kZXJpbmcgdGhpcyBmcmFtZVxuICAgICAgICAgICAgaWYgKHRhc2sgJiYgdGFza1tzdGVwLm5hbWVdICYmICghc3RlcC5pc1JlbmRlciB8fCBzdGVwLmlzUmVuZGVyICYmIHRhc2suX3JlbmRlclRoaXNGcmFtZSA9PT0gdHJ1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0YXNrW3N0ZXAubmFtZV0uY2FsbCh0YXNrLCB0YXNrLCBmcmFtZVN0YW1wLCBlbGFwc2VkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgdGhpcyBpcyBhIGRlY2lkZSByZW5kZXIgc3RlcCBhbmQgaXQgcmV0dXJucyBgZmFsc2VgLCBzZXQgd2lsbFJlbmRlciB0byBmYWxzZVxuICAgICAgICAgICAgaWYgKHN0ZXAuZGVjaWRlUmVuZGVyKSB7XG4gICAgICAgICAgICAgICAgdGFzay5fcmVuZGVyVGhpc0ZyYW1lID0gdGFza1tzdGVwLm5hbWVdICYmIHJlc3VsdCAhPT0gdHJ1ZSA/IGZhbHNlIDogdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBfbWFuYWdlcjIuZGVmYXVsdC5nZXROb25CYWNrZ3JvdW5kUnVubmluZ0NvdW50KCk7XG59XG5cbi8vIEZ1bmN0aW9uIHRvIGZpcmUgZXZlcnkgZnJhbWVcbmZ1bmN0aW9uIGZyYW1lKGZyYW1lU3RhbXApIHtcbiAgICBfdGltZXIyLmRlZmF1bHQudXBkYXRlKGZyYW1lU3RhbXApO1xuICAgIGlzUnVubmluZyA9IGZpcmVBbGwoZnJhbWVTdGFtcCwgX3RpbWVyMi5kZWZhdWx0LmdldEVsYXBzZWQoKSk7XG5cbiAgICBpZiAoaXNSdW5uaW5nKSB7XG4gICAgICAgICgwLCBfdGljazIuZGVmYXVsdCkoZnJhbWUpO1xuICAgIH1cbn1cblxuLy8gU3RhcnQgbG9vcFxuZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgaWYgKCFpc1J1bm5pbmcpIHtcbiAgICAgICAgX3RpbWVyMi5kZWZhdWx0LnN0YXJ0KCk7XG4gICAgICAgIGlzUnVubmluZyA9IHRydWU7XG4gICAgICAgICgwLCBfdGljazIuZGVmYXVsdCkoZnJhbWUpO1xuICAgIH1cbn1cblxuLy8gRXhwb3J0c1xudmFyIGdldFRhc2tJZCA9IGV4cG9ydHMuZ2V0VGFza0lkID0gX21hbmFnZXIyLmRlZmF1bHQuZ2V0VGFza0lkO1xuXG4vKlxuICAgIFtpbnRdOiB0YXNrIElEIHRvIGFjdGl2YXRlXG4gICAgW3Rhc2tdOiB0YXNrIHRvIGFjdGl2YXRlXG4qL1xuZnVuY3Rpb24gYWN0aXZhdGUoaWQsIHRhc2spIHtcbiAgICBfbWFuYWdlcjIuZGVmYXVsdC5hY3RpdmF0ZShpZCwgdGFzayk7XG5cbiAgICBpZiAoIWlzUnVubmluZykge1xuICAgICAgICBzdGFydCgpO1xuICAgIH1cbn1cblxuLypcbiAgICBbaW50XTogdGFzayBJRCB0byBkZWFjdGl2YXRlXG4qL1xudmFyIGRlYWN0aXZhdGUgPSBleHBvcnRzLmRlYWN0aXZhdGUgPSBfbWFuYWdlcjIuZGVmYXVsdC5kZWFjdGl2YXRlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkwWVhOckwyeHZiM0F1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dFJRV2xHWjBJN096czdPenM3T3pzN096czdPenM3UVVGMlJXaENMRWxCUVUwc1owSkJRV2RDTEVOQlEyeENMRVZCUVVVc1RVRkJUU3hqUVVGT0xFVkJSR2RDTEVWQlJXeENMRVZCUVVVc1RVRkJUU3hWUVVGT0xFVkJSbWRDTEVWQlIyeENMRVZCUVVVc1RVRkJUU3haUVVGT0xFVkJRVzlDTEdOQlFXTXNTVUZCWkN4RlFVaEtMRVZCU1d4Q0xFVkJRVVVzVFVGQlRTeGhRVUZPTEVWQlFYRkNMRlZCUVZVc1NVRkJWaXhGUVVwTUxFVkJTMnhDTEVWQlFVVXNUVUZCVFN4VlFVRk9MRVZCUVd0Q0xGVkJRVlVzU1VGQlZpeEZRVXhHTEVWQlRXeENMRVZCUVVVc1RVRkJUU3hqUVVGT0xFVkJRWE5DTEZWQlFWVXNTVUZCVml4RlFVNU9MRVZCVDJ4Q0xFVkJRVVVzVFVGQlRTeFpRVUZPTEVWQlVHZENMRVZCVVd4Q0xFVkJRVVVzVFVGQlRTeFhRVUZPTEVWQlVtZENMRU5CUVdoQ096czdPenM3TzBGQlZVNHNTVUZCVFN4bFFVRmxMR05CUVdNc1RVRkJaRHM3TzBGQlIzSkNMRWxCUVVrc1dVRkJXU3hMUVVGYU96czdPenM3UVVGTlNpeFRRVUZUTEU5QlFWUXNRMEZCYVVJc1ZVRkJha0lzUlVGQk5rSXNUMEZCTjBJc1JVRkJjME03UVVGRGJFTXNVVUZCVFN4WlFVRlpMR3RDUVVGUkxGbEJRVklzUlVGQldpeERRVVEwUWp0QlFVVnNReXhSUVVGTkxHdENRVUZyUWl4VlFVRlZMRTFCUVZZc1EwRkdWVHM3UVVGSmJFTXNVMEZCU3l4SlFVRkpMRWxCUVVrc1EwRkJTaXhGUVVGUExFbEJRVWtzV1VGQlNpeEZRVUZyUWl4SFFVRnNReXhGUVVGMVF6dEJRVU51UXl4WlFVRk5MRTlCUVU4c1kwRkJZeXhEUVVGa0xFTkJRVkFzUTBGRU5rSTdPMEZCUjI1RExHRkJRVXNzU1VGQlNTeExRVUZMTEVOQlFVd3NSVUZCVVN4TFFVRkxMR1ZCUVV3c1JVRkJjMElzU1VGQmRrTXNSVUZCTmtNN1FVRkRla01zWjBKQlFVMHNUMEZCVHl4clFrRkJVU3hYUVVGU0xFTkJRVzlDTEZWQlFWVXNSVUZCVml4RFFVRndRaXhEUVVGUUxFTkJSRzFETzBGQlJYcERMR2RDUVVGSkxGTkJRVk1zUzBGQlZEczdPMEZCUm5GRExHZENRVXR5UXl4UlFVRlJMRXRCUVVzc1MwRkJTeXhKUVVGTUxFTkJRV0lzUzBGQk5FSXNRMEZCUXl4TFFVRkxMRkZCUVV3c1NVRkJhMElzUzBGQlN5eFJRVUZNTEVsQlFXbENMRXRCUVVzc1owSkJRVXdzUzBGQk1FSXNTVUZCTVVJc1EwRkJhRVVzUlVGQmEwYzdRVUZEYkVjc2VVSkJRVk1zUzBGQlN5eExRVUZMTEVsQlFVd3NRMEZCVEN4RFFVRm5RaXhKUVVGb1FpeERRVUZ4UWl4SlFVRnlRaXhGUVVFeVFpeEpRVUV6UWl4RlFVRnBReXhWUVVGcVF5eEZRVUUyUXl4UFFVRTNReXhEUVVGVUxFTkJSR3RITzJGQlFYUkhPenM3UVVGTWVVTXNaMEpCVlhKRExFdEJRVXNzV1VGQlRDeEZRVUZ0UWp0QlFVTnVRaXh4UWtGQlN5eG5Ra0ZCVEN4SFFVRjNRaXhKUVVGRExFTkJRVXNzUzBGQlN5eEpRVUZNTEVOQlFVd3NTVUZCYlVJc1YwRkJWeXhKUVVGWUxFZEJRVzFDTEV0QlFYWkRMRWRCUVN0RExFbEJRUzlETEVOQlJFdzdZVUZCZGtJN1UwRldTanRMUVVoS096dEJRVzFDUVN4WFFVRlBMR3RDUVVGUkxEUkNRVUZTTEVWQlFWQXNRMEYyUW10RE8wTkJRWFJET3pzN1FVRXlRa0VzVTBGQlV5eExRVUZVTEVOQlFXVXNWVUZCWml4RlFVRXlRanRCUVVOMlFpeHZRa0ZCVFN4TlFVRk9MRU5CUVdFc1ZVRkJZaXhGUVVSMVFqdEJRVVYyUWl4blFrRkJXU3hSUVVGUkxGVkJRVklzUlVGQmIwSXNaMEpCUVUwc1ZVRkJUaXhGUVVGd1FpeERRVUZhTEVOQlJuVkNPenRCUVVsMlFpeFJRVUZKTEZOQlFVb3NSVUZCWlR0QlFVTllMRFJDUVVGTExFdEJRVXdzUlVGRVZ6dExRVUZtTzBOQlNrbzdPenRCUVZWQkxGTkJRVk1zUzBGQlZDeEhRVUZwUWp0QlFVTmlMRkZCUVVrc1EwRkJReXhUUVVGRUxFVkJRVms3UVVGRFdpeDNRa0ZCVFN4TFFVRk9MRWRCUkZrN1FVRkZXaXh2UWtGQldTeEpRVUZhTEVOQlJsazdRVUZIV2l3MFFrRkJTeXhMUVVGTUxFVkJTRms3UzBGQmFFSTdRMEZFU2pzN08wRkJVMDhzU1VGQlRTeG5RMEZCV1N4clFrRkJVU3hUUVVGU096czdPenM3UVVGTmJFSXNVMEZCVXl4UlFVRlVMRU5CUVd0Q0xFVkJRV3hDTEVWQlFYTkNMRWxCUVhSQ0xFVkJRVFJDTzBGQlF5OUNMSE5DUVVGUkxGRkJRVklzUTBGQmFVSXNSVUZCYWtJc1JVRkJjVUlzU1VGQmNrSXNSVUZFSzBJN08wRkJSeTlDTEZGQlFVa3NRMEZCUXl4VFFVRkVMRVZCUVZrN1FVRkRXaXhuUWtGRVdUdExRVUZvUWp0RFFVaEhPenM3T3p0QlFWZEJMRWxCUVUwc2EwTkJRV0VzYTBKQlFWRXNWVUZCVWlJc0ltWnBiR1VpT2lKc2IyOXdMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwTDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk4cVhHNGdJQ0FnUTI5eVpTQnlaVzVrWlhJZ2JHOXZjRnh1WEc0Z0lDQWdVMjl0WlNCa1pXTnBZMmx6YjI1eklHaGxjbVVnYUdGMlpTQmlaV1Z1SUhSaGEyVnVJR2x1SUhSb1pTQnVZVzFsSUc5bUlIQmxjbVp2Y20xaGJtTmxMaUJCYkd3Z2FHRnBiQ0J3WlhKbWIzSnRZVzVqWlM1Y2JpQWdJQ0FvU1hRZ2RIVnlibk1nYjNWMElHMXBZM0p2YjNCMGFXMXBjMkYwYVc5dWN5QmtieUJ0WVhSMFpYSWdkMmhsYmlCNWIzVWdhR0YyWlNBeE5tMXpLVnh1S2k5Y2JtbHRjRzl5ZENCMGFXMWxjaUJtY205dElDY3VMM1JwYldWeUp6dGNibWx0Y0c5eWRDQjBhV05ySUdaeWIyMGdKeTR2ZEdsamF5YzdYRzVwYlhCdmNuUWdiV0Z1WVdkbGNpQm1jbTl0SUNjdUwyMWhibUZuWlhJbk8xeHVYRzVqYjI1emRDQjBZWE5yVTNSbGNFOXlaR1Z5SUQwZ1cxeHVJQ0FnSUhzZ2JtRnRaVG9nSjI5dVJuSmhiV1ZUZEdGeWRDY2dmU3hjYmlBZ0lDQjdJRzVoYldVNklDZHZibFZ3WkdGMFpTY2dmU3hjYmlBZ0lDQjdJRzVoYldVNklDZDNhV3hzVW1WdVpHVnlKeXdnWkdWamFXUmxVbVZ1WkdWeU9pQjBjblZsSUgwc1hHNGdJQ0FnZXlCdVlXMWxPaUFuYjI1UWNtVlNaVzVrWlhJbkxDQnBjMUpsYm1SbGNqb2dkSEoxWlNCOUxGeHVJQ0FnSUhzZ2JtRnRaVG9nSjI5dVVtVnVaR1Z5Snl3Z2FYTlNaVzVrWlhJNklIUnlkV1VnZlN4Y2JpQWdJQ0I3SUc1aGJXVTZJQ2R2YmxCdmMzUlNaVzVrWlhJbkxDQnBjMUpsYm1SbGNqb2dkSEoxWlNCOUxGeHVJQ0FnSUhzZ2JtRnRaVG9nSjI5dVJuSmhiV1ZGYm1RbklIMHNYRzRnSUNBZ2V5QnVZVzFsT2lBbmIyNURiR1ZoYm5Wd0p5QjlYRzVkTzF4dVkyOXVjM1FnYm5WdFZHRnphMU4wWlhCeklEMGdkR0Z6YTFOMFpYQlBjbVJsY2k1c1pXNW5kR2c3WEc1Y2JpOHZJRnRpYjI5c1pXRnVYVG9nU1hNZ2JHOXZjQ0J5ZFc1dWFXNW5QMXh1YkdWMElHbHpVblZ1Ym1sdVp5QTlJR1poYkhObE8xeHVYRzR2S2x4dUlDQWdJRnQwYVcxbGMzUmhiWEJkT2lCR2NtRnRaU0IwYVcxbGMzUmhiWEJjYmlBZ0lDQmJhVzUwWFRvZ1ZHbHRaU0J6YVc1alpTQnNZWE4wSUdaeVlXMWxYRzRxTDF4dVpuVnVZM1JwYjI0Z1ptbHlaVUZzYkNobWNtRnRaVk4wWVcxd0xDQmxiR0Z3YzJWa0tTQjdYRzRnSUNBZ1kyOXVjM1FnWVdOMGFYWmxTV1J6SUQwZ2JXRnVZV2RsY2k1blpYUkJZM1JwZG1WSlpITW9LVHRjYmlBZ0lDQmpiMjV6ZENCaFkzUnBkbVZVWVhOclEyOTFiblFnUFNCaFkzUnBkbVZKWkhNdWJHVnVaM1JvTzF4dVhHNGdJQ0FnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCdWRXMVVZWE5yVTNSbGNITTdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCemRHVndJRDBnZEdGemExTjBaWEJQY21SbGNsdHBYVHRjYmx4dUlDQWdJQ0FnSUNCbWIzSWdLR3hsZENCcE1pQTlJREE3SUdreUlEd2dZV04wYVhabFZHRnphME52ZFc1ME95QnBNaXNyS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQjBZWE5ySUQwZ2JXRnVZV2RsY2k1aFkzUnBkbVZVWVhOcmMxdGhZM1JwZG1WSlpITmJhVEpkWFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJR3hsZENCeVpYTjFiSFFnUFNCbVlXeHpaVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnUTJobFkyc2dhV1lnZEdocGN5QjBZWE5ySUdoaGN5QjBhR2x6SUhOMFpYQXNJRzl5SUdsbUlHbDBKM01nWVNCeVpXNWtaWElnYzNSbGNDQjBhR0YwSUhkbEozSmxJSEpsYm1SbGNtbHVaeUIwYUdseklHWnlZVzFsWEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvZEdGemF5QW1KaUIwWVhOclczTjBaWEF1Ym1GdFpWMGdKaVlnS0NGemRHVndMbWx6VW1WdVpHVnlJSHg4SUNoemRHVndMbWx6VW1WdVpHVnlJQ1ltSUhSaGMyc3VYM0psYm1SbGNsUm9hWE5HY21GdFpTQTlQVDBnZEhKMVpTa3BLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WemRXeDBJRDBnZEdGemExdHpkR1Z3TG01aGJXVmRMbU5oYkd3b2RHRnpheXdnZEdGemF5d2dabkpoYldWVGRHRnRjQ3dnWld4aGNITmxaQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJRWxtSUhSb2FYTWdhWE1nWVNCa1pXTnBaR1VnY21WdVpHVnlJSE4wWlhBZ1lXNWtJR2wwSUhKbGRIVnlibk1nWUdaaGJITmxZQ3dnYzJWMElIZHBiR3hTWlc1a1pYSWdkRzhnWm1Gc2MyVmNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaHpkR1Z3TG1SbFkybGtaVkpsYm1SbGNpa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJoYzJzdVgzSmxibVJsY2xSb2FYTkdjbUZ0WlNBOUlDaDBZWE5yVzNOMFpYQXVibUZ0WlYwZ0ppWWdjbVZ6ZFd4MElDRTlQU0IwY25WbEtTQS9JR1poYkhObElEb2dkSEoxWlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJSEpsZEhWeWJpQnRZVzVoWjJWeUxtZGxkRTV2YmtKaFkydG5jbTkxYm1SU2RXNXVhVzVuUTI5MWJuUW9LVHRjYm4xY2JseHVMeThnUm5WdVkzUnBiMjRnZEc4Z1ptbHlaU0JsZG1WeWVTQm1jbUZ0WlZ4dVpuVnVZM1JwYjI0Z1puSmhiV1VvWm5KaGJXVlRkR0Z0Y0NrZ2UxeHVJQ0FnSUhScGJXVnlMblZ3WkdGMFpTaG1jbUZ0WlZOMFlXMXdLVHRjYmlBZ0lDQnBjMUoxYm01cGJtY2dQU0JtYVhKbFFXeHNLR1p5WVcxbFUzUmhiWEFzSUhScGJXVnlMbWRsZEVWc1lYQnpaV1FvS1NrN1hHNWNiaUFnSUNCcFppQW9hWE5TZFc1dWFXNW5LU0I3WEc0Z0lDQWdJQ0FnSUhScFkyc29abkpoYldVcE8xeHVJQ0FnSUgxY2JuMWNibHh1THk4Z1UzUmhjblFnYkc5dmNGeHVablZ1WTNScGIyNGdjM1JoY25Rb0tTQjdYRzRnSUNBZ2FXWWdLQ0ZwYzFKMWJtNXBibWNwSUh0Y2JpQWdJQ0FnSUNBZ2RHbHRaWEl1YzNSaGNuUW9LVHRjYmlBZ0lDQWdJQ0FnYVhOU2RXNXVhVzVuSUQwZ2RISjFaVHRjYmlBZ0lDQWdJQ0FnZEdsamF5aG1jbUZ0WlNrN1hHNGdJQ0FnZlZ4dWZWeHVYRzR2THlCRmVIQnZjblJ6WEc1bGVIQnZjblFnWTI5dWMzUWdaMlYwVkdGemEwbGtJRDBnYldGdVlXZGxjaTVuWlhSVVlYTnJTV1E3WEc1Y2JpOHFYRzRnSUNBZ1cybHVkRjA2SUhSaGMyc2dTVVFnZEc4Z1lXTjBhWFpoZEdWY2JpQWdJQ0JiZEdGemExMDZJSFJoYzJzZ2RHOGdZV04wYVhaaGRHVmNiaW92WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnWVdOMGFYWmhkR1VvYVdRc0lIUmhjMnNwSUh0Y2JpQWdJQ0J0WVc1aFoyVnlMbUZqZEdsMllYUmxLR2xrTENCMFlYTnJLVHRjYmx4dUlDQWdJR2xtSUNnaGFYTlNkVzV1YVc1bktTQjdYRzRnSUNBZ0lDQWdJSE4wWVhKMEtDazdYRzRnSUNBZ2ZWeHVmVnh1WEc0dktseHVJQ0FnSUZ0cGJuUmRPaUIwWVhOcklFbEVJSFJ2SUdSbFlXTjBhWFpoZEdWY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ1pHVmhZM1JwZG1GMFpTQTlJRzFoYm1GblpYSXVaR1ZoWTNScGRtRjBaVHNpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdGFzay9sb29wLmpzXG4gKiogbW9kdWxlIGlkID0gMzhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi4vLi4vaW5jL2NhbGMnKTtcblxudmFyIEJMRU5EX0FDQ1VSQUNZID0gMTA7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvdXRBY3Rpb24sIGluQWN0aW9uLCBrZXkpIHtcbiAgICB2YXIgb3V0VmFsdWUgPSBvdXRBY3Rpb24udmFsdWVzW2tleV07XG5cbiAgICBpZiAob3V0QWN0aW9uLmVsYXBzZWQgPT09IHVuZGVmaW5lZCB8fCAhb3V0VmFsdWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBpblZhbHVlID0gaW5BY3Rpb24udmFsdWVzW2tleV07XG4gICAgdmFyIG91dFRvdGFsRHVyYXRpb24gPSBvdXRWYWx1ZS5kZWxheSArIG91dFZhbHVlLmR1cmF0aW9uO1xuICAgIHZhciB0aW1lVW50aWxPdXRFbmQgPSBvdXRUb3RhbER1cmF0aW9uIC0gb3V0QWN0aW9uLmVsYXBzZWQ7XG4gICAgdmFyIGluUG9zaXRpb25BdE91dEVuZCA9ICgwLCBfY2FsYy5lYXNlKSgoMCwgX2NhbGMucmVzdHJpY3QpKCgwLCBfY2FsYy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSkodGltZVVudGlsT3V0RW5kLCAwLCBpblZhbHVlLmRlbGF5ICsgaW5WYWx1ZS5kdXJhdGlvbiksIDAsIDEpLCBpblZhbHVlLmZyb20sIGluVmFsdWUudG8sIGluVmFsdWUuZWFzZSk7XG4gICAgdmFyIGluQmlnZ2VyVGhhbk91dEF0U3RhcnQgPSBpblZhbHVlLmZyb20gPiBvdXRWYWx1ZS5jdXJyZW50O1xuICAgIHZhciBpbkJpZ2dlclRoYW5PdXRBdEVuZCA9IGluUG9zaXRpb25BdE91dEVuZCA+IG91dFZhbHVlLnRvO1xuICAgIHZhciB0d2VlbnNJbnRlcnNlY3QgPSBpbkJpZ2dlclRoYW5PdXRBdFN0YXJ0ICE9PSBpbkJpZ2dlclRoYW5PdXRBdEVuZDtcblxuICAgIHZhciBibGVuZEN1cnZlID0gW1swLCBvdXRWYWx1ZS5jdXJyZW50XSwgW3RpbWVVbnRpbE91dEVuZCwgaW5Qb3NpdGlvbkF0T3V0RW5kXV07XG5cbiAgICAvLyBJZiB0d2VlbnMgaW50ZXJzZWN0LCByZXNvbHZlIHR3ZWVucyBhdCBhIHJlc29sdXRpb24gdG8gZmluZCBleGFjdGx5IHdoZXJlXG4gICAgaWYgKHR3ZWVuc0ludGVyc2VjdCkge1xuICAgICAgICB2YXIgdGltZVN0ZXBUb1Rlc3QgPSB0aW1lVW50aWxPdXRFbmQgLyBCTEVORF9BQ0NVUkFDWTtcbiAgICAgICAgdmFyIGZvdW5kUDEgPSBmYWxzZTtcbiAgICAgICAgdmFyIGZvdW5kUDIgPSBmYWxzZTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8PSBCTEVORF9BQ0NVUkFDWTsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdGltZVN0ZXAgPSBpICogdGltZVN0ZXBUb1Rlc3Q7XG4gICAgICAgICAgICB2YXIgb3V0QXRUaW1lID0gKDAsIF9jYWxjLmVhc2UpKCgwLCBfY2FsYy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSkob3V0QWN0aW9uLmVsYXBzZWQgKyB0aW1lU3RlcCwgb3V0VmFsdWUuZGVsYXksIG91dFZhbHVlLmR1cmF0aW9uKSwgb3V0VmFsdWUuZnJvbSwgb3V0VmFsdWUudG8sIG91dFZhbHVlLmVhc2UpO1xuICAgICAgICAgICAgdmFyIGluQXRUaW1lID0gKDAsIF9jYWxjLmVhc2UpKCgwLCBfY2FsYy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSkoaW5BY3Rpb24uZWxhcHNlZCArIHRpbWVTdGVwLCBpblZhbHVlLmRlbGF5LCBpblZhbHVlLmR1cmF0aW9uKSwgaW5WYWx1ZS5mcm9tLCBpblZhbHVlLnRvLCBpblZhbHVlLmVhc2UpO1xuXG4gICAgICAgICAgICBpZiAoIWZvdW5kUDEgJiYgKGluQmlnZ2VyVGhhbk91dEF0U3RhcnQgJiYgaW5BdFRpbWUgPCBvdXRBdFRpbWUgfHwgIWluQmlnZ2VyVGhhbk91dEF0U3RhcnQgJiYgaW5BdFRpbWUgPiBvdXRBdFRpbWUpKSB7XG4gICAgICAgICAgICAgICAgYmxlbmRDdXJ2ZS5zcGxpY2UoMSwgMCwgW3RpbWVTdGVwLCBpbkF0VGltZV0pO1xuICAgICAgICAgICAgICAgIGZvdW5kUDEgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZm91bmRQMSAmJiAoaW5CaWdnZXJUaGFuT3V0QXRTdGFydCAmJiBpbkF0VGltZSA8IG91dFZhbHVlLmN1cnJlbnQgfHwgIWluQmlnZ2VyVGhhbk91dEF0U3RhcnQgJiYgaW5BdFRpbWUgPiBvdXRWYWx1ZS5jdXJyZW50KSkge1xuICAgICAgICAgICAgICAgIGJsZW5kQ3VydmVbMl0gPSBbdGltZVN0ZXAsIGluQXRUaW1lXTtcbiAgICAgICAgICAgICAgICBmb3VuZFAyID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGZvdW5kUDIpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChibGVuZEN1cnZlLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAvLyBQYXNzIGJldHdlZW4gdHdlZW5zIHVzaW5nIGluY29taW5nIGVhc2luZyBpZiBqdXN0IHR3byBwb2ludHNcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBibGVuZFByb2dyZXNzID0gKDAsIF9jYWxjLnJlc3RyaWN0KSgoMCwgX2NhbGMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUpKGluQWN0aW9uLmVsYXBzZWQsIGJsZW5kQ3VydmVbMF1bMF0sIGJsZW5kQ3VydmVbMV1bMF0pLCAwLCAxKTtcblxuICAgICAgICAgICAgaWYgKGJsZW5kUHJvZ3Jlc3MgPT09IDEpIHtcbiAgICAgICAgICAgICAgICBpbkFjdGlvbi5ibGVuZEN1cnZlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gKDAsIF9jYWxjLmVhc2UpKGJsZW5kUHJvZ3Jlc3MsIG91dFZhbHVlLmN1cnJlbnQsIGluVmFsdWUuY3VycmVudCwgaW5WYWx1ZS5lYXNlKTtcbiAgICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBQYXNzIGJldHdlZW4gdHdlZW5zIHVzaW5nIGJlemllciBpbnRlcnBvbGF0aW9uXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYmxlbmRQcm9ncmVzcyA9ICgwLCBfY2FsYy5yZXN0cmljdCkoKDAsIF9jYWxjLmdldFByb2dyZXNzRnJvbVZhbHVlKShpbkFjdGlvbi5lbGFwc2VkLCBibGVuZEN1cnZlWzBdWzBdLCBibGVuZEN1cnZlWzJdWzBdKSwgMCwgMSk7XG4gICAgICAgICAgICB2YXIgYVAgPSAoMCwgX2NhbGMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MpKGJsZW5kUHJvZ3Jlc3MsIGJsZW5kQ3VydmVbMF1bMV0sIGJsZW5kQ3VydmVbMV1bMV0pO1xuICAgICAgICAgICAgdmFyIGJQID0gKDAsIF9jYWxjLmdldFZhbHVlRnJvbVByb2dyZXNzKShibGVuZFByb2dyZXNzLCBibGVuZEN1cnZlWzFdWzFdLCBibGVuZEN1cnZlWzJdWzFdKTtcblxuICAgICAgICAgICAgaWYgKGJsZW5kUHJvZ3Jlc3MgPT09IDEpIHtcbiAgICAgICAgICAgICAgICBpbkFjdGlvbi5ibGVuZEN1cnZlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHJldHVybiBpblZhbHVlLmN1cnJlbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiAoMCwgX2NhbGMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MpKGJsZW5kUHJvZ3Jlc3MsIGFQLCBiUCk7XG4gICAgICAgIH07XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDJac2IzY3ZaMlZ1WlhKaGRHVXRZbXhsYm1RdFkzVnlkbVV1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPMEZCUlVFc1NVRkJUU3hwUWtGQmFVSXNSVUZCYWtJN08ydENRVVZUTEZWQlFVTXNVMEZCUkN4RlFVRlpMRkZCUVZvc1JVRkJjMElzUjBGQmRFSXNSVUZCT0VJN1FVRkRla01zVVVGQlRTeFhRVUZYTEZWQlFWVXNUVUZCVml4RFFVRnBRaXhIUVVGcVFpeERRVUZZTEVOQlJHMURPenRCUVVkNlF5eFJRVUZKTEZWQlFWVXNUMEZCVml4TFFVRnpRaXhUUVVGMFFpeEpRVUZ0UXl4RFFVRkRMRkZCUVVRc1JVRkJWenRCUVVNNVF5eGxRVVE0UXp0TFFVRnNSRHM3UVVGSlFTeFJRVUZOTEZWQlFWVXNVMEZCVXl4TlFVRlVMRU5CUVdkQ0xFZEJRV2hDTEVOQlFWWXNRMEZRYlVNN1FVRlJla01zVVVGQlRTeHRRa0ZCYlVJc1UwRkJVeXhMUVVGVUxFZEJRV2xDTEZOQlFWTXNVVUZCVkN4RFFWSkVPMEZCVTNwRExGRkJRVTBzYTBKQlFXdENMRzFDUVVGdFFpeFZRVUZWTEU5QlFWWXNRMEZVUmp0QlFWVjZReXhSUVVGTkxIRkNRVUZ4UWl4blFrRkJTeXh2UWtGQlV5eG5RMEZCY1VJc1pVRkJja0lzUlVGQmMwTXNRMEZCZEVNc1JVRkJlVU1zVVVGQlVTeExRVUZTTEVkQlFXZENMRkZCUVZFc1VVRkJVaXhEUVVGc1JTeEZRVUZ4Uml4RFFVRnlSaXhGUVVGM1JpeERRVUY0Uml4RFFVRk1MRVZCUVdsSExGRkJRVkVzU1VGQlVpeEZRVUZqTEZGQlFWRXNSVUZCVWl4RlFVRlpMRkZCUVZFc1NVRkJVaXhEUVVGb1NpeERRVlp0UXp0QlFWZDZReXhSUVVGTkxIbENRVUY1UWl4UlFVRlJMRWxCUVZJc1IwRkJaU3hUUVVGVExFOUJRVlFzUTBGWVREdEJRVmw2UXl4UlFVRk5MSFZDUVVGMVFpeHhRa0ZCY1VJc1UwRkJVeXhGUVVGVUxFTkJXbFE3UVVGaGVrTXNVVUZCVFN4clFrRkJhMElzTWtKQlFUSkNMRzlDUVVFelFpeERRV0pwUWpzN1FVRmxla01zVVVGQlRTeGhRVUZoTEVOQlFVTXNRMEZCUXl4RFFVRkVMRVZCUVVrc1UwRkJVeXhQUVVGVUxFTkJRVXdzUlVGQmQwSXNRMEZCUXl4bFFVRkVMRVZCUVd0Q0xHdENRVUZzUWl4RFFVRjRRaXhEUVVGaU96czdRVUZtYlVNc1VVRnJRbkpETEdWQlFVb3NSVUZCY1VJN1FVRkRha0lzV1VGQlRTeHBRa0ZCYVVJc2EwSkJRV3RDTEdOQlFXeENMRU5CUkU0N1FVRkZha0lzV1VGQlNTeFZRVUZWTEV0QlFWWXNRMEZHWVR0QlFVZHFRaXhaUVVGSkxGVkJRVlVzUzBGQlZpeERRVWhoT3p0QlFVdHFRaXhoUVVGTExFbEJRVWtzU1VGQlNTeERRVUZLTEVWQlFVOHNTMEZCU3l4alFVRk1MRVZCUVhGQ0xFZEJRWEpETEVWQlFUQkRPMEZCUTNSRExHZENRVUZOTEZkQlFWY3NTVUZCU1N4alFVRktMRU5CUkhGQ08wRkJSWFJETEdkQ1FVRk5MRmxCUVZrc1owSkJRVXNzWjBOQlFYRkNMRlZCUVZVc1QwRkJWaXhIUVVGdlFpeFJRVUZ3UWl4RlFVRTRRaXhUUVVGVExFdEJRVlFzUlVGQlowSXNVMEZCVXl4UlFVRlVMRU5CUVhoRkxFVkJRVFJHTEZOQlFWTXNTVUZCVkN4RlFVRmxMRk5CUVZNc1JVRkJWQ3hGUVVGaExGTkJRVk1zU1VGQlZDeERRVUZ3U1N4RFFVWm5RenRCUVVkMFF5eG5Ra0ZCVFN4WFFVRlhMR2RDUVVGTExHZERRVUZ4UWl4VFFVRlRMRTlCUVZRc1IwRkJiVUlzVVVGQmJrSXNSVUZCTmtJc1VVRkJVU3hMUVVGU0xFVkJRV1VzVVVGQlVTeFJRVUZTTEVOQlFYUkZMRVZCUVhsR0xGRkJRVkVzU1VGQlVpeEZRVUZqTEZGQlFWRXNSVUZCVWl4RlFVRlpMRkZCUVZFc1NVRkJVaXhEUVVFNVNDeERRVWhuUXpzN1FVRkxkRU1zWjBKQlFVa3NRMEZCUXl4UFFVRkVMRXRCUVdFc2MwSkJRVU1zU1VGQk1FSXNWMEZCVnl4VFFVRllMRWxCUVRCQ0xFTkJRVU1zYzBKQlFVUXNTVUZCTWtJc1YwRkJWeXhUUVVGWUxFTkJRVGRHTEVWQlFYRklPMEZCUTNKSUxESkNRVUZYTEUxQlFWZ3NRMEZCYTBJc1EwRkJiRUlzUlVGQmNVSXNRMEZCY2tJc1JVRkJkMElzUTBGQlF5eFJRVUZFTEVWQlFWY3NVVUZCV0N4RFFVRjRRaXhGUVVSeFNEdEJRVVZ5U0N3d1FrRkJWU3hKUVVGV0xFTkJSbkZJTzJGQlFYcElPenRCUVV0QkxHZENRVUZKTEZsQlFWa3NjMEpCUVVNc1NVRkJNRUlzVjBGQlZ5eFRRVUZUTEU5QlFWUXNTVUZCYzBJc1EwRkJReXh6UWtGQlJDeEpRVUV5UWl4WFFVRlhMRk5CUVZNc1QwRkJWQ3hEUVVFNVJ5eEZRVUZyU1R0QlFVTnNTU3d5UWtGQlZ5eERRVUZZTEVsQlFXZENMRU5CUVVNc1VVRkJSQ3hGUVVGWExGRkJRVmdzUTBGQmFFSXNRMEZFYTBrN1FVRkZiRWtzTUVKQlFWVXNTVUZCVml4RFFVWnJTVHRoUVVGMFNUczdRVUZMUVN4blFrRkJTU3hQUVVGS0xFVkJRV0U3UVVGRFZDeHpRa0ZFVXp0aFFVRmlPMU5CWmtvN1MwRk1TanM3UVVFd1FrRXNVVUZCU1N4WFFVRlhMRTFCUVZnc1MwRkJjMElzUTBGQmRFSXNSVUZCZVVJN08wRkJSWHBDTEdWQlFVOHNXVUZCVFR0QlFVTlVMR2RDUVVGTkxHZENRVUZuUWl4dlFrRkJVeXhuUTBGQmNVSXNVMEZCVXl4UFFVRlVMRVZCUVd0Q0xGZEJRVmNzUTBGQldDeEZRVUZqTEVOQlFXUXNRMEZCZGtNc1JVRkJlVVFzVjBGQlZ5eERRVUZZTEVWQlFXTXNRMEZCWkN4RFFVRjZSQ3hEUVVGVUxFVkJRWEZHTEVOQlFYSkdMRVZCUVhkR0xFTkJRWGhHTEVOQlFXaENMRU5CUkVjN08wRkJSMVFzWjBKQlFVa3NhMEpCUVd0Q0xFTkJRV3hDTEVWQlFYRkNPMEZCUTNKQ0xIbENRVUZUTEZWQlFWUXNSMEZCYzBJc1UwRkJkRUlzUTBGRWNVSTdZVUZCZWtJN08wRkJTVUVzYlVKQlFVOHNaMEpCUVVzc1lVRkJUQ3hGUVVGdlFpeFRRVUZUTEU5QlFWUXNSVUZCYTBJc1VVRkJVU3hQUVVGU0xFVkJRV2xDTEZGQlFWRXNTVUZCVWl4RFFVRTVSQ3hEUVZCVE8xTkJRVTRzUTBGR2EwSTdTMEZCTjBJc1RVRlhUenM3UVVGRlNDeGxRVUZQTEZsQlFVMDdRVUZEVkN4blFrRkJUU3huUWtGQlowSXNiMEpCUVZNc1owTkJRWEZDTEZOQlFWTXNUMEZCVkN4RlFVRnJRaXhYUVVGWExFTkJRVmdzUlVGQll5eERRVUZrTEVOQlFYWkRMRVZCUVhsRUxGZEJRVmNzUTBGQldDeEZRVUZqTEVOQlFXUXNRMEZCZWtRc1EwRkJWQ3hGUVVGeFJpeERRVUZ5Uml4RlFVRjNSaXhEUVVGNFJpeERRVUZvUWl4RFFVUkhPMEZCUlZRc1owSkJRVTBzUzBGQlN5eG5RMEZCY1VJc1lVRkJja0lzUlVGQmIwTXNWMEZCVnl4RFFVRllMRVZCUVdNc1EwRkJaQ3hEUVVGd1F5eEZRVUZ6UkN4WFFVRlhMRU5CUVZnc1JVRkJZeXhEUVVGa0xFTkJRWFJFTEVOQlFVd3NRMEZHUnp0QlFVZFVMR2RDUVVGTkxFdEJRVXNzWjBOQlFYRkNMR0ZCUVhKQ0xFVkJRVzlETEZkQlFWY3NRMEZCV0N4RlFVRmpMRU5CUVdRc1EwRkJjRU1zUlVGQmMwUXNWMEZCVnl4RFFVRllMRVZCUVdNc1EwRkJaQ3hEUVVGMFJDeERRVUZNTEVOQlNFYzdPMEZCUzFRc1owSkJRVWtzYTBKQlFXdENMRU5CUVd4Q0xFVkJRWEZDTzBGQlEzSkNMSGxDUVVGVExGVkJRVlFzUjBGQmMwSXNVMEZCZEVJc1EwRkVjVUk3UVVGRmNrSXNkVUpCUVU4c1VVRkJVU3hQUVVGU0xFTkJSbU03WVVGQmVrSTdPMEZCUzBFc2JVSkJRVThzWjBOQlFYRkNMR0ZCUVhKQ0xFVkJRVzlETEVWQlFYQkRMRVZCUVhkRExFVkJRWGhETEVOQlFWQXNRMEZXVXp0VFFVRk9MRU5CUmtvN1MwRllVRHREUVRWRFZ5SXNJbVpwYkdVaU9pSm5aVzVsY21GMFpTMWliR1Z1WkMxamRYSjJaUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZXlCblpYUlFjbTluY21WemMwWnliMjFXWVd4MVpTd2daMlYwVm1Gc2RXVkdjbTl0VUhKdlozSmxjM01zSUdWaGMyVXNJSEpsYzNSeWFXTjBJSDBnWm5KdmJTQW5MaTR2TGk0dmFXNWpMMk5oYkdNbk8xeHVYRzVqYjI1emRDQkNURVZPUkY5QlEwTlZVa0ZEV1NBOUlERXdPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0FvYjNWMFFXTjBhVzl1TENCcGJrRmpkR2x2Yml3Z2EyVjVLU0E5UGlCN1hHNGdJQ0FnWTI5dWMzUWdiM1YwVm1Gc2RXVWdQU0J2ZFhSQlkzUnBiMjR1ZG1Gc2RXVnpXMnRsZVYwN1hHNWNiaUFnSUNCcFppQW9iM1YwUVdOMGFXOXVMbVZzWVhCelpXUWdQVDA5SUhWdVpHVm1hVzVsWkNCOGZDQWhiM1YwVm1Gc2RXVXBJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHTnZibk4wSUdsdVZtRnNkV1VnUFNCcGJrRmpkR2x2Ymk1MllXeDFaWE5iYTJWNVhUdGNiaUFnSUNCamIyNXpkQ0J2ZFhSVWIzUmhiRVIxY21GMGFXOXVJRDBnYjNWMFZtRnNkV1V1WkdWc1lYa2dLeUJ2ZFhSV1lXeDFaUzVrZFhKaGRHbHZianRjYmlBZ0lDQmpiMjV6ZENCMGFXMWxWVzUwYVd4UGRYUkZibVFnUFNCdmRYUlViM1JoYkVSMWNtRjBhVzl1SUMwZ2IzVjBRV04wYVc5dUxtVnNZWEJ6WldRN1hHNGdJQ0FnWTI5dWMzUWdhVzVRYjNOcGRHbHZia0YwVDNWMFJXNWtJRDBnWldGelpTaHlaWE4wY21samRDaG5aWFJRY205bmNtVnpjMFp5YjIxV1lXeDFaU2gwYVcxbFZXNTBhV3hQZFhSRmJtUXNJREFzSUdsdVZtRnNkV1V1WkdWc1lYa2dLeUJwYmxaaGJIVmxMbVIxY21GMGFXOXVLU3dnTUN3Z01Ta3NJR2x1Vm1Gc2RXVXVabkp2YlN3Z2FXNVdZV3gxWlM1MGJ5d2dhVzVXWVd4MVpTNWxZWE5sS1R0Y2JpQWdJQ0JqYjI1emRDQnBia0pwWjJkbGNsUm9ZVzVQZFhSQmRGTjBZWEowSUQwZ2FXNVdZV3gxWlM1bWNtOXRJRDRnYjNWMFZtRnNkV1V1WTNWeWNtVnVkRHRjYmlBZ0lDQmpiMjV6ZENCcGJrSnBaMmRsY2xSb1lXNVBkWFJCZEVWdVpDQTlJR2x1VUc5emFYUnBiMjVCZEU5MWRFVnVaQ0ErSUc5MWRGWmhiSFZsTG5Sdk8xeHVJQ0FnSUdOdmJuTjBJSFIzWldWdWMwbHVkR1Z5YzJWamRDQTlJR2x1UW1sbloyVnlWR2hoYms5MWRFRjBVM1JoY25RZ0lUMDlJR2x1UW1sbloyVnlWR2hoYms5MWRFRjBSVzVrTzF4dVhHNGdJQ0FnWTI5dWMzUWdZbXhsYm1SRGRYSjJaU0E5SUZ0Yk1Dd2diM1YwVm1Gc2RXVXVZM1Z5Y21WdWRGMHNJRnQwYVcxbFZXNTBhV3hQZFhSRmJtUXNJR2x1VUc5emFYUnBiMjVCZEU5MWRFVnVaRjFkTzF4dVhHNGdJQ0FnTHk4Z1NXWWdkSGRsWlc1eklHbHVkR1Z5YzJWamRDd2djbVZ6YjJ4MlpTQjBkMlZsYm5NZ1lYUWdZU0J5WlhOdmJIVjBhVzl1SUhSdklHWnBibVFnWlhoaFkzUnNlU0IzYUdWeVpWeHVJQ0FnSUdsbUlDaDBkMlZsYm5OSmJuUmxjbk5sWTNRcElIdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2RHbHRaVk4wWlhCVWIxUmxjM1FnUFNCMGFXMWxWVzUwYVd4UGRYUkZibVFnTHlCQ1RFVk9SRjlCUTBOVlVrRkRXVHRjYmlBZ0lDQWdJQ0FnYkdWMElHWnZkVzVrVURFZ1BTQm1ZV3h6WlR0Y2JpQWdJQ0FnSUNBZ2JHVjBJR1p2ZFc1a1VESWdQU0JtWVd4elpUdGNibHh1SUNBZ0lDQWdJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4UFNCQ1RFVk9SRjlCUTBOVlVrRkRXVHNnYVNzcktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0IwYVcxbFUzUmxjQ0E5SUdrZ0tpQjBhVzFsVTNSbGNGUnZWR1Z6ZER0Y2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElHOTFkRUYwVkdsdFpTQTlJR1ZoYzJVb1oyVjBVSEp2WjNKbGMzTkdjbTl0Vm1Gc2RXVW9iM1YwUVdOMGFXOXVMbVZzWVhCelpXUWdLeUIwYVcxbFUzUmxjQ3dnYjNWMFZtRnNkV1V1WkdWc1lYa3NJRzkxZEZaaGJIVmxMbVIxY21GMGFXOXVLU3dnYjNWMFZtRnNkV1V1Wm5KdmJTd2diM1YwVm1Gc2RXVXVkRzhzSUc5MWRGWmhiSFZsTG1WaGMyVXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnYVc1QmRGUnBiV1VnUFNCbFlYTmxLR2RsZEZCeWIyZHlaWE56Um5KdmJWWmhiSFZsS0dsdVFXTjBhVzl1TG1Wc1lYQnpaV1FnS3lCMGFXMWxVM1JsY0N3Z2FXNVdZV3gxWlM1a1pXeGhlU3dnYVc1V1lXeDFaUzVrZFhKaGRHbHZiaWtzSUdsdVZtRnNkV1V1Wm5KdmJTd2dhVzVXWVd4MVpTNTBieXdnYVc1V1lXeDFaUzVsWVhObEtUdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLQ0ZtYjNWdVpGQXhJQ1ltSUNnb2FXNUNhV2RuWlhKVWFHRnVUM1YwUVhSVGRHRnlkQ0FtSmlCcGJrRjBWR2x0WlNBOElHOTFkRUYwVkdsdFpTa2dmSHdnS0NGcGJrSnBaMmRsY2xSb1lXNVBkWFJCZEZOMFlYSjBJQ1ltSUdsdVFYUlVhVzFsSUQ0Z2IzVjBRWFJVYVcxbEtTa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JpYkdWdVpFTjFjblpsTG5Od2JHbGpaU2d4TENBd0xDQmJkR2x0WlZOMFpYQXNJR2x1UVhSVWFXMWxYU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWm05MWJtUlFNU0E5SUhSeWRXVTdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaG1iM1Z1WkZBeElDWW1JQ2dvYVc1Q2FXZG5aWEpVYUdGdVQzVjBRWFJUZEdGeWRDQW1KaUJwYmtGMFZHbHRaU0E4SUc5MWRGWmhiSFZsTG1OMWNuSmxiblFwSUh4OElDZ2hhVzVDYVdkblpYSlVhR0Z1VDNWMFFYUlRkR0Z5ZENBbUppQnBia0YwVkdsdFpTQStJRzkxZEZaaGJIVmxMbU4xY25KbGJuUXBLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdKc1pXNWtRM1Z5ZG1WYk1sMGdQU0JiZEdsdFpWTjBaWEFzSUdsdVFYUlVhVzFsWFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCbWIzVnVaRkF5SUQwZ2RISjFaVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLR1p2ZFc1a1VESXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JpY21WaGF6dGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JseHVJQ0FnSUdsbUlDaGliR1Z1WkVOMWNuWmxMbXhsYm1kMGFDQTlQVDBnTWlrZ2UxeHVJQ0FnSUNBZ0lDQXZMeUJRWVhOeklHSmxkSGRsWlc0Z2RIZGxaVzV6SUhWemFXNW5JR2x1WTI5dGFXNW5JR1ZoYzJsdVp5QnBaaUJxZFhOMElIUjNieUJ3YjJsdWRITmNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlDZ3BJRDArSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElHSnNaVzVrVUhKdlozSmxjM01nUFNCeVpYTjBjbWxqZENoblpYUlFjbTluY21WemMwWnliMjFXWVd4MVpTaHBia0ZqZEdsdmJpNWxiR0Z3YzJWa0xDQmliR1Z1WkVOMWNuWmxXekJkV3pCZExDQmliR1Z1WkVOMWNuWmxXekZkV3pCZEtTd2dNQ3dnTVNrN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaGliR1Z1WkZCeWIyZHlaWE56SUQwOVBTQXhLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVc1QlkzUnBiMjR1WW14bGJtUkRkWEoyWlNBOUlIVnVaR1ZtYVc1bFpEdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJR1ZoYzJVb1lteGxibVJRY205bmNtVnpjeXdnYjNWMFZtRnNkV1V1WTNWeWNtVnVkQ3dnYVc1V1lXeDFaUzVqZFhKeVpXNTBMQ0JwYmxaaGJIVmxMbVZoYzJVcE8xeHVJQ0FnSUNBZ0lDQjlPMXh1SUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDOHZJRkJoYzNNZ1ltVjBkMlZsYmlCMGQyVmxibk1nZFhOcGJtY2dZbVY2YVdWeUlHbHVkR1Z5Y0c5c1lYUnBiMjVjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJQ2dwSUQwK0lIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJR0pzWlc1a1VISnZaM0psYzNNZ1BTQnlaWE4wY21samRDaG5aWFJRY205bmNtVnpjMFp5YjIxV1lXeDFaU2hwYmtGamRHbHZiaTVsYkdGd2MyVmtMQ0JpYkdWdVpFTjFjblpsV3pCZFd6QmRMQ0JpYkdWdVpFTjFjblpsV3pKZFd6QmRLU3dnTUN3Z01TazdYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0JoVUNBOUlHZGxkRlpoYkhWbFJuSnZiVkJ5YjJkeVpYTnpLR0pzWlc1a1VISnZaM0psYzNNc0lHSnNaVzVrUTNWeWRtVmJNRjFiTVYwc0lHSnNaVzVrUTNWeWRtVmJNVjFiTVYwcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdZbEFnUFNCblpYUldZV3gxWlVaeWIyMVFjbTluY21WemN5aGliR1Z1WkZCeWIyZHlaWE56TENCaWJHVnVaRU4xY25abFd6RmRXekZkTENCaWJHVnVaRU4xY25abFd6SmRXekZkS1R0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHSnNaVzVrVUhKdlozSmxjM01nUFQwOUlERXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwYmtGamRHbHZiaTVpYkdWdVpFTjFjblpsSUQwZ2RXNWtaV1pwYm1Wa08xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCcGJsWmhiSFZsTG1OMWNuSmxiblE3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCblpYUldZV3gxWlVaeWIyMVFjbTluY21WemN5aGliR1Z1WkZCeWIyZHlaWE56TENCaFVDd2dZbEFwTzF4dUlDQWdJQ0FnSUNCOU8xeHVJQ0FnSUgxY2JuMDdYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9mbG93L2dlbmVyYXRlLWJsZW5kLWN1cnZlLmpzXG4gKiogbW9kdWxlIGlkID0gMzlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9hZGFwdGVyID0gcmVxdWlyZSgnLi4vYWRhcHRlci9hZGFwdGVyJyk7XG5cbnZhciBfYWRhcHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hZGFwdGVyKTtcblxudmFyIF9jc3NBZGFwdGVyID0gcmVxdWlyZSgnLi4vYWRhcHRlci9jc3MtYWRhcHRlcicpO1xuXG52YXIgX2Nzc0FkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3NzQWRhcHRlcik7XG5cbnZhciBfc3ZnQWRhcHRlciA9IHJlcXVpcmUoJy4uL2FkYXB0ZXIvc3ZnLWFkYXB0ZXInKTtcblxudmFyIF9zdmdBZGFwdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N2Z0FkYXB0ZXIpO1xuXG52YXIgX3N2Z1BhdGhBZGFwdGVyID0gcmVxdWlyZSgnLi4vYWRhcHRlci9zdmctcGF0aC1hZGFwdGVyJyk7XG5cbnZhciBfc3ZnUGF0aEFkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ZnUGF0aEFkYXB0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIHZhciBkZXRlY3RlZEFkYXB0ZXIgPSBfYWRhcHRlcjIuZGVmYXVsdDtcblxuICAgIC8vIElmIEhUTUxFbGVtZW50IGxvYWQgQ1NTXG4gICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBlbGVtZW50LnRhZ05hbWUgPT09ICdzdmcnKSB7XG4gICAgICAgIGRldGVjdGVkQWRhcHRlciA9IF9jc3NBZGFwdGVyMi5kZWZhdWx0O1xuXG4gICAgICAgIC8vIE9yIFNWR1xuICAgIH0gZWxzZSBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIFNWR0VsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50LnRhZ05hbWUgPT09ICdwYXRoJykge1xuICAgICAgICAgICAgICAgIGRldGVjdGVkQWRhcHRlciA9IF9zdmdQYXRoQWRhcHRlcjIuZGVmYXVsdDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGV0ZWN0ZWRBZGFwdGVyID0gX3N2Z0FkYXB0ZXIyLmRlZmF1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIHJldHVybiBkZXRlY3RlZEFkYXB0ZXIoZWxlbWVudCk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1NdlltbHVaQzFoWkdGd2RHVnlMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN2EwSkJTMlVzVlVGQlF5eFBRVUZFTEVWQlFXRTdRVUZEZUVJc1VVRkJTU3h0UTBGQlNqczdPMEZCUkhkQ0xGRkJTWEJDTEcxQ1FVRnRRaXhYUVVGdVFpeEpRVUZyUXl4UlFVRlJMRTlCUVZJc1MwRkJiMElzUzBGQmNFSXNSVUZCTWtJN1FVRkROMFE3T3p0QlFVUTJSQ3hMUVVGcVJTeE5RVWxQTEVsQlFVa3NiVUpCUVcxQ0xGVkJRVzVDTEVWQlFTdENPMEZCUTNSRExHZENRVUZKTEZGQlFWRXNUMEZCVWl4TFFVRnZRaXhOUVVGd1FpeEZRVUUwUWp0QlFVTTFRaXd5UkVGRU5FSTdZVUZCYUVNc1RVRkZUenRCUVVOSUxIVkVRVVJITzJGQlJsQTdVMEZFUnpzN1FVRlJVQ3hYUVVGUExHZENRVUZuUWl4UFFVRm9RaXhEUVVGUUxFTkJhRUozUWp0RFFVRmlJaXdpWm1sc1pTSTZJbUpwYm1RdFlXUmhjSFJsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRDOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1lXUmhjSFJsY2lCbWNtOXRJQ2N1TGk5aFpHRndkR1Z5TDJGa1lYQjBaWEluTzF4dWFXMXdiM0owSUdOemMwRmtZWEIwWlhJZ1puSnZiU0FuTGk0dllXUmhjSFJsY2k5amMzTXRZV1JoY0hSbGNpYzdYRzVwYlhCdmNuUWdjM1puUVdSaGNIUmxjaUJtY205dElDY3VMaTloWkdGd2RHVnlMM04yWnkxaFpHRndkR1Z5Snp0Y2JtbHRjRzl5ZENCemRtZFFZWFJvUVdSaGNIUmxjaUJtY205dElDY3VMaTloWkdGd2RHVnlMM04yWnkxd1lYUm9MV0ZrWVhCMFpYSW5PMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0FvWld4bGJXVnVkQ2tnUFQ0Z2UxeHVJQ0FnSUd4bGRDQmtaWFJsWTNSbFpFRmtZWEIwWlhJZ1BTQmhaR0Z3ZEdWeU8xeHVYRzRnSUNBZ0x5OGdTV1lnU0ZSTlRFVnNaVzFsYm5RZ2JHOWhaQ0JEVTFOY2JpQWdJQ0JwWmlBb1pXeGxiV1Z1ZENCcGJuTjBZVzVqWlc5bUlFaFVUVXhGYkdWdFpXNTBJSHg4SUdWc1pXMWxiblF1ZEdGblRtRnRaU0E5UFQwZ0ozTjJaeWNwSUh0Y2JpQWdJQ0FnSUNBZ1pHVjBaV04wWldSQlpHRndkR1Z5SUQwZ1kzTnpRV1JoY0hSbGNqdGNibHh1SUNBZ0lDOHZJRTl5SUZOV1IxeHVJQ0FnSUgwZ1pXeHpaU0JwWmlBb1pXeGxiV1Z1ZENCcGJuTjBZVzVqWlc5bUlGTldSMFZzWlcxbGJuUXBJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tHVnNaVzFsYm5RdWRHRm5UbUZ0WlNBOVBUMGdKM0JoZEdnbktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCa1pYUmxZM1JsWkVGa1lYQjBaWElnUFNCemRtZFFZWFJvUVdSaGNIUmxjanRjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHUmxkR1ZqZEdWa1FXUmhjSFJsY2lBOUlITjJaMEZrWVhCMFpYSTdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmlBZ0lDQnlaWFIxY200Z1pHVjBaV04wWldSQlpHRndkR1Z5S0dWc1pXMWxiblFwTzF4dWZUdGNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL2JpbmQtYWRhcHRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDQwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgVFJBTlNMQVRFID0gJ3RyYW5zbGF0ZSc7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICB4OiBUUkFOU0xBVEUgKyAnWCcsXG4gICAgeTogVFJBTlNMQVRFICsgJ1knLFxuICAgIHo6IFRSQU5TTEFURSArICdaJ1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFpHRndkR1Z5TDJOemN5OXpkR0YwWlMxdFlYQXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3TzBGQlFVRXNTVUZCVFN4WlFVRlpMRmRCUVZvN08ydENRVVZUTzBGQlExZ3NUMEZCUnl4WlFVRlpMRWRCUVZvN1FVRkRTQ3hQUVVGSExGbEJRVmtzUjBGQldqdEJRVU5JTEU5QlFVY3NXVUZCV1N4SFFVRmFJaXdpWm1sc1pTSTZJbk4wWVhSbExXMWhjQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKamIyNXpkQ0JVVWtGT1UweEJWRVVnUFNBbmRISmhibk5zWVhSbEp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdlMXh1SUNBZ0lIZzZJRlJTUVU1VFRFRlVSU0FySUNkWUp5eGNiaUFnSUNCNU9pQlVVa0ZPVTB4QlZFVWdLeUFuV1Njc1hHNGdJQ0FnZWpvZ1ZGSkJUbE5NUVZSRklDc2dKMW9uWEc1OU95SmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hZGFwdGVyL2Nzcy9zdGF0ZS1tYXAuanNcbiAqKiBtb2R1bGUgaWQgPSA0MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2FuZ2xlID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvYW5nbGUnKTtcblxudmFyIF9hbmdsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hbmdsZSk7XG5cbnZhciBfYWxwaGEgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9hbHBoYScpO1xuXG52YXIgX2FscGhhMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FscGhhKTtcblxudmFyIF9heGVzID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvYXhlcycpO1xuXG52YXIgX2F4ZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXhlcyk7XG5cbnZhciBfY29sb3IgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9jb2xvcicpO1xuXG52YXIgX2NvbG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbG9yKTtcblxudmFyIF9zY2FsZSA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL3NjYWxlJyk7XG5cbnZhciBfc2NhbGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2NhbGUpO1xuXG52YXIgX3NoYWRvdyA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL3NoYWRvdycpO1xuXG52YXIgX3NoYWRvdzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaGFkb3cpO1xuXG52YXIgX3Bvc2l0aW9ucyA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL3Bvc2l0aW9ucycpO1xuXG52YXIgX3Bvc2l0aW9uczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NpdGlvbnMpO1xuXG52YXIgX3B4ID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvcHgnKTtcblxudmFyIF9weDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9weCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICAvLyBDb2xvciBwcm9wc1xuICAgIGNvbG9yOiBfY29sb3IyLmRlZmF1bHQsXG4gICAgYmFja2dyb3VuZENvbG9yOiBfY29sb3IyLmRlZmF1bHQsXG4gICAgb3V0bGluZUNvbG9yOiBfY29sb3IyLmRlZmF1bHQsXG4gICAgZmlsbDogX2NvbG9yMi5kZWZhdWx0LFxuICAgIHN0cm9rZTogX2NvbG9yMi5kZWZhdWx0LFxuXG4gICAgLy8gQm9yZGVyIHByb3BzXG4gICAgYm9yZGVyQ29sb3I6IF9jb2xvcjIuZGVmYXVsdCxcbiAgICBib3JkZXJUb3BDb2xvcjogX2NvbG9yMi5kZWZhdWx0LFxuICAgIGJvcmRlclJpZ2h0Q29sb3I6IF9jb2xvcjIuZGVmYXVsdCxcbiAgICBib3JkZXJCb3R0b21Db2xvcjogX2NvbG9yMi5kZWZhdWx0LFxuICAgIGJvcmRlckxlZnRDb2xvcjogX2NvbG9yMi5kZWZhdWx0LFxuICAgIGJvcmRlclJhZGl1czogX3B4Mi5kZWZhdWx0LFxuXG4gICAgLy8gUG9zaXRpb25pbmdcbiAgICBtYXJnaW46IF9wb3NpdGlvbnMyLmRlZmF1bHQsXG4gICAgcGFkZGluZzogX3Bvc2l0aW9uczIuZGVmYXVsdCxcbiAgICB3aWR0aDogX3B4Mi5kZWZhdWx0LFxuICAgIGhlaWdodDogX3B4Mi5kZWZhdWx0LFxuXG4gICAgLy8gQXhlc1xuICAgIGJhY2tncm91bmRQb3NpdGlvbjogX2F4ZXMyLmRlZmF1bHQsXG4gICAgcGVyc3BlY3RpdmVPcmlnaW46IF9heGVzMi5kZWZhdWx0LFxuICAgIHRyYW5zZm9ybU9yaWdpbjogX2F4ZXMyLmRlZmF1bHQsXG5cbiAgICAvLyBTaGFkb3dzXG4gICAgdGV4dFNoYWRvdzogX3NoYWRvdzIuZGVmYXVsdCxcbiAgICBib3hTaGFkb3c6IF9zaGFkb3cyLmRlZmF1bHQsXG5cbiAgICAvLyBUcmFuc2Zvcm0gcHJvcGVydGllc1xuICAgIHJvdGF0ZTogX2FuZ2xlMi5kZWZhdWx0LFxuICAgIHJvdGF0ZVg6IF9hbmdsZTIuZGVmYXVsdCxcbiAgICByb3RhdGVZOiBfYW5nbGUyLmRlZmF1bHQsXG4gICAgcm90YXRlWjogX2FuZ2xlMi5kZWZhdWx0LFxuICAgIHNjYWxlOiBfc2NhbGUyLmRlZmF1bHQsXG4gICAgc2NhbGVYOiBfc2NhbGUyLmRlZmF1bHQsXG4gICAgc2NhbGVZOiBfc2NhbGUyLmRlZmF1bHQsXG4gICAgc2NhbGVaOiBfc2NhbGUyLmRlZmF1bHQsXG4gICAgc2tld1g6IF9hbmdsZTIuZGVmYXVsdCxcbiAgICBza2V3WTogX2FuZ2xlMi5kZWZhdWx0LFxuICAgIGRpc3RhbmNlOiBfcHgyLmRlZmF1bHQsXG4gICAgdHJhbnNsYXRlWDogX3B4Mi5kZWZhdWx0LFxuICAgIHRyYW5zbGF0ZVk6IF9weDIuZGVmYXVsdCxcbiAgICB0cmFuc2xhdGVaOiBfcHgyLmRlZmF1bHQsXG4gICAgcGVyc3BlY3RpdmU6IF9weDIuZGVmYXVsdCxcbiAgICBvcGFjaXR5OiBfYWxwaGEyLmRlZmF1bHRcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwyTnpjeTkyWVd4MVpTMTBlWEJsTFcxaGNDNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenRyUWtGVFpUczdRVUZGV0N3d1FrRkdWenRCUVVkWUxHOURRVWhYTzBGQlNWZ3NhVU5CU2xjN1FVRkxXQ3g1UWtGTVZ6dEJRVTFZTERKQ1FVNVhPenM3UVVGVFdDeG5RMEZVVnp0QlFWVllMRzFEUVZaWE8wRkJWMWdzY1VOQldGYzdRVUZaV0N4elEwRmFWenRCUVdGWUxHOURRV0pYTzBGQlkxZ3NPRUpCWkZjN096dEJRV2xDV0N3clFrRnFRbGM3UVVGclFsZ3NaME5CYkVKWE8wRkJiVUpZTEhWQ1FXNUNWenRCUVc5Q1dDeDNRa0Z3UWxjN096dEJRWFZDV0N4elEwRjJRbGM3UVVGM1FsZ3NjVU5CZUVKWE8wRkJlVUpZTEcxRFFYcENWenM3TzBGQk5FSllMR2REUVRWQ1Z6dEJRVFpDV0N3clFrRTNRbGM3T3p0QlFXZERXQ3d5UWtGb1ExYzdRVUZwUTFnc05FSkJha05YTzBGQmEwTllMRFJDUVd4RFZ6dEJRVzFEV0N3MFFrRnVRMWM3UVVGdlExZ3NNRUpCY0VOWE8wRkJjVU5ZTERKQ1FYSkRWenRCUVhORFdDd3lRa0YwUTFjN1FVRjFRMWdzTWtKQmRrTlhPMEZCZDBOWUxEQkNRWGhEVnp0QlFYbERXQ3d3UWtGNlExYzdRVUV3UTFnc01FSkJNVU5YTzBGQk1rTllMRFJDUVRORFZ6dEJRVFJEV0N3MFFrRTFRMWM3UVVFMlExZ3NORUpCTjBOWE8wRkJPRU5ZTERaQ1FUbERWenRCUVN0RFdDdzBRa0V2UTFjaUxDSm1hV3hsSWpvaWRtRnNkV1V0ZEhsd1pTMXRZWEF1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUdGdVoyeGxJR1p5YjIwZ0p5NHVMeTR1TDNaaGJIVmxMWFI1Y0dWekwyRnVaMnhsSnp0Y2JtbHRjRzl5ZENCaGJIQm9ZU0JtY205dElDY3VMaTh1TGk5MllXeDFaUzEwZVhCbGN5OWhiSEJvWVNjN1hHNXBiWEJ2Y25RZ1lYaGxjeUJtY205dElDY3VMaTh1TGk5MllXeDFaUzEwZVhCbGN5OWhlR1Z6Snp0Y2JtbHRjRzl5ZENCamIyeHZjaUJtY205dElDY3VMaTh1TGk5MllXeDFaUzEwZVhCbGN5OWpiMnh2Y2ljN1hHNXBiWEJ2Y25RZ2MyTmhiR1VnWm5KdmJTQW5MaTR2TGk0dmRtRnNkV1V0ZEhsd1pYTXZjMk5oYkdVbk8xeHVhVzF3YjNKMElITm9ZV1J2ZHlCbWNtOXRJQ2N1TGk4dUxpOTJZV3gxWlMxMGVYQmxjeTl6YUdGa2IzY25PMXh1YVcxd2IzSjBJSEJ2YzJsMGFXOXVjeUJtY205dElDY3VMaTh1TGk5MllXeDFaUzEwZVhCbGN5OXdiM05wZEdsdmJuTW5PMXh1YVcxd2IzSjBJSEI0SUdaeWIyMGdKeTR1THk0dUwzWmhiSFZsTFhSNWNHVnpMM0I0Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2UxeHVJQ0FnSUM4dklFTnZiRzl5SUhCeWIzQnpYRzRnSUNBZ1kyOXNiM0k2SUdOdmJHOXlMRnh1SUNBZ0lHSmhZMnRuY205MWJtUkRiMnh2Y2pvZ1kyOXNiM0lzWEc0Z0lDQWdiM1YwYkdsdVpVTnZiRzl5T2lCamIyeHZjaXhjYmlBZ0lDQm1hV3hzT2lCamIyeHZjaXhjYmlBZ0lDQnpkSEp2YTJVNklHTnZiRzl5TEZ4dVhHNGdJQ0FnTHk4Z1FtOXlaR1Z5SUhCeWIzQnpYRzRnSUNBZ1ltOXlaR1Z5UTI5c2IzSTZJR052Ykc5eUxGeHVJQ0FnSUdKdmNtUmxjbFJ2Y0VOdmJHOXlPaUJqYjJ4dmNpeGNiaUFnSUNCaWIzSmtaWEpTYVdkb2RFTnZiRzl5T2lCamIyeHZjaXhjYmlBZ0lDQmliM0prWlhKQ2IzUjBiMjFEYjJ4dmNqb2dZMjlzYjNJc1hHNGdJQ0FnWW05eVpHVnlUR1ZtZEVOdmJHOXlPaUJqYjJ4dmNpeGNiaUFnSUNCaWIzSmtaWEpTWVdScGRYTTZJSEI0TEZ4dVhHNGdJQ0FnTHk4Z1VHOXphWFJwYjI1cGJtZGNiaUFnSUNCdFlYSm5hVzQ2SUhCdmMybDBhVzl1Y3l4Y2JpQWdJQ0J3WVdSa2FXNW5PaUJ3YjNOcGRHbHZibk1zWEc0Z0lDQWdkMmxrZEdnNklIQjRMRnh1SUNBZ0lHaGxhV2RvZERvZ2NIZ3NYRzVjYmlBZ0lDQXZMeUJCZUdWelhHNGdJQ0FnWW1GamEyZHliM1Z1WkZCdmMybDBhVzl1T2lCaGVHVnpMRnh1SUNBZ0lIQmxjbk53WldOMGFYWmxUM0pwWjJsdU9pQmhlR1Z6TEZ4dUlDQWdJSFJ5WVc1elptOXliVTl5YVdkcGJqb2dZWGhsY3l4Y2JseHVJQ0FnSUM4dklGTm9ZV1J2ZDNOY2JpQWdJQ0IwWlhoMFUyaGhaRzkzT2lCemFHRmtiM2NzWEc0Z0lDQWdZbTk0VTJoaFpHOTNPaUJ6YUdGa2IzY3NJQ0FnWEc1Y2JpQWdJQ0F2THlCVWNtRnVjMlp2Y20wZ2NISnZjR1Z5ZEdsbGMxeHVJQ0FnSUhKdmRHRjBaVG9nWVc1bmJHVXNYRzRnSUNBZ2NtOTBZWFJsV0RvZ1lXNW5iR1VzWEc0Z0lDQWdjbTkwWVhSbFdUb2dZVzVuYkdVc1hHNGdJQ0FnY205MFlYUmxXam9nWVc1bmJHVXNYRzRnSUNBZ2MyTmhiR1U2SUhOallXeGxMRnh1SUNBZ0lITmpZV3hsV0RvZ2MyTmhiR1VzWEc0Z0lDQWdjMk5oYkdWWk9pQnpZMkZzWlN4Y2JpQWdJQ0J6WTJGc1pWbzZJSE5qWVd4bExGeHVJQ0FnSUhOclpYZFlPaUJoYm1kc1pTeGNiaUFnSUNCemEyVjNXVG9nWVc1bmJHVXNYRzRnSUNBZ1pHbHpkR0Z1WTJVNklIQjRMRnh1SUNBZ0lIUnlZVzV6YkdGMFpWZzZJSEI0TEZ4dUlDQWdJSFJ5WVc1emJHRjBaVms2SUhCNExGeHVJQ0FnSUhSeVlXNXpiR0YwWlZvNklIQjRMRnh1SUNBZ0lIQmxjbk53WldOMGFYWmxPaUJ3ZUN4Y2JpQWdJQ0J2Y0dGamFYUjVPaUJoYkhCb1lWeHVmVHNpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9jc3MvdmFsdWUtdHlwZS1tYXAuanNcbiAqKiBtb2R1bGUgaWQgPSA0MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzID0gcmVxdWlyZSgnLi90cmFuc2Zvcm0tcHJvcHMnKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2Zvcm1Qcm9wcyk7XG5cbnZhciBfcHJlZml4ZXIgPSByZXF1aXJlKCcuL3ByZWZpeGVyJyk7XG5cbnZhciBfcHJlZml4ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlZml4ZXIpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vLi4vaW5jL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBUUkFOU0xBVEVfWiA9ICd0cmFuc2xhdGVaJztcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHN0YXRlLCBkaXNhYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pIHtcbiAgICB2YXIgcHJvcGVydHlTdHJpbmcgPSAnJztcbiAgICB2YXIgdHJhbnNmb3JtU3RyaW5nID0gJyc7XG4gICAgdmFyIHRyYW5zZm9ybUhhc1ogPSBmYWxzZTtcblxuICAgIGZvciAodmFyIGtleSBpbiBzdGF0ZSkge1xuICAgICAgICBpZiAoc3RhdGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gc3RhdGVba2V5XTtcblxuICAgICAgICAgICAgaWYgKF90cmFuc2Zvcm1Qcm9wczIuZGVmYXVsdFtrZXldKSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtU3RyaW5nICs9IGtleSArICcoJyArIHZhbHVlICsgJykgJztcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1IYXNaID0ga2V5ID09PSBUUkFOU0xBVEVfWiA/IHRydWUgOiB0cmFuc2Zvcm1IYXNaO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eVN0cmluZyArPSAnOycgKyAoMCwgX3ByZWZpeGVyMi5kZWZhdWx0KSgoMCwgX3V0aWxzLmNhbWVsVG9EYXNoKShrZXkpKSArICc6JyArIHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRyYW5zZm9ybVN0cmluZyAhPT0gJycpIHtcbiAgICAgICAgaWYgKCF0cmFuc2Zvcm1IYXNaICYmICFkaXNhYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybVN0cmluZyArPSBUUkFOU0xBVEVfWiArICcoMHB4KSc7XG4gICAgICAgIH1cblxuICAgICAgICBwcm9wZXJ0eVN0cmluZyArPSAnOycgKyAoMCwgX3ByZWZpeGVyMi5kZWZhdWx0KSgndHJhbnNmb3JtJykgKyAnOicgKyB0cmFuc2Zvcm1TdHJpbmc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5U3RyaW5nO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFpHRndkR1Z5TDJOemN5OWlkV2xzWkM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3T3pzN096czdPenM3TzBGQlNVRXNTVUZCVFN4alFVRmpMRmxCUVdRN08ydENRVVZUTEZWQlFVTXNTMEZCUkN4RlFVRlJMREpDUVVGU0xFVkJRWGRETzBGQlEyNUVMRkZCUVVrc2FVSkJRV2xDTEVWQlFXcENMRU5CUkN0RE8wRkJSVzVFTEZGQlFVa3NhMEpCUVd0Q0xFVkJRV3hDTEVOQlJpdERPMEZCUjI1RUxGRkJRVWtzWjBKQlFXZENMRXRCUVdoQ0xFTkJTQ3RET3p0QlFVdHVSQ3hUUVVGTExFbEJRVWtzUjBGQlNpeEpRVUZYTEV0QlFXaENMRVZCUVhWQ08wRkJRMjVDTEZsQlFVa3NUVUZCVFN4alFVRk9MRU5CUVhGQ0xFZEJRWEpDTEVOQlFVb3NSVUZCSzBJN1FVRkRNMElzWjBKQlFVMHNVVUZCVVN4TlFVRk5MRWRCUVU0c1EwRkJVaXhEUVVSeFFqczdRVUZITTBJc1owSkJRVWtzZVVKQlFXVXNSMEZCWml4RFFVRktMRVZCUVhsQ08wRkJRM0pDTEcxRFFVRnRRaXhOUVVGTkxFZEJRVTRzUjBGQldTeExRVUZhTEVkQlFXOUNMRWxCUVhCQ0xFTkJSRVU3UVVGRmNrSXNaME5CUVdkQ0xFZEJRVU1zUzBGQlVTeFhRVUZTTEVkQlFYVkNMRWxCUVhoQ0xFZEJRU3RDTEdGQlFTOUNMRU5CUmtzN1lVRkJla0lzVFVGSlR6dEJRVU5JTEd0RFFVRnJRaXhOUVVGTkxIZENRVUZUTEhkQ1FVRlpMRWRCUVZvc1EwRkJWQ3hEUVVGT0xFZEJRVzFETEVkQlFXNURMRWRCUVhsRExFdEJRWHBETEVOQlJHWTdZVUZLVUR0VFFVaEtPMHRCUkVvN08wRkJZMEVzVVVGQlNTeHZRa0ZCYjBJc1JVRkJjRUlzUlVGQmQwSTdRVUZEZUVJc1dVRkJTU3hEUVVGRExHRkJRVVFzU1VGQmEwSXNRMEZCUXl3eVFrRkJSQ3hGUVVFNFFqdEJRVU5vUkN3clFrRkJiVUlzWTBGQll5eFBRVUZrTEVOQlJEWkNPMU5CUVhCRU96dEJRVWxCTERCQ1FVRnJRaXhOUVVGTkxIZENRVUZUTEZkQlFWUXNRMEZCVGl4SFFVRTRRaXhIUVVFNVFpeEhRVUZ2UXl4bFFVRndReXhEUVV4Tk8wdEJRVFZDT3p0QlFWRkJMRmRCUVU4c1kwRkJVQ3hEUVROQ2JVUTdRMEZCZUVNaUxDSm1hV3hsSWpvaVluVnBiR1F1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhSeVlXNXpabTl5YlZCeWIzQnpJR1p5YjIwZ0p5NHZkSEpoYm5ObWIzSnRMWEJ5YjNCekp6dGNibWx0Y0c5eWRDQndjbVZtYVhobGNpQm1jbTl0SUNjdUwzQnlaV1pwZUdWeUp6dGNibWx0Y0c5eWRDQjdJR05oYldWc1ZHOUVZWE5vSUgwZ1puSnZiU0FuTGk0dkxpNHZhVzVqTDNWMGFXeHpKenRjYmx4dVkyOXVjM1FnVkZKQlRsTk1RVlJGWDFvZ1BTQW5kSEpoYm5Oc1lYUmxXaWM3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUNoemRHRjBaU3dnWkdsellXSnNaVWhoY21SM1lYSmxRV05qWld4bGNtRjBhVzl1S1NBOVBpQjdYRzRnSUNBZ2JHVjBJSEJ5YjNCbGNuUjVVM1J5YVc1bklEMGdKeWM3WEc0Z0lDQWdiR1YwSUhSeVlXNXpabTl5YlZOMGNtbHVaeUE5SUNjbk8xeHVJQ0FnSUd4bGRDQjBjbUZ1YzJadmNtMUlZWE5hSUQwZ1ptRnNjMlU3WEc1Y2JpQWdJQ0JtYjNJZ0tHeGxkQ0JyWlhrZ2FXNGdjM1JoZEdVcElIdGNiaUFnSUNBZ0lDQWdhV1lnS0hOMFlYUmxMbWhoYzA5M2JsQnliM0JsY25SNUtHdGxlU2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElIWmhiSFZsSUQwZ2MzUmhkR1ZiYTJWNVhUdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFJ5WVc1elptOXliVkJ5YjNCelcydGxlVjBwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGNtRnVjMlp2Y20xVGRISnBibWNnS3owZ2EyVjVJQ3NnSnlnbklDc2dkbUZzZFdVZ0t5QW5LU0FuTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSeVlXNXpabTl5YlVoaGMxb2dQU0FvYTJWNUlEMDlQU0JVVWtGT1UweEJWRVZmV2lrZ1B5QjBjblZsSURvZ2RISmhibk5tYjNKdFNHRnpXanRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQndjbTl3WlhKMGVWTjBjbWx1WnlBclBTQW5PeWNnS3lCd2NtVm1hWGhsY2loallXMWxiRlJ2UkdGemFDaHJaWGtwS1NBcklDYzZKeUFySUhaaGJIVmxPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2FXWWdLSFJ5WVc1elptOXliVk4wY21sdVp5QWhQVDBnSnljcElIdGNiaUFnSUNBZ0lDQWdhV1lnS0NGMGNtRnVjMlp2Y20xSVlYTmFJQ1ltSUNGa2FYTmhZbXhsU0dGeVpIZGhjbVZCWTJObGJHVnlZWFJwYjI0cElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSeVlXNXpabTl5YlZOMGNtbHVaeUFyUFNCVVVrRk9VMHhCVkVWZldpQXJJQ2NvTUhCNEtTYzdYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCd2NtOXdaWEowZVZOMGNtbHVaeUFyUFNBbk95Y2dLeUJ3Y21WbWFYaGxjaWduZEhKaGJuTm1iM0p0SnlrZ0t5QW5PaWNnS3lCMGNtRnVjMlp2Y20xVGRISnBibWM3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjbVYwZFhKdUlIQnliM0JsY25SNVUzUnlhVzVuTzF4dWZUc2lYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hZGFwdGVyL2Nzcy9idWlsZC5qc1xuICoqIG1vZHVsZSBpZCA9IDQzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgY2FjaGUgPSB7fTtcbnZhciBwcmVmaXhlcyA9IFsnV2Via2l0JywgJ01veicsICdPJywgJ21zJywgJyddO1xudmFyIG51bVByZWZpeGVzID0gcHJlZml4ZXMubGVuZ3RoO1xudmFyIHRlc3RFbGVtZW50ID0gdW5kZWZpbmVkO1xuXG4vKlxuICAgIFRlc3Qgc3R5bGUgcHJvcGVydHkgZm9yIHByZWZpeGVkIHZlcnNpb25cbiAgICBcbiAgICBAcGFyYW0gW3N0cmluZ106IFN0eWxlIHByb3BlcnR5XG4gICAgQHJldHVybiBbc3RyaW5nXTogQ2FjaGVkIHByb3BlcnR5IG5hbWVcbiovXG52YXIgdGVzdFByZWZpeCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICB0ZXN0RWxlbWVudCA9IHRlc3RFbGVtZW50IHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgaWYgKGNhY2hlW2tleV0gPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjYWNoZVtrZXldID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1QcmVmaXhlczsgaSsrKSB7XG4gICAgICAgIHZhciBwcmVmaXggPSBwcmVmaXhlc1tpXSxcbiAgICAgICAgICAgIHByZWZpeGVkID0gcHJlZml4ID09PSAnJyA/IGtleSA6IHByZWZpeCArIGtleS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGtleS5zbGljZSgxKTtcblxuICAgICAgICBpZiAocHJlZml4ZWQgaW4gdGVzdEVsZW1lbnQuc3R5bGUpIHtcbiAgICAgICAgICAgIGNhY2hlW2tleV0gPSBwcmVmaXhlZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjYWNoZVtrZXldO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBjYWNoZVtrZXldIHx8IHRlc3RQcmVmaXgoa2V5KTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwyTnpjeTl3Y21WbWFYaGxjaTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN1FVRkJRU3hKUVVGTkxGRkJRVkVzUlVGQlVqdEJRVU5PTEVsQlFVMHNWMEZCVnl4RFFVRkRMRkZCUVVRc1JVRkJWU3hMUVVGV0xFVkJRV2RDTEVkQlFXaENMRVZCUVc5Q0xFbEJRWEJDTEVWQlFUQkNMRVZCUVRGQ0xFTkJRVmc3UVVGRFRpeEpRVUZOTEdOQlFXTXNVMEZCVXl4TlFVRlVPMEZCUTNCQ0xFbEJRVWtzZFVKQlFVbzdPenM3T3pzN08wRkJVVUVzU1VGQlRTeGhRVUZoTEZWQlFVTXNSMEZCUkN4RlFVRlRPMEZCUTNoQ0xHdENRVUZqTEdWQlFXVXNVMEZCVXl4aFFVRlVMRU5CUVhWQ0xFdEJRWFpDTEVOQlFXWXNRMEZFVlRzN1FVRkhlRUlzVVVGQlNTeE5RVUZOTEVkQlFVNHNUVUZCWlN4TFFVRm1MRVZCUVhOQ08wRkJRM1JDTEdWQlFVOHNTMEZCVUN4RFFVUnpRanRMUVVFeFFpeE5RVVZQTzBGQlEwZ3NZMEZCVFN4SFFVRk9MRWxCUVdFc1MwRkJZaXhEUVVSSE8wdEJSbEE3TzBGQlRVRXNVMEZCU3l4SlFVRkpMRWxCUVVrc1EwRkJTaXhGUVVGUExFbEJRVWtzVjBGQlNpeEZRVUZwUWl4SFFVRnFReXhGUVVGelF6dEJRVU5zUXl4WlFVRkpMRk5CUVZNc1UwRkJVeXhEUVVGVUxFTkJRVlE3V1VGRFFTeFhRVUZYTEUxQlFVTXNTMEZCVnl4RlFVRllMRWRCUVdsQ0xFZEJRV3hDTEVkQlFYZENMRk5CUVZNc1NVRkJTU3hOUVVGS0xFTkJRVmNzUTBGQldDeEZRVUZqTEZkQlFXUXNSVUZCVkN4SFFVRjFReXhKUVVGSkxFdEJRVW9zUTBGQlZTeERRVUZXTEVOQlFYWkRMRU5CUmt3N08wRkJTV3hETEZsQlFVa3NXVUZCV1N4WlFVRlpMRXRCUVZvc1JVRkJiVUk3UVVGREwwSXNhMEpCUVUwc1IwRkJUaXhKUVVGaExGRkJRV0lzUTBGRUswSTdVMEZCYmtNN1MwRktTanM3UVVGVFFTeFhRVUZQTEUxQlFVMHNSMEZCVGl4RFFVRlFMRU5CYkVKM1FqdERRVUZVT3p0clFrRnhRa29zVlVGQlF5eEhRVUZFTzFkQlFWTXNUVUZCVFN4SFFVRk9MRXRCUVdNc1YwRkJWeXhIUVVGWUxFTkJRV1E3UTBGQlZDSXNJbVpwYkdVaU9pSndjbVZtYVhobGNpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpqYjI1emRDQmpZV05vWlNBOUlIdDlPMXh1WTI5dWMzUWdjSEpsWm1sNFpYTWdQU0JiSjFkbFltdHBkQ2NzSjAxdmVpY3NKMDhuTENkdGN5Y3NJQ2NuWFR0Y2JtTnZibk4wSUc1MWJWQnlaV1pwZUdWeklEMGdjSEpsWm1sNFpYTXViR1Z1WjNSb08xeHViR1YwSUhSbGMzUkZiR1Z0Wlc1ME8xeHVYRzR2S2x4dUlDQWdJRlJsYzNRZ2MzUjViR1VnY0hKdmNHVnlkSGtnWm05eUlIQnlaV1pwZUdWa0lIWmxjbk5wYjI1Y2JpQWdJQ0JjYmlBZ0lDQkFjR0Z5WVcwZ1czTjBjbWx1WjEwNklGTjBlV3hsSUhCeWIzQmxjblI1WEc0Z0lDQWdRSEpsZEhWeWJpQmJjM1J5YVc1blhUb2dRMkZqYUdWa0lIQnliM0JsY25SNUlHNWhiV1ZjYmlvdlhHNWpiMjV6ZENCMFpYTjBVSEpsWm1sNElEMGdLR3RsZVNrZ1BUNGdlMXh1SUNBZ0lIUmxjM1JGYkdWdFpXNTBJRDBnZEdWemRFVnNaVzFsYm5RZ2ZId2daRzlqZFcxbGJuUXVZM0psWVhSbFJXeGxiV1Z1ZENnblpHbDJKeWs3WEc1Y2JpQWdJQ0JwWmlBb1kyRmphR1ZiYTJWNVhTQTlQVDBnWm1Gc2MyVXBJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR1poYkhObE8xeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUdOaFkyaGxXMnRsZVYwZ1BTQm1ZV3h6WlR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JtYjNJZ0tIWmhjaUJwSUQwZ01Ec2dhU0E4SUc1MWJWQnlaV1pwZUdWek95QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ2RtRnlJSEJ5WldacGVDQTlJSEJ5WldacGVHVnpXMmxkTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdjSEpsWm1sNFpXUWdQU0FvY0hKbFptbDRJRDA5UFNBbkp5a2dQeUJyWlhrZ09pQndjbVZtYVhnZ0t5QnJaWGt1WTJoaGNrRjBLREFwTG5SdlZYQndaWEpEWVhObEtDa2dLeUJyWlhrdWMyeHBZMlVvTVNrN1hHNWNiaUFnSUNBZ0lDQWdhV1lnS0hCeVpXWnBlR1ZrSUdsdUlIUmxjM1JGYkdWdFpXNTBMbk4wZVd4bEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCallXTm9aVnRyWlhsZElEMGdjSEpsWm1sNFpXUTdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzRnSUNBZ1hHNGdJQ0FnY21WMGRYSnVJR05oWTJobFcydGxlVjA3WEc1OU8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQW9hMlY1S1NBOVBpQmpZV05vWlZ0clpYbGRJSHg4SUhSbGMzUlFjbVZtYVhnb2EyVjVLVHNpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9jc3MvcHJlZml4ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA0NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2RpY3Rpb25hcnkgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9zZXR0aW5ncy9kaWN0aW9uYXJ5Jyk7XG5cbnZhciB0cmFuc2Zvcm1Qcm9wcyA9IHt9O1xuXG52YXIgU0NBTEUgPSAnc2NhbGUnO1xudmFyIFJPVEFURSA9ICdyb3RhdGUnO1xudmFyIFRSQU5TRk9STV9QRVJTUEVDVElWRSA9ICd0cmFuc2Zvcm1QZXJzcGVjdGl2ZSc7XG52YXIgVEVSTVMgPSBbJ3RyYW5zbGF0ZScsIFNDQUxFLCBST1RBVEUsICdza2V3JywgVFJBTlNGT1JNX1BFUlNQRUNUSVZFXTtcblxudHJhbnNmb3JtUHJvcHNbUk9UQVRFXSA9IHRyYW5zZm9ybVByb3BzW1NDQUxFXSA9IHRyYW5zZm9ybVByb3BzW1RSQU5TRk9STV9QRVJTUEVDVElWRV0gPSB0cnVlO1xuXG5URVJNUy5mb3JFYWNoKGZ1bmN0aW9uICh0ZXJtKSB7XG4gIHJldHVybiBfZGljdGlvbmFyeS5heGVzLmZvckVhY2goZnVuY3Rpb24gKGF4aXMpIHtcbiAgICByZXR1cm4gdHJhbnNmb3JtUHJvcHNbdGVybSArIGF4aXNdID0gdHJ1ZTtcbiAgfSk7XG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gdHJhbnNmb3JtUHJvcHM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwyTnpjeTkwY21GdWMyWnZjbTB0Y0hKdmNITXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN08wRkJSVUVzU1VGQlNTeHBRa0ZCYVVJc1JVRkJha0k3TzBGQlJVb3NTVUZCVFN4UlFVRlJMRTlCUVZJN1FVRkRUaXhKUVVGTkxGTkJRVk1zVVVGQlZEdEJRVU5PTEVsQlFVMHNkMEpCUVhkQ0xITkNRVUY0UWp0QlFVTk9MRWxCUVUwc1VVRkJVU3hEUVVGRExGZEJRVVFzUlVGQll5eExRVUZrTEVWQlFYRkNMRTFCUVhKQ0xFVkJRVFpDTEUxQlFUZENMRVZCUVhGRExIRkNRVUZ5UXl4RFFVRlNPenRCUVVWT0xHVkJRV1VzVFVGQlppeEpRVUY1UWl4bFFVRmxMRXRCUVdZc1NVRkJkMElzWlVGQlpTeHhRa0ZCWml4SlFVRjNReXhKUVVGNFF6czdRVUZGYWtRc1RVRkJUU3hQUVVGT0xFTkJRV01zVlVGQlF5eEpRVUZFTzFOQlFWVXNhVUpCUVVzc1QwRkJUQ3hEUVVGaExGVkJRVU1zU1VGQlJEdFhRVUZWTEdWQlFXVXNUMEZCVHl4SlFVRlFMRU5CUVdZc1IwRkJPRUlzU1VGQk9VSTdSMEZCVmp0RFFVRjJRaXhEUVVGa096dHJRa0ZGWlNJc0ltWnBiR1VpT2lKMGNtRnVjMlp2Y20wdGNISnZjSE11YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhzZ1lYaGxjeUI5SUdaeWIyMGdKeTR1THk0dUwzWmhiSFZsTFhSNWNHVnpMM05sZEhScGJtZHpMMlJwWTNScGIyNWhjbmtuTzF4dVhHNXNaWFFnZEhKaGJuTm1iM0p0VUhKdmNITWdQU0I3ZlR0Y2JseHVZMjl1YzNRZ1UwTkJURVVnUFNBbmMyTmhiR1VuTzF4dVkyOXVjM1FnVWs5VVFWUkZJRDBnSjNKdmRHRjBaU2M3WEc1amIyNXpkQ0JVVWtGT1UwWlBVazFmVUVWU1UxQkZRMVJKVmtVZ1BTQW5kSEpoYm5ObWIzSnRVR1Z5YzNCbFkzUnBkbVVuTzF4dVkyOXVjM1FnVkVWU1RWTWdQU0JiSjNSeVlXNXpiR0YwWlNjc0lGTkRRVXhGTENCU1QxUkJWRVVzSUNkemEyVjNKeXdnVkZKQlRsTkdUMUpOWDFCRlVsTlFSVU5VU1ZaRlhUdGNibHh1ZEhKaGJuTm1iM0p0VUhKdmNITmJVazlVUVZSRlhTQTlJSFJ5WVc1elptOXliVkJ5YjNCelcxTkRRVXhGWFNBOUlIUnlZVzV6Wm05eWJWQnliM0J6VzFSU1FVNVRSazlTVFY5UVJWSlRVRVZEVkVsV1JWMGdQU0IwY25WbE8xeHVYRzVVUlZKTlV5NW1iM0pGWVdOb0tDaDBaWEp0S1NBOVBpQmhlR1Z6TG1admNrVmhZMmdvS0dGNGFYTXBJRDArSUhSeVlXNXpabTl5YlZCeWIzQnpXM1JsY20wZ0t5QmhlR2x6WFNBOUlIUnlkV1VwS1R0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2RISmhibk5tYjNKdFVISnZjSE03SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9jc3MvdHJhbnNmb3JtLXByb3BzLmpzXG4gKiogbW9kdWxlIGlkID0gNDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGJ1aWxkO1xuLypcbiAgICBDb252ZXJ0IHBlcmNlbnRhZ2UgdG8gcGl4ZWxzXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBQZXJjZW50YWdlIG9mIHRvdGFsIGxlbmd0aFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVG90YWwgbGVuZ3RoXG4qL1xudmFyIHBlcmNlbnRUb1BpeGVscyA9IGZ1bmN0aW9uIChwZXJjZW50LCBsZW5ndGgpIHtcbiAgICByZXR1cm4gcGFyc2VGbG9hdChwZXJjZW50KSAvIDEwMCAqIGxlbmd0aCArICdweCc7XG59O1xuXG5mdW5jdGlvbiBidWlsZChzdGF0ZSwgbGVuZ3RoKSB7XG4gICAgdmFyIHN0eWxlcyA9IHt9O1xuICAgIHZhciBkYXNoQXJyYXlTdHlsZXMgPSB7XG4gICAgICAgIGxlbmd0aDogMCxcbiAgICAgICAgc3BhY2luZzogbGVuZ3RoICsgJ3B4J1xuICAgIH07XG4gICAgdmFyIGhhc0Rhc2hBcnJheSA9IGZhbHNlO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHN0YXRlKSB7XG4gICAgICAgIGlmIChzdGF0ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBzdGF0ZVtrZXldO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2xlbmd0aCc6XG4gICAgICAgICAgICAgICAgY2FzZSAnc3BhY2luZyc6XG4gICAgICAgICAgICAgICAgICAgIGhhc0Rhc2hBcnJheSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGRhc2hBcnJheVN0eWxlc1trZXldID0gcGVyY2VudFRvUGl4ZWxzKHZhbHVlLCBsZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdvZmZzZXQnOlxuICAgICAgICAgICAgICAgICAgICBzdHlsZXNbJ3N0cm9rZS1kYXNob2Zmc2V0J10gPSBwZXJjZW50VG9QaXhlbHMoLXZhbHVlLCBsZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBzdHlsZXNba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGhhc0Rhc2hBcnJheSkge1xuICAgICAgICBzdHlsZXNbJ3N0cm9rZS1kYXNoYXJyYXknXSA9IGRhc2hBcnJheVN0eWxlcy5sZW5ndGggKyAnICcgKyBkYXNoQXJyYXlTdHlsZXMuc3BhY2luZztcbiAgICB9XG5cbiAgICByZXR1cm4gc3R5bGVzO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMM04yWnkxd1lYUm9MMkoxYVd4a0xtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenRyUWtGUmQwSTdPenM3T3pzN1FVRkdlRUlzU1VGQlRTeHJRa0ZCYTBJc1ZVRkJReXhQUVVGRUxFVkJRVlVzVFVGQlZqdFhRVUZ4UWl4VlFVRkRMRU5CUVZjc1QwRkJXQ3hKUVVGelFpeEhRVUYwUWl4SFFVRTJRaXhOUVVFNVFpeEhRVUYxUXl4SlFVRjJRenREUVVGeVFqczdRVUZGVkN4VFFVRlRMRXRCUVZRc1EwRkJaU3hMUVVGbUxFVkJRWE5DTEUxQlFYUkNMRVZCUVRoQ08wRkJRM3BETEZGQlFVMHNVMEZCVXl4RlFVRlVMRU5CUkcxRE8wRkJSWHBETEZGQlFVMHNhMEpCUVd0Q08wRkJRM0JDTEdkQ1FVRlJMRU5CUVZJN1FVRkRRU3hwUWtGQlV5eFRRVUZUTEVsQlFWUTdTMEZHVUN4RFFVWnRRenRCUVUxNlF5eFJRVUZKTEdWQlFXVXNTMEZCWml4RFFVNXhRenM3UVVGUmVrTXNVMEZCU3l4SlFVRkpMRWRCUVVvc1NVRkJWeXhMUVVGb1FpeEZRVUYxUWp0QlFVTnVRaXhaUVVGSkxFMUJRVTBzWTBGQlRpeERRVUZ4UWl4SFFVRnlRaXhEUVVGS0xFVkJRU3RDTzBGQlF6TkNMR2RDUVVGTkxGRkJRVkVzVFVGQlRTeEhRVUZPTEVOQlFWSXNRMEZFY1VJN08wRkJSek5DTEc5Q1FVRlJMRWRCUVZJN1FVRkRRU3h4UWtGQlN5eFJRVUZNTEVOQlJFRTdRVUZGUVN4eFFrRkJTeXhUUVVGTU8wRkJRMGtzYlVOQlFXVXNTVUZCWml4RFFVUktPMEZCUlVrc2IwTkJRV2RDTEVkQlFXaENMRWxCUVhWQ0xHZENRVUZuUWl4TFFVRm9RaXhGUVVGMVFpeE5RVUYyUWl4RFFVRjJRaXhEUVVaS08wRkJSMGtzTUVKQlNFbzdRVUZHUVN4eFFrRk5TeXhSUVVGTU8wRkJRMGtzTWtKQlFVOHNiVUpCUVZBc1NVRkJPRUlzWjBKQlFXZENMRU5CUVVNc1MwRkJSQ3hGUVVGUkxFMUJRWGhDTEVOQlFUbENMRU5CUkVvN1FVRkZTU3d3UWtGR1NqdEJRVTVCTzBGQlZVa3NNa0pCUVU4c1IwRkJVQ3hKUVVGakxFdEJRV1FzUTBGRVNqdEJRVlJCTEdGQlNESkNPMU5CUVM5Q08wdEJSRW83TzBGQmJVSkJMRkZCUVVrc1dVRkJTaXhGUVVGclFqdEJRVU5rTEdWQlFVOHNhMEpCUVZBc1NVRkJOa0lzWjBKQlFXZENMRTFCUVdoQ0xFZEJRWGxDTEVkQlFYcENMRWRCUVN0Q0xHZENRVUZuUWl4UFFVRm9RaXhEUVVRNVF6dExRVUZzUWpzN1FVRkpRU3hYUVVGUExFMUJRVkFzUTBFdlFubERPME5CUVRsQ0lpd2labWxzWlNJNkltSjFhV3hrTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMEwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpOHFYRzRnSUNBZ1EyOXVkbVZ5ZENCd1pYSmpaVzUwWVdkbElIUnZJSEJwZUdWc2MxeHVJQ0FnSUZ4dUlDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dVR1Z5WTJWdWRHRm5aU0J2WmlCMGIzUmhiQ0JzWlc1bmRHaGNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZSdmRHRnNJR3hsYm1kMGFGeHVLaTljYm1OdmJuTjBJSEJsY21ObGJuUlViMUJwZUdWc2N5QTlJQ2h3WlhKalpXNTBMQ0JzWlc1bmRHZ3BJRDArSUNod1lYSnpaVVpzYjJGMEtIQmxjbU5sYm5RcElDOGdNVEF3S1NBcUlHeGxibWQwYUNBcklDZHdlQ2M3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdaMWJtTjBhVzl1SUdKMWFXeGtLSE4wWVhSbExDQnNaVzVuZEdncElIdGNiaUFnSUNCamIyNXpkQ0J6ZEhsc1pYTWdQU0I3ZlR0Y2JpQWdJQ0JqYjI1emRDQmtZWE5vUVhKeVlYbFRkSGxzWlhNZ1BTQjdYRzRnSUNBZ0lDQWdJR3hsYm1kMGFEb2dNQ3hjYmlBZ0lDQWdJQ0FnYzNCaFkybHVaem9nYkdWdVozUm9JQ3NnSjNCNEoxeHVJQ0FnSUgwN1hHNGdJQ0FnYkdWMElHaGhjMFJoYzJoQmNuSmhlU0E5SUdaaGJITmxPMXh1WEc0Z0lDQWdabTl5SUNoc1pYUWdhMlY1SUdsdUlITjBZWFJsS1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2h6ZEdGMFpTNW9ZWE5QZDI1UWNtOXdaWEowZVNoclpYa3BLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCMllXeDFaU0E5SUhOMFlYUmxXMnRsZVYwN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUhOM2FYUmphQ0FvYTJWNUtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCallYTmxJQ2RzWlc1bmRHZ25PbHh1SUNBZ0lDQWdJQ0FnSUNBZ1kyRnpaU0FuYzNCaFkybHVaeWM2WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYUdGelJHRnphRUZ5Y21GNUlEMGdkSEoxWlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCa1lYTm9RWEp5WVhsVGRIbHNaWE5iYTJWNVhTQTlJSEJsY21ObGJuUlViMUJwZUdWc2N5aDJZV3gxWlN3Z2JHVnVaM1JvS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCaWNtVmhhenRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTmhjMlVnSjI5bVpuTmxkQ2M2WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYzNSNWJHVnpXeWR6ZEhKdmEyVXRaR0Z6YUc5bVpuTmxkQ2RkSUQwZ2NHVnlZMlZ1ZEZSdlVHbDRaV3h6S0MxMllXeDFaU3dnYkdWdVozUm9LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JpY21WaGF6dGNiaUFnSUNBZ0lDQWdJQ0FnSUdSbFptRjFiSFE2WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYzNSNWJHVnpXMnRsZVYwZ1BTQjJZV3gxWlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJR2xtSUNob1lYTkVZWE5vUVhKeVlYa3BJSHRjYmlBZ0lDQWdJQ0FnYzNSNWJHVnpXeWR6ZEhKdmEyVXRaR0Z6YUdGeWNtRjVKMTBnUFNCa1lYTm9RWEp5WVhsVGRIbHNaWE11YkdWdVozUm9JQ3NnSnlBbklDc2daR0Z6YUVGeWNtRjVVM1I1YkdWekxuTndZV05wYm1jN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WMGRYSnVJSE4wZVd4bGN6dGNibjBpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9zdmctcGF0aC9idWlsZC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfYWxwaGEgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9hbHBoYScpO1xuXG52YXIgX2FscGhhMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FscGhhKTtcblxudmFyIF9heGVzID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvYXhlcycpO1xuXG52YXIgX2F4ZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXhlcyk7XG5cbnZhciBfY29sb3IgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9jb2xvcicpO1xuXG52YXIgX2NvbG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbG9yKTtcblxudmFyIF9jb21wbGV4ID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvY29tcGxleCcpO1xuXG52YXIgX2NvbXBsZXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcGxleCk7XG5cbnZhciBfc2NhbGUgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9zY2FsZScpO1xuXG52YXIgX3NjYWxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NjYWxlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGZpbGw6IF9jb2xvcjIuZGVmYXVsdCxcbiAgICBzdHJva2U6IF9jb2xvcjIuZGVmYXVsdCxcbiAgICBzY2FsZTogX3NjYWxlMi5kZWZhdWx0LFxuICAgIHNjYWxlWDogX3NjYWxlMi5kZWZhdWx0LFxuICAgIHNjYWxlWTogX3NjYWxlMi5kZWZhdWx0LFxuICAgIHRyYW5zZm9ybU9yaWdpbjogX2F4ZXMyLmRlZmF1bHQsXG4gICAgZDogX2NvbXBsZXgyLmRlZmF1bHQsXG4gICAgcG9pbnRzOiBfY29tcGxleDIuZGVmYXVsdCxcbiAgICBvcGFjaXR5OiBfYWxwaGEyLmRlZmF1bHQsXG4gICAgZmlsbE9wYWNpdHk6IF9hbHBoYTIuZGVmYXVsdCxcbiAgICBzdHJva2VPcGFjaXR5OiBfYWxwaGEyLmRlZmF1bHRcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwzTjJaeTkyWVd4MVpTMTBlWEJsTFcxaGNDNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096dHJRa0ZOWlR0QlFVTllMSGxDUVVSWE8wRkJSVmdzTWtKQlJsYzdRVUZIV0N3d1FrRklWenRCUVVsWUxESkNRVXBYTzBGQlMxZ3NNa0pCVEZjN1FVRk5XQ3h0UTBGT1Z6dEJRVTlZTEhkQ1FWQlhPMEZCVVZnc05rSkJVbGM3UVVGVFdDdzBRa0ZVVnp0QlFWVllMR2REUVZaWE8wRkJWMWdzYTBOQldGY2lMQ0ptYVd4bElqb2lkbUZzZFdVdGRIbHdaUzF0WVhBdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUXZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElHRnNjR2hoSUdaeWIyMGdKeTR1THk0dUwzWmhiSFZsTFhSNWNHVnpMMkZzY0doaEp6dGNibWx0Y0c5eWRDQmhlR1Z6SUdaeWIyMGdKeTR1THk0dUwzWmhiSFZsTFhSNWNHVnpMMkY0WlhNbk8xeHVhVzF3YjNKMElHTnZiRzl5SUdaeWIyMGdKeTR1THk0dUwzWmhiSFZsTFhSNWNHVnpMMk52Ykc5eUp6dGNibWx0Y0c5eWRDQmpiMjF3YkdWNElHWnliMjBnSnk0dUx5NHVMM1poYkhWbExYUjVjR1Z6TDJOdmJYQnNaWGduTzF4dWFXMXdiM0owSUhOallXeGxJR1p5YjIwZ0p5NHVMeTR1TDNaaGJIVmxMWFI1Y0dWekwzTmpZV3hsSnp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2UxeHVJQ0FnSUdacGJHdzZJR052Ykc5eUxGeHVJQ0FnSUhOMGNtOXJaVG9nWTI5c2IzSXNYRzRnSUNBZ2MyTmhiR1U2SUhOallXeGxMRnh1SUNBZ0lITmpZV3hsV0RvZ2MyTmhiR1VzWEc0Z0lDQWdjMk5oYkdWWk9pQnpZMkZzWlN4Y2JpQWdJQ0IwY21GdWMyWnZjbTFQY21sbmFXNDZJR0Y0WlhNc1hHNGdJQ0FnWkRvZ1kyOXRjR3hsZUN4Y2JpQWdJQ0J3YjJsdWRITTZJR052YlhCc1pYZ3NYRzRnSUNBZ2IzQmhZMmwwZVRvZ1lXeHdhR0VzWEc0Z0lDQWdabWxzYkU5d1lXTnBkSGs2SUdGc2NHaGhMRnh1SUNBZ0lITjBjbTlyWlU5d1lXTnBkSGs2SUdGc2NHaGhYRzU5T3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FkYXB0ZXIvc3ZnL3ZhbHVlLXR5cGUtbWFwLmpzXG4gKiogbW9kdWxlIGlkID0gNDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGJ1aWxkO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vLi4vaW5jL3V0aWxzJyk7XG5cbnZhciBfdHJhbnNmb3JtUHJvcHMgPSByZXF1aXJlKCcuLi9jc3MvdHJhbnNmb3JtLXByb3BzJyk7XG5cbnZhciBfdHJhbnNmb3JtUHJvcHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNmb3JtUHJvcHMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgWkVST19OT1RfWkVSTyA9IDAuMDAwMTtcblxuZnVuY3Rpb24gYnVpbGQoc3RhdGUsIG9yaWdpbikge1xuICAgIHZhciBwcm9wcyA9IHt9LFxuICAgICAgICBoYXNUcmFuc2Zvcm0gPSBmYWxzZSxcbiAgICAgICAgc2NhbGUgPSBzdGF0ZS5zY2FsZSAhPT0gdW5kZWZpbmVkID8gc3RhdGUuc2NhbGUgfHwgWkVST19OT1RfWkVSTyA6IHN0YXRlLnNjYWxlWCB8fCAxLFxuICAgICAgICBzY2FsZVkgPSBzdGF0ZS5zY2FsZVkgIT09IHVuZGVmaW5lZCA/IHN0YXRlLnNjYWxlWSB8fCBaRVJPX05PVF9aRVJPIDogc2NhbGUgfHwgMSxcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luWCA9IG9yaWdpbi54LFxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW5ZID0gb3JpZ2luLnksXG4gICAgICAgIHNjYWxlVHJhbnNmb3JtWCA9IC10cmFuc2Zvcm1PcmlnaW5YICogKHNjYWxlICogMSksXG4gICAgICAgIHNjYWxlVHJhbnNmb3JtWSA9IC10cmFuc2Zvcm1PcmlnaW5ZICogKHNjYWxlWSAqIDEpLFxuICAgICAgICBzY2FsZVJlcGxhY2VYID0gdHJhbnNmb3JtT3JpZ2luWCAvIHNjYWxlLFxuICAgICAgICBzY2FsZVJlcGxhY2VZID0gdHJhbnNmb3JtT3JpZ2luWSAvIHNjYWxlWSxcbiAgICAgICAgdHJhbnNmb3JtID0ge1xuICAgICAgICB0cmFuc2xhdGU6ICd0cmFuc2xhdGUoJyArIHN0YXRlLnRyYW5zbGF0ZVggKyAnLCAnICsgc3RhdGUudHJhbnNsYXRlWSArICcpICcsXG4gICAgICAgIHNjYWxlOiAndHJhbnNsYXRlKCcgKyBzY2FsZVRyYW5zZm9ybVggKyAnLCAnICsgc2NhbGVUcmFuc2Zvcm1ZICsgJykgc2NhbGUoJyArIHNjYWxlICsgJywgJyArIHNjYWxlWSArICcpIHRyYW5zbGF0ZSgnICsgc2NhbGVSZXBsYWNlWCArICcsICcgKyBzY2FsZVJlcGxhY2VZICsgJykgJyxcbiAgICAgICAgcm90YXRlOiAncm90YXRlKCcgKyBzdGF0ZS5yb3RhdGUgKyAnLCAnICsgdHJhbnNmb3JtT3JpZ2luWCArICcsICcgKyB0cmFuc2Zvcm1PcmlnaW5ZICsgJykgJyxcbiAgICAgICAgc2tld1g6ICdza2V3WCgnICsgc3RhdGUuc2tld1ggKyAnKSAnLFxuICAgICAgICBza2V3WTogJ3NrZXdZKCcgKyBzdGF0ZS5za2V3WSArICcpICdcbiAgICB9O1xuXG4gICAgZm9yICh2YXIga2V5IGluIHN0YXRlKSB7XG4gICAgICAgIGlmIChzdGF0ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICBpZiAoX3RyYW5zZm9ybVByb3BzMi5kZWZhdWx0W2tleV0pIHtcbiAgICAgICAgICAgICAgICBoYXNUcmFuc2Zvcm0gPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcm9wc1soMCwgX3V0aWxzLmNhbWVsVG9EYXNoKShrZXkpXSA9IHN0YXRlW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaGFzVHJhbnNmb3JtKSB7XG4gICAgICAgIHByb3BzLnRyYW5zZm9ybSA9ICcnO1xuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiB0cmFuc2Zvcm0pIHtcbiAgICAgICAgICAgIGlmICh0cmFuc2Zvcm0uaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHZhciBkZWZhdWx0VmFsdWUgPSBrZXkgPT09ICdzY2FsZScgPyAnMScgOiAnMCc7XG4gICAgICAgICAgICAgICAgcHJvcHMudHJhbnNmb3JtICs9IHRyYW5zZm9ybVtrZXldLnJlcGxhY2UoL3VuZGVmaW5lZC9nLCBkZWZhdWx0VmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BzO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMM04yWnk5aWRXbHNaQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN2EwSkJTM2RDT3pzN096czdPenM3TzBGQlJuaENMRWxCUVUwc1owSkJRV2RDTEUxQlFXaENPenRCUVVWVExGTkJRVk1zUzBGQlZDeERRVUZsTEV0QlFXWXNSVUZCYzBJc1RVRkJkRUlzUlVGQk9FSTdRVUZEZWtNc1VVRkJTU3hSUVVGUkxFVkJRVkk3VVVGRFFTeGxRVUZsTEV0QlFXWTdVVUZEUVN4UlFVRlJMRTFCUVUwc1MwRkJUaXhMUVVGblFpeFRRVUZvUWl4SFFVRTBRaXhOUVVGTkxFdEJRVTRzU1VGQlpTeGhRVUZtTEVkQlFTdENMRTFCUVUwc1RVRkJUaXhKUVVGblFpeERRVUZvUWp0UlFVTnVSU3hUUVVGVExFMUJRVTBzVFVGQlRpeExRVUZwUWl4VFFVRnFRaXhIUVVFMlFpeE5RVUZOTEUxQlFVNHNTVUZCWjBJc1lVRkJhRUlzUjBGQlowTXNVMEZCVXl4RFFVRlVPMUZCUTNSRkxHMUNRVUZ0UWl4UFFVRlBMRU5CUVZBN1VVRkRia0lzYlVKQlFXMUNMRTlCUVU4c1EwRkJVRHRSUVVOdVFpeHJRa0ZCYTBJc1EwRkJSU3huUWtGQlJpeEpRVUZ6UWl4UlFVRlJMRU5CUVZJc1EwRkJkRUk3VVVGRGJFSXNhMEpCUVd0Q0xFTkJRVVVzWjBKQlFVWXNTVUZCYzBJc1UwRkJVeXhEUVVGVUxFTkJRWFJDTzFGQlEyeENMR2RDUVVGblFpeHRRa0ZCYlVJc1MwRkJia0k3VVVGRGFFSXNaMEpCUVdkQ0xHMUNRVUZ0UWl4TlFVRnVRanRSUVVOb1FpeFpRVUZaTzBGQlExSXNhME5CUVhkQ0xFMUJRVTBzVlVGQlRpeFZRVUZ4UWl4TlFVRk5MRlZCUVU0c1QwRkJOME03UVVGRFFTdzRRa0ZCYjBJc2VVSkJRVzlDTEN0Q1FVRXdRaXhsUVVGVkxEQkNRVUZ4UWl4MVFrRkJhMElzYjBKQlFXNUlPMEZCUTBFc05FSkJRV3RDTEUxQlFVMHNUVUZCVGl4VlFVRnBRaXd3UWtGQmNVSXNkVUpCUVhoRU8wRkJRMEVzTUVKQlFXZENMRTFCUVUwc1MwRkJUaXhQUVVGb1FqdEJRVU5CTERCQ1FVRm5RaXhOUVVGTkxFdEJRVTRzVDBGQmFFSTdTMEZNU2l4RFFWaHhRenM3UVVGdFFucERMRk5CUVVzc1NVRkJTU3hIUVVGS0xFbEJRVmNzUzBGQmFFSXNSVUZCZFVJN1FVRkRia0lzV1VGQlNTeE5RVUZOTEdOQlFVNHNRMEZCY1VJc1IwRkJja0lzUTBGQlNpeEZRVUVyUWp0QlFVTXpRaXhuUWtGQlNTeDVRa0ZCWlN4SFFVRm1MRU5CUVVvc1JVRkJlVUk3UVVGRGNrSXNLMEpCUVdVc1NVRkJaaXhEUVVSeFFqdGhRVUY2UWl4TlFVVlBPMEZCUTBnc2MwSkJRVTBzZDBKQlFWa3NSMEZCV2l4RFFVRk9MRWxCUVRCQ0xFMUJRVTBzUjBGQlRpeERRVUV4UWl4RFFVUkhPMkZCUmxBN1UwRkVTanRMUVVSS096dEJRVlZCTEZGQlFVa3NXVUZCU2l4RlFVRnJRanRCUVVOa0xHTkJRVTBzVTBGQlRpeEhRVUZyUWl4RlFVRnNRaXhEUVVSak96dEJRVWRrTEdGQlFVc3NTVUZCU1N4SFFVRktMRWxCUVZjc1UwRkJhRUlzUlVGQk1rSTdRVUZEZGtJc1owSkJRVWtzVlVGQlZTeGpRVUZXTEVOQlFYbENMRWRCUVhwQ0xFTkJRVW9zUlVGQmJVTTdRVUZETDBJc2IwSkJRVTBzWlVGQlpTeEhRVUZETEV0QlFWRXNUMEZCVWl4SFFVRnRRaXhIUVVGd1FpeEhRVUV3UWl4SFFVRXhRaXhEUVVSVk8wRkJSUzlDTEhOQ1FVRk5MRk5CUVU0c1NVRkJiVUlzVlVGQlZTeEhRVUZXTEVWQlFXVXNUMEZCWml4RFFVRjFRaXhaUVVGMlFpeEZRVUZ4UXl4WlFVRnlReXhEUVVGdVFpeERRVVlyUWp0aFFVRnVRenRUUVVSS08wdEJTRW83TzBGQlYwRXNWMEZCVHl4TFFVRlFMRU5CZUVONVF6dERRVUU1UWlJc0ltWnBiR1VpT2lKaWRXbHNaQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZXlCallXMWxiRlJ2UkdGemFDQjlJR1p5YjIwZ0p5NHVMeTR1TDJsdVl5OTFkR2xzY3ljN1hHNXBiWEJ2Y25RZ2RISmhibk5tYjNKdFVISnZjSE1nWm5KdmJTQW5MaTR2WTNOekwzUnlZVzV6Wm05eWJTMXdjbTl3Y3ljN1hHNWNibU52Ym5OMElGcEZVazlmVGs5VVgxcEZVazhnUFNBd0xqQXdNREU3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdaMWJtTjBhVzl1SUdKMWFXeGtLSE4wWVhSbExDQnZjbWxuYVc0cElIdGNiaUFnSUNCc1pYUWdjSEp2Y0hNZ1BTQjdmU3hjYmlBZ0lDQWdJQ0FnYUdGelZISmhibk5tYjNKdElEMGdabUZzYzJVc1hHNGdJQ0FnSUNBZ0lITmpZV3hsSUQwZ2MzUmhkR1V1YzJOaGJHVWdJVDA5SUhWdVpHVm1hVzVsWkNBL0lITjBZWFJsTG5OallXeGxJSHg4SUZwRlVrOWZUazlVWDFwRlVrOGdPaUJ6ZEdGMFpTNXpZMkZzWlZnZ2ZId2dNU3hjYmlBZ0lDQWdJQ0FnYzJOaGJHVlpJRDBnYzNSaGRHVXVjMk5oYkdWWklDRTlQU0IxYm1SbFptbHVaV1FnUHlCemRHRjBaUzV6WTJGc1pWa2dmSHdnV2tWU1QxOU9UMVJmV2tWU1R5QTZJSE5qWVd4bElIeDhJREVzWEc0Z0lDQWdJQ0FnSUhSeVlXNXpabTl5YlU5eWFXZHBibGdnUFNCdmNtbG5hVzR1ZUN4Y2JpQWdJQ0FnSUNBZ2RISmhibk5tYjNKdFQzSnBaMmx1V1NBOUlHOXlhV2RwYmk1NUxGeHVJQ0FnSUNBZ0lDQnpZMkZzWlZSeVlXNXpabTl5YlZnZ1BTQXRJSFJ5WVc1elptOXliVTl5YVdkcGJsZ2dLaUFvYzJOaGJHVWdLaUF4S1N4Y2JpQWdJQ0FnSUNBZ2MyTmhiR1ZVY21GdWMyWnZjbTFaSUQwZ0xTQjBjbUZ1YzJadmNtMVBjbWxuYVc1WklDb2dLSE5qWVd4bFdTQXFJREVwTEZ4dUlDQWdJQ0FnSUNCelkyRnNaVkpsY0d4aFkyVllJRDBnZEhKaGJuTm1iM0p0VDNKcFoybHVXQ0F2SUhOallXeGxMRnh1SUNBZ0lDQWdJQ0J6WTJGc1pWSmxjR3hoWTJWWklEMGdkSEpoYm5ObWIzSnRUM0pwWjJsdVdTQXZJSE5qWVd4bFdTeGNiaUFnSUNBZ0lDQWdkSEpoYm5ObWIzSnRJRDBnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkSEpoYm5Oc1lYUmxPaUJnZEhKaGJuTnNZWFJsS0NSN2MzUmhkR1V1ZEhKaGJuTnNZWFJsV0gwc0lDUjdjM1JoZEdVdWRISmhibk5zWVhSbFdYMHBJR0FzWEc0Z0lDQWdJQ0FnSUNBZ0lDQnpZMkZzWlRvZ1lIUnlZVzV6YkdGMFpTZ2tlM05qWVd4bFZISmhibk5tYjNKdFdIMHNJQ1I3YzJOaGJHVlVjbUZ1YzJadmNtMVpmU2tnYzJOaGJHVW9KSHR6WTJGc1pYMHNJQ1I3YzJOaGJHVlpmU2tnZEhKaGJuTnNZWFJsS0NSN2MyTmhiR1ZTWlhCc1lXTmxXSDBzSUNSN2MyTmhiR1ZTWlhCc1lXTmxXWDBwSUdBc1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5YjNSaGRHVTZJR0J5YjNSaGRHVW9KSHR6ZEdGMFpTNXliM1JoZEdWOUxDQWtlM1J5WVc1elptOXliVTl5YVdkcGJsaDlMQ0FrZTNSeVlXNXpabTl5YlU5eWFXZHBibGw5S1NCZ0xGeHVJQ0FnSUNBZ0lDQWdJQ0FnYzJ0bGQxZzZJR0J6YTJWM1dDZ2tlM04wWVhSbExuTnJaWGRZZlNrZ1lDeGNiaUFnSUNBZ0lDQWdJQ0FnSUhOclpYZFpPaUJnYzJ0bGQxa29KSHR6ZEdGMFpTNXphMlYzV1gwcElHQmNiaUFnSUNBZ0lDQWdmVHRjYmx4dUlDQWdJR1p2Y2lBb2JHVjBJR3RsZVNCcGJpQnpkR0YwWlNrZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvYzNSaGRHVXVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2EyVjVLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0hSeVlXNXpabTl5YlZCeWIzQnpXMnRsZVYwcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQm9ZWE5VY21GdWMyWnZjbTBnUFNCMGNuVmxPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCd2NtOXdjMXRqWVcxbGJGUnZSR0Z6YUNoclpYa3BYU0E5SUhOMFlYUmxXMnRsZVYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0JwWmlBb2FHRnpWSEpoYm5ObWIzSnRLU0I3WEc0Z0lDQWdJQ0FnSUhCeWIzQnpMblJ5WVc1elptOXliU0E5SUNjbk8xeHVYRzRnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR3RsZVNCcGJpQjBjbUZ1YzJadmNtMHBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2gwY21GdWMyWnZjbTB1YUdGelQzZHVVSEp2Y0dWeWRIa29hMlY1S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUdSbFptRjFiSFJXWVd4MVpTQTlJQ2hyWlhrZ1BUMDlJQ2R6WTJGc1pTY3BJRDhnSnpFbklEb2dKekFuTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhCeWIzQnpMblJ5WVc1elptOXliU0FyUFNCMGNtRnVjMlp2Y20xYmEyVjVYUzV5WlhCc1lXTmxLQzkxYm1SbFptbHVaV1F2Wnl3Z1pHVm1ZWFZzZEZaaGJIVmxLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lISmxkSFZ5YmlCd2NtOXdjenRjYm4waVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FkYXB0ZXIvc3ZnL2J1aWxkLmpzXG4gKiogbW9kdWxlIGlkID0gNDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciByZ2IgPSBleHBvcnRzLnJnYiA9IHtcbiAgICBtaW46IDAsXG4gICAgbWF4OiAyNTUsXG4gICAgcm91bmQ6IHRydWVcbn07XG5cbnZhciBvcGFjaXR5ID0gZXhwb3J0cy5vcGFjaXR5ID0ge1xuICAgIG1pbjogMCxcbiAgICBtYXg6IDFcbn07XG5cbnZhciBwZXJjZW50ID0gZXhwb3J0cy5wZXJjZW50ID0ge1xuICAgIG1pbjogMCxcbiAgICBtYXg6IDEwMCxcbiAgICB1bml0OiAnJSdcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTl6WlhSMGFXNW5jeTlrWldaaGRXeDBMWEJ5YjNCekxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenRCUVVGUExFbEJRVTBzYjBKQlFVMDdRVUZEWml4VFFVRkxMRU5CUVV3N1FVRkRRU3hUUVVGTExFZEJRVXc3UVVGRFFTeFhRVUZQTEVsQlFWQTdRMEZJVXpzN1FVRk5UaXhKUVVGTkxEUkNRVUZWTzBGQlEyNUNMRk5CUVVzc1EwRkJURHRCUVVOQkxGTkJRVXNzUTBGQlREdERRVVpUT3p0QlFVdE9MRWxCUVUwc05FSkJRVlU3UVVGRGJrSXNVMEZCU3l4RFFVRk1PMEZCUTBFc1UwRkJTeXhIUVVGTU8wRkJRMEVzVlVGQlRTeEhRVUZPTzBOQlNGTWlMQ0ptYVd4bElqb2laR1ZtWVhWc2RDMXdjbTl3Y3k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRDOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SmxlSEJ2Y25RZ1kyOXVjM1FnY21kaUlEMGdlMXh1SUNBZ0lHMXBiam9nTUN4Y2JpQWdJQ0J0WVhnNklESTFOU3hjYmlBZ0lDQnliM1Z1WkRvZ2RISjFaVnh1ZlR0Y2JseHVaWGh3YjNKMElHTnZibk4wSUc5d1lXTnBkSGtnUFNCN1hHNGdJQ0FnYldsdU9pQXdMRnh1SUNBZ0lHMWhlRG9nTVZ4dWZUdGNibHh1Wlhod2IzSjBJR052Ym5OMElIQmxjbU5sYm5RZ1BTQjdYRzRnSUNBZ2JXbHVPaUF3TEZ4dUlDQWdJRzFoZURvZ01UQXdMRnh1SUNBZ0lIVnVhWFE2SUNjbEoxeHVmVHNpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvc2V0dGluZ3MvZGVmYXVsdC1wcm9wcy5qc1xuICoqIG1vZHVsZSBpZCA9IDQ5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgWCA9ICdYJztcbnZhciBZID0gJ1knO1xudmFyIEFMUEhBID0gJ0FscGhhJztcblxudmFyIGF4ZXMgPSBleHBvcnRzLmF4ZXMgPSBbWCwgWSwgJ1onXTtcbnZhciByZ2IgPSBleHBvcnRzLnJnYiA9IFsnUmVkJywgJ0dyZWVuJywgJ0JsdWUnLCBBTFBIQV07XG52YXIgaHNsID0gZXhwb3J0cy5oc2wgPSBbJ0h1ZScsICdTYXR1cmF0aW9uJywgJ0xpZ2h0bmVzcycsIEFMUEhBXTtcbnZhciBwb3NpdGlvbnMgPSBleHBvcnRzLnBvc2l0aW9ucyA9IFsnVG9wJywgJ1JpZ2h0JywgJ0JvdHRvbScsICdMZWZ0J107XG52YXIgc2hhZG93ID0gZXhwb3J0cy5zaGFkb3cgPSBbWCwgWSwgJ1JhZGl1cycsICdTcHJlYWQnLCAnQ29sb3InXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OXpaWFIwYVc1bmN5OWthV04wYVc5dVlYSjVMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3p0QlFVRkJMRWxCUVUwc1NVRkJTU3hIUVVGS08wRkJRMDRzU1VGQlRTeEpRVUZKTEVkQlFVbzdRVUZEVGl4SlFVRk5MRkZCUVZFc1QwRkJVanM3UVVGRlF5eEpRVUZOTEhOQ1FVRlBMRU5CUVVNc1EwRkJSQ3hGUVVGSkxFTkJRVW9zUlVGQlR5eEhRVUZRTEVOQlFWQTdRVUZEVGl4SlFVRk5MRzlDUVVGTkxFTkJRVU1zUzBGQlJDeEZRVUZSTEU5QlFWSXNSVUZCYVVJc1RVRkJha0lzUlVGQmVVSXNTMEZCZWtJc1EwRkJUanRCUVVOT0xFbEJRVTBzYjBKQlFVMHNRMEZCUXl4TFFVRkVMRVZCUVZFc1dVRkJVaXhGUVVGelFpeFhRVUYwUWl4RlFVRnRReXhMUVVGdVF5eERRVUZPTzBGQlEwNHNTVUZCVFN4blEwRkJXU3hEUVVGRExFdEJRVVFzUlVGQlVTeFBRVUZTTEVWQlFXbENMRkZCUVdwQ0xFVkJRVEpDTEUxQlFUTkNMRU5CUVZvN1FVRkRUaXhKUVVGTkxEQkNRVUZUTEVOQlFVTXNRMEZCUkN4RlFVRkpMRU5CUVVvc1JVRkJUeXhSUVVGUUxFVkJRV2xDTEZGQlFXcENMRVZCUVRKQ0xFOUJRVE5DTEVOQlFWUWlMQ0ptYVd4bElqb2laR2xqZEdsdmJtRnllUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKamIyNXpkQ0JZSUQwZ0oxZ25PMXh1WTI5dWMzUWdXU0E5SUNkWkp6dGNibU52Ym5OMElFRk1VRWhCSUQwZ0owRnNjR2hoSnp0Y2JseHVaWGh3YjNKMElHTnZibk4wSUdGNFpYTWdQU0JiV0N3Z1dTd2dKMW9uWFR0Y2JtVjRjRzl5ZENCamIyNXpkQ0J5WjJJZ1BTQmJKMUpsWkNjc0lDZEhjbVZsYmljc0lDZENiSFZsSnl3Z1FVeFFTRUZkTzF4dVpYaHdiM0owSUdOdmJuTjBJR2h6YkNBOUlGc25TSFZsSnl3Z0oxTmhkSFZ5WVhScGIyNG5MQ0FuVEdsbmFIUnVaWE56Snl3Z1FVeFFTRUZkTzF4dVpYaHdiM0owSUdOdmJuTjBJSEJ2YzJsMGFXOXVjeUE5SUZzblZHOXdKeXdnSjFKcFoyaDBKeXdnSjBKdmRIUnZiU2NzSUNkTVpXWjBKMTA3WEc1bGVIQnZjblFnWTI5dWMzUWdjMmhoWkc5M0lEMGdXMWdzSUZrc0lDZFNZV1JwZFhNbkxDQW5VM0J5WldGa0p5d2dKME52Ykc5eUoxMDdJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kaWN0aW9uYXJ5LmpzXG4gKiogbW9kdWxlIGlkID0gNTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlRWFzaW5nRnVuY3Rpb247XG4vKlxuICAgIE1pcnJvciBlYXNpbmdcbiAgICBcbiAgICBNaXJyb3JzIHRoZSBwcm92aWRlZCBlYXNpbmcgZnVuY3Rpb24sIHVzZWQgaGVyZSBmb3IgbWlycm9yaW5nIGFuXG4gICAgZWFzZUluIGludG8gYW4gZWFzZUluT3V0XG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcywgZnJvbSAwIC0gMSwgb2YgY3VycmVudCBzaGlmdFxuICAgIEBwYXJhbSBbZnVuY3Rpb25dOiBUaGUgZWFzaW5nIGZ1bmN0aW9uIHRvIG1pcnJvclxuICAgIEByZXR1cm5zIFtudW1iZXJdOiBUaGUgZWFzaW5nLWFkanVzdGVkIGRlbHRhXG4qL1xudmFyIG1pcnJvckVhc2luZyA9IGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHByb2dyZXNzLCBzdHJlbmd0aCkge1xuICAgICAgICByZXR1cm4gcHJvZ3Jlc3MgPD0gMC41ID8gbWV0aG9kKDIgKiBwcm9ncmVzcywgc3RyZW5ndGgpIC8gMiA6ICgyIC0gbWV0aG9kKDIgKiAoMSAtIHByb2dyZXNzKSwgc3RyZW5ndGgpKSAvIDI7XG4gICAgfTtcbn07XG5cbi8qXG4gICAgUmV2ZXJzZSBlYXNpbmdcbiAgICBcbiAgICBSZXZlcnNlcyB0aGUgb3V0cHV0IG9mIHRoZSBwcm92aWRlZCBlYXNpbmcgZnVuY3Rpb24sIHVzZWQgZm9yIGZsaXBwaW5nIGVhc2VJblxuICAgIGN1cnZlIHRvIGFuIGVhc2VPdXQuXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcywgZnJvbSAwIC0gMSwgb2YgY3VycmVudCBzaGlmdFxuICAgIEBwYXJhbSBbZnVuY3Rpb25dOiBUaGUgZWFzaW5nIGZ1bmN0aW9uIHRvIHJldmVyc2VcbiAgICBAcmV0dXJucyBbbnVtYmVyXTogVGhlIGVhc2luZy1hZGp1c3RlZCBkZWx0YVxuKi9cbnZhciByZXZlcnNlRWFzaW5nID0gZnVuY3Rpb24gKG1ldGhvZCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAocHJvZ3Jlc3MsIHN0cmVuZ3RoKSB7XG4gICAgICAgIHJldHVybiAxIC0gbWV0aG9kKDEgLSBwcm9ncmVzcywgc3RyZW5ndGgpO1xuICAgIH07XG59O1xuXG4vKlxuICAgIEVhc2luZyBjbGFzc1xuXG4gICAgSWYgcHJvdmlkZWQgZWFzaW5nIGZ1bmN0aW9uLCByZXR1cm5zIGVhc2luZyBmdW5jdGlvbiB3aXRoIFxuICAgIGluL291dC9pbk91dCB2YXJpYXRpb25zXG5cbiAgICBJZiBwcm92aWRlZCBmb3VyIGFyZ3VtZW50cywgcmV0dXJucyBuZXcgQmV6aWVyIGNsYXNzIGluc3RlYWQuXG4qL1xuZnVuY3Rpb24gY3JlYXRlRWFzaW5nRnVuY3Rpb24obWV0aG9kKSB7XG4gICAgdmFyIGVhc2luZ0Z1bmN0aW9uID0gZnVuY3Rpb24gKHByb2dyZXNzLCBzdHJlbmd0aCkge1xuICAgICAgICByZXR1cm4gbWV0aG9kKHByb2dyZXNzLCBzdHJlbmd0aCk7XG4gICAgfTtcblxuICAgIGVhc2luZ0Z1bmN0aW9uLmluID0gZnVuY3Rpb24gKHByb2dyZXNzLCBzdHJlbmd0aCkge1xuICAgICAgICByZXR1cm4gbWV0aG9kKHByb2dyZXNzLCBzdHJlbmd0aCk7XG4gICAgfTtcbiAgICBlYXNpbmdGdW5jdGlvbi5vdXQgPSByZXZlcnNlRWFzaW5nKG1ldGhvZCk7XG4gICAgZWFzaW5nRnVuY3Rpb24uaW5PdXQgPSBtaXJyb3JFYXNpbmcobWV0aG9kKTtcblxuICAgIHJldHVybiBlYXNpbmdGdW5jdGlvbjtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDJWaGMybHVaeTlqY21WaGRHVXRaV0Z6YVc1bkxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenRyUWtGblEzZENPenM3T3pzN096czdPenRCUVhSQ2VFSXNTVUZCVFN4bFFVRmxMRlZCUVVNc1RVRkJSRHRYUVVGWkxGVkJRVU1zVVVGQlJDeEZRVUZYTEZGQlFWZzdaVUZCZDBJc1VVRkJReXhKUVVGWkxFZEJRVm9zUjBGQmJVSXNUMEZCVHl4SlFVRkpMRkZCUVVvc1JVRkJZeXhSUVVGeVFpeEpRVUZwUXl4RFFVRnFReXhIUVVGeFF5eERRVUZETEVsQlFVa3NUMEZCVHl4TFFVRkxMRWxCUVVrc1VVRkJTaXhEUVVGTUxFVkJRVzlDTEZGQlFUTkNMRU5CUVVvc1EwRkJSQ3hIUVVFMlF5eERRVUUzUXp0TFFVRnFSanREUVVGYU96czdPenM3T3pzN096czdRVUZaY2tJc1NVRkJUU3huUWtGQlowSXNWVUZCUXl4TlFVRkVPMWRCUVZrc1ZVRkJReXhSUVVGRUxFVkJRVmNzVVVGQldEdGxRVUYzUWl4SlFVRkpMRTlCUVU4c1NVRkJTU3hSUVVGS0xFVkJRV01zVVVGQmNrSXNRMEZCU2p0TFFVRjRRanREUVVGYU96czdPenM3T3pzN08wRkJWVkFzVTBGQlV5eHZRa0ZCVkN4RFFVRTRRaXhOUVVFNVFpeEZRVUZ6UXp0QlFVTnFSQ3hSUVVGSkxHbENRVUZwUWl4VlFVRkRMRkZCUVVRc1JVRkJWeXhSUVVGWU8yVkJRWGRDTEU5QlFVOHNVVUZCVUN4RlFVRnBRaXhSUVVGcVFqdExRVUY0UWl4RFFVUTBRanM3UVVGSGFrUXNiVUpCUVdVc1JVRkJaaXhIUVVGdlFpeFZRVUZETEZGQlFVUXNSVUZCVnl4UlFVRllPMlZCUVhkQ0xFOUJRVThzVVVGQlVDeEZRVUZwUWl4UlFVRnFRanRMUVVGNFFpeERRVWcyUWp0QlFVbHFSQ3h0UWtGQlpTeEhRVUZtTEVkQlFYRkNMR05CUVdNc1RVRkJaQ3hEUVVGeVFpeERRVXBwUkR0QlFVdHFSQ3h0UWtGQlpTeExRVUZtTEVkQlFYVkNMR0ZCUVdFc1RVRkJZaXhEUVVGMlFpeERRVXhwUkRzN1FVRlBha1FzVjBGQlR5eGpRVUZRTEVOQlVHbEVPME5CUVhSRElpd2labWxzWlNJNkltTnlaV0YwWlMxbFlYTnBibWN1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUx5cGNiaUFnSUNCTmFYSnliM0lnWldGemFXNW5YRzRnSUNBZ1hHNGdJQ0FnVFdseWNtOXljeUIwYUdVZ2NISnZkbWxrWldRZ1pXRnphVzVuSUdaMWJtTjBhVzl1TENCMWMyVmtJR2hsY21VZ1ptOXlJRzFwY25KdmNtbHVaeUJoYmx4dUlDQWdJR1ZoYzJWSmJpQnBiblJ2SUdGdUlHVmhjMlZKYms5MWRGeHVJQ0FnSUZ4dUlDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dVSEp2WjNKbGMzTXNJR1p5YjIwZ01DQXRJREVzSUc5bUlHTjFjbkpsYm5RZ2MyaHBablJjYmlBZ0lDQkFjR0Z5WVcwZ1cyWjFibU4wYVc5dVhUb2dWR2hsSUdWaGMybHVaeUJtZFc1amRHbHZiaUIwYnlCdGFYSnliM0pjYmlBZ0lDQkFjbVYwZFhKdWN5QmJiblZ0WW1WeVhUb2dWR2hsSUdWaGMybHVaeTFoWkdwMWMzUmxaQ0JrWld4MFlWeHVLaTljYm1OdmJuTjBJRzFwY25KdmNrVmhjMmx1WnlBOUlDaHRaWFJvYjJRcElEMCtJQ2h3Y205bmNtVnpjeXdnYzNSeVpXNW5kR2dwSUQwK0lDaHdjbTluY21WemN5QThQU0F3TGpVcElEOGdiV1YwYUc5a0tESWdLaUJ3Y205bmNtVnpjeXdnYzNSeVpXNW5kR2dwSUM4Z01pQTZJQ2d5SUMwZ2JXVjBhRzlrS0RJZ0tpQW9NU0F0SUhCeWIyZHlaWE56S1N3Z2MzUnlaVzVuZEdncEtTQXZJREk3WEc0Z0lDQWdJQ0FnSUZ4dUx5cGNiaUFnSUNCU1pYWmxjbk5sSUdWaGMybHVaMXh1SUNBZ0lGeHVJQ0FnSUZKbGRtVnljMlZ6SUhSb1pTQnZkWFJ3ZFhRZ2IyWWdkR2hsSUhCeWIzWnBaR1ZrSUdWaGMybHVaeUJtZFc1amRHbHZiaXdnZFhObFpDQm1iM0lnWm14cGNIQnBibWNnWldGelpVbHVYRzRnSUNBZ1kzVnlkbVVnZEc4Z1lXNGdaV0Z6WlU5MWRDNWNiaUFnSUNCY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRkJ5YjJkeVpYTnpMQ0JtY205dElEQWdMU0F4TENCdlppQmpkWEp5Wlc1MElITm9hV1owWEc0Z0lDQWdRSEJoY21GdElGdG1kVzVqZEdsdmJsMDZJRlJvWlNCbFlYTnBibWNnWm5WdVkzUnBiMjRnZEc4Z2NtVjJaWEp6WlZ4dUlDQWdJRUJ5WlhSMWNtNXpJRnR1ZFcxaVpYSmRPaUJVYUdVZ1pXRnphVzVuTFdGa2FuVnpkR1ZrSUdSbGJIUmhYRzRxTDF4dVkyOXVjM1FnY21WMlpYSnpaVVZoYzJsdVp5QTlJQ2h0WlhSb2IyUXBJRDArSUNod2NtOW5jbVZ6Y3l3Z2MzUnlaVzVuZEdncElEMCtJREVnTFNCdFpYUm9iMlFvTVNBdElIQnliMmR5WlhOekxDQnpkSEpsYm1kMGFDazdYRzVjYmk4cVhHNGdJQ0FnUldGemFXNW5JR05zWVhOelhHNWNiaUFnSUNCSlppQndjbTkyYVdSbFpDQmxZWE5wYm1jZ1puVnVZM1JwYjI0c0lISmxkSFZ5Ym5NZ1pXRnphVzVuSUdaMWJtTjBhVzl1SUhkcGRHZ2dYRzRnSUNBZ2FXNHZiM1YwTDJsdVQzVjBJSFpoY21saGRHbHZibk5jYmx4dUlDQWdJRWxtSUhCeWIzWnBaR1ZrSUdadmRYSWdZWEpuZFcxbGJuUnpMQ0J5WlhSMWNtNXpJRzVsZHlCQ1pYcHBaWElnWTJ4aGMzTWdhVzV6ZEdWaFpDNWNiaW92WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JtZFc1amRHbHZiaUJqY21WaGRHVkZZWE5wYm1kR2RXNWpkR2x2YmlodFpYUm9iMlFwSUh0Y2JpQWdJQ0JzWlhRZ1pXRnphVzVuUm5WdVkzUnBiMjRnUFNBb2NISnZaM0psYzNNc0lITjBjbVZ1WjNSb0tTQTlQaUJ0WlhSb2IyUW9jSEp2WjNKbGMzTXNJSE4wY21WdVozUm9LVHRjYmx4dUlDQWdJR1ZoYzJsdVowWjFibU4wYVc5dUxtbHVJRDBnS0hCeWIyZHlaWE56TENCemRISmxibWQwYUNrZ1BUNGdiV1YwYUc5a0tIQnliMmR5WlhOekxDQnpkSEpsYm1kMGFDazdYRzRnSUNBZ1pXRnphVzVuUm5WdVkzUnBiMjR1YjNWMElEMGdjbVYyWlhKelpVVmhjMmx1WnlodFpYUm9iMlFwTzF4dUlDQWdJR1ZoYzJsdVowWjFibU4wYVc5dUxtbHVUM1YwSUQwZ2JXbHljbTl5UldGemFXNW5LRzFsZEdodlpDazdYRzVjYmlBZ0lDQnlaWFIxY200Z1pXRnphVzVuUm5WdVkzUnBiMjQ3WEc1OVhHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL2Vhc2luZy9jcmVhdGUtZWFzaW5nLmpzXG4gKiogbW9kdWxlIGlkID0gNTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGN1YmljQmV6aWVyO1xuLypcbiAgICBCZXppZXIgZnVuY3Rpb24gZ2VuZXJhdG9yXG4gICAgICAgIFxuICAgIEdhw6t0YW4gUmVuYXVkZWF1J3MgQmV6aWVyRWFzaW5nXG4gICAgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nL2Jsb2IvbWFzdGVyL2luZGV4LmpzICBcbiAgICBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNpbmcvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICAgIFlvdSdyZSBhIGhlcm9cbiAgICBcbiAgICBVc2VcbiAgICBcbiAgICAgICAgdmFyIGVhc2VPdXQgPSBuZXcgQmV6aWVyKC4xNywuNjcsLjgzLC42NyksXG4gICAgICAgICAgICB4ID0gZWFzZU91dCgwLjUpOyAvLyByZXR1cm5zIDAuNjI3Li4uXG4qL1xuXG4vLyBDb25zdGFudHNcbnZhciBORVdUT05fSVRFUkFUSU9OUyA9IDg7XG52YXIgTkVXVE9OX01JTl9TTE9QRSA9IDAuMDAxO1xudmFyIFNVQkRJVklTSU9OX1BSRUNJU0lPTiA9IDAuMDAwMDAwMTtcbnZhciBTVUJESVZJU0lPTl9NQVhfSVRFUkFUSU9OUyA9IDEwO1xudmFyIEtfU1BMSU5FX1RBQkxFX1NJWkUgPSAxMTtcbnZhciBLX1NBTVBMRV9TVEVQX1NJWkUgPSAxLjAgLyAoS19TUExJTkVfVEFCTEVfU0laRSAtIDEuMCk7XG52YXIgRkxPQVRfMzJfU1VQUE9SVEVEID0gdHlwZW9mIEZsb2F0MzJBcnJheSAhPT0gJ3VuZGVmaW5lZCc7XG5cbi8vIEhlbHBlciBtZXRob2RzXG52YXIgYSA9IGZ1bmN0aW9uIChhMSwgYTIpIHtcbiAgICByZXR1cm4gMS4wIC0gMy4wICogYTIgKyAzLjAgKiBhMTtcbn07XG52YXIgYiA9IGZ1bmN0aW9uIChhMSwgYTIpIHtcbiAgICByZXR1cm4gMy4wICogYTIgLSA2LjAgKiBhMTtcbn07XG52YXIgYyA9IGZ1bmN0aW9uIChhMSkge1xuICAgIHJldHVybiAzLjAgKiBhMTtcbn07XG5cbnZhciBnZXRTbG9wZSA9IGZ1bmN0aW9uICh0LCBhMSwgYTIpIHtcbiAgICByZXR1cm4gMy4wICogYShhMSwgYTIpICogdCAqIHQgKyAyLjAgKiBiKGExLCBhMikgKiB0ICsgYyhhMSk7XG59O1xuXG52YXIgY2FsY0JlemllciA9IGZ1bmN0aW9uICh0LCBhMSwgYTIpIHtcbiAgICByZXR1cm4gKChhKGExLCBhMikgKiB0ICsgYihhMSwgYTIpKSAqIHQgKyBjKGExKSkgKiB0O1xufTtcblxuLypcbiAgICBDcmVhdGUgYSBjdWJpYyBiZXppZXIgcmVzb2x2ZXJcbiovXG5mdW5jdGlvbiBjdWJpY0JlemllcihtWDEsIG1ZMSwgbVgyLCBtWTIpIHtcbiAgICB2YXIgc2FtcGxlVmFsdWVzID0gRkxPQVRfMzJfU1VQUE9SVEVEID8gbmV3IEZsb2F0MzJBcnJheShLX1NQTElORV9UQUJMRV9TSVpFKSA6IG5ldyBBcnJheShLX1NQTElORV9UQUJMRV9TSVpFKTtcbiAgICB2YXIgX3ByZWNvbXB1dGVkID0gZmFsc2U7XG5cbiAgICB2YXIgYmluYXJ5U3ViZGl2aWRlID0gZnVuY3Rpb24gKGFYLCBhQSwgYUIpIHtcbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICB2YXIgY3VycmVudFggPSB1bmRlZmluZWQ7XG4gICAgICAgIHZhciBjdXJyZW50VCA9IHVuZGVmaW5lZDtcblxuICAgICAgICBkbyB7XG4gICAgICAgICAgICBjdXJyZW50VCA9IGFBICsgKGFCIC0gYUEpIC8gMi4wO1xuICAgICAgICAgICAgY3VycmVudFggPSBjYWxjQmV6aWVyKGN1cnJlbnRULCBtWDEsIG1YMikgLSBhWDtcbiAgICAgICAgICAgIGlmIChjdXJyZW50WCA+IDAuMCkge1xuICAgICAgICAgICAgICAgIGFCID0gY3VycmVudFQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFBID0gY3VycmVudFQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gd2hpbGUgKE1hdGguYWJzKGN1cnJlbnRYKSA+IFNVQkRJVklTSU9OX1BSRUNJU0lPTiAmJiArK2kgPCBTVUJESVZJU0lPTl9NQVhfSVRFUkFUSU9OUyk7XG5cbiAgICAgICAgcmV0dXJuIGN1cnJlbnRUO1xuICAgIH07XG5cbiAgICB2YXIgbmV3dG9uUmFwaHNvbkl0ZXJhdGUgPSBmdW5jdGlvbiAoYVgsIGFHdWVzc1QpIHtcbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICB2YXIgY3VycmVudFNsb3BlID0gMDtcbiAgICAgICAgdmFyIGN1cnJlbnRYID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIGZvciAoOyBpIDwgTkVXVE9OX0lURVJBVElPTlM7ICsraSkge1xuICAgICAgICAgICAgY3VycmVudFNsb3BlID0gZ2V0U2xvcGUoYUd1ZXNzVCwgbVgxLCBtWDIpO1xuXG4gICAgICAgICAgICBpZiAoY3VycmVudFNsb3BlID09PSAwLjApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYUd1ZXNzVDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY3VycmVudFggPSBjYWxjQmV6aWVyKGFHdWVzc1QsIG1YMSwgbVgyKSAtIGFYO1xuICAgICAgICAgICAgYUd1ZXNzVCAtPSBjdXJyZW50WCAvIGN1cnJlbnRTbG9wZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhR3Vlc3NUO1xuICAgIH07XG5cbiAgICB2YXIgY2FsY1NhbXBsZVZhbHVlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBLX1NQTElORV9UQUJMRV9TSVpFOyArK2kpIHtcbiAgICAgICAgICAgIHNhbXBsZVZhbHVlc1tpXSA9IGNhbGNCZXppZXIoaSAqIEtfU0FNUExFX1NURVBfU0laRSwgbVgxLCBtWDIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHZhciBnZXRURm9yWCA9IGZ1bmN0aW9uIChhWCkge1xuICAgICAgICB2YXIgaW50ZXJ2YWxTdGFydCA9IDAuMDtcbiAgICAgICAgdmFyIGN1cnJlbnRTYW1wbGUgPSAxO1xuICAgICAgICB2YXIgbGFzdFNhbXBsZSA9IEtfU1BMSU5FX1RBQkxFX1NJWkUgLSAxO1xuICAgICAgICB2YXIgZGlzdCA9IDAuMDtcbiAgICAgICAgdmFyIGd1ZXNzRm9yVCA9IDAuMDtcbiAgICAgICAgdmFyIGluaXRpYWxTbG9wZSA9IDAuMDtcblxuICAgICAgICBmb3IgKDsgY3VycmVudFNhbXBsZSAhPSBsYXN0U2FtcGxlICYmIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSA8PSBhWDsgKytjdXJyZW50U2FtcGxlKSB7XG4gICAgICAgICAgICBpbnRlcnZhbFN0YXJ0ICs9IEtfU0FNUExFX1NURVBfU0laRTtcbiAgICAgICAgfVxuXG4gICAgICAgIC0tY3VycmVudFNhbXBsZTtcblxuICAgICAgICBkaXN0ID0gKGFYIC0gc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdKSAvIChzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZSArIDFdIC0gc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdKTtcbiAgICAgICAgZ3Vlc3NGb3JUID0gaW50ZXJ2YWxTdGFydCArIGRpc3QgKiBLX1NBTVBMRV9TVEVQX1NJWkU7XG5cbiAgICAgICAgaW5pdGlhbFNsb3BlID0gZ2V0U2xvcGUoZ3Vlc3NGb3JULCBtWDEsIG1YMik7XG5cbiAgICAgICAgLy8gSWYgc2xvcGUgaXMgZ3JlYXRlciB0aGFuIG1pblxuICAgICAgICBpZiAoaW5pdGlhbFNsb3BlID49IE5FV1RPTl9NSU5fU0xPUEUpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXd0b25SYXBoc29uSXRlcmF0ZShhWCwgZ3Vlc3NGb3JUKTtcbiAgICAgICAgICAgIC8vIFNsb3BlIGlzIGVxdWFsIHRvIG1pblxuICAgICAgICB9IGVsc2UgaWYgKGluaXRpYWxTbG9wZSA9PT0gMC4wKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGd1ZXNzRm9yVDtcbiAgICAgICAgICAgICAgICAvLyBTbG9wZSBpcyBsZXNzIHRoYW4gbWluXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYmluYXJ5U3ViZGl2aWRlKGFYLCBpbnRlcnZhbFN0YXJ0LCBpbnRlcnZhbFN0YXJ0ICsgS19TQU1QTEVfU1RFUF9TSVpFKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgfTtcblxuICAgIHZhciBwcmVjb21wdXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfcHJlY29tcHV0ZWQgPSB0cnVlO1xuICAgICAgICBpZiAobVgxICE9IG1ZMSB8fCBtWDIgIT0gbVkyKSB7XG4gICAgICAgICAgICBjYWxjU2FtcGxlVmFsdWVzKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIHJlc29sdmVyID0gZnVuY3Rpb24gKGFYKSB7XG4gICAgICAgIHZhciByZXR1cm5WYWx1ZSA9IHVuZGVmaW5lZDtcblxuICAgICAgICBpZiAoIV9wcmVjb21wdXRlZCkge1xuICAgICAgICAgICAgcHJlY29tcHV0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgbGluZWFyIGdyYWRpZW50LCByZXR1cm4gWCBhcyBUXG4gICAgICAgIGlmIChtWDEgPT09IG1ZMSAmJiBtWDIgPT09IG1ZMikge1xuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSBhWDtcblxuICAgICAgICAgICAgLy8gSWYgYXQgc3RhcnQsIHJldHVybiAwXG4gICAgICAgIH0gZWxzZSBpZiAoYVggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IDA7XG5cbiAgICAgICAgICAgICAgICAvLyBJZiBhdCBlbmQsIHJldHVybiAxXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFYID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblZhbHVlID0gMTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IGNhbGNCZXppZXIoZ2V0VEZvclgoYVgpLCBtWTEsIG1ZMik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXR1cm5WYWx1ZTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHJlc29sdmVyO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMlZoYzJsdVp5OWpjbVZoZEdVdFltVjZhV1Z5TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096dHJRa0Z0UTNkQ096czdPenM3T3pzN096czdPenM3TzBGQmNFSjRRaXhKUVVGTkxHOUNRVUZ2UWl4RFFVRndRanRCUVVOT0xFbEJRVTBzYlVKQlFXMUNMRXRCUVc1Q08wRkJRMDRzU1VGQlRTeDNRa0ZCZDBJc1UwRkJlRUk3UVVGRFRpeEpRVUZOTERaQ1FVRTJRaXhGUVVFM1FqdEJRVU5PTEVsQlFVMHNjMEpCUVhOQ0xFVkJRWFJDTzBGQlEwNHNTVUZCVFN4eFFrRkJjVUlzVDBGQlR5eHpRa0ZCYzBJc1IwRkJkRUlzUTBGQlVEdEJRVU16UWl4SlFVRk5MSEZDUVVGelFpeFBRVUZQTEZsQlFWQXNTMEZCZDBJc1YwRkJlRUk3T3p0QlFVYzFRaXhKUVVGTkxFbEJRVWtzVlVGQlF5eEZRVUZFTEVWQlFVc3NSVUZCVER0WFFVRlpMRTFCUVUwc1RVRkJUU3hGUVVGT0xFZEJRVmNzVFVGQlRTeEZRVUZPTzBOQlFUZENPMEZCUTFZc1NVRkJUU3hKUVVGSkxGVkJRVU1zUlVGQlJDeEZRVUZMTEVWQlFVdzdWMEZCV1N4TlFVRk5MRVZCUVU0c1IwRkJWeXhOUVVGTkxFVkJRVTQ3UTBGQmRrSTdRVUZEVml4SlFVRk5MRWxCUVVrc1ZVRkJReXhGUVVGRU8xZEJRVkVzVFVGQlRTeEZRVUZPTzBOQlFWSTdPMEZCUlZZc1NVRkJUU3hYUVVGWExGVkJRVU1zUTBGQlJDeEZRVUZKTEVWQlFVb3NSVUZCVVN4RlFVRlNPMWRCUVdVc1RVRkJUU3hGUVVGRkxFVkJRVVlzUlVGQlRTeEZRVUZPTEVOQlFVNHNSMEZCYTBJc1EwRkJiRUlzUjBGQmMwSXNRMEZCZEVJc1IwRkJNRUlzVFVGQlRTeEZRVUZGTEVWQlFVWXNSVUZCVFN4RlFVRk9MRU5CUVU0c1IwRkJhMElzUTBGQmJFSXNSMEZCYzBJc1JVRkJSU3hGUVVGR0xFTkJRV2hFTzBOQlFXWTdPMEZCUldwQ0xFbEJRVTBzWVVGQllTeFZRVUZETEVOQlFVUXNSVUZCU1N4RlFVRktMRVZCUVZFc1JVRkJVanRYUVVGbExFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVWXNSVUZCVFN4RlFVRk9MRWxCUVZrc1EwRkJXaXhIUVVGblFpeEZRVUZGTEVWQlFVWXNSVUZCVFN4RlFVRk9MRU5CUVdoQ0xFTkJRVVFzUjBGQk9FSXNRMEZCT1VJc1IwRkJhME1zUlVGQlJTeEZRVUZHTEVOQlFXeERMRU5CUVVRc1IwRkJORU1zUTBGQk5VTTdRMEZCWmpzN096czdRVUZMU2l4VFFVRlRMRmRCUVZRc1EwRkJjVUlzUjBGQmNrSXNSVUZCTUVJc1IwRkJNVUlzUlVGQkswSXNSMEZCTDBJc1JVRkJiME1zUjBGQmNFTXNSVUZCZVVNN1FVRkRjRVFzVVVGQlRTeGxRVUZsTEhGQ1FVRnhRaXhKUVVGSkxGbEJRVW9zUTBGQmFVSXNiVUpCUVdwQ0xFTkJRWEpDTEVkQlFUWkVMRWxCUVVrc1MwRkJTaXhEUVVGVkxHMUNRVUZXTEVOQlFUZEVMRU5CUkN0Q08wRkJSWEJFTEZGQlFVa3NaVUZCWlN4TFFVRm1MRU5CUm1kRU96dEJRVWx3UkN4UlFVRk5MR3RDUVVGclFpeFZRVUZETEVWQlFVUXNSVUZCU3l4RlFVRk1MRVZCUVZNc1JVRkJWQ3hGUVVGblFqdEJRVU53UXl4WlFVRkpMRWxCUVVrc1EwRkJTaXhEUVVSblF6dEJRVVZ3UXl4WlFVRkpMRzlDUVVGS0xFTkJSbTlETzBGQlIzQkRMRmxCUVVrc2IwSkJRVW9zUTBGSWIwTTdPMEZCUzNCRExGZEJRVWM3UVVGRFF5eDFRa0ZCVnl4TFFVRkxMRU5CUVVNc1MwRkJTeXhGUVVGTUxFTkJRVVFzUjBGQldTeEhRVUZhTEVOQlJHcENPMEZCUlVNc2RVSkJRVmNzVjBGQlZ5eFJRVUZZTEVWQlFYRkNMRWRCUVhKQ0xFVkJRVEJDTEVkQlFURkNMRWxCUVdsRExFVkJRV3BETEVOQlJsbzdRVUZIUXl4blFrRkJTU3hYUVVGWExFZEJRVmdzUlVGQlowSTdRVUZEYUVJc2NVSkJRVXNzVVVGQlRDeERRVVJuUWp0aFFVRndRaXhOUVVWUE8wRkJRMGdzY1VKQlFVc3NVVUZCVEN4RFFVUkhPMkZCUmxBN1UwRklTaXhSUVZGVExFdEJRVXNzUjBGQlRDeERRVUZUTEZGQlFWUXNTVUZCY1VJc2NVSkJRWEpDTEVsQlFUaERMRVZCUVVVc1EwRkJSaXhIUVVGTkxEQkNRVUZPTEVWQlltNUNPenRCUVdWd1F5eGxRVUZQTEZGQlFWQXNRMEZtYjBNN1MwRkJhRUlzUTBGS05FSTdPMEZCYzBKd1JDeFJRVUZOTEhWQ1FVRjFRaXhWUVVGRExFVkJRVVFzUlVGQlN5eFBRVUZNTEVWQlFXbENPMEZCUXpGRExGbEJRVWtzU1VGQlNTeERRVUZLTEVOQlJITkRPMEZCUlRGRExGbEJRVWtzWlVGQlpTeERRVUZtTEVOQlJuTkRPMEZCUnpGRExGbEJRVWtzYjBKQlFVb3NRMEZJTUVNN08wRkJTekZETEdWQlFVOHNTVUZCU1N4cFFrRkJTaXhGUVVGMVFpeEZRVUZGTEVOQlFVWXNSVUZCU3p0QlFVTXZRaXd5UWtGQlpTeFRRVUZUTEU5QlFWUXNSVUZCYTBJc1IwRkJiRUlzUlVGQmRVSXNSMEZCZGtJc1EwRkJaaXhEUVVRclFqczdRVUZITDBJc1owSkJRVWtzYVVKQlFXbENMRWRCUVdwQ0xFVkJRWE5DTzBGQlEzUkNMSFZDUVVGUExFOUJRVkFzUTBGRWMwSTdZVUZCTVVJN08wRkJTVUVzZFVKQlFWY3NWMEZCVnl4UFFVRllMRVZCUVc5Q0xFZEJRWEJDTEVWQlFYbENMRWRCUVhwQ0xFbEJRV2RETEVWQlFXaERMRU5CVUc5Q08wRkJVUzlDTEhWQ1FVRlhMRmRCUVZjc1dVRkJXQ3hEUVZKdlFqdFRRVUZ1UXpzN1FVRlhRU3hsUVVGUExFOUJRVkFzUTBGb1FqQkRPMHRCUVdwQ0xFTkJkRUoxUWpzN1FVRjVRM0JFTEZGQlFVMHNiVUpCUVcxQ0xGbEJRVTA3UVVGRE0wSXNZVUZCU3l4SlFVRkpMRWxCUVVrc1EwRkJTaXhGUVVGUExFbEJRVWtzYlVKQlFVb3NSVUZCZVVJc1JVRkJSU3hEUVVGR0xFVkJRVXM3UVVGRE1VTXNlVUpCUVdFc1EwRkJZaXhKUVVGclFpeFhRVUZYTEVsQlFVa3NhMEpCUVVvc1JVRkJkMElzUjBGQmJrTXNSVUZCZDBNc1IwRkJlRU1zUTBGQmJFSXNRMEZFTUVNN1UwRkJPVU03UzBGRWNVSXNRMEY2UXpKQ096dEJRU3REY0VRc1VVRkJUU3hYUVVGWExGVkJRVU1zUlVGQlJDeEZRVUZSTzBGQlEzSkNMRmxCUVVrc1owSkJRV2RDTEVkQlFXaENMRU5CUkdsQ08wRkJSWEpDTEZsQlFVa3NaMEpCUVdkQ0xFTkJRV2hDTEVOQlJtbENPMEZCUjNKQ0xGbEJRVWtzWVVGQllTeHpRa0ZCYzBJc1EwRkJkRUlzUTBGSVNUdEJRVWx5UWl4WlFVRkpMRTlCUVU4c1IwRkJVQ3hEUVVwcFFqdEJRVXR5UWl4WlFVRkpMRmxCUVZrc1IwRkJXaXhEUVV4cFFqdEJRVTF5UWl4WlFVRkpMR1ZCUVdVc1IwRkJaaXhEUVU1cFFqczdRVUZSY2tJc1pVRkJUeXhwUWtGQmFVSXNWVUZCYWtJc1NVRkJLMElzWVVGQllTeGhRVUZpTEV0QlFTdENMRVZCUVM5Q0xFVkJRVzFETEVWQlFVVXNZVUZCUml4RlFVRnBRanRCUVVOMFJpdzJRa0ZCYVVJc2EwSkJRV3BDTEVOQlJITkdPMU5CUVRGR096dEJRVWxCTEZWQlFVVXNZVUZCUml4RFFWcHhRanM3UVVGamNrSXNaVUZCVHl4RFFVRkRMRXRCUVVzc1lVRkJZU3hoUVVGaUxFTkJRVXdzUTBGQlJDeEpRVUZ6UXl4aFFVRmhMR2RDUVVGakxFTkJRV1FzUTBGQllpeEhRVUZuUXl4aFFVRmhMR0ZCUVdJc1EwRkJhRU1zUTBGQmRFTXNRMEZrWXp0QlFXVnlRaXh2UWtGQldTeG5Ra0ZCWjBJc1QwRkJUeXhyUWtGQlVDeERRV1pRT3p0QlFXbENja0lzZFVKQlFXVXNVMEZCVXl4VFFVRlVMRVZCUVc5Q0xFZEJRWEJDTEVWQlFYbENMRWRCUVhwQ0xFTkJRV1k3T3p0QlFXcENjVUlzV1VGdlFtcENMR2RDUVVGblFpeG5Ra0ZCYUVJc1JVRkJhME03UVVGRGJFTXNiVUpCUVU4c2NVSkJRWEZDTEVWQlFYSkNMRVZCUVhsQ0xGTkJRWHBDTEVOQlFWQTdPMEZCUkd0RExGTkJRWFJETEUxQlIwOHNTVUZCU1N4cFFrRkJhVUlzUjBGQmFrSXNSVUZCYzBJN1FVRkROMElzZFVKQlFVOHNVMEZCVURzN1FVRkVOa0lzWVVGQk1VSXNUVUZIUVR0QlFVTklMREpDUVVGUExHZENRVUZuUWl4RlFVRm9RaXhGUVVGdlFpeGhRVUZ3UWl4RlFVRnRReXhuUWtGQlowSXNhMEpCUVdoQ0xFTkJRVEZETEVOQlJFYzdhVUpCU0VFN1MwRjJRazBzUTBFdlEyMURPenRCUVRoRmNFUXNVVUZCVFN4aFFVRmhMRmxCUVUwN1FVRkRja0lzZFVKQlFXVXNTVUZCWml4RFFVUnhRanRCUVVWeVFpeFpRVUZKTEU5QlFVOHNSMEZCVUN4SlFVRmpMRTlCUVU4c1IwRkJVQ3hGUVVGWk8wRkJRekZDTEN0Q1FVUXdRanRUUVVFNVFqdExRVVpsTEVOQk9VVnBRenM3UVVGeFJuQkVMRkZCUVUwc1YwRkJWeXhWUVVGRExFVkJRVVFzUlVGQlVUdEJRVU55UWl4WlFVRkpMSFZDUVVGS0xFTkJSSEZDT3p0QlFVZHlRaXhaUVVGSkxFTkJRVU1zV1VGQlJDeEZRVUZsTzBGQlEyWXNlVUpCUkdVN1UwRkJia0k3T3p0QlFVaHhRaXhaUVZGcVFpeFJRVUZSTEVkQlFWSXNTVUZCWlN4UlFVRlJMRWRCUVZJc1JVRkJZVHRCUVVNMVFpd3dRa0ZCWXl4RlFVRmtPenM3UVVGRU5FSXNVMEZCYUVNc1RVRkpUeXhKUVVGSkxFOUJRVThzUTBGQlVDeEZRVUZWTzBGQlEycENMRGhDUVVGakxFTkJRV1E3T3p0QlFVUnBRaXhoUVVGa0xFMUJTVUVzU1VGQlNTeFBRVUZQTEVOQlFWQXNSVUZCVlR0QlFVTnFRaXhyUTBGQll5eERRVUZrTEVOQlJHbENPMmxDUVVGa0xFMUJSMEU3UVVGRFNDeHJRMEZCWXl4WFFVRlhMRk5CUVZNc1JVRkJWQ3hEUVVGWUxFVkJRWGxDTEVkQlFYcENMRVZCUVRoQ0xFZEJRVGxDTEVOQlFXUXNRMEZFUnp0cFFrRklRVHM3UVVGUFVDeGxRVUZQTEZkQlFWQXNRMEYyUW5GQ08wdEJRVklzUTBGeVJtMURPenRCUVN0SGNFUXNWMEZCVHl4UlFVRlFMRU5CTDBkdlJEdERRVUY2UXlJc0ltWnBiR1VpT2lKamNtVmhkR1V0WW1WNmFXVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwTDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk4cVhHNGdJQ0FnUW1WNmFXVnlJR1oxYm1OMGFXOXVJR2RsYm1WeVlYUnZjbHh1SUNBZ0lDQWdJQ0JjYmlBZ0lDQkhZY09yZEdGdUlGSmxibUYxWkdWaGRTZHpJRUpsZW1sbGNrVmhjMmx1WjF4dUlDQWdJR2gwZEhCek9pOHZaMmwwYUhWaUxtTnZiUzluY21VdlltVjZhV1Z5TFdWaGMybHVaeTlpYkc5aUwyMWhjM1JsY2k5cGJtUmxlQzVxY3lBZ1hHNGdJQ0FnYUhSMGNITTZMeTluYVhSb2RXSXVZMjl0TDJkeVpTOWlaWHBwWlhJdFpXRnphVzVuTDJKc2IySXZiV0Z6ZEdWeUwweEpRMFZPVTBWY2JpQWdJQ0JaYjNVbmNtVWdZU0JvWlhKdlhHNGdJQ0FnWEc0Z0lDQWdWWE5sWEc0Z0lDQWdYRzRnSUNBZ0lDQWdJSFpoY2lCbFlYTmxUM1YwSUQwZ2JtVjNJRUpsZW1sbGNpZ3VNVGNzTGpZM0xDNDRNeXd1TmpjcExGeHVJQ0FnSUNBZ0lDQWdJQ0FnZUNBOUlHVmhjMlZQZFhRb01DNDFLVHNnTHk4Z2NtVjBkWEp1Y3lBd0xqWXlOeTR1TGx4dUtpOWNibHh1THk4Z1EyOXVjM1JoYm5SelhHNWpiMjV6ZENCT1JWZFVUMDVmU1ZSRlVrRlVTVTlPVXlBOUlEZzdYRzVqYjI1emRDQk9SVmRVVDA1ZlRVbE9YMU5NVDFCRklEMGdNQzR3TURFN1hHNWpiMjV6ZENCVFZVSkVTVlpKVTBsUFRsOVFVa1ZEU1ZOSlQwNGdQU0F3TGpBd01EQXdNREU3WEc1amIyNXpkQ0JUVlVKRVNWWkpVMGxQVGw5TlFWaGZTVlJGVWtGVVNVOU9VeUE5SURFd08xeHVZMjl1YzNRZ1MxOVRVRXhKVGtWZlZFRkNURVZmVTBsYVJTQTlJREV4TzF4dVkyOXVjM1FnUzE5VFFVMVFURVZmVTFSRlVGOVRTVnBGSUQwZ01TNHdJQzhnS0V0ZlUxQk1TVTVGWDFSQlFreEZYMU5KV2tVZ0xTQXhMakFwTzF4dVkyOXVjM1FnUmt4UFFWUmZNekpmVTFWUVVFOVNWRVZFSUQwZ0tIUjVjR1Z2WmlCR2JHOWhkRE15UVhKeVlYa2dJVDA5SUNkMWJtUmxabWx1WldRbktUdGNibHh1THk4Z1NHVnNjR1Z5SUcxbGRHaHZaSE5jYm1OdmJuTjBJR0VnUFNBb1lURXNJR0V5S1NBOVBpQXhMakFnTFNBekxqQWdLaUJoTWlBcklETXVNQ0FxSUdFeE8xeHVZMjl1YzNRZ1lpQTlJQ2hoTVN3Z1lUSXBJRDArSURNdU1DQXFJR0V5SUMwZ05pNHdJQ29nWVRFN1hHNWpiMjV6ZENCaklEMGdLR0V4S1NBOVBpQXpMakFnS2lCaE1UdGNibHh1WTI5dWMzUWdaMlYwVTJ4dmNHVWdQU0FvZEN3Z1lURXNJR0V5S1NBOVBpQXpMakFnS2lCaEtHRXhMQ0JoTWlrZ0tpQjBJQ29nZENBcklESXVNQ0FxSUdJb1lURXNJR0V5S1NBcUlIUWdLeUJqS0dFeEtUdGNibHh1WTI5dWMzUWdZMkZzWTBKbGVtbGxjaUE5SUNoMExDQmhNU3dnWVRJcElEMCtJQ2dvWVNoaE1Td2dZVElwSUNvZ2RDQXJJR0lvWVRFc0lHRXlLU2tnS2lCMElDc2dZeWhoTVNrcElDb2dkRHRjYmx4dUx5cGNiaUFnSUNCRGNtVmhkR1VnWVNCamRXSnBZeUJpWlhwcFpYSWdjbVZ6YjJ4MlpYSmNiaW92WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JtZFc1amRHbHZiaUJqZFdKcFkwSmxlbWxsY2lodFdERXNJRzFaTVN3Z2JWZ3lMQ0J0V1RJcElIdGNiaUFnSUNCamIyNXpkQ0J6WVcxd2JHVldZV3gxWlhNZ1BTQkdURTlCVkY4ek1sOVRWVkJRVDFKVVJVUWdQeUJ1WlhjZ1JteHZZWFF6TWtGeWNtRjVLRXRmVTFCTVNVNUZYMVJCUWt4RlgxTkpXa1VwSURvZ2JtVjNJRUZ5Y21GNUtFdGZVMUJNU1U1RlgxUkJRa3hGWDFOSldrVXBPMXh1SUNBZ0lHeGxkQ0JmY0hKbFkyOXRjSFYwWldRZ1BTQm1ZV3h6WlR0Y2JseHVJQ0FnSUdOdmJuTjBJR0pwYm1GeWVWTjFZbVJwZG1sa1pTQTlJQ2hoV0N3Z1lVRXNJR0ZDS1NBOVBpQjdYRzRnSUNBZ0lDQWdJR3hsZENCcElEMGdNRHRjYmlBZ0lDQWdJQ0FnYkdWMElHTjFjbkpsYm5SWU8xeHVJQ0FnSUNBZ0lDQnNaWFFnWTNWeWNtVnVkRlE3WEc1Y2JpQWdJQ0FnSUNBZ1pHOGdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kzVnljbVZ1ZEZRZ1BTQmhRU0FySUNoaFFpQXRJR0ZCS1NBdklESXVNRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTjFjbkpsYm5SWUlEMGdZMkZzWTBKbGVtbGxjaWhqZFhKeVpXNTBWQ3dnYlZneExDQnRXRElwSUMwZ1lWZzdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9ZM1Z5Y21WdWRGZ2dQaUF3TGpBcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmhRaUE5SUdOMWNuSmxiblJVTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmhRU0E5SUdOMWNuSmxiblJVTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5SUhkb2FXeGxJQ2hOWVhSb0xtRmljeWhqZFhKeVpXNTBXQ2tnUGlCVFZVSkVTVlpKVTBsUFRsOVFVa1ZEU1ZOSlQwNGdKaVlnS3l0cElEd2dVMVZDUkVsV1NWTkpUMDVmVFVGWVgwbFVSVkpCVkVsUFRsTXBPMXh1WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJqZFhKeVpXNTBWRHRjYmlBZ0lDQjlPMXh1WEc0Z0lDQWdZMjl1YzNRZ2JtVjNkRzl1VW1Gd2FITnZia2wwWlhKaGRHVWdQU0FvWVZnc0lHRkhkV1Z6YzFRcElEMCtJSHRjYmlBZ0lDQWdJQ0FnYkdWMElHa2dQU0F3TzF4dUlDQWdJQ0FnSUNCc1pYUWdZM1Z5Y21WdWRGTnNiM0JsSUQwZ01EdGNiaUFnSUNBZ0lDQWdiR1YwSUdOMWNuSmxiblJZTzF4dVhHNGdJQ0FnSUNBZ0lHWnZjaUFvT3lCcElEd2dUa1ZYVkU5T1gwbFVSVkpCVkVsUFRsTTdJQ3NyYVNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWTNWeWNtVnVkRk5zYjNCbElEMGdaMlYwVTJ4dmNHVW9ZVWQxWlhOelZDd2diVmd4TENCdFdESXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb1kzVnljbVZ1ZEZOc2IzQmxJRDA5UFNBd0xqQXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdZVWQxWlhOelZEdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0FnSUNBZ1kzVnljbVZ1ZEZnZ1BTQmpZV3hqUW1WNmFXVnlLR0ZIZFdWemMxUXNJRzFZTVN3Z2JWZ3lLU0F0SUdGWU8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWVVkMVpYTnpWQ0F0UFNCamRYSnlaVzUwV0NBdklHTjFjbkpsYm5SVGJHOXdaVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUdGSGRXVnpjMVE3WEc0Z0lDQWdmVHRjYmx4dUlDQWdJR052Ym5OMElHTmhiR05UWVcxd2JHVldZV3gxWlhNZ1BTQW9LU0E5UGlCN1hHNGdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2dTMTlUVUV4SlRrVmZWRUZDVEVWZlUwbGFSVHNnS3l0cEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCellXMXdiR1ZXWVd4MVpYTmJhVjBnUFNCallXeGpRbVY2YVdWeUtHa2dLaUJMWDFOQlRWQk1SVjlUVkVWUVgxTkpXa1VzSUcxWU1Td2diVmd5S1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgwN1hHNWNiaUFnSUNCamIyNXpkQ0JuWlhSVVJtOXlXQ0E5SUNoaFdDa2dQVDRnZTF4dUlDQWdJQ0FnSUNCc1pYUWdhVzUwWlhKMllXeFRkR0Z5ZENBOUlEQXVNRHRjYmlBZ0lDQWdJQ0FnYkdWMElHTjFjbkpsYm5SVFlXMXdiR1VnUFNBeE8xeHVJQ0FnSUNBZ0lDQnNaWFFnYkdGemRGTmhiWEJzWlNBOUlFdGZVMUJNU1U1RlgxUkJRa3hGWDFOSldrVWdMU0F4TzF4dUlDQWdJQ0FnSUNCc1pYUWdaR2x6ZENBOUlEQXVNRHRjYmlBZ0lDQWdJQ0FnYkdWMElHZDFaWE56Um05eVZDQTlJREF1TUR0Y2JpQWdJQ0FnSUNBZ2JHVjBJR2x1YVhScFlXeFRiRzl3WlNBOUlEQXVNRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQm1iM0lnS0RzZ1kzVnljbVZ1ZEZOaGJYQnNaU0FoUFNCc1lYTjBVMkZ0Y0d4bElDWW1JSE5oYlhCc1pWWmhiSFZsYzF0amRYSnlaVzUwVTJGdGNHeGxYU0E4UFNCaFdEc2dLeXRqZFhKeVpXNTBVMkZ0Y0d4bEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCcGJuUmxjblpoYkZOMFlYSjBJQ3M5SUV0ZlUwRk5VRXhGWDFOVVJWQmZVMGxhUlR0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdMUzFqZFhKeVpXNTBVMkZ0Y0d4bE8xeHVJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdaR2x6ZENBOUlDaGhXQ0F0SUhOaGJYQnNaVlpoYkhWbGMxdGpkWEp5Wlc1MFUyRnRjR3hsWFNrZ0x5QW9jMkZ0Y0d4bFZtRnNkV1Z6VzJOMWNuSmxiblJUWVcxd2JHVXJNVjBnTFNCellXMXdiR1ZXWVd4MVpYTmJZM1Z5Y21WdWRGTmhiWEJzWlYwcE8xeHVJQ0FnSUNBZ0lDQm5kV1Z6YzBadmNsUWdQU0JwYm5SbGNuWmhiRk4wWVhKMElDc2daR2x6ZENBcUlFdGZVMEZOVUV4RlgxTlVSVkJmVTBsYVJUdGNiaUFnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJR2x1YVhScFlXeFRiRzl3WlNBOUlHZGxkRk5zYjNCbEtHZDFaWE56Um05eVZDd2diVmd4TENCdFdESXBPMXh1SUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnTHk4Z1NXWWdjMnh2Y0dVZ2FYTWdaM0psWVhSbGNpQjBhR0Z1SUcxcGJseHVJQ0FnSUNBZ0lDQnBaaUFvYVc1cGRHbGhiRk5zYjNCbElENDlJRTVGVjFSUFRsOU5TVTVmVTB4UFVFVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCdVpYZDBiMjVTWVhCb2MyOXVTWFJsY21GMFpTaGhXQ3dnWjNWbGMzTkdiM0pVS1R0Y2JpQWdJQ0FnSUNBZ0x5OGdVMnh2Y0dVZ2FYTWdaWEYxWVd3Z2RHOGdiV2x1WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0JwWmlBb2FXNXBkR2xoYkZOc2IzQmxJRDA5UFNBd0xqQXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCbmRXVnpjMFp2Y2xRN1hHNGdJQ0FnSUNBZ0lDOHZJRk5zYjNCbElHbHpJR3hsYzNNZ2RHaGhiaUJ0YVc1Y2JpQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQmlhVzVoY25sVGRXSmthWFpwWkdVb1lWZ3NJR2x1ZEdWeWRtRnNVM1JoY25Rc0lHbHVkR1Z5ZG1Gc1UzUmhjblFnS3lCTFgxTkJUVkJNUlY5VFZFVlFYMU5KV2tVcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZUdGNibHh1SUNBZ0lHTnZibk4wSUhCeVpXTnZiWEIxZEdVZ1BTQW9LU0E5UGlCN1hHNGdJQ0FnSUNBZ0lGOXdjbVZqYjIxd2RYUmxaQ0E5SUhSeWRXVTdYRzRnSUNBZ0lDQWdJR2xtSUNodFdERWdJVDBnYlZreElIeDhJRzFZTWlBaFBTQnRXVElwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR05oYkdOVFlXMXdiR1ZXWVd4MVpYTW9LVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDA3WEc1Y2JpQWdJQ0JqYjI1emRDQnlaWE52YkhabGNpQTlJQ2hoV0NrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0JzWlhRZ2NtVjBkWEp1Vm1Gc2RXVTdYRzVjYmlBZ0lDQWdJQ0FnYVdZZ0tDRmZjSEpsWTI5dGNIVjBaV1FwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEJ5WldOdmJYQjFkR1VvS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdMeThnU1dZZ2JHbHVaV0Z5SUdkeVlXUnBaVzUwTENCeVpYUjFjbTRnV0NCaGN5QlVYRzRnSUNBZ0lDQWdJR2xtSUNodFdERWdQVDA5SUcxWk1TQW1KaUJ0V0RJZ1BUMDlJRzFaTWlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVWbUZzZFdVZ1BTQmhXRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQXZMeUJKWmlCaGRDQnpkR0Z5ZEN3Z2NtVjBkWEp1SURCY2JpQWdJQ0FnSUNBZ2ZTQmxiSE5sSUdsbUlDaGhXQ0E5UFQwZ01Da2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1Vm1Gc2RXVWdQU0F3TzF4dUlDQWdJQ0FnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJQzh2SUVsbUlHRjBJR1Z1WkN3Z2NtVjBkWEp1SURGY2JpQWdJQ0FnSUNBZ2ZTQmxiSE5sSUdsbUlDaGhXQ0E5UFQwZ01Ta2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1Vm1Gc2RXVWdQU0F4TzF4dVhHNGdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNVdZV3gxWlNBOUlHTmhiR05DWlhwcFpYSW9aMlYwVkVadmNsZ29ZVmdwTENCdFdURXNJRzFaTWlrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnlaWFIxY201V1lXeDFaVHRjYmlBZ0lDQjlPMXh1WEc0Z0lDQWdjbVYwZFhKdUlISmxjMjlzZG1WeU8xeHVmVnh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9lYXNpbmcvY3JlYXRlLWJlemllci5qc1xuICoqIG1vZHVsZSBpZCA9IDUyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vKlxuICAgIERldGVjdCBhbmQgbG9hZCBhbiBhcHByb3ByaWF0ZSBjbG9jayBzZXR0aW5nIGZvciB0aGUgZW52aXJvbm1lbnRcbiovXG5cbnZhciBoYXNSQUYgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID8gdHJ1ZSA6IGZhbHNlO1xuXG52YXIgdGljayA9IHVuZGVmaW5lZDtcblxuaWYgKGhhc1JBRikge1xuICAgIHRpY2sgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spO1xuICAgIH07XG59IGVsc2Uge1xuICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8qXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgRm9yIElFOC85IEZsaW5zdG9uZXMgYW5kIG5vbi1icm93c2VyIGVudmlyb25tZW50c1xuICAgICAgICAgICAgIFRha2VuIGZyb20gUGF1bCBJcmlzaC4gV2UndmUgc3RyaXBwZWQgb3V0IGNhbmNlbEFuaW1hdGlvbkZyYW1lIGNoZWNrcyBiZWNhdXNlIHdlIGRvbid0IGZveCB3aXRoIHRoYXRcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaHR0cDovL3BhdWxpcmlzaC5jb20vMjAxMS9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWFuaW1hdGluZy9cbiAgICAgICAgICAgIGh0dHA6Ly9teS5vcGVyYS5jb20vZW1vbGxlci9ibG9nLzIwMTEvMTIvMjAvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1lci1hbmltYXRpbmdcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbCBieSBFcmlrIE3DtmxsZXIuIGZpeGVzIGZyb20gUGF1bCBJcmlzaCBhbmQgVGlubyBaaWpkZWxcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgIE1JVCBsaWNlbnNlXG4gICAgICAgICovXG4gICAgICAgIHZhciBsYXN0VGltZSA9IDA7XG5cbiAgICAgICAgdGljayA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICB2YXIgdGltZVRvQ2FsbCA9IE1hdGgubWF4KDAsIDE2IC0gKGN1cnJlbnRUaW1lIC0gbGFzdFRpbWUpKTtcblxuICAgICAgICAgICAgbGFzdFRpbWUgPSBjdXJyZW50VGltZSArIHRpbWVUb0NhbGw7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhsYXN0VGltZSk7XG4gICAgICAgICAgICB9LCB0aW1lVG9DYWxsKTtcbiAgICAgICAgfTtcbiAgICB9KSgpO1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSB0aWNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkwWVhOckwzUnBZMnN1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenRCUVVsQkxFbEJRVTBzVTBGQlV5eFBRVUZSTEUxQlFWQXNTMEZCYTBJc1YwRkJiRUlzU1VGQmFVTXNUMEZCVHl4eFFrRkJVQ3hIUVVGblF5eEpRVUZzUlN4SFFVRjVSU3hMUVVGNlJUczdRVUZGWml4SlFVRkpMR2RDUVVGS096dEJRVVZCTEVsQlFVa3NUVUZCU2l4RlFVRlpPMEZCUTFJc1YwRkJUeXhWUVVGRExGRkJRVVE3WlVGQll5eFBRVUZQTEhGQ1FVRlFMRU5CUVRaQ0xGRkJRVGRDTzB0QlFXUXNRMEZFUXp0RFFVRmFMRTFCUjA4N096czdPenM3T3pzN096czdPenRCUVdWSUxGbEJRVWtzVjBGQlZ5eERRVUZZT3p0QlFVVktMR1ZCUVU4c1ZVRkJReXhSUVVGRUxFVkJRV003UVVGRGFrSXNaMEpCUVUwc1kwRkJZeXhKUVVGSkxFbEJRVW9zUjBGQlZ5eFBRVUZZTEVWQlFXUXNRMEZFVnp0QlFVVnFRaXhuUWtGQlRTeGhRVUZoTEV0QlFVc3NSMEZCVEN4RFFVRlRMRU5CUVZRc1JVRkJXU3hOUVVGTkxHTkJRV01zVVVGQlpDeERRVUZPTEVOQlFYcENMRU5CUmxjN08wRkJTV3BDTEhWQ1FVRlhMR05CUVdNc1ZVRkJaQ3hEUVVwTk96dEJRVTFxUWl4MVFrRkJWenQxUWtGQlRTeFRRVUZUTEZGQlFWUTdZVUZCVGl4RlFVRXdRaXhWUVVGeVF5eEZRVTVwUWp0VFFVRmtPMU5CYWtKS08wTkJTRkE3TzJ0Q1FUaENaU0lzSW1acGJHVWlPaUowYVdOckxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaThxWEc0Z0lDQWdSR1YwWldOMElHRnVaQ0JzYjJGa0lHRnVJR0Z3Y0hKdmNISnBZWFJsSUdOc2IyTnJJSE5sZEhScGJtY2dabTl5SUhSb1pTQmxiblpwY205dWJXVnVkRnh1S2k5Y2JseHVZMjl1YzNRZ2FHRnpVa0ZHSUQwZ0tIUjVjR1Z2WmlCM2FXNWtiM2NnSVQwOUlDZDFibVJsWm1sdVpXUW5JQ1ltSUhkcGJtUnZkeTV5WlhGMVpYTjBRVzVwYldGMGFXOXVSbkpoYldVcElEOGdkSEoxWlNBNklHWmhiSE5sTzF4dVhHNXNaWFFnZEdsamF6dGNibHh1YVdZZ0tHaGhjMUpCUmlrZ2UxeHVJQ0FnSUhScFkyc2dQU0FvWTJGc2JHSmhZMnNwSUQwK0lIZHBibVJ2ZHk1eVpYRjFaWE4wUVc1cGJXRjBhVzl1Um5KaGJXVW9ZMkZzYkdKaFkyc3BPMXh1WEc1OUlHVnNjMlVnZTF4dUlDQWdJQzhxWEc0Z0lDQWdJQ0FnSUhKbGNYVmxjM1JCYm1sdFlYUnBiMjVHY21GdFpTQndiMng1Wm1sc2JGeHVJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdSbTl5SUVsRk9DODVJRVpzYVc1emRHOXVaWE1nWVc1a0lHNXZiaTFpY205M2MyVnlJR1Z1ZG1seWIyNXRaVzUwYzF4dVhHNGdJQ0FnSUNBZ0lGUmhhMlZ1SUdaeWIyMGdVR0YxYkNCSmNtbHphQzRnVjJVbmRtVWdjM1J5YVhCd1pXUWdiM1YwSUdOaGJtTmxiRUZ1YVcxaGRHbHZia1p5WVcxbElHTm9aV05yY3lCaVpXTmhkWE5sSUhkbElHUnZiaWQwSUdadmVDQjNhWFJvSUhSb1lYUmNiaUFnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJR2gwZEhBNkx5OXdZWFZzYVhKcGMyZ3VZMjl0THpJd01URXZjbVZ4ZFdWemRHRnVhVzFoZEdsdmJtWnlZVzFsTFdadmNpMXpiV0Z5ZEMxaGJtbHRZWFJwYm1jdlhHNGdJQ0FnSUNBZ0lHaDBkSEE2THk5dGVTNXZjR1Z5WVM1amIyMHZaVzF2Ykd4bGNpOWliRzluTHpJd01URXZNVEl2TWpBdmNtVnhkV1Z6ZEdGdWFXMWhkR2x2Ym1aeVlXMWxMV1p2Y2kxemJXRnlkQzFsY2kxaGJtbHRZWFJwYm1kY2JpQWdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQnlaWEYxWlhOMFFXNXBiV0YwYVc5dVJuSmhiV1VnY0c5c2VXWnBiR3dnWW5rZ1JYSnBheUJOdzdac2JHVnlMaUJtYVhobGN5Qm1jbTl0SUZCaGRXd2dTWEpwYzJnZ1lXNWtJRlJwYm04Z1dtbHFaR1ZzWEc0Z0lDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ1RVbFVJR3hwWTJWdWMyVmNiaUFnSUNBcUwxeHVJQ0FnSUd4bGRDQnNZWE4wVkdsdFpTQTlJREE3WEc1Y2JpQWdJQ0IwYVdOcklEMGdLR05oYkd4aVlXTnJLU0E5UGlCN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUdOMWNuSmxiblJVYVcxbElEMGdibVYzSUVSaGRHVW9LUzVuWlhSVWFXMWxLQ2s3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJSFJwYldWVWIwTmhiR3dnUFNCTllYUm9MbTFoZUNnd0xDQXhOaUF0SUNoamRYSnlaVzUwVkdsdFpTQXRJR3hoYzNSVWFXMWxLU2s3WEc1Y2JpQWdJQ0FnSUNBZ2JHRnpkRlJwYldVZ1BTQmpkWEp5Wlc1MFZHbHRaU0FySUhScGJXVlViME5oYkd3N1hHNWNiaUFnSUNBZ0lDQWdjMlYwVkdsdFpXOTFkQ2dvS1NBOVBpQmpZV3hzWW1GamF5aHNZWE4wVkdsdFpTa3NJSFJwYldWVWIwTmhiR3dwTzF4dUlDQWdJSDA3WEc1OVhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElIUnBZMnM3SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdGFzay90aWNrLmpzXG4gKiogbW9kdWxlIGlkID0gNTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLy8gW2ludF06IEluY3JlbWVudGVkIGZvciBlYWNoIG5ldyBydW5uaW5nIHRhc2tcbnZhciBjdXJyZW50VGFza0lkID0gMDtcblxuLy8gW2ludF06IE51bWJlciBvZiBhbGwgcnVubmluZyB0YXNrZXNcbnZhciB0b3RhbFJ1bm5pbmdDb3VudCA9IDA7XG5cbi8vIFtpbnRdOiBOdW1iZXIgb2YgcnVubmluZyB0YXNrZXMgZXhjbHVkaW5nIGJhY2tncm91bmQgdGFza2VzXG52YXIgbm9uQmFja2dyb3VuZFJ1bm5pbmdDb3VudCA9IDA7XG5cbi8vIFthcnJheV06IEFycmF5IG9mIHJ1bm5pbmcgdGFzayBJRHNcbnZhciBydW5uaW5nSWRzID0gW107XG5cbi8vIFtvYmplY3RdOiBNYXAgb2YgcnVubmluZyB0YXNrZXNcbnZhciBhY3RpdmVUYXNrcyA9IHt9O1xuXG4vLyBbYXJyYXldOiBBcnJheSBvZiB0YXNrIElEcyBxdWV1ZWQgZm9yIGFjdGl2YXRpb25cbnZhciBhY3RpdmF0ZVF1ZXVlID0gW107XG5cbi8vIFthcnJheV06IEFycmF5IG9mIHRhc2sgSURzIHF1ZXVlZCBmb3IgZGVhY3RpdmF0aW9uXG52YXIgZGVhY3RpdmF0ZVF1ZXVlID0gW107XG5cbi8qXG4gICAgVXBkYXRlIGFjdGl2YXRlL2RlYWN0aXZhdGUgcXVldWVzXG5cbiAgICBAcGFyYW0gW251bWJlcl1cbiAgICBAcGFyYW0gW2FycmF5XVxuICAgIEBwYXJhbSBbYXJyYXldXG4qL1xudmFyIHVwZGF0ZVF1ZXVlcyA9IGZ1bmN0aW9uIChpZCwgaW5MaXN0LCBvdXRMaXN0KSB7XG4gICAgdmFyIGluUG9zaXRpb24gPSBpbkxpc3QuaW5kZXhPZihpZCk7XG4gICAgdmFyIG91dFBvc2l0aW9uID0gb3V0TGlzdC5pbmRleE9mKGlkKTtcblxuICAgIGlmIChpblBvc2l0aW9uID09PSAtMSkge1xuICAgICAgICBpbkxpc3QucHVzaChpZCk7XG4gICAgfVxuXG4gICAgaWYgKG91dFBvc2l0aW9uID4gLTEpIHtcbiAgICAgICAgb3V0TGlzdC5zcGxpY2Uob3V0UG9zaXRpb24sIDEpO1xuICAgIH1cbn07XG5cbi8qXG4gICAgVXBkYXRlIHJ1bm5pbmdcblxuICAgIFtib29sZWFuXTogYHRydWVgIHRvIGFkZFxuICAgIFtib29sZWFuXTogYHRydWVgIGlmIGxhenlcbiovXG52YXIgdXBkYXRlUnVubmluZ0NvdW50ID0gZnVuY3Rpb24gKGFkZCwgaXNMYXp5KSB7XG4gICAgdmFyIG1vZGlmeSA9IGFkZCA/IDEgOiAtMTtcblxuICAgIHRvdGFsUnVubmluZ0NvdW50ICs9IG1vZGlmeTtcblxuICAgIGlmICghaXNMYXp5KSB7XG4gICAgICAgIG5vbkJhY2tncm91bmRSdW5uaW5nQ291bnQgKz0gbW9kaWZ5O1xuICAgIH1cbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBhY3RpdmVUYXNrczogYWN0aXZlVGFza3MsXG5cbiAgICAvLyBBY3RpdmF0ZSBhIHRhc2tcbiAgICBhY3RpdmF0ZTogZnVuY3Rpb24gKGlkLCB0YXNrKSB7XG4gICAgICAgIGFjdGl2ZVRhc2tzW2lkXSA9IHRhc2s7XG4gICAgICAgIHRhc2suaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICB1cGRhdGVRdWV1ZXMoaWQsIGFjdGl2YXRlUXVldWUsIGRlYWN0aXZhdGVRdWV1ZSk7XG5cbiAgICAgICAgaWYgKHRhc2sub25BY3RpdmF0ZSkge1xuICAgICAgICAgICAgdGFzay5vbkFjdGl2YXRlKHRhc2spO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIERlYWN0aXZhdGUgYSB0YXNrXG4gICAgZGVhY3RpdmF0ZTogZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHZhciB0YXNrID0gYWN0aXZlVGFza3NbaWRdO1xuXG4gICAgICAgIGlmICh0YXNrKSB7XG4gICAgICAgICAgICB1cGRhdGVRdWV1ZXMoaWQsIGRlYWN0aXZhdGVRdWV1ZSwgYWN0aXZhdGVRdWV1ZSk7XG4gICAgICAgICAgICB0YXNrLmlzQWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmICh0YXNrLm9uRGVhY3RpdmF0ZSkge1xuICAgICAgICAgICAgICAgIHRhc2sub25EZWFjdGl2YXRlKHRhc2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIE51bWJlciBiYWNrZ3JvdW5kIHRhc2tlc1xuICAgIGdldE5vbkJhY2tncm91bmRSdW5uaW5nQ291bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5vbkJhY2tncm91bmRSdW5uaW5nQ291bnQ7XG4gICAgfSxcblxuICAgIC8vIEluY3JlbWVudCBjdXJyZW50IHRhc2sgSUQgYW5kIHJldHVyblxuICAgIGdldFRhc2tJZDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gY3VycmVudFRhc2tJZCsrO1xuICAgIH0sXG5cbiAgICAvLyBSZXNvbHZlIGFjdGl2YXRlL2RlYWN0aXZhdGUgdGFza2VzIGFuZCByZXR1cm4gYWN0aXZlIGlkc1xuICAgIGdldEFjdGl2ZUlkczogZnVuY3Rpb24gKCkge1xuICAgICAgICAvKlxuICAgICAgICAgICAgdGFzayBkZWFjdGl2YXRlIHF1ZXVlXG4gICAgICAgICovXG4gICAgICAgIHZhciBkZWFjdGl2YXRlUXVldWVMZW5ndGggPSBkZWFjdGl2YXRlUXVldWUubGVuZ3RoO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGVhY3RpdmF0ZVF1ZXVlTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBpZCA9IGRlYWN0aXZhdGVRdWV1ZVtpXTtcbiAgICAgICAgICAgIHZhciBhY3RpdmVJZEluZGV4ID0gcnVubmluZ0lkcy5pbmRleE9mKGlkKTtcbiAgICAgICAgICAgIHZhciB0YXNrID0gYWN0aXZlVGFza3NbaWRdO1xuXG4gICAgICAgICAgICAvLyBJZiB0aGlzIGlzIGEgcnVubmluZyB0YXNrLCBkZWFjdGl2YXRlXG4gICAgICAgICAgICBpZiAoYWN0aXZlSWRJbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgcnVubmluZ0lkcy5zcGxpY2UoYWN0aXZlSWRJbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgdXBkYXRlUnVubmluZ0NvdW50KGZhbHNlLCB0YXNrLmlzTGF6eSk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGFjdGl2ZVRhc2tzW2lkXTtcblxuICAgICAgICAgICAgICAgIGlmICh0YXNrLm9uRGVhY3RpdmF0ZSkge1xuICAgICAgICAgICAgICAgICAgICB0YXNrLm9uRGVhY3RpdmF0ZSh0YXNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKlxuICAgICAgICAgICAgRW1wdHkgZGVhY3RpdmF0ZSBxdWV1ZS4gV2UgdXNlIGBBcnJheS5zcGxpY2VgIGJlY2F1c2UgaXQgZG9lc24ndFxuICAgICAgICAgICAgd29ya3Mgb24gdGhlIG9yaWdpbmFsIGFycmF5IHNvIHdlIGRvbid0IGhhdmUgdG8gZ2FyYmFnZSBjb2xsZWN0IGFueXRoaW5nXG4gICAgICAgICovXG4gICAgICAgIGRlYWN0aXZhdGVRdWV1ZS5zcGxpY2UoMCwgZGVhY3RpdmF0ZVF1ZXVlTGVuZ3RoKTtcblxuICAgICAgICAvKlxuICAgICAgICAgICAgdGFzayBhY3RpdmF0ZSBxdWV1ZVxuICAgICAgICAqL1xuICAgICAgICB2YXIgYWN0aXZhdGVRdWV1ZUxlbmd0aCA9IGFjdGl2YXRlUXVldWUubGVuZ3RoO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWN0aXZhdGVRdWV1ZUxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaWQgPSBhY3RpdmF0ZVF1ZXVlW2ldO1xuICAgICAgICAgICAgdmFyIGFjdGl2ZUlkSW5kZXggPSBydW5uaW5nSWRzLmluZGV4T2YoaWQpO1xuICAgICAgICAgICAgdmFyIHRhc2sgPSBhY3RpdmVUYXNrc1tpZF07XG5cbiAgICAgICAgICAgIC8vIElmIHRhc2sgaXNuJ3QgYWxyZWFkeSBydW5uaW5nLCBhY3RpdmF0ZVxuICAgICAgICAgICAgaWYgKGFjdGl2ZUlkSW5kZXggPT09IC0xICYmIHRhc2spIHtcbiAgICAgICAgICAgICAgICBpZiAodGFzay5pc1ByaW9yaXR5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmdJZHMudW5zaGlmdChpZCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ0lkcy5wdXNoKGlkKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB1cGRhdGVSdW5uaW5nQ291bnQodHJ1ZSwgdGFzay5pc0xhenkpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRhc2sub25BY3RpdmF0ZSkge1xuICAgICAgICAgICAgICAgICAgICB0YXNrLm9uQWN0aXZhdGUodGFzayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYWN0aXZhdGVRdWV1ZS5zcGxpY2UoMCwgYWN0aXZhdGVRdWV1ZUxlbmd0aCk7XG5cbiAgICAgICAgcmV0dXJuIHJ1bm5pbmdJZHM7XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MFlYTnJMMjFoYm1GblpYSXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0QlFVTkJMRWxCUVVrc1owSkJRV2RDTEVOQlFXaENPenM3UVVGSFNpeEpRVUZKTEc5Q1FVRnZRaXhEUVVGd1FqczdPMEZCUjBvc1NVRkJTU3cwUWtGQk5FSXNRMEZCTlVJN096dEJRVWRLTEVsQlFVMHNZVUZCWVN4RlFVRmlPenM3UVVGSFRpeEpRVUZOTEdOQlFXTXNSVUZCWkRzN08wRkJSMDRzU1VGQlRTeG5Ra0ZCWjBJc1JVRkJhRUk3T3p0QlFVZE9MRWxCUVUwc2EwSkJRV3RDTEVWQlFXeENPenM3T3pzN096czdRVUZUVGl4SlFVRk5MR1ZCUVdVc1ZVRkJReXhGUVVGRUxFVkJRVXNzVFVGQlRDeEZRVUZoTEU5QlFXSXNSVUZCZVVJN1FVRkRNVU1zVVVGQlRTeGhRVUZoTEU5QlFVOHNUMEZCVUN4RFFVRmxMRVZCUVdZc1EwRkJZaXhEUVVSdlF6dEJRVVV4UXl4UlFVRk5MR05CUVdNc1VVRkJVU3hQUVVGU0xFTkJRV2RDTEVWQlFXaENMRU5CUVdRc1EwRkdiME03TzBGQlNURkRMRkZCUVVrc1pVRkJaU3hEUVVGRExFTkJRVVFzUlVGQlNUdEJRVU51UWl4bFFVRlBMRWxCUVZBc1EwRkJXU3hGUVVGYUxFVkJSRzFDTzB0QlFYWkNPenRCUVVsQkxGRkJRVWtzWTBGQll5eERRVUZETEVOQlFVUXNSVUZCU1R0QlFVTnNRaXhuUWtGQlVTeE5RVUZTTEVOQlFXVXNWMEZCWml4RlFVRTBRaXhEUVVFMVFpeEZRVVJyUWp0TFFVRjBRanREUVZKcFFqczdPenM3T3pzN1FVRnRRbkpDTEVsQlFVMHNjVUpCUVhGQ0xGVkJRVU1zUjBGQlJDeEZRVUZOTEUxQlFVNHNSVUZCYVVJN1FVRkRlRU1zVVVGQlRTeFRRVUZUTEUxQlFVMHNRMEZCVGl4SFFVRlZMRU5CUVVNc1EwRkJSQ3hEUVVSbE96dEJRVWQ0UXl4NVFrRkJjVUlzVFVGQmNrSXNRMEZJZDBNN08wRkJTM2hETEZGQlFVa3NRMEZCUXl4TlFVRkVMRVZCUVZNN1FVRkRWQ3h4UTBGQk5rSXNUVUZCTjBJc1EwRkVVenRMUVVGaU8wTkJUSFZDT3p0clFrRlZXanRCUVVOWUxEUkNRVVJYT3pzN1FVRkpXQ3hqUVVGVkxGVkJRVU1zUlVGQlJDeEZRVUZMTEVsQlFVd3NSVUZCWXp0QlFVTndRaXh2UWtGQldTeEZRVUZhTEVsQlFXdENMRWxCUVd4Q0xFTkJSRzlDTzBGQlJYQkNMR0ZCUVVzc1VVRkJUQ3hIUVVGblFpeEpRVUZvUWl4RFFVWnZRanRCUVVkd1FpeHhRa0ZCWVN4RlFVRmlMRVZCUVdsQ0xHRkJRV3BDTEVWQlFXZERMR1ZCUVdoRExFVkJTRzlDT3p0QlFVdHdRaXhaUVVGSkxFdEJRVXNzVlVGQlRDeEZRVUZwUWp0QlFVTnFRaXhwUWtGQlN5eFZRVUZNTEVOQlFXZENMRWxCUVdoQ0xFVkJSR2xDTzFOQlFYSkNPMHRCVEUwN096dEJRVmRXTEdkQ1FVRlpMRlZCUVVNc1JVRkJSQ3hGUVVGUk8wRkJRMmhDTEZsQlFVMHNUMEZCVHl4WlFVRlpMRVZCUVZvc1EwRkJVQ3hEUVVSVk96dEJRVWRvUWl4WlFVRkpMRWxCUVVvc1JVRkJWVHRCUVVOT0xIbENRVUZoTEVWQlFXSXNSVUZCYVVJc1pVRkJha0lzUlVGQmEwTXNZVUZCYkVNc1JVRkVUVHRCUVVWT0xHbENRVUZMTEZGQlFVd3NSMEZCWjBJc1MwRkJhRUlzUTBGR1RUczdRVUZKVGl4blFrRkJTU3hMUVVGTExGbEJRVXdzUlVGQmJVSTdRVUZEYmtJc2NVSkJRVXNzV1VGQlRDeERRVUZyUWl4SlFVRnNRaXhGUVVSdFFqdGhRVUYyUWp0VFFVcEtPMHRCU0ZFN096dEJRV05hTEd0RFFVRTRRanRsUVVGTk8wdEJRVTQ3T3p0QlFVYzVRaXhsUVVGWE8yVkJRVTA3UzBGQlRqczdPMEZCUjFnc2EwSkJRV01zV1VGQlRUczdPenRCUVVsb1FpeFpRVUZOTEhkQ1FVRjNRaXhuUWtGQlowSXNUVUZCYUVJc1EwRktaRHM3UVVGTmFFSXNZVUZCU3l4SlFVRkpMRWxCUVVrc1EwRkJTaXhGUVVGUExFbEJRVWtzY1VKQlFVb3NSVUZCTWtJc1IwRkJNME1zUlVGQlowUTdRVUZETlVNc1owSkJRVTBzUzBGQlN5eG5Ra0ZCWjBJc1EwRkJhRUlzUTBGQlRDeERRVVJ6UXp0QlFVVTFReXhuUWtGQlRTeG5Ra0ZCWjBJc1YwRkJWeXhQUVVGWUxFTkJRVzFDTEVWQlFXNUNMRU5CUVdoQ0xFTkJSbk5ETzBGQlJ6VkRMR2RDUVVGTkxFOUJRVThzV1VGQldTeEZRVUZhTEVOQlFWQTdPenRCUVVoelF5eG5Ra0ZOZUVNc1owSkJRV2RDTEVOQlFVTXNRMEZCUkN4RlFVRkpPMEZCUTNCQ0xESkNRVUZYTEUxQlFWZ3NRMEZCYTBJc1lVRkJiRUlzUlVGQmFVTXNRMEZCYWtNc1JVRkViMEk3UVVGRmNFSXNiVU5CUVcxQ0xFdEJRVzVDTEVWQlFUQkNMRXRCUVVzc1RVRkJUQ3hEUVVFeFFpeERRVVp2UWp0QlFVZHdRaXgxUWtGQlR5eFpRVUZaTEVWQlFWb3NRMEZCVUN4RFFVaHZRanM3UVVGTGNFSXNiMEpCUVVrc1MwRkJTeXhaUVVGTUxFVkJRVzFDTzBGQlEyNUNMSGxDUVVGTExGbEJRVXdzUTBGQmEwSXNTVUZCYkVJc1JVRkViVUk3YVVKQlFYWkNPMkZCVEVvN1UwRk9TanM3T3pzN08wRkJUbWRDTEhWQ1FUSkNhRUlzUTBGQlowSXNUVUZCYUVJc1EwRkJkVUlzUTBGQmRrSXNSVUZCTUVJc2NVSkJRVEZDT3pzN096dEJRVE5DWjBJc1dVRm5RMVlzYzBKQlFYTkNMR05CUVdNc1RVRkJaQ3hEUVdoRFdqczdRVUZyUTJoQ0xHRkJRVXNzU1VGQlNTeEpRVUZKTEVOQlFVb3NSVUZCVHl4SlFVRkpMRzFDUVVGS0xFVkJRWGxDTEVkQlFYcERMRVZCUVRoRE8wRkJRekZETEdkQ1FVRk5MRXRCUVVzc1kwRkJZeXhEUVVGa0xFTkJRVXdzUTBGRWIwTTdRVUZGTVVNc1owSkJRVTBzWjBKQlFXZENMRmRCUVZjc1QwRkJXQ3hEUVVGdFFpeEZRVUZ1UWl4RFFVRm9RaXhEUVVadlF6dEJRVWN4UXl4blFrRkJUU3hQUVVGUExGbEJRVmtzUlVGQldpeERRVUZRT3pzN1FVRkliME1zWjBKQlRYUkRMR3RDUVVGclFpeERRVUZETEVOQlFVUXNTVUZCVFN4SlFVRjRRaXhGUVVFNFFqdEJRVU01UWl4dlFrRkJTU3hMUVVGTExGVkJRVXdzUlVGQmFVSTdRVUZEYWtJc0swSkJRVmNzVDBGQldDeERRVUZ0UWl4RlFVRnVRaXhGUVVScFFqdHBRa0ZCY2tJc1RVRkZUenRCUVVOSUxDdENRVUZYTEVsQlFWZ3NRMEZCWjBJc1JVRkJhRUlzUlVGRVJ6dHBRa0ZHVURzN1FVRk5RU3h0UTBGQmJVSXNTVUZCYmtJc1JVRkJlVUlzUzBGQlN5eE5RVUZNTEVOQlFYcENMRU5CVURoQ096dEJRVk01UWl4dlFrRkJTU3hMUVVGTExGVkJRVXdzUlVGQmFVSTdRVUZEYWtJc2VVSkJRVXNzVlVGQlRDeERRVUZuUWl4SlFVRm9RaXhGUVVScFFqdHBRa0ZCY2tJN1lVRlVTanRUUVU1S096dEJRWEZDUVN4elFrRkJZeXhOUVVGa0xFTkJRWEZDTEVOQlFYSkNMRVZCUVhkQ0xHMUNRVUY0UWl4RlFYWkVaMEk3TzBGQmVVUm9RaXhsUVVGUExGVkJRVkFzUTBGNlJHZENPMHRCUVU0aUxDSm1hV3hsSWpvaWJXRnVZV2RsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRDOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SXZMeUJiYVc1MFhUb2dTVzVqY21WdFpXNTBaV1FnWm05eUlHVmhZMmdnYm1WM0lISjFibTVwYm1jZ2RHRnphMXh1YkdWMElHTjFjbkpsYm5SVVlYTnJTV1FnUFNBd08xeHVYRzR2THlCYmFXNTBYVG9nVG5WdFltVnlJRzltSUdGc2JDQnlkVzV1YVc1bklIUmhjMnRsYzF4dWJHVjBJSFJ2ZEdGc1VuVnVibWx1WjBOdmRXNTBJRDBnTUR0Y2JseHVMeThnVzJsdWRGMDZJRTUxYldKbGNpQnZaaUJ5ZFc1dWFXNW5JSFJoYzJ0bGN5QmxlR05zZFdScGJtY2dZbUZqYTJkeWIzVnVaQ0IwWVhOclpYTmNibXhsZENCdWIyNUNZV05yWjNKdmRXNWtVblZ1Ym1sdVowTnZkVzUwSUQwZ01EdGNibHh1THk4Z1cyRnljbUY1WFRvZ1FYSnlZWGtnYjJZZ2NuVnVibWx1WnlCMFlYTnJJRWxFYzF4dVkyOXVjM1FnY25WdWJtbHVaMGxrY3lBOUlGdGRPMXh1WEc0dkx5QmJiMkpxWldOMFhUb2dUV0Z3SUc5bUlISjFibTVwYm1jZ2RHRnphMlZ6WEc1amIyNXpkQ0JoWTNScGRtVlVZWE5yY3lBOUlIdDlPMXh1WEc0dkx5QmJZWEp5WVhsZE9pQkJjbkpoZVNCdlppQjBZWE5ySUVsRWN5QnhkV1YxWldRZ1ptOXlJR0ZqZEdsMllYUnBiMjVjYm1OdmJuTjBJR0ZqZEdsMllYUmxVWFZsZFdVZ1BTQmJYVHRjYmx4dUx5OGdXMkZ5Y21GNVhUb2dRWEp5WVhrZ2IyWWdkR0Z6YXlCSlJITWdjWFZsZFdWa0lHWnZjaUJrWldGamRHbDJZWFJwYjI1Y2JtTnZibk4wSUdSbFlXTjBhWFpoZEdWUmRXVjFaU0E5SUZ0ZE8xeHVYRzR2S2x4dUlDQWdJRlZ3WkdGMFpTQmhZM1JwZG1GMFpTOWtaV0ZqZEdsMllYUmxJSEYxWlhWbGMxeHVYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkWEc0Z0lDQWdRSEJoY21GdElGdGhjbkpoZVYxY2JpQWdJQ0JBY0dGeVlXMGdXMkZ5Y21GNVhWeHVLaTljYm1OdmJuTjBJSFZ3WkdGMFpWRjFaWFZsY3lBOUlDaHBaQ3dnYVc1TWFYTjBMQ0J2ZFhSTWFYTjBLU0E5UGlCN1hHNGdJQ0FnWTI5dWMzUWdhVzVRYjNOcGRHbHZiaUE5SUdsdVRHbHpkQzVwYm1SbGVFOW1LR2xrS1R0Y2JpQWdJQ0JqYjI1emRDQnZkWFJRYjNOcGRHbHZiaUE5SUc5MWRFeHBjM1F1YVc1a1pYaFBaaWhwWkNrN1hHNWNiaUFnSUNCcFppQW9hVzVRYjNOcGRHbHZiaUE5UFQwZ0xURXBJSHRjYmlBZ0lDQWdJQ0FnYVc1TWFYTjBMbkIxYzJnb2FXUXBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHbG1JQ2h2ZFhSUWIzTnBkR2x2YmlBK0lDMHhLU0I3WEc0Z0lDQWdJQ0FnSUc5MWRFeHBjM1F1YzNCc2FXTmxLRzkxZEZCdmMybDBhVzl1TENBeEtUdGNiaUFnSUNCOVhHNTlPMXh1WEc0dktseHVJQ0FnSUZWd1pHRjBaU0J5ZFc1dWFXNW5YRzVjYmlBZ0lDQmJZbTl2YkdWaGJsMDZJR0IwY25WbFlDQjBieUJoWkdSY2JpQWdJQ0JiWW05dmJHVmhibDA2SUdCMGNuVmxZQ0JwWmlCc1lYcDVYRzRxTDF4dVkyOXVjM1FnZFhCa1lYUmxVblZ1Ym1sdVowTnZkVzUwSUQwZ0tHRmtaQ3dnYVhOTVlYcDVLU0E5UGlCN1hHNGdJQ0FnWTI5dWMzUWdiVzlrYVdaNUlEMGdZV1JrSUQ4Z01TQTZJQzB4TzF4dVhHNGdJQ0FnZEc5MFlXeFNkVzV1YVc1blEyOTFiblFnS3owZ2JXOWthV1o1TzF4dVhHNGdJQ0FnYVdZZ0tDRnBjMHhoZW5rcElIdGNiaUFnSUNBZ0lDQWdibTl1UW1GamEyZHliM1Z1WkZKMWJtNXBibWREYjNWdWRDQXJQU0J0YjJScFpuazdYRzRnSUNBZ2ZWeHVmVHRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnZTF4dUlDQWdJR0ZqZEdsMlpWUmhjMnR6TEZ4dVhHNGdJQ0FnTHk4Z1FXTjBhWFpoZEdVZ1lTQjBZWE5yWEc0Z0lDQWdZV04wYVhaaGRHVTZJQ2hwWkN3Z2RHRnpheWtnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQmhZM1JwZG1WVVlYTnJjMXRwWkYwZ1BTQjBZWE5yTzF4dUlDQWdJQ0FnSUNCMFlYTnJMbWx6UVdOMGFYWmxJRDBnZEhKMVpUdGNiaUFnSUNBZ0lDQWdkWEJrWVhSbFVYVmxkV1Z6S0dsa0xDQmhZM1JwZG1GMFpWRjFaWFZsTENCa1pXRmpkR2wyWVhSbFVYVmxkV1VwTzF4dVhHNGdJQ0FnSUNBZ0lHbG1JQ2gwWVhOckxtOXVRV04wYVhaaGRHVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUmhjMnN1YjI1QlkzUnBkbUYwWlNoMFlYTnJLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDBzWEc1Y2JpQWdJQ0F2THlCRVpXRmpkR2wyWVhSbElHRWdkR0Z6YTF4dUlDQWdJR1JsWVdOMGFYWmhkR1U2SUNocFpDa2dQVDRnZTF4dUlDQWdJQ0FnSUNCamIyNXpkQ0IwWVhOcklEMGdZV04wYVhabFZHRnphM05iYVdSZE8xeHVYRzRnSUNBZ0lDQWdJR2xtSUNoMFlYTnJLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjFjR1JoZEdWUmRXVjFaWE1vYVdRc0lHUmxZV04wYVhaaGRHVlJkV1YxWlN3Z1lXTjBhWFpoZEdWUmRXVjFaU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBZWE5yTG1selFXTjBhWFpsSUQwZ1ptRnNjMlU3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMFlYTnJMbTl1UkdWaFkzUnBkbUYwWlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUmhjMnN1YjI1RVpXRmpkR2wyWVhSbEtIUmhjMnNwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmU3hjYmx4dUlDQWdJQzh2SUU1MWJXSmxjaUJpWVdOclozSnZkVzVrSUhSaGMydGxjMXh1SUNBZ0lHZGxkRTV2YmtKaFkydG5jbTkxYm1SU2RXNXVhVzVuUTI5MWJuUTZJQ2dwSUQwK0lHNXZia0poWTJ0bmNtOTFibVJTZFc1dWFXNW5RMjkxYm5Rc1hHNWNiaUFnSUNBdkx5QkpibU55WlcxbGJuUWdZM1Z5Y21WdWRDQjBZWE5ySUVsRUlHRnVaQ0J5WlhSMWNtNWNiaUFnSUNCblpYUlVZWE5yU1dRNklDZ3BJRDArSUdOMWNuSmxiblJVWVhOclNXUXJLeXhjYmx4dUlDQWdJQzh2SUZKbGMyOXNkbVVnWVdOMGFYWmhkR1V2WkdWaFkzUnBkbUYwWlNCMFlYTnJaWE1nWVc1a0lISmxkSFZ5YmlCaFkzUnBkbVVnYVdSelhHNGdJQ0FnWjJWMFFXTjBhWFpsU1dSek9pQW9LU0E5UGlCN1hHNGdJQ0FnSUNBZ0lDOHFYRzRnSUNBZ0lDQWdJQ0FnSUNCMFlYTnJJR1JsWVdOMGFYWmhkR1VnY1hWbGRXVmNiaUFnSUNBZ0lDQWdLaTljYmlBZ0lDQWdJQ0FnWTI5dWMzUWdaR1ZoWTNScGRtRjBaVkYxWlhWbFRHVnVaM1JvSUQwZ1pHVmhZM1JwZG1GMFpWRjFaWFZsTG14bGJtZDBhRHRjYmx4dUlDQWdJQ0FnSUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElHUmxZV04wYVhaaGRHVlJkV1YxWlV4bGJtZDBhRHNnYVNzcktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0JwWkNBOUlHUmxZV04wYVhaaGRHVlJkV1YxWlZ0cFhUdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJR0ZqZEdsMlpVbGtTVzVrWlhnZ1BTQnlkVzV1YVc1blNXUnpMbWx1WkdWNFQyWW9hV1FwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2RHRnpheUE5SUdGamRHbDJaVlJoYzJ0elcybGtYVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnU1dZZ2RHaHBjeUJwY3lCaElISjFibTVwYm1jZ2RHRnpheXdnWkdWaFkzUnBkbUYwWlZ4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0dGamRHbDJaVWxrU1c1a1pYZ2dQaUF0TVNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISjFibTVwYm1kSlpITXVjM0JzYVdObEtHRmpkR2wyWlVsa1NXNWtaWGdzSURFcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIVndaR0YwWlZKMWJtNXBibWREYjNWdWRDaG1ZV3h6WlN3Z2RHRnpheTVwYzB4aGVua3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1JsYkdWMFpTQmhZM1JwZG1WVVlYTnJjMXRwWkYwN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvZEdGemF5NXZia1JsWVdOMGFYWmhkR1VwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR0Z6YXk1dmJrUmxZV04wYVhaaGRHVW9kR0Z6YXlrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdMeXBjYmlBZ0lDQWdJQ0FnSUNBZ0lFVnRjSFI1SUdSbFlXTjBhWFpoZEdVZ2NYVmxkV1V1SUZkbElIVnpaU0JnUVhKeVlYa3VjM0JzYVdObFlDQmlaV05oZFhObElHbDBJR1J2WlhOdUozUmNiaUFnSUNBZ0lDQWdJQ0FnSUhkdmNtdHpJRzl1SUhSb1pTQnZjbWxuYVc1aGJDQmhjbkpoZVNCemJ5QjNaU0JrYjI0bmRDQm9ZWFpsSUhSdklHZGhjbUpoWjJVZ1kyOXNiR1ZqZENCaGJubDBhR2x1WjF4dUlDQWdJQ0FnSUNBcUwxeHVJQ0FnSUNBZ0lDQmtaV0ZqZEdsMllYUmxVWFZsZFdVdWMzQnNhV05sS0RBc0lHUmxZV04wYVhaaGRHVlJkV1YxWlV4bGJtZDBhQ2s3WEc1Y2JpQWdJQ0FnSUNBZ0x5cGNiaUFnSUNBZ0lDQWdJQ0FnSUhSaGMyc2dZV04wYVhaaGRHVWdjWFZsZFdWY2JpQWdJQ0FnSUNBZ0tpOWNiaUFnSUNBZ0lDQWdZMjl1YzNRZ1lXTjBhWFpoZEdWUmRXVjFaVXhsYm1kMGFDQTlJR0ZqZEdsMllYUmxVWFZsZFdVdWJHVnVaM1JvTzF4dVhHNGdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2dZV04wYVhaaGRHVlJkV1YxWlV4bGJtZDBhRHNnYVNzcktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0JwWkNBOUlHRmpkR2wyWVhSbFVYVmxkV1ZiYVYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQmhZM1JwZG1WSlpFbHVaR1Y0SUQwZ2NuVnVibWx1WjBsa2N5NXBibVJsZUU5bUtHbGtLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUhSaGMyc2dQU0JoWTNScGRtVlVZWE5yYzF0cFpGMDdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJRWxtSUhSaGMyc2dhWE51SjNRZ1lXeHlaV0ZrZVNCeWRXNXVhVzVuTENCaFkzUnBkbUYwWlZ4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0dGamRHbDJaVWxrU1c1a1pYZ2dQVDA5SUMweElDWW1JSFJoYzJzcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvZEdGemF5NXBjMUJ5YVc5eWFYUjVLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISjFibTVwYm1kSlpITXVkVzV6YUdsbWRDaHBaQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NuVnVibWx1WjBsa2N5NXdkWE5vS0dsa0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IxY0dSaGRHVlNkVzV1YVc1blEyOTFiblFvZEhKMVpTd2dkR0Z6YXk1cGMweGhlbmtwTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFJoYzJzdWIyNUJZM1JwZG1GMFpTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMFlYTnJMbTl1UVdOMGFYWmhkR1VvZEdGemF5azdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnWVdOMGFYWmhkR1ZSZFdWMVpTNXpjR3hwWTJVb01Dd2dZV04wYVhaaGRHVlJkV1YxWlV4bGJtZDBhQ2s3WEc1Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhKMWJtNXBibWRKWkhNN1hHNGdJQ0FnZlZ4dWZUdGNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdGFzay9tYW5hZ2VyLmpzXG4gKiogbW9kdWxlIGlkID0gNTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIiwiZmlsZSI6InBvcG1vdGlvbi5nbG9iYWwuanMifQ==