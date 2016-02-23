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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9sb2FkL2dsb2JhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBQVksU0FBUzs7OztBQUVyQixJQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDOztBQUU1QixTQUFTLENBQUMsVUFBVSxHQUFHLFlBQVk7QUFDL0IsVUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Q0FDekIsQ0FBQzs7QUFFRixNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDIiwiZmlsZSI6Imdsb2JhbC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dFBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHBvcG1vdGlvbiBmcm9tICcuLi9wb3Btb3Rpb24nO1xuXG5jb25zdCBVSXJlZiA9IHdpbmRvdy5tb3Rpb247XG5cbnBvcG1vdGlvbi5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgIHdpbmRvdy5tb3Rpb24gPSBVSXJlZjtcbn07XG5cbndpbmRvdy5tb3Rpb24gPSB3aW5kb3cucG9wbW90aW9uID0gcG9wbW90aW9uOyJdfQ==

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.transformers = exports.unitType = exports.shadowType = exports.scaleType = exports.rgbType = exports.pxType = exports.positionsType = exports.hslType = exports.hexType = exports.complexType = exports.colorType = exports.axesType = exports.angleType = exports.alphaType = exports.setGlobalDilation = exports.combineTransformers = exports.utils = exports.calc = exports.easing = exports.bindAdapter = exports.svgPathAdapter = exports.svgAdapter = exports.cssAdapter = exports.attrAdapter = exports.adapter = exports.timeline = exports.stagger = exports.process = exports.input = exports.track = exports.physics = exports.tween = exports.actor = exports.Action = undefined;
	
	var _utils2 = __webpack_require__(2);
	
	Object.defineProperty(exports, 'combineTransformers', {
	  enumerable: true,
	  get: function () {
	    return _utils2.combineTransformers;
	  }
	});
	
	var _timer = __webpack_require__(6);
	
	Object.defineProperty(exports, 'setGlobalDilation', {
	  enumerable: true,
	  get: function () {
	    return _timer.setGlobalDilation;
	  }
	});
	
	var _Action2 = __webpack_require__(3);
	
	var _Action3 = _interopRequireDefault(_Action2);
	
	var _Actor = __webpack_require__(4);
	
	var _Actor2 = _interopRequireDefault(_Actor);
	
	var _Tween = __webpack_require__(5);
	
	var _Tween2 = _interopRequireDefault(_Tween);
	
	var _Physics = __webpack_require__(7);
	
	var _Physics2 = _interopRequireDefault(_Physics);
	
	var _Track = __webpack_require__(8);
	
	var _Track2 = _interopRequireDefault(_Track);
	
	var _Process = __webpack_require__(9);
	
	var _Process2 = _interopRequireDefault(_Process);
	
	var _Input = __webpack_require__(10);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _stagger2 = __webpack_require__(11);
	
	var _stagger3 = _interopRequireDefault(_stagger2);
	
	var _timeline2 = __webpack_require__(12);
	
	var _timeline3 = _interopRequireDefault(_timeline2);
	
	var _adapter2 = __webpack_require__(13);
	
	var _adapter3 = _interopRequireDefault(_adapter2);
	
	var _attrAdapter2 = __webpack_require__(14);
	
	var _attrAdapter3 = _interopRequireDefault(_attrAdapter2);
	
	var _cssAdapter2 = __webpack_require__(15);
	
	var _cssAdapter3 = _interopRequireDefault(_cssAdapter2);
	
	var _svgAdapter2 = __webpack_require__(16);
	
	var _svgAdapter3 = _interopRequireDefault(_svgAdapter2);
	
	var _svgPathAdapter2 = __webpack_require__(17);
	
	var _svgPathAdapter3 = _interopRequireDefault(_svgPathAdapter2);
	
	var _bindAdapter2 = __webpack_require__(18);
	
	var _bindAdapter3 = _interopRequireDefault(_bindAdapter2);
	
	var _presetEasing = __webpack_require__(19);
	
	var _presetEasing2 = _interopRequireDefault(_presetEasing);
	
	var _calc2 = __webpack_require__(20);
	
	var _calc = _interopRequireWildcard(_calc2);
	
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
	
	exports.Action = _Action3.default; // Actions
	
	// Process
	
	// Input
	
	var actor = exports.actor = function (props) {
	  return new _Actor2.default(props);
	};
	var tween = exports.tween = function (props) {
	  return new _Tween2.default(props);
	};
	var physics = exports.physics = function (props) {
	  return new _Physics2.default(props);
	};
	var track = exports.track = function () {
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }
	
	  return new (Function.prototype.bind.apply(_Track2.default, [null].concat(args)))();
	};
	var input = exports.input = function () {
	  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	    args[_key2] = arguments[_key2];
	  }
	
	  return new (Function.prototype.bind.apply(_Input2.default, [null].concat(args)))();
	};
	var process = exports.process = function () {
	  for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	    args[_key3] = arguments[_key3];
	  }
	
	  return new (Function.prototype.bind.apply(_Process2.default, [null].concat(args)))();
	};
	exports.stagger = _stagger3.default;
	exports.timeline = _timeline3.default;
	
	// Adapters
	
	exports.adapter = _adapter3.default;
	exports.attrAdapter = _attrAdapter3.default;
	exports.cssAdapter = _cssAdapter3.default;
	exports.svgAdapter = _svgAdapter3.default;
	exports.svgPathAdapter = _svgPathAdapter3.default;
	exports.bindAdapter = _bindAdapter3.default;
	
	// Easing
	
	exports.easing = _presetEasing2.default;
	
	// Utils
	
	exports.calc = _calc;
	exports.utils = _utils;
	
	// Value types
	
	exports.alphaType = _alpha2.default;
	exports.angleType = _angle2.default;
	exports.axesType = _axes2.default;
	exports.colorType = _color2.default;
	exports.complexType = _complex2.default;
	exports.hexType = _hex2.default;
	exports.hslType = _hsl2.default;
	exports.positionsType = _positions2.default;
	exports.pxType = _px2.default;
	exports.rgbType = _rgb2.default;
	exports.scaleType = _scale2.default;
	exports.shadowType = _shadow2.default;
	exports.unitType = _unit2.default;
	
	// Transformers
	
	exports.transformers = _transformers;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wb3Btb3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OzttQkFtQ3FCLG1CQUFtQjs7Ozs7Ozs7O2tCQUMvQixpQkFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBbkNuQixNQUFNOzs7Ozs7QUFZTixJQUFNLEtBQUssV0FBTCxLQUFLLEdBQUcsVUFBQyxLQUFLO1NBQUssb0JBQVUsS0FBSyxDQUFDO0NBQUEsQ0FBQztBQUMxQyxJQUFNLEtBQUssV0FBTCxLQUFLLEdBQUcsVUFBQyxLQUFLO1NBQUssb0JBQVUsS0FBSyxDQUFDO0NBQUEsQ0FBQztBQUMxQyxJQUFNLE9BQU8sV0FBUCxPQUFPLEdBQUcsVUFBQyxLQUFLO1NBQUssc0JBQVksS0FBSyxDQUFDO0NBQUEsQ0FBQztBQUM5QyxJQUFNLEtBQUssV0FBTCxLQUFLLEdBQUc7b0NBQUksSUFBSTtBQUFKLFFBQUk7OzsyRUFBa0IsSUFBSTtDQUFDLENBQUM7QUFDOUMsSUFBTSxLQUFLLFdBQUwsS0FBSyxHQUFHO3FDQUFJLElBQUk7QUFBSixRQUFJOzs7MkVBQWtCLElBQUk7Q0FBQyxDQUFDO0FBQzlDLElBQU0sT0FBTyxXQUFQLE9BQU8sR0FBRztxQ0FBSSxJQUFJO0FBQUosUUFBSTs7OzZFQUFvQixJQUFJO0NBQUMsQ0FBQztRQUNsRCxPQUFPO1FBQ1AsUUFBUTs7OztRQUdSLE9BQU87UUFDUCxXQUFXO1FBQ1gsVUFBVTtRQUNWLFVBQVU7UUFDVixjQUFjO1FBQ2QsV0FBVzs7OztRQUdYLE1BQU07Ozs7UUFHRCxJQUFJO1FBQ0osS0FBSzs7OztRQUlWLFNBQVM7UUFDVCxTQUFTO1FBQ1QsUUFBUTtRQUNSLFNBQVM7UUFDVCxXQUFXO1FBQ1gsT0FBTztRQUNQLE9BQU87UUFDUCxhQUFhO1FBQ2IsTUFBTTtRQUNOLE9BQU87UUFDUCxTQUFTO1FBQ1QsVUFBVTtRQUNWLFFBQVE7Ozs7UUFHSCxZQUFZIiwiZmlsZSI6InBvcG1vdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dFBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbIi8vIEFjdGlvbnNcbmV4cG9ydCBBY3Rpb24gZnJvbSAnLi9hY3Rpb25zL0FjdGlvbic7XG5pbXBvcnQgQWN0b3IgZnJvbSAnLi9hY3Rvci9BY3Rvcic7XG5pbXBvcnQgVHdlZW4gZnJvbSAnLi9hY3Rpb25zL1R3ZWVuJztcbmltcG9ydCBQaHlzaWNzIGZyb20gJy4vYWN0aW9ucy9QaHlzaWNzJztcbmltcG9ydCBUcmFjayBmcm9tICcuL2FjdGlvbnMvVHJhY2snO1xuXG4vLyBQcm9jZXNzXG5pbXBvcnQgUHJvY2VzcyBmcm9tICcuL3Byb2Nlc3MvUHJvY2Vzcyc7XG5cbi8vIElucHV0XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9pbnB1dC9JbnB1dCc7XG5cbmV4cG9ydCBjb25zdCBhY3RvciA9IChwcm9wcykgPT4gbmV3IEFjdG9yKHByb3BzKTtcbmV4cG9ydCBjb25zdCB0d2VlbiA9IChwcm9wcykgPT4gbmV3IFR3ZWVuKHByb3BzKTtcbmV4cG9ydCBjb25zdCBwaHlzaWNzID0gKHByb3BzKSA9PiBuZXcgUGh5c2ljcyhwcm9wcyk7XG5leHBvcnQgY29uc3QgdHJhY2sgPSAoLi4uYXJncykgPT4gbmV3IFRyYWNrKC4uLmFyZ3MpO1xuZXhwb3J0IGNvbnN0IGlucHV0ID0gKC4uLmFyZ3MpID0+IG5ldyBJbnB1dCguLi5hcmdzKTtcbmV4cG9ydCBjb25zdCBwcm9jZXNzID0gKC4uLmFyZ3MpID0+IG5ldyBQcm9jZXNzKC4uLmFyZ3MpO1xuZXhwb3J0IHN0YWdnZXIgZnJvbSAnLi9pbmMvc3RhZ2dlcic7XG5leHBvcnQgdGltZWxpbmUgZnJvbSAnLi9pbmMvdGltZWxpbmUnO1xuXG4vLyBBZGFwdGVyc1xuZXhwb3J0IGFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyL2FkYXB0ZXInO1xuZXhwb3J0IGF0dHJBZGFwdGVyIGZyb20gJy4vYWRhcHRlci9hdHRyLWFkYXB0ZXInO1xuZXhwb3J0IGNzc0FkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyL2Nzcy1hZGFwdGVyJztcbmV4cG9ydCBzdmdBZGFwdGVyIGZyb20gJy4vYWRhcHRlci9zdmctYWRhcHRlcic7XG5leHBvcnQgc3ZnUGF0aEFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyL3N2Zy1wYXRoLWFkYXB0ZXInO1xuZXhwb3J0IGJpbmRBZGFwdGVyIGZyb20gJy4vaW5jL2JpbmQtYWRhcHRlcic7XG5cbi8vIEVhc2luZ1xuZXhwb3J0IGVhc2luZyBmcm9tICcuL2FjdGlvbnMvZWFzaW5nL3ByZXNldC1lYXNpbmcnO1xuXG4vLyBVdGlsc1xuZXhwb3J0ICogYXMgY2FsYyBmcm9tICcuL2luYy9jYWxjJztcbmV4cG9ydCAqIGFzIHV0aWxzLCB7IGNvbWJpbmVUcmFuc2Zvcm1lcnMgfSBmcm9tICcuL2luYy91dGlscyc7XG5leHBvcnQgeyBzZXRHbG9iYWxEaWxhdGlvbiB9IGZyb20gJy4vcHJvY2Vzcy90aW1lcic7XG5cbi8vIFZhbHVlIHR5cGVzXG5leHBvcnQgYWxwaGFUeXBlIGZyb20gJy4vdmFsdWUtdHlwZXMvYWxwaGEnO1xuZXhwb3J0IGFuZ2xlVHlwZSBmcm9tICcuL3ZhbHVlLXR5cGVzL2FuZ2xlJztcbmV4cG9ydCBheGVzVHlwZSBmcm9tICcuL3ZhbHVlLXR5cGVzL2F4ZXMnO1xuZXhwb3J0IGNvbG9yVHlwZSBmcm9tICcuL3ZhbHVlLXR5cGVzL2NvbG9yJztcbmV4cG9ydCBjb21wbGV4VHlwZSBmcm9tICcuL3ZhbHVlLXR5cGVzL2NvbXBsZXgnO1xuZXhwb3J0IGhleFR5cGUgZnJvbSAnLi92YWx1ZS10eXBlcy9oZXgnO1xuZXhwb3J0IGhzbFR5cGUgZnJvbSAnLi92YWx1ZS10eXBlcy9oc2wnO1xuZXhwb3J0IHBvc2l0aW9uc1R5cGUgZnJvbSAnLi92YWx1ZS10eXBlcy9wb3NpdGlvbnMnO1xuZXhwb3J0IHB4VHlwZSBmcm9tICcuL3ZhbHVlLXR5cGVzL3B4JztcbmV4cG9ydCByZ2JUeXBlIGZyb20gJy4vdmFsdWUtdHlwZXMvcmdiJztcbmV4cG9ydCBzY2FsZVR5cGUgZnJvbSAnLi92YWx1ZS10eXBlcy9zY2FsZSc7XG5leHBvcnQgc2hhZG93VHlwZSBmcm9tICcuL3ZhbHVlLXR5cGVzL3NoYWRvdyc7XG5leHBvcnQgdW5pdFR5cGUgZnJvbSAnLi92YWx1ZS10eXBlcy91bml0JztcblxuLy8gVHJhbnNmb3JtZXJzXG5leHBvcnQgKiBhcyB0cmFuc2Zvcm1lcnMgZnJvbSAnLi9pbmMvdHJhbnNmb3JtZXJzJzsiXX0=

/***/ },
/* 2 */
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
	    Combine transformers into one function that calls every
	    transformer in the array and returns the result
	
	    @param [array]
	    @return [function]
	*/
	var combineTransformers = exports.combineTransformers = function (transformers) {
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
	//# sourceMappingURL=data:application/json;base64,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QU0sbUJBQW1CLFdBQW5CLG1CQUFtQixHQUFHLFVBQUMsS0FBSztXQUFLLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO0NBQUE7Ozs7Ozs7Ozs7QUFBQyxBQVV2RixJQUFNLG1CQUFtQixXQUFuQixtQkFBbUIsR0FBRyxVQUFDLEtBQUs7V0FBSyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztDQUFBOzs7Ozs7Ozs7QUFBQyxBQVNwRixJQUFNLFNBQVMsV0FBVCxTQUFTLEdBQUcsVUFBQyxHQUFHLEVBQW9CO1FBQWxCLFNBQVMseURBQUcsQ0FBQzs7QUFDeEMsYUFBUyxZQUFHLEVBQUUsRUFBSSxTQUFTLENBQUEsQ0FBQztBQUM1QixXQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxHQUFHLFNBQVMsQ0FBQztDQUNsRCxDQUFDIiwiZmlsZSI6InV0aWxzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0UGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQ0FNRUxfQ0FTRV9QQVRURVJOID0gLyhbYS16XSkoW0EtWl0pL2c7XG5jb25zdCBSRVBMQUNFX1RFTVBMQVRFID0gJyQxLSQyJztcbmNvbnN0IEhBU19QRVJGT1JNQU5DRV9OT1cgPSAodHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJyAmJiBwZXJmb3JtYW5jZS5ub3cpO1xuXG4vKlxuICAgIEdldCB2YXIgdHlwZSBhcyBzdHJpbmdcbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtzdHJpbmddOiBSZXR1cm5zLCBmb3IgaW5zdGFuY2UgJ09iamVjdCcgaWYgW29iamVjdCBPYmplY3RdXG4qL1xuY29uc3QgdmFyVHlwZSA9IHZhcmlhYmxlID0+IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YXJpYWJsZSkuc2xpY2UoOCwgLTEpO1xuXG4vKlxuICAgIENvbnZlcnQgY2FtZWxDYXNlIHRvIGRhc2gtY2FzZVxuXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHJldHVybiBbc3RyaW5nXVxuKi9cbmV4cG9ydCBjb25zdCBjYW1lbFRvRGFzaCA9IChzdHJpbmcpID0+IHN0cmluZy5yZXBsYWNlKENBTUVMX0NBU0VfUEFUVEVSTiwgUkVQTEFDRV9URU1QTEFURSkudG9Mb3dlckNhc2UoKTtcblxuLypcbiAgICBDb21iaW5lIHRyYW5zZm9ybWVycyBpbnRvIG9uZSBmdW5jdGlvbiB0aGF0IGNhbGxzIGV2ZXJ5XG4gICAgdHJhbnNmb3JtZXIgaW4gdGhlIGFycmF5IGFuZCByZXR1cm5zIHRoZSByZXN1bHRcblxuICAgIEBwYXJhbSBbYXJyYXldXG4gICAgQHJldHVybiBbZnVuY3Rpb25dXG4qL1xuZXhwb3J0IGNvbnN0IGNvbWJpbmVUcmFuc2Zvcm1lcnMgPSAodHJhbnNmb3JtZXJzKSA9PiB7XG4gICAgY29uc3QgbnVtVHJhbnNmb3JtZXJzID0gdHJhbnNmb3JtZXJzLmxlbmd0aDtcbiAgICBsZXQgaSA9IDA7XG5cbiAgICAvKlxuICAgICAgICBAcGFyYW0gW251bWJlcl1cbiAgICAgICAgQHBhcmFtIFtzdHJpbmddXG4gICAgICAgIEBwYXJhbSBbQWN0aW9uXVxuICAgICAgICBAcmV0dXJuIFtudW1iZXJdXG4gICAgKi9cbiAgICByZXR1cm4gKHYsIGtleSwgYSkgPT4ge1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbnVtVHJhbnNmb3JtZXJzOyBpKyspIHtcbiAgICAgICAgICAgIHYgPSB0cmFuc2Zvcm1lcnNbaV0odiwga2V5LCBhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2O1xuICAgIH07XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlRGVsaW1pdGVkID0gKHZhbHVlcywgdGVybXMsIGRlbGltaXRlciwgY2hvcCkgPT4ge1xuICAgIGNvbnN0IG51bVRlcm1zID0gdGVybXMubGVuZ3RoO1xuICAgIGxldCBjb21iaW5lZCA9ICcnO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1UZXJtczsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHRlcm0gPSB0ZXJtc1tpXTtcbiAgICAgICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eSh0ZXJtKSkge1xuICAgICAgICAgICAgY29tYmluZWQgKz0gdmFsdWVzW3Rlcm1dICsgZGVsaW1pdGVyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNob3ApIHtcbiAgICAgICAgY29tYmluZWQgPSBjb21iaW5lZC5zbGljZSgwLCAtY2hvcCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbWJpbmVkO1xufTtcblxuLypcbiAgICBDcmVhdGUgYSBmdW5jdGlvbiBzdHJpbmdcblxuICAgICcyMHB4JywgJ3RyYW5zbGF0ZScgLT4gJ3RyYW5zbGF0ZSgyMHB4KSdcblxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEByZXR1cm4gW3N0cmluZ11cbiovXG5leHBvcnQgY29uc3QgY3JlYXRlRnVuY3Rpb25TdHJpbmcgPSAodmFsdWUsIHByZWZpeCkgPT4gYCR7cHJlZml4fSgke3ZhbHVlfSlgO1xuXG4vKlxuICAgIEdlbmVyYXRlIGN1cnJlbnQgdGltZXN0YW1wXG4gICAgXG4gICAgQHJldHVybiBbdGltZXN0YW1wXTogQ3VycmVudCBVTklYIHRpbWVzdGFtcFxuKi9cbmV4cG9ydCBjb25zdCBjdXJyZW50VGltZSA9IEhBU19QRVJGT1JNQU5DRV9OT1cgPyAoKSA9PiBwZXJmb3JtYW5jZS5ub3coKSA6ICgpID0+IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4vKlxuICAgIFNwbGl0IGNvbG9yIHN0cmluZyBpbnRvIG1hcCBvZiBjb2xvciBwcm9wZXJ0aWVzXG5cbiAgICBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMClcIiwgW1wiUmVkXCIsICdHcmVlblwiLCBcIkJsdWVcIiwgXCJBbHBoYVwiXVxuXG4gICAgeyBSZWQ6IDI1NS4uLiB9XG4qL1xuZXhwb3J0IGNvbnN0IGdldENvbG9yVmFsdWVzID0gKHZhbHVlLCBjb2xvclRlcm1zKSA9PiB7XG4gICAgY29uc3QgbnVtQ29sb3JUZXJtcyA9IGNvbG9yVGVybXMubGVuZ3RoO1xuICAgIGNvbnN0IGNvbG9yVmFsdWVzID0ge307XG4gICAgY29uc3QgY29sb3JzID0gc3BsaXRDb21tYURlbGltaXRlZChnZXRWYWx1ZUZyb21GdW5jdGlvblN0cmluZyh2YWx1ZSkpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1Db2xvclRlcm1zOyBpKyspIHtcbiAgICAgICAgY29sb3JWYWx1ZXNbY29sb3JUZXJtc1tpXV0gPSAoY29sb3JzW2ldICE9PSB1bmRlZmluZWQpID8gY29sb3JzW2ldIDogMTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29sb3JWYWx1ZXM7XG59O1xuXG4vKlxuICAgIEdldCB2YWx1ZSBmcm9tIGZ1bmN0aW9uIHN0cmluZ1xuXG4gICAgXCJ0cmFuc2xhdGVYKDIwcHgpXCIgLT4gXCIyMHB4XCJcbiovXG5leHBvcnQgY29uc3QgZ2V0VmFsdWVGcm9tRnVuY3Rpb25TdHJpbmcgPSAodmFsdWUpID0+IHZhbHVlLnN1YnN0cmluZyh2YWx1ZS5pbmRleE9mKCcoJykgKyAxLCB2YWx1ZS5sYXN0SW5kZXhPZignKScpKTtcblxuLypcbiAgICBDaGVjayBpZiB0d28gb2JqZWN0cyBoYXZlIGNoYW5nZWQgZnJvbSBlYWNoIG90aGVyXG4gICAgXG4gICAgQHBhcmFtIFtvYmplY3RdOiBJbnB1dCBBXG4gICAgQHBhcmFtIFtvYmplY3RdOiBJbnB1dCBCXG4gICAgQHJldHVybiBbYm9vbGVhbl06IFRydWUgaWYgZGlmZmVyZW50XG4qL1xuZXhwb3J0IGNvbnN0IGhhc0NoYW5nZWQgPSAoYSwgYikgPT4ge1xuICAgIGxldCBjaGFuZ2VkID0gZmFsc2U7XG5cbiAgICBmb3IgKGxldCBrZXkgaW4gYSkge1xuICAgICAgICBpZiAoYS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICBpZiAoaGFzUHJvcGVydHkoYiwga2V5KSkge1xuICAgICAgICAgICAgICAgIGlmIChhW2tleV0gIT09IGJba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoYW5nZWQ7XG59O1xuXG4vKlxuICAgIENoZWNrIGlmIG9iamVjdCBoYXMgcHJvcGVydHkgYW5kIGl0IGlzbid0IHVuZGVmaW5lZFxuXG4gICAgQHBhcmFtIFtvYmplY3RdXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHJldHVybiBbYm9vbGVhbl1cbiovXG5leHBvcnQgY29uc3QgaGFzUHJvcGVydHkgPSAob2JqZWN0LCBwcm9wZXJ0eU5hbWUpID0+IG9iamVjdC5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eU5hbWUpICYmIG9iamVjdFtwcm9wZXJ0eU5hbWVdICE9PSB1bmRlZmluZWQ7XG5cbi8qXG4gICAgSXMgdXRpbHMgdmFyIGFuIGFycmF5ID8gXG4gICAgXG4gICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB1dGlscy52YXJUeXBlID09PSAnQXJyYXknXG4qL1xuZXhwb3J0IGNvbnN0IGlzQXJyYXkgPSAoYXJyKSA9PiB2YXJUeXBlKGFycikgPT09ICdBcnJheSc7XG5cbi8qXG4gICAgSXMgdXRpbHMgdmFyIGEgZnVuY3Rpb24gPyBcbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHV0aWxzLnZhclR5cGUgPT09ICdGdW5jdGlvbidcbiovXG5leHBvcnQgY29uc3QgaXNGdW5jID0gKG9iaikgPT4gdmFyVHlwZShvYmopID09PSAnRnVuY3Rpb24nO1xuXG4vKlxuICAgIElzIHV0aWxzIHZhciBhIG51bWJlcj9cbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiA9PT0gJ251bWJlcidcbiovXG5leHBvcnQgY29uc3QgaXNOdW0gPSAobnVtKSA9PiB0eXBlb2YgbnVtID09PSAnbnVtYmVyJztcblxuLypcbiAgICBJcyB1dGlscyB2YXIgYW4gb2JqZWN0P1xuICAgIFxuICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mID09PSAnb2JqZWN0J1xuKi9cbmV4cG9ydCBjb25zdCBpc09iaiA9IChvYmopID0+IHR5cGVvZiBvYmogPT09ICdvYmplY3QnO1xuXG4vKlxuICAgIElzIHV0aWxzIGEgcmVsYXRpdmUgdmFsdWUgYXNzaWdubWVudD9cbiAgICBcbiAgICBAcGFyYW0gW3N0cmluZ106IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogSWYgdXRpbHMgbG9va3MgbGlrZSBhIHJlbGF0aXZlIHZhbHVlIGFzc2lnbm1lbnRcbiovXG5leHBvcnQgY29uc3QgaXNSZWxhdGl2ZVZhbHVlID0gKHZhbHVlKSA9PiAodmFsdWUgJiYgdmFsdWUuaW5kZXhPZiAmJiB2YWx1ZS5pbmRleE9mKCc9JykgPiAwKSA/IHRydWUgOiBmYWxzZTtcblxuLypcbiAgICBJcyB1dGlscyB2YXIgYSBzdHJpbmcgPyBcbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnXG4qL1xuZXhwb3J0IGNvbnN0IGlzU3RyaW5nID0gKHN0cikgPT4gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZyc7XG5cbi8qXG4gICAgQHBhcmFtIFtzdHJpbmcgfHwgTm9kZUxpc3RdOlxuICAgICAgICBJZiBzdHJpbmcsIHRyZWF0ZWQgYXMgc2VsZWN0b3IuXG4gICAgICAgIElmIG5vdCwgdHJlYXRlZCBhcyBwcmVleGlzdGluZyBOb2RlTGlzdFxuXG4gICAgQHJldHVybiBbQXJyYXldXG4qL1xuZXhwb3J0IGNvbnN0IHNlbGVjdERvbSA9IChzZWxlY3RvcikgPT4ge1xuICAgIGNvbnN0IG5vZGVzID0gKHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycpID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikgOiBzZWxlY3RvcjtcbiAgICByZXR1cm4gKG5vZGVzLmxlbmd0aCkgPyBbXS5zbGljZS5jYWxsKG5vZGVzKSA6IFtdLnB1c2gobm9kZXMpO1xufTtcblxuLypcbiAgICBTcGxpdCBjb21tYS1kZWxpbWl0ZWQgc3RyaW5nXG5cbiAgICBcImZvbyxiYXJcIiAtPiBbXCJmb29cIiwgXCJiYXJcIl1cblxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEByZXR1cm4gW2FycmF5XVxuKi9cbmV4cG9ydCBjb25zdCBzcGxpdENvbW1hRGVsaW1pdGVkID0gKHZhbHVlKSA9PiBpc1N0cmluZyh2YWx1ZSkgPyB2YWx1ZS5zcGxpdCgvLFxccyovKSA6IFt2YWx1ZV07XG5cbi8qXG4gICAgU3BsaXQgc3BhY2UtZGVsaW1pdGVkIHN0cmluZ1xuXG4gICAgXCJmb28gYmFyXCIgLT4gW1wiZm9vXCIsIFwiYmFyXCJdXG5cbiAgICBAcGFyYW0gW3N0cmluZ11cbiAgICBAcmV0dXJuIFthcnJheV1cbiovXG5leHBvcnQgY29uc3Qgc3BsaXRTcGFjZURlbGltaXRlZCA9ICh2YWx1ZSkgPT4gaXNTdHJpbmcodmFsdWUpID8gdmFsdWUuc3BsaXQoJyAnKSA6IFt2YWx1ZV07XG5cbi8qXG4gICAgQ29udmVydCBudW1iZXIgdG8geCBkZWNpbWFsIHBsYWNlc1xuXG4gICAgQHBhcmFtIFtudW1iZXJdXG4gICAgQHBhcmFtIFtudW1iZXJdXG4gICAgQHJldHVybiBbbnVtYmVyXVxuKi9cbmV4cG9ydCBjb25zdCB0b0RlY2ltYWwgPSAobnVtLCBwcmVjaXNpb24gPSAyKSA9PiB7XG4gICAgcHJlY2lzaW9uID0gMTAgKiogcHJlY2lzaW9uO1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG51bSAqIHByZWNpc2lvbikgLyBwcmVjaXNpb247XG59O1xuIl19

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _Process2 = __webpack_require__(9);
	
	var _Process3 = _interopRequireDefault(_Process2);
	
	var _calc = __webpack_require__(20);
	
	var _utils = __webpack_require__(2);
	
	var _bindAdapter = __webpack_require__(18);
	
	var _bindAdapter2 = _interopRequireDefault(_bindAdapter);
	
	var _color = __webpack_require__(24);
	
	var _color2 = _interopRequireDefault(_color);
	
	var _complex = __webpack_require__(25);
	
	var _complex2 = _interopRequireDefault(_complex);
	
	var _unit = __webpack_require__(33);
	
	var _unit2 = _interopRequireDefault(_unit);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var DEFAULT_PROP = 'current';
	var NUMERICAL_VALUES = [DEFAULT_PROP, 'from', 'to', 'prev', 'velocity'];
	var NUM_NUMERICAL_VALUES = NUMERICAL_VALUES.length;
	
	var Action = (function (_Process) {
	    _inherits(Action, _Process);
	
	    function Action(props) {
	        _classCallCheck(this, Action);
	
	        props.state = {};
	        props.valueKeys = [];
	        props.parentKeys = [];
	        return _possibleConstructorReturn(this, _Process.call(this, props));
	    }
	
	    /*
	        # Set Action properties
	        ## Set user-defined Action properties
	         @param [object]
	        @return [Action]
	    */
	
	    Action.prototype.set = function set() {
	        var props = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	        var values = props.values;
	        var on = props.on;
	
	        var propsToSet = _objectWithoutProperties(props, ['values', 'on']);
	
	        var currentValues = this.values = this.values || {};
	        var defaultValue = this.getDefaultValue();
	        var inheritable = {};
	
	        // 1) Set non-consumed properties
	        _Process.prototype.set.call(this, propsToSet);
	
	        // 2) Bind `on` to an adapter, if not already
	        if (on) {
	            // Ducktypish check for Adapter
	            this.on = !on.setter ? (0, _bindAdapter2.default)(on) : on;
	        }
	
	        // 3) Prime an object to inherit from, with only `value` properties
	        for (var key in defaultValue) {
	            if (defaultValue.hasOwnProperty(key) && propsToSet.hasOwnProperty(key)) {
	                inheritable[key] = propsToSet[key];
	            }
	        }
	
	        // 4) Update existing values with inheritable properties
	        for (var key in currentValues) {
	            // Exclude variables to be set, as we'll deal with those seperately
	            if (currentValues.hasOwnProperty(key)) {
	                currentValues[key] = _extends({}, currentValues[key], inheritable);
	            }
	        }
	
	        // 5) Update
	        if (values) {
	            this.setValues(values, inheritable);
	        }
	
	        return this;
	    };
	
	    Action.prototype.get = function get(key) {
	        return this.state[key];
	    };
	
	    Action.prototype.setValues = function setValues(values, inheritFrom) {
	        var currentValues = this.values;
	        var defaultValue = this.getDefaultValue();
	        var defaultValueProp = this.getDefaultValueProp();
	
	        // 2) Loop over every incoming `value` and set
	        for (var key in values) {
	            if (values.hasOwnProperty(key)) {
	                var value = {};
	                var children = {};
	                var hasChildren = false;
	                var base = currentValues[key] ? currentValues[key] : defaultValue;
	
	                // If values os an object, use it directly
	                if ((0, _utils.isObj)(values[key])) {
	                    value = values[key];
	
	                    // OR set to a the default value property of a blank object
	                } else {
	                        value[defaultValueProp] = values[key];
	                    }
	
	                var newValue = _extends({}, base, inheritFrom, value);
	
	                // Get current value if none is defined
	                if (newValue.current === undefined) {
	                    // If we have a `from` value set, take that
	                    if (newValue.from !== undefined) {
	                        newValue.current = newValue.from;
	
	                        // Or if we have an Adapter, get it from that
	                    } else if (this.on && this.on.get) {
	                            newValue.current = this.on.get(key);
	                        }
	
	                    // If it's still undefined make it equal 0??
	                    if (newValue.current === undefined) {
	                        newValue.current = 0;
	                    }
	                }
	
	                if (newValue.from === undefined) {
	                    newValue.from = newValue.current;
	                }
	
	                // If our Adapter has a `getValueType` function, try to get a `type` with the value key
	                if (!newValue.type && this.on && this.on.getValueType) {
	                    newValue.type = this.on.getValueType(key);
	                }
	
	                // c) Loop through all numerical property types
	                for (var i = 0; i < NUM_NUMERICAL_VALUES; i++) {
	                    var propName = NUMERICAL_VALUES[i];
	                    var valueProp = newValue[propName];
	
	                    // If we have this kind of property, process
	                    if (valueProp !== undefined) {
	                        // If we don't have a type set to this value, find one (unless it's a raw number)
	                        if (!newValue.type && (0, _utils.isString)(valueProp)) {
	                            if (_unit2.default.test(valueProp)) {
	                                newValue.type = _unit2.default;
	                            } else if (_color2.default.test(valueProp)) {
	                                newValue.type = _color2.default;
	                            } else if (_complex2.default.test(valueProp)) {
	                                newValue.type = _complex2.default;
	                            }
	                        }
	
	                        if (newValue.type) {
	                            // If we're going to split this value into child values
	                            if (newValue.type.hasOwnProperty('split') && (0, _utils.isString)(valueProp)) {
	                                var splitProp = newValue.type.split(valueProp);
	
	                                for (var splitKey in splitProp) {
	                                    if (splitProp.hasOwnProperty(splitKey)) {
	                                        var combinedKey = key + splitKey;
	
	                                        if (!children[combinedKey]) {
	                                            var _defaultValue = newValue.type.defaultProps && newValue.type.defaultProps[splitKey] ? newValue.type.defaultProps[splitKey] : {};
	                                            children[combinedKey] = _extends({}, newValue, _defaultValue, {
	                                                parent: key,
	                                                childKey: splitKey,
	                                                type: undefined
	                                            });
	                                        }
	
	                                        children[combinedKey][propName] = splitProp[splitKey];
	                                    }
	                                }
	
	                                // If this has a `template` function, generate
	                                if (!newValue.template && newValue.type.template) {
	                                    newValue.template = newValue.type.template(newValue[propName]);
	                                }
	
	                                hasChildren = true;
	                            } else if (newValue.type.defaultProps) {
	                                newValue = _extends({}, newValue, newValue.type.defaultProps);
	                            }
	
	                            if (newValue.type.parse) {
	                                newValue[propName] = newValue.type.parse(newValue[propName], newValue);
	                            }
	                        }
	                    }
	                } // End numerical property iteration
	
	                // Set `prev` to `current` if it isn't already defined
	                if (newValue.prev === undefined) {
	                    newValue.prev = newValue.current;
	                }
	
	                currentValues[key] = newValue;
	
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
	            }
	        } // End value iteration
	
	        // 3) Precompute value key and parent key length to prevent per-frame measurement
	        this.numValueKeys = this.valueKeys.length;
	        this.numParentKeys = this.parentKeys.length;
	
	        return this;
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
	
	    Action.prototype.onRender = function onRender(_ref) {
	        var state = _ref.state;
	        var on = _ref.on;
	
	        if (on && on.set) {
	            on.set(state);
	        }
	    };
	
	    Action.prototype.pause = function pause() {
	        _Process.prototype.stop.call(this);
	        return this;
	    };
	
	    Action.prototype.resume = function resume() {
	        _Process.prototype.start.call(this);
	        return this;
	    };
	
	    Action.prototype.start = function start() {
	        var values = this.values;
	        _Process.prototype.start.call(this);
	
	        for (var key in values) {
	            if (values.hasOwnProperty(key)) {
	                values[key].prev = values[key].origin = values[key].current;
	            }
	        }
	    };
	
	    /*
	        # Get default Action value properties
	         @return [object]
	    */
	
	    Action.prototype.getDefaultValue = function getDefaultValue() {
	        return {
	            velocity: 0,
	            round: false
	        };
	    };
	
	    /*
	        # Get default Action value property name
	        ## Set this `value` property when set as value instead of object
	         @return [string]
	    */
	
	    Action.prototype.getDefaultValueProp = function getDefaultValueProp() {
	        return DEFAULT_PROP;
	    };
	
	    return Action;
	})(_Process3.default);
	
	exports.default = Action;
	//# sourceMappingURL=data:application/json;base64,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QUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQzthQUMvRDtTQUNKO0tBQ0o7Ozs7Ozs7QUF4VGdCLFVBQU0sV0ErVHZCLGVBQWUsOEJBQUc7QUFDZCxlQUFPO0FBQ0gsb0JBQVEsRUFBRSxDQUFDO0FBQ1gsaUJBQUssRUFBRSxLQUFLO1NBQ2YsQ0FBQztLQUNMOzs7Ozs7OztBQXBVZ0IsVUFBTSxXQTRVdkIsbUJBQW1CLGtDQUFHO0FBQ2xCLGVBQU8sWUFBWSxDQUFDO0tBQ3ZCOztXQTlVZ0IsTUFBTTs7O2tCQUFOLE1BQU0iLCJmaWxlIjoiQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0UGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2Nlc3MgZnJvbSAnLi4vcHJvY2Vzcy9Qcm9jZXNzJztcbmltcG9ydCB7IHNwZWVkUGVyU2Vjb25kIH0gZnJvbSAnLi4vaW5jL2NhbGMnO1xuaW1wb3J0IHsgaXNOdW0sIGlzT2JqLCBpc1N0cmluZyB9IGZyb20gJy4uL2luYy91dGlscyc7XG5pbXBvcnQgYmluZEFkYXB0ZXIgZnJvbSAnLi4vaW5jL2JpbmQtYWRhcHRlcic7XG5pbXBvcnQgY29sb3JUeXBlIGZyb20gJy4uL3ZhbHVlLXR5cGVzL2NvbG9yJztcbmltcG9ydCBjb21wbGV4VHlwZSBmcm9tICcuLi92YWx1ZS10eXBlcy9jb21wbGV4JztcbmltcG9ydCB1bml0VHlwZSBmcm9tICcuLi92YWx1ZS10eXBlcy91bml0JztcblxuY29uc3QgREVGQVVMVF9QUk9QID0gJ2N1cnJlbnQnO1xuY29uc3QgTlVNRVJJQ0FMX1ZBTFVFUyA9IFtERUZBVUxUX1BST1AsICdmcm9tJywgJ3RvJywgJ3ByZXYnLCAndmVsb2NpdHknXTtcbmNvbnN0IE5VTV9OVU1FUklDQUxfVkFMVUVTID0gTlVNRVJJQ0FMX1ZBTFVFUy5sZW5ndGg7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdGlvbiBleHRlbmRzIFByb2Nlc3Mge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHByb3BzLnN0YXRlID0ge307XG4gICAgICAgIHByb3BzLnZhbHVlS2V5cyA9IFtdO1xuICAgICAgICBwcm9wcy5wYXJlbnRLZXlzID0gW107XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIFNldCBBY3Rpb24gcHJvcGVydGllc1xuICAgICAgICAjIyBTZXQgdXNlci1kZWZpbmVkIEFjdGlvbiBwcm9wZXJ0aWVzXG5cbiAgICAgICAgQHBhcmFtIFtvYmplY3RdXG4gICAgICAgIEByZXR1cm4gW0FjdGlvbl1cbiAgICAqL1xuICAgIHNldChwcm9wcyA9IHt9KSB7XG4gICAgICAgIGNvbnN0IHsgdmFsdWVzLCBvbiwgLi4ucHJvcHNUb1NldCB9ID0gcHJvcHM7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZXMgPSB0aGlzLnZhbHVlcyA9IHRoaXMudmFsdWVzIHx8IHt9O1xuICAgICAgICBjb25zdCBkZWZhdWx0VmFsdWUgPSB0aGlzLmdldERlZmF1bHRWYWx1ZSgpO1xuICAgICAgICBjb25zdCBpbmhlcml0YWJsZSA9IHt9O1xuXG4gICAgICAgIC8vIDEpIFNldCBub24tY29uc3VtZWQgcHJvcGVydGllc1xuICAgICAgICBzdXBlci5zZXQocHJvcHNUb1NldCk7XG5cbiAgICAgICAgLy8gMikgQmluZCBgb25gIHRvIGFuIGFkYXB0ZXIsIGlmIG5vdCBhbHJlYWR5XG4gICAgICAgIGlmIChvbikge1xuICAgICAgICAgICAgLy8gRHVja3R5cGlzaCBjaGVjayBmb3IgQWRhcHRlclxuICAgICAgICAgICAgdGhpcy5vbiA9ICghb24uc2V0dGVyKSA/IGJpbmRBZGFwdGVyKG9uKSA6IG9uO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gMykgUHJpbWUgYW4gb2JqZWN0IHRvIGluaGVyaXQgZnJvbSwgd2l0aCBvbmx5IGB2YWx1ZWAgcHJvcGVydGllc1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoZGVmYXVsdFZhbHVlLmhhc093blByb3BlcnR5KGtleSkgJiYgcHJvcHNUb1NldC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgaW5oZXJpdGFibGVba2V5XSA9IHByb3BzVG9TZXRba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIDQpIFVwZGF0ZSBleGlzdGluZyB2YWx1ZXMgd2l0aCBpbmhlcml0YWJsZSBwcm9wZXJ0aWVzXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBjdXJyZW50VmFsdWVzKSB7XG4gICAgICAgICAgICAvLyBFeGNsdWRlIHZhcmlhYmxlcyB0byBiZSBzZXQsIGFzIHdlJ2xsIGRlYWwgd2l0aCB0aG9zZSBzZXBlcmF0ZWx5XG4gICAgICAgICAgICBpZiAoY3VycmVudFZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFZhbHVlc1trZXldID0geyAuLi5jdXJyZW50VmFsdWVzW2tleV0sIC4uLmluaGVyaXRhYmxlIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyA1KSBVcGRhdGVcbiAgICAgICAgaWYgKHZhbHVlcykge1xuICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZXModmFsdWVzLCBpbmhlcml0YWJsZSk7ICAgXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBnZXQoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlW2tleV07XG4gICAgfVxuXG4gICAgc2V0VmFsdWVzKHZhbHVlcywgaW5oZXJpdEZyb20pIHtcbiAgICAgICAgY29uc3QgY3VycmVudFZhbHVlcyA9IHRoaXMudmFsdWVzO1xuICAgICAgICBjb25zdCBkZWZhdWx0VmFsdWUgPSB0aGlzLmdldERlZmF1bHRWYWx1ZSgpO1xuICAgICAgICBjb25zdCBkZWZhdWx0VmFsdWVQcm9wID0gdGhpcy5nZXREZWZhdWx0VmFsdWVQcm9wKCk7XG5cbiAgICAgICAgLy8gMikgTG9vcCBvdmVyIGV2ZXJ5IGluY29taW5nIGB2YWx1ZWAgYW5kIHNldFxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSB7fTtcbiAgICAgICAgICAgICAgICBsZXQgY2hpbGRyZW4gPSB7fTtcbiAgICAgICAgICAgICAgICBsZXQgaGFzQ2hpbGRyZW4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBsZXQgYmFzZSA9IGN1cnJlbnRWYWx1ZXNba2V5XSA/IGN1cnJlbnRWYWx1ZXNba2V5XSA6IGRlZmF1bHRWYWx1ZTtcblxuICAgICAgICAgICAgICAgIC8vIElmIHZhbHVlcyBvcyBhbiBvYmplY3QsIHVzZSBpdCBkaXJlY3RseVxuICAgICAgICAgICAgICAgIGlmIChpc09iaih2YWx1ZXNba2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZXNba2V5XTtcblxuICAgICAgICAgICAgICAgIC8vIE9SIHNldCB0byBhIHRoZSBkZWZhdWx0IHZhbHVlIHByb3BlcnR5IG9mIGEgYmxhbmsgb2JqZWN0XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVbZGVmYXVsdFZhbHVlUHJvcF0gPSB2YWx1ZXNba2V5XTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsZXQgbmV3VmFsdWUgPSB7IC4uLmJhc2UsIC4uLmluaGVyaXRGcm9tLCAuLi52YWx1ZSB9O1xuXG4gICAgICAgICAgICAgICAgLy8gR2V0IGN1cnJlbnQgdmFsdWUgaWYgbm9uZSBpcyBkZWZpbmVkXG4gICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlLmN1cnJlbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSBoYXZlIGEgYGZyb21gIHZhbHVlIHNldCwgdGFrZSB0aGF0XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZS5mcm9tICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLmN1cnJlbnQgPSBuZXdWYWx1ZS5mcm9tO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gT3IgaWYgd2UgaGF2ZSBhbiBBZGFwdGVyLCBnZXQgaXQgZnJvbSB0aGF0XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5vbiAmJiB0aGlzLm9uLmdldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUuY3VycmVudCA9IHRoaXMub24uZ2V0KGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBJZiBpdCdzIHN0aWxsIHVuZGVmaW5lZCBtYWtlIGl0IGVxdWFsIDA/P1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUuY3VycmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS5jdXJyZW50ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZS5mcm9tID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUuZnJvbSA9IG5ld1ZhbHVlLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gSWYgb3VyIEFkYXB0ZXIgaGFzIGEgYGdldFZhbHVlVHlwZWAgZnVuY3Rpb24sIHRyeSB0byBnZXQgYSBgdHlwZWAgd2l0aCB0aGUgdmFsdWUga2V5XG4gICAgICAgICAgICAgICAgaWYgKCFuZXdWYWx1ZS50eXBlICYmIHRoaXMub24gJiYgdGhpcy5vbi5nZXRWYWx1ZVR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUudHlwZSA9IHRoaXMub24uZ2V0VmFsdWVUeXBlKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gYykgTG9vcCB0aHJvdWdoIGFsbCBudW1lcmljYWwgcHJvcGVydHkgdHlwZXNcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE5VTV9OVU1FUklDQUxfVkFMVUVTOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvcE5hbWUgPSBOVU1FUklDQUxfVkFMVUVTW2ldO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZVByb3AgPSBuZXdWYWx1ZVtwcm9wTmFtZV07XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgd2UgaGF2ZSB0aGlzIGtpbmQgb2YgcHJvcGVydHksIHByb2Nlc3NcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlUHJvcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSBkb24ndCBoYXZlIGEgdHlwZSBzZXQgdG8gdGhpcyB2YWx1ZSwgZmluZCBvbmUgKHVubGVzcyBpdCdzIGEgcmF3IG51bWJlcilcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbmV3VmFsdWUudHlwZSAmJiBpc1N0cmluZyh2YWx1ZVByb3ApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVuaXRUeXBlLnRlc3QodmFsdWVQcm9wKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS50eXBlID0gdW5pdFR5cGU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvbG9yVHlwZS50ZXN0KHZhbHVlUHJvcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUudHlwZSA9IGNvbG9yVHlwZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29tcGxleFR5cGUudGVzdCh2YWx1ZVByb3ApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLnR5cGUgPSBjb21wbGV4VHlwZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZS50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgd2UncmUgZ29pbmcgdG8gc3BsaXQgdGhpcyB2YWx1ZSBpbnRvIGNoaWxkIHZhbHVlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZS50eXBlLmhhc093blByb3BlcnR5KCdzcGxpdCcpICYmIGlzU3RyaW5nKHZhbHVlUHJvcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3BsaXRQcm9wID0gbmV3VmFsdWUudHlwZS5zcGxpdCh2YWx1ZVByb3ApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHNwbGl0S2V5IGluIHNwbGl0UHJvcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNwbGl0UHJvcC5oYXNPd25Qcm9wZXJ0eShzcGxpdEtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21iaW5lZEtleSA9IGtleSArIHNwbGl0S2V5O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjaGlsZHJlbltjb21iaW5lZEtleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVmYXVsdFZhbHVlID0gKG5ld1ZhbHVlLnR5cGUuZGVmYXVsdFByb3BzICYmIG5ld1ZhbHVlLnR5cGUuZGVmYXVsdFByb3BzW3NwbGl0S2V5XSkgPyBuZXdWYWx1ZS50eXBlLmRlZmF1bHRQcm9wc1tzcGxpdEtleV0gOiB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW5bY29tYmluZWRLZXldID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ubmV3VmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5kZWZhdWx0VmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkS2V5OiBzcGxpdEtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuW2NvbWJpbmVkS2V5XVtwcm9wTmFtZV0gPSBzcGxpdFByb3Bbc3BsaXRLZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhpcyBoYXMgYSBgdGVtcGxhdGVgIGZ1bmN0aW9uLCBnZW5lcmF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW5ld1ZhbHVlLnRlbXBsYXRlICYmIG5ld1ZhbHVlLnR5cGUudGVtcGxhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLnRlbXBsYXRlID0gbmV3VmFsdWUudHlwZS50ZW1wbGF0ZShuZXdWYWx1ZVtwcm9wTmFtZV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzQ2hpbGRyZW4gPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChuZXdWYWx1ZS50eXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IHsgLi4ubmV3VmFsdWUsIC4uLm5ld1ZhbHVlLnR5cGUuZGVmYXVsdFByb3BzIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlLnR5cGUucGFyc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWVbcHJvcE5hbWVdID0gbmV3VmFsdWUudHlwZS5wYXJzZShuZXdWYWx1ZVtwcm9wTmFtZV0sIG5ld1ZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IC8vIEVuZCBudW1lcmljYWwgcHJvcGVydHkgaXRlcmF0aW9uXG5cbiAgICAgICAgICAgICAgICAvLyBTZXQgYHByZXZgIHRvIGBjdXJyZW50YCBpZiBpdCBpc24ndCBhbHJlYWR5IGRlZmluZWRcbiAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUucHJldiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLnByZXYgPSBuZXdWYWx1ZS5jdXJyZW50O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGN1cnJlbnRWYWx1ZXNba2V5XSA9IG5ld1ZhbHVlO1xuXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhpcyB2YWx1ZSBkb2Vzbid0IGhhdmUgY2hpbGRyZW4sIGFkZCB0byB2YWx1ZUtleXNcbiAgICAgICAgICAgICAgICBpZiAoIWhhc0NoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlS2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlS2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIE9yIGFkZCB0byBwYXJlbnRLZXlzXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUuY2hpbGRyZW4gPSBuZXdWYWx1ZS5jaGlsZHJlbiB8fCB7fTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJlbnRLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50S2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFZhbHVlcyhjaGlsZHJlbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IC8vIEVuZCB2YWx1ZSBpdGVyYXRpb25cblxuICAgICAgICAvLyAzKSBQcmVjb21wdXRlIHZhbHVlIGtleSBhbmQgcGFyZW50IGtleSBsZW5ndGggdG8gcHJldmVudCBwZXItZnJhbWUgbWVhc3VyZW1lbnRcbiAgICAgICAgdGhpcy5udW1WYWx1ZUtleXMgPSB0aGlzLnZhbHVlS2V5cy5sZW5ndGg7XG4gICAgICAgIHRoaXMubnVtUGFyZW50S2V5cyA9IHRoaXMucGFyZW50S2V5cy5sZW5ndGg7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBEZWNpZGUgd2hldGhlciB0aGlzIEFjdGlvbiB3aWxsIHJlbmRlciBvbiBuZXh0IGZyYW1lXG5cbiAgICAgICAgQHBhcmFtIFtBY3Rpb25dXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgICAgICBAcGFyYW0gW251bWJlcl1cbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybiB0cnVlIHRvIHJlbmRlclxuICAgICovXG4gICAgd2lsbFJlbmRlcihhY3Rpb24sIGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgICAgICAgbGV0IGhhc0NoYW5nZWQgPSBmYWxzZTtcblxuICAgICAgICAvLyBDaGVjayBpZiBiYXNlIHZhbHVlcyBoYXZlIHVwZGF0ZWQgXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gdGhpcy52YWx1ZUtleXNbaV07XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG5cbiAgICAgICAgICAgIC8vIFJ1biB0cmFuc2Zvcm0gZnVuY3Rpb24gKGlmIHByZXNlbnQpXG4gICAgICAgICAgICBpZiAodmFsdWUudHJhbnNmb3JtKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IHZhbHVlLnRyYW5zZm9ybSh2YWx1ZS5jdXJyZW50LCBrZXksIHRoaXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDYXAgbWluaW11bVxuICAgICAgICAgICAgaWYgKGlzTnVtKHZhbHVlLm1pbikpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gTWF0aC5tYXgodmFsdWUuY3VycmVudCwgdmFsdWUubWluKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ2FwIG1heGltdW1cbiAgICAgICAgICAgIGlmIChpc051bSh2YWx1ZS5tYXgpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IE1hdGgubWluKHZhbHVlLmN1cnJlbnQsIHZhbHVlLm1heCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJvdW5kIG51bWJlclxuICAgICAgICAgICAgaWYgKHZhbHVlLnJvdW5kKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IE1hdGgucm91bmQodmFsdWUuY3VycmVudCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhbHVlLmZyYW1lQ2hhbmdlID0gdmFsdWUuY3VycmVudCAtIHZhbHVlLnByZXY7XG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSB2ZWxvY2l0eVxuICAgICAgICAgICAgaWYgKCF0aGlzLmNhbGN1bGF0ZXNWZWxvY2l0eSkge1xuICAgICAgICAgICAgICAgIHZhbHVlLnZlbG9jaXR5ID0gc3BlZWRQZXJTZWNvbmQodmFsdWUuZnJhbWVDaGFuZ2UsIGVsYXBzZWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiB0aGlzIHZhbHVlIGhhcyBjaGFuZ2VkXG4gICAgICAgICAgICBpZiAodmFsdWUucHJldiAhPT0gdmFsdWUuY3VycmVudCkge1xuICAgICAgICAgICAgICAgIGhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHZhbHVlLnByZXYgPSB2YWx1ZS5jdXJyZW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBBcHBlbmQgdW5pdFxuICAgICAgICAgICAgY29uc3QgdmFsdWVGb3JTdGF0ZSA9ICh2YWx1ZS50eXBlICYmIHZhbHVlLnR5cGUuc2VyaWFsaXplKSA/IHZhbHVlLnR5cGUuc2VyaWFsaXplKHZhbHVlLmN1cnJlbnQsIHZhbHVlKSA6IHZhbHVlLmN1cnJlbnQ7XG5cbiAgICAgICAgICAgIC8vIEFkZCB0byBzdGF0ZSBpZiB0aGlzIGlzIG5vdCBhIGNoaWxkIHZhdWVcbiAgICAgICAgICAgIGlmICghdmFsdWUucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZVtrZXldID0gdmFsdWVGb3JTdGF0ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZXNbdmFsdWUucGFyZW50XS5jaGlsZHJlblt2YWx1ZS5jaGlsZEtleV0gPSB2YWx1ZUZvclN0YXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMub25GcmFtZSkge1xuICAgICAgICAgICAgdGhpcy5vbkZyYW1lKHRoaXMuc3RhdGUsIHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICh0aGlzLm9uQ2xlYW51cCkgPyB0cnVlIDogaGFzQ2hhbmdlZDtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBJZiB3ZSBhcmUgcmVuZGVyaW5nLCByZWNvbWJpbmUgcGFyZW50IHZhbHVlcyBmaXJzdFxuICAgICovXG4gICAgb25QcmVSZW5kZXIoKSB7XG4gICAgICAgIC8vIFVwZGF0ZSBwYXJlbnQgdmFsdWVzXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1QYXJlbnRLZXlzOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHRoaXMucGFyZW50S2V5c1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcblxuICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IHZhbHVlLnR5cGUuY29tYmluZSh2YWx1ZS5jaGlsZHJlbiwgdmFsdWUudGVtcGxhdGUpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZVtrZXldICE9PSB2YWx1ZS5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZVtrZXldID0gdmFsdWUuY3VycmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uUmVuZGVyKHsgc3RhdGUsIG9uIH0pIHtcbiAgICAgICAgaWYgKG9uICYmIG9uLnNldCkge1xuICAgICAgICAgICAgb24uc2V0KHN0YXRlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBhdXNlKCkge1xuICAgICAgICBzdXBlci5zdG9wKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJlc3VtZSgpIHtcbiAgICAgICAgc3VwZXIuc3RhcnQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMudmFsdWVzO1xuICAgICAgICBzdXBlci5zdGFydCgpO1xuXG4gICAgICAgIGZvciAobGV0IGtleSBpbiB2YWx1ZXMpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHZhbHVlc1trZXldLnByZXYgPSB2YWx1ZXNba2V5XS5vcmlnaW4gPSB2YWx1ZXNba2V5XS5jdXJyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgIyBHZXQgZGVmYXVsdCBBY3Rpb24gdmFsdWUgcHJvcGVydGllc1xuXG4gICAgICAgIEByZXR1cm4gW29iamVjdF1cbiAgICAqL1xuICAgIGdldERlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZlbG9jaXR5OiAwLFxuICAgICAgICAgICAgcm91bmQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgIyBHZXQgZGVmYXVsdCBBY3Rpb24gdmFsdWUgcHJvcGVydHkgbmFtZVxuICAgICAgICAjIyBTZXQgdGhpcyBgdmFsdWVgIHByb3BlcnR5IHdoZW4gc2V0IGFzIHZhbHVlIGluc3RlYWQgb2Ygb2JqZWN0XG5cbiAgICAgICAgQHJldHVybiBbc3RyaW5nXVxuICAgICovXG4gICAgZ2V0RGVmYXVsdFZhbHVlUHJvcCgpIHtcbiAgICAgICAgcmV0dXJuIERFRkFVTFRfUFJPUDtcbiAgICB9XG59XG4iXX0=

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _Action2 = __webpack_require__(3);
	
	var _Action3 = _interopRequireDefault(_Action2);
	
	var _generateBlendCurve = __webpack_require__(35);
	
	var _generateBlendCurve2 = _interopRequireDefault(_generateBlendCurve);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/*
	    Methods and properties to add to bound Actions
	*/
	var boundOnStart = function (action) {
	    return action.actor.activateAction(action.id, action);
	};
	var boundOnStop = function (action) {
	    return action.actor.deactivateAction(action.id);
	};
	var boundProps = function (actor) {
	    return {
	        actor: actor,
	        isPriority: true,
	        on: actor.on,
	        _onStart: boundOnStart,
	        _onStop: boundOnStop,
	        onRender: undefined
	    };
	};
	
	var Actor = (function (_Action) {
	    _inherits(Actor, _Action);
	
	    function Actor(props) {
	        _classCallCheck(this, Actor);
	
	        var _this = _possibleConstructorReturn(this, _Action.call(this, props));
	
	        _this.activeActions = {};
	        _this.numActiveActions = 0;
	        return _this;
	    }
	
	    Actor.prototype.set = function set(props, instant) {
	        if (instant || !this.behaviour) {
	            _Action.prototype.set.call(this, props);
	            this.once();
	        } else {
	            var action = this.reducer(props);
	            if (action) {
	                this.start(action);
	            }
	        }
	    };
	
	    /*
	        Bind Action to Actor
	    */
	
	    Actor.prototype.bind = function bind(action) {
	        var inheritedAction = action.inherit();
	        var newValues = {};
	        var hasNewValues = false;
	
	        // Create values on actor that don't exist
	        for (var key in inheritedAction.values) {
	            if (inheritedAction.values.hasOwnProperty(key) && !this.values.hasOwnProperty(key)) {
	                newValues[key] = inheritedAction.values[key];
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
	
	    Actor.prototype.start = function start(action) {
	        _Action.prototype.start.call(this);
	
	        if (action) {
	            var boundAction = this.bind(action);
	            boundAction.start();
	
	            return boundAction;
	        } else {
	            for (var key in this.activeActions) {
	                if (this.activeActions.hasOwnProperty(key)) {
	                    var _action = this.activeActions[key];
	                    if (!_action.isActive) {
	                        _action.start();
	                    }
	                }
	            }
	        }
	
	        return this;
	    };
	
	    Actor.prototype.stop = function stop() {
	        _Action.prototype.stop.call(this);
	
	        for (var key in this.activeActions) {
	            if (this.activeActions.hasOwnProperty(key)) {
	                this.activeActions[key].stop();
	            }
	        }
	
	        return this;
	    };
	
	    Actor.prototype.willRender = function willRender(actor, frameStamp, elapsed) {
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
	
	    /*
	        Add active actions
	         @param [number]
	        @param [Action]
	    */
	
	    Actor.prototype.activateAction = function activateAction(id, action) {
	        this.activeActions[id] = action;
	        this.numActiveActions++;
	
	        for (var i = 0; i < action.numValueKeys; i++) {
	            var key = action.valueKeys[i];
	            var actionValue = action.values[key];
	            var value = this.values[key];
	
	            // Pass Actor value properties to Action
	            actionValue.velocity = value.velocity;
	            actionValue.current = value.current;
	
	            // If we're blending this action, and there's on already in progress
	            if (action.blend && value.numDrivers) {
	                action.blendCurve = (0, _generateBlendCurve2.default)(this.activeActions[value.drivers[0]], action, key);
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
	
	    Actor.prototype.deactivateAction = function deactivateAction(id) {
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
	
	    Actor.prototype.getDefaultValue = function getDefaultValue() {
	        return _extends({}, _Action.prototype.getDefaultValue.call(this), {
	            drivers: [],
	            numDrivers: 0
	        });
	    };
	
	    return Actor;
	})(_Action3.default);
	
	exports.default = Actor;
	//# sourceMappingURL=data:application/json;base64,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QUFDekMsOEJBQU0sSUFBSSxLQUFBLE1BQUUsQ0FBQztTQUNoQjtLQUNKOztBQWhLZ0IsU0FBSyxXQWtLdEIsZUFBZSw4QkFBRztBQUNkLDRCQUNPLGtCQUFNLGVBQWUsS0FBQSxNQUFFO0FBQzFCLG1CQUFPLEVBQUUsRUFBRTtBQUNYLHNCQUFVLEVBQUUsQ0FBQztXQUNmO0tBQ0w7O1dBeEtnQixLQUFLOzs7a0JBQUwsS0FBSyIsImZpbGUiOiJBY3Rvci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dFBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY3Rpb24gZnJvbSAnLi4vYWN0aW9ucy9BY3Rpb24nO1xuaW1wb3J0IGdlbmVyYXRlQmxlbmRDdXJ2ZSBmcm9tICcuL2luYy9nZW5lcmF0ZS1ibGVuZC1jdXJ2ZSc7XG5cbi8qXG4gICAgTWV0aG9kcyBhbmQgcHJvcGVydGllcyB0byBhZGQgdG8gYm91bmQgQWN0aW9uc1xuKi9cbmNvbnN0IGJvdW5kT25TdGFydCA9IChhY3Rpb24pID0+IGFjdGlvbi5hY3Rvci5hY3RpdmF0ZUFjdGlvbihhY3Rpb24uaWQsIGFjdGlvbik7XG5jb25zdCBib3VuZE9uU3RvcCA9IChhY3Rpb24pID0+IGFjdGlvbi5hY3Rvci5kZWFjdGl2YXRlQWN0aW9uKGFjdGlvbi5pZCk7XG5jb25zdCBib3VuZFByb3BzID0gKGFjdG9yKSA9PiAoe1xuICAgIGFjdG9yOiBhY3RvcixcbiAgICBpc1ByaW9yaXR5OiB0cnVlLFxuICAgIG9uOiBhY3Rvci5vbixcbiAgICBfb25TdGFydDogYm91bmRPblN0YXJ0LFxuICAgIF9vblN0b3A6IGJvdW5kT25TdG9wLFxuICAgIG9uUmVuZGVyOiB1bmRlZmluZWRcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY3RvciBleHRlbmRzIEFjdGlvbiB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLmFjdGl2ZUFjdGlvbnMgPSB7fTtcbiAgICAgICAgdGhpcy5udW1BY3RpdmVBY3Rpb25zID0gMDtcbiAgICB9XG5cbiAgICBzZXQocHJvcHMsIGluc3RhbnQpIHtcbiAgICAgICAgaWYgKGluc3RhbnQgfHwgIXRoaXMuYmVoYXZpb3VyKSB7XG4gICAgICAgICAgICBzdXBlci5zZXQocHJvcHMpO1xuICAgICAgICAgICAgdGhpcy5vbmNlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBhY3Rpb24gPSB0aGlzLnJlZHVjZXIocHJvcHMpO1xuICAgICAgICAgICAgaWYgKGFjdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnQoYWN0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICAgIEJpbmQgQWN0aW9uIHRvIEFjdG9yXG4gICAgKi9cbiAgICBiaW5kKGFjdGlvbikge1xuICAgICAgICBjb25zdCBpbmhlcml0ZWRBY3Rpb24gPSBhY3Rpb24uaW5oZXJpdCgpO1xuICAgICAgICBsZXQgbmV3VmFsdWVzID0ge307XG4gICAgICAgIGxldCBoYXNOZXdWYWx1ZXMgPSBmYWxzZTtcblxuICAgICAgICAvLyBDcmVhdGUgdmFsdWVzIG9uIGFjdG9yIHRoYXQgZG9uJ3QgZXhpc3RcbiAgICAgICAgZm9yIChsZXQga2V5IGluIGluaGVyaXRlZEFjdGlvbi52YWx1ZXMpIHtcbiAgICAgICAgICAgIGlmIChpbmhlcml0ZWRBY3Rpb24udmFsdWVzLmhhc093blByb3BlcnR5KGtleSkgJiYgIXRoaXMudmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZXNba2V5XSA9IGluaGVyaXRlZEFjdGlvbi52YWx1ZXNba2V5XTtcbiAgICAgICAgICAgICAgICBoYXNOZXdWYWx1ZXMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhhc05ld1ZhbHVlcykge1xuICAgICAgICAgICAgdGhpcy5zZXQoeyB2YWx1ZXM6IG5ld1ZhbHVlcyB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbmhlcml0ZWRBY3Rpb24uc2V0KGJvdW5kUHJvcHModGhpcywgaW5oZXJpdGVkQWN0aW9uKSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgU3RhcnQgQWN0b3JcblxuICAgICAgICBJZiBBY3Rpb24gaXMgcHJvdmlkZWQsIGJpbmQgaXQgdG8gdGhpcyBBY3RvciBhbmQgc3RhcnRcblxuICAgICAgICBAcGFyYW0gKG9wdGlvbmFsKSBbQWN0aW9uXVxuICAgICovXG4gICAgc3RhcnQoYWN0aW9uKSB7XG4gICAgICAgIHN1cGVyLnN0YXJ0KCk7XG5cbiAgICAgICAgaWYgKGFjdGlvbikge1xuICAgICAgICAgICAgY29uc3QgYm91bmRBY3Rpb24gPSB0aGlzLmJpbmQoYWN0aW9uKTtcbiAgICAgICAgICAgIGJvdW5kQWN0aW9uLnN0YXJ0KCk7XG5cbiAgICAgICAgICAgIHJldHVybiBib3VuZEFjdGlvbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLmFjdGl2ZUFjdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVBY3Rpb25zLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWN0aW9uID0gdGhpcy5hY3RpdmVBY3Rpb25zW2tleV07XG4gICAgICAgICAgICAgICAgICAgIGlmICghYWN0aW9uLmlzQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24uc3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHN0b3AoKSB7XG4gICAgICAgIHN1cGVyLnN0b3AoKTtcblxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5hY3RpdmVBY3Rpb25zKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVBY3Rpb25zLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUFjdGlvbnNba2V5XS5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB3aWxsUmVuZGVyKGFjdG9yLCBmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gdGhpcy52YWx1ZUtleXNbaV07XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG4gICAgICAgICAgICBjb25zdCBkcml2ZXIgPSB2YWx1ZS5udW1Ecml2ZXJzID8gdGhpcy5hY3RpdmVBY3Rpb25zW3ZhbHVlLmRyaXZlcnNbMF1dIDogZmFsc2U7XG4gICAgICAgICAgICBsZXQgbmV3Q3VycmVudCA9IHZhbHVlLm51bURyaXZlcnMgPyBkcml2ZXIudmFsdWVzW2tleV0uY3VycmVudCA6IHZhbHVlLmN1cnJlbnQ7XG5cbiAgICAgICAgICAgIGlmIChkcml2ZXIuYmxlbmRDdXJ2ZSkge1xuICAgICAgICAgICAgICAgIG5ld0N1cnJlbnQgPSBkcml2ZXIuYmxlbmRDdXJ2ZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gbmV3Q3VycmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdXBlci53aWxsUmVuZGVyKGFjdG9yLCBmcmFtZVN0YW1wLCBlbGFwc2VkKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBBZGQgYWN0aXZlIGFjdGlvbnNcblxuICAgICAgICBAcGFyYW0gW251bWJlcl1cbiAgICAgICAgQHBhcmFtIFtBY3Rpb25dXG4gICAgKi9cbiAgICBhY3RpdmF0ZUFjdGlvbihpZCwgYWN0aW9uKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlQWN0aW9uc1tpZF0gPSBhY3Rpb247XG4gICAgICAgIHRoaXMubnVtQWN0aXZlQWN0aW9ucysrO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWN0aW9uLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBhY3Rpb24udmFsdWVLZXlzW2ldO1xuICAgICAgICAgICAgY29uc3QgYWN0aW9uVmFsdWUgPSBhY3Rpb24udmFsdWVzW2tleV07XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG5cbiAgICAgICAgICAgIC8vIFBhc3MgQWN0b3IgdmFsdWUgcHJvcGVydGllcyB0byBBY3Rpb25cbiAgICAgICAgICAgIGFjdGlvblZhbHVlLnZlbG9jaXR5ID0gdmFsdWUudmVsb2NpdHk7XG4gICAgICAgICAgICBhY3Rpb25WYWx1ZS5jdXJyZW50ID0gdmFsdWUuY3VycmVudDtcblxuICAgICAgICAgICAgLy8gSWYgd2UncmUgYmxlbmRpbmcgdGhpcyBhY3Rpb24sIGFuZCB0aGVyZSdzIG9uIGFscmVhZHkgaW4gcHJvZ3Jlc3NcbiAgICAgICAgICAgIGlmIChhY3Rpb24uYmxlbmQgJiYgdmFsdWUubnVtRHJpdmVycykge1xuICAgICAgICAgICAgICAgIGFjdGlvbi5ibGVuZEN1cnZlID0gZ2VuZXJhdGVCbGVuZEN1cnZlKHRoaXMuYWN0aXZlQWN0aW9uc1t2YWx1ZS5kcml2ZXJzWzBdXSwgYWN0aW9uLCBrZXkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YWx1ZS5kcml2ZXJzID0gW2lkXTtcbiAgICAgICAgICAgIHZhbHVlLm51bURyaXZlcnMgPSB2YWx1ZS5kcml2ZXJzLmxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm51bUFjdGl2ZUFjdGlvbnMpIHtcbiAgICAgICAgICAgIHN1cGVyLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBSZW1vdmUgYWN0aXZlIGFjdGlvbnNcblxuICAgICAgICBAcGFyYW0gW251bWJlcl1cbiAgICAqL1xuICAgIGRlYWN0aXZhdGVBY3Rpb24oaWQpIHtcbiAgICAgICAgY29uc3QgYWN0aW9uID0gdGhpcy5hY3RpdmVBY3Rpb25zW2lkXTtcblxuICAgICAgICBpZiAoYWN0aW9uKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFjdGlvbi5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGFjdGlvbi52YWx1ZUtleXNbaV07XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRyaXZlckluZGV4ID0gdmFsdWUuZHJpdmVycy5pbmRleE9mKGlkKTtcblxuICAgICAgICAgICAgICAgIGlmIChkcml2ZXJJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUuZHJpdmVycy5zcGxpY2UoZHJpdmVySW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5udW1Ecml2ZXJzLS07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5hY3RpdmVBY3Rpb25zW2lkXTtcbiAgICAgICAgICAgIHRoaXMubnVtQWN0aXZlQWN0aW9ucy0tO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLm51bUFjdGl2ZUFjdGlvbnMgJiYgdGhpcy5pc0FjdGl2ZSkge1xuICAgICAgICAgICAgc3VwZXIuc3RvcCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0RGVmYXVsdFZhbHVlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3VwZXIuZ2V0RGVmYXVsdFZhbHVlKCksXG4gICAgICAgICAgICBkcml2ZXJzOiBbXSxcbiAgICAgICAgICAgIG51bURyaXZlcnM6IDBcbiAgICAgICAgfTtcbiAgICB9XG59Il19

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _Action2 = __webpack_require__(3);
	
	var _Action3 = _interopRequireDefault(_Action2);
	
	var _presetEasing = __webpack_require__(19);
	
	var _presetEasing2 = _interopRequireDefault(_presetEasing);
	
	var _utils = __webpack_require__(2);
	
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
	
	var Tween = (function (_Action) {
	    _inherits(Tween, _Action);
	
	    function Tween() {
	        _classCallCheck(this, Tween);
	
	        return _possibleConstructorReturn(this, _Action.apply(this, arguments));
	    }
	
	    Tween.prototype.start = function start() {
	        _Action.prototype.start.call(this);
	        this.elapsed = 0;
	        this.flipCount = this.yoyoCount = this.loopCount = 0;
	
	        return this;
	    };
	
	    Tween.prototype.onUpdate = function onUpdate(tween, frameStamp, elapsed) {
	        var progressTarget = this.playDirection === 1 ? 1 : 0;
	
	        this.ended = true;
	        this.elapsed += elapsed * this.dilate * this.playDirection;
	
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
	        if (this.ended) {
	            var stepTaken = false;
	
	            for (var key in NEXT_STEPS) {
	                if (NEXT_STEPS.hasOwnProperty(key)) {
	                    var maxSteps = this[key];
	
	                    if (maxSteps === true || (0, _utils.isNum)(maxSteps) && maxSteps > this[key + COUNT]) {
	                        this[key + COUNT]++;
	                        stepTaken = true;
	                        this[NEXT_STEPS[key]]();
	                    }
	                }
	            }
	
	            if (!stepTaken) {
	                this.stop();
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
	        this.once();
	        this.elapsed = elapsed;
	
	        return this;
	    };
	
	    Tween.prototype.getDefaultProps = function getDefaultProps() {
	        return _extends({}, _Action.prototype.getDefaultProps.call(this), {
	            blend: true,
	            delay: 0,
	            dilate: 1,
	            duration: 300,
	            loop: false,
	            yoyo: false,
	            flip: false,
	            playDirection: 1,
	            ended: false,
	            elapsed: 0
	        });
	    };
	
	    Tween.prototype.getDefaultValue = function getDefaultValue() {
	        return _extends({}, _Action.prototype.getDefaultValue.call(this), {
	            delay: 0,
	            duration: 300,
	            ease: _presetEasing2.default.easeOut,
	            elapsed: 0,
	            stagger: 0,
	            steps: 0,
	            to: 0,
	            round: false
	        });
	    };
	
	    Tween.prototype.getDefaultValueProp = function getDefaultValueProp() {
	        return 'to';
	    };
	
	    return Tween;
	})(_Action3.default);
	
	exports.default = Tween;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL1R3ZWVuLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDO0FBQ3RCLElBQU0sVUFBVSxHQUFHO0FBQ2YsUUFBSSxFQUFFLFNBQVM7QUFDZixRQUFJLEVBQUUsU0FBUztBQUNmLFFBQUksRUFBRSxZQUFZO0NBQ3JCLENBQUM7O0lBRW1CLEtBQUs7Y0FBTCxLQUFLOzthQUFMLEtBQUs7OEJBQUwsS0FBSzs7Ozs7QUFBTCxTQUFLLFdBQ3RCLEtBQUssb0JBQUc7QUFDSiwwQkFBTSxLQUFLLEtBQUEsTUFBRSxDQUFDO0FBQ2QsWUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7QUFDakIsWUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDOztBQUVyRCxlQUFPLElBQUksQ0FBQztLQUNmOztBQVBnQixTQUFLLFdBU3RCLFFBQVEscUJBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUU7QUFDakMsWUFBTSxjQUFjLEdBQUcsQUFBQyxJQUFJLENBQUMsYUFBYSxLQUFLLENBQUMsR0FBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDOztBQUUxRCxZQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztBQUNsQixZQUFJLENBQUMsT0FBTyxJQUFJLEFBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQzs7QUFFN0QsYUFBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDeEMsZ0JBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDOUIsZ0JBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FB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InNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY3Rpb24gZnJvbSAnLi9BY3Rpb24nO1xuaW1wb3J0IGVhc2luZyBmcm9tICcuL2Vhc2luZy9wcmVzZXQtZWFzaW5nJztcbmltcG9ydCB7IGN1cnJlbnRUaW1lLCBpc051bSB9IGZyb20gJy4uL2luYy91dGlscyc7XG5pbXBvcnQge1xuICAgIGVhc2UsXG4gICAgcmVzdHJpY3QsXG4gICAgZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUsXG4gICAgc3RlcFByb2dyZXNzXG59IGZyb20gJy4uL2luYy9jYWxjJztcblxuY29uc3QgQ09VTlQgPSAnQ291bnQnO1xuY29uc3QgTkVYVF9TVEVQUyA9IHtcbiAgICBsb29wOiAncmVzdGFydCcsXG4gICAgeW95bzogJ3JldmVyc2UnLFxuICAgIGZsaXA6ICdmbGlwVmFsdWVzJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHdlZW4gZXh0ZW5kcyBBY3Rpb24ge1xuICAgIHN0YXJ0KCkge1xuICAgICAgICBzdXBlci5zdGFydCgpO1xuICAgICAgICB0aGlzLmVsYXBzZWQgPSAwO1xuICAgICAgICB0aGlzLmZsaXBDb3VudCA9IHRoaXMueW95b0NvdW50ID0gdGhpcy5sb29wQ291bnQgPSAwO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG9uVXBkYXRlKHR3ZWVuLCBmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgICAgIGNvbnN0IHByb2dyZXNzVGFyZ2V0ID0gKHRoaXMucGxheURpcmVjdGlvbiA9PT0gMSkgPyAxIDogMDtcblxuICAgICAgICB0aGlzLmVuZGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5lbGFwc2VkICs9IChlbGFwc2VkICogdGhpcy5kaWxhdGUpICogdGhpcy5wbGF5RGlyZWN0aW9uO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gdGhpcy52YWx1ZUtleXNbaV07XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG5cbiAgICAgICAgICAgIGxldCBwcm9ncmVzcyA9IHJlc3RyaWN0KGdldFByb2dyZXNzRnJvbVZhbHVlKHRoaXMuZWxhcHNlZCAtIHZhbHVlLmRlbGF5LCAwLCB2YWx1ZS5kdXJhdGlvbiksIDAsIDEpO1xuXG4gICAgICAgICAgICAvLyBNYXJrIFR3ZWVuIGFzIE5PVCBlbmRlZCBpZiBzdGlsbCBpbiBwcm9ncmVzc1xuICAgICAgICAgICAgaWYgKHByb2dyZXNzICE9PSBwcm9ncmVzc1RhcmdldCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5kZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU3RlcCBwcm9ncmVzcyBpZiB3ZSdyZSBzdGVwcGluZ1xuICAgICAgICAgICAgaWYgKHZhbHVlLnN0ZXBzKSB7XG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3MgPSBzdGVwUHJvZ3Jlc3MocHJvZ3Jlc3MsIHZhbHVlLnN0ZXBzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRWFzZSBwcm9ncmVzc1xuICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IGVhc2UocHJvZ3Jlc3MsIHZhbHVlLmZyb20sIHZhbHVlLnRvLCB2YWx1ZS5lYXNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uRnJhbWVFbmQoKSB7XG4gICAgICAgIGlmICh0aGlzLmVuZGVkKSB7XG4gICAgICAgICAgICBsZXQgc3RlcFRha2VuID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBORVhUX1NURVBTKSB7XG4gICAgICAgICAgICAgICAgaWYgKE5FWFRfU1RFUFMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXhTdGVwcyA9IHRoaXNba2V5XTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAobWF4U3RlcHMgPT09IHRydWUgfHwgKGlzTnVtKG1heFN0ZXBzKSAmJiBtYXhTdGVwcyA+IHRoaXNba2V5ICsgQ09VTlRdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1trZXkgKyBDT1VOVF0rKztcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXBUYWtlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW05FWFRfU1RFUFNba2V5XV0oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFzdGVwVGFrZW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZsaXBWYWx1ZXMoKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMudmFsdWVzO1xuXG4gICAgICAgIHRoaXMuZWxhcHNlZCA9IHRoaXMuZHVyYXRpb24gLSB0aGlzLmVsYXBzZWQ7XG5cbiAgICAgICAgZm9yIChsZXQga2V5IGluIHZhbHVlcykge1xuICAgICAgICAgICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB2YWx1ZXNba2V5XTtcbiAgICAgICAgICAgICAgICBbdmFsdWUudG8sIHZhbHVlLmZyb21dID0gW3ZhbHVlLmZyb20sIHZhbHVlLnRvXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJldmVyc2UoKSB7XG4gICAgICAgIHRoaXMucGxheURpcmVjdGlvbiAqPSAtMTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmVzdGFydCgpIHtcbiAgICAgICAgdGhpcy5lbGFwc2VkID0gKHRoaXMucGxheURpcmVjdGlvbiA9PT0gMSkgPyAwIDogdGhpcy5kdXJhdGlvbjtcbiAgICAgICAgdGhpcy5zdGFydGVkID0gY3VycmVudFRpbWUoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2Vlayhwcm9ncmVzcykge1xuICAgICAgICB0aGlzLnNlZWtUaW1lKHRoaXMuZHVyYXRpb24gKiBwcm9ncmVzcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNlZWtUaW1lKGVsYXBzZWQpIHtcbiAgICAgICAgdGhpcy5vbmNlKCk7XG4gICAgICAgIHRoaXMuZWxhcHNlZCA9IGVsYXBzZWQ7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN1cGVyLmdldERlZmF1bHRQcm9wcygpLFxuICAgICAgICAgICAgYmxlbmQ6IHRydWUsXG4gICAgICAgICAgICBkZWxheTogMCxcbiAgICAgICAgICAgIGRpbGF0ZTogMSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgICAgICAgICBsb29wOiBmYWxzZSxcbiAgICAgICAgICAgIHlveW86IGZhbHNlLFxuICAgICAgICAgICAgZmxpcDogZmFsc2UsXG4gICAgICAgICAgICBwbGF5RGlyZWN0aW9uOiAxLFxuICAgICAgICAgICAgZW5kZWQ6IGZhbHNlLFxuICAgICAgICAgICAgZWxhcHNlZDogMFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldERlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN1cGVyLmdldERlZmF1bHRWYWx1ZSgpLFxuICAgICAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgICAgICBkdXJhdGlvbjogMzAwLFxuICAgICAgICAgICAgZWFzZTogZWFzaW5nLmVhc2VPdXQsXG4gICAgICAgICAgICBlbGFwc2VkOiAwLFxuICAgICAgICAgICAgc3RhZ2dlcjogMCxcbiAgICAgICAgICAgIHN0ZXBzOiAwLFxuICAgICAgICAgICAgdG86IDAsXG4gICAgICAgICAgICByb3VuZDogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXREZWZhdWx0VmFsdWVQcm9wKCkge1xuICAgICAgICByZXR1cm4gJ3RvJztcbiAgICB9XG59XG4iXX0=

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.setGlobalDilation = undefined;
	
	var _utils = __webpack_require__(2);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wcm9jZXNzL3RpbWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQSxJQUFNLFdBQVcsR0FBRyxFQUFFLENBQUM7O0FBRXZCLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQztBQUNoQixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUM7QUFDbkIsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDOztrQkFFRjtBQUNYLFVBQU0sRUFBRSxVQUFDLFVBQVUsRUFBSztBQUNwQixlQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxPQUFPLEVBQUUsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDO0FBQzlFLGVBQU8sR0FBRyxVQUFVLENBQUM7S0FDeEI7O0FBRUQsU0FBSyxFQUFFO2VBQU0sT0FBTyxHQUFHLFdBZGxCLFdBQVcsR0Fjb0I7S0FBQTs7QUFFcEMsY0FBVSxFQUFFO2VBQU0sT0FBTztLQUFBO0NBQzVCO0FBRU0sSUFBTSxpQkFBaUIsV0FBakIsaUJBQWlCLEdBQUcsVUFBQyxXQUFXO1dBQUssUUFBUSxHQUFHLFdBQVc7Q0FBQSxDQUFDIiwiZmlsZSI6InRpbWVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0UGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3VycmVudFRpbWUgfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuXG5jb25zdCBNQVhfRUxBUFNFRCA9IDMzO1xuXG5sZXQgY3VycmVudCA9IDA7XG5sZXQgZWxhcHNlZCA9IDE2Ljc7XG5sZXQgZGlsYXRpb24gPSAxO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgdXBkYXRlOiAoZnJhbWVzdGFtcCkgPT4ge1xuICAgICAgICBlbGFwc2VkID0gTWF0aC5tYXgoTWF0aC5taW4oZnJhbWVzdGFtcCAtIGN1cnJlbnQsIE1BWF9FTEFQU0VEKSwgMSkgKiBkaWxhdGlvbjtcbiAgICAgICAgY3VycmVudCA9IGZyYW1lc3RhbXA7XG4gICAgfSxcblxuICAgIHN0YXJ0OiAoKSA9PiBjdXJyZW50ID0gY3VycmVudFRpbWUoKSxcblxuICAgIGdldEVsYXBzZWQ6ICgpID0+IGVsYXBzZWRcbn07XG5cbmV4cG9ydCBjb25zdCBzZXRHbG9iYWxEaWxhdGlvbiA9IChuZXdEaWxhdGlvbikgPT4gZGlsYXRpb24gPSBuZXdEaWxhdGlvbjsiXX0=

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _Action2 = __webpack_require__(3);
	
	var _Action3 = _interopRequireDefault(_Action2);
	
	var _calc = __webpack_require__(20);
	
	var _utils = __webpack_require__(2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Physics = (function (_Action) {
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
	
	            // Check if value has changed
	            if (value.current !== previousValue || Math.abs(value.velocity) >= value.stopSpeed || value.spring && value.current !== value.to) {
	                this.hasChanged = true;
	            }
	        }
	    };
	
	    Physics.prototype.onFrameEnd = function onFrameEnd() {
	        if (this.autoEnd) {
	            this.inactiveFrames = this.hasChanged ? 1 : this.inactiveFrames + 1;
	
	            if (this.inactiveFrames >= this.maxInactiveFrames) {
	                this.stop();
	            }
	        }
	    };
	
	    /*
	        # Get default Simulate props
	         @return [object]
	    */
	
	    Physics.prototype.getDefaultProps = function getDefaultProps() {
	        return _extends({}, _Action.prototype.getDefaultProps.call(this), {
	            autoEnd: true,
	            maxInactiveFrames: 3
	        });
	    };
	
	    /*
	        # Get default Simulate value props
	         @return [object]
	    */
	
	    Physics.prototype.getDefaultValue = function getDefaultValue() {
	        return _extends({}, _Action.prototype.getDefaultValue.call(this), {
	            acceleration: 0, // [number]: Acceleration to apply to value, in units per second
	            bounce: 0, // [number]: Factor to multiply velocity by on bounce
	            spring: 0, // [number]: Spring strength during 'string'
	            stopSpeed: 0.0001, // [number]: Stop simulation under this speed
	            friction: 0 // [number]: Friction to apply per frame, 0-1
	        });
	    };
	
	    /*
	        # Get default Simulate value property name
	        ## Set values to this when a `value` is not provided as an object
	         @return [string]
	    */
	
	    Physics.prototype.getDefaultValueProp = function getDefaultValueProp() {
	        return 'velocity';
	    };
	
	    return Physics;
	})(_Action3.default);
	
	exports.default = Physics;
	//# sourceMappingURL=data:application/json;base64,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LENBQUM7QUFDVCxrQkFBTSxFQUFFLENBQUM7QUFDVCxxQkFBUyxFQUFFLE1BQU07QUFDakIsb0JBQVEsRUFBRSxDQUFDO0FBQUEsV0FDYjtLQUNMOzs7Ozs7OztBQTNFZ0IsV0FBTyxXQW1GeEIsbUJBQW1CLGtDQUFHO0FBQ2xCLGVBQU8sVUFBVSxDQUFDO0tBQ3JCOztXQXJGZ0IsT0FBTzs7O2tCQUFQLE9BQU8iLCJmaWxlIjoiUGh5c2ljcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dFBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY3Rpb24gZnJvbSAnLi9BY3Rpb24nO1xuaW1wb3J0IHsgc3BlZWRQZXJGcmFtZSB9IGZyb20gJy4uL2luYy9jYWxjJztcbmltcG9ydCB7IGlzTnVtIH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGh5c2ljcyBleHRlbmRzIEFjdGlvbiB7XG5cbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgICAgICB0aGlzLmluYWN0aXZlRnJhbWVzID0gMDtcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVzVmVsb2NpdHkgPSB0cnVlO1xuICAgIH1cblxuICAgIG9uVXBkYXRlKHBoeXNpY3MsIGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gZmFsc2U7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSB0aGlzLnZhbHVlS2V5c1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcbiAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzVmFsdWUgPSB2YWx1ZS5wcmV2O1xuXG4gICAgICAgICAgICAvLyBBcHBseSBhY2NlbGVyYXRpb25cbiAgICAgICAgICAgIHZhbHVlLnZlbG9jaXR5ICs9IHNwZWVkUGVyRnJhbWUodmFsdWUuYWNjZWxlcmF0aW9uLCBlbGFwc2VkKTtcblxuICAgICAgICAgICAgLy8gQXBwbHkgZnJpY3Rpb25cbiAgICAgICAgICAgIHZhbHVlLnZlbG9jaXR5ICo9ICgxIC0gdmFsdWUuZnJpY3Rpb24pICoqIChlbGFwc2VkIC8gMTAwKTtcblxuICAgICAgICAgICAgLy8gQXBwbHkgc3ByaW5nXG4gICAgICAgICAgICBpZiAodmFsdWUuc3ByaW5nICYmIGlzTnVtKHZhbHVlLnRvKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlVG9UYXJnZXQgPSB2YWx1ZS50byAtIHZhbHVlLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgdmFsdWUudmVsb2NpdHkgKz0gZGlzdGFuY2VUb1RhcmdldCAqIHNwZWVkUGVyRnJhbWUodmFsdWUuc3ByaW5nLCBlbGFwc2VkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQXBwbHkgbGF0ZXN0IHZlbG9jaXR5XG4gICAgICAgICAgICB2YWx1ZS5jdXJyZW50ICs9IHNwZWVkUGVyRnJhbWUodmFsdWUudmVsb2NpdHksIGVsYXBzZWQpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBDaGVjayBpZiB2YWx1ZSBoYXMgY2hhbmdlZFxuICAgICAgICAgICAgaWYgKHZhbHVlLmN1cnJlbnQgIT09IHByZXZpb3VzVmFsdWUgfHwgTWF0aC5hYnModmFsdWUudmVsb2NpdHkpID49IHZhbHVlLnN0b3BTcGVlZCB8fCAodmFsdWUuc3ByaW5nICYmIHZhbHVlLmN1cnJlbnQgIT09IHZhbHVlLnRvKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkZyYW1lRW5kKCkge1xuICAgICAgICBpZiAodGhpcy5hdXRvRW5kKSB7XG4gICAgICAgICAgICB0aGlzLmluYWN0aXZlRnJhbWVzID0gdGhpcy5oYXNDaGFuZ2VkID8gMSA6IHRoaXMuaW5hY3RpdmVGcmFtZXMgKyAxO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5pbmFjdGl2ZUZyYW1lcyA+PSB0aGlzLm1heEluYWN0aXZlRnJhbWVzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIEdldCBkZWZhdWx0IFNpbXVsYXRlIHByb3BzXG5cbiAgICAgICAgQHJldHVybiBbb2JqZWN0XVxuICAgICovXG4gICAgZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3VwZXIuZ2V0RGVmYXVsdFByb3BzKCksXG4gICAgICAgICAgICBhdXRvRW5kOiB0cnVlLFxuICAgICAgICAgICAgbWF4SW5hY3RpdmVGcmFtZXM6IDNcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIEdldCBkZWZhdWx0IFNpbXVsYXRlIHZhbHVlIHByb3BzXG5cbiAgICAgICAgQHJldHVybiBbb2JqZWN0XVxuICAgICovXG4gICAgZ2V0RGVmYXVsdFZhbHVlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3VwZXIuZ2V0RGVmYXVsdFZhbHVlKCksXG4gICAgICAgICAgICBhY2NlbGVyYXRpb246IDAsIC8vIFtudW1iZXJdOiBBY2NlbGVyYXRpb24gdG8gYXBwbHkgdG8gdmFsdWUsIGluIHVuaXRzIHBlciBzZWNvbmRcbiAgICAgICAgICAgIGJvdW5jZTogMCwgLy8gW251bWJlcl06IEZhY3RvciB0byBtdWx0aXBseSB2ZWxvY2l0eSBieSBvbiBib3VuY2VcbiAgICAgICAgICAgIHNwcmluZzogMCwgLy8gW251bWJlcl06IFNwcmluZyBzdHJlbmd0aCBkdXJpbmcgJ3N0cmluZydcbiAgICAgICAgICAgIHN0b3BTcGVlZDogMC4wMDAxLCAvLyBbbnVtYmVyXTogU3RvcCBzaW11bGF0aW9uIHVuZGVyIHRoaXMgc3BlZWRcbiAgICAgICAgICAgIGZyaWN0aW9uOiAwIC8vIFtudW1iZXJdOiBGcmljdGlvbiB0byBhcHBseSBwZXIgZnJhbWUsIDAtMVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgICMgR2V0IGRlZmF1bHQgU2ltdWxhdGUgdmFsdWUgcHJvcGVydHkgbmFtZVxuICAgICAgICAjIyBTZXQgdmFsdWVzIHRvIHRoaXMgd2hlbiBhIGB2YWx1ZWAgaXMgbm90IHByb3ZpZGVkIGFzIGFuIG9iamVjdFxuXG4gICAgICAgIEByZXR1cm4gW3N0cmluZ11cbiAgICAqL1xuICAgIGdldERlZmF1bHRWYWx1ZVByb3AoKSB7XG4gICAgICAgIHJldHVybiAndmVsb2NpdHknO1xuICAgIH1cbn1cbiJdfQ==

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _Action2 = __webpack_require__(3);
	
	var _Action3 = _interopRequireDefault(_Action2);
	
	var _Pointer = __webpack_require__(36);
	
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
	
	var Track = (function (_Action) {
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
	                    value.current = this.input.state[key];
	                } else {
	                    value.current = value.origin + this.inputOffset[key];
	                }
	
	                // Smooth value if we have smoothing
	                if (value.smooth) {
	                    value.current = (0, _calc.smooth)(value.current, value.prev, elapsed, value.smooth);
	                }
	            }
	        }
	    };
	
	    Track.prototype.getDefaultValue = function getDefaultValue() {
	        return _extends({}, _Action.prototype.getDefaultValue.call(this), {
	            amp: 1,
	            escapeAmp: 0,
	            direct: false
	        });
	    };
	
	    return Track;
	})(_Action3.default);
	
	exports.default = Track;
	//# sourceMappingURL=data:application/json;base64,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QixNQUFNLEVBMEQ0QixLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDNUU7YUFDSjtTQUNKO0tBQ0o7O0FBdENnQixTQUFLLFdBd0N0QixlQUFlLDhCQUFHO0FBQ2QsNEJBQ08sa0JBQU0sZUFBZSxLQUFBLE1BQUU7QUFDMUIsZUFBRyxFQUFFLENBQUM7QUFDTixxQkFBUyxFQUFFLENBQUM7QUFDWixrQkFBTSxFQUFFLEtBQUs7V0FDZjtLQUNMOztXQS9DZ0IsS0FBSzs7O2tCQUFMLEtBQUsiLCJmaWxlIjoiVHJhY2suanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHRQZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWN0aW9uIGZyb20gJy4vQWN0aW9uJztcbmltcG9ydCBQb2ludGVyIGZyb20gJy4uL2lucHV0L1BvaW50ZXInO1xuaW1wb3J0IHsgc21vb3RoLCBvZmZzZXQgfSBmcm9tICcuLi9pbmMvY2FsYyc7XG5cbi8qXG4gICAgU2NyYXBlIHgveSBjb29yZGluYXRlcyBmcm9tIHByb3ZpZGVkIGV2ZW50XG5cbiAgICBAcGFyYW0gW2V2ZW50XVxuICAgIEByZXR1cm4gW29iamVjdF1cbiovXG5jb25zdCBtb3VzZUV2ZW50VG9Qb2ludCA9IChlKSA9PiAoe1xuICAgIHg6IGUucGFnZVgsXG4gICAgeTogZS5wYWdlWVxufSk7XG5cbmNvbnN0IHRvdWNoRXZlbnRUb1BvaW50ID0gKHsgY2hhbmdlZFRvdWNoZXMgfSkgPT4gKHtcbiAgICB4OiBjaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYLFxuICAgIHk6IGNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFlcbn0pO1xuXG5jb25zdCBjcmVhdGVQb2ludGVyID0gKGUpID0+IGUudG91Y2hlcyA/XG4gICAgbmV3IFBvaW50ZXIodG91Y2hFdmVudFRvUG9pbnQoZSksICd0b3VjaG1vdmUnLCB0b3VjaEV2ZW50VG9Qb2ludCkgOiBcbiAgICBuZXcgUG9pbnRlcihtb3VzZUV2ZW50VG9Qb2ludChlKSwgJ21vdXNlbW92ZScsIG1vdXNlRXZlbnRUb1BvaW50KTtcblxuY29uc3QgZ2V0QWN0dWFsRXZlbnQgPSAoZSkgPT4gZS5vcmlnaW5hbEV2ZW50IHx8IGU7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYWNrIGV4dGVuZHMgQWN0aW9uIHtcbiAgICBzdGFydChpbnB1dCkge1xuICAgICAgICBzdXBlci5zdGFydCgpO1xuXG4gICAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICAgICAgdGhpcy5pbnB1dCA9IGlucHV0LnN0YXRlID8gaW5wdXQgOiBjcmVhdGVQb2ludGVyKGdldEFjdHVhbEV2ZW50KGlucHV0KSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlucHV0T2Zmc2V0ID0ge307XG4gICAgICAgIHRoaXMuaW5wdXRPcmlnaW4gPSB7IC4uLnRoaXMuaW5wdXQuc3RhdGUgfTtcbiAgICAgICAgdGhpcy5pbnB1dC5zdGFydCgpO1xuICAgIH1cblxuICAgIHN0b3AoKSB7XG4gICAgICAgIHN1cGVyLnN0b3AoKTtcbiAgICAgICAgdGhpcy5pbnB1dC5zdG9wKCk7XG4gICAgfVxuXG4gICAgb25VcGRhdGUodHJhY2ssIGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgICAgICAgdGhpcy5pbnB1dE9mZnNldCA9IG9mZnNldCh0aGlzLmlucHV0T3JpZ2luLCB0aGlzLmlucHV0LnN0YXRlKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHRoaXMudmFsdWVLZXlzW2ldO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5pbnB1dE9mZnNldC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5kaXJlY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IHRoaXMuaW5wdXQuc3RhdGVba2V5XTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gdmFsdWUub3JpZ2luICsgdGhpcy5pbnB1dE9mZnNldFtrZXldO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFNtb290aCB2YWx1ZSBpZiB3ZSBoYXZlIHNtb290aGluZ1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5zbW9vdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IHNtb290aCh2YWx1ZS5jdXJyZW50LCB2YWx1ZS5wcmV2LCBlbGFwc2VkLCB2YWx1ZS5zbW9vdGgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldERlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN1cGVyLmdldERlZmF1bHRWYWx1ZSgpLFxuICAgICAgICAgICAgYW1wOiAxLFxuICAgICAgICAgICAgZXNjYXBlQW1wOiAwLFxuICAgICAgICAgICAgZGlyZWN0OiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cbn1cbiJdfQ==

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _loop = __webpack_require__(37);
	
	var loop = _interopRequireWildcard(_loop);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Process = (function () {
	    /*
	        [object]: Properties
	    */
	
	    function Process(props) {
	        var _this = this;
	
	        _classCallCheck(this, Process);
	
	        this.id = loop.getProcessId();
	
	        this._onCleanup = function () {
	            _this.stop();
	            _this.onCleanup = undefined;
	        };
	
	        this._onActivate = function () {
	            return _this.onCleanup = _this._onCleanup;
	        };
	
	        this.set(this.getDefaultProps());
	        this.set(props);
	
	        this.isActive = false;
	    }
	
	    Process.prototype.set = function set(props) {
	        for (var key in props) {
	            if (props.hasOwnProperty(key)) {
	                this[key] = props[key];
	            }
	        }
	
	        return this;
	    };
	
	    Process.prototype.start = function start() {
	        loop.activate(this.id, this);
	
	        this.onCleanup = this.onActivate = undefined;
	
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
	
	    Process.prototype.stop = function stop() {
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
	
	    Process.prototype.once = function once() {
	        this.start();
	        this.onActivate = this._onActivate;
	        return this;
	    };
	
	    /*
	        # Get default Action properties
	         @return [object]
	    */
	
	    Process.prototype.getDefaultProps = function getDefaultProps() {
	        return {};
	    };
	
	    /*
	        # Extend this Process with new properties
	        ## Returns new instance of this Process's `prototype` with existing and new properties
	         @param [object] (optional)
	        @return [Process]
	    */
	
	    Process.prototype.inherit = function inherit(props) {
	        var id = this.id;
	
	        var inheritedProps = _objectWithoutProperties(this, ['id']);
	
	        var newProcess = new this.constructor(inheritedProps);
	        return newProcess.set(props);
	    };
	
	    return Process;
	})();
	
	exports.default = Process;
	//# sourceMappingURL=data:application/json;base64,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b3VyY2VSb290IjoiL1VzZXJzL01hdHRQZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBsb29wIGZyb20gJy4vbG9vcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2Nlc3Mge1xuICAgIC8qXG4gICAgICAgIFtvYmplY3RdOiBQcm9wZXJ0aWVzXG4gICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICB0aGlzLmlkID0gbG9vcC5nZXRQcm9jZXNzSWQoKTtcblxuICAgICAgICB0aGlzLl9vbkNsZWFudXAgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgICAgIHRoaXMub25DbGVhbnVwID0gdW5kZWZpbmVkO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX29uQWN0aXZhdGUgPSAoKSA9PiB0aGlzLm9uQ2xlYW51cCA9IHRoaXMuX29uQ2xlYW51cDtcblxuICAgICAgICB0aGlzLnNldCh0aGlzLmdldERlZmF1bHRQcm9wcygpKTtcbiAgICAgICAgdGhpcy5zZXQocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBzZXQocHJvcHMpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHByb3BzKSB7XG4gICAgICAgICAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IHByb3BzW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgbG9vcC5hY3RpdmF0ZSh0aGlzLmlkLCB0aGlzKTtcblxuICAgICAgICB0aGlzLm9uQ2xlYW51cCA9IHRoaXMub25BY3RpdmF0ZSA9IHVuZGVmaW5lZDtcblxuICAgICAgICAvLyBQcml2YXRlIGBvblN0YXJ0YFxuICAgICAgICBpZiAodGhpcy5fb25TdGFydCkge1xuICAgICAgICAgICAgdGhpcy5fb25TdGFydCh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFB1YmxpYyBgb25TdGFydGBcbiAgICAgICAgaWYgKHRoaXMub25TdGFydCkge1xuICAgICAgICAgICAgdGhpcy5vblN0YXJ0KHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc3RvcCgpIHtcbiAgICAgICAgbG9vcC5kZWFjdGl2YXRlKHRoaXMuaWQpO1xuXG4gICAgICAgIC8vIFByaXZhdGUgYG9uU3RvcGBcbiAgICAgICAgaWYgKHRoaXMuX29uU3RvcCkge1xuICAgICAgICAgICAgdGhpcy5fb25TdG9wKHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUHVibGljIGBvblN0b3BgXG4gICAgICAgIGlmICh0aGlzLm9uU3RvcCkge1xuICAgICAgICAgICAgdGhpcy5vblN0b3AodGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBvbmNlKCkge1xuICAgICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgICAgIHRoaXMub25BY3RpdmF0ZSA9IHRoaXMuX29uQWN0aXZhdGU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgICMgR2V0IGRlZmF1bHQgQWN0aW9uIHByb3BlcnRpZXNcblxuICAgICAgICBAcmV0dXJuIFtvYmplY3RdXG4gICAgKi9cbiAgICBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIEV4dGVuZCB0aGlzIFByb2Nlc3Mgd2l0aCBuZXcgcHJvcGVydGllc1xuICAgICAgICAjIyBSZXR1cm5zIG5ldyBpbnN0YW5jZSBvZiB0aGlzIFByb2Nlc3MncyBgcHJvdG90eXBlYCB3aXRoIGV4aXN0aW5nIGFuZCBuZXcgcHJvcGVydGllc1xuXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XSAob3B0aW9uYWwpXG4gICAgICAgIEByZXR1cm4gW1Byb2Nlc3NdXG4gICAgKi9cbiAgICBpbmhlcml0KHByb3BzKSB7XG4gICAgICAgIGNvbnN0IHsgaWQsIC4uLmluaGVyaXRlZFByb3BzIH0gPSB0aGlzO1xuICAgICAgICBjb25zdCBuZXdQcm9jZXNzID0gbmV3IHRoaXMuY29uc3RydWN0b3IoaW5oZXJpdGVkUHJvcHMpO1xuICAgICAgICByZXR1cm4gbmV3UHJvY2Vzcy5zZXQocHJvcHMpO1xuICAgIH1cbn0iXX0=

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _Process2 = __webpack_require__(9);
	
	var _Process3 = _interopRequireDefault(_Process2);
	
	var _utils = __webpack_require__(2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Input = (function (_Process) {
	    _inherits(Input, _Process);
	
	    function Input(initialValues, poll) {
	        _classCallCheck(this, Input);
	
	        var _this = _possibleConstructorReturn(this, _Process.call(this));
	
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
	})(_Process3.default);
	
	exports.default = Input;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbnB1dC9JbnB1dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUdxQixLQUFLO2NBQUwsS0FBSzs7QUFDdEIsYUFEaUIsS0FBSyxDQUNWLGFBQWEsRUFBRSxJQUFJLEVBQUU7OEJBRGhCLEtBQUs7O3FEQUVsQixtQkFBTzs7QUFDUCxjQUFLLEtBQUssR0FBRyxhQUFhLENBQUM7O0FBRTNCLFlBQUksV0FQSCxNQUFNLEVBT0ksSUFBSSxDQUFDLEVBQUU7QUFDZCxrQkFBSyxZQUFZLEdBQUc7dUJBQU0sTUFBSyxNQUFNLENBQUMsTUFBSyxJQUFJLEVBQUUsQ0FBQzthQUFBLENBQUM7U0FDdEQ7O0tBQ0o7Ozs7OztBQUFBO0FBUmdCLFNBQUssV0FldEIsTUFBTSxtQkFBQyxLQUFLLEVBQUU7QUFDVixZQUFJLENBQUMsS0FBSyxnQkFBUSxJQUFJLENBQUMsS0FBSyxFQUFLLEtBQUssQ0FBRSxDQUFDO0tBQzVDOztXQWpCZ0IsS0FBSzs7O2tCQUFMLEtBQUsiLCJmaWxlIjoiSW5wdXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHRQZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvY2VzcyBmcm9tICcuLi9wcm9jZXNzL1Byb2Nlc3MnO1xuaW1wb3J0IHsgaXNGdW5jIH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXQgZXh0ZW5kcyBQcm9jZXNzIHtcbiAgICBjb25zdHJ1Y3Rvcihpbml0aWFsVmFsdWVzLCBwb2xsKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBpbml0aWFsVmFsdWVzO1xuXG4gICAgICAgIGlmIChpc0Z1bmMocG9sbCkpIHtcbiAgICAgICAgICAgIHRoaXMub25GcmFtZVN0YXJ0ID0gKCkgPT4gdGhpcy5sYXRlc3QodGhpcy5wb2xsKCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgTWFudWFsbHkgYWRkIGxhdGVzdCB2YWx1ZXNcblxuICAgICAgICBAcGFyYW0gW29iamVjdF1cbiAgICAqL1xuICAgIGxhdGVzdChwcm9wcykge1xuICAgICAgICB0aGlzLnN0YXRlID0geyAuLi50aGlzLnN0YXRlLCAuLi5wcm9wcyB9O1xuICAgIH1cbn1cbiJdfQ==

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = stagger;
	
	var _Tween = __webpack_require__(5);
	
	var _Tween2 = _interopRequireDefault(_Tween);
	
	var _presetEasing = __webpack_require__(19);
	
	var _presetEasing2 = _interopRequireDefault(_presetEasing);
	
	var _utils = __webpack_require__(2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var DEFAULT_INTERVAL = 100;
	
	function stagger(array, callback, props) {
	    var arrayLength = array.length;
	    var propsIsInterval = (0, _utils.isNum)(props);
	    var interval = propsIsInterval ? props : props.interval || DEFAULT_INTERVAL;
	    var prevIndex = -1;
	
	    var staggerTween = new _Tween2.default({
	        duration: interval * arrayLength,
	        values: {
	            i: {
	                from: 0,
	                to: arrayLength - 1,
	                round: true,
	                ease: propsIsInterval ? _presetEasing2.default.linear : props.ease || _presetEasing2.default.linear
	            }
	        },
	        onRender: function (tween) {
	            var i = tween.state.i;
	            var gapIndex = prevIndex + 1;
	
	            for (; gapIndex <= i; gapIndex++) {
	                callback(array[gapIndex], gapIndex);
	            }
	
	            prevIndex = i;
	        },
	        onComplete: propsIsInterval ? undefined : props.onComplete
	    });
	
	    staggerTween.start();
	
	    return staggerTween;
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvc3RhZ2dlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7a0JBTXdCLE9BQU87Ozs7Ozs7Ozs7Ozs7O0FBRi9CLElBQU0sZ0JBQWdCLEdBQUcsR0FBRyxDQUFDOztBQUVkLFNBQVMsT0FBTyxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO0FBQ3BELFFBQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7QUFDakMsUUFBTSxlQUFlLEdBQUcsV0FObkIsS0FBSyxFQU1vQixLQUFLLENBQUMsQ0FBQztBQUNyQyxRQUFNLFFBQVEsR0FBRyxlQUFlLEdBQUcsS0FBSyxHQUFHLEtBQUssQ0FBQyxRQUFRLElBQUksZ0JBQWdCLENBQUM7QUFDOUUsUUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUM7O0FBRW5CLFFBQU0sWUFBWSxHQUFHLG9CQUFVO0FBQzNCLGdCQUFRLEVBQUUsUUFBUSxHQUFHLFdBQVc7QUFDaEMsY0FBTSxFQUFFO0FBQ0osYUFBQyxFQUFFO0FBQ0Msb0JBQUksRUFBRSxDQUFDO0FBQ1Asa0JBQUUsRUFBRSxXQUFXLEdBQUcsQ0FBQztBQUNuQixxQkFBSyxFQUFFLElBQUk7QUFDWCxvQkFBSSxFQUFFLGVBQWUsR0FBRyx1QkFBTyxNQUFNLEdBQUcsS0FBSyxDQUFDLElBQUksSUFBSSx1QkFBTyxNQUFNO2FBQ3RFO1NBQ0o7QUFDRCxnQkFBUSxFQUFFLFVBQUMsS0FBSyxFQUFLO0FBQ2pCLGdCQUFNLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUN4QixnQkFBSSxRQUFRLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQzs7QUFFN0IsbUJBQU8sUUFBUSxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsRUFBRTtBQUM5Qix3QkFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQzthQUN2Qzs7QUFFRCxxQkFBUyxHQUFHLENBQUMsQ0FBQztTQUNqQjtBQUNELGtCQUFVLEVBQUUsZUFBZSxHQUFHLFNBQVMsR0FBRyxLQUFLLENBQUMsVUFBVTtLQUM3RCxDQUFDLENBQUM7O0FBRUgsZ0JBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7QUFFckIsV0FBTyxZQUFZLENBQUM7Q0FDdkIiLCJmaWxlIjoic3RhZ2dlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dFBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUd2VlbiBmcm9tICcuLi9hY3Rpb25zL1R3ZWVuJztcbmltcG9ydCBlYXNpbmcgZnJvbSAnLi4vYWN0aW9ucy9lYXNpbmcvcHJlc2V0LWVhc2luZyc7XG5pbXBvcnQgeyBpc051bSB9IGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCBERUZBVUxUX0lOVEVSVkFMID0gMTAwO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFnZ2VyKGFycmF5LCBjYWxsYmFjaywgcHJvcHMpIHtcbiAgICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgICBjb25zdCBwcm9wc0lzSW50ZXJ2YWwgPSBpc051bShwcm9wcyk7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBwcm9wc0lzSW50ZXJ2YWwgPyBwcm9wcyA6IHByb3BzLmludGVydmFsIHx8IERFRkFVTFRfSU5URVJWQUw7XG4gICAgbGV0IHByZXZJbmRleCA9IC0xO1xuXG4gICAgY29uc3Qgc3RhZ2dlclR3ZWVuID0gbmV3IFR3ZWVuKHtcbiAgICAgICAgZHVyYXRpb246IGludGVydmFsICogYXJyYXlMZW5ndGgsXG4gICAgICAgIHZhbHVlczoge1xuICAgICAgICAgICAgaToge1xuICAgICAgICAgICAgICAgIGZyb206IDAsXG4gICAgICAgICAgICAgICAgdG86IGFycmF5TGVuZ3RoIC0gMSxcbiAgICAgICAgICAgICAgICByb3VuZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBlYXNlOiBwcm9wc0lzSW50ZXJ2YWwgPyBlYXNpbmcubGluZWFyIDogcHJvcHMuZWFzZSB8fCBlYXNpbmcubGluZWFyXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9uUmVuZGVyOiAodHdlZW4pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGkgPSB0d2Vlbi5zdGF0ZS5pO1xuICAgICAgICAgICAgbGV0IGdhcEluZGV4ID0gcHJldkluZGV4ICsgMTtcblxuICAgICAgICAgICAgZm9yICg7IGdhcEluZGV4IDw9IGk7IGdhcEluZGV4KyspIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhhcnJheVtnYXBJbmRleF0sIGdhcEluZGV4KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcHJldkluZGV4ID0gaTtcbiAgICAgICAgfSxcbiAgICAgICAgb25Db21wbGV0ZTogcHJvcHNJc0ludGVydmFsID8gdW5kZWZpbmVkIDogcHJvcHMub25Db21wbGV0ZVxuICAgIH0pO1xuXG4gICAgc3RhZ2dlclR3ZWVuLnN0YXJ0KCk7XG5cbiAgICByZXR1cm4gc3RhZ2dlclR3ZWVuO1xufSJdfQ==

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	exports.default = timeline;
	
	var _Tween = __webpack_require__(5);
	
	var _Tween2 = _interopRequireDefault(_Tween);
	
	var _presetEasing = __webpack_require__(19);
	
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
	    var elapsed = _ref.elapsed;
	    var timeline = _ref.timeline;
	    var timelineLength = _ref.timelineLength;
	
	    for (var i = 0; i < timelineLength; i++) {
	        var _tween = timeline[i];
	        var tweenTime = elapsed - _tween.from;
	
	        if (tweenTime > 0 && tweenTime < _tween.duration) {
	            _tween.fire(tweenTime);
	        }
	    }
	};
	
	function timeline(def) {
	    var props = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    var _analyze = analyze(def);
	
	    var totalTime = _analyze.totalTime;
	    var timeline = _analyze.timeline;
	
	    return new _Tween2.default(_extends({}, props, {
	        duration: totalTime,
	        ease: _presetEasing2.default.linear,
	        values: {
	            p: 1
	        },
	        timeline: timeline,
	        timelineLength: timeline.length,
	        onRender: setTweens
	    }));
	}
	//# sourceMappingURL=data:application/json;base64,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O0FBQ0osYUFBQyxFQUFFLENBQUM7U0FDUDtBQUNELGdCQUFRLEVBQUUsUUFBUTtBQUNsQixzQkFBYyxFQUFFLFFBQVEsQ0FBQyxNQUFNO0FBQy9CLGdCQUFRLEVBQUUsU0FBUztPQUNyQixDQUFDO0NBQ04iLCJmaWxlIjoidGltZWxpbmUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHRQZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHdlZW4gZnJvbSAnLi4vYWN0aW9ucy9Ud2Vlbic7XG5pbXBvcnQgZWFzaW5nIGZyb20gJy4uL2FjdGlvbnMvZWFzaW5nL3ByZXNldC1lYXNpbmcnO1xuaW1wb3J0IHsgcmVsYXRpdmVWYWx1ZSB9IGZyb20gJy4vY2FsYyc7XG5cbi8qXG4gICAgQHBhcmFtIFthcnJheV1cbiAgICAgICAgU2VxdWVudGlhbCBhcnJheSBvZiB0d2VlbnMsIGVhY2ggaXRlbSBjYW4gYmUgYSB0d2VlbiBvciBkZWZpbml0aW9uIG9iajpcblxuICAgICAgICBbXG4gICAgICAgICAgICBuZXcgVHdlZW4oKSxcbiAgICAgICAgICAgIHN0YWdnZXIoKSxcbiAgICAgICAgICAgIHRpbWVsaW5lKCksXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHdlZW46IG5ldyBUd2VlbigpLFxuICAgICAgICAgICAgICAgIGF0OiAxMDAsXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiBcIis9MTAwXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuKi9cbmNvbnN0IGFuYWx5emUgPSAoZGVmcykgPT4ge1xuICAgIGNvbnN0IHRpbWVsaW5lID0gW107XG4gICAgY29uc3QgbnVtRGVmcyA9IGRlZnMubGVuZ3RoO1xuICAgIGxldCBjdXJyZW50UGxheWhlYWQgPSAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1EZWZzOyBpKyspIHtcbiAgICAgICAgY29uc3QgZGVmID0gZGVmc1tpXTtcbiAgICAgICAgY29uc3QgZGVmSXNPYmogPSBkZWYudHdlZW4gPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIGNvbnN0IHR3ZWVuID0gKGRlZklzT2JqKSA/IGRlZi50d2VlbiA6IGRlZjtcblxuICAgICAgICBjdXJyZW50UGxheWhlYWQgKz0gKChkZWZJc09iaiAmJiBkZWYub2Zmc2V0KSA/XG4gICAgICAgICAgICBkZWYuYXQgfHwgcmVsYXRpdmVWYWx1ZShjdXJyZW50UGxheWhlYWQsIGRlZi5vZmZzZXQpIDogMCk7XG5cbiAgICAgICAgbGV0IGR1cmF0aW9uID0gMDtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHR3ZWVuLnZhbHVlcykge1xuICAgICAgICAgICAgaWYgKHR3ZWVuLnZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0d2Vlbi52YWx1ZXNba2V5XTtcbiAgICAgICAgICAgICAgICBkdXJhdGlvbiA9IE1hdGgubWF4KGR1cmF0aW9uLCB2YWx1ZS5kdXJhdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aW1lbGluZS5wdXNoKHtcbiAgICAgICAgICAgIGZyb206IGN1cnJlbnRQbGF5aGVhZCxcbiAgICAgICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgICAgICAgIGZpcmU6ICh0aW1lKSA9PiB0d2Vlbi5zZWVrVGltZSh0aW1lKVxuICAgICAgICB9KTtcblxuICAgICAgICBjdXJyZW50UGxheWhlYWQgKz0gdHdlZW4uZHVyYXRpb247XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgdG90YWxUaW1lOiBjdXJyZW50UGxheWhlYWQsIHRpbWVsaW5lIH07XG59O1xuXG5jb25zdCBzZXRUd2VlbnMgPSAoeyBlbGFwc2VkLCB0aW1lbGluZSwgdGltZWxpbmVMZW5ndGggfSkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGltZWxpbmVMZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB0d2VlbiA9IHRpbWVsaW5lW2ldO1xuICAgICAgICBjb25zdCB0d2VlblRpbWUgPSBlbGFwc2VkIC0gdHdlZW4uZnJvbTtcblxuICAgICAgICBpZiAodHdlZW5UaW1lID4gMCAmJiB0d2VlblRpbWUgPCB0d2Vlbi5kdXJhdGlvbikge1xuICAgICAgICAgICAgdHdlZW4uZmlyZSh0d2VlblRpbWUpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGltZWxpbmUoZGVmLCBwcm9wcyA9IHt9KSB7XG4gICAgY29uc3QgeyB0b3RhbFRpbWUsIHRpbWVsaW5lIH0gPSBhbmFseXplKGRlZik7XG5cbiAgICByZXR1cm4gbmV3IFR3ZWVuKHtcbiAgICAgICAgLi4ucHJvcHMsXG4gICAgICAgIGR1cmF0aW9uOiB0b3RhbFRpbWUsXG4gICAgICAgIGVhc2U6IGVhc2luZy5saW5lYXIsXG4gICAgICAgIHZhbHVlczoge1xuICAgICAgICAgICAgcDogMVxuICAgICAgICB9LFxuICAgICAgICB0aW1lbGluZTogdGltZWxpbmUsXG4gICAgICAgIHRpbWVsaW5lTGVuZ3RoOiB0aW1lbGluZS5sZW5ndGgsXG4gICAgICAgIG9uUmVuZGVyOiBzZXRUd2VlbnNcbiAgICB9KTtcbn0iXX0=

/***/ },
/* 13 */
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
	
	var Adapter = (function () {
	    function Adapter(element) {
	        _classCallCheck(this, Adapter);
	
	        this.element = element;
	        this.cache = {};
	        this.internalCache = {};
	    }
	
	    /*
	        Get element property
	         @param [string]: Key to read
	        @param [boolean]: If `true`, will override cached property
	    */
	
	    Adapter.prototype.get = function get(key, refresh) {
	        var mappedKey = this.mapStateKey(key);
	
	        if (refresh || !this.cache.hasOwnProperty(key)) {
	            return this.cache[key] = this.getter(mappedKey);
	        } else {
	            return this.cache[key];
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
	                this.cache[key] = this.internalCache[mappedKey] = props[key];
	            }
	        }
	
	        return this.setter(this.internalCache);
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
	})();
	
	exports.default = function (element) {
	    return new Adapter(element);
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2FkYXB0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQVlNLE9BQU87QUFDVCxhQURFLE9BQU8sQ0FDRyxPQUFPLEVBQUU7OEJBRG5CLE9BQU87O0FBRUwsWUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIsWUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7QUFDaEIsWUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7S0FDM0I7Ozs7Ozs7QUFBQTtBQUxDLFdBQU8sV0FhVCxHQUFHLGdCQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUU7QUFDZCxZQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDOztBQUV4QyxZQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO0FBQzVDLG1CQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNuRCxNQUFNO0FBQ0gsbUJBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUMxQjtLQUNKOzs7Ozs7O0FBckJDLFdBQU8sV0E0QlQsR0FBRyxnQkFBQyxLQUFLLEVBQUU7O0FBRVAsYUFBSyxJQUFJLEdBQUcsSUFBSSxLQUFLLEVBQUU7QUFDbkIsZ0JBQUksS0FBSyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtBQUMzQixvQkFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN4QyxvQkFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNoRTtTQUNKOztBQUVELGVBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7S0FDMUM7Ozs7OztBQXRDQyxXQUFPLFdBMkNULE1BQU0sbUJBQUMsR0FBRyxFQUFFO0FBQ1IsZUFBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQzVCOzs7Ozs7QUE3Q0MsV0FBTyxXQWtEVCxNQUFNLG1CQUFDLEtBQUssRUFBRTtBQUNWLGFBQUssSUFBSSxHQUFHLElBQUksS0FBSyxFQUFFO0FBQ25CLGdCQUFJLEtBQUssQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7QUFDM0Isb0JBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2xDO1NBQ0o7S0FDSjs7Ozs7Ozs7QUF4REMsV0FBTyxXQWdFVCxXQUFXLHdCQUFDLEdBQUcsRUFBRTtBQUNiLGVBQU8sQUFBQyxJQUFJLENBQUMsUUFBUSxHQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQztLQUM1RDs7Ozs7Ozs7QUFsRUMsV0FBTyxXQTBFVCxZQUFZLHlCQUFDLEdBQUcsRUFBRTtBQUNkLGVBQU8sQUFBQyxJQUFJLENBQUMsWUFBWSxHQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztLQUNqRjs7V0E1RUMsT0FBTzs7O2tCQStFRSxVQUFDLE9BQU87V0FBSyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUM7Q0FBQSIsImZpbGUiOiJhZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0UGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgICAjIEFkYXB0ZXIgY2xhc3NcbiAgICAjIyBQcm92aWRlcyBhIGdldHRlci9zZXR0ZXIgd3JhcHBlciBhbmQgcHJvcGVydHkgY2FjaGUgZm9yIGRpZmZlcmVudCBlbGVtZW50IHR5cGVzXG5cbiAgICBPdmVycmlkZSBgZ2V0dGVyYCBhbmQgYHNldHRlcmAgdG8gcmVpbXBsZW1lbnQgdGhlIGludGVyZmFjZSBmb3IgbmV3IGVsZW1lbnQgdHlwZXMuXG5cbiAgICBTZXQgYEV4dGVuZGVkLnByb3RvdHlwZS5zdGF0ZU1hcGAgYXMgYW4gb2JqZWN0IGtleS92YWx1ZSBtYXAgdG8gdHJhbnNsYXRlIGluY29taW5nIGtleXMgdG9cbiAgICBBUEktc3BlY2lmaWMga2V5cy4gRm9yIGluc3RhbmNlLCB7IHg6ICd0cmFuc2xhdGVYJyB9LiBcblxuICAgIFNldCBgRXh0ZW5kZWQucHJvdG90eXBlLnZhbHVlVHlwZU1hcGAgYXMgYW4gb2JqZWN0IGtleS92YWx1ZSBtYXAgdG8gcmV0dXJuIGEgdmFsdWUgdHlwZSB3aXRoXG4gICAgYGdldFZhbHVlVHlwZShrZXkpYCAoa2V5IHdpbGwgYmUgbWFwcGVkIGFjY29yZGluZyB0byBgc3RhdGVNYXBgKVxuKi9cbmNsYXNzIEFkYXB0ZXIge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5jYWNoZSA9IHt9O1xuICAgICAgICB0aGlzLmludGVybmFsQ2FjaGUgPSB7fTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBHZXQgZWxlbWVudCBwcm9wZXJ0eVxuXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogS2V5IHRvIHJlYWRcbiAgICAgICAgQHBhcmFtIFtib29sZWFuXTogSWYgYHRydWVgLCB3aWxsIG92ZXJyaWRlIGNhY2hlZCBwcm9wZXJ0eVxuICAgICovXG4gICAgZ2V0KGtleSwgcmVmcmVzaCkge1xuICAgICAgICBjb25zdCBtYXBwZWRLZXkgPSB0aGlzLm1hcFN0YXRlS2V5KGtleSk7XG5cbiAgICAgICAgaWYgKHJlZnJlc2ggfHwgIXRoaXMuY2FjaGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVba2V5XSA9IHRoaXMuZ2V0dGVyKG1hcHBlZEtleSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jYWNoZVtrZXldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgU2V0IGVsZW1lbnQgcHJvcGVydGllc1xuXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogS2V5L3ZhbHVlIHByb3BlcnRpZXMgdG8gc2V0XG4gICAgKi9cbiAgICBzZXQocHJvcHMpIHtcbiAgICAgICAgLy8gVHJhbnNsYXRlIHByb3BzXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBwcm9wcykge1xuICAgICAgICAgICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXBwZWRLZXkgPSB0aGlzLm1hcFN0YXRlS2V5KGtleSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZVtrZXldID0gdGhpcy5pbnRlcm5hbENhY2hlW21hcHBlZEtleV0gPSBwcm9wc1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0dGVyKHRoaXMuaW50ZXJuYWxDYWNoZSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgT3ZlcnJpZGFibGUgZWxlbWVudCBnZXR0ZXIgLSBkZWZhdWx0IGZvciBwbGFpbiBvYmplY3QgXG4gICAgKi9cbiAgICBnZXR0ZXIoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnRba2V5XTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBPdmVycmlkYWJsZSBlbGVtZW50IHNldHRlciAtIGRlZmF1bHQgZm9yIHBsYWluIG9iamVjdFxuICAgICovXG4gICAgc2V0dGVyKHByb3BzKSB7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBwcm9wcykge1xuICAgICAgICAgICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRba2V5XSA9IHByb3BzW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBNYXAgc3RhdGUga2V5IGFzIHBlciBgc3RhdGVNYXBgLCBpZiBwcmVzZW50XG5cbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBLZXkgdG8gbWFwXG4gICAgICAgIEByZXR1cm4gW3N0cmluZ106IE1hcHBlZCBrZXksIG9yIG9yaWdpbmFsIGtleSBpZiBub25lIGZvdW5kXG4gICAgKi9cbiAgICBtYXBTdGF0ZUtleShrZXkpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLnN0YXRlTWFwKSA/IHRoaXMuc3RhdGVNYXBba2V5XSB8fCBrZXkgOiBrZXk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgR2V0IHZhbHVlVHlwZSBvZiBwcm92aWRlZCBrZXlcblxuICAgICAgICBAcGFyYW0gW3N0cmluZ106IE5hbWUgb2YgcHJvcGVydHkgdG8gbWFwXG4gICAgICAgIEByZXR1cm4gW3ZhbHVlVHlwZV06IFZhbHVlIHR5cGUgb2YgcHJvcGVydHlcbiAgICAqL1xuICAgIGdldFZhbHVlVHlwZShrZXkpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLnZhbHVlVHlwZU1hcCkgPyB0aGlzLnZhbHVlVHlwZU1hcFt0aGlzLm1hcFN0YXRlS2V5KGtleSldIDogZmFsc2U7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAoZWxlbWVudCkgPT4gbmV3IEFkYXB0ZXIoZWxlbWVudCk7Il19

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.getter = getter;
	exports.setter = setter;
	
	var _adapter = __webpack_require__(13);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2F0dHItYWRhcHRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7UUFFZ0IsTUFBTSxHQUFOLE1BQU07UUFJTixNQUFNLEdBQU4sTUFBTTs7Ozs7Ozs7QUFKZixTQUFTLE1BQU0sQ0FBQyxHQUFHLEVBQUU7QUFDeEIsV0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUN6Qzs7QUFFTSxTQUFTLE1BQU0sQ0FBQyxLQUFLLEVBQUU7QUFDMUIsU0FBSyxJQUFJLEdBQUcsSUFBSSxLQUFLLEVBQUU7QUFDbkIsWUFBSSxLQUFLLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO0FBQzNCLGdCQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDOUM7S0FDSjtDQUNKOztrQkFFYyxVQUFDLE9BQU8sRUFBSztBQUN4QixRQUFNLFdBQVcsR0FBRyx1QkFBUSxPQUFPLENBQUMsQ0FBQzs7QUFFckMsZUFBVyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDNUIsZUFBVyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7O0FBRTVCLFdBQU8sV0FBVyxDQUFDO0NBQ3RCIiwiZmlsZSI6ImF0dHItYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dFBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhZGFwdGVyIGZyb20gJy4vYWRhcHRlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXR0ZXIoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoa2V5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldHRlcihwcm9wcykge1xuICAgIGZvciAobGV0IGtleSBpbiBwcm9wcykge1xuICAgICAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHByb3BzW2tleV0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGF0dHJBZGFwdGVyID0gYWRhcHRlcihlbGVtZW50KTtcblxuICAgIGF0dHJBZGFwdGVyLmdldHRlciA9IGdldHRlcjtcbiAgICBhdHRyQWRhcHRlci5zZXR0ZXIgPSBzZXR0ZXI7XG5cbiAgICByZXR1cm4gYXR0ckFkYXB0ZXI7XG59O1xuIl19

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _stateMap = __webpack_require__(40);
	
	var _stateMap2 = _interopRequireDefault(_stateMap);
	
	var _valueTypeMap = __webpack_require__(43);
	
	var _valueTypeMap2 = _interopRequireDefault(_valueTypeMap);
	
	var _build = __webpack_require__(45);
	
	var _build2 = _interopRequireDefault(_build);
	
	var _prefixer = __webpack_require__(44);
	
	var _prefixer2 = _interopRequireDefault(_prefixer);
	
	var _transformProps = __webpack_require__(46);
	
	var _transformProps2 = _interopRequireDefault(_transformProps);
	
	var _adapter = __webpack_require__(13);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2Nzcy1hZGFwdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9BLFNBQVMsTUFBTSxDQUFFLEdBQUcsRUFBRTtBQUNsQixXQUFPLEFBQUMsQ0FBQyx5QkFBZSxHQUFHLENBQUMsR0FDeEIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsd0JBQVMsR0FBRyxDQUFDLENBQUMsR0FDMUQsdUJBQWEsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUM7Q0FDbkQ7O0FBRUQsU0FBUyxNQUFNLENBQUMsS0FBSyxFQUFFO0FBQ25CLFFBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxxQkFBb0IsS0FBSyxDQUFDLENBQUM7Q0FDNUQ7O2tCQUVjLFVBQUMsT0FBTyxFQUFLO0FBQ3hCLFFBQU0sVUFBVSxHQUFHLHVCQUFRLE9BQU8sQ0FBQyxDQUFDO0FBQ3BDLGNBQVUsQ0FBQyxRQUFRLHFCQUFXLENBQUM7QUFDL0IsY0FBVSxDQUFDLFlBQVkseUJBQWUsQ0FBQztBQUN2QyxjQUFVLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUMzQixjQUFVLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQzs7QUFFM0IsV0FBTyxVQUFVLENBQUM7Q0FDckIiLCJmaWxlIjoiY3NzLWFkYXB0ZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHRQZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3RhdGVNYXAgZnJvbSAnLi9jc3Mvc3RhdGUtbWFwJztcbmltcG9ydCB2YWx1ZVR5cGVNYXAgZnJvbSAnLi9jc3MvdmFsdWUtdHlwZS1tYXAnO1xuaW1wb3J0IGJ1aWxkUHJvcGVydHlTdHJpbmcgZnJvbSAnLi9jc3MvYnVpbGQnO1xuaW1wb3J0IHByZWZpeGVyIGZyb20gJy4vY3NzL3ByZWZpeGVyJztcbmltcG9ydCB0cmFuc2Zvcm1Qcm9wcyBmcm9tICcuL2Nzcy90cmFuc2Zvcm0tcHJvcHMnO1xuaW1wb3J0IGFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcblxuZnVuY3Rpb24gZ2V0dGVyIChrZXkpIHtcbiAgICByZXR1cm4gKCF0cmFuc2Zvcm1Qcm9wc1trZXldKSA/XG4gICAgICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudCwgbnVsbClbcHJlZml4ZXIoa2V5KV0gOlxuICAgICAgICB2YWx1ZVR5cGVNYXBba2V5XS5kZWZhdWx0UHJvcHMuY3VycmVudCB8fCAwO1xufVxuXG5mdW5jdGlvbiBzZXR0ZXIocHJvcHMpIHtcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUuY3NzVGV4dCArPSBidWlsZFByb3BlcnR5U3RyaW5nKHByb3BzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBjc3NBZGFwdGVyID0gYWRhcHRlcihlbGVtZW50KTtcbiAgICBjc3NBZGFwdGVyLnN0YXRlTWFwID0gc3RhdGVNYXA7XG4gICAgY3NzQWRhcHRlci52YWx1ZVR5cGVNYXAgPSB2YWx1ZVR5cGVNYXA7XG4gICAgY3NzQWRhcHRlci5nZXR0ZXIgPSBnZXR0ZXI7XG4gICAgY3NzQWRhcHRlci5zZXR0ZXIgPSBzZXR0ZXI7XG5cbiAgICByZXR1cm4gY3NzQWRhcHRlcjtcbn07XG4iXX0=

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	exports.setter = setter;
	
	var _stateMap = __webpack_require__(40);
	
	var _stateMap2 = _interopRequireDefault(_stateMap);
	
	var _valueTypeMap = __webpack_require__(41);
	
	var _valueTypeMap2 = _interopRequireDefault(_valueTypeMap);
	
	var _build = __webpack_require__(42);
	
	var _build2 = _interopRequireDefault(_build);
	
	var _attrAdapter = __webpack_require__(14);
	
	var _adapter = __webpack_require__(13);
	
	var _adapter2 = _interopRequireDefault(_adapter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var svgStateMap = _extends({}, _stateMap2.default, {
	    color: 'fill'
	});
	
	function setter(props) {
	    this.attrSetter((0, _build2.default)(props, this.origin));
	}
	
	exports.default = function (element) {
	    var transformOriginX = arguments.length <= 1 || arguments[1] === undefined ? 50 : arguments[1];
	    var transformOriginY = arguments.length <= 2 || arguments[2] === undefined ? 50 : arguments[2];
	
	    var svgAdapter = (0, _adapter2.default)(element);
	    svgAdapter.stateMap = svgStateMap;
	    svgAdapter.valueTypeMap = _valueTypeMap2.default;
	    svgAdapter.getter = _attrAdapter.getter;
	    svgAdapter.setter = setter;
	    svgAdapter.attrSetter = _attrAdapter.setter;
	
	    var bBox = element.getBBox();
	
	    svgAdapter.origin = {
	        x: bBox.width * (transformOriginX / 100) + bBox.x,
	        y: bBox.height * (transformOriginY / 100) + bBox.y
	    };
	
	    return svgAdapter;
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL3N2Zy1hZGFwdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O1FBV2dCLE1BQU0sR0FBTixNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTHRCLElBQU0sV0FBVztBQUViLFNBQUssRUFBRSxNQUFNO0VBQ2hCLENBQUM7O0FBRUssU0FBUyxNQUFNLENBQUMsS0FBSyxFQUFFO0FBQzFCLFFBQUksQ0FBQyxVQUFVLENBQUMscUJBQU0sS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0NBQzlDOztrQkFFYyxVQUFDLE9BQU8sRUFBbUQ7UUFBakQsZ0JBQWdCLHlEQUFHLEVBQUU7UUFBRSxnQkFBZ0IseURBQUcsRUFBRTs7QUFDakUsUUFBTSxVQUFVLEdBQUcsdUJBQVEsT0FBTyxDQUFDLENBQUM7QUFDcEMsY0FBVSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUM7QUFDbEMsY0FBVSxDQUFDLFlBQVkseUJBQWUsQ0FBQztBQUN2QyxjQUFVLENBQUMsTUFBTSxnQkFoQlosTUFBTSxBQWdCZSxDQUFDO0FBQzNCLGNBQVUsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQzNCLGNBQVUsQ0FBQyxVQUFVLGdCQWxCUixNQUFNLEFBa0JlLENBQUM7O0FBRW5DLFFBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7QUFFL0IsY0FBVSxDQUFDLE1BQU0sR0FBRztBQUNoQixTQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssSUFBSSxnQkFBZ0IsR0FBRyxHQUFHLENBQUEsQUFBQyxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQ2pELFNBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxJQUFJLGdCQUFnQixHQUFHLEdBQUcsQ0FBQSxBQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7S0FDckQsQ0FBQzs7QUFFRixXQUFPLFVBQVUsQ0FBQztDQUNyQiIsImZpbGUiOiJzdmctYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dFBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3NTdGF0ZU1hcCBmcm9tICcuL2Nzcy9zdGF0ZS1tYXAnO1xuaW1wb3J0IHZhbHVlVHlwZU1hcCBmcm9tICcuL3N2Zy92YWx1ZS10eXBlLW1hcCc7XG5pbXBvcnQgYnVpbGQgZnJvbSAnLi9zdmcvYnVpbGQnO1xuaW1wb3J0IHsgZ2V0dGVyLCBzZXR0ZXIgYXMgYXR0clNldHRlciB9IGZyb20gJy4vYXR0ci1hZGFwdGVyJztcbmltcG9ydCBhZGFwdGVyIGZyb20gJy4vYWRhcHRlcic7XG5cbmNvbnN0IHN2Z1N0YXRlTWFwID0ge1xuICAgIC4uLmNzc1N0YXRlTWFwLFxuICAgIGNvbG9yOiAnZmlsbCdcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXR0ZXIocHJvcHMpIHtcbiAgICB0aGlzLmF0dHJTZXR0ZXIoYnVpbGQocHJvcHMsIHRoaXMub3JpZ2luKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IChlbGVtZW50LCB0cmFuc2Zvcm1PcmlnaW5YID0gNTAsIHRyYW5zZm9ybU9yaWdpblkgPSA1MCkgPT4ge1xuICAgIGNvbnN0IHN2Z0FkYXB0ZXIgPSBhZGFwdGVyKGVsZW1lbnQpO1xuICAgIHN2Z0FkYXB0ZXIuc3RhdGVNYXAgPSBzdmdTdGF0ZU1hcDtcbiAgICBzdmdBZGFwdGVyLnZhbHVlVHlwZU1hcCA9IHZhbHVlVHlwZU1hcDtcbiAgICBzdmdBZGFwdGVyLmdldHRlciA9IGdldHRlcjtcbiAgICBzdmdBZGFwdGVyLnNldHRlciA9IHNldHRlcjtcbiAgICBzdmdBZGFwdGVyLmF0dHJTZXR0ZXIgPSBhdHRyU2V0dGVyO1xuICAgIFxuICAgIGNvbnN0IGJCb3ggPSBlbGVtZW50LmdldEJCb3goKTtcblxuICAgIHN2Z0FkYXB0ZXIub3JpZ2luID0ge1xuICAgICAgICB4OiBiQm94LndpZHRoICogKHRyYW5zZm9ybU9yaWdpblggLyAxMDApICsgYkJveC54LFxuICAgICAgICB5OiBiQm94LmhlaWdodCAqICh0cmFuc2Zvcm1PcmlnaW5ZIC8gMTAwKSArIGJCb3gueVxuICAgIH07XG5cbiAgICByZXR1cm4gc3ZnQWRhcHRlcjtcbn07XG5cbiJdfQ==

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _build = __webpack_require__(38);
	
	var _build2 = _interopRequireDefault(_build);
	
	var _stateMap = __webpack_require__(39);
	
	var _stateMap2 = _interopRequireDefault(_stateMap);
	
	var _svgAdapter = __webpack_require__(16);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL3N2Zy1wYXRoLWFkYXB0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUEsU0FBUyxNQUFNLENBQUMsS0FBSyxFQUFFO0FBQ25CLFFBQUksQ0FBQyxTQUFTLENBQUMscUJBQU0sS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0NBQ2pEOztrQkFFYyxVQUFDLE9BQU8sRUFBSztBQUN4QixRQUFNLE9BQU8sR0FBRywwQkFBVyxPQUFPLENBQUMsQ0FBQzs7QUFFcEMsV0FBTyxDQUFDLFFBQVEscUJBQVcsQ0FBQztBQUM1QixXQUFPLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUN4QixXQUFPLENBQUMsU0FBUyxlQVhBLE1BQU0sQUFXTSxDQUFDO0FBQzlCLFdBQU8sQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDOztBQUU5QyxXQUFPLE9BQU8sQ0FBQztDQUNsQiIsImZpbGUiOiJzdmctcGF0aC1hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0UGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJ1aWxkIGZyb20gJy4vc3ZnLXBhdGgvYnVpbGQnO1xuaW1wb3J0IHN0YXRlTWFwIGZyb20gJy4vc3ZnLXBhdGgvc3RhdGUtbWFwJztcbmltcG9ydCBzdmdBZGFwdGVyLCB7IHNldHRlciBhcyBzdmdTZXR0ZXIgfSBmcm9tICcuL3N2Zy1hZGFwdGVyJztcblxuZnVuY3Rpb24gc2V0dGVyKHByb3BzKSB7XG4gICAgdGhpcy5zdmdTZXR0ZXIoYnVpbGQocHJvcHMsIHRoaXMucGF0aExlbmd0aCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCAoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGFkYXB0ZXIgPSBzdmdBZGFwdGVyKGVsZW1lbnQpO1xuXG4gICAgYWRhcHRlci5zdGF0ZU1hcCA9IHN0YXRlTWFwO1xuICAgIGFkYXB0ZXIuc2V0dGVyID0gc2V0dGVyO1xuICAgIGFkYXB0ZXIuc3ZnU2V0dGVyID0gc3ZnU2V0dGVyO1xuICAgIGFkYXB0ZXIucGF0aExlbmd0aCA9IGVsZW1lbnQuZ2V0VG90YWxMZW5ndGgoKTtcblxuICAgIHJldHVybiBhZGFwdGVyO1xufTtcbiJdfQ==

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _adapter = __webpack_require__(13);
	
	var _adapter2 = _interopRequireDefault(_adapter);
	
	var _cssAdapter = __webpack_require__(15);
	
	var _cssAdapter2 = _interopRequireDefault(_cssAdapter);
	
	var _svgAdapter = __webpack_require__(16);
	
	var _svgAdapter2 = _interopRequireDefault(_svgAdapter);
	
	var _svgPathAdapter = __webpack_require__(17);
	
	var _svgPathAdapter2 = _interopRequireDefault(_svgPathAdapter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var SAVE_PROP = '__pm_adapter';
	
	exports.default = function (element) {
	    // Return bound adapter if present
	    if (element[SAVE_PROP]) {
	        return element[SAVE_PROP];
	
	        // Or detect and bind adapter
	    } else {
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
	
	            var boundAdapter = detectedAdapter(element);
	
	            // Bind adapter to element
	            Object.defineProperty(element, SAVE_PROP, {
	                enumerable: false,
	                writable: false,
	                value: boundAdapter
	            });
	
	            return boundAdapter;
	        }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvYmluZC1hZGFwdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQSxJQUFNLFNBQVMsR0FBRyxjQUFjLENBQUM7O2tCQUVsQixVQUFDLE9BQU8sRUFBSzs7QUFFeEIsUUFBSSxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUU7QUFDcEIsZUFBTyxPQUFPLENBQUMsU0FBUyxDQUFDOzs7QUFBQyxLQUc3QixNQUFNO0FBQ0gsZ0JBQUksZUFBZSxvQkFBVTs7O0FBQUMsQUFHOUIsZ0JBQUksT0FBTyxZQUFZLFdBQVcsSUFBSSxPQUFPLENBQUMsT0FBTyxLQUFLLEtBQUssRUFBRTtBQUM3RCwrQkFBZSx1QkFBYTs7O0FBQUMsYUFHaEMsTUFBTSxJQUFJLE9BQU8sWUFBWSxVQUFVLEVBQUU7QUFDdEMsd0JBQUksT0FBTyxDQUFDLE9BQU8sS0FBSyxNQUFNLEVBQUU7QUFDNUIsdUNBQWUsMkJBQWlCLENBQUM7cUJBQ3BDLE1BQU07QUFDSCx1Q0FBZSx1QkFBYSxDQUFDO3FCQUNoQztpQkFDSjs7QUFFRCxnQkFBTSxZQUFZLEdBQUcsZUFBZSxDQUFDLE9BQU8sQ0FBQzs7O0FBQUMsQUFHOUMsa0JBQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRTtBQUN0QywwQkFBVSxFQUFFLEtBQUs7QUFDakIsd0JBQVEsRUFBRSxLQUFLO0FBQ2YscUJBQUssRUFBRSxZQUFZO2FBQ3RCLENBQUMsQ0FBQzs7QUFFSCxtQkFBTyxZQUFZLENBQUM7U0FDdkI7Q0FDSiIsImZpbGUiOiJiaW5kLWFkYXB0ZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHRQZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYWRhcHRlciBmcm9tICcuLi9hZGFwdGVyL2FkYXB0ZXInO1xuaW1wb3J0IGNzc0FkYXB0ZXIgZnJvbSAnLi4vYWRhcHRlci9jc3MtYWRhcHRlcic7XG5pbXBvcnQgc3ZnQWRhcHRlciBmcm9tICcuLi9hZGFwdGVyL3N2Zy1hZGFwdGVyJztcbmltcG9ydCBzdmdQYXRoQWRhcHRlciBmcm9tICcuLi9hZGFwdGVyL3N2Zy1wYXRoLWFkYXB0ZXInO1xuXG5jb25zdCBTQVZFX1BST1AgPSAnX19wbV9hZGFwdGVyJztcblxuZXhwb3J0IGRlZmF1bHQgKGVsZW1lbnQpID0+IHtcbiAgICAvLyBSZXR1cm4gYm91bmQgYWRhcHRlciBpZiBwcmVzZW50XG4gICAgaWYgKGVsZW1lbnRbU0FWRV9QUk9QXSkge1xuICAgICAgICByZXR1cm4gZWxlbWVudFtTQVZFX1BST1BdO1xuXG4gICAgLy8gT3IgZGV0ZWN0IGFuZCBiaW5kIGFkYXB0ZXJcbiAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgZGV0ZWN0ZWRBZGFwdGVyID0gYWRhcHRlcjtcblxuICAgICAgICAvLyBJZiBIVE1MRWxlbWVudCBsb2FkIENTU1xuICAgICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IGVsZW1lbnQudGFnTmFtZSA9PT0gJ3N2ZycpIHtcbiAgICAgICAgICAgIGRldGVjdGVkQWRhcHRlciA9IGNzc0FkYXB0ZXI7XG5cbiAgICAgICAgLy8gT3IgU1ZHXG4gICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIFNWR0VsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50LnRhZ05hbWUgPT09ICdwYXRoJykge1xuICAgICAgICAgICAgICAgIGRldGVjdGVkQWRhcHRlciA9IHN2Z1BhdGhBZGFwdGVyO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkZXRlY3RlZEFkYXB0ZXIgPSBzdmdBZGFwdGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYm91bmRBZGFwdGVyID0gZGV0ZWN0ZWRBZGFwdGVyKGVsZW1lbnQpO1xuXG4gICAgICAgIC8vIEJpbmQgYWRhcHRlciB0byBlbGVtZW50XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCBTQVZFX1BST1AsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgICAgICAgdmFsdWU6IGJvdW5kQWRhcHRlclxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gYm91bmRBZGFwdGVyO1xuICAgIH1cbn07XG4iXX0=

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _createEasing = __webpack_require__(49);
	
	var _createEasing2 = _interopRequireDefault(_createEasing);
	
	var _createBezier = __webpack_require__(50);
	
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
	
	baseEasing.easingFunction = _createEasing2.default;
	baseEasing.cubicBezier = _createBezier2.default;
	baseEasing.modifyEase = function (easing) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	    }
	
	    return function (progress) {
	        return easing.apply(undefined, [progress].concat(args));
	    };
	};
	
	exports.default = baseEasing;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2Vhc2luZy9wcmVzZXQtZWFzaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEJBLElBQU0scUJBQXFCLEdBQUcsS0FBSyxDQUFDO0FBQ3BDLElBQU0sb0JBQW9CLEdBQUcsQ0FBQzs7Ozs7Ozs7QUFBQyxBQVEvQixJQUFNLFVBQVUsR0FBRztBQUNmLFFBQUksRUFBRSxVQUFDLFFBQVE7WUFBRSxRQUFRLHlEQUFHLG9CQUFvQjt3QkFBSyxRQUFRLEVBQUksUUFBUTtLQUFBO0FBQ3pFLFFBQUksRUFBRSxVQUFBLFFBQVE7ZUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQUE7QUFDbkQsUUFBSSxFQUFFLFVBQUMsUUFBUTtZQUFFLFFBQVEseURBQUcscUJBQXFCO2VBQUssQUFBQyxRQUFRLEdBQUcsUUFBUSxJQUFLLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQSxHQUFJLFFBQVEsR0FBRyxRQUFRLENBQUEsQUFBQztLQUFBO0NBQ3ZIOzs7QUFBQyxBQUdGLElBQU0sbUJBQW1CLEdBQUcsVUFBQyxRQUFRO1dBQUssVUFBQyxRQUFRO2VBQUssVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO0tBQUE7Q0FBQSxDQUFDOztBQUU1RixDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsVUFBVSxFQUFFLENBQUM7V0FBSyxVQUFVLENBQUMsVUFBVSxDQUFDLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUFBLENBQUM7OztBQUFDLEFBRzVHLEtBQUssSUFBSSxHQUFHLElBQUksVUFBVSxFQUFFO0FBQ3hCLFFBQUksVUFBVSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtBQUNoQyxZQUFNLGNBQWMsR0FBRyw0QkFBcUIsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDN0Qsa0JBQVUsQ0FBSSxHQUFHLFFBQUssR0FBRyxjQUFjLENBQUMsRUFBRSxDQUFDO0FBQzNDLGtCQUFVLENBQUksR0FBRyxTQUFNLEdBQUcsY0FBYyxDQUFDLEdBQUcsQ0FBQztBQUM3QyxrQkFBVSxDQUFJLEdBQUcsV0FBUSxHQUFHLGNBQWMsQ0FBQyxLQUFLLENBQUM7S0FDcEQ7Q0FDSjs7QUFFRCxVQUFVLENBQUMsTUFBTSxHQUFHLFVBQUEsUUFBUTtXQUFJLFFBQVE7Q0FBQSxDQUFDO0FBQ3pDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsVUFBQyxRQUFRO1FBQUUsUUFBUSx5REFBRyxxQkFBcUI7V0FDL0QsQUFBQyxDQUFDLFFBQVEsSUFBRSxDQUFDLENBQUEsR0FBSSxDQUFDLEdBQUksR0FBRyxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxHQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQSxBQUFDLENBQUMsQ0FBQSxBQUFDO0NBQUEsQ0FBQzs7QUFFdkgsVUFBVSxDQUFDLGNBQWMseUJBQXVCLENBQUM7QUFDakQsVUFBVSxDQUFDLFdBQVcseUJBQWMsQ0FBQztBQUNyQyxVQUFVLENBQUMsVUFBVSxHQUFHLFVBQUMsTUFBTTtzQ0FBSyxJQUFJO0FBQUosWUFBSTs7O1dBQUssVUFBQyxRQUFRO2VBQUssTUFBTSxtQkFBQyxRQUFRLFNBQUssSUFBSSxFQUFDO0tBQUE7Q0FBQSxDQUFDOztrQkFFdEUsVUFBVSIsImZpbGUiOiJwcmVzZXQtZWFzaW5nLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0UGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgICBFYXNpbmcgZnVuY3Rpb25zXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIFxuICAgIEdlbmVyYXRlcyBhbmQgcHJvdmlkZXMgZWFzaW5nIGZ1bmN0aW9ucyBiYXNlZCBvbiBiYXNlRnVuY3Rpb24gZGVmaW5pdGlvbnNcbiAgICBcbiAgICBBIGNhbGwgdG8gZWFzaW5nRnVuY3Rpb24uZ2V0KCdmdW5jdGlvbk5hbWUnKSByZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCBjYW4gYmUgcGFzc2VkOlxuICAgICAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzIDAtMVxuICAgICAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogQW1wIG1vZGlmaWVyLCBvbmx5IGFjY2VwdGVkIGluIHNvbWUgZWFzaW5nIGZ1bmN0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5kIGlzIHVzZWQgdG8gYWRqdXN0IG92ZXJhbGwgc3RyZW5ndGhcbiAgICAgICAgQHJldHVybiBbbnVtYmVyXTogRWFzZWQgcHJvZ3Jlc3NcbiAgICAgICAgXG4gICAgV2UgY2FuIGdlbmVyYXRlIG5ldyBmdW5jdGlvbnMgYnkgc2VuZGluZyBhbiBlYXNpbmcgZnVuY3Rpb24gdGhyb3VnaCBlYXNpbmdGdW5jdGlvbi5leHRlbmQobmFtZSwgbWV0aG9kKS5cbiAgICBXaGljaCB3aWxsIG1ha2UgbmFtZUluLCBuYW1lT3V0IGFuZCBuYW1lSW5PdXQgZnVuY3Rpb25zIGF2YWlsYWJsZSB0byB1c2UuXG4gICAgICAgIFxuICAgIEVhc2luZyBmdW5jdGlvbnMgZnJvbSBSb2JlcnQgUGVubmVyXG4gICAgaHR0cDovL3d3dy5yb2JlcnRwZW5uZXIuY29tL2Vhc2luZy9cbiAgICAgICAgXG4gICAgQmV6aWVyIGN1cnZlIGludGVycHJldG9yIGNyZWF0ZWQgZnJvbSBHYcOrdGFuIFJlbmF1ZGVhdSdzIG9yaWdpbmFsIEJlemllckVhc2luZyAgXG4gICAgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nL2Jsb2IvbWFzdGVyL2luZGV4LmpzICBcbiAgICBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNpbmcvYmxvYi9tYXN0ZXIvTElDRU5TRVxuXG4gICAgQW50aWNpcGF0ZSBlYXNpbmcgY3JlYXRlZCBieSBFbGxpb3QgR2lub1xuICAgIGh0dHBzOi8vdHdpdHRlci5jb20vRWxsaW90R2Vub1xuKi9cbi8vIEltcG9ydHNcbmltcG9ydCBjcmVhdGVFYXNpbmdGdW5jdGlvbiBmcm9tICcuL2NyZWF0ZS1lYXNpbmcnO1xuaW1wb3J0IGN1YmljQmV6aWVyIGZyb20gJy4vY3JlYXRlLWJlemllcic7XG5cbi8vIFZhbHVlc1xuY29uc3QgREVGQVVMVF9CQUNLX1NUUkVOR1RIID0gMS41MjU7XG5jb25zdCBERUZBVUxUX1BPV19TVFJFTkdUSCA9IDI7XG5cbi8qXG4gICAgRWFjaCBvZiB0aGVzZSBiYXNlIGZ1bmN0aW9ucyBpcyBhbiBlYXNlSW5cbiAgICBcbiAgICBPbiBpbml0LCB3ZSB1c2UgLm1pcnJvciBhbmQgLnJldmVyc2UgdG8gZ2VuZXJhdGUgZWFzZUluT3V0IGFuZFxuICAgIGVhc2VPdXQgZnVuY3Rpb25zIHJlc3BlY3RpdmVseS5cbiovXG5jb25zdCBiYXNlRWFzaW5nID0ge1xuICAgIGVhc2U6IChwcm9ncmVzcywgc3RyZW5ndGggPSBERUZBVUxUX1BPV19TVFJFTkdUSCkgPT4gcHJvZ3Jlc3MgKiogc3RyZW5ndGgsXG4gICAgY2lyYzogcHJvZ3Jlc3MgPT4gMSAtIE1hdGguc2luKE1hdGguYWNvcyhwcm9ncmVzcykpLFxuICAgIGJhY2s6IChwcm9ncmVzcywgc3RyZW5ndGggPSBERUZBVUxUX0JBQ0tfU1RSRU5HVEgpID0+IChwcm9ncmVzcyAqIHByb2dyZXNzKSAqICgoc3RyZW5ndGggKyAxKSAqIHByb2dyZXNzIC0gc3RyZW5ndGgpXG59O1xuXG4vLyBVdGlsaXR5IGZ1bmN0aW9uc1xuY29uc3QgZ2VuZXJhdGVQb3dlckVhc2luZyA9IChzdHJlbmd0aCkgPT4gKHByb2dyZXNzKSA9PiBiYXNlRWFzaW5nLmVhc2UocHJvZ3Jlc3MsIHN0cmVuZ3RoKTtcblxuWydjdWJpYycsICdxdWFydCcsICdxdWludCddLmZvckVhY2goKGVhc2luZ05hbWUsIGkpID0+IGJhc2VFYXNpbmdbZWFzaW5nTmFtZV0gPSBnZW5lcmF0ZVBvd2VyRWFzaW5nKGkgKyAzKSk7XG5cbi8vIEdlbmVyYXRlIGluL291dC9pbk91dCB2YXJpYXRpb25zXG5mb3IgKGxldCBrZXkgaW4gYmFzZUVhc2luZykge1xuICAgIGlmIChiYXNlRWFzaW5nLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgY29uc3QgZWFzaW5nRnVuY3Rpb24gPSBjcmVhdGVFYXNpbmdGdW5jdGlvbihiYXNlRWFzaW5nW2tleV0pO1xuICAgICAgICBiYXNlRWFzaW5nW2Ake2tleX1JbmBdID0gZWFzaW5nRnVuY3Rpb24uaW47XG4gICAgICAgIGJhc2VFYXNpbmdbYCR7a2V5fU91dGBdID0gZWFzaW5nRnVuY3Rpb24ub3V0O1xuICAgICAgICBiYXNlRWFzaW5nW2Ake2tleX1Jbk91dGBdID0gZWFzaW5nRnVuY3Rpb24uaW5PdXQ7XG4gICAgfVxufVxuXG5iYXNlRWFzaW5nLmxpbmVhciA9IHByb2dyZXNzID0+IHByb2dyZXNzO1xuYmFzZUVhc2luZy5hbnRpY2lwYXRlID0gKHByb2dyZXNzLCBzdHJlbmd0aCA9IERFRkFVTFRfQkFDS19TVFJFTkdUSCkgPT5cbiAgICAoKHByb2dyZXNzKj0yKSA8IDEpID8gMC41ICogYmFzZUVhc2luZy5iYWNrSW4ocHJvZ3Jlc3MsIHN0cmVuZ3RoKSA6ICAwLjUgKiAoMiAtIE1hdGgucG93KDIsIC0xMCAqIChwcm9ncmVzcyAtIDEpKSk7XG5cbmJhc2VFYXNpbmcuZWFzaW5nRnVuY3Rpb24gPSBjcmVhdGVFYXNpbmdGdW5jdGlvbjtcbmJhc2VFYXNpbmcuY3ViaWNCZXppZXIgPSBjdWJpY0JlemllcjtcbmJhc2VFYXNpbmcubW9kaWZ5RWFzZSA9IChlYXNpbmcsIC4uLmFyZ3MpID0+IChwcm9ncmVzcykgPT4gZWFzaW5nKHByb2dyZXNzLCAuLi5hcmdzKTtcblxuZXhwb3J0IGRlZmF1bHQgYmFzZUVhc2luZzsiXX0=

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.stepProgress = exports.speedPerSecond = exports.speedPerFrame = exports.smooth = exports.restrict = exports.relativeValue = exports.random = exports.radiansToDegrees = exports.pointFromAngleAndDistance = exports.offset = exports.getProgressFromValue = exports.getValueFromProgress = exports.hypotenuse = exports.ease = exports.distance = exports.dilate = exports.degreesToRadians = exports.angle = undefined;
	
	var _utils = __webpack_require__(2);
	
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
	    are at 0,0, then return the angle using .angleFromCenter()
	    
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
	
	    var _splitValueUnit = (0, _utils.splitValueUnit)(equation[1]);
	
	    var unit = _splitValueUnit.unit;
	    var value = _splitValueUnit.value;
	
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
	//# sourceMappingURL=data:application/json;base64,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QyxRQUFRLEdBQUcsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDOztBQUV4RCxXQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLEdBQUcsT0FBTyxDQUFDO0NBQzNELENBQUMiLCJmaWxlIjoiY2FsYy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dFBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgaGFzUHJvcGVydHksXG4gICAgaXNOdW0sXG4gICAgc3BsaXRWYWx1ZVVuaXQsXG4gICAgdG9EZWNpbWFsXG59IGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCBaRVJPX1BPSU5UID0ge1xuICAgIHg6IDAsXG4gICAgeTogMCxcbiAgICB6OiAwXG59O1xuXG5jb25zdCBkaXN0YW5jZTFEID0gKGEsIGIpID0+IE1hdGguYWJzKGEgLSBiKTtcblxuLypcbiAgICBBbmdsZSBiZXR3ZWVuIHBvaW50c1xuICAgIFxuICAgIFRyYW5zbGF0ZXMgdGhlIGh5cG90aGV0aWNhbCBsaW5lIHNvIHRoYXQgdGhlICdmcm9tJyBjb29yZGluYXRlc1xuICAgIGFyZSBhdCAwLDAsIHRoZW4gcmV0dXJuIHRoZSBhbmdsZSB1c2luZyAuYW5nbGVGcm9tQ2VudGVyKClcbiAgICBcbiAgICBAcGFyYW0gW29iamVjdF06IFggYW5kIFkgY29vcmRpbmF0ZXMgb2YgZnJvbSBwb2ludFxuICAgIEBwYXJhbSBbb2JqZWN0XTogWCBhbmQgWSBjb3JkaW5hdGVzIG9mIHRvIHBvaW50XG4gICAgQHJldHVybiBbcmFkaWFuXTogQW5nbGUgYmV0d2VlbiB0aGUgdHdvIHBvaW50cyBpbiByYWRpYW5zXG4qL1xuZXhwb3J0IGNvbnN0IGFuZ2xlID0gKGEsIGIgPSBaRVJPX1BPSU5UKSA9PiByYWRpYW5zVG9EZWdyZWVzKE1hdGguYXRhbjIoYS54IC0gYi54LCBhLnkgLSBiLnkpKTtcblxuLypcbiAgICBDb252ZXJ0IGRlZ3JlZXMgdG8gcmFkaWFuc1xuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgaW4gZGVncmVlc1xuICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGluIHJhZGlhbnNcbiovXG5leHBvcnQgY29uc3QgZGVncmVlc1RvUmFkaWFucyA9IChkZWdyZWVzKSA9PiBkZWdyZWVzICogTWF0aC5QSSAvIDE4MDtcblxuLypcbiAgICBEaWxhdGVcbiAgICBcbiAgICBDaGFuZ2UgdGhlIHByb2dyZXNzaW9uIGJldHdlZW4gYSBhbmQgYiBhY2NvcmRpbmcgdG8gZGlsYXRpb24uXG4gICAgXG4gICAgU28gZGlsYXRpb24gPSAwLjUgd291bGQgY2hhbmdlXG4gICAgXG4gICAgYSAtLS0tLS0tLS0gYlxuICAgIFxuICAgIHRvXG4gICAgXG4gICAgYSAtLS0tIGJcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFByZXZpb3VzIHZhbHVlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBEaWxhdGUgcHJvZ3Jlc3MgYnkgeFxuICAgIEByZXR1cm4gW251bWJlcl06IFByZXZpb3VzIHZhbHVlIHBsdXMgdGhlIGRpbGF0ZWQgZGlmZmVyZW5jZVxuKi9cbmV4cG9ydCBjb25zdCBkaWxhdGUgPSAoYSwgYiwgZGlsYXRpb24pID0+IGEgKyAoKGIgLSBhKSAqIGRpbGF0aW9uKTtcblxuLypcbiAgICBEaXN0YW5jZVxuICAgIFxuICAgIFJldHVybnMgdGhlIGRpc3RhbmNlIGJldHdlZW4gdHdvIG4gZGltZW5zaW9uYWwgcG9pbnRzLlxuICAgIFxuICAgIEBwYXJhbSBbb2JqZWN0L251bWJlcl06IHggYW5kIHkgb3IganVzdCB4IG9mIHBvaW50IEFcbiAgICBAcGFyYW0gW29iamVjdC9udW1iZXJdOiAob3B0aW9uYWwpOiB4IGFuZCB5IG9yIGp1c3QgeCBvZiBwb2ludCBCXG4gICAgQHJldHVybiBbbnVtYmVyXTogVGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIHR3byBwb2ludHNcbiovXG5leHBvcnQgY29uc3QgZGlzdGFuY2UgPSAoYSwgYiA9IFpFUk9fUE9JTlQpID0+IHtcbiAgICAvLyAxRCBkaW1lbnNpb25zXG4gICAgaWYgKGlzTnVtKGEpKSB7XG4gICAgICAgIHJldHVybiBkaXN0YW5jZTFEKGEsIGIpO1xuXG4gICAgLy8gTXVsdGktZGltZW5zaW9uYWxcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB4RGVsdGEgPSBkaXN0YW5jZTFEKGEueCwgYi54KTtcbiAgICAgICAgY29uc3QgeURlbHRhID0gZGlzdGFuY2UxRChhLnksIGIueSk7XG4gICAgICAgIGNvbnN0IHpEZWx0YSA9IChpc051bShhLnopKSA/IGRpc3RhbmNlMUQoYS56LCBiLnopIDogMDtcblxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KCh4RGVsdGEgKiogMikgKyAoeURlbHRhICoqIDIpICsgKHpEZWx0YSAqKiAyKSk7XG4gICAgfVxufTtcblxuLypcbiAgICBFYXNlIHZhbHVlIHdpdGhpbiByYW5nZWQgcGFyYW1ldGVyc1xuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MgYmV0d2VlbiAwIGFuZCAxXG4gICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBvZiAwIHByb2dyZXNzXG4gICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBvZiAxIHByb2dyZXNzXG4gICAgQHBhcmFtIFtzdHJpbmcgfHwgZnVuY3Rpb25dOiBOYW1lIG9mIHByZXNldCBlYXNpbmdcbiAgICAgICAgdG8gdXNlIG9yIGdlbmVyYXRlZCBlYXNpbmcgZnVuY3Rpb25cbiAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBvZiBlYXNlZCBwcm9ncmVzcyBpbiByYW5nZVxuKi8gXG5leHBvcnQgY29uc3QgZWFzZSA9IChwcm9ncmVzcywgZnJvbSwgdG8sIGVhc2UpID0+IHtcbiAgICBjb25zdCBwcm9ncmVzc0xpbWl0ZWQgPSByZXN0cmljdChwcm9ncmVzcywgMCwgMSk7XG4gICAgY29uc3QgZWFzZWRQcm9ncmVzcyA9IGVhc2UocHJvZ3Jlc3NMaW1pdGVkKTtcblxuICAgIHJldHVybiBnZXRWYWx1ZUZyb21Qcm9ncmVzcyhlYXNlZFByb2dyZXNzLCBmcm9tLCB0byk7XG59O1xuIFxuLypcbiAgICBIeXBvdGVudXNlXG4gICAgXG4gICAgUmV0dXJucyB0aGUgaHlwb3RlbnVzZSwgc2lkZSBDLCBnaXZlbiB0aGUgbGVuZ3RocyBvZiBzaWRlcyBBIGFuZCBCLlxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogTGVuZ3RoIG9mIEFcbiAgICBAcGFyYW0gW251bWJlcl06IExlbmd0aCBvZiBCXG4gICAgQHJldHVybiBbbnVtYmVyXTogTGVuZ3RoIG9mIENcbiovXG5leHBvcnQgY29uc3QgaHlwb3RlbnVzZSA9IChhLCBiKSA9PiBNYXRoLnNxcnQoKGEgKiBhKSArIChiICogYikpO1xuXG4vKlxuICAgIFZhbHVlIGluIHJhbmdlIGZyb20gcHJvZ3Jlc3NcbiAgICBcbiAgICBHaXZlbiBhIGxvd2VyIGxpbWl0IGFuZCBhbiB1cHBlciBsaW1pdCwgd2UgcmV0dXJuIHRoZSB2YWx1ZSB3aXRoaW5cbiAgICB0aGF0IHJhbmdlIGFzIGV4cHJlc3NlZCBieSBwcm9ncmVzcyAoYSBudW1iZXIgZnJvbSAwLTEpXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBUaGUgcHJvZ3Jlc3MgYmV0d2VlbiBsb3dlciBhbmQgdXBwZXIgbGltaXRzIGV4cHJlc3NlZCAwLTFcbiAgICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IG9mIHJhbmdlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBVcHBlciBsaW1pdCBvZiByYW5nZVxuICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGFzIGNhbGN1bGF0ZWQgZnJvbSBwcm9ncmVzcyB3aXRoaW4gcmFuZ2UgKG5vdCBsaW1pdGVkIHdpdGhpbiByYW5nZSlcbiovXG5leHBvcnQgY29uc3QgZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MgPSAocHJvZ3Jlc3MsIGZyb20sIHRvKSA9PiAoLSBwcm9ncmVzcyAqIGZyb20pICsgKHByb2dyZXNzICogdG8pICsgZnJvbTtcblxuLypcbiAgICBQcm9ncmVzcyB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiAgICBcbiAgICBHaXZlbiBhIGxvd2VyIGxpbWl0IGFuZCBhbiB1cHBlciBsaW1pdCwgd2UgcmV0dXJuIHRoZSBwcm9ncmVzc1xuICAgIChleHByZXNzZWQgYXMgYSBudW1iZXIgMC0xKSByZXByZXNlbnRlZCBieSB0aGUgZ2l2ZW4gdmFsdWUsIGFuZFxuICAgIGxpbWl0IHRoYXQgcHJvZ3Jlc3MgdG8gd2l0aGluIDAtMS5cbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIHRvIGZpbmQgcHJvZ3Jlc3Mgd2l0aGluIGdpdmVuIHJhbmdlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBcbiAgICBAcGFyYW0gW251bWJlcl06IFVwcGVyIGxpbWl0XG4gICAgQHJldHVybiBbbnVtYmVyXTogUHJvZ3Jlc3Mgb2YgdmFsdWUgd2l0aGluIHJhbmdlIGFzIGV4cHJlc3NlZCAwLTFcbiovXG5leHBvcnQgY29uc3QgZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUgPSAodmFsdWUsIGZyb20sIHRvKSA9PiAodmFsdWUgLSBmcm9tKSAvICh0byAtIGZyb20pO1xuXG4vKlxuICAgIE9mZnNldCBiZXR3ZWVuIHR3byBvYmplY3RzIG9mIG51bWJlcnNcblxuICAgIElmIHByb3BlcnR5IGlzIGZvdW5kIGluIGIgbm90IHByZXNlbnQgaW4gYSwgaXQgd2lsbCByZXR1cm4gYDBgIGZvciB0aGF0IHByb3AuXG4gICAgXG4gICAgQHBhcmFtIFtQb2ludF06IEZpcnN0IG9iamVjdFxuICAgIEBwYXJhbSBbUG9pbnRdOiBTZWNvbmQgb2JqZWN0XG4gICAgQHJldHVybiBbT2Zmc2V0XTogRGlzdGFuY2UgbWV0cmljcyBiZXR3ZWVuIHR3byBwb2ludHNcbiovXG5leHBvcnQgY29uc3Qgb2Zmc2V0ID0gKGEsIGIpID0+IHtcbiAgICBjb25zdCBvZmZzZXQgPSB7fTtcblxuICAgIGZvciAobGV0IGtleSBpbiBiKSB7XG4gICAgICAgIGlmIChiLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIG9mZnNldFtrZXldID0gaGFzUHJvcGVydHkoYSwga2V5KSA/IGJba2V5XSAtIGFba2V5XSA6IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2Zmc2V0O1xufTtcblxuLypcbiAgICBQb2ludCBmcm9tIGFuZ2xlIGFuZCBkaXN0YW5jZVxuICAgIFxuICAgIEBwYXJhbSBbb2JqZWN0XTogMkQgcG9pbnQgb2Ygb3JpZ2luXG4gICAgQHBhcmFtIFtudW1iZXJdOiBBbmdsZSBmcm9tIG9yaWdpblxuICAgIEBwYXJhbSBbbnVtYmVyXTogRGlzdGFuY2UgZnJvbSBvcmlnaW5cbiAgICBAcmV0dXJuIFtvYmplY3RdOiBDYWxjdWxhdGVkIDJEIHBvaW50XG4qL1xuZXhwb3J0IGNvbnN0IHBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UgPSAob3JpZ2luLCBhbmdsZSwgZGlzdGFuY2UpID0+IHtcbiAgICBhbmdsZSA9IGRlZ3JlZXNUb1JhZGlhbnMoYW5nbGUpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogZGlzdGFuY2UgKiBNYXRoLmNvcyhhbmdsZSkgKyBvcmlnaW4ueCxcbiAgICAgICAgeTogZGlzdGFuY2UgKiBNYXRoLnNpbihhbmdsZSkgKyBvcmlnaW4ueVxuICAgIH07XG59O1xuXG4vKlxuICAgIENvbnZlcnQgcmFkaWFucyB0byBkZWdyZWVzXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBpbiByYWRpYW5zXG4gICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgaW4gZGVncmVlc1xuKi9cbmV4cG9ydCBjb25zdCByYWRpYW5zVG9EZWdyZWVzID0gKHJhZGlhbnMpID0+IHJhZGlhbnMgKiAxODAgLyBNYXRoLlBJO1xuXG4vKlxuICAgIFJldHVybiByYW5kb20gbnVtYmVyIGJldHdlZW4gcmFuZ2VcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogT3V0cHV0IG1pbmltdW1cbiAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogT3V0cHV0IG1heGltdW1cbiAgICBAcmV0dXJuIFtudW1iZXJdOiBSYW5kb20gbnVtYmVyIHdpdGhpbiByYW5nZSwgb3IgMCBhbmQgMSBpZiBub25lIHByb3ZpZGVkXG4qL1xuZXhwb3J0IGNvbnN0IHJhbmRvbSA9IChtaW4gPSAwLCBtYXggPSAxKSA9PiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XG5cbi8qXG4gICAgQ2FsY3VsYXRlIHJlbGF0aXZlIHZhbHVlXG4gICAgXG4gICAgVGFrZXMgdGhlIG9wZXJhdG9yIGFuZCB2YWx1ZSBmcm9tIGEgc3RyaW5nLCBpZSBcIis9NVwiLCBhbmQgYXBwbGllc1xuICAgIHRvIHRoZSBjdXJyZW50IHZhbHVlIHRvIHJlc29sdmUgYSBuZXcgdGFyZ2V0LlxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICAgIEBwYXJhbSBbc3RyaW5nXTogUmVsYXRpdmUgdmFsdWVcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBOZXcgdmFsdWVcbiovXG5leHBvcnQgY29uc3QgcmVsYXRpdmVWYWx1ZSA9IChjdXJyZW50LCByZWxhdGl2ZSkgPT4ge1xuICAgIGxldCBuZXdWYWx1ZSA9IGN1cnJlbnQ7XG4gICAgY29uc3QgZXF1YXRpb24gPSByZWxhdGl2ZS5zcGxpdCgnPScpO1xuICAgIGNvbnN0IG9wZXJhdG9yID0gZXF1YXRpb25bMF07XG4gICAgbGV0IHsgdW5pdCwgdmFsdWUgfSA9IHNwbGl0VmFsdWVVbml0KGVxdWF0aW9uWzFdKTtcblxuICAgIHZhbHVlID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG5cbiAgICBzd2l0Y2ggKG9wZXJhdG9yKSB7XG4gICAgY2FzZSAnKyc6XG4gICAgICAgIG5ld1ZhbHVlICs9IHZhbHVlO1xuICAgICAgICBicmVhaztcbiAgICBjYXNlICctJzpcbiAgICAgICAgbmV3VmFsdWUgLT0gdmFsdWU7XG4gICAgICAgIGJyZWFrO1xuICAgIGNhc2UgJyonOlxuICAgICAgICBuZXdWYWx1ZSAqPSB2YWx1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgY2FzZSAnLyc6XG4gICAgICAgIG5ld1ZhbHVlIC89IHZhbHVlO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgXG4gICAgaWYgKHVuaXQpIHtcbiAgICAgICAgbmV3VmFsdWUgKz0gdW5pdDtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3VmFsdWU7XG59O1xuXG4vKlxuICAgIFJlc3RyaWN0IHZhbHVlIHRvIHJhbmdlXG4gICAgXG4gICAgUmV0dXJuIHZhbHVlIHdpdGhpbiB0aGUgcmFuZ2Ugb2YgbG93ZXJMaW1pdCBhbmQgdXBwZXJMaW1pdFxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgdG8ga2VlcCB3aXRoaW4gcmFuZ2VcbiAgICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IG9mIHJhbmdlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBVcHBlciBsaW1pdCBvZiByYW5nZVxuICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGFzIGxpbWl0ZWQgd2l0aGluIGdpdmVuIHJhbmdlXG4qL1xuZXhwb3J0IGNvbnN0IHJlc3RyaWN0ID0gKHZhbHVlLCBtaW4sIG1heCkgPT4gTWF0aC5tYXgoTWF0aC5taW4odmFsdWUsIG1heCksIG1pbik7XG5cbi8qXG4gICAgRnJhbWVyYXRlLWluZGVwZW5kZW50IHNtb290aGluZ1xuXG4gICAgQHBhcmFtIFtudW1iZXJdOiBOZXcgdmFsdWVcbiAgICBAcGFyYW0gW251bWJlcl06IE9sZCB2YWx1ZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb25cbiAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogU21vb3RoaW5nICgwIGlzIG5vbmUpXG4qL1xuZXhwb3J0IGNvbnN0IHNtb290aCA9IChuZXdWYWx1ZSwgb2xkVmFsdWUsIGR1cmF0aW9uLCBzbW9vdGhpbmcgPSAwKSA9PiB0b0RlY2ltYWwob2xkVmFsdWUgKyAoZHVyYXRpb24gKiAobmV3VmFsdWUgLSBvbGRWYWx1ZSkgLyBNYXRoLm1heChzbW9vdGhpbmcsIGR1cmF0aW9uKSkpO1xuXG4vKlxuICAgIENvbnZlcnQgeCBwZXIgc2Vjb25kIHRvIHBlciBmcmFtZSB2ZWxvY2l0eSBiYXNlZCBvbiBmcHNcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFVuaXQgcGVyIHNlY29uZFxuICAgIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb24gaW4gbXNcbiovXG5leHBvcnQgY29uc3Qgc3BlZWRQZXJGcmFtZSA9ICh4cHMsIGZyYW1lRHVyYXRpb24pID0+IChpc051bSh4cHMpKSA/IHhwcyAvICgxMDAwIC8gZnJhbWVEdXJhdGlvbikgOiAwO1xuXG4vKlxuICAgIENvbnZlcnQgdmVsb2NpdHkgaW50byB2ZWxpY2l0eSBwZXIgc2Vjb25kXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBVbml0IHBlciBmcmFtZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb24gaW4gbXNcbiovXG5leHBvcnQgY29uc3Qgc3BlZWRQZXJTZWNvbmQgPSAodmVsb2NpdHksIGZyYW1lRHVyYXRpb24pID0+IHZlbG9jaXR5ICogKDEwMDAgLyBmcmFtZUR1cmF0aW9uKTtcblxuLypcbiAgICBDcmVhdGUgc3RlcHBlZCB2ZXJzaW9uIG9mIDAtMSBwcm9ncmVzc1xuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICAgIEBwYXJhbSBbaW50XTogTnVtYmVyIG9mIHN0ZXBzXG4gICAgQHJldHVybiBbbnVtYmVyXTogU3RlcHBlZCB2YWx1ZVxuKi9cbmV4cG9ydCBjb25zdCBzdGVwUHJvZ3Jlc3MgPSAocHJvZ3Jlc3MsIHN0ZXBzKSA9PiB7XG4gICAgY29uc3Qgc2VnbWVudCA9IDEgLyAoc3RlcHMgLSAxKTtcbiAgICBjb25zdCB0YXJnZXQgPSAxIC0gKDEgLyBzdGVwcyk7XG4gICAgY29uc3QgcHJvZ3Jlc3NPZlRhcmdldCA9IE1hdGgubWluKHByb2dyZXNzIC8gdGFyZ2V0LCAxKTtcblxuICAgIHJldHVybiBNYXRoLmZsb29yKHByb2dyZXNzT2ZUYXJnZXQgLyBzZWdtZW50KSAqIHNlZ21lbnQ7XG59OyJdfQ==

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _defaultProps = __webpack_require__(47);
	
	exports.default = {
	    defaultProps: _defaultProps.opacity
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9hbHBoYS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7a0JBRWU7QUFDWCxnQkFBWSxnQkFIUCxPQUFPLEFBR1M7Q0FDeEIiLCJmaWxlIjoiYWxwaGEuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHRQZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBvcGFjaXR5IH0gZnJvbSAnLi9zZXR0aW5ncy9kZWZhdWx0LXByb3BzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRlZmF1bHRQcm9wczogb3BhY2l0eVxufTsiXX0=

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9hbmdsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O2tCQUVlO0FBQ1gsZ0JBQVksRUFBRTtBQUNWLFlBQUksRUFBRSxLQUFLO0FBQ1gsWUFBSSxnQkFBVTtLQUNqQjtDQUNKIiwiZmlsZSI6ImFuZ2xlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0UGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVuaXRUeXBlIGZyb20gJy4vdW5pdCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgdW5pdDogJ2RlZycsXG4gICAgICAgIHR5cGU6IHVuaXRUeXBlXG4gICAgfVxufTsiXX0=

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(2);
	
	var _px = __webpack_require__(29);
	
	var _px2 = _interopRequireDefault(_px);
	
	var _dictionary = __webpack_require__(48);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9heGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O2tCQUllO0FBQ1gsZ0JBQVksRUFBRSxhQUFZLFlBQVk7Ozs7Ozs7Ozs7QUFVdEMsU0FBSyxFQUFFLFVBQUMsS0FBSyxFQUFLO0FBQ2QsWUFBTSxXQUFXLEdBQUcsV0FoQkYsbUJBQW1CLEVBZ0JHLEtBQUssQ0FBQyxDQUFDO0FBQy9DLFlBQU0sT0FBTyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUM7QUFDbkMsWUFBTSxVQUFVLEdBQUc7QUFDZixhQUFDLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQztBQUNqQixhQUFDLEVBQUUsQUFBQyxPQUFPLEdBQUcsQ0FBQyxHQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDO1NBQ3JELENBQUM7O0FBRUYsWUFBSSxPQUFPLEdBQUcsQ0FBQyxFQUFFO0FBQ2Isc0JBQVUsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2pDOztBQUVELGVBQU8sVUFBVSxDQUFDO0tBQ3JCOztBQUVELFdBQU8sRUFBRSxVQUFDLE1BQU07ZUFBSyxXQTlCaEIsZUFBZSxFQThCaUIsTUFBTSxjQTVCdEMsSUFBSSxFQTRCMEMsR0FBRyxDQUFDO0tBQUE7Q0FDMUQiLCJmaWxlIjoiYXhlcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dFBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZURlbGltaXRlZCwgc3BsaXRTcGFjZURlbGltaXRlZCB9IGZyb20gJy4uL2luYy91dGlscyc7XG5pbXBvcnQgcHhWYWx1ZVR5cGUgZnJvbSAnLi9weCc7XG5pbXBvcnQgeyBheGVzIH0gZnJvbSAnLi9zZXR0aW5ncy9kaWN0aW9uYXJ5JztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRlZmF1bHRQcm9wczogcHhWYWx1ZVR5cGUuZGVmYXVsdFByb3BzLFxuICAgICAgICBcbiAgICAvKlxuICAgICAgICBTcGxpdCBwb3NpdGlvbnMgaW4gZm9ybWF0IFwiWCBZIFpcIlxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBQb3NpdGlvbiB2YWx1ZXNcbiAgICAgICAgICAgIFwiMjAlIDMwJSAwXCIgLT4gezIwJSwgMzAlLCAwfVxuICAgICAgICAgICAgXCIyMCUgMzAlXCIgLT4gezIwJSwgMzAlfVxuICAgICAgICAgICAgXCIyMCVcIiAtPiB7MjAlLCAyMCV9XG4gICAgKi9cbiAgICBzcGxpdDogKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IHNwbGl0VmFsdWVzID0gc3BsaXRTcGFjZURlbGltaXRlZCh2YWx1ZSk7XG4gICAgICAgIGNvbnN0IG51bUF4ZXMgPSBzcGxpdFZhbHVlcy5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHNwbGl0VmFsdWUgPSB7XG4gICAgICAgICAgICBYOiBzcGxpdFZhbHVlc1swXSxcbiAgICAgICAgICAgIFk6IChudW1BeGVzID4gMSkgPyBzcGxpdFZhbHVlc1sxXSA6IHNwbGl0VmFsdWVzWzBdXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKG51bUF4ZXMgPiAyKSB7XG4gICAgICAgICAgICBzcGxpdFZhbHVlLlogPSBzcGxpdFZhbHVlc1syXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzcGxpdFZhbHVlO1xuICAgIH0sXG5cbiAgICBjb21iaW5lOiAodmFsdWVzKSA9PiBjcmVhdGVEZWxpbWl0ZWQodmFsdWVzLCBheGVzLCAnICcpXG59O1xuIl19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9jb2xvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBLElBQU0sVUFBVSxHQUFHLDZDQUFlLENBQUM7QUFDbkMsSUFBTSxhQUFhLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQzs7a0JBRXpCO0FBQ1gsZ0JBQVksZUFBTyxjQUFJLFlBQVksRUFBSyxjQUFJLFlBQVksQ0FBRTs7QUFFMUQsUUFBSSxFQUFFLFVBQUMsS0FBSztlQUFLLGNBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLGNBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLGNBQUksSUFBSSxDQUFDLEtBQUssQ0FBQztLQUFBOztBQUV0RSxTQUFLLEVBQUUsVUFBQyxLQUFLLEVBQUs7QUFDZCxhQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsYUFBYSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ3BDLGdCQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDM0IsdUJBQU8sVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNyQztTQUNKO0tBQ0o7O0FBRUQsV0FBTyxFQUFFLFVBQUMsTUFBTTtlQUFLLEFBQUMsTUFBTSxDQUFDLEdBQUcsS0FBSyxTQUFTLEdBQUksY0FBSSxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsY0FBSSxPQUFPLENBQUMsTUFBTSxDQUFDO0tBQUE7Q0FDOUYiLCJmaWxlIjoiY29sb3IuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHRQZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmdiIGZyb20gJy4vcmdiJztcbmltcG9ydCBoc2wgZnJvbSAnLi9oc2wnO1xuaW1wb3J0IGhleCBmcm9tICcuL2hleCc7XG5cbmNvbnN0IGNvbG9yVHlwZXMgPSBbcmdiLCBoc2wsIGhleF07XG5jb25zdCBudW1Db2xvclR5cGVzID0gY29sb3JUeXBlcy5sZW5ndGg7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkZWZhdWx0UHJvcHM6IHsgLi4ucmdiLmRlZmF1bHRQcm9wcywgLi4uaHNsLmRlZmF1bHRQcm9wcyB9LFxuXG4gICAgdGVzdDogKHZhbHVlKSA9PiByZ2IudGVzdCh2YWx1ZSkgfHwgaGV4LnRlc3QodmFsdWUpIHx8IGhzbC50ZXN0KHZhbHVlKSxcblxuICAgIHNwbGl0OiAodmFsdWUpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1Db2xvclR5cGVzOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChjb2xvclR5cGVzW2ldLnRlc3QodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbG9yVHlwZXNbaV0uc3BsaXQodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIGNvbWJpbmU6ICh2YWx1ZXMpID0+ICh2YWx1ZXMuUmVkICE9PSB1bmRlZmluZWQpID8gcmdiLmNvbWJpbmUodmFsdWVzKSA6IGhzbC5jb21iaW5lKHZhbHVlcylcbn07XG4iXX0=

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(2);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9jb21wbGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLElBQU0sV0FBVyxHQUFHLGtCQUFrQixDQUFDO0FBQ3ZDLElBQU0sYUFBYSxHQUFHLFVBQUMsS0FBSztXQUFLLElBQUksR0FBRyxLQUFLLEdBQUcsR0FBRztDQUFBLENBQUM7O2tCQUVyQzs7QUFFWCxRQUFJLEVBQUUsVUFBQyxLQUFLLEVBQUs7QUFDYixZQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3pDLGVBQVEsV0FUUCxPQUFPLEVBU1EsT0FBTyxDQUFDLElBQUksT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUU7S0FDbkQ7O0FBRUQsWUFBUSxFQUFFLFVBQUMsS0FBSyxFQUFLO0FBQ2pCLFlBQUksT0FBTyxHQUFHLENBQUMsQ0FBQztBQUNoQixlQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFO21CQUFNLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUFBLENBQUMsQ0FBQztLQUNyRTs7QUFFRCxTQUFLLEVBQUUsVUFBQyxLQUFLLEVBQUs7QUFDZCxZQUFNLFVBQVUsR0FBRyxFQUFFLENBQUM7O0FBRXRCLGFBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBSyxFQUFFLENBQUM7bUJBQUssVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUs7U0FBQSxDQUFDLENBQUM7O0FBRXRFLGVBQU8sVUFBVSxDQUFDO0tBQ3JCOztBQUVELFdBQU8sRUFBRSxVQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUs7QUFDM0IsYUFBSyxJQUFJLEdBQUcsSUFBSSxNQUFNLEVBQUU7QUFDcEIsZ0JBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtBQUM1Qix3QkFBUSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQ2hFO1NBQ0o7O0FBRUQsZUFBTyxRQUFRLENBQUM7S0FDbkI7O0NBRUoiLCJmaWxlIjoiY29tcGxleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dFBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuXG5jb25zdCBGTE9BVF9SRUdFWCA9IC8oLSk/KFxcZFtcXGRcXC5dKikvZztcbmNvbnN0IGdlbmVyYXRlVG9rZW4gPSAodG9rZW4pID0+ICckeycgKyB0b2tlbiArICd9JztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgdGVzdDogKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSB2YWx1ZS5tYXRjaChGTE9BVF9SRUdFWCk7XG4gICAgICAgIHJldHVybiAoaXNBcnJheShtYXRjaGVzKSAmJiBtYXRjaGVzLmxlbmd0aCA+IDEpO1xuICAgIH0sXG5cbiAgICB0ZW1wbGF0ZTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGxldCBjb3VudGVyID0gMDtcbiAgICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoRkxPQVRfUkVHRVgsICgpID0+IGdlbmVyYXRlVG9rZW4oY291bnRlcisrKSk7XG4gICAgfSxcblxuICAgIHNwbGl0OiAodmFsdWUpID0+IHtcbiAgICAgICAgY29uc3Qgc3BsaXRWYWx1ZSA9IHt9O1xuXG4gICAgICAgIHZhbHVlLm1hdGNoKEZMT0FUX1JFR0VYKS5mb3JFYWNoKCh2YWx1ZSwgaSkgPT4gc3BsaXRWYWx1ZVtpXSA9IHZhbHVlKTtcblxuICAgICAgICByZXR1cm4gc3BsaXRWYWx1ZTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogKHZhbHVlcywgdGVtcGxhdGUpID0+IHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHZhbHVlcykge1xuICAgICAgICAgICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGUgPSB0ZW1wbGF0ZS5yZXBsYWNlKGdlbmVyYXRlVG9rZW4oa2V5KSwgdmFsdWVzW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgIH1cblxufTsiXX0=

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9oZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztrQkFFZTtBQUNYLGdCQUFZLEVBQUUsY0FBSSxZQUFZOztBQUU5QixRQUFJLEVBQUUsVUFBQyxLQUFLO2VBQU0sS0FBSyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQUM7O0FBRW5ELFNBQUssRUFBRSxVQUFDLEtBQUssRUFBSztBQUNkLFlBQUksQ0FBQyxZQUFBO1lBQUUsQ0FBQyxZQUFBO1lBQUUsQ0FBQyxZQUFBOzs7QUFBQyxBQUdaLFlBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7QUFDbEIsYUFBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3ZCLGFBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN2QixhQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDOzs7QUFBQyxTQUcxQixNQUFNO0FBQ0gsaUJBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN2QixpQkFBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3ZCLGlCQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDdkIsaUJBQUMsSUFBSSxDQUFDLENBQUM7QUFDUCxpQkFBQyxJQUFJLENBQUMsQ0FBQztBQUNQLGlCQUFDLElBQUksQ0FBQyxDQUFDO2FBQ1Y7O0FBRUQsZUFBTztBQUNILGVBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztBQUNwQixpQkFBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO0FBQ3RCLGdCQUFJLEVBQUUsUUFBUSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7QUFDckIsaUJBQUssRUFBRSxDQUFDO1NBQ1gsQ0FBQztLQUNMOztBQUVELFdBQU8sRUFBRSxVQUFDLE1BQU07ZUFBSyxjQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUM7S0FBQTtDQUMzQyIsImZpbGUiOiJoZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHRQZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmdiIGZyb20gJy4vcmdiJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRlZmF1bHRQcm9wczogcmdiLmRlZmF1bHRQcm9wcyxcblxuICAgIHRlc3Q6ICh2YWx1ZSkgPT4gKHZhbHVlICYmIHZhbHVlLmluZGV4T2YoJyMnKSA+IC0xKSxcblxuICAgIHNwbGl0OiAodmFsdWUpID0+IHtcbiAgICAgICAgbGV0IHIsIGcsIGI7XG5cbiAgICAgICAgLy8gSWYgd2UgaGF2ZSA2IGNoYXJhY3RlcnMsIGllICNGRjAwMDBcbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+IDQpIHtcbiAgICAgICAgICAgIHIgPSB2YWx1ZS5zdWJzdHIoMSwgMik7XG4gICAgICAgICAgICBnID0gdmFsdWUuc3Vic3RyKDMsIDIpO1xuICAgICAgICAgICAgYiA9IHZhbHVlLnN1YnN0cig1LCAyKTtcblxuICAgICAgICAvLyBPciB3ZSBoYXZlIDMgY2hhcmFjdGVycywgaWUgI0YwMFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgciA9IHZhbHVlLnN1YnN0cigxLCAxKTtcbiAgICAgICAgICAgIGcgPSB2YWx1ZS5zdWJzdHIoMiwgMSk7XG4gICAgICAgICAgICBiID0gdmFsdWUuc3Vic3RyKDMsIDEpO1xuICAgICAgICAgICAgciArPSByO1xuICAgICAgICAgICAgZyArPSBnO1xuICAgICAgICAgICAgYiArPSBiO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFJlZDogcGFyc2VJbnQociwgMTYpLFxuICAgICAgICAgICAgR3JlZW46IHBhcnNlSW50KGcsIDE2KSxcbiAgICAgICAgICAgIEJsdWU6IHBhcnNlSW50KGIsIDE2KSxcbiAgICAgICAgICAgIEFscGhhOiAxXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIGNvbWJpbmU6ICh2YWx1ZXMpID0+IHJnYi5jb21iaW5lKHZhbHVlcylcbn07Il19

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _defaultProps = __webpack_require__(47);
	
	var _dictionary = __webpack_require__(48);
	
	var _utils = __webpack_require__(2);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9oc2wuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztrQkFJZTtBQUNYLGdCQUFZLEVBQUU7QUFDVixXQUFHLEVBQUU7QUFDRCxlQUFHLEVBQUUsQ0FBQztBQUNOLGVBQUcsRUFBRSxHQUFHO1NBQ1g7QUFDRCxrQkFBVSxnQkFWVCxPQUFPLEFBVVc7QUFDbkIsaUJBQVMsZ0JBWFIsT0FBTyxBQVdVO0FBQ2xCLGFBQUssZ0JBWkssT0FBTyxBQVlIO0tBQ2pCOztBQUVELFFBQUksRUFBRSxVQUFDLEtBQUs7ZUFBTSxLQUFLLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7S0FBQzs7QUFFckQsU0FBSyxFQUFFLFVBQUMsS0FBSztlQUFLLFdBZjBCLGNBQWMsRUFlekIsS0FBSyxjQWhCakMsR0FBRyxDQWdCeUM7S0FBQTs7QUFFakQsV0FBTyxFQUFFLFVBQUMsTUFBTTtlQUFLLFdBakJDLG9CQUFvQixFQWlCQSxXQWpCckMsZUFBZSxFQWlCc0MsTUFBTSxjQWxCM0QsR0FBRyxFQWtCb0UsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQztLQUFBO0NBQ2hHIiwiZmlsZSI6ImhzbC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dFBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHBlcmNlbnQsIG9wYWNpdHkgfSBmcm9tICcuL3NldHRpbmdzL2RlZmF1bHQtcHJvcHMnO1xuaW1wb3J0IHsgaHNsIGFzIGhzbFRlcm1zIH0gZnJvbSAnLi9zZXR0aW5ncy9kaWN0aW9uYXJ5JztcbmltcG9ydCB7IGNyZWF0ZURlbGltaXRlZCwgY3JlYXRlRnVuY3Rpb25TdHJpbmcsIGdldENvbG9yVmFsdWVzIH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBIdWU6IHtcbiAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgIG1heDogMzYwXG4gICAgICAgIH0sXG4gICAgICAgIFNhdHVyYXRpb246IHBlcmNlbnQsXG4gICAgICAgIExpZ2h0bmVzczogcGVyY2VudCxcbiAgICAgICAgQWxwaGE6IG9wYWNpdHlcbiAgICB9LFxuXG4gICAgdGVzdDogKHZhbHVlKSA9PiAodmFsdWUgJiYgdmFsdWUuaW5kZXhPZignaHNsJykgPiAtMSksXG5cbiAgICBzcGxpdDogKHZhbHVlKSA9PiBnZXRDb2xvclZhbHVlcyh2YWx1ZSwgaHNsVGVybXMpLFxuXG4gICAgY29tYmluZTogKHZhbHVlcykgPT4gY3JlYXRlRnVuY3Rpb25TdHJpbmcoY3JlYXRlRGVsaW1pdGVkKHZhbHVlcywgaHNsVGVybXMsICcsICcsIDIpLCAnaHNsYScpXG59O1xuIl19

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _dictionary = __webpack_require__(48);
	
	var _utils = __webpack_require__(2);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9wb3NpdGlvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7a0JBSWU7QUFDWCxnQkFBWSxFQUFFLGFBQVksWUFBWTs7Ozs7Ozs7Ozs7OztBQWF0QyxTQUFLLEVBQUUsVUFBQyxLQUFLLEVBQUs7QUFDZCxZQUFNLFVBQVUsR0FBRyxFQUFFLENBQUM7QUFDdEIsWUFBTSxjQUFjLEdBQUcsV0FuQkwsbUJBQW1CLEVBbUJNLEtBQUssQ0FBQyxDQUFDO0FBQ2xELFlBQU0sWUFBWSxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUM7QUFDM0MsWUFBTSxRQUFRLEdBQUcsQUFBQyxZQUFZLEtBQUssQ0FBQyxHQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDOUMsWUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDOztBQUVWLGFBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDeEIsc0JBQVUsQ0FBQyxZQTFCZCxTQUFTLENBMEJlLENBQUMsQ0FBQyxDQUFDLEdBQUcsY0FBYyxDQUFDLENBQUMsQ0FBQzs7O0FBQUMsQUFHN0MsYUFBQyxFQUFFLENBQUM7QUFDSixhQUFDLEdBQUcsQUFBQyxDQUFDLEtBQUssWUFBWSxHQUFJLENBQUMsR0FBRyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1NBQy9DOztBQUVELGVBQU8sVUFBVSxDQUFDO0tBQ3JCOztBQUVELFdBQU8sRUFBRSxVQUFDLE1BQU07ZUFBSyxXQW5DaEIsZUFBZSxFQW1DaUIsTUFBTSxjQXBDdEMsU0FBUyxFQW9DMEMsR0FBRyxDQUFDO0tBQUE7Q0FDL0QiLCJmaWxlIjoicG9zaXRpb25zLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0UGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcG9zaXRpb25zIH0gZnJvbSAnLi9zZXR0aW5ncy9kaWN0aW9uYXJ5JztcbmltcG9ydCB7IGNyZWF0ZURlbGltaXRlZCwgc3BsaXRTcGFjZURlbGltaXRlZCB9IGZyb20gJy4uL2luYy91dGlscyc7XG5pbXBvcnQgcHhWYWx1ZVR5cGUgZnJvbSAnLi9weCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkZWZhdWx0UHJvcHM6IHB4VmFsdWVUeXBlLmRlZmF1bHRQcm9wcyxcblxuICAgIC8qXG4gICAgICAgIFNwbGl0IGRpbWVuc2lvbnMgaW4gZm9ybWF0IFwiVG9wIFJpZ2h0IEJvdHRvbSBMZWZ0XCJcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogUG9zaXRpb24gdmFsdWVzXG4gICAgICAgICAgICBcIjIwcHggMCAzMHB4IDQwcHhcIiAtPiB7MjBweCwgMCwgMzBweCwgNDBweH1cbiAgICAgICAgICAgIFwiMjBweCAwIDMwcHhcIiAtPiB7MjBweCwgMCwgMzBweCwgMH1cbiAgICAgICAgICAgIFwiMjBweCAwXCIgLT4gezIwcHgsIDAsIDIwcHgsIDB9XG4gICAgICAgICAgICBcIjIwcHhcIiAtPiB7MjBweCwgMjBweCwgMjBweCwgMjBweH1cbiAgICAgICAgXG4gICAgICAgIEByZXR1cm4gW29iamVjdF06IE9iamVjdCB3aXRoIFQvUi9CL0wgbWV0cmljc1xuICAgICovXG4gICAgc3BsaXQ6ICh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBzcGxpdFZhbHVlID0ge307XG4gICAgICAgIGNvbnN0IHNwbGl0UG9zaXRpb25zID0gc3BsaXRTcGFjZURlbGltaXRlZCh2YWx1ZSk7XG4gICAgICAgIGNvbnN0IG51bVBvc2l0aW9ucyA9IHNwbGl0UG9zaXRpb25zLmxlbmd0aDtcbiAgICAgICAgY29uc3QganVtcEJhY2sgPSAobnVtUG9zaXRpb25zICE9PSAxKSA/IDIgOiAxO1xuICAgICAgICBsZXQgaiA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgIHNwbGl0VmFsdWVbcG9zaXRpb25zW2ldXSA9IHNwbGl0UG9zaXRpb25zW2pdO1xuXG4gICAgICAgICAgICAvLyBKdW1wIGJhY2sgKHRvIHN0YXJ0KSBjb3VudGVyIGlmIHdlJ3ZlIHJlYWNoZWQgdGhlIGVuZCBvZiBvdXIgdmFsdWVzXG4gICAgICAgICAgICBqKys7XG4gICAgICAgICAgICBqID0gKGogPT09IG51bVBvc2l0aW9ucykgPyBqIC0ganVtcEJhY2sgOiBqO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNwbGl0VmFsdWU7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6ICh2YWx1ZXMpID0+IGNyZWF0ZURlbGltaXRlZCh2YWx1ZXMsIHBvc2l0aW9ucywgJyAnKVxufTsiXX0=

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9weC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O2tCQUVlO0FBQ1gsZ0JBQVksRUFBRTtBQUNWLFlBQUksRUFBRSxJQUFJO0FBQ1YsWUFBSSxnQkFBVTtLQUNqQjtDQUNKIiwiZmlsZSI6InB4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0UGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVuaXRUeXBlIGZyb20gJy4vdW5pdCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgdW5pdDogJ3B4JyxcbiAgICAgICAgdHlwZTogdW5pdFR5cGVcbiAgICB9XG59OyJdfQ==

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(2);
	
	var _dictionary = __webpack_require__(48);
	
	var _defaultProps = __webpack_require__(47);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9yZ2IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztrQkFJZTtBQUNYLGdCQUFZLEVBQUU7QUFDVixXQUFHLGdCQUpGLEdBQUcsQUFJVztBQUNmLGFBQUssZ0JBTEosR0FBRyxBQUthO0FBQ2pCLFlBQUksZ0JBTkgsR0FBRyxBQU1ZO0FBQ2hCLGFBQUssZ0JBUGUsT0FBTyxBQU9OO0tBQ3hCOztBQUVELFFBQUksRUFBRSxVQUFDLEtBQUs7ZUFBTSxLQUFLLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7S0FBQzs7QUFFckQsU0FBSyxFQUFFLFVBQUMsS0FBSztlQUFLLFdBZDBCLGNBQWMsRUFjekIsS0FBSyxjQWJqQyxHQUFHLENBYXlDO0tBQUE7O0FBRWpELFdBQU8sRUFBRSxVQUFDLE1BQU07ZUFBSyxXQWhCQyxvQkFBb0IsRUFnQkEsV0FoQnJDLGVBQWUsRUFnQnNDLE1BQU0sY0FmM0QsR0FBRyxFQWVvRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDO0tBQUE7Q0FDaEciLCJmaWxlIjoicmdiLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0UGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRGVsaW1pdGVkLCBjcmVhdGVGdW5jdGlvblN0cmluZywgZ2V0Q29sb3JWYWx1ZXMgfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuaW1wb3J0IHsgcmdiIGFzIHJnYlRlcm1zIH0gZnJvbSAnLi9zZXR0aW5ncy9kaWN0aW9uYXJ5JztcbmltcG9ydCB7IHJnYiBhcyBkZWZhdWx0UkdCLCBvcGFjaXR5IGFzIGRlZmF1bHRPcGFjaXR5IH0gZnJvbSAnLi9zZXR0aW5ncy9kZWZhdWx0LXByb3BzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBSZWQ6IGRlZmF1bHRSR0IsXG4gICAgICAgIEdyZWVuOiBkZWZhdWx0UkdCLFxuICAgICAgICBCbHVlOiBkZWZhdWx0UkdCLFxuICAgICAgICBBbHBoYTogZGVmYXVsdE9wYWNpdHlcbiAgICB9LFxuXG4gICAgdGVzdDogKHZhbHVlKSA9PiAodmFsdWUgJiYgdmFsdWUuaW5kZXhPZigncmdiJykgPiAtMSksXG5cbiAgICBzcGxpdDogKHZhbHVlKSA9PiBnZXRDb2xvclZhbHVlcyh2YWx1ZSwgcmdiVGVybXMpLFxuXG4gICAgY29tYmluZTogKHZhbHVlcykgPT4gY3JlYXRlRnVuY3Rpb25TdHJpbmcoY3JlYXRlRGVsaW1pdGVkKHZhbHVlcywgcmdiVGVybXMsICcsICcsIDIpLCAncmdiYScpXG59OyJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9zY2FsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7a0JBQWU7QUFDWCxnQkFBWSxFQUFFO0FBQ1YsZUFBTyxFQUFFLENBQUM7S0FDYjtDQUNKIiwiZmlsZSI6InNjYWxlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0UGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBjdXJyZW50OiAxXG4gICAgfVxufTsiXX0=

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _color = __webpack_require__(24);
	
	var _color2 = _interopRequireDefault(_color);
	
	var _px = __webpack_require__(29);
	
	var _dictionary = __webpack_require__(48);
	
	var _utils = __webpack_require__(2);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9zaGFkb3cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0EsSUFBTSx1QkFBdUIsR0FBRyxZQUh2QixNQUFNLENBRzZCLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7O2tCQUV6QztBQUNYLGdCQUFZLGVBQ0wsZ0JBQU0sWUFBWTtBQUNyQixTQUFDLE1BVEEsWUFBWSxBQVNJO0FBQ2pCLFNBQUMsTUFWQSxZQUFZLEFBVUk7QUFDakIsY0FBTSxNQVhMLFlBQVksQUFXUztBQUN0QixjQUFNLE1BWkwsWUFBWSxBQVlTO01BQ3pCOztBQUVELFNBQUssRUFBRSxVQUFDLEtBQUssRUFBSztBQUNkLFlBQU0sSUFBSSxHQUFHLFdBZFosbUJBQW1CLEVBY2EsS0FBSyxDQUFDLENBQUM7QUFDeEMsWUFBSSxlQUFlLEdBQUcsS0FBSyxDQUFDO0FBQzVCLFlBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQztBQUNuQixZQUFJLFVBQVUsR0FBRyxFQUFFLENBQUM7O0FBRXBCLFlBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFLOztBQUVyQixnQkFBSSxlQUFlLElBQUksZ0JBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO0FBQ3BDLCtCQUFlLEdBQUcsSUFBSSxDQUFDO0FBQ3ZCLHlCQUFTLElBQUksR0FBRzs7O0FBQUMsYUFHcEIsTUFBTTtBQUNILDhCQUFVLENBQUMsWUE1QmxCLE1BQU0sQ0E0QndCLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO2lCQUNwQztTQUNKLENBQUMsQ0FBQzs7QUFFSCxZQUFNLGVBQWUsR0FBRyxnQkFBTSxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7O0FBRS9DLDRCQUFZLFVBQVUsSUFBRSxlQUFlLEVBQWYsZUFBZSxJQUFHO0tBQzdDOztBQUVELFdBQU8sRUFBRSxVQUFDLE1BQU07ZUFBSyxXQXBDSyxlQUFlLEVBb0NKLE1BQU0sRUFBRSx1QkFBdUIsRUFBRSxHQUFHLENBQUMsR0FBRyxnQkFBTSxPQUFPLENBQUMsTUFBTSxDQUFDO0tBQUE7Q0FDckciLCJmaWxlIjoic2hhZG93LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0UGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbG9yIGZyb20gJy4vY29sb3InO1xuaW1wb3J0IHsgZGVmYXVsdFByb3BzIGFzIHB4RGVmYXVsdFByb3BzIH0gZnJvbSAnLi9weCc7XG5pbXBvcnQgeyBzaGFkb3cgYXMgc2hhZG93VGVybXMgfSBmcm9tICcuL3NldHRpbmdzL2RpY3Rpb25hcnknO1xuaW1wb3J0IHsgc3BsaXRTcGFjZURlbGltaXRlZCwgY3JlYXRlRGVsaW1pdGVkIH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcblxuY29uc3Qgc2hhZG93V2l0aG91dENvbG9yVGVybXMgPSBzaGFkb3dUZXJtcy5zbGljZSgwLCA0KTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICAuLi5jb2xvci5kZWZhdWx0UHJvcHMsXG4gICAgICAgIFg6IHB4RGVmYXVsdFByb3BzLFxuICAgICAgICBZOiBweERlZmF1bHRQcm9wcyxcbiAgICAgICAgUmFkaXVzOiBweERlZmF1bHRQcm9wcyxcbiAgICAgICAgU3ByZWFkOiBweERlZmF1bHRQcm9wc1xuICAgIH0sXG5cbiAgICBzcGxpdDogKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IGJpdHMgPSBzcGxpdFNwYWNlRGVsaW1pdGVkKHZhbHVlKTtcbiAgICAgICAgbGV0IGhhc1JlYWNoZWRDb2xvciA9IGZhbHNlO1xuICAgICAgICBsZXQgY29sb3JQcm9wID0gJyc7XG4gICAgICAgIGxldCBzcGxpdFZhbHVlID0ge307XG5cbiAgICAgICAgYml0cy5mb3JFYWNoKChiaXQsIGkpID0+IHtcbiAgICAgICAgICAgIC8vIElmIHdlJ3ZlIHJlYWNoZWQgdGhlIGNvbG9yIHByb3BzLCBhcHBlbmQgdG8gY29sb3Igc3RyaW5nXG4gICAgICAgICAgICBpZiAoaGFzUmVhY2hlZENvbG9yIHx8IGNvbG9yLnRlc3QoYml0KSkge1xuICAgICAgICAgICAgICAgIGhhc1JlYWNoZWRDb2xvciA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29sb3JQcm9wICs9IGJpdDtcblxuICAgICAgICAgICAgLy8gRWxzZSBwcm9jZXNzIHNoYWRvdyB2YWx1ZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzcGxpdFZhbHVlW3NoYWRvd1Rlcm1zW2ldXSA9IGJpdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3Qgc3BsaXRDb2xvclByb3BzID0gY29sb3Iuc3BsaXQoY29sb3JQcm9wKTtcblxuICAgICAgICByZXR1cm4geyAuLi5zcGxpdFZhbHVlLCBzcGxpdENvbG9yUHJvcHMgfTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogKHZhbHVlcykgPT4gY3JlYXRlRGVsaW1pdGVkKHZhbHVlcywgc2hhZG93V2l0aG91dENvbG9yVGVybXMsICcgJykgKyBjb2xvci5jb21iaW5lKHZhbHVlcylcbn07XG4iXX0=

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(2);
	
	/*
	    Split a value into a value/unit object
	    
	        "200px" -> { value: 200, unit: "px" }
	        
	    @param [string]: Value to split
	    @return [object]: Object with value and unit props
	*/
	var findValueAndUnit = function (value) {
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
	
	exports.default = {
	    test: function (unparsed) {
	        var _findValueAndUnit = findValueAndUnit(unparsed);
	
	        var value = _findValueAndUnit.value;
	
	        return (0, _utils.isNum)(value) && !isNaN(value) ? true : false;
	    },
	
	    parse: function (unparsed, parent) {
	        var _findValueAndUnit2 = findValueAndUnit(unparsed);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy91bml0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBU0EsSUFBTSxnQkFBZ0IsR0FBRyxVQUFDLEtBQUssRUFBSztBQUNoQyxRQUFJLEtBQUssQ0FBQyxLQUFLLEVBQUU7QUFDYixZQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUM7O0FBRXBELGVBQU87QUFDSCxpQkFBSyxFQUFFLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDaEMsZ0JBQUksRUFBRyxVQUFVLENBQUMsQ0FBQyxDQUFDO1NBQ3ZCLENBQUM7S0FDTCxNQUFNO0FBQ0gsZUFBTyxFQUFFLEtBQUssRUFBTCxLQUFLLEVBQUUsQ0FBQztLQUNwQjtDQUNKLENBQUM7O2tCQUVhO0FBQ1gsUUFBSSxFQUFFLFVBQVUsUUFBUSxFQUFFO2dDQUNKLGdCQUFnQixDQUFDLFFBQVEsQ0FBQzs7WUFBcEMsS0FBSyxxQkFBTCxLQUFLOztBQUNiLGVBQU8sQUFBQyxXQXpCUCxLQUFLLEVBeUJRLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFJLElBQUksR0FBRyxLQUFLLENBQUM7S0FDekQ7O0FBRUQsU0FBSyxFQUFFLFVBQVUsUUFBUSxFQUFFLE1BQU0sRUFBRTtpQ0FDUCxnQkFBZ0IsQ0FBQyxRQUFRLENBQUM7O1lBQTFDLEtBQUssc0JBQUwsS0FBSztZQUFFLElBQUksc0JBQUosSUFBSTs7QUFFbkIsWUFBSSxJQUFJLElBQUksSUFBSSxLQUFLLElBQUksRUFBRTtBQUN2QixrQkFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FDdEI7O0FBRUQsZUFBTyxLQUFLLENBQUM7S0FDaEI7O0FBRUQsYUFBUyxFQUFFLFVBQUMsTUFBTSxFQUFFLE1BQU07ZUFBSyxNQUFNLElBQUksTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUEsQUFBQztLQUFBO0NBQzlEIiwiZmlsZSI6InVuaXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHRQZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc051bSB9IGZyb20gJy4uL2luYy91dGlscyc7XG4vKlxuICAgIFNwbGl0IGEgdmFsdWUgaW50byBhIHZhbHVlL3VuaXQgb2JqZWN0XG4gICAgXG4gICAgICAgIFwiMjAwcHhcIiAtPiB7IHZhbHVlOiAyMDAsIHVuaXQ6IFwicHhcIiB9XG4gICAgICAgIFxuICAgIEBwYXJhbSBbc3RyaW5nXTogVmFsdWUgdG8gc3BsaXRcbiAgICBAcmV0dXJuIFtvYmplY3RdOiBPYmplY3Qgd2l0aCB2YWx1ZSBhbmQgdW5pdCBwcm9wc1xuKi9cbmNvbnN0IGZpbmRWYWx1ZUFuZFVuaXQgPSAodmFsdWUpID0+IHtcbiAgICBpZiAodmFsdWUubWF0Y2gpIHtcbiAgICAgICAgY29uc3Qgc3BsaXRWYWx1ZSA9IHZhbHVlLm1hdGNoKC8oLT9cXGQqXFwuP1xcZCopKC4qKS8pO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcGFyc2VGbG9hdChzcGxpdFZhbHVlWzFdKSxcbiAgICAgICAgICAgIHVuaXQ6ICBzcGxpdFZhbHVlWzJdXG4gICAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHsgdmFsdWUgfTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgdGVzdDogZnVuY3Rpb24gKHVucGFyc2VkKSB7XG4gICAgICAgIGNvbnN0IHsgdmFsdWUgfSA9IGZpbmRWYWx1ZUFuZFVuaXQodW5wYXJzZWQpO1xuICAgICAgICByZXR1cm4gKGlzTnVtKHZhbHVlKSAmJiAhaXNOYU4odmFsdWUpKSA/IHRydWUgOiBmYWxzZTtcbiAgICB9LFxuXG4gICAgcGFyc2U6IGZ1bmN0aW9uICh1bnBhcnNlZCwgcGFyZW50KSB7XG4gICAgICAgIGNvbnN0IHsgdmFsdWUsIHVuaXQgfSA9IGZpbmRWYWx1ZUFuZFVuaXQodW5wYXJzZWQpO1xuXG4gICAgICAgIGlmICh1bml0ICYmIHVuaXQgIT09IHVuaXQpIHtcbiAgICAgICAgICAgIHBhcmVudC51bml0ID0gdW5pdDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9LFxuXG4gICAgc2VyaWFsaXplOiAocGFyc2VkLCBwYXJlbnQpID0+IHBhcnNlZCArIChwYXJlbnQudW5pdCB8fCAnJylcbn07XG4iXX0=

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.circularMotion = exports.createMapper = undefined;
	
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
	    return (0, _calc.pointFromAngleAndDistance)({
	        x: values.originX.current,
	        y: values.originY.current
	    }, values.angle.current, values.distance.current)[key];
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvdHJhbnNmb3JtZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFTyxJQUFNLFlBQVksV0FBWixZQUFZLEdBQUcsVUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFLO0FBQ3RDLFFBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7O0FBRTlCLFdBQU8sVUFBQyxLQUFLLEVBQUs7QUFDZCxhQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ2hDLGdCQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLFNBQVMsRUFBRTtBQUNwQyx1QkFBTyxVQVJRLG9CQUFvQixFQVFQLFVBUlMsUUFBUSxFQVFSLFVBUjVDLG9CQUFvQixFQVE2QyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNwSDtTQUNKO0tBQ0osQ0FBQztDQUNMLENBQUM7O0FBRUssSUFBTSxjQUFjLFdBQWQsY0FBYyxHQUFHLFVBQUMsQ0FBQyxFQUFFLEdBQUc7UUFBSSxNQUFNLFFBQU4sTUFBTTtXQUMzQyxVQWYyRCx5QkFBeUIsRUFlMUQ7QUFDdEIsU0FBQyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTztBQUN6QixTQUFDLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPO0tBQzVCLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUM7Q0FBQSxDQUFDIiwiZmlsZSI6InRyYW5zZm9ybWVycy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dFBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFByb2dyZXNzRnJvbVZhbHVlLCBnZXRWYWx1ZUZyb21Qcm9ncmVzcywgcmVzdHJpY3QsIHBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UgfSBmcm9tICcuLi9pbmMvY2FsYyc7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVNYXBwZXIgPSAoZnJvbSwgdG8pID0+IHtcbiAgICBjb25zdCBtYXBMZW5ndGggPSBmcm9tLmxlbmd0aDtcblxuICAgIHJldHVybiAodmFsdWUpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBtYXBMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHZhbHVlIDwgZnJvbVtpXSB8fCBpID09PSBtYXBMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MocmVzdHJpY3QoZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUodmFsdWUsIGZyb21baSAtIDFdLCBmcm9tW2ldKSwgMCwgMSksIHRvW2kgLSAxXSwgdG9baV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBjaXJjdWxhck1vdGlvbiA9ICh2LCBrZXksIHsgdmFsdWVzIH0pID0+IFxuICAgIHBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2Uoe1xuICAgICAgICB4OiB2YWx1ZXMub3JpZ2luWC5jdXJyZW50LFxuICAgICAgICB5OiB2YWx1ZXMub3JpZ2luWS5jdXJyZW50IFxuICAgIH0sIHZhbHVlcy5hbmdsZS5jdXJyZW50LCB2YWx1ZXMuZGlzdGFuY2UuY3VycmVudClba2V5XTtcblxuIl19

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _calc = __webpack_require__(20);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rvci9pbmMvZ2VuZXJhdGUtYmxlbmQtY3VydmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUEsSUFBTSxjQUFjLEdBQUcsRUFBRSxDQUFDOztrQkFFWCxVQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFLO0FBQ3pDLFFBQU0sUUFBUSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7O0FBRXZDLFFBQUksU0FBUyxDQUFDLE9BQU8sS0FBSyxTQUFTLElBQUksQ0FBQyxRQUFRLEVBQUU7QUFDOUMsZUFBTztLQUNWOztBQUVELFFBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDckMsUUFBTSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUM7QUFDNUQsUUFBTSxlQUFlLEdBQUcsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQztBQUM3RCxRQUFNLGtCQUFrQixHQUFHLFVBZHNCLElBQUksRUFjckIsVUFkdUIsUUFBUSxFQWN0QixVQWRwQyxvQkFBb0IsRUFjcUMsZUFBZSxFQUFFLENBQUMsRUFBRSxPQUFPLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNwSyxRQUFNLHNCQUFzQixHQUFHLE9BQU8sQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQztBQUMvRCxRQUFNLG9CQUFvQixHQUFHLGtCQUFrQixHQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUM7QUFDOUQsUUFBTSxlQUFlLEdBQUcsc0JBQXNCLEtBQUssb0JBQW9CLENBQUM7O0FBRXhFLFFBQU0sVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVB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QUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ2pILGdCQUFNLEVBQUUsR0FBRyxVQS9EUSxvQkFBb0IsRUErRFAsYUFBYSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNuRixnQkFBTSxFQUFFLEdBQUcsVUFoRVEsb0JBQW9CLEVBZ0VQLGFBQWEsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRW5GLGdCQUFJLGFBQWEsS0FBSyxDQUFDLEVBQUU7QUFDckIsd0JBQVEsQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO0FBQ2hDLHVCQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUM7YUFDMUI7O0FBRUQsbUJBQU8sVUF2RVksb0JBQW9CLEVBdUVYLGFBQWEsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDdEQsQ0FBQztLQUNMO0NBQ0oiLCJmaWxlIjoiZ2VuZXJhdGUtYmxlbmQtY3VydmUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHRQZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRQcm9ncmVzc0Zyb21WYWx1ZSwgZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MsIGVhc2UsIHJlc3RyaWN0IH0gZnJvbSAnLi4vLi4vaW5jL2NhbGMnO1xuXG5jb25zdCBCTEVORF9BQ0NVUkFDWSA9IDEwO1xuXG5leHBvcnQgZGVmYXVsdCAob3V0QWN0aW9uLCBpbkFjdGlvbiwga2V5KSA9PiB7XG4gICAgY29uc3Qgb3V0VmFsdWUgPSBvdXRBY3Rpb24udmFsdWVzW2tleV07XG5cbiAgICBpZiAob3V0QWN0aW9uLmVsYXBzZWQgPT09IHVuZGVmaW5lZCB8fCAhb3V0VmFsdWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGluVmFsdWUgPSBpbkFjdGlvbi52YWx1ZXNba2V5XTtcbiAgICBjb25zdCBvdXRUb3RhbER1cmF0aW9uID0gb3V0VmFsdWUuZGVsYXkgKyBvdXRWYWx1ZS5kdXJhdGlvbjtcbiAgICBjb25zdCB0aW1lVW50aWxPdXRFbmQgPSBvdXRUb3RhbER1cmF0aW9uIC0gb3V0QWN0aW9uLmVsYXBzZWQ7XG4gICAgY29uc3QgaW5Qb3NpdGlvbkF0T3V0RW5kID0gZWFzZShyZXN0cmljdChnZXRQcm9ncmVzc0Zyb21WYWx1ZSh0aW1lVW50aWxPdXRFbmQsIDAsIGluVmFsdWUuZGVsYXkgKyBpblZhbHVlLmR1cmF0aW9uKSwgMCwgMSksIGluVmFsdWUuZnJvbSwgaW5WYWx1ZS50bywgaW5WYWx1ZS5lYXNlKTtcbiAgICBjb25zdCBpbkJpZ2dlclRoYW5PdXRBdFN0YXJ0ID0gaW5WYWx1ZS5mcm9tID4gb3V0VmFsdWUuY3VycmVudDtcbiAgICBjb25zdCBpbkJpZ2dlclRoYW5PdXRBdEVuZCA9IGluUG9zaXRpb25BdE91dEVuZCA+IG91dFZhbHVlLnRvO1xuICAgIGNvbnN0IHR3ZWVuc0ludGVyc2VjdCA9IGluQmlnZ2VyVGhhbk91dEF0U3RhcnQgIT09IGluQmlnZ2VyVGhhbk91dEF0RW5kO1xuXG4gICAgY29uc3QgYmxlbmRDdXJ2ZSA9IFtbMCwgb3V0VmFsdWUuY3VycmVudF0sIFt0aW1lVW50aWxPdXRFbmQsIGluUG9zaXRpb25BdE91dEVuZF1dO1xuXG4gICAgLy8gSWYgdHdlZW5zIGludGVyc2VjdCwgcmVzb2x2ZSB0d2VlbnMgYXQgYSByZXNvbHV0aW9uIHRvIGZpbmQgZXhhY3RseSB3aGVyZVxuICAgIGlmICh0d2VlbnNJbnRlcnNlY3QpIHtcbiAgICAgICAgY29uc3QgdGltZVN0ZXBUb1Rlc3QgPSB0aW1lVW50aWxPdXRFbmQgLyBCTEVORF9BQ0NVUkFDWTtcbiAgICAgICAgbGV0IGZvdW5kUDEgPSBmYWxzZTtcbiAgICAgICAgbGV0IGZvdW5kUDIgPSBmYWxzZTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBCTEVORF9BQ0NVUkFDWTsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB0aW1lU3RlcCA9IGkgKiB0aW1lU3RlcFRvVGVzdDtcbiAgICAgICAgICAgIGNvbnN0IG91dEF0VGltZSA9IGVhc2UoZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUob3V0QWN0aW9uLmVsYXBzZWQgKyB0aW1lU3RlcCwgb3V0VmFsdWUuZGVsYXksIG91dFZhbHVlLmR1cmF0aW9uKSwgb3V0VmFsdWUuZnJvbSwgb3V0VmFsdWUudG8sIG91dFZhbHVlLmVhc2UpO1xuICAgICAgICAgICAgY29uc3QgaW5BdFRpbWUgPSBlYXNlKGdldFByb2dyZXNzRnJvbVZhbHVlKGluQWN0aW9uLmVsYXBzZWQgKyB0aW1lU3RlcCwgaW5WYWx1ZS5kZWxheSwgaW5WYWx1ZS5kdXJhdGlvbiksIGluVmFsdWUuZnJvbSwgaW5WYWx1ZS50bywgaW5WYWx1ZS5lYXNlKTtcblxuICAgICAgICAgICAgaWYgKCFmb3VuZFAxICYmICgoaW5CaWdnZXJUaGFuT3V0QXRTdGFydCAmJiBpbkF0VGltZSA8IG91dEF0VGltZSkgfHwgKCFpbkJpZ2dlclRoYW5PdXRBdFN0YXJ0ICYmIGluQXRUaW1lID4gb3V0QXRUaW1lKSkpIHtcbiAgICAgICAgICAgICAgICBibGVuZEN1cnZlLnNwbGljZSgxLCAwLCBbdGltZVN0ZXAsIGluQXRUaW1lXSk7XG4gICAgICAgICAgICAgICAgZm91bmRQMSA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChmb3VuZFAxICYmICgoaW5CaWdnZXJUaGFuT3V0QXRTdGFydCAmJiBpbkF0VGltZSA8IG91dFZhbHVlLmN1cnJlbnQpIHx8ICghaW5CaWdnZXJUaGFuT3V0QXRTdGFydCAmJiBpbkF0VGltZSA+IG91dFZhbHVlLmN1cnJlbnQpKSkge1xuICAgICAgICAgICAgICAgIGJsZW5kQ3VydmVbMl0gPSBbdGltZVN0ZXAsIGluQXRUaW1lXTtcbiAgICAgICAgICAgICAgICBmb3VuZFAyID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGZvdW5kUDIpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChibGVuZEN1cnZlLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAvLyBQYXNzIGJldHdlZW4gdHdlZW5zIHVzaW5nIGluY29taW5nIGVhc2luZyBpZiBqdXN0IHR3byBwb2ludHNcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJsZW5kUHJvZ3Jlc3MgPSByZXN0cmljdChnZXRQcm9ncmVzc0Zyb21WYWx1ZShpbkFjdGlvbi5lbGFwc2VkLCBibGVuZEN1cnZlWzBdWzBdLCBibGVuZEN1cnZlWzFdWzBdKSwgMCwgMSk7XG5cbiAgICAgICAgICAgIGlmIChibGVuZFByb2dyZXNzID09PSAxKSB7XG4gICAgICAgICAgICAgICAgaW5BY3Rpb24uYmxlbmRDdXJ2ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGVhc2UoYmxlbmRQcm9ncmVzcywgb3V0VmFsdWUuY3VycmVudCwgaW5WYWx1ZS5jdXJyZW50LCBpblZhbHVlLmVhc2UpO1xuICAgICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFBhc3MgYmV0d2VlbiB0d2VlbnMgdXNpbmcgYmV6aWVyIGludGVycG9sYXRpb25cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJsZW5kUHJvZ3Jlc3MgPSByZXN0cmljdChnZXRQcm9ncmVzc0Zyb21WYWx1ZShpbkFjdGlvbi5lbGFwc2VkLCBibGVuZEN1cnZlWzBdWzBdLCBibGVuZEN1cnZlWzJdWzBdKSwgMCwgMSk7XG4gICAgICAgICAgICBjb25zdCBhUCA9IGdldFZhbHVlRnJvbVByb2dyZXNzKGJsZW5kUHJvZ3Jlc3MsIGJsZW5kQ3VydmVbMF1bMV0sIGJsZW5kQ3VydmVbMV1bMV0pO1xuICAgICAgICAgICAgY29uc3QgYlAgPSBnZXRWYWx1ZUZyb21Qcm9ncmVzcyhibGVuZFByb2dyZXNzLCBibGVuZEN1cnZlWzFdWzFdLCBibGVuZEN1cnZlWzJdWzFdKTtcblxuICAgICAgICAgICAgaWYgKGJsZW5kUHJvZ3Jlc3MgPT09IDEpIHtcbiAgICAgICAgICAgICAgICBpbkFjdGlvbi5ibGVuZEN1cnZlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHJldHVybiBpblZhbHVlLmN1cnJlbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBnZXRWYWx1ZUZyb21Qcm9ncmVzcyhibGVuZFByb2dyZXNzLCBhUCwgYlApO1xuICAgICAgICB9O1xuICAgIH1cbn07XG4iXX0=

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _Input2 = __webpack_require__(10);
	
	var _Input3 = _interopRequireDefault(_Input2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Pointer = (function (_Input) {
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
	})(_Input3.default);
	
	exports.default = Pointer;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbnB1dC9Qb2ludGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUIsT0FBTztjQUFQLE9BQU87O0FBQ3hCLGFBRGlCLE9BQU8sQ0FDWixZQUFZLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRTs4QkFEbEMsT0FBTzs7cURBRXBCLGtCQUFNLFlBQVksQ0FBQzs7QUFDbkIsY0FBSyxZQUFZLEdBQUcsWUFBWSxDQUFDO0FBQ2pDLGNBQUssU0FBUyxHQUFHLFNBQVMsQ0FBQzs7S0FDOUI7O0FBTGdCLFdBQU8sV0FPeEIsTUFBTSxtQkFBQyxDQUFDLEVBQUU7QUFDTix5QkFBTSxNQUFNLEtBQUEsT0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbkMsU0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0tBQ3RCOztBQVZnQixXQUFPLFdBWXhCLEtBQUssb0JBQUc7OztBQUNKLHlCQUFNLEtBQUssS0FBQSxNQUFFLENBQUM7QUFDZCxnQkFBUSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFVBQUMsQ0FBQzttQkFBSyxPQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FBQSxDQUFDLENBQUM7S0FDcEY7O0FBZmdCLFdBQU8sV0FpQnhCLElBQUksbUJBQUc7OztBQUNILHlCQUFNLElBQUksS0FBQSxNQUFFLENBQUM7QUFDYixnQkFBUSxDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFVBQUMsQ0FBQzttQkFBSyxPQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FBQSxDQUFDLENBQUM7S0FDdkY7O1dBcEJnQixPQUFPOzs7a0JBQVAsT0FBTyIsImZpbGUiOiJQb2ludGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0UGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElucHV0IGZyb20gJy4vSW5wdXQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2ludGVyIGV4dGVuZHMgSW5wdXQge1xuICAgIGNvbnN0cnVjdG9yKGluaXRpYWxTdGF0ZSwgbW92ZUV2ZW50LCBldmVudFRvUG9pbnQpIHtcbiAgICAgICAgc3VwZXIoaW5pdGlhbFN0YXRlKTtcbiAgICAgICAgdGhpcy5ldmVudFRvUG9pbnQgPSBldmVudFRvUG9pbnQ7XG4gICAgICAgIHRoaXMubW92ZUV2ZW50ID0gbW92ZUV2ZW50O1xuICAgIH1cblxuICAgIGxhdGVzdChlKSB7XG4gICAgICAgIHN1cGVyLmxhdGVzdCh0aGlzLmV2ZW50VG9Qb2ludChlKSk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgc3VwZXIuc3RhcnQoKTtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5tb3ZlRXZlbnQsIChlKSA9PiB0aGlzLmxhdGVzdChlKSk7XG4gICAgfVxuXG4gICAgc3RvcCgpIHtcbiAgICAgICAgc3VwZXIuc3RvcCgpO1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLm1vdmVFdmVudCwgKGUpID0+IHRoaXMubGF0ZXN0KGUpKTtcbiAgICB9XG59XG4iXX0=

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.deactivate = exports.getProcessId = undefined;
	exports.activate = activate;
	
	var _timer = __webpack_require__(6);
	
	var _timer2 = _interopRequireDefault(_timer);
	
	var _tick = __webpack_require__(51);
	
	var _tick2 = _interopRequireDefault(_tick);
	
	var _manager = __webpack_require__(52);
	
	var _manager2 = _interopRequireDefault(_manager);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var processStepOrder = [{ name: 'onFrameStart' }, { name: 'onUpdate' }, { name: 'willRender', decideRender: true }, { name: 'onPreRender', isRender: true }, { name: 'onRender', isRender: true }, { name: 'onPostRender', isRender: true }, { name: 'onFrameEnd' }, { name: 'onCleanup' }]; /*
	                                                                                                                                                                                                                                                                                                 Core render loop
	                                                                                                                                                                                                                                                                                             
	                                                                                                                                                                                                                                                                                                 Some decicisons here have been taken in the name of performance. All hail performance.
	                                                                                                                                                                                                                                                                                                 (It turns out microoptimisations do matter when you have 16ms)
	                                                                                                                                                                                                                                                                                             */
	
	var numProcessSteps = processStepOrder.length;
	
	// [boolean]: Is loop running?
	var isRunning = false;
	
	/*
	    [timestamp]: Frame timestamp
	    [int]: Time since last frame
	*/
	function fireAll(frameStamp, elapsed) {
	    var activeIds = _manager2.default.getActiveIds();
	    var activeProcessCount = activeIds.length;
	
	    for (var i = 0; i < numProcessSteps; i++) {
	        var step = processStepOrder[i];
	
	        for (var i2 = 0; i2 < activeProcessCount; i2++) {
	            var process = _manager2.default.activeProcesses[activeIds[i2]];
	            var result = false;
	
	            // Check if this process has this step, or if it's a render step that we're rendering this frame
	            if (process && process[step.name] && (!step.isRender || step.isRender && process._renderThisFrame === true)) {
	                result = process[step.name].call(process, process, frameStamp, elapsed);
	            }
	
	            // If this is a decide render step and it returns `false`, set willRender to false
	            if (step.decideRender) {
	                process._renderThisFrame = process[step.name] && result !== true ? false : true;
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
	var getProcessId = exports.getProcessId = _manager2.default.getProcessId;
	
	/*
	    [int]: Process ID to activate
	    [Process]: Process to activate
	*/
	function activate(id, process) {
	    _manager2.default.activate(id, process);
	
	    if (!isRunning) {
	        start();
	    }
	}
	
	/*
	    [int]: Process ID to deactivate
	*/
	var deactivate = exports.deactivate = _manager2.default.deactivate;
	//# sourceMappingURL=data:application/json;base64,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QVosWUFBWSxHQUFHLGtCQUFRLFlBQVk7Ozs7OztBQUFDLEFBTTFDLFNBQVMsUUFBUSxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUU7QUFDbEMsc0JBQVEsUUFBUSxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQzs7QUFFOUIsUUFBSSxDQUFDLFNBQVMsRUFBRTtBQUNaLGFBQUssRUFBRSxDQUFDO0tBQ1g7Q0FDSjs7Ozs7QUFBQSxBQUtNLElBQU0sVUFBVSxXQUFWLFVBQVUsR0FBRyxrQkFBUSxVQUFVLENBQUMiLCJmaWxlIjoibG9vcC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dFBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gICAgQ29yZSByZW5kZXIgbG9vcFxuXG4gICAgU29tZSBkZWNpY2lzb25zIGhlcmUgaGF2ZSBiZWVuIHRha2VuIGluIHRoZSBuYW1lIG9mIHBlcmZvcm1hbmNlLiBBbGwgaGFpbCBwZXJmb3JtYW5jZS5cbiAgICAoSXQgdHVybnMgb3V0IG1pY3Jvb3B0aW1pc2F0aW9ucyBkbyBtYXR0ZXIgd2hlbiB5b3UgaGF2ZSAxNm1zKVxuKi9cbmltcG9ydCB0aW1lciBmcm9tICcuL3RpbWVyJztcbmltcG9ydCB0aWNrIGZyb20gJy4vdGljayc7XG5pbXBvcnQgbWFuYWdlciBmcm9tICcuL21hbmFnZXInO1xuXG5jb25zdCBwcm9jZXNzU3RlcE9yZGVyID0gW1xuICAgIHsgbmFtZTogJ29uRnJhbWVTdGFydCcgfSxcbiAgICB7IG5hbWU6ICdvblVwZGF0ZScgfSxcbiAgICB7IG5hbWU6ICd3aWxsUmVuZGVyJywgZGVjaWRlUmVuZGVyOiB0cnVlIH0sXG4gICAgeyBuYW1lOiAnb25QcmVSZW5kZXInLCBpc1JlbmRlcjogdHJ1ZSB9LFxuICAgIHsgbmFtZTogJ29uUmVuZGVyJywgaXNSZW5kZXI6IHRydWUgfSxcbiAgICB7IG5hbWU6ICdvblBvc3RSZW5kZXInLCBpc1JlbmRlcjogdHJ1ZSB9LFxuICAgIHsgbmFtZTogJ29uRnJhbWVFbmQnIH0sXG4gICAgeyBuYW1lOiAnb25DbGVhbnVwJyB9XG5dO1xuY29uc3QgbnVtUHJvY2Vzc1N0ZXBzID0gcHJvY2Vzc1N0ZXBPcmRlci5sZW5ndGg7XG5cbi8vIFtib29sZWFuXTogSXMgbG9vcCBydW5uaW5nP1xubGV0IGlzUnVubmluZyA9IGZhbHNlO1xuXG4vKlxuICAgIFt0aW1lc3RhbXBdOiBGcmFtZSB0aW1lc3RhbXBcbiAgICBbaW50XTogVGltZSBzaW5jZSBsYXN0IGZyYW1lXG4qL1xuZnVuY3Rpb24gZmlyZUFsbChmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgY29uc3QgYWN0aXZlSWRzID0gbWFuYWdlci5nZXRBY3RpdmVJZHMoKTtcbiAgICBjb25zdCBhY3RpdmVQcm9jZXNzQ291bnQgPSBhY3RpdmVJZHMubGVuZ3RoO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1Qcm9jZXNzU3RlcHM7IGkrKykge1xuICAgICAgICBjb25zdCBzdGVwID0gcHJvY2Vzc1N0ZXBPcmRlcltpXTtcblxuICAgICAgICBmb3IgKGxldCBpMiA9IDA7IGkyIDwgYWN0aXZlUHJvY2Vzc0NvdW50OyBpMisrKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9jZXNzID0gbWFuYWdlci5hY3RpdmVQcm9jZXNzZXNbYWN0aXZlSWRzW2kyXV07XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoaXMgcHJvY2VzcyBoYXMgdGhpcyBzdGVwLCBvciBpZiBpdCdzIGEgcmVuZGVyIHN0ZXAgdGhhdCB3ZSdyZSByZW5kZXJpbmcgdGhpcyBmcmFtZVxuICAgICAgICAgICAgaWYgKHByb2Nlc3MgJiYgcHJvY2Vzc1tzdGVwLm5hbWVdICYmICghc3RlcC5pc1JlbmRlciB8fCAoc3RlcC5pc1JlbmRlciAmJiBwcm9jZXNzLl9yZW5kZXJUaGlzRnJhbWUgPT09IHRydWUpKSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHByb2Nlc3Nbc3RlcC5uYW1lXS5jYWxsKHByb2Nlc3MsIHByb2Nlc3MsIGZyYW1lU3RhbXAsIGVsYXBzZWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiB0aGlzIGlzIGEgZGVjaWRlIHJlbmRlciBzdGVwIGFuZCBpdCByZXR1cm5zIGBmYWxzZWAsIHNldCB3aWxsUmVuZGVyIHRvIGZhbHNlXG4gICAgICAgICAgICBpZiAoc3RlcC5kZWNpZGVSZW5kZXIpIHtcbiAgICAgICAgICAgICAgICBwcm9jZXNzLl9yZW5kZXJUaGlzRnJhbWUgPSAocHJvY2Vzc1tzdGVwLm5hbWVdICYmIHJlc3VsdCAhPT0gdHJ1ZSkgPyBmYWxzZSA6IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWFuYWdlci5nZXROb25CYWNrZ3JvdW5kUnVubmluZ0NvdW50KCk7XG59XG5cbi8vIEZ1bmN0aW9uIHRvIGZpcmUgZXZlcnkgZnJhbWVcbmZ1bmN0aW9uIGZyYW1lKGZyYW1lU3RhbXApIHtcbiAgICB0aW1lci51cGRhdGUoZnJhbWVTdGFtcCk7XG4gICAgaXNSdW5uaW5nID0gZmlyZUFsbChmcmFtZVN0YW1wLCB0aW1lci5nZXRFbGFwc2VkKCkpO1xuXG4gICAgaWYgKGlzUnVubmluZykge1xuICAgICAgICB0aWNrKGZyYW1lKTtcbiAgICB9XG59XG5cbi8vIFN0YXJ0IGxvb3BcbmZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgIGlmICghaXNSdW5uaW5nKSB7XG4gICAgICAgIHRpbWVyLnN0YXJ0KCk7XG4gICAgICAgIGlzUnVubmluZyA9IHRydWU7XG4gICAgICAgIHRpY2soZnJhbWUpO1xuICAgIH1cbn1cblxuLy8gRXhwb3J0c1xuZXhwb3J0IGNvbnN0IGdldFByb2Nlc3NJZCA9IG1hbmFnZXIuZ2V0UHJvY2Vzc0lkO1xuXG4vKlxuICAgIFtpbnRdOiBQcm9jZXNzIElEIHRvIGFjdGl2YXRlXG4gICAgW1Byb2Nlc3NdOiBQcm9jZXNzIHRvIGFjdGl2YXRlXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIGFjdGl2YXRlKGlkLCBwcm9jZXNzKSB7XG4gICAgbWFuYWdlci5hY3RpdmF0ZShpZCwgcHJvY2Vzcyk7XG5cbiAgICBpZiAoIWlzUnVubmluZykge1xuICAgICAgICBzdGFydCgpO1xuICAgIH1cbn1cblxuLypcbiAgICBbaW50XTogUHJvY2VzcyBJRCB0byBkZWFjdGl2YXRlXG4qL1xuZXhwb3J0IGNvbnN0IGRlYWN0aXZhdGUgPSBtYW5hZ2VyLmRlYWN0aXZhdGU7Il19

/***/ },
/* 38 */
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL3N2Zy1wYXRoL2J1aWxkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztrQkFRd0IsS0FBSzs7Ozs7OztBQUY3QixJQUFNLGVBQWUsR0FBRyxVQUFDLE9BQU8sRUFBRSxNQUFNO1dBQUssQUFBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxHQUFJLE1BQU0sR0FBRyxJQUFJO0NBQUEsQ0FBQzs7QUFFMUUsU0FBUyxLQUFLLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRTtBQUN6QyxRQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDbEIsUUFBTSxlQUFlLEdBQUc7QUFDcEIsY0FBTSxFQUFFLENBQUM7QUFDVCxlQUFPLEVBQUUsTUFBTSxHQUFHLElBQUk7S0FDekIsQ0FBQztBQUNGLFFBQUksWUFBWSxHQUFHLEtBQUssQ0FBQzs7QUFFekIsU0FBSyxJQUFJLEdBQUcsSUFBSSxLQUFLLEVBQUU7QUFDbkIsWUFBSSxLQUFLLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO0FBQzNCLGdCQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7O0FBRXpCLG9CQUFRLEdBQUc7QUFDWCxxQkFBSyxRQUFRLENBQUM7QUFDZCxxQkFBSyxTQUFTO0FBQ1YsZ0NBQVksR0FBRyxJQUFJLENBQUM7QUFDcEIsbUNBQWUsQ0FBQyxHQUFHLENBQUMsR0FBRyxlQUFlLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3RELDBCQUFNO0FBQUEsQUFDVixxQkFBSyxRQUFRO0FBQ1QsMEJBQU0sQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLGVBQWUsQ0FBQyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztBQUM5RCwwQkFBTTtBQUFBLEFBQ1Y7QUFDSSwwQkFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztBQUFBLGFBQ3ZCO1NBQ0o7S0FDSjs7QUFFRCxRQUFJLFlBQVksRUFBRTtBQUNkLGNBQU0sQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLGVBQWUsQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLGVBQWUsQ0FBQyxPQUFPLENBQUM7S0FDdkY7O0FBRUQsV0FBTyxNQUFNLENBQUM7Q0FDakIiLCJmaWxlIjoiYnVpbGQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHRQZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICAgIENvbnZlcnQgcGVyY2VudGFnZSB0byBwaXhlbHNcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFBlcmNlbnRhZ2Ugb2YgdG90YWwgbGVuZ3RoXG4gICAgQHBhcmFtIFtudW1iZXJdOiBUb3RhbCBsZW5ndGhcbiovXG5jb25zdCBwZXJjZW50VG9QaXhlbHMgPSAocGVyY2VudCwgbGVuZ3RoKSA9PiAocGFyc2VGbG9hdChwZXJjZW50KSAvIDEwMCkgKiBsZW5ndGggKyAncHgnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZChzdGF0ZSwgbGVuZ3RoKSB7XG4gICAgY29uc3Qgc3R5bGVzID0ge307XG4gICAgY29uc3QgZGFzaEFycmF5U3R5bGVzID0ge1xuICAgICAgICBsZW5ndGg6IDAsXG4gICAgICAgIHNwYWNpbmc6IGxlbmd0aCArICdweCdcbiAgICB9O1xuICAgIGxldCBoYXNEYXNoQXJyYXkgPSBmYWxzZTtcblxuICAgIGZvciAobGV0IGtleSBpbiBzdGF0ZSkge1xuICAgICAgICBpZiAoc3RhdGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBzdGF0ZVtrZXldO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgICAgY2FzZSAnbGVuZ3RoJzpcbiAgICAgICAgICAgIGNhc2UgJ3NwYWNpbmcnOlxuICAgICAgICAgICAgICAgIGhhc0Rhc2hBcnJheSA9IHRydWU7XG4gICAgICAgICAgICAgICAgZGFzaEFycmF5U3R5bGVzW2tleV0gPSBwZXJjZW50VG9QaXhlbHModmFsdWUsIGxlbmd0aCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdvZmZzZXQnOlxuICAgICAgICAgICAgICAgIHN0eWxlc1snc3Ryb2tlLWRhc2hvZmZzZXQnXSA9IHBlcmNlbnRUb1BpeGVscygtdmFsdWUsIGxlbmd0aCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHN0eWxlc1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaGFzRGFzaEFycmF5KSB7XG4gICAgICAgIHN0eWxlc1snc3Ryb2tlLWRhc2hhcnJheSddID0gZGFzaEFycmF5U3R5bGVzLmxlbmd0aCArICcgJyArIGRhc2hBcnJheVN0eWxlcy5zcGFjaW5nO1xuICAgIH1cblxuICAgIHJldHVybiBzdHlsZXM7XG59Il19

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _stateMap = __webpack_require__(40);
	
	var _stateMap2 = _interopRequireDefault(_stateMap);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var STROKE = 'stroke-';
	
	exports.default = _extends({}, _stateMap2.default, {
	    opacity: STROKE + 'opacity',
	    width: STROKE + 'width',
	    miterlimit: STROKE + 'miterlimit'
	});
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL3N2Zy1wYXRoL3N0YXRlLW1hcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNLE1BQU0sR0FBRyxTQUFTLENBQUM7OztBQUlyQixXQUFPLEVBQUssTUFBTSxZQUFTO0FBQzNCLFNBQUssRUFBSyxNQUFNLFVBQU87QUFDdkIsY0FBVSxFQUFLLE1BQU0sZUFBWSIsImZpbGUiOiJzdGF0ZS1tYXAuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHRQZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzU3RhdGVNYXAgZnJvbSAnLi4vY3NzL3N0YXRlLW1hcCc7XG5cbmNvbnN0IFNUUk9LRSA9ICdzdHJva2UtJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIC4uLmNzc1N0YXRlTWFwLFxuICAgIG9wYWNpdHk6IGAke1NUUk9LRX1vcGFjaXR5YCxcbiAgICB3aWR0aDogYCR7U1RST0tFfXdpZHRoYCxcbiAgICBtaXRlcmxpbWl0OiBgJHtTVFJPS0V9bWl0ZXJsaW1pdGBcbn07Il19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2Nzcy9zdGF0ZS1tYXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsSUFBTSxTQUFTLEdBQUcsV0FBVyxDQUFDOztrQkFFZjtBQUNYLEtBQUMsRUFBRSxTQUFTLEdBQUcsR0FBRztBQUNsQixLQUFDLEVBQUUsU0FBUyxHQUFHLEdBQUc7QUFDbEIsS0FBQyxFQUFFLFNBQVMsR0FBRyxHQUFHO0NBQ3JCIiwiZmlsZSI6InN0YXRlLW1hcC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dFBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFRSQU5TTEFURSA9ICd0cmFuc2xhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgeDogVFJBTlNMQVRFICsgJ1gnLFxuICAgIHk6IFRSQU5TTEFURSArICdZJyxcbiAgICB6OiBUUkFOU0xBVEUgKyAnWidcbn07Il19

/***/ },
/* 41 */
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL3N2Zy92YWx1ZS10eXBlLW1hcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkFNZTtBQUNYLFFBQUksaUJBQU87QUFDWCxVQUFNLGlCQUFPO0FBQ2IsU0FBSyxpQkFBTztBQUNaLFVBQU0saUJBQU87QUFDYixVQUFNLGlCQUFPO0FBQ2IsbUJBQWUsZ0JBQU07QUFDckIsS0FBQyxtQkFBUztBQUNWLFVBQU0sbUJBQVM7QUFDZixXQUFPLGlCQUFPO0FBQ2QsZUFBVyxpQkFBTztBQUNsQixpQkFBYSxpQkFBTztDQUN2QiIsImZpbGUiOiJ2YWx1ZS10eXBlLW1hcC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dFBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhbHBoYSBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9hbHBoYSc7XG5pbXBvcnQgYXhlcyBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9heGVzJztcbmltcG9ydCBjb2xvciBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9jb2xvcic7XG5pbXBvcnQgY29tcGxleCBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9jb21wbGV4JztcbmltcG9ydCBzY2FsZSBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9zY2FsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBmaWxsOiBjb2xvcixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHNjYWxlOiBzY2FsZSxcbiAgICBzY2FsZVg6IHNjYWxlLFxuICAgIHNjYWxlWTogc2NhbGUsXG4gICAgdHJhbnNmb3JtT3JpZ2luOiBheGVzLFxuICAgIGQ6IGNvbXBsZXgsXG4gICAgcG9pbnRzOiBjb21wbGV4LFxuICAgIG9wYWNpdHk6IGFscGhhLFxuICAgIGZpbGxPcGFjaXR5OiBhbHBoYSxcbiAgICBzdHJva2VPcGFjaXR5OiBhbHBoYVxufTsiXX0=

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = build;
	
	var _utils = __webpack_require__(2);
	
	var _transformProps = __webpack_require__(46);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL3N2Zy9idWlsZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7a0JBS3dCLEtBQUs7Ozs7Ozs7Ozs7QUFGN0IsSUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDOztBQUVkLFNBQVMsS0FBSyxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUU7QUFDekMsUUFBSSxLQUFLLEdBQUcsRUFBRTtRQUNWLFlBQVksR0FBRyxLQUFLO1FBQ3BCLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxLQUFLLFNBQVMsR0FBRyxLQUFLLENBQUMsS0FBSyxJQUFJLGFBQWEsR0FBRyxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUM7UUFDcEYsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLEtBQUssU0FBUyxHQUFHLEtBQUssQ0FBQyxNQUFNLElBQUksYUFBYSxHQUFHLEtBQUssSUFBSSxDQUFDO1FBQ2hGLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBQzNCLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBQzNCLGVBQWUsR0FBRyxDQUFFLGdCQUFnQixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUEsQUFBQztRQUNsRCxlQUFlLEdBQUcsQ0FBRSxnQkFBZ0IsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFBLEFBQUM7UUFDbkQsYUFBYSxHQUFHLGdCQUFnQixHQUFHLEtBQUs7UUFDeEMsYUFBYSxHQUFHLGdCQUFnQixHQUFHLE1BQU07UUFDekMsU0FBUyxHQUFHO0FBQ1IsaUJBQVMsaUJBQWUsS0FBSyxDQUFDLFVBQVUsVUFBSyxLQUFLLENBQUMsVUFBVSxPQUFJO0FBQ2pFLGFBQUssaUJBQWUsZUFBZSxVQUFLLGVBQWUsZ0JBQVcsS0FBSyxVQUFLLE1BQU0sb0JBQWUsYUFBYSxVQUFLLGFBQWEsT0FBSTtBQUNwSSxjQUFNLGNBQVksS0FBSyxDQUFDLE1BQU0sVUFBSyxnQkFBZ0IsVUFBSyxnQkFBZ0IsT0FBSTtBQUM1RSxhQUFLLGFBQVcsS0FBSyxDQUFDLEtBQUssT0FBSTtBQUMvQixhQUFLLGFBQVcsS0FBSyxDQUFDLEtBQUssT0FBSTtLQUNsQyxDQUFDOztBQUVOLFNBQUssSUFBSSxHQUFHLElBQUksS0FBSyxFQUFFO0FBQ25CLFlBQUksS0FBSyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtBQUMzQixnQkFBSSx5QkFBZSxHQUFHLENBQUMsRUFBRTtBQUNyQiw0QkFBWSxHQUFHLElBQUksQ0FBQzthQUN2QixNQUFNO0FBQ0gscUJBQUssQ0FBQyxXQTdCYixXQUFXLEVBNkJjLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3hDO1NBQ0o7S0FDSjs7QUFFRCxRQUFJLFlBQVksRUFBRTtBQUNkLGFBQUssQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDOztBQUVyQixhQUFLLElBQUksR0FBRyxJQUFJLFNBQVMsRUFBRTtBQUN2QixnQkFBSSxTQUFTLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO0FBQy9CLG9CQUFNLFlBQVksR0FBRyxBQUFDLEdBQUcsS0FBSyxPQUFPLEdBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUNuRCxxQkFBSyxDQUFDLFNBQVMsSUFBSSxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQzthQUN6RTtTQUNKO0tBQ0o7O0FBRUQsV0FBTyxLQUFLLENBQUM7Q0FDaEIiLCJmaWxlIjoiYnVpbGQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHRQZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjYW1lbFRvRGFzaCB9IGZyb20gJy4uLy4uL2luYy91dGlscyc7XG5pbXBvcnQgdHJhbnNmb3JtUHJvcHMgZnJvbSAnLi4vY3NzL3RyYW5zZm9ybS1wcm9wcyc7XG5cbmNvbnN0IFpFUk9fTk9UX1pFUk8gPSAwLjAwMDE7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkKHN0YXRlLCBvcmlnaW4pIHtcbiAgICBsZXQgcHJvcHMgPSB7fSxcbiAgICAgICAgaGFzVHJhbnNmb3JtID0gZmFsc2UsXG4gICAgICAgIHNjYWxlID0gc3RhdGUuc2NhbGUgIT09IHVuZGVmaW5lZCA/IHN0YXRlLnNjYWxlIHx8IFpFUk9fTk9UX1pFUk8gOiBzdGF0ZS5zY2FsZVggfHwgMSxcbiAgICAgICAgc2NhbGVZID0gc3RhdGUuc2NhbGVZICE9PSB1bmRlZmluZWQgPyBzdGF0ZS5zY2FsZVkgfHwgWkVST19OT1RfWkVSTyA6IHNjYWxlIHx8IDEsXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpblggPSBvcmlnaW4ueCxcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luWSA9IG9yaWdpbi55LFxuICAgICAgICBzY2FsZVRyYW5zZm9ybVggPSAtIHRyYW5zZm9ybU9yaWdpblggKiAoc2NhbGUgKiAxKSxcbiAgICAgICAgc2NhbGVUcmFuc2Zvcm1ZID0gLSB0cmFuc2Zvcm1PcmlnaW5ZICogKHNjYWxlWSAqIDEpLFxuICAgICAgICBzY2FsZVJlcGxhY2VYID0gdHJhbnNmb3JtT3JpZ2luWCAvIHNjYWxlLFxuICAgICAgICBzY2FsZVJlcGxhY2VZID0gdHJhbnNmb3JtT3JpZ2luWSAvIHNjYWxlWSxcbiAgICAgICAgdHJhbnNmb3JtID0ge1xuICAgICAgICAgICAgdHJhbnNsYXRlOiBgdHJhbnNsYXRlKCR7c3RhdGUudHJhbnNsYXRlWH0sICR7c3RhdGUudHJhbnNsYXRlWX0pIGAsXG4gICAgICAgICAgICBzY2FsZTogYHRyYW5zbGF0ZSgke3NjYWxlVHJhbnNmb3JtWH0sICR7c2NhbGVUcmFuc2Zvcm1ZfSkgc2NhbGUoJHtzY2FsZX0sICR7c2NhbGVZfSkgdHJhbnNsYXRlKCR7c2NhbGVSZXBsYWNlWH0sICR7c2NhbGVSZXBsYWNlWX0pIGAsXG4gICAgICAgICAgICByb3RhdGU6IGByb3RhdGUoJHtzdGF0ZS5yb3RhdGV9LCAke3RyYW5zZm9ybU9yaWdpblh9LCAke3RyYW5zZm9ybU9yaWdpbll9KSBgLFxuICAgICAgICAgICAgc2tld1g6IGBza2V3WCgke3N0YXRlLnNrZXdYfSkgYCxcbiAgICAgICAgICAgIHNrZXdZOiBgc2tld1koJHtzdGF0ZS5za2V3WX0pIGBcbiAgICAgICAgfTtcblxuICAgIGZvciAobGV0IGtleSBpbiBzdGF0ZSkge1xuICAgICAgICBpZiAoc3RhdGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgaWYgKHRyYW5zZm9ybVByb3BzW2tleV0pIHtcbiAgICAgICAgICAgICAgICBoYXNUcmFuc2Zvcm0gPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcm9wc1tjYW1lbFRvRGFzaChrZXkpXSA9IHN0YXRlW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaGFzVHJhbnNmb3JtKSB7XG4gICAgICAgIHByb3BzLnRyYW5zZm9ybSA9ICcnO1xuXG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0cmFuc2Zvcm0pIHtcbiAgICAgICAgICAgIGlmICh0cmFuc2Zvcm0uaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRWYWx1ZSA9IChrZXkgPT09ICdzY2FsZScpID8gJzEnIDogJzAnO1xuICAgICAgICAgICAgICAgIHByb3BzLnRyYW5zZm9ybSArPSB0cmFuc2Zvcm1ba2V5XS5yZXBsYWNlKC91bmRlZmluZWQvZywgZGVmYXVsdFZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwcm9wcztcbn0iXX0=

/***/ },
/* 43 */
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2Nzcy92YWx1ZS10eXBlLW1hcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkFTZTs7QUFFWCxTQUFLLGlCQUFPO0FBQ1osbUJBQWUsaUJBQU87QUFDdEIsZ0JBQVksaUJBQU87QUFDbkIsUUFBSSxpQkFBTztBQUNYLFVBQU0saUJBQU87OztBQUdiLGVBQVcsaUJBQU87QUFDbEIsa0JBQWMsaUJBQU87QUFDckIsb0JBQWdCLGlCQUFPO0FBQ3ZCLHFCQUFpQixpQkFBTztBQUN4QixtQkFBZSxpQkFBTztBQUN0QixnQkFBWSxjQUFJOzs7QUFHaEIsVUFBTSxxQkFBVztBQUNqQixXQUFPLHFCQUFXO0FBQ2xCLFNBQUssY0FBSTtBQUNULFVBQU0sY0FBSTs7O0FBR1Ysc0JBQWtCLGdCQUFNO0FBQ3hCLHFCQUFpQixnQkFBTTtBQUN2QixtQkFBZSxnQkFBTTs7O0FBR3JCLGNBQVUsa0JBQVE7QUFDbEIsYUFBUyxrQkFBUTs7O0FBR2pCLFVBQU0saUJBQU87QUFDYixXQUFPLGlCQUFPO0FBQ2QsV0FBTyxpQkFBTztBQUNkLFdBQU8saUJBQU87QUFDZCxTQUFLLGlCQUFPO0FBQ1osVUFBTSxpQkFBTztBQUNiLFVBQU0saUJBQU87QUFDYixVQUFNLGlCQUFPO0FBQ2IsU0FBSyxpQkFBTztBQUNaLFNBQUssaUJBQU87QUFDWixZQUFRLGNBQUk7QUFDWixjQUFVLGNBQUk7QUFDZCxjQUFVLGNBQUk7QUFDZCxjQUFVLGNBQUk7QUFDZCxlQUFXLGNBQUk7QUFDZixXQUFPLGlCQUFPO0NBQ2pCIiwiZmlsZSI6InZhbHVlLXR5cGUtbWFwLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0UGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFuZ2xlIGZyb20gJy4uLy4uL3ZhbHVlLXR5cGVzL2FuZ2xlJztcbmltcG9ydCBhbHBoYSBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9hbHBoYSc7XG5pbXBvcnQgYXhlcyBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9heGVzJztcbmltcG9ydCBjb2xvciBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9jb2xvcic7XG5pbXBvcnQgc2NhbGUgZnJvbSAnLi4vLi4vdmFsdWUtdHlwZXMvc2NhbGUnO1xuaW1wb3J0IHNoYWRvdyBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9zaGFkb3cnO1xuaW1wb3J0IHBvc2l0aW9ucyBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9wb3NpdGlvbnMnO1xuaW1wb3J0IHB4IGZyb20gJy4uLy4uL3ZhbHVlLXR5cGVzL3B4JztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIC8vIENvbG9yIHByb3BzXG4gICAgY29sb3I6IGNvbG9yLFxuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3IsXG4gICAgb3V0bGluZUNvbG9yOiBjb2xvcixcbiAgICBmaWxsOiBjb2xvcixcbiAgICBzdHJva2U6IGNvbG9yLFxuXG4gICAgLy8gQm9yZGVyIHByb3BzXG4gICAgYm9yZGVyQ29sb3I6IGNvbG9yLFxuICAgIGJvcmRlclRvcENvbG9yOiBjb2xvcixcbiAgICBib3JkZXJSaWdodENvbG9yOiBjb2xvcixcbiAgICBib3JkZXJCb3R0b21Db2xvcjogY29sb3IsXG4gICAgYm9yZGVyTGVmdENvbG9yOiBjb2xvcixcbiAgICBib3JkZXJSYWRpdXM6IHB4LFxuXG4gICAgLy8gUG9zaXRpb25pbmdcbiAgICBtYXJnaW46IHBvc2l0aW9ucyxcbiAgICBwYWRkaW5nOiBwb3NpdGlvbnMsXG4gICAgd2lkdGg6IHB4LFxuICAgIGhlaWdodDogcHgsXG5cbiAgICAvLyBBeGVzXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiBheGVzLFxuICAgIHBlcnNwZWN0aXZlT3JpZ2luOiBheGVzLFxuICAgIHRyYW5zZm9ybU9yaWdpbjogYXhlcyxcblxuICAgIC8vIFNoYWRvd3NcbiAgICB0ZXh0U2hhZG93OiBzaGFkb3csXG4gICAgYm94U2hhZG93OiBzaGFkb3csICAgXG5cbiAgICAvLyBUcmFuc2Zvcm0gcHJvcGVydGllc1xuICAgIHJvdGF0ZTogYW5nbGUsXG4gICAgcm90YXRlWDogYW5nbGUsXG4gICAgcm90YXRlWTogYW5nbGUsXG4gICAgcm90YXRlWjogYW5nbGUsXG4gICAgc2NhbGU6IHNjYWxlLFxuICAgIHNjYWxlWDogc2NhbGUsXG4gICAgc2NhbGVZOiBzY2FsZSxcbiAgICBzY2FsZVo6IHNjYWxlLFxuICAgIHNrZXdYOiBhbmdsZSxcbiAgICBza2V3WTogYW5nbGUsXG4gICAgZGlzdGFuY2U6IHB4LFxuICAgIHRyYW5zbGF0ZVg6IHB4LFxuICAgIHRyYW5zbGF0ZVk6IHB4LFxuICAgIHRyYW5zbGF0ZVo6IHB4LFxuICAgIHBlcnNwZWN0aXZlOiBweCxcbiAgICBvcGFjaXR5OiBhbHBoYVxufTsiXX0=

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2Nzcy9wcmVmaXhlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxJQUFNLEtBQUssR0FBRyxFQUFFLENBQUM7QUFDakIsSUFBTSxRQUFRLEdBQUcsQ0FBQyxRQUFRLEVBQUMsS0FBSyxFQUFDLEdBQUcsRUFBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDL0MsSUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztBQUNwQyxJQUFJLFdBQVcsWUFBQTs7Ozs7Ozs7QUFBQyxBQVFoQixJQUFNLFVBQVUsR0FBRyxVQUFDLEdBQUcsRUFBSztBQUN4QixlQUFXLEdBQUcsV0FBVyxJQUFJLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7O0FBRTNELFFBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEtBQUssRUFBRTtBQUN0QixlQUFPLEtBQUssQ0FBQztLQUNoQixNQUFNO0FBQ0gsYUFBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztLQUN0Qjs7QUFFRCxTQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsV0FBVyxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ2xDLFlBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDcEIsUUFBUSxHQUFHLEFBQUMsTUFBTSxLQUFLLEVBQUUsR0FBSSxHQUFHLEdBQUcsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs7QUFFM0YsWUFBSSxRQUFRLElBQUksV0FBVyxDQUFDLEtBQUssRUFBRTtBQUMvQixpQkFBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQztTQUN6QjtLQUNKOztBQUVELFdBQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0NBQ3JCLENBQUM7O2tCQUVhLFVBQUMsR0FBRztXQUFLLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxVQUFVLENBQUMsR0FBRyxDQUFDO0NBQUEiLCJmaWxlIjoicHJlZml4ZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHRQZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjYWNoZSA9IHt9O1xuY29uc3QgcHJlZml4ZXMgPSBbJ1dlYmtpdCcsJ01veicsJ08nLCdtcycsICcnXTtcbmNvbnN0IG51bVByZWZpeGVzID0gcHJlZml4ZXMubGVuZ3RoO1xubGV0IHRlc3RFbGVtZW50O1xuXG4vKlxuICAgIFRlc3Qgc3R5bGUgcHJvcGVydHkgZm9yIHByZWZpeGVkIHZlcnNpb25cbiAgICBcbiAgICBAcGFyYW0gW3N0cmluZ106IFN0eWxlIHByb3BlcnR5XG4gICAgQHJldHVybiBbc3RyaW5nXTogQ2FjaGVkIHByb3BlcnR5IG5hbWVcbiovXG5jb25zdCB0ZXN0UHJlZml4ID0gKGtleSkgPT4ge1xuICAgIHRlc3RFbGVtZW50ID0gdGVzdEVsZW1lbnQgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBpZiAoY2FjaGVba2V5XSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNhY2hlW2tleV0gPSBmYWxzZTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVByZWZpeGVzOyBpKyspIHtcbiAgICAgICAgdmFyIHByZWZpeCA9IHByZWZpeGVzW2ldLFxuICAgICAgICAgICAgcHJlZml4ZWQgPSAocHJlZml4ID09PSAnJykgPyBrZXkgOiBwcmVmaXggKyBrZXkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBrZXkuc2xpY2UoMSk7XG5cbiAgICAgICAgaWYgKHByZWZpeGVkIGluIHRlc3RFbGVtZW50LnN0eWxlKSB7XG4gICAgICAgICAgICBjYWNoZVtrZXldID0gcHJlZml4ZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGNhY2hlW2tleV07XG59O1xuXG5leHBvcnQgZGVmYXVsdCAoa2V5KSA9PiBjYWNoZVtrZXldIHx8IHRlc3RQcmVmaXgoa2V5KTsiXX0=

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _transformProps = __webpack_require__(46);
	
	var _transformProps2 = _interopRequireDefault(_transformProps);
	
	var _prefixer = __webpack_require__(44);
	
	var _prefixer2 = _interopRequireDefault(_prefixer);
	
	var _utils = __webpack_require__(2);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2Nzcy9idWlsZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBSUEsSUFBTSxXQUFXLEdBQUcsWUFBWSxDQUFDOztrQkFFbEIsVUFBQyxLQUFLLEVBQUUsMkJBQTJCLEVBQUs7QUFDbkQsUUFBSSxjQUFjLEdBQUcsRUFBRSxDQUFDO0FBQ3hCLFFBQUksZUFBZSxHQUFHLEVBQUUsQ0FBQztBQUN6QixRQUFJLGFBQWEsR0FBRyxLQUFLLENBQUM7O0FBRTFCLFNBQUssSUFBSSxHQUFHLElBQUksS0FBSyxFQUFFO0FBQ25CLFlBQUksS0FBSyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtBQUMzQixnQkFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDOztBQUV6QixnQkFBSSx5QkFBZSxHQUFHLENBQUMsRUFBRTtBQUNyQiwrQkFBZSxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQztBQUM1Qyw2QkFBYSxHQUFHLEFBQUMsR0FBRyxLQUFLLFdBQVcsR0FBSSxJQUFJLEdBQUcsYUFBYSxDQUFDO2FBRWhFLE1BQU07QUFDSCw4QkFBYyxJQUFJLEdBQUcsR0FBRyx3QkFBUyxXQWxCeEMsV0FBVyxFQWtCeUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDO2FBQ3BFO1NBQ0o7S0FDSjs7QUFFRCxRQUFJLGVBQWUsS0FBSyxFQUFFLEVBQUU7QUFDeEIsWUFBSSxDQUFDLGFBQWEsSUFBSSxDQUFDLDJCQUEyQixFQUFFO0FBQ2hELDJCQUFlLElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQztTQUM1Qzs7QUFFRCxzQkFBYyxJQUFJLEdBQUcsR0FBRyx3QkFBUyxXQUFXLENBQUMsR0FBRyxHQUFHLEdBQUcsZUFBZSxDQUFDO0tBQ3pFOztBQUVELFdBQU8sY0FBYyxDQUFDO0NBQ3pCIiwiZmlsZSI6ImJ1aWxkLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0UGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRyYW5zZm9ybVByb3BzIGZyb20gJy4vdHJhbnNmb3JtLXByb3BzJztcbmltcG9ydCBwcmVmaXhlciBmcm9tICcuL3ByZWZpeGVyJztcbmltcG9ydCB7IGNhbWVsVG9EYXNoIH0gZnJvbSAnLi4vLi4vaW5jL3V0aWxzJztcblxuY29uc3QgVFJBTlNMQVRFX1ogPSAndHJhbnNsYXRlWic7XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSwgZGlzYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uKSA9PiB7XG4gICAgbGV0IHByb3BlcnR5U3RyaW5nID0gJyc7XG4gICAgbGV0IHRyYW5zZm9ybVN0cmluZyA9ICcnO1xuICAgIGxldCB0cmFuc2Zvcm1IYXNaID0gZmFsc2U7XG5cbiAgICBmb3IgKGxldCBrZXkgaW4gc3RhdGUpIHtcbiAgICAgICAgaWYgKHN0YXRlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gc3RhdGVba2V5XTtcblxuICAgICAgICAgICAgaWYgKHRyYW5zZm9ybVByb3BzW2tleV0pIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1TdHJpbmcgKz0ga2V5ICsgJygnICsgdmFsdWUgKyAnKSAnO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybUhhc1ogPSAoa2V5ID09PSBUUkFOU0xBVEVfWikgPyB0cnVlIDogdHJhbnNmb3JtSGFzWjtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eVN0cmluZyArPSAnOycgKyBwcmVmaXhlcihjYW1lbFRvRGFzaChrZXkpKSArICc6JyArIHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRyYW5zZm9ybVN0cmluZyAhPT0gJycpIHtcbiAgICAgICAgaWYgKCF0cmFuc2Zvcm1IYXNaICYmICFkaXNhYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybVN0cmluZyArPSBUUkFOU0xBVEVfWiArICcoMHB4KSc7XG4gICAgICAgIH1cblxuICAgICAgICBwcm9wZXJ0eVN0cmluZyArPSAnOycgKyBwcmVmaXhlcigndHJhbnNmb3JtJykgKyAnOicgKyB0cmFuc2Zvcm1TdHJpbmc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5U3RyaW5nO1xufTsiXX0=

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _dictionary = __webpack_require__(48);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2Nzcy90cmFuc2Zvcm0tcHJvcHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUEsSUFBSSxjQUFjLEdBQUcsRUFBRSxDQUFDOztBQUV4QixJQUFNLEtBQUssR0FBRyxPQUFPLENBQUM7QUFDdEIsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDO0FBQ3hCLElBQU0scUJBQXFCLEdBQUcsc0JBQXNCLENBQUM7QUFDckQsSUFBTSxLQUFLLEdBQUcsQ0FBQyxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUscUJBQXFCLENBQUMsQ0FBQzs7QUFFMUUsY0FBYyxDQUFDLE1BQU0sQ0FBQyxHQUFHLGNBQWMsQ0FBQyxLQUFLLENBQUMsR0FBRyxjQUFjLENBQUMscUJBQXFCLENBQUMsR0FBRyxJQUFJLENBQUM7O0FBRTlGLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO1NBQUssWUFYZixJQUFJLENBV2dCLE9BQU8sQ0FBQyxVQUFDLElBQUk7V0FBSyxjQUFjLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUk7R0FBQSxDQUFDO0NBQUEsQ0FBQyxDQUFDOztrQkFFckUsY0FBYyIsImZpbGUiOiJ0cmFuc2Zvcm0tcHJvcHMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHRQZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBheGVzIH0gZnJvbSAnLi4vLi4vdmFsdWUtdHlwZXMvc2V0dGluZ3MvZGljdGlvbmFyeSc7XG5cbmxldCB0cmFuc2Zvcm1Qcm9wcyA9IHt9O1xuXG5jb25zdCBTQ0FMRSA9ICdzY2FsZSc7XG5jb25zdCBST1RBVEUgPSAncm90YXRlJztcbmNvbnN0IFRSQU5TRk9STV9QRVJTUEVDVElWRSA9ICd0cmFuc2Zvcm1QZXJzcGVjdGl2ZSc7XG5jb25zdCBURVJNUyA9IFsndHJhbnNsYXRlJywgU0NBTEUsIFJPVEFURSwgJ3NrZXcnLCBUUkFOU0ZPUk1fUEVSU1BFQ1RJVkVdO1xuXG50cmFuc2Zvcm1Qcm9wc1tST1RBVEVdID0gdHJhbnNmb3JtUHJvcHNbU0NBTEVdID0gdHJhbnNmb3JtUHJvcHNbVFJBTlNGT1JNX1BFUlNQRUNUSVZFXSA9IHRydWU7XG5cblRFUk1TLmZvckVhY2goKHRlcm0pID0+IGF4ZXMuZm9yRWFjaCgoYXhpcykgPT4gdHJhbnNmb3JtUHJvcHNbdGVybSArIGF4aXNdID0gdHJ1ZSkpO1xuXG5leHBvcnQgZGVmYXVsdCB0cmFuc2Zvcm1Qcm9wczsiXX0=

/***/ },
/* 47 */
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kZWZhdWx0LXByb3BzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFPLElBQU0sR0FBRyxXQUFILEdBQUcsR0FBRztBQUNmLE9BQUcsRUFBRSxDQUFDO0FBQ04sT0FBRyxFQUFFLEdBQUc7QUFDUixTQUFLLEVBQUUsSUFBSTtDQUNkLENBQUM7O0FBRUssSUFBTSxPQUFPLFdBQVAsT0FBTyxHQUFHO0FBQ25CLE9BQUcsRUFBRSxDQUFDO0FBQ04sT0FBRyxFQUFFLENBQUM7Q0FDVCxDQUFDOztBQUVLLElBQU0sT0FBTyxXQUFQLE9BQU8sR0FBRztBQUNuQixPQUFHLEVBQUUsQ0FBQztBQUNOLE9BQUcsRUFBRSxHQUFHO0FBQ1IsUUFBSSxFQUFFLEdBQUc7Q0FDWixDQUFDIiwiZmlsZSI6ImRlZmF1bHQtcHJvcHMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHRQZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcmdiID0ge1xuICAgIG1pbjogMCxcbiAgICBtYXg6IDI1NSxcbiAgICByb3VuZDogdHJ1ZVxufTtcblxuZXhwb3J0IGNvbnN0IG9wYWNpdHkgPSB7XG4gICAgbWluOiAwLFxuICAgIG1heDogMVxufTtcblxuZXhwb3J0IGNvbnN0IHBlcmNlbnQgPSB7XG4gICAgbWluOiAwLFxuICAgIG1heDogMTAwLFxuICAgIHVuaXQ6ICclJ1xufTsiXX0=

/***/ },
/* 48 */
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kaWN0aW9uYXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLElBQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUNkLElBQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUNkLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQzs7QUFFZixJQUFNLElBQUksV0FBSixJQUFJLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ3pCLElBQU0sR0FBRyxXQUFILEdBQUcsR0FBRyxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQzVDLElBQU0sR0FBRyxXQUFILEdBQUcsR0FBRyxDQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ3RELElBQU0sU0FBUyxXQUFULFNBQVMsR0FBRyxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3JELElBQU0sTUFBTSxXQUFOLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyIsImZpbGUiOiJkaWN0aW9uYXJ5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0UGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgWCA9ICdYJztcbmNvbnN0IFkgPSAnWSc7XG5jb25zdCBBTFBIQSA9ICdBbHBoYSc7XG5cbmV4cG9ydCBjb25zdCBheGVzID0gW1gsIFksICdaJ107XG5leHBvcnQgY29uc3QgcmdiID0gWydSZWQnLCAnR3JlZW4nLCAnQmx1ZScsIEFMUEhBXTtcbmV4cG9ydCBjb25zdCBoc2wgPSBbJ0h1ZScsICdTYXR1cmF0aW9uJywgJ0xpZ2h0bmVzcycsIEFMUEhBXTtcbmV4cG9ydCBjb25zdCBwb3NpdGlvbnMgPSBbJ1RvcCcsICdSaWdodCcsICdCb3R0b20nLCAnTGVmdCddO1xuZXhwb3J0IGNvbnN0IHNoYWRvdyA9IFtYLCBZLCAnUmFkaXVzJywgJ1NwcmVhZCcsICdDb2xvciddOyJdfQ==

/***/ },
/* 49 */
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2Vhc2luZy9jcmVhdGUtZWFzaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztrQkFnQ3dCLG9CQUFvQjs7Ozs7Ozs7Ozs7QUF0QjVDLElBQU0sWUFBWSxHQUFHLFVBQUMsTUFBTTtXQUFLLFVBQUMsUUFBUSxFQUFFLFFBQVE7ZUFBSyxBQUFDLFFBQVEsSUFBSSxHQUFHLEdBQUksTUFBTSxDQUFDLENBQUMsR0FBRyxRQUFRLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQSxBQUFDLEVBQUUsUUFBUSxDQUFDLENBQUEsR0FBSSxDQUFDO0tBQUE7Q0FBQTs7Ozs7Ozs7Ozs7O0FBQUMsQUFZakssSUFBTSxhQUFhLEdBQUcsVUFBQyxNQUFNO1dBQUssVUFBQyxRQUFRLEVBQUUsUUFBUTtlQUFLLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHLFFBQVEsRUFBRSxRQUFRLENBQUM7S0FBQTtDQUFBOzs7Ozs7Ozs7O0FBQUMsQUFVOUUsU0FBUyxvQkFBb0IsQ0FBQyxNQUFNLEVBQUU7QUFDakQsUUFBSSxjQUFjLEdBQUcsVUFBQyxRQUFRLEVBQUUsUUFBUTtlQUFLLE1BQU0sQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO0tBQUEsQ0FBQzs7QUFFeEUsa0JBQWMsQ0FBQyxFQUFFLEdBQUcsVUFBQyxRQUFRLEVBQUUsUUFBUTtlQUFLLE1BQU0sQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO0tBQUEsQ0FBQztBQUN2RSxrQkFBYyxDQUFDLEdBQUcsR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDM0Msa0JBQWMsQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDOztBQUU1QyxXQUFPLGNBQWMsQ0FBQztDQUN6QiIsImZpbGUiOiJjcmVhdGUtZWFzaW5nLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0UGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgICBNaXJyb3IgZWFzaW5nXG4gICAgXG4gICAgTWlycm9ycyB0aGUgcHJvdmlkZWQgZWFzaW5nIGZ1bmN0aW9uLCB1c2VkIGhlcmUgZm9yIG1pcnJvcmluZyBhblxuICAgIGVhc2VJbiBpbnRvIGFuIGVhc2VJbk91dFxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MsIGZyb20gMCAtIDEsIG9mIGN1cnJlbnQgc2hpZnRcbiAgICBAcGFyYW0gW2Z1bmN0aW9uXTogVGhlIGVhc2luZyBmdW5jdGlvbiB0byBtaXJyb3JcbiAgICBAcmV0dXJucyBbbnVtYmVyXTogVGhlIGVhc2luZy1hZGp1c3RlZCBkZWx0YVxuKi9cbmNvbnN0IG1pcnJvckVhc2luZyA9IChtZXRob2QpID0+IChwcm9ncmVzcywgc3RyZW5ndGgpID0+IChwcm9ncmVzcyA8PSAwLjUpID8gbWV0aG9kKDIgKiBwcm9ncmVzcywgc3RyZW5ndGgpIC8gMiA6ICgyIC0gbWV0aG9kKDIgKiAoMSAtIHByb2dyZXNzKSwgc3RyZW5ndGgpKSAvIDI7XG4gICAgICAgIFxuLypcbiAgICBSZXZlcnNlIGVhc2luZ1xuICAgIFxuICAgIFJldmVyc2VzIHRoZSBvdXRwdXQgb2YgdGhlIHByb3ZpZGVkIGVhc2luZyBmdW5jdGlvbiwgdXNlZCBmb3IgZmxpcHBpbmcgZWFzZUluXG4gICAgY3VydmUgdG8gYW4gZWFzZU91dC5cbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzLCBmcm9tIDAgLSAxLCBvZiBjdXJyZW50IHNoaWZ0XG4gICAgQHBhcmFtIFtmdW5jdGlvbl06IFRoZSBlYXNpbmcgZnVuY3Rpb24gdG8gcmV2ZXJzZVxuICAgIEByZXR1cm5zIFtudW1iZXJdOiBUaGUgZWFzaW5nLWFkanVzdGVkIGRlbHRhXG4qL1xuY29uc3QgcmV2ZXJzZUVhc2luZyA9IChtZXRob2QpID0+IChwcm9ncmVzcywgc3RyZW5ndGgpID0+IDEgLSBtZXRob2QoMSAtIHByb2dyZXNzLCBzdHJlbmd0aCk7XG5cbi8qXG4gICAgRWFzaW5nIGNsYXNzXG5cbiAgICBJZiBwcm92aWRlZCBlYXNpbmcgZnVuY3Rpb24sIHJldHVybnMgZWFzaW5nIGZ1bmN0aW9uIHdpdGggXG4gICAgaW4vb3V0L2luT3V0IHZhcmlhdGlvbnNcblxuICAgIElmIHByb3ZpZGVkIGZvdXIgYXJndW1lbnRzLCByZXR1cm5zIG5ldyBCZXppZXIgY2xhc3MgaW5zdGVhZC5cbiovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVFYXNpbmdGdW5jdGlvbihtZXRob2QpIHtcbiAgICBsZXQgZWFzaW5nRnVuY3Rpb24gPSAocHJvZ3Jlc3MsIHN0cmVuZ3RoKSA9PiBtZXRob2QocHJvZ3Jlc3MsIHN0cmVuZ3RoKTtcblxuICAgIGVhc2luZ0Z1bmN0aW9uLmluID0gKHByb2dyZXNzLCBzdHJlbmd0aCkgPT4gbWV0aG9kKHByb2dyZXNzLCBzdHJlbmd0aCk7XG4gICAgZWFzaW5nRnVuY3Rpb24ub3V0ID0gcmV2ZXJzZUVhc2luZyhtZXRob2QpO1xuICAgIGVhc2luZ0Z1bmN0aW9uLmluT3V0ID0gbWlycm9yRWFzaW5nKG1ldGhvZCk7XG5cbiAgICByZXR1cm4gZWFzaW5nRnVuY3Rpb247XG59XG4iXX0=

/***/ },
/* 50 */
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2Vhc2luZy9jcmVhdGUtYmV6aWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztrQkFtQ3dCLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7QUFwQm5DLElBQU0saUJBQWlCLEdBQUcsQ0FBQyxDQUFDO0FBQzVCLElBQU0sZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO0FBQy9CLElBQU0scUJBQXFCLEdBQUcsU0FBUyxDQUFDO0FBQ3hDLElBQU0sMEJBQTBCLEdBQUcsRUFBRSxDQUFDO0FBQ3RDLElBQU0sbUJBQW1CLEdBQUcsRUFBRSxDQUFDO0FBQy9CLElBQU0sa0JBQWtCLEdBQUcsR0FBRyxJQUFJLG1CQUFtQixHQUFHLEdBQUcsQ0FBQSxBQUFDLENBQUM7QUFDN0QsSUFBTSxrQkFBa0IsR0FBSSxPQUFPLFlBQVksS0FBSyxXQUFXLEFBQUM7OztBQUFDLEFBR2pFLElBQU0sQ0FBQyxHQUFHLFVBQUMsRUFBRSxFQUFFLEVBQUU7V0FBSyxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRTtDQUFBLENBQUM7QUFDaEQsSUFBTSxDQUFDLEdBQUcsVUFBQyxFQUFFLEVBQUUsRUFBRTtXQUFLLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUU7Q0FBQSxDQUFDO0FBQzFDLElBQU0sQ0FBQyxHQUFHLFVBQUMsRUFBRTtXQUFLLEdBQUcsR0FBRyxFQUFFO0NBQUEsQ0FBQzs7QUFFM0IsSUFBTSxRQUFRLEdBQUcsVUFBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUU7V0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO0NBQUEsQ0FBQzs7QUFFdEYsSUFBTSxVQUFVLEdBQUcsVUFBQyxDQUFDLEVBQUUs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QUM1Qix1QkFBVyxHQUFHLEVBQUU7OztBQUFDLFNBR3BCLE1BQU0sSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUFFO0FBQ2pCLDJCQUFXLEdBQUcsQ0FBQzs7O0FBQUMsYUFHbkIsTUFBTSxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQUU7QUFDakIsK0JBQVcsR0FBRyxDQUFDLENBQUM7aUJBRW5CLE1BQU07QUFDSCwrQkFBVyxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2lCQUNwRDs7QUFFRCxlQUFPLFdBQVcsQ0FBQztLQUN0QixDQUFDOztBQUVGLFdBQU8sUUFBUSxDQUFDO0NBQ25CIiwiZmlsZSI6ImNyZWF0ZS1iZXppZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHRQZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICAgIEJlemllciBmdW5jdGlvbiBnZW5lcmF0b3JcbiAgICAgICAgXG4gICAgR2HDq3RhbiBSZW5hdWRlYXUncyBCZXppZXJFYXNpbmdcbiAgICBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNpbmcvYmxvYi9tYXN0ZXIvaW5kZXguanMgIFxuICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9MSUNFTlNFXG4gICAgWW91J3JlIGEgaGVyb1xuICAgIFxuICAgIFVzZVxuICAgIFxuICAgICAgICB2YXIgZWFzZU91dCA9IG5ldyBCZXppZXIoLjE3LC42NywuODMsLjY3KSxcbiAgICAgICAgICAgIHggPSBlYXNlT3V0KDAuNSk7IC8vIHJldHVybnMgMC42MjcuLi5cbiovXG5cbi8vIENvbnN0YW50c1xuY29uc3QgTkVXVE9OX0lURVJBVElPTlMgPSA4O1xuY29uc3QgTkVXVE9OX01JTl9TTE9QRSA9IDAuMDAxO1xuY29uc3QgU1VCRElWSVNJT05fUFJFQ0lTSU9OID0gMC4wMDAwMDAxO1xuY29uc3QgU1VCRElWSVNJT05fTUFYX0lURVJBVElPTlMgPSAxMDtcbmNvbnN0IEtfU1BMSU5FX1RBQkxFX1NJWkUgPSAxMTtcbmNvbnN0IEtfU0FNUExFX1NURVBfU0laRSA9IDEuMCAvIChLX1NQTElORV9UQUJMRV9TSVpFIC0gMS4wKTtcbmNvbnN0IEZMT0FUXzMyX1NVUFBPUlRFRCA9ICh0eXBlb2YgRmxvYXQzMkFycmF5ICE9PSAndW5kZWZpbmVkJyk7XG5cbi8vIEhlbHBlciBtZXRob2RzXG5jb25zdCBhID0gKGExLCBhMikgPT4gMS4wIC0gMy4wICogYTIgKyAzLjAgKiBhMTtcbmNvbnN0IGIgPSAoYTEsIGEyKSA9PiAzLjAgKiBhMiAtIDYuMCAqIGExO1xuY29uc3QgYyA9IChhMSkgPT4gMy4wICogYTE7XG5cbmNvbnN0IGdldFNsb3BlID0gKHQsIGExLCBhMikgPT4gMy4wICogYShhMSwgYTIpICogdCAqIHQgKyAyLjAgKiBiKGExLCBhMikgKiB0ICsgYyhhMSk7XG5cbmNvbnN0IGNhbGNCZXppZXIgPSAodCwgYTEsIGEyKSA9PiAoKGEoYTEsIGEyKSAqIHQgKyBiKGExLCBhMikpICogdCArIGMoYTEpKSAqIHQ7XG5cbi8qXG4gICAgQ3JlYXRlIGEgY3ViaWMgYmV6aWVyIHJlc29sdmVyXG4qL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3ViaWNCZXppZXIobVgxLCBtWTEsIG1YMiwgbVkyKSB7XG4gICAgY29uc3Qgc2FtcGxlVmFsdWVzID0gRkxPQVRfMzJfU1VQUE9SVEVEID8gbmV3IEZsb2F0MzJBcnJheShLX1NQTElORV9UQUJMRV9TSVpFKSA6IG5ldyBBcnJheShLX1NQTElORV9UQUJMRV9TSVpFKTtcbiAgICBsZXQgX3ByZWNvbXB1dGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBiaW5hcnlTdWJkaXZpZGUgPSAoYVgsIGFBLCBhQikgPT4ge1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGxldCBjdXJyZW50WDtcbiAgICAgICAgbGV0IGN1cnJlbnRUO1xuXG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGN1cnJlbnRUID0gYUEgKyAoYUIgLSBhQSkgLyAyLjA7XG4gICAgICAgICAgICBjdXJyZW50WCA9IGNhbGNCZXppZXIoY3VycmVudFQsIG1YMSwgbVgyKSAtIGFYO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRYID4gMC4wKSB7XG4gICAgICAgICAgICAgICAgYUIgPSBjdXJyZW50VDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYUEgPSBjdXJyZW50VDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSB3aGlsZSAoTWF0aC5hYnMoY3VycmVudFgpID4gU1VCRElWSVNJT05fUFJFQ0lTSU9OICYmICsraSA8IFNVQkRJVklTSU9OX01BWF9JVEVSQVRJT05TKTtcblxuICAgICAgICByZXR1cm4gY3VycmVudFQ7XG4gICAgfTtcblxuICAgIGNvbnN0IG5ld3RvblJhcGhzb25JdGVyYXRlID0gKGFYLCBhR3Vlc3NUKSA9PiB7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgbGV0IGN1cnJlbnRTbG9wZSA9IDA7XG4gICAgICAgIGxldCBjdXJyZW50WDtcblxuICAgICAgICBmb3IgKDsgaSA8IE5FV1RPTl9JVEVSQVRJT05TOyArK2kpIHtcbiAgICAgICAgICAgIGN1cnJlbnRTbG9wZSA9IGdldFNsb3BlKGFHdWVzc1QsIG1YMSwgbVgyKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGN1cnJlbnRTbG9wZSA9PT0gMC4wKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFHdWVzc1Q7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGN1cnJlbnRYID0gY2FsY0JlemllcihhR3Vlc3NULCBtWDEsIG1YMikgLSBhWDtcbiAgICAgICAgICAgIGFHdWVzc1QgLT0gY3VycmVudFggLyBjdXJyZW50U2xvcGU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBhR3Vlc3NUO1xuICAgIH07XG5cbiAgICBjb25zdCBjYWxjU2FtcGxlVmFsdWVzID0gKCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEtfU1BMSU5FX1RBQkxFX1NJWkU7ICsraSkge1xuICAgICAgICAgICAgc2FtcGxlVmFsdWVzW2ldID0gY2FsY0JlemllcihpICogS19TQU1QTEVfU1RFUF9TSVpFLCBtWDEsIG1YMik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0VEZvclggPSAoYVgpID0+IHtcbiAgICAgICAgbGV0IGludGVydmFsU3RhcnQgPSAwLjA7XG4gICAgICAgIGxldCBjdXJyZW50U2FtcGxlID0gMTtcbiAgICAgICAgbGV0IGxhc3RTYW1wbGUgPSBLX1NQTElORV9UQUJMRV9TSVpFIC0gMTtcbiAgICAgICAgbGV0IGRpc3QgPSAwLjA7XG4gICAgICAgIGxldCBndWVzc0ZvclQgPSAwLjA7XG4gICAgICAgIGxldCBpbml0aWFsU2xvcGUgPSAwLjA7XG4gICAgICAgICAgICBcbiAgICAgICAgZm9yICg7IGN1cnJlbnRTYW1wbGUgIT0gbGFzdFNhbXBsZSAmJiBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0gPD0gYVg7ICsrY3VycmVudFNhbXBsZSkge1xuICAgICAgICAgICAgaW50ZXJ2YWxTdGFydCArPSBLX1NBTVBMRV9TVEVQX1NJWkU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC0tY3VycmVudFNhbXBsZTtcbiAgICAgICAgXG4gICAgICAgIGRpc3QgPSAoYVggLSBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0pIC8gKHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlKzFdIC0gc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdKTtcbiAgICAgICAgZ3Vlc3NGb3JUID0gaW50ZXJ2YWxTdGFydCArIGRpc3QgKiBLX1NBTVBMRV9TVEVQX1NJWkU7XG4gICAgICAgIFxuICAgICAgICBpbml0aWFsU2xvcGUgPSBnZXRTbG9wZShndWVzc0ZvclQsIG1YMSwgbVgyKTtcbiAgICAgICAgXG4gICAgICAgIC8vIElmIHNsb3BlIGlzIGdyZWF0ZXIgdGhhbiBtaW5cbiAgICAgICAgaWYgKGluaXRpYWxTbG9wZSA+PSBORVdUT05fTUlOX1NMT1BFKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3dG9uUmFwaHNvbkl0ZXJhdGUoYVgsIGd1ZXNzRm9yVCk7XG4gICAgICAgIC8vIFNsb3BlIGlzIGVxdWFsIHRvIG1pblxuICAgICAgICB9IGVsc2UgaWYgKGluaXRpYWxTbG9wZSA9PT0gMC4wKSB7XG4gICAgICAgICAgICByZXR1cm4gZ3Vlc3NGb3JUO1xuICAgICAgICAvLyBTbG9wZSBpcyBsZXNzIHRoYW4gbWluXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYmluYXJ5U3ViZGl2aWRlKGFYLCBpbnRlcnZhbFN0YXJ0LCBpbnRlcnZhbFN0YXJ0ICsgS19TQU1QTEVfU1RFUF9TSVpFKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBwcmVjb21wdXRlID0gKCkgPT4ge1xuICAgICAgICBfcHJlY29tcHV0ZWQgPSB0cnVlO1xuICAgICAgICBpZiAobVgxICE9IG1ZMSB8fCBtWDIgIT0gbVkyKSB7XG4gICAgICAgICAgICBjYWxjU2FtcGxlVmFsdWVzKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgcmVzb2x2ZXIgPSAoYVgpID0+IHtcbiAgICAgICAgbGV0IHJldHVyblZhbHVlO1xuXG4gICAgICAgIGlmICghX3ByZWNvbXB1dGVkKSB7XG4gICAgICAgICAgICBwcmVjb21wdXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIElmIGxpbmVhciBncmFkaWVudCwgcmV0dXJuIFggYXMgVFxuICAgICAgICBpZiAobVgxID09PSBtWTEgJiYgbVgyID09PSBtWTIpIHtcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gYVg7XG4gICAgICAgICAgICBcbiAgICAgICAgLy8gSWYgYXQgc3RhcnQsIHJldHVybiAwXG4gICAgICAgIH0gZWxzZSBpZiAoYVggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gMDtcbiAgICAgICAgICAgIFxuICAgICAgICAvLyBJZiBhdCBlbmQsIHJldHVybiAxXG4gICAgICAgIH0gZWxzZSBpZiAoYVggPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gMTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSBjYWxjQmV6aWVyKGdldFRGb3JYKGFYKSwgbVkxLCBtWTIpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gcmV0dXJuVmFsdWU7XG4gICAgfTtcblxuICAgIHJldHVybiByZXNvbHZlcjtcbn1cbiJdfQ==

/***/ },
/* 51 */
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wcm9jZXNzL3RpY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLElBQU0sTUFBTSxHQUFHLEFBQUMsT0FBTyxNQUFNLEtBQUssV0FBVyxJQUFJLE1BQU0sQ0FBQyxxQkFBcUIsR0FBSSxJQUFJLEdBQUcsS0FBSyxDQUFDOztBQUU5RixJQUFJLElBQUksWUFBQSxDQUFDOztBQUVULElBQUksTUFBTSxFQUFFO0FBQ1IsUUFBSSxHQUFHLFVBQUMsUUFBUTtlQUFLLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUM7S0FBQSxDQUFDO0NBRS9ELE1BQU07Ozs7Ozs7Ozs7Ozs7OztBQWVILFlBQUksUUFBUSxHQUFHLENBQUMsQ0FBQzs7QUFFakIsWUFBSSxHQUFHLFVBQUMsUUFBUSxFQUFLO0FBQ2pCLGdCQUFNLFdBQVcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ3pDLGdCQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQSxBQUFDLENBQUMsQ0FBQzs7QUFFOUQsb0JBQVEsR0FBRyxXQUFXLEdBQUcsVUFBVSxDQUFDOztBQUVwQyxzQkFBVSxDQUFDO3VCQUFNLFFBQVEsQ0FBQyxRQUFRLENBQUM7YUFBQSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1NBQ3BELENBQUM7O0NBQ0w7O2tCQUVjLElBQUkiLCJmaWxlIjoidGljay5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dFBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gICAgRGV0ZWN0IGFuZCBsb2FkIGFuIGFwcHJvcHJpYXRlIGNsb2NrIHNldHRpbmcgZm9yIHRoZSBlbnZpcm9ubWVudFxuKi9cblxuY29uc3QgaGFzUkFGID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpID8gdHJ1ZSA6IGZhbHNlO1xuXG5sZXQgdGljaztcblxuaWYgKGhhc1JBRikge1xuICAgIHRpY2sgPSAoY2FsbGJhY2spID0+IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spO1xuXG59IGVsc2Uge1xuICAgIC8qXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbFxuICAgICAgICBcbiAgICAgICAgRm9yIElFOC85IEZsaW5zdG9uZXMgYW5kIG5vbi1icm93c2VyIGVudmlyb25tZW50c1xuXG4gICAgICAgIFRha2VuIGZyb20gUGF1bCBJcmlzaC4gV2UndmUgc3RyaXBwZWQgb3V0IGNhbmNlbEFuaW1hdGlvbkZyYW1lIGNoZWNrcyBiZWNhdXNlIHdlIGRvbid0IGZveCB3aXRoIHRoYXRcbiAgICAgICAgXG4gICAgICAgIGh0dHA6Ly9wYXVsaXJpc2guY29tLzIwMTEvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1hbmltYXRpbmcvXG4gICAgICAgIGh0dHA6Ly9teS5vcGVyYS5jb20vZW1vbGxlci9ibG9nLzIwMTEvMTIvMjAvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1lci1hbmltYXRpbmdcbiAgICAgICAgIFxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGwgYnkgRXJpayBNw7ZsbGVyLiBmaXhlcyBmcm9tIFBhdWwgSXJpc2ggYW5kIFRpbm8gWmlqZGVsXG4gICAgICAgICBcbiAgICAgICAgTUlUIGxpY2Vuc2VcbiAgICAqL1xuICAgIGxldCBsYXN0VGltZSA9IDA7XG5cbiAgICB0aWNrID0gKGNhbGxiYWNrKSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIGNvbnN0IHRpbWVUb0NhbGwgPSBNYXRoLm1heCgwLCAxNiAtIChjdXJyZW50VGltZSAtIGxhc3RUaW1lKSk7XG5cbiAgICAgICAgbGFzdFRpbWUgPSBjdXJyZW50VGltZSArIHRpbWVUb0NhbGw7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBjYWxsYmFjayhsYXN0VGltZSksIHRpbWVUb0NhbGwpO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRpY2s7Il19

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";
	
	exports.__esModule = true;
	// [int]: Incremented for each new running process
	var currentProcessId = 0;
	
	// [int]: Number of all running processes
	var totalRunningCount = 0;
	
	// [int]: Number of running processes excluding background processes
	var nonBackgroundRunningCount = 0;
	
	// [array]: Array of running process IDs
	var runningIds = [];
	
	// [object]: Map of running processes
	var activeProcesses = {};
	
	// [array]: Array of process IDs queued for activation
	var activateQueue = [];
	
	// [array]: Array of process IDs queued for deactivation
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
	    activeProcesses: activeProcesses,
	
	    // Activate a process
	    activate: function (id, process) {
	        activeProcesses[id] = process;
	        process.isActive = true;
	        updateQueues(id, activateQueue, deactivateQueue);
	    },
	
	    // Deactivate a process
	    deactivate: function (id) {
	        process.isActive = false;
	        updateQueues(id, deactivateQueue, activateQueue);
	    },
	
	    // Number background processes
	    getNonBackgroundRunningCount: function () {
	        return nonBackgroundRunningCount;
	    },
	
	    // Increment current process ID and return
	    getProcessId: function () {
	        return currentProcessId++;
	    },
	
	    // Resolve activate/deactivate processes and return active ids
	    getActiveIds: function () {
	        /*
	            Process deactivate queue
	        */
	        var deactivateQueueLength = deactivateQueue.length;
	
	        for (var i = 0; i < deactivateQueueLength; i++) {
	            var id = deactivateQueue[i];
	            var activeIdIndex = runningIds.indexOf(id);
	            var _process = activeProcesses[id];
	
	            // If this is a running process, deactivate
	            if (activeIdIndex > -1) {
	                runningIds.splice(activeIdIndex, 1);
	                updateRunningCount(false, _process.isLazy);
	                delete activeProcesses[id];
	
	                if (_process.onDeactivate) {
	                    _process.onDeactivate(_process);
	                }
	            }
	        }
	
	        /*
	            Empty deactivate queue. We use `Array.splice` because it doesn't
	            works on the original array so we don't have to garbage collect anything
	        */
	        deactivateQueue.splice(0, deactivateQueueLength);
	
	        /*
	            Process activate queue
	        */
	        var activateQueueLength = activateQueue.length;
	
	        for (var i = 0; i < activateQueueLength; i++) {
	            var id = activateQueue[i];
	            var activeIdIndex = runningIds.indexOf(id);
	            var _process2 = activeProcesses[id];
	
	            // If process isn't already running, activate
	            if (activeIdIndex === -1 && _process2) {
	                if (_process2.isPriority) {
	                    runningIds.unshift(id);
	                } else {
	                    runningIds.push(id);
	                }
	
	                updateRunningCount(true, _process2.isLazy);
	
	                if (_process2.onActivate) {
	                    _process2.onActivate(_process2);
	                }
	            }
	        }
	
	        activateQueue.splice(0, activateQueueLength);
	
	        return runningIds;
	    }
	};
	//# sourceMappingURL=data:application/json;base64,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O0FBQ3RCLDRCQUFPLENBQUMsWUFBWSxDQUFDLFFBQU8sQ0FBQyxDQUFDO2lCQUNqQzthQUNKO1NBQ0o7Ozs7OztBQUFBLEFBTUQsdUJBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLHFCQUFxQixDQUFDOzs7OztBQUFDLEFBS2pELFlBQU0sbUJBQW1CLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBQzs7QUFFakQsYUFBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLG1CQUFtQixFQUFFLENBQUMsRUFBRSxFQUFFO0FBQzFDLGdCQUFNLEVBQUUsR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDNUIsZ0JBQU0sYUFBYSxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDN0MsZ0JBQU0sU0FBTyxHQUFHLGVBQWUsQ0FBQyxFQUFFLENBQUM7OztBQUFDLEFBR3BDLGdCQUFJLGFBQWEsS0FBSyxDQUFDLENBQUMsSUFBSSxTQUFPLEVBQUU7QUFDakMsb0JBQUksU0FBTyxDQUFDLFVBQVUsRUFBRTtBQUNwQiw4QkFBVSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztpQkFDMUIsTUFBTTtBQUNILDhCQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2lCQUN2Qjs7QUFFRCxrQ0FBa0IsQ0FBQyxJQUFJLEVBQUUsU0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDOztBQUV6QyxvQkFBSSxTQUFPLENBQUMsVUFBVSxFQUFFO0FBQ3BCLDZCQUFPLENBQUMsVUFBVSxDQUFDLFNBQU8sQ0FBQyxDQUFDO2lCQUMvQjthQUNKO1NBQ0o7O0FBRUQscUJBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLG1CQUFtQixDQUFDLENBQUM7O0FBRTdDLGVBQU8sVUFBVSxDQUFDO0tBQ3JCO0NBQ0oiLCJmaWxlIjoibWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dFBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbIi8vIFtpbnRdOiBJbmNyZW1lbnRlZCBmb3IgZWFjaCBuZXcgcnVubmluZyBwcm9jZXNzXG5sZXQgY3VycmVudFByb2Nlc3NJZCA9IDA7XG5cbi8vIFtpbnRdOiBOdW1iZXIgb2YgYWxsIHJ1bm5pbmcgcHJvY2Vzc2VzXG5sZXQgdG90YWxSdW5uaW5nQ291bnQgPSAwO1xuXG4vLyBbaW50XTogTnVtYmVyIG9mIHJ1bm5pbmcgcHJvY2Vzc2VzIGV4Y2x1ZGluZyBiYWNrZ3JvdW5kIHByb2Nlc3Nlc1xubGV0IG5vbkJhY2tncm91bmRSdW5uaW5nQ291bnQgPSAwO1xuXG4vLyBbYXJyYXldOiBBcnJheSBvZiBydW5uaW5nIHByb2Nlc3MgSURzXG5jb25zdCBydW5uaW5nSWRzID0gW107XG5cbi8vIFtvYmplY3RdOiBNYXAgb2YgcnVubmluZyBwcm9jZXNzZXNcbmNvbnN0IGFjdGl2ZVByb2Nlc3NlcyA9IHt9O1xuXG4vLyBbYXJyYXldOiBBcnJheSBvZiBwcm9jZXNzIElEcyBxdWV1ZWQgZm9yIGFjdGl2YXRpb25cbmNvbnN0IGFjdGl2YXRlUXVldWUgPSBbXTtcblxuLy8gW2FycmF5XTogQXJyYXkgb2YgcHJvY2VzcyBJRHMgcXVldWVkIGZvciBkZWFjdGl2YXRpb25cbmNvbnN0IGRlYWN0aXZhdGVRdWV1ZSA9IFtdO1xuXG4vKlxuICAgIFVwZGF0ZSBhY3RpdmF0ZS9kZWFjdGl2YXRlIHF1ZXVlc1xuXG4gICAgQHBhcmFtIFtudW1iZXJdXG4gICAgQHBhcmFtIFthcnJheV1cbiAgICBAcGFyYW0gW2FycmF5XVxuKi9cbmNvbnN0IHVwZGF0ZVF1ZXVlcyA9IChpZCwgaW5MaXN0LCBvdXRMaXN0KSA9PiB7XG4gICAgY29uc3QgaW5Qb3NpdGlvbiA9IGluTGlzdC5pbmRleE9mKGlkKTtcbiAgICBjb25zdCBvdXRQb3NpdGlvbiA9IG91dExpc3QuaW5kZXhPZihpZCk7XG5cbiAgICBpZiAoaW5Qb3NpdGlvbiA9PT0gLTEpIHtcbiAgICAgICAgaW5MaXN0LnB1c2goaWQpO1xuICAgIH1cblxuICAgIGlmIChvdXRQb3NpdGlvbiA+IC0xKSB7XG4gICAgICAgIG91dExpc3Quc3BsaWNlKG91dFBvc2l0aW9uLCAxKTtcbiAgICB9XG59O1xuXG4vKlxuICAgIFVwZGF0ZSBydW5uaW5nXG5cbiAgICBbYm9vbGVhbl06IGB0cnVlYCB0byBhZGRcbiAgICBbYm9vbGVhbl06IGB0cnVlYCBpZiBsYXp5XG4qL1xuY29uc3QgdXBkYXRlUnVubmluZ0NvdW50ID0gKGFkZCwgaXNMYXp5KSA9PiB7XG4gICAgY29uc3QgbW9kaWZ5ID0gYWRkID8gMSA6IC0xO1xuXG4gICAgdG90YWxSdW5uaW5nQ291bnQgKz0gbW9kaWZ5O1xuXG4gICAgaWYgKCFpc0xhenkpIHtcbiAgICAgICAgbm9uQmFja2dyb3VuZFJ1bm5pbmdDb3VudCArPSBtb2RpZnk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGFjdGl2ZVByb2Nlc3NlcyxcblxuICAgIC8vIEFjdGl2YXRlIGEgcHJvY2Vzc1xuICAgIGFjdGl2YXRlOiAoaWQsIHByb2Nlc3MpID0+IHtcbiAgICAgICAgYWN0aXZlUHJvY2Vzc2VzW2lkXSA9IHByb2Nlc3M7XG4gICAgICAgIHByb2Nlc3MuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICB1cGRhdGVRdWV1ZXMoaWQsIGFjdGl2YXRlUXVldWUsIGRlYWN0aXZhdGVRdWV1ZSk7XG4gICAgfSxcblxuICAgIC8vIERlYWN0aXZhdGUgYSBwcm9jZXNzXG4gICAgZGVhY3RpdmF0ZTogKGlkKSA9PiB7XG4gICAgICAgIHByb2Nlc3MuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdXBkYXRlUXVldWVzKGlkLCBkZWFjdGl2YXRlUXVldWUsIGFjdGl2YXRlUXVldWUpO1xuICAgIH0sXG5cbiAgICAvLyBOdW1iZXIgYmFja2dyb3VuZCBwcm9jZXNzZXNcbiAgICBnZXROb25CYWNrZ3JvdW5kUnVubmluZ0NvdW50OiAoKSA9PiBub25CYWNrZ3JvdW5kUnVubmluZ0NvdW50LFxuXG4gICAgLy8gSW5jcmVtZW50IGN1cnJlbnQgcHJvY2VzcyBJRCBhbmQgcmV0dXJuXG4gICAgZ2V0UHJvY2Vzc0lkOiAoKSA9PiBjdXJyZW50UHJvY2Vzc0lkKyssXG5cbiAgICAvLyBSZXNvbHZlIGFjdGl2YXRlL2RlYWN0aXZhdGUgcHJvY2Vzc2VzIGFuZCByZXR1cm4gYWN0aXZlIGlkc1xuICAgIGdldEFjdGl2ZUlkczogKCkgPT4ge1xuICAgICAgICAvKlxuICAgICAgICAgICAgUHJvY2VzcyBkZWFjdGl2YXRlIHF1ZXVlXG4gICAgICAgICovXG4gICAgICAgIGNvbnN0IGRlYWN0aXZhdGVRdWV1ZUxlbmd0aCA9IGRlYWN0aXZhdGVRdWV1ZS5sZW5ndGg7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZWFjdGl2YXRlUXVldWVMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgaWQgPSBkZWFjdGl2YXRlUXVldWVbaV07XG4gICAgICAgICAgICBjb25zdCBhY3RpdmVJZEluZGV4ID0gcnVubmluZ0lkcy5pbmRleE9mKGlkKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2Nlc3MgPSBhY3RpdmVQcm9jZXNzZXNbaWRdO1xuXG4gICAgICAgICAgICAvLyBJZiB0aGlzIGlzIGEgcnVubmluZyBwcm9jZXNzLCBkZWFjdGl2YXRlXG4gICAgICAgICAgICBpZiAoYWN0aXZlSWRJbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgcnVubmluZ0lkcy5zcGxpY2UoYWN0aXZlSWRJbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgdXBkYXRlUnVubmluZ0NvdW50KGZhbHNlLCBwcm9jZXNzLmlzTGF6eSk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGFjdGl2ZVByb2Nlc3Nlc1tpZF07XG5cbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5vbkRlYWN0aXZhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzcy5vbkRlYWN0aXZhdGUocHJvY2Vzcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLypcbiAgICAgICAgICAgIEVtcHR5IGRlYWN0aXZhdGUgcXVldWUuIFdlIHVzZSBgQXJyYXkuc3BsaWNlYCBiZWNhdXNlIGl0IGRvZXNuJ3RcbiAgICAgICAgICAgIHdvcmtzIG9uIHRoZSBvcmlnaW5hbCBhcnJheSBzbyB3ZSBkb24ndCBoYXZlIHRvIGdhcmJhZ2UgY29sbGVjdCBhbnl0aGluZ1xuICAgICAgICAqL1xuICAgICAgICBkZWFjdGl2YXRlUXVldWUuc3BsaWNlKDAsIGRlYWN0aXZhdGVRdWV1ZUxlbmd0aCk7XG5cbiAgICAgICAgLypcbiAgICAgICAgICAgIFByb2Nlc3MgYWN0aXZhdGUgcXVldWVcbiAgICAgICAgKi9cbiAgICAgICAgY29uc3QgYWN0aXZhdGVRdWV1ZUxlbmd0aCA9IGFjdGl2YXRlUXVldWUubGVuZ3RoO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWN0aXZhdGVRdWV1ZUxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBpZCA9IGFjdGl2YXRlUXVldWVbaV07XG4gICAgICAgICAgICBjb25zdCBhY3RpdmVJZEluZGV4ID0gcnVubmluZ0lkcy5pbmRleE9mKGlkKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2Nlc3MgPSBhY3RpdmVQcm9jZXNzZXNbaWRdO1xuXG4gICAgICAgICAgICAvLyBJZiBwcm9jZXNzIGlzbid0IGFscmVhZHkgcnVubmluZywgYWN0aXZhdGVcbiAgICAgICAgICAgIGlmIChhY3RpdmVJZEluZGV4ID09PSAtMSAmJiBwcm9jZXNzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuaXNQcmlvcml0eSkge1xuICAgICAgICAgICAgICAgICAgICBydW5uaW5nSWRzLnVuc2hpZnQoaWQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmdJZHMucHVzaChpZCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdXBkYXRlUnVubmluZ0NvdW50KHRydWUsIHByb2Nlc3MuaXNMYXp5KTtcblxuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLm9uQWN0aXZhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzcy5vbkFjdGl2YXRlKHByb2Nlc3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGFjdGl2YXRlUXVldWUuc3BsaWNlKDAsIGFjdGl2YXRlUXVldWVMZW5ndGgpO1xuXG4gICAgICAgIHJldHVybiBydW5uaW5nSWRzO1xuICAgIH1cbn07XG4iXX0=
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(53)))

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    draining = true;
	    var currentQueue;
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        var i = -1;
	        while (++i < len) {
	            currentQueue[i]();
	        }
	        len = queue.length;
	    }
	    draining = false;
	}
	process.nextTick = function (fun) {
	    queue.push(fun);
	    if (!draining) {
	        setTimeout(drainQueue, 0);
	    }
	};
	
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	// TODO(shtylman)
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmY2NmIwZDM3YTViZGFiMDY2M2QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvYWQvZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9wb3Btb3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9BY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdG9yL0FjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL1R3ZWVuLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9jZXNzL3RpbWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL1BoeXNpY3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvVHJhY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2Nlc3MvUHJvY2Vzcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5wdXQvSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy9zdGFnZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvdGltZWxpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkYXB0ZXIvYWRhcHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9hdHRyLWFkYXB0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkYXB0ZXIvY3NzLWFkYXB0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkYXB0ZXIvc3ZnLWFkYXB0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkYXB0ZXIvc3ZnLXBhdGgtYWRhcHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL2JpbmQtYWRhcHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9lYXNpbmcvcHJlc2V0LWVhc2luZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL2NhbGMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL2FscGhhLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9hbmdsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvYXhlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvY29sb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL2NvbXBsZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL2hleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvaHNsLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9wb3NpdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL3B4LmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9yZ2IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL3NjYWxlLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9zaGFkb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL3VuaXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy90cmFuc2Zvcm1lcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdG9yL2luYy9nZW5lcmF0ZS1ibGVuZC1jdXJ2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5wdXQvUG9pbnRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvY2Vzcy9sb29wLmpzIiwid2VicGFjazovLy8uL3NyYy9hZGFwdGVyL3N2Zy1wYXRoL2J1aWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9hZGFwdGVyL3N2Zy1wYXRoL3N0YXRlLW1hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9jc3Mvc3RhdGUtbWFwLmpzIiwid2VicGFjazovLy8uL3NyYy9hZGFwdGVyL3N2Zy92YWx1ZS10eXBlLW1hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9zdmcvYnVpbGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkYXB0ZXIvY3NzL3ZhbHVlLXR5cGUtbWFwLmpzIiwid2VicGFjazovLy8uL3NyYy9hZGFwdGVyL2Nzcy9wcmVmaXhlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9jc3MvYnVpbGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkYXB0ZXIvY3NzL3RyYW5zZm9ybS1wcm9wcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvc2V0dGluZ3MvZGVmYXVsdC1wcm9wcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvc2V0dGluZ3MvZGljdGlvbmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9lYXNpbmcvY3JlYXRlLWVhc2luZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9lYXNpbmcvY3JlYXRlLWJlemllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvY2Vzcy90aWNrLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9jZXNzL21hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9wcm9jZXNzL2Jyb3dzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esd0M7Ozs7Ozs7QUN0Q0E7O0FBRUE7O0FBRUE7O0FBRUEsd0NBQXVDLDZCQUE2QixZQUFZLEVBQUUsT0FBTyxpQkFBaUIsbUJBQW1CLHVCQUF1Qiw0RUFBNEUsRUFBRSxFQUFFLHNCQUFzQixlQUFlLEVBQUU7O0FBRTNROztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUEyQyxtdUI7Ozs7OztBQ2YzQzs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHdDQUF1Qyw2QkFBNkIsWUFBWSxFQUFFLE9BQU8saUJBQWlCLG1CQUFtQix1QkFBdUIsNEVBQTRFLEVBQUUsRUFBRSxzQkFBc0IsZUFBZSxFQUFFOztBQUUzUSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0YsbUNBQWtDOztBQUVsQzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtFQUFpRSxhQUFhO0FBQzlFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUVBQW9FLGVBQWU7QUFDbkY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxRUFBb0UsZUFBZTtBQUNuRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsNENBQTJDLCs2SDs7Ozs7O0FDck8zQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CLHFCQUFxQjtBQUN4QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW1CLGNBQWM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFtQixtQkFBbUI7QUFDdEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBMkMsK3BhOzs7Ozs7QUM1UTNDOztBQUVBLG9EQUFtRCxnQkFBZ0Isc0JBQXNCLE9BQU8sMkJBQTJCLDBCQUEwQix5REFBeUQsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLGVBQWU7O0FBRTlQOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RiwrQ0FBOEMsaUJBQWlCLHFCQUFxQixvQ0FBb0MsNkRBQTZELG9CQUFvQixFQUFFLGVBQWU7O0FBRTFOLGtEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKLGtEQUFpRCxhQUFhLHVGQUF1RixFQUFFLHVGQUF1Rjs7QUFFOU8sMkNBQTBDLCtEQUErRCxxR0FBcUcsRUFBRSx5RUFBeUUsZUFBZSx5RUFBeUUsRUFBRSxFQUFFLHVIQUF1SDs7QUFFNWU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZFQUE0RTtBQUM1RTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWdEO0FBQ2hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7O0FBRUEsMkNBQTBDOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXFCO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQ0FBK0IsMEJBQTBCO0FBQ3pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQTZCO0FBQzdCO0FBQ0EsOEJBQTZCO0FBQzdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdGQUErRTtBQUMvRTtBQUNBO0FBQ0E7QUFDQSw4Q0FBNkM7QUFDN0M7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQTZCO0FBQzdCLHVEQUFzRDtBQUN0RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBdUIsdUJBQXVCO0FBQzlDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBdUIsd0JBQXdCO0FBQy9DO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFDOztBQUVEO0FBQ0EsNENBQTJDLG05MUI7Ozs7OztBQ3ZZM0M7O0FBRUEsb0RBQW1ELGdCQUFnQixzQkFBc0IsT0FBTywyQkFBMkIsMEJBQTBCLHlEQUF5RCwyQkFBMkIsRUFBRSxFQUFFLEVBQUUsZUFBZTs7QUFFOVA7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLGtEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKLGtEQUFpRCxhQUFhLHVGQUF1RixFQUFFLHVGQUF1Rjs7QUFFOU8sMkNBQTBDLCtEQUErRCxxR0FBcUcsRUFBRSx5RUFBeUUsZUFBZSx5RUFBeUUsRUFBRSxFQUFFLHVIQUF1SDs7QUFFNWU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBc0Isb0JBQW9CO0FBQzFDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHdCQUF1Qix1QkFBdUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBdUIseUJBQXlCO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBMkIseUJBQXlCO0FBQ3BEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEwQjtBQUMxQjtBQUNBO0FBQ0EsVUFBUztBQUNUOztBQUVBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBLDRDQUEyQywrOVo7Ozs7OztBQzdOM0M7O0FBRUEsb0RBQW1ELGdCQUFnQixzQkFBc0IsT0FBTywyQkFBMkIsMEJBQTBCLHlEQUF5RCwyQkFBMkIsRUFBRSxFQUFFLEVBQUUsZUFBZTs7QUFFOVA7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLGtEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKLGtEQUFpRCxhQUFhLHVGQUF1RixFQUFFLHVGQUF1Rjs7QUFFOU8sMkNBQTBDLCtEQUErRCxxR0FBcUcsRUFBRSx5RUFBeUUsZUFBZSx5RUFBeUUsRUFBRSxFQUFFLHVIQUF1SDs7QUFFNWU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHdCQUF1Qix1QkFBdUI7QUFDOUM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDJCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDs7QUFFQTtBQUNBLDJCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQSw0Q0FBMkMsdWhUOzs7Ozs7QUMvSzNDOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUEyQywrOEM7Ozs7OztBQzlCM0M7O0FBRUEsb0RBQW1ELGdCQUFnQixzQkFBc0IsT0FBTywyQkFBMkIsMEJBQTBCLHlEQUF5RCwyQkFBMkIsRUFBRSxFQUFFLEVBQUUsZUFBZTs7QUFFOVA7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLGtEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKLGtEQUFpRCxhQUFhLHVGQUF1RixFQUFFLHVGQUF1Rjs7QUFFOU8sMkNBQTBDLCtEQUErRCxxR0FBcUcsRUFBRSx5RUFBeUUsZUFBZSx5RUFBeUUsRUFBRSxFQUFFLHVIQUF1SDs7QUFFNWU7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHdFQUF1RSxhQUFhO0FBQ3BGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx3QkFBdUIsdUJBQXVCO0FBQzlDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEwQjtBQUMxQjtBQUNBO0FBQ0EsVUFBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFDOztBQUVEO0FBQ0EsNENBQTJDLHUwTTs7Ozs7O0FDeEgzQzs7QUFFQSxvREFBbUQsZ0JBQWdCLHNCQUFzQixPQUFPLDJCQUEyQiwwQkFBMEIseURBQXlELDJCQUEyQixFQUFFLEVBQUUsRUFBRSxlQUFlOztBQUU5UDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Ysa0RBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdkosa0RBQWlELGFBQWEsdUZBQXVGLEVBQUUsdUZBQXVGOztBQUU5TywyQ0FBMEMsK0RBQStELHFHQUFxRyxFQUFFLHlFQUF5RSxlQUFlLHlFQUF5RSxFQUFFLEVBQUUsdUhBQXVIOztBQUU1ZTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUNBQXNDO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx3QkFBdUIsdUJBQXVCO0FBQzlDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUOztBQUVBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBLDRDQUEyQyx1L0s7Ozs7OztBQ2pIM0M7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsd0NBQXVDLDZCQUE2QixZQUFZLEVBQUUsT0FBTyxpQkFBaUIsbUJBQW1CLHVCQUF1Qiw0RUFBNEUsRUFBRSxFQUFFLHNCQUFzQixlQUFlLEVBQUU7O0FBRTNRLCtDQUE4QyxpQkFBaUIscUJBQXFCLG9DQUFvQyw2REFBNkQsb0JBQW9CLEVBQUUsZUFBZTs7QUFFMU4sa0RBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdko7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBLDRDQUEyQyx1aEs7Ozs7OztBQ3hIM0M7O0FBRUEsb0RBQW1ELGdCQUFnQixzQkFBc0IsT0FBTywyQkFBMkIsMEJBQTBCLHlEQUF5RCwyQkFBMkIsRUFBRSxFQUFFLEVBQUUsZUFBZTs7QUFFOVA7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLGtEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKLGtEQUFpRCxhQUFhLHVGQUF1RixFQUFFLHVGQUF1Rjs7QUFFOU8sMkNBQTBDLCtEQUErRCxxR0FBcUcsRUFBRSx5RUFBeUUsZUFBZSx5RUFBeUUsRUFBRSxFQUFFLHVIQUF1SDs7QUFFNWU7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUNBQWdDO0FBQ2hDOztBQUVBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBLDRDQUEyQywyNUM7Ozs7OztBQ25EM0M7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBLG1CQUFrQixlQUFlO0FBQ2pDO0FBQ0E7O0FBRUE7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxNQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQSw0Q0FBMkMsMjlGOzs7Ozs7QUNwRDNDOztBQUVBLG9EQUFtRCxnQkFBZ0Isc0JBQXNCLE9BQU8sMkJBQTJCLDBCQUEwQix5REFBeUQsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLGVBQWU7O0FBRTlQO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBOztBQUVBLG9CQUFtQixhQUFhO0FBQ2hDO0FBQ0E7O0FBRUEsYUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFtQixvQkFBb0I7QUFDdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUVBQXdFOztBQUV4RTs7QUFFQTtBQUNBOztBQUVBLDJDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSw0Q0FBMkMsKzRLOzs7Ozs7QUMxRzNDOztBQUVBOztBQUVBLGtEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHVDQUFzQyxrQkFBa0I7O0FBRXhEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsNENBQTJDLDJsTDs7Ozs7O0FDM0czQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUEyQyx1aEQ7Ozs7OztBQ2hDM0M7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBMkMsK2hFOzs7Ozs7QUMvQzNDOztBQUVBLG9EQUFtRCxnQkFBZ0Isc0JBQXNCLE9BQU8sMkJBQTJCLDBCQUEwQix5REFBeUQsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLGVBQWU7O0FBRTlQO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLDhCQUE2QjtBQUM3QjtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUEyQywyOUU7Ozs7OztBQ3ZEM0M7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBMkMsbTRDOzs7Ozs7QUNoQzNDOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3Rjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0EsNENBQTJDLG1uRjs7Ozs7O0FDMUQzQzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVGQUFzRixhQUFhO0FBQ25HO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBMkMsKzZMOzs7Ozs7QUMxRzNDOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7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O0FBQ0E7QUFDQTs7QUFFQSx3QkFBdUIseUJBQXlCO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNENBQTJDLG1rUjs7Ozs7OztBQ25KM0M7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNkJBQTRCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA2ZjY2YjBkMzdhNWJkYWIwNjYzZFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9wb3Btb3Rpb24gPSByZXF1aXJlKCcuLi9wb3Btb3Rpb24nKTtcblxudmFyIHBvcG1vdGlvbiA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9wb3Btb3Rpb24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG52YXIgVUlyZWYgPSB3aW5kb3cubW90aW9uO1xuXG5wb3Btb3Rpb24ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICB3aW5kb3cubW90aW9uID0gVUlyZWY7XG59O1xuXG53aW5kb3cubW90aW9uID0gd2luZG93LnBvcG1vdGlvbiA9IHBvcG1vdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5c2IyRmtMMmRzYjJKaGJDNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3TzBsQlFWa3NVMEZCVXpzN096dEJRVVZ5UWl4SlFVRk5MRXRCUVVzc1IwRkJSeXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZET3p0QlFVVTFRaXhUUVVGVExFTkJRVU1zVlVGQlZTeEhRVUZITEZsQlFWazdRVUZETDBJc1ZVRkJUU3hEUVVGRExFMUJRVTBzUjBGQlJ5eExRVUZMTEVOQlFVTTdRMEZEZWtJc1EwRkJRenM3UVVGRlJpeE5RVUZOTEVOQlFVTXNUVUZCVFN4SFFVRkhMRTFCUVUwc1EwRkJReXhUUVVGVExFZEJRVWNzVTBGQlV5eERRVUZESWl3aVptbHNaU0k2SW1kc2IySmhiQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEZCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQXFJR0Z6SUhCdmNHMXZkR2x2YmlCbWNtOXRJQ2N1TGk5d2IzQnRiM1JwYjI0bk8xeHVYRzVqYjI1emRDQlZTWEpsWmlBOUlIZHBibVJ2ZHk1dGIzUnBiMjQ3WEc1Y2JuQnZjRzF2ZEdsdmJpNXViME52Ym1ac2FXTjBJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUhkcGJtUnZkeTV0YjNScGIyNGdQU0JWU1hKbFpqdGNibjA3WEc1Y2JuZHBibVJ2ZHk1dGIzUnBiMjRnUFNCM2FXNWtiM2N1Y0c5d2JXOTBhVzl1SUQwZ2NHOXdiVzkwYVc5dU95SmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9sb2FkL2dsb2JhbC5qc1xuICoqIG1vZHVsZSBpZCA9IDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMudHJhbnNmb3JtZXJzID0gZXhwb3J0cy51bml0VHlwZSA9IGV4cG9ydHMuc2hhZG93VHlwZSA9IGV4cG9ydHMuc2NhbGVUeXBlID0gZXhwb3J0cy5yZ2JUeXBlID0gZXhwb3J0cy5weFR5cGUgPSBleHBvcnRzLnBvc2l0aW9uc1R5cGUgPSBleHBvcnRzLmhzbFR5cGUgPSBleHBvcnRzLmhleFR5cGUgPSBleHBvcnRzLmNvbXBsZXhUeXBlID0gZXhwb3J0cy5jb2xvclR5cGUgPSBleHBvcnRzLmF4ZXNUeXBlID0gZXhwb3J0cy5hbmdsZVR5cGUgPSBleHBvcnRzLmFscGhhVHlwZSA9IGV4cG9ydHMuc2V0R2xvYmFsRGlsYXRpb24gPSBleHBvcnRzLmNvbWJpbmVUcmFuc2Zvcm1lcnMgPSBleHBvcnRzLnV0aWxzID0gZXhwb3J0cy5jYWxjID0gZXhwb3J0cy5lYXNpbmcgPSBleHBvcnRzLmJpbmRBZGFwdGVyID0gZXhwb3J0cy5zdmdQYXRoQWRhcHRlciA9IGV4cG9ydHMuc3ZnQWRhcHRlciA9IGV4cG9ydHMuY3NzQWRhcHRlciA9IGV4cG9ydHMuYXR0ckFkYXB0ZXIgPSBleHBvcnRzLmFkYXB0ZXIgPSBleHBvcnRzLnRpbWVsaW5lID0gZXhwb3J0cy5zdGFnZ2VyID0gZXhwb3J0cy5wcm9jZXNzID0gZXhwb3J0cy5pbnB1dCA9IGV4cG9ydHMudHJhY2sgPSBleHBvcnRzLnBoeXNpY3MgPSBleHBvcnRzLnR3ZWVuID0gZXhwb3J0cy5hY3RvciA9IGV4cG9ydHMuQWN0aW9uID0gdW5kZWZpbmVkO1xuXG52YXIgX3V0aWxzMiA9IHJlcXVpcmUoJy4vaW5jL3V0aWxzJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY29tYmluZVRyYW5zZm9ybWVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF91dGlsczIuY29tYmluZVRyYW5zZm9ybWVycztcbiAgfVxufSk7XG5cbnZhciBfdGltZXIgPSByZXF1aXJlKCcuL3Byb2Nlc3MvdGltZXInKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdzZXRHbG9iYWxEaWxhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF90aW1lci5zZXRHbG9iYWxEaWxhdGlvbjtcbiAgfVxufSk7XG5cbnZhciBfQWN0aW9uMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy9BY3Rpb24nKTtcblxudmFyIF9BY3Rpb24zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQWN0aW9uMik7XG5cbnZhciBfQWN0b3IgPSByZXF1aXJlKCcuL2FjdG9yL0FjdG9yJyk7XG5cbnZhciBfQWN0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQWN0b3IpO1xuXG52YXIgX1R3ZWVuID0gcmVxdWlyZSgnLi9hY3Rpb25zL1R3ZWVuJyk7XG5cbnZhciBfVHdlZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVHdlZW4pO1xuXG52YXIgX1BoeXNpY3MgPSByZXF1aXJlKCcuL2FjdGlvbnMvUGh5c2ljcycpO1xuXG52YXIgX1BoeXNpY3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUGh5c2ljcyk7XG5cbnZhciBfVHJhY2sgPSByZXF1aXJlKCcuL2FjdGlvbnMvVHJhY2snKTtcblxudmFyIF9UcmFjazIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UcmFjayk7XG5cbnZhciBfUHJvY2VzcyA9IHJlcXVpcmUoJy4vcHJvY2Vzcy9Qcm9jZXNzJyk7XG5cbnZhciBfUHJvY2VzczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Qcm9jZXNzKTtcblxudmFyIF9JbnB1dCA9IHJlcXVpcmUoJy4vaW5wdXQvSW5wdXQnKTtcblxudmFyIF9JbnB1dDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9JbnB1dCk7XG5cbnZhciBfc3RhZ2dlcjIgPSByZXF1aXJlKCcuL2luYy9zdGFnZ2VyJyk7XG5cbnZhciBfc3RhZ2dlcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdGFnZ2VyMik7XG5cbnZhciBfdGltZWxpbmUyID0gcmVxdWlyZSgnLi9pbmMvdGltZWxpbmUnKTtcblxudmFyIF90aW1lbGluZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90aW1lbGluZTIpO1xuXG52YXIgX2FkYXB0ZXIyID0gcmVxdWlyZSgnLi9hZGFwdGVyL2FkYXB0ZXInKTtcblxudmFyIF9hZGFwdGVyMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FkYXB0ZXIyKTtcblxudmFyIF9hdHRyQWRhcHRlcjIgPSByZXF1aXJlKCcuL2FkYXB0ZXIvYXR0ci1hZGFwdGVyJyk7XG5cbnZhciBfYXR0ckFkYXB0ZXIzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXR0ckFkYXB0ZXIyKTtcblxudmFyIF9jc3NBZGFwdGVyMiA9IHJlcXVpcmUoJy4vYWRhcHRlci9jc3MtYWRhcHRlcicpO1xuXG52YXIgX2Nzc0FkYXB0ZXIzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3NzQWRhcHRlcjIpO1xuXG52YXIgX3N2Z0FkYXB0ZXIyID0gcmVxdWlyZSgnLi9hZGFwdGVyL3N2Zy1hZGFwdGVyJyk7XG5cbnZhciBfc3ZnQWRhcHRlcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdmdBZGFwdGVyMik7XG5cbnZhciBfc3ZnUGF0aEFkYXB0ZXIyID0gcmVxdWlyZSgnLi9hZGFwdGVyL3N2Zy1wYXRoLWFkYXB0ZXInKTtcblxudmFyIF9zdmdQYXRoQWRhcHRlcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdmdQYXRoQWRhcHRlcjIpO1xuXG52YXIgX2JpbmRBZGFwdGVyMiA9IHJlcXVpcmUoJy4vaW5jL2JpbmQtYWRhcHRlcicpO1xuXG52YXIgX2JpbmRBZGFwdGVyMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2JpbmRBZGFwdGVyMik7XG5cbnZhciBfcHJlc2V0RWFzaW5nID0gcmVxdWlyZSgnLi9hY3Rpb25zL2Vhc2luZy9wcmVzZXQtZWFzaW5nJyk7XG5cbnZhciBfcHJlc2V0RWFzaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ByZXNldEVhc2luZyk7XG5cbnZhciBfY2FsYzIgPSByZXF1aXJlKCcuL2luYy9jYWxjJyk7XG5cbnZhciBfY2FsYyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9jYWxjMik7XG5cbnZhciBfdXRpbHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdXRpbHMyKTtcblxudmFyIF9hbHBoYSA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvYWxwaGEnKTtcblxudmFyIF9hbHBoYTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hbHBoYSk7XG5cbnZhciBfYW5nbGUgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL2FuZ2xlJyk7XG5cbnZhciBfYW5nbGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYW5nbGUpO1xuXG52YXIgX2F4ZXMgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL2F4ZXMnKTtcblxudmFyIF9heGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2F4ZXMpO1xuXG52YXIgX2NvbG9yID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy9jb2xvcicpO1xuXG52YXIgX2NvbG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbG9yKTtcblxudmFyIF9jb21wbGV4ID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy9jb21wbGV4Jyk7XG5cbnZhciBfY29tcGxleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21wbGV4KTtcblxudmFyIF9oZXggPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL2hleCcpO1xuXG52YXIgX2hleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oZXgpO1xuXG52YXIgX2hzbCA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvaHNsJyk7XG5cbnZhciBfaHNsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hzbCk7XG5cbnZhciBfcG9zaXRpb25zID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy9wb3NpdGlvbnMnKTtcblxudmFyIF9wb3NpdGlvbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zaXRpb25zKTtcblxudmFyIF9weCA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvcHgnKTtcblxudmFyIF9weDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9weCk7XG5cbnZhciBfcmdiID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy9yZ2InKTtcblxudmFyIF9yZ2IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmdiKTtcblxudmFyIF9zY2FsZSA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvc2NhbGUnKTtcblxudmFyIF9zY2FsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zY2FsZSk7XG5cbnZhciBfc2hhZG93ID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy9zaGFkb3cnKTtcblxudmFyIF9zaGFkb3cyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2hhZG93KTtcblxudmFyIF91bml0ID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy91bml0Jyk7XG5cbnZhciBfdW5pdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91bml0KTtcblxudmFyIF90cmFuc2Zvcm1lcnMyID0gcmVxdWlyZSgnLi9pbmMvdHJhbnNmb3JtZXJzJyk7XG5cbnZhciBfdHJhbnNmb3JtZXJzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3RyYW5zZm9ybWVyczIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLkFjdGlvbiA9IF9BY3Rpb24zLmRlZmF1bHQ7IC8vIEFjdGlvbnNcblxuLy8gUHJvY2Vzc1xuXG4vLyBJbnB1dFxuXG52YXIgYWN0b3IgPSBleHBvcnRzLmFjdG9yID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gIHJldHVybiBuZXcgX0FjdG9yMi5kZWZhdWx0KHByb3BzKTtcbn07XG52YXIgdHdlZW4gPSBleHBvcnRzLnR3ZWVuID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gIHJldHVybiBuZXcgX1R3ZWVuMi5kZWZhdWx0KHByb3BzKTtcbn07XG52YXIgcGh5c2ljcyA9IGV4cG9ydHMucGh5c2ljcyA9IGZ1bmN0aW9uIChwcm9wcykge1xuICByZXR1cm4gbmV3IF9QaHlzaWNzMi5kZWZhdWx0KHByb3BzKTtcbn07XG52YXIgdHJhY2sgPSBleHBvcnRzLnRyYWNrID0gZnVuY3Rpb24gKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseShfVHJhY2syLmRlZmF1bHQsIFtudWxsXS5jb25jYXQoYXJncykpKSgpO1xufTtcbnZhciBpbnB1dCA9IGV4cG9ydHMuaW5wdXQgPSBmdW5jdGlvbiAoKSB7XG4gIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICB9XG5cbiAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoX0lucHV0Mi5kZWZhdWx0LCBbbnVsbF0uY29uY2F0KGFyZ3MpKSkoKTtcbn07XG52YXIgcHJvY2VzcyA9IGV4cG9ydHMucHJvY2VzcyA9IGZ1bmN0aW9uICgpIHtcbiAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjMpLCBfa2V5MyA9IDA7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcbiAgICBhcmdzW19rZXkzXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gIH1cblxuICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseShfUHJvY2VzczIuZGVmYXVsdCwgW251bGxdLmNvbmNhdChhcmdzKSkpKCk7XG59O1xuZXhwb3J0cy5zdGFnZ2VyID0gX3N0YWdnZXIzLmRlZmF1bHQ7XG5leHBvcnRzLnRpbWVsaW5lID0gX3RpbWVsaW5lMy5kZWZhdWx0O1xuXG4vLyBBZGFwdGVyc1xuXG5leHBvcnRzLmFkYXB0ZXIgPSBfYWRhcHRlcjMuZGVmYXVsdDtcbmV4cG9ydHMuYXR0ckFkYXB0ZXIgPSBfYXR0ckFkYXB0ZXIzLmRlZmF1bHQ7XG5leHBvcnRzLmNzc0FkYXB0ZXIgPSBfY3NzQWRhcHRlcjMuZGVmYXVsdDtcbmV4cG9ydHMuc3ZnQWRhcHRlciA9IF9zdmdBZGFwdGVyMy5kZWZhdWx0O1xuZXhwb3J0cy5zdmdQYXRoQWRhcHRlciA9IF9zdmdQYXRoQWRhcHRlcjMuZGVmYXVsdDtcbmV4cG9ydHMuYmluZEFkYXB0ZXIgPSBfYmluZEFkYXB0ZXIzLmRlZmF1bHQ7XG5cbi8vIEVhc2luZ1xuXG5leHBvcnRzLmVhc2luZyA9IF9wcmVzZXRFYXNpbmcyLmRlZmF1bHQ7XG5cbi8vIFV0aWxzXG5cbmV4cG9ydHMuY2FsYyA9IF9jYWxjO1xuZXhwb3J0cy51dGlscyA9IF91dGlscztcblxuLy8gVmFsdWUgdHlwZXNcblxuZXhwb3J0cy5hbHBoYVR5cGUgPSBfYWxwaGEyLmRlZmF1bHQ7XG5leHBvcnRzLmFuZ2xlVHlwZSA9IF9hbmdsZTIuZGVmYXVsdDtcbmV4cG9ydHMuYXhlc1R5cGUgPSBfYXhlczIuZGVmYXVsdDtcbmV4cG9ydHMuY29sb3JUeXBlID0gX2NvbG9yMi5kZWZhdWx0O1xuZXhwb3J0cy5jb21wbGV4VHlwZSA9IF9jb21wbGV4Mi5kZWZhdWx0O1xuZXhwb3J0cy5oZXhUeXBlID0gX2hleDIuZGVmYXVsdDtcbmV4cG9ydHMuaHNsVHlwZSA9IF9oc2wyLmRlZmF1bHQ7XG5leHBvcnRzLnBvc2l0aW9uc1R5cGUgPSBfcG9zaXRpb25zMi5kZWZhdWx0O1xuZXhwb3J0cy5weFR5cGUgPSBfcHgyLmRlZmF1bHQ7XG5leHBvcnRzLnJnYlR5cGUgPSBfcmdiMi5kZWZhdWx0O1xuZXhwb3J0cy5zY2FsZVR5cGUgPSBfc2NhbGUyLmRlZmF1bHQ7XG5leHBvcnRzLnNoYWRvd1R5cGUgPSBfc2hhZG93Mi5kZWZhdWx0O1xuZXhwb3J0cy51bml0VHlwZSA9IF91bml0Mi5kZWZhdWx0O1xuXG4vLyBUcmFuc2Zvcm1lcnNcblxuZXhwb3J0cy50cmFuc2Zvcm1lcnMgPSBfdHJhbnNmb3JtZXJzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl3YjNCdGIzUnBiMjR1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3T3p0dFFrRnRRM0ZDTEcxQ1FVRnRRanM3T3pzN096czdPMnRDUVVNdlFpeHBRa0ZCYVVJN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3TzFGQmJrTnVRaXhOUVVGTk96czdPenM3UVVGWlRpeEpRVUZOTEV0QlFVc3NWMEZCVEN4TFFVRkxMRWRCUVVjc1ZVRkJReXhMUVVGTE8xTkJRVXNzYjBKQlFWVXNTMEZCU3l4RFFVRkRPME5CUVVFc1EwRkJRenRCUVVNeFF5eEpRVUZOTEV0QlFVc3NWMEZCVEN4TFFVRkxMRWRCUVVjc1ZVRkJReXhMUVVGTE8xTkJRVXNzYjBKQlFWVXNTMEZCU3l4RFFVRkRPME5CUVVFc1EwRkJRenRCUVVNeFF5eEpRVUZOTEU5QlFVOHNWMEZCVUN4UFFVRlBMRWRCUVVjc1ZVRkJReXhMUVVGTE8xTkJRVXNzYzBKQlFWa3NTMEZCU3l4RFFVRkRPME5CUVVFc1EwRkJRenRCUVVNNVF5eEpRVUZOTEV0QlFVc3NWMEZCVEN4TFFVRkxMRWRCUVVjN2IwTkJRVWtzU1VGQlNUdEJRVUZLTEZGQlFVazdPenN5UlVGQmEwSXNTVUZCU1R0RFFVRkRMRU5CUVVNN1FVRkRPVU1zU1VGQlRTeExRVUZMTEZkQlFVd3NTMEZCU3l4SFFVRkhPM0ZEUVVGSkxFbEJRVWs3UVVGQlNpeFJRVUZKT3pzN01rVkJRV3RDTEVsQlFVazdRMEZCUXl4RFFVRkRPMEZCUXpsRExFbEJRVTBzVDBGQlR5eFhRVUZRTEU5QlFVOHNSMEZCUnp0eFEwRkJTU3hKUVVGSk8wRkJRVW9zVVVGQlNUczdPelpGUVVGdlFpeEpRVUZKTzBOQlFVTXNRMEZCUXp0UlFVTnNSQ3hQUVVGUE8xRkJRMUFzVVVGQlVUczdPenRSUVVkU0xFOUJRVTg3VVVGRFVDeFhRVUZYTzFGQlExZ3NWVUZCVlR0UlFVTldMRlZCUVZVN1VVRkRWaXhqUVVGak8xRkJRMlFzVjBGQlZ6czdPenRSUVVkWUxFMUJRVTA3T3pzN1VVRkhSQ3hKUVVGSk8xRkJRMG9zUzBGQlN6czdPenRSUVVsV0xGTkJRVk03VVVGRFZDeFRRVUZUTzFGQlExUXNVVUZCVVR0UlFVTlNMRk5CUVZNN1VVRkRWQ3hYUVVGWE8xRkJRMWdzVDBGQlR6dFJRVU5RTEU5QlFVODdVVUZEVUN4aFFVRmhPMUZCUTJJc1RVRkJUVHRSUVVOT0xFOUJRVTg3VVVGRFVDeFRRVUZUTzFGQlExUXNWVUZCVlR0UlFVTldMRkZCUVZFN096czdVVUZIU0N4WlFVRlpJaXdpWm1sc1pTSTZJbkJ2Y0cxdmRHbHZiaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEZCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaTh2SUVGamRHbHZibk5jYm1WNGNHOXlkQ0JCWTNScGIyNGdabkp2YlNBbkxpOWhZM1JwYjI1ekwwRmpkR2x2YmljN1hHNXBiWEJ2Y25RZ1FXTjBiM0lnWm5KdmJTQW5MaTloWTNSdmNpOUJZM1J2Y2ljN1hHNXBiWEJ2Y25RZ1ZIZGxaVzRnWm5KdmJTQW5MaTloWTNScGIyNXpMMVIzWldWdUp6dGNibWx0Y0c5eWRDQlFhSGx6YVdOeklHWnliMjBnSnk0dllXTjBhVzl1Y3k5UWFIbHphV056Snp0Y2JtbHRjRzl5ZENCVWNtRmpheUJtY205dElDY3VMMkZqZEdsdmJuTXZWSEpoWTJzbk8xeHVYRzR2THlCUWNtOWpaWE56WEc1cGJYQnZjblFnVUhKdlkyVnpjeUJtY205dElDY3VMM0J5YjJObGMzTXZVSEp2WTJWemN5YzdYRzVjYmk4dklFbHVjSFYwWEc1cGJYQnZjblFnU1c1d2RYUWdabkp2YlNBbkxpOXBibkIxZEM5SmJuQjFkQ2M3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JoWTNSdmNpQTlJQ2h3Y205d2N5a2dQVDRnYm1WM0lFRmpkRzl5S0hCeWIzQnpLVHRjYm1WNGNHOXlkQ0JqYjI1emRDQjBkMlZsYmlBOUlDaHdjbTl3Y3lrZ1BUNGdibVYzSUZSM1pXVnVLSEJ5YjNCektUdGNibVY0Y0c5eWRDQmpiMjV6ZENCd2FIbHphV056SUQwZ0tIQnliM0J6S1NBOVBpQnVaWGNnVUdoNWMybGpjeWh3Y205d2N5azdYRzVsZUhCdmNuUWdZMjl1YzNRZ2RISmhZMnNnUFNBb0xpNHVZWEpuY3lrZ1BUNGdibVYzSUZSeVlXTnJLQzR1TG1GeVozTXBPMXh1Wlhod2IzSjBJR052Ym5OMElHbHVjSFYwSUQwZ0tDNHVMbUZ5WjNNcElEMCtJRzVsZHlCSmJuQjFkQ2d1TGk1aGNtZHpLVHRjYm1WNGNHOXlkQ0JqYjI1emRDQndjbTlqWlhOeklEMGdLQzR1TG1GeVozTXBJRDArSUc1bGR5QlFjbTlqWlhOektDNHVMbUZ5WjNNcE8xeHVaWGh3YjNKMElITjBZV2RuWlhJZ1puSnZiU0FuTGk5cGJtTXZjM1JoWjJkbGNpYzdYRzVsZUhCdmNuUWdkR2x0Wld4cGJtVWdabkp2YlNBbkxpOXBibU12ZEdsdFpXeHBibVVuTzF4dVhHNHZMeUJCWkdGd2RHVnljMXh1Wlhod2IzSjBJR0ZrWVhCMFpYSWdabkp2YlNBbkxpOWhaR0Z3ZEdWeUwyRmtZWEIwWlhJbk8xeHVaWGh3YjNKMElHRjBkSEpCWkdGd2RHVnlJR1p5YjIwZ0p5NHZZV1JoY0hSbGNpOWhkSFJ5TFdGa1lYQjBaWEluTzF4dVpYaHdiM0owSUdOemMwRmtZWEIwWlhJZ1puSnZiU0FuTGk5aFpHRndkR1Z5TDJOemN5MWhaR0Z3ZEdWeUp6dGNibVY0Y0c5eWRDQnpkbWRCWkdGd2RHVnlJR1p5YjIwZ0p5NHZZV1JoY0hSbGNpOXpkbWN0WVdSaGNIUmxjaWM3WEc1bGVIQnZjblFnYzNablVHRjBhRUZrWVhCMFpYSWdabkp2YlNBbkxpOWhaR0Z3ZEdWeUwzTjJaeTF3WVhSb0xXRmtZWEIwWlhJbk8xeHVaWGh3YjNKMElHSnBibVJCWkdGd2RHVnlJR1p5YjIwZ0p5NHZhVzVqTDJKcGJtUXRZV1JoY0hSbGNpYzdYRzVjYmk4dklFVmhjMmx1WjF4dVpYaHdiM0owSUdWaGMybHVaeUJtY205dElDY3VMMkZqZEdsdmJuTXZaV0Z6YVc1bkwzQnlaWE5sZEMxbFlYTnBibWNuTzF4dVhHNHZMeUJWZEdsc2MxeHVaWGh3YjNKMElDb2dZWE1nWTJGc1l5Qm1jbTl0SUNjdUwybHVZeTlqWVd4akp6dGNibVY0Y0c5eWRDQXFJR0Z6SUhWMGFXeHpMQ0I3SUdOdmJXSnBibVZVY21GdWMyWnZjbTFsY25NZ2ZTQm1jbTl0SUNjdUwybHVZeTkxZEdsc2N5YzdYRzVsZUhCdmNuUWdleUJ6WlhSSGJHOWlZV3hFYVd4aGRHbHZiaUI5SUdaeWIyMGdKeTR2Y0hKdlkyVnpjeTkwYVcxbGNpYzdYRzVjYmk4dklGWmhiSFZsSUhSNWNHVnpYRzVsZUhCdmNuUWdZV3h3YUdGVWVYQmxJR1p5YjIwZ0p5NHZkbUZzZFdVdGRIbHdaWE12WVd4d2FHRW5PMXh1Wlhod2IzSjBJR0Z1WjJ4bFZIbHdaU0JtY205dElDY3VMM1poYkhWbExYUjVjR1Z6TDJGdVoyeGxKenRjYm1WNGNHOXlkQ0JoZUdWelZIbHdaU0JtY205dElDY3VMM1poYkhWbExYUjVjR1Z6TDJGNFpYTW5PMXh1Wlhod2IzSjBJR052Ykc5eVZIbHdaU0JtY205dElDY3VMM1poYkhWbExYUjVjR1Z6TDJOdmJHOXlKenRjYm1WNGNHOXlkQ0JqYjIxd2JHVjRWSGx3WlNCbWNtOXRJQ2N1TDNaaGJIVmxMWFI1Y0dWekwyTnZiWEJzWlhnbk8xeHVaWGh3YjNKMElHaGxlRlI1Y0dVZ1puSnZiU0FuTGk5MllXeDFaUzEwZVhCbGN5OW9aWGduTzF4dVpYaHdiM0owSUdoemJGUjVjR1VnWm5KdmJTQW5MaTkyWVd4MVpTMTBlWEJsY3k5b2Myd25PMXh1Wlhod2IzSjBJSEJ2YzJsMGFXOXVjMVI1Y0dVZ1puSnZiU0FuTGk5MllXeDFaUzEwZVhCbGN5OXdiM05wZEdsdmJuTW5PMXh1Wlhod2IzSjBJSEI0Vkhsd1pTQm1jbTl0SUNjdUwzWmhiSFZsTFhSNWNHVnpMM0I0Snp0Y2JtVjRjRzl5ZENCeVoySlVlWEJsSUdaeWIyMGdKeTR2ZG1Gc2RXVXRkSGx3WlhNdmNtZGlKenRjYm1WNGNHOXlkQ0J6WTJGc1pWUjVjR1VnWm5KdmJTQW5MaTkyWVd4MVpTMTBlWEJsY3k5elkyRnNaU2M3WEc1bGVIQnZjblFnYzJoaFpHOTNWSGx3WlNCbWNtOXRJQ2N1TDNaaGJIVmxMWFI1Y0dWekwzTm9ZV1J2ZHljN1hHNWxlSEJ2Y25RZ2RXNXBkRlI1Y0dVZ1puSnZiU0FuTGk5MllXeDFaUzEwZVhCbGN5OTFibWwwSnp0Y2JseHVMeThnVkhKaGJuTm1iM0p0WlhKelhHNWxlSEJ2Y25RZ0tpQmhjeUIwY21GdWMyWnZjbTFsY25NZ1puSnZiU0FuTGk5cGJtTXZkSEpoYm5ObWIzSnRaWEp6SnpzaVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3BvcG1vdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBDQU1FTF9DQVNFX1BBVFRFUk4gPSAvKFthLXpdKShbQS1aXSkvZztcbnZhciBSRVBMQUNFX1RFTVBMQVRFID0gJyQxLSQyJztcbnZhciBIQVNfUEVSRk9STUFOQ0VfTk9XID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJyAmJiBwZXJmb3JtYW5jZS5ub3c7XG5cbi8qXG4gICAgR2V0IHZhciB0eXBlIGFzIHN0cmluZ1xuICAgIFxuICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgIEByZXR1cm4gW3N0cmluZ106IFJldHVybnMsIGZvciBpbnN0YW5jZSAnT2JqZWN0JyBpZiBbb2JqZWN0IE9iamVjdF1cbiovXG52YXIgdmFyVHlwZSA9IGZ1bmN0aW9uICh2YXJpYWJsZSkge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFyaWFibGUpLnNsaWNlKDgsIC0xKTtcbn07XG5cbi8qXG4gICAgQ29udmVydCBjYW1lbENhc2UgdG8gZGFzaC1jYXNlXG5cbiAgICBAcGFyYW0gW3N0cmluZ11cbiAgICBAcmV0dXJuIFtzdHJpbmddXG4qL1xudmFyIGNhbWVsVG9EYXNoID0gZXhwb3J0cy5jYW1lbFRvRGFzaCA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoQ0FNRUxfQ0FTRV9QQVRURVJOLCBSRVBMQUNFX1RFTVBMQVRFKS50b0xvd2VyQ2FzZSgpO1xufTtcblxuLypcbiAgICBDb21iaW5lIHRyYW5zZm9ybWVycyBpbnRvIG9uZSBmdW5jdGlvbiB0aGF0IGNhbGxzIGV2ZXJ5XG4gICAgdHJhbnNmb3JtZXIgaW4gdGhlIGFycmF5IGFuZCByZXR1cm5zIHRoZSByZXN1bHRcblxuICAgIEBwYXJhbSBbYXJyYXldXG4gICAgQHJldHVybiBbZnVuY3Rpb25dXG4qL1xudmFyIGNvbWJpbmVUcmFuc2Zvcm1lcnMgPSBleHBvcnRzLmNvbWJpbmVUcmFuc2Zvcm1lcnMgPSBmdW5jdGlvbiAodHJhbnNmb3JtZXJzKSB7XG4gICAgdmFyIG51bVRyYW5zZm9ybWVycyA9IHRyYW5zZm9ybWVycy5sZW5ndGg7XG4gICAgdmFyIGkgPSAwO1xuXG4gICAgLypcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgICAgICBAcGFyYW0gW0FjdGlvbl1cbiAgICAgICAgQHJldHVybiBbbnVtYmVyXVxuICAgICovXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2LCBrZXksIGEpIHtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG51bVRyYW5zZm9ybWVyczsgaSsrKSB7XG4gICAgICAgICAgICB2ID0gdHJhbnNmb3JtZXJzW2ldKHYsIGtleSwgYSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdjtcbiAgICB9O1xufTtcblxudmFyIGNyZWF0ZURlbGltaXRlZCA9IGV4cG9ydHMuY3JlYXRlRGVsaW1pdGVkID0gZnVuY3Rpb24gKHZhbHVlcywgdGVybXMsIGRlbGltaXRlciwgY2hvcCkge1xuICAgIHZhciBudW1UZXJtcyA9IHRlcm1zLmxlbmd0aDtcbiAgICB2YXIgY29tYmluZWQgPSAnJztcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtVGVybXM7IGkrKykge1xuICAgICAgICB2YXIgdGVybSA9IHRlcm1zW2ldO1xuICAgICAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KHRlcm0pKSB7XG4gICAgICAgICAgICBjb21iaW5lZCArPSB2YWx1ZXNbdGVybV0gKyBkZWxpbWl0ZXI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY2hvcCkge1xuICAgICAgICBjb21iaW5lZCA9IGNvbWJpbmVkLnNsaWNlKDAsIC1jaG9wKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tYmluZWQ7XG59O1xuXG4vKlxuICAgIENyZWF0ZSBhIGZ1bmN0aW9uIHN0cmluZ1xuXG4gICAgJzIwcHgnLCAndHJhbnNsYXRlJyAtPiAndHJhbnNsYXRlKDIwcHgpJ1xuXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHJldHVybiBbc3RyaW5nXVxuKi9cbnZhciBjcmVhdGVGdW5jdGlvblN0cmluZyA9IGV4cG9ydHMuY3JlYXRlRnVuY3Rpb25TdHJpbmcgPSBmdW5jdGlvbiAodmFsdWUsIHByZWZpeCkge1xuICAgIHJldHVybiBwcmVmaXggKyAnKCcgKyB2YWx1ZSArICcpJztcbn07XG5cbi8qXG4gICAgR2VuZXJhdGUgY3VycmVudCB0aW1lc3RhbXBcbiAgICBcbiAgICBAcmV0dXJuIFt0aW1lc3RhbXBdOiBDdXJyZW50IFVOSVggdGltZXN0YW1wXG4qL1xudmFyIGN1cnJlbnRUaW1lID0gZXhwb3J0cy5jdXJyZW50VGltZSA9IEhBU19QRVJGT1JNQU5DRV9OT1cgPyBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHBlcmZvcm1hbmNlLm5vdygpO1xufSA6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG59O1xuXG4vKlxuICAgIFNwbGl0IGNvbG9yIHN0cmluZyBpbnRvIG1hcCBvZiBjb2xvciBwcm9wZXJ0aWVzXG5cbiAgICBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMClcIiwgW1wiUmVkXCIsICdHcmVlblwiLCBcIkJsdWVcIiwgXCJBbHBoYVwiXVxuXG4gICAgeyBSZWQ6IDI1NS4uLiB9XG4qL1xudmFyIGdldENvbG9yVmFsdWVzID0gZXhwb3J0cy5nZXRDb2xvclZhbHVlcyA9IGZ1bmN0aW9uICh2YWx1ZSwgY29sb3JUZXJtcykge1xuICAgIHZhciBudW1Db2xvclRlcm1zID0gY29sb3JUZXJtcy5sZW5ndGg7XG4gICAgdmFyIGNvbG9yVmFsdWVzID0ge307XG4gICAgdmFyIGNvbG9ycyA9IHNwbGl0Q29tbWFEZWxpbWl0ZWQoZ2V0VmFsdWVGcm9tRnVuY3Rpb25TdHJpbmcodmFsdWUpKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtQ29sb3JUZXJtczsgaSsrKSB7XG4gICAgICAgIGNvbG9yVmFsdWVzW2NvbG9yVGVybXNbaV1dID0gY29sb3JzW2ldICE9PSB1bmRlZmluZWQgPyBjb2xvcnNbaV0gOiAxO1xuICAgIH1cblxuICAgIHJldHVybiBjb2xvclZhbHVlcztcbn07XG5cbi8qXG4gICAgR2V0IHZhbHVlIGZyb20gZnVuY3Rpb24gc3RyaW5nXG5cbiAgICBcInRyYW5zbGF0ZVgoMjBweClcIiAtPiBcIjIwcHhcIlxuKi9cbnZhciBnZXRWYWx1ZUZyb21GdW5jdGlvblN0cmluZyA9IGV4cG9ydHMuZ2V0VmFsdWVGcm9tRnVuY3Rpb25TdHJpbmcgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUuc3Vic3RyaW5nKHZhbHVlLmluZGV4T2YoJygnKSArIDEsIHZhbHVlLmxhc3RJbmRleE9mKCcpJykpO1xufTtcblxuLypcbiAgICBDaGVjayBpZiB0d28gb2JqZWN0cyBoYXZlIGNoYW5nZWQgZnJvbSBlYWNoIG90aGVyXG4gICAgXG4gICAgQHBhcmFtIFtvYmplY3RdOiBJbnB1dCBBXG4gICAgQHBhcmFtIFtvYmplY3RdOiBJbnB1dCBCXG4gICAgQHJldHVybiBbYm9vbGVhbl06IFRydWUgaWYgZGlmZmVyZW50XG4qL1xudmFyIGhhc0NoYW5nZWQgPSBleHBvcnRzLmhhc0NoYW5nZWQgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgIHZhciBjaGFuZ2VkID0gZmFsc2U7XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gYSkge1xuICAgICAgICBpZiAoYS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICBpZiAoaGFzUHJvcGVydHkoYiwga2V5KSkge1xuICAgICAgICAgICAgICAgIGlmIChhW2tleV0gIT09IGJba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoYW5nZWQ7XG59O1xuXG4vKlxuICAgIENoZWNrIGlmIG9iamVjdCBoYXMgcHJvcGVydHkgYW5kIGl0IGlzbid0IHVuZGVmaW5lZFxuXG4gICAgQHBhcmFtIFtvYmplY3RdXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHJldHVybiBbYm9vbGVhbl1cbiovXG52YXIgaGFzUHJvcGVydHkgPSBleHBvcnRzLmhhc1Byb3BlcnR5ID0gZnVuY3Rpb24gKG9iamVjdCwgcHJvcGVydHlOYW1lKSB7XG4gICAgcmV0dXJuIG9iamVjdC5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eU5hbWUpICYmIG9iamVjdFtwcm9wZXJ0eU5hbWVdICE9PSB1bmRlZmluZWQ7XG59O1xuXG4vKlxuICAgIElzIHV0aWxzIHZhciBhbiBhcnJheSA/IFxuICAgIFxuICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdXRpbHMudmFyVHlwZSA9PT0gJ0FycmF5J1xuKi9cbnZhciBpc0FycmF5ID0gZXhwb3J0cy5pc0FycmF5ID0gZnVuY3Rpb24gKGFycikge1xuICAgIHJldHVybiB2YXJUeXBlKGFycikgPT09ICdBcnJheSc7XG59O1xuXG4vKlxuICAgIElzIHV0aWxzIHZhciBhIGZ1bmN0aW9uID8gXG4gICAgXG4gICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB1dGlscy52YXJUeXBlID09PSAnRnVuY3Rpb24nXG4qL1xudmFyIGlzRnVuYyA9IGV4cG9ydHMuaXNGdW5jID0gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB2YXJUeXBlKG9iaikgPT09ICdGdW5jdGlvbic7XG59O1xuXG4vKlxuICAgIElzIHV0aWxzIHZhciBhIG51bWJlcj9cbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiA9PT0gJ251bWJlcidcbiovXG52YXIgaXNOdW0gPSBleHBvcnRzLmlzTnVtID0gZnVuY3Rpb24gKG51bSkge1xuICAgIHJldHVybiB0eXBlb2YgbnVtID09PSAnbnVtYmVyJztcbn07XG5cbi8qXG4gICAgSXMgdXRpbHMgdmFyIGFuIG9iamVjdD9cbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiA9PT0gJ29iamVjdCdcbiovXG52YXIgaXNPYmogPSBleHBvcnRzLmlzT2JqID0gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jztcbn07XG5cbi8qXG4gICAgSXMgdXRpbHMgYSByZWxhdGl2ZSB2YWx1ZSBhc3NpZ25tZW50P1xuICAgIFxuICAgIEBwYXJhbSBbc3RyaW5nXTogVmFyaWFibGUgdG8gdGVzdFxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBJZiB1dGlscyBsb29rcyBsaWtlIGEgcmVsYXRpdmUgdmFsdWUgYXNzaWdubWVudFxuKi9cbnZhciBpc1JlbGF0aXZlVmFsdWUgPSBleHBvcnRzLmlzUmVsYXRpdmVWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mICYmIHZhbHVlLmluZGV4T2YoJz0nKSA+IDAgPyB0cnVlIDogZmFsc2U7XG59O1xuXG4vKlxuICAgIElzIHV0aWxzIHZhciBhIHN0cmluZyA/IFxuICAgIFxuICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mIHN0ciA9PT0gJ3N0cmluZydcbiovXG52YXIgaXNTdHJpbmcgPSBleHBvcnRzLmlzU3RyaW5nID0gZnVuY3Rpb24gKHN0cikge1xuICAgIHJldHVybiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJztcbn07XG5cbi8qXG4gICAgQHBhcmFtIFtzdHJpbmcgfHwgTm9kZUxpc3RdOlxuICAgICAgICBJZiBzdHJpbmcsIHRyZWF0ZWQgYXMgc2VsZWN0b3IuXG4gICAgICAgIElmIG5vdCwgdHJlYXRlZCBhcyBwcmVleGlzdGluZyBOb2RlTGlzdFxuXG4gICAgQHJldHVybiBbQXJyYXldXG4qL1xudmFyIHNlbGVjdERvbSA9IGV4cG9ydHMuc2VsZWN0RG9tID0gZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgdmFyIG5vZGVzID0gdHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpIDogc2VsZWN0b3I7XG4gICAgcmV0dXJuIG5vZGVzLmxlbmd0aCA/IFtdLnNsaWNlLmNhbGwobm9kZXMpIDogW10ucHVzaChub2Rlcyk7XG59O1xuXG4vKlxuICAgIFNwbGl0IGNvbW1hLWRlbGltaXRlZCBzdHJpbmdcblxuICAgIFwiZm9vLGJhclwiIC0+IFtcImZvb1wiLCBcImJhclwiXVxuXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHJldHVybiBbYXJyYXldXG4qL1xudmFyIHNwbGl0Q29tbWFEZWxpbWl0ZWQgPSBleHBvcnRzLnNwbGl0Q29tbWFEZWxpbWl0ZWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodmFsdWUpID8gdmFsdWUuc3BsaXQoLyxcXHMqLykgOiBbdmFsdWVdO1xufTtcblxuLypcbiAgICBTcGxpdCBzcGFjZS1kZWxpbWl0ZWQgc3RyaW5nXG5cbiAgICBcImZvbyBiYXJcIiAtPiBbXCJmb29cIiwgXCJiYXJcIl1cblxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEByZXR1cm4gW2FycmF5XVxuKi9cbnZhciBzcGxpdFNwYWNlRGVsaW1pdGVkID0gZXhwb3J0cy5zcGxpdFNwYWNlRGVsaW1pdGVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHZhbHVlKSA/IHZhbHVlLnNwbGl0KCcgJykgOiBbdmFsdWVdO1xufTtcblxuLypcbiAgICBDb252ZXJ0IG51bWJlciB0byB4IGRlY2ltYWwgcGxhY2VzXG5cbiAgICBAcGFyYW0gW251bWJlcl1cbiAgICBAcGFyYW0gW251bWJlcl1cbiAgICBAcmV0dXJuIFtudW1iZXJdXG4qL1xudmFyIHRvRGVjaW1hbCA9IGV4cG9ydHMudG9EZWNpbWFsID0gZnVuY3Rpb24gKG51bSkge1xuICAgIHZhciBwcmVjaXNpb24gPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyAyIDogYXJndW1lbnRzWzFdO1xuXG4gICAgcHJlY2lzaW9uID0gTWF0aC5wb3coMTAsIHByZWNpc2lvbik7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobnVtICogcHJlY2lzaW9uKSAvIHByZWNpc2lvbjtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12ZFhScGJITXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3TzBGQlFVRXNTVUZCVFN4clFrRkJhMElzUjBGQlJ5eHBRa0ZCYVVJc1EwRkJRenRCUVVNM1F5eEpRVUZOTEdkQ1FVRm5RaXhIUVVGSExFOUJRVThzUTBGQlF6dEJRVU5xUXl4SlFVRk5MRzFDUVVGdFFpeEhRVUZKTEU5QlFVOHNWMEZCVnl4TFFVRkxMRmRCUVZjc1NVRkJTU3hYUVVGWExFTkJRVU1zUjBGQlJ5eEJRVUZET3pzN096czdPenRCUVVGRExFRkJVWEJHTEVsQlFVMHNUMEZCVHl4SFFVRkhMRlZCUVVFc1VVRkJVVHRYUVVGSkxFMUJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8wTkJRVUU3T3pzN096czdPMEZCUVVNc1FVRlJNMFVzU1VGQlRTeFhRVUZYTEZkQlFWZ3NWMEZCVnl4SFFVRkhMRlZCUVVNc1RVRkJUVHRYUVVGTExFMUJRVTBzUTBGQlF5eFBRVUZQTEVOQlFVTXNhMEpCUVd0Q0xFVkJRVVVzWjBKQlFXZENMRU5CUVVNc1EwRkJReXhYUVVGWExFVkJRVVU3UTBGQlFUczdPenM3T3pzN08wRkJRVU1zUVVGVGJrY3NTVUZCVFN4dFFrRkJiVUlzVjBGQmJrSXNiVUpCUVcxQ0xFZEJRVWNzVlVGQlF5eFpRVUZaTEVWQlFVczdRVUZEYWtRc1VVRkJUU3hsUVVGbExFZEJRVWNzV1VGQldTeERRVUZETEUxQlFVMHNRMEZCUXp0QlFVTTFReXhSUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZET3pzN096czdPenRCUVVGRExFRkJVVllzVjBGQlR5eFZRVUZETEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1EwRkJReXhGUVVGTE8wRkJRMnhDTEdGQlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzWlVGQlpTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMEZCUTJ4RExHRkJRVU1zUjBGQlJ5eFpRVUZaTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFZEJRVWNzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0VFFVTnNRenM3UVVGRlJDeGxRVUZQTEVOQlFVTXNRMEZCUXp0TFFVTmFMRU5CUVVNN1EwRkRUQ3hEUVVGRE96dEJRVVZMTEVsQlFVMHNaVUZCWlN4WFFVRm1MR1ZCUVdVc1IwRkJSeXhWUVVGRExFMUJRVTBzUlVGQlJTeExRVUZMTEVWQlFVVXNVMEZCVXl4RlFVRkZMRWxCUVVrc1JVRkJTenRCUVVNdlJDeFJRVUZOTEZGQlFWRXNSMEZCUnl4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRE8wRkJRemxDTEZGQlFVa3NVVUZCVVN4SFFVRkhMRVZCUVVVc1EwRkJRenM3UVVGRmJFSXNVMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEZGQlFWRXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRCUVVNdlFpeFpRVUZOTEVsQlFVa3NSMEZCUnl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRGRFSXNXVUZCU1N4TlFVRk5MRU5CUVVNc1kwRkJZeXhEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTzBGQlF6ZENMRzlDUVVGUkxFbEJRVWtzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRk5CUVZNc1EwRkJRenRUUVVONFF6dExRVU5LT3p0QlFVVkVMRkZCUVVrc1NVRkJTU3hGUVVGRk8wRkJRMDRzWjBKQlFWRXNSMEZCUnl4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMHRCUTNaRE96dEJRVVZFTEZkQlFVOHNVVUZCVVN4RFFVRkRPME5CUTI1Q096czdPenM3T3pzN096dEJRVUZETEVGQlYwc3NTVUZCVFN4dlFrRkJiMElzVjBGQmNFSXNiMEpCUVc5Q0xFZEJRVWNzVlVGQlF5eExRVUZMTEVWQlFVVXNUVUZCVFR0WFFVRlJMRTFCUVUwc1UwRkJTU3hMUVVGTE8wTkJRVWM3T3pzN096czdRVUZCUXl4QlFVOTBSU3hKUVVGTkxGZEJRVmNzVjBGQldDeFhRVUZYTEVkQlFVY3NiVUpCUVcxQ0xFZEJRVWM3VjBGQlRTeFhRVUZYTEVOQlFVTXNSMEZCUnl4RlFVRkZPME5CUVVFc1IwRkJSenRYUVVGTkxFbEJRVWtzU1VGQlNTeEZRVUZGTEVOQlFVTXNUMEZCVHl4RlFVRkZPME5CUVVFN096czdPenM3T3p0QlFVRkRMRUZCVXk5R0xFbEJRVTBzWTBGQll5eFhRVUZrTEdOQlFXTXNSMEZCUnl4VlFVRkRMRXRCUVVzc1JVRkJSU3hWUVVGVkxFVkJRVXM3UVVGRGFrUXNVVUZCVFN4aFFVRmhMRWRCUVVjc1ZVRkJWU3hEUVVGRExFMUJRVTBzUTBGQlF6dEJRVU40UXl4UlFVRk5MRmRCUVZjc1IwRkJSeXhGUVVGRkxFTkJRVU03UVVGRGRrSXNVVUZCVFN4TlFVRk5MRWRCUVVjc2JVSkJRVzFDTEVOQlFVTXNNRUpCUVRCQ0xFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXpzN1FVRkZkRVVzVTBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExHRkJRV0VzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0QlFVTndReXh0UWtGQlZ5eERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFRkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRk5CUVZNc1IwRkJTU3hOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMHRCUXpGRk96dEJRVVZFTEZkQlFVOHNWMEZCVnl4RFFVRkRPME5CUTNSQ096czdPenM3TzBGQlFVTXNRVUZQU3l4SlFVRk5MREJDUVVFd1FpeFhRVUV4UWl3d1FrRkJNRUlzUjBGQlJ5eFZRVUZETEV0QlFVczdWMEZCU3l4TFFVRkxMRU5CUVVNc1UwRkJVeXhEUVVGRExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFdEJRVXNzUTBGQlF5eFhRVUZYTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1EwRkJRVHM3T3pzN096czdPMEZCUVVNc1FVRlRPVWNzU1VGQlRTeFZRVUZWTEZkQlFWWXNWVUZCVlN4SFFVRkhMRlZCUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlN6dEJRVU5vUXl4UlFVRkpMRTlCUVU4c1IwRkJSeXhMUVVGTExFTkJRVU03TzBGQlJYQkNMRk5CUVVzc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF5eEZRVUZGTzBGQlEyWXNXVUZCU1N4RFFVRkRMRU5CUVVNc1kwRkJZeXhEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTzBGQlEzWkNMR2RDUVVGSkxGZEJRVmNzUTBGQlF5eERRVUZETEVWQlFVVXNSMEZCUnl4RFFVRkRMRVZCUVVVN1FVRkRja0lzYjBKQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlR0QlFVTnVRaXd5UWtGQlR5eEhRVUZITEVsQlFVa3NRMEZCUXp0cFFrRkRiRUk3WVVGRFNpeE5RVUZOTzBGQlEwZ3NkVUpCUVU4c1IwRkJSeXhKUVVGSkxFTkJRVU03WVVGRGJFSTdVMEZEU2p0TFFVTktPenRCUVVWRUxGZEJRVThzVDBGQlR5eERRVUZETzBOQlEyeENPenM3T3pzN096czdRVUZCUXl4QlFWTkxMRWxCUVUwc1YwRkJWeXhYUVVGWUxGZEJRVmNzUjBGQlJ5eFZRVUZETEUxQlFVMHNSVUZCUlN4WlFVRlpPMWRCUVVzc1RVRkJUU3hEUVVGRExHTkJRV01zUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4TlFVRk5MRU5CUVVNc1dVRkJXU3hEUVVGRExFdEJRVXNzVTBGQlV6dERRVUZCT3pzN096czdPenRCUVVGRExFRkJVWGhJTEVsQlFVMHNUMEZCVHl4WFFVRlFMRTlCUVU4c1IwRkJSeXhWUVVGRExFZEJRVWM3VjBGQlN5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1QwRkJUenREUVVGQk96czdPenM3T3p0QlFVRkRMRUZCVVd4RUxFbEJRVTBzVFVGQlRTeFhRVUZPTEUxQlFVMHNSMEZCUnl4VlFVRkRMRWRCUVVjN1YwRkJTeXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NWVUZCVlR0RFFVRkJPenM3T3pzN096dEJRVUZETEVGQlVYQkVMRWxCUVUwc1MwRkJTeXhYUVVGTUxFdEJRVXNzUjBGQlJ5eFZRVUZETEVkQlFVYzdWMEZCU3l4UFFVRlBMRWRCUVVjc1MwRkJTeXhSUVVGUk8wTkJRVUU3T3pzN096czdPMEZCUVVNc1FVRlJMME1zU1VGQlRTeExRVUZMTEZkQlFVd3NTMEZCU3l4SFFVRkhMRlZCUVVNc1IwRkJSenRYUVVGTExFOUJRVThzUjBGQlJ5eExRVUZMTEZGQlFWRTdRMEZCUVRzN096czdPenM3UVVGQlF5eEJRVkV2UXl4SlFVRk5MR1ZCUVdVc1YwRkJaaXhsUVVGbExFZEJRVWNzVlVGQlF5eExRVUZMTzFkQlFVc3NRVUZCUXl4TFFVRkxMRWxCUVVrc1MwRkJTeXhEUVVGRExFOUJRVThzU1VGQlNTeExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlNTeEpRVUZKTEVkQlFVY3NTMEZCU3p0RFFVRkJPenM3T3pzN096dEJRVUZETEVGQlVYSkhMRWxCUVUwc1VVRkJVU3hYUVVGU0xGRkJRVkVzUjBGQlJ5eFZRVUZETEVkQlFVYzdWMEZCU3l4UFFVRlBMRWRCUVVjc1MwRkJTeXhSUVVGUk8wTkJRVUU3T3pzN096czdPenRCUVVGRExFRkJVMnhFTEVsQlFVMHNVMEZCVXl4WFFVRlVMRk5CUVZNc1IwRkJSeXhWUVVGRExGRkJRVkVzUlVGQlN6dEJRVU51UXl4UlFVRk5MRXRCUVVzc1IwRkJSeXhCUVVGRExFOUJRVThzVVVGQlVTeExRVUZMTEZGQlFWRXNSMEZCU1N4UlFVRlJMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWRCUVVjc1VVRkJVU3hEUVVGRE8wRkJRemxHTEZkQlFVOHNRVUZCUXl4TFFVRkxMRU5CUVVNc1RVRkJUU3hIUVVGSkxFVkJRVVVzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1EwRkRha1U3T3pzN096czdPenM3UVVGQlF5eEJRVlZMTEVsQlFVMHNiVUpCUVcxQ0xGZEJRVzVDTEcxQ1FVRnRRaXhIUVVGSExGVkJRVU1zUzBGQlN6dFhRVUZMTEZGQlFWRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRE8wTkJRVUU3T3pzN096czdPenM3UVVGQlF5eEJRVlYyUml4SlFVRk5MRzFDUVVGdFFpeFhRVUZ1UWl4dFFrRkJiVUlzUjBGQlJ5eFZRVUZETEV0QlFVczdWMEZCU3l4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUzBGQlN5eERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF6dERRVUZCT3pzN096czdPenM3UVVGQlF5eEJRVk53Uml4SlFVRk5MRk5CUVZNc1YwRkJWQ3hUUVVGVExFZEJRVWNzVlVGQlF5eEhRVUZITEVWQlFXOUNPMUZCUVd4Q0xGTkJRVk1zZVVSQlFVY3NRMEZCUXpzN1FVRkRlRU1zWVVGQlV5eFpRVUZITEVWQlFVVXNSVUZCU1N4VFFVRlRMRU5CUVVFc1EwRkJRenRCUVVNMVFpeFhRVUZQTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhIUVVGSExGTkJRVk1zUTBGQlF5eEhRVUZITEZOQlFWTXNRMEZCUXp0RFFVTnNSQ3hEUVVGRElpd2labWxzWlNJNkluVjBhV3h6TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMFVHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpWTI5dWMzUWdRMEZOUlV4ZlEwRlRSVjlRUVZSVVJWSk9JRDBnTHloYllTMTZYU2tvVzBFdFdsMHBMMmM3WEc1amIyNXpkQ0JTUlZCTVFVTkZYMVJGVFZCTVFWUkZJRDBnSnlReExTUXlKenRjYm1OdmJuTjBJRWhCVTE5UVJWSkdUMUpOUVU1RFJWOU9UMWNnUFNBb2RIbHdaVzltSUhCbGNtWnZjbTFoYm1ObElDRTlQU0FuZFc1a1pXWnBibVZrSnlBbUppQndaWEptYjNKdFlXNWpaUzV1YjNjcE8xeHVYRzR2S2x4dUlDQWdJRWRsZENCMllYSWdkSGx3WlNCaGN5QnpkSEpwYm1kY2JpQWdJQ0JjYmlBZ0lDQkFjR0Z5WVcwNklGWmhjbWxoWW14bElIUnZJSFJsYzNSY2JpQWdJQ0JBY21WMGRYSnVJRnR6ZEhKcGJtZGRPaUJTWlhSMWNtNXpMQ0JtYjNJZ2FXNXpkR0Z1WTJVZ0owOWlhbVZqZENjZ2FXWWdXMjlpYW1WamRDQlBZbXBsWTNSZFhHNHFMMXh1WTI5dWMzUWdkbUZ5Vkhsd1pTQTlJSFpoY21saFlteGxJRDArSUU5aWFtVmpkQzV3Y205MGIzUjVjR1V1ZEc5VGRISnBibWN1WTJGc2JDaDJZWEpwWVdKc1pTa3VjMnhwWTJVb09Dd2dMVEVwTzF4dVhHNHZLbHh1SUNBZ0lFTnZiblpsY25RZ1kyRnRaV3hEWVhObElIUnZJR1JoYzJndFkyRnpaVnh1WEc0Z0lDQWdRSEJoY21GdElGdHpkSEpwYm1kZFhHNGdJQ0FnUUhKbGRIVnliaUJiYzNSeWFXNW5YVnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JqWVcxbGJGUnZSR0Z6YUNBOUlDaHpkSEpwYm1jcElEMCtJSE4wY21sdVp5NXlaWEJzWVdObEtFTkJUVVZNWDBOQlUwVmZVRUZVVkVWU1Rpd2dVa1ZRVEVGRFJWOVVSVTFRVEVGVVJTa3VkRzlNYjNkbGNrTmhjMlVvS1R0Y2JseHVMeXBjYmlBZ0lDQkRiMjFpYVc1bElIUnlZVzV6Wm05eWJXVnljeUJwYm5SdklHOXVaU0JtZFc1amRHbHZiaUIwYUdGMElHTmhiR3h6SUdWMlpYSjVYRzRnSUNBZ2RISmhibk5tYjNKdFpYSWdhVzRnZEdobElHRnljbUY1SUdGdVpDQnlaWFIxY201eklIUm9aU0J5WlhOMWJIUmNibHh1SUNBZ0lFQndZWEpoYlNCYllYSnlZWGxkWEc0Z0lDQWdRSEpsZEhWeWJpQmJablZ1WTNScGIyNWRYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR052YldKcGJtVlVjbUZ1YzJadmNtMWxjbk1nUFNBb2RISmhibk5tYjNKdFpYSnpLU0E5UGlCN1hHNGdJQ0FnWTI5dWMzUWdiblZ0VkhKaGJuTm1iM0p0WlhKeklEMGdkSEpoYm5ObWIzSnRaWEp6TG14bGJtZDBhRHRjYmlBZ0lDQnNaWFFnYVNBOUlEQTdYRzVjYmlBZ0lDQXZLbHh1SUNBZ0lDQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMWNiaUFnSUNBZ0lDQWdRSEJoY21GdElGdHpkSEpwYm1kZFhHNGdJQ0FnSUNBZ0lFQndZWEpoYlNCYlFXTjBhVzl1WFZ4dUlDQWdJQ0FnSUNCQWNtVjBkWEp1SUZ0dWRXMWlaWEpkWEc0Z0lDQWdLaTljYmlBZ0lDQnlaWFIxY200Z0tIWXNJR3RsZVN3Z1lTa2dQVDRnZTF4dUlDQWdJQ0FnSUNCbWIzSWdLR2tnUFNBd095QnBJRHdnYm5WdFZISmhibk5tYjNKdFpYSnpPeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhZZ1BTQjBjbUZ1YzJadmNtMWxjbk5iYVYwb2Rpd2dhMlY1TENCaEtUdGNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIyTzF4dUlDQWdJSDA3WEc1OU8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ1kzSmxZWFJsUkdWc2FXMXBkR1ZrSUQwZ0tIWmhiSFZsY3l3Z2RHVnliWE1zSUdSbGJHbHRhWFJsY2l3Z1kyaHZjQ2tnUFQ0Z2UxeHVJQ0FnSUdOdmJuTjBJRzUxYlZSbGNtMXpJRDBnZEdWeWJYTXViR1Z1WjNSb08xeHVJQ0FnSUd4bGRDQmpiMjFpYVc1bFpDQTlJQ2NuTzF4dVhHNGdJQ0FnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCdWRXMVVaWEp0Y3pzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJSFJsY20wZ1BTQjBaWEp0YzF0cFhUdGNiaUFnSUNBZ0lDQWdhV1lnS0haaGJIVmxjeTVvWVhOUGQyNVFjbTl3WlhKMGVTaDBaWEp0S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5dFltbHVaV1FnS3owZ2RtRnNkV1Z6VzNSbGNtMWRJQ3NnWkdWc2FXMXBkR1Z5TzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnYVdZZ0tHTm9iM0FwSUh0Y2JpQWdJQ0FnSUNBZ1kyOXRZbWx1WldRZ1BTQmpiMjFpYVc1bFpDNXpiR2xqWlNnd0xDQXRZMmh2Y0NrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WMGRYSnVJR052YldKcGJtVmtPMXh1ZlR0Y2JseHVMeXBjYmlBZ0lDQkRjbVZoZEdVZ1lTQm1kVzVqZEdsdmJpQnpkSEpwYm1kY2JseHVJQ0FnSUNjeU1IQjRKeXdnSjNSeVlXNXpiR0YwWlNjZ0xUNGdKM1J5WVc1emJHRjBaU2d5TUhCNEtTZGNibHh1SUNBZ0lFQndZWEpoYlNCYmMzUnlhVzVuWFZ4dUlDQWdJRUJ3WVhKaGJTQmJjM1J5YVc1blhWeHVJQ0FnSUVCeVpYUjFjbTRnVzNOMGNtbHVaMTFjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnWTNKbFlYUmxSblZ1WTNScGIyNVRkSEpwYm1jZ1BTQW9kbUZzZFdVc0lIQnlaV1pwZUNrZ1BUNGdZQ1I3Y0hKbFptbDRmU2drZTNaaGJIVmxmU2xnTzF4dVhHNHZLbHh1SUNBZ0lFZGxibVZ5WVhSbElHTjFjbkpsYm5RZ2RHbHRaWE4wWVcxd1hHNGdJQ0FnWEc0Z0lDQWdRSEpsZEhWeWJpQmJkR2x0WlhOMFlXMXdYVG9nUTNWeWNtVnVkQ0JWVGtsWUlIUnBiV1Z6ZEdGdGNGeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQmpkWEp5Wlc1MFZHbHRaU0E5SUVoQlUxOVFSVkpHVDFKTlFVNURSVjlPVDFjZ1B5QW9LU0E5UGlCd1pYSm1iM0p0WVc1alpTNXViM2NvS1NBNklDZ3BJRDArSUc1bGR5QkVZWFJsS0NrdVoyVjBWR2x0WlNncE8xeHVYRzR2S2x4dUlDQWdJRk53YkdsMElHTnZiRzl5SUhOMGNtbHVaeUJwYm5SdklHMWhjQ0J2WmlCamIyeHZjaUJ3Y205d1pYSjBhV1Z6WEc1Y2JpQWdJQ0JjSW5KblltRW9NalUxTENBeU5UVXNJREkxTlN3Z01DbGNJaXdnVzF3aVVtVmtYQ0lzSUNkSGNtVmxibHdpTENCY0lrSnNkV1ZjSWl3Z1hDSkJiSEJvWVZ3aVhWeHVYRzRnSUNBZ2V5QlNaV1E2SURJMU5TNHVMaUI5WEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdkbGRFTnZiRzl5Vm1Gc2RXVnpJRDBnS0haaGJIVmxMQ0JqYjJ4dmNsUmxjbTF6S1NBOVBpQjdYRzRnSUNBZ1kyOXVjM1FnYm5WdFEyOXNiM0pVWlhKdGN5QTlJR052Ykc5eVZHVnliWE11YkdWdVozUm9PMXh1SUNBZ0lHTnZibk4wSUdOdmJHOXlWbUZzZFdWeklEMGdlMzA3WEc0Z0lDQWdZMjl1YzNRZ1kyOXNiM0p6SUQwZ2MzQnNhWFJEYjIxdFlVUmxiR2x0YVhSbFpDaG5aWFJXWVd4MVpVWnliMjFHZFc1amRHbHZibE4wY21sdVp5aDJZV3gxWlNrcE8xeHVYRzRnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQnVkVzFEYjJ4dmNsUmxjbTF6T3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnWTI5c2IzSldZV3gxWlhOYlkyOXNiM0pVWlhKdGMxdHBYVjBnUFNBb1kyOXNiM0p6VzJsZElDRTlQU0IxYm1SbFptbHVaV1FwSUQ4Z1kyOXNiM0p6VzJsZElEb2dNVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnlaWFIxY200Z1kyOXNiM0pXWVd4MVpYTTdYRzU5TzF4dVhHNHZLbHh1SUNBZ0lFZGxkQ0IyWVd4MVpTQm1jbTl0SUdaMWJtTjBhVzl1SUhOMGNtbHVaMXh1WEc0Z0lDQWdYQ0owY21GdWMyeGhkR1ZZS0RJd2NIZ3BYQ0lnTFQ0Z1hDSXlNSEI0WENKY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ1oyVjBWbUZzZFdWR2NtOXRSblZ1WTNScGIyNVRkSEpwYm1jZ1BTQW9kbUZzZFdVcElEMCtJSFpoYkhWbExuTjFZbk4wY21sdVp5aDJZV3gxWlM1cGJtUmxlRTltS0Njb0p5a2dLeUF4TENCMllXeDFaUzVzWVhOMFNXNWtaWGhQWmlnbktTY3BLVHRjYmx4dUx5cGNiaUFnSUNCRGFHVmpheUJwWmlCMGQyOGdiMkpxWldOMGN5Qm9ZWFpsSUdOb1lXNW5aV1FnWm5KdmJTQmxZV05vSUc5MGFHVnlYRzRnSUNBZ1hHNGdJQ0FnUUhCaGNtRnRJRnR2WW1wbFkzUmRPaUJKYm5CMWRDQkJYRzRnSUNBZ1FIQmhjbUZ0SUZ0dlltcGxZM1JkT2lCSmJuQjFkQ0JDWEc0Z0lDQWdRSEpsZEhWeWJpQmJZbTl2YkdWaGJsMDZJRlJ5ZFdVZ2FXWWdaR2xtWm1WeVpXNTBYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR2hoYzBOb1lXNW5aV1FnUFNBb1lTd2dZaWtnUFQ0Z2UxeHVJQ0FnSUd4bGRDQmphR0Z1WjJWa0lEMGdabUZzYzJVN1hHNWNiaUFnSUNCbWIzSWdLR3hsZENCclpYa2dhVzRnWVNrZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvWVM1b1lYTlBkMjVRY205d1pYSjBlU2hyWlhrcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9hR0Z6VUhKdmNHVnlkSGtvWWl3Z2EyVjVLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDaGhXMnRsZVYwZ0lUMDlJR0piYTJWNVhTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamFHRnVaMlZrSUQwZ2RISjFaVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTm9ZVzVuWldRZ1BTQjBjblZsTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjbVYwZFhKdUlHTm9ZVzVuWldRN1hHNTlPMXh1WEc0dktseHVJQ0FnSUVOb1pXTnJJR2xtSUc5aWFtVmpkQ0JvWVhNZ2NISnZjR1Z5ZEhrZ1lXNWtJR2wwSUdsemJpZDBJSFZ1WkdWbWFXNWxaRnh1WEc0Z0lDQWdRSEJoY21GdElGdHZZbXBsWTNSZFhHNGdJQ0FnUUhCaGNtRnRJRnR6ZEhKcGJtZGRYRzRnSUNBZ1FISmxkSFZ5YmlCYlltOXZiR1ZoYmwxY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2FHRnpVSEp2Y0dWeWRIa2dQU0FvYjJKcVpXTjBMQ0J3Y205d1pYSjBlVTVoYldVcElEMCtJRzlpYW1WamRDNW9ZWE5QZDI1UWNtOXdaWEowZVNod2NtOXdaWEowZVU1aGJXVXBJQ1ltSUc5aWFtVmpkRnR3Y205d1pYSjBlVTVoYldWZElDRTlQU0IxYm1SbFptbHVaV1E3WEc1Y2JpOHFYRzRnSUNBZ1NYTWdkWFJwYkhNZ2RtRnlJR0Z1SUdGeWNtRjVJRDhnWEc0Z0lDQWdYRzRnSUNBZ1FIQmhjbUZ0T2lCV1lYSnBZV0pzWlNCMGJ5QjBaWE4wWEc0Z0lDQWdRSEpsZEhWeWJpQmJZbTl2YkdWaGJsMDZJRkpsZEhWeWJuTWdkSEoxWlNCcFppQjFkR2xzY3k1MllYSlVlWEJsSUQwOVBTQW5RWEp5WVhrblhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHbHpRWEp5WVhrZ1BTQW9ZWEp5S1NBOVBpQjJZWEpVZVhCbEtHRnljaWtnUFQwOUlDZEJjbkpoZVNjN1hHNWNiaThxWEc0Z0lDQWdTWE1nZFhScGJITWdkbUZ5SUdFZ1puVnVZM1JwYjI0Z1B5QmNiaUFnSUNCY2JpQWdJQ0JBY0dGeVlXMDZJRlpoY21saFlteGxJSFJ2SUhSbGMzUmNiaUFnSUNCQWNtVjBkWEp1SUZ0aWIyOXNaV0Z1WFRvZ1VtVjBkWEp1Y3lCMGNuVmxJR2xtSUhWMGFXeHpMblpoY2xSNWNHVWdQVDA5SUNkR2RXNWpkR2x2YmlkY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2FYTkdkVzVqSUQwZ0tHOWlhaWtnUFQ0Z2RtRnlWSGx3WlNodlltb3BJRDA5UFNBblJuVnVZM1JwYjI0bk8xeHVYRzR2S2x4dUlDQWdJRWx6SUhWMGFXeHpJSFpoY2lCaElHNTFiV0psY2o5Y2JpQWdJQ0JjYmlBZ0lDQkFjR0Z5WVcwNklGWmhjbWxoWW14bElIUnZJSFJsYzNSY2JpQWdJQ0JBY21WMGRYSnVJRnRpYjI5c1pXRnVYVG9nVW1WMGRYSnVjeUIwY25WbElHbG1JSFI1Y0dWdlppQTlQVDBnSjI1MWJXSmxjaWRjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYVhOT2RXMGdQU0FvYm5WdEtTQTlQaUIwZVhCbGIyWWdiblZ0SUQwOVBTQW5iblZ0WW1WeUp6dGNibHh1THlwY2JpQWdJQ0JKY3lCMWRHbHNjeUIyWVhJZ1lXNGdiMkpxWldOMFAxeHVJQ0FnSUZ4dUlDQWdJRUJ3WVhKaGJUb2dWbUZ5YVdGaWJHVWdkRzhnZEdWemRGeHVJQ0FnSUVCeVpYUjFjbTRnVzJKdmIyeGxZVzVkT2lCU1pYUjFjbTV6SUhSeWRXVWdhV1lnZEhsd1pXOW1JRDA5UFNBbmIySnFaV04wSjF4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCcGMwOWlhaUE5SUNodlltb3BJRDArSUhSNWNHVnZaaUJ2WW1vZ1BUMDlJQ2R2WW1wbFkzUW5PMXh1WEc0dktseHVJQ0FnSUVseklIVjBhV3h6SUdFZ2NtVnNZWFJwZG1VZ2RtRnNkV1VnWVhOemFXZHViV1Z1ZEQ5Y2JpQWdJQ0JjYmlBZ0lDQkFjR0Z5WVcwZ1czTjBjbWx1WjEwNklGWmhjbWxoWW14bElIUnZJSFJsYzNSY2JpQWdJQ0JBY21WMGRYSnVJRnRpYjI5c1pXRnVYVG9nU1dZZ2RYUnBiSE1nYkc5dmEzTWdiR2xyWlNCaElISmxiR0YwYVhabElIWmhiSFZsSUdGemMybG5ibTFsYm5SY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2FYTlNaV3hoZEdsMlpWWmhiSFZsSUQwZ0tIWmhiSFZsS1NBOVBpQW9kbUZzZFdVZ0ppWWdkbUZzZFdVdWFXNWtaWGhQWmlBbUppQjJZV3gxWlM1cGJtUmxlRTltS0NjOUp5a2dQaUF3S1NBL0lIUnlkV1VnT2lCbVlXeHpaVHRjYmx4dUx5cGNiaUFnSUNCSmN5QjFkR2xzY3lCMllYSWdZU0J6ZEhKcGJtY2dQeUJjYmlBZ0lDQmNiaUFnSUNCQWNHRnlZVzA2SUZaaGNtbGhZbXhsSUhSdklIUmxjM1JjYmlBZ0lDQkFjbVYwZFhKdUlGdGliMjlzWldGdVhUb2dVbVYwZFhKdWN5QjBjblZsSUdsbUlIUjVjR1Z2WmlCemRISWdQVDA5SUNkemRISnBibWNuWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdselUzUnlhVzVuSUQwZ0tITjBjaWtnUFQ0Z2RIbHdaVzltSUhOMGNpQTlQVDBnSjNOMGNtbHVaeWM3WEc1Y2JpOHFYRzRnSUNBZ1FIQmhjbUZ0SUZ0emRISnBibWNnZkh3Z1RtOWtaVXhwYzNSZE9seHVJQ0FnSUNBZ0lDQkpaaUJ6ZEhKcGJtY3NJSFJ5WldGMFpXUWdZWE1nYzJWc1pXTjBiM0l1WEc0Z0lDQWdJQ0FnSUVsbUlHNXZkQ3dnZEhKbFlYUmxaQ0JoY3lCd2NtVmxlR2x6ZEdsdVp5Qk9iMlJsVEdsemRGeHVYRzRnSUNBZ1FISmxkSFZ5YmlCYlFYSnlZWGxkWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUhObGJHVmpkRVJ2YlNBOUlDaHpaV3hsWTNSdmNpa2dQVDRnZTF4dUlDQWdJR052Ym5OMElHNXZaR1Z6SUQwZ0tIUjVjR1Z2WmlCelpXeGxZM1J2Y2lBOVBUMGdKM04wY21sdVp5Y3BJRDhnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNrRnNiQ2h6Wld4bFkzUnZjaWtnT2lCelpXeGxZM1J2Y2p0Y2JpQWdJQ0J5WlhSMWNtNGdLRzV2WkdWekxteGxibWQwYUNrZ1B5QmJYUzV6YkdsalpTNWpZV3hzS0c1dlpHVnpLU0E2SUZ0ZExuQjFjMmdvYm05a1pYTXBPMXh1ZlR0Y2JseHVMeXBjYmlBZ0lDQlRjR3hwZENCamIyMXRZUzFrWld4cGJXbDBaV1FnYzNSeWFXNW5YRzVjYmlBZ0lDQmNJbVp2Ynl4aVlYSmNJaUF0UGlCYlhDSm1iMjljSWl3Z1hDSmlZWEpjSWwxY2JseHVJQ0FnSUVCd1lYSmhiU0JiYzNSeWFXNW5YVnh1SUNBZ0lFQnlaWFIxY200Z1cyRnljbUY1WFZ4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCemNHeHBkRU52YlcxaFJHVnNhVzFwZEdWa0lEMGdLSFpoYkhWbEtTQTlQaUJwYzFOMGNtbHVaeWgyWVd4MVpTa2dQeUIyWVd4MVpTNXpjR3hwZENndkxGeGNjeW92S1NBNklGdDJZV3gxWlYwN1hHNWNiaThxWEc0Z0lDQWdVM0JzYVhRZ2MzQmhZMlV0WkdWc2FXMXBkR1ZrSUhOMGNtbHVaMXh1WEc0Z0lDQWdYQ0ptYjI4Z1ltRnlYQ0lnTFQ0Z1cxd2labTl2WENJc0lGd2lZbUZ5WENKZFhHNWNiaUFnSUNCQWNHRnlZVzBnVzNOMGNtbHVaMTFjYmlBZ0lDQkFjbVYwZFhKdUlGdGhjbkpoZVYxY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2MzQnNhWFJUY0dGalpVUmxiR2x0YVhSbFpDQTlJQ2gyWVd4MVpTa2dQVDRnYVhOVGRISnBibWNvZG1Gc2RXVXBJRDhnZG1Gc2RXVXVjM0JzYVhRb0p5QW5LU0E2SUZ0MllXeDFaVjA3WEc1Y2JpOHFYRzRnSUNBZ1EyOXVkbVZ5ZENCdWRXMWlaWElnZEc4Z2VDQmtaV05wYldGc0lIQnNZV05sYzF4dVhHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkWEc0Z0lDQWdRSEpsZEhWeWJpQmJiblZ0WW1WeVhWeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQjBiMFJsWTJsdFlXd2dQU0FvYm5WdExDQndjbVZqYVhOcGIyNGdQU0F5S1NBOVBpQjdYRzRnSUNBZ2NISmxZMmx6YVc5dUlEMGdNVEFnS2lvZ2NISmxZMmx6YVc5dU8xeHVJQ0FnSUhKbGRIVnliaUJOWVhSb0xuSnZkVzVrS0c1MWJTQXFJSEJ5WldOcGMybHZiaWtnTHlCd2NtVmphWE5wYjI0N1hHNTlPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL3V0aWxzLmpzXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX1Byb2Nlc3MyID0gcmVxdWlyZSgnLi4vcHJvY2Vzcy9Qcm9jZXNzJyk7XG5cbnZhciBfUHJvY2VzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Qcm9jZXNzMik7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxudmFyIF9iaW5kQWRhcHRlciA9IHJlcXVpcmUoJy4uL2luYy9iaW5kLWFkYXB0ZXInKTtcblxudmFyIF9iaW5kQWRhcHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9iaW5kQWRhcHRlcik7XG5cbnZhciBfY29sb3IgPSByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9jb2xvcicpO1xuXG52YXIgX2NvbG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbG9yKTtcblxudmFyIF9jb21wbGV4ID0gcmVxdWlyZSgnLi4vdmFsdWUtdHlwZXMvY29tcGxleCcpO1xuXG52YXIgX2NvbXBsZXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcGxleCk7XG5cbnZhciBfdW5pdCA9IHJlcXVpcmUoJy4uL3ZhbHVlLXR5cGVzL3VuaXQnKTtcblxudmFyIF91bml0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3VuaXQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIERFRkFVTFRfUFJPUCA9ICdjdXJyZW50JztcbnZhciBOVU1FUklDQUxfVkFMVUVTID0gW0RFRkFVTFRfUFJPUCwgJ2Zyb20nLCAndG8nLCAncHJldicsICd2ZWxvY2l0eSddO1xudmFyIE5VTV9OVU1FUklDQUxfVkFMVUVTID0gTlVNRVJJQ0FMX1ZBTFVFUy5sZW5ndGg7XG5cbnZhciBBY3Rpb24gPSAoZnVuY3Rpb24gKF9Qcm9jZXNzKSB7XG4gICAgX2luaGVyaXRzKEFjdGlvbiwgX1Byb2Nlc3MpO1xuXG4gICAgZnVuY3Rpb24gQWN0aW9uKHByb3BzKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBY3Rpb24pO1xuXG4gICAgICAgIHByb3BzLnN0YXRlID0ge307XG4gICAgICAgIHByb3BzLnZhbHVlS2V5cyA9IFtdO1xuICAgICAgICBwcm9wcy5wYXJlbnRLZXlzID0gW107XG4gICAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUHJvY2Vzcy5jYWxsKHRoaXMsIHByb3BzKSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgIyBTZXQgQWN0aW9uIHByb3BlcnRpZXNcbiAgICAgICAgIyMgU2V0IHVzZXItZGVmaW5lZCBBY3Rpb24gcHJvcGVydGllc1xuICAgICAgICAgQHBhcmFtIFtvYmplY3RdXG4gICAgICAgIEByZXR1cm4gW0FjdGlvbl1cbiAgICAqL1xuXG4gICAgQWN0aW9uLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiBzZXQoKSB7XG4gICAgICAgIHZhciBwcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzBdO1xuICAgICAgICB2YXIgdmFsdWVzID0gcHJvcHMudmFsdWVzO1xuICAgICAgICB2YXIgb24gPSBwcm9wcy5vbjtcblxuICAgICAgICB2YXIgcHJvcHNUb1NldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgWyd2YWx1ZXMnLCAnb24nXSk7XG5cbiAgICAgICAgdmFyIGN1cnJlbnRWYWx1ZXMgPSB0aGlzLnZhbHVlcyA9IHRoaXMudmFsdWVzIHx8IHt9O1xuICAgICAgICB2YXIgZGVmYXVsdFZhbHVlID0gdGhpcy5nZXREZWZhdWx0VmFsdWUoKTtcbiAgICAgICAgdmFyIGluaGVyaXRhYmxlID0ge307XG5cbiAgICAgICAgLy8gMSkgU2V0IG5vbi1jb25zdW1lZCBwcm9wZXJ0aWVzXG4gICAgICAgIF9Qcm9jZXNzLnByb3RvdHlwZS5zZXQuY2FsbCh0aGlzLCBwcm9wc1RvU2V0KTtcblxuICAgICAgICAvLyAyKSBCaW5kIGBvbmAgdG8gYW4gYWRhcHRlciwgaWYgbm90IGFscmVhZHlcbiAgICAgICAgaWYgKG9uKSB7XG4gICAgICAgICAgICAvLyBEdWNrdHlwaXNoIGNoZWNrIGZvciBBZGFwdGVyXG4gICAgICAgICAgICB0aGlzLm9uID0gIW9uLnNldHRlciA/ICgwLCBfYmluZEFkYXB0ZXIyLmRlZmF1bHQpKG9uKSA6IG9uO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gMykgUHJpbWUgYW4gb2JqZWN0IHRvIGluaGVyaXQgZnJvbSwgd2l0aCBvbmx5IGB2YWx1ZWAgcHJvcGVydGllc1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoZGVmYXVsdFZhbHVlLmhhc093blByb3BlcnR5KGtleSkgJiYgcHJvcHNUb1NldC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgaW5oZXJpdGFibGVba2V5XSA9IHByb3BzVG9TZXRba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIDQpIFVwZGF0ZSBleGlzdGluZyB2YWx1ZXMgd2l0aCBpbmhlcml0YWJsZSBwcm9wZXJ0aWVzXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBjdXJyZW50VmFsdWVzKSB7XG4gICAgICAgICAgICAvLyBFeGNsdWRlIHZhcmlhYmxlcyB0byBiZSBzZXQsIGFzIHdlJ2xsIGRlYWwgd2l0aCB0aG9zZSBzZXBlcmF0ZWx5XG4gICAgICAgICAgICBpZiAoY3VycmVudFZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFZhbHVlc1trZXldID0gX2V4dGVuZHMoe30sIGN1cnJlbnRWYWx1ZXNba2V5XSwgaW5oZXJpdGFibGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gNSkgVXBkYXRlXG4gICAgICAgIGlmICh2YWx1ZXMpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0VmFsdWVzKHZhbHVlcywgaW5oZXJpdGFibGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIEFjdGlvbi5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gZ2V0KGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZVtrZXldO1xuICAgIH07XG5cbiAgICBBY3Rpb24ucHJvdG90eXBlLnNldFZhbHVlcyA9IGZ1bmN0aW9uIHNldFZhbHVlcyh2YWx1ZXMsIGluaGVyaXRGcm9tKSB7XG4gICAgICAgIHZhciBjdXJyZW50VmFsdWVzID0gdGhpcy52YWx1ZXM7XG4gICAgICAgIHZhciBkZWZhdWx0VmFsdWUgPSB0aGlzLmdldERlZmF1bHRWYWx1ZSgpO1xuICAgICAgICB2YXIgZGVmYXVsdFZhbHVlUHJvcCA9IHRoaXMuZ2V0RGVmYXVsdFZhbHVlUHJvcCgpO1xuXG4gICAgICAgIC8vIDIpIExvb3Agb3ZlciBldmVyeSBpbmNvbWluZyBgdmFsdWVgIGFuZCBzZXRcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHZhbHVlcykge1xuICAgICAgICAgICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0ge307XG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkcmVuID0ge307XG4gICAgICAgICAgICAgICAgdmFyIGhhc0NoaWxkcmVuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdmFyIGJhc2UgPSBjdXJyZW50VmFsdWVzW2tleV0gPyBjdXJyZW50VmFsdWVzW2tleV0gOiBkZWZhdWx0VmFsdWU7XG5cbiAgICAgICAgICAgICAgICAvLyBJZiB2YWx1ZXMgb3MgYW4gb2JqZWN0LCB1c2UgaXQgZGlyZWN0bHlcbiAgICAgICAgICAgICAgICBpZiAoKDAsIF91dGlscy5pc09iaikodmFsdWVzW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWVzW2tleV07XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gT1Igc2V0IHRvIGEgdGhlIGRlZmF1bHQgdmFsdWUgcHJvcGVydHkgb2YgYSBibGFuayBvYmplY3RcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVbZGVmYXVsdFZhbHVlUHJvcF0gPSB2YWx1ZXNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIG5ld1ZhbHVlID0gX2V4dGVuZHMoe30sIGJhc2UsIGluaGVyaXRGcm9tLCB2YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICAvLyBHZXQgY3VycmVudCB2YWx1ZSBpZiBub25lIGlzIGRlZmluZWRcbiAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUuY3VycmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHdlIGhhdmUgYSBgZnJvbWAgdmFsdWUgc2V0LCB0YWtlIHRoYXRcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlLmZyb20gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUuY3VycmVudCA9IG5ld1ZhbHVlLmZyb207XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE9yIGlmIHdlIGhhdmUgYW4gQWRhcHRlciwgZ2V0IGl0IGZyb20gdGhhdFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMub24gJiYgdGhpcy5vbi5nZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS5jdXJyZW50ID0gdGhpcy5vbi5nZXQoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBJZiBpdCdzIHN0aWxsIHVuZGVmaW5lZCBtYWtlIGl0IGVxdWFsIDA/P1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUuY3VycmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS5jdXJyZW50ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZS5mcm9tID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUuZnJvbSA9IG5ld1ZhbHVlLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gSWYgb3VyIEFkYXB0ZXIgaGFzIGEgYGdldFZhbHVlVHlwZWAgZnVuY3Rpb24sIHRyeSB0byBnZXQgYSBgdHlwZWAgd2l0aCB0aGUgdmFsdWUga2V5XG4gICAgICAgICAgICAgICAgaWYgKCFuZXdWYWx1ZS50eXBlICYmIHRoaXMub24gJiYgdGhpcy5vbi5nZXRWYWx1ZVR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUudHlwZSA9IHRoaXMub24uZ2V0VmFsdWVUeXBlKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gYykgTG9vcCB0aHJvdWdoIGFsbCBudW1lcmljYWwgcHJvcGVydHkgdHlwZXNcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IE5VTV9OVU1FUklDQUxfVkFMVUVTOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb3BOYW1lID0gTlVNRVJJQ0FMX1ZBTFVFU1tpXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlUHJvcCA9IG5ld1ZhbHVlW3Byb3BOYW1lXTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSBoYXZlIHRoaXMga2luZCBvZiBwcm9wZXJ0eSwgcHJvY2Vzc1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVQcm9wICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHdlIGRvbid0IGhhdmUgYSB0eXBlIHNldCB0byB0aGlzIHZhbHVlLCBmaW5kIG9uZSAodW5sZXNzIGl0J3MgYSByYXcgbnVtYmVyKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFuZXdWYWx1ZS50eXBlICYmICgwLCBfdXRpbHMuaXNTdHJpbmcpKHZhbHVlUHJvcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX3VuaXQyLmRlZmF1bHQudGVzdCh2YWx1ZVByb3ApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLnR5cGUgPSBfdW5pdDIuZGVmYXVsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKF9jb2xvcjIuZGVmYXVsdC50ZXN0KHZhbHVlUHJvcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUudHlwZSA9IF9jb2xvcjIuZGVmYXVsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKF9jb21wbGV4Mi5kZWZhdWx0LnRlc3QodmFsdWVQcm9wKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS50eXBlID0gX2NvbXBsZXgyLmRlZmF1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHdlJ3JlIGdvaW5nIHRvIHNwbGl0IHRoaXMgdmFsdWUgaW50byBjaGlsZCB2YWx1ZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUudHlwZS5oYXNPd25Qcm9wZXJ0eSgnc3BsaXQnKSAmJiAoMCwgX3V0aWxzLmlzU3RyaW5nKSh2YWx1ZVByb3ApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzcGxpdFByb3AgPSBuZXdWYWx1ZS50eXBlLnNwbGl0KHZhbHVlUHJvcCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgc3BsaXRLZXkgaW4gc3BsaXRQcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3BsaXRQcm9wLmhhc093blByb3BlcnR5KHNwbGl0S2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb21iaW5lZEtleSA9IGtleSArIHNwbGl0S2V5O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjaGlsZHJlbltjb21iaW5lZEtleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9kZWZhdWx0VmFsdWUgPSBuZXdWYWx1ZS50eXBlLmRlZmF1bHRQcm9wcyAmJiBuZXdWYWx1ZS50eXBlLmRlZmF1bHRQcm9wc1tzcGxpdEtleV0gPyBuZXdWYWx1ZS50eXBlLmRlZmF1bHRQcm9wc1tzcGxpdEtleV0gOiB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW5bY29tYmluZWRLZXldID0gX2V4dGVuZHMoe30sIG5ld1ZhbHVlLCBfZGVmYXVsdFZhbHVlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkS2V5OiBzcGxpdEtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbltjb21iaW5lZEtleV1bcHJvcE5hbWVdID0gc3BsaXRQcm9wW3NwbGl0S2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHRoaXMgaGFzIGEgYHRlbXBsYXRlYCBmdW5jdGlvbiwgZ2VuZXJhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFuZXdWYWx1ZS50ZW1wbGF0ZSAmJiBuZXdWYWx1ZS50eXBlLnRlbXBsYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS50ZW1wbGF0ZSA9IG5ld1ZhbHVlLnR5cGUudGVtcGxhdGUobmV3VmFsdWVbcHJvcE5hbWVdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc0NoaWxkcmVuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5ld1ZhbHVlLnR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gX2V4dGVuZHMoe30sIG5ld1ZhbHVlLCBuZXdWYWx1ZS50eXBlLmRlZmF1bHRQcm9wcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlLnR5cGUucGFyc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWVbcHJvcE5hbWVdID0gbmV3VmFsdWUudHlwZS5wYXJzZShuZXdWYWx1ZVtwcm9wTmFtZV0sIG5ld1ZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IC8vIEVuZCBudW1lcmljYWwgcHJvcGVydHkgaXRlcmF0aW9uXG5cbiAgICAgICAgICAgICAgICAvLyBTZXQgYHByZXZgIHRvIGBjdXJyZW50YCBpZiBpdCBpc24ndCBhbHJlYWR5IGRlZmluZWRcbiAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUucHJldiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLnByZXYgPSBuZXdWYWx1ZS5jdXJyZW50O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGN1cnJlbnRWYWx1ZXNba2V5XSA9IG5ld1ZhbHVlO1xuXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhpcyB2YWx1ZSBkb2Vzbid0IGhhdmUgY2hpbGRyZW4sIGFkZCB0byB2YWx1ZUtleXNcbiAgICAgICAgICAgICAgICBpZiAoIWhhc0NoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlS2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlS2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBPciBhZGQgdG8gcGFyZW50S2V5c1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS5jaGlsZHJlbiA9IG5ld1ZhbHVlLmNoaWxkcmVuIHx8IHt9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJlbnRLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudEtleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFZhbHVlcyhjaGlsZHJlbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSAvLyBFbmQgdmFsdWUgaXRlcmF0aW9uXG5cbiAgICAgICAgLy8gMykgUHJlY29tcHV0ZSB2YWx1ZSBrZXkgYW5kIHBhcmVudCBrZXkgbGVuZ3RoIHRvIHByZXZlbnQgcGVyLWZyYW1lIG1lYXN1cmVtZW50XG4gICAgICAgIHRoaXMubnVtVmFsdWVLZXlzID0gdGhpcy52YWx1ZUtleXMubGVuZ3RoO1xuICAgICAgICB0aGlzLm51bVBhcmVudEtleXMgPSB0aGlzLnBhcmVudEtleXMubGVuZ3RoO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICAvKlxuICAgICAgICBEZWNpZGUgd2hldGhlciB0aGlzIEFjdGlvbiB3aWxsIHJlbmRlciBvbiBuZXh0IGZyYW1lXG4gICAgICAgICBAcGFyYW0gW0FjdGlvbl1cbiAgICAgICAgQHBhcmFtIFtudW1iZXJdXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJuIHRydWUgdG8gcmVuZGVyXG4gICAgKi9cblxuICAgIEFjdGlvbi5wcm90b3R5cGUud2lsbFJlbmRlciA9IGZ1bmN0aW9uIHdpbGxSZW5kZXIoYWN0aW9uLCBmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgICAgIHZhciBoYXNDaGFuZ2VkID0gZmFsc2U7XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgYmFzZSB2YWx1ZXMgaGF2ZSB1cGRhdGVkXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMudmFsdWVLZXlzW2ldO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcblxuICAgICAgICAgICAgLy8gUnVuIHRyYW5zZm9ybSBmdW5jdGlvbiAoaWYgcHJlc2VudClcbiAgICAgICAgICAgIGlmICh2YWx1ZS50cmFuc2Zvcm0pIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gdmFsdWUudHJhbnNmb3JtKHZhbHVlLmN1cnJlbnQsIGtleSwgdGhpcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENhcCBtaW5pbXVtXG4gICAgICAgICAgICBpZiAoKDAsIF91dGlscy5pc051bSkodmFsdWUubWluKSkge1xuICAgICAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSBNYXRoLm1heCh2YWx1ZS5jdXJyZW50LCB2YWx1ZS5taW4pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDYXAgbWF4aW11bVxuICAgICAgICAgICAgaWYgKCgwLCBfdXRpbHMuaXNOdW0pKHZhbHVlLm1heCkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gTWF0aC5taW4odmFsdWUuY3VycmVudCwgdmFsdWUubWF4KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUm91bmQgbnVtYmVyXG4gICAgICAgICAgICBpZiAodmFsdWUucm91bmQpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gTWF0aC5yb3VuZCh2YWx1ZS5jdXJyZW50KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFsdWUuZnJhbWVDaGFuZ2UgPSB2YWx1ZS5jdXJyZW50IC0gdmFsdWUucHJldjtcblxuICAgICAgICAgICAgLy8gVXBkYXRlIHZlbG9jaXR5XG4gICAgICAgICAgICBpZiAoIXRoaXMuY2FsY3VsYXRlc1ZlbG9jaXR5KSB7XG4gICAgICAgICAgICAgICAgdmFsdWUudmVsb2NpdHkgPSAoMCwgX2NhbGMuc3BlZWRQZXJTZWNvbmQpKHZhbHVlLmZyYW1lQ2hhbmdlLCBlbGFwc2VkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgdGhpcyB2YWx1ZSBoYXMgY2hhbmdlZFxuICAgICAgICAgICAgaWYgKHZhbHVlLnByZXYgIT09IHZhbHVlLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICBoYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB2YWx1ZS5wcmV2ID0gdmFsdWUuY3VycmVudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQXBwZW5kIHVuaXRcbiAgICAgICAgICAgIHZhciB2YWx1ZUZvclN0YXRlID0gdmFsdWUudHlwZSAmJiB2YWx1ZS50eXBlLnNlcmlhbGl6ZSA/IHZhbHVlLnR5cGUuc2VyaWFsaXplKHZhbHVlLmN1cnJlbnQsIHZhbHVlKSA6IHZhbHVlLmN1cnJlbnQ7XG5cbiAgICAgICAgICAgIC8vIEFkZCB0byBzdGF0ZSBpZiB0aGlzIGlzIG5vdCBhIGNoaWxkIHZhdWVcbiAgICAgICAgICAgIGlmICghdmFsdWUucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZVtrZXldID0gdmFsdWVGb3JTdGF0ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZXNbdmFsdWUucGFyZW50XS5jaGlsZHJlblt2YWx1ZS5jaGlsZEtleV0gPSB2YWx1ZUZvclN0YXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMub25GcmFtZSkge1xuICAgICAgICAgICAgdGhpcy5vbkZyYW1lKHRoaXMuc3RhdGUsIHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMub25DbGVhbnVwID8gdHJ1ZSA6IGhhc0NoYW5nZWQ7XG4gICAgfTtcblxuICAgIC8qXG4gICAgICAgIElmIHdlIGFyZSByZW5kZXJpbmcsIHJlY29tYmluZSBwYXJlbnQgdmFsdWVzIGZpcnN0XG4gICAgKi9cblxuICAgIEFjdGlvbi5wcm90b3R5cGUub25QcmVSZW5kZXIgPSBmdW5jdGlvbiBvblByZVJlbmRlcigpIHtcbiAgICAgICAgLy8gVXBkYXRlIHBhcmVudCB2YWx1ZXNcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm51bVBhcmVudEtleXM7IGkrKykge1xuICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMucGFyZW50S2V5c1tpXTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG5cbiAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSB2YWx1ZS50eXBlLmNvbWJpbmUodmFsdWUuY2hpbGRyZW4sIHZhbHVlLnRlbXBsYXRlKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGVba2V5XSAhPT0gdmFsdWUuY3VycmVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVba2V5XSA9IHZhbHVlLmN1cnJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgQWN0aW9uLnByb3RvdHlwZS5vblJlbmRlciA9IGZ1bmN0aW9uIG9uUmVuZGVyKF9yZWYpIHtcbiAgICAgICAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZTtcbiAgICAgICAgdmFyIG9uID0gX3JlZi5vbjtcblxuICAgICAgICBpZiAob24gJiYgb24uc2V0KSB7XG4gICAgICAgICAgICBvbi5zZXQoc3RhdGUpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIEFjdGlvbi5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbiBwYXVzZSgpIHtcbiAgICAgICAgX1Byb2Nlc3MucHJvdG90eXBlLnN0b3AuY2FsbCh0aGlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIEFjdGlvbi5wcm90b3R5cGUucmVzdW1lID0gZnVuY3Rpb24gcmVzdW1lKCkge1xuICAgICAgICBfUHJvY2Vzcy5wcm90b3R5cGUuc3RhcnQuY2FsbCh0aGlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIEFjdGlvbi5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgICAgdmFyIHZhbHVlcyA9IHRoaXMudmFsdWVzO1xuICAgICAgICBfUHJvY2Vzcy5wcm90b3R5cGUuc3RhcnQuY2FsbCh0aGlzKTtcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZXNba2V5XS5wcmV2ID0gdmFsdWVzW2tleV0ub3JpZ2luID0gdmFsdWVzW2tleV0uY3VycmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKlxuICAgICAgICAjIEdldCBkZWZhdWx0IEFjdGlvbiB2YWx1ZSBwcm9wZXJ0aWVzXG4gICAgICAgICBAcmV0dXJuIFtvYmplY3RdXG4gICAgKi9cblxuICAgIEFjdGlvbi5wcm90b3R5cGUuZ2V0RGVmYXVsdFZhbHVlID0gZnVuY3Rpb24gZ2V0RGVmYXVsdFZhbHVlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmVsb2NpdHk6IDAsXG4gICAgICAgICAgICByb3VuZDogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgIyBHZXQgZGVmYXVsdCBBY3Rpb24gdmFsdWUgcHJvcGVydHkgbmFtZVxuICAgICAgICAjIyBTZXQgdGhpcyBgdmFsdWVgIHByb3BlcnR5IHdoZW4gc2V0IGFzIHZhbHVlIGluc3RlYWQgb2Ygb2JqZWN0XG4gICAgICAgICBAcmV0dXJuIFtzdHJpbmddXG4gICAgKi9cblxuICAgIEFjdGlvbi5wcm90b3R5cGUuZ2V0RGVmYXVsdFZhbHVlUHJvcCA9IGZ1bmN0aW9uIGdldERlZmF1bHRWYWx1ZVByb3AoKSB7XG4gICAgICAgIHJldHVybiBERUZBVUxUX1BST1A7XG4gICAgfTtcblxuICAgIHJldHVybiBBY3Rpb247XG59KShfUHJvY2VzczMuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEFjdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDBGamRHbHZiaTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN08wRkJVVUVzU1VGQlRTeFpRVUZaTEVkQlFVY3NVMEZCVXl4RFFVRkRPMEZCUXk5Q0xFbEJRVTBzWjBKQlFXZENMRWRCUVVjc1EwRkJReXhaUVVGWkxFVkJRVVVzVFVGQlRTeEZRVUZGTEVsQlFVa3NSVUZCUlN4TlFVRk5MRVZCUVVVc1ZVRkJWU3hEUVVGRExFTkJRVU03UVVGRE1VVXNTVUZCVFN4dlFrRkJiMElzUjBGQlJ5eG5Ra0ZCWjBJc1EwRkJReXhOUVVGTkxFTkJRVU03TzBsQlJXaERMRTFCUVUwN1kwRkJUaXhOUVVGTk96dEJRVU4yUWl4aFFVUnBRaXhOUVVGTkxFTkJRMWdzUzBGQlN5eEZRVUZGT3poQ1FVUkdMRTFCUVUwN08wRkJSVzVDTEdGQlFVc3NRMEZCUXl4TFFVRkxMRWRCUVVjc1JVRkJSU3hEUVVGRE8wRkJRMnBDTEdGQlFVc3NRMEZCUXl4VFFVRlRMRWRCUVVjc1JVRkJSU3hEUVVGRE8wRkJRM0pDTEdGQlFVc3NRMEZCUXl4VlFVRlZMRWRCUVVjc1JVRkJSU3hEUVVGRE8yZEVRVU4wUWl4dlFrRkJUU3hMUVVGTExFTkJRVU03UzBGRFpqczdPenM3T3pzN1FVRkJRVHRCUVU1blFpeFZRVUZOTEZkQlpYWkNMRWRCUVVjc2EwSkJRV0U3V1VGQldpeExRVUZMTEhsRVFVRkhMRVZCUVVVN1dVRkRSaXhOUVVGTkxFZEJRWGRDTEV0QlFVc3NRMEZCYmtNc1RVRkJUVHRaUVVGRkxFVkJRVVVzUjBGQmIwSXNTMEZCU3l4RFFVRXpRaXhGUVVGRk96dFpRVUZMTEZWQlFWVXNORUpCUVVzc1MwRkJTenM3UVVGRE0wTXNXVUZCVFN4aFFVRmhMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4SlFVRkpMRVZCUVVVc1EwRkJRenRCUVVOMFJDeFpRVUZOTEZsQlFWa3NSMEZCUnl4SlFVRkpMRU5CUVVNc1pVRkJaU3hGUVVGRkxFTkJRVU03UVVGRE5VTXNXVUZCVFN4WFFVRlhMRWRCUVVjc1JVRkJSVHM3TzBGQlFVTXNRVUZIZGtJc01rSkJRVTBzUjBGQlJ5eExRVUZCTEU5QlFVTXNWVUZCVlN4RFFVRkRPenM3UVVGQlF5eEJRVWQwUWl4WlFVRkpMRVZCUVVVc1JVRkJSVHM3UVVGRlNpeG5Ra0ZCU1N4RFFVRkRMRVZCUVVVc1IwRkJSeXhCUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEUxQlFVMHNSMEZCU1N3eVFrRkJXU3hGUVVGRkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTTdVMEZEYWtRN096dEJRVUZCTEVGQlIwUXNZVUZCU3l4SlFVRkpMRWRCUVVjc1NVRkJTU3haUVVGWkxFVkJRVVU3UVVGRE1VSXNaMEpCUVVrc1dVRkJXU3hEUVVGRExHTkJRV01zUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4VlFVRlZMRU5CUVVNc1kwRkJZeXhEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTzBGQlEzQkZMREpDUVVGWExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NWVUZCVlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8yRkJRM1JETzFOQlEwbzdPenRCUVVGQkxFRkJSMFFzWVVGQlN5eEpRVUZKTEVkQlFVY3NTVUZCU1N4aFFVRmhMRVZCUVVVN08wRkJSVE5DTEdkQ1FVRkpMR0ZCUVdFc1EwRkJReXhqUVVGakxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVTdRVUZEYmtNc05rSkJRV0VzUTBGQlF5eEhRVUZITEVOQlFVTXNaMEpCUVZFc1lVRkJZU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZMTEZkQlFWY3NRMEZCUlN4RFFVRkRPMkZCUTJ4Rk8xTkJRMG83T3p0QlFVRkJMRUZCUjBRc1dVRkJTU3hOUVVGTkxFVkJRVVU3UVVGRFVpeG5Ra0ZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhOUVVGTkxFVkJRVVVzVjBGQlZ5eERRVUZETEVOQlFVTTdVMEZEZGtNN08wRkJSVVFzWlVGQlR5eEpRVUZKTEVOQlFVTTdTMEZEWmpzN1FVRnVSR2RDTEZWQlFVMHNWMEZ4UkhaQ0xFZEJRVWNzWjBKQlFVTXNSMEZCUnl4RlFVRkZPMEZCUTB3c1pVRkJUeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMHRCUXpGQ096dEJRWFpFWjBJc1ZVRkJUU3hYUVhsRWRrSXNVMEZCVXl4elFrRkJReXhOUVVGTkxFVkJRVVVzVjBGQlZ5eEZRVUZGTzBGQlF6TkNMRmxCUVUwc1lVRkJZU3hIUVVGSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTTdRVUZEYkVNc1dVRkJUU3haUVVGWkxFZEJRVWNzU1VGQlNTeERRVUZETEdWQlFXVXNSVUZCUlN4RFFVRkRPMEZCUXpWRExGbEJRVTBzWjBKQlFXZENMRWRCUVVjc1NVRkJTU3hEUVVGRExHMUNRVUZ0UWl4RlFVRkZPenM3UVVGQlF5eEJRVWR3UkN4aFFVRkxMRWxCUVVrc1IwRkJSeXhKUVVGSkxFMUJRVTBzUlVGQlJUdEJRVU53UWl4blFrRkJTU3hOUVVGTkxFTkJRVU1zWTBGQll5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZPMEZCUXpWQ0xHOUNRVUZKTEV0QlFVc3NSMEZCUnl4RlFVRkZMRU5CUVVNN1FVRkRaaXh2UWtGQlNTeFJRVUZSTEVkQlFVY3NSVUZCUlN4RFFVRkRPMEZCUTJ4Q0xHOUNRVUZKTEZkQlFWY3NSMEZCUnl4TFFVRkxMRU5CUVVNN1FVRkRlRUlzYjBKQlFVa3NTVUZCU1N4SFFVRkhMR0ZCUVdFc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eGhRVUZoTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1dVRkJXVHM3TzBGQlFVTXNRVUZIYkVVc2IwSkJRVWtzVjBGcVJrb3NTMEZCU3l4RlFXbEdTeXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlR0QlFVTndRaXg1UWtGQlN5eEhRVUZITEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNN096dEJRVUZETEdsQ1FVZDJRaXhOUVVGTk8wRkJRMGdzTmtKQlFVc3NRMEZCUXl4blFrRkJaMElzUTBGQlF5eEhRVUZITEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenR4UWtGRGVrTTdPMEZCUlVRc2IwSkJRVWtzVVVGQlVTeG5Ra0ZCVVN4SlFVRkpMRVZCUVVzc1YwRkJWeXhGUVVGTExFdEJRVXNzUTBGQlJUczdPMEZCUVVNc1FVRkhja1FzYjBKQlFVa3NVVUZCVVN4RFFVRkRMRTlCUVU4c1MwRkJTeXhUUVVGVExFVkJRVVU3TzBGQlJXaERMSGRDUVVGSkxGRkJRVkVzUTBGQlF5eEpRVUZKTEV0QlFVc3NVMEZCVXl4RlFVRkZPMEZCUXpkQ0xHZERRVUZSTEVOQlFVTXNUMEZCVHl4SFFVRkhMRkZCUVZFc1EwRkJReXhKUVVGSk96czdRVUZCUXl4eFFrRkhjRU1zVFVGQlRTeEpRVUZKTEVsQlFVa3NRMEZCUXl4RlFVRkZMRWxCUVVrc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVWQlFVVTdRVUZETDBJc2IwTkJRVkVzUTBGQlF5eFBRVUZQTEVkQlFVY3NTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdlVUpCUTNaRE96czdRVUZCUVN4QlFVZEVMSGRDUVVGSkxGRkJRVkVzUTBGQlF5eFBRVUZQTEV0QlFVc3NVMEZCVXl4RlFVRkZPMEZCUTJoRExHZERRVUZSTEVOQlFVTXNUMEZCVHl4SFFVRkhMRU5CUVVNc1EwRkJRenR4UWtGRGVFSTdhVUpCUTBvN08wRkJSVVFzYjBKQlFVa3NVVUZCVVN4RFFVRkRMRWxCUVVrc1MwRkJTeXhUUVVGVExFVkJRVVU3UVVGRE4wSXNORUpCUVZFc1EwRkJReXhKUVVGSkxFZEJRVWNzVVVGQlVTeERRVUZETEU5QlFVOHNRMEZCUXp0cFFrRkRjRU03T3p0QlFVRkJMRUZCUjBRc2IwSkJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4SlFVRkpMRWxCUVVrc1EwRkJReXhGUVVGRkxFbEJRVWtzU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4WlFVRlpMRVZCUVVVN1FVRkRia1FzTkVKQlFWRXNRMEZCUXl4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eFpRVUZaTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN2FVSkJRemRET3pzN1FVRkJRU3hCUVVkRUxIRkNRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzYjBKQlFXOUNMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3UVVGRE0wTXNkMEpCUVUwc1VVRkJVU3hIUVVGSExHZENRVUZuUWl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJRM0pETEhkQ1FVRk5MRk5CUVZNc1IwRkJSeXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZET3pzN1FVRkJReXhCUVVkeVF5eDNRa0ZCU1N4VFFVRlRMRXRCUVVzc1UwRkJVeXhGUVVGRk96dEJRVVY2UWl3MFFrRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVsQlFVa3NWMEUzU0haQ0xGRkJRVkVzUlVFMlNIZENMRk5CUVZNc1EwRkJReXhGUVVGRk8wRkJRM1pETEdkRFFVRkpMR1ZCUVZNc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eEZRVUZGTzBGQlF6RkNMSGREUVVGUkxFTkJRVU1zU1VGQlNTeHBRa0ZCVnl4RFFVRkRPelpDUVVVMVFpeE5RVUZOTEVsQlFVa3NaMEpCUVZVc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eEZRVUZGTzBGQlEyeERMSGREUVVGUkxFTkJRVU1zU1VGQlNTeHJRa0ZCV1N4RFFVRkRPelpDUVVVM1FpeE5RVUZOTEVsQlFVa3NhMEpCUVZrc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eEZRVUZGTzBGQlEzQkRMSGREUVVGUkxFTkJRVU1zU1VGQlNTeHZRa0ZCWXl4RFFVRkRPelpDUVVNdlFqdDVRa0ZEU2pzN1FVRkZSQ3cwUWtGQlNTeFJRVUZSTEVOQlFVTXNTVUZCU1N4RlFVRkZPenRCUVVWbUxHZERRVUZKTEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1kwRkJZeXhEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEZkQk0wbHNSQ3hSUVVGUkxFVkJNa2x0UkN4VFFVRlRMRU5CUVVNc1JVRkJSVHRCUVVNNVJDeHZRMEZCVFN4VFFVRlRMRWRCUVVjc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNN08wRkJSV3BFTEhGRFFVRkxMRWxCUVVrc1VVRkJVU3hKUVVGSkxGTkJRVk1zUlVGQlJUdEJRVU0xUWl4M1EwRkJTU3hUUVVGVExFTkJRVU1zWTBGQll5eERRVUZETEZGQlFWRXNRMEZCUXl4RlFVRkZPMEZCUTNCRExEUkRRVUZOTEZkQlFWY3NSMEZCUnl4SFFVRkhMRWRCUVVjc1VVRkJVU3hEUVVGRE96dEJRVVZ1UXl3MFEwRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTXNSVUZCUlR0QlFVTjRRaXhuUkVGQlRTeGhRVUZaTEVkQlFVY3NRVUZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExGbEJRVmtzU1VGQlNTeFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhSUVVGUkxFTkJRVU1zUjBGQlNTeFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhSUVVGUkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTTdRVUZEZEVrc2IwUkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTXNaMEpCUTJRc1VVRkJVU3hGUVVOU0xHRkJRVms3UVVGRFppeHpSRUZCVFN4RlFVRkZMRWRCUVVjN1FVRkRXQ3gzUkVGQlVTeEZRVUZGTEZGQlFWRTdRVUZEYkVJc2IwUkJRVWtzUlVGQlJTeFRRVUZUT3poRFFVTnNRaXhEUVVGRE8zbERRVU5NT3p0QlFVVkVMR2RFUVVGUkxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTXNVVUZCVVN4RFFVRkRMRWRCUVVjc1UwRkJVeXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzNGRFFVTjZSRHRwUTBGRFNqczdPMEZCUVVFc1FVRkhSQ3h2UTBGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRWxCUVVrc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVWQlFVVTdRVUZET1VNc05FTkJRVkVzUTBGQlF5eFJRVUZSTEVkQlFVY3NVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNN2FVTkJRMnhGT3p0QlFVVkVMREpEUVVGWExFZEJRVWNzU1VGQlNTeERRVUZET3paQ1FVVjBRaXhOUVVGTkxFbEJRVWtzVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4WlFVRlpMRVZCUVVVN1FVRkRia01zZDBOQlFWRXNaMEpCUVZFc1VVRkJVU3hGUVVGTExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkZMRU5CUVVNN05rSkJRemRFT3p0QlFVVkVMR2REUVVGSkxGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RlFVRkZPMEZCUTNKQ0xIZERRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWRCUVVjc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZET3paQ1FVTXhSVHQ1UWtGRFNqdHhRa0ZEU2p0cFFrRkRTanM3TzBGQlFVRXNRVUZIUkN4dlFrRkJTU3hSUVVGUkxFTkJRVU1zU1VGQlNTeExRVUZMTEZOQlFWTXNSVUZCUlR0QlFVTTNRaXcwUWtGQlVTeERRVUZETEVsQlFVa3NSMEZCUnl4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRE8ybENRVU53UXpzN1FVRkZSQ3cyUWtGQllTeERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRkZCUVZFN096dEJRVUZETEVGQlJ6bENMRzlDUVVGSkxFTkJRVU1zVjBGQlZ5eEZRVUZGTzBGQlEyUXNkMEpCUVVrc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFVkJRVVU3UVVGRGNFTXNORUpCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPM0ZDUVVNMVFqczdPMEZCUVVFc2FVSkJSMG9zVFVGQlRUdEJRVU5JTEdkRFFVRlJMRU5CUVVNc1VVRkJVU3hIUVVGSExGRkJRVkVzUTBGQlF5eFJRVUZSTEVsQlFVa3NSVUZCUlN4RFFVRkRPenRCUVVVMVF5dzBRa0ZCU1N4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1JVRkJSVHRCUVVOeVF5eG5RMEZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdlVUpCUXpkQ096dEJRVVZFTERSQ1FVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzNGQ1FVTTFRanRoUVVOS08xTkJRMG83T3p0QlFVRkJMRUZCUjBRc1dVRkJTU3hEUVVGRExGbEJRVmtzUjBGQlJ5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTFCUVUwc1EwRkJRenRCUVVNeFF5eFpRVUZKTEVOQlFVTXNZVUZCWVN4SFFVRkhMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zVFVGQlRTeERRVUZET3p0QlFVVTFReXhsUVVGUExFbEJRVWtzUTBGQlF6dExRVVZtT3pzN096czdPenM3TzBGQmVrMW5RaXhWUVVGTkxGZEJiVTUyUWl4VlFVRlZMSFZDUVVGRExFMUJRVTBzUlVGQlJTeFZRVUZWTEVWQlFVVXNUMEZCVHl4RlFVRkZPMEZCUTNCRExGbEJRVWtzVlVGQlZTeEhRVUZITEV0QlFVczdPenRCUVVGRExFRkJSM1pDTEdGQlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8wRkJRM2hETEdkQ1FVRk5MRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUXpsQ0xHZENRVUZOTEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF6czdPMEZCUVVNc1FVRkhMMElzWjBKQlFVa3NTMEZCU3l4RFFVRkRMRk5CUVZNc1JVRkJSVHRCUVVOcVFpeHhRa0ZCU3l4RFFVRkRMRTlCUVU4c1IwRkJSeXhMUVVGTExFTkJRVU1zVTBGQlV5eERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRVZCUVVVc1IwRkJSeXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzJGQlF6ZEVPenM3UVVGQlFTeEJRVWRFTEdkQ1FVRkpMRmRCTTA5UUxFdEJRVXNzUlVFeVQxRXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRk8wRkJRMnhDTEhGQ1FVRkxMRU5CUVVNc1QwRkJUeXhIUVVGSExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRTlCUVU4c1JVRkJSU3hMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdZVUZEZEVRN096dEJRVUZCTEVGQlIwUXNaMEpCUVVrc1YwRm9VRkFzUzBGQlN5eEZRV2RRVVN4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVU3UVVGRGJFSXNjVUpCUVVzc1EwRkJReXhQUVVGUExFZEJRVWNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1QwRkJUeXhGUVVGRkxFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0aFFVTjBSRHM3TzBGQlFVRXNRVUZIUkN4blFrRkJTU3hMUVVGTExFTkJRVU1zUzBGQlN5eEZRVUZGTzBGQlEySXNjVUpCUVVzc1EwRkJReXhQUVVGUExFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03WVVGRE4wTTdPMEZCUlVRc2FVSkJRVXNzUTBGQlF5eFhRVUZYTEVkQlFVY3NTMEZCU3l4RFFVRkRMRTlCUVU4c1IwRkJSeXhMUVVGTExFTkJRVU1zU1VGQlNUczdPMEZCUVVNc1FVRkhMME1zWjBKQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc2EwSkJRV3RDTEVWQlFVVTdRVUZETVVJc2NVSkJRVXNzUTBGQlF5eFJRVUZSTEVkQlFVY3NWVUU1VUhoQ0xHTkJRV01zUlVFNFVIbENMRXRCUVVzc1EwRkJReXhYUVVGWExFVkJRVVVzVDBGQlR5eERRVUZETEVOQlFVTTdZVUZETDBRN096dEJRVUZCTEVGQlIwUXNaMEpCUVVrc1MwRkJTeXhEUVVGRExFbEJRVWtzUzBGQlN5eExRVUZMTEVOQlFVTXNUMEZCVHl4RlFVRkZPMEZCUXpsQ0xEQkNRVUZWTEVkQlFVY3NTVUZCU1N4RFFVRkRPMEZCUTJ4Q0xIRkNRVUZMTEVOQlFVTXNTVUZCU1N4SFFVRkhMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU03WVVGRE9VSTdPenRCUVVGQkxFRkJSMFFzWjBKQlFVMHNZVUZCWVN4SFFVRkhMRUZCUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzU1VGQlNTeExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1IwRkJTU3hMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1QwRkJUeXhGUVVGRkxFdEJRVXNzUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXl4UFFVRlBPenM3UVVGQlF5eEJRVWQ0U0N4blFrRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eE5RVUZOTEVWQlFVVTdRVUZEWml4dlFrRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4aFFVRmhMRU5CUVVNN1lVRkRia01zVFVGQlRUdEJRVU5JTEc5Q1FVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRExGRkJRVkVzUTBGQlF5eEhRVUZITEdGQlFXRXNRMEZCUXp0aFFVTjBSVHRUUVVOS096dEJRVVZFTEZsQlFVa3NTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSVHRCUVVOa0xHZENRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdVMEZEYkVNN08wRkJSVVFzWlVGQlR5eEJRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRWRCUVVrc1NVRkJTU3hIUVVGSExGVkJRVlVzUTBGQlF6dExRVU12UXpzN096czdPMEZCTlZGblFpeFZRVUZOTEZkQmFWSjJRaXhYUVVGWExEQkNRVUZIT3p0QlFVVldMR0ZCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1lVRkJZU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzBGQlEzcERMR2RDUVVGTkxFZEJRVWNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJReTlDTEdkQ1FVRk5MRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPenRCUVVVdlFpeHBRa0ZCU3l4RFFVRkRMRTlCUVU4c1IwRkJSeXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1VVRkJVU3hGUVVGRkxFdEJRVXNzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXpzN1FVRkZia1VzWjBKQlFVa3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eExRVUZMTEVOQlFVTXNUMEZCVHl4RlFVRkZPMEZCUTI1RExHOUNRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTTdZVUZEYmtNN1UwRkRTanRMUVVOS096dEJRVGRTWjBJc1ZVRkJUU3hYUVN0U2RrSXNVVUZCVVN3eVFrRkJaMEk3V1VGQllpeExRVUZMTEZGQlFVd3NTMEZCU3p0WlFVRkZMRVZCUVVVc1VVRkJSaXhGUVVGRk96dEJRVU5vUWl4WlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFTkJRVU1zUjBGQlJ5eEZRVUZGTzBGQlEyUXNZMEZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dFRRVU5xUWp0TFFVTktPenRCUVc1VFowSXNWVUZCVFN4WFFYRlRka0lzUzBGQlN5eHZRa0ZCUnp0QlFVTktMREpDUVVGTkxFbEJRVWtzUzBGQlFTeE5RVUZGTEVOQlFVTTdRVUZEWWl4bFFVRlBMRWxCUVVrc1EwRkJRenRMUVVObU96dEJRWGhUWjBJc1ZVRkJUU3hYUVRCVGRrSXNUVUZCVFN4eFFrRkJSenRCUVVOTUxESkNRVUZOTEV0QlFVc3NTMEZCUVN4TlFVRkZMRU5CUVVNN1FVRkRaQ3hsUVVGUExFbEJRVWtzUTBGQlF6dExRVU5tT3p0QlFUZFRaMElzVlVGQlRTeFhRU3RUZGtJc1MwRkJTeXh2UWtGQlJ6dEJRVU5LTEZsQlFVMHNUVUZCVFN4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU03UVVGRE0wSXNNa0pCUVUwc1MwRkJTeXhMUVVGQkxFMUJRVVVzUTBGQlF6czdRVUZGWkN4aFFVRkxMRWxCUVVrc1IwRkJSeXhKUVVGSkxFMUJRVTBzUlVGQlJUdEJRVU53UWl4blFrRkJTU3hOUVVGTkxFTkJRVU1zWTBGQll5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZPMEZCUXpWQ0xITkNRVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1NVRkJTU3hIUVVGSExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4TlFVRk5MRWRCUVVjc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXp0aFFVTXZSRHRUUVVOS08wdEJRMG83T3pzN096czdRVUY0VkdkQ0xGVkJRVTBzVjBFclZIWkNMR1ZCUVdVc09FSkJRVWM3UVVGRFpDeGxRVUZQTzBGQlEwZ3NiMEpCUVZFc1JVRkJSU3hEUVVGRE8wRkJRMWdzYVVKQlFVc3NSVUZCUlN4TFFVRkxPMU5CUTJZc1EwRkJRenRMUVVOTU96czdPenM3T3p0QlFYQlZaMElzVlVGQlRTeFhRVFJWZGtJc2JVSkJRVzFDTEd0RFFVRkhPMEZCUTJ4Q0xHVkJRVThzV1VGQldTeERRVUZETzB0QlEzWkNPenRYUVRsVlowSXNUVUZCVFRzN08ydENRVUZPTEUxQlFVMGlMQ0ptYVd4bElqb2lRV04wYVc5dUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBVR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUZCeWIyTmxjM01nWm5KdmJTQW5MaTR2Y0hKdlkyVnpjeTlRY205alpYTnpKenRjYm1sdGNHOXlkQ0I3SUhOd1pXVmtVR1Z5VTJWamIyNWtJSDBnWm5KdmJTQW5MaTR2YVc1akwyTmhiR01uTzF4dWFXMXdiM0owSUhzZ2FYTk9kVzBzSUdselQySnFMQ0JwYzFOMGNtbHVaeUI5SUdaeWIyMGdKeTR1TDJsdVl5OTFkR2xzY3ljN1hHNXBiWEJ2Y25RZ1ltbHVaRUZrWVhCMFpYSWdabkp2YlNBbkxpNHZhVzVqTDJKcGJtUXRZV1JoY0hSbGNpYzdYRzVwYlhCdmNuUWdZMjlzYjNKVWVYQmxJR1p5YjIwZ0p5NHVMM1poYkhWbExYUjVjR1Z6TDJOdmJHOXlKenRjYm1sdGNHOXlkQ0JqYjIxd2JHVjRWSGx3WlNCbWNtOXRJQ2N1TGk5MllXeDFaUzEwZVhCbGN5OWpiMjF3YkdWNEp6dGNibWx0Y0c5eWRDQjFibWwwVkhsd1pTQm1jbTl0SUNjdUxpOTJZV3gxWlMxMGVYQmxjeTkxYm1sMEp6dGNibHh1WTI5dWMzUWdSRVZHUVZWTVZGOVFVazlRSUQwZ0oyTjFjbkpsYm5Rbk8xeHVZMjl1YzNRZ1RsVk5SVkpKUTBGTVgxWkJURlZGVXlBOUlGdEVSVVpCVlV4VVgxQlNUMUFzSUNkbWNtOXRKeXdnSjNSdkp5d2dKM0J5WlhZbkxDQW5kbVZzYjJOcGRIa25YVHRjYm1OdmJuTjBJRTVWVFY5T1ZVMUZVa2xEUVV4ZlZrRk1WVVZUSUQwZ1RsVk5SVkpKUTBGTVgxWkJURlZGVXk1c1pXNW5kR2c3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdOc1lYTnpJRUZqZEdsdmJpQmxlSFJsYm1SeklGQnliMk5sYzNNZ2UxeHVJQ0FnSUdOdmJuTjBjblZqZEc5eUtIQnliM0J6S1NCN1hHNGdJQ0FnSUNBZ0lIQnliM0J6TG5OMFlYUmxJRDBnZTMwN1hHNGdJQ0FnSUNBZ0lIQnliM0J6TG5aaGJIVmxTMlY1Y3lBOUlGdGRPMXh1SUNBZ0lDQWdJQ0J3Y205d2N5NXdZWEpsYm5STFpYbHpJRDBnVzEwN1hHNGdJQ0FnSUNBZ0lITjFjR1Z5S0hCeWIzQnpLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQXZLbHh1SUNBZ0lDQWdJQ0FqSUZObGRDQkJZM1JwYjI0Z2NISnZjR1Z5ZEdsbGMxeHVJQ0FnSUNBZ0lDQWpJeUJUWlhRZ2RYTmxjaTFrWldacGJtVmtJRUZqZEdsdmJpQndjbTl3WlhKMGFXVnpYRzVjYmlBZ0lDQWdJQ0FnUUhCaGNtRnRJRnR2WW1wbFkzUmRYRzRnSUNBZ0lDQWdJRUJ5WlhSMWNtNGdXMEZqZEdsdmJsMWNiaUFnSUNBcUwxeHVJQ0FnSUhObGRDaHdjbTl3Y3lBOUlIdDlLU0I3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJSHNnZG1Gc2RXVnpMQ0J2Yml3Z0xpNHVjSEp2Y0hOVWIxTmxkQ0I5SUQwZ2NISnZjSE03WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJR04xY25KbGJuUldZV3gxWlhNZ1BTQjBhR2x6TG5aaGJIVmxjeUE5SUhSb2FYTXVkbUZzZFdWeklIeDhJSHQ5TzF4dUlDQWdJQ0FnSUNCamIyNXpkQ0JrWldaaGRXeDBWbUZzZFdVZ1BTQjBhR2x6TG1kbGRFUmxabUYxYkhSV1lXeDFaU2dwTzF4dUlDQWdJQ0FnSUNCamIyNXpkQ0JwYm1obGNtbDBZV0pzWlNBOUlIdDlPMXh1WEc0Z0lDQWdJQ0FnSUM4dklERXBJRk5sZENCdWIyNHRZMjl1YzNWdFpXUWdjSEp2Y0dWeWRHbGxjMXh1SUNBZ0lDQWdJQ0J6ZFhCbGNpNXpaWFFvY0hKdmNITlViMU5sZENrN1hHNWNiaUFnSUNBZ0lDQWdMeThnTWlrZ1FtbHVaQ0JnYjI1Z0lIUnZJR0Z1SUdGa1lYQjBaWElzSUdsbUlHNXZkQ0JoYkhKbFlXUjVYRzRnSUNBZ0lDQWdJR2xtSUNodmJpa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdSSFZqYTNSNWNHbHphQ0JqYUdWamF5Qm1iM0lnUVdSaGNIUmxjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV2YmlBOUlDZ2hiMjR1YzJWMGRHVnlLU0EvSUdKcGJtUkJaR0Z3ZEdWeUtHOXVLU0E2SUc5dU8xeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnTHk4Z015a2dVSEpwYldVZ1lXNGdiMkpxWldOMElIUnZJR2x1YUdWeWFYUWdabkp2YlN3Z2QybDBhQ0J2Ym14NUlHQjJZV3gxWldBZ2NISnZjR1Z5ZEdsbGMxeHVJQ0FnSUNBZ0lDQm1iM0lnS0d4bGRDQnJaWGtnYVc0Z1pHVm1ZWFZzZEZaaGJIVmxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvWkdWbVlYVnNkRlpoYkhWbExtaGhjMDkzYmxCeWIzQmxjblI1S0d0bGVTa2dKaVlnY0hKdmNITlViMU5sZEM1b1lYTlBkMjVRY205d1pYSjBlU2hyWlhrcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhVzVvWlhKcGRHRmliR1ZiYTJWNVhTQTlJSEJ5YjNCelZHOVRaWFJiYTJWNVhUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQzh2SURRcElGVndaR0YwWlNCbGVHbHpkR2x1WnlCMllXeDFaWE1nZDJsMGFDQnBibWhsY21sMFlXSnNaU0J3Y205d1pYSjBhV1Z6WEc0Z0lDQWdJQ0FnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUJqZFhKeVpXNTBWbUZzZFdWektTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QkZlR05zZFdSbElIWmhjbWxoWW14bGN5QjBieUJpWlNCelpYUXNJR0Z6SUhkbEoyeHNJR1JsWVd3Z2QybDBhQ0IwYUc5elpTQnpaWEJsY21GMFpXeDVYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9ZM1Z5Y21WdWRGWmhiSFZsY3k1b1lYTlBkMjVRY205d1pYSjBlU2hyWlhrcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZM1Z5Y21WdWRGWmhiSFZsYzF0clpYbGRJRDBnZXlBdUxpNWpkWEp5Wlc1MFZtRnNkV1Z6VzJ0bGVWMHNJQzR1TG1sdWFHVnlhWFJoWW14bElIMDdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0F2THlBMUtTQlZjR1JoZEdWY2JpQWdJQ0FnSUNBZ2FXWWdLSFpoYkhWbGN5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV6WlhSV1lXeDFaWE1vZG1Gc2RXVnpMQ0JwYm1obGNtbDBZV0pzWlNrN0lDQWdYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnSUNCOVhHNWNiaUFnSUNCblpYUW9hMlY1S1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpMbk4wWVhSbFcydGxlVjA3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjMlYwVm1Gc2RXVnpLSFpoYkhWbGN5d2dhVzVvWlhKcGRFWnliMjBwSUh0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnWTNWeWNtVnVkRlpoYkhWbGN5QTlJSFJvYVhNdWRtRnNkV1Z6TzF4dUlDQWdJQ0FnSUNCamIyNXpkQ0JrWldaaGRXeDBWbUZzZFdVZ1BTQjBhR2x6TG1kbGRFUmxabUYxYkhSV1lXeDFaU2dwTzF4dUlDQWdJQ0FnSUNCamIyNXpkQ0JrWldaaGRXeDBWbUZzZFdWUWNtOXdJRDBnZEdocGN5NW5aWFJFWldaaGRXeDBWbUZzZFdWUWNtOXdLQ2s3WEc1Y2JpQWdJQ0FnSUNBZ0x5OGdNaWtnVEc5dmNDQnZkbVZ5SUdWMlpYSjVJR2x1WTI5dGFXNW5JR0IyWVd4MVpXQWdZVzVrSUhObGRGeHVJQ0FnSUNBZ0lDQm1iM0lnS0d4bGRDQnJaWGtnYVc0Z2RtRnNkV1Z6S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RtRnNkV1Z6TG1oaGMwOTNibEJ5YjNCbGNuUjVLR3RsZVNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnNaWFFnZG1Gc2RXVWdQU0I3ZlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCc1pYUWdZMmhwYkdSeVpXNGdQU0I3ZlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCc1pYUWdhR0Z6UTJocGJHUnlaVzRnUFNCbVlXeHpaVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JzWlhRZ1ltRnpaU0E5SUdOMWNuSmxiblJXWVd4MVpYTmJhMlY1WFNBL0lHTjFjbkpsYm5SV1lXeDFaWE5iYTJWNVhTQTZJR1JsWm1GMWJIUldZV3gxWlR0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDOHZJRWxtSUhaaGJIVmxjeUJ2Y3lCaGJpQnZZbXBsWTNRc0lIVnpaU0JwZENCa2FYSmxZM1JzZVZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDaHBjMDlpYWloMllXeDFaWE5iYTJWNVhTa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnNkV1VnUFNCMllXeDFaWE5iYTJWNVhUdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzh2SUU5U0lITmxkQ0IwYnlCaElIUm9aU0JrWldaaGRXeDBJSFpoYkhWbElIQnliM0JsY25SNUlHOW1JR0VnWW14aGJtc2diMkpxWldOMFhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZzZFdWYlpHVm1ZWFZzZEZaaGJIVmxVSEp2Y0YwZ1BTQjJZV3gxWlhOYmEyVjVYVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCc1pYUWdibVYzVm1Gc2RXVWdQU0I3SUM0dUxtSmhjMlVzSUM0dUxtbHVhR1Z5YVhSR2NtOXRMQ0F1TGk1MllXeDFaU0I5TzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0x5OGdSMlYwSUdOMWNuSmxiblFnZG1Gc2RXVWdhV1lnYm05dVpTQnBjeUJrWldacGJtVmtYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0c1bGQxWmhiSFZsTG1OMWNuSmxiblFnUFQwOUlIVnVaR1ZtYVc1bFpDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdkx5QkpaaUIzWlNCb1lYWmxJR0VnWUdaeWIyMWdJSFpoYkhWbElITmxkQ3dnZEdGclpTQjBhR0YwWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2h1WlhkV1lXeDFaUzVtY205dElDRTlQU0IxYm1SbFptbHVaV1FwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUc1bGQxWmhiSFZsTG1OMWNuSmxiblFnUFNCdVpYZFdZV3gxWlM1bWNtOXRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdMeThnVDNJZ2FXWWdkMlVnYUdGMlpTQmhiaUJCWkdGd2RHVnlMQ0JuWlhRZ2FYUWdabkp2YlNCMGFHRjBYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0JwWmlBb2RHaHBjeTV2YmlBbUppQjBhR2x6TG05dUxtZGxkQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYm1WM1ZtRnNkV1V1WTNWeWNtVnVkQ0E5SUhSb2FYTXViMjR1WjJWMEtHdGxlU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdkx5QkpaaUJwZENkeklITjBhV3hzSUhWdVpHVm1hVzVsWkNCdFlXdGxJR2wwSUdWeGRXRnNJREEvUDF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvYm1WM1ZtRnNkV1V1WTNWeWNtVnVkQ0E5UFQwZ2RXNWtaV1pwYm1Wa0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnVaWGRXWVd4MVpTNWpkWEp5Wlc1MElEMGdNRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNodVpYZFdZV3gxWlM1bWNtOXRJRDA5UFNCMWJtUmxabWx1WldRcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYm1WM1ZtRnNkV1V1Wm5KdmJTQTlJRzVsZDFaaGJIVmxMbU4xY25KbGJuUTdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1NXWWdiM1Z5SUVGa1lYQjBaWElnYUdGeklHRWdZR2RsZEZaaGJIVmxWSGx3WldBZ1puVnVZM1JwYjI0c0lIUnllU0IwYnlCblpYUWdZU0JnZEhsd1pXQWdkMmwwYUNCMGFHVWdkbUZzZFdVZ2EyVjVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0NGdVpYZFdZV3gxWlM1MGVYQmxJQ1ltSUhSb2FYTXViMjRnSmlZZ2RHaHBjeTV2Ymk1blpYUldZV3gxWlZSNWNHVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JtVjNWbUZzZFdVdWRIbHdaU0E5SUhSb2FYTXViMjR1WjJWMFZtRnNkV1ZVZVhCbEtHdGxlU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0x5OGdZeWtnVEc5dmNDQjBhSEp2ZFdkb0lHRnNiQ0J1ZFcxbGNtbGpZV3dnY0hKdmNHVnlkSGtnZEhsd1pYTmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQm1iM0lnS0d4bGRDQnBJRDBnTURzZ2FTQThJRTVWVFY5T1ZVMUZVa2xEUVV4ZlZrRk1WVVZUT3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnY0hKdmNFNWhiV1VnUFNCT1ZVMUZVa2xEUVV4ZlZrRk1WVVZUVzJsZE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQjJZV3gxWlZCeWIzQWdQU0J1WlhkV1lXeDFaVnR3Y205d1RtRnRaVjA3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdMeThnU1dZZ2QyVWdhR0YyWlNCMGFHbHpJR3RwYm1RZ2IyWWdjSEp2Y0dWeWRIa3NJSEJ5YjJObGMzTmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIWmhiSFZsVUhKdmNDQWhQVDBnZFc1a1pXWnBibVZrS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdkx5QkpaaUIzWlNCa2IyNG5kQ0JvWVhabElHRWdkSGx3WlNCelpYUWdkRzhnZEdocGN5QjJZV3gxWlN3Z1ptbHVaQ0J2Ym1VZ0tIVnViR1Z6Y3lCcGRDZHpJR0VnY21GM0lHNTFiV0psY2lsY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDZ2hibVYzVm1Gc2RXVXVkSGx3WlNBbUppQnBjMU4wY21sdVp5aDJZV3gxWlZCeWIzQXBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFZ1YVhSVWVYQmxMblJsYzNRb2RtRnNkV1ZRY205d0tTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnVaWGRXWVd4MVpTNTBlWEJsSUQwZ2RXNXBkRlI1Y0dVN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5SUdWc2MyVWdhV1lnS0dOdmJHOXlWSGx3WlM1MFpYTjBLSFpoYkhWbFVISnZjQ2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYm1WM1ZtRnNkV1V1ZEhsd1pTQTlJR052Ykc5eVZIbHdaVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMGdaV3h6WlNCcFppQW9ZMjl0Y0d4bGVGUjVjR1V1ZEdWemRDaDJZV3gxWlZCeWIzQXBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRzVsZDFaaGJIVmxMblI1Y0dVZ1BTQmpiMjF3YkdWNFZIbHdaVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2h1WlhkV1lXeDFaUzUwZVhCbEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1NXWWdkMlVuY21VZ1oyOXBibWNnZEc4Z2MzQnNhWFFnZEdocGN5QjJZV3gxWlNCcGJuUnZJR05vYVd4a0lIWmhiSFZsYzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2h1WlhkV1lXeDFaUzUwZVhCbExtaGhjMDkzYmxCeWIzQmxjblI1S0NkemNHeHBkQ2NwSUNZbUlHbHpVM1J5YVc1bktIWmhiSFZsVUhKdmNDa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2MzQnNhWFJRY205d0lEMGdibVYzVm1Gc2RXVXVkSGx3WlM1emNHeHBkQ2gyWVd4MVpWQnliM0FwTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdadmNpQW9iR1YwSUhOd2JHbDBTMlY1SUdsdUlITndiR2wwVUhKdmNDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tITndiR2wwVUhKdmNDNW9ZWE5QZDI1UWNtOXdaWEowZVNoemNHeHBkRXRsZVNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0JqYjIxaWFXNWxaRXRsZVNBOUlHdGxlU0FySUhOd2JHbDBTMlY1TzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tDRmphR2xzWkhKbGJsdGpiMjFpYVc1bFpFdGxlVjBwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnWkdWbVlYVnNkRlpoYkhWbElEMGdLRzVsZDFaaGJIVmxMblI1Y0dVdVpHVm1ZWFZzZEZCeWIzQnpJQ1ltSUc1bGQxWmhiSFZsTG5SNWNHVXVaR1ZtWVhWc2RGQnliM0J6VzNOd2JHbDBTMlY1WFNrZ1B5QnVaWGRXWVd4MVpTNTBlWEJsTG1SbFptRjFiSFJRY205d2MxdHpjR3hwZEV0bGVWMGdPaUI3ZlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyaHBiR1J5Wlc1YlkyOXRZbWx1WldSTFpYbGRJRDBnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdMaTR1Ym1WM1ZtRnNkV1VzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXVMaTVrWldaaGRXeDBWbUZzZFdVc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J3WVhKbGJuUTZJR3RsZVN4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR05vYVd4a1MyVjVPaUJ6Y0d4cGRFdGxlU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUjVjR1U2SUhWdVpHVm1hVzVsWkZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOU8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOb2FXeGtjbVZ1VzJOdmJXSnBibVZrUzJWNVhWdHdjbTl3VG1GdFpWMGdQU0J6Y0d4cGRGQnliM0JiYzNCc2FYUkxaWGxkTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0x5OGdTV1lnZEdocGN5Qm9ZWE1nWVNCZ2RHVnRjR3hoZEdWZ0lHWjFibU4wYVc5dUxDQm5aVzVsY21GMFpWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9JVzVsZDFaaGJIVmxMblJsYlhCc1lYUmxJQ1ltSUc1bGQxWmhiSFZsTG5SNWNHVXVkR1Z0Y0d4aGRHVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUc1bGQxWmhiSFZsTG5SbGJYQnNZWFJsSUQwZ2JtVjNWbUZzZFdVdWRIbHdaUzUwWlcxd2JHRjBaU2h1WlhkV1lXeDFaVnR3Y205d1RtRnRaVjBwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYUdGelEyaHBiR1J5Wlc0Z1BTQjBjblZsTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmU0JsYkhObElHbG1JQ2h1WlhkV1lXeDFaUzUwZVhCbExtUmxabUYxYkhSUWNtOXdjeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J1WlhkV1lXeDFaU0E5SUhzZ0xpNHVibVYzVm1Gc2RXVXNJQzR1TG01bGQxWmhiSFZsTG5SNWNHVXVaR1ZtWVhWc2RGQnliM0J6SUgwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLRzVsZDFaaGJIVmxMblI1Y0dVdWNHRnljMlVwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYm1WM1ZtRnNkV1ZiY0hKdmNFNWhiV1ZkSUQwZ2JtVjNWbUZzZFdVdWRIbHdaUzV3WVhKelpTaHVaWGRXWVd4MVpWdHdjbTl3VG1GdFpWMHNJRzVsZDFaaGJIVmxLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5SUM4dklFVnVaQ0J1ZFcxbGNtbGpZV3dnY0hKdmNHVnlkSGtnYVhSbGNtRjBhVzl1WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdkx5QlRaWFFnWUhCeVpYWmdJSFJ2SUdCamRYSnlaVzUwWUNCcFppQnBkQ0JwYzI0bmRDQmhiSEpsWVdSNUlHUmxabWx1WldSY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9ibVYzVm1Gc2RXVXVjSEpsZGlBOVBUMGdkVzVrWldacGJtVmtLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHNWxkMVpoYkhWbExuQnlaWFlnUFNCdVpYZFdZV3gxWlM1amRYSnlaVzUwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTjFjbkpsYm5SV1lXeDFaWE5iYTJWNVhTQTlJRzVsZDFaaGJIVmxPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1NXWWdkR2hwY3lCMllXeDFaU0JrYjJWemJpZDBJR2hoZG1VZ1kyaHBiR1J5Wlc0c0lHRmtaQ0IwYnlCMllXeDFaVXRsZVhOY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9JV2hoYzBOb2FXeGtjbVZ1S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMblpoYkhWbFMyVjVjeTVwYm1SbGVFOW1LR3RsZVNrZ1BUMDlJQzB4S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMblpoYkhWbFMyVjVjeTV3ZFhOb0tHdGxlU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzh2SUU5eUlHRmtaQ0IwYnlCd1lYSmxiblJMWlhselhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdibVYzVm1Gc2RXVXVZMmhwYkdSeVpXNGdQU0J1WlhkV1lXeDFaUzVqYUdsc1pISmxiaUI4ZkNCN2ZUdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9kR2hwY3k1d1lYSmxiblJMWlhsekxtbHVaR1Y0VDJZb2EyVjVLU0E5UFQwZ0xURXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWNHRnlaVzUwUzJWNWN5NXdkWE5vS0d0bGVTazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxuTmxkRlpoYkhWbGN5aGphR2xzWkhKbGJpazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlJQzh2SUVWdVpDQjJZV3gxWlNCcGRHVnlZWFJwYjI1Y2JseHVJQ0FnSUNBZ0lDQXZMeUF6S1NCUWNtVmpiMjF3ZFhSbElIWmhiSFZsSUd0bGVTQmhibVFnY0dGeVpXNTBJR3RsZVNCc1pXNW5kR2dnZEc4Z2NISmxkbVZ1ZENCd1pYSXRabkpoYldVZ2JXVmhjM1Z5WlcxbGJuUmNiaUFnSUNBZ0lDQWdkR2hwY3k1dWRXMVdZV3gxWlV0bGVYTWdQU0IwYUdsekxuWmhiSFZsUzJWNWN5NXNaVzVuZEdnN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Ym5WdFVHRnlaVzUwUzJWNWN5QTlJSFJvYVhNdWNHRnlaVzUwUzJWNWN5NXNaVzVuZEdnN1hHNWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE03WEc1Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0F2S2x4dUlDQWdJQ0FnSUNCRVpXTnBaR1VnZDJobGRHaGxjaUIwYUdseklFRmpkR2x2YmlCM2FXeHNJSEpsYm1SbGNpQnZiaUJ1WlhoMElHWnlZVzFsWEc1Y2JpQWdJQ0FnSUNBZ1FIQmhjbUZ0SUZ0QlkzUnBiMjVkWEc0Z0lDQWdJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVnh1SUNBZ0lDQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMWNiaUFnSUNBZ0lDQWdRSEpsZEhWeWJpQmJZbTl2YkdWaGJsMDZJRkpsZEhWeWJpQjBjblZsSUhSdklISmxibVJsY2x4dUlDQWdJQ292WEc0Z0lDQWdkMmxzYkZKbGJtUmxjaWhoWTNScGIyNHNJR1p5WVcxbFUzUmhiWEFzSUdWc1lYQnpaV1FwSUh0Y2JpQWdJQ0FnSUNBZ2JHVjBJR2hoYzBOb1lXNW5aV1FnUFNCbVlXeHpaVHRjYmx4dUlDQWdJQ0FnSUNBdkx5QkRhR1ZqYXlCcFppQmlZWE5sSUhaaGJIVmxjeUJvWVhabElIVndaR0YwWldRZ1hHNGdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2dkR2hwY3k1dWRXMVdZV3gxWlV0bGVYTTdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdhMlY1SUQwZ2RHaHBjeTUyWVd4MVpVdGxlWE5iYVYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQjJZV3gxWlNBOUlIUm9hWE11ZG1Gc2RXVnpXMnRsZVYwN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUM4dklGSjFiaUIwY21GdWMyWnZjbTBnWm5WdVkzUnBiMjRnS0dsbUlIQnlaWE5sYm5RcFhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RtRnNkV1V1ZEhKaGJuTm1iM0p0S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnNkV1V1WTNWeWNtVnVkQ0E5SUhaaGJIVmxMblJ5WVc1elptOXliU2gyWVd4MVpTNWpkWEp5Wlc1MExDQnJaWGtzSUhSb2FYTXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QkRZWEFnYldsdWFXMTFiVnh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLR2x6VG5WdEtIWmhiSFZsTG0xcGJpa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IyWVd4MVpTNWpkWEp5Wlc1MElEMGdUV0YwYUM1dFlYZ29kbUZzZFdVdVkzVnljbVZ1ZEN3Z2RtRnNkV1V1YldsdUtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1EyRndJRzFoZUdsdGRXMWNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaHBjMDUxYlNoMllXeDFaUzV0WVhncEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZzZFdVdVkzVnljbVZ1ZENBOUlFMWhkR2d1YldsdUtIWmhiSFZsTG1OMWNuSmxiblFzSUhaaGJIVmxMbTFoZUNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUZKdmRXNWtJRzUxYldKbGNseHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIWmhiSFZsTG5KdmRXNWtLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVXVZM1Z5Y21WdWRDQTlJRTFoZEdndWNtOTFibVFvZG1Gc2RXVXVZM1Z5Y21WdWRDazdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUhaaGJIVmxMbVp5WVcxbFEyaGhibWRsSUQwZ2RtRnNkV1V1WTNWeWNtVnVkQ0F0SUhaaGJIVmxMbkJ5WlhZN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUM4dklGVndaR0YwWlNCMlpXeHZZMmwwZVZ4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0NGMGFHbHpMbU5oYkdOMWJHRjBaWE5XWld4dlkybDBlU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhaaGJIVmxMblpsYkc5amFYUjVJRDBnYzNCbFpXUlFaWEpUWldOdmJtUW9kbUZzZFdVdVpuSmhiV1ZEYUdGdVoyVXNJR1ZzWVhCelpXUXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QkpaaUIwYUdseklIWmhiSFZsSUdoaGN5QmphR0Z1WjJWa1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RtRnNkV1V1Y0hKbGRpQWhQVDBnZG1Gc2RXVXVZM1Z5Y21WdWRDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2hoYzBOb1lXNW5aV1FnUFNCMGNuVmxPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFpoYkhWbExuQnlaWFlnUFNCMllXeDFaUzVqZFhKeVpXNTBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QkJjSEJsYm1RZ2RXNXBkRnh1SUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnZG1Gc2RXVkdiM0pUZEdGMFpTQTlJQ2gyWVd4MVpTNTBlWEJsSUNZbUlIWmhiSFZsTG5SNWNHVXVjMlZ5YVdGc2FYcGxLU0EvSUhaaGJIVmxMblI1Y0dVdWMyVnlhV0ZzYVhwbEtIWmhiSFZsTG1OMWNuSmxiblFzSUhaaGJIVmxLU0E2SUhaaGJIVmxMbU4xY25KbGJuUTdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJRUZrWkNCMGJ5QnpkR0YwWlNCcFppQjBhR2x6SUdseklHNXZkQ0JoSUdOb2FXeGtJSFpoZFdWY2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNnaGRtRnNkV1V1Y0dGeVpXNTBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXpkR0YwWlZ0clpYbGRJRDBnZG1Gc2RXVkdiM0pUZEdGMFpUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NTJZV3gxWlhOYmRtRnNkV1V1Y0dGeVpXNTBYUzVqYUdsc1pISmxibHQyWVd4MVpTNWphR2xzWkV0bGVWMGdQU0IyWVd4MVpVWnZjbE4wWVhSbE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdhV1lnS0hSb2FYTXViMjVHY21GdFpTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV2YmtaeVlXMWxLSFJvYVhNdWMzUmhkR1VzSUhSb2FYTXBPMXh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUNoMGFHbHpMbTl1UTJ4bFlXNTFjQ2tnUHlCMGNuVmxJRG9nYUdGelEyaGhibWRsWkR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0F2S2x4dUlDQWdJQ0FnSUNCSlppQjNaU0JoY21VZ2NtVnVaR1Z5YVc1bkxDQnlaV052YldKcGJtVWdjR0Z5Wlc1MElIWmhiSFZsY3lCbWFYSnpkRnh1SUNBZ0lDb3ZYRzRnSUNBZ2IyNVFjbVZTWlc1a1pYSW9LU0I3WEc0Z0lDQWdJQ0FnSUM4dklGVndaR0YwWlNCd1lYSmxiblFnZG1Gc2RXVnpYRzRnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnZEdocGN5NXVkVzFRWVhKbGJuUkxaWGx6T3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUd0bGVTQTlJSFJvYVhNdWNHRnlaVzUwUzJWNWMxdHBYVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUhaaGJIVmxJRDBnZEdocGN5NTJZV3gxWlhOYmEyVjVYVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdkbUZzZFdVdVkzVnljbVZ1ZENBOUlIWmhiSFZsTG5SNWNHVXVZMjl0WW1sdVpTaDJZV3gxWlM1amFHbHNaSEpsYml3Z2RtRnNkV1V1ZEdWdGNHeGhkR1VwTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RHaHBjeTV6ZEdGMFpWdHJaWGxkSUNFOVBTQjJZV3gxWlM1amRYSnlaVzUwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV6ZEdGMFpWdHJaWGxkSUQwZ2RtRnNkV1V1WTNWeWNtVnVkRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lHOXVVbVZ1WkdWeUtIc2djM1JoZEdVc0lHOXVJSDBwSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLRzl1SUNZbUlHOXVMbk5sZENrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYjI0dWMyVjBLSE4wWVhSbEtUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lIQmhkWE5sS0NrZ2UxeHVJQ0FnSUNBZ0lDQnpkWEJsY2k1emRHOXdLQ2s3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhKbGMzVnRaU2dwSUh0Y2JpQWdJQ0FnSUNBZ2MzVndaWEl1YzNSaGNuUW9LVHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYzNSaGNuUW9LU0I3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJSFpoYkhWbGN5QTlJSFJvYVhNdWRtRnNkV1Z6TzF4dUlDQWdJQ0FnSUNCemRYQmxjaTV6ZEdGeWRDZ3BPMXh1WEc0Z0lDQWdJQ0FnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUIyWVd4MVpYTXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2gyWVd4MVpYTXVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2EyVjVLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhaaGJIVmxjMXRyWlhsZExuQnlaWFlnUFNCMllXeDFaWE5iYTJWNVhTNXZjbWxuYVc0Z1BTQjJZV3gxWlhOYmEyVjVYUzVqZFhKeVpXNTBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5cGNiaUFnSUNBZ0lDQWdJeUJIWlhRZ1pHVm1ZWFZzZENCQlkzUnBiMjRnZG1Gc2RXVWdjSEp2Y0dWeWRHbGxjMXh1WEc0Z0lDQWdJQ0FnSUVCeVpYUjFjbTRnVzI5aWFtVmpkRjFjYmlBZ0lDQXFMMXh1SUNBZ0lHZGxkRVJsWm1GMWJIUldZV3gxWlNncElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhabGJHOWphWFI1T2lBd0xGeHVJQ0FnSUNBZ0lDQWdJQ0FnY205MWJtUTZJR1poYkhObFhHNGdJQ0FnSUNBZ0lIMDdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5cGNiaUFnSUNBZ0lDQWdJeUJIWlhRZ1pHVm1ZWFZzZENCQlkzUnBiMjRnZG1Gc2RXVWdjSEp2Y0dWeWRIa2dibUZ0WlZ4dUlDQWdJQ0FnSUNBakl5QlRaWFFnZEdocGN5QmdkbUZzZFdWZ0lIQnliM0JsY25SNUlIZG9aVzRnYzJWMElHRnpJSFpoYkhWbElHbHVjM1JsWVdRZ2IyWWdiMkpxWldOMFhHNWNiaUFnSUNBZ0lDQWdRSEpsZEhWeWJpQmJjM1J5YVc1blhWeHVJQ0FnSUNvdlhHNGdJQ0FnWjJWMFJHVm1ZWFZzZEZaaGJIVmxVSEp2Y0NncElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlFUkZSa0ZWVEZSZlVGSlBVRHRjYmlBZ0lDQjlYRzU5WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvQWN0aW9uLmpzXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX0FjdGlvbjIgPSByZXF1aXJlKCcuLi9hY3Rpb25zL0FjdGlvbicpO1xuXG52YXIgX0FjdGlvbjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BY3Rpb24yKTtcblxudmFyIF9nZW5lcmF0ZUJsZW5kQ3VydmUgPSByZXF1aXJlKCcuL2luYy9nZW5lcmF0ZS1ibGVuZC1jdXJ2ZScpO1xuXG52YXIgX2dlbmVyYXRlQmxlbmRDdXJ2ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZW5lcmF0ZUJsZW5kQ3VydmUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8qXG4gICAgTWV0aG9kcyBhbmQgcHJvcGVydGllcyB0byBhZGQgdG8gYm91bmQgQWN0aW9uc1xuKi9cbnZhciBib3VuZE9uU3RhcnQgPSBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgcmV0dXJuIGFjdGlvbi5hY3Rvci5hY3RpdmF0ZUFjdGlvbihhY3Rpb24uaWQsIGFjdGlvbik7XG59O1xudmFyIGJvdW5kT25TdG9wID0gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgIHJldHVybiBhY3Rpb24uYWN0b3IuZGVhY3RpdmF0ZUFjdGlvbihhY3Rpb24uaWQpO1xufTtcbnZhciBib3VuZFByb3BzID0gZnVuY3Rpb24gKGFjdG9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWN0b3I6IGFjdG9yLFxuICAgICAgICBpc1ByaW9yaXR5OiB0cnVlLFxuICAgICAgICBvbjogYWN0b3Iub24sXG4gICAgICAgIF9vblN0YXJ0OiBib3VuZE9uU3RhcnQsXG4gICAgICAgIF9vblN0b3A6IGJvdW5kT25TdG9wLFxuICAgICAgICBvblJlbmRlcjogdW5kZWZpbmVkXG4gICAgfTtcbn07XG5cbnZhciBBY3RvciA9IChmdW5jdGlvbiAoX0FjdGlvbikge1xuICAgIF9pbmhlcml0cyhBY3RvciwgX0FjdGlvbik7XG5cbiAgICBmdW5jdGlvbiBBY3Rvcihwcm9wcykge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQWN0b3IpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgICAgIF90aGlzLmFjdGl2ZUFjdGlvbnMgPSB7fTtcbiAgICAgICAgX3RoaXMubnVtQWN0aXZlQWN0aW9ucyA9IDA7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBBY3Rvci5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gc2V0KHByb3BzLCBpbnN0YW50KSB7XG4gICAgICAgIGlmIChpbnN0YW50IHx8ICF0aGlzLmJlaGF2aW91cikge1xuICAgICAgICAgICAgX0FjdGlvbi5wcm90b3R5cGUuc2V0LmNhbGwodGhpcywgcHJvcHMpO1xuICAgICAgICAgICAgdGhpcy5vbmNlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgYWN0aW9uID0gdGhpcy5yZWR1Y2VyKHByb3BzKTtcbiAgICAgICAgICAgIGlmIChhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0KGFjdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgQmluZCBBY3Rpb24gdG8gQWN0b3JcbiAgICAqL1xuXG4gICAgQWN0b3IucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiBiaW5kKGFjdGlvbikge1xuICAgICAgICB2YXIgaW5oZXJpdGVkQWN0aW9uID0gYWN0aW9uLmluaGVyaXQoKTtcbiAgICAgICAgdmFyIG5ld1ZhbHVlcyA9IHt9O1xuICAgICAgICB2YXIgaGFzTmV3VmFsdWVzID0gZmFsc2U7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHZhbHVlcyBvbiBhY3RvciB0aGF0IGRvbid0IGV4aXN0XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBpbmhlcml0ZWRBY3Rpb24udmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAoaW5oZXJpdGVkQWN0aW9uLnZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmICF0aGlzLnZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgbmV3VmFsdWVzW2tleV0gPSBpbmhlcml0ZWRBY3Rpb24udmFsdWVzW2tleV07XG4gICAgICAgICAgICAgICAgaGFzTmV3VmFsdWVzID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoYXNOZXdWYWx1ZXMpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KHsgdmFsdWVzOiBuZXdWYWx1ZXMgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5oZXJpdGVkQWN0aW9uLnNldChib3VuZFByb3BzKHRoaXMsIGluaGVyaXRlZEFjdGlvbikpO1xuICAgIH07XG5cbiAgICAvKlxuICAgICAgICBTdGFydCBBY3RvclxuICAgICAgICAgSWYgQWN0aW9uIGlzIHByb3ZpZGVkLCBiaW5kIGl0IHRvIHRoaXMgQWN0b3IgYW5kIHN0YXJ0XG4gICAgICAgICBAcGFyYW0gKG9wdGlvbmFsKSBbQWN0aW9uXVxuICAgICovXG5cbiAgICBBY3Rvci5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiBzdGFydChhY3Rpb24pIHtcbiAgICAgICAgX0FjdGlvbi5wcm90b3R5cGUuc3RhcnQuY2FsbCh0aGlzKTtcblxuICAgICAgICBpZiAoYWN0aW9uKSB7XG4gICAgICAgICAgICB2YXIgYm91bmRBY3Rpb24gPSB0aGlzLmJpbmQoYWN0aW9uKTtcbiAgICAgICAgICAgIGJvdW5kQWN0aW9uLnN0YXJ0KCk7XG5cbiAgICAgICAgICAgIHJldHVybiBib3VuZEFjdGlvbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLmFjdGl2ZUFjdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVBY3Rpb25zLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9hY3Rpb24gPSB0aGlzLmFjdGl2ZUFjdGlvbnNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFfYWN0aW9uLmlzQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYWN0aW9uLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgQWN0b3IucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICBfQWN0aW9uLnByb3RvdHlwZS5zdG9wLmNhbGwodGhpcyk7XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMuYWN0aXZlQWN0aW9ucykge1xuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlQWN0aW9ucy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVBY3Rpb25zW2tleV0uc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIEFjdG9yLnByb3RvdHlwZS53aWxsUmVuZGVyID0gZnVuY3Rpb24gd2lsbFJlbmRlcihhY3RvciwgZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSB0aGlzLnZhbHVlS2V5c1tpXTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG4gICAgICAgICAgICB2YXIgZHJpdmVyID0gdmFsdWUubnVtRHJpdmVycyA/IHRoaXMuYWN0aXZlQWN0aW9uc1t2YWx1ZS5kcml2ZXJzWzBdXSA6IGZhbHNlO1xuICAgICAgICAgICAgdmFyIG5ld0N1cnJlbnQgPSB2YWx1ZS5udW1Ecml2ZXJzID8gZHJpdmVyLnZhbHVlc1trZXldLmN1cnJlbnQgOiB2YWx1ZS5jdXJyZW50O1xuXG4gICAgICAgICAgICBpZiAoZHJpdmVyLmJsZW5kQ3VydmUpIHtcbiAgICAgICAgICAgICAgICBuZXdDdXJyZW50ID0gZHJpdmVyLmJsZW5kQ3VydmUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IG5ld0N1cnJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gX0FjdGlvbi5wcm90b3R5cGUud2lsbFJlbmRlci5jYWxsKHRoaXMsIGFjdG9yLCBmcmFtZVN0YW1wLCBlbGFwc2VkKTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgQWRkIGFjdGl2ZSBhY3Rpb25zXG4gICAgICAgICBAcGFyYW0gW251bWJlcl1cbiAgICAgICAgQHBhcmFtIFtBY3Rpb25dXG4gICAgKi9cblxuICAgIEFjdG9yLnByb3RvdHlwZS5hY3RpdmF0ZUFjdGlvbiA9IGZ1bmN0aW9uIGFjdGl2YXRlQWN0aW9uKGlkLCBhY3Rpb24pIHtcbiAgICAgICAgdGhpcy5hY3RpdmVBY3Rpb25zW2lkXSA9IGFjdGlvbjtcbiAgICAgICAgdGhpcy5udW1BY3RpdmVBY3Rpb25zKys7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhY3Rpb24ubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBhY3Rpb24udmFsdWVLZXlzW2ldO1xuICAgICAgICAgICAgdmFyIGFjdGlvblZhbHVlID0gYWN0aW9uLnZhbHVlc1trZXldO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcblxuICAgICAgICAgICAgLy8gUGFzcyBBY3RvciB2YWx1ZSBwcm9wZXJ0aWVzIHRvIEFjdGlvblxuICAgICAgICAgICAgYWN0aW9uVmFsdWUudmVsb2NpdHkgPSB2YWx1ZS52ZWxvY2l0eTtcbiAgICAgICAgICAgIGFjdGlvblZhbHVlLmN1cnJlbnQgPSB2YWx1ZS5jdXJyZW50O1xuXG4gICAgICAgICAgICAvLyBJZiB3ZSdyZSBibGVuZGluZyB0aGlzIGFjdGlvbiwgYW5kIHRoZXJlJ3Mgb24gYWxyZWFkeSBpbiBwcm9ncmVzc1xuICAgICAgICAgICAgaWYgKGFjdGlvbi5ibGVuZCAmJiB2YWx1ZS5udW1Ecml2ZXJzKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uLmJsZW5kQ3VydmUgPSAoMCwgX2dlbmVyYXRlQmxlbmRDdXJ2ZTIuZGVmYXVsdCkodGhpcy5hY3RpdmVBY3Rpb25zW3ZhbHVlLmRyaXZlcnNbMF1dLCBhY3Rpb24sIGtleSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhbHVlLmRyaXZlcnMgPSBbaWRdO1xuICAgICAgICAgICAgdmFsdWUubnVtRHJpdmVycyA9IHZhbHVlLmRyaXZlcnMubGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubnVtQWN0aXZlQWN0aW9ucykge1xuICAgICAgICAgICAgX0FjdGlvbi5wcm90b3R5cGUuc3RhcnQuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKlxuICAgICAgICBSZW1vdmUgYWN0aXZlIGFjdGlvbnNcbiAgICAgICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgICovXG5cbiAgICBBY3Rvci5wcm90b3R5cGUuZGVhY3RpdmF0ZUFjdGlvbiA9IGZ1bmN0aW9uIGRlYWN0aXZhdGVBY3Rpb24oaWQpIHtcbiAgICAgICAgdmFyIGFjdGlvbiA9IHRoaXMuYWN0aXZlQWN0aW9uc1tpZF07XG5cbiAgICAgICAgaWYgKGFjdGlvbikge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhY3Rpb24ubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIga2V5ID0gYWN0aW9uLnZhbHVlS2V5c1tpXTtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuICAgICAgICAgICAgICAgIHZhciBkcml2ZXJJbmRleCA9IHZhbHVlLmRyaXZlcnMuaW5kZXhPZihpZCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoZHJpdmVySW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLmRyaXZlcnMuc3BsaWNlKGRyaXZlckluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUubnVtRHJpdmVycy0tO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuYWN0aXZlQWN0aW9uc1tpZF07XG4gICAgICAgICAgICB0aGlzLm51bUFjdGl2ZUFjdGlvbnMtLTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5udW1BY3RpdmVBY3Rpb25zICYmIHRoaXMuaXNBY3RpdmUpIHtcbiAgICAgICAgICAgIF9BY3Rpb24ucHJvdG90eXBlLnN0b3AuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBBY3Rvci5wcm90b3R5cGUuZ2V0RGVmYXVsdFZhbHVlID0gZnVuY3Rpb24gZ2V0RGVmYXVsdFZhbHVlKCkge1xuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIF9BY3Rpb24ucHJvdG90eXBlLmdldERlZmF1bHRWYWx1ZS5jYWxsKHRoaXMpLCB7XG4gICAgICAgICAgICBkcml2ZXJzOiBbXSxcbiAgICAgICAgICAgIG51bURyaXZlcnM6IDBcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiBBY3Rvcjtcbn0pKF9BY3Rpb24zLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBBY3Rvcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnZjaTlCWTNSdmNpNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN08wRkJUVUVzU1VGQlRTeFpRVUZaTEVkQlFVY3NWVUZCUXl4TlFVRk5PMWRCUVVzc1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eGpRVUZqTEVOQlFVTXNUVUZCVFN4RFFVRkRMRVZCUVVVc1JVRkJSU3hOUVVGTkxFTkJRVU03UTBGQlFTeERRVUZETzBGQlEyaEdMRWxCUVUwc1YwRkJWeXhIUVVGSExGVkJRVU1zVFVGQlRUdFhRVUZMTEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNUVUZCVFN4RFFVRkRMRVZCUVVVc1EwRkJRenREUVVGQkxFTkJRVU03UVVGRGVrVXNTVUZCVFN4VlFVRlZMRWRCUVVjc1ZVRkJReXhMUVVGTE8xZEJRVTA3UVVGRE0wSXNZVUZCU3l4RlFVRkZMRXRCUVVzN1FVRkRXaXhyUWtGQlZTeEZRVUZGTEVsQlFVazdRVUZEYUVJc1ZVRkJSU3hGUVVGRkxFdEJRVXNzUTBGQlF5eEZRVUZGTzBGQlExb3NaMEpCUVZFc1JVRkJSU3haUVVGWk8wRkJRM1JDTEdWQlFVOHNSVUZCUlN4WFFVRlhPMEZCUTNCQ0xHZENRVUZSTEVWQlFVVXNVMEZCVXp0TFFVTjBRanREUVVGRExFTkJRVU03TzBsQlJXdENMRXRCUVVzN1kwRkJUQ3hMUVVGTE96dEJRVU4wUWl4aFFVUnBRaXhMUVVGTExFTkJRMVlzUzBGQlN5eEZRVUZGT3poQ1FVUkdMRXRCUVVzN08zRkVRVVZzUWl4dFFrRkJUU3hMUVVGTExFTkJRVU03TzBGQlExb3NZMEZCU3l4aFFVRmhMRWRCUVVjc1JVRkJSU3hEUVVGRE8wRkJRM2hDTEdOQlFVc3NaMEpCUVdkQ0xFZEJRVWNzUTBGQlF5eERRVUZET3p0TFFVTTNRanM3UVVGTVowSXNVMEZCU3l4WFFVOTBRaXhIUVVGSExHZENRVUZETEV0QlFVc3NSVUZCUlN4UFFVRlBMRVZCUVVVN1FVRkRhRUlzV1VGQlNTeFBRVUZQTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhGUVVGRk8wRkJRelZDTERoQ1FVRk5MRWRCUVVjc1MwRkJRU3hQUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzBGQlEycENMR2RDUVVGSkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdVMEZEWml4TlFVRk5PMEZCUTBnc1owSkJRVTBzVFVGQlRTeEhRVUZITEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03UVVGRGJrTXNaMEpCUVVrc1RVRkJUU3hGUVVGRk8wRkJRMUlzYjBKQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03WVVGRGRFSTdVMEZEU2p0TFFVTktPenM3T3pzN1FVRnFRbWRDTEZOQlFVc3NWMEZ6UW5SQ0xFbEJRVWtzYVVKQlFVTXNUVUZCVFN4RlFVRkZPMEZCUTFRc1dVRkJUU3hsUVVGbExFZEJRVWNzVFVGQlRTeERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRPMEZCUTNwRExGbEJRVWtzVTBGQlV5eEhRVUZITEVWQlFVVXNRMEZCUXp0QlFVTnVRaXhaUVVGSkxGbEJRVmtzUjBGQlJ5eExRVUZMT3pzN1FVRkJReXhCUVVkNlFpeGhRVUZMTEVsQlFVa3NSMEZCUnl4SlFVRkpMR1ZCUVdVc1EwRkJReXhOUVVGTkxFVkJRVVU3UVVGRGNFTXNaMEpCUVVrc1pVRkJaU3hEUVVGRExFMUJRVTBzUTBGQlF5eGpRVUZqTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEdOQlFXTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSVHRCUVVOb1JpeDVRa0ZCVXl4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExHVkJRV1VzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1FVRkROME1zTkVKQlFWa3NSMEZCUnl4SlFVRkpMRU5CUVVNN1lVRkRka0k3VTBGRFNqczdRVUZGUkN4WlFVRkpMRmxCUVZrc1JVRkJSVHRCUVVOa0xHZENRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1RVRkJUU3hGUVVGRkxGTkJRVk1zUlVGQlJTeERRVUZETEVOQlFVTTdVMEZEYmtNN08wRkJSVVFzWlVGQlR5eGxRVUZsTEVOQlFVTXNSMEZCUnl4RFFVRkRMRlZCUVZVc1EwRkJReXhKUVVGSkxFVkJRVVVzWlVGQlpTeERRVUZETEVOQlFVTXNRMEZCUXp0TFFVTnFSVHM3T3pzN096czdRVUY0UTJkQ0xGTkJRVXNzVjBGcFJIUkNMRXRCUVVzc2EwSkJRVU1zVFVGQlRTeEZRVUZGTzBGQlExWXNNRUpCUVUwc1MwRkJTeXhMUVVGQkxFMUJRVVVzUTBGQlF6czdRVUZGWkN4WlFVRkpMRTFCUVUwc1JVRkJSVHRCUVVOU0xHZENRVUZOTEZkQlFWY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzBGQlEzUkRMSFZDUVVGWExFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTTdPMEZCUlhCQ0xHMUNRVUZQTEZkQlFWY3NRMEZCUXp0VFFVTjBRaXhOUVVGTk8wRkJRMGdzYVVKQlFVc3NTVUZCU1N4SFFVRkhMRWxCUVVrc1NVRkJTU3hEUVVGRExHRkJRV0VzUlVGQlJUdEJRVU5vUXl4dlFrRkJTU3hKUVVGSkxFTkJRVU1zWVVGQllTeERRVUZETEdOQlFXTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSVHRCUVVONFF5eDNRa0ZCVFN4UFFVRk5MRWRCUVVjc1NVRkJTU3hEUVVGRExHRkJRV0VzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0QlFVTjJReXgzUWtGQlNTeERRVUZETEU5QlFVMHNRMEZCUXl4UlFVRlJMRVZCUVVVN1FVRkRiRUlzSzBKQlFVMHNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJRenR4UWtGRGJFSTdhVUpCUTBvN1lVRkRTanRUUVVOS096dEJRVVZFTEdWQlFVOHNTVUZCU1N4RFFVRkRPMHRCUTJZN08wRkJja1ZuUWl4VFFVRkxMRmRCZFVWMFFpeEpRVUZKTEcxQ1FVRkhPMEZCUTBnc01FSkJRVTBzU1VGQlNTeExRVUZCTEUxQlFVVXNRMEZCUXpzN1FVRkZZaXhoUVVGTExFbEJRVWtzUjBGQlJ5eEpRVUZKTEVsQlFVa3NRMEZCUXl4aFFVRmhMRVZCUVVVN1FVRkRhRU1zWjBKQlFVa3NTVUZCU1N4RFFVRkRMR0ZCUVdFc1EwRkJReXhqUVVGakxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVTdRVUZEZUVNc2IwSkJRVWtzUTBGQlF5eGhRVUZoTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU03WVVGRGJFTTdVMEZEU2pzN1FVRkZSQ3hsUVVGUExFbEJRVWtzUTBGQlF6dExRVU5tT3p0QlFXcEdaMElzVTBGQlN5eFhRVzFHZEVJc1ZVRkJWU3gxUWtGQlF5eExRVUZMTEVWQlFVVXNWVUZCVlN4RlFVRkZMRTlCUVU4c1JVRkJSVHRCUVVOdVF5eGhRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEZsQlFWa3NSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRCUVVONFF5eG5Ra0ZCVFN4SFFVRkhMRWRCUVVjc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0QlFVTTVRaXhuUWtGQlRTeExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dEJRVU12UWl4blFrRkJUU3hOUVVGTkxFZEJRVWNzUzBGQlN5eERRVUZETEZWQlFWVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1lVRkJZU3hEUVVGRExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhMUVVGTExFTkJRVU03UVVGREwwVXNaMEpCUVVrc1ZVRkJWU3hIUVVGSExFdEJRVXNzUTBGQlF5eFZRVUZWTEVkQlFVY3NUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eFBRVUZQTEVkQlFVY3NTMEZCU3l4RFFVRkRMRTlCUVU4c1EwRkJRenM3UVVGRkwwVXNaMEpCUVVrc1RVRkJUU3hEUVVGRExGVkJRVlVzUlVGQlJUdEJRVU51UWl3d1FrRkJWU3hIUVVGSExFMUJRVTBzUTBGQlF5eFZRVUZWTEVWQlFVVXNRMEZCUXp0aFFVTndRenM3UVVGRlJDeHBRa0ZCU3l4RFFVRkRMRTlCUVU4c1IwRkJSeXhWUVVGVkxFTkJRVU03VTBGRE9VSTdPMEZCUlVRc1pVRkJUeXhyUWtGQlRTeFZRVUZWTEV0QlFVRXNUMEZCUXl4TFFVRkxMRVZCUVVVc1ZVRkJWU3hGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZETzB0QlEzWkVPenM3T3pzN096dEJRV3hIWjBJc1UwRkJTeXhYUVRCSGRFSXNZMEZCWXl3eVFrRkJReXhGUVVGRkxFVkJRVVVzVFVGQlRTeEZRVUZGTzBGQlEzWkNMRmxCUVVrc1EwRkJReXhoUVVGaExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NUVUZCVFN4RFFVRkRPMEZCUTJoRExGbEJRVWtzUTBGQlF5eG5Ra0ZCWjBJc1JVRkJSU3hEUVVGRE96dEJRVVY0UWl4aFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NUVUZCVFN4RFFVRkRMRmxCUVZrc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdEJRVU14UXl4blFrRkJUU3hIUVVGSExFZEJRVWNzVFVGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRCUVVOb1F5eG5Ra0ZCVFN4WFFVRlhMRWRCUVVjc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0QlFVTjJReXhuUWtGQlRTeExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU03T3p0QlFVRkRMRUZCUnk5Q0xIVkNRVUZYTEVOQlFVTXNVVUZCVVN4SFFVRkhMRXRCUVVzc1EwRkJReXhSUVVGUkxFTkJRVU03UVVGRGRFTXNkVUpCUVZjc1EwRkJReXhQUVVGUExFZEJRVWNzUzBGQlN5eERRVUZETEU5QlFVODdPenRCUVVGRExFRkJSM0JETEdkQ1FVRkpMRTFCUVUwc1EwRkJReXhMUVVGTExFbEJRVWtzUzBGQlN5eERRVUZETEZWQlFWVXNSVUZCUlR0QlFVTnNReXh6UWtGQlRTeERRVUZETEZWQlFWVXNSMEZCUnl4clEwRkJiVUlzU1VGQlNTeERRVUZETEdGQlFXRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNUVUZCVFN4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRE8yRkJRemRHT3p0QlFVVkVMR2xDUVVGTExFTkJRVU1zVDBGQlR5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1FVRkRja0lzYVVKQlFVc3NRMEZCUXl4VlFVRlZMRWRCUVVjc1MwRkJTeXhEUVVGRExFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTTdVMEZETTBNN08wRkJSVVFzV1VGQlNTeEpRVUZKTEVOQlFVTXNaMEpCUVdkQ0xFVkJRVVU3UVVGRGRrSXNPRUpCUVUwc1MwRkJTeXhMUVVGQkxFMUJRVVVzUTBGQlF6dFRRVU5xUWp0TFFVTktPenM3T3pzN08wRkJia2xuUWl4VFFVRkxMRmRCTUVsMFFpeG5Ra0ZCWjBJc05rSkJRVU1zUlVGQlJTeEZRVUZGTzBGQlEycENMRmxCUVUwc1RVRkJUU3hIUVVGSExFbEJRVWtzUTBGQlF5eGhRVUZoTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN08wRkJSWFJETEZsQlFVa3NUVUZCVFN4RlFVRkZPMEZCUTFJc2FVSkJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhOUVVGTkxFTkJRVU1zV1VGQldTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMEZCUXpGRExHOUNRVUZOTEVkQlFVY3NSMEZCUnl4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBGQlEyaERMRzlDUVVGTkxFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8wRkJReTlDTEc5Q1FVRk5MRmRCUVZjc1IwRkJSeXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEU5QlFVOHNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenM3UVVGRk9VTXNiMEpCUVVrc1YwRkJWeXhMUVVGTExFTkJRVU1zUTBGQlF5eEZRVUZGTzBGQlEzQkNMSGxDUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEUxQlFVMHNRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRGNrTXNlVUpCUVVzc1EwRkJReXhWUVVGVkxFVkJRVVVzUTBGQlF6dHBRa0ZEZEVJN1lVRkRTanM3UVVGRlJDeHRRa0ZCVHl4SlFVRkpMRU5CUVVNc1lVRkJZU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzBGQlF6bENMR2RDUVVGSkxFTkJRVU1zWjBKQlFXZENMRVZCUVVVc1EwRkJRenRUUVVNelFqczdRVUZGUkN4WlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExHZENRVUZuUWl4SlFVRkpMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVU3UVVGRGVrTXNPRUpCUVUwc1NVRkJTU3hMUVVGQkxFMUJRVVVzUTBGQlF6dFRRVU5vUWp0TFFVTktPenRCUVdoTFowSXNVMEZCU3l4WFFXdExkRUlzWlVGQlpTdzRRa0ZCUnp0QlFVTmtMRFJDUVVOUExHdENRVUZOTEdWQlFXVXNTMEZCUVN4TlFVRkZPMEZCUXpGQ0xHMUNRVUZQTEVWQlFVVXNSVUZCUlR0QlFVTllMSE5DUVVGVkxFVkJRVVVzUTBGQlF6dFhRVU5tTzB0QlEwdzdPMWRCZUV0blFpeExRVUZMT3pzN2EwSkJRVXdzUzBGQlN5SXNJbVpwYkdVaU9pSkJZM1J2Y2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRGQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0JCWTNScGIyNGdabkp2YlNBbkxpNHZZV04wYVc5dWN5OUJZM1JwYjI0bk8xeHVhVzF3YjNKMElHZGxibVZ5WVhSbFFteGxibVJEZFhKMlpTQm1jbTl0SUNjdUwybHVZeTluWlc1bGNtRjBaUzFpYkdWdVpDMWpkWEoyWlNjN1hHNWNiaThxWEc0Z0lDQWdUV1YwYUc5a2N5QmhibVFnY0hKdmNHVnlkR2xsY3lCMGJ5QmhaR1FnZEc4Z1ltOTFibVFnUVdOMGFXOXVjMXh1S2k5Y2JtTnZibk4wSUdKdmRXNWtUMjVUZEdGeWRDQTlJQ2hoWTNScGIyNHBJRDArSUdGamRHbHZiaTVoWTNSdmNpNWhZM1JwZG1GMFpVRmpkR2x2YmloaFkzUnBiMjR1YVdRc0lHRmpkR2x2YmlrN1hHNWpiMjV6ZENCaWIzVnVaRTl1VTNSdmNDQTlJQ2hoWTNScGIyNHBJRDArSUdGamRHbHZiaTVoWTNSdmNpNWtaV0ZqZEdsMllYUmxRV04wYVc5dUtHRmpkR2x2Ymk1cFpDazdYRzVqYjI1emRDQmliM1Z1WkZCeWIzQnpJRDBnS0dGamRHOXlLU0E5UGlBb2UxeHVJQ0FnSUdGamRHOXlPaUJoWTNSdmNpeGNiaUFnSUNCcGMxQnlhVzl5YVhSNU9pQjBjblZsTEZ4dUlDQWdJRzl1T2lCaFkzUnZjaTV2Yml4Y2JpQWdJQ0JmYjI1VGRHRnlkRG9nWW05MWJtUlBibE4wWVhKMExGeHVJQ0FnSUY5dmJsTjBiM0E2SUdKdmRXNWtUMjVUZEc5d0xGeHVJQ0FnSUc5dVVtVnVaR1Z5T2lCMWJtUmxabWx1WldSY2JuMHBPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JqYkdGemN5QkJZM1J2Y2lCbGVIUmxibVJ6SUVGamRHbHZiaUI3WEc0Z0lDQWdZMjl1YzNSeWRXTjBiM0lvY0hKdmNITXBJSHRjYmlBZ0lDQWdJQ0FnYzNWd1pYSW9jSEp2Y0hNcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1GamRHbDJaVUZqZEdsdmJuTWdQU0I3ZlR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV1ZFcxQlkzUnBkbVZCWTNScGIyNXpJRDBnTUR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J6WlhRb2NISnZjSE1zSUdsdWMzUmhiblFwSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLR2x1YzNSaGJuUWdmSHdnSVhSb2FYTXVZbVZvWVhacGIzVnlLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnpkWEJsY2k1elpYUW9jSEp2Y0hNcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXZibU5sS0NrN1hHNGdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQmhZM1JwYjI0Z1BTQjBhR2x6TG5KbFpIVmpaWElvY0hKdmNITXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLR0ZqZEdsdmJpa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWMzUmhjblFvWVdOMGFXOXVLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lDOHFYRzRnSUNBZ0lDQWdJRUpwYm1RZ1FXTjBhVzl1SUhSdklFRmpkRzl5WEc0Z0lDQWdLaTljYmlBZ0lDQmlhVzVrS0dGamRHbHZiaWtnZTF4dUlDQWdJQ0FnSUNCamIyNXpkQ0JwYm1obGNtbDBaV1JCWTNScGIyNGdQU0JoWTNScGIyNHVhVzVvWlhKcGRDZ3BPMXh1SUNBZ0lDQWdJQ0JzWlhRZ2JtVjNWbUZzZFdWeklEMGdlMzA3WEc0Z0lDQWdJQ0FnSUd4bGRDQm9ZWE5PWlhkV1lXeDFaWE1nUFNCbVlXeHpaVHRjYmx4dUlDQWdJQ0FnSUNBdkx5QkRjbVZoZEdVZ2RtRnNkV1Z6SUc5dUlHRmpkRzl5SUhSb1lYUWdaRzl1SjNRZ1pYaHBjM1JjYmlBZ0lDQWdJQ0FnWm05eUlDaHNaWFFnYTJWNUlHbHVJR2x1YUdWeWFYUmxaRUZqZEdsdmJpNTJZV3gxWlhNcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaHBibWhsY21sMFpXUkJZM1JwYjI0dWRtRnNkV1Z6TG1oaGMwOTNibEJ5YjNCbGNuUjVLR3RsZVNrZ0ppWWdJWFJvYVhNdWRtRnNkV1Z6TG1oaGMwOTNibEJ5YjNCbGNuUjVLR3RsZVNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnVaWGRXWVd4MVpYTmJhMlY1WFNBOUlHbHVhR1Z5YVhSbFpFRmpkR2x2Ymk1MllXeDFaWE5iYTJWNVhUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQm9ZWE5PWlhkV1lXeDFaWE1nUFNCMGNuVmxPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnYVdZZ0tHaGhjMDVsZDFaaGJIVmxjeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1elpYUW9leUIyWVd4MVpYTTZJRzVsZDFaaGJIVmxjeUI5S1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnBibWhsY21sMFpXUkJZM1JwYjI0dWMyVjBLR0p2ZFc1a1VISnZjSE1vZEdocGN5d2dhVzVvWlhKcGRHVmtRV04wYVc5dUtTazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5cGNiaUFnSUNBZ0lDQWdVM1JoY25RZ1FXTjBiM0pjYmx4dUlDQWdJQ0FnSUNCSlppQkJZM1JwYjI0Z2FYTWdjSEp2ZG1sa1pXUXNJR0pwYm1RZ2FYUWdkRzhnZEdocGN5QkJZM1J2Y2lCaGJtUWdjM1JoY25SY2JseHVJQ0FnSUNBZ0lDQkFjR0Z5WVcwZ0tHOXdkR2x2Ym1Gc0tTQmJRV04wYVc5dVhWeHVJQ0FnSUNvdlhHNGdJQ0FnYzNSaGNuUW9ZV04wYVc5dUtTQjdYRzRnSUNBZ0lDQWdJSE4xY0dWeUxuTjBZWEowS0NrN1hHNWNiaUFnSUNBZ0lDQWdhV1lnS0dGamRHbHZiaWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ1ltOTFibVJCWTNScGIyNGdQU0IwYUdsekxtSnBibVFvWVdOMGFXOXVLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHSnZkVzVrUVdOMGFXOXVMbk4wWVhKMEtDazdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCaWIzVnVaRUZqZEdsdmJqdGNiaUFnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUIwYUdsekxtRmpkR2wyWlVGamRHbHZibk1wSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9kR2hwY3k1aFkzUnBkbVZCWTNScGIyNXpMbWhoYzA5M2JsQnliM0JsY25SNUtHdGxlU2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ1lXTjBhVzl1SUQwZ2RHaHBjeTVoWTNScGRtVkJZM1JwYjI1elcydGxlVjA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2doWVdOMGFXOXVMbWx6UVdOMGFYWmxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JoWTNScGIyNHVjM1JoY25Rb0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNBZ0lIMWNibHh1SUNBZ0lITjBiM0FvS1NCN1hHNGdJQ0FnSUNBZ0lITjFjR1Z5TG5OMGIzQW9LVHRjYmx4dUlDQWdJQ0FnSUNCbWIzSWdLR3hsZENCclpYa2dhVzRnZEdocGN5NWhZM1JwZG1WQlkzUnBiMjV6S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RHaHBjeTVoWTNScGRtVkJZM1JwYjI1ekxtaGhjMDkzYmxCeWIzQmxjblI1S0d0bGVTa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtRmpkR2wyWlVGamRHbHZibk5iYTJWNVhTNXpkRzl3S0NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjenRjYmlBZ0lDQjlYRzVjYmlBZ0lDQjNhV3hzVW1WdVpHVnlLR0ZqZEc5eUxDQm1jbUZ0WlZOMFlXMXdMQ0JsYkdGd2MyVmtLU0I3WEc0Z0lDQWdJQ0FnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z2RHaHBjeTV1ZFcxV1lXeDFaVXRsZVhNN0lHa3JLeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2EyVjVJRDBnZEdocGN5NTJZV3gxWlV0bGVYTmJhVjA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCMllXeDFaU0E5SUhSb2FYTXVkbUZzZFdWelcydGxlVjA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCa2NtbDJaWElnUFNCMllXeDFaUzV1ZFcxRWNtbDJaWEp6SUQ4Z2RHaHBjeTVoWTNScGRtVkJZM1JwYjI1elczWmhiSFZsTG1SeWFYWmxjbk5iTUYxZElEb2dabUZzYzJVN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JzWlhRZ2JtVjNRM1Z5Y21WdWRDQTlJSFpoYkhWbExtNTFiVVJ5YVhabGNuTWdQeUJrY21sMlpYSXVkbUZzZFdWelcydGxlVjB1WTNWeWNtVnVkQ0E2SUhaaGJIVmxMbU4xY25KbGJuUTdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hrY21sMlpYSXVZbXhsYm1SRGRYSjJaU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUc1bGQwTjFjbkpsYm5RZ1BTQmtjbWwyWlhJdVlteGxibVJEZFhKMlpTZ3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNCMllXeDFaUzVqZFhKeVpXNTBJRDBnYm1WM1EzVnljbVZ1ZER0Y2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnpkWEJsY2k1M2FXeHNVbVZ1WkdWeUtHRmpkRzl5TENCbWNtRnRaVk4wWVcxd0xDQmxiR0Z3YzJWa0tUdGNiaUFnSUNCOVhHNWNiaUFnSUNBdktseHVJQ0FnSUNBZ0lDQkJaR1FnWVdOMGFYWmxJR0ZqZEdsdmJuTmNibHh1SUNBZ0lDQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMWNiaUFnSUNBZ0lDQWdRSEJoY21GdElGdEJZM1JwYjI1ZFhHNGdJQ0FnS2k5Y2JpQWdJQ0JoWTNScGRtRjBaVUZqZEdsdmJpaHBaQ3dnWVdOMGFXOXVLU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZV04wYVhabFFXTjBhVzl1YzF0cFpGMGdQU0JoWTNScGIyNDdYRzRnSUNBZ0lDQWdJSFJvYVhNdWJuVnRRV04wYVhabFFXTjBhVzl1Y3lzck8xeHVYRzRnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnWVdOMGFXOXVMbTUxYlZaaGJIVmxTMlY1Y3pzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCclpYa2dQU0JoWTNScGIyNHVkbUZzZFdWTFpYbHpXMmxkTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ1lXTjBhVzl1Vm1Gc2RXVWdQU0JoWTNScGIyNHVkbUZzZFdWelcydGxlVjA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCMllXeDFaU0E5SUhSb2FYTXVkbUZzZFdWelcydGxlVjA3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUZCaGMzTWdRV04wYjNJZ2RtRnNkV1VnY0hKdmNHVnlkR2xsY3lCMGJ5QkJZM1JwYjI1Y2JpQWdJQ0FnSUNBZ0lDQWdJR0ZqZEdsdmJsWmhiSFZsTG5abGJHOWphWFI1SUQwZ2RtRnNkV1V1ZG1Wc2IyTnBkSGs3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmhZM1JwYjI1V1lXeDFaUzVqZFhKeVpXNTBJRDBnZG1Gc2RXVXVZM1Z5Y21WdWREdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdTV1lnZDJVbmNtVWdZbXhsYm1ScGJtY2dkR2hwY3lCaFkzUnBiMjRzSUdGdVpDQjBhR1Z5WlNkeklHOXVJR0ZzY21WaFpIa2dhVzRnY0hKdlozSmxjM05jYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hoWTNScGIyNHVZbXhsYm1RZ0ppWWdkbUZzZFdVdWJuVnRSSEpwZG1WeWN5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR0ZqZEdsdmJpNWliR1Z1WkVOMWNuWmxJRDBnWjJWdVpYSmhkR1ZDYkdWdVpFTjFjblpsS0hSb2FYTXVZV04wYVhabFFXTjBhVzl1YzF0MllXeDFaUzVrY21sMlpYSnpXekJkWFN3Z1lXTjBhVzl1TENCclpYa3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNCMllXeDFaUzVrY21sMlpYSnpJRDBnVzJsa1hUdGNiaUFnSUNBZ0lDQWdJQ0FnSUhaaGJIVmxMbTUxYlVSeWFYWmxjbk1nUFNCMllXeDFaUzVrY21sMlpYSnpMbXhsYm1kMGFEdGNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUdsbUlDaDBhR2x6TG01MWJVRmpkR2wyWlVGamRHbHZibk1wSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSE4xY0dWeUxuTjBZWEowS0NrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNBdktseHVJQ0FnSUNBZ0lDQlNaVzF2ZG1VZ1lXTjBhWFpsSUdGamRHbHZibk5jYmx4dUlDQWdJQ0FnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDFjYmlBZ0lDQXFMMXh1SUNBZ0lHUmxZV04wYVhaaGRHVkJZM1JwYjI0b2FXUXBJSHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdZV04wYVc5dUlEMGdkR2hwY3k1aFkzUnBkbVZCWTNScGIyNXpXMmxrWFR0Y2JseHVJQ0FnSUNBZ0lDQnBaaUFvWVdOMGFXOXVLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQm1iM0lnS0d4bGRDQnBJRDBnTURzZ2FTQThJR0ZqZEdsdmJpNXVkVzFXWVd4MVpVdGxlWE03SUdrckt5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElHdGxlU0E5SUdGamRHbHZiaTUyWVd4MVpVdGxlWE5iYVYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnZG1Gc2RXVWdQU0IwYUdsekxuWmhiSFZsYzF0clpYbGRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElHUnlhWFpsY2tsdVpHVjRJRDBnZG1Gc2RXVXVaSEpwZG1WeWN5NXBibVJsZUU5bUtHbGtLVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDaGtjbWwyWlhKSmJtUmxlQ0FoUFQwZ0xURXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnNkV1V1WkhKcGRtVnljeTV6Y0d4cFkyVW9aSEpwZG1WeVNXNWtaWGdzSURFcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IyWVd4MVpTNXVkVzFFY21sMlpYSnpMUzA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQmtaV3hsZEdVZ2RHaHBjeTVoWTNScGRtVkJZM1JwYjI1elcybGtYVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11Ym5WdFFXTjBhWFpsUVdOMGFXOXVjeTB0TzF4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdhV1lnS0NGMGFHbHpMbTUxYlVGamRHbDJaVUZqZEdsdmJuTWdKaVlnZEdocGN5NXBjMEZqZEdsMlpTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2MzVndaWEl1YzNSdmNDZ3BPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVnh1WEc0Z0lDQWdaMlYwUkdWbVlYVnNkRlpoYkhWbEtDa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0xpNHVjM1Z3WlhJdVoyVjBSR1ZtWVhWc2RGWmhiSFZsS0Nrc1hHNGdJQ0FnSUNBZ0lDQWdJQ0JrY21sMlpYSnpPaUJiWFN4Y2JpQWdJQ0FnSUNBZ0lDQWdJRzUxYlVSeWFYWmxjbk02SURCY2JpQWdJQ0FnSUNBZ2ZUdGNiaUFnSUNCOVhHNTlJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rvci9BY3Rvci5qc1xuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9BY3Rpb24yID0gcmVxdWlyZSgnLi9BY3Rpb24nKTtcblxudmFyIF9BY3Rpb24zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQWN0aW9uMik7XG5cbnZhciBfcHJlc2V0RWFzaW5nID0gcmVxdWlyZSgnLi9lYXNpbmcvcHJlc2V0LWVhc2luZycpO1xuXG52YXIgX3ByZXNldEVhc2luZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmVzZXRFYXNpbmcpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIENPVU5UID0gJ0NvdW50JztcbnZhciBORVhUX1NURVBTID0ge1xuICAgIGxvb3A6ICdyZXN0YXJ0JyxcbiAgICB5b3lvOiAncmV2ZXJzZScsXG4gICAgZmxpcDogJ2ZsaXBWYWx1ZXMnXG59O1xuXG52YXIgVHdlZW4gPSAoZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgICBfaW5oZXJpdHMoVHdlZW4sIF9BY3Rpb24pO1xuXG4gICAgZnVuY3Rpb24gVHdlZW4oKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUd2Vlbik7XG5cbiAgICAgICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfVxuXG4gICAgVHdlZW4ucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICAgIF9BY3Rpb24ucHJvdG90eXBlLnN0YXJ0LmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMuZWxhcHNlZCA9IDA7XG4gICAgICAgIHRoaXMuZmxpcENvdW50ID0gdGhpcy55b3lvQ291bnQgPSB0aGlzLmxvb3BDb3VudCA9IDA7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIFR3ZWVuLnByb3RvdHlwZS5vblVwZGF0ZSA9IGZ1bmN0aW9uIG9uVXBkYXRlKHR3ZWVuLCBmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgICAgIHZhciBwcm9ncmVzc1RhcmdldCA9IHRoaXMucGxheURpcmVjdGlvbiA9PT0gMSA/IDEgOiAwO1xuXG4gICAgICAgIHRoaXMuZW5kZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmVsYXBzZWQgKz0gZWxhcHNlZCAqIHRoaXMuZGlsYXRlICogdGhpcy5wbGF5RGlyZWN0aW9uO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMudmFsdWVLZXlzW2ldO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcblxuICAgICAgICAgICAgdmFyIHByb2dyZXNzID0gKDAsIF9jYWxjLnJlc3RyaWN0KSgoMCwgX2NhbGMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUpKHRoaXMuZWxhcHNlZCAtIHZhbHVlLmRlbGF5LCAwLCB2YWx1ZS5kdXJhdGlvbiksIDAsIDEpO1xuXG4gICAgICAgICAgICAvLyBNYXJrIFR3ZWVuIGFzIE5PVCBlbmRlZCBpZiBzdGlsbCBpbiBwcm9ncmVzc1xuICAgICAgICAgICAgaWYgKHByb2dyZXNzICE9PSBwcm9ncmVzc1RhcmdldCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5kZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU3RlcCBwcm9ncmVzcyBpZiB3ZSdyZSBzdGVwcGluZ1xuICAgICAgICAgICAgaWYgKHZhbHVlLnN0ZXBzKSB7XG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3MgPSAoMCwgX2NhbGMuc3RlcFByb2dyZXNzKShwcm9ncmVzcywgdmFsdWUuc3RlcHMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBFYXNlIHByb2dyZXNzXG4gICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gKDAsIF9jYWxjLmVhc2UpKHByb2dyZXNzLCB2YWx1ZS5mcm9tLCB2YWx1ZS50bywgdmFsdWUuZWFzZSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgVHdlZW4ucHJvdG90eXBlLm9uRnJhbWVFbmQgPSBmdW5jdGlvbiBvbkZyYW1lRW5kKCkge1xuICAgICAgICBpZiAodGhpcy5lbmRlZCkge1xuICAgICAgICAgICAgdmFyIHN0ZXBUYWtlbiA9IGZhbHNlO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gTkVYVF9TVEVQUykge1xuICAgICAgICAgICAgICAgIGlmIChORVhUX1NURVBTLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heFN0ZXBzID0gdGhpc1trZXldO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXhTdGVwcyA9PT0gdHJ1ZSB8fCAoMCwgX3V0aWxzLmlzTnVtKShtYXhTdGVwcykgJiYgbWF4U3RlcHMgPiB0aGlzW2tleSArIENPVU5UXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1trZXkgKyBDT1VOVF0rKztcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXBUYWtlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW05FWFRfU1RFUFNba2V5XV0oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFzdGVwVGFrZW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBUd2Vlbi5wcm90b3R5cGUuZmxpcFZhbHVlcyA9IGZ1bmN0aW9uIGZsaXBWYWx1ZXMoKSB7XG4gICAgICAgIHZhciB2YWx1ZXMgPSB0aGlzLnZhbHVlcztcblxuICAgICAgICB0aGlzLmVsYXBzZWQgPSB0aGlzLmR1cmF0aW9uIC0gdGhpcy5lbGFwc2VkO1xuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiB2YWx1ZXMpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHZhbHVlc1trZXldO1xuICAgICAgICAgICAgICAgIHZhciBfcmVmID0gW3ZhbHVlLmZyb20sIHZhbHVlLnRvXTtcbiAgICAgICAgICAgICAgICB2YWx1ZS50byA9IF9yZWZbMF07XG4gICAgICAgICAgICAgICAgdmFsdWUuZnJvbSA9IF9yZWZbMV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgVHdlZW4ucHJvdG90eXBlLnJldmVyc2UgPSBmdW5jdGlvbiByZXZlcnNlKCkge1xuICAgICAgICB0aGlzLnBsYXlEaXJlY3Rpb24gKj0gLTE7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBUd2Vlbi5wcm90b3R5cGUucmVzdGFydCA9IGZ1bmN0aW9uIHJlc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuZWxhcHNlZCA9IHRoaXMucGxheURpcmVjdGlvbiA9PT0gMSA/IDAgOiB0aGlzLmR1cmF0aW9uO1xuICAgICAgICB0aGlzLnN0YXJ0ZWQgPSAoMCwgX3V0aWxzLmN1cnJlbnRUaW1lKSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgVHdlZW4ucHJvdG90eXBlLnNlZWsgPSBmdW5jdGlvbiBzZWVrKHByb2dyZXNzKSB7XG4gICAgICAgIHRoaXMuc2Vla1RpbWUodGhpcy5kdXJhdGlvbiAqIHByb2dyZXNzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIFR3ZWVuLnByb3RvdHlwZS5zZWVrVGltZSA9IGZ1bmN0aW9uIHNlZWtUaW1lKGVsYXBzZWQpIHtcbiAgICAgICAgdGhpcy5vbmNlKCk7XG4gICAgICAgIHRoaXMuZWxhcHNlZCA9IGVsYXBzZWQ7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIFR3ZWVuLnByb3RvdHlwZS5nZXREZWZhdWx0UHJvcHMgPSBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgX0FjdGlvbi5wcm90b3R5cGUuZ2V0RGVmYXVsdFByb3BzLmNhbGwodGhpcyksIHtcbiAgICAgICAgICAgIGJsZW5kOiB0cnVlLFxuICAgICAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgICAgICBkaWxhdGU6IDEsXG4gICAgICAgICAgICBkdXJhdGlvbjogMzAwLFxuICAgICAgICAgICAgbG9vcDogZmFsc2UsXG4gICAgICAgICAgICB5b3lvOiBmYWxzZSxcbiAgICAgICAgICAgIGZsaXA6IGZhbHNlLFxuICAgICAgICAgICAgcGxheURpcmVjdGlvbjogMSxcbiAgICAgICAgICAgIGVuZGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGVsYXBzZWQ6IDBcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIFR3ZWVuLnByb3RvdHlwZS5nZXREZWZhdWx0VmFsdWUgPSBmdW5jdGlvbiBnZXREZWZhdWx0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgX0FjdGlvbi5wcm90b3R5cGUuZ2V0RGVmYXVsdFZhbHVlLmNhbGwodGhpcyksIHtcbiAgICAgICAgICAgIGRlbGF5OiAwLFxuICAgICAgICAgICAgZHVyYXRpb246IDMwMCxcbiAgICAgICAgICAgIGVhc2U6IF9wcmVzZXRFYXNpbmcyLmRlZmF1bHQuZWFzZU91dCxcbiAgICAgICAgICAgIGVsYXBzZWQ6IDAsXG4gICAgICAgICAgICBzdGFnZ2VyOiAwLFxuICAgICAgICAgICAgc3RlcHM6IDAsXG4gICAgICAgICAgICB0bzogMCxcbiAgICAgICAgICAgIHJvdW5kOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgVHdlZW4ucHJvdG90eXBlLmdldERlZmF1bHRWYWx1ZVByb3AgPSBmdW5jdGlvbiBnZXREZWZhdWx0VmFsdWVQcm9wKCkge1xuICAgICAgICByZXR1cm4gJ3RvJztcbiAgICB9O1xuXG4gICAgcmV0dXJuIFR3ZWVuO1xufSkoX0FjdGlvbjMuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFR3ZWVuO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMVIzWldWdUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN08wRkJWVUVzU1VGQlRTeExRVUZMTEVkQlFVY3NUMEZCVHl4RFFVRkRPMEZCUTNSQ0xFbEJRVTBzVlVGQlZTeEhRVUZITzBGQlEyWXNVVUZCU1N4RlFVRkZMRk5CUVZNN1FVRkRaaXhSUVVGSkxFVkJRVVVzVTBGQlV6dEJRVU5tTEZGQlFVa3NSVUZCUlN4WlFVRlpPME5CUTNKQ0xFTkJRVU03TzBsQlJXMUNMRXRCUVVzN1kwRkJUQ3hMUVVGTE96dGhRVUZNTEV0QlFVczdPRUpCUVV3c1MwRkJTenM3T3pzN1FVRkJUQ3hUUVVGTExGZEJRM1JDTEV0QlFVc3NiMEpCUVVjN1FVRkRTaXd3UWtGQlRTeExRVUZMTEV0QlFVRXNUVUZCUlN4RFFVRkRPMEZCUTJRc1dVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ5eERRVUZETEVOQlFVTTdRVUZEYWtJc1dVRkJTU3hEUVVGRExGTkJRVk1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNVMEZCVXl4SFFVRkhMRWxCUVVrc1EwRkJReXhUUVVGVExFZEJRVWNzUTBGQlF5eERRVUZET3p0QlFVVnlSQ3hsUVVGUExFbEJRVWtzUTBGQlF6dExRVU5tT3p0QlFWQm5RaXhUUVVGTExGZEJVM1JDTEZGQlFWRXNjVUpCUVVNc1MwRkJTeXhGUVVGRkxGVkJRVlVzUlVGQlJTeFBRVUZQTEVWQlFVVTdRVUZEYWtNc1dVRkJUU3hqUVVGakxFZEJRVWNzUVVGQlF5eEpRVUZKTEVOQlFVTXNZVUZCWVN4TFFVRkxMRU5CUVVNc1IwRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZET3p0QlFVVXhSQ3haUVVGSkxFTkJRVU1zUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXp0QlFVTnNRaXhaUVVGSkxFTkJRVU1zVDBGQlR5eEpRVUZKTEVGQlFVTXNUMEZCVHl4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWtzU1VGQlNTeERRVUZETEdGQlFXRXNRMEZCUXpzN1FVRkZOMFFzWVVGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eFpRVUZaTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1FVRkRlRU1zWjBKQlFVMHNSMEZCUnl4SFFVRkhMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdRVUZET1VJc1owSkJRVTBzUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03TzBGQlJTOUNMR2RDUVVGSkxGRkJRVkVzUjBGQlJ5eFZRUzlDZGtJc1VVRkJVU3hGUVN0Q2QwSXNWVUU1UW1oRExHOUNRVUZ2UWl4RlFUaENhVU1zU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4TFFVRkxMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU1zUlVGQlJTeExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6czdPMEZCUVVNc1FVRkhia2NzWjBKQlFVa3NVVUZCVVN4TFFVRkxMR05CUVdNc1JVRkJSVHRCUVVNM1FpeHZRa0ZCU1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhMUVVGTExFTkJRVU03WVVGRGRFSTdPenRCUVVGQkxFRkJSMFFzWjBKQlFVa3NTMEZCU3l4RFFVRkRMRXRCUVVzc1JVRkJSVHRCUVVOaUxIZENRVUZSTEVkQlFVY3NWVUYwUTNaQ0xGbEJRVmtzUlVGelEzZENMRkZCUVZFc1JVRkJSU3hMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdZVUZEYkVRN096dEJRVUZCTEVGQlIwUXNhVUpCUVVzc1EwRkJReXhQUVVGUExFZEJRVWNzVlVFM1EzaENMRWxCUVVrc1JVRTJRM2xDTEZGQlFWRXNSVUZCUlN4TFFVRkxMRU5CUVVNc1NVRkJTU3hGUVVGRkxFdEJRVXNzUTBGQlF5eEZRVUZGTEVWQlFVVXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xTkJRM0JGTzB0QlEwbzdPMEZCYkVOblFpeFRRVUZMTEZkQmIwTjBRaXhWUVVGVkxIbENRVUZITzBGQlExUXNXVUZCU1N4SlFVRkpMRU5CUVVNc1MwRkJTeXhGUVVGRk8wRkJRMW9zWjBKQlFVa3NVMEZCVXl4SFFVRkhMRXRCUVVzc1EwRkJRenM3UVVGRmRFSXNhVUpCUVVzc1NVRkJTU3hIUVVGSExFbEJRVWtzVlVGQlZTeEZRVUZGTzBGQlEzaENMRzlDUVVGSkxGVkJRVlVzUTBGQlF5eGpRVUZqTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVN1FVRkRhRU1zZDBKQlFVMHNVVUZCVVN4SFFVRkhMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6czdRVUZGTTBJc2QwSkJRVWtzVVVGQlVTeExRVUZMTEVsQlFVa3NTVUZCU3l4WFFUTkVlRUlzUzBGQlN5eEZRVEpFZVVJc1VVRkJVU3hEUVVGRExFbEJRVWtzVVVGQlVTeEhRVUZITEVsQlFVa3NRMEZCUXl4SFFVRkhMRWRCUVVjc1MwRkJTeXhEUVVGRExFRkJRVU1zUlVGQlJUdEJRVU40UlN3MFFrRkJTU3hEUVVGRExFZEJRVWNzUjBGQlJ5eExRVUZMTEVOQlFVTXNSVUZCUlN4RFFVRkRPMEZCUTNCQ0xHbERRVUZUTEVkQlFVY3NTVUZCU1N4RFFVRkRPMEZCUTJwQ0xEUkNRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF6dHhRa0ZETTBJN2FVSkJRMG83WVVGRFNqczdRVUZGUkN4blFrRkJTU3hEUVVGRExGTkJRVk1zUlVGQlJUdEJRVU5hTEc5Q1FVRkpMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU03WVVGRFpqdFRRVU5LTzB0QlEwbzdPMEZCZUVSblFpeFRRVUZMTEZkQk1FUjBRaXhWUVVGVkxIbENRVUZITzBGQlExUXNXVUZCVFN4TlFVRk5MRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF6czdRVUZGTTBJc1dVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ5eEpRVUZKTEVOQlFVTXNVVUZCVVN4SFFVRkhMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU03TzBGQlJUVkRMR0ZCUVVzc1NVRkJTU3hIUVVGSExFbEJRVWtzVFVGQlRTeEZRVUZGTzBGQlEzQkNMR2RDUVVGSkxFMUJRVTBzUTBGQlF5eGpRVUZqTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVN1FVRkROVUlzYjBKQlFVMHNTMEZCU3l4SFFVRkhMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6c3lRa0ZEUkN4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFVkJRVVVzUzBGQlN5eERRVUZETEVWQlFVVXNRMEZCUXp0QlFVRTVReXh4UWtGQlN5eERRVUZETEVWQlFVVTdRVUZCUlN4eFFrRkJTeXhEUVVGRExFbEJRVWs3WVVGRGVFSTdVMEZEU2pzN1FVRkZSQ3hsUVVGUExFbEJRVWtzUTBGQlF6dExRVU5tT3p0QlFYWkZaMElzVTBGQlN5eFhRWGxGZEVJc1QwRkJUeXh6UWtGQlJ6dEJRVU5PTEZsQlFVa3NRMEZCUXl4aFFVRmhMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRGVrSXNaVUZCVHl4SlFVRkpMRU5CUVVNN1MwRkRaanM3UVVFMVJXZENMRk5CUVVzc1YwRTRSWFJDTEU5QlFVOHNjMEpCUVVjN1FVRkRUaXhaUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEVGQlFVTXNTVUZCU1N4RFFVRkRMR0ZCUVdFc1MwRkJTeXhEUVVGRExFZEJRVWtzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNN1FVRkRPVVFzV1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4WFFTOUdaQ3hYUVVGWExFZEJLMFpuUWl4RFFVRkRPMEZCUXpkQ0xHVkJRVThzU1VGQlNTeERRVUZETzB0QlEyWTdPMEZCYkVablFpeFRRVUZMTEZkQmIwWjBRaXhKUVVGSkxHbENRVUZETEZGQlFWRXNSVUZCUlR0QlFVTllMRmxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNSMEZCUnl4UlFVRlJMRU5CUVVNc1EwRkJRenRCUVVONFF5eGxRVUZQTEVsQlFVa3NRMEZCUXp0TFFVTm1PenRCUVhaR1owSXNVMEZCU3l4WFFYbEdkRUlzVVVGQlVTeHhRa0ZCUXl4UFFVRlBMRVZCUVVVN1FVRkRaQ3haUVVGSkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdRVUZEV2l4WlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFOUJRVThzUTBGQlF6czdRVUZGZGtJc1pVRkJUeXhKUVVGSkxFTkJRVU03UzBGRFpqczdRVUU1Um1kQ0xGTkJRVXNzVjBGblIzUkNMR1ZCUVdVc09FSkJRVWM3UVVGRFpDdzBRa0ZEVHl4clFrRkJUU3hsUVVGbExFdEJRVUVzVFVGQlJUdEJRVU14UWl4cFFrRkJTeXhGUVVGRkxFbEJRVWs3UVVGRFdDeHBRa0ZCU3l4RlFVRkZMRU5CUVVNN1FVRkRVaXhyUWtGQlRTeEZRVUZGTEVOQlFVTTdRVUZEVkN4dlFrRkJVU3hGUVVGRkxFZEJRVWM3UVVGRFlpeG5Ra0ZCU1N4RlFVRkZMRXRCUVVzN1FVRkRXQ3huUWtGQlNTeEZRVUZGTEV0QlFVczdRVUZEV0N4blFrRkJTU3hGUVVGRkxFdEJRVXM3UVVGRFdDeDVRa0ZCWVN4RlFVRkZMRU5CUVVNN1FVRkRhRUlzYVVKQlFVc3NSVUZCUlN4TFFVRkxPMEZCUTFvc2JVSkJRVThzUlVGQlJTeERRVUZETzFkQlExbzdTMEZEVERzN1FVRTVSMmRDTEZOQlFVc3NWMEZuU0hSQ0xHVkJRV1VzT0VKQlFVYzdRVUZEWkN3MFFrRkRUeXhyUWtGQlRTeGxRVUZsTEV0QlFVRXNUVUZCUlR0QlFVTXhRaXhwUWtGQlN5eEZRVUZGTEVOQlFVTTdRVUZEVWl4dlFrRkJVU3hGUVVGRkxFZEJRVWM3UVVGRFlpeG5Ra0ZCU1N4RlFVRkZMSFZDUVVGUExFOUJRVTg3UVVGRGNFSXNiVUpCUVU4c1JVRkJSU3hEUVVGRE8wRkJRMVlzYlVKQlFVOHNSVUZCUlN4RFFVRkRPMEZCUTFZc2FVSkJRVXNzUlVGQlJTeERRVUZETzBGQlExSXNZMEZCUlN4RlFVRkZMRU5CUVVNN1FVRkRUQ3hwUWtGQlN5eEZRVUZGTEV0QlFVczdWMEZEWkR0TFFVTk1PenRCUVRWSVowSXNVMEZCU3l4WFFUaElkRUlzYlVKQlFXMUNMR3REUVVGSE8wRkJRMnhDTEdWQlFVOHNTVUZCU1N4RFFVRkRPMHRCUTJZN08xZEJhRWxuUWl4TFFVRkxPenM3YTBKQlFVd3NTMEZCU3lJc0ltWnBiR1VpT2lKVWQyVmxiaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEZCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQkJZM1JwYjI0Z1puSnZiU0FuTGk5QlkzUnBiMjRuTzF4dWFXMXdiM0owSUdWaGMybHVaeUJtY205dElDY3VMMlZoYzJsdVp5OXdjbVZ6WlhRdFpXRnphVzVuSnp0Y2JtbHRjRzl5ZENCN0lHTjFjbkpsYm5SVWFXMWxMQ0JwYzA1MWJTQjlJR1p5YjIwZ0p5NHVMMmx1WXk5MWRHbHNjeWM3WEc1cGJYQnZjblFnZTF4dUlDQWdJR1ZoYzJVc1hHNGdJQ0FnY21WemRISnBZM1FzWEc0Z0lDQWdaMlYwVUhKdlozSmxjM05HY205dFZtRnNkV1VzWEc0Z0lDQWdjM1JsY0ZCeWIyZHlaWE56WEc1OUlHWnliMjBnSnk0dUwybHVZeTlqWVd4akp6dGNibHh1WTI5dWMzUWdRMDlWVGxRZ1BTQW5RMjkxYm5Rbk8xeHVZMjl1YzNRZ1RrVllWRjlUVkVWUVV5QTlJSHRjYmlBZ0lDQnNiMjl3T2lBbmNtVnpkR0Z5ZENjc1hHNGdJQ0FnZVc5NWJ6b2dKM0psZG1WeWMyVW5MRnh1SUNBZ0lHWnNhWEE2SUNkbWJHbHdWbUZzZFdWekoxeHVmVHRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnWTJ4aGMzTWdWSGRsWlc0Z1pYaDBaVzVrY3lCQlkzUnBiMjRnZTF4dUlDQWdJSE4wWVhKMEtDa2dlMXh1SUNBZ0lDQWdJQ0J6ZFhCbGNpNXpkR0Z5ZENncE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1Wc1lYQnpaV1FnUFNBd08xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1ac2FYQkRiM1Z1ZENBOUlIUm9hWE11ZVc5NWIwTnZkVzUwSUQwZ2RHaHBjeTVzYjI5d1EyOTFiblFnUFNBd08xeHVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQWdJSDFjYmx4dUlDQWdJRzl1VlhCa1lYUmxLSFIzWldWdUxDQm1jbUZ0WlZOMFlXMXdMQ0JsYkdGd2MyVmtLU0I3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJSEJ5YjJkeVpYTnpWR0Z5WjJWMElEMGdLSFJvYVhNdWNHeGhlVVJwY21WamRHbHZiaUE5UFQwZ01Ta2dQeUF4SURvZ01EdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxtVnVaR1ZrSUQwZ2RISjFaVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWxiR0Z3YzJWa0lDczlJQ2hsYkdGd2MyVmtJQ29nZEdocGN5NWthV3hoZEdVcElDb2dkR2hwY3k1d2JHRjVSR2x5WldOMGFXOXVPMXh1WEc0Z0lDQWdJQ0FnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z2RHaHBjeTV1ZFcxV1lXeDFaVXRsZVhNN0lHa3JLeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2EyVjVJRDBnZEdocGN5NTJZV3gxWlV0bGVYTmJhVjA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCMllXeDFaU0E5SUhSb2FYTXVkbUZzZFdWelcydGxlVjA3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJR3hsZENCd2NtOW5jbVZ6Y3lBOUlISmxjM1J5YVdOMEtHZGxkRkJ5YjJkeVpYTnpSbkp2YlZaaGJIVmxLSFJvYVhNdVpXeGhjSE5sWkNBdElIWmhiSFZsTG1SbGJHRjVMQ0F3TENCMllXeDFaUzVrZFhKaGRHbHZiaWtzSURBc0lERXBPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJOWVhKcklGUjNaV1Z1SUdGeklFNVBWQ0JsYm1SbFpDQnBaaUJ6ZEdsc2JDQnBiaUJ3Y205bmNtVnpjMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSEJ5YjJkeVpYTnpJQ0U5UFNCd2NtOW5jbVZ6YzFSaGNtZGxkQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVaVzVrWldRZ1BTQm1ZV3h6WlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnVTNSbGNDQndjbTluY21WemN5QnBaaUIzWlNkeVpTQnpkR1Z3Y0dsdVoxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIWmhiSFZsTG5OMFpYQnpLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY0hKdlozSmxjM01nUFNCemRHVndVSEp2WjNKbGMzTW9jSEp2WjNKbGMzTXNJSFpoYkhWbExuTjBaWEJ6S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnUldGelpTQndjbTluY21WemMxeHVJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVXVZM1Z5Y21WdWRDQTlJR1ZoYzJVb2NISnZaM0psYzNNc0lIWmhiSFZsTG1aeWIyMHNJSFpoYkhWbExuUnZMQ0IyWVd4MVpTNWxZWE5sS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JseHVJQ0FnSUc5dVJuSmhiV1ZGYm1Rb0tTQjdYRzRnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbVZ1WkdWa0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCc1pYUWdjM1JsY0ZSaGEyVnVJRDBnWm1Gc2MyVTdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHdGxlU0JwYmlCT1JWaFVYMU5VUlZCVEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0U1RldGUmZVMVJGVUZNdWFHRnpUM2R1VUhKdmNHVnlkSGtvYTJWNUtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0J0WVhoVGRHVndjeUE5SUhSb2FYTmJhMlY1WFR0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2JXRjRVM1JsY0hNZ1BUMDlJSFJ5ZFdVZ2ZId2dLR2x6VG5WdEtHMWhlRk4wWlhCektTQW1KaUJ0WVhoVGRHVndjeUErSUhSb2FYTmJhMlY1SUNzZ1EwOVZUbFJkS1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjMXRyWlhrZ0t5QkRUMVZPVkYwckt6dGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lITjBaWEJVWVd0bGJpQTlJSFJ5ZFdVN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpXMDVGV0ZSZlUxUkZVRk5iYTJWNVhWMG9LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tDRnpkR1Z3VkdGclpXNHBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxuTjBiM0FvS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJR1pzYVhCV1lXeDFaWE1vS1NCN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUhaaGJIVmxjeUE5SUhSb2FYTXVkbUZzZFdWek8xeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdVpXeGhjSE5sWkNBOUlIUm9hWE11WkhWeVlYUnBiMjRnTFNCMGFHbHpMbVZzWVhCelpXUTdYRzVjYmlBZ0lDQWdJQ0FnWm05eUlDaHNaWFFnYTJWNUlHbHVJSFpoYkhWbGN5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFpoYkhWbGN5NW9ZWE5QZDI1UWNtOXdaWEowZVNoclpYa3BLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdkbUZzZFdVZ1BTQjJZV3gxWlhOYmEyVjVYVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JiZG1Gc2RXVXVkRzhzSUhaaGJIVmxMbVp5YjIxZElEMGdXM1poYkhWbExtWnliMjBzSUhaaGJIVmxMblJ2WFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNBZ0lIMWNibHh1SUNBZ0lISmxkbVZ5YzJVb0tTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdWNHeGhlVVJwY21WamRHbHZiaUFxUFNBdE1UdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjbVZ6ZEdGeWRDZ3BJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWxiR0Z3YzJWa0lEMGdLSFJvYVhNdWNHeGhlVVJwY21WamRHbHZiaUE5UFQwZ01Ta2dQeUF3SURvZ2RHaHBjeTVrZFhKaGRHbHZianRjYmlBZ0lDQWdJQ0FnZEdocGN5NXpkR0Z5ZEdWa0lEMGdZM1Z5Y21WdWRGUnBiV1VvS1R0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2MyVmxheWh3Y205bmNtVnpjeWtnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbk5sWld0VWFXMWxLSFJvYVhNdVpIVnlZWFJwYjI0Z0tpQndjbTluY21WemN5azdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQWdJSDFjYmx4dUlDQWdJSE5sWld0VWFXMWxLR1ZzWVhCelpXUXBJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXZibU5sS0NrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Wld4aGNITmxaQ0E5SUdWc1lYQnpaV1E3WEc1Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUNBZ2ZWeHVJQ0FnSUZ4dUlDQWdJR2RsZEVSbFptRjFiSFJRY205d2N5Z3BJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDNHVMbk4xY0dWeUxtZGxkRVJsWm1GMWJIUlFjbTl3Y3lncExGeHVJQ0FnSUNBZ0lDQWdJQ0FnWW14bGJtUTZJSFJ5ZFdVc1hHNGdJQ0FnSUNBZ0lDQWdJQ0JrWld4aGVUb2dNQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lHUnBiR0YwWlRvZ01TeGNiaUFnSUNBZ0lDQWdJQ0FnSUdSMWNtRjBhVzl1T2lBek1EQXNYRzRnSUNBZ0lDQWdJQ0FnSUNCc2IyOXdPaUJtWVd4elpTeGNiaUFnSUNBZ0lDQWdJQ0FnSUhsdmVXODZJR1poYkhObExGeHVJQ0FnSUNBZ0lDQWdJQ0FnWm14cGNEb2dabUZzYzJVc1hHNGdJQ0FnSUNBZ0lDQWdJQ0J3YkdGNVJHbHlaV04wYVc5dU9pQXhMRnh1SUNBZ0lDQWdJQ0FnSUNBZ1pXNWtaV1E2SUdaaGJITmxMRnh1SUNBZ0lDQWdJQ0FnSUNBZ1pXeGhjSE5sWkRvZ01GeHVJQ0FnSUNBZ0lDQjlPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHZGxkRVJsWm1GMWJIUldZV3gxWlNncElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIdGNiaUFnSUNBZ0lDQWdJQ0FnSUM0dUxuTjFjR1Z5TG1kbGRFUmxabUYxYkhSV1lXeDFaU2dwTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdaR1ZzWVhrNklEQXNYRzRnSUNBZ0lDQWdJQ0FnSUNCa2RYSmhkR2x2YmpvZ016QXdMRnh1SUNBZ0lDQWdJQ0FnSUNBZ1pXRnpaVG9nWldGemFXNW5MbVZoYzJWUGRYUXNYRzRnSUNBZ0lDQWdJQ0FnSUNCbGJHRndjMlZrT2lBd0xGeHVJQ0FnSUNBZ0lDQWdJQ0FnYzNSaFoyZGxjam9nTUN4Y2JpQWdJQ0FnSUNBZ0lDQWdJSE4wWlhCek9pQXdMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2RHODZJREFzWEc0Z0lDQWdJQ0FnSUNBZ0lDQnliM1Z1WkRvZ1ptRnNjMlZjYmlBZ0lDQWdJQ0FnZlR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JuWlhSRVpXWmhkV3gwVm1Gc2RXVlFjbTl3S0NrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z0ozUnZKenRjYmlBZ0lDQjlYRzU5WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvVHdlZW4uanNcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnNldEdsb2JhbERpbGF0aW9uID0gdW5kZWZpbmVkO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbnZhciBNQVhfRUxBUFNFRCA9IDMzO1xuXG52YXIgY3VycmVudCA9IDA7XG52YXIgZWxhcHNlZCA9IDE2Ljc7XG52YXIgZGlsYXRpb24gPSAxO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZnJhbWVzdGFtcCkge1xuICAgICAgICBlbGFwc2VkID0gTWF0aC5tYXgoTWF0aC5taW4oZnJhbWVzdGFtcCAtIGN1cnJlbnQsIE1BWF9FTEFQU0VEKSwgMSkgKiBkaWxhdGlvbjtcbiAgICAgICAgY3VycmVudCA9IGZyYW1lc3RhbXA7XG4gICAgfSxcblxuICAgIHN0YXJ0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjdXJyZW50ID0gKDAsIF91dGlscy5jdXJyZW50VGltZSkoKTtcbiAgICB9LFxuXG4gICAgZ2V0RWxhcHNlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZWxhcHNlZDtcbiAgICB9XG59O1xudmFyIHNldEdsb2JhbERpbGF0aW9uID0gZXhwb3J0cy5zZXRHbG9iYWxEaWxhdGlvbiA9IGZ1bmN0aW9uIChuZXdEaWxhdGlvbikge1xuICAgIHJldHVybiBkaWxhdGlvbiA9IG5ld0RpbGF0aW9uO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5d2NtOWpaWE56TDNScGJXVnlMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdRVUZGUVN4SlFVRk5MRmRCUVZjc1IwRkJSeXhGUVVGRkxFTkJRVU03TzBGQlJYWkNMRWxCUVVrc1QwRkJUeXhIUVVGSExFTkJRVU1zUTBGQlF6dEJRVU5vUWl4SlFVRkpMRTlCUVU4c1IwRkJSeXhKUVVGSkxFTkJRVU03UVVGRGJrSXNTVUZCU1N4UlFVRlJMRWRCUVVjc1EwRkJReXhEUVVGRE96dHJRa0ZGUmp0QlFVTllMRlZCUVUwc1JVRkJSU3hWUVVGRExGVkJRVlVzUlVGQlN6dEJRVU53UWl4bFFVRlBMRWRCUVVjc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRlZCUVZVc1IwRkJSeXhQUVVGUExFVkJRVVVzVjBGQlZ5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRWRCUVVjc1VVRkJVU3hEUVVGRE8wRkJRemxGTEdWQlFVOHNSMEZCUnl4VlFVRlZMRU5CUVVNN1MwRkRlRUk3TzBGQlJVUXNVMEZCU3l4RlFVRkZPMlZCUVUwc1QwRkJUeXhIUVVGSExGZEJaR3hDTEZkQlFWY3NSMEZqYjBJN1MwRkJRVHM3UVVGRmNFTXNZMEZCVlN4RlFVRkZPMlZCUVUwc1QwRkJUenRMUVVGQk8wTkJRelZDTzBGQlJVMHNTVUZCVFN4cFFrRkJhVUlzVjBGQmFrSXNhVUpCUVdsQ0xFZEJRVWNzVlVGQlF5eFhRVUZYTzFkQlFVc3NVVUZCVVN4SFFVRkhMRmRCUVZjN1EwRkJRU3hEUVVGRElpd2labWxzWlNJNkluUnBiV1Z5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMFVHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSHNnWTNWeWNtVnVkRlJwYldVZ2ZTQm1jbTl0SUNjdUxpOXBibU12ZFhScGJITW5PMXh1WEc1amIyNXpkQ0JOUVZoZlJVeEJVRk5GUkNBOUlETXpPMXh1WEc1c1pYUWdZM1Z5Y21WdWRDQTlJREE3WEc1c1pYUWdaV3hoY0hObFpDQTlJREUyTGpjN1hHNXNaWFFnWkdsc1lYUnBiMjRnUFNBeE8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQjdYRzRnSUNBZ2RYQmtZWFJsT2lBb1puSmhiV1Z6ZEdGdGNDa2dQVDRnZTF4dUlDQWdJQ0FnSUNCbGJHRndjMlZrSUQwZ1RXRjBhQzV0WVhnb1RXRjBhQzV0YVc0b1puSmhiV1Z6ZEdGdGNDQXRJR04xY25KbGJuUXNJRTFCV0Y5RlRFRlFVMFZFS1N3Z01Ta2dLaUJrYVd4aGRHbHZianRjYmlBZ0lDQWdJQ0FnWTNWeWNtVnVkQ0E5SUdaeVlXMWxjM1JoYlhBN1hHNGdJQ0FnZlN4Y2JseHVJQ0FnSUhOMFlYSjBPaUFvS1NBOVBpQmpkWEp5Wlc1MElEMGdZM1Z5Y21WdWRGUnBiV1VvS1N4Y2JseHVJQ0FnSUdkbGRFVnNZWEJ6WldRNklDZ3BJRDArSUdWc1lYQnpaV1JjYm4wN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCelpYUkhiRzlpWVd4RWFXeGhkR2x2YmlBOUlDaHVaWGRFYVd4aGRHbHZiaWtnUFQ0Z1pHbHNZWFJwYjI0Z1BTQnVaWGRFYVd4aGRHbHZianNpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcHJvY2Vzcy90aW1lci5qc1xuICoqIG1vZHVsZSBpZCA9IDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9BY3Rpb24yID0gcmVxdWlyZSgnLi9BY3Rpb24nKTtcblxudmFyIF9BY3Rpb24zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQWN0aW9uMik7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgUGh5c2ljcyA9IChmdW5jdGlvbiAoX0FjdGlvbikge1xuICAgIF9pbmhlcml0cyhQaHlzaWNzLCBfQWN0aW9uKTtcblxuICAgIGZ1bmN0aW9uIFBoeXNpY3MoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQaHlzaWNzKTtcblxuICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uY2FsbC5hcHBseShfQWN0aW9uLCBbdGhpc10uY29uY2F0KGFyZ3MpKSk7XG5cbiAgICAgICAgX3RoaXMuaW5hY3RpdmVGcmFtZXMgPSAwO1xuICAgICAgICBfdGhpcy5jYWxjdWxhdGVzVmVsb2NpdHkgPSB0cnVlO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgUGh5c2ljcy5wcm90b3R5cGUub25VcGRhdGUgPSBmdW5jdGlvbiBvblVwZGF0ZShwaHlzaWNzLCBmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgICAgIHRoaXMuaGFzQ2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMudmFsdWVLZXlzW2ldO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcbiAgICAgICAgICAgIHZhciBwcmV2aW91c1ZhbHVlID0gdmFsdWUucHJldjtcblxuICAgICAgICAgICAgLy8gQXBwbHkgYWNjZWxlcmF0aW9uXG4gICAgICAgICAgICB2YWx1ZS52ZWxvY2l0eSArPSAoMCwgX2NhbGMuc3BlZWRQZXJGcmFtZSkodmFsdWUuYWNjZWxlcmF0aW9uLCBlbGFwc2VkKTtcblxuICAgICAgICAgICAgLy8gQXBwbHkgZnJpY3Rpb25cbiAgICAgICAgICAgIHZhbHVlLnZlbG9jaXR5ICo9IE1hdGgucG93KDEgLSB2YWx1ZS5mcmljdGlvbiwgZWxhcHNlZCAvIDEwMCk7XG5cbiAgICAgICAgICAgIC8vIEFwcGx5IHNwcmluZ1xuICAgICAgICAgICAgaWYgKHZhbHVlLnNwcmluZyAmJiAoMCwgX3V0aWxzLmlzTnVtKSh2YWx1ZS50bykpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGlzdGFuY2VUb1RhcmdldCA9IHZhbHVlLnRvIC0gdmFsdWUuY3VycmVudDtcbiAgICAgICAgICAgICAgICB2YWx1ZS52ZWxvY2l0eSArPSBkaXN0YW5jZVRvVGFyZ2V0ICogKDAsIF9jYWxjLnNwZWVkUGVyRnJhbWUpKHZhbHVlLnNwcmluZywgZWxhcHNlZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEFwcGx5IGxhdGVzdCB2ZWxvY2l0eVxuICAgICAgICAgICAgdmFsdWUuY3VycmVudCArPSAoMCwgX2NhbGMuc3BlZWRQZXJGcmFtZSkodmFsdWUudmVsb2NpdHksIGVsYXBzZWQpO1xuXG4gICAgICAgICAgICAvLyBDaGVjayBpZiB2YWx1ZSBoYXMgY2hhbmdlZFxuICAgICAgICAgICAgaWYgKHZhbHVlLmN1cnJlbnQgIT09IHByZXZpb3VzVmFsdWUgfHwgTWF0aC5hYnModmFsdWUudmVsb2NpdHkpID49IHZhbHVlLnN0b3BTcGVlZCB8fCB2YWx1ZS5zcHJpbmcgJiYgdmFsdWUuY3VycmVudCAhPT0gdmFsdWUudG8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIFBoeXNpY3MucHJvdG90eXBlLm9uRnJhbWVFbmQgPSBmdW5jdGlvbiBvbkZyYW1lRW5kKCkge1xuICAgICAgICBpZiAodGhpcy5hdXRvRW5kKSB7XG4gICAgICAgICAgICB0aGlzLmluYWN0aXZlRnJhbWVzID0gdGhpcy5oYXNDaGFuZ2VkID8gMSA6IHRoaXMuaW5hY3RpdmVGcmFtZXMgKyAxO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5pbmFjdGl2ZUZyYW1lcyA+PSB0aGlzLm1heEluYWN0aXZlRnJhbWVzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgIyBHZXQgZGVmYXVsdCBTaW11bGF0ZSBwcm9wc1xuICAgICAgICAgQHJldHVybiBbb2JqZWN0XVxuICAgICovXG5cbiAgICBQaHlzaWNzLnByb3RvdHlwZS5nZXREZWZhdWx0UHJvcHMgPSBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgX0FjdGlvbi5wcm90b3R5cGUuZ2V0RGVmYXVsdFByb3BzLmNhbGwodGhpcyksIHtcbiAgICAgICAgICAgIGF1dG9FbmQ6IHRydWUsXG4gICAgICAgICAgICBtYXhJbmFjdGl2ZUZyYW1lczogM1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgIyBHZXQgZGVmYXVsdCBTaW11bGF0ZSB2YWx1ZSBwcm9wc1xuICAgICAgICAgQHJldHVybiBbb2JqZWN0XVxuICAgICovXG5cbiAgICBQaHlzaWNzLnByb3RvdHlwZS5nZXREZWZhdWx0VmFsdWUgPSBmdW5jdGlvbiBnZXREZWZhdWx0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgX0FjdGlvbi5wcm90b3R5cGUuZ2V0RGVmYXVsdFZhbHVlLmNhbGwodGhpcyksIHtcbiAgICAgICAgICAgIGFjY2VsZXJhdGlvbjogMCwgLy8gW251bWJlcl06IEFjY2VsZXJhdGlvbiB0byBhcHBseSB0byB2YWx1ZSwgaW4gdW5pdHMgcGVyIHNlY29uZFxuICAgICAgICAgICAgYm91bmNlOiAwLCAvLyBbbnVtYmVyXTogRmFjdG9yIHRvIG11bHRpcGx5IHZlbG9jaXR5IGJ5IG9uIGJvdW5jZVxuICAgICAgICAgICAgc3ByaW5nOiAwLCAvLyBbbnVtYmVyXTogU3ByaW5nIHN0cmVuZ3RoIGR1cmluZyAnc3RyaW5nJ1xuICAgICAgICAgICAgc3RvcFNwZWVkOiAwLjAwMDEsIC8vIFtudW1iZXJdOiBTdG9wIHNpbXVsYXRpb24gdW5kZXIgdGhpcyBzcGVlZFxuICAgICAgICAgICAgZnJpY3Rpb246IDAgLy8gW251bWJlcl06IEZyaWN0aW9uIHRvIGFwcGx5IHBlciBmcmFtZSwgMC0xXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvKlxuICAgICAgICAjIEdldCBkZWZhdWx0IFNpbXVsYXRlIHZhbHVlIHByb3BlcnR5IG5hbWVcbiAgICAgICAgIyMgU2V0IHZhbHVlcyB0byB0aGlzIHdoZW4gYSBgdmFsdWVgIGlzIG5vdCBwcm92aWRlZCBhcyBhbiBvYmplY3RcbiAgICAgICAgIEByZXR1cm4gW3N0cmluZ11cbiAgICAqL1xuXG4gICAgUGh5c2ljcy5wcm90b3R5cGUuZ2V0RGVmYXVsdFZhbHVlUHJvcCA9IGZ1bmN0aW9uIGdldERlZmF1bHRWYWx1ZVByb3AoKSB7XG4gICAgICAgIHJldHVybiAndmVsb2NpdHknO1xuICAgIH07XG5cbiAgICByZXR1cm4gUGh5c2ljcztcbn0pKF9BY3Rpb24zLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBQaHlzaWNzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMUJvZVhOcFkzTXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenM3T3pzN096czdPenM3T3p0SlFVbHhRaXhQUVVGUE8yTkJRVkFzVDBGQlR6czdRVUZGZUVJc1lVRkdhVUlzVDBGQlR5eEhRVVZJT3poQ1FVWktMRTlCUVU4N096QkRRVVZVTEVsQlFVazdRVUZCU2l4blFrRkJTVHM3TzNGRVFVTm1MREJEUVVGVExFbEJRVWtzUlVGQlF6czdRVUZEWkN4alFVRkxMR05CUVdNc1IwRkJSeXhEUVVGRExFTkJRVU03UVVGRGVFSXNZMEZCU3l4clFrRkJhMElzUjBGQlJ5eEpRVUZKTEVOQlFVTTdPMHRCUTJ4RE96dEJRVTVuUWl4WFFVRlBMRmRCVVhoQ0xGRkJRVkVzY1VKQlFVTXNUMEZCVHl4RlFVRkZMRlZCUVZVc1JVRkJSU3hQUVVGUExFVkJRVVU3UVVGRGJrTXNXVUZCU1N4RFFVRkRMRlZCUVZVc1IwRkJSeXhMUVVGTExFTkJRVU03TzBGQlJYaENMR0ZCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1dVRkJXU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzBGQlEzaERMR2RDUVVGTkxFZEJRVWNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJRemxDTEdkQ1FVRk5MRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMEZCUXk5Q0xHZENRVUZOTEdGQlFXRXNSMEZCUnl4TFFVRkxMRU5CUVVNc1NVRkJTVHM3TzBGQlFVTXNRVUZIYWtNc2FVSkJRVXNzUTBGQlF5eFJRVUZSTEVsQlFVa3NWVUZ3UW5KQ0xHRkJRV0VzUlVGdlFuTkNMRXRCUVVzc1EwRkJReXhaUVVGWkxFVkJRVVVzVDBGQlR5eERRVUZET3pzN1FVRkJReXhCUVVjM1JDeHBRa0ZCU3l4RFFVRkRMRkZCUVZFc1lVRkJTeXhEUVVGRExFZEJRVWNzUzBGQlN5eERRVUZETEZGQlFWRXNSVUZCVFN4UFFVRlBMRWRCUVVjc1IwRkJSeXhEUVVGRE96czdRVUZCUXl4QlFVY3hSQ3huUWtGQlNTeExRVUZMTEVOQlFVTXNUVUZCVFN4SlFVRkpMRmRCZWtKMlFpeExRVUZMTEVWQmVVSjNRaXhMUVVGTExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVTdRVUZEYWtNc2IwSkJRVTBzWjBKQlFXZENMRWRCUVVjc1MwRkJTeXhEUVVGRExFVkJRVVVzUjBGQlJ5eExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRPMEZCUTJ4RUxIRkNRVUZMTEVOQlFVTXNVVUZCVVN4SlFVRkpMR2RDUVVGblFpeEhRVUZITEZWQk5VSTFReXhoUVVGaExFVkJORUkyUXl4TFFVRkxMRU5CUVVNc1RVRkJUU3hGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZETzJGQlF6ZEZPenM3UVVGQlFTeEJRVWRFTEdsQ1FVRkxMRU5CUVVNc1QwRkJUeXhKUVVGSkxGVkJhRU53UWl4aFFVRmhMRVZCWjBOeFFpeExRVUZMTEVOQlFVTXNVVUZCVVN4RlFVRkZMRTlCUVU4c1EwRkJRenM3TzBGQlFVTXNRVUZIZUVRc1owSkJRVWtzUzBGQlN5eERRVUZETEU5QlFVOHNTMEZCU3l4aFFVRmhMRWxCUVVrc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1MwRkJTeXhEUVVGRExGTkJRVk1zU1VGQlN5eExRVUZMTEVOQlFVTXNUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXhQUVVGUExFdEJRVXNzUzBGQlN5eERRVUZETEVWQlFVVXNRVUZCUXl4RlFVRkZPMEZCUTJoSkxHOUNRVUZKTEVOQlFVTXNWVUZCVlN4SFFVRkhMRWxCUVVrc1EwRkJRenRoUVVNeFFqdFRRVU5LTzB0QlEwbzdPMEZCY0VOblFpeFhRVUZQTEZkQmMwTjRRaXhWUVVGVkxIbENRVUZITzBGQlExUXNXVUZCU1N4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRk8wRkJRMlFzWjBKQlFVa3NRMEZCUXl4alFVRmpMRWRCUVVjc1NVRkJTU3hEUVVGRExGVkJRVlVzUjBGQlJ5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMR05CUVdNc1IwRkJSeXhEUVVGRExFTkJRVU03TzBGQlJYQkZMR2RDUVVGSkxFbEJRVWtzUTBGQlF5eGpRVUZqTEVsQlFVa3NTVUZCU1N4RFFVRkRMR2xDUVVGcFFpeEZRVUZGTzBGQlF5OURMRzlDUVVGSkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdZVUZEWmp0VFFVTktPMHRCUTBvN096czdPenM3UVVFNVEyZENMRmRCUVU4c1YwRnhSSGhDTEdWQlFXVXNPRUpCUVVjN1FVRkRaQ3cwUWtGRFR5eHJRa0ZCVFN4bFFVRmxMRXRCUVVFc1RVRkJSVHRCUVVNeFFpeHRRa0ZCVHl4RlFVRkZMRWxCUVVrN1FVRkRZaXcyUWtGQmFVSXNSVUZCUlN4RFFVRkRPMWRCUTNSQ08wdEJRMHc3T3pzN096czdRVUV6UkdkQ0xGZEJRVThzVjBGclJYaENMR1ZCUVdVc09FSkJRVWM3UVVGRFpDdzBRa0ZEVHl4clFrRkJUU3hsUVVGbExFdEJRVUVzVFVGQlJUdEJRVU14UWl4M1FrRkJXU3hGUVVGRkxFTkJRVU03UVVGRFppeHJRa0ZCVFN4RlFVRkZMRU5CUVVNN1FVRkRWQ3hyUWtGQlRTeEZRVUZGTEVOQlFVTTdRVUZEVkN4eFFrRkJVeXhGUVVGRkxFMUJRVTA3UVVGRGFrSXNiMEpCUVZFc1JVRkJSU3hEUVVGRE8wRkJRVUVzVjBGRFlqdExRVU5NT3pzN096czdPenRCUVRORlowSXNWMEZCVHl4WFFXMUdlRUlzYlVKQlFXMUNMR3REUVVGSE8wRkJRMnhDTEdWQlFVOHNWVUZCVlN4RFFVRkRPMHRCUTNKQ096dFhRWEpHWjBJc1QwRkJUenM3TzJ0Q1FVRlFMRTlCUVU4aUxDSm1hV3hsSWpvaVVHaDVjMmxqY3k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRGQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0JCWTNScGIyNGdabkp2YlNBbkxpOUJZM1JwYjI0bk8xeHVhVzF3YjNKMElIc2djM0JsWldSUVpYSkdjbUZ0WlNCOUlHWnliMjBnSnk0dUwybHVZeTlqWVd4akp6dGNibWx0Y0c5eWRDQjdJR2x6VG5WdElIMGdabkp2YlNBbkxpNHZhVzVqTDNWMGFXeHpKenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnWTJ4aGMzTWdVR2g1YzJsamN5QmxlSFJsYm1SeklFRmpkR2x2YmlCN1hHNWNiaUFnSUNCamIyNXpkSEoxWTNSdmNpZ3VMaTVoY21kektTQjdYRzRnSUNBZ0lDQWdJSE4xY0dWeUtDNHVMbUZ5WjNNcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1sdVlXTjBhWFpsUm5KaGJXVnpJRDBnTUR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVqWVd4amRXeGhkR1Z6Vm1Wc2IyTnBkSGtnUFNCMGNuVmxPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHOXVWWEJrWVhSbEtIQm9lWE5wWTNNc0lHWnlZVzFsVTNSaGJYQXNJR1ZzWVhCelpXUXBJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NW9ZWE5EYUdGdVoyVmtJRDBnWm1Gc2MyVTdYRzVjYmlBZ0lDQWdJQ0FnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCMGFHbHpMbTUxYlZaaGJIVmxTMlY1Y3pzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCclpYa2dQU0IwYUdsekxuWmhiSFZsUzJWNWMxdHBYVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUhaaGJIVmxJRDBnZEdocGN5NTJZV3gxWlhOYmEyVjVYVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUhCeVpYWnBiM1Z6Vm1Gc2RXVWdQU0IyWVd4MVpTNXdjbVYyTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCQmNIQnNlU0JoWTJObGJHVnlZWFJwYjI1Y2JpQWdJQ0FnSUNBZ0lDQWdJSFpoYkhWbExuWmxiRzlqYVhSNUlDczlJSE53WldWa1VHVnlSbkpoYldVb2RtRnNkV1V1WVdOalpXeGxjbUYwYVc5dUxDQmxiR0Z3YzJWa0tUdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdRWEJ3YkhrZ1puSnBZM1JwYjI1Y2JpQWdJQ0FnSUNBZ0lDQWdJSFpoYkhWbExuWmxiRzlqYVhSNUlDbzlJQ2d4SUMwZ2RtRnNkV1V1Wm5KcFkzUnBiMjRwSUNvcUlDaGxiR0Z3YzJWa0lDOGdNVEF3S1R0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1FYQndiSGtnYzNCeWFXNW5YRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9kbUZzZFdVdWMzQnlhVzVuSUNZbUlHbHpUblZ0S0haaGJIVmxMblJ2S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUdScGMzUmhibU5sVkc5VVlYSm5aWFFnUFNCMllXeDFaUzUwYnlBdElIWmhiSFZsTG1OMWNuSmxiblE3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVXVkbVZzYjJOcGRIa2dLejBnWkdsemRHRnVZMlZVYjFSaGNtZGxkQ0FxSUhOd1pXVmtVR1Z5Um5KaGJXVW9kbUZzZFdVdWMzQnlhVzVuTENCbGJHRndjMlZrS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnUVhCd2JIa2diR0YwWlhOMElIWmxiRzlqYVhSNVhHNGdJQ0FnSUNBZ0lDQWdJQ0IyWVd4MVpTNWpkWEp5Wlc1MElDczlJSE53WldWa1VHVnlSbkpoYldVb2RtRnNkV1V1ZG1Wc2IyTnBkSGtzSUdWc1lYQnpaV1FwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QkRhR1ZqYXlCcFppQjJZV3gxWlNCb1lYTWdZMmhoYm1kbFpGeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIWmhiSFZsTG1OMWNuSmxiblFnSVQwOUlIQnlaWFpwYjNWelZtRnNkV1VnZkh3Z1RXRjBhQzVoWW5Nb2RtRnNkV1V1ZG1Wc2IyTnBkSGtwSUQ0OUlIWmhiSFZsTG5OMGIzQlRjR1ZsWkNCOGZDQW9kbUZzZFdVdWMzQnlhVzVuSUNZbUlIWmhiSFZsTG1OMWNuSmxiblFnSVQwOUlIWmhiSFZsTG5SdktTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWFHRnpRMmhoYm1kbFpDQTlJSFJ5ZFdVN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0J2YmtaeVlXMWxSVzVrS0NrZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvZEdocGN5NWhkWFJ2Ulc1a0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbWx1WVdOMGFYWmxSbkpoYldWeklEMGdkR2hwY3k1b1lYTkRhR0Z1WjJWa0lEOGdNU0E2SUhSb2FYTXVhVzVoWTNScGRtVkdjbUZ0WlhNZ0t5QXhPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvZEdocGN5NXBibUZqZEdsMlpVWnlZVzFsY3lBK1BTQjBhR2x6TG0xaGVFbHVZV04wYVhabFJuSmhiV1Z6S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV6ZEc5d0tDazdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNBdktseHVJQ0FnSUNBZ0lDQWpJRWRsZENCa1pXWmhkV3gwSUZOcGJYVnNZWFJsSUhCeWIzQnpYRzVjYmlBZ0lDQWdJQ0FnUUhKbGRIVnliaUJiYjJKcVpXTjBYVnh1SUNBZ0lDb3ZYRzRnSUNBZ1oyVjBSR1ZtWVhWc2RGQnliM0J6S0NrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnTGk0dWMzVndaWEl1WjJWMFJHVm1ZWFZzZEZCeWIzQnpLQ2tzWEc0Z0lDQWdJQ0FnSUNBZ0lDQmhkWFJ2Ulc1a09pQjBjblZsTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdiV0Y0U1c1aFkzUnBkbVZHY21GdFpYTTZJRE5jYmlBZ0lDQWdJQ0FnZlR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0F2S2x4dUlDQWdJQ0FnSUNBaklFZGxkQ0JrWldaaGRXeDBJRk5wYlhWc1lYUmxJSFpoYkhWbElIQnliM0J6WEc1Y2JpQWdJQ0FnSUNBZ1FISmxkSFZ5YmlCYmIySnFaV04wWFZ4dUlDQWdJQ292WEc0Z0lDQWdaMlYwUkdWbVlYVnNkRlpoYkhWbEtDa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0xpNHVjM1Z3WlhJdVoyVjBSR1ZtWVhWc2RGWmhiSFZsS0Nrc1hHNGdJQ0FnSUNBZ0lDQWdJQ0JoWTJObGJHVnlZWFJwYjI0NklEQXNJQzh2SUZ0dWRXMWlaWEpkT2lCQlkyTmxiR1Z5WVhScGIyNGdkRzhnWVhCd2JIa2dkRzhnZG1Gc2RXVXNJR2x1SUhWdWFYUnpJSEJsY2lCelpXTnZibVJjYmlBZ0lDQWdJQ0FnSUNBZ0lHSnZkVzVqWlRvZ01Dd2dMeThnVzI1MWJXSmxjbDA2SUVaaFkzUnZjaUIwYnlCdGRXeDBhWEJzZVNCMlpXeHZZMmwwZVNCaWVTQnZiaUJpYjNWdVkyVmNiaUFnSUNBZ0lDQWdJQ0FnSUhOd2NtbHVaem9nTUN3Z0x5OGdXMjUxYldKbGNsMDZJRk53Y21sdVp5QnpkSEpsYm1kMGFDQmtkWEpwYm1jZ0ozTjBjbWx1WnlkY2JpQWdJQ0FnSUNBZ0lDQWdJSE4wYjNCVGNHVmxaRG9nTUM0d01EQXhMQ0F2THlCYmJuVnRZbVZ5WFRvZ1UzUnZjQ0J6YVcxMWJHRjBhVzl1SUhWdVpHVnlJSFJvYVhNZ2MzQmxaV1JjYmlBZ0lDQWdJQ0FnSUNBZ0lHWnlhV04wYVc5dU9pQXdJQzh2SUZ0dWRXMWlaWEpkT2lCR2NtbGpkR2x2YmlCMGJ5QmhjSEJzZVNCd1pYSWdabkpoYldVc0lEQXRNVnh1SUNBZ0lDQWdJQ0I5TzF4dUlDQWdJSDFjYmx4dUlDQWdJQzhxWEc0Z0lDQWdJQ0FnSUNNZ1IyVjBJR1JsWm1GMWJIUWdVMmx0ZFd4aGRHVWdkbUZzZFdVZ2NISnZjR1Z5ZEhrZ2JtRnRaVnh1SUNBZ0lDQWdJQ0FqSXlCVFpYUWdkbUZzZFdWeklIUnZJSFJvYVhNZ2QyaGxiaUJoSUdCMllXeDFaV0FnYVhNZ2JtOTBJSEJ5YjNacFpHVmtJR0Z6SUdGdUlHOWlhbVZqZEZ4dVhHNGdJQ0FnSUNBZ0lFQnlaWFIxY200Z1czTjBjbWx1WjExY2JpQWdJQ0FxTDF4dUlDQWdJR2RsZEVSbFptRjFiSFJXWVd4MVpWQnliM0FvS1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlBbmRtVnNiMk5wZEhrbk8xeHVJQ0FnSUgxY2JuMWNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9QaHlzaWNzLmpzXG4gKiogbW9kdWxlIGlkID0gN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX0FjdGlvbjIgPSByZXF1aXJlKCcuL0FjdGlvbicpO1xuXG52YXIgX0FjdGlvbjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BY3Rpb24yKTtcblxudmFyIF9Qb2ludGVyID0gcmVxdWlyZSgnLi4vaW5wdXQvUG9pbnRlcicpO1xuXG52YXIgX1BvaW50ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUG9pbnRlcik7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLypcbiAgICBTY3JhcGUgeC95IGNvb3JkaW5hdGVzIGZyb20gcHJvdmlkZWQgZXZlbnRcblxuICAgIEBwYXJhbSBbZXZlbnRdXG4gICAgQHJldHVybiBbb2JqZWN0XVxuKi9cbnZhciBtb3VzZUV2ZW50VG9Qb2ludCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogZS5wYWdlWCxcbiAgICAgICAgeTogZS5wYWdlWVxuICAgIH07XG59O1xuXG52YXIgdG91Y2hFdmVudFRvUG9pbnQgPSBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBjaGFuZ2VkVG91Y2hlcyA9IF9yZWYuY2hhbmdlZFRvdWNoZXM7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCxcbiAgICAgICAgeTogY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WVxuICAgIH07XG59O1xuXG52YXIgY3JlYXRlUG9pbnRlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgcmV0dXJuIGUudG91Y2hlcyA/IG5ldyBfUG9pbnRlcjIuZGVmYXVsdCh0b3VjaEV2ZW50VG9Qb2ludChlKSwgJ3RvdWNobW92ZScsIHRvdWNoRXZlbnRUb1BvaW50KSA6IG5ldyBfUG9pbnRlcjIuZGVmYXVsdChtb3VzZUV2ZW50VG9Qb2ludChlKSwgJ21vdXNlbW92ZScsIG1vdXNlRXZlbnRUb1BvaW50KTtcbn07XG5cbnZhciBnZXRBY3R1YWxFdmVudCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgcmV0dXJuIGUub3JpZ2luYWxFdmVudCB8fCBlO1xufTtcblxudmFyIFRyYWNrID0gKGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gICAgX2luaGVyaXRzKFRyYWNrLCBfQWN0aW9uKTtcblxuICAgIGZ1bmN0aW9uIFRyYWNrKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHJhY2spO1xuXG4gICAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgIFRyYWNrLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uIHN0YXJ0KGlucHV0KSB7XG4gICAgICAgIF9BY3Rpb24ucHJvdG90eXBlLnN0YXJ0LmNhbGwodGhpcyk7XG5cbiAgICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0ID0gaW5wdXQuc3RhdGUgPyBpbnB1dCA6IGNyZWF0ZVBvaW50ZXIoZ2V0QWN0dWFsRXZlbnQoaW5wdXQpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW5wdXRPZmZzZXQgPSB7fTtcbiAgICAgICAgdGhpcy5pbnB1dE9yaWdpbiA9IF9leHRlbmRzKHt9LCB0aGlzLmlucHV0LnN0YXRlKTtcbiAgICAgICAgdGhpcy5pbnB1dC5zdGFydCgpO1xuICAgIH07XG5cbiAgICBUcmFjay5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAgIF9BY3Rpb24ucHJvdG90eXBlLnN0b3AuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5pbnB1dC5zdG9wKCk7XG4gICAgfTtcblxuICAgIFRyYWNrLnByb3RvdHlwZS5vblVwZGF0ZSA9IGZ1bmN0aW9uIG9uVXBkYXRlKHRyYWNrLCBmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgICAgIHRoaXMuaW5wdXRPZmZzZXQgPSAoMCwgX2NhbGMub2Zmc2V0KSh0aGlzLmlucHV0T3JpZ2luLCB0aGlzLmlucHV0LnN0YXRlKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSB0aGlzLnZhbHVlS2V5c1tpXTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuaW5wdXRPZmZzZXQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmRpcmVjdCkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gdGhpcy5pbnB1dC5zdGF0ZVtrZXldO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSB2YWx1ZS5vcmlnaW4gKyB0aGlzLmlucHV0T2Zmc2V0W2tleV07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gU21vb3RoIHZhbHVlIGlmIHdlIGhhdmUgc21vb3RoaW5nXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLnNtb290aCkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gKDAsIF9jYWxjLnNtb290aCkodmFsdWUuY3VycmVudCwgdmFsdWUucHJldiwgZWxhcHNlZCwgdmFsdWUuc21vb3RoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgVHJhY2sucHJvdG90eXBlLmdldERlZmF1bHRWYWx1ZSA9IGZ1bmN0aW9uIGdldERlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBfQWN0aW9uLnByb3RvdHlwZS5nZXREZWZhdWx0VmFsdWUuY2FsbCh0aGlzKSwge1xuICAgICAgICAgICAgYW1wOiAxLFxuICAgICAgICAgICAgZXNjYXBlQW1wOiAwLFxuICAgICAgICAgICAgZGlyZWN0OiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFRyYWNrO1xufSkoX0FjdGlvbjMuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFRyYWNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMVJ5WVdOckxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenRCUVZWQkxFbEJRVTBzYVVKQlFXbENMRWRCUVVjc1ZVRkJReXhEUVVGRE8xZEJRVTA3UVVGRE9VSXNVMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhMUVVGTE8wRkJRMVlzVTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4TFFVRkxPMHRCUTJJN1EwRkJReXhEUVVGRE96dEJRVVZJTEVsQlFVMHNhVUpCUVdsQ0xFZEJRVWM3VVVGQlJ5eGpRVUZqTEZGQlFXUXNZMEZCWXp0WFFVRlJPMEZCUXk5RExGTkJRVU1zUlVGQlJTeGpRVUZqTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1QwRkJUenRCUVVNMVFpeFRRVUZETEVWQlFVVXNZMEZCWXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFOUJRVTg3UzBGREwwSTdRMEZCUXl4RFFVRkRPenRCUVVWSUxFbEJRVTBzWVVGQllTeEhRVUZITEZWQlFVTXNRMEZCUXp0WFFVRkxMRU5CUVVNc1EwRkJReXhQUVVGUExFZEJRMnhETEhOQ1FVRlpMR2xDUVVGcFFpeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRmRCUVZjc1JVRkJSU3hwUWtGQmFVSXNRMEZCUXl4SFFVTnFSU3h6UWtGQldTeHBRa0ZCYVVJc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeFhRVUZYTEVWQlFVVXNhVUpCUVdsQ0xFTkJRVU03UTBGQlFTeERRVUZET3p0QlFVVjBSU3hKUVVGTkxHTkJRV01zUjBGQlJ5eFZRVUZETEVOQlFVTTdWMEZCU3l4RFFVRkRMRU5CUVVNc1lVRkJZU3hKUVVGSkxFTkJRVU03UTBGQlFTeERRVUZET3p0SlFVVTVRaXhMUVVGTE8yTkJRVXdzUzBGQlN6czdZVUZCVEN4TFFVRkxPemhDUVVGTUxFdEJRVXM3T3pzN08wRkJRVXdzVTBGQlN5eFhRVU4wUWl4TFFVRkxMR3RDUVVGRExFdEJRVXNzUlVGQlJUdEJRVU5VTERCQ1FVRk5MRXRCUVVzc1MwRkJRU3hOUVVGRkxFTkJRVU03TzBGQlJXUXNXVUZCU1N4TFFVRkxMRVZCUVVVN1FVRkRVQ3huUWtGQlNTeERRVUZETEV0QlFVc3NSMEZCUnl4TFFVRkxMRU5CUVVNc1MwRkJTeXhIUVVGSExFdEJRVXNzUjBGQlJ5eGhRVUZoTEVOQlFVTXNZMEZCWXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03VTBGRE0wVTdPMEZCUlVRc1dVRkJTU3hEUVVGRExGZEJRVmNzUjBGQlJ5eEZRVUZGTEVOQlFVTTdRVUZEZEVJc1dVRkJTU3hEUVVGRExGZEJRVmNzWjBKQlFWRXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVVVzUTBGQlF6dEJRVU16UXl4WlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETzB0QlEzUkNPenRCUVZoblFpeFRRVUZMTEZkQllYUkNMRWxCUVVrc2JVSkJRVWM3UVVGRFNDd3dRa0ZCVFN4SlFVRkpMRXRCUVVFc1RVRkJSU3hEUVVGRE8wRkJRMklzV1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJRenRMUVVOeVFqczdRVUZvUW1kQ0xGTkJRVXNzVjBGclFuUkNMRkZCUVZFc2NVSkJRVU1zUzBGQlN5eEZRVUZGTEZWQlFWVXNSVUZCUlN4UFFVRlBMRVZCUVVVN1FVRkRha01zV1VGQlNTeERRVUZETEZkQlFWY3NSMEZCUnl4VlFUTkRWaXhOUVVGTkxFVkJNa05YTEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXpzN1FVRkZPVVFzWVVGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eFpRVUZaTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1FVRkRlRU1zWjBKQlFVMHNSMEZCUnl4SFFVRkhMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdPMEZCUlRsQ0xHZENRVUZKTEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNc1kwRkJZeXhEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTzBGQlEzUkRMRzlDUVVGTkxFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8wRkJReTlDTEc5Q1FVRkpMRXRCUVVzc1EwRkJReXhOUVVGTkxFVkJRVVU3UVVGRFpDeDVRa0ZCU3l4RFFVRkRMRTlCUVU4c1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRwUWtGRGVrTXNUVUZCVFR0QlFVTklMSGxDUVVGTExFTkJRVU1zVDBGQlR5eEhRVUZITEV0QlFVc3NRMEZCUXl4TlFVRk5MRWRCUVVjc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0cFFrRkRlRVE3T3p0QlFVRkJMRUZCUjBRc2IwSkJRVWtzUzBGQlN5eERRVUZETEUxQlFVMHNSVUZCUlR0QlFVTmtMSGxDUVVGTExFTkJRVU1zVDBGQlR5eEhRVUZITEZWQk1VUXpRaXhOUVVGTkxFVkJNRVEwUWl4TFFVRkxMRU5CUVVNc1QwRkJUeXhGUVVGRkxFdEJRVXNzUTBGQlF5eEpRVUZKTEVWQlFVVXNUMEZCVHl4RlFVRkZMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dHBRa0ZETlVVN1lVRkRTanRUUVVOS08wdEJRMG83TzBGQmRFTm5RaXhUUVVGTExGZEJkME4wUWl4bFFVRmxMRGhDUVVGSE8wRkJRMlFzTkVKQlEwOHNhMEpCUVUwc1pVRkJaU3hMUVVGQkxFMUJRVVU3UVVGRE1VSXNaVUZCUnl4RlFVRkZMRU5CUVVNN1FVRkRUaXh4UWtGQlV5eEZRVUZGTEVOQlFVTTdRVUZEV2l4clFrRkJUU3hGUVVGRkxFdEJRVXM3VjBGRFpqdExRVU5NT3p0WFFTOURaMElzUzBGQlN6czdPMnRDUVVGTUxFdEJRVXNpTENKbWFXeGxJam9pVkhKaFkyc3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFJRWlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1FXTjBhVzl1SUdaeWIyMGdKeTR2UVdOMGFXOXVKenRjYm1sdGNHOXlkQ0JRYjJsdWRHVnlJR1p5YjIwZ0p5NHVMMmx1Y0hWMEwxQnZhVzUwWlhJbk8xeHVhVzF3YjNKMElIc2djMjF2YjNSb0xDQnZabVp6WlhRZ2ZTQm1jbTl0SUNjdUxpOXBibU12WTJGc1l5YzdYRzVjYmk4cVhHNGdJQ0FnVTJOeVlYQmxJSGd2ZVNCamIyOXlaR2x1WVhSbGN5Qm1jbTl0SUhCeWIzWnBaR1ZrSUdWMlpXNTBYRzVjYmlBZ0lDQkFjR0Z5WVcwZ1cyVjJaVzUwWFZ4dUlDQWdJRUJ5WlhSMWNtNGdXMjlpYW1WamRGMWNiaW92WEc1amIyNXpkQ0J0YjNWelpVVjJaVzUwVkc5UWIybHVkQ0E5SUNobEtTQTlQaUFvZTF4dUlDQWdJSGc2SUdVdWNHRm5aVmdzWEc0Z0lDQWdlVG9nWlM1d1lXZGxXVnh1ZlNrN1hHNWNibU52Ym5OMElIUnZkV05vUlhabGJuUlViMUJ2YVc1MElEMGdLSHNnWTJoaGJtZGxaRlJ2ZFdOb1pYTWdmU2tnUFQ0Z0tIdGNiaUFnSUNCNE9pQmphR0Z1WjJWa1ZHOTFZMmhsYzFzd1hTNWpiR2xsYm5SWUxGeHVJQ0FnSUhrNklHTm9ZVzVuWldSVWIzVmphR1Z6V3pCZExtTnNhV1Z1ZEZsY2JuMHBPMXh1WEc1amIyNXpkQ0JqY21WaGRHVlFiMmx1ZEdWeUlEMGdLR1VwSUQwK0lHVXVkRzkxWTJobGN5QS9YRzRnSUNBZ2JtVjNJRkJ2YVc1MFpYSW9kRzkxWTJoRmRtVnVkRlJ2VUc5cGJuUW9aU2tzSUNkMGIzVmphRzF2ZG1VbkxDQjBiM1ZqYUVWMlpXNTBWRzlRYjJsdWRDa2dPaUJjYmlBZ0lDQnVaWGNnVUc5cGJuUmxjaWh0YjNWelpVVjJaVzUwVkc5UWIybHVkQ2hsS1N3Z0oyMXZkWE5sYlc5MlpTY3NJRzF2ZFhObFJYWmxiblJVYjFCdmFXNTBLVHRjYmx4dVkyOXVjM1FnWjJWMFFXTjBkV0ZzUlhabGJuUWdQU0FvWlNrZ1BUNGdaUzV2Y21sbmFXNWhiRVYyWlc1MElIeDhJR1U3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdOc1lYTnpJRlJ5WVdOcklHVjRkR1Z1WkhNZ1FXTjBhVzl1SUh0Y2JpQWdJQ0J6ZEdGeWRDaHBibkIxZENrZ2UxeHVJQ0FnSUNBZ0lDQnpkWEJsY2k1emRHRnlkQ2dwTzF4dVhHNGdJQ0FnSUNBZ0lHbG1JQ2hwYm5CMWRDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVwYm5CMWRDQTlJR2x1Y0hWMExuTjBZWFJsSUQ4Z2FXNXdkWFFnT2lCamNtVmhkR1ZRYjJsdWRHVnlLR2RsZEVGamRIVmhiRVYyWlc1MEtHbHVjSFYwS1NrN1hHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0IwYUdsekxtbHVjSFYwVDJabWMyVjBJRDBnZTMwN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YVc1d2RYUlBjbWxuYVc0Z1BTQjdJQzR1TG5Sb2FYTXVhVzV3ZFhRdWMzUmhkR1VnZlR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVwYm5CMWRDNXpkR0Z5ZENncE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhOMGIzQW9LU0I3WEc0Z0lDQWdJQ0FnSUhOMWNHVnlMbk4wYjNBb0tUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1cGJuQjFkQzV6ZEc5d0tDazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2IyNVZjR1JoZEdVb2RISmhZMnNzSUdaeVlXMWxVM1JoYlhBc0lHVnNZWEJ6WldRcElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1cGJuQjFkRTltWm5ObGRDQTlJRzltWm5ObGRDaDBhR2x6TG1sdWNIVjBUM0pwWjJsdUxDQjBhR2x6TG1sdWNIVjBMbk4wWVhSbEtUdGNibHh1SUNBZ0lDQWdJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUhSb2FYTXViblZ0Vm1Gc2RXVkxaWGx6T3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUd0bGVTQTlJSFJvYVhNdWRtRnNkV1ZMWlhselcybGRPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvZEdocGN5NXBibkIxZEU5bVpuTmxkQzVvWVhOUGQyNVFjbTl3WlhKMGVTaHJaWGtwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnZG1Gc2RXVWdQU0IwYUdsekxuWmhiSFZsYzF0clpYbGRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMllXeDFaUzVrYVhKbFkzUXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnNkV1V1WTNWeWNtVnVkQ0E5SUhSb2FYTXVhVzV3ZFhRdWMzUmhkR1ZiYTJWNVhUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IyWVd4MVpTNWpkWEp5Wlc1MElEMGdkbUZzZFdVdWIzSnBaMmx1SUNzZ2RHaHBjeTVwYm5CMWRFOW1abk5sZEZ0clpYbGRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM4dklGTnRiMjkwYUNCMllXeDFaU0JwWmlCM1pTQm9ZWFpsSUhOdGIyOTBhR2x1WjF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDaDJZV3gxWlM1emJXOXZkR2dwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZzZFdVdVkzVnljbVZ1ZENBOUlITnRiMjkwYUNoMllXeDFaUzVqZFhKeVpXNTBMQ0IyWVd4MVpTNXdjbVYyTENCbGJHRndjMlZrTENCMllXeDFaUzV6Ylc5dmRHZ3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lHZGxkRVJsWm1GMWJIUldZV3gxWlNncElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIdGNiaUFnSUNBZ0lDQWdJQ0FnSUM0dUxuTjFjR1Z5TG1kbGRFUmxabUYxYkhSV1lXeDFaU2dwTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdZVzF3T2lBeExGeHVJQ0FnSUNBZ0lDQWdJQ0FnWlhOallYQmxRVzF3T2lBd0xGeHVJQ0FnSUNBZ0lDQWdJQ0FnWkdseVpXTjBPaUJtWVd4elpWeHVJQ0FnSUNBZ0lDQjlPMXh1SUNBZ0lIMWNibjFjYmlKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvVHJhY2suanNcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfbG9vcCA9IHJlcXVpcmUoJy4vbG9vcCcpO1xuXG52YXIgbG9vcCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9sb29wKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgUHJvY2VzcyA9IChmdW5jdGlvbiAoKSB7XG4gICAgLypcbiAgICAgICAgW29iamVjdF06IFByb3BlcnRpZXNcbiAgICAqL1xuXG4gICAgZnVuY3Rpb24gUHJvY2Vzcyhwcm9wcykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQcm9jZXNzKTtcblxuICAgICAgICB0aGlzLmlkID0gbG9vcC5nZXRQcm9jZXNzSWQoKTtcblxuICAgICAgICB0aGlzLl9vbkNsZWFudXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5zdG9wKCk7XG4gICAgICAgICAgICBfdGhpcy5vbkNsZWFudXAgPSB1bmRlZmluZWQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fb25BY3RpdmF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5vbkNsZWFudXAgPSBfdGhpcy5fb25DbGVhbnVwO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc2V0KHRoaXMuZ2V0RGVmYXVsdFByb3BzKCkpO1xuICAgICAgICB0aGlzLnNldChwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIFByb2Nlc3MucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIHNldChwcm9wcykge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICAgICAgICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhpc1trZXldID0gcHJvcHNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBQcm9jZXNzLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgICBsb29wLmFjdGl2YXRlKHRoaXMuaWQsIHRoaXMpO1xuXG4gICAgICAgIHRoaXMub25DbGVhbnVwID0gdGhpcy5vbkFjdGl2YXRlID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIC8vIFByaXZhdGUgYG9uU3RhcnRgXG4gICAgICAgIGlmICh0aGlzLl9vblN0YXJ0KSB7XG4gICAgICAgICAgICB0aGlzLl9vblN0YXJ0KHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUHVibGljIGBvblN0YXJ0YFxuICAgICAgICBpZiAodGhpcy5vblN0YXJ0KSB7XG4gICAgICAgICAgICB0aGlzLm9uU3RhcnQodGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgUHJvY2Vzcy5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAgIGxvb3AuZGVhY3RpdmF0ZSh0aGlzLmlkKTtcblxuICAgICAgICAvLyBQcml2YXRlIGBvblN0b3BgXG4gICAgICAgIGlmICh0aGlzLl9vblN0b3ApIHtcbiAgICAgICAgICAgIHRoaXMuX29uU3RvcCh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFB1YmxpYyBgb25TdG9wYFxuICAgICAgICBpZiAodGhpcy5vblN0b3ApIHtcbiAgICAgICAgICAgIHRoaXMub25TdG9wKHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIFByb2Nlc3MucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbiBvbmNlKCkge1xuICAgICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgICAgIHRoaXMub25BY3RpdmF0ZSA9IHRoaXMuX29uQWN0aXZhdGU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICAvKlxuICAgICAgICAjIEdldCBkZWZhdWx0IEFjdGlvbiBwcm9wZXJ0aWVzXG4gICAgICAgICBAcmV0dXJuIFtvYmplY3RdXG4gICAgKi9cblxuICAgIFByb2Nlc3MucHJvdG90eXBlLmdldERlZmF1bHRQcm9wcyA9IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH07XG5cbiAgICAvKlxuICAgICAgICAjIEV4dGVuZCB0aGlzIFByb2Nlc3Mgd2l0aCBuZXcgcHJvcGVydGllc1xuICAgICAgICAjIyBSZXR1cm5zIG5ldyBpbnN0YW5jZSBvZiB0aGlzIFByb2Nlc3MncyBgcHJvdG90eXBlYCB3aXRoIGV4aXN0aW5nIGFuZCBuZXcgcHJvcGVydGllc1xuICAgICAgICAgQHBhcmFtIFtvYmplY3RdIChvcHRpb25hbClcbiAgICAgICAgQHJldHVybiBbUHJvY2Vzc11cbiAgICAqL1xuXG4gICAgUHJvY2Vzcy5wcm90b3R5cGUuaW5oZXJpdCA9IGZ1bmN0aW9uIGluaGVyaXQocHJvcHMpIHtcbiAgICAgICAgdmFyIGlkID0gdGhpcy5pZDtcblxuICAgICAgICB2YXIgaW5oZXJpdGVkUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXModGhpcywgWydpZCddKTtcblxuICAgICAgICB2YXIgbmV3UHJvY2VzcyA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKGluaGVyaXRlZFByb3BzKTtcbiAgICAgICAgcmV0dXJuIG5ld1Byb2Nlc3Muc2V0KHByb3BzKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFByb2Nlc3M7XG59KSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBQcm9jZXNzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl3Y205alpYTnpMMUJ5YjJObGMzTXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN08wbEJRVmtzU1VGQlNUczdPenM3T3pzN1NVRkZTeXhQUVVGUE96czdPenRCUVVsNFFpeGhRVXBwUWl4UFFVRlBMRU5CU1Zvc1MwRkJTeXhGUVVGRk96czdPRUpCU2tZc1QwRkJUenM3UVVGTGNFSXNXVUZCU1N4RFFVRkRMRVZCUVVVc1IwRkJSeXhKUVVGSkxFTkJRVU1zV1VGQldTeEZRVUZGTEVOQlFVTTdPMEZCUlRsQ0xGbEJRVWtzUTBGQlF5eFZRVUZWTEVkQlFVY3NXVUZCVFR0QlFVTndRaXhyUWtGQlN5eEpRVUZKTEVWQlFVVXNRMEZCUXp0QlFVTmFMR3RDUVVGTExGTkJRVk1zUjBGQlJ5eFRRVUZUTEVOQlFVTTdVMEZET1VJc1EwRkJRenM3UVVGRlJpeFpRVUZKTEVOQlFVTXNWMEZCVnl4SFFVRkhPMjFDUVVGTkxFMUJRVXNzVTBGQlV5eEhRVUZITEUxQlFVc3NWVUZCVlR0VFFVRkJMRU5CUVVNN08wRkJSVEZFTEZsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExHVkJRV1VzUlVGQlJTeERRVUZETEVOQlFVTTdRVUZEYWtNc1dVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXpzN1FVRkZhRUlzV1VGQlNTeERRVUZETEZGQlFWRXNSMEZCUnl4TFFVRkxMRU5CUVVNN1MwRkRla0k3TzBGQmJFSm5RaXhYUVVGUExGZEJiMEo0UWl4SFFVRkhMR2RDUVVGRExFdEJRVXNzUlVGQlJUdEJRVU5RTEdGQlFVc3NTVUZCU1N4SFFVRkhMRWxCUVVrc1MwRkJTeXhGUVVGRk8wRkJRMjVDTEdkQ1FVRkpMRXRCUVVzc1EwRkJReXhqUVVGakxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVTdRVUZETTBJc2IwSkJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03WVVGRE1VSTdVMEZEU2pzN1FVRkZSQ3hsUVVGUExFbEJRVWtzUTBGQlF6dExRVU5tT3p0QlFUVkNaMElzVjBGQlR5eFhRVGhDZUVJc1MwRkJTeXh2UWtGQlJ6dEJRVU5LTEZsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXpzN1FVRkZOMElzV1VGQlNTeERRVUZETEZOQlFWTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hIUVVGSExGTkJRVk03T3p0QlFVRkRMRUZCUnpkRExGbEJRVWtzU1VGQlNTeERRVUZETEZGQlFWRXNSVUZCUlR0QlFVTm1MR2RDUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMU5CUTNaQ096czdRVUZCUVN4QlFVZEVMRmxCUVVrc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJUdEJRVU5rTEdkQ1FVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFOQlEzUkNPenRCUVVWRUxHVkJRVThzU1VGQlNTeERRVUZETzB0QlEyWTdPMEZCT1VOblFpeFhRVUZQTEZkQlowUjRRaXhKUVVGSkxHMUNRVUZITzBGQlEwZ3NXVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZET3pzN1FVRkJReXhCUVVkNlFpeFpRVUZKTEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVN1FVRkRaQ3huUWtGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRUUVVOMFFqczdPMEZCUVVFc1FVRkhSQ3haUVVGSkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVTdRVUZEWWl4blFrRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0VFFVTnlRanM3UVVGRlJDeGxRVUZQTEVsQlFVa3NRMEZCUXp0TFFVTm1PenRCUVRsRVowSXNWMEZCVHl4WFFXZEZlRUlzU1VGQlNTeHRRa0ZCUnp0QlFVTklMRmxCUVVrc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF6dEJRVU5pTEZsQlFVa3NRMEZCUXl4VlFVRlZMRWRCUVVjc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF6dEJRVU51UXl4bFFVRlBMRWxCUVVrc1EwRkJRenRMUVVObU96czdPenM3TzBGQmNFVm5RaXhYUVVGUExGZEJNa1Y0UWl4bFFVRmxMRGhDUVVGSE8wRkJRMlFzWlVGQlR5eEZRVUZGTEVOQlFVTTdTMEZEWWpzN096czdPenM3TzBGQk4wVm5RaXhYUVVGUExGZEJjMFo0UWl4UFFVRlBMRzlDUVVGRExFdEJRVXNzUlVGQlJUdFpRVU5JTEVWQlFVVXNSMEZCZDBJc1NVRkJTU3hEUVVFNVFpeEZRVUZGT3p0WlFVRkxMR05CUVdNc05FSkJRVXNzU1VGQlNUczdRVUZEZEVNc1dVRkJUU3hWUVVGVkxFZEJRVWNzU1VGQlNTeEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMR05CUVdNc1EwRkJReXhEUVVGRE8wRkJRM2hFTEdWQlFVOHNWVUZCVlN4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dExRVU5vUXpzN1YwRXhSbWRDTEU5QlFVODdPenRyUWtGQlVDeFBRVUZQSWl3aVptbHNaU0k2SWxCeWIyTmxjM011YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhSUVpYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdLaUJoY3lCc2IyOXdJR1p5YjIwZ0p5NHZiRzl2Y0NjN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHTnNZWE56SUZCeWIyTmxjM01nZTF4dUlDQWdJQzhxWEc0Z0lDQWdJQ0FnSUZ0dlltcGxZM1JkT2lCUWNtOXdaWEowYVdWelhHNGdJQ0FnS2k5Y2JpQWdJQ0JqYjI1emRISjFZM1J2Y2lod2NtOXdjeWtnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbWxrSUQwZ2JHOXZjQzVuWlhSUWNtOWpaWE56U1dRb0tUdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxsOXZia05zWldGdWRYQWdQU0FvS1NBOVBpQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbk4wYjNBb0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXViMjVEYkdWaGJuVndJRDBnZFc1a1pXWnBibVZrTzF4dUlDQWdJQ0FnSUNCOU8xeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdVgyOXVRV04wYVhaaGRHVWdQU0FvS1NBOVBpQjBhR2x6TG05dVEyeGxZVzUxY0NBOUlIUm9hWE11WDI5dVEyeGxZVzUxY0R0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG5ObGRDaDBhR2x6TG1kbGRFUmxabUYxYkhSUWNtOXdjeWdwS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV6WlhRb2NISnZjSE1wTzF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11YVhOQlkzUnBkbVVnUFNCbVlXeHpaVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnpaWFFvY0hKdmNITXBJSHRjYmlBZ0lDQWdJQ0FnWm05eUlDaHNaWFFnYTJWNUlHbHVJSEJ5YjNCektTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9jSEp2Y0hNdWFHRnpUM2R1VUhKdmNHVnlkSGtvYTJWNUtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhOYmEyVjVYU0E5SUhCeWIzQnpXMnRsZVYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjenRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnpkR0Z5ZENncElIdGNiaUFnSUNBZ0lDQWdiRzl2Y0M1aFkzUnBkbUYwWlNoMGFHbHpMbWxrTENCMGFHbHpLVHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbTl1UTJ4bFlXNTFjQ0E5SUhSb2FYTXViMjVCWTNScGRtRjBaU0E5SUhWdVpHVm1hVzVsWkR0Y2JseHVJQ0FnSUNBZ0lDQXZMeUJRY21sMllYUmxJR0J2YmxOMFlYSjBZRnh1SUNBZ0lDQWdJQ0JwWmlBb2RHaHBjeTVmYjI1VGRHRnlkQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1ZmIyNVRkR0Z5ZENoMGFHbHpLVHRjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDOHZJRkIxWW14cFl5QmdiMjVUZEdGeWRHQmNiaUFnSUNBZ0lDQWdhV1lnS0hSb2FYTXViMjVUZEdGeWRDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV2YmxOMFlYSjBLSFJvYVhNcE8xeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYzNSdmNDZ3BJSHRjYmlBZ0lDQWdJQ0FnYkc5dmNDNWtaV0ZqZEdsMllYUmxLSFJvYVhNdWFXUXBPMXh1WEc0Z0lDQWdJQ0FnSUM4dklGQnlhWFpoZEdVZ1lHOXVVM1J2Y0dCY2JpQWdJQ0FnSUNBZ2FXWWdLSFJvYVhNdVgyOXVVM1J2Y0NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NWZiMjVUZEc5d0tIUm9hWE1wTzF4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdMeThnVUhWaWJHbGpJR0J2YmxOMGIzQmdYRzRnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbTl1VTNSdmNDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV2YmxOMGIzQW9kR2hwY3lrN1hHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3p0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J2Ym1ObEtDa2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxuTjBZWEowS0NrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YjI1QlkzUnBkbUYwWlNBOUlIUm9hWE11WDI5dVFXTjBhWFpoZEdVN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNBZ0lIMWNibHh1SUNBZ0lDOHFYRzRnSUNBZ0lDQWdJQ01nUjJWMElHUmxabUYxYkhRZ1FXTjBhVzl1SUhCeWIzQmxjblJwWlhOY2JseHVJQ0FnSUNBZ0lDQkFjbVYwZFhKdUlGdHZZbXBsWTNSZFhHNGdJQ0FnS2k5Y2JpQWdJQ0JuWlhSRVpXWmhkV3gwVUhKdmNITW9LU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUI3ZlR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0F2S2x4dUlDQWdJQ0FnSUNBaklFVjRkR1Z1WkNCMGFHbHpJRkJ5YjJObGMzTWdkMmwwYUNCdVpYY2djSEp2Y0dWeWRHbGxjMXh1SUNBZ0lDQWdJQ0FqSXlCU1pYUjFjbTV6SUc1bGR5QnBibk4wWVc1alpTQnZaaUIwYUdseklGQnliMk5sYzNNbmN5QmdjSEp2ZEc5MGVYQmxZQ0IzYVhSb0lHVjRhWE4wYVc1bklHRnVaQ0J1WlhjZ2NISnZjR1Z5ZEdsbGMxeHVYRzRnSUNBZ0lDQWdJRUJ3WVhKaGJTQmJiMkpxWldOMFhTQW9iM0IwYVc5dVlXd3BYRzRnSUNBZ0lDQWdJRUJ5WlhSMWNtNGdXMUJ5YjJObGMzTmRYRzRnSUNBZ0tpOWNiaUFnSUNCcGJtaGxjbWwwS0hCeWIzQnpLU0I3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJSHNnYVdRc0lDNHVMbWx1YUdWeWFYUmxaRkJ5YjNCeklIMGdQU0IwYUdsek8xeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCdVpYZFFjbTlqWlhOeklEMGdibVYzSUhSb2FYTXVZMjl1YzNSeWRXTjBiM0lvYVc1b1pYSnBkR1ZrVUhKdmNITXBPMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdibVYzVUhKdlkyVnpjeTV6WlhRb2NISnZjSE1wTzF4dUlDQWdJSDFjYm4waVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3Byb2Nlc3MvUHJvY2Vzcy5qc1xuICoqIG1vZHVsZSBpZCA9IDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9Qcm9jZXNzMiA9IHJlcXVpcmUoJy4uL3Byb2Nlc3MvUHJvY2VzcycpO1xuXG52YXIgX1Byb2Nlc3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUHJvY2VzczIpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIElucHV0ID0gKGZ1bmN0aW9uIChfUHJvY2Vzcykge1xuICAgIF9pbmhlcml0cyhJbnB1dCwgX1Byb2Nlc3MpO1xuXG4gICAgZnVuY3Rpb24gSW5wdXQoaW5pdGlhbFZhbHVlcywgcG9sbCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW5wdXQpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Qcm9jZXNzLmNhbGwodGhpcykpO1xuXG4gICAgICAgIF90aGlzLnN0YXRlID0gaW5pdGlhbFZhbHVlcztcblxuICAgICAgICBpZiAoKDAsIF91dGlscy5pc0Z1bmMpKHBvbGwpKSB7XG4gICAgICAgICAgICBfdGhpcy5vbkZyYW1lU3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLmxhdGVzdChfdGhpcy5wb2xsKCkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgTWFudWFsbHkgYWRkIGxhdGVzdCB2YWx1ZXNcbiAgICAgICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgICovXG5cbiAgICBJbnB1dC5wcm90b3R5cGUubGF0ZXN0ID0gZnVuY3Rpb24gbGF0ZXN0KHByb3BzKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBfZXh0ZW5kcyh7fSwgdGhpcy5zdGF0ZSwgcHJvcHMpO1xuICAgIH07XG5cbiAgICByZXR1cm4gSW5wdXQ7XG59KShfUHJvY2VzczMuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IElucHV0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm5CMWRDOUpibkIxZEM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3T3pzN096czdPenM3T3pzN096dEpRVWR4UWl4TFFVRkxPMk5CUVV3c1MwRkJTenM3UVVGRGRFSXNZVUZFYVVJc1MwRkJTeXhEUVVOV0xHRkJRV0VzUlVGQlJTeEpRVUZKTEVWQlFVVTdPRUpCUkdoQ0xFdEJRVXM3TzNGRVFVVnNRaXh0UWtGQlR6czdRVUZEVUN4alFVRkxMRXRCUVVzc1IwRkJSeXhoUVVGaExFTkJRVU03TzBGQlJUTkNMRmxCUVVrc1YwRlFTQ3hOUVVGTkxFVkJUMGtzU1VGQlNTeERRVUZETEVWQlFVVTdRVUZEWkN4clFrRkJTeXhaUVVGWkxFZEJRVWM3ZFVKQlFVMHNUVUZCU3l4TlFVRk5MRU5CUVVNc1RVRkJTeXhKUVVGSkxFVkJRVVVzUTBGQlF6dGhRVUZCTEVOQlFVTTdVMEZEZEVRN08wdEJRMG83T3pzN096dEJRVUZCTzBGQlVtZENMRk5CUVVzc1YwRmxkRUlzVFVGQlRTeHRRa0ZCUXl4TFFVRkxMRVZCUVVVN1FVRkRWaXhaUVVGSkxFTkJRVU1zUzBGQlN5eG5Ra0ZCVVN4SlFVRkpMRU5CUVVNc1MwRkJTeXhGUVVGTExFdEJRVXNzUTBGQlJTeERRVUZETzB0QlF6VkRPenRYUVdwQ1owSXNTMEZCU3pzN08ydENRVUZNTEV0QlFVc2lMQ0ptYVd4bElqb2lTVzV3ZFhRdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUlFaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnVUhKdlkyVnpjeUJtY205dElDY3VMaTl3Y205alpYTnpMMUJ5YjJObGMzTW5PMXh1YVcxd2IzSjBJSHNnYVhOR2RXNWpJSDBnWm5KdmJTQW5MaTR2YVc1akwzVjBhV3h6Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1kyeGhjM01nU1c1d2RYUWdaWGgwWlc1a2N5QlFjbTlqWlhOeklIdGNiaUFnSUNCamIyNXpkSEoxWTNSdmNpaHBibWwwYVdGc1ZtRnNkV1Z6TENCd2IyeHNLU0I3WEc0Z0lDQWdJQ0FnSUhOMWNHVnlLQ2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjM1JoZEdVZ1BTQnBibWwwYVdGc1ZtRnNkV1Z6TzF4dVhHNGdJQ0FnSUNBZ0lHbG1JQ2hwYzBaMWJtTW9jRzlzYkNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXViMjVHY21GdFpWTjBZWEowSUQwZ0tDa2dQVDRnZEdocGN5NXNZWFJsYzNRb2RHaHBjeTV3YjJ4c0tDa3BPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeXBjYmlBZ0lDQWdJQ0FnVFdGdWRXRnNiSGtnWVdSa0lHeGhkR1Z6ZENCMllXeDFaWE5jYmx4dUlDQWdJQ0FnSUNCQWNHRnlZVzBnVzI5aWFtVmpkRjFjYmlBZ0lDQXFMMXh1SUNBZ0lHeGhkR1Z6ZENod2NtOXdjeWtnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbk4wWVhSbElEMGdleUF1TGk1MGFHbHpMbk4wWVhSbExDQXVMaTV3Y205d2N5QjlPMXh1SUNBZ0lIMWNibjFjYmlKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lucHV0L0lucHV0LmpzXG4gKiogbW9kdWxlIGlkID0gMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHN0YWdnZXI7XG5cbnZhciBfVHdlZW4gPSByZXF1aXJlKCcuLi9hY3Rpb25zL1R3ZWVuJyk7XG5cbnZhciBfVHdlZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVHdlZW4pO1xuXG52YXIgX3ByZXNldEVhc2luZyA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvZWFzaW5nL3ByZXNldC1lYXNpbmcnKTtcblxudmFyIF9wcmVzZXRFYXNpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlc2V0RWFzaW5nKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIERFRkFVTFRfSU5URVJWQUwgPSAxMDA7XG5cbmZ1bmN0aW9uIHN0YWdnZXIoYXJyYXksIGNhbGxiYWNrLCBwcm9wcykge1xuICAgIHZhciBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgICB2YXIgcHJvcHNJc0ludGVydmFsID0gKDAsIF91dGlscy5pc051bSkocHJvcHMpO1xuICAgIHZhciBpbnRlcnZhbCA9IHByb3BzSXNJbnRlcnZhbCA/IHByb3BzIDogcHJvcHMuaW50ZXJ2YWwgfHwgREVGQVVMVF9JTlRFUlZBTDtcbiAgICB2YXIgcHJldkluZGV4ID0gLTE7XG5cbiAgICB2YXIgc3RhZ2dlclR3ZWVuID0gbmV3IF9Ud2VlbjIuZGVmYXVsdCh7XG4gICAgICAgIGR1cmF0aW9uOiBpbnRlcnZhbCAqIGFycmF5TGVuZ3RoLFxuICAgICAgICB2YWx1ZXM6IHtcbiAgICAgICAgICAgIGk6IHtcbiAgICAgICAgICAgICAgICBmcm9tOiAwLFxuICAgICAgICAgICAgICAgIHRvOiBhcnJheUxlbmd0aCAtIDEsXG4gICAgICAgICAgICAgICAgcm91bmQ6IHRydWUsXG4gICAgICAgICAgICAgICAgZWFzZTogcHJvcHNJc0ludGVydmFsID8gX3ByZXNldEVhc2luZzIuZGVmYXVsdC5saW5lYXIgOiBwcm9wcy5lYXNlIHx8IF9wcmVzZXRFYXNpbmcyLmRlZmF1bHQubGluZWFyXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9uUmVuZGVyOiBmdW5jdGlvbiAodHdlZW4pIHtcbiAgICAgICAgICAgIHZhciBpID0gdHdlZW4uc3RhdGUuaTtcbiAgICAgICAgICAgIHZhciBnYXBJbmRleCA9IHByZXZJbmRleCArIDE7XG5cbiAgICAgICAgICAgIGZvciAoOyBnYXBJbmRleCA8PSBpOyBnYXBJbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soYXJyYXlbZ2FwSW5kZXhdLCBnYXBJbmRleCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHByZXZJbmRleCA9IGk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ29tcGxldGU6IHByb3BzSXNJbnRlcnZhbCA/IHVuZGVmaW5lZCA6IHByb3BzLm9uQ29tcGxldGVcbiAgICB9KTtcblxuICAgIHN0YWdnZXJUd2Vlbi5zdGFydCgpO1xuXG4gICAgcmV0dXJuIHN0YWdnZXJUd2Vlbjtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJtTXZjM1JoWjJkbGNpNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3YTBKQlRYZENMRTlCUVU4N096czdPenM3T3pzN096czdPMEZCUmk5Q0xFbEJRVTBzWjBKQlFXZENMRWRCUVVjc1IwRkJSeXhEUVVGRE96dEJRVVZrTEZOQlFWTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1JVRkJSU3hSUVVGUkxFVkJRVVVzUzBGQlN5eEZRVUZGTzBGQlEzQkVMRkZCUVUwc1YwRkJWeXhIUVVGSExFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTTdRVUZEYWtNc1VVRkJUU3hsUVVGbExFZEJRVWNzVjBGT2JrSXNTMEZCU3l4RlFVMXZRaXhMUVVGTExFTkJRVU1zUTBGQlF6dEJRVU55UXl4UlFVRk5MRkZCUVZFc1IwRkJSeXhsUVVGbExFZEJRVWNzUzBGQlN5eEhRVUZITEV0QlFVc3NRMEZCUXl4UlFVRlJMRWxCUVVrc1owSkJRV2RDTEVOQlFVTTdRVUZET1VVc1VVRkJTU3hUUVVGVExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdPMEZCUlc1Q0xGRkJRVTBzV1VGQldTeEhRVUZITEc5Q1FVRlZPMEZCUXpOQ0xHZENRVUZSTEVWQlFVVXNVVUZCVVN4SFFVRkhMRmRCUVZjN1FVRkRhRU1zWTBGQlRTeEZRVUZGTzBGQlEwb3NZVUZCUXl4RlFVRkZPMEZCUTBNc2IwSkJRVWtzUlVGQlJTeERRVUZETzBGQlExQXNhMEpCUVVVc1JVRkJSU3hYUVVGWExFZEJRVWNzUTBGQlF6dEJRVU51UWl4eFFrRkJTeXhGUVVGRkxFbEJRVWs3UVVGRFdDeHZRa0ZCU1N4RlFVRkZMR1ZCUVdVc1IwRkJSeXgxUWtGQlR5eE5RVUZOTEVkQlFVY3NTMEZCU3l4RFFVRkRMRWxCUVVrc1NVRkJTU3gxUWtGQlR5eE5RVUZOTzJGQlEzUkZPMU5CUTBvN1FVRkRSQ3huUWtGQlVTeEZRVUZGTEZWQlFVTXNTMEZCU3l4RlFVRkxPMEZCUTJwQ0xHZENRVUZOTEVOQlFVTXNSMEZCUnl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU40UWl4blFrRkJTU3hSUVVGUkxFZEJRVWNzVTBGQlV5eEhRVUZITEVOQlFVTXNRMEZCUXpzN1FVRkZOMElzYlVKQlFVOHNVVUZCVVN4SlFVRkpMRU5CUVVNc1JVRkJSU3hSUVVGUkxFVkJRVVVzUlVGQlJUdEJRVU01UWl4M1FrRkJVU3hEUVVGRExFdEJRVXNzUTBGQlF5eFJRVUZSTEVOQlFVTXNSVUZCUlN4UlFVRlJMRU5CUVVNc1EwRkJRenRoUVVOMlF6czdRVUZGUkN4eFFrRkJVeXhIUVVGSExFTkJRVU1zUTBGQlF6dFRRVU5xUWp0QlFVTkVMR3RDUVVGVkxFVkJRVVVzWlVGQlpTeEhRVUZITEZOQlFWTXNSMEZCUnl4TFFVRkxMRU5CUVVNc1ZVRkJWVHRMUVVNM1JDeERRVUZETEVOQlFVTTdPMEZCUlVnc1owSkJRVmtzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXpzN1FVRkZja0lzVjBGQlR5eFpRVUZaTEVOQlFVTTdRMEZEZGtJaUxDSm1hV3hsSWpvaWMzUmhaMmRsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRGQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0JVZDJWbGJpQm1jbTl0SUNjdUxpOWhZM1JwYjI1ekwxUjNaV1Z1Snp0Y2JtbHRjRzl5ZENCbFlYTnBibWNnWm5KdmJTQW5MaTR2WVdOMGFXOXVjeTlsWVhOcGJtY3ZjSEpsYzJWMExXVmhjMmx1WnljN1hHNXBiWEJ2Y25RZ2V5QnBjMDUxYlNCOUlHWnliMjBnSnk0dmRYUnBiSE1uTzF4dVhHNWpiMjV6ZENCRVJVWkJWVXhVWDBsT1ZFVlNWa0ZNSUQwZ01UQXdPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JtZFc1amRHbHZiaUJ6ZEdGbloyVnlLR0Z5Y21GNUxDQmpZV3hzWW1GamF5d2djSEp2Y0hNcElIdGNiaUFnSUNCamIyNXpkQ0JoY25KaGVVeGxibWQwYUNBOUlHRnljbUY1TG14bGJtZDBhRHRjYmlBZ0lDQmpiMjV6ZENCd2NtOXdjMGx6U1c1MFpYSjJZV3dnUFNCcGMwNTFiU2h3Y205d2N5azdYRzRnSUNBZ1kyOXVjM1FnYVc1MFpYSjJZV3dnUFNCd2NtOXdjMGx6U1c1MFpYSjJZV3dnUHlCd2NtOXdjeUE2SUhCeWIzQnpMbWx1ZEdWeWRtRnNJSHg4SUVSRlJrRlZURlJmU1U1VVJWSldRVXc3WEc0Z0lDQWdiR1YwSUhCeVpYWkpibVJsZUNBOUlDMHhPMXh1WEc0Z0lDQWdZMjl1YzNRZ2MzUmhaMmRsY2xSM1pXVnVJRDBnYm1WM0lGUjNaV1Z1S0h0Y2JpQWdJQ0FnSUNBZ1pIVnlZWFJwYjI0NklHbHVkR1Z5ZG1Gc0lDb2dZWEp5WVhsTVpXNW5kR2dzWEc0Z0lDQWdJQ0FnSUhaaGJIVmxjem9nZTF4dUlDQWdJQ0FnSUNBZ0lDQWdhVG9nZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdaeWIyMDZJREFzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEc4NklHRnljbUY1VEdWdVozUm9JQzBnTVN4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeWIzVnVaRG9nZEhKMVpTeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmxZWE5sT2lCd2NtOXdjMGx6U1c1MFpYSjJZV3dnUHlCbFlYTnBibWN1YkdsdVpXRnlJRG9nY0hKdmNITXVaV0Z6WlNCOGZDQmxZWE5wYm1jdWJHbHVaV0Z5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDBzWEc0Z0lDQWdJQ0FnSUc5dVVtVnVaR1Z5T2lBb2RIZGxaVzRwSUQwK0lIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJR2tnUFNCMGQyVmxiaTV6ZEdGMFpTNXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2JHVjBJR2RoY0VsdVpHVjRJRDBnY0hKbGRrbHVaR1Y0SUNzZ01UdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ1ptOXlJQ2c3SUdkaGNFbHVaR1Y0SUR3OUlHazdJR2RoY0VsdVpHVjRLeXNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCallXeHNZbUZqYXloaGNuSmhlVnRuWVhCSmJtUmxlRjBzSUdkaGNFbHVaR1Y0S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdjSEpsZGtsdVpHVjRJRDBnYVR0Y2JpQWdJQ0FnSUNBZ2ZTeGNiaUFnSUNBZ0lDQWdiMjVEYjIxd2JHVjBaVG9nY0hKdmNITkpjMGx1ZEdWeWRtRnNJRDhnZFc1a1pXWnBibVZrSURvZ2NISnZjSE11YjI1RGIyMXdiR1YwWlZ4dUlDQWdJSDBwTzF4dVhHNGdJQ0FnYzNSaFoyZGxjbFIzWldWdUxuTjBZWEowS0NrN1hHNWNiaUFnSUNCeVpYUjFjbTRnYzNSaFoyZGxjbFIzWldWdU8xeHVmU0pkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL3N0YWdnZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdGltZWxpbmU7XG5cbnZhciBfVHdlZW4gPSByZXF1aXJlKCcuLi9hY3Rpb25zL1R3ZWVuJyk7XG5cbnZhciBfVHdlZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVHdlZW4pO1xuXG52YXIgX3ByZXNldEVhc2luZyA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvZWFzaW5nL3ByZXNldC1lYXNpbmcnKTtcblxudmFyIF9wcmVzZXRFYXNpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlc2V0RWFzaW5nKTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi9jYWxjJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qXG4gICAgQHBhcmFtIFthcnJheV1cbiAgICAgICAgU2VxdWVudGlhbCBhcnJheSBvZiB0d2VlbnMsIGVhY2ggaXRlbSBjYW4gYmUgYSB0d2VlbiBvciBkZWZpbml0aW9uIG9iajpcblxuICAgICAgICBbXG4gICAgICAgICAgICBuZXcgVHdlZW4oKSxcbiAgICAgICAgICAgIHN0YWdnZXIoKSxcbiAgICAgICAgICAgIHRpbWVsaW5lKCksXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHdlZW46IG5ldyBUd2VlbigpLFxuICAgICAgICAgICAgICAgIGF0OiAxMDAsXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiBcIis9MTAwXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuKi9cbnZhciBhbmFseXplID0gZnVuY3Rpb24gKGRlZnMpIHtcbiAgICB2YXIgdGltZWxpbmUgPSBbXTtcbiAgICB2YXIgbnVtRGVmcyA9IGRlZnMubGVuZ3RoO1xuICAgIHZhciBjdXJyZW50UGxheWhlYWQgPSAwO1xuXG4gICAgdmFyIF9sb29wID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgdmFyIGRlZiA9IGRlZnNbaV07XG4gICAgICAgIHZhciBkZWZJc09iaiA9IGRlZi50d2VlbiA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgdmFyIHR3ZWVuID0gZGVmSXNPYmogPyBkZWYudHdlZW4gOiBkZWY7XG5cbiAgICAgICAgY3VycmVudFBsYXloZWFkICs9IGRlZklzT2JqICYmIGRlZi5vZmZzZXQgPyBkZWYuYXQgfHwgKDAsIF9jYWxjLnJlbGF0aXZlVmFsdWUpKGN1cnJlbnRQbGF5aGVhZCwgZGVmLm9mZnNldCkgOiAwO1xuXG4gICAgICAgIHZhciBkdXJhdGlvbiA9IDA7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiB0d2Vlbi52YWx1ZXMpIHtcbiAgICAgICAgICAgIGlmICh0d2Vlbi52YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHR3ZWVuLnZhbHVlc1trZXldO1xuICAgICAgICAgICAgICAgIGR1cmF0aW9uID0gTWF0aC5tYXgoZHVyYXRpb24sIHZhbHVlLmR1cmF0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRpbWVsaW5lLnB1c2goe1xuICAgICAgICAgICAgZnJvbTogY3VycmVudFBsYXloZWFkLFxuICAgICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgICAgICAgZmlyZTogZnVuY3Rpb24gKHRpbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHdlZW4uc2Vla1RpbWUodGltZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGN1cnJlbnRQbGF5aGVhZCArPSB0d2Vlbi5kdXJhdGlvbjtcbiAgICB9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1EZWZzOyBpKyspIHtcbiAgICAgICAgX2xvb3AoaSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgdG90YWxUaW1lOiBjdXJyZW50UGxheWhlYWQsIHRpbWVsaW5lOiB0aW1lbGluZSB9O1xufTtcblxudmFyIHNldFR3ZWVucyA9IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIGVsYXBzZWQgPSBfcmVmLmVsYXBzZWQ7XG4gICAgdmFyIHRpbWVsaW5lID0gX3JlZi50aW1lbGluZTtcbiAgICB2YXIgdGltZWxpbmVMZW5ndGggPSBfcmVmLnRpbWVsaW5lTGVuZ3RoO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aW1lbGluZUxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBfdHdlZW4gPSB0aW1lbGluZVtpXTtcbiAgICAgICAgdmFyIHR3ZWVuVGltZSA9IGVsYXBzZWQgLSBfdHdlZW4uZnJvbTtcblxuICAgICAgICBpZiAodHdlZW5UaW1lID4gMCAmJiB0d2VlblRpbWUgPCBfdHdlZW4uZHVyYXRpb24pIHtcbiAgICAgICAgICAgIF90d2Vlbi5maXJlKHR3ZWVuVGltZSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5mdW5jdGlvbiB0aW1lbGluZShkZWYpIHtcbiAgICB2YXIgcHJvcHMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1sxXTtcblxuICAgIHZhciBfYW5hbHl6ZSA9IGFuYWx5emUoZGVmKTtcblxuICAgIHZhciB0b3RhbFRpbWUgPSBfYW5hbHl6ZS50b3RhbFRpbWU7XG4gICAgdmFyIHRpbWVsaW5lID0gX2FuYWx5emUudGltZWxpbmU7XG5cbiAgICByZXR1cm4gbmV3IF9Ud2VlbjIuZGVmYXVsdChfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgICAgZHVyYXRpb246IHRvdGFsVGltZSxcbiAgICAgICAgZWFzZTogX3ByZXNldEVhc2luZzIuZGVmYXVsdC5saW5lYXIsXG4gICAgICAgIHZhbHVlczoge1xuICAgICAgICAgICAgcDogMVxuICAgICAgICB9LFxuICAgICAgICB0aW1lbGluZTogdGltZWxpbmUsXG4gICAgICAgIHRpbWVsaW5lTGVuZ3RoOiB0aW1lbGluZS5sZW5ndGgsXG4gICAgICAgIG9uUmVuZGVyOiBzZXRUd2VlbnNcbiAgICB9KSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12ZEdsdFpXeHBibVV1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdhMEpCSzBSM1FpeFJRVUZST3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3p0QlFUVkRhRU1zU1VGQlRTeFBRVUZQTEVkQlFVY3NWVUZCUXl4SlFVRkpMRVZCUVVzN1FVRkRkRUlzVVVGQlRTeFJRVUZSTEVkQlFVY3NSVUZCUlN4RFFVRkRPMEZCUTNCQ0xGRkJRVTBzVDBGQlR5eEhRVUZITEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNN1FVRkROVUlzVVVGQlNTeGxRVUZsTEVkQlFVY3NRMEZCUXl4RFFVRkRPenN3UWtGRlppeERRVUZETzBGQlEwNHNXVUZCVFN4SFFVRkhMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBGQlEzQkNMRmxCUVUwc1VVRkJVU3hIUVVGSExFZEJRVWNzUTBGQlF5eExRVUZMTEVkQlFVY3NTVUZCU1N4SFFVRkhMRXRCUVVzc1EwRkJRenRCUVVNeFF5eFpRVUZOTEV0QlFVc3NSMEZCUnl4QlFVRkRMRkZCUVZFc1IwRkJTU3hIUVVGSExFTkJRVU1zUzBGQlN5eEhRVUZITEVkQlFVY3NRMEZCUXpzN1FVRkZNME1zZFVKQlFXVXNTVUZCU3l4QlFVRkRMRkZCUVZFc1NVRkJTU3hIUVVGSExFTkJRVU1zVFVGQlRTeEhRVU4yUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hKUVVGSkxGVkJOVUppTEdGQlFXRXNSVUUwUW1Nc1pVRkJaU3hGUVVGRkxFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRUZCUVVNc1EwRkJRenM3UVVGRk9VUXNXVUZCU1N4UlFVRlJMRWRCUVVjc1EwRkJReXhEUVVGRE8wRkJRMnBDTEdGQlFVc3NTVUZCU1N4SFFVRkhMRWxCUVVrc1MwRkJTeXhEUVVGRExFMUJRVTBzUlVGQlJUdEJRVU14UWl4blFrRkJTU3hMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEdOQlFXTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSVHRCUVVOc1F5eHZRa0ZCVFN4TFFVRkxMRWRCUVVjc1MwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0QlFVTm9ReXgzUWtGQlVTeEhRVUZITEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1VVRkJVU3hGUVVGRkxFdEJRVXNzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0aFFVTnFSRHRUUVVOS096dEJRVVZFTEdkQ1FVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRE8wRkJRMVlzWjBKQlFVa3NSVUZCUlN4bFFVRmxPMEZCUTNKQ0xHOUNRVUZSTEVWQlFVVXNVVUZCVVR0QlFVTnNRaXhuUWtGQlNTeEZRVUZGTEZWQlFVTXNTVUZCU1R0MVFrRkJTeXhMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXp0aFFVRkJPMU5CUTNaRExFTkJRVU1zUTBGQlF6czdRVUZGU0N4MVFrRkJaU3hKUVVGSkxFdEJRVXNzUTBGQlF5eFJRVUZSTEVOQlFVTTdPenRCUVhSQ2RFTXNVMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEU5QlFVOHNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRqUVVGNlFpeERRVUZETzB0QmRVSlVPenRCUVVWRUxGZEJRVThzUlVGQlJTeFRRVUZUTEVWQlFVVXNaVUZCWlN4RlFVRkZMRkZCUVZFc1JVRkJVaXhSUVVGUkxFVkJRVVVzUTBGQlF6dERRVU51UkN4RFFVRkRPenRCUVVWR0xFbEJRVTBzVTBGQlV5eEhRVUZITEdkQ1FVRXlRenRSUVVGNFF5eFBRVUZQTEZGQlFWQXNUMEZCVHp0UlFVRkZMRkZCUVZFc1VVRkJVaXhSUVVGUk8xRkJRVVVzWTBGQll5eFJRVUZrTEdOQlFXTTdPMEZCUTJ4RUxGTkJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhqUVVGakxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdRVUZEY2tNc1dVRkJUU3hOUVVGTExFZEJRVWNzVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUXpGQ0xGbEJRVTBzVTBGQlV5eEhRVUZITEU5QlFVOHNSMEZCUnl4TlFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRE96dEJRVVYyUXl4WlFVRkpMRk5CUVZNc1IwRkJSeXhEUVVGRExFbEJRVWtzVTBGQlV5eEhRVUZITEUxQlFVc3NRMEZCUXl4UlFVRlJMRVZCUVVVN1FVRkROME1zYTBKQlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU03VTBGRGVrSTdTMEZEU2p0RFFVTktMRU5CUVVNN08wRkJSV0VzVTBGQlV5eFJRVUZSTEVOQlFVTXNSMEZCUnl4RlFVRmpPMUZCUVZvc1MwRkJTeXg1UkVGQlJ5eEZRVUZGT3p0dFFrRkRXaXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZET3p0UlFVRndReXhUUVVGVExGbEJRVlFzVTBGQlV6dFJRVUZGTEZGQlFWRXNXVUZCVWl4UlFVRlJPenRCUVVVelFpeFhRVUZQTEdsRFFVTkJMRXRCUVVzN1FVRkRVaXhuUWtGQlVTeEZRVUZGTEZOQlFWTTdRVUZEYmtJc1dVRkJTU3hGUVVGRkxIVkNRVUZQTEUxQlFVMDdRVUZEYmtJc1kwRkJUU3hGUVVGRk8wRkJRMG9zWVVGQlF5eEZRVUZGTEVOQlFVTTdVMEZEVUR0QlFVTkVMR2RDUVVGUkxFVkJRVVVzVVVGQlVUdEJRVU5zUWl4elFrRkJZeXhGUVVGRkxGRkJRVkVzUTBGQlF5eE5RVUZOTzBGQlF5OUNMR2RDUVVGUkxFVkJRVVVzVTBGQlV6dFBRVU55UWl4RFFVRkRPME5CUTA0aUxDSm1hV3hsSWpvaWRHbHRaV3hwYm1VdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUlFaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnVkhkbFpXNGdabkp2YlNBbkxpNHZZV04wYVc5dWN5OVVkMlZsYmljN1hHNXBiWEJ2Y25RZ1pXRnphVzVuSUdaeWIyMGdKeTR1TDJGamRHbHZibk12WldGemFXNW5MM0J5WlhObGRDMWxZWE5wYm1jbk8xeHVhVzF3YjNKMElIc2djbVZzWVhScGRtVldZV3gxWlNCOUlHWnliMjBnSnk0dlkyRnNZeWM3WEc1Y2JpOHFYRzRnSUNBZ1FIQmhjbUZ0SUZ0aGNuSmhlVjFjYmlBZ0lDQWdJQ0FnVTJWeGRXVnVkR2xoYkNCaGNuSmhlU0J2WmlCMGQyVmxibk1zSUdWaFkyZ2dhWFJsYlNCallXNGdZbVVnWVNCMGQyVmxiaUJ2Y2lCa1pXWnBibWwwYVc5dUlHOWlhanBjYmx4dUlDQWdJQ0FnSUNCYlhHNGdJQ0FnSUNBZ0lDQWdJQ0J1WlhjZ1ZIZGxaVzRvS1N4Y2JpQWdJQ0FnSUNBZ0lDQWdJSE4wWVdkblpYSW9LU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lIUnBiV1ZzYVc1bEtDa3NYRzRnSUNBZ0lDQWdJQ0FnSUNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RIZGxaVzQ2SUc1bGR5QlVkMlZsYmlncExGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHRjBPaUF4TURBc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2IyWm1jMlYwT2lCY0lpczlNVEF3WENKY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnWFZ4dUtpOWNibU52Ym5OMElHRnVZV3g1ZW1VZ1BTQW9aR1ZtY3lrZ1BUNGdlMXh1SUNBZ0lHTnZibk4wSUhScGJXVnNhVzVsSUQwZ1cxMDdYRzRnSUNBZ1kyOXVjM1FnYm5WdFJHVm1jeUE5SUdSbFpuTXViR1Z1WjNSb08xeHVJQ0FnSUd4bGRDQmpkWEp5Wlc1MFVHeGhlV2hsWVdRZ1BTQXdPMXh1WEc0Z0lDQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0J1ZFcxRVpXWnpPeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ1pHVm1JRDBnWkdWbWMxdHBYVHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdaR1ZtU1hOUFltb2dQU0JrWldZdWRIZGxaVzRnUHlCMGNuVmxJRG9nWm1Gc2MyVTdYRzRnSUNBZ0lDQWdJR052Ym5OMElIUjNaV1Z1SUQwZ0tHUmxaa2x6VDJKcUtTQS9JR1JsWmk1MGQyVmxiaUE2SUdSbFpqdGNibHh1SUNBZ0lDQWdJQ0JqZFhKeVpXNTBVR3hoZVdobFlXUWdLejBnS0Noa1pXWkpjMDlpYWlBbUppQmtaV1l1YjJabWMyVjBLU0EvWEc0Z0lDQWdJQ0FnSUNBZ0lDQmtaV1l1WVhRZ2ZId2djbVZzWVhScGRtVldZV3gxWlNoamRYSnlaVzUwVUd4aGVXaGxZV1FzSUdSbFppNXZabVp6WlhRcElEb2dNQ2s3WEc1Y2JpQWdJQ0FnSUNBZ2JHVjBJR1IxY21GMGFXOXVJRDBnTUR0Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2EyVjVJR2x1SUhSM1pXVnVMblpoYkhWbGN5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFIzWldWdUxuWmhiSFZsY3k1b1lYTlBkMjVRY205d1pYSjBlU2hyWlhrcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2RtRnNkV1VnUFNCMGQyVmxiaTUyWVd4MVpYTmJhMlY1WFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCa2RYSmhkR2x2YmlBOUlFMWhkR2d1YldGNEtHUjFjbUYwYVc5dUxDQjJZV3gxWlM1a2RYSmhkR2x2YmlrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQjBhVzFsYkdsdVpTNXdkWE5vS0h0Y2JpQWdJQ0FnSUNBZ0lDQWdJR1p5YjIwNklHTjFjbkpsYm5SUWJHRjVhR1ZoWkN4Y2JpQWdJQ0FnSUNBZ0lDQWdJR1IxY21GMGFXOXVPaUJrZFhKaGRHbHZiaXhjYmlBZ0lDQWdJQ0FnSUNBZ0lHWnBjbVU2SUNoMGFXMWxLU0E5UGlCMGQyVmxiaTV6WldWclZHbHRaU2gwYVcxbEtWeHVJQ0FnSUNBZ0lDQjlLVHRjYmx4dUlDQWdJQ0FnSUNCamRYSnlaVzUwVUd4aGVXaGxZV1FnS3owZ2RIZGxaVzR1WkhWeVlYUnBiMjQ3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjbVYwZFhKdUlIc2dkRzkwWVd4VWFXMWxPaUJqZFhKeVpXNTBVR3hoZVdobFlXUXNJSFJwYldWc2FXNWxJSDA3WEc1OU8xeHVYRzVqYjI1emRDQnpaWFJVZDJWbGJuTWdQU0FvZXlCbGJHRndjMlZrTENCMGFXMWxiR2x1WlN3Z2RHbHRaV3hwYm1WTVpXNW5kR2dnZlNrZ1BUNGdlMXh1SUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2dkR2x0Wld4cGJtVk1aVzVuZEdnN0lHa3JLeWtnZTF4dUlDQWdJQ0FnSUNCamIyNXpkQ0IwZDJWbGJpQTlJSFJwYldWc2FXNWxXMmxkTzF4dUlDQWdJQ0FnSUNCamIyNXpkQ0IwZDJWbGJsUnBiV1VnUFNCbGJHRndjMlZrSUMwZ2RIZGxaVzR1Wm5KdmJUdGNibHh1SUNBZ0lDQWdJQ0JwWmlBb2RIZGxaVzVVYVcxbElENGdNQ0FtSmlCMGQyVmxibFJwYldVZ1BDQjBkMlZsYmk1a2RYSmhkR2x2YmlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEhkbFpXNHVabWx5WlNoMGQyVmxibFJwYldVcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVmVHRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnWm5WdVkzUnBiMjRnZEdsdFpXeHBibVVvWkdWbUxDQndjbTl3Y3lBOUlIdDlLU0I3WEc0Z0lDQWdZMjl1YzNRZ2V5QjBiM1JoYkZScGJXVXNJSFJwYldWc2FXNWxJSDBnUFNCaGJtRnNlWHBsS0dSbFppazdYRzVjYmlBZ0lDQnlaWFIxY200Z2JtVjNJRlIzWldWdUtIdGNiaUFnSUNBZ0lDQWdMaTR1Y0hKdmNITXNYRzRnSUNBZ0lDQWdJR1IxY21GMGFXOXVPaUIwYjNSaGJGUnBiV1VzWEc0Z0lDQWdJQ0FnSUdWaGMyVTZJR1ZoYzJsdVp5NXNhVzVsWVhJc1hHNGdJQ0FnSUNBZ0lIWmhiSFZsY3pvZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY0RvZ01WeHVJQ0FnSUNBZ0lDQjlMRnh1SUNBZ0lDQWdJQ0IwYVcxbGJHbHVaVG9nZEdsdFpXeHBibVVzWEc0Z0lDQWdJQ0FnSUhScGJXVnNhVzVsVEdWdVozUm9PaUIwYVcxbGJHbHVaUzVzWlc1bmRHZ3NYRzRnSUNBZ0lDQWdJRzl1VW1WdVpHVnlPaUJ6WlhSVWQyVmxibk5jYmlBZ0lDQjlLVHRjYm4waVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy90aW1lbGluZS5qc1xuICoqIG1vZHVsZSBpZCA9IDEyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLypcbiAgICAjIEFkYXB0ZXIgY2xhc3NcbiAgICAjIyBQcm92aWRlcyBhIGdldHRlci9zZXR0ZXIgd3JhcHBlciBhbmQgcHJvcGVydHkgY2FjaGUgZm9yIGRpZmZlcmVudCBlbGVtZW50IHR5cGVzXG5cbiAgICBPdmVycmlkZSBgZ2V0dGVyYCBhbmQgYHNldHRlcmAgdG8gcmVpbXBsZW1lbnQgdGhlIGludGVyZmFjZSBmb3IgbmV3IGVsZW1lbnQgdHlwZXMuXG5cbiAgICBTZXQgYEV4dGVuZGVkLnByb3RvdHlwZS5zdGF0ZU1hcGAgYXMgYW4gb2JqZWN0IGtleS92YWx1ZSBtYXAgdG8gdHJhbnNsYXRlIGluY29taW5nIGtleXMgdG9cbiAgICBBUEktc3BlY2lmaWMga2V5cy4gRm9yIGluc3RhbmNlLCB7IHg6ICd0cmFuc2xhdGVYJyB9LiBcblxuICAgIFNldCBgRXh0ZW5kZWQucHJvdG90eXBlLnZhbHVlVHlwZU1hcGAgYXMgYW4gb2JqZWN0IGtleS92YWx1ZSBtYXAgdG8gcmV0dXJuIGEgdmFsdWUgdHlwZSB3aXRoXG4gICAgYGdldFZhbHVlVHlwZShrZXkpYCAoa2V5IHdpbGwgYmUgbWFwcGVkIGFjY29yZGluZyB0byBgc3RhdGVNYXBgKVxuKi9cblxudmFyIEFkYXB0ZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEFkYXB0ZXIoZWxlbWVudCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQWRhcHRlcik7XG5cbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5jYWNoZSA9IHt9O1xuICAgICAgICB0aGlzLmludGVybmFsQ2FjaGUgPSB7fTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBHZXQgZWxlbWVudCBwcm9wZXJ0eVxuICAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBLZXkgdG8gcmVhZFxuICAgICAgICBAcGFyYW0gW2Jvb2xlYW5dOiBJZiBgdHJ1ZWAsIHdpbGwgb3ZlcnJpZGUgY2FjaGVkIHByb3BlcnR5XG4gICAgKi9cblxuICAgIEFkYXB0ZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIGdldChrZXksIHJlZnJlc2gpIHtcbiAgICAgICAgdmFyIG1hcHBlZEtleSA9IHRoaXMubWFwU3RhdGVLZXkoa2V5KTtcblxuICAgICAgICBpZiAocmVmcmVzaCB8fCAhdGhpcy5jYWNoZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jYWNoZVtrZXldID0gdGhpcy5nZXR0ZXIobWFwcGVkS2V5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNhY2hlW2tleV07XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgU2V0IGVsZW1lbnQgcHJvcGVydGllc1xuICAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBLZXkvdmFsdWUgcHJvcGVydGllcyB0byBzZXRcbiAgICAqL1xuXG4gICAgQWRhcHRlci5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gc2V0KHByb3BzKSB7XG4gICAgICAgIC8vIFRyYW5zbGF0ZSBwcm9wc1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICAgICAgICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1hcHBlZEtleSA9IHRoaXMubWFwU3RhdGVLZXkoa2V5KTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlW2tleV0gPSB0aGlzLmludGVybmFsQ2FjaGVbbWFwcGVkS2V5XSA9IHByb3BzW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5zZXR0ZXIodGhpcy5pbnRlcm5hbENhY2hlKTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgT3ZlcnJpZGFibGUgZWxlbWVudCBnZXR0ZXIgLSBkZWZhdWx0IGZvciBwbGFpbiBvYmplY3QgXG4gICAgKi9cblxuICAgIEFkYXB0ZXIucHJvdG90eXBlLmdldHRlciA9IGZ1bmN0aW9uIGdldHRlcihrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudFtrZXldO1xuICAgIH07XG5cbiAgICAvKlxuICAgICAgICBPdmVycmlkYWJsZSBlbGVtZW50IHNldHRlciAtIGRlZmF1bHQgZm9yIHBsYWluIG9iamVjdFxuICAgICovXG5cbiAgICBBZGFwdGVyLnByb3RvdHlwZS5zZXR0ZXIgPSBmdW5jdGlvbiBzZXR0ZXIocHJvcHMpIHtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgICAgICAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudFtrZXldID0gcHJvcHNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKlxuICAgICAgICBNYXAgc3RhdGUga2V5IGFzIHBlciBgc3RhdGVNYXBgLCBpZiBwcmVzZW50XG4gICAgICAgICBAcGFyYW0gW3N0cmluZ106IEtleSB0byBtYXBcbiAgICAgICAgQHJldHVybiBbc3RyaW5nXTogTWFwcGVkIGtleSwgb3Igb3JpZ2luYWwga2V5IGlmIG5vbmUgZm91bmRcbiAgICAqL1xuXG4gICAgQWRhcHRlci5wcm90b3R5cGUubWFwU3RhdGVLZXkgPSBmdW5jdGlvbiBtYXBTdGF0ZUtleShrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGVNYXAgPyB0aGlzLnN0YXRlTWFwW2tleV0gfHwga2V5IDoga2V5O1xuICAgIH07XG5cbiAgICAvKlxuICAgICAgICBHZXQgdmFsdWVUeXBlIG9mIHByb3ZpZGVkIGtleVxuICAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBOYW1lIG9mIHByb3BlcnR5IHRvIG1hcFxuICAgICAgICBAcmV0dXJuIFt2YWx1ZVR5cGVdOiBWYWx1ZSB0eXBlIG9mIHByb3BlcnR5XG4gICAgKi9cblxuICAgIEFkYXB0ZXIucHJvdG90eXBlLmdldFZhbHVlVHlwZSA9IGZ1bmN0aW9uIGdldFZhbHVlVHlwZShrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVUeXBlTWFwID8gdGhpcy52YWx1ZVR5cGVNYXBbdGhpcy5tYXBTdGF0ZUtleShrZXkpXSA6IGZhbHNlO1xuICAgIH07XG5cbiAgICByZXR1cm4gQWRhcHRlcjtcbn0pKCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgcmV0dXJuIG5ldyBBZGFwdGVyKGVsZW1lbnQpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFpHRndkR1Z5TDJGa1lYQjBaWEl1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3T3pzN096czdPenM3T3p0SlFWbE5MRTlCUVU4N1FVRkRWQ3hoUVVSRkxFOUJRVThzUTBGRFJ5eFBRVUZQTEVWQlFVVTdPRUpCUkc1Q0xFOUJRVTg3TzBGQlJVd3NXVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhQUVVGUExFTkJRVU03UVVGRGRrSXNXVUZCU1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhGUVVGRkxFTkJRVU03UVVGRGFFSXNXVUZCU1N4RFFVRkRMR0ZCUVdFc1IwRkJSeXhGUVVGRkxFTkJRVU03UzBGRE0wSTdPenM3T3pzN1FVRkJRVHRCUVV4RExGZEJRVThzVjBGaFZDeEhRVUZITEdkQ1FVRkRMRWRCUVVjc1JVRkJSU3hQUVVGUExFVkJRVVU3UVVGRFpDeFpRVUZOTEZOQlFWTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZET3p0QlFVVjRReXhaUVVGSkxFOUJRVThzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1kwRkJZeXhEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTzBGQlF6VkRMRzFDUVVGUExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXp0VFFVTnVSQ3hOUVVGTk8wRkJRMGdzYlVKQlFVOHNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFRRVU14UWp0TFFVTktPenM3T3pzN08wRkJja0pETEZkQlFVOHNWMEUwUWxRc1IwRkJSeXhuUWtGQlF5eExRVUZMTEVWQlFVVTdPMEZCUlZBc1lVRkJTeXhKUVVGSkxFZEJRVWNzU1VGQlNTeExRVUZMTEVWQlFVVTdRVUZEYmtJc1owSkJRVWtzUzBGQlN5eERRVUZETEdOQlFXTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSVHRCUVVNelFpeHZRa0ZCVFN4VFFVRlRMRWRCUVVjc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0QlFVTjRReXh2UWtGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zWVVGQllTeERRVUZETEZOQlFWTXNRMEZCUXl4SFFVRkhMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dGhRVU5vUlR0VFFVTktPenRCUVVWRUxHVkJRVThzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1lVRkJZU3hEUVVGRExFTkJRVU03UzBGRE1VTTdPenM3T3p0QlFYUkRReXhYUVVGUExGZEJNa05VTEUxQlFVMHNiVUpCUVVNc1IwRkJSeXhGUVVGRk8wRkJRMUlzWlVGQlR5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8wdEJRelZDT3pzN096czdRVUUzUTBNc1YwRkJUeXhYUVd0RVZDeE5RVUZOTEcxQ1FVRkRMRXRCUVVzc1JVRkJSVHRCUVVOV0xHRkJRVXNzU1VGQlNTeEhRVUZITEVsQlFVa3NTMEZCU3l4RlFVRkZPMEZCUTI1Q0xHZENRVUZKTEV0QlFVc3NRMEZCUXl4alFVRmpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVU3UVVGRE0wSXNiMEpCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8yRkJRMnhETzFOQlEwbzdTMEZEU2pzN096czdPenM3UVVGNFJFTXNWMEZCVHl4WFFXZEZWQ3hYUVVGWExIZENRVUZETEVkQlFVY3NSVUZCUlR0QlFVTmlMR1ZCUVU4c1FVRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeEhRVUZKTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXp0TFFVTTFSRHM3T3pzN096czdRVUZzUlVNc1YwRkJUeXhYUVRCRlZDeFpRVUZaTEhsQ1FVRkRMRWRCUVVjc1JVRkJSVHRCUVVOa0xHVkJRVThzUVVGQlF5eEpRVUZKTEVOQlFVTXNXVUZCV1N4SFFVRkpMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFdEJRVXNzUTBGQlF6dExRVU5xUmpzN1YwRTFSVU1zVDBGQlR6czdPMnRDUVN0RlJTeFZRVUZETEU5QlFVODdWMEZCU3l4SlFVRkpMRTlCUVU4c1EwRkJReXhQUVVGUExFTkJRVU03UTBGQlFTSXNJbVpwYkdVaU9pSmhaR0Z3ZEdWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBVR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUx5cGNiaUFnSUNBaklFRmtZWEIwWlhJZ1kyeGhjM05jYmlBZ0lDQWpJeUJRY205MmFXUmxjeUJoSUdkbGRIUmxjaTl6WlhSMFpYSWdkM0poY0hCbGNpQmhibVFnY0hKdmNHVnlkSGtnWTJGamFHVWdabTl5SUdScFptWmxjbVZ1ZENCbGJHVnRaVzUwSUhSNWNHVnpYRzVjYmlBZ0lDQlBkbVZ5Y21sa1pTQmdaMlYwZEdWeVlDQmhibVFnWUhObGRIUmxjbUFnZEc4Z2NtVnBiWEJzWlcxbGJuUWdkR2hsSUdsdWRHVnlabUZqWlNCbWIzSWdibVYzSUdWc1pXMWxiblFnZEhsd1pYTXVYRzVjYmlBZ0lDQlRaWFFnWUVWNGRHVnVaR1ZrTG5CeWIzUnZkSGx3WlM1emRHRjBaVTFoY0dBZ1lYTWdZVzRnYjJKcVpXTjBJR3RsZVM5MllXeDFaU0J0WVhBZ2RHOGdkSEpoYm5Oc1lYUmxJR2x1WTI5dGFXNW5JR3RsZVhNZ2RHOWNiaUFnSUNCQlVFa3RjM0JsWTJsbWFXTWdhMlY1Y3k0Z1JtOXlJR2x1YzNSaGJtTmxMQ0I3SUhnNklDZDBjbUZ1YzJ4aGRHVllKeUI5TGlCY2JseHVJQ0FnSUZObGRDQmdSWGgwWlc1a1pXUXVjSEp2ZEc5MGVYQmxMblpoYkhWbFZIbHdaVTFoY0dBZ1lYTWdZVzRnYjJKcVpXTjBJR3RsZVM5MllXeDFaU0J0WVhBZ2RHOGdjbVYwZFhKdUlHRWdkbUZzZFdVZ2RIbHdaU0IzYVhSb1hHNGdJQ0FnWUdkbGRGWmhiSFZsVkhsd1pTaHJaWGtwWUNBb2EyVjVJSGRwYkd3Z1ltVWdiV0Z3Y0dWa0lHRmpZMjl5WkdsdVp5QjBieUJnYzNSaGRHVk5ZWEJnS1Z4dUtpOWNibU5zWVhOeklFRmtZWEIwWlhJZ2UxeHVJQ0FnSUdOdmJuTjBjblZqZEc5eUtHVnNaVzFsYm5RcElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1bGJHVnRaVzUwSUQwZ1pXeGxiV1Z1ZER0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVqWVdOb1pTQTlJSHQ5TzF4dUlDQWdJQ0FnSUNCMGFHbHpMbWx1ZEdWeWJtRnNRMkZqYUdVZ1BTQjdmVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQXZLbHh1SUNBZ0lDQWdJQ0JIWlhRZ1pXeGxiV1Z1ZENCd2NtOXdaWEowZVZ4dVhHNGdJQ0FnSUNBZ0lFQndZWEpoYlNCYmMzUnlhVzVuWFRvZ1MyVjVJSFJ2SUhKbFlXUmNiaUFnSUNBZ0lDQWdRSEJoY21GdElGdGliMjlzWldGdVhUb2dTV1lnWUhSeWRXVmdMQ0IzYVd4c0lHOTJaWEp5YVdSbElHTmhZMmhsWkNCd2NtOXdaWEowZVZ4dUlDQWdJQ292WEc0Z0lDQWdaMlYwS0d0bGVTd2djbVZtY21WemFDa2dlMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQnRZWEJ3WldSTFpYa2dQU0IwYUdsekxtMWhjRk4wWVhSbFMyVjVLR3RsZVNrN1hHNWNiaUFnSUNBZ0lDQWdhV1lnS0hKbFpuSmxjMmdnZkh3Z0lYUm9hWE11WTJGamFHVXVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2EyVjVLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE11WTJGamFHVmJhMlY1WFNBOUlIUm9hWE11WjJWMGRHVnlLRzFoY0hCbFpFdGxlU2s3WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTVqWVdOb1pWdHJaWGxkTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHlwY2JpQWdJQ0FnSUNBZ1UyVjBJR1ZzWlcxbGJuUWdjSEp2Y0dWeWRHbGxjMXh1WEc0Z0lDQWdJQ0FnSUVCd1lYSmhiU0JiYjJKcVpXTjBYVG9nUzJWNUwzWmhiSFZsSUhCeWIzQmxjblJwWlhNZ2RHOGdjMlYwWEc0Z0lDQWdLaTljYmlBZ0lDQnpaWFFvY0hKdmNITXBJSHRjYmlBZ0lDQWdJQ0FnTHk4Z1ZISmhibk5zWVhSbElIQnliM0J6WEc0Z0lDQWdJQ0FnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUJ3Y205d2N5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSEJ5YjNCekxtaGhjMDkzYmxCeWIzQmxjblI1S0d0bGVTa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQnRZWEJ3WldSTFpYa2dQU0IwYUdsekxtMWhjRk4wWVhSbFMyVjVLR3RsZVNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVqWVdOb1pWdHJaWGxkSUQwZ2RHaHBjeTVwYm5SbGNtNWhiRU5oWTJobFcyMWhjSEJsWkV0bGVWMGdQU0J3Y205d2MxdHJaWGxkTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTXVjMlYwZEdWeUtIUm9hWE11YVc1MFpYSnVZV3hEWVdOb1pTazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5cGNiaUFnSUNBZ0lDQWdUM1psY25KcFpHRmliR1VnWld4bGJXVnVkQ0JuWlhSMFpYSWdMU0JrWldaaGRXeDBJR1p2Y2lCd2JHRnBiaUJ2WW1wbFkzUWdYRzRnSUNBZ0tpOWNiaUFnSUNCblpYUjBaWElvYTJWNUtTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TG1Wc1pXMWxiblJiYTJWNVhUdGNiaUFnSUNCOVhHNWNiaUFnSUNBdktseHVJQ0FnSUNBZ0lDQlBkbVZ5Y21sa1lXSnNaU0JsYkdWdFpXNTBJSE5sZEhSbGNpQXRJR1JsWm1GMWJIUWdabTl5SUhCc1lXbHVJRzlpYW1WamRGeHVJQ0FnSUNvdlhHNGdJQ0FnYzJWMGRHVnlLSEJ5YjNCektTQjdYRzRnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR3RsZVNCcGJpQndjbTl3Y3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIQnliM0J6TG1oaGMwOTNibEJ5YjNCbGNuUjVLR3RsZVNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG1Wc1pXMWxiblJiYTJWNVhTQTlJSEJ5YjNCelcydGxlVjA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmlBZ0lDQXZLbHh1SUNBZ0lDQWdJQ0JOWVhBZ2MzUmhkR1VnYTJWNUlHRnpJSEJsY2lCZ2MzUmhkR1ZOWVhCZ0xDQnBaaUJ3Y21WelpXNTBYRzVjYmlBZ0lDQWdJQ0FnUUhCaGNtRnRJRnR6ZEhKcGJtZGRPaUJMWlhrZ2RHOGdiV0Z3WEc0Z0lDQWdJQ0FnSUVCeVpYUjFjbTRnVzNOMGNtbHVaMTA2SUUxaGNIQmxaQ0JyWlhrc0lHOXlJRzl5YVdkcGJtRnNJR3RsZVNCcFppQnViMjVsSUdadmRXNWtYRzRnSUNBZ0tpOWNiaUFnSUNCdFlYQlRkR0YwWlV0bGVTaHJaWGtwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUNoMGFHbHpMbk4wWVhSbFRXRndLU0EvSUhSb2FYTXVjM1JoZEdWTllYQmJhMlY1WFNCOGZDQnJaWGtnT2lCclpYazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5cGNiaUFnSUNBZ0lDQWdSMlYwSUhaaGJIVmxWSGx3WlNCdlppQndjbTkyYVdSbFpDQnJaWGxjYmx4dUlDQWdJQ0FnSUNCQWNHRnlZVzBnVzNOMGNtbHVaMTA2SUU1aGJXVWdiMllnY0hKdmNHVnlkSGtnZEc4Z2JXRndYRzRnSUNBZ0lDQWdJRUJ5WlhSMWNtNGdXM1poYkhWbFZIbHdaVjA2SUZaaGJIVmxJSFI1Y0dVZ2IyWWdjSEp2Y0dWeWRIbGNiaUFnSUNBcUwxeHVJQ0FnSUdkbGRGWmhiSFZsVkhsd1pTaHJaWGtwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUNoMGFHbHpMblpoYkhWbFZIbHdaVTFoY0NrZ1B5QjBhR2x6TG5aaGJIVmxWSGx3WlUxaGNGdDBhR2x6TG0xaGNGTjBZWFJsUzJWNUtHdGxlU2xkSURvZ1ptRnNjMlU3WEc0Z0lDQWdmVnh1ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENBb1pXeGxiV1Z1ZENrZ1BUNGdibVYzSUVGa1lYQjBaWElvWld4bGJXVnVkQ2s3SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9hZGFwdGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZ2V0dGVyID0gZ2V0dGVyO1xuZXhwb3J0cy5zZXR0ZXIgPSBzZXR0ZXI7XG5cbnZhciBfYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcicpO1xuXG52YXIgX2FkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWRhcHRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGdldHRlcihrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZShrZXkpO1xufVxuXG5mdW5jdGlvbiBzZXR0ZXIocHJvcHMpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBwcm9wc1trZXldKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICB2YXIgYXR0ckFkYXB0ZXIgPSAoMCwgX2FkYXB0ZXIyLmRlZmF1bHQpKGVsZW1lbnQpO1xuXG4gICAgYXR0ckFkYXB0ZXIuZ2V0dGVyID0gZ2V0dGVyO1xuICAgIGF0dHJBZGFwdGVyLnNldHRlciA9IHNldHRlcjtcblxuICAgIHJldHVybiBhdHRyQWRhcHRlcjtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwyRjBkSEl0WVdSaGNIUmxjaTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN1VVRkZaMElzVFVGQlRTeEhRVUZPTEUxQlFVMDdVVUZKVGl4TlFVRk5MRWRCUVU0c1RVRkJUVHM3T3pzN096czdRVUZLWml4VFFVRlRMRTFCUVUwc1EwRkJReXhIUVVGSExFVkJRVVU3UVVGRGVFSXNWMEZCVHl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGbEJRVmtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0RFFVTjZRenM3UVVGRlRTeFRRVUZUTEUxQlFVMHNRMEZCUXl4TFFVRkxMRVZCUVVVN1FVRkRNVUlzVTBGQlN5eEpRVUZKTEVkQlFVY3NTVUZCU1N4TFFVRkxMRVZCUVVVN1FVRkRia0lzV1VGQlNTeExRVUZMTEVOQlFVTXNZMEZCWXl4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRk8wRkJRek5DTEdkQ1FVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGbEJRVmtzUTBGQlF5eEhRVUZITEVWQlFVVXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03VTBGRE9VTTdTMEZEU2p0RFFVTktPenRyUWtGRll5eFZRVUZETEU5QlFVOHNSVUZCU3p0QlFVTjRRaXhSUVVGTkxGZEJRVmNzUjBGQlJ5eDFRa0ZCVVN4UFFVRlBMRU5CUVVNc1EwRkJRenM3UVVGRmNrTXNaVUZCVnl4RFFVRkRMRTFCUVUwc1IwRkJSeXhOUVVGTkxFTkJRVU03UVVGRE5VSXNaVUZCVnl4RFFVRkRMRTFCUVUwc1IwRkJSeXhOUVVGTkxFTkJRVU03TzBGQlJUVkNMRmRCUVU4c1YwRkJWeXhEUVVGRE8wTkJRM1JDSWl3aVptbHNaU0k2SW1GMGRISXRZV1JoY0hSbGNpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkRkJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCaFpHRndkR1Z5SUdaeWIyMGdKeTR2WVdSaGNIUmxjaWM3WEc1Y2JtVjRjRzl5ZENCbWRXNWpkR2x2YmlCblpYUjBaWElvYTJWNUtTQjdYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTXVaV3hsYldWdWRDNW5aWFJCZEhSeWFXSjFkR1VvYTJWNUtUdGNibjFjYmx4dVpYaHdiM0owSUdaMWJtTjBhVzl1SUhObGRIUmxjaWh3Y205d2N5a2dlMXh1SUNBZ0lHWnZjaUFvYkdWMElHdGxlU0JwYmlCd2NtOXdjeWtnZTF4dUlDQWdJQ0FnSUNCcFppQW9jSEp2Y0hNdWFHRnpUM2R1VUhKdmNHVnlkSGtvYTJWNUtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVsYkdWdFpXNTBMbk5sZEVGMGRISnBZblYwWlNoclpYa3NJSEJ5YjNCelcydGxlVjBwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dWZWeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQW9aV3hsYldWdWRDa2dQVDRnZTF4dUlDQWdJR052Ym5OMElHRjBkSEpCWkdGd2RHVnlJRDBnWVdSaGNIUmxjaWhsYkdWdFpXNTBLVHRjYmx4dUlDQWdJR0YwZEhKQlpHRndkR1Z5TG1kbGRIUmxjaUE5SUdkbGRIUmxjanRjYmlBZ0lDQmhkSFJ5UVdSaGNIUmxjaTV6WlhSMFpYSWdQU0J6WlhSMFpYSTdYRzVjYmlBZ0lDQnlaWFIxY200Z1lYUjBja0ZrWVhCMFpYSTdYRzU5TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FkYXB0ZXIvYXR0ci1hZGFwdGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9zdGF0ZU1hcCA9IHJlcXVpcmUoJy4vY3NzL3N0YXRlLW1hcCcpO1xuXG52YXIgX3N0YXRlTWFwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0YXRlTWFwKTtcblxudmFyIF92YWx1ZVR5cGVNYXAgPSByZXF1aXJlKCcuL2Nzcy92YWx1ZS10eXBlLW1hcCcpO1xuXG52YXIgX3ZhbHVlVHlwZU1hcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF92YWx1ZVR5cGVNYXApO1xuXG52YXIgX2J1aWxkID0gcmVxdWlyZSgnLi9jc3MvYnVpbGQnKTtcblxudmFyIF9idWlsZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9idWlsZCk7XG5cbnZhciBfcHJlZml4ZXIgPSByZXF1aXJlKCcuL2Nzcy9wcmVmaXhlcicpO1xuXG52YXIgX3ByZWZpeGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ByZWZpeGVyKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wcyA9IHJlcXVpcmUoJy4vY3NzL3RyYW5zZm9ybS1wcm9wcycpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zZm9ybVByb3BzKTtcblxudmFyIF9hZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVyJyk7XG5cbnZhciBfYWRhcHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hZGFwdGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gZ2V0dGVyKGtleSkge1xuICAgIHJldHVybiAhX3RyYW5zZm9ybVByb3BzMi5kZWZhdWx0W2tleV0gPyB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsZW1lbnQsIG51bGwpWygwLCBfcHJlZml4ZXIyLmRlZmF1bHQpKGtleSldIDogX3ZhbHVlVHlwZU1hcDIuZGVmYXVsdFtrZXldLmRlZmF1bHRQcm9wcy5jdXJyZW50IHx8IDA7XG59XG5cbmZ1bmN0aW9uIHNldHRlcihwcm9wcykge1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5jc3NUZXh0ICs9ICgwLCBfYnVpbGQyLmRlZmF1bHQpKHByb3BzKTtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICB2YXIgY3NzQWRhcHRlciA9ICgwLCBfYWRhcHRlcjIuZGVmYXVsdCkoZWxlbWVudCk7XG4gICAgY3NzQWRhcHRlci5zdGF0ZU1hcCA9IF9zdGF0ZU1hcDIuZGVmYXVsdDtcbiAgICBjc3NBZGFwdGVyLnZhbHVlVHlwZU1hcCA9IF92YWx1ZVR5cGVNYXAyLmRlZmF1bHQ7XG4gICAgY3NzQWRhcHRlci5nZXR0ZXIgPSBnZXR0ZXI7XG4gICAgY3NzQWRhcHRlci5zZXR0ZXIgPSBzZXR0ZXI7XG5cbiAgICByZXR1cm4gY3NzQWRhcHRlcjtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwyTnpjeTFoWkdGd2RHVnlMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3p0QlFVOUJMRk5CUVZNc1RVRkJUU3hEUVVGRkxFZEJRVWNzUlVGQlJUdEJRVU5zUWl4WFFVRlBMRUZCUVVNc1EwRkJReXg1UWtGQlpTeEhRVUZITEVOQlFVTXNSMEZEZUVJc1RVRkJUU3hEUVVGRExHZENRVUZuUWl4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTXNkMEpCUVZNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGRE1VUXNkVUpCUVdFc1IwRkJSeXhEUVVGRExFTkJRVU1zV1VGQldTeERRVUZETEU5QlFVOHNTVUZCU1N4RFFVRkRMRU5CUVVNN1EwRkRia1E3TzBGQlJVUXNVMEZCVXl4TlFVRk5MRU5CUVVNc1MwRkJTeXhGUVVGRk8wRkJRMjVDTEZGQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExFOUJRVThzU1VGQlNTeHhRa0ZCYjBJc1MwRkJTeXhEUVVGRExFTkJRVU03UTBGRE5VUTdPMnRDUVVWakxGVkJRVU1zVDBGQlR5eEZRVUZMTzBGQlEzaENMRkZCUVUwc1ZVRkJWU3hIUVVGSExIVkNRVUZSTEU5QlFVOHNRMEZCUXl4RFFVRkRPMEZCUTNCRExHTkJRVlVzUTBGQlF5eFJRVUZSTEhGQ1FVRlhMRU5CUVVNN1FVRkRMMElzWTBGQlZTeERRVUZETEZsQlFWa3NlVUpCUVdVc1EwRkJRenRCUVVOMlF5eGpRVUZWTEVOQlFVTXNUVUZCVFN4SFFVRkhMRTFCUVUwc1EwRkJRenRCUVVNelFpeGpRVUZWTEVOQlFVTXNUVUZCVFN4SFFVRkhMRTFCUVUwc1EwRkJRenM3UVVGRk0wSXNWMEZCVHl4VlFVRlZMRU5CUVVNN1EwRkRja0lpTENKbWFXeGxJam9pWTNOekxXRmtZWEIwWlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUlFaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnYzNSaGRHVk5ZWEFnWm5KdmJTQW5MaTlqYzNNdmMzUmhkR1V0YldGd0p6dGNibWx0Y0c5eWRDQjJZV3gxWlZSNWNHVk5ZWEFnWm5KdmJTQW5MaTlqYzNNdmRtRnNkV1V0ZEhsd1pTMXRZWEFuTzF4dWFXMXdiM0owSUdKMWFXeGtVSEp2Y0dWeWRIbFRkSEpwYm1jZ1puSnZiU0FuTGk5amMzTXZZblZwYkdRbk8xeHVhVzF3YjNKMElIQnlaV1pwZUdWeUlHWnliMjBnSnk0dlkzTnpMM0J5WldacGVHVnlKenRjYm1sdGNHOXlkQ0IwY21GdWMyWnZjbTFRY205d2N5Qm1jbTl0SUNjdUwyTnpjeTkwY21GdWMyWnZjbTB0Y0hKdmNITW5PMXh1YVcxd2IzSjBJR0ZrWVhCMFpYSWdabkp2YlNBbkxpOWhaR0Z3ZEdWeUp6dGNibHh1Wm5WdVkzUnBiMjRnWjJWMGRHVnlJQ2hyWlhrcElIdGNiaUFnSUNCeVpYUjFjbTRnS0NGMGNtRnVjMlp2Y20xUWNtOXdjMXRyWlhsZEtTQS9YRzRnSUNBZ0lDQWdJSGRwYm1SdmR5NW5aWFJEYjIxd2RYUmxaRk4wZVd4bEtIUm9hWE11Wld4bGJXVnVkQ3dnYm5Wc2JDbGJjSEpsWm1sNFpYSW9hMlY1S1YwZ09seHVJQ0FnSUNBZ0lDQjJZV3gxWlZSNWNHVk5ZWEJiYTJWNVhTNWtaV1poZFd4MFVISnZjSE11WTNWeWNtVnVkQ0I4ZkNBd08xeHVmVnh1WEc1bWRXNWpkR2x2YmlCelpYUjBaWElvY0hKdmNITXBJSHRjYmlBZ0lDQjBhR2x6TG1Wc1pXMWxiblF1YzNSNWJHVXVZM056VkdWNGRDQXJQU0JpZFdsc1pGQnliM0JsY25SNVUzUnlhVzVuS0hCeWIzQnpLVHRjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ0tHVnNaVzFsYm5RcElEMCtJSHRjYmlBZ0lDQmpiMjV6ZENCamMzTkJaR0Z3ZEdWeUlEMGdZV1JoY0hSbGNpaGxiR1Z0Wlc1MEtUdGNiaUFnSUNCamMzTkJaR0Z3ZEdWeUxuTjBZWFJsVFdGd0lEMGdjM1JoZEdWTllYQTdYRzRnSUNBZ1kzTnpRV1JoY0hSbGNpNTJZV3gxWlZSNWNHVk5ZWEFnUFNCMllXeDFaVlI1Y0dWTllYQTdYRzRnSUNBZ1kzTnpRV1JoY0hSbGNpNW5aWFIwWlhJZ1BTQm5aWFIwWlhJN1hHNGdJQ0FnWTNOelFXUmhjSFJsY2k1elpYUjBaWElnUFNCelpYUjBaWEk3WEc1Y2JpQWdJQ0J5WlhSMWNtNGdZM056UVdSaGNIUmxjanRjYm4wN1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hZGFwdGVyL2Nzcy1hZGFwdGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuc2V0dGVyID0gc2V0dGVyO1xuXG52YXIgX3N0YXRlTWFwID0gcmVxdWlyZSgnLi9jc3Mvc3RhdGUtbWFwJyk7XG5cbnZhciBfc3RhdGVNYXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RhdGVNYXApO1xuXG52YXIgX3ZhbHVlVHlwZU1hcCA9IHJlcXVpcmUoJy4vc3ZnL3ZhbHVlLXR5cGUtbWFwJyk7XG5cbnZhciBfdmFsdWVUeXBlTWFwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ZhbHVlVHlwZU1hcCk7XG5cbnZhciBfYnVpbGQgPSByZXF1aXJlKCcuL3N2Zy9idWlsZCcpO1xuXG52YXIgX2J1aWxkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2J1aWxkKTtcblxudmFyIF9hdHRyQWRhcHRlciA9IHJlcXVpcmUoJy4vYXR0ci1hZGFwdGVyJyk7XG5cbnZhciBfYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcicpO1xuXG52YXIgX2FkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWRhcHRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBzdmdTdGF0ZU1hcCA9IF9leHRlbmRzKHt9LCBfc3RhdGVNYXAyLmRlZmF1bHQsIHtcbiAgICBjb2xvcjogJ2ZpbGwnXG59KTtcblxuZnVuY3Rpb24gc2V0dGVyKHByb3BzKSB7XG4gICAgdGhpcy5hdHRyU2V0dGVyKCgwLCBfYnVpbGQyLmRlZmF1bHQpKHByb3BzLCB0aGlzLm9yaWdpbikpO1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIHZhciB0cmFuc2Zvcm1PcmlnaW5YID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gNTAgOiBhcmd1bWVudHNbMV07XG4gICAgdmFyIHRyYW5zZm9ybU9yaWdpblkgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDIgfHwgYXJndW1lbnRzWzJdID09PSB1bmRlZmluZWQgPyA1MCA6IGFyZ3VtZW50c1syXTtcblxuICAgIHZhciBzdmdBZGFwdGVyID0gKDAsIF9hZGFwdGVyMi5kZWZhdWx0KShlbGVtZW50KTtcbiAgICBzdmdBZGFwdGVyLnN0YXRlTWFwID0gc3ZnU3RhdGVNYXA7XG4gICAgc3ZnQWRhcHRlci52YWx1ZVR5cGVNYXAgPSBfdmFsdWVUeXBlTWFwMi5kZWZhdWx0O1xuICAgIHN2Z0FkYXB0ZXIuZ2V0dGVyID0gX2F0dHJBZGFwdGVyLmdldHRlcjtcbiAgICBzdmdBZGFwdGVyLnNldHRlciA9IHNldHRlcjtcbiAgICBzdmdBZGFwdGVyLmF0dHJTZXR0ZXIgPSBfYXR0ckFkYXB0ZXIuc2V0dGVyO1xuXG4gICAgdmFyIGJCb3ggPSBlbGVtZW50LmdldEJCb3goKTtcblxuICAgIHN2Z0FkYXB0ZXIub3JpZ2luID0ge1xuICAgICAgICB4OiBiQm94LndpZHRoICogKHRyYW5zZm9ybU9yaWdpblggLyAxMDApICsgYkJveC54LFxuICAgICAgICB5OiBiQm94LmhlaWdodCAqICh0cmFuc2Zvcm1PcmlnaW5ZIC8gMTAwKSArIGJCb3gueVxuICAgIH07XG5cbiAgICByZXR1cm4gc3ZnQWRhcHRlcjtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwzTjJaeTFoWkdGd2RHVnlMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN08xRkJWMmRDTEUxQlFVMHNSMEZCVGl4TlFVRk5PenM3T3pzN096czdPenM3T3pzN096czdPenM3TzBGQlRIUkNMRWxCUVUwc1YwRkJWenRCUVVWaUxGTkJRVXNzUlVGQlJTeE5RVUZOTzBWQlEyaENMRU5CUVVNN08wRkJSVXNzVTBGQlV5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RlFVRkZPMEZCUXpGQ0xGRkJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNjVUpCUVUwc1MwRkJTeXhGUVVGRkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRPME5CUXpsRE96dHJRa0ZGWXl4VlFVRkRMRTlCUVU4c1JVRkJiVVE3VVVGQmFrUXNaMEpCUVdkQ0xIbEVRVUZITEVWQlFVVTdVVUZCUlN4blFrRkJaMElzZVVSQlFVY3NSVUZCUlRzN1FVRkRha1VzVVVGQlRTeFZRVUZWTEVkQlFVY3NkVUpCUVZFc1QwRkJUeXhEUVVGRExFTkJRVU03UVVGRGNFTXNZMEZCVlN4RFFVRkRMRkZCUVZFc1IwRkJSeXhYUVVGWExFTkJRVU03UVVGRGJFTXNZMEZCVlN4RFFVRkRMRmxCUVZrc2VVSkJRV1VzUTBGQlF6dEJRVU4yUXl4alFVRlZMRU5CUVVNc1RVRkJUU3huUWtGb1Fsb3NUVUZCVFN4QlFXZENaU3hEUVVGRE8wRkJRek5DTEdOQlFWVXNRMEZCUXl4TlFVRk5MRWRCUVVjc1RVRkJUU3hEUVVGRE8wRkJRek5DTEdOQlFWVXNRMEZCUXl4VlFVRlZMR2RDUVd4Q1VpeE5RVUZOTEVGQmEwSmxMRU5CUVVNN08wRkJSVzVETEZGQlFVMHNTVUZCU1N4SFFVRkhMRTlCUVU4c1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6czdRVUZGTDBJc1kwRkJWU3hEUVVGRExFMUJRVTBzUjBGQlJ6dEJRVU5vUWl4VFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFdEJRVXNzU1VGQlNTeG5Ra0ZCWjBJc1IwRkJSeXhIUVVGSExFTkJRVUVzUVVGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4RFFVRkRPMEZCUTJwRUxGTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNUVUZCVFN4SlFVRkpMR2RDUVVGblFpeEhRVUZITEVkQlFVY3NRMEZCUVN4QlFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU03UzBGRGNrUXNRMEZCUXpzN1FVRkZSaXhYUVVGUExGVkJRVlVzUTBGQlF6dERRVU55UWlJc0ltWnBiR1VpT2lKemRtY3RZV1JoY0hSbGNpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkRkJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCamMzTlRkR0YwWlUxaGNDQm1jbTl0SUNjdUwyTnpjeTl6ZEdGMFpTMXRZWEFuTzF4dWFXMXdiM0owSUhaaGJIVmxWSGx3WlUxaGNDQm1jbTl0SUNjdUwzTjJaeTkyWVd4MVpTMTBlWEJsTFcxaGNDYzdYRzVwYlhCdmNuUWdZblZwYkdRZ1puSnZiU0FuTGk5emRtY3ZZblZwYkdRbk8xeHVhVzF3YjNKMElIc2daMlYwZEdWeUxDQnpaWFIwWlhJZ1lYTWdZWFIwY2xObGRIUmxjaUI5SUdaeWIyMGdKeTR2WVhSMGNpMWhaR0Z3ZEdWeUp6dGNibWx0Y0c5eWRDQmhaR0Z3ZEdWeUlHWnliMjBnSnk0dllXUmhjSFJsY2ljN1hHNWNibU52Ym5OMElITjJaMU4wWVhSbFRXRndJRDBnZTF4dUlDQWdJQzR1TG1OemMxTjBZWFJsVFdGd0xGeHVJQ0FnSUdOdmJHOXlPaUFuWm1sc2JDZGNibjA3WEc1Y2JtVjRjRzl5ZENCbWRXNWpkR2x2YmlCelpYUjBaWElvY0hKdmNITXBJSHRjYmlBZ0lDQjBhR2x6TG1GMGRISlRaWFIwWlhJb1luVnBiR1FvY0hKdmNITXNJSFJvYVhNdWIzSnBaMmx1S1NrN1hHNTlYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJQ2hsYkdWdFpXNTBMQ0IwY21GdWMyWnZjbTFQY21sbmFXNVlJRDBnTlRBc0lIUnlZVzV6Wm05eWJVOXlhV2RwYmxrZ1BTQTFNQ2tnUFQ0Z2UxeHVJQ0FnSUdOdmJuTjBJSE4yWjBGa1lYQjBaWElnUFNCaFpHRndkR1Z5S0dWc1pXMWxiblFwTzF4dUlDQWdJSE4yWjBGa1lYQjBaWEl1YzNSaGRHVk5ZWEFnUFNCemRtZFRkR0YwWlUxaGNEdGNiaUFnSUNCemRtZEJaR0Z3ZEdWeUxuWmhiSFZsVkhsd1pVMWhjQ0E5SUhaaGJIVmxWSGx3WlUxaGNEdGNiaUFnSUNCemRtZEJaR0Z3ZEdWeUxtZGxkSFJsY2lBOUlHZGxkSFJsY2p0Y2JpQWdJQ0J6ZG1kQlpHRndkR1Z5TG5ObGRIUmxjaUE5SUhObGRIUmxjanRjYmlBZ0lDQnpkbWRCWkdGd2RHVnlMbUYwZEhKVFpYUjBaWElnUFNCaGRIUnlVMlYwZEdWeU8xeHVJQ0FnSUZ4dUlDQWdJR052Ym5OMElHSkNiM2dnUFNCbGJHVnRaVzUwTG1kbGRFSkNiM2dvS1R0Y2JseHVJQ0FnSUhOMlowRmtZWEIwWlhJdWIzSnBaMmx1SUQwZ2UxeHVJQ0FnSUNBZ0lDQjRPaUJpUW05NExuZHBaSFJvSUNvZ0tIUnlZVzV6Wm05eWJVOXlhV2RwYmxnZ0x5QXhNREFwSUNzZ1lrSnZlQzU0TEZ4dUlDQWdJQ0FnSUNCNU9pQmlRbTk0TG1obGFXZG9kQ0FxSUNoMGNtRnVjMlp2Y20xUGNtbG5hVzVaSUM4Z01UQXdLU0FySUdKQ2IzZ3VlVnh1SUNBZ0lIMDdYRzVjYmlBZ0lDQnlaWFIxY200Z2MzWm5RV1JoY0hSbGNqdGNibjA3WEc1Y2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hZGFwdGVyL3N2Zy1hZGFwdGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9idWlsZCA9IHJlcXVpcmUoJy4vc3ZnLXBhdGgvYnVpbGQnKTtcblxudmFyIF9idWlsZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9idWlsZCk7XG5cbnZhciBfc3RhdGVNYXAgPSByZXF1aXJlKCcuL3N2Zy1wYXRoL3N0YXRlLW1hcCcpO1xuXG52YXIgX3N0YXRlTWFwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0YXRlTWFwKTtcblxudmFyIF9zdmdBZGFwdGVyID0gcmVxdWlyZSgnLi9zdmctYWRhcHRlcicpO1xuXG52YXIgX3N2Z0FkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ZnQWRhcHRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHNldHRlcihwcm9wcykge1xuICAgIHRoaXMuc3ZnU2V0dGVyKCgwLCBfYnVpbGQyLmRlZmF1bHQpKHByb3BzLCB0aGlzLnBhdGhMZW5ndGgpKTtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICB2YXIgYWRhcHRlciA9ICgwLCBfc3ZnQWRhcHRlcjIuZGVmYXVsdCkoZWxlbWVudCk7XG5cbiAgICBhZGFwdGVyLnN0YXRlTWFwID0gX3N0YXRlTWFwMi5kZWZhdWx0O1xuICAgIGFkYXB0ZXIuc2V0dGVyID0gc2V0dGVyO1xuICAgIGFkYXB0ZXIuc3ZnU2V0dGVyID0gX3N2Z0FkYXB0ZXIuc2V0dGVyO1xuICAgIGFkYXB0ZXIucGF0aExlbmd0aCA9IGVsZW1lbnQuZ2V0VG90YWxMZW5ndGgoKTtcblxuICAgIHJldHVybiBhZGFwdGVyO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFpHRndkR1Z5TDNOMlp5MXdZWFJvTFdGa1lYQjBaWEl1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3T3pzN096czdPenM3TzBGQlNVRXNVMEZCVXl4TlFVRk5MRU5CUVVNc1MwRkJTeXhGUVVGRk8wRkJRMjVDTEZGQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc2NVSkJRVTBzUzBGQlN5eEZRVUZGTEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJReXhEUVVGRE8wTkJRMnBFT3p0clFrRkZZeXhWUVVGRExFOUJRVThzUlVGQlN6dEJRVU40UWl4UlFVRk5MRTlCUVU4c1IwRkJSeXd3UWtGQlZ5eFBRVUZQTEVOQlFVTXNRMEZCUXpzN1FVRkZjRU1zVjBGQlR5eERRVUZETEZGQlFWRXNjVUpCUVZjc1EwRkJRenRCUVVNMVFpeFhRVUZQTEVOQlFVTXNUVUZCVFN4SFFVRkhMRTFCUVUwc1EwRkJRenRCUVVONFFpeFhRVUZQTEVOQlFVTXNVMEZCVXl4bFFWaEJMRTFCUVUwc1FVRlhUU3hEUVVGRE8wRkJRemxDTEZkQlFVOHNRMEZCUXl4VlFVRlZMRWRCUVVjc1QwRkJUeXhEUVVGRExHTkJRV01zUlVGQlJTeERRVUZET3p0QlFVVTVReXhYUVVGUExFOUJRVThzUTBGQlF6dERRVU5zUWlJc0ltWnBiR1VpT2lKemRtY3RjR0YwYUMxaFpHRndkR1Z5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMFVHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJR0oxYVd4a0lHWnliMjBnSnk0dmMzWm5MWEJoZEdndlluVnBiR1FuTzF4dWFXMXdiM0owSUhOMFlYUmxUV0Z3SUdaeWIyMGdKeTR2YzNabkxYQmhkR2d2YzNSaGRHVXRiV0Z3Snp0Y2JtbHRjRzl5ZENCemRtZEJaR0Z3ZEdWeUxDQjdJSE5sZEhSbGNpQmhjeUJ6ZG1kVFpYUjBaWElnZlNCbWNtOXRJQ2N1TDNOMlp5MWhaR0Z3ZEdWeUp6dGNibHh1Wm5WdVkzUnBiMjRnYzJWMGRHVnlLSEJ5YjNCektTQjdYRzRnSUNBZ2RHaHBjeTV6ZG1kVFpYUjBaWElvWW5WcGJHUW9jSEp2Y0hNc0lIUm9hWE11Y0dGMGFFeGxibWQwYUNrcE8xeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0FvWld4bGJXVnVkQ2tnUFQ0Z2UxeHVJQ0FnSUdOdmJuTjBJR0ZrWVhCMFpYSWdQU0J6ZG1kQlpHRndkR1Z5S0dWc1pXMWxiblFwTzF4dVhHNGdJQ0FnWVdSaGNIUmxjaTV6ZEdGMFpVMWhjQ0E5SUhOMFlYUmxUV0Z3TzF4dUlDQWdJR0ZrWVhCMFpYSXVjMlYwZEdWeUlEMGdjMlYwZEdWeU8xeHVJQ0FnSUdGa1lYQjBaWEl1YzNablUyVjBkR1Z5SUQwZ2MzWm5VMlYwZEdWeU8xeHVJQ0FnSUdGa1lYQjBaWEl1Y0dGMGFFeGxibWQwYUNBOUlHVnNaVzFsYm5RdVoyVjBWRzkwWVd4TVpXNW5kR2dvS1R0Y2JseHVJQ0FnSUhKbGRIVnliaUJoWkdGd2RHVnlPMXh1ZlR0Y2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hZGFwdGVyL3N2Zy1wYXRoLWFkYXB0ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2FkYXB0ZXIgPSByZXF1aXJlKCcuLi9hZGFwdGVyL2FkYXB0ZXInKTtcblxudmFyIF9hZGFwdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FkYXB0ZXIpO1xuXG52YXIgX2Nzc0FkYXB0ZXIgPSByZXF1aXJlKCcuLi9hZGFwdGVyL2Nzcy1hZGFwdGVyJyk7XG5cbnZhciBfY3NzQWRhcHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jc3NBZGFwdGVyKTtcblxudmFyIF9zdmdBZGFwdGVyID0gcmVxdWlyZSgnLi4vYWRhcHRlci9zdmctYWRhcHRlcicpO1xuXG52YXIgX3N2Z0FkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ZnQWRhcHRlcik7XG5cbnZhciBfc3ZnUGF0aEFkYXB0ZXIgPSByZXF1aXJlKCcuLi9hZGFwdGVyL3N2Zy1wYXRoLWFkYXB0ZXInKTtcblxudmFyIF9zdmdQYXRoQWRhcHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdmdQYXRoQWRhcHRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBTQVZFX1BST1AgPSAnX19wbV9hZGFwdGVyJztcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAvLyBSZXR1cm4gYm91bmQgYWRhcHRlciBpZiBwcmVzZW50XG4gICAgaWYgKGVsZW1lbnRbU0FWRV9QUk9QXSkge1xuICAgICAgICByZXR1cm4gZWxlbWVudFtTQVZFX1BST1BdO1xuXG4gICAgICAgIC8vIE9yIGRldGVjdCBhbmQgYmluZCBhZGFwdGVyXG4gICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBkZXRlY3RlZEFkYXB0ZXIgPSBfYWRhcHRlcjIuZGVmYXVsdDtcblxuICAgICAgICAgICAgLy8gSWYgSFRNTEVsZW1lbnQgbG9hZCBDU1NcbiAgICAgICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgZWxlbWVudC50YWdOYW1lID09PSAnc3ZnJykge1xuICAgICAgICAgICAgICAgIGRldGVjdGVkQWRhcHRlciA9IF9jc3NBZGFwdGVyMi5kZWZhdWx0O1xuXG4gICAgICAgICAgICAgICAgLy8gT3IgU1ZHXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBTVkdFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnRhZ05hbWUgPT09ICdwYXRoJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGV0ZWN0ZWRBZGFwdGVyID0gX3N2Z1BhdGhBZGFwdGVyMi5kZWZhdWx0O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGV0ZWN0ZWRBZGFwdGVyID0gX3N2Z0FkYXB0ZXIyLmRlZmF1bHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBib3VuZEFkYXB0ZXIgPSBkZXRlY3RlZEFkYXB0ZXIoZWxlbWVudCk7XG5cbiAgICAgICAgICAgIC8vIEJpbmQgYWRhcHRlciB0byBlbGVtZW50XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgU0FWRV9QUk9QLCB7XG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBib3VuZEFkYXB0ZXJcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gYm91bmRBZGFwdGVyO1xuICAgICAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1NdlltbHVaQzFoWkdGd2RHVnlMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN1FVRkxRU3hKUVVGTkxGTkJRVk1zUjBGQlJ5eGpRVUZqTEVOQlFVTTdPMnRDUVVWc1FpeFZRVUZETEU5QlFVOHNSVUZCU3pzN1FVRkZlRUlzVVVGQlNTeFBRVUZQTEVOQlFVTXNVMEZCVXl4RFFVRkRMRVZCUVVVN1FVRkRjRUlzWlVGQlR5eFBRVUZQTEVOQlFVTXNVMEZCVXl4RFFVRkRPenM3UVVGQlF5eExRVWMzUWl4TlFVRk5PMEZCUTBnc1owSkJRVWtzWlVGQlpTeHZRa0ZCVlRzN08wRkJRVU1zUVVGSE9VSXNaMEpCUVVrc1QwRkJUeXhaUVVGWkxGZEJRVmNzU1VGQlNTeFBRVUZQTEVOQlFVTXNUMEZCVHl4TFFVRkxMRXRCUVVzc1JVRkJSVHRCUVVNM1JDd3JRa0ZCWlN4MVFrRkJZVHM3TzBGQlFVTXNZVUZIYUVNc1RVRkJUU3hKUVVGSkxFOUJRVThzV1VGQldTeFZRVUZWTEVWQlFVVTdRVUZEZEVNc2QwSkJRVWtzVDBGQlR5eERRVUZETEU5QlFVOHNTMEZCU3l4TlFVRk5MRVZCUVVVN1FVRkROVUlzZFVOQlFXVXNNa0pCUVdsQ0xFTkJRVU03Y1VKQlEzQkRMRTFCUVUwN1FVRkRTQ3gxUTBGQlpTeDFRa0ZCWVN4RFFVRkRPM0ZDUVVOb1F6dHBRa0ZEU2pzN1FVRkZSQ3huUWtGQlRTeFpRVUZaTEVkQlFVY3NaVUZCWlN4RFFVRkRMRTlCUVU4c1EwRkJRenM3TzBGQlFVTXNRVUZIT1VNc2EwSkJRVTBzUTBGQlF5eGpRVUZqTEVOQlFVTXNUMEZCVHl4RlFVRkZMRk5CUVZNc1JVRkJSVHRCUVVOMFF5d3dRa0ZCVlN4RlFVRkZMRXRCUVVzN1FVRkRha0lzZDBKQlFWRXNSVUZCUlN4TFFVRkxPMEZCUTJZc2NVSkJRVXNzUlVGQlJTeFpRVUZaTzJGQlEzUkNMRU5CUVVNc1EwRkJRenM3UVVGRlNDeHRRa0ZCVHl4WlFVRlpMRU5CUVVNN1UwRkRka0k3UTBGRFNpSXNJbVpwYkdVaU9pSmlhVzVrTFdGa1lYQjBaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhSUVpYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdZV1JoY0hSbGNpQm1jbTl0SUNjdUxpOWhaR0Z3ZEdWeUwyRmtZWEIwWlhJbk8xeHVhVzF3YjNKMElHTnpjMEZrWVhCMFpYSWdabkp2YlNBbkxpNHZZV1JoY0hSbGNpOWpjM010WVdSaGNIUmxjaWM3WEc1cGJYQnZjblFnYzNablFXUmhjSFJsY2lCbWNtOXRJQ2N1TGk5aFpHRndkR1Z5TDNOMlp5MWhaR0Z3ZEdWeUp6dGNibWx0Y0c5eWRDQnpkbWRRWVhSb1FXUmhjSFJsY2lCbWNtOXRJQ2N1TGk5aFpHRndkR1Z5TDNOMlp5MXdZWFJvTFdGa1lYQjBaWEluTzF4dVhHNWpiMjV6ZENCVFFWWkZYMUJTVDFBZ1BTQW5YMTl3YlY5aFpHRndkR1Z5Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ0tHVnNaVzFsYm5RcElEMCtJSHRjYmlBZ0lDQXZMeUJTWlhSMWNtNGdZbTkxYm1RZ1lXUmhjSFJsY2lCcFppQndjbVZ6Wlc1MFhHNGdJQ0FnYVdZZ0tHVnNaVzFsYm5SYlUwRldSVjlRVWs5UVhTa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdaV3hsYldWdWRGdFRRVlpGWDFCU1QxQmRPMXh1WEc0Z0lDQWdMeThnVDNJZ1pHVjBaV04wSUdGdVpDQmlhVzVrSUdGa1lYQjBaWEpjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQnNaWFFnWkdWMFpXTjBaV1JCWkdGd2RHVnlJRDBnWVdSaGNIUmxjanRjYmx4dUlDQWdJQ0FnSUNBdkx5QkpaaUJJVkUxTVJXeGxiV1Z1ZENCc2IyRmtJRU5UVTF4dUlDQWdJQ0FnSUNCcFppQW9aV3hsYldWdWRDQnBibk4wWVc1alpXOW1JRWhVVFV4RmJHVnRaVzUwSUh4OElHVnNaVzFsYm5RdWRHRm5UbUZ0WlNBOVBUMGdKM04yWnljcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdSbGRHVmpkR1ZrUVdSaGNIUmxjaUE5SUdOemMwRmtZWEIwWlhJN1hHNWNiaUFnSUNBZ0lDQWdMeThnVDNJZ1UxWkhYRzRnSUNBZ0lDQWdJSDBnWld4elpTQnBaaUFvWld4bGJXVnVkQ0JwYm5OMFlXNWpaVzltSUZOV1IwVnNaVzFsYm5RcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaGxiR1Z0Wlc1MExuUmhaMDVoYldVZ1BUMDlJQ2R3WVhSb0p5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1JsZEdWamRHVmtRV1JoY0hSbGNpQTlJSE4yWjFCaGRHaEJaR0Z3ZEdWeU8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JrWlhSbFkzUmxaRUZrWVhCMFpYSWdQU0J6ZG1kQlpHRndkR1Z5TzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnWW05MWJtUkJaR0Z3ZEdWeUlEMGdaR1YwWldOMFpXUkJaR0Z3ZEdWeUtHVnNaVzFsYm5RcE8xeHVYRzRnSUNBZ0lDQWdJQzh2SUVKcGJtUWdZV1JoY0hSbGNpQjBieUJsYkdWdFpXNTBYRzRnSUNBZ0lDQWdJRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNobGJHVnRaVzUwTENCVFFWWkZYMUJTVDFBc0lIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdWdWRXMWxjbUZpYkdVNklHWmhiSE5sTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdkM0pwZEdGaWJHVTZJR1poYkhObExGeHVJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVTZJR0p2ZFc1a1FXUmhjSFJsY2x4dUlDQWdJQ0FnSUNCOUtUdGNibHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdZbTkxYm1SQlpHRndkR1Z5TzF4dUlDQWdJSDFjYm4wN1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvYmluZC1hZGFwdGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9jcmVhdGVFYXNpbmcgPSByZXF1aXJlKCcuL2NyZWF0ZS1lYXNpbmcnKTtcblxudmFyIF9jcmVhdGVFYXNpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlRWFzaW5nKTtcblxudmFyIF9jcmVhdGVCZXppZXIgPSByZXF1aXJlKCcuL2NyZWF0ZS1iZXppZXInKTtcblxudmFyIF9jcmVhdGVCZXppZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQmV6aWVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gVmFsdWVzXG4vKlxuICAgIEVhc2luZyBmdW5jdGlvbnNcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgXG4gICAgR2VuZXJhdGVzIGFuZCBwcm92aWRlcyBlYXNpbmcgZnVuY3Rpb25zIGJhc2VkIG9uIGJhc2VGdW5jdGlvbiBkZWZpbml0aW9uc1xuICAgIFxuICAgIEEgY2FsbCB0byBlYXNpbmdGdW5jdGlvbi5nZXQoJ2Z1bmN0aW9uTmFtZScpIHJldHVybnMgYSBmdW5jdGlvbiB0aGF0IGNhbiBiZSBwYXNzZWQ6XG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MgMC0xXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBBbXAgbW9kaWZpZXIsIG9ubHkgYWNjZXB0ZWQgaW4gc29tZSBlYXNpbmcgZnVuY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQgaXMgdXNlZCB0byBhZGp1c3Qgb3ZlcmFsbCBzdHJlbmd0aFxuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBFYXNlZCBwcm9ncmVzc1xuICAgICAgICBcbiAgICBXZSBjYW4gZ2VuZXJhdGUgbmV3IGZ1bmN0aW9ucyBieSBzZW5kaW5nIGFuIGVhc2luZyBmdW5jdGlvbiB0aHJvdWdoIGVhc2luZ0Z1bmN0aW9uLmV4dGVuZChuYW1lLCBtZXRob2QpLlxuICAgIFdoaWNoIHdpbGwgbWFrZSBuYW1lSW4sIG5hbWVPdXQgYW5kIG5hbWVJbk91dCBmdW5jdGlvbnMgYXZhaWxhYmxlIHRvIHVzZS5cbiAgICAgICAgXG4gICAgRWFzaW5nIGZ1bmN0aW9ucyBmcm9tIFJvYmVydCBQZW5uZXJcbiAgICBodHRwOi8vd3d3LnJvYmVydHBlbm5lci5jb20vZWFzaW5nL1xuICAgICAgICBcbiAgICBCZXppZXIgY3VydmUgaW50ZXJwcmV0b3IgY3JlYXRlZCBmcm9tIEdhw6t0YW4gUmVuYXVkZWF1J3Mgb3JpZ2luYWwgQmV6aWVyRWFzaW5nICBcbiAgICBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNpbmcvYmxvYi9tYXN0ZXIvaW5kZXguanMgIFxuICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9MSUNFTlNFXG5cbiAgICBBbnRpY2lwYXRlIGVhc2luZyBjcmVhdGVkIGJ5IEVsbGlvdCBHaW5vXG4gICAgaHR0cHM6Ly90d2l0dGVyLmNvbS9FbGxpb3RHZW5vXG4qL1xuLy8gSW1wb3J0c1xudmFyIERFRkFVTFRfQkFDS19TVFJFTkdUSCA9IDEuNTI1O1xudmFyIERFRkFVTFRfUE9XX1NUUkVOR1RIID0gMjtcblxuLypcbiAgICBFYWNoIG9mIHRoZXNlIGJhc2UgZnVuY3Rpb25zIGlzIGFuIGVhc2VJblxuICAgIFxuICAgIE9uIGluaXQsIHdlIHVzZSAubWlycm9yIGFuZCAucmV2ZXJzZSB0byBnZW5lcmF0ZSBlYXNlSW5PdXQgYW5kXG4gICAgZWFzZU91dCBmdW5jdGlvbnMgcmVzcGVjdGl2ZWx5LlxuKi9cbnZhciBiYXNlRWFzaW5nID0ge1xuICAgIGVhc2U6IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICB2YXIgc3RyZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBERUZBVUxUX1BPV19TVFJFTkdUSCA6IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgcmV0dXJuIE1hdGgucG93KHByb2dyZXNzLCBzdHJlbmd0aCk7XG4gICAgfSxcbiAgICBjaXJjOiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgcmV0dXJuIDEgLSBNYXRoLnNpbihNYXRoLmFjb3MocHJvZ3Jlc3MpKTtcbiAgICB9LFxuICAgIGJhY2s6IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICB2YXIgc3RyZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBERUZBVUxUX0JBQ0tfU1RSRU5HVEggOiBhcmd1bWVudHNbMV07XG4gICAgICAgIHJldHVybiBwcm9ncmVzcyAqIHByb2dyZXNzICogKChzdHJlbmd0aCArIDEpICogcHJvZ3Jlc3MgLSBzdHJlbmd0aCk7XG4gICAgfVxufTtcblxuLy8gVXRpbGl0eSBmdW5jdGlvbnNcbnZhciBnZW5lcmF0ZVBvd2VyRWFzaW5nID0gZnVuY3Rpb24gKHN0cmVuZ3RoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICByZXR1cm4gYmFzZUVhc2luZy5lYXNlKHByb2dyZXNzLCBzdHJlbmd0aCk7XG4gICAgfTtcbn07XG5cblsnY3ViaWMnLCAncXVhcnQnLCAncXVpbnQnXS5mb3JFYWNoKGZ1bmN0aW9uIChlYXNpbmdOYW1lLCBpKSB7XG4gICAgcmV0dXJuIGJhc2VFYXNpbmdbZWFzaW5nTmFtZV0gPSBnZW5lcmF0ZVBvd2VyRWFzaW5nKGkgKyAzKTtcbn0pO1xuXG4vLyBHZW5lcmF0ZSBpbi9vdXQvaW5PdXQgdmFyaWF0aW9uc1xuZm9yICh2YXIga2V5IGluIGJhc2VFYXNpbmcpIHtcbiAgICBpZiAoYmFzZUVhc2luZy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHZhciBlYXNpbmdGdW5jdGlvbiA9ICgwLCBfY3JlYXRlRWFzaW5nMi5kZWZhdWx0KShiYXNlRWFzaW5nW2tleV0pO1xuICAgICAgICBiYXNlRWFzaW5nW2tleSArICdJbiddID0gZWFzaW5nRnVuY3Rpb24uaW47XG4gICAgICAgIGJhc2VFYXNpbmdba2V5ICsgJ091dCddID0gZWFzaW5nRnVuY3Rpb24ub3V0O1xuICAgICAgICBiYXNlRWFzaW5nW2tleSArICdJbk91dCddID0gZWFzaW5nRnVuY3Rpb24uaW5PdXQ7XG4gICAgfVxufVxuXG5iYXNlRWFzaW5nLmxpbmVhciA9IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgIHJldHVybiBwcm9ncmVzcztcbn07XG5iYXNlRWFzaW5nLmFudGljaXBhdGUgPSBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICB2YXIgc3RyZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBERUZBVUxUX0JBQ0tfU1RSRU5HVEggOiBhcmd1bWVudHNbMV07XG4gICAgcmV0dXJuIChwcm9ncmVzcyAqPSAyKSA8IDEgPyAwLjUgKiBiYXNlRWFzaW5nLmJhY2tJbihwcm9ncmVzcywgc3RyZW5ndGgpIDogMC41ICogKDIgLSBNYXRoLnBvdygyLCAtMTAgKiAocHJvZ3Jlc3MgLSAxKSkpO1xufTtcblxuYmFzZUVhc2luZy5lYXNpbmdGdW5jdGlvbiA9IF9jcmVhdGVFYXNpbmcyLmRlZmF1bHQ7XG5iYXNlRWFzaW5nLmN1YmljQmV6aWVyID0gX2NyZWF0ZUJlemllcjIuZGVmYXVsdDtcbmJhc2VFYXNpbmcubW9kaWZ5RWFzZSA9IGZ1bmN0aW9uIChlYXNpbmcpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICByZXR1cm4gZWFzaW5nLmFwcGx5KHVuZGVmaW5lZCwgW3Byb2dyZXNzXS5jb25jYXQoYXJncykpO1xuICAgIH07XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBiYXNlRWFzaW5nO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMlZoYzJsdVp5OXdjbVZ6WlhRdFpXRnphVzVuTG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPMEZCT0VKQkxFbEJRVTBzY1VKQlFYRkNMRWRCUVVjc1MwRkJTeXhEUVVGRE8wRkJRM0JETEVsQlFVMHNiMEpCUVc5Q0xFZEJRVWNzUTBGQlF6czdPenM3T3pzN1FVRkJReXhCUVZFdlFpeEpRVUZOTEZWQlFWVXNSMEZCUnp0QlFVTm1MRkZCUVVrc1JVRkJSU3hWUVVGRExGRkJRVkU3V1VGQlJTeFJRVUZSTEhsRVFVRkhMRzlDUVVGdlFqdDNRa0ZCU3l4UlFVRlJMRVZCUVVrc1VVRkJVVHRMUVVGQk8wRkJRM3BGTEZGQlFVa3NSVUZCUlN4VlFVRkJMRkZCUVZFN1pVRkJTU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzB0QlFVRTdRVUZEYmtRc1VVRkJTU3hGUVVGRkxGVkJRVU1zVVVGQlVUdFpRVUZGTEZGQlFWRXNlVVJCUVVjc2NVSkJRWEZDTzJWQlFVc3NRVUZCUXl4UlFVRlJMRWRCUVVjc1VVRkJVU3hKUVVGTExFTkJRVU1zVVVGQlVTeEhRVUZITEVOQlFVTXNRMEZCUVN4SFFVRkpMRkZCUVZFc1IwRkJSeXhSUVVGUkxFTkJRVUVzUVVGQlF6dExRVUZCTzBOQlEzWklPenM3UVVGQlF5eEJRVWRHTEVsQlFVMHNiVUpCUVcxQ0xFZEJRVWNzVlVGQlF5eFJRVUZSTzFkQlFVc3NWVUZCUXl4UlFVRlJPMlZCUVVzc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVWQlFVVXNVVUZCVVN4RFFVRkRPMHRCUVVFN1EwRkJRU3hEUVVGRE96dEJRVVUxUml4RFFVRkRMRTlCUVU4c1JVRkJSU3hQUVVGUExFVkJRVVVzVDBGQlR5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRlZCUVVNc1ZVRkJWU3hGUVVGRkxFTkJRVU03VjBGQlN5eFZRVUZWTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWRCUVVjc2JVSkJRVzFDTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenREUVVGQkxFTkJRVU03T3p0QlFVRkRMRUZCUnpWSExFdEJRVXNzU1VGQlNTeEhRVUZITEVsQlFVa3NWVUZCVlN4RlFVRkZPMEZCUTNoQ0xGRkJRVWtzVlVGQlZTeERRVUZETEdOQlFXTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSVHRCUVVOb1F5eFpRVUZOTEdOQlFXTXNSMEZCUnl3MFFrRkJjVUlzVlVGQlZTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRkROMFFzYTBKQlFWVXNRMEZCU1N4SFFVRkhMRkZCUVVzc1IwRkJSeXhqUVVGakxFTkJRVU1zUlVGQlJTeERRVUZETzBGQlF6TkRMR3RDUVVGVkxFTkJRVWtzUjBGQlJ5eFRRVUZOTEVkQlFVY3NZMEZCWXl4RFFVRkRMRWRCUVVjc1EwRkJRenRCUVVNM1F5eHJRa0ZCVlN4RFFVRkpMRWRCUVVjc1YwRkJVU3hIUVVGSExHTkJRV01zUTBGQlF5eExRVUZMTEVOQlFVTTdTMEZEY0VRN1EwRkRTanM3UVVGRlJDeFZRVUZWTEVOQlFVTXNUVUZCVFN4SFFVRkhMRlZCUVVFc1VVRkJVVHRYUVVGSkxGRkJRVkU3UTBGQlFTeERRVUZETzBGQlEzcERMRlZCUVZVc1EwRkJReXhWUVVGVkxFZEJRVWNzVlVGQlF5eFJRVUZSTzFGQlFVVXNVVUZCVVN4NVJFRkJSeXh4UWtGQmNVSTdWMEZETDBRc1FVRkJReXhEUVVGRExGRkJRVkVzU1VGQlJTeERRVUZETEVOQlFVRXNSMEZCU1N4RFFVRkRMRWRCUVVrc1IwRkJSeXhIUVVGSExGVkJRVlVzUTBGQlF5eE5RVUZOTEVOQlFVTXNVVUZCVVN4RlFVRkZMRkZCUVZFc1EwRkJReXhIUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVsQlFVa3NVVUZCVVN4SFFVRkhMRU5CUVVNc1EwRkJRU3hCUVVGRExFTkJRVU1zUTBGQlFTeEJRVUZETzBOQlFVRXNRMEZCUXpzN1FVRkZka2dzVlVGQlZTeERRVUZETEdOQlFXTXNlVUpCUVhWQ0xFTkJRVU03UVVGRGFrUXNWVUZCVlN4RFFVRkRMRmRCUVZjc2VVSkJRV01zUTBGQlF6dEJRVU55UXl4VlFVRlZMRU5CUVVNc1ZVRkJWU3hIUVVGSExGVkJRVU1zVFVGQlRUdHpRMEZCU3l4SlFVRkpPMEZCUVVvc1dVRkJTVHM3TzFkQlFVc3NWVUZCUXl4UlFVRlJPMlZCUVVzc1RVRkJUU3h0UWtGQlF5eFJRVUZSTEZOQlFVc3NTVUZCU1N4RlFVRkRPMHRCUVVFN1EwRkJRU3hEUVVGRE96dHJRa0ZGZEVVc1ZVRkJWU0lzSW1acGJHVWlPaUp3Y21WelpYUXRaV0Z6YVc1bkxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBVR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUx5cGNiaUFnSUNCRllYTnBibWNnWm5WdVkzUnBiMjV6WEc0Z0lDQWdMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFZ4dUlDQWdJRnh1SUNBZ0lFZGxibVZ5WVhSbGN5QmhibVFnY0hKdmRtbGtaWE1nWldGemFXNW5JR1oxYm1OMGFXOXVjeUJpWVhObFpDQnZiaUJpWVhObFJuVnVZM1JwYjI0Z1pHVm1hVzVwZEdsdmJuTmNiaUFnSUNCY2JpQWdJQ0JCSUdOaGJHd2dkRzhnWldGemFXNW5SblZ1WTNScGIyNHVaMlYwS0NkbWRXNWpkR2x2Yms1aGJXVW5LU0J5WlhSMWNtNXpJR0VnWm5WdVkzUnBiMjRnZEdoaGRDQmpZVzRnWW1VZ2NHRnpjMlZrT2x4dUlDQWdJQ0FnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZCeWIyZHlaWE56SURBdE1WeHVJQ0FnSUNBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwZ0tHOXdkR2x2Ym1Gc0tUb2dRVzF3SUcxdlpHbG1hV1Z5TENCdmJteDVJR0ZqWTJWd2RHVmtJR2x1SUhOdmJXVWdaV0Z6YVc1bklHWjFibU4wYVc5dWMxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZVzVrSUdseklIVnpaV1FnZEc4Z1lXUnFkWE4wSUc5MlpYSmhiR3dnYzNSeVpXNW5kR2hjYmlBZ0lDQWdJQ0FnUUhKbGRIVnliaUJiYm5WdFltVnlYVG9nUldGelpXUWdjSEp2WjNKbGMzTmNiaUFnSUNBZ0lDQWdYRzRnSUNBZ1YyVWdZMkZ1SUdkbGJtVnlZWFJsSUc1bGR5Qm1kVzVqZEdsdmJuTWdZbmtnYzJWdVpHbHVaeUJoYmlCbFlYTnBibWNnWm5WdVkzUnBiMjRnZEdoeWIzVm5hQ0JsWVhOcGJtZEdkVzVqZEdsdmJpNWxlSFJsYm1Rb2JtRnRaU3dnYldWMGFHOWtLUzVjYmlBZ0lDQlhhR2xqYUNCM2FXeHNJRzFoYTJVZ2JtRnRaVWx1TENCdVlXMWxUM1YwSUdGdVpDQnVZVzFsU1c1UGRYUWdablZ1WTNScGIyNXpJR0YyWVdsc1lXSnNaU0IwYnlCMWMyVXVYRzRnSUNBZ0lDQWdJRnh1SUNBZ0lFVmhjMmx1WnlCbWRXNWpkR2x2Ym5NZ1puSnZiU0JTYjJKbGNuUWdVR1Z1Ym1WeVhHNGdJQ0FnYUhSMGNEb3ZMM2QzZHk1eWIySmxjblJ3Wlc1dVpYSXVZMjl0TDJWaGMybHVaeTljYmlBZ0lDQWdJQ0FnWEc0Z0lDQWdRbVY2YVdWeUlHTjFjblpsSUdsdWRHVnljSEpsZEc5eUlHTnlaV0YwWldRZ1puSnZiU0JIWWNPcmRHRnVJRkpsYm1GMVpHVmhkU2R6SUc5eWFXZHBibUZzSUVKbGVtbGxja1ZoYzJsdVp5QWdYRzRnSUNBZ2FIUjBjSE02THk5bmFYUm9kV0l1WTI5dEwyZHlaUzlpWlhwcFpYSXRaV0Z6YVc1bkwySnNiMkl2YldGemRHVnlMMmx1WkdWNExtcHpJQ0JjYmlBZ0lDQm9kSFJ3Y3pvdkwyZHBkR2gxWWk1amIyMHZaM0psTDJKbGVtbGxjaTFsWVhOcGJtY3ZZbXh2WWk5dFlYTjBaWEl2VEVsRFJVNVRSVnh1WEc0Z0lDQWdRVzUwYVdOcGNHRjBaU0JsWVhOcGJtY2dZM0psWVhSbFpDQmllU0JGYkd4cGIzUWdSMmx1YjF4dUlDQWdJR2gwZEhCek9pOHZkSGRwZEhSbGNpNWpiMjB2Uld4c2FXOTBSMlZ1YjF4dUtpOWNiaTh2SUVsdGNHOXlkSE5jYm1sdGNHOXlkQ0JqY21WaGRHVkZZWE5wYm1kR2RXNWpkR2x2YmlCbWNtOXRJQ2N1TDJOeVpXRjBaUzFsWVhOcGJtY25PMXh1YVcxd2IzSjBJR04xWW1salFtVjZhV1Z5SUdaeWIyMGdKeTR2WTNKbFlYUmxMV0psZW1sbGNpYzdYRzVjYmk4dklGWmhiSFZsYzF4dVkyOXVjM1FnUkVWR1FWVk1WRjlDUVVOTFgxTlVVa1ZPUjFSSUlEMGdNUzQxTWpVN1hHNWpiMjV6ZENCRVJVWkJWVXhVWDFCUFYxOVRWRkpGVGtkVVNDQTlJREk3WEc1Y2JpOHFYRzRnSUNBZ1JXRmphQ0J2WmlCMGFHVnpaU0JpWVhObElHWjFibU4wYVc5dWN5QnBjeUJoYmlCbFlYTmxTVzVjYmlBZ0lDQmNiaUFnSUNCUGJpQnBibWwwTENCM1pTQjFjMlVnTG0xcGNuSnZjaUJoYm1RZ0xuSmxkbVZ5YzJVZ2RHOGdaMlZ1WlhKaGRHVWdaV0Z6WlVsdVQzVjBJR0Z1WkZ4dUlDQWdJR1ZoYzJWUGRYUWdablZ1WTNScGIyNXpJSEpsYzNCbFkzUnBkbVZzZVM1Y2Jpb3ZYRzVqYjI1emRDQmlZWE5sUldGemFXNW5JRDBnZTF4dUlDQWdJR1ZoYzJVNklDaHdjbTluY21WemN5d2djM1J5Wlc1bmRHZ2dQU0JFUlVaQlZVeFVYMUJQVjE5VFZGSkZUa2RVU0NrZ1BUNGdjSEp2WjNKbGMzTWdLaW9nYzNSeVpXNW5kR2dzWEc0Z0lDQWdZMmx5WXpvZ2NISnZaM0psYzNNZ1BUNGdNU0F0SUUxaGRHZ3VjMmx1S0UxaGRHZ3VZV052Y3lod2NtOW5jbVZ6Y3lrcExGeHVJQ0FnSUdKaFkyczZJQ2h3Y205bmNtVnpjeXdnYzNSeVpXNW5kR2dnUFNCRVJVWkJWVXhVWDBKQlEwdGZVMVJTUlU1SFZFZ3BJRDArSUNod2NtOW5jbVZ6Y3lBcUlIQnliMmR5WlhOektTQXFJQ2dvYzNSeVpXNW5kR2dnS3lBeEtTQXFJSEJ5YjJkeVpYTnpJQzBnYzNSeVpXNW5kR2dwWEc1OU8xeHVYRzR2THlCVmRHbHNhWFI1SUdaMWJtTjBhVzl1YzF4dVkyOXVjM1FnWjJWdVpYSmhkR1ZRYjNkbGNrVmhjMmx1WnlBOUlDaHpkSEpsYm1kMGFDa2dQVDRnS0hCeWIyZHlaWE56S1NBOVBpQmlZWE5sUldGemFXNW5MbVZoYzJVb2NISnZaM0psYzNNc0lITjBjbVZ1WjNSb0tUdGNibHh1V3lkamRXSnBZeWNzSUNkeGRXRnlkQ2NzSUNkeGRXbHVkQ2RkTG1admNrVmhZMmdvS0dWaGMybHVaMDVoYldVc0lHa3BJRDArSUdKaGMyVkZZWE5wYm1kYlpXRnphVzVuVG1GdFpWMGdQU0JuWlc1bGNtRjBaVkJ2ZDJWeVJXRnphVzVuS0drZ0t5QXpLU2s3WEc1Y2JpOHZJRWRsYm1WeVlYUmxJR2x1TDI5MWRDOXBiazkxZENCMllYSnBZWFJwYjI1elhHNW1iM0lnS0d4bGRDQnJaWGtnYVc0Z1ltRnpaVVZoYzJsdVp5a2dlMXh1SUNBZ0lHbG1JQ2hpWVhObFJXRnphVzVuTG1oaGMwOTNibEJ5YjNCbGNuUjVLR3RsZVNrcElIdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ1pXRnphVzVuUm5WdVkzUnBiMjRnUFNCamNtVmhkR1ZGWVhOcGJtZEdkVzVqZEdsdmJpaGlZWE5sUldGemFXNW5XMnRsZVYwcE8xeHVJQ0FnSUNBZ0lDQmlZWE5sUldGemFXNW5XMkFrZTJ0bGVYMUpibUJkSUQwZ1pXRnphVzVuUm5WdVkzUnBiMjR1YVc0N1hHNGdJQ0FnSUNBZ0lHSmhjMlZGWVhOcGJtZGJZQ1I3YTJWNWZVOTFkR0JkSUQwZ1pXRnphVzVuUm5WdVkzUnBiMjR1YjNWME8xeHVJQ0FnSUNBZ0lDQmlZWE5sUldGemFXNW5XMkFrZTJ0bGVYMUpiazkxZEdCZElEMGdaV0Z6YVc1blJuVnVZM1JwYjI0dWFXNVBkWFE3WEc0Z0lDQWdmVnh1ZlZ4dVhHNWlZWE5sUldGemFXNW5MbXhwYm1WaGNpQTlJSEJ5YjJkeVpYTnpJRDArSUhCeWIyZHlaWE56TzF4dVltRnpaVVZoYzJsdVp5NWhiblJwWTJsd1lYUmxJRDBnS0hCeWIyZHlaWE56TENCemRISmxibWQwYUNBOUlFUkZSa0ZWVEZSZlFrRkRTMTlUVkZKRlRrZFVTQ2tnUFQ1Y2JpQWdJQ0FvS0hCeWIyZHlaWE56S2oweUtTQThJREVwSUQ4Z01DNDFJQ29nWW1GelpVVmhjMmx1Wnk1aVlXTnJTVzRvY0hKdlozSmxjM01zSUhOMGNtVnVaM1JvS1NBNklDQXdMalVnS2lBb01pQXRJRTFoZEdndWNHOTNLRElzSUMweE1DQXFJQ2h3Y205bmNtVnpjeUF0SURFcEtTazdYRzVjYm1KaGMyVkZZWE5wYm1jdVpXRnphVzVuUm5WdVkzUnBiMjRnUFNCamNtVmhkR1ZGWVhOcGJtZEdkVzVqZEdsdmJqdGNibUpoYzJWRllYTnBibWN1WTNWaWFXTkNaWHBwWlhJZ1BTQmpkV0pwWTBKbGVtbGxjanRjYm1KaGMyVkZZWE5wYm1jdWJXOWthV1o1UldGelpTQTlJQ2hsWVhOcGJtY3NJQzR1TG1GeVozTXBJRDArSUNod2NtOW5jbVZ6Y3lrZ1BUNGdaV0Z6YVc1bktIQnliMmR5WlhOekxDQXVMaTVoY21kektUdGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdZbUZ6WlVWaGMybHVaenNpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9lYXNpbmcvcHJlc2V0LWVhc2luZy5qc1xuICoqIG1vZHVsZSBpZCA9IDE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnN0ZXBQcm9ncmVzcyA9IGV4cG9ydHMuc3BlZWRQZXJTZWNvbmQgPSBleHBvcnRzLnNwZWVkUGVyRnJhbWUgPSBleHBvcnRzLnNtb290aCA9IGV4cG9ydHMucmVzdHJpY3QgPSBleHBvcnRzLnJlbGF0aXZlVmFsdWUgPSBleHBvcnRzLnJhbmRvbSA9IGV4cG9ydHMucmFkaWFuc1RvRGVncmVlcyA9IGV4cG9ydHMucG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZSA9IGV4cG9ydHMub2Zmc2V0ID0gZXhwb3J0cy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSA9IGV4cG9ydHMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MgPSBleHBvcnRzLmh5cG90ZW51c2UgPSBleHBvcnRzLmVhc2UgPSBleHBvcnRzLmRpc3RhbmNlID0gZXhwb3J0cy5kaWxhdGUgPSBleHBvcnRzLmRlZ3JlZXNUb1JhZGlhbnMgPSBleHBvcnRzLmFuZ2xlID0gdW5kZWZpbmVkO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgWkVST19QT0lOVCA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDAsXG4gICAgejogMFxufTtcblxudmFyIGRpc3RhbmNlMUQgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBNYXRoLmFicyhhIC0gYik7XG59O1xuXG4vKlxuICAgIEFuZ2xlIGJldHdlZW4gcG9pbnRzXG4gICAgXG4gICAgVHJhbnNsYXRlcyB0aGUgaHlwb3RoZXRpY2FsIGxpbmUgc28gdGhhdCB0aGUgJ2Zyb20nIGNvb3JkaW5hdGVzXG4gICAgYXJlIGF0IDAsMCwgdGhlbiByZXR1cm4gdGhlIGFuZ2xlIHVzaW5nIC5hbmdsZUZyb21DZW50ZXIoKVxuICAgIFxuICAgIEBwYXJhbSBbb2JqZWN0XTogWCBhbmQgWSBjb29yZGluYXRlcyBvZiBmcm9tIHBvaW50XG4gICAgQHBhcmFtIFtvYmplY3RdOiBYIGFuZCBZIGNvcmRpbmF0ZXMgb2YgdG8gcG9pbnRcbiAgICBAcmV0dXJuIFtyYWRpYW5dOiBBbmdsZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzIGluIHJhZGlhbnNcbiovXG52YXIgYW5nbGUgPSBleHBvcnRzLmFuZ2xlID0gZnVuY3Rpb24gKGEpIHtcbiAgICB2YXIgYiA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IFpFUk9fUE9JTlQgOiBhcmd1bWVudHNbMV07XG4gICAgcmV0dXJuIHJhZGlhbnNUb0RlZ3JlZXMoTWF0aC5hdGFuMihhLnggLSBiLngsIGEueSAtIGIueSkpO1xufTtcblxuLypcbiAgICBDb252ZXJ0IGRlZ3JlZXMgdG8gcmFkaWFuc1xuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgaW4gZGVncmVlc1xuICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGluIHJhZGlhbnNcbiovXG52YXIgZGVncmVlc1RvUmFkaWFucyA9IGV4cG9ydHMuZGVncmVlc1RvUmFkaWFucyA9IGZ1bmN0aW9uIChkZWdyZWVzKSB7XG4gICAgcmV0dXJuIGRlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xufTtcblxuLypcbiAgICBEaWxhdGVcbiAgICBcbiAgICBDaGFuZ2UgdGhlIHByb2dyZXNzaW9uIGJldHdlZW4gYSBhbmQgYiBhY2NvcmRpbmcgdG8gZGlsYXRpb24uXG4gICAgXG4gICAgU28gZGlsYXRpb24gPSAwLjUgd291bGQgY2hhbmdlXG4gICAgXG4gICAgYSAtLS0tLS0tLS0gYlxuICAgIFxuICAgIHRvXG4gICAgXG4gICAgYSAtLS0tIGJcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFByZXZpb3VzIHZhbHVlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBEaWxhdGUgcHJvZ3Jlc3MgYnkgeFxuICAgIEByZXR1cm4gW251bWJlcl06IFByZXZpb3VzIHZhbHVlIHBsdXMgdGhlIGRpbGF0ZWQgZGlmZmVyZW5jZVxuKi9cbnZhciBkaWxhdGUgPSBleHBvcnRzLmRpbGF0ZSA9IGZ1bmN0aW9uIChhLCBiLCBkaWxhdGlvbikge1xuICAgIHJldHVybiBhICsgKGIgLSBhKSAqIGRpbGF0aW9uO1xufTtcblxuLypcbiAgICBEaXN0YW5jZVxuICAgIFxuICAgIFJldHVybnMgdGhlIGRpc3RhbmNlIGJldHdlZW4gdHdvIG4gZGltZW5zaW9uYWwgcG9pbnRzLlxuICAgIFxuICAgIEBwYXJhbSBbb2JqZWN0L251bWJlcl06IHggYW5kIHkgb3IganVzdCB4IG9mIHBvaW50IEFcbiAgICBAcGFyYW0gW29iamVjdC9udW1iZXJdOiAob3B0aW9uYWwpOiB4IGFuZCB5IG9yIGp1c3QgeCBvZiBwb2ludCBCXG4gICAgQHJldHVybiBbbnVtYmVyXTogVGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIHR3byBwb2ludHNcbiovXG52YXIgZGlzdGFuY2UgPSBleHBvcnRzLmRpc3RhbmNlID0gZnVuY3Rpb24gKGEpIHtcbiAgICB2YXIgYiA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IFpFUk9fUE9JTlQgOiBhcmd1bWVudHNbMV07XG5cbiAgICAvLyAxRCBkaW1lbnNpb25zXG4gICAgaWYgKCgwLCBfdXRpbHMuaXNOdW0pKGEpKSB7XG4gICAgICAgIHJldHVybiBkaXN0YW5jZTFEKGEsIGIpO1xuXG4gICAgICAgIC8vIE11bHRpLWRpbWVuc2lvbmFsXG4gICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciB4RGVsdGEgPSBkaXN0YW5jZTFEKGEueCwgYi54KTtcbiAgICAgICAgICAgIHZhciB5RGVsdGEgPSBkaXN0YW5jZTFEKGEueSwgYi55KTtcbiAgICAgICAgICAgIHZhciB6RGVsdGEgPSAoMCwgX3V0aWxzLmlzTnVtKShhLnopID8gZGlzdGFuY2UxRChhLnosIGIueikgOiAwO1xuXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHhEZWx0YSwgMikgKyBNYXRoLnBvdyh5RGVsdGEsIDIpICsgTWF0aC5wb3coekRlbHRhLCAyKSk7XG4gICAgICAgIH1cbn07XG5cbi8qXG4gICAgRWFzZSB2YWx1ZSB3aXRoaW4gcmFuZ2VkIHBhcmFtZXRlcnNcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzIGJldHdlZW4gMCBhbmQgMVxuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgb2YgMCBwcm9ncmVzc1xuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgb2YgMSBwcm9ncmVzc1xuICAgIEBwYXJhbSBbc3RyaW5nIHx8IGZ1bmN0aW9uXTogTmFtZSBvZiBwcmVzZXQgZWFzaW5nXG4gICAgICAgIHRvIHVzZSBvciBnZW5lcmF0ZWQgZWFzaW5nIGZ1bmN0aW9uXG4gICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgb2YgZWFzZWQgcHJvZ3Jlc3MgaW4gcmFuZ2VcbiovXG52YXIgZWFzZSA9IGV4cG9ydHMuZWFzZSA9IGZ1bmN0aW9uIChwcm9ncmVzcywgZnJvbSwgdG8sIGVhc2UpIHtcbiAgICB2YXIgcHJvZ3Jlc3NMaW1pdGVkID0gcmVzdHJpY3QocHJvZ3Jlc3MsIDAsIDEpO1xuICAgIHZhciBlYXNlZFByb2dyZXNzID0gZWFzZShwcm9ncmVzc0xpbWl0ZWQpO1xuXG4gICAgcmV0dXJuIGdldFZhbHVlRnJvbVByb2dyZXNzKGVhc2VkUHJvZ3Jlc3MsIGZyb20sIHRvKTtcbn07XG5cbi8qXG4gICAgSHlwb3RlbnVzZVxuICAgIFxuICAgIFJldHVybnMgdGhlIGh5cG90ZW51c2UsIHNpZGUgQywgZ2l2ZW4gdGhlIGxlbmd0aHMgb2Ygc2lkZXMgQSBhbmQgQi5cbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IExlbmd0aCBvZiBBXG4gICAgQHBhcmFtIFtudW1iZXJdOiBMZW5ndGggb2YgQlxuICAgIEByZXR1cm4gW251bWJlcl06IExlbmd0aCBvZiBDXG4qL1xudmFyIGh5cG90ZW51c2UgPSBleHBvcnRzLmh5cG90ZW51c2UgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBNYXRoLnNxcnQoYSAqIGEgKyBiICogYik7XG59O1xuXG4vKlxuICAgIFZhbHVlIGluIHJhbmdlIGZyb20gcHJvZ3Jlc3NcbiAgICBcbiAgICBHaXZlbiBhIGxvd2VyIGxpbWl0IGFuZCBhbiB1cHBlciBsaW1pdCwgd2UgcmV0dXJuIHRoZSB2YWx1ZSB3aXRoaW5cbiAgICB0aGF0IHJhbmdlIGFzIGV4cHJlc3NlZCBieSBwcm9ncmVzcyAoYSBudW1iZXIgZnJvbSAwLTEpXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBUaGUgcHJvZ3Jlc3MgYmV0d2VlbiBsb3dlciBhbmQgdXBwZXIgbGltaXRzIGV4cHJlc3NlZCAwLTFcbiAgICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IG9mIHJhbmdlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBVcHBlciBsaW1pdCBvZiByYW5nZVxuICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGFzIGNhbGN1bGF0ZWQgZnJvbSBwcm9ncmVzcyB3aXRoaW4gcmFuZ2UgKG5vdCBsaW1pdGVkIHdpdGhpbiByYW5nZSlcbiovXG52YXIgZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MgPSBleHBvcnRzLmdldFZhbHVlRnJvbVByb2dyZXNzID0gZnVuY3Rpb24gKHByb2dyZXNzLCBmcm9tLCB0bykge1xuICAgIHJldHVybiAtcHJvZ3Jlc3MgKiBmcm9tICsgcHJvZ3Jlc3MgKiB0byArIGZyb207XG59O1xuXG4vKlxuICAgIFByb2dyZXNzIHdpdGhpbiBnaXZlbiByYW5nZVxuICAgIFxuICAgIEdpdmVuIGEgbG93ZXIgbGltaXQgYW5kIGFuIHVwcGVyIGxpbWl0LCB3ZSByZXR1cm4gdGhlIHByb2dyZXNzXG4gICAgKGV4cHJlc3NlZCBhcyBhIG51bWJlciAwLTEpIHJlcHJlc2VudGVkIGJ5IHRoZSBnaXZlbiB2YWx1ZSwgYW5kXG4gICAgbGltaXQgdGhhdCBwcm9ncmVzcyB0byB3aXRoaW4gMC0xLlxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgdG8gZmluZCBwcm9ncmVzcyB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiAgICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXRcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBQcm9ncmVzcyBvZiB2YWx1ZSB3aXRoaW4gcmFuZ2UgYXMgZXhwcmVzc2VkIDAtMVxuKi9cbnZhciBnZXRQcm9ncmVzc0Zyb21WYWx1ZSA9IGV4cG9ydHMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUsIGZyb20sIHRvKSB7XG4gICAgcmV0dXJuICh2YWx1ZSAtIGZyb20pIC8gKHRvIC0gZnJvbSk7XG59O1xuXG4vKlxuICAgIE9mZnNldCBiZXR3ZWVuIHR3byBvYmplY3RzIG9mIG51bWJlcnNcblxuICAgIElmIHByb3BlcnR5IGlzIGZvdW5kIGluIGIgbm90IHByZXNlbnQgaW4gYSwgaXQgd2lsbCByZXR1cm4gYDBgIGZvciB0aGF0IHByb3AuXG4gICAgXG4gICAgQHBhcmFtIFtQb2ludF06IEZpcnN0IG9iamVjdFxuICAgIEBwYXJhbSBbUG9pbnRdOiBTZWNvbmQgb2JqZWN0XG4gICAgQHJldHVybiBbT2Zmc2V0XTogRGlzdGFuY2UgbWV0cmljcyBiZXR3ZWVuIHR3byBwb2ludHNcbiovXG52YXIgb2Zmc2V0ID0gZXhwb3J0cy5vZmZzZXQgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgIHZhciBvZmZzZXQgPSB7fTtcblxuICAgIGZvciAodmFyIGtleSBpbiBiKSB7XG4gICAgICAgIGlmIChiLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIG9mZnNldFtrZXldID0gKDAsIF91dGlscy5oYXNQcm9wZXJ0eSkoYSwga2V5KSA/IGJba2V5XSAtIGFba2V5XSA6IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2Zmc2V0O1xufTtcblxuLypcbiAgICBQb2ludCBmcm9tIGFuZ2xlIGFuZCBkaXN0YW5jZVxuICAgIFxuICAgIEBwYXJhbSBbb2JqZWN0XTogMkQgcG9pbnQgb2Ygb3JpZ2luXG4gICAgQHBhcmFtIFtudW1iZXJdOiBBbmdsZSBmcm9tIG9yaWdpblxuICAgIEBwYXJhbSBbbnVtYmVyXTogRGlzdGFuY2UgZnJvbSBvcmlnaW5cbiAgICBAcmV0dXJuIFtvYmplY3RdOiBDYWxjdWxhdGVkIDJEIHBvaW50XG4qL1xudmFyIHBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UgPSBleHBvcnRzLnBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UgPSBmdW5jdGlvbiAob3JpZ2luLCBhbmdsZSwgZGlzdGFuY2UpIHtcbiAgICBhbmdsZSA9IGRlZ3JlZXNUb1JhZGlhbnMoYW5nbGUpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogZGlzdGFuY2UgKiBNYXRoLmNvcyhhbmdsZSkgKyBvcmlnaW4ueCxcbiAgICAgICAgeTogZGlzdGFuY2UgKiBNYXRoLnNpbihhbmdsZSkgKyBvcmlnaW4ueVxuICAgIH07XG59O1xuXG4vKlxuICAgIENvbnZlcnQgcmFkaWFucyB0byBkZWdyZWVzXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBpbiByYWRpYW5zXG4gICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgaW4gZGVncmVlc1xuKi9cbnZhciByYWRpYW5zVG9EZWdyZWVzID0gZXhwb3J0cy5yYWRpYW5zVG9EZWdyZWVzID0gZnVuY3Rpb24gKHJhZGlhbnMpIHtcbiAgICByZXR1cm4gcmFkaWFucyAqIDE4MCAvIE1hdGguUEk7XG59O1xuXG4vKlxuICAgIFJldHVybiByYW5kb20gbnVtYmVyIGJldHdlZW4gcmFuZ2VcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogT3V0cHV0IG1pbmltdW1cbiAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogT3V0cHV0IG1heGltdW1cbiAgICBAcmV0dXJuIFtudW1iZXJdOiBSYW5kb20gbnVtYmVyIHdpdGhpbiByYW5nZSwgb3IgMCBhbmQgMSBpZiBub25lIHByb3ZpZGVkXG4qL1xudmFyIHJhbmRvbSA9IGV4cG9ydHMucmFuZG9tID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBtaW4gPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyAwIDogYXJndW1lbnRzWzBdO1xuICAgIHZhciBtYXggPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyAxIDogYXJndW1lbnRzWzFdO1xuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XG59O1xuXG4vKlxuICAgIENhbGN1bGF0ZSByZWxhdGl2ZSB2YWx1ZVxuICAgIFxuICAgIFRha2VzIHRoZSBvcGVyYXRvciBhbmQgdmFsdWUgZnJvbSBhIHN0cmluZywgaWUgXCIrPTVcIiwgYW5kIGFwcGxpZXNcbiAgICB0byB0aGUgY3VycmVudCB2YWx1ZSB0byByZXNvbHZlIGEgbmV3IHRhcmdldC5cbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcbiAgICBAcGFyYW0gW3N0cmluZ106IFJlbGF0aXZlIHZhbHVlXG4gICAgQHJldHVybiBbbnVtYmVyXTogTmV3IHZhbHVlXG4qL1xudmFyIHJlbGF0aXZlVmFsdWUgPSBleHBvcnRzLnJlbGF0aXZlVmFsdWUgPSBmdW5jdGlvbiAoY3VycmVudCwgcmVsYXRpdmUpIHtcbiAgICB2YXIgbmV3VmFsdWUgPSBjdXJyZW50O1xuICAgIHZhciBlcXVhdGlvbiA9IHJlbGF0aXZlLnNwbGl0KCc9Jyk7XG4gICAgdmFyIG9wZXJhdG9yID0gZXF1YXRpb25bMF07XG5cbiAgICB2YXIgX3NwbGl0VmFsdWVVbml0ID0gKDAsIF91dGlscy5zcGxpdFZhbHVlVW5pdCkoZXF1YXRpb25bMV0pO1xuXG4gICAgdmFyIHVuaXQgPSBfc3BsaXRWYWx1ZVVuaXQudW5pdDtcbiAgICB2YXIgdmFsdWUgPSBfc3BsaXRWYWx1ZVVuaXQudmFsdWU7XG5cbiAgICB2YWx1ZSA9IHBhcnNlRmxvYXQodmFsdWUpO1xuXG4gICAgc3dpdGNoIChvcGVyYXRvcikge1xuICAgICAgICBjYXNlICcrJzpcbiAgICAgICAgICAgIG5ld1ZhbHVlICs9IHZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJy0nOlxuICAgICAgICAgICAgbmV3VmFsdWUgLT0gdmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnKic6XG4gICAgICAgICAgICBuZXdWYWx1ZSAqPSB2YWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICcvJzpcbiAgICAgICAgICAgIG5ld1ZhbHVlIC89IHZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKHVuaXQpIHtcbiAgICAgICAgbmV3VmFsdWUgKz0gdW5pdDtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3VmFsdWU7XG59O1xuXG4vKlxuICAgIFJlc3RyaWN0IHZhbHVlIHRvIHJhbmdlXG4gICAgXG4gICAgUmV0dXJuIHZhbHVlIHdpdGhpbiB0aGUgcmFuZ2Ugb2YgbG93ZXJMaW1pdCBhbmQgdXBwZXJMaW1pdFxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgdG8ga2VlcCB3aXRoaW4gcmFuZ2VcbiAgICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IG9mIHJhbmdlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBVcHBlciBsaW1pdCBvZiByYW5nZVxuICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGFzIGxpbWl0ZWQgd2l0aGluIGdpdmVuIHJhbmdlXG4qL1xudmFyIHJlc3RyaWN0ID0gZXhwb3J0cy5yZXN0cmljdCA9IGZ1bmN0aW9uICh2YWx1ZSwgbWluLCBtYXgpIHtcbiAgICByZXR1cm4gTWF0aC5tYXgoTWF0aC5taW4odmFsdWUsIG1heCksIG1pbik7XG59O1xuXG4vKlxuICAgIEZyYW1lcmF0ZS1pbmRlcGVuZGVudCBzbW9vdGhpbmdcblxuICAgIEBwYXJhbSBbbnVtYmVyXTogTmV3IHZhbHVlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBPbGQgdmFsdWVcbiAgICBAcGFyYW0gW251bWJlcl06IEZyYW1lIGR1cmF0aW9uXG4gICAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IFNtb290aGluZyAoMCBpcyBub25lKVxuKi9cbnZhciBzbW9vdGggPSBleHBvcnRzLnNtb290aCA9IGZ1bmN0aW9uIChuZXdWYWx1ZSwgb2xkVmFsdWUsIGR1cmF0aW9uKSB7XG4gICAgdmFyIHNtb290aGluZyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMyB8fCBhcmd1bWVudHNbM10gPT09IHVuZGVmaW5lZCA/IDAgOiBhcmd1bWVudHNbM107XG4gICAgcmV0dXJuICgwLCBfdXRpbHMudG9EZWNpbWFsKShvbGRWYWx1ZSArIGR1cmF0aW9uICogKG5ld1ZhbHVlIC0gb2xkVmFsdWUpIC8gTWF0aC5tYXgoc21vb3RoaW5nLCBkdXJhdGlvbikpO1xufTtcblxuLypcbiAgICBDb252ZXJ0IHggcGVyIHNlY29uZCB0byBwZXIgZnJhbWUgdmVsb2NpdHkgYmFzZWQgb24gZnBzXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBVbml0IHBlciBzZWNvbmRcbiAgICBAcGFyYW0gW251bWJlcl06IEZyYW1lIGR1cmF0aW9uIGluIG1zXG4qL1xudmFyIHNwZWVkUGVyRnJhbWUgPSBleHBvcnRzLnNwZWVkUGVyRnJhbWUgPSBmdW5jdGlvbiAoeHBzLCBmcmFtZUR1cmF0aW9uKSB7XG4gICAgcmV0dXJuICgwLCBfdXRpbHMuaXNOdW0pKHhwcykgPyB4cHMgLyAoMTAwMCAvIGZyYW1lRHVyYXRpb24pIDogMDtcbn07XG5cbi8qXG4gICAgQ29udmVydCB2ZWxvY2l0eSBpbnRvIHZlbGljaXR5IHBlciBzZWNvbmRcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFVuaXQgcGVyIGZyYW1lXG4gICAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvbiBpbiBtc1xuKi9cbnZhciBzcGVlZFBlclNlY29uZCA9IGV4cG9ydHMuc3BlZWRQZXJTZWNvbmQgPSBmdW5jdGlvbiAodmVsb2NpdHksIGZyYW1lRHVyYXRpb24pIHtcbiAgICByZXR1cm4gdmVsb2NpdHkgKiAoMTAwMCAvIGZyYW1lRHVyYXRpb24pO1xufTtcblxuLypcbiAgICBDcmVhdGUgc3RlcHBlZCB2ZXJzaW9uIG9mIDAtMSBwcm9ncmVzc1xuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICAgIEBwYXJhbSBbaW50XTogTnVtYmVyIG9mIHN0ZXBzXG4gICAgQHJldHVybiBbbnVtYmVyXTogU3RlcHBlZCB2YWx1ZVxuKi9cbnZhciBzdGVwUHJvZ3Jlc3MgPSBleHBvcnRzLnN0ZXBQcm9ncmVzcyA9IGZ1bmN0aW9uIChwcm9ncmVzcywgc3RlcHMpIHtcbiAgICB2YXIgc2VnbWVudCA9IDEgLyAoc3RlcHMgLSAxKTtcbiAgICB2YXIgdGFyZ2V0ID0gMSAtIDEgLyBzdGVwcztcbiAgICB2YXIgcHJvZ3Jlc3NPZlRhcmdldCA9IE1hdGgubWluKHByb2dyZXNzIC8gdGFyZ2V0LCAxKTtcblxuICAgIHJldHVybiBNYXRoLmZsb29yKHByb2dyZXNzT2ZUYXJnZXQgLyBzZWdtZW50KSAqIHNlZ21lbnQ7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1NdlkyRnNZeTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPMEZCVDBFc1NVRkJUU3hWUVVGVkxFZEJRVWM3UVVGRFppeExRVUZETEVWQlFVVXNRMEZCUXp0QlFVTktMRXRCUVVNc1JVRkJSU3hEUVVGRE8wRkJRMG9zUzBGQlF5eEZRVUZGTEVOQlFVTTdRMEZEVUN4RFFVRkRPenRCUVVWR0xFbEJRVTBzVlVGQlZTeEhRVUZITEZWQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNN1YwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1EwRkJRVHM3T3pzN096czdPenM3TzBGQlFVTXNRVUZaZEVNc1NVRkJUU3hMUVVGTExGZEJRVXdzUzBGQlN5eEhRVUZITEZWQlFVTXNRMEZCUXp0UlFVRkZMRU5CUVVNc2VVUkJRVWNzVlVGQlZUdFhRVUZMTEdkQ1FVRm5RaXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBOQlFVRTdPenM3T3pzN08wRkJRVU1zUVVGUmVFWXNTVUZCVFN4blFrRkJaMElzVjBGQmFFSXNaMEpCUVdkQ0xFZEJRVWNzVlVGQlF5eFBRVUZQTzFkQlFVc3NUMEZCVHl4SFFVRkhMRWxCUVVrc1EwRkJReXhGUVVGRkxFZEJRVWNzUjBGQlJ6dERRVUZCT3pzN096czdPenM3T3pzN096czdPenM3T3p0QlFVRkRMRUZCYjBJNVJDeEpRVUZOTEUxQlFVMHNWMEZCVGl4TlFVRk5MRWRCUVVjc1ZVRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEZGQlFWRTdWMEZCU3l4RFFVRkRMRWRCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZCTEVkQlFVa3NVVUZCVVN4QlFVRkRPME5CUVVFN096czdPenM3T3pzN08wRkJRVU1zUVVGWE5VUXNTVUZCVFN4UlFVRlJMRmRCUVZJc1VVRkJVU3hIUVVGSExGVkJRVU1zUTBGQlF5eEZRVUZ4UWp0UlFVRnVRaXhEUVVGRExIbEVRVUZITEZWQlFWVTdPenRCUVVWMFF5eFJRVUZKTEZkQmFFVktMRXRCUVVzc1JVRm5SVXNzUTBGQlF5eERRVUZETEVWQlFVVTdRVUZEVml4bFFVRlBMRlZCUVZVc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZET3pzN1FVRkJReXhMUVVjelFpeE5RVUZOTzBGQlEwZ3NaMEpCUVUwc1RVRkJUU3hIUVVGSExGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU53UXl4blFrRkJUU3hOUVVGTkxFZEJRVWNzVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBGQlEzQkRMR2RDUVVGTkxFMUJRVTBzUjBGQlJ5eEJRVUZETEZkQmRrVndRaXhMUVVGTExFVkJkVVZ4UWl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWtzVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXpzN1FVRkZka1FzYlVKQlFVOHNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGRExFMUJRVTBzUlVGQlNTeERRVUZETEdGQlFVc3NUVUZCVFN4RlFVRkpMRU5CUVVNc1EwRkJReXhaUVVGSkxFMUJRVTBzUlVGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMU5CUTI1Rk8wTkJRMG83T3pzN096czdPenM3T3p0QlFVRkRMRUZCV1Vzc1NVRkJUU3hKUVVGSkxGZEJRVW9zU1VGQlNTeEhRVUZITEZWQlFVTXNVVUZCVVN4RlFVRkZMRWxCUVVrc1JVRkJSU3hGUVVGRkxFVkJRVVVzU1VGQlNTeEZRVUZMTzBGQlF6bERMRkZCUVUwc1pVRkJaU3hIUVVGSExGRkJRVkVzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJRMnBFTEZGQlFVMHNZVUZCWVN4SFFVRkhMRWxCUVVrc1EwRkJReXhsUVVGbExFTkJRVU1zUTBGQlF6czdRVUZGTlVNc1YwRkJUeXh2UWtGQmIwSXNRMEZCUXl4aFFVRmhMRVZCUVVVc1NVRkJTU3hGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzBOQlEzaEVPenM3T3pzN096czdPenRCUVVGRExFRkJWMHNzU1VGQlRTeFZRVUZWTEZkQlFWWXNWVUZCVlN4SFFVRkhMRlZCUVVNc1EwRkJReXhGUVVGRkxFTkJRVU03VjBGQlN5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRUZCUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4QlFVRkRMRU5CUVVNN1EwRkJRVHM3T3pzN096czdPenM3T3p0QlFVRkRMRUZCWVRGRUxFbEJRVTBzYjBKQlFXOUNMRmRCUVhCQ0xHOUNRVUZ2UWl4SFFVRkhMRlZCUVVNc1VVRkJVU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEZRVUZGTzFkQlFVc3NRVUZCUXl4RFFVRkZMRkZCUVZFc1IwRkJSeXhKUVVGSkxFZEJRVXNzVVVGQlVTeEhRVUZITEVWQlFVVXNRVUZCUXl4SFFVRkhMRWxCUVVrN1EwRkJRVHM3T3pzN096czdPenM3T3pzN1FVRkJReXhCUVdOc1J5eEpRVUZOTEc5Q1FVRnZRaXhYUVVGd1FpeHZRa0ZCYjBJc1IwRkJSeXhWUVVGRExFdEJRVXNzUlVGQlJTeEpRVUZKTEVWQlFVVXNSVUZCUlR0WFFVRkxMRU5CUVVNc1MwRkJTeXhIUVVGSExFbEJRVWtzUTBGQlFTeEpRVUZMTEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVFc1FVRkJRenREUVVGQk96czdPenM3T3pzN096dEJRVUZETEVGQlZ5OUZMRWxCUVUwc1RVRkJUU3hYUVVGT0xFMUJRVTBzUjBGQlJ5eFZRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVzN1FVRkROVUlzVVVGQlRTeE5RVUZOTEVkQlFVY3NSVUZCUlN4RFFVRkRPenRCUVVWc1FpeFRRVUZMTEVsQlFVa3NSMEZCUnl4SlFVRkpMRU5CUVVNc1JVRkJSVHRCUVVObUxGbEJRVWtzUTBGQlF5eERRVUZETEdOQlFXTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSVHRCUVVOMlFpeHJRa0ZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExGZEJia3AwUWl4WFFVRlhMRVZCYlVwMVFpeERRVUZETEVWQlFVVXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03VTBGRE0wUTdTMEZEU2pzN1FVRkZSQ3hYUVVGUExFMUJRVTBzUTBGQlF6dERRVU5xUWpzN096czdPenM3T3p0QlFVRkRMRUZCVlVzc1NVRkJUU3g1UWtGQmVVSXNWMEZCZWtJc2VVSkJRWGxDTEVkQlFVY3NWVUZCUXl4TlFVRk5MRVZCUVVVc1MwRkJTeXhGUVVGRkxGRkJRVkVzUlVGQlN6dEJRVU5zUlN4VFFVRkxMRWRCUVVjc1owSkJRV2RDTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN08wRkJSV2hETEZkQlFVODdRVUZEU0N4VFFVRkRMRVZCUVVVc1VVRkJVU3hIUVVGSExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1RVRkJUU3hEUVVGRExFTkJRVU03UVVGRGVFTXNVMEZCUXl4RlFVRkZMRkZCUVZFc1IwRkJSeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRTFCUVUwc1EwRkJReXhEUVVGRE8wdEJRek5ETEVOQlFVTTdRMEZEVERzN096czdPenM3UVVGQlF5eEJRVkZMTEVsQlFVMHNaMEpCUVdkQ0xGZEJRV2hDTEdkQ1FVRm5RaXhIUVVGSExGVkJRVU1zVDBGQlR6dFhRVUZMTEU5QlFVOHNSMEZCUnl4SFFVRkhMRWRCUVVjc1NVRkJTU3hEUVVGRExFVkJRVVU3UTBGQlFUczdPenM3T3pzN08wRkJRVU1zUVVGVE9VUXNTVUZCVFN4TlFVRk5MRmRCUVU0c1RVRkJUU3hIUVVGSE8xRkJRVU1zUjBGQlJ5eDVSRUZCUnl4RFFVRkRPMUZCUVVVc1IwRkJSeXg1UkVGQlJ5eERRVUZETzFkQlFVc3NTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hKUVVGSkxFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVRXNRVUZCUXl4SFFVRkhMRWRCUVVjN1EwRkJRVHM3T3pzN096czdPenM3TzBGQlFVTXNRVUZaZGtVc1NVRkJUU3hoUVVGaExGZEJRV0lzWVVGQllTeEhRVUZITEZWQlFVTXNUMEZCVHl4RlFVRkZMRkZCUVZFc1JVRkJTenRCUVVOb1JDeFJRVUZKTEZGQlFWRXNSMEZCUnl4UFFVRlBMRU5CUVVNN1FVRkRka0lzVVVGQlRTeFJRVUZSTEVkQlFVY3NVVUZCVVN4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dEJRVU55UXl4UlFVRk5MRkZCUVZFc1IwRkJSeXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdPekJDUVVOUUxGZEJlRTEwUWl4alFVRmpMRVZCZDAxMVFpeFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN08xRkJRVE5ETEVsQlFVa3NiVUpCUVVvc1NVRkJTVHRSUVVGRkxFdEJRVXNzYlVKQlFVd3NTMEZCU3pzN1FVRkZha0lzVTBGQlN5eEhRVUZITEZWQlFWVXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenM3UVVGRk1VSXNXVUZCVVN4UlFVRlJPMEZCUTJoQ0xHRkJRVXNzUjBGQlJ6dEJRVU5LTEc5Q1FVRlJMRWxCUVVrc1MwRkJTeXhEUVVGRE8wRkJRMnhDTEd0Q1FVRk5PMEZCUVVFc1FVRkRWaXhoUVVGTExFZEJRVWM3UVVGRFNpeHZRa0ZCVVN4SlFVRkpMRXRCUVVzc1EwRkJRenRCUVVOc1FpeHJRa0ZCVFR0QlFVRkJMRUZCUTFZc1lVRkJTeXhIUVVGSE8wRkJRMG9zYjBKQlFWRXNTVUZCU1N4TFFVRkxMRU5CUVVNN1FVRkRiRUlzYTBKQlFVMDdRVUZCUVN4QlFVTldMR0ZCUVVzc1IwRkJSenRCUVVOS0xHOUNRVUZSTEVsQlFVa3NTMEZCU3l4RFFVRkRPMEZCUTJ4Q0xHdENRVUZOTzBGQlFVRXNTMEZEVkRzN1FVRkZSQ3hSUVVGSkxFbEJRVWtzUlVGQlJUdEJRVU5PTEdkQ1FVRlJMRWxCUVVrc1NVRkJTU3hEUVVGRE8wdEJRM0JDT3p0QlFVVkVMRmRCUVU4c1VVRkJVU3hEUVVGRE8wTkJRMjVDT3pzN096czdPenM3T3pzN1FVRkJReXhCUVZsTExFbEJRVTBzVVVGQlVTeFhRVUZTTEZGQlFWRXNSMEZCUnl4VlFVRkRMRXRCUVVzc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ6dFhRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEVWQlFVVXNSMEZCUnl4RFFVRkRMRVZCUVVVc1IwRkJSeXhEUVVGRE8wTkJRVUU3T3pzN096czdPenM3UVVGQlF5eEJRVlV4UlN4SlFVRk5MRTFCUVUwc1YwRkJUaXhOUVVGTkxFZEJRVWNzVlVGQlF5eFJRVUZSTEVWQlFVVXNVVUZCVVN4RlFVRkZMRkZCUVZFN1VVRkJSU3hUUVVGVExIbEVRVUZITEVOQlFVTTdWMEZCU3l4WFFYSlFia1VzVTBGQlV5eEZRWEZRYjBVc1VVRkJVU3hIUVVGSkxGRkJRVkVzU1VGQlNTeFJRVUZSTEVkQlFVY3NVVUZCVVN4RFFVRkJMRUZCUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEZOQlFWTXNSVUZCUlN4UlFVRlJMRU5CUVVNc1FVRkJReXhEUVVGRE8wTkJRVUU3T3pzN096czdPMEZCUVVNc1FVRlJla29zU1VGQlRTeGhRVUZoTEZkQlFXSXNZVUZCWVN4SFFVRkhMRlZCUVVNc1IwRkJSeXhGUVVGRkxHRkJRV0U3VjBGQlN5eEJRVUZETEZkQkwxQnNSQ3hMUVVGTExFVkJLMUJ0UkN4SFFVRkhMRU5CUVVNc1IwRkJTU3hIUVVGSExFbEJRVWtzU1VGQlNTeEhRVUZITEdGQlFXRXNRMEZCUVN4QlFVRkRMRWRCUVVjc1EwRkJRenREUVVGQk96czdPenM3T3p0QlFVRkRMRUZCVVRsR0xFbEJRVTBzWTBGQll5eFhRVUZrTEdOQlFXTXNSMEZCUnl4VlFVRkRMRkZCUVZFc1JVRkJSU3hoUVVGaE8xZEJRVXNzVVVGQlVTeEpRVUZKTEVsQlFVa3NSMEZCUnl4aFFVRmhMRU5CUVVFc1FVRkJRenREUVVGQk96czdPenM3T3pzN1FVRkJReXhCUVZOMFJpeEpRVUZOTEZsQlFWa3NWMEZCV2l4WlFVRlpMRWRCUVVjc1ZVRkJReXhSUVVGUkxFVkJRVVVzUzBGQlN5eEZRVUZMTzBGQlF6ZERMRkZCUVUwc1QwRkJUeXhIUVVGSExFTkJRVU1zU1VGQlNTeExRVUZMTEVkQlFVY3NRMEZCUXl4RFFVRkJMRUZCUVVNc1EwRkJRenRCUVVOb1F5eFJRVUZOTEUxQlFVMHNSMEZCUnl4RFFVRkRMRWRCUVVrc1EwRkJReXhIUVVGSExFdEJRVXNzUVVGQlF5eERRVUZETzBGQlF5OUNMRkZCUVUwc1owSkJRV2RDTEVkQlFVY3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhSUVVGUkxFZEJRVWNzVFVGQlRTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPenRCUVVWNFJDeFhRVUZQTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1owSkJRV2RDTEVkQlFVY3NUMEZCVHl4RFFVRkRMRWRCUVVjc1QwRkJUeXhEUVVGRE8wTkJRek5FTEVOQlFVTWlMQ0ptYVd4bElqb2lZMkZzWXk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRGQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3WEc0Z0lDQWdhR0Z6VUhKdmNHVnlkSGtzWEc0Z0lDQWdhWE5PZFcwc1hHNGdJQ0FnYzNCc2FYUldZV3gxWlZWdWFYUXNYRzRnSUNBZ2RHOUVaV05wYldGc1hHNTlJR1p5YjIwZ0p5NHZkWFJwYkhNbk8xeHVYRzVqYjI1emRDQmFSVkpQWDFCUFNVNVVJRDBnZTF4dUlDQWdJSGc2SURBc1hHNGdJQ0FnZVRvZ01DeGNiaUFnSUNCNk9pQXdYRzU5TzF4dVhHNWpiMjV6ZENCa2FYTjBZVzVqWlRGRUlEMGdLR0VzSUdJcElEMCtJRTFoZEdndVlXSnpLR0VnTFNCaUtUdGNibHh1THlwY2JpQWdJQ0JCYm1kc1pTQmlaWFIzWldWdUlIQnZhVzUwYzF4dUlDQWdJRnh1SUNBZ0lGUnlZVzV6YkdGMFpYTWdkR2hsSUdoNWNHOTBhR1YwYVdOaGJDQnNhVzVsSUhOdklIUm9ZWFFnZEdobElDZG1jbTl0SnlCamIyOXlaR2x1WVhSbGMxeHVJQ0FnSUdGeVpTQmhkQ0F3TERBc0lIUm9aVzRnY21WMGRYSnVJSFJvWlNCaGJtZHNaU0IxYzJsdVp5QXVZVzVuYkdWR2NtOXRRMlZ1ZEdWeUtDbGNiaUFnSUNCY2JpQWdJQ0JBY0dGeVlXMGdXMjlpYW1WamRGMDZJRmdnWVc1a0lGa2dZMjl2Y21ScGJtRjBaWE1nYjJZZ1puSnZiU0J3YjJsdWRGeHVJQ0FnSUVCd1lYSmhiU0JiYjJKcVpXTjBYVG9nV0NCaGJtUWdXU0JqYjNKa2FXNWhkR1Z6SUc5bUlIUnZJSEJ2YVc1MFhHNGdJQ0FnUUhKbGRIVnliaUJiY21Ga2FXRnVYVG9nUVc1bmJHVWdZbVYwZDJWbGJpQjBhR1VnZEhkdklIQnZhVzUwY3lCcGJpQnlZV1JwWVc1elhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHRnVaMnhsSUQwZ0tHRXNJR0lnUFNCYVJWSlBYMUJQU1U1VUtTQTlQaUJ5WVdScFlXNXpWRzlFWldkeVpXVnpLRTFoZEdndVlYUmhiaklvWVM1NElDMGdZaTU0TENCaExua2dMU0JpTG5rcEtUdGNibHh1THlwY2JpQWdJQ0JEYjI1MlpYSjBJR1JsWjNKbFpYTWdkRzhnY21Ga2FXRnVjMXh1SUNBZ0lGeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVm1Gc2RXVWdhVzRnWkdWbmNtVmxjMXh1SUNBZ0lFQnlaWFIxY200Z1cyNTFiV0psY2wwNklGWmhiSFZsSUdsdUlISmhaR2xoYm5OY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ1pHVm5jbVZsYzFSdlVtRmthV0Z1Y3lBOUlDaGtaV2R5WldWektTQTlQaUJrWldkeVpXVnpJQ29nVFdGMGFDNVFTU0F2SURFNE1EdGNibHh1THlwY2JpQWdJQ0JFYVd4aGRHVmNiaUFnSUNCY2JpQWdJQ0JEYUdGdVoyVWdkR2hsSUhCeWIyZHlaWE56YVc5dUlHSmxkSGRsWlc0Z1lTQmhibVFnWWlCaFkyTnZjbVJwYm1jZ2RHOGdaR2xzWVhScGIyNHVYRzRnSUNBZ1hHNGdJQ0FnVTI4Z1pHbHNZWFJwYjI0Z1BTQXdMalVnZDI5MWJHUWdZMmhoYm1kbFhHNGdJQ0FnWEc0Z0lDQWdZU0F0TFMwdExTMHRMUzBnWWx4dUlDQWdJRnh1SUNBZ0lIUnZYRzRnSUNBZ1hHNGdJQ0FnWVNBdExTMHRJR0pjYmlBZ0lDQmNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZCeVpYWnBiM1Z6SUhaaGJIVmxYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCRGRYSnlaVzUwSUhaaGJIVmxYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCRWFXeGhkR1VnY0hKdlozSmxjM01nWW5rZ2VGeHVJQ0FnSUVCeVpYUjFjbTRnVzI1MWJXSmxjbDA2SUZCeVpYWnBiM1Z6SUhaaGJIVmxJSEJzZFhNZ2RHaGxJR1JwYkdGMFpXUWdaR2xtWm1WeVpXNWpaVnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JrYVd4aGRHVWdQU0FvWVN3Z1lpd2daR2xzWVhScGIyNHBJRDArSUdFZ0t5QW9LR0lnTFNCaEtTQXFJR1JwYkdGMGFXOXVLVHRjYmx4dUx5cGNiaUFnSUNCRWFYTjBZVzVqWlZ4dUlDQWdJRnh1SUNBZ0lGSmxkSFZ5Ym5NZ2RHaGxJR1JwYzNSaGJtTmxJR0psZEhkbFpXNGdkSGR2SUc0Z1pHbHRaVzV6YVc5dVlXd2djRzlwYm5SekxseHVJQ0FnSUZ4dUlDQWdJRUJ3WVhKaGJTQmJiMkpxWldOMEwyNTFiV0psY2wwNklIZ2dZVzVrSUhrZ2IzSWdhblZ6ZENCNElHOW1JSEJ2YVc1MElFRmNiaUFnSUNCQWNHRnlZVzBnVzI5aWFtVmpkQzl1ZFcxaVpYSmRPaUFvYjNCMGFXOXVZV3dwT2lCNElHRnVaQ0I1SUc5eUlHcDFjM1FnZUNCdlppQndiMmx1ZENCQ1hHNGdJQ0FnUUhKbGRIVnliaUJiYm5WdFltVnlYVG9nVkdobElHUnBjM1JoYm1ObElHSmxkSGRsWlc0Z2RHaGxJSFIzYnlCd2IybHVkSE5jYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnWkdsemRHRnVZMlVnUFNBb1lTd2dZaUE5SUZwRlVrOWZVRTlKVGxRcElEMCtJSHRjYmlBZ0lDQXZMeUF4UkNCa2FXMWxibk5wYjI1elhHNGdJQ0FnYVdZZ0tHbHpUblZ0S0dFcEtTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQmthWE4wWVc1alpURkVLR0VzSUdJcE8xeHVYRzRnSUNBZ0x5OGdUWFZzZEdrdFpHbHRaVzV6YVc5dVlXeGNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNCamIyNXpkQ0I0UkdWc2RHRWdQU0JrYVhOMFlXNWpaVEZFS0dFdWVDd2dZaTU0S1R0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnZVVSbGJIUmhJRDBnWkdsemRHRnVZMlV4UkNoaExua3NJR0l1ZVNrN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUhwRVpXeDBZU0E5SUNocGMwNTFiU2hoTG5vcEtTQS9JR1JwYzNSaGJtTmxNVVFvWVM1NkxDQmlMbm9wSURvZ01EdGNibHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdUV0YwYUM1emNYSjBLQ2g0UkdWc2RHRWdLaW9nTWlrZ0t5QW9lVVJsYkhSaElDb3FJRElwSUNzZ0tIcEVaV3gwWVNBcUtpQXlLU2s3WEc0Z0lDQWdmVnh1ZlR0Y2JseHVMeXBjYmlBZ0lDQkZZWE5sSUhaaGJIVmxJSGRwZEdocGJpQnlZVzVuWldRZ2NHRnlZVzFsZEdWeWMxeHVJQ0FnSUZ4dUlDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dVSEp2WjNKbGMzTWdZbVYwZDJWbGJpQXdJR0Z1WkNBeFhHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJXWVd4MVpTQnZaaUF3SUhCeWIyZHlaWE56WEc0Z0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQldZV3gxWlNCdlppQXhJSEJ5YjJkeVpYTnpYRzRnSUNBZ1FIQmhjbUZ0SUZ0emRISnBibWNnZkh3Z1puVnVZM1JwYjI1ZE9pQk9ZVzFsSUc5bUlIQnlaWE5sZENCbFlYTnBibWRjYmlBZ0lDQWdJQ0FnZEc4Z2RYTmxJRzl5SUdkbGJtVnlZWFJsWkNCbFlYTnBibWNnWm5WdVkzUnBiMjVjYmlBZ0lDQkFjbVYwZFhKdUlGdHVkVzFpWlhKZE9pQldZV3gxWlNCdlppQmxZWE5sWkNCd2NtOW5jbVZ6Y3lCcGJpQnlZVzVuWlZ4dUtpOGdYRzVsZUhCdmNuUWdZMjl1YzNRZ1pXRnpaU0E5SUNod2NtOW5jbVZ6Y3l3Z1puSnZiU3dnZEc4c0lHVmhjMlVwSUQwK0lIdGNiaUFnSUNCamIyNXpkQ0J3Y205bmNtVnpjMHhwYldsMFpXUWdQU0J5WlhOMGNtbGpkQ2h3Y205bmNtVnpjeXdnTUN3Z01TazdYRzRnSUNBZ1kyOXVjM1FnWldGelpXUlFjbTluY21WemN5QTlJR1ZoYzJVb2NISnZaM0psYzNOTWFXMXBkR1ZrS1R0Y2JseHVJQ0FnSUhKbGRIVnliaUJuWlhSV1lXeDFaVVp5YjIxUWNtOW5jbVZ6Y3lobFlYTmxaRkJ5YjJkeVpYTnpMQ0JtY205dExDQjBieWs3WEc1OU8xeHVJRnh1THlwY2JpQWdJQ0JJZVhCdmRHVnVkWE5sWEc0Z0lDQWdYRzRnSUNBZ1VtVjBkWEp1Y3lCMGFHVWdhSGx3YjNSbGJuVnpaU3dnYzJsa1pTQkRMQ0JuYVhabGJpQjBhR1VnYkdWdVozUm9jeUJ2WmlCemFXUmxjeUJCSUdGdVpDQkNMbHh1SUNBZ0lGeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVEdWdVozUm9JRzltSUVGY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRXhsYm1kMGFDQnZaaUJDWEc0Z0lDQWdRSEpsZEhWeWJpQmJiblZ0WW1WeVhUb2dUR1Z1WjNSb0lHOW1JRU5jYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYUhsd2IzUmxiblZ6WlNBOUlDaGhMQ0JpS1NBOVBpQk5ZWFJvTG5OeGNuUW9LR0VnS2lCaEtTQXJJQ2hpSUNvZ1lpa3BPMXh1WEc0dktseHVJQ0FnSUZaaGJIVmxJR2x1SUhKaGJtZGxJR1p5YjIwZ2NISnZaM0psYzNOY2JpQWdJQ0JjYmlBZ0lDQkhhWFpsYmlCaElHeHZkMlZ5SUd4cGJXbDBJR0Z1WkNCaGJpQjFjSEJsY2lCc2FXMXBkQ3dnZDJVZ2NtVjBkWEp1SUhSb1pTQjJZV3gxWlNCM2FYUm9hVzVjYmlBZ0lDQjBhR0YwSUhKaGJtZGxJR0Z6SUdWNGNISmxjM05sWkNCaWVTQndjbTluY21WemN5QW9ZU0J1ZFcxaVpYSWdabkp2YlNBd0xURXBYRzRnSUNBZ1hHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJVYUdVZ2NISnZaM0psYzNNZ1ltVjBkMlZsYmlCc2IzZGxjaUJoYm1RZ2RYQndaWElnYkdsdGFYUnpJR1Y0Y0hKbGMzTmxaQ0F3TFRGY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRXh2ZDJWeUlHeHBiV2wwSUc5bUlISmhibWRsWEc0Z0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQlZjSEJsY2lCc2FXMXBkQ0J2WmlCeVlXNW5aVnh1SUNBZ0lFQnlaWFIxY200Z1cyNTFiV0psY2wwNklGWmhiSFZsSUdGeklHTmhiR04xYkdGMFpXUWdabkp2YlNCd2NtOW5jbVZ6Y3lCM2FYUm9hVzRnY21GdVoyVWdLRzV2ZENCc2FXMXBkR1ZrSUhkcGRHaHBiaUJ5WVc1blpTbGNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdaMlYwVm1Gc2RXVkdjbTl0VUhKdlozSmxjM01nUFNBb2NISnZaM0psYzNNc0lHWnliMjBzSUhSdktTQTlQaUFvTFNCd2NtOW5jbVZ6Y3lBcUlHWnliMjBwSUNzZ0tIQnliMmR5WlhOeklDb2dkRzhwSUNzZ1puSnZiVHRjYmx4dUx5cGNiaUFnSUNCUWNtOW5jbVZ6Y3lCM2FYUm9hVzRnWjJsMlpXNGdjbUZ1WjJWY2JpQWdJQ0JjYmlBZ0lDQkhhWFpsYmlCaElHeHZkMlZ5SUd4cGJXbDBJR0Z1WkNCaGJpQjFjSEJsY2lCc2FXMXBkQ3dnZDJVZ2NtVjBkWEp1SUhSb1pTQndjbTluY21WemMxeHVJQ0FnSUNobGVIQnlaWE56WldRZ1lYTWdZU0J1ZFcxaVpYSWdNQzB4S1NCeVpYQnlaWE5sYm5SbFpDQmllU0IwYUdVZ1oybDJaVzRnZG1Gc2RXVXNJR0Z1WkZ4dUlDQWdJR3hwYldsMElIUm9ZWFFnY0hKdlozSmxjM01nZEc4Z2QybDBhR2x1SURBdE1TNWNiaUFnSUNCY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRlpoYkhWbElIUnZJR1pwYm1RZ2NISnZaM0psYzNNZ2QybDBhR2x1SUdkcGRtVnVJSEpoYm1kbFhHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJNYjNkbGNpQnNhVzFwZENCY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRlZ3Y0dWeUlHeHBiV2wwWEc0Z0lDQWdRSEpsZEhWeWJpQmJiblZ0WW1WeVhUb2dVSEp2WjNKbGMzTWdiMllnZG1Gc2RXVWdkMmwwYUdsdUlISmhibWRsSUdGeklHVjRjSEpsYzNObFpDQXdMVEZjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnWjJWMFVISnZaM0psYzNOR2NtOXRWbUZzZFdVZ1BTQW9kbUZzZFdVc0lHWnliMjBzSUhSdktTQTlQaUFvZG1Gc2RXVWdMU0JtY205dEtTQXZJQ2gwYnlBdElHWnliMjBwTzF4dVhHNHZLbHh1SUNBZ0lFOW1abk5sZENCaVpYUjNaV1Z1SUhSM2J5QnZZbXBsWTNSeklHOW1JRzUxYldKbGNuTmNibHh1SUNBZ0lFbG1JSEJ5YjNCbGNuUjVJR2x6SUdadmRXNWtJR2x1SUdJZ2JtOTBJSEJ5WlhObGJuUWdhVzRnWVN3Z2FYUWdkMmxzYkNCeVpYUjFjbTRnWURCZ0lHWnZjaUIwYUdGMElIQnliM0F1WEc0Z0lDQWdYRzRnSUNBZ1FIQmhjbUZ0SUZ0UWIybHVkRjA2SUVacGNuTjBJRzlpYW1WamRGeHVJQ0FnSUVCd1lYSmhiU0JiVUc5cGJuUmRPaUJUWldOdmJtUWdiMkpxWldOMFhHNGdJQ0FnUUhKbGRIVnliaUJiVDJabWMyVjBYVG9nUkdsemRHRnVZMlVnYldWMGNtbGpjeUJpWlhSM1pXVnVJSFIzYnlCd2IybHVkSE5jYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYjJabWMyVjBJRDBnS0dFc0lHSXBJRDArSUh0Y2JpQWdJQ0JqYjI1emRDQnZabVp6WlhRZ1BTQjdmVHRjYmx4dUlDQWdJR1p2Y2lBb2JHVjBJR3RsZVNCcGJpQmlLU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDaGlMbWhoYzA5M2JsQnliM0JsY25SNUtHdGxlU2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJRzltWm5ObGRGdHJaWGxkSUQwZ2FHRnpVSEp2Y0dWeWRIa29ZU3dnYTJWNUtTQS9JR0piYTJWNVhTQXRJR0ZiYTJWNVhTQTZJREE3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0J5WlhSMWNtNGdiMlptYzJWME8xeHVmVHRjYmx4dUx5cGNiaUFnSUNCUWIybHVkQ0JtY205dElHRnVaMnhsSUdGdVpDQmthWE4wWVc1alpWeHVJQ0FnSUZ4dUlDQWdJRUJ3WVhKaGJTQmJiMkpxWldOMFhUb2dNa1FnY0c5cGJuUWdiMllnYjNKcFoybHVYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCQmJtZHNaU0JtY205dElHOXlhV2RwYmx4dUlDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dSR2x6ZEdGdVkyVWdabkp2YlNCdmNtbG5hVzVjYmlBZ0lDQkFjbVYwZFhKdUlGdHZZbXBsWTNSZE9pQkRZV3hqZFd4aGRHVmtJREpFSUhCdmFXNTBYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJSEJ2YVc1MFJuSnZiVUZ1WjJ4bFFXNWtSR2x6ZEdGdVkyVWdQU0FvYjNKcFoybHVMQ0JoYm1kc1pTd2daR2x6ZEdGdVkyVXBJRDArSUh0Y2JpQWdJQ0JoYm1kc1pTQTlJR1JsWjNKbFpYTlViMUpoWkdsaGJuTW9ZVzVuYkdVcE8xeHVYRzRnSUNBZ2NtVjBkWEp1SUh0Y2JpQWdJQ0FnSUNBZ2VEb2daR2x6ZEdGdVkyVWdLaUJOWVhSb0xtTnZjeWhoYm1kc1pTa2dLeUJ2Y21sbmFXNHVlQ3hjYmlBZ0lDQWdJQ0FnZVRvZ1pHbHpkR0Z1WTJVZ0tpQk5ZWFJvTG5OcGJpaGhibWRzWlNrZ0t5QnZjbWxuYVc0dWVWeHVJQ0FnSUgwN1hHNTlPMXh1WEc0dktseHVJQ0FnSUVOdmJuWmxjblFnY21Ga2FXRnVjeUIwYnlCa1pXZHlaV1Z6WEc0Z0lDQWdYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCV1lXeDFaU0JwYmlCeVlXUnBZVzV6WEc0Z0lDQWdRSEpsZEhWeWJpQmJiblZ0WW1WeVhUb2dWbUZzZFdVZ2FXNGdaR1ZuY21WbGMxeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnlZV1JwWVc1elZHOUVaV2R5WldWeklEMGdLSEpoWkdsaGJuTXBJRDArSUhKaFpHbGhibk1nS2lBeE9EQWdMeUJOWVhSb0xsQkpPMXh1WEc0dktseHVJQ0FnSUZKbGRIVnliaUJ5WVc1a2IyMGdiblZ0WW1WeUlHSmxkSGRsWlc0Z2NtRnVaMlZjYmlBZ0lDQmNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDBnS0c5d2RHbHZibUZzS1RvZ1QzVjBjSFYwSUcxcGJtbHRkVzFjYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwZ0tHOXdkR2x2Ym1Gc0tUb2dUM1YwY0hWMElHMWhlR2x0ZFcxY2JpQWdJQ0JBY21WMGRYSnVJRnR1ZFcxaVpYSmRPaUJTWVc1a2IyMGdiblZ0WW1WeUlIZHBkR2hwYmlCeVlXNW5aU3dnYjNJZ01DQmhibVFnTVNCcFppQnViMjVsSUhCeWIzWnBaR1ZrWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUhKaGJtUnZiU0E5SUNodGFXNGdQU0F3TENCdFlYZ2dQU0F4S1NBOVBpQk5ZWFJvTG5KaGJtUnZiU2dwSUNvZ0tHMWhlQ0F0SUcxcGJpa2dLeUJ0YVc0N1hHNWNiaThxWEc0Z0lDQWdRMkZzWTNWc1lYUmxJSEpsYkdGMGFYWmxJSFpoYkhWbFhHNGdJQ0FnWEc0Z0lDQWdWR0ZyWlhNZ2RHaGxJRzl3WlhKaGRHOXlJR0Z1WkNCMllXeDFaU0JtY205dElHRWdjM1J5YVc1bkxDQnBaU0JjSWlzOU5Wd2lMQ0JoYm1RZ1lYQndiR2xsYzF4dUlDQWdJSFJ2SUhSb1pTQmpkWEp5Wlc1MElIWmhiSFZsSUhSdklISmxjMjlzZG1VZ1lTQnVaWGNnZEdGeVoyVjBMbHh1SUNBZ0lGeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nUTNWeWNtVnVkQ0IyWVd4MVpWeHVJQ0FnSUVCd1lYSmhiU0JiYzNSeWFXNW5YVG9nVW1Wc1lYUnBkbVVnZG1Gc2RXVmNiaUFnSUNCQWNtVjBkWEp1SUZ0dWRXMWlaWEpkT2lCT1pYY2dkbUZzZFdWY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2NtVnNZWFJwZG1WV1lXeDFaU0E5SUNoamRYSnlaVzUwTENCeVpXeGhkR2wyWlNrZ1BUNGdlMXh1SUNBZ0lHeGxkQ0J1WlhkV1lXeDFaU0E5SUdOMWNuSmxiblE3WEc0Z0lDQWdZMjl1YzNRZ1pYRjFZWFJwYjI0Z1BTQnlaV3hoZEdsMlpTNXpjR3hwZENnblBTY3BPMXh1SUNBZ0lHTnZibk4wSUc5d1pYSmhkRzl5SUQwZ1pYRjFZWFJwYjI1Yk1GMDdYRzRnSUNBZ2JHVjBJSHNnZFc1cGRDd2dkbUZzZFdVZ2ZTQTlJSE53YkdsMFZtRnNkV1ZWYm1sMEtHVnhkV0YwYVc5dVd6RmRLVHRjYmx4dUlDQWdJSFpoYkhWbElEMGdjR0Z5YzJWR2JHOWhkQ2gyWVd4MVpTazdYRzVjYmlBZ0lDQnpkMmwwWTJnZ0tHOXdaWEpoZEc5eUtTQjdYRzRnSUNBZ1kyRnpaU0FuS3ljNlhHNGdJQ0FnSUNBZ0lHNWxkMVpoYkhWbElDczlJSFpoYkhWbE8xeHVJQ0FnSUNBZ0lDQmljbVZoYXp0Y2JpQWdJQ0JqWVhObElDY3RKenBjYmlBZ0lDQWdJQ0FnYm1WM1ZtRnNkV1VnTFQwZ2RtRnNkV1U3WEc0Z0lDQWdJQ0FnSUdKeVpXRnJPMXh1SUNBZ0lHTmhjMlVnSnlvbk9seHVJQ0FnSUNBZ0lDQnVaWGRXWVd4MVpTQXFQU0IyWVd4MVpUdGNiaUFnSUNBZ0lDQWdZbkpsWVdzN1hHNGdJQ0FnWTJGelpTQW5MeWM2WEc0Z0lDQWdJQ0FnSUc1bGQxWmhiSFZsSUM4OUlIWmhiSFZsTzF4dUlDQWdJQ0FnSUNCaWNtVmhhenRjYmlBZ0lDQjlYRzRnSUNBZ1hHNGdJQ0FnYVdZZ0tIVnVhWFFwSUh0Y2JpQWdJQ0FnSUNBZ2JtVjNWbUZzZFdVZ0t6MGdkVzVwZER0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J5WlhSMWNtNGdibVYzVm1Gc2RXVTdYRzU5TzF4dVhHNHZLbHh1SUNBZ0lGSmxjM1J5YVdOMElIWmhiSFZsSUhSdklISmhibWRsWEc0Z0lDQWdYRzRnSUNBZ1VtVjBkWEp1SUhaaGJIVmxJSGRwZEdocGJpQjBhR1VnY21GdVoyVWdiMllnYkc5M1pYSk1hVzFwZENCaGJtUWdkWEJ3WlhKTWFXMXBkRnh1SUNBZ0lGeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVm1Gc2RXVWdkRzhnYTJWbGNDQjNhWFJvYVc0Z2NtRnVaMlZjYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklFeHZkMlZ5SUd4cGJXbDBJRzltSUhKaGJtZGxYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCVmNIQmxjaUJzYVcxcGRDQnZaaUJ5WVc1blpWeHVJQ0FnSUVCeVpYUjFjbTRnVzI1MWJXSmxjbDA2SUZaaGJIVmxJR0Z6SUd4cGJXbDBaV1FnZDJsMGFHbHVJR2RwZG1WdUlISmhibWRsWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUhKbGMzUnlhV04wSUQwZ0tIWmhiSFZsTENCdGFXNHNJRzFoZUNrZ1BUNGdUV0YwYUM1dFlYZ29UV0YwYUM1dGFXNG9kbUZzZFdVc0lHMWhlQ2tzSUcxcGJpazdYRzVjYmk4cVhHNGdJQ0FnUm5KaGJXVnlZWFJsTFdsdVpHVndaVzVrWlc1MElITnRiMjkwYUdsdVoxeHVYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCT1pYY2dkbUZzZFdWY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRTlzWkNCMllXeDFaVnh1SUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1JuSmhiV1VnWkhWeVlYUnBiMjVjYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwZ0tHOXdkR2x2Ym1Gc0tUb2dVMjF2YjNSb2FXNW5JQ2d3SUdseklHNXZibVVwWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUhOdGIyOTBhQ0E5SUNodVpYZFdZV3gxWlN3Z2IyeGtWbUZzZFdVc0lHUjFjbUYwYVc5dUxDQnpiVzl2ZEdocGJtY2dQU0F3S1NBOVBpQjBiMFJsWTJsdFlXd29iMnhrVm1Gc2RXVWdLeUFvWkhWeVlYUnBiMjRnS2lBb2JtVjNWbUZzZFdVZ0xTQnZiR1JXWVd4MVpTa2dMeUJOWVhSb0xtMWhlQ2h6Ylc5dmRHaHBibWNzSUdSMWNtRjBhVzl1S1NrcE8xeHVYRzR2S2x4dUlDQWdJRU52Ym5abGNuUWdlQ0J3WlhJZ2MyVmpiMjVrSUhSdklIQmxjaUJtY21GdFpTQjJaV3h2WTJsMGVTQmlZWE5sWkNCdmJpQm1jSE5jYmlBZ0lDQmNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZWdWFYUWdjR1Z5SUhObFkyOXVaRnh1SUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1JuSmhiV1VnWkhWeVlYUnBiMjRnYVc0Z2JYTmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdjM0JsWldSUVpYSkdjbUZ0WlNBOUlDaDRjSE1zSUdaeVlXMWxSSFZ5WVhScGIyNHBJRDArSUNocGMwNTFiU2g0Y0hNcEtTQS9JSGh3Y3lBdklDZ3hNREF3SUM4Z1puSmhiV1ZFZFhKaGRHbHZiaWtnT2lBd08xeHVYRzR2S2x4dUlDQWdJRU52Ym5abGNuUWdkbVZzYjJOcGRIa2dhVzUwYnlCMlpXeHBZMmwwZVNCd1pYSWdjMlZqYjI1a1hHNGdJQ0FnWEc0Z0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQlZibWwwSUhCbGNpQm1jbUZ0WlZ4dUlDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dSbkpoYldVZ1pIVnlZWFJwYjI0Z2FXNGdiWE5jYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYzNCbFpXUlFaWEpUWldOdmJtUWdQU0FvZG1Wc2IyTnBkSGtzSUdaeVlXMWxSSFZ5WVhScGIyNHBJRDArSUhabGJHOWphWFI1SUNvZ0tERXdNREFnTHlCbWNtRnRaVVIxY21GMGFXOXVLVHRjYmx4dUx5cGNiaUFnSUNCRGNtVmhkR1VnYzNSbGNIQmxaQ0IyWlhKemFXOXVJRzltSURBdE1TQndjbTluY21WemMxeHVJQ0FnSUZ4dUlDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dRM1Z5Y21WdWRDQjJZV3gxWlZ4dUlDQWdJRUJ3WVhKaGJTQmJhVzUwWFRvZ1RuVnRZbVZ5SUc5bUlITjBaWEJ6WEc0Z0lDQWdRSEpsZEhWeWJpQmJiblZ0WW1WeVhUb2dVM1JsY0hCbFpDQjJZV3gxWlZ4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCemRHVndVSEp2WjNKbGMzTWdQU0FvY0hKdlozSmxjM01zSUhOMFpYQnpLU0E5UGlCN1hHNGdJQ0FnWTI5dWMzUWdjMlZuYldWdWRDQTlJREVnTHlBb2MzUmxjSE1nTFNBeEtUdGNiaUFnSUNCamIyNXpkQ0IwWVhKblpYUWdQU0F4SUMwZ0tERWdMeUJ6ZEdWd2N5azdYRzRnSUNBZ1kyOXVjM1FnY0hKdlozSmxjM05QWmxSaGNtZGxkQ0E5SUUxaGRHZ3ViV2x1S0hCeWIyZHlaWE56SUM4Z2RHRnlaMlYwTENBeEtUdGNibHh1SUNBZ0lISmxkSFZ5YmlCTllYUm9MbVpzYjI5eUtIQnliMmR5WlhOelQyWlVZWEpuWlhRZ0x5QnpaV2R0Wlc1MEtTQXFJSE5sWjIxbGJuUTdYRzU5T3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy9jYWxjLmpzXG4gKiogbW9kdWxlIGlkID0gMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9kZWZhdWx0UHJvcHMgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RlZmF1bHQtcHJvcHMnKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGRlZmF1bHRQcm9wczogX2RlZmF1bHRQcm9wcy5vcGFjaXR5XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5aGJIQm9ZUzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdhMEpCUldVN1FVRkRXQ3huUWtGQldTeG5Ra0ZJVUN4UFFVRlBMRUZCUjFNN1EwRkRlRUlpTENKbWFXeGxJam9pWVd4d2FHRXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFJRWlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2V5QnZjR0ZqYVhSNUlIMGdabkp2YlNBbkxpOXpaWFIwYVc1bmN5OWtaV1poZFd4MExYQnliM0J6Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2UxeHVJQ0FnSUdSbFptRjFiSFJRY205d2N6b2diM0JoWTJsMGVWeHVmVHNpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvYWxwaGEuanNcbiAqKiBtb2R1bGUgaWQgPSAyMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3VuaXQgPSByZXF1aXJlKCcuL3VuaXQnKTtcblxudmFyIF91bml0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3VuaXQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIHVuaXQ6ICdkZWcnLFxuICAgICAgICB0eXBlOiBfdW5pdDIuZGVmYXVsdFxuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTloYm1kc1pTNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN096czdPMnRDUVVWbE8wRkJRMWdzWjBKQlFWa3NSVUZCUlR0QlFVTldMRmxCUVVrc1JVRkJSU3hMUVVGTE8wRkJRMWdzV1VGQlNTeG5Ra0ZCVlR0TFFVTnFRanREUVVOS0lpd2labWxzWlNJNkltRnVaMnhsTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMFVHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSFZ1YVhSVWVYQmxJR1p5YjIwZ0p5NHZkVzVwZENjN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElIdGNiaUFnSUNCa1pXWmhkV3gwVUhKdmNITTZJSHRjYmlBZ0lDQWdJQ0FnZFc1cGREb2dKMlJsWnljc1hHNGdJQ0FnSUNBZ0lIUjVjR1U2SUhWdWFYUlVlWEJsWEc0Z0lDQWdmVnh1ZlRzaVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2FuZ2xlLmpzXG4gKiogbW9kdWxlIGlkID0gMjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG52YXIgX3B4ID0gcmVxdWlyZSgnLi9weCcpO1xuXG52YXIgX3B4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3B4KTtcblxudmFyIF9kaWN0aW9uYXJ5ID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kaWN0aW9uYXJ5Jyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IF9weDIuZGVmYXVsdC5kZWZhdWx0UHJvcHMsXG5cbiAgICAvKlxuICAgICAgICBTcGxpdCBwb3NpdGlvbnMgaW4gZm9ybWF0IFwiWCBZIFpcIlxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBQb3NpdGlvbiB2YWx1ZXNcbiAgICAgICAgICAgIFwiMjAlIDMwJSAwXCIgLT4gezIwJSwgMzAlLCAwfVxuICAgICAgICAgICAgXCIyMCUgMzAlXCIgLT4gezIwJSwgMzAlfVxuICAgICAgICAgICAgXCIyMCVcIiAtPiB7MjAlLCAyMCV9XG4gICAgKi9cbiAgICBzcGxpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBzcGxpdFZhbHVlcyA9ICgwLCBfdXRpbHMuc3BsaXRTcGFjZURlbGltaXRlZCkodmFsdWUpO1xuICAgICAgICB2YXIgbnVtQXhlcyA9IHNwbGl0VmFsdWVzLmxlbmd0aDtcbiAgICAgICAgdmFyIHNwbGl0VmFsdWUgPSB7XG4gICAgICAgICAgICBYOiBzcGxpdFZhbHVlc1swXSxcbiAgICAgICAgICAgIFk6IG51bUF4ZXMgPiAxID8gc3BsaXRWYWx1ZXNbMV0gOiBzcGxpdFZhbHVlc1swXVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChudW1BeGVzID4gMikge1xuICAgICAgICAgICAgc3BsaXRWYWx1ZS5aID0gc3BsaXRWYWx1ZXNbMl07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3BsaXRWYWx1ZTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICByZXR1cm4gKDAsIF91dGlscy5jcmVhdGVEZWxpbWl0ZWQpKHZhbHVlcywgX2RpY3Rpb25hcnkuYXhlcywgJyAnKTtcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5aGVHVnpMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdPenM3T3pzN08ydENRVWxsTzBGQlExZ3NaMEpCUVZrc1JVRkJSU3hoUVVGWkxGbEJRVms3T3pzN096czdPenM3UVVGVmRFTXNVMEZCU3l4RlFVRkZMRlZCUVVNc1MwRkJTeXhGUVVGTE8wRkJRMlFzV1VGQlRTeFhRVUZYTEVkQlFVY3NWMEZvUWtZc2JVSkJRVzFDTEVWQlowSkhMRXRCUVVzc1EwRkJReXhEUVVGRE8wRkJReTlETEZsQlFVMHNUMEZCVHl4SFFVRkhMRmRCUVZjc1EwRkJReXhOUVVGTkxFTkJRVU03UVVGRGJrTXNXVUZCVFN4VlFVRlZMRWRCUVVjN1FVRkRaaXhoUVVGRExFVkJRVVVzVjBGQlZ5eERRVUZETEVOQlFVTXNRMEZCUXp0QlFVTnFRaXhoUVVGRExFVkJRVVVzUVVGQlF5eFBRVUZQTEVkQlFVY3NRMEZCUXl4SFFVRkpMRmRCUVZjc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eFhRVUZYTEVOQlFVTXNRMEZCUXl4RFFVRkRPMU5CUTNKRUxFTkJRVU03TzBGQlJVWXNXVUZCU1N4UFFVRlBMRWRCUVVjc1EwRkJReXhGUVVGRk8wRkJRMklzYzBKQlFWVXNRMEZCUXl4RFFVRkRMRWRCUVVjc1YwRkJWeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFOQlEycERPenRCUVVWRUxHVkJRVThzVlVGQlZTeERRVUZETzB0QlEzSkNPenRCUVVWRUxGZEJRVThzUlVGQlJTeFZRVUZETEUxQlFVMDdaVUZCU3l4WFFUbENhRUlzWlVGQlpTeEZRVGhDYVVJc1RVRkJUU3hqUVRWQ2RFTXNTVUZCU1N4RlFUUkNNRU1zUjBGQlJ5eERRVUZETzB0QlFVRTdRMEZETVVRaUxDSm1hV3hsSWpvaVlYaGxjeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEZCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQjdJR055WldGMFpVUmxiR2x0YVhSbFpDd2djM0JzYVhSVGNHRmpaVVJsYkdsdGFYUmxaQ0I5SUdaeWIyMGdKeTR1TDJsdVl5OTFkR2xzY3ljN1hHNXBiWEJ2Y25RZ2NIaFdZV3gxWlZSNWNHVWdabkp2YlNBbkxpOXdlQ2M3WEc1cGJYQnZjblFnZXlCaGVHVnpJSDBnWm5KdmJTQW5MaTl6WlhSMGFXNW5jeTlrYVdOMGFXOXVZWEo1Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2UxeHVJQ0FnSUdSbFptRjFiSFJRY205d2N6b2djSGhXWVd4MVpWUjVjR1V1WkdWbVlYVnNkRkJ5YjNCekxGeHVJQ0FnSUNBZ0lDQmNiaUFnSUNBdktseHVJQ0FnSUNBZ0lDQlRjR3hwZENCd2IzTnBkR2x2Ym5NZ2FXNGdabTl5YldGMElGd2lXQ0JaSUZwY0lseHVJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdRSEJoY21GdElGdHpkSEpwYm1kZE9pQlFiM05wZEdsdmJpQjJZV3gxWlhOY2JpQWdJQ0FnSUNBZ0lDQWdJRndpTWpBbElETXdKU0F3WENJZ0xUNGdlekl3SlN3Z016QWxMQ0F3ZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdYQ0l5TUNVZ016QWxYQ0lnTFQ0Z2V6SXdKU3dnTXpBbGZWeHVJQ0FnSUNBZ0lDQWdJQ0FnWENJeU1DVmNJaUF0UGlCN01qQWxMQ0F5TUNWOVhHNGdJQ0FnS2k5Y2JpQWdJQ0J6Y0d4cGREb2dLSFpoYkhWbEtTQTlQaUI3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJSE53YkdsMFZtRnNkV1Z6SUQwZ2MzQnNhWFJUY0dGalpVUmxiR2x0YVhSbFpDaDJZV3gxWlNrN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUc1MWJVRjRaWE1nUFNCemNHeHBkRlpoYkhWbGN5NXNaVzVuZEdnN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUhOd2JHbDBWbUZzZFdVZ1BTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCWU9pQnpjR3hwZEZaaGJIVmxjMXN3WFN4Y2JpQWdJQ0FnSUNBZ0lDQWdJRms2SUNodWRXMUJlR1Z6SUQ0Z01Ta2dQeUJ6Y0d4cGRGWmhiSFZsYzFzeFhTQTZJSE53YkdsMFZtRnNkV1Z6V3pCZFhHNGdJQ0FnSUNBZ0lIMDdYRzVjYmlBZ0lDQWdJQ0FnYVdZZ0tHNTFiVUY0WlhNZ1BpQXlLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnpjR3hwZEZaaGJIVmxMbG9nUFNCemNHeHBkRlpoYkhWbGMxc3lYVHRjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCemNHeHBkRlpoYkhWbE8xeHVJQ0FnSUgwc1hHNWNiaUFnSUNCamIyMWlhVzVsT2lBb2RtRnNkV1Z6S1NBOVBpQmpjbVZoZEdWRVpXeHBiV2wwWldRb2RtRnNkV1Z6TENCaGVHVnpMQ0FuSUNjcFhHNTlPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvYXhlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDIzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfcmdiID0gcmVxdWlyZSgnLi9yZ2InKTtcblxudmFyIF9yZ2IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmdiKTtcblxudmFyIF9oc2wgPSByZXF1aXJlKCcuL2hzbCcpO1xuXG52YXIgX2hzbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oc2wpO1xuXG52YXIgX2hleCA9IHJlcXVpcmUoJy4vaGV4Jyk7XG5cbnZhciBfaGV4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hleCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBjb2xvclR5cGVzID0gW19yZ2IyLmRlZmF1bHQsIF9oc2wyLmRlZmF1bHQsIF9oZXgyLmRlZmF1bHRdO1xudmFyIG51bUNvbG9yVHlwZXMgPSBjb2xvclR5cGVzLmxlbmd0aDtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGRlZmF1bHRQcm9wczogX2V4dGVuZHMoe30sIF9yZ2IyLmRlZmF1bHQuZGVmYXVsdFByb3BzLCBfaHNsMi5kZWZhdWx0LmRlZmF1bHRQcm9wcyksXG5cbiAgICB0ZXN0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIF9yZ2IyLmRlZmF1bHQudGVzdCh2YWx1ZSkgfHwgX2hleDIuZGVmYXVsdC50ZXN0KHZhbHVlKSB8fCBfaHNsMi5kZWZhdWx0LnRlc3QodmFsdWUpO1xuICAgIH0sXG5cbiAgICBzcGxpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtQ29sb3JUeXBlczsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY29sb3JUeXBlc1tpXS50ZXN0KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb2xvclR5cGVzW2ldLnNwbGl0KHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBjb21iaW5lOiBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZXMuUmVkICE9PSB1bmRlZmluZWQgPyBfcmdiMi5kZWZhdWx0LmNvbWJpbmUodmFsdWVzKSA6IF9oc2wyLmRlZmF1bHQuY29tYmluZSh2YWx1ZXMpO1xuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTlqYjJ4dmNpNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN096czdPenM3T3pzN096czdPenRCUVVsQkxFbEJRVTBzVlVGQlZTeEhRVUZITERaRFFVRmxMRU5CUVVNN1FVRkRia01zU1VGQlRTeGhRVUZoTEVkQlFVY3NWVUZCVlN4RFFVRkRMRTFCUVUwc1EwRkJRenM3YTBKQlJYcENPMEZCUTFnc1owSkJRVmtzWlVGQlR5eGpRVUZKTEZsQlFWa3NSVUZCU3l4alFVRkpMRmxCUVZrc1EwRkJSVHM3UVVGRk1VUXNVVUZCU1N4RlFVRkZMRlZCUVVNc1MwRkJTenRsUVVGTExHTkJRVWtzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMR05CUVVrc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEdOQlFVa3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJRenRMUVVGQk96dEJRVVYwUlN4VFFVRkxMRVZCUVVVc1ZVRkJReXhMUVVGTExFVkJRVXM3UVVGRFpDeGhRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzWVVGQllTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMEZCUTNCRExHZENRVUZKTEZWQlFWVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVWQlFVVTdRVUZETTBJc2RVSkJRVThzVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dGhRVU55UXp0VFFVTktPMHRCUTBvN08wRkJSVVFzVjBGQlR5eEZRVUZGTEZWQlFVTXNUVUZCVFR0bFFVRkxMRUZCUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUzBGQlN5eFRRVUZUTEVkQlFVa3NZMEZCU1N4UFFVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzWTBGQlNTeFBRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRPMHRCUVVFN1EwRkRPVVlpTENKbWFXeGxJam9pWTI5c2IzSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFJRWlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2NtZGlJR1p5YjIwZ0p5NHZjbWRpSnp0Y2JtbHRjRzl5ZENCb2Myd2dabkp2YlNBbkxpOW9jMnduTzF4dWFXMXdiM0owSUdobGVDQm1jbTl0SUNjdUwyaGxlQ2M3WEc1Y2JtTnZibk4wSUdOdmJHOXlWSGx3WlhNZ1BTQmJjbWRpTENCb2Myd3NJR2hsZUYwN1hHNWpiMjV6ZENCdWRXMURiMnh2Y2xSNWNHVnpJRDBnWTI5c2IzSlVlWEJsY3k1c1pXNW5kR2c3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUh0Y2JpQWdJQ0JrWldaaGRXeDBVSEp2Y0hNNklIc2dMaTR1Y21kaUxtUmxabUYxYkhSUWNtOXdjeXdnTGk0dWFITnNMbVJsWm1GMWJIUlFjbTl3Y3lCOUxGeHVYRzRnSUNBZ2RHVnpkRG9nS0haaGJIVmxLU0E5UGlCeVoySXVkR1Z6ZENoMllXeDFaU2tnZkh3Z2FHVjRMblJsYzNRb2RtRnNkV1VwSUh4OElHaHpiQzUwWlhOMEtIWmhiSFZsS1N4Y2JseHVJQ0FnSUhOd2JHbDBPaUFvZG1Gc2RXVXBJRDArSUh0Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQnVkVzFEYjJ4dmNsUjVjR1Z6T3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hqYjJ4dmNsUjVjR1Z6VzJsZExuUmxjM1FvZG1Gc2RXVXBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJR052Ykc5eVZIbHdaWE5iYVYwdWMzQnNhWFFvZG1Gc2RXVXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZTeGNibHh1SUNBZ0lHTnZiV0pwYm1VNklDaDJZV3gxWlhNcElEMCtJQ2gyWVd4MVpYTXVVbVZrSUNFOVBTQjFibVJsWm1sdVpXUXBJRDhnY21kaUxtTnZiV0pwYm1Vb2RtRnNkV1Z6S1NBNklHaHpiQzVqYjIxaWFXNWxLSFpoYkhWbGN5bGNibjA3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2NvbG9yLmpzXG4gKiogbW9kdWxlIGlkID0gMjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG52YXIgRkxPQVRfUkVHRVggPSAvKC0pPyhcXGRbXFxkXFwuXSopL2c7XG52YXIgZ2VuZXJhdGVUb2tlbiA9IGZ1bmN0aW9uICh0b2tlbikge1xuICAgIHJldHVybiAnJHsnICsgdG9rZW4gKyAnfSc7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG5cbiAgICB0ZXN0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIG1hdGNoZXMgPSB2YWx1ZS5tYXRjaChGTE9BVF9SRUdFWCk7XG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzLmlzQXJyYXkpKG1hdGNoZXMpICYmIG1hdGNoZXMubGVuZ3RoID4gMTtcbiAgICB9LFxuXG4gICAgdGVtcGxhdGU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgY291bnRlciA9IDA7XG4gICAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKEZMT0FUX1JFR0VYLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2VuZXJhdGVUb2tlbihjb3VudGVyKyspO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgc3BsaXRWYWx1ZSA9IHt9O1xuXG4gICAgICAgIHZhbHVlLm1hdGNoKEZMT0FUX1JFR0VYKS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwgaSkge1xuICAgICAgICAgICAgcmV0dXJuIHNwbGl0VmFsdWVbaV0gPSB2YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHNwbGl0VmFsdWU7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMsIHRlbXBsYXRlKSB7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiB2YWx1ZXMpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlID0gdGVtcGxhdGUucmVwbGFjZShnZW5lcmF0ZVRva2VuKGtleSksIHZhbHVlc1trZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICB9XG5cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTlqYjIxd2JHVjRMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096dEJRVVZCTEVsQlFVMHNWMEZCVnl4SFFVRkhMR3RDUVVGclFpeERRVUZETzBGQlEzWkRMRWxCUVUwc1lVRkJZU3hIUVVGSExGVkJRVU1zUzBGQlN6dFhRVUZMTEVsQlFVa3NSMEZCUnl4TFFVRkxMRWRCUVVjc1IwRkJSenREUVVGQkxFTkJRVU03TzJ0Q1FVVnlRenM3UVVGRldDeFJRVUZKTEVWQlFVVXNWVUZCUXl4TFFVRkxMRVZCUVVzN1FVRkRZaXhaUVVGTkxFOUJRVThzUjBGQlJ5eExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRE8wRkJRM3BETEdWQlFWRXNWMEZVVUN4UFFVRlBMRVZCVTFFc1QwRkJUeXhEUVVGRExFbEJRVWtzVDBGQlR5eERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVVN1MwRkRia1E3TzBGQlJVUXNXVUZCVVN4RlFVRkZMRlZCUVVNc1MwRkJTeXhGUVVGTE8wRkJRMnBDTEZsQlFVa3NUMEZCVHl4SFFVRkhMRU5CUVVNc1EwRkJRenRCUVVOb1FpeGxRVUZQTEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1YwRkJWeXhGUVVGRk8yMUNRVUZOTEdGQlFXRXNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenRUUVVGQkxFTkJRVU1zUTBGQlF6dExRVU55UlRzN1FVRkZSQ3hUUVVGTExFVkJRVVVzVlVGQlF5eExRVUZMTEVWQlFVczdRVUZEWkN4WlFVRk5MRlZCUVZVc1IwRkJSeXhGUVVGRkxFTkJRVU03TzBGQlJYUkNMR0ZCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRlZCUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU03YlVKQlFVc3NWVUZCVlN4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFdEJRVXM3VTBGQlFTeERRVUZETEVOQlFVTTdPMEZCUlhSRkxHVkJRVThzVlVGQlZTeERRVUZETzB0QlEzSkNPenRCUVVWRUxGZEJRVThzUlVGQlJTeFZRVUZETEUxQlFVMHNSVUZCUlN4UlFVRlJMRVZCUVVzN1FVRkRNMElzWVVGQlN5eEpRVUZKTEVkQlFVY3NTVUZCU1N4TlFVRk5MRVZCUVVVN1FVRkRjRUlzWjBKQlFVa3NUVUZCVFN4RFFVRkRMR05CUVdNc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJUdEJRVU0xUWl4M1FrRkJVU3hIUVVGSExGRkJRVkVzUTBGQlF5eFBRVUZQTEVOQlFVTXNZVUZCWVN4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMkZCUTJoRk8xTkJRMG83TzBGQlJVUXNaVUZCVHl4UlFVRlJMRU5CUVVNN1MwRkRia0k3TzBOQlJVb2lMQ0ptYVd4bElqb2lZMjl0Y0d4bGVDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkRkJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCN0lHbHpRWEp5WVhrZ2ZTQm1jbTl0SUNjdUxpOXBibU12ZFhScGJITW5PMXh1WEc1amIyNXpkQ0JHVEU5QlZGOVNSVWRGV0NBOUlDOG9MU2svS0Z4Y1pGdGNYR1JjWEM1ZEtpa3ZaenRjYm1OdmJuTjBJR2RsYm1WeVlYUmxWRzlyWlc0Z1BTQW9kRzlyWlc0cElEMCtJQ2NrZXljZ0t5QjBiMnRsYmlBcklDZDlKenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnZTF4dVhHNGdJQ0FnZEdWemREb2dLSFpoYkhWbEtTQTlQaUI3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJRzFoZEdOb1pYTWdQU0IyWVd4MVpTNXRZWFJqYUNoR1RFOUJWRjlTUlVkRldDazdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQW9hWE5CY25KaGVTaHRZWFJqYUdWektTQW1KaUJ0WVhSamFHVnpMbXhsYm1kMGFDQStJREVwTzF4dUlDQWdJSDBzWEc1Y2JpQWdJQ0IwWlcxd2JHRjBaVG9nS0haaGJIVmxLU0E5UGlCN1hHNGdJQ0FnSUNBZ0lHeGxkQ0JqYjNWdWRHVnlJRDBnTUR0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhaaGJIVmxMbkpsY0d4aFkyVW9Sa3hQUVZSZlVrVkhSVmdzSUNncElEMCtJR2RsYm1WeVlYUmxWRzlyWlc0b1kyOTFiblJsY2lzcktTazdYRzRnSUNBZ2ZTeGNibHh1SUNBZ0lITndiR2wwT2lBb2RtRnNkV1VwSUQwK0lIdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2MzQnNhWFJXWVd4MVpTQTlJSHQ5TzF4dVhHNGdJQ0FnSUNBZ0lIWmhiSFZsTG0xaGRHTm9LRVpNVDBGVVgxSkZSMFZZS1M1bWIzSkZZV05vS0NoMllXeDFaU3dnYVNrZ1BUNGdjM0JzYVhSV1lXeDFaVnRwWFNBOUlIWmhiSFZsS1R0Y2JseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2MzQnNhWFJXWVd4MVpUdGNiaUFnSUNCOUxGeHVYRzRnSUNBZ1kyOXRZbWx1WlRvZ0tIWmhiSFZsY3l3Z2RHVnRjR3hoZEdVcElEMCtJSHRjYmlBZ0lDQWdJQ0FnWm05eUlDaHNaWFFnYTJWNUlHbHVJSFpoYkhWbGN5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFpoYkhWbGN5NW9ZWE5QZDI1UWNtOXdaWEowZVNoclpYa3BLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdWdGNHeGhkR1VnUFNCMFpXMXdiR0YwWlM1eVpYQnNZV05sS0dkbGJtVnlZWFJsVkc5clpXNG9hMlY1S1N3Z2RtRnNkV1Z6VzJ0bGVWMHBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJsYlhCc1lYUmxPMXh1SUNBZ0lIMWNibHh1ZlRzaVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2NvbXBsZXguanNcbiAqKiBtb2R1bGUgaWQgPSAyNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3JnYiA9IHJlcXVpcmUoJy4vcmdiJyk7XG5cbnZhciBfcmdiMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JnYik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IF9yZ2IyLmRlZmF1bHQuZGVmYXVsdFByb3BzLFxuXG4gICAgdGVzdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mKCcjJykgPiAtMTtcbiAgICB9LFxuXG4gICAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgciA9IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGcgPSB1bmRlZmluZWQsXG4gICAgICAgICAgICBiID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIC8vIElmIHdlIGhhdmUgNiBjaGFyYWN0ZXJzLCBpZSAjRkYwMDAwXG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiA0KSB7XG4gICAgICAgICAgICByID0gdmFsdWUuc3Vic3RyKDEsIDIpO1xuICAgICAgICAgICAgZyA9IHZhbHVlLnN1YnN0cigzLCAyKTtcbiAgICAgICAgICAgIGIgPSB2YWx1ZS5zdWJzdHIoNSwgMik7XG5cbiAgICAgICAgICAgIC8vIE9yIHdlIGhhdmUgMyBjaGFyYWN0ZXJzLCBpZSAjRjAwXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgciA9IHZhbHVlLnN1YnN0cigxLCAxKTtcbiAgICAgICAgICAgICAgICBnID0gdmFsdWUuc3Vic3RyKDIsIDEpO1xuICAgICAgICAgICAgICAgIGIgPSB2YWx1ZS5zdWJzdHIoMywgMSk7XG4gICAgICAgICAgICAgICAgciArPSByO1xuICAgICAgICAgICAgICAgIGcgKz0gZztcbiAgICAgICAgICAgICAgICBiICs9IGI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFJlZDogcGFyc2VJbnQociwgMTYpLFxuICAgICAgICAgICAgR3JlZW46IHBhcnNlSW50KGcsIDE2KSxcbiAgICAgICAgICAgIEJsdWU6IHBhcnNlSW50KGIsIDE2KSxcbiAgICAgICAgICAgIEFscGhhOiAxXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuIF9yZ2IyLmRlZmF1bHQuY29tYmluZSh2YWx1ZXMpO1xuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTlvWlhndWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096dHJRa0ZGWlR0QlFVTllMR2RDUVVGWkxFVkJRVVVzWTBGQlNTeFpRVUZaT3p0QlFVVTVRaXhSUVVGSkxFVkJRVVVzVlVGQlF5eExRVUZMTzJWQlFVMHNTMEZCU3l4SlFVRkpMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMHRCUVVNN08wRkJSVzVFTEZOQlFVc3NSVUZCUlN4VlFVRkRMRXRCUVVzc1JVRkJTenRCUVVOa0xGbEJRVWtzUTBGQlF5eFpRVUZCTzFsQlFVVXNRMEZCUXl4WlFVRkJPMWxCUVVVc1EwRkJReXhaUVVGQk96czdRVUZCUXl4QlFVZGFMRmxCUVVrc1MwRkJTeXhEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVWQlFVVTdRVUZEYkVJc1lVRkJReXhIUVVGSExFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJRM1pDTEdGQlFVTXNSMEZCUnl4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0QlFVTjJRaXhoUVVGRExFZEJRVWNzUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE96czdRVUZCUXl4VFFVY3hRaXhOUVVGTk8wRkJRMGdzYVVKQlFVTXNSMEZCUnl4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0QlFVTjJRaXhwUWtGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzBGQlEzWkNMR2xDUVVGRExFZEJRVWNzUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRGRrSXNhVUpCUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03UVVGRFVDeHBRa0ZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRCUVVOUUxHbENRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMkZCUTFZN08wRkJSVVFzWlVGQlR6dEJRVU5JTEdWQlFVY3NSVUZCUlN4UlFVRlJMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF6dEJRVU53UWl4cFFrRkJTeXhGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRPMEZCUTNSQ0xHZENRVUZKTEVWQlFVVXNVVUZCVVN4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU03UVVGRGNrSXNhVUpCUVVzc1JVRkJSU3hEUVVGRE8xTkJRMWdzUTBGQlF6dExRVU5NT3p0QlFVVkVMRmRCUVU4c1JVRkJSU3hWUVVGRExFMUJRVTA3WlVGQlN5eGpRVUZKTEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNN1MwRkJRVHREUVVNelF5SXNJbVpwYkdVaU9pSm9aWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhSUVpYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdjbWRpSUdaeWIyMGdKeTR2Y21kaUp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdlMXh1SUNBZ0lHUmxabUYxYkhSUWNtOXdjem9nY21kaUxtUmxabUYxYkhSUWNtOXdjeXhjYmx4dUlDQWdJSFJsYzNRNklDaDJZV3gxWlNrZ1BUNGdLSFpoYkhWbElDWW1JSFpoYkhWbExtbHVaR1Y0VDJZb0p5TW5LU0ErSUMweEtTeGNibHh1SUNBZ0lITndiR2wwT2lBb2RtRnNkV1VwSUQwK0lIdGNiaUFnSUNBZ0lDQWdiR1YwSUhJc0lHY3NJR0k3WEc1Y2JpQWdJQ0FnSUNBZ0x5OGdTV1lnZDJVZ2FHRjJaU0EySUdOb1lYSmhZM1JsY25Nc0lHbGxJQ05HUmpBd01EQmNiaUFnSUNBZ0lDQWdhV1lnS0haaGJIVmxMbXhsYm1kMGFDQStJRFFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSElnUFNCMllXeDFaUzV6ZFdKemRISW9NU3dnTWlrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JuSUQwZ2RtRnNkV1V1YzNWaWMzUnlLRE1zSURJcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWWlBOUlIWmhiSFZsTG5OMVluTjBjaWcxTENBeUtUdGNibHh1SUNBZ0lDQWdJQ0F2THlCUGNpQjNaU0JvWVhabElETWdZMmhoY21GamRHVnljeXdnYVdVZ0kwWXdNRnh1SUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NpQTlJSFpoYkhWbExuTjFZbk4wY2lneExDQXhLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHY2dQU0IyWVd4MVpTNXpkV0p6ZEhJb01pd2dNU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmlJRDBnZG1Gc2RXVXVjM1ZpYzNSeUtETXNJREVwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdjaUFyUFNCeU8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWnlBclBTQm5PMXh1SUNBZ0lDQWdJQ0FnSUNBZ1lpQXJQU0JpTzF4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIdGNiaUFnSUNBZ0lDQWdJQ0FnSUZKbFpEb2djR0Z5YzJWSmJuUW9jaXdnTVRZcExGeHVJQ0FnSUNBZ0lDQWdJQ0FnUjNKbFpXNDZJSEJoY25ObFNXNTBLR2NzSURFMktTeGNiaUFnSUNBZ0lDQWdJQ0FnSUVKc2RXVTZJSEJoY25ObFNXNTBLR0lzSURFMktTeGNiaUFnSUNBZ0lDQWdJQ0FnSUVGc2NHaGhPaUF4WEc0Z0lDQWdJQ0FnSUgwN1hHNGdJQ0FnZlN4Y2JseHVJQ0FnSUdOdmJXSnBibVU2SUNoMllXeDFaWE1wSUQwK0lISm5ZaTVqYjIxaWFXNWxLSFpoYkhWbGN5bGNibjA3SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvaGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9kZWZhdWx0UHJvcHMgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RlZmF1bHQtcHJvcHMnKTtcblxudmFyIF9kaWN0aW9uYXJ5ID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kaWN0aW9uYXJ5Jyk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBIdWU6IHtcbiAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgIG1heDogMzYwXG4gICAgICAgIH0sXG4gICAgICAgIFNhdHVyYXRpb246IF9kZWZhdWx0UHJvcHMucGVyY2VudCxcbiAgICAgICAgTGlnaHRuZXNzOiBfZGVmYXVsdFByb3BzLnBlcmNlbnQsXG4gICAgICAgIEFscGhhOiBfZGVmYXVsdFByb3BzLm9wYWNpdHlcbiAgICB9LFxuXG4gICAgdGVzdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mKCdoc2wnKSA+IC0xO1xuICAgIH0sXG5cbiAgICBzcGxpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzLmdldENvbG9yVmFsdWVzKSh2YWx1ZSwgX2RpY3Rpb25hcnkuaHNsKTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICByZXR1cm4gKDAsIF91dGlscy5jcmVhdGVGdW5jdGlvblN0cmluZykoKDAsIF91dGlscy5jcmVhdGVEZWxpbWl0ZWQpKHZhbHVlcywgX2RpY3Rpb25hcnkuaHNsLCAnLCAnLCAyKSwgJ2hzbGEnKTtcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5b2Myd3Vhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenRyUWtGSlpUdEJRVU5ZTEdkQ1FVRlpMRVZCUVVVN1FVRkRWaXhYUVVGSExFVkJRVVU3UVVGRFJDeGxRVUZITEVWQlFVVXNRMEZCUXp0QlFVTk9MR1ZCUVVjc1JVRkJSU3hIUVVGSE8xTkJRMWc3UVVGRFJDeHJRa0ZCVlN4blFrRldWQ3hQUVVGUExFRkJWVmM3UVVGRGJrSXNhVUpCUVZNc1owSkJXRklzVDBGQlR5eEJRVmRWTzBGQlEyeENMR0ZCUVVzc1owSkJXa3NzVDBGQlR5eEJRVmxJTzB0QlEycENPenRCUVVWRUxGRkJRVWtzUlVGQlJTeFZRVUZETEV0QlFVczdaVUZCVFN4TFFVRkxMRWxCUVVrc1MwRkJTeXhEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1MwRkJRenM3UVVGRmNrUXNVMEZCU3l4RlFVRkZMRlZCUVVNc1MwRkJTenRsUVVGTExGZEJaakJDTEdOQlFXTXNSVUZsZWtJc1MwRkJTeXhqUVdoQ2FrTXNSMEZCUnl4RFFXZENlVU03UzBGQlFUczdRVUZGYWtRc1YwRkJUeXhGUVVGRkxGVkJRVU1zVFVGQlRUdGxRVUZMTEZkQmFrSkRMRzlDUVVGdlFpeEZRV2xDUVN4WFFXcENja01zWlVGQlpTeEZRV2xDYzBNc1RVRkJUU3hqUVd4Q00wUXNSMEZCUnl4RlFXdENiMFVzU1VGQlNTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRTFCUVUwc1EwRkJRenRMUVVGQk8wTkJRMmhISWl3aVptbHNaU0k2SW1oemJDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkRkJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCN0lIQmxjbU5sYm5Rc0lHOXdZV05wZEhrZ2ZTQm1jbTl0SUNjdUwzTmxkSFJwYm1kekwyUmxabUYxYkhRdGNISnZjSE1uTzF4dWFXMXdiM0owSUhzZ2FITnNJR0Z6SUdoemJGUmxjbTF6SUgwZ1puSnZiU0FuTGk5elpYUjBhVzVuY3k5a2FXTjBhVzl1WVhKNUp6dGNibWx0Y0c5eWRDQjdJR055WldGMFpVUmxiR2x0YVhSbFpDd2dZM0psWVhSbFJuVnVZM1JwYjI1VGRISnBibWNzSUdkbGRFTnZiRzl5Vm1Gc2RXVnpJSDBnWm5KdmJTQW5MaTR2YVc1akwzVjBhV3h6Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2UxeHVJQ0FnSUdSbFptRjFiSFJRY205d2N6b2dlMXh1SUNBZ0lDQWdJQ0JJZFdVNklIdGNiaUFnSUNBZ0lDQWdJQ0FnSUcxcGJqb2dNQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lHMWhlRG9nTXpZd1hHNGdJQ0FnSUNBZ0lIMHNYRzRnSUNBZ0lDQWdJRk5oZEhWeVlYUnBiMjQ2SUhCbGNtTmxiblFzWEc0Z0lDQWdJQ0FnSUV4cFoyaDBibVZ6Y3pvZ2NHVnlZMlZ1ZEN4Y2JpQWdJQ0FnSUNBZ1FXeHdhR0U2SUc5d1lXTnBkSGxjYmlBZ0lDQjlMRnh1WEc0Z0lDQWdkR1Z6ZERvZ0tIWmhiSFZsS1NBOVBpQW9kbUZzZFdVZ0ppWWdkbUZzZFdVdWFXNWtaWGhQWmlnbmFITnNKeWtnUGlBdE1Ta3NYRzVjYmlBZ0lDQnpjR3hwZERvZ0tIWmhiSFZsS1NBOVBpQm5aWFJEYjJ4dmNsWmhiSFZsY3loMllXeDFaU3dnYUhOc1ZHVnliWE1wTEZ4dVhHNGdJQ0FnWTI5dFltbHVaVG9nS0haaGJIVmxjeWtnUFQ0Z1kzSmxZWFJsUm5WdVkzUnBiMjVUZEhKcGJtY29ZM0psWVhSbFJHVnNhVzFwZEdWa0tIWmhiSFZsY3l3Z2FITnNWR1Z5YlhNc0lDY3NJQ2NzSURJcExDQW5hSE5zWVNjcFhHNTlPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvaHNsLmpzXG4gKiogbW9kdWxlIGlkID0gMjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9kaWN0aW9uYXJ5ID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kaWN0aW9uYXJ5Jyk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxudmFyIF9weCA9IHJlcXVpcmUoJy4vcHgnKTtcblxudmFyIF9weDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9weCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IF9weDIuZGVmYXVsdC5kZWZhdWx0UHJvcHMsXG5cbiAgICAvKlxuICAgICAgICBTcGxpdCBkaW1lbnNpb25zIGluIGZvcm1hdCBcIlRvcCBSaWdodCBCb3R0b20gTGVmdFwiXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW3N0cmluZ106IFBvc2l0aW9uIHZhbHVlc1xuICAgICAgICAgICAgXCIyMHB4IDAgMzBweCA0MHB4XCIgLT4gezIwcHgsIDAsIDMwcHgsIDQwcHh9XG4gICAgICAgICAgICBcIjIwcHggMCAzMHB4XCIgLT4gezIwcHgsIDAsIDMwcHgsIDB9XG4gICAgICAgICAgICBcIjIwcHggMFwiIC0+IHsyMHB4LCAwLCAyMHB4LCAwfVxuICAgICAgICAgICAgXCIyMHB4XCIgLT4gezIwcHgsIDIwcHgsIDIwcHgsIDIwcHh9XG4gICAgICAgIFxuICAgICAgICBAcmV0dXJuIFtvYmplY3RdOiBPYmplY3Qgd2l0aCBUL1IvQi9MIG1ldHJpY3NcbiAgICAqL1xuICAgIHNwbGl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIHNwbGl0VmFsdWUgPSB7fTtcbiAgICAgICAgdmFyIHNwbGl0UG9zaXRpb25zID0gKDAsIF91dGlscy5zcGxpdFNwYWNlRGVsaW1pdGVkKSh2YWx1ZSk7XG4gICAgICAgIHZhciBudW1Qb3NpdGlvbnMgPSBzcGxpdFBvc2l0aW9ucy5sZW5ndGg7XG4gICAgICAgIHZhciBqdW1wQmFjayA9IG51bVBvc2l0aW9ucyAhPT0gMSA/IDIgOiAxO1xuICAgICAgICB2YXIgaiA9IDA7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgIHNwbGl0VmFsdWVbX2RpY3Rpb25hcnkucG9zaXRpb25zW2ldXSA9IHNwbGl0UG9zaXRpb25zW2pdO1xuXG4gICAgICAgICAgICAvLyBKdW1wIGJhY2sgKHRvIHN0YXJ0KSBjb3VudGVyIGlmIHdlJ3ZlIHJlYWNoZWQgdGhlIGVuZCBvZiBvdXIgdmFsdWVzXG4gICAgICAgICAgICBqKys7XG4gICAgICAgICAgICBqID0gaiA9PT0gbnVtUG9zaXRpb25zID8gaiAtIGp1bXBCYWNrIDogajtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzcGxpdFZhbHVlO1xuICAgIH0sXG5cbiAgICBjb21iaW5lOiBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzLmNyZWF0ZURlbGltaXRlZCkodmFsdWVzLCBfZGljdGlvbmFyeS5wb3NpdGlvbnMsICcgJyk7XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OXdiM05wZEdsdmJuTXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenM3T3pzN2EwSkJTV1U3UVVGRFdDeG5Ra0ZCV1N4RlFVRkZMR0ZCUVZrc1dVRkJXVHM3T3pzN096czdPenM3T3p0QlFXRjBReXhUUVVGTExFVkJRVVVzVlVGQlF5eExRVUZMTEVWQlFVczdRVUZEWkN4WlFVRk5MRlZCUVZVc1IwRkJSeXhGUVVGRkxFTkJRVU03UVVGRGRFSXNXVUZCVFN4alFVRmpMRWRCUVVjc1YwRnVRa3dzYlVKQlFXMUNMRVZCYlVKTkxFdEJRVXNzUTBGQlF5eERRVUZETzBGQlEyeEVMRmxCUVUwc1dVRkJXU3hIUVVGSExHTkJRV01zUTBGQlF5eE5RVUZOTEVOQlFVTTdRVUZETTBNc1dVRkJUU3hSUVVGUkxFZEJRVWNzUVVGQlF5eFpRVUZaTEV0QlFVc3NRMEZCUXl4SFFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03UVVGRE9VTXNXVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE96dEJRVVZXTEdGQlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1FVRkRlRUlzYzBKQlFWVXNRMEZCUXl4WlFURkNaQ3hUUVVGVExFTkJNRUpsTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1kwRkJZeXhEUVVGRExFTkJRVU1zUTBGQlF6czdPMEZCUVVNc1FVRkhOME1zWVVGQlF5eEZRVUZGTEVOQlFVTTdRVUZEU2l4aFFVRkRMRWRCUVVjc1FVRkJReXhEUVVGRExFdEJRVXNzV1VGQldTeEhRVUZKTEVOQlFVTXNSMEZCUnl4UlFVRlJMRWRCUVVjc1EwRkJReXhEUVVGRE8xTkJReTlET3p0QlFVVkVMR1ZCUVU4c1ZVRkJWU3hEUVVGRE8wdEJRM0pDT3p0QlFVVkVMRmRCUVU4c1JVRkJSU3hWUVVGRExFMUJRVTA3WlVGQlN5eFhRVzVEYUVJc1pVRkJaU3hGUVcxRGFVSXNUVUZCVFN4alFYQkRkRU1zVTBGQlV5eEZRVzlETUVNc1IwRkJSeXhEUVVGRE8wdEJRVUU3UTBGREwwUWlMQ0ptYVd4bElqb2ljRzl6YVhScGIyNXpMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwVUdWeWNua3ZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElIc2djRzl6YVhScGIyNXpJSDBnWm5KdmJTQW5MaTl6WlhSMGFXNW5jeTlrYVdOMGFXOXVZWEo1Snp0Y2JtbHRjRzl5ZENCN0lHTnlaV0YwWlVSbGJHbHRhWFJsWkN3Z2MzQnNhWFJUY0dGalpVUmxiR2x0YVhSbFpDQjlJR1p5YjIwZ0p5NHVMMmx1WXk5MWRHbHNjeWM3WEc1cGJYQnZjblFnY0hoV1lXeDFaVlI1Y0dVZ1puSnZiU0FuTGk5d2VDYzdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJSHRjYmlBZ0lDQmtaV1poZFd4MFVISnZjSE02SUhCNFZtRnNkV1ZVZVhCbExtUmxabUYxYkhSUWNtOXdjeXhjYmx4dUlDQWdJQzhxWEc0Z0lDQWdJQ0FnSUZOd2JHbDBJR1JwYldWdWMybHZibk1nYVc0Z1ptOXliV0YwSUZ3aVZHOXdJRkpwWjJoMElFSnZkSFJ2YlNCTVpXWjBYQ0pjYmlBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUVCd1lYSmhiU0JiYzNSeWFXNW5YVG9nVUc5emFYUnBiMjRnZG1Gc2RXVnpYRzRnSUNBZ0lDQWdJQ0FnSUNCY0lqSXdjSGdnTUNBek1IQjRJRFF3Y0hoY0lpQXRQaUI3TWpCd2VDd2dNQ3dnTXpCd2VDd2dOREJ3ZUgxY2JpQWdJQ0FnSUNBZ0lDQWdJRndpTWpCd2VDQXdJRE13Y0hoY0lpQXRQaUI3TWpCd2VDd2dNQ3dnTXpCd2VDd2dNSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lGd2lNakJ3ZUNBd1hDSWdMVDRnZXpJd2NIZ3NJREFzSURJd2NIZ3NJREI5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmNJakl3Y0hoY0lpQXRQaUI3TWpCd2VDd2dNakJ3ZUN3Z01qQndlQ3dnTWpCd2VIMWNiaUFnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJRUJ5WlhSMWNtNGdXMjlpYW1WamRGMDZJRTlpYW1WamRDQjNhWFJvSUZRdlVpOUNMMHdnYldWMGNtbGpjMXh1SUNBZ0lDb3ZYRzRnSUNBZ2MzQnNhWFE2SUNoMllXeDFaU2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCemNHeHBkRlpoYkhWbElEMGdlMzA3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJSE53YkdsMFVHOXphWFJwYjI1eklEMGdjM0JzYVhSVGNHRmpaVVJsYkdsdGFYUmxaQ2gyWVd4MVpTazdYRzRnSUNBZ0lDQWdJR052Ym5OMElHNTFiVkJ2YzJsMGFXOXVjeUE5SUhOd2JHbDBVRzl6YVhScGIyNXpMbXhsYm1kMGFEdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2FuVnRjRUpoWTJzZ1BTQW9iblZ0VUc5emFYUnBiMjV6SUNFOVBTQXhLU0EvSURJZ09pQXhPMXh1SUNBZ0lDQWdJQ0JzWlhRZ2FpQTlJREE3WEc1Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQTBPeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhOd2JHbDBWbUZzZFdWYmNHOXphWFJwYjI1elcybGRYU0E5SUhOd2JHbDBVRzl6YVhScGIyNXpXMnBkTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCS2RXMXdJR0poWTJzZ0tIUnZJSE4wWVhKMEtTQmpiM1Z1ZEdWeUlHbG1JSGRsSjNabElISmxZV05vWldRZ2RHaGxJR1Z1WkNCdlppQnZkWElnZG1Gc2RXVnpYRzRnSUNBZ0lDQWdJQ0FnSUNCcUt5czdYRzRnSUNBZ0lDQWdJQ0FnSUNCcUlEMGdLR29nUFQwOUlHNTFiVkJ2YzJsMGFXOXVjeWtnUHlCcUlDMGdhblZ0Y0VKaFkyc2dPaUJxTzF4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlITndiR2wwVm1Gc2RXVTdYRzRnSUNBZ2ZTeGNibHh1SUNBZ0lHTnZiV0pwYm1VNklDaDJZV3gxWlhNcElEMCtJR055WldGMFpVUmxiR2x0YVhSbFpDaDJZV3gxWlhNc0lIQnZjMmwwYVc5dWN5d2dKeUFuS1Z4dWZUc2lYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9wb3NpdGlvbnMuanNcbiAqKiBtb2R1bGUgaWQgPSAyOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3VuaXQgPSByZXF1aXJlKCcuL3VuaXQnKTtcblxudmFyIF91bml0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3VuaXQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIHVuaXQ6ICdweCcsXG4gICAgICAgIHR5cGU6IF91bml0Mi5kZWZhdWx0XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OXdlQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3TzJ0Q1FVVmxPMEZCUTFnc1owSkJRVmtzUlVGQlJUdEJRVU5XTEZsQlFVa3NSVUZCUlN4SlFVRkpPMEZCUTFZc1dVRkJTU3huUWtGQlZUdExRVU5xUWp0RFFVTktJaXdpWm1sc1pTSTZJbkI0TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMFVHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSFZ1YVhSVWVYQmxJR1p5YjIwZ0p5NHZkVzVwZENjN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElIdGNiaUFnSUNCa1pXWmhkV3gwVUhKdmNITTZJSHRjYmlBZ0lDQWdJQ0FnZFc1cGREb2dKM0I0Snl4Y2JpQWdJQ0FnSUNBZ2RIbHdaVG9nZFc1cGRGUjVjR1ZjYmlBZ0lDQjlYRzU5T3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3B4LmpzXG4gKiogbW9kdWxlIGlkID0gMjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG52YXIgX2RpY3Rpb25hcnkgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RpY3Rpb25hcnknKTtcblxudmFyIF9kZWZhdWx0UHJvcHMgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RlZmF1bHQtcHJvcHMnKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBSZWQ6IF9kZWZhdWx0UHJvcHMucmdiLFxuICAgICAgICBHcmVlbjogX2RlZmF1bHRQcm9wcy5yZ2IsXG4gICAgICAgIEJsdWU6IF9kZWZhdWx0UHJvcHMucmdiLFxuICAgICAgICBBbHBoYTogX2RlZmF1bHRQcm9wcy5vcGFjaXR5XG4gICAgfSxcblxuICAgIHRlc3Q6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgJiYgdmFsdWUuaW5kZXhPZigncmdiJykgPiAtMTtcbiAgICB9LFxuXG4gICAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gKDAsIF91dGlscy5nZXRDb2xvclZhbHVlcykodmFsdWUsIF9kaWN0aW9uYXJ5LnJnYik7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMuY3JlYXRlRnVuY3Rpb25TdHJpbmcpKCgwLCBfdXRpbHMuY3JlYXRlRGVsaW1pdGVkKSh2YWx1ZXMsIF9kaWN0aW9uYXJ5LnJnYiwgJywgJywgMiksICdyZ2JhJyk7XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OXlaMkl1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3T3p0clFrRkpaVHRCUVVOWUxHZENRVUZaTEVWQlFVVTdRVUZEVml4WFFVRkhMR2RDUVVwR0xFZEJRVWNzUVVGSlZ6dEJRVU5tTEdGQlFVc3NaMEpCVEVvc1IwRkJSeXhCUVV0aE8wRkJRMnBDTEZsQlFVa3NaMEpCVGtnc1IwRkJSeXhCUVUxWk8wRkJRMmhDTEdGQlFVc3NaMEpCVUdVc1QwRkJUeXhCUVU5T08wdEJRM2hDT3p0QlFVVkVMRkZCUVVrc1JVRkJSU3hWUVVGRExFdEJRVXM3WlVGQlRTeExRVUZMTEVsQlFVa3NTMEZCU3l4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdTMEZCUXpzN1FVRkZja1FzVTBGQlN5eEZRVUZGTEZWQlFVTXNTMEZCU3p0bFFVRkxMRmRCWkRCQ0xHTkJRV01zUlVGamVrSXNTMEZCU3l4alFXSnFReXhIUVVGSExFTkJZWGxETzB0QlFVRTdPMEZCUldwRUxGZEJRVThzUlVGQlJTeFZRVUZETEUxQlFVMDdaVUZCU3l4WFFXaENReXh2UWtGQmIwSXNSVUZuUWtFc1YwRm9RbkpETEdWQlFXVXNSVUZuUW5ORExFMUJRVTBzWTBGbU0wUXNSMEZCUnl4RlFXVnZSU3hKUVVGSkxFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNUVUZCVFN4RFFVRkRPMHRCUVVFN1EwRkRhRWNpTENKbWFXeGxJam9pY21kaUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBVR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhzZ1kzSmxZWFJsUkdWc2FXMXBkR1ZrTENCamNtVmhkR1ZHZFc1amRHbHZibE4wY21sdVp5d2daMlYwUTI5c2IzSldZV3gxWlhNZ2ZTQm1jbTl0SUNjdUxpOXBibU12ZFhScGJITW5PMXh1YVcxd2IzSjBJSHNnY21kaUlHRnpJSEpuWWxSbGNtMXpJSDBnWm5KdmJTQW5MaTl6WlhSMGFXNW5jeTlrYVdOMGFXOXVZWEo1Snp0Y2JtbHRjRzl5ZENCN0lISm5ZaUJoY3lCa1pXWmhkV3gwVWtkQ0xDQnZjR0ZqYVhSNUlHRnpJR1JsWm1GMWJIUlBjR0ZqYVhSNUlIMGdabkp2YlNBbkxpOXpaWFIwYVc1bmN5OWtaV1poZFd4MExYQnliM0J6Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2UxeHVJQ0FnSUdSbFptRjFiSFJRY205d2N6b2dlMXh1SUNBZ0lDQWdJQ0JTWldRNklHUmxabUYxYkhSU1IwSXNYRzRnSUNBZ0lDQWdJRWR5WldWdU9pQmtaV1poZFd4MFVrZENMRnh1SUNBZ0lDQWdJQ0JDYkhWbE9pQmtaV1poZFd4MFVrZENMRnh1SUNBZ0lDQWdJQ0JCYkhCb1lUb2daR1ZtWVhWc2RFOXdZV05wZEhsY2JpQWdJQ0I5TEZ4dVhHNGdJQ0FnZEdWemREb2dLSFpoYkhWbEtTQTlQaUFvZG1Gc2RXVWdKaVlnZG1Gc2RXVXVhVzVrWlhoUFppZ25jbWRpSnlrZ1BpQXRNU2tzWEc1Y2JpQWdJQ0J6Y0d4cGREb2dLSFpoYkhWbEtTQTlQaUJuWlhSRGIyeHZjbFpoYkhWbGN5aDJZV3gxWlN3Z2NtZGlWR1Z5YlhNcExGeHVYRzRnSUNBZ1kyOXRZbWx1WlRvZ0tIWmhiSFZsY3lrZ1BUNGdZM0psWVhSbFJuVnVZM1JwYjI1VGRISnBibWNvWTNKbFlYUmxSR1ZzYVcxcGRHVmtLSFpoYkhWbGN5d2djbWRpVkdWeWJYTXNJQ2NzSUNjc0lESXBMQ0FuY21kaVlTY3BYRzU5T3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3JnYi5qc1xuICoqIG1vZHVsZSBpZCA9IDMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgY3VycmVudDogMVxuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTl6WTJGc1pTNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3YTBKQlFXVTdRVUZEV0N4blFrRkJXU3hGUVVGRk8wRkJRMVlzWlVGQlR5eEZRVUZGTEVOQlFVTTdTMEZEWWp0RFFVTktJaXdpWm1sc1pTSTZJbk5qWVd4bExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBVR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaVpYaHdiM0owSUdSbFptRjFiSFFnZTF4dUlDQWdJR1JsWm1GMWJIUlFjbTl3Y3pvZ2UxeHVJQ0FnSUNBZ0lDQmpkWEp5Wlc1ME9pQXhYRzRnSUNBZ2ZWeHVmVHNpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvc2NhbGUuanNcbiAqKiBtb2R1bGUgaWQgPSAzMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2NvbG9yID0gcmVxdWlyZSgnLi9jb2xvcicpO1xuXG52YXIgX2NvbG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbG9yKTtcblxudmFyIF9weCA9IHJlcXVpcmUoJy4vcHgnKTtcblxudmFyIF9kaWN0aW9uYXJ5ID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kaWN0aW9uYXJ5Jyk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHNoYWRvd1dpdGhvdXRDb2xvclRlcm1zID0gX2RpY3Rpb25hcnkuc2hhZG93LnNsaWNlKDAsIDQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgZGVmYXVsdFByb3BzOiBfZXh0ZW5kcyh7fSwgX2NvbG9yMi5kZWZhdWx0LmRlZmF1bHRQcm9wcywge1xuICAgICAgICBYOiBfcHguZGVmYXVsdFByb3BzLFxuICAgICAgICBZOiBfcHguZGVmYXVsdFByb3BzLFxuICAgICAgICBSYWRpdXM6IF9weC5kZWZhdWx0UHJvcHMsXG4gICAgICAgIFNwcmVhZDogX3B4LmRlZmF1bHRQcm9wc1xuICAgIH0pLFxuXG4gICAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgYml0cyA9ICgwLCBfdXRpbHMuc3BsaXRTcGFjZURlbGltaXRlZCkodmFsdWUpO1xuICAgICAgICB2YXIgaGFzUmVhY2hlZENvbG9yID0gZmFsc2U7XG4gICAgICAgIHZhciBjb2xvclByb3AgPSAnJztcbiAgICAgICAgdmFyIHNwbGl0VmFsdWUgPSB7fTtcblxuICAgICAgICBiaXRzLmZvckVhY2goZnVuY3Rpb24gKGJpdCwgaSkge1xuICAgICAgICAgICAgLy8gSWYgd2UndmUgcmVhY2hlZCB0aGUgY29sb3IgcHJvcHMsIGFwcGVuZCB0byBjb2xvciBzdHJpbmdcbiAgICAgICAgICAgIGlmIChoYXNSZWFjaGVkQ29sb3IgfHwgX2NvbG9yMi5kZWZhdWx0LnRlc3QoYml0KSkge1xuICAgICAgICAgICAgICAgIGhhc1JlYWNoZWRDb2xvciA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29sb3JQcm9wICs9IGJpdDtcblxuICAgICAgICAgICAgICAgIC8vIEVsc2UgcHJvY2VzcyBzaGFkb3cgdmFsdWVcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNwbGl0VmFsdWVbX2RpY3Rpb25hcnkuc2hhZG93W2ldXSA9IGJpdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBzcGxpdENvbG9yUHJvcHMgPSBfY29sb3IyLmRlZmF1bHQuc3BsaXQoY29sb3JQcm9wKTtcblxuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHNwbGl0VmFsdWUsIHsgc3BsaXRDb2xvclByb3BzOiBzcGxpdENvbG9yUHJvcHMgfSk7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMuY3JlYXRlRGVsaW1pdGVkKSh2YWx1ZXMsIHNoYWRvd1dpdGhvdXRDb2xvclRlcm1zLCAnICcpICsgX2NvbG9yMi5kZWZhdWx0LmNvbWJpbmUodmFsdWVzKTtcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5emFHRmtiM2N1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3T3pzN096czdPenM3TzBGQlMwRXNTVUZCVFN4MVFrRkJkVUlzUjBGQlJ5eFpRVWgyUWl4TlFVRk5MRU5CUnpaQ0xFdEJRVXNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN08ydENRVVY2UXp0QlFVTllMR2RDUVVGWkxHVkJRMHdzWjBKQlFVMHNXVUZCV1R0QlFVTnlRaXhUUVVGRExFMUJWRUVzV1VGQldTeEJRVk5KTzBGQlEycENMRk5CUVVNc1RVRldRU3haUVVGWkxFRkJWVWs3UVVGRGFrSXNZMEZCVFN4TlFWaE1MRmxCUVZrc1FVRlhVenRCUVVOMFFpeGpRVUZOTEUxQldrd3NXVUZCV1N4QlFWbFRPMDFCUTNwQ096dEJRVVZFTEZOQlFVc3NSVUZCUlN4VlFVRkRMRXRCUVVzc1JVRkJTenRCUVVOa0xGbEJRVTBzU1VGQlNTeEhRVUZITEZkQlpGb3NiVUpCUVcxQ0xFVkJZMkVzUzBGQlN5eERRVUZETEVOQlFVTTdRVUZEZUVNc1dVRkJTU3hsUVVGbExFZEJRVWNzUzBGQlN5eERRVUZETzBGQlF6VkNMRmxCUVVrc1UwRkJVeXhIUVVGSExFVkJRVVVzUTBGQlF6dEJRVU51UWl4WlFVRkpMRlZCUVZVc1IwRkJSeXhGUVVGRkxFTkJRVU03TzBGQlJYQkNMRmxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVlVGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXl4RlFVRkxPenRCUVVWeVFpeG5Ra0ZCU1N4bFFVRmxMRWxCUVVrc1owSkJRVTBzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZPMEZCUTNCRExDdENRVUZsTEVkQlFVY3NTVUZCU1N4RFFVRkRPMEZCUTNaQ0xIbENRVUZUTEVsQlFVa3NSMEZCUnpzN08wRkJRVU1zWVVGSGNFSXNUVUZCVFR0QlFVTklMRGhDUVVGVkxFTkJRVU1zV1VFMVFteENMRTFCUVUwc1EwRTBRbmRDTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRE8ybENRVU53UXp0VFFVTktMRU5CUVVNc1EwRkJRenM3UVVGRlNDeFpRVUZOTEdWQlFXVXNSMEZCUnl4blFrRkJUU3hMUVVGTExFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTTdPMEZCUlM5RExEUkNRVUZaTEZWQlFWVXNTVUZCUlN4bFFVRmxMRVZCUVdZc1pVRkJaU3hKUVVGSE8wdEJRemRET3p0QlFVVkVMRmRCUVU4c1JVRkJSU3hWUVVGRExFMUJRVTA3WlVGQlN5eFhRWEJEU3l4bFFVRmxMRVZCYjBOS0xFMUJRVTBzUlVGQlJTeDFRa0ZCZFVJc1JVRkJSU3hIUVVGSExFTkJRVU1zUjBGQlJ5eG5Ra0ZCVFN4UFFVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRE8wdEJRVUU3UTBGRGNrY2lMQ0ptYVd4bElqb2ljMmhoWkc5M0xtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBVR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUdOdmJHOXlJR1p5YjIwZ0p5NHZZMjlzYjNJbk8xeHVhVzF3YjNKMElIc2daR1ZtWVhWc2RGQnliM0J6SUdGeklIQjRSR1ZtWVhWc2RGQnliM0J6SUgwZ1puSnZiU0FuTGk5d2VDYzdYRzVwYlhCdmNuUWdleUJ6YUdGa2IzY2dZWE1nYzJoaFpHOTNWR1Z5YlhNZ2ZTQm1jbTl0SUNjdUwzTmxkSFJwYm1kekwyUnBZM1JwYjI1aGNua25PMXh1YVcxd2IzSjBJSHNnYzNCc2FYUlRjR0ZqWlVSbGJHbHRhWFJsWkN3Z1kzSmxZWFJsUkdWc2FXMXBkR1ZrSUgwZ1puSnZiU0FuTGk0dmFXNWpMM1YwYVd4ekp6dGNibHh1WTI5dWMzUWdjMmhoWkc5M1YybDBhRzkxZEVOdmJHOXlWR1Z5YlhNZ1BTQnphR0ZrYjNkVVpYSnRjeTV6YkdsalpTZ3dMQ0EwS1R0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2UxeHVJQ0FnSUdSbFptRjFiSFJRY205d2N6b2dlMXh1SUNBZ0lDQWdJQ0F1TGk1amIyeHZjaTVrWldaaGRXeDBVSEp2Y0hNc1hHNGdJQ0FnSUNBZ0lGZzZJSEI0UkdWbVlYVnNkRkJ5YjNCekxGeHVJQ0FnSUNBZ0lDQlpPaUJ3ZUVSbFptRjFiSFJRY205d2N5eGNiaUFnSUNBZ0lDQWdVbUZrYVhWek9pQndlRVJsWm1GMWJIUlFjbTl3Y3l4Y2JpQWdJQ0FnSUNBZ1UzQnlaV0ZrT2lCd2VFUmxabUYxYkhSUWNtOXdjMXh1SUNBZ0lIMHNYRzVjYmlBZ0lDQnpjR3hwZERvZ0tIWmhiSFZsS1NBOVBpQjdYRzRnSUNBZ0lDQWdJR052Ym5OMElHSnBkSE1nUFNCemNHeHBkRk53WVdObFJHVnNhVzFwZEdWa0tIWmhiSFZsS1R0Y2JpQWdJQ0FnSUNBZ2JHVjBJR2hoYzFKbFlXTm9aV1JEYjJ4dmNpQTlJR1poYkhObE8xeHVJQ0FnSUNBZ0lDQnNaWFFnWTI5c2IzSlFjbTl3SUQwZ0p5YzdYRzRnSUNBZ0lDQWdJR3hsZENCemNHeHBkRlpoYkhWbElEMGdlMzA3WEc1Y2JpQWdJQ0FnSUNBZ1ltbDBjeTVtYjNKRllXTm9LQ2hpYVhRc0lHa3BJRDArSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUVsbUlIZGxKM1psSUhKbFlXTm9aV1FnZEdobElHTnZiRzl5SUhCeWIzQnpMQ0JoY0hCbGJtUWdkRzhnWTI5c2IzSWdjM1J5YVc1blhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2FHRnpVbVZoWTJobFpFTnZiRzl5SUh4OElHTnZiRzl5TG5SbGMzUW9ZbWwwS1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHaGhjMUpsWVdOb1pXUkRiMnh2Y2lBOUlIUnlkV1U3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5c2IzSlFjbTl3SUNzOUlHSnBkRHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnUld4elpTQndjbTlqWlhOeklITm9ZV1J2ZHlCMllXeDFaVnh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCemNHeHBkRlpoYkhWbFczTm9ZV1J2ZDFSbGNtMXpXMmxkWFNBOUlHSnBkRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmU2s3WEc1Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnYzNCc2FYUkRiMnh2Y2xCeWIzQnpJRDBnWTI5c2IzSXVjM0JzYVhRb1kyOXNiM0pRY205d0tUdGNibHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdleUF1TGk1emNHeHBkRlpoYkhWbExDQnpjR3hwZEVOdmJHOXlVSEp2Y0hNZ2ZUdGNiaUFnSUNCOUxGeHVYRzRnSUNBZ1kyOXRZbWx1WlRvZ0tIWmhiSFZsY3lrZ1BUNGdZM0psWVhSbFJHVnNhVzFwZEdWa0tIWmhiSFZsY3l3Z2MyaGhaRzkzVjJsMGFHOTFkRU52Ykc5eVZHVnliWE1zSUNjZ0p5a2dLeUJqYjJ4dmNpNWpiMjFpYVc1bEtIWmhiSFZsY3lsY2JuMDdYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvc2hhZG93LmpzXG4gKiogbW9kdWxlIGlkID0gMzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG4vKlxuICAgIFNwbGl0IGEgdmFsdWUgaW50byBhIHZhbHVlL3VuaXQgb2JqZWN0XG4gICAgXG4gICAgICAgIFwiMjAwcHhcIiAtPiB7IHZhbHVlOiAyMDAsIHVuaXQ6IFwicHhcIiB9XG4gICAgICAgIFxuICAgIEBwYXJhbSBbc3RyaW5nXTogVmFsdWUgdG8gc3BsaXRcbiAgICBAcmV0dXJuIFtvYmplY3RdOiBPYmplY3Qgd2l0aCB2YWx1ZSBhbmQgdW5pdCBwcm9wc1xuKi9cbnZhciBmaW5kVmFsdWVBbmRVbml0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlLm1hdGNoKSB7XG4gICAgICAgIHZhciBzcGxpdFZhbHVlID0gdmFsdWUubWF0Y2goLygtP1xcZCpcXC4/XFxkKikoLiopLyk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiBwYXJzZUZsb2F0KHNwbGl0VmFsdWVbMV0pLFxuICAgICAgICAgICAgdW5pdDogc3BsaXRWYWx1ZVsyXVxuICAgICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB7IHZhbHVlOiB2YWx1ZSB9O1xuICAgIH1cbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICB0ZXN0OiBmdW5jdGlvbiAodW5wYXJzZWQpIHtcbiAgICAgICAgdmFyIF9maW5kVmFsdWVBbmRVbml0ID0gZmluZFZhbHVlQW5kVW5pdCh1bnBhcnNlZCk7XG5cbiAgICAgICAgdmFyIHZhbHVlID0gX2ZpbmRWYWx1ZUFuZFVuaXQudmFsdWU7XG5cbiAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMuaXNOdW0pKHZhbHVlKSAmJiAhaXNOYU4odmFsdWUpID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH0sXG5cbiAgICBwYXJzZTogZnVuY3Rpb24gKHVucGFyc2VkLCBwYXJlbnQpIHtcbiAgICAgICAgdmFyIF9maW5kVmFsdWVBbmRVbml0MiA9IGZpbmRWYWx1ZUFuZFVuaXQodW5wYXJzZWQpO1xuXG4gICAgICAgIHZhciB2YWx1ZSA9IF9maW5kVmFsdWVBbmRVbml0Mi52YWx1ZTtcbiAgICAgICAgdmFyIHVuaXQgPSBfZmluZFZhbHVlQW5kVW5pdDIudW5pdDtcblxuICAgICAgICBpZiAodW5pdCAmJiB1bml0ICE9PSB1bml0KSB7XG4gICAgICAgICAgICBwYXJlbnQudW5pdCA9IHVuaXQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSxcblxuICAgIHNlcmlhbGl6ZTogZnVuY3Rpb24gKHBhcnNlZCwgcGFyZW50KSB7XG4gICAgICAgIHJldHVybiBwYXJzZWQgKyAocGFyZW50LnVuaXQgfHwgJycpO1xuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTkxYm1sMExtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN096czdPenM3TzBGQlUwRXNTVUZCVFN4blFrRkJaMElzUjBGQlJ5eFZRVUZETEV0QlFVc3NSVUZCU3p0QlFVTm9ReXhSUVVGSkxFdEJRVXNzUTBGQlF5eExRVUZMTEVWQlFVVTdRVUZEWWl4WlFVRk5MRlZCUVZVc1IwRkJSeXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEcxQ1FVRnRRaXhEUVVGRExFTkJRVU03TzBGQlJYQkVMR1ZCUVU4N1FVRkRTQ3hwUWtGQlN5eEZRVUZGTEZWQlFWVXNRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRGFFTXNaMEpCUVVrc1JVRkJSeXhWUVVGVkxFTkJRVU1zUTBGQlF5eERRVUZETzFOQlEzWkNMRU5CUVVNN1MwRkRUQ3hOUVVGTk8wRkJRMGdzWlVGQlR5eEZRVUZGTEV0QlFVc3NSVUZCVEN4TFFVRkxMRVZCUVVVc1EwRkJRenRMUVVOd1FqdERRVU5LTEVOQlFVTTdPMnRDUVVWaE8wRkJRMWdzVVVGQlNTeEZRVUZGTEZWQlFWVXNVVUZCVVN4RlFVRkZPMmREUVVOS0xHZENRVUZuUWl4RFFVRkRMRkZCUVZFc1EwRkJRenM3V1VGQmNFTXNTMEZCU3l4eFFrRkJUQ3hMUVVGTE96dEJRVU5pTEdWQlFVOHNRVUZCUXl4WFFYcENVQ3hMUVVGTExFVkJlVUpSTEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZKTEVsQlFVa3NSMEZCUnl4TFFVRkxMRU5CUVVNN1MwRkRla1E3TzBGQlJVUXNVMEZCU3l4RlFVRkZMRlZCUVZVc1VVRkJVU3hGUVVGRkxFMUJRVTBzUlVGQlJUdHBRMEZEVUN4blFrRkJaMElzUTBGQlF5eFJRVUZSTEVOQlFVTTdPMWxCUVRGRExFdEJRVXNzYzBKQlFVd3NTMEZCU3p0WlFVRkZMRWxCUVVrc2MwSkJRVW9zU1VGQlNUczdRVUZGYmtJc1dVRkJTU3hKUVVGSkxFbEJRVWtzU1VGQlNTeExRVUZMTEVsQlFVa3NSVUZCUlR0QlFVTjJRaXhyUWtGQlRTeERRVUZETEVsQlFVa3NSMEZCUnl4SlFVRkpMRU5CUVVNN1UwRkRkRUk3TzBGQlJVUXNaVUZCVHl4TFFVRkxMRU5CUVVNN1MwRkRhRUk3TzBGQlJVUXNZVUZCVXl4RlFVRkZMRlZCUVVNc1RVRkJUU3hGUVVGRkxFMUJRVTA3WlVGQlN5eE5RVUZOTEVsQlFVa3NUVUZCVFN4RFFVRkRMRWxCUVVrc1NVRkJTU3hGUVVGRkxFTkJRVUVzUVVGQlF6dExRVUZCTzBOQlF6bEVJaXdpWm1sc1pTSTZJblZ1YVhRdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUlFaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZXlCcGMwNTFiU0I5SUdaeWIyMGdKeTR1TDJsdVl5OTFkR2xzY3ljN1hHNHZLbHh1SUNBZ0lGTndiR2wwSUdFZ2RtRnNkV1VnYVc1MGJ5QmhJSFpoYkhWbEwzVnVhWFFnYjJKcVpXTjBYRzRnSUNBZ1hHNGdJQ0FnSUNBZ0lGd2lNakF3Y0hoY0lpQXRQaUI3SUhaaGJIVmxPaUF5TURBc0lIVnVhWFE2SUZ3aWNIaGNJaUI5WEc0Z0lDQWdJQ0FnSUZ4dUlDQWdJRUJ3WVhKaGJTQmJjM1J5YVc1blhUb2dWbUZzZFdVZ2RHOGdjM0JzYVhSY2JpQWdJQ0JBY21WMGRYSnVJRnR2WW1wbFkzUmRPaUJQWW1wbFkzUWdkMmwwYUNCMllXeDFaU0JoYm1RZ2RXNXBkQ0J3Y205d2MxeHVLaTljYm1OdmJuTjBJR1pwYm1SV1lXeDFaVUZ1WkZWdWFYUWdQU0FvZG1Gc2RXVXBJRDArSUh0Y2JpQWdJQ0JwWmlBb2RtRnNkV1V1YldGMFkyZ3BJSHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdjM0JzYVhSV1lXeDFaU0E5SUhaaGJIVmxMbTFoZEdOb0tDOG9MVDljWEdRcVhGd3VQMXhjWkNvcEtDNHFLUzhwTzF4dVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IyWVd4MVpUb2djR0Z5YzJWR2JHOWhkQ2h6Y0d4cGRGWmhiSFZsV3pGZEtTeGNiaUFnSUNBZ0lDQWdJQ0FnSUhWdWFYUTZJQ0J6Y0d4cGRGWmhiSFZsV3pKZFhHNGdJQ0FnSUNBZ0lIMDdYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhzZ2RtRnNkV1VnZlR0Y2JpQWdJQ0I5WEc1OU8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQjdYRzRnSUNBZ2RHVnpkRG9nWm5WdVkzUnBiMjRnS0hWdWNHRnljMlZrS1NCN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUhzZ2RtRnNkV1VnZlNBOUlHWnBibVJXWVd4MVpVRnVaRlZ1YVhRb2RXNXdZWEp6WldRcE8xeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z0tHbHpUblZ0S0haaGJIVmxLU0FtSmlBaGFYTk9ZVTRvZG1Gc2RXVXBLU0EvSUhSeWRXVWdPaUJtWVd4elpUdGNiaUFnSUNCOUxGeHVYRzRnSUNBZ2NHRnljMlU2SUdaMWJtTjBhVzl1SUNoMWJuQmhjbk5sWkN3Z2NHRnlaVzUwS1NCN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUhzZ2RtRnNkV1VzSUhWdWFYUWdmU0E5SUdacGJtUldZV3gxWlVGdVpGVnVhWFFvZFc1d1lYSnpaV1FwTzF4dVhHNGdJQ0FnSUNBZ0lHbG1JQ2gxYm1sMElDWW1JSFZ1YVhRZ0lUMDlJSFZ1YVhRcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhCaGNtVnVkQzUxYm1sMElEMGdkVzVwZER0Y2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjJZV3gxWlR0Y2JpQWdJQ0I5TEZ4dVhHNGdJQ0FnYzJWeWFXRnNhWHBsT2lBb2NHRnljMlZrTENCd1lYSmxiblFwSUQwK0lIQmhjbk5sWkNBcklDaHdZWEpsYm5RdWRXNXBkQ0I4ZkNBbkp5bGNibjA3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3VuaXQuanNcbiAqKiBtb2R1bGUgaWQgPSAzM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5jaXJjdWxhck1vdGlvbiA9IGV4cG9ydHMuY3JlYXRlTWFwcGVyID0gdW5kZWZpbmVkO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpO1xuXG52YXIgY3JlYXRlTWFwcGVyID0gZXhwb3J0cy5jcmVhdGVNYXBwZXIgPSBmdW5jdGlvbiAoZnJvbSwgdG8pIHtcbiAgICB2YXIgbWFwTGVuZ3RoID0gZnJvbS5sZW5ndGg7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbWFwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA8IGZyb21baV0gfHwgaSA9PT0gbWFwTGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgwLCBfY2FsYy5nZXRWYWx1ZUZyb21Qcm9ncmVzcykoKDAsIF9jYWxjLnJlc3RyaWN0KSgoMCwgX2NhbGMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUpKHZhbHVlLCBmcm9tW2kgLSAxXSwgZnJvbVtpXSksIDAsIDEpLCB0b1tpIC0gMV0sIHRvW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG59O1xuXG52YXIgY2lyY3VsYXJNb3Rpb24gPSBleHBvcnRzLmNpcmN1bGFyTW90aW9uID0gZnVuY3Rpb24gKHYsIGtleSwgX3JlZikge1xuICAgIHZhciB2YWx1ZXMgPSBfcmVmLnZhbHVlcztcbiAgICByZXR1cm4gKDAsIF9jYWxjLnBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UpKHtcbiAgICAgICAgeDogdmFsdWVzLm9yaWdpblguY3VycmVudCxcbiAgICAgICAgeTogdmFsdWVzLm9yaWdpblkuY3VycmVudFxuICAgIH0sIHZhbHVlcy5hbmdsZS5jdXJyZW50LCB2YWx1ZXMuZGlzdGFuY2UuY3VycmVudClba2V5XTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12ZEhKaGJuTm1iM0p0WlhKekxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN1FVRkZUeXhKUVVGTkxGbEJRVmtzVjBGQldpeFpRVUZaTEVkQlFVY3NWVUZCUXl4SlFVRkpMRVZCUVVVc1JVRkJSU3hGUVVGTE8wRkJRM1JETEZGQlFVMHNVMEZCVXl4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU03TzBGQlJUbENMRmRCUVU4c1ZVRkJReXhMUVVGTExFVkJRVXM3UVVGRFpDeGhRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzVTBGQlV5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMEZCUTJoRExHZENRVUZKTEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEZOQlFWTXNSVUZCUlR0QlFVTndReXgxUWtGQlR5eFZRVkpSTEc5Q1FVRnZRaXhGUVZGUUxGVkJVbE1zVVVGQlVTeEZRVkZTTEZWQlVqVkRMRzlDUVVGdlFpeEZRVkUyUXl4TFFVRkxMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dGhRVU53U0R0VFFVTktPMHRCUTBvc1EwRkJRenREUVVOTUxFTkJRVU03TzBGQlJVc3NTVUZCVFN4alFVRmpMRmRCUVdRc1kwRkJZeXhIUVVGSExGVkJRVU1zUTBGQlF5eEZRVUZGTEVkQlFVYzdVVUZCU1N4TlFVRk5MRkZCUVU0c1RVRkJUVHRYUVVNelF5eFZRV1l5UkN4NVFrRkJlVUlzUlVGbE1VUTdRVUZEZEVJc1UwRkJReXhGUVVGRkxFMUJRVTBzUTBGQlF5eFBRVUZQTEVOQlFVTXNUMEZCVHp0QlFVTjZRaXhUUVVGRExFVkJRVVVzVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4UFFVRlBPMHRCUXpWQ0xFVkJRVVVzVFVGQlRTeERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRVZCUVVVc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNN1EwRkJRU3hEUVVGRElpd2labWxzWlNJNkluUnlZVzV6Wm05eWJXVnljeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEZCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQjdJR2RsZEZCeWIyZHlaWE56Um5KdmJWWmhiSFZsTENCblpYUldZV3gxWlVaeWIyMVFjbTluY21WemN5d2djbVZ6ZEhKcFkzUXNJSEJ2YVc1MFJuSnZiVUZ1WjJ4bFFXNWtSR2x6ZEdGdVkyVWdmU0JtY205dElDY3VMaTlwYm1NdlkyRnNZeWM3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JqY21WaGRHVk5ZWEJ3WlhJZ1BTQW9abkp2YlN3Z2RHOHBJRDArSUh0Y2JpQWdJQ0JqYjI1emRDQnRZWEJNWlc1bmRHZ2dQU0JtY205dExteGxibWQwYUR0Y2JseHVJQ0FnSUhKbGRIVnliaUFvZG1Gc2RXVXBJRDArSUh0Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREU3SUdrZ1BDQnRZWEJNWlc1bmRHZzdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIWmhiSFZsSUR3Z1puSnZiVnRwWFNCOGZDQnBJRDA5UFNCdFlYQk1aVzVuZEdncElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z1oyVjBWbUZzZFdWR2NtOXRVSEp2WjNKbGMzTW9jbVZ6ZEhKcFkzUW9aMlYwVUhKdlozSmxjM05HY205dFZtRnNkV1VvZG1Gc2RXVXNJR1p5YjIxYmFTQXRJREZkTENCbWNtOXRXMmxkS1N3Z01Dd2dNU2tzSUhSdlcya2dMU0F4WFN3Z2RHOWJhVjBwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVHRjYm4wN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCamFYSmpkV3hoY2sxdmRHbHZiaUE5SUNoMkxDQnJaWGtzSUhzZ2RtRnNkV1Z6SUgwcElEMCtJRnh1SUNBZ0lIQnZhVzUwUm5KdmJVRnVaMnhsUVc1a1JHbHpkR0Z1WTJVb2UxeHVJQ0FnSUNBZ0lDQjRPaUIyWVd4MVpYTXViM0pwWjJsdVdDNWpkWEp5Wlc1MExGeHVJQ0FnSUNBZ0lDQjVPaUIyWVd4MVpYTXViM0pwWjJsdVdTNWpkWEp5Wlc1MElGeHVJQ0FnSUgwc0lIWmhiSFZsY3k1aGJtZHNaUzVqZFhKeVpXNTBMQ0IyWVd4MVpYTXVaR2x6ZEdGdVkyVXVZM1Z5Y21WdWRDbGJhMlY1WFR0Y2JseHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvdHJhbnNmb3JtZXJzLmpzXG4gKiogbW9kdWxlIGlkID0gMzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi4vLi4vaW5jL2NhbGMnKTtcblxudmFyIEJMRU5EX0FDQ1VSQUNZID0gMTA7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvdXRBY3Rpb24sIGluQWN0aW9uLCBrZXkpIHtcbiAgICB2YXIgb3V0VmFsdWUgPSBvdXRBY3Rpb24udmFsdWVzW2tleV07XG5cbiAgICBpZiAob3V0QWN0aW9uLmVsYXBzZWQgPT09IHVuZGVmaW5lZCB8fCAhb3V0VmFsdWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBpblZhbHVlID0gaW5BY3Rpb24udmFsdWVzW2tleV07XG4gICAgdmFyIG91dFRvdGFsRHVyYXRpb24gPSBvdXRWYWx1ZS5kZWxheSArIG91dFZhbHVlLmR1cmF0aW9uO1xuICAgIHZhciB0aW1lVW50aWxPdXRFbmQgPSBvdXRUb3RhbER1cmF0aW9uIC0gb3V0QWN0aW9uLmVsYXBzZWQ7XG4gICAgdmFyIGluUG9zaXRpb25BdE91dEVuZCA9ICgwLCBfY2FsYy5lYXNlKSgoMCwgX2NhbGMucmVzdHJpY3QpKCgwLCBfY2FsYy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSkodGltZVVudGlsT3V0RW5kLCAwLCBpblZhbHVlLmRlbGF5ICsgaW5WYWx1ZS5kdXJhdGlvbiksIDAsIDEpLCBpblZhbHVlLmZyb20sIGluVmFsdWUudG8sIGluVmFsdWUuZWFzZSk7XG4gICAgdmFyIGluQmlnZ2VyVGhhbk91dEF0U3RhcnQgPSBpblZhbHVlLmZyb20gPiBvdXRWYWx1ZS5jdXJyZW50O1xuICAgIHZhciBpbkJpZ2dlclRoYW5PdXRBdEVuZCA9IGluUG9zaXRpb25BdE91dEVuZCA+IG91dFZhbHVlLnRvO1xuICAgIHZhciB0d2VlbnNJbnRlcnNlY3QgPSBpbkJpZ2dlclRoYW5PdXRBdFN0YXJ0ICE9PSBpbkJpZ2dlclRoYW5PdXRBdEVuZDtcblxuICAgIHZhciBibGVuZEN1cnZlID0gW1swLCBvdXRWYWx1ZS5jdXJyZW50XSwgW3RpbWVVbnRpbE91dEVuZCwgaW5Qb3NpdGlvbkF0T3V0RW5kXV07XG5cbiAgICAvLyBJZiB0d2VlbnMgaW50ZXJzZWN0LCByZXNvbHZlIHR3ZWVucyBhdCBhIHJlc29sdXRpb24gdG8gZmluZCBleGFjdGx5IHdoZXJlXG4gICAgaWYgKHR3ZWVuc0ludGVyc2VjdCkge1xuICAgICAgICB2YXIgdGltZVN0ZXBUb1Rlc3QgPSB0aW1lVW50aWxPdXRFbmQgLyBCTEVORF9BQ0NVUkFDWTtcbiAgICAgICAgdmFyIGZvdW5kUDEgPSBmYWxzZTtcbiAgICAgICAgdmFyIGZvdW5kUDIgPSBmYWxzZTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8PSBCTEVORF9BQ0NVUkFDWTsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdGltZVN0ZXAgPSBpICogdGltZVN0ZXBUb1Rlc3Q7XG4gICAgICAgICAgICB2YXIgb3V0QXRUaW1lID0gKDAsIF9jYWxjLmVhc2UpKCgwLCBfY2FsYy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSkob3V0QWN0aW9uLmVsYXBzZWQgKyB0aW1lU3RlcCwgb3V0VmFsdWUuZGVsYXksIG91dFZhbHVlLmR1cmF0aW9uKSwgb3V0VmFsdWUuZnJvbSwgb3V0VmFsdWUudG8sIG91dFZhbHVlLmVhc2UpO1xuICAgICAgICAgICAgdmFyIGluQXRUaW1lID0gKDAsIF9jYWxjLmVhc2UpKCgwLCBfY2FsYy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSkoaW5BY3Rpb24uZWxhcHNlZCArIHRpbWVTdGVwLCBpblZhbHVlLmRlbGF5LCBpblZhbHVlLmR1cmF0aW9uKSwgaW5WYWx1ZS5mcm9tLCBpblZhbHVlLnRvLCBpblZhbHVlLmVhc2UpO1xuXG4gICAgICAgICAgICBpZiAoIWZvdW5kUDEgJiYgKGluQmlnZ2VyVGhhbk91dEF0U3RhcnQgJiYgaW5BdFRpbWUgPCBvdXRBdFRpbWUgfHwgIWluQmlnZ2VyVGhhbk91dEF0U3RhcnQgJiYgaW5BdFRpbWUgPiBvdXRBdFRpbWUpKSB7XG4gICAgICAgICAgICAgICAgYmxlbmRDdXJ2ZS5zcGxpY2UoMSwgMCwgW3RpbWVTdGVwLCBpbkF0VGltZV0pO1xuICAgICAgICAgICAgICAgIGZvdW5kUDEgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZm91bmRQMSAmJiAoaW5CaWdnZXJUaGFuT3V0QXRTdGFydCAmJiBpbkF0VGltZSA8IG91dFZhbHVlLmN1cnJlbnQgfHwgIWluQmlnZ2VyVGhhbk91dEF0U3RhcnQgJiYgaW5BdFRpbWUgPiBvdXRWYWx1ZS5jdXJyZW50KSkge1xuICAgICAgICAgICAgICAgIGJsZW5kQ3VydmVbMl0gPSBbdGltZVN0ZXAsIGluQXRUaW1lXTtcbiAgICAgICAgICAgICAgICBmb3VuZFAyID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGZvdW5kUDIpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChibGVuZEN1cnZlLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAvLyBQYXNzIGJldHdlZW4gdHdlZW5zIHVzaW5nIGluY29taW5nIGVhc2luZyBpZiBqdXN0IHR3byBwb2ludHNcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBibGVuZFByb2dyZXNzID0gKDAsIF9jYWxjLnJlc3RyaWN0KSgoMCwgX2NhbGMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUpKGluQWN0aW9uLmVsYXBzZWQsIGJsZW5kQ3VydmVbMF1bMF0sIGJsZW5kQ3VydmVbMV1bMF0pLCAwLCAxKTtcblxuICAgICAgICAgICAgaWYgKGJsZW5kUHJvZ3Jlc3MgPT09IDEpIHtcbiAgICAgICAgICAgICAgICBpbkFjdGlvbi5ibGVuZEN1cnZlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gKDAsIF9jYWxjLmVhc2UpKGJsZW5kUHJvZ3Jlc3MsIG91dFZhbHVlLmN1cnJlbnQsIGluVmFsdWUuY3VycmVudCwgaW5WYWx1ZS5lYXNlKTtcbiAgICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBQYXNzIGJldHdlZW4gdHdlZW5zIHVzaW5nIGJlemllciBpbnRlcnBvbGF0aW9uXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYmxlbmRQcm9ncmVzcyA9ICgwLCBfY2FsYy5yZXN0cmljdCkoKDAsIF9jYWxjLmdldFByb2dyZXNzRnJvbVZhbHVlKShpbkFjdGlvbi5lbGFwc2VkLCBibGVuZEN1cnZlWzBdWzBdLCBibGVuZEN1cnZlWzJdWzBdKSwgMCwgMSk7XG4gICAgICAgICAgICB2YXIgYVAgPSAoMCwgX2NhbGMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MpKGJsZW5kUHJvZ3Jlc3MsIGJsZW5kQ3VydmVbMF1bMV0sIGJsZW5kQ3VydmVbMV1bMV0pO1xuICAgICAgICAgICAgdmFyIGJQID0gKDAsIF9jYWxjLmdldFZhbHVlRnJvbVByb2dyZXNzKShibGVuZFByb2dyZXNzLCBibGVuZEN1cnZlWzFdWzFdLCBibGVuZEN1cnZlWzJdWzFdKTtcblxuICAgICAgICAgICAgaWYgKGJsZW5kUHJvZ3Jlc3MgPT09IDEpIHtcbiAgICAgICAgICAgICAgICBpbkFjdGlvbi5ibGVuZEN1cnZlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHJldHVybiBpblZhbHVlLmN1cnJlbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiAoMCwgX2NhbGMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MpKGJsZW5kUHJvZ3Jlc3MsIGFQLCBiUCk7XG4gICAgICAgIH07XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnZjaTlwYm1NdloyVnVaWEpoZEdVdFlteGxibVF0WTNWeWRtVXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN08wRkJSVUVzU1VGQlRTeGpRVUZqTEVkQlFVY3NSVUZCUlN4RFFVRkRPenRyUWtGRldDeFZRVUZETEZOQlFWTXNSVUZCUlN4UlFVRlJMRVZCUVVVc1IwRkJSeXhGUVVGTE8wRkJRM3BETEZGQlFVMHNVVUZCVVN4SFFVRkhMRk5CUVZNc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdPMEZCUlhaRExGRkJRVWtzVTBGQlV5eERRVUZETEU5QlFVOHNTMEZCU3l4VFFVRlRMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVU3UVVGRE9VTXNaVUZCVHp0TFFVTldPenRCUVVWRUxGRkJRVTBzVDBGQlR5eEhRVUZITEZGQlFWRXNRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03UVVGRGNrTXNVVUZCVFN4blFrRkJaMElzUjBGQlJ5eFJRVUZSTEVOQlFVTXNTMEZCU3l4SFFVRkhMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU03UVVGRE5VUXNVVUZCVFN4bFFVRmxMRWRCUVVjc1owSkJRV2RDTEVkQlFVY3NVMEZCVXl4RFFVRkRMRTlCUVU4c1EwRkJRenRCUVVNM1JDeFJRVUZOTEd0Q1FVRnJRaXhIUVVGSExGVkJaSE5DTEVsQlFVa3NSVUZqY2tJc1ZVRmtkVUlzVVVGQlVTeEZRV04wUWl4VlFXUndReXh2UWtGQmIwSXNSVUZqY1VNc1pVRkJaU3hGUVVGRkxFTkJRVU1zUlVGQlJTeFBRVUZQTEVOQlFVTXNTMEZCU3l4SFFVRkhMRTlCUVU4c1EwRkJReXhSUVVGUkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1QwRkJUeXhEUVVGRExFbEJRVWtzUlVGQlJTeFBRVUZQTEVOQlFVTXNSVUZCUlN4RlFVRkZMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dEJRVU53U3l4UlFVRk5MSE5DUVVGelFpeEhRVUZITEU5QlFVOHNRMEZCUXl4SlFVRkpMRWRCUVVjc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF6dEJRVU12UkN4UlFVRk5MRzlDUVVGdlFpeEhRVUZITEd0Q1FVRnJRaXhIUVVGSExGRkJRVkVzUTBGQlF5eEZRVUZGTEVOQlFVTTdRVUZET1VRc1VVRkJUU3hsUVVGbExFZEJRVWNzYzBKQlFYTkNMRXRCUVVzc2IwSkJRVzlDTEVOQlFVTTdPMEZCUlhoRkxGRkJRVTBzVlVGQlZTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eEZRVUZGTEVOQlFVTXNaVUZCWlN4RlFVRkZMR3RDUVVGclFpeERRVUZETEVOQlFVTTdPenRCUVVGRExFRkJSMnhHTEZGQlFVa3NaVUZCWlN4RlFVRkZPMEZCUTJwQ0xGbEJRVTBzWTBGQll5eEhRVUZITEdWQlFXVXNSMEZCUnl4alFVRmpMRU5CUVVNN1FVRkRlRVFzV1VGQlNTeFBRVUZQTEVkQlFVY3NTMEZCU3l4RFFVRkRPMEZCUTNCQ0xGbEJRVWtzVDBGQlR5eEhRVUZITEV0QlFVc3NRMEZCUXpzN1FVRkZjRUlzWVVGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxHTkJRV01zUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0QlFVTjBReXhuUWtGQlRTeFJRVUZSTEVkQlFVY3NRMEZCUXl4SFFVRkhMR05CUVdNc1EwRkJRenRCUVVOd1F5eG5Ra0ZCVFN4VFFVRlRMRWRCUVVjc1ZVRTNRblZDTEVsQlFVa3NSVUUyUW5SQ0xGVkJOMEl4UWl4dlFrRkJiMElzUlVFMlFqSkNMRk5CUVZNc1EwRkJReXhQUVVGUExFZEJRVWNzVVVGQlVTeEZRVUZGTEZGQlFWRXNRMEZCUXl4TFFVRkxMRVZCUVVVc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eEZRVUZGTEZGQlFWRXNRMEZCUXl4SlFVRkpMRVZCUVVVc1VVRkJVU3hEUVVGRExFVkJRVVVzUlVGQlJTeFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1FVRkRla29zWjBKQlFVMHNVVUZCVVN4SFFVRkhMRlZCT1VKM1FpeEpRVUZKTEVWQk9FSjJRaXhWUVRsQ2VrSXNiMEpCUVc5Q0xFVkJPRUl3UWl4UlFVRlJMRU5CUVVNc1QwRkJUeXhIUVVGSExGRkJRVkVzUlVGQlJTeFBRVUZQTEVOQlFVTXNTMEZCU3l4RlFVRkZMRTlCUVU4c1EwRkJReXhSUVVGUkxFTkJRVU1zUlVGQlJTeFBRVUZQTEVOQlFVTXNTVUZCU1N4RlFVRkZMRTlCUVU4c1EwRkJReXhGUVVGRkxFVkJRVVVzVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPenRCUVVWc1NpeG5Ra0ZCU1N4RFFVRkRMRTlCUVU4c1MwRkJTeXhCUVVGRExITkNRVUZ6UWl4SlFVRkpMRkZCUVZFc1IwRkJSeXhUUVVGVExFbEJRVTBzUTBGQlF5eHpRa0ZCYzBJc1NVRkJTU3hSUVVGUkxFZEJRVWNzVTBGQlV5eERRVUZETEVGQlFVTXNSVUZCUlR0QlFVTnlTQ3d3UWtGQlZTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zVVVGQlVTeEZRVUZGTEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRkRPVU1zZFVKQlFVOHNSMEZCUnl4SlFVRkpMRU5CUVVNN1lVRkRiRUk3TzBGQlJVUXNaMEpCUVVrc1QwRkJUeXhMUVVGTExFRkJRVU1zYzBKQlFYTkNMRWxCUVVrc1VVRkJVU3hIUVVGSExGRkJRVkVzUTBGQlF5eFBRVUZQTEVsQlFVMHNRMEZCUXl4elFrRkJjMElzU1VGQlNTeFJRVUZSTEVkQlFVY3NVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhCUVVGRExFVkJRVVU3UVVGRGJFa3NNRUpCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEZGQlFWRXNSVUZCUlN4UlFVRlJMRU5CUVVNc1EwRkJRenRCUVVOeVF5eDFRa0ZCVHl4SFFVRkhMRWxCUVVrc1EwRkJRenRoUVVOc1FqczdRVUZGUkN4blFrRkJTU3hQUVVGUExFVkJRVVU3UVVGRFZDeHpRa0ZCVFR0aFFVTlVPMU5CUTBvN1MwRkRTanM3UVVGRlJDeFJRVUZKTEZWQlFWVXNRMEZCUXl4TlFVRk5MRXRCUVVzc1EwRkJReXhGUVVGRk96dEJRVVY2UWl4bFFVRlBMRmxCUVUwN1FVRkRWQ3huUWtGQlRTeGhRVUZoTEVkQlFVY3NWVUZ1UkhsQ0xGRkJRVkVzUlVGdFJIaENMRlZCYmtSc1F5eHZRa0ZCYjBJc1JVRnRSRzFETEZGQlFWRXNRMEZCUXl4UFFVRlBMRVZCUVVVc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6czdRVUZGYWtnc1owSkJRVWtzWVVGQllTeExRVUZMTEVOQlFVTXNSVUZCUlR0QlFVTnlRaXgzUWtGQlVTeERRVUZETEZWQlFWVXNSMEZCUnl4VFFVRlRMRU5CUVVNN1lVRkRia003TzBGQlJVUXNiVUpCUVU4c1ZVRjZSR3RETEVsQlFVa3NSVUY1UkdwRExHRkJRV0VzUlVGQlJTeFJRVUZSTEVOQlFVTXNUMEZCVHl4RlFVRkZMRTlCUVU4c1EwRkJReXhQUVVGUExFVkJRVVVzVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMU5CUXk5RkxFTkJRVU03UzBGRFRDeE5RVUZOT3p0QlFVVklMR1ZCUVU4c1dVRkJUVHRCUVVOVUxHZENRVUZOTEdGQlFXRXNSMEZCUnl4VlFUbEVlVUlzVVVGQlVTeEZRVGhFZUVJc1ZVRTVSR3hETEc5Q1FVRnZRaXhGUVRoRWJVTXNVVUZCVVN4RFFVRkRMRTlCUVU4c1JVRkJSU3hWUVVGVkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzBGQlEycElMR2RDUVVGTkxFVkJRVVVzUjBGQlJ5eFZRUzlFVVN4dlFrRkJiMElzUlVFclJGQXNZVUZCWVN4RlFVRkZMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4VlFVRlZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0QlFVTnVSaXhuUWtGQlRTeEZRVUZGTEVkQlFVY3NWVUZvUlZFc2IwSkJRVzlDTEVWQlowVlFMR0ZCUVdFc1JVRkJSU3hWUVVGVkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN08wRkJSVzVHTEdkQ1FVRkpMR0ZCUVdFc1MwRkJTeXhEUVVGRExFVkJRVVU3UVVGRGNrSXNkMEpCUVZFc1EwRkJReXhWUVVGVkxFZEJRVWNzVTBGQlV5eERRVUZETzBGQlEyaERMSFZDUVVGUExFOUJRVThzUTBGQlF5eFBRVUZQTEVOQlFVTTdZVUZETVVJN08wRkJSVVFzYlVKQlFVOHNWVUYyUlZrc2IwSkJRVzlDTEVWQmRVVllMR0ZCUVdFc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTTdVMEZEZEVRc1EwRkJRenRMUVVOTU8wTkJRMG9pTENKbWFXeGxJam9pWjJWdVpYSmhkR1V0WW14bGJtUXRZM1Z5ZG1VdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUlFaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZXlCblpYUlFjbTluY21WemMwWnliMjFXWVd4MVpTd2daMlYwVm1Gc2RXVkdjbTl0VUhKdlozSmxjM01zSUdWaGMyVXNJSEpsYzNSeWFXTjBJSDBnWm5KdmJTQW5MaTR2TGk0dmFXNWpMMk5oYkdNbk8xeHVYRzVqYjI1emRDQkNURVZPUkY5QlEwTlZVa0ZEV1NBOUlERXdPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0FvYjNWMFFXTjBhVzl1TENCcGJrRmpkR2x2Yml3Z2EyVjVLU0E5UGlCN1hHNGdJQ0FnWTI5dWMzUWdiM1YwVm1Gc2RXVWdQU0J2ZFhSQlkzUnBiMjR1ZG1Gc2RXVnpXMnRsZVYwN1hHNWNiaUFnSUNCcFppQW9iM1YwUVdOMGFXOXVMbVZzWVhCelpXUWdQVDA5SUhWdVpHVm1hVzVsWkNCOGZDQWhiM1YwVm1Gc2RXVXBJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHTnZibk4wSUdsdVZtRnNkV1VnUFNCcGJrRmpkR2x2Ymk1MllXeDFaWE5iYTJWNVhUdGNiaUFnSUNCamIyNXpkQ0J2ZFhSVWIzUmhiRVIxY21GMGFXOXVJRDBnYjNWMFZtRnNkV1V1WkdWc1lYa2dLeUJ2ZFhSV1lXeDFaUzVrZFhKaGRHbHZianRjYmlBZ0lDQmpiMjV6ZENCMGFXMWxWVzUwYVd4UGRYUkZibVFnUFNCdmRYUlViM1JoYkVSMWNtRjBhVzl1SUMwZ2IzVjBRV04wYVc5dUxtVnNZWEJ6WldRN1hHNGdJQ0FnWTI5dWMzUWdhVzVRYjNOcGRHbHZia0YwVDNWMFJXNWtJRDBnWldGelpTaHlaWE4wY21samRDaG5aWFJRY205bmNtVnpjMFp5YjIxV1lXeDFaU2gwYVcxbFZXNTBhV3hQZFhSRmJtUXNJREFzSUdsdVZtRnNkV1V1WkdWc1lYa2dLeUJwYmxaaGJIVmxMbVIxY21GMGFXOXVLU3dnTUN3Z01Ta3NJR2x1Vm1Gc2RXVXVabkp2YlN3Z2FXNVdZV3gxWlM1MGJ5d2dhVzVXWVd4MVpTNWxZWE5sS1R0Y2JpQWdJQ0JqYjI1emRDQnBia0pwWjJkbGNsUm9ZVzVQZFhSQmRGTjBZWEowSUQwZ2FXNVdZV3gxWlM1bWNtOXRJRDRnYjNWMFZtRnNkV1V1WTNWeWNtVnVkRHRjYmlBZ0lDQmpiMjV6ZENCcGJrSnBaMmRsY2xSb1lXNVBkWFJCZEVWdVpDQTlJR2x1VUc5emFYUnBiMjVCZEU5MWRFVnVaQ0ErSUc5MWRGWmhiSFZsTG5Sdk8xeHVJQ0FnSUdOdmJuTjBJSFIzWldWdWMwbHVkR1Z5YzJWamRDQTlJR2x1UW1sbloyVnlWR2hoYms5MWRFRjBVM1JoY25RZ0lUMDlJR2x1UW1sbloyVnlWR2hoYms5MWRFRjBSVzVrTzF4dVhHNGdJQ0FnWTI5dWMzUWdZbXhsYm1SRGRYSjJaU0E5SUZ0Yk1Dd2diM1YwVm1Gc2RXVXVZM1Z5Y21WdWRGMHNJRnQwYVcxbFZXNTBhV3hQZFhSRmJtUXNJR2x1VUc5emFYUnBiMjVCZEU5MWRFVnVaRjFkTzF4dVhHNGdJQ0FnTHk4Z1NXWWdkSGRsWlc1eklHbHVkR1Z5YzJWamRDd2djbVZ6YjJ4MlpTQjBkMlZsYm5NZ1lYUWdZU0J5WlhOdmJIVjBhVzl1SUhSdklHWnBibVFnWlhoaFkzUnNlU0IzYUdWeVpWeHVJQ0FnSUdsbUlDaDBkMlZsYm5OSmJuUmxjbk5sWTNRcElIdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2RHbHRaVk4wWlhCVWIxUmxjM1FnUFNCMGFXMWxWVzUwYVd4UGRYUkZibVFnTHlCQ1RFVk9SRjlCUTBOVlVrRkRXVHRjYmlBZ0lDQWdJQ0FnYkdWMElHWnZkVzVrVURFZ1BTQm1ZV3h6WlR0Y2JpQWdJQ0FnSUNBZ2JHVjBJR1p2ZFc1a1VESWdQU0JtWVd4elpUdGNibHh1SUNBZ0lDQWdJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4UFNCQ1RFVk9SRjlCUTBOVlVrRkRXVHNnYVNzcktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0IwYVcxbFUzUmxjQ0E5SUdrZ0tpQjBhVzFsVTNSbGNGUnZWR1Z6ZER0Y2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElHOTFkRUYwVkdsdFpTQTlJR1ZoYzJVb1oyVjBVSEp2WjNKbGMzTkdjbTl0Vm1Gc2RXVW9iM1YwUVdOMGFXOXVMbVZzWVhCelpXUWdLeUIwYVcxbFUzUmxjQ3dnYjNWMFZtRnNkV1V1WkdWc1lYa3NJRzkxZEZaaGJIVmxMbVIxY21GMGFXOXVLU3dnYjNWMFZtRnNkV1V1Wm5KdmJTd2diM1YwVm1Gc2RXVXVkRzhzSUc5MWRGWmhiSFZsTG1WaGMyVXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnYVc1QmRGUnBiV1VnUFNCbFlYTmxLR2RsZEZCeWIyZHlaWE56Um5KdmJWWmhiSFZsS0dsdVFXTjBhVzl1TG1Wc1lYQnpaV1FnS3lCMGFXMWxVM1JsY0N3Z2FXNVdZV3gxWlM1a1pXeGhlU3dnYVc1V1lXeDFaUzVrZFhKaGRHbHZiaWtzSUdsdVZtRnNkV1V1Wm5KdmJTd2dhVzVXWVd4MVpTNTBieXdnYVc1V1lXeDFaUzVsWVhObEtUdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLQ0ZtYjNWdVpGQXhJQ1ltSUNnb2FXNUNhV2RuWlhKVWFHRnVUM1YwUVhSVGRHRnlkQ0FtSmlCcGJrRjBWR2x0WlNBOElHOTFkRUYwVkdsdFpTa2dmSHdnS0NGcGJrSnBaMmRsY2xSb1lXNVBkWFJCZEZOMFlYSjBJQ1ltSUdsdVFYUlVhVzFsSUQ0Z2IzVjBRWFJVYVcxbEtTa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JpYkdWdVpFTjFjblpsTG5Od2JHbGpaU2d4TENBd0xDQmJkR2x0WlZOMFpYQXNJR2x1UVhSVWFXMWxYU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWm05MWJtUlFNU0E5SUhSeWRXVTdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaG1iM1Z1WkZBeElDWW1JQ2dvYVc1Q2FXZG5aWEpVYUdGdVQzVjBRWFJUZEdGeWRDQW1KaUJwYmtGMFZHbHRaU0E4SUc5MWRGWmhiSFZsTG1OMWNuSmxiblFwSUh4OElDZ2hhVzVDYVdkblpYSlVhR0Z1VDNWMFFYUlRkR0Z5ZENBbUppQnBia0YwVkdsdFpTQStJRzkxZEZaaGJIVmxMbU4xY25KbGJuUXBLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdKc1pXNWtRM1Z5ZG1WYk1sMGdQU0JiZEdsdFpWTjBaWEFzSUdsdVFYUlVhVzFsWFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCbWIzVnVaRkF5SUQwZ2RISjFaVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLR1p2ZFc1a1VESXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JpY21WaGF6dGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JseHVJQ0FnSUdsbUlDaGliR1Z1WkVOMWNuWmxMbXhsYm1kMGFDQTlQVDBnTWlrZ2UxeHVJQ0FnSUNBZ0lDQXZMeUJRWVhOeklHSmxkSGRsWlc0Z2RIZGxaVzV6SUhWemFXNW5JR2x1WTI5dGFXNW5JR1ZoYzJsdVp5QnBaaUJxZFhOMElIUjNieUJ3YjJsdWRITmNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlDZ3BJRDArSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElHSnNaVzVrVUhKdlozSmxjM01nUFNCeVpYTjBjbWxqZENoblpYUlFjbTluY21WemMwWnliMjFXWVd4MVpTaHBia0ZqZEdsdmJpNWxiR0Z3YzJWa0xDQmliR1Z1WkVOMWNuWmxXekJkV3pCZExDQmliR1Z1WkVOMWNuWmxXekZkV3pCZEtTd2dNQ3dnTVNrN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaGliR1Z1WkZCeWIyZHlaWE56SUQwOVBTQXhLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVc1QlkzUnBiMjR1WW14bGJtUkRkWEoyWlNBOUlIVnVaR1ZtYVc1bFpEdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJR1ZoYzJVb1lteGxibVJRY205bmNtVnpjeXdnYjNWMFZtRnNkV1V1WTNWeWNtVnVkQ3dnYVc1V1lXeDFaUzVqZFhKeVpXNTBMQ0JwYmxaaGJIVmxMbVZoYzJVcE8xeHVJQ0FnSUNBZ0lDQjlPMXh1SUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDOHZJRkJoYzNNZ1ltVjBkMlZsYmlCMGQyVmxibk1nZFhOcGJtY2dZbVY2YVdWeUlHbHVkR1Z5Y0c5c1lYUnBiMjVjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJQ2dwSUQwK0lIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJR0pzWlc1a1VISnZaM0psYzNNZ1BTQnlaWE4wY21samRDaG5aWFJRY205bmNtVnpjMFp5YjIxV1lXeDFaU2hwYmtGamRHbHZiaTVsYkdGd2MyVmtMQ0JpYkdWdVpFTjFjblpsV3pCZFd6QmRMQ0JpYkdWdVpFTjFjblpsV3pKZFd6QmRLU3dnTUN3Z01TazdYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0JoVUNBOUlHZGxkRlpoYkhWbFJuSnZiVkJ5YjJkeVpYTnpLR0pzWlc1a1VISnZaM0psYzNNc0lHSnNaVzVrUTNWeWRtVmJNRjFiTVYwc0lHSnNaVzVrUTNWeWRtVmJNVjFiTVYwcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdZbEFnUFNCblpYUldZV3gxWlVaeWIyMVFjbTluY21WemN5aGliR1Z1WkZCeWIyZHlaWE56TENCaWJHVnVaRU4xY25abFd6RmRXekZkTENCaWJHVnVaRU4xY25abFd6SmRXekZkS1R0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHSnNaVzVrVUhKdlozSmxjM01nUFQwOUlERXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwYmtGamRHbHZiaTVpYkdWdVpFTjFjblpsSUQwZ2RXNWtaV1pwYm1Wa08xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCcGJsWmhiSFZsTG1OMWNuSmxiblE3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCblpYUldZV3gxWlVaeWIyMVFjbTluY21WemN5aGliR1Z1WkZCeWIyZHlaWE56TENCaFVDd2dZbEFwTzF4dUlDQWdJQ0FnSUNCOU8xeHVJQ0FnSUgxY2JuMDdYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0b3IvaW5jL2dlbmVyYXRlLWJsZW5kLWN1cnZlLmpzXG4gKiogbW9kdWxlIGlkID0gMzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9JbnB1dDIgPSByZXF1aXJlKCcuL0lucHV0Jyk7XG5cbnZhciBfSW5wdXQzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfSW5wdXQyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgUG9pbnRlciA9IChmdW5jdGlvbiAoX0lucHV0KSB7XG4gICAgX2luaGVyaXRzKFBvaW50ZXIsIF9JbnB1dCk7XG5cbiAgICBmdW5jdGlvbiBQb2ludGVyKGluaXRpYWxTdGF0ZSwgbW92ZUV2ZW50LCBldmVudFRvUG9pbnQpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBvaW50ZXIpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9JbnB1dC5jYWxsKHRoaXMsIGluaXRpYWxTdGF0ZSkpO1xuXG4gICAgICAgIF90aGlzLmV2ZW50VG9Qb2ludCA9IGV2ZW50VG9Qb2ludDtcbiAgICAgICAgX3RoaXMubW92ZUV2ZW50ID0gbW92ZUV2ZW50O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgUG9pbnRlci5wcm90b3R5cGUubGF0ZXN0ID0gZnVuY3Rpb24gbGF0ZXN0KGUpIHtcbiAgICAgICAgX0lucHV0LnByb3RvdHlwZS5sYXRlc3QuY2FsbCh0aGlzLCB0aGlzLmV2ZW50VG9Qb2ludChlKSk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9O1xuXG4gICAgUG9pbnRlci5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgX0lucHV0LnByb3RvdHlwZS5zdGFydC5jYWxsKHRoaXMpO1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLm1vdmVFdmVudCwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczIubGF0ZXN0KGUpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgUG9pbnRlci5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgIF9JbnB1dC5wcm90b3R5cGUuc3RvcC5jYWxsKHRoaXMpO1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLm1vdmVFdmVudCwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczMubGF0ZXN0KGUpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFBvaW50ZXI7XG59KShfSW5wdXQzLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBQb2ludGVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm5CMWRDOVFiMmx1ZEdWeUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN096czdPenM3T3pzN1NVRkZjVUlzVDBGQlR6dGpRVUZRTEU5QlFVODdPMEZCUTNoQ0xHRkJSR2xDTEU5QlFVOHNRMEZEV2l4WlFVRlpMRVZCUVVVc1UwRkJVeXhGUVVGRkxGbEJRVmtzUlVGQlJUczRRa0ZFYkVNc1QwRkJUenM3Y1VSQlJYQkNMR3RDUVVGTkxGbEJRVmtzUTBGQlF6czdRVUZEYmtJc1kwRkJTeXhaUVVGWkxFZEJRVWNzV1VGQldTeERRVUZETzBGQlEycERMR05CUVVzc1UwRkJVeXhIUVVGSExGTkJRVk1zUTBGQlF6czdTMEZET1VJN08wRkJUR2RDTEZkQlFVOHNWMEZQZUVJc1RVRkJUU3h0UWtGQlF5eERRVUZETEVWQlFVVTdRVUZEVGl4NVFrRkJUU3hOUVVGTkxFdEJRVUVzVDBGQlF5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRGJrTXNVMEZCUXl4RFFVRkRMR05CUVdNc1JVRkJSU3hEUVVGRE8wdEJRM1JDT3p0QlFWWm5RaXhYUVVGUExGZEJXWGhDTEV0QlFVc3NiMEpCUVVjN096dEJRVU5LTEhsQ1FVRk5MRXRCUVVzc1MwRkJRU3hOUVVGRkxFTkJRVU03UVVGRFpDeG5Ra0ZCVVN4RFFVRkRMR1ZCUVdVc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhGUVVGRkxGVkJRVU1zUTBGQlF6dHRRa0ZCU3l4UFFVRkxMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU03VTBGQlFTeERRVUZETEVOQlFVTTdTMEZEY0VZN08wRkJabWRDTEZkQlFVOHNWMEZwUW5oQ0xFbEJRVWtzYlVKQlFVYzdPenRCUVVOSUxIbENRVUZOTEVsQlFVa3NTMEZCUVN4TlFVRkZMRU5CUVVNN1FVRkRZaXhuUWtGQlVTeERRVUZETEdWQlFXVXNRMEZCUXl4dFFrRkJiVUlzUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZMRlZCUVVNc1EwRkJRenR0UWtGQlN5eFBRVUZMTEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNN1UwRkJRU3hEUVVGRExFTkJRVU03UzBGRGRrWTdPMWRCY0VKblFpeFBRVUZQT3pzN2EwSkJRVkFzVDBGQlR5SXNJbVpwYkdVaU9pSlFiMmx1ZEdWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBVR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUVsdWNIVjBJR1p5YjIwZ0p5NHZTVzV3ZFhRbk8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQmpiR0Z6Y3lCUWIybHVkR1Z5SUdWNGRHVnVaSE1nU1c1d2RYUWdlMXh1SUNBZ0lHTnZibk4wY25WamRHOXlLR2x1YVhScFlXeFRkR0YwWlN3Z2JXOTJaVVYyWlc1MExDQmxkbVZ1ZEZSdlVHOXBiblFwSUh0Y2JpQWdJQ0FnSUNBZ2MzVndaWElvYVc1cGRHbGhiRk4wWVhSbEtUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1bGRtVnVkRlJ2VUc5cGJuUWdQU0JsZG1WdWRGUnZVRzlwYm5RN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Ylc5MlpVVjJaVzUwSUQwZ2JXOTJaVVYyWlc1ME8xeHVJQ0FnSUgxY2JseHVJQ0FnSUd4aGRHVnpkQ2hsS1NCN1hHNGdJQ0FnSUNBZ0lITjFjR1Z5TG14aGRHVnpkQ2gwYUdsekxtVjJaVzUwVkc5UWIybHVkQ2hsS1NrN1hHNGdJQ0FnSUNBZ0lHVXVjSEpsZG1WdWRFUmxabUYxYkhRb0tUdGNiaUFnSUNCOVhHNWNiaUFnSUNCemRHRnlkQ2dwSUh0Y2JpQWdJQ0FnSUNBZ2MzVndaWEl1YzNSaGNuUW9LVHRjYmlBZ0lDQWdJQ0FnWkc5amRXMWxiblF1Wkc5amRXMWxiblJGYkdWdFpXNTBMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9kR2hwY3k1dGIzWmxSWFpsYm5Rc0lDaGxLU0E5UGlCMGFHbHpMbXhoZEdWemRDaGxLU2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjM1J2Y0NncElIdGNiaUFnSUNBZ0lDQWdjM1Z3WlhJdWMzUnZjQ2dwTzF4dUlDQWdJQ0FnSUNCa2IyTjFiV1Z1ZEM1a2IyTjFiV1Z1ZEVWc1pXMWxiblF1Y21WdGIzWmxSWFpsYm5STWFYTjBaVzVsY2loMGFHbHpMbTF2ZG1WRmRtVnVkQ3dnS0dVcElEMCtJSFJvYVhNdWJHRjBaWE4wS0dVcEtUdGNiaUFnSUNCOVhHNTlYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5wdXQvUG9pbnRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDM2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlYWN0aXZhdGUgPSBleHBvcnRzLmdldFByb2Nlc3NJZCA9IHVuZGVmaW5lZDtcbmV4cG9ydHMuYWN0aXZhdGUgPSBhY3RpdmF0ZTtcblxudmFyIF90aW1lciA9IHJlcXVpcmUoJy4vdGltZXInKTtcblxudmFyIF90aW1lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90aW1lcik7XG5cbnZhciBfdGljayA9IHJlcXVpcmUoJy4vdGljaycpO1xuXG52YXIgX3RpY2syID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdGljayk7XG5cbnZhciBfbWFuYWdlciA9IHJlcXVpcmUoJy4vbWFuYWdlcicpO1xuXG52YXIgX21hbmFnZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWFuYWdlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBwcm9jZXNzU3RlcE9yZGVyID0gW3sgbmFtZTogJ29uRnJhbWVTdGFydCcgfSwgeyBuYW1lOiAnb25VcGRhdGUnIH0sIHsgbmFtZTogJ3dpbGxSZW5kZXInLCBkZWNpZGVSZW5kZXI6IHRydWUgfSwgeyBuYW1lOiAnb25QcmVSZW5kZXInLCBpc1JlbmRlcjogdHJ1ZSB9LCB7IG5hbWU6ICdvblJlbmRlcicsIGlzUmVuZGVyOiB0cnVlIH0sIHsgbmFtZTogJ29uUG9zdFJlbmRlcicsIGlzUmVuZGVyOiB0cnVlIH0sIHsgbmFtZTogJ29uRnJhbWVFbmQnIH0sIHsgbmFtZTogJ29uQ2xlYW51cCcgfV07IC8qXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29yZSByZW5kZXIgbG9vcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU29tZSBkZWNpY2lzb25zIGhlcmUgaGF2ZSBiZWVuIHRha2VuIGluIHRoZSBuYW1lIG9mIHBlcmZvcm1hbmNlLiBBbGwgaGFpbCBwZXJmb3JtYW5jZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoSXQgdHVybnMgb3V0IG1pY3Jvb3B0aW1pc2F0aW9ucyBkbyBtYXR0ZXIgd2hlbiB5b3UgaGF2ZSAxNm1zKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cblxudmFyIG51bVByb2Nlc3NTdGVwcyA9IHByb2Nlc3NTdGVwT3JkZXIubGVuZ3RoO1xuXG4vLyBbYm9vbGVhbl06IElzIGxvb3AgcnVubmluZz9cbnZhciBpc1J1bm5pbmcgPSBmYWxzZTtcblxuLypcbiAgICBbdGltZXN0YW1wXTogRnJhbWUgdGltZXN0YW1wXG4gICAgW2ludF06IFRpbWUgc2luY2UgbGFzdCBmcmFtZVxuKi9cbmZ1bmN0aW9uIGZpcmVBbGwoZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgIHZhciBhY3RpdmVJZHMgPSBfbWFuYWdlcjIuZGVmYXVsdC5nZXRBY3RpdmVJZHMoKTtcbiAgICB2YXIgYWN0aXZlUHJvY2Vzc0NvdW50ID0gYWN0aXZlSWRzLmxlbmd0aDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtUHJvY2Vzc1N0ZXBzOyBpKyspIHtcbiAgICAgICAgdmFyIHN0ZXAgPSBwcm9jZXNzU3RlcE9yZGVyW2ldO1xuXG4gICAgICAgIGZvciAodmFyIGkyID0gMDsgaTIgPCBhY3RpdmVQcm9jZXNzQ291bnQ7IGkyKyspIHtcbiAgICAgICAgICAgIHZhciBwcm9jZXNzID0gX21hbmFnZXIyLmRlZmF1bHQuYWN0aXZlUHJvY2Vzc2VzW2FjdGl2ZUlkc1tpMl1dO1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAvLyBDaGVjayBpZiB0aGlzIHByb2Nlc3MgaGFzIHRoaXMgc3RlcCwgb3IgaWYgaXQncyBhIHJlbmRlciBzdGVwIHRoYXQgd2UncmUgcmVuZGVyaW5nIHRoaXMgZnJhbWVcbiAgICAgICAgICAgIGlmIChwcm9jZXNzICYmIHByb2Nlc3Nbc3RlcC5uYW1lXSAmJiAoIXN0ZXAuaXNSZW5kZXIgfHwgc3RlcC5pc1JlbmRlciAmJiBwcm9jZXNzLl9yZW5kZXJUaGlzRnJhbWUgPT09IHRydWUpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcHJvY2Vzc1tzdGVwLm5hbWVdLmNhbGwocHJvY2VzcywgcHJvY2VzcywgZnJhbWVTdGFtcCwgZWxhcHNlZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIHRoaXMgaXMgYSBkZWNpZGUgcmVuZGVyIHN0ZXAgYW5kIGl0IHJldHVybnMgYGZhbHNlYCwgc2V0IHdpbGxSZW5kZXIgdG8gZmFsc2VcbiAgICAgICAgICAgIGlmIChzdGVwLmRlY2lkZVJlbmRlcikge1xuICAgICAgICAgICAgICAgIHByb2Nlc3MuX3JlbmRlclRoaXNGcmFtZSA9IHByb2Nlc3Nbc3RlcC5uYW1lXSAmJiByZXN1bHQgIT09IHRydWUgPyBmYWxzZSA6IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gX21hbmFnZXIyLmRlZmF1bHQuZ2V0Tm9uQmFja2dyb3VuZFJ1bm5pbmdDb3VudCgpO1xufVxuXG4vLyBGdW5jdGlvbiB0byBmaXJlIGV2ZXJ5IGZyYW1lXG5mdW5jdGlvbiBmcmFtZShmcmFtZVN0YW1wKSB7XG4gICAgX3RpbWVyMi5kZWZhdWx0LnVwZGF0ZShmcmFtZVN0YW1wKTtcbiAgICBpc1J1bm5pbmcgPSBmaXJlQWxsKGZyYW1lU3RhbXAsIF90aW1lcjIuZGVmYXVsdC5nZXRFbGFwc2VkKCkpO1xuXG4gICAgaWYgKGlzUnVubmluZykge1xuICAgICAgICAoMCwgX3RpY2syLmRlZmF1bHQpKGZyYW1lKTtcbiAgICB9XG59XG5cbi8vIFN0YXJ0IGxvb3BcbmZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgIGlmICghaXNSdW5uaW5nKSB7XG4gICAgICAgIF90aW1lcjIuZGVmYXVsdC5zdGFydCgpO1xuICAgICAgICBpc1J1bm5pbmcgPSB0cnVlO1xuICAgICAgICAoMCwgX3RpY2syLmRlZmF1bHQpKGZyYW1lKTtcbiAgICB9XG59XG5cbi8vIEV4cG9ydHNcbnZhciBnZXRQcm9jZXNzSWQgPSBleHBvcnRzLmdldFByb2Nlc3NJZCA9IF9tYW5hZ2VyMi5kZWZhdWx0LmdldFByb2Nlc3NJZDtcblxuLypcbiAgICBbaW50XTogUHJvY2VzcyBJRCB0byBhY3RpdmF0ZVxuICAgIFtQcm9jZXNzXTogUHJvY2VzcyB0byBhY3RpdmF0ZVxuKi9cbmZ1bmN0aW9uIGFjdGl2YXRlKGlkLCBwcm9jZXNzKSB7XG4gICAgX21hbmFnZXIyLmRlZmF1bHQuYWN0aXZhdGUoaWQsIHByb2Nlc3MpO1xuXG4gICAgaWYgKCFpc1J1bm5pbmcpIHtcbiAgICAgICAgc3RhcnQoKTtcbiAgICB9XG59XG5cbi8qXG4gICAgW2ludF06IFByb2Nlc3MgSUQgdG8gZGVhY3RpdmF0ZVxuKi9cbnZhciBkZWFjdGl2YXRlID0gZXhwb3J0cy5kZWFjdGl2YXRlID0gX21hbmFnZXIyLmRlZmF1bHQuZGVhY3RpdmF0ZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5d2NtOWpaWE56TDJ4dmIzQXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0UlFXbEdaMElzVVVGQlVTeEhRVUZTTEZGQlFWRTdPenM3T3pzN096czdPenM3T3pzN1FVRjJSWGhDTEVsQlFVMHNaMEpCUVdkQ0xFZEJRVWNzUTBGRGNrSXNSVUZCUlN4SlFVRkpMRVZCUVVVc1kwRkJZeXhGUVVGRkxFVkJRM2hDTEVWQlFVVXNTVUZCU1N4RlFVRkZMRlZCUVZVc1JVRkJSU3hGUVVOd1FpeEZRVUZGTEVsQlFVa3NSVUZCUlN4WlFVRlpMRVZCUVVVc1dVRkJXU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEZRVU14UXl4RlFVRkZMRWxCUVVrc1JVRkJSU3hoUVVGaExFVkJRVVVzVVVGQlVTeEZRVUZGTEVsQlFVa3NSVUZCUlN4RlFVTjJReXhGUVVGRkxFbEJRVWtzUlVGQlJTeFZRVUZWTEVWQlFVVXNVVUZCVVN4RlFVRkZMRWxCUVVrc1JVRkJSU3hGUVVOd1F5eEZRVUZGTEVsQlFVa3NSVUZCUlN4alFVRmpMRVZCUVVVc1VVRkJVU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEZRVU40UXl4RlFVRkZMRWxCUVVrc1JVRkJSU3haUVVGWkxFVkJRVVVzUlVGRGRFSXNSVUZCUlN4SlFVRkpMRVZCUVVVc1YwRkJWeXhGUVVGRkxFTkJRM2hDT3pzN096czdRVUZCUXp0QlFVTkdMRWxCUVUwc1pVRkJaU3hIUVVGSExHZENRVUZuUWl4RFFVRkRMRTFCUVUwN096dEJRVUZETEVGQlIyaEVMRWxCUVVrc1UwRkJVeXhIUVVGSExFdEJRVXM3T3pzN096dEJRVUZETEVGQlRYUkNMRk5CUVZNc1QwRkJUeXhEUVVGRExGVkJRVlVzUlVGQlJTeFBRVUZQTEVWQlFVVTdRVUZEYkVNc1VVRkJUU3hUUVVGVExFZEJRVWNzYTBKQlFWRXNXVUZCV1N4RlFVRkZMRU5CUVVNN1FVRkRla01zVVVGQlRTeHJRa0ZCYTBJc1IwRkJSeXhUUVVGVExFTkJRVU1zVFVGQlRTeERRVUZET3p0QlFVVTFReXhUUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1pVRkJaU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzBGQlEzUkRMRmxCUVUwc1NVRkJTU3hIUVVGSExHZENRVUZuUWl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE96dEJRVVZxUXl4aFFVRkxMRWxCUVVrc1JVRkJSU3hIUVVGSExFTkJRVU1zUlVGQlJTeEZRVUZGTEVkQlFVY3NhMEpCUVd0Q0xFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVTdRVUZETlVNc1owSkJRVTBzVDBGQlR5eEhRVUZITEd0Q1FVRlJMR1ZCUVdVc1EwRkJReXhUUVVGVExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0QlFVTjJSQ3huUWtGQlNTeE5RVUZOTEVkQlFVY3NTMEZCU3pzN08wRkJRVU1zUVVGSGJrSXNaMEpCUVVrc1QwRkJUeXhKUVVGSkxFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeEpRVUZMTEVsQlFVa3NRMEZCUXl4UlFVRlJMRWxCUVVrc1QwRkJUeXhEUVVGRExHZENRVUZuUWl4TFFVRkxMRWxCUVVrc1EwRkJReXhCUVVGRExFVkJRVVU3UVVGRE0wY3NjMEpCUVUwc1IwRkJSeXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFVkJRVVVzVDBGQlR5eEZRVUZGTEZWQlFWVXNSVUZCUlN4UFFVRlBMRU5CUVVNc1EwRkJRenRoUVVNelJUczdPMEZCUVVFc1FVRkhSQ3huUWtGQlNTeEpRVUZKTEVOQlFVTXNXVUZCV1N4RlFVRkZPMEZCUTI1Q0xIVkNRVUZQTEVOQlFVTXNaMEpCUVdkQ0xFZEJRVWNzUVVGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFMUJRVTBzUzBGQlN5eEpRVUZKTEVkQlFVa3NTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJRenRoUVVOeVJqdFRRVU5LTzB0QlEwbzdPMEZCUlVRc1YwRkJUeXhyUWtGQlVTdzBRa0ZCTkVJc1JVRkJSU3hEUVVGRE8wTkJRMnBFT3pzN1FVRkJRU3hCUVVkRUxGTkJRVk1zUzBGQlN5eERRVUZETEZWQlFWVXNSVUZCUlR0QlFVTjJRaXh2UWtGQlRTeE5RVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNN1FVRkRla0lzWVVGQlV5eEhRVUZITEU5QlFVOHNRMEZCUXl4VlFVRlZMRVZCUVVVc1owSkJRVTBzVlVGQlZTeEZRVUZGTEVOQlFVTXNRMEZCUXpzN1FVRkZjRVFzVVVGQlNTeFRRVUZUTEVWQlFVVTdRVUZEV0N3MFFrRkJTeXhMUVVGTExFTkJRVU1zUTBGQlF6dExRVU5tTzBOQlEwbzdPenRCUVVGQkxFRkJSMFFzVTBGQlV5eExRVUZMTEVkQlFVYzdRVUZEWWl4UlFVRkpMRU5CUVVNc1UwRkJVeXhGUVVGRk8wRkJRMW9zZDBKQlFVMHNTMEZCU3l4RlFVRkZMRU5CUVVNN1FVRkRaQ3hwUWtGQlV5eEhRVUZITEVsQlFVa3NRMEZCUXp0QlFVTnFRaXcwUWtGQlN5eExRVUZMTEVOQlFVTXNRMEZCUXp0TFFVTm1PME5CUTBvN096dEJRVUZCTEVGQlIwMHNTVUZCVFN4WlFVRlpMRmRCUVZvc1dVRkJXU3hIUVVGSExHdENRVUZSTEZsQlFWazdPenM3T3p0QlFVRkRMRUZCVFRGRExGTkJRVk1zVVVGQlVTeERRVUZETEVWQlFVVXNSVUZCUlN4UFFVRlBMRVZCUVVVN1FVRkRiRU1zYzBKQlFWRXNVVUZCVVN4RFFVRkRMRVZCUVVVc1JVRkJSU3hQUVVGUExFTkJRVU1zUTBGQlF6czdRVUZGT1VJc1VVRkJTU3hEUVVGRExGTkJRVk1zUlVGQlJUdEJRVU5hTEdGQlFVc3NSVUZCUlN4RFFVRkRPMHRCUTFnN1EwRkRTanM3T3pzN1FVRkJRU3hCUVV0TkxFbEJRVTBzVlVGQlZTeFhRVUZXTEZWQlFWVXNSMEZCUnl4clFrRkJVU3hWUVVGVkxFTkJRVU1pTENKbWFXeGxJam9pYkc5dmNDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkRkJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpOHFYRzRnSUNBZ1EyOXlaU0J5Wlc1a1pYSWdiRzl2Y0Z4dVhHNGdJQ0FnVTI5dFpTQmtaV05wWTJsemIyNXpJR2hsY21VZ2FHRjJaU0JpWldWdUlIUmhhMlZ1SUdsdUlIUm9aU0J1WVcxbElHOW1JSEJsY21admNtMWhibU5sTGlCQmJHd2dhR0ZwYkNCd1pYSm1iM0p0WVc1alpTNWNiaUFnSUNBb1NYUWdkSFZ5Ym5NZ2IzVjBJRzFwWTNKdmIzQjBhVzFwYzJGMGFXOXVjeUJrYnlCdFlYUjBaWElnZDJobGJpQjViM1VnYUdGMlpTQXhObTF6S1Z4dUtpOWNibWx0Y0c5eWRDQjBhVzFsY2lCbWNtOXRJQ2N1TDNScGJXVnlKenRjYm1sdGNHOXlkQ0IwYVdOcklHWnliMjBnSnk0dmRHbGpheWM3WEc1cGJYQnZjblFnYldGdVlXZGxjaUJtY205dElDY3VMMjFoYm1GblpYSW5PMXh1WEc1amIyNXpkQ0J3Y205alpYTnpVM1JsY0U5eVpHVnlJRDBnVzF4dUlDQWdJSHNnYm1GdFpUb2dKMjl1Um5KaGJXVlRkR0Z5ZENjZ2ZTeGNiaUFnSUNCN0lHNWhiV1U2SUNkdmJsVndaR0YwWlNjZ2ZTeGNiaUFnSUNCN0lHNWhiV1U2SUNkM2FXeHNVbVZ1WkdWeUp5d2daR1ZqYVdSbFVtVnVaR1Z5T2lCMGNuVmxJSDBzWEc0Z0lDQWdleUJ1WVcxbE9pQW5iMjVRY21WU1pXNWtaWEluTENCcGMxSmxibVJsY2pvZ2RISjFaU0I5TEZ4dUlDQWdJSHNnYm1GdFpUb2dKMjl1VW1WdVpHVnlKeXdnYVhOU1pXNWtaWEk2SUhSeWRXVWdmU3hjYmlBZ0lDQjdJRzVoYldVNklDZHZibEJ2YzNSU1pXNWtaWEluTENCcGMxSmxibVJsY2pvZ2RISjFaU0I5TEZ4dUlDQWdJSHNnYm1GdFpUb2dKMjl1Um5KaGJXVkZibVFuSUgwc1hHNGdJQ0FnZXlCdVlXMWxPaUFuYjI1RGJHVmhiblZ3SnlCOVhHNWRPMXh1WTI5dWMzUWdiblZ0VUhKdlkyVnpjMU4wWlhCeklEMGdjSEp2WTJWemMxTjBaWEJQY21SbGNpNXNaVzVuZEdnN1hHNWNiaTh2SUZ0aWIyOXNaV0Z1WFRvZ1NYTWdiRzl2Y0NCeWRXNXVhVzVuUDF4dWJHVjBJR2x6VW5WdWJtbHVaeUE5SUdaaGJITmxPMXh1WEc0dktseHVJQ0FnSUZ0MGFXMWxjM1JoYlhCZE9pQkdjbUZ0WlNCMGFXMWxjM1JoYlhCY2JpQWdJQ0JiYVc1MFhUb2dWR2x0WlNCemFXNWpaU0JzWVhOMElHWnlZVzFsWEc0cUwxeHVablZ1WTNScGIyNGdabWx5WlVGc2JDaG1jbUZ0WlZOMFlXMXdMQ0JsYkdGd2MyVmtLU0I3WEc0Z0lDQWdZMjl1YzNRZ1lXTjBhWFpsU1dSeklEMGdiV0Z1WVdkbGNpNW5aWFJCWTNScGRtVkpaSE1vS1R0Y2JpQWdJQ0JqYjI1emRDQmhZM1JwZG1WUWNtOWpaWE56UTI5MWJuUWdQU0JoWTNScGRtVkpaSE11YkdWdVozUm9PMXh1WEc0Z0lDQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0J1ZFcxUWNtOWpaWE56VTNSbGNITTdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCemRHVndJRDBnY0hKdlkyVnpjMU4wWlhCUGNtUmxjbHRwWFR0Y2JseHVJQ0FnSUNBZ0lDQm1iM0lnS0d4bGRDQnBNaUE5SURBN0lHa3lJRHdnWVdOMGFYWmxVSEp2WTJWemMwTnZkVzUwT3lCcE1pc3JLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCd2NtOWpaWE56SUQwZ2JXRnVZV2RsY2k1aFkzUnBkbVZRY205alpYTnpaWE5iWVdOMGFYWmxTV1J6VzJreVhWMDdYRzRnSUNBZ0lDQWdJQ0FnSUNCc1pYUWdjbVZ6ZFd4MElEMGdabUZzYzJVN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUM4dklFTm9aV05ySUdsbUlIUm9hWE1nY0hKdlkyVnpjeUJvWVhNZ2RHaHBjeUJ6ZEdWd0xDQnZjaUJwWmlCcGRDZHpJR0VnY21WdVpHVnlJSE4wWlhBZ2RHaGhkQ0IzWlNkeVpTQnlaVzVrWlhKcGJtY2dkR2hwY3lCbWNtRnRaVnh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSEJ5YjJObGMzTWdKaVlnY0hKdlkyVnpjMXR6ZEdWd0xtNWhiV1ZkSUNZbUlDZ2hjM1JsY0M1cGMxSmxibVJsY2lCOGZDQW9jM1JsY0M1cGMxSmxibVJsY2lBbUppQndjbTlqWlhOekxsOXlaVzVrWlhKVWFHbHpSbkpoYldVZ1BUMDlJSFJ5ZFdVcEtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsYzNWc2RDQTlJSEJ5YjJObGMzTmJjM1JsY0M1dVlXMWxYUzVqWVd4c0tIQnliMk5sYzNNc0lIQnliMk5sYzNNc0lHWnlZVzFsVTNSaGJYQXNJR1ZzWVhCelpXUXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QkpaaUIwYUdseklHbHpJR0VnWkdWamFXUmxJSEpsYm1SbGNpQnpkR1Z3SUdGdVpDQnBkQ0J5WlhSMWNtNXpJR0JtWVd4elpXQXNJSE5sZENCM2FXeHNVbVZ1WkdWeUlIUnZJR1poYkhObFhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2MzUmxjQzVrWldOcFpHVlNaVzVrWlhJcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQndjbTlqWlhOekxsOXlaVzVrWlhKVWFHbHpSbkpoYldVZ1BTQW9jSEp2WTJWemMxdHpkR1Z3TG01aGJXVmRJQ1ltSUhKbGMzVnNkQ0FoUFQwZ2RISjFaU2tnUHlCbVlXeHpaU0E2SUhSeWRXVTdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNCeVpYUjFjbTRnYldGdVlXZGxjaTVuWlhST2IyNUNZV05yWjNKdmRXNWtVblZ1Ym1sdVowTnZkVzUwS0NrN1hHNTlYRzVjYmk4dklFWjFibU4wYVc5dUlIUnZJR1pwY21VZ1pYWmxjbmtnWm5KaGJXVmNibVoxYm1OMGFXOXVJR1p5WVcxbEtHWnlZVzFsVTNSaGJYQXBJSHRjYmlBZ0lDQjBhVzFsY2k1MWNHUmhkR1VvWm5KaGJXVlRkR0Z0Y0NrN1hHNGdJQ0FnYVhOU2RXNXVhVzVuSUQwZ1ptbHlaVUZzYkNobWNtRnRaVk4wWVcxd0xDQjBhVzFsY2k1blpYUkZiR0Z3YzJWa0tDa3BPMXh1WEc0Z0lDQWdhV1lnS0dselVuVnVibWx1WnlrZ2UxeHVJQ0FnSUNBZ0lDQjBhV05yS0daeVlXMWxLVHRjYmlBZ0lDQjlYRzU5WEc1Y2JpOHZJRk4wWVhKMElHeHZiM0JjYm1aMWJtTjBhVzl1SUhOMFlYSjBLQ2tnZTF4dUlDQWdJR2xtSUNnaGFYTlNkVzV1YVc1bktTQjdYRzRnSUNBZ0lDQWdJSFJwYldWeUxuTjBZWEowS0NrN1hHNGdJQ0FnSUNBZ0lHbHpVblZ1Ym1sdVp5QTlJSFJ5ZFdVN1hHNGdJQ0FnSUNBZ0lIUnBZMnNvWm5KaGJXVXBPMXh1SUNBZ0lIMWNibjFjYmx4dUx5OGdSWGh3YjNKMGMxeHVaWGh3YjNKMElHTnZibk4wSUdkbGRGQnliMk5sYzNOSlpDQTlJRzFoYm1GblpYSXVaMlYwVUhKdlkyVnpjMGxrTzF4dVhHNHZLbHh1SUNBZ0lGdHBiblJkT2lCUWNtOWpaWE56SUVsRUlIUnZJR0ZqZEdsMllYUmxYRzRnSUNBZ1cxQnliMk5sYzNOZE9pQlFjbTlqWlhOeklIUnZJR0ZqZEdsMllYUmxYRzRxTDF4dVpYaHdiM0owSUdaMWJtTjBhVzl1SUdGamRHbDJZWFJsS0dsa0xDQndjbTlqWlhOektTQjdYRzRnSUNBZ2JXRnVZV2RsY2k1aFkzUnBkbUYwWlNocFpDd2djSEp2WTJWemN5azdYRzVjYmlBZ0lDQnBaaUFvSVdselVuVnVibWx1WnlrZ2UxeHVJQ0FnSUNBZ0lDQnpkR0Z5ZENncE8xeHVJQ0FnSUgxY2JuMWNibHh1THlwY2JpQWdJQ0JiYVc1MFhUb2dVSEp2WTJWemN5QkpSQ0IwYnlCa1pXRmpkR2wyWVhSbFhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHUmxZV04wYVhaaGRHVWdQU0J0WVc1aFoyVnlMbVJsWVdOMGFYWmhkR1U3SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcHJvY2Vzcy9sb29wLmpzXG4gKiogbW9kdWxlIGlkID0gMzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGJ1aWxkO1xuLypcbiAgICBDb252ZXJ0IHBlcmNlbnRhZ2UgdG8gcGl4ZWxzXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBQZXJjZW50YWdlIG9mIHRvdGFsIGxlbmd0aFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVG90YWwgbGVuZ3RoXG4qL1xudmFyIHBlcmNlbnRUb1BpeGVscyA9IGZ1bmN0aW9uIChwZXJjZW50LCBsZW5ndGgpIHtcbiAgICByZXR1cm4gcGFyc2VGbG9hdChwZXJjZW50KSAvIDEwMCAqIGxlbmd0aCArICdweCc7XG59O1xuXG5mdW5jdGlvbiBidWlsZChzdGF0ZSwgbGVuZ3RoKSB7XG4gICAgdmFyIHN0eWxlcyA9IHt9O1xuICAgIHZhciBkYXNoQXJyYXlTdHlsZXMgPSB7XG4gICAgICAgIGxlbmd0aDogMCxcbiAgICAgICAgc3BhY2luZzogbGVuZ3RoICsgJ3B4J1xuICAgIH07XG4gICAgdmFyIGhhc0Rhc2hBcnJheSA9IGZhbHNlO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHN0YXRlKSB7XG4gICAgICAgIGlmIChzdGF0ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBzdGF0ZVtrZXldO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2xlbmd0aCc6XG4gICAgICAgICAgICAgICAgY2FzZSAnc3BhY2luZyc6XG4gICAgICAgICAgICAgICAgICAgIGhhc0Rhc2hBcnJheSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGRhc2hBcnJheVN0eWxlc1trZXldID0gcGVyY2VudFRvUGl4ZWxzKHZhbHVlLCBsZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdvZmZzZXQnOlxuICAgICAgICAgICAgICAgICAgICBzdHlsZXNbJ3N0cm9rZS1kYXNob2Zmc2V0J10gPSBwZXJjZW50VG9QaXhlbHMoLXZhbHVlLCBsZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBzdHlsZXNba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGhhc0Rhc2hBcnJheSkge1xuICAgICAgICBzdHlsZXNbJ3N0cm9rZS1kYXNoYXJyYXknXSA9IGRhc2hBcnJheVN0eWxlcy5sZW5ndGggKyAnICcgKyBkYXNoQXJyYXlTdHlsZXMuc3BhY2luZztcbiAgICB9XG5cbiAgICByZXR1cm4gc3R5bGVzO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMM04yWnkxd1lYUm9MMkoxYVd4a0xtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenRyUWtGUmQwSXNTMEZCU3pzN096czdPenRCUVVZM1FpeEpRVUZOTEdWQlFXVXNSMEZCUnl4VlFVRkRMRTlCUVU4c1JVRkJSU3hOUVVGTk8xZEJRVXNzUVVGQlF5eFZRVUZWTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSkxFMUJRVTBzUjBGQlJ5eEpRVUZKTzBOQlFVRXNRMEZCUXpzN1FVRkZNVVVzVTBGQlV5eExRVUZMTEVOQlFVTXNTMEZCU3l4RlFVRkZMRTFCUVUwc1JVRkJSVHRCUVVONlF5eFJRVUZOTEUxQlFVMHNSMEZCUnl4RlFVRkZMRU5CUVVNN1FVRkRiRUlzVVVGQlRTeGxRVUZsTEVkQlFVYzdRVUZEY0VJc1kwRkJUU3hGUVVGRkxFTkJRVU03UVVGRFZDeGxRVUZQTEVWQlFVVXNUVUZCVFN4SFFVRkhMRWxCUVVrN1MwRkRla0lzUTBGQlF6dEJRVU5HTEZGQlFVa3NXVUZCV1N4SFFVRkhMRXRCUVVzc1EwRkJRenM3UVVGRmVrSXNVMEZCU3l4SlFVRkpMRWRCUVVjc1NVRkJTU3hMUVVGTExFVkJRVVU3UVVGRGJrSXNXVUZCU1N4TFFVRkxMRU5CUVVNc1kwRkJZeXhEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTzBGQlF6TkNMR2RDUVVGTkxFdEJRVXNzUjBGQlJ5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN08wRkJSWHBDTEc5Q1FVRlJMRWRCUVVjN1FVRkRXQ3h4UWtGQlN5eFJRVUZSTEVOQlFVTTdRVUZEWkN4eFFrRkJTeXhUUVVGVE8wRkJRMVlzWjBOQlFWa3NSMEZCUnl4SlFVRkpMRU5CUVVNN1FVRkRjRUlzYlVOQlFXVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhsUVVGbExFTkJRVU1zUzBGQlN5eEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRPMEZCUTNSRUxEQkNRVUZOTzBGQlFVRXNRVUZEVml4eFFrRkJTeXhSUVVGUk8wRkJRMVFzTUVKQlFVMHNRMEZCUXl4dFFrRkJiVUlzUTBGQlF5eEhRVUZITEdWQlFXVXNRMEZCUXl4RFFVRkRMRXRCUVVzc1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF6dEJRVU01UkN3d1FrRkJUVHRCUVVGQkxFRkJRMVk3UVVGRFNTd3dRa0ZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFdEJRVXNzUTBGQlF6dEJRVUZCTEdGQlEzWkNPMU5CUTBvN1MwRkRTanM3UVVGRlJDeFJRVUZKTEZsQlFWa3NSVUZCUlR0QlFVTmtMR05CUVUwc1EwRkJReXhyUWtGQmEwSXNRMEZCUXl4SFFVRkhMR1ZCUVdVc1EwRkJReXhOUVVGTkxFZEJRVWNzUjBGQlJ5eEhRVUZITEdWQlFXVXNRMEZCUXl4UFFVRlBMRU5CUVVNN1MwRkRka1k3TzBGQlJVUXNWMEZCVHl4TlFVRk5MRU5CUVVNN1EwRkRha0lpTENKbWFXeGxJam9pWW5WcGJHUXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFJRWlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SXZLbHh1SUNBZ0lFTnZiblpsY25RZ2NHVnlZMlZ1ZEdGblpTQjBieUJ3YVhobGJITmNiaUFnSUNCY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRkJsY21ObGJuUmhaMlVnYjJZZ2RHOTBZV3dnYkdWdVozUm9YRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCVWIzUmhiQ0JzWlc1bmRHaGNiaW92WEc1amIyNXpkQ0J3WlhKalpXNTBWRzlRYVhobGJITWdQU0FvY0dWeVkyVnVkQ3dnYkdWdVozUm9LU0E5UGlBb2NHRnljMlZHYkc5aGRDaHdaWEpqWlc1MEtTQXZJREV3TUNrZ0tpQnNaVzVuZEdnZ0t5QW5jSGduTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCbWRXNWpkR2x2YmlCaWRXbHNaQ2h6ZEdGMFpTd2diR1Z1WjNSb0tTQjdYRzRnSUNBZ1kyOXVjM1FnYzNSNWJHVnpJRDBnZTMwN1hHNGdJQ0FnWTI5dWMzUWdaR0Z6YUVGeWNtRjVVM1I1YkdWeklEMGdlMXh1SUNBZ0lDQWdJQ0JzWlc1bmRHZzZJREFzWEc0Z0lDQWdJQ0FnSUhOd1lXTnBibWM2SUd4bGJtZDBhQ0FySUNkd2VDZGNiaUFnSUNCOU8xeHVJQ0FnSUd4bGRDQm9ZWE5FWVhOb1FYSnlZWGtnUFNCbVlXeHpaVHRjYmx4dUlDQWdJR1p2Y2lBb2JHVjBJR3RsZVNCcGJpQnpkR0YwWlNrZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvYzNSaGRHVXVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2EyVjVLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2RtRnNkV1VnUFNCemRHRjBaVnRyWlhsZE8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNCemQybDBZMmdnS0d0bGVTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyRnpaU0FuYkdWdVozUm9KenBjYmlBZ0lDQWdJQ0FnSUNBZ0lHTmhjMlVnSjNOd1lXTnBibWNuT2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdoaGMwUmhjMmhCY25KaGVTQTlJSFJ5ZFdVN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1pHRnphRUZ5Y21GNVUzUjViR1Z6VzJ0bGVWMGdQU0J3WlhKalpXNTBWRzlRYVhobGJITW9kbUZzZFdVc0lHeGxibWQwYUNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1luSmxZV3M3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpZWE5sSUNkdlptWnpaWFFuT2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhOMGVXeGxjMXNuYzNSeWIydGxMV1JoYzJodlptWnpaWFFuWFNBOUlIQmxjbU5sYm5SVWIxQnBlR1ZzY3lndGRtRnNkV1VzSUd4bGJtZDBhQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWW5KbFlXczdYRzRnSUNBZ0lDQWdJQ0FnSUNCa1pXWmhkV3gwT2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhOMGVXeGxjMXRyWlhsZElEMGdkbUZzZFdVN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0JwWmlBb2FHRnpSR0Z6YUVGeWNtRjVLU0I3WEc0Z0lDQWdJQ0FnSUhOMGVXeGxjMXNuYzNSeWIydGxMV1JoYzJoaGNuSmhlU2RkSUQwZ1pHRnphRUZ5Y21GNVUzUjViR1Z6TG14bGJtZDBhQ0FySUNjZ0p5QXJJR1JoYzJoQmNuSmhlVk4wZVd4bGN5NXpjR0ZqYVc1bk8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhKbGRIVnliaUJ6ZEhsc1pYTTdYRzU5SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9zdmctcGF0aC9idWlsZC5qc1xuICoqIG1vZHVsZSBpZCA9IDM4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfc3RhdGVNYXAgPSByZXF1aXJlKCcuLi9jc3Mvc3RhdGUtbWFwJyk7XG5cbnZhciBfc3RhdGVNYXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RhdGVNYXApO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgU1RST0tFID0gJ3N0cm9rZS0nO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZXh0ZW5kcyh7fSwgX3N0YXRlTWFwMi5kZWZhdWx0LCB7XG4gICAgb3BhY2l0eTogU1RST0tFICsgJ29wYWNpdHknLFxuICAgIHdpZHRoOiBTVFJPS0UgKyAnd2lkdGgnLFxuICAgIG1pdGVybGltaXQ6IFNUUk9LRSArICdtaXRlcmxpbWl0J1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwzTjJaeTF3WVhSb0wzTjBZWFJsTFcxaGNDNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN096czdPenM3UVVGRlFTeEpRVUZOTEUxQlFVMHNSMEZCUnl4VFFVRlRMRU5CUVVNN096dEJRVWx5UWl4WFFVRlBMRVZCUVVzc1RVRkJUU3haUVVGVE8wRkJRek5DTEZOQlFVc3NSVUZCU3l4TlFVRk5MRlZCUVU4N1FVRkRka0lzWTBGQlZTeEZRVUZMTEUxQlFVMHNaVUZCV1NJc0ltWnBiR1VpT2lKemRHRjBaUzF0WVhBdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUlFaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnWTNOelUzUmhkR1ZOWVhBZ1puSnZiU0FuTGk0dlkzTnpMM04wWVhSbExXMWhjQ2M3WEc1Y2JtTnZibk4wSUZOVVVrOUxSU0E5SUNkemRISnZhMlV0Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2UxeHVJQ0FnSUM0dUxtTnpjMU4wWVhSbFRXRndMRnh1SUNBZ0lHOXdZV05wZEhrNklHQWtlMU5VVWs5TFJYMXZjR0ZqYVhSNVlDeGNiaUFnSUNCM2FXUjBhRG9nWUNSN1UxUlNUMHRGZlhkcFpIUm9ZQ3hjYmlBZ0lDQnRhWFJsY214cGJXbDBPaUJnSkh0VFZGSlBTMFY5YldsMFpYSnNhVzFwZEdCY2JuMDdJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hZGFwdGVyL3N2Zy1wYXRoL3N0YXRlLW1hcC5qc1xuICoqIG1vZHVsZSBpZCA9IDM5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgVFJBTlNMQVRFID0gJ3RyYW5zbGF0ZSc7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICB4OiBUUkFOU0xBVEUgKyAnWCcsXG4gICAgeTogVFJBTlNMQVRFICsgJ1knLFxuICAgIHo6IFRSQU5TTEFURSArICdaJ1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFpHRndkR1Z5TDJOemN5OXpkR0YwWlMxdFlYQXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3TzBGQlFVRXNTVUZCVFN4VFFVRlRMRWRCUVVjc1YwRkJWeXhEUVVGRE96dHJRa0ZGWmp0QlFVTllMRXRCUVVNc1JVRkJSU3hUUVVGVExFZEJRVWNzUjBGQlJ6dEJRVU5zUWl4TFFVRkRMRVZCUVVVc1UwRkJVeXhIUVVGSExFZEJRVWM3UVVGRGJFSXNTMEZCUXl4RlFVRkZMRk5CUVZNc1IwRkJSeXhIUVVGSE8wTkJRM0pDSWl3aVptbHNaU0k2SW5OMFlYUmxMVzFoY0M1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRGQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1OdmJuTjBJRlJTUVU1VFRFRlVSU0E5SUNkMGNtRnVjMnhoZEdVbk8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQjdYRzRnSUNBZ2VEb2dWRkpCVGxOTVFWUkZJQ3NnSjFnbkxGeHVJQ0FnSUhrNklGUlNRVTVUVEVGVVJTQXJJQ2RaSnl4Y2JpQWdJQ0I2T2lCVVVrRk9VMHhCVkVVZ0t5QW5XaWRjYm4wN0lsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FkYXB0ZXIvY3NzL3N0YXRlLW1hcC5qc1xuICoqIG1vZHVsZSBpZCA9IDQwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfYWxwaGEgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9hbHBoYScpO1xuXG52YXIgX2FscGhhMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FscGhhKTtcblxudmFyIF9heGVzID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvYXhlcycpO1xuXG52YXIgX2F4ZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXhlcyk7XG5cbnZhciBfY29sb3IgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9jb2xvcicpO1xuXG52YXIgX2NvbG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbG9yKTtcblxudmFyIF9jb21wbGV4ID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvY29tcGxleCcpO1xuXG52YXIgX2NvbXBsZXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcGxleCk7XG5cbnZhciBfc2NhbGUgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9zY2FsZScpO1xuXG52YXIgX3NjYWxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NjYWxlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGZpbGw6IF9jb2xvcjIuZGVmYXVsdCxcbiAgICBzdHJva2U6IF9jb2xvcjIuZGVmYXVsdCxcbiAgICBzY2FsZTogX3NjYWxlMi5kZWZhdWx0LFxuICAgIHNjYWxlWDogX3NjYWxlMi5kZWZhdWx0LFxuICAgIHNjYWxlWTogX3NjYWxlMi5kZWZhdWx0LFxuICAgIHRyYW5zZm9ybU9yaWdpbjogX2F4ZXMyLmRlZmF1bHQsXG4gICAgZDogX2NvbXBsZXgyLmRlZmF1bHQsXG4gICAgcG9pbnRzOiBfY29tcGxleDIuZGVmYXVsdCxcbiAgICBvcGFjaXR5OiBfYWxwaGEyLmRlZmF1bHQsXG4gICAgZmlsbE9wYWNpdHk6IF9hbHBoYTIuZGVmYXVsdCxcbiAgICBzdHJva2VPcGFjaXR5OiBfYWxwaGEyLmRlZmF1bHRcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwzTjJaeTkyWVd4MVpTMTBlWEJsTFcxaGNDNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096dHJRa0ZOWlR0QlFVTllMRkZCUVVrc2FVSkJRVTg3UVVGRFdDeFZRVUZOTEdsQ1FVRlBPMEZCUTJJc1UwRkJTeXhwUWtGQlR6dEJRVU5hTEZWQlFVMHNhVUpCUVU4N1FVRkRZaXhWUVVGTkxHbENRVUZQTzBGQlEySXNiVUpCUVdVc1owSkJRVTA3UVVGRGNrSXNTMEZCUXl4dFFrRkJVenRCUVVOV0xGVkJRVTBzYlVKQlFWTTdRVUZEWml4WFFVRlBMR2xDUVVGUE8wRkJRMlFzWlVGQlZ5eHBRa0ZCVHp0QlFVTnNRaXhwUWtGQllTeHBRa0ZCVHp0RFFVTjJRaUlzSW1acGJHVWlPaUoyWVd4MVpTMTBlWEJsTFcxaGNDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkRkJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCaGJIQm9ZU0JtY205dElDY3VMaTh1TGk5MllXeDFaUzEwZVhCbGN5OWhiSEJvWVNjN1hHNXBiWEJ2Y25RZ1lYaGxjeUJtY205dElDY3VMaTh1TGk5MllXeDFaUzEwZVhCbGN5OWhlR1Z6Snp0Y2JtbHRjRzl5ZENCamIyeHZjaUJtY205dElDY3VMaTh1TGk5MllXeDFaUzEwZVhCbGN5OWpiMnh2Y2ljN1hHNXBiWEJ2Y25RZ1kyOXRjR3hsZUNCbWNtOXRJQ2N1TGk4dUxpOTJZV3gxWlMxMGVYQmxjeTlqYjIxd2JHVjRKenRjYm1sdGNHOXlkQ0J6WTJGc1pTQm1jbTl0SUNjdUxpOHVMaTkyWVd4MVpTMTBlWEJsY3k5elkyRnNaU2M3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUh0Y2JpQWdJQ0JtYVd4c09pQmpiMnh2Y2l4Y2JpQWdJQ0J6ZEhKdmEyVTZJR052Ykc5eUxGeHVJQ0FnSUhOallXeGxPaUJ6WTJGc1pTeGNiaUFnSUNCelkyRnNaVmc2SUhOallXeGxMRnh1SUNBZ0lITmpZV3hsV1RvZ2MyTmhiR1VzWEc0Z0lDQWdkSEpoYm5ObWIzSnRUM0pwWjJsdU9pQmhlR1Z6TEZ4dUlDQWdJR1E2SUdOdmJYQnNaWGdzWEc0Z0lDQWdjRzlwYm5Sek9pQmpiMjF3YkdWNExGeHVJQ0FnSUc5d1lXTnBkSGs2SUdGc2NHaGhMRnh1SUNBZ0lHWnBiR3hQY0dGamFYUjVPaUJoYkhCb1lTeGNiaUFnSUNCemRISnZhMlZQY0dGamFYUjVPaUJoYkhCb1lWeHVmVHNpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9zdmcvdmFsdWUtdHlwZS1tYXAuanNcbiAqKiBtb2R1bGUgaWQgPSA0MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gYnVpbGQ7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi8uLi9pbmMvdXRpbHMnKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wcyA9IHJlcXVpcmUoJy4uL2Nzcy90cmFuc2Zvcm0tcHJvcHMnKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2Zvcm1Qcm9wcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBaRVJPX05PVF9aRVJPID0gMC4wMDAxO1xuXG5mdW5jdGlvbiBidWlsZChzdGF0ZSwgb3JpZ2luKSB7XG4gICAgdmFyIHByb3BzID0ge30sXG4gICAgICAgIGhhc1RyYW5zZm9ybSA9IGZhbHNlLFxuICAgICAgICBzY2FsZSA9IHN0YXRlLnNjYWxlICE9PSB1bmRlZmluZWQgPyBzdGF0ZS5zY2FsZSB8fCBaRVJPX05PVF9aRVJPIDogc3RhdGUuc2NhbGVYIHx8IDEsXG4gICAgICAgIHNjYWxlWSA9IHN0YXRlLnNjYWxlWSAhPT0gdW5kZWZpbmVkID8gc3RhdGUuc2NhbGVZIHx8IFpFUk9fTk9UX1pFUk8gOiBzY2FsZSB8fCAxLFxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW5YID0gb3JpZ2luLngsXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpblkgPSBvcmlnaW4ueSxcbiAgICAgICAgc2NhbGVUcmFuc2Zvcm1YID0gLXRyYW5zZm9ybU9yaWdpblggKiAoc2NhbGUgKiAxKSxcbiAgICAgICAgc2NhbGVUcmFuc2Zvcm1ZID0gLXRyYW5zZm9ybU9yaWdpblkgKiAoc2NhbGVZICogMSksXG4gICAgICAgIHNjYWxlUmVwbGFjZVggPSB0cmFuc2Zvcm1PcmlnaW5YIC8gc2NhbGUsXG4gICAgICAgIHNjYWxlUmVwbGFjZVkgPSB0cmFuc2Zvcm1PcmlnaW5ZIC8gc2NhbGVZLFxuICAgICAgICB0cmFuc2Zvcm0gPSB7XG4gICAgICAgIHRyYW5zbGF0ZTogJ3RyYW5zbGF0ZSgnICsgc3RhdGUudHJhbnNsYXRlWCArICcsICcgKyBzdGF0ZS50cmFuc2xhdGVZICsgJykgJyxcbiAgICAgICAgc2NhbGU6ICd0cmFuc2xhdGUoJyArIHNjYWxlVHJhbnNmb3JtWCArICcsICcgKyBzY2FsZVRyYW5zZm9ybVkgKyAnKSBzY2FsZSgnICsgc2NhbGUgKyAnLCAnICsgc2NhbGVZICsgJykgdHJhbnNsYXRlKCcgKyBzY2FsZVJlcGxhY2VYICsgJywgJyArIHNjYWxlUmVwbGFjZVkgKyAnKSAnLFxuICAgICAgICByb3RhdGU6ICdyb3RhdGUoJyArIHN0YXRlLnJvdGF0ZSArICcsICcgKyB0cmFuc2Zvcm1PcmlnaW5YICsgJywgJyArIHRyYW5zZm9ybU9yaWdpblkgKyAnKSAnLFxuICAgICAgICBza2V3WDogJ3NrZXdYKCcgKyBzdGF0ZS5za2V3WCArICcpICcsXG4gICAgICAgIHNrZXdZOiAnc2tld1koJyArIHN0YXRlLnNrZXdZICsgJykgJ1xuICAgIH07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc3RhdGUpIHtcbiAgICAgICAgaWYgKHN0YXRlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIGlmIChfdHJhbnNmb3JtUHJvcHMyLmRlZmF1bHRba2V5XSkge1xuICAgICAgICAgICAgICAgIGhhc1RyYW5zZm9ybSA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHByb3BzWygwLCBfdXRpbHMuY2FtZWxUb0Rhc2gpKGtleSldID0gc3RhdGVba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChoYXNUcmFuc2Zvcm0pIHtcbiAgICAgICAgcHJvcHMudHJhbnNmb3JtID0gJyc7XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHRyYW5zZm9ybSkge1xuICAgICAgICAgICAgaWYgKHRyYW5zZm9ybS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRlZmF1bHRWYWx1ZSA9IGtleSA9PT0gJ3NjYWxlJyA/ICcxJyA6ICcwJztcbiAgICAgICAgICAgICAgICBwcm9wcy50cmFuc2Zvcm0gKz0gdHJhbnNmb3JtW2tleV0ucmVwbGFjZSgvdW5kZWZpbmVkL2csIGRlZmF1bHRWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcHM7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwzTjJaeTlpZFdsc1pDNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3YTBKQlMzZENMRXRCUVVzN096czdPenM3T3pzN1FVRkdOMElzU1VGQlRTeGhRVUZoTEVkQlFVY3NUVUZCVFN4RFFVRkRPenRCUVVWa0xGTkJRVk1zUzBGQlN5eERRVUZETEV0QlFVc3NSVUZCUlN4TlFVRk5MRVZCUVVVN1FVRkRla01zVVVGQlNTeExRVUZMTEVkQlFVY3NSVUZCUlR0UlFVTldMRmxCUVZrc1IwRkJSeXhMUVVGTE8xRkJRM0JDTEV0QlFVc3NSMEZCUnl4TFFVRkxMRU5CUVVNc1MwRkJTeXhMUVVGTExGTkJRVk1zUjBGQlJ5eExRVUZMTEVOQlFVTXNTMEZCU3l4SlFVRkpMR0ZCUVdFc1IwRkJSeXhMUVVGTExFTkJRVU1zVFVGQlRTeEpRVUZKTEVOQlFVTTdVVUZEY0VZc1RVRkJUU3hIUVVGSExFdEJRVXNzUTBGQlF5eE5RVUZOTEV0QlFVc3NVMEZCVXl4SFFVRkhMRXRCUVVzc1EwRkJReXhOUVVGTkxFbEJRVWtzWVVGQllTeEhRVUZITEV0QlFVc3NTVUZCU1N4RFFVRkRPMUZCUTJoR0xHZENRVUZuUWl4SFFVRkhMRTFCUVUwc1EwRkJReXhEUVVGRE8xRkJRek5DTEdkQ1FVRm5RaXhIUVVGSExFMUJRVTBzUTBGQlF5eERRVUZETzFGQlF6TkNMR1ZCUVdVc1IwRkJSeXhEUVVGRkxHZENRVUZuUWl4SlFVRkpMRXRCUVVzc1IwRkJSeXhEUVVGRExFTkJRVUVzUVVGQlF6dFJRVU5zUkN4bFFVRmxMRWRCUVVjc1EwRkJSU3huUWtGQlowSXNTVUZCU1N4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGQkxFRkJRVU03VVVGRGJrUXNZVUZCWVN4SFFVRkhMR2RDUVVGblFpeEhRVUZITEV0QlFVczdVVUZEZUVNc1lVRkJZU3hIUVVGSExHZENRVUZuUWl4SFFVRkhMRTFCUVUwN1VVRkRla01zVTBGQlV5eEhRVUZITzBGQlExSXNhVUpCUVZNc2FVSkJRV1VzUzBGQlN5eERRVUZETEZWQlFWVXNWVUZCU3l4TFFVRkxMRU5CUVVNc1ZVRkJWU3hQUVVGSk8wRkJRMnBGTEdGQlFVc3NhVUpCUVdVc1pVRkJaU3hWUVVGTExHVkJRV1VzWjBKQlFWY3NTMEZCU3l4VlFVRkxMRTFCUVUwc2IwSkJRV1VzWVVGQllTeFZRVUZMTEdGQlFXRXNUMEZCU1R0QlFVTndTU3hqUVVGTkxHTkJRVmtzUzBGQlN5eERRVUZETEUxQlFVMHNWVUZCU3l4blFrRkJaMElzVlVGQlN5eG5Ra0ZCWjBJc1QwRkJTVHRCUVVNMVJTeGhRVUZMTEdGQlFWY3NTMEZCU3l4RFFVRkRMRXRCUVVzc1QwRkJTVHRCUVVNdlFpeGhRVUZMTEdGQlFWY3NTMEZCU3l4RFFVRkRMRXRCUVVzc1QwRkJTVHRMUVVOc1F5eERRVUZET3p0QlFVVk9MRk5CUVVzc1NVRkJTU3hIUVVGSExFbEJRVWtzUzBGQlN5eEZRVUZGTzBGQlEyNUNMRmxCUVVrc1MwRkJTeXhEUVVGRExHTkJRV01zUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlR0QlFVTXpRaXhuUWtGQlNTeDVRa0ZCWlN4SFFVRkhMRU5CUVVNc1JVRkJSVHRCUVVOeVFpdzBRa0ZCV1N4SFFVRkhMRWxCUVVrc1EwRkJRenRoUVVOMlFpeE5RVUZOTzBGQlEwZ3NjVUpCUVVzc1EwRkJReXhYUVRkQ1lpeFhRVUZYTEVWQk5rSmpMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMkZCUTNoRE8xTkJRMG83UzBGRFNqczdRVUZGUkN4UlFVRkpMRmxCUVZrc1JVRkJSVHRCUVVOa0xHRkJRVXNzUTBGQlF5eFRRVUZUTEVkQlFVY3NSVUZCUlN4RFFVRkRPenRCUVVWeVFpeGhRVUZMTEVsQlFVa3NSMEZCUnl4SlFVRkpMRk5CUVZNc1JVRkJSVHRCUVVOMlFpeG5Ra0ZCU1N4VFFVRlRMRU5CUVVNc1kwRkJZeXhEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTzBGQlF5OUNMRzlDUVVGTkxGbEJRVmtzUjBGQlJ5eEJRVUZETEVkQlFVY3NTMEZCU3l4UFFVRlBMRWRCUVVrc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF6dEJRVU51UkN4eFFrRkJTeXhEUVVGRExGTkJRVk1zU1VGQlNTeFRRVUZUTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExGbEJRVmtzUlVGQlJTeFpRVUZaTEVOQlFVTXNRMEZCUXp0aFFVTjZSVHRUUVVOS08wdEJRMG83TzBGQlJVUXNWMEZCVHl4TFFVRkxMRU5CUVVNN1EwRkRhRUlpTENKbWFXeGxJam9pWW5WcGJHUXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFJRWlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2V5QmpZVzFsYkZSdlJHRnphQ0I5SUdaeWIyMGdKeTR1THk0dUwybHVZeTkxZEdsc2N5YzdYRzVwYlhCdmNuUWdkSEpoYm5ObWIzSnRVSEp2Y0hNZ1puSnZiU0FuTGk0dlkzTnpMM1J5WVc1elptOXliUzF3Y205d2N5YzdYRzVjYm1OdmJuTjBJRnBGVWs5ZlRrOVVYMXBGVWs4Z1BTQXdMakF3TURFN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHWjFibU4wYVc5dUlHSjFhV3hrS0hOMFlYUmxMQ0J2Y21sbmFXNHBJSHRjYmlBZ0lDQnNaWFFnY0hKdmNITWdQU0I3ZlN4Y2JpQWdJQ0FnSUNBZ2FHRnpWSEpoYm5ObWIzSnRJRDBnWm1Gc2MyVXNYRzRnSUNBZ0lDQWdJSE5qWVd4bElEMGdjM1JoZEdVdWMyTmhiR1VnSVQwOUlIVnVaR1ZtYVc1bFpDQS9JSE4wWVhSbExuTmpZV3hsSUh4OElGcEZVazlmVGs5VVgxcEZVazhnT2lCemRHRjBaUzV6WTJGc1pWZ2dmSHdnTVN4Y2JpQWdJQ0FnSUNBZ2MyTmhiR1ZaSUQwZ2MzUmhkR1V1YzJOaGJHVlpJQ0U5UFNCMWJtUmxabWx1WldRZ1B5QnpkR0YwWlM1elkyRnNaVmtnZkh3Z1drVlNUMTlPVDFSZldrVlNUeUE2SUhOallXeGxJSHg4SURFc1hHNGdJQ0FnSUNBZ0lIUnlZVzV6Wm05eWJVOXlhV2RwYmxnZ1BTQnZjbWxuYVc0dWVDeGNiaUFnSUNBZ0lDQWdkSEpoYm5ObWIzSnRUM0pwWjJsdVdTQTlJRzl5YVdkcGJpNTVMRnh1SUNBZ0lDQWdJQ0J6WTJGc1pWUnlZVzV6Wm05eWJWZ2dQU0F0SUhSeVlXNXpabTl5YlU5eWFXZHBibGdnS2lBb2MyTmhiR1VnS2lBeEtTeGNiaUFnSUNBZ0lDQWdjMk5oYkdWVWNtRnVjMlp2Y20xWklEMGdMU0IwY21GdWMyWnZjbTFQY21sbmFXNVpJQ29nS0hOallXeGxXU0FxSURFcExGeHVJQ0FnSUNBZ0lDQnpZMkZzWlZKbGNHeGhZMlZZSUQwZ2RISmhibk5tYjNKdFQzSnBaMmx1V0NBdklITmpZV3hsTEZ4dUlDQWdJQ0FnSUNCelkyRnNaVkpsY0d4aFkyVlpJRDBnZEhKaGJuTm1iM0p0VDNKcFoybHVXU0F2SUhOallXeGxXU3hjYmlBZ0lDQWdJQ0FnZEhKaGJuTm1iM0p0SUQwZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEhKaGJuTnNZWFJsT2lCZ2RISmhibk5zWVhSbEtDUjdjM1JoZEdVdWRISmhibk5zWVhSbFdIMHNJQ1I3YzNSaGRHVXVkSEpoYm5Oc1lYUmxXWDBwSUdBc1hHNGdJQ0FnSUNBZ0lDQWdJQ0J6WTJGc1pUb2dZSFJ5WVc1emJHRjBaU2drZTNOallXeGxWSEpoYm5ObWIzSnRXSDBzSUNSN2MyTmhiR1ZVY21GdWMyWnZjbTFaZlNrZ2MyTmhiR1VvSkh0elkyRnNaWDBzSUNSN2MyTmhiR1ZaZlNrZ2RISmhibk5zWVhSbEtDUjdjMk5oYkdWU1pYQnNZV05sV0gwc0lDUjdjMk5oYkdWU1pYQnNZV05sV1gwcElHQXNYRzRnSUNBZ0lDQWdJQ0FnSUNCeWIzUmhkR1U2SUdCeWIzUmhkR1VvSkh0emRHRjBaUzV5YjNSaGRHVjlMQ0FrZTNSeVlXNXpabTl5YlU5eWFXZHBibGg5TENBa2UzUnlZVzV6Wm05eWJVOXlhV2RwYmxsOUtTQmdMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2MydGxkMWc2SUdCemEyVjNXQ2drZTNOMFlYUmxMbk5yWlhkWWZTa2dZQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lITnJaWGRaT2lCZ2MydGxkMWtvSkh0emRHRjBaUzV6YTJWM1dYMHBJR0JjYmlBZ0lDQWdJQ0FnZlR0Y2JseHVJQ0FnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUJ6ZEdGMFpTa2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb2MzUmhkR1V1YUdGelQzZHVVSEp2Y0dWeWRIa29hMlY1S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIUnlZVzV6Wm05eWJWQnliM0J6VzJ0bGVWMHBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JvWVhOVWNtRnVjMlp2Y20wZ1BTQjBjblZsTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQndjbTl3YzF0allXMWxiRlJ2UkdGemFDaHJaWGtwWFNBOUlITjBZWFJsVzJ0bGVWMDdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNCcFppQW9hR0Z6VkhKaGJuTm1iM0p0S1NCN1hHNGdJQ0FnSUNBZ0lIQnliM0J6TG5SeVlXNXpabTl5YlNBOUlDY25PMXh1WEc0Z0lDQWdJQ0FnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUIwY21GdWMyWnZjbTBwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMGNtRnVjMlp2Y20wdWFHRnpUM2R1VUhKdmNHVnlkSGtvYTJWNUtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElHUmxabUYxYkhSV1lXeDFaU0E5SUNoclpYa2dQVDA5SUNkelkyRnNaU2NwSUQ4Z0p6RW5JRG9nSnpBbk8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIQnliM0J6TG5SeVlXNXpabTl5YlNBclBTQjBjbUZ1YzJadmNtMWJhMlY1WFM1eVpYQnNZV05sS0M5MWJtUmxabWx1WldRdlp5d2daR1ZtWVhWc2RGWmhiSFZsS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJSEpsZEhWeWJpQndjbTl3Y3p0Y2JuMGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hZGFwdGVyL3N2Zy9idWlsZC5qc1xuICoqIG1vZHVsZSBpZCA9IDQyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfYW5nbGUgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9hbmdsZScpO1xuXG52YXIgX2FuZ2xlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FuZ2xlKTtcblxudmFyIF9hbHBoYSA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL2FscGhhJyk7XG5cbnZhciBfYWxwaGEyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWxwaGEpO1xuXG52YXIgX2F4ZXMgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9heGVzJyk7XG5cbnZhciBfYXhlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9heGVzKTtcblxudmFyIF9jb2xvciA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL2NvbG9yJyk7XG5cbnZhciBfY29sb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29sb3IpO1xuXG52YXIgX3NjYWxlID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvc2NhbGUnKTtcblxudmFyIF9zY2FsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zY2FsZSk7XG5cbnZhciBfc2hhZG93ID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvc2hhZG93Jyk7XG5cbnZhciBfc2hhZG93MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NoYWRvdyk7XG5cbnZhciBfcG9zaXRpb25zID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvcG9zaXRpb25zJyk7XG5cbnZhciBfcG9zaXRpb25zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc2l0aW9ucyk7XG5cbnZhciBfcHggPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9weCcpO1xuXG52YXIgX3B4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3B4KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIC8vIENvbG9yIHByb3BzXG4gICAgY29sb3I6IF9jb2xvcjIuZGVmYXVsdCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IF9jb2xvcjIuZGVmYXVsdCxcbiAgICBvdXRsaW5lQ29sb3I6IF9jb2xvcjIuZGVmYXVsdCxcbiAgICBmaWxsOiBfY29sb3IyLmRlZmF1bHQsXG4gICAgc3Ryb2tlOiBfY29sb3IyLmRlZmF1bHQsXG5cbiAgICAvLyBCb3JkZXIgcHJvcHNcbiAgICBib3JkZXJDb2xvcjogX2NvbG9yMi5kZWZhdWx0LFxuICAgIGJvcmRlclRvcENvbG9yOiBfY29sb3IyLmRlZmF1bHQsXG4gICAgYm9yZGVyUmlnaHRDb2xvcjogX2NvbG9yMi5kZWZhdWx0LFxuICAgIGJvcmRlckJvdHRvbUNvbG9yOiBfY29sb3IyLmRlZmF1bHQsXG4gICAgYm9yZGVyTGVmdENvbG9yOiBfY29sb3IyLmRlZmF1bHQsXG4gICAgYm9yZGVyUmFkaXVzOiBfcHgyLmRlZmF1bHQsXG5cbiAgICAvLyBQb3NpdGlvbmluZ1xuICAgIG1hcmdpbjogX3Bvc2l0aW9uczIuZGVmYXVsdCxcbiAgICBwYWRkaW5nOiBfcG9zaXRpb25zMi5kZWZhdWx0LFxuICAgIHdpZHRoOiBfcHgyLmRlZmF1bHQsXG4gICAgaGVpZ2h0OiBfcHgyLmRlZmF1bHQsXG5cbiAgICAvLyBBeGVzXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiBfYXhlczIuZGVmYXVsdCxcbiAgICBwZXJzcGVjdGl2ZU9yaWdpbjogX2F4ZXMyLmRlZmF1bHQsXG4gICAgdHJhbnNmb3JtT3JpZ2luOiBfYXhlczIuZGVmYXVsdCxcblxuICAgIC8vIFNoYWRvd3NcbiAgICB0ZXh0U2hhZG93OiBfc2hhZG93Mi5kZWZhdWx0LFxuICAgIGJveFNoYWRvdzogX3NoYWRvdzIuZGVmYXVsdCxcblxuICAgIC8vIFRyYW5zZm9ybSBwcm9wZXJ0aWVzXG4gICAgcm90YXRlOiBfYW5nbGUyLmRlZmF1bHQsXG4gICAgcm90YXRlWDogX2FuZ2xlMi5kZWZhdWx0LFxuICAgIHJvdGF0ZVk6IF9hbmdsZTIuZGVmYXVsdCxcbiAgICByb3RhdGVaOiBfYW5nbGUyLmRlZmF1bHQsXG4gICAgc2NhbGU6IF9zY2FsZTIuZGVmYXVsdCxcbiAgICBzY2FsZVg6IF9zY2FsZTIuZGVmYXVsdCxcbiAgICBzY2FsZVk6IF9zY2FsZTIuZGVmYXVsdCxcbiAgICBzY2FsZVo6IF9zY2FsZTIuZGVmYXVsdCxcbiAgICBza2V3WDogX2FuZ2xlMi5kZWZhdWx0LFxuICAgIHNrZXdZOiBfYW5nbGUyLmRlZmF1bHQsXG4gICAgZGlzdGFuY2U6IF9weDIuZGVmYXVsdCxcbiAgICB0cmFuc2xhdGVYOiBfcHgyLmRlZmF1bHQsXG4gICAgdHJhbnNsYXRlWTogX3B4Mi5kZWZhdWx0LFxuICAgIHRyYW5zbGF0ZVo6IF9weDIuZGVmYXVsdCxcbiAgICBwZXJzcGVjdGl2ZTogX3B4Mi5kZWZhdWx0LFxuICAgIG9wYWNpdHk6IF9hbHBoYTIuZGVmYXVsdFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFpHRndkR1Z5TDJOemN5OTJZV3gxWlMxMGVYQmxMVzFoY0M1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096dHJRa0ZUWlRzN1FVRkZXQ3hUUVVGTExHbENRVUZQTzBGQlExb3NiVUpCUVdVc2FVSkJRVTg3UVVGRGRFSXNaMEpCUVZrc2FVSkJRVTg3UVVGRGJrSXNVVUZCU1N4cFFrRkJUenRCUVVOWUxGVkJRVTBzYVVKQlFVODdPenRCUVVkaUxHVkJRVmNzYVVKQlFVODdRVUZEYkVJc2EwSkJRV01zYVVKQlFVODdRVUZEY2tJc2IwSkJRV2RDTEdsQ1FVRlBPMEZCUTNaQ0xIRkNRVUZwUWl4cFFrRkJUenRCUVVONFFpeHRRa0ZCWlN4cFFrRkJUenRCUVVOMFFpeG5Ra0ZCV1N4alFVRkpPenM3UVVGSGFFSXNWVUZCVFN4eFFrRkJWenRCUVVOcVFpeFhRVUZQTEhGQ1FVRlhPMEZCUTJ4Q0xGTkJRVXNzWTBGQlNUdEJRVU5VTEZWQlFVMHNZMEZCU1RzN08wRkJSMVlzYzBKQlFXdENMR2RDUVVGTk8wRkJRM2hDTEhGQ1FVRnBRaXhuUWtGQlRUdEJRVU4yUWl4dFFrRkJaU3huUWtGQlRUczdPMEZCUjNKQ0xHTkJRVlVzYTBKQlFWRTdRVUZEYkVJc1lVRkJVeXhyUWtGQlVUczdPMEZCUjJwQ0xGVkJRVTBzYVVKQlFVODdRVUZEWWl4WFFVRlBMR2xDUVVGUE8wRkJRMlFzVjBGQlR5eHBRa0ZCVHp0QlFVTmtMRmRCUVU4c2FVSkJRVTg3UVVGRFpDeFRRVUZMTEdsQ1FVRlBPMEZCUTFvc1ZVRkJUU3hwUWtGQlR6dEJRVU5pTEZWQlFVMHNhVUpCUVU4N1FVRkRZaXhWUVVGTkxHbENRVUZQTzBGQlEySXNVMEZCU3l4cFFrRkJUenRCUVVOYUxGTkJRVXNzYVVKQlFVODdRVUZEV2l4WlFVRlJMR05CUVVrN1FVRkRXaXhqUVVGVkxHTkJRVWs3UVVGRFpDeGpRVUZWTEdOQlFVazdRVUZEWkN4alFVRlZMR05CUVVrN1FVRkRaQ3hsUVVGWExHTkJRVWs3UVVGRFppeFhRVUZQTEdsQ1FVRlBPME5CUTJwQ0lpd2labWxzWlNJNkluWmhiSFZsTFhSNWNHVXRiV0Z3TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMFVHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJR0Z1WjJ4bElHWnliMjBnSnk0dUx5NHVMM1poYkhWbExYUjVjR1Z6TDJGdVoyeGxKenRjYm1sdGNHOXlkQ0JoYkhCb1lTQm1jbTl0SUNjdUxpOHVMaTkyWVd4MVpTMTBlWEJsY3k5aGJIQm9ZU2M3WEc1cGJYQnZjblFnWVhobGN5Qm1jbTl0SUNjdUxpOHVMaTkyWVd4MVpTMTBlWEJsY3k5aGVHVnpKenRjYm1sdGNHOXlkQ0JqYjJ4dmNpQm1jbTl0SUNjdUxpOHVMaTkyWVd4MVpTMTBlWEJsY3k5amIyeHZjaWM3WEc1cGJYQnZjblFnYzJOaGJHVWdabkp2YlNBbkxpNHZMaTR2ZG1Gc2RXVXRkSGx3WlhNdmMyTmhiR1VuTzF4dWFXMXdiM0owSUhOb1lXUnZkeUJtY205dElDY3VMaTh1TGk5MllXeDFaUzEwZVhCbGN5OXphR0ZrYjNjbk8xeHVhVzF3YjNKMElIQnZjMmwwYVc5dWN5Qm1jbTl0SUNjdUxpOHVMaTkyWVd4MVpTMTBlWEJsY3k5d2IzTnBkR2x2Ym5Nbk8xeHVhVzF3YjNKMElIQjRJR1p5YjIwZ0p5NHVMeTR1TDNaaGJIVmxMWFI1Y0dWekwzQjRKenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnZTF4dUlDQWdJQzh2SUVOdmJHOXlJSEJ5YjNCelhHNGdJQ0FnWTI5c2IzSTZJR052Ykc5eUxGeHVJQ0FnSUdKaFkydG5jbTkxYm1SRGIyeHZjam9nWTI5c2IzSXNYRzRnSUNBZ2IzVjBiR2x1WlVOdmJHOXlPaUJqYjJ4dmNpeGNiaUFnSUNCbWFXeHNPaUJqYjJ4dmNpeGNiaUFnSUNCemRISnZhMlU2SUdOdmJHOXlMRnh1WEc0Z0lDQWdMeThnUW05eVpHVnlJSEJ5YjNCelhHNGdJQ0FnWW05eVpHVnlRMjlzYjNJNklHTnZiRzl5TEZ4dUlDQWdJR0p2Y21SbGNsUnZjRU52Ykc5eU9pQmpiMnh2Y2l4Y2JpQWdJQ0JpYjNKa1pYSlNhV2RvZEVOdmJHOXlPaUJqYjJ4dmNpeGNiaUFnSUNCaWIzSmtaWEpDYjNSMGIyMURiMnh2Y2pvZ1kyOXNiM0lzWEc0Z0lDQWdZbTl5WkdWeVRHVm1kRU52Ykc5eU9pQmpiMnh2Y2l4Y2JpQWdJQ0JpYjNKa1pYSlNZV1JwZFhNNklIQjRMRnh1WEc0Z0lDQWdMeThnVUc5emFYUnBiMjVwYm1kY2JpQWdJQ0J0WVhKbmFXNDZJSEJ2YzJsMGFXOXVjeXhjYmlBZ0lDQndZV1JrYVc1bk9pQndiM05wZEdsdmJuTXNYRzRnSUNBZ2QybGtkR2c2SUhCNExGeHVJQ0FnSUdobGFXZG9kRG9nY0hnc1hHNWNiaUFnSUNBdkx5QkJlR1Z6WEc0Z0lDQWdZbUZqYTJkeWIzVnVaRkJ2YzJsMGFXOXVPaUJoZUdWekxGeHVJQ0FnSUhCbGNuTndaV04wYVhabFQzSnBaMmx1T2lCaGVHVnpMRnh1SUNBZ0lIUnlZVzV6Wm05eWJVOXlhV2RwYmpvZ1lYaGxjeXhjYmx4dUlDQWdJQzh2SUZOb1lXUnZkM05jYmlBZ0lDQjBaWGgwVTJoaFpHOTNPaUJ6YUdGa2IzY3NYRzRnSUNBZ1ltOTRVMmhoWkc5M09pQnphR0ZrYjNjc0lDQWdYRzVjYmlBZ0lDQXZMeUJVY21GdWMyWnZjbTBnY0hKdmNHVnlkR2xsYzF4dUlDQWdJSEp2ZEdGMFpUb2dZVzVuYkdVc1hHNGdJQ0FnY205MFlYUmxXRG9nWVc1bmJHVXNYRzRnSUNBZ2NtOTBZWFJsV1RvZ1lXNW5iR1VzWEc0Z0lDQWdjbTkwWVhSbFdqb2dZVzVuYkdVc1hHNGdJQ0FnYzJOaGJHVTZJSE5qWVd4bExGeHVJQ0FnSUhOallXeGxXRG9nYzJOaGJHVXNYRzRnSUNBZ2MyTmhiR1ZaT2lCelkyRnNaU3hjYmlBZ0lDQnpZMkZzWlZvNklITmpZV3hsTEZ4dUlDQWdJSE5yWlhkWU9pQmhibWRzWlN4Y2JpQWdJQ0J6YTJWM1dUb2dZVzVuYkdVc1hHNGdJQ0FnWkdsemRHRnVZMlU2SUhCNExGeHVJQ0FnSUhSeVlXNXpiR0YwWlZnNklIQjRMRnh1SUNBZ0lIUnlZVzV6YkdGMFpWazZJSEI0TEZ4dUlDQWdJSFJ5WVc1emJHRjBaVm82SUhCNExGeHVJQ0FnSUhCbGNuTndaV04wYVhabE9pQndlQ3hjYmlBZ0lDQnZjR0ZqYVhSNU9pQmhiSEJvWVZ4dWZUc2lYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hZGFwdGVyL2Nzcy92YWx1ZS10eXBlLW1hcC5qc1xuICoqIG1vZHVsZSBpZCA9IDQzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgY2FjaGUgPSB7fTtcbnZhciBwcmVmaXhlcyA9IFsnV2Via2l0JywgJ01veicsICdPJywgJ21zJywgJyddO1xudmFyIG51bVByZWZpeGVzID0gcHJlZml4ZXMubGVuZ3RoO1xudmFyIHRlc3RFbGVtZW50ID0gdW5kZWZpbmVkO1xuXG4vKlxuICAgIFRlc3Qgc3R5bGUgcHJvcGVydHkgZm9yIHByZWZpeGVkIHZlcnNpb25cbiAgICBcbiAgICBAcGFyYW0gW3N0cmluZ106IFN0eWxlIHByb3BlcnR5XG4gICAgQHJldHVybiBbc3RyaW5nXTogQ2FjaGVkIHByb3BlcnR5IG5hbWVcbiovXG52YXIgdGVzdFByZWZpeCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICB0ZXN0RWxlbWVudCA9IHRlc3RFbGVtZW50IHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgaWYgKGNhY2hlW2tleV0gPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjYWNoZVtrZXldID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1QcmVmaXhlczsgaSsrKSB7XG4gICAgICAgIHZhciBwcmVmaXggPSBwcmVmaXhlc1tpXSxcbiAgICAgICAgICAgIHByZWZpeGVkID0gcHJlZml4ID09PSAnJyA/IGtleSA6IHByZWZpeCArIGtleS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGtleS5zbGljZSgxKTtcblxuICAgICAgICBpZiAocHJlZml4ZWQgaW4gdGVzdEVsZW1lbnQuc3R5bGUpIHtcbiAgICAgICAgICAgIGNhY2hlW2tleV0gPSBwcmVmaXhlZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjYWNoZVtrZXldO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBjYWNoZVtrZXldIHx8IHRlc3RQcmVmaXgoa2V5KTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwyTnpjeTl3Y21WbWFYaGxjaTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN1FVRkJRU3hKUVVGTkxFdEJRVXNzUjBGQlJ5eEZRVUZGTEVOQlFVTTdRVUZEYWtJc1NVRkJUU3hSUVVGUkxFZEJRVWNzUTBGQlF5eFJRVUZSTEVWQlFVTXNTMEZCU3l4RlFVRkRMRWRCUVVjc1JVRkJReXhKUVVGSkxFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTTdRVUZETDBNc1NVRkJUU3hYUVVGWExFZEJRVWNzVVVGQlVTeERRVUZETEUxQlFVMHNRMEZCUXp0QlFVTndReXhKUVVGSkxGZEJRVmNzV1VGQlFUczdPenM3T3pzN1FVRkJReXhCUVZGb1FpeEpRVUZOTEZWQlFWVXNSMEZCUnl4VlFVRkRMRWRCUVVjc1JVRkJTenRCUVVONFFpeGxRVUZYTEVkQlFVY3NWMEZCVnl4SlFVRkpMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdPMEZCUlRORUxGRkJRVWtzUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRXRCUVVzc1JVRkJSVHRCUVVOMFFpeGxRVUZQTEV0QlFVc3NRMEZCUXp0TFFVTm9RaXhOUVVGTk8wRkJRMGdzWVVGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRXRCUVVzc1EwRkJRenRMUVVOMFFqczdRVUZGUkN4VFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NWMEZCVnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8wRkJRMnhETEZsQlFVa3NUVUZCVFN4SFFVRkhMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGNFSXNVVUZCVVN4SFFVRkhMRUZCUVVNc1RVRkJUU3hMUVVGTExFVkJRVVVzUjBGQlNTeEhRVUZITEVkQlFVY3NUVUZCVFN4SFFVRkhMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNWMEZCVnl4RlFVRkZMRWRCUVVjc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXpzN1FVRkZNMFlzV1VGQlNTeFJRVUZSTEVsQlFVa3NWMEZCVnl4RFFVRkRMRXRCUVVzc1JVRkJSVHRCUVVNdlFpeHBRa0ZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExGRkJRVkVzUTBGQlF6dFRRVU42UWp0TFFVTktPenRCUVVWRUxGZEJRVThzUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPME5CUTNKQ0xFTkJRVU03TzJ0Q1FVVmhMRlZCUVVNc1IwRkJSenRYUVVGTExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4VlFVRlZMRU5CUVVNc1IwRkJSeXhEUVVGRE8wTkJRVUVpTENKbWFXeGxJam9pY0hKbFptbDRaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhSUVpYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpqYjI1emRDQmpZV05vWlNBOUlIdDlPMXh1WTI5dWMzUWdjSEpsWm1sNFpYTWdQU0JiSjFkbFltdHBkQ2NzSjAxdmVpY3NKMDhuTENkdGN5Y3NJQ2NuWFR0Y2JtTnZibk4wSUc1MWJWQnlaV1pwZUdWeklEMGdjSEpsWm1sNFpYTXViR1Z1WjNSb08xeHViR1YwSUhSbGMzUkZiR1Z0Wlc1ME8xeHVYRzR2S2x4dUlDQWdJRlJsYzNRZ2MzUjViR1VnY0hKdmNHVnlkSGtnWm05eUlIQnlaV1pwZUdWa0lIWmxjbk5wYjI1Y2JpQWdJQ0JjYmlBZ0lDQkFjR0Z5WVcwZ1czTjBjbWx1WjEwNklGTjBlV3hsSUhCeWIzQmxjblI1WEc0Z0lDQWdRSEpsZEhWeWJpQmJjM1J5YVc1blhUb2dRMkZqYUdWa0lIQnliM0JsY25SNUlHNWhiV1ZjYmlvdlhHNWpiMjV6ZENCMFpYTjBVSEpsWm1sNElEMGdLR3RsZVNrZ1BUNGdlMXh1SUNBZ0lIUmxjM1JGYkdWdFpXNTBJRDBnZEdWemRFVnNaVzFsYm5RZ2ZId2daRzlqZFcxbGJuUXVZM0psWVhSbFJXeGxiV1Z1ZENnblpHbDJKeWs3WEc1Y2JpQWdJQ0JwWmlBb1kyRmphR1ZiYTJWNVhTQTlQVDBnWm1Gc2MyVXBJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR1poYkhObE8xeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUdOaFkyaGxXMnRsZVYwZ1BTQm1ZV3h6WlR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JtYjNJZ0tIWmhjaUJwSUQwZ01Ec2dhU0E4SUc1MWJWQnlaV1pwZUdWek95QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ2RtRnlJSEJ5WldacGVDQTlJSEJ5WldacGVHVnpXMmxkTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdjSEpsWm1sNFpXUWdQU0FvY0hKbFptbDRJRDA5UFNBbkp5a2dQeUJyWlhrZ09pQndjbVZtYVhnZ0t5QnJaWGt1WTJoaGNrRjBLREFwTG5SdlZYQndaWEpEWVhObEtDa2dLeUJyWlhrdWMyeHBZMlVvTVNrN1hHNWNiaUFnSUNBZ0lDQWdhV1lnS0hCeVpXWnBlR1ZrSUdsdUlIUmxjM1JGYkdWdFpXNTBMbk4wZVd4bEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCallXTm9aVnRyWlhsZElEMGdjSEpsWm1sNFpXUTdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzRnSUNBZ1hHNGdJQ0FnY21WMGRYSnVJR05oWTJobFcydGxlVjA3WEc1OU8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQW9hMlY1S1NBOVBpQmpZV05vWlZ0clpYbGRJSHg4SUhSbGMzUlFjbVZtYVhnb2EyVjVLVHNpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9jc3MvcHJlZml4ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA0NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzID0gcmVxdWlyZSgnLi90cmFuc2Zvcm0tcHJvcHMnKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2Zvcm1Qcm9wcyk7XG5cbnZhciBfcHJlZml4ZXIgPSByZXF1aXJlKCcuL3ByZWZpeGVyJyk7XG5cbnZhciBfcHJlZml4ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlZml4ZXIpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vLi4vaW5jL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBUUkFOU0xBVEVfWiA9ICd0cmFuc2xhdGVaJztcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHN0YXRlLCBkaXNhYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pIHtcbiAgICB2YXIgcHJvcGVydHlTdHJpbmcgPSAnJztcbiAgICB2YXIgdHJhbnNmb3JtU3RyaW5nID0gJyc7XG4gICAgdmFyIHRyYW5zZm9ybUhhc1ogPSBmYWxzZTtcblxuICAgIGZvciAodmFyIGtleSBpbiBzdGF0ZSkge1xuICAgICAgICBpZiAoc3RhdGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gc3RhdGVba2V5XTtcblxuICAgICAgICAgICAgaWYgKF90cmFuc2Zvcm1Qcm9wczIuZGVmYXVsdFtrZXldKSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtU3RyaW5nICs9IGtleSArICcoJyArIHZhbHVlICsgJykgJztcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1IYXNaID0ga2V5ID09PSBUUkFOU0xBVEVfWiA/IHRydWUgOiB0cmFuc2Zvcm1IYXNaO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eVN0cmluZyArPSAnOycgKyAoMCwgX3ByZWZpeGVyMi5kZWZhdWx0KSgoMCwgX3V0aWxzLmNhbWVsVG9EYXNoKShrZXkpKSArICc6JyArIHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRyYW5zZm9ybVN0cmluZyAhPT0gJycpIHtcbiAgICAgICAgaWYgKCF0cmFuc2Zvcm1IYXNaICYmICFkaXNhYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybVN0cmluZyArPSBUUkFOU0xBVEVfWiArICcoMHB4KSc7XG4gICAgICAgIH1cblxuICAgICAgICBwcm9wZXJ0eVN0cmluZyArPSAnOycgKyAoMCwgX3ByZWZpeGVyMi5kZWZhdWx0KSgndHJhbnNmb3JtJykgKyAnOicgKyB0cmFuc2Zvcm1TdHJpbmc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5U3RyaW5nO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFpHRndkR1Z5TDJOemN5OWlkV2xzWkM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3T3pzN096czdPenM3TzBGQlNVRXNTVUZCVFN4WFFVRlhMRWRCUVVjc1dVRkJXU3hEUVVGRE96dHJRa0ZGYkVJc1ZVRkJReXhMUVVGTExFVkJRVVVzTWtKQlFUSkNMRVZCUVVzN1FVRkRia1FzVVVGQlNTeGpRVUZqTEVkQlFVY3NSVUZCUlN4RFFVRkRPMEZCUTNoQ0xGRkJRVWtzWlVGQlpTeEhRVUZITEVWQlFVVXNRMEZCUXp0QlFVTjZRaXhSUVVGSkxHRkJRV0VzUjBGQlJ5eExRVUZMTEVOQlFVTTdPMEZCUlRGQ0xGTkJRVXNzU1VGQlNTeEhRVUZITEVsQlFVa3NTMEZCU3l4RlFVRkZPMEZCUTI1Q0xGbEJRVWtzUzBGQlN5eERRVUZETEdOQlFXTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSVHRCUVVNelFpeG5Ra0ZCVFN4TFFVRkxMRWRCUVVjc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZET3p0QlFVVjZRaXhuUWtGQlNTeDVRa0ZCWlN4SFFVRkhMRU5CUVVNc1JVRkJSVHRCUVVOeVFpd3JRa0ZCWlN4SlFVRkpMRWRCUVVjc1IwRkJSeXhIUVVGSExFZEJRVWNzUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXp0QlFVTTFReXcyUWtGQllTeEhRVUZITEVGQlFVTXNSMEZCUnl4TFFVRkxMRmRCUVZjc1IwRkJTU3hKUVVGSkxFZEJRVWNzWVVGQllTeERRVUZETzJGQlJXaEZMRTFCUVUwN1FVRkRTQ3c0UWtGQll5eEpRVUZKTEVkQlFVY3NSMEZCUnl4M1FrRkJVeXhYUVd4Q2VFTXNWMEZCVnl4RlFXdENlVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1MwRkJTeXhEUVVGRE8yRkJRM0JGTzFOQlEwbzdTMEZEU2pzN1FVRkZSQ3hSUVVGSkxHVkJRV1VzUzBGQlN5eEZRVUZGTEVWQlFVVTdRVUZEZUVJc1dVRkJTU3hEUVVGRExHRkJRV0VzU1VGQlNTeERRVUZETERKQ1FVRXlRaXhGUVVGRk8wRkJRMmhFTERKQ1FVRmxMRWxCUVVrc1YwRkJWeXhIUVVGSExFOUJRVThzUTBGQlF6dFRRVU0xUXpzN1FVRkZSQ3h6UWtGQll5eEpRVUZKTEVkQlFVY3NSMEZCUnl4M1FrRkJVeXhYUVVGWExFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NaVUZCWlN4RFFVRkRPMHRCUTNwRk96dEJRVVZFTEZkQlFVOHNZMEZCWXl4RFFVRkRPME5CUTNwQ0lpd2labWxzWlNJNkltSjFhV3hrTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMFVHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSFJ5WVc1elptOXliVkJ5YjNCeklHWnliMjBnSnk0dmRISmhibk5tYjNKdExYQnliM0J6Snp0Y2JtbHRjRzl5ZENCd2NtVm1hWGhsY2lCbWNtOXRJQ2N1TDNCeVpXWnBlR1Z5Snp0Y2JtbHRjRzl5ZENCN0lHTmhiV1ZzVkc5RVlYTm9JSDBnWm5KdmJTQW5MaTR2TGk0dmFXNWpMM1YwYVd4ekp6dGNibHh1WTI5dWMzUWdWRkpCVGxOTVFWUkZYMW9nUFNBbmRISmhibk5zWVhSbFdpYzdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJQ2h6ZEdGMFpTd2daR2x6WVdKc1pVaGhjbVIzWVhKbFFXTmpaV3hsY21GMGFXOXVLU0E5UGlCN1hHNGdJQ0FnYkdWMElIQnliM0JsY25SNVUzUnlhVzVuSUQwZ0p5YzdYRzRnSUNBZ2JHVjBJSFJ5WVc1elptOXliVk4wY21sdVp5QTlJQ2NuTzF4dUlDQWdJR3hsZENCMGNtRnVjMlp2Y20xSVlYTmFJRDBnWm1Gc2MyVTdYRzVjYmlBZ0lDQm1iM0lnS0d4bGRDQnJaWGtnYVc0Z2MzUmhkR1VwSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLSE4wWVhSbExtaGhjMDkzYmxCeWIzQmxjblI1S0d0bGVTa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUhaaGJIVmxJRDBnYzNSaGRHVmJhMlY1WFR0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIUnlZVzV6Wm05eWJWQnliM0J6VzJ0bGVWMHBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwY21GdWMyWnZjbTFUZEhKcGJtY2dLejBnYTJWNUlDc2dKeWduSUNzZ2RtRnNkV1VnS3lBbktTQW5PMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJ5WVc1elptOXliVWhoYzFvZ1BTQW9hMlY1SUQwOVBTQlVVa0ZPVTB4QlZFVmZXaWtnUHlCMGNuVmxJRG9nZEhKaGJuTm1iM0p0U0dGeldqdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCd2NtOXdaWEowZVZOMGNtbHVaeUFyUFNBbk95Y2dLeUJ3Y21WbWFYaGxjaWhqWVcxbGJGUnZSR0Z6YUNoclpYa3BLU0FySUNjNkp5QXJJSFpoYkhWbE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnYVdZZ0tIUnlZVzV6Wm05eWJWTjBjbWx1WnlBaFBUMGdKeWNwSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLQ0YwY21GdWMyWnZjbTFJWVhOYUlDWW1JQ0ZrYVhOaFlteGxTR0Z5WkhkaGNtVkJZMk5sYkdWeVlYUnBiMjRwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJ5WVc1elptOXliVk4wY21sdVp5QXJQU0JVVWtGT1UweEJWRVZmV2lBcklDY29NSEI0S1NjN1hHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0J3Y205d1pYSjBlVk4wY21sdVp5QXJQU0FuT3ljZ0t5QndjbVZtYVhobGNpZ25kSEpoYm5ObWIzSnRKeWtnS3lBbk9pY2dLeUIwY21GdWMyWnZjbTFUZEhKcGJtYzdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NtVjBkWEp1SUhCeWIzQmxjblI1VTNSeWFXNW5PMXh1ZlRzaVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FkYXB0ZXIvY3NzL2J1aWxkLmpzXG4gKiogbW9kdWxlIGlkID0gNDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9kaWN0aW9uYXJ5ID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvc2V0dGluZ3MvZGljdGlvbmFyeScpO1xuXG52YXIgdHJhbnNmb3JtUHJvcHMgPSB7fTtcblxudmFyIFNDQUxFID0gJ3NjYWxlJztcbnZhciBST1RBVEUgPSAncm90YXRlJztcbnZhciBUUkFOU0ZPUk1fUEVSU1BFQ1RJVkUgPSAndHJhbnNmb3JtUGVyc3BlY3RpdmUnO1xudmFyIFRFUk1TID0gWyd0cmFuc2xhdGUnLCBTQ0FMRSwgUk9UQVRFLCAnc2tldycsIFRSQU5TRk9STV9QRVJTUEVDVElWRV07XG5cbnRyYW5zZm9ybVByb3BzW1JPVEFURV0gPSB0cmFuc2Zvcm1Qcm9wc1tTQ0FMRV0gPSB0cmFuc2Zvcm1Qcm9wc1tUUkFOU0ZPUk1fUEVSU1BFQ1RJVkVdID0gdHJ1ZTtcblxuVEVSTVMuZm9yRWFjaChmdW5jdGlvbiAodGVybSkge1xuICByZXR1cm4gX2RpY3Rpb25hcnkuYXhlcy5mb3JFYWNoKGZ1bmN0aW9uIChheGlzKSB7XG4gICAgcmV0dXJuIHRyYW5zZm9ybVByb3BzW3Rlcm0gKyBheGlzXSA9IHRydWU7XG4gIH0pO1xufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHRyYW5zZm9ybVByb3BzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMMk56Y3k5MGNtRnVjMlp2Y20wdGNISnZjSE11YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPMEZCUlVFc1NVRkJTU3hqUVVGakxFZEJRVWNzUlVGQlJTeERRVUZET3p0QlFVVjRRaXhKUVVGTkxFdEJRVXNzUjBGQlJ5eFBRVUZQTEVOQlFVTTdRVUZEZEVJc1NVRkJUU3hOUVVGTkxFZEJRVWNzVVVGQlVTeERRVUZETzBGQlEzaENMRWxCUVUwc2NVSkJRWEZDTEVkQlFVY3NjMEpCUVhOQ0xFTkJRVU03UVVGRGNrUXNTVUZCVFN4TFFVRkxMRWRCUVVjc1EwRkJReXhYUVVGWExFVkJRVVVzUzBGQlN5eEZRVUZGTEUxQlFVMHNSVUZCUlN4TlFVRk5MRVZCUVVVc2NVSkJRWEZDTEVOQlFVTXNRMEZCUXpzN1FVRkZNVVVzWTBGQll5eERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMR05CUVdNc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eGpRVUZqTEVOQlFVTXNjVUpCUVhGQ0xFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTTdPMEZCUlRsR0xFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNWVUZCUXl4SlFVRkpPMU5CUVVzc1dVRllaaXhKUVVGSkxFTkJWMmRDTEU5QlFVOHNRMEZCUXl4VlFVRkRMRWxCUVVrN1YwRkJTeXhqUVVGakxFTkJRVU1zU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXl4SFFVRkhMRWxCUVVrN1IwRkJRU3hEUVVGRE8wTkJRVUVzUTBGQlF5eERRVUZET3p0clFrRkZja1VzWTBGQll5SXNJbVpwYkdVaU9pSjBjbUZ1YzJadmNtMHRjSEp2Y0hNdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUlFaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZXlCaGVHVnpJSDBnWm5KdmJTQW5MaTR2TGk0dmRtRnNkV1V0ZEhsd1pYTXZjMlYwZEdsdVozTXZaR2xqZEdsdmJtRnllU2M3WEc1Y2JteGxkQ0IwY21GdWMyWnZjbTFRY205d2N5QTlJSHQ5TzF4dVhHNWpiMjV6ZENCVFEwRk1SU0E5SUNkelkyRnNaU2M3WEc1amIyNXpkQ0JTVDFSQlZFVWdQU0FuY205MFlYUmxKenRjYm1OdmJuTjBJRlJTUVU1VFJrOVNUVjlRUlZKVFVFVkRWRWxXUlNBOUlDZDBjbUZ1YzJadmNtMVFaWEp6Y0dWamRHbDJaU2M3WEc1amIyNXpkQ0JVUlZKTlV5QTlJRnNuZEhKaGJuTnNZWFJsSnl3Z1UwTkJURVVzSUZKUFZFRlVSU3dnSjNOclpYY25MQ0JVVWtGT1UwWlBVazFmVUVWU1UxQkZRMVJKVmtWZE8xeHVYRzUwY21GdWMyWnZjbTFRY205d2MxdFNUMVJCVkVWZElEMGdkSEpoYm5ObWIzSnRVSEp2Y0hOYlUwTkJURVZkSUQwZ2RISmhibk5tYjNKdFVISnZjSE5iVkZKQlRsTkdUMUpOWDFCRlVsTlFSVU5VU1ZaRlhTQTlJSFJ5ZFdVN1hHNWNibFJGVWsxVExtWnZja1ZoWTJnb0tIUmxjbTBwSUQwK0lHRjRaWE11Wm05eVJXRmphQ2dvWVhocGN5a2dQVDRnZEhKaGJuTm1iM0p0VUhKdmNITmJkR1Z5YlNBcklHRjRhWE5kSUQwZ2RISjFaU2twTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCMGNtRnVjMlp2Y20xUWNtOXdjenNpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9jc3MvdHJhbnNmb3JtLXByb3BzLmpzXG4gKiogbW9kdWxlIGlkID0gNDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciByZ2IgPSBleHBvcnRzLnJnYiA9IHtcbiAgICBtaW46IDAsXG4gICAgbWF4OiAyNTUsXG4gICAgcm91bmQ6IHRydWVcbn07XG5cbnZhciBvcGFjaXR5ID0gZXhwb3J0cy5vcGFjaXR5ID0ge1xuICAgIG1pbjogMCxcbiAgICBtYXg6IDFcbn07XG5cbnZhciBwZXJjZW50ID0gZXhwb3J0cy5wZXJjZW50ID0ge1xuICAgIG1pbjogMCxcbiAgICBtYXg6IDEwMCxcbiAgICB1bml0OiAnJSdcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTl6WlhSMGFXNW5jeTlrWldaaGRXeDBMWEJ5YjNCekxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenRCUVVGUExFbEJRVTBzUjBGQlJ5eFhRVUZJTEVkQlFVY3NSMEZCUnp0QlFVTm1MRTlCUVVjc1JVRkJSU3hEUVVGRE8wRkJRMDRzVDBGQlJ5eEZRVUZGTEVkQlFVYzdRVUZEVWl4VFFVRkxMRVZCUVVVc1NVRkJTVHREUVVOa0xFTkJRVU03TzBGQlJVc3NTVUZCVFN4UFFVRlBMRmRCUVZBc1QwRkJUeXhIUVVGSE8wRkJRMjVDTEU5QlFVY3NSVUZCUlN4RFFVRkRPMEZCUTA0c1QwRkJSeXhGUVVGRkxFTkJRVU03UTBGRFZDeERRVUZET3p0QlFVVkxMRWxCUVUwc1QwRkJUeXhYUVVGUUxFOUJRVThzUjBGQlJ6dEJRVU51UWl4UFFVRkhMRVZCUVVVc1EwRkJRenRCUVVOT0xFOUJRVWNzUlVGQlJTeEhRVUZITzBGQlExSXNVVUZCU1N4RlFVRkZMRWRCUVVjN1EwRkRXaXhEUVVGRElpd2labWxzWlNJNkltUmxabUYxYkhRdGNISnZjSE11YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhSUVpYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpsZUhCdmNuUWdZMjl1YzNRZ2NtZGlJRDBnZTF4dUlDQWdJRzFwYmpvZ01DeGNiaUFnSUNCdFlYZzZJREkxTlN4Y2JpQWdJQ0J5YjNWdVpEb2dkSEoxWlZ4dWZUdGNibHh1Wlhod2IzSjBJR052Ym5OMElHOXdZV05wZEhrZ1BTQjdYRzRnSUNBZ2JXbHVPaUF3TEZ4dUlDQWdJRzFoZURvZ01WeHVmVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJSEJsY21ObGJuUWdQU0I3WEc0Z0lDQWdiV2x1T2lBd0xGeHVJQ0FnSUcxaGVEb2dNVEF3TEZ4dUlDQWdJSFZ1YVhRNklDY2xKMXh1ZlRzaVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3NldHRpbmdzL2RlZmF1bHQtcHJvcHMuanNcbiAqKiBtb2R1bGUgaWQgPSA0N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIFggPSAnWCc7XG52YXIgWSA9ICdZJztcbnZhciBBTFBIQSA9ICdBbHBoYSc7XG5cbnZhciBheGVzID0gZXhwb3J0cy5heGVzID0gW1gsIFksICdaJ107XG52YXIgcmdiID0gZXhwb3J0cy5yZ2IgPSBbJ1JlZCcsICdHcmVlbicsICdCbHVlJywgQUxQSEFdO1xudmFyIGhzbCA9IGV4cG9ydHMuaHNsID0gWydIdWUnLCAnU2F0dXJhdGlvbicsICdMaWdodG5lc3MnLCBBTFBIQV07XG52YXIgcG9zaXRpb25zID0gZXhwb3J0cy5wb3NpdGlvbnMgPSBbJ1RvcCcsICdSaWdodCcsICdCb3R0b20nLCAnTGVmdCddO1xudmFyIHNoYWRvdyA9IGV4cG9ydHMuc2hhZG93ID0gW1gsIFksICdSYWRpdXMnLCAnU3ByZWFkJywgJ0NvbG9yJ107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTl6WlhSMGFXNW5jeTlrYVdOMGFXOXVZWEo1TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096dEJRVUZCTEVsQlFVMHNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJRenRCUVVOa0xFbEJRVTBzUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXp0QlFVTmtMRWxCUVUwc1MwRkJTeXhIUVVGSExFOUJRVThzUTBGQlF6czdRVUZGWml4SlFVRk5MRWxCUVVrc1YwRkJTaXhKUVVGSkxFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRE8wRkJRM3BDTEVsQlFVMHNSMEZCUnl4WFFVRklMRWRCUVVjc1IwRkJSeXhEUVVGRExFdEJRVXNzUlVGQlJTeFBRVUZQTEVWQlFVVXNUVUZCVFN4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8wRkJRelZETEVsQlFVMHNSMEZCUnl4WFFVRklMRWRCUVVjc1IwRkJSeXhEUVVGRExFdEJRVXNzUlVGQlJTeFpRVUZaTEVWQlFVVXNWMEZCVnl4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8wRkJRM1JFTEVsQlFVMHNVMEZCVXl4WFFVRlVMRk5CUVZNc1IwRkJSeXhEUVVGRExFdEJRVXNzUlVGQlJTeFBRVUZQTEVWQlFVVXNVVUZCVVN4RlFVRkZMRTFCUVUwc1EwRkJReXhEUVVGRE8wRkJRM0pFTEVsQlFVMHNUVUZCVFN4WFFVRk9MRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNVVUZCVVN4RlFVRkZMRkZCUVZFc1JVRkJSU3hQUVVGUExFTkJRVU1zUTBGQlF5SXNJbVpwYkdVaU9pSmthV04wYVc5dVlYSjVMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwVUdWeWNua3ZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lZMjl1YzNRZ1dDQTlJQ2RZSnp0Y2JtTnZibk4wSUZrZ1BTQW5XU2M3WEc1amIyNXpkQ0JCVEZCSVFTQTlJQ2RCYkhCb1lTYzdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQmhlR1Z6SUQwZ1cxZ3NJRmtzSUNkYUoxMDdYRzVsZUhCdmNuUWdZMjl1YzNRZ2NtZGlJRDBnV3lkU1pXUW5MQ0FuUjNKbFpXNG5MQ0FuUW14MVpTY3NJRUZNVUVoQlhUdGNibVY0Y0c5eWRDQmpiMjV6ZENCb2Myd2dQU0JiSjBoMVpTY3NJQ2RUWVhSMWNtRjBhVzl1Snl3Z0oweHBaMmgwYm1WemN5Y3NJRUZNVUVoQlhUdGNibVY0Y0c5eWRDQmpiMjV6ZENCd2IzTnBkR2x2Ym5NZ1BTQmJKMVJ2Y0Njc0lDZFNhV2RvZENjc0lDZENiM1IwYjIwbkxDQW5UR1ZtZENkZE8xeHVaWGh3YjNKMElHTnZibk4wSUhOb1lXUnZkeUE5SUZ0WUxDQlpMQ0FuVW1Ga2FYVnpKeXdnSjFOd2NtVmhaQ2NzSUNkRGIyeHZjaWRkT3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3NldHRpbmdzL2RpY3Rpb25hcnkuanNcbiAqKiBtb2R1bGUgaWQgPSA0OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVFYXNpbmdGdW5jdGlvbjtcbi8qXG4gICAgTWlycm9yIGVhc2luZ1xuICAgIFxuICAgIE1pcnJvcnMgdGhlIHByb3ZpZGVkIGVhc2luZyBmdW5jdGlvbiwgdXNlZCBoZXJlIGZvciBtaXJyb3JpbmcgYW5cbiAgICBlYXNlSW4gaW50byBhbiBlYXNlSW5PdXRcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzLCBmcm9tIDAgLSAxLCBvZiBjdXJyZW50IHNoaWZ0XG4gICAgQHBhcmFtIFtmdW5jdGlvbl06IFRoZSBlYXNpbmcgZnVuY3Rpb24gdG8gbWlycm9yXG4gICAgQHJldHVybnMgW251bWJlcl06IFRoZSBlYXNpbmctYWRqdXN0ZWQgZGVsdGFcbiovXG52YXIgbWlycm9yRWFzaW5nID0gZnVuY3Rpb24gKG1ldGhvZCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAocHJvZ3Jlc3MsIHN0cmVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBwcm9ncmVzcyA8PSAwLjUgPyBtZXRob2QoMiAqIHByb2dyZXNzLCBzdHJlbmd0aCkgLyAyIDogKDIgLSBtZXRob2QoMiAqICgxIC0gcHJvZ3Jlc3MpLCBzdHJlbmd0aCkpIC8gMjtcbiAgICB9O1xufTtcblxuLypcbiAgICBSZXZlcnNlIGVhc2luZ1xuICAgIFxuICAgIFJldmVyc2VzIHRoZSBvdXRwdXQgb2YgdGhlIHByb3ZpZGVkIGVhc2luZyBmdW5jdGlvbiwgdXNlZCBmb3IgZmxpcHBpbmcgZWFzZUluXG4gICAgY3VydmUgdG8gYW4gZWFzZU91dC5cbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzLCBmcm9tIDAgLSAxLCBvZiBjdXJyZW50IHNoaWZ0XG4gICAgQHBhcmFtIFtmdW5jdGlvbl06IFRoZSBlYXNpbmcgZnVuY3Rpb24gdG8gcmV2ZXJzZVxuICAgIEByZXR1cm5zIFtudW1iZXJdOiBUaGUgZWFzaW5nLWFkanVzdGVkIGRlbHRhXG4qL1xudmFyIHJldmVyc2VFYXNpbmcgPSBmdW5jdGlvbiAobWV0aG9kKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwcm9ncmVzcywgc3RyZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIDEgLSBtZXRob2QoMSAtIHByb2dyZXNzLCBzdHJlbmd0aCk7XG4gICAgfTtcbn07XG5cbi8qXG4gICAgRWFzaW5nIGNsYXNzXG5cbiAgICBJZiBwcm92aWRlZCBlYXNpbmcgZnVuY3Rpb24sIHJldHVybnMgZWFzaW5nIGZ1bmN0aW9uIHdpdGggXG4gICAgaW4vb3V0L2luT3V0IHZhcmlhdGlvbnNcblxuICAgIElmIHByb3ZpZGVkIGZvdXIgYXJndW1lbnRzLCByZXR1cm5zIG5ldyBCZXppZXIgY2xhc3MgaW5zdGVhZC5cbiovXG5mdW5jdGlvbiBjcmVhdGVFYXNpbmdGdW5jdGlvbihtZXRob2QpIHtcbiAgICB2YXIgZWFzaW5nRnVuY3Rpb24gPSBmdW5jdGlvbiAocHJvZ3Jlc3MsIHN0cmVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBtZXRob2QocHJvZ3Jlc3MsIHN0cmVuZ3RoKTtcbiAgICB9O1xuXG4gICAgZWFzaW5nRnVuY3Rpb24uaW4gPSBmdW5jdGlvbiAocHJvZ3Jlc3MsIHN0cmVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBtZXRob2QocHJvZ3Jlc3MsIHN0cmVuZ3RoKTtcbiAgICB9O1xuICAgIGVhc2luZ0Z1bmN0aW9uLm91dCA9IHJldmVyc2VFYXNpbmcobWV0aG9kKTtcbiAgICBlYXNpbmdGdW5jdGlvbi5pbk91dCA9IG1pcnJvckVhc2luZyhtZXRob2QpO1xuXG4gICAgcmV0dXJuIGVhc2luZ0Z1bmN0aW9uO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMlZoYzJsdVp5OWpjbVZoZEdVdFpXRnphVzVuTG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096dHJRa0ZuUTNkQ0xHOUNRVUZ2UWpzN096czdPenM3T3pzN1FVRjBRalZETEVsQlFVMHNXVUZCV1N4SFFVRkhMRlZCUVVNc1RVRkJUVHRYUVVGTExGVkJRVU1zVVVGQlVTeEZRVUZGTEZGQlFWRTdaVUZCU3l4QlFVRkRMRkZCUVZFc1NVRkJTU3hIUVVGSExFZEJRVWtzVFVGQlRTeERRVUZETEVOQlFVTXNSMEZCUnl4UlFVRlJMRVZCUVVVc1VVRkJVU3hEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRTFCUVUwc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEZGQlFWRXNRMEZCUVN4QlFVRkRMRVZCUVVVc1VVRkJVU3hEUVVGRExFTkJRVUVzUjBGQlNTeERRVUZETzB0QlFVRTdRMEZCUVRzN096czdPenM3T3pzN08wRkJRVU1zUVVGWmFrc3NTVUZCVFN4aFFVRmhMRWRCUVVjc1ZVRkJReXhOUVVGTk8xZEJRVXNzVlVGQlF5eFJRVUZSTEVWQlFVVXNVVUZCVVR0bFFVRkxMRU5CUVVNc1IwRkJSeXhOUVVGTkxFTkJRVU1zUTBGQlF5eEhRVUZITEZGQlFWRXNSVUZCUlN4UlFVRlJMRU5CUVVNN1MwRkJRVHREUVVGQk96czdPenM3T3pzN08wRkJRVU1zUVVGVk9VVXNVMEZCVXl4dlFrRkJiMElzUTBGQlF5eE5RVUZOTEVWQlFVVTdRVUZEYWtRc1VVRkJTU3hqUVVGakxFZEJRVWNzVlVGQlF5eFJRVUZSTEVWQlFVVXNVVUZCVVR0bFFVRkxMRTFCUVUwc1EwRkJReXhSUVVGUkxFVkJRVVVzVVVGQlVTeERRVUZETzB0QlFVRXNRMEZCUXpzN1FVRkZlRVVzYTBKQlFXTXNRMEZCUXl4RlFVRkZMRWRCUVVjc1ZVRkJReXhSUVVGUkxFVkJRVVVzVVVGQlVUdGxRVUZMTEUxQlFVMHNRMEZCUXl4UlFVRlJMRVZCUVVVc1VVRkJVU3hEUVVGRE8wdEJRVUVzUTBGQlF6dEJRVU4yUlN4clFrRkJZeXhEUVVGRExFZEJRVWNzUjBGQlJ5eGhRVUZoTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1FVRkRNME1zYTBKQlFXTXNRMEZCUXl4TFFVRkxMRWRCUVVjc1dVRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZET3p0QlFVVTFReXhYUVVGUExHTkJRV01zUTBGQlF6dERRVU42UWlJc0ltWnBiR1VpT2lKamNtVmhkR1V0WldGemFXNW5MbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwVUdWeWNua3ZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lMeXBjYmlBZ0lDQk5hWEp5YjNJZ1pXRnphVzVuWEc0Z0lDQWdYRzRnSUNBZ1RXbHljbTl5Y3lCMGFHVWdjSEp2ZG1sa1pXUWdaV0Z6YVc1bklHWjFibU4wYVc5dUxDQjFjMlZrSUdobGNtVWdabTl5SUcxcGNuSnZjbWx1WnlCaGJseHVJQ0FnSUdWaGMyVkpiaUJwYm5SdklHRnVJR1ZoYzJWSmJrOTFkRnh1SUNBZ0lGeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVUhKdlozSmxjM01zSUdaeWIyMGdNQ0F0SURFc0lHOW1JR04xY25KbGJuUWdjMmhwWm5SY2JpQWdJQ0JBY0dGeVlXMGdXMloxYm1OMGFXOXVYVG9nVkdobElHVmhjMmx1WnlCbWRXNWpkR2x2YmlCMGJ5QnRhWEp5YjNKY2JpQWdJQ0JBY21WMGRYSnVjeUJiYm5WdFltVnlYVG9nVkdobElHVmhjMmx1WnkxaFpHcDFjM1JsWkNCa1pXeDBZVnh1S2k5Y2JtTnZibk4wSUcxcGNuSnZja1ZoYzJsdVp5QTlJQ2h0WlhSb2IyUXBJRDArSUNod2NtOW5jbVZ6Y3l3Z2MzUnlaVzVuZEdncElEMCtJQ2h3Y205bmNtVnpjeUE4UFNBd0xqVXBJRDhnYldWMGFHOWtLRElnS2lCd2NtOW5jbVZ6Y3l3Z2MzUnlaVzVuZEdncElDOGdNaUE2SUNneUlDMGdiV1YwYUc5a0tESWdLaUFvTVNBdElIQnliMmR5WlhOektTd2djM1J5Wlc1bmRHZ3BLU0F2SURJN1hHNGdJQ0FnSUNBZ0lGeHVMeXBjYmlBZ0lDQlNaWFpsY25ObElHVmhjMmx1WjF4dUlDQWdJRnh1SUNBZ0lGSmxkbVZ5YzJWeklIUm9aU0J2ZFhSd2RYUWdiMllnZEdobElIQnliM1pwWkdWa0lHVmhjMmx1WnlCbWRXNWpkR2x2Yml3Z2RYTmxaQ0JtYjNJZ1pteHBjSEJwYm1jZ1pXRnpaVWx1WEc0Z0lDQWdZM1Z5ZG1VZ2RHOGdZVzRnWldGelpVOTFkQzVjYmlBZ0lDQmNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZCeWIyZHlaWE56TENCbWNtOXRJREFnTFNBeExDQnZaaUJqZFhKeVpXNTBJSE5vYVdaMFhHNGdJQ0FnUUhCaGNtRnRJRnRtZFc1amRHbHZibDA2SUZSb1pTQmxZWE5wYm1jZ1puVnVZM1JwYjI0Z2RHOGdjbVYyWlhKelpWeHVJQ0FnSUVCeVpYUjFjbTV6SUZ0dWRXMWlaWEpkT2lCVWFHVWdaV0Z6YVc1bkxXRmthblZ6ZEdWa0lHUmxiSFJoWEc0cUwxeHVZMjl1YzNRZ2NtVjJaWEp6WlVWaGMybHVaeUE5SUNodFpYUm9iMlFwSUQwK0lDaHdjbTluY21WemN5d2djM1J5Wlc1bmRHZ3BJRDArSURFZ0xTQnRaWFJvYjJRb01TQXRJSEJ5YjJkeVpYTnpMQ0J6ZEhKbGJtZDBhQ2s3WEc1Y2JpOHFYRzRnSUNBZ1JXRnphVzVuSUdOc1lYTnpYRzVjYmlBZ0lDQkpaaUJ3Y205MmFXUmxaQ0JsWVhOcGJtY2dablZ1WTNScGIyNHNJSEpsZEhWeWJuTWdaV0Z6YVc1bklHWjFibU4wYVc5dUlIZHBkR2dnWEc0Z0lDQWdhVzR2YjNWMEwybHVUM1YwSUhaaGNtbGhkR2x2Ym5OY2JseHVJQ0FnSUVsbUlIQnliM1pwWkdWa0lHWnZkWElnWVhKbmRXMWxiblJ6TENCeVpYUjFjbTV6SUc1bGR5QkNaWHBwWlhJZ1kyeGhjM01nYVc1emRHVmhaQzVjYmlvdlhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCbWRXNWpkR2x2YmlCamNtVmhkR1ZGWVhOcGJtZEdkVzVqZEdsdmJpaHRaWFJvYjJRcElIdGNiaUFnSUNCc1pYUWdaV0Z6YVc1blJuVnVZM1JwYjI0Z1BTQW9jSEp2WjNKbGMzTXNJSE4wY21WdVozUm9LU0E5UGlCdFpYUm9iMlFvY0hKdlozSmxjM01zSUhOMGNtVnVaM1JvS1R0Y2JseHVJQ0FnSUdWaGMybHVaMFoxYm1OMGFXOXVMbWx1SUQwZ0tIQnliMmR5WlhOekxDQnpkSEpsYm1kMGFDa2dQVDRnYldWMGFHOWtLSEJ5YjJkeVpYTnpMQ0J6ZEhKbGJtZDBhQ2s3WEc0Z0lDQWdaV0Z6YVc1blJuVnVZM1JwYjI0dWIzVjBJRDBnY21WMlpYSnpaVVZoYzJsdVp5aHRaWFJvYjJRcE8xeHVJQ0FnSUdWaGMybHVaMFoxYm1OMGFXOXVMbWx1VDNWMElEMGdiV2x5Y205eVJXRnphVzVuS0cxbGRHaHZaQ2s3WEc1Y2JpQWdJQ0J5WlhSMWNtNGdaV0Z6YVc1blJuVnVZM1JwYjI0N1hHNTlYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9lYXNpbmcvY3JlYXRlLWVhc2luZy5qc1xuICoqIG1vZHVsZSBpZCA9IDQ5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBjdWJpY0Jlemllcjtcbi8qXG4gICAgQmV6aWVyIGZ1bmN0aW9uIGdlbmVyYXRvclxuICAgICAgICBcbiAgICBHYcOrdGFuIFJlbmF1ZGVhdSdzIEJlemllckVhc2luZ1xuICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9pbmRleC5qcyAgXG4gICAgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAgICBZb3UncmUgYSBoZXJvXG4gICAgXG4gICAgVXNlXG4gICAgXG4gICAgICAgIHZhciBlYXNlT3V0ID0gbmV3IEJlemllciguMTcsLjY3LC44MywuNjcpLFxuICAgICAgICAgICAgeCA9IGVhc2VPdXQoMC41KTsgLy8gcmV0dXJucyAwLjYyNy4uLlxuKi9cblxuLy8gQ29uc3RhbnRzXG52YXIgTkVXVE9OX0lURVJBVElPTlMgPSA4O1xudmFyIE5FV1RPTl9NSU5fU0xPUEUgPSAwLjAwMTtcbnZhciBTVUJESVZJU0lPTl9QUkVDSVNJT04gPSAwLjAwMDAwMDE7XG52YXIgU1VCRElWSVNJT05fTUFYX0lURVJBVElPTlMgPSAxMDtcbnZhciBLX1NQTElORV9UQUJMRV9TSVpFID0gMTE7XG52YXIgS19TQU1QTEVfU1RFUF9TSVpFID0gMS4wIC8gKEtfU1BMSU5FX1RBQkxFX1NJWkUgLSAxLjApO1xudmFyIEZMT0FUXzMyX1NVUFBPUlRFRCA9IHR5cGVvZiBGbG9hdDMyQXJyYXkgIT09ICd1bmRlZmluZWQnO1xuXG4vLyBIZWxwZXIgbWV0aG9kc1xudmFyIGEgPSBmdW5jdGlvbiAoYTEsIGEyKSB7XG4gICAgcmV0dXJuIDEuMCAtIDMuMCAqIGEyICsgMy4wICogYTE7XG59O1xudmFyIGIgPSBmdW5jdGlvbiAoYTEsIGEyKSB7XG4gICAgcmV0dXJuIDMuMCAqIGEyIC0gNi4wICogYTE7XG59O1xudmFyIGMgPSBmdW5jdGlvbiAoYTEpIHtcbiAgICByZXR1cm4gMy4wICogYTE7XG59O1xuXG52YXIgZ2V0U2xvcGUgPSBmdW5jdGlvbiAodCwgYTEsIGEyKSB7XG4gICAgcmV0dXJuIDMuMCAqIGEoYTEsIGEyKSAqIHQgKiB0ICsgMi4wICogYihhMSwgYTIpICogdCArIGMoYTEpO1xufTtcblxudmFyIGNhbGNCZXppZXIgPSBmdW5jdGlvbiAodCwgYTEsIGEyKSB7XG4gICAgcmV0dXJuICgoYShhMSwgYTIpICogdCArIGIoYTEsIGEyKSkgKiB0ICsgYyhhMSkpICogdDtcbn07XG5cbi8qXG4gICAgQ3JlYXRlIGEgY3ViaWMgYmV6aWVyIHJlc29sdmVyXG4qL1xuZnVuY3Rpb24gY3ViaWNCZXppZXIobVgxLCBtWTEsIG1YMiwgbVkyKSB7XG4gICAgdmFyIHNhbXBsZVZhbHVlcyA9IEZMT0FUXzMyX1NVUFBPUlRFRCA/IG5ldyBGbG9hdDMyQXJyYXkoS19TUExJTkVfVEFCTEVfU0laRSkgOiBuZXcgQXJyYXkoS19TUExJTkVfVEFCTEVfU0laRSk7XG4gICAgdmFyIF9wcmVjb21wdXRlZCA9IGZhbHNlO1xuXG4gICAgdmFyIGJpbmFyeVN1YmRpdmlkZSA9IGZ1bmN0aW9uIChhWCwgYUEsIGFCKSB7XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgdmFyIGN1cnJlbnRYID0gdW5kZWZpbmVkO1xuICAgICAgICB2YXIgY3VycmVudFQgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgY3VycmVudFQgPSBhQSArIChhQiAtIGFBKSAvIDIuMDtcbiAgICAgICAgICAgIGN1cnJlbnRYID0gY2FsY0JlemllcihjdXJyZW50VCwgbVgxLCBtWDIpIC0gYVg7XG4gICAgICAgICAgICBpZiAoY3VycmVudFggPiAwLjApIHtcbiAgICAgICAgICAgICAgICBhQiA9IGN1cnJlbnRUO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhQSA9IGN1cnJlbnRUO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IHdoaWxlIChNYXRoLmFicyhjdXJyZW50WCkgPiBTVUJESVZJU0lPTl9QUkVDSVNJT04gJiYgKytpIDwgU1VCRElWSVNJT05fTUFYX0lURVJBVElPTlMpO1xuXG4gICAgICAgIHJldHVybiBjdXJyZW50VDtcbiAgICB9O1xuXG4gICAgdmFyIG5ld3RvblJhcGhzb25JdGVyYXRlID0gZnVuY3Rpb24gKGFYLCBhR3Vlc3NUKSB7XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgdmFyIGN1cnJlbnRTbG9wZSA9IDA7XG4gICAgICAgIHZhciBjdXJyZW50WCA9IHVuZGVmaW5lZDtcblxuICAgICAgICBmb3IgKDsgaSA8IE5FV1RPTl9JVEVSQVRJT05TOyArK2kpIHtcbiAgICAgICAgICAgIGN1cnJlbnRTbG9wZSA9IGdldFNsb3BlKGFHdWVzc1QsIG1YMSwgbVgyKTtcblxuICAgICAgICAgICAgaWYgKGN1cnJlbnRTbG9wZSA9PT0gMC4wKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFHdWVzc1Q7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGN1cnJlbnRYID0gY2FsY0JlemllcihhR3Vlc3NULCBtWDEsIG1YMikgLSBhWDtcbiAgICAgICAgICAgIGFHdWVzc1QgLT0gY3VycmVudFggLyBjdXJyZW50U2xvcGU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYUd1ZXNzVDtcbiAgICB9O1xuXG4gICAgdmFyIGNhbGNTYW1wbGVWYWx1ZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgS19TUExJTkVfVEFCTEVfU0laRTsgKytpKSB7XG4gICAgICAgICAgICBzYW1wbGVWYWx1ZXNbaV0gPSBjYWxjQmV6aWVyKGkgKiBLX1NBTVBMRV9TVEVQX1NJWkUsIG1YMSwgbVgyKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgZ2V0VEZvclggPSBmdW5jdGlvbiAoYVgpIHtcbiAgICAgICAgdmFyIGludGVydmFsU3RhcnQgPSAwLjA7XG4gICAgICAgIHZhciBjdXJyZW50U2FtcGxlID0gMTtcbiAgICAgICAgdmFyIGxhc3RTYW1wbGUgPSBLX1NQTElORV9UQUJMRV9TSVpFIC0gMTtcbiAgICAgICAgdmFyIGRpc3QgPSAwLjA7XG4gICAgICAgIHZhciBndWVzc0ZvclQgPSAwLjA7XG4gICAgICAgIHZhciBpbml0aWFsU2xvcGUgPSAwLjA7XG5cbiAgICAgICAgZm9yICg7IGN1cnJlbnRTYW1wbGUgIT0gbGFzdFNhbXBsZSAmJiBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0gPD0gYVg7ICsrY3VycmVudFNhbXBsZSkge1xuICAgICAgICAgICAgaW50ZXJ2YWxTdGFydCArPSBLX1NBTVBMRV9TVEVQX1NJWkU7XG4gICAgICAgIH1cblxuICAgICAgICAtLWN1cnJlbnRTYW1wbGU7XG5cbiAgICAgICAgZGlzdCA9IChhWCAtIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSkgLyAoc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGUgKyAxXSAtIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSk7XG4gICAgICAgIGd1ZXNzRm9yVCA9IGludGVydmFsU3RhcnQgKyBkaXN0ICogS19TQU1QTEVfU1RFUF9TSVpFO1xuXG4gICAgICAgIGluaXRpYWxTbG9wZSA9IGdldFNsb3BlKGd1ZXNzRm9yVCwgbVgxLCBtWDIpO1xuXG4gICAgICAgIC8vIElmIHNsb3BlIGlzIGdyZWF0ZXIgdGhhbiBtaW5cbiAgICAgICAgaWYgKGluaXRpYWxTbG9wZSA+PSBORVdUT05fTUlOX1NMT1BFKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3dG9uUmFwaHNvbkl0ZXJhdGUoYVgsIGd1ZXNzRm9yVCk7XG4gICAgICAgICAgICAvLyBTbG9wZSBpcyBlcXVhbCB0byBtaW5cbiAgICAgICAgfSBlbHNlIGlmIChpbml0aWFsU2xvcGUgPT09IDAuMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBndWVzc0ZvclQ7XG4gICAgICAgICAgICAgICAgLy8gU2xvcGUgaXMgbGVzcyB0aGFuIG1pblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJpbmFyeVN1YmRpdmlkZShhWCwgaW50ZXJ2YWxTdGFydCwgaW50ZXJ2YWxTdGFydCArIEtfU0FNUExFX1NURVBfU0laRSk7XG4gICAgICAgICAgICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgcHJlY29tcHV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3ByZWNvbXB1dGVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKG1YMSAhPSBtWTEgfHwgbVgyICE9IG1ZMikge1xuICAgICAgICAgICAgY2FsY1NhbXBsZVZhbHVlcygpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHZhciByZXNvbHZlciA9IGZ1bmN0aW9uIChhWCkge1xuICAgICAgICB2YXIgcmV0dXJuVmFsdWUgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgaWYgKCFfcHJlY29tcHV0ZWQpIHtcbiAgICAgICAgICAgIHByZWNvbXB1dGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGxpbmVhciBncmFkaWVudCwgcmV0dXJuIFggYXMgVFxuICAgICAgICBpZiAobVgxID09PSBtWTEgJiYgbVgyID09PSBtWTIpIHtcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gYVg7XG5cbiAgICAgICAgICAgIC8vIElmIGF0IHN0YXJ0LCByZXR1cm4gMFxuICAgICAgICB9IGVsc2UgaWYgKGFYID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSAwO1xuXG4gICAgICAgICAgICAgICAgLy8gSWYgYXQgZW5kLCByZXR1cm4gMVxuICAgICAgICAgICAgfSBlbHNlIGlmIChhWCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IDE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSBjYWxjQmV6aWVyKGdldFRGb3JYKGFYKSwgbVkxLCBtWTIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmV0dXJuVmFsdWU7XG4gICAgfTtcblxuICAgIHJldHVybiByZXNvbHZlcjtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDJWaGMybHVaeTlqY21WaGRHVXRZbVY2YVdWeUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenRyUWtGdFEzZENMRmRCUVZjN096czdPenM3T3pzN096czdPenM3UVVGd1FtNURMRWxCUVUwc2FVSkJRV2xDTEVkQlFVY3NRMEZCUXl4RFFVRkRPMEZCUXpWQ0xFbEJRVTBzWjBKQlFXZENMRWRCUVVjc1MwRkJTeXhEUVVGRE8wRkJReTlDTEVsQlFVMHNjVUpCUVhGQ0xFZEJRVWNzVTBGQlV5eERRVUZETzBGQlEzaERMRWxCUVUwc01FSkJRVEJDTEVkQlFVY3NSVUZCUlN4RFFVRkRPMEZCUTNSRExFbEJRVTBzYlVKQlFXMUNMRWRCUVVjc1JVRkJSU3hEUVVGRE8wRkJReTlDTEVsQlFVMHNhMEpCUVd0Q0xFZEJRVWNzUjBGQlJ5eEpRVUZKTEcxQ1FVRnRRaXhIUVVGSExFZEJRVWNzUTBGQlFTeEJRVUZETEVOQlFVTTdRVUZETjBRc1NVRkJUU3hyUWtGQmEwSXNSMEZCU1N4UFFVRlBMRmxCUVZrc1MwRkJTeXhYUVVGWExFRkJRVU03T3p0QlFVRkRMRUZCUjJwRkxFbEJRVTBzUTBGQlF5eEhRVUZITEZWQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVN1YwRkJTeXhIUVVGSExFZEJRVWNzUjBGQlJ5eEhRVUZITEVWQlFVVXNSMEZCUnl4SFFVRkhMRWRCUVVjc1JVRkJSVHREUVVGQkxFTkJRVU03UVVGRGFFUXNTVUZCVFN4RFFVRkRMRWRCUVVjc1ZVRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJUdFhRVUZMTEVkQlFVY3NSMEZCUnl4RlFVRkZMRWRCUVVjc1IwRkJSeXhIUVVGSExFVkJRVVU3UTBGQlFTeERRVUZETzBGQlF6RkRMRWxCUVUwc1EwRkJReXhIUVVGSExGVkJRVU1zUlVGQlJUdFhRVUZMTEVkQlFVY3NSMEZCUnl4RlFVRkZPME5CUVVFc1EwRkJRenM3UVVGRk0wSXNTVUZCVFN4UlFVRlJMRWRCUVVjc1ZVRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVTdWMEZCU3l4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRPME5CUVVFc1EwRkJRenM3UVVGRmRFWXNTVUZCVFN4VlFVRlZMRWRCUVVjc1ZVRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVTdWMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUVN4SFFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVRXNSMEZCU1N4RFFVRkRPME5CUVVFN096czdPMEZCUVVNc1FVRkxha1VzVTBGQlV5eFhRVUZYTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTzBGQlEzQkVMRkZCUVUwc1dVRkJXU3hIUVVGSExHdENRVUZyUWl4SFFVRkhMRWxCUVVrc1dVRkJXU3hEUVVGRExHMUNRVUZ0UWl4RFFVRkRMRWRCUVVjc1NVRkJTU3hMUVVGTExFTkJRVU1zYlVKQlFXMUNMRU5CUVVNc1EwRkJRenRCUVVOcVNDeFJRVUZKTEZsQlFWa3NSMEZCUnl4TFFVRkxMRU5CUVVNN08wRkJSWHBDTEZGQlFVMHNaVUZCWlN4SFFVRkhMRlZCUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVczdRVUZEY0VNc1dVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzBGQlExWXNXVUZCU1N4UlFVRlJMRmxCUVVFc1EwRkJRenRCUVVOaUxGbEJRVWtzVVVGQlVTeFpRVUZCTEVOQlFVTTdPMEZCUldJc1YwRkJSenRCUVVORExHOUNRVUZSTEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlFTeEhRVUZKTEVkQlFVY3NRMEZCUXp0QlFVTm9ReXh2UWtGQlVTeEhRVUZITEZWQlFWVXNRMEZCUXl4UlFVRlJMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXp0QlFVTXZReXhuUWtGQlNTeFJRVUZSTEVkQlFVY3NSMEZCUnl4RlFVRkZPMEZCUTJoQ0xHdENRVUZGTEVkQlFVY3NVVUZCVVN4RFFVRkRPMkZCUTJwQ0xFMUJRVTA3UVVGRFNDeHJRa0ZCUlN4SFFVRkhMRkZCUVZFc1EwRkJRenRoUVVOcVFqdFRRVU5LTEZGQlFWRXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhSUVVGUkxFTkJRVU1zUjBGQlJ5eHhRa0ZCY1VJc1NVRkJTU3hGUVVGRkxFTkJRVU1zUjBGQlJ5d3dRa0ZCTUVJc1JVRkJSVHM3UVVGRmVrWXNaVUZCVHl4UlFVRlJMRU5CUVVNN1MwRkRia0lzUTBGQlF6czdRVUZGUml4UlFVRk5MRzlDUVVGdlFpeEhRVUZITEZWQlFVTXNSVUZCUlN4RlFVRkZMRTlCUVU4c1JVRkJTenRCUVVNeFF5eFpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1FVRkRWaXhaUVVGSkxGbEJRVmtzUjBGQlJ5eERRVUZETEVOQlFVTTdRVUZEY2tJc1dVRkJTU3hSUVVGUkxGbEJRVUVzUTBGQlF6czdRVUZGWWl4bFFVRlBMRU5CUVVNc1IwRkJSeXhwUWtGQmFVSXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSVHRCUVVNdlFpeDNRa0ZCV1N4SFFVRkhMRkZCUVZFc1EwRkJReXhQUVVGUExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRPenRCUVVVelF5eG5Ra0ZCU1N4WlFVRlpMRXRCUVVzc1IwRkJSeXhGUVVGRk8wRkJRM1JDTEhWQ1FVRlBMRTlCUVU4c1EwRkJRenRoUVVOc1FqczdRVUZGUkN4dlFrRkJVU3hIUVVGSExGVkJRVlVzUTBGQlF5eFBRVUZQTEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF6dEJRVU01UXl4dFFrRkJUeXhKUVVGSkxGRkJRVkVzUjBGQlJ5eFpRVUZaTEVOQlFVTTdVMEZEZEVNN08wRkJSVVFzWlVGQlR5eFBRVUZQTEVOQlFVTTdTMEZEYkVJc1EwRkJRenM3UVVGRlJpeFJRVUZOTEdkQ1FVRm5RaXhIUVVGSExGbEJRVTA3UVVGRE0wSXNZVUZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEcxQ1FVRnRRaXhGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTzBGQlF6RkRMSGRDUVVGWkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NWVUZCVlN4RFFVRkRMRU5CUVVNc1IwRkJSeXhyUWtGQmEwSXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU03VTBGRGJFVTdTMEZEU2l4RFFVRkRPenRCUVVWR0xGRkJRVTBzVVVGQlVTeEhRVUZITEZWQlFVTXNSVUZCUlN4RlFVRkxPMEZCUTNKQ0xGbEJRVWtzWVVGQllTeEhRVUZITEVkQlFVY3NRMEZCUXp0QlFVTjRRaXhaUVVGSkxHRkJRV0VzUjBGQlJ5eERRVUZETEVOQlFVTTdRVUZEZEVJc1dVRkJTU3hWUVVGVkxFZEJRVWNzYlVKQlFXMUNMRWRCUVVjc1EwRkJReXhEUVVGRE8wRkJRM3BETEZsQlFVa3NTVUZCU1N4SFFVRkhMRWRCUVVjc1EwRkJRenRCUVVObUxGbEJRVWtzVTBGQlV5eEhRVUZITEVkQlFVY3NRMEZCUXp0QlFVTndRaXhaUVVGSkxGbEJRVmtzUjBGQlJ5eEhRVUZITEVOQlFVTTdPMEZCUlhaQ0xHVkJRVThzWVVGQllTeEpRVUZKTEZWQlFWVXNTVUZCU1N4WlFVRlpMRU5CUVVNc1lVRkJZU3hEUVVGRExFbEJRVWtzUlVGQlJTeEZRVUZGTEVWQlFVVXNZVUZCWVN4RlFVRkZPMEZCUTNSR0xIbENRVUZoTEVsQlFVa3NhMEpCUVd0Q0xFTkJRVU03VTBGRGRrTTdPMEZCUlVRc1ZVRkJSU3hoUVVGaExFTkJRVU03TzBGQlJXaENMRmxCUVVrc1IwRkJSeXhEUVVGRExFVkJRVVVzUjBGQlJ5eFpRVUZaTEVOQlFVTXNZVUZCWVN4RFFVRkRMRU5CUVVFc1NVRkJTeXhaUVVGWkxFTkJRVU1zWVVGQllTeEhRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRmxCUVZrc1EwRkJReXhoUVVGaExFTkJRVU1zUTBGQlFTeEJRVUZETEVOQlFVTTdRVUZETVVjc2FVSkJRVk1zUjBGQlJ5eGhRVUZoTEVkQlFVY3NTVUZCU1N4SFFVRkhMR3RDUVVGclFpeERRVUZET3p0QlFVVjBSQ3h2UWtGQldTeEhRVUZITEZGQlFWRXNRMEZCUXl4VFFVRlRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF6czdPMEZCUVVNc1FVRkhOME1zV1VGQlNTeFpRVUZaTEVsQlFVa3NaMEpCUVdkQ0xFVkJRVVU3UVVGRGJFTXNiVUpCUVU4c2IwSkJRVzlDTEVOQlFVTXNSVUZCUlN4RlFVRkZMRk5CUVZNc1EwRkJRenM3UVVGQlF5eFRRVVU1UXl4TlFVRk5MRWxCUVVrc1dVRkJXU3hMUVVGTExFZEJRVWNzUlVGQlJUdEJRVU0zUWl4MVFrRkJUeXhUUVVGVE96dEJRVUZETEdGQlJYQkNMRTFCUVUwN1FVRkRTQ3d5UWtGQlR5eGxRVUZsTEVOQlFVTXNSVUZCUlN4RlFVRkZMR0ZCUVdFc1JVRkJSU3hoUVVGaExFZEJRVWNzYTBKQlFXdENMRU5CUVVNc1EwRkJRenRwUWtGRGFrWTdTMEZEU2l4RFFVRkRPenRCUVVWR0xGRkJRVTBzVlVGQlZTeEhRVUZITEZsQlFVMDdRVUZEY2tJc2IwSkJRVmtzUjBGQlJ5eEpRVUZKTEVOQlFVTTdRVUZEY0VJc1dVRkJTU3hIUVVGSExFbEJRVWtzUjBGQlJ5eEpRVUZKTEVkQlFVY3NTVUZCU1N4SFFVRkhMRVZCUVVVN1FVRkRNVUlzTkVKQlFXZENMRVZCUVVVc1EwRkJRenRUUVVOMFFqdExRVU5LTEVOQlFVTTdPMEZCUlVZc1VVRkJUU3hSUVVGUkxFZEJRVWNzVlVGQlF5eEZRVUZGTEVWQlFVczdRVUZEY2tJc1dVRkJTU3hYUVVGWExGbEJRVUVzUTBGQlF6czdRVUZGYUVJc1dVRkJTU3hEUVVGRExGbEJRVmtzUlVGQlJUdEJRVU5tTEhOQ1FVRlZMRVZCUVVVc1EwRkJRenRUUVVOb1FqczdPMEZCUVVFc1FVRkhSQ3haUVVGSkxFZEJRVWNzUzBGQlN5eEhRVUZITEVsQlFVa3NSMEZCUnl4TFFVRkxMRWRCUVVjc1JVRkJSVHRCUVVNMVFpeDFRa0ZCVnl4SFFVRkhMRVZCUVVVN096dEJRVUZETEZOQlIzQkNMRTFCUVUwc1NVRkJTU3hGUVVGRkxFdEJRVXNzUTBGQlF5eEZRVUZGTzBGQlEycENMREpDUVVGWExFZEJRVWNzUTBGQlF6czdPMEZCUVVNc1lVRkhia0lzVFVGQlRTeEpRVUZKTEVWQlFVVXNTMEZCU3l4RFFVRkRMRVZCUVVVN1FVRkRha0lzSzBKQlFWY3NSMEZCUnl4RFFVRkRMRU5CUVVNN2FVSkJSVzVDTEUxQlFVMDdRVUZEU0N3clFrRkJWeXhIUVVGSExGVkJRVlVzUTBGQlF5eFJRVUZSTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETzJsQ1FVTndSRHM3UVVGRlJDeGxRVUZQTEZkQlFWY3NRMEZCUXp0TFFVTjBRaXhEUVVGRE96dEJRVVZHTEZkQlFVOHNVVUZCVVN4RFFVRkRPME5CUTI1Q0lpd2labWxzWlNJNkltTnlaV0YwWlMxaVpYcHBaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhSUVpYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUl2S2x4dUlDQWdJRUpsZW1sbGNpQm1kVzVqZEdsdmJpQm5aVzVsY21GMGIzSmNiaUFnSUNBZ0lDQWdYRzRnSUNBZ1IySERxM1JoYmlCU1pXNWhkV1JsWVhVbmN5QkNaWHBwWlhKRllYTnBibWRjYmlBZ0lDQm9kSFJ3Y3pvdkwyZHBkR2gxWWk1amIyMHZaM0psTDJKbGVtbGxjaTFsWVhOcGJtY3ZZbXh2WWk5dFlYTjBaWEl2YVc1a1pYZ3Vhbk1nSUZ4dUlDQWdJR2gwZEhCek9pOHZaMmwwYUhWaUxtTnZiUzluY21VdlltVjZhV1Z5TFdWaGMybHVaeTlpYkc5aUwyMWhjM1JsY2k5TVNVTkZUbE5GWEc0Z0lDQWdXVzkxSjNKbElHRWdhR1Z5YjF4dUlDQWdJRnh1SUNBZ0lGVnpaVnh1SUNBZ0lGeHVJQ0FnSUNBZ0lDQjJZWElnWldGelpVOTFkQ0E5SUc1bGR5QkNaWHBwWlhJb0xqRTNMQzQyTnl3dU9ETXNMalkzS1N4Y2JpQWdJQ0FnSUNBZ0lDQWdJSGdnUFNCbFlYTmxUM1YwS0RBdU5TazdJQzh2SUhKbGRIVnlibk1nTUM0Mk1qY3VMaTVjYmlvdlhHNWNiaTh2SUVOdmJuTjBZVzUwYzF4dVkyOXVjM1FnVGtWWFZFOU9YMGxVUlZKQlZFbFBUbE1nUFNBNE8xeHVZMjl1YzNRZ1RrVlhWRTlPWDAxSlRsOVRURTlRUlNBOUlEQXVNREF4TzF4dVkyOXVjM1FnVTFWQ1JFbFdTVk5KVDA1ZlVGSkZRMGxUU1U5T0lEMGdNQzR3TURBd01EQXhPMXh1WTI5dWMzUWdVMVZDUkVsV1NWTkpUMDVmVFVGWVgwbFVSVkpCVkVsUFRsTWdQU0F4TUR0Y2JtTnZibk4wSUV0ZlUxQk1TVTVGWDFSQlFreEZYMU5KV2tVZ1BTQXhNVHRjYm1OdmJuTjBJRXRmVTBGTlVFeEZYMU5VUlZCZlUwbGFSU0E5SURFdU1DQXZJQ2hMWDFOUVRFbE9SVjlVUVVKTVJWOVRTVnBGSUMwZ01TNHdLVHRjYm1OdmJuTjBJRVpNVDBGVVh6TXlYMU5WVUZCUFVsUkZSQ0E5SUNoMGVYQmxiMllnUm14dllYUXpNa0Z5Y21GNUlDRTlQU0FuZFc1a1pXWnBibVZrSnlrN1hHNWNiaTh2SUVobGJIQmxjaUJ0WlhSb2IyUnpYRzVqYjI1emRDQmhJRDBnS0dFeExDQmhNaWtnUFQ0Z01TNHdJQzBnTXk0d0lDb2dZVElnS3lBekxqQWdLaUJoTVR0Y2JtTnZibk4wSUdJZ1BTQW9ZVEVzSUdFeUtTQTlQaUF6TGpBZ0tpQmhNaUF0SURZdU1DQXFJR0V4TzF4dVkyOXVjM1FnWXlBOUlDaGhNU2tnUFQ0Z015NHdJQ29nWVRFN1hHNWNibU52Ym5OMElHZGxkRk5zYjNCbElEMGdLSFFzSUdFeExDQmhNaWtnUFQ0Z015NHdJQ29nWVNoaE1Td2dZVElwSUNvZ2RDQXFJSFFnS3lBeUxqQWdLaUJpS0dFeExDQmhNaWtnS2lCMElDc2dZeWhoTVNrN1hHNWNibU52Ym5OMElHTmhiR05DWlhwcFpYSWdQU0FvZEN3Z1lURXNJR0V5S1NBOVBpQW9LR0VvWVRFc0lHRXlLU0FxSUhRZ0t5QmlLR0V4TENCaE1pa3BJQ29nZENBcklHTW9ZVEVwS1NBcUlIUTdYRzVjYmk4cVhHNGdJQ0FnUTNKbFlYUmxJR0VnWTNWaWFXTWdZbVY2YVdWeUlISmxjMjlzZG1WeVhHNHFMMXh1Wlhod2IzSjBJR1JsWm1GMWJIUWdablZ1WTNScGIyNGdZM1ZpYVdOQ1pYcHBaWElvYlZneExDQnRXVEVzSUcxWU1pd2diVmt5S1NCN1hHNGdJQ0FnWTI5dWMzUWdjMkZ0Y0d4bFZtRnNkV1Z6SUQwZ1JreFBRVlJmTXpKZlUxVlFVRTlTVkVWRUlEOGdibVYzSUVac2IyRjBNekpCY25KaGVTaExYMU5RVEVsT1JWOVVRVUpNUlY5VFNWcEZLU0E2SUc1bGR5QkJjbkpoZVNoTFgxTlFURWxPUlY5VVFVSk1SVjlUU1ZwRktUdGNiaUFnSUNCc1pYUWdYM0J5WldOdmJYQjFkR1ZrSUQwZ1ptRnNjMlU3WEc1Y2JpQWdJQ0JqYjI1emRDQmlhVzVoY25sVGRXSmthWFpwWkdVZ1BTQW9ZVmdzSUdGQkxDQmhRaWtnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQnNaWFFnYVNBOUlEQTdYRzRnSUNBZ0lDQWdJR3hsZENCamRYSnlaVzUwV0R0Y2JpQWdJQ0FnSUNBZ2JHVjBJR04xY25KbGJuUlVPMXh1WEc0Z0lDQWdJQ0FnSUdSdklIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOMWNuSmxiblJVSUQwZ1lVRWdLeUFvWVVJZ0xTQmhRU2tnTHlBeUxqQTdYRzRnSUNBZ0lDQWdJQ0FnSUNCamRYSnlaVzUwV0NBOUlHTmhiR05DWlhwcFpYSW9ZM1Z5Y21WdWRGUXNJRzFZTVN3Z2JWZ3lLU0F0SUdGWU8xeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHTjFjbkpsYm5SWUlENGdNQzR3S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1lVSWdQU0JqZFhKeVpXNTBWRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1lVRWdQU0JqZFhKeVpXNTBWRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmU0IzYUdsc1pTQW9UV0YwYUM1aFluTW9ZM1Z5Y21WdWRGZ3BJRDRnVTFWQ1JFbFdTVk5KVDA1ZlVGSkZRMGxUU1U5T0lDWW1JQ3NyYVNBOElGTlZRa1JKVmtsVFNVOU9YMDFCV0Y5SlZFVlNRVlJKVDA1VEtUdGNibHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdZM1Z5Y21WdWRGUTdYRzRnSUNBZ2ZUdGNibHh1SUNBZ0lHTnZibk4wSUc1bGQzUnZibEpoY0doemIyNUpkR1Z5WVhSbElEMGdLR0ZZTENCaFIzVmxjM05VS1NBOVBpQjdYRzRnSUNBZ0lDQWdJR3hsZENCcElEMGdNRHRjYmlBZ0lDQWdJQ0FnYkdWMElHTjFjbkpsYm5SVGJHOXdaU0E5SURBN1hHNGdJQ0FnSUNBZ0lHeGxkQ0JqZFhKeVpXNTBXRHRjYmx4dUlDQWdJQ0FnSUNCbWIzSWdLRHNnYVNBOElFNUZWMVJQVGw5SlZFVlNRVlJKVDA1VE95QXJLMmtwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR04xY25KbGJuUlRiRzl3WlNBOUlHZGxkRk5zYjNCbEtHRkhkV1Z6YzFRc0lHMVlNU3dnYlZneUtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0dOMWNuSmxiblJUYkc5d1pTQTlQVDBnTUM0d0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHRkhkV1Z6YzFRN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdJQ0FnSUdOMWNuSmxiblJZSUQwZ1kyRnNZMEpsZW1sbGNpaGhSM1ZsYzNOVUxDQnRXREVzSUcxWU1pa2dMU0JoV0R0Y2JpQWdJQ0FnSUNBZ0lDQWdJR0ZIZFdWemMxUWdMVDBnWTNWeWNtVnVkRmdnTHlCamRYSnlaVzUwVTJ4dmNHVTdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJoUjNWbGMzTlVPMXh1SUNBZ0lIMDdYRzVjYmlBZ0lDQmpiMjV6ZENCallXeGpVMkZ0Y0d4bFZtRnNkV1Z6SUQwZ0tDa2dQVDRnZTF4dUlDQWdJQ0FnSUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElFdGZVMUJNU1U1RlgxUkJRa3hGWDFOSldrVTdJQ3NyYVNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYzJGdGNHeGxWbUZzZFdWelcybGRJRDBnWTJGc1kwSmxlbWxsY2locElDb2dTMTlUUVUxUVRFVmZVMVJGVUY5VFNWcEZMQ0J0V0RFc0lHMVlNaWs3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5TzF4dVhHNGdJQ0FnWTI5dWMzUWdaMlYwVkVadmNsZ2dQU0FvWVZncElEMCtJSHRjYmlBZ0lDQWdJQ0FnYkdWMElHbHVkR1Z5ZG1Gc1UzUmhjblFnUFNBd0xqQTdYRzRnSUNBZ0lDQWdJR3hsZENCamRYSnlaVzUwVTJGdGNHeGxJRDBnTVR0Y2JpQWdJQ0FnSUNBZ2JHVjBJR3hoYzNSVFlXMXdiR1VnUFNCTFgxTlFURWxPUlY5VVFVSk1SVjlUU1ZwRklDMGdNVHRjYmlBZ0lDQWdJQ0FnYkdWMElHUnBjM1FnUFNBd0xqQTdYRzRnSUNBZ0lDQWdJR3hsZENCbmRXVnpjMFp2Y2xRZ1BTQXdMakE3WEc0Z0lDQWdJQ0FnSUd4bGRDQnBibWwwYVdGc1UyeHZjR1VnUFNBd0xqQTdYRzRnSUNBZ0lDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ1ptOXlJQ2c3SUdOMWNuSmxiblJUWVcxd2JHVWdJVDBnYkdGemRGTmhiWEJzWlNBbUppQnpZVzF3YkdWV1lXeDFaWE5iWTNWeWNtVnVkRk5oYlhCc1pWMGdQRDBnWVZnN0lDc3JZM1Z5Y21WdWRGTmhiWEJzWlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVc1MFpYSjJZV3hUZEdGeWRDQXJQU0JMWDFOQlRWQk1SVjlUVkVWUVgxTkpXa1U3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lDMHRZM1Z5Y21WdWRGTmhiWEJzWlR0Y2JpQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lHUnBjM1FnUFNBb1lWZ2dMU0J6WVcxd2JHVldZV3gxWlhOYlkzVnljbVZ1ZEZOaGJYQnNaVjBwSUM4Z0tITmhiWEJzWlZaaGJIVmxjMXRqZFhKeVpXNTBVMkZ0Y0d4bEt6RmRJQzBnYzJGdGNHeGxWbUZzZFdWelcyTjFjbkpsYm5SVFlXMXdiR1ZkS1R0Y2JpQWdJQ0FnSUNBZ1ozVmxjM05HYjNKVUlEMGdhVzUwWlhKMllXeFRkR0Z5ZENBcklHUnBjM1FnS2lCTFgxTkJUVkJNUlY5VFZFVlFYMU5KV2tVN1hHNGdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQnBibWwwYVdGc1UyeHZjR1VnUFNCblpYUlRiRzl3WlNobmRXVnpjMFp2Y2xRc0lHMVlNU3dnYlZneUtUdGNiaUFnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJQzh2SUVsbUlITnNiM0JsSUdseklHZHlaV0YwWlhJZ2RHaGhiaUJ0YVc1Y2JpQWdJQ0FnSUNBZ2FXWWdLR2x1YVhScFlXeFRiRzl3WlNBK1BTQk9SVmRVVDA1ZlRVbE9YMU5NVDFCRktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnYm1WM2RHOXVVbUZ3YUhOdmJrbDBaWEpoZEdVb1lWZ3NJR2QxWlhOelJtOXlWQ2s3WEc0Z0lDQWdJQ0FnSUM4dklGTnNiM0JsSUdseklHVnhkV0ZzSUhSdklHMXBibHh1SUNBZ0lDQWdJQ0I5SUdWc2MyVWdhV1lnS0dsdWFYUnBZV3hUYkc5d1pTQTlQVDBnTUM0d0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnWjNWbGMzTkdiM0pVTzF4dUlDQWdJQ0FnSUNBdkx5QlRiRzl3WlNCcGN5QnNaWE56SUhSb1lXNGdiV2x1WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z1ltbHVZWEo1VTNWaVpHbDJhV1JsS0dGWUxDQnBiblJsY25aaGJGTjBZWEowTENCcGJuUmxjblpoYkZOMFlYSjBJQ3NnUzE5VFFVMVFURVZmVTFSRlVGOVRTVnBGS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgwN1hHNWNiaUFnSUNCamIyNXpkQ0J3Y21WamIyMXdkWFJsSUQwZ0tDa2dQVDRnZTF4dUlDQWdJQ0FnSUNCZmNISmxZMjl0Y0hWMFpXUWdQU0IwY25WbE8xeHVJQ0FnSUNBZ0lDQnBaaUFvYlZneElDRTlJRzFaTVNCOGZDQnRXRElnSVQwZ2JWa3lLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpZV3hqVTJGdGNHeGxWbUZzZFdWektDazdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlPMXh1WEc0Z0lDQWdZMjl1YzNRZ2NtVnpiMngyWlhJZ1BTQW9ZVmdwSUQwK0lIdGNiaUFnSUNBZ0lDQWdiR1YwSUhKbGRIVnlibFpoYkhWbE8xeHVYRzRnSUNBZ0lDQWdJR2xtSUNnaFgzQnlaV052YlhCMWRHVmtLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQndjbVZqYjIxd2RYUmxLQ2s3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lDOHZJRWxtSUd4cGJtVmhjaUJuY21Ga2FXVnVkQ3dnY21WMGRYSnVJRmdnWVhNZ1ZGeHVJQ0FnSUNBZ0lDQnBaaUFvYlZneElEMDlQU0J0V1RFZ0ppWWdiVmd5SUQwOVBTQnRXVElwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJsWmhiSFZsSUQwZ1lWZzdYRzRnSUNBZ0lDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ0x5OGdTV1lnWVhRZ2MzUmhjblFzSUhKbGRIVnliaUF3WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0JwWmlBb1lWZ2dQVDA5SURBcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnlibFpoYkhWbElEMGdNRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQXZMeUJKWmlCaGRDQmxibVFzSUhKbGRIVnliaUF4WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0JwWmlBb1lWZ2dQVDA5SURFcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnlibFpoYkhWbElEMGdNVHRjYmx4dUlDQWdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdVZtRnNkV1VnUFNCallXeGpRbVY2YVdWeUtHZGxkRlJHYjNKWUtHRllLU3dnYlZreExDQnRXVElwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2NtVjBkWEp1Vm1Gc2RXVTdYRzRnSUNBZ2ZUdGNibHh1SUNBZ0lISmxkSFZ5YmlCeVpYTnZiSFpsY2p0Y2JuMWNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9lYXNpbmcvY3JlYXRlLWJlemllci5qc1xuICoqIG1vZHVsZSBpZCA9IDUwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vKlxuICAgIERldGVjdCBhbmQgbG9hZCBhbiBhcHByb3ByaWF0ZSBjbG9jayBzZXR0aW5nIGZvciB0aGUgZW52aXJvbm1lbnRcbiovXG5cbnZhciBoYXNSQUYgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID8gdHJ1ZSA6IGZhbHNlO1xuXG52YXIgdGljayA9IHVuZGVmaW5lZDtcblxuaWYgKGhhc1JBRikge1xuICAgIHRpY2sgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spO1xuICAgIH07XG59IGVsc2Uge1xuICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8qXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgRm9yIElFOC85IEZsaW5zdG9uZXMgYW5kIG5vbi1icm93c2VyIGVudmlyb25tZW50c1xuICAgICAgICAgICAgIFRha2VuIGZyb20gUGF1bCBJcmlzaC4gV2UndmUgc3RyaXBwZWQgb3V0IGNhbmNlbEFuaW1hdGlvbkZyYW1lIGNoZWNrcyBiZWNhdXNlIHdlIGRvbid0IGZveCB3aXRoIHRoYXRcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaHR0cDovL3BhdWxpcmlzaC5jb20vMjAxMS9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWFuaW1hdGluZy9cbiAgICAgICAgICAgIGh0dHA6Ly9teS5vcGVyYS5jb20vZW1vbGxlci9ibG9nLzIwMTEvMTIvMjAvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1lci1hbmltYXRpbmdcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbCBieSBFcmlrIE3DtmxsZXIuIGZpeGVzIGZyb20gUGF1bCBJcmlzaCBhbmQgVGlubyBaaWpkZWxcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgIE1JVCBsaWNlbnNlXG4gICAgICAgICovXG4gICAgICAgIHZhciBsYXN0VGltZSA9IDA7XG5cbiAgICAgICAgdGljayA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICB2YXIgdGltZVRvQ2FsbCA9IE1hdGgubWF4KDAsIDE2IC0gKGN1cnJlbnRUaW1lIC0gbGFzdFRpbWUpKTtcblxuICAgICAgICAgICAgbGFzdFRpbWUgPSBjdXJyZW50VGltZSArIHRpbWVUb0NhbGw7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhsYXN0VGltZSk7XG4gICAgICAgICAgICB9LCB0aW1lVG9DYWxsKTtcbiAgICAgICAgfTtcbiAgICB9KSgpO1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSB0aWNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl3Y205alpYTnpMM1JwWTJzdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3p0QlFVbEJMRWxCUVUwc1RVRkJUU3hIUVVGSExFRkJRVU1zVDBGQlR5eE5RVUZOTEV0QlFVc3NWMEZCVnl4SlFVRkpMRTFCUVUwc1EwRkJReXh4UWtGQmNVSXNSMEZCU1N4SlFVRkpMRWRCUVVjc1MwRkJTeXhEUVVGRE96dEJRVVU1Uml4SlFVRkpMRWxCUVVrc1dVRkJRU3hEUVVGRE96dEJRVVZVTEVsQlFVa3NUVUZCVFN4RlFVRkZPMEZCUTFJc1VVRkJTU3hIUVVGSExGVkJRVU1zVVVGQlVUdGxRVUZMTEUxQlFVMHNRMEZCUXl4eFFrRkJjVUlzUTBGQlF5eFJRVUZSTEVOQlFVTTdTMEZCUVN4RFFVRkRPME5CUlM5RUxFMUJRVTA3T3pzN096czdPenM3T3pzN096dEJRV1ZJTEZsQlFVa3NVVUZCVVN4SFFVRkhMRU5CUVVNc1EwRkJRenM3UVVGRmFrSXNXVUZCU1N4SFFVRkhMRlZCUVVNc1VVRkJVU3hGUVVGTE8wRkJRMnBDTEdkQ1FVRk5MRmRCUVZjc1IwRkJSeXhKUVVGSkxFbEJRVWtzUlVGQlJTeERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRPMEZCUTNwRExHZENRVUZOTEZWQlFWVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVsQlFVa3NWMEZCVnl4SFFVRkhMRkZCUVZFc1EwRkJRU3hCUVVGRExFTkJRVU1zUTBGQlF6czdRVUZGT1VRc2IwSkJRVkVzUjBGQlJ5eFhRVUZYTEVkQlFVY3NWVUZCVlN4RFFVRkRPenRCUVVWd1F5eHpRa0ZCVlN4RFFVRkRPM1ZDUVVGTkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTTdZVUZCUVN4RlFVRkZMRlZCUVZVc1EwRkJReXhEUVVGRE8xTkJRM0JFTEVOQlFVTTdPME5CUTB3N08ydENRVVZqTEVsQlFVa2lMQ0ptYVd4bElqb2lkR2xqYXk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRGQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk4cVhHNGdJQ0FnUkdWMFpXTjBJR0Z1WkNCc2IyRmtJR0Z1SUdGd2NISnZjSEpwWVhSbElHTnNiMk5ySUhObGRIUnBibWNnWm05eUlIUm9aU0JsYm5acGNtOXViV1Z1ZEZ4dUtpOWNibHh1WTI5dWMzUWdhR0Z6VWtGR0lEMGdLSFI1Y0dWdlppQjNhVzVrYjNjZ0lUMDlJQ2QxYm1SbFptbHVaV1FuSUNZbUlIZHBibVJ2ZHk1eVpYRjFaWE4wUVc1cGJXRjBhVzl1Um5KaGJXVXBJRDhnZEhKMVpTQTZJR1poYkhObE8xeHVYRzVzWlhRZ2RHbGphenRjYmx4dWFXWWdLR2hoYzFKQlJpa2dlMXh1SUNBZ0lIUnBZMnNnUFNBb1kyRnNiR0poWTJzcElEMCtJSGRwYm1SdmR5NXlaWEYxWlhOMFFXNXBiV0YwYVc5dVJuSmhiV1VvWTJGc2JHSmhZMnNwTzF4dVhHNTlJR1ZzYzJVZ2UxeHVJQ0FnSUM4cVhHNGdJQ0FnSUNBZ0lISmxjWFZsYzNSQmJtbHRZWFJwYjI1R2NtRnRaU0J3YjJ4NVptbHNiRnh1SUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnUm05eUlFbEZPQzg1SUVac2FXNXpkRzl1WlhNZ1lXNWtJRzV2YmkxaWNtOTNjMlZ5SUdWdWRtbHliMjV0Wlc1MGMxeHVYRzRnSUNBZ0lDQWdJRlJoYTJWdUlHWnliMjBnVUdGMWJDQkpjbWx6YUM0Z1YyVW5kbVVnYzNSeWFYQndaV1FnYjNWMElHTmhibU5sYkVGdWFXMWhkR2x2YmtaeVlXMWxJR05vWldOcmN5QmlaV05oZFhObElIZGxJR1J2YmlkMElHWnZlQ0IzYVhSb0lIUm9ZWFJjYmlBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUdoMGRIQTZMeTl3WVhWc2FYSnBjMmd1WTI5dEx6SXdNVEV2Y21WeGRXVnpkR0Z1YVcxaGRHbHZibVp5WVcxbExXWnZjaTF6YldGeWRDMWhibWx0WVhScGJtY3ZYRzRnSUNBZ0lDQWdJR2gwZEhBNkx5OXRlUzV2Y0dWeVlTNWpiMjB2WlcxdmJHeGxjaTlpYkc5bkx6SXdNVEV2TVRJdk1qQXZjbVZ4ZFdWemRHRnVhVzFoZEdsdmJtWnlZVzFsTFdadmNpMXpiV0Z5ZEMxbGNpMWhibWx0WVhScGJtZGNiaUFnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0J5WlhGMVpYTjBRVzVwYldGMGFXOXVSbkpoYldVZ2NHOXNlV1pwYkd3Z1lua2dSWEpwYXlCTnc3WnNiR1Z5TGlCbWFYaGxjeUJtY205dElGQmhkV3dnU1hKcGMyZ2dZVzVrSUZScGJtOGdXbWxxWkdWc1hHNGdJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdUVWxVSUd4cFkyVnVjMlZjYmlBZ0lDQXFMMXh1SUNBZ0lHeGxkQ0JzWVhOMFZHbHRaU0E5SURBN1hHNWNiaUFnSUNCMGFXTnJJRDBnS0dOaGJHeGlZV05yS1NBOVBpQjdYRzRnSUNBZ0lDQWdJR052Ym5OMElHTjFjbkpsYm5SVWFXMWxJRDBnYm1WM0lFUmhkR1VvS1M1blpYUlVhVzFsS0NrN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUhScGJXVlViME5oYkd3Z1BTQk5ZWFJvTG0xaGVDZ3dMQ0F4TmlBdElDaGpkWEp5Wlc1MFZHbHRaU0F0SUd4aGMzUlVhVzFsS1NrN1hHNWNiaUFnSUNBZ0lDQWdiR0Z6ZEZScGJXVWdQU0JqZFhKeVpXNTBWR2x0WlNBcklIUnBiV1ZVYjBOaGJHdzdYRzVjYmlBZ0lDQWdJQ0FnYzJWMFZHbHRaVzkxZENnb0tTQTlQaUJqWVd4c1ltRmpheWhzWVhOMFZHbHRaU2tzSUhScGJXVlViME5oYkd3cE8xeHVJQ0FnSUgwN1hHNTlYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJSFJwWTJzN0lsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3Byb2Nlc3MvdGljay5qc1xuICoqIG1vZHVsZSBpZCA9IDUxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8vIFtpbnRdOiBJbmNyZW1lbnRlZCBmb3IgZWFjaCBuZXcgcnVubmluZyBwcm9jZXNzXG52YXIgY3VycmVudFByb2Nlc3NJZCA9IDA7XG5cbi8vIFtpbnRdOiBOdW1iZXIgb2YgYWxsIHJ1bm5pbmcgcHJvY2Vzc2VzXG52YXIgdG90YWxSdW5uaW5nQ291bnQgPSAwO1xuXG4vLyBbaW50XTogTnVtYmVyIG9mIHJ1bm5pbmcgcHJvY2Vzc2VzIGV4Y2x1ZGluZyBiYWNrZ3JvdW5kIHByb2Nlc3Nlc1xudmFyIG5vbkJhY2tncm91bmRSdW5uaW5nQ291bnQgPSAwO1xuXG4vLyBbYXJyYXldOiBBcnJheSBvZiBydW5uaW5nIHByb2Nlc3MgSURzXG52YXIgcnVubmluZ0lkcyA9IFtdO1xuXG4vLyBbb2JqZWN0XTogTWFwIG9mIHJ1bm5pbmcgcHJvY2Vzc2VzXG52YXIgYWN0aXZlUHJvY2Vzc2VzID0ge307XG5cbi8vIFthcnJheV06IEFycmF5IG9mIHByb2Nlc3MgSURzIHF1ZXVlZCBmb3IgYWN0aXZhdGlvblxudmFyIGFjdGl2YXRlUXVldWUgPSBbXTtcblxuLy8gW2FycmF5XTogQXJyYXkgb2YgcHJvY2VzcyBJRHMgcXVldWVkIGZvciBkZWFjdGl2YXRpb25cbnZhciBkZWFjdGl2YXRlUXVldWUgPSBbXTtcblxuLypcbiAgICBVcGRhdGUgYWN0aXZhdGUvZGVhY3RpdmF0ZSBxdWV1ZXNcblxuICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgIEBwYXJhbSBbYXJyYXldXG4gICAgQHBhcmFtIFthcnJheV1cbiovXG52YXIgdXBkYXRlUXVldWVzID0gZnVuY3Rpb24gKGlkLCBpbkxpc3QsIG91dExpc3QpIHtcbiAgICB2YXIgaW5Qb3NpdGlvbiA9IGluTGlzdC5pbmRleE9mKGlkKTtcbiAgICB2YXIgb3V0UG9zaXRpb24gPSBvdXRMaXN0LmluZGV4T2YoaWQpO1xuXG4gICAgaWYgKGluUG9zaXRpb24gPT09IC0xKSB7XG4gICAgICAgIGluTGlzdC5wdXNoKGlkKTtcbiAgICB9XG5cbiAgICBpZiAob3V0UG9zaXRpb24gPiAtMSkge1xuICAgICAgICBvdXRMaXN0LnNwbGljZShvdXRQb3NpdGlvbiwgMSk7XG4gICAgfVxufTtcblxuLypcbiAgICBVcGRhdGUgcnVubmluZ1xuXG4gICAgW2Jvb2xlYW5dOiBgdHJ1ZWAgdG8gYWRkXG4gICAgW2Jvb2xlYW5dOiBgdHJ1ZWAgaWYgbGF6eVxuKi9cbnZhciB1cGRhdGVSdW5uaW5nQ291bnQgPSBmdW5jdGlvbiAoYWRkLCBpc0xhenkpIHtcbiAgICB2YXIgbW9kaWZ5ID0gYWRkID8gMSA6IC0xO1xuXG4gICAgdG90YWxSdW5uaW5nQ291bnQgKz0gbW9kaWZ5O1xuXG4gICAgaWYgKCFpc0xhenkpIHtcbiAgICAgICAgbm9uQmFja2dyb3VuZFJ1bm5pbmdDb3VudCArPSBtb2RpZnk7XG4gICAgfVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGFjdGl2ZVByb2Nlc3NlczogYWN0aXZlUHJvY2Vzc2VzLFxuXG4gICAgLy8gQWN0aXZhdGUgYSBwcm9jZXNzXG4gICAgYWN0aXZhdGU6IGZ1bmN0aW9uIChpZCwgcHJvY2Vzcykge1xuICAgICAgICBhY3RpdmVQcm9jZXNzZXNbaWRdID0gcHJvY2VzcztcbiAgICAgICAgcHJvY2Vzcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIHVwZGF0ZVF1ZXVlcyhpZCwgYWN0aXZhdGVRdWV1ZSwgZGVhY3RpdmF0ZVF1ZXVlKTtcbiAgICB9LFxuXG4gICAgLy8gRGVhY3RpdmF0ZSBhIHByb2Nlc3NcbiAgICBkZWFjdGl2YXRlOiBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgcHJvY2Vzcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB1cGRhdGVRdWV1ZXMoaWQsIGRlYWN0aXZhdGVRdWV1ZSwgYWN0aXZhdGVRdWV1ZSk7XG4gICAgfSxcblxuICAgIC8vIE51bWJlciBiYWNrZ3JvdW5kIHByb2Nlc3Nlc1xuICAgIGdldE5vbkJhY2tncm91bmRSdW5uaW5nQ291bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5vbkJhY2tncm91bmRSdW5uaW5nQ291bnQ7XG4gICAgfSxcblxuICAgIC8vIEluY3JlbWVudCBjdXJyZW50IHByb2Nlc3MgSUQgYW5kIHJldHVyblxuICAgIGdldFByb2Nlc3NJZDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gY3VycmVudFByb2Nlc3NJZCsrO1xuICAgIH0sXG5cbiAgICAvLyBSZXNvbHZlIGFjdGl2YXRlL2RlYWN0aXZhdGUgcHJvY2Vzc2VzIGFuZCByZXR1cm4gYWN0aXZlIGlkc1xuICAgIGdldEFjdGl2ZUlkczogZnVuY3Rpb24gKCkge1xuICAgICAgICAvKlxuICAgICAgICAgICAgUHJvY2VzcyBkZWFjdGl2YXRlIHF1ZXVlXG4gICAgICAgICovXG4gICAgICAgIHZhciBkZWFjdGl2YXRlUXVldWVMZW5ndGggPSBkZWFjdGl2YXRlUXVldWUubGVuZ3RoO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGVhY3RpdmF0ZVF1ZXVlTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBpZCA9IGRlYWN0aXZhdGVRdWV1ZVtpXTtcbiAgICAgICAgICAgIHZhciBhY3RpdmVJZEluZGV4ID0gcnVubmluZ0lkcy5pbmRleE9mKGlkKTtcbiAgICAgICAgICAgIHZhciBfcHJvY2VzcyA9IGFjdGl2ZVByb2Nlc3Nlc1tpZF07XG5cbiAgICAgICAgICAgIC8vIElmIHRoaXMgaXMgYSBydW5uaW5nIHByb2Nlc3MsIGRlYWN0aXZhdGVcbiAgICAgICAgICAgIGlmIChhY3RpdmVJZEluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICBydW5uaW5nSWRzLnNwbGljZShhY3RpdmVJZEluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVSdW5uaW5nQ291bnQoZmFsc2UsIF9wcm9jZXNzLmlzTGF6eSk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGFjdGl2ZVByb2Nlc3Nlc1tpZF07XG5cbiAgICAgICAgICAgICAgICBpZiAoX3Byb2Nlc3Mub25EZWFjdGl2YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIF9wcm9jZXNzLm9uRGVhY3RpdmF0ZShfcHJvY2Vzcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLypcbiAgICAgICAgICAgIEVtcHR5IGRlYWN0aXZhdGUgcXVldWUuIFdlIHVzZSBgQXJyYXkuc3BsaWNlYCBiZWNhdXNlIGl0IGRvZXNuJ3RcbiAgICAgICAgICAgIHdvcmtzIG9uIHRoZSBvcmlnaW5hbCBhcnJheSBzbyB3ZSBkb24ndCBoYXZlIHRvIGdhcmJhZ2UgY29sbGVjdCBhbnl0aGluZ1xuICAgICAgICAqL1xuICAgICAgICBkZWFjdGl2YXRlUXVldWUuc3BsaWNlKDAsIGRlYWN0aXZhdGVRdWV1ZUxlbmd0aCk7XG5cbiAgICAgICAgLypcbiAgICAgICAgICAgIFByb2Nlc3MgYWN0aXZhdGUgcXVldWVcbiAgICAgICAgKi9cbiAgICAgICAgdmFyIGFjdGl2YXRlUXVldWVMZW5ndGggPSBhY3RpdmF0ZVF1ZXVlLmxlbmd0aDtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFjdGl2YXRlUXVldWVMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGlkID0gYWN0aXZhdGVRdWV1ZVtpXTtcbiAgICAgICAgICAgIHZhciBhY3RpdmVJZEluZGV4ID0gcnVubmluZ0lkcy5pbmRleE9mKGlkKTtcbiAgICAgICAgICAgIHZhciBfcHJvY2VzczIgPSBhY3RpdmVQcm9jZXNzZXNbaWRdO1xuXG4gICAgICAgICAgICAvLyBJZiBwcm9jZXNzIGlzbid0IGFscmVhZHkgcnVubmluZywgYWN0aXZhdGVcbiAgICAgICAgICAgIGlmIChhY3RpdmVJZEluZGV4ID09PSAtMSAmJiBfcHJvY2VzczIpIHtcbiAgICAgICAgICAgICAgICBpZiAoX3Byb2Nlc3MyLmlzUHJpb3JpdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ0lkcy51bnNoaWZ0KGlkKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBydW5uaW5nSWRzLnB1c2goaWQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHVwZGF0ZVJ1bm5pbmdDb3VudCh0cnVlLCBfcHJvY2VzczIuaXNMYXp5KTtcblxuICAgICAgICAgICAgICAgIGlmIChfcHJvY2VzczIub25BY3RpdmF0ZSkge1xuICAgICAgICAgICAgICAgICAgICBfcHJvY2VzczIub25BY3RpdmF0ZShfcHJvY2VzczIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGFjdGl2YXRlUXVldWUuc3BsaWNlKDAsIGFjdGl2YXRlUXVldWVMZW5ndGgpO1xuXG4gICAgICAgIHJldHVybiBydW5uaW5nSWRzO1xuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXdjbTlqWlhOekwyMWhibUZuWlhJdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenRCUVVOQkxFbEJRVWtzWjBKQlFXZENMRWRCUVVjc1EwRkJRenM3TzBGQlFVTXNRVUZIZWtJc1NVRkJTU3hwUWtGQmFVSXNSMEZCUnl4RFFVRkRPenM3UVVGQlF5eEJRVWN4UWl4SlFVRkpMSGxDUVVGNVFpeEhRVUZITEVOQlFVTTdPenRCUVVGRExFRkJSMnhETEVsQlFVMHNWVUZCVlN4SFFVRkhMRVZCUVVVN096dEJRVUZETEVGQlIzUkNMRWxCUVUwc1pVRkJaU3hIUVVGSExFVkJRVVU3T3p0QlFVRkRMRUZCUnpOQ0xFbEJRVTBzWVVGQllTeEhRVUZITEVWQlFVVTdPenRCUVVGRExFRkJSM3BDTEVsQlFVMHNaVUZCWlN4SFFVRkhMRVZCUVVVN096czdPenM3T3p0QlFVRkRMRUZCVXpOQ0xFbEJRVTBzV1VGQldTeEhRVUZITEZWQlFVTXNSVUZCUlN4RlFVRkZMRTFCUVUwc1JVRkJSU3hQUVVGUExFVkJRVXM3UVVGRE1VTXNVVUZCVFN4VlFVRlZMRWRCUVVjc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXp0QlFVTjBReXhSUVVGTkxGZEJRVmNzUjBGQlJ5eFBRVUZQTEVOQlFVTXNUMEZCVHl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE96dEJRVVY0UXl4UlFVRkpMRlZCUVZVc1MwRkJTeXhEUVVGRExFTkJRVU1zUlVGQlJUdEJRVU51UWl4alFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzB0QlEyNUNPenRCUVVWRUxGRkJRVWtzVjBGQlZ5eEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZPMEZCUTJ4Q0xHVkJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8wdEJRMnhETzBOQlEwbzdPenM3T3pzN08wRkJRVU1zUVVGUlJpeEpRVUZOTEd0Q1FVRnJRaXhIUVVGSExGVkJRVU1zUjBGQlJ5eEZRVUZGTEUxQlFVMHNSVUZCU3p0QlFVTjRReXhSUVVGTkxFMUJRVTBzUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE96dEJRVVUxUWl4eFFrRkJhVUlzU1VGQlNTeE5RVUZOTEVOQlFVTTdPMEZCUlRWQ0xGRkJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVTdRVUZEVkN4cFEwRkJlVUlzU1VGQlNTeE5RVUZOTEVOQlFVTTdTMEZEZGtNN1EwRkRTaXhEUVVGRE96dHJRa0ZGWVR0QlFVTllMRzFDUVVGbExFVkJRV1lzWlVGQlpUczdPMEZCUjJZc1dVRkJVU3hGUVVGRkxGVkJRVU1zUlVGQlJTeEZRVUZGTEU5QlFVOHNSVUZCU3p0QlFVTjJRaXgxUWtGQlpTeERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRTlCUVU4c1EwRkJRenRCUVVNNVFpeGxRVUZQTEVOQlFVTXNVVUZCVVN4SFFVRkhMRWxCUVVrc1EwRkJRenRCUVVONFFpeHZRa0ZCV1N4RFFVRkRMRVZCUVVVc1JVRkJSU3hoUVVGaExFVkJRVVVzWlVGQlpTeERRVUZETEVOQlFVTTdTMEZEY0VRN096dEJRVWRFTEdOQlFWVXNSVUZCUlN4VlFVRkRMRVZCUVVVc1JVRkJTenRCUVVOb1FpeGxRVUZQTEVOQlFVTXNVVUZCVVN4SFFVRkhMRXRCUVVzc1EwRkJRenRCUVVONlFpeHZRa0ZCV1N4RFFVRkRMRVZCUVVVc1JVRkJSU3hsUVVGbExFVkJRVVVzWVVGQllTeERRVUZETEVOQlFVTTdTMEZEY0VRN096dEJRVWRFTEdkRFFVRTBRaXhGUVVGRk8yVkJRVTBzZVVKQlFYbENPMHRCUVVFN096dEJRVWMzUkN4blFrRkJXU3hGUVVGRk8yVkJRVTBzWjBKQlFXZENMRVZCUVVVN1MwRkJRVHM3TzBGQlIzUkRMR2RDUVVGWkxFVkJRVVVzV1VGQlRUczdPenRCUVVsb1FpeFpRVUZOTEhGQ1FVRnhRaXhIUVVGSExHVkJRV1VzUTBGQlF5eE5RVUZOTEVOQlFVTTdPMEZCUlhKRUxHRkJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXh4UWtGQmNVSXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRCUVVNMVF5eG5Ra0ZCVFN4RlFVRkZMRWRCUVVjc1pVRkJaU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBGQlF6bENMR2RDUVVGTkxHRkJRV0VzUjBGQlJ5eFZRVUZWTEVOQlFVTXNUMEZCVHl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8wRkJRemRETEdkQ1FVRk5MRkZCUVU4c1IwRkJSeXhsUVVGbExFTkJRVU1zUlVGQlJTeERRVUZET3pzN1FVRkJReXhCUVVkd1F5eG5Ra0ZCU1N4aFFVRmhMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVU3UVVGRGNFSXNNRUpCUVZVc1EwRkJReXhOUVVGTkxFTkJRVU1zWVVGQllTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUTNCRExHdERRVUZyUWl4RFFVRkRMRXRCUVVzc1JVRkJSU3hSUVVGUExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdRVUZETVVNc2RVSkJRVThzWlVGQlpTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPenRCUVVVelFpeHZRa0ZCU1N4UlFVRlBMRU5CUVVNc1dVRkJXU3hGUVVGRk8wRkJRM1JDTERSQ1FVRlBMRU5CUVVNc1dVRkJXU3hEUVVGRExGRkJRVThzUTBGQlF5eERRVUZETzJsQ1FVTnFRenRoUVVOS08xTkJRMG83T3pzN096dEJRVUZCTEVGQlRVUXNkVUpCUVdVc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eEZRVUZGTEhGQ1FVRnhRaXhEUVVGRE96czdPenRCUVVGRExFRkJTMnBFTEZsQlFVMHNiVUpCUVcxQ0xFZEJRVWNzWVVGQllTeERRVUZETEUxQlFVMHNRMEZCUXpzN1FVRkZha1FzWVVGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExHMUNRVUZ0UWl4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8wRkJRekZETEdkQ1FVRk5MRVZCUVVVc1IwRkJSeXhoUVVGaExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdRVUZETlVJc1owSkJRVTBzWVVGQllTeEhRVUZITEZWQlFWVXNRMEZCUXl4UFFVRlBMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03UVVGRE4wTXNaMEpCUVUwc1UwRkJUeXhIUVVGSExHVkJRV1VzUTBGQlF5eEZRVUZGTEVOQlFVTTdPenRCUVVGRExFRkJSM0JETEdkQ1FVRkpMR0ZCUVdFc1MwRkJTeXhEUVVGRExFTkJRVU1zU1VGQlNTeFRRVUZQTEVWQlFVVTdRVUZEYWtNc2IwSkJRVWtzVTBGQlR5eERRVUZETEZWQlFWVXNSVUZCUlR0QlFVTndRaXc0UWtGQlZTeERRVUZETEU5QlFVOHNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenRwUWtGRE1VSXNUVUZCVFR0QlFVTklMRGhDUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMmxDUVVOMlFqczdRVUZGUkN4clEwRkJhMElzUTBGQlF5eEpRVUZKTEVWQlFVVXNVMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE96dEJRVVY2UXl4dlFrRkJTU3hUUVVGUExFTkJRVU1zVlVGQlZTeEZRVUZGTzBGQlEzQkNMRFpDUVVGUExFTkJRVU1zVlVGQlZTeERRVUZETEZOQlFVOHNRMEZCUXl4RFFVRkRPMmxDUVVNdlFqdGhRVU5LTzFOQlEwbzdPMEZCUlVRc2NVSkJRV0VzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RlFVRkZMRzFDUVVGdFFpeERRVUZETEVOQlFVTTdPMEZCUlRkRExHVkJRVThzVlVGQlZTeERRVUZETzB0QlEzSkNPME5CUTBvaUxDSm1hV3hsSWpvaWJXRnVZV2RsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRGQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk4dklGdHBiblJkT2lCSmJtTnlaVzFsYm5SbFpDQm1iM0lnWldGamFDQnVaWGNnY25WdWJtbHVaeUJ3Y205alpYTnpYRzVzWlhRZ1kzVnljbVZ1ZEZCeWIyTmxjM05KWkNBOUlEQTdYRzVjYmk4dklGdHBiblJkT2lCT2RXMWlaWElnYjJZZ1lXeHNJSEoxYm01cGJtY2djSEp2WTJWemMyVnpYRzVzWlhRZ2RHOTBZV3hTZFc1dWFXNW5RMjkxYm5RZ1BTQXdPMXh1WEc0dkx5QmJhVzUwWFRvZ1RuVnRZbVZ5SUc5bUlISjFibTVwYm1jZ2NISnZZMlZ6YzJWeklHVjRZMngxWkdsdVp5QmlZV05yWjNKdmRXNWtJSEJ5YjJObGMzTmxjMXh1YkdWMElHNXZia0poWTJ0bmNtOTFibVJTZFc1dWFXNW5RMjkxYm5RZ1BTQXdPMXh1WEc0dkx5QmJZWEp5WVhsZE9pQkJjbkpoZVNCdlppQnlkVzV1YVc1bklIQnliMk5sYzNNZ1NVUnpYRzVqYjI1emRDQnlkVzV1YVc1blNXUnpJRDBnVzEwN1hHNWNiaTh2SUZ0dlltcGxZM1JkT2lCTllYQWdiMllnY25WdWJtbHVaeUJ3Y205alpYTnpaWE5jYm1OdmJuTjBJR0ZqZEdsMlpWQnliMk5sYzNObGN5QTlJSHQ5TzF4dVhHNHZMeUJiWVhKeVlYbGRPaUJCY25KaGVTQnZaaUJ3Y205alpYTnpJRWxFY3lCeGRXVjFaV1FnWm05eUlHRmpkR2wyWVhScGIyNWNibU52Ym5OMElHRmpkR2wyWVhSbFVYVmxkV1VnUFNCYlhUdGNibHh1THk4Z1cyRnljbUY1WFRvZ1FYSnlZWGtnYjJZZ2NISnZZMlZ6Y3lCSlJITWdjWFZsZFdWa0lHWnZjaUJrWldGamRHbDJZWFJwYjI1Y2JtTnZibk4wSUdSbFlXTjBhWFpoZEdWUmRXVjFaU0E5SUZ0ZE8xeHVYRzR2S2x4dUlDQWdJRlZ3WkdGMFpTQmhZM1JwZG1GMFpTOWtaV0ZqZEdsMllYUmxJSEYxWlhWbGMxeHVYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkWEc0Z0lDQWdRSEJoY21GdElGdGhjbkpoZVYxY2JpQWdJQ0JBY0dGeVlXMGdXMkZ5Y21GNVhWeHVLaTljYm1OdmJuTjBJSFZ3WkdGMFpWRjFaWFZsY3lBOUlDaHBaQ3dnYVc1TWFYTjBMQ0J2ZFhSTWFYTjBLU0E5UGlCN1hHNGdJQ0FnWTI5dWMzUWdhVzVRYjNOcGRHbHZiaUE5SUdsdVRHbHpkQzVwYm1SbGVFOW1LR2xrS1R0Y2JpQWdJQ0JqYjI1emRDQnZkWFJRYjNOcGRHbHZiaUE5SUc5MWRFeHBjM1F1YVc1a1pYaFBaaWhwWkNrN1hHNWNiaUFnSUNCcFppQW9hVzVRYjNOcGRHbHZiaUE5UFQwZ0xURXBJSHRjYmlBZ0lDQWdJQ0FnYVc1TWFYTjBMbkIxYzJnb2FXUXBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHbG1JQ2h2ZFhSUWIzTnBkR2x2YmlBK0lDMHhLU0I3WEc0Z0lDQWdJQ0FnSUc5MWRFeHBjM1F1YzNCc2FXTmxLRzkxZEZCdmMybDBhVzl1TENBeEtUdGNiaUFnSUNCOVhHNTlPMXh1WEc0dktseHVJQ0FnSUZWd1pHRjBaU0J5ZFc1dWFXNW5YRzVjYmlBZ0lDQmJZbTl2YkdWaGJsMDZJR0IwY25WbFlDQjBieUJoWkdSY2JpQWdJQ0JiWW05dmJHVmhibDA2SUdCMGNuVmxZQ0JwWmlCc1lYcDVYRzRxTDF4dVkyOXVjM1FnZFhCa1lYUmxVblZ1Ym1sdVowTnZkVzUwSUQwZ0tHRmtaQ3dnYVhOTVlYcDVLU0E5UGlCN1hHNGdJQ0FnWTI5dWMzUWdiVzlrYVdaNUlEMGdZV1JrSUQ4Z01TQTZJQzB4TzF4dVhHNGdJQ0FnZEc5MFlXeFNkVzV1YVc1blEyOTFiblFnS3owZ2JXOWthV1o1TzF4dVhHNGdJQ0FnYVdZZ0tDRnBjMHhoZW5rcElIdGNiaUFnSUNBZ0lDQWdibTl1UW1GamEyZHliM1Z1WkZKMWJtNXBibWREYjNWdWRDQXJQU0J0YjJScFpuazdYRzRnSUNBZ2ZWeHVmVHRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnZTF4dUlDQWdJR0ZqZEdsMlpWQnliMk5sYzNObGN5eGNibHh1SUNBZ0lDOHZJRUZqZEdsMllYUmxJR0VnY0hKdlkyVnpjMXh1SUNBZ0lHRmpkR2wyWVhSbE9pQW9hV1FzSUhCeWIyTmxjM01wSUQwK0lIdGNiaUFnSUNBZ0lDQWdZV04wYVhabFVISnZZMlZ6YzJWelcybGtYU0E5SUhCeWIyTmxjM003WEc0Z0lDQWdJQ0FnSUhCeWIyTmxjM011YVhOQlkzUnBkbVVnUFNCMGNuVmxPMXh1SUNBZ0lDQWdJQ0IxY0dSaGRHVlJkV1YxWlhNb2FXUXNJR0ZqZEdsMllYUmxVWFZsZFdVc0lHUmxZV04wYVhaaGRHVlJkV1YxWlNrN1hHNGdJQ0FnZlN4Y2JseHVJQ0FnSUM4dklFUmxZV04wYVhaaGRHVWdZU0J3Y205alpYTnpYRzRnSUNBZ1pHVmhZM1JwZG1GMFpUb2dLR2xrS1NBOVBpQjdYRzRnSUNBZ0lDQWdJSEJ5YjJObGMzTXVhWE5CWTNScGRtVWdQU0JtWVd4elpUdGNiaUFnSUNBZ0lDQWdkWEJrWVhSbFVYVmxkV1Z6S0dsa0xDQmtaV0ZqZEdsMllYUmxVWFZsZFdVc0lHRmpkR2wyWVhSbFVYVmxkV1VwTzF4dUlDQWdJSDBzWEc1Y2JpQWdJQ0F2THlCT2RXMWlaWElnWW1GamEyZHliM1Z1WkNCd2NtOWpaWE56WlhOY2JpQWdJQ0JuWlhST2IyNUNZV05yWjNKdmRXNWtVblZ1Ym1sdVowTnZkVzUwT2lBb0tTQTlQaUJ1YjI1Q1lXTnJaM0p2ZFc1a1VuVnVibWx1WjBOdmRXNTBMRnh1WEc0Z0lDQWdMeThnU1c1amNtVnRaVzUwSUdOMWNuSmxiblFnY0hKdlkyVnpjeUJKUkNCaGJtUWdjbVYwZFhKdVhHNGdJQ0FnWjJWMFVISnZZMlZ6YzBsa09pQW9LU0E5UGlCamRYSnlaVzUwVUhKdlkyVnpjMGxrS3lzc1hHNWNiaUFnSUNBdkx5QlNaWE52YkhabElHRmpkR2wyWVhSbEwyUmxZV04wYVhaaGRHVWdjSEp2WTJWemMyVnpJR0Z1WkNCeVpYUjFjbTRnWVdOMGFYWmxJR2xrYzF4dUlDQWdJR2RsZEVGamRHbDJaVWxrY3pvZ0tDa2dQVDRnZTF4dUlDQWdJQ0FnSUNBdktseHVJQ0FnSUNBZ0lDQWdJQ0FnVUhKdlkyVnpjeUJrWldGamRHbDJZWFJsSUhGMVpYVmxYRzRnSUNBZ0lDQWdJQ292WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJR1JsWVdOMGFYWmhkR1ZSZFdWMVpVeGxibWQwYUNBOUlHUmxZV04wYVhaaGRHVlJkV1YxWlM1c1pXNW5kR2c3WEc1Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQmtaV0ZqZEdsMllYUmxVWFZsZFdWTVpXNW5kR2c3SUdrckt5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnYVdRZ1BTQmtaV0ZqZEdsMllYUmxVWFZsZFdWYmFWMDdYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0JoWTNScGRtVkpaRWx1WkdWNElEMGdjblZ1Ym1sdVowbGtjeTVwYm1SbGVFOW1LR2xrS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElIQnliMk5sYzNNZ1BTQmhZM1JwZG1WUWNtOWpaWE56WlhOYmFXUmRPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJKWmlCMGFHbHpJR2x6SUdFZ2NuVnVibWx1WnlCd2NtOWpaWE56TENCa1pXRmpkR2wyWVhSbFhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb1lXTjBhWFpsU1dSSmJtUmxlQ0ErSUMweEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjblZ1Ym1sdVowbGtjeTV6Y0d4cFkyVW9ZV04wYVhabFNXUkpibVJsZUN3Z01TazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkWEJrWVhSbFVuVnVibWx1WjBOdmRXNTBLR1poYkhObExDQndjbTlqWlhOekxtbHpUR0Y2ZVNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1pHVnNaWFJsSUdGamRHbDJaVkJ5YjJObGMzTmxjMXRwWkYwN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvY0hKdlkyVnpjeTV2YmtSbFlXTjBhWFpoZEdVcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY0hKdlkyVnpjeTV2YmtSbFlXTjBhWFpoZEdVb2NISnZZMlZ6Y3lrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdMeXBjYmlBZ0lDQWdJQ0FnSUNBZ0lFVnRjSFI1SUdSbFlXTjBhWFpoZEdVZ2NYVmxkV1V1SUZkbElIVnpaU0JnUVhKeVlYa3VjM0JzYVdObFlDQmlaV05oZFhObElHbDBJR1J2WlhOdUozUmNiaUFnSUNBZ0lDQWdJQ0FnSUhkdmNtdHpJRzl1SUhSb1pTQnZjbWxuYVc1aGJDQmhjbkpoZVNCemJ5QjNaU0JrYjI0bmRDQm9ZWFpsSUhSdklHZGhjbUpoWjJVZ1kyOXNiR1ZqZENCaGJubDBhR2x1WjF4dUlDQWdJQ0FnSUNBcUwxeHVJQ0FnSUNBZ0lDQmtaV0ZqZEdsMllYUmxVWFZsZFdVdWMzQnNhV05sS0RBc0lHUmxZV04wYVhaaGRHVlJkV1YxWlV4bGJtZDBhQ2s3WEc1Y2JpQWdJQ0FnSUNBZ0x5cGNiaUFnSUNBZ0lDQWdJQ0FnSUZCeWIyTmxjM01nWVdOMGFYWmhkR1VnY1hWbGRXVmNiaUFnSUNBZ0lDQWdLaTljYmlBZ0lDQWdJQ0FnWTI5dWMzUWdZV04wYVhaaGRHVlJkV1YxWlV4bGJtZDBhQ0E5SUdGamRHbDJZWFJsVVhWbGRXVXViR1Z1WjNSb08xeHVYRzRnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnWVdOMGFYWmhkR1ZSZFdWMVpVeGxibWQwYURzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCcFpDQTlJR0ZqZEdsMllYUmxVWFZsZFdWYmFWMDdYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0JoWTNScGRtVkpaRWx1WkdWNElEMGdjblZ1Ym1sdVowbGtjeTVwYm1SbGVFOW1LR2xrS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElIQnliMk5sYzNNZ1BTQmhZM1JwZG1WUWNtOWpaWE56WlhOYmFXUmRPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJKWmlCd2NtOWpaWE56SUdsemJpZDBJR0ZzY21WaFpIa2djblZ1Ym1sdVp5d2dZV04wYVhaaGRHVmNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaGhZM1JwZG1WSlpFbHVaR1Y0SUQwOVBTQXRNU0FtSmlCd2NtOWpaWE56S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSEJ5YjJObGMzTXVhWE5RY21sdmNtbDBlU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlkVzV1YVc1blNXUnpMblZ1YzJocFpuUW9hV1FwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISjFibTVwYm1kSlpITXVjSFZ6YUNocFpDazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZFhCa1lYUmxVblZ1Ym1sdVowTnZkVzUwS0hSeWRXVXNJSEJ5YjJObGMzTXVhWE5NWVhwNUtUdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNod2NtOWpaWE56TG05dVFXTjBhWFpoZEdVcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY0hKdlkyVnpjeTV2YmtGamRHbDJZWFJsS0hCeWIyTmxjM01wTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lHRmpkR2wyWVhSbFVYVmxkV1V1YzNCc2FXTmxLREFzSUdGamRHbDJZWFJsVVhWbGRXVk1aVzVuZEdncE8xeHVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnlkVzV1YVc1blNXUnpPMXh1SUNBZ0lIMWNibjA3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3Byb2Nlc3MvbWFuYWdlci5qc1xuICoqIG1vZHVsZSBpZCA9IDUyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcblxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IHRydWU7XG4gICAgdmFyIGN1cnJlbnRRdWV1ZTtcbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgdmFyIGkgPSAtMTtcbiAgICAgICAgd2hpbGUgKCsraSA8IGxlbikge1xuICAgICAgICAgICAgY3VycmVudFF1ZXVlW2ldKCk7XG4gICAgICAgIH1cbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xufVxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICBxdWV1ZS5wdXNoKGZ1bik7XG4gICAgaWYgKCFkcmFpbmluZykge1xuICAgICAgICBzZXRUaW1lb3V0KGRyYWluUXVldWUsIDApO1xuICAgIH1cbn07XG5cbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG4vLyBUT0RPKHNodHlsbWFuKVxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcHJvY2Vzcy9icm93c2VyLmpzXG4gKiogbW9kdWxlIGlkID0gNTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIiwiZmlsZSI6InBvcG1vdGlvbi5nbG9iYWwuanMifQ==