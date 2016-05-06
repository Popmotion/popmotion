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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9sb2FkL2dsb2JhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOztJQUFZLFM7Ozs7QUFFWixJQUFNLFFBQVEsT0FBTyxNQUFyQjs7QUFFQSxVQUFVLFVBQVYsR0FBdUIsWUFBWTtBQUMvQixXQUFPLE1BQVAsR0FBZ0IsS0FBaEI7QUFDSCxDQUZEOztBQUlBLE9BQU8sTUFBUCxHQUFnQixPQUFPLFNBQVAsR0FBbUIsU0FBbkMiLCJmaWxlIjoiZ2xvYmFsLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qdmFuZGVyZG9lcy9Db2RlL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHBvcG1vdGlvbiBmcm9tICcuLi9wb3Btb3Rpb24nO1xuXG5jb25zdCBVSXJlZiA9IHdpbmRvdy5tb3Rpb247XG5cbnBvcG1vdGlvbi5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgIHdpbmRvdy5tb3Rpb24gPSBVSXJlZjtcbn07XG5cbndpbmRvdy5tb3Rpb24gPSB3aW5kb3cucG9wbW90aW9uID0gcG9wbW90aW9uOyJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wb3Btb3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztzQkFtQ1MsaUI7Ozs7QUFsQ1Q7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQkE7Ozs7Ozs7Ozs7OztBQVNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUF0Q08sSUFBTSxzQkFBTztBQUFBLHNDQUFJLElBQUo7QUFBSSxZQUFKO0FBQUE7O0FBQUEsNEVBQXlCLElBQXpCO0FBQUEsQ0FBYixDOztBQUNBLElBQU0sd0JBQVEsVUFBQyxLQUFEO0FBQUEsV0FBVyxvQkFBVSxLQUFWLENBQVg7QUFBQSxDQUFkO0FBQ0EsSUFBTSw0QkFBVSxVQUFDLEtBQUQ7QUFBQSxXQUFXLHNCQUFZLEtBQVosQ0FBWDtBQUFBLENBQWhCO0FBQ0EsSUFBTSx3QkFBUTtBQUFBLHVDQUFJLElBQUo7QUFBSSxZQUFKO0FBQUE7O0FBQUEsNkVBQTBCLElBQTFCO0FBQUEsQ0FBZDtBQUNBLElBQU0sd0JBQVE7QUFBQSx1Q0FBSSxJQUFKO0FBQUksWUFBSjtBQUFBOztBQUFBLDZFQUEwQixJQUExQjtBQUFBLENBQWQ7QUFDQSxJQUFNLHNCQUFPO0FBQUEsdUNBQUksSUFBSjtBQUFJLFlBQUo7QUFBQTs7QUFBQSw0RUFBeUIsSUFBekI7QUFBQSxDQUFiO1FBQ0EsTztRQUNBLFE7Ozs7UUFHQSxhO1FBQ0EsSTtRQUNBLEc7UUFDQSxNO1FBQ0EsRztRQUNBLE87Ozs7UUFHQSxNO0FBRUEsSUFBTSxtREFBTjs7O1FBR0ssSTtRQUNBLEs7Ozs7QUFlTCxJQUFNLGdDQUFZLEVBQUUsc0JBQUYsRUFBUyxzQkFBVCxFQUFnQixzQkFBaEIsRUFBdUIsMEJBQXZCLEVBQWdDLGtCQUFoQyxFQUFxQyxrQkFBckMsRUFBMEMsZ0JBQTFDLEVBQThDLGtCQUE5QyxFQUFtRCxzQkFBbkQsRUFBMEQsd0JBQTFELEVBQWtFLG9CQUFsRSxFQUFsQjs7O1FBR0ssWTs7Ozs7Ozs7Ozs7QUFVWixpQkFBTyxTQUFQLENBQWlCLEVBQWpCLEdBQXNCLFVBQVUsT0FBVixFQUFtQjtBQUNyQyxRQUFJLENBQUMsUUFBUSxPQUFiLEVBQXNCO0FBQ2xCLGtCQUFVLHVCQUFRLE9BQVIsQ0FBVjtBQUNIOztBQUVELFdBQU8sUUFBUSxPQUFSLENBQWdCLElBQWhCLENBQVA7QUFDSCxDQU5EOztRQVFTLE0iLCJmaWxlIjoicG9wbW90aW9uLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qdmFuZGVyZG9lcy9Db2RlL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydCBjbGFzc2VzIC0gbG9uZyB0ZXJtIGdvYWwgdG8gbW92ZSB0b3dhcmRzIGNvbXBvc2l0aW9uXG5pbXBvcnQgQWN0aW9uIGZyb20gJy4vYWN0aW9ucy9BY3Rpb24nO1xuaW1wb3J0IEZsb3cgZnJvbSAnLi9hY3Rpb25zL0Zsb3cnO1xuaW1wb3J0IFR3ZWVuIGZyb20gJy4vYWN0aW9ucy9Ud2Vlbic7XG5pbXBvcnQgUGh5c2ljcyBmcm9tICcuL2FjdGlvbnMvUGh5c2ljcyc7XG5pbXBvcnQgVHJhY2sgZnJvbSAnLi9hY3Rpb25zL1RyYWNrJztcbmltcG9ydCBUYXNrIGZyb20gJy4vdGFzay9UYXNrJztcbmltcG9ydCBJbnB1dCBmcm9tICcuL2lucHV0L0lucHV0JztcblxuLy8gRXhwb3J0IGZhY3RvcnkgZnVuY3Rpb25zXG5leHBvcnQgY29uc3QgZmxvdyA9ICguLi5hcmdzKSA9PiBuZXcgRmxvdyguLi5hcmdzKTtcbmV4cG9ydCBjb25zdCB0d2VlbiA9IChwcm9wcykgPT4gbmV3IFR3ZWVuKHByb3BzKTtcbmV4cG9ydCBjb25zdCBwaHlzaWNzID0gKHByb3BzKSA9PiBuZXcgUGh5c2ljcyhwcm9wcyk7XG5leHBvcnQgY29uc3QgdHJhY2sgPSAoLi4uYXJncykgPT4gbmV3IFRyYWNrKC4uLmFyZ3MpO1xuZXhwb3J0IGNvbnN0IGlucHV0ID0gKC4uLmFyZ3MpID0+IG5ldyBJbnB1dCguLi5hcmdzKTtcbmV4cG9ydCBjb25zdCB0YXNrID0gKC4uLmFyZ3MpID0+IG5ldyBUYXNrKC4uLmFyZ3MpO1xuZXhwb3J0IHN0YWdnZXIgZnJvbSAnLi9pbmMvc3RhZ2dlcic7XG5leHBvcnQgdGltZWxpbmUgZnJvbSAnLi9pbmMvdGltZWxpbmUnO1xuXG4vLyBBZGFwdGVyc1xuZXhwb3J0IGNyZWF0ZUFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyL2FkYXB0ZXInO1xuZXhwb3J0IGF0dHIgZnJvbSAnLi9hZGFwdGVyL2F0dHItYWRhcHRlcic7XG5leHBvcnQgY3NzIGZyb20gJy4vYWRhcHRlci9jc3MtYWRhcHRlcic7XG5leHBvcnQgb2JqZWN0IGZyb20gJy4vYWRhcHRlci9vYmplY3QtYWRhcHRlcic7XG5leHBvcnQgc3ZnIGZyb20gJy4vYWRhcHRlci9zdmctYWRhcHRlcic7XG5leHBvcnQgc3ZnUGF0aCBmcm9tICcuL2FkYXB0ZXIvc3ZnLXBhdGgtYWRhcHRlcic7XG5cbi8vIEVhc2luZ1xuZXhwb3J0IGVhc2luZyBmcm9tICcuL2FjdGlvbnMvZWFzaW5nL3ByZXNldC1lYXNpbmcnO1xuaW1wb3J0IGdldEZsb3cgZnJvbSAnLi9hY3Rpb25zL2Zsb3cvZ2V0LWZsb3cnO1xuZXhwb3J0IGNvbnN0IGRldGVjdEZsb3cgPSBnZXRGbG93O1xuXG4vLyBVdGlsc1xuZXhwb3J0ICogYXMgY2FsYyBmcm9tICcuL2luYy9jYWxjJztcbmV4cG9ydCAqIGFzIHV0aWxzIGZyb20gJy4vaW5jL3V0aWxzJztcbmV4cG9ydCB7IHNldEdsb2JhbERpbGF0aW9uIH0gZnJvbSAnLi90YXNrL3RpbWVyJztcblxuLy8gVmFsdWUgdHlwZXNcbmltcG9ydCBhbHBoYSBmcm9tICcuL3ZhbHVlLXR5cGVzL2FscGhhJztcbmltcG9ydCBhbmdsZSBmcm9tICcuL3ZhbHVlLXR5cGVzL2FuZ2xlJztcbmltcG9ydCBjb2xvciBmcm9tICcuL3ZhbHVlLXR5cGVzL2NvbG9yJztcbmltcG9ydCBjb21wbGV4IGZyb20gJy4vdmFsdWUtdHlwZXMvY29tcGxleCc7XG5pbXBvcnQgaGV4IGZyb20gJy4vdmFsdWUtdHlwZXMvaGV4JztcbmltcG9ydCBoc2wgZnJvbSAnLi92YWx1ZS10eXBlcy9oc2wnO1xuaW1wb3J0IHB4IGZyb20gJy4vdmFsdWUtdHlwZXMvcHgnO1xuaW1wb3J0IHJnYiBmcm9tICcuL3ZhbHVlLXR5cGVzL3JnYic7XG5pbXBvcnQgc2NhbGUgZnJvbSAnLi92YWx1ZS10eXBlcy9zY2FsZSc7XG5pbXBvcnQgc2hhZG93IGZyb20gJy4vdmFsdWUtdHlwZXMvc2hhZG93JztcbmltcG9ydCB1bml0IGZyb20gJy4vdmFsdWUtdHlwZXMvdW5pdCc7XG5leHBvcnQgY29uc3QgdmFsdWVUeXBlID0geyBhbHBoYSwgYW5nbGUsIGNvbG9yLCBjb21wbGV4LCBoZXgsIGhzbCwgcHgsIHJnYiwgc2NhbGUsIHNoYWRvdywgdW5pdCB9O1xuXG4vLyBUcmFuc2Zvcm1lcnNcbmV4cG9ydCAqIGFzIHRyYW5zZm9ybWVycyBmcm9tICcuL2luYy90cmFuc2Zvcm1lcnMnO1xuXG4vKlxuICAgIFJldHVybnMgYSB2ZXJzaW9uIG9mIHRoZSBBY3Rpb24gYm91bmQgdG8gYSBGbG93XG5cbiAgICBXZSdyZSBhZGRpbmcgYG9uYCBoZXJlIGJlY2F1c2UgRmxvdyBleHRlbmRzIEFjdGlvbixcbiAgICBvdGhlcndpc2UgY3JlYXRpbmcgYSBjaXJjdWxhciBtb2R1bGFyIGRlcGVuZGVuY3kuIEZ1dHVyZVxuICAgIHJlZmFjdG9yaW5nLCBpZSBtb3ZpbmcgdG8gYSBjb21wb3NpdGlvbmFsIG1vZGVsIHdpbGxcbiAgICByZW1vdmUgdGhlIG5lZWQgZm9yIHVzIHRvIGRvIHRoaXMgaGVyZS5cbiovXG5BY3Rpb24ucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICBpZiAoIWVsZW1lbnQuY29ubmVjdCkge1xuICAgICAgICBlbGVtZW50ID0gZ2V0RmxvdyhlbGVtZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudC5jb25uZWN0KHRoaXMpO1xufTtcblxuZXhwb3J0IHsgQWN0aW9uIH07Il19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90YXNrL3RpbWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUEsSUFBTSxjQUFjLEVBQXBCOztBQUVBLElBQUksVUFBVSxDQUFkO0FBQ0EsSUFBSSxVQUFVLElBQWQ7QUFDQSxJQUFJLFdBQVcsQ0FBZjs7a0JBRWU7QUFDWCxZQUFRLFVBQUMsVUFBRCxFQUFnQjtBQUNwQixrQkFBVSxLQUFLLEdBQUwsQ0FBUyxLQUFLLEdBQUwsQ0FBUyxhQUFhLE9BQXRCLEVBQStCLFdBQS9CLENBQVQsRUFBc0QsQ0FBdEQsSUFBMkQsUUFBckU7QUFDQSxrQkFBVSxVQUFWO0FBQ0gsS0FKVTs7QUFNWCxXQUFPO0FBQUEsZUFBTSxVQUFVLHlCQUFoQjtBQUFBLEtBTkk7O0FBUVgsZ0JBQVk7QUFBQSxlQUFNLE9BQU47QUFBQTtBQVJELEM7QUFXUixJQUFNLGdEQUFvQixVQUFDLFdBQUQ7QUFBQSxXQUFpQixXQUFXLFdBQTVCO0FBQUEsQ0FBMUIiLCJmaWxlIjoidGltZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2p2YW5kZXJkb2VzL0NvZGUvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3VycmVudFRpbWUgfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuXG5jb25zdCBNQVhfRUxBUFNFRCA9IDMzO1xuXG5sZXQgY3VycmVudCA9IDA7XG5sZXQgZWxhcHNlZCA9IDE2Ljc7XG5sZXQgZGlsYXRpb24gPSAxO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgdXBkYXRlOiAoZnJhbWVzdGFtcCkgPT4ge1xuICAgICAgICBlbGFwc2VkID0gTWF0aC5tYXgoTWF0aC5taW4oZnJhbWVzdGFtcCAtIGN1cnJlbnQsIE1BWF9FTEFQU0VEKSwgMSkgKiBkaWxhdGlvbjtcbiAgICAgICAgY3VycmVudCA9IGZyYW1lc3RhbXA7XG4gICAgfSxcblxuICAgIHN0YXJ0OiAoKSA9PiBjdXJyZW50ID0gY3VycmVudFRpbWUoKSxcblxuICAgIGdldEVsYXBzZWQ6ICgpID0+IGVsYXBzZWRcbn07XG5cbmV4cG9ydCBjb25zdCBzZXRHbG9iYWxEaWxhdGlvbiA9IChuZXdEaWxhdGlvbikgPT4gZGlsYXRpb24gPSBuZXdEaWxhdGlvbjsiXX0=

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL0FjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNLHVCQUF1QiwwQkFBaUIsTUFBOUM7O0FBRUEsSUFBTSxrQkFBa0I7QUFBQSxRQUFHLEtBQUgsUUFBRyxLQUFIO0FBQUEsUUFBVSxPQUFWLFFBQVUsT0FBVjtBQUFBLFFBQW1CLFdBQW5CLFFBQW1CLFdBQW5CO0FBQUEsUUFBZ0MsT0FBaEMsUUFBZ0MsT0FBaEM7QUFBQSxXQUE4QyxRQUFRLE9BQVIsRUFBaUIsS0FBakIsRUFBd0IsV0FBeEIsQ0FBOUM7QUFBQSxDQUF4Qjs7QUFFQSxJQUFNLDBCQUEwQixVQUFDLEtBQUQ7QUFBQSxXQUFXLENBQUMsTUFBTSxLQUFOLENBQUQsR0FBZ0IsV0FBVyxLQUFYLENBQWhCLEdBQW9DLEtBQS9DO0FBQUEsQ0FBaEM7O0lBRU0sTTs7O0FBQ0Ysc0JBQXdCO0FBQUEsWUFBWixLQUFZLHlEQUFKLEVBQUk7O0FBQUE7O0FBQ3BCLGNBQU0sS0FBTixHQUFjLEVBQWQ7QUFDQSxjQUFNLFNBQU4sR0FBa0IsRUFBbEI7QUFDQSxjQUFNLFVBQU4sR0FBbUIsRUFBbkI7QUFIb0IsZ0RBSXBCLGlCQUFNLEtBQU4sQ0FKb0I7QUFLdkI7Ozs7Ozs7Ozs7cUJBU0QsRyxrQkFBZ0I7QUFBQSxZQUFaLEtBQVkseURBQUosRUFBSTs7QUFDWixhQUFLLE1BQUwsR0FBYyxLQUFLLE1BQUwsSUFBZSxFQUE3Qjs7QUFEWSxZQUdKLE1BSEksR0FHc0IsS0FIdEIsQ0FHSixNQUhJOztBQUFBLFlBR08sVUFIUCw0QkFHc0IsS0FIdEI7O0FBSVosWUFBTSxjQUFjLEVBQXBCOzs7QUFHQSx3QkFBTSxHQUFOLFlBQVUsVUFBVjs7O0FBR0EsWUFBSSxLQUFLLE9BQVQsRUFBa0I7QUFDZCxnQkFBSSxDQUFDLEtBQUssT0FBVixFQUFtQjs7QUFFZixx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O0FBQ0osd0JBQU0sSUFBTjtBQUNBLGVBQU8sSUFBUDtBQUNILEs7O3FCQUVELE0scUJBQVM7QUFDTCx3QkFBTSxLQUFOO0FBQ0EsZUFBTyxJQUFQO0FBQ0gsSzs7cUJBRUQsTSxxQkFBUztBQUNMLGVBQU8sS0FBSyxRQUFMLEdBQWdCLEtBQUssS0FBTCxFQUFoQixHQUErQixLQUFLLE1BQUwsRUFBdEM7QUFDSCxLOztxQkFFRCxLLG9CQUFRO0FBQ0osWUFBTSxTQUFTLEtBQUssTUFBcEI7QUFDQSx3QkFBTSxLQUFOOztBQUVBLGFBQUssSUFBSSxHQUFULElBQWdCLE1BQWhCLEVBQXdCO0FBQ3BCLGdCQUFJLE9BQU8sY0FBUCxDQUFzQixHQUF0QixDQUFKLEVBQWdDO0FBQzVCLHVCQUFPLEdBQVAsRUFBWSxJQUFaLEdBQW1CLE9BQU8sR0FBUCxFQUFZLE1BQVosR0FBcUIsT0FBTyxHQUFQLEVBQVksT0FBcEQ7QUFDSDtBQUNKOztBQUVELGVBQU8sSUFBUDtBQUNILEs7O1dBRU0sa0IsK0JBQW1CLEssRUFBTztBQUM3Qiw0QkFBWSxLQUFLLFNBQUwsQ0FBZSxZQUEzQixFQUE0QyxLQUE1QztBQUNILEs7O1dBRU0sa0IsK0JBQW1CLEssRUFBTztBQUM3Qiw0QkFBWSxLQUFLLFNBQUwsQ0FBZSxZQUEzQixFQUE0QyxLQUE1QztBQUNILEs7Ozs7O0FBR0wsT0FBTyxTQUFQLENBQWlCLGdCQUFqQixHQUFvQyxTQUFwQztBQUNBLE9BQU8sU0FBUCxDQUFpQixZQUFqQixHQUFnQztBQUM1QixhQUFTLENBRG1CO0FBRTVCLGNBQVUsQ0FGa0I7QUFHNUIsV0FBTyxLQUhxQjtBQUk1QixTQUFLLFNBSnVCO0FBSzVCLFNBQUssU0FMdUI7QUFNNUIsZUFBVztBQU5pQixDQUFoQzs7a0JBU2UsTSIsImZpbGUiOiJBY3Rpb24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2p2YW5kZXJkb2VzL0NvZGUvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRhc2sgZnJvbSAnLi4vdGFzay9UYXNrJztcbmltcG9ydCB7IHNwZWVkUGVyU2Vjb25kIH0gZnJvbSAnLi4vaW5jL2NhbGMnO1xuaW1wb3J0IHsgaXNOdW0sIGlzT2JqLCBpc1N0cmluZyB9IGZyb20gJy4uL2luYy91dGlscyc7XG5pbXBvcnQgZGV0ZWN0VmFsdWVUeXBlIGZyb20gJy4uL3ZhbHVlLXR5cGVzL2RldGVjdCc7XG5pbXBvcnQgTlVNRVJJQ0FMX1ZBTFVFUyBmcm9tICcuLi9pbmMvbnVtZXJpY2FsLXZhbHVlcyc7XG5pbXBvcnQgZGV0ZWN0QWRhcHRlciBmcm9tICcuLi9pbmMvZGV0ZWN0LWFkYXB0ZXInO1xuXG5jb25zdCBOVU1fTlVNRVJJQ0FMX1ZBTFVFUyA9IE5VTUVSSUNBTF9WQUxVRVMubGVuZ3RoO1xuXG5jb25zdCBkZWZhdWx0UmVuZGVyZXIgPSAoeyBzdGF0ZSwgYWRhcHRlciwgYWRhcHRlckRhdGEsIGVsZW1lbnQgfSkgPT4gYWRhcHRlcihlbGVtZW50LCBzdGF0ZSwgYWRhcHRlckRhdGEpO1xuXG5jb25zdCBjb252ZXJ0SWZTaG91bGRCZU51bWJlciA9ICh2YWx1ZSkgPT4gIWlzTmFOKHZhbHVlKSA/IHBhcnNlRmxvYXQodmFsdWUpIDogdmFsdWU7XG5cbmNsYXNzIEFjdGlvbiBleHRlbmRzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzID0ge30pIHtcbiAgICAgICAgcHJvcHMuc3RhdGUgPSB7fTtcbiAgICAgICAgcHJvcHMudmFsdWVLZXlzID0gW107XG4gICAgICAgIHByb3BzLnBhcmVudEtleXMgPSBbXTtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgICMgU2V0IEFjdGlvbiBwcm9wZXJ0aWVzXG4gICAgICAgICMjIFNldCB1c2VyLWRlZmluZWQgQWN0aW9uIHByb3BlcnRpZXNcblxuICAgICAgICBAcGFyYW0gW29iamVjdF1cbiAgICAgICAgQHJldHVybiBbQWN0aW9uXVxuICAgICovXG4gICAgc2V0KHByb3BzID0ge30pIHtcbiAgICAgICAgdGhpcy52YWx1ZXMgPSB0aGlzLnZhbHVlcyB8fCB7fTtcblxuICAgICAgICBjb25zdCB7IHZhbHVlcywgLi4ucHJvcHNUb1NldCB9ID0gcHJvcHM7XG4gICAgICAgIGNvbnN0IGluaGVyaXRhYmxlID0ge307XG5cbiAgICAgICAgLy8gU2V0IG5vbi1jb25zdW1lZCBwcm9wZXJ0aWVzXG4gICAgICAgIHN1cGVyLnNldChwcm9wc1RvU2V0KTtcblxuICAgICAgICAvLyBEZXRlY3QgY29ycmVjdCBgYWRhcHRlcmAgaWYgbm9uZSBleGlzdHMgYW5kIGBlbGVtZW50YCBpcyBiZWluZyBzZXRcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmFkYXB0ZXIpIHtcbiAgICAgICAgICAgICAgICAvLyBEdWNrdHlwaXNoIGNoZWNrIGZvciBBZGFwdGVyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGFwdGVyID0gZGV0ZWN0QWRhcHRlcih0aGlzLmVsZW1lbnQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYWRhcHRlci5nZXRFbGVtZW50RGF0YSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkYXB0ZXJEYXRhID0gdGhpcy5hZGFwdGVyLmdldEVsZW1lbnREYXRhKHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXRoaXMub25SZW5kZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uUmVuZGVyID0gZGVmYXVsdFJlbmRlcmVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUHJpbWUgYW4gb2JqZWN0IHRvIGluaGVyaXQgZnJvbSwgd2l0aCBvbmx5IGB2YWx1ZWAgcHJvcGVydGllc1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5kZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRlZmF1bHRWYWx1ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzVG9TZXQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBpbmhlcml0YWJsZVtrZXldID0gcHJvcHNUb1NldFtrZXldO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpc1trZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5oZXJpdGFibGVba2V5XSA9IHRoaXNba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgZXhpc3RpbmcgdmFsdWVzIHdpdGggaW5oZXJpdGFibGUgcHJvcGVydGllc1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy52YWx1ZXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZXNba2V5XSA9IHsgLi4udGhpcy52YWx1ZXNba2V5XSwgLi4uaW5oZXJpdGFibGUgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZVxuICAgICAgICBpZiAodmFsdWVzKSB7XG4gICAgICAgICAgICB0aGlzLnNldFZhbHVlcyh2YWx1ZXMsIGluaGVyaXRhYmxlKTtcblxuICAgICAgICAgICAgLy8gUHJlY29tcHV0ZSBudW1iZXIgb2YgdmFsdWUga2V5IGFuZCBwYXJlbnQga2V5cyB0byBhdm9pZCBwZXItZnJhbWUgbWVhc3VyZW1lbnRcbiAgICAgICAgICAgIHRoaXMubnVtVmFsdWVLZXlzID0gdGhpcy52YWx1ZUtleXMubGVuZ3RoO1xuICAgICAgICAgICAgdGhpcy5udW1QYXJlbnRLZXlzID0gdGhpcy5wYXJlbnRLZXlzLmxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldFZhbHVlcyh2YWx1ZXMsIGluaGVyaXQpIHtcbiAgICAgICAgLy8gSXRlcmF0ZSBvdmVyIGFsbCBpbmNvbWluZyB2YWx1ZXMgYW5kIHNldFxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBsZXQgaGFzQ2hpbGRyZW4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHt9O1xuXG4gICAgICAgICAgICAgICAgLy8gTWVyZ2UgaW50byBleGlzdGluZyB2YWx1ZSBvciBjcmVhdGUgbmV3XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWVBbHJlYWR5RXhpc3RzID0gdGhpcy52YWx1ZXNba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIGxldCBuZXdWYWx1ZSA9IHZhbHVlQWxyZWFkeUV4aXN0cyA/IHsgLi4udGhpcy52YWx1ZXNba2V5XSB9IDogeyAuLi5pbmhlcml0IH07XG5cbiAgICAgICAgICAgICAgICAvLyBJZiB2YWx1ZXMgaXMgbm90IGFuIG9iamVjdCwgYXNzaWduIHZhbHVlIHRvIGRlZmF1bHQgcHJvcFxuICAgICAgICAgICAgICAgIGlmICghaXNPYmoodmFsdWVzW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlW3RoaXMuZGVmYXVsdFZhbHVlUHJvcF0gPSB2YWx1ZXNba2V5XTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IHsgLi4ubmV3VmFsdWUsIC4uLnZhbHVlc1trZXldIH07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gSWYgd2UndmUgZ290IGFuIGFkYXB0ZXIsIGdldCB0aGUgY3VycmVudCB2YWx1ZVxuICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZS5jdXJyZW50ID09PSB1bmRlZmluZWQgJiYgdGhpcy5hZGFwdGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLmN1cnJlbnQgPSBjb252ZXJ0SWZTaG91bGRCZU51bWJlcih0aGlzLmFkYXB0ZXIuZ2V0KHRoaXMuZWxlbWVudCwga2V5KSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlLmZyb20gPT09IHVuZGVmaW5lZCAmJiB0aGlzLmFkYXB0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUuZnJvbSA9IG5ld1ZhbHVlLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gQXBwbHkgZGVmYXVsdCB2YWx1ZSBwcm9wZXJ0aWVzXG4gICAgICAgICAgICAgICAgaWYgKCF2YWx1ZUFscmVhZHlFeGlzdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSB7IC4uLnRoaXMuZGVmYXVsdFZhbHVlLCAuLi5uZXdWYWx1ZSB9O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIElmIHdlIGRvbid0IGhhdmUgYSB2YWx1ZSB0eXBlIGFuZCB3ZSBkbyBoYXZlIGFuIEFkYXB0ZXIsIGNoZWNrIGZvciB0eXBlIHdpdGggdmFsdWUga2V5XG4gICAgICAgICAgICAgICAgaWYgKCFuZXdWYWx1ZS50eXBlICYmIHRoaXMuYWRhcHRlciAmJiB0aGlzLmFkYXB0ZXIuY2hlY2tWYWx1ZVR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUudHlwZSA9IHRoaXMuYWRhcHRlci5jaGVja1ZhbHVlVHlwZShrZXkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIElmIHdlIHN0aWxsIGRvbid0IGhhdmUgYSB2YWx1ZSB0eXBlIGFuZCB0aGlzIGlzIHRoZSBmaXJzdCB0aW1lIHdlJ3ZlIHNldCB0aGlzIHZhbHVlLCBjaGVjayBudW1lcmljYWwgdmFsdWVzIGZvciBzdHJpbmdzIGFuZCB0ZXN0XG4gICAgICAgICAgICAgICAgaWYgKCFuZXdWYWx1ZS50eXBlICYmICF0aGlzLnZhbHVlc1trZXldKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLnR5cGUgPSBkZXRlY3RWYWx1ZVR5cGUobmV3VmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIElmIHdlIGhhdmUgYSB2YWx1ZSB0eXBlLCBoYW5kbGUuIFRoaXMgaXMgbXkgbGVhc3QgZmF2b3VyaXRlIHBhcnQgb2YgUG9wbW90aW9uLCBzby4uLiBlbmpveS5cbiAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE5VTV9OVU1FUklDQUxfVkFMVUVTOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3BOYW1lID0gTlVNRVJJQ0FMX1ZBTFVFU1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlUHJvcCA9IG5ld1ZhbHVlW3Byb3BOYW1lXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhpcyBwcm9wIGlzIGEgc3RyaW5nIGFuZCB3ZSBoYXZlIGEgc3BsaXR0ZXIsIHNwbGl0XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUudHlwZS5oYXNPd25Qcm9wZXJ0eSgnc3BsaXQnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNwbGl0UHJvcCA9IGlzU3RyaW5nKHZhbHVlUHJvcCkgPyBuZXdWYWx1ZS50eXBlLnNwbGl0KHZhbHVlUHJvcCkgOiB7fTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHNwbGl0S2V5IGluIHNwbGl0UHJvcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3BsaXRQcm9wLmhhc093blByb3BlcnR5KHNwbGl0S2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tYmluZWRLZXkgPSBrZXkgKyBzcGxpdEtleTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgd2UgZG9uJ3QgaGF2ZSBhIGNoaWxkIHZhbHVlIGZvciB0aGlzIGtleSwgbWFrZSBvbmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY2hpbGRyZW5bY29tYmluZWRLZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVmYXVsdFZhbHVlID0gKG5ld1ZhbHVlLnR5cGUuZGVmYXVsdFByb3BzICYmIG5ld1ZhbHVlLnR5cGUuZGVmYXVsdFByb3BzW3NwbGl0S2V5XSkgPyBuZXdWYWx1ZS50eXBlLmRlZmF1bHRQcm9wc1tzcGxpdEtleV0gOiBuZXdWYWx1ZS50eXBlLmRlZmF1bHRQcm9wcyB8fCB7fTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuW2NvbWJpbmVkS2V5XSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ubmV3VmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmRlZmF1bHRWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkS2V5OiBzcGxpdEtleVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgY2hpbGRyZW5bY29tYmluZWRLZXldLnR5cGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc0NoaWxkcmVuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuW2NvbWJpbmVkS2V5XVtwcm9wTmFtZV0gPSBwYXJzZUZsb2F0KHNwbGl0UHJvcFtzcGxpdEtleV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgd2UgaGF2ZSBhIHRlbXBsYXRlIGZ1bmN0aW9uLCBnZW5lcmF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbmV3VmFsdWUudGVtcGxhdGUgJiYgbmV3VmFsdWUudHlwZS50ZW1wbGF0ZSAmJiBpc1N0cmluZyh2YWx1ZVByb3ApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLnRlbXBsYXRlID0gbmV3VmFsdWUudHlwZS50ZW1wbGF0ZSh2YWx1ZVByb3ApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobmV3VmFsdWUudHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IHsgLi4ubmV3VmFsdWUsIC4uLm5ld1ZhbHVlLnR5cGUuZGVmYXVsdFByb3BzIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZVByb3AgIT09IHVuZGVmaW5lZCAmJiBuZXdWYWx1ZS50eXBlLnBhcnNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWVbcHJvcE5hbWVdID0gbmV3VmFsdWUudHlwZS5wYXJzZSh2YWx1ZVByb3AsIG5ld1ZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gLy8gRW5kIHZhbHVlIHR5cGUgbm9uc2Vuc2VcblxuICAgICAgICAgICAgICAgIC8vIFNldCBgcHJldmAgdG8gYGN1cnJlbnRgIGZvciBmaXJzdCBmcmFtZSBhZnRlciBzZXRcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZS5wcmV2ID0gbmV3VmFsdWUuY3VycmVudDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGlzIHZhbHVlIGRvZXNuJ3QgaGF2ZSBjaGlsZHJlbiwgYWRkIHRvIHZhbHVlS2V5c1xuICAgICAgICAgICAgICAgIGlmICghaGFzQ2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudmFsdWVLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWVLZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gT3IgYWRkIHRvIHBhcmVudEtleXNcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS5jaGlsZHJlbiA9IG5ld1ZhbHVlLmNoaWxkcmVuIHx8IHt9O1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnRLZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0VmFsdWVzKGNoaWxkcmVuKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlc1trZXldID0gbmV3VmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBEZWNpZGUgd2hldGhlciB0aGlzIEFjdGlvbiB3aWxsIHJlbmRlciBvbiBuZXh0IGZyYW1lXG5cbiAgICAgICAgQHBhcmFtIFtBY3Rpb25dXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgICAgICBAcGFyYW0gW251bWJlcl1cbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybiB0cnVlIHRvIHJlbmRlclxuICAgICovXG4gICAgd2lsbFJlbmRlcihhY3Rpb24sIGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgICAgICAgbGV0IGhhc0NoYW5nZWQgPSBmYWxzZTtcblxuICAgICAgICAvLyBDaGVjayBpZiBiYXNlIHZhbHVlcyBoYXZlIHVwZGF0ZWQgXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gdGhpcy52YWx1ZUtleXNbaV07XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG5cbiAgICAgICAgICAgIC8vIFJ1biB0cmFuc2Zvcm0gZnVuY3Rpb24gKGlmIHByZXNlbnQpXG4gICAgICAgICAgICBpZiAodmFsdWUudHJhbnNmb3JtKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IHZhbHVlLnRyYW5zZm9ybSh2YWx1ZS5jdXJyZW50LCBrZXksIHRoaXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDYXAgbWluaW11bVxuICAgICAgICAgICAgaWYgKGlzTnVtKHZhbHVlLm1pbikpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gTWF0aC5tYXgodmFsdWUuY3VycmVudCwgdmFsdWUubWluKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ2FwIG1heGltdW1cbiAgICAgICAgICAgIGlmIChpc051bSh2YWx1ZS5tYXgpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IE1hdGgubWluKHZhbHVlLmN1cnJlbnQsIHZhbHVlLm1heCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJvdW5kIG51bWJlclxuICAgICAgICAgICAgaWYgKHZhbHVlLnJvdW5kKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IE1hdGgucm91bmQodmFsdWUuY3VycmVudCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhbHVlLmZyYW1lQ2hhbmdlID0gdmFsdWUuY3VycmVudCAtIHZhbHVlLnByZXY7XG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSB2ZWxvY2l0eVxuICAgICAgICAgICAgaWYgKCF0aGlzLmNhbGN1bGF0ZXNWZWxvY2l0eSkge1xuICAgICAgICAgICAgICAgIHZhbHVlLnZlbG9jaXR5ID0gc3BlZWRQZXJTZWNvbmQodmFsdWUuZnJhbWVDaGFuZ2UsIGVsYXBzZWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiB0aGlzIHZhbHVlIGhhcyBjaGFuZ2VkXG4gICAgICAgICAgICBpZiAodmFsdWUucHJldiAhPT0gdmFsdWUuY3VycmVudCkge1xuICAgICAgICAgICAgICAgIGhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHZhbHVlLnByZXYgPSB2YWx1ZS5jdXJyZW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBBcHBlbmQgdW5pdFxuICAgICAgICAgICAgY29uc3QgdmFsdWVGb3JTdGF0ZSA9ICh2YWx1ZS50eXBlICYmIHZhbHVlLnR5cGUuc2VyaWFsaXplKSA/IHZhbHVlLnR5cGUuc2VyaWFsaXplKHZhbHVlLmN1cnJlbnQsIHZhbHVlKSA6IHZhbHVlLmN1cnJlbnQ7XG5cbiAgICAgICAgICAgIC8vIEFkZCB0byBzdGF0ZSBpZiB0aGlzIGlzIG5vdCBhIGNoaWxkIHZhdWVcbiAgICAgICAgICAgIGlmICghdmFsdWUucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZVtrZXldID0gdmFsdWVGb3JTdGF0ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZXNbdmFsdWUucGFyZW50XS5jaGlsZHJlblt2YWx1ZS5jaGlsZEtleV0gPSB2YWx1ZUZvclN0YXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIHBhcmVudCB2YWx1ZXNcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVBhcmVudEtleXM7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gdGhpcy5wYXJlbnRLZXlzW2ldO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuXG4gICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gdmFsdWUudHlwZS5jb21iaW5lKHZhbHVlLmNoaWxkcmVuLCB2YWx1ZS50ZW1wbGF0ZSk7XG5cbiAgICAgICAgICAgIHRoaXMuc3RhdGVba2V5XSA9IHZhbHVlLmN1cnJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5vbkZyYW1lKSB7XG4gICAgICAgICAgICB0aGlzLm9uRnJhbWUodGhpcy5zdGF0ZSwgdGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKHRoaXMub25DbGVhbnVwKSA/IHRydWUgOiBoYXNDaGFuZ2VkO1xuICAgIH1cblxuICAgIGluaGVyaXQocHJvcHMgPSB7fSkge1xuICAgICAgICBjb25zdCB7IHZhbHVlcywgLi4ucHJvcHNUb1NldCB9ID0gcHJvcHM7XG4gICAgICAgIGNvbnN0IG5ld0FjdGlvbiA9IHN1cGVyLmluaGVyaXQocHJvcHNUb1NldCk7XG5cbiAgICAgICAgaWYgKHZhbHVlcykge1xuICAgICAgICAgICAgbmV3QWN0aW9uLnNldCh7IHZhbHVlcyB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXdBY3Rpb247XG4gICAgfVxuXG4gICAgcGF1c2UoKSB7XG4gICAgICAgIHN1cGVyLnN0b3AoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmVzdW1lKCkge1xuICAgICAgICBzdXBlci5zdGFydCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB0b2dnbGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzQWN0aXZlID8gdGhpcy5wYXVzZSgpIDogdGhpcy5yZXN1bWUoKTtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gdGhpcy52YWx1ZXM7XG4gICAgICAgIHN1cGVyLnN0YXJ0KCk7XG5cbiAgICAgICAgZm9yIChsZXQga2V5IGluIHZhbHVlcykge1xuICAgICAgICAgICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVzW2tleV0ucHJldiA9IHZhbHVlc1trZXldLm9yaWdpbiA9IHZhbHVlc1trZXldLmN1cnJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzdGF0aWMgZXh0ZW5kRGVmYXVsdFZhbHVlKHByb3BzKSB7XG4gICAgICAgIHJldHVybiB7IC4uLnRoaXMucHJvdG90eXBlLmRlZmF1bHRWYWx1ZSwgLi4ucHJvcHMgfTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZXh0ZW5kRGVmYXVsdFByb3BzKHByb3BzKSB7XG4gICAgICAgIHJldHVybiB7IC4uLnRoaXMucHJvdG90eXBlLmRlZmF1bHRQcm9wcywgLi4ucHJvcHMgfTtcbiAgICB9XG59XG5cbkFjdGlvbi5wcm90b3R5cGUuZGVmYXVsdFZhbHVlUHJvcCA9ICdjdXJyZW50JztcbkFjdGlvbi5wcm90b3R5cGUuZGVmYXVsdFZhbHVlID0ge1xuICAgIGN1cnJlbnQ6IDAsXG4gICAgdmVsb2NpdHk6IDAsXG4gICAgcm91bmQ6IGZhbHNlLFxuICAgIG1pbjogdW5kZWZpbmVkLFxuICAgIG1heDogdW5kZWZpbmVkLFxuICAgIHRyYW5zZm9ybTogdW5kZWZpbmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBY3Rpb247XG4iXX0=

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
	//# sourceMappingURL=data:application/json;base64,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ZSI6IkZsb3cuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2p2YW5kZXJkb2VzL0NvZGUvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdGlvbiBmcm9tICcuLi9hY3Rpb25zL0FjdGlvbic7XG5pbXBvcnQgZ2VuZXJhdGVCbGVuZEN1cnZlIGZyb20gJy4vZmxvdy9nZW5lcmF0ZS1ibGVuZC1jdXJ2ZSc7XG5cbi8qXG4gICAgTWV0aG9kcyBhbmQgcHJvcGVydGllcyB0byBhZGQgdG8gYm91bmQgQWN0aW9uc1xuKi9cbmNvbnN0IGJvdW5kT25TdGFydCA9IChhY3Rpb24pID0+IGFjdGlvbi5mbG93LmFjdGl2YXRlQWN0aW9uKGFjdGlvbi5pZCwgYWN0aW9uKTtcbmNvbnN0IGJvdW5kT25TdG9wID0gKGFjdGlvbikgPT4gYWN0aW9uLmZsb3cuZGVhY3RpdmF0ZUFjdGlvbihhY3Rpb24uaWQpO1xuY29uc3QgYm91bmRQcm9wcyA9IChmbG93KSA9PiAoe1xuICAgIGZsb3csXG4gICAgaXNQcmlvcml0eTogdHJ1ZSxcbiAgICBvbkFjdGl2YXRlOiBib3VuZE9uU3RhcnQsXG4gICAgb25EZWFjdGl2YXRlOiBib3VuZE9uU3RvcFxufSk7XG5cbmNsYXNzIEZsb3cgZXh0ZW5kcyBBY3Rpb24ge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5hY3RpdmVBY3Rpb25zID0ge307XG4gICAgICAgIHRoaXMubnVtQWN0aXZlQWN0aW9ucyA9IDA7XG4gICAgfVxuXG4gICAgc2V0KHByb3BzKSB7XG4gICAgICAgIHN1cGVyLnNldChwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5vbmNlKCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgQmluZCBBY3Rpb24gdG8gQWN0b3JcbiAgICAqL1xuICAgIGNvbm5lY3QoYWN0aW9uKSB7XG4gICAgICAgIGNvbnN0IGluaGVyaXRlZEFjdGlvbiA9IGFjdGlvbi5pbmhlcml0KCk7XG4gICAgICAgIGxldCBuZXdWYWx1ZXMgPSB7fTtcbiAgICAgICAgbGV0IGhhc05ld1ZhbHVlcyA9IGZhbHNlO1xuXG4gICAgICAgIC8vIENyZWF0ZSB2YWx1ZXMgb24gYWN0b3IgdGhhdCBkb24ndCBleGlzdFxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gaW5oZXJpdGVkQWN0aW9uLnZhbHVlcykge1xuICAgICAgICAgICAgaWYgKGluaGVyaXRlZEFjdGlvbi52YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiAhdGhpcy52YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIG5ld1ZhbHVlc1trZXldID0ge307XG4gICAgICAgICAgICAgICAgaGFzTmV3VmFsdWVzID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoYXNOZXdWYWx1ZXMpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KHsgdmFsdWVzOiBuZXdWYWx1ZXMgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpbmhlcml0ZWRBY3Rpb24ucGFyZW50SWQgPSBhY3Rpb24uaWQ7XG5cbiAgICAgICAgcmV0dXJuIGluaGVyaXRlZEFjdGlvbi5zZXQoYm91bmRQcm9wcyh0aGlzLCBpbmhlcml0ZWRBY3Rpb24pKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBTdGFydCBBY3RvclxuXG4gICAgICAgIElmIEFjdGlvbiBpcyBwcm92aWRlZCwgYmluZCBpdCB0byB0aGlzIEFjdG9yIGFuZCBzdGFydFxuXG4gICAgICAgIEBwYXJhbSAob3B0aW9uYWwpIFtBY3Rpb25dXG4gICAgKi9cbiAgICBzdGFydCgpIHtcbiAgICAgICAgc3VwZXIuc3RhcnQoKTtcblxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5hY3RpdmVBY3Rpb25zKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVBY3Rpb25zLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhY3Rpb24gPSB0aGlzLmFjdGl2ZUFjdGlvbnNba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAoIWFjdGlvbi5pc0FjdGl2ZSkge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb24uc3RhcnQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzdG9wKCkge1xuICAgICAgICBzdXBlci5zdG9wKCk7XG5cbiAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMuYWN0aXZlQWN0aW9ucykge1xuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlQWN0aW9ucy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVBY3Rpb25zW2tleV0uc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgd2lsbFJlbmRlcihhY3RvciwgZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHRoaXMudmFsdWVLZXlzW2ldO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuICAgICAgICAgICAgY29uc3QgZHJpdmVyID0gdmFsdWUubnVtRHJpdmVycyA/IHRoaXMuYWN0aXZlQWN0aW9uc1t2YWx1ZS5kcml2ZXJzWzBdXSA6IGZhbHNlO1xuICAgICAgICAgICAgbGV0IG5ld0N1cnJlbnQgPSB2YWx1ZS5udW1Ecml2ZXJzID8gZHJpdmVyLnZhbHVlc1trZXldLmN1cnJlbnQgOiB2YWx1ZS5jdXJyZW50O1xuXG4gICAgICAgICAgICBpZiAodmFsdWUuYmxlbmRDdXJ2ZSkge1xuICAgICAgICAgICAgICAgIG5ld0N1cnJlbnQgPSB2YWx1ZS5ibGVuZEN1cnZlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSBuZXdDdXJyZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1cGVyLndpbGxSZW5kZXIoYWN0b3IsIGZyYW1lU3RhbXAsIGVsYXBzZWQpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIEFkZCBhY3RpdmUgYWN0aW9uc1xuXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgICAgICBAcGFyYW0gW0FjdGlvbl1cbiAgICAqL1xuICAgIGFjdGl2YXRlQWN0aW9uKGlkLCBhY3Rpb24pIHtcbiAgICAgICAgdGhpcy5hY3RpdmVBY3Rpb25zW2lkXSA9IGFjdGlvbjtcbiAgICAgICAgdGhpcy5udW1BY3RpdmVBY3Rpb25zKys7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY3Rpb24ubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGFjdGlvbi52YWx1ZUtleXNbaV07XG4gICAgICAgICAgICBjb25zdCBhY3Rpb25WYWx1ZSA9IGFjdGlvbi52YWx1ZXNba2V5XTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcblxuICAgICAgICAgICAgLy8gSWYgd2UncmUgYmxlbmRpbmcgdGhpcyBhY3Rpb24sIGFuZCB0aGVyZSdzIG9uIGFscmVhZHkgaW4gcHJvZ3Jlc3NcbiAgICAgICAgICAgIGlmIChhY3Rpb24uYmxlbmQgJiYgdmFsdWUubnVtRHJpdmVycyAmJiAhdmFsdWUuYmxlbmRDdXJ2ZSAmJiAodmFsdWUuZHJpdmVyc1swXS5wcm90b3R5cGUgPT09IGFjdGlvbi5wcm90b3R5cGUpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUuYmxlbmRDdXJ2ZSA9IGdlbmVyYXRlQmxlbmRDdXJ2ZSh0aGlzLmFjdGl2ZUFjdGlvbnNbdmFsdWUuZHJpdmVyc1swXV0sIGFjdGlvbiwgdmFsdWUsIGtleSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFhY3Rpb24uaXNTY3J1YmJpbmcpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS5ibGVuZEN1cnZlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIC8vIFBhc3MgQWN0b3IgdmFsdWUgcHJvcGVydGllcyB0byBBY3Rpb25cbiAgICAgICAgICAgICAgICBhY3Rpb25WYWx1ZS52ZWxvY2l0eSArPSB2YWx1ZS52ZWxvY2l0eTtcbiAgICAgICAgICAgICAgICBhY3Rpb25WYWx1ZS5mcm9tID0gYWN0aW9uVmFsdWUuY3VycmVudCA9IHZhbHVlLmN1cnJlbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhbHVlLmRyaXZlcnMgPSBbaWRdO1xuICAgICAgICAgICAgdmFsdWUubnVtRHJpdmVycyA9IHZhbHVlLmRyaXZlcnMubGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubnVtQWN0aXZlQWN0aW9ucykge1xuICAgICAgICAgICAgc3VwZXIuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFJlbW92ZSBhY3RpdmUgYWN0aW9uc1xuXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgICovXG4gICAgZGVhY3RpdmF0ZUFjdGlvbihpZCkge1xuICAgICAgICBjb25zdCBhY3Rpb24gPSB0aGlzLmFjdGl2ZUFjdGlvbnNbaWRdO1xuXG4gICAgICAgIGlmIChhY3Rpb24pIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWN0aW9uLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gYWN0aW9uLnZhbHVlS2V5c1tpXTtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG4gICAgICAgICAgICAgICAgY29uc3QgZHJpdmVySW5kZXggPSB2YWx1ZS5kcml2ZXJzLmluZGV4T2YoaWQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGRyaXZlckluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5kcml2ZXJzLnNwbGljZShkcml2ZXJJbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLm51bURyaXZlcnMtLTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmFjdGl2ZUFjdGlvbnNbaWRdO1xuICAgICAgICAgICAgdGhpcy5udW1BY3RpdmVBY3Rpb25zLS07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMubnVtQWN0aXZlQWN0aW9ucyAmJiB0aGlzLmlzQWN0aXZlKSB7XG4gICAgICAgICAgICBzdXBlci5zdG9wKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkZsb3cucHJvdG90eXBlLmRlZmF1bHRWYWx1ZSA9IEFjdGlvbi5leHRlbmREZWZhdWx0VmFsdWUoe1xuICAgIGRyaXZlcnM6IFtdLFxuICAgIG51bURyaXZlcnM6IDBcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBGbG93O1xuIl19

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
	//# sourceMappingURL=data:application/json;base64,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QUFXLENBUjBDO0FBU3JELG1CQUFlLENBVHNDO0FBVXJELGlCQUFhLEtBVndDO0FBV3JELFdBQU8sS0FYOEM7QUFZckQsYUFBUztBQVo0QyxDQUExQixDQUEvQjs7a0JBZWUsSyIsImZpbGUiOiJUd2Vlbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvanZhbmRlcmRvZXMvQ29kZS9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWN0aW9uIGZyb20gJy4vQWN0aW9uJztcbmltcG9ydCBlYXNpbmcgZnJvbSAnLi9lYXNpbmcvcHJlc2V0LWVhc2luZyc7XG5pbXBvcnQgeyBjdXJyZW50VGltZSwgaXNOdW0gfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuaW1wb3J0IHsgZWFzZSwgcmVzdHJpY3QsIGdldFByb2dyZXNzRnJvbVZhbHVlLCBzdGVwUHJvZ3Jlc3MgfSBmcm9tICcuLi9pbmMvY2FsYyc7XG5cbmNvbnN0IENPVU5UID0gJ0NvdW50JztcbmNvbnN0IE5FWFRfU1RFUFMgPSB7XG4gICAgbG9vcDogJ3Jlc3RhcnQnLFxuICAgIHlveW86ICdyZXZlcnNlJyxcbiAgICBmbGlwOiAnZmxpcFZhbHVlcydcbn07XG5cbmNsYXNzIFR3ZWVuIGV4dGVuZHMgQWN0aW9uIHtcbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5lbGFwc2VkID0gMDtcbiAgICAgICAgdGhpcy5mbGlwQ291bnQgPSB0aGlzLnlveW9Db3VudCA9IHRoaXMubG9vcENvdW50ID0gMDtcbiAgICAgICAgdGhpcy5pc1NjcnViYmluZyA9IGZhbHNlO1xuXG4gICAgICAgIHJldHVybiBzdXBlci5zdGFydCgpO1xuICAgIH1cblxuICAgIG9uVXBkYXRlKHR3ZWVuLCBmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgICAgIGNvbnN0IHByb2dyZXNzVGFyZ2V0ID0gKHRoaXMucGxheURpcmVjdGlvbiA9PT0gMSkgPyAxIDogMDtcblxuICAgICAgICB0aGlzLmVuZGVkID0gdHJ1ZTtcblxuICAgICAgICBpZiAoIXRoaXMuaXNTY3J1YmJpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuZWxhcHNlZCArPSAoZWxhcHNlZCAqIHRoaXMuZGlsYXRlKSAqIHRoaXMucGxheURpcmVjdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gdGhpcy52YWx1ZUtleXNbaV07XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG5cbiAgICAgICAgICAgIGxldCBwcm9ncmVzcyA9IHJlc3RyaWN0KGdldFByb2dyZXNzRnJvbVZhbHVlKHRoaXMuZWxhcHNlZCAtIHZhbHVlLmRlbGF5LCAwLCB2YWx1ZS5kdXJhdGlvbiksIDAsIDEpO1xuXG4gICAgICAgICAgICAvLyBNYXJrIFR3ZWVuIGFzIE5PVCBlbmRlZCBpZiBzdGlsbCBpbiBwcm9ncmVzc1xuICAgICAgICAgICAgaWYgKHByb2dyZXNzICE9PSBwcm9ncmVzc1RhcmdldCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5kZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU3RlcCBwcm9ncmVzcyBpZiB3ZSdyZSBzdGVwcGluZ1xuICAgICAgICAgICAgaWYgKHZhbHVlLnN0ZXBzKSB7XG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3MgPSBzdGVwUHJvZ3Jlc3MocHJvZ3Jlc3MsIHZhbHVlLnN0ZXBzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRWFzZSBwcm9ncmVzc1xuICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IGVhc2UocHJvZ3Jlc3MsIHZhbHVlLmZyb20sIHZhbHVlLnRvLCB2YWx1ZS5lYXNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uRnJhbWVFbmQoKSB7XG4gICAgICAgIGlmICh0aGlzLmVuZGVkICYmICF0aGlzLmlzU2NydWJiaW5nKSB7XG4gICAgICAgICAgICBsZXQgc3RlcFRha2VuID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBORVhUX1NURVBTKSB7XG4gICAgICAgICAgICAgICAgaWYgKE5FWFRfU1RFUFMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNOdW0odGhpc1trZXldKSAmJiB0aGlzW2tleV0gPiB0aGlzW2tleSArIENPVU5UXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1trZXkgKyBDT1VOVF0rKztcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXBUYWtlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW05FWFRfU1RFUFNba2V5XV0oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFzdGVwVGFrZW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmbGlwVmFsdWVzKCkge1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLnZhbHVlcztcblxuICAgICAgICB0aGlzLmVsYXBzZWQgPSB0aGlzLmR1cmF0aW9uIC0gdGhpcy5lbGFwc2VkO1xuXG4gICAgICAgIGZvciAobGV0IGtleSBpbiB2YWx1ZXMpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdmFsdWVzW2tleV07XG4gICAgICAgICAgICAgICAgW3ZhbHVlLnRvLCB2YWx1ZS5mcm9tXSA9IFt2YWx1ZS5mcm9tLCB2YWx1ZS50b107XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXZlcnNlKCkge1xuICAgICAgICB0aGlzLnBsYXlEaXJlY3Rpb24gKj0gLTE7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJlc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuZWxhcHNlZCA9ICh0aGlzLnBsYXlEaXJlY3Rpb24gPT09IDEpID8gMCA6IHRoaXMuZHVyYXRpb247XG4gICAgICAgIHRoaXMuc3RhcnRlZCA9IGN1cnJlbnRUaW1lKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNlZWsocHJvZ3Jlc3MpIHtcbiAgICAgICAgdGhpcy5zZWVrVGltZSh0aGlzLmR1cmF0aW9uICogcHJvZ3Jlc3MpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZWVrVGltZShlbGFwc2VkKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0FjdGl2ZSB8fCB0aGlzLmlzU2NydWJiaW5nKSB7XG4gICAgICAgICAgICB0aGlzLm9uY2UoKTtcbiAgICAgICAgICAgIHRoaXMuaXNTY3J1YmJpbmcgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5lbGFwc2VkID0gZWxhcHNlZDtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG5cblR3ZWVuLnByb3RvdHlwZS5kZWZhdWx0VmFsdWVQcm9wID0gJ3RvJztcblR3ZWVuLnByb3RvdHlwZS5kZWZhdWx0VmFsdWUgPSBBY3Rpb24uZXh0ZW5kRGVmYXVsdFZhbHVlKHtcbiAgICBkZWxheTogMCxcbiAgICBkdXJhdGlvbjogMzAwLFxuICAgIGVhc2U6IGVhc2luZy5lYXNlT3V0LFxuICAgIGVsYXBzZWQ6IDAsXG4gICAgZnJvbTogMCxcbiAgICBzdGVwczogMCxcbiAgICB0bzogMCxcbiAgICByb3VuZDogZmFsc2Vcbn0pO1xuVHdlZW4ucHJvdG90eXBlLmRlZmF1bHRQcm9wcyA9IEFjdGlvbi5leHRlbmREZWZhdWx0UHJvcHMoe1xuICAgIGJsZW5kOiB0cnVlLFxuICAgIGRpbGF0ZTogMSxcbiAgICBsb29wOiAwLFxuICAgIHlveW86IDAsXG4gICAgZmxpcDogMCxcbiAgICBsb29wQ291bnQ6IDAsXG4gICAgeW95b0NvdW50OiAwLFxuICAgIGZsaXBDb3VudDogMCxcbiAgICBwbGF5RGlyZWN0aW9uOiAxLFxuICAgIGlzU2NydWJiaW5nOiBmYWxzZSxcbiAgICBlbmRlZDogZmFsc2UsXG4gICAgZWxhcHNlZDogMFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFR3ZWVuO1xuIl19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL1BoeXNpY3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFFTSxPOzs7QUFDRix1QkFBcUI7QUFBQTs7QUFBQSwwQ0FBTixJQUFNO0FBQU4sZ0JBQU07QUFBQTs7QUFBQSxxREFDakIsMENBQVMsSUFBVCxFQURpQjs7QUFFakIsY0FBSyxjQUFMLEdBQXNCLENBQXRCO0FBQ0EsY0FBSyxrQkFBTCxHQUEwQixJQUExQjtBQUhpQjtBQUlwQjs7c0JBRUQsUSxxQkFBUyxPLEVBQVMsVSxFQUFZLE8sRUFBUztBQUNuQyxhQUFLLFVBQUwsR0FBa0IsS0FBbEI7O0FBRUEsYUFBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLEtBQUssWUFBekIsRUFBdUMsR0FBdkMsRUFBNEM7QUFDeEMsZ0JBQU0sTUFBTSxLQUFLLFNBQUwsQ0FBZSxDQUFmLENBQVo7QUFDQSxnQkFBTSxRQUFRLEtBQUssTUFBTCxDQUFZLEdBQVosQ0FBZDtBQUNBLGdCQUFNLGdCQUFnQixNQUFNLElBQTVCOzs7QUFHQSxrQkFBTSxRQUFOLElBQWtCLHlCQUFjLE1BQU0sWUFBcEIsRUFBa0MsT0FBbEMsQ0FBbEI7OztBQUdBLGtCQUFNLFFBQU4sYUFBbUIsSUFBSSxNQUFNLFFBQTdCLEVBQTJDLFVBQVUsR0FBckQ7OztBQUdBLGdCQUFJLE1BQU0sTUFBTixJQUFnQixrQkFBTSxNQUFNLEVBQVosQ0FBcEIsRUFBcUM7QUFDakMsb0JBQU0sbUJBQW1CLE1BQU0sRUFBTixHQUFXLE1BQU0sT0FBMUM7QUFDQSxzQkFBTSxRQUFOLElBQWtCLG1CQUFtQix5QkFBYyxNQUFNLE1BQXBCLEVBQTRCLE9BQTVCLENBQXJDO0FBQ0g7OztBQUdELGtCQUFNLE9BQU4sSUFBaUIseUJBQWMsTUFBTSxRQUFwQixFQUE4QixPQUE5QixDQUFqQjs7O0FBR0EsZ0JBQUssTUFBTSxHQUFOLEtBQWMsU0FBZCxJQUEyQixNQUFNLE9BQU4sR0FBZ0IsTUFBTSxHQUFsRCxJQUEyRCxNQUFNLEdBQU4sS0FBYyxTQUFkLElBQTJCLE1BQU0sT0FBTixHQUFnQixNQUFNLEdBQWhILEVBQXNIO0FBQ2xILHNCQUFNLFFBQU4sSUFBa0IsQ0FBRSxNQUFNLE1BQTFCO0FBQ0g7OztBQUdELGdCQUFJLE1BQU0sT0FBTixLQUFrQixhQUFsQixJQUFtQyxLQUFLLEdBQUwsQ0FBUyxNQUFNLFFBQWYsS0FBNEIsTUFBTSxTQUFyRSxJQUFtRixNQUFNLE1BQU4sSUFBZ0IsTUFBTSxPQUFOLEtBQWtCLE1BQU0sRUFBL0gsRUFBb0k7QUFDaEkscUJBQUssVUFBTCxHQUFrQixJQUFsQjtBQUNIO0FBQ0o7QUFDSixLOztzQkFFRCxVLHlCQUFhO0FBQ1QsWUFBSSxLQUFLLGlCQUFMLEtBQTJCLFFBQS9CLEVBQXlDO0FBQ3JDLGlCQUFLLGNBQUwsR0FBc0IsS0FBSyxVQUFMLEdBQWtCLENBQWxCLEdBQXNCLEtBQUssY0FBTCxHQUFzQixDQUFsRTs7QUFFQSxnQkFBSSxLQUFLLGNBQUwsSUFBdUIsS0FBSyxpQkFBaEMsRUFBbUQ7QUFDL0MscUJBQUssUUFBTDtBQUNIO0FBQ0o7QUFDSixLOzs7OztBQUdMLFFBQVEsU0FBUixDQUFrQixnQkFBbEIsR0FBcUMsVUFBckM7QUFDQSxRQUFRLFNBQVIsQ0FBa0IsWUFBbEIsR0FBaUMsaUJBQU8sa0JBQVAsQ0FBMEI7QUFDdkQsa0JBQWMsQ0FEeUMsRTtBQUV2RCxZQUFRLENBRitDLEU7QUFHdkQsWUFBUSxDQUgrQyxFO0FBSXZELGVBQVcsS0FKNEMsRTtBQUt2RCxjQUFVLEM7QUFMNkMsQ0FBMUIsQ0FBakM7QUFPQSxRQUFRLFNBQVIsQ0FBa0IsWUFBbEIsR0FBaUMsaUJBQU8sa0JBQVAsQ0FBMEI7QUFDdkQsdUJBQW1CO0FBRG9DLENBQTFCLENBQWpDOztrQkFJZSxPIiwiZmlsZSI6IlBoeXNpY3MuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2p2YW5kZXJkb2VzL0NvZGUvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdGlvbiBmcm9tICcuL0FjdGlvbic7XG5pbXBvcnQgeyBzcGVlZFBlckZyYW1lIH0gZnJvbSAnLi4vaW5jL2NhbGMnO1xuaW1wb3J0IHsgaXNOdW0gfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuXG5jbGFzcyBQaHlzaWNzIGV4dGVuZHMgQWN0aW9uIHtcbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgICAgICB0aGlzLmluYWN0aXZlRnJhbWVzID0gMDtcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVzVmVsb2NpdHkgPSB0cnVlO1xuICAgIH1cblxuICAgIG9uVXBkYXRlKHBoeXNpY3MsIGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gZmFsc2U7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSB0aGlzLnZhbHVlS2V5c1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcbiAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzVmFsdWUgPSB2YWx1ZS5wcmV2O1xuXG4gICAgICAgICAgICAvLyBBcHBseSBhY2NlbGVyYXRpb25cbiAgICAgICAgICAgIHZhbHVlLnZlbG9jaXR5ICs9IHNwZWVkUGVyRnJhbWUodmFsdWUuYWNjZWxlcmF0aW9uLCBlbGFwc2VkKTtcblxuICAgICAgICAgICAgLy8gQXBwbHkgZnJpY3Rpb25cbiAgICAgICAgICAgIHZhbHVlLnZlbG9jaXR5ICo9ICgxIC0gdmFsdWUuZnJpY3Rpb24pICoqIChlbGFwc2VkIC8gMTAwKTtcblxuICAgICAgICAgICAgLy8gQXBwbHkgc3ByaW5nXG4gICAgICAgICAgICBpZiAodmFsdWUuc3ByaW5nICYmIGlzTnVtKHZhbHVlLnRvKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlVG9UYXJnZXQgPSB2YWx1ZS50byAtIHZhbHVlLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgdmFsdWUudmVsb2NpdHkgKz0gZGlzdGFuY2VUb1RhcmdldCAqIHNwZWVkUGVyRnJhbWUodmFsdWUuc3ByaW5nLCBlbGFwc2VkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQXBwbHkgbGF0ZXN0IHZlbG9jaXR5XG4gICAgICAgICAgICB2YWx1ZS5jdXJyZW50ICs9IHNwZWVkUGVyRnJhbWUodmFsdWUudmVsb2NpdHksIGVsYXBzZWQpO1xuXG4gICAgICAgICAgICAvLyBEZXRlY3QgYm91bmNlXG4gICAgICAgICAgICBpZiAoKHZhbHVlLm1pbiAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLmN1cnJlbnQgPCB2YWx1ZS5taW4pIHx8ICh2YWx1ZS5tYXggIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS5jdXJyZW50ID4gdmFsdWUubWF4KSkge1xuICAgICAgICAgICAgICAgIHZhbHVlLnZlbG9jaXR5ICo9IC0gdmFsdWUuYm91bmNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBDaGVjayBpZiB2YWx1ZSBoYXMgY2hhbmdlZFxuICAgICAgICAgICAgaWYgKHZhbHVlLmN1cnJlbnQgIT09IHByZXZpb3VzVmFsdWUgfHwgTWF0aC5hYnModmFsdWUudmVsb2NpdHkpID49IHZhbHVlLnN0b3BTcGVlZCB8fCAodmFsdWUuc3ByaW5nICYmIHZhbHVlLmN1cnJlbnQgIT09IHZhbHVlLnRvKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkZyYW1lRW5kKCkge1xuICAgICAgICBpZiAodGhpcy5tYXhJbmFjdGl2ZUZyYW1lcyAhPT0gSW5maW5pdHkpIHtcbiAgICAgICAgICAgIHRoaXMuaW5hY3RpdmVGcmFtZXMgPSB0aGlzLmhhc0NoYW5nZWQgPyAxIDogdGhpcy5pbmFjdGl2ZUZyYW1lcyArIDE7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmluYWN0aXZlRnJhbWVzID49IHRoaXMubWF4SW5hY3RpdmVGcmFtZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cblBoeXNpY3MucHJvdG90eXBlLmRlZmF1bHRWYWx1ZVByb3AgPSAndmVsb2NpdHknO1xuUGh5c2ljcy5wcm90b3R5cGUuZGVmYXVsdFZhbHVlID0gQWN0aW9uLmV4dGVuZERlZmF1bHRWYWx1ZSh7XG4gICAgYWNjZWxlcmF0aW9uOiAwLCAvLyBbbnVtYmVyXTogQWNjZWxlcmF0aW9uIHRvIGFwcGx5IHRvIHZhbHVlLCBpbiB1bml0cyBwZXIgc2Vjb25kXG4gICAgYm91bmNlOiAwLCAvLyBbbnVtYmVyXTogRmFjdG9yIHRvIG11bHRpcGx5IHZlbG9jaXR5IGJ5IG9uIGJvdW5jZVxuICAgIHNwcmluZzogMCwgLy8gW251bWJlcl06IFNwcmluZyBzdHJlbmd0aCBkdXJpbmcgJ3N0cmluZydcbiAgICBzdG9wU3BlZWQ6IDAuMDAxLCAvLyBbbnVtYmVyXTogU3RvcCBzaW11bGF0aW9uIHVuZGVyIHRoaXMgc3BlZWRcbiAgICBmcmljdGlvbjogMCAvLyBbbnVtYmVyXTogRnJpY3Rpb24gdG8gYXBwbHkgcGVyIGZyYW1lLCAwLTFcbn0pO1xuUGh5c2ljcy5wcm90b3R5cGUuZGVmYXVsdFByb3BzID0gQWN0aW9uLmV4dGVuZERlZmF1bHRQcm9wcyh7XG4gICAgbWF4SW5hY3RpdmVGcmFtZXM6IDNcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBQaHlzaWNzO1xuIl19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL1RyYWNrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQVFBLElBQU0sb0JBQW9CLFVBQUMsQ0FBRDtBQUFBLFdBQVE7QUFDOUIsV0FBRyxFQUFFLEtBRHlCO0FBRTlCLFdBQUcsRUFBRTtBQUZ5QixLQUFSO0FBQUEsQ0FBMUI7O0FBS0EsSUFBTSxvQkFBb0I7QUFBQSxRQUFHLGNBQUgsUUFBRyxjQUFIO0FBQUEsV0FBeUI7QUFDL0MsV0FBRyxlQUFlLENBQWYsRUFBa0IsT0FEMEI7QUFFL0MsV0FBRyxlQUFlLENBQWYsRUFBa0I7QUFGMEIsS0FBekI7QUFBQSxDQUExQjs7QUFLQSxJQUFNLGdCQUFnQixVQUFDLENBQUQ7QUFBQSxXQUFPLEVBQUUsT0FBRixHQUN6QixzQkFBWSxrQkFBa0IsQ0FBbEIsQ0FBWixFQUFrQyxXQUFsQyxFQUErQyxpQkFBL0MsQ0FEeUIsR0FFekIsc0JBQVksa0JBQWtCLENBQWxCLENBQVosRUFBa0MsV0FBbEMsRUFBK0MsaUJBQS9DLENBRmtCO0FBQUEsQ0FBdEI7O0FBSUEsSUFBTSxpQkFBaUIsVUFBQyxDQUFEO0FBQUEsV0FBTyxFQUFFLGFBQUYsSUFBbUIsQ0FBMUI7QUFBQSxDQUF2Qjs7SUFFTSxLOzs7Ozs7Ozs7b0JBQ0YsSyxrQkFBTSxLLEVBQU87QUFDVCwwQkFBTSxLQUFOOztBQUVBLFlBQUksS0FBSixFQUFXO0FBQ1AsaUJBQUssS0FBTCxHQUFhLE1BQU0sS0FBTixHQUFjLEtBQWQsR0FBc0IsY0FBYyxlQUFlLEtBQWYsQ0FBZCxDQUFuQztBQUNIOztBQUVELGFBQUssV0FBTCxHQUFtQixFQUFuQjtBQUNBLGFBQUssV0FBTCxnQkFBd0IsS0FBSyxLQUFMLENBQVcsS0FBbkM7QUFDQSxhQUFLLEtBQUwsQ0FBVyxLQUFYO0FBQ0gsSzs7b0JBRUQsSSxtQkFBTztBQUNILDBCQUFNLElBQU47QUFDQSxhQUFLLEtBQUwsQ0FBVyxJQUFYO0FBQ0gsSzs7b0JBRUQsUSxxQkFBUyxLLEVBQU8sVSxFQUFZLE8sRUFBUztBQUNqQyxhQUFLLFdBQUwsR0FBbUIsa0JBQU8sS0FBSyxXQUFaLEVBQXlCLEtBQUssS0FBTCxDQUFXLEtBQXBDLENBQW5COztBQUVBLGFBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxLQUFLLFlBQXpCLEVBQXVDLEdBQXZDLEVBQTRDO0FBQ3hDLGdCQUFNLE1BQU0sS0FBSyxTQUFMLENBQWUsQ0FBZixDQUFaOztBQUVBLGdCQUFJLEtBQUssV0FBTCxDQUFpQixjQUFqQixDQUFnQyxHQUFoQyxDQUFKLEVBQTBDO0FBQ3RDLG9CQUFNLFFBQVEsS0FBSyxNQUFMLENBQVksR0FBWixDQUFkOztBQUVBLG9CQUFJLE1BQU0sTUFBVixFQUFrQjtBQUNkLDBCQUFNLE9BQU4sR0FBZ0IsS0FBSyxLQUFMLENBQVcsS0FBWCxDQUFpQixNQUFNLEtBQU4sSUFBZSxHQUFoQyxDQUFoQjtBQUNILGlCQUZELE1BRU87QUFDSCwwQkFBTSxPQUFOLEdBQWdCLE1BQU0sSUFBTixHQUFhLEtBQUssV0FBTCxDQUFpQixNQUFNLEtBQU4sSUFBZSxHQUFoQyxDQUE3QjtBQUNIOzs7QUFHRCxvQkFBSSxNQUFNLE1BQVYsRUFBa0I7QUFDZCwwQkFBTSxPQUFOLEdBQWdCLGtCQUFPLE1BQU0sT0FBYixFQUFzQixNQUFNLElBQTVCLEVBQWtDLE9BQWxDLEVBQTJDLE1BQU0sTUFBakQsQ0FBaEI7QUFDSDtBQUNKO0FBQ0o7QUFDSixLOzs7OztBQUdMLE1BQU0sU0FBTixDQUFnQixnQkFBaEIsR0FBbUMsT0FBbkM7QUFDQSxNQUFNLFNBQU4sQ0FBZ0IsWUFBaEIsR0FBK0IsaUJBQU8sa0JBQVAsQ0FBMEI7QUFDckQsWUFBUTtBQUQ2QyxDQUExQixDQUEvQjs7a0JBSWUsSyIsImZpbGUiOiJUcmFjay5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvanZhbmRlcmRvZXMvQ29kZS9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWN0aW9uIGZyb20gJy4vQWN0aW9uJztcbmltcG9ydCBQb2ludGVyIGZyb20gJy4uL2lucHV0L1BvaW50ZXInO1xuaW1wb3J0IHsgc21vb3RoLCBvZmZzZXQgfSBmcm9tICcuLi9pbmMvY2FsYyc7XG5cbi8qXG4gICAgU2NyYXBlIHgveSBjb29yZGluYXRlcyBmcm9tIHByb3ZpZGVkIGV2ZW50XG5cbiAgICBAcGFyYW0gW2V2ZW50XVxuICAgIEByZXR1cm4gW29iamVjdF1cbiovXG5jb25zdCBtb3VzZUV2ZW50VG9Qb2ludCA9IChlKSA9PiAoe1xuICAgIHg6IGUucGFnZVgsXG4gICAgeTogZS5wYWdlWVxufSk7XG5cbmNvbnN0IHRvdWNoRXZlbnRUb1BvaW50ID0gKHsgY2hhbmdlZFRvdWNoZXMgfSkgPT4gKHtcbiAgICB4OiBjaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYLFxuICAgIHk6IGNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFlcbn0pO1xuXG5jb25zdCBjcmVhdGVQb2ludGVyID0gKGUpID0+IGUudG91Y2hlcyA/XG4gICAgbmV3IFBvaW50ZXIodG91Y2hFdmVudFRvUG9pbnQoZSksICd0b3VjaG1vdmUnLCB0b3VjaEV2ZW50VG9Qb2ludCkgOiBcbiAgICBuZXcgUG9pbnRlcihtb3VzZUV2ZW50VG9Qb2ludChlKSwgJ21vdXNlbW92ZScsIG1vdXNlRXZlbnRUb1BvaW50KTtcblxuY29uc3QgZ2V0QWN0dWFsRXZlbnQgPSAoZSkgPT4gZS5vcmlnaW5hbEV2ZW50IHx8IGU7XG5cbmNsYXNzIFRyYWNrIGV4dGVuZHMgQWN0aW9uIHtcbiAgICBzdGFydChpbnB1dCkge1xuICAgICAgICBzdXBlci5zdGFydCgpO1xuXG4gICAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICAgICAgdGhpcy5pbnB1dCA9IGlucHV0LnN0YXRlID8gaW5wdXQgOiBjcmVhdGVQb2ludGVyKGdldEFjdHVhbEV2ZW50KGlucHV0KSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlucHV0T2Zmc2V0ID0ge307XG4gICAgICAgIHRoaXMuaW5wdXRPcmlnaW4gPSB7IC4uLnRoaXMuaW5wdXQuc3RhdGUgfTtcbiAgICAgICAgdGhpcy5pbnB1dC5zdGFydCgpO1xuICAgIH1cblxuICAgIHN0b3AoKSB7XG4gICAgICAgIHN1cGVyLnN0b3AoKTtcbiAgICAgICAgdGhpcy5pbnB1dC5zdG9wKCk7XG4gICAgfVxuXG4gICAgb25VcGRhdGUodHJhY2ssIGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgICAgICAgdGhpcy5pbnB1dE9mZnNldCA9IG9mZnNldCh0aGlzLmlucHV0T3JpZ2luLCB0aGlzLmlucHV0LnN0YXRlKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHRoaXMudmFsdWVLZXlzW2ldO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5pbnB1dE9mZnNldC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmRpcmVjdCkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gdGhpcy5pbnB1dC5zdGF0ZVt2YWx1ZS53YXRjaCB8fCBrZXldO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSB2YWx1ZS5mcm9tICsgdGhpcy5pbnB1dE9mZnNldFt2YWx1ZS53YXRjaCB8fCBrZXldO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFNtb290aCB2YWx1ZSBpZiB3ZSBoYXZlIHNtb290aGluZ1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5zbW9vdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IHNtb290aCh2YWx1ZS5jdXJyZW50LCB2YWx1ZS5wcmV2LCBlbGFwc2VkLCB2YWx1ZS5zbW9vdGgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuVHJhY2sucHJvdG90eXBlLmRlZmF1bHRWYWx1ZVByb3AgPSAnd2F0Y2gnO1xuVHJhY2sucHJvdG90eXBlLmRlZmF1bHRWYWx1ZSA9IEFjdGlvbi5leHRlbmREZWZhdWx0VmFsdWUoe1xuICAgIGRpcmVjdDogZmFsc2Vcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBUcmFjaztcbiJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90YXNrL1Rhc2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBR0E7O0lBQVksSTs7Ozs7Ozs7Ozs7QUFFWixTQUFTLE9BQVQsR0FBbUI7QUFDZixTQUFLLFNBQUwsR0FBaUIsU0FBakI7QUFDQSxTQUFLLFVBQUwsQ0FBZ0IsS0FBSyxFQUFyQjtBQUNIOztBQUVELFNBQVMsUUFBVCxHQUFvQjtBQUNoQixTQUFLLFNBQUwsR0FBaUIsT0FBakI7QUFDSDs7SUFFb0IsSTtBQUNqQixrQkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQ2YsYUFBSyxFQUFMLEdBQVUsS0FBSyxTQUFMLEVBQVY7QUFDQSxhQUFLLFFBQUwsR0FBZ0IsS0FBaEI7O0FBRUEsWUFBSSxLQUFLLFlBQVQsRUFBdUI7QUFDbkIsaUJBQUssSUFBSSxHQUFULElBQWdCLEtBQUssWUFBckIsRUFBbUM7QUFDL0Isb0JBQUksS0FBSyxZQUFMLENBQWtCLGNBQWxCLENBQWlDLEdBQWpDLENBQUosRUFBMkM7QUFDdkMseUJBQUssR0FBTCxJQUFZLEtBQUssWUFBTCxDQUFrQixHQUFsQixDQUFaO0FBQ0g7QUFDSjtBQUNKOztBQUVELGFBQUssR0FBTCxDQUFTLEtBQVQ7QUFDSDs7bUJBRUQsRyxnQkFBSSxLLEVBQU87QUFDUCxhQUFLLElBQUksR0FBVCxJQUFnQixLQUFoQixFQUF1QjtBQUNuQixnQkFBSSxNQUFNLGNBQU4sQ0FBcUIsR0FBckIsQ0FBSixFQUErQjtBQUMzQixxQkFBSyxHQUFMLElBQVksTUFBTSxHQUFOLENBQVo7QUFDSDtBQUNKOztBQUVELGVBQU8sSUFBUDtBQUNILEs7O21CQUVELEssb0JBQVE7QUFDSixhQUFLLFFBQUwsQ0FBYyxLQUFLLEVBQW5CLEVBQXVCLElBQXZCOztBQUVBLGFBQUssY0FBTCxHQUFzQixLQUFLLFNBQUwsR0FBaUIsU0FBdkM7QUFDQSxhQUFLLFVBQUwsR0FBa0IsS0FBbEI7O0FBRUEsWUFBSSxLQUFLLE9BQVQsRUFBa0I7QUFDZCxpQkFBSyxPQUFMLENBQWEsSUFBYjtBQUNIOztBQUVELGVBQU8sSUFBUDtBQUNILEs7O21CQUVELEksbUJBQU87QUFDSCxhQUFLLFVBQUwsQ0FBZ0IsS0FBSyxFQUFyQjs7QUFFQSxZQUFJLEtBQUssTUFBVCxFQUFpQjtBQUNiLGlCQUFLLE1BQUwsQ0FBWSxJQUFaO0FBQ0g7O0FBRUQsZUFBTyxJQUFQO0FBQ0gsSzs7bUJBRUQsSSxtQkFBTztBQUNILGFBQUssUUFBTCxDQUFjLEtBQUssRUFBbkIsRUFBdUIsSUFBdkI7QUFDQSxhQUFLLFNBQUwsR0FBaUIsU0FBakI7QUFDQSxhQUFLLGNBQUwsR0FBc0IsUUFBdEI7O0FBRUEsZUFBTyxJQUFQO0FBQ0gsSzs7bUJBRUQsUSx1QkFBVztBQUNQLGFBQUssSUFBTDs7QUFFQSxZQUFJLEtBQUssVUFBVCxFQUFxQjtBQUNqQixpQkFBSyxVQUFMLENBQWdCLElBQWhCO0FBQ0g7QUFDSixLOzs7Ozs7Ozs7O21CQVNELE8sb0JBQVEsSyxFQUFPO0FBQUEsWUFDSCxFQURHLEdBQ3VCLElBRHZCLENBQ0gsRUFERzs7QUFBQSxZQUNJLGNBREosNEJBQ3VCLElBRHZCOztBQUVYLGVBQU8sSUFBSSxLQUFLLFdBQVQsY0FBMEIsY0FBMUIsRUFBNkMsS0FBN0MsRUFBUDtBQUNILEs7Ozs7O2tCQTNFZ0IsSSIsImZpbGUiOiJUYXNrLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qdmFuZGVyZG9lcy9Db2RlL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gICAgQmFzZSBUYXNrIGNsYXNzIGZvciBjcmVhdGluZyBhIHRhc2sgb24gdGhlIG1haW4gcmVuZGVyIGxvb3AuXG4qL1xuaW1wb3J0ICogYXMgbG9vcCBmcm9tICcuL2xvb3AnO1xuXG5mdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgIHRoaXMub25DbGVhbnVwID0gdW5kZWZpbmVkO1xuICAgIGxvb3AuZGVhY3RpdmF0ZSh0aGlzLmlkKTtcbn1cblxuZnVuY3Rpb24gYWN0aXZhdGUoKSB7XG4gICAgdGhpcy5vbkNsZWFudXAgPSBjbGVhbnVwO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICB0aGlzLmlkID0gbG9vcC5nZXRUYXNrSWQoKTtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIGlmICh0aGlzLmRlZmF1bHRQcm9wcykge1xuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMuZGVmYXVsdFByb3BzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGVmYXVsdFByb3BzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpc1trZXldID0gdGhpcy5kZWZhdWx0UHJvcHNba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldChwcm9wcyk7XG4gICAgfVxuXG4gICAgc2V0KHByb3BzKSB7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBwcm9wcykge1xuICAgICAgICAgICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSBwcm9wc1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGxvb3AuYWN0aXZhdGUodGhpcy5pZCwgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5vbkFjdGl2YXRlTG9vcCA9IHRoaXMub25DbGVhbnVwID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmlzQ29tcGxldGUgPSBmYWxzZTtcblxuICAgICAgICBpZiAodGhpcy5vblN0YXJ0KSB7XG4gICAgICAgICAgICB0aGlzLm9uU3RhcnQodGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzdG9wKCkge1xuICAgICAgICBsb29wLmRlYWN0aXZhdGUodGhpcy5pZCk7XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5vblN0b3ApIHtcbiAgICAgICAgICAgIHRoaXMub25TdG9wKHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgb25jZSgpIHtcbiAgICAgICAgbG9vcC5hY3RpdmF0ZSh0aGlzLmlkLCB0aGlzKTtcbiAgICAgICAgdGhpcy5vbkNsZWFudXAgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMub25BY3RpdmF0ZUxvb3AgPSBhY3RpdmF0ZTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBjb21wbGV0ZSgpIHtcbiAgICAgICAgdGhpcy5zdG9wKCk7XG5cbiAgICAgICAgaWYgKHRoaXMub25Db21wbGV0ZSkge1xuICAgICAgICAgICAgdGhpcy5vbkNvbXBsZXRlKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgIyBFeHRlbmQgdGhpcyBQcm9jZXNzIHdpdGggbmV3IHByb3BlcnRpZXNcbiAgICAgICAgIyMgUmV0dXJucyBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBQcm9jZXNzJ3MgYHByb3RvdHlwZWAgd2l0aCBleGlzdGluZyBhbmQgbmV3IHByb3BlcnRpZXNcblxuICAgICAgICBAcGFyYW0gW29iamVjdF0gKG9wdGlvbmFsKVxuICAgICAgICBAcmV0dXJuIFtQcm9jZXNzXVxuICAgICovXG4gICAgaW5oZXJpdChwcm9wcykge1xuICAgICAgICBjb25zdCB7IGlkLCAuLi5pbmhlcml0ZWRQcm9wcyB9ID0gdGhpcztcbiAgICAgICAgcmV0dXJuIG5ldyB0aGlzLmNvbnN0cnVjdG9yKHsgLi4uaW5oZXJpdGVkUHJvcHMsIC4uLnByb3BzIH0pO1xuICAgIH1cbn0iXX0=

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbnB1dC9JbnB1dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRXFCLEs7OztBQUNqQixtQkFBWSxhQUFaLEVBQTJCLElBQTNCLEVBQWlDO0FBQUE7O0FBQUEscURBQzdCLGdCQUQ2Qjs7QUFFN0IsY0FBSyxLQUFMLEdBQWEsYUFBYjs7QUFFQSxZQUFJLG1CQUFPLElBQVAsQ0FBSixFQUFrQjtBQUNkLGtCQUFLLFlBQUwsR0FBb0I7QUFBQSx1QkFBTSxNQUFLLE1BQUwsQ0FBWSxNQUFLLElBQUwsRUFBWixDQUFOO0FBQUEsYUFBcEI7QUFDSDtBQU40QjtBQU9oQzs7Ozs7Ozs7b0JBT0QsTSxtQkFBTyxLLEVBQU87QUFDVixhQUFLLEtBQUwsZ0JBQWtCLEtBQUssS0FBdkIsRUFBaUMsS0FBakM7QUFDSCxLOzs7OztrQkFqQmdCLEsiLCJmaWxlIjoiSW5wdXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2p2YW5kZXJkb2VzL0NvZGUvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRhc2sgZnJvbSAnLi4vdGFzay9UYXNrJztcbmltcG9ydCB7IGlzRnVuYyB9IGZyb20gJy4uL2luYy91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0IGV4dGVuZHMgVGFzayB7XG4gICAgY29uc3RydWN0b3IoaW5pdGlhbFZhbHVlcywgcG9sbCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0gaW5pdGlhbFZhbHVlcztcblxuICAgICAgICBpZiAoaXNGdW5jKHBvbGwpKSB7XG4gICAgICAgICAgICB0aGlzLm9uRnJhbWVTdGFydCA9ICgpID0+IHRoaXMubGF0ZXN0KHRoaXMucG9sbCgpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICAgIE1hbnVhbGx5IGFkZCBsYXRlc3QgdmFsdWVzXG5cbiAgICAgICAgQHBhcmFtIFtvYmplY3RdXG4gICAgKi9cbiAgICBsYXRlc3QocHJvcHMpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgLi4udGhpcy5zdGF0ZSwgLi4ucHJvcHMgfTtcbiAgICB9XG59XG4iXX0=

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvc3RhZ2dlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBLElBQU0sbUJBQW1CLEdBQXpCOztrQkFFZSxVQUFDLE1BQUQsRUFBUyxLQUFULEVBQW1CO0FBQzlCLFFBQU0sa0JBQWtCLGtCQUFNLEtBQU4sQ0FBeEI7QUFDQSxRQUFNLFdBQVcsa0JBQWtCLEtBQWxCLEdBQTBCLFFBQVEsTUFBTSxRQUFOLElBQWtCLGdCQUExQixHQUE2QyxnQkFBeEY7QUFDQSxRQUFJLEtBQUssQ0FBVDtBQUNBLFFBQU0scUJBQXFCLE9BQU8sR0FBUCxDQUFXLFVBQUMsS0FBRCxFQUFXO0FBQzdDLFlBQU0sTUFBTSxFQUFFLFlBQUYsRUFBUyxNQUFULEVBQVo7QUFDQSxjQUFNLFFBQU47QUFDQSxlQUFPLEdBQVA7QUFDSCxLQUowQixDQUEzQjs7QUFNQSxXQUFPLHdCQUFTLGtCQUFULEVBQTZCLEtBQTdCLENBQVA7QUFDSCxDIiwiZmlsZSI6InN0YWdnZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2p2YW5kZXJkb2VzL0NvZGUvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRpbWVsaW5lIGZyb20gJy4vdGltZWxpbmUnO1xuaW1wb3J0IHsgaXNOdW0gfSBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgREVGQVVMVF9JTlRFUlZBTCA9IDEwMDtcblxuZXhwb3J0IGRlZmF1bHQgKHR3ZWVucywgcHJvcHMpID0+IHtcbiAgICBjb25zdCBwcm9wc0lzRHVyYXRpb24gPSBpc051bShwcm9wcyk7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBwcm9wc0lzRHVyYXRpb24gPyBwcm9wcyA6IHByb3BzID8gcHJvcHMuaW50ZXJ2YWwgfHwgREVGQVVMVF9JTlRFUlZBTCA6IERFRkFVTFRfSU5URVJWQUw7XG4gICAgbGV0IGF0ID0gMDtcbiAgICBjb25zdCB0aW1lbGluZURlZmluaXRpb24gPSB0d2VlbnMubWFwKCh0d2VlbikgPT4ge1xuICAgICAgICBjb25zdCBkZWYgPSB7IHR3ZWVuLCBhdCB9O1xuICAgICAgICBhdCArPSBpbnRlcnZhbDtcbiAgICAgICAgcmV0dXJuIGRlZjtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aW1lbGluZSh0aW1lbGluZURlZmluaXRpb24sIHByb3BzKTtcbn07Il19

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
	//# sourceMappingURL=data:application/json;base64,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ZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvanZhbmRlcmRvZXMvQ29kZS9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHdlZW4gZnJvbSAnLi4vYWN0aW9ucy9Ud2Vlbic7XG5pbXBvcnQgZWFzaW5nIGZyb20gJy4uL2FjdGlvbnMvZWFzaW5nL3ByZXNldC1lYXNpbmcnO1xuaW1wb3J0IHsgcmVsYXRpdmVWYWx1ZSB9IGZyb20gJy4vY2FsYyc7XG5cbi8qXG4gICAgQHBhcmFtIFthcnJheV1cbiAgICAgICAgU2VxdWVudGlhbCBhcnJheSBvZiB0d2VlbnMsIGVhY2ggaXRlbSBjYW4gYmUgYSB0d2VlbiBvciBkZWZpbml0aW9uIG9iajpcblxuICAgICAgICBbXG4gICAgICAgICAgICBuZXcgVHdlZW4oKSxcbiAgICAgICAgICAgIHN0YWdnZXIoKSxcbiAgICAgICAgICAgIHRpbWVsaW5lKCksXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHdlZW46IG5ldyBUd2VlbigpLFxuICAgICAgICAgICAgICAgIGF0OiAxMDAsXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiBcIis9MTAwXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuKi9cbmNvbnN0IGFuYWx5emUgPSAoZGVmcykgPT4ge1xuICAgIGNvbnN0IHRpbWVsaW5lID0gW107XG4gICAgY29uc3QgbnVtRGVmcyA9IGRlZnMubGVuZ3RoO1xuICAgIGxldCBjdXJyZW50UGxheWhlYWQgPSAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1EZWZzOyBpKyspIHtcbiAgICAgICAgY29uc3QgZGVmID0gZGVmc1tpXTtcbiAgICAgICAgY29uc3QgZGVmSXNPYmogPSBkZWYudHdlZW4gPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIGNvbnN0IHR3ZWVuID0gKGRlZklzT2JqKSA/IGRlZi50d2VlbiA6IGRlZjtcblxuICAgICAgICBpZiAoZGVmSXNPYmopIHtcbiAgICAgICAgICAgIGlmIChkZWYub2Zmc2V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UGxheWhlYWQgPSByZWxhdGl2ZVZhbHVlKGN1cnJlbnRQbGF5aGVhZCwgZGVmLm9mZnNldCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRlZi5hdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFBsYXloZWFkID0gZGVmLmF0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGR1cmF0aW9uID0gMDtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHR3ZWVuLnZhbHVlcykge1xuICAgICAgICAgICAgaWYgKHR3ZWVuLnZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0d2Vlbi52YWx1ZXNba2V5XTtcbiAgICAgICAgICAgICAgICBkdXJhdGlvbiA9IE1hdGgubWF4KGR1cmF0aW9uLCB2YWx1ZS5kdXJhdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aW1lbGluZS5wdXNoKHtcbiAgICAgICAgICAgIGZyb206IGN1cnJlbnRQbGF5aGVhZCxcbiAgICAgICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgICAgICAgIGZpcmU6ICh0aW1lKSA9PiB0d2Vlbi5zZWVrVGltZSh0aW1lKVxuICAgICAgICB9KTtcblxuICAgICAgICBjdXJyZW50UGxheWhlYWQgKz0gZHVyYXRpb247XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgdG90YWxUaW1lOiBjdXJyZW50UGxheWhlYWQsIHRpbWVsaW5lIH07XG59O1xuXG5jb25zdCBzZXRUd2VlbnMgPSAoeyB0aW1lbGluZSwgdGltZWxpbmVMZW5ndGgsIHZhbHVlcywgZHVyYXRpb24gfSkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGltZWxpbmVMZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB0d2VlbiA9IHRpbWVsaW5lW2ldO1xuICAgICAgICBjb25zdCB0d2VlblRpbWUgPSAodmFsdWVzLnAuY3VycmVudCAqIGR1cmF0aW9uKSAtIHR3ZWVuLmZyb207XG5cbiAgICAgICAgaWYgKHR3ZWVuVGltZSA+PSAtNTAgJiYgdHdlZW5UaW1lIDw9IHR3ZWVuLmR1cmF0aW9uICsgNTApIHtcbiAgICAgICAgICAgIHR3ZWVuLmZpcmUodHdlZW5UaW1lKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRpbWVsaW5lKGRlZiwgcHJvcHMgPSB7fSkge1xuICAgIGNvbnN0IHsgdG90YWxUaW1lLCB0aW1lbGluZSB9ID0gYW5hbHl6ZShkZWYpO1xuXG4gICAgcmV0dXJuIG5ldyBUd2Vlbih7XG4gICAgICAgIGVhc2U6IGVhc2luZy5saW5lYXIsXG4gICAgICAgIC4uLnByb3BzLFxuICAgICAgICBkdXJhdGlvbjogdG90YWxUaW1lLFxuICAgICAgICB2YWx1ZXM6IHtcbiAgICAgICAgICAgIHA6IDFcbiAgICAgICAgfSxcbiAgICAgICAgdGltZWxpbmU6IHRpbWVsaW5lLFxuICAgICAgICB0aW1lbGluZUxlbmd0aDogdGltZWxpbmUubGVuZ3RoLFxuICAgICAgICBvblJlbmRlcjogc2V0VHdlZW5zXG4gICAgfSk7XG59Il19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2FkYXB0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVVBLElBQU0sU0FBUyxVQUFDLEdBQUQsRUFBTSxHQUFOO0FBQUEsV0FBYyxNQUFNLElBQUksR0FBSixLQUFZLEdBQWxCLEdBQXdCLEdBQXRDO0FBQUEsQ0FBZjs7a0JBRWUsVUFBQyxPQUFELEVBQWE7Ozs7OztBQU94QixRQUFNLFVBQVUsVUFBQyxPQUFELEVBQVUsS0FBVixFQUFpQixJQUFqQixFQUEwQjtBQUN0QyxZQUFJLFFBQVEsUUFBWixFQUFzQjs7QUFFbEIsaUJBQUssSUFBSSxHQUFULElBQWdCLEtBQWhCLEVBQXVCO0FBQ25CLG9CQUFJLE1BQU0sY0FBTixDQUFxQixHQUFyQixDQUFKLEVBQStCO0FBQzNCLHdCQUFNLFlBQVksT0FBTyxHQUFQLEVBQVksUUFBUSxRQUFwQixDQUFsQjs7QUFFQSx3QkFBSSxjQUFjLEdBQWxCLEVBQXVCO0FBQ25CLDhCQUFNLFNBQU4sSUFBbUIsTUFBTSxHQUFOLENBQW5CO0FBQ0EsK0JBQU8sTUFBTSxHQUFOLENBQVA7QUFDSDtBQUNKO0FBQ0o7QUFDSjs7QUFFRCxlQUFPLFFBQVEsTUFBUixDQUFlLE9BQWYsRUFBd0IsS0FBeEIsRUFBK0IsSUFBL0IsQ0FBUDtBQUNILEtBaEJEOztBQWtCQSxZQUFRLEdBQVIsR0FBYyxVQUFDLE9BQUQsRUFBVSxHQUFWO0FBQUEsZUFBa0IsUUFBUSxNQUFSLENBQWUsT0FBZixFQUF3QixPQUFPLEdBQVAsRUFBWSxRQUFRLFFBQXBCLENBQXhCLENBQWxCO0FBQUEsS0FBZDtBQUNBLFlBQVEsY0FBUixHQUF5QixVQUFDLEdBQUQ7QUFBQSxlQUFTLFFBQVEsWUFBUixHQUF1QixRQUFRLFlBQVIsQ0FBcUIsT0FBTyxHQUFQLEVBQVksUUFBUSxRQUFwQixDQUFyQixDQUF2QixHQUE2RSxLQUF0RjtBQUFBLEtBQXpCO0FBQ0EsWUFBUSxjQUFSLEdBQXlCLFFBQVEsY0FBakM7O0FBRUEsV0FBTyxPQUFQO0FBQ0gsQyIsImZpbGUiOiJhZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qdmFuZGVyZG9lcy9Db2RlL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gICAgT3ZlcnJpZGUgYGdldHRlcmAgYW5kIGBzZXR0ZXJgIHRvIHJlaW1wbGVtZW50IHRoZSBpbnRlcmZhY2UgZm9yIG5ldyBlbGVtZW50IHR5cGVzLlxuXG4gICAgU2V0IGAuc3RhdGVNYXBgIGFzIGFuIG9iamVjdCBrZXkvdmFsdWUgbWFwIHRvIHRyYW5zbGF0ZSBpbmNvbWluZyBrZXlzIHRvXG4gICAgQVBJLXNwZWNpZmljIGtleXMuIEZvciBpbnN0YW5jZSwgeyB4OiAndHJhbnNsYXRlWCcgfS4gXG5cbiAgICBTZXQgYC52YWx1ZVR5cGVNYXBgIGFzIGFuIG9iamVjdCBrZXkvdmFsdWUgbWFwIHRvIHJldHVybiBhIHZhbHVlIHR5cGUgd2l0aFxuICAgIGBnZXRWYWx1ZVR5cGUoa2V5KWAgKGtleSB3aWxsIGJlIG1hcHBlZCBhY2NvcmRpbmcgdG8gYHN0YXRlTWFwYClcbiovXG5cbmNvbnN0IG1hcEtleSA9IChrZXksIG1hcCkgPT4gbWFwID8gbWFwW2tleV0gfHwga2V5IDoga2V5O1xuXG5leHBvcnQgZGVmYXVsdCAob3B0aW9ucykgPT4ge1xuICAgIC8qXG4gICAgICAgIEFkYXB0ZXIgaXMgc2V0dGVyIGZ1bmN0aW9uXG5cbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBPYmplY3QgdG8gc2V0IHByb3BlcnRpZXMgb25cbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBLZXkvdmFsdWUgcHJvcGVydGllcyB0byBzZXRcbiAgICAqL1xuICAgIGNvbnN0IGFkYXB0ZXIgPSAoZWxlbWVudCwgcHJvcHMsIGRhdGEpID0+IHtcbiAgICAgICAgaWYgKG9wdGlvbnMuc3RhdGVNYXApIHtcbiAgICAgICAgICAgIC8vIFRyYW5zbGF0ZSBwcm9wc1xuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHByb3BzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWFwcGVkS2V5ID0gbWFwS2V5KGtleSwgb3B0aW9ucy5zdGF0ZU1hcCk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAobWFwcGVkS2V5ICE9PSBrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzW21hcHBlZEtleV0gPSBwcm9wc1trZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHByb3BzW2tleV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb3B0aW9ucy5zZXR0ZXIoZWxlbWVudCwgcHJvcHMsIGRhdGEpO1xuICAgIH07XG5cbiAgICBhZGFwdGVyLmdldCA9IChlbGVtZW50LCBrZXkpID0+IG9wdGlvbnMuZ2V0dGVyKGVsZW1lbnQsIG1hcEtleShrZXksIG9wdGlvbnMuc3RhdGVNYXApKTtcbiAgICBhZGFwdGVyLmNoZWNrVmFsdWVUeXBlID0gKGtleSkgPT4gb3B0aW9ucy52YWx1ZVR5cGVNYXAgPyBvcHRpb25zLnZhbHVlVHlwZU1hcFttYXBLZXkoa2V5LCBvcHRpb25zLnN0YXRlTWFwKV0gOiBmYWxzZTtcbiAgICBhZGFwdGVyLmdldEVsZW1lbnREYXRhID0gb3B0aW9ucy5nZXRFbGVtZW50RGF0YTtcblxuICAgIHJldHVybiBhZGFwdGVyO1xufTsiXX0=

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2F0dHItYWRhcHRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7QUFFTyxJQUFNLDBCQUFTLFVBQUMsT0FBRCxFQUFVLEdBQVY7QUFBQSxXQUFrQixRQUFRLFlBQVIsQ0FBcUIsR0FBckIsQ0FBbEI7QUFBQSxDQUFmO0FBQ0EsSUFBTSwwQkFBUyxVQUFDLE9BQUQsRUFBVSxLQUFWLEVBQW9CO0FBQ3RDLFNBQUssSUFBSSxHQUFULElBQWdCLEtBQWhCLEVBQXVCO0FBQ25CLFlBQUksTUFBTSxjQUFOLENBQXFCLEdBQXJCLENBQUosRUFBK0I7QUFDM0Isb0JBQVEsWUFBUixDQUFxQixHQUFyQixFQUEwQixNQUFNLEdBQU4sQ0FBMUI7QUFDSDtBQUNKO0FBQ0osQ0FOTTs7a0JBUVEsdUJBQWMsRUFBRSxjQUFGLEVBQVUsY0FBVixFQUFkLEMiLCJmaWxlIjoiYXR0ci1hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qdmFuZGVyZG9lcy9Db2RlL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVBZGFwdGVyIGZyb20gJy4vYWRhcHRlcic7XG5cbmV4cG9ydCBjb25zdCBnZXR0ZXIgPSAoZWxlbWVudCwga2V5KSA9PiBlbGVtZW50LmdldEF0dHJpYnV0ZShrZXkpO1xuZXhwb3J0IGNvbnN0IHNldHRlciA9IChlbGVtZW50LCBwcm9wcykgPT4ge1xuICAgIGZvciAobGV0IGtleSBpbiBwcm9wcykge1xuICAgICAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBwcm9wc1trZXldKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUFkYXB0ZXIoeyBnZXR0ZXIsIHNldHRlciB9KTsiXX0=

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2Nzcy1hZGFwdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztrQkFFZSx1QkFBYztBQUN6QixZQUFRLFVBQUMsT0FBRCxFQUFVLEdBQVYsRUFBa0I7QUFDdEIsZUFBUSxDQUFDLHlCQUFlLEdBQWYsQ0FBRixHQUNILE9BQU8sZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsSUFBakMsRUFBdUMsd0JBQVMsR0FBVCxDQUF2QyxDQURHLEdBRUgsdUJBQWEsR0FBYixFQUFrQixZQUFsQixDQUErQixPQUEvQixJQUEwQyxDQUY5QztBQUdILEtBTHdCO0FBTXpCLFlBQVEsVUFBQyxPQUFELEVBQVUsS0FBVjtBQUFBLGVBQW9CLFFBQVEsS0FBUixDQUFjLE9BQWQsSUFBeUIscUJBQW9CLEtBQXBCLENBQTdDO0FBQUEsS0FOaUI7QUFPekIsd0NBUHlCO0FBUXpCO0FBUnlCLENBQWQsQyIsImZpbGUiOiJjc3MtYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvanZhbmRlcmRvZXMvQ29kZS9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3RhdGVNYXAgZnJvbSAnLi9jc3Mvc3RhdGUtbWFwJztcbmltcG9ydCB2YWx1ZVR5cGVNYXAgZnJvbSAnLi9jc3MvdmFsdWUtdHlwZS1tYXAnO1xuaW1wb3J0IGJ1aWxkUHJvcGVydHlTdHJpbmcgZnJvbSAnLi9jc3MvYnVpbGQnO1xuaW1wb3J0IHByZWZpeGVyIGZyb20gJy4vY3NzL3ByZWZpeGVyJztcbmltcG9ydCB0cmFuc2Zvcm1Qcm9wcyBmcm9tICcuL2Nzcy90cmFuc2Zvcm0tcHJvcHMnO1xuaW1wb3J0IGNyZWF0ZUFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQWRhcHRlcih7XG4gICAgZ2V0dGVyOiAoZWxlbWVudCwga2V5KSA9PiB7XG4gICAgICAgIHJldHVybiAoIXRyYW5zZm9ybVByb3BzW2tleV0pID9cbiAgICAgICAgICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsIG51bGwpW3ByZWZpeGVyKGtleSldIDpcbiAgICAgICAgICAgIHZhbHVlVHlwZU1hcFtrZXldLmRlZmF1bHRQcm9wcy5jdXJyZW50IHx8IDA7XG4gICAgfSxcbiAgICBzZXR0ZXI6IChlbGVtZW50LCBwcm9wcykgPT4gZWxlbWVudC5zdHlsZS5jc3NUZXh0ICs9IGJ1aWxkUHJvcGVydHlTdHJpbmcocHJvcHMpLFxuICAgIHZhbHVlVHlwZU1hcCxcbiAgICBzdGF0ZU1hcFxufSk7XG5cbiJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL29iamVjdC1hZGFwdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7Ozs7O2tCQUVlLHVCQUFjO0FBQ3pCLFlBQVEsVUFBQyxNQUFELEVBQVMsR0FBVDtBQUFBLGVBQWlCLE9BQU8sR0FBUCxDQUFqQjtBQUFBLEtBRGlCO0FBRXpCLFlBQVEsVUFBQyxNQUFELEVBQVMsS0FBVCxFQUFtQjtBQUN2QixhQUFLLElBQUksR0FBVCxJQUFnQixLQUFoQixFQUF1QjtBQUNuQixnQkFBSSxNQUFNLGNBQU4sQ0FBcUIsR0FBckIsQ0FBSixFQUErQjtBQUMzQix1QkFBTyxHQUFQLElBQWMsTUFBTSxHQUFOLENBQWQ7QUFDSDtBQUNKO0FBQ0o7QUFSd0IsQ0FBZCxDIiwiZmlsZSI6Im9iamVjdC1hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qdmFuZGVyZG9lcy9Db2RlL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVBZGFwdGVyIGZyb20gJy4vYWRhcHRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUFkYXB0ZXIoe1xuICAgIGdldHRlcjogKG9iamVjdCwga2V5KSA9PiBvYmplY3Rba2V5XSxcbiAgICBzZXR0ZXI6IChvYmplY3QsIHByb3BzKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBwcm9wcykge1xuICAgICAgICAgICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBvYmplY3Rba2V5XSA9IHByb3BzW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59KTsiXX0=

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL3N2Zy1hZGFwdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7O0FBRU8sSUFBTSwwQkFBUyxVQUFDLE9BQUQsRUFBVSxHQUFWO0FBQUEsV0FBbUIsQ0FBQyx5QkFBZSxHQUFmLENBQUYsR0FBeUIseUJBQVcsT0FBWCxFQUFvQixHQUFwQixDQUF6QixHQUFxRCx1QkFBYSxHQUFiLEtBQXFCLHVCQUFhLEdBQWIsRUFBa0IsWUFBeEMsR0FBd0QsdUJBQWEsR0FBYixFQUFrQixZQUFsQixDQUErQixPQUF2RixHQUFpRyxDQUF2SztBQUFBLENBQWY7QUFDQSxJQUFNLDBCQUFTLFVBQUMsT0FBRCxFQUFVLEtBQVYsRUFBaUIsSUFBakI7QUFBQSxXQUEwQix5QkFBVyxPQUFYLEVBQW9CLHFCQUFNLEtBQU4sRUFBYSxJQUFiLENBQXBCLENBQTFCO0FBQUEsQ0FBZjtBQUNBLElBQU0sMENBQWlCLFVBQUMsT0FBRCxFQUFhO0FBQ3ZDLFFBQU0sT0FBTyxRQUFRLE9BQVIsRUFBYjtBQUNBLFdBQU87QUFDSCxXQUFHLEtBQUssQ0FETDtBQUVILFdBQUcsS0FBSyxDQUZMO0FBR0gsZUFBTyxLQUFLLEtBSFQ7QUFJSCxnQkFBUSxLQUFLO0FBSlYsS0FBUDtBQU1ILENBUk07O2tCQVVRLHVCQUFjLEVBQUUsY0FBRixFQUFVLGNBQVYsRUFBa0IsNEJBQWxCLEVBQTRCLG9DQUE1QixFQUEwQyw4QkFBMUMsRUFBZCxDIiwiZmlsZSI6InN2Zy1hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qdmFuZGVyZG9lcy9Db2RlL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdGF0ZU1hcCBmcm9tICcuL2Nzcy9zdGF0ZS1tYXAnO1xuaW1wb3J0IHZhbHVlVHlwZU1hcCBmcm9tICcuL3N2Zy92YWx1ZS10eXBlLW1hcCc7XG5pbXBvcnQgdHJhbnNmb3JtUHJvcHMgZnJvbSAnLi9jc3MvdHJhbnNmb3JtLXByb3BzJztcbmltcG9ydCBidWlsZCBmcm9tICcuL3N2Zy9idWlsZCc7XG5pbXBvcnQgeyBnZXR0ZXIgYXMgYXR0ckdldHRlciwgc2V0dGVyIGFzIGF0dHJTZXR0ZXIgfSBmcm9tICcuL2F0dHItYWRhcHRlcic7XG5pbXBvcnQgY3JlYXRlQWRhcHRlciBmcm9tICcuL2FkYXB0ZXInO1xuXG5leHBvcnQgY29uc3QgZ2V0dGVyID0gKGVsZW1lbnQsIGtleSkgPT4gKCF0cmFuc2Zvcm1Qcm9wc1trZXldKSA/IGF0dHJHZXR0ZXIoZWxlbWVudCwga2V5KSA6ICh2YWx1ZVR5cGVNYXBba2V5XSAmJiB2YWx1ZVR5cGVNYXBba2V5XS5kZWZhdWx0UHJvcHMpID8gdmFsdWVUeXBlTWFwW2tleV0uZGVmYXVsdFByb3BzLmN1cnJlbnQgOiAwO1xuZXhwb3J0IGNvbnN0IHNldHRlciA9IChlbGVtZW50LCBwcm9wcywgZGF0YSkgPT4gYXR0clNldHRlcihlbGVtZW50LCBidWlsZChwcm9wcywgZGF0YSkpO1xuZXhwb3J0IGNvbnN0IGdldEVsZW1lbnREYXRhID0gKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBiQm94ID0gZWxlbWVudC5nZXRCQm94KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogYkJveC54LFxuICAgICAgICB5OiBiQm94LnksXG4gICAgICAgIHdpZHRoOiBiQm94LndpZHRoLCBcbiAgICAgICAgaGVpZ2h0OiBiQm94LmhlaWdodFxuICAgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVBZGFwdGVyKHsgZ2V0dGVyLCBzZXR0ZXIsIHN0YXRlTWFwLCB2YWx1ZVR5cGVNYXAsIGdldEVsZW1lbnREYXRhIH0pO1xuIl19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL3N2Zy1wYXRoLWFkYXB0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7a0JBRWUsdUJBQWM7QUFDekIsOEJBRHlCO0FBRXpCLFlBQVEsVUFBQyxPQUFELEVBQVUsS0FBVixFQUFpQixJQUFqQixFQUEwQjtBQUM5QixZQUFNLGFBQWEsT0FBTyxLQUFLLFVBQVosR0FBeUIsQ0FBNUM7QUFDQSxlQUFPLHdCQUFPLE9BQVAsRUFBZ0IscUJBQU0sS0FBTixFQUFhLFVBQWIsQ0FBaEIsRUFBMEMsSUFBMUMsQ0FBUDtBQUNILEtBTHdCO0FBTXpCLGdDQU55QjtBQU96QixvQkFBZ0IsVUFBQyxPQUFEO0FBQUEsMEJBQWdCLFlBQVksUUFBUSxjQUFSLEVBQTVCLElBQXlELGdDQUFlLE9BQWYsQ0FBekQ7QUFBQTtBQVBTLENBQWQsQyIsImZpbGUiOiJzdmctcGF0aC1hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qdmFuZGVyZG9lcy9Db2RlL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBidWlsZCBmcm9tICcuL3N2Zy1wYXRoL2J1aWxkJztcbmltcG9ydCBzdGF0ZU1hcCBmcm9tICcuL2Nzcy9zdGF0ZS1tYXAnO1xuaW1wb3J0IHsgZ2V0dGVyLCBzZXR0ZXIsIGdldEVsZW1lbnREYXRhIH0gZnJvbSAnLi9zdmctYWRhcHRlcic7XG5pbXBvcnQgY3JlYXRlQWRhcHRlciBmcm9tICcuL2FkYXB0ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVBZGFwdGVyKHtcbiAgICBnZXR0ZXIsXG4gICAgc2V0dGVyOiAoZWxlbWVudCwgcHJvcHMsIG9wdHMpID0+IHtcbiAgICAgICAgY29uc3QgcGF0aExlbmd0aCA9IG9wdHMgPyBvcHRzLnBhdGhMZW5ndGggOiAwO1xuICAgICAgICByZXR1cm4gc2V0dGVyKGVsZW1lbnQsIGJ1aWxkKHByb3BzLCBwYXRoTGVuZ3RoKSwgb3B0cyk7XG4gICAgfSxcbiAgICBzdGF0ZU1hcCxcbiAgICBnZXRFbGVtZW50RGF0YTogKGVsZW1lbnQpID0+ICh7IHBhdGhMZW5ndGg6IGVsZW1lbnQuZ2V0VG90YWxMZW5ndGgoKSwgLi4uZ2V0RWxlbWVudERhdGEoZWxlbWVudCkgfSlcbn0pO1xuIl19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2Vhc2luZy9wcmVzZXQtZWFzaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUEwQkE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0EsSUFBTSx3QkFBd0IsS0FBOUI7QUFDQSxJQUFNLHVCQUF1QixDQUE3Qjs7Ozs7Ozs7QUFRQSxJQUFNLGFBQWE7QUFDZixVQUFNLFVBQUMsUUFBRDtBQUFBLFlBQVcsUUFBWCx5REFBc0Isb0JBQXRCO0FBQUEsd0JBQStDLFFBQS9DLEVBQTJELFFBQTNEO0FBQUEsS0FEUztBQUVmLFVBQU07QUFBQSxlQUFZLElBQUksS0FBSyxHQUFMLENBQVMsS0FBSyxJQUFMLENBQVUsUUFBVixDQUFULENBQWhCO0FBQUEsS0FGUztBQUdmLFVBQU0sVUFBQyxRQUFEO0FBQUEsWUFBVyxRQUFYLHlEQUFzQixxQkFBdEI7QUFBQSxlQUFpRCxXQUFXLFFBQVosSUFBeUIsQ0FBQyxXQUFXLENBQVosSUFBaUIsUUFBakIsR0FBNEIsUUFBckQsQ0FBaEQ7QUFBQTtBQUhTLENBQW5COzs7QUFPQSxJQUFNLHNCQUFzQixVQUFDLFFBQUQ7QUFBQSxXQUFjLFVBQUMsUUFBRDtBQUFBLGVBQWMsV0FBVyxJQUFYLENBQWdCLFFBQWhCLEVBQTBCLFFBQTFCLENBQWQ7QUFBQSxLQUFkO0FBQUEsQ0FBNUI7O0FBRUEsQ0FBQyxPQUFELEVBQVUsT0FBVixFQUFtQixPQUFuQixFQUE0QixPQUE1QixDQUFvQyxVQUFDLFVBQUQsRUFBYSxDQUFiO0FBQUEsV0FBbUIsV0FBVyxVQUFYLElBQXlCLG9CQUFvQixJQUFJLENBQXhCLENBQTVDO0FBQUEsQ0FBcEM7OztBQUdBLEtBQUssSUFBSSxHQUFULElBQWdCLFVBQWhCLEVBQTRCO0FBQ3hCLFFBQUksV0FBVyxjQUFYLENBQTBCLEdBQTFCLENBQUosRUFBb0M7QUFDaEMsWUFBTSxpQkFBaUIsNEJBQXFCLFdBQVcsR0FBWCxDQUFyQixDQUF2QjtBQUNBLG1CQUFjLEdBQWQsV0FBeUIsZUFBZSxFQUF4QztBQUNBLG1CQUFjLEdBQWQsWUFBMEIsZUFBZSxHQUF6QztBQUNBLG1CQUFjLEdBQWQsY0FBNEIsZUFBZSxLQUEzQztBQUNIO0FBQ0o7O0FBRUQsV0FBVyxNQUFYLEdBQW9CO0FBQUEsV0FBWSxRQUFaO0FBQUEsQ0FBcEI7QUFDQSxXQUFXLFVBQVgsR0FBd0IsVUFBQyxRQUFEO0FBQUEsUUFBVyxRQUFYLHlEQUFzQixxQkFBdEI7QUFBQSxXQUNuQixDQUFDLFlBQVUsQ0FBWCxJQUFnQixDQUFqQixHQUFzQixNQUFNLFdBQVcsTUFBWCxDQUFrQixRQUFsQixFQUE0QixRQUE1QixDQUE1QixHQUFxRSxPQUFPLElBQUksS0FBSyxHQUFMLENBQVMsQ0FBVCxFQUFZLENBQUMsRUFBRCxJQUFPLFdBQVcsQ0FBbEIsQ0FBWixDQUFYLENBRGpEO0FBQUEsQ0FBeEI7O0FBR0EsV0FBVyxnQkFBWDtBQUNBLFdBQVcsV0FBWDtBQUNBLFdBQVcsTUFBWCxHQUFvQixVQUFDLE1BQUQ7QUFBQSxzQ0FBWSxJQUFaO0FBQVksWUFBWjtBQUFBOztBQUFBLFdBQXFCLFVBQUMsUUFBRDtBQUFBLGVBQWMseUJBQU8sUUFBUCxTQUFvQixJQUFwQixFQUFkO0FBQUEsS0FBckI7QUFBQSxDQUFwQjs7a0JBRWUsVSIsImZpbGUiOiJwcmVzZXQtZWFzaW5nLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qdmFuZGVyZG9lcy9Db2RlL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gICAgRWFzaW5nIGZ1bmN0aW9uc1xuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBcbiAgICBHZW5lcmF0ZXMgYW5kIHByb3ZpZGVzIGVhc2luZyBmdW5jdGlvbnMgYmFzZWQgb24gYmFzZUZ1bmN0aW9uIGRlZmluaXRpb25zXG4gICAgXG4gICAgQSBjYWxsIHRvIGVhc2luZ0Z1bmN0aW9uLmdldCgnZnVuY3Rpb25OYW1lJykgcmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHBhc3NlZDpcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcyAwLTFcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IEFtcCBtb2RpZmllciwgb25seSBhY2NlcHRlZCBpbiBzb21lIGVhc2luZyBmdW5jdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBpcyB1c2VkIHRvIGFkanVzdCBvdmVyYWxsIHN0cmVuZ3RoXG4gICAgICAgIEByZXR1cm4gW251bWJlcl06IEVhc2VkIHByb2dyZXNzXG4gICAgICAgIFxuICAgIFdlIGNhbiBnZW5lcmF0ZSBuZXcgZnVuY3Rpb25zIGJ5IHNlbmRpbmcgYW4gZWFzaW5nIGZ1bmN0aW9uIHRocm91Z2ggZWFzaW5nRnVuY3Rpb24uZXh0ZW5kKG5hbWUsIG1ldGhvZCkuXG4gICAgV2hpY2ggd2lsbCBtYWtlIG5hbWVJbiwgbmFtZU91dCBhbmQgbmFtZUluT3V0IGZ1bmN0aW9ucyBhdmFpbGFibGUgdG8gdXNlLlxuICAgICAgICBcbiAgICBFYXNpbmcgZnVuY3Rpb25zIGZyb20gUm9iZXJ0IFBlbm5lclxuICAgIGh0dHA6Ly93d3cucm9iZXJ0cGVubmVyLmNvbS9lYXNpbmcvXG4gICAgICAgIFxuICAgIEJlemllciBjdXJ2ZSBpbnRlcnByZXRvciBjcmVhdGVkIGZyb20gR2HDq3RhbiBSZW5hdWRlYXUncyBvcmlnaW5hbCBCZXppZXJFYXNpbmcgIFxuICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9pbmRleC5qcyAgXG4gICAgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcblxuICAgIEFudGljaXBhdGUgZWFzaW5nIGNyZWF0ZWQgYnkgRWxsaW90IEdpbm9cbiAgICBodHRwczovL3R3aXR0ZXIuY29tL0VsbGlvdEdlbm9cbiovXG4vLyBJbXBvcnRzXG5pbXBvcnQgY3JlYXRlRWFzaW5nRnVuY3Rpb24gZnJvbSAnLi9jcmVhdGUtZWFzaW5nJztcbmltcG9ydCBjdWJpY0JlemllciBmcm9tICcuL2NyZWF0ZS1iZXppZXInO1xuXG4vLyBWYWx1ZXNcbmNvbnN0IERFRkFVTFRfQkFDS19TVFJFTkdUSCA9IDEuNTI1O1xuY29uc3QgREVGQVVMVF9QT1dfU1RSRU5HVEggPSAyO1xuXG4vKlxuICAgIEVhY2ggb2YgdGhlc2UgYmFzZSBmdW5jdGlvbnMgaXMgYW4gZWFzZUluXG4gICAgXG4gICAgT24gaW5pdCwgd2UgdXNlIC5taXJyb3IgYW5kIC5yZXZlcnNlIHRvIGdlbmVyYXRlIGVhc2VJbk91dCBhbmRcbiAgICBlYXNlT3V0IGZ1bmN0aW9ucyByZXNwZWN0aXZlbHkuXG4qL1xuY29uc3QgYmFzZUVhc2luZyA9IHtcbiAgICBlYXNlOiAocHJvZ3Jlc3MsIHN0cmVuZ3RoID0gREVGQVVMVF9QT1dfU1RSRU5HVEgpID0+IHByb2dyZXNzICoqIHN0cmVuZ3RoLFxuICAgIGNpcmM6IHByb2dyZXNzID0+IDEgLSBNYXRoLnNpbihNYXRoLmFjb3MocHJvZ3Jlc3MpKSxcbiAgICBiYWNrOiAocHJvZ3Jlc3MsIHN0cmVuZ3RoID0gREVGQVVMVF9CQUNLX1NUUkVOR1RIKSA9PiAocHJvZ3Jlc3MgKiBwcm9ncmVzcykgKiAoKHN0cmVuZ3RoICsgMSkgKiBwcm9ncmVzcyAtIHN0cmVuZ3RoKVxufTtcblxuLy8gVXRpbGl0eSBmdW5jdGlvbnNcbmNvbnN0IGdlbmVyYXRlUG93ZXJFYXNpbmcgPSAoc3RyZW5ndGgpID0+IChwcm9ncmVzcykgPT4gYmFzZUVhc2luZy5lYXNlKHByb2dyZXNzLCBzdHJlbmd0aCk7XG5cblsnY3ViaWMnLCAncXVhcnQnLCAncXVpbnQnXS5mb3JFYWNoKChlYXNpbmdOYW1lLCBpKSA9PiBiYXNlRWFzaW5nW2Vhc2luZ05hbWVdID0gZ2VuZXJhdGVQb3dlckVhc2luZyhpICsgMykpO1xuXG4vLyBHZW5lcmF0ZSBpbi9vdXQvaW5PdXQgdmFyaWF0aW9uc1xuZm9yIChsZXQga2V5IGluIGJhc2VFYXNpbmcpIHtcbiAgICBpZiAoYmFzZUVhc2luZy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGNvbnN0IGVhc2luZ0Z1bmN0aW9uID0gY3JlYXRlRWFzaW5nRnVuY3Rpb24oYmFzZUVhc2luZ1trZXldKTtcbiAgICAgICAgYmFzZUVhc2luZ1tgJHtrZXl9SW5gXSA9IGVhc2luZ0Z1bmN0aW9uLmluO1xuICAgICAgICBiYXNlRWFzaW5nW2Ake2tleX1PdXRgXSA9IGVhc2luZ0Z1bmN0aW9uLm91dDtcbiAgICAgICAgYmFzZUVhc2luZ1tgJHtrZXl9SW5PdXRgXSA9IGVhc2luZ0Z1bmN0aW9uLmluT3V0O1xuICAgIH1cbn1cblxuYmFzZUVhc2luZy5saW5lYXIgPSBwcm9ncmVzcyA9PiBwcm9ncmVzcztcbmJhc2VFYXNpbmcuYW50aWNpcGF0ZSA9IChwcm9ncmVzcywgc3RyZW5ndGggPSBERUZBVUxUX0JBQ0tfU1RSRU5HVEgpID0+XG4gICAgKChwcm9ncmVzcyo9MikgPCAxKSA/IDAuNSAqIGJhc2VFYXNpbmcuYmFja0luKHByb2dyZXNzLCBzdHJlbmd0aCkgOiAgMC41ICogKDIgLSBNYXRoLnBvdygyLCAtMTAgKiAocHJvZ3Jlc3MgLSAxKSkpO1xuXG5iYXNlRWFzaW5nLmNyZWF0ZVZhcmlhdGlvbnMgPSBjcmVhdGVFYXNpbmdGdW5jdGlvbjtcbmJhc2VFYXNpbmcuY3ViaWNCZXppZXIgPSBjdWJpY0JlemllcjtcbmJhc2VFYXNpbmcubW9kaWZ5ID0gKGVhc2luZywgLi4uYXJncykgPT4gKHByb2dyZXNzKSA9PiBlYXNpbmcocHJvZ3Jlc3MsIC4uLmFyZ3MpO1xuXG5leHBvcnQgZGVmYXVsdCBiYXNlRWFzaW5nOyJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2Zsb3cvZ2V0LWZsb3cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7Ozs7QUFFQSxJQUFNLFlBQVksV0FBbEI7O2tCQUVlLFVBQUMsT0FBRCxFQUFVLE9BQVYsRUFBc0I7QUFDakMsUUFBSSxRQUFRLFNBQVIsQ0FBSixFQUF3QjtBQUNwQixlQUFPLFFBQVEsU0FBUixDQUFQO0FBQ0gsS0FGRCxNQUVPO0FBQ0gsWUFBTSxPQUFPLG1CQUFTLEVBQUUsZ0JBQUYsRUFBVyxnQkFBWCxFQUFULENBQWI7OztBQUdBLGVBQU8sY0FBUCxDQUFzQixPQUF0QixFQUErQixTQUEvQixFQUEwQztBQUN0Qyx3QkFBWSxLQUQwQjtBQUV0QyxzQkFBVSxLQUY0QjtBQUd0QyxtQkFBTztBQUgrQixTQUExQzs7QUFNQSxlQUFPLElBQVA7QUFDSDtBQUNKLEMiLCJmaWxlIjoiZ2V0LWZsb3cuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2p2YW5kZXJkb2VzL0NvZGUvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZsb3cgZnJvbSAnLi4vRmxvdyc7XG5cbmNvbnN0IFNBVkVfUFJPUCA9ICdfX3BtX2Zsb3cnO1xuXG5leHBvcnQgZGVmYXVsdCAoZWxlbWVudCwgYWRhcHRlcikgPT4ge1xuICAgIGlmIChlbGVtZW50W1NBVkVfUFJPUF0pIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRbU0FWRV9QUk9QXTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBmbG93ID0gbmV3IEZsb3coeyBlbGVtZW50LCBhZGFwdGVyIH0pO1xuXG4gICAgICAgIC8vIEJpbmQgYWRhcHRlciB0byBlbGVtZW50XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCBTQVZFX1BST1AsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgICAgICAgdmFsdWU6IGZsb3dcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGZsb3c7XG4gICAgfVxufTtcblxuXG4iXX0=

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
	//# sourceMappingURL=data:application/json;base64,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bUIsS0FBSyxHQUFMLENBQVMsV0FBVyxNQUFwQixFQUE0QixDQUE1QixDQUF6Qjs7QUFFQSxXQUFPLEtBQUssS0FBTCxDQUFXLG1CQUFtQixPQUE5QixJQUF5QyxPQUFoRDtBQUNILENBTk0iLCJmaWxlIjoiY2FsYy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvanZhbmRlcmRvZXMvQ29kZS9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIGhhc1Byb3BlcnR5LFxuICAgIGlzTnVtLFxuICAgIGZpbmRWYWx1ZUFuZFVuaXQsXG4gICAgdG9EZWNpbWFsXG59IGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCBaRVJPX1BPSU5UID0ge1xuICAgIHg6IDAsXG4gICAgeTogMCxcbiAgICB6OiAwXG59O1xuXG5jb25zdCBkaXN0YW5jZTFEID0gKGEsIGIpID0+IE1hdGguYWJzKGEgLSBiKTtcblxuLypcbiAgICBBbmdsZSBiZXR3ZWVuIHBvaW50c1xuICAgIFxuICAgIFRyYW5zbGF0ZXMgdGhlIGh5cG90aGV0aWNhbCBsaW5lIHNvIHRoYXQgdGhlICdmcm9tJyBjb29yZGluYXRlc1xuICAgIGFyZSBhdCAwLDBcbiAgICBcbiAgICBAcGFyYW0gW29iamVjdF06IFggYW5kIFkgY29vcmRpbmF0ZXMgb2YgZnJvbSBwb2ludFxuICAgIEBwYXJhbSBbb2JqZWN0XTogWCBhbmQgWSBjb3JkaW5hdGVzIG9mIHRvIHBvaW50XG4gICAgQHJldHVybiBbcmFkaWFuXTogQW5nbGUgYmV0d2VlbiB0aGUgdHdvIHBvaW50cyBpbiByYWRpYW5zXG4qL1xuZXhwb3J0IGNvbnN0IGFuZ2xlID0gKGEsIGIgPSBaRVJPX1BPSU5UKSA9PiByYWRpYW5zVG9EZWdyZWVzKE1hdGguYXRhbjIoYS54IC0gYi54LCBhLnkgLSBiLnkpKTtcblxuLypcbiAgICBDb252ZXJ0IGRlZ3JlZXMgdG8gcmFkaWFuc1xuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgaW4gZGVncmVlc1xuICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGluIHJhZGlhbnNcbiovXG5leHBvcnQgY29uc3QgZGVncmVlc1RvUmFkaWFucyA9IChkZWdyZWVzKSA9PiBkZWdyZWVzICogTWF0aC5QSSAvIDE4MDtcblxuLypcbiAgICBEaWxhdGVcbiAgICBcbiAgICBDaGFuZ2UgdGhlIHByb2dyZXNzaW9uIGJldHdlZW4gYSBhbmQgYiBhY2NvcmRpbmcgdG8gZGlsYXRpb24uXG4gICAgXG4gICAgU28gZGlsYXRpb24gPSAwLjUgd291bGQgY2hhbmdlXG4gICAgXG4gICAgYSAtLS0tLS0tLS0gYlxuICAgIFxuICAgIHRvXG4gICAgXG4gICAgYSAtLS0tIGJcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFByZXZpb3VzIHZhbHVlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBEaWxhdGUgcHJvZ3Jlc3MgYnkgeFxuICAgIEByZXR1cm4gW251bWJlcl06IFByZXZpb3VzIHZhbHVlIHBsdXMgdGhlIGRpbGF0ZWQgZGlmZmVyZW5jZVxuKi9cbmV4cG9ydCBjb25zdCBkaWxhdGUgPSAoYSwgYiwgZGlsYXRpb24pID0+IGEgKyAoKGIgLSBhKSAqIGRpbGF0aW9uKTtcblxuLypcbiAgICBEaXN0YW5jZVxuICAgIFxuICAgIFJldHVybnMgdGhlIGRpc3RhbmNlIGJldHdlZW4gdHdvIG4gZGltZW5zaW9uYWwgcG9pbnRzLlxuICAgIFxuICAgIEBwYXJhbSBbb2JqZWN0L251bWJlcl06IHggYW5kIHkgb3IganVzdCB4IG9mIHBvaW50IEFcbiAgICBAcGFyYW0gW29iamVjdC9udW1iZXJdOiAob3B0aW9uYWwpOiB4IGFuZCB5IG9yIGp1c3QgeCBvZiBwb2ludCBCXG4gICAgQHJldHVybiBbbnVtYmVyXTogVGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIHR3byBwb2ludHNcbiovXG5leHBvcnQgY29uc3QgZGlzdGFuY2UgPSAoYSwgYiA9IFpFUk9fUE9JTlQpID0+IHtcbiAgICAvLyAxRCBkaW1lbnNpb25zXG4gICAgaWYgKGlzTnVtKGEpKSB7XG4gICAgICAgIHJldHVybiBkaXN0YW5jZTFEKGEsIGIpO1xuXG4gICAgLy8gTXVsdGktZGltZW5zaW9uYWxcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB4RGVsdGEgPSBkaXN0YW5jZTFEKGEueCwgYi54KTtcbiAgICAgICAgY29uc3QgeURlbHRhID0gZGlzdGFuY2UxRChhLnksIGIueSk7XG4gICAgICAgIGNvbnN0IHpEZWx0YSA9IChpc051bShhLnopKSA/IGRpc3RhbmNlMUQoYS56LCBiLnopIDogMDtcblxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KCh4RGVsdGEgKiogMikgKyAoeURlbHRhICoqIDIpICsgKHpEZWx0YSAqKiAyKSk7XG4gICAgfVxufTtcblxuLypcbiAgICBFYXNlIHZhbHVlIHdpdGhpbiByYW5nZWQgcGFyYW1ldGVyc1xuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MgYmV0d2VlbiAwIGFuZCAxXG4gICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBvZiAwIHByb2dyZXNzXG4gICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBvZiAxIHByb2dyZXNzXG4gICAgQHBhcmFtIFtzdHJpbmcgfHwgZnVuY3Rpb25dOiBOYW1lIG9mIHByZXNldCBlYXNpbmdcbiAgICAgICAgdG8gdXNlIG9yIGdlbmVyYXRlZCBlYXNpbmcgZnVuY3Rpb25cbiAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBvZiBlYXNlZCBwcm9ncmVzcyBpbiByYW5nZVxuKi8gXG5leHBvcnQgY29uc3QgZWFzZSA9IChwcm9ncmVzcywgZnJvbSwgdG8sIGVhc2UpID0+IHtcbiAgICBjb25zdCBwcm9ncmVzc0xpbWl0ZWQgPSByZXN0cmljdChwcm9ncmVzcywgMCwgMSk7XG4gICAgY29uc3QgZWFzZWRQcm9ncmVzcyA9IGVhc2UocHJvZ3Jlc3NMaW1pdGVkKTtcblxuICAgIHJldHVybiBnZXRWYWx1ZUZyb21Qcm9ncmVzcyhlYXNlZFByb2dyZXNzLCBmcm9tLCB0byk7XG59O1xuIFxuLypcbiAgICBIeXBvdGVudXNlXG4gICAgXG4gICAgUmV0dXJucyB0aGUgaHlwb3RlbnVzZSwgc2lkZSBDLCBnaXZlbiB0aGUgbGVuZ3RocyBvZiBzaWRlcyBBIGFuZCBCLlxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogTGVuZ3RoIG9mIEFcbiAgICBAcGFyYW0gW251bWJlcl06IExlbmd0aCBvZiBCXG4gICAgQHJldHVybiBbbnVtYmVyXTogTGVuZ3RoIG9mIENcbiovXG5leHBvcnQgY29uc3QgaHlwb3RlbnVzZSA9IChhLCBiKSA9PiBNYXRoLnNxcnQoKGEgKiBhKSArIChiICogYikpO1xuXG4vKlxuICAgIFZhbHVlIGluIHJhbmdlIGZyb20gcHJvZ3Jlc3NcbiAgICBcbiAgICBHaXZlbiBhIGxvd2VyIGxpbWl0IGFuZCBhbiB1cHBlciBsaW1pdCwgd2UgcmV0dXJuIHRoZSB2YWx1ZSB3aXRoaW5cbiAgICB0aGF0IHJhbmdlIGFzIGV4cHJlc3NlZCBieSBwcm9ncmVzcyAoYSBudW1iZXIgZnJvbSAwLTEpXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBUaGUgcHJvZ3Jlc3MgYmV0d2VlbiBsb3dlciBhbmQgdXBwZXIgbGltaXRzIGV4cHJlc3NlZCAwLTFcbiAgICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IG9mIHJhbmdlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBVcHBlciBsaW1pdCBvZiByYW5nZVxuICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGFzIGNhbGN1bGF0ZWQgZnJvbSBwcm9ncmVzcyB3aXRoaW4gcmFuZ2UgKG5vdCBsaW1pdGVkIHdpdGhpbiByYW5nZSlcbiovXG5leHBvcnQgY29uc3QgZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MgPSAocHJvZ3Jlc3MsIGZyb20sIHRvKSA9PiAoLSBwcm9ncmVzcyAqIGZyb20pICsgKHByb2dyZXNzICogdG8pICsgZnJvbTtcblxuLypcbiAgICBQcm9ncmVzcyB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiAgICBcbiAgICBHaXZlbiBhIGxvd2VyIGxpbWl0IGFuZCBhbiB1cHBlciBsaW1pdCwgd2UgcmV0dXJuIHRoZSBwcm9ncmVzc1xuICAgIChleHByZXNzZWQgYXMgYSBudW1iZXIgMC0xKSByZXByZXNlbnRlZCBieSB0aGUgZ2l2ZW4gdmFsdWUsIGFuZFxuICAgIGxpbWl0IHRoYXQgcHJvZ3Jlc3MgdG8gd2l0aGluIDAtMS5cbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIHRvIGZpbmQgcHJvZ3Jlc3Mgd2l0aGluIGdpdmVuIHJhbmdlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBcbiAgICBAcGFyYW0gW251bWJlcl06IFVwcGVyIGxpbWl0XG4gICAgQHJldHVybiBbbnVtYmVyXTogUHJvZ3Jlc3Mgb2YgdmFsdWUgd2l0aGluIHJhbmdlIGFzIGV4cHJlc3NlZCAwLTFcbiovXG5leHBvcnQgY29uc3QgZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUgPSAodmFsdWUsIGZyb20sIHRvKSA9PiAodmFsdWUgLSBmcm9tKSAvICh0byAtIGZyb20pO1xuXG4vKlxuICAgIE9mZnNldCBiZXR3ZWVuIHR3byBvYmplY3RzIG9mIG51bWJlcnNcblxuICAgIElmIHByb3BlcnR5IGlzIGZvdW5kIGluIGIgbm90IHByZXNlbnQgaW4gYSwgaXQgd2lsbCByZXR1cm4gYDBgIGZvciB0aGF0IHByb3AuXG4gICAgXG4gICAgQHBhcmFtIFtQb2ludF06IEZpcnN0IG9iamVjdFxuICAgIEBwYXJhbSBbUG9pbnRdOiBTZWNvbmQgb2JqZWN0XG4gICAgQHJldHVybiBbT2Zmc2V0XTogRGlzdGFuY2UgbWV0cmljcyBiZXR3ZWVuIHR3byBwb2ludHNcbiovXG5leHBvcnQgY29uc3Qgb2Zmc2V0ID0gKGEsIGIpID0+IHtcbiAgICBjb25zdCBvZmZzZXQgPSB7fTtcblxuICAgIGZvciAobGV0IGtleSBpbiBiKSB7XG4gICAgICAgIGlmIChiLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIG9mZnNldFtrZXldID0gaGFzUHJvcGVydHkoYSwga2V5KSA/IGJba2V5XSAtIGFba2V5XSA6IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2Zmc2V0O1xufTtcblxuLypcbiAgICBQb2ludCBmcm9tIGFuZ2xlIGFuZCBkaXN0YW5jZVxuICAgIFxuICAgIEBwYXJhbSBbb2JqZWN0XTogMkQgcG9pbnQgb2Ygb3JpZ2luXG4gICAgQHBhcmFtIFtudW1iZXJdOiBBbmdsZSBmcm9tIG9yaWdpblxuICAgIEBwYXJhbSBbbnVtYmVyXTogRGlzdGFuY2UgZnJvbSBvcmlnaW5cbiAgICBAcmV0dXJuIFtvYmplY3RdOiBDYWxjdWxhdGVkIDJEIHBvaW50XG4qL1xuZXhwb3J0IGNvbnN0IHBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UgPSAob3JpZ2luLCBhbmdsZSwgZGlzdGFuY2UpID0+IHtcbiAgICBhbmdsZSA9IGRlZ3JlZXNUb1JhZGlhbnMoYW5nbGUpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogZGlzdGFuY2UgKiBNYXRoLmNvcyhhbmdsZSkgKyBvcmlnaW4ueCxcbiAgICAgICAgeTogZGlzdGFuY2UgKiBNYXRoLnNpbihhbmdsZSkgKyBvcmlnaW4ueVxuICAgIH07XG59O1xuXG4vKlxuICAgIENvbnZlcnQgcmFkaWFucyB0byBkZWdyZWVzXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBpbiByYWRpYW5zXG4gICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgaW4gZGVncmVlc1xuKi9cbmV4cG9ydCBjb25zdCByYWRpYW5zVG9EZWdyZWVzID0gKHJhZGlhbnMpID0+IHJhZGlhbnMgKiAxODAgLyBNYXRoLlBJO1xuXG4vKlxuICAgIFJldHVybiByYW5kb20gbnVtYmVyIGJldHdlZW4gcmFuZ2VcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogT3V0cHV0IG1pbmltdW1cbiAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogT3V0cHV0IG1heGltdW1cbiAgICBAcmV0dXJuIFtudW1iZXJdOiBSYW5kb20gbnVtYmVyIHdpdGhpbiByYW5nZSwgb3IgMCBhbmQgMSBpZiBub25lIHByb3ZpZGVkXG4qL1xuZXhwb3J0IGNvbnN0IHJhbmRvbSA9IChtaW4gPSAwLCBtYXggPSAxKSA9PiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XG5cbi8qXG4gICAgQ2FsY3VsYXRlIHJlbGF0aXZlIHZhbHVlXG4gICAgXG4gICAgVGFrZXMgdGhlIG9wZXJhdG9yIGFuZCB2YWx1ZSBmcm9tIGEgc3RyaW5nLCBpZSBcIis9NVwiLCBhbmQgYXBwbGllc1xuICAgIHRvIHRoZSBjdXJyZW50IHZhbHVlIHRvIHJlc29sdmUgYSBuZXcgdGFyZ2V0LlxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICAgIEBwYXJhbSBbc3RyaW5nXTogUmVsYXRpdmUgdmFsdWVcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBOZXcgdmFsdWVcbiovXG5leHBvcnQgY29uc3QgcmVsYXRpdmVWYWx1ZSA9IChjdXJyZW50LCByZWxhdGl2ZSkgPT4ge1xuICAgIGxldCBuZXdWYWx1ZSA9IGN1cnJlbnQ7XG4gICAgY29uc3QgZXF1YXRpb24gPSByZWxhdGl2ZS5zcGxpdCgnPScpO1xuICAgIGNvbnN0IG9wZXJhdG9yID0gZXF1YXRpb25bMF07XG4gICAgbGV0IHsgdW5pdCwgdmFsdWUgfSA9IGZpbmRWYWx1ZUFuZFVuaXQoZXF1YXRpb25bMV0pO1xuXG4gICAgdmFsdWUgPSBwYXJzZUZsb2F0KHZhbHVlKTtcblxuICAgIHN3aXRjaCAob3BlcmF0b3IpIHtcbiAgICBjYXNlICcrJzpcbiAgICAgICAgbmV3VmFsdWUgKz0gdmFsdWU7XG4gICAgICAgIGJyZWFrO1xuICAgIGNhc2UgJy0nOlxuICAgICAgICBuZXdWYWx1ZSAtPSB2YWx1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgY2FzZSAnKic6XG4gICAgICAgIG5ld1ZhbHVlICo9IHZhbHVlO1xuICAgICAgICBicmVhaztcbiAgICBjYXNlICcvJzpcbiAgICAgICAgbmV3VmFsdWUgLz0gdmFsdWU7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBcbiAgICBpZiAodW5pdCkge1xuICAgICAgICBuZXdWYWx1ZSArPSB1bml0O1xuICAgIH1cblxuICAgIHJldHVybiBuZXdWYWx1ZTtcbn07XG5cbi8qXG4gICAgUmVzdHJpY3QgdmFsdWUgdG8gcmFuZ2VcbiAgICBcbiAgICBSZXR1cm4gdmFsdWUgd2l0aGluIHRoZSByYW5nZSBvZiBsb3dlckxpbWl0IGFuZCB1cHBlckxpbWl0XG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSB0byBrZWVwIHdpdGhpbiByYW5nZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgb2YgcmFuZ2VcbiAgICBAcGFyYW0gW251bWJlcl06IFVwcGVyIGxpbWl0IG9mIHJhbmdlXG4gICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgYXMgbGltaXRlZCB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiovXG5leHBvcnQgY29uc3QgcmVzdHJpY3QgPSAodmFsdWUsIG1pbiwgbWF4KSA9PiBNYXRoLm1heChNYXRoLm1pbih2YWx1ZSwgbWF4KSwgbWluKTtcblxuLypcbiAgICBGcmFtZXJhdGUtaW5kZXBlbmRlbnQgc21vb3RoaW5nXG5cbiAgICBAcGFyYW0gW251bWJlcl06IE5ldyB2YWx1ZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogT2xkIHZhbHVlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvblxuICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBTbW9vdGhpbmcgKDAgaXMgbm9uZSlcbiovXG5leHBvcnQgY29uc3Qgc21vb3RoID0gKG5ld1ZhbHVlLCBvbGRWYWx1ZSwgZHVyYXRpb24sIHNtb290aGluZyA9IDApID0+IHRvRGVjaW1hbChvbGRWYWx1ZSArIChkdXJhdGlvbiAqIChuZXdWYWx1ZSAtIG9sZFZhbHVlKSAvIE1hdGgubWF4KHNtb290aGluZywgZHVyYXRpb24pKSk7XG5cbi8qXG4gICAgQ29udmVydCB4IHBlciBzZWNvbmQgdG8gcGVyIGZyYW1lIHZlbG9jaXR5IGJhc2VkIG9uIGZwc1xuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVW5pdCBwZXIgc2Vjb25kXG4gICAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvbiBpbiBtc1xuKi9cbmV4cG9ydCBjb25zdCBzcGVlZFBlckZyYW1lID0gKHhwcywgZnJhbWVEdXJhdGlvbikgPT4gKGlzTnVtKHhwcykpID8geHBzIC8gKDEwMDAgLyBmcmFtZUR1cmF0aW9uKSA6IDA7XG5cbi8qXG4gICAgQ29udmVydCB2ZWxvY2l0eSBpbnRvIHZlbGljaXR5IHBlciBzZWNvbmRcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFVuaXQgcGVyIGZyYW1lXG4gICAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvbiBpbiBtc1xuKi9cbmV4cG9ydCBjb25zdCBzcGVlZFBlclNlY29uZCA9ICh2ZWxvY2l0eSwgZnJhbWVEdXJhdGlvbikgPT4gdmVsb2NpdHkgKiAoMTAwMCAvIGZyYW1lRHVyYXRpb24pO1xuXG4vKlxuICAgIENyZWF0ZSBzdGVwcGVkIHZlcnNpb24gb2YgMC0xIHByb2dyZXNzXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gICAgQHBhcmFtIFtpbnRdOiBOdW1iZXIgb2Ygc3RlcHNcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBTdGVwcGVkIHZhbHVlXG4qL1xuZXhwb3J0IGNvbnN0IHN0ZXBQcm9ncmVzcyA9IChwcm9ncmVzcywgc3RlcHMpID0+IHtcbiAgICBjb25zdCBzZWdtZW50ID0gMSAvIChzdGVwcyAtIDEpO1xuICAgIGNvbnN0IHRhcmdldCA9IDEgLSAoMSAvIHN0ZXBzKTtcbiAgICBjb25zdCBwcm9ncmVzc09mVGFyZ2V0ID0gTWF0aC5taW4ocHJvZ3Jlc3MgLyB0YXJnZXQsIDEpO1xuXG4gICAgcmV0dXJuIE1hdGguZmxvb3IocHJvZ3Jlc3NPZlRhcmdldCAvIHNlZ21lbnQpICogc2VnbWVudDtcbn07Il19

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
	//# sourceMappingURL=data:application/json;base64,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U0EsSUFBTSxnQ0FBWSxVQUFDLFFBQUQsRUFBYztBQUNuQyxRQUFNLFFBQVMsT0FBTyxRQUFQLEtBQW9CLFFBQXJCLEdBQWlDLFNBQVMsZ0JBQVQsQ0FBMEIsUUFBMUIsQ0FBakMsR0FBdUUsUUFBckY7QUFDQSxXQUFRLE1BQU0sTUFBUCxHQUFpQixHQUFHLEtBQUgsQ0FBUyxJQUFULENBQWMsS0FBZCxDQUFqQixHQUF3QyxHQUFHLElBQUgsQ0FBUSxLQUFSLENBQS9DO0FBQ0gsQ0FITTs7Ozs7Ozs7OztBQWFBLElBQU0sb0RBQXNCLFVBQUMsS0FBRDtBQUFBLFdBQVcsU0FBUyxLQUFULElBQWtCLE1BQU0sS0FBTixDQUFZLE1BQVosQ0FBbEIsR0FBd0MsQ0FBQyxLQUFELENBQW5EO0FBQUEsQ0FBNUI7Ozs7Ozs7Ozs7QUFVQSxJQUFNLG9EQUFzQixVQUFDLEtBQUQ7QUFBQSxXQUFXLFNBQVMsS0FBVCxJQUFrQixNQUFNLEtBQU4sQ0FBWSxHQUFaLENBQWxCLEdBQXFDLENBQUMsS0FBRCxDQUFoRDtBQUFBLENBQTVCOzs7Ozs7Ozs7QUFTQSxJQUFNLGdDQUFZLFVBQUMsR0FBRCxFQUF3QjtBQUFBLFFBQWxCLFNBQWtCLHlEQUFOLENBQU07O0FBQzdDLHlCQUFZLEVBQVosRUFBa0IsU0FBbEI7QUFDQSxXQUFPLEtBQUssS0FBTCxDQUFXLE1BQU0sU0FBakIsSUFBOEIsU0FBckM7QUFDSCxDQUhNIiwiZmlsZSI6InV0aWxzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qdmFuZGVyZG9lcy9Db2RlL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IENBTUVMX0NBU0VfUEFUVEVSTiA9IC8oW2Etel0pKFtBLVpdKS9nO1xuY29uc3QgUkVQTEFDRV9URU1QTEFURSA9ICckMS0kMic7XG5jb25zdCBIQVNfUEVSRk9STUFOQ0VfTk9XID0gKHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCcgJiYgcGVyZm9ybWFuY2Uubm93KTtcblxuLypcbiAgICBHZXQgdmFyIHR5cGUgYXMgc3RyaW5nXG4gICAgXG4gICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgQHJldHVybiBbc3RyaW5nXTogUmV0dXJucywgZm9yIGluc3RhbmNlICdPYmplY3QnIGlmIFtvYmplY3QgT2JqZWN0XVxuKi9cbmNvbnN0IHZhclR5cGUgPSB2YXJpYWJsZSA9PiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFyaWFibGUpLnNsaWNlKDgsIC0xKTtcblxuLypcbiAgICBDb252ZXJ0IGNhbWVsQ2FzZSB0byBkYXNoLWNhc2VcblxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEByZXR1cm4gW3N0cmluZ11cbiovXG5leHBvcnQgY29uc3QgY2FtZWxUb0Rhc2ggPSAoc3RyaW5nKSA9PiBzdHJpbmcucmVwbGFjZShDQU1FTF9DQVNFX1BBVFRFUk4sIFJFUExBQ0VfVEVNUExBVEUpLnRvTG93ZXJDYXNlKCk7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVEZWxpbWl0ZWQgPSAodmFsdWVzLCB0ZXJtcywgZGVsaW1pdGVyLCBjaG9wKSA9PiB7XG4gICAgY29uc3QgbnVtVGVybXMgPSB0ZXJtcy5sZW5ndGg7XG4gICAgbGV0IGNvbWJpbmVkID0gJyc7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVRlcm1zOyBpKyspIHtcbiAgICAgICAgY29uc3QgdGVybSA9IHRlcm1zW2ldO1xuICAgICAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KHRlcm0pKSB7XG4gICAgICAgICAgICBjb21iaW5lZCArPSB2YWx1ZXNbdGVybV0gKyBkZWxpbWl0ZXI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY2hvcCkge1xuICAgICAgICBjb21iaW5lZCA9IGNvbWJpbmVkLnNsaWNlKDAsIC1jaG9wKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tYmluZWQ7XG59O1xuXG4vKlxuICAgIENyZWF0ZSBhIGZ1bmN0aW9uIHN0cmluZ1xuXG4gICAgJzIwcHgnLCAndHJhbnNsYXRlJyAtPiAndHJhbnNsYXRlKDIwcHgpJ1xuXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHJldHVybiBbc3RyaW5nXVxuKi9cbmV4cG9ydCBjb25zdCBjcmVhdGVGdW5jdGlvblN0cmluZyA9ICh2YWx1ZSwgcHJlZml4KSA9PiBgJHtwcmVmaXh9KCR7dmFsdWV9KWA7XG5cbi8qXG4gICAgR2VuZXJhdGUgY3VycmVudCB0aW1lc3RhbXBcbiAgICBcbiAgICBAcmV0dXJuIFt0aW1lc3RhbXBdOiBDdXJyZW50IFVOSVggdGltZXN0YW1wXG4qL1xuZXhwb3J0IGNvbnN0IGN1cnJlbnRUaW1lID0gSEFTX1BFUkZPUk1BTkNFX05PVyA/ICgpID0+IHBlcmZvcm1hbmNlLm5vdygpIDogKCkgPT4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbi8qXG4gICAgU3BsaXQgYSB2YWx1ZSBpbnRvIGEgdmFsdWUvdW5pdCBvYmplY3RcbiAgICBcbiAgICAgICAgXCIyMDBweFwiIC0+IHsgdmFsdWU6IDIwMCwgdW5pdDogXCJweFwiIH1cbiAgICAgICAgXG4gICAgQHBhcmFtIFtzdHJpbmddOiBWYWx1ZSB0byBzcGxpdFxuICAgIEByZXR1cm4gW29iamVjdF06IE9iamVjdCB3aXRoIHZhbHVlIGFuZCB1bml0IHByb3BzXG4qL1xuZXhwb3J0IGNvbnN0IGZpbmRWYWx1ZUFuZFVuaXQgPSAodmFsdWUpID0+IHtcbiAgICBpZiAodmFsdWUubWF0Y2gpIHtcbiAgICAgICAgY29uc3Qgc3BsaXRWYWx1ZSA9IHZhbHVlLm1hdGNoKC8oLT9cXGQqXFwuP1xcZCopKC4qKS8pO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcGFyc2VGbG9hdChzcGxpdFZhbHVlWzFdKSxcbiAgICAgICAgICAgIHVuaXQ6ICBzcGxpdFZhbHVlWzJdXG4gICAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHsgdmFsdWUgfTtcbiAgICB9XG59O1xuXG4vKlxuICAgIFNwbGl0IGNvbG9yIHN0cmluZyBpbnRvIG1hcCBvZiBjb2xvciBwcm9wZXJ0aWVzXG5cbiAgICBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMClcIiwgW1wiUmVkXCIsICdHcmVlblwiLCBcIkJsdWVcIiwgXCJBbHBoYVwiXVxuXG4gICAgeyBSZWQ6IDI1NS4uLiB9XG4qL1xuZXhwb3J0IGNvbnN0IGdldENvbG9yVmFsdWVzID0gKHZhbHVlLCBjb2xvclRlcm1zKSA9PiB7XG4gICAgY29uc3QgbnVtQ29sb3JUZXJtcyA9IGNvbG9yVGVybXMubGVuZ3RoO1xuICAgIGNvbnN0IGNvbG9yVmFsdWVzID0ge307XG4gICAgY29uc3QgY29sb3JzID0gc3BsaXRDb21tYURlbGltaXRlZChnZXRWYWx1ZUZyb21GdW5jdGlvblN0cmluZyh2YWx1ZSkpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1Db2xvclRlcm1zOyBpKyspIHtcbiAgICAgICAgY29sb3JWYWx1ZXNbY29sb3JUZXJtc1tpXV0gPSAoY29sb3JzW2ldICE9PSB1bmRlZmluZWQpID8gY29sb3JzW2ldIDogMTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29sb3JWYWx1ZXM7XG59O1xuXG4vKlxuICAgIEdldCB2YWx1ZSBmcm9tIGZ1bmN0aW9uIHN0cmluZ1xuXG4gICAgXCJ0cmFuc2xhdGVYKDIwcHgpXCIgLT4gXCIyMHB4XCJcbiovXG5leHBvcnQgY29uc3QgZ2V0VmFsdWVGcm9tRnVuY3Rpb25TdHJpbmcgPSAodmFsdWUpID0+IHZhbHVlLnN1YnN0cmluZyh2YWx1ZS5pbmRleE9mKCcoJykgKyAxLCB2YWx1ZS5sYXN0SW5kZXhPZignKScpKTtcblxuLypcbiAgICBDaGVjayBpZiB0d28gb2JqZWN0cyBoYXZlIGNoYW5nZWQgZnJvbSBlYWNoIG90aGVyXG4gICAgXG4gICAgQHBhcmFtIFtvYmplY3RdOiBJbnB1dCBBXG4gICAgQHBhcmFtIFtvYmplY3RdOiBJbnB1dCBCXG4gICAgQHJldHVybiBbYm9vbGVhbl06IFRydWUgaWYgZGlmZmVyZW50XG4qL1xuZXhwb3J0IGNvbnN0IGhhc0NoYW5nZWQgPSAoYSwgYikgPT4ge1xuICAgIGxldCBjaGFuZ2VkID0gZmFsc2U7XG5cbiAgICBmb3IgKGxldCBrZXkgaW4gYSkge1xuICAgICAgICBpZiAoYS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICBpZiAoaGFzUHJvcGVydHkoYiwga2V5KSkge1xuICAgICAgICAgICAgICAgIGlmIChhW2tleV0gIT09IGJba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoYW5nZWQ7XG59O1xuXG4vKlxuICAgIENoZWNrIGlmIG9iamVjdCBoYXMgcHJvcGVydHkgYW5kIGl0IGlzbid0IHVuZGVmaW5lZFxuXG4gICAgQHBhcmFtIFtvYmplY3RdXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHJldHVybiBbYm9vbGVhbl1cbiovXG5leHBvcnQgY29uc3QgaGFzUHJvcGVydHkgPSAob2JqZWN0LCBwcm9wZXJ0eU5hbWUpID0+IG9iamVjdC5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eU5hbWUpICYmIG9iamVjdFtwcm9wZXJ0eU5hbWVdICE9PSB1bmRlZmluZWQ7XG5cbi8qXG4gICAgSXMgdXRpbHMgdmFyIGFuIGFycmF5ID8gXG4gICAgXG4gICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB1dGlscy52YXJUeXBlID09PSAnQXJyYXknXG4qL1xuZXhwb3J0IGNvbnN0IGlzQXJyYXkgPSAoYXJyKSA9PiB2YXJUeXBlKGFycikgPT09ICdBcnJheSc7XG5cbi8qXG4gICAgSXMgdXRpbHMgdmFyIGEgZnVuY3Rpb24gPyBcbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHV0aWxzLnZhclR5cGUgPT09ICdGdW5jdGlvbidcbiovXG5leHBvcnQgY29uc3QgaXNGdW5jID0gKG9iaikgPT4gdmFyVHlwZShvYmopID09PSAnRnVuY3Rpb24nO1xuXG4vKlxuICAgIElzIHV0aWxzIHZhciBhIG51bWJlcj9cbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiA9PT0gJ251bWJlcidcbiovXG5leHBvcnQgY29uc3QgaXNOdW0gPSAobnVtKSA9PiB0eXBlb2YgbnVtID09PSAnbnVtYmVyJztcblxuLypcbiAgICBJcyB1dGlscyB2YXIgYW4gb2JqZWN0P1xuICAgIFxuICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mID09PSAnb2JqZWN0J1xuKi9cbmV4cG9ydCBjb25zdCBpc09iaiA9IChvYmopID0+IHR5cGVvZiBvYmogPT09ICdvYmplY3QnO1xuXG4vKlxuICAgIElzIHV0aWxzIGEgcmVsYXRpdmUgdmFsdWUgYXNzaWdubWVudD9cbiAgICBcbiAgICBAcGFyYW0gW3N0cmluZ106IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogSWYgdXRpbHMgbG9va3MgbGlrZSBhIHJlbGF0aXZlIHZhbHVlIGFzc2lnbm1lbnRcbiovXG5leHBvcnQgY29uc3QgaXNSZWxhdGl2ZVZhbHVlID0gKHZhbHVlKSA9PiAodmFsdWUgJiYgdmFsdWUuaW5kZXhPZiAmJiB2YWx1ZS5pbmRleE9mKCc9JykgPiAwKSA/IHRydWUgOiBmYWxzZTtcblxuLypcbiAgICBJcyB1dGlscyB2YXIgYSBzdHJpbmcgPyBcbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnXG4qL1xuZXhwb3J0IGNvbnN0IGlzU3RyaW5nID0gKHN0cikgPT4gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZyc7XG5cbi8qXG4gICAgQHBhcmFtIFtzdHJpbmcgfHwgTm9kZUxpc3RdOlxuICAgICAgICBJZiBzdHJpbmcsIHRyZWF0ZWQgYXMgc2VsZWN0b3IuXG4gICAgICAgIElmIG5vdCwgdHJlYXRlZCBhcyBwcmVleGlzdGluZyBOb2RlTGlzdFxuXG4gICAgQHJldHVybiBbQXJyYXldXG4qL1xuZXhwb3J0IGNvbnN0IHNlbGVjdERvbSA9IChzZWxlY3RvcikgPT4ge1xuICAgIGNvbnN0IG5vZGVzID0gKHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycpID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikgOiBzZWxlY3RvcjtcbiAgICByZXR1cm4gKG5vZGVzLmxlbmd0aCkgPyBbXS5zbGljZS5jYWxsKG5vZGVzKSA6IFtdLnB1c2gobm9kZXMpO1xufTtcblxuLypcbiAgICBTcGxpdCBjb21tYS1kZWxpbWl0ZWQgc3RyaW5nXG5cbiAgICBcImZvbyxiYXJcIiAtPiBbXCJmb29cIiwgXCJiYXJcIl1cblxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEByZXR1cm4gW2FycmF5XVxuKi9cbmV4cG9ydCBjb25zdCBzcGxpdENvbW1hRGVsaW1pdGVkID0gKHZhbHVlKSA9PiBpc1N0cmluZyh2YWx1ZSkgPyB2YWx1ZS5zcGxpdCgvLFxccyovKSA6IFt2YWx1ZV07XG5cbi8qXG4gICAgU3BsaXQgc3BhY2UtZGVsaW1pdGVkIHN0cmluZ1xuXG4gICAgXCJmb28gYmFyXCIgLT4gW1wiZm9vXCIsIFwiYmFyXCJdXG5cbiAgICBAcGFyYW0gW3N0cmluZ11cbiAgICBAcmV0dXJuIFthcnJheV1cbiovXG5leHBvcnQgY29uc3Qgc3BsaXRTcGFjZURlbGltaXRlZCA9ICh2YWx1ZSkgPT4gaXNTdHJpbmcodmFsdWUpID8gdmFsdWUuc3BsaXQoJyAnKSA6IFt2YWx1ZV07XG5cbi8qXG4gICAgQ29udmVydCBudW1iZXIgdG8geCBkZWNpbWFsIHBsYWNlc1xuXG4gICAgQHBhcmFtIFtudW1iZXJdXG4gICAgQHBhcmFtIFtudW1iZXJdXG4gICAgQHJldHVybiBbbnVtYmVyXVxuKi9cbmV4cG9ydCBjb25zdCB0b0RlY2ltYWwgPSAobnVtLCBwcmVjaXNpb24gPSAyKSA9PiB7XG4gICAgcHJlY2lzaW9uID0gMTAgKiogcHJlY2lzaW9uO1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG51bSAqIHByZWNpc2lvbikgLyBwcmVjaXNpb247XG59O1xuIl19

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _defaultProps = __webpack_require__(48);
	
	exports.default = {
	    defaultProps: _defaultProps.opacity
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9hbHBoYS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7O2tCQUVlO0FBQ1g7QUFEVyxDIiwiZmlsZSI6ImFscGhhLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qdmFuZGVyZG9lcy9Db2RlL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG9wYWNpdHkgfSBmcm9tICcuL3NldHRpbmdzL2RlZmF1bHQtcHJvcHMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGVmYXVsdFByb3BzOiBvcGFjaXR5XG59OyJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9hbmdsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7OztrQkFFZTtBQUNYLGtCQUFjO0FBQ1YsY0FBTSxLQURJO0FBRVY7QUFGVTtBQURILEMiLCJmaWxlIjoiYW5nbGUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2p2YW5kZXJkb2VzL0NvZGUvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVuaXRUeXBlIGZyb20gJy4vdW5pdCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgdW5pdDogJ2RlZycsXG4gICAgICAgIHR5cGU6IHVuaXRUeXBlXG4gICAgfVxufTsiXX0=

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9jb2xvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU0sYUFBYSw2Q0FBbkI7QUFDQSxJQUFNLGdCQUFnQixXQUFXLE1BQWpDOztrQkFFZTtBQUNYLCtCQUFtQixjQUFJLFlBQXZCLEVBQXdDLGNBQUksWUFBNUMsQ0FEVzs7QUFHWCxVQUFNLFVBQUMsS0FBRDtBQUFBLGVBQVcsY0FBSSxJQUFKLENBQVMsS0FBVCxLQUFtQixjQUFJLElBQUosQ0FBUyxLQUFULENBQW5CLElBQXNDLGNBQUksSUFBSixDQUFTLEtBQVQsQ0FBakQ7QUFBQSxLQUhLOztBQUtYLFdBQU8sVUFBQyxLQUFELEVBQVc7QUFDZCxhQUFLLElBQUksSUFBSSxDQUFiLEVBQWdCLElBQUksYUFBcEIsRUFBbUMsR0FBbkMsRUFBd0M7QUFDcEMsZ0JBQUksV0FBVyxDQUFYLEVBQWMsSUFBZCxDQUFtQixLQUFuQixDQUFKLEVBQStCO0FBQzNCLHVCQUFPLFdBQVcsQ0FBWCxFQUFjLEtBQWQsQ0FBb0IsS0FBcEIsQ0FBUDtBQUNIO0FBQ0o7QUFDSixLQVhVOztBQWFYLGFBQVMsVUFBQyxNQUFEO0FBQUEsZUFBYSxPQUFPLEdBQVAsS0FBZSxTQUFoQixHQUE2QixjQUFJLE9BQUosQ0FBWSxNQUFaLENBQTdCLEdBQW1ELGNBQUksT0FBSixDQUFZLE1BQVosQ0FBL0Q7QUFBQTtBQWJFLEMiLCJmaWxlIjoiY29sb3IuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2p2YW5kZXJkb2VzL0NvZGUvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJnYiBmcm9tICcuL3JnYic7XG5pbXBvcnQgaHNsIGZyb20gJy4vaHNsJztcbmltcG9ydCBoZXggZnJvbSAnLi9oZXgnO1xuXG5jb25zdCBjb2xvclR5cGVzID0gW3JnYiwgaHNsLCBoZXhdO1xuY29uc3QgbnVtQ29sb3JUeXBlcyA9IGNvbG9yVHlwZXMubGVuZ3RoO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGVmYXVsdFByb3BzOiB7IC4uLnJnYi5kZWZhdWx0UHJvcHMsIC4uLmhzbC5kZWZhdWx0UHJvcHMgfSxcblxuICAgIHRlc3Q6ICh2YWx1ZSkgPT4gcmdiLnRlc3QodmFsdWUpIHx8IGhleC50ZXN0KHZhbHVlKSB8fCBoc2wudGVzdCh2YWx1ZSksXG5cbiAgICBzcGxpdDogKHZhbHVlKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQ29sb3JUeXBlczsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY29sb3JUeXBlc1tpXS50ZXN0KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb2xvclR5cGVzW2ldLnNwbGl0KHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBjb21iaW5lOiAodmFsdWVzKSA9PiAodmFsdWVzLlJlZCAhPT0gdW5kZWZpbmVkKSA/IHJnYi5jb21iaW5lKHZhbHVlcykgOiBoc2wuY29tYmluZSh2YWx1ZXMpXG59O1xuIl19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9jb21wbGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7QUFFQSxJQUFNLGNBQWMsa0JBQXBCO0FBQ0EsSUFBTSxnQkFBZ0IsVUFBQyxLQUFEO0FBQUEsV0FBVyxPQUFPLEtBQVAsR0FBZSxHQUExQjtBQUFBLENBQXRCOztrQkFFZTs7QUFFWCxVQUFNLFVBQUMsS0FBRCxFQUFXO0FBQ2IsWUFBTSxVQUFVLE1BQU0sS0FBTixDQUFZLFdBQVosQ0FBaEI7QUFDQSxlQUFRLG9CQUFRLE9BQVIsS0FBb0IsUUFBUSxNQUFSLEdBQWlCLENBQTdDO0FBQ0gsS0FMVTs7QUFPWCxjQUFVLFVBQUMsS0FBRCxFQUFXO0FBQ2pCLFlBQUksVUFBVSxDQUFkO0FBQ0EsZUFBTyxNQUFNLE9BQU4sQ0FBYyxXQUFkLEVBQTJCO0FBQUEsbUJBQU0sY0FBYyxTQUFkLENBQU47QUFBQSxTQUEzQixDQUFQO0FBQ0gsS0FWVTs7QUFZWCxXQUFPLFVBQUMsS0FBRCxFQUFXO0FBQ2QsWUFBTSxhQUFhLEVBQW5COztBQUVBLGNBQU0sS0FBTixDQUFZLFdBQVosRUFBeUIsT0FBekIsQ0FBaUMsVUFBQyxLQUFELEVBQVEsQ0FBUjtBQUFBLG1CQUFjLFdBQVcsQ0FBWCxJQUFnQixLQUE5QjtBQUFBLFNBQWpDOztBQUVBLGVBQU8sVUFBUDtBQUNILEtBbEJVOztBQW9CWCxhQUFTLFVBQUMsTUFBRCxFQUFTLFFBQVQsRUFBc0I7QUFDM0IsYUFBSyxJQUFJLEdBQVQsSUFBZ0IsTUFBaEIsRUFBd0I7QUFDcEIsZ0JBQUksT0FBTyxjQUFQLENBQXNCLEdBQXRCLENBQUosRUFBZ0M7QUFDNUIsMkJBQVcsU0FBUyxPQUFULENBQWlCLGNBQWMsR0FBZCxDQUFqQixFQUFxQyxPQUFPLEdBQVAsQ0FBckMsQ0FBWDtBQUNIO0FBQ0o7O0FBRUQsZUFBTyxRQUFQO0FBQ0g7O0FBNUJVLEMiLCJmaWxlIjoiY29tcGxleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvanZhbmRlcmRvZXMvQ29kZS9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc0FycmF5IH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcblxuY29uc3QgRkxPQVRfUkVHRVggPSAvKC0pPyhcXGRbXFxkXFwuXSopL2c7XG5jb25zdCBnZW5lcmF0ZVRva2VuID0gKHRva2VuKSA9PiAnJHsnICsgdG9rZW4gKyAnfSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIHRlc3Q6ICh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBtYXRjaGVzID0gdmFsdWUubWF0Y2goRkxPQVRfUkVHRVgpO1xuICAgICAgICByZXR1cm4gKGlzQXJyYXkobWF0Y2hlcykgJiYgbWF0Y2hlcy5sZW5ndGggPiAxKTtcbiAgICB9LFxuXG4gICAgdGVtcGxhdGU6ICh2YWx1ZSkgPT4ge1xuICAgICAgICBsZXQgY291bnRlciA9IDA7XG4gICAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKEZMT0FUX1JFR0VYLCAoKSA9PiBnZW5lcmF0ZVRva2VuKGNvdW50ZXIrKykpO1xuICAgIH0sXG5cbiAgICBzcGxpdDogKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IHNwbGl0VmFsdWUgPSB7fTtcblxuICAgICAgICB2YWx1ZS5tYXRjaChGTE9BVF9SRUdFWCkuZm9yRWFjaCgodmFsdWUsIGkpID0+IHNwbGl0VmFsdWVbaV0gPSB2YWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIHNwbGl0VmFsdWU7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6ICh2YWx1ZXMsIHRlbXBsYXRlKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiB2YWx1ZXMpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlID0gdGVtcGxhdGUucmVwbGFjZShnZW5lcmF0ZVRva2VuKGtleSksIHZhbHVlc1trZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICB9XG5cbn07Il19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9oZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7Ozs7a0JBRWU7QUFDWCxrQkFBYyxjQUFJLFlBRFA7O0FBR1gsVUFBTSxVQUFDLEtBQUQ7QUFBQSxlQUFZLFNBQVMsTUFBTSxPQUFOLENBQWMsR0FBZCxJQUFxQixDQUFDLENBQTNDO0FBQUEsS0FISzs7QUFLWCxXQUFPLFVBQUMsS0FBRCxFQUFXO0FBQ2QsWUFBSSxVQUFKO1lBQU8sVUFBUDtZQUFVLFVBQVY7OztBQUdBLFlBQUksTUFBTSxNQUFOLEdBQWUsQ0FBbkIsRUFBc0I7QUFDbEIsZ0JBQUksTUFBTSxNQUFOLENBQWEsQ0FBYixFQUFnQixDQUFoQixDQUFKO0FBQ0EsZ0JBQUksTUFBTSxNQUFOLENBQWEsQ0FBYixFQUFnQixDQUFoQixDQUFKO0FBQ0EsZ0JBQUksTUFBTSxNQUFOLENBQWEsQ0FBYixFQUFnQixDQUFoQixDQUFKOzs7QUFHSCxTQU5ELE1BTU87QUFDSCxvQkFBSSxNQUFNLE1BQU4sQ0FBYSxDQUFiLEVBQWdCLENBQWhCLENBQUo7QUFDQSxvQkFBSSxNQUFNLE1BQU4sQ0FBYSxDQUFiLEVBQWdCLENBQWhCLENBQUo7QUFDQSxvQkFBSSxNQUFNLE1BQU4sQ0FBYSxDQUFiLEVBQWdCLENBQWhCLENBQUo7QUFDQSxxQkFBSyxDQUFMO0FBQ0EscUJBQUssQ0FBTDtBQUNBLHFCQUFLLENBQUw7QUFDSDs7QUFFRCxlQUFPO0FBQ0gsaUJBQUssU0FBUyxDQUFULEVBQVksRUFBWixDQURGO0FBRUgsbUJBQU8sU0FBUyxDQUFULEVBQVksRUFBWixDQUZKO0FBR0gsa0JBQU0sU0FBUyxDQUFULEVBQVksRUFBWixDQUhIO0FBSUgsbUJBQU87QUFKSixTQUFQO0FBTUgsS0E5QlU7O0FBZ0NYLGFBQVMsVUFBQyxNQUFEO0FBQUEsZUFBWSxjQUFJLE9BQUosQ0FBWSxNQUFaLENBQVo7QUFBQTtBQWhDRSxDIiwiZmlsZSI6ImhleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvanZhbmRlcmRvZXMvQ29kZS9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmdiIGZyb20gJy4vcmdiJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRlZmF1bHRQcm9wczogcmdiLmRlZmF1bHRQcm9wcyxcblxuICAgIHRlc3Q6ICh2YWx1ZSkgPT4gKHZhbHVlICYmIHZhbHVlLmluZGV4T2YoJyMnKSA+IC0xKSxcblxuICAgIHNwbGl0OiAodmFsdWUpID0+IHtcbiAgICAgICAgbGV0IHIsIGcsIGI7XG5cbiAgICAgICAgLy8gSWYgd2UgaGF2ZSA2IGNoYXJhY3RlcnMsIGllICNGRjAwMDBcbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+IDQpIHtcbiAgICAgICAgICAgIHIgPSB2YWx1ZS5zdWJzdHIoMSwgMik7XG4gICAgICAgICAgICBnID0gdmFsdWUuc3Vic3RyKDMsIDIpO1xuICAgICAgICAgICAgYiA9IHZhbHVlLnN1YnN0cig1LCAyKTtcblxuICAgICAgICAvLyBPciB3ZSBoYXZlIDMgY2hhcmFjdGVycywgaWUgI0YwMFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgciA9IHZhbHVlLnN1YnN0cigxLCAxKTtcbiAgICAgICAgICAgIGcgPSB2YWx1ZS5zdWJzdHIoMiwgMSk7XG4gICAgICAgICAgICBiID0gdmFsdWUuc3Vic3RyKDMsIDEpO1xuICAgICAgICAgICAgciArPSByO1xuICAgICAgICAgICAgZyArPSBnO1xuICAgICAgICAgICAgYiArPSBiO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFJlZDogcGFyc2VJbnQociwgMTYpLFxuICAgICAgICAgICAgR3JlZW46IHBhcnNlSW50KGcsIDE2KSxcbiAgICAgICAgICAgIEJsdWU6IHBhcnNlSW50KGIsIDE2KSxcbiAgICAgICAgICAgIEFscGhhOiAxXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIGNvbWJpbmU6ICh2YWx1ZXMpID0+IHJnYi5jb21iaW5lKHZhbHVlcylcbn07Il19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9oc2wuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUNBOztBQUNBOztrQkFFZTtBQUNYLGtCQUFjO0FBQ1YsYUFBSztBQUNELGlCQUFLLENBREo7QUFFRCxpQkFBSztBQUZKLFNBREs7QUFLVix5Q0FMVTtBQU1WLHdDQU5VO0FBT1Y7QUFQVSxLQURIOztBQVdYLFVBQU0sVUFBQyxLQUFEO0FBQUEsZUFBWSxTQUFTLE1BQU0sT0FBTixDQUFjLEtBQWQsSUFBdUIsQ0FBQyxDQUE3QztBQUFBLEtBWEs7O0FBYVgsV0FBTyxVQUFDLEtBQUQ7QUFBQSxlQUFXLDJCQUFlLEtBQWYsa0JBQVg7QUFBQSxLQWJJOztBQWVYLGFBQVMsVUFBQyxNQUFEO0FBQUEsZUFBWSxpQ0FBcUIsNEJBQWdCLE1BQWhCLG1CQUFrQyxJQUFsQyxFQUF3QyxDQUF4QyxDQUFyQixFQUFpRSxNQUFqRSxDQUFaO0FBQUE7QUFmRSxDIiwiZmlsZSI6ImhzbC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvanZhbmRlcmRvZXMvQ29kZS9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwZXJjZW50LCBvcGFjaXR5IH0gZnJvbSAnLi9zZXR0aW5ncy9kZWZhdWx0LXByb3BzJztcbmltcG9ydCB7IGhzbCBhcyBoc2xUZXJtcyB9IGZyb20gJy4vc2V0dGluZ3MvZGljdGlvbmFyeSc7XG5pbXBvcnQgeyBjcmVhdGVEZWxpbWl0ZWQsIGNyZWF0ZUZ1bmN0aW9uU3RyaW5nLCBnZXRDb2xvclZhbHVlcyB9IGZyb20gJy4uL2luYy91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgSHVlOiB7XG4gICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICBtYXg6IDM2MFxuICAgICAgICB9LFxuICAgICAgICBTYXR1cmF0aW9uOiBwZXJjZW50LFxuICAgICAgICBMaWdodG5lc3M6IHBlcmNlbnQsXG4gICAgICAgIEFscGhhOiBvcGFjaXR5XG4gICAgfSxcblxuICAgIHRlc3Q6ICh2YWx1ZSkgPT4gKHZhbHVlICYmIHZhbHVlLmluZGV4T2YoJ2hzbCcpID4gLTEpLFxuXG4gICAgc3BsaXQ6ICh2YWx1ZSkgPT4gZ2V0Q29sb3JWYWx1ZXModmFsdWUsIGhzbFRlcm1zKSxcblxuICAgIGNvbWJpbmU6ICh2YWx1ZXMpID0+IGNyZWF0ZUZ1bmN0aW9uU3RyaW5nKGNyZWF0ZURlbGltaXRlZCh2YWx1ZXMsIGhzbFRlcm1zLCAnLCAnLCAyKSwgJ2hzbGEnKVxufTtcbiJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9weC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7OztrQkFFZTtBQUNYLGtCQUFjO0FBQ1YsY0FBTSxJQURJO0FBRVY7QUFGVTtBQURILEMiLCJmaWxlIjoicHguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2p2YW5kZXJkb2VzL0NvZGUvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVuaXRUeXBlIGZyb20gJy4vdW5pdCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgdW5pdDogJ3B4JyxcbiAgICAgICAgdHlwZTogdW5pdFR5cGVcbiAgICB9XG59OyJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9yZ2IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUNBOztBQUNBOztrQkFFZTtBQUNYLGtCQUFjO0FBQ1YsOEJBRFU7QUFFVixnQ0FGVTtBQUdWLCtCQUhVO0FBSVY7QUFKVSxLQURIOztBQVFYLFVBQU0sVUFBQyxLQUFEO0FBQUEsZUFBWSxTQUFTLE1BQU0sT0FBTixDQUFjLEtBQWQsSUFBdUIsQ0FBQyxDQUE3QztBQUFBLEtBUks7O0FBVVgsV0FBTyxVQUFDLEtBQUQ7QUFBQSxlQUFXLDJCQUFlLEtBQWYsa0JBQVg7QUFBQSxLQVZJOztBQVlYLGFBQVMsVUFBQyxNQUFEO0FBQUEsZUFBWSxpQ0FBcUIsNEJBQWdCLE1BQWhCLG1CQUFrQyxJQUFsQyxFQUF3QyxDQUF4QyxDQUFyQixFQUFpRSxNQUFqRSxDQUFaO0FBQUE7QUFaRSxDIiwiZmlsZSI6InJnYi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvanZhbmRlcmRvZXMvQ29kZS9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVEZWxpbWl0ZWQsIGNyZWF0ZUZ1bmN0aW9uU3RyaW5nLCBnZXRDb2xvclZhbHVlcyB9IGZyb20gJy4uL2luYy91dGlscyc7XG5pbXBvcnQgeyByZ2IgYXMgcmdiVGVybXMgfSBmcm9tICcuL3NldHRpbmdzL2RpY3Rpb25hcnknO1xuaW1wb3J0IHsgcmdiIGFzIGRlZmF1bHRSR0IsIG9wYWNpdHkgYXMgZGVmYXVsdE9wYWNpdHkgfSBmcm9tICcuL3NldHRpbmdzL2RlZmF1bHQtcHJvcHMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIFJlZDogZGVmYXVsdFJHQixcbiAgICAgICAgR3JlZW46IGRlZmF1bHRSR0IsXG4gICAgICAgIEJsdWU6IGRlZmF1bHRSR0IsXG4gICAgICAgIEFscGhhOiBkZWZhdWx0T3BhY2l0eVxuICAgIH0sXG5cbiAgICB0ZXN0OiAodmFsdWUpID0+ICh2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mKCdyZ2InKSA+IC0xKSxcblxuICAgIHNwbGl0OiAodmFsdWUpID0+IGdldENvbG9yVmFsdWVzKHZhbHVlLCByZ2JUZXJtcyksXG5cbiAgICBjb21iaW5lOiAodmFsdWVzKSA9PiBjcmVhdGVGdW5jdGlvblN0cmluZyhjcmVhdGVEZWxpbWl0ZWQodmFsdWVzLCByZ2JUZXJtcywgJywgJywgMiksICdyZ2JhJylcbn07Il19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9zY2FsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7a0JBQWU7QUFDWCxrQkFBYztBQUNWLGlCQUFTO0FBREM7QUFESCxDIiwiZmlsZSI6InNjYWxlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qdmFuZGVyZG9lcy9Db2RlL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgY3VycmVudDogMVxuICAgIH1cbn07Il19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9zaGFkb3cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBLElBQU0sMEJBQTBCLG1CQUFZLEtBQVosQ0FBa0IsQ0FBbEIsRUFBcUIsQ0FBckIsQ0FBaEM7O2tCQUVlO0FBQ1gsK0JBQ08sZ0JBQU0sWUFEYjtBQUVJLDJCQUZKO0FBR0ksMkJBSEo7QUFJSSxnQ0FKSjtBQUtJO0FBTEosTUFEVzs7QUFTWCxXQUFPLFVBQUMsS0FBRCxFQUFXO0FBQ2QsWUFBTSxPQUFPLGdDQUFvQixLQUFwQixDQUFiO0FBQ0EsWUFBSSxrQkFBa0IsS0FBdEI7QUFDQSxZQUFJLFlBQVksRUFBaEI7QUFDQSxZQUFJLGFBQWEsRUFBakI7O0FBRUEsYUFBSyxPQUFMLENBQWEsVUFBQyxHQUFELEVBQU0sQ0FBTixFQUFZOztBQUVyQixnQkFBSSxtQkFBbUIsZ0JBQU0sSUFBTixDQUFXLEdBQVgsQ0FBdkIsRUFBd0M7QUFDcEMsa0NBQWtCLElBQWxCO0FBQ0EsNkJBQWEsR0FBYjs7O0FBR0gsYUFMRCxNQUtPO0FBQ0gsK0JBQVcsbUJBQVksQ0FBWixDQUFYLElBQTZCLEdBQTdCO0FBQ0g7QUFDSixTQVZEOztBQVlBLFlBQU0sa0JBQWtCLGdCQUFNLEtBQU4sQ0FBWSxTQUFaLENBQXhCOztBQUVBLDRCQUFZLFVBQVosSUFBd0IsZ0NBQXhCO0FBQ0gsS0E5QlU7O0FBZ0NYLGFBQVMsVUFBQyxNQUFEO0FBQUEsZUFBWSw0QkFBZ0IsTUFBaEIsRUFBd0IsdUJBQXhCLEVBQWlELEdBQWpELElBQXdELGdCQUFNLE9BQU4sQ0FBYyxNQUFkLENBQXBFO0FBQUE7QUFoQ0UsQyIsImZpbGUiOiJzaGFkb3cuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2p2YW5kZXJkb2VzL0NvZGUvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbG9yIGZyb20gJy4vY29sb3InO1xuaW1wb3J0IHsgZGVmYXVsdFByb3BzIGFzIHB4RGVmYXVsdFByb3BzIH0gZnJvbSAnLi9weCc7XG5pbXBvcnQgeyBzaGFkb3cgYXMgc2hhZG93VGVybXMgfSBmcm9tICcuL3NldHRpbmdzL2RpY3Rpb25hcnknO1xuaW1wb3J0IHsgc3BsaXRTcGFjZURlbGltaXRlZCwgY3JlYXRlRGVsaW1pdGVkIH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcblxuY29uc3Qgc2hhZG93V2l0aG91dENvbG9yVGVybXMgPSBzaGFkb3dUZXJtcy5zbGljZSgwLCA0KTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICAuLi5jb2xvci5kZWZhdWx0UHJvcHMsXG4gICAgICAgIFg6IHB4RGVmYXVsdFByb3BzLFxuICAgICAgICBZOiBweERlZmF1bHRQcm9wcyxcbiAgICAgICAgUmFkaXVzOiBweERlZmF1bHRQcm9wcyxcbiAgICAgICAgU3ByZWFkOiBweERlZmF1bHRQcm9wc1xuICAgIH0sXG5cbiAgICBzcGxpdDogKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IGJpdHMgPSBzcGxpdFNwYWNlRGVsaW1pdGVkKHZhbHVlKTtcbiAgICAgICAgbGV0IGhhc1JlYWNoZWRDb2xvciA9IGZhbHNlO1xuICAgICAgICBsZXQgY29sb3JQcm9wID0gJyc7XG4gICAgICAgIGxldCBzcGxpdFZhbHVlID0ge307XG5cbiAgICAgICAgYml0cy5mb3JFYWNoKChiaXQsIGkpID0+IHtcbiAgICAgICAgICAgIC8vIElmIHdlJ3ZlIHJlYWNoZWQgdGhlIGNvbG9yIHByb3BzLCBhcHBlbmQgdG8gY29sb3Igc3RyaW5nXG4gICAgICAgICAgICBpZiAoaGFzUmVhY2hlZENvbG9yIHx8IGNvbG9yLnRlc3QoYml0KSkge1xuICAgICAgICAgICAgICAgIGhhc1JlYWNoZWRDb2xvciA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29sb3JQcm9wICs9IGJpdDtcblxuICAgICAgICAgICAgLy8gRWxzZSBwcm9jZXNzIHNoYWRvdyB2YWx1ZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzcGxpdFZhbHVlW3NoYWRvd1Rlcm1zW2ldXSA9IGJpdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3Qgc3BsaXRDb2xvclByb3BzID0gY29sb3Iuc3BsaXQoY29sb3JQcm9wKTtcblxuICAgICAgICByZXR1cm4geyAuLi5zcGxpdFZhbHVlLCBzcGxpdENvbG9yUHJvcHMgfTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogKHZhbHVlcykgPT4gY3JlYXRlRGVsaW1pdGVkKHZhbHVlcywgc2hhZG93V2l0aG91dENvbG9yVGVybXMsICcgJykgKyBjb2xvci5jb21iaW5lKHZhbHVlcylcbn07XG4iXX0=

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy91bml0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7a0JBRWU7QUFDWCxVQUFNLFVBQVUsUUFBVixFQUFvQjtBQUFBLGdDQUNKLDZCQUFpQixRQUFqQixDQURJOztBQUFBLFlBQ2QsS0FEYyxxQkFDZCxLQURjOztBQUV0QixlQUFRLGtCQUFNLEtBQU4sS0FBZ0IsQ0FBQyxNQUFNLEtBQU4sQ0FBbEIsR0FBa0MsSUFBbEMsR0FBeUMsS0FBaEQ7QUFDSCxLQUpVOztBQU1YLFdBQU8sVUFBVSxRQUFWLEVBQW9CLE1BQXBCLEVBQTRCO0FBQUEsaUNBQ1AsNkJBQWlCLFFBQWpCLENBRE87O0FBQUEsWUFDdkIsS0FEdUIsc0JBQ3ZCLEtBRHVCO0FBQUEsWUFDaEIsSUFEZ0Isc0JBQ2hCLElBRGdCOzs7QUFHL0IsWUFBSSxRQUFRLFNBQVMsSUFBckIsRUFBMkI7QUFDdkIsbUJBQU8sSUFBUCxHQUFjLElBQWQ7QUFDSDs7QUFFRCxlQUFPLEtBQVA7QUFDSCxLQWRVOztBQWdCWCxlQUFXLFVBQUMsTUFBRCxFQUFTLE1BQVQ7QUFBQSxlQUFvQixVQUFVLE9BQU8sSUFBUCxJQUFlLEVBQXpCLENBQXBCO0FBQUE7QUFoQkEsQyIsImZpbGUiOiJ1bml0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qdmFuZGVyZG9lcy9Db2RlL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzTnVtLCBmaW5kVmFsdWVBbmRVbml0IH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHRlc3Q6IGZ1bmN0aW9uICh1bnBhcnNlZCkge1xuICAgICAgICBjb25zdCB7IHZhbHVlIH0gPSBmaW5kVmFsdWVBbmRVbml0KHVucGFyc2VkKTtcbiAgICAgICAgcmV0dXJuIChpc051bSh2YWx1ZSkgJiYgIWlzTmFOKHZhbHVlKSkgPyB0cnVlIDogZmFsc2U7XG4gICAgfSxcblxuICAgIHBhcnNlOiBmdW5jdGlvbiAodW5wYXJzZWQsIHBhcmVudCkge1xuICAgICAgICBjb25zdCB7IHZhbHVlLCB1bml0IH0gPSBmaW5kVmFsdWVBbmRVbml0KHVucGFyc2VkKTtcblxuICAgICAgICBpZiAodW5pdCAmJiB1bml0ICE9PSB1bml0KSB7XG4gICAgICAgICAgICBwYXJlbnQudW5pdCA9IHVuaXQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSxcblxuICAgIHNlcmlhbGl6ZTogKHBhcnNlZCwgcGFyZW50KSA9PiBwYXJzZWQgKyAocGFyZW50LnVuaXQgfHwgJycpXG59O1xuIl19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvdHJhbnNmb3JtZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRU8sSUFBTSxzQ0FBZSxVQUFDLElBQUQsRUFBTyxFQUFQLEVBQWM7QUFDdEMsUUFBTSxZQUFZLEtBQUssTUFBdkI7O0FBRUEsV0FBTyxVQUFDLEtBQUQsRUFBVztBQUNkLGFBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxTQUFwQixFQUErQixHQUEvQixFQUFvQztBQUNoQyxnQkFBSSxRQUFRLEtBQUssQ0FBTCxDQUFSLElBQW1CLE1BQU0sU0FBN0IsRUFBd0M7QUFDcEMsdUJBQU8sZ0NBQXFCLG9CQUFTLGdDQUFxQixLQUFyQixFQUE0QixLQUFLLElBQUksQ0FBVCxDQUE1QixFQUF5QyxLQUFLLENBQUwsQ0FBekMsQ0FBVCxFQUE0RCxDQUE1RCxFQUErRCxDQUEvRCxDQUFyQixFQUF3RixHQUFHLElBQUksQ0FBUCxDQUF4RixFQUFtRyxHQUFHLENBQUgsQ0FBbkcsQ0FBUDtBQUNIO0FBQ0o7QUFDSixLQU5EO0FBT0gsQ0FWTTs7QUFZQSxJQUFNLDBDQUFpQixVQUFDLENBQUQsRUFBSSxHQUFKLFFBQXdCO0FBQUEsUUFBYixNQUFhLFFBQWIsTUFBYTs7QUFDbEQsUUFBTSxVQUFXLE9BQU8sT0FBUixHQUFtQixPQUFPLE9BQVAsQ0FBZSxPQUFsQyxHQUE0QyxDQUE1RDtBQUNBLFFBQU0sVUFBVyxPQUFPLE9BQVIsR0FBbUIsT0FBTyxPQUFQLENBQWUsT0FBbEMsR0FBNEMsQ0FBNUQ7O0FBRUEsV0FBTyxxQ0FBMEI7QUFDN0IsV0FBRyxPQUQwQjtBQUU3QixXQUFHO0FBRjBCLEtBQTFCLEVBR0osT0FBTyxLQUFQLENBQWEsT0FIVCxFQUdrQixPQUFPLFFBQVAsQ0FBZ0IsT0FIbEMsRUFHMkMsR0FIM0MsQ0FBUDtBQUlILENBUk07Ozs7Ozs7OztBQWlCQSxJQUFNLHdCQUFRLFVBQUMsWUFBRCxFQUFrQjtBQUNuQyxRQUFNLGtCQUFrQixhQUFhLE1BQXJDO0FBQ0EsUUFBSSxJQUFJLENBQVI7Ozs7Ozs7O0FBUUEsV0FBTyxVQUFDLENBQUQsRUFBSSxHQUFKLEVBQVMsQ0FBVCxFQUFlO0FBQ2xCLGFBQUssSUFBSSxDQUFULEVBQVksSUFBSSxlQUFoQixFQUFpQyxHQUFqQyxFQUFzQztBQUNsQyxnQkFBSSxhQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsR0FBbkIsRUFBd0IsQ0FBeEIsQ0FBSjtBQUNIOztBQUVELGVBQU8sQ0FBUDtBQUNILEtBTkQ7QUFPSCxDQWpCTSIsImZpbGUiOiJ0cmFuc2Zvcm1lcnMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2p2YW5kZXJkb2VzL0NvZGUvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUsIGdldFZhbHVlRnJvbVByb2dyZXNzLCByZXN0cmljdCwgcG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZSB9IGZyb20gJy4uL2luYy9jYWxjJztcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZU1hcHBlciA9IChmcm9tLCB0bykgPT4ge1xuICAgIGNvbnN0IG1hcExlbmd0aCA9IGZyb20ubGVuZ3RoO1xuXG4gICAgcmV0dXJuICh2YWx1ZSkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IG1hcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPCBmcm9tW2ldIHx8IGkgPT09IG1hcExlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBnZXRWYWx1ZUZyb21Qcm9ncmVzcyhyZXN0cmljdChnZXRQcm9ncmVzc0Zyb21WYWx1ZSh2YWx1ZSwgZnJvbVtpIC0gMV0sIGZyb21baV0pLCAwLCAxKSwgdG9baSAtIDFdLCB0b1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGNpcmN1bGFyTW90aW9uID0gKHYsIGtleSwgeyB2YWx1ZXMgfSkgPT4ge1xuICAgIGNvbnN0IG9yaWdpblggPSAodmFsdWVzLm9yaWdpblgpID8gdmFsdWVzLm9yaWdpblguY3VycmVudCA6IDA7XG4gICAgY29uc3Qgb3JpZ2luWSA9ICh2YWx1ZXMub3JpZ2luWSkgPyB2YWx1ZXMub3JpZ2luWS5jdXJyZW50IDogMDtcblxuICAgIHJldHVybiBwb2ludEZyb21BbmdsZUFuZERpc3RhbmNlKHtcbiAgICAgICAgeDogb3JpZ2luWCxcbiAgICAgICAgeTogb3JpZ2luWSBcbiAgICB9LCB2YWx1ZXMuYW5nbGUuY3VycmVudCwgdmFsdWVzLmRpc3RhbmNlLmN1cnJlbnQpW2tleV07XG59O1xuXG4vKlxuICAgIENvbWJpbmUgdHJhbnNmb3JtZXJzIGludG8gb25lIGZ1bmN0aW9uIHRoYXQgY2FsbHMgZXZlcnlcbiAgICB0cmFuc2Zvcm1lciBpbiB0aGUgYXJyYXkgYW5kIHJldHVybnMgdGhlIHJlc3VsdFxuXG4gICAgQHBhcmFtIFthcnJheV1cbiAgICBAcmV0dXJuIFtmdW5jdGlvbl1cbiovXG5leHBvcnQgY29uc3QgY2hhaW4gPSAodHJhbnNmb3JtZXJzKSA9PiB7XG4gICAgY29uc3QgbnVtVHJhbnNmb3JtZXJzID0gdHJhbnNmb3JtZXJzLmxlbmd0aDtcbiAgICBsZXQgaSA9IDA7XG5cbiAgICAvKlxuICAgICAgICBAcGFyYW0gW251bWJlcl1cbiAgICAgICAgQHBhcmFtIFtzdHJpbmddXG4gICAgICAgIEBwYXJhbSBbQWN0aW9uXVxuICAgICAgICBAcmV0dXJuIFtudW1iZXJdXG4gICAgKi9cbiAgICByZXR1cm4gKHYsIGtleSwgYSkgPT4ge1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbnVtVHJhbnNmb3JtZXJzOyBpKyspIHtcbiAgICAgICAgICAgIHYgPSB0cmFuc2Zvcm1lcnNbaV0odiwga2V5LCBhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2O1xuICAgIH07XG59OyJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9kZXRlY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7QUFFQSxJQUFNLHVCQUF1QiwwQkFBaUIsTUFBOUM7O2tCQUVlLFVBQUMsS0FBRCxFQUFXO0FBQ3RCLFNBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxvQkFBcEIsRUFBMEMsR0FBMUMsRUFBK0M7QUFDM0MsWUFBTSxZQUFZLE1BQU0sMEJBQWlCLENBQWpCLENBQU4sQ0FBbEI7QUFDQSxZQUFJLHFCQUFTLFNBQVQsQ0FBSixFQUF5QjtBQUNyQixnQkFBSSxnQkFBVSxJQUFWLENBQWUsU0FBZixDQUFKLEVBQStCO0FBQzNCO0FBQ0gsYUFGRCxNQUVPLElBQUksa0JBQVksSUFBWixDQUFpQixTQUFqQixDQUFKLEVBQWlDO0FBQ3BDO0FBQ0gsYUFGTSxNQUVBLElBQUksZUFBUyxJQUFULENBQWMsU0FBZCxDQUFKLEVBQThCO0FBQ2pDO0FBQ0g7QUFDSjtBQUNKO0FBQ0osQyIsImZpbGUiOiJkZXRlY3QuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2p2YW5kZXJkb2VzL0NvZGUvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbG9yVHlwZSBmcm9tICcuLi92YWx1ZS10eXBlcy9jb2xvcic7XG5pbXBvcnQgY29tcGxleFR5cGUgZnJvbSAnLi4vdmFsdWUtdHlwZXMvY29tcGxleCc7XG5pbXBvcnQgdW5pdFR5cGUgZnJvbSAnLi4vdmFsdWUtdHlwZXMvdW5pdCc7XG5pbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gJy4uL2luYy91dGlscyc7XG5pbXBvcnQgTlVNRVJJQ0FMX1ZBTFVFUyBmcm9tICcuLi9pbmMvbnVtZXJpY2FsLXZhbHVlcyc7XG5cbmNvbnN0IE5VTV9OVU1FUklDQUxfVkFMVUVTID0gTlVNRVJJQ0FMX1ZBTFVFUy5sZW5ndGg7XG5cbmV4cG9ydCBkZWZhdWx0ICh2YWx1ZSkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTlVNX05VTUVSSUNBTF9WQUxVRVM7IGkrKykge1xuICAgICAgICBjb25zdCB2YWx1ZVByb3AgPSB2YWx1ZVtOVU1FUklDQUxfVkFMVUVTW2ldXTtcbiAgICAgICAgaWYgKGlzU3RyaW5nKHZhbHVlUHJvcCkpIHtcbiAgICAgICAgICAgIGlmIChjb2xvclR5cGUudGVzdCh2YWx1ZVByb3ApKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbG9yVHlwZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29tcGxleFR5cGUudGVzdCh2YWx1ZVByb3ApKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBsZXhUeXBlO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh1bml0VHlwZS50ZXN0KHZhbHVlUHJvcCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5pdFR5cGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59OyJdfQ==

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = ['current', 'from', 'to', 'velocity'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvbnVtZXJpY2FsLXZhbHVlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7a0JBQWUsQ0FBQyxTQUFELEVBQVksTUFBWixFQUFvQixJQUFwQixFQUEwQixVQUExQixDIiwiZmlsZSI6Im51bWVyaWNhbC12YWx1ZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2p2YW5kZXJkb2VzL0NvZGUvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgWydjdXJyZW50JywgJ2Zyb20nLCAndG8nLCAndmVsb2NpdHknXTsiXX0=

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvZGV0ZWN0LWFkYXB0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7a0JBRWUsVUFBQyxPQUFELEVBQWE7QUFDeEIsUUFBSSx5Q0FBSjs7O0FBR0EsUUFBSSxtQkFBbUIsV0FBbkIsSUFBa0MsUUFBUSxPQUFSLEtBQW9CLEtBQTFELEVBQWlFO0FBQzdEOzs7QUFHSCxLQUpELE1BSU8sSUFBSSxtQkFBbUIsVUFBdkIsRUFBbUM7QUFDdEMsZ0JBQUksUUFBUSxPQUFSLEtBQW9CLE1BQXhCLEVBQWdDO0FBQzVCO0FBQ0gsYUFGRCxNQUVPO0FBQ0g7QUFDSDtBQUNKOztBQUVELFdBQU8sZUFBUDtBQUNILEMiLCJmaWxlIjoiZGV0ZWN0LWFkYXB0ZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2p2YW5kZXJkb2VzL0NvZGUvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG9iamVjdEFkYXB0ZXIgZnJvbSAnLi4vYWRhcHRlci9vYmplY3QtYWRhcHRlcic7XG5pbXBvcnQgY3NzQWRhcHRlciBmcm9tICcuLi9hZGFwdGVyL2Nzcy1hZGFwdGVyJztcbmltcG9ydCBzdmdBZGFwdGVyIGZyb20gJy4uL2FkYXB0ZXIvc3ZnLWFkYXB0ZXInO1xuaW1wb3J0IHN2Z1BhdGhBZGFwdGVyIGZyb20gJy4uL2FkYXB0ZXIvc3ZnLXBhdGgtYWRhcHRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IChlbGVtZW50KSA9PiB7XG4gICAgbGV0IGRldGVjdGVkQWRhcHRlciA9IG9iamVjdEFkYXB0ZXI7XG5cbiAgICAvLyBJZiBIVE1MRWxlbWVudCBsb2FkIENTU1xuICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgZWxlbWVudC50YWdOYW1lID09PSAnc3ZnJykge1xuICAgICAgICBkZXRlY3RlZEFkYXB0ZXIgPSBjc3NBZGFwdGVyO1xuXG4gICAgLy8gT3IgU1ZHXG4gICAgfSBlbHNlIGlmIChlbGVtZW50IGluc3RhbmNlb2YgU1ZHRWxlbWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudC50YWdOYW1lID09PSAncGF0aCcpIHtcbiAgICAgICAgICAgIGRldGVjdGVkQWRhcHRlciA9IHN2Z1BhdGhBZGFwdGVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGV0ZWN0ZWRBZGFwdGVyID0gc3ZnQWRhcHRlcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkZXRlY3RlZEFkYXB0ZXI7XG59O1xuIl19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2Zsb3cvZ2VuZXJhdGUtYmxlbmQtY3VydmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUVBLElBQU0saUJBQWlCLEVBQXZCOztrQkFFZSxVQUFDLFNBQUQsRUFBWSxRQUFaLEVBQXNCLFNBQXRCLEVBQWlDLEdBQWpDLEVBQXlDO0FBQ3BELFFBQU0sV0FBVyxVQUFVLE1BQVYsQ0FBaUIsR0FBakIsQ0FBakI7O0FBRUEsUUFBSSxVQUFVLE9BQVYsS0FBc0IsU0FBdEIsSUFBbUMsQ0FBQyxRQUF4QyxFQUFrRDtBQUM5QztBQUNIOztBQUVELFFBQU0sVUFBVSxTQUFTLE1BQVQsQ0FBZ0IsR0FBaEIsQ0FBaEI7QUFDQSxRQUFNLG1CQUFtQixTQUFTLEtBQVQsR0FBaUIsU0FBUyxRQUFuRDtBQUNBLFFBQU0sa0JBQWtCLEtBQUssR0FBTCxDQUFTLG1CQUFtQixVQUFVLE9BQXRDLEVBQStDLFFBQVEsS0FBUixHQUFnQixRQUFRLFFBQXZFLENBQXhCO0FBQ0EsUUFBTSxxQkFBcUIsZ0JBQUssb0JBQVMsZ0NBQXFCLGVBQXJCLEVBQXNDLENBQXRDLEVBQXlDLFFBQVEsS0FBUixHQUFnQixRQUFRLFFBQWpFLENBQVQsRUFBcUYsQ0FBckYsRUFBd0YsQ0FBeEYsQ0FBTCxFQUFpRyxRQUFRLElBQXpHLEVBQStHLFFBQVEsRUFBdkgsRUFBMkgsUUFBUSxJQUFuSSxDQUEzQjtBQUNBLFFBQU0seUJBQXlCLFFBQVEsSUFBUixHQUFlLFNBQVMsT0FBdkQ7QUFDQSxRQUFNLHVCQUF1QixxQkFBcUIsU0FBUyxFQUEzRDtBQUNBLFFBQU0sa0JBQWtCLDJCQUEyQixvQkFBbkQ7O0FBRUEsUUFBTSxhQUFhLENBQUMsQ0FBQyxDQUFELEVBQUksU0FBUyxPQUFiLENBQUQsRUFBd0IsQ0FBQyxlQUFELEVBQWtCLGtCQUFsQixDQUF4QixDQUFuQjs7O0FBR0EsUUFBSSxlQUFKLEVBQXFCO0FBQ2pCLFlBQU0saUJBQWlCLGtCQUFrQixjQUF6QztBQUNBLFlBQUksVUFBVSxLQUFkO0FBQ0EsWUFBSSxVQUFVLEtBQWQ7O0FBRUEsYUFBSyxJQUFJLElBQUksQ0FBYixFQUFnQixLQUFLLGNBQXJCLEVBQXFDLEdBQXJDLEVBQTBDO0FBQ3RDLGdCQUFNLFdBQVcsSUFBSSxjQUFyQjtBQUNBLGdCQUFNLFlBQVksZ0JBQUssZ0NBQXFCLFVBQVUsT0FBVixHQUFvQixRQUF6QyxFQUFtRCxTQUFTLEtBQTVELEVBQW1FLFNBQVMsUUFBNUUsQ0FBTCxFQUE0RixTQUFTLElBQXJHLEVBQTJHLFNBQVMsRUFBcEgsRUFBd0gsU0FBUyxJQUFqSSxDQUFsQjtBQUNBLGdCQUFNLFdBQVcsZ0JBQUssZ0NBQXFCLFNBQVMsT0FBVCxHQUFtQixRQUF4QyxFQUFrRCxRQUFRLEtBQTFELEVBQWlFLFFBQVEsUUFBekUsQ0FBTCxFQUF5RixRQUFRLElBQWpHLEVBQXVHLFFBQVEsRUFBL0csRUFBbUgsUUFBUSxJQUEzSCxDQUFqQjs7QUFFQSxnQkFBSSxDQUFDLE9BQUQsS0FBYywwQkFBMEIsV0FBVyxTQUF0QyxJQUFxRCxDQUFDLHNCQUFELElBQTJCLFdBQVcsU0FBeEcsQ0FBSixFQUF5SDtBQUNySCwyQkFBVyxNQUFYLENBQWtCLENBQWxCLEVBQXFCLENBQXJCLEVBQXdCLENBQUMsUUFBRCxFQUFXLFFBQVgsQ0FBeEI7QUFDQSwwQkFBVSxJQUFWO0FBQ0g7O0FBRUQsZ0JBQUksWUFBYSwwQkFBMEIsV0FBVyxTQUFTLE9BQS9DLElBQTRELENBQUMsc0JBQUQsSUFBMkIsV0FBVyxTQUFTLE9BQXZILENBQUosRUFBc0k7QUFDbEksMkJBQVcsQ0FBWCxJQUFnQixDQUFDLFFBQUQsRUFBVyxRQUFYLENBQWhCO0FBQ0EsMEJBQVUsSUFBVjtBQUNIOztBQUVELGdCQUFJLE9BQUosRUFBYTtBQUNUO0FBQ0g7QUFDSjtBQUNKOztBQUVELFFBQUksV0FBVyxNQUFYLEtBQXNCLENBQTFCLEVBQTZCOztBQUV6QixlQUFPLFlBQU07QUFDVCxnQkFBTSxnQkFBZ0Isb0JBQVMsZ0NBQXFCLFNBQVMsT0FBOUIsRUFBdUMsV0FBVyxDQUFYLEVBQWMsQ0FBZCxDQUF2QyxFQUF5RCxXQUFXLENBQVgsRUFBYyxDQUFkLENBQXpELENBQVQsRUFBcUYsQ0FBckYsRUFBd0YsQ0FBeEYsQ0FBdEI7O0FBRUEsZ0JBQUksa0JBQWtCLENBQXRCLEVBQXlCO0FBQ3JCLDBCQUFVLFVBQVYsR0FBdUIsU0FBdkI7QUFDSDs7QUFFRCxtQkFBTyxnQkFBSyxhQUFMLEVBQW9CLFNBQVMsT0FBN0IsRUFBc0MsUUFBUSxPQUE5QyxFQUF1RCxRQUFRLElBQS9ELENBQVA7QUFDSCxTQVJEO0FBU0gsS0FYRCxNQVdPOztBQUVILGVBQU8sWUFBTTtBQUNULGdCQUFNLGdCQUFnQixvQkFBUyxnQ0FBcUIsU0FBUyxPQUE5QixFQUF1QyxXQUFXLENBQVgsRUFBYyxDQUFkLENBQXZDLEVBQXlELFdBQVcsQ0FBWCxFQUFjLENBQWQsQ0FBekQsQ0FBVCxFQUFxRixDQUFyRixFQUF3RixDQUF4RixDQUF0QjtBQUNBLGdCQUFNLEtBQUssZ0NBQXFCLGFBQXJCLEVBQW9DLFdBQVcsQ0FBWCxFQUFjLENBQWQsQ0FBcEMsRUFBc0QsV0FBVyxDQUFYLEVBQWMsQ0FBZCxDQUF0RCxDQUFYO0FBQ0EsZ0JBQU0sS0FBSyxnQ0FBcUIsYUFBckIsRUFBb0MsV0FBVyxDQUFYLEVBQWMsQ0FBZCxDQUFwQyxFQUFzRCxXQUFXLENBQVgsRUFBYyxDQUFkLENBQXRELENBQVg7O0FBRUEsZ0JBQUksa0JBQWtCLENBQXRCLEVBQXlCO0FBQ3JCLDBCQUFVLFVBQVYsR0FBdUIsU0FBdkI7QUFDQSx1QkFBTyxRQUFRLE9BQWY7QUFDSDs7QUFFRCxtQkFBTyxnQ0FBcUIsYUFBckIsRUFBb0MsRUFBcEMsRUFBd0MsRUFBeEMsQ0FBUDtBQUNILFNBWEQ7QUFZSDtBQUNKLEMiLCJmaWxlIjoiZ2VuZXJhdGUtYmxlbmQtY3VydmUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2p2YW5kZXJkb2VzL0NvZGUvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUsIGdldFZhbHVlRnJvbVByb2dyZXNzLCBlYXNlLCByZXN0cmljdCB9IGZyb20gJy4uLy4uL2luYy9jYWxjJztcblxuY29uc3QgQkxFTkRfQUNDVVJBQ1kgPSA2MDtcblxuZXhwb3J0IGRlZmF1bHQgKG91dEFjdGlvbiwgaW5BY3Rpb24sIGZsb3dWYWx1ZSwga2V5KSA9PiB7XG4gICAgY29uc3Qgb3V0VmFsdWUgPSBvdXRBY3Rpb24udmFsdWVzW2tleV07XG5cbiAgICBpZiAob3V0QWN0aW9uLmVsYXBzZWQgPT09IHVuZGVmaW5lZCB8fCAhb3V0VmFsdWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGluVmFsdWUgPSBpbkFjdGlvbi52YWx1ZXNba2V5XTtcbiAgICBjb25zdCBvdXRUb3RhbER1cmF0aW9uID0gb3V0VmFsdWUuZGVsYXkgKyBvdXRWYWx1ZS5kdXJhdGlvbjtcbiAgICBjb25zdCB0aW1lVW50aWxPdXRFbmQgPSBNYXRoLm1pbihvdXRUb3RhbER1cmF0aW9uIC0gb3V0QWN0aW9uLmVsYXBzZWQsIGluVmFsdWUuZGVsYXkgKyBpblZhbHVlLmR1cmF0aW9uKTtcbiAgICBjb25zdCBpblBvc2l0aW9uQXRPdXRFbmQgPSBlYXNlKHJlc3RyaWN0KGdldFByb2dyZXNzRnJvbVZhbHVlKHRpbWVVbnRpbE91dEVuZCwgMCwgaW5WYWx1ZS5kZWxheSArIGluVmFsdWUuZHVyYXRpb24pLCAwLCAxKSwgaW5WYWx1ZS5mcm9tLCBpblZhbHVlLnRvLCBpblZhbHVlLmVhc2UpO1xuICAgIGNvbnN0IGluQmlnZ2VyVGhhbk91dEF0U3RhcnQgPSBpblZhbHVlLmZyb20gPiBvdXRWYWx1ZS5jdXJyZW50O1xuICAgIGNvbnN0IGluQmlnZ2VyVGhhbk91dEF0RW5kID0gaW5Qb3NpdGlvbkF0T3V0RW5kID4gb3V0VmFsdWUudG87XG4gICAgY29uc3QgdHdlZW5zSW50ZXJzZWN0ID0gaW5CaWdnZXJUaGFuT3V0QXRTdGFydCAhPT0gaW5CaWdnZXJUaGFuT3V0QXRFbmQ7XG5cbiAgICBjb25zdCBibGVuZEN1cnZlID0gW1swLCBvdXRWYWx1ZS5jdXJyZW50XSwgW3RpbWVVbnRpbE91dEVuZCwgaW5Qb3NpdGlvbkF0T3V0RW5kXV07XG5cbiAgICAvLyBJZiB0d2VlbnMgaW50ZXJzZWN0LCByZXNvbHZlIHR3ZWVucyBhdCBhIHJlc29sdXRpb24gdG8gZmluZCBleGFjdGx5IHdoZXJlXG4gICAgaWYgKHR3ZWVuc0ludGVyc2VjdCkge1xuICAgICAgICBjb25zdCB0aW1lU3RlcFRvVGVzdCA9IHRpbWVVbnRpbE91dEVuZCAvIEJMRU5EX0FDQ1VSQUNZO1xuICAgICAgICBsZXQgZm91bmRQMSA9IGZhbHNlO1xuICAgICAgICBsZXQgZm91bmRQMiA9IGZhbHNlO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IEJMRU5EX0FDQ1VSQUNZOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVTdGVwID0gaSAqIHRpbWVTdGVwVG9UZXN0O1xuICAgICAgICAgICAgY29uc3Qgb3V0QXRUaW1lID0gZWFzZShnZXRQcm9ncmVzc0Zyb21WYWx1ZShvdXRBY3Rpb24uZWxhcHNlZCArIHRpbWVTdGVwLCBvdXRWYWx1ZS5kZWxheSwgb3V0VmFsdWUuZHVyYXRpb24pLCBvdXRWYWx1ZS5mcm9tLCBvdXRWYWx1ZS50bywgb3V0VmFsdWUuZWFzZSk7XG4gICAgICAgICAgICBjb25zdCBpbkF0VGltZSA9IGVhc2UoZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUoaW5BY3Rpb24uZWxhcHNlZCArIHRpbWVTdGVwLCBpblZhbHVlLmRlbGF5LCBpblZhbHVlLmR1cmF0aW9uKSwgaW5WYWx1ZS5mcm9tLCBpblZhbHVlLnRvLCBpblZhbHVlLmVhc2UpO1xuXG4gICAgICAgICAgICBpZiAoIWZvdW5kUDEgJiYgKChpbkJpZ2dlclRoYW5PdXRBdFN0YXJ0ICYmIGluQXRUaW1lIDwgb3V0QXRUaW1lKSB8fCAoIWluQmlnZ2VyVGhhbk91dEF0U3RhcnQgJiYgaW5BdFRpbWUgPiBvdXRBdFRpbWUpKSkge1xuICAgICAgICAgICAgICAgIGJsZW5kQ3VydmUuc3BsaWNlKDEsIDAsIFt0aW1lU3RlcCwgaW5BdFRpbWVdKTtcbiAgICAgICAgICAgICAgICBmb3VuZFAxID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGZvdW5kUDEgJiYgKChpbkJpZ2dlclRoYW5PdXRBdFN0YXJ0ICYmIGluQXRUaW1lIDwgb3V0VmFsdWUuY3VycmVudCkgfHwgKCFpbkJpZ2dlclRoYW5PdXRBdFN0YXJ0ICYmIGluQXRUaW1lID4gb3V0VmFsdWUuY3VycmVudCkpKSB7XG4gICAgICAgICAgICAgICAgYmxlbmRDdXJ2ZVsyXSA9IFt0aW1lU3RlcCwgaW5BdFRpbWVdO1xuICAgICAgICAgICAgICAgIGZvdW5kUDIgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZm91bmRQMikge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGJsZW5kQ3VydmUubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIC8vIFBhc3MgYmV0d2VlbiB0d2VlbnMgdXNpbmcgaW5jb21pbmcgZWFzaW5nIGlmIGp1c3QgdHdvIHBvaW50c1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYmxlbmRQcm9ncmVzcyA9IHJlc3RyaWN0KGdldFByb2dyZXNzRnJvbVZhbHVlKGluQWN0aW9uLmVsYXBzZWQsIGJsZW5kQ3VydmVbMF1bMF0sIGJsZW5kQ3VydmVbMV1bMF0pLCAwLCAxKTtcblxuICAgICAgICAgICAgaWYgKGJsZW5kUHJvZ3Jlc3MgPT09IDEpIHtcbiAgICAgICAgICAgICAgICBmbG93VmFsdWUuYmxlbmRDdXJ2ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGVhc2UoYmxlbmRQcm9ncmVzcywgb3V0VmFsdWUuY3VycmVudCwgaW5WYWx1ZS5jdXJyZW50LCBpblZhbHVlLmVhc2UpO1xuICAgICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFBhc3MgYmV0d2VlbiB0d2VlbnMgdXNpbmcgYmV6aWVyIGludGVycG9sYXRpb25cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJsZW5kUHJvZ3Jlc3MgPSByZXN0cmljdChnZXRQcm9ncmVzc0Zyb21WYWx1ZShpbkFjdGlvbi5lbGFwc2VkLCBibGVuZEN1cnZlWzBdWzBdLCBibGVuZEN1cnZlWzJdWzBdKSwgMCwgMSk7XG4gICAgICAgICAgICBjb25zdCBhUCA9IGdldFZhbHVlRnJvbVByb2dyZXNzKGJsZW5kUHJvZ3Jlc3MsIGJsZW5kQ3VydmVbMF1bMV0sIGJsZW5kQ3VydmVbMV1bMV0pO1xuICAgICAgICAgICAgY29uc3QgYlAgPSBnZXRWYWx1ZUZyb21Qcm9ncmVzcyhibGVuZFByb2dyZXNzLCBibGVuZEN1cnZlWzFdWzFdLCBibGVuZEN1cnZlWzJdWzFdKTtcblxuICAgICAgICAgICAgaWYgKGJsZW5kUHJvZ3Jlc3MgPT09IDEpIHtcbiAgICAgICAgICAgICAgICBmbG93VmFsdWUuYmxlbmRDdXJ2ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5WYWx1ZS5jdXJyZW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MoYmxlbmRQcm9ncmVzcywgYVAsIGJQKTtcbiAgICAgICAgfTtcbiAgICB9XG59O1xuIl19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbnB1dC9Qb2ludGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRXFCLE87OztBQUNqQixxQkFBWSxZQUFaLEVBQTBCLFNBQTFCLEVBQXFDLFlBQXJDLEVBQW1EO0FBQUE7O0FBQUEscURBQy9DLGtCQUFNLFlBQU4sQ0FEK0M7O0FBRS9DLGNBQUssWUFBTCxHQUFvQixZQUFwQjtBQUNBLGNBQUssU0FBTCxHQUFpQixTQUFqQjtBQUNKLGNBQUssV0FBTCxHQUFtQixNQUFLLE1BQUwsQ0FBWSxJQUFaLE9BQW5CO0FBSm1EO0FBS2xEOztzQkFFRCxNLG1CQUFPLEMsRUFBRztBQUNOLHlCQUFNLE1BQU4sWUFBYSxLQUFLLFlBQUwsQ0FBa0IsQ0FBbEIsQ0FBYjtBQUNBLFVBQUUsY0FBRjtBQUNILEs7O3NCQUVELEssb0JBQVE7QUFDSix5QkFBTSxLQUFOO0FBQ0EsaUJBQVMsZUFBVCxDQUF5QixnQkFBekIsQ0FBMEMsS0FBSyxTQUEvQyxFQUEwRCxLQUFLLFdBQS9EO0FBQ0gsSzs7c0JBRUQsSSxtQkFBTztBQUNILHlCQUFNLElBQU47QUFDQSxpQkFBUyxlQUFULENBQXlCLG1CQUF6QixDQUE2QyxLQUFLLFNBQWxELEVBQTZELEtBQUssV0FBbEU7QUFDSCxLOzs7OztrQkFyQmdCLE8iLCJmaWxlIjoiUG9pbnRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvanZhbmRlcmRvZXMvQ29kZS9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW5wdXQgZnJvbSAnLi9JbnB1dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvaW50ZXIgZXh0ZW5kcyBJbnB1dCB7XG4gICAgY29uc3RydWN0b3IoaW5pdGlhbFN0YXRlLCBtb3ZlRXZlbnQsIGV2ZW50VG9Qb2ludCkge1xuICAgICAgICBzdXBlcihpbml0aWFsU3RhdGUpO1xuICAgICAgICB0aGlzLmV2ZW50VG9Qb2ludCA9IGV2ZW50VG9Qb2ludDtcbiAgICAgICAgdGhpcy5tb3ZlRXZlbnQgPSBtb3ZlRXZlbnQ7XG5cdFx0XHRcdHRoaXMuYm91bmRMYXRlc3QgPSB0aGlzLmxhdGVzdC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGxhdGVzdChlKSB7XG4gICAgICAgIHN1cGVyLmxhdGVzdCh0aGlzLmV2ZW50VG9Qb2ludChlKSk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgc3VwZXIuc3RhcnQoKTtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5tb3ZlRXZlbnQsIHRoaXMuYm91bmRMYXRlc3QpO1xuICAgIH1cblxuICAgIHN0b3AoKSB7XG4gICAgICAgIHN1cGVyLnN0b3AoKTtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5tb3ZlRXZlbnQsIHRoaXMuYm91bmRMYXRlc3QpO1xuICAgIH1cbn1cbiJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90YXNrL2xvb3AuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztRQWlGZ0IsUSxHQUFBLFE7O0FBM0VoQjs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU0sZ0JBQWdCLENBQ2xCLEVBQUUsTUFBTSxjQUFSLEVBRGtCLEVBRWxCLEVBQUUsTUFBTSxVQUFSLEVBRmtCLEVBR2xCLEVBQUUsTUFBTSxZQUFSLEVBQXNCLGNBQWMsSUFBcEMsRUFIa0IsRUFJbEIsRUFBRSxNQUFNLGFBQVIsRUFBdUIsVUFBVSxJQUFqQyxFQUprQixFQUtsQixFQUFFLE1BQU0sVUFBUixFQUFvQixVQUFVLElBQTlCLEVBTGtCLEVBTWxCLEVBQUUsTUFBTSxjQUFSLEVBQXdCLFVBQVUsSUFBbEMsRUFOa0IsRUFPbEIsRUFBRSxNQUFNLFlBQVIsRUFQa0IsRUFRbEIsRUFBRSxNQUFNLFdBQVIsRUFSa0IsQ0FBdEIsQzs7Ozs7OztBQVVBLElBQU0sZUFBZSxjQUFjLE1BQW5DOzs7QUFHQSxJQUFJLFlBQVksS0FBaEI7Ozs7OztBQU1BLFNBQVMsT0FBVCxDQUFpQixVQUFqQixFQUE2QixPQUE3QixFQUFzQztBQUNsQyxRQUFNLFlBQVksa0JBQVEsWUFBUixFQUFsQjtBQUNBLFFBQU0sa0JBQWtCLFVBQVUsTUFBbEM7O0FBRUEsU0FBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLFlBQXBCLEVBQWtDLEdBQWxDLEVBQXVDO0FBQ25DLFlBQU0sT0FBTyxjQUFjLENBQWQsQ0FBYjs7QUFFQSxhQUFLLElBQUksS0FBSyxDQUFkLEVBQWlCLEtBQUssZUFBdEIsRUFBdUMsSUFBdkMsRUFBNkM7QUFDekMsZ0JBQU0sT0FBTyxrQkFBUSxXQUFSLENBQW9CLFVBQVUsRUFBVixDQUFwQixDQUFiO0FBQ0EsZ0JBQUksU0FBUyxLQUFiOzs7QUFHQSxnQkFBSSxRQUFRLEtBQUssS0FBSyxJQUFWLENBQVIsS0FBNEIsQ0FBQyxLQUFLLFFBQU4sSUFBbUIsS0FBSyxRQUFMLElBQWlCLEtBQUssZ0JBQUwsS0FBMEIsSUFBMUYsQ0FBSixFQUFzRztBQUNsRyx5QkFBUyxLQUFLLEtBQUssSUFBVixFQUFnQixJQUFoQixDQUFxQixJQUFyQixFQUEyQixJQUEzQixFQUFpQyxVQUFqQyxFQUE2QyxPQUE3QyxDQUFUO0FBQ0g7OztBQUdELGdCQUFJLEtBQUssWUFBVCxFQUF1QjtBQUNuQixxQkFBSyxnQkFBTCxHQUF5QixLQUFLLEtBQUssSUFBVixLQUFtQixXQUFXLElBQS9CLEdBQXVDLEtBQXZDLEdBQStDLElBQXZFO0FBQ0g7QUFDSjtBQUNKOztBQUVELFdBQU8sa0JBQVEsNEJBQVIsRUFBUDtBQUNIOzs7QUFHRCxTQUFTLEtBQVQsQ0FBZSxVQUFmLEVBQTJCO0FBQ3ZCLG9CQUFNLE1BQU4sQ0FBYSxVQUFiO0FBQ0EsZ0JBQVksUUFBUSxVQUFSLEVBQW9CLGdCQUFNLFVBQU4sRUFBcEIsQ0FBWjs7QUFFQSxRQUFJLFNBQUosRUFBZTtBQUNYLDRCQUFLLEtBQUw7QUFDSDtBQUNKOzs7QUFHRCxTQUFTLEtBQVQsR0FBaUI7QUFDYixRQUFJLENBQUMsU0FBTCxFQUFnQjtBQUNaLHdCQUFNLEtBQU47QUFDQSxvQkFBWSxJQUFaO0FBQ0EsNEJBQUssS0FBTDtBQUNIO0FBQ0o7OztBQUdNLElBQU0sZ0NBQVksa0JBQVEsU0FBMUI7Ozs7OztBQU1BLFNBQVMsUUFBVCxDQUFrQixFQUFsQixFQUFzQixJQUF0QixFQUE0QjtBQUMvQixzQkFBUSxRQUFSLENBQWlCLEVBQWpCLEVBQXFCLElBQXJCOztBQUVBLFFBQUksQ0FBQyxTQUFMLEVBQWdCO0FBQ1o7QUFDSDtBQUNKOzs7OztBQUtNLElBQU0sa0NBQWEsa0JBQVEsVUFBM0IiLCJmaWxlIjoibG9vcC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvanZhbmRlcmRvZXMvQ29kZS9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICAgIENvcmUgcmVuZGVyIGxvb3BcblxuICAgIFNvbWUgZGVjaWNpc29ucyBoZXJlIGhhdmUgYmVlbiB0YWtlbiBpbiB0aGUgbmFtZSBvZiBwZXJmb3JtYW5jZS4gQWxsIGhhaWwgcGVyZm9ybWFuY2UuXG4gICAgKEl0IHR1cm5zIG91dCBtaWNyb29wdGltaXNhdGlvbnMgZG8gbWF0dGVyIHdoZW4geW91IGhhdmUgMTZtcylcbiovXG5pbXBvcnQgdGltZXIgZnJvbSAnLi90aW1lcic7XG5pbXBvcnQgdGljayBmcm9tICcuL3RpY2snO1xuaW1wb3J0IG1hbmFnZXIgZnJvbSAnLi9tYW5hZ2VyJztcblxuY29uc3QgdGFza1N0ZXBPcmRlciA9IFtcbiAgICB7IG5hbWU6ICdvbkZyYW1lU3RhcnQnIH0sXG4gICAgeyBuYW1lOiAnb25VcGRhdGUnIH0sXG4gICAgeyBuYW1lOiAnd2lsbFJlbmRlcicsIGRlY2lkZVJlbmRlcjogdHJ1ZSB9LFxuICAgIHsgbmFtZTogJ29uUHJlUmVuZGVyJywgaXNSZW5kZXI6IHRydWUgfSxcbiAgICB7IG5hbWU6ICdvblJlbmRlcicsIGlzUmVuZGVyOiB0cnVlIH0sXG4gICAgeyBuYW1lOiAnb25Qb3N0UmVuZGVyJywgaXNSZW5kZXI6IHRydWUgfSxcbiAgICB7IG5hbWU6ICdvbkZyYW1lRW5kJyB9LFxuICAgIHsgbmFtZTogJ29uQ2xlYW51cCcgfVxuXTtcbmNvbnN0IG51bVRhc2tTdGVwcyA9IHRhc2tTdGVwT3JkZXIubGVuZ3RoO1xuXG4vLyBbYm9vbGVhbl06IElzIGxvb3AgcnVubmluZz9cbmxldCBpc1J1bm5pbmcgPSBmYWxzZTtcblxuLypcbiAgICBbdGltZXN0YW1wXTogRnJhbWUgdGltZXN0YW1wXG4gICAgW2ludF06IFRpbWUgc2luY2UgbGFzdCBmcmFtZVxuKi9cbmZ1bmN0aW9uIGZpcmVBbGwoZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgIGNvbnN0IGFjdGl2ZUlkcyA9IG1hbmFnZXIuZ2V0QWN0aXZlSWRzKCk7XG4gICAgY29uc3QgYWN0aXZlVGFza0NvdW50ID0gYWN0aXZlSWRzLmxlbmd0aDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtVGFza1N0ZXBzOyBpKyspIHtcbiAgICAgICAgY29uc3Qgc3RlcCA9IHRhc2tTdGVwT3JkZXJbaV07XG5cbiAgICAgICAgZm9yIChsZXQgaTIgPSAwOyBpMiA8IGFjdGl2ZVRhc2tDb3VudDsgaTIrKykge1xuICAgICAgICAgICAgY29uc3QgdGFzayA9IG1hbmFnZXIuYWN0aXZlVGFza3NbYWN0aXZlSWRzW2kyXV07XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoaXMgdGFzayBoYXMgdGhpcyBzdGVwLCBvciBpZiBpdCdzIGEgcmVuZGVyIHN0ZXAgdGhhdCB3ZSdyZSByZW5kZXJpbmcgdGhpcyBmcmFtZVxuICAgICAgICAgICAgaWYgKHRhc2sgJiYgdGFza1tzdGVwLm5hbWVdICYmICghc3RlcC5pc1JlbmRlciB8fCAoc3RlcC5pc1JlbmRlciAmJiB0YXNrLl9yZW5kZXJUaGlzRnJhbWUgPT09IHRydWUpKSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRhc2tbc3RlcC5uYW1lXS5jYWxsKHRhc2ssIHRhc2ssIGZyYW1lU3RhbXAsIGVsYXBzZWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiB0aGlzIGlzIGEgZGVjaWRlIHJlbmRlciBzdGVwIGFuZCBpdCByZXR1cm5zIGBmYWxzZWAsIHNldCB3aWxsUmVuZGVyIHRvIGZhbHNlXG4gICAgICAgICAgICBpZiAoc3RlcC5kZWNpZGVSZW5kZXIpIHtcbiAgICAgICAgICAgICAgICB0YXNrLl9yZW5kZXJUaGlzRnJhbWUgPSAodGFza1tzdGVwLm5hbWVdICYmIHJlc3VsdCAhPT0gdHJ1ZSkgPyBmYWxzZSA6IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWFuYWdlci5nZXROb25CYWNrZ3JvdW5kUnVubmluZ0NvdW50KCk7XG59XG5cbi8vIEZ1bmN0aW9uIHRvIGZpcmUgZXZlcnkgZnJhbWVcbmZ1bmN0aW9uIGZyYW1lKGZyYW1lU3RhbXApIHtcbiAgICB0aW1lci51cGRhdGUoZnJhbWVTdGFtcCk7XG4gICAgaXNSdW5uaW5nID0gZmlyZUFsbChmcmFtZVN0YW1wLCB0aW1lci5nZXRFbGFwc2VkKCkpO1xuXG4gICAgaWYgKGlzUnVubmluZykge1xuICAgICAgICB0aWNrKGZyYW1lKTtcbiAgICB9XG59XG5cbi8vIFN0YXJ0IGxvb3BcbmZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgIGlmICghaXNSdW5uaW5nKSB7XG4gICAgICAgIHRpbWVyLnN0YXJ0KCk7XG4gICAgICAgIGlzUnVubmluZyA9IHRydWU7XG4gICAgICAgIHRpY2soZnJhbWUpO1xuICAgIH1cbn1cblxuLy8gRXhwb3J0c1xuZXhwb3J0IGNvbnN0IGdldFRhc2tJZCA9IG1hbmFnZXIuZ2V0VGFza0lkO1xuXG4vKlxuICAgIFtpbnRdOiB0YXNrIElEIHRvIGFjdGl2YXRlXG4gICAgW3Rhc2tdOiB0YXNrIHRvIGFjdGl2YXRlXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIGFjdGl2YXRlKGlkLCB0YXNrKSB7XG4gICAgbWFuYWdlci5hY3RpdmF0ZShpZCwgdGFzayk7XG5cbiAgICBpZiAoIWlzUnVubmluZykge1xuICAgICAgICBzdGFydCgpO1xuICAgIH1cbn1cblxuLypcbiAgICBbaW50XTogdGFzayBJRCB0byBkZWFjdGl2YXRlXG4qL1xuZXhwb3J0IGNvbnN0IGRlYWN0aXZhdGUgPSBtYW5hZ2VyLmRlYWN0aXZhdGU7Il19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2Nzcy9zdGF0ZS1tYXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsSUFBTSxZQUFZLFdBQWxCOztrQkFFZTtBQUNYLE9BQUcsWUFBWSxHQURKO0FBRVgsT0FBRyxZQUFZLEdBRko7QUFHWCxPQUFHLFlBQVk7QUFISixDIiwiZmlsZSI6InN0YXRlLW1hcC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvanZhbmRlcmRvZXMvQ29kZS9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBUUkFOU0xBVEUgPSAndHJhbnNsYXRlJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHg6IFRSQU5TTEFURSArICdYJyxcbiAgICB5OiBUUkFOU0xBVEUgKyAnWScsXG4gICAgejogVFJBTlNMQVRFICsgJ1onXG59OyJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2Nzcy92YWx1ZS10eXBlLW1hcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7a0JBRWU7O0FBRVgsMEJBRlc7QUFHWCxvQ0FIVztBQUlYLGlDQUpXO0FBS1gseUJBTFc7QUFNWCwyQkFOVzs7O0FBU1gsZ0NBVFc7QUFVWCxtQ0FWVztBQVdYLHFDQVhXO0FBWVgsc0NBWlc7QUFhWCxvQ0FiVztBQWNYLDhCQWRXOzs7QUFpQlgsdUJBakJXO0FBa0JYLHdCQWxCVzs7O0FBcUJYLGdDQXJCVztBQXNCWCwrQkF0Qlc7OztBQXlCWCwyQkF6Qlc7QUEwQlgsNEJBMUJXO0FBMkJYLDRCQTNCVztBQTRCWCw0QkE1Qlc7QUE2QlgsMEJBN0JXO0FBOEJYLDJCQTlCVztBQStCWCwyQkEvQlc7QUFnQ1gsMkJBaENXO0FBaUNYLDBCQWpDVztBQWtDWCwwQkFsQ1c7QUFtQ1gsMEJBbkNXO0FBb0NYLDRCQXBDVztBQXFDWCw0QkFyQ1c7QUFzQ1gsNEJBdENXO0FBdUNYLDZCQXZDVztBQXdDWDtBQXhDVyxDIiwiZmlsZSI6InZhbHVlLXR5cGUtbWFwLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qdmFuZGVyZG9lcy9Db2RlL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhbmdsZSBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9hbmdsZSc7XG5pbXBvcnQgYWxwaGEgZnJvbSAnLi4vLi4vdmFsdWUtdHlwZXMvYWxwaGEnO1xuaW1wb3J0IGNvbG9yIGZyb20gJy4uLy4uL3ZhbHVlLXR5cGVzL2NvbG9yJztcbmltcG9ydCBzY2FsZSBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9zY2FsZSc7XG5pbXBvcnQgc2hhZG93IGZyb20gJy4uLy4uL3ZhbHVlLXR5cGVzL3NoYWRvdyc7XG5pbXBvcnQgcHggZnJvbSAnLi4vLi4vdmFsdWUtdHlwZXMvcHgnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgLy8gQ29sb3IgcHJvcHNcbiAgICBjb2xvcjogY29sb3IsXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcixcbiAgICBvdXRsaW5lQ29sb3I6IGNvbG9yLFxuICAgIGZpbGw6IGNvbG9yLFxuICAgIHN0cm9rZTogY29sb3IsXG5cbiAgICAvLyBCb3JkZXIgcHJvcHNcbiAgICBib3JkZXJDb2xvcjogY29sb3IsXG4gICAgYm9yZGVyVG9wQ29sb3I6IGNvbG9yLFxuICAgIGJvcmRlclJpZ2h0Q29sb3I6IGNvbG9yLFxuICAgIGJvcmRlckJvdHRvbUNvbG9yOiBjb2xvcixcbiAgICBib3JkZXJMZWZ0Q29sb3I6IGNvbG9yLFxuICAgIGJvcmRlclJhZGl1czogcHgsXG5cbiAgICAvLyBQb3NpdGlvbmluZ1xuICAgIHdpZHRoOiBweCxcbiAgICBoZWlnaHQ6IHB4LFxuXG4gICAgLy8gU2hhZG93c1xuICAgIHRleHRTaGFkb3c6IHNoYWRvdyxcbiAgICBib3hTaGFkb3c6IHNoYWRvdywgICBcblxuICAgIC8vIFRyYW5zZm9ybSBwcm9wZXJ0aWVzXG4gICAgcm90YXRlOiBhbmdsZSxcbiAgICByb3RhdGVYOiBhbmdsZSxcbiAgICByb3RhdGVZOiBhbmdsZSxcbiAgICByb3RhdGVaOiBhbmdsZSxcbiAgICBzY2FsZTogc2NhbGUsXG4gICAgc2NhbGVYOiBzY2FsZSxcbiAgICBzY2FsZVk6IHNjYWxlLFxuICAgIHNjYWxlWjogc2NhbGUsXG4gICAgc2tld1g6IGFuZ2xlLFxuICAgIHNrZXdZOiBhbmdsZSxcbiAgICBkaXN0YW5jZTogcHgsXG4gICAgdHJhbnNsYXRlWDogcHgsXG4gICAgdHJhbnNsYXRlWTogcHgsXG4gICAgdHJhbnNsYXRlWjogcHgsXG4gICAgcGVyc3BlY3RpdmU6IHB4LFxuICAgIG9wYWNpdHk6IGFscGhhXG59OyJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2Nzcy9idWlsZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUEsSUFBTSxjQUFjLFlBQXBCOztrQkFFZSxVQUFDLEtBQUQsRUFBUSwyQkFBUixFQUF3QztBQUNuRCxRQUFJLGlCQUFpQixFQUFyQjtBQUNBLFFBQUksa0JBQWtCLEVBQXRCO0FBQ0EsUUFBSSxnQkFBZ0IsS0FBcEI7O0FBRUEsU0FBSyxJQUFJLEdBQVQsSUFBZ0IsS0FBaEIsRUFBdUI7QUFDbkIsWUFBSSxNQUFNLGNBQU4sQ0FBcUIsR0FBckIsQ0FBSixFQUErQjtBQUMzQixnQkFBTSxRQUFRLE1BQU0sR0FBTixDQUFkOztBQUVBLGdCQUFJLHlCQUFlLEdBQWYsQ0FBSixFQUF5QjtBQUNyQixtQ0FBbUIsTUFBTSxHQUFOLEdBQVksS0FBWixHQUFvQixJQUF2QztBQUNBLGdDQUFpQixRQUFRLFdBQVQsR0FBd0IsSUFBeEIsR0FBK0IsYUFBL0M7QUFFSCxhQUpELE1BSU87QUFDSCxrQ0FBa0IsTUFBTSx3QkFBUyx3QkFBWSxHQUFaLENBQVQsQ0FBTixHQUFtQyxHQUFuQyxHQUF5QyxLQUEzRDtBQUNIO0FBQ0o7QUFDSjs7QUFFRCxRQUFJLG9CQUFvQixFQUF4QixFQUE0QjtBQUN4QixZQUFJLENBQUMsYUFBRCxJQUFrQixDQUFDLDJCQUF2QixFQUFvRDtBQUNoRCwrQkFBbUIsY0FBYyxPQUFqQztBQUNIOztBQUVELDBCQUFrQixNQUFNLHdCQUFTLFdBQVQsQ0FBTixHQUE4QixHQUE5QixHQUFvQyxlQUF0RDtBQUNIOztBQUVELFdBQU8sY0FBUDtBQUNILEMiLCJmaWxlIjoiYnVpbGQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2p2YW5kZXJkb2VzL0NvZGUvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRyYW5zZm9ybVByb3BzIGZyb20gJy4vdHJhbnNmb3JtLXByb3BzJztcbmltcG9ydCBwcmVmaXhlciBmcm9tICcuL3ByZWZpeGVyJztcbmltcG9ydCB7IGNhbWVsVG9EYXNoIH0gZnJvbSAnLi4vLi4vaW5jL3V0aWxzJztcblxuY29uc3QgVFJBTlNMQVRFX1ogPSAndHJhbnNsYXRlWic7XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSwgZGlzYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uKSA9PiB7XG4gICAgbGV0IHByb3BlcnR5U3RyaW5nID0gJyc7XG4gICAgbGV0IHRyYW5zZm9ybVN0cmluZyA9ICcnO1xuICAgIGxldCB0cmFuc2Zvcm1IYXNaID0gZmFsc2U7XG5cbiAgICBmb3IgKGxldCBrZXkgaW4gc3RhdGUpIHtcbiAgICAgICAgaWYgKHN0YXRlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gc3RhdGVba2V5XTtcblxuICAgICAgICAgICAgaWYgKHRyYW5zZm9ybVByb3BzW2tleV0pIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1TdHJpbmcgKz0ga2V5ICsgJygnICsgdmFsdWUgKyAnKSAnO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybUhhc1ogPSAoa2V5ID09PSBUUkFOU0xBVEVfWikgPyB0cnVlIDogdHJhbnNmb3JtSGFzWjtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eVN0cmluZyArPSAnOycgKyBwcmVmaXhlcihjYW1lbFRvRGFzaChrZXkpKSArICc6JyArIHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRyYW5zZm9ybVN0cmluZyAhPT0gJycpIHtcbiAgICAgICAgaWYgKCF0cmFuc2Zvcm1IYXNaICYmICFkaXNhYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybVN0cmluZyArPSBUUkFOU0xBVEVfWiArICcoMHB4KSc7XG4gICAgICAgIH1cblxuICAgICAgICBwcm9wZXJ0eVN0cmluZyArPSAnOycgKyBwcmVmaXhlcigndHJhbnNmb3JtJykgKyAnOicgKyB0cmFuc2Zvcm1TdHJpbmc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5U3RyaW5nO1xufTsiXX0=

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2Nzcy9wcmVmaXhlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxJQUFNLFFBQVEsRUFBZDtBQUNBLElBQU0sV0FBVyxDQUFDLFFBQUQsRUFBVSxLQUFWLEVBQWdCLEdBQWhCLEVBQW9CLElBQXBCLEVBQTBCLEVBQTFCLENBQWpCO0FBQ0EsSUFBTSxjQUFjLFNBQVMsTUFBN0I7QUFDQSxJQUFJLG9CQUFKOzs7Ozs7OztBQVFBLElBQU0sYUFBYSxVQUFDLEdBQUQsRUFBUztBQUN4QixrQkFBYyxlQUFlLFNBQVMsYUFBVCxDQUF1QixLQUF2QixDQUE3Qjs7QUFFQSxRQUFJLE1BQU0sR0FBTixNQUFlLEtBQW5CLEVBQTBCO0FBQ3RCLGVBQU8sS0FBUDtBQUNILEtBRkQsTUFFTztBQUNILGNBQU0sR0FBTixJQUFhLEtBQWI7QUFDSDs7QUFFRCxTQUFLLElBQUksSUFBSSxDQUFiLEVBQWdCLElBQUksV0FBcEIsRUFBaUMsR0FBakMsRUFBc0M7QUFDbEMsWUFBSSxTQUFTLFNBQVMsQ0FBVCxDQUFiO1lBQ0ksV0FBWSxXQUFXLEVBQVosR0FBa0IsR0FBbEIsR0FBd0IsU0FBUyxJQUFJLE1BQUosQ0FBVyxDQUFYLEVBQWMsV0FBZCxFQUFULEdBQXVDLElBQUksS0FBSixDQUFVLENBQVYsQ0FEOUU7O0FBR0EsWUFBSSxZQUFZLFlBQVksS0FBNUIsRUFBbUM7QUFDL0Isa0JBQU0sR0FBTixJQUFhLFFBQWI7QUFDSDtBQUNKOztBQUVELFdBQU8sTUFBTSxHQUFOLENBQVA7QUFDSCxDQW5CRDs7a0JBcUJlLFVBQUMsR0FBRDtBQUFBLFdBQVMsTUFBTSxHQUFOLEtBQWMsV0FBVyxHQUFYLENBQXZCO0FBQUEsQyIsImZpbGUiOiJwcmVmaXhlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvanZhbmRlcmRvZXMvQ29kZS9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjYWNoZSA9IHt9O1xuY29uc3QgcHJlZml4ZXMgPSBbJ1dlYmtpdCcsJ01veicsJ08nLCdtcycsICcnXTtcbmNvbnN0IG51bVByZWZpeGVzID0gcHJlZml4ZXMubGVuZ3RoO1xubGV0IHRlc3RFbGVtZW50O1xuXG4vKlxuICAgIFRlc3Qgc3R5bGUgcHJvcGVydHkgZm9yIHByZWZpeGVkIHZlcnNpb25cbiAgICBcbiAgICBAcGFyYW0gW3N0cmluZ106IFN0eWxlIHByb3BlcnR5XG4gICAgQHJldHVybiBbc3RyaW5nXTogQ2FjaGVkIHByb3BlcnR5IG5hbWVcbiovXG5jb25zdCB0ZXN0UHJlZml4ID0gKGtleSkgPT4ge1xuICAgIHRlc3RFbGVtZW50ID0gdGVzdEVsZW1lbnQgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBpZiAoY2FjaGVba2V5XSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNhY2hlW2tleV0gPSBmYWxzZTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVByZWZpeGVzOyBpKyspIHtcbiAgICAgICAgdmFyIHByZWZpeCA9IHByZWZpeGVzW2ldLFxuICAgICAgICAgICAgcHJlZml4ZWQgPSAocHJlZml4ID09PSAnJykgPyBrZXkgOiBwcmVmaXggKyBrZXkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBrZXkuc2xpY2UoMSk7XG5cbiAgICAgICAgaWYgKHByZWZpeGVkIGluIHRlc3RFbGVtZW50LnN0eWxlKSB7XG4gICAgICAgICAgICBjYWNoZVtrZXldID0gcHJlZml4ZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGNhY2hlW2tleV07XG59O1xuXG5leHBvcnQgZGVmYXVsdCAoa2V5KSA9PiBjYWNoZVtrZXldIHx8IHRlc3RQcmVmaXgoa2V5KTsiXX0=

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2Nzcy90cmFuc2Zvcm0tcHJvcHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUVBLElBQUksaUJBQWlCLEVBQXJCOztBQUVBLElBQU0sUUFBUSxPQUFkO0FBQ0EsSUFBTSxTQUFTLFFBQWY7QUFDQSxJQUFNLHdCQUF3QixzQkFBOUI7QUFDQSxJQUFNLFFBQVEsQ0FBQyxXQUFELEVBQWMsS0FBZCxFQUFxQixNQUFyQixFQUE2QixNQUE3QixFQUFxQyxxQkFBckMsQ0FBZDs7QUFFQSxlQUFlLE1BQWYsSUFBeUIsZUFBZSxLQUFmLElBQXdCLGVBQWUscUJBQWYsSUFBd0MsSUFBekY7O0FBRUEsTUFBTSxPQUFOLENBQWMsVUFBQyxJQUFEO0FBQUEsU0FBVSxpQkFBSyxPQUFMLENBQWEsVUFBQyxJQUFEO0FBQUEsV0FBVSxlQUFlLE9BQU8sSUFBdEIsSUFBOEIsSUFBeEM7QUFBQSxHQUFiLENBQVY7QUFBQSxDQUFkOztrQkFFZSxjIiwiZmlsZSI6InRyYW5zZm9ybS1wcm9wcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvanZhbmRlcmRvZXMvQ29kZS9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBheGVzIH0gZnJvbSAnLi4vLi4vdmFsdWUtdHlwZXMvc2V0dGluZ3MvZGljdGlvbmFyeSc7XG5cbmxldCB0cmFuc2Zvcm1Qcm9wcyA9IHt9O1xuXG5jb25zdCBTQ0FMRSA9ICdzY2FsZSc7XG5jb25zdCBST1RBVEUgPSAncm90YXRlJztcbmNvbnN0IFRSQU5TRk9STV9QRVJTUEVDVElWRSA9ICd0cmFuc2Zvcm1QZXJzcGVjdGl2ZSc7XG5jb25zdCBURVJNUyA9IFsndHJhbnNsYXRlJywgU0NBTEUsIFJPVEFURSwgJ3NrZXcnLCBUUkFOU0ZPUk1fUEVSU1BFQ1RJVkVdO1xuXG50cmFuc2Zvcm1Qcm9wc1tST1RBVEVdID0gdHJhbnNmb3JtUHJvcHNbU0NBTEVdID0gdHJhbnNmb3JtUHJvcHNbVFJBTlNGT1JNX1BFUlNQRUNUSVZFXSA9IHRydWU7XG5cblRFUk1TLmZvckVhY2goKHRlcm0pID0+IGF4ZXMuZm9yRWFjaCgoYXhpcykgPT4gdHJhbnNmb3JtUHJvcHNbdGVybSArIGF4aXNdID0gdHJ1ZSkpO1xuXG5leHBvcnQgZGVmYXVsdCB0cmFuc2Zvcm1Qcm9wczsiXX0=

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL3N2Zy92YWx1ZS10eXBlLW1hcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztrQkFFZTtBQUNYLHlCQURXO0FBRVgsMkJBRlc7QUFHWCwwQkFIVztBQUlYLDJCQUpXO0FBS1gsMkJBTFc7QUFNWCx3QkFOVztBQU9YLDZCQVBXO0FBUVgsNEJBUlc7QUFTWCxnQ0FUVztBQVVYO0FBVlcsQyIsImZpbGUiOiJ2YWx1ZS10eXBlLW1hcC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvanZhbmRlcmRvZXMvQ29kZS9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYWxwaGEgZnJvbSAnLi4vLi4vdmFsdWUtdHlwZXMvYWxwaGEnO1xuaW1wb3J0IGNvbG9yIGZyb20gJy4uLy4uL3ZhbHVlLXR5cGVzL2NvbG9yJztcbmltcG9ydCBjb21wbGV4IGZyb20gJy4uLy4uL3ZhbHVlLXR5cGVzL2NvbXBsZXgnO1xuaW1wb3J0IHNjYWxlIGZyb20gJy4uLy4uL3ZhbHVlLXR5cGVzL3NjYWxlJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGZpbGw6IGNvbG9yLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc2NhbGU6IHNjYWxlLFxuICAgIHNjYWxlWDogc2NhbGUsXG4gICAgc2NhbGVZOiBzY2FsZSxcbiAgICBkOiBjb21wbGV4LFxuICAgIHBvaW50czogY29tcGxleCxcbiAgICBvcGFjaXR5OiBhbHBoYSxcbiAgICBmaWxsT3BhY2l0eTogYWxwaGEsXG4gICAgc3Ryb2tlT3BhY2l0eTogYWxwaGFcbn07Il19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL3N2Zy9idWlsZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7a0JBS3dCLEs7O0FBTHhCOztBQUNBOzs7Ozs7QUFFQSxJQUFNLGdCQUFnQixNQUF0Qjs7QUFFZSxTQUFTLEtBQVQsQ0FBZSxLQUFmLEVBQXNCLElBQXRCLEVBQTRCO0FBQ3ZDLFFBQUksZUFBZSxLQUFuQjtBQUNBLFFBQU0sUUFBUSxFQUFkO0FBQ0EsUUFBTSxRQUFRLE1BQU0sS0FBTixLQUFnQixTQUFoQixHQUE0QixNQUFNLEtBQU4sSUFBZSxhQUEzQyxHQUEyRCxNQUFNLE1BQU4sSUFBZ0IsQ0FBekY7QUFDQSxRQUFNLFNBQVMsTUFBTSxNQUFOLEtBQWlCLFNBQWpCLEdBQTZCLE1BQU0sTUFBTixJQUFnQixhQUE3QyxHQUE2RCxTQUFTLENBQXJGO0FBQ0EsUUFBTSxtQkFBbUIsS0FBSyxLQUFMLElBQWMsQ0FBQyxNQUFNLE9BQU4sSUFBaUIsRUFBbEIsSUFBd0IsR0FBdEMsSUFBNkMsS0FBSyxDQUEzRTtBQUNBLFFBQU0sbUJBQW1CLEtBQUssTUFBTCxJQUFlLENBQUMsTUFBTSxPQUFOLElBQWlCLEVBQWxCLElBQXdCLEdBQXZDLElBQThDLEtBQUssQ0FBNUU7QUFDQSxRQUFNLGtCQUFrQixDQUFFLGdCQUFGLElBQXNCLFFBQVEsQ0FBOUIsQ0FBeEI7QUFDQSxRQUFNLGtCQUFrQixDQUFFLGdCQUFGLElBQXNCLFNBQVMsQ0FBL0IsQ0FBeEI7QUFDQSxRQUFNLGdCQUFnQixtQkFBbUIsS0FBekM7QUFDQSxRQUFNLGdCQUFnQixtQkFBbUIsTUFBekM7QUFDQSxRQUFNLFlBQVk7QUFDZCxrQ0FBd0IsTUFBTSxVQUE5QixVQUE2QyxNQUFNLFVBQW5ELE9BRGM7QUFFZCw4QkFBb0IsZUFBcEIsVUFBd0MsZUFBeEMsZ0JBQWtFLEtBQWxFLFVBQTRFLE1BQTVFLG9CQUFpRyxhQUFqRyxVQUFtSCxhQUFuSCxPQUZjO0FBR2QsNEJBQWtCLE1BQU0sTUFBeEIsVUFBbUMsZ0JBQW5DLFVBQXdELGdCQUF4RCxPQUhjO0FBSWQsMEJBQWdCLE1BQU0sS0FBdEIsT0FKYztBQUtkLDBCQUFnQixNQUFNLEtBQXRCO0FBTGMsS0FBbEI7O0FBUUEsU0FBSyxJQUFJLEdBQVQsSUFBZ0IsS0FBaEIsRUFBdUI7QUFDbkIsWUFBSSxNQUFNLGNBQU4sQ0FBcUIsR0FBckIsQ0FBSixFQUErQjtBQUMzQixnQkFBSSx5QkFBZSxHQUFmLENBQUosRUFBeUI7QUFDckIsK0JBQWUsSUFBZjtBQUNILGFBRkQsTUFFTztBQUNILHNCQUFNLHdCQUFZLEdBQVosQ0FBTixJQUEwQixNQUFNLEdBQU4sQ0FBMUI7QUFDSDtBQUNKO0FBQ0o7O0FBRUQsUUFBSSxZQUFKLEVBQWtCO0FBQ2QsY0FBTSxTQUFOLEdBQWtCLEVBQWxCOztBQUVBLGFBQUssSUFBSSxJQUFULElBQWdCLFNBQWhCLEVBQTJCO0FBQ3ZCLGdCQUFJLFVBQVUsY0FBVixDQUF5QixJQUF6QixDQUFKLEVBQW1DO0FBQy9CLG9CQUFNLGVBQWdCLFNBQVEsT0FBVCxHQUFvQixHQUFwQixHQUEwQixHQUEvQztBQUNBLHNCQUFNLFNBQU4sSUFBbUIsVUFBVSxJQUFWLEVBQWUsT0FBZixDQUF1QixZQUF2QixFQUFxQyxZQUFyQyxDQUFuQjtBQUNIO0FBQ0o7QUFDSjs7QUFFRCxXQUFPLEtBQVA7QUFDSCIsImZpbGUiOiJidWlsZC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvanZhbmRlcmRvZXMvQ29kZS9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjYW1lbFRvRGFzaCB9IGZyb20gJy4uLy4uL2luYy91dGlscyc7XG5pbXBvcnQgdHJhbnNmb3JtUHJvcHMgZnJvbSAnLi4vY3NzL3RyYW5zZm9ybS1wcm9wcyc7XG5cbmNvbnN0IFpFUk9fTk9UX1pFUk8gPSAwLjAwMDE7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkKHN0YXRlLCBkYXRhKSB7XG4gICAgbGV0IGhhc1RyYW5zZm9ybSA9IGZhbHNlO1xuICAgIGNvbnN0IHByb3BzID0ge307XG4gICAgY29uc3Qgc2NhbGUgPSBzdGF0ZS5zY2FsZSAhPT0gdW5kZWZpbmVkID8gc3RhdGUuc2NhbGUgfHwgWkVST19OT1RfWkVSTyA6IHN0YXRlLnNjYWxlWCB8fCAxO1xuICAgIGNvbnN0IHNjYWxlWSA9IHN0YXRlLnNjYWxlWSAhPT0gdW5kZWZpbmVkID8gc3RhdGUuc2NhbGVZIHx8IFpFUk9fTk9UX1pFUk8gOiBzY2FsZSB8fCAxO1xuICAgIGNvbnN0IHRyYW5zZm9ybU9yaWdpblggPSBkYXRhLndpZHRoICogKChzdGF0ZS5vcmlnaW5YIHx8IDUwKSAvIDEwMCkgKyBkYXRhLng7XG4gICAgY29uc3QgdHJhbnNmb3JtT3JpZ2luWSA9IGRhdGEuaGVpZ2h0ICogKChzdGF0ZS5vcmlnaW5ZIHx8IDUwKSAvIDEwMCkgKyBkYXRhLnk7XG4gICAgY29uc3Qgc2NhbGVUcmFuc2Zvcm1YID0gLSB0cmFuc2Zvcm1PcmlnaW5YICogKHNjYWxlICogMSk7XG4gICAgY29uc3Qgc2NhbGVUcmFuc2Zvcm1ZID0gLSB0cmFuc2Zvcm1PcmlnaW5ZICogKHNjYWxlWSAqIDEpO1xuICAgIGNvbnN0IHNjYWxlUmVwbGFjZVggPSB0cmFuc2Zvcm1PcmlnaW5YIC8gc2NhbGU7XG4gICAgY29uc3Qgc2NhbGVSZXBsYWNlWSA9IHRyYW5zZm9ybU9yaWdpblkgLyBzY2FsZVk7XG4gICAgY29uc3QgdHJhbnNmb3JtID0ge1xuICAgICAgICB0cmFuc2xhdGU6IGB0cmFuc2xhdGUoJHtzdGF0ZS50cmFuc2xhdGVYfSwgJHtzdGF0ZS50cmFuc2xhdGVZfSkgYCxcbiAgICAgICAgc2NhbGU6IGB0cmFuc2xhdGUoJHtzY2FsZVRyYW5zZm9ybVh9LCAke3NjYWxlVHJhbnNmb3JtWX0pIHNjYWxlKCR7c2NhbGV9LCAke3NjYWxlWX0pIHRyYW5zbGF0ZSgke3NjYWxlUmVwbGFjZVh9LCAke3NjYWxlUmVwbGFjZVl9KSBgLFxuICAgICAgICByb3RhdGU6IGByb3RhdGUoJHtzdGF0ZS5yb3RhdGV9LCAke3RyYW5zZm9ybU9yaWdpblh9LCAke3RyYW5zZm9ybU9yaWdpbll9KSBgLFxuICAgICAgICBza2V3WDogYHNrZXdYKCR7c3RhdGUuc2tld1h9KSBgLFxuICAgICAgICBza2V3WTogYHNrZXdZKCR7c3RhdGUuc2tld1l9KSBgXG4gICAgfTtcblxuICAgIGZvciAobGV0IGtleSBpbiBzdGF0ZSkge1xuICAgICAgICBpZiAoc3RhdGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgaWYgKHRyYW5zZm9ybVByb3BzW2tleV0pIHtcbiAgICAgICAgICAgICAgICBoYXNUcmFuc2Zvcm0gPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcm9wc1tjYW1lbFRvRGFzaChrZXkpXSA9IHN0YXRlW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaGFzVHJhbnNmb3JtKSB7XG4gICAgICAgIHByb3BzLnRyYW5zZm9ybSA9ICcnO1xuXG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0cmFuc2Zvcm0pIHtcbiAgICAgICAgICAgIGlmICh0cmFuc2Zvcm0uaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRWYWx1ZSA9IChrZXkgPT09ICdzY2FsZScpID8gJzEnIDogJzAnO1xuICAgICAgICAgICAgICAgIHByb3BzLnRyYW5zZm9ybSArPSB0cmFuc2Zvcm1ba2V5XS5yZXBsYWNlKC91bmRlZmluZWQvZywgZGVmYXVsdFZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwcm9wcztcbn0iXX0=

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL3N2Zy1wYXRoL2J1aWxkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BLElBQU0sa0JBQWtCLFVBQUMsT0FBRCxFQUFVLE1BQVY7QUFBQSxXQUFzQixXQUFXLE9BQVgsSUFBc0IsR0FBdkIsR0FBOEIsTUFBOUIsR0FBdUMsSUFBNUQ7QUFBQSxDQUF4Qjs7a0JBRWUsVUFBQyxLQUFELEVBQVEsTUFBUixFQUFtQjtBQUM5QixRQUFNLFNBQVMsRUFBZjtBQUNBLFFBQU0sa0JBQWtCO0FBQ3BCLGdCQUFRLENBRFk7QUFFcEIsaUJBQVMsU0FBUztBQUZFLEtBQXhCO0FBSUEsUUFBSSxlQUFlLEtBQW5COztBQUVBLFNBQUssSUFBSSxHQUFULElBQWdCLEtBQWhCLEVBQXVCO0FBQ25CLFlBQUksTUFBTSxjQUFOLENBQXFCLEdBQXJCLENBQUosRUFBK0I7QUFDM0IsZ0JBQU0sUUFBUSxNQUFNLEdBQU4sQ0FBZDs7QUFFQSxvQkFBUSxHQUFSO0FBQ0EscUJBQUssUUFBTDtBQUNBLHFCQUFLLFNBQUw7QUFDSSxtQ0FBZSxJQUFmO0FBQ0Esb0NBQWdCLEdBQWhCLElBQXVCLGdCQUFnQixLQUFoQixFQUF1QixNQUF2QixDQUF2QjtBQUNBO0FBQ0oscUJBQUssUUFBTDtBQUNJLDJCQUFPLG1CQUFQLElBQThCLGdCQUFnQixDQUFDLEtBQWpCLEVBQXdCLE1BQXhCLENBQTlCO0FBQ0E7QUFDSjtBQUNJLDJCQUFPLEdBQVAsSUFBYyxLQUFkO0FBVko7QUFZSDtBQUNKOztBQUVELFFBQUksWUFBSixFQUFrQjtBQUNkLGVBQU8sa0JBQVAsSUFBNkIsZ0JBQWdCLE1BQWhCLEdBQXlCLEdBQXpCLEdBQStCLGdCQUFnQixPQUE1RTtBQUNIOztBQUVELFdBQU8sTUFBUDtBQUNILEMiLCJmaWxlIjoiYnVpbGQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2p2YW5kZXJkb2VzL0NvZGUvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgICBDb252ZXJ0IHBlcmNlbnRhZ2UgdG8gcGl4ZWxzXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBQZXJjZW50YWdlIG9mIHRvdGFsIGxlbmd0aFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVG90YWwgbGVuZ3RoXG4qL1xuY29uc3QgcGVyY2VudFRvUGl4ZWxzID0gKHBlcmNlbnQsIGxlbmd0aCkgPT4gKHBhcnNlRmxvYXQocGVyY2VudCkgLyAxMDApICogbGVuZ3RoICsgJ3B4JztcblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlLCBsZW5ndGgpID0+IHtcbiAgICBjb25zdCBzdHlsZXMgPSB7fTtcbiAgICBjb25zdCBkYXNoQXJyYXlTdHlsZXMgPSB7XG4gICAgICAgIGxlbmd0aDogMCxcbiAgICAgICAgc3BhY2luZzogbGVuZ3RoICsgJ3B4J1xuICAgIH07XG4gICAgbGV0IGhhc0Rhc2hBcnJheSA9IGZhbHNlO1xuXG4gICAgZm9yIChsZXQga2V5IGluIHN0YXRlKSB7XG4gICAgICAgIGlmIChzdGF0ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHN0YXRlW2tleV07XG5cbiAgICAgICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgICBjYXNlICdsZW5ndGgnOlxuICAgICAgICAgICAgY2FzZSAnc3BhY2luZyc6XG4gICAgICAgICAgICAgICAgaGFzRGFzaEFycmF5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBkYXNoQXJyYXlTdHlsZXNba2V5XSA9IHBlcmNlbnRUb1BpeGVscyh2YWx1ZSwgbGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ29mZnNldCc6XG4gICAgICAgICAgICAgICAgc3R5bGVzWydzdHJva2UtZGFzaG9mZnNldCddID0gcGVyY2VudFRvUGl4ZWxzKC12YWx1ZSwgbGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgc3R5bGVzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChoYXNEYXNoQXJyYXkpIHtcbiAgICAgICAgc3R5bGVzWydzdHJva2UtZGFzaGFycmF5J10gPSBkYXNoQXJyYXlTdHlsZXMubGVuZ3RoICsgJyAnICsgZGFzaEFycmF5U3R5bGVzLnNwYWNpbmc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0eWxlcztcbn07Il19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kZWZhdWx0LXByb3BzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFPLElBQU0sb0JBQU07QUFDZixTQUFLLENBRFU7QUFFZixTQUFLLEdBRlU7QUFHZixXQUFPO0FBSFEsQ0FBWjs7QUFNQSxJQUFNLDRCQUFVO0FBQ25CLFNBQUssQ0FEYztBQUVuQixTQUFLO0FBRmMsQ0FBaEI7O0FBS0EsSUFBTSw0QkFBVTtBQUNuQixTQUFLLENBRGM7QUFFbkIsU0FBSyxHQUZjO0FBR25CLFVBQU07QUFIYSxDQUFoQiIsImZpbGUiOiJkZWZhdWx0LXByb3BzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qdmFuZGVyZG9lcy9Db2RlL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCByZ2IgPSB7XG4gICAgbWluOiAwLFxuICAgIG1heDogMjU1LFxuICAgIHJvdW5kOiB0cnVlXG59O1xuXG5leHBvcnQgY29uc3Qgb3BhY2l0eSA9IHtcbiAgICBtaW46IDAsXG4gICAgbWF4OiAxXG59O1xuXG5leHBvcnQgY29uc3QgcGVyY2VudCA9IHtcbiAgICBtaW46IDAsXG4gICAgbWF4OiAxMDAsXG4gICAgdW5pdDogJyUnXG59OyJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kaWN0aW9uYXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLElBQU0sSUFBSSxHQUFWO0FBQ0EsSUFBTSxJQUFJLEdBQVY7QUFDQSxJQUFNLFFBQVEsT0FBZDs7QUFFTyxJQUFNLHNCQUFPLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxHQUFQLENBQWI7QUFDQSxJQUFNLG9CQUFNLENBQUMsS0FBRCxFQUFRLE9BQVIsRUFBaUIsTUFBakIsRUFBeUIsS0FBekIsQ0FBWjtBQUNBLElBQU0sb0JBQU0sQ0FBQyxLQUFELEVBQVEsWUFBUixFQUFzQixXQUF0QixFQUFtQyxLQUFuQyxDQUFaO0FBQ0EsSUFBTSxnQ0FBWSxDQUFDLEtBQUQsRUFBUSxPQUFSLEVBQWlCLFFBQWpCLEVBQTJCLE1BQTNCLENBQWxCO0FBQ0EsSUFBTSwwQkFBUyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sUUFBUCxFQUFpQixRQUFqQixFQUEyQixPQUEzQixDQUFmIiwiZmlsZSI6ImRpY3Rpb25hcnkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2p2YW5kZXJkb2VzL0NvZGUvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgWCA9ICdYJztcbmNvbnN0IFkgPSAnWSc7XG5jb25zdCBBTFBIQSA9ICdBbHBoYSc7XG5cbmV4cG9ydCBjb25zdCBheGVzID0gW1gsIFksICdaJ107XG5leHBvcnQgY29uc3QgcmdiID0gWydSZWQnLCAnR3JlZW4nLCAnQmx1ZScsIEFMUEhBXTtcbmV4cG9ydCBjb25zdCBoc2wgPSBbJ0h1ZScsICdTYXR1cmF0aW9uJywgJ0xpZ2h0bmVzcycsIEFMUEhBXTtcbmV4cG9ydCBjb25zdCBwb3NpdGlvbnMgPSBbJ1RvcCcsICdSaWdodCcsICdCb3R0b20nLCAnTGVmdCddO1xuZXhwb3J0IGNvbnN0IHNoYWRvdyA9IFtYLCBZLCAnUmFkaXVzJywgJ1NwcmVhZCcsICdDb2xvciddOyJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2Vhc2luZy9jcmVhdGUtZWFzaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztrQkFnQ3dCLG9COzs7Ozs7Ozs7OztBQXRCeEIsSUFBTSxlQUFlLFVBQUMsTUFBRDtBQUFBLFdBQVksVUFBQyxRQUFELEVBQVcsUUFBWDtBQUFBLGVBQXlCLFlBQVksR0FBYixHQUFvQixPQUFPLElBQUksUUFBWCxFQUFxQixRQUFyQixJQUFpQyxDQUFyRCxHQUF5RCxDQUFDLElBQUksT0FBTyxLQUFLLElBQUksUUFBVCxDQUFQLEVBQTJCLFFBQTNCLENBQUwsSUFBNkMsQ0FBOUg7QUFBQSxLQUFaO0FBQUEsQ0FBckI7Ozs7Ozs7Ozs7OztBQVlBLElBQU0sZ0JBQWdCLFVBQUMsTUFBRDtBQUFBLFdBQVksVUFBQyxRQUFELEVBQVcsUUFBWDtBQUFBLGVBQXdCLElBQUksT0FBTyxJQUFJLFFBQVgsRUFBcUIsUUFBckIsQ0FBNUI7QUFBQSxLQUFaO0FBQUEsQ0FBdEI7Ozs7Ozs7Ozs7QUFVZSxTQUFTLG9CQUFULENBQThCLE1BQTlCLEVBQXNDO0FBQ2pELFFBQUksaUJBQWlCLFVBQUMsUUFBRCxFQUFXLFFBQVg7QUFBQSxlQUF3QixPQUFPLFFBQVAsRUFBaUIsUUFBakIsQ0FBeEI7QUFBQSxLQUFyQjs7QUFFQSxtQkFBZSxFQUFmLEdBQW9CLFVBQUMsUUFBRCxFQUFXLFFBQVg7QUFBQSxlQUF3QixPQUFPLFFBQVAsRUFBaUIsUUFBakIsQ0FBeEI7QUFBQSxLQUFwQjtBQUNBLG1CQUFlLEdBQWYsR0FBcUIsY0FBYyxNQUFkLENBQXJCO0FBQ0EsbUJBQWUsS0FBZixHQUF1QixhQUFhLE1BQWIsQ0FBdkI7O0FBRUEsV0FBTyxjQUFQO0FBQ0giLCJmaWxlIjoiY3JlYXRlLWVhc2luZy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvanZhbmRlcmRvZXMvQ29kZS9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICAgIE1pcnJvciBlYXNpbmdcbiAgICBcbiAgICBNaXJyb3JzIHRoZSBwcm92aWRlZCBlYXNpbmcgZnVuY3Rpb24sIHVzZWQgaGVyZSBmb3IgbWlycm9yaW5nIGFuXG4gICAgZWFzZUluIGludG8gYW4gZWFzZUluT3V0XG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcywgZnJvbSAwIC0gMSwgb2YgY3VycmVudCBzaGlmdFxuICAgIEBwYXJhbSBbZnVuY3Rpb25dOiBUaGUgZWFzaW5nIGZ1bmN0aW9uIHRvIG1pcnJvclxuICAgIEByZXR1cm5zIFtudW1iZXJdOiBUaGUgZWFzaW5nLWFkanVzdGVkIGRlbHRhXG4qL1xuY29uc3QgbWlycm9yRWFzaW5nID0gKG1ldGhvZCkgPT4gKHByb2dyZXNzLCBzdHJlbmd0aCkgPT4gKHByb2dyZXNzIDw9IDAuNSkgPyBtZXRob2QoMiAqIHByb2dyZXNzLCBzdHJlbmd0aCkgLyAyIDogKDIgLSBtZXRob2QoMiAqICgxIC0gcHJvZ3Jlc3MpLCBzdHJlbmd0aCkpIC8gMjtcbiAgICAgICAgXG4vKlxuICAgIFJldmVyc2UgZWFzaW5nXG4gICAgXG4gICAgUmV2ZXJzZXMgdGhlIG91dHB1dCBvZiB0aGUgcHJvdmlkZWQgZWFzaW5nIGZ1bmN0aW9uLCB1c2VkIGZvciBmbGlwcGluZyBlYXNlSW5cbiAgICBjdXJ2ZSB0byBhbiBlYXNlT3V0LlxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MsIGZyb20gMCAtIDEsIG9mIGN1cnJlbnQgc2hpZnRcbiAgICBAcGFyYW0gW2Z1bmN0aW9uXTogVGhlIGVhc2luZyBmdW5jdGlvbiB0byByZXZlcnNlXG4gICAgQHJldHVybnMgW251bWJlcl06IFRoZSBlYXNpbmctYWRqdXN0ZWQgZGVsdGFcbiovXG5jb25zdCByZXZlcnNlRWFzaW5nID0gKG1ldGhvZCkgPT4gKHByb2dyZXNzLCBzdHJlbmd0aCkgPT4gMSAtIG1ldGhvZCgxIC0gcHJvZ3Jlc3MsIHN0cmVuZ3RoKTtcblxuLypcbiAgICBFYXNpbmcgY2xhc3NcblxuICAgIElmIHByb3ZpZGVkIGVhc2luZyBmdW5jdGlvbiwgcmV0dXJucyBlYXNpbmcgZnVuY3Rpb24gd2l0aCBcbiAgICBpbi9vdXQvaW5PdXQgdmFyaWF0aW9uc1xuXG4gICAgSWYgcHJvdmlkZWQgZm91ciBhcmd1bWVudHMsIHJldHVybnMgbmV3IEJlemllciBjbGFzcyBpbnN0ZWFkLlxuKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUVhc2luZ0Z1bmN0aW9uKG1ldGhvZCkge1xuICAgIGxldCBlYXNpbmdGdW5jdGlvbiA9IChwcm9ncmVzcywgc3RyZW5ndGgpID0+IG1ldGhvZChwcm9ncmVzcywgc3RyZW5ndGgpO1xuXG4gICAgZWFzaW5nRnVuY3Rpb24uaW4gPSAocHJvZ3Jlc3MsIHN0cmVuZ3RoKSA9PiBtZXRob2QocHJvZ3Jlc3MsIHN0cmVuZ3RoKTtcbiAgICBlYXNpbmdGdW5jdGlvbi5vdXQgPSByZXZlcnNlRWFzaW5nKG1ldGhvZCk7XG4gICAgZWFzaW5nRnVuY3Rpb24uaW5PdXQgPSBtaXJyb3JFYXNpbmcobWV0aG9kKTtcblxuICAgIHJldHVybiBlYXNpbmdGdW5jdGlvbjtcbn1cbiJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2Vhc2luZy9jcmVhdGUtYmV6aWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztrQkFtQ3dCLFc7Ozs7Ozs7Ozs7Ozs7Ozs7QUFwQnhCLElBQU0sb0JBQW9CLENBQTFCO0FBQ0EsSUFBTSxtQkFBbUIsS0FBekI7QUFDQSxJQUFNLHdCQUF3QixTQUE5QjtBQUNBLElBQU0sNkJBQTZCLEVBQW5DO0FBQ0EsSUFBTSxzQkFBc0IsRUFBNUI7QUFDQSxJQUFNLHFCQUFxQixPQUFPLHNCQUFzQixHQUE3QixDQUEzQjtBQUNBLElBQU0scUJBQXNCLE9BQU8sWUFBUCxLQUF3QixXQUFwRDs7O0FBR0EsSUFBTSxJQUFJLFVBQUMsRUFBRCxFQUFLLEVBQUw7QUFBQSxXQUFZLE1BQU0sTUFBTSxFQUFaLEdBQWlCLE1BQU0sRUFBbkM7QUFBQSxDQUFWO0FBQ0EsSUFBTSxJQUFJLFVBQUMsRUFBRCxFQUFLLEVBQUw7QUFBQSxXQUFZLE1BQU0sRUFBTixHQUFXLE1BQU0sRUFBN0I7QUFBQSxDQUFWO0FBQ0EsSUFBTSxJQUFJLFVBQUMsRUFBRDtBQUFBLFdBQVEsTUFBTSxFQUFkO0FBQUEsQ0FBVjs7QUFFQSxJQUFNLFdBQVcsVUFBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVI7QUFBQSxXQUFlLE1BQU0sRUFBRSxFQUFGLEVBQU0sRUFBTixDQUFOLEdBQWtCLENBQWxCLEdBQXNCLENBQXRCLEdBQTBCLE1BQU0sRUFBRSxFQUFGLEVBQU0sRUFBTixDQUFOLEdBQWtCLENBQTVDLEdBQWdELEVBQUUsRUFBRixDQUEvRDtBQUFBLENBQWpCOztBQUVBLElBQU0sYUFBYSxVQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUjtBQUFBLFdBQWUsQ0FBQyxDQUFDLEVBQUUsRUFBRixFQUFNLEVBQU4sSUFBWSxDQUFaLEdBQWdCLEVBQUUsRUFBRixFQUFNLEVBQU4sQ0FBakIsSUFBOEIsQ0FBOUIsR0FBa0MsRUFBRSxFQUFGLENBQW5DLElBQTRDLENBQTNE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QTdCRDs7QUErQkEsUUFBTSxhQUFhLFlBQU07QUFDckIsdUJBQWUsSUFBZjtBQUNBLFlBQUksT0FBTyxHQUFQLElBQWMsT0FBTyxHQUF6QixFQUE4QjtBQUMxQjtBQUNIO0FBQ0osS0FMRDs7QUFPQSxRQUFNLFdBQVcsVUFBQyxFQUFELEVBQVE7QUFDckIsWUFBSSxvQkFBSjs7QUFFQSxZQUFJLENBQUMsWUFBTCxFQUFtQjtBQUNmO0FBQ0g7OztBQUdELFlBQUksUUFBUSxHQUFSLElBQWUsUUFBUSxHQUEzQixFQUFnQztBQUM1QiwwQkFBYyxFQUFkOzs7QUFHSCxTQUpELE1BSU8sSUFBSSxPQUFPLENBQVgsRUFBYztBQUNqQiw4QkFBYyxDQUFkOzs7QUFHSCxhQUpNLE1BSUEsSUFBSSxPQUFPLENBQVgsRUFBYztBQUNqQixrQ0FBYyxDQUFkO0FBRUgsaUJBSE0sTUFHQTtBQUNILGtDQUFjLFdBQVcsU0FBUyxFQUFULENBQVgsRUFBeUIsR0FBekIsRUFBOEIsR0FBOUIsQ0FBZDtBQUNIOztBQUVELGVBQU8sV0FBUDtBQUNILEtBeEJEOztBQTBCQSxXQUFPLFFBQVA7QUFDSCIsImZpbGUiOiJjcmVhdGUtYmV6aWVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qdmFuZGVyZG9lcy9Db2RlL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gICAgQmV6aWVyIGZ1bmN0aW9uIGdlbmVyYXRvclxuICAgICAgICBcbiAgICBHYcOrdGFuIFJlbmF1ZGVhdSdzIEJlemllckVhc2luZ1xuICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9pbmRleC5qcyAgXG4gICAgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAgICBZb3UncmUgYSBoZXJvXG4gICAgXG4gICAgVXNlXG4gICAgXG4gICAgICAgIHZhciBlYXNlT3V0ID0gbmV3IEJlemllciguMTcsLjY3LC44MywuNjcpLFxuICAgICAgICAgICAgeCA9IGVhc2VPdXQoMC41KTsgLy8gcmV0dXJucyAwLjYyNy4uLlxuKi9cblxuLy8gQ29uc3RhbnRzXG5jb25zdCBORVdUT05fSVRFUkFUSU9OUyA9IDg7XG5jb25zdCBORVdUT05fTUlOX1NMT1BFID0gMC4wMDE7XG5jb25zdCBTVUJESVZJU0lPTl9QUkVDSVNJT04gPSAwLjAwMDAwMDE7XG5jb25zdCBTVUJESVZJU0lPTl9NQVhfSVRFUkFUSU9OUyA9IDEwO1xuY29uc3QgS19TUExJTkVfVEFCTEVfU0laRSA9IDExO1xuY29uc3QgS19TQU1QTEVfU1RFUF9TSVpFID0gMS4wIC8gKEtfU1BMSU5FX1RBQkxFX1NJWkUgLSAxLjApO1xuY29uc3QgRkxPQVRfMzJfU1VQUE9SVEVEID0gKHR5cGVvZiBGbG9hdDMyQXJyYXkgIT09ICd1bmRlZmluZWQnKTtcblxuLy8gSGVscGVyIG1ldGhvZHNcbmNvbnN0IGEgPSAoYTEsIGEyKSA9PiAxLjAgLSAzLjAgKiBhMiArIDMuMCAqIGExO1xuY29uc3QgYiA9IChhMSwgYTIpID0+IDMuMCAqIGEyIC0gNi4wICogYTE7XG5jb25zdCBjID0gKGExKSA9PiAzLjAgKiBhMTtcblxuY29uc3QgZ2V0U2xvcGUgPSAodCwgYTEsIGEyKSA9PiAzLjAgKiBhKGExLCBhMikgKiB0ICogdCArIDIuMCAqIGIoYTEsIGEyKSAqIHQgKyBjKGExKTtcblxuY29uc3QgY2FsY0JlemllciA9ICh0LCBhMSwgYTIpID0+ICgoYShhMSwgYTIpICogdCArIGIoYTEsIGEyKSkgKiB0ICsgYyhhMSkpICogdDtcblxuLypcbiAgICBDcmVhdGUgYSBjdWJpYyBiZXppZXIgcmVzb2x2ZXJcbiovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjdWJpY0JlemllcihtWDEsIG1ZMSwgbVgyLCBtWTIpIHtcbiAgICBjb25zdCBzYW1wbGVWYWx1ZXMgPSBGTE9BVF8zMl9TVVBQT1JURUQgPyBuZXcgRmxvYXQzMkFycmF5KEtfU1BMSU5FX1RBQkxFX1NJWkUpIDogbmV3IEFycmF5KEtfU1BMSU5FX1RBQkxFX1NJWkUpO1xuICAgIGxldCBfcHJlY29tcHV0ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGJpbmFyeVN1YmRpdmlkZSA9IChhWCwgYUEsIGFCKSA9PiB7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgbGV0IGN1cnJlbnRYO1xuICAgICAgICBsZXQgY3VycmVudFQ7XG5cbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgY3VycmVudFQgPSBhQSArIChhQiAtIGFBKSAvIDIuMDtcbiAgICAgICAgICAgIGN1cnJlbnRYID0gY2FsY0JlemllcihjdXJyZW50VCwgbVgxLCBtWDIpIC0gYVg7XG4gICAgICAgICAgICBpZiAoY3VycmVudFggPiAwLjApIHtcbiAgICAgICAgICAgICAgICBhQiA9IGN1cnJlbnRUO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhQSA9IGN1cnJlbnRUO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IHdoaWxlIChNYXRoLmFicyhjdXJyZW50WCkgPiBTVUJESVZJU0lPTl9QUkVDSVNJT04gJiYgKytpIDwgU1VCRElWSVNJT05fTUFYX0lURVJBVElPTlMpO1xuXG4gICAgICAgIHJldHVybiBjdXJyZW50VDtcbiAgICB9O1xuXG4gICAgY29uc3QgbmV3dG9uUmFwaHNvbkl0ZXJhdGUgPSAoYVgsIGFHdWVzc1QpID0+IHtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBsZXQgY3VycmVudFNsb3BlID0gMDtcbiAgICAgICAgbGV0IGN1cnJlbnRYO1xuXG4gICAgICAgIGZvciAoOyBpIDwgTkVXVE9OX0lURVJBVElPTlM7ICsraSkge1xuICAgICAgICAgICAgY3VycmVudFNsb3BlID0gZ2V0U2xvcGUoYUd1ZXNzVCwgbVgxLCBtWDIpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoY3VycmVudFNsb3BlID09PSAwLjApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYUd1ZXNzVDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY3VycmVudFggPSBjYWxjQmV6aWVyKGFHdWVzc1QsIG1YMSwgbVgyKSAtIGFYO1xuICAgICAgICAgICAgYUd1ZXNzVCAtPSBjdXJyZW50WCAvIGN1cnJlbnRTbG9wZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGFHdWVzc1Q7XG4gICAgfTtcblxuICAgIGNvbnN0IGNhbGNTYW1wbGVWYWx1ZXMgPSAoKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgS19TUExJTkVfVEFCTEVfU0laRTsgKytpKSB7XG4gICAgICAgICAgICBzYW1wbGVWYWx1ZXNbaV0gPSBjYWxjQmV6aWVyKGkgKiBLX1NBTVBMRV9TVEVQX1NJWkUsIG1YMSwgbVgyKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBnZXRURm9yWCA9IChhWCkgPT4ge1xuICAgICAgICBsZXQgaW50ZXJ2YWxTdGFydCA9IDAuMDtcbiAgICAgICAgbGV0IGN1cnJlbnRTYW1wbGUgPSAxO1xuICAgICAgICBsZXQgbGFzdFNhbXBsZSA9IEtfU1BMSU5FX1RBQkxFX1NJWkUgLSAxO1xuICAgICAgICBsZXQgZGlzdCA9IDAuMDtcbiAgICAgICAgbGV0IGd1ZXNzRm9yVCA9IDAuMDtcbiAgICAgICAgbGV0IGluaXRpYWxTbG9wZSA9IDAuMDtcbiAgICAgICAgICAgIFxuICAgICAgICBmb3IgKDsgY3VycmVudFNhbXBsZSAhPSBsYXN0U2FtcGxlICYmIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSA8PSBhWDsgKytjdXJyZW50U2FtcGxlKSB7XG4gICAgICAgICAgICBpbnRlcnZhbFN0YXJ0ICs9IEtfU0FNUExFX1NURVBfU0laRTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLS1jdXJyZW50U2FtcGxlO1xuICAgICAgICBcbiAgICAgICAgZGlzdCA9IChhWCAtIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSkgLyAoc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGUrMV0gLSBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0pO1xuICAgICAgICBndWVzc0ZvclQgPSBpbnRlcnZhbFN0YXJ0ICsgZGlzdCAqIEtfU0FNUExFX1NURVBfU0laRTtcbiAgICAgICAgXG4gICAgICAgIGluaXRpYWxTbG9wZSA9IGdldFNsb3BlKGd1ZXNzRm9yVCwgbVgxLCBtWDIpO1xuICAgICAgICBcbiAgICAgICAgLy8gSWYgc2xvcGUgaXMgZ3JlYXRlciB0aGFuIG1pblxuICAgICAgICBpZiAoaW5pdGlhbFNsb3BlID49IE5FV1RPTl9NSU5fU0xPUEUpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXd0b25SYXBoc29uSXRlcmF0ZShhWCwgZ3Vlc3NGb3JUKTtcbiAgICAgICAgLy8gU2xvcGUgaXMgZXF1YWwgdG8gbWluXG4gICAgICAgIH0gZWxzZSBpZiAoaW5pdGlhbFNsb3BlID09PSAwLjApIHtcbiAgICAgICAgICAgIHJldHVybiBndWVzc0ZvclQ7XG4gICAgICAgIC8vIFNsb3BlIGlzIGxlc3MgdGhhbiBtaW5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBiaW5hcnlTdWJkaXZpZGUoYVgsIGludGVydmFsU3RhcnQsIGludGVydmFsU3RhcnQgKyBLX1NBTVBMRV9TVEVQX1NJWkUpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHByZWNvbXB1dGUgPSAoKSA9PiB7XG4gICAgICAgIF9wcmVjb21wdXRlZCA9IHRydWU7XG4gICAgICAgIGlmIChtWDEgIT0gbVkxIHx8IG1YMiAhPSBtWTIpIHtcbiAgICAgICAgICAgIGNhbGNTYW1wbGVWYWx1ZXMoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCByZXNvbHZlciA9IChhWCkgPT4ge1xuICAgICAgICBsZXQgcmV0dXJuVmFsdWU7XG5cbiAgICAgICAgaWYgKCFfcHJlY29tcHV0ZWQpIHtcbiAgICAgICAgICAgIHByZWNvbXB1dGUoKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gSWYgbGluZWFyIGdyYWRpZW50LCByZXR1cm4gWCBhcyBUXG4gICAgICAgIGlmIChtWDEgPT09IG1ZMSAmJiBtWDIgPT09IG1ZMikge1xuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSBhWDtcbiAgICAgICAgICAgIFxuICAgICAgICAvLyBJZiBhdCBzdGFydCwgcmV0dXJuIDBcbiAgICAgICAgfSBlbHNlIGlmIChhWCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSAwO1xuICAgICAgICAgICAgXG4gICAgICAgIC8vIElmIGF0IGVuZCwgcmV0dXJuIDFcbiAgICAgICAgfSBlbHNlIGlmIChhWCA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSAxO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm5WYWx1ZSA9IGNhbGNCZXppZXIoZ2V0VEZvclgoYVgpLCBtWTEsIG1ZMik7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiByZXR1cm5WYWx1ZTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHJlc29sdmVyO1xufVxuIl19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90YXNrL3RpY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLElBQU0sU0FBVSxPQUFPLE1BQVAsS0FBa0IsV0FBbEIsSUFBaUMsT0FBTyxxQkFBekMsR0FBa0UsSUFBbEUsR0FBeUUsS0FBeEY7O0FBRUEsSUFBSSxhQUFKOztBQUVBLElBQUksTUFBSixFQUFZO0FBQ1IsV0FBTyxVQUFDLFFBQUQ7QUFBQSxlQUFjLE9BQU8scUJBQVAsQ0FBNkIsUUFBN0IsQ0FBZDtBQUFBLEtBQVA7QUFFSCxDQUhELE1BR087QUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFlSCxZQUFJLFdBQVcsQ0FBZjs7QUFFQSxlQUFPLFVBQUMsUUFBRCxFQUFjO0FBQ2pCLGdCQUFNLGNBQWMsSUFBSSxJQUFKLEdBQVcsT0FBWCxFQUFwQjtBQUNBLGdCQUFNLGFBQWEsS0FBSyxHQUFMLENBQVMsQ0FBVCxFQUFZLE1BQU0sY0FBYyxRQUFwQixDQUFaLENBQW5COztBQUVBLHVCQUFXLGNBQWMsVUFBekI7O0FBRUEsdUJBQVc7QUFBQSx1QkFBTSxTQUFTLFFBQVQsQ0FBTjtBQUFBLGFBQVgsRUFBcUMsVUFBckM7QUFDSCxTQVBEO0FBakJHO0FBeUJOOztrQkFFYyxJIiwiZmlsZSI6InRpY2suanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2p2YW5kZXJkb2VzL0NvZGUvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgICBEZXRlY3QgYW5kIGxvYWQgYW4gYXBwcm9wcmlhdGUgY2xvY2sgc2V0dGluZyBmb3IgdGhlIGVudmlyb25tZW50XG4qL1xuXG5jb25zdCBoYXNSQUYgPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSkgPyB0cnVlIDogZmFsc2U7XG5cbmxldCB0aWNrO1xuXG5pZiAoaGFzUkFGKSB7XG4gICAgdGljayA9IChjYWxsYmFjaykgPT4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShjYWxsYmFjayk7XG5cbn0gZWxzZSB7XG4gICAgLypcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHBvbHlmaWxsXG4gICAgICAgIFxuICAgICAgICBGb3IgSUU4LzkgRmxpbnN0b25lcyBhbmQgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRzXG5cbiAgICAgICAgVGFrZW4gZnJvbSBQYXVsIElyaXNoLiBXZSd2ZSBzdHJpcHBlZCBvdXQgY2FuY2VsQW5pbWF0aW9uRnJhbWUgY2hlY2tzIGJlY2F1c2Ugd2UgZG9uJ3QgZm94IHdpdGggdGhhdFxuICAgICAgICBcbiAgICAgICAgaHR0cDovL3BhdWxpcmlzaC5jb20vMjAxMS9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWFuaW1hdGluZy9cbiAgICAgICAgaHR0cDovL215Lm9wZXJhLmNvbS9lbW9sbGVyL2Jsb2cvMjAxMS8xMi8yMC9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWVyLWFuaW1hdGluZ1xuICAgICAgICAgXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbCBieSBFcmlrIE3DtmxsZXIuIGZpeGVzIGZyb20gUGF1bCBJcmlzaCBhbmQgVGlubyBaaWpkZWxcbiAgICAgICAgIFxuICAgICAgICBNSVQgbGljZW5zZVxuICAgICovXG4gICAgbGV0IGxhc3RUaW1lID0gMDtcblxuICAgIHRpY2sgPSAoY2FsbGJhY2spID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgY29uc3QgdGltZVRvQ2FsbCA9IE1hdGgubWF4KDAsIDE2IC0gKGN1cnJlbnRUaW1lIC0gbGFzdFRpbWUpKTtcblxuICAgICAgICBsYXN0VGltZSA9IGN1cnJlbnRUaW1lICsgdGltZVRvQ2FsbDtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGNhbGxiYWNrKGxhc3RUaW1lKSwgdGltZVRvQ2FsbCk7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdGljazsiXX0=

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
	//# sourceMappingURL=data:application/json;base64,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QixFQUF5QyxJQUF6QyxFQUE4QztBQUMxQyxnQkFBTSxNQUFLLGNBQWMsRUFBZCxDQUFYO0FBQ0EsZ0JBQU0saUJBQWdCLFdBQVcsT0FBWCxDQUFtQixHQUFuQixDQUF0QjtBQUNBLGdCQUFNLFFBQU8sWUFBWSxHQUFaLENBQWI7OztBQUdBLGdCQUFJLG1CQUFrQixDQUFDLENBQW5CLElBQXdCLEtBQTVCLEVBQWtDO0FBQzlCLG9CQUFJLE1BQUssVUFBVCxFQUFxQjtBQUNqQiwrQkFBVyxPQUFYLENBQW1CLEdBQW5CO0FBQ0gsaUJBRkQsTUFFTztBQUNILCtCQUFXLElBQVgsQ0FBZ0IsR0FBaEI7QUFDSDs7QUFFRCxvQkFBSSxNQUFLLGNBQVQsRUFBeUI7QUFDckIsMEJBQUssY0FBTDtBQUNIOztBQUVELG1DQUFtQixJQUFuQixFQUF5QixNQUFLLE1BQTlCO0FBQ0g7QUFDSjs7QUFFRCxzQkFBYyxNQUFkLENBQXFCLENBQXJCLEVBQXdCLG1CQUF4Qjs7QUFFQSxlQUFPLFVBQVA7QUFDSDtBQTdGVSxDIiwiZmlsZSI6Im1hbmFnZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2p2YW5kZXJkb2VzL0NvZGUvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiLy8gW2ludF06IEluY3JlbWVudGVkIGZvciBlYWNoIG5ldyBydW5uaW5nIHRhc2tcbmxldCBjdXJyZW50VGFza0lkID0gMDtcblxuLy8gW2ludF06IE51bWJlciBvZiBhbGwgcnVubmluZyB0YXNrZXNcbmxldCB0b3RhbFJ1bm5pbmdDb3VudCA9IDA7XG5cbi8vIFtpbnRdOiBOdW1iZXIgb2YgcnVubmluZyB0YXNrZXMgZXhjbHVkaW5nIGJhY2tncm91bmQgdGFza2VzXG5sZXQgbm9uQmFja2dyb3VuZFJ1bm5pbmdDb3VudCA9IDA7XG5cbi8vIFthcnJheV06IEFycmF5IG9mIHJ1bm5pbmcgdGFzayBJRHNcbmNvbnN0IHJ1bm5pbmdJZHMgPSBbXTtcblxuLy8gW29iamVjdF06IE1hcCBvZiBydW5uaW5nIHRhc2tlc1xuY29uc3QgYWN0aXZlVGFza3MgPSB7fTtcblxuLy8gW2FycmF5XTogQXJyYXkgb2YgdGFzayBJRHMgcXVldWVkIGZvciBhY3RpdmF0aW9uXG5jb25zdCBhY3RpdmF0ZVF1ZXVlID0gW107XG5cbi8vIFthcnJheV06IEFycmF5IG9mIHRhc2sgSURzIHF1ZXVlZCBmb3IgZGVhY3RpdmF0aW9uXG5jb25zdCBkZWFjdGl2YXRlUXVldWUgPSBbXTtcblxuLypcbiAgICBVcGRhdGUgYWN0aXZhdGUvZGVhY3RpdmF0ZSBxdWV1ZXNcblxuICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgIEBwYXJhbSBbYXJyYXldXG4gICAgQHBhcmFtIFthcnJheV1cbiovXG5jb25zdCB1cGRhdGVRdWV1ZXMgPSAoaWQsIGluTGlzdCwgb3V0TGlzdCkgPT4ge1xuICAgIGNvbnN0IGluUG9zaXRpb24gPSBpbkxpc3QuaW5kZXhPZihpZCk7XG4gICAgY29uc3Qgb3V0UG9zaXRpb24gPSBvdXRMaXN0LmluZGV4T2YoaWQpO1xuXG4gICAgaWYgKGluUG9zaXRpb24gPT09IC0xKSB7XG4gICAgICAgIGluTGlzdC5wdXNoKGlkKTtcbiAgICB9XG5cbiAgICBpZiAob3V0UG9zaXRpb24gPiAtMSkge1xuICAgICAgICBvdXRMaXN0LnNwbGljZShvdXRQb3NpdGlvbiwgMSk7XG4gICAgfVxufTtcblxuLypcbiAgICBVcGRhdGUgcnVubmluZ1xuXG4gICAgW2Jvb2xlYW5dOiBgdHJ1ZWAgdG8gYWRkXG4gICAgW2Jvb2xlYW5dOiBgdHJ1ZWAgaWYgbGF6eVxuKi9cbmNvbnN0IHVwZGF0ZVJ1bm5pbmdDb3VudCA9IChhZGQsIGlzTGF6eSkgPT4ge1xuICAgIGNvbnN0IG1vZGlmeSA9IGFkZCA/IDEgOiAtMTtcblxuICAgIHRvdGFsUnVubmluZ0NvdW50ICs9IG1vZGlmeTtcblxuICAgIGlmICghaXNMYXp5KSB7XG4gICAgICAgIG5vbkJhY2tncm91bmRSdW5uaW5nQ291bnQgKz0gbW9kaWZ5O1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBhY3RpdmVUYXNrcyxcblxuICAgIC8vIEFjdGl2YXRlIGEgdGFza1xuICAgIGFjdGl2YXRlOiAoaWQsIHRhc2spID0+IHtcbiAgICAgICAgYWN0aXZlVGFza3NbaWRdID0gdGFzaztcbiAgICAgICAgdGFzay5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIHVwZGF0ZVF1ZXVlcyhpZCwgYWN0aXZhdGVRdWV1ZSwgZGVhY3RpdmF0ZVF1ZXVlKTtcblxuICAgICAgICBpZiAodGFzay5vbkFjdGl2YXRlKSB7XG4gICAgICAgICAgICB0YXNrLm9uQWN0aXZhdGUodGFzayk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGFzay5vbkFjdGl2YXRlT25jZSkge1xuICAgICAgICAgICAgdGFzay5vbkFjdGl2YXRlT25jZSh0YXNrKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBEZWFjdGl2YXRlIGEgdGFza1xuICAgIGRlYWN0aXZhdGU6IChpZCkgPT4ge1xuICAgICAgICBjb25zdCB0YXNrID0gYWN0aXZlVGFza3NbaWRdO1xuXG4gICAgICAgIGlmICh0YXNrKSB7XG4gICAgICAgICAgICB1cGRhdGVRdWV1ZXMoaWQsIGRlYWN0aXZhdGVRdWV1ZSwgYWN0aXZhdGVRdWV1ZSk7XG4gICAgICAgICAgICB0YXNrLmlzQWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmICh0YXNrLm9uRGVhY3RpdmF0ZSkge1xuICAgICAgICAgICAgICAgIHRhc2sub25EZWFjdGl2YXRlKHRhc2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIE51bWJlciBiYWNrZ3JvdW5kIHRhc2tlc1xuICAgIGdldE5vbkJhY2tncm91bmRSdW5uaW5nQ291bnQ6ICgpID0+IG5vbkJhY2tncm91bmRSdW5uaW5nQ291bnQsXG5cbiAgICAvLyBJbmNyZW1lbnQgY3VycmVudCB0YXNrIElEIGFuZCByZXR1cm5cbiAgICBnZXRUYXNrSWQ6ICgpID0+IGN1cnJlbnRUYXNrSWQrKyxcblxuICAgIC8vIFJlc29sdmUgYWN0aXZhdGUvZGVhY3RpdmF0ZSB0YXNrZXMgYW5kIHJldHVybiBhY3RpdmUgaWRzXG4gICAgZ2V0QWN0aXZlSWRzOiAoKSA9PiB7XG4gICAgICAgIC8qXG4gICAgICAgICAgICB0YXNrIGRlYWN0aXZhdGUgcXVldWVcbiAgICAgICAgKi9cbiAgICAgICAgY29uc3QgZGVhY3RpdmF0ZVF1ZXVlTGVuZ3RoID0gZGVhY3RpdmF0ZVF1ZXVlLmxlbmd0aDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlYWN0aXZhdGVRdWV1ZUxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBpZCA9IGRlYWN0aXZhdGVRdWV1ZVtpXTtcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZUlkSW5kZXggPSBydW5uaW5nSWRzLmluZGV4T2YoaWQpO1xuICAgICAgICAgICAgY29uc3QgdGFzayA9IGFjdGl2ZVRhc2tzW2lkXTtcblxuICAgICAgICAgICAgLy8gSWYgdGhpcyBpcyBhIHJ1bm5pbmcgdGFzaywgZGVhY3RpdmF0ZVxuICAgICAgICAgICAgaWYgKGFjdGl2ZUlkSW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgIHJ1bm5pbmdJZHMuc3BsaWNlKGFjdGl2ZUlkSW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZVJ1bm5pbmdDb3VudChmYWxzZSwgdGFzay5pc0xhenkpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBhY3RpdmVUYXNrc1tpZF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKlxuICAgICAgICAgICAgRW1wdHkgZGVhY3RpdmF0ZSBxdWV1ZS4gV2UgdXNlIGBBcnJheS5zcGxpY2VgIGJlY2F1c2UgaXQgZG9lc24ndFxuICAgICAgICAgICAgd29ya3Mgb24gdGhlIG9yaWdpbmFsIGFycmF5IHNvIHdlIGRvbid0IGhhdmUgdG8gZ2FyYmFnZSBjb2xsZWN0IGFueXRoaW5nXG4gICAgICAgICovXG4gICAgICAgIGRlYWN0aXZhdGVRdWV1ZS5zcGxpY2UoMCwgZGVhY3RpdmF0ZVF1ZXVlTGVuZ3RoKTtcblxuICAgICAgICAvKlxuICAgICAgICAgICAgdGFzayBhY3RpdmF0ZSBxdWV1ZVxuICAgICAgICAqL1xuICAgICAgICBjb25zdCBhY3RpdmF0ZVF1ZXVlTGVuZ3RoID0gYWN0aXZhdGVRdWV1ZS5sZW5ndGg7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY3RpdmF0ZVF1ZXVlTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gYWN0aXZhdGVRdWV1ZVtpXTtcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZUlkSW5kZXggPSBydW5uaW5nSWRzLmluZGV4T2YoaWQpO1xuICAgICAgICAgICAgY29uc3QgdGFzayA9IGFjdGl2ZVRhc2tzW2lkXTtcblxuICAgICAgICAgICAgLy8gSWYgdGFzayBpc24ndCBhbHJlYWR5IHJ1bm5pbmcsIGFjdGl2YXRlXG4gICAgICAgICAgICBpZiAoYWN0aXZlSWRJbmRleCA9PT0gLTEgJiYgdGFzaykge1xuICAgICAgICAgICAgICAgIGlmICh0YXNrLmlzUHJpb3JpdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ0lkcy51bnNoaWZ0KGlkKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBydW5uaW5nSWRzLnB1c2goaWQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0YXNrLm9uQWN0aXZhdGVMb29wKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2sub25BY3RpdmF0ZUxvb3AoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB1cGRhdGVSdW5uaW5nQ291bnQodHJ1ZSwgdGFzay5pc0xhenkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYWN0aXZhdGVRdWV1ZS5zcGxpY2UoMCwgYWN0aXZhdGVRdWV1ZUxlbmd0aCk7XG5cbiAgICAgICAgcmV0dXJuIHJ1bm5pbmdJZHM7XG4gICAgfVxufTtcbiJdfQ==

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDdkM2U4ZTFjNDEwOTE1ZDlmNjkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvYWQvZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9wb3Btb3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rhc2svdGltZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvQWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL0Zsb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvVHdlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvUGh5c2ljcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9UcmFjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGFzay9UYXNrLmpzIiwid2VicGFjazovLy8uL3NyYy9pbnB1dC9JbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL3N0YWdnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy90aW1lbGluZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9hZGFwdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hZGFwdGVyL2F0dHItYWRhcHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9jc3MtYWRhcHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9vYmplY3QtYWRhcHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9zdmctYWRhcHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9zdmctcGF0aC1hZGFwdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2Vhc2luZy9wcmVzZXQtZWFzaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2Zsb3cvZ2V0LWZsb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy9jYWxjLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL2FscGhhLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9hbmdsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvY29sb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL2NvbXBsZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL2hleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvaHNsLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9weC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvcmdiLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9zY2FsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvc2hhZG93LmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy91bml0LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvdHJhbnNmb3JtZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9kZXRlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy9udW1lcmljYWwtdmFsdWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvZGV0ZWN0LWFkYXB0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvZmxvdy9nZW5lcmF0ZS1ibGVuZC1jdXJ2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5wdXQvUG9pbnRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGFzay9sb29wLmpzIiwid2VicGFjazovLy8uL3NyYy9hZGFwdGVyL2Nzcy9zdGF0ZS1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkYXB0ZXIvY3NzL3ZhbHVlLXR5cGUtbWFwLmpzIiwid2VicGFjazovLy8uL3NyYy9hZGFwdGVyL2Nzcy9idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9jc3MvcHJlZml4ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkYXB0ZXIvY3NzL3RyYW5zZm9ybS1wcm9wcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9zdmcvdmFsdWUtdHlwZS1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkYXB0ZXIvc3ZnL2J1aWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9hZGFwdGVyL3N2Zy1wYXRoL2J1aWxkLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kZWZhdWx0LXByb3BzLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kaWN0aW9uYXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2Vhc2luZy9jcmVhdGUtZWFzaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2Vhc2luZy9jcmVhdGUtYmV6aWVyLmpzIiwid2VicGFjazovLy8uL3NyYy90YXNrL3RpY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rhc2svbWFuYWdlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx3Qzs7Ozs7OztBQ3RDQTs7QUFFQTs7QUFFQTs7QUFFQSx3Q0FBdUMsNkJBQTZCLFlBQVksRUFBRSxPQUFPLGlCQUFpQixtQkFBbUIsdUJBQXVCLDRFQUE0RSxFQUFFLEVBQUUsc0JBQXNCLGVBQWUsRUFBRTs7QUFFM1E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTJDLCtxQjs7Ozs7O0FDZjNDOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7O0FBRUE7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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1RkFBc0YsYUFBYTtBQUNuRztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTJDLHVzTDs7Ozs7O0FDMUczQzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLHdDQUF1QyxxQ0FBcUM7O0FBRTVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLDRDQUEyQyx1eEM7Ozs7OztBQzVCM0M7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTJDLHV5ZTs7Ozs7O0FDOVQzQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW1CLGNBQWM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHFCQUFvQjs7QUFFcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLGlCQUFnQjtBQUNoQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW1CLG1CQUFtQjtBQUN0QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q2xDM0M7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUEyQyx1Z0o7Ozs7OztBQ3pEM0M7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUEyQywrb0Y7Ozs7OztBQzlDM0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBMkMsdXhCOzs7Ozs7QUNuQjNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBMkMsdXJDOzs7Ozs7QUNaM0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUEyQywyZ0c7Ozs7OztBQ3pEM0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSw4QkFBNkI7QUFDN0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQSxVQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBYyx1QkFBdUI7QUFDckM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXVCLHlCQUF5QjtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBYyxrRUFBa0U7QUFDaEY7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFTO0FBQ1Q7O0FBRUE7QUFDQSxjQUFhO0FBQ2I7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBMkMsK2hVOzs7Ozs7QUNqSzNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0EsNENBQTJDLDIzRTs7Ozs7O0FDOUMzQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF1QiwyQkFBMkI7QUFDbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUJBQXdCLDBCQUEwQjtBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRDQUEyQywydlEiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA0N2QzZThlMWM0MTA5MTVkOWY2OVxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9wb3Btb3Rpb24gPSByZXF1aXJlKCcuLi9wb3Btb3Rpb24nKTtcblxudmFyIHBvcG1vdGlvbiA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9wb3Btb3Rpb24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG52YXIgVUlyZWYgPSB3aW5kb3cubW90aW9uO1xuXG5wb3Btb3Rpb24ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICB3aW5kb3cubW90aW9uID0gVUlyZWY7XG59O1xuXG53aW5kb3cubW90aW9uID0gd2luZG93LnBvcG1vdGlvbiA9IHBvcG1vdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5c2IyRmtMMmRzYjJKaGJDNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVGQk96dEpRVUZaTEZNN096czdRVUZGV2l4SlFVRk5MRkZCUVZFc1QwRkJUeXhOUVVGeVFqczdRVUZGUVN4VlFVRlZMRlZCUVZZc1IwRkJkVUlzV1VGQldUdEJRVU12UWl4WFFVRlBMRTFCUVZBc1IwRkJaMElzUzBGQmFFSTdRVUZEU0N4RFFVWkVPenRCUVVsQkxFOUJRVThzVFVGQlVDeEhRVUZuUWl4UFFVRlBMRk5CUVZBc1IwRkJiVUlzVTBGQmJrTWlMQ0ptYVd4bElqb2laMnh2WW1Gc0xtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5cWRtRnVaR1Z5Wkc5bGN5OURiMlJsTDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENBcUlHRnpJSEJ2Y0cxdmRHbHZiaUJtY205dElDY3VMaTl3YjNCdGIzUnBiMjRuTzF4dVhHNWpiMjV6ZENCVlNYSmxaaUE5SUhkcGJtUnZkeTV0YjNScGIyNDdYRzVjYm5CdmNHMXZkR2x2Ymk1dWIwTnZibVpzYVdOMElEMGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJSGRwYm1SdmR5NXRiM1JwYjI0Z1BTQlZTWEpsWmp0Y2JuMDdYRzVjYm5kcGJtUnZkeTV0YjNScGIyNGdQU0IzYVc1a2IzY3VjRzl3Ylc5MGFXOXVJRDBnY0c5d2JXOTBhVzl1T3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2xvYWQvZ2xvYmFsLmpzXG4gKiogbW9kdWxlIGlkID0gMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5BY3Rpb24gPSBleHBvcnRzLnRyYW5zZm9ybWVycyA9IGV4cG9ydHMudmFsdWVUeXBlID0gZXhwb3J0cy5zZXRHbG9iYWxEaWxhdGlvbiA9IGV4cG9ydHMudXRpbHMgPSBleHBvcnRzLmNhbGMgPSBleHBvcnRzLmRldGVjdEZsb3cgPSBleHBvcnRzLmVhc2luZyA9IGV4cG9ydHMuc3ZnUGF0aCA9IGV4cG9ydHMuc3ZnID0gZXhwb3J0cy5vYmplY3QgPSBleHBvcnRzLmNzcyA9IGV4cG9ydHMuYXR0ciA9IGV4cG9ydHMuY3JlYXRlQWRhcHRlciA9IGV4cG9ydHMudGltZWxpbmUgPSBleHBvcnRzLnN0YWdnZXIgPSBleHBvcnRzLnRhc2sgPSBleHBvcnRzLmlucHV0ID0gZXhwb3J0cy50cmFjayA9IGV4cG9ydHMucGh5c2ljcyA9IGV4cG9ydHMudHdlZW4gPSBleHBvcnRzLmZsb3cgPSB1bmRlZmluZWQ7XG5cbnZhciBfdGltZXIgPSByZXF1aXJlKCcuL3Rhc2svdGltZXInKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdzZXRHbG9iYWxEaWxhdGlvbicsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RpbWVyLnNldEdsb2JhbERpbGF0aW9uO1xuICAgIH1cbn0pO1xuXG52YXIgX0FjdGlvbiA9IHJlcXVpcmUoJy4vYWN0aW9ucy9BY3Rpb24nKTtcblxudmFyIF9BY3Rpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQWN0aW9uKTtcblxudmFyIF9GbG93ID0gcmVxdWlyZSgnLi9hY3Rpb25zL0Zsb3cnKTtcblxudmFyIF9GbG93MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Zsb3cpO1xuXG52YXIgX1R3ZWVuID0gcmVxdWlyZSgnLi9hY3Rpb25zL1R3ZWVuJyk7XG5cbnZhciBfVHdlZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVHdlZW4pO1xuXG52YXIgX1BoeXNpY3MgPSByZXF1aXJlKCcuL2FjdGlvbnMvUGh5c2ljcycpO1xuXG52YXIgX1BoeXNpY3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUGh5c2ljcyk7XG5cbnZhciBfVHJhY2sgPSByZXF1aXJlKCcuL2FjdGlvbnMvVHJhY2snKTtcblxudmFyIF9UcmFjazIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UcmFjayk7XG5cbnZhciBfVGFzayA9IHJlcXVpcmUoJy4vdGFzay9UYXNrJyk7XG5cbnZhciBfVGFzazIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UYXNrKTtcblxudmFyIF9JbnB1dCA9IHJlcXVpcmUoJy4vaW5wdXQvSW5wdXQnKTtcblxudmFyIF9JbnB1dDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9JbnB1dCk7XG5cbnZhciBfc3RhZ2dlcjIgPSByZXF1aXJlKCcuL2luYy9zdGFnZ2VyJyk7XG5cbnZhciBfc3RhZ2dlcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdGFnZ2VyMik7XG5cbnZhciBfdGltZWxpbmUyID0gcmVxdWlyZSgnLi9pbmMvdGltZWxpbmUnKTtcblxudmFyIF90aW1lbGluZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90aW1lbGluZTIpO1xuXG52YXIgX2FkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXIvYWRhcHRlcicpO1xuXG52YXIgX2FkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWRhcHRlcik7XG5cbnZhciBfYXR0ckFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXIvYXR0ci1hZGFwdGVyJyk7XG5cbnZhciBfYXR0ckFkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXR0ckFkYXB0ZXIpO1xuXG52YXIgX2Nzc0FkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXIvY3NzLWFkYXB0ZXInKTtcblxudmFyIF9jc3NBZGFwdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Nzc0FkYXB0ZXIpO1xuXG52YXIgX29iamVjdEFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXIvb2JqZWN0LWFkYXB0ZXInKTtcblxudmFyIF9vYmplY3RBZGFwdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdEFkYXB0ZXIpO1xuXG52YXIgX3N2Z0FkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXIvc3ZnLWFkYXB0ZXInKTtcblxudmFyIF9zdmdBZGFwdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N2Z0FkYXB0ZXIpO1xuXG52YXIgX3N2Z1BhdGhBZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVyL3N2Zy1wYXRoLWFkYXB0ZXInKTtcblxudmFyIF9zdmdQYXRoQWRhcHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdmdQYXRoQWRhcHRlcik7XG5cbnZhciBfcHJlc2V0RWFzaW5nID0gcmVxdWlyZSgnLi9hY3Rpb25zL2Vhc2luZy9wcmVzZXQtZWFzaW5nJyk7XG5cbnZhciBfcHJlc2V0RWFzaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ByZXNldEVhc2luZyk7XG5cbnZhciBfZ2V0RmxvdyA9IHJlcXVpcmUoJy4vYWN0aW9ucy9mbG93L2dldC1mbG93Jyk7XG5cbnZhciBfZ2V0RmxvdzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRGbG93KTtcblxudmFyIF9jYWxjMiA9IHJlcXVpcmUoJy4vaW5jL2NhbGMnKTtcblxudmFyIF9jYWxjID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2NhbGMyKTtcblxudmFyIF91dGlsczIgPSByZXF1aXJlKCcuL2luYy91dGlscycpO1xuXG52YXIgX3V0aWxzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3V0aWxzMik7XG5cbnZhciBfYWxwaGEgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL2FscGhhJyk7XG5cbnZhciBfYWxwaGEyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWxwaGEpO1xuXG52YXIgX2FuZ2xlID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy9hbmdsZScpO1xuXG52YXIgX2FuZ2xlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FuZ2xlKTtcblxudmFyIF9jb2xvciA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvY29sb3InKTtcblxudmFyIF9jb2xvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb2xvcik7XG5cbnZhciBfY29tcGxleCA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvY29tcGxleCcpO1xuXG52YXIgX2NvbXBsZXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcGxleCk7XG5cbnZhciBfaGV4ID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy9oZXgnKTtcblxudmFyIF9oZXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGV4KTtcblxudmFyIF9oc2wgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL2hzbCcpO1xuXG52YXIgX2hzbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oc2wpO1xuXG52YXIgX3B4ID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy9weCcpO1xuXG52YXIgX3B4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3B4KTtcblxudmFyIF9yZ2IgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL3JnYicpO1xuXG52YXIgX3JnYjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZ2IpO1xuXG52YXIgX3NjYWxlID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy9zY2FsZScpO1xuXG52YXIgX3NjYWxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NjYWxlKTtcblxudmFyIF9zaGFkb3cgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL3NoYWRvdycpO1xuXG52YXIgX3NoYWRvdzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaGFkb3cpO1xuXG52YXIgX3VuaXQgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL3VuaXQnKTtcblxudmFyIF91bml0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3VuaXQpO1xuXG52YXIgX3RyYW5zZm9ybWVyczIgPSByZXF1aXJlKCcuL2luYy90cmFuc2Zvcm1lcnMnKTtcblxudmFyIF90cmFuc2Zvcm1lcnMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdHJhbnNmb3JtZXJzMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8vIEV4cG9ydCBmYWN0b3J5IGZ1bmN0aW9uc1xudmFyIGZsb3cgPSBleHBvcnRzLmZsb3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseShfRmxvdzIuZGVmYXVsdCwgW251bGxdLmNvbmNhdChhcmdzKSkpKCk7XG59OyAvLyBJbXBvcnQgY2xhc3NlcyAtIGxvbmcgdGVybSBnb2FsIHRvIG1vdmUgdG93YXJkcyBjb21wb3NpdGlvblxuXG52YXIgdHdlZW4gPSBleHBvcnRzLnR3ZWVuID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgcmV0dXJuIG5ldyBfVHdlZW4yLmRlZmF1bHQocHJvcHMpO1xufTtcbnZhciBwaHlzaWNzID0gZXhwb3J0cy5waHlzaWNzID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgcmV0dXJuIG5ldyBfUGh5c2ljczIuZGVmYXVsdChwcm9wcyk7XG59O1xudmFyIHRyYWNrID0gZXhwb3J0cy50cmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoX1RyYWNrMi5kZWZhdWx0LCBbbnVsbF0uY29uY2F0KGFyZ3MpKSkoKTtcbn07XG52YXIgaW5wdXQgPSBleHBvcnRzLmlucHV0ID0gZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4zKSwgX2tleTMgPSAwOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XG4gICAgICAgIGFyZ3NbX2tleTNdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseShfSW5wdXQyLmRlZmF1bHQsIFtudWxsXS5jb25jYXQoYXJncykpKSgpO1xufTtcbnZhciB0YXNrID0gZXhwb3J0cy50YXNrID0gZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIF9sZW40ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW40KSwgX2tleTQgPSAwOyBfa2V5NCA8IF9sZW40OyBfa2V5NCsrKSB7XG4gICAgICAgIGFyZ3NbX2tleTRdID0gYXJndW1lbnRzW19rZXk0XTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseShfVGFzazIuZGVmYXVsdCwgW251bGxdLmNvbmNhdChhcmdzKSkpKCk7XG59O1xuZXhwb3J0cy5zdGFnZ2VyID0gX3N0YWdnZXIzLmRlZmF1bHQ7XG5leHBvcnRzLnRpbWVsaW5lID0gX3RpbWVsaW5lMy5kZWZhdWx0O1xuXG4vLyBBZGFwdGVyc1xuXG5leHBvcnRzLmNyZWF0ZUFkYXB0ZXIgPSBfYWRhcHRlcjIuZGVmYXVsdDtcbmV4cG9ydHMuYXR0ciA9IF9hdHRyQWRhcHRlcjIuZGVmYXVsdDtcbmV4cG9ydHMuY3NzID0gX2Nzc0FkYXB0ZXIyLmRlZmF1bHQ7XG5leHBvcnRzLm9iamVjdCA9IF9vYmplY3RBZGFwdGVyMi5kZWZhdWx0O1xuZXhwb3J0cy5zdmcgPSBfc3ZnQWRhcHRlcjIuZGVmYXVsdDtcbmV4cG9ydHMuc3ZnUGF0aCA9IF9zdmdQYXRoQWRhcHRlcjIuZGVmYXVsdDtcblxuLy8gRWFzaW5nXG5cbmV4cG9ydHMuZWFzaW5nID0gX3ByZXNldEVhc2luZzIuZGVmYXVsdDtcbnZhciBkZXRlY3RGbG93ID0gZXhwb3J0cy5kZXRlY3RGbG93ID0gX2dldEZsb3cyLmRlZmF1bHQ7XG5cbi8vIFV0aWxzXG5leHBvcnRzLmNhbGMgPSBfY2FsYztcbmV4cG9ydHMudXRpbHMgPSBfdXRpbHM7XG5cbi8vIFZhbHVlIHR5cGVzXG5cbnZhciB2YWx1ZVR5cGUgPSBleHBvcnRzLnZhbHVlVHlwZSA9IHsgYWxwaGE6IF9hbHBoYTIuZGVmYXVsdCwgYW5nbGU6IF9hbmdsZTIuZGVmYXVsdCwgY29sb3I6IF9jb2xvcjIuZGVmYXVsdCwgY29tcGxleDogX2NvbXBsZXgyLmRlZmF1bHQsIGhleDogX2hleDIuZGVmYXVsdCwgaHNsOiBfaHNsMi5kZWZhdWx0LCBweDogX3B4Mi5kZWZhdWx0LCByZ2I6IF9yZ2IyLmRlZmF1bHQsIHNjYWxlOiBfc2NhbGUyLmRlZmF1bHQsIHNoYWRvdzogX3NoYWRvdzIuZGVmYXVsdCwgdW5pdDogX3VuaXQyLmRlZmF1bHQgfTtcblxuLy8gVHJhbnNmb3JtZXJzXG5leHBvcnRzLnRyYW5zZm9ybWVycyA9IF90cmFuc2Zvcm1lcnM7XG5cbi8qXG4gICAgUmV0dXJucyBhIHZlcnNpb24gb2YgdGhlIEFjdGlvbiBib3VuZCB0byBhIEZsb3dcblxuICAgIFdlJ3JlIGFkZGluZyBgb25gIGhlcmUgYmVjYXVzZSBGbG93IGV4dGVuZHMgQWN0aW9uLFxuICAgIG90aGVyd2lzZSBjcmVhdGluZyBhIGNpcmN1bGFyIG1vZHVsYXIgZGVwZW5kZW5jeS4gRnV0dXJlXG4gICAgcmVmYWN0b3JpbmcsIGllIG1vdmluZyB0byBhIGNvbXBvc2l0aW9uYWwgbW9kZWwgd2lsbFxuICAgIHJlbW92ZSB0aGUgbmVlZCBmb3IgdXMgdG8gZG8gdGhpcyBoZXJlLlxuKi9cblxuX0FjdGlvbjIuZGVmYXVsdC5wcm90b3R5cGUub24gPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIGlmICghZWxlbWVudC5jb25uZWN0KSB7XG4gICAgICAgIGVsZW1lbnQgPSAoMCwgX2dldEZsb3cyLmRlZmF1bHQpKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50LmNvbm5lY3QodGhpcyk7XG59O1xuXG5leHBvcnRzLkFjdGlvbiA9IF9BY3Rpb24yLmRlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXdiM0J0YjNScGIyNHVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenR6UWtGdFExTXNhVUk3T3pzN1FVRnNRMVE3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3TzBGQlEwRTdPenM3UVVGRFFUczdPenRCUVVOQk96czdPMEZCUTBFN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdRVUZ6UWtFN096czdPenM3T3pzN096dEJRVk5CT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3TzBGQlEwRTdPenM3UVVGRFFUczdPenRCUVVOQk96czdPMEZCUTBFN096czdRVUZEUVRzN096dEJRVU5CT3pzN08wRkJRMEU3T3pzN096czdPenM3T3pzN1FVRjBRMDhzU1VGQlRTeHpRa0ZCVHp0QlFVRkJMSE5EUVVGSkxFbEJRVW83UVVGQlNTeFpRVUZLTzBGQlFVRTdPMEZCUVVFc05FVkJRWGxDTEVsQlFYcENPMEZCUVVFc1EwRkJZaXhET3p0QlFVTkJMRWxCUVUwc2QwSkJRVkVzVlVGQlF5eExRVUZFTzBGQlFVRXNWMEZCVnl4dlFrRkJWU3hMUVVGV0xFTkJRVmc3UVVGQlFTeERRVUZrTzBGQlEwRXNTVUZCVFN3MFFrRkJWU3hWUVVGRExFdEJRVVE3UVVGQlFTeFhRVUZYTEhOQ1FVRlpMRXRCUVZvc1EwRkJXRHRCUVVGQkxFTkJRV2hDTzBGQlEwRXNTVUZCVFN4M1FrRkJVVHRCUVVGQkxIVkRRVUZKTEVsQlFVbzdRVUZCU1N4WlFVRktPMEZCUVVFN08wRkJRVUVzTmtWQlFUQkNMRWxCUVRGQ08wRkJRVUVzUTBGQlpEdEJRVU5CTEVsQlFVMHNkMEpCUVZFN1FVRkJRU3gxUTBGQlNTeEpRVUZLTzBGQlFVa3NXVUZCU2p0QlFVRkJPenRCUVVGQkxEWkZRVUV3UWl4SlFVRXhRanRCUVVGQkxFTkJRV1E3UVVGRFFTeEpRVUZOTEhOQ1FVRlBPMEZCUVVFc2RVTkJRVWtzU1VGQlNqdEJRVUZKTEZsQlFVbzdRVUZCUVRzN1FVRkJRU3cwUlVGQmVVSXNTVUZCZWtJN1FVRkJRU3hEUVVGaU8xRkJRMEVzVHp0UlFVTkJMRkU3T3pzN1VVRkhRU3hoTzFGQlEwRXNTVHRSUVVOQkxFYzdVVUZEUVN4Tk8xRkJRMEVzUnp0UlFVTkJMRTg3T3pzN1VVRkhRU3hOTzBGQlJVRXNTVUZCVFN4dFJFRkJUanM3TzFGQlIwc3NTVHRSUVVOQkxFczdPenM3UVVGbFRDeEpRVUZOTEdkRFFVRlpMRVZCUVVVc2MwSkJRVVlzUlVGQlV5eHpRa0ZCVkN4RlFVRm5RaXh6UWtGQmFFSXNSVUZCZFVJc01FSkJRWFpDTEVWQlFXZERMR3RDUVVGb1F5eEZRVUZ4UXl4clFrRkJja01zUlVGQk1FTXNaMEpCUVRGRExFVkJRVGhETEd0Q1FVRTVReXhGUVVGdFJDeHpRa0ZCYmtRc1JVRkJNRVFzZDBKQlFURkVMRVZCUVd0RkxHOUNRVUZzUlN4RlFVRnNRanM3TzFGQlIwc3NXVHM3T3pzN096czdPenM3UVVGVldpeHBRa0ZCVHl4VFFVRlFMRU5CUVdsQ0xFVkJRV3BDTEVkQlFYTkNMRlZCUVZVc1QwRkJWaXhGUVVGdFFqdEJRVU55UXl4UlFVRkpMRU5CUVVNc1VVRkJVU3hQUVVGaUxFVkJRWE5DTzBGQlEyeENMR3RDUVVGVkxIVkNRVUZSTEU5QlFWSXNRMEZCVmp0QlFVTklPenRCUVVWRUxGZEJRVThzVVVGQlVTeFBRVUZTTEVOQlFXZENMRWxCUVdoQ0xFTkJRVkE3UVVGRFNDeERRVTVFT3p0UlFWRlRMRTBpTENKbWFXeGxJam9pY0c5d2JXOTBhVzl1TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlxZG1GdVpHVnlaRzlsY3k5RGIyUmxMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk4dklFbHRjRzl5ZENCamJHRnpjMlZ6SUMwZ2JHOXVaeUIwWlhKdElHZHZZV3dnZEc4Z2JXOTJaU0IwYjNkaGNtUnpJR052YlhCdmMybDBhVzl1WEc1cGJYQnZjblFnUVdOMGFXOXVJR1p5YjIwZ0p5NHZZV04wYVc5dWN5OUJZM1JwYjI0bk8xeHVhVzF3YjNKMElFWnNiM2NnWm5KdmJTQW5MaTloWTNScGIyNXpMMFpzYjNjbk8xeHVhVzF3YjNKMElGUjNaV1Z1SUdaeWIyMGdKeTR2WVdOMGFXOXVjeTlVZDJWbGJpYzdYRzVwYlhCdmNuUWdVR2g1YzJsamN5Qm1jbTl0SUNjdUwyRmpkR2x2Ym5NdlVHaDVjMmxqY3ljN1hHNXBiWEJ2Y25RZ1ZISmhZMnNnWm5KdmJTQW5MaTloWTNScGIyNXpMMVJ5WVdOckp6dGNibWx0Y0c5eWRDQlVZWE5ySUdaeWIyMGdKeTR2ZEdGemF5OVVZWE5ySnp0Y2JtbHRjRzl5ZENCSmJuQjFkQ0JtY205dElDY3VMMmx1Y0hWMEwwbHVjSFYwSnp0Y2JseHVMeThnUlhod2IzSjBJR1poWTNSdmNua2dablZ1WTNScGIyNXpYRzVsZUhCdmNuUWdZMjl1YzNRZ1pteHZkeUE5SUNndUxpNWhjbWR6S1NBOVBpQnVaWGNnUm14dmR5Z3VMaTVoY21kektUdGNibVY0Y0c5eWRDQmpiMjV6ZENCMGQyVmxiaUE5SUNod2NtOXdjeWtnUFQ0Z2JtVjNJRlIzWldWdUtIQnliM0J6S1R0Y2JtVjRjRzl5ZENCamIyNXpkQ0J3YUhsemFXTnpJRDBnS0hCeWIzQnpLU0E5UGlCdVpYY2dVR2g1YzJsamN5aHdjbTl3Y3lrN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnZEhKaFkyc2dQU0FvTGk0dVlYSm5jeWtnUFQ0Z2JtVjNJRlJ5WVdOcktDNHVMbUZ5WjNNcE8xeHVaWGh3YjNKMElHTnZibk4wSUdsdWNIVjBJRDBnS0M0dUxtRnlaM01wSUQwK0lHNWxkeUJKYm5CMWRDZ3VMaTVoY21kektUdGNibVY0Y0c5eWRDQmpiMjV6ZENCMFlYTnJJRDBnS0M0dUxtRnlaM01wSUQwK0lHNWxkeUJVWVhOcktDNHVMbUZ5WjNNcE8xeHVaWGh3YjNKMElITjBZV2RuWlhJZ1puSnZiU0FuTGk5cGJtTXZjM1JoWjJkbGNpYzdYRzVsZUhCdmNuUWdkR2x0Wld4cGJtVWdabkp2YlNBbkxpOXBibU12ZEdsdFpXeHBibVVuTzF4dVhHNHZMeUJCWkdGd2RHVnljMXh1Wlhod2IzSjBJR055WldGMFpVRmtZWEIwWlhJZ1puSnZiU0FuTGk5aFpHRndkR1Z5TDJGa1lYQjBaWEluTzF4dVpYaHdiM0owSUdGMGRISWdabkp2YlNBbkxpOWhaR0Z3ZEdWeUwyRjBkSEl0WVdSaGNIUmxjaWM3WEc1bGVIQnZjblFnWTNOeklHWnliMjBnSnk0dllXUmhjSFJsY2k5amMzTXRZV1JoY0hSbGNpYzdYRzVsZUhCdmNuUWdiMkpxWldOMElHWnliMjBnSnk0dllXUmhjSFJsY2k5dlltcGxZM1F0WVdSaGNIUmxjaWM3WEc1bGVIQnZjblFnYzNabklHWnliMjBnSnk0dllXUmhjSFJsY2k5emRtY3RZV1JoY0hSbGNpYzdYRzVsZUhCdmNuUWdjM1puVUdGMGFDQm1jbTl0SUNjdUwyRmtZWEIwWlhJdmMzWm5MWEJoZEdndFlXUmhjSFJsY2ljN1hHNWNiaTh2SUVWaGMybHVaMXh1Wlhod2IzSjBJR1ZoYzJsdVp5Qm1jbTl0SUNjdUwyRmpkR2x2Ym5NdlpXRnphVzVuTDNCeVpYTmxkQzFsWVhOcGJtY25PMXh1YVcxd2IzSjBJR2RsZEVac2IzY2dabkp2YlNBbkxpOWhZM1JwYjI1ekwyWnNiM2N2WjJWMExXWnNiM2NuTzF4dVpYaHdiM0owSUdOdmJuTjBJR1JsZEdWamRFWnNiM2NnUFNCblpYUkdiRzkzTzF4dVhHNHZMeUJWZEdsc2MxeHVaWGh3YjNKMElDb2dZWE1nWTJGc1l5Qm1jbTl0SUNjdUwybHVZeTlqWVd4akp6dGNibVY0Y0c5eWRDQXFJR0Z6SUhWMGFXeHpJR1p5YjIwZ0p5NHZhVzVqTDNWMGFXeHpKenRjYm1WNGNHOXlkQ0I3SUhObGRFZHNiMkpoYkVScGJHRjBhVzl1SUgwZ1puSnZiU0FuTGk5MFlYTnJMM1JwYldWeUp6dGNibHh1THk4Z1ZtRnNkV1VnZEhsd1pYTmNibWx0Y0c5eWRDQmhiSEJvWVNCbWNtOXRJQ2N1TDNaaGJIVmxMWFI1Y0dWekwyRnNjR2hoSnp0Y2JtbHRjRzl5ZENCaGJtZHNaU0JtY205dElDY3VMM1poYkhWbExYUjVjR1Z6TDJGdVoyeGxKenRjYm1sdGNHOXlkQ0JqYjJ4dmNpQm1jbTl0SUNjdUwzWmhiSFZsTFhSNWNHVnpMMk52Ykc5eUp6dGNibWx0Y0c5eWRDQmpiMjF3YkdWNElHWnliMjBnSnk0dmRtRnNkV1V0ZEhsd1pYTXZZMjl0Y0d4bGVDYzdYRzVwYlhCdmNuUWdhR1Y0SUdaeWIyMGdKeTR2ZG1Gc2RXVXRkSGx3WlhNdmFHVjRKenRjYm1sdGNHOXlkQ0JvYzJ3Z1puSnZiU0FuTGk5MllXeDFaUzEwZVhCbGN5OW9jMnduTzF4dWFXMXdiM0owSUhCNElHWnliMjBnSnk0dmRtRnNkV1V0ZEhsd1pYTXZjSGduTzF4dWFXMXdiM0owSUhKbllpQm1jbTl0SUNjdUwzWmhiSFZsTFhSNWNHVnpMM0puWWljN1hHNXBiWEJ2Y25RZ2MyTmhiR1VnWm5KdmJTQW5MaTkyWVd4MVpTMTBlWEJsY3k5elkyRnNaU2M3WEc1cGJYQnZjblFnYzJoaFpHOTNJR1p5YjIwZ0p5NHZkbUZzZFdVdGRIbHdaWE12YzJoaFpHOTNKenRjYm1sdGNHOXlkQ0IxYm1sMElHWnliMjBnSnk0dmRtRnNkV1V0ZEhsd1pYTXZkVzVwZENjN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnZG1Gc2RXVlVlWEJsSUQwZ2V5QmhiSEJvWVN3Z1lXNW5iR1VzSUdOdmJHOXlMQ0JqYjIxd2JHVjRMQ0JvWlhnc0lHaHpiQ3dnY0hnc0lISm5ZaXdnYzJOaGJHVXNJSE5vWVdSdmR5d2dkVzVwZENCOU8xeHVYRzR2THlCVWNtRnVjMlp2Y20xbGNuTmNibVY0Y0c5eWRDQXFJR0Z6SUhSeVlXNXpabTl5YldWeWN5Qm1jbTl0SUNjdUwybHVZeTkwY21GdWMyWnZjbTFsY25Nbk8xeHVYRzR2S2x4dUlDQWdJRkpsZEhWeWJuTWdZU0IyWlhKemFXOXVJRzltSUhSb1pTQkJZM1JwYjI0Z1ltOTFibVFnZEc4Z1lTQkdiRzkzWEc1Y2JpQWdJQ0JYWlNkeVpTQmhaR1JwYm1jZ1lHOXVZQ0JvWlhKbElHSmxZMkYxYzJVZ1JteHZkeUJsZUhSbGJtUnpJRUZqZEdsdmJpeGNiaUFnSUNCdmRHaGxjbmRwYzJVZ1kzSmxZWFJwYm1jZ1lTQmphWEpqZFd4aGNpQnRiMlIxYkdGeUlHUmxjR1Z1WkdWdVkza3VJRVoxZEhWeVpWeHVJQ0FnSUhKbFptRmpkRzl5YVc1bkxDQnBaU0J0YjNacGJtY2dkRzhnWVNCamIyMXdiM05wZEdsdmJtRnNJRzF2WkdWc0lIZHBiR3hjYmlBZ0lDQnlaVzF2ZG1VZ2RHaGxJRzVsWldRZ1ptOXlJSFZ6SUhSdklHUnZJSFJvYVhNZ2FHVnlaUzVjYmlvdlhHNUJZM1JwYjI0dWNISnZkRzkwZVhCbExtOXVJRDBnWm5WdVkzUnBiMjRnS0dWc1pXMWxiblFwSUh0Y2JpQWdJQ0JwWmlBb0lXVnNaVzFsYm5RdVkyOXVibVZqZENrZ2UxeHVJQ0FnSUNBZ0lDQmxiR1Z0Wlc1MElEMGdaMlYwUm14dmR5aGxiR1Z0Wlc1MEtUdGNiaUFnSUNCOVhHNWNiaUFnSUNCeVpYUjFjbTRnWld4bGJXVnVkQzVqYjI1dVpXTjBLSFJvYVhNcE8xeHVmVHRjYmx4dVpYaHdiM0owSUhzZ1FXTjBhVzl1SUgwN0lsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3BvcG1vdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuc2V0R2xvYmFsRGlsYXRpb24gPSB1bmRlZmluZWQ7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxudmFyIE1BWF9FTEFQU0VEID0gMzM7XG5cbnZhciBjdXJyZW50ID0gMDtcbnZhciBlbGFwc2VkID0gMTYuNztcbnZhciBkaWxhdGlvbiA9IDE7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChmcmFtZXN0YW1wKSB7XG4gICAgICAgIGVsYXBzZWQgPSBNYXRoLm1heChNYXRoLm1pbihmcmFtZXN0YW1wIC0gY3VycmVudCwgTUFYX0VMQVBTRUQpLCAxKSAqIGRpbGF0aW9uO1xuICAgICAgICBjdXJyZW50ID0gZnJhbWVzdGFtcDtcbiAgICB9LFxuXG4gICAgc3RhcnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnQgPSAoMCwgX3V0aWxzLmN1cnJlbnRUaW1lKSgpO1xuICAgIH0sXG5cbiAgICBnZXRFbGFwc2VkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBlbGFwc2VkO1xuICAgIH1cbn07XG52YXIgc2V0R2xvYmFsRGlsYXRpb24gPSBleHBvcnRzLnNldEdsb2JhbERpbGF0aW9uID0gZnVuY3Rpb24gKG5ld0RpbGF0aW9uKSB7XG4gICAgcmV0dXJuIGRpbGF0aW9uID0gbmV3RGlsYXRpb247XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkwWVhOckwzUnBiV1Z5TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPMEZCUVVFN08wRkJSVUVzU1VGQlRTeGpRVUZqTEVWQlFYQkNPenRCUVVWQkxFbEJRVWtzVlVGQlZTeERRVUZrTzBGQlEwRXNTVUZCU1N4VlFVRlZMRWxCUVdRN1FVRkRRU3hKUVVGSkxGZEJRVmNzUTBGQlpqczdhMEpCUldVN1FVRkRXQ3haUVVGUkxGVkJRVU1zVlVGQlJDeEZRVUZuUWp0QlFVTndRaXhyUWtGQlZTeExRVUZMTEVkQlFVd3NRMEZCVXl4TFFVRkxMRWRCUVV3c1EwRkJVeXhoUVVGaExFOUJRWFJDTEVWQlFTdENMRmRCUVM5Q0xFTkJRVlFzUlVGQmMwUXNRMEZCZEVRc1NVRkJNa1FzVVVGQmNrVTdRVUZEUVN4clFrRkJWU3hWUVVGV08wRkJRMGdzUzBGS1ZUczdRVUZOV0N4WFFVRlBPMEZCUVVFc1pVRkJUU3hWUVVGVkxIbENRVUZvUWp0QlFVRkJMRXRCVGtrN08wRkJVVmdzWjBKQlFWazdRVUZCUVN4bFFVRk5MRTlCUVU0N1FVRkJRVHRCUVZKRUxFTTdRVUZYVWl4SlFVRk5MR2RFUVVGdlFpeFZRVUZETEZkQlFVUTdRVUZCUVN4WFFVRnBRaXhYUVVGWExGZEJRVFZDTzBGQlFVRXNRMEZCTVVJaUxDSm1hV3hsSWpvaWRHbHRaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMnAyWVc1a1pYSmtiMlZ6TDBOdlpHVXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSHNnWTNWeWNtVnVkRlJwYldVZ2ZTQm1jbTl0SUNjdUxpOXBibU12ZFhScGJITW5PMXh1WEc1amIyNXpkQ0JOUVZoZlJVeEJVRk5GUkNBOUlETXpPMXh1WEc1c1pYUWdZM1Z5Y21WdWRDQTlJREE3WEc1c1pYUWdaV3hoY0hObFpDQTlJREUyTGpjN1hHNXNaWFFnWkdsc1lYUnBiMjRnUFNBeE8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQjdYRzRnSUNBZ2RYQmtZWFJsT2lBb1puSmhiV1Z6ZEdGdGNDa2dQVDRnZTF4dUlDQWdJQ0FnSUNCbGJHRndjMlZrSUQwZ1RXRjBhQzV0WVhnb1RXRjBhQzV0YVc0b1puSmhiV1Z6ZEdGdGNDQXRJR04xY25KbGJuUXNJRTFCV0Y5RlRFRlFVMFZFS1N3Z01Ta2dLaUJrYVd4aGRHbHZianRjYmlBZ0lDQWdJQ0FnWTNWeWNtVnVkQ0E5SUdaeVlXMWxjM1JoYlhBN1hHNGdJQ0FnZlN4Y2JseHVJQ0FnSUhOMFlYSjBPaUFvS1NBOVBpQmpkWEp5Wlc1MElEMGdZM1Z5Y21WdWRGUnBiV1VvS1N4Y2JseHVJQ0FnSUdkbGRFVnNZWEJ6WldRNklDZ3BJRDArSUdWc1lYQnpaV1JjYm4wN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCelpYUkhiRzlpWVd4RWFXeGhkR2x2YmlBOUlDaHVaWGRFYVd4aGRHbHZiaWtnUFQ0Z1pHbHNZWFJwYjI0Z1BTQnVaWGRFYVd4aGRHbHZianNpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdGFzay90aW1lci5qc1xuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9UYXNrMiA9IHJlcXVpcmUoJy4uL3Rhc2svVGFzaycpO1xuXG52YXIgX1Rhc2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVGFzazIpO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbnZhciBfZGV0ZWN0ID0gcmVxdWlyZSgnLi4vdmFsdWUtdHlwZXMvZGV0ZWN0Jyk7XG5cbnZhciBfZGV0ZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RldGVjdCk7XG5cbnZhciBfbnVtZXJpY2FsVmFsdWVzID0gcmVxdWlyZSgnLi4vaW5jL251bWVyaWNhbC12YWx1ZXMnKTtcblxudmFyIF9udW1lcmljYWxWYWx1ZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbnVtZXJpY2FsVmFsdWVzKTtcblxudmFyIF9kZXRlY3RBZGFwdGVyID0gcmVxdWlyZSgnLi4vaW5jL2RldGVjdC1hZGFwdGVyJyk7XG5cbnZhciBfZGV0ZWN0QWRhcHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZXRlY3RBZGFwdGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBOVU1fTlVNRVJJQ0FMX1ZBTFVFUyA9IF9udW1lcmljYWxWYWx1ZXMyLmRlZmF1bHQubGVuZ3RoO1xuXG52YXIgZGVmYXVsdFJlbmRlcmVyID0gZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlO1xuICAgIHZhciBhZGFwdGVyID0gX3JlZi5hZGFwdGVyO1xuICAgIHZhciBhZGFwdGVyRGF0YSA9IF9yZWYuYWRhcHRlckRhdGE7XG4gICAgdmFyIGVsZW1lbnQgPSBfcmVmLmVsZW1lbnQ7XG4gICAgcmV0dXJuIGFkYXB0ZXIoZWxlbWVudCwgc3RhdGUsIGFkYXB0ZXJEYXRhKTtcbn07XG5cbnZhciBjb252ZXJ0SWZTaG91bGRCZU51bWJlciA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiAhaXNOYU4odmFsdWUpID8gcGFyc2VGbG9hdCh2YWx1ZSkgOiB2YWx1ZTtcbn07XG5cbnZhciBBY3Rpb24gPSBmdW5jdGlvbiAoX1Rhc2spIHtcbiAgICBfaW5oZXJpdHMoQWN0aW9uLCBfVGFzayk7XG5cbiAgICBmdW5jdGlvbiBBY3Rpb24oKSB7XG4gICAgICAgIHZhciBwcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzBdO1xuXG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBY3Rpb24pO1xuXG4gICAgICAgIHByb3BzLnN0YXRlID0ge307XG4gICAgICAgIHByb3BzLnZhbHVlS2V5cyA9IFtdO1xuICAgICAgICBwcm9wcy5wYXJlbnRLZXlzID0gW107XG4gICAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfVGFzay5jYWxsKHRoaXMsIHByb3BzKSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgIyBTZXQgQWN0aW9uIHByb3BlcnRpZXNcbiAgICAgICAgIyMgU2V0IHVzZXItZGVmaW5lZCBBY3Rpb24gcHJvcGVydGllc1xuICAgICAgICAgQHBhcmFtIFtvYmplY3RdXG4gICAgICAgIEByZXR1cm4gW0FjdGlvbl1cbiAgICAqL1xuXG5cbiAgICBBY3Rpb24ucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIHNldCgpIHtcbiAgICAgICAgdmFyIHByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMF07XG5cbiAgICAgICAgdGhpcy52YWx1ZXMgPSB0aGlzLnZhbHVlcyB8fCB7fTtcblxuICAgICAgICB2YXIgdmFsdWVzID0gcHJvcHMudmFsdWVzO1xuXG4gICAgICAgIHZhciBwcm9wc1RvU2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbJ3ZhbHVlcyddKTtcblxuICAgICAgICB2YXIgaW5oZXJpdGFibGUgPSB7fTtcblxuICAgICAgICAvLyBTZXQgbm9uLWNvbnN1bWVkIHByb3BlcnRpZXNcbiAgICAgICAgX1Rhc2sucHJvdG90eXBlLnNldC5jYWxsKHRoaXMsIHByb3BzVG9TZXQpO1xuXG4gICAgICAgIC8vIERldGVjdCBjb3JyZWN0IGBhZGFwdGVyYCBpZiBub25lIGV4aXN0cyBhbmQgYGVsZW1lbnRgIGlzIGJlaW5nIHNldFxuICAgICAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuYWRhcHRlcikge1xuICAgICAgICAgICAgICAgIC8vIER1Y2t0eXBpc2ggY2hlY2sgZm9yIEFkYXB0ZXJcbiAgICAgICAgICAgICAgICB0aGlzLmFkYXB0ZXIgPSAoMCwgX2RldGVjdEFkYXB0ZXIyLmRlZmF1bHQpKHRoaXMuZWxlbWVudCk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hZGFwdGVyLmdldEVsZW1lbnREYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRhcHRlckRhdGEgPSB0aGlzLmFkYXB0ZXIuZ2V0RWxlbWVudERhdGEodGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5vblJlbmRlcikge1xuICAgICAgICAgICAgICAgIHRoaXMub25SZW5kZXIgPSBkZWZhdWx0UmVuZGVyZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQcmltZSBhbiBvYmplY3QgdG8gaW5oZXJpdCBmcm9tLCB3aXRoIG9ubHkgYHZhbHVlYCBwcm9wZXJ0aWVzXG4gICAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLmRlZmF1bHRWYWx1ZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGVmYXVsdFZhbHVlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNUb1NldC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGluaGVyaXRhYmxlW2tleV0gPSBwcm9wc1RvU2V0W2tleV07XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBpbmhlcml0YWJsZVtrZXldID0gdGhpc1trZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSBleGlzdGluZyB2YWx1ZXMgd2l0aCBpbmhlcml0YWJsZSBwcm9wZXJ0aWVzXG4gICAgICAgIGZvciAodmFyIF9rZXkgaW4gdGhpcy52YWx1ZXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlcy5oYXNPd25Qcm9wZXJ0eShfa2V5KSkge1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWVzW19rZXldID0gX2V4dGVuZHMoe30sIHRoaXMudmFsdWVzW19rZXldLCBpbmhlcml0YWJsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGVcbiAgICAgICAgaWYgKHZhbHVlcykge1xuICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZXModmFsdWVzLCBpbmhlcml0YWJsZSk7XG5cbiAgICAgICAgICAgIC8vIFByZWNvbXB1dGUgbnVtYmVyIG9mIHZhbHVlIGtleSBhbmQgcGFyZW50IGtleXMgdG8gYXZvaWQgcGVyLWZyYW1lIG1lYXN1cmVtZW50XG4gICAgICAgICAgICB0aGlzLm51bVZhbHVlS2V5cyA9IHRoaXMudmFsdWVLZXlzLmxlbmd0aDtcbiAgICAgICAgICAgIHRoaXMubnVtUGFyZW50S2V5cyA9IHRoaXMucGFyZW50S2V5cy5sZW5ndGg7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgQWN0aW9uLnByb3RvdHlwZS5zZXRWYWx1ZXMgPSBmdW5jdGlvbiBzZXRWYWx1ZXModmFsdWVzLCBpbmhlcml0KSB7XG4gICAgICAgIC8vIEl0ZXJhdGUgb3ZlciBhbGwgaW5jb21pbmcgdmFsdWVzIGFuZCBzZXRcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHZhbHVlcykge1xuICAgICAgICAgICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGhhc0NoaWxkcmVuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkcmVuID0ge307XG5cbiAgICAgICAgICAgICAgICAvLyBNZXJnZSBpbnRvIGV4aXN0aW5nIHZhbHVlIG9yIGNyZWF0ZSBuZXdcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWVBbHJlYWR5RXhpc3RzID0gdGhpcy52YWx1ZXNba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHZhciBuZXdWYWx1ZSA9IHZhbHVlQWxyZWFkeUV4aXN0cyA/IF9leHRlbmRzKHt9LCB0aGlzLnZhbHVlc1trZXldKSA6IF9leHRlbmRzKHt9LCBpbmhlcml0KTtcblxuICAgICAgICAgICAgICAgIC8vIElmIHZhbHVlcyBpcyBub3QgYW4gb2JqZWN0LCBhc3NpZ24gdmFsdWUgdG8gZGVmYXVsdCBwcm9wXG4gICAgICAgICAgICAgICAgaWYgKCEoMCwgX3V0aWxzLmlzT2JqKSh2YWx1ZXNba2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWVbdGhpcy5kZWZhdWx0VmFsdWVQcm9wXSA9IHZhbHVlc1trZXldO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gX2V4dGVuZHMoe30sIG5ld1ZhbHVlLCB2YWx1ZXNba2V5XSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gSWYgd2UndmUgZ290IGFuIGFkYXB0ZXIsIGdldCB0aGUgY3VycmVudCB2YWx1ZVxuICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZS5jdXJyZW50ID09PSB1bmRlZmluZWQgJiYgdGhpcy5hZGFwdGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLmN1cnJlbnQgPSBjb252ZXJ0SWZTaG91bGRCZU51bWJlcih0aGlzLmFkYXB0ZXIuZ2V0KHRoaXMuZWxlbWVudCwga2V5KSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlLmZyb20gPT09IHVuZGVmaW5lZCAmJiB0aGlzLmFkYXB0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUuZnJvbSA9IG5ld1ZhbHVlLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gQXBwbHkgZGVmYXVsdCB2YWx1ZSBwcm9wZXJ0aWVzXG4gICAgICAgICAgICAgICAgaWYgKCF2YWx1ZUFscmVhZHlFeGlzdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSBfZXh0ZW5kcyh7fSwgdGhpcy5kZWZhdWx0VmFsdWUsIG5ld1ZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBJZiB3ZSBkb24ndCBoYXZlIGEgdmFsdWUgdHlwZSBhbmQgd2UgZG8gaGF2ZSBhbiBBZGFwdGVyLCBjaGVjayBmb3IgdHlwZSB3aXRoIHZhbHVlIGtleVxuICAgICAgICAgICAgICAgIGlmICghbmV3VmFsdWUudHlwZSAmJiB0aGlzLmFkYXB0ZXIgJiYgdGhpcy5hZGFwdGVyLmNoZWNrVmFsdWVUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLnR5cGUgPSB0aGlzLmFkYXB0ZXIuY2hlY2tWYWx1ZVR5cGUoa2V5KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBJZiB3ZSBzdGlsbCBkb24ndCBoYXZlIGEgdmFsdWUgdHlwZSBhbmQgdGhpcyBpcyB0aGUgZmlyc3QgdGltZSB3ZSd2ZSBzZXQgdGhpcyB2YWx1ZSwgY2hlY2sgbnVtZXJpY2FsIHZhbHVlcyBmb3Igc3RyaW5ncyBhbmQgdGVzdFxuICAgICAgICAgICAgICAgIGlmICghbmV3VmFsdWUudHlwZSAmJiAhdGhpcy52YWx1ZXNba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS50eXBlID0gKDAsIF9kZXRlY3QyLmRlZmF1bHQpKG5ld1ZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBJZiB3ZSBoYXZlIGEgdmFsdWUgdHlwZSwgaGFuZGxlLiBUaGlzIGlzIG15IGxlYXN0IGZhdm91cml0ZSBwYXJ0IG9mIFBvcG1vdGlvbiwgc28uLi4gZW5qb3kuXG4gICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBOVU1fTlVNRVJJQ0FMX1ZBTFVFUzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJvcE5hbWUgPSBfbnVtZXJpY2FsVmFsdWVzMi5kZWZhdWx0W2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlUHJvcCA9IG5ld1ZhbHVlW3Byb3BOYW1lXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhpcyBwcm9wIGlzIGEgc3RyaW5nIGFuZCB3ZSBoYXZlIGEgc3BsaXR0ZXIsIHNwbGl0XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUudHlwZS5oYXNPd25Qcm9wZXJ0eSgnc3BsaXQnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzcGxpdFByb3AgPSAoMCwgX3V0aWxzLmlzU3RyaW5nKSh2YWx1ZVByb3ApID8gbmV3VmFsdWUudHlwZS5zcGxpdCh2YWx1ZVByb3ApIDoge307XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBzcGxpdEtleSBpbiBzcGxpdFByb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNwbGl0UHJvcC5oYXNPd25Qcm9wZXJ0eShzcGxpdEtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb21iaW5lZEtleSA9IGtleSArIHNwbGl0S2V5O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSBkb24ndCBoYXZlIGEgY2hpbGQgdmFsdWUgZm9yIHRoaXMga2V5LCBtYWtlIG9uZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjaGlsZHJlbltjb21iaW5lZEtleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGVmYXVsdFZhbHVlID0gbmV3VmFsdWUudHlwZS5kZWZhdWx0UHJvcHMgJiYgbmV3VmFsdWUudHlwZS5kZWZhdWx0UHJvcHNbc3BsaXRLZXldID8gbmV3VmFsdWUudHlwZS5kZWZhdWx0UHJvcHNbc3BsaXRLZXldIDogbmV3VmFsdWUudHlwZS5kZWZhdWx0UHJvcHMgfHwge307XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbltjb21iaW5lZEtleV0gPSBfZXh0ZW5kcyh7fSwgbmV3VmFsdWUsIGRlZmF1bHRWYWx1ZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRLZXk6IHNwbGl0S2V5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgY2hpbGRyZW5bY29tYmluZWRLZXldLnR5cGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc0NoaWxkcmVuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuW2NvbWJpbmVkS2V5XVtwcm9wTmFtZV0gPSBwYXJzZUZsb2F0KHNwbGl0UHJvcFtzcGxpdEtleV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgd2UgaGF2ZSBhIHRlbXBsYXRlIGZ1bmN0aW9uLCBnZW5lcmF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbmV3VmFsdWUudGVtcGxhdGUgJiYgbmV3VmFsdWUudHlwZS50ZW1wbGF0ZSAmJiAoMCwgX3V0aWxzLmlzU3RyaW5nKSh2YWx1ZVByb3ApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLnRlbXBsYXRlID0gbmV3VmFsdWUudHlwZS50ZW1wbGF0ZSh2YWx1ZVByb3ApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobmV3VmFsdWUudHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IF9leHRlbmRzKHt9LCBuZXdWYWx1ZSwgbmV3VmFsdWUudHlwZS5kZWZhdWx0UHJvcHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVQcm9wICE9PSB1bmRlZmluZWQgJiYgbmV3VmFsdWUudHlwZS5wYXJzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlW3Byb3BOYW1lXSA9IG5ld1ZhbHVlLnR5cGUucGFyc2UodmFsdWVQcm9wLCBuZXdWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IC8vIEVuZCB2YWx1ZSB0eXBlIG5vbnNlbnNlXG5cbiAgICAgICAgICAgICAgICAvLyBTZXQgYHByZXZgIHRvIGBjdXJyZW50YCBmb3IgZmlyc3QgZnJhbWUgYWZ0ZXIgc2V0XG4gICAgICAgICAgICAgICAgbmV3VmFsdWUucHJldiA9IG5ld1ZhbHVlLmN1cnJlbnQ7XG5cbiAgICAgICAgICAgICAgICAvLyBJZiB0aGlzIHZhbHVlIGRvZXNuJ3QgaGF2ZSBjaGlsZHJlbiwgYWRkIHRvIHZhbHVlS2V5c1xuICAgICAgICAgICAgICAgIGlmICghaGFzQ2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudmFsdWVLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWVLZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIE9yIGFkZCB0byBwYXJlbnRLZXlzXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLmNoaWxkcmVuID0gbmV3VmFsdWUuY2hpbGRyZW4gfHwge307XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50S2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0VmFsdWVzKGNoaWxkcmVuKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZXNba2V5XSA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qXG4gICAgICAgIERlY2lkZSB3aGV0aGVyIHRoaXMgQWN0aW9uIHdpbGwgcmVuZGVyIG9uIG5leHQgZnJhbWVcbiAgICAgICAgIEBwYXJhbSBbQWN0aW9uXVxuICAgICAgICBAcGFyYW0gW251bWJlcl1cbiAgICAgICAgQHBhcmFtIFtudW1iZXJdXG4gICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm4gdHJ1ZSB0byByZW5kZXJcbiAgICAqL1xuXG5cbiAgICBBY3Rpb24ucHJvdG90eXBlLndpbGxSZW5kZXIgPSBmdW5jdGlvbiB3aWxsUmVuZGVyKGFjdGlvbiwgZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgICAgICB2YXIgaGFzQ2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vIENoZWNrIGlmIGJhc2UgdmFsdWVzIGhhdmUgdXBkYXRlZFxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSB0aGlzLnZhbHVlS2V5c1tpXTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG5cbiAgICAgICAgICAgIC8vIFJ1biB0cmFuc2Zvcm0gZnVuY3Rpb24gKGlmIHByZXNlbnQpXG4gICAgICAgICAgICBpZiAodmFsdWUudHJhbnNmb3JtKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IHZhbHVlLnRyYW5zZm9ybSh2YWx1ZS5jdXJyZW50LCBrZXksIHRoaXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDYXAgbWluaW11bVxuICAgICAgICAgICAgaWYgKCgwLCBfdXRpbHMuaXNOdW0pKHZhbHVlLm1pbikpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gTWF0aC5tYXgodmFsdWUuY3VycmVudCwgdmFsdWUubWluKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ2FwIG1heGltdW1cbiAgICAgICAgICAgIGlmICgoMCwgX3V0aWxzLmlzTnVtKSh2YWx1ZS5tYXgpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IE1hdGgubWluKHZhbHVlLmN1cnJlbnQsIHZhbHVlLm1heCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJvdW5kIG51bWJlclxuICAgICAgICAgICAgaWYgKHZhbHVlLnJvdW5kKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IE1hdGgucm91bmQodmFsdWUuY3VycmVudCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhbHVlLmZyYW1lQ2hhbmdlID0gdmFsdWUuY3VycmVudCAtIHZhbHVlLnByZXY7XG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSB2ZWxvY2l0eVxuICAgICAgICAgICAgaWYgKCF0aGlzLmNhbGN1bGF0ZXNWZWxvY2l0eSkge1xuICAgICAgICAgICAgICAgIHZhbHVlLnZlbG9jaXR5ID0gKDAsIF9jYWxjLnNwZWVkUGVyU2Vjb25kKSh2YWx1ZS5mcmFtZUNoYW5nZSwgZWxhcHNlZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIHRoaXMgdmFsdWUgaGFzIGNoYW5nZWRcbiAgICAgICAgICAgIGlmICh2YWx1ZS5wcmV2ICE9PSB2YWx1ZS5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdmFsdWUucHJldiA9IHZhbHVlLmN1cnJlbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEFwcGVuZCB1bml0XG4gICAgICAgICAgICB2YXIgdmFsdWVGb3JTdGF0ZSA9IHZhbHVlLnR5cGUgJiYgdmFsdWUudHlwZS5zZXJpYWxpemUgPyB2YWx1ZS50eXBlLnNlcmlhbGl6ZSh2YWx1ZS5jdXJyZW50LCB2YWx1ZSkgOiB2YWx1ZS5jdXJyZW50O1xuXG4gICAgICAgICAgICAvLyBBZGQgdG8gc3RhdGUgaWYgdGhpcyBpcyBub3QgYSBjaGlsZCB2YXVlXG4gICAgICAgICAgICBpZiAoIXZhbHVlLnBhcmVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVba2V5XSA9IHZhbHVlRm9yU3RhdGU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWVzW3ZhbHVlLnBhcmVudF0uY2hpbGRyZW5bdmFsdWUuY2hpbGRLZXldID0gdmFsdWVGb3JTdGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSBwYXJlbnQgdmFsdWVzXG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB0aGlzLm51bVBhcmVudEtleXM7IF9pKyspIHtcbiAgICAgICAgICAgIHZhciBfa2V5MiA9IHRoaXMucGFyZW50S2V5c1tfaV07XG4gICAgICAgICAgICB2YXIgX3ZhbHVlID0gdGhpcy52YWx1ZXNbX2tleTJdO1xuXG4gICAgICAgICAgICBfdmFsdWUuY3VycmVudCA9IF92YWx1ZS50eXBlLmNvbWJpbmUoX3ZhbHVlLmNoaWxkcmVuLCBfdmFsdWUudGVtcGxhdGUpO1xuXG4gICAgICAgICAgICB0aGlzLnN0YXRlW19rZXkyXSA9IF92YWx1ZS5jdXJyZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMub25GcmFtZSkge1xuICAgICAgICAgICAgdGhpcy5vbkZyYW1lKHRoaXMuc3RhdGUsIHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMub25DbGVhbnVwID8gdHJ1ZSA6IGhhc0NoYW5nZWQ7XG4gICAgfTtcblxuICAgIEFjdGlvbi5wcm90b3R5cGUuaW5oZXJpdCA9IGZ1bmN0aW9uIGluaGVyaXQoKSB7XG4gICAgICAgIHZhciBwcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzBdO1xuICAgICAgICB2YXIgdmFsdWVzID0gcHJvcHMudmFsdWVzO1xuXG4gICAgICAgIHZhciBwcm9wc1RvU2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbJ3ZhbHVlcyddKTtcblxuICAgICAgICB2YXIgbmV3QWN0aW9uID0gX1Rhc2sucHJvdG90eXBlLmluaGVyaXQuY2FsbCh0aGlzLCBwcm9wc1RvU2V0KTtcblxuICAgICAgICBpZiAodmFsdWVzKSB7XG4gICAgICAgICAgICBuZXdBY3Rpb24uc2V0KHsgdmFsdWVzOiB2YWx1ZXMgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3QWN0aW9uO1xuICAgIH07XG5cbiAgICBBY3Rpb24ucHJvdG90eXBlLnBhdXNlID0gZnVuY3Rpb24gcGF1c2UoKSB7XG4gICAgICAgIF9UYXNrLnByb3RvdHlwZS5zdG9wLmNhbGwodGhpcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBBY3Rpb24ucHJvdG90eXBlLnJlc3VtZSA9IGZ1bmN0aW9uIHJlc3VtZSgpIHtcbiAgICAgICAgX1Rhc2sucHJvdG90eXBlLnN0YXJ0LmNhbGwodGhpcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBBY3Rpb24ucHJvdG90eXBlLnRvZ2dsZSA9IGZ1bmN0aW9uIHRvZ2dsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNBY3RpdmUgPyB0aGlzLnBhdXNlKCkgOiB0aGlzLnJlc3VtZSgpO1xuICAgIH07XG5cbiAgICBBY3Rpb24ucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICAgIHZhciB2YWx1ZXMgPSB0aGlzLnZhbHVlcztcbiAgICAgICAgX1Rhc2sucHJvdG90eXBlLnN0YXJ0LmNhbGwodGhpcyk7XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHZhbHVlcykge1xuICAgICAgICAgICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVzW2tleV0ucHJldiA9IHZhbHVlc1trZXldLm9yaWdpbiA9IHZhbHVlc1trZXldLmN1cnJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgQWN0aW9uLmV4dGVuZERlZmF1bHRWYWx1ZSA9IGZ1bmN0aW9uIGV4dGVuZERlZmF1bHRWYWx1ZShwcm9wcykge1xuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHRoaXMucHJvdG90eXBlLmRlZmF1bHRWYWx1ZSwgcHJvcHMpO1xuICAgIH07XG5cbiAgICBBY3Rpb24uZXh0ZW5kRGVmYXVsdFByb3BzID0gZnVuY3Rpb24gZXh0ZW5kRGVmYXVsdFByb3BzKHByb3BzKSB7XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgdGhpcy5wcm90b3R5cGUuZGVmYXVsdFByb3BzLCBwcm9wcyk7XG4gICAgfTtcblxuICAgIHJldHVybiBBY3Rpb247XG59KF9UYXNrMy5kZWZhdWx0KTtcblxuQWN0aW9uLnByb3RvdHlwZS5kZWZhdWx0VmFsdWVQcm9wID0gJ2N1cnJlbnQnO1xuQWN0aW9uLnByb3RvdHlwZS5kZWZhdWx0VmFsdWUgPSB7XG4gICAgY3VycmVudDogMCxcbiAgICB2ZWxvY2l0eTogMCxcbiAgICByb3VuZDogZmFsc2UsXG4gICAgbWluOiB1bmRlZmluZWQsXG4gICAgbWF4OiB1bmRlZmluZWQsXG4gICAgdHJhbnNmb3JtOiB1bmRlZmluZWRcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEFjdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDBGamRHbHZiaTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdRVUZCUVRzN096dEJRVU5CT3p0QlFVTkJPenRCUVVOQk96czdPMEZCUTBFN096czdRVUZEUVRzN096czdPenM3T3pzN096czdRVUZGUVN4SlFVRk5MSFZDUVVGMVFpd3dRa0ZCYVVJc1RVRkJPVU03TzBGQlJVRXNTVUZCVFN4clFrRkJhMEk3UVVGQlFTeFJRVUZITEV0QlFVZ3NVVUZCUnl4TFFVRklPMEZCUVVFc1VVRkJWU3hQUVVGV0xGRkJRVlVzVDBGQlZqdEJRVUZCTEZGQlFXMUNMRmRCUVc1Q0xGRkJRVzFDTEZkQlFXNUNPMEZCUVVFc1VVRkJaME1zVDBGQmFFTXNVVUZCWjBNc1QwRkJhRU03UVVGQlFTeFhRVUU0UXl4UlFVRlJMRTlCUVZJc1JVRkJhVUlzUzBGQmFrSXNSVUZCZDBJc1YwRkJlRUlzUTBGQk9VTTdRVUZCUVN4RFFVRjRRanM3UVVGRlFTeEpRVUZOTERCQ1FVRXdRaXhWUVVGRExFdEJRVVE3UVVGQlFTeFhRVUZYTEVOQlFVTXNUVUZCVFN4TFFVRk9MRU5CUVVRc1IwRkJaMElzVjBGQlZ5eExRVUZZTEVOQlFXaENMRWRCUVc5RExFdEJRUzlETzBGQlFVRXNRMEZCYUVNN08wbEJSVTBzVFRzN08wRkJRMFlzYzBKQlFYZENPMEZCUVVFc1dVRkJXaXhMUVVGWkxIbEVRVUZLTEVWQlFVazdPMEZCUVVFN08wRkJRM0JDTEdOQlFVMHNTMEZCVGl4SFFVRmpMRVZCUVdRN1FVRkRRU3hqUVVGTkxGTkJRVTRzUjBGQmEwSXNSVUZCYkVJN1FVRkRRU3hqUVVGTkxGVkJRVTRzUjBGQmJVSXNSVUZCYmtJN1FVRkliMElzWjBSQlNYQkNMR2xDUVVGTkxFdEJRVTRzUTBGS2IwSTdRVUZMZGtJN096czdPenM3T3pzN2NVSkJVMFFzUnl4clFrRkJaMEk3UVVGQlFTeFpRVUZhTEV0QlFWa3NlVVJCUVVvc1JVRkJTVHM3UVVGRFdpeGhRVUZMTEUxQlFVd3NSMEZCWXl4TFFVRkxMRTFCUVV3c1NVRkJaU3hGUVVFM1FqczdRVUZFV1N4WlFVZEtMRTFCU0Vrc1IwRkhjMElzUzBGSWRFSXNRMEZIU2l4TlFVaEpPenRCUVVGQkxGbEJSMDhzVlVGSVVDdzBRa0ZIYzBJc1MwRklkRUk3TzBGQlNWb3NXVUZCVFN4alFVRmpMRVZCUVhCQ096czdRVUZIUVN4M1FrRkJUU3hIUVVGT0xGbEJRVlVzVlVGQlZqczdPMEZCUjBFc1dVRkJTU3hMUVVGTExFOUJRVlFzUlVGQmEwSTdRVUZEWkN4blFrRkJTU3hEUVVGRExFdEJRVXNzVDBGQlZpeEZRVUZ0UWpzN1FVRkZaaXh4UWtGQlN5eFBRVUZNTEVkQlFXVXNOa0pCUVdNc1MwRkJTeXhQUVVGdVFpeERRVUZtT3p0QlFVVkJMRzlDUVVGSkxFdEJRVXNzVDBGQlRDeERRVUZoTEdOQlFXcENMRVZCUVdsRE8wRkJRemRDTEhsQ1FVRkxMRmRCUVV3c1IwRkJiVUlzUzBGQlN5eFBRVUZNTEVOQlFXRXNZMEZCWWl4RFFVRTBRaXhMUVVGTExFOUJRV3BETEVOQlFXNUNPMEZCUTBnN1FVRkRTanM3UVVGRlJDeG5Ra0ZCU1N4RFFVRkRMRXRCUVVzc1VVRkJWaXhGUVVGdlFqdEJRVU5vUWl4eFFrRkJTeXhSUVVGTUxFZEJRV2RDTEdWQlFXaENPMEZCUTBnN1FVRkRTanM3TzBGQlIwUXNZVUZCU3l4SlFVRkpMRWRCUVZRc1NVRkJaMElzUzBGQlN5eFpRVUZ5UWl4RlFVRnRRenRCUVVNdlFpeG5Ra0ZCU1N4TFFVRkxMRmxCUVV3c1EwRkJhMElzWTBGQmJFSXNRMEZCYVVNc1IwRkJha01zUTBGQlNpeEZRVUV5UXp0QlFVTjJReXh2UWtGQlNTeFhRVUZYTEdOQlFWZ3NRMEZCTUVJc1IwRkJNVUlzUTBGQlNpeEZRVUZ2UXp0QlFVTm9ReXhuUTBGQldTeEhRVUZhTEVsQlFXMUNMRmRCUVZjc1IwRkJXQ3hEUVVGdVFqdEJRVU5JTEdsQ1FVWkVMRTFCUlU4c1NVRkJTU3hMUVVGTExFZEJRVXdzVFVGQll5eFRRVUZzUWl4RlFVRTJRanRCUVVOb1F5eG5RMEZCV1N4SFFVRmFMRWxCUVcxQ0xFdEJRVXNzUjBGQlRDeERRVUZ1UWp0QlFVTklPMEZCUTBvN1FVRkRTanM3TzBGQlIwUXNZVUZCU3l4SlFVRkpMRWxCUVZRc1NVRkJaMElzUzBGQlN5eE5RVUZ5UWl4RlFVRTJRanRCUVVONlFpeG5Ra0ZCU1N4TFFVRkxMRTFCUVV3c1EwRkJXU3hqUVVGYUxFTkJRVEpDTEVsQlFUTkNMRU5CUVVvc1JVRkJjVU03UVVGRGFrTXNjVUpCUVVzc1RVRkJUQ3hEUVVGWkxFbEJRVm9zYVVKQlFYZENMRXRCUVVzc1RVRkJUQ3hEUVVGWkxFbEJRVm9zUTBGQmVFSXNSVUZCTmtNc1YwRkJOME03UVVGRFNEdEJRVU5LT3pzN1FVRkhSQ3haUVVGSkxFMUJRVW9zUlVGQldUdEJRVU5TTEdsQ1FVRkxMRk5CUVV3c1EwRkJaU3hOUVVGbUxFVkJRWFZDTEZkQlFYWkNPenM3UVVGSFFTeHBRa0ZCU3l4WlFVRk1MRWRCUVc5Q0xFdEJRVXNzVTBGQlRDeERRVUZsTEUxQlFXNURPMEZCUTBFc2FVSkJRVXNzWVVGQlRDeEhRVUZ4UWl4TFFVRkxMRlZCUVV3c1EwRkJaMElzVFVGQmNrTTdRVUZEU0RzN1FVRkZSQ3hsUVVGUExFbEJRVkE3UVVGRFNDeExPenR4UWtGRlJDeFRMSE5DUVVGVkxFMHNSVUZCVVN4UExFVkJRVk03TzBGQlJYWkNMR0ZCUVVzc1NVRkJTU3hIUVVGVUxFbEJRV2RDTEUxQlFXaENMRVZCUVhkQ08wRkJRM0JDTEdkQ1FVRkpMRTlCUVU4c1kwRkJVQ3hEUVVGelFpeEhRVUYwUWl4RFFVRktMRVZCUVdkRE8wRkJRelZDTEc5Q1FVRkpMR05CUVdNc1MwRkJiRUk3UVVGRFFTeHZRa0ZCVFN4WFFVRlhMRVZCUVdwQ096czdRVUZIUVN4dlFrRkJUU3h4UWtGQmNVSXNTMEZCU3l4TlFVRk1MRU5CUVZrc1IwRkJXaXhOUVVGeFFpeFRRVUZvUkR0QlFVTkJMRzlDUVVGSkxGZEJRVmNzYTBOQlFUQkNMRXRCUVVzc1RVRkJUQ3hEUVVGWkxFZEJRVm9zUTBGQk1VSXNhVUpCUVc5RUxFOUJRWEJFTEVOQlFXWTdPenRCUVVkQkxHOUNRVUZKTEVOQlFVTXNhMEpCUVUwc1QwRkJUeXhIUVVGUUxFTkJRVTRzUTBGQlRDeEZRVUY1UWp0QlFVTnlRaXcyUWtGQlV5eExRVUZMTEdkQ1FVRmtMRWxCUVd0RExFOUJRVThzUjBGQlVDeERRVUZzUXp0QlFVTklMR2xDUVVaRUxFMUJSVTg3UVVGRFNDdzBRMEZCWjBJc1VVRkJhRUlzUlVGQk5rSXNUMEZCVHl4SFFVRlFMRU5CUVRkQ08wRkJRMGc3T3p0QlFVZEVMRzlDUVVGSkxGTkJRVk1zVDBGQlZDeExRVUZ4UWl4VFFVRnlRaXhKUVVGclF5eExRVUZMTEU5QlFUTkRMRVZCUVc5RU8wRkJRMmhFTERaQ1FVRlRMRTlCUVZRc1IwRkJiVUlzZDBKQlFYZENMRXRCUVVzc1QwRkJUQ3hEUVVGaExFZEJRV0lzUTBGQmFVSXNTMEZCU3l4UFFVRjBRaXhGUVVFclFpeEhRVUV2UWl4RFFVRjRRaXhEUVVGdVFqdEJRVU5JT3p0QlFVVkVMRzlDUVVGSkxGTkJRVk1zU1VGQlZDeExRVUZyUWl4VFFVRnNRaXhKUVVFclFpeExRVUZMTEU5QlFYaERMRVZCUVdsRU8wRkJRemRETERaQ1FVRlRMRWxCUVZRc1IwRkJaMElzVTBGQlV5eFBRVUY2UWp0QlFVTklPenM3UVVGSFJDeHZRa0ZCU1N4RFFVRkRMR3RDUVVGTUxFVkJRWGxDTzBGQlEzSkNMRFJEUVVGblFpeExRVUZMTEZsQlFYSkNMRVZCUVhORExGRkJRWFJETzBGQlEwZzdPenRCUVVkRUxHOUNRVUZKTEVOQlFVTXNVMEZCVXl4SlFVRldMRWxCUVd0Q0xFdEJRVXNzVDBGQmRrSXNTVUZCYTBNc1MwRkJTeXhQUVVGTUxFTkJRV0VzWTBGQmJrUXNSVUZCYlVVN1FVRkRMMFFzTmtKQlFWTXNTVUZCVkN4SFFVRm5RaXhMUVVGTExFOUJRVXdzUTBGQllTeGpRVUZpTEVOQlFUUkNMRWRCUVRWQ0xFTkJRV2hDTzBGQlEwZzdPenRCUVVkRUxHOUNRVUZKTEVOQlFVTXNVMEZCVXl4SlFVRldMRWxCUVd0Q0xFTkJRVU1zUzBGQlN5eE5RVUZNTEVOQlFWa3NSMEZCV2l4RFFVRjJRaXhGUVVGNVF6dEJRVU55UXl3MlFrRkJVeXhKUVVGVUxFZEJRV2RDTEhOQ1FVRm5RaXhSUVVGb1FpeERRVUZvUWp0QlFVTklPenM3UVVGSFJDeHZRa0ZCU1N4VFFVRlRMRWxCUVdJc1JVRkJiVUk3UVVGRFppeDVRa0ZCU3l4SlFVRkpMRWxCUVVrc1EwRkJZaXhGUVVGblFpeEpRVUZKTEc5Q1FVRndRaXhGUVVFd1F5eEhRVUV4UXl4RlFVRXJRenRCUVVNelF5dzBRa0ZCVFN4WFFVRlhMREJDUVVGcFFpeERRVUZxUWl4RFFVRnFRanRCUVVOQkxEUkNRVUZOTEZsQlFWa3NVMEZCVXl4UlFVRlVMRU5CUVd4Q096czdRVUZIUVN3MFFrRkJTU3hUUVVGVExFbEJRVlFzUTBGQll5eGpRVUZrTEVOQlFUWkNMRTlCUVRkQ0xFTkJRVW9zUlVGQk1rTTdRVUZEZGtNc1owTkJRVTBzV1VGQldTeHhRa0ZCVXl4VFFVRlVMRWxCUVhOQ0xGTkJRVk1zU1VGQlZDeERRVUZqTEV0QlFXUXNRMEZCYjBJc1UwRkJjRUlzUTBGQmRFSXNSMEZCZFVRc1JVRkJla1U3TzBGQlJVRXNhVU5CUVVzc1NVRkJTU3hSUVVGVUxFbEJRWEZDTEZOQlFYSkNMRVZCUVdkRE8wRkJRelZDTEc5RFFVRkpMRlZCUVZVc1kwRkJWaXhEUVVGNVFpeFJRVUY2UWl4RFFVRktMRVZCUVhkRE8wRkJRM0JETEhkRFFVRk5MR05CUVdNc1RVRkJUU3hSUVVFeFFqczdPMEZCUjBFc2QwTkJRVWtzUTBGQlF5eFRRVUZUTEZkQlFWUXNRMEZCVEN4RlFVRTBRanRCUVVONFFpdzBRMEZCVFN4bFFVRm5RaXhUUVVGVExFbEJRVlFzUTBGQll5eFpRVUZrTEVsQlFUaENMRk5CUVZNc1NVRkJWQ3hEUVVGakxGbEJRV1FzUTBGQk1rSXNVVUZCTTBJc1EwRkJMMElzUjBGQmRVVXNVMEZCVXl4SlFVRlVMRU5CUVdNc1dVRkJaQ3hEUVVFeVFpeFJRVUV6UWl4RFFVRjJSU3hIUVVFNFJ5eFRRVUZUTEVsQlFWUXNRMEZCWXl4WlFVRmtMRWxCUVRoQ0xFVkJRV3BMT3p0QlFVVkJMR2xFUVVGVExGZEJRVlFzYVVKQlEwOHNVVUZFVUN4RlFVVlBMRmxCUmxBN1FVRkhTU3h2UkVGQlVTeEhRVWhhTzBGQlNVa3NjMFJCUVZVN1FVRktaRHM3UVVGUFFTd3JRMEZCVHl4VFFVRlRMRmRCUVZRc1JVRkJjMElzU1VGQk4wSTdRVUZEU0RzN1FVRkZSQ3hyUkVGQll5eEpRVUZrTzBGQlEwRXNOa05CUVZNc1YwRkJWQ3hGUVVGelFpeFJRVUYwUWl4SlFVRnJReXhYUVVGWExGVkJRVlVzVVVGQlZpeERRVUZZTEVOQlFXeERPMEZCUTBnN1FVRkRTanM3TzBGQlIwUXNaME5CUVVrc1EwRkJReXhUUVVGVExGRkJRVllzU1VGQmMwSXNVMEZCVXl4SlFVRlVMRU5CUVdNc1VVRkJjRU1zU1VGQlowUXNjVUpCUVZNc1UwRkJWQ3hEUVVGd1JDeEZRVUY1UlR0QlFVTnlSU3g1UTBGQlV5eFJRVUZVTEVkQlFXOUNMRk5CUVZNc1NVRkJWQ3hEUVVGakxGRkJRV1FzUTBGQmRVSXNVMEZCZGtJc1EwRkJjRUk3UVVGRFNEdEJRVU5LTEhsQ1FUbENSQ3hOUVRoQ1R5eEpRVUZKTEZOQlFWTXNTVUZCVkN4RFFVRmpMRmxCUVd4Q0xFVkJRV2RETzBGQlEyNURMRzlFUVVGblFpeFJRVUZvUWl4RlFVRTJRaXhUUVVGVExFbEJRVlFzUTBGQll5eFpRVUV6UXp0QlFVTklPenRCUVVWRUxEUkNRVUZKTEdOQlFXTXNVMEZCWkN4SlFVRXlRaXhUUVVGVExFbEJRVlFzUTBGQll5eExRVUUzUXl4RlFVRnZSRHRCUVVOb1JDeHhRMEZCVXl4UlFVRlVMRWxCUVhGQ0xGTkJRVk1zU1VGQlZDeERRVUZqTEV0QlFXUXNRMEZCYjBJc1UwRkJjRUlzUlVGQkswSXNVVUZCTDBJc1EwRkJja0k3UVVGRFNEdEJRVU5LTzBGQlEwb3NhVUk3T3p0QlFVZEVMSGxDUVVGVExFbEJRVlFzUjBGQlowSXNVMEZCVXl4UFFVRjZRanM3TzBGQlIwRXNiMEpCUVVrc1EwRkJReXhYUVVGTUxFVkJRV3RDTzBGQlEyUXNkMEpCUVVrc1MwRkJTeXhUUVVGTUxFTkJRV1VzVDBGQlppeERRVUYxUWl4SFFVRjJRaXhOUVVGblF5eERRVUZETEVOQlFYSkRMRVZCUVhkRE8wRkJRM0JETERaQ1FVRkxMRk5CUVV3c1EwRkJaU3hKUVVGbUxFTkJRVzlDTEVkQlFYQkNPMEZCUTBnN096dEJRVWRLTEdsQ1FVNUVMRTFCVFU4N1FVRkRTQ3hwUTBGQlV5eFJRVUZVTEVkQlFXOUNMRk5CUVZNc1VVRkJWQ3hKUVVGeFFpeEZRVUY2UXpzN1FVRkZRU3cwUWtGQlNTeExRVUZMTEZWQlFVd3NRMEZCWjBJc1QwRkJhRUlzUTBGQmQwSXNSMEZCZUVJc1RVRkJhVU1zUTBGQlF5eERRVUYwUXl4RlFVRjVRenRCUVVOeVF5eHBRMEZCU3l4VlFVRk1MRU5CUVdkQ0xFbEJRV2hDTEVOQlFYRkNMRWRCUVhKQ08wRkJRMGc3TzBGQlJVUXNOa0pCUVVzc1UwRkJUQ3hEUVVGbExGRkJRV1k3UVVGRFNEczdRVUZGUkN4eFFrRkJTeXhOUVVGTUxFTkJRVmtzUjBGQldpeEpRVUZ0UWl4UlFVRnVRanRCUVVOSU8wRkJRMG83UVVGRFNpeExPenM3T3pzN096czdPenR4UWtGVlJDeFZMSFZDUVVGWExFMHNSVUZCVVN4VkxFVkJRVmtzVHl4RlFVRlRPMEZCUTNCRExGbEJRVWtzWVVGQllTeExRVUZxUWpzN08wRkJSMEVzWVVGQlN5eEpRVUZKTEVsQlFVa3NRMEZCWWl4RlFVRm5RaXhKUVVGSkxFdEJRVXNzV1VGQmVrSXNSVUZCZFVNc1IwRkJka01zUlVGQk5FTTdRVUZEZUVNc1owSkJRVTBzVFVGQlRTeExRVUZMTEZOQlFVd3NRMEZCWlN4RFFVRm1MRU5CUVZvN1FVRkRRU3huUWtGQlRTeFJRVUZSTEV0QlFVc3NUVUZCVEN4RFFVRlpMRWRCUVZvc1EwRkJaRHM3TzBGQlIwRXNaMEpCUVVrc1RVRkJUU3hUUVVGV0xFVkJRWEZDTzBGQlEycENMSE5DUVVGTkxFOUJRVTRzUjBGQlowSXNUVUZCVFN4VFFVRk9MRU5CUVdkQ0xFMUJRVTBzVDBGQmRFSXNSVUZCSzBJc1IwRkJMMElzUlVGQmIwTXNTVUZCY0VNc1EwRkJhRUk3UVVGRFNEczdPMEZCUjBRc1owSkJRVWtzYTBKQlFVMHNUVUZCVFN4SFFVRmFMRU5CUVVvc1JVRkJjMEk3UVVGRGJFSXNjMEpCUVUwc1QwRkJUaXhIUVVGblFpeExRVUZMTEVkQlFVd3NRMEZCVXl4TlFVRk5MRTlCUVdZc1JVRkJkMElzVFVGQlRTeEhRVUU1UWl4RFFVRm9RanRCUVVOSU96czdRVUZIUkN4blFrRkJTU3hyUWtGQlRTeE5RVUZOTEVkQlFWb3NRMEZCU2l4RlFVRnpRanRCUVVOc1FpeHpRa0ZCVFN4UFFVRk9MRWRCUVdkQ0xFdEJRVXNzUjBGQlRDeERRVUZUTEUxQlFVMHNUMEZCWml4RlFVRjNRaXhOUVVGTkxFZEJRVGxDTEVOQlFXaENPMEZCUTBnN096dEJRVWRFTEdkQ1FVRkpMRTFCUVUwc1MwRkJWaXhGUVVGcFFqdEJRVU5pTEhOQ1FVRk5MRTlCUVU0c1IwRkJaMElzUzBGQlN5eExRVUZNTEVOQlFWY3NUVUZCVFN4UFFVRnFRaXhEUVVGb1FqdEJRVU5JT3p0QlFVVkVMR3RDUVVGTkxGZEJRVTRzUjBGQmIwSXNUVUZCVFN4UFFVRk9MRWRCUVdkQ0xFMUJRVTBzU1VGQk1VTTdPenRCUVVkQkxHZENRVUZKTEVOQlFVTXNTMEZCU3l4clFrRkJWaXhGUVVFNFFqdEJRVU14UWl4elFrRkJUU3hSUVVGT0xFZEJRV2xDTERCQ1FVRmxMRTFCUVUwc1YwRkJja0lzUlVGQmEwTXNUMEZCYkVNc1EwRkJha0k3UVVGRFNEczdPMEZCUjBRc1owSkJRVWtzVFVGQlRTeEpRVUZPTEV0QlFXVXNUVUZCVFN4UFFVRjZRaXhGUVVGclF6dEJRVU01UWl3MlFrRkJZU3hKUVVGaU8wRkJRMEVzYzBKQlFVMHNTVUZCVGl4SFFVRmhMRTFCUVUwc1QwRkJia0k3UVVGRFNEczdPMEZCUjBRc1owSkJRVTBzWjBKQlFXbENMRTFCUVUwc1NVRkJUaXhKUVVGakxFMUJRVTBzU1VGQlRpeERRVUZYTEZOQlFURkNMRWRCUVhWRExFMUJRVTBzU1VGQlRpeERRVUZYTEZOQlFWZ3NRMEZCY1VJc1RVRkJUU3hQUVVFelFpeEZRVUZ2UXl4TFFVRndReXhEUVVGMlF5eEhRVUZ2Uml4TlFVRk5MRTlCUVdoSU96czdRVUZIUVN4blFrRkJTU3hEUVVGRExFMUJRVTBzVFVGQldDeEZRVUZ0UWp0QlFVTm1MSEZDUVVGTExFdEJRVXdzUTBGQlZ5eEhRVUZZTEVsQlFXdENMR0ZCUVd4Q08wRkJRMGdzWVVGR1JDeE5RVVZQTzBGQlEwZ3NjVUpCUVVzc1RVRkJUQ3hEUVVGWkxFMUJRVTBzVFVGQmJFSXNSVUZCTUVJc1VVRkJNVUlzUTBGQmJVTXNUVUZCVFN4UlFVRjZReXhKUVVGeFJDeGhRVUZ5UkR0QlFVTklPMEZCUTBvN096dEJRVWRFTEdGQlFVc3NTVUZCU1N4TFFVRkpMRU5CUVdJc1JVRkJaMElzUzBGQlNTeExRVUZMTEdGQlFYcENMRVZCUVhkRExFbEJRWGhETEVWQlFUWkRPMEZCUTNwRExHZENRVUZOTEZGQlFVMHNTMEZCU3l4VlFVRk1MRU5CUVdkQ0xFVkJRV2hDTEVOQlFWbzdRVUZEUVN4blFrRkJUU3hUUVVGUkxFdEJRVXNzVFVGQlRDeERRVUZaTEV0QlFWb3NRMEZCWkRzN1FVRkZRU3h0UWtGQlRTeFBRVUZPTEVkQlFXZENMRTlCUVUwc1NVRkJUaXhEUVVGWExFOUJRVmdzUTBGQmJVSXNUMEZCVFN4UlFVRjZRaXhGUVVGdFF5eFBRVUZOTEZGQlFYcERMRU5CUVdoQ096dEJRVVZCTEdsQ1FVRkxMRXRCUVV3c1EwRkJWeXhMUVVGWUxFbEJRV3RDTEU5QlFVMHNUMEZCZUVJN1FVRkRTRHM3UVVGRlJDeFpRVUZKTEV0QlFVc3NUMEZCVkN4RlFVRnJRanRCUVVOa0xHbENRVUZMTEU5QlFVd3NRMEZCWVN4TFFVRkxMRXRCUVd4Q0xFVkJRWGxDTEVsQlFYcENPMEZCUTBnN08wRkJSVVFzWlVGQlVTeExRVUZMTEZOQlFVNHNSMEZCYlVJc1NVRkJia0lzUjBGQk1FSXNWVUZCYWtNN1FVRkRTQ3hMT3p0eFFrRkZSQ3hQTEhOQ1FVRnZRanRCUVVGQkxGbEJRVm9zUzBGQldTeDVSRUZCU2l4RlFVRkpPMEZCUVVFc1dVRkRVaXhOUVVSUkxFZEJRMnRDTEV0QlJHeENMRU5CUTFJc1RVRkVVVHM3UVVGQlFTeFpRVU5ITEZWQlJFZ3NORUpCUTJ0Q0xFdEJSR3hDT3p0QlFVVm9RaXhaUVVGTkxGbEJRVmtzWjBKQlFVMHNUMEZCVGl4WlFVRmpMRlZCUVdRc1EwRkJiRUk3TzBGQlJVRXNXVUZCU1N4TlFVRktMRVZCUVZrN1FVRkRVaXh6UWtGQlZTeEhRVUZXTEVOQlFXTXNSVUZCUlN4alFVRkdMRVZCUVdRN1FVRkRTRHM3UVVGRlJDeGxRVUZQTEZOQlFWQTdRVUZEU0N4TE96dHhRa0ZGUkN4TExHOUNRVUZSTzBGQlEwb3NkMEpCUVUwc1NVRkJUanRCUVVOQkxHVkJRVThzU1VGQlVEdEJRVU5JTEVzN08zRkNRVVZFTEUwc2NVSkJRVk03UVVGRFRDeDNRa0ZCVFN4TFFVRk9PMEZCUTBFc1pVRkJUeXhKUVVGUU8wRkJRMGdzU3pzN2NVSkJSVVFzVFN4eFFrRkJVenRCUVVOTUxHVkJRVThzUzBGQlN5eFJRVUZNTEVkQlFXZENMRXRCUVVzc1MwRkJUQ3hGUVVGb1FpeEhRVUVyUWl4TFFVRkxMRTFCUVV3c1JVRkJkRU03UVVGRFNDeExPenR4UWtGRlJDeExMRzlDUVVGUk8wRkJRMG9zV1VGQlRTeFRRVUZUTEV0QlFVc3NUVUZCY0VJN1FVRkRRU3gzUWtGQlRTeExRVUZPT3p0QlFVVkJMR0ZCUVVzc1NVRkJTU3hIUVVGVUxFbEJRV2RDTEUxQlFXaENMRVZCUVhkQ08wRkJRM0JDTEdkQ1FVRkpMRTlCUVU4c1kwRkJVQ3hEUVVGelFpeEhRVUYwUWl4RFFVRktMRVZCUVdkRE8wRkJRelZDTEhWQ1FVRlBMRWRCUVZBc1JVRkJXU3hKUVVGYUxFZEJRVzFDTEU5QlFVOHNSMEZCVUN4RlFVRlpMRTFCUVZvc1IwRkJjVUlzVDBGQlR5eEhRVUZRTEVWQlFWa3NUMEZCY0VRN1FVRkRTRHRCUVVOS096dEJRVVZFTEdWQlFVOHNTVUZCVUR0QlFVTklMRXM3TzFkQlJVMHNhMElzSzBKQlFXMUNMRXNzUlVGQlR6dEJRVU0zUWl3MFFrRkJXU3hMUVVGTExGTkJRVXdzUTBGQlpTeFpRVUV6UWl4RlFVRTBReXhMUVVFMVF6dEJRVU5JTEVzN08xZEJSVTBzYTBJc0swSkJRVzFDTEVzc1JVRkJUenRCUVVNM1FpdzBRa0ZCV1N4TFFVRkxMRk5CUVV3c1EwRkJaU3haUVVFelFpeEZRVUUwUXl4TFFVRTFRenRCUVVOSUxFczdPenM3TzBGQlIwd3NUMEZCVHl4VFFVRlFMRU5CUVdsQ0xHZENRVUZxUWl4SFFVRnZReXhUUVVGd1F6dEJRVU5CTEU5QlFVOHNVMEZCVUN4RFFVRnBRaXhaUVVGcVFpeEhRVUZuUXp0QlFVTTFRaXhoUVVGVExFTkJSRzFDTzBGQlJUVkNMR05CUVZVc1EwRkdhMEk3UVVGSE5VSXNWMEZCVHl4TFFVaHhRanRCUVVrMVFpeFRRVUZMTEZOQlNuVkNPMEZCU3pWQ0xGTkJRVXNzVTBGTWRVSTdRVUZOTlVJc1pVRkJWenRCUVU1cFFpeERRVUZvUXpzN2EwSkJVMlVzVFNJc0ltWnBiR1VpT2lKQlkzUnBiMjR1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMnAyWVc1a1pYSmtiMlZ6TDBOdlpHVXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJRlJoYzJzZ1puSnZiU0FuTGk0dmRHRnpheTlVWVhOckp6dGNibWx0Y0c5eWRDQjdJSE53WldWa1VHVnlVMlZqYjI1a0lIMGdabkp2YlNBbkxpNHZhVzVqTDJOaGJHTW5PMXh1YVcxd2IzSjBJSHNnYVhOT2RXMHNJR2x6VDJKcUxDQnBjMU4wY21sdVp5QjlJR1p5YjIwZ0p5NHVMMmx1WXk5MWRHbHNjeWM3WEc1cGJYQnZjblFnWkdWMFpXTjBWbUZzZFdWVWVYQmxJR1p5YjIwZ0p5NHVMM1poYkhWbExYUjVjR1Z6TDJSbGRHVmpkQ2M3WEc1cGJYQnZjblFnVGxWTlJWSkpRMEZNWDFaQlRGVkZVeUJtY205dElDY3VMaTlwYm1NdmJuVnRaWEpwWTJGc0xYWmhiSFZsY3ljN1hHNXBiWEJ2Y25RZ1pHVjBaV04wUVdSaGNIUmxjaUJtY205dElDY3VMaTlwYm1NdlpHVjBaV04wTFdGa1lYQjBaWEluTzF4dVhHNWpiMjV6ZENCT1ZVMWZUbFZOUlZKSlEwRk1YMVpCVEZWRlV5QTlJRTVWVFVWU1NVTkJURjlXUVV4VlJWTXViR1Z1WjNSb08xeHVYRzVqYjI1emRDQmtaV1poZFd4MFVtVnVaR1Z5WlhJZ1BTQW9leUJ6ZEdGMFpTd2dZV1JoY0hSbGNpd2dZV1JoY0hSbGNrUmhkR0VzSUdWc1pXMWxiblFnZlNrZ1BUNGdZV1JoY0hSbGNpaGxiR1Z0Wlc1MExDQnpkR0YwWlN3Z1lXUmhjSFJsY2tSaGRHRXBPMXh1WEc1amIyNXpkQ0JqYjI1MlpYSjBTV1pUYUc5MWJHUkNaVTUxYldKbGNpQTlJQ2gyWVd4MVpTa2dQVDRnSVdselRtRk9LSFpoYkhWbEtTQS9JSEJoY25ObFJteHZZWFFvZG1Gc2RXVXBJRG9nZG1Gc2RXVTdYRzVjYm1Oc1lYTnpJRUZqZEdsdmJpQmxlSFJsYm1SeklGUmhjMnNnZTF4dUlDQWdJR052Ym5OMGNuVmpkRzl5S0hCeWIzQnpJRDBnZTMwcElIdGNiaUFnSUNBZ0lDQWdjSEp2Y0hNdWMzUmhkR1VnUFNCN2ZUdGNiaUFnSUNBZ0lDQWdjSEp2Y0hNdWRtRnNkV1ZMWlhseklEMGdXMTA3WEc0Z0lDQWdJQ0FnSUhCeWIzQnpMbkJoY21WdWRFdGxlWE1nUFNCYlhUdGNiaUFnSUNBZ0lDQWdjM1Z3WlhJb2NISnZjSE1wTzF4dUlDQWdJSDFjYmx4dUlDQWdJQzhxWEc0Z0lDQWdJQ0FnSUNNZ1UyVjBJRUZqZEdsdmJpQndjbTl3WlhKMGFXVnpYRzRnSUNBZ0lDQWdJQ01qSUZObGRDQjFjMlZ5TFdSbFptbHVaV1FnUVdOMGFXOXVJSEJ5YjNCbGNuUnBaWE5jYmx4dUlDQWdJQ0FnSUNCQWNHRnlZVzBnVzI5aWFtVmpkRjFjYmlBZ0lDQWdJQ0FnUUhKbGRIVnliaUJiUVdOMGFXOXVYVnh1SUNBZ0lDb3ZYRzRnSUNBZ2MyVjBLSEJ5YjNCeklEMGdlMzBwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTUyWVd4MVpYTWdQU0IwYUdsekxuWmhiSFZsY3lCOGZDQjdmVHRjYmx4dUlDQWdJQ0FnSUNCamIyNXpkQ0I3SUhaaGJIVmxjeXdnTGk0dWNISnZjSE5VYjFObGRDQjlJRDBnY0hKdmNITTdYRzRnSUNBZ0lDQWdJR052Ym5OMElHbHVhR1Z5YVhSaFlteGxJRDBnZTMwN1hHNWNiaUFnSUNBZ0lDQWdMeThnVTJWMElHNXZiaTFqYjI1emRXMWxaQ0J3Y205d1pYSjBhV1Z6WEc0Z0lDQWdJQ0FnSUhOMWNHVnlMbk5sZENod2NtOXdjMVJ2VTJWMEtUdGNibHh1SUNBZ0lDQWdJQ0F2THlCRVpYUmxZM1FnWTI5eWNtVmpkQ0JnWVdSaGNIUmxjbUFnYVdZZ2JtOXVaU0JsZUdsemRITWdZVzVrSUdCbGJHVnRaVzUwWUNCcGN5QmlaV2x1WnlCelpYUmNiaUFnSUNBZ0lDQWdhV1lnS0hSb2FYTXVaV3hsYldWdWRDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLQ0YwYUdsekxtRmtZWEIwWlhJcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXZMeUJFZFdOcmRIbHdhWE5vSUdOb1pXTnJJR1p2Y2lCQlpHRndkR1Z5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NWhaR0Z3ZEdWeUlEMGdaR1YwWldOMFFXUmhjSFJsY2loMGFHbHpMbVZzWlcxbGJuUXBPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIUm9hWE11WVdSaGNIUmxjaTVuWlhSRmJHVnRaVzUwUkdGMFlTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbUZrWVhCMFpYSkVZWFJoSUQwZ2RHaHBjeTVoWkdGd2RHVnlMbWRsZEVWc1pXMWxiblJFWVhSaEtIUm9hWE11Wld4bGJXVnVkQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvSVhSb2FYTXViMjVTWlc1a1pYSXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtOXVVbVZ1WkdWeUlEMGdaR1ZtWVhWc2RGSmxibVJsY21WeU8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdMeThnVUhKcGJXVWdZVzRnYjJKcVpXTjBJSFJ2SUdsdWFHVnlhWFFnWm5KdmJTd2dkMmwwYUNCdmJteDVJR0IyWVd4MVpXQWdjSEp2Y0dWeWRHbGxjMXh1SUNBZ0lDQWdJQ0JtYjNJZ0tHeGxkQ0JyWlhrZ2FXNGdkR2hwY3k1a1pXWmhkV3gwVm1Gc2RXVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxtUmxabUYxYkhSV1lXeDFaUzVvWVhOUGQyNVFjbTl3WlhKMGVTaHJaWGtwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSEJ5YjNCelZHOVRaWFF1YUdGelQzZHVVSEp2Y0dWeWRIa29hMlY1S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwYm1obGNtbDBZV0pzWlZ0clpYbGRJRDBnY0hKdmNITlViMU5sZEZ0clpYbGRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDBnWld4elpTQnBaaUFvZEdocGMxdHJaWGxkSUNFOVBTQjFibVJsWm1sdVpXUXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXNW9aWEpwZEdGaWJHVmJhMlY1WFNBOUlIUm9hWE5iYTJWNVhUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0F2THlCVmNHUmhkR1VnWlhocGMzUnBibWNnZG1Gc2RXVnpJSGRwZEdnZ2FXNW9aWEpwZEdGaWJHVWdjSEp2Y0dWeWRHbGxjMXh1SUNBZ0lDQWdJQ0JtYjNJZ0tHeGxkQ0JyWlhrZ2FXNGdkR2hwY3k1MllXeDFaWE1wSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMblpoYkhWbGN5NW9ZWE5QZDI1UWNtOXdaWEowZVNoclpYa3BLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NTJZV3gxWlhOYmEyVjVYU0E5SUhzZ0xpNHVkR2hwY3k1MllXeDFaWE5iYTJWNVhTd2dMaTR1YVc1b1pYSnBkR0ZpYkdVZ2ZUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQzh2SUZWd1pHRjBaVnh1SUNBZ0lDQWdJQ0JwWmlBb2RtRnNkV1Z6S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxuTmxkRlpoYkhWbGN5aDJZV3gxWlhNc0lHbHVhR1Z5YVhSaFlteGxLVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnVUhKbFkyOXRjSFYwWlNCdWRXMWlaWElnYjJZZ2RtRnNkV1VnYTJWNUlHRnVaQ0J3WVhKbGJuUWdhMlY1Y3lCMGJ5QmhkbTlwWkNCd1pYSXRabkpoYldVZ2JXVmhjM1Z5WlcxbGJuUmNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXViblZ0Vm1Gc2RXVkxaWGx6SUQwZ2RHaHBjeTUyWVd4MVpVdGxlWE11YkdWdVozUm9PMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV1ZFcxUVlYSmxiblJMWlhseklEMGdkR2hwY3k1d1lYSmxiblJMWlhsekxteGxibWQwYUR0Y2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQWdJSDFjYmx4dUlDQWdJSE5sZEZaaGJIVmxjeWgyWVd4MVpYTXNJR2x1YUdWeWFYUXBJSHRjYmlBZ0lDQWdJQ0FnTHk4Z1NYUmxjbUYwWlNCdmRtVnlJR0ZzYkNCcGJtTnZiV2x1WnlCMllXeDFaWE1nWVc1a0lITmxkRnh1SUNBZ0lDQWdJQ0JtYjNJZ0tHeGxkQ0JyWlhrZ2FXNGdkbUZzZFdWektTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9kbUZzZFdWekxtaGhjMDkzYmxCeWIzQmxjblI1S0d0bGVTa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JzWlhRZ2FHRnpRMmhwYkdSeVpXNGdQU0JtWVd4elpUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCamFHbHNaSEpsYmlBOUlIdDlPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1RXVnlaMlVnYVc1MGJ5QmxlR2x6ZEdsdVp5QjJZV3gxWlNCdmNpQmpjbVZoZEdVZ2JtVjNYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2RtRnNkV1ZCYkhKbFlXUjVSWGhwYzNSeklEMGdkR2hwY3k1MllXeDFaWE5iYTJWNVhTQWhQVDBnZFc1a1pXWnBibVZrTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUd4bGRDQnVaWGRXWVd4MVpTQTlJSFpoYkhWbFFXeHlaV0ZrZVVWNGFYTjBjeUEvSUhzZ0xpNHVkR2hwY3k1MllXeDFaWE5iYTJWNVhTQjlJRG9nZXlBdUxpNXBibWhsY21sMElIMDdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0F2THlCSlppQjJZV3gxWlhNZ2FYTWdibTkwSUdGdUlHOWlhbVZqZEN3Z1lYTnphV2R1SUhaaGJIVmxJSFJ2SUdSbFptRjFiSFFnY0hKdmNGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2doYVhOUFltb29kbUZzZFdWelcydGxlVjBwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRzVsZDFaaGJIVmxXM1JvYVhNdVpHVm1ZWFZzZEZaaGJIVmxVSEp2Y0YwZ1BTQjJZV3gxWlhOYmEyVjVYVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCdVpYZFdZV3gxWlNBOUlIc2dMaTR1Ym1WM1ZtRnNkV1VzSUM0dUxuWmhiSFZsYzF0clpYbGRJSDA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0x5OGdTV1lnZDJVbmRtVWdaMjkwSUdGdUlHRmtZWEIwWlhJc0lHZGxkQ0IwYUdVZ1kzVnljbVZ1ZENCMllXeDFaVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNodVpYZFdZV3gxWlM1amRYSnlaVzUwSUQwOVBTQjFibVJsWm1sdVpXUWdKaVlnZEdocGN5NWhaR0Z3ZEdWeUtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUc1bGQxWmhiSFZsTG1OMWNuSmxiblFnUFNCamIyNTJaWEowU1daVGFHOTFiR1JDWlU1MWJXSmxjaWgwYUdsekxtRmtZWEIwWlhJdVoyVjBLSFJvYVhNdVpXeGxiV1Z1ZEN3Z2EyVjVLU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLRzVsZDFaaGJIVmxMbVp5YjIwZ1BUMDlJSFZ1WkdWbWFXNWxaQ0FtSmlCMGFHbHpMbUZrWVhCMFpYSXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JtVjNWbUZzZFdVdVpuSnZiU0E5SUc1bGQxWmhiSFZsTG1OMWNuSmxiblE3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0x5OGdRWEJ3YkhrZ1pHVm1ZWFZzZENCMllXeDFaU0J3Y205d1pYSjBhV1Z6WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tDRjJZV3gxWlVGc2NtVmhaSGxGZUdsemRITXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JtVjNWbUZzZFdVZ1BTQjdJQzR1TG5Sb2FYTXVaR1ZtWVhWc2RGWmhiSFZsTENBdUxpNXVaWGRXWVd4MVpTQjlPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM4dklFbG1JSGRsSUdSdmJpZDBJR2hoZG1VZ1lTQjJZV3gxWlNCMGVYQmxJR0Z1WkNCM1pTQmtieUJvWVhabElHRnVJRUZrWVhCMFpYSXNJR05vWldOcklHWnZjaUIwZVhCbElIZHBkR2dnZG1Gc2RXVWdhMlY1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tDRnVaWGRXWVd4MVpTNTBlWEJsSUNZbUlIUm9hWE11WVdSaGNIUmxjaUFtSmlCMGFHbHpMbUZrWVhCMFpYSXVZMmhsWTJ0V1lXeDFaVlI1Y0dVcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYm1WM1ZtRnNkV1V1ZEhsd1pTQTlJSFJvYVhNdVlXUmhjSFJsY2k1amFHVmphMVpoYkhWbFZIbHdaU2hyWlhrcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzh2SUVsbUlIZGxJSE4wYVd4c0lHUnZiaWQwSUdoaGRtVWdZU0IyWVd4MVpTQjBlWEJsSUdGdVpDQjBhR2x6SUdseklIUm9aU0JtYVhKemRDQjBhVzFsSUhkbEozWmxJSE5sZENCMGFHbHpJSFpoYkhWbExDQmphR1ZqYXlCdWRXMWxjbWxqWVd3Z2RtRnNkV1Z6SUdadmNpQnpkSEpwYm1keklHRnVaQ0IwWlhOMFhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLQ0Z1WlhkV1lXeDFaUzUwZVhCbElDWW1JQ0YwYUdsekxuWmhiSFZsYzF0clpYbGRLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHNWxkMVpoYkhWbExuUjVjR1VnUFNCa1pYUmxZM1JXWVd4MVpWUjVjR1VvYm1WM1ZtRnNkV1VwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDOHZJRWxtSUhkbElHaGhkbVVnWVNCMllXeDFaU0IwZVhCbExDQm9ZVzVrYkdVdUlGUm9hWE1nYVhNZ2JYa2diR1ZoYzNRZ1ptRjJiM1Z5YVhSbElIQmhjblFnYjJZZ1VHOXdiVzkwYVc5dUxDQnpieTR1TGlCbGJtcHZlUzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2JtVjNWbUZzZFdVdWRIbHdaU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQm1iM0lnS0d4bGRDQnBJRDBnTURzZ2FTQThJRTVWVFY5T1ZVMUZVa2xEUVV4ZlZrRk1WVVZUT3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElIQnliM0JPWVcxbElEMGdUbFZOUlZKSlEwRk1YMVpCVEZWRlUxdHBYVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElIWmhiSFZsVUhKdmNDQTlJRzVsZDFaaGJIVmxXM0J5YjNCT1lXMWxYVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1NXWWdkR2hwY3lCd2NtOXdJR2x6SUdFZ2MzUnlhVzVuSUdGdVpDQjNaU0JvWVhabElHRWdjM0JzYVhSMFpYSXNJSE53YkdsMFhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9ibVYzVm1Gc2RXVXVkSGx3WlM1b1lYTlBkMjVRY205d1pYSjBlU2duYzNCc2FYUW5LU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUhOd2JHbDBVSEp2Y0NBOUlHbHpVM1J5YVc1bktIWmhiSFZsVUhKdmNDa2dQeUJ1WlhkV1lXeDFaUzUwZVhCbExuTndiR2wwS0haaGJIVmxVSEp2Y0NrZ09pQjdmVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElITndiR2wwUzJWNUlHbHVJSE53YkdsMFVISnZjQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2MzQnNhWFJRY205d0xtaGhjMDkzYmxCeWIzQmxjblI1S0hOd2JHbDBTMlY1S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ1kyOXRZbWx1WldSTFpYa2dQU0JyWlhrZ0t5QnpjR3hwZEV0bGVUdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1NXWWdkMlVnWkc5dUozUWdhR0YyWlNCaElHTm9hV3hrSUhaaGJIVmxJR1p2Y2lCMGFHbHpJR3RsZVN3Z2JXRnJaU0J2Ym1WY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2doWTJocGJHUnlaVzViWTI5dFltbHVaV1JMWlhsZEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnWkdWbVlYVnNkRlpoYkhWbElEMGdLRzVsZDFaaGJIVmxMblI1Y0dVdVpHVm1ZWFZzZEZCeWIzQnpJQ1ltSUc1bGQxWmhiSFZsTG5SNWNHVXVaR1ZtWVhWc2RGQnliM0J6VzNOd2JHbDBTMlY1WFNrZ1B5QnVaWGRXWVd4MVpTNTBlWEJsTG1SbFptRjFiSFJRY205d2MxdHpjR3hwZEV0bGVWMGdPaUJ1WlhkV1lXeDFaUzUwZVhCbExtUmxabUYxYkhSUWNtOXdjeUI4ZkNCN2ZUdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTm9hV3hrY21WdVcyTnZiV0pwYm1Wa1MyVjVYU0E5SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0xpNHVibVYzVm1Gc2RXVXNYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzR1TG1SbFptRjFiSFJXWVd4MVpTeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjR0Z5Wlc1ME9pQnJaWGtzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOb2FXeGtTMlY1T2lCemNHeHBkRXRsZVZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDA3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JrWld4bGRHVWdZMmhwYkdSeVpXNWJZMjl0WW1sdVpXUkxaWGxkTG5SNWNHVTdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHaGhjME5vYVd4a2NtVnVJRDBnZEhKMVpUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR05vYVd4a2NtVnVXMk52YldKcGJtVmtTMlY1WFZ0d2NtOXdUbUZ0WlYwZ1BTQndZWEp6WlVac2IyRjBLSE53YkdsMFVISnZjRnR6Y0d4cGRFdGxlVjBwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1NXWWdkMlVnYUdGMlpTQmhJSFJsYlhCc1lYUmxJR1oxYm1OMGFXOXVMQ0JuWlc1bGNtRjBaVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDZ2hibVYzVm1Gc2RXVXVkR1Z0Y0d4aGRHVWdKaVlnYm1WM1ZtRnNkV1V1ZEhsd1pTNTBaVzF3YkdGMFpTQW1KaUJwYzFOMGNtbHVaeWgyWVd4MVpWQnliM0FwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUc1bGQxWmhiSFZsTG5SbGJYQnNZWFJsSUQwZ2JtVjNWbUZzZFdVdWRIbHdaUzUwWlcxd2JHRjBaU2gyWVd4MVpWQnliM0FwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMGdaV3h6WlNCcFppQW9ibVYzVm1Gc2RXVXVkSGx3WlM1a1pXWmhkV3gwVUhKdmNITXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCdVpYZFdZV3gxWlNBOUlIc2dMaTR1Ym1WM1ZtRnNkV1VzSUM0dUxtNWxkMVpoYkhWbExuUjVjR1V1WkdWbVlYVnNkRkJ5YjNCeklIMDdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMllXeDFaVkJ5YjNBZ0lUMDlJSFZ1WkdWbWFXNWxaQ0FtSmlCdVpYZFdZV3gxWlM1MGVYQmxMbkJoY25ObEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYm1WM1ZtRnNkV1ZiY0hKdmNFNWhiV1ZkSUQwZ2JtVjNWbUZzZFdVdWRIbHdaUzV3WVhKelpTaDJZV3gxWlZCeWIzQXNJRzVsZDFaaGJIVmxLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMGdMeThnUlc1a0lIWmhiSFZsSUhSNWNHVWdibTl1YzJWdWMyVmNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzh2SUZObGRDQmdjSEpsZG1BZ2RHOGdZR04xY25KbGJuUmdJR1p2Y2lCbWFYSnpkQ0JtY21GdFpTQmhablJsY2lCelpYUmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnVaWGRXWVd4MVpTNXdjbVYySUQwZ2JtVjNWbUZzZFdVdVkzVnljbVZ1ZER0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdkx5QkpaaUIwYUdseklIWmhiSFZsSUdSdlpYTnVKM1FnYUdGMlpTQmphR2xzWkhKbGJpd2dZV1JrSUhSdklIWmhiSFZsUzJWNWMxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2doYUdGelEyaHBiR1J5Wlc0cElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIUm9hWE11ZG1Gc2RXVkxaWGx6TG1sdVpHVjRUMllvYTJWNUtTQTlQVDBnTFRFcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11ZG1Gc2RXVkxaWGx6TG5CMWMyZ29hMlY1S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1QzSWdZV1JrSUhSdklIQmhjbVZ1ZEV0bGVYTmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J1WlhkV1lXeDFaUzVqYUdsc1pISmxiaUE5SUc1bGQxWmhiSFZsTG1Ob2FXeGtjbVZ1SUh4OElIdDlPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxuQmhjbVZ1ZEV0bGVYTXVhVzVrWlhoUFppaHJaWGtwSUQwOVBTQXRNU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXdZWEpsYm5STFpYbHpMbkIxYzJnb2EyVjVLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVjMlYwVm1Gc2RXVnpLR05vYVd4a2NtVnVLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMblpoYkhWbGMxdHJaWGxkSUQwZ2JtVjNWbUZzZFdVN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0F2S2x4dUlDQWdJQ0FnSUNCRVpXTnBaR1VnZDJobGRHaGxjaUIwYUdseklFRmpkR2x2YmlCM2FXeHNJSEpsYm1SbGNpQnZiaUJ1WlhoMElHWnlZVzFsWEc1Y2JpQWdJQ0FnSUNBZ1FIQmhjbUZ0SUZ0QlkzUnBiMjVkWEc0Z0lDQWdJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVnh1SUNBZ0lDQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMWNiaUFnSUNBZ0lDQWdRSEpsZEhWeWJpQmJZbTl2YkdWaGJsMDZJRkpsZEhWeWJpQjBjblZsSUhSdklISmxibVJsY2x4dUlDQWdJQ292WEc0Z0lDQWdkMmxzYkZKbGJtUmxjaWhoWTNScGIyNHNJR1p5WVcxbFUzUmhiWEFzSUdWc1lYQnpaV1FwSUh0Y2JpQWdJQ0FnSUNBZ2JHVjBJR2hoYzBOb1lXNW5aV1FnUFNCbVlXeHpaVHRjYmx4dUlDQWdJQ0FnSUNBdkx5QkRhR1ZqYXlCcFppQmlZWE5sSUhaaGJIVmxjeUJvWVhabElIVndaR0YwWldRZ1hHNGdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2dkR2hwY3k1dWRXMVdZV3gxWlV0bGVYTTdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdhMlY1SUQwZ2RHaHBjeTUyWVd4MVpVdGxlWE5iYVYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQjJZV3gxWlNBOUlIUm9hWE11ZG1Gc2RXVnpXMnRsZVYwN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUM4dklGSjFiaUIwY21GdWMyWnZjbTBnWm5WdVkzUnBiMjRnS0dsbUlIQnlaWE5sYm5RcFhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RtRnNkV1V1ZEhKaGJuTm1iM0p0S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnNkV1V1WTNWeWNtVnVkQ0E5SUhaaGJIVmxMblJ5WVc1elptOXliU2gyWVd4MVpTNWpkWEp5Wlc1MExDQnJaWGtzSUhSb2FYTXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QkRZWEFnYldsdWFXMTFiVnh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLR2x6VG5WdEtIWmhiSFZsTG0xcGJpa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IyWVd4MVpTNWpkWEp5Wlc1MElEMGdUV0YwYUM1dFlYZ29kbUZzZFdVdVkzVnljbVZ1ZEN3Z2RtRnNkV1V1YldsdUtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1EyRndJRzFoZUdsdGRXMWNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaHBjMDUxYlNoMllXeDFaUzV0WVhncEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZzZFdVdVkzVnljbVZ1ZENBOUlFMWhkR2d1YldsdUtIWmhiSFZsTG1OMWNuSmxiblFzSUhaaGJIVmxMbTFoZUNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUZKdmRXNWtJRzUxYldKbGNseHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIWmhiSFZsTG5KdmRXNWtLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVXVZM1Z5Y21WdWRDQTlJRTFoZEdndWNtOTFibVFvZG1Gc2RXVXVZM1Z5Y21WdWRDazdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUhaaGJIVmxMbVp5WVcxbFEyaGhibWRsSUQwZ2RtRnNkV1V1WTNWeWNtVnVkQ0F0SUhaaGJIVmxMbkJ5WlhZN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUM4dklGVndaR0YwWlNCMlpXeHZZMmwwZVZ4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0NGMGFHbHpMbU5oYkdOMWJHRjBaWE5XWld4dlkybDBlU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhaaGJIVmxMblpsYkc5amFYUjVJRDBnYzNCbFpXUlFaWEpUWldOdmJtUW9kbUZzZFdVdVpuSmhiV1ZEYUdGdVoyVXNJR1ZzWVhCelpXUXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QkpaaUIwYUdseklIWmhiSFZsSUdoaGN5QmphR0Z1WjJWa1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RtRnNkV1V1Y0hKbGRpQWhQVDBnZG1Gc2RXVXVZM1Z5Y21WdWRDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2hoYzBOb1lXNW5aV1FnUFNCMGNuVmxPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFpoYkhWbExuQnlaWFlnUFNCMllXeDFaUzVqZFhKeVpXNTBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QkJjSEJsYm1RZ2RXNXBkRnh1SUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnZG1Gc2RXVkdiM0pUZEdGMFpTQTlJQ2gyWVd4MVpTNTBlWEJsSUNZbUlIWmhiSFZsTG5SNWNHVXVjMlZ5YVdGc2FYcGxLU0EvSUhaaGJIVmxMblI1Y0dVdWMyVnlhV0ZzYVhwbEtIWmhiSFZsTG1OMWNuSmxiblFzSUhaaGJIVmxLU0E2SUhaaGJIVmxMbU4xY25KbGJuUTdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJRUZrWkNCMGJ5QnpkR0YwWlNCcFppQjBhR2x6SUdseklHNXZkQ0JoSUdOb2FXeGtJSFpoZFdWY2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNnaGRtRnNkV1V1Y0dGeVpXNTBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXpkR0YwWlZ0clpYbGRJRDBnZG1Gc2RXVkdiM0pUZEdGMFpUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NTJZV3gxWlhOYmRtRnNkV1V1Y0dGeVpXNTBYUzVqYUdsc1pISmxibHQyWVd4MVpTNWphR2xzWkV0bGVWMGdQU0IyWVd4MVpVWnZjbE4wWVhSbE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdMeThnVlhCa1lYUmxJSEJoY21WdWRDQjJZV3gxWlhOY2JpQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQjBhR2x6TG01MWJWQmhjbVZ1ZEV0bGVYTTdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdhMlY1SUQwZ2RHaHBjeTV3WVhKbGJuUkxaWGx6VzJsZE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdkbUZzZFdVZ1BTQjBhR2x6TG5aaGJIVmxjMXRyWlhsZE8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNCMllXeDFaUzVqZFhKeVpXNTBJRDBnZG1Gc2RXVXVkSGx3WlM1amIyMWlhVzVsS0haaGJIVmxMbU5vYVd4a2NtVnVMQ0IyWVd4MVpTNTBaVzF3YkdGMFpTazdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YzNSaGRHVmJhMlY1WFNBOUlIWmhiSFZsTG1OMWNuSmxiblE3WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQnBaaUFvZEdocGN5NXZia1p5WVcxbEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbTl1Um5KaGJXVW9kR2hwY3k1emRHRjBaU3dnZEdocGN5azdYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnS0hSb2FYTXViMjVEYkdWaGJuVndLU0EvSUhSeWRXVWdPaUJvWVhORGFHRnVaMlZrTzF4dUlDQWdJSDFjYmx4dUlDQWdJR2x1YUdWeWFYUW9jSEp2Y0hNZ1BTQjdmU2tnZTF4dUlDQWdJQ0FnSUNCamIyNXpkQ0I3SUhaaGJIVmxjeXdnTGk0dWNISnZjSE5VYjFObGRDQjlJRDBnY0hKdmNITTdYRzRnSUNBZ0lDQWdJR052Ym5OMElHNWxkMEZqZEdsdmJpQTlJSE4xY0dWeUxtbHVhR1Z5YVhRb2NISnZjSE5VYjFObGRDazdYRzVjYmlBZ0lDQWdJQ0FnYVdZZ0tIWmhiSFZsY3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYm1WM1FXTjBhVzl1TG5ObGRDaDdJSFpoYkhWbGN5QjlLVHRjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCdVpYZEJZM1JwYjI0N1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnY0dGMWMyVW9LU0I3WEc0Z0lDQWdJQ0FnSUhOMWNHVnlMbk4wYjNBb0tUdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjbVZ6ZFcxbEtDa2dlMXh1SUNBZ0lDQWdJQ0J6ZFhCbGNpNXpkR0Z5ZENncE8xeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjenRjYmlBZ0lDQjlYRzVjYmlBZ0lDQjBiMmRuYkdVb0tTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TG1selFXTjBhWFpsSUQ4Z2RHaHBjeTV3WVhWelpTZ3BJRG9nZEdocGN5NXlaWE4xYldVb0tUdGNiaUFnSUNCOVhHNWNiaUFnSUNCemRHRnlkQ2dwSUh0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnZG1Gc2RXVnpJRDBnZEdocGN5NTJZV3gxWlhNN1hHNGdJQ0FnSUNBZ0lITjFjR1Z5TG5OMFlYSjBLQ2s3WEc1Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2EyVjVJR2x1SUhaaGJIVmxjeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0haaGJIVmxjeTVvWVhOUGQyNVFjbTl3WlhKMGVTaHJaWGtwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnNkV1Z6VzJ0bGVWMHVjSEpsZGlBOUlIWmhiSFZsYzF0clpYbGRMbTl5YVdkcGJpQTlJSFpoYkhWbGMxdHJaWGxkTG1OMWNuSmxiblE3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnSUNCOVhHNWNiaUFnSUNCemRHRjBhV01nWlhoMFpXNWtSR1ZtWVhWc2RGWmhiSFZsS0hCeWIzQnpLU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUI3SUM0dUxuUm9hWE11Y0hKdmRHOTBlWEJsTG1SbFptRjFiSFJXWVd4MVpTd2dMaTR1Y0hKdmNITWdmVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnpkR0YwYVdNZ1pYaDBaVzVrUkdWbVlYVnNkRkJ5YjNCektIQnliM0J6S1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCN0lDNHVMblJvYVhNdWNISnZkRzkwZVhCbExtUmxabUYxYkhSUWNtOXdjeXdnTGk0dWNISnZjSE1nZlR0Y2JpQWdJQ0I5WEc1OVhHNWNia0ZqZEdsdmJpNXdjbTkwYjNSNWNHVXVaR1ZtWVhWc2RGWmhiSFZsVUhKdmNDQTlJQ2RqZFhKeVpXNTBKenRjYmtGamRHbHZiaTV3Y205MGIzUjVjR1V1WkdWbVlYVnNkRlpoYkhWbElEMGdlMXh1SUNBZ0lHTjFjbkpsYm5RNklEQXNYRzRnSUNBZ2RtVnNiMk5wZEhrNklEQXNYRzRnSUNBZ2NtOTFibVE2SUdaaGJITmxMRnh1SUNBZ0lHMXBiam9nZFc1a1pXWnBibVZrTEZ4dUlDQWdJRzFoZURvZ2RXNWtaV1pwYm1Wa0xGeHVJQ0FnSUhSeVlXNXpabTl5YlRvZ2RXNWtaV1pwYm1Wa1hHNTlPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JCWTNScGIyNDdYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9BY3Rpb24uanNcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfQWN0aW9uMiA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvQWN0aW9uJyk7XG5cbnZhciBfQWN0aW9uMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0FjdGlvbjIpO1xuXG52YXIgX2dlbmVyYXRlQmxlbmRDdXJ2ZSA9IHJlcXVpcmUoJy4vZmxvdy9nZW5lcmF0ZS1ibGVuZC1jdXJ2ZScpO1xuXG52YXIgX2dlbmVyYXRlQmxlbmRDdXJ2ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZW5lcmF0ZUJsZW5kQ3VydmUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8qXG4gICAgTWV0aG9kcyBhbmQgcHJvcGVydGllcyB0byBhZGQgdG8gYm91bmQgQWN0aW9uc1xuKi9cbnZhciBib3VuZE9uU3RhcnQgPSBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgcmV0dXJuIGFjdGlvbi5mbG93LmFjdGl2YXRlQWN0aW9uKGFjdGlvbi5pZCwgYWN0aW9uKTtcbn07XG52YXIgYm91bmRPblN0b3AgPSBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgcmV0dXJuIGFjdGlvbi5mbG93LmRlYWN0aXZhdGVBY3Rpb24oYWN0aW9uLmlkKTtcbn07XG52YXIgYm91bmRQcm9wcyA9IGZ1bmN0aW9uIChmbG93KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZmxvdzogZmxvdyxcbiAgICAgICAgaXNQcmlvcml0eTogdHJ1ZSxcbiAgICAgICAgb25BY3RpdmF0ZTogYm91bmRPblN0YXJ0LFxuICAgICAgICBvbkRlYWN0aXZhdGU6IGJvdW5kT25TdG9wXG4gICAgfTtcbn07XG5cbnZhciBGbG93ID0gZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgICBfaW5oZXJpdHMoRmxvdywgX0FjdGlvbik7XG5cbiAgICBmdW5jdGlvbiBGbG93KHByb3BzKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBGbG93KTtcblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgICAgICBfdGhpcy5hY3RpdmVBY3Rpb25zID0ge307XG4gICAgICAgIF90aGlzLm51bUFjdGl2ZUFjdGlvbnMgPSAwO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgRmxvdy5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gc2V0KHByb3BzKSB7XG4gICAgICAgIF9BY3Rpb24ucHJvdG90eXBlLnNldC5jYWxsKHRoaXMsIHByb3BzKTtcblxuICAgICAgICB0aGlzLm9uY2UoKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgQmluZCBBY3Rpb24gdG8gQWN0b3JcbiAgICAqL1xuXG5cbiAgICBGbG93LnByb3RvdHlwZS5jb25uZWN0ID0gZnVuY3Rpb24gY29ubmVjdChhY3Rpb24pIHtcbiAgICAgICAgdmFyIGluaGVyaXRlZEFjdGlvbiA9IGFjdGlvbi5pbmhlcml0KCk7XG4gICAgICAgIHZhciBuZXdWYWx1ZXMgPSB7fTtcbiAgICAgICAgdmFyIGhhc05ld1ZhbHVlcyA9IGZhbHNlO1xuXG4gICAgICAgIC8vIENyZWF0ZSB2YWx1ZXMgb24gYWN0b3IgdGhhdCBkb24ndCBleGlzdFxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gaW5oZXJpdGVkQWN0aW9uLnZhbHVlcykge1xuICAgICAgICAgICAgaWYgKGluaGVyaXRlZEFjdGlvbi52YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiAhdGhpcy52YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIG5ld1ZhbHVlc1trZXldID0ge307XG4gICAgICAgICAgICAgICAgaGFzTmV3VmFsdWVzID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoYXNOZXdWYWx1ZXMpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KHsgdmFsdWVzOiBuZXdWYWx1ZXMgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpbmhlcml0ZWRBY3Rpb24ucGFyZW50SWQgPSBhY3Rpb24uaWQ7XG5cbiAgICAgICAgcmV0dXJuIGluaGVyaXRlZEFjdGlvbi5zZXQoYm91bmRQcm9wcyh0aGlzLCBpbmhlcml0ZWRBY3Rpb24pKTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgU3RhcnQgQWN0b3JcbiAgICAgICAgIElmIEFjdGlvbiBpcyBwcm92aWRlZCwgYmluZCBpdCB0byB0aGlzIEFjdG9yIGFuZCBzdGFydFxuICAgICAgICAgQHBhcmFtIChvcHRpb25hbCkgW0FjdGlvbl1cbiAgICAqL1xuXG5cbiAgICBGbG93LnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgICBfQWN0aW9uLnByb3RvdHlwZS5zdGFydC5jYWxsKHRoaXMpO1xuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLmFjdGl2ZUFjdGlvbnMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZUFjdGlvbnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHZhciBhY3Rpb24gPSB0aGlzLmFjdGl2ZUFjdGlvbnNba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAoIWFjdGlvbi5pc0FjdGl2ZSkge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb24uc3RhcnQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgRmxvdy5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAgIF9BY3Rpb24ucHJvdG90eXBlLnN0b3AuY2FsbCh0aGlzKTtcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5hY3RpdmVBY3Rpb25zKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVBY3Rpb25zLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUFjdGlvbnNba2V5XS5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgRmxvdy5wcm90b3R5cGUud2lsbFJlbmRlciA9IGZ1bmN0aW9uIHdpbGxSZW5kZXIoYWN0b3IsIGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gdGhpcy52YWx1ZUtleXNbaV07XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuICAgICAgICAgICAgdmFyIGRyaXZlciA9IHZhbHVlLm51bURyaXZlcnMgPyB0aGlzLmFjdGl2ZUFjdGlvbnNbdmFsdWUuZHJpdmVyc1swXV0gOiBmYWxzZTtcbiAgICAgICAgICAgIHZhciBuZXdDdXJyZW50ID0gdmFsdWUubnVtRHJpdmVycyA/IGRyaXZlci52YWx1ZXNba2V5XS5jdXJyZW50IDogdmFsdWUuY3VycmVudDtcblxuICAgICAgICAgICAgaWYgKHZhbHVlLmJsZW5kQ3VydmUpIHtcbiAgICAgICAgICAgICAgICBuZXdDdXJyZW50ID0gdmFsdWUuYmxlbmRDdXJ2ZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gbmV3Q3VycmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBfQWN0aW9uLnByb3RvdHlwZS53aWxsUmVuZGVyLmNhbGwodGhpcywgYWN0b3IsIGZyYW1lU3RhbXAsIGVsYXBzZWQpO1xuICAgIH07XG5cbiAgICAvKlxuICAgICAgICBBZGQgYWN0aXZlIGFjdGlvbnNcbiAgICAgICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgICAgICBAcGFyYW0gW0FjdGlvbl1cbiAgICAqL1xuXG5cbiAgICBGbG93LnByb3RvdHlwZS5hY3RpdmF0ZUFjdGlvbiA9IGZ1bmN0aW9uIGFjdGl2YXRlQWN0aW9uKGlkLCBhY3Rpb24pIHtcbiAgICAgICAgdGhpcy5hY3RpdmVBY3Rpb25zW2lkXSA9IGFjdGlvbjtcbiAgICAgICAgdGhpcy5udW1BY3RpdmVBY3Rpb25zKys7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhY3Rpb24ubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBhY3Rpb24udmFsdWVLZXlzW2ldO1xuICAgICAgICAgICAgdmFyIGFjdGlvblZhbHVlID0gYWN0aW9uLnZhbHVlc1trZXldO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcblxuICAgICAgICAgICAgLy8gSWYgd2UncmUgYmxlbmRpbmcgdGhpcyBhY3Rpb24sIGFuZCB0aGVyZSdzIG9uIGFscmVhZHkgaW4gcHJvZ3Jlc3NcbiAgICAgICAgICAgIGlmIChhY3Rpb24uYmxlbmQgJiYgdmFsdWUubnVtRHJpdmVycyAmJiAhdmFsdWUuYmxlbmRDdXJ2ZSAmJiB2YWx1ZS5kcml2ZXJzWzBdLnByb3RvdHlwZSA9PT0gYWN0aW9uLnByb3RvdHlwZSkge1xuICAgICAgICAgICAgICAgIHZhbHVlLmJsZW5kQ3VydmUgPSAoMCwgX2dlbmVyYXRlQmxlbmRDdXJ2ZTIuZGVmYXVsdCkodGhpcy5hY3RpdmVBY3Rpb25zW3ZhbHVlLmRyaXZlcnNbMF1dLCBhY3Rpb24sIHZhbHVlLCBrZXkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghYWN0aW9uLmlzU2NydWJiaW5nKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUuYmxlbmRDdXJ2ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAvLyBQYXNzIEFjdG9yIHZhbHVlIHByb3BlcnRpZXMgdG8gQWN0aW9uXG4gICAgICAgICAgICAgICAgYWN0aW9uVmFsdWUudmVsb2NpdHkgKz0gdmFsdWUudmVsb2NpdHk7XG4gICAgICAgICAgICAgICAgYWN0aW9uVmFsdWUuZnJvbSA9IGFjdGlvblZhbHVlLmN1cnJlbnQgPSB2YWx1ZS5jdXJyZW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YWx1ZS5kcml2ZXJzID0gW2lkXTtcbiAgICAgICAgICAgIHZhbHVlLm51bURyaXZlcnMgPSB2YWx1ZS5kcml2ZXJzLmxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm51bUFjdGl2ZUFjdGlvbnMpIHtcbiAgICAgICAgICAgIF9BY3Rpb24ucHJvdG90eXBlLnN0YXJ0LmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgUmVtb3ZlIGFjdGl2ZSBhY3Rpb25zXG4gICAgICAgICBAcGFyYW0gW251bWJlcl1cbiAgICAqL1xuXG5cbiAgICBGbG93LnByb3RvdHlwZS5kZWFjdGl2YXRlQWN0aW9uID0gZnVuY3Rpb24gZGVhY3RpdmF0ZUFjdGlvbihpZCkge1xuICAgICAgICB2YXIgYWN0aW9uID0gdGhpcy5hY3RpdmVBY3Rpb25zW2lkXTtcblxuICAgICAgICBpZiAoYWN0aW9uKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFjdGlvbi5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBrZXkgPSBhY3Rpb24udmFsdWVLZXlzW2ldO1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG4gICAgICAgICAgICAgICAgdmFyIGRyaXZlckluZGV4ID0gdmFsdWUuZHJpdmVycy5pbmRleE9mKGlkKTtcblxuICAgICAgICAgICAgICAgIGlmIChkcml2ZXJJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUuZHJpdmVycy5zcGxpY2UoZHJpdmVySW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5udW1Ecml2ZXJzLS07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5hY3RpdmVBY3Rpb25zW2lkXTtcbiAgICAgICAgICAgIHRoaXMubnVtQWN0aXZlQWN0aW9ucy0tO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLm51bUFjdGl2ZUFjdGlvbnMgJiYgdGhpcy5pc0FjdGl2ZSkge1xuICAgICAgICAgICAgX0FjdGlvbi5wcm90b3R5cGUuc3RvcC5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBGbG93O1xufShfQWN0aW9uMy5kZWZhdWx0KTtcblxuRmxvdy5wcm90b3R5cGUuZGVmYXVsdFZhbHVlID0gX0FjdGlvbjMuZGVmYXVsdC5leHRlbmREZWZhdWx0VmFsdWUoe1xuICAgIGRyaXZlcnM6IFtdLFxuICAgIG51bURyaXZlcnM6IDBcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBGbG93O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMFpzYjNjdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenRCUVVGQk96czdPMEZCUTBFN096czdPenM3T3pzN096czdPenRCUVV0QkxFbEJRVTBzWlVGQlpTeFZRVUZETEUxQlFVUTdRVUZCUVN4WFFVRlpMRTlCUVU4c1NVRkJVQ3hEUVVGWkxHTkJRVm9zUTBGQk1rSXNUMEZCVHl4RlFVRnNReXhGUVVGelF5eE5RVUYwUXl4RFFVRmFPMEZCUVVFc1EwRkJja0k3UVVGRFFTeEpRVUZOTEdOQlFXTXNWVUZCUXl4TlFVRkVPMEZCUVVFc1YwRkJXU3hQUVVGUExFbEJRVkFzUTBGQldTeG5Ra0ZCV2l4RFFVRTJRaXhQUVVGUExFVkJRWEJETEVOQlFWbzdRVUZCUVN4RFFVRndRanRCUVVOQkxFbEJRVTBzWVVGQllTeFZRVUZETEVsQlFVUTdRVUZCUVN4WFFVRlhPMEZCUXpGQ0xHdENRVVF3UWp0QlFVVXhRaXh2UWtGQldTeEpRVVpqTzBGQlJ6RkNMRzlDUVVGWkxGbEJTR003UVVGSk1VSXNjMEpCUVdNN1FVRktXU3hMUVVGWU8wRkJRVUVzUTBGQmJrSTdPMGxCVDAwc1NUczdPMEZCUTBZc2EwSkJRVmtzUzBGQldpeEZRVUZ0UWp0QlFVRkJPenRCUVVGQkxIRkVRVU5tTEcxQ1FVRk5MRXRCUVU0c1EwRkVaVHM3UVVGRlppeGpRVUZMTEdGQlFVd3NSMEZCY1VJc1JVRkJja0k3UVVGRFFTeGpRVUZMTEdkQ1FVRk1MRWRCUVhkQ0xFTkJRWGhDTzBGQlNHVTdRVUZKYkVJN08yMUNRVVZFTEVjc1owSkJRVWtzU3l4RlFVRlBPMEZCUTFBc01FSkJRVTBzUjBGQlRpeFpRVUZWTEV0QlFWWTdPMEZCUlVFc1lVRkJTeXhKUVVGTU96dEJRVVZCTEdWQlFVOHNTVUZCVUR0QlFVTklMRXM3T3pzN096czdiVUpCUzBRc1R5eHZRa0ZCVVN4TkxFVkJRVkU3UVVGRFdpeFpRVUZOTEd0Q1FVRnJRaXhQUVVGUExFOUJRVkFzUlVGQmVFSTdRVUZEUVN4WlFVRkpMRmxCUVZrc1JVRkJhRUk3UVVGRFFTeFpRVUZKTEdWQlFXVXNTMEZCYmtJN096dEJRVWRCTEdGQlFVc3NTVUZCU1N4SFFVRlVMRWxCUVdkQ0xHZENRVUZuUWl4TlFVRm9ReXhGUVVGM1F6dEJRVU53UXl4blFrRkJTU3huUWtGQlowSXNUVUZCYUVJc1EwRkJkVUlzWTBGQmRrSXNRMEZCYzBNc1IwRkJkRU1zUzBGQk9FTXNRMEZCUXl4TFFVRkxMRTFCUVV3c1EwRkJXU3hqUVVGYUxFTkJRVEpDTEVkQlFUTkNMRU5CUVc1RUxFVkJRVzlHTzBGQlEyaEdMREJDUVVGVkxFZEJRVllzU1VGQmFVSXNSVUZCYWtJN1FVRkRRU3dyUWtGQlpTeEpRVUZtTzBGQlEwZzdRVUZEU2pzN1FVRkZSQ3haUVVGSkxGbEJRVW9zUlVGQmEwSTdRVUZEWkN4cFFrRkJTeXhIUVVGTUxFTkJRVk1zUlVGQlJTeFJRVUZSTEZOQlFWWXNSVUZCVkR0QlFVTklPenRCUVVWRUxIZENRVUZuUWl4UlFVRm9RaXhIUVVFeVFpeFBRVUZQTEVWQlFXeERPenRCUVVWQkxHVkJRVThzWjBKQlFXZENMRWRCUVdoQ0xFTkJRVzlDTEZkQlFWY3NTVUZCV0N4RlFVRnBRaXhsUVVGcVFpeERRVUZ3UWl4RFFVRlFPMEZCUTBnc1N6czdPenM3T3pzN08yMUNRVk5FTEVzc2IwSkJRVkU3UVVGRFNpd3dRa0ZCVFN4TFFVRk9PenRCUVVWQkxHRkJRVXNzU1VGQlNTeEhRVUZVTEVsQlFXZENMRXRCUVVzc1lVRkJja0lzUlVGQmIwTTdRVUZEYUVNc1owSkJRVWtzUzBGQlN5eGhRVUZNTEVOQlFXMUNMR05CUVc1Q0xFTkJRV3RETEVkQlFXeERMRU5CUVVvc1JVRkJORU03UVVGRGVFTXNiMEpCUVUwc1UwRkJVeXhMUVVGTExHRkJRVXdzUTBGQmJVSXNSMEZCYmtJc1EwRkJaanRCUVVOQkxHOUNRVUZKTEVOQlFVTXNUMEZCVHl4UlFVRmFMRVZCUVhOQ08wRkJRMnhDTERKQ1FVRlBMRXRCUVZBN1FVRkRTRHRCUVVOS08wRkJRMG83TzBGQlJVUXNaVUZCVHl4SlFVRlFPMEZCUTBnc1N6czdiVUpCUlVRc1NTeHRRa0ZCVHp0QlFVTklMREJDUVVGTkxFbEJRVTQ3TzBGQlJVRXNZVUZCU3l4SlFVRkpMRWRCUVZRc1NVRkJaMElzUzBGQlN5eGhRVUZ5UWl4RlFVRnZRenRCUVVOb1F5eG5Ra0ZCU1N4TFFVRkxMR0ZCUVV3c1EwRkJiVUlzWTBGQmJrSXNRMEZCYTBNc1IwRkJiRU1zUTBGQlNpeEZRVUUwUXp0QlFVTjRReXh4UWtGQlN5eGhRVUZNTEVOQlFXMUNMRWRCUVc1Q0xFVkJRWGRDTEVsQlFYaENPMEZCUTBnN1FVRkRTanM3UVVGRlJDeGxRVUZQTEVsQlFWQTdRVUZEU0N4TE96dHRRa0ZGUkN4VkxIVkNRVUZYTEVzc1JVRkJUeXhWTEVWQlFWa3NUeXhGUVVGVE8wRkJRMjVETEdGQlFVc3NTVUZCU1N4SlFVRkpMRU5CUVdJc1JVRkJaMElzU1VGQlNTeExRVUZMTEZsQlFYcENMRVZCUVhWRExFZEJRWFpETEVWQlFUUkRPMEZCUTNoRExHZENRVUZOTEUxQlFVMHNTMEZCU3l4VFFVRk1MRU5CUVdVc1EwRkJaaXhEUVVGYU8wRkJRMEVzWjBKQlFVMHNVVUZCVVN4TFFVRkxMRTFCUVV3c1EwRkJXU3hIUVVGYUxFTkJRV1E3UVVGRFFTeG5Ra0ZCVFN4VFFVRlRMRTFCUVUwc1ZVRkJUaXhIUVVGdFFpeExRVUZMTEdGQlFVd3NRMEZCYlVJc1RVRkJUU3hQUVVGT0xFTkJRV01zUTBGQlpDeERRVUZ1UWl4RFFVRnVRaXhIUVVFd1JDeExRVUY2UlR0QlFVTkJMR2RDUVVGSkxHRkJRV0VzVFVGQlRTeFZRVUZPTEVkQlFXMUNMRTlCUVU4c1RVRkJVQ3hEUVVGakxFZEJRV1FzUlVGQmJVSXNUMEZCZEVNc1IwRkJaMFFzVFVGQlRTeFBRVUYyUlRzN1FVRkZRU3huUWtGQlNTeE5RVUZOTEZWQlFWWXNSVUZCYzBJN1FVRkRiRUlzTmtKQlFXRXNUVUZCVFN4VlFVRk9MRVZCUVdJN1FVRkRTRHM3UVVGRlJDeHJRa0ZCVFN4UFFVRk9MRWRCUVdkQ0xGVkJRV2hDTzBGQlEwZzdPMEZCUlVRc1pVRkJUeXhyUWtGQlRTeFZRVUZPTEZsQlFXbENMRXRCUVdwQ0xFVkJRWGRDTEZWQlFYaENMRVZCUVc5RExFOUJRWEJETEVOQlFWQTdRVUZEU0N4TE96czdPenM3T3pzN2JVSkJVVVFzWXl3eVFrRkJaU3hGTEVWQlFVa3NUU3hGUVVGUk8wRkJRM1pDTEdGQlFVc3NZVUZCVEN4RFFVRnRRaXhGUVVGdVFpeEpRVUY1UWl4TlFVRjZRanRCUVVOQkxHRkJRVXNzWjBKQlFVdzdPMEZCUlVFc1lVRkJTeXhKUVVGSkxFbEJRVWtzUTBGQllpeEZRVUZuUWl4SlFVRkpMRTlCUVU4c1dVRkJNMElzUlVGQmVVTXNSMEZCZWtNc1JVRkJPRU03UVVGRE1VTXNaMEpCUVUwc1RVRkJUU3hQUVVGUExGTkJRVkFzUTBGQmFVSXNRMEZCYWtJc1EwRkJXanRCUVVOQkxHZENRVUZOTEdOQlFXTXNUMEZCVHl4TlFVRlFMRU5CUVdNc1IwRkJaQ3hEUVVGd1FqdEJRVU5CTEdkQ1FVRk5MRkZCUVZFc1MwRkJTeXhOUVVGTUxFTkJRVmtzUjBGQldpeERRVUZrT3pzN1FVRkhRU3huUWtGQlNTeFBRVUZQTEV0QlFWQXNTVUZCWjBJc1RVRkJUU3hWUVVGMFFpeEpRVUZ2UXl4RFFVRkRMRTFCUVUwc1ZVRkJNME1zU1VGQk1FUXNUVUZCVFN4UFFVRk9MRU5CUVdNc1EwRkJaQ3hGUVVGcFFpeFRRVUZxUWl4TFFVRXJRaXhQUVVGUExGTkJRWEJITEVWQlFXZElPMEZCUXpWSExITkNRVUZOTEZWQlFVNHNSMEZCYlVJc2EwTkJRVzFDTEV0QlFVc3NZVUZCVEN4RFFVRnRRaXhOUVVGTkxFOUJRVTRzUTBGQll5eERRVUZrTEVOQlFXNUNMRU5CUVc1Q0xFVkJRWGxFTEUxQlFYcEVMRVZCUVdsRkxFdEJRV3BGTEVWQlFYZEZMRWRCUVhoRkxFTkJRVzVDTzBGQlEwZ3NZVUZHUkN4TlFVVlBMRWxCUVVrc1EwRkJReXhQUVVGUExGZEJRVm9zUlVGQmVVSTdRVUZETlVJc2MwSkJRVTBzVlVGQlRpeEhRVUZ0UWl4VFFVRnVRanM3UVVGRlFTdzBRa0ZCV1N4UlFVRmFMRWxCUVhkQ0xFMUJRVTBzVVVGQk9VSTdRVUZEUVN3MFFrRkJXU3hKUVVGYUxFZEJRVzFDTEZsQlFWa3NUMEZCV2l4SFFVRnpRaXhOUVVGTkxFOUJRUzlETzBGQlEwZzdPMEZCUlVRc2EwSkJRVTBzVDBGQlRpeEhRVUZuUWl4RFFVRkRMRVZCUVVRc1EwRkJhRUk3UVVGRFFTeHJRa0ZCVFN4VlFVRk9MRWRCUVcxQ0xFMUJRVTBzVDBGQlRpeERRVUZqTEUxQlFXcERPMEZCUTBnN08wRkJSVVFzV1VGQlNTeExRVUZMTEdkQ1FVRlVMRVZCUVRKQ08wRkJRM1pDTERoQ1FVRk5MRXRCUVU0N1FVRkRTRHRCUVVOS0xFczdPenM3T3pzN08yMUNRVTlFTEdkQ0xEWkNRVUZwUWl4RkxFVkJRVWs3UVVGRGFrSXNXVUZCVFN4VFFVRlRMRXRCUVVzc1lVRkJUQ3hEUVVGdFFpeEZRVUZ1UWl4RFFVRm1PenRCUVVWQkxGbEJRVWtzVFVGQlNpeEZRVUZaTzBGQlExSXNhVUpCUVVzc1NVRkJTU3hKUVVGSkxFTkJRV0lzUlVGQlowSXNTVUZCU1N4UFFVRlBMRmxCUVROQ0xFVkJRWGxETEVkQlFYcERMRVZCUVRoRE8wRkJRekZETEc5Q1FVRk5MRTFCUVUwc1QwRkJUeXhUUVVGUUxFTkJRV2xDTEVOQlFXcENMRU5CUVZvN1FVRkRRU3h2UWtGQlRTeFJRVUZSTEV0QlFVc3NUVUZCVEN4RFFVRlpMRWRCUVZvc1EwRkJaRHRCUVVOQkxHOUNRVUZOTEdOQlFXTXNUVUZCVFN4UFFVRk9MRU5CUVdNc1QwRkJaQ3hEUVVGelFpeEZRVUYwUWl4RFFVRndRanM3UVVGRlFTeHZRa0ZCU1N4blFrRkJaMElzUTBGQlF5eERRVUZ5UWl4RlFVRjNRanRCUVVOd1Fpd3dRa0ZCVFN4UFFVRk9MRU5CUVdNc1RVRkJaQ3hEUVVGeFFpeFhRVUZ5UWl4RlFVRnJReXhEUVVGc1F6dEJRVU5CTERCQ1FVRk5MRlZCUVU0N1FVRkRTRHRCUVVOS096dEJRVVZFTEcxQ1FVRlBMRXRCUVVzc1lVRkJUQ3hEUVVGdFFpeEZRVUZ1UWl4RFFVRlFPMEZCUTBFc2FVSkJRVXNzWjBKQlFVdzdRVUZEU0RzN1FVRkZSQ3haUVVGSkxFTkJRVU1zUzBGQlN5eG5Ra0ZCVGl4SlFVRXdRaXhMUVVGTExGRkJRVzVETEVWQlFUWkRPMEZCUTNwRExEaENRVUZOTEVsQlFVNDdRVUZEU0R0QlFVTktMRXM3T3pzN08wRkJSMHdzUzBGQlN5eFRRVUZNTEVOQlFXVXNXVUZCWml4SFFVRTRRaXhwUWtGQlR5eHJRa0ZCVUN4RFFVRXdRanRCUVVOd1JDeGhRVUZUTEVWQlJESkRPMEZCUlhCRUxHZENRVUZaTzBGQlJuZERMRU5CUVRGQ0xFTkJRVGxDT3p0clFrRkxaU3hKSWl3aVptbHNaU0k2SWtac2IzY3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwycDJZVzVrWlhKa2IyVnpMME52WkdVdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElFRmpkR2x2YmlCbWNtOXRJQ2N1TGk5aFkzUnBiMjV6TDBGamRHbHZiaWM3WEc1cGJYQnZjblFnWjJWdVpYSmhkR1ZDYkdWdVpFTjFjblpsSUdaeWIyMGdKeTR2Wm14dmR5OW5aVzVsY21GMFpTMWliR1Z1WkMxamRYSjJaU2M3WEc1Y2JpOHFYRzRnSUNBZ1RXVjBhRzlrY3lCaGJtUWdjSEp2Y0dWeWRHbGxjeUIwYnlCaFpHUWdkRzhnWW05MWJtUWdRV04wYVc5dWMxeHVLaTljYm1OdmJuTjBJR0p2ZFc1a1QyNVRkR0Z5ZENBOUlDaGhZM1JwYjI0cElEMCtJR0ZqZEdsdmJpNW1iRzkzTG1GamRHbDJZWFJsUVdOMGFXOXVLR0ZqZEdsdmJpNXBaQ3dnWVdOMGFXOXVLVHRjYm1OdmJuTjBJR0p2ZFc1a1QyNVRkRzl3SUQwZ0tHRmpkR2x2YmlrZ1BUNGdZV04wYVc5dUxtWnNiM2N1WkdWaFkzUnBkbUYwWlVGamRHbHZiaWhoWTNScGIyNHVhV1FwTzF4dVkyOXVjM1FnWW05MWJtUlFjbTl3Y3lBOUlDaG1iRzkzS1NBOVBpQW9lMXh1SUNBZ0lHWnNiM2NzWEc0Z0lDQWdhWE5RY21sdmNtbDBlVG9nZEhKMVpTeGNiaUFnSUNCdmJrRmpkR2wyWVhSbE9pQmliM1Z1WkU5dVUzUmhjblFzWEc0Z0lDQWdiMjVFWldGamRHbDJZWFJsT2lCaWIzVnVaRTl1VTNSdmNGeHVmU2s3WEc1Y2JtTnNZWE56SUVac2IzY2daWGgwWlc1a2N5QkJZM1JwYjI0Z2UxeHVJQ0FnSUdOdmJuTjBjblZqZEc5eUtIQnliM0J6S1NCN1hHNGdJQ0FnSUNBZ0lITjFjR1Z5S0hCeWIzQnpLVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWhZM1JwZG1WQlkzUnBiMjV6SUQwZ2UzMDdYRzRnSUNBZ0lDQWdJSFJvYVhNdWJuVnRRV04wYVhabFFXTjBhVzl1Y3lBOUlEQTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2MyVjBLSEJ5YjNCektTQjdYRzRnSUNBZ0lDQWdJSE4xY0dWeUxuTmxkQ2h3Y205d2N5azdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NXZibU5sS0NrN1hHNWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeXBjYmlBZ0lDQWdJQ0FnUW1sdVpDQkJZM1JwYjI0Z2RHOGdRV04wYjNKY2JpQWdJQ0FxTDF4dUlDQWdJR052Ym01bFkzUW9ZV04wYVc5dUtTQjdYRzRnSUNBZ0lDQWdJR052Ym5OMElHbHVhR1Z5YVhSbFpFRmpkR2x2YmlBOUlHRmpkR2x2Ymk1cGJtaGxjbWwwS0NrN1hHNGdJQ0FnSUNBZ0lHeGxkQ0J1WlhkV1lXeDFaWE1nUFNCN2ZUdGNiaUFnSUNBZ0lDQWdiR1YwSUdoaGMwNWxkMVpoYkhWbGN5QTlJR1poYkhObE8xeHVYRzRnSUNBZ0lDQWdJQzh2SUVOeVpXRjBaU0IyWVd4MVpYTWdiMjRnWVdOMGIzSWdkR2hoZENCa2IyNG5kQ0JsZUdsemRGeHVJQ0FnSUNBZ0lDQm1iM0lnS0d4bGRDQnJaWGtnYVc0Z2FXNW9aWEpwZEdWa1FXTjBhVzl1TG5aaGJIVmxjeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0dsdWFHVnlhWFJsWkVGamRHbHZiaTUyWVd4MVpYTXVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2EyVjVLU0FtSmlBaGRHaHBjeTUyWVd4MVpYTXVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2EyVjVLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUc1bGQxWmhiSFZsYzF0clpYbGRJRDBnZTMwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FHRnpUbVYzVm1Gc2RXVnpJRDBnZEhKMVpUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJR2xtSUNob1lYTk9aWGRXWVd4MVpYTXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YzJWMEtIc2dkbUZzZFdWek9pQnVaWGRXWVd4MVpYTWdmU2s3WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQnBibWhsY21sMFpXUkJZM1JwYjI0dWNHRnlaVzUwU1dRZ1BTQmhZM1JwYjI0dWFXUTdYRzVjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR2x1YUdWeWFYUmxaRUZqZEdsdmJpNXpaWFFvWW05MWJtUlFjbTl3Y3loMGFHbHpMQ0JwYm1obGNtbDBaV1JCWTNScGIyNHBLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQXZLbHh1SUNBZ0lDQWdJQ0JUZEdGeWRDQkJZM1J2Y2x4dVhHNGdJQ0FnSUNBZ0lFbG1JRUZqZEdsdmJpQnBjeUJ3Y205MmFXUmxaQ3dnWW1sdVpDQnBkQ0IwYnlCMGFHbHpJRUZqZEc5eUlHRnVaQ0J6ZEdGeWRGeHVYRzRnSUNBZ0lDQWdJRUJ3WVhKaGJTQW9iM0IwYVc5dVlXd3BJRnRCWTNScGIyNWRYRzRnSUNBZ0tpOWNiaUFnSUNCemRHRnlkQ2dwSUh0Y2JpQWdJQ0FnSUNBZ2MzVndaWEl1YzNSaGNuUW9LVHRjYmx4dUlDQWdJQ0FnSUNCbWIzSWdLR3hsZENCclpYa2dhVzRnZEdocGN5NWhZM1JwZG1WQlkzUnBiMjV6S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RHaHBjeTVoWTNScGRtVkJZM1JwYjI1ekxtaGhjMDkzYmxCeWIzQmxjblI1S0d0bGVTa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQmhZM1JwYjI0Z1BTQjBhR2x6TG1GamRHbDJaVUZqZEdsdmJuTmJhMlY1WFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9JV0ZqZEdsdmJpNXBjMEZqZEdsMlpTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCaFkzUnBiMjR1YzNSaGNuUW9LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnSUNCOVhHNWNiaUFnSUNCemRHOXdLQ2tnZTF4dUlDQWdJQ0FnSUNCemRYQmxjaTV6ZEc5d0tDazdYRzVjYmlBZ0lDQWdJQ0FnWm05eUlDaHNaWFFnYTJWNUlHbHVJSFJvYVhNdVlXTjBhWFpsUVdOMGFXOXVjeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0hSb2FYTXVZV04wYVhabFFXTjBhVzl1Y3k1b1lYTlBkMjVRY205d1pYSjBlU2hyWlhrcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1aFkzUnBkbVZCWTNScGIyNXpXMnRsZVYwdWMzUnZjQ2dwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2QybHNiRkpsYm1SbGNpaGhZM1J2Y2l3Z1puSmhiV1ZUZEdGdGNDd2daV3hoY0hObFpDa2dlMXh1SUNBZ0lDQWdJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUhSb2FYTXViblZ0Vm1Gc2RXVkxaWGx6T3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUd0bGVTQTlJSFJvYVhNdWRtRnNkV1ZMWlhselcybGRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnZG1Gc2RXVWdQU0IwYUdsekxuWmhiSFZsYzF0clpYbGRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnWkhKcGRtVnlJRDBnZG1Gc2RXVXViblZ0UkhKcGRtVnljeUEvSUhSb2FYTXVZV04wYVhabFFXTjBhVzl1YzF0MllXeDFaUzVrY21sMlpYSnpXekJkWFNBNklHWmhiSE5sTzF4dUlDQWdJQ0FnSUNBZ0lDQWdiR1YwSUc1bGQwTjFjbkpsYm5RZ1BTQjJZV3gxWlM1dWRXMUVjbWwyWlhKeklEOGdaSEpwZG1WeUxuWmhiSFZsYzF0clpYbGRMbU4xY25KbGJuUWdPaUIyWVd4MVpTNWpkWEp5Wlc1ME8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9kbUZzZFdVdVlteGxibVJEZFhKMlpTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRzVsZDBOMWNuSmxiblFnUFNCMllXeDFaUzVpYkdWdVpFTjFjblpsS0NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJSFpoYkhWbExtTjFjbkpsYm5RZ1BTQnVaWGREZFhKeVpXNTBPMXh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhOMWNHVnlMbmRwYkd4U1pXNWtaWElvWVdOMGIzSXNJR1p5WVcxbFUzUmhiWEFzSUdWc1lYQnpaV1FwTzF4dUlDQWdJSDFjYmx4dUlDQWdJQzhxWEc0Z0lDQWdJQ0FnSUVGa1pDQmhZM1JwZG1VZ1lXTjBhVzl1YzF4dVhHNGdJQ0FnSUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFZ4dUlDQWdJQ0FnSUNCQWNHRnlZVzBnVzBGamRHbHZibDFjYmlBZ0lDQXFMMXh1SUNBZ0lHRmpkR2wyWVhSbFFXTjBhVzl1S0dsa0xDQmhZM1JwYjI0cElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1aFkzUnBkbVZCWTNScGIyNXpXMmxrWFNBOUlHRmpkR2x2Ymp0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV1ZFcxQlkzUnBkbVZCWTNScGIyNXpLeXM3WEc1Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQmhZM1JwYjI0dWJuVnRWbUZzZFdWTFpYbHpPeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJR3RsZVNBOUlHRmpkR2x2Ymk1MllXeDFaVXRsZVhOYmFWMDdYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0JoWTNScGIyNVdZV3gxWlNBOUlHRmpkR2x2Ymk1MllXeDFaWE5iYTJWNVhUdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJSFpoYkhWbElEMGdkR2hwY3k1MllXeDFaWE5iYTJWNVhUdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdTV1lnZDJVbmNtVWdZbXhsYm1ScGJtY2dkR2hwY3lCaFkzUnBiMjRzSUdGdVpDQjBhR1Z5WlNkeklHOXVJR0ZzY21WaFpIa2dhVzRnY0hKdlozSmxjM05jYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hoWTNScGIyNHVZbXhsYm1RZ0ppWWdkbUZzZFdVdWJuVnRSSEpwZG1WeWN5QW1KaUFoZG1Gc2RXVXVZbXhsYm1SRGRYSjJaU0FtSmlBb2RtRnNkV1V1WkhKcGRtVnljMXN3WFM1d2NtOTBiM1I1Y0dVZ1BUMDlJR0ZqZEdsdmJpNXdjbTkwYjNSNWNHVXBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVXVZbXhsYm1SRGRYSjJaU0E5SUdkbGJtVnlZWFJsUW14bGJtUkRkWEoyWlNoMGFHbHpMbUZqZEdsMlpVRmpkR2x2Ym5OYmRtRnNkV1V1WkhKcGRtVnljMXN3WFYwc0lHRmpkR2x2Yml3Z2RtRnNkV1VzSUd0bGVTazdYRzRnSUNBZ0lDQWdJQ0FnSUNCOUlHVnNjMlVnYVdZZ0tDRmhZM1JwYjI0dWFYTlRZM0oxWW1KcGJtY3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IyWVd4MVpTNWliR1Z1WkVOMWNuWmxJRDBnZFc1a1pXWnBibVZrTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM4dklGQmhjM01nUVdOMGIzSWdkbUZzZFdVZ2NISnZjR1Z5ZEdsbGN5QjBieUJCWTNScGIyNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmhZM1JwYjI1V1lXeDFaUzUyWld4dlkybDBlU0FyUFNCMllXeDFaUzUyWld4dlkybDBlVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JoWTNScGIyNVdZV3gxWlM1bWNtOXRJRDBnWVdOMGFXOXVWbUZzZFdVdVkzVnljbVZ1ZENBOUlIWmhiSFZsTG1OMWNuSmxiblE3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmhiSFZsTG1SeWFYWmxjbk1nUFNCYmFXUmRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RtRnNkV1V1Ym5WdFJISnBkbVZ5Y3lBOUlIWmhiSFZsTG1SeWFYWmxjbk11YkdWdVozUm9PMXh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ2FXWWdLSFJvYVhNdWJuVnRRV04wYVhabFFXTjBhVzl1Y3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYzNWd1pYSXVjM1JoY25Rb0tUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lDOHFYRzRnSUNBZ0lDQWdJRkpsYlc5MlpTQmhZM1JwZG1VZ1lXTjBhVzl1YzF4dVhHNGdJQ0FnSUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFZ4dUlDQWdJQ292WEc0Z0lDQWdaR1ZoWTNScGRtRjBaVUZqZEdsdmJpaHBaQ2tnZTF4dUlDQWdJQ0FnSUNCamIyNXpkQ0JoWTNScGIyNGdQU0IwYUdsekxtRmpkR2wyWlVGamRHbHZibk5iYVdSZE8xeHVYRzRnSUNBZ0lDQWdJR2xtSUNoaFkzUnBiMjRwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnWVdOMGFXOXVMbTUxYlZaaGJIVmxTMlY1Y3pzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdhMlY1SUQwZ1lXTjBhVzl1TG5aaGJIVmxTMlY1YzF0cFhUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCMllXeDFaU0E5SUhSb2FYTXVkbUZzZFdWelcydGxlVjA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdaSEpwZG1WeVNXNWtaWGdnUFNCMllXeDFaUzVrY21sMlpYSnpMbWx1WkdWNFQyWW9hV1FwTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLR1J5YVhabGNrbHVaR1Y0SUNFOVBTQXRNU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZV3gxWlM1a2NtbDJaWEp6TG5Od2JHbGpaU2hrY21sMlpYSkpibVJsZUN3Z01TazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhaaGJIVmxMbTUxYlVSeWFYWmxjbk10TFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJR1JsYkdWMFpTQjBhR2x6TG1GamRHbDJaVUZqZEdsdmJuTmJhV1JkTzF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1dWRXMUJZM1JwZG1WQlkzUnBiMjV6TFMwN1hHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0JwWmlBb0lYUm9hWE11Ym5WdFFXTjBhWFpsUVdOMGFXOXVjeUFtSmlCMGFHbHpMbWx6UVdOMGFYWmxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnpkWEJsY2k1emRHOXdLQ2s3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1OVhHNWNia1pzYjNjdWNISnZkRzkwZVhCbExtUmxabUYxYkhSV1lXeDFaU0E5SUVGamRHbHZiaTVsZUhSbGJtUkVaV1poZFd4MFZtRnNkV1VvZTF4dUlDQWdJR1J5YVhabGNuTTZJRnRkTEZ4dUlDQWdJRzUxYlVSeWFYWmxjbk02SURCY2JuMHBPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JHYkc5M08xeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL0Zsb3cuanNcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfQWN0aW9uMiA9IHJlcXVpcmUoJy4vQWN0aW9uJyk7XG5cbnZhciBfQWN0aW9uMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0FjdGlvbjIpO1xuXG52YXIgX3ByZXNldEVhc2luZyA9IHJlcXVpcmUoJy4vZWFzaW5nL3ByZXNldC1lYXNpbmcnKTtcblxudmFyIF9wcmVzZXRFYXNpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlc2V0RWFzaW5nKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBDT1VOVCA9ICdDb3VudCc7XG52YXIgTkVYVF9TVEVQUyA9IHtcbiAgICBsb29wOiAncmVzdGFydCcsXG4gICAgeW95bzogJ3JldmVyc2UnLFxuICAgIGZsaXA6ICdmbGlwVmFsdWVzJ1xufTtcblxudmFyIFR3ZWVuID0gZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgICBfaW5oZXJpdHMoVHdlZW4sIF9BY3Rpb24pO1xuXG4gICAgZnVuY3Rpb24gVHdlZW4oKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUd2Vlbik7XG5cbiAgICAgICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfVxuXG4gICAgVHdlZW4ucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuZWxhcHNlZCA9IDA7XG4gICAgICAgIHRoaXMuZmxpcENvdW50ID0gdGhpcy55b3lvQ291bnQgPSB0aGlzLmxvb3BDb3VudCA9IDA7XG4gICAgICAgIHRoaXMuaXNTY3J1YmJpbmcgPSBmYWxzZTtcblxuICAgICAgICByZXR1cm4gX0FjdGlvbi5wcm90b3R5cGUuc3RhcnQuY2FsbCh0aGlzKTtcbiAgICB9O1xuXG4gICAgVHdlZW4ucHJvdG90eXBlLm9uVXBkYXRlID0gZnVuY3Rpb24gb25VcGRhdGUodHdlZW4sIGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgICAgICAgdmFyIHByb2dyZXNzVGFyZ2V0ID0gdGhpcy5wbGF5RGlyZWN0aW9uID09PSAxID8gMSA6IDA7XG5cbiAgICAgICAgdGhpcy5lbmRlZCA9IHRydWU7XG5cbiAgICAgICAgaWYgKCF0aGlzLmlzU2NydWJiaW5nKSB7XG4gICAgICAgICAgICB0aGlzLmVsYXBzZWQgKz0gZWxhcHNlZCAqIHRoaXMuZGlsYXRlICogdGhpcy5wbGF5RGlyZWN0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gdGhpcy52YWx1ZUtleXNbaV07XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuXG4gICAgICAgICAgICB2YXIgcHJvZ3Jlc3MgPSAoMCwgX2NhbGMucmVzdHJpY3QpKCgwLCBfY2FsYy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSkodGhpcy5lbGFwc2VkIC0gdmFsdWUuZGVsYXksIDAsIHZhbHVlLmR1cmF0aW9uKSwgMCwgMSk7XG5cbiAgICAgICAgICAgIC8vIE1hcmsgVHdlZW4gYXMgTk9UIGVuZGVkIGlmIHN0aWxsIGluIHByb2dyZXNzXG4gICAgICAgICAgICBpZiAocHJvZ3Jlc3MgIT09IHByb2dyZXNzVGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTdGVwIHByb2dyZXNzIGlmIHdlJ3JlIHN0ZXBwaW5nXG4gICAgICAgICAgICBpZiAodmFsdWUuc3RlcHMpIHtcbiAgICAgICAgICAgICAgICBwcm9ncmVzcyA9ICgwLCBfY2FsYy5zdGVwUHJvZ3Jlc3MpKHByb2dyZXNzLCB2YWx1ZS5zdGVwcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEVhc2UgcHJvZ3Jlc3NcbiAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSAoMCwgX2NhbGMuZWFzZSkocHJvZ3Jlc3MsIHZhbHVlLmZyb20sIHZhbHVlLnRvLCB2YWx1ZS5lYXNlKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBUd2Vlbi5wcm90b3R5cGUub25GcmFtZUVuZCA9IGZ1bmN0aW9uIG9uRnJhbWVFbmQoKSB7XG4gICAgICAgIGlmICh0aGlzLmVuZGVkICYmICF0aGlzLmlzU2NydWJiaW5nKSB7XG4gICAgICAgICAgICB2YXIgc3RlcFRha2VuID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBORVhUX1NURVBTKSB7XG4gICAgICAgICAgICAgICAgaWYgKE5FWFRfU1RFUFMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKDAsIF91dGlscy5pc051bSkodGhpc1trZXldKSAmJiB0aGlzW2tleV0gPiB0aGlzW2tleSArIENPVU5UXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1trZXkgKyBDT1VOVF0rKztcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXBUYWtlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW05FWFRfU1RFUFNba2V5XV0oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFzdGVwVGFrZW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgVHdlZW4ucHJvdG90eXBlLmZsaXBWYWx1ZXMgPSBmdW5jdGlvbiBmbGlwVmFsdWVzKCkge1xuICAgICAgICB2YXIgdmFsdWVzID0gdGhpcy52YWx1ZXM7XG5cbiAgICAgICAgdGhpcy5lbGFwc2VkID0gdGhpcy5kdXJhdGlvbiAtIHRoaXMuZWxhcHNlZDtcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB2YWx1ZXNba2V5XTtcbiAgICAgICAgICAgICAgICB2YXIgX3JlZiA9IFt2YWx1ZS5mcm9tLCB2YWx1ZS50b107XG4gICAgICAgICAgICAgICAgdmFsdWUudG8gPSBfcmVmWzBdO1xuICAgICAgICAgICAgICAgIHZhbHVlLmZyb20gPSBfcmVmWzFdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIFR3ZWVuLnByb3RvdHlwZS5yZXZlcnNlID0gZnVuY3Rpb24gcmV2ZXJzZSgpIHtcbiAgICAgICAgdGhpcy5wbGF5RGlyZWN0aW9uICo9IC0xO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgVHdlZW4ucHJvdG90eXBlLnJlc3RhcnQgPSBmdW5jdGlvbiByZXN0YXJ0KCkge1xuICAgICAgICB0aGlzLmVsYXBzZWQgPSB0aGlzLnBsYXlEaXJlY3Rpb24gPT09IDEgPyAwIDogdGhpcy5kdXJhdGlvbjtcbiAgICAgICAgdGhpcy5zdGFydGVkID0gKDAsIF91dGlscy5jdXJyZW50VGltZSkoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIFR3ZWVuLnByb3RvdHlwZS5zZWVrID0gZnVuY3Rpb24gc2Vlayhwcm9ncmVzcykge1xuICAgICAgICB0aGlzLnNlZWtUaW1lKHRoaXMuZHVyYXRpb24gKiBwcm9ncmVzcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBUd2Vlbi5wcm90b3R5cGUuc2Vla1RpbWUgPSBmdW5jdGlvbiBzZWVrVGltZShlbGFwc2VkKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0FjdGl2ZSB8fCB0aGlzLmlzU2NydWJiaW5nKSB7XG4gICAgICAgICAgICB0aGlzLm9uY2UoKTtcbiAgICAgICAgICAgIHRoaXMuaXNTY3J1YmJpbmcgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5lbGFwc2VkID0gZWxhcHNlZDtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgcmV0dXJuIFR3ZWVuO1xufShfQWN0aW9uMy5kZWZhdWx0KTtcblxuVHdlZW4ucHJvdG90eXBlLmRlZmF1bHRWYWx1ZVByb3AgPSAndG8nO1xuVHdlZW4ucHJvdG90eXBlLmRlZmF1bHRWYWx1ZSA9IF9BY3Rpb24zLmRlZmF1bHQuZXh0ZW5kRGVmYXVsdFZhbHVlKHtcbiAgICBkZWxheTogMCxcbiAgICBkdXJhdGlvbjogMzAwLFxuICAgIGVhc2U6IF9wcmVzZXRFYXNpbmcyLmRlZmF1bHQuZWFzZU91dCxcbiAgICBlbGFwc2VkOiAwLFxuICAgIGZyb206IDAsXG4gICAgc3RlcHM6IDAsXG4gICAgdG86IDAsXG4gICAgcm91bmQ6IGZhbHNlXG59KTtcblR3ZWVuLnByb3RvdHlwZS5kZWZhdWx0UHJvcHMgPSBfQWN0aW9uMy5kZWZhdWx0LmV4dGVuZERlZmF1bHRQcm9wcyh7XG4gICAgYmxlbmQ6IHRydWUsXG4gICAgZGlsYXRlOiAxLFxuICAgIGxvb3A6IDAsXG4gICAgeW95bzogMCxcbiAgICBmbGlwOiAwLFxuICAgIGxvb3BDb3VudDogMCxcbiAgICB5b3lvQ291bnQ6IDAsXG4gICAgZmxpcENvdW50OiAwLFxuICAgIHBsYXlEaXJlY3Rpb246IDEsXG4gICAgaXNTY3J1YmJpbmc6IGZhbHNlLFxuICAgIGVuZGVkOiBmYWxzZSxcbiAgICBlbGFwc2VkOiAwXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gVHdlZW47XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwxUjNaV1Z1TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdRVUZCUVRzN096dEJRVU5CT3pzN08wRkJRMEU3TzBGQlEwRTdPenM3T3pzN096czdRVUZGUVN4SlFVRk5MRkZCUVZFc1QwRkJaRHRCUVVOQkxFbEJRVTBzWVVGQllUdEJRVU5tTEZWQlFVMHNVMEZFVXp0QlFVVm1MRlZCUVUwc1UwRkdVenRCUVVkbUxGVkJRVTA3UVVGSVV5eERRVUZ1UWpzN1NVRk5UU3hMT3pzN096czdPenM3YjBKQlEwWXNTeXh2UWtGQlVUdEJRVU5LTEdGQlFVc3NUMEZCVEN4SFFVRmxMRU5CUVdZN1FVRkRRU3hoUVVGTExGTkJRVXdzUjBGQmFVSXNTMEZCU3l4VFFVRk1MRWRCUVdsQ0xFdEJRVXNzVTBGQlRDeEhRVUZwUWl4RFFVRnVSRHRCUVVOQkxHRkJRVXNzVjBGQlRDeEhRVUZ0UWl4TFFVRnVRanM3UVVGRlFTeGxRVUZQTEd0Q1FVRk5MRXRCUVU0c1YwRkJVRHRCUVVOSUxFczdPMjlDUVVWRUxGRXNjVUpCUVZNc1N5eEZRVUZQTEZVc1JVRkJXU3hQTEVWQlFWTTdRVUZEYWtNc1dVRkJUU3hwUWtGQmEwSXNTMEZCU3l4aFFVRk1MRXRCUVhWQ0xFTkJRWGhDTEVkQlFUWkNMRU5CUVRkQ0xFZEJRV2xETEVOQlFYaEVPenRCUVVWQkxHRkJRVXNzUzBGQlRDeEhRVUZoTEVsQlFXSTdPMEZCUlVFc1dVRkJTU3hEUVVGRExFdEJRVXNzVjBGQlZpeEZRVUYxUWp0QlFVTnVRaXhwUWtGQlN5eFBRVUZNTEVsQlFXbENMRlZCUVZVc1MwRkJTeXhOUVVGb1FpeEhRVUV3UWl4TFFVRkxMR0ZCUVM5RE8wRkJRMGc3TzBGQlJVUXNZVUZCU3l4SlFVRkpMRWxCUVVrc1EwRkJZaXhGUVVGblFpeEpRVUZKTEV0QlFVc3NXVUZCZWtJc1JVRkJkVU1zUjBGQmRrTXNSVUZCTkVNN1FVRkRlRU1zWjBKQlFVMHNUVUZCVFN4TFFVRkxMRk5CUVV3c1EwRkJaU3hEUVVGbUxFTkJRVm83UVVGRFFTeG5Ra0ZCVFN4UlFVRlJMRXRCUVVzc1RVRkJUQ3hEUVVGWkxFZEJRVm9zUTBGQlpEczdRVUZGUVN4blFrRkJTU3hYUVVGWExHOUNRVUZUTEdkRFFVRnhRaXhMUVVGTExFOUJRVXdzUjBGQlpTeE5RVUZOTEV0QlFURkRMRVZCUVdsRUxFTkJRV3BFTEVWQlFXOUVMRTFCUVUwc1VVRkJNVVFzUTBGQlZDeEZRVUU0UlN4RFFVRTVSU3hGUVVGcFJpeERRVUZxUml4RFFVRm1PenM3UVVGSFFTeG5Ra0ZCU1N4aFFVRmhMR05CUVdwQ0xFVkJRV2xETzBGQlF6ZENMSEZDUVVGTExFdEJRVXdzUjBGQllTeExRVUZpTzBGQlEwZzdPenRCUVVkRUxHZENRVUZKTEUxQlFVMHNTMEZCVml4RlFVRnBRanRCUVVOaUxESkNRVUZYTEhkQ1FVRmhMRkZCUVdJc1JVRkJkVUlzVFVGQlRTeExRVUUzUWl4RFFVRllPMEZCUTBnN096dEJRVWRFTEd0Q1FVRk5MRTlCUVU0c1IwRkJaMElzWjBKQlFVc3NVVUZCVEN4RlFVRmxMRTFCUVUwc1NVRkJja0lzUlVGQk1rSXNUVUZCVFN4RlFVRnFReXhGUVVGeFF5eE5RVUZOTEVsQlFUTkRMRU5CUVdoQ08wRkJRMGc3UVVGRFNpeExPenR2UWtGRlJDeFZMSGxDUVVGaE8wRkJRMVFzV1VGQlNTeExRVUZMTEV0QlFVd3NTVUZCWXl4RFFVRkRMRXRCUVVzc1YwRkJlRUlzUlVGQmNVTTdRVUZEYWtNc1owSkJRVWtzV1VGQldTeExRVUZvUWpzN1FVRkZRU3hwUWtGQlN5eEpRVUZKTEVkQlFWUXNTVUZCWjBJc1ZVRkJhRUlzUlVGQk5FSTdRVUZEZUVJc2IwSkJRVWtzVjBGQlZ5eGpRVUZZTEVOQlFUQkNMRWRCUVRGQ0xFTkJRVW9zUlVGQmIwTTdRVUZEYUVNc2QwSkJRVWtzYTBKQlFVMHNTMEZCU3l4SFFVRk1MRU5CUVU0c1MwRkJiMElzUzBGQlN5eEhRVUZNTEVsQlFWa3NTMEZCU3l4TlFVRk5MRXRCUVZnc1EwRkJjRU1zUlVGQmRVUTdRVUZEYmtRc05rSkJRVXNzVFVGQlRTeExRVUZZTzBGQlEwRXNiME5CUVZrc1NVRkJXanRCUVVOQkxEWkNRVUZMTEZkQlFWY3NSMEZCV0N4RFFVRk1PMEZCUTBnN1FVRkRTanRCUVVOS096dEJRVVZFTEdkQ1FVRkpMRU5CUVVNc1UwRkJUQ3hGUVVGblFqdEJRVU5hTEhGQ1FVRkxMRkZCUVV3N1FVRkRTRHRCUVVOS08wRkJRMG9zU3pzN2IwSkJSVVFzVlN4NVFrRkJZVHRCUVVOVUxGbEJRVTBzVTBGQlV5eExRVUZMTEUxQlFYQkNPenRCUVVWQkxHRkJRVXNzVDBGQlRDeEhRVUZsTEV0QlFVc3NVVUZCVEN4SFFVRm5RaXhMUVVGTExFOUJRWEJET3p0QlFVVkJMR0ZCUVVzc1NVRkJTU3hIUVVGVUxFbEJRV2RDTEUxQlFXaENMRVZCUVhkQ08wRkJRM0JDTEdkQ1FVRkpMRTlCUVU4c1kwRkJVQ3hEUVVGelFpeEhRVUYwUWl4RFFVRktMRVZCUVdkRE8wRkJRelZDTEc5Q1FVRk5MRkZCUVZFc1QwRkJUeXhIUVVGUUxFTkJRV1E3UVVGRU5FSXNNa0pCUlVnc1EwRkJReXhOUVVGTkxFbEJRVkFzUlVGQllTeE5RVUZOTEVWQlFXNUNMRU5CUmtjN1FVRkZNMElzYzBKQlFVMHNSVUZHY1VJN1FVRkZha0lzYzBKQlFVMHNTVUZHVnp0QlFVY3ZRanRCUVVOS096dEJRVVZFTEdWQlFVOHNTVUZCVUR0QlFVTklMRXM3TzI5Q1FVVkVMRThzYzBKQlFWVTdRVUZEVGl4aFFVRkxMR0ZCUVV3c1NVRkJjMElzUTBGQlF5eERRVUYyUWp0QlFVTkJMR1ZCUVU4c1NVRkJVRHRCUVVOSUxFczdPMjlDUVVWRUxFOHNjMEpCUVZVN1FVRkRUaXhoUVVGTExFOUJRVXdzUjBGQlowSXNTMEZCU3l4aFFVRk1MRXRCUVhWQ0xFTkJRWGhDTEVkQlFUWkNMRU5CUVRkQ0xFZEJRV2xETEV0QlFVc3NVVUZCY2tRN1FVRkRRU3hoUVVGTExFOUJRVXdzUjBGQlpTeDVRa0ZCWmp0QlFVTkJMR1ZCUVU4c1NVRkJVRHRCUVVOSUxFczdPMjlDUVVWRUxFa3NhVUpCUVVzc1VTeEZRVUZWTzBGQlExZ3NZVUZCU3l4UlFVRk1MRU5CUVdNc1MwRkJTeXhSUVVGTUxFZEJRV2RDTEZGQlFUbENPMEZCUTBFc1pVRkJUeXhKUVVGUU8wRkJRMGdzU3pzN2IwSkJSVVFzVVN4eFFrRkJVeXhQTEVWQlFWTTdRVUZEWkN4WlFVRkpMRU5CUVVNc1MwRkJTeXhSUVVGT0xFbEJRV3RDTEV0QlFVc3NWMEZCTTBJc1JVRkJkME03UVVGRGNFTXNhVUpCUVVzc1NVRkJURHRCUVVOQkxHbENRVUZMTEZkQlFVd3NSMEZCYlVJc1NVRkJia0k3UVVGRFNEczdRVUZGUkN4aFFVRkxMRTlCUVV3c1IwRkJaU3hQUVVGbU96dEJRVVZCTEdWQlFVOHNTVUZCVUR0QlFVTklMRXM3T3pzN08wRkJSMHdzVFVGQlRTeFRRVUZPTEVOQlFXZENMR2RDUVVGb1FpeEhRVUZ0UXl4SlFVRnVRenRCUVVOQkxFMUJRVTBzVTBGQlRpeERRVUZuUWl4WlFVRm9RaXhIUVVFclFpeHBRa0ZCVHl4clFrRkJVQ3hEUVVFd1FqdEJRVU55UkN4WFFVRlBMRU5CUkRoRE8wRkJSWEpFTEdOQlFWVXNSMEZHTWtNN1FVRkhja1FzVlVGQlRTeDFRa0ZCVHl4UFFVaDNRenRCUVVseVJDeGhRVUZUTEVOQlNqUkRPMEZCUzNKRUxGVkJRVTBzUTBGTUswTTdRVUZOY2tRc1YwRkJUeXhEUVU0NFF6dEJRVTl5UkN4UlFVRkpMRU5CVUdsRU8wRkJVWEpFTEZkQlFVODdRVUZTT0VNc1EwRkJNVUlzUTBGQkwwSTdRVUZWUVN4TlFVRk5MRk5CUVU0c1EwRkJaMElzV1VGQmFFSXNSMEZCSzBJc2FVSkJRVThzYTBKQlFWQXNRMEZCTUVJN1FVRkRja1FzVjBGQlR5eEpRVVE0UXp0QlFVVnlSQ3haUVVGUkxFTkJSalpETzBGQlIzSkVMRlZCUVUwc1EwRklLME03UVVGSmNrUXNWVUZCVFN4RFFVb3JRenRCUVV0eVJDeFZRVUZOTEVOQlRDdERPMEZCVFhKRUxHVkJRVmNzUTBGT01FTTdRVUZQY2tRc1pVRkJWeXhEUVZBd1F6dEJRVkZ5UkN4bFFVRlhMRU5CVWpCRE8wRkJVM0pFTEcxQ1FVRmxMRU5CVkhORE8wRkJWWEpFTEdsQ1FVRmhMRXRCVm5kRE8wRkJWM0pFTEZkQlFVOHNTMEZZT0VNN1FVRlpja1FzWVVGQlV6dEJRVm8wUXl4RFFVRXhRaXhEUVVFdlFqczdhMEpCWldVc1N5SXNJbVpwYkdVaU9pSlVkMlZsYmk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YW5aaGJtUmxjbVJ2WlhNdlEyOWtaUzl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnUVdOMGFXOXVJR1p5YjIwZ0p5NHZRV04wYVc5dUp6dGNibWx0Y0c5eWRDQmxZWE5wYm1jZ1puSnZiU0FuTGk5bFlYTnBibWN2Y0hKbGMyVjBMV1ZoYzJsdVp5YzdYRzVwYlhCdmNuUWdleUJqZFhKeVpXNTBWR2x0WlN3Z2FYTk9kVzBnZlNCbWNtOXRJQ2N1TGk5cGJtTXZkWFJwYkhNbk8xeHVhVzF3YjNKMElIc2daV0Z6WlN3Z2NtVnpkSEpwWTNRc0lHZGxkRkJ5YjJkeVpYTnpSbkp2YlZaaGJIVmxMQ0J6ZEdWd1VISnZaM0psYzNNZ2ZTQm1jbTl0SUNjdUxpOXBibU12WTJGc1l5YzdYRzVjYm1OdmJuTjBJRU5QVlU1VUlEMGdKME52ZFc1MEp6dGNibU52Ym5OMElFNUZXRlJmVTFSRlVGTWdQU0I3WEc0Z0lDQWdiRzl2Y0RvZ0ozSmxjM1JoY25RbkxGeHVJQ0FnSUhsdmVXODZJQ2R5WlhabGNuTmxKeXhjYmlBZ0lDQm1iR2x3T2lBblpteHBjRlpoYkhWbGN5ZGNibjA3WEc1Y2JtTnNZWE56SUZSM1pXVnVJR1Y0ZEdWdVpITWdRV04wYVc5dUlIdGNiaUFnSUNCemRHRnlkQ2dwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVsYkdGd2MyVmtJRDBnTUR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVtYkdsd1EyOTFiblFnUFNCMGFHbHpMbmx2ZVc5RGIzVnVkQ0E5SUhSb2FYTXViRzl2Y0VOdmRXNTBJRDBnTUR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVwYzFOamNuVmlZbWx1WnlBOUlHWmhiSE5sTzF4dVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCemRYQmxjaTV6ZEdGeWRDZ3BPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHOXVWWEJrWVhSbEtIUjNaV1Z1TENCbWNtRnRaVk4wWVcxd0xDQmxiR0Z3YzJWa0tTQjdYRzRnSUNBZ0lDQWdJR052Ym5OMElIQnliMmR5WlhOelZHRnlaMlYwSUQwZ0tIUm9hWE11Y0d4aGVVUnBjbVZqZEdsdmJpQTlQVDBnTVNrZ1B5QXhJRG9nTUR0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG1WdVpHVmtJRDBnZEhKMVpUdGNibHh1SUNBZ0lDQWdJQ0JwWmlBb0lYUm9hWE11YVhOVFkzSjFZbUpwYm1jcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVaV3hoY0hObFpDQXJQU0FvWld4aGNITmxaQ0FxSUhSb2FYTXVaR2xzWVhSbEtTQXFJSFJvYVhNdWNHeGhlVVJwY21WamRHbHZianRjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2dkR2hwY3k1dWRXMVdZV3gxWlV0bGVYTTdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdhMlY1SUQwZ2RHaHBjeTUyWVd4MVpVdGxlWE5iYVYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQjJZV3gxWlNBOUlIUm9hWE11ZG1Gc2RXVnpXMnRsZVYwN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUd4bGRDQndjbTluY21WemN5QTlJSEpsYzNSeWFXTjBLR2RsZEZCeWIyZHlaWE56Um5KdmJWWmhiSFZsS0hSb2FYTXVaV3hoY0hObFpDQXRJSFpoYkhWbExtUmxiR0Y1TENBd0xDQjJZV3gxWlM1a2RYSmhkR2x2Ymlrc0lEQXNJREVwTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCTllYSnJJRlIzWldWdUlHRnpJRTVQVkNCbGJtUmxaQ0JwWmlCemRHbHNiQ0JwYmlCd2NtOW5jbVZ6YzF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0hCeWIyZHlaWE56SUNFOVBTQndjbTluY21WemMxUmhjbWRsZENrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11Wlc1a1pXUWdQU0JtWVd4elpUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1UzUmxjQ0J3Y205bmNtVnpjeUJwWmlCM1pTZHlaU0J6ZEdWd2NHbHVaMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFpoYkhWbExuTjBaWEJ6S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NISnZaM0psYzNNZ1BTQnpkR1Z3VUhKdlozSmxjM01vY0hKdlozSmxjM01zSUhaaGJIVmxMbk4wWlhCektUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1JXRnpaU0J3Y205bmNtVnpjMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RtRnNkV1V1WTNWeWNtVnVkQ0E5SUdWaGMyVW9jSEp2WjNKbGMzTXNJSFpoYkhWbExtWnliMjBzSUhaaGJIVmxMblJ2TENCMllXeDFaUzVsWVhObEtUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lHOXVSbkpoYldWRmJtUW9LU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDaDBhR2x6TG1WdVpHVmtJQ1ltSUNGMGFHbHpMbWx6VTJOeWRXSmlhVzVuS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JzWlhRZ2MzUmxjRlJoYTJWdUlEMGdabUZzYzJVN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUJPUlZoVVgxTlVSVkJUS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLRTVGV0ZSZlUxUkZVRk11YUdGelQzZHVVSEp2Y0dWeWRIa29hMlY1S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2FYTk9kVzBvZEdocGMxdHJaWGxkS1NBbUppQjBhR2x6VzJ0bGVWMGdQaUIwYUdselcydGxlU0FySUVOUFZVNVVYU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGMxdHJaWGtnS3lCRFQxVk9WRjByS3p0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhOMFpYQlVZV3RsYmlBOUlIUnlkV1U3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdselcwNUZXRlJmVTFSRlVGTmJhMlY1WFYwb0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0NGemRHVndWR0ZyWlc0cElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG1OdmJYQnNaWFJsS0NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0JtYkdsd1ZtRnNkV1Z6S0NrZ2UxeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCMllXeDFaWE1nUFNCMGFHbHpMblpoYkhWbGN6dGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxtVnNZWEJ6WldRZ1BTQjBhR2x6TG1SMWNtRjBhVzl1SUMwZ2RHaHBjeTVsYkdGd2MyVmtPMXh1WEc0Z0lDQWdJQ0FnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUIyWVd4MVpYTXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2gyWVd4MVpYTXVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2EyVjVLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJSFpoYkhWbElEMGdkbUZzZFdWelcydGxlVjA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnVzNaaGJIVmxMblJ2TENCMllXeDFaUzVtY205dFhTQTlJRnQyWVd4MVpTNW1jbTl0TENCMllXeDFaUzUwYjEwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjenRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnlaWFpsY25ObEtDa2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxuQnNZWGxFYVhKbFkzUnBiMjRnS2owZ0xURTdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQWdJSDFjYmx4dUlDQWdJSEpsYzNSaGNuUW9LU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaV3hoY0hObFpDQTlJQ2gwYUdsekxuQnNZWGxFYVhKbFkzUnBiMjRnUFQwOUlERXBJRDhnTUNBNklIUm9hWE11WkhWeVlYUnBiMjQ3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjM1JoY25SbFpDQTlJR04xY25KbGJuUlVhVzFsS0NrN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNBZ0lIMWNibHh1SUNBZ0lITmxaV3NvY0hKdlozSmxjM01wSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV6WldWclZHbHRaU2gwYUdsekxtUjFjbUYwYVc5dUlDb2djSEp2WjNKbGMzTXBPMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3p0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J6WldWclZHbHRaU2hsYkdGd2MyVmtLU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDZ2hkR2hwY3k1cGMwRmpkR2wyWlNCOGZDQjBhR2x6TG1selUyTnlkV0ppYVc1bktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbTl1WTJVb0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVhWE5UWTNKMVltSnBibWNnUFNCMGNuVmxPMXh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVsYkdGd2MyVmtJRDBnWld4aGNITmxaRHRjYmx4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnSUNCOVhHNTlYRzVjYmxSM1pXVnVMbkJ5YjNSdmRIbHdaUzVrWldaaGRXeDBWbUZzZFdWUWNtOXdJRDBnSjNSdkp6dGNibFIzWldWdUxuQnliM1J2ZEhsd1pTNWtaV1poZFd4MFZtRnNkV1VnUFNCQlkzUnBiMjR1WlhoMFpXNWtSR1ZtWVhWc2RGWmhiSFZsS0h0Y2JpQWdJQ0JrWld4aGVUb2dNQ3hjYmlBZ0lDQmtkWEpoZEdsdmJqb2dNekF3TEZ4dUlDQWdJR1ZoYzJVNklHVmhjMmx1Wnk1bFlYTmxUM1YwTEZ4dUlDQWdJR1ZzWVhCelpXUTZJREFzWEc0Z0lDQWdabkp2YlRvZ01DeGNiaUFnSUNCemRHVndjem9nTUN4Y2JpQWdJQ0IwYnpvZ01DeGNiaUFnSUNCeWIzVnVaRG9nWm1Gc2MyVmNibjBwTzF4dVZIZGxaVzR1Y0hKdmRHOTBlWEJsTG1SbFptRjFiSFJRY205d2N5QTlJRUZqZEdsdmJpNWxlSFJsYm1SRVpXWmhkV3gwVUhKdmNITW9lMXh1SUNBZ0lHSnNaVzVrT2lCMGNuVmxMRnh1SUNBZ0lHUnBiR0YwWlRvZ01TeGNiaUFnSUNCc2IyOXdPaUF3TEZ4dUlDQWdJSGx2ZVc4NklEQXNYRzRnSUNBZ1pteHBjRG9nTUN4Y2JpQWdJQ0JzYjI5d1EyOTFiblE2SURBc1hHNGdJQ0FnZVc5NWIwTnZkVzUwT2lBd0xGeHVJQ0FnSUdac2FYQkRiM1Z1ZERvZ01DeGNiaUFnSUNCd2JHRjVSR2x5WldOMGFXOXVPaUF4TEZ4dUlDQWdJR2x6VTJOeWRXSmlhVzVuT2lCbVlXeHpaU3hjYmlBZ0lDQmxibVJsWkRvZ1ptRnNjMlVzWEc0Z0lDQWdaV3hoY0hObFpEb2dNRnh1ZlNrN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElGUjNaV1Z1TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvVHdlZW4uanNcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfQWN0aW9uMiA9IHJlcXVpcmUoJy4vQWN0aW9uJyk7XG5cbnZhciBfQWN0aW9uMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0FjdGlvbjIpO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFBoeXNpY3MgPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICAgIF9pbmhlcml0cyhQaHlzaWNzLCBfQWN0aW9uKTtcblxuICAgIGZ1bmN0aW9uIFBoeXNpY3MoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQaHlzaWNzKTtcblxuICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uY2FsbC5hcHBseShfQWN0aW9uLCBbdGhpc10uY29uY2F0KGFyZ3MpKSk7XG5cbiAgICAgICAgX3RoaXMuaW5hY3RpdmVGcmFtZXMgPSAwO1xuICAgICAgICBfdGhpcy5jYWxjdWxhdGVzVmVsb2NpdHkgPSB0cnVlO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgUGh5c2ljcy5wcm90b3R5cGUub25VcGRhdGUgPSBmdW5jdGlvbiBvblVwZGF0ZShwaHlzaWNzLCBmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgICAgIHRoaXMuaGFzQ2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMudmFsdWVLZXlzW2ldO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcbiAgICAgICAgICAgIHZhciBwcmV2aW91c1ZhbHVlID0gdmFsdWUucHJldjtcblxuICAgICAgICAgICAgLy8gQXBwbHkgYWNjZWxlcmF0aW9uXG4gICAgICAgICAgICB2YWx1ZS52ZWxvY2l0eSArPSAoMCwgX2NhbGMuc3BlZWRQZXJGcmFtZSkodmFsdWUuYWNjZWxlcmF0aW9uLCBlbGFwc2VkKTtcblxuICAgICAgICAgICAgLy8gQXBwbHkgZnJpY3Rpb25cbiAgICAgICAgICAgIHZhbHVlLnZlbG9jaXR5ICo9IE1hdGgucG93KDEgLSB2YWx1ZS5mcmljdGlvbiwgZWxhcHNlZCAvIDEwMCk7XG5cbiAgICAgICAgICAgIC8vIEFwcGx5IHNwcmluZ1xuICAgICAgICAgICAgaWYgKHZhbHVlLnNwcmluZyAmJiAoMCwgX3V0aWxzLmlzTnVtKSh2YWx1ZS50bykpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGlzdGFuY2VUb1RhcmdldCA9IHZhbHVlLnRvIC0gdmFsdWUuY3VycmVudDtcbiAgICAgICAgICAgICAgICB2YWx1ZS52ZWxvY2l0eSArPSBkaXN0YW5jZVRvVGFyZ2V0ICogKDAsIF9jYWxjLnNwZWVkUGVyRnJhbWUpKHZhbHVlLnNwcmluZywgZWxhcHNlZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEFwcGx5IGxhdGVzdCB2ZWxvY2l0eVxuICAgICAgICAgICAgdmFsdWUuY3VycmVudCArPSAoMCwgX2NhbGMuc3BlZWRQZXJGcmFtZSkodmFsdWUudmVsb2NpdHksIGVsYXBzZWQpO1xuXG4gICAgICAgICAgICAvLyBEZXRlY3QgYm91bmNlXG4gICAgICAgICAgICBpZiAodmFsdWUubWluICE9PSB1bmRlZmluZWQgJiYgdmFsdWUuY3VycmVudCA8IHZhbHVlLm1pbiB8fCB2YWx1ZS5tYXggIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS5jdXJyZW50ID4gdmFsdWUubWF4KSB7XG4gICAgICAgICAgICAgICAgdmFsdWUudmVsb2NpdHkgKj0gLXZhbHVlLmJvdW5jZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdmFsdWUgaGFzIGNoYW5nZWRcbiAgICAgICAgICAgIGlmICh2YWx1ZS5jdXJyZW50ICE9PSBwcmV2aW91c1ZhbHVlIHx8IE1hdGguYWJzKHZhbHVlLnZlbG9jaXR5KSA+PSB2YWx1ZS5zdG9wU3BlZWQgfHwgdmFsdWUuc3ByaW5nICYmIHZhbHVlLmN1cnJlbnQgIT09IHZhbHVlLnRvKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBQaHlzaWNzLnByb3RvdHlwZS5vbkZyYW1lRW5kID0gZnVuY3Rpb24gb25GcmFtZUVuZCgpIHtcbiAgICAgICAgaWYgKHRoaXMubWF4SW5hY3RpdmVGcmFtZXMgIT09IEluZmluaXR5KSB7XG4gICAgICAgICAgICB0aGlzLmluYWN0aXZlRnJhbWVzID0gdGhpcy5oYXNDaGFuZ2VkID8gMSA6IHRoaXMuaW5hY3RpdmVGcmFtZXMgKyAxO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5pbmFjdGl2ZUZyYW1lcyA+PSB0aGlzLm1heEluYWN0aXZlRnJhbWVzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBQaHlzaWNzO1xufShfQWN0aW9uMy5kZWZhdWx0KTtcblxuUGh5c2ljcy5wcm90b3R5cGUuZGVmYXVsdFZhbHVlUHJvcCA9ICd2ZWxvY2l0eSc7XG5QaHlzaWNzLnByb3RvdHlwZS5kZWZhdWx0VmFsdWUgPSBfQWN0aW9uMy5kZWZhdWx0LmV4dGVuZERlZmF1bHRWYWx1ZSh7XG4gICAgYWNjZWxlcmF0aW9uOiAwLCAvLyBbbnVtYmVyXTogQWNjZWxlcmF0aW9uIHRvIGFwcGx5IHRvIHZhbHVlLCBpbiB1bml0cyBwZXIgc2Vjb25kXG4gICAgYm91bmNlOiAwLCAvLyBbbnVtYmVyXTogRmFjdG9yIHRvIG11bHRpcGx5IHZlbG9jaXR5IGJ5IG9uIGJvdW5jZVxuICAgIHNwcmluZzogMCwgLy8gW251bWJlcl06IFNwcmluZyBzdHJlbmd0aCBkdXJpbmcgJ3N0cmluZydcbiAgICBzdG9wU3BlZWQ6IDAuMDAxLCAvLyBbbnVtYmVyXTogU3RvcCBzaW11bGF0aW9uIHVuZGVyIHRoaXMgc3BlZWRcbiAgICBmcmljdGlvbjogMCAvLyBbbnVtYmVyXTogRnJpY3Rpb24gdG8gYXBwbHkgcGVyIGZyYW1lLCAwLTFcbn0pO1xuUGh5c2ljcy5wcm90b3R5cGUuZGVmYXVsdFByb3BzID0gX0FjdGlvbjMuZGVmYXVsdC5leHRlbmREZWZhdWx0UHJvcHMoe1xuICAgIG1heEluYWN0aXZlRnJhbWVzOiAzXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUGh5c2ljcztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDFCb2VYTnBZM011YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dEJRVUZCT3pzN08wRkJRMEU3TzBGQlEwRTdPenM3T3pzN096czdTVUZGVFN4UE96czdRVUZEUml4MVFrRkJjVUk3UVVGQlFUczdRVUZCUVN3d1EwRkJUaXhKUVVGTk8wRkJRVTRzWjBKQlFVMDdRVUZCUVRzN1FVRkJRU3h4UkVGRGFrSXNNRU5CUVZNc1NVRkJWQ3hGUVVScFFqczdRVUZGYWtJc1kwRkJTeXhqUVVGTUxFZEJRWE5DTEVOQlFYUkNPMEZCUTBFc1kwRkJTeXhyUWtGQlRDeEhRVUV3UWl4SlFVRXhRanRCUVVocFFqdEJRVWx3UWpzN2MwSkJSVVFzVVN4eFFrRkJVeXhQTEVWQlFWTXNWU3hGUVVGWkxFOHNSVUZCVXp0QlFVTnVReXhoUVVGTExGVkJRVXdzUjBGQmEwSXNTMEZCYkVJN08wRkJSVUVzWVVGQlN5eEpRVUZKTEVsQlFVa3NRMEZCWWl4RlFVRm5RaXhKUVVGSkxFdEJRVXNzV1VGQmVrSXNSVUZCZFVNc1IwRkJka01zUlVGQk5FTTdRVUZEZUVNc1owSkJRVTBzVFVGQlRTeExRVUZMTEZOQlFVd3NRMEZCWlN4RFFVRm1MRU5CUVZvN1FVRkRRU3huUWtGQlRTeFJRVUZSTEV0QlFVc3NUVUZCVEN4RFFVRlpMRWRCUVZvc1EwRkJaRHRCUVVOQkxHZENRVUZOTEdkQ1FVRm5RaXhOUVVGTkxFbEJRVFZDT3pzN1FVRkhRU3hyUWtGQlRTeFJRVUZPTEVsQlFXdENMSGxDUVVGakxFMUJRVTBzV1VGQmNFSXNSVUZCYTBNc1QwRkJiRU1zUTBGQmJFSTdPenRCUVVkQkxHdENRVUZOTEZGQlFVNHNZVUZCYlVJc1NVRkJTU3hOUVVGTkxGRkJRVGRDTEVWQlFUSkRMRlZCUVZVc1IwRkJja1E3T3p0QlFVZEJMR2RDUVVGSkxFMUJRVTBzVFVGQlRpeEpRVUZuUWl4clFrRkJUU3hOUVVGTkxFVkJRVm9zUTBGQmNFSXNSVUZCY1VNN1FVRkRha01zYjBKQlFVMHNiVUpCUVcxQ0xFMUJRVTBzUlVGQlRpeEhRVUZYTEUxQlFVMHNUMEZCTVVNN1FVRkRRU3h6UWtGQlRTeFJRVUZPTEVsQlFXdENMRzFDUVVGdFFpeDVRa0ZCWXl4TlFVRk5MRTFCUVhCQ0xFVkJRVFJDTEU5QlFUVkNMRU5CUVhKRE8wRkJRMGc3T3p0QlFVZEVMR3RDUVVGTkxFOUJRVTRzU1VGQmFVSXNlVUpCUVdNc1RVRkJUU3hSUVVGd1FpeEZRVUU0UWl4UFFVRTVRaXhEUVVGcVFqczdPMEZCUjBFc1owSkJRVXNzVFVGQlRTeEhRVUZPTEV0QlFXTXNVMEZCWkN4SlFVRXlRaXhOUVVGTkxFOUJRVTRzUjBGQlowSXNUVUZCVFN4SFFVRnNSQ3hKUVVFeVJDeE5RVUZOTEVkQlFVNHNTMEZCWXl4VFFVRmtMRWxCUVRKQ0xFMUJRVTBzVDBGQlRpeEhRVUZuUWl4TlFVRk5MRWRCUVdoSUxFVkJRWE5JTzBGQlEyeElMSE5DUVVGTkxGRkJRVTRzU1VGQmEwSXNRMEZCUlN4TlFVRk5MRTFCUVRGQ08wRkJRMGc3T3p0QlFVZEVMR2RDUVVGSkxFMUJRVTBzVDBGQlRpeExRVUZyUWl4aFFVRnNRaXhKUVVGdFF5eExRVUZMTEVkQlFVd3NRMEZCVXl4TlFVRk5MRkZCUVdZc1MwRkJORUlzVFVGQlRTeFRRVUZ5UlN4SlFVRnRSaXhOUVVGTkxFMUJRVTRzU1VGQlowSXNUVUZCVFN4UFFVRk9MRXRCUVd0Q0xFMUJRVTBzUlVGQkwwZ3NSVUZCYjBrN1FVRkRhRWtzY1VKQlFVc3NWVUZCVEN4SFFVRnJRaXhKUVVGc1FqdEJRVU5JTzBGQlEwbzdRVUZEU2l4TE96dHpRa0ZGUkN4VkxIbENRVUZoTzBGQlExUXNXVUZCU1N4TFFVRkxMR2xDUVVGTUxFdEJRVEpDTEZGQlFTOUNMRVZCUVhsRE8wRkJRM0pETEdsQ1FVRkxMR05CUVV3c1IwRkJjMElzUzBGQlN5eFZRVUZNTEVkQlFXdENMRU5CUVd4Q0xFZEJRWE5DTEV0QlFVc3NZMEZCVEN4SFFVRnpRaXhEUVVGc1JUczdRVUZGUVN4blFrRkJTU3hMUVVGTExHTkJRVXdzU1VGQmRVSXNTMEZCU3l4cFFrRkJhRU1zUlVGQmJVUTdRVUZETDBNc2NVSkJRVXNzVVVGQlREdEJRVU5JTzBGQlEwbzdRVUZEU2l4TE96czdPenRCUVVkTUxGRkJRVkVzVTBGQlVpeERRVUZyUWl4blFrRkJiRUlzUjBGQmNVTXNWVUZCY2tNN1FVRkRRU3hSUVVGUkxGTkJRVklzUTBGQmEwSXNXVUZCYkVJc1IwRkJhVU1zYVVKQlFVOHNhMEpCUVZBc1EwRkJNRUk3UVVGRGRrUXNhMEpCUVdNc1EwRkVlVU1zUlR0QlFVVjJSQ3haUVVGUkxFTkJSaXRETEVVN1FVRkhka1FzV1VGQlVTeERRVWdyUXl4Rk8wRkJTWFpFTEdWQlFWY3NTMEZLTkVNc1JUdEJRVXQyUkN4alFVRlZMRU03UVVGTU5rTXNRMEZCTVVJc1EwRkJha003UVVGUFFTeFJRVUZSTEZOQlFWSXNRMEZCYTBJc1dVRkJiRUlzUjBGQmFVTXNhVUpCUVU4c2EwSkJRVkFzUTBGQk1FSTdRVUZEZGtRc2RVSkJRVzFDTzBGQlJHOURMRU5CUVRGQ0xFTkJRV3BET3p0clFrRkpaU3hQSWl3aVptbHNaU0k2SWxCb2VYTnBZM011YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMnAyWVc1a1pYSmtiMlZ6TDBOdlpHVXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJRUZqZEdsdmJpQm1jbTl0SUNjdUwwRmpkR2x2YmljN1hHNXBiWEJ2Y25RZ2V5QnpjR1ZsWkZCbGNrWnlZVzFsSUgwZ1puSnZiU0FuTGk0dmFXNWpMMk5oYkdNbk8xeHVhVzF3YjNKMElIc2dhWE5PZFcwZ2ZTQm1jbTl0SUNjdUxpOXBibU12ZFhScGJITW5PMXh1WEc1amJHRnpjeUJRYUhsemFXTnpJR1Y0ZEdWdVpITWdRV04wYVc5dUlIdGNiaUFnSUNCamIyNXpkSEoxWTNSdmNpZ3VMaTVoY21kektTQjdYRzRnSUNBZ0lDQWdJSE4xY0dWeUtDNHVMbUZ5WjNNcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1sdVlXTjBhWFpsUm5KaGJXVnpJRDBnTUR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVqWVd4amRXeGhkR1Z6Vm1Wc2IyTnBkSGtnUFNCMGNuVmxPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHOXVWWEJrWVhSbEtIQm9lWE5wWTNNc0lHWnlZVzFsVTNSaGJYQXNJR1ZzWVhCelpXUXBJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NW9ZWE5EYUdGdVoyVmtJRDBnWm1Gc2MyVTdYRzVjYmlBZ0lDQWdJQ0FnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCMGFHbHpMbTUxYlZaaGJIVmxTMlY1Y3pzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCclpYa2dQU0IwYUdsekxuWmhiSFZsUzJWNWMxdHBYVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUhaaGJIVmxJRDBnZEdocGN5NTJZV3gxWlhOYmEyVjVYVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUhCeVpYWnBiM1Z6Vm1Gc2RXVWdQU0IyWVd4MVpTNXdjbVYyTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCQmNIQnNlU0JoWTJObGJHVnlZWFJwYjI1Y2JpQWdJQ0FnSUNBZ0lDQWdJSFpoYkhWbExuWmxiRzlqYVhSNUlDczlJSE53WldWa1VHVnlSbkpoYldVb2RtRnNkV1V1WVdOalpXeGxjbUYwYVc5dUxDQmxiR0Z3YzJWa0tUdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdRWEJ3YkhrZ1puSnBZM1JwYjI1Y2JpQWdJQ0FnSUNBZ0lDQWdJSFpoYkhWbExuWmxiRzlqYVhSNUlDbzlJQ2d4SUMwZ2RtRnNkV1V1Wm5KcFkzUnBiMjRwSUNvcUlDaGxiR0Z3YzJWa0lDOGdNVEF3S1R0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1FYQndiSGtnYzNCeWFXNW5YRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9kbUZzZFdVdWMzQnlhVzVuSUNZbUlHbHpUblZ0S0haaGJIVmxMblJ2S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUdScGMzUmhibU5sVkc5VVlYSm5aWFFnUFNCMllXeDFaUzUwYnlBdElIWmhiSFZsTG1OMWNuSmxiblE3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVXVkbVZzYjJOcGRIa2dLejBnWkdsemRHRnVZMlZVYjFSaGNtZGxkQ0FxSUhOd1pXVmtVR1Z5Um5KaGJXVW9kbUZzZFdVdWMzQnlhVzVuTENCbGJHRndjMlZrS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnUVhCd2JIa2diR0YwWlhOMElIWmxiRzlqYVhSNVhHNGdJQ0FnSUNBZ0lDQWdJQ0IyWVd4MVpTNWpkWEp5Wlc1MElDczlJSE53WldWa1VHVnlSbkpoYldVb2RtRnNkV1V1ZG1Wc2IyTnBkSGtzSUdWc1lYQnpaV1FwTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCRVpYUmxZM1FnWW05MWJtTmxYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9LSFpoYkhWbExtMXBiaUFoUFQwZ2RXNWtaV1pwYm1Wa0lDWW1JSFpoYkhWbExtTjFjbkpsYm5RZ1BDQjJZV3gxWlM1dGFXNHBJSHg4SUNoMllXeDFaUzV0WVhnZ0lUMDlJSFZ1WkdWbWFXNWxaQ0FtSmlCMllXeDFaUzVqZFhKeVpXNTBJRDRnZG1Gc2RXVXViV0Y0S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIWmhiSFZsTG5abGJHOWphWFI1SUNvOUlDMGdkbUZzZFdVdVltOTFibU5sTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCRGFHVmpheUJwWmlCMllXeDFaU0JvWVhNZ1kyaGhibWRsWkZ4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0haaGJIVmxMbU4xY25KbGJuUWdJVDA5SUhCeVpYWnBiM1Z6Vm1Gc2RXVWdmSHdnVFdGMGFDNWhZbk1vZG1Gc2RXVXVkbVZzYjJOcGRIa3BJRDQ5SUhaaGJIVmxMbk4wYjNCVGNHVmxaQ0I4ZkNBb2RtRnNkV1V1YzNCeWFXNW5JQ1ltSUhaaGJIVmxMbU4xY25KbGJuUWdJVDA5SUhaaGJIVmxMblJ2S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YUdGelEyaGhibWRsWkNBOUlIUnlkV1U3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmlBZ0lDQnZia1p5WVcxbFJXNWtLQ2tnZTF4dUlDQWdJQ0FnSUNCcFppQW9kR2hwY3k1dFlYaEpibUZqZEdsMlpVWnlZVzFsY3lBaFBUMGdTVzVtYVc1cGRIa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YVc1aFkzUnBkbVZHY21GdFpYTWdQU0IwYUdsekxtaGhjME5vWVc1blpXUWdQeUF4SURvZ2RHaHBjeTVwYm1GamRHbDJaVVp5WVcxbGN5QXJJREU3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbWx1WVdOMGFYWmxSbkpoYldWeklENDlJSFJvYVhNdWJXRjRTVzVoWTNScGRtVkdjbUZ0WlhNcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG1OdmJYQnNaWFJsS0NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1OVhHNWNibEJvZVhOcFkzTXVjSEp2ZEc5MGVYQmxMbVJsWm1GMWJIUldZV3gxWlZCeWIzQWdQU0FuZG1Wc2IyTnBkSGtuTzF4dVVHaDVjMmxqY3k1d2NtOTBiM1I1Y0dVdVpHVm1ZWFZzZEZaaGJIVmxJRDBnUVdOMGFXOXVMbVY0ZEdWdVpFUmxabUYxYkhSV1lXeDFaU2g3WEc0Z0lDQWdZV05qWld4bGNtRjBhVzl1T2lBd0xDQXZMeUJiYm5WdFltVnlYVG9nUVdOalpXeGxjbUYwYVc5dUlIUnZJR0Z3Y0d4NUlIUnZJSFpoYkhWbExDQnBiaUIxYm1sMGN5QndaWElnYzJWamIyNWtYRzRnSUNBZ1ltOTFibU5sT2lBd0xDQXZMeUJiYm5WdFltVnlYVG9nUm1GamRHOXlJSFJ2SUcxMWJIUnBjR3g1SUhabGJHOWphWFI1SUdKNUlHOXVJR0p2ZFc1alpWeHVJQ0FnSUhOd2NtbHVaem9nTUN3Z0x5OGdXMjUxYldKbGNsMDZJRk53Y21sdVp5QnpkSEpsYm1kMGFDQmtkWEpwYm1jZ0ozTjBjbWx1WnlkY2JpQWdJQ0J6ZEc5d1UzQmxaV1E2SURBdU1EQXhMQ0F2THlCYmJuVnRZbVZ5WFRvZ1UzUnZjQ0J6YVcxMWJHRjBhVzl1SUhWdVpHVnlJSFJvYVhNZ2MzQmxaV1JjYmlBZ0lDQm1jbWxqZEdsdmJqb2dNQ0F2THlCYmJuVnRZbVZ5WFRvZ1JuSnBZM1JwYjI0Z2RHOGdZWEJ3YkhrZ2NHVnlJR1p5WVcxbExDQXdMVEZjYm4wcE8xeHVVR2g1YzJsamN5NXdjbTkwYjNSNWNHVXVaR1ZtWVhWc2RGQnliM0J6SUQwZ1FXTjBhVzl1TG1WNGRHVnVaRVJsWm1GMWJIUlFjbTl3Y3loN1hHNGdJQ0FnYldGNFNXNWhZM1JwZG1WR2NtRnRaWE02SUROY2JuMHBPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JRYUhsemFXTnpPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9QaHlzaWNzLmpzXG4gKiogbW9kdWxlIGlkID0gNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX0FjdGlvbjIgPSByZXF1aXJlKCcuL0FjdGlvbicpO1xuXG52YXIgX0FjdGlvbjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BY3Rpb24yKTtcblxudmFyIF9Qb2ludGVyID0gcmVxdWlyZSgnLi4vaW5wdXQvUG9pbnRlcicpO1xuXG52YXIgX1BvaW50ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUG9pbnRlcik7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLypcbiAgICBTY3JhcGUgeC95IGNvb3JkaW5hdGVzIGZyb20gcHJvdmlkZWQgZXZlbnRcblxuICAgIEBwYXJhbSBbZXZlbnRdXG4gICAgQHJldHVybiBbb2JqZWN0XVxuKi9cbnZhciBtb3VzZUV2ZW50VG9Qb2ludCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogZS5wYWdlWCxcbiAgICAgICAgeTogZS5wYWdlWVxuICAgIH07XG59O1xuXG52YXIgdG91Y2hFdmVudFRvUG9pbnQgPSBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBjaGFuZ2VkVG91Y2hlcyA9IF9yZWYuY2hhbmdlZFRvdWNoZXM7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCxcbiAgICAgICAgeTogY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WVxuICAgIH07XG59O1xuXG52YXIgY3JlYXRlUG9pbnRlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgcmV0dXJuIGUudG91Y2hlcyA/IG5ldyBfUG9pbnRlcjIuZGVmYXVsdCh0b3VjaEV2ZW50VG9Qb2ludChlKSwgJ3RvdWNobW92ZScsIHRvdWNoRXZlbnRUb1BvaW50KSA6IG5ldyBfUG9pbnRlcjIuZGVmYXVsdChtb3VzZUV2ZW50VG9Qb2ludChlKSwgJ21vdXNlbW92ZScsIG1vdXNlRXZlbnRUb1BvaW50KTtcbn07XG5cbnZhciBnZXRBY3R1YWxFdmVudCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgcmV0dXJuIGUub3JpZ2luYWxFdmVudCB8fCBlO1xufTtcblxudmFyIFRyYWNrID0gZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgICBfaW5oZXJpdHMoVHJhY2ssIF9BY3Rpb24pO1xuXG4gICAgZnVuY3Rpb24gVHJhY2soKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUcmFjayk7XG5cbiAgICAgICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfVxuXG4gICAgVHJhY2sucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gc3RhcnQoaW5wdXQpIHtcbiAgICAgICAgX0FjdGlvbi5wcm90b3R5cGUuc3RhcnQuY2FsbCh0aGlzKTtcblxuICAgICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQgPSBpbnB1dC5zdGF0ZSA/IGlucHV0IDogY3JlYXRlUG9pbnRlcihnZXRBY3R1YWxFdmVudChpbnB1dCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbnB1dE9mZnNldCA9IHt9O1xuICAgICAgICB0aGlzLmlucHV0T3JpZ2luID0gX2V4dGVuZHMoe30sIHRoaXMuaW5wdXQuc3RhdGUpO1xuICAgICAgICB0aGlzLmlucHV0LnN0YXJ0KCk7XG4gICAgfTtcblxuICAgIFRyYWNrLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgICAgX0FjdGlvbi5wcm90b3R5cGUuc3RvcC5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLmlucHV0LnN0b3AoKTtcbiAgICB9O1xuXG4gICAgVHJhY2sucHJvdG90eXBlLm9uVXBkYXRlID0gZnVuY3Rpb24gb25VcGRhdGUodHJhY2ssIGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgICAgICAgdGhpcy5pbnB1dE9mZnNldCA9ICgwLCBfY2FsYy5vZmZzZXQpKHRoaXMuaW5wdXRPcmlnaW4sIHRoaXMuaW5wdXQuc3RhdGUpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMudmFsdWVLZXlzW2ldO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5pbnB1dE9mZnNldC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcblxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5kaXJlY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IHRoaXMuaW5wdXQuc3RhdGVbdmFsdWUud2F0Y2ggfHwga2V5XTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gdmFsdWUuZnJvbSArIHRoaXMuaW5wdXRPZmZzZXRbdmFsdWUud2F0Y2ggfHwga2V5XTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBTbW9vdGggdmFsdWUgaWYgd2UgaGF2ZSBzbW9vdGhpbmdcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUuc21vb3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSAoMCwgX2NhbGMuc21vb3RoKSh2YWx1ZS5jdXJyZW50LCB2YWx1ZS5wcmV2LCBlbGFwc2VkLCB2YWx1ZS5zbW9vdGgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gVHJhY2s7XG59KF9BY3Rpb24zLmRlZmF1bHQpO1xuXG5UcmFjay5wcm90b3R5cGUuZGVmYXVsdFZhbHVlUHJvcCA9ICd3YXRjaCc7XG5UcmFjay5wcm90b3R5cGUuZGVmYXVsdFZhbHVlID0gX0FjdGlvbjMuZGVmYXVsdC5leHRlbmREZWZhdWx0VmFsdWUoe1xuICAgIGRpcmVjdDogZmFsc2Vcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBUcmFjaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDFSeVlXTnJMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096dEJRVUZCT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3T3pzN096czdPenM3T3pzN096dEJRVkZCTEVsQlFVMHNiMEpCUVc5Q0xGVkJRVU1zUTBGQlJEdEJRVUZCTEZkQlFWRTdRVUZET1VJc1YwRkJSeXhGUVVGRkxFdEJSSGxDTzBGQlJUbENMRmRCUVVjc1JVRkJSVHRCUVVaNVFpeExRVUZTTzBGQlFVRXNRMEZCTVVJN08wRkJTMEVzU1VGQlRTeHZRa0ZCYjBJN1FVRkJRU3hSUVVGSExHTkJRVWdzVVVGQlJ5eGpRVUZJTzBGQlFVRXNWMEZCZVVJN1FVRkRMME1zVjBGQlJ5eGxRVUZsTEVOQlFXWXNSVUZCYTBJc1QwRkVNRUk3UVVGRkwwTXNWMEZCUnl4bFFVRmxMRU5CUVdZc1JVRkJhMEk3UVVGR01FSXNTMEZCZWtJN1FVRkJRU3hEUVVFeFFqczdRVUZMUVN4SlFVRk5MR2RDUVVGblFpeFZRVUZETEVOQlFVUTdRVUZCUVN4WFFVRlBMRVZCUVVVc1QwRkJSaXhIUVVONlFpeHpRa0ZCV1N4clFrRkJhMElzUTBGQmJFSXNRMEZCV2l4RlFVRnJReXhYUVVGc1F5eEZRVUVyUXl4cFFrRkJMME1zUTBGRWVVSXNSMEZGZWtJc2MwSkJRVmtzYTBKQlFXdENMRU5CUVd4Q0xFTkJRVm9zUlVGQmEwTXNWMEZCYkVNc1JVRkJLME1zYVVKQlFTOURMRU5CUm10Q08wRkJRVUVzUTBGQmRFSTdPMEZCU1VFc1NVRkJUU3hwUWtGQmFVSXNWVUZCUXl4RFFVRkVPMEZCUVVFc1YwRkJUeXhGUVVGRkxHRkJRVVlzU1VGQmJVSXNRMEZCTVVJN1FVRkJRU3hEUVVGMlFqczdTVUZGVFN4TE96czdPenM3T3pzN2IwSkJRMFlzU3l4clFrRkJUU3hMTEVWQlFVODdRVUZEVkN3d1FrRkJUU3hMUVVGT096dEJRVVZCTEZsQlFVa3NTMEZCU2l4RlFVRlhPMEZCUTFBc2FVSkJRVXNzUzBGQlRDeEhRVUZoTEUxQlFVMHNTMEZCVGl4SFFVRmpMRXRCUVdRc1IwRkJjMElzWTBGQll5eGxRVUZsTEV0QlFXWXNRMEZCWkN4RFFVRnVRenRCUVVOSU96dEJRVVZFTEdGQlFVc3NWMEZCVEN4SFFVRnRRaXhGUVVGdVFqdEJRVU5CTEdGQlFVc3NWMEZCVEN4blFrRkJkMElzUzBGQlN5eExRVUZNTEVOQlFWY3NTMEZCYmtNN1FVRkRRU3hoUVVGTExFdEJRVXdzUTBGQlZ5eExRVUZZTzBGQlEwZ3NTenM3YjBKQlJVUXNTU3h0UWtGQlR6dEJRVU5JTERCQ1FVRk5MRWxCUVU0N1FVRkRRU3hoUVVGTExFdEJRVXdzUTBGQlZ5eEpRVUZZTzBGQlEwZ3NTenM3YjBKQlJVUXNVU3h4UWtGQlV5eExMRVZCUVU4c1ZTeEZRVUZaTEU4c1JVRkJVenRCUVVOcVF5eGhRVUZMTEZkQlFVd3NSMEZCYlVJc2EwSkJRVThzUzBGQlN5eFhRVUZhTEVWQlFYbENMRXRCUVVzc1MwRkJUQ3hEUVVGWExFdEJRWEJETEVOQlFXNUNPenRCUVVWQkxHRkJRVXNzU1VGQlNTeEpRVUZKTEVOQlFXSXNSVUZCWjBJc1NVRkJTU3hMUVVGTExGbEJRWHBDTEVWQlFYVkRMRWRCUVhaRExFVkJRVFJETzBGQlEzaERMR2RDUVVGTkxFMUJRVTBzUzBGQlN5eFRRVUZNTEVOQlFXVXNRMEZCWml4RFFVRmFPenRCUVVWQkxHZENRVUZKTEV0QlFVc3NWMEZCVEN4RFFVRnBRaXhqUVVGcVFpeERRVUZuUXl4SFFVRm9ReXhEUVVGS0xFVkJRVEJETzBGQlEzUkRMRzlDUVVGTkxGRkJRVkVzUzBGQlN5eE5RVUZNTEVOQlFWa3NSMEZCV2l4RFFVRmtPenRCUVVWQkxHOUNRVUZKTEUxQlFVMHNUVUZCVml4RlFVRnJRanRCUVVOa0xEQkNRVUZOTEU5QlFVNHNSMEZCWjBJc1MwRkJTeXhMUVVGTUxFTkJRVmNzUzBGQldDeERRVUZwUWl4TlFVRk5MRXRCUVU0c1NVRkJaU3hIUVVGb1F5eERRVUZvUWp0QlFVTklMR2xDUVVaRUxFMUJSVTg3UVVGRFNDd3dRa0ZCVFN4UFFVRk9MRWRCUVdkQ0xFMUJRVTBzU1VGQlRpeEhRVUZoTEV0QlFVc3NWMEZCVEN4RFFVRnBRaXhOUVVGTkxFdEJRVTRzU1VGQlpTeEhRVUZvUXl4RFFVRTNRanRCUVVOSU96czdRVUZIUkN4dlFrRkJTU3hOUVVGTkxFMUJRVllzUlVGQmEwSTdRVUZEWkN3d1FrRkJUU3hQUVVGT0xFZEJRV2RDTEd0Q1FVRlBMRTFCUVUwc1QwRkJZaXhGUVVGelFpeE5RVUZOTEVsQlFUVkNMRVZCUVd0RExFOUJRV3hETEVWQlFUSkRMRTFCUVUwc1RVRkJha1FzUTBGQmFFSTdRVUZEU0R0QlFVTktPMEZCUTBvN1FVRkRTaXhMT3pzN096dEJRVWRNTEUxQlFVMHNVMEZCVGl4RFFVRm5RaXhuUWtGQmFFSXNSMEZCYlVNc1QwRkJia003UVVGRFFTeE5RVUZOTEZOQlFVNHNRMEZCWjBJc1dVRkJhRUlzUjBGQkswSXNhVUpCUVU4c2EwSkJRVkFzUTBGQk1FSTdRVUZEY2tRc1dVRkJVVHRCUVVRMlF5eERRVUV4UWl4RFFVRXZRanM3YTBKQlNXVXNTeUlzSW1acGJHVWlPaUpVY21GamF5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmFuWmhibVJsY21SdlpYTXZRMjlrWlM5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1FXTjBhVzl1SUdaeWIyMGdKeTR2UVdOMGFXOXVKenRjYm1sdGNHOXlkQ0JRYjJsdWRHVnlJR1p5YjIwZ0p5NHVMMmx1Y0hWMEwxQnZhVzUwWlhJbk8xeHVhVzF3YjNKMElIc2djMjF2YjNSb0xDQnZabVp6WlhRZ2ZTQm1jbTl0SUNjdUxpOXBibU12WTJGc1l5YzdYRzVjYmk4cVhHNGdJQ0FnVTJOeVlYQmxJSGd2ZVNCamIyOXlaR2x1WVhSbGN5Qm1jbTl0SUhCeWIzWnBaR1ZrSUdWMlpXNTBYRzVjYmlBZ0lDQkFjR0Z5WVcwZ1cyVjJaVzUwWFZ4dUlDQWdJRUJ5WlhSMWNtNGdXMjlpYW1WamRGMWNiaW92WEc1amIyNXpkQ0J0YjNWelpVVjJaVzUwVkc5UWIybHVkQ0E5SUNobEtTQTlQaUFvZTF4dUlDQWdJSGc2SUdVdWNHRm5aVmdzWEc0Z0lDQWdlVG9nWlM1d1lXZGxXVnh1ZlNrN1hHNWNibU52Ym5OMElIUnZkV05vUlhabGJuUlViMUJ2YVc1MElEMGdLSHNnWTJoaGJtZGxaRlJ2ZFdOb1pYTWdmU2tnUFQ0Z0tIdGNiaUFnSUNCNE9pQmphR0Z1WjJWa1ZHOTFZMmhsYzFzd1hTNWpiR2xsYm5SWUxGeHVJQ0FnSUhrNklHTm9ZVzVuWldSVWIzVmphR1Z6V3pCZExtTnNhV1Z1ZEZsY2JuMHBPMXh1WEc1amIyNXpkQ0JqY21WaGRHVlFiMmx1ZEdWeUlEMGdLR1VwSUQwK0lHVXVkRzkxWTJobGN5QS9YRzRnSUNBZ2JtVjNJRkJ2YVc1MFpYSW9kRzkxWTJoRmRtVnVkRlJ2VUc5cGJuUW9aU2tzSUNkMGIzVmphRzF2ZG1VbkxDQjBiM1ZqYUVWMlpXNTBWRzlRYjJsdWRDa2dPaUJjYmlBZ0lDQnVaWGNnVUc5cGJuUmxjaWh0YjNWelpVVjJaVzUwVkc5UWIybHVkQ2hsS1N3Z0oyMXZkWE5sYlc5MlpTY3NJRzF2ZFhObFJYWmxiblJVYjFCdmFXNTBLVHRjYmx4dVkyOXVjM1FnWjJWMFFXTjBkV0ZzUlhabGJuUWdQU0FvWlNrZ1BUNGdaUzV2Y21sbmFXNWhiRVYyWlc1MElIeDhJR1U3WEc1Y2JtTnNZWE56SUZSeVlXTnJJR1Y0ZEdWdVpITWdRV04wYVc5dUlIdGNiaUFnSUNCemRHRnlkQ2hwYm5CMWRDa2dlMXh1SUNBZ0lDQWdJQ0J6ZFhCbGNpNXpkR0Z5ZENncE8xeHVYRzRnSUNBZ0lDQWdJR2xtSUNocGJuQjFkQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1cGJuQjFkQ0E5SUdsdWNIVjBMbk4wWVhSbElEOGdhVzV3ZFhRZ09pQmpjbVZoZEdWUWIybHVkR1Z5S0dkbGRFRmpkSFZoYkVWMlpXNTBLR2x1Y0hWMEtTazdYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbWx1Y0hWMFQyWm1jMlYwSUQwZ2UzMDdYRzRnSUNBZ0lDQWdJSFJvYVhNdWFXNXdkWFJQY21sbmFXNGdQU0I3SUM0dUxuUm9hWE11YVc1d2RYUXVjM1JoZEdVZ2ZUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1cGJuQjFkQzV6ZEdGeWRDZ3BPMXh1SUNBZ0lIMWNibHh1SUNBZ0lITjBiM0FvS1NCN1hHNGdJQ0FnSUNBZ0lITjFjR1Z5TG5OMGIzQW9LVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXBibkIxZEM1emRHOXdLQ2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdiMjVWY0dSaGRHVW9kSEpoWTJzc0lHWnlZVzFsVTNSaGJYQXNJR1ZzWVhCelpXUXBJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXBibkIxZEU5bVpuTmxkQ0E5SUc5bVpuTmxkQ2gwYUdsekxtbHVjSFYwVDNKcFoybHVMQ0IwYUdsekxtbHVjSFYwTG5OMFlYUmxLVHRjYmx4dUlDQWdJQ0FnSUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElIUm9hWE11Ym5WdFZtRnNkV1ZMWlhsek95QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElHdGxlU0E5SUhSb2FYTXVkbUZzZFdWTFpYbHpXMmxkTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RHaHBjeTVwYm5CMWRFOW1abk5sZEM1b1lYTlBkMjVRY205d1pYSjBlU2hyWlhrcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2RtRnNkV1VnUFNCMGFHbHpMblpoYkhWbGMxdHJaWGxkTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFpoYkhWbExtUnBjbVZqZENrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IyWVd4MVpTNWpkWEp5Wlc1MElEMGdkR2hwY3k1cGJuQjFkQzV6ZEdGMFpWdDJZV3gxWlM1M1lYUmphQ0I4ZkNCclpYbGRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhaaGJIVmxMbU4xY25KbGJuUWdQU0IyWVd4MVpTNW1jbTl0SUNzZ2RHaHBjeTVwYm5CMWRFOW1abk5sZEZ0MllXeDFaUzUzWVhSamFDQjhmQ0JyWlhsZE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzh2SUZOdGIyOTBhQ0IyWVd4MVpTQnBaaUIzWlNCb1lYWmxJSE50YjI5MGFHbHVaMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMllXeDFaUzV6Ylc5dmRHZ3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnNkV1V1WTNWeWNtVnVkQ0E5SUhOdGIyOTBhQ2gyWVd4MVpTNWpkWEp5Wlc1MExDQjJZV3gxWlM1d2NtVjJMQ0JsYkdGd2MyVmtMQ0IyWVd4MVpTNXpiVzl2ZEdncE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JuMWNibHh1VkhKaFkyc3VjSEp2ZEc5MGVYQmxMbVJsWm1GMWJIUldZV3gxWlZCeWIzQWdQU0FuZDJGMFkyZ25PMXh1VkhKaFkyc3VjSEp2ZEc5MGVYQmxMbVJsWm1GMWJIUldZV3gxWlNBOUlFRmpkR2x2Ymk1bGVIUmxibVJFWldaaGRXeDBWbUZzZFdVb2UxeHVJQ0FnSUdScGNtVmpkRG9nWm1Gc2MyVmNibjBwTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCVWNtRmphenRjYmlKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvVHJhY2suanNcbiAqKiBtb2R1bGUgaWQgPSA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfbG9vcCA9IHJlcXVpcmUoJy4vbG9vcCcpO1xuXG52YXIgbG9vcCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9sb29wKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfSAvKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCYXNlIFRhc2sgY2xhc3MgZm9yIGNyZWF0aW5nIGEgdGFzayBvbiB0aGUgbWFpbiByZW5kZXIgbG9vcC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuXG5cbmZ1bmN0aW9uIGNsZWFudXAoKSB7XG4gICAgdGhpcy5vbkNsZWFudXAgPSB1bmRlZmluZWQ7XG4gICAgbG9vcC5kZWFjdGl2YXRlKHRoaXMuaWQpO1xufVxuXG5mdW5jdGlvbiBhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLm9uQ2xlYW51cCA9IGNsZWFudXA7XG59XG5cbnZhciBUYXNrID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRhc2socHJvcHMpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRhc2spO1xuXG4gICAgICAgIHRoaXMuaWQgPSBsb29wLmdldFRhc2tJZCgpO1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHRoaXMuZGVmYXVsdFByb3BzKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5kZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kZWZhdWx0UHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSB0aGlzLmRlZmF1bHRQcm9wc1trZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0KHByb3BzKTtcbiAgICB9XG5cbiAgICBUYXNrLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiBzZXQocHJvcHMpIHtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgICAgICAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IHByb3BzW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgVGFzay5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgICAgbG9vcC5hY3RpdmF0ZSh0aGlzLmlkLCB0aGlzKTtcblxuICAgICAgICB0aGlzLm9uQWN0aXZhdGVMb29wID0gdGhpcy5vbkNsZWFudXAgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuaXNDb21wbGV0ZSA9IGZhbHNlO1xuXG4gICAgICAgIGlmICh0aGlzLm9uU3RhcnQpIHtcbiAgICAgICAgICAgIHRoaXMub25TdGFydCh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBUYXNrLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgICAgbG9vcC5kZWFjdGl2YXRlKHRoaXMuaWQpO1xuXG4gICAgICAgIGlmICh0aGlzLm9uU3RvcCkge1xuICAgICAgICAgICAgdGhpcy5vblN0b3AodGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgVGFzay5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uIG9uY2UoKSB7XG4gICAgICAgIGxvb3AuYWN0aXZhdGUodGhpcy5pZCwgdGhpcyk7XG4gICAgICAgIHRoaXMub25DbGVhbnVwID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLm9uQWN0aXZhdGVMb29wID0gYWN0aXZhdGU7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIFRhc2sucHJvdG90eXBlLmNvbXBsZXRlID0gZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICAgIHRoaXMuc3RvcCgpO1xuXG4gICAgICAgIGlmICh0aGlzLm9uQ29tcGxldGUpIHtcbiAgICAgICAgICAgIHRoaXMub25Db21wbGV0ZSh0aGlzKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKlxuICAgICAgICAjIEV4dGVuZCB0aGlzIFByb2Nlc3Mgd2l0aCBuZXcgcHJvcGVydGllc1xuICAgICAgICAjIyBSZXR1cm5zIG5ldyBpbnN0YW5jZSBvZiB0aGlzIFByb2Nlc3MncyBgcHJvdG90eXBlYCB3aXRoIGV4aXN0aW5nIGFuZCBuZXcgcHJvcGVydGllc1xuICAgICAgICAgQHBhcmFtIFtvYmplY3RdIChvcHRpb25hbClcbiAgICAgICAgQHJldHVybiBbUHJvY2Vzc11cbiAgICAqL1xuXG5cbiAgICBUYXNrLnByb3RvdHlwZS5pbmhlcml0ID0gZnVuY3Rpb24gaW5oZXJpdChwcm9wcykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzLmlkO1xuXG4gICAgICAgIHZhciBpbmhlcml0ZWRQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyh0aGlzLCBbJ2lkJ10pO1xuXG4gICAgICAgIHJldHVybiBuZXcgdGhpcy5jb25zdHJ1Y3RvcihfZXh0ZW5kcyh7fSwgaW5oZXJpdGVkUHJvcHMsIHByb3BzKSk7XG4gICAgfTtcblxuICAgIHJldHVybiBUYXNrO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBUYXNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkwWVhOckwxUmhjMnN1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPMEZCUjBFN08wbEJRVmtzU1RzN096czdPenM3T3pzN1FVRkZXaXhUUVVGVExFOUJRVlFzUjBGQmJVSTdRVUZEWml4VFFVRkxMRk5CUVV3c1IwRkJhVUlzVTBGQmFrSTdRVUZEUVN4VFFVRkxMRlZCUVV3c1EwRkJaMElzUzBGQlN5eEZRVUZ5UWp0QlFVTklPenRCUVVWRUxGTkJRVk1zVVVGQlZDeEhRVUZ2UWp0QlFVTm9RaXhUUVVGTExGTkJRVXdzUjBGQmFVSXNUMEZCYWtJN1FVRkRTRHM3U1VGRmIwSXNTVHRCUVVOcVFpeHJRa0ZCV1N4TFFVRmFMRVZCUVcxQ08wRkJRVUU3TzBGQlEyWXNZVUZCU3l4RlFVRk1MRWRCUVZVc1MwRkJTeXhUUVVGTUxFVkJRVlk3UVVGRFFTeGhRVUZMTEZGQlFVd3NSMEZCWjBJc1MwRkJhRUk3TzBGQlJVRXNXVUZCU1N4TFFVRkxMRmxCUVZRc1JVRkJkVUk3UVVGRGJrSXNhVUpCUVVzc1NVRkJTU3hIUVVGVUxFbEJRV2RDTEV0QlFVc3NXVUZCY2tJc1JVRkJiVU03UVVGREwwSXNiMEpCUVVrc1MwRkJTeXhaUVVGTUxFTkJRV3RDTEdOQlFXeENMRU5CUVdsRExFZEJRV3BETEVOQlFVb3NSVUZCTWtNN1FVRkRka01zZVVKQlFVc3NSMEZCVEN4SlFVRlpMRXRCUVVzc1dVRkJUQ3hEUVVGclFpeEhRVUZzUWl4RFFVRmFPMEZCUTBnN1FVRkRTanRCUVVOS096dEJRVVZFTEdGQlFVc3NSMEZCVEN4RFFVRlRMRXRCUVZRN1FVRkRTRHM3YlVKQlJVUXNSeXhuUWtGQlNTeExMRVZCUVU4N1FVRkRVQ3hoUVVGTExFbEJRVWtzUjBGQlZDeEpRVUZuUWl4TFFVRm9RaXhGUVVGMVFqdEJRVU51UWl4blFrRkJTU3hOUVVGTkxHTkJRVTRzUTBGQmNVSXNSMEZCY2tJc1EwRkJTaXhGUVVFclFqdEJRVU16UWl4eFFrRkJTeXhIUVVGTUxFbEJRVmtzVFVGQlRTeEhRVUZPTEVOQlFWbzdRVUZEU0R0QlFVTktPenRCUVVWRUxHVkJRVThzU1VGQlVEdEJRVU5JTEVzN08yMUNRVVZFTEVzc2IwSkJRVkU3UVVGRFNpeGhRVUZMTEZGQlFVd3NRMEZCWXl4TFFVRkxMRVZCUVc1Q0xFVkJRWFZDTEVsQlFYWkNPenRCUVVWQkxHRkJRVXNzWTBGQlRDeEhRVUZ6UWl4TFFVRkxMRk5CUVV3c1IwRkJhVUlzVTBGQmRrTTdRVUZEUVN4aFFVRkxMRlZCUVV3c1IwRkJhMElzUzBGQmJFSTdPMEZCUlVFc1dVRkJTU3hMUVVGTExFOUJRVlFzUlVGQmEwSTdRVUZEWkN4cFFrRkJTeXhQUVVGTUxFTkJRV0VzU1VGQllqdEJRVU5JT3p0QlFVVkVMR1ZCUVU4c1NVRkJVRHRCUVVOSUxFczdPMjFDUVVWRUxFa3NiVUpCUVU4N1FVRkRTQ3hoUVVGTExGVkJRVXdzUTBGQlowSXNTMEZCU3l4RlFVRnlRanM3UVVGRlFTeFpRVUZKTEV0QlFVc3NUVUZCVkN4RlFVRnBRanRCUVVOaUxHbENRVUZMTEUxQlFVd3NRMEZCV1N4SlFVRmFPMEZCUTBnN08wRkJSVVFzWlVGQlR5eEpRVUZRTzBGQlEwZ3NTenM3YlVKQlJVUXNTU3h0UWtGQlR6dEJRVU5JTEdGQlFVc3NVVUZCVEN4RFFVRmpMRXRCUVVzc1JVRkJia0lzUlVGQmRVSXNTVUZCZGtJN1FVRkRRU3hoUVVGTExGTkJRVXdzUjBGQmFVSXNVMEZCYWtJN1FVRkRRU3hoUVVGTExHTkJRVXdzUjBGQmMwSXNVVUZCZEVJN08wRkJSVUVzWlVGQlR5eEpRVUZRTzBGQlEwZ3NTenM3YlVKQlJVUXNVU3gxUWtGQlZ6dEJRVU5RTEdGQlFVc3NTVUZCVERzN1FVRkZRU3haUVVGSkxFdEJRVXNzVlVGQlZDeEZRVUZ4UWp0QlFVTnFRaXhwUWtGQlN5eFZRVUZNTEVOQlFXZENMRWxCUVdoQ08wRkJRMGc3UVVGRFNpeExPenM3T3pzN096czdPMjFDUVZORUxFOHNiMEpCUVZFc1N5eEZRVUZQTzBGQlFVRXNXVUZEU0N4RlFVUkhMRWRCUTNWQ0xFbEJSSFpDTEVOQlEwZ3NSVUZFUnpzN1FVRkJRU3haUVVOSkxHTkJSRW9zTkVKQlEzVkNMRWxCUkhaQ096dEJRVVZZTEdWQlFVOHNTVUZCU1N4TFFVRkxMRmRCUVZRc1kwRkJNRUlzWTBGQk1VSXNSVUZCTmtNc1MwRkJOME1zUlVGQlVEdEJRVU5JTEVzN096czdPMnRDUVRORlowSXNTU0lzSW1acGJHVWlPaUpVWVhOckxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5cWRtRnVaR1Z5Wkc5bGN5OURiMlJsTDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpOHFYRzRnSUNBZ1FtRnpaU0JVWVhOcklHTnNZWE56SUdadmNpQmpjbVZoZEdsdVp5QmhJSFJoYzJzZ2IyNGdkR2hsSUcxaGFXNGdjbVZ1WkdWeUlHeHZiM0F1WEc0cUwxeHVhVzF3YjNKMElDb2dZWE1nYkc5dmNDQm1jbTl0SUNjdUwyeHZiM0FuTzF4dVhHNW1kVzVqZEdsdmJpQmpiR1ZoYm5Wd0tDa2dlMXh1SUNBZ0lIUm9hWE11YjI1RGJHVmhiblZ3SUQwZ2RXNWtaV1pwYm1Wa08xeHVJQ0FnSUd4dmIzQXVaR1ZoWTNScGRtRjBaU2gwYUdsekxtbGtLVHRjYm4xY2JseHVablZ1WTNScGIyNGdZV04wYVhaaGRHVW9LU0I3WEc0Z0lDQWdkR2hwY3k1dmJrTnNaV0Z1ZFhBZ1BTQmpiR1ZoYm5Wd08xeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JqYkdGemN5QlVZWE5ySUh0Y2JpQWdJQ0JqYjI1emRISjFZM1J2Y2lod2NtOXdjeWtnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbWxrSUQwZ2JHOXZjQzVuWlhSVVlYTnJTV1FvS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVwYzBGamRHbDJaU0E5SUdaaGJITmxPMXh1WEc0Z0lDQWdJQ0FnSUdsbUlDaDBhR2x6TG1SbFptRjFiSFJRY205d2N5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2EyVjVJR2x1SUhSb2FYTXVaR1ZtWVhWc2RGQnliM0J6S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFJvYVhNdVpHVm1ZWFZzZEZCeWIzQnpMbWhoYzA5M2JsQnliM0JsY25SNUtHdGxlU2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2hwYzF0clpYbGRJRDBnZEdocGN5NWtaV1poZFd4MFVISnZjSE5iYTJWNVhUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0IwYUdsekxuTmxkQ2h3Y205d2N5azdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2MyVjBLSEJ5YjNCektTQjdYRzRnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR3RsZVNCcGJpQndjbTl3Y3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIQnliM0J6TG1oaGMwOTNibEJ5YjNCbGNuUjVLR3RsZVNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6VzJ0bGVWMGdQU0J3Y205d2MxdHJaWGxkTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2MzUmhjblFvS1NCN1hHNGdJQ0FnSUNBZ0lHeHZiM0F1WVdOMGFYWmhkR1VvZEdocGN5NXBaQ3dnZEdocGN5azdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NXZia0ZqZEdsMllYUmxURzl2Y0NBOUlIUm9hWE11YjI1RGJHVmhiblZ3SUQwZ2RXNWtaV1pwYm1Wa08xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1selEyOXRjR3hsZEdVZ1BTQm1ZV3h6WlR0Y2JseHVJQ0FnSUNBZ0lDQnBaaUFvZEdocGN5NXZibE4wWVhKMEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbTl1VTNSaGNuUW9kR2hwY3lrN1hHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3p0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J6ZEc5d0tDa2dlMXh1SUNBZ0lDQWdJQ0JzYjI5d0xtUmxZV04wYVhaaGRHVW9kR2hwY3k1cFpDazdYRzRnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0JwWmlBb2RHaHBjeTV2YmxOMGIzQXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YjI1VGRHOXdLSFJvYVhNcE8xeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYjI1alpTZ3BJSHRjYmlBZ0lDQWdJQ0FnYkc5dmNDNWhZM1JwZG1GMFpTaDBhR2x6TG1sa0xDQjBhR2x6S1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV2YmtOc1pXRnVkWEFnUFNCMWJtUmxabWx1WldRN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YjI1QlkzUnBkbUYwWlV4dmIzQWdQU0JoWTNScGRtRjBaVHRjYmx4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnSUNCOVhHNWNiaUFnSUNCamIyMXdiR1YwWlNncElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1emRHOXdLQ2s3WEc1Y2JpQWdJQ0FnSUNBZ2FXWWdLSFJvYVhNdWIyNURiMjF3YkdWMFpTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV2YmtOdmJYQnNaWFJsS0hSb2FYTXBPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeXBjYmlBZ0lDQWdJQ0FnSXlCRmVIUmxibVFnZEdocGN5QlFjbTlqWlhOeklIZHBkR2dnYm1WM0lIQnliM0JsY25ScFpYTmNiaUFnSUNBZ0lDQWdJeU1nVW1WMGRYSnVjeUJ1WlhjZ2FXNXpkR0Z1WTJVZ2IyWWdkR2hwY3lCUWNtOWpaWE56SjNNZ1lIQnliM1J2ZEhsd1pXQWdkMmwwYUNCbGVHbHpkR2x1WnlCaGJtUWdibVYzSUhCeWIzQmxjblJwWlhOY2JseHVJQ0FnSUNBZ0lDQkFjR0Z5WVcwZ1cyOWlhbVZqZEYwZ0tHOXdkR2x2Ym1Gc0tWeHVJQ0FnSUNBZ0lDQkFjbVYwZFhKdUlGdFFjbTlqWlhOelhWeHVJQ0FnSUNvdlhHNGdJQ0FnYVc1b1pYSnBkQ2h3Y205d2N5a2dlMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQjdJR2xrTENBdUxpNXBibWhsY21sMFpXUlFjbTl3Y3lCOUlEMGdkR2hwY3p0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUc1bGR5QjBhR2x6TG1OdmJuTjBjblZqZEc5eUtIc2dMaTR1YVc1b1pYSnBkR1ZrVUhKdmNITXNJQzR1TG5CeWIzQnpJSDBwTzF4dUlDQWdJSDFjYm4waVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3Rhc2svVGFzay5qc1xuICoqIG1vZHVsZSBpZCA9IDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9UYXNrMiA9IHJlcXVpcmUoJy4uL3Rhc2svVGFzaycpO1xuXG52YXIgX1Rhc2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVGFzazIpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIElucHV0ID0gZnVuY3Rpb24gKF9UYXNrKSB7XG4gICAgX2luaGVyaXRzKElucHV0LCBfVGFzayk7XG5cbiAgICBmdW5jdGlvbiBJbnB1dChpbml0aWFsVmFsdWVzLCBwb2xsKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbnB1dCk7XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1Rhc2suY2FsbCh0aGlzKSk7XG5cbiAgICAgICAgX3RoaXMuc3RhdGUgPSBpbml0aWFsVmFsdWVzO1xuXG4gICAgICAgIGlmICgoMCwgX3V0aWxzLmlzRnVuYykocG9sbCkpIHtcbiAgICAgICAgICAgIF90aGlzLm9uRnJhbWVTdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMubGF0ZXN0KF90aGlzLnBvbGwoKSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBNYW51YWxseSBhZGQgbGF0ZXN0IHZhbHVlc1xuICAgICAgICAgQHBhcmFtIFtvYmplY3RdXG4gICAgKi9cblxuXG4gICAgSW5wdXQucHJvdG90eXBlLmxhdGVzdCA9IGZ1bmN0aW9uIGxhdGVzdChwcm9wcykge1xuICAgICAgICB0aGlzLnN0YXRlID0gX2V4dGVuZHMoe30sIHRoaXMuc3RhdGUsIHByb3BzKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIElucHV0O1xufShfVGFzazMuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IElucHV0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm5CMWRDOUpibkIxZEM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3UVVGQlFUczdPenRCUVVOQk96czdPenM3T3pzN08wbEJSWEZDTEVzN096dEJRVU5xUWl4dFFrRkJXU3hoUVVGYUxFVkJRVEpDTEVsQlFUTkNMRVZCUVdsRE8wRkJRVUU3TzBGQlFVRXNjVVJCUXpkQ0xHZENRVVEyUWpzN1FVRkZOMElzWTBGQlN5eExRVUZNTEVkQlFXRXNZVUZCWWpzN1FVRkZRU3haUVVGSkxHMUNRVUZQTEVsQlFWQXNRMEZCU2l4RlFVRnJRanRCUVVOa0xHdENRVUZMTEZsQlFVd3NSMEZCYjBJN1FVRkJRU3gxUWtGQlRTeE5RVUZMTEUxQlFVd3NRMEZCV1N4TlFVRkxMRWxCUVV3c1JVRkJXaXhEUVVGT08wRkJRVUVzWVVGQmNFSTdRVUZEU0R0QlFVNDBRanRCUVU5b1F6czdPenM3T3pzN2IwSkJUMFFzVFN4dFFrRkJUeXhMTEVWQlFVODdRVUZEVml4aFFVRkxMRXRCUVV3c1owSkJRV3RDTEV0QlFVc3NTMEZCZGtJc1JVRkJhVU1zUzBGQmFrTTdRVUZEU0N4TE96czdPenRyUWtGcVFtZENMRXNpTENKbWFXeGxJam9pU1c1d2RYUXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwycDJZVzVrWlhKa2IyVnpMME52WkdVdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElGUmhjMnNnWm5KdmJTQW5MaTR2ZEdGemF5OVVZWE5ySnp0Y2JtbHRjRzl5ZENCN0lHbHpSblZ1WXlCOUlHWnliMjBnSnk0dUwybHVZeTkxZEdsc2N5YzdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR05zWVhOeklFbHVjSFYwSUdWNGRHVnVaSE1nVkdGemF5QjdYRzRnSUNBZ1kyOXVjM1J5ZFdOMGIzSW9hVzVwZEdsaGJGWmhiSFZsY3l3Z2NHOXNiQ2tnZTF4dUlDQWdJQ0FnSUNCemRYQmxjaWdwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbk4wWVhSbElEMGdhVzVwZEdsaGJGWmhiSFZsY3p0Y2JseHVJQ0FnSUNBZ0lDQnBaaUFvYVhOR2RXNWpLSEJ2Ykd3cEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbTl1Um5KaGJXVlRkR0Z5ZENBOUlDZ3BJRDArSUhSb2FYTXViR0YwWlhOMEtIUm9hWE11Y0c5c2JDZ3BLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJQzhxWEc0Z0lDQWdJQ0FnSUUxaGJuVmhiR3g1SUdGa1pDQnNZWFJsYzNRZ2RtRnNkV1Z6WEc1Y2JpQWdJQ0FnSUNBZ1FIQmhjbUZ0SUZ0dlltcGxZM1JkWEc0Z0lDQWdLaTljYmlBZ0lDQnNZWFJsYzNRb2NISnZjSE1wSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV6ZEdGMFpTQTlJSHNnTGk0dWRHaHBjeTV6ZEdGMFpTd2dMaTR1Y0hKdmNITWdmVHRjYmlBZ0lDQjlYRzU5WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lucHV0L0lucHV0LmpzXG4gKiogbW9kdWxlIGlkID0gOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3RpbWVsaW5lID0gcmVxdWlyZSgnLi90aW1lbGluZScpO1xuXG52YXIgX3RpbWVsaW5lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RpbWVsaW5lKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIERFRkFVTFRfSU5URVJWQUwgPSAxMDA7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICh0d2VlbnMsIHByb3BzKSB7XG4gICAgdmFyIHByb3BzSXNEdXJhdGlvbiA9ICgwLCBfdXRpbHMuaXNOdW0pKHByb3BzKTtcbiAgICB2YXIgaW50ZXJ2YWwgPSBwcm9wc0lzRHVyYXRpb24gPyBwcm9wcyA6IHByb3BzID8gcHJvcHMuaW50ZXJ2YWwgfHwgREVGQVVMVF9JTlRFUlZBTCA6IERFRkFVTFRfSU5URVJWQUw7XG4gICAgdmFyIGF0ID0gMDtcbiAgICB2YXIgdGltZWxpbmVEZWZpbml0aW9uID0gdHdlZW5zLm1hcChmdW5jdGlvbiAodHdlZW4pIHtcbiAgICAgICAgdmFyIGRlZiA9IHsgdHdlZW46IHR3ZWVuLCBhdDogYXQgfTtcbiAgICAgICAgYXQgKz0gaW50ZXJ2YWw7XG4gICAgICAgIHJldHVybiBkZWY7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKDAsIF90aW1lbGluZTIuZGVmYXVsdCkodGltZWxpbmVEZWZpbml0aW9uLCBwcm9wcyk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1NdmMzUmhaMmRsY2k1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPMEZCUVVFN096czdRVUZEUVRzN096dEJRVVZCTEVsQlFVMHNiVUpCUVcxQ0xFZEJRWHBDT3p0clFrRkZaU3hWUVVGRExFMUJRVVFzUlVGQlV5eExRVUZVTEVWQlFXMUNPMEZCUXpsQ0xGRkJRVTBzYTBKQlFXdENMR3RDUVVGTkxFdEJRVTRzUTBGQmVFSTdRVUZEUVN4UlFVRk5MRmRCUVZjc2EwSkJRV3RDTEV0QlFXeENMRWRCUVRCQ0xGRkJRVkVzVFVGQlRTeFJRVUZPTEVsQlFXdENMR2RDUVVFeFFpeEhRVUUyUXl4blFrRkJlRVk3UVVGRFFTeFJRVUZKTEV0QlFVc3NRMEZCVkR0QlFVTkJMRkZCUVUwc2NVSkJRWEZDTEU5QlFVOHNSMEZCVUN4RFFVRlhMRlZCUVVNc1MwRkJSQ3hGUVVGWE8wRkJRemRETEZsQlFVMHNUVUZCVFN4RlFVRkZMRmxCUVVZc1JVRkJVeXhOUVVGVUxFVkJRVm83UVVGRFFTeGpRVUZOTEZGQlFVNDdRVUZEUVN4bFFVRlBMRWRCUVZBN1FVRkRTQ3hMUVVvd1FpeERRVUV6UWpzN1FVRk5RU3hYUVVGUExIZENRVUZUTEd0Q1FVRlVMRVZCUVRaQ0xFdEJRVGRDTEVOQlFWQTdRVUZEU0N4RElpd2labWxzWlNJNkluTjBZV2RuWlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDJwMllXNWtaWEprYjJWekwwTnZaR1V2Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhScGJXVnNhVzVsSUdaeWIyMGdKeTR2ZEdsdFpXeHBibVVuTzF4dWFXMXdiM0owSUhzZ2FYTk9kVzBnZlNCbWNtOXRJQ2N1TDNWMGFXeHpKenRjYmx4dVkyOXVjM1FnUkVWR1FWVk1WRjlKVGxSRlVsWkJUQ0E5SURFd01EdGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdLSFIzWldWdWN5d2djSEp2Y0hNcElEMCtJSHRjYmlBZ0lDQmpiMjV6ZENCd2NtOXdjMGx6UkhWeVlYUnBiMjRnUFNCcGMwNTFiU2h3Y205d2N5azdYRzRnSUNBZ1kyOXVjM1FnYVc1MFpYSjJZV3dnUFNCd2NtOXdjMGx6UkhWeVlYUnBiMjRnUHlCd2NtOXdjeUE2SUhCeWIzQnpJRDhnY0hKdmNITXVhVzUwWlhKMllXd2dmSHdnUkVWR1FWVk1WRjlKVGxSRlVsWkJUQ0E2SUVSRlJrRlZURlJmU1U1VVJWSldRVXc3WEc0Z0lDQWdiR1YwSUdGMElEMGdNRHRjYmlBZ0lDQmpiMjV6ZENCMGFXMWxiR2x1WlVSbFptbHVhWFJwYjI0Z1BTQjBkMlZsYm5NdWJXRndLQ2gwZDJWbGJpa2dQVDRnZTF4dUlDQWdJQ0FnSUNCamIyNXpkQ0JrWldZZ1BTQjdJSFIzWldWdUxDQmhkQ0I5TzF4dUlDQWdJQ0FnSUNCaGRDQXJQU0JwYm5SbGNuWmhiRHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR1JsWmp0Y2JpQWdJQ0I5S1R0Y2JseHVJQ0FnSUhKbGRIVnliaUIwYVcxbGJHbHVaU2gwYVcxbGJHbHVaVVJsWm1sdWFYUnBiMjRzSUhCeWIzQnpLVHRjYm4wN0lsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy9zdGFnZ2VyLmpzXG4gKiogbW9kdWxlIGlkID0gMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gdGltZWxpbmU7XG5cbnZhciBfVHdlZW4gPSByZXF1aXJlKCcuLi9hY3Rpb25zL1R3ZWVuJyk7XG5cbnZhciBfVHdlZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVHdlZW4pO1xuXG52YXIgX3ByZXNldEVhc2luZyA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvZWFzaW5nL3ByZXNldC1lYXNpbmcnKTtcblxudmFyIF9wcmVzZXRFYXNpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlc2V0RWFzaW5nKTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi9jYWxjJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qXG4gICAgQHBhcmFtIFthcnJheV1cbiAgICAgICAgU2VxdWVudGlhbCBhcnJheSBvZiB0d2VlbnMsIGVhY2ggaXRlbSBjYW4gYmUgYSB0d2VlbiBvciBkZWZpbml0aW9uIG9iajpcblxuICAgICAgICBbXG4gICAgICAgICAgICBuZXcgVHdlZW4oKSxcbiAgICAgICAgICAgIHN0YWdnZXIoKSxcbiAgICAgICAgICAgIHRpbWVsaW5lKCksXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHdlZW46IG5ldyBUd2VlbigpLFxuICAgICAgICAgICAgICAgIGF0OiAxMDAsXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiBcIis9MTAwXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuKi9cbnZhciBhbmFseXplID0gZnVuY3Rpb24gKGRlZnMpIHtcbiAgICB2YXIgdGltZWxpbmUgPSBbXTtcbiAgICB2YXIgbnVtRGVmcyA9IGRlZnMubGVuZ3RoO1xuICAgIHZhciBjdXJyZW50UGxheWhlYWQgPSAwO1xuXG4gICAgdmFyIF9sb29wID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgdmFyIGRlZiA9IGRlZnNbaV07XG4gICAgICAgIHZhciBkZWZJc09iaiA9IGRlZi50d2VlbiA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgdmFyIHR3ZWVuID0gZGVmSXNPYmogPyBkZWYudHdlZW4gOiBkZWY7XG5cbiAgICAgICAgaWYgKGRlZklzT2JqKSB7XG4gICAgICAgICAgICBpZiAoZGVmLm9mZnNldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFBsYXloZWFkID0gKDAsIF9jYWxjLnJlbGF0aXZlVmFsdWUpKGN1cnJlbnRQbGF5aGVhZCwgZGVmLm9mZnNldCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRlZi5hdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFBsYXloZWFkID0gZGVmLmF0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGR1cmF0aW9uID0gMDtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHR3ZWVuLnZhbHVlcykge1xuICAgICAgICAgICAgaWYgKHR3ZWVuLnZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gdHdlZW4udmFsdWVzW2tleV07XG4gICAgICAgICAgICAgICAgZHVyYXRpb24gPSBNYXRoLm1heChkdXJhdGlvbiwgdmFsdWUuZHVyYXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGltZWxpbmUucHVzaCh7XG4gICAgICAgICAgICBmcm9tOiBjdXJyZW50UGxheWhlYWQsXG4gICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICAgICAgICBmaXJlOiBmdW5jdGlvbiAodGltZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0d2Vlbi5zZWVrVGltZSh0aW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY3VycmVudFBsYXloZWFkICs9IGR1cmF0aW9uO1xuICAgIH07XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bURlZnM7IGkrKykge1xuICAgICAgICBfbG9vcChpKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyB0b3RhbFRpbWU6IGN1cnJlbnRQbGF5aGVhZCwgdGltZWxpbmU6IHRpbWVsaW5lIH07XG59O1xuXG52YXIgc2V0VHdlZW5zID0gZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgdGltZWxpbmUgPSBfcmVmLnRpbWVsaW5lO1xuICAgIHZhciB0aW1lbGluZUxlbmd0aCA9IF9yZWYudGltZWxpbmVMZW5ndGg7XG4gICAgdmFyIHZhbHVlcyA9IF9yZWYudmFsdWVzO1xuICAgIHZhciBkdXJhdGlvbiA9IF9yZWYuZHVyYXRpb247XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRpbWVsaW5lTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIF90d2VlbiA9IHRpbWVsaW5lW2ldO1xuICAgICAgICB2YXIgdHdlZW5UaW1lID0gdmFsdWVzLnAuY3VycmVudCAqIGR1cmF0aW9uIC0gX3R3ZWVuLmZyb207XG5cbiAgICAgICAgaWYgKHR3ZWVuVGltZSA+PSAtNTAgJiYgdHdlZW5UaW1lIDw9IF90d2Vlbi5kdXJhdGlvbiArIDUwKSB7XG4gICAgICAgICAgICBfdHdlZW4uZmlyZSh0d2VlblRpbWUpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZnVuY3Rpb24gdGltZWxpbmUoZGVmKSB7XG4gICAgdmFyIHByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMV07XG5cbiAgICB2YXIgX2FuYWx5emUgPSBhbmFseXplKGRlZik7XG5cbiAgICB2YXIgdG90YWxUaW1lID0gX2FuYWx5emUudG90YWxUaW1lO1xuICAgIHZhciB0aW1lbGluZSA9IF9hbmFseXplLnRpbWVsaW5lO1xuXG5cbiAgICByZXR1cm4gbmV3IF9Ud2VlbjIuZGVmYXVsdChfZXh0ZW5kcyh7XG4gICAgICAgIGVhc2U6IF9wcmVzZXRFYXNpbmcyLmRlZmF1bHQubGluZWFyXG4gICAgfSwgcHJvcHMsIHtcbiAgICAgICAgZHVyYXRpb246IHRvdGFsVGltZSxcbiAgICAgICAgdmFsdWVzOiB7XG4gICAgICAgICAgICBwOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHRpbWVsaW5lOiB0aW1lbGluZSxcbiAgICAgICAgdGltZWxpbmVMZW5ndGg6IHRpbWVsaW5lLmxlbmd0aCxcbiAgICAgICAgb25SZW5kZXI6IHNldFR3ZWVuc1xuICAgIH0pKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJtTXZkR2x0Wld4cGJtVXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN08ydENRVzlGZDBJc1VUczdRVUZ3UlhoQ096czdPMEZCUTBFN096czdRVUZEUVRzN096czdPenM3T3pzN096czdPenM3T3p0QlFXbENRU3hKUVVGTkxGVkJRVlVzVlVGQlF5eEpRVUZFTEVWQlFWVTdRVUZEZEVJc1VVRkJUU3hYUVVGWExFVkJRV3BDTzBGQlEwRXNVVUZCVFN4VlFVRlZMRXRCUVVzc1RVRkJja0k3UVVGRFFTeFJRVUZKTEd0Q1FVRnJRaXhEUVVGMFFqczdRVUZJYzBJc01FSkJTMklzUTBGTVlUdEJRVTFzUWl4WlFVRk5MRTFCUVUwc1MwRkJTeXhEUVVGTUxFTkJRVm83UVVGRFFTeFpRVUZOTEZkQlFWY3NTVUZCU1N4TFFVRktMRWRCUVZrc1NVRkJXaXhIUVVGdFFpeExRVUZ3UXp0QlFVTkJMRmxCUVUwc1VVRkJVeXhSUVVGRUxFZEJRV0VzU1VGQlNTeExRVUZxUWl4SFFVRjVRaXhIUVVGMlF6czdRVUZGUVN4WlFVRkpMRkZCUVVvc1JVRkJZenRCUVVOV0xHZENRVUZKTEVsQlFVa3NUVUZCU2l4TFFVRmxMRk5CUVc1Q0xFVkJRVGhDTzBGQlF6RkNMR3REUVVGclFpeDVRa0ZCWXl4bFFVRmtMRVZCUVN0Q0xFbEJRVWtzVFVGQmJrTXNRMEZCYkVJN1FVRkRTQ3hoUVVaRUxFMUJSVThzU1VGQlNTeEpRVUZKTEVWQlFVb3NTMEZCVnl4VFFVRm1MRVZCUVRCQ08wRkJRemRDTEd0RFFVRnJRaXhKUVVGSkxFVkJRWFJDTzBGQlEwZzdRVUZEU2pzN1FVRkZSQ3haUVVGSkxGZEJRVmNzUTBGQlpqdEJRVU5CTEdGQlFVc3NTVUZCU1N4SFFVRlVMRWxCUVdkQ0xFMUJRVTBzVFVGQmRFSXNSVUZCT0VJN1FVRkRNVUlzWjBKQlFVa3NUVUZCVFN4TlFVRk9MRU5CUVdFc1kwRkJZaXhEUVVFMFFpeEhRVUUxUWl4RFFVRktMRVZCUVhORE8wRkJRMnhETEc5Q1FVRk5MRkZCUVZFc1RVRkJUU3hOUVVGT0xFTkJRV0VzUjBGQllpeERRVUZrTzBGQlEwRXNNa0pCUVZjc1MwRkJTeXhIUVVGTUxFTkJRVk1zVVVGQlZDeEZRVUZ0UWl4TlFVRk5MRkZCUVhwQ0xFTkJRVmc3UVVGRFNEdEJRVU5LT3p0QlFVVkVMR2xDUVVGVExFbEJRVlFzUTBGQll6dEJRVU5XTEd0Q1FVRk5MR1ZCUkVrN1FVRkZWaXh6UWtGQlZTeFJRVVpCTzBGQlIxWXNhMEpCUVUwc1ZVRkJReXhKUVVGRU8wRkJRVUVzZFVKQlFWVXNUVUZCVFN4UlFVRk9MRU5CUVdVc1NVRkJaaXhEUVVGV08wRkJRVUU3UVVGSVNTeFRRVUZrT3p0QlFVMUJMREpDUVVGdFFpeFJRVUZ1UWp0QlFXaERhMEk3TzBGQlMzUkNMRk5CUVVzc1NVRkJTU3hKUVVGSkxFTkJRV0lzUlVGQlowSXNTVUZCU1N4UFFVRndRaXhGUVVFMlFpeEhRVUUzUWl4RlFVRnJRenRCUVVGQkxHTkJRWHBDTEVOQlFYbENPMEZCTkVKcVF6czdRVUZGUkN4WFFVRlBMRVZCUVVVc1YwRkJWeXhsUVVGaUxFVkJRVGhDTEd0Q1FVRTVRaXhGUVVGUU8wRkJRMGdzUTBGd1EwUTdPMEZCYzBOQkxFbEJRVTBzV1VGQldTeG5Ra0ZCYjBRN1FVRkJRU3hSUVVGcVJDeFJRVUZwUkN4UlFVRnFSQ3hSUVVGcFJEdEJRVUZCTEZGQlFYWkRMR05CUVhWRExGRkJRWFpETEdOQlFYVkRPMEZCUVVFc1VVRkJka0lzVFVGQmRVSXNVVUZCZGtJc1RVRkJkVUk3UVVGQlFTeFJRVUZtTEZGQlFXVXNVVUZCWml4UlFVRmxPenRCUVVOc1JTeFRRVUZMTEVsQlFVa3NTVUZCU1N4RFFVRmlMRVZCUVdkQ0xFbEJRVWtzWTBGQmNFSXNSVUZCYjBNc1IwRkJjRU1zUlVGQmVVTTdRVUZEY2tNc1dVRkJUU3hUUVVGUkxGTkJRVk1zUTBGQlZDeERRVUZrTzBGQlEwRXNXVUZCVFN4WlFVRmhMRTlCUVU4c1EwRkJVQ3hEUVVGVExFOUJRVlFzUjBGQmJVSXNVVUZCY0VJc1IwRkJaME1zVDBGQlRTeEpRVUY0UkRzN1FVRkZRU3haUVVGSkxHRkJRV0VzUTBGQlF5eEZRVUZrTEVsQlFXOUNMR0ZCUVdFc1QwRkJUU3hSUVVGT0xFZEJRV2xDTEVWQlFYUkVMRVZCUVRCRU8wRkJRM1JFTEcxQ1FVRk5MRWxCUVU0c1EwRkJWeXhUUVVGWU8wRkJRMGc3UVVGRFNqdEJRVU5LTEVOQlZFUTdPMEZCVjJVc1UwRkJVeXhSUVVGVUxFTkJRV3RDTEVkQlFXeENMRVZCUVcxRE8wRkJRVUVzVVVGQldpeExRVUZaTEhsRVFVRktMRVZCUVVrN08wRkJRVUVzYlVKQlEyUXNVVUZCVVN4SFFVRlNMRU5CUkdNN08wRkJRVUVzVVVGRGRFTXNVMEZFYzBNc1dVRkRkRU1zVTBGRWMwTTdRVUZCUVN4UlFVTXpRaXhSUVVReVFpeFpRVU16UWl4UlFVUXlRanM3TzBGQlJ6bERMRmRCUVU4N1FVRkRTQ3hqUVVGTkxIVkNRVUZQTzBGQlJGWXNUMEZGUVN4TFFVWkJPMEZCUjBnc2EwSkJRVlVzVTBGSVVEdEJRVWxJTEdkQ1FVRlJPMEZCUTBvc1pVRkJSenRCUVVSRExGTkJTa3c3UVVGUFNDeHJRa0ZCVlN4UlFWQlFPMEZCVVVnc2QwSkJRV2RDTEZOQlFWTXNUVUZTZEVJN1FVRlRTQ3hyUWtGQlZUdEJRVlJRTEU5QlFWQTdRVUZYU0NJc0ltWnBiR1VpT2lKMGFXMWxiR2x1WlM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YW5aaGJtUmxjbVJ2WlhNdlEyOWtaUzl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnVkhkbFpXNGdabkp2YlNBbkxpNHZZV04wYVc5dWN5OVVkMlZsYmljN1hHNXBiWEJ2Y25RZ1pXRnphVzVuSUdaeWIyMGdKeTR1TDJGamRHbHZibk12WldGemFXNW5MM0J5WlhObGRDMWxZWE5wYm1jbk8xeHVhVzF3YjNKMElIc2djbVZzWVhScGRtVldZV3gxWlNCOUlHWnliMjBnSnk0dlkyRnNZeWM3WEc1Y2JpOHFYRzRnSUNBZ1FIQmhjbUZ0SUZ0aGNuSmhlVjFjYmlBZ0lDQWdJQ0FnVTJWeGRXVnVkR2xoYkNCaGNuSmhlU0J2WmlCMGQyVmxibk1zSUdWaFkyZ2dhWFJsYlNCallXNGdZbVVnWVNCMGQyVmxiaUJ2Y2lCa1pXWnBibWwwYVc5dUlHOWlhanBjYmx4dUlDQWdJQ0FnSUNCYlhHNGdJQ0FnSUNBZ0lDQWdJQ0J1WlhjZ1ZIZGxaVzRvS1N4Y2JpQWdJQ0FnSUNBZ0lDQWdJSE4wWVdkblpYSW9LU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lIUnBiV1ZzYVc1bEtDa3NYRzRnSUNBZ0lDQWdJQ0FnSUNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RIZGxaVzQ2SUc1bGR5QlVkMlZsYmlncExGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHRjBPaUF4TURBc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2IyWm1jMlYwT2lCY0lpczlNVEF3WENKY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnWFZ4dUtpOWNibU52Ym5OMElHRnVZV3g1ZW1VZ1BTQW9aR1ZtY3lrZ1BUNGdlMXh1SUNBZ0lHTnZibk4wSUhScGJXVnNhVzVsSUQwZ1cxMDdYRzRnSUNBZ1kyOXVjM1FnYm5WdFJHVm1jeUE5SUdSbFpuTXViR1Z1WjNSb08xeHVJQ0FnSUd4bGRDQmpkWEp5Wlc1MFVHeGhlV2hsWVdRZ1BTQXdPMXh1WEc0Z0lDQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0J1ZFcxRVpXWnpPeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ1pHVm1JRDBnWkdWbWMxdHBYVHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdaR1ZtU1hOUFltb2dQU0JrWldZdWRIZGxaVzRnUHlCMGNuVmxJRG9nWm1Gc2MyVTdYRzRnSUNBZ0lDQWdJR052Ym5OMElIUjNaV1Z1SUQwZ0tHUmxaa2x6VDJKcUtTQS9JR1JsWmk1MGQyVmxiaUE2SUdSbFpqdGNibHh1SUNBZ0lDQWdJQ0JwWmlBb1pHVm1TWE5QWW1vcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaGtaV1l1YjJabWMyVjBJQ0U5UFNCMWJtUmxabWx1WldRcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpkWEp5Wlc1MFVHeGhlV2hsWVdRZ1BTQnlaV3hoZEdsMlpWWmhiSFZsS0dOMWNuSmxiblJRYkdGNWFHVmhaQ3dnWkdWbUxtOW1abk5sZENrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5SUdWc2MyVWdhV1lnS0dSbFppNWhkQ0FoUFQwZ2RXNWtaV1pwYm1Wa0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZM1Z5Y21WdWRGQnNZWGxvWldGa0lEMGdaR1ZtTG1GME8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdiR1YwSUdSMWNtRjBhVzl1SUQwZ01EdGNiaUFnSUNBZ0lDQWdabTl5SUNoc1pYUWdhMlY1SUdsdUlIUjNaV1Z1TG5aaGJIVmxjeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0hSM1pXVnVMblpoYkhWbGN5NW9ZWE5QZDI1UWNtOXdaWEowZVNoclpYa3BLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdkbUZzZFdVZ1BTQjBkMlZsYmk1MllXeDFaWE5iYTJWNVhUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmtkWEpoZEdsdmJpQTlJRTFoZEdndWJXRjRLR1IxY21GMGFXOXVMQ0IyWVd4MVpTNWtkWEpoZEdsdmJpazdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0IwYVcxbGJHbHVaUzV3ZFhOb0tIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdaeWIyMDZJR04xY25KbGJuUlFiR0Y1YUdWaFpDeGNiaUFnSUNBZ0lDQWdJQ0FnSUdSMWNtRjBhVzl1T2lCa2RYSmhkR2x2Yml4Y2JpQWdJQ0FnSUNBZ0lDQWdJR1pwY21VNklDaDBhVzFsS1NBOVBpQjBkMlZsYmk1elpXVnJWR2x0WlNoMGFXMWxLVnh1SUNBZ0lDQWdJQ0I5S1R0Y2JseHVJQ0FnSUNBZ0lDQmpkWEp5Wlc1MFVHeGhlV2hsWVdRZ0t6MGdaSFZ5WVhScGIyNDdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NtVjBkWEp1SUhzZ2RHOTBZV3hVYVcxbE9pQmpkWEp5Wlc1MFVHeGhlV2hsWVdRc0lIUnBiV1ZzYVc1bElIMDdYRzU5TzF4dVhHNWpiMjV6ZENCelpYUlVkMlZsYm5NZ1BTQW9leUIwYVcxbGJHbHVaU3dnZEdsdFpXeHBibVZNWlc1bmRHZ3NJSFpoYkhWbGN5d2daSFZ5WVhScGIyNGdmU2tnUFQ0Z2UxeHVJQ0FnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z2RHbHRaV3hwYm1WTVpXNW5kR2c3SUdrckt5a2dlMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQjBkMlZsYmlBOUlIUnBiV1ZzYVc1bFcybGRPMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQjBkMlZsYmxScGJXVWdQU0FvZG1Gc2RXVnpMbkF1WTNWeWNtVnVkQ0FxSUdSMWNtRjBhVzl1S1NBdElIUjNaV1Z1TG1aeWIyMDdYRzVjYmlBZ0lDQWdJQ0FnYVdZZ0tIUjNaV1Z1VkdsdFpTQStQU0F0TlRBZ0ppWWdkSGRsWlc1VWFXMWxJRHc5SUhSM1pXVnVMbVIxY21GMGFXOXVJQ3NnTlRBcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSM1pXVnVMbVpwY21Vb2RIZGxaVzVVYVcxbEtUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNibjA3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdaMWJtTjBhVzl1SUhScGJXVnNhVzVsS0dSbFppd2djSEp2Y0hNZ1BTQjdmU2tnZTF4dUlDQWdJR052Ym5OMElIc2dkRzkwWVd4VWFXMWxMQ0IwYVcxbGJHbHVaU0I5SUQwZ1lXNWhiSGw2WlNoa1pXWXBPMXh1WEc0Z0lDQWdjbVYwZFhKdUlHNWxkeUJVZDJWbGJpaDdYRzRnSUNBZ0lDQWdJR1ZoYzJVNklHVmhjMmx1Wnk1c2FXNWxZWElzWEc0Z0lDQWdJQ0FnSUM0dUxuQnliM0J6TEZ4dUlDQWdJQ0FnSUNCa2RYSmhkR2x2YmpvZ2RHOTBZV3hVYVcxbExGeHVJQ0FnSUNBZ0lDQjJZV3gxWlhNNklIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhBNklERmNiaUFnSUNBZ0lDQWdmU3hjYmlBZ0lDQWdJQ0FnZEdsdFpXeHBibVU2SUhScGJXVnNhVzVsTEZ4dUlDQWdJQ0FnSUNCMGFXMWxiR2x1WlV4bGJtZDBhRG9nZEdsdFpXeHBibVV1YkdWdVozUm9MRnh1SUNBZ0lDQWdJQ0J2YmxKbGJtUmxjam9nYzJWMFZIZGxaVzV6WEc0Z0lDQWdmU2s3WEc1OUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy90aW1lbGluZS5qc1xuICoqIG1vZHVsZSBpZCA9IDExXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8qXG4gICAgT3ZlcnJpZGUgYGdldHRlcmAgYW5kIGBzZXR0ZXJgIHRvIHJlaW1wbGVtZW50IHRoZSBpbnRlcmZhY2UgZm9yIG5ldyBlbGVtZW50IHR5cGVzLlxuXG4gICAgU2V0IGAuc3RhdGVNYXBgIGFzIGFuIG9iamVjdCBrZXkvdmFsdWUgbWFwIHRvIHRyYW5zbGF0ZSBpbmNvbWluZyBrZXlzIHRvXG4gICAgQVBJLXNwZWNpZmljIGtleXMuIEZvciBpbnN0YW5jZSwgeyB4OiAndHJhbnNsYXRlWCcgfS4gXG5cbiAgICBTZXQgYC52YWx1ZVR5cGVNYXBgIGFzIGFuIG9iamVjdCBrZXkvdmFsdWUgbWFwIHRvIHJldHVybiBhIHZhbHVlIHR5cGUgd2l0aFxuICAgIGBnZXRWYWx1ZVR5cGUoa2V5KWAgKGtleSB3aWxsIGJlIG1hcHBlZCBhY2NvcmRpbmcgdG8gYHN0YXRlTWFwYClcbiovXG5cbnZhciBtYXBLZXkgPSBmdW5jdGlvbiAoa2V5LCBtYXApIHtcbiAgICByZXR1cm4gbWFwID8gbWFwW2tleV0gfHwga2V5IDoga2V5O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAvKlxuICAgICAgICBBZGFwdGVyIGlzIHNldHRlciBmdW5jdGlvblxuICAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBPYmplY3QgdG8gc2V0IHByb3BlcnRpZXMgb25cbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBLZXkvdmFsdWUgcHJvcGVydGllcyB0byBzZXRcbiAgICAqL1xuICAgIHZhciBhZGFwdGVyID0gZnVuY3Rpb24gKGVsZW1lbnQsIHByb3BzLCBkYXRhKSB7XG4gICAgICAgIGlmIChvcHRpb25zLnN0YXRlTWFwKSB7XG4gICAgICAgICAgICAvLyBUcmFuc2xhdGUgcHJvcHNcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wcykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXBwZWRLZXkgPSBtYXBLZXkoa2V5LCBvcHRpb25zLnN0YXRlTWFwKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAobWFwcGVkS2V5ICE9PSBrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzW21hcHBlZEtleV0gPSBwcm9wc1trZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHByb3BzW2tleV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb3B0aW9ucy5zZXR0ZXIoZWxlbWVudCwgcHJvcHMsIGRhdGEpO1xuICAgIH07XG5cbiAgICBhZGFwdGVyLmdldCA9IGZ1bmN0aW9uIChlbGVtZW50LCBrZXkpIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnMuZ2V0dGVyKGVsZW1lbnQsIG1hcEtleShrZXksIG9wdGlvbnMuc3RhdGVNYXApKTtcbiAgICB9O1xuICAgIGFkYXB0ZXIuY2hlY2tWYWx1ZVR5cGUgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiBvcHRpb25zLnZhbHVlVHlwZU1hcCA/IG9wdGlvbnMudmFsdWVUeXBlTWFwW21hcEtleShrZXksIG9wdGlvbnMuc3RhdGVNYXApXSA6IGZhbHNlO1xuICAgIH07XG4gICAgYWRhcHRlci5nZXRFbGVtZW50RGF0YSA9IG9wdGlvbnMuZ2V0RWxlbWVudERhdGE7XG5cbiAgICByZXR1cm4gYWRhcHRlcjtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwyRmtZWEIwWlhJdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096czdPenRCUVZWQkxFbEJRVTBzVTBGQlV5eFZRVUZETEVkQlFVUXNSVUZCVFN4SFFVRk9PMEZCUVVFc1YwRkJZeXhOUVVGTkxFbEJRVWtzUjBGQlNpeExRVUZaTEVkQlFXeENMRWRCUVhkQ0xFZEJRWFJETzBGQlFVRXNRMEZCWmpzN2EwSkJSV1VzVlVGQlF5eFBRVUZFTEVWQlFXRTdPenM3T3p0QlFVOTRRaXhSUVVGTkxGVkJRVlVzVlVGQlF5eFBRVUZFTEVWQlFWVXNTMEZCVml4RlFVRnBRaXhKUVVGcVFpeEZRVUV3UWp0QlFVTjBReXhaUVVGSkxGRkJRVkVzVVVGQldpeEZRVUZ6UWpzN1FVRkZiRUlzYVVKQlFVc3NTVUZCU1N4SFFVRlVMRWxCUVdkQ0xFdEJRV2hDTEVWQlFYVkNPMEZCUTI1Q0xHOUNRVUZKTEUxQlFVMHNZMEZCVGl4RFFVRnhRaXhIUVVGeVFpeERRVUZLTEVWQlFTdENPMEZCUXpOQ0xIZENRVUZOTEZsQlFWa3NUMEZCVHl4SFFVRlFMRVZCUVZrc1VVRkJVU3hSUVVGd1FpeERRVUZzUWpzN1FVRkZRU3gzUWtGQlNTeGpRVUZqTEVkQlFXeENMRVZCUVhWQ08wRkJRMjVDTERoQ1FVRk5MRk5CUVU0c1NVRkJiVUlzVFVGQlRTeEhRVUZPTEVOQlFXNUNPMEZCUTBFc0swSkJRVThzVFVGQlRTeEhRVUZPTEVOQlFWQTdRVUZEU0R0QlFVTktPMEZCUTBvN1FVRkRTanM3UVVGRlJDeGxRVUZQTEZGQlFWRXNUVUZCVWl4RFFVRmxMRTlCUVdZc1JVRkJkMElzUzBGQmVFSXNSVUZCSzBJc1NVRkJMMElzUTBGQlVEdEJRVU5JTEV0QmFFSkVPenRCUVd0Q1FTeFpRVUZSTEVkQlFWSXNSMEZCWXl4VlFVRkRMRTlCUVVRc1JVRkJWU3hIUVVGV08wRkJRVUVzWlVGQmEwSXNVVUZCVVN4TlFVRlNMRU5CUVdVc1QwRkJaaXhGUVVGM1FpeFBRVUZQTEVkQlFWQXNSVUZCV1N4UlFVRlJMRkZCUVhCQ0xFTkJRWGhDTEVOQlFXeENPMEZCUVVFc1MwRkJaRHRCUVVOQkxGbEJRVkVzWTBGQlVpeEhRVUY1UWl4VlFVRkRMRWRCUVVRN1FVRkJRU3hsUVVGVExGRkJRVkVzV1VGQlVpeEhRVUYxUWl4UlFVRlJMRmxCUVZJc1EwRkJjVUlzVDBGQlR5eEhRVUZRTEVWQlFWa3NVVUZCVVN4UlFVRndRaXhEUVVGeVFpeERRVUYyUWl4SFFVRTJSU3hMUVVGMFJqdEJRVUZCTEV0QlFYcENPMEZCUTBFc1dVRkJVU3hqUVVGU0xFZEJRWGxDTEZGQlFWRXNZMEZCYWtNN08wRkJSVUVzVjBGQlR5eFBRVUZRTzBGQlEwZ3NReUlzSW1acGJHVWlPaUpoWkdGd2RHVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OXFkbUZ1WkdWeVpHOWxjeTlEYjJSbEwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaThxWEc0Z0lDQWdUM1psY25KcFpHVWdZR2RsZEhSbGNtQWdZVzVrSUdCelpYUjBaWEpnSUhSdklISmxhVzF3YkdWdFpXNTBJSFJvWlNCcGJuUmxjbVpoWTJVZ1ptOXlJRzVsZHlCbGJHVnRaVzUwSUhSNWNHVnpMbHh1WEc0Z0lDQWdVMlYwSUdBdWMzUmhkR1ZOWVhCZ0lHRnpJR0Z1SUc5aWFtVmpkQ0JyWlhrdmRtRnNkV1VnYldGd0lIUnZJSFJ5WVc1emJHRjBaU0JwYm1OdmJXbHVaeUJyWlhseklIUnZYRzRnSUNBZ1FWQkpMWE53WldOcFptbGpJR3RsZVhNdUlFWnZjaUJwYm5OMFlXNWpaU3dnZXlCNE9pQW5kSEpoYm5Oc1lYUmxXQ2NnZlM0Z1hHNWNiaUFnSUNCVFpYUWdZQzUyWVd4MVpWUjVjR1ZOWVhCZ0lHRnpJR0Z1SUc5aWFtVmpkQ0JyWlhrdmRtRnNkV1VnYldGd0lIUnZJSEpsZEhWeWJpQmhJSFpoYkhWbElIUjVjR1VnZDJsMGFGeHVJQ0FnSUdCblpYUldZV3gxWlZSNWNHVW9hMlY1S1dBZ0tHdGxlU0IzYVd4c0lHSmxJRzFoY0hCbFpDQmhZMk52Y21ScGJtY2dkRzhnWUhOMFlYUmxUV0Z3WUNsY2Jpb3ZYRzVjYm1OdmJuTjBJRzFoY0V0bGVTQTlJQ2hyWlhrc0lHMWhjQ2tnUFQ0Z2JXRndJRDhnYldGd1cydGxlVjBnZkh3Z2EyVjVJRG9nYTJWNU8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQW9iM0IwYVc5dWN5a2dQVDRnZTF4dUlDQWdJQzhxWEc0Z0lDQWdJQ0FnSUVGa1lYQjBaWElnYVhNZ2MyVjBkR1Z5SUdaMWJtTjBhVzl1WEc1Y2JpQWdJQ0FnSUNBZ1FIQmhjbUZ0SUZ0dlltcGxZM1JkT2lCUFltcGxZM1FnZEc4Z2MyVjBJSEJ5YjNCbGNuUnBaWE1nYjI1Y2JpQWdJQ0FnSUNBZ1FIQmhjbUZ0SUZ0dlltcGxZM1JkT2lCTFpYa3ZkbUZzZFdVZ2NISnZjR1Z5ZEdsbGN5QjBieUJ6WlhSY2JpQWdJQ0FxTDF4dUlDQWdJR052Ym5OMElHRmtZWEIwWlhJZ1BTQW9aV3hsYldWdWRDd2djSEp2Y0hNc0lHUmhkR0VwSUQwK0lIdGNiaUFnSUNBZ0lDQWdhV1lnS0c5d2RHbHZibk11YzNSaGRHVk5ZWEFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUZSeVlXNXpiR0YwWlNCd2NtOXdjMXh1SUNBZ0lDQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2EyVjVJR2x1SUhCeWIzQnpLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIQnliM0J6TG1oaGMwOTNibEJ5YjNCbGNuUjVLR3RsZVNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdiV0Z3Y0dWa1MyVjVJRDBnYldGd1MyVjVLR3RsZVN3Z2IzQjBhVzl1Y3k1emRHRjBaVTFoY0NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9iV0Z3Y0dWa1MyVjVJQ0U5UFNCclpYa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEJ5YjNCelcyMWhjSEJsWkV0bGVWMGdQU0J3Y205d2MxdHJaWGxkTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWkdWc1pYUmxJSEJ5YjNCelcydGxlVjA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdiM0IwYVc5dWN5NXpaWFIwWlhJb1pXeGxiV1Z1ZEN3Z2NISnZjSE1zSUdSaGRHRXBPMXh1SUNBZ0lIMDdYRzVjYmlBZ0lDQmhaR0Z3ZEdWeUxtZGxkQ0E5SUNobGJHVnRaVzUwTENCclpYa3BJRDArSUc5d2RHbHZibk11WjJWMGRHVnlLR1ZzWlcxbGJuUXNJRzFoY0V0bGVTaHJaWGtzSUc5d2RHbHZibk11YzNSaGRHVk5ZWEFwS1R0Y2JpQWdJQ0JoWkdGd2RHVnlMbU5vWldOclZtRnNkV1ZVZVhCbElEMGdLR3RsZVNrZ1BUNGdiM0IwYVc5dWN5NTJZV3gxWlZSNWNHVk5ZWEFnUHlCdmNIUnBiMjV6TG5aaGJIVmxWSGx3WlUxaGNGdHRZWEJMWlhrb2EyVjVMQ0J2Y0hScGIyNXpMbk4wWVhSbFRXRndLVjBnT2lCbVlXeHpaVHRjYmlBZ0lDQmhaR0Z3ZEdWeUxtZGxkRVZzWlcxbGJuUkVZWFJoSUQwZ2IzQjBhVzl1Y3k1blpYUkZiR1Z0Wlc1MFJHRjBZVHRjYmx4dUlDQWdJSEpsZEhWeWJpQmhaR0Z3ZEdWeU8xeHVmVHNpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9hZGFwdGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuc2V0dGVyID0gZXhwb3J0cy5nZXR0ZXIgPSB1bmRlZmluZWQ7XG5cbnZhciBfYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcicpO1xuXG52YXIgX2FkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWRhcHRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBnZXR0ZXIgPSBleHBvcnRzLmdldHRlciA9IGZ1bmN0aW9uIChlbGVtZW50LCBrZXkpIHtcbiAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoa2V5KTtcbn07XG52YXIgc2V0dGVyID0gZXhwb3J0cy5zZXR0ZXIgPSBmdW5jdGlvbiAoZWxlbWVudCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgcHJvcHNba2V5XSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSAoMCwgX2FkYXB0ZXIyLmRlZmF1bHQpKHsgZ2V0dGVyOiBnZXR0ZXIsIHNldHRlcjogc2V0dGVyIH0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMMkYwZEhJdFlXUmhjSFJsY2k1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenRCUVVGQk96czdPenM3UVVGRlR5eEpRVUZOTERCQ1FVRlRMRlZCUVVNc1QwRkJSQ3hGUVVGVkxFZEJRVlk3UVVGQlFTeFhRVUZyUWl4UlFVRlJMRmxCUVZJc1EwRkJjVUlzUjBGQmNrSXNRMEZCYkVJN1FVRkJRU3hEUVVGbU8wRkJRMEVzU1VGQlRTd3dRa0ZCVXl4VlFVRkRMRTlCUVVRc1JVRkJWU3hMUVVGV0xFVkJRVzlDTzBGQlEzUkRMRk5CUVVzc1NVRkJTU3hIUVVGVUxFbEJRV2RDTEV0QlFXaENMRVZCUVhWQ08wRkJRMjVDTEZsQlFVa3NUVUZCVFN4alFVRk9MRU5CUVhGQ0xFZEJRWEpDTEVOQlFVb3NSVUZCSzBJN1FVRkRNMElzYjBKQlFWRXNXVUZCVWl4RFFVRnhRaXhIUVVGeVFpeEZRVUV3UWl4TlFVRk5MRWRCUVU0c1EwRkJNVUk3UVVGRFNEdEJRVU5LTzBGQlEwb3NRMEZPVFRzN2EwSkJVVkVzZFVKQlFXTXNSVUZCUlN4alFVRkdMRVZCUVZVc1kwRkJWaXhGUVVGa0xFTWlMQ0ptYVd4bElqb2lZWFIwY2kxaFpHRndkR1Z5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlxZG1GdVpHVnlaRzlsY3k5RGIyUmxMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0JqY21WaGRHVkJaR0Z3ZEdWeUlHWnliMjBnSnk0dllXUmhjSFJsY2ljN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCblpYUjBaWElnUFNBb1pXeGxiV1Z1ZEN3Z2EyVjVLU0E5UGlCbGJHVnRaVzUwTG1kbGRFRjBkSEpwWW5WMFpTaHJaWGtwTzF4dVpYaHdiM0owSUdOdmJuTjBJSE5sZEhSbGNpQTlJQ2hsYkdWdFpXNTBMQ0J3Y205d2N5a2dQVDRnZTF4dUlDQWdJR1p2Y2lBb2JHVjBJR3RsZVNCcGJpQndjbTl3Y3lrZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvY0hKdmNITXVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2EyVjVLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdaV3hsYldWdWRDNXpaWFJCZEhSeWFXSjFkR1VvYTJWNUxDQndjbTl3YzF0clpYbGRLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYm4wN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHTnlaV0YwWlVGa1lYQjBaWElvZXlCblpYUjBaWElzSUhObGRIUmxjaUI5S1RzaVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FkYXB0ZXIvYXR0ci1hZGFwdGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9zdGF0ZU1hcCA9IHJlcXVpcmUoJy4vY3NzL3N0YXRlLW1hcCcpO1xuXG52YXIgX3N0YXRlTWFwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0YXRlTWFwKTtcblxudmFyIF92YWx1ZVR5cGVNYXAgPSByZXF1aXJlKCcuL2Nzcy92YWx1ZS10eXBlLW1hcCcpO1xuXG52YXIgX3ZhbHVlVHlwZU1hcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF92YWx1ZVR5cGVNYXApO1xuXG52YXIgX2J1aWxkID0gcmVxdWlyZSgnLi9jc3MvYnVpbGQnKTtcblxudmFyIF9idWlsZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9idWlsZCk7XG5cbnZhciBfcHJlZml4ZXIgPSByZXF1aXJlKCcuL2Nzcy9wcmVmaXhlcicpO1xuXG52YXIgX3ByZWZpeGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ByZWZpeGVyKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wcyA9IHJlcXVpcmUoJy4vY3NzL3RyYW5zZm9ybS1wcm9wcycpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zZm9ybVByb3BzKTtcblxudmFyIF9hZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVyJyk7XG5cbnZhciBfYWRhcHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hZGFwdGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gKDAsIF9hZGFwdGVyMi5kZWZhdWx0KSh7XG4gICAgZ2V0dGVyOiBmdW5jdGlvbiAoZWxlbWVudCwga2V5KSB7XG4gICAgICAgIHJldHVybiAhX3RyYW5zZm9ybVByb3BzMi5kZWZhdWx0W2tleV0gPyB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCBudWxsKVsoMCwgX3ByZWZpeGVyMi5kZWZhdWx0KShrZXkpXSA6IF92YWx1ZVR5cGVNYXAyLmRlZmF1bHRba2V5XS5kZWZhdWx0UHJvcHMuY3VycmVudCB8fCAwO1xuICAgIH0sXG4gICAgc2V0dGVyOiBmdW5jdGlvbiAoZWxlbWVudCwgcHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuc3R5bGUuY3NzVGV4dCArPSAoMCwgX2J1aWxkMi5kZWZhdWx0KShwcm9wcyk7XG4gICAgfSxcbiAgICB2YWx1ZVR5cGVNYXA6IF92YWx1ZVR5cGVNYXAyLmRlZmF1bHQsXG4gICAgc3RhdGVNYXA6IF9zdGF0ZU1hcDIuZGVmYXVsdFxufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwyTnpjeTFoWkdGd2RHVnlMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN1FVRkJRVHM3T3p0QlFVTkJPenM3TzBGQlEwRTdPenM3UVVGRFFUczdPenRCUVVOQk96czdPMEZCUTBFN096czdPenRyUWtGRlpTeDFRa0ZCWXp0QlFVTjZRaXhaUVVGUkxGVkJRVU1zVDBGQlJDeEZRVUZWTEVkQlFWWXNSVUZCYTBJN1FVRkRkRUlzWlVGQlVTeERRVUZETEhsQ1FVRmxMRWRCUVdZc1EwRkJSaXhIUVVOSUxFOUJRVThzWjBKQlFWQXNRMEZCZDBJc1QwRkJlRUlzUlVGQmFVTXNTVUZCYWtNc1JVRkJkVU1zZDBKQlFWTXNSMEZCVkN4RFFVRjJReXhEUVVSSExFZEJSVWdzZFVKQlFXRXNSMEZCWWl4RlFVRnJRaXhaUVVGc1FpeERRVUVyUWl4UFFVRXZRaXhKUVVFd1F5eERRVVk1UXp0QlFVZElMRXRCVEhkQ08wRkJUWHBDTEZsQlFWRXNWVUZCUXl4UFFVRkVMRVZCUVZVc1MwRkJWanRCUVVGQkxHVkJRVzlDTEZGQlFWRXNTMEZCVWl4RFFVRmpMRTlCUVdRc1NVRkJlVUlzY1VKQlFXOUNMRXRCUVhCQ0xFTkJRVGRETzBGQlFVRXNTMEZPYVVJN1FVRlBla0lzZDBOQlVIbENPMEZCVVhwQ08wRkJVbmxDTEVOQlFXUXNReUlzSW1acGJHVWlPaUpqYzNNdFlXUmhjSFJsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YW5aaGJtUmxjbVJ2WlhNdlEyOWtaUzl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnYzNSaGRHVk5ZWEFnWm5KdmJTQW5MaTlqYzNNdmMzUmhkR1V0YldGd0p6dGNibWx0Y0c5eWRDQjJZV3gxWlZSNWNHVk5ZWEFnWm5KdmJTQW5MaTlqYzNNdmRtRnNkV1V0ZEhsd1pTMXRZWEFuTzF4dWFXMXdiM0owSUdKMWFXeGtVSEp2Y0dWeWRIbFRkSEpwYm1jZ1puSnZiU0FuTGk5amMzTXZZblZwYkdRbk8xeHVhVzF3YjNKMElIQnlaV1pwZUdWeUlHWnliMjBnSnk0dlkzTnpMM0J5WldacGVHVnlKenRjYm1sdGNHOXlkQ0IwY21GdWMyWnZjbTFRY205d2N5Qm1jbTl0SUNjdUwyTnpjeTkwY21GdWMyWnZjbTB0Y0hKdmNITW5PMXh1YVcxd2IzSjBJR055WldGMFpVRmtZWEIwWlhJZ1puSnZiU0FuTGk5aFpHRndkR1Z5Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1kzSmxZWFJsUVdSaGNIUmxjaWg3WEc0Z0lDQWdaMlYwZEdWeU9pQW9aV3hsYldWdWRDd2dhMlY1S1NBOVBpQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQW9JWFJ5WVc1elptOXliVkJ5YjNCelcydGxlVjBwSUQ5Y2JpQWdJQ0FnSUNBZ0lDQWdJSGRwYm1SdmR5NW5aWFJEYjIxd2RYUmxaRk4wZVd4bEtHVnNaVzFsYm5Rc0lHNTFiR3dwVzNCeVpXWnBlR1Z5S0d0bGVTbGRJRHBjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmhiSFZsVkhsd1pVMWhjRnRyWlhsZExtUmxabUYxYkhSUWNtOXdjeTVqZFhKeVpXNTBJSHg4SURBN1hHNGdJQ0FnZlN4Y2JpQWdJQ0J6WlhSMFpYSTZJQ2hsYkdWdFpXNTBMQ0J3Y205d2N5a2dQVDRnWld4bGJXVnVkQzV6ZEhsc1pTNWpjM05VWlhoMElDczlJR0oxYVd4a1VISnZjR1Z5ZEhsVGRISnBibWNvY0hKdmNITXBMRnh1SUNBZ0lIWmhiSFZsVkhsd1pVMWhjQ3hjYmlBZ0lDQnpkR0YwWlUxaGNGeHVmU2s3WEc1Y2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hZGFwdGVyL2Nzcy1hZGFwdGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9hZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVyJyk7XG5cbnZhciBfYWRhcHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hZGFwdGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gKDAsIF9hZGFwdGVyMi5kZWZhdWx0KSh7XG4gICAgZ2V0dGVyOiBmdW5jdGlvbiAob2JqZWN0LCBrZXkpIHtcbiAgICAgICAgcmV0dXJuIG9iamVjdFtrZXldO1xuICAgIH0sXG4gICAgc2V0dGVyOiBmdW5jdGlvbiAob2JqZWN0LCBwcm9wcykge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICAgICAgICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgb2JqZWN0W2tleV0gPSBwcm9wc1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwyOWlhbVZqZEMxaFpHRndkR1Z5TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdRVUZCUVRzN096czdPMnRDUVVWbExIVkNRVUZqTzBGQlEzcENMRmxCUVZFc1ZVRkJReXhOUVVGRUxFVkJRVk1zUjBGQlZEdEJRVUZCTEdWQlFXbENMRTlCUVU4c1IwRkJVQ3hEUVVGcVFqdEJRVUZCTEV0QlJHbENPMEZCUlhwQ0xGbEJRVkVzVlVGQlF5eE5RVUZFTEVWQlFWTXNTMEZCVkN4RlFVRnRRanRCUVVOMlFpeGhRVUZMTEVsQlFVa3NSMEZCVkN4SlFVRm5RaXhMUVVGb1FpeEZRVUYxUWp0QlFVTnVRaXhuUWtGQlNTeE5RVUZOTEdOQlFVNHNRMEZCY1VJc1IwRkJja0lzUTBGQlNpeEZRVUVyUWp0QlFVTXpRaXgxUWtGQlR5eEhRVUZRTEVsQlFXTXNUVUZCVFN4SFFVRk9MRU5CUVdRN1FVRkRTRHRCUVVOS08wRkJRMG83UVVGU2QwSXNRMEZCWkN4RElpd2labWxzWlNJNkltOWlhbVZqZEMxaFpHRndkR1Z5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlxZG1GdVpHVnlaRzlsY3k5RGIyUmxMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0JqY21WaGRHVkJaR0Z3ZEdWeUlHWnliMjBnSnk0dllXUmhjSFJsY2ljN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHTnlaV0YwWlVGa1lYQjBaWElvZTF4dUlDQWdJR2RsZEhSbGNqb2dLRzlpYW1WamRDd2dhMlY1S1NBOVBpQnZZbXBsWTNSYmEyVjVYU3hjYmlBZ0lDQnpaWFIwWlhJNklDaHZZbXBsWTNRc0lIQnliM0J6S1NBOVBpQjdYRzRnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR3RsZVNCcGJpQndjbTl3Y3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIQnliM0J6TG1oaGMwOTNibEJ5YjNCbGNuUjVLR3RsZVNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnZZbXBsWTNSYmEyVjVYU0E5SUhCeWIzQnpXMnRsZVYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1OUtUc2lYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hZGFwdGVyL29iamVjdC1hZGFwdGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZ2V0RWxlbWVudERhdGEgPSBleHBvcnRzLnNldHRlciA9IGV4cG9ydHMuZ2V0dGVyID0gdW5kZWZpbmVkO1xuXG52YXIgX3N0YXRlTWFwID0gcmVxdWlyZSgnLi9jc3Mvc3RhdGUtbWFwJyk7XG5cbnZhciBfc3RhdGVNYXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RhdGVNYXApO1xuXG52YXIgX3ZhbHVlVHlwZU1hcCA9IHJlcXVpcmUoJy4vc3ZnL3ZhbHVlLXR5cGUtbWFwJyk7XG5cbnZhciBfdmFsdWVUeXBlTWFwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ZhbHVlVHlwZU1hcCk7XG5cbnZhciBfdHJhbnNmb3JtUHJvcHMgPSByZXF1aXJlKCcuL2Nzcy90cmFuc2Zvcm0tcHJvcHMnKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2Zvcm1Qcm9wcyk7XG5cbnZhciBfYnVpbGQgPSByZXF1aXJlKCcuL3N2Zy9idWlsZCcpO1xuXG52YXIgX2J1aWxkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2J1aWxkKTtcblxudmFyIF9hdHRyQWRhcHRlciA9IHJlcXVpcmUoJy4vYXR0ci1hZGFwdGVyJyk7XG5cbnZhciBfYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcicpO1xuXG52YXIgX2FkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWRhcHRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBnZXR0ZXIgPSBleHBvcnRzLmdldHRlciA9IGZ1bmN0aW9uIChlbGVtZW50LCBrZXkpIHtcbiAgICByZXR1cm4gIV90cmFuc2Zvcm1Qcm9wczIuZGVmYXVsdFtrZXldID8gKDAsIF9hdHRyQWRhcHRlci5nZXR0ZXIpKGVsZW1lbnQsIGtleSkgOiBfdmFsdWVUeXBlTWFwMi5kZWZhdWx0W2tleV0gJiYgX3ZhbHVlVHlwZU1hcDIuZGVmYXVsdFtrZXldLmRlZmF1bHRQcm9wcyA/IF92YWx1ZVR5cGVNYXAyLmRlZmF1bHRba2V5XS5kZWZhdWx0UHJvcHMuY3VycmVudCA6IDA7XG59O1xudmFyIHNldHRlciA9IGV4cG9ydHMuc2V0dGVyID0gZnVuY3Rpb24gKGVsZW1lbnQsIHByb3BzLCBkYXRhKSB7XG4gICAgcmV0dXJuICgwLCBfYXR0ckFkYXB0ZXIuc2V0dGVyKShlbGVtZW50LCAoMCwgX2J1aWxkMi5kZWZhdWx0KShwcm9wcywgZGF0YSkpO1xufTtcbnZhciBnZXRFbGVtZW50RGF0YSA9IGV4cG9ydHMuZ2V0RWxlbWVudERhdGEgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIHZhciBiQm94ID0gZWxlbWVudC5nZXRCQm94KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogYkJveC54LFxuICAgICAgICB5OiBiQm94LnksXG4gICAgICAgIHdpZHRoOiBiQm94LndpZHRoLFxuICAgICAgICBoZWlnaHQ6IGJCb3guaGVpZ2h0XG4gICAgfTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9ICgwLCBfYWRhcHRlcjIuZGVmYXVsdCkoeyBnZXR0ZXI6IGdldHRlciwgc2V0dGVyOiBzZXR0ZXIsIHN0YXRlTWFwOiBfc3RhdGVNYXAyLmRlZmF1bHQsIHZhbHVlVHlwZU1hcDogX3ZhbHVlVHlwZU1hcDIuZGVmYXVsdCwgZ2V0RWxlbWVudERhdGE6IGdldEVsZW1lbnREYXRhIH0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMM04yWnkxaFpHRndkR1Z5TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPMEZCUVVFN096czdRVUZEUVRzN096dEJRVU5CT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3UVVGRFFUczdPenM3TzBGQlJVOHNTVUZCVFN3d1FrRkJVeXhWUVVGRExFOUJRVVFzUlVGQlZTeEhRVUZXTzBGQlFVRXNWMEZCYlVJc1EwRkJReXg1UWtGQlpTeEhRVUZtTEVOQlFVWXNSMEZCZVVJc2VVSkJRVmNzVDBGQldDeEZRVUZ2UWl4SFFVRndRaXhEUVVGNlFpeEhRVUZ4UkN4MVFrRkJZU3hIUVVGaUxFdEJRWEZDTEhWQ1FVRmhMRWRCUVdJc1JVRkJhMElzV1VGQmVFTXNSMEZCZDBRc2RVSkJRV0VzUjBGQllpeEZRVUZyUWl4WlFVRnNRaXhEUVVFclFpeFBRVUYyUml4SFFVRnBSeXhEUVVGMlN6dEJRVUZCTEVOQlFXWTdRVUZEUVN4SlFVRk5MREJDUVVGVExGVkJRVU1zVDBGQlJDeEZRVUZWTEV0QlFWWXNSVUZCYVVJc1NVRkJha0k3UVVGQlFTeFhRVUV3UWl4NVFrRkJWeXhQUVVGWUxFVkJRVzlDTEhGQ1FVRk5MRXRCUVU0c1JVRkJZU3hKUVVGaUxFTkJRWEJDTEVOQlFURkNPMEZCUVVFc1EwRkJaanRCUVVOQkxFbEJRVTBzTUVOQlFXbENMRlZCUVVNc1QwRkJSQ3hGUVVGaE8wRkJRM1pETEZGQlFVMHNUMEZCVHl4UlFVRlJMRTlCUVZJc1JVRkJZanRCUVVOQkxGZEJRVTg3UVVGRFNDeFhRVUZITEV0QlFVc3NRMEZFVER0QlFVVklMRmRCUVVjc1MwRkJTeXhEUVVaTU8wRkJSMGdzWlVGQlR5eExRVUZMTEV0QlNGUTdRVUZKU0N4blFrRkJVU3hMUVVGTE8wRkJTbFlzUzBGQlVEdEJRVTFJTEVOQlVrMDdPMnRDUVZWUkxIVkNRVUZqTEVWQlFVVXNZMEZCUml4RlFVRlZMR05CUVZZc1JVRkJhMElzTkVKQlFXeENMRVZCUVRSQ0xHOURRVUUxUWl4RlFVRXdReXc0UWtGQk1VTXNSVUZCWkN4RElpd2labWxzWlNJNkluTjJaeTFoWkdGd2RHVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OXFkbUZ1WkdWeVpHOWxjeTlEYjJSbEwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQnpkR0YwWlUxaGNDQm1jbTl0SUNjdUwyTnpjeTl6ZEdGMFpTMXRZWEFuTzF4dWFXMXdiM0owSUhaaGJIVmxWSGx3WlUxaGNDQm1jbTl0SUNjdUwzTjJaeTkyWVd4MVpTMTBlWEJsTFcxaGNDYzdYRzVwYlhCdmNuUWdkSEpoYm5ObWIzSnRVSEp2Y0hNZ1puSnZiU0FuTGk5amMzTXZkSEpoYm5ObWIzSnRMWEJ5YjNCekp6dGNibWx0Y0c5eWRDQmlkV2xzWkNCbWNtOXRJQ2N1TDNOMlp5OWlkV2xzWkNjN1hHNXBiWEJ2Y25RZ2V5Qm5aWFIwWlhJZ1lYTWdZWFIwY2tkbGRIUmxjaXdnYzJWMGRHVnlJR0Z6SUdGMGRISlRaWFIwWlhJZ2ZTQm1jbTl0SUNjdUwyRjBkSEl0WVdSaGNIUmxjaWM3WEc1cGJYQnZjblFnWTNKbFlYUmxRV1JoY0hSbGNpQm1jbTl0SUNjdUwyRmtZWEIwWlhJbk8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ1oyVjBkR1Z5SUQwZ0tHVnNaVzFsYm5Rc0lHdGxlU2tnUFQ0Z0tDRjBjbUZ1YzJadmNtMVFjbTl3YzF0clpYbGRLU0EvSUdGMGRISkhaWFIwWlhJb1pXeGxiV1Z1ZEN3Z2EyVjVLU0E2SUNoMllXeDFaVlI1Y0dWTllYQmJhMlY1WFNBbUppQjJZV3gxWlZSNWNHVk5ZWEJiYTJWNVhTNWtaV1poZFd4MFVISnZjSE1wSUQ4Z2RtRnNkV1ZVZVhCbFRXRndXMnRsZVYwdVpHVm1ZWFZzZEZCeWIzQnpMbU4xY25KbGJuUWdPaUF3TzF4dVpYaHdiM0owSUdOdmJuTjBJSE5sZEhSbGNpQTlJQ2hsYkdWdFpXNTBMQ0J3Y205d2N5d2daR0YwWVNrZ1BUNGdZWFIwY2xObGRIUmxjaWhsYkdWdFpXNTBMQ0JpZFdsc1pDaHdjbTl3Y3l3Z1pHRjBZU2twTzF4dVpYaHdiM0owSUdOdmJuTjBJR2RsZEVWc1pXMWxiblJFWVhSaElEMGdLR1ZzWlcxbGJuUXBJRDArSUh0Y2JpQWdJQ0JqYjI1emRDQmlRbTk0SUQwZ1pXeGxiV1Z1ZEM1blpYUkNRbTk0S0NrN1hHNGdJQ0FnY21WMGRYSnVJSHRjYmlBZ0lDQWdJQ0FnZURvZ1lrSnZlQzU0TEZ4dUlDQWdJQ0FnSUNCNU9pQmlRbTk0TG5rc1hHNGdJQ0FnSUNBZ0lIZHBaSFJvT2lCaVFtOTRMbmRwWkhSb0xDQmNiaUFnSUNBZ0lDQWdhR1ZwWjJoME9pQmlRbTk0TG1obGFXZG9kRnh1SUNBZ0lIMDdYRzU5TzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCamNtVmhkR1ZCWkdGd2RHVnlLSHNnWjJWMGRHVnlMQ0J6WlhSMFpYSXNJSE4wWVhSbFRXRndMQ0IyWVd4MVpWUjVjR1ZOWVhBc0lHZGxkRVZzWlcxbGJuUkVZWFJoSUgwcE8xeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hZGFwdGVyL3N2Zy1hZGFwdGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9idWlsZCA9IHJlcXVpcmUoJy4vc3ZnLXBhdGgvYnVpbGQnKTtcblxudmFyIF9idWlsZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9idWlsZCk7XG5cbnZhciBfc3RhdGVNYXAgPSByZXF1aXJlKCcuL2Nzcy9zdGF0ZS1tYXAnKTtcblxudmFyIF9zdGF0ZU1hcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdGF0ZU1hcCk7XG5cbnZhciBfc3ZnQWRhcHRlciA9IHJlcXVpcmUoJy4vc3ZnLWFkYXB0ZXInKTtcblxudmFyIF9hZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVyJyk7XG5cbnZhciBfYWRhcHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hZGFwdGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gKDAsIF9hZGFwdGVyMi5kZWZhdWx0KSh7XG4gICAgZ2V0dGVyOiBfc3ZnQWRhcHRlci5nZXR0ZXIsXG4gICAgc2V0dGVyOiBmdW5jdGlvbiAoZWxlbWVudCwgcHJvcHMsIG9wdHMpIHtcbiAgICAgICAgdmFyIHBhdGhMZW5ndGggPSBvcHRzID8gb3B0cy5wYXRoTGVuZ3RoIDogMDtcbiAgICAgICAgcmV0dXJuICgwLCBfc3ZnQWRhcHRlci5zZXR0ZXIpKGVsZW1lbnQsICgwLCBfYnVpbGQyLmRlZmF1bHQpKHByb3BzLCBwYXRoTGVuZ3RoKSwgb3B0cyk7XG4gICAgfSxcbiAgICBzdGF0ZU1hcDogX3N0YXRlTWFwMi5kZWZhdWx0LFxuICAgIGdldEVsZW1lbnREYXRhOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gX2V4dGVuZHMoeyBwYXRoTGVuZ3RoOiBlbGVtZW50LmdldFRvdGFsTGVuZ3RoKCkgfSwgKDAsIF9zdmdBZGFwdGVyLmdldEVsZW1lbnREYXRhKShlbGVtZW50KSk7XG4gICAgfVxufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwzTjJaeTF3WVhSb0xXRmtZWEIwWlhJdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3TzBGQlFVRTdPenM3UVVGRFFUczdPenRCUVVOQk96dEJRVU5CT3pzN096czdhMEpCUldVc2RVSkJRV003UVVGRGVrSXNPRUpCUkhsQ08wRkJSWHBDTEZsQlFWRXNWVUZCUXl4UFFVRkVMRVZCUVZVc1MwRkJWaXhGUVVGcFFpeEpRVUZxUWl4RlFVRXdRanRCUVVNNVFpeFpRVUZOTEdGQlFXRXNUMEZCVHl4TFFVRkxMRlZCUVZvc1IwRkJlVUlzUTBGQk5VTTdRVUZEUVN4bFFVRlBMSGRDUVVGUExFOUJRVkFzUlVGQlowSXNjVUpCUVUwc1MwRkJUaXhGUVVGaExGVkJRV0lzUTBGQmFFSXNSVUZCTUVNc1NVRkJNVU1zUTBGQlVEdEJRVU5JTEV0QlRIZENPMEZCVFhwQ0xHZERRVTU1UWp0QlFVOTZRaXh2UWtGQlowSXNWVUZCUXl4UFFVRkVPMEZCUVVFc01FSkJRV2RDTEZsQlFWa3NVVUZCVVN4alFVRlNMRVZCUVRWQ0xFbEJRWGxFTEdkRFFVRmxMRTlCUVdZc1EwRkJla1E3UVVGQlFUdEJRVkJUTEVOQlFXUXNReUlzSW1acGJHVWlPaUp6ZG1jdGNHRjBhQzFoWkdGd2RHVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OXFkbUZ1WkdWeVpHOWxjeTlEYjJSbEwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQmlkV2xzWkNCbWNtOXRJQ2N1TDNOMlp5MXdZWFJvTDJKMWFXeGtKenRjYm1sdGNHOXlkQ0J6ZEdGMFpVMWhjQ0JtY205dElDY3VMMk56Y3k5emRHRjBaUzF0WVhBbk8xeHVhVzF3YjNKMElIc2daMlYwZEdWeUxDQnpaWFIwWlhJc0lHZGxkRVZzWlcxbGJuUkVZWFJoSUgwZ1puSnZiU0FuTGk5emRtY3RZV1JoY0hSbGNpYzdYRzVwYlhCdmNuUWdZM0psWVhSbFFXUmhjSFJsY2lCbWNtOXRJQ2N1TDJGa1lYQjBaWEluTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCamNtVmhkR1ZCWkdGd2RHVnlLSHRjYmlBZ0lDQm5aWFIwWlhJc1hHNGdJQ0FnYzJWMGRHVnlPaUFvWld4bGJXVnVkQ3dnY0hKdmNITXNJRzl3ZEhNcElEMCtJSHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdjR0YwYUV4bGJtZDBhQ0E5SUc5d2RITWdQeUJ2Y0hSekxuQmhkR2hNWlc1bmRHZ2dPaUF3TzF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnYzJWMGRHVnlLR1ZzWlcxbGJuUXNJR0oxYVd4a0tIQnliM0J6TENCd1lYUm9UR1Z1WjNSb0tTd2diM0IwY3lrN1hHNGdJQ0FnZlN4Y2JpQWdJQ0J6ZEdGMFpVMWhjQ3hjYmlBZ0lDQm5aWFJGYkdWdFpXNTBSR0YwWVRvZ0tHVnNaVzFsYm5RcElEMCtJQ2g3SUhCaGRHaE1aVzVuZEdnNklHVnNaVzFsYm5RdVoyVjBWRzkwWVd4TVpXNW5kR2dvS1N3Z0xpNHVaMlYwUld4bGJXVnVkRVJoZEdFb1pXeGxiV1Z1ZENrZ2ZTbGNibjBwTzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FkYXB0ZXIvc3ZnLXBhdGgtYWRhcHRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDE3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfY3JlYXRlRWFzaW5nID0gcmVxdWlyZSgnLi9jcmVhdGUtZWFzaW5nJyk7XG5cbnZhciBfY3JlYXRlRWFzaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUVhc2luZyk7XG5cbnZhciBfY3JlYXRlQmV6aWVyID0gcmVxdWlyZSgnLi9jcmVhdGUtYmV6aWVyJyk7XG5cbnZhciBfY3JlYXRlQmV6aWVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUJlemllcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8vIFZhbHVlc1xuLypcbiAgICBFYXNpbmcgZnVuY3Rpb25zXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIFxuICAgIEdlbmVyYXRlcyBhbmQgcHJvdmlkZXMgZWFzaW5nIGZ1bmN0aW9ucyBiYXNlZCBvbiBiYXNlRnVuY3Rpb24gZGVmaW5pdGlvbnNcbiAgICBcbiAgICBBIGNhbGwgdG8gZWFzaW5nRnVuY3Rpb24uZ2V0KCdmdW5jdGlvbk5hbWUnKSByZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCBjYW4gYmUgcGFzc2VkOlxuICAgICAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzIDAtMVxuICAgICAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogQW1wIG1vZGlmaWVyLCBvbmx5IGFjY2VwdGVkIGluIHNvbWUgZWFzaW5nIGZ1bmN0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5kIGlzIHVzZWQgdG8gYWRqdXN0IG92ZXJhbGwgc3RyZW5ndGhcbiAgICAgICAgQHJldHVybiBbbnVtYmVyXTogRWFzZWQgcHJvZ3Jlc3NcbiAgICAgICAgXG4gICAgV2UgY2FuIGdlbmVyYXRlIG5ldyBmdW5jdGlvbnMgYnkgc2VuZGluZyBhbiBlYXNpbmcgZnVuY3Rpb24gdGhyb3VnaCBlYXNpbmdGdW5jdGlvbi5leHRlbmQobmFtZSwgbWV0aG9kKS5cbiAgICBXaGljaCB3aWxsIG1ha2UgbmFtZUluLCBuYW1lT3V0IGFuZCBuYW1lSW5PdXQgZnVuY3Rpb25zIGF2YWlsYWJsZSB0byB1c2UuXG4gICAgICAgIFxuICAgIEVhc2luZyBmdW5jdGlvbnMgZnJvbSBSb2JlcnQgUGVubmVyXG4gICAgaHR0cDovL3d3dy5yb2JlcnRwZW5uZXIuY29tL2Vhc2luZy9cbiAgICAgICAgXG4gICAgQmV6aWVyIGN1cnZlIGludGVycHJldG9yIGNyZWF0ZWQgZnJvbSBHYcOrdGFuIFJlbmF1ZGVhdSdzIG9yaWdpbmFsIEJlemllckVhc2luZyAgXG4gICAgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nL2Jsb2IvbWFzdGVyL2luZGV4LmpzICBcbiAgICBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNpbmcvYmxvYi9tYXN0ZXIvTElDRU5TRVxuXG4gICAgQW50aWNpcGF0ZSBlYXNpbmcgY3JlYXRlZCBieSBFbGxpb3QgR2lub1xuICAgIGh0dHBzOi8vdHdpdHRlci5jb20vRWxsaW90R2Vub1xuKi9cbi8vIEltcG9ydHNcbnZhciBERUZBVUxUX0JBQ0tfU1RSRU5HVEggPSAxLjUyNTtcbnZhciBERUZBVUxUX1BPV19TVFJFTkdUSCA9IDI7XG5cbi8qXG4gICAgRWFjaCBvZiB0aGVzZSBiYXNlIGZ1bmN0aW9ucyBpcyBhbiBlYXNlSW5cbiAgICBcbiAgICBPbiBpbml0LCB3ZSB1c2UgLm1pcnJvciBhbmQgLnJldmVyc2UgdG8gZ2VuZXJhdGUgZWFzZUluT3V0IGFuZFxuICAgIGVhc2VPdXQgZnVuY3Rpb25zIHJlc3BlY3RpdmVseS5cbiovXG52YXIgYmFzZUVhc2luZyA9IHtcbiAgICBlYXNlOiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgdmFyIHN0cmVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gREVGQVVMVF9QT1dfU1RSRU5HVEggOiBhcmd1bWVudHNbMV07XG4gICAgICAgIHJldHVybiBNYXRoLnBvdyhwcm9ncmVzcywgc3RyZW5ndGgpO1xuICAgIH0sXG4gICAgY2lyYzogZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgICAgIHJldHVybiAxIC0gTWF0aC5zaW4oTWF0aC5hY29zKHByb2dyZXNzKSk7XG4gICAgfSxcbiAgICBiYWNrOiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgdmFyIHN0cmVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gREVGQVVMVF9CQUNLX1NUUkVOR1RIIDogYXJndW1lbnRzWzFdO1xuICAgICAgICByZXR1cm4gcHJvZ3Jlc3MgKiBwcm9ncmVzcyAqICgoc3RyZW5ndGggKyAxKSAqIHByb2dyZXNzIC0gc3RyZW5ndGgpO1xuICAgIH1cbn07XG5cbi8vIFV0aWxpdHkgZnVuY3Rpb25zXG52YXIgZ2VuZXJhdGVQb3dlckVhc2luZyA9IGZ1bmN0aW9uIChzdHJlbmd0aCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgcmV0dXJuIGJhc2VFYXNpbmcuZWFzZShwcm9ncmVzcywgc3RyZW5ndGgpO1xuICAgIH07XG59O1xuXG5bJ2N1YmljJywgJ3F1YXJ0JywgJ3F1aW50J10uZm9yRWFjaChmdW5jdGlvbiAoZWFzaW5nTmFtZSwgaSkge1xuICAgIHJldHVybiBiYXNlRWFzaW5nW2Vhc2luZ05hbWVdID0gZ2VuZXJhdGVQb3dlckVhc2luZyhpICsgMyk7XG59KTtcblxuLy8gR2VuZXJhdGUgaW4vb3V0L2luT3V0IHZhcmlhdGlvbnNcbmZvciAodmFyIGtleSBpbiBiYXNlRWFzaW5nKSB7XG4gICAgaWYgKGJhc2VFYXNpbmcuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICB2YXIgZWFzaW5nRnVuY3Rpb24gPSAoMCwgX2NyZWF0ZUVhc2luZzIuZGVmYXVsdCkoYmFzZUVhc2luZ1trZXldKTtcbiAgICAgICAgYmFzZUVhc2luZ1trZXkgKyAnSW4nXSA9IGVhc2luZ0Z1bmN0aW9uLmluO1xuICAgICAgICBiYXNlRWFzaW5nW2tleSArICdPdXQnXSA9IGVhc2luZ0Z1bmN0aW9uLm91dDtcbiAgICAgICAgYmFzZUVhc2luZ1trZXkgKyAnSW5PdXQnXSA9IGVhc2luZ0Z1bmN0aW9uLmluT3V0O1xuICAgIH1cbn1cblxuYmFzZUVhc2luZy5saW5lYXIgPSBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICByZXR1cm4gcHJvZ3Jlc3M7XG59O1xuYmFzZUVhc2luZy5hbnRpY2lwYXRlID0gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgdmFyIHN0cmVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gREVGQVVMVF9CQUNLX1NUUkVOR1RIIDogYXJndW1lbnRzWzFdO1xuICAgIHJldHVybiAocHJvZ3Jlc3MgKj0gMikgPCAxID8gMC41ICogYmFzZUVhc2luZy5iYWNrSW4ocHJvZ3Jlc3MsIHN0cmVuZ3RoKSA6IDAuNSAqICgyIC0gTWF0aC5wb3coMiwgLTEwICogKHByb2dyZXNzIC0gMSkpKTtcbn07XG5cbmJhc2VFYXNpbmcuY3JlYXRlVmFyaWF0aW9ucyA9IF9jcmVhdGVFYXNpbmcyLmRlZmF1bHQ7XG5iYXNlRWFzaW5nLmN1YmljQmV6aWVyID0gX2NyZWF0ZUJlemllcjIuZGVmYXVsdDtcbmJhc2VFYXNpbmcubW9kaWZ5ID0gZnVuY3Rpb24gKGVhc2luZykge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgICAgIHJldHVybiBlYXNpbmcuYXBwbHkodW5kZWZpbmVkLCBbcHJvZ3Jlc3NdLmNvbmNhdChhcmdzKSk7XG4gICAgfTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGJhc2VFYXNpbmc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwyVmhjMmx1Wnk5d2NtVnpaWFF0WldGemFXNW5MbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN1FVRXdRa0U3T3pzN1FVRkRRVHM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN08wRkJSMEVzU1VGQlRTeDNRa0ZCZDBJc1MwRkJPVUk3UVVGRFFTeEpRVUZOTEhWQ1FVRjFRaXhEUVVFM1FqczdPenM3T3pzN1FVRlJRU3hKUVVGTkxHRkJRV0U3UVVGRFppeFZRVUZOTEZWQlFVTXNVVUZCUkR0QlFVRkJMRmxCUVZjc1VVRkJXQ3g1UkVGQmMwSXNiMEpCUVhSQ08wRkJRVUVzZDBKQlFTdERMRkZCUVM5RExFVkJRVEpFTEZGQlFUTkVPMEZCUVVFc1MwRkVVenRCUVVWbUxGVkJRVTA3UVVGQlFTeGxRVUZaTEVsQlFVa3NTMEZCU3l4SFFVRk1MRU5CUVZNc1MwRkJTeXhKUVVGTUxFTkJRVlVzVVVGQlZpeERRVUZVTEVOQlFXaENPMEZCUVVFc1MwRkdVenRCUVVkbUxGVkJRVTBzVlVGQlF5eFJRVUZFTzBGQlFVRXNXVUZCVnl4UlFVRllMSGxFUVVGelFpeHhRa0ZCZEVJN1FVRkJRU3hsUVVGcFJDeFhRVUZYTEZGQlFWb3NTVUZCZVVJc1EwRkJReXhYUVVGWExFTkJRVm9zU1VGQmFVSXNVVUZCYWtJc1IwRkJORUlzVVVGQmNrUXNRMEZCYUVRN1FVRkJRVHRCUVVoVExFTkJRVzVDT3pzN1FVRlBRU3hKUVVGTkxITkNRVUZ6UWl4VlFVRkRMRkZCUVVRN1FVRkJRU3hYUVVGakxGVkJRVU1zVVVGQlJEdEJRVUZCTEdWQlFXTXNWMEZCVnl4SlFVRllMRU5CUVdkQ0xGRkJRV2hDTEVWQlFUQkNMRkZCUVRGQ0xFTkJRV1E3UVVGQlFTeExRVUZrTzBGQlFVRXNRMEZCTlVJN08wRkJSVUVzUTBGQlF5eFBRVUZFTEVWQlFWVXNUMEZCVml4RlFVRnRRaXhQUVVGdVFpeEZRVUUwUWl4UFFVRTFRaXhEUVVGdlF5eFZRVUZETEZWQlFVUXNSVUZCWVN4RFFVRmlPMEZCUVVFc1YwRkJiVUlzVjBGQlZ5eFZRVUZZTEVsQlFYbENMRzlDUVVGdlFpeEpRVUZKTEVOQlFYaENMRU5CUVRWRE8wRkJRVUVzUTBGQmNFTTdPenRCUVVkQkxFdEJRVXNzU1VGQlNTeEhRVUZVTEVsQlFXZENMRlZCUVdoQ0xFVkJRVFJDTzBGQlEzaENMRkZCUVVrc1YwRkJWeXhqUVVGWUxFTkJRVEJDTEVkQlFURkNMRU5CUVVvc1JVRkJiME03UVVGRGFFTXNXVUZCVFN4cFFrRkJhVUlzTkVKQlFYRkNMRmRCUVZjc1IwRkJXQ3hEUVVGeVFpeERRVUYyUWp0QlFVTkJMRzFDUVVGakxFZEJRV1FzVjBGQmVVSXNaVUZCWlN4RlFVRjRRenRCUVVOQkxHMUNRVUZqTEVkQlFXUXNXVUZCTUVJc1pVRkJaU3hIUVVGNlF6dEJRVU5CTEcxQ1FVRmpMRWRCUVdRc1kwRkJORUlzWlVGQlpTeExRVUV6UXp0QlFVTklPMEZCUTBvN08wRkJSVVFzVjBGQlZ5eE5RVUZZTEVkQlFXOUNPMEZCUVVFc1YwRkJXU3hSUVVGYU8wRkJRVUVzUTBGQmNFSTdRVUZEUVN4WFFVRlhMRlZCUVZnc1IwRkJkMElzVlVGQlF5eFJRVUZFTzBGQlFVRXNVVUZCVnl4UlFVRllMSGxFUVVGelFpeHhRa0ZCZEVJN1FVRkJRU3hYUVVOdVFpeERRVUZETEZsQlFWVXNRMEZCV0N4SlFVRm5RaXhEUVVGcVFpeEhRVUZ6UWl4TlFVRk5MRmRCUVZjc1RVRkJXQ3hEUVVGclFpeFJRVUZzUWl4RlFVRTBRaXhSUVVFMVFpeERRVUUxUWl4SFFVRnhSU3hQUVVGUExFbEJRVWtzUzBGQlN5eEhRVUZNTEVOQlFWTXNRMEZCVkN4RlFVRlpMRU5CUVVNc1JVRkJSQ3hKUVVGUExGZEJRVmNzUTBGQmJFSXNRMEZCV2l4RFFVRllMRU5CUkdwRU8wRkJRVUVzUTBGQmVFSTdPMEZCUjBFc1YwRkJWeXhuUWtGQldEdEJRVU5CTEZkQlFWY3NWMEZCV0R0QlFVTkJMRmRCUVZjc1RVRkJXQ3hIUVVGdlFpeFZRVUZETEUxQlFVUTdRVUZCUVN4elEwRkJXU3hKUVVGYU8wRkJRVmtzV1VGQldqdEJRVUZCT3p0QlFVRkJMRmRCUVhGQ0xGVkJRVU1zVVVGQlJEdEJRVUZCTEdWQlFXTXNlVUpCUVU4c1VVRkJVQ3hUUVVGdlFpeEpRVUZ3UWl4RlFVRmtPMEZCUVVFc1MwRkJja0k3UVVGQlFTeERRVUZ3UWpzN2EwSkJSV1VzVlNJc0ltWnBiR1VpT2lKd2NtVnpaWFF0WldGemFXNW5MbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OXFkbUZ1WkdWeVpHOWxjeTlEYjJSbEwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaThxWEc0Z0lDQWdSV0Z6YVc1bklHWjFibU4wYVc5dWMxeHVJQ0FnSUMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMWNiaUFnSUNCY2JpQWdJQ0JIWlc1bGNtRjBaWE1nWVc1a0lIQnliM1pwWkdWeklHVmhjMmx1WnlCbWRXNWpkR2x2Ym5NZ1ltRnpaV1FnYjI0Z1ltRnpaVVoxYm1OMGFXOXVJR1JsWm1sdWFYUnBiMjV6WEc0Z0lDQWdYRzRnSUNBZ1FTQmpZV3hzSUhSdklHVmhjMmx1WjBaMWJtTjBhVzl1TG1kbGRDZ25ablZ1WTNScGIyNU9ZVzFsSnlrZ2NtVjBkWEp1Y3lCaElHWjFibU4wYVc5dUlIUm9ZWFFnWTJGdUlHSmxJSEJoYzNObFpEcGNiaUFnSUNBZ0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQlFjbTluY21WemN5QXdMVEZjYmlBZ0lDQWdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRJQ2h2Y0hScGIyNWhiQ2s2SUVGdGNDQnRiMlJwWm1sbGNpd2diMjVzZVNCaFkyTmxjSFJsWkNCcGJpQnpiMjFsSUdWaGMybHVaeUJtZFc1amRHbHZibk5jYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdGdVpDQnBjeUIxYzJWa0lIUnZJR0ZrYW5WemRDQnZkbVZ5WVd4c0lITjBjbVZ1WjNSb1hHNGdJQ0FnSUNBZ0lFQnlaWFIxY200Z1cyNTFiV0psY2wwNklFVmhjMlZrSUhCeWIyZHlaWE56WEc0Z0lDQWdJQ0FnSUZ4dUlDQWdJRmRsSUdOaGJpQm5aVzVsY21GMFpTQnVaWGNnWm5WdVkzUnBiMjV6SUdKNUlITmxibVJwYm1jZ1lXNGdaV0Z6YVc1bklHWjFibU4wYVc5dUlIUm9jbTkxWjJnZ1pXRnphVzVuUm5WdVkzUnBiMjR1WlhoMFpXNWtLRzVoYldVc0lHMWxkR2h2WkNrdVhHNGdJQ0FnVjJocFkyZ2dkMmxzYkNCdFlXdGxJRzVoYldWSmJpd2dibUZ0WlU5MWRDQmhibVFnYm1GdFpVbHVUM1YwSUdaMWJtTjBhVzl1Y3lCaGRtRnBiR0ZpYkdVZ2RHOGdkWE5sTGx4dUlDQWdJQ0FnSUNCY2JpQWdJQ0JGWVhOcGJtY2dablZ1WTNScGIyNXpJR1p5YjIwZ1VtOWlaWEowSUZCbGJtNWxjbHh1SUNBZ0lHaDBkSEE2THk5M2QzY3VjbTlpWlhKMGNHVnVibVZ5TG1OdmJTOWxZWE5wYm1jdlhHNGdJQ0FnSUNBZ0lGeHVJQ0FnSUVKbGVtbGxjaUJqZFhKMlpTQnBiblJsY25CeVpYUnZjaUJqY21WaGRHVmtJR1p5YjIwZ1IySERxM1JoYmlCU1pXNWhkV1JsWVhVbmN5QnZjbWxuYVc1aGJDQkNaWHBwWlhKRllYTnBibWNnSUZ4dUlDQWdJR2gwZEhCek9pOHZaMmwwYUhWaUxtTnZiUzluY21VdlltVjZhV1Z5TFdWaGMybHVaeTlpYkc5aUwyMWhjM1JsY2k5cGJtUmxlQzVxY3lBZ1hHNGdJQ0FnYUhSMGNITTZMeTluYVhSb2RXSXVZMjl0TDJkeVpTOWlaWHBwWlhJdFpXRnphVzVuTDJKc2IySXZiV0Z6ZEdWeUwweEpRMFZPVTBWY2JseHVJQ0FnSUVGdWRHbGphWEJoZEdVZ1pXRnphVzVuSUdOeVpXRjBaV1FnWW5rZ1JXeHNhVzkwSUVkcGJtOWNiaUFnSUNCb2RIUndjem92TDNSM2FYUjBaWEl1WTI5dEwwVnNiR2x2ZEVkbGJtOWNiaW92WEc0dkx5QkpiWEJ2Y25SelhHNXBiWEJ2Y25RZ1kzSmxZWFJsUldGemFXNW5SblZ1WTNScGIyNGdabkp2YlNBbkxpOWpjbVZoZEdVdFpXRnphVzVuSnp0Y2JtbHRjRzl5ZENCamRXSnBZMEpsZW1sbGNpQm1jbTl0SUNjdUwyTnlaV0YwWlMxaVpYcHBaWEluTzF4dVhHNHZMeUJXWVd4MVpYTmNibU52Ym5OMElFUkZSa0ZWVEZSZlFrRkRTMTlUVkZKRlRrZFVTQ0E5SURFdU5USTFPMXh1WTI5dWMzUWdSRVZHUVZWTVZGOVFUMWRmVTFSU1JVNUhWRWdnUFNBeU8xeHVYRzR2S2x4dUlDQWdJRVZoWTJnZ2IyWWdkR2hsYzJVZ1ltRnpaU0JtZFc1amRHbHZibk1nYVhNZ1lXNGdaV0Z6WlVsdVhHNGdJQ0FnWEc0Z0lDQWdUMjRnYVc1cGRDd2dkMlVnZFhObElDNXRhWEp5YjNJZ1lXNWtJQzV5WlhabGNuTmxJSFJ2SUdkbGJtVnlZWFJsSUdWaGMyVkpiazkxZENCaGJtUmNiaUFnSUNCbFlYTmxUM1YwSUdaMWJtTjBhVzl1Y3lCeVpYTndaV04wYVhabGJIa3VYRzRxTDF4dVkyOXVjM1FnWW1GelpVVmhjMmx1WnlBOUlIdGNiaUFnSUNCbFlYTmxPaUFvY0hKdlozSmxjM01zSUhOMGNtVnVaM1JvSUQwZ1JFVkdRVlZNVkY5UVQxZGZVMVJTUlU1SFZFZ3BJRDArSUhCeWIyZHlaWE56SUNvcUlITjBjbVZ1WjNSb0xGeHVJQ0FnSUdOcGNtTTZJSEJ5YjJkeVpYTnpJRDArSURFZ0xTQk5ZWFJvTG5OcGJpaE5ZWFJvTG1GamIzTW9jSEp2WjNKbGMzTXBLU3hjYmlBZ0lDQmlZV05yT2lBb2NISnZaM0psYzNNc0lITjBjbVZ1WjNSb0lEMGdSRVZHUVZWTVZGOUNRVU5MWDFOVVVrVk9SMVJJS1NBOVBpQW9jSEp2WjNKbGMzTWdLaUJ3Y205bmNtVnpjeWtnS2lBb0tITjBjbVZ1WjNSb0lDc2dNU2tnS2lCd2NtOW5jbVZ6Y3lBdElITjBjbVZ1WjNSb0tWeHVmVHRjYmx4dUx5OGdWWFJwYkdsMGVTQm1kVzVqZEdsdmJuTmNibU52Ym5OMElHZGxibVZ5WVhSbFVHOTNaWEpGWVhOcGJtY2dQU0FvYzNSeVpXNW5kR2dwSUQwK0lDaHdjbTluY21WemN5a2dQVDRnWW1GelpVVmhjMmx1Wnk1bFlYTmxLSEJ5YjJkeVpYTnpMQ0J6ZEhKbGJtZDBhQ2s3WEc1Y2Jsc25ZM1ZpYVdNbkxDQW5jWFZoY25RbkxDQW5jWFZwYm5RblhTNW1iM0pGWVdOb0tDaGxZWE5wYm1kT1lXMWxMQ0JwS1NBOVBpQmlZWE5sUldGemFXNW5XMlZoYzJsdVowNWhiV1ZkSUQwZ1oyVnVaWEpoZEdWUWIzZGxja1ZoYzJsdVp5aHBJQ3NnTXlrcE8xeHVYRzR2THlCSFpXNWxjbUYwWlNCcGJpOXZkWFF2YVc1UGRYUWdkbUZ5YVdGMGFXOXVjMXh1Wm05eUlDaHNaWFFnYTJWNUlHbHVJR0poYzJWRllYTnBibWNwSUh0Y2JpQWdJQ0JwWmlBb1ltRnpaVVZoYzJsdVp5NW9ZWE5QZDI1UWNtOXdaWEowZVNoclpYa3BLU0I3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJR1ZoYzJsdVowWjFibU4wYVc5dUlEMGdZM0psWVhSbFJXRnphVzVuUm5WdVkzUnBiMjRvWW1GelpVVmhjMmx1WjF0clpYbGRLVHRjYmlBZ0lDQWdJQ0FnWW1GelpVVmhjMmx1WjF0Z0pIdHJaWGw5U1c1Z1hTQTlJR1ZoYzJsdVowWjFibU4wYVc5dUxtbHVPMXh1SUNBZ0lDQWdJQ0JpWVhObFJXRnphVzVuVzJBa2UydGxlWDFQZFhSZ1hTQTlJR1ZoYzJsdVowWjFibU4wYVc5dUxtOTFkRHRjYmlBZ0lDQWdJQ0FnWW1GelpVVmhjMmx1WjF0Z0pIdHJaWGw5U1c1UGRYUmdYU0E5SUdWaGMybHVaMFoxYm1OMGFXOXVMbWx1VDNWME8xeHVJQ0FnSUgxY2JuMWNibHh1WW1GelpVVmhjMmx1Wnk1c2FXNWxZWElnUFNCd2NtOW5jbVZ6Y3lBOVBpQndjbTluY21WemN6dGNibUpoYzJWRllYTnBibWN1WVc1MGFXTnBjR0YwWlNBOUlDaHdjbTluY21WemN5d2djM1J5Wlc1bmRHZ2dQU0JFUlVaQlZVeFVYMEpCUTB0ZlUxUlNSVTVIVkVncElEMCtYRzRnSUNBZ0tDaHdjbTluY21WemN5bzlNaWtnUENBeEtTQS9JREF1TlNBcUlHSmhjMlZGWVhOcGJtY3VZbUZqYTBsdUtIQnliMmR5WlhOekxDQnpkSEpsYm1kMGFDa2dPaUFnTUM0MUlDb2dLRElnTFNCTllYUm9MbkJ2ZHlneUxDQXRNVEFnS2lBb2NISnZaM0psYzNNZ0xTQXhLU2twTzF4dVhHNWlZWE5sUldGemFXNW5MbU55WldGMFpWWmhjbWxoZEdsdmJuTWdQU0JqY21WaGRHVkZZWE5wYm1kR2RXNWpkR2x2Ymp0Y2JtSmhjMlZGWVhOcGJtY3VZM1ZpYVdOQ1pYcHBaWElnUFNCamRXSnBZMEpsZW1sbGNqdGNibUpoYzJWRllYTnBibWN1Ylc5a2FXWjVJRDBnS0dWaGMybHVaeXdnTGk0dVlYSm5jeWtnUFQ0Z0tIQnliMmR5WlhOektTQTlQaUJsWVhOcGJtY29jSEp2WjNKbGMzTXNJQzR1TG1GeVozTXBPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JpWVhObFJXRnphVzVuT3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvZWFzaW5nL3ByZXNldC1lYXNpbmcuanNcbiAqKiBtb2R1bGUgaWQgPSAxOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX0Zsb3cgPSByZXF1aXJlKCcuLi9GbG93Jyk7XG5cbnZhciBfRmxvdzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9GbG93KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIFNBVkVfUFJPUCA9ICdfX3BtX2Zsb3cnO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZWxlbWVudCwgYWRhcHRlcikge1xuICAgIGlmIChlbGVtZW50W1NBVkVfUFJPUF0pIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRbU0FWRV9QUk9QXTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgZmxvdyA9IG5ldyBfRmxvdzIuZGVmYXVsdCh7IGVsZW1lbnQ6IGVsZW1lbnQsIGFkYXB0ZXI6IGFkYXB0ZXIgfSk7XG5cbiAgICAgICAgLy8gQmluZCBhZGFwdGVyIHRvIGVsZW1lbnRcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsIFNBVkVfUFJPUCwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICAgICAgICB2YWx1ZTogZmxvd1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZmxvdztcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMlpzYjNjdloyVjBMV1pzYjNjdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenRCUVVGQk96czdPenM3UVVGRlFTeEpRVUZOTEZsQlFWa3NWMEZCYkVJN08ydENRVVZsTEZWQlFVTXNUMEZCUkN4RlFVRlZMRTlCUVZZc1JVRkJjMEk3UVVGRGFrTXNVVUZCU1N4UlFVRlJMRk5CUVZJc1EwRkJTaXhGUVVGM1FqdEJRVU53UWl4bFFVRlBMRkZCUVZFc1UwRkJVaXhEUVVGUU8wRkJRMGdzUzBGR1JDeE5RVVZQTzBGQlEwZ3NXVUZCVFN4UFFVRlBMRzFDUVVGVExFVkJRVVVzWjBKQlFVWXNSVUZCVnl4blFrRkJXQ3hGUVVGVUxFTkJRV0k3T3p0QlFVZEJMR1ZCUVU4c1kwRkJVQ3hEUVVGelFpeFBRVUYwUWl4RlFVRXJRaXhUUVVFdlFpeEZRVUV3UXp0QlFVTjBReXgzUWtGQldTeExRVVF3UWp0QlFVVjBReXh6UWtGQlZTeExRVVkwUWp0QlFVZDBReXh0UWtGQlR6dEJRVWdyUWl4VFFVRXhRenM3UVVGTlFTeGxRVUZQTEVsQlFWQTdRVUZEU0R0QlFVTktMRU1pTENKbWFXeGxJam9pWjJWMExXWnNiM2N1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMnAyWVc1a1pYSmtiMlZ6TDBOdlpHVXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJRVpzYjNjZ1puSnZiU0FuTGk0dlJteHZkeWM3WEc1Y2JtTnZibk4wSUZOQlZrVmZVRkpQVUNBOUlDZGZYM0J0WDJac2IzY25PMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0FvWld4bGJXVnVkQ3dnWVdSaGNIUmxjaWtnUFQ0Z2UxeHVJQ0FnSUdsbUlDaGxiR1Z0Wlc1MFcxTkJWa1ZmVUZKUFVGMHBJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR1ZzWlcxbGJuUmJVMEZXUlY5UVVrOVFYVHRjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCbWJHOTNJRDBnYm1WM0lFWnNiM2NvZXlCbGJHVnRaVzUwTENCaFpHRndkR1Z5SUgwcE8xeHVYRzRnSUNBZ0lDQWdJQzh2SUVKcGJtUWdZV1JoY0hSbGNpQjBieUJsYkdWdFpXNTBYRzRnSUNBZ0lDQWdJRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNobGJHVnRaVzUwTENCVFFWWkZYMUJTVDFBc0lIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdWdWRXMWxjbUZpYkdVNklHWmhiSE5sTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdkM0pwZEdGaWJHVTZJR1poYkhObExGeHVJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVTZJR1pzYjNkY2JpQWdJQ0FnSUNBZ2ZTazdYRzVjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR1pzYjNjN1hHNGdJQ0FnZlZ4dWZUdGNibHh1WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvZmxvdy9nZXQtZmxvdy5qc1xuICoqIG1vZHVsZSBpZCA9IDE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnN0ZXBQcm9ncmVzcyA9IGV4cG9ydHMuc3BlZWRQZXJTZWNvbmQgPSBleHBvcnRzLnNwZWVkUGVyRnJhbWUgPSBleHBvcnRzLnNtb290aCA9IGV4cG9ydHMucmVzdHJpY3QgPSBleHBvcnRzLnJlbGF0aXZlVmFsdWUgPSBleHBvcnRzLnJhbmRvbSA9IGV4cG9ydHMucmFkaWFuc1RvRGVncmVlcyA9IGV4cG9ydHMucG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZSA9IGV4cG9ydHMub2Zmc2V0ID0gZXhwb3J0cy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSA9IGV4cG9ydHMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MgPSBleHBvcnRzLmh5cG90ZW51c2UgPSBleHBvcnRzLmVhc2UgPSBleHBvcnRzLmRpc3RhbmNlID0gZXhwb3J0cy5kaWxhdGUgPSBleHBvcnRzLmRlZ3JlZXNUb1JhZGlhbnMgPSBleHBvcnRzLmFuZ2xlID0gdW5kZWZpbmVkO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgWkVST19QT0lOVCA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDAsXG4gICAgejogMFxufTtcblxudmFyIGRpc3RhbmNlMUQgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBNYXRoLmFicyhhIC0gYik7XG59O1xuXG4vKlxuICAgIEFuZ2xlIGJldHdlZW4gcG9pbnRzXG4gICAgXG4gICAgVHJhbnNsYXRlcyB0aGUgaHlwb3RoZXRpY2FsIGxpbmUgc28gdGhhdCB0aGUgJ2Zyb20nIGNvb3JkaW5hdGVzXG4gICAgYXJlIGF0IDAsMFxuICAgIFxuICAgIEBwYXJhbSBbb2JqZWN0XTogWCBhbmQgWSBjb29yZGluYXRlcyBvZiBmcm9tIHBvaW50XG4gICAgQHBhcmFtIFtvYmplY3RdOiBYIGFuZCBZIGNvcmRpbmF0ZXMgb2YgdG8gcG9pbnRcbiAgICBAcmV0dXJuIFtyYWRpYW5dOiBBbmdsZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzIGluIHJhZGlhbnNcbiovXG52YXIgYW5nbGUgPSBleHBvcnRzLmFuZ2xlID0gZnVuY3Rpb24gKGEpIHtcbiAgICB2YXIgYiA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IFpFUk9fUE9JTlQgOiBhcmd1bWVudHNbMV07XG4gICAgcmV0dXJuIHJhZGlhbnNUb0RlZ3JlZXMoTWF0aC5hdGFuMihhLnggLSBiLngsIGEueSAtIGIueSkpO1xufTtcblxuLypcbiAgICBDb252ZXJ0IGRlZ3JlZXMgdG8gcmFkaWFuc1xuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgaW4gZGVncmVlc1xuICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGluIHJhZGlhbnNcbiovXG52YXIgZGVncmVlc1RvUmFkaWFucyA9IGV4cG9ydHMuZGVncmVlc1RvUmFkaWFucyA9IGZ1bmN0aW9uIChkZWdyZWVzKSB7XG4gICAgcmV0dXJuIGRlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xufTtcblxuLypcbiAgICBEaWxhdGVcbiAgICBcbiAgICBDaGFuZ2UgdGhlIHByb2dyZXNzaW9uIGJldHdlZW4gYSBhbmQgYiBhY2NvcmRpbmcgdG8gZGlsYXRpb24uXG4gICAgXG4gICAgU28gZGlsYXRpb24gPSAwLjUgd291bGQgY2hhbmdlXG4gICAgXG4gICAgYSAtLS0tLS0tLS0gYlxuICAgIFxuICAgIHRvXG4gICAgXG4gICAgYSAtLS0tIGJcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFByZXZpb3VzIHZhbHVlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBEaWxhdGUgcHJvZ3Jlc3MgYnkgeFxuICAgIEByZXR1cm4gW251bWJlcl06IFByZXZpb3VzIHZhbHVlIHBsdXMgdGhlIGRpbGF0ZWQgZGlmZmVyZW5jZVxuKi9cbnZhciBkaWxhdGUgPSBleHBvcnRzLmRpbGF0ZSA9IGZ1bmN0aW9uIChhLCBiLCBkaWxhdGlvbikge1xuICAgIHJldHVybiBhICsgKGIgLSBhKSAqIGRpbGF0aW9uO1xufTtcblxuLypcbiAgICBEaXN0YW5jZVxuICAgIFxuICAgIFJldHVybnMgdGhlIGRpc3RhbmNlIGJldHdlZW4gdHdvIG4gZGltZW5zaW9uYWwgcG9pbnRzLlxuICAgIFxuICAgIEBwYXJhbSBbb2JqZWN0L251bWJlcl06IHggYW5kIHkgb3IganVzdCB4IG9mIHBvaW50IEFcbiAgICBAcGFyYW0gW29iamVjdC9udW1iZXJdOiAob3B0aW9uYWwpOiB4IGFuZCB5IG9yIGp1c3QgeCBvZiBwb2ludCBCXG4gICAgQHJldHVybiBbbnVtYmVyXTogVGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIHR3byBwb2ludHNcbiovXG52YXIgZGlzdGFuY2UgPSBleHBvcnRzLmRpc3RhbmNlID0gZnVuY3Rpb24gKGEpIHtcbiAgICB2YXIgYiA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IFpFUk9fUE9JTlQgOiBhcmd1bWVudHNbMV07XG5cbiAgICAvLyAxRCBkaW1lbnNpb25zXG4gICAgaWYgKCgwLCBfdXRpbHMuaXNOdW0pKGEpKSB7XG4gICAgICAgIHJldHVybiBkaXN0YW5jZTFEKGEsIGIpO1xuXG4gICAgICAgIC8vIE11bHRpLWRpbWVuc2lvbmFsXG4gICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciB4RGVsdGEgPSBkaXN0YW5jZTFEKGEueCwgYi54KTtcbiAgICAgICAgICAgIHZhciB5RGVsdGEgPSBkaXN0YW5jZTFEKGEueSwgYi55KTtcbiAgICAgICAgICAgIHZhciB6RGVsdGEgPSAoMCwgX3V0aWxzLmlzTnVtKShhLnopID8gZGlzdGFuY2UxRChhLnosIGIueikgOiAwO1xuXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHhEZWx0YSwgMikgKyBNYXRoLnBvdyh5RGVsdGEsIDIpICsgTWF0aC5wb3coekRlbHRhLCAyKSk7XG4gICAgICAgIH1cbn07XG5cbi8qXG4gICAgRWFzZSB2YWx1ZSB3aXRoaW4gcmFuZ2VkIHBhcmFtZXRlcnNcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzIGJldHdlZW4gMCBhbmQgMVxuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgb2YgMCBwcm9ncmVzc1xuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgb2YgMSBwcm9ncmVzc1xuICAgIEBwYXJhbSBbc3RyaW5nIHx8IGZ1bmN0aW9uXTogTmFtZSBvZiBwcmVzZXQgZWFzaW5nXG4gICAgICAgIHRvIHVzZSBvciBnZW5lcmF0ZWQgZWFzaW5nIGZ1bmN0aW9uXG4gICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgb2YgZWFzZWQgcHJvZ3Jlc3MgaW4gcmFuZ2VcbiovXG52YXIgZWFzZSA9IGV4cG9ydHMuZWFzZSA9IGZ1bmN0aW9uIChwcm9ncmVzcywgZnJvbSwgdG8sIGVhc2UpIHtcbiAgICB2YXIgcHJvZ3Jlc3NMaW1pdGVkID0gcmVzdHJpY3QocHJvZ3Jlc3MsIDAsIDEpO1xuICAgIHZhciBlYXNlZFByb2dyZXNzID0gZWFzZShwcm9ncmVzc0xpbWl0ZWQpO1xuXG4gICAgcmV0dXJuIGdldFZhbHVlRnJvbVByb2dyZXNzKGVhc2VkUHJvZ3Jlc3MsIGZyb20sIHRvKTtcbn07XG5cbi8qXG4gICAgSHlwb3RlbnVzZVxuICAgIFxuICAgIFJldHVybnMgdGhlIGh5cG90ZW51c2UsIHNpZGUgQywgZ2l2ZW4gdGhlIGxlbmd0aHMgb2Ygc2lkZXMgQSBhbmQgQi5cbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IExlbmd0aCBvZiBBXG4gICAgQHBhcmFtIFtudW1iZXJdOiBMZW5ndGggb2YgQlxuICAgIEByZXR1cm4gW251bWJlcl06IExlbmd0aCBvZiBDXG4qL1xudmFyIGh5cG90ZW51c2UgPSBleHBvcnRzLmh5cG90ZW51c2UgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBNYXRoLnNxcnQoYSAqIGEgKyBiICogYik7XG59O1xuXG4vKlxuICAgIFZhbHVlIGluIHJhbmdlIGZyb20gcHJvZ3Jlc3NcbiAgICBcbiAgICBHaXZlbiBhIGxvd2VyIGxpbWl0IGFuZCBhbiB1cHBlciBsaW1pdCwgd2UgcmV0dXJuIHRoZSB2YWx1ZSB3aXRoaW5cbiAgICB0aGF0IHJhbmdlIGFzIGV4cHJlc3NlZCBieSBwcm9ncmVzcyAoYSBudW1iZXIgZnJvbSAwLTEpXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBUaGUgcHJvZ3Jlc3MgYmV0d2VlbiBsb3dlciBhbmQgdXBwZXIgbGltaXRzIGV4cHJlc3NlZCAwLTFcbiAgICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IG9mIHJhbmdlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBVcHBlciBsaW1pdCBvZiByYW5nZVxuICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGFzIGNhbGN1bGF0ZWQgZnJvbSBwcm9ncmVzcyB3aXRoaW4gcmFuZ2UgKG5vdCBsaW1pdGVkIHdpdGhpbiByYW5nZSlcbiovXG52YXIgZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MgPSBleHBvcnRzLmdldFZhbHVlRnJvbVByb2dyZXNzID0gZnVuY3Rpb24gKHByb2dyZXNzLCBmcm9tLCB0bykge1xuICAgIHJldHVybiAtcHJvZ3Jlc3MgKiBmcm9tICsgcHJvZ3Jlc3MgKiB0byArIGZyb207XG59O1xuXG4vKlxuICAgIFByb2dyZXNzIHdpdGhpbiBnaXZlbiByYW5nZVxuICAgIFxuICAgIEdpdmVuIGEgbG93ZXIgbGltaXQgYW5kIGFuIHVwcGVyIGxpbWl0LCB3ZSByZXR1cm4gdGhlIHByb2dyZXNzXG4gICAgKGV4cHJlc3NlZCBhcyBhIG51bWJlciAwLTEpIHJlcHJlc2VudGVkIGJ5IHRoZSBnaXZlbiB2YWx1ZSwgYW5kXG4gICAgbGltaXQgdGhhdCBwcm9ncmVzcyB0byB3aXRoaW4gMC0xLlxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgdG8gZmluZCBwcm9ncmVzcyB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiAgICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXRcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBQcm9ncmVzcyBvZiB2YWx1ZSB3aXRoaW4gcmFuZ2UgYXMgZXhwcmVzc2VkIDAtMVxuKi9cbnZhciBnZXRQcm9ncmVzc0Zyb21WYWx1ZSA9IGV4cG9ydHMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUsIGZyb20sIHRvKSB7XG4gICAgcmV0dXJuICh2YWx1ZSAtIGZyb20pIC8gKHRvIC0gZnJvbSk7XG59O1xuXG4vKlxuICAgIE9mZnNldCBiZXR3ZWVuIHR3byBvYmplY3RzIG9mIG51bWJlcnNcblxuICAgIElmIHByb3BlcnR5IGlzIGZvdW5kIGluIGIgbm90IHByZXNlbnQgaW4gYSwgaXQgd2lsbCByZXR1cm4gYDBgIGZvciB0aGF0IHByb3AuXG4gICAgXG4gICAgQHBhcmFtIFtQb2ludF06IEZpcnN0IG9iamVjdFxuICAgIEBwYXJhbSBbUG9pbnRdOiBTZWNvbmQgb2JqZWN0XG4gICAgQHJldHVybiBbT2Zmc2V0XTogRGlzdGFuY2UgbWV0cmljcyBiZXR3ZWVuIHR3byBwb2ludHNcbiovXG52YXIgb2Zmc2V0ID0gZXhwb3J0cy5vZmZzZXQgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgIHZhciBvZmZzZXQgPSB7fTtcblxuICAgIGZvciAodmFyIGtleSBpbiBiKSB7XG4gICAgICAgIGlmIChiLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIG9mZnNldFtrZXldID0gKDAsIF91dGlscy5oYXNQcm9wZXJ0eSkoYSwga2V5KSA/IGJba2V5XSAtIGFba2V5XSA6IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2Zmc2V0O1xufTtcblxuLypcbiAgICBQb2ludCBmcm9tIGFuZ2xlIGFuZCBkaXN0YW5jZVxuICAgIFxuICAgIEBwYXJhbSBbb2JqZWN0XTogMkQgcG9pbnQgb2Ygb3JpZ2luXG4gICAgQHBhcmFtIFtudW1iZXJdOiBBbmdsZSBmcm9tIG9yaWdpblxuICAgIEBwYXJhbSBbbnVtYmVyXTogRGlzdGFuY2UgZnJvbSBvcmlnaW5cbiAgICBAcmV0dXJuIFtvYmplY3RdOiBDYWxjdWxhdGVkIDJEIHBvaW50XG4qL1xudmFyIHBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UgPSBleHBvcnRzLnBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UgPSBmdW5jdGlvbiAob3JpZ2luLCBhbmdsZSwgZGlzdGFuY2UpIHtcbiAgICBhbmdsZSA9IGRlZ3JlZXNUb1JhZGlhbnMoYW5nbGUpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogZGlzdGFuY2UgKiBNYXRoLmNvcyhhbmdsZSkgKyBvcmlnaW4ueCxcbiAgICAgICAgeTogZGlzdGFuY2UgKiBNYXRoLnNpbihhbmdsZSkgKyBvcmlnaW4ueVxuICAgIH07XG59O1xuXG4vKlxuICAgIENvbnZlcnQgcmFkaWFucyB0byBkZWdyZWVzXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBpbiByYWRpYW5zXG4gICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgaW4gZGVncmVlc1xuKi9cbnZhciByYWRpYW5zVG9EZWdyZWVzID0gZXhwb3J0cy5yYWRpYW5zVG9EZWdyZWVzID0gZnVuY3Rpb24gKHJhZGlhbnMpIHtcbiAgICByZXR1cm4gcmFkaWFucyAqIDE4MCAvIE1hdGguUEk7XG59O1xuXG4vKlxuICAgIFJldHVybiByYW5kb20gbnVtYmVyIGJldHdlZW4gcmFuZ2VcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogT3V0cHV0IG1pbmltdW1cbiAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogT3V0cHV0IG1heGltdW1cbiAgICBAcmV0dXJuIFtudW1iZXJdOiBSYW5kb20gbnVtYmVyIHdpdGhpbiByYW5nZSwgb3IgMCBhbmQgMSBpZiBub25lIHByb3ZpZGVkXG4qL1xudmFyIHJhbmRvbSA9IGV4cG9ydHMucmFuZG9tID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBtaW4gPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyAwIDogYXJndW1lbnRzWzBdO1xuICAgIHZhciBtYXggPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyAxIDogYXJndW1lbnRzWzFdO1xuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XG59O1xuXG4vKlxuICAgIENhbGN1bGF0ZSByZWxhdGl2ZSB2YWx1ZVxuICAgIFxuICAgIFRha2VzIHRoZSBvcGVyYXRvciBhbmQgdmFsdWUgZnJvbSBhIHN0cmluZywgaWUgXCIrPTVcIiwgYW5kIGFwcGxpZXNcbiAgICB0byB0aGUgY3VycmVudCB2YWx1ZSB0byByZXNvbHZlIGEgbmV3IHRhcmdldC5cbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcbiAgICBAcGFyYW0gW3N0cmluZ106IFJlbGF0aXZlIHZhbHVlXG4gICAgQHJldHVybiBbbnVtYmVyXTogTmV3IHZhbHVlXG4qL1xudmFyIHJlbGF0aXZlVmFsdWUgPSBleHBvcnRzLnJlbGF0aXZlVmFsdWUgPSBmdW5jdGlvbiAoY3VycmVudCwgcmVsYXRpdmUpIHtcbiAgICB2YXIgbmV3VmFsdWUgPSBjdXJyZW50O1xuICAgIHZhciBlcXVhdGlvbiA9IHJlbGF0aXZlLnNwbGl0KCc9Jyk7XG4gICAgdmFyIG9wZXJhdG9yID0gZXF1YXRpb25bMF07XG5cbiAgICB2YXIgX2ZpbmRWYWx1ZUFuZFVuaXQgPSAoMCwgX3V0aWxzLmZpbmRWYWx1ZUFuZFVuaXQpKGVxdWF0aW9uWzFdKTtcblxuICAgIHZhciB1bml0ID0gX2ZpbmRWYWx1ZUFuZFVuaXQudW5pdDtcbiAgICB2YXIgdmFsdWUgPSBfZmluZFZhbHVlQW5kVW5pdC52YWx1ZTtcblxuXG4gICAgdmFsdWUgPSBwYXJzZUZsb2F0KHZhbHVlKTtcblxuICAgIHN3aXRjaCAob3BlcmF0b3IpIHtcbiAgICAgICAgY2FzZSAnKyc6XG4gICAgICAgICAgICBuZXdWYWx1ZSArPSB2YWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICctJzpcbiAgICAgICAgICAgIG5ld1ZhbHVlIC09IHZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJyonOlxuICAgICAgICAgICAgbmV3VmFsdWUgKj0gdmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnLyc6XG4gICAgICAgICAgICBuZXdWYWx1ZSAvPSB2YWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmICh1bml0KSB7XG4gICAgICAgIG5ld1ZhbHVlICs9IHVuaXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld1ZhbHVlO1xufTtcblxuLypcbiAgICBSZXN0cmljdCB2YWx1ZSB0byByYW5nZVxuICAgIFxuICAgIFJldHVybiB2YWx1ZSB3aXRoaW4gdGhlIHJhbmdlIG9mIGxvd2VyTGltaXQgYW5kIHVwcGVyTGltaXRcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIHRvIGtlZXAgd2l0aGluIHJhbmdlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBvZiByYW5nZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXQgb2YgcmFuZ2VcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBhcyBsaW1pdGVkIHdpdGhpbiBnaXZlbiByYW5nZVxuKi9cbnZhciByZXN0cmljdCA9IGV4cG9ydHMucmVzdHJpY3QgPSBmdW5jdGlvbiAodmFsdWUsIG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIE1hdGgubWF4KE1hdGgubWluKHZhbHVlLCBtYXgpLCBtaW4pO1xufTtcblxuLypcbiAgICBGcmFtZXJhdGUtaW5kZXBlbmRlbnQgc21vb3RoaW5nXG5cbiAgICBAcGFyYW0gW251bWJlcl06IE5ldyB2YWx1ZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogT2xkIHZhbHVlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvblxuICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBTbW9vdGhpbmcgKDAgaXMgbm9uZSlcbiovXG52YXIgc21vb3RoID0gZXhwb3J0cy5zbW9vdGggPSBmdW5jdGlvbiAobmV3VmFsdWUsIG9sZFZhbHVlLCBkdXJhdGlvbikge1xuICAgIHZhciBzbW9vdGhpbmcgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDMgfHwgYXJndW1lbnRzWzNdID09PSB1bmRlZmluZWQgPyAwIDogYXJndW1lbnRzWzNdO1xuICAgIHJldHVybiAoMCwgX3V0aWxzLnRvRGVjaW1hbCkob2xkVmFsdWUgKyBkdXJhdGlvbiAqIChuZXdWYWx1ZSAtIG9sZFZhbHVlKSAvIE1hdGgubWF4KHNtb290aGluZywgZHVyYXRpb24pKTtcbn07XG5cbi8qXG4gICAgQ29udmVydCB4IHBlciBzZWNvbmQgdG8gcGVyIGZyYW1lIHZlbG9jaXR5IGJhc2VkIG9uIGZwc1xuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVW5pdCBwZXIgc2Vjb25kXG4gICAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvbiBpbiBtc1xuKi9cbnZhciBzcGVlZFBlckZyYW1lID0gZXhwb3J0cy5zcGVlZFBlckZyYW1lID0gZnVuY3Rpb24gKHhwcywgZnJhbWVEdXJhdGlvbikge1xuICAgIHJldHVybiAoMCwgX3V0aWxzLmlzTnVtKSh4cHMpID8geHBzIC8gKDEwMDAgLyBmcmFtZUR1cmF0aW9uKSA6IDA7XG59O1xuXG4vKlxuICAgIENvbnZlcnQgdmVsb2NpdHkgaW50byB2ZWxpY2l0eSBwZXIgc2Vjb25kXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBVbml0IHBlciBmcmFtZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb24gaW4gbXNcbiovXG52YXIgc3BlZWRQZXJTZWNvbmQgPSBleHBvcnRzLnNwZWVkUGVyU2Vjb25kID0gZnVuY3Rpb24gKHZlbG9jaXR5LCBmcmFtZUR1cmF0aW9uKSB7XG4gICAgcmV0dXJuIHZlbG9jaXR5ICogKDEwMDAgLyBmcmFtZUR1cmF0aW9uKTtcbn07XG5cbi8qXG4gICAgQ3JlYXRlIHN0ZXBwZWQgdmVyc2lvbiBvZiAwLTEgcHJvZ3Jlc3NcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcbiAgICBAcGFyYW0gW2ludF06IE51bWJlciBvZiBzdGVwc1xuICAgIEByZXR1cm4gW251bWJlcl06IFN0ZXBwZWQgdmFsdWVcbiovXG52YXIgc3RlcFByb2dyZXNzID0gZXhwb3J0cy5zdGVwUHJvZ3Jlc3MgPSBmdW5jdGlvbiAocHJvZ3Jlc3MsIHN0ZXBzKSB7XG4gICAgdmFyIHNlZ21lbnQgPSAxIC8gKHN0ZXBzIC0gMSk7XG4gICAgdmFyIHRhcmdldCA9IDEgLSAxIC8gc3RlcHM7XG4gICAgdmFyIHByb2dyZXNzT2ZUYXJnZXQgPSBNYXRoLm1pbihwcm9ncmVzcyAvIHRhcmdldCwgMSk7XG5cbiAgICByZXR1cm4gTWF0aC5mbG9vcihwcm9ncmVzc09mVGFyZ2V0IC8gc2VnbWVudCkgKiBzZWdtZW50O1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJtTXZZMkZzWXk1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenRCUVVGQk96dEJRVTlCTEVsQlFVMHNZVUZCWVR0QlFVTm1MRTlCUVVjc1EwRkVXVHRCUVVWbUxFOUJRVWNzUTBGR1dUdEJRVWRtTEU5QlFVYzdRVUZJV1N4RFFVRnVRanM3UVVGTlFTeEpRVUZOTEdGQlFXRXNWVUZCUXl4RFFVRkVMRVZCUVVrc1EwRkJTanRCUVVGQkxGZEJRVlVzUzBGQlN5eEhRVUZNTEVOQlFWTXNTVUZCU1N4RFFVRmlMRU5CUVZZN1FVRkJRU3hEUVVGdVFqczdPenM3T3pzN096czdPMEZCV1U4c1NVRkJUU3gzUWtGQlVTeFZRVUZETEVOQlFVUTdRVUZCUVN4UlFVRkpMRU5CUVVvc2VVUkJRVkVzVlVGQlVqdEJRVUZCTEZkQlFYVkNMR2xDUVVGcFFpeExRVUZMTEV0QlFVd3NRMEZCVnl4RlFVRkZMRU5CUVVZc1IwRkJUU3hGUVVGRkxFTkJRVzVDTEVWQlFYTkNMRVZCUVVVc1EwRkJSaXhIUVVGTkxFVkJRVVVzUTBGQk9VSXNRMEZCYWtJc1EwRkJka0k3UVVGQlFTeERRVUZrT3pzN096czdPenRCUVZGQkxFbEJRVTBzT0VOQlFXMUNMRlZCUVVNc1QwRkJSRHRCUVVGQkxGZEJRV0VzVlVGQlZTeExRVUZMTEVWQlFXWXNSMEZCYjBJc1IwRkJha003UVVGQlFTeERRVUY2UWpzN096czdPenM3T3pzN096czdPenM3T3pzN1FVRnZRa0VzU1VGQlRTd3dRa0ZCVXl4VlFVRkRMRU5CUVVRc1JVRkJTU3hEUVVGS0xFVkJRVThzVVVGQlVEdEJRVUZCTEZkQlFXOUNMRWxCUVVzc1EwRkJReXhKUVVGSkxFTkJRVXdzU1VGQlZTeFJRVUZ1UXp0QlFVRkJMRU5CUVdZN096czdPenM3T3pzN08wRkJWMEVzU1VGQlRTdzRRa0ZCVnl4VlFVRkRMRU5CUVVRc1JVRkJkVUk3UVVGQlFTeFJRVUZ1UWl4RFFVRnRRaXg1UkVGQlppeFZRVUZsT3pzN1FVRkZNME1zVVVGQlNTeHJRa0ZCVFN4RFFVRk9MRU5CUVVvc1JVRkJZenRCUVVOV0xHVkJRVThzVjBGQlZ5eERRVUZZTEVWQlFXTXNRMEZCWkN4RFFVRlFPenM3UVVGSFNDeExRVXBFTEUxQlNVODdRVUZEU0N4blFrRkJUU3hUUVVGVExGZEJRVmNzUlVGQlJTeERRVUZpTEVWQlFXZENMRVZCUVVVc1EwRkJiRUlzUTBGQlpqdEJRVU5CTEdkQ1FVRk5MRk5CUVZNc1YwRkJWeXhGUVVGRkxFTkJRV0lzUlVGQlowSXNSVUZCUlN4RFFVRnNRaXhEUVVGbU8wRkJRMEVzWjBKQlFVMHNVMEZCVlN4clFrRkJUU3hGUVVGRkxFTkJRVklzUTBGQlJDeEhRVUZsTEZkQlFWY3NSVUZCUlN4RFFVRmlMRVZCUVdkQ0xFVkJRVVVzUTBGQmJFSXNRMEZCWml4SFFVRnpReXhEUVVGeVJEczdRVUZGUVN4dFFrRkJUeXhMUVVGTExFbEJRVXdzUTBGQlZTeFRRVUZETEUxQlFVUXNSVUZCVnl4RFFVRllMR0ZCUVdsQ0xFMUJRV3BDTEVWQlFUSkNMRU5CUVROQ0xHRkJRV2xETEUxQlFXcERMRVZCUVRKRExFTkJRVE5ETEVOQlFWWXNRMEZCVUR0QlFVTklPMEZCUTBvc1EwRmlUVHM3T3pzN096czdPenM3TzBGQmVVSkJMRWxCUVUwc2MwSkJRVThzVlVGQlF5eFJRVUZFTEVWQlFWY3NTVUZCV0N4RlFVRnBRaXhGUVVGcVFpeEZRVUZ4UWl4SlFVRnlRaXhGUVVFNFFqdEJRVU01UXl4UlFVRk5MR3RDUVVGclFpeFRRVUZUTEZGQlFWUXNSVUZCYlVJc1EwRkJia0lzUlVGQmMwSXNRMEZCZEVJc1EwRkJlRUk3UVVGRFFTeFJRVUZOTEdkQ1FVRm5RaXhMUVVGTExHVkJRVXdzUTBGQmRFSTdPMEZCUlVFc1YwRkJUeXh4UWtGQmNVSXNZVUZCY2tJc1JVRkJiME1zU1VGQmNFTXNSVUZCTUVNc1JVRkJNVU1zUTBGQlVEdEJRVU5JTEVOQlRFMDdPenM3T3pzN096czdPMEZCWjBKQkxFbEJRVTBzYTBOQlFXRXNWVUZCUXl4RFFVRkVMRVZCUVVrc1EwRkJTanRCUVVGQkxGZEJRVlVzUzBGQlN5eEpRVUZNTEVOQlFWY3NTVUZCU1N4RFFVRk1MRWRCUVZjc1NVRkJTU3hEUVVGNlFpeERRVUZXTzBGQlFVRXNRMEZCYmtJN096czdPenM3T3pzN096czdRVUZoUVN4SlFVRk5MSE5FUVVGMVFpeFZRVUZETEZGQlFVUXNSVUZCVnl4SlFVRllMRVZCUVdsQ0xFVkJRV3BDTzBGQlFVRXNWMEZCZVVJc1EwRkJSU3hSUVVGR0xFZEJRV0VzU1VGQlpDeEhRVUYxUWl4WFFVRlhMRVZCUVd4RExFZEJRWGRETEVsQlFXaEZPMEZCUVVFc1EwRkJOMEk3T3pzN096czdPenM3T3pzN08wRkJZMEVzU1VGQlRTeHpSRUZCZFVJc1ZVRkJReXhMUVVGRUxFVkJRVkVzU1VGQlVpeEZRVUZqTEVWQlFXUTdRVUZCUVN4WFFVRnhRaXhEUVVGRExGRkJRVkVzU1VGQlZDeExRVUZyUWl4TFFVRkxMRWxCUVhaQ0xFTkJRWEpDTzBGQlFVRXNRMEZCTjBJN096czdPenM3T3pzN08wRkJWMEVzU1VGQlRTd3dRa0ZCVXl4VlFVRkRMRU5CUVVRc1JVRkJTU3hEUVVGS0xFVkJRVlU3UVVGRE5VSXNVVUZCVFN4VFFVRlRMRVZCUVdZN08wRkJSVUVzVTBGQlN5eEpRVUZKTEVkQlFWUXNTVUZCWjBJc1EwRkJhRUlzUlVGQmJVSTdRVUZEWml4WlFVRkpMRVZCUVVVc1kwRkJSaXhEUVVGcFFpeEhRVUZxUWl4RFFVRktMRVZCUVRKQ08wRkJRM1pDTEcxQ1FVRlBMRWRCUVZBc1NVRkJZeXgzUWtGQldTeERRVUZhTEVWQlFXVXNSMEZCWml4SlFVRnpRaXhGUVVGRkxFZEJRVVlzU1VGQlV5eEZRVUZGTEVkQlFVWXNRMEZCTDBJc1IwRkJkME1zUTBGQmRFUTdRVUZEU0R0QlFVTktPenRCUVVWRUxGZEJRVThzVFVGQlVEdEJRVU5JTEVOQlZrMDdPenM3T3pzN096czdRVUZ2UWtFc1NVRkJUU3huUlVGQk5FSXNWVUZCUXl4TlFVRkVMRVZCUVZNc1MwRkJWQ3hGUVVGblFpeFJRVUZvUWl4RlFVRTJRanRCUVVOc1JTeFpRVUZSTEdsQ1FVRnBRaXhMUVVGcVFpeERRVUZTT3p0QlFVVkJMRmRCUVU4N1FVRkRTQ3hYUVVGSExGZEJRVmNzUzBGQlN5eEhRVUZNTEVOQlFWTXNTMEZCVkN4RFFVRllMRWRCUVRaQ0xFOUJRVThzUTBGRWNFTTdRVUZGU0N4WFFVRkhMRmRCUVZjc1MwRkJTeXhIUVVGTUxFTkJRVk1zUzBGQlZDeERRVUZZTEVkQlFUWkNMRTlCUVU4N1FVRkdjRU1zUzBGQlVEdEJRVWxJTEVOQlVFMDdPenM3T3pzN08wRkJaVUVzU1VGQlRTdzRRMEZCYlVJc1ZVRkJReXhQUVVGRU8wRkJRVUVzVjBGQllTeFZRVUZWTEVkQlFWWXNSMEZCWjBJc1MwRkJTeXhGUVVGc1F6dEJRVUZCTEVOQlFYcENPenM3T3pzN096czdRVUZUUVN4SlFVRk5MREJDUVVGVE8wRkJRVUVzVVVGQlF5eEhRVUZFTEhsRVFVRlBMRU5CUVZBN1FVRkJRU3hSUVVGVkxFZEJRVllzZVVSQlFXZENMRU5CUVdoQ08wRkJRVUVzVjBGQmMwSXNTMEZCU3l4TlFVRk1MRTFCUVdsQ0xFMUJRVTBzUjBGQmRrSXNTVUZCT0VJc1IwRkJjRVE3UVVGQlFTeERRVUZtT3pzN096czdPenM3T3pzN1FVRlpRU3hKUVVGTkxIZERRVUZuUWl4VlFVRkRMRTlCUVVRc1JVRkJWU3hSUVVGV0xFVkJRWFZDTzBGQlEyaEVMRkZCUVVrc1YwRkJWeXhQUVVGbU8wRkJRMEVzVVVGQlRTeFhRVUZYTEZOQlFWTXNTMEZCVkN4RFFVRmxMRWRCUVdZc1EwRkJha0k3UVVGRFFTeFJRVUZOTEZkQlFWY3NVMEZCVXl4RFFVRlVMRU5CUVdwQ096dEJRVWhuUkN3MFFrRkpNVUlzTmtKQlFXbENMRk5CUVZNc1EwRkJWQ3hEUVVGcVFpeERRVW93UWpzN1FVRkJRU3hSUVVreFF5eEpRVW93UXl4eFFrRkpNVU1zU1VGS01FTTdRVUZCUVN4UlFVbHdReXhMUVVwdlF5eHhRa0ZKY0VNc1MwRktiME03T3p0QlFVMW9SQ3haUVVGUkxGZEJRVmNzUzBGQldDeERRVUZTT3p0QlFVVkJMRmxCUVZFc1VVRkJVanRCUVVOQkxHRkJRVXNzUjBGQlREdEJRVU5KTEhkQ1FVRlpMRXRCUVZvN1FVRkRRVHRCUVVOS0xHRkJRVXNzUjBGQlREdEJRVU5KTEhkQ1FVRlpMRXRCUVZvN1FVRkRRVHRCUVVOS0xHRkJRVXNzUjBGQlREdEJRVU5KTEhkQ1FVRlpMRXRCUVZvN1FVRkRRVHRCUVVOS0xHRkJRVXNzUjBGQlREdEJRVU5KTEhkQ1FVRlpMRXRCUVZvN1FVRkRRVHRCUVZwS096dEJRV1ZCTEZGQlFVa3NTVUZCU2l4RlFVRlZPMEZCUTA0c2IwSkJRVmtzU1VGQldqdEJRVU5JT3p0QlFVVkVMRmRCUVU4c1VVRkJVRHRCUVVOSUxFTkJOVUpOT3pzN096czdPenM3T3pzN1FVRjNRMEVzU1VGQlRTdzRRa0ZCVnl4VlFVRkRMRXRCUVVRc1JVRkJVU3hIUVVGU0xFVkJRV0VzUjBGQllqdEJRVUZCTEZkQlFYRkNMRXRCUVVzc1IwRkJUQ3hEUVVGVExFdEJRVXNzUjBGQlRDeERRVUZUTEV0QlFWUXNSVUZCWjBJc1IwRkJhRUlzUTBGQlZDeEZRVUVyUWl4SFFVRXZRaXhEUVVGeVFqdEJRVUZCTEVOQlFXcENPenM3T3pzN096czdPMEZCVlVFc1NVRkJUU3d3UWtGQlV5eFZRVUZETEZGQlFVUXNSVUZCVnl4UlFVRllMRVZCUVhGQ0xGRkJRWEpDTzBGQlFVRXNVVUZCSzBJc1UwRkJMMElzZVVSQlFUSkRMRU5CUVRORE8wRkJRVUVzVjBGQmFVUXNjMEpCUVZVc1YwRkJXU3haUVVGWkxGZEJRVmNzVVVGQmRrSXNTVUZCYlVNc1MwRkJTeXhIUVVGTUxFTkJRVk1zVTBGQlZDeEZRVUZ2UWl4UlFVRndRaXhEUVVGNlJDeERRVUZxUkR0QlFVRkJMRU5CUVdZN096czdPenM3TzBGQlVVRXNTVUZCVFN4M1EwRkJaMElzVlVGQlF5eEhRVUZFTEVWQlFVMHNZVUZCVGp0QlFVRkJMRmRCUVhsQ0xHdENRVUZOTEVkQlFVNHNRMEZCUkN4SFFVRmxMRTlCUVU4c1QwRkJUeXhoUVVGa0xFTkJRV1lzUjBGQk9FTXNRMEZCZEVVN1FVRkJRU3hEUVVGMFFqczdPenM3T3pzN1FVRlJRU3hKUVVGTkxEQkRRVUZwUWl4VlFVRkRMRkZCUVVRc1JVRkJWeXhoUVVGWU8wRkJRVUVzVjBGQk5rSXNXVUZCV1N4UFFVRlBMR0ZCUVc1Q0xFTkJRVGRDTzBGQlFVRXNRMEZCZGtJN096czdPenM3T3p0QlFWTkJMRWxCUVUwc2MwTkJRV1VzVlVGQlF5eFJRVUZFTEVWQlFWY3NTMEZCV0N4RlFVRnhRanRCUVVNM1F5eFJRVUZOTEZWQlFWVXNTMEZCU3l4UlFVRlJMRU5CUVdJc1EwRkJhRUk3UVVGRFFTeFJRVUZOTEZOQlFWTXNTVUZCU3l4SlFVRkpMRXRCUVhoQ08wRkJRMEVzVVVGQlRTeHRRa0ZCYlVJc1MwRkJTeXhIUVVGTUxFTkJRVk1zVjBGQlZ5eE5RVUZ3UWl4RlFVRTBRaXhEUVVFMVFpeERRVUY2UWpzN1FVRkZRU3hYUVVGUExFdEJRVXNzUzBGQlRDeERRVUZYTEcxQ1FVRnRRaXhQUVVFNVFpeEpRVUY1UXl4UFFVRm9SRHRCUVVOSUxFTkJUazBpTENKbWFXeGxJam9pWTJGc1l5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmFuWmhibVJsY21SdlpYTXZRMjlrWlM5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2UxeHVJQ0FnSUdoaGMxQnliM0JsY25SNUxGeHVJQ0FnSUdselRuVnRMRnh1SUNBZ0lHWnBibVJXWVd4MVpVRnVaRlZ1YVhRc1hHNGdJQ0FnZEc5RVpXTnBiV0ZzWEc1OUlHWnliMjBnSnk0dmRYUnBiSE1uTzF4dVhHNWpiMjV6ZENCYVJWSlBYMUJQU1U1VUlEMGdlMXh1SUNBZ0lIZzZJREFzWEc0Z0lDQWdlVG9nTUN4Y2JpQWdJQ0I2T2lBd1hHNTlPMXh1WEc1amIyNXpkQ0JrYVhOMFlXNWpaVEZFSUQwZ0tHRXNJR0lwSUQwK0lFMWhkR2d1WVdKektHRWdMU0JpS1R0Y2JseHVMeXBjYmlBZ0lDQkJibWRzWlNCaVpYUjNaV1Z1SUhCdmFXNTBjMXh1SUNBZ0lGeHVJQ0FnSUZSeVlXNXpiR0YwWlhNZ2RHaGxJR2g1Y0c5MGFHVjBhV05oYkNCc2FXNWxJSE52SUhSb1lYUWdkR2hsSUNkbWNtOXRKeUJqYjI5eVpHbHVZWFJsYzF4dUlDQWdJR0Z5WlNCaGRDQXdMREJjYmlBZ0lDQmNiaUFnSUNCQWNHRnlZVzBnVzI5aWFtVmpkRjA2SUZnZ1lXNWtJRmtnWTI5dmNtUnBibUYwWlhNZ2IyWWdabkp2YlNCd2IybHVkRnh1SUNBZ0lFQndZWEpoYlNCYmIySnFaV04wWFRvZ1dDQmhibVFnV1NCamIzSmthVzVoZEdWeklHOW1JSFJ2SUhCdmFXNTBYRzRnSUNBZ1FISmxkSFZ5YmlCYmNtRmthV0Z1WFRvZ1FXNW5iR1VnWW1WMGQyVmxiaUIwYUdVZ2RIZHZJSEJ2YVc1MGN5QnBiaUJ5WVdScFlXNXpYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR0Z1WjJ4bElEMGdLR0VzSUdJZ1BTQmFSVkpQWDFCUFNVNVVLU0E5UGlCeVlXUnBZVzV6Vkc5RVpXZHlaV1Z6S0UxaGRHZ3VZWFJoYmpJb1lTNTRJQzBnWWk1NExDQmhMbmtnTFNCaUxua3BLVHRjYmx4dUx5cGNiaUFnSUNCRGIyNTJaWEowSUdSbFozSmxaWE1nZEc4Z2NtRmthV0Z1YzF4dUlDQWdJRnh1SUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1ZtRnNkV1VnYVc0Z1pHVm5jbVZsYzF4dUlDQWdJRUJ5WlhSMWNtNGdXMjUxYldKbGNsMDZJRlpoYkhWbElHbHVJSEpoWkdsaGJuTmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdaR1ZuY21WbGMxUnZVbUZrYVdGdWN5QTlJQ2hrWldkeVpXVnpLU0E5UGlCa1pXZHlaV1Z6SUNvZ1RXRjBhQzVRU1NBdklERTRNRHRjYmx4dUx5cGNiaUFnSUNCRWFXeGhkR1ZjYmlBZ0lDQmNiaUFnSUNCRGFHRnVaMlVnZEdobElIQnliMmR5WlhOemFXOXVJR0psZEhkbFpXNGdZU0JoYm1RZ1lpQmhZMk52Y21ScGJtY2dkRzhnWkdsc1lYUnBiMjR1WEc0Z0lDQWdYRzRnSUNBZ1UyOGdaR2xzWVhScGIyNGdQU0F3TGpVZ2QyOTFiR1FnWTJoaGJtZGxYRzRnSUNBZ1hHNGdJQ0FnWVNBdExTMHRMUzB0TFMwZ1lseHVJQ0FnSUZ4dUlDQWdJSFJ2WEc0Z0lDQWdYRzRnSUNBZ1lTQXRMUzB0SUdKY2JpQWdJQ0JjYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklGQnlaWFpwYjNWeklIWmhiSFZsWEc0Z0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQkRkWEp5Wlc1MElIWmhiSFZsWEc0Z0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQkVhV3hoZEdVZ2NISnZaM0psYzNNZ1lua2dlRnh1SUNBZ0lFQnlaWFIxY200Z1cyNTFiV0psY2wwNklGQnlaWFpwYjNWeklIWmhiSFZsSUhCc2RYTWdkR2hsSUdScGJHRjBaV1FnWkdsbVptVnlaVzVqWlZ4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCa2FXeGhkR1VnUFNBb1lTd2dZaXdnWkdsc1lYUnBiMjRwSUQwK0lHRWdLeUFvS0dJZ0xTQmhLU0FxSUdScGJHRjBhVzl1S1R0Y2JseHVMeXBjYmlBZ0lDQkVhWE4wWVc1alpWeHVJQ0FnSUZ4dUlDQWdJRkpsZEhWeWJuTWdkR2hsSUdScGMzUmhibU5sSUdKbGRIZGxaVzRnZEhkdklHNGdaR2x0Wlc1emFXOXVZV3dnY0c5cGJuUnpMbHh1SUNBZ0lGeHVJQ0FnSUVCd1lYSmhiU0JiYjJKcVpXTjBMMjUxYldKbGNsMDZJSGdnWVc1a0lIa2diM0lnYW5WemRDQjRJRzltSUhCdmFXNTBJRUZjYmlBZ0lDQkFjR0Z5WVcwZ1cyOWlhbVZqZEM5dWRXMWlaWEpkT2lBb2IzQjBhVzl1WVd3cE9pQjRJR0Z1WkNCNUlHOXlJR3AxYzNRZ2VDQnZaaUJ3YjJsdWRDQkNYRzRnSUNBZ1FISmxkSFZ5YmlCYmJuVnRZbVZ5WFRvZ1ZHaGxJR1JwYzNSaGJtTmxJR0psZEhkbFpXNGdkR2hsSUhSM2J5QndiMmx1ZEhOY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ1pHbHpkR0Z1WTJVZ1BTQW9ZU3dnWWlBOUlGcEZVazlmVUU5SlRsUXBJRDArSUh0Y2JpQWdJQ0F2THlBeFJDQmthVzFsYm5OcGIyNXpYRzRnSUNBZ2FXWWdLR2x6VG5WdEtHRXBLU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJrYVhOMFlXNWpaVEZFS0dFc0lHSXBPMXh1WEc0Z0lDQWdMeThnVFhWc2RHa3RaR2x0Wlc1emFXOXVZV3hjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCNFJHVnNkR0VnUFNCa2FYTjBZVzVqWlRGRUtHRXVlQ3dnWWk1NEtUdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2VVUmxiSFJoSUQwZ1pHbHpkR0Z1WTJVeFJDaGhMbmtzSUdJdWVTazdYRzRnSUNBZ0lDQWdJR052Ym5OMElIcEVaV3gwWVNBOUlDaHBjMDUxYlNoaExub3BLU0EvSUdScGMzUmhibU5sTVVRb1lTNTZMQ0JpTG5vcElEb2dNRHRjYmx4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnVFdGMGFDNXpjWEowS0NoNFJHVnNkR0VnS2lvZ01pa2dLeUFvZVVSbGJIUmhJQ29xSURJcElDc2dLSHBFWld4MFlTQXFLaUF5S1NrN1hHNGdJQ0FnZlZ4dWZUdGNibHh1THlwY2JpQWdJQ0JGWVhObElIWmhiSFZsSUhkcGRHaHBiaUJ5WVc1blpXUWdjR0Z5WVcxbGRHVnljMXh1SUNBZ0lGeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVUhKdlozSmxjM01nWW1WMGQyVmxiaUF3SUdGdVpDQXhYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCV1lXeDFaU0J2WmlBd0lIQnliMmR5WlhOelhHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJXWVd4MVpTQnZaaUF4SUhCeWIyZHlaWE56WEc0Z0lDQWdRSEJoY21GdElGdHpkSEpwYm1jZ2ZId2dablZ1WTNScGIyNWRPaUJPWVcxbElHOW1JSEJ5WlhObGRDQmxZWE5wYm1kY2JpQWdJQ0FnSUNBZ2RHOGdkWE5sSUc5eUlHZGxibVZ5WVhSbFpDQmxZWE5wYm1jZ1puVnVZM1JwYjI1Y2JpQWdJQ0JBY21WMGRYSnVJRnR1ZFcxaVpYSmRPaUJXWVd4MVpTQnZaaUJsWVhObFpDQndjbTluY21WemN5QnBiaUJ5WVc1blpWeHVLaThnWEc1bGVIQnZjblFnWTI5dWMzUWdaV0Z6WlNBOUlDaHdjbTluY21WemN5d2dabkp2YlN3Z2RHOHNJR1ZoYzJVcElEMCtJSHRjYmlBZ0lDQmpiMjV6ZENCd2NtOW5jbVZ6YzB4cGJXbDBaV1FnUFNCeVpYTjBjbWxqZENod2NtOW5jbVZ6Y3l3Z01Dd2dNU2s3WEc0Z0lDQWdZMjl1YzNRZ1pXRnpaV1JRY205bmNtVnpjeUE5SUdWaGMyVW9jSEp2WjNKbGMzTk1hVzFwZEdWa0tUdGNibHh1SUNBZ0lISmxkSFZ5YmlCblpYUldZV3gxWlVaeWIyMVFjbTluY21WemN5aGxZWE5sWkZCeWIyZHlaWE56TENCbWNtOXRMQ0IwYnlrN1hHNTlPMXh1SUZ4dUx5cGNiaUFnSUNCSWVYQnZkR1Z1ZFhObFhHNGdJQ0FnWEc0Z0lDQWdVbVYwZFhKdWN5QjBhR1VnYUhsd2IzUmxiblZ6WlN3Z2MybGtaU0JETENCbmFYWmxiaUIwYUdVZ2JHVnVaM1JvY3lCdlppQnphV1JsY3lCQklHRnVaQ0JDTGx4dUlDQWdJRnh1SUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1RHVnVaM1JvSUc5bUlFRmNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUV4bGJtZDBhQ0J2WmlCQ1hHNGdJQ0FnUUhKbGRIVnliaUJiYm5WdFltVnlYVG9nVEdWdVozUm9JRzltSUVOY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2FIbHdiM1JsYm5WelpTQTlJQ2hoTENCaUtTQTlQaUJOWVhSb0xuTnhjblFvS0dFZ0tpQmhLU0FySUNoaUlDb2dZaWtwTzF4dVhHNHZLbHh1SUNBZ0lGWmhiSFZsSUdsdUlISmhibWRsSUdaeWIyMGdjSEp2WjNKbGMzTmNiaUFnSUNCY2JpQWdJQ0JIYVhabGJpQmhJR3h2ZDJWeUlHeHBiV2wwSUdGdVpDQmhiaUIxY0hCbGNpQnNhVzFwZEN3Z2QyVWdjbVYwZFhKdUlIUm9aU0IyWVd4MVpTQjNhWFJvYVc1Y2JpQWdJQ0IwYUdGMElISmhibWRsSUdGeklHVjRjSEpsYzNObFpDQmllU0J3Y205bmNtVnpjeUFvWVNCdWRXMWlaWElnWm5KdmJTQXdMVEVwWEc0Z0lDQWdYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCVWFHVWdjSEp2WjNKbGMzTWdZbVYwZDJWbGJpQnNiM2RsY2lCaGJtUWdkWEJ3WlhJZ2JHbHRhWFJ6SUdWNGNISmxjM05sWkNBd0xURmNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUV4dmQyVnlJR3hwYldsMElHOW1JSEpoYm1kbFhHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJWY0hCbGNpQnNhVzFwZENCdlppQnlZVzVuWlZ4dUlDQWdJRUJ5WlhSMWNtNGdXMjUxYldKbGNsMDZJRlpoYkhWbElHRnpJR05oYkdOMWJHRjBaV1FnWm5KdmJTQndjbTluY21WemN5QjNhWFJvYVc0Z2NtRnVaMlVnS0c1dmRDQnNhVzFwZEdWa0lIZHBkR2hwYmlCeVlXNW5aU2xjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnWjJWMFZtRnNkV1ZHY205dFVISnZaM0psYzNNZ1BTQW9jSEp2WjNKbGMzTXNJR1p5YjIwc0lIUnZLU0E5UGlBb0xTQndjbTluY21WemN5QXFJR1p5YjIwcElDc2dLSEJ5YjJkeVpYTnpJQ29nZEc4cElDc2dabkp2YlR0Y2JseHVMeXBjYmlBZ0lDQlFjbTluY21WemN5QjNhWFJvYVc0Z1oybDJaVzRnY21GdVoyVmNiaUFnSUNCY2JpQWdJQ0JIYVhabGJpQmhJR3h2ZDJWeUlHeHBiV2wwSUdGdVpDQmhiaUIxY0hCbGNpQnNhVzFwZEN3Z2QyVWdjbVYwZFhKdUlIUm9aU0J3Y205bmNtVnpjMXh1SUNBZ0lDaGxlSEJ5WlhOelpXUWdZWE1nWVNCdWRXMWlaWElnTUMweEtTQnlaWEJ5WlhObGJuUmxaQ0JpZVNCMGFHVWdaMmwyWlc0Z2RtRnNkV1VzSUdGdVpGeHVJQ0FnSUd4cGJXbDBJSFJvWVhRZ2NISnZaM0psYzNNZ2RHOGdkMmwwYUdsdUlEQXRNUzVjYmlBZ0lDQmNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZaaGJIVmxJSFJ2SUdacGJtUWdjSEp2WjNKbGMzTWdkMmwwYUdsdUlHZHBkbVZ1SUhKaGJtZGxYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCTWIzZGxjaUJzYVcxcGRDQmNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZWd2NHVnlJR3hwYldsMFhHNGdJQ0FnUUhKbGRIVnliaUJiYm5WdFltVnlYVG9nVUhKdlozSmxjM01nYjJZZ2RtRnNkV1VnZDJsMGFHbHVJSEpoYm1kbElHRnpJR1Y0Y0hKbGMzTmxaQ0F3TFRGY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ1oyVjBVSEp2WjNKbGMzTkdjbTl0Vm1Gc2RXVWdQU0FvZG1Gc2RXVXNJR1p5YjIwc0lIUnZLU0E5UGlBb2RtRnNkV1VnTFNCbWNtOXRLU0F2SUNoMGJ5QXRJR1p5YjIwcE8xeHVYRzR2S2x4dUlDQWdJRTltWm5ObGRDQmlaWFIzWldWdUlIUjNieUJ2WW1wbFkzUnpJRzltSUc1MWJXSmxjbk5jYmx4dUlDQWdJRWxtSUhCeWIzQmxjblI1SUdseklHWnZkVzVrSUdsdUlHSWdibTkwSUhCeVpYTmxiblFnYVc0Z1lTd2dhWFFnZDJsc2JDQnlaWFIxY200Z1lEQmdJR1p2Y2lCMGFHRjBJSEJ5YjNBdVhHNGdJQ0FnWEc0Z0lDQWdRSEJoY21GdElGdFFiMmx1ZEYwNklFWnBjbk4wSUc5aWFtVmpkRnh1SUNBZ0lFQndZWEpoYlNCYlVHOXBiblJkT2lCVFpXTnZibVFnYjJKcVpXTjBYRzRnSUNBZ1FISmxkSFZ5YmlCYlQyWm1jMlYwWFRvZ1JHbHpkR0Z1WTJVZ2JXVjBjbWxqY3lCaVpYUjNaV1Z1SUhSM2J5QndiMmx1ZEhOY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2IyWm1jMlYwSUQwZ0tHRXNJR0lwSUQwK0lIdGNiaUFnSUNCamIyNXpkQ0J2Wm1aelpYUWdQU0I3ZlR0Y2JseHVJQ0FnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUJpS1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2hpTG1oaGMwOTNibEJ5YjNCbGNuUjVLR3RsZVNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUc5bVpuTmxkRnRyWlhsZElEMGdhR0Z6VUhKdmNHVnlkSGtvWVN3Z2EyVjVLU0EvSUdKYmEyVjVYU0F0SUdGYmEyVjVYU0E2SURBN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNCeVpYUjFjbTRnYjJabWMyVjBPMXh1ZlR0Y2JseHVMeXBjYmlBZ0lDQlFiMmx1ZENCbWNtOXRJR0Z1WjJ4bElHRnVaQ0JrYVhOMFlXNWpaVnh1SUNBZ0lGeHVJQ0FnSUVCd1lYSmhiU0JiYjJKcVpXTjBYVG9nTWtRZ2NHOXBiblFnYjJZZ2IzSnBaMmx1WEc0Z0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQkJibWRzWlNCbWNtOXRJRzl5YVdkcGJseHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nUkdsemRHRnVZMlVnWm5KdmJTQnZjbWxuYVc1Y2JpQWdJQ0JBY21WMGRYSnVJRnR2WW1wbFkzUmRPaUJEWVd4amRXeGhkR1ZrSURKRUlIQnZhVzUwWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUhCdmFXNTBSbkp2YlVGdVoyeGxRVzVrUkdsemRHRnVZMlVnUFNBb2IzSnBaMmx1TENCaGJtZHNaU3dnWkdsemRHRnVZMlVwSUQwK0lIdGNiaUFnSUNCaGJtZHNaU0E5SUdSbFozSmxaWE5VYjFKaFpHbGhibk1vWVc1bmJHVXBPMXh1WEc0Z0lDQWdjbVYwZFhKdUlIdGNiaUFnSUNBZ0lDQWdlRG9nWkdsemRHRnVZMlVnS2lCTllYUm9MbU52Y3loaGJtZHNaU2tnS3lCdmNtbG5hVzR1ZUN4Y2JpQWdJQ0FnSUNBZ2VUb2daR2x6ZEdGdVkyVWdLaUJOWVhSb0xuTnBiaWhoYm1kc1pTa2dLeUJ2Y21sbmFXNHVlVnh1SUNBZ0lIMDdYRzU5TzF4dVhHNHZLbHh1SUNBZ0lFTnZiblpsY25RZ2NtRmthV0Z1Y3lCMGJ5QmtaV2R5WldWelhHNGdJQ0FnWEc0Z0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQldZV3gxWlNCcGJpQnlZV1JwWVc1elhHNGdJQ0FnUUhKbGRIVnliaUJiYm5WdFltVnlYVG9nVm1Gc2RXVWdhVzRnWkdWbmNtVmxjMXh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0J5WVdScFlXNXpWRzlFWldkeVpXVnpJRDBnS0hKaFpHbGhibk1wSUQwK0lISmhaR2xoYm5NZ0tpQXhPREFnTHlCTllYUm9MbEJKTzF4dVhHNHZLbHh1SUNBZ0lGSmxkSFZ5YmlCeVlXNWtiMjBnYm5WdFltVnlJR0psZEhkbFpXNGdjbUZ1WjJWY2JpQWdJQ0JjYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwZ0tHOXdkR2x2Ym1Gc0tUb2dUM1YwY0hWMElHMXBibWx0ZFcxY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMGdLRzl3ZEdsdmJtRnNLVG9nVDNWMGNIVjBJRzFoZUdsdGRXMWNiaUFnSUNCQWNtVjBkWEp1SUZ0dWRXMWlaWEpkT2lCU1lXNWtiMjBnYm5WdFltVnlJSGRwZEdocGJpQnlZVzVuWlN3Z2IzSWdNQ0JoYm1RZ01TQnBaaUJ1YjI1bElIQnliM1pwWkdWa1hHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElISmhibVJ2YlNBOUlDaHRhVzRnUFNBd0xDQnRZWGdnUFNBeEtTQTlQaUJOWVhSb0xuSmhibVJ2YlNncElDb2dLRzFoZUNBdElHMXBiaWtnS3lCdGFXNDdYRzVjYmk4cVhHNGdJQ0FnUTJGc1kzVnNZWFJsSUhKbGJHRjBhWFpsSUhaaGJIVmxYRzRnSUNBZ1hHNGdJQ0FnVkdGclpYTWdkR2hsSUc5d1pYSmhkRzl5SUdGdVpDQjJZV3gxWlNCbWNtOXRJR0VnYzNSeWFXNW5MQ0JwWlNCY0lpczlOVndpTENCaGJtUWdZWEJ3YkdsbGMxeHVJQ0FnSUhSdklIUm9aU0JqZFhKeVpXNTBJSFpoYkhWbElIUnZJSEpsYzI5c2RtVWdZU0J1WlhjZ2RHRnlaMlYwTGx4dUlDQWdJRnh1SUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1EzVnljbVZ1ZENCMllXeDFaVnh1SUNBZ0lFQndZWEpoYlNCYmMzUnlhVzVuWFRvZ1VtVnNZWFJwZG1VZ2RtRnNkV1ZjYmlBZ0lDQkFjbVYwZFhKdUlGdHVkVzFpWlhKZE9pQk9aWGNnZG1Gc2RXVmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdjbVZzWVhScGRtVldZV3gxWlNBOUlDaGpkWEp5Wlc1MExDQnlaV3hoZEdsMlpTa2dQVDRnZTF4dUlDQWdJR3hsZENCdVpYZFdZV3gxWlNBOUlHTjFjbkpsYm5RN1hHNGdJQ0FnWTI5dWMzUWdaWEYxWVhScGIyNGdQU0J5Wld4aGRHbDJaUzV6Y0d4cGRDZ25QU2NwTzF4dUlDQWdJR052Ym5OMElHOXdaWEpoZEc5eUlEMGdaWEYxWVhScGIyNWJNRjA3WEc0Z0lDQWdiR1YwSUhzZ2RXNXBkQ3dnZG1Gc2RXVWdmU0E5SUdacGJtUldZV3gxWlVGdVpGVnVhWFFvWlhGMVlYUnBiMjViTVYwcE8xeHVYRzRnSUNBZ2RtRnNkV1VnUFNCd1lYSnpaVVpzYjJGMEtIWmhiSFZsS1R0Y2JseHVJQ0FnSUhOM2FYUmphQ0FvYjNCbGNtRjBiM0lwSUh0Y2JpQWdJQ0JqWVhObElDY3JKenBjYmlBZ0lDQWdJQ0FnYm1WM1ZtRnNkV1VnS3owZ2RtRnNkV1U3WEc0Z0lDQWdJQ0FnSUdKeVpXRnJPMXh1SUNBZ0lHTmhjMlVnSnkwbk9seHVJQ0FnSUNBZ0lDQnVaWGRXWVd4MVpTQXRQU0IyWVd4MVpUdGNiaUFnSUNBZ0lDQWdZbkpsWVdzN1hHNGdJQ0FnWTJGelpTQW5LaWM2WEc0Z0lDQWdJQ0FnSUc1bGQxWmhiSFZsSUNvOUlIWmhiSFZsTzF4dUlDQWdJQ0FnSUNCaWNtVmhhenRjYmlBZ0lDQmpZWE5sSUNjdkp6cGNiaUFnSUNBZ0lDQWdibVYzVm1Gc2RXVWdMejBnZG1Gc2RXVTdYRzRnSUNBZ0lDQWdJR0p5WldGck8xeHVJQ0FnSUgxY2JpQWdJQ0JjYmlBZ0lDQnBaaUFvZFc1cGRDa2dlMXh1SUNBZ0lDQWdJQ0J1WlhkV1lXeDFaU0FyUFNCMWJtbDBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lISmxkSFZ5YmlCdVpYZFdZV3gxWlR0Y2JuMDdYRzVjYmk4cVhHNGdJQ0FnVW1WemRISnBZM1FnZG1Gc2RXVWdkRzhnY21GdVoyVmNiaUFnSUNCY2JpQWdJQ0JTWlhSMWNtNGdkbUZzZFdVZ2QybDBhR2x1SUhSb1pTQnlZVzVuWlNCdlppQnNiM2RsY2t4cGJXbDBJR0Z1WkNCMWNIQmxja3hwYldsMFhHNGdJQ0FnWEc0Z0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQldZV3gxWlNCMGJ5QnJaV1Z3SUhkcGRHaHBiaUJ5WVc1blpWeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVEc5M1pYSWdiR2x0YVhRZ2IyWWdjbUZ1WjJWY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRlZ3Y0dWeUlHeHBiV2wwSUc5bUlISmhibWRsWEc0Z0lDQWdRSEpsZEhWeWJpQmJiblZ0WW1WeVhUb2dWbUZzZFdVZ1lYTWdiR2x0YVhSbFpDQjNhWFJvYVc0Z1oybDJaVzRnY21GdVoyVmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdjbVZ6ZEhKcFkzUWdQU0FvZG1Gc2RXVXNJRzFwYml3Z2JXRjRLU0E5UGlCTllYUm9MbTFoZUNoTllYUm9MbTFwYmloMllXeDFaU3dnYldGNEtTd2diV2x1S1R0Y2JseHVMeXBjYmlBZ0lDQkdjbUZ0WlhKaGRHVXRhVzVrWlhCbGJtUmxiblFnYzIxdmIzUm9hVzVuWEc1Y2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRTVsZHlCMllXeDFaVnh1SUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1QyeGtJSFpoYkhWbFhHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJHY21GdFpTQmtkWEpoZEdsdmJseHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYU0FvYjNCMGFXOXVZV3dwT2lCVGJXOXZkR2hwYm1jZ0tEQWdhWE1nYm05dVpTbGNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdjMjF2YjNSb0lEMGdLRzVsZDFaaGJIVmxMQ0J2YkdSV1lXeDFaU3dnWkhWeVlYUnBiMjRzSUhOdGIyOTBhR2x1WnlBOUlEQXBJRDArSUhSdlJHVmphVzFoYkNodmJHUldZV3gxWlNBcklDaGtkWEpoZEdsdmJpQXFJQ2h1WlhkV1lXeDFaU0F0SUc5c1pGWmhiSFZsS1NBdklFMWhkR2d1YldGNEtITnRiMjkwYUdsdVp5d2daSFZ5WVhScGIyNHBLU2s3WEc1Y2JpOHFYRzRnSUNBZ1EyOXVkbVZ5ZENCNElIQmxjaUJ6WldOdmJtUWdkRzhnY0dWeUlHWnlZVzFsSUhabGJHOWphWFI1SUdKaGMyVmtJRzl1SUdad2MxeHVJQ0FnSUZ4dUlDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dWVzVwZENCd1pYSWdjMlZqYjI1a1hHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJHY21GdFpTQmtkWEpoZEdsdmJpQnBiaUJ0YzF4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCemNHVmxaRkJsY2taeVlXMWxJRDBnS0hod2N5d2dabkpoYldWRWRYSmhkR2x2YmlrZ1BUNGdLR2x6VG5WdEtIaHdjeWtwSUQ4Z2VIQnpJQzhnS0RFd01EQWdMeUJtY21GdFpVUjFjbUYwYVc5dUtTQTZJREE3WEc1Y2JpOHFYRzRnSUNBZ1EyOXVkbVZ5ZENCMlpXeHZZMmwwZVNCcGJuUnZJSFpsYkdsamFYUjVJSEJsY2lCelpXTnZibVJjYmlBZ0lDQmNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZWdWFYUWdjR1Z5SUdaeVlXMWxYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCR2NtRnRaU0JrZFhKaGRHbHZiaUJwYmlCdGMxeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnpjR1ZsWkZCbGNsTmxZMjl1WkNBOUlDaDJaV3h2WTJsMGVTd2dabkpoYldWRWRYSmhkR2x2YmlrZ1BUNGdkbVZzYjJOcGRIa2dLaUFvTVRBd01DQXZJR1p5WVcxbFJIVnlZWFJwYjI0cE8xeHVYRzR2S2x4dUlDQWdJRU55WldGMFpTQnpkR1Z3Y0dWa0lIWmxjbk5wYjI0Z2IyWWdNQzB4SUhCeWIyZHlaWE56WEc0Z0lDQWdYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCRGRYSnlaVzUwSUhaaGJIVmxYRzRnSUNBZ1FIQmhjbUZ0SUZ0cGJuUmRPaUJPZFcxaVpYSWdiMllnYzNSbGNITmNiaUFnSUNCQWNtVjBkWEp1SUZ0dWRXMWlaWEpkT2lCVGRHVndjR1ZrSUhaaGJIVmxYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJSE4wWlhCUWNtOW5jbVZ6Y3lBOUlDaHdjbTluY21WemN5d2djM1JsY0hNcElEMCtJSHRjYmlBZ0lDQmpiMjV6ZENCelpXZHRaVzUwSUQwZ01TQXZJQ2h6ZEdWd2N5QXRJREVwTzF4dUlDQWdJR052Ym5OMElIUmhjbWRsZENBOUlERWdMU0FvTVNBdklITjBaWEJ6S1R0Y2JpQWdJQ0JqYjI1emRDQndjbTluY21WemMwOW1WR0Z5WjJWMElEMGdUV0YwYUM1dGFXNG9jSEp2WjNKbGMzTWdMeUIwWVhKblpYUXNJREVwTzF4dVhHNGdJQ0FnY21WMGRYSnVJRTFoZEdndVpteHZiM0lvY0hKdlozSmxjM05QWmxSaGNtZGxkQ0F2SUhObFoyMWxiblFwSUNvZ2MyVm5iV1Z1ZER0Y2JuMDdJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvY2FsYy5qc1xuICoqIG1vZHVsZSBpZCA9IDIwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgQ0FNRUxfQ0FTRV9QQVRURVJOID0gLyhbYS16XSkoW0EtWl0pL2c7XG52YXIgUkVQTEFDRV9URU1QTEFURSA9ICckMS0kMic7XG52YXIgSEFTX1BFUkZPUk1BTkNFX05PVyA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCcgJiYgcGVyZm9ybWFuY2Uubm93O1xuXG4vKlxuICAgIEdldCB2YXIgdHlwZSBhcyBzdHJpbmdcbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtzdHJpbmddOiBSZXR1cm5zLCBmb3IgaW5zdGFuY2UgJ09iamVjdCcgaWYgW29iamVjdCBPYmplY3RdXG4qL1xudmFyIHZhclR5cGUgPSBmdW5jdGlvbiAodmFyaWFibGUpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhcmlhYmxlKS5zbGljZSg4LCAtMSk7XG59O1xuXG4vKlxuICAgIENvbnZlcnQgY2FtZWxDYXNlIHRvIGRhc2gtY2FzZVxuXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHJldHVybiBbc3RyaW5nXVxuKi9cbnZhciBjYW1lbFRvRGFzaCA9IGV4cG9ydHMuY2FtZWxUb0Rhc2ggPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKENBTUVMX0NBU0VfUEFUVEVSTiwgUkVQTEFDRV9URU1QTEFURSkudG9Mb3dlckNhc2UoKTtcbn07XG5cbnZhciBjcmVhdGVEZWxpbWl0ZWQgPSBleHBvcnRzLmNyZWF0ZURlbGltaXRlZCA9IGZ1bmN0aW9uICh2YWx1ZXMsIHRlcm1zLCBkZWxpbWl0ZXIsIGNob3ApIHtcbiAgICB2YXIgbnVtVGVybXMgPSB0ZXJtcy5sZW5ndGg7XG4gICAgdmFyIGNvbWJpbmVkID0gJyc7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVRlcm1zOyBpKyspIHtcbiAgICAgICAgdmFyIHRlcm0gPSB0ZXJtc1tpXTtcbiAgICAgICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eSh0ZXJtKSkge1xuICAgICAgICAgICAgY29tYmluZWQgKz0gdmFsdWVzW3Rlcm1dICsgZGVsaW1pdGVyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNob3ApIHtcbiAgICAgICAgY29tYmluZWQgPSBjb21iaW5lZC5zbGljZSgwLCAtY2hvcCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbWJpbmVkO1xufTtcblxuLypcbiAgICBDcmVhdGUgYSBmdW5jdGlvbiBzdHJpbmdcblxuICAgICcyMHB4JywgJ3RyYW5zbGF0ZScgLT4gJ3RyYW5zbGF0ZSgyMHB4KSdcblxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEByZXR1cm4gW3N0cmluZ11cbiovXG52YXIgY3JlYXRlRnVuY3Rpb25TdHJpbmcgPSBleHBvcnRzLmNyZWF0ZUZ1bmN0aW9uU3RyaW5nID0gZnVuY3Rpb24gKHZhbHVlLCBwcmVmaXgpIHtcbiAgICByZXR1cm4gcHJlZml4ICsgJygnICsgdmFsdWUgKyAnKSc7XG59O1xuXG4vKlxuICAgIEdlbmVyYXRlIGN1cnJlbnQgdGltZXN0YW1wXG4gICAgXG4gICAgQHJldHVybiBbdGltZXN0YW1wXTogQ3VycmVudCBVTklYIHRpbWVzdGFtcFxuKi9cbnZhciBjdXJyZW50VGltZSA9IGV4cG9ydHMuY3VycmVudFRpbWUgPSBIQVNfUEVSRk9STUFOQ0VfTk9XID8gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBwZXJmb3JtYW5jZS5ub3coKTtcbn0gOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xufTtcblxuLypcbiAgICBTcGxpdCBhIHZhbHVlIGludG8gYSB2YWx1ZS91bml0IG9iamVjdFxuICAgIFxuICAgICAgICBcIjIwMHB4XCIgLT4geyB2YWx1ZTogMjAwLCB1bml0OiBcInB4XCIgfVxuICAgICAgICBcbiAgICBAcGFyYW0gW3N0cmluZ106IFZhbHVlIHRvIHNwbGl0XG4gICAgQHJldHVybiBbb2JqZWN0XTogT2JqZWN0IHdpdGggdmFsdWUgYW5kIHVuaXQgcHJvcHNcbiovXG52YXIgZmluZFZhbHVlQW5kVW5pdCA9IGV4cG9ydHMuZmluZFZhbHVlQW5kVW5pdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZS5tYXRjaCkge1xuICAgICAgICB2YXIgc3BsaXRWYWx1ZSA9IHZhbHVlLm1hdGNoKC8oLT9cXGQqXFwuP1xcZCopKC4qKS8pO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcGFyc2VGbG9hdChzcGxpdFZhbHVlWzFdKSxcbiAgICAgICAgICAgIHVuaXQ6IHNwbGl0VmFsdWVbMl1cbiAgICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4geyB2YWx1ZTogdmFsdWUgfTtcbiAgICB9XG59O1xuXG4vKlxuICAgIFNwbGl0IGNvbG9yIHN0cmluZyBpbnRvIG1hcCBvZiBjb2xvciBwcm9wZXJ0aWVzXG5cbiAgICBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMClcIiwgW1wiUmVkXCIsICdHcmVlblwiLCBcIkJsdWVcIiwgXCJBbHBoYVwiXVxuXG4gICAgeyBSZWQ6IDI1NS4uLiB9XG4qL1xudmFyIGdldENvbG9yVmFsdWVzID0gZXhwb3J0cy5nZXRDb2xvclZhbHVlcyA9IGZ1bmN0aW9uICh2YWx1ZSwgY29sb3JUZXJtcykge1xuICAgIHZhciBudW1Db2xvclRlcm1zID0gY29sb3JUZXJtcy5sZW5ndGg7XG4gICAgdmFyIGNvbG9yVmFsdWVzID0ge307XG4gICAgdmFyIGNvbG9ycyA9IHNwbGl0Q29tbWFEZWxpbWl0ZWQoZ2V0VmFsdWVGcm9tRnVuY3Rpb25TdHJpbmcodmFsdWUpKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtQ29sb3JUZXJtczsgaSsrKSB7XG4gICAgICAgIGNvbG9yVmFsdWVzW2NvbG9yVGVybXNbaV1dID0gY29sb3JzW2ldICE9PSB1bmRlZmluZWQgPyBjb2xvcnNbaV0gOiAxO1xuICAgIH1cblxuICAgIHJldHVybiBjb2xvclZhbHVlcztcbn07XG5cbi8qXG4gICAgR2V0IHZhbHVlIGZyb20gZnVuY3Rpb24gc3RyaW5nXG5cbiAgICBcInRyYW5zbGF0ZVgoMjBweClcIiAtPiBcIjIwcHhcIlxuKi9cbnZhciBnZXRWYWx1ZUZyb21GdW5jdGlvblN0cmluZyA9IGV4cG9ydHMuZ2V0VmFsdWVGcm9tRnVuY3Rpb25TdHJpbmcgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUuc3Vic3RyaW5nKHZhbHVlLmluZGV4T2YoJygnKSArIDEsIHZhbHVlLmxhc3RJbmRleE9mKCcpJykpO1xufTtcblxuLypcbiAgICBDaGVjayBpZiB0d28gb2JqZWN0cyBoYXZlIGNoYW5nZWQgZnJvbSBlYWNoIG90aGVyXG4gICAgXG4gICAgQHBhcmFtIFtvYmplY3RdOiBJbnB1dCBBXG4gICAgQHBhcmFtIFtvYmplY3RdOiBJbnB1dCBCXG4gICAgQHJldHVybiBbYm9vbGVhbl06IFRydWUgaWYgZGlmZmVyZW50XG4qL1xudmFyIGhhc0NoYW5nZWQgPSBleHBvcnRzLmhhc0NoYW5nZWQgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgIHZhciBjaGFuZ2VkID0gZmFsc2U7XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gYSkge1xuICAgICAgICBpZiAoYS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICBpZiAoaGFzUHJvcGVydHkoYiwga2V5KSkge1xuICAgICAgICAgICAgICAgIGlmIChhW2tleV0gIT09IGJba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoYW5nZWQ7XG59O1xuXG4vKlxuICAgIENoZWNrIGlmIG9iamVjdCBoYXMgcHJvcGVydHkgYW5kIGl0IGlzbid0IHVuZGVmaW5lZFxuXG4gICAgQHBhcmFtIFtvYmplY3RdXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHJldHVybiBbYm9vbGVhbl1cbiovXG52YXIgaGFzUHJvcGVydHkgPSBleHBvcnRzLmhhc1Byb3BlcnR5ID0gZnVuY3Rpb24gKG9iamVjdCwgcHJvcGVydHlOYW1lKSB7XG4gICAgcmV0dXJuIG9iamVjdC5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eU5hbWUpICYmIG9iamVjdFtwcm9wZXJ0eU5hbWVdICE9PSB1bmRlZmluZWQ7XG59O1xuXG4vKlxuICAgIElzIHV0aWxzIHZhciBhbiBhcnJheSA/IFxuICAgIFxuICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdXRpbHMudmFyVHlwZSA9PT0gJ0FycmF5J1xuKi9cbnZhciBpc0FycmF5ID0gZXhwb3J0cy5pc0FycmF5ID0gZnVuY3Rpb24gKGFycikge1xuICAgIHJldHVybiB2YXJUeXBlKGFycikgPT09ICdBcnJheSc7XG59O1xuXG4vKlxuICAgIElzIHV0aWxzIHZhciBhIGZ1bmN0aW9uID8gXG4gICAgXG4gICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB1dGlscy52YXJUeXBlID09PSAnRnVuY3Rpb24nXG4qL1xudmFyIGlzRnVuYyA9IGV4cG9ydHMuaXNGdW5jID0gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB2YXJUeXBlKG9iaikgPT09ICdGdW5jdGlvbic7XG59O1xuXG4vKlxuICAgIElzIHV0aWxzIHZhciBhIG51bWJlcj9cbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiA9PT0gJ251bWJlcidcbiovXG52YXIgaXNOdW0gPSBleHBvcnRzLmlzTnVtID0gZnVuY3Rpb24gKG51bSkge1xuICAgIHJldHVybiB0eXBlb2YgbnVtID09PSAnbnVtYmVyJztcbn07XG5cbi8qXG4gICAgSXMgdXRpbHMgdmFyIGFuIG9iamVjdD9cbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiA9PT0gJ29iamVjdCdcbiovXG52YXIgaXNPYmogPSBleHBvcnRzLmlzT2JqID0gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jztcbn07XG5cbi8qXG4gICAgSXMgdXRpbHMgYSByZWxhdGl2ZSB2YWx1ZSBhc3NpZ25tZW50P1xuICAgIFxuICAgIEBwYXJhbSBbc3RyaW5nXTogVmFyaWFibGUgdG8gdGVzdFxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBJZiB1dGlscyBsb29rcyBsaWtlIGEgcmVsYXRpdmUgdmFsdWUgYXNzaWdubWVudFxuKi9cbnZhciBpc1JlbGF0aXZlVmFsdWUgPSBleHBvcnRzLmlzUmVsYXRpdmVWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mICYmIHZhbHVlLmluZGV4T2YoJz0nKSA+IDAgPyB0cnVlIDogZmFsc2U7XG59O1xuXG4vKlxuICAgIElzIHV0aWxzIHZhciBhIHN0cmluZyA/IFxuICAgIFxuICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mIHN0ciA9PT0gJ3N0cmluZydcbiovXG52YXIgaXNTdHJpbmcgPSBleHBvcnRzLmlzU3RyaW5nID0gZnVuY3Rpb24gKHN0cikge1xuICAgIHJldHVybiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJztcbn07XG5cbi8qXG4gICAgQHBhcmFtIFtzdHJpbmcgfHwgTm9kZUxpc3RdOlxuICAgICAgICBJZiBzdHJpbmcsIHRyZWF0ZWQgYXMgc2VsZWN0b3IuXG4gICAgICAgIElmIG5vdCwgdHJlYXRlZCBhcyBwcmVleGlzdGluZyBOb2RlTGlzdFxuXG4gICAgQHJldHVybiBbQXJyYXldXG4qL1xudmFyIHNlbGVjdERvbSA9IGV4cG9ydHMuc2VsZWN0RG9tID0gZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgdmFyIG5vZGVzID0gdHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpIDogc2VsZWN0b3I7XG4gICAgcmV0dXJuIG5vZGVzLmxlbmd0aCA/IFtdLnNsaWNlLmNhbGwobm9kZXMpIDogW10ucHVzaChub2Rlcyk7XG59O1xuXG4vKlxuICAgIFNwbGl0IGNvbW1hLWRlbGltaXRlZCBzdHJpbmdcblxuICAgIFwiZm9vLGJhclwiIC0+IFtcImZvb1wiLCBcImJhclwiXVxuXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHJldHVybiBbYXJyYXldXG4qL1xudmFyIHNwbGl0Q29tbWFEZWxpbWl0ZWQgPSBleHBvcnRzLnNwbGl0Q29tbWFEZWxpbWl0ZWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodmFsdWUpID8gdmFsdWUuc3BsaXQoLyxcXHMqLykgOiBbdmFsdWVdO1xufTtcblxuLypcbiAgICBTcGxpdCBzcGFjZS1kZWxpbWl0ZWQgc3RyaW5nXG5cbiAgICBcImZvbyBiYXJcIiAtPiBbXCJmb29cIiwgXCJiYXJcIl1cblxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEByZXR1cm4gW2FycmF5XVxuKi9cbnZhciBzcGxpdFNwYWNlRGVsaW1pdGVkID0gZXhwb3J0cy5zcGxpdFNwYWNlRGVsaW1pdGVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHZhbHVlKSA/IHZhbHVlLnNwbGl0KCcgJykgOiBbdmFsdWVdO1xufTtcblxuLypcbiAgICBDb252ZXJ0IG51bWJlciB0byB4IGRlY2ltYWwgcGxhY2VzXG5cbiAgICBAcGFyYW0gW251bWJlcl1cbiAgICBAcGFyYW0gW251bWJlcl1cbiAgICBAcmV0dXJuIFtudW1iZXJdXG4qL1xudmFyIHRvRGVjaW1hbCA9IGV4cG9ydHMudG9EZWNpbWFsID0gZnVuY3Rpb24gKG51bSkge1xuICAgIHZhciBwcmVjaXNpb24gPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyAyIDogYXJndW1lbnRzWzFdO1xuXG4gICAgcHJlY2lzaW9uID0gTWF0aC5wb3coMTAsIHByZWNpc2lvbik7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobnVtICogcHJlY2lzaW9uKSAvIHByZWNpc2lvbjtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12ZFhScGJITXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3TzBGQlFVRXNTVUZCVFN4eFFrRkJjVUlzYVVKQlFUTkNPMEZCUTBFc1NVRkJUU3h0UWtGQmJVSXNUMEZCZWtJN1FVRkRRU3hKUVVGTkxITkNRVUYxUWl4UFFVRlBMRmRCUVZBc1MwRkJkVUlzVjBGQmRrSXNTVUZCYzBNc1dVRkJXU3hIUVVFdlJUczdPenM3T3pzN1FVRlJRU3hKUVVGTkxGVkJRVlU3UVVGQlFTeFhRVUZaTEU5QlFVOHNVMEZCVUN4RFFVRnBRaXhSUVVGcVFpeERRVUV3UWl4SlFVRXhRaXhEUVVFclFpeFJRVUV2UWl4RlFVRjVReXhMUVVGNlF5eERRVUVyUXl4RFFVRXZReXhGUVVGclJDeERRVUZETEVOQlFXNUVMRU5CUVZvN1FVRkJRU3hEUVVGb1FqczdPenM3T3pzN1FVRlJUeXhKUVVGTkxHOURRVUZqTEZWQlFVTXNUVUZCUkR0QlFVRkJMRmRCUVZrc1QwRkJUeXhQUVVGUUxFTkJRV1VzYTBKQlFXWXNSVUZCYlVNc1owSkJRVzVETEVWQlFYRkVMRmRCUVhKRUxFVkJRVm83UVVGQlFTeERRVUZ3UWpzN1FVRkZRU3hKUVVGTkxEUkRRVUZyUWl4VlFVRkRMRTFCUVVRc1JVRkJVeXhMUVVGVUxFVkJRV2RDTEZOQlFXaENMRVZCUVRKQ0xFbEJRVE5DTEVWQlFXOURPMEZCUXk5RUxGRkJRVTBzVjBGQlZ5eE5RVUZOTEUxQlFYWkNPMEZCUTBFc1VVRkJTU3hYUVVGWExFVkJRV1k3TzBGQlJVRXNVMEZCU3l4SlFVRkpMRWxCUVVrc1EwRkJZaXhGUVVGblFpeEpRVUZKTEZGQlFYQkNMRVZCUVRoQ0xFZEJRVGxDTEVWQlFXMURPMEZCUXk5Q0xGbEJRVTBzVDBGQlR5eE5RVUZOTEVOQlFVNHNRMEZCWWp0QlFVTkJMRmxCUVVrc1QwRkJUeXhqUVVGUUxFTkJRWE5DTEVsQlFYUkNMRU5CUVVvc1JVRkJhVU03UVVGRE4wSXNkMEpCUVZrc1QwRkJUeXhKUVVGUUxFbEJRV1VzVTBGQk0wSTdRVUZEU0R0QlFVTktPenRCUVVWRUxGRkJRVWtzU1VGQlNpeEZRVUZWTzBGQlEwNHNiVUpCUVZjc1UwRkJVeXhMUVVGVUxFTkJRV1VzUTBGQlppeEZRVUZyUWl4RFFVRkRMRWxCUVc1Q0xFTkJRVmc3UVVGRFNEczdRVUZGUkN4WFFVRlBMRkZCUVZBN1FVRkRTQ3hEUVdoQ1RUczdPenM3T3pzN096czdRVUV5UWtFc1NVRkJUU3h6UkVGQmRVSXNWVUZCUXl4TFFVRkVMRVZCUVZFc1RVRkJVanRCUVVGQkxGZEJRWE5DTEUxQlFYUkNMRk5CUVdkRExFdEJRV2hETzBGQlFVRXNRMEZCTjBJN096czdPenM3UVVGUFFTeEpRVUZOTEc5RFFVRmpMSE5DUVVGelFqdEJRVUZCTEZkQlFVMHNXVUZCV1N4SFFVRmFMRVZCUVU0N1FVRkJRU3hEUVVGMFFpeEhRVUZuUkR0QlFVRkJMRmRCUVUwc1NVRkJTU3hKUVVGS0xFZEJRVmNzVDBGQldDeEZRVUZPTzBGQlFVRXNRMEZCY0VVN096czdPenM3T3pzN1FVRlZRU3hKUVVGTkxEaERRVUZ0UWl4VlFVRkRMRXRCUVVRc1JVRkJWenRCUVVOMlF5eFJRVUZKTEUxQlFVMHNTMEZCVml4RlFVRnBRanRCUVVOaUxGbEJRVTBzWVVGQllTeE5RVUZOTEV0QlFVNHNRMEZCV1N4dFFrRkJXaXhEUVVGdVFqczdRVUZGUVN4bFFVRlBPMEZCUTBnc2JVSkJRVThzVjBGQlZ5eFhRVUZYTEVOQlFWZ3NRMEZCV0N4RFFVUktPMEZCUlVnc2EwSkJRVThzVjBGQlZ5eERRVUZZTzBGQlJrb3NVMEZCVUR0QlFVbElMRXRCVUVRc1RVRlBUenRCUVVOSUxHVkJRVThzUlVGQlJTeFpRVUZHTEVWQlFWQTdRVUZEU0R0QlFVTktMRU5CV0UwN096czdPenM3T3p0QlFXOUNRU3hKUVVGTkxEQkRRVUZwUWl4VlFVRkRMRXRCUVVRc1JVRkJVU3hWUVVGU0xFVkJRWFZDTzBGQlEycEVMRkZCUVUwc1owSkJRV2RDTEZkQlFWY3NUVUZCYWtNN1FVRkRRU3hSUVVGTkxHTkJRV01zUlVGQmNFSTdRVUZEUVN4UlFVRk5MRk5CUVZNc2IwSkJRVzlDTERKQ1FVRXlRaXhMUVVFelFpeERRVUZ3UWl4RFFVRm1PenRCUVVWQkxGTkJRVXNzU1VGQlNTeEpRVUZKTEVOQlFXSXNSVUZCWjBJc1NVRkJTU3hoUVVGd1FpeEZRVUZ0UXl4SFFVRnVReXhGUVVGM1F6dEJRVU53UXl4dlFrRkJXU3hYUVVGWExFTkJRVmdzUTBGQldpeEpRVUU0UWl4UFFVRlBMRU5CUVZBc1RVRkJZeXhUUVVGbUxFZEJRVFJDTEU5QlFVOHNRMEZCVUN4RFFVRTFRaXhIUVVGM1F5eERRVUZ5UlR0QlFVTklPenRCUVVWRUxGZEJRVThzVjBGQlVEdEJRVU5JTEVOQlZrMDdPenM3T3pzN1FVRnBRa0VzU1VGQlRTeHJSVUZCTmtJc1ZVRkJReXhMUVVGRU8wRkJRVUVzVjBGQlZ5eE5RVUZOTEZOQlFVNHNRMEZCWjBJc1RVRkJUU3hQUVVGT0xFTkJRV01zUjBGQlpDeEpRVUZ4UWl4RFFVRnlReXhGUVVGM1F5eE5RVUZOTEZkQlFVNHNRMEZCYTBJc1IwRkJiRUlzUTBGQmVFTXNRMEZCV0R0QlFVRkJMRU5CUVc1RE96czdPenM3T3pzN1FVRlRRU3hKUVVGTkxHdERRVUZoTEZWQlFVTXNRMEZCUkN4RlFVRkpMRU5CUVVvc1JVRkJWVHRCUVVOb1F5eFJRVUZKTEZWQlFWVXNTMEZCWkRzN1FVRkZRU3hUUVVGTExFbEJRVWtzUjBGQlZDeEpRVUZuUWl4RFFVRm9RaXhGUVVGdFFqdEJRVU5tTEZsQlFVa3NSVUZCUlN4alFVRkdMRU5CUVdsQ0xFZEJRV3BDTEVOQlFVb3NSVUZCTWtJN1FVRkRka0lzWjBKQlFVa3NXVUZCV1N4RFFVRmFMRVZCUVdVc1IwRkJaaXhEUVVGS0xFVkJRWGxDTzBGQlEzSkNMRzlDUVVGSkxFVkJRVVVzUjBGQlJpeE5RVUZYTEVWQlFVVXNSMEZCUml4RFFVRm1MRVZCUVhWQ08wRkJRMjVDTERoQ1FVRlZMRWxCUVZZN1FVRkRTRHRCUVVOS0xHRkJTa1FzVFVGSlR6dEJRVU5JTERCQ1FVRlZMRWxCUVZZN1FVRkRTRHRCUVVOS08wRkJRMG83TzBGQlJVUXNWMEZCVHl4UFFVRlFPMEZCUTBnc1EwRm9RazA3T3pzN096czdPenRCUVhsQ1FTeEpRVUZOTEc5RFFVRmpMRlZCUVVNc1RVRkJSQ3hGUVVGVExGbEJRVlE3UVVGQlFTeFhRVUV3UWl4UFFVRlBMR05CUVZBc1EwRkJjMElzV1VGQmRFSXNTMEZCZFVNc1QwRkJUeXhaUVVGUUxFMUJRWGxDTEZOQlFURkdPMEZCUVVFc1EwRkJjRUk3T3pzN096czdPMEZCVVVFc1NVRkJUU3cwUWtGQlZTeFZRVUZETEVkQlFVUTdRVUZCUVN4WFFVRlRMRkZCUVZFc1IwRkJVaXhOUVVGcFFpeFBRVUV4UWp0QlFVRkJMRU5CUVdoQ096czdPenM3T3p0QlFWRkJMRWxCUVUwc01FSkJRVk1zVlVGQlF5eEhRVUZFTzBGQlFVRXNWMEZCVXl4UlFVRlJMRWRCUVZJc1RVRkJhVUlzVlVGQk1VSTdRVUZCUVN4RFFVRm1PenM3T3pzN096dEJRVkZCTEVsQlFVMHNkMEpCUVZFc1ZVRkJReXhIUVVGRU8wRkJRVUVzVjBGQlV5eFBRVUZQTEVkQlFWQXNTMEZCWlN4UlFVRjRRanRCUVVGQkxFTkJRV1E3T3pzN096czdPMEZCVVVFc1NVRkJUU3gzUWtGQlVTeFZRVUZETEVkQlFVUTdRVUZCUVN4WFFVRlRMRTlCUVU4c1IwRkJVQ3hMUVVGbExGRkJRWGhDTzBGQlFVRXNRMEZCWkRzN096czdPenM3UVVGUlFTeEpRVUZOTERSRFFVRnJRaXhWUVVGRExFdEJRVVE3UVVGQlFTeFhRVUZaTEZOQlFWTXNUVUZCVFN4UFFVRm1MRWxCUVRCQ0xFMUJRVTBzVDBGQlRpeERRVUZqTEVkQlFXUXNTVUZCY1VJc1EwRkJhRVFzUjBGQmNVUXNTVUZCY2tRc1IwRkJORVFzUzBGQmRrVTdRVUZCUVN4RFFVRjRRanM3T3pzN096czdRVUZSUVN4SlFVRk5MRGhDUVVGWExGVkJRVU1zUjBGQlJEdEJRVUZCTEZkQlFWTXNUMEZCVHl4SFFVRlFMRXRCUVdVc1VVRkJlRUk3UVVGQlFTeERRVUZxUWpzN096czdPenM3TzBGQlUwRXNTVUZCVFN4blEwRkJXU3hWUVVGRExGRkJRVVFzUlVGQll6dEJRVU51UXl4UlFVRk5MRkZCUVZNc1QwRkJUeXhSUVVGUUxFdEJRVzlDTEZGQlFYSkNMRWRCUVdsRExGTkJRVk1zWjBKQlFWUXNRMEZCTUVJc1VVRkJNVUlzUTBGQmFrTXNSMEZCZFVVc1VVRkJja1k3UVVGRFFTeFhRVUZSTEUxQlFVMHNUVUZCVUN4SFFVRnBRaXhIUVVGSExFdEJRVWdzUTBGQlV5eEpRVUZVTEVOQlFXTXNTMEZCWkN4RFFVRnFRaXhIUVVGM1F5eEhRVUZITEVsQlFVZ3NRMEZCVVN4TFFVRlNMRU5CUVM5RE8wRkJRMGdzUTBGSVRUczdPenM3T3pzN096dEJRV0ZCTEVsQlFVMHNiMFJCUVhOQ0xGVkJRVU1zUzBGQlJEdEJRVUZCTEZkQlFWY3NVMEZCVXl4TFFVRlVMRWxCUVd0Q0xFMUJRVTBzUzBGQlRpeERRVUZaTEUxQlFWb3NRMEZCYkVJc1IwRkJkME1zUTBGQlF5eExRVUZFTEVOQlFXNUVPMEZCUVVFc1EwRkJOVUk3T3pzN096czdPenM3UVVGVlFTeEpRVUZOTEc5RVFVRnpRaXhWUVVGRExFdEJRVVE3UVVGQlFTeFhRVUZYTEZOQlFWTXNTMEZCVkN4SlFVRnJRaXhOUVVGTkxFdEJRVTRzUTBGQldTeEhRVUZhTEVOQlFXeENMRWRCUVhGRExFTkJRVU1zUzBGQlJDeERRVUZvUkR0QlFVRkJMRU5CUVRWQ096czdPenM3T3pzN1FVRlRRU3hKUVVGTkxHZERRVUZaTEZWQlFVTXNSMEZCUkN4RlFVRjNRanRCUVVGQkxGRkJRV3hDTEZOQlFXdENMSGxFUVVGT0xFTkJRVTA3TzBGQlF6ZERMSGxDUVVGWkxFVkJRVm9zUlVGQmEwSXNVMEZCYkVJN1FVRkRRU3hYUVVGUExFdEJRVXNzUzBGQlRDeERRVUZYTEUxQlFVMHNVMEZCYWtJc1NVRkJPRUlzVTBGQmNrTTdRVUZEU0N4RFFVaE5JaXdpWm1sc1pTSTZJblYwYVd4ekxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5cWRtRnVaR1Z5Wkc5bGN5OURiMlJsTDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltTnZibk4wSUVOQlRVVk1YME5CVTBWZlVFRlVWRVZTVGlBOUlDOG9XMkV0ZWwwcEtGdEJMVnBkS1M5bk8xeHVZMjl1YzNRZ1VrVlFURUZEUlY5VVJVMVFURUZVUlNBOUlDY2tNUzBrTWljN1hHNWpiMjV6ZENCSVFWTmZVRVZTUms5U1RVRk9RMFZmVGs5WElEMGdLSFI1Y0dWdlppQndaWEptYjNKdFlXNWpaU0FoUFQwZ0ozVnVaR1ZtYVc1bFpDY2dKaVlnY0dWeVptOXliV0Z1WTJVdWJtOTNLVHRjYmx4dUx5cGNiaUFnSUNCSFpYUWdkbUZ5SUhSNWNHVWdZWE1nYzNSeWFXNW5YRzRnSUNBZ1hHNGdJQ0FnUUhCaGNtRnRPaUJXWVhKcFlXSnNaU0IwYnlCMFpYTjBYRzRnSUNBZ1FISmxkSFZ5YmlCYmMzUnlhVzVuWFRvZ1VtVjBkWEp1Y3l3Z1ptOXlJR2x1YzNSaGJtTmxJQ2RQWW1wbFkzUW5JR2xtSUZ0dlltcGxZM1FnVDJKcVpXTjBYVnh1S2k5Y2JtTnZibk4wSUhaaGNsUjVjR1VnUFNCMllYSnBZV0pzWlNBOVBpQlBZbXBsWTNRdWNISnZkRzkwZVhCbExuUnZVM1J5YVc1bkxtTmhiR3dvZG1GeWFXRmliR1VwTG5Oc2FXTmxLRGdzSUMweEtUdGNibHh1THlwY2JpQWdJQ0JEYjI1MlpYSjBJR05oYldWc1EyRnpaU0IwYnlCa1lYTm9MV05oYzJWY2JseHVJQ0FnSUVCd1lYSmhiU0JiYzNSeWFXNW5YVnh1SUNBZ0lFQnlaWFIxY200Z1czTjBjbWx1WjExY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ1kyRnRaV3hVYjBSaGMyZ2dQU0FvYzNSeWFXNW5LU0E5UGlCemRISnBibWN1Y21Wd2JHRmpaU2hEUVUxRlRGOURRVk5GWDFCQlZGUkZVazRzSUZKRlVFeEJRMFZmVkVWTlVFeEJWRVVwTG5SdlRHOTNaWEpEWVhObEtDazdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQmpjbVZoZEdWRVpXeHBiV2wwWldRZ1BTQW9kbUZzZFdWekxDQjBaWEp0Y3l3Z1pHVnNhVzFwZEdWeUxDQmphRzl3S1NBOVBpQjdYRzRnSUNBZ1kyOXVjM1FnYm5WdFZHVnliWE1nUFNCMFpYSnRjeTVzWlc1bmRHZzdYRzRnSUNBZ2JHVjBJR052YldKcGJtVmtJRDBnSnljN1hHNWNiaUFnSUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElHNTFiVlJsY20xek95QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnZEdWeWJTQTlJSFJsY20xelcybGRPMXh1SUNBZ0lDQWdJQ0JwWmlBb2RtRnNkV1Z6TG1oaGMwOTNibEJ5YjNCbGNuUjVLSFJsY20wcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyMWlhVzVsWkNBclBTQjJZV3gxWlhOYmRHVnliVjBnS3lCa1pXeHBiV2wwWlhJN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNCcFppQW9ZMmh2Y0NrZ2UxeHVJQ0FnSUNBZ0lDQmpiMjFpYVc1bFpDQTlJR052YldKcGJtVmtMbk5zYVdObEtEQXNJQzFqYUc5d0tUdGNiaUFnSUNCOVhHNWNiaUFnSUNCeVpYUjFjbTRnWTI5dFltbHVaV1E3WEc1OU8xeHVYRzR2S2x4dUlDQWdJRU55WldGMFpTQmhJR1oxYm1OMGFXOXVJSE4wY21sdVoxeHVYRzRnSUNBZ0p6SXdjSGduTENBbmRISmhibk5zWVhSbEp5QXRQaUFuZEhKaGJuTnNZWFJsS0RJd2NIZ3BKMXh1WEc0Z0lDQWdRSEJoY21GdElGdHpkSEpwYm1kZFhHNGdJQ0FnUUhCaGNtRnRJRnR6ZEhKcGJtZGRYRzRnSUNBZ1FISmxkSFZ5YmlCYmMzUnlhVzVuWFZ4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCamNtVmhkR1ZHZFc1amRHbHZibE4wY21sdVp5QTlJQ2gyWVd4MVpTd2djSEpsWm1sNEtTQTlQaUJnSkh0d2NtVm1hWGg5S0NSN2RtRnNkV1Y5S1dBN1hHNWNiaThxWEc0Z0lDQWdSMlZ1WlhKaGRHVWdZM1Z5Y21WdWRDQjBhVzFsYzNSaGJYQmNiaUFnSUNCY2JpQWdJQ0JBY21WMGRYSnVJRnQwYVcxbGMzUmhiWEJkT2lCRGRYSnlaVzUwSUZWT1NWZ2dkR2x0WlhOMFlXMXdYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR04xY25KbGJuUlVhVzFsSUQwZ1NFRlRYMUJGVWtaUFVrMUJUa05GWDA1UFZ5QS9JQ2dwSUQwK0lIQmxjbVp2Y20xaGJtTmxMbTV2ZHlncElEb2dLQ2tnUFQ0Z2JtVjNJRVJoZEdVb0tTNW5aWFJVYVcxbEtDazdYRzVjYmk4cVhHNGdJQ0FnVTNCc2FYUWdZU0IyWVd4MVpTQnBiblJ2SUdFZ2RtRnNkV1V2ZFc1cGRDQnZZbXBsWTNSY2JpQWdJQ0JjYmlBZ0lDQWdJQ0FnWENJeU1EQndlRndpSUMwK0lIc2dkbUZzZFdVNklESXdNQ3dnZFc1cGREb2dYQ0p3ZUZ3aUlIMWNiaUFnSUNBZ0lDQWdYRzRnSUNBZ1FIQmhjbUZ0SUZ0emRISnBibWRkT2lCV1lXeDFaU0IwYnlCemNHeHBkRnh1SUNBZ0lFQnlaWFIxY200Z1cyOWlhbVZqZEYwNklFOWlhbVZqZENCM2FYUm9JSFpoYkhWbElHRnVaQ0IxYm1sMElIQnliM0J6WEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdacGJtUldZV3gxWlVGdVpGVnVhWFFnUFNBb2RtRnNkV1VwSUQwK0lIdGNiaUFnSUNCcFppQW9kbUZzZFdVdWJXRjBZMmdwSUh0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnYzNCc2FYUldZV3gxWlNBOUlIWmhiSFZsTG0xaGRHTm9LQzhvTFQ5Y1hHUXFYRnd1UDF4Y1pDb3BLQzRxS1M4cE8xeHVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMllXeDFaVG9nY0dGeWMyVkdiRzloZENoemNHeHBkRlpoYkhWbFd6RmRLU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lIVnVhWFE2SUNCemNHeHBkRlpoYkhWbFd6SmRYRzRnSUNBZ0lDQWdJSDA3WEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIc2dkbUZzZFdVZ2ZUdGNiaUFnSUNCOVhHNTlPMXh1WEc0dktseHVJQ0FnSUZOd2JHbDBJR052Ykc5eUlITjBjbWx1WnlCcGJuUnZJRzFoY0NCdlppQmpiMnh2Y2lCd2NtOXdaWEowYVdWelhHNWNiaUFnSUNCY0luSm5ZbUVvTWpVMUxDQXlOVFVzSURJMU5Td2dNQ2xjSWl3Z1cxd2lVbVZrWENJc0lDZEhjbVZsYmx3aUxDQmNJa0pzZFdWY0lpd2dYQ0pCYkhCb1lWd2lYVnh1WEc0Z0lDQWdleUJTWldRNklESTFOUzR1TGlCOVhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHZGxkRU52Ykc5eVZtRnNkV1Z6SUQwZ0tIWmhiSFZsTENCamIyeHZjbFJsY20xektTQTlQaUI3WEc0Z0lDQWdZMjl1YzNRZ2JuVnRRMjlzYjNKVVpYSnRjeUE5SUdOdmJHOXlWR1Z5YlhNdWJHVnVaM1JvTzF4dUlDQWdJR052Ym5OMElHTnZiRzl5Vm1Gc2RXVnpJRDBnZTMwN1hHNGdJQ0FnWTI5dWMzUWdZMjlzYjNKeklEMGdjM0JzYVhSRGIyMXRZVVJsYkdsdGFYUmxaQ2huWlhSV1lXeDFaVVp5YjIxR2RXNWpkR2x2YmxOMGNtbHVaeWgyWVd4MVpTa3BPMXh1WEc0Z0lDQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0J1ZFcxRGIyeHZjbFJsY20xek95QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ1kyOXNiM0pXWVd4MVpYTmJZMjlzYjNKVVpYSnRjMXRwWFYwZ1BTQW9ZMjlzYjNKelcybGRJQ0U5UFNCMWJtUmxabWx1WldRcElEOGdZMjlzYjNKelcybGRJRG9nTVR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J5WlhSMWNtNGdZMjlzYjNKV1lXeDFaWE03WEc1OU8xeHVYRzR2S2x4dUlDQWdJRWRsZENCMllXeDFaU0JtY205dElHWjFibU4wYVc5dUlITjBjbWx1WjF4dVhHNGdJQ0FnWENKMGNtRnVjMnhoZEdWWUtESXdjSGdwWENJZ0xUNGdYQ0l5TUhCNFhDSmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdaMlYwVm1Gc2RXVkdjbTl0Um5WdVkzUnBiMjVUZEhKcGJtY2dQU0FvZG1Gc2RXVXBJRDArSUhaaGJIVmxMbk4xWW5OMGNtbHVaeWgyWVd4MVpTNXBibVJsZUU5bUtDY29KeWtnS3lBeExDQjJZV3gxWlM1c1lYTjBTVzVrWlhoUFppZ25LU2NwS1R0Y2JseHVMeXBjYmlBZ0lDQkRhR1ZqYXlCcFppQjBkMjhnYjJKcVpXTjBjeUJvWVhabElHTm9ZVzVuWldRZ1puSnZiU0JsWVdOb0lHOTBhR1Z5WEc0Z0lDQWdYRzRnSUNBZ1FIQmhjbUZ0SUZ0dlltcGxZM1JkT2lCSmJuQjFkQ0JCWEc0Z0lDQWdRSEJoY21GdElGdHZZbXBsWTNSZE9pQkpibkIxZENCQ1hHNGdJQ0FnUUhKbGRIVnliaUJiWW05dmJHVmhibDA2SUZSeWRXVWdhV1lnWkdsbVptVnlaVzUwWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdoaGMwTm9ZVzVuWldRZ1BTQW9ZU3dnWWlrZ1BUNGdlMXh1SUNBZ0lHeGxkQ0JqYUdGdVoyVmtJRDBnWm1Gc2MyVTdYRzVjYmlBZ0lDQm1iM0lnS0d4bGRDQnJaWGtnYVc0Z1lTa2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb1lTNW9ZWE5QZDI1UWNtOXdaWEowZVNoclpYa3BLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvYUdGelVISnZjR1Z5ZEhrb1lpd2dhMlY1S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hoVzJ0bGVWMGdJVDA5SUdKYmEyVjVYU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmphR0Z1WjJWa0lEMGdkSEoxWlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR05vWVc1blpXUWdQU0IwY25WbE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WMGRYSnVJR05vWVc1blpXUTdYRzU5TzF4dVhHNHZLbHh1SUNBZ0lFTm9aV05ySUdsbUlHOWlhbVZqZENCb1lYTWdjSEp2Y0dWeWRIa2dZVzVrSUdsMElHbHpiaWQwSUhWdVpHVm1hVzVsWkZ4dVhHNGdJQ0FnUUhCaGNtRnRJRnR2WW1wbFkzUmRYRzRnSUNBZ1FIQmhjbUZ0SUZ0emRISnBibWRkWEc0Z0lDQWdRSEpsZEhWeWJpQmJZbTl2YkdWaGJsMWNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdhR0Z6VUhKdmNHVnlkSGtnUFNBb2IySnFaV04wTENCd2NtOXdaWEowZVU1aGJXVXBJRDArSUc5aWFtVmpkQzVvWVhOUGQyNVFjbTl3WlhKMGVTaHdjbTl3WlhKMGVVNWhiV1VwSUNZbUlHOWlhbVZqZEZ0d2NtOXdaWEowZVU1aGJXVmRJQ0U5UFNCMWJtUmxabWx1WldRN1hHNWNiaThxWEc0Z0lDQWdTWE1nZFhScGJITWdkbUZ5SUdGdUlHRnljbUY1SUQ4Z1hHNGdJQ0FnWEc0Z0lDQWdRSEJoY21GdE9pQldZWEpwWVdKc1pTQjBieUIwWlhOMFhHNGdJQ0FnUUhKbGRIVnliaUJiWW05dmJHVmhibDA2SUZKbGRIVnlibk1nZEhKMVpTQnBaaUIxZEdsc2N5NTJZWEpVZVhCbElEMDlQU0FuUVhKeVlYa25YRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR2x6UVhKeVlYa2dQU0FvWVhKeUtTQTlQaUIyWVhKVWVYQmxLR0Z5Y2lrZ1BUMDlJQ2RCY25KaGVTYzdYRzVjYmk4cVhHNGdJQ0FnU1hNZ2RYUnBiSE1nZG1GeUlHRWdablZ1WTNScGIyNGdQeUJjYmlBZ0lDQmNiaUFnSUNCQWNHRnlZVzA2SUZaaGNtbGhZbXhsSUhSdklIUmxjM1JjYmlBZ0lDQkFjbVYwZFhKdUlGdGliMjlzWldGdVhUb2dVbVYwZFhKdWN5QjBjblZsSUdsbUlIVjBhV3h6TG5aaGNsUjVjR1VnUFQwOUlDZEdkVzVqZEdsdmJpZGNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdhWE5HZFc1aklEMGdLRzlpYWlrZ1BUNGdkbUZ5Vkhsd1pTaHZZbW9wSUQwOVBTQW5SblZ1WTNScGIyNG5PMXh1WEc0dktseHVJQ0FnSUVseklIVjBhV3h6SUhaaGNpQmhJRzUxYldKbGNqOWNiaUFnSUNCY2JpQWdJQ0JBY0dGeVlXMDZJRlpoY21saFlteGxJSFJ2SUhSbGMzUmNiaUFnSUNCQWNtVjBkWEp1SUZ0aWIyOXNaV0Z1WFRvZ1VtVjBkWEp1Y3lCMGNuVmxJR2xtSUhSNWNHVnZaaUE5UFQwZ0oyNTFiV0psY2lkY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2FYTk9kVzBnUFNBb2JuVnRLU0E5UGlCMGVYQmxiMllnYm5WdElEMDlQU0FuYm5WdFltVnlKenRjYmx4dUx5cGNiaUFnSUNCSmN5QjFkR2xzY3lCMllYSWdZVzRnYjJKcVpXTjBQMXh1SUNBZ0lGeHVJQ0FnSUVCd1lYSmhiVG9nVm1GeWFXRmliR1VnZEc4Z2RHVnpkRnh1SUNBZ0lFQnlaWFIxY200Z1cySnZiMnhsWVc1ZE9pQlNaWFIxY201eklIUnlkV1VnYVdZZ2RIbHdaVzltSUQwOVBTQW5iMkpxWldOMEoxeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnBjMDlpYWlBOUlDaHZZbW9wSUQwK0lIUjVjR1Z2WmlCdlltb2dQVDA5SUNkdlltcGxZM1FuTzF4dVhHNHZLbHh1SUNBZ0lFbHpJSFYwYVd4eklHRWdjbVZzWVhScGRtVWdkbUZzZFdVZ1lYTnphV2R1YldWdWREOWNiaUFnSUNCY2JpQWdJQ0JBY0dGeVlXMGdXM04wY21sdVoxMDZJRlpoY21saFlteGxJSFJ2SUhSbGMzUmNiaUFnSUNCQWNtVjBkWEp1SUZ0aWIyOXNaV0Z1WFRvZ1NXWWdkWFJwYkhNZ2JHOXZhM01nYkdsclpTQmhJSEpsYkdGMGFYWmxJSFpoYkhWbElHRnpjMmxuYm0xbGJuUmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdhWE5TWld4aGRHbDJaVlpoYkhWbElEMGdLSFpoYkhWbEtTQTlQaUFvZG1Gc2RXVWdKaVlnZG1Gc2RXVXVhVzVrWlhoUFppQW1KaUIyWVd4MVpTNXBibVJsZUU5bUtDYzlKeWtnUGlBd0tTQS9JSFJ5ZFdVZ09pQm1ZV3h6WlR0Y2JseHVMeXBjYmlBZ0lDQkpjeUIxZEdsc2N5QjJZWElnWVNCemRISnBibWNnUHlCY2JpQWdJQ0JjYmlBZ0lDQkFjR0Z5WVcwNklGWmhjbWxoWW14bElIUnZJSFJsYzNSY2JpQWdJQ0JBY21WMGRYSnVJRnRpYjI5c1pXRnVYVG9nVW1WMGRYSnVjeUIwY25WbElHbG1JSFI1Y0dWdlppQnpkSElnUFQwOUlDZHpkSEpwYm1jblhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHbHpVM1J5YVc1bklEMGdLSE4wY2lrZ1BUNGdkSGx3Wlc5bUlITjBjaUE5UFQwZ0ozTjBjbWx1WnljN1hHNWNiaThxWEc0Z0lDQWdRSEJoY21GdElGdHpkSEpwYm1jZ2ZId2dUbTlrWlV4cGMzUmRPbHh1SUNBZ0lDQWdJQ0JKWmlCemRISnBibWNzSUhSeVpXRjBaV1FnWVhNZ2MyVnNaV04wYjNJdVhHNGdJQ0FnSUNBZ0lFbG1JRzV2ZEN3Z2RISmxZWFJsWkNCaGN5QndjbVZsZUdsemRHbHVaeUJPYjJSbFRHbHpkRnh1WEc0Z0lDQWdRSEpsZEhWeWJpQmJRWEp5WVhsZFhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElITmxiR1ZqZEVSdmJTQTlJQ2h6Wld4bFkzUnZjaWtnUFQ0Z2UxeHVJQ0FnSUdOdmJuTjBJRzV2WkdWeklEMGdLSFI1Y0dWdlppQnpaV3hsWTNSdmNpQTlQVDBnSjNOMGNtbHVaeWNwSUQ4Z1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZja0ZzYkNoelpXeGxZM1J2Y2lrZ09pQnpaV3hsWTNSdmNqdGNiaUFnSUNCeVpYUjFjbTRnS0c1dlpHVnpMbXhsYm1kMGFDa2dQeUJiWFM1emJHbGpaUzVqWVd4c0tHNXZaR1Z6S1NBNklGdGRMbkIxYzJnb2JtOWtaWE1wTzF4dWZUdGNibHh1THlwY2JpQWdJQ0JUY0d4cGRDQmpiMjF0WVMxa1pXeHBiV2wwWldRZ2MzUnlhVzVuWEc1Y2JpQWdJQ0JjSW1admJ5eGlZWEpjSWlBdFBpQmJYQ0ptYjI5Y0lpd2dYQ0ppWVhKY0lsMWNibHh1SUNBZ0lFQndZWEpoYlNCYmMzUnlhVzVuWFZ4dUlDQWdJRUJ5WlhSMWNtNGdXMkZ5Y21GNVhWeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnpjR3hwZEVOdmJXMWhSR1ZzYVcxcGRHVmtJRDBnS0haaGJIVmxLU0E5UGlCcGMxTjBjbWx1WnloMllXeDFaU2tnUHlCMllXeDFaUzV6Y0d4cGRDZ3ZMRnhjY3lvdktTQTZJRnQyWVd4MVpWMDdYRzVjYmk4cVhHNGdJQ0FnVTNCc2FYUWdjM0JoWTJVdFpHVnNhVzFwZEdWa0lITjBjbWx1WjF4dVhHNGdJQ0FnWENKbWIyOGdZbUZ5WENJZ0xUNGdXMXdpWm05dlhDSXNJRndpWW1GeVhDSmRYRzVjYmlBZ0lDQkFjR0Z5WVcwZ1czTjBjbWx1WjExY2JpQWdJQ0JBY21WMGRYSnVJRnRoY25KaGVWMWNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdjM0JzYVhSVGNHRmpaVVJsYkdsdGFYUmxaQ0E5SUNoMllXeDFaU2tnUFQ0Z2FYTlRkSEpwYm1jb2RtRnNkV1VwSUQ4Z2RtRnNkV1V1YzNCc2FYUW9KeUFuS1NBNklGdDJZV3gxWlYwN1hHNWNiaThxWEc0Z0lDQWdRMjl1ZG1WeWRDQnVkVzFpWlhJZ2RHOGdlQ0JrWldOcGJXRnNJSEJzWVdObGMxeHVYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkWEc0Z0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZFhHNGdJQ0FnUUhKbGRIVnliaUJiYm5WdFltVnlYVnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0IwYjBSbFkybHRZV3dnUFNBb2JuVnRMQ0J3Y21WamFYTnBiMjRnUFNBeUtTQTlQaUI3WEc0Z0lDQWdjSEpsWTJsemFXOXVJRDBnTVRBZ0tpb2djSEpsWTJsemFXOXVPMXh1SUNBZ0lISmxkSFZ5YmlCTllYUm9Mbkp2ZFc1a0tHNTFiU0FxSUhCeVpXTnBjMmx2YmlrZ0x5QndjbVZqYVhOcGIyNDdYRzU5TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy91dGlscy5qc1xuICoqIG1vZHVsZSBpZCA9IDIxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGVmYXVsdFByb3BzID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kZWZhdWx0LXByb3BzJyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IF9kZWZhdWx0UHJvcHMub3BhY2l0eVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OWhiSEJvWVM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPMEZCUVVFN08ydENRVVZsTzBGQlExZzdRVUZFVnl4RElpd2labWxzWlNJNkltRnNjR2hoTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlxZG1GdVpHVnlaRzlsY3k5RGIyUmxMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3SUc5d1lXTnBkSGtnZlNCbWNtOXRJQ2N1TDNObGRIUnBibWR6TDJSbFptRjFiSFF0Y0hKdmNITW5PMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0I3WEc0Z0lDQWdaR1ZtWVhWc2RGQnliM0J6T2lCdmNHRmphWFI1WEc1OU95SmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9hbHBoYS5qc1xuICoqIG1vZHVsZSBpZCA9IDIyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdW5pdCA9IHJlcXVpcmUoJy4vdW5pdCcpO1xuXG52YXIgX3VuaXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdW5pdCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgdW5pdDogJ2RlZycsXG4gICAgICAgIHR5cGU6IF91bml0Mi5kZWZhdWx0XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OWhibWRzWlM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPMEZCUVVFN096czdPenRyUWtGRlpUdEJRVU5ZTEd0Q1FVRmpPMEZCUTFZc1kwRkJUU3hMUVVSSk8wRkJSVlk3UVVGR1ZUdEJRVVJJTEVNaUxDSm1hV3hsSWpvaVlXNW5iR1V1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMnAyWVc1a1pYSmtiMlZ6TDBOdlpHVXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSFZ1YVhSVWVYQmxJR1p5YjIwZ0p5NHZkVzVwZENjN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElIdGNiaUFnSUNCa1pXWmhkV3gwVUhKdmNITTZJSHRjYmlBZ0lDQWdJQ0FnZFc1cGREb2dKMlJsWnljc1hHNGdJQ0FnSUNBZ0lIUjVjR1U2SUhWdWFYUlVlWEJsWEc0Z0lDQWdmVnh1ZlRzaVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2FuZ2xlLmpzXG4gKiogbW9kdWxlIGlkID0gMjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZ2IgPSByZXF1aXJlKCcuL3JnYicpO1xuXG52YXIgX3JnYjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZ2IpO1xuXG52YXIgX2hzbCA9IHJlcXVpcmUoJy4vaHNsJyk7XG5cbnZhciBfaHNsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hzbCk7XG5cbnZhciBfaGV4ID0gcmVxdWlyZSgnLi9oZXgnKTtcblxudmFyIF9oZXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGV4KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGNvbG9yVHlwZXMgPSBbX3JnYjIuZGVmYXVsdCwgX2hzbDIuZGVmYXVsdCwgX2hleDIuZGVmYXVsdF07XG52YXIgbnVtQ29sb3JUeXBlcyA9IGNvbG9yVHlwZXMubGVuZ3RoO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgZGVmYXVsdFByb3BzOiBfZXh0ZW5kcyh7fSwgX3JnYjIuZGVmYXVsdC5kZWZhdWx0UHJvcHMsIF9oc2wyLmRlZmF1bHQuZGVmYXVsdFByb3BzKSxcblxuICAgIHRlc3Q6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gX3JnYjIuZGVmYXVsdC50ZXN0KHZhbHVlKSB8fCBfaGV4Mi5kZWZhdWx0LnRlc3QodmFsdWUpIHx8IF9oc2wyLmRlZmF1bHQudGVzdCh2YWx1ZSk7XG4gICAgfSxcblxuICAgIHNwbGl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1Db2xvclR5cGVzOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChjb2xvclR5cGVzW2ldLnRlc3QodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbG9yVHlwZXNbaV0uc3BsaXQodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlcy5SZWQgIT09IHVuZGVmaW5lZCA/IF9yZ2IyLmRlZmF1bHQuY29tYmluZSh2YWx1ZXMpIDogX2hzbDIuZGVmYXVsdC5jb21iaW5lKHZhbHVlcyk7XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OWpiMnh2Y2k1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3UVVGQlFUczdPenRCUVVOQk96czdPMEZCUTBFN096czdPenRCUVVWQkxFbEJRVTBzWVVGQllTdzJRMEZCYmtJN1FVRkRRU3hKUVVGTkxHZENRVUZuUWl4WFFVRlhMRTFCUVdwRE96dHJRa0ZGWlR0QlFVTllMQ3RDUVVGdFFpeGpRVUZKTEZsQlFYWkNMRVZCUVhkRExHTkJRVWtzV1VGQk5VTXNRMEZFVnpzN1FVRkhXQ3hWUVVGTkxGVkJRVU1zUzBGQlJEdEJRVUZCTEdWQlFWY3NZMEZCU1N4SlFVRktMRU5CUVZNc1MwRkJWQ3hMUVVGdFFpeGpRVUZKTEVsQlFVb3NRMEZCVXl4TFFVRlVMRU5CUVc1Q0xFbEJRWE5ETEdOQlFVa3NTVUZCU2l4RFFVRlRMRXRCUVZRc1EwRkJha1E3UVVGQlFTeExRVWhMT3p0QlFVdFlMRmRCUVU4c1ZVRkJReXhMUVVGRUxFVkJRVmM3UVVGRFpDeGhRVUZMTEVsQlFVa3NTVUZCU1N4RFFVRmlMRVZCUVdkQ0xFbEJRVWtzWVVGQmNFSXNSVUZCYlVNc1IwRkJia01zUlVGQmQwTTdRVUZEY0VNc1owSkJRVWtzVjBGQlZ5eERRVUZZTEVWQlFXTXNTVUZCWkN4RFFVRnRRaXhMUVVGdVFpeERRVUZLTEVWQlFTdENPMEZCUXpOQ0xIVkNRVUZQTEZkQlFWY3NRMEZCV0N4RlFVRmpMRXRCUVdRc1EwRkJiMElzUzBGQmNFSXNRMEZCVUR0QlFVTklPMEZCUTBvN1FVRkRTaXhMUVZoVk96dEJRV0ZZTEdGQlFWTXNWVUZCUXl4TlFVRkVPMEZCUVVFc1pVRkJZU3hQUVVGUExFZEJRVkFzUzBGQlpTeFRRVUZvUWl4SFFVRTJRaXhqUVVGSkxFOUJRVW9zUTBGQldTeE5RVUZhTEVOQlFUZENMRWRCUVcxRUxHTkJRVWtzVDBGQlNpeERRVUZaTEUxQlFWb3NRMEZCTDBRN1FVRkJRVHRCUVdKRkxFTWlMQ0ptYVd4bElqb2lZMjlzYjNJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDJwMllXNWtaWEprYjJWekwwTnZaR1V2Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhKbllpQm1jbTl0SUNjdUwzSm5ZaWM3WEc1cGJYQnZjblFnYUhOc0lHWnliMjBnSnk0dmFITnNKenRjYm1sdGNHOXlkQ0JvWlhnZ1puSnZiU0FuTGk5b1pYZ25PMXh1WEc1amIyNXpkQ0JqYjJ4dmNsUjVjR1Z6SUQwZ1czSm5ZaXdnYUhOc0xDQm9aWGhkTzF4dVkyOXVjM1FnYm5WdFEyOXNiM0pVZVhCbGN5QTlJR052Ykc5eVZIbHdaWE11YkdWdVozUm9PMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0I3WEc0Z0lDQWdaR1ZtWVhWc2RGQnliM0J6T2lCN0lDNHVMbkpuWWk1a1pXWmhkV3gwVUhKdmNITXNJQzR1TG1oemJDNWtaV1poZFd4MFVISnZjSE1nZlN4Y2JseHVJQ0FnSUhSbGMzUTZJQ2gyWVd4MVpTa2dQVDRnY21kaUxuUmxjM1FvZG1Gc2RXVXBJSHg4SUdobGVDNTBaWE4wS0haaGJIVmxLU0I4ZkNCb2Myd3VkR1Z6ZENoMllXeDFaU2tzWEc1Y2JpQWdJQ0J6Y0d4cGREb2dLSFpoYkhWbEtTQTlQaUI3WEc0Z0lDQWdJQ0FnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z2JuVnRRMjlzYjNKVWVYQmxjenNnYVNzcktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9ZMjlzYjNKVWVYQmxjMXRwWFM1MFpYTjBLSFpoYkhWbEtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQmpiMnh2Y2xSNWNHVnpXMmxkTG5Od2JHbDBLSFpoYkhWbEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgwc1hHNWNiaUFnSUNCamIyMWlhVzVsT2lBb2RtRnNkV1Z6S1NBOVBpQW9kbUZzZFdWekxsSmxaQ0FoUFQwZ2RXNWtaV1pwYm1Wa0tTQS9JSEpuWWk1amIyMWlhVzVsS0haaGJIVmxjeWtnT2lCb2Myd3VZMjl0WW1sdVpTaDJZV3gxWlhNcFhHNTlPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvY29sb3IuanNcbiAqKiBtb2R1bGUgaWQgPSAyNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbnZhciBGTE9BVF9SRUdFWCA9IC8oLSk/KFxcZFtcXGRcXC5dKikvZztcbnZhciBnZW5lcmF0ZVRva2VuID0gZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgcmV0dXJuICckeycgKyB0b2tlbiArICd9Jztcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcblxuICAgIHRlc3Q6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgbWF0Y2hlcyA9IHZhbHVlLm1hdGNoKEZMT0FUX1JFR0VYKTtcbiAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMuaXNBcnJheSkobWF0Y2hlcykgJiYgbWF0Y2hlcy5sZW5ndGggPiAxO1xuICAgIH0sXG5cbiAgICB0ZW1wbGF0ZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBjb3VudGVyID0gMDtcbiAgICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoRkxPQVRfUkVHRVgsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBnZW5lcmF0ZVRva2VuKGNvdW50ZXIrKyk7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBzcGxpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBzcGxpdFZhbHVlID0ge307XG5cbiAgICAgICAgdmFsdWUubWF0Y2goRkxPQVRfUkVHRVgpLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBpKSB7XG4gICAgICAgICAgICByZXR1cm4gc3BsaXRWYWx1ZVtpXSA9IHZhbHVlO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gc3BsaXRWYWx1ZTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogZnVuY3Rpb24gKHZhbHVlcywgdGVtcGxhdGUpIHtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHZhbHVlcykge1xuICAgICAgICAgICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGUgPSB0ZW1wbGF0ZS5yZXBsYWNlKGdlbmVyYXRlVG9rZW4oa2V5KSwgdmFsdWVzW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgIH1cblxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OWpiMjF3YkdWNExtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3UVVGQlFUczdRVUZGUVN4SlFVRk5MR05CUVdNc2EwSkJRWEJDTzBGQlEwRXNTVUZCVFN4blFrRkJaMElzVlVGQlF5eExRVUZFTzBGQlFVRXNWMEZCVnl4UFFVRlBMRXRCUVZBc1IwRkJaU3hIUVVFeFFqdEJRVUZCTEVOQlFYUkNPenRyUWtGRlpUczdRVUZGV0N4VlFVRk5MRlZCUVVNc1MwRkJSQ3hGUVVGWE8wRkJRMklzV1VGQlRTeFZRVUZWTEUxQlFVMHNTMEZCVGl4RFFVRlpMRmRCUVZvc1EwRkJhRUk3UVVGRFFTeGxRVUZSTEc5Q1FVRlJMRTlCUVZJc1MwRkJiMElzVVVGQlVTeE5RVUZTTEVkQlFXbENMRU5CUVRkRE8wRkJRMGdzUzBGTVZUczdRVUZQV0N4alFVRlZMRlZCUVVNc1MwRkJSQ3hGUVVGWE8wRkJRMnBDTEZsQlFVa3NWVUZCVlN4RFFVRmtPMEZCUTBFc1pVRkJUeXhOUVVGTkxFOUJRVTRzUTBGQll5eFhRVUZrTEVWQlFUSkNPMEZCUVVFc2JVSkJRVTBzWTBGQll5eFRRVUZrTEVOQlFVNDdRVUZCUVN4VFFVRXpRaXhEUVVGUU8wRkJRMGdzUzBGV1ZUczdRVUZaV0N4WFFVRlBMRlZCUVVNc1MwRkJSQ3hGUVVGWE8wRkJRMlFzV1VGQlRTeGhRVUZoTEVWQlFXNUNPenRCUVVWQkxHTkJRVTBzUzBGQlRpeERRVUZaTEZkQlFWb3NSVUZCZVVJc1QwRkJla0lzUTBGQmFVTXNWVUZCUXl4TFFVRkVMRVZCUVZFc1EwRkJVanRCUVVGQkxHMUNRVUZqTEZkQlFWY3NRMEZCV0N4SlFVRm5RaXhMUVVFNVFqdEJRVUZCTEZOQlFXcERPenRCUVVWQkxHVkJRVThzVlVGQlVEdEJRVU5JTEV0QmJFSlZPenRCUVc5Q1dDeGhRVUZUTEZWQlFVTXNUVUZCUkN4RlFVRlRMRkZCUVZRc1JVRkJjMEk3UVVGRE0wSXNZVUZCU3l4SlFVRkpMRWRCUVZRc1NVRkJaMElzVFVGQmFFSXNSVUZCZDBJN1FVRkRjRUlzWjBKQlFVa3NUMEZCVHl4alFVRlFMRU5CUVhOQ0xFZEJRWFJDTEVOQlFVb3NSVUZCWjBNN1FVRkROVUlzTWtKQlFWY3NVMEZCVXl4UFFVRlVMRU5CUVdsQ0xHTkJRV01zUjBGQlpDeERRVUZxUWl4RlFVRnhReXhQUVVGUExFZEJRVkFzUTBGQmNrTXNRMEZCV0R0QlFVTklPMEZCUTBvN08wRkJSVVFzWlVGQlR5eFJRVUZRTzBGQlEwZzdPMEZCTlVKVkxFTWlMQ0ptYVd4bElqb2lZMjl0Y0d4bGVDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmFuWmhibVJsY21SdlpYTXZRMjlrWlM5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2V5QnBjMEZ5Y21GNUlIMGdabkp2YlNBbkxpNHZhVzVqTDNWMGFXeHpKenRjYmx4dVkyOXVjM1FnUmt4UFFWUmZVa1ZIUlZnZ1BTQXZLQzBwUHloY1hHUmJYRnhrWEZ3dVhTb3BMMmM3WEc1amIyNXpkQ0JuWlc1bGNtRjBaVlJ2YTJWdUlEMGdLSFJ2YTJWdUtTQTlQaUFuSkhzbklDc2dkRzlyWlc0Z0t5QW5mU2M3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUh0Y2JseHVJQ0FnSUhSbGMzUTZJQ2gyWVd4MVpTa2dQVDRnZTF4dUlDQWdJQ0FnSUNCamIyNXpkQ0J0WVhSamFHVnpJRDBnZG1Gc2RXVXViV0YwWTJnb1JreFBRVlJmVWtWSFJWZ3BPMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdLR2x6UVhKeVlYa29iV0YwWTJobGN5a2dKaVlnYldGMFkyaGxjeTVzWlc1bmRHZ2dQaUF4S1R0Y2JpQWdJQ0I5TEZ4dVhHNGdJQ0FnZEdWdGNHeGhkR1U2SUNoMllXeDFaU2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQnNaWFFnWTI5MWJuUmxjaUE5SURBN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMllXeDFaUzV5WlhCc1lXTmxLRVpNVDBGVVgxSkZSMFZZTENBb0tTQTlQaUJuWlc1bGNtRjBaVlJ2YTJWdUtHTnZkVzUwWlhJckt5a3BPMXh1SUNBZ0lIMHNYRzVjYmlBZ0lDQnpjR3hwZERvZ0tIWmhiSFZsS1NBOVBpQjdYRzRnSUNBZ0lDQWdJR052Ym5OMElITndiR2wwVm1Gc2RXVWdQU0I3ZlR0Y2JseHVJQ0FnSUNBZ0lDQjJZV3gxWlM1dFlYUmphQ2hHVEU5QlZGOVNSVWRGV0NrdVptOXlSV0ZqYUNnb2RtRnNkV1VzSUdrcElEMCtJSE53YkdsMFZtRnNkV1ZiYVYwZ1BTQjJZV3gxWlNrN1hHNWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlITndiR2wwVm1Gc2RXVTdYRzRnSUNBZ2ZTeGNibHh1SUNBZ0lHTnZiV0pwYm1VNklDaDJZV3gxWlhNc0lIUmxiWEJzWVhSbEtTQTlQaUI3WEc0Z0lDQWdJQ0FnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUIyWVd4MVpYTXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2gyWVd4MVpYTXVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2EyVjVLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSbGJYQnNZWFJsSUQwZ2RHVnRjR3hoZEdVdWNtVndiR0ZqWlNoblpXNWxjbUYwWlZSdmEyVnVLR3RsZVNrc0lIWmhiSFZsYzF0clpYbGRLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwWlcxd2JHRjBaVHRjYmlBZ0lDQjlYRzVjYm4wN0lsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2NvbXBsZXguanNcbiAqKiBtb2R1bGUgaWQgPSAyNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3JnYiA9IHJlcXVpcmUoJy4vcmdiJyk7XG5cbnZhciBfcmdiMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JnYik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IF9yZ2IyLmRlZmF1bHQuZGVmYXVsdFByb3BzLFxuXG4gICAgdGVzdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mKCcjJykgPiAtMTtcbiAgICB9LFxuXG4gICAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgciA9IHZvaWQgMCxcbiAgICAgICAgICAgIGcgPSB2b2lkIDAsXG4gICAgICAgICAgICBiID0gdm9pZCAwO1xuXG4gICAgICAgIC8vIElmIHdlIGhhdmUgNiBjaGFyYWN0ZXJzLCBpZSAjRkYwMDAwXG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiA0KSB7XG4gICAgICAgICAgICByID0gdmFsdWUuc3Vic3RyKDEsIDIpO1xuICAgICAgICAgICAgZyA9IHZhbHVlLnN1YnN0cigzLCAyKTtcbiAgICAgICAgICAgIGIgPSB2YWx1ZS5zdWJzdHIoNSwgMik7XG5cbiAgICAgICAgICAgIC8vIE9yIHdlIGhhdmUgMyBjaGFyYWN0ZXJzLCBpZSAjRjAwXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgciA9IHZhbHVlLnN1YnN0cigxLCAxKTtcbiAgICAgICAgICAgICAgICBnID0gdmFsdWUuc3Vic3RyKDIsIDEpO1xuICAgICAgICAgICAgICAgIGIgPSB2YWx1ZS5zdWJzdHIoMywgMSk7XG4gICAgICAgICAgICAgICAgciArPSByO1xuICAgICAgICAgICAgICAgIGcgKz0gZztcbiAgICAgICAgICAgICAgICBiICs9IGI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFJlZDogcGFyc2VJbnQociwgMTYpLFxuICAgICAgICAgICAgR3JlZW46IHBhcnNlSW50KGcsIDE2KSxcbiAgICAgICAgICAgIEJsdWU6IHBhcnNlSW50KGIsIDE2KSxcbiAgICAgICAgICAgIEFscGhhOiAxXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuIF9yZ2IyLmRlZmF1bHQuY29tYmluZSh2YWx1ZXMpO1xuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTlvWlhndWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenRCUVVGQk96czdPenM3YTBKQlJXVTdRVUZEV0N4clFrRkJZeXhqUVVGSkxGbEJSRkE3TzBGQlIxZ3NWVUZCVFN4VlFVRkRMRXRCUVVRN1FVRkJRU3hsUVVGWkxGTkJRVk1zVFVGQlRTeFBRVUZPTEVOQlFXTXNSMEZCWkN4SlFVRnhRaXhEUVVGRExFTkJRVE5ETzBGQlFVRXNTMEZJU3pzN1FVRkxXQ3hYUVVGUExGVkJRVU1zUzBGQlJDeEZRVUZYTzBGQlEyUXNXVUZCU1N4VlFVRktPMWxCUVU4c1ZVRkJVRHRaUVVGVkxGVkJRVlk3T3p0QlFVZEJMRmxCUVVrc1RVRkJUU3hOUVVGT0xFZEJRV1VzUTBGQmJrSXNSVUZCYzBJN1FVRkRiRUlzWjBKQlFVa3NUVUZCVFN4TlFVRk9MRU5CUVdFc1EwRkJZaXhGUVVGblFpeERRVUZvUWl4RFFVRktPMEZCUTBFc1owSkJRVWtzVFVGQlRTeE5RVUZPTEVOQlFXRXNRMEZCWWl4RlFVRm5RaXhEUVVGb1FpeERRVUZLTzBGQlEwRXNaMEpCUVVrc1RVRkJUU3hOUVVGT0xFTkJRV0VzUTBGQllpeEZRVUZuUWl4RFFVRm9RaXhEUVVGS096czdRVUZIU0N4VFFVNUVMRTFCVFU4N1FVRkRTQ3h2UWtGQlNTeE5RVUZOTEUxQlFVNHNRMEZCWVN4RFFVRmlMRVZCUVdkQ0xFTkJRV2hDTEVOQlFVbzdRVUZEUVN4dlFrRkJTU3hOUVVGTkxFMUJRVTRzUTBGQllTeERRVUZpTEVWQlFXZENMRU5CUVdoQ0xFTkJRVW83UVVGRFFTeHZRa0ZCU1N4TlFVRk5MRTFCUVU0c1EwRkJZU3hEUVVGaUxFVkJRV2RDTEVOQlFXaENMRU5CUVVvN1FVRkRRU3h4UWtGQlN5eERRVUZNTzBGQlEwRXNjVUpCUVVzc1EwRkJURHRCUVVOQkxIRkNRVUZMTEVOQlFVdzdRVUZEU0RzN1FVRkZSQ3hsUVVGUE8wRkJRMGdzYVVKQlFVc3NVMEZCVXl4RFFVRlVMRVZCUVZrc1JVRkJXaXhEUVVSR08wRkJSVWdzYlVKQlFVOHNVMEZCVXl4RFFVRlVMRVZCUVZrc1JVRkJXaXhEUVVaS08wRkJSMGdzYTBKQlFVMHNVMEZCVXl4RFFVRlVMRVZCUVZrc1JVRkJXaXhEUVVoSU8wRkJTVWdzYlVKQlFVODdRVUZLU2l4VFFVRlFPMEZCVFVnc1MwRTVRbFU3TzBGQlowTllMR0ZCUVZNc1ZVRkJReXhOUVVGRU8wRkJRVUVzWlVGQldTeGpRVUZKTEU5QlFVb3NRMEZCV1N4TlFVRmFMRU5CUVZvN1FVRkJRVHRCUVdoRFJTeERJaXdpWm1sc1pTSTZJbWhsZUM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YW5aaGJtUmxjbVJ2WlhNdlEyOWtaUzl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnY21kaUlHWnliMjBnSnk0dmNtZGlKenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnZTF4dUlDQWdJR1JsWm1GMWJIUlFjbTl3Y3pvZ2NtZGlMbVJsWm1GMWJIUlFjbTl3Y3l4Y2JseHVJQ0FnSUhSbGMzUTZJQ2gyWVd4MVpTa2dQVDRnS0haaGJIVmxJQ1ltSUhaaGJIVmxMbWx1WkdWNFQyWW9KeU1uS1NBK0lDMHhLU3hjYmx4dUlDQWdJSE53YkdsME9pQW9kbUZzZFdVcElEMCtJSHRjYmlBZ0lDQWdJQ0FnYkdWMElISXNJR2NzSUdJN1hHNWNiaUFnSUNBZ0lDQWdMeThnU1dZZ2QyVWdhR0YyWlNBMklHTm9ZWEpoWTNSbGNuTXNJR2xsSUNOR1JqQXdNREJjYmlBZ0lDQWdJQ0FnYVdZZ0tIWmhiSFZsTG14bGJtZDBhQ0ErSURRcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhJZ1BTQjJZV3gxWlM1emRXSnpkSElvTVN3Z01pazdYRzRnSUNBZ0lDQWdJQ0FnSUNCbklEMGdkbUZzZFdVdWMzVmljM1J5S0RNc0lESXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1lpQTlJSFpoYkhWbExuTjFZbk4wY2lnMUxDQXlLVHRjYmx4dUlDQWdJQ0FnSUNBdkx5QlBjaUIzWlNCb1lYWmxJRE1nWTJoaGNtRmpkR1Z5Y3l3Z2FXVWdJMFl3TUZ4dUlDQWdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjaUE5SUhaaGJIVmxMbk4xWW5OMGNpZ3hMQ0F4S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2NnUFNCMllXeDFaUzV6ZFdKemRISW9NaXdnTVNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JpSUQwZ2RtRnNkV1V1YzNWaWMzUnlLRE1zSURFcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnY2lBclBTQnlPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1p5QXJQU0JuTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZaUFyUFNCaU8xeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lGSmxaRG9nY0dGeWMyVkpiblFvY2l3Z01UWXBMRnh1SUNBZ0lDQWdJQ0FnSUNBZ1IzSmxaVzQ2SUhCaGNuTmxTVzUwS0djc0lERTJLU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lFSnNkV1U2SUhCaGNuTmxTVzUwS0dJc0lERTJLU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lFRnNjR2hoT2lBeFhHNGdJQ0FnSUNBZ0lIMDdYRzRnSUNBZ2ZTeGNibHh1SUNBZ0lHTnZiV0pwYm1VNklDaDJZV3gxWlhNcElEMCtJSEpuWWk1amIyMWlhVzVsS0haaGJIVmxjeWxjYm4wN0lsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2hleC5qc1xuICoqIG1vZHVsZSBpZCA9IDI2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGVmYXVsdFByb3BzID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kZWZhdWx0LXByb3BzJyk7XG5cbnZhciBfZGljdGlvbmFyeSA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGljdGlvbmFyeScpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgSHVlOiB7XG4gICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICBtYXg6IDM2MFxuICAgICAgICB9LFxuICAgICAgICBTYXR1cmF0aW9uOiBfZGVmYXVsdFByb3BzLnBlcmNlbnQsXG4gICAgICAgIExpZ2h0bmVzczogX2RlZmF1bHRQcm9wcy5wZXJjZW50LFxuICAgICAgICBBbHBoYTogX2RlZmF1bHRQcm9wcy5vcGFjaXR5XG4gICAgfSxcblxuICAgIHRlc3Q6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgJiYgdmFsdWUuaW5kZXhPZignaHNsJykgPiAtMTtcbiAgICB9LFxuXG4gICAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gKDAsIF91dGlscy5nZXRDb2xvclZhbHVlcykodmFsdWUsIF9kaWN0aW9uYXJ5LmhzbCk7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMuY3JlYXRlRnVuY3Rpb25TdHJpbmcpKCgwLCBfdXRpbHMuY3JlYXRlRGVsaW1pdGVkKSh2YWx1ZXMsIF9kaWN0aW9uYXJ5LmhzbCwgJywgJywgMiksICdoc2xhJyk7XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OW9jMnd1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dEJRVUZCT3p0QlFVTkJPenRCUVVOQk96dHJRa0ZGWlR0QlFVTllMR3RDUVVGak8wRkJRMVlzWVVGQlN6dEJRVU5FTEdsQ1FVRkxMRU5CUkVvN1FVRkZSQ3hwUWtGQlN6dEJRVVpLTEZOQlJFczdRVUZMVml4NVEwRk1WVHRCUVUxV0xIZERRVTVWTzBGQlQxWTdRVUZRVlN4TFFVUklPenRCUVZkWUxGVkJRVTBzVlVGQlF5eExRVUZFTzBGQlFVRXNaVUZCV1N4VFFVRlRMRTFCUVUwc1QwRkJUaXhEUVVGakxFdEJRV1FzU1VGQmRVSXNRMEZCUXl4RFFVRTNRenRCUVVGQkxFdEJXRXM3TzBGQllWZ3NWMEZCVHl4VlFVRkRMRXRCUVVRN1FVRkJRU3hsUVVGWExESkNRVUZsTEV0QlFXWXNhMEpCUVZnN1FVRkJRU3hMUVdKSk96dEJRV1ZZTEdGQlFWTXNWVUZCUXl4TlFVRkVPMEZCUVVFc1pVRkJXU3hwUTBGQmNVSXNORUpCUVdkQ0xFMUJRV2hDTEcxQ1FVRnJReXhKUVVGc1F5eEZRVUYzUXl4RFFVRjRReXhEUVVGeVFpeEZRVUZwUlN4TlFVRnFSU3hEUVVGYU8wRkJRVUU3UVVGbVJTeERJaXdpWm1sc1pTSTZJbWh6YkM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YW5aaGJtUmxjbVJ2WlhNdlEyOWtaUzl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZXlCd1pYSmpaVzUwTENCdmNHRmphWFI1SUgwZ1puSnZiU0FuTGk5elpYUjBhVzVuY3k5a1pXWmhkV3gwTFhCeWIzQnpKenRjYm1sdGNHOXlkQ0I3SUdoemJDQmhjeUJvYzJ4VVpYSnRjeUI5SUdaeWIyMGdKeTR2YzJWMGRHbHVaM012WkdsamRHbHZibUZ5ZVNjN1hHNXBiWEJ2Y25RZ2V5QmpjbVZoZEdWRVpXeHBiV2wwWldRc0lHTnlaV0YwWlVaMWJtTjBhVzl1VTNSeWFXNW5MQ0JuWlhSRGIyeHZjbFpoYkhWbGN5QjlJR1p5YjIwZ0p5NHVMMmx1WXk5MWRHbHNjeWM3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUh0Y2JpQWdJQ0JrWldaaGRXeDBVSEp2Y0hNNklIdGNiaUFnSUNBZ0lDQWdTSFZsT2lCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J0YVc0NklEQXNYRzRnSUNBZ0lDQWdJQ0FnSUNCdFlYZzZJRE0yTUZ4dUlDQWdJQ0FnSUNCOUxGeHVJQ0FnSUNBZ0lDQlRZWFIxY21GMGFXOXVPaUJ3WlhKalpXNTBMRnh1SUNBZ0lDQWdJQ0JNYVdkb2RHNWxjM002SUhCbGNtTmxiblFzWEc0Z0lDQWdJQ0FnSUVGc2NHaGhPaUJ2Y0dGamFYUjVYRzRnSUNBZ2ZTeGNibHh1SUNBZ0lIUmxjM1E2SUNoMllXeDFaU2tnUFQ0Z0tIWmhiSFZsSUNZbUlIWmhiSFZsTG1sdVpHVjRUMllvSjJoemJDY3BJRDRnTFRFcExGeHVYRzRnSUNBZ2MzQnNhWFE2SUNoMllXeDFaU2tnUFQ0Z1oyVjBRMjlzYjNKV1lXeDFaWE1vZG1Gc2RXVXNJR2h6YkZSbGNtMXpLU3hjYmx4dUlDQWdJR052YldKcGJtVTZJQ2gyWVd4MVpYTXBJRDArSUdOeVpXRjBaVVoxYm1OMGFXOXVVM1J5YVc1bktHTnlaV0YwWlVSbGJHbHRhWFJsWkNoMllXeDFaWE1zSUdoemJGUmxjbTF6TENBbkxDQW5MQ0F5S1N3Z0oyaHpiR0VuS1Z4dWZUdGNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvaHNsLmpzXG4gKiogbW9kdWxlIGlkID0gMjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF91bml0ID0gcmVxdWlyZSgnLi91bml0Jyk7XG5cbnZhciBfdW5pdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91bml0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICB1bml0OiAncHgnLFxuICAgICAgICB0eXBlOiBfdW5pdDIuZGVmYXVsdFxuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTl3ZUM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPMEZCUVVFN096czdPenRyUWtGRlpUdEJRVU5ZTEd0Q1FVRmpPMEZCUTFZc1kwRkJUU3hKUVVSSk8wRkJSVlk3UVVGR1ZUdEJRVVJJTEVNaUxDSm1hV3hsSWpvaWNIZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwycDJZVzVrWlhKa2IyVnpMME52WkdVdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElIVnVhWFJVZVhCbElHWnliMjBnSnk0dmRXNXBkQ2M3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUh0Y2JpQWdJQ0JrWldaaGRXeDBVSEp2Y0hNNklIdGNiaUFnSUNBZ0lDQWdkVzVwZERvZ0ozQjRKeXhjYmlBZ0lDQWdJQ0FnZEhsd1pUb2dkVzVwZEZSNWNHVmNiaUFnSUNCOVhHNTlPeUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvcHguanNcbiAqKiBtb2R1bGUgaWQgPSAyOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbnZhciBfZGljdGlvbmFyeSA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGljdGlvbmFyeScpO1xuXG52YXIgX2RlZmF1bHRQcm9wcyA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGVmYXVsdC1wcm9wcycpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIFJlZDogX2RlZmF1bHRQcm9wcy5yZ2IsXG4gICAgICAgIEdyZWVuOiBfZGVmYXVsdFByb3BzLnJnYixcbiAgICAgICAgQmx1ZTogX2RlZmF1bHRQcm9wcy5yZ2IsXG4gICAgICAgIEFscGhhOiBfZGVmYXVsdFByb3BzLm9wYWNpdHlcbiAgICB9LFxuXG4gICAgdGVzdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mKCdyZ2InKSA+IC0xO1xuICAgIH0sXG5cbiAgICBzcGxpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzLmdldENvbG9yVmFsdWVzKSh2YWx1ZSwgX2RpY3Rpb25hcnkucmdiKTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICByZXR1cm4gKDAsIF91dGlscy5jcmVhdGVGdW5jdGlvblN0cmluZykoKDAsIF91dGlscy5jcmVhdGVEZWxpbWl0ZWQpKHZhbHVlcywgX2RpY3Rpb25hcnkucmdiLCAnLCAnLCAyKSwgJ3JnYmEnKTtcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5eVoySXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0QlFVRkJPenRCUVVOQk96dEJRVU5CT3p0clFrRkZaVHRCUVVOWUxHdENRVUZqTzBGQlExWXNPRUpCUkZVN1FVRkZWaXhuUTBGR1ZUdEJRVWRXTEN0Q1FVaFZPMEZCU1ZZN1FVRktWU3hMUVVSSU96dEJRVkZZTEZWQlFVMHNWVUZCUXl4TFFVRkVPMEZCUVVFc1pVRkJXU3hUUVVGVExFMUJRVTBzVDBGQlRpeERRVUZqTEV0QlFXUXNTVUZCZFVJc1EwRkJReXhEUVVFM1F6dEJRVUZCTEV0QlVrczdPMEZCVlZnc1YwRkJUeXhWUVVGRExFdEJRVVE3UVVGQlFTeGxRVUZYTERKQ1FVRmxMRXRCUVdZc2EwSkJRVmc3UVVGQlFTeExRVlpKT3p0QlFWbFlMR0ZCUVZNc1ZVRkJReXhOUVVGRU8wRkJRVUVzWlVGQldTeHBRMEZCY1VJc05FSkJRV2RDTEUxQlFXaENMRzFDUVVGclF5eEpRVUZzUXl4RlFVRjNReXhEUVVGNFF5eERRVUZ5UWl4RlFVRnBSU3hOUVVGcVJTeERRVUZhTzBGQlFVRTdRVUZhUlN4RElpd2labWxzWlNJNkluSm5ZaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZhblpoYm1SbGNtUnZaWE12UTI5a1pTOXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdleUJqY21WaGRHVkVaV3hwYldsMFpXUXNJR055WldGMFpVWjFibU4wYVc5dVUzUnlhVzVuTENCblpYUkRiMnh2Y2xaaGJIVmxjeUI5SUdaeWIyMGdKeTR1TDJsdVl5OTFkR2xzY3ljN1hHNXBiWEJ2Y25RZ2V5QnlaMklnWVhNZ2NtZGlWR1Z5YlhNZ2ZTQm1jbTl0SUNjdUwzTmxkSFJwYm1kekwyUnBZM1JwYjI1aGNua25PMXh1YVcxd2IzSjBJSHNnY21kaUlHRnpJR1JsWm1GMWJIUlNSMElzSUc5d1lXTnBkSGtnWVhNZ1pHVm1ZWFZzZEU5d1lXTnBkSGtnZlNCbWNtOXRJQ2N1TDNObGRIUnBibWR6TDJSbFptRjFiSFF0Y0hKdmNITW5PMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0I3WEc0Z0lDQWdaR1ZtWVhWc2RGQnliM0J6T2lCN1hHNGdJQ0FnSUNBZ0lGSmxaRG9nWkdWbVlYVnNkRkpIUWl4Y2JpQWdJQ0FnSUNBZ1IzSmxaVzQ2SUdSbFptRjFiSFJTUjBJc1hHNGdJQ0FnSUNBZ0lFSnNkV1U2SUdSbFptRjFiSFJTUjBJc1hHNGdJQ0FnSUNBZ0lFRnNjR2hoT2lCa1pXWmhkV3gwVDNCaFkybDBlVnh1SUNBZ0lIMHNYRzVjYmlBZ0lDQjBaWE4wT2lBb2RtRnNkV1VwSUQwK0lDaDJZV3gxWlNBbUppQjJZV3gxWlM1cGJtUmxlRTltS0NkeVoySW5LU0ErSUMweEtTeGNibHh1SUNBZ0lITndiR2wwT2lBb2RtRnNkV1VwSUQwK0lHZGxkRU52Ykc5eVZtRnNkV1Z6S0haaGJIVmxMQ0J5WjJKVVpYSnRjeWtzWEc1Y2JpQWdJQ0JqYjIxaWFXNWxPaUFvZG1Gc2RXVnpLU0E5UGlCamNtVmhkR1ZHZFc1amRHbHZibE4wY21sdVp5aGpjbVZoZEdWRVpXeHBiV2wwWldRb2RtRnNkV1Z6TENCeVoySlVaWEp0Y3l3Z0p5d2dKeXdnTWlrc0lDZHlaMkpoSnlsY2JuMDdJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9yZ2IuanNcbiAqKiBtb2R1bGUgaWQgPSAyOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIGN1cnJlbnQ6IDFcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5elkyRnNaUzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN2EwSkJRV1U3UVVGRFdDeHJRa0ZCWXp0QlFVTldMR2xDUVVGVE8wRkJSRU03UVVGRVNDeERJaXdpWm1sc1pTSTZJbk5qWVd4bExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5cWRtRnVaR1Z5Wkc5bGN5OURiMlJsTDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltVjRjRzl5ZENCa1pXWmhkV3gwSUh0Y2JpQWdJQ0JrWldaaGRXeDBVSEp2Y0hNNklIdGNiaUFnSUNBZ0lDQWdZM1Z5Y21WdWREb2dNVnh1SUNBZ0lIMWNibjA3SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvc2NhbGUuanNcbiAqKiBtb2R1bGUgaWQgPSAzMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NvbG9yID0gcmVxdWlyZSgnLi9jb2xvcicpO1xuXG52YXIgX2NvbG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbG9yKTtcblxudmFyIF9weCA9IHJlcXVpcmUoJy4vcHgnKTtcblxudmFyIF9kaWN0aW9uYXJ5ID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kaWN0aW9uYXJ5Jyk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHNoYWRvd1dpdGhvdXRDb2xvclRlcm1zID0gX2RpY3Rpb25hcnkuc2hhZG93LnNsaWNlKDAsIDQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgZGVmYXVsdFByb3BzOiBfZXh0ZW5kcyh7fSwgX2NvbG9yMi5kZWZhdWx0LmRlZmF1bHRQcm9wcywge1xuICAgICAgICBYOiBfcHguZGVmYXVsdFByb3BzLFxuICAgICAgICBZOiBfcHguZGVmYXVsdFByb3BzLFxuICAgICAgICBSYWRpdXM6IF9weC5kZWZhdWx0UHJvcHMsXG4gICAgICAgIFNwcmVhZDogX3B4LmRlZmF1bHRQcm9wc1xuICAgIH0pLFxuXG4gICAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgYml0cyA9ICgwLCBfdXRpbHMuc3BsaXRTcGFjZURlbGltaXRlZCkodmFsdWUpO1xuICAgICAgICB2YXIgaGFzUmVhY2hlZENvbG9yID0gZmFsc2U7XG4gICAgICAgIHZhciBjb2xvclByb3AgPSAnJztcbiAgICAgICAgdmFyIHNwbGl0VmFsdWUgPSB7fTtcblxuICAgICAgICBiaXRzLmZvckVhY2goZnVuY3Rpb24gKGJpdCwgaSkge1xuICAgICAgICAgICAgLy8gSWYgd2UndmUgcmVhY2hlZCB0aGUgY29sb3IgcHJvcHMsIGFwcGVuZCB0byBjb2xvciBzdHJpbmdcbiAgICAgICAgICAgIGlmIChoYXNSZWFjaGVkQ29sb3IgfHwgX2NvbG9yMi5kZWZhdWx0LnRlc3QoYml0KSkge1xuICAgICAgICAgICAgICAgIGhhc1JlYWNoZWRDb2xvciA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29sb3JQcm9wICs9IGJpdDtcblxuICAgICAgICAgICAgICAgIC8vIEVsc2UgcHJvY2VzcyBzaGFkb3cgdmFsdWVcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNwbGl0VmFsdWVbX2RpY3Rpb25hcnkuc2hhZG93W2ldXSA9IGJpdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBzcGxpdENvbG9yUHJvcHMgPSBfY29sb3IyLmRlZmF1bHQuc3BsaXQoY29sb3JQcm9wKTtcblxuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHNwbGl0VmFsdWUsIHsgc3BsaXRDb2xvclByb3BzOiBzcGxpdENvbG9yUHJvcHMgfSk7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMuY3JlYXRlRGVsaW1pdGVkKSh2YWx1ZXMsIHNoYWRvd1dpdGhvdXRDb2xvclRlcm1zLCAnICcpICsgX2NvbG9yMi5kZWZhdWx0LmNvbWJpbmUodmFsdWVzKTtcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5emFHRmtiM2N1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPMEZCUVVFN096czdRVUZEUVRzN1FVRkRRVHM3UVVGRFFUczdPenRCUVVWQkxFbEJRVTBzTUVKQlFUQkNMRzFDUVVGWkxFdEJRVm9zUTBGQmEwSXNRMEZCYkVJc1JVRkJjVUlzUTBGQmNrSXNRMEZCYUVNN08ydENRVVZsTzBGQlExZ3NLMEpCUTA4c1owSkJRVTBzV1VGRVlqdEJRVVZKTERKQ1FVWktPMEZCUjBrc01rSkJTRW83UVVGSlNTeG5RMEZLU2p0QlFVdEpPMEZCVEVvc1RVRkVWenM3UVVGVFdDeFhRVUZQTEZWQlFVTXNTMEZCUkN4RlFVRlhPMEZCUTJRc1dVRkJUU3hQUVVGUExHZERRVUZ2UWl4TFFVRndRaXhEUVVGaU8wRkJRMEVzV1VGQlNTeHJRa0ZCYTBJc1MwRkJkRUk3UVVGRFFTeFpRVUZKTEZsQlFWa3NSVUZCYUVJN1FVRkRRU3haUVVGSkxHRkJRV0VzUlVGQmFrSTdPMEZCUlVFc1lVRkJTeXhQUVVGTUxFTkJRV0VzVlVGQlF5eEhRVUZFTEVWQlFVMHNRMEZCVGl4RlFVRlpPenRCUVVWeVFpeG5Ra0ZCU1N4dFFrRkJiVUlzWjBKQlFVMHNTVUZCVGl4RFFVRlhMRWRCUVZnc1EwRkJka0lzUlVGQmQwTTdRVUZEY0VNc2EwTkJRV3RDTEVsQlFXeENPMEZCUTBFc05rSkJRV0VzUjBGQllqczdPMEZCUjBnc1lVRk1SQ3hOUVV0UE8wRkJRMGdzSzBKQlFWY3NiVUpCUVZrc1EwRkJXaXhEUVVGWUxFbEJRVFpDTEVkQlFUZENPMEZCUTBnN1FVRkRTaXhUUVZaRU96dEJRVmxCTEZsQlFVMHNhMEpCUVd0Q0xHZENRVUZOTEV0QlFVNHNRMEZCV1N4VFFVRmFMRU5CUVhoQ096dEJRVVZCTERSQ1FVRlpMRlZCUVZvc1NVRkJkMElzWjBOQlFYaENPMEZCUTBnc1MwRTVRbFU3TzBGQlowTllMR0ZCUVZNc1ZVRkJReXhOUVVGRU8wRkJRVUVzWlVGQldTdzBRa0ZCWjBJc1RVRkJhRUlzUlVGQmQwSXNkVUpCUVhoQ0xFVkJRV2xFTEVkQlFXcEVMRWxCUVhkRUxHZENRVUZOTEU5QlFVNHNRMEZCWXl4TlFVRmtMRU5CUVhCRk8wRkJRVUU3UVVGb1EwVXNReUlzSW1acGJHVWlPaUp6YUdGa2IzY3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwycDJZVzVrWlhKa2IyVnpMME52WkdVdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElHTnZiRzl5SUdaeWIyMGdKeTR2WTI5c2IzSW5PMXh1YVcxd2IzSjBJSHNnWkdWbVlYVnNkRkJ5YjNCeklHRnpJSEI0UkdWbVlYVnNkRkJ5YjNCeklIMGdabkp2YlNBbkxpOXdlQ2M3WEc1cGJYQnZjblFnZXlCemFHRmtiM2NnWVhNZ2MyaGhaRzkzVkdWeWJYTWdmU0JtY205dElDY3VMM05sZEhScGJtZHpMMlJwWTNScGIyNWhjbmtuTzF4dWFXMXdiM0owSUhzZ2MzQnNhWFJUY0dGalpVUmxiR2x0YVhSbFpDd2dZM0psWVhSbFJHVnNhVzFwZEdWa0lIMGdabkp2YlNBbkxpNHZhVzVqTDNWMGFXeHpKenRjYmx4dVkyOXVjM1FnYzJoaFpHOTNWMmwwYUc5MWRFTnZiRzl5VkdWeWJYTWdQU0J6YUdGa2IzZFVaWEp0Y3k1emJHbGpaU2d3TENBMEtUdGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdlMXh1SUNBZ0lHUmxabUYxYkhSUWNtOXdjem9nZTF4dUlDQWdJQ0FnSUNBdUxpNWpiMnh2Y2k1a1pXWmhkV3gwVUhKdmNITXNYRzRnSUNBZ0lDQWdJRmc2SUhCNFJHVm1ZWFZzZEZCeWIzQnpMRnh1SUNBZ0lDQWdJQ0JaT2lCd2VFUmxabUYxYkhSUWNtOXdjeXhjYmlBZ0lDQWdJQ0FnVW1Ga2FYVnpPaUJ3ZUVSbFptRjFiSFJRY205d2N5eGNiaUFnSUNBZ0lDQWdVM0J5WldGa09pQndlRVJsWm1GMWJIUlFjbTl3YzF4dUlDQWdJSDBzWEc1Y2JpQWdJQ0J6Y0d4cGREb2dLSFpoYkhWbEtTQTlQaUI3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJR0pwZEhNZ1BTQnpjR3hwZEZOd1lXTmxSR1ZzYVcxcGRHVmtLSFpoYkhWbEtUdGNiaUFnSUNBZ0lDQWdiR1YwSUdoaGMxSmxZV05vWldSRGIyeHZjaUE5SUdaaGJITmxPMXh1SUNBZ0lDQWdJQ0JzWlhRZ1kyOXNiM0pRY205d0lEMGdKeWM3WEc0Z0lDQWdJQ0FnSUd4bGRDQnpjR3hwZEZaaGJIVmxJRDBnZTMwN1hHNWNiaUFnSUNBZ0lDQWdZbWwwY3k1bWIzSkZZV05vS0NoaWFYUXNJR2twSUQwK0lIdGNiaUFnSUNBZ0lDQWdJQ0FnSUM4dklFbG1JSGRsSjNabElISmxZV05vWldRZ2RHaGxJR052Ykc5eUlIQnliM0J6TENCaGNIQmxibVFnZEc4Z1kyOXNiM0lnYzNSeWFXNW5YRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9hR0Z6VW1WaFkyaGxaRU52Ykc5eUlIeDhJR052Ykc5eUxuUmxjM1FvWW1sMEtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2hoYzFKbFlXTm9aV1JEYjJ4dmNpQTlJSFJ5ZFdVN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyOXNiM0pRY205d0lDczlJR0pwZER0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1JXeHpaU0J3Y205alpYTnpJSE5vWVdSdmR5QjJZV3gxWlZ4dUlDQWdJQ0FnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnpjR3hwZEZaaGJIVmxXM05vWVdSdmQxUmxjbTF6VzJsZFhTQTlJR0pwZER0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlNrN1hHNWNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2MzQnNhWFJEYjJ4dmNsQnliM0J6SUQwZ1kyOXNiM0l1YzNCc2FYUW9ZMjlzYjNKUWNtOXdLVHRjYmx4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZXlBdUxpNXpjR3hwZEZaaGJIVmxMQ0J6Y0d4cGRFTnZiRzl5VUhKdmNITWdmVHRjYmlBZ0lDQjlMRnh1WEc0Z0lDQWdZMjl0WW1sdVpUb2dLSFpoYkhWbGN5a2dQVDRnWTNKbFlYUmxSR1ZzYVcxcGRHVmtLSFpoYkhWbGN5d2djMmhoWkc5M1YybDBhRzkxZEVOdmJHOXlWR1Z5YlhNc0lDY2dKeWtnS3lCamIyeHZjaTVqYjIxaWFXNWxLSFpoYkhWbGN5bGNibjA3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3NoYWRvdy5qc1xuICoqIG1vZHVsZSBpZCA9IDMxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIHRlc3Q6IGZ1bmN0aW9uICh1bnBhcnNlZCkge1xuICAgICAgICB2YXIgX2ZpbmRWYWx1ZUFuZFVuaXQgPSAoMCwgX3V0aWxzLmZpbmRWYWx1ZUFuZFVuaXQpKHVucGFyc2VkKTtcblxuICAgICAgICB2YXIgdmFsdWUgPSBfZmluZFZhbHVlQW5kVW5pdC52YWx1ZTtcblxuICAgICAgICByZXR1cm4gKDAsIF91dGlscy5pc051bSkodmFsdWUpICYmICFpc05hTih2YWx1ZSkgPyB0cnVlIDogZmFsc2U7XG4gICAgfSxcblxuICAgIHBhcnNlOiBmdW5jdGlvbiAodW5wYXJzZWQsIHBhcmVudCkge1xuICAgICAgICB2YXIgX2ZpbmRWYWx1ZUFuZFVuaXQyID0gKDAsIF91dGlscy5maW5kVmFsdWVBbmRVbml0KSh1bnBhcnNlZCk7XG5cbiAgICAgICAgdmFyIHZhbHVlID0gX2ZpbmRWYWx1ZUFuZFVuaXQyLnZhbHVlO1xuICAgICAgICB2YXIgdW5pdCA9IF9maW5kVmFsdWVBbmRVbml0Mi51bml0O1xuXG5cbiAgICAgICAgaWYgKHVuaXQgJiYgdW5pdCAhPT0gdW5pdCkge1xuICAgICAgICAgICAgcGFyZW50LnVuaXQgPSB1bml0O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sXG5cbiAgICBzZXJpYWxpemU6IGZ1bmN0aW9uIChwYXJzZWQsIHBhcmVudCkge1xuICAgICAgICByZXR1cm4gcGFyc2VkICsgKHBhcmVudC51bml0IHx8ICcnKTtcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5MWJtbDBMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN1FVRkJRVHM3YTBKQlJXVTdRVUZEV0N4VlFVRk5MRlZCUVZVc1VVRkJWaXhGUVVGdlFqdEJRVUZCTEdkRFFVTktMRFpDUVVGcFFpeFJRVUZxUWl4RFFVUkpPenRCUVVGQkxGbEJRMlFzUzBGRVl5eHhRa0ZEWkN4TFFVUmpPenRCUVVWMFFpeGxRVUZSTEd0Q1FVRk5MRXRCUVU0c1MwRkJaMElzUTBGQlF5eE5RVUZOTEV0QlFVNHNRMEZCYkVJc1IwRkJhME1zU1VGQmJFTXNSMEZCZVVNc1MwRkJhRVE3UVVGRFNDeExRVXBWT3p0QlFVMVlMRmRCUVU4c1ZVRkJWU3hSUVVGV0xFVkJRVzlDTEUxQlFYQkNMRVZCUVRSQ08wRkJRVUVzYVVOQlExQXNOa0pCUVdsQ0xGRkJRV3BDTEVOQlJFODdPMEZCUVVFc1dVRkRka0lzUzBGRWRVSXNjMEpCUTNaQ0xFdEJSSFZDTzBGQlFVRXNXVUZEYUVJc1NVRkVaMElzYzBKQlEyaENMRWxCUkdkQ096czdRVUZITDBJc1dVRkJTU3hSUVVGUkxGTkJRVk1zU1VGQmNrSXNSVUZCTWtJN1FVRkRka0lzYlVKQlFVOHNTVUZCVUN4SFFVRmpMRWxCUVdRN1FVRkRTRHM3UVVGRlJDeGxRVUZQTEV0QlFWQTdRVUZEU0N4TFFXUlZPenRCUVdkQ1dDeGxRVUZYTEZWQlFVTXNUVUZCUkN4RlFVRlRMRTFCUVZRN1FVRkJRU3hsUVVGdlFpeFZRVUZWTEU5QlFVOHNTVUZCVUN4SlFVRmxMRVZCUVhwQ0xFTkJRWEJDTzBGQlFVRTdRVUZvUWtFc1F5SXNJbVpwYkdVaU9pSjFibWwwTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlxZG1GdVpHVnlaRzlsY3k5RGIyUmxMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3SUdselRuVnRMQ0JtYVc1a1ZtRnNkV1ZCYm1SVmJtbDBJSDBnWm5KdmJTQW5MaTR2YVc1akwzVjBhV3h6Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2UxeHVJQ0FnSUhSbGMzUTZJR1oxYm1OMGFXOXVJQ2gxYm5CaGNuTmxaQ2tnZTF4dUlDQWdJQ0FnSUNCamIyNXpkQ0I3SUhaaGJIVmxJSDBnUFNCbWFXNWtWbUZzZFdWQmJtUlZibWwwS0hWdWNHRnljMlZrS1R0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUNocGMwNTFiU2gyWVd4MVpTa2dKaVlnSVdselRtRk9LSFpoYkhWbEtTa2dQeUIwY25WbElEb2dabUZzYzJVN1hHNGdJQ0FnZlN4Y2JseHVJQ0FnSUhCaGNuTmxPaUJtZFc1amRHbHZiaUFvZFc1d1lYSnpaV1FzSUhCaGNtVnVkQ2tnZTF4dUlDQWdJQ0FnSUNCamIyNXpkQ0I3SUhaaGJIVmxMQ0IxYm1sMElIMGdQU0JtYVc1a1ZtRnNkV1ZCYm1SVmJtbDBLSFZ1Y0dGeWMyVmtLVHRjYmx4dUlDQWdJQ0FnSUNCcFppQW9kVzVwZENBbUppQjFibWwwSUNFOVBTQjFibWwwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J3WVhKbGJuUXVkVzVwZENBOUlIVnVhWFE3WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RtRnNkV1U3WEc0Z0lDQWdmU3hjYmx4dUlDQWdJSE5sY21saGJHbDZaVG9nS0hCaGNuTmxaQ3dnY0dGeVpXNTBLU0E5UGlCd1lYSnpaV1FnS3lBb2NHRnlaVzUwTG5WdWFYUWdmSHdnSnljcFhHNTlPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvdW5pdC5qc1xuICoqIG1vZHVsZSBpZCA9IDMyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmNoYWluID0gZXhwb3J0cy5jaXJjdWxhck1vdGlvbiA9IGV4cG9ydHMuY3JlYXRlTWFwcGVyID0gdW5kZWZpbmVkO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpO1xuXG52YXIgY3JlYXRlTWFwcGVyID0gZXhwb3J0cy5jcmVhdGVNYXBwZXIgPSBmdW5jdGlvbiAoZnJvbSwgdG8pIHtcbiAgICB2YXIgbWFwTGVuZ3RoID0gZnJvbS5sZW5ndGg7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbWFwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA8IGZyb21baV0gfHwgaSA9PT0gbWFwTGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgwLCBfY2FsYy5nZXRWYWx1ZUZyb21Qcm9ncmVzcykoKDAsIF9jYWxjLnJlc3RyaWN0KSgoMCwgX2NhbGMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUpKHZhbHVlLCBmcm9tW2kgLSAxXSwgZnJvbVtpXSksIDAsIDEpLCB0b1tpIC0gMV0sIHRvW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG59O1xuXG52YXIgY2lyY3VsYXJNb3Rpb24gPSBleHBvcnRzLmNpcmN1bGFyTW90aW9uID0gZnVuY3Rpb24gKHYsIGtleSwgX3JlZikge1xuICAgIHZhciB2YWx1ZXMgPSBfcmVmLnZhbHVlcztcblxuICAgIHZhciBvcmlnaW5YID0gdmFsdWVzLm9yaWdpblggPyB2YWx1ZXMub3JpZ2luWC5jdXJyZW50IDogMDtcbiAgICB2YXIgb3JpZ2luWSA9IHZhbHVlcy5vcmlnaW5ZID8gdmFsdWVzLm9yaWdpblkuY3VycmVudCA6IDA7XG5cbiAgICByZXR1cm4gKDAsIF9jYWxjLnBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UpKHtcbiAgICAgICAgeDogb3JpZ2luWCxcbiAgICAgICAgeTogb3JpZ2luWVxuICAgIH0sIHZhbHVlcy5hbmdsZS5jdXJyZW50LCB2YWx1ZXMuZGlzdGFuY2UuY3VycmVudClba2V5XTtcbn07XG5cbi8qXG4gICAgQ29tYmluZSB0cmFuc2Zvcm1lcnMgaW50byBvbmUgZnVuY3Rpb24gdGhhdCBjYWxscyBldmVyeVxuICAgIHRyYW5zZm9ybWVyIGluIHRoZSBhcnJheSBhbmQgcmV0dXJucyB0aGUgcmVzdWx0XG5cbiAgICBAcGFyYW0gW2FycmF5XVxuICAgIEByZXR1cm4gW2Z1bmN0aW9uXVxuKi9cbnZhciBjaGFpbiA9IGV4cG9ydHMuY2hhaW4gPSBmdW5jdGlvbiAodHJhbnNmb3JtZXJzKSB7XG4gICAgdmFyIG51bVRyYW5zZm9ybWVycyA9IHRyYW5zZm9ybWVycy5sZW5ndGg7XG4gICAgdmFyIGkgPSAwO1xuXG4gICAgLypcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgICAgICBAcGFyYW0gW0FjdGlvbl1cbiAgICAgICAgQHJldHVybiBbbnVtYmVyXVxuICAgICovXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2LCBrZXksIGEpIHtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG51bVRyYW5zZm9ybWVyczsgaSsrKSB7XG4gICAgICAgICAgICB2ID0gdHJhbnNmb3JtZXJzW2ldKHYsIGtleSwgYSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdjtcbiAgICB9O1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJtTXZkSEpoYm5ObWIzSnRaWEp6TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPMEZCUVVFN08wRkJSVThzU1VGQlRTeHpRMEZCWlN4VlFVRkRMRWxCUVVRc1JVRkJUeXhGUVVGUUxFVkJRV003UVVGRGRFTXNVVUZCVFN4WlFVRlpMRXRCUVVzc1RVRkJka0k3TzBGQlJVRXNWMEZCVHl4VlFVRkRMRXRCUVVRc1JVRkJWenRCUVVOa0xHRkJRVXNzU1VGQlNTeEpRVUZKTEVOQlFXSXNSVUZCWjBJc1NVRkJTU3hUUVVGd1FpeEZRVUVyUWl4SFFVRXZRaXhGUVVGdlF6dEJRVU5vUXl4blFrRkJTU3hSUVVGUkxFdEJRVXNzUTBGQlRDeERRVUZTTEVsQlFXMUNMRTFCUVUwc1UwRkJOMElzUlVGQmQwTTdRVUZEY0VNc2RVSkJRVThzWjBOQlFYRkNMRzlDUVVGVExHZERRVUZ4UWl4TFFVRnlRaXhGUVVFMFFpeExRVUZMTEVsQlFVa3NRMEZCVkN4RFFVRTFRaXhGUVVGNVF5eExRVUZMTEVOQlFVd3NRMEZCZWtNc1EwRkJWQ3hGUVVFMFJDeERRVUUxUkN4RlFVRXJSQ3hEUVVFdlJDeERRVUZ5UWl4RlFVRjNSaXhIUVVGSExFbEJRVWtzUTBGQlVDeERRVUY0Uml4RlFVRnRSeXhIUVVGSExFTkJRVWdzUTBGQmJrY3NRMEZCVUR0QlFVTklPMEZCUTBvN1FVRkRTaXhMUVU1RU8wRkJUMGdzUTBGV1RUczdRVUZaUVN4SlFVRk5MREJEUVVGcFFpeFZRVUZETEVOQlFVUXNSVUZCU1N4SFFVRktMRkZCUVhkQ08wRkJRVUVzVVVGQllpeE5RVUZoTEZGQlFXSXNUVUZCWVRzN1FVRkRiRVFzVVVGQlRTeFZRVUZYTEU5QlFVOHNUMEZCVWl4SFFVRnRRaXhQUVVGUExFOUJRVkFzUTBGQlpTeFBRVUZzUXl4SFFVRTBReXhEUVVFMVJEdEJRVU5CTEZGQlFVMHNWVUZCVnl4UFFVRlBMRTlCUVZJc1IwRkJiVUlzVDBGQlR5eFBRVUZRTEVOQlFXVXNUMEZCYkVNc1IwRkJORU1zUTBGQk5VUTdPMEZCUlVFc1YwRkJUeXh4UTBGQk1FSTdRVUZETjBJc1YwRkJSeXhQUVVRd1FqdEJRVVUzUWl4WFFVRkhPMEZCUmpCQ0xFdEJRVEZDTEVWQlIwb3NUMEZCVHl4TFFVRlFMRU5CUVdFc1QwRklWQ3hGUVVkclFpeFBRVUZQTEZGQlFWQXNRMEZCWjBJc1QwRkliRU1zUlVGSE1rTXNSMEZJTTBNc1EwRkJVRHRCUVVsSUxFTkJVazA3T3pzN096czdPenRCUVdsQ1FTeEpRVUZOTEhkQ1FVRlJMRlZCUVVNc1dVRkJSQ3hGUVVGclFqdEJRVU51UXl4UlFVRk5MR3RDUVVGclFpeGhRVUZoTEUxQlFYSkRPMEZCUTBFc1VVRkJTU3hKUVVGSkxFTkJRVkk3T3pzN096czdPMEZCVVVFc1YwRkJUeXhWUVVGRExFTkJRVVFzUlVGQlNTeEhRVUZLTEVWQlFWTXNRMEZCVkN4RlFVRmxPMEZCUTJ4Q0xHRkJRVXNzU1VGQlNTeERRVUZVTEVWQlFWa3NTVUZCU1N4bFFVRm9RaXhGUVVGcFF5eEhRVUZxUXl4RlFVRnpRenRCUVVOc1F5eG5Ra0ZCU1N4aFFVRmhMRU5CUVdJc1JVRkJaMElzUTBGQmFFSXNSVUZCYlVJc1IwRkJia0lzUlVGQmQwSXNRMEZCZUVJc1EwRkJTanRCUVVOSU96dEJRVVZFTEdWQlFVOHNRMEZCVUR0QlFVTklMRXRCVGtRN1FVRlBTQ3hEUVdwQ1RTSXNJbVpwYkdVaU9pSjBjbUZ1YzJadmNtMWxjbk11YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMnAyWVc1a1pYSmtiMlZ6TDBOdlpHVXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSHNnWjJWMFVISnZaM0psYzNOR2NtOXRWbUZzZFdVc0lHZGxkRlpoYkhWbFJuSnZiVkJ5YjJkeVpYTnpMQ0J5WlhOMGNtbGpkQ3dnY0c5cGJuUkdjbTl0UVc1bmJHVkJibVJFYVhOMFlXNWpaU0I5SUdaeWIyMGdKeTR1TDJsdVl5OWpZV3hqSnp0Y2JseHVaWGh3YjNKMElHTnZibk4wSUdOeVpXRjBaVTFoY0hCbGNpQTlJQ2htY205dExDQjBieWtnUFQ0Z2UxeHVJQ0FnSUdOdmJuTjBJRzFoY0V4bGJtZDBhQ0E5SUdaeWIyMHViR1Z1WjNSb08xeHVYRzRnSUNBZ2NtVjBkWEp1SUNoMllXeDFaU2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQm1iM0lnS0d4bGRDQnBJRDBnTVRzZ2FTQThJRzFoY0V4bGJtZDBhRHNnYVNzcktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9kbUZzZFdVZ1BDQm1jbTl0VzJsZElIeDhJR2tnUFQwOUlHMWhjRXhsYm1kMGFDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQm5aWFJXWVd4MVpVWnliMjFRY205bmNtVnpjeWh5WlhOMGNtbGpkQ2huWlhSUWNtOW5jbVZ6YzBaeWIyMVdZV3gxWlNoMllXeDFaU3dnWm5KdmJWdHBJQzBnTVYwc0lHWnliMjFiYVYwcExDQXdMQ0F4S1N3Z2RHOWJhU0F0SURGZExDQjBiMXRwWFNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5TzF4dWZUdGNibHh1Wlhod2IzSjBJR052Ym5OMElHTnBjbU4xYkdGeVRXOTBhVzl1SUQwZ0tIWXNJR3RsZVN3Z2V5QjJZV3gxWlhNZ2ZTa2dQVDRnZTF4dUlDQWdJR052Ym5OMElHOXlhV2RwYmxnZ1BTQW9kbUZzZFdWekxtOXlhV2RwYmxncElEOGdkbUZzZFdWekxtOXlhV2RwYmxndVkzVnljbVZ1ZENBNklEQTdYRzRnSUNBZ1kyOXVjM1FnYjNKcFoybHVXU0E5SUNoMllXeDFaWE11YjNKcFoybHVXU2tnUHlCMllXeDFaWE11YjNKcFoybHVXUzVqZFhKeVpXNTBJRG9nTUR0Y2JseHVJQ0FnSUhKbGRIVnliaUJ3YjJsdWRFWnliMjFCYm1kc1pVRnVaRVJwYzNSaGJtTmxLSHRjYmlBZ0lDQWdJQ0FnZURvZ2IzSnBaMmx1V0N4Y2JpQWdJQ0FnSUNBZ2VUb2diM0pwWjJsdVdTQmNiaUFnSUNCOUxDQjJZV3gxWlhNdVlXNW5iR1V1WTNWeWNtVnVkQ3dnZG1Gc2RXVnpMbVJwYzNSaGJtTmxMbU4xY25KbGJuUXBXMnRsZVYwN1hHNTlPMXh1WEc0dktseHVJQ0FnSUVOdmJXSnBibVVnZEhKaGJuTm1iM0p0WlhKeklHbHVkRzhnYjI1bElHWjFibU4wYVc5dUlIUm9ZWFFnWTJGc2JITWdaWFpsY25sY2JpQWdJQ0IwY21GdWMyWnZjbTFsY2lCcGJpQjBhR1VnWVhKeVlYa2dZVzVrSUhKbGRIVnlibk1nZEdobElISmxjM1ZzZEZ4dVhHNGdJQ0FnUUhCaGNtRnRJRnRoY25KaGVWMWNiaUFnSUNCQWNtVjBkWEp1SUZ0bWRXNWpkR2x2YmwxY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ1kyaGhhVzRnUFNBb2RISmhibk5tYjNKdFpYSnpLU0E5UGlCN1hHNGdJQ0FnWTI5dWMzUWdiblZ0VkhKaGJuTm1iM0p0WlhKeklEMGdkSEpoYm5ObWIzSnRaWEp6TG14bGJtZDBhRHRjYmlBZ0lDQnNaWFFnYVNBOUlEQTdYRzVjYmlBZ0lDQXZLbHh1SUNBZ0lDQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMWNiaUFnSUNBZ0lDQWdRSEJoY21GdElGdHpkSEpwYm1kZFhHNGdJQ0FnSUNBZ0lFQndZWEpoYlNCYlFXTjBhVzl1WFZ4dUlDQWdJQ0FnSUNCQWNtVjBkWEp1SUZ0dWRXMWlaWEpkWEc0Z0lDQWdLaTljYmlBZ0lDQnlaWFIxY200Z0tIWXNJR3RsZVN3Z1lTa2dQVDRnZTF4dUlDQWdJQ0FnSUNCbWIzSWdLR2tnUFNBd095QnBJRHdnYm5WdFZISmhibk5tYjNKdFpYSnpPeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhZZ1BTQjBjbUZ1YzJadmNtMWxjbk5iYVYwb2Rpd2dhMlY1TENCaEtUdGNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIyTzF4dUlDQWdJSDA3WEc1OU95SmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvdHJhbnNmb3JtZXJzLmpzXG4gKiogbW9kdWxlIGlkID0gMzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9jb2xvciA9IHJlcXVpcmUoJy4uL3ZhbHVlLXR5cGVzL2NvbG9yJyk7XG5cbnZhciBfY29sb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29sb3IpO1xuXG52YXIgX2NvbXBsZXggPSByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9jb21wbGV4Jyk7XG5cbnZhciBfY29tcGxleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21wbGV4KTtcblxudmFyIF91bml0ID0gcmVxdWlyZSgnLi4vdmFsdWUtdHlwZXMvdW5pdCcpO1xuXG52YXIgX3VuaXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdW5pdCk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxudmFyIF9udW1lcmljYWxWYWx1ZXMgPSByZXF1aXJlKCcuLi9pbmMvbnVtZXJpY2FsLXZhbHVlcycpO1xuXG52YXIgX251bWVyaWNhbFZhbHVlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9udW1lcmljYWxWYWx1ZXMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgTlVNX05VTUVSSUNBTF9WQUxVRVMgPSBfbnVtZXJpY2FsVmFsdWVzMi5kZWZhdWx0Lmxlbmd0aDtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBOVU1fTlVNRVJJQ0FMX1ZBTFVFUzsgaSsrKSB7XG4gICAgICAgIHZhciB2YWx1ZVByb3AgPSB2YWx1ZVtfbnVtZXJpY2FsVmFsdWVzMi5kZWZhdWx0W2ldXTtcbiAgICAgICAgaWYgKCgwLCBfdXRpbHMuaXNTdHJpbmcpKHZhbHVlUHJvcCkpIHtcbiAgICAgICAgICAgIGlmIChfY29sb3IyLmRlZmF1bHQudGVzdCh2YWx1ZVByb3ApKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb2xvcjIuZGVmYXVsdDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoX2NvbXBsZXgyLmRlZmF1bHQudGVzdCh2YWx1ZVByb3ApKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb21wbGV4Mi5kZWZhdWx0O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChfdW5pdDIuZGVmYXVsdC50ZXN0KHZhbHVlUHJvcCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3VuaXQyLmRlZmF1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5a1pYUmxZM1F1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dEJRVUZCT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenRCUVVOQk96czdPenM3UVVGRlFTeEpRVUZOTEhWQ1FVRjFRaXd3UWtGQmFVSXNUVUZCT1VNN08ydENRVVZsTEZWQlFVTXNTMEZCUkN4RlFVRlhPMEZCUTNSQ0xGTkJRVXNzU1VGQlNTeEpRVUZKTEVOQlFXSXNSVUZCWjBJc1NVRkJTU3h2UWtGQmNFSXNSVUZCTUVNc1IwRkJNVU1zUlVGQkswTTdRVUZETTBNc1dVRkJUU3haUVVGWkxFMUJRVTBzTUVKQlFXbENMRU5CUVdwQ0xFTkJRVTRzUTBGQmJFSTdRVUZEUVN4WlFVRkpMSEZDUVVGVExGTkJRVlFzUTBGQlNpeEZRVUY1UWp0QlFVTnlRaXhuUWtGQlNTeG5Ra0ZCVlN4SlFVRldMRU5CUVdVc1UwRkJaaXhEUVVGS0xFVkJRU3RDTzBGQlF6TkNPMEZCUTBnc1lVRkdSQ3hOUVVWUExFbEJRVWtzYTBKQlFWa3NTVUZCV2l4RFFVRnBRaXhUUVVGcVFpeERRVUZLTEVWQlFXbERPMEZCUTNCRE8wRkJRMGdzWVVGR1RTeE5RVVZCTEVsQlFVa3NaVUZCVXl4SlFVRlVMRU5CUVdNc1UwRkJaQ3hEUVVGS0xFVkJRVGhDTzBGQlEycERPMEZCUTBnN1FVRkRTanRCUVVOS08wRkJRMG9zUXlJc0ltWnBiR1VpT2lKa1pYUmxZM1F1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMnAyWVc1a1pYSmtiMlZ6TDBOdlpHVXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJR052Ykc5eVZIbHdaU0JtY205dElDY3VMaTkyWVd4MVpTMTBlWEJsY3k5amIyeHZjaWM3WEc1cGJYQnZjblFnWTI5dGNHeGxlRlI1Y0dVZ1puSnZiU0FuTGk0dmRtRnNkV1V0ZEhsd1pYTXZZMjl0Y0d4bGVDYzdYRzVwYlhCdmNuUWdkVzVwZEZSNWNHVWdabkp2YlNBbkxpNHZkbUZzZFdVdGRIbHdaWE12ZFc1cGRDYzdYRzVwYlhCdmNuUWdleUJwYzFOMGNtbHVaeUI5SUdaeWIyMGdKeTR1TDJsdVl5OTFkR2xzY3ljN1hHNXBiWEJ2Y25RZ1RsVk5SVkpKUTBGTVgxWkJURlZGVXlCbWNtOXRJQ2N1TGk5cGJtTXZiblZ0WlhKcFkyRnNMWFpoYkhWbGN5YzdYRzVjYm1OdmJuTjBJRTVWVFY5T1ZVMUZVa2xEUVV4ZlZrRk1WVVZUSUQwZ1RsVk5SVkpKUTBGTVgxWkJURlZGVXk1c1pXNW5kR2c3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUNoMllXeDFaU2tnUFQ0Z2UxeHVJQ0FnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z1RsVk5YMDVWVFVWU1NVTkJURjlXUVV4VlJWTTdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCMllXeDFaVkJ5YjNBZ1BTQjJZV3gxWlZ0T1ZVMUZVa2xEUVV4ZlZrRk1WVVZUVzJsZFhUdGNiaUFnSUNBZ0lDQWdhV1lnS0dselUzUnlhVzVuS0haaGJIVmxVSEp2Y0NrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaGpiMnh2Y2xSNWNHVXVkR1Z6ZENoMllXeDFaVkJ5YjNBcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHTnZiRzl5Vkhsd1pUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0JwWmlBb1kyOXRjR3hsZUZSNWNHVXVkR1Z6ZENoMllXeDFaVkJ5YjNBcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHTnZiWEJzWlhoVWVYQmxPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUdsbUlDaDFibWwwVkhsd1pTNTBaWE4wS0haaGJIVmxVSEp2Y0NrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z2RXNXBkRlI1Y0dVN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1OU95SmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9kZXRlY3QuanNcbiAqKiBtb2R1bGUgaWQgPSAzNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gWydjdXJyZW50JywgJ2Zyb20nLCAndG8nLCAndmVsb2NpdHknXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJtTXZiblZ0WlhKcFkyRnNMWFpoYkhWbGN5NXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3YTBKQlFXVXNRMEZCUXl4VFFVRkVMRVZCUVZrc1RVRkJXaXhGUVVGdlFpeEpRVUZ3UWl4RlFVRXdRaXhWUVVFeFFpeERJaXdpWm1sc1pTSTZJbTUxYldWeWFXTmhiQzEyWVd4MVpYTXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwycDJZVzVrWlhKa2IyVnpMME52WkdVdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2laWGh3YjNKMElHUmxabUYxYkhRZ1d5ZGpkWEp5Wlc1MEp5d2dKMlp5YjIwbkxDQW5kRzhuTENBbmRtVnNiMk5wZEhrblhUc2lYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvbnVtZXJpY2FsLXZhbHVlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDM1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfb2JqZWN0QWRhcHRlciA9IHJlcXVpcmUoJy4uL2FkYXB0ZXIvb2JqZWN0LWFkYXB0ZXInKTtcblxudmFyIF9vYmplY3RBZGFwdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdEFkYXB0ZXIpO1xuXG52YXIgX2Nzc0FkYXB0ZXIgPSByZXF1aXJlKCcuLi9hZGFwdGVyL2Nzcy1hZGFwdGVyJyk7XG5cbnZhciBfY3NzQWRhcHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jc3NBZGFwdGVyKTtcblxudmFyIF9zdmdBZGFwdGVyID0gcmVxdWlyZSgnLi4vYWRhcHRlci9zdmctYWRhcHRlcicpO1xuXG52YXIgX3N2Z0FkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ZnQWRhcHRlcik7XG5cbnZhciBfc3ZnUGF0aEFkYXB0ZXIgPSByZXF1aXJlKCcuLi9hZGFwdGVyL3N2Zy1wYXRoLWFkYXB0ZXInKTtcblxudmFyIF9zdmdQYXRoQWRhcHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdmdQYXRoQWRhcHRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgdmFyIGRldGVjdGVkQWRhcHRlciA9IF9vYmplY3RBZGFwdGVyMi5kZWZhdWx0O1xuXG4gICAgLy8gSWYgSFRNTEVsZW1lbnQgbG9hZCBDU1NcbiAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IGVsZW1lbnQudGFnTmFtZSA9PT0gJ3N2ZycpIHtcbiAgICAgICAgZGV0ZWN0ZWRBZGFwdGVyID0gX2Nzc0FkYXB0ZXIyLmRlZmF1bHQ7XG5cbiAgICAgICAgLy8gT3IgU1ZHXG4gICAgfSBlbHNlIGlmIChlbGVtZW50IGluc3RhbmNlb2YgU1ZHRWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQudGFnTmFtZSA9PT0gJ3BhdGgnKSB7XG4gICAgICAgICAgICAgICAgZGV0ZWN0ZWRBZGFwdGVyID0gX3N2Z1BhdGhBZGFwdGVyMi5kZWZhdWx0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkZXRlY3RlZEFkYXB0ZXIgPSBfc3ZnQWRhcHRlcjIuZGVmYXVsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgcmV0dXJuIGRldGVjdGVkQWRhcHRlcjtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12WkdWMFpXTjBMV0ZrWVhCMFpYSXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0QlFVRkJPenM3TzBGQlEwRTdPenM3UVVGRFFUczdPenRCUVVOQk96czdPenM3YTBKQlJXVXNWVUZCUXl4UFFVRkVMRVZCUVdFN1FVRkRlRUlzVVVGQlNTeDVRMEZCU2pzN08wRkJSMEVzVVVGQlNTeHRRa0ZCYlVJc1YwRkJia0lzU1VGQmEwTXNVVUZCVVN4UFFVRlNMRXRCUVc5Q0xFdEJRVEZFTEVWQlFXbEZPMEZCUXpkRU96czdRVUZIU0N4TFFVcEVMRTFCU1U4c1NVRkJTU3h0UWtGQmJVSXNWVUZCZGtJc1JVRkJiVU03UVVGRGRFTXNaMEpCUVVrc1VVRkJVU3hQUVVGU0xFdEJRVzlDTEUxQlFYaENMRVZCUVdkRE8wRkJRelZDTzBGQlEwZ3NZVUZHUkN4TlFVVlBPMEZCUTBnN1FVRkRTRHRCUVVOS096dEJRVVZFTEZkQlFVOHNaVUZCVUR0QlFVTklMRU1pTENKbWFXeGxJam9pWkdWMFpXTjBMV0ZrWVhCMFpYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwycDJZVzVrWlhKa2IyVnpMME52WkdVdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElHOWlhbVZqZEVGa1lYQjBaWElnWm5KdmJTQW5MaTR2WVdSaGNIUmxjaTl2WW1wbFkzUXRZV1JoY0hSbGNpYzdYRzVwYlhCdmNuUWdZM056UVdSaGNIUmxjaUJtY205dElDY3VMaTloWkdGd2RHVnlMMk56Y3kxaFpHRndkR1Z5Snp0Y2JtbHRjRzl5ZENCemRtZEJaR0Z3ZEdWeUlHWnliMjBnSnk0dUwyRmtZWEIwWlhJdmMzWm5MV0ZrWVhCMFpYSW5PMXh1YVcxd2IzSjBJSE4yWjFCaGRHaEJaR0Z3ZEdWeUlHWnliMjBnSnk0dUwyRmtZWEIwWlhJdmMzWm5MWEJoZEdndFlXUmhjSFJsY2ljN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElDaGxiR1Z0Wlc1MEtTQTlQaUI3WEc0Z0lDQWdiR1YwSUdSbGRHVmpkR1ZrUVdSaGNIUmxjaUE5SUc5aWFtVmpkRUZrWVhCMFpYSTdYRzVjYmlBZ0lDQXZMeUJKWmlCSVZFMU1SV3hsYldWdWRDQnNiMkZrSUVOVFUxeHVJQ0FnSUdsbUlDaGxiR1Z0Wlc1MElHbHVjM1JoYm1ObGIyWWdTRlJOVEVWc1pXMWxiblFnZkh3Z1pXeGxiV1Z1ZEM1MFlXZE9ZVzFsSUQwOVBTQW5jM1puSnlrZ2UxeHVJQ0FnSUNBZ0lDQmtaWFJsWTNSbFpFRmtZWEIwWlhJZ1BTQmpjM05CWkdGd2RHVnlPMXh1WEc0Z0lDQWdMeThnVDNJZ1UxWkhYRzRnSUNBZ2ZTQmxiSE5sSUdsbUlDaGxiR1Z0Wlc1MElHbHVjM1JoYm1ObGIyWWdVMVpIUld4bGJXVnVkQ2tnZTF4dUlDQWdJQ0FnSUNCcFppQW9aV3hsYldWdWRDNTBZV2RPWVcxbElEMDlQU0FuY0dGMGFDY3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHUmxkR1ZqZEdWa1FXUmhjSFJsY2lBOUlITjJaMUJoZEdoQlpHRndkR1Z5TzF4dUlDQWdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdaR1YwWldOMFpXUkJaR0Z3ZEdWeUlEMGdjM1puUVdSaGNIUmxjanRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJSEpsZEhWeWJpQmtaWFJsWTNSbFpFRmtZWEIwWlhJN1hHNTlPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL2RldGVjdC1hZGFwdGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi4vLi4vaW5jL2NhbGMnKTtcblxudmFyIEJMRU5EX0FDQ1VSQUNZID0gNjA7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvdXRBY3Rpb24sIGluQWN0aW9uLCBmbG93VmFsdWUsIGtleSkge1xuICAgIHZhciBvdXRWYWx1ZSA9IG91dEFjdGlvbi52YWx1ZXNba2V5XTtcblxuICAgIGlmIChvdXRBY3Rpb24uZWxhcHNlZCA9PT0gdW5kZWZpbmVkIHx8ICFvdXRWYWx1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGluVmFsdWUgPSBpbkFjdGlvbi52YWx1ZXNba2V5XTtcbiAgICB2YXIgb3V0VG90YWxEdXJhdGlvbiA9IG91dFZhbHVlLmRlbGF5ICsgb3V0VmFsdWUuZHVyYXRpb247XG4gICAgdmFyIHRpbWVVbnRpbE91dEVuZCA9IE1hdGgubWluKG91dFRvdGFsRHVyYXRpb24gLSBvdXRBY3Rpb24uZWxhcHNlZCwgaW5WYWx1ZS5kZWxheSArIGluVmFsdWUuZHVyYXRpb24pO1xuICAgIHZhciBpblBvc2l0aW9uQXRPdXRFbmQgPSAoMCwgX2NhbGMuZWFzZSkoKDAsIF9jYWxjLnJlc3RyaWN0KSgoMCwgX2NhbGMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUpKHRpbWVVbnRpbE91dEVuZCwgMCwgaW5WYWx1ZS5kZWxheSArIGluVmFsdWUuZHVyYXRpb24pLCAwLCAxKSwgaW5WYWx1ZS5mcm9tLCBpblZhbHVlLnRvLCBpblZhbHVlLmVhc2UpO1xuICAgIHZhciBpbkJpZ2dlclRoYW5PdXRBdFN0YXJ0ID0gaW5WYWx1ZS5mcm9tID4gb3V0VmFsdWUuY3VycmVudDtcbiAgICB2YXIgaW5CaWdnZXJUaGFuT3V0QXRFbmQgPSBpblBvc2l0aW9uQXRPdXRFbmQgPiBvdXRWYWx1ZS50bztcbiAgICB2YXIgdHdlZW5zSW50ZXJzZWN0ID0gaW5CaWdnZXJUaGFuT3V0QXRTdGFydCAhPT0gaW5CaWdnZXJUaGFuT3V0QXRFbmQ7XG5cbiAgICB2YXIgYmxlbmRDdXJ2ZSA9IFtbMCwgb3V0VmFsdWUuY3VycmVudF0sIFt0aW1lVW50aWxPdXRFbmQsIGluUG9zaXRpb25BdE91dEVuZF1dO1xuXG4gICAgLy8gSWYgdHdlZW5zIGludGVyc2VjdCwgcmVzb2x2ZSB0d2VlbnMgYXQgYSByZXNvbHV0aW9uIHRvIGZpbmQgZXhhY3RseSB3aGVyZVxuICAgIGlmICh0d2VlbnNJbnRlcnNlY3QpIHtcbiAgICAgICAgdmFyIHRpbWVTdGVwVG9UZXN0ID0gdGltZVVudGlsT3V0RW5kIC8gQkxFTkRfQUNDVVJBQ1k7XG4gICAgICAgIHZhciBmb3VuZFAxID0gZmFsc2U7XG4gICAgICAgIHZhciBmb3VuZFAyID0gZmFsc2U7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gQkxFTkRfQUNDVVJBQ1k7IGkrKykge1xuICAgICAgICAgICAgdmFyIHRpbWVTdGVwID0gaSAqIHRpbWVTdGVwVG9UZXN0O1xuICAgICAgICAgICAgdmFyIG91dEF0VGltZSA9ICgwLCBfY2FsYy5lYXNlKSgoMCwgX2NhbGMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUpKG91dEFjdGlvbi5lbGFwc2VkICsgdGltZVN0ZXAsIG91dFZhbHVlLmRlbGF5LCBvdXRWYWx1ZS5kdXJhdGlvbiksIG91dFZhbHVlLmZyb20sIG91dFZhbHVlLnRvLCBvdXRWYWx1ZS5lYXNlKTtcbiAgICAgICAgICAgIHZhciBpbkF0VGltZSA9ICgwLCBfY2FsYy5lYXNlKSgoMCwgX2NhbGMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUpKGluQWN0aW9uLmVsYXBzZWQgKyB0aW1lU3RlcCwgaW5WYWx1ZS5kZWxheSwgaW5WYWx1ZS5kdXJhdGlvbiksIGluVmFsdWUuZnJvbSwgaW5WYWx1ZS50bywgaW5WYWx1ZS5lYXNlKTtcblxuICAgICAgICAgICAgaWYgKCFmb3VuZFAxICYmIChpbkJpZ2dlclRoYW5PdXRBdFN0YXJ0ICYmIGluQXRUaW1lIDwgb3V0QXRUaW1lIHx8ICFpbkJpZ2dlclRoYW5PdXRBdFN0YXJ0ICYmIGluQXRUaW1lID4gb3V0QXRUaW1lKSkge1xuICAgICAgICAgICAgICAgIGJsZW5kQ3VydmUuc3BsaWNlKDEsIDAsIFt0aW1lU3RlcCwgaW5BdFRpbWVdKTtcbiAgICAgICAgICAgICAgICBmb3VuZFAxID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGZvdW5kUDEgJiYgKGluQmlnZ2VyVGhhbk91dEF0U3RhcnQgJiYgaW5BdFRpbWUgPCBvdXRWYWx1ZS5jdXJyZW50IHx8ICFpbkJpZ2dlclRoYW5PdXRBdFN0YXJ0ICYmIGluQXRUaW1lID4gb3V0VmFsdWUuY3VycmVudCkpIHtcbiAgICAgICAgICAgICAgICBibGVuZEN1cnZlWzJdID0gW3RpbWVTdGVwLCBpbkF0VGltZV07XG4gICAgICAgICAgICAgICAgZm91bmRQMiA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChmb3VuZFAyKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYmxlbmRDdXJ2ZS5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgLy8gUGFzcyBiZXR3ZWVuIHR3ZWVucyB1c2luZyBpbmNvbWluZyBlYXNpbmcgaWYganVzdCB0d28gcG9pbnRzXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYmxlbmRQcm9ncmVzcyA9ICgwLCBfY2FsYy5yZXN0cmljdCkoKDAsIF9jYWxjLmdldFByb2dyZXNzRnJvbVZhbHVlKShpbkFjdGlvbi5lbGFwc2VkLCBibGVuZEN1cnZlWzBdWzBdLCBibGVuZEN1cnZlWzFdWzBdKSwgMCwgMSk7XG5cbiAgICAgICAgICAgIGlmIChibGVuZFByb2dyZXNzID09PSAxKSB7XG4gICAgICAgICAgICAgICAgZmxvd1ZhbHVlLmJsZW5kQ3VydmUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiAoMCwgX2NhbGMuZWFzZSkoYmxlbmRQcm9ncmVzcywgb3V0VmFsdWUuY3VycmVudCwgaW5WYWx1ZS5jdXJyZW50LCBpblZhbHVlLmVhc2UpO1xuICAgICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFBhc3MgYmV0d2VlbiB0d2VlbnMgdXNpbmcgYmV6aWVyIGludGVycG9sYXRpb25cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBibGVuZFByb2dyZXNzID0gKDAsIF9jYWxjLnJlc3RyaWN0KSgoMCwgX2NhbGMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUpKGluQWN0aW9uLmVsYXBzZWQsIGJsZW5kQ3VydmVbMF1bMF0sIGJsZW5kQ3VydmVbMl1bMF0pLCAwLCAxKTtcbiAgICAgICAgICAgIHZhciBhUCA9ICgwLCBfY2FsYy5nZXRWYWx1ZUZyb21Qcm9ncmVzcykoYmxlbmRQcm9ncmVzcywgYmxlbmRDdXJ2ZVswXVsxXSwgYmxlbmRDdXJ2ZVsxXVsxXSk7XG4gICAgICAgICAgICB2YXIgYlAgPSAoMCwgX2NhbGMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MpKGJsZW5kUHJvZ3Jlc3MsIGJsZW5kQ3VydmVbMV1bMV0sIGJsZW5kQ3VydmVbMl1bMV0pO1xuXG4gICAgICAgICAgICBpZiAoYmxlbmRQcm9ncmVzcyA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGZsb3dWYWx1ZS5ibGVuZEN1cnZlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHJldHVybiBpblZhbHVlLmN1cnJlbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiAoMCwgX2NhbGMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MpKGJsZW5kUHJvZ3Jlc3MsIGFQLCBiUCk7XG4gICAgICAgIH07XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDJac2IzY3ZaMlZ1WlhKaGRHVXRZbXhsYm1RdFkzVnlkbVV1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dEJRVUZCT3p0QlFVVkJMRWxCUVUwc2FVSkJRV2xDTEVWQlFYWkNPenRyUWtGRlpTeFZRVUZETEZOQlFVUXNSVUZCV1N4UlFVRmFMRVZCUVhOQ0xGTkJRWFJDTEVWQlFXbERMRWRCUVdwRExFVkJRWGxETzBGQlEzQkVMRkZCUVUwc1YwRkJWeXhWUVVGVkxFMUJRVllzUTBGQmFVSXNSMEZCYWtJc1EwRkJha0k3TzBGQlJVRXNVVUZCU1N4VlFVRlZMRTlCUVZZc1MwRkJjMElzVTBGQmRFSXNTVUZCYlVNc1EwRkJReXhSUVVGNFF5eEZRVUZyUkR0QlFVTTVRenRCUVVOSU96dEJRVVZFTEZGQlFVMHNWVUZCVlN4VFFVRlRMRTFCUVZRc1EwRkJaMElzUjBGQmFFSXNRMEZCYUVJN1FVRkRRU3hSUVVGTkxHMUNRVUZ0UWl4VFFVRlRMRXRCUVZRc1IwRkJhVUlzVTBGQlV5eFJRVUZ1UkR0QlFVTkJMRkZCUVUwc2EwSkJRV3RDTEV0QlFVc3NSMEZCVEN4RFFVRlRMRzFDUVVGdFFpeFZRVUZWTEU5QlFYUkRMRVZCUVN0RExGRkJRVkVzUzBGQlVpeEhRVUZuUWl4UlFVRlJMRkZCUVhaRkxFTkJRWGhDTzBGQlEwRXNVVUZCVFN4eFFrRkJjVUlzWjBKQlFVc3NiMEpCUVZNc1owTkJRWEZDTEdWQlFYSkNMRVZCUVhORExFTkJRWFJETEVWQlFYbERMRkZCUVZFc1MwRkJVaXhIUVVGblFpeFJRVUZSTEZGQlFXcEZMRU5CUVZRc1JVRkJjVVlzUTBGQmNrWXNSVUZCZDBZc1EwRkJlRVlzUTBGQlRDeEZRVUZwUnl4UlFVRlJMRWxCUVhwSExFVkJRU3RITEZGQlFWRXNSVUZCZGtnc1JVRkJNa2dzVVVGQlVTeEpRVUZ1U1N4RFFVRXpRanRCUVVOQkxGRkJRVTBzZVVKQlFYbENMRkZCUVZFc1NVRkJVaXhIUVVGbExGTkJRVk1zVDBGQmRrUTdRVUZEUVN4UlFVRk5MSFZDUVVGMVFpeHhRa0ZCY1VJc1UwRkJVeXhGUVVFelJEdEJRVU5CTEZGQlFVMHNhMEpCUVd0Q0xESkNRVUV5UWl4dlFrRkJia1E3TzBGQlJVRXNVVUZCVFN4aFFVRmhMRU5CUVVNc1EwRkJReXhEUVVGRUxFVkJRVWtzVTBGQlV5eFBRVUZpTEVOQlFVUXNSVUZCZDBJc1EwRkJReXhsUVVGRUxFVkJRV3RDTEd0Q1FVRnNRaXhEUVVGNFFpeERRVUZ1UWpzN08wRkJSMEVzVVVGQlNTeGxRVUZLTEVWQlFYRkNPMEZCUTJwQ0xGbEJRVTBzYVVKQlFXbENMR3RDUVVGclFpeGpRVUY2UXp0QlFVTkJMRmxCUVVrc1ZVRkJWU3hMUVVGa08wRkJRMEVzV1VGQlNTeFZRVUZWTEV0QlFXUTdPMEZCUlVFc1lVRkJTeXhKUVVGSkxFbEJRVWtzUTBGQllpeEZRVUZuUWl4TFFVRkxMR05CUVhKQ0xFVkJRWEZETEVkQlFYSkRMRVZCUVRCRE8wRkJRM1JETEdkQ1FVRk5MRmRCUVZjc1NVRkJTU3hqUVVGeVFqdEJRVU5CTEdkQ1FVRk5MRmxCUVZrc1owSkJRVXNzWjBOQlFYRkNMRlZCUVZVc1QwRkJWaXhIUVVGdlFpeFJRVUY2UXl4RlFVRnRSQ3hUUVVGVExFdEJRVFZFTEVWQlFXMUZMRk5CUVZNc1VVRkJOVVVzUTBGQlRDeEZRVUUwUml4VFFVRlRMRWxCUVhKSExFVkJRVEpITEZOQlFWTXNSVUZCY0Vnc1JVRkJkMGdzVTBGQlV5eEpRVUZxU1N4RFFVRnNRanRCUVVOQkxHZENRVUZOTEZkQlFWY3NaMEpCUVVzc1owTkJRWEZDTEZOQlFWTXNUMEZCVkN4SFFVRnRRaXhSUVVGNFF5eEZRVUZyUkN4UlFVRlJMRXRCUVRGRUxFVkJRV2xGTEZGQlFWRXNVVUZCZWtVc1EwRkJUQ3hGUVVGNVJpeFJRVUZSTEVsQlFXcEhMRVZCUVhWSExGRkJRVkVzUlVGQkwwY3NSVUZCYlVnc1VVRkJVU3hKUVVFelNDeERRVUZxUWpzN1FVRkZRU3huUWtGQlNTeERRVUZETEU5QlFVUXNTMEZCWXl3d1FrRkJNRUlzVjBGQlZ5eFRRVUYwUXl4SlFVRnhSQ3hEUVVGRExITkNRVUZFTEVsQlFUSkNMRmRCUVZjc1UwRkJlRWNzUTBGQlNpeEZRVUY1U0R0QlFVTnlTQ3d5UWtGQlZ5eE5RVUZZTEVOQlFXdENMRU5CUVd4Q0xFVkJRWEZDTEVOQlFYSkNMRVZCUVhkQ0xFTkJRVU1zVVVGQlJDeEZRVUZYTEZGQlFWZ3NRMEZCZUVJN1FVRkRRU3d3UWtGQlZTeEpRVUZXTzBGQlEwZzdPMEZCUlVRc1owSkJRVWtzV1VGQllTd3dRa0ZCTUVJc1YwRkJWeXhUUVVGVExFOUJRUzlETEVsQlFUUkVMRU5CUVVNc2MwSkJRVVFzU1VGQk1rSXNWMEZCVnl4VFFVRlRMRTlCUVhaSUxFTkJRVW9zUlVGQmMwazdRVUZEYkVrc01rSkJRVmNzUTBGQldDeEpRVUZuUWl4RFFVRkRMRkZCUVVRc1JVRkJWeXhSUVVGWUxFTkJRV2hDTzBGQlEwRXNNRUpCUVZVc1NVRkJWanRCUVVOSU96dEJRVVZFTEdkQ1FVRkpMRTlCUVVvc1JVRkJZVHRCUVVOVU8wRkJRMGc3UVVGRFNqdEJRVU5LT3p0QlFVVkVMRkZCUVVrc1YwRkJWeXhOUVVGWUxFdEJRWE5DTEVOQlFURkNMRVZCUVRaQ096dEJRVVY2UWl4bFFVRlBMRmxCUVUwN1FVRkRWQ3huUWtGQlRTeG5Ra0ZCWjBJc2IwSkJRVk1zWjBOQlFYRkNMRk5CUVZNc1QwRkJPVUlzUlVGQmRVTXNWMEZCVnl4RFFVRllMRVZCUVdNc1EwRkJaQ3hEUVVGMlF5eEZRVUY1UkN4WFFVRlhMRU5CUVZnc1JVRkJZeXhEUVVGa0xFTkJRWHBFTEVOQlFWUXNSVUZCY1VZc1EwRkJja1lzUlVGQmQwWXNRMEZCZUVZc1EwRkJkRUk3TzBGQlJVRXNaMEpCUVVrc2EwSkJRV3RDTEVOQlFYUkNMRVZCUVhsQ08wRkJRM0pDTERCQ1FVRlZMRlZCUVZZc1IwRkJkVUlzVTBGQmRrSTdRVUZEU0RzN1FVRkZSQ3h0UWtGQlR5eG5Ra0ZCU3l4aFFVRk1MRVZCUVc5Q0xGTkJRVk1zVDBGQk4wSXNSVUZCYzBNc1VVRkJVU3hQUVVFNVF5eEZRVUYxUkN4UlFVRlJMRWxCUVM5RUxFTkJRVkE3UVVGRFNDeFRRVkpFTzBGQlUwZ3NTMEZZUkN4TlFWZFBPenRCUVVWSUxHVkJRVThzV1VGQlRUdEJRVU5VTEdkQ1FVRk5MR2RDUVVGblFpeHZRa0ZCVXl4blEwRkJjVUlzVTBGQlV5eFBRVUU1UWl4RlFVRjFReXhYUVVGWExFTkJRVmdzUlVGQll5eERRVUZrTEVOQlFYWkRMRVZCUVhsRUxGZEJRVmNzUTBGQldDeEZRVUZqTEVOQlFXUXNRMEZCZWtRc1EwRkJWQ3hGUVVGeFJpeERRVUZ5Uml4RlFVRjNSaXhEUVVGNFJpeERRVUYwUWp0QlFVTkJMR2RDUVVGTkxFdEJRVXNzWjBOQlFYRkNMR0ZCUVhKQ0xFVkJRVzlETEZkQlFWY3NRMEZCV0N4RlFVRmpMRU5CUVdRc1EwRkJjRU1zUlVGQmMwUXNWMEZCVnl4RFFVRllMRVZCUVdNc1EwRkJaQ3hEUVVGMFJDeERRVUZZTzBGQlEwRXNaMEpCUVUwc1MwRkJTeXhuUTBGQmNVSXNZVUZCY2tJc1JVRkJiME1zVjBGQlZ5eERRVUZZTEVWQlFXTXNRMEZCWkN4RFFVRndReXhGUVVGelJDeFhRVUZYTEVOQlFWZ3NSVUZCWXl4RFFVRmtMRU5CUVhSRUxFTkJRVmc3TzBGQlJVRXNaMEpCUVVrc2EwSkJRV3RDTEVOQlFYUkNMRVZCUVhsQ08wRkJRM0pDTERCQ1FVRlZMRlZCUVZZc1IwRkJkVUlzVTBGQmRrSTdRVUZEUVN4MVFrRkJUeXhSUVVGUkxFOUJRV1k3UVVGRFNEczdRVUZGUkN4dFFrRkJUeXhuUTBGQmNVSXNZVUZCY2tJc1JVRkJiME1zUlVGQmNFTXNSVUZCZDBNc1JVRkJlRU1zUTBGQlVEdEJRVU5JTEZOQldFUTdRVUZaU0R0QlFVTktMRU1pTENKbWFXeGxJam9pWjJWdVpYSmhkR1V0WW14bGJtUXRZM1Z5ZG1VdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDJwMllXNWtaWEprYjJWekwwTnZaR1V2Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhzZ1oyVjBVSEp2WjNKbGMzTkdjbTl0Vm1Gc2RXVXNJR2RsZEZaaGJIVmxSbkp2YlZCeWIyZHlaWE56TENCbFlYTmxMQ0J5WlhOMGNtbGpkQ0I5SUdaeWIyMGdKeTR1THk0dUwybHVZeTlqWVd4akp6dGNibHh1WTI5dWMzUWdRa3hGVGtSZlFVTkRWVkpCUTFrZ1BTQTJNRHRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnS0c5MWRFRmpkR2x2Yml3Z2FXNUJZM1JwYjI0c0lHWnNiM2RXWVd4MVpTd2dhMlY1S1NBOVBpQjdYRzRnSUNBZ1kyOXVjM1FnYjNWMFZtRnNkV1VnUFNCdmRYUkJZM1JwYjI0dWRtRnNkV1Z6VzJ0bGVWMDdYRzVjYmlBZ0lDQnBaaUFvYjNWMFFXTjBhVzl1TG1Wc1lYQnpaV1FnUFQwOUlIVnVaR1ZtYVc1bFpDQjhmQ0FoYjNWMFZtRnNkV1VwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1TzF4dUlDQWdJSDFjYmx4dUlDQWdJR052Ym5OMElHbHVWbUZzZFdVZ1BTQnBia0ZqZEdsdmJpNTJZV3gxWlhOYmEyVjVYVHRjYmlBZ0lDQmpiMjV6ZENCdmRYUlViM1JoYkVSMWNtRjBhVzl1SUQwZ2IzVjBWbUZzZFdVdVpHVnNZWGtnS3lCdmRYUldZV3gxWlM1a2RYSmhkR2x2Ymp0Y2JpQWdJQ0JqYjI1emRDQjBhVzFsVlc1MGFXeFBkWFJGYm1RZ1BTQk5ZWFJvTG0xcGJpaHZkWFJVYjNSaGJFUjFjbUYwYVc5dUlDMGdiM1YwUVdOMGFXOXVMbVZzWVhCelpXUXNJR2x1Vm1Gc2RXVXVaR1ZzWVhrZ0t5QnBibFpoYkhWbExtUjFjbUYwYVc5dUtUdGNiaUFnSUNCamIyNXpkQ0JwYmxCdmMybDBhVzl1UVhSUGRYUkZibVFnUFNCbFlYTmxLSEpsYzNSeWFXTjBLR2RsZEZCeWIyZHlaWE56Um5KdmJWWmhiSFZsS0hScGJXVlZiblJwYkU5MWRFVnVaQ3dnTUN3Z2FXNVdZV3gxWlM1a1pXeGhlU0FySUdsdVZtRnNkV1V1WkhWeVlYUnBiMjRwTENBd0xDQXhLU3dnYVc1V1lXeDFaUzVtY205dExDQnBibFpoYkhWbExuUnZMQ0JwYmxaaGJIVmxMbVZoYzJVcE8xeHVJQ0FnSUdOdmJuTjBJR2x1UW1sbloyVnlWR2hoYms5MWRFRjBVM1JoY25RZ1BTQnBibFpoYkhWbExtWnliMjBnUGlCdmRYUldZV3gxWlM1amRYSnlaVzUwTzF4dUlDQWdJR052Ym5OMElHbHVRbWxuWjJWeVZHaGhiazkxZEVGMFJXNWtJRDBnYVc1UWIzTnBkR2x2YmtGMFQzVjBSVzVrSUQ0Z2IzVjBWbUZzZFdVdWRHODdYRzRnSUNBZ1kyOXVjM1FnZEhkbFpXNXpTVzUwWlhKelpXTjBJRDBnYVc1Q2FXZG5aWEpVYUdGdVQzVjBRWFJUZEdGeWRDQWhQVDBnYVc1Q2FXZG5aWEpVYUdGdVQzVjBRWFJGYm1RN1hHNWNiaUFnSUNCamIyNXpkQ0JpYkdWdVpFTjFjblpsSUQwZ1cxc3dMQ0J2ZFhSV1lXeDFaUzVqZFhKeVpXNTBYU3dnVzNScGJXVlZiblJwYkU5MWRFVnVaQ3dnYVc1UWIzTnBkR2x2YmtGMFQzVjBSVzVrWFYwN1hHNWNiaUFnSUNBdkx5QkpaaUIwZDJWbGJuTWdhVzUwWlhKelpXTjBMQ0J5WlhOdmJIWmxJSFIzWldWdWN5QmhkQ0JoSUhKbGMyOXNkWFJwYjI0Z2RHOGdabWx1WkNCbGVHRmpkR3g1SUhkb1pYSmxYRzRnSUNBZ2FXWWdLSFIzWldWdWMwbHVkR1Z5YzJWamRDa2dlMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQjBhVzFsVTNSbGNGUnZWR1Z6ZENBOUlIUnBiV1ZWYm5ScGJFOTFkRVZ1WkNBdklFSk1SVTVFWDBGRFExVlNRVU5aTzF4dUlDQWdJQ0FnSUNCc1pYUWdabTkxYm1SUU1TQTlJR1poYkhObE8xeHVJQ0FnSUNBZ0lDQnNaWFFnWm05MWJtUlFNaUE5SUdaaGJITmxPMXh1WEc0Z0lDQWdJQ0FnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3OUlFSk1SVTVFWDBGRFExVlNRVU5aT3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUhScGJXVlRkR1Z3SUQwZ2FTQXFJSFJwYldWVGRHVndWRzlVWlhOME8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdiM1YwUVhSVWFXMWxJRDBnWldGelpTaG5aWFJRY205bmNtVnpjMFp5YjIxV1lXeDFaU2h2ZFhSQlkzUnBiMjR1Wld4aGNITmxaQ0FySUhScGJXVlRkR1Z3TENCdmRYUldZV3gxWlM1a1pXeGhlU3dnYjNWMFZtRnNkV1V1WkhWeVlYUnBiMjRwTENCdmRYUldZV3gxWlM1bWNtOXRMQ0J2ZFhSV1lXeDFaUzUwYnl3Z2IzVjBWbUZzZFdVdVpXRnpaU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCcGJrRjBWR2x0WlNBOUlHVmhjMlVvWjJWMFVISnZaM0psYzNOR2NtOXRWbUZzZFdVb2FXNUJZM1JwYjI0dVpXeGhjSE5sWkNBcklIUnBiV1ZUZEdWd0xDQnBibFpoYkhWbExtUmxiR0Y1TENCcGJsWmhiSFZsTG1SMWNtRjBhVzl1S1N3Z2FXNVdZV3gxWlM1bWNtOXRMQ0JwYmxaaGJIVmxMblJ2TENCcGJsWmhiSFZsTG1WaGMyVXBPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvSVdadmRXNWtVREVnSmlZZ0tDaHBia0pwWjJkbGNsUm9ZVzVQZFhSQmRGTjBZWEowSUNZbUlHbHVRWFJVYVcxbElEd2diM1YwUVhSVWFXMWxLU0I4ZkNBb0lXbHVRbWxuWjJWeVZHaGhiazkxZEVGMFUzUmhjblFnSmlZZ2FXNUJkRlJwYldVZ1BpQnZkWFJCZEZScGJXVXBLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdKc1pXNWtRM1Z5ZG1VdWMzQnNhV05sS0RFc0lEQXNJRnQwYVcxbFUzUmxjQ3dnYVc1QmRGUnBiV1ZkS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCbWIzVnVaRkF4SUQwZ2RISjFaVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLR1p2ZFc1a1VERWdKaVlnS0NocGJrSnBaMmRsY2xSb1lXNVBkWFJCZEZOMFlYSjBJQ1ltSUdsdVFYUlVhVzFsSUR3Z2IzVjBWbUZzZFdVdVkzVnljbVZ1ZENrZ2ZId2dLQ0ZwYmtKcFoyZGxjbFJvWVc1UGRYUkJkRk4wWVhKMElDWW1JR2x1UVhSVWFXMWxJRDRnYjNWMFZtRnNkV1V1WTNWeWNtVnVkQ2twS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1lteGxibVJEZFhKMlpWc3lYU0E5SUZ0MGFXMWxVM1JsY0N3Z2FXNUJkRlJwYldWZE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHWnZkVzVrVURJZ1BTQjBjblZsTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvWm05MWJtUlFNaWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdKeVpXRnJPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2FXWWdLR0pzWlc1a1EzVnlkbVV1YkdWdVozUm9JRDA5UFNBeUtTQjdYRzRnSUNBZ0lDQWdJQzh2SUZCaGMzTWdZbVYwZDJWbGJpQjBkMlZsYm5NZ2RYTnBibWNnYVc1amIyMXBibWNnWldGemFXNW5JR2xtSUdwMWMzUWdkSGR2SUhCdmFXNTBjMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdLQ2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdZbXhsYm1SUWNtOW5jbVZ6Y3lBOUlISmxjM1J5YVdOMEtHZGxkRkJ5YjJkeVpYTnpSbkp2YlZaaGJIVmxLR2x1UVdOMGFXOXVMbVZzWVhCelpXUXNJR0pzWlc1a1EzVnlkbVZiTUYxYk1GMHNJR0pzWlc1a1EzVnlkbVZiTVYxYk1GMHBMQ0F3TENBeEtUdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLR0pzWlc1a1VISnZaM0psYzNNZ1BUMDlJREVwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCbWJHOTNWbUZzZFdVdVlteGxibVJEZFhKMlpTQTlJSFZ1WkdWbWFXNWxaRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUdWaGMyVW9ZbXhsYm1SUWNtOW5jbVZ6Y3l3Z2IzVjBWbUZzZFdVdVkzVnljbVZ1ZEN3Z2FXNVdZV3gxWlM1amRYSnlaVzUwTENCcGJsWmhiSFZsTG1WaGMyVXBPMXh1SUNBZ0lDQWdJQ0I5TzF4dUlDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQzh2SUZCaGMzTWdZbVYwZDJWbGJpQjBkMlZsYm5NZ2RYTnBibWNnWW1WNmFXVnlJR2x1ZEdWeWNHOXNZWFJwYjI1Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUNncElEMCtJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUdKc1pXNWtVSEp2WjNKbGMzTWdQU0J5WlhOMGNtbGpkQ2huWlhSUWNtOW5jbVZ6YzBaeWIyMVdZV3gxWlNocGJrRmpkR2x2Ymk1bGJHRndjMlZrTENCaWJHVnVaRU4xY25abFd6QmRXekJkTENCaWJHVnVaRU4xY25abFd6SmRXekJkS1N3Z01Dd2dNU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCaFVDQTlJR2RsZEZaaGJIVmxSbkp2YlZCeWIyZHlaWE56S0dKc1pXNWtVSEp2WjNKbGMzTXNJR0pzWlc1a1EzVnlkbVZiTUYxYk1WMHNJR0pzWlc1a1EzVnlkbVZiTVYxYk1WMHBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnWWxBZ1BTQm5aWFJXWVd4MVpVWnliMjFRY205bmNtVnpjeWhpYkdWdVpGQnliMmR5WlhOekxDQmliR1Z1WkVOMWNuWmxXekZkV3pGZExDQmliR1Z1WkVOMWNuWmxXekpkV3pGZEtUdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLR0pzWlc1a1VISnZaM0psYzNNZ1BUMDlJREVwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCbWJHOTNWbUZzZFdVdVlteGxibVJEZFhKMlpTQTlJSFZ1WkdWbWFXNWxaRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdhVzVXWVd4MVpTNWpkWEp5Wlc1ME8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdaMlYwVm1Gc2RXVkdjbTl0VUhKdlozSmxjM01vWW14bGJtUlFjbTluY21WemN5d2dZVkFzSUdKUUtUdGNiaUFnSUNBZ0lDQWdmVHRjYmlBZ0lDQjlYRzU5TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvZmxvdy9nZW5lcmF0ZS1ibGVuZC1jdXJ2ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDM3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfSW5wdXQyID0gcmVxdWlyZSgnLi9JbnB1dCcpO1xuXG52YXIgX0lucHV0MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0lucHV0Mik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFBvaW50ZXIgPSBmdW5jdGlvbiAoX0lucHV0KSB7XG4gICAgX2luaGVyaXRzKFBvaW50ZXIsIF9JbnB1dCk7XG5cbiAgICBmdW5jdGlvbiBQb2ludGVyKGluaXRpYWxTdGF0ZSwgbW92ZUV2ZW50LCBldmVudFRvUG9pbnQpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBvaW50ZXIpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9JbnB1dC5jYWxsKHRoaXMsIGluaXRpYWxTdGF0ZSkpO1xuXG4gICAgICAgIF90aGlzLmV2ZW50VG9Qb2ludCA9IGV2ZW50VG9Qb2ludDtcbiAgICAgICAgX3RoaXMubW92ZUV2ZW50ID0gbW92ZUV2ZW50O1xuICAgICAgICBfdGhpcy5ib3VuZExhdGVzdCA9IF90aGlzLmxhdGVzdC5iaW5kKF90aGlzKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIFBvaW50ZXIucHJvdG90eXBlLmxhdGVzdCA9IGZ1bmN0aW9uIGxhdGVzdChlKSB7XG4gICAgICAgIF9JbnB1dC5wcm90b3R5cGUubGF0ZXN0LmNhbGwodGhpcywgdGhpcy5ldmVudFRvUG9pbnQoZSkpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfTtcblxuICAgIFBvaW50ZXIucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICAgIF9JbnB1dC5wcm90b3R5cGUuc3RhcnQuY2FsbCh0aGlzKTtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5tb3ZlRXZlbnQsIHRoaXMuYm91bmRMYXRlc3QpO1xuICAgIH07XG5cbiAgICBQb2ludGVyLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgICAgX0lucHV0LnByb3RvdHlwZS5zdG9wLmNhbGwodGhpcyk7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMubW92ZUV2ZW50LCB0aGlzLmJvdW5kTGF0ZXN0KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFBvaW50ZXI7XG59KF9JbnB1dDMuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFBvaW50ZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibkIxZEM5UWIybHVkR1Z5TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdRVUZCUVRzN096czdPenM3T3pzN08wbEJSWEZDTEU4N096dEJRVU5xUWl4eFFrRkJXU3haUVVGYUxFVkJRVEJDTEZOQlFURkNMRVZCUVhGRExGbEJRWEpETEVWQlFXMUVPMEZCUVVFN08wRkJRVUVzY1VSQlF5OURMR3RDUVVGTkxGbEJRVTRzUTBGRUswTTdPMEZCUlM5RExHTkJRVXNzV1VGQlRDeEhRVUZ2UWl4WlFVRndRanRCUVVOQkxHTkJRVXNzVTBGQlRDeEhRVUZwUWl4VFFVRnFRanRCUVVOS0xHTkJRVXNzVjBGQlRDeEhRVUZ0UWl4TlFVRkxMRTFCUVV3c1EwRkJXU3hKUVVGYUxFOUJRVzVDTzBGQlNtMUVPMEZCUzJ4RU96dHpRa0ZGUkN4TkxHMUNRVUZQTEVNc1JVRkJSenRCUVVOT0xIbENRVUZOTEUxQlFVNHNXVUZCWVN4TFFVRkxMRmxCUVV3c1EwRkJhMElzUTBGQmJFSXNRMEZCWWp0QlFVTkJMRlZCUVVVc1kwRkJSanRCUVVOSUxFczdPM05DUVVWRUxFc3NiMEpCUVZFN1FVRkRTaXg1UWtGQlRTeExRVUZPTzBGQlEwRXNhVUpCUVZNc1pVRkJWQ3hEUVVGNVFpeG5Ra0ZCZWtJc1EwRkJNRU1zUzBGQlN5eFRRVUV2UXl4RlFVRXdSQ3hMUVVGTExGZEJRUzlFTzBGQlEwZ3NTenM3YzBKQlJVUXNTU3h0UWtGQlR6dEJRVU5JTEhsQ1FVRk5MRWxCUVU0N1FVRkRRU3hwUWtGQlV5eGxRVUZVTEVOQlFYbENMRzFDUVVGNlFpeERRVUUyUXl4TFFVRkxMRk5CUVd4RUxFVkJRVFpFTEV0QlFVc3NWMEZCYkVVN1FVRkRTQ3hMT3pzN096dHJRa0Z5UW1kQ0xFOGlMQ0ptYVd4bElqb2lVRzlwYm5SbGNpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmFuWmhibVJsY21SdlpYTXZRMjlrWlM5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1NXNXdkWFFnWm5KdmJTQW5MaTlKYm5CMWRDYzdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR05zWVhOeklGQnZhVzUwWlhJZ1pYaDBaVzVrY3lCSmJuQjFkQ0I3WEc0Z0lDQWdZMjl1YzNSeWRXTjBiM0lvYVc1cGRHbGhiRk4wWVhSbExDQnRiM1psUlhabGJuUXNJR1YyWlc1MFZHOVFiMmx1ZENrZ2UxeHVJQ0FnSUNBZ0lDQnpkWEJsY2locGJtbDBhV0ZzVTNSaGRHVXBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtVjJaVzUwVkc5UWIybHVkQ0E5SUdWMlpXNTBWRzlRYjJsdWREdGNiaUFnSUNBZ0lDQWdkR2hwY3k1dGIzWmxSWFpsYm5RZ1BTQnRiM1psUlhabGJuUTdYRzVjZEZ4MFhIUmNkSFJvYVhNdVltOTFibVJNWVhSbGMzUWdQU0IwYUdsekxteGhkR1Z6ZEM1aWFXNWtLSFJvYVhNcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUd4aGRHVnpkQ2hsS1NCN1hHNGdJQ0FnSUNBZ0lITjFjR1Z5TG14aGRHVnpkQ2gwYUdsekxtVjJaVzUwVkc5UWIybHVkQ2hsS1NrN1hHNGdJQ0FnSUNBZ0lHVXVjSEpsZG1WdWRFUmxabUYxYkhRb0tUdGNiaUFnSUNCOVhHNWNiaUFnSUNCemRHRnlkQ2dwSUh0Y2JpQWdJQ0FnSUNBZ2MzVndaWEl1YzNSaGNuUW9LVHRjYmlBZ0lDQWdJQ0FnWkc5amRXMWxiblF1Wkc5amRXMWxiblJGYkdWdFpXNTBMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9kR2hwY3k1dGIzWmxSWFpsYm5Rc0lIUm9hWE11WW05MWJtUk1ZWFJsYzNRcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhOMGIzQW9LU0I3WEc0Z0lDQWdJQ0FnSUhOMWNHVnlMbk4wYjNBb0tUdGNiaUFnSUNBZ0lDQWdaRzlqZFcxbGJuUXVaRzlqZFcxbGJuUkZiR1Z0Wlc1MExuSmxiVzkyWlVWMlpXNTBUR2x6ZEdWdVpYSW9kR2hwY3k1dGIzWmxSWFpsYm5Rc0lIUm9hWE11WW05MWJtUk1ZWFJsYzNRcE8xeHVJQ0FnSUgxY2JuMWNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5wdXQvUG9pbnRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDM4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlYWN0aXZhdGUgPSBleHBvcnRzLmdldFRhc2tJZCA9IHVuZGVmaW5lZDtcbmV4cG9ydHMuYWN0aXZhdGUgPSBhY3RpdmF0ZTtcblxudmFyIF90aW1lciA9IHJlcXVpcmUoJy4vdGltZXInKTtcblxudmFyIF90aW1lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90aW1lcik7XG5cbnZhciBfdGljayA9IHJlcXVpcmUoJy4vdGljaycpO1xuXG52YXIgX3RpY2syID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdGljayk7XG5cbnZhciBfbWFuYWdlciA9IHJlcXVpcmUoJy4vbWFuYWdlcicpO1xuXG52YXIgX21hbmFnZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWFuYWdlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciB0YXNrU3RlcE9yZGVyID0gW3sgbmFtZTogJ29uRnJhbWVTdGFydCcgfSwgeyBuYW1lOiAnb25VcGRhdGUnIH0sIHsgbmFtZTogJ3dpbGxSZW5kZXInLCBkZWNpZGVSZW5kZXI6IHRydWUgfSwgeyBuYW1lOiAnb25QcmVSZW5kZXInLCBpc1JlbmRlcjogdHJ1ZSB9LCB7IG5hbWU6ICdvblJlbmRlcicsIGlzUmVuZGVyOiB0cnVlIH0sIHsgbmFtZTogJ29uUG9zdFJlbmRlcicsIGlzUmVuZGVyOiB0cnVlIH0sIHsgbmFtZTogJ29uRnJhbWVFbmQnIH0sIHsgbmFtZTogJ29uQ2xlYW51cCcgfV07IC8qXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29yZSByZW5kZXIgbG9vcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU29tZSBkZWNpY2lzb25zIGhlcmUgaGF2ZSBiZWVuIHRha2VuIGluIHRoZSBuYW1lIG9mIHBlcmZvcm1hbmNlLiBBbGwgaGFpbCBwZXJmb3JtYW5jZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoSXQgdHVybnMgb3V0IG1pY3Jvb3B0aW1pc2F0aW9ucyBkbyBtYXR0ZXIgd2hlbiB5b3UgaGF2ZSAxNm1zKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cblxudmFyIG51bVRhc2tTdGVwcyA9IHRhc2tTdGVwT3JkZXIubGVuZ3RoO1xuXG4vLyBbYm9vbGVhbl06IElzIGxvb3AgcnVubmluZz9cbnZhciBpc1J1bm5pbmcgPSBmYWxzZTtcblxuLypcbiAgICBbdGltZXN0YW1wXTogRnJhbWUgdGltZXN0YW1wXG4gICAgW2ludF06IFRpbWUgc2luY2UgbGFzdCBmcmFtZVxuKi9cbmZ1bmN0aW9uIGZpcmVBbGwoZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgIHZhciBhY3RpdmVJZHMgPSBfbWFuYWdlcjIuZGVmYXVsdC5nZXRBY3RpdmVJZHMoKTtcbiAgICB2YXIgYWN0aXZlVGFza0NvdW50ID0gYWN0aXZlSWRzLmxlbmd0aDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtVGFza1N0ZXBzOyBpKyspIHtcbiAgICAgICAgdmFyIHN0ZXAgPSB0YXNrU3RlcE9yZGVyW2ldO1xuXG4gICAgICAgIGZvciAodmFyIGkyID0gMDsgaTIgPCBhY3RpdmVUYXNrQ291bnQ7IGkyKyspIHtcbiAgICAgICAgICAgIHZhciB0YXNrID0gX21hbmFnZXIyLmRlZmF1bHQuYWN0aXZlVGFza3NbYWN0aXZlSWRzW2kyXV07XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoaXMgdGFzayBoYXMgdGhpcyBzdGVwLCBvciBpZiBpdCdzIGEgcmVuZGVyIHN0ZXAgdGhhdCB3ZSdyZSByZW5kZXJpbmcgdGhpcyBmcmFtZVxuICAgICAgICAgICAgaWYgKHRhc2sgJiYgdGFza1tzdGVwLm5hbWVdICYmICghc3RlcC5pc1JlbmRlciB8fCBzdGVwLmlzUmVuZGVyICYmIHRhc2suX3JlbmRlclRoaXNGcmFtZSA9PT0gdHJ1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0YXNrW3N0ZXAubmFtZV0uY2FsbCh0YXNrLCB0YXNrLCBmcmFtZVN0YW1wLCBlbGFwc2VkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgdGhpcyBpcyBhIGRlY2lkZSByZW5kZXIgc3RlcCBhbmQgaXQgcmV0dXJucyBgZmFsc2VgLCBzZXQgd2lsbFJlbmRlciB0byBmYWxzZVxuICAgICAgICAgICAgaWYgKHN0ZXAuZGVjaWRlUmVuZGVyKSB7XG4gICAgICAgICAgICAgICAgdGFzay5fcmVuZGVyVGhpc0ZyYW1lID0gdGFza1tzdGVwLm5hbWVdICYmIHJlc3VsdCAhPT0gdHJ1ZSA/IGZhbHNlIDogdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBfbWFuYWdlcjIuZGVmYXVsdC5nZXROb25CYWNrZ3JvdW5kUnVubmluZ0NvdW50KCk7XG59XG5cbi8vIEZ1bmN0aW9uIHRvIGZpcmUgZXZlcnkgZnJhbWVcbmZ1bmN0aW9uIGZyYW1lKGZyYW1lU3RhbXApIHtcbiAgICBfdGltZXIyLmRlZmF1bHQudXBkYXRlKGZyYW1lU3RhbXApO1xuICAgIGlzUnVubmluZyA9IGZpcmVBbGwoZnJhbWVTdGFtcCwgX3RpbWVyMi5kZWZhdWx0LmdldEVsYXBzZWQoKSk7XG5cbiAgICBpZiAoaXNSdW5uaW5nKSB7XG4gICAgICAgICgwLCBfdGljazIuZGVmYXVsdCkoZnJhbWUpO1xuICAgIH1cbn1cblxuLy8gU3RhcnQgbG9vcFxuZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgaWYgKCFpc1J1bm5pbmcpIHtcbiAgICAgICAgX3RpbWVyMi5kZWZhdWx0LnN0YXJ0KCk7XG4gICAgICAgIGlzUnVubmluZyA9IHRydWU7XG4gICAgICAgICgwLCBfdGljazIuZGVmYXVsdCkoZnJhbWUpO1xuICAgIH1cbn1cblxuLy8gRXhwb3J0c1xudmFyIGdldFRhc2tJZCA9IGV4cG9ydHMuZ2V0VGFza0lkID0gX21hbmFnZXIyLmRlZmF1bHQuZ2V0VGFza0lkO1xuXG4vKlxuICAgIFtpbnRdOiB0YXNrIElEIHRvIGFjdGl2YXRlXG4gICAgW3Rhc2tdOiB0YXNrIHRvIGFjdGl2YXRlXG4qL1xuZnVuY3Rpb24gYWN0aXZhdGUoaWQsIHRhc2spIHtcbiAgICBfbWFuYWdlcjIuZGVmYXVsdC5hY3RpdmF0ZShpZCwgdGFzayk7XG5cbiAgICBpZiAoIWlzUnVubmluZykge1xuICAgICAgICBzdGFydCgpO1xuICAgIH1cbn1cblxuLypcbiAgICBbaW50XTogdGFzayBJRCB0byBkZWFjdGl2YXRlXG4qL1xudmFyIGRlYWN0aXZhdGUgPSBleHBvcnRzLmRlYWN0aXZhdGUgPSBfbWFuYWdlcjIuZGVmYXVsdC5kZWFjdGl2YXRlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkwWVhOckwyeHZiM0F1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dFJRV2xHWjBJc1VTeEhRVUZCTEZFN08wRkJNMFZvUWpzN096dEJRVU5CT3pzN08wRkJRMEU3T3pzN096dEJRVVZCTEVsQlFVMHNaMEpCUVdkQ0xFTkJRMnhDTEVWQlFVVXNUVUZCVFN4alFVRlNMRVZCUkd0Q0xFVkJSV3hDTEVWQlFVVXNUVUZCVFN4VlFVRlNMRVZCUm10Q0xFVkJSMnhDTEVWQlFVVXNUVUZCVFN4WlFVRlNMRVZCUVhOQ0xHTkJRV01zU1VGQmNFTXNSVUZJYTBJc1JVRkpiRUlzUlVGQlJTeE5RVUZOTEdGQlFWSXNSVUZCZFVJc1ZVRkJWU3hKUVVGcVF5eEZRVXByUWl4RlFVdHNRaXhGUVVGRkxFMUJRVTBzVlVGQlVpeEZRVUZ2UWl4VlFVRlZMRWxCUVRsQ0xFVkJUR3RDTEVWQlRXeENMRVZCUVVVc1RVRkJUU3hqUVVGU0xFVkJRWGRDTEZWQlFWVXNTVUZCYkVNc1JVRk9hMElzUlVGUGJFSXNSVUZCUlN4TlFVRk5MRmxCUVZJc1JVRlFhMElzUlVGUmJFSXNSVUZCUlN4TlFVRk5MRmRCUVZJc1JVRlNhMElzUTBGQmRFSXNRenM3T3pzN096dEJRVlZCTEVsQlFVMHNaVUZCWlN4alFVRmpMRTFCUVc1RE96czdRVUZIUVN4SlFVRkpMRmxCUVZrc1MwRkJhRUk3T3pzN096dEJRVTFCTEZOQlFWTXNUMEZCVkN4RFFVRnBRaXhWUVVGcVFpeEZRVUUyUWl4UFFVRTNRaXhGUVVGelF6dEJRVU5zUXl4UlFVRk5MRmxCUVZrc2EwSkJRVkVzV1VGQlVpeEZRVUZzUWp0QlFVTkJMRkZCUVUwc2EwSkJRV3RDTEZWQlFWVXNUVUZCYkVNN08wRkJSVUVzVTBGQlN5eEpRVUZKTEVsQlFVa3NRMEZCWWl4RlFVRm5RaXhKUVVGSkxGbEJRWEJDTEVWQlFXdERMRWRCUVd4RExFVkJRWFZETzBGQlEyNURMRmxCUVUwc1QwRkJUeXhqUVVGakxFTkJRV1FzUTBGQllqczdRVUZGUVN4aFFVRkxMRWxCUVVrc1MwRkJTeXhEUVVGa0xFVkJRV2xDTEV0QlFVc3NaVUZCZEVJc1JVRkJkVU1zU1VGQmRrTXNSVUZCTmtNN1FVRkRla01zWjBKQlFVMHNUMEZCVHl4clFrRkJVU3hYUVVGU0xFTkJRVzlDTEZWQlFWVXNSVUZCVml4RFFVRndRaXhEUVVGaU8wRkJRMEVzWjBKQlFVa3NVMEZCVXl4TFFVRmlPenM3UVVGSFFTeG5Ra0ZCU1N4UlFVRlJMRXRCUVVzc1MwRkJTeXhKUVVGV0xFTkJRVklzUzBGQk5FSXNRMEZCUXl4TFFVRkxMRkZCUVU0c1NVRkJiVUlzUzBGQlN5eFJRVUZNTEVsQlFXbENMRXRCUVVzc1owSkJRVXdzUzBGQk1FSXNTVUZCTVVZc1EwRkJTaXhGUVVGelJ6dEJRVU5zUnl4NVFrRkJVeXhMUVVGTExFdEJRVXNzU1VGQlZpeEZRVUZuUWl4SlFVRm9RaXhEUVVGeFFpeEpRVUZ5UWl4RlFVRXlRaXhKUVVFelFpeEZRVUZwUXl4VlFVRnFReXhGUVVFMlF5eFBRVUUzUXl4RFFVRlVPMEZCUTBnN096dEJRVWRFTEdkQ1FVRkpMRXRCUVVzc1dVRkJWQ3hGUVVGMVFqdEJRVU51UWl4eFFrRkJTeXhuUWtGQlRDeEhRVUY1UWl4TFFVRkxMRXRCUVVzc1NVRkJWaXhMUVVGdFFpeFhRVUZYTEVsQlFTOUNMRWRCUVhWRExFdEJRWFpETEVkQlFTdERMRWxCUVhaRk8wRkJRMGc3UVVGRFNqdEJRVU5LT3p0QlFVVkVMRmRCUVU4c2EwSkJRVkVzTkVKQlFWSXNSVUZCVUR0QlFVTklPenM3UVVGSFJDeFRRVUZUTEV0QlFWUXNRMEZCWlN4VlFVRm1MRVZCUVRKQ08wRkJRM1pDTEc5Q1FVRk5MRTFCUVU0c1EwRkJZU3hWUVVGaU8wRkJRMEVzWjBKQlFWa3NVVUZCVVN4VlFVRlNMRVZCUVc5Q0xHZENRVUZOTEZWQlFVNHNSVUZCY0VJc1EwRkJXanM3UVVGRlFTeFJRVUZKTEZOQlFVb3NSVUZCWlR0QlFVTllMRFJDUVVGTExFdEJRVXc3UVVGRFNEdEJRVU5LT3pzN1FVRkhSQ3hUUVVGVExFdEJRVlFzUjBGQmFVSTdRVUZEWWl4UlFVRkpMRU5CUVVNc1UwRkJUQ3hGUVVGblFqdEJRVU5hTEhkQ1FVRk5MRXRCUVU0N1FVRkRRU3h2UWtGQldTeEpRVUZhTzBGQlEwRXNORUpCUVVzc1MwRkJURHRCUVVOSU8wRkJRMG83T3p0QlFVZE5MRWxCUVUwc1owTkJRVmtzYTBKQlFWRXNVMEZCTVVJN096czdPenRCUVUxQkxGTkJRVk1zVVVGQlZDeERRVUZyUWl4RlFVRnNRaXhGUVVGelFpeEpRVUYwUWl4RlFVRTBRanRCUVVNdlFpeHpRa0ZCVVN4UlFVRlNMRU5CUVdsQ0xFVkJRV3BDTEVWQlFYRkNMRWxCUVhKQ096dEJRVVZCTEZGQlFVa3NRMEZCUXl4VFFVRk1MRVZCUVdkQ08wRkJRMW83UVVGRFNEdEJRVU5LT3pzN096dEJRVXROTEVsQlFVMHNhME5CUVdFc2EwSkJRVkVzVlVGQk0wSWlMQ0ptYVd4bElqb2liRzl2Y0M1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YW5aaGJtUmxjbVJ2WlhNdlEyOWtaUzl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJdktseHVJQ0FnSUVOdmNtVWdjbVZ1WkdWeUlHeHZiM0JjYmx4dUlDQWdJRk52YldVZ1pHVmphV05wYzI5dWN5Qm9aWEpsSUdoaGRtVWdZbVZsYmlCMFlXdGxiaUJwYmlCMGFHVWdibUZ0WlNCdlppQndaWEptYjNKdFlXNWpaUzRnUVd4c0lHaGhhV3dnY0dWeVptOXliV0Z1WTJVdVhHNGdJQ0FnS0VsMElIUjFjbTV6SUc5MWRDQnRhV055YjI5d2RHbHRhWE5oZEdsdmJuTWdaRzhnYldGMGRHVnlJSGRvWlc0Z2VXOTFJR2hoZG1VZ01UWnRjeWxjYmlvdlhHNXBiWEJ2Y25RZ2RHbHRaWElnWm5KdmJTQW5MaTkwYVcxbGNpYzdYRzVwYlhCdmNuUWdkR2xqYXlCbWNtOXRJQ2N1TDNScFkyc25PMXh1YVcxd2IzSjBJRzFoYm1GblpYSWdabkp2YlNBbkxpOXRZVzVoWjJWeUp6dGNibHh1WTI5dWMzUWdkR0Z6YTFOMFpYQlBjbVJsY2lBOUlGdGNiaUFnSUNCN0lHNWhiV1U2SUNkdmJrWnlZVzFsVTNSaGNuUW5JSDBzWEc0Z0lDQWdleUJ1WVcxbE9pQW5iMjVWY0dSaGRHVW5JSDBzWEc0Z0lDQWdleUJ1WVcxbE9pQW5kMmxzYkZKbGJtUmxjaWNzSUdSbFkybGtaVkpsYm1SbGNqb2dkSEoxWlNCOUxGeHVJQ0FnSUhzZ2JtRnRaVG9nSjI5dVVISmxVbVZ1WkdWeUp5d2dhWE5TWlc1a1pYSTZJSFJ5ZFdVZ2ZTeGNiaUFnSUNCN0lHNWhiV1U2SUNkdmJsSmxibVJsY2ljc0lHbHpVbVZ1WkdWeU9pQjBjblZsSUgwc1hHNGdJQ0FnZXlCdVlXMWxPaUFuYjI1UWIzTjBVbVZ1WkdWeUp5d2dhWE5TWlc1a1pYSTZJSFJ5ZFdVZ2ZTeGNiaUFnSUNCN0lHNWhiV1U2SUNkdmJrWnlZVzFsUlc1a0p5QjlMRnh1SUNBZ0lIc2dibUZ0WlRvZ0oyOXVRMnhsWVc1MWNDY2dmVnh1WFR0Y2JtTnZibk4wSUc1MWJWUmhjMnRUZEdWd2N5QTlJSFJoYzJ0VGRHVndUM0prWlhJdWJHVnVaM1JvTzF4dVhHNHZMeUJiWW05dmJHVmhibDA2SUVseklHeHZiM0FnY25WdWJtbHVaejljYm14bGRDQnBjMUoxYm01cGJtY2dQU0JtWVd4elpUdGNibHh1THlwY2JpQWdJQ0JiZEdsdFpYTjBZVzF3WFRvZ1JuSmhiV1VnZEdsdFpYTjBZVzF3WEc0Z0lDQWdXMmx1ZEYwNklGUnBiV1VnYzJsdVkyVWdiR0Z6ZENCbWNtRnRaVnh1S2k5Y2JtWjFibU4wYVc5dUlHWnBjbVZCYkd3b1puSmhiV1ZUZEdGdGNDd2daV3hoY0hObFpDa2dlMXh1SUNBZ0lHTnZibk4wSUdGamRHbDJaVWxrY3lBOUlHMWhibUZuWlhJdVoyVjBRV04wYVhabFNXUnpLQ2s3WEc0Z0lDQWdZMjl1YzNRZ1lXTjBhWFpsVkdGemEwTnZkVzUwSUQwZ1lXTjBhWFpsU1dSekxteGxibWQwYUR0Y2JseHVJQ0FnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z2JuVnRWR0Z6YTFOMFpYQnpPeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2MzUmxjQ0E5SUhSaGMydFRkR1Z3VDNKa1pYSmJhVjA3WEc1Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2FUSWdQU0F3T3lCcE1pQThJR0ZqZEdsMlpWUmhjMnREYjNWdWREc2dhVElyS3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdkR0Z6YXlBOUlHMWhibUZuWlhJdVlXTjBhWFpsVkdGemEzTmJZV04wYVhabFNXUnpXMmt5WFYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JzWlhRZ2NtVnpkV3gwSUQwZ1ptRnNjMlU3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUVOb1pXTnJJR2xtSUhSb2FYTWdkR0Z6YXlCb1lYTWdkR2hwY3lCemRHVndMQ0J2Y2lCcFppQnBkQ2R6SUdFZ2NtVnVaR1Z5SUhOMFpYQWdkR2hoZENCM1pTZHlaU0J5Wlc1a1pYSnBibWNnZEdocGN5Qm1jbUZ0WlZ4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0hSaGMyc2dKaVlnZEdGemExdHpkR1Z3TG01aGJXVmRJQ1ltSUNnaGMzUmxjQzVwYzFKbGJtUmxjaUI4ZkNBb2MzUmxjQzVwYzFKbGJtUmxjaUFtSmlCMFlYTnJMbDl5Wlc1a1pYSlVhR2x6Um5KaGJXVWdQVDA5SUhSeWRXVXBLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbGMzVnNkQ0E5SUhSaGMydGJjM1JsY0M1dVlXMWxYUzVqWVd4c0tIUmhjMnNzSUhSaGMyc3NJR1p5WVcxbFUzUmhiWEFzSUdWc1lYQnpaV1FwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJKWmlCMGFHbHpJR2x6SUdFZ1pHVmphV1JsSUhKbGJtUmxjaUJ6ZEdWd0lHRnVaQ0JwZENCeVpYUjFjbTV6SUdCbVlXeHpaV0FzSUhObGRDQjNhV3hzVW1WdVpHVnlJSFJ2SUdaaGJITmxYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9jM1JsY0M1a1pXTnBaR1ZTWlc1a1pYSXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwWVhOckxsOXlaVzVrWlhKVWFHbHpSbkpoYldVZ1BTQW9kR0Z6YTF0emRHVndMbTVoYldWZElDWW1JSEpsYzNWc2RDQWhQVDBnZEhKMVpTa2dQeUJtWVd4elpTQTZJSFJ5ZFdVN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0J5WlhSMWNtNGdiV0Z1WVdkbGNpNW5aWFJPYjI1Q1lXTnJaM0p2ZFc1a1VuVnVibWx1WjBOdmRXNTBLQ2s3WEc1OVhHNWNiaTh2SUVaMWJtTjBhVzl1SUhSdklHWnBjbVVnWlhabGNua2dabkpoYldWY2JtWjFibU4wYVc5dUlHWnlZVzFsS0daeVlXMWxVM1JoYlhBcElIdGNiaUFnSUNCMGFXMWxjaTUxY0dSaGRHVW9abkpoYldWVGRHRnRjQ2s3WEc0Z0lDQWdhWE5TZFc1dWFXNW5JRDBnWm1seVpVRnNiQ2htY21GdFpWTjBZVzF3TENCMGFXMWxjaTVuWlhSRmJHRndjMlZrS0NrcE8xeHVYRzRnSUNBZ2FXWWdLR2x6VW5WdWJtbHVaeWtnZTF4dUlDQWdJQ0FnSUNCMGFXTnJLR1p5WVcxbEtUdGNiaUFnSUNCOVhHNTlYRzVjYmk4dklGTjBZWEowSUd4dmIzQmNibVoxYm1OMGFXOXVJSE4wWVhKMEtDa2dlMXh1SUNBZ0lHbG1JQ2doYVhOU2RXNXVhVzVuS1NCN1hHNGdJQ0FnSUNBZ0lIUnBiV1Z5TG5OMFlYSjBLQ2s3WEc0Z0lDQWdJQ0FnSUdselVuVnVibWx1WnlBOUlIUnlkV1U3WEc0Z0lDQWdJQ0FnSUhScFkyc29abkpoYldVcE8xeHVJQ0FnSUgxY2JuMWNibHh1THk4Z1JYaHdiM0owYzF4dVpYaHdiM0owSUdOdmJuTjBJR2RsZEZSaGMydEpaQ0E5SUcxaGJtRm5aWEl1WjJWMFZHRnphMGxrTzF4dVhHNHZLbHh1SUNBZ0lGdHBiblJkT2lCMFlYTnJJRWxFSUhSdklHRmpkR2wyWVhSbFhHNGdJQ0FnVzNSaGMydGRPaUIwWVhOcklIUnZJR0ZqZEdsMllYUmxYRzRxTDF4dVpYaHdiM0owSUdaMWJtTjBhVzl1SUdGamRHbDJZWFJsS0dsa0xDQjBZWE5yS1NCN1hHNGdJQ0FnYldGdVlXZGxjaTVoWTNScGRtRjBaU2hwWkN3Z2RHRnpheWs3WEc1Y2JpQWdJQ0JwWmlBb0lXbHpVblZ1Ym1sdVp5a2dlMXh1SUNBZ0lDQWdJQ0J6ZEdGeWRDZ3BPMXh1SUNBZ0lIMWNibjFjYmx4dUx5cGNiaUFnSUNCYmFXNTBYVG9nZEdGemF5QkpSQ0IwYnlCa1pXRmpkR2wyWVhSbFhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHUmxZV04wYVhaaGRHVWdQU0J0WVc1aFoyVnlMbVJsWVdOMGFYWmhkR1U3SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdGFzay9sb29wLmpzXG4gKiogbW9kdWxlIGlkID0gMzlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBUUkFOU0xBVEUgPSAndHJhbnNsYXRlJztcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIHg6IFRSQU5TTEFURSArICdYJyxcbiAgICB5OiBUUkFOU0xBVEUgKyAnWScsXG4gICAgejogVFJBTlNMQVRFICsgJ1onXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMMk56Y3k5emRHRjBaUzF0WVhBdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPMEZCUVVFc1NVRkJUU3haUVVGWkxGZEJRV3hDT3p0clFrRkZaVHRCUVVOWUxFOUJRVWNzV1VGQldTeEhRVVJLTzBGQlJWZ3NUMEZCUnl4WlFVRlpMRWRCUmtvN1FVRkhXQ3hQUVVGSExGbEJRVms3UVVGSVNpeERJaXdpWm1sc1pTSTZJbk4wWVhSbExXMWhjQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZhblpoYm1SbGNtUnZaWE12UTI5a1pTOXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpqYjI1emRDQlVVa0ZPVTB4QlZFVWdQU0FuZEhKaGJuTnNZWFJsSnp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2UxeHVJQ0FnSUhnNklGUlNRVTVUVEVGVVJTQXJJQ2RZSnl4Y2JpQWdJQ0I1T2lCVVVrRk9VMHhCVkVVZ0t5QW5XU2NzWEc0Z0lDQWdlam9nVkZKQlRsTk1RVlJGSUNzZ0oxb25YRzU5T3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FkYXB0ZXIvY3NzL3N0YXRlLW1hcC5qc1xuICoqIG1vZHVsZSBpZCA9IDQwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfYW5nbGUgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9hbmdsZScpO1xuXG52YXIgX2FuZ2xlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FuZ2xlKTtcblxudmFyIF9hbHBoYSA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL2FscGhhJyk7XG5cbnZhciBfYWxwaGEyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWxwaGEpO1xuXG52YXIgX2NvbG9yID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvY29sb3InKTtcblxudmFyIF9jb2xvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb2xvcik7XG5cbnZhciBfc2NhbGUgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9zY2FsZScpO1xuXG52YXIgX3NjYWxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NjYWxlKTtcblxudmFyIF9zaGFkb3cgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9zaGFkb3cnKTtcblxudmFyIF9zaGFkb3cyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2hhZG93KTtcblxudmFyIF9weCA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL3B4Jyk7XG5cbnZhciBfcHgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgLy8gQ29sb3IgcHJvcHNcbiAgICBjb2xvcjogX2NvbG9yMi5kZWZhdWx0LFxuICAgIGJhY2tncm91bmRDb2xvcjogX2NvbG9yMi5kZWZhdWx0LFxuICAgIG91dGxpbmVDb2xvcjogX2NvbG9yMi5kZWZhdWx0LFxuICAgIGZpbGw6IF9jb2xvcjIuZGVmYXVsdCxcbiAgICBzdHJva2U6IF9jb2xvcjIuZGVmYXVsdCxcblxuICAgIC8vIEJvcmRlciBwcm9wc1xuICAgIGJvcmRlckNvbG9yOiBfY29sb3IyLmRlZmF1bHQsXG4gICAgYm9yZGVyVG9wQ29sb3I6IF9jb2xvcjIuZGVmYXVsdCxcbiAgICBib3JkZXJSaWdodENvbG9yOiBfY29sb3IyLmRlZmF1bHQsXG4gICAgYm9yZGVyQm90dG9tQ29sb3I6IF9jb2xvcjIuZGVmYXVsdCxcbiAgICBib3JkZXJMZWZ0Q29sb3I6IF9jb2xvcjIuZGVmYXVsdCxcbiAgICBib3JkZXJSYWRpdXM6IF9weDIuZGVmYXVsdCxcblxuICAgIC8vIFBvc2l0aW9uaW5nXG4gICAgd2lkdGg6IF9weDIuZGVmYXVsdCxcbiAgICBoZWlnaHQ6IF9weDIuZGVmYXVsdCxcblxuICAgIC8vIFNoYWRvd3NcbiAgICB0ZXh0U2hhZG93OiBfc2hhZG93Mi5kZWZhdWx0LFxuICAgIGJveFNoYWRvdzogX3NoYWRvdzIuZGVmYXVsdCxcblxuICAgIC8vIFRyYW5zZm9ybSBwcm9wZXJ0aWVzXG4gICAgcm90YXRlOiBfYW5nbGUyLmRlZmF1bHQsXG4gICAgcm90YXRlWDogX2FuZ2xlMi5kZWZhdWx0LFxuICAgIHJvdGF0ZVk6IF9hbmdsZTIuZGVmYXVsdCxcbiAgICByb3RhdGVaOiBfYW5nbGUyLmRlZmF1bHQsXG4gICAgc2NhbGU6IF9zY2FsZTIuZGVmYXVsdCxcbiAgICBzY2FsZVg6IF9zY2FsZTIuZGVmYXVsdCxcbiAgICBzY2FsZVk6IF9zY2FsZTIuZGVmYXVsdCxcbiAgICBzY2FsZVo6IF9zY2FsZTIuZGVmYXVsdCxcbiAgICBza2V3WDogX2FuZ2xlMi5kZWZhdWx0LFxuICAgIHNrZXdZOiBfYW5nbGUyLmRlZmF1bHQsXG4gICAgZGlzdGFuY2U6IF9weDIuZGVmYXVsdCxcbiAgICB0cmFuc2xhdGVYOiBfcHgyLmRlZmF1bHQsXG4gICAgdHJhbnNsYXRlWTogX3B4Mi5kZWZhdWx0LFxuICAgIHRyYW5zbGF0ZVo6IF9weDIuZGVmYXVsdCxcbiAgICBwZXJzcGVjdGl2ZTogX3B4Mi5kZWZhdWx0LFxuICAgIG9wYWNpdHk6IF9hbHBoYTIuZGVmYXVsdFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFpHRndkR1Z5TDJOemN5OTJZV3gxWlMxMGVYQmxMVzFoY0M1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPMEZCUVVFN096czdRVUZEUVRzN096dEJRVU5CT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3T3pzN2EwSkJSV1U3TzBGQlJWZ3NNRUpCUmxjN1FVRkhXQ3h2UTBGSVZ6dEJRVWxZTEdsRFFVcFhPMEZCUzFnc2VVSkJURmM3UVVGTldDd3lRa0ZPVnpzN08wRkJVMWdzWjBOQlZGYzdRVUZWV0N4dFEwRldWenRCUVZkWUxIRkRRVmhYTzBGQldWZ3NjME5CV2xjN1FVRmhXQ3h2UTBGaVZ6dEJRV05ZTERoQ1FXUlhPenM3UVVGcFFsZ3NkVUpCYWtKWE8wRkJhMEpZTEhkQ1FXeENWenM3TzBGQmNVSllMR2REUVhKQ1Z6dEJRWE5DV0N3clFrRjBRbGM3T3p0QlFYbENXQ3d5UWtGNlFsYzdRVUV3UWxnc05FSkJNVUpYTzBGQk1rSllMRFJDUVROQ1Z6dEJRVFJDV0N3MFFrRTFRbGM3UVVFMlFsZ3NNRUpCTjBKWE8wRkJPRUpZTERKQ1FUbENWenRCUVN0Q1dDd3lRa0V2UWxjN1FVRm5RMWdzTWtKQmFFTlhPMEZCYVVOWUxEQkNRV3BEVnp0QlFXdERXQ3d3UWtGc1ExYzdRVUZ0UTFnc01FSkJia05YTzBGQmIwTllMRFJDUVhCRFZ6dEJRWEZEV0N3MFFrRnlRMWM3UVVGelExZ3NORUpCZEVOWE8wRkJkVU5ZTERaQ1FYWkRWenRCUVhkRFdEdEJRWGhEVnl4RElpd2labWxzWlNJNkluWmhiSFZsTFhSNWNHVXRiV0Z3TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlxZG1GdVpHVnlaRzlsY3k5RGIyUmxMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0JoYm1kc1pTQm1jbTl0SUNjdUxpOHVMaTkyWVd4MVpTMTBlWEJsY3k5aGJtZHNaU2M3WEc1cGJYQnZjblFnWVd4d2FHRWdabkp2YlNBbkxpNHZMaTR2ZG1Gc2RXVXRkSGx3WlhNdllXeHdhR0VuTzF4dWFXMXdiM0owSUdOdmJHOXlJR1p5YjIwZ0p5NHVMeTR1TDNaaGJIVmxMWFI1Y0dWekwyTnZiRzl5Snp0Y2JtbHRjRzl5ZENCelkyRnNaU0JtY205dElDY3VMaTh1TGk5MllXeDFaUzEwZVhCbGN5OXpZMkZzWlNjN1hHNXBiWEJ2Y25RZ2MyaGhaRzkzSUdaeWIyMGdKeTR1THk0dUwzWmhiSFZsTFhSNWNHVnpMM05vWVdSdmR5YzdYRzVwYlhCdmNuUWdjSGdnWm5KdmJTQW5MaTR2TGk0dmRtRnNkV1V0ZEhsd1pYTXZjSGduTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCN1hHNGdJQ0FnTHk4Z1EyOXNiM0lnY0hKdmNITmNiaUFnSUNCamIyeHZjam9nWTI5c2IzSXNYRzRnSUNBZ1ltRmphMmR5YjNWdVpFTnZiRzl5T2lCamIyeHZjaXhjYmlBZ0lDQnZkWFJzYVc1bFEyOXNiM0k2SUdOdmJHOXlMRnh1SUNBZ0lHWnBiR3c2SUdOdmJHOXlMRnh1SUNBZ0lITjBjbTlyWlRvZ1kyOXNiM0lzWEc1Y2JpQWdJQ0F2THlCQ2IzSmtaWElnY0hKdmNITmNiaUFnSUNCaWIzSmtaWEpEYjJ4dmNqb2dZMjlzYjNJc1hHNGdJQ0FnWW05eVpHVnlWRzl3UTI5c2IzSTZJR052Ykc5eUxGeHVJQ0FnSUdKdmNtUmxjbEpwWjJoMFEyOXNiM0k2SUdOdmJHOXlMRnh1SUNBZ0lHSnZjbVJsY2tKdmRIUnZiVU52Ykc5eU9pQmpiMnh2Y2l4Y2JpQWdJQ0JpYjNKa1pYSk1aV1owUTI5c2IzSTZJR052Ykc5eUxGeHVJQ0FnSUdKdmNtUmxjbEpoWkdsMWN6b2djSGdzWEc1Y2JpQWdJQ0F2THlCUWIzTnBkR2x2Ym1sdVoxeHVJQ0FnSUhkcFpIUm9PaUJ3ZUN4Y2JpQWdJQ0JvWldsbmFIUTZJSEI0TEZ4dVhHNGdJQ0FnTHk4Z1UyaGhaRzkzYzF4dUlDQWdJSFJsZUhSVGFHRmtiM2M2SUhOb1lXUnZkeXhjYmlBZ0lDQmliM2hUYUdGa2IzYzZJSE5vWVdSdmR5d2dJQ0JjYmx4dUlDQWdJQzh2SUZSeVlXNXpabTl5YlNCd2NtOXdaWEowYVdWelhHNGdJQ0FnY205MFlYUmxPaUJoYm1kc1pTeGNiaUFnSUNCeWIzUmhkR1ZZT2lCaGJtZHNaU3hjYmlBZ0lDQnliM1JoZEdWWk9pQmhibWRzWlN4Y2JpQWdJQ0J5YjNSaGRHVmFPaUJoYm1kc1pTeGNiaUFnSUNCelkyRnNaVG9nYzJOaGJHVXNYRzRnSUNBZ2MyTmhiR1ZZT2lCelkyRnNaU3hjYmlBZ0lDQnpZMkZzWlZrNklITmpZV3hsTEZ4dUlDQWdJSE5qWVd4bFdqb2djMk5oYkdVc1hHNGdJQ0FnYzJ0bGQxZzZJR0Z1WjJ4bExGeHVJQ0FnSUhOclpYZFpPaUJoYm1kc1pTeGNiaUFnSUNCa2FYTjBZVzVqWlRvZ2NIZ3NYRzRnSUNBZ2RISmhibk5zWVhSbFdEb2djSGdzWEc0Z0lDQWdkSEpoYm5Oc1lYUmxXVG9nY0hnc1hHNGdJQ0FnZEhKaGJuTnNZWFJsV2pvZ2NIZ3NYRzRnSUNBZ2NHVnljM0JsWTNScGRtVTZJSEI0TEZ4dUlDQWdJRzl3WVdOcGRIazZJR0ZzY0doaFhHNTlPeUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9jc3MvdmFsdWUtdHlwZS1tYXAuanNcbiAqKiBtb2R1bGUgaWQgPSA0MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzID0gcmVxdWlyZSgnLi90cmFuc2Zvcm0tcHJvcHMnKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2Zvcm1Qcm9wcyk7XG5cbnZhciBfcHJlZml4ZXIgPSByZXF1aXJlKCcuL3ByZWZpeGVyJyk7XG5cbnZhciBfcHJlZml4ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlZml4ZXIpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vLi4vaW5jL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBUUkFOU0xBVEVfWiA9ICd0cmFuc2xhdGVaJztcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHN0YXRlLCBkaXNhYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pIHtcbiAgICB2YXIgcHJvcGVydHlTdHJpbmcgPSAnJztcbiAgICB2YXIgdHJhbnNmb3JtU3RyaW5nID0gJyc7XG4gICAgdmFyIHRyYW5zZm9ybUhhc1ogPSBmYWxzZTtcblxuICAgIGZvciAodmFyIGtleSBpbiBzdGF0ZSkge1xuICAgICAgICBpZiAoc3RhdGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gc3RhdGVba2V5XTtcblxuICAgICAgICAgICAgaWYgKF90cmFuc2Zvcm1Qcm9wczIuZGVmYXVsdFtrZXldKSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtU3RyaW5nICs9IGtleSArICcoJyArIHZhbHVlICsgJykgJztcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1IYXNaID0ga2V5ID09PSBUUkFOU0xBVEVfWiA/IHRydWUgOiB0cmFuc2Zvcm1IYXNaO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eVN0cmluZyArPSAnOycgKyAoMCwgX3ByZWZpeGVyMi5kZWZhdWx0KSgoMCwgX3V0aWxzLmNhbWVsVG9EYXNoKShrZXkpKSArICc6JyArIHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRyYW5zZm9ybVN0cmluZyAhPT0gJycpIHtcbiAgICAgICAgaWYgKCF0cmFuc2Zvcm1IYXNaICYmICFkaXNhYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybVN0cmluZyArPSBUUkFOU0xBVEVfWiArICcoMHB4KSc7XG4gICAgICAgIH1cblxuICAgICAgICBwcm9wZXJ0eVN0cmluZyArPSAnOycgKyAoMCwgX3ByZWZpeGVyMi5kZWZhdWx0KSgndHJhbnNmb3JtJykgKyAnOicgKyB0cmFuc2Zvcm1TdHJpbmc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5U3RyaW5nO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFpHRndkR1Z5TDJOemN5OWlkV2xzWkM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPMEZCUVVFN096czdRVUZEUVRzN096dEJRVU5CT3pzN08wRkJSVUVzU1VGQlRTeGpRVUZqTEZsQlFYQkNPenRyUWtGRlpTeFZRVUZETEV0QlFVUXNSVUZCVVN3eVFrRkJVaXhGUVVGM1F6dEJRVU51UkN4UlFVRkpMR2xDUVVGcFFpeEZRVUZ5UWp0QlFVTkJMRkZCUVVrc2EwSkJRV3RDTEVWQlFYUkNPMEZCUTBFc1VVRkJTU3huUWtGQlowSXNTMEZCY0VJN08wRkJSVUVzVTBGQlN5eEpRVUZKTEVkQlFWUXNTVUZCWjBJc1MwRkJhRUlzUlVGQmRVSTdRVUZEYmtJc1dVRkJTU3hOUVVGTkxHTkJRVTRzUTBGQmNVSXNSMEZCY2tJc1EwRkJTaXhGUVVFclFqdEJRVU16UWl4blFrRkJUU3hSUVVGUkxFMUJRVTBzUjBGQlRpeERRVUZrT3p0QlFVVkJMR2RDUVVGSkxIbENRVUZsTEVkQlFXWXNRMEZCU2l4RlFVRjVRanRCUVVOeVFpeHRRMEZCYlVJc1RVRkJUU3hIUVVGT0xFZEJRVmtzUzBGQldpeEhRVUZ2UWl4SlFVRjJRenRCUVVOQkxHZERRVUZwUWl4UlFVRlJMRmRCUVZRc1IwRkJkMElzU1VGQmVFSXNSMEZCSzBJc1lVRkJMME03UVVGRlNDeGhRVXBFTEUxQlNVODdRVUZEU0N4clEwRkJhMElzVFVGQlRTeDNRa0ZCVXl4M1FrRkJXU3hIUVVGYUxFTkJRVlFzUTBGQlRpeEhRVUZ0UXl4SFFVRnVReXhIUVVGNVF5eExRVUV6UkR0QlFVTklPMEZCUTBvN1FVRkRTanM3UVVGRlJDeFJRVUZKTEc5Q1FVRnZRaXhGUVVGNFFpeEZRVUUwUWp0QlFVTjRRaXhaUVVGSkxFTkJRVU1zWVVGQlJDeEpRVUZyUWl4RFFVRkRMREpDUVVGMlFpeEZRVUZ2UkR0QlFVTm9SQ3dyUWtGQmJVSXNZMEZCWXl4UFFVRnFRenRCUVVOSU96dEJRVVZFTERCQ1FVRnJRaXhOUVVGTkxIZENRVUZUTEZkQlFWUXNRMEZCVGl4SFFVRTRRaXhIUVVFNVFpeEhRVUZ2UXl4bFFVRjBSRHRCUVVOSU96dEJRVVZFTEZkQlFVOHNZMEZCVUR0QlFVTklMRU1pTENKbWFXeGxJam9pWW5WcGJHUXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwycDJZVzVrWlhKa2IyVnpMME52WkdVdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElIUnlZVzV6Wm05eWJWQnliM0J6SUdaeWIyMGdKeTR2ZEhKaGJuTm1iM0p0TFhCeWIzQnpKenRjYm1sdGNHOXlkQ0J3Y21WbWFYaGxjaUJtY205dElDY3VMM0J5WldacGVHVnlKenRjYm1sdGNHOXlkQ0I3SUdOaGJXVnNWRzlFWVhOb0lIMGdabkp2YlNBbkxpNHZMaTR2YVc1akwzVjBhV3h6Snp0Y2JseHVZMjl1YzNRZ1ZGSkJUbE5NUVZSRlgxb2dQU0FuZEhKaGJuTnNZWFJsV2ljN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElDaHpkR0YwWlN3Z1pHbHpZV0pzWlVoaGNtUjNZWEpsUVdOalpXeGxjbUYwYVc5dUtTQTlQaUI3WEc0Z0lDQWdiR1YwSUhCeWIzQmxjblI1VTNSeWFXNW5JRDBnSnljN1hHNGdJQ0FnYkdWMElIUnlZVzV6Wm05eWJWTjBjbWx1WnlBOUlDY25PMXh1SUNBZ0lHeGxkQ0IwY21GdWMyWnZjbTFJWVhOYUlEMGdabUZzYzJVN1hHNWNiaUFnSUNCbWIzSWdLR3hsZENCclpYa2dhVzRnYzNSaGRHVXBJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tITjBZWFJsTG1oaGMwOTNibEJ5YjNCbGNuUjVLR3RsZVNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJSFpoYkhWbElEMGdjM1JoZEdWYmEyVjVYVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0hSeVlXNXpabTl5YlZCeWIzQnpXMnRsZVYwcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBjbUZ1YzJadmNtMVRkSEpwYm1jZ0t6MGdhMlY1SUNzZ0p5Z25JQ3NnZG1Gc2RXVWdLeUFuS1NBbk8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUnlZVzV6Wm05eWJVaGhjMW9nUFNBb2EyVjVJRDA5UFNCVVVrRk9VMHhCVkVWZldpa2dQeUIwY25WbElEb2dkSEpoYm5ObWIzSnRTR0Z6V2p0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J3Y205d1pYSjBlVk4wY21sdVp5QXJQU0FuT3ljZ0t5QndjbVZtYVhobGNpaGpZVzFsYkZSdlJHRnphQ2hyWlhrcEtTQXJJQ2M2SnlBcklIWmhiSFZsTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVnh1WEc0Z0lDQWdhV1lnS0hSeVlXNXpabTl5YlZOMGNtbHVaeUFoUFQwZ0p5Y3BJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tDRjBjbUZ1YzJadmNtMUlZWE5hSUNZbUlDRmthWE5oWW14bFNHRnlaSGRoY21WQlkyTmxiR1Z5WVhScGIyNHBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUnlZVzV6Wm05eWJWTjBjbWx1WnlBclBTQlVVa0ZPVTB4QlZFVmZXaUFySUNjb01IQjRLU2M3WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQndjbTl3WlhKMGVWTjBjbWx1WnlBclBTQW5PeWNnS3lCd2NtVm1hWGhsY2lnbmRISmhibk5tYjNKdEp5a2dLeUFuT2ljZ0t5QjBjbUZ1YzJadmNtMVRkSEpwYm1jN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WMGRYSnVJSEJ5YjNCbGNuUjVVM1J5YVc1bk8xeHVmVHNpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9jc3MvYnVpbGQuanNcbiAqKiBtb2R1bGUgaWQgPSA0MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIGNhY2hlID0ge307XG52YXIgcHJlZml4ZXMgPSBbJ1dlYmtpdCcsICdNb3onLCAnTycsICdtcycsICcnXTtcbnZhciBudW1QcmVmaXhlcyA9IHByZWZpeGVzLmxlbmd0aDtcbnZhciB0ZXN0RWxlbWVudCA9IHZvaWQgMDtcblxuLypcbiAgICBUZXN0IHN0eWxlIHByb3BlcnR5IGZvciBwcmVmaXhlZCB2ZXJzaW9uXG4gICAgXG4gICAgQHBhcmFtIFtzdHJpbmddOiBTdHlsZSBwcm9wZXJ0eVxuICAgIEByZXR1cm4gW3N0cmluZ106IENhY2hlZCBwcm9wZXJ0eSBuYW1lXG4qL1xudmFyIHRlc3RQcmVmaXggPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgdGVzdEVsZW1lbnQgPSB0ZXN0RWxlbWVudCB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGlmIChjYWNoZVtrZXldID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2FjaGVba2V5XSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtUHJlZml4ZXM7IGkrKykge1xuICAgICAgICB2YXIgcHJlZml4ID0gcHJlZml4ZXNbaV0sXG4gICAgICAgICAgICBwcmVmaXhlZCA9IHByZWZpeCA9PT0gJycgPyBrZXkgOiBwcmVmaXggKyBrZXkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBrZXkuc2xpY2UoMSk7XG5cbiAgICAgICAgaWYgKHByZWZpeGVkIGluIHRlc3RFbGVtZW50LnN0eWxlKSB7XG4gICAgICAgICAgICBjYWNoZVtrZXldID0gcHJlZml4ZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY2FjaGVba2V5XTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gY2FjaGVba2V5XSB8fCB0ZXN0UHJlZml4KGtleSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMMk56Y3k5d2NtVm1hWGhsY2k1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdRVUZCUVN4SlFVRk5MRkZCUVZFc1JVRkJaRHRCUVVOQkxFbEJRVTBzVjBGQlZ5eERRVUZETEZGQlFVUXNSVUZCVlN4TFFVRldMRVZCUVdkQ0xFZEJRV2hDTEVWQlFXOUNMRWxCUVhCQ0xFVkJRVEJDTEVWQlFURkNMRU5CUVdwQ08wRkJRMEVzU1VGQlRTeGpRVUZqTEZOQlFWTXNUVUZCTjBJN1FVRkRRU3hKUVVGSkxHOUNRVUZLT3pzN096czdPenRCUVZGQkxFbEJRVTBzWVVGQllTeFZRVUZETEVkQlFVUXNSVUZCVXp0QlFVTjRRaXhyUWtGQll5eGxRVUZsTEZOQlFWTXNZVUZCVkN4RFFVRjFRaXhMUVVGMlFpeERRVUUzUWpzN1FVRkZRU3hSUVVGSkxFMUJRVTBzUjBGQlRpeE5RVUZsTEV0QlFXNUNMRVZCUVRCQ08wRkJRM1JDTEdWQlFVOHNTMEZCVUR0QlFVTklMRXRCUmtRc1RVRkZUenRCUVVOSUxHTkJRVTBzUjBGQlRpeEpRVUZoTEV0QlFXSTdRVUZEU0RzN1FVRkZSQ3hUUVVGTExFbEJRVWtzU1VGQlNTeERRVUZpTEVWQlFXZENMRWxCUVVrc1YwRkJjRUlzUlVGQmFVTXNSMEZCYWtNc1JVRkJjME03UVVGRGJFTXNXVUZCU1N4VFFVRlRMRk5CUVZNc1EwRkJWQ3hEUVVGaU8xbEJRMGtzVjBGQldTeFhRVUZYTEVWQlFWb3NSMEZCYTBJc1IwRkJiRUlzUjBGQmQwSXNVMEZCVXl4SlFVRkpMRTFCUVVvc1EwRkJWeXhEUVVGWUxFVkJRV01zVjBGQlpDeEZRVUZVTEVkQlFYVkRMRWxCUVVrc1MwRkJTaXhEUVVGVkxFTkJRVllzUTBGRU9VVTdPMEZCUjBFc1dVRkJTU3haUVVGWkxGbEJRVmtzUzBGQk5VSXNSVUZCYlVNN1FVRkRMMElzYTBKQlFVMHNSMEZCVGl4SlFVRmhMRkZCUVdJN1FVRkRTRHRCUVVOS096dEJRVVZFTEZkQlFVOHNUVUZCVFN4SFFVRk9MRU5CUVZBN1FVRkRTQ3hEUVc1Q1JEczdhMEpCY1VKbExGVkJRVU1zUjBGQlJEdEJRVUZCTEZkQlFWTXNUVUZCVFN4SFFVRk9MRXRCUVdNc1YwRkJWeXhIUVVGWUxFTkJRWFpDTzBGQlFVRXNReUlzSW1acGJHVWlPaUp3Y21WbWFYaGxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZhblpoYm1SbGNtUnZaWE12UTI5a1pTOXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpqYjI1emRDQmpZV05vWlNBOUlIdDlPMXh1WTI5dWMzUWdjSEpsWm1sNFpYTWdQU0JiSjFkbFltdHBkQ2NzSjAxdmVpY3NKMDhuTENkdGN5Y3NJQ2NuWFR0Y2JtTnZibk4wSUc1MWJWQnlaV1pwZUdWeklEMGdjSEpsWm1sNFpYTXViR1Z1WjNSb08xeHViR1YwSUhSbGMzUkZiR1Z0Wlc1ME8xeHVYRzR2S2x4dUlDQWdJRlJsYzNRZ2MzUjViR1VnY0hKdmNHVnlkSGtnWm05eUlIQnlaV1pwZUdWa0lIWmxjbk5wYjI1Y2JpQWdJQ0JjYmlBZ0lDQkFjR0Z5WVcwZ1czTjBjbWx1WjEwNklGTjBlV3hsSUhCeWIzQmxjblI1WEc0Z0lDQWdRSEpsZEhWeWJpQmJjM1J5YVc1blhUb2dRMkZqYUdWa0lIQnliM0JsY25SNUlHNWhiV1ZjYmlvdlhHNWpiMjV6ZENCMFpYTjBVSEpsWm1sNElEMGdLR3RsZVNrZ1BUNGdlMXh1SUNBZ0lIUmxjM1JGYkdWdFpXNTBJRDBnZEdWemRFVnNaVzFsYm5RZ2ZId2daRzlqZFcxbGJuUXVZM0psWVhSbFJXeGxiV1Z1ZENnblpHbDJKeWs3WEc1Y2JpQWdJQ0JwWmlBb1kyRmphR1ZiYTJWNVhTQTlQVDBnWm1Gc2MyVXBJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR1poYkhObE8xeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUdOaFkyaGxXMnRsZVYwZ1BTQm1ZV3h6WlR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JtYjNJZ0tIWmhjaUJwSUQwZ01Ec2dhU0E4SUc1MWJWQnlaV1pwZUdWek95QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ2RtRnlJSEJ5WldacGVDQTlJSEJ5WldacGVHVnpXMmxkTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdjSEpsWm1sNFpXUWdQU0FvY0hKbFptbDRJRDA5UFNBbkp5a2dQeUJyWlhrZ09pQndjbVZtYVhnZ0t5QnJaWGt1WTJoaGNrRjBLREFwTG5SdlZYQndaWEpEWVhObEtDa2dLeUJyWlhrdWMyeHBZMlVvTVNrN1hHNWNiaUFnSUNBZ0lDQWdhV1lnS0hCeVpXWnBlR1ZrSUdsdUlIUmxjM1JGYkdWdFpXNTBMbk4wZVd4bEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCallXTm9aVnRyWlhsZElEMGdjSEpsWm1sNFpXUTdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzRnSUNBZ1hHNGdJQ0FnY21WMGRYSnVJR05oWTJobFcydGxlVjA3WEc1OU8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQW9hMlY1S1NBOVBpQmpZV05vWlZ0clpYbGRJSHg4SUhSbGMzUlFjbVZtYVhnb2EyVjVLVHNpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9jc3MvcHJlZml4ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA0M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2RpY3Rpb25hcnkgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9zZXR0aW5ncy9kaWN0aW9uYXJ5Jyk7XG5cbnZhciB0cmFuc2Zvcm1Qcm9wcyA9IHt9O1xuXG52YXIgU0NBTEUgPSAnc2NhbGUnO1xudmFyIFJPVEFURSA9ICdyb3RhdGUnO1xudmFyIFRSQU5TRk9STV9QRVJTUEVDVElWRSA9ICd0cmFuc2Zvcm1QZXJzcGVjdGl2ZSc7XG52YXIgVEVSTVMgPSBbJ3RyYW5zbGF0ZScsIFNDQUxFLCBST1RBVEUsICdza2V3JywgVFJBTlNGT1JNX1BFUlNQRUNUSVZFXTtcblxudHJhbnNmb3JtUHJvcHNbUk9UQVRFXSA9IHRyYW5zZm9ybVByb3BzW1NDQUxFXSA9IHRyYW5zZm9ybVByb3BzW1RSQU5TRk9STV9QRVJTUEVDVElWRV0gPSB0cnVlO1xuXG5URVJNUy5mb3JFYWNoKGZ1bmN0aW9uICh0ZXJtKSB7XG4gIHJldHVybiBfZGljdGlvbmFyeS5heGVzLmZvckVhY2goZnVuY3Rpb24gKGF4aXMpIHtcbiAgICByZXR1cm4gdHJhbnNmb3JtUHJvcHNbdGVybSArIGF4aXNdID0gdHJ1ZTtcbiAgfSk7XG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gdHJhbnNmb3JtUHJvcHM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwyTnpjeTkwY21GdWMyWnZjbTB0Y0hKdmNITXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0QlFVRkJPenRCUVVWQkxFbEJRVWtzYVVKQlFXbENMRVZCUVhKQ096dEJRVVZCTEVsQlFVMHNVVUZCVVN4UFFVRmtPMEZCUTBFc1NVRkJUU3hUUVVGVExGRkJRV1k3UVVGRFFTeEpRVUZOTEhkQ1FVRjNRaXh6UWtGQk9VSTdRVUZEUVN4SlFVRk5MRkZCUVZFc1EwRkJReXhYUVVGRUxFVkJRV01zUzBGQlpDeEZRVUZ4UWl4TlFVRnlRaXhGUVVFMlFpeE5RVUUzUWl4RlFVRnhReXh4UWtGQmNrTXNRMEZCWkRzN1FVRkZRU3hsUVVGbExFMUJRV1lzU1VGQmVVSXNaVUZCWlN4TFFVRm1MRWxCUVhkQ0xHVkJRV1VzY1VKQlFXWXNTVUZCZDBNc1NVRkJla1k3TzBGQlJVRXNUVUZCVFN4UFFVRk9MRU5CUVdNc1ZVRkJReXhKUVVGRU8wRkJRVUVzVTBGQlZTeHBRa0ZCU3l4UFFVRk1MRU5CUVdFc1ZVRkJReXhKUVVGRU8wRkJRVUVzVjBGQlZTeGxRVUZsTEU5QlFVOHNTVUZCZEVJc1NVRkJPRUlzU1VGQmVFTTdRVUZCUVN4SFFVRmlMRU5CUVZZN1FVRkJRU3hEUVVGa096dHJRa0ZGWlN4aklpd2labWxzWlNJNkluUnlZVzV6Wm05eWJTMXdjbTl3Y3k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YW5aaGJtUmxjbVJ2WlhNdlEyOWtaUzl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZXlCaGVHVnpJSDBnWm5KdmJTQW5MaTR2TGk0dmRtRnNkV1V0ZEhsd1pYTXZjMlYwZEdsdVozTXZaR2xqZEdsdmJtRnllU2M3WEc1Y2JteGxkQ0IwY21GdWMyWnZjbTFRY205d2N5QTlJSHQ5TzF4dVhHNWpiMjV6ZENCVFEwRk1SU0E5SUNkelkyRnNaU2M3WEc1amIyNXpkQ0JTVDFSQlZFVWdQU0FuY205MFlYUmxKenRjYm1OdmJuTjBJRlJTUVU1VFJrOVNUVjlRUlZKVFVFVkRWRWxXUlNBOUlDZDBjbUZ1YzJadmNtMVFaWEp6Y0dWamRHbDJaU2M3WEc1amIyNXpkQ0JVUlZKTlV5QTlJRnNuZEhKaGJuTnNZWFJsSnl3Z1UwTkJURVVzSUZKUFZFRlVSU3dnSjNOclpYY25MQ0JVVWtGT1UwWlBVazFmVUVWU1UxQkZRMVJKVmtWZE8xeHVYRzUwY21GdWMyWnZjbTFRY205d2MxdFNUMVJCVkVWZElEMGdkSEpoYm5ObWIzSnRVSEp2Y0hOYlUwTkJURVZkSUQwZ2RISmhibk5tYjNKdFVISnZjSE5iVkZKQlRsTkdUMUpOWDFCRlVsTlFSVU5VU1ZaRlhTQTlJSFJ5ZFdVN1hHNWNibFJGVWsxVExtWnZja1ZoWTJnb0tIUmxjbTBwSUQwK0lHRjRaWE11Wm05eVJXRmphQ2dvWVhocGN5a2dQVDRnZEhKaGJuTm1iM0p0VUhKdmNITmJkR1Z5YlNBcklHRjRhWE5kSUQwZ2RISjFaU2twTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCMGNtRnVjMlp2Y20xUWNtOXdjenNpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9jc3MvdHJhbnNmb3JtLXByb3BzLmpzXG4gKiogbW9kdWxlIGlkID0gNDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9hbHBoYSA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL2FscGhhJyk7XG5cbnZhciBfYWxwaGEyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWxwaGEpO1xuXG52YXIgX2NvbG9yID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvY29sb3InKTtcblxudmFyIF9jb2xvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb2xvcik7XG5cbnZhciBfY29tcGxleCA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL2NvbXBsZXgnKTtcblxudmFyIF9jb21wbGV4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbXBsZXgpO1xuXG52YXIgX3NjYWxlID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvc2NhbGUnKTtcblxudmFyIF9zY2FsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zY2FsZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBmaWxsOiBfY29sb3IyLmRlZmF1bHQsXG4gICAgc3Ryb2tlOiBfY29sb3IyLmRlZmF1bHQsXG4gICAgc2NhbGU6IF9zY2FsZTIuZGVmYXVsdCxcbiAgICBzY2FsZVg6IF9zY2FsZTIuZGVmYXVsdCxcbiAgICBzY2FsZVk6IF9zY2FsZTIuZGVmYXVsdCxcbiAgICBkOiBfY29tcGxleDIuZGVmYXVsdCxcbiAgICBwb2ludHM6IF9jb21wbGV4Mi5kZWZhdWx0LFxuICAgIG9wYWNpdHk6IF9hbHBoYTIuZGVmYXVsdCxcbiAgICBmaWxsT3BhY2l0eTogX2FscGhhMi5kZWZhdWx0LFxuICAgIHN0cm9rZU9wYWNpdHk6IF9hbHBoYTIuZGVmYXVsdFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFpHRndkR1Z5TDNOMlp5OTJZV3gxWlMxMGVYQmxMVzFoY0M1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPMEZCUVVFN096czdRVUZEUVRzN096dEJRVU5CT3pzN08wRkJRMEU3T3pzN096dHJRa0ZGWlR0QlFVTllMSGxDUVVSWE8wRkJSVmdzTWtKQlJsYzdRVUZIV0N3d1FrRklWenRCUVVsWUxESkNRVXBYTzBGQlMxZ3NNa0pCVEZjN1FVRk5XQ3gzUWtGT1Z6dEJRVTlZTERaQ1FWQlhPMEZCVVZnc05FSkJVbGM3UVVGVFdDeG5RMEZVVnp0QlFWVllPMEZCVmxjc1F5SXNJbVpwYkdVaU9pSjJZV3gxWlMxMGVYQmxMVzFoY0M1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YW5aaGJtUmxjbVJ2WlhNdlEyOWtaUzl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnWVd4d2FHRWdabkp2YlNBbkxpNHZMaTR2ZG1Gc2RXVXRkSGx3WlhNdllXeHdhR0VuTzF4dWFXMXdiM0owSUdOdmJHOXlJR1p5YjIwZ0p5NHVMeTR1TDNaaGJIVmxMWFI1Y0dWekwyTnZiRzl5Snp0Y2JtbHRjRzl5ZENCamIyMXdiR1Y0SUdaeWIyMGdKeTR1THk0dUwzWmhiSFZsTFhSNWNHVnpMMk52YlhCc1pYZ25PMXh1YVcxd2IzSjBJSE5qWVd4bElHWnliMjBnSnk0dUx5NHVMM1poYkhWbExYUjVjR1Z6TDNOallXeGxKenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnZTF4dUlDQWdJR1pwYkd3NklHTnZiRzl5TEZ4dUlDQWdJSE4wY205clpUb2dZMjlzYjNJc1hHNGdJQ0FnYzJOaGJHVTZJSE5qWVd4bExGeHVJQ0FnSUhOallXeGxXRG9nYzJOaGJHVXNYRzRnSUNBZ2MyTmhiR1ZaT2lCelkyRnNaU3hjYmlBZ0lDQmtPaUJqYjIxd2JHVjRMRnh1SUNBZ0lIQnZhVzUwY3pvZ1kyOXRjR3hsZUN4Y2JpQWdJQ0J2Y0dGamFYUjVPaUJoYkhCb1lTeGNiaUFnSUNCbWFXeHNUM0JoWTJsMGVUb2dZV3h3YUdFc1hHNGdJQ0FnYzNSeWIydGxUM0JoWTJsMGVUb2dZV3h3YUdGY2JuMDdJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hZGFwdGVyL3N2Zy92YWx1ZS10eXBlLW1hcC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBidWlsZDtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uLy4uL2luYy91dGlscycpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzID0gcmVxdWlyZSgnLi4vY3NzL3RyYW5zZm9ybS1wcm9wcycpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zZm9ybVByb3BzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIFpFUk9fTk9UX1pFUk8gPSAwLjAwMDE7XG5cbmZ1bmN0aW9uIGJ1aWxkKHN0YXRlLCBkYXRhKSB7XG4gICAgdmFyIGhhc1RyYW5zZm9ybSA9IGZhbHNlO1xuICAgIHZhciBwcm9wcyA9IHt9O1xuICAgIHZhciBzY2FsZSA9IHN0YXRlLnNjYWxlICE9PSB1bmRlZmluZWQgPyBzdGF0ZS5zY2FsZSB8fCBaRVJPX05PVF9aRVJPIDogc3RhdGUuc2NhbGVYIHx8IDE7XG4gICAgdmFyIHNjYWxlWSA9IHN0YXRlLnNjYWxlWSAhPT0gdW5kZWZpbmVkID8gc3RhdGUuc2NhbGVZIHx8IFpFUk9fTk9UX1pFUk8gOiBzY2FsZSB8fCAxO1xuICAgIHZhciB0cmFuc2Zvcm1PcmlnaW5YID0gZGF0YS53aWR0aCAqICgoc3RhdGUub3JpZ2luWCB8fCA1MCkgLyAxMDApICsgZGF0YS54O1xuICAgIHZhciB0cmFuc2Zvcm1PcmlnaW5ZID0gZGF0YS5oZWlnaHQgKiAoKHN0YXRlLm9yaWdpblkgfHwgNTApIC8gMTAwKSArIGRhdGEueTtcbiAgICB2YXIgc2NhbGVUcmFuc2Zvcm1YID0gLXRyYW5zZm9ybU9yaWdpblggKiAoc2NhbGUgKiAxKTtcbiAgICB2YXIgc2NhbGVUcmFuc2Zvcm1ZID0gLXRyYW5zZm9ybU9yaWdpblkgKiAoc2NhbGVZICogMSk7XG4gICAgdmFyIHNjYWxlUmVwbGFjZVggPSB0cmFuc2Zvcm1PcmlnaW5YIC8gc2NhbGU7XG4gICAgdmFyIHNjYWxlUmVwbGFjZVkgPSB0cmFuc2Zvcm1PcmlnaW5ZIC8gc2NhbGVZO1xuICAgIHZhciB0cmFuc2Zvcm0gPSB7XG4gICAgICAgIHRyYW5zbGF0ZTogJ3RyYW5zbGF0ZSgnICsgc3RhdGUudHJhbnNsYXRlWCArICcsICcgKyBzdGF0ZS50cmFuc2xhdGVZICsgJykgJyxcbiAgICAgICAgc2NhbGU6ICd0cmFuc2xhdGUoJyArIHNjYWxlVHJhbnNmb3JtWCArICcsICcgKyBzY2FsZVRyYW5zZm9ybVkgKyAnKSBzY2FsZSgnICsgc2NhbGUgKyAnLCAnICsgc2NhbGVZICsgJykgdHJhbnNsYXRlKCcgKyBzY2FsZVJlcGxhY2VYICsgJywgJyArIHNjYWxlUmVwbGFjZVkgKyAnKSAnLFxuICAgICAgICByb3RhdGU6ICdyb3RhdGUoJyArIHN0YXRlLnJvdGF0ZSArICcsICcgKyB0cmFuc2Zvcm1PcmlnaW5YICsgJywgJyArIHRyYW5zZm9ybU9yaWdpblkgKyAnKSAnLFxuICAgICAgICBza2V3WDogJ3NrZXdYKCcgKyBzdGF0ZS5za2V3WCArICcpICcsXG4gICAgICAgIHNrZXdZOiAnc2tld1koJyArIHN0YXRlLnNrZXdZICsgJykgJ1xuICAgIH07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc3RhdGUpIHtcbiAgICAgICAgaWYgKHN0YXRlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIGlmIChfdHJhbnNmb3JtUHJvcHMyLmRlZmF1bHRba2V5XSkge1xuICAgICAgICAgICAgICAgIGhhc1RyYW5zZm9ybSA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHByb3BzWygwLCBfdXRpbHMuY2FtZWxUb0Rhc2gpKGtleSldID0gc3RhdGVba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChoYXNUcmFuc2Zvcm0pIHtcbiAgICAgICAgcHJvcHMudHJhbnNmb3JtID0gJyc7XG5cbiAgICAgICAgZm9yICh2YXIgX2tleSBpbiB0cmFuc2Zvcm0pIHtcbiAgICAgICAgICAgIGlmICh0cmFuc2Zvcm0uaGFzT3duUHJvcGVydHkoX2tleSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGVmYXVsdFZhbHVlID0gX2tleSA9PT0gJ3NjYWxlJyA/ICcxJyA6ICcwJztcbiAgICAgICAgICAgICAgICBwcm9wcy50cmFuc2Zvcm0gKz0gdHJhbnNmb3JtW19rZXldLnJlcGxhY2UoL3VuZGVmaW5lZC9nLCBkZWZhdWx0VmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BzO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMM04yWnk5aWRXbHNaQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN2EwSkJTM2RDTEVzN08wRkJUSGhDT3p0QlFVTkJPenM3T3pzN1FVRkZRU3hKUVVGTkxHZENRVUZuUWl4TlFVRjBRanM3UVVGRlpTeFRRVUZUTEV0QlFWUXNRMEZCWlN4TFFVRm1MRVZCUVhOQ0xFbEJRWFJDTEVWQlFUUkNPMEZCUTNaRExGRkJRVWtzWlVGQlpTeExRVUZ1UWp0QlFVTkJMRkZCUVUwc1VVRkJVU3hGUVVGa08wRkJRMEVzVVVGQlRTeFJRVUZSTEUxQlFVMHNTMEZCVGl4TFFVRm5RaXhUUVVGb1FpeEhRVUUwUWl4TlFVRk5MRXRCUVU0c1NVRkJaU3hoUVVFelF5eEhRVUV5UkN4TlFVRk5MRTFCUVU0c1NVRkJaMElzUTBGQmVrWTdRVUZEUVN4UlFVRk5MRk5CUVZNc1RVRkJUU3hOUVVGT0xFdEJRV2xDTEZOQlFXcENMRWRCUVRaQ0xFMUJRVTBzVFVGQlRpeEpRVUZuUWl4aFFVRTNReXhIUVVFMlJDeFRRVUZUTEVOQlFYSkdPMEZCUTBFc1VVRkJUU3h0UWtGQmJVSXNTMEZCU3l4TFFVRk1MRWxCUVdNc1EwRkJReXhOUVVGTkxFOUJRVTRzU1VGQmFVSXNSVUZCYkVJc1NVRkJkMElzUjBGQmRFTXNTVUZCTmtNc1MwRkJTeXhEUVVFelJUdEJRVU5CTEZGQlFVMHNiVUpCUVcxQ0xFdEJRVXNzVFVGQlRDeEpRVUZsTEVOQlFVTXNUVUZCVFN4UFFVRk9MRWxCUVdsQ0xFVkJRV3hDTEVsQlFYZENMRWRCUVhaRExFbEJRVGhETEV0QlFVc3NRMEZCTlVVN1FVRkRRU3hSUVVGTkxHdENRVUZyUWl4RFFVRkZMR2RDUVVGR0xFbEJRWE5DTEZGQlFWRXNRMEZCT1VJc1EwRkJlRUk3UVVGRFFTeFJRVUZOTEd0Q1FVRnJRaXhEUVVGRkxHZENRVUZHTEVsQlFYTkNMRk5CUVZNc1EwRkJMMElzUTBGQmVFSTdRVUZEUVN4UlFVRk5MR2RDUVVGblFpeHRRa0ZCYlVJc1MwRkJla003UVVGRFFTeFJRVUZOTEdkQ1FVRm5RaXh0UWtGQmJVSXNUVUZCZWtNN1FVRkRRU3hSUVVGTkxGbEJRVms3UVVGRFpDeHJRMEZCZDBJc1RVRkJUU3hWUVVFNVFpeFZRVUUyUXl4TlFVRk5MRlZCUVc1RUxFOUJSR003UVVGRlpDdzRRa0ZCYjBJc1pVRkJjRUlzVlVGQmQwTXNaVUZCZUVNc1owSkJRV3RGTEV0QlFXeEZMRlZCUVRSRkxFMUJRVFZGTEc5Q1FVRnBSeXhoUVVGcVJ5eFZRVUZ0U0N4aFFVRnVTQ3hQUVVaak8wRkJSMlFzTkVKQlFXdENMRTFCUVUwc1RVRkJlRUlzVlVGQmJVTXNaMEpCUVc1RExGVkJRWGRFTEdkQ1FVRjRSQ3hQUVVoak8wRkJTV1FzTUVKQlFXZENMRTFCUVUwc1MwRkJkRUlzVDBGS1l6dEJRVXRrTERCQ1FVRm5RaXhOUVVGTkxFdEJRWFJDTzBGQlRHTXNTMEZCYkVJN08wRkJVVUVzVTBGQlN5eEpRVUZKTEVkQlFWUXNTVUZCWjBJc1MwRkJhRUlzUlVGQmRVSTdRVUZEYmtJc1dVRkJTU3hOUVVGTkxHTkJRVTRzUTBGQmNVSXNSMEZCY2tJc1EwRkJTaXhGUVVFclFqdEJRVU16UWl4blFrRkJTU3g1UWtGQlpTeEhRVUZtTEVOQlFVb3NSVUZCZVVJN1FVRkRja0lzSzBKQlFXVXNTVUZCWmp0QlFVTklMR0ZCUmtRc1RVRkZUenRCUVVOSUxITkNRVUZOTEhkQ1FVRlpMRWRCUVZvc1EwRkJUaXhKUVVFd1FpeE5RVUZOTEVkQlFVNHNRMEZCTVVJN1FVRkRTRHRCUVVOS08wRkJRMG83TzBGQlJVUXNVVUZCU1N4WlFVRktMRVZCUVd0Q08wRkJRMlFzWTBGQlRTeFRRVUZPTEVkQlFXdENMRVZCUVd4Q096dEJRVVZCTEdGQlFVc3NTVUZCU1N4SlFVRlVMRWxCUVdkQ0xGTkJRV2hDTEVWQlFUSkNPMEZCUTNaQ0xHZENRVUZKTEZWQlFWVXNZMEZCVml4RFFVRjVRaXhKUVVGNlFpeERRVUZLTEVWQlFXMURPMEZCUXk5Q0xHOUNRVUZOTEdWQlFXZENMRk5CUVZFc1QwRkJWQ3hIUVVGdlFpeEhRVUZ3UWl4SFFVRXdRaXhIUVVFdlF6dEJRVU5CTEhOQ1FVRk5MRk5CUVU0c1NVRkJiVUlzVlVGQlZTeEpRVUZXTEVWQlFXVXNUMEZCWml4RFFVRjFRaXhaUVVGMlFpeEZRVUZ4UXl4WlFVRnlReXhEUVVGdVFqdEJRVU5JTzBGQlEwbzdRVUZEU2pzN1FVRkZSQ3hYUVVGUExFdEJRVkE3UVVGRFNDSXNJbVpwYkdVaU9pSmlkV2xzWkM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YW5aaGJtUmxjbVJ2WlhNdlEyOWtaUzl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZXlCallXMWxiRlJ2UkdGemFDQjlJR1p5YjIwZ0p5NHVMeTR1TDJsdVl5OTFkR2xzY3ljN1hHNXBiWEJ2Y25RZ2RISmhibk5tYjNKdFVISnZjSE1nWm5KdmJTQW5MaTR2WTNOekwzUnlZVzV6Wm05eWJTMXdjbTl3Y3ljN1hHNWNibU52Ym5OMElGcEZVazlmVGs5VVgxcEZVazhnUFNBd0xqQXdNREU3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdaMWJtTjBhVzl1SUdKMWFXeGtLSE4wWVhSbExDQmtZWFJoS1NCN1hHNGdJQ0FnYkdWMElHaGhjMVJ5WVc1elptOXliU0E5SUdaaGJITmxPMXh1SUNBZ0lHTnZibk4wSUhCeWIzQnpJRDBnZTMwN1hHNGdJQ0FnWTI5dWMzUWdjMk5oYkdVZ1BTQnpkR0YwWlM1elkyRnNaU0FoUFQwZ2RXNWtaV1pwYm1Wa0lEOGdjM1JoZEdVdWMyTmhiR1VnZkh3Z1drVlNUMTlPVDFSZldrVlNUeUE2SUhOMFlYUmxMbk5qWVd4bFdDQjhmQ0F4TzF4dUlDQWdJR052Ym5OMElITmpZV3hsV1NBOUlITjBZWFJsTG5OallXeGxXU0FoUFQwZ2RXNWtaV1pwYm1Wa0lEOGdjM1JoZEdVdWMyTmhiR1ZaSUh4OElGcEZVazlmVGs5VVgxcEZVazhnT2lCelkyRnNaU0I4ZkNBeE8xeHVJQ0FnSUdOdmJuTjBJSFJ5WVc1elptOXliVTl5YVdkcGJsZ2dQU0JrWVhSaExuZHBaSFJvSUNvZ0tDaHpkR0YwWlM1dmNtbG5hVzVZSUh4OElEVXdLU0F2SURFd01Da2dLeUJrWVhSaExuZzdYRzRnSUNBZ1kyOXVjM1FnZEhKaGJuTm1iM0p0VDNKcFoybHVXU0E5SUdSaGRHRXVhR1ZwWjJoMElDb2dLQ2h6ZEdGMFpTNXZjbWxuYVc1WklIeDhJRFV3S1NBdklERXdNQ2tnS3lCa1lYUmhMbms3WEc0Z0lDQWdZMjl1YzNRZ2MyTmhiR1ZVY21GdWMyWnZjbTFZSUQwZ0xTQjBjbUZ1YzJadmNtMVBjbWxuYVc1WUlDb2dLSE5qWVd4bElDb2dNU2s3WEc0Z0lDQWdZMjl1YzNRZ2MyTmhiR1ZVY21GdWMyWnZjbTFaSUQwZ0xTQjBjbUZ1YzJadmNtMVBjbWxuYVc1WklDb2dLSE5qWVd4bFdTQXFJREVwTzF4dUlDQWdJR052Ym5OMElITmpZV3hsVW1Wd2JHRmpaVmdnUFNCMGNtRnVjMlp2Y20xUGNtbG5hVzVZSUM4Z2MyTmhiR1U3WEc0Z0lDQWdZMjl1YzNRZ2MyTmhiR1ZTWlhCc1lXTmxXU0E5SUhSeVlXNXpabTl5YlU5eWFXZHBibGtnTHlCelkyRnNaVms3WEc0Z0lDQWdZMjl1YzNRZ2RISmhibk5tYjNKdElEMGdlMXh1SUNBZ0lDQWdJQ0IwY21GdWMyeGhkR1U2SUdCMGNtRnVjMnhoZEdVb0pIdHpkR0YwWlM1MGNtRnVjMnhoZEdWWWZTd2dKSHR6ZEdGMFpTNTBjbUZ1YzJ4aGRHVlpmU2tnWUN4Y2JpQWdJQ0FnSUNBZ2MyTmhiR1U2SUdCMGNtRnVjMnhoZEdVb0pIdHpZMkZzWlZSeVlXNXpabTl5YlZoOUxDQWtlM05qWVd4bFZISmhibk5tYjNKdFdYMHBJSE5qWVd4bEtDUjdjMk5oYkdWOUxDQWtlM05qWVd4bFdYMHBJSFJ5WVc1emJHRjBaU2drZTNOallXeGxVbVZ3YkdGalpWaDlMQ0FrZTNOallXeGxVbVZ3YkdGalpWbDlLU0JnTEZ4dUlDQWdJQ0FnSUNCeWIzUmhkR1U2SUdCeWIzUmhkR1VvSkh0emRHRjBaUzV5YjNSaGRHVjlMQ0FrZTNSeVlXNXpabTl5YlU5eWFXZHBibGg5TENBa2UzUnlZVzV6Wm05eWJVOXlhV2RwYmxsOUtTQmdMRnh1SUNBZ0lDQWdJQ0J6YTJWM1dEb2dZSE5yWlhkWUtDUjdjM1JoZEdVdWMydGxkMWg5S1NCZ0xGeHVJQ0FnSUNBZ0lDQnphMlYzV1RvZ1lITnJaWGRaS0NSN2MzUmhkR1V1YzJ0bGQxbDlLU0JnWEc0Z0lDQWdmVHRjYmx4dUlDQWdJR1p2Y2lBb2JHVjBJR3RsZVNCcGJpQnpkR0YwWlNrZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvYzNSaGRHVXVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2EyVjVLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0hSeVlXNXpabTl5YlZCeWIzQnpXMnRsZVYwcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQm9ZWE5VY21GdWMyWnZjbTBnUFNCMGNuVmxPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCd2NtOXdjMXRqWVcxbGJGUnZSR0Z6YUNoclpYa3BYU0E5SUhOMFlYUmxXMnRsZVYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0JwWmlBb2FHRnpWSEpoYm5ObWIzSnRLU0I3WEc0Z0lDQWdJQ0FnSUhCeWIzQnpMblJ5WVc1elptOXliU0E5SUNjbk8xeHVYRzRnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR3RsZVNCcGJpQjBjbUZ1YzJadmNtMHBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2gwY21GdWMyWnZjbTB1YUdGelQzZHVVSEp2Y0dWeWRIa29hMlY1S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUdSbFptRjFiSFJXWVd4MVpTQTlJQ2hyWlhrZ1BUMDlJQ2R6WTJGc1pTY3BJRDhnSnpFbklEb2dKekFuTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhCeWIzQnpMblJ5WVc1elptOXliU0FyUFNCMGNtRnVjMlp2Y20xYmEyVjVYUzV5WlhCc1lXTmxLQzkxYm1SbFptbHVaV1F2Wnl3Z1pHVm1ZWFZzZEZaaGJIVmxLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lISmxkSFZ5YmlCd2NtOXdjenRjYm4waVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FkYXB0ZXIvc3ZnL2J1aWxkLmpzXG4gKiogbW9kdWxlIGlkID0gNDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8qXG4gICAgQ29udmVydCBwZXJjZW50YWdlIHRvIHBpeGVsc1xuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogUGVyY2VudGFnZSBvZiB0b3RhbCBsZW5ndGhcbiAgICBAcGFyYW0gW251bWJlcl06IFRvdGFsIGxlbmd0aFxuKi9cbnZhciBwZXJjZW50VG9QaXhlbHMgPSBmdW5jdGlvbiAocGVyY2VudCwgbGVuZ3RoKSB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQocGVyY2VudCkgLyAxMDAgKiBsZW5ndGggKyAncHgnO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHN0YXRlLCBsZW5ndGgpIHtcbiAgICB2YXIgc3R5bGVzID0ge307XG4gICAgdmFyIGRhc2hBcnJheVN0eWxlcyA9IHtcbiAgICAgICAgbGVuZ3RoOiAwLFxuICAgICAgICBzcGFjaW5nOiBsZW5ndGggKyAncHgnXG4gICAgfTtcbiAgICB2YXIgaGFzRGFzaEFycmF5ID0gZmFsc2U7XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc3RhdGUpIHtcbiAgICAgICAgaWYgKHN0YXRlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHN0YXRlW2tleV07XG5cbiAgICAgICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnbGVuZ3RoJzpcbiAgICAgICAgICAgICAgICBjYXNlICdzcGFjaW5nJzpcbiAgICAgICAgICAgICAgICAgICAgaGFzRGFzaEFycmF5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgZGFzaEFycmF5U3R5bGVzW2tleV0gPSBwZXJjZW50VG9QaXhlbHModmFsdWUsIGxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ29mZnNldCc6XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlc1snc3Ryb2tlLWRhc2hvZmZzZXQnXSA9IHBlcmNlbnRUb1BpeGVscygtdmFsdWUsIGxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlc1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaGFzRGFzaEFycmF5KSB7XG4gICAgICAgIHN0eWxlc1snc3Ryb2tlLWRhc2hhcnJheSddID0gZGFzaEFycmF5U3R5bGVzLmxlbmd0aCArICcgJyArIGRhc2hBcnJheVN0eWxlcy5zcGFjaW5nO1xuICAgIH1cblxuICAgIHJldHVybiBzdHlsZXM7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMM04yWnkxd1lYUm9MMkoxYVd4a0xtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN096dEJRVTFCTEVsQlFVMHNhMEpCUVd0Q0xGVkJRVU1zVDBGQlJDeEZRVUZWTEUxQlFWWTdRVUZCUVN4WFFVRnpRaXhYUVVGWExFOUJRVmdzU1VGQmMwSXNSMEZCZGtJc1IwRkJPRUlzVFVGQk9VSXNSMEZCZFVNc1NVRkJOVVE3UVVGQlFTeERRVUY0UWpzN2EwSkJSV1VzVlVGQlF5eExRVUZFTEVWQlFWRXNUVUZCVWl4RlFVRnRRanRCUVVNNVFpeFJRVUZOTEZOQlFWTXNSVUZCWmp0QlFVTkJMRkZCUVUwc2EwSkJRV3RDTzBGQlEzQkNMR2RDUVVGUkxFTkJSRms3UVVGRmNFSXNhVUpCUVZNc1UwRkJVenRCUVVaRkxFdEJRWGhDTzBGQlNVRXNVVUZCU1N4bFFVRmxMRXRCUVc1Q096dEJRVVZCTEZOQlFVc3NTVUZCU1N4SFFVRlVMRWxCUVdkQ0xFdEJRV2hDTEVWQlFYVkNPMEZCUTI1Q0xGbEJRVWtzVFVGQlRTeGpRVUZPTEVOQlFYRkNMRWRCUVhKQ0xFTkJRVW9zUlVGQkswSTdRVUZETTBJc1owSkJRVTBzVVVGQlVTeE5RVUZOTEVkQlFVNHNRMEZCWkRzN1FVRkZRU3h2UWtGQlVTeEhRVUZTTzBGQlEwRXNjVUpCUVVzc1VVRkJURHRCUVVOQkxIRkNRVUZMTEZOQlFVdzdRVUZEU1N4dFEwRkJaU3hKUVVGbU8wRkJRMEVzYjBOQlFXZENMRWRCUVdoQ0xFbEJRWFZDTEdkQ1FVRm5RaXhMUVVGb1FpeEZRVUYxUWl4TlFVRjJRaXhEUVVGMlFqdEJRVU5CTzBGQlEwb3NjVUpCUVVzc1VVRkJURHRCUVVOSkxESkNRVUZQTEcxQ1FVRlFMRWxCUVRoQ0xHZENRVUZuUWl4RFFVRkRMRXRCUVdwQ0xFVkJRWGRDTEUxQlFYaENMRU5CUVRsQ08wRkJRMEU3UVVGRFNqdEJRVU5KTERKQ1FVRlBMRWRCUVZBc1NVRkJZeXhMUVVGa08wRkJWa283UVVGWlNEdEJRVU5LT3p0QlFVVkVMRkZCUVVrc1dVRkJTaXhGUVVGclFqdEJRVU5rTEdWQlFVOHNhMEpCUVZBc1NVRkJOa0lzWjBKQlFXZENMRTFCUVdoQ0xFZEJRWGxDTEVkQlFYcENMRWRCUVN0Q0xHZENRVUZuUWl4UFFVRTFSVHRCUVVOSU96dEJRVVZFTEZkQlFVOHNUVUZCVUR0QlFVTklMRU1pTENKbWFXeGxJam9pWW5WcGJHUXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwycDJZVzVrWlhKa2IyVnpMME52WkdVdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lMeXBjYmlBZ0lDQkRiMjUyWlhKMElIQmxjbU5sYm5SaFoyVWdkRzhnY0dsNFpXeHpYRzRnSUNBZ1hHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJRWlhKalpXNTBZV2RsSUc5bUlIUnZkR0ZzSUd4bGJtZDBhRnh1SUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1ZHOTBZV3dnYkdWdVozUm9YRzRxTDF4dVkyOXVjM1FnY0dWeVkyVnVkRlJ2VUdsNFpXeHpJRDBnS0hCbGNtTmxiblFzSUd4bGJtZDBhQ2tnUFQ0Z0tIQmhjbk5sUm14dllYUW9jR1Z5WTJWdWRDa2dMeUF4TURBcElDb2diR1Z1WjNSb0lDc2dKM0I0Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ0tITjBZWFJsTENCc1pXNW5kR2dwSUQwK0lIdGNiaUFnSUNCamIyNXpkQ0J6ZEhsc1pYTWdQU0I3ZlR0Y2JpQWdJQ0JqYjI1emRDQmtZWE5vUVhKeVlYbFRkSGxzWlhNZ1BTQjdYRzRnSUNBZ0lDQWdJR3hsYm1kMGFEb2dNQ3hjYmlBZ0lDQWdJQ0FnYzNCaFkybHVaem9nYkdWdVozUm9JQ3NnSjNCNEoxeHVJQ0FnSUgwN1hHNGdJQ0FnYkdWMElHaGhjMFJoYzJoQmNuSmhlU0E5SUdaaGJITmxPMXh1WEc0Z0lDQWdabTl5SUNoc1pYUWdhMlY1SUdsdUlITjBZWFJsS1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2h6ZEdGMFpTNW9ZWE5QZDI1UWNtOXdaWEowZVNoclpYa3BLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCMllXeDFaU0E5SUhOMFlYUmxXMnRsZVYwN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUhOM2FYUmphQ0FvYTJWNUtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCallYTmxJQ2RzWlc1bmRHZ25PbHh1SUNBZ0lDQWdJQ0FnSUNBZ1kyRnpaU0FuYzNCaFkybHVaeWM2WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYUdGelJHRnphRUZ5Y21GNUlEMGdkSEoxWlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCa1lYTm9RWEp5WVhsVGRIbHNaWE5iYTJWNVhTQTlJSEJsY21ObGJuUlViMUJwZUdWc2N5aDJZV3gxWlN3Z2JHVnVaM1JvS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCaWNtVmhhenRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTmhjMlVnSjI5bVpuTmxkQ2M2WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYzNSNWJHVnpXeWR6ZEhKdmEyVXRaR0Z6YUc5bVpuTmxkQ2RkSUQwZ2NHVnlZMlZ1ZEZSdlVHbDRaV3h6S0MxMllXeDFaU3dnYkdWdVozUm9LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JpY21WaGF6dGNiaUFnSUNBZ0lDQWdJQ0FnSUdSbFptRjFiSFE2WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYzNSNWJHVnpXMnRsZVYwZ1BTQjJZV3gxWlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJR2xtSUNob1lYTkVZWE5vUVhKeVlYa3BJSHRjYmlBZ0lDQWdJQ0FnYzNSNWJHVnpXeWR6ZEhKdmEyVXRaR0Z6YUdGeWNtRjVKMTBnUFNCa1lYTm9RWEp5WVhsVGRIbHNaWE11YkdWdVozUm9JQ3NnSnlBbklDc2daR0Z6YUVGeWNtRjVVM1I1YkdWekxuTndZV05wYm1jN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WMGRYSnVJSE4wZVd4bGN6dGNibjA3SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9zdmctcGF0aC9idWlsZC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgcmdiID0gZXhwb3J0cy5yZ2IgPSB7XG4gICAgbWluOiAwLFxuICAgIG1heDogMjU1LFxuICAgIHJvdW5kOiB0cnVlXG59O1xuXG52YXIgb3BhY2l0eSA9IGV4cG9ydHMub3BhY2l0eSA9IHtcbiAgICBtaW46IDAsXG4gICAgbWF4OiAxXG59O1xuXG52YXIgcGVyY2VudCA9IGV4cG9ydHMucGVyY2VudCA9IHtcbiAgICBtaW46IDAsXG4gICAgbWF4OiAxMDAsXG4gICAgdW5pdDogJyUnXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5elpYUjBhVzVuY3k5a1pXWmhkV3gwTFhCeWIzQnpMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3p0QlFVRlBMRWxCUVUwc2IwSkJRVTA3UVVGRFppeFRRVUZMTEVOQlJGVTdRVUZGWml4VFFVRkxMRWRCUmxVN1FVRkhaaXhYUVVGUE8wRkJTRkVzUTBGQldqczdRVUZOUVN4SlFVRk5MRFJDUVVGVk8wRkJRMjVDTEZOQlFVc3NRMEZFWXp0QlFVVnVRaXhUUVVGTE8wRkJSbU1zUTBGQmFFSTdPMEZCUzBFc1NVRkJUU3cwUWtGQlZUdEJRVU51UWl4VFFVRkxMRU5CUkdNN1FVRkZia0lzVTBGQlN5eEhRVVpqTzBGQlIyNUNMRlZCUVUwN1FVRklZU3hEUVVGb1FpSXNJbVpwYkdVaU9pSmtaV1poZFd4MExYQnliM0J6TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlxZG1GdVpHVnlaRzlsY3k5RGIyUmxMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1WNGNHOXlkQ0JqYjI1emRDQnlaMklnUFNCN1hHNGdJQ0FnYldsdU9pQXdMRnh1SUNBZ0lHMWhlRG9nTWpVMUxGeHVJQ0FnSUhKdmRXNWtPaUIwY25WbFhHNTlPMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdiM0JoWTJsMGVTQTlJSHRjYmlBZ0lDQnRhVzQ2SURBc1hHNGdJQ0FnYldGNE9pQXhYRzU5TzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnY0dWeVkyVnVkQ0E5SUh0Y2JpQWdJQ0J0YVc0NklEQXNYRzRnSUNBZ2JXRjRPaUF4TURBc1hHNGdJQ0FnZFc1cGREb2dKeVVuWEc1OU95SmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kZWZhdWx0LXByb3BzLmpzXG4gKiogbW9kdWxlIGlkID0gNDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBYID0gJ1gnO1xudmFyIFkgPSAnWSc7XG52YXIgQUxQSEEgPSAnQWxwaGEnO1xuXG52YXIgYXhlcyA9IGV4cG9ydHMuYXhlcyA9IFtYLCBZLCAnWiddO1xudmFyIHJnYiA9IGV4cG9ydHMucmdiID0gWydSZWQnLCAnR3JlZW4nLCAnQmx1ZScsIEFMUEhBXTtcbnZhciBoc2wgPSBleHBvcnRzLmhzbCA9IFsnSHVlJywgJ1NhdHVyYXRpb24nLCAnTGlnaHRuZXNzJywgQUxQSEFdO1xudmFyIHBvc2l0aW9ucyA9IGV4cG9ydHMucG9zaXRpb25zID0gWydUb3AnLCAnUmlnaHQnLCAnQm90dG9tJywgJ0xlZnQnXTtcbnZhciBzaGFkb3cgPSBleHBvcnRzLnNoYWRvdyA9IFtYLCBZLCAnUmFkaXVzJywgJ1NwcmVhZCcsICdDb2xvciddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5elpYUjBhVzVuY3k5a2FXTjBhVzl1WVhKNUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenRCUVVGQkxFbEJRVTBzU1VGQlNTeEhRVUZXTzBGQlEwRXNTVUZCVFN4SlFVRkpMRWRCUVZZN1FVRkRRU3hKUVVGTkxGRkJRVkVzVDBGQlpEczdRVUZGVHl4SlFVRk5MSE5DUVVGUExFTkJRVU1zUTBGQlJDeEZRVUZKTEVOQlFVb3NSVUZCVHl4SFFVRlFMRU5CUVdJN1FVRkRRU3hKUVVGTkxHOUNRVUZOTEVOQlFVTXNTMEZCUkN4RlFVRlJMRTlCUVZJc1JVRkJhVUlzVFVGQmFrSXNSVUZCZVVJc1MwRkJla0lzUTBGQldqdEJRVU5CTEVsQlFVMHNiMEpCUVUwc1EwRkJReXhMUVVGRUxFVkJRVkVzV1VGQlVpeEZRVUZ6UWl4WFFVRjBRaXhGUVVGdFF5eExRVUZ1UXl4RFFVRmFPMEZCUTBFc1NVRkJUU3huUTBGQldTeERRVUZETEV0QlFVUXNSVUZCVVN4UFFVRlNMRVZCUVdsQ0xGRkJRV3BDTEVWQlFUSkNMRTFCUVROQ0xFTkJRV3hDTzBGQlEwRXNTVUZCVFN3d1FrRkJVeXhEUVVGRExFTkJRVVFzUlVGQlNTeERRVUZLTEVWQlFVOHNVVUZCVUN4RlFVRnBRaXhSUVVGcVFpeEZRVUV5UWl4UFFVRXpRaXhEUVVGbUlpd2labWxzWlNJNkltUnBZM1JwYjI1aGNua3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwycDJZVzVrWlhKa2IyVnpMME52WkdVdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lZMjl1YzNRZ1dDQTlJQ2RZSnp0Y2JtTnZibk4wSUZrZ1BTQW5XU2M3WEc1amIyNXpkQ0JCVEZCSVFTQTlJQ2RCYkhCb1lTYzdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQmhlR1Z6SUQwZ1cxZ3NJRmtzSUNkYUoxMDdYRzVsZUhCdmNuUWdZMjl1YzNRZ2NtZGlJRDBnV3lkU1pXUW5MQ0FuUjNKbFpXNG5MQ0FuUW14MVpTY3NJRUZNVUVoQlhUdGNibVY0Y0c5eWRDQmpiMjV6ZENCb2Myd2dQU0JiSjBoMVpTY3NJQ2RUWVhSMWNtRjBhVzl1Snl3Z0oweHBaMmgwYm1WemN5Y3NJRUZNVUVoQlhUdGNibVY0Y0c5eWRDQmpiMjV6ZENCd2IzTnBkR2x2Ym5NZ1BTQmJKMVJ2Y0Njc0lDZFNhV2RvZENjc0lDZENiM1IwYjIwbkxDQW5UR1ZtZENkZE8xeHVaWGh3YjNKMElHTnZibk4wSUhOb1lXUnZkeUE5SUZ0WUxDQlpMQ0FuVW1Ga2FYVnpKeXdnSjFOd2NtVmhaQ2NzSUNkRGIyeHZjaWRkT3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3NldHRpbmdzL2RpY3Rpb25hcnkuanNcbiAqKiBtb2R1bGUgaWQgPSA0OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVFYXNpbmdGdW5jdGlvbjtcbi8qXG4gICAgTWlycm9yIGVhc2luZ1xuICAgIFxuICAgIE1pcnJvcnMgdGhlIHByb3ZpZGVkIGVhc2luZyBmdW5jdGlvbiwgdXNlZCBoZXJlIGZvciBtaXJyb3JpbmcgYW5cbiAgICBlYXNlSW4gaW50byBhbiBlYXNlSW5PdXRcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzLCBmcm9tIDAgLSAxLCBvZiBjdXJyZW50IHNoaWZ0XG4gICAgQHBhcmFtIFtmdW5jdGlvbl06IFRoZSBlYXNpbmcgZnVuY3Rpb24gdG8gbWlycm9yXG4gICAgQHJldHVybnMgW251bWJlcl06IFRoZSBlYXNpbmctYWRqdXN0ZWQgZGVsdGFcbiovXG52YXIgbWlycm9yRWFzaW5nID0gZnVuY3Rpb24gKG1ldGhvZCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAocHJvZ3Jlc3MsIHN0cmVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBwcm9ncmVzcyA8PSAwLjUgPyBtZXRob2QoMiAqIHByb2dyZXNzLCBzdHJlbmd0aCkgLyAyIDogKDIgLSBtZXRob2QoMiAqICgxIC0gcHJvZ3Jlc3MpLCBzdHJlbmd0aCkpIC8gMjtcbiAgICB9O1xufTtcblxuLypcbiAgICBSZXZlcnNlIGVhc2luZ1xuICAgIFxuICAgIFJldmVyc2VzIHRoZSBvdXRwdXQgb2YgdGhlIHByb3ZpZGVkIGVhc2luZyBmdW5jdGlvbiwgdXNlZCBmb3IgZmxpcHBpbmcgZWFzZUluXG4gICAgY3VydmUgdG8gYW4gZWFzZU91dC5cbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzLCBmcm9tIDAgLSAxLCBvZiBjdXJyZW50IHNoaWZ0XG4gICAgQHBhcmFtIFtmdW5jdGlvbl06IFRoZSBlYXNpbmcgZnVuY3Rpb24gdG8gcmV2ZXJzZVxuICAgIEByZXR1cm5zIFtudW1iZXJdOiBUaGUgZWFzaW5nLWFkanVzdGVkIGRlbHRhXG4qL1xudmFyIHJldmVyc2VFYXNpbmcgPSBmdW5jdGlvbiAobWV0aG9kKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwcm9ncmVzcywgc3RyZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIDEgLSBtZXRob2QoMSAtIHByb2dyZXNzLCBzdHJlbmd0aCk7XG4gICAgfTtcbn07XG5cbi8qXG4gICAgRWFzaW5nIGNsYXNzXG5cbiAgICBJZiBwcm92aWRlZCBlYXNpbmcgZnVuY3Rpb24sIHJldHVybnMgZWFzaW5nIGZ1bmN0aW9uIHdpdGggXG4gICAgaW4vb3V0L2luT3V0IHZhcmlhdGlvbnNcblxuICAgIElmIHByb3ZpZGVkIGZvdXIgYXJndW1lbnRzLCByZXR1cm5zIG5ldyBCZXppZXIgY2xhc3MgaW5zdGVhZC5cbiovXG5mdW5jdGlvbiBjcmVhdGVFYXNpbmdGdW5jdGlvbihtZXRob2QpIHtcbiAgICB2YXIgZWFzaW5nRnVuY3Rpb24gPSBmdW5jdGlvbiAocHJvZ3Jlc3MsIHN0cmVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBtZXRob2QocHJvZ3Jlc3MsIHN0cmVuZ3RoKTtcbiAgICB9O1xuXG4gICAgZWFzaW5nRnVuY3Rpb24uaW4gPSBmdW5jdGlvbiAocHJvZ3Jlc3MsIHN0cmVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBtZXRob2QocHJvZ3Jlc3MsIHN0cmVuZ3RoKTtcbiAgICB9O1xuICAgIGVhc2luZ0Z1bmN0aW9uLm91dCA9IHJldmVyc2VFYXNpbmcobWV0aG9kKTtcbiAgICBlYXNpbmdGdW5jdGlvbi5pbk91dCA9IG1pcnJvckVhc2luZyhtZXRob2QpO1xuXG4gICAgcmV0dXJuIGVhc2luZ0Z1bmN0aW9uO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMlZoYzJsdVp5OWpjbVZoZEdVdFpXRnphVzVuTG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096dHJRa0ZuUTNkQ0xHOUNPenM3T3pzN096czdPenRCUVhSQ2VFSXNTVUZCVFN4bFFVRmxMRlZCUVVNc1RVRkJSRHRCUVVGQkxGZEJRVmtzVlVGQlF5eFJRVUZFTEVWQlFWY3NVVUZCV0R0QlFVRkJMR1ZCUVhsQ0xGbEJRVmtzUjBGQllpeEhRVUZ2UWl4UFFVRlBMRWxCUVVrc1VVRkJXQ3hGUVVGeFFpeFJRVUZ5UWl4SlFVRnBReXhEUVVGeVJDeEhRVUY1UkN4RFFVRkRMRWxCUVVrc1QwRkJUeXhMUVVGTExFbEJRVWtzVVVGQlZDeERRVUZRTEVWQlFUSkNMRkZCUVROQ0xFTkJRVXdzU1VGQk5rTXNRMEZCT1VnN1FVRkJRU3hMUVVGYU8wRkJRVUVzUTBGQmNrSTdPenM3T3pzN096czdPenRCUVZsQkxFbEJRVTBzWjBKQlFXZENMRlZCUVVNc1RVRkJSRHRCUVVGQkxGZEJRVmtzVlVGQlF5eFJRVUZFTEVWQlFWY3NVVUZCV0R0QlFVRkJMR1ZCUVhkQ0xFbEJRVWtzVDBGQlR5eEpRVUZKTEZGQlFWZ3NSVUZCY1VJc1VVRkJja0lzUTBGQk5VSTdRVUZCUVN4TFFVRmFPMEZCUVVFc1EwRkJkRUk3T3pzN096czdPenM3UVVGVlpTeFRRVUZUTEc5Q1FVRlVMRU5CUVRoQ0xFMUJRVGxDTEVWQlFYTkRPMEZCUTJwRUxGRkJRVWtzYVVKQlFXbENMRlZCUVVNc1VVRkJSQ3hGUVVGWExGRkJRVmc3UVVGQlFTeGxRVUYzUWl4UFFVRlBMRkZCUVZBc1JVRkJhVUlzVVVGQmFrSXNRMEZCZUVJN1FVRkJRU3hMUVVGeVFqczdRVUZGUVN4dFFrRkJaU3hGUVVGbUxFZEJRVzlDTEZWQlFVTXNVVUZCUkN4RlFVRlhMRkZCUVZnN1FVRkJRU3hsUVVGM1FpeFBRVUZQTEZGQlFWQXNSVUZCYVVJc1VVRkJha0lzUTBGQmVFSTdRVUZCUVN4TFFVRndRanRCUVVOQkxHMUNRVUZsTEVkQlFXWXNSMEZCY1VJc1kwRkJZeXhOUVVGa0xFTkJRWEpDTzBGQlEwRXNiVUpCUVdVc1MwRkJaaXhIUVVGMVFpeGhRVUZoTEUxQlFXSXNRMEZCZGtJN08wRkJSVUVzVjBGQlR5eGpRVUZRTzBGQlEwZ2lMQ0ptYVd4bElqb2lZM0psWVhSbExXVmhjMmx1Wnk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YW5aaGJtUmxjbVJ2WlhNdlEyOWtaUzl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJdktseHVJQ0FnSUUxcGNuSnZjaUJsWVhOcGJtZGNiaUFnSUNCY2JpQWdJQ0JOYVhKeWIzSnpJSFJvWlNCd2NtOTJhV1JsWkNCbFlYTnBibWNnWm5WdVkzUnBiMjRzSUhWelpXUWdhR1Z5WlNCbWIzSWdiV2x5Y205eWFXNW5JR0Z1WEc0Z0lDQWdaV0Z6WlVsdUlHbHVkRzhnWVc0Z1pXRnpaVWx1VDNWMFhHNGdJQ0FnWEc0Z0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQlFjbTluY21WemN5d2dabkp2YlNBd0lDMGdNU3dnYjJZZ1kzVnljbVZ1ZENCemFHbG1kRnh1SUNBZ0lFQndZWEpoYlNCYlpuVnVZM1JwYjI1ZE9pQlVhR1VnWldGemFXNW5JR1oxYm1OMGFXOXVJSFJ2SUcxcGNuSnZjbHh1SUNBZ0lFQnlaWFIxY201eklGdHVkVzFpWlhKZE9pQlVhR1VnWldGemFXNW5MV0ZrYW5WemRHVmtJR1JsYkhSaFhHNHFMMXh1WTI5dWMzUWdiV2x5Y205eVJXRnphVzVuSUQwZ0tHMWxkR2h2WkNrZ1BUNGdLSEJ5YjJkeVpYTnpMQ0J6ZEhKbGJtZDBhQ2tnUFQ0Z0tIQnliMmR5WlhOeklEdzlJREF1TlNrZ1B5QnRaWFJvYjJRb01pQXFJSEJ5YjJkeVpYTnpMQ0J6ZEhKbGJtZDBhQ2tnTHlBeUlEb2dLRElnTFNCdFpYUm9iMlFvTWlBcUlDZ3hJQzBnY0hKdlozSmxjM01wTENCemRISmxibWQwYUNrcElDOGdNanRjYmlBZ0lDQWdJQ0FnWEc0dktseHVJQ0FnSUZKbGRtVnljMlVnWldGemFXNW5YRzRnSUNBZ1hHNGdJQ0FnVW1WMlpYSnpaWE1nZEdobElHOTFkSEIxZENCdlppQjBhR1VnY0hKdmRtbGtaV1FnWldGemFXNW5JR1oxYm1OMGFXOXVMQ0IxYzJWa0lHWnZjaUJtYkdsd2NHbHVaeUJsWVhObFNXNWNiaUFnSUNCamRYSjJaU0IwYnlCaGJpQmxZWE5sVDNWMExseHVJQ0FnSUZ4dUlDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dVSEp2WjNKbGMzTXNJR1p5YjIwZ01DQXRJREVzSUc5bUlHTjFjbkpsYm5RZ2MyaHBablJjYmlBZ0lDQkFjR0Z5WVcwZ1cyWjFibU4wYVc5dVhUb2dWR2hsSUdWaGMybHVaeUJtZFc1amRHbHZiaUIwYnlCeVpYWmxjbk5sWEc0Z0lDQWdRSEpsZEhWeWJuTWdXMjUxYldKbGNsMDZJRlJvWlNCbFlYTnBibWN0WVdScWRYTjBaV1FnWkdWc2RHRmNiaW92WEc1amIyNXpkQ0J5WlhabGNuTmxSV0Z6YVc1bklEMGdLRzFsZEdodlpDa2dQVDRnS0hCeWIyZHlaWE56TENCemRISmxibWQwYUNrZ1BUNGdNU0F0SUcxbGRHaHZaQ2d4SUMwZ2NISnZaM0psYzNNc0lITjBjbVZ1WjNSb0tUdGNibHh1THlwY2JpQWdJQ0JGWVhOcGJtY2dZMnhoYzNOY2JseHVJQ0FnSUVsbUlIQnliM1pwWkdWa0lHVmhjMmx1WnlCbWRXNWpkR2x2Yml3Z2NtVjBkWEp1Y3lCbFlYTnBibWNnWm5WdVkzUnBiMjRnZDJsMGFDQmNiaUFnSUNCcGJpOXZkWFF2YVc1UGRYUWdkbUZ5YVdGMGFXOXVjMXh1WEc0Z0lDQWdTV1lnY0hKdmRtbGtaV1FnWm05MWNpQmhjbWQxYldWdWRITXNJSEpsZEhWeWJuTWdibVYzSUVKbGVtbGxjaUJqYkdGemN5QnBibk4wWldGa0xseHVLaTljYm1WNGNHOXlkQ0JrWldaaGRXeDBJR1oxYm1OMGFXOXVJR055WldGMFpVVmhjMmx1WjBaMWJtTjBhVzl1S0cxbGRHaHZaQ2tnZTF4dUlDQWdJR3hsZENCbFlYTnBibWRHZFc1amRHbHZiaUE5SUNod2NtOW5jbVZ6Y3l3Z2MzUnlaVzVuZEdncElEMCtJRzFsZEdodlpDaHdjbTluY21WemN5d2djM1J5Wlc1bmRHZ3BPMXh1WEc0Z0lDQWdaV0Z6YVc1blJuVnVZM1JwYjI0dWFXNGdQU0FvY0hKdlozSmxjM01zSUhOMGNtVnVaM1JvS1NBOVBpQnRaWFJvYjJRb2NISnZaM0psYzNNc0lITjBjbVZ1WjNSb0tUdGNiaUFnSUNCbFlYTnBibWRHZFc1amRHbHZiaTV2ZFhRZ1BTQnlaWFpsY25ObFJXRnphVzVuS0cxbGRHaHZaQ2s3WEc0Z0lDQWdaV0Z6YVc1blJuVnVZM1JwYjI0dWFXNVBkWFFnUFNCdGFYSnliM0pGWVhOcGJtY29iV1YwYUc5a0tUdGNibHh1SUNBZ0lISmxkSFZ5YmlCbFlYTnBibWRHZFc1amRHbHZianRjYm4xY2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL2Vhc2luZy9jcmVhdGUtZWFzaW5nLmpzXG4gKiogbW9kdWxlIGlkID0gNTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGN1YmljQmV6aWVyO1xuLypcbiAgICBCZXppZXIgZnVuY3Rpb24gZ2VuZXJhdG9yXG4gICAgICAgIFxuICAgIEdhw6t0YW4gUmVuYXVkZWF1J3MgQmV6aWVyRWFzaW5nXG4gICAgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nL2Jsb2IvbWFzdGVyL2luZGV4LmpzICBcbiAgICBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNpbmcvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICAgIFlvdSdyZSBhIGhlcm9cbiAgICBcbiAgICBVc2VcbiAgICBcbiAgICAgICAgdmFyIGVhc2VPdXQgPSBuZXcgQmV6aWVyKC4xNywuNjcsLjgzLC42NyksXG4gICAgICAgICAgICB4ID0gZWFzZU91dCgwLjUpOyAvLyByZXR1cm5zIDAuNjI3Li4uXG4qL1xuXG4vLyBDb25zdGFudHNcbnZhciBORVdUT05fSVRFUkFUSU9OUyA9IDg7XG52YXIgTkVXVE9OX01JTl9TTE9QRSA9IDAuMDAxO1xudmFyIFNVQkRJVklTSU9OX1BSRUNJU0lPTiA9IDAuMDAwMDAwMTtcbnZhciBTVUJESVZJU0lPTl9NQVhfSVRFUkFUSU9OUyA9IDEwO1xudmFyIEtfU1BMSU5FX1RBQkxFX1NJWkUgPSAxMTtcbnZhciBLX1NBTVBMRV9TVEVQX1NJWkUgPSAxLjAgLyAoS19TUExJTkVfVEFCTEVfU0laRSAtIDEuMCk7XG52YXIgRkxPQVRfMzJfU1VQUE9SVEVEID0gdHlwZW9mIEZsb2F0MzJBcnJheSAhPT0gJ3VuZGVmaW5lZCc7XG5cbi8vIEhlbHBlciBtZXRob2RzXG52YXIgYSA9IGZ1bmN0aW9uIChhMSwgYTIpIHtcbiAgICByZXR1cm4gMS4wIC0gMy4wICogYTIgKyAzLjAgKiBhMTtcbn07XG52YXIgYiA9IGZ1bmN0aW9uIChhMSwgYTIpIHtcbiAgICByZXR1cm4gMy4wICogYTIgLSA2LjAgKiBhMTtcbn07XG52YXIgYyA9IGZ1bmN0aW9uIChhMSkge1xuICAgIHJldHVybiAzLjAgKiBhMTtcbn07XG5cbnZhciBnZXRTbG9wZSA9IGZ1bmN0aW9uICh0LCBhMSwgYTIpIHtcbiAgICByZXR1cm4gMy4wICogYShhMSwgYTIpICogdCAqIHQgKyAyLjAgKiBiKGExLCBhMikgKiB0ICsgYyhhMSk7XG59O1xuXG52YXIgY2FsY0JlemllciA9IGZ1bmN0aW9uICh0LCBhMSwgYTIpIHtcbiAgICByZXR1cm4gKChhKGExLCBhMikgKiB0ICsgYihhMSwgYTIpKSAqIHQgKyBjKGExKSkgKiB0O1xufTtcblxuLypcbiAgICBDcmVhdGUgYSBjdWJpYyBiZXppZXIgcmVzb2x2ZXJcbiovXG5mdW5jdGlvbiBjdWJpY0JlemllcihtWDEsIG1ZMSwgbVgyLCBtWTIpIHtcbiAgICB2YXIgc2FtcGxlVmFsdWVzID0gRkxPQVRfMzJfU1VQUE9SVEVEID8gbmV3IEZsb2F0MzJBcnJheShLX1NQTElORV9UQUJMRV9TSVpFKSA6IG5ldyBBcnJheShLX1NQTElORV9UQUJMRV9TSVpFKTtcbiAgICB2YXIgX3ByZWNvbXB1dGVkID0gZmFsc2U7XG5cbiAgICB2YXIgYmluYXJ5U3ViZGl2aWRlID0gZnVuY3Rpb24gKGFYLCBhQSwgYUIpIHtcbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICB2YXIgY3VycmVudFggPSB2b2lkIDA7XG4gICAgICAgIHZhciBjdXJyZW50VCA9IHZvaWQgMDtcblxuICAgICAgICBkbyB7XG4gICAgICAgICAgICBjdXJyZW50VCA9IGFBICsgKGFCIC0gYUEpIC8gMi4wO1xuICAgICAgICAgICAgY3VycmVudFggPSBjYWxjQmV6aWVyKGN1cnJlbnRULCBtWDEsIG1YMikgLSBhWDtcbiAgICAgICAgICAgIGlmIChjdXJyZW50WCA+IDAuMCkge1xuICAgICAgICAgICAgICAgIGFCID0gY3VycmVudFQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFBID0gY3VycmVudFQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gd2hpbGUgKE1hdGguYWJzKGN1cnJlbnRYKSA+IFNVQkRJVklTSU9OX1BSRUNJU0lPTiAmJiArK2kgPCBTVUJESVZJU0lPTl9NQVhfSVRFUkFUSU9OUyk7XG5cbiAgICAgICAgcmV0dXJuIGN1cnJlbnRUO1xuICAgIH07XG5cbiAgICB2YXIgbmV3dG9uUmFwaHNvbkl0ZXJhdGUgPSBmdW5jdGlvbiAoYVgsIGFHdWVzc1QpIHtcbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICB2YXIgY3VycmVudFNsb3BlID0gMDtcbiAgICAgICAgdmFyIGN1cnJlbnRYID0gdm9pZCAwO1xuXG4gICAgICAgIGZvciAoOyBpIDwgTkVXVE9OX0lURVJBVElPTlM7ICsraSkge1xuICAgICAgICAgICAgY3VycmVudFNsb3BlID0gZ2V0U2xvcGUoYUd1ZXNzVCwgbVgxLCBtWDIpO1xuXG4gICAgICAgICAgICBpZiAoY3VycmVudFNsb3BlID09PSAwLjApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYUd1ZXNzVDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY3VycmVudFggPSBjYWxjQmV6aWVyKGFHdWVzc1QsIG1YMSwgbVgyKSAtIGFYO1xuICAgICAgICAgICAgYUd1ZXNzVCAtPSBjdXJyZW50WCAvIGN1cnJlbnRTbG9wZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhR3Vlc3NUO1xuICAgIH07XG5cbiAgICB2YXIgY2FsY1NhbXBsZVZhbHVlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBLX1NQTElORV9UQUJMRV9TSVpFOyArK2kpIHtcbiAgICAgICAgICAgIHNhbXBsZVZhbHVlc1tpXSA9IGNhbGNCZXppZXIoaSAqIEtfU0FNUExFX1NURVBfU0laRSwgbVgxLCBtWDIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHZhciBnZXRURm9yWCA9IGZ1bmN0aW9uIChhWCkge1xuICAgICAgICB2YXIgaW50ZXJ2YWxTdGFydCA9IDAuMDtcbiAgICAgICAgdmFyIGN1cnJlbnRTYW1wbGUgPSAxO1xuICAgICAgICB2YXIgbGFzdFNhbXBsZSA9IEtfU1BMSU5FX1RBQkxFX1NJWkUgLSAxO1xuICAgICAgICB2YXIgZGlzdCA9IDAuMDtcbiAgICAgICAgdmFyIGd1ZXNzRm9yVCA9IDAuMDtcbiAgICAgICAgdmFyIGluaXRpYWxTbG9wZSA9IDAuMDtcblxuICAgICAgICBmb3IgKDsgY3VycmVudFNhbXBsZSAhPSBsYXN0U2FtcGxlICYmIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSA8PSBhWDsgKytjdXJyZW50U2FtcGxlKSB7XG4gICAgICAgICAgICBpbnRlcnZhbFN0YXJ0ICs9IEtfU0FNUExFX1NURVBfU0laRTtcbiAgICAgICAgfVxuXG4gICAgICAgIC0tY3VycmVudFNhbXBsZTtcblxuICAgICAgICBkaXN0ID0gKGFYIC0gc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdKSAvIChzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZSArIDFdIC0gc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdKTtcbiAgICAgICAgZ3Vlc3NGb3JUID0gaW50ZXJ2YWxTdGFydCArIGRpc3QgKiBLX1NBTVBMRV9TVEVQX1NJWkU7XG5cbiAgICAgICAgaW5pdGlhbFNsb3BlID0gZ2V0U2xvcGUoZ3Vlc3NGb3JULCBtWDEsIG1YMik7XG5cbiAgICAgICAgLy8gSWYgc2xvcGUgaXMgZ3JlYXRlciB0aGFuIG1pblxuICAgICAgICBpZiAoaW5pdGlhbFNsb3BlID49IE5FV1RPTl9NSU5fU0xPUEUpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXd0b25SYXBoc29uSXRlcmF0ZShhWCwgZ3Vlc3NGb3JUKTtcbiAgICAgICAgICAgIC8vIFNsb3BlIGlzIGVxdWFsIHRvIG1pblxuICAgICAgICB9IGVsc2UgaWYgKGluaXRpYWxTbG9wZSA9PT0gMC4wKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGd1ZXNzRm9yVDtcbiAgICAgICAgICAgICAgICAvLyBTbG9wZSBpcyBsZXNzIHRoYW4gbWluXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYmluYXJ5U3ViZGl2aWRlKGFYLCBpbnRlcnZhbFN0YXJ0LCBpbnRlcnZhbFN0YXJ0ICsgS19TQU1QTEVfU1RFUF9TSVpFKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgfTtcblxuICAgIHZhciBwcmVjb21wdXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfcHJlY29tcHV0ZWQgPSB0cnVlO1xuICAgICAgICBpZiAobVgxICE9IG1ZMSB8fCBtWDIgIT0gbVkyKSB7XG4gICAgICAgICAgICBjYWxjU2FtcGxlVmFsdWVzKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIHJlc29sdmVyID0gZnVuY3Rpb24gKGFYKSB7XG4gICAgICAgIHZhciByZXR1cm5WYWx1ZSA9IHZvaWQgMDtcblxuICAgICAgICBpZiAoIV9wcmVjb21wdXRlZCkge1xuICAgICAgICAgICAgcHJlY29tcHV0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgbGluZWFyIGdyYWRpZW50LCByZXR1cm4gWCBhcyBUXG4gICAgICAgIGlmIChtWDEgPT09IG1ZMSAmJiBtWDIgPT09IG1ZMikge1xuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSBhWDtcblxuICAgICAgICAgICAgLy8gSWYgYXQgc3RhcnQsIHJldHVybiAwXG4gICAgICAgIH0gZWxzZSBpZiAoYVggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IDA7XG5cbiAgICAgICAgICAgICAgICAvLyBJZiBhdCBlbmQsIHJldHVybiAxXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFYID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblZhbHVlID0gMTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IGNhbGNCZXppZXIoZ2V0VEZvclgoYVgpLCBtWTEsIG1ZMik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXR1cm5WYWx1ZTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHJlc29sdmVyO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMlZoYzJsdVp5OWpjbVZoZEdVdFltVjZhV1Z5TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096dHJRa0Z0UTNkQ0xGYzdPenM3T3pzN096czdPenM3T3pzN1FVRndRbmhDTEVsQlFVMHNiMEpCUVc5Q0xFTkJRVEZDTzBGQlEwRXNTVUZCVFN4dFFrRkJiVUlzUzBGQmVrSTdRVUZEUVN4SlFVRk5MSGRDUVVGM1FpeFRRVUU1UWp0QlFVTkJMRWxCUVUwc05rSkJRVFpDTEVWQlFXNURPMEZCUTBFc1NVRkJUU3h6UWtGQmMwSXNSVUZCTlVJN1FVRkRRU3hKUVVGTkxIRkNRVUZ4UWl4UFFVRlBMSE5DUVVGelFpeEhRVUUzUWl4RFFVRXpRanRCUVVOQkxFbEJRVTBzY1VKQlFYTkNMRTlCUVU4c1dVRkJVQ3hMUVVGM1FpeFhRVUZ3UkRzN08wRkJSMEVzU1VGQlRTeEpRVUZKTEZWQlFVTXNSVUZCUkN4RlFVRkxMRVZCUVV3N1FVRkJRU3hYUVVGWkxFMUJRVTBzVFVGQlRTeEZRVUZhTEVkQlFXbENMRTFCUVUwc1JVRkJia003UVVGQlFTeERRVUZXTzBGQlEwRXNTVUZCVFN4SlFVRkpMRlZCUVVNc1JVRkJSQ3hGUVVGTExFVkJRVXc3UVVGQlFTeFhRVUZaTEUxQlFVMHNSVUZCVGl4SFFVRlhMRTFCUVUwc1JVRkJOMEk3UVVGQlFTeERRVUZXTzBGQlEwRXNTVUZCVFN4SlFVRkpMRlZCUVVNc1JVRkJSRHRCUVVGQkxGZEJRVkVzVFVGQlRTeEZRVUZrTzBGQlFVRXNRMEZCVmpzN1FVRkZRU3hKUVVGTkxGZEJRVmNzVlVGQlF5eERRVUZFTEVWQlFVa3NSVUZCU2l4RlFVRlJMRVZCUVZJN1FVRkJRU3hYUVVGbExFMUJRVTBzUlVGQlJTeEZRVUZHTEVWQlFVMHNSVUZCVGl4RFFVRk9MRWRCUVd0Q0xFTkJRV3hDTEVkQlFYTkNMRU5CUVhSQ0xFZEJRVEJDTEUxQlFVMHNSVUZCUlN4RlFVRkdMRVZCUVUwc1JVRkJUaXhEUVVGT0xFZEJRV3RDTEVOQlFUVkRMRWRCUVdkRUxFVkJRVVVzUlVGQlJpeERRVUV2UkR0QlFVRkJMRU5CUVdwQ096dEJRVVZCTEVsQlFVMHNZVUZCWVN4VlFVRkRMRU5CUVVRc1JVRkJTU3hGUVVGS0xFVkJRVkVzUlVGQlVqdEJRVUZCTEZkQlFXVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSaXhGUVVGTkxFVkJRVTRzU1VGQldTeERRVUZhTEVkQlFXZENMRVZCUVVVc1JVRkJSaXhGUVVGTkxFVkJRVTRzUTBGQmFrSXNTVUZCT0VJc1EwRkJPVUlzUjBGQmEwTXNSVUZCUlN4RlFVRkdMRU5CUVc1RExFbEJRVFJETEVOQlFUTkVPMEZCUVVFc1EwRkJia0k3T3pzN08wRkJTMlVzVTBGQlV5eFhRVUZVTEVOQlFYRkNMRWRCUVhKQ0xFVkJRVEJDTEVkQlFURkNMRVZCUVN0Q0xFZEJRUzlDTEVWQlFXOURMRWRCUVhCRExFVkJRWGxETzBGQlEzQkVMRkZCUVUwc1pVRkJaU3h4UWtGQmNVSXNTVUZCU1N4WlFVRktMRU5CUVdsQ0xHMUNRVUZxUWl4RFFVRnlRaXhIUVVFMlJDeEpRVUZKTEV0QlFVb3NRMEZCVlN4dFFrRkJWaXhEUVVGc1JqdEJRVU5CTEZGQlFVa3NaVUZCWlN4TFFVRnVRanM3UVVGRlFTeFJRVUZOTEd0Q1FVRnJRaXhWUVVGRExFVkJRVVFzUlVGQlN5eEZRVUZNTEVWQlFWTXNSVUZCVkN4RlFVRm5RanRCUVVOd1F5eFpRVUZKTEVsQlFVa3NRMEZCVWp0QlFVTkJMRmxCUVVrc2FVSkJRVW83UVVGRFFTeFpRVUZKTEdsQ1FVRktPenRCUVVWQkxGZEJRVWM3UVVGRFF5eDFRa0ZCVnl4TFFVRkxMRU5CUVVNc1MwRkJTeXhGUVVGT0xFbEJRVmtzUjBGQk5VSTdRVUZEUVN4MVFrRkJWeXhYUVVGWExGRkJRVmdzUlVGQmNVSXNSMEZCY2tJc1JVRkJNRUlzUjBGQk1VSXNTVUZCYVVNc1JVRkJOVU03UVVGRFFTeG5Ra0ZCU1N4WFFVRlhMRWRCUVdZc1JVRkJiMEk3UVVGRGFFSXNjVUpCUVVzc1VVRkJURHRCUVVOSUxHRkJSa1FzVFVGRlR6dEJRVU5JTEhGQ1FVRkxMRkZCUVV3N1FVRkRTRHRCUVVOS0xGTkJVa1FzVVVGUlV5eExRVUZMTEVkQlFVd3NRMEZCVXl4UlFVRlVMRWxCUVhGQ0xIRkNRVUZ5UWl4SlFVRTRReXhGUVVGRkxFTkJRVVlzUjBGQlRTd3dRa0ZTTjBRN08wRkJWVUVzWlVGQlR5eFJRVUZRTzBGQlEwZ3NTMEZvUWtRN08wRkJhMEpCTEZGQlFVMHNkVUpCUVhWQ0xGVkJRVU1zUlVGQlJDeEZRVUZMTEU5QlFVd3NSVUZCYVVJN1FVRkRNVU1zV1VGQlNTeEpRVUZKTEVOQlFWSTdRVUZEUVN4WlFVRkpMR1ZCUVdVc1EwRkJia0k3UVVGRFFTeFpRVUZKTEdsQ1FVRktPenRCUVVWQkxHVkJRVThzU1VGQlNTeHBRa0ZCV0N4RlFVRTRRaXhGUVVGRkxFTkJRV2hETEVWQlFXMURPMEZCUXk5Q0xESkNRVUZsTEZOQlFWTXNUMEZCVkN4RlFVRnJRaXhIUVVGc1FpeEZRVUYxUWl4SFFVRjJRaXhEUVVGbU96dEJRVVZCTEdkQ1FVRkpMR2xDUVVGcFFpeEhRVUZ5UWl4RlFVRXdRanRCUVVOMFFpeDFRa0ZCVHl4UFFVRlFPMEZCUTBnN08wRkJSVVFzZFVKQlFWY3NWMEZCVnl4UFFVRllMRVZCUVc5Q0xFZEJRWEJDTEVWQlFYbENMRWRCUVhwQ0xFbEJRV2RETEVWQlFUTkRPMEZCUTBFc2RVSkJRVmNzVjBGQlZ5eFpRVUYwUWp0QlFVTklPenRCUVVWRUxHVkJRVThzVDBGQlVEdEJRVU5JTEV0QmFrSkVPenRCUVcxQ1FTeFJRVUZOTEcxQ1FVRnRRaXhaUVVGTk8wRkJRek5DTEdGQlFVc3NTVUZCU1N4SlFVRkpMRU5CUVdJc1JVRkJaMElzU1VGQlNTeHRRa0ZCY0VJc1JVRkJlVU1zUlVGQlJTeERRVUV6UXl4RlFVRTRRenRCUVVNeFF5eDVRa0ZCWVN4RFFVRmlMRWxCUVd0Q0xGZEJRVmNzU1VGQlNTeHJRa0ZCWml4RlFVRnRReXhIUVVGdVF5eEZRVUYzUXl4SFFVRjRReXhEUVVGc1FqdEJRVU5JTzBGQlEwb3NTMEZLUkRzN1FVRk5RU3hSUVVGTkxGZEJRVmNzVlVGQlF5eEZRVUZFTEVWQlFWRTdRVUZEY2tJc1dVRkJTU3huUWtGQlowSXNSMEZCY0VJN1FVRkRRU3haUVVGSkxHZENRVUZuUWl4RFFVRndRanRCUVVOQkxGbEJRVWtzWVVGQllTeHpRa0ZCYzBJc1EwRkJka003UVVGRFFTeFpRVUZKTEU5QlFVOHNSMEZCV0R0QlFVTkJMRmxCUVVrc1dVRkJXU3hIUVVGb1FqdEJRVU5CTEZsQlFVa3NaVUZCWlN4SFFVRnVRanM3UVVGRlFTeGxRVUZQTEdsQ1FVRnBRaXhWUVVGcVFpeEpRVUVyUWl4aFFVRmhMR0ZCUVdJc1MwRkJLMElzUlVGQmNrVXNSVUZCZVVVc1JVRkJSU3hoUVVFelJTeEZRVUV3Ump0QlFVTjBSaXcyUWtGQmFVSXNhMEpCUVdwQ08wRkJRMGc3TzBGQlJVUXNWVUZCUlN4aFFVRkdPenRCUVVWQkxHVkJRVThzUTBGQlF5eExRVUZMTEdGQlFXRXNZVUZCWWl4RFFVRk9MRXRCUVhORExHRkJRV0VzWjBKQlFXTXNRMEZCTTBJc1NVRkJaME1zWVVGQllTeGhRVUZpTEVOQlFYUkZMRU5CUVZBN1FVRkRRU3h2UWtGQldTeG5Ra0ZCWjBJc1QwRkJUeXhyUWtGQmJrTTdPMEZCUlVFc2RVSkJRV1VzVTBGQlV5eFRRVUZVTEVWQlFXOUNMRWRCUVhCQ0xFVkJRWGxDTEVkQlFYcENMRU5CUVdZN096dEJRVWRCTEZsQlFVa3NaMEpCUVdkQ0xHZENRVUZ3UWl4RlFVRnpRenRCUVVOc1F5eHRRa0ZCVHl4eFFrRkJjVUlzUlVGQmNrSXNSVUZCZVVJc1UwRkJla0lzUTBGQlVEczdRVUZGU0N4VFFVaEVMRTFCUjA4c1NVRkJTU3hwUWtGQmFVSXNSMEZCY2tJc1JVRkJNRUk3UVVGRE4wSXNkVUpCUVU4c1UwRkJVRHM3UVVGRlNDeGhRVWhOTEUxQlIwRTdRVUZEU0N3eVFrRkJUeXhuUWtGQlowSXNSVUZCYUVJc1JVRkJiMElzWVVGQmNFSXNSVUZCYlVNc1owSkJRV2RDTEd0Q1FVRnVSQ3hEUVVGUU8wRkJRMGc3UVVGRFNpeExRVGRDUkRzN1FVRXJRa0VzVVVGQlRTeGhRVUZoTEZsQlFVMDdRVUZEY2tJc2RVSkJRV1VzU1VGQlpqdEJRVU5CTEZsQlFVa3NUMEZCVHl4SFFVRlFMRWxCUVdNc1QwRkJUeXhIUVVGNlFpeEZRVUU0UWp0QlFVTXhRanRCUVVOSU8wRkJRMG9zUzBGTVJEczdRVUZQUVN4UlFVRk5MRmRCUVZjc1ZVRkJReXhGUVVGRUxFVkJRVkU3UVVGRGNrSXNXVUZCU1N4dlFrRkJTanM3UVVGRlFTeFpRVUZKTEVOQlFVTXNXVUZCVEN4RlFVRnRRanRCUVVObU8wRkJRMGc3T3p0QlFVZEVMRmxCUVVrc1VVRkJVU3hIUVVGU0xFbEJRV1VzVVVGQlVTeEhRVUV6UWl4RlFVRm5RenRCUVVNMVFpd3dRa0ZCWXl4RlFVRmtPenM3UVVGSFNDeFRRVXBFTEUxQlNVOHNTVUZCU1N4UFFVRlBMRU5CUVZnc1JVRkJZenRCUVVOcVFpdzRRa0ZCWXl4RFFVRmtPenM3UVVGSFNDeGhRVXBOTEUxQlNVRXNTVUZCU1N4UFFVRlBMRU5CUVZnc1JVRkJZenRCUVVOcVFpeHJRMEZCWXl4RFFVRmtPMEZCUlVnc2FVSkJTRTBzVFVGSFFUdEJRVU5JTEd0RFFVRmpMRmRCUVZjc1UwRkJVeXhGUVVGVUxFTkJRVmdzUlVGQmVVSXNSMEZCZWtJc1JVRkJPRUlzUjBGQk9VSXNRMEZCWkR0QlFVTklPenRCUVVWRUxHVkJRVThzVjBGQlVEdEJRVU5JTEV0QmVFSkVPenRCUVRCQ1FTeFhRVUZQTEZGQlFWQTdRVUZEU0NJc0ltWnBiR1VpT2lKamNtVmhkR1V0WW1WNmFXVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OXFkbUZ1WkdWeVpHOWxjeTlEYjJSbEwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaThxWEc0Z0lDQWdRbVY2YVdWeUlHWjFibU4wYVc5dUlHZGxibVZ5WVhSdmNseHVJQ0FnSUNBZ0lDQmNiaUFnSUNCSFljT3JkR0Z1SUZKbGJtRjFaR1ZoZFNkeklFSmxlbWxsY2tWaGMybHVaMXh1SUNBZ0lHaDBkSEJ6T2k4dloybDBhSFZpTG1OdmJTOW5jbVV2WW1WNmFXVnlMV1ZoYzJsdVp5OWliRzlpTDIxaGMzUmxjaTlwYm1SbGVDNXFjeUFnWEc0Z0lDQWdhSFIwY0hNNkx5OW5hWFJvZFdJdVkyOXRMMmR5WlM5aVpYcHBaWEl0WldGemFXNW5MMkpzYjJJdmJXRnpkR1Z5TDB4SlEwVk9VMFZjYmlBZ0lDQlpiM1VuY21VZ1lTQm9aWEp2WEc0Z0lDQWdYRzRnSUNBZ1ZYTmxYRzRnSUNBZ1hHNGdJQ0FnSUNBZ0lIWmhjaUJsWVhObFQzVjBJRDBnYm1WM0lFSmxlbWxsY2lndU1UY3NMalkzTEM0NE15d3VOamNwTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdlQ0E5SUdWaGMyVlBkWFFvTUM0MUtUc2dMeThnY21WMGRYSnVjeUF3TGpZeU55NHVMbHh1S2k5Y2JseHVMeThnUTI5dWMzUmhiblJ6WEc1amIyNXpkQ0JPUlZkVVQwNWZTVlJGVWtGVVNVOU9VeUE5SURnN1hHNWpiMjV6ZENCT1JWZFVUMDVmVFVsT1gxTk1UMUJGSUQwZ01DNHdNREU3WEc1amIyNXpkQ0JUVlVKRVNWWkpVMGxQVGw5UVVrVkRTVk5KVDA0Z1BTQXdMakF3TURBd01ERTdYRzVqYjI1emRDQlRWVUpFU1ZaSlUwbFBUbDlOUVZoZlNWUkZVa0ZVU1U5T1V5QTlJREV3TzF4dVkyOXVjM1FnUzE5VFVFeEpUa1ZmVkVGQ1RFVmZVMGxhUlNBOUlERXhPMXh1WTI5dWMzUWdTMTlUUVUxUVRFVmZVMVJGVUY5VFNWcEZJRDBnTVM0d0lDOGdLRXRmVTFCTVNVNUZYMVJCUWt4RlgxTkpXa1VnTFNBeExqQXBPMXh1WTI5dWMzUWdSa3hQUVZSZk16SmZVMVZRVUU5U1ZFVkVJRDBnS0hSNWNHVnZaaUJHYkc5aGRETXlRWEp5WVhrZ0lUMDlJQ2QxYm1SbFptbHVaV1FuS1R0Y2JseHVMeThnU0dWc2NHVnlJRzFsZEdodlpITmNibU52Ym5OMElHRWdQU0FvWVRFc0lHRXlLU0E5UGlBeExqQWdMU0F6TGpBZ0tpQmhNaUFySURNdU1DQXFJR0V4TzF4dVkyOXVjM1FnWWlBOUlDaGhNU3dnWVRJcElEMCtJRE11TUNBcUlHRXlJQzBnTmk0d0lDb2dZVEU3WEc1amIyNXpkQ0JqSUQwZ0tHRXhLU0E5UGlBekxqQWdLaUJoTVR0Y2JseHVZMjl1YzNRZ1oyVjBVMnh2Y0dVZ1BTQW9kQ3dnWVRFc0lHRXlLU0E5UGlBekxqQWdLaUJoS0dFeExDQmhNaWtnS2lCMElDb2dkQ0FySURJdU1DQXFJR0lvWVRFc0lHRXlLU0FxSUhRZ0t5QmpLR0V4S1R0Y2JseHVZMjl1YzNRZ1kyRnNZMEpsZW1sbGNpQTlJQ2gwTENCaE1Td2dZVElwSUQwK0lDZ29ZU2hoTVN3Z1lUSXBJQ29nZENBcklHSW9ZVEVzSUdFeUtTa2dLaUIwSUNzZ1l5aGhNU2twSUNvZ2REdGNibHh1THlwY2JpQWdJQ0JEY21WaGRHVWdZU0JqZFdKcFl5QmlaWHBwWlhJZ2NtVnpiMngyWlhKY2Jpb3ZYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQm1kVzVqZEdsdmJpQmpkV0pwWTBKbGVtbGxjaWh0V0RFc0lHMVpNU3dnYlZneUxDQnRXVElwSUh0Y2JpQWdJQ0JqYjI1emRDQnpZVzF3YkdWV1lXeDFaWE1nUFNCR1RFOUJWRjh6TWw5VFZWQlFUMUpVUlVRZ1B5QnVaWGNnUm14dllYUXpNa0Z5Y21GNUtFdGZVMUJNU1U1RlgxUkJRa3hGWDFOSldrVXBJRG9nYm1WM0lFRnljbUY1S0V0ZlUxQk1TVTVGWDFSQlFreEZYMU5KV2tVcE8xeHVJQ0FnSUd4bGRDQmZjSEpsWTI5dGNIVjBaV1FnUFNCbVlXeHpaVHRjYmx4dUlDQWdJR052Ym5OMElHSnBibUZ5ZVZOMVltUnBkbWxrWlNBOUlDaGhXQ3dnWVVFc0lHRkNLU0E5UGlCN1hHNGdJQ0FnSUNBZ0lHeGxkQ0JwSUQwZ01EdGNiaUFnSUNBZ0lDQWdiR1YwSUdOMWNuSmxiblJZTzF4dUlDQWdJQ0FnSUNCc1pYUWdZM1Z5Y21WdWRGUTdYRzVjYmlBZ0lDQWdJQ0FnWkc4Z2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWTNWeWNtVnVkRlFnUFNCaFFTQXJJQ2hoUWlBdElHRkJLU0F2SURJdU1EdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOMWNuSmxiblJZSUQwZ1kyRnNZMEpsZW1sbGNpaGpkWEp5Wlc1MFZDd2diVmd4TENCdFdESXBJQzBnWVZnN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb1kzVnljbVZ1ZEZnZ1BpQXdMakFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCaFFpQTlJR04xY25KbGJuUlVPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCaFFTQTlJR04xY25KbGJuUlVPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlJSGRvYVd4bElDaE5ZWFJvTG1GaWN5aGpkWEp5Wlc1MFdDa2dQaUJUVlVKRVNWWkpVMGxQVGw5UVVrVkRTVk5KVDA0Z0ppWWdLeXRwSUR3Z1UxVkNSRWxXU1ZOSlQwNWZUVUZZWDBsVVJWSkJWRWxQVGxNcE8xeHVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQmpkWEp5Wlc1MFZEdGNiaUFnSUNCOU8xeHVYRzRnSUNBZ1kyOXVjM1FnYm1WM2RHOXVVbUZ3YUhOdmJrbDBaWEpoZEdVZ1BTQW9ZVmdzSUdGSGRXVnpjMVFwSUQwK0lIdGNiaUFnSUNBZ0lDQWdiR1YwSUdrZ1BTQXdPMXh1SUNBZ0lDQWdJQ0JzWlhRZ1kzVnljbVZ1ZEZOc2IzQmxJRDBnTUR0Y2JpQWdJQ0FnSUNBZ2JHVjBJR04xY25KbGJuUllPMXh1WEc0Z0lDQWdJQ0FnSUdadmNpQW9PeUJwSUR3Z1RrVlhWRTlPWDBsVVJWSkJWRWxQVGxNN0lDc3JhU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdZM1Z5Y21WdWRGTnNiM0JsSUQwZ1oyVjBVMnh2Y0dVb1lVZDFaWE56VkN3Z2JWZ3hMQ0J0V0RJcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvWTNWeWNtVnVkRk5zYjNCbElEMDlQU0F3TGpBcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z1lVZDFaWE56VkR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQWdJQ0FnWTNWeWNtVnVkRmdnUFNCallXeGpRbVY2YVdWeUtHRkhkV1Z6YzFRc0lHMVlNU3dnYlZneUtTQXRJR0ZZTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZVWQxWlhOelZDQXRQU0JqZFhKeVpXNTBXQ0F2SUdOMWNuSmxiblJUYkc5d1pUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR0ZIZFdWemMxUTdYRzRnSUNBZ2ZUdGNibHh1SUNBZ0lHTnZibk4wSUdOaGJHTlRZVzF3YkdWV1lXeDFaWE1nUFNBb0tTQTlQaUI3WEc0Z0lDQWdJQ0FnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z1MxOVRVRXhKVGtWZlZFRkNURVZmVTBsYVJUc2dLeXRwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J6WVcxd2JHVldZV3gxWlhOYmFWMGdQU0JqWVd4alFtVjZhV1Z5S0drZ0tpQkxYMU5CVFZCTVJWOVRWRVZRWDFOSldrVXNJRzFZTVN3Z2JWZ3lLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDA3WEc1Y2JpQWdJQ0JqYjI1emRDQm5aWFJVUm05eVdDQTlJQ2hoV0NrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0JzWlhRZ2FXNTBaWEoyWVd4VGRHRnlkQ0E5SURBdU1EdGNiaUFnSUNBZ0lDQWdiR1YwSUdOMWNuSmxiblJUWVcxd2JHVWdQU0F4TzF4dUlDQWdJQ0FnSUNCc1pYUWdiR0Z6ZEZOaGJYQnNaU0E5SUV0ZlUxQk1TVTVGWDFSQlFreEZYMU5KV2tVZ0xTQXhPMXh1SUNBZ0lDQWdJQ0JzWlhRZ1pHbHpkQ0E5SURBdU1EdGNiaUFnSUNBZ0lDQWdiR1YwSUdkMVpYTnpSbTl5VkNBOUlEQXVNRHRjYmlBZ0lDQWdJQ0FnYkdWMElHbHVhWFJwWVd4VGJHOXdaU0E5SURBdU1EdGNiaUFnSUNBZ0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNCbWIzSWdLRHNnWTNWeWNtVnVkRk5oYlhCc1pTQWhQU0JzWVhOMFUyRnRjR3hsSUNZbUlITmhiWEJzWlZaaGJIVmxjMXRqZFhKeVpXNTBVMkZ0Y0d4bFhTQThQU0JoV0RzZ0t5dGpkWEp5Wlc1MFUyRnRjR3hsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwYm5SbGNuWmhiRk4wWVhKMElDczlJRXRmVTBGTlVFeEZYMU5VUlZCZlUwbGFSVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ0xTMWpkWEp5Wlc1MFUyRnRjR3hsTzF4dUlDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ1pHbHpkQ0E5SUNoaFdDQXRJSE5oYlhCc1pWWmhiSFZsYzF0amRYSnlaVzUwVTJGdGNHeGxYU2tnTHlBb2MyRnRjR3hsVm1Gc2RXVnpXMk4xY25KbGJuUlRZVzF3YkdVck1WMGdMU0J6WVcxd2JHVldZV3gxWlhOYlkzVnljbVZ1ZEZOaGJYQnNaVjBwTzF4dUlDQWdJQ0FnSUNCbmRXVnpjMFp2Y2xRZ1BTQnBiblJsY25aaGJGTjBZWEowSUNzZ1pHbHpkQ0FxSUV0ZlUwRk5VRXhGWDFOVVJWQmZVMGxhUlR0Y2JpQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lHbHVhWFJwWVd4VGJHOXdaU0E5SUdkbGRGTnNiM0JsS0dkMVpYTnpSbTl5VkN3Z2JWZ3hMQ0J0V0RJcE8xeHVJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdMeThnU1dZZ2MyeHZjR1VnYVhNZ1ozSmxZWFJsY2lCMGFHRnVJRzFwYmx4dUlDQWdJQ0FnSUNCcFppQW9hVzVwZEdsaGJGTnNiM0JsSUQ0OUlFNUZWMVJQVGw5TlNVNWZVMHhQVUVVcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJ1WlhkMGIyNVNZWEJvYzI5dVNYUmxjbUYwWlNoaFdDd2daM1ZsYzNOR2IzSlVLVHRjYmlBZ0lDQWdJQ0FnTHk4Z1UyeHZjR1VnYVhNZ1pYRjFZV3dnZEc4Z2JXbHVYRzRnSUNBZ0lDQWdJSDBnWld4elpTQnBaaUFvYVc1cGRHbGhiRk5zYjNCbElEMDlQU0F3TGpBcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJuZFdWemMwWnZjbFE3WEc0Z0lDQWdJQ0FnSUM4dklGTnNiM0JsSUdseklHeGxjM01nZEdoaGJpQnRhVzVjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCaWFXNWhjbmxUZFdKa2FYWnBaR1VvWVZnc0lHbHVkR1Z5ZG1Gc1UzUmhjblFzSUdsdWRHVnlkbUZzVTNSaGNuUWdLeUJMWDFOQlRWQk1SVjlUVkVWUVgxTkpXa1VwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlR0Y2JseHVJQ0FnSUdOdmJuTjBJSEJ5WldOdmJYQjFkR1VnUFNBb0tTQTlQaUI3WEc0Z0lDQWdJQ0FnSUY5d2NtVmpiMjF3ZFhSbFpDQTlJSFJ5ZFdVN1hHNGdJQ0FnSUNBZ0lHbG1JQ2h0V0RFZ0lUMGdiVmt4SUh4OElHMVlNaUFoUFNCdFdUSXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTmhiR05UWVcxd2JHVldZV3gxWlhNb0tUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMDdYRzVjYmlBZ0lDQmpiMjV6ZENCeVpYTnZiSFpsY2lBOUlDaGhXQ2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQnNaWFFnY21WMGRYSnVWbUZzZFdVN1hHNWNiaUFnSUNBZ0lDQWdhV1lnS0NGZmNISmxZMjl0Y0hWMFpXUXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIQnlaV052YlhCMWRHVW9LVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ0x5OGdTV1lnYkdsdVpXRnlJR2R5WVdScFpXNTBMQ0J5WlhSMWNtNGdXQ0JoY3lCVVhHNGdJQ0FnSUNBZ0lHbG1JQ2h0V0RFZ1BUMDlJRzFaTVNBbUppQnRXRElnUFQwOUlHMVpNaWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdVZtRnNkV1VnUFNCaFdEdGNiaUFnSUNBZ0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNBdkx5QkpaaUJoZENCemRHRnlkQ3dnY21WMGRYSnVJREJjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJR2xtSUNoaFdDQTlQVDBnTUNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVWbUZzZFdVZ1BTQXdPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lDOHZJRWxtSUdGMElHVnVaQ3dnY21WMGRYSnVJREZjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJR2xtSUNoaFdDQTlQVDBnTVNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVWbUZzZFdVZ1BTQXhPMXh1WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY201V1lXeDFaU0E5SUdOaGJHTkNaWHBwWlhJb1oyVjBWRVp2Y2xnb1lWZ3BMQ0J0V1RFc0lHMVpNaWs3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCeVpYUjFjbTVXWVd4MVpUdGNiaUFnSUNCOU8xeHVYRzRnSUNBZ2NtVjBkWEp1SUhKbGMyOXNkbVZ5TzF4dWZWeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL2Vhc2luZy9jcmVhdGUtYmV6aWVyLmpzXG4gKiogbW9kdWxlIGlkID0gNTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8qXG4gICAgRGV0ZWN0IGFuZCBsb2FkIGFuIGFwcHJvcHJpYXRlIGNsb2NrIHNldHRpbmcgZm9yIHRoZSBlbnZpcm9ubWVudFxuKi9cblxudmFyIGhhc1JBRiA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPyB0cnVlIDogZmFsc2U7XG5cbnZhciB0aWNrID0gdm9pZCAwO1xuXG5pZiAoaGFzUkFGKSB7XG4gICAgdGljayA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShjYWxsYmFjayk7XG4gICAgfTtcbn0gZWxzZSB7XG4gICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLypcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBGb3IgSUU4LzkgRmxpbnN0b25lcyBhbmQgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRzXG4gICAgICAgICAgICAgVGFrZW4gZnJvbSBQYXVsIElyaXNoLiBXZSd2ZSBzdHJpcHBlZCBvdXQgY2FuY2VsQW5pbWF0aW9uRnJhbWUgY2hlY2tzIGJlY2F1c2Ugd2UgZG9uJ3QgZm94IHdpdGggdGhhdFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBodHRwOi8vcGF1bGlyaXNoLmNvbS8yMDExL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtYW5pbWF0aW5nL1xuICAgICAgICAgICAgaHR0cDovL215Lm9wZXJhLmNvbS9lbW9sbGVyL2Jsb2cvMjAxMS8xMi8yMC9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWVyLWFuaW1hdGluZ1xuICAgICAgICAgICAgIFxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHBvbHlmaWxsIGJ5IEVyaWsgTcO2bGxlci4gZml4ZXMgZnJvbSBQYXVsIElyaXNoIGFuZCBUaW5vIFppamRlbFxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgTUlUIGxpY2Vuc2VcbiAgICAgICAgKi9cbiAgICAgICAgdmFyIGxhc3RUaW1lID0gMDtcblxuICAgICAgICB0aWNrID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB2YXIgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgIHZhciB0aW1lVG9DYWxsID0gTWF0aC5tYXgoMCwgMTYgLSAoY3VycmVudFRpbWUgLSBsYXN0VGltZSkpO1xuXG4gICAgICAgICAgICBsYXN0VGltZSA9IGN1cnJlbnRUaW1lICsgdGltZVRvQ2FsbDtcblxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGxhc3RUaW1lKTtcbiAgICAgICAgICAgIH0sIHRpbWVUb0NhbGwpO1xuICAgICAgICB9O1xuICAgIH0pKCk7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHRpY2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTBZWE5yTDNScFkyc3Vhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096dEJRVWxCTEVsQlFVMHNVMEZCVlN4UFFVRlBMRTFCUVZBc1MwRkJhMElzVjBGQmJFSXNTVUZCYVVNc1QwRkJUeXh4UWtGQmVrTXNSMEZCYTBVc1NVRkJiRVVzUjBGQmVVVXNTMEZCZUVZN08wRkJSVUVzU1VGQlNTeGhRVUZLT3p0QlFVVkJMRWxCUVVrc1RVRkJTaXhGUVVGWk8wRkJRMUlzVjBGQlR5eFZRVUZETEZGQlFVUTdRVUZCUVN4bFFVRmpMRTlCUVU4c2NVSkJRVkFzUTBGQk5rSXNVVUZCTjBJc1EwRkJaRHRCUVVGQkxFdEJRVkE3UVVGRlNDeERRVWhFTEUxQlIwODdRVUZCUVRzN096czdPenM3T3pzN096czdRVUZsU0N4WlFVRkpMRmRCUVZjc1EwRkJaanM3UVVGRlFTeGxRVUZQTEZWQlFVTXNVVUZCUkN4RlFVRmpPMEZCUTJwQ0xHZENRVUZOTEdOQlFXTXNTVUZCU1N4SlFVRktMRWRCUVZjc1QwRkJXQ3hGUVVGd1FqdEJRVU5CTEdkQ1FVRk5MR0ZCUVdFc1MwRkJTeXhIUVVGTUxFTkJRVk1zUTBGQlZDeEZRVUZaTEUxQlFVMHNZMEZCWXl4UlFVRndRaXhEUVVGYUxFTkJRVzVDT3p0QlFVVkJMSFZDUVVGWExHTkJRV01zVlVGQmVrSTdPMEZCUlVFc2RVSkJRVmM3UVVGQlFTeDFRa0ZCVFN4VFFVRlRMRkZCUVZRc1EwRkJUanRCUVVGQkxHRkJRVmdzUlVGQmNVTXNWVUZCY2tNN1FVRkRTQ3hUUVZCRU8wRkJha0pITzBGQmVVSk9PenRyUWtGRll5eEpJaXdpWm1sc1pTSTZJblJwWTJzdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDJwMllXNWtaWEprYjJWekwwTnZaR1V2Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUx5cGNiaUFnSUNCRVpYUmxZM1FnWVc1a0lHeHZZV1FnWVc0Z1lYQndjbTl3Y21saGRHVWdZMnh2WTJzZ2MyVjBkR2x1WnlCbWIzSWdkR2hsSUdWdWRtbHliMjV0Wlc1MFhHNHFMMXh1WEc1amIyNXpkQ0JvWVhOU1FVWWdQU0FvZEhsd1pXOW1JSGRwYm1SdmR5QWhQVDBnSjNWdVpHVm1hVzVsWkNjZ0ppWWdkMmx1Wkc5M0xuSmxjWFZsYzNSQmJtbHRZWFJwYjI1R2NtRnRaU2tnUHlCMGNuVmxJRG9nWm1Gc2MyVTdYRzVjYm14bGRDQjBhV05yTzF4dVhHNXBaaUFvYUdGelVrRkdLU0I3WEc0Z0lDQWdkR2xqYXlBOUlDaGpZV3hzWW1GamF5a2dQVDRnZDJsdVpHOTNMbkpsY1hWbGMzUkJibWx0WVhScGIyNUdjbUZ0WlNoallXeHNZbUZqYXlrN1hHNWNibjBnWld4elpTQjdYRzRnSUNBZ0x5cGNiaUFnSUNBZ0lDQWdjbVZ4ZFdWemRFRnVhVzFoZEdsdmJrWnlZVzFsSUhCdmJIbG1hV3hzWEc0Z0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNCR2IzSWdTVVU0THprZ1JteHBibk4wYjI1bGN5QmhibVFnYm05dUxXSnliM2R6WlhJZ1pXNTJhWEp2Ym0xbGJuUnpYRzVjYmlBZ0lDQWdJQ0FnVkdGclpXNGdabkp2YlNCUVlYVnNJRWx5YVhOb0xpQlhaU2QyWlNCemRISnBjSEJsWkNCdmRYUWdZMkZ1WTJWc1FXNXBiV0YwYVc5dVJuSmhiV1VnWTJobFkydHpJR0psWTJGMWMyVWdkMlVnWkc5dUozUWdabTk0SUhkcGRHZ2dkR2hoZEZ4dUlDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ2FIUjBjRG92TDNCaGRXeHBjbWx6YUM1amIyMHZNakF4TVM5eVpYRjFaWE4wWVc1cGJXRjBhVzl1Wm5KaGJXVXRabTl5TFhOdFlYSjBMV0Z1YVcxaGRHbHVaeTljYmlBZ0lDQWdJQ0FnYUhSMGNEb3ZMMjE1TG05d1pYSmhMbU52YlM5bGJXOXNiR1Z5TDJKc2IyY3ZNakF4TVM4eE1pOHlNQzl5WlhGMVpYTjBZVzVwYldGMGFXOXVabkpoYldVdFptOXlMWE50WVhKMExXVnlMV0Z1YVcxaGRHbHVaMXh1SUNBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUhKbGNYVmxjM1JCYm1sdFlYUnBiMjVHY21GdFpTQndiMng1Wm1sc2JDQmllU0JGY21scklFM0R0bXhzWlhJdUlHWnBlR1Z6SUdaeWIyMGdVR0YxYkNCSmNtbHphQ0JoYm1RZ1ZHbHVieUJhYVdwa1pXeGNiaUFnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0JOU1ZRZ2JHbGpaVzV6WlZ4dUlDQWdJQ292WEc0Z0lDQWdiR1YwSUd4aGMzUlVhVzFsSUQwZ01EdGNibHh1SUNBZ0lIUnBZMnNnUFNBb1kyRnNiR0poWTJzcElEMCtJSHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdZM1Z5Y21WdWRGUnBiV1VnUFNCdVpYY2dSR0YwWlNncExtZGxkRlJwYldVb0tUdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2RHbHRaVlJ2UTJGc2JDQTlJRTFoZEdndWJXRjRLREFzSURFMklDMGdLR04xY25KbGJuUlVhVzFsSUMwZ2JHRnpkRlJwYldVcEtUdGNibHh1SUNBZ0lDQWdJQ0JzWVhOMFZHbHRaU0E5SUdOMWNuSmxiblJVYVcxbElDc2dkR2x0WlZSdlEyRnNiRHRjYmx4dUlDQWdJQ0FnSUNCelpYUlVhVzFsYjNWMEtDZ3BJRDArSUdOaGJHeGlZV05yS0d4aGMzUlVhVzFsS1N3Z2RHbHRaVlJ2UTJGc2JDazdYRzRnSUNBZ2ZUdGNibjFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnZEdsamF6c2lYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy90YXNrL3RpY2suanNcbiAqKiBtb2R1bGUgaWQgPSA1MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vLyBbaW50XTogSW5jcmVtZW50ZWQgZm9yIGVhY2ggbmV3IHJ1bm5pbmcgdGFza1xudmFyIGN1cnJlbnRUYXNrSWQgPSAwO1xuXG4vLyBbaW50XTogTnVtYmVyIG9mIGFsbCBydW5uaW5nIHRhc2tlc1xudmFyIHRvdGFsUnVubmluZ0NvdW50ID0gMDtcblxuLy8gW2ludF06IE51bWJlciBvZiBydW5uaW5nIHRhc2tlcyBleGNsdWRpbmcgYmFja2dyb3VuZCB0YXNrZXNcbnZhciBub25CYWNrZ3JvdW5kUnVubmluZ0NvdW50ID0gMDtcblxuLy8gW2FycmF5XTogQXJyYXkgb2YgcnVubmluZyB0YXNrIElEc1xudmFyIHJ1bm5pbmdJZHMgPSBbXTtcblxuLy8gW29iamVjdF06IE1hcCBvZiBydW5uaW5nIHRhc2tlc1xudmFyIGFjdGl2ZVRhc2tzID0ge307XG5cbi8vIFthcnJheV06IEFycmF5IG9mIHRhc2sgSURzIHF1ZXVlZCBmb3IgYWN0aXZhdGlvblxudmFyIGFjdGl2YXRlUXVldWUgPSBbXTtcblxuLy8gW2FycmF5XTogQXJyYXkgb2YgdGFzayBJRHMgcXVldWVkIGZvciBkZWFjdGl2YXRpb25cbnZhciBkZWFjdGl2YXRlUXVldWUgPSBbXTtcblxuLypcbiAgICBVcGRhdGUgYWN0aXZhdGUvZGVhY3RpdmF0ZSBxdWV1ZXNcblxuICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgIEBwYXJhbSBbYXJyYXldXG4gICAgQHBhcmFtIFthcnJheV1cbiovXG52YXIgdXBkYXRlUXVldWVzID0gZnVuY3Rpb24gKGlkLCBpbkxpc3QsIG91dExpc3QpIHtcbiAgICB2YXIgaW5Qb3NpdGlvbiA9IGluTGlzdC5pbmRleE9mKGlkKTtcbiAgICB2YXIgb3V0UG9zaXRpb24gPSBvdXRMaXN0LmluZGV4T2YoaWQpO1xuXG4gICAgaWYgKGluUG9zaXRpb24gPT09IC0xKSB7XG4gICAgICAgIGluTGlzdC5wdXNoKGlkKTtcbiAgICB9XG5cbiAgICBpZiAob3V0UG9zaXRpb24gPiAtMSkge1xuICAgICAgICBvdXRMaXN0LnNwbGljZShvdXRQb3NpdGlvbiwgMSk7XG4gICAgfVxufTtcblxuLypcbiAgICBVcGRhdGUgcnVubmluZ1xuXG4gICAgW2Jvb2xlYW5dOiBgdHJ1ZWAgdG8gYWRkXG4gICAgW2Jvb2xlYW5dOiBgdHJ1ZWAgaWYgbGF6eVxuKi9cbnZhciB1cGRhdGVSdW5uaW5nQ291bnQgPSBmdW5jdGlvbiAoYWRkLCBpc0xhenkpIHtcbiAgICB2YXIgbW9kaWZ5ID0gYWRkID8gMSA6IC0xO1xuXG4gICAgdG90YWxSdW5uaW5nQ291bnQgKz0gbW9kaWZ5O1xuXG4gICAgaWYgKCFpc0xhenkpIHtcbiAgICAgICAgbm9uQmFja2dyb3VuZFJ1bm5pbmdDb3VudCArPSBtb2RpZnk7XG4gICAgfVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGFjdGl2ZVRhc2tzOiBhY3RpdmVUYXNrcyxcblxuICAgIC8vIEFjdGl2YXRlIGEgdGFza1xuICAgIGFjdGl2YXRlOiBmdW5jdGlvbiAoaWQsIHRhc2spIHtcbiAgICAgICAgYWN0aXZlVGFza3NbaWRdID0gdGFzaztcbiAgICAgICAgdGFzay5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIHVwZGF0ZVF1ZXVlcyhpZCwgYWN0aXZhdGVRdWV1ZSwgZGVhY3RpdmF0ZVF1ZXVlKTtcblxuICAgICAgICBpZiAodGFzay5vbkFjdGl2YXRlKSB7XG4gICAgICAgICAgICB0YXNrLm9uQWN0aXZhdGUodGFzayk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGFzay5vbkFjdGl2YXRlT25jZSkge1xuICAgICAgICAgICAgdGFzay5vbkFjdGl2YXRlT25jZSh0YXNrKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBEZWFjdGl2YXRlIGEgdGFza1xuICAgIGRlYWN0aXZhdGU6IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICB2YXIgdGFzayA9IGFjdGl2ZVRhc2tzW2lkXTtcblxuICAgICAgICBpZiAodGFzaykge1xuICAgICAgICAgICAgdXBkYXRlUXVldWVzKGlkLCBkZWFjdGl2YXRlUXVldWUsIGFjdGl2YXRlUXVldWUpO1xuICAgICAgICAgICAgdGFzay5pc0FjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAodGFzay5vbkRlYWN0aXZhdGUpIHtcbiAgICAgICAgICAgICAgICB0YXNrLm9uRGVhY3RpdmF0ZSh0YXNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBOdW1iZXIgYmFja2dyb3VuZCB0YXNrZXNcbiAgICBnZXROb25CYWNrZ3JvdW5kUnVubmluZ0NvdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBub25CYWNrZ3JvdW5kUnVubmluZ0NvdW50O1xuICAgIH0sXG5cbiAgICAvLyBJbmNyZW1lbnQgY3VycmVudCB0YXNrIElEIGFuZCByZXR1cm5cbiAgICBnZXRUYXNrSWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRUYXNrSWQrKztcbiAgICB9LFxuXG4gICAgLy8gUmVzb2x2ZSBhY3RpdmF0ZS9kZWFjdGl2YXRlIHRhc2tlcyBhbmQgcmV0dXJuIGFjdGl2ZSBpZHNcbiAgICBnZXRBY3RpdmVJZHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLypcbiAgICAgICAgICAgIHRhc2sgZGVhY3RpdmF0ZSBxdWV1ZVxuICAgICAgICAqL1xuICAgICAgICB2YXIgZGVhY3RpdmF0ZVF1ZXVlTGVuZ3RoID0gZGVhY3RpdmF0ZVF1ZXVlLmxlbmd0aDtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRlYWN0aXZhdGVRdWV1ZUxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaWQgPSBkZWFjdGl2YXRlUXVldWVbaV07XG4gICAgICAgICAgICB2YXIgYWN0aXZlSWRJbmRleCA9IHJ1bm5pbmdJZHMuaW5kZXhPZihpZCk7XG4gICAgICAgICAgICB2YXIgdGFzayA9IGFjdGl2ZVRhc2tzW2lkXTtcblxuICAgICAgICAgICAgLy8gSWYgdGhpcyBpcyBhIHJ1bm5pbmcgdGFzaywgZGVhY3RpdmF0ZVxuICAgICAgICAgICAgaWYgKGFjdGl2ZUlkSW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgIHJ1bm5pbmdJZHMuc3BsaWNlKGFjdGl2ZUlkSW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZVJ1bm5pbmdDb3VudChmYWxzZSwgdGFzay5pc0xhenkpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBhY3RpdmVUYXNrc1tpZF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKlxuICAgICAgICAgICAgRW1wdHkgZGVhY3RpdmF0ZSBxdWV1ZS4gV2UgdXNlIGBBcnJheS5zcGxpY2VgIGJlY2F1c2UgaXQgZG9lc24ndFxuICAgICAgICAgICAgd29ya3Mgb24gdGhlIG9yaWdpbmFsIGFycmF5IHNvIHdlIGRvbid0IGhhdmUgdG8gZ2FyYmFnZSBjb2xsZWN0IGFueXRoaW5nXG4gICAgICAgICovXG4gICAgICAgIGRlYWN0aXZhdGVRdWV1ZS5zcGxpY2UoMCwgZGVhY3RpdmF0ZVF1ZXVlTGVuZ3RoKTtcblxuICAgICAgICAvKlxuICAgICAgICAgICAgdGFzayBhY3RpdmF0ZSBxdWV1ZVxuICAgICAgICAqL1xuICAgICAgICB2YXIgYWN0aXZhdGVRdWV1ZUxlbmd0aCA9IGFjdGl2YXRlUXVldWUubGVuZ3RoO1xuXG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhY3RpdmF0ZVF1ZXVlTGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgX2lkID0gYWN0aXZhdGVRdWV1ZVtfaV07XG4gICAgICAgICAgICB2YXIgX2FjdGl2ZUlkSW5kZXggPSBydW5uaW5nSWRzLmluZGV4T2YoX2lkKTtcbiAgICAgICAgICAgIHZhciBfdGFzayA9IGFjdGl2ZVRhc2tzW19pZF07XG5cbiAgICAgICAgICAgIC8vIElmIHRhc2sgaXNuJ3QgYWxyZWFkeSBydW5uaW5nLCBhY3RpdmF0ZVxuICAgICAgICAgICAgaWYgKF9hY3RpdmVJZEluZGV4ID09PSAtMSAmJiBfdGFzaykge1xuICAgICAgICAgICAgICAgIGlmIChfdGFzay5pc1ByaW9yaXR5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmdJZHMudW5zaGlmdChfaWQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmdJZHMucHVzaChfaWQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChfdGFzay5vbkFjdGl2YXRlTG9vcCkge1xuICAgICAgICAgICAgICAgICAgICBfdGFzay5vbkFjdGl2YXRlTG9vcCgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHVwZGF0ZVJ1bm5pbmdDb3VudCh0cnVlLCBfdGFzay5pc0xhenkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYWN0aXZhdGVRdWV1ZS5zcGxpY2UoMCwgYWN0aXZhdGVRdWV1ZUxlbmd0aCk7XG5cbiAgICAgICAgcmV0dXJuIHJ1bm5pbmdJZHM7XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MFlYTnJMMjFoYm1GblpYSXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0QlFVTkJMRWxCUVVrc1owSkJRV2RDTEVOQlFYQkNPenM3UVVGSFFTeEpRVUZKTEc5Q1FVRnZRaXhEUVVGNFFqczdPMEZCUjBFc1NVRkJTU3cwUWtGQk5FSXNRMEZCYUVNN096dEJRVWRCTEVsQlFVMHNZVUZCWVN4RlFVRnVRanM3TzBGQlIwRXNTVUZCVFN4alFVRmpMRVZCUVhCQ096czdRVUZIUVN4SlFVRk5MR2RDUVVGblFpeEZRVUYwUWpzN08wRkJSMEVzU1VGQlRTeHJRa0ZCYTBJc1JVRkJlRUk3T3pzN096czdPenRCUVZOQkxFbEJRVTBzWlVGQlpTeFZRVUZETEVWQlFVUXNSVUZCU3l4TlFVRk1MRVZCUVdFc1QwRkJZaXhGUVVGNVFqdEJRVU14UXl4UlFVRk5MR0ZCUVdFc1QwRkJUeXhQUVVGUUxFTkJRV1VzUlVGQlppeERRVUZ1UWp0QlFVTkJMRkZCUVUwc1kwRkJZeXhSUVVGUkxFOUJRVklzUTBGQlowSXNSVUZCYUVJc1EwRkJjRUk3TzBGQlJVRXNVVUZCU1N4bFFVRmxMRU5CUVVNc1EwRkJjRUlzUlVGQmRVSTdRVUZEYmtJc1pVRkJUeXhKUVVGUUxFTkJRVmtzUlVGQldqdEJRVU5JT3p0QlFVVkVMRkZCUVVrc1kwRkJZeXhEUVVGRExFTkJRVzVDTEVWQlFYTkNPMEZCUTJ4Q0xHZENRVUZSTEUxQlFWSXNRMEZCWlN4WFFVRm1MRVZCUVRSQ0xFTkJRVFZDTzBGQlEwZzdRVUZEU2l4RFFWaEVPenM3T3pzN096dEJRVzFDUVN4SlFVRk5MSEZDUVVGeFFpeFZRVUZETEVkQlFVUXNSVUZCVFN4TlFVRk9MRVZCUVdsQ08wRkJRM2hETEZGQlFVMHNVMEZCVXl4TlFVRk5MRU5CUVU0c1IwRkJWU3hEUVVGRExFTkJRVEZDT3p0QlFVVkJMSGxDUVVGeFFpeE5RVUZ5UWpzN1FVRkZRU3hSUVVGSkxFTkJRVU1zVFVGQlRDeEZRVUZoTzBGQlExUXNjVU5CUVRaQ0xFMUJRVGRDTzBGQlEwZzdRVUZEU2l4RFFWSkVPenRyUWtGVlpUdEJRVU5ZTERSQ1FVUlhPenM3UVVGSldDeGpRVUZWTEZWQlFVTXNSVUZCUkN4RlFVRkxMRWxCUVV3c1JVRkJZenRCUVVOd1FpeHZRa0ZCV1N4RlFVRmFMRWxCUVd0Q0xFbEJRV3hDTzBGQlEwRXNZVUZCU3l4UlFVRk1MRWRCUVdkQ0xFbEJRV2hDTzBGQlEwRXNjVUpCUVdFc1JVRkJZaXhGUVVGcFFpeGhRVUZxUWl4RlFVRm5ReXhsUVVGb1F6czdRVUZGUVN4WlFVRkpMRXRCUVVzc1ZVRkJWQ3hGUVVGeFFqdEJRVU5xUWl4cFFrRkJTeXhWUVVGTUxFTkJRV2RDTEVsQlFXaENPMEZCUTBnN08wRkJSVVFzV1VGQlNTeExRVUZMTEdOQlFWUXNSVUZCZVVJN1FVRkRja0lzYVVKQlFVc3NZMEZCVEN4RFFVRnZRaXhKUVVGd1FqdEJRVU5JTzBGQlEwb3NTMEZvUWxVN096dEJRVzFDV0N4blFrRkJXU3hWUVVGRExFVkJRVVFzUlVGQlVUdEJRVU5vUWl4WlFVRk5MRTlCUVU4c1dVRkJXU3hGUVVGYUxFTkJRV0k3TzBGQlJVRXNXVUZCU1N4SlFVRktMRVZCUVZVN1FVRkRUaXg1UWtGQllTeEZRVUZpTEVWQlFXbENMR1ZCUVdwQ0xFVkJRV3RETEdGQlFXeERPMEZCUTBFc2FVSkJRVXNzVVVGQlRDeEhRVUZuUWl4TFFVRm9RanM3UVVGRlFTeG5Ra0ZCU1N4TFFVRkxMRmxCUVZRc1JVRkJkVUk3UVVGRGJrSXNjVUpCUVVzc1dVRkJUQ3hEUVVGclFpeEpRVUZzUWp0QlFVTklPMEZCUTBvN1FVRkRTaXhMUVRsQ1ZUczdPMEZCYVVOWUxHdERRVUU0UWp0QlFVRkJMR1ZCUVUwc2VVSkJRVTQ3UVVGQlFTeExRV3BEYmtJN096dEJRVzlEV0N4bFFVRlhPMEZCUVVFc1pVRkJUU3hsUVVGT08wRkJRVUVzUzBGd1EwRTdPenRCUVhWRFdDeHJRa0ZCWXl4WlFVRk5PenM3TzBGQlNXaENMRmxCUVUwc2QwSkJRWGRDTEdkQ1FVRm5RaXhOUVVFNVF6czdRVUZGUVN4aFFVRkxMRWxCUVVrc1NVRkJTU3hEUVVGaUxFVkJRV2RDTEVsQlFVa3NjVUpCUVhCQ0xFVkJRVEpETEVkQlFUTkRMRVZCUVdkRU8wRkJRelZETEdkQ1FVRk5MRXRCUVVzc1owSkJRV2RDTEVOQlFXaENMRU5CUVZnN1FVRkRRU3huUWtGQlRTeG5Ra0ZCWjBJc1YwRkJWeXhQUVVGWUxFTkJRVzFDTEVWQlFXNUNMRU5CUVhSQ08wRkJRMEVzWjBKQlFVMHNUMEZCVHl4WlFVRlpMRVZCUVZvc1EwRkJZanM3TzBGQlIwRXNaMEpCUVVrc1owSkJRV2RDTEVOQlFVTXNRMEZCY2tJc1JVRkJkMEk3UVVGRGNFSXNNa0pCUVZjc1RVRkJXQ3hEUVVGclFpeGhRVUZzUWl4RlFVRnBReXhEUVVGcVF6dEJRVU5CTEcxRFFVRnRRaXhMUVVGdVFpeEZRVUV3UWl4TFFVRkxMRTFCUVM5Q08wRkJRMEVzZFVKQlFVOHNXVUZCV1N4RlFVRmFMRU5CUVZBN1FVRkRTRHRCUVVOS096czdPenM3UVVGTlJDeDNRa0ZCWjBJc1RVRkJhRUlzUTBGQmRVSXNRMEZCZGtJc1JVRkJNRUlzY1VKQlFURkNPenM3T3p0QlFVdEJMRmxCUVUwc2MwSkJRWE5DTEdOQlFXTXNUVUZCTVVNN08wRkJSVUVzWVVGQlN5eEpRVUZKTEV0QlFVa3NRMEZCWWl4RlFVRm5RaXhMUVVGSkxHMUNRVUZ3UWl4RlFVRjVReXhKUVVGNlF5eEZRVUU0UXp0QlFVTXhReXhuUWtGQlRTeE5RVUZMTEdOQlFXTXNSVUZCWkN4RFFVRllPMEZCUTBFc1owSkJRVTBzYVVKQlFXZENMRmRCUVZjc1QwRkJXQ3hEUVVGdFFpeEhRVUZ1UWl4RFFVRjBRanRCUVVOQkxHZENRVUZOTEZGQlFVOHNXVUZCV1N4SFFVRmFMRU5CUVdJN096dEJRVWRCTEdkQ1FVRkpMRzFDUVVGclFpeERRVUZETEVOQlFXNUNMRWxCUVhkQ0xFdEJRVFZDTEVWQlFXdERPMEZCUXpsQ0xHOUNRVUZKTEUxQlFVc3NWVUZCVkN4RlFVRnhRanRCUVVOcVFpd3JRa0ZCVnl4UFFVRllMRU5CUVcxQ0xFZEJRVzVDTzBGQlEwZ3NhVUpCUmtRc1RVRkZUenRCUVVOSUxDdENRVUZYTEVsQlFWZ3NRMEZCWjBJc1IwRkJhRUk3UVVGRFNEczdRVUZGUkN4dlFrRkJTU3hOUVVGTExHTkJRVlFzUlVGQmVVSTdRVUZEY2tJc01FSkJRVXNzWTBGQlREdEJRVU5JT3p0QlFVVkVMRzFEUVVGdFFpeEpRVUZ1UWl4RlFVRjVRaXhOUVVGTExFMUJRVGxDTzBGQlEwZzdRVUZEU2pzN1FVRkZSQ3h6UWtGQll5eE5RVUZrTEVOQlFYRkNMRU5CUVhKQ0xFVkJRWGRDTEcxQ1FVRjRRanM3UVVGRlFTeGxRVUZQTEZWQlFWQTdRVUZEU0R0QlFUZEdWU3hESWl3aVptbHNaU0k2SW0xaGJtRm5aWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMnAyWVc1a1pYSmtiMlZ6TDBOdlpHVXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTHk4Z1cybHVkRjA2SUVsdVkzSmxiV1Z1ZEdWa0lHWnZjaUJsWVdOb0lHNWxkeUJ5ZFc1dWFXNW5JSFJoYzJ0Y2JteGxkQ0JqZFhKeVpXNTBWR0Z6YTBsa0lEMGdNRHRjYmx4dUx5OGdXMmx1ZEYwNklFNTFiV0psY2lCdlppQmhiR3dnY25WdWJtbHVaeUIwWVhOclpYTmNibXhsZENCMGIzUmhiRkoxYm01cGJtZERiM1Z1ZENBOUlEQTdYRzVjYmk4dklGdHBiblJkT2lCT2RXMWlaWElnYjJZZ2NuVnVibWx1WnlCMFlYTnJaWE1nWlhoamJIVmthVzVuSUdKaFkydG5jbTkxYm1RZ2RHRnphMlZ6WEc1c1pYUWdibTl1UW1GamEyZHliM1Z1WkZKMWJtNXBibWREYjNWdWRDQTlJREE3WEc1Y2JpOHZJRnRoY25KaGVWMDZJRUZ5Y21GNUlHOW1JSEoxYm01cGJtY2dkR0Z6YXlCSlJITmNibU52Ym5OMElISjFibTVwYm1kSlpITWdQU0JiWFR0Y2JseHVMeThnVzI5aWFtVmpkRjA2SUUxaGNDQnZaaUJ5ZFc1dWFXNW5JSFJoYzJ0bGMxeHVZMjl1YzNRZ1lXTjBhWFpsVkdGemEzTWdQU0I3ZlR0Y2JseHVMeThnVzJGeWNtRjVYVG9nUVhKeVlYa2diMllnZEdGemF5QkpSSE1nY1hWbGRXVmtJR1p2Y2lCaFkzUnBkbUYwYVc5dVhHNWpiMjV6ZENCaFkzUnBkbUYwWlZGMVpYVmxJRDBnVzEwN1hHNWNiaTh2SUZ0aGNuSmhlVjA2SUVGeWNtRjVJRzltSUhSaGMyc2dTVVJ6SUhGMVpYVmxaQ0JtYjNJZ1pHVmhZM1JwZG1GMGFXOXVYRzVqYjI1emRDQmtaV0ZqZEdsMllYUmxVWFZsZFdVZ1BTQmJYVHRjYmx4dUx5cGNiaUFnSUNCVmNHUmhkR1VnWVdOMGFYWmhkR1V2WkdWaFkzUnBkbUYwWlNCeGRXVjFaWE5jYmx4dUlDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhWeHVJQ0FnSUVCd1lYSmhiU0JiWVhKeVlYbGRYRzRnSUNBZ1FIQmhjbUZ0SUZ0aGNuSmhlVjFjYmlvdlhHNWpiMjV6ZENCMWNHUmhkR1ZSZFdWMVpYTWdQU0FvYVdRc0lHbHVUR2x6ZEN3Z2IzVjBUR2x6ZENrZ1BUNGdlMXh1SUNBZ0lHTnZibk4wSUdsdVVHOXphWFJwYjI0Z1BTQnBia3hwYzNRdWFXNWtaWGhQWmlocFpDazdYRzRnSUNBZ1kyOXVjM1FnYjNWMFVHOXphWFJwYjI0Z1BTQnZkWFJNYVhOMExtbHVaR1Y0VDJZb2FXUXBPMXh1WEc0Z0lDQWdhV1lnS0dsdVVHOXphWFJwYjI0Z1BUMDlJQzB4S1NCN1hHNGdJQ0FnSUNBZ0lHbHVUR2x6ZEM1d2RYTm9LR2xrS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JwWmlBb2IzVjBVRzl6YVhScGIyNGdQaUF0TVNrZ2UxeHVJQ0FnSUNBZ0lDQnZkWFJNYVhOMExuTndiR2xqWlNodmRYUlFiM05wZEdsdmJpd2dNU2s3WEc0Z0lDQWdmVnh1ZlR0Y2JseHVMeXBjYmlBZ0lDQlZjR1JoZEdVZ2NuVnVibWx1WjF4dVhHNGdJQ0FnVzJKdmIyeGxZVzVkT2lCZ2RISjFaV0FnZEc4Z1lXUmtYRzRnSUNBZ1cySnZiMnhsWVc1ZE9pQmdkSEoxWldBZ2FXWWdiR0Y2ZVZ4dUtpOWNibU52Ym5OMElIVndaR0YwWlZKMWJtNXBibWREYjNWdWRDQTlJQ2hoWkdRc0lHbHpUR0Y2ZVNrZ1BUNGdlMXh1SUNBZ0lHTnZibk4wSUcxdlpHbG1lU0E5SUdGa1pDQS9JREVnT2lBdE1UdGNibHh1SUNBZ0lIUnZkR0ZzVW5WdWJtbHVaME52ZFc1MElDczlJRzF2WkdsbWVUdGNibHh1SUNBZ0lHbG1JQ2doYVhOTVlYcDVLU0I3WEc0Z0lDQWdJQ0FnSUc1dmJrSmhZMnRuY205MWJtUlNkVzV1YVc1blEyOTFiblFnS3owZ2JXOWthV1o1TzF4dUlDQWdJSDFjYm4wN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElIdGNiaUFnSUNCaFkzUnBkbVZVWVhOcmN5eGNibHh1SUNBZ0lDOHZJRUZqZEdsMllYUmxJR0VnZEdGemExeHVJQ0FnSUdGamRHbDJZWFJsT2lBb2FXUXNJSFJoYzJzcElEMCtJSHRjYmlBZ0lDQWdJQ0FnWVdOMGFYWmxWR0Z6YTNOYmFXUmRJRDBnZEdGemF6dGNiaUFnSUNBZ0lDQWdkR0Z6YXk1cGMwRmpkR2wyWlNBOUlIUnlkV1U3WEc0Z0lDQWdJQ0FnSUhWd1pHRjBaVkYxWlhWbGN5aHBaQ3dnWVdOMGFYWmhkR1ZSZFdWMVpTd2daR1ZoWTNScGRtRjBaVkYxWlhWbEtUdGNibHh1SUNBZ0lDQWdJQ0JwWmlBb2RHRnpheTV2YmtGamRHbDJZWFJsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwWVhOckxtOXVRV04wYVhaaGRHVW9kR0Z6YXlrN1hHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0JwWmlBb2RHRnpheTV2YmtGamRHbDJZWFJsVDI1alpTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHRnpheTV2YmtGamRHbDJZWFJsVDI1alpTaDBZWE5yS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgwc1hHNWNiaUFnSUNBdkx5QkVaV0ZqZEdsMllYUmxJR0VnZEdGemExeHVJQ0FnSUdSbFlXTjBhWFpoZEdVNklDaHBaQ2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCMFlYTnJJRDBnWVdOMGFYWmxWR0Z6YTNOYmFXUmRPMXh1WEc0Z0lDQWdJQ0FnSUdsbUlDaDBZWE5yS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IxY0dSaGRHVlJkV1YxWlhNb2FXUXNJR1JsWVdOMGFYWmhkR1ZSZFdWMVpTd2dZV04wYVhaaGRHVlJkV1YxWlNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwWVhOckxtbHpRV04wYVhabElEMGdabUZzYzJVN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaDBZWE5yTG05dVJHVmhZM1JwZG1GMFpTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJoYzJzdWIyNUVaV0ZqZEdsMllYUmxLSFJoYzJzcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlN4Y2JseHVJQ0FnSUM4dklFNTFiV0psY2lCaVlXTnJaM0p2ZFc1a0lIUmhjMnRsYzF4dUlDQWdJR2RsZEU1dmJrSmhZMnRuY205MWJtUlNkVzV1YVc1blEyOTFiblE2SUNncElEMCtJRzV2YmtKaFkydG5jbTkxYm1SU2RXNXVhVzVuUTI5MWJuUXNYRzVjYmlBZ0lDQXZMeUJKYm1OeVpXMWxiblFnWTNWeWNtVnVkQ0IwWVhOcklFbEVJR0Z1WkNCeVpYUjFjbTVjYmlBZ0lDQm5aWFJVWVhOclNXUTZJQ2dwSUQwK0lHTjFjbkpsYm5SVVlYTnJTV1FyS3l4Y2JseHVJQ0FnSUM4dklGSmxjMjlzZG1VZ1lXTjBhWFpoZEdVdlpHVmhZM1JwZG1GMFpTQjBZWE5yWlhNZ1lXNWtJSEpsZEhWeWJpQmhZM1JwZG1VZ2FXUnpYRzRnSUNBZ1oyVjBRV04wYVhabFNXUnpPaUFvS1NBOVBpQjdYRzRnSUNBZ0lDQWdJQzhxWEc0Z0lDQWdJQ0FnSUNBZ0lDQjBZWE5ySUdSbFlXTjBhWFpoZEdVZ2NYVmxkV1ZjYmlBZ0lDQWdJQ0FnS2k5Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnWkdWaFkzUnBkbUYwWlZGMVpYVmxUR1Z1WjNSb0lEMGdaR1ZoWTNScGRtRjBaVkYxWlhWbExteGxibWQwYUR0Y2JseHVJQ0FnSUNBZ0lDQm1iM0lnS0d4bGRDQnBJRDBnTURzZ2FTQThJR1JsWVdOMGFYWmhkR1ZSZFdWMVpVeGxibWQwYURzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCcFpDQTlJR1JsWVdOMGFYWmhkR1ZSZFdWMVpWdHBYVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUdGamRHbDJaVWxrU1c1a1pYZ2dQU0J5ZFc1dWFXNW5TV1J6TG1sdVpHVjRUMllvYVdRcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdkR0Z6YXlBOUlHRmpkR2wyWlZSaGMydHpXMmxrWFR0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1NXWWdkR2hwY3lCcGN5QmhJSEoxYm01cGJtY2dkR0Z6YXl3Z1pHVmhZM1JwZG1GMFpWeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHRmpkR2wyWlVsa1NXNWtaWGdnUGlBdE1Ta2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEoxYm01cGJtZEpaSE11YzNCc2FXTmxLR0ZqZEdsMlpVbGtTVzVrWlhnc0lERXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFZ3WkdGMFpWSjFibTVwYm1kRGIzVnVkQ2htWVd4elpTd2dkR0Z6YXk1cGMweGhlbmtwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdSbGJHVjBaU0JoWTNScGRtVlVZWE5yYzF0cFpGMDdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0F2S2x4dUlDQWdJQ0FnSUNBZ0lDQWdSVzF3ZEhrZ1pHVmhZM1JwZG1GMFpTQnhkV1YxWlM0Z1YyVWdkWE5sSUdCQmNuSmhlUzV6Y0d4cFkyVmdJR0psWTJGMWMyVWdhWFFnWkc5bGMyNG5kRnh1SUNBZ0lDQWdJQ0FnSUNBZ2QyOXlhM01nYjI0Z2RHaGxJRzl5YVdkcGJtRnNJR0Z5Y21GNUlITnZJSGRsSUdSdmJpZDBJR2hoZG1VZ2RHOGdaMkZ5WW1GblpTQmpiMnhzWldOMElHRnVlWFJvYVc1blhHNGdJQ0FnSUNBZ0lDb3ZYRzRnSUNBZ0lDQWdJR1JsWVdOMGFYWmhkR1ZSZFdWMVpTNXpjR3hwWTJVb01Dd2daR1ZoWTNScGRtRjBaVkYxWlhWbFRHVnVaM1JvS1R0Y2JseHVJQ0FnSUNBZ0lDQXZLbHh1SUNBZ0lDQWdJQ0FnSUNBZ2RHRnpheUJoWTNScGRtRjBaU0J4ZFdWMVpWeHVJQ0FnSUNBZ0lDQXFMMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQmhZM1JwZG1GMFpWRjFaWFZsVEdWdVozUm9JRDBnWVdOMGFYWmhkR1ZSZFdWMVpTNXNaVzVuZEdnN1hHNWNiaUFnSUNBZ0lDQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0JoWTNScGRtRjBaVkYxWlhWbFRHVnVaM1JvT3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUdsa0lEMGdZV04wYVhaaGRHVlJkV1YxWlZ0cFhUdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJR0ZqZEdsMlpVbGtTVzVrWlhnZ1BTQnlkVzV1YVc1blNXUnpMbWx1WkdWNFQyWW9hV1FwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2RHRnpheUE5SUdGamRHbDJaVlJoYzJ0elcybGtYVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnU1dZZ2RHRnpheUJwYzI0bmRDQmhiSEpsWVdSNUlISjFibTVwYm1jc0lHRmpkR2wyWVhSbFhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb1lXTjBhWFpsU1dSSmJtUmxlQ0E5UFQwZ0xURWdKaVlnZEdGemF5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMFlYTnJMbWx6VUhKcGIzSnBkSGtwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjblZ1Ym1sdVowbGtjeTUxYm5Ob2FXWjBLR2xrS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlkVzV1YVc1blNXUnpMbkIxYzJnb2FXUXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDaDBZWE5yTG05dVFXTjBhWFpoZEdWTWIyOXdLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUmhjMnN1YjI1QlkzUnBkbUYwWlV4dmIzQW9LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMWNHUmhkR1ZTZFc1dWFXNW5RMjkxYm5Rb2RISjFaU3dnZEdGemF5NXBjMHhoZW5rcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdZV04wYVhaaGRHVlJkV1YxWlM1emNHeHBZMlVvTUN3Z1lXTjBhWFpoZEdWUmRXVjFaVXhsYm1kMGFDazdYRzVjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSEoxYm01cGJtZEpaSE03WEc0Z0lDQWdmVnh1ZlR0Y2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy90YXNrL21hbmFnZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA1M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIiLCJmaWxlIjoicG9wbW90aW9uLmdsb2JhbC5qcyJ9