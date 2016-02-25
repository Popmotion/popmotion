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
	
	var _timer = __webpack_require__(3);
	
	Object.defineProperty(exports, 'setGlobalDilation', {
	  enumerable: true,
	  get: function () {
	    return _timer.setGlobalDilation;
	  }
	});
	
	var _Action2 = __webpack_require__(4);
	
	var _Action3 = _interopRequireDefault(_Action2);
	
	var _Actor = __webpack_require__(5);
	
	var _Actor2 = _interopRequireDefault(_Actor);
	
	var _Tween = __webpack_require__(6);
	
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
/* 4 */
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
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _Action2 = __webpack_require__(4);
	
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
	//# sourceMappingURL=data:application/json;base64,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QWdCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtBQUN6Qyw4QkFBTSxJQUFJLEtBQUEsTUFBRSxDQUFDO1NBQ2hCO0tBQ0o7O0FBaEtnQixTQUFLLFdBa0t0QixlQUFlLDhCQUFHO0FBQ2QsNEJBQ08sa0JBQU0sZUFBZSxLQUFBLE1BQUU7QUFDMUIsbUJBQU8sRUFBRSxFQUFFO0FBQ1gsc0JBQVUsRUFBRSxDQUFDO1dBQ2Y7S0FDTDs7V0F4S2dCLEtBQUs7OztrQkFBTCxLQUFLIiwiZmlsZSI6IkFjdG9yLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0UGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdGlvbiBmcm9tICcuLi9hY3Rpb25zL0FjdGlvbic7XG5pbXBvcnQgZ2VuZXJhdGVCbGVuZEN1cnZlIGZyb20gJy4vaW5jL2dlbmVyYXRlLWJsZW5kLWN1cnZlJztcblxuLypcbiAgICBNZXRob2RzIGFuZCBwcm9wZXJ0aWVzIHRvIGFkZCB0byBib3VuZCBBY3Rpb25zXG4qL1xuY29uc3QgYm91bmRPblN0YXJ0ID0gKGFjdGlvbikgPT4gYWN0aW9uLmFjdG9yLmFjdGl2YXRlQWN0aW9uKGFjdGlvbi5pZCwgYWN0aW9uKTtcbmNvbnN0IGJvdW5kT25TdG9wID0gKGFjdGlvbikgPT4gYWN0aW9uLmFjdG9yLmRlYWN0aXZhdGVBY3Rpb24oYWN0aW9uLmlkKTtcbmNvbnN0IGJvdW5kUHJvcHMgPSAoYWN0b3IpID0+ICh7XG4gICAgYWN0b3I6IGFjdG9yLFxuICAgIGlzUHJpb3JpdHk6IHRydWUsXG4gICAgb246IGFjdG9yLm9uLFxuICAgIF9vblN0YXJ0OiBib3VuZE9uU3RhcnQsXG4gICAgX29uU3RvcDogYm91bmRPblN0b3AsXG4gICAgb25SZW5kZXI6IHVuZGVmaW5lZFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdG9yIGV4dGVuZHMgQWN0aW9uIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuYWN0aXZlQWN0aW9ucyA9IHt9O1xuICAgICAgICB0aGlzLm51bUFjdGl2ZUFjdGlvbnMgPSAwO1xuICAgIH1cblxuICAgIHNldChwcm9wcywgaW5zdGFudCkge1xuICAgICAgICBpZiAoaW5zdGFudCB8fCAhdGhpcy5iZWhhdmlvdXIpIHtcbiAgICAgICAgICAgIHN1cGVyLnNldChwcm9wcyk7XG4gICAgICAgICAgICB0aGlzLm9uY2UoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGFjdGlvbiA9IHRoaXMucmVkdWNlcihwcm9wcyk7XG4gICAgICAgICAgICBpZiAoYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydChhY3Rpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgQmluZCBBY3Rpb24gdG8gQWN0b3JcbiAgICAqL1xuICAgIGJpbmQoYWN0aW9uKSB7XG4gICAgICAgIGNvbnN0IGluaGVyaXRlZEFjdGlvbiA9IGFjdGlvbi5pbmhlcml0KCk7XG4gICAgICAgIGxldCBuZXdWYWx1ZXMgPSB7fTtcbiAgICAgICAgbGV0IGhhc05ld1ZhbHVlcyA9IGZhbHNlO1xuXG4gICAgICAgIC8vIENyZWF0ZSB2YWx1ZXMgb24gYWN0b3IgdGhhdCBkb24ndCBleGlzdFxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gaW5oZXJpdGVkQWN0aW9uLnZhbHVlcykge1xuICAgICAgICAgICAgaWYgKGluaGVyaXRlZEFjdGlvbi52YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiAhdGhpcy52YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIG5ld1ZhbHVlc1trZXldID0gaW5oZXJpdGVkQWN0aW9uLnZhbHVlc1trZXldO1xuICAgICAgICAgICAgICAgIGhhc05ld1ZhbHVlcyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaGFzTmV3VmFsdWVzKSB7XG4gICAgICAgICAgICB0aGlzLnNldCh7IHZhbHVlczogbmV3VmFsdWVzIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluaGVyaXRlZEFjdGlvbi5zZXQoYm91bmRQcm9wcyh0aGlzLCBpbmhlcml0ZWRBY3Rpb24pKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBTdGFydCBBY3RvclxuXG4gICAgICAgIElmIEFjdGlvbiBpcyBwcm92aWRlZCwgYmluZCBpdCB0byB0aGlzIEFjdG9yIGFuZCBzdGFydFxuXG4gICAgICAgIEBwYXJhbSAob3B0aW9uYWwpIFtBY3Rpb25dXG4gICAgKi9cbiAgICBzdGFydChhY3Rpb24pIHtcbiAgICAgICAgc3VwZXIuc3RhcnQoKTtcblxuICAgICAgICBpZiAoYWN0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCBib3VuZEFjdGlvbiA9IHRoaXMuYmluZChhY3Rpb24pO1xuICAgICAgICAgICAgYm91bmRBY3Rpb24uc3RhcnQoKTtcblxuICAgICAgICAgICAgcmV0dXJuIGJvdW5kQWN0aW9uO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMuYWN0aXZlQWN0aW9ucykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZUFjdGlvbnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhY3Rpb24gPSB0aGlzLmFjdGl2ZUFjdGlvbnNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhY3Rpb24uaXNBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbi5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc3RvcCgpIHtcbiAgICAgICAgc3VwZXIuc3RvcCgpO1xuXG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLmFjdGl2ZUFjdGlvbnMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZUFjdGlvbnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlQWN0aW9uc1trZXldLnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHdpbGxSZW5kZXIoYWN0b3IsIGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSB0aGlzLnZhbHVlS2V5c1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcbiAgICAgICAgICAgIGNvbnN0IGRyaXZlciA9IHZhbHVlLm51bURyaXZlcnMgPyB0aGlzLmFjdGl2ZUFjdGlvbnNbdmFsdWUuZHJpdmVyc1swXV0gOiBmYWxzZTtcbiAgICAgICAgICAgIGxldCBuZXdDdXJyZW50ID0gdmFsdWUubnVtRHJpdmVycyA/IGRyaXZlci52YWx1ZXNba2V5XS5jdXJyZW50IDogdmFsdWUuY3VycmVudDtcblxuICAgICAgICAgICAgaWYgKGRyaXZlci5ibGVuZEN1cnZlKSB7XG4gICAgICAgICAgICAgICAgbmV3Q3VycmVudCA9IGRyaXZlci5ibGVuZEN1cnZlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSBuZXdDdXJyZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1cGVyLndpbGxSZW5kZXIoYWN0b3IsIGZyYW1lU3RhbXAsIGVsYXBzZWQpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIEFkZCBhY3RpdmUgYWN0aW9uc1xuXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgICAgICBAcGFyYW0gW0FjdGlvbl1cbiAgICAqL1xuICAgIGFjdGl2YXRlQWN0aW9uKGlkLCBhY3Rpb24pIHtcbiAgICAgICAgdGhpcy5hY3RpdmVBY3Rpb25zW2lkXSA9IGFjdGlvbjtcbiAgICAgICAgdGhpcy5udW1BY3RpdmVBY3Rpb25zKys7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY3Rpb24ubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGFjdGlvbi52YWx1ZUtleXNbaV07XG4gICAgICAgICAgICBjb25zdCBhY3Rpb25WYWx1ZSA9IGFjdGlvbi52YWx1ZXNba2V5XTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcblxuICAgICAgICAgICAgLy8gSWYgd2UncmUgYmxlbmRpbmcgdGhpcyBhY3Rpb24sIGFuZCB0aGVyZSdzIG9uIGFscmVhZHkgaW4gcHJvZ3Jlc3NcbiAgICAgICAgICAgIGlmIChhY3Rpb24uYmxlbmQgJiYgdmFsdWUubnVtRHJpdmVycykge1xuICAgICAgICAgICAgICAgIGFjdGlvbi5ibGVuZEN1cnZlID0gZ2VuZXJhdGVCbGVuZEN1cnZlKHRoaXMuYWN0aXZlQWN0aW9uc1t2YWx1ZS5kcml2ZXJzWzBdXSwgYWN0aW9uLCBrZXkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBQYXNzIEFjdG9yIHZhbHVlIHByb3BlcnRpZXMgdG8gQWN0aW9uXG4gICAgICAgICAgICAgICAgYWN0aW9uVmFsdWUudmVsb2NpdHkgKz0gdmFsdWUudmVsb2NpdHk7XG4gICAgICAgICAgICAgICAgYWN0aW9uVmFsdWUuZnJvbSA9IGFjdGlvblZhbHVlLmN1cnJlbnQgPSB2YWx1ZS5jdXJyZW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YWx1ZS5kcml2ZXJzID0gW2lkXTtcbiAgICAgICAgICAgIHZhbHVlLm51bURyaXZlcnMgPSB2YWx1ZS5kcml2ZXJzLmxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm51bUFjdGl2ZUFjdGlvbnMpIHtcbiAgICAgICAgICAgIHN1cGVyLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBSZW1vdmUgYWN0aXZlIGFjdGlvbnNcblxuICAgICAgICBAcGFyYW0gW251bWJlcl1cbiAgICAqL1xuICAgIGRlYWN0aXZhdGVBY3Rpb24oaWQpIHtcbiAgICAgICAgY29uc3QgYWN0aW9uID0gdGhpcy5hY3RpdmVBY3Rpb25zW2lkXTtcblxuICAgICAgICBpZiAoYWN0aW9uKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFjdGlvbi5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGFjdGlvbi52YWx1ZUtleXNbaV07XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRyaXZlckluZGV4ID0gdmFsdWUuZHJpdmVycy5pbmRleE9mKGlkKTtcblxuICAgICAgICAgICAgICAgIGlmIChkcml2ZXJJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUuZHJpdmVycy5zcGxpY2UoZHJpdmVySW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5udW1Ecml2ZXJzLS07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5hY3RpdmVBY3Rpb25zW2lkXTtcbiAgICAgICAgICAgIHRoaXMubnVtQWN0aXZlQWN0aW9ucy0tO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLm51bUFjdGl2ZUFjdGlvbnMgJiYgdGhpcy5pc0FjdGl2ZSkge1xuICAgICAgICAgICAgc3VwZXIuc3RvcCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0RGVmYXVsdFZhbHVlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3VwZXIuZ2V0RGVmYXVsdFZhbHVlKCksXG4gICAgICAgICAgICBkcml2ZXJzOiBbXSxcbiAgICAgICAgICAgIG51bURyaXZlcnM6IDBcbiAgICAgICAgfTtcbiAgICB9XG59Il19

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _Action2 = __webpack_require__(4);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL1R3ZWVuLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDO0FBQ3RCLElBQU0sVUFBVSxHQUFHO0FBQ2YsUUFBSSxFQUFFLFNBQVM7QUFDZixRQUFJLEVBQUUsU0FBUztBQUNmLFFBQUksRUFBRSxZQUFZO0NBQ3JCLENBQUM7O0lBRW1CLEtBQUs7Y0FBTCxLQUFLOzthQUFMLEtBQUs7OEJBQUwsS0FBSzs7Ozs7QUFBTCxTQUFLLFdBQ3RCLEtBQUssb0JBQUc7QUFDSiwwQkFBTSxLQUFLLEtBQUEsTUFBRSxDQUFDO0FBQ2QsWUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7QUFDakIsWUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDOztBQUVyRCxlQUFPLElBQUksQ0FBQztLQUNmOztBQVBnQixTQUFLLFdBU3RCLFFBQVEscUJBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUU7QUFDakMsWUFBTSxjQUFjLEdBQUcsQUFBQyxJQUFJLENBQUMsYUFBYSxLQUFLLENBQUMsR0FBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDOztBQUUxRCxZQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztBQUNsQixZQUFJLENBQUMsT0FBTyxJQUFJLEFBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQzs7QUFFN0QsYUFBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDeEMsZ0JBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDOUIsZ0JBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FB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LCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWN0aW9uIGZyb20gJy4vQWN0aW9uJztcbmltcG9ydCBlYXNpbmcgZnJvbSAnLi9lYXNpbmcvcHJlc2V0LWVhc2luZyc7XG5pbXBvcnQgeyBjdXJyZW50VGltZSwgaXNOdW0gfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuaW1wb3J0IHtcbiAgICBlYXNlLFxuICAgIHJlc3RyaWN0LFxuICAgIGdldFByb2dyZXNzRnJvbVZhbHVlLFxuICAgIHN0ZXBQcm9ncmVzc1xufSBmcm9tICcuLi9pbmMvY2FsYyc7XG5cbmNvbnN0IENPVU5UID0gJ0NvdW50JztcbmNvbnN0IE5FWFRfU1RFUFMgPSB7XG4gICAgbG9vcDogJ3Jlc3RhcnQnLFxuICAgIHlveW86ICdyZXZlcnNlJyxcbiAgICBmbGlwOiAnZmxpcFZhbHVlcydcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFR3ZWVuIGV4dGVuZHMgQWN0aW9uIHtcbiAgICBzdGFydCgpIHtcbiAgICAgICAgc3VwZXIuc3RhcnQoKTtcbiAgICAgICAgdGhpcy5lbGFwc2VkID0gMDtcbiAgICAgICAgdGhpcy5mbGlwQ291bnQgPSB0aGlzLnlveW9Db3VudCA9IHRoaXMubG9vcENvdW50ID0gMDtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBvblVwZGF0ZSh0d2VlbiwgZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgICAgICBjb25zdCBwcm9ncmVzc1RhcmdldCA9ICh0aGlzLnBsYXlEaXJlY3Rpb24gPT09IDEpID8gMSA6IDA7XG5cbiAgICAgICAgdGhpcy5lbmRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuZWxhcHNlZCArPSAoZWxhcHNlZCAqIHRoaXMuZGlsYXRlKSAqIHRoaXMucGxheURpcmVjdGlvbjtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHRoaXMudmFsdWVLZXlzW2ldO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuXG4gICAgICAgICAgICBsZXQgcHJvZ3Jlc3MgPSByZXN0cmljdChnZXRQcm9ncmVzc0Zyb21WYWx1ZSh0aGlzLmVsYXBzZWQgLSB2YWx1ZS5kZWxheSwgMCwgdmFsdWUuZHVyYXRpb24pLCAwLCAxKTtcblxuICAgICAgICAgICAgLy8gTWFyayBUd2VlbiBhcyBOT1QgZW5kZWQgaWYgc3RpbGwgaW4gcHJvZ3Jlc3NcbiAgICAgICAgICAgIGlmIChwcm9ncmVzcyAhPT0gcHJvZ3Jlc3NUYXJnZXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFN0ZXAgcHJvZ3Jlc3MgaWYgd2UncmUgc3RlcHBpbmdcbiAgICAgICAgICAgIGlmICh2YWx1ZS5zdGVwcykge1xuICAgICAgICAgICAgICAgIHByb2dyZXNzID0gc3RlcFByb2dyZXNzKHByb2dyZXNzLCB2YWx1ZS5zdGVwcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEVhc2UgcHJvZ3Jlc3NcbiAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSBlYXNlKHByb2dyZXNzLCB2YWx1ZS5mcm9tLCB2YWx1ZS50bywgdmFsdWUuZWFzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkZyYW1lRW5kKCkge1xuICAgICAgICBpZiAodGhpcy5lbmRlZCkge1xuICAgICAgICAgICAgbGV0IHN0ZXBUYWtlbiA9IGZhbHNlO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gTkVYVF9TVEVQUykge1xuICAgICAgICAgICAgICAgIGlmIChORVhUX1NURVBTLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF4U3RlcHMgPSB0aGlzW2tleV07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG1heFN0ZXBzID09PSB0cnVlIHx8IChpc051bShtYXhTdGVwcykgJiYgbWF4U3RlcHMgPiB0aGlzW2tleSArIENPVU5UXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNba2V5ICsgQ09VTlRdKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGVwVGFrZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tORVhUX1NURVBTW2tleV1dKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghc3RlcFRha2VuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmxpcFZhbHVlcygpIHtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gdGhpcy52YWx1ZXM7XG5cbiAgICAgICAgdGhpcy5lbGFwc2VkID0gdGhpcy5kdXJhdGlvbiAtIHRoaXMuZWxhcHNlZDtcblxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHZhbHVlc1trZXldO1xuICAgICAgICAgICAgICAgIFt2YWx1ZS50bywgdmFsdWUuZnJvbV0gPSBbdmFsdWUuZnJvbSwgdmFsdWUudG9dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmV2ZXJzZSgpIHtcbiAgICAgICAgdGhpcy5wbGF5RGlyZWN0aW9uICo9IC0xO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXN0YXJ0KCkge1xuICAgICAgICB0aGlzLmVsYXBzZWQgPSAodGhpcy5wbGF5RGlyZWN0aW9uID09PSAxKSA/IDAgOiB0aGlzLmR1cmF0aW9uO1xuICAgICAgICB0aGlzLnN0YXJ0ZWQgPSBjdXJyZW50VGltZSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZWVrKHByb2dyZXNzKSB7XG4gICAgICAgIHRoaXMuc2Vla1RpbWUodGhpcy5kdXJhdGlvbiAqIHByb2dyZXNzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2Vla1RpbWUoZWxhcHNlZCkge1xuICAgICAgICB0aGlzLm9uY2UoKTtcbiAgICAgICAgdGhpcy5lbGFwc2VkID0gZWxhcHNlZDtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgXG4gICAgZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3VwZXIuZ2V0RGVmYXVsdFByb3BzKCksXG4gICAgICAgICAgICBibGVuZDogdHJ1ZSxcbiAgICAgICAgICAgIGRlbGF5OiAwLFxuICAgICAgICAgICAgZGlsYXRlOiAxLFxuICAgICAgICAgICAgZHVyYXRpb246IDMwMCxcbiAgICAgICAgICAgIGxvb3A6IGZhbHNlLFxuICAgICAgICAgICAgeW95bzogZmFsc2UsXG4gICAgICAgICAgICBmbGlwOiBmYWxzZSxcbiAgICAgICAgICAgIHBsYXlEaXJlY3Rpb246IDEsXG4gICAgICAgICAgICBlbmRlZDogZmFsc2UsXG4gICAgICAgICAgICBlbGFwc2VkOiAwXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0RGVmYXVsdFZhbHVlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3VwZXIuZ2V0RGVmYXVsdFZhbHVlKCksXG4gICAgICAgICAgICBkZWxheTogMCxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgICAgICAgICBlYXNlOiBlYXNpbmcuZWFzZU91dCxcbiAgICAgICAgICAgIGVsYXBzZWQ6IDAsXG4gICAgICAgICAgICBzdGFnZ2VyOiAwLFxuICAgICAgICAgICAgc3RlcHM6IDAsXG4gICAgICAgICAgICB0bzogMCxcbiAgICAgICAgICAgIHJvdW5kOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldERlZmF1bHRWYWx1ZVByb3AoKSB7XG4gICAgICAgIHJldHVybiAndG8nO1xuICAgIH1cbn1cbiJdfQ==

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _Action2 = __webpack_require__(4);
	
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
	        if (this.autoComplete) {
	            this.inactiveFrames = this.hasChanged ? 1 : this.inactiveFrames + 1;
	
	            if (this.inactiveFrames >= this.maxInactiveFrames) {
	                this.complete();
	            }
	        }
	    };
	
	    /*
	        # Get default Simulate props
	         @return [object]
	    */
	
	    Physics.prototype.getDefaultProps = function getDefaultProps() {
	        return _extends({}, _Action.prototype.getDefaultProps.call(this), {
	            autoComplete: true,
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL1BoeXNpY3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUlxQixPQUFPO2NBQVAsT0FBTzs7QUFFeEIsYUFGaUIsT0FBTyxHQUVIOzhCQUZKLE9BQU87OzBDQUVULElBQUk7QUFBSixnQkFBSTs7O3FEQUNmLDBDQUFTLElBQUksRUFBQzs7QUFDZCxjQUFLLGNBQWMsR0FBRyxDQUFDLENBQUM7QUFDeEIsY0FBSyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7O0tBQ2xDOztBQU5nQixXQUFPLFdBUXhCLFFBQVEscUJBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUU7QUFDbkMsWUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7O0FBRXhCLGFBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ3hDLGdCQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzlCLGdCQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQy9CLGdCQUFNLGFBQWEsR0FBRyxLQUFLLENBQUMsSUFBSTs7O0FBQUMsQUFHakMsaUJBQUssQ0FBQyxRQUFRLElBQUksVUFwQnJCLGFBQWEsRUFvQnNCLEtBQUssQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDOzs7QUFBQyxBQUc3RCxpQkFBSyxDQUFDLFFBQVEsYUFBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDOzs7QUFBQyxBQUcxRCxnQkFBSSxLQUFLLENBQUMsTUFBTSxJQUFJLFdBekJ2QixLQUFLLEVBeUJ3QixLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDakMsb0JBQU0sZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO0FBQ2xELHFCQUFLLENBQUMsUUFBUSxJQUFJLGdCQUFnQixHQUFHLFVBNUI1QyxhQUFhLEVBNEI2QyxLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQzdFOzs7QUFBQSxBQUdELGlCQUFLLENBQUMsT0FBTyxJQUFJLFVBaENwQixhQUFhLEVBZ0NxQixLQUFLLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQzs7O0FBQUMsQUFHeEQsZ0JBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxhQUFhLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxDQUFDLFNBQVMsSUFBSyxLQUFLLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssS0FBSyxDQUFDLEVBQUUsQUFBQyxFQUFFO0FBQ2hJLG9CQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzthQUMxQjtTQUNKO0tBQ0o7O0FBcENnQixXQUFPLFdBc0N4QixVQUFVLHlCQUFHO0FBQ1QsWUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO0FBQ25CLGdCQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDOztBQUVwRSxnQkFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtBQUMvQyxvQkFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ25CO1NBQ0o7S0FDSjs7Ozs7OztBQTlDZ0IsV0FBTyxXQXFEeEIsZUFBZSw4QkFBRztBQUNkLDRCQUNPLGtCQUFNLGVBQWUsS0FBQSxNQUFFO0FBQzFCLHdCQUFZLEVBQUUsSUFBSTtBQUNsQiw2QkFBaUIsRUFBRSxDQUFDO1dBQ3RCO0tBQ0w7Ozs7Ozs7QUEzRGdCLFdBQU8sV0FrRXhCLGVBQWUsOEJBQUc7QUFDZCw0QkFDTyxrQkFBTSxlQUFlLEtBQUEsTUFBRTtBQUMxQix3QkFBWSxFQUFFLENBQUM7QUFDZixrQkFBTSxFQUFFLENBQUM7QUFDVCxrQkFBTSxFQUFFLENBQUM7QUFDVCxxQkFBUyxFQUFFLE1BQU07QUFDakIsb0JBQVEsRUFBRSxDQUFDO0FBQUEsV0FDYjtLQUNMOzs7Ozs7OztBQTNFZ0IsV0FBTyxXQW1GeEIsbUJBQW1CLGtDQUFHO0FBQ2xCLGVBQU8sVUFBVSxDQUFDO0tBQ3JCOztXQXJGZ0IsT0FBTzs7O2tCQUFQLE9BQU8iLCJmaWxlIjoiUGh5c2ljcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dFBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY3Rpb24gZnJvbSAnLi9BY3Rpb24nO1xuaW1wb3J0IHsgc3BlZWRQZXJGcmFtZSB9IGZyb20gJy4uL2luYy9jYWxjJztcbmltcG9ydCB7IGlzTnVtIH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGh5c2ljcyBleHRlbmRzIEFjdGlvbiB7XG5cbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgICAgICB0aGlzLmluYWN0aXZlRnJhbWVzID0gMDtcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVzVmVsb2NpdHkgPSB0cnVlO1xuICAgIH1cblxuICAgIG9uVXBkYXRlKHBoeXNpY3MsIGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gZmFsc2U7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSB0aGlzLnZhbHVlS2V5c1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcbiAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzVmFsdWUgPSB2YWx1ZS5wcmV2O1xuXG4gICAgICAgICAgICAvLyBBcHBseSBhY2NlbGVyYXRpb25cbiAgICAgICAgICAgIHZhbHVlLnZlbG9jaXR5ICs9IHNwZWVkUGVyRnJhbWUodmFsdWUuYWNjZWxlcmF0aW9uLCBlbGFwc2VkKTtcblxuICAgICAgICAgICAgLy8gQXBwbHkgZnJpY3Rpb25cbiAgICAgICAgICAgIHZhbHVlLnZlbG9jaXR5ICo9ICgxIC0gdmFsdWUuZnJpY3Rpb24pICoqIChlbGFwc2VkIC8gMTAwKTtcblxuICAgICAgICAgICAgLy8gQXBwbHkgc3ByaW5nXG4gICAgICAgICAgICBpZiAodmFsdWUuc3ByaW5nICYmIGlzTnVtKHZhbHVlLnRvKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlVG9UYXJnZXQgPSB2YWx1ZS50byAtIHZhbHVlLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgdmFsdWUudmVsb2NpdHkgKz0gZGlzdGFuY2VUb1RhcmdldCAqIHNwZWVkUGVyRnJhbWUodmFsdWUuc3ByaW5nLCBlbGFwc2VkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQXBwbHkgbGF0ZXN0IHZlbG9jaXR5XG4gICAgICAgICAgICB2YWx1ZS5jdXJyZW50ICs9IHNwZWVkUGVyRnJhbWUodmFsdWUudmVsb2NpdHksIGVsYXBzZWQpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBDaGVjayBpZiB2YWx1ZSBoYXMgY2hhbmdlZFxuICAgICAgICAgICAgaWYgKHZhbHVlLmN1cnJlbnQgIT09IHByZXZpb3VzVmFsdWUgfHwgTWF0aC5hYnModmFsdWUudmVsb2NpdHkpID49IHZhbHVlLnN0b3BTcGVlZCB8fCAodmFsdWUuc3ByaW5nICYmIHZhbHVlLmN1cnJlbnQgIT09IHZhbHVlLnRvKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkZyYW1lRW5kKCkge1xuICAgICAgICBpZiAodGhpcy5hdXRvQ29tcGxldGUpIHtcbiAgICAgICAgICAgIHRoaXMuaW5hY3RpdmVGcmFtZXMgPSB0aGlzLmhhc0NoYW5nZWQgPyAxIDogdGhpcy5pbmFjdGl2ZUZyYW1lcyArIDE7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmluYWN0aXZlRnJhbWVzID49IHRoaXMubWF4SW5hY3RpdmVGcmFtZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIEdldCBkZWZhdWx0IFNpbXVsYXRlIHByb3BzXG5cbiAgICAgICAgQHJldHVybiBbb2JqZWN0XVxuICAgICovXG4gICAgZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3VwZXIuZ2V0RGVmYXVsdFByb3BzKCksXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU6IHRydWUsXG4gICAgICAgICAgICBtYXhJbmFjdGl2ZUZyYW1lczogM1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgICMgR2V0IGRlZmF1bHQgU2ltdWxhdGUgdmFsdWUgcHJvcHNcblxuICAgICAgICBAcmV0dXJuIFtvYmplY3RdXG4gICAgKi9cbiAgICBnZXREZWZhdWx0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdXBlci5nZXREZWZhdWx0VmFsdWUoKSxcbiAgICAgICAgICAgIGFjY2VsZXJhdGlvbjogMCwgLy8gW251bWJlcl06IEFjY2VsZXJhdGlvbiB0byBhcHBseSB0byB2YWx1ZSwgaW4gdW5pdHMgcGVyIHNlY29uZFxuICAgICAgICAgICAgYm91bmNlOiAwLCAvLyBbbnVtYmVyXTogRmFjdG9yIHRvIG11bHRpcGx5IHZlbG9jaXR5IGJ5IG9uIGJvdW5jZVxuICAgICAgICAgICAgc3ByaW5nOiAwLCAvLyBbbnVtYmVyXTogU3ByaW5nIHN0cmVuZ3RoIGR1cmluZyAnc3RyaW5nJ1xuICAgICAgICAgICAgc3RvcFNwZWVkOiAwLjAwMDEsIC8vIFtudW1iZXJdOiBTdG9wIHNpbXVsYXRpb24gdW5kZXIgdGhpcyBzcGVlZFxuICAgICAgICAgICAgZnJpY3Rpb246IDAgLy8gW251bWJlcl06IEZyaWN0aW9uIHRvIGFwcGx5IHBlciBmcmFtZSwgMC0xXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgIyBHZXQgZGVmYXVsdCBTaW11bGF0ZSB2YWx1ZSBwcm9wZXJ0eSBuYW1lXG4gICAgICAgICMjIFNldCB2YWx1ZXMgdG8gdGhpcyB3aGVuIGEgYHZhbHVlYCBpcyBub3QgcHJvdmlkZWQgYXMgYW4gb2JqZWN0XG5cbiAgICAgICAgQHJldHVybiBbc3RyaW5nXVxuICAgICovXG4gICAgZ2V0RGVmYXVsdFZhbHVlUHJvcCgpIHtcbiAgICAgICAgcmV0dXJuICd2ZWxvY2l0eSc7XG4gICAgfVxufVxuIl19

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _Action2 = __webpack_require__(4);
	
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
	
	    Process.prototype.complete = function complete() {
	        this.stop();
	
	        if (this.onComplete) {
	            this.onComplete();
	        }
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wcm9jZXNzL1Byb2Nlc3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQVksSUFBSTs7Ozs7Ozs7SUFFSyxPQUFPOzs7OztBQUl4QixhQUppQixPQUFPLENBSVosS0FBSyxFQUFFOzs7OEJBSkYsT0FBTzs7QUFLcEIsWUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7O0FBRTlCLFlBQUksQ0FBQyxVQUFVLEdBQUcsWUFBTTtBQUNwQixrQkFBSyxJQUFJLEVBQUUsQ0FBQztBQUNaLGtCQUFLLFNBQVMsR0FBRyxTQUFTLENBQUM7U0FDOUIsQ0FBQzs7QUFFRixZQUFJLENBQUMsV0FBVyxHQUFHO21CQUFNLE1BQUssU0FBUyxHQUFHLE1BQUssVUFBVTtTQUFBLENBQUM7O0FBRTFELFlBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7QUFDakMsWUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7QUFFaEIsWUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7S0FDekI7O0FBbEJnQixXQUFPLFdBb0J4QixHQUFHLGdCQUFDLEtBQUssRUFBRTtBQUNQLGFBQUssSUFBSSxHQUFHLElBQUksS0FBSyxFQUFFO0FBQ25CLGdCQUFJLEtBQUssQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7QUFDM0Isb0JBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDMUI7U0FDSjs7QUFFRCxlQUFPLElBQUksQ0FBQztLQUNmOztBQTVCZ0IsV0FBTyxXQThCeEIsS0FBSyxvQkFBRztBQUNKLFlBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQzs7QUFFN0IsWUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztBQUM3QyxZQUFJLENBQUMsVUFBVSxHQUFHLEtBQUs7OztBQUFDLEFBR3hCLFlBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtBQUNmLGdCQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3ZCOzs7QUFBQSxBQUdELFlBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtBQUNkLGdCQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3RCOztBQUVELGVBQU8sSUFBSSxDQUFDO0tBQ2Y7O0FBL0NnQixXQUFPLFdBaUR4QixJQUFJLG1CQUFHO0FBQ0gsWUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDOzs7QUFBQyxBQUd6QixZQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7QUFDZCxnQkFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN0Qjs7O0FBQUEsQUFHRCxZQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7QUFDYixnQkFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNyQjs7QUFFRCxlQUFPLElBQUksQ0FBQztLQUNmOztBQS9EZ0IsV0FBTyxXQWlFeEIsSUFBSSxtQkFBRztBQUNILFlBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNiLFlBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztBQUNuQyxlQUFPLElBQUksQ0FBQztLQUNmOztBQXJFZ0IsV0FBTyxXQXVFeEIsUUFBUSx1QkFBRztBQUNQLFlBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7QUFFWixZQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7QUFDakIsZ0JBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNyQjtLQUNKOzs7Ozs7O0FBN0VnQixXQUFPLFdBb0Z4QixlQUFlLDhCQUFHO0FBQ2QsZUFBTyxFQUFFLENBQUM7S0FDYjs7Ozs7Ozs7O0FBdEZnQixXQUFPLFdBK0Z4QixPQUFPLG9CQUFDLEtBQUssRUFBRTtZQUNILEVBQUUsR0FBd0IsSUFBSSxDQUE5QixFQUFFOztZQUFLLGNBQWMsNEJBQUssSUFBSTs7QUFDdEMsWUFBTSxVQUFVLEdBQUcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3hELGVBQU8sVUFBVSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNoQzs7V0FuR2dCLE9BQU87OztrQkFBUCxPQUFPIiwiZmlsZSI6IlByb2Nlc3MuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHRQZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBsb29wIGZyb20gJy4vbG9vcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2Nlc3Mge1xuICAgIC8qXG4gICAgICAgIFtvYmplY3RdOiBQcm9wZXJ0aWVzXG4gICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICB0aGlzLmlkID0gbG9vcC5nZXRQcm9jZXNzSWQoKTtcblxuICAgICAgICB0aGlzLl9vbkNsZWFudXAgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgICAgIHRoaXMub25DbGVhbnVwID0gdW5kZWZpbmVkO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX29uQWN0aXZhdGUgPSAoKSA9PiB0aGlzLm9uQ2xlYW51cCA9IHRoaXMuX29uQ2xlYW51cDtcblxuICAgICAgICB0aGlzLnNldCh0aGlzLmdldERlZmF1bHRQcm9wcygpKTtcbiAgICAgICAgdGhpcy5zZXQocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBzZXQocHJvcHMpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHByb3BzKSB7XG4gICAgICAgICAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IHByb3BzW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgbG9vcC5hY3RpdmF0ZSh0aGlzLmlkLCB0aGlzKTtcblxuICAgICAgICB0aGlzLm9uQ2xlYW51cCA9IHRoaXMub25BY3RpdmF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5pc0NvbXBsZXRlID0gZmFsc2U7XG5cbiAgICAgICAgLy8gUHJpdmF0ZSBgb25TdGFydGBcbiAgICAgICAgaWYgKHRoaXMuX29uU3RhcnQpIHtcbiAgICAgICAgICAgIHRoaXMuX29uU3RhcnQodGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQdWJsaWMgYG9uU3RhcnRgXG4gICAgICAgIGlmICh0aGlzLm9uU3RhcnQpIHtcbiAgICAgICAgICAgIHRoaXMub25TdGFydCh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHN0b3AoKSB7XG4gICAgICAgIGxvb3AuZGVhY3RpdmF0ZSh0aGlzLmlkKTtcblxuICAgICAgICAvLyBQcml2YXRlIGBvblN0b3BgXG4gICAgICAgIGlmICh0aGlzLl9vblN0b3ApIHtcbiAgICAgICAgICAgIHRoaXMuX29uU3RvcCh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFB1YmxpYyBgb25TdG9wYFxuICAgICAgICBpZiAodGhpcy5vblN0b3ApIHtcbiAgICAgICAgICAgIHRoaXMub25TdG9wKHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgb25jZSgpIHtcbiAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgICAgICB0aGlzLm9uQWN0aXZhdGUgPSB0aGlzLl9vbkFjdGl2YXRlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBjb21wbGV0ZSgpIHtcbiAgICAgICAgdGhpcy5zdG9wKCk7XG5cbiAgICAgICAgaWYgKHRoaXMub25Db21wbGV0ZSkge1xuICAgICAgICAgICAgdGhpcy5vbkNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIEdldCBkZWZhdWx0IEFjdGlvbiBwcm9wZXJ0aWVzXG5cbiAgICAgICAgQHJldHVybiBbb2JqZWN0XVxuICAgICovXG4gICAgZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgIyBFeHRlbmQgdGhpcyBQcm9jZXNzIHdpdGggbmV3IHByb3BlcnRpZXNcbiAgICAgICAgIyMgUmV0dXJucyBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBQcm9jZXNzJ3MgYHByb3RvdHlwZWAgd2l0aCBleGlzdGluZyBhbmQgbmV3IHByb3BlcnRpZXNcblxuICAgICAgICBAcGFyYW0gW29iamVjdF0gKG9wdGlvbmFsKVxuICAgICAgICBAcmV0dXJuIFtQcm9jZXNzXVxuICAgICovXG4gICAgaW5oZXJpdChwcm9wcykge1xuICAgICAgICBjb25zdCB7IGlkLCAuLi5pbmhlcml0ZWRQcm9wcyB9ID0gdGhpcztcbiAgICAgICAgY29uc3QgbmV3UHJvY2VzcyA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKGluaGVyaXRlZFByb3BzKTtcbiAgICAgICAgcmV0dXJuIG5ld1Byb2Nlc3Muc2V0KHByb3BzKTtcbiAgICB9XG59Il19

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
	
	var _Tween = __webpack_require__(6);
	
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
	
	var _Tween = __webpack_require__(6);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvdGltZWxpbmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBK0R3QixRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTVDaEMsSUFBTSxPQUFPLEdBQUcsVUFBQyxJQUFJLEVBQUs7QUFDdEIsUUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBQ3BCLFFBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7QUFDNUIsUUFBSSxlQUFlLEdBQUcsQ0FBQyxDQUFDOzswQkFFZixDQUFDO0FBQ04sWUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3BCLFlBQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQztBQUMxQyxZQUFNLEtBQUssR0FBRyxBQUFDLFFBQVEsR0FBSSxHQUFHLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQzs7QUFFM0MsdUJBQWUsSUFBSyxBQUFDLFFBQVEsSUFBSSxHQUFHLENBQUMsTUFBTSxHQUN2QyxHQUFHLENBQUMsRUFBRSxJQUFJLFVBNUJiLGFBQWEsRUE0QmMsZUFBZSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEFBQUMsQ0FBQzs7QUFFOUQsWUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDO0FBQ2pCLGFBQUssSUFBSSxHQUFHLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtBQUMxQixnQkFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtBQUNsQyxvQkFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNoQyx3QkFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNqRDtTQUNKOztBQUVELGdCQUFRLENBQUMsSUFBSSxDQUFDO0FBQ1YsZ0JBQUksRUFBRSxlQUFlO0FBQ3JCLG9CQUFRLEVBQUUsUUFBUTtBQUNsQixnQkFBSSxFQUFFLFVBQUMsSUFBSTt1QkFBSyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQzthQUFBO1NBQ3ZDLENBQUMsQ0FBQzs7QUFFSCx1QkFBZSxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUM7OztBQXRCdEMsU0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRTtjQUF6QixDQUFDO0tBdUJUOztBQUVELFdBQU8sRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBUixRQUFRLEVBQUUsQ0FBQztDQUNuRCxDQUFDOztBQUVGLElBQU0sU0FBUyxHQUFHLGdCQUEyQztRQUF4QyxPQUFPLFFBQVAsT0FBTztRQUFFLFFBQVEsUUFBUixRQUFRO1FBQUUsY0FBYyxRQUFkLGNBQWM7O0FBQ2xELFNBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxjQUFjLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDckMsWUFBTSxNQUFLLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzFCLFlBQU0sU0FBUyxHQUFHLE9BQU8sR0FBRyxNQUFLLENBQUMsSUFBSSxDQUFDOztBQUV2QyxZQUFJLFNBQVMsR0FBRyxDQUFDLElBQUksU0FBUyxHQUFHLE1BQUssQ0FBQyxRQUFRLEVBQUU7QUFDN0Msa0JBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDekI7S0FDSjtDQUNKLENBQUM7O0FBRWEsU0FBUyxRQUFRLENBQUMsR0FBRyxFQUFjO1FBQVosS0FBSyx5REFBRyxFQUFFOzttQkFDWixPQUFPLENBQUMsR0FBRyxDQUFDOztRQUFwQyxTQUFTLFlBQVQsU0FBUztRQUFFLFFBQVEsWUFBUixRQUFROztBQUUzQixXQUFPLGlDQUNBLEtBQUs7QUFDUixnQkFBUSxFQUFFLFNBQVM7QUFDbkIsWUFBSSxFQUFFLHVCQUFPLE1BQU07QUFDbkIsY0FBTSxFQUFFO0FBQ0osYUFBQyxFQUFFLENBQUM7U0FDUDtBQUNELGdCQUFRLEVBQUUsUUFBUTtBQUNsQixzQkFBYyxFQUFFLFFBQVEsQ0FBQyxNQUFNO0FBQy9CLGdCQUFRLEVBQUUsU0FBUztPQUNyQixDQUFDO0NBQ04iLCJmaWxlIjoidGltZWxpbmUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHRQZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHdlZW4gZnJvbSAnLi4vYWN0aW9ucy9Ud2Vlbic7XG5pbXBvcnQgZWFzaW5nIGZyb20gJy4uL2FjdGlvbnMvZWFzaW5nL3ByZXNldC1lYXNpbmcnO1xuaW1wb3J0IHsgcmVsYXRpdmVWYWx1ZSB9IGZyb20gJy4vY2FsYyc7XG5cbi8qXG4gICAgQHBhcmFtIFthcnJheV1cbiAgICAgICAgU2VxdWVudGlhbCBhcnJheSBvZiB0d2VlbnMsIGVhY2ggaXRlbSBjYW4gYmUgYSB0d2VlbiBvciBkZWZpbml0aW9uIG9iajpcblxuICAgICAgICBbXG4gICAgICAgICAgICBuZXcgVHdlZW4oKSxcbiAgICAgICAgICAgIHN0YWdnZXIoKSxcbiAgICAgICAgICAgIHRpbWVsaW5lKCksXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHdlZW46IG5ldyBUd2VlbigpLFxuICAgICAgICAgICAgICAgIGF0OiAxMDAsXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiBcIis9MTAwXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuKi9cbmNvbnN0IGFuYWx5emUgPSAoZGVmcykgPT4ge1xuICAgIGNvbnN0IHRpbWVsaW5lID0gW107XG4gICAgY29uc3QgbnVtRGVmcyA9IGRlZnMubGVuZ3RoO1xuICAgIGxldCBjdXJyZW50UGxheWhlYWQgPSAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1EZWZzOyBpKyspIHtcbiAgICAgICAgY29uc3QgZGVmID0gZGVmc1tpXTtcbiAgICAgICAgY29uc3QgZGVmSXNPYmogPSBkZWYudHdlZW4gPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIGNvbnN0IHR3ZWVuID0gKGRlZklzT2JqKSA/IGRlZi50d2VlbiA6IGRlZjtcblxuICAgICAgICBjdXJyZW50UGxheWhlYWQgKz0gKChkZWZJc09iaiAmJiBkZWYub2Zmc2V0KSA/XG4gICAgICAgICAgICBkZWYuYXQgfHwgcmVsYXRpdmVWYWx1ZShjdXJyZW50UGxheWhlYWQsIGRlZi5vZmZzZXQpIDogMCk7XG5cbiAgICAgICAgbGV0IGR1cmF0aW9uID0gMDtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHR3ZWVuLnZhbHVlcykge1xuICAgICAgICAgICAgaWYgKHR3ZWVuLnZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0d2Vlbi52YWx1ZXNba2V5XTtcbiAgICAgICAgICAgICAgICBkdXJhdGlvbiA9IE1hdGgubWF4KGR1cmF0aW9uLCB2YWx1ZS5kdXJhdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aW1lbGluZS5wdXNoKHtcbiAgICAgICAgICAgIGZyb206IGN1cnJlbnRQbGF5aGVhZCxcbiAgICAgICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgICAgICAgIGZpcmU6ICh0aW1lKSA9PiB0d2Vlbi5zZWVrVGltZSh0aW1lKVxuICAgICAgICB9KTtcblxuICAgICAgICBjdXJyZW50UGxheWhlYWQgKz0gdHdlZW4uZHVyYXRpb247XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgdG90YWxUaW1lOiBjdXJyZW50UGxheWhlYWQsIHRpbWVsaW5lIH07XG59O1xuXG5jb25zdCBzZXRUd2VlbnMgPSAoeyBlbGFwc2VkLCB0aW1lbGluZSwgdGltZWxpbmVMZW5ndGggfSkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGltZWxpbmVMZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB0d2VlbiA9IHRpbWVsaW5lW2ldO1xuICAgICAgICBjb25zdCB0d2VlblRpbWUgPSBlbGFwc2VkIC0gdHdlZW4uZnJvbTtcblxuICAgICAgICBpZiAodHdlZW5UaW1lID4gMCAmJiB0d2VlblRpbWUgPCB0d2Vlbi5kdXJhdGlvbikge1xuICAgICAgICAgICAgdHdlZW4uZmlyZSh0d2VlblRpbWUpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGltZWxpbmUoZGVmLCBwcm9wcyA9IHt9KSB7XG4gICAgY29uc3QgeyB0b3RhbFRpbWUsIHRpbWVsaW5lIH0gPSBhbmFseXplKGRlZik7XG5cbiAgICByZXR1cm4gbmV3IFR3ZWVuKHtcbiAgICAgICAgLi4ucHJvcHMsXG4gICAgICAgIGR1cmF0aW9uOiB0b3RhbFRpbWUsXG4gICAgICAgIGVhc2U6IGVhc2luZy5saW5lYXIsXG4gICAgICAgIHZhbHVlczoge1xuICAgICAgICAgICAgcDogMVxuICAgICAgICB9LFxuICAgICAgICB0aW1lbGluZTogdGltZWxpbmUsXG4gICAgICAgIHRpbWVsaW5lTGVuZ3RoOiB0aW1lbGluZS5sZW5ndGgsXG4gICAgICAgIG9uUmVuZGVyOiBzZXRUd2VlbnNcbiAgICB9KTtcbn0iXX0=

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
	    }
	
	    /*
	        Get element property
	         @param [string]: Key to read
	        @param [boolean]: If `true`, will override cached property
	    */
	
	    Adapter.prototype.get = function get(key, refresh) {
	        var mappedKey = this.mapStateKey(key);
	
	        if (refresh || !this.cache.hasOwnProperty(key)) {
	            return this.cache[mappedKey] = this.getter(mappedKey);
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
	})();
	
	exports.default = function (element) {
	    return new Adapter(element);
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2FkYXB0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQVlNLE9BQU87QUFDVCxhQURFLE9BQU8sQ0FDRyxPQUFPLEVBQUU7OEJBRG5CLE9BQU87O0FBRUwsWUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIsWUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7S0FDbkI7Ozs7Ozs7QUFBQTtBQUpDLFdBQU8sV0FZVCxHQUFHLGdCQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUU7QUFDZCxZQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDOztBQUV4QyxZQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO0FBQzVDLG1CQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUN6RCxNQUFNO0FBQ0gsbUJBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNoQztLQUNKOzs7Ozs7O0FBcEJDLFdBQU8sV0EyQlQsR0FBRyxnQkFBQyxLQUFLLEVBQUU7O0FBRVAsYUFBSyxJQUFJLEdBQUcsSUFBSSxLQUFLLEVBQUU7QUFDbkIsZ0JBQUksS0FBSyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtBQUMzQixvQkFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN4QyxvQkFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDdEM7U0FDSjs7QUFFRCxlQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ2xDOzs7Ozs7QUFyQ0MsV0FBTyxXQTBDVCxNQUFNLG1CQUFDLEdBQUcsRUFBRTtBQUNSLGVBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUM1Qjs7Ozs7O0FBNUNDLFdBQU8sV0FpRFQsTUFBTSxtQkFBQyxLQUFLLEVBQUU7QUFDVixhQUFLLElBQUksR0FBRyxJQUFJLEtBQUssRUFBRTtBQUNuQixnQkFBSSxLQUFLLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO0FBQzNCLG9CQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNsQztTQUNKO0tBQ0o7Ozs7Ozs7O0FBdkRDLFdBQU8sV0ErRFQsV0FBVyx3QkFBQyxHQUFHLEVBQUU7QUFDYixlQUFPLEFBQUMsSUFBSSxDQUFDLFFBQVEsR0FBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUM7S0FDNUQ7Ozs7Ozs7O0FBakVDLFdBQU8sV0F5RVQsWUFBWSx5QkFBQyxHQUFHLEVBQUU7QUFDZCxlQUFPLEFBQUMsSUFBSSxDQUFDLFlBQVksR0FBSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7S0FDakY7O1dBM0VDLE9BQU87OztrQkE4RUUsVUFBQyxPQUFPO1dBQUssSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDO0NBQUEiLCJmaWxlIjoiYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dFBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gICAgIyBBZGFwdGVyIGNsYXNzXG4gICAgIyMgUHJvdmlkZXMgYSBnZXR0ZXIvc2V0dGVyIHdyYXBwZXIgYW5kIHByb3BlcnR5IGNhY2hlIGZvciBkaWZmZXJlbnQgZWxlbWVudCB0eXBlc1xuXG4gICAgT3ZlcnJpZGUgYGdldHRlcmAgYW5kIGBzZXR0ZXJgIHRvIHJlaW1wbGVtZW50IHRoZSBpbnRlcmZhY2UgZm9yIG5ldyBlbGVtZW50IHR5cGVzLlxuXG4gICAgU2V0IGBFeHRlbmRlZC5wcm90b3R5cGUuc3RhdGVNYXBgIGFzIGFuIG9iamVjdCBrZXkvdmFsdWUgbWFwIHRvIHRyYW5zbGF0ZSBpbmNvbWluZyBrZXlzIHRvXG4gICAgQVBJLXNwZWNpZmljIGtleXMuIEZvciBpbnN0YW5jZSwgeyB4OiAndHJhbnNsYXRlWCcgfS4gXG5cbiAgICBTZXQgYEV4dGVuZGVkLnByb3RvdHlwZS52YWx1ZVR5cGVNYXBgIGFzIGFuIG9iamVjdCBrZXkvdmFsdWUgbWFwIHRvIHJldHVybiBhIHZhbHVlIHR5cGUgd2l0aFxuICAgIGBnZXRWYWx1ZVR5cGUoa2V5KWAgKGtleSB3aWxsIGJlIG1hcHBlZCBhY2NvcmRpbmcgdG8gYHN0YXRlTWFwYClcbiovXG5jbGFzcyBBZGFwdGVyIHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuY2FjaGUgPSB7fTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBHZXQgZWxlbWVudCBwcm9wZXJ0eVxuXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogS2V5IHRvIHJlYWRcbiAgICAgICAgQHBhcmFtIFtib29sZWFuXTogSWYgYHRydWVgLCB3aWxsIG92ZXJyaWRlIGNhY2hlZCBwcm9wZXJ0eVxuICAgICovXG4gICAgZ2V0KGtleSwgcmVmcmVzaCkge1xuICAgICAgICBjb25zdCBtYXBwZWRLZXkgPSB0aGlzLm1hcFN0YXRlS2V5KGtleSk7XG5cbiAgICAgICAgaWYgKHJlZnJlc2ggfHwgIXRoaXMuY2FjaGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVbbWFwcGVkS2V5XSA9IHRoaXMuZ2V0dGVyKG1hcHBlZEtleSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jYWNoZVttYXBwZWRLZXldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgU2V0IGVsZW1lbnQgcHJvcGVydGllc1xuXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogS2V5L3ZhbHVlIHByb3BlcnRpZXMgdG8gc2V0XG4gICAgKi9cbiAgICBzZXQocHJvcHMpIHtcbiAgICAgICAgLy8gVHJhbnNsYXRlIHByb3BzXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBwcm9wcykge1xuICAgICAgICAgICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXBwZWRLZXkgPSB0aGlzLm1hcFN0YXRlS2V5KGtleSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZVttYXBwZWRLZXldID0gcHJvcHNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnNldHRlcih0aGlzLmNhY2hlKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBPdmVycmlkYWJsZSBlbGVtZW50IGdldHRlciAtIGRlZmF1bHQgZm9yIHBsYWluIG9iamVjdCBcbiAgICAqL1xuICAgIGdldHRlcihrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudFtrZXldO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIE92ZXJyaWRhYmxlIGVsZW1lbnQgc2V0dGVyIC0gZGVmYXVsdCBmb3IgcGxhaW4gb2JqZWN0XG4gICAgKi9cbiAgICBzZXR0ZXIocHJvcHMpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHByb3BzKSB7XG4gICAgICAgICAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudFtrZXldID0gcHJvcHNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICAgIE1hcCBzdGF0ZSBrZXkgYXMgcGVyIGBzdGF0ZU1hcGAsIGlmIHByZXNlbnRcblxuICAgICAgICBAcGFyYW0gW3N0cmluZ106IEtleSB0byBtYXBcbiAgICAgICAgQHJldHVybiBbc3RyaW5nXTogTWFwcGVkIGtleSwgb3Igb3JpZ2luYWwga2V5IGlmIG5vbmUgZm91bmRcbiAgICAqL1xuICAgIG1hcFN0YXRlS2V5KGtleSkge1xuICAgICAgICByZXR1cm4gKHRoaXMuc3RhdGVNYXApID8gdGhpcy5zdGF0ZU1hcFtrZXldIHx8IGtleSA6IGtleTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBHZXQgdmFsdWVUeXBlIG9mIHByb3ZpZGVkIGtleVxuXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogTmFtZSBvZiBwcm9wZXJ0eSB0byBtYXBcbiAgICAgICAgQHJldHVybiBbdmFsdWVUeXBlXTogVmFsdWUgdHlwZSBvZiBwcm9wZXJ0eVxuICAgICovXG4gICAgZ2V0VmFsdWVUeXBlKGtleSkge1xuICAgICAgICByZXR1cm4gKHRoaXMudmFsdWVUeXBlTWFwKSA/IHRoaXMudmFsdWVUeXBlTWFwW3RoaXMubWFwU3RhdGVLZXkoa2V5KV0gOiBmYWxzZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IChlbGVtZW50KSA9PiBuZXcgQWRhcHRlcihlbGVtZW50KTsiXX0=

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
	
	var _stateMap = __webpack_require__(38);
	
	var _stateMap2 = _interopRequireDefault(_stateMap);
	
	var _valueTypeMap = __webpack_require__(39);
	
	var _valueTypeMap2 = _interopRequireDefault(_valueTypeMap);
	
	var _build = __webpack_require__(40);
	
	var _build2 = _interopRequireDefault(_build);
	
	var _prefixer = __webpack_require__(41);
	
	var _prefixer2 = _interopRequireDefault(_prefixer);
	
	var _transformProps = __webpack_require__(42);
	
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
	
	exports.__esModule = true;
	exports.setter = setter;
	
	var _stateMap = __webpack_require__(38);
	
	var _stateMap2 = _interopRequireDefault(_stateMap);
	
	var _valueTypeMap = __webpack_require__(43);
	
	var _valueTypeMap2 = _interopRequireDefault(_valueTypeMap);
	
	var _build = __webpack_require__(44);
	
	var _build2 = _interopRequireDefault(_build);
	
	var _attrAdapter = __webpack_require__(14);
	
	var _adapter = __webpack_require__(13);
	
	var _adapter2 = _interopRequireDefault(_adapter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function setter(props) {
	    this.attrSetter((0, _build2.default)(props, this.origin));
	}
	
	exports.default = function (element) {
	    var transformOriginX = arguments.length <= 1 || arguments[1] === undefined ? 50 : arguments[1];
	    var transformOriginY = arguments.length <= 2 || arguments[2] === undefined ? 50 : arguments[2];
	
	    var svgAdapter = (0, _adapter2.default)(element);
	    svgAdapter.stateMap = _stateMap2.default;
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL3N2Zy1hZGFwdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztRQU1nQixNQUFNLEdBQU4sTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFmLFNBQVMsTUFBTSxDQUFDLEtBQUssRUFBRTtBQUMxQixRQUFJLENBQUMsVUFBVSxDQUFDLHFCQUFNLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztDQUM5Qzs7a0JBRWMsVUFBQyxPQUFPLEVBQW1EO1FBQWpELGdCQUFnQix5REFBRyxFQUFFO1FBQUUsZ0JBQWdCLHlEQUFHLEVBQUU7O0FBQ2pFLFFBQU0sVUFBVSxHQUFHLHVCQUFRLE9BQU8sQ0FBQyxDQUFDO0FBQ3BDLGNBQVUsQ0FBQyxRQUFRLHFCQUFjLENBQUM7QUFDbEMsY0FBVSxDQUFDLFlBQVkseUJBQWUsQ0FBQztBQUN2QyxjQUFVLENBQUMsTUFBTSxnQkFYWixNQUFNLEFBV2UsQ0FBQztBQUMzQixjQUFVLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUMzQixjQUFVLENBQUMsVUFBVSxnQkFiUixNQUFNLEFBYWUsQ0FBQzs7QUFFbkMsUUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDOztBQUUvQixjQUFVLENBQUMsTUFBTSxHQUFHO0FBQ2hCLFNBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxJQUFJLGdCQUFnQixHQUFHLEdBQUcsQ0FBQSxBQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFDakQsU0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLElBQUksZ0JBQWdCLEdBQUcsR0FBRyxDQUFBLEFBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztLQUNyRCxDQUFDOztBQUVGLFdBQU8sVUFBVSxDQUFDO0NBQ3JCIiwiZmlsZSI6InN2Zy1hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0UGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzc1N0YXRlTWFwIGZyb20gJy4vY3NzL3N0YXRlLW1hcCc7XG5pbXBvcnQgdmFsdWVUeXBlTWFwIGZyb20gJy4vc3ZnL3ZhbHVlLXR5cGUtbWFwJztcbmltcG9ydCBidWlsZCBmcm9tICcuL3N2Zy9idWlsZCc7XG5pbXBvcnQgeyBnZXR0ZXIsIHNldHRlciBhcyBhdHRyU2V0dGVyIH0gZnJvbSAnLi9hdHRyLWFkYXB0ZXInO1xuaW1wb3J0IGFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNldHRlcihwcm9wcykge1xuICAgIHRoaXMuYXR0clNldHRlcihidWlsZChwcm9wcywgdGhpcy5vcmlnaW4pKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGVsZW1lbnQsIHRyYW5zZm9ybU9yaWdpblggPSA1MCwgdHJhbnNmb3JtT3JpZ2luWSA9IDUwKSA9PiB7XG4gICAgY29uc3Qgc3ZnQWRhcHRlciA9IGFkYXB0ZXIoZWxlbWVudCk7XG4gICAgc3ZnQWRhcHRlci5zdGF0ZU1hcCA9IGNzc1N0YXRlTWFwO1xuICAgIHN2Z0FkYXB0ZXIudmFsdWVUeXBlTWFwID0gdmFsdWVUeXBlTWFwO1xuICAgIHN2Z0FkYXB0ZXIuZ2V0dGVyID0gZ2V0dGVyO1xuICAgIHN2Z0FkYXB0ZXIuc2V0dGVyID0gc2V0dGVyO1xuICAgIHN2Z0FkYXB0ZXIuYXR0clNldHRlciA9IGF0dHJTZXR0ZXI7XG4gICAgXG4gICAgY29uc3QgYkJveCA9IGVsZW1lbnQuZ2V0QkJveCgpO1xuXG4gICAgc3ZnQWRhcHRlci5vcmlnaW4gPSB7XG4gICAgICAgIHg6IGJCb3gud2lkdGggKiAodHJhbnNmb3JtT3JpZ2luWCAvIDEwMCkgKyBiQm94LngsXG4gICAgICAgIHk6IGJCb3guaGVpZ2h0ICogKHRyYW5zZm9ybU9yaWdpblkgLyAxMDApICsgYkJveC55XG4gICAgfTtcblxuICAgIHJldHVybiBzdmdBZGFwdGVyO1xufTtcblxuIl19

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _build = __webpack_require__(45);
	
	var _build2 = _interopRequireDefault(_build);
	
	var _stateMap = __webpack_require__(38);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL3N2Zy1wYXRoLWFkYXB0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUEsU0FBUyxNQUFNLENBQUMsS0FBSyxFQUFFO0FBQ25CLFFBQUksQ0FBQyxTQUFTLENBQUMscUJBQU0sS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0NBQ2pEOztrQkFFYyxVQUFDLE9BQU8sRUFBSztBQUN4QixRQUFNLE9BQU8sR0FBRywwQkFBVyxPQUFPLENBQUMsQ0FBQzs7QUFFcEMsV0FBTyxDQUFDLFFBQVEscUJBQWMsQ0FBQztBQUMvQixXQUFPLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUN4QixXQUFPLENBQUMsU0FBUyxlQVhBLE1BQU0sQUFXTSxDQUFDO0FBQzlCLFdBQU8sQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDOztBQUU5QyxXQUFPLE9BQU8sQ0FBQztDQUNsQiIsImZpbGUiOiJzdmctcGF0aC1hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0UGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJ1aWxkIGZyb20gJy4vc3ZnLXBhdGgvYnVpbGQnO1xuaW1wb3J0IGNzc1N0YXRlTWFwIGZyb20gJy4vY3NzL3N0YXRlLW1hcCc7XG5pbXBvcnQgc3ZnQWRhcHRlciwgeyBzZXR0ZXIgYXMgc3ZnU2V0dGVyIH0gZnJvbSAnLi9zdmctYWRhcHRlcic7XG5cbmZ1bmN0aW9uIHNldHRlcihwcm9wcykge1xuICAgIHRoaXMuc3ZnU2V0dGVyKGJ1aWxkKHByb3BzLCB0aGlzLnBhdGhMZW5ndGgpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBhZGFwdGVyID0gc3ZnQWRhcHRlcihlbGVtZW50KTtcblxuICAgIGFkYXB0ZXIuc3RhdGVNYXAgPSBjc3NTdGF0ZU1hcDtcbiAgICBhZGFwdGVyLnNldHRlciA9IHNldHRlcjtcbiAgICBhZGFwdGVyLnN2Z1NldHRlciA9IHN2Z1NldHRlcjtcbiAgICBhZGFwdGVyLnBhdGhMZW5ndGggPSBlbGVtZW50LmdldFRvdGFsTGVuZ3RoKCk7XG5cbiAgICByZXR1cm4gYWRhcHRlcjtcbn07XG4iXX0=

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
	
	var _timer = __webpack_require__(3);
	
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
	var TRANSLATE = 'translate';
	
	exports.default = {
	    x: TRANSLATE + 'X',
	    y: TRANSLATE + 'Y',
	    z: TRANSLATE + 'Z'
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2Nzcy9zdGF0ZS1tYXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsSUFBTSxTQUFTLEdBQUcsV0FBVyxDQUFDOztrQkFFZjtBQUNYLEtBQUMsRUFBRSxTQUFTLEdBQUcsR0FBRztBQUNsQixLQUFDLEVBQUUsU0FBUyxHQUFHLEdBQUc7QUFDbEIsS0FBQyxFQUFFLFNBQVMsR0FBRyxHQUFHO0NBQ3JCIiwiZmlsZSI6InN0YXRlLW1hcC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dFBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFRSQU5TTEFURSA9ICd0cmFuc2xhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgeDogVFJBTlNMQVRFICsgJ1gnLFxuICAgIHk6IFRSQU5TTEFURSArICdZJyxcbiAgICB6OiBUUkFOU0xBVEUgKyAnWidcbn07Il19

/***/ },
/* 39 */
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
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _transformProps = __webpack_require__(42);
	
	var _transformProps2 = _interopRequireDefault(_transformProps);
	
	var _prefixer = __webpack_require__(41);
	
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
/* 41 */
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
/* 42 */
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
/* 43 */
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
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = build;
	
	var _utils = __webpack_require__(2);
	
	var _transformProps = __webpack_require__(42);
	
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
/* 45 */
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
/* 46 */,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzE0ZmJlYzliOTA1OTc2NWQ4ZjkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvYWQvZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9wb3Btb3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvY2Vzcy90aW1lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9BY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdG9yL0FjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL1R3ZWVuLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL1BoeXNpY3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvVHJhY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2Nlc3MvUHJvY2Vzcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5wdXQvSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy9zdGFnZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvdGltZWxpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkYXB0ZXIvYWRhcHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9hdHRyLWFkYXB0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkYXB0ZXIvY3NzLWFkYXB0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkYXB0ZXIvc3ZnLWFkYXB0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkYXB0ZXIvc3ZnLXBhdGgtYWRhcHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL2JpbmQtYWRhcHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9lYXNpbmcvcHJlc2V0LWVhc2luZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL2NhbGMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL2FscGhhLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9hbmdsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvYXhlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvY29sb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL2NvbXBsZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL2hleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvaHNsLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9wb3NpdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL3B4LmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9yZ2IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL3NjYWxlLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9zaGFkb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL3VuaXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy90cmFuc2Zvcm1lcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdG9yL2luYy9nZW5lcmF0ZS1ibGVuZC1jdXJ2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5wdXQvUG9pbnRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvY2Vzcy9sb29wLmpzIiwid2VicGFjazovLy8uL3NyYy9hZGFwdGVyL2Nzcy9zdGF0ZS1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkYXB0ZXIvY3NzL3ZhbHVlLXR5cGUtbWFwLmpzIiwid2VicGFjazovLy8uL3NyYy9hZGFwdGVyL2Nzcy9idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9jc3MvcHJlZml4ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkYXB0ZXIvY3NzL3RyYW5zZm9ybS1wcm9wcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9zdmcvdmFsdWUtdHlwZS1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkYXB0ZXIvc3ZnL2J1aWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9hZGFwdGVyL3N2Zy1wYXRoL2J1aWxkLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kZWZhdWx0LXByb3BzLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kaWN0aW9uYXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2Vhc2luZy9jcmVhdGUtZWFzaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2Vhc2luZy9jcmVhdGUtYmV6aWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9jZXNzL3RpY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2Nlc3MvbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3Byb2Nlc3MvYnJvd3Nlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx3Qzs7Ozs7OztBQ3RDQTs7QUFFQTs7QUFFQTs7QUFFQSx3Q0FBdUMsNkJBQTZCLFlBQVksRUFBRSxPQUFPLGlCQUFpQixtQkFBbUIsdUJBQXVCLDRFQUE0RSxFQUFFLEVBQUUsc0JBQXNCLGVBQWUsRUFBRTs7QUFFM1E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTJDLG11Qjs7Ozs7O0FDZjNDOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsd0NBQXVDLDZCQUE2QixZQUFZLEVBQUUsT0FBTyxpQkFBaUIsbUJBQW1CLHVCQUF1Qiw0RUFBNEUsRUFBRSxFQUFFLHNCQUFzQixlQUFlLEVBQUU7O0FBRTNRLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RixtQ0FBa0M7O0FBRWxDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0VBQWlFLGFBQWE7QUFDOUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxRUFBb0UsZUFBZTtBQUNuRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFFQUFvRSxlQUFlO0FBQ25GO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSw0Q0FBMkMsKzZIOzs7Ozs7QUNyTzNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBbUIscUJBQXFCO0FBQ3hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBbUIsY0FBYztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW1CLG1CQUFtQjtBQUN0QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUZBQXNGLGFBQWE7QUFDbkc7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUEyQywrNkw7Ozs7OztBQzFHM0M7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBMkMsK2hoQjs7Ozs7O0FDN1QzQzs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0Q0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUEyQyxtOUk7Ozs7OztBQ3pEM0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTJDLHU1Rjs7Ozs7OztBQy9DM0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBMkMsKzRCOzs7Ozs7QUNuQjNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBMkMsMjBDOzs7Ozs7QUNaM0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUEyQyxtbUc7Ozs7OztBQ3pEM0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDZCQUE0QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgMzE0ZmJlYzliOTA1OTc2NWQ4ZjlcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfcG9wbW90aW9uID0gcmVxdWlyZSgnLi4vcG9wbW90aW9uJyk7XG5cbnZhciBwb3Btb3Rpb24gPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfcG9wbW90aW9uKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxudmFyIFVJcmVmID0gd2luZG93Lm1vdGlvbjtcblxucG9wbW90aW9uLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgd2luZG93Lm1vdGlvbiA9IFVJcmVmO1xufTtcblxud2luZG93Lm1vdGlvbiA9IHdpbmRvdy5wb3Btb3Rpb24gPSBwb3Btb3Rpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXNiMkZrTDJkc2IySmhiQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN08wbEJRVmtzVTBGQlV6czdPenRCUVVWeVFpeEpRVUZOTEV0QlFVc3NSMEZCUnl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRE96dEJRVVUxUWl4VFFVRlRMRU5CUVVNc1ZVRkJWU3hIUVVGSExGbEJRVms3UVVGREwwSXNWVUZCVFN4RFFVRkRMRTFCUVUwc1IwRkJSeXhMUVVGTExFTkJRVU03UTBGRGVrSXNRMEZCUXpzN1FVRkZSaXhOUVVGTkxFTkJRVU1zVFVGQlRTeEhRVUZITEUxQlFVMHNRMEZCUXl4VFFVRlRMRWRCUVVjc1UwRkJVeXhEUVVGRElpd2labWxzWlNJNkltZHNiMkpoYkM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRGQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0FxSUdGeklIQnZjRzF2ZEdsdmJpQm1jbTl0SUNjdUxpOXdiM0J0YjNScGIyNG5PMXh1WEc1amIyNXpkQ0JWU1hKbFppQTlJSGRwYm1SdmR5NXRiM1JwYjI0N1hHNWNibkJ2Y0cxdmRHbHZiaTV1YjBOdmJtWnNhV04wSUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lIZHBibVJ2ZHk1dGIzUnBiMjRnUFNCVlNYSmxaanRjYm4wN1hHNWNibmRwYm1SdmR5NXRiM1JwYjI0Z1BTQjNhVzVrYjNjdWNHOXdiVzkwYVc5dUlEMGdjRzl3Ylc5MGFXOXVPeUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvbG9hZC9nbG9iYWwuanNcbiAqKiBtb2R1bGUgaWQgPSAwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnRyYW5zZm9ybWVycyA9IGV4cG9ydHMudW5pdFR5cGUgPSBleHBvcnRzLnNoYWRvd1R5cGUgPSBleHBvcnRzLnNjYWxlVHlwZSA9IGV4cG9ydHMucmdiVHlwZSA9IGV4cG9ydHMucHhUeXBlID0gZXhwb3J0cy5wb3NpdGlvbnNUeXBlID0gZXhwb3J0cy5oc2xUeXBlID0gZXhwb3J0cy5oZXhUeXBlID0gZXhwb3J0cy5jb21wbGV4VHlwZSA9IGV4cG9ydHMuY29sb3JUeXBlID0gZXhwb3J0cy5heGVzVHlwZSA9IGV4cG9ydHMuYW5nbGVUeXBlID0gZXhwb3J0cy5hbHBoYVR5cGUgPSBleHBvcnRzLnNldEdsb2JhbERpbGF0aW9uID0gZXhwb3J0cy5jb21iaW5lVHJhbnNmb3JtZXJzID0gZXhwb3J0cy51dGlscyA9IGV4cG9ydHMuY2FsYyA9IGV4cG9ydHMuZWFzaW5nID0gZXhwb3J0cy5iaW5kQWRhcHRlciA9IGV4cG9ydHMuc3ZnUGF0aEFkYXB0ZXIgPSBleHBvcnRzLnN2Z0FkYXB0ZXIgPSBleHBvcnRzLmNzc0FkYXB0ZXIgPSBleHBvcnRzLmF0dHJBZGFwdGVyID0gZXhwb3J0cy5hZGFwdGVyID0gZXhwb3J0cy50aW1lbGluZSA9IGV4cG9ydHMuc3RhZ2dlciA9IGV4cG9ydHMucHJvY2VzcyA9IGV4cG9ydHMuaW5wdXQgPSBleHBvcnRzLnRyYWNrID0gZXhwb3J0cy5waHlzaWNzID0gZXhwb3J0cy50d2VlbiA9IGV4cG9ydHMuYWN0b3IgPSBleHBvcnRzLkFjdGlvbiA9IHVuZGVmaW5lZDtcblxudmFyIF91dGlsczIgPSByZXF1aXJlKCcuL2luYy91dGlscycpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NvbWJpbmVUcmFuc2Zvcm1lcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfdXRpbHMyLmNvbWJpbmVUcmFuc2Zvcm1lcnM7XG4gIH1cbn0pO1xuXG52YXIgX3RpbWVyID0gcmVxdWlyZSgnLi9wcm9jZXNzL3RpbWVyJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnc2V0R2xvYmFsRGlsYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfdGltZXIuc2V0R2xvYmFsRGlsYXRpb247XG4gIH1cbn0pO1xuXG52YXIgX0FjdGlvbjIgPSByZXF1aXJlKCcuL2FjdGlvbnMvQWN0aW9uJyk7XG5cbnZhciBfQWN0aW9uMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0FjdGlvbjIpO1xuXG52YXIgX0FjdG9yID0gcmVxdWlyZSgnLi9hY3Rvci9BY3RvcicpO1xuXG52YXIgX0FjdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0FjdG9yKTtcblxudmFyIF9Ud2VlbiA9IHJlcXVpcmUoJy4vYWN0aW9ucy9Ud2VlbicpO1xuXG52YXIgX1R3ZWVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1R3ZWVuKTtcblxudmFyIF9QaHlzaWNzID0gcmVxdWlyZSgnLi9hY3Rpb25zL1BoeXNpY3MnKTtcblxudmFyIF9QaHlzaWNzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BoeXNpY3MpO1xuXG52YXIgX1RyYWNrID0gcmVxdWlyZSgnLi9hY3Rpb25zL1RyYWNrJyk7XG5cbnZhciBfVHJhY2syID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVHJhY2spO1xuXG52YXIgX1Byb2Nlc3MgPSByZXF1aXJlKCcuL3Byb2Nlc3MvUHJvY2VzcycpO1xuXG52YXIgX1Byb2Nlc3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUHJvY2Vzcyk7XG5cbnZhciBfSW5wdXQgPSByZXF1aXJlKCcuL2lucHV0L0lucHV0Jyk7XG5cbnZhciBfSW5wdXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfSW5wdXQpO1xuXG52YXIgX3N0YWdnZXIyID0gcmVxdWlyZSgnLi9pbmMvc3RhZ2dlcicpO1xuXG52YXIgX3N0YWdnZXIzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RhZ2dlcjIpO1xuXG52YXIgX3RpbWVsaW5lMiA9IHJlcXVpcmUoJy4vaW5jL3RpbWVsaW5lJyk7XG5cbnZhciBfdGltZWxpbmUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdGltZWxpbmUyKTtcblxudmFyIF9hZGFwdGVyMiA9IHJlcXVpcmUoJy4vYWRhcHRlci9hZGFwdGVyJyk7XG5cbnZhciBfYWRhcHRlcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hZGFwdGVyMik7XG5cbnZhciBfYXR0ckFkYXB0ZXIyID0gcmVxdWlyZSgnLi9hZGFwdGVyL2F0dHItYWRhcHRlcicpO1xuXG52YXIgX2F0dHJBZGFwdGVyMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2F0dHJBZGFwdGVyMik7XG5cbnZhciBfY3NzQWRhcHRlcjIgPSByZXF1aXJlKCcuL2FkYXB0ZXIvY3NzLWFkYXB0ZXInKTtcblxudmFyIF9jc3NBZGFwdGVyMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Nzc0FkYXB0ZXIyKTtcblxudmFyIF9zdmdBZGFwdGVyMiA9IHJlcXVpcmUoJy4vYWRhcHRlci9zdmctYWRhcHRlcicpO1xuXG52YXIgX3N2Z0FkYXB0ZXIzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ZnQWRhcHRlcjIpO1xuXG52YXIgX3N2Z1BhdGhBZGFwdGVyMiA9IHJlcXVpcmUoJy4vYWRhcHRlci9zdmctcGF0aC1hZGFwdGVyJyk7XG5cbnZhciBfc3ZnUGF0aEFkYXB0ZXIzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ZnUGF0aEFkYXB0ZXIyKTtcblxudmFyIF9iaW5kQWRhcHRlcjIgPSByZXF1aXJlKCcuL2luYy9iaW5kLWFkYXB0ZXInKTtcblxudmFyIF9iaW5kQWRhcHRlcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9iaW5kQWRhcHRlcjIpO1xuXG52YXIgX3ByZXNldEVhc2luZyA9IHJlcXVpcmUoJy4vYWN0aW9ucy9lYXNpbmcvcHJlc2V0LWVhc2luZycpO1xuXG52YXIgX3ByZXNldEVhc2luZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmVzZXRFYXNpbmcpO1xuXG52YXIgX2NhbGMyID0gcmVxdWlyZSgnLi9pbmMvY2FsYycpO1xuXG52YXIgX2NhbGMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfY2FsYzIpO1xuXG52YXIgX3V0aWxzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3V0aWxzMik7XG5cbnZhciBfYWxwaGEgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL2FscGhhJyk7XG5cbnZhciBfYWxwaGEyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWxwaGEpO1xuXG52YXIgX2FuZ2xlID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy9hbmdsZScpO1xuXG52YXIgX2FuZ2xlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FuZ2xlKTtcblxudmFyIF9heGVzID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy9heGVzJyk7XG5cbnZhciBfYXhlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9heGVzKTtcblxudmFyIF9jb2xvciA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvY29sb3InKTtcblxudmFyIF9jb2xvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb2xvcik7XG5cbnZhciBfY29tcGxleCA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvY29tcGxleCcpO1xuXG52YXIgX2NvbXBsZXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcGxleCk7XG5cbnZhciBfaGV4ID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy9oZXgnKTtcblxudmFyIF9oZXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGV4KTtcblxudmFyIF9oc2wgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL2hzbCcpO1xuXG52YXIgX2hzbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oc2wpO1xuXG52YXIgX3Bvc2l0aW9ucyA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvcG9zaXRpb25zJyk7XG5cbnZhciBfcG9zaXRpb25zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc2l0aW9ucyk7XG5cbnZhciBfcHggPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL3B4Jyk7XG5cbnZhciBfcHgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHgpO1xuXG52YXIgX3JnYiA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvcmdiJyk7XG5cbnZhciBfcmdiMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JnYik7XG5cbnZhciBfc2NhbGUgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL3NjYWxlJyk7XG5cbnZhciBfc2NhbGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2NhbGUpO1xuXG52YXIgX3NoYWRvdyA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvc2hhZG93Jyk7XG5cbnZhciBfc2hhZG93MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NoYWRvdyk7XG5cbnZhciBfdW5pdCA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvdW5pdCcpO1xuXG52YXIgX3VuaXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdW5pdCk7XG5cbnZhciBfdHJhbnNmb3JtZXJzMiA9IHJlcXVpcmUoJy4vaW5jL3RyYW5zZm9ybWVycycpO1xuXG52YXIgX3RyYW5zZm9ybWVycyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF90cmFuc2Zvcm1lcnMyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5BY3Rpb24gPSBfQWN0aW9uMy5kZWZhdWx0OyAvLyBBY3Rpb25zXG5cbi8vIFByb2Nlc3NcblxuLy8gSW5wdXRcblxudmFyIGFjdG9yID0gZXhwb3J0cy5hY3RvciA9IGZ1bmN0aW9uIChwcm9wcykge1xuICByZXR1cm4gbmV3IF9BY3RvcjIuZGVmYXVsdChwcm9wcyk7XG59O1xudmFyIHR3ZWVuID0gZXhwb3J0cy50d2VlbiA9IGZ1bmN0aW9uIChwcm9wcykge1xuICByZXR1cm4gbmV3IF9Ud2VlbjIuZGVmYXVsdChwcm9wcyk7XG59O1xudmFyIHBoeXNpY3MgPSBleHBvcnRzLnBoeXNpY3MgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBfUGh5c2ljczIuZGVmYXVsdChwcm9wcyk7XG59O1xudmFyIHRyYWNrID0gZXhwb3J0cy50cmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoX1RyYWNrMi5kZWZhdWx0LCBbbnVsbF0uY29uY2F0KGFyZ3MpKSkoKTtcbn07XG52YXIgaW5wdXQgPSBleHBvcnRzLmlucHV0ID0gZnVuY3Rpb24gKCkge1xuICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgfVxuXG4gIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KF9JbnB1dDIuZGVmYXVsdCwgW251bGxdLmNvbmNhdChhcmdzKSkpKCk7XG59O1xudmFyIHByb2Nlc3MgPSBleHBvcnRzLnByb2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG4gIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4zKSwgX2tleTMgPSAwOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XG4gICAgYXJnc1tfa2V5M10gPSBhcmd1bWVudHNbX2tleTNdO1xuICB9XG5cbiAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoX1Byb2Nlc3MyLmRlZmF1bHQsIFtudWxsXS5jb25jYXQoYXJncykpKSgpO1xufTtcbmV4cG9ydHMuc3RhZ2dlciA9IF9zdGFnZ2VyMy5kZWZhdWx0O1xuZXhwb3J0cy50aW1lbGluZSA9IF90aW1lbGluZTMuZGVmYXVsdDtcblxuLy8gQWRhcHRlcnNcblxuZXhwb3J0cy5hZGFwdGVyID0gX2FkYXB0ZXIzLmRlZmF1bHQ7XG5leHBvcnRzLmF0dHJBZGFwdGVyID0gX2F0dHJBZGFwdGVyMy5kZWZhdWx0O1xuZXhwb3J0cy5jc3NBZGFwdGVyID0gX2Nzc0FkYXB0ZXIzLmRlZmF1bHQ7XG5leHBvcnRzLnN2Z0FkYXB0ZXIgPSBfc3ZnQWRhcHRlcjMuZGVmYXVsdDtcbmV4cG9ydHMuc3ZnUGF0aEFkYXB0ZXIgPSBfc3ZnUGF0aEFkYXB0ZXIzLmRlZmF1bHQ7XG5leHBvcnRzLmJpbmRBZGFwdGVyID0gX2JpbmRBZGFwdGVyMy5kZWZhdWx0O1xuXG4vLyBFYXNpbmdcblxuZXhwb3J0cy5lYXNpbmcgPSBfcHJlc2V0RWFzaW5nMi5kZWZhdWx0O1xuXG4vLyBVdGlsc1xuXG5leHBvcnRzLmNhbGMgPSBfY2FsYztcbmV4cG9ydHMudXRpbHMgPSBfdXRpbHM7XG5cbi8vIFZhbHVlIHR5cGVzXG5cbmV4cG9ydHMuYWxwaGFUeXBlID0gX2FscGhhMi5kZWZhdWx0O1xuZXhwb3J0cy5hbmdsZVR5cGUgPSBfYW5nbGUyLmRlZmF1bHQ7XG5leHBvcnRzLmF4ZXNUeXBlID0gX2F4ZXMyLmRlZmF1bHQ7XG5leHBvcnRzLmNvbG9yVHlwZSA9IF9jb2xvcjIuZGVmYXVsdDtcbmV4cG9ydHMuY29tcGxleFR5cGUgPSBfY29tcGxleDIuZGVmYXVsdDtcbmV4cG9ydHMuaGV4VHlwZSA9IF9oZXgyLmRlZmF1bHQ7XG5leHBvcnRzLmhzbFR5cGUgPSBfaHNsMi5kZWZhdWx0O1xuZXhwb3J0cy5wb3NpdGlvbnNUeXBlID0gX3Bvc2l0aW9uczIuZGVmYXVsdDtcbmV4cG9ydHMucHhUeXBlID0gX3B4Mi5kZWZhdWx0O1xuZXhwb3J0cy5yZ2JUeXBlID0gX3JnYjIuZGVmYXVsdDtcbmV4cG9ydHMuc2NhbGVUeXBlID0gX3NjYWxlMi5kZWZhdWx0O1xuZXhwb3J0cy5zaGFkb3dUeXBlID0gX3NoYWRvdzIuZGVmYXVsdDtcbmV4cG9ydHMudW5pdFR5cGUgPSBfdW5pdDIuZGVmYXVsdDtcblxuLy8gVHJhbnNmb3JtZXJzXG5cbmV4cG9ydHMudHJhbnNmb3JtZXJzID0gX3RyYW5zZm9ybWVycztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5d2IzQnRiM1JwYjI0dWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096dHRRa0Z0UTNGQ0xHMUNRVUZ0UWpzN096czdPenM3TzJ0Q1FVTXZRaXhwUWtGQmFVSTdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN08xRkJia051UWl4TlFVRk5PenM3T3pzN1FVRlpUaXhKUVVGTkxFdEJRVXNzVjBGQlRDeExRVUZMTEVkQlFVY3NWVUZCUXl4TFFVRkxPMU5CUVVzc2IwSkJRVlVzUzBGQlN5eERRVUZETzBOQlFVRXNRMEZCUXp0QlFVTXhReXhKUVVGTkxFdEJRVXNzVjBGQlRDeExRVUZMTEVkQlFVY3NWVUZCUXl4TFFVRkxPMU5CUVVzc2IwSkJRVlVzUzBGQlN5eERRVUZETzBOQlFVRXNRMEZCUXp0QlFVTXhReXhKUVVGTkxFOUJRVThzVjBGQlVDeFBRVUZQTEVkQlFVY3NWVUZCUXl4TFFVRkxPMU5CUVVzc2MwSkJRVmtzUzBGQlN5eERRVUZETzBOQlFVRXNRMEZCUXp0QlFVTTVReXhKUVVGTkxFdEJRVXNzVjBGQlRDeExRVUZMTEVkQlFVYzdiME5CUVVrc1NVRkJTVHRCUVVGS0xGRkJRVWs3T3pzeVJVRkJhMElzU1VGQlNUdERRVUZETEVOQlFVTTdRVUZET1VNc1NVRkJUU3hMUVVGTExGZEJRVXdzUzBGQlN5eEhRVUZITzNGRFFVRkpMRWxCUVVrN1FVRkJTaXhSUVVGSk96czdNa1ZCUVd0Q0xFbEJRVWs3UTBGQlF5eERRVUZETzBGQlF6bERMRWxCUVUwc1QwRkJUeXhYUVVGUUxFOUJRVThzUjBGQlJ6dHhRMEZCU1N4SlFVRkpPMEZCUVVvc1VVRkJTVHM3T3paRlFVRnZRaXhKUVVGSk8wTkJRVU1zUTBGQlF6dFJRVU5zUkN4UFFVRlBPMUZCUTFBc1VVRkJVVHM3T3p0UlFVZFNMRTlCUVU4N1VVRkRVQ3hYUVVGWE8xRkJRMWdzVlVGQlZUdFJRVU5XTEZWQlFWVTdVVUZEVml4alFVRmpPMUZCUTJRc1YwRkJWenM3T3p0UlFVZFlMRTFCUVUwN096czdVVUZIUkN4SlFVRkpPMUZCUTBvc1MwRkJTenM3T3p0UlFVbFdMRk5CUVZNN1VVRkRWQ3hUUVVGVE8xRkJRMVFzVVVGQlVUdFJRVU5TTEZOQlFWTTdVVUZEVkN4WFFVRlhPMUZCUTFnc1QwRkJUenRSUVVOUUxFOUJRVTg3VVVGRFVDeGhRVUZoTzFGQlEySXNUVUZCVFR0UlFVTk9MRTlCUVU4N1VVRkRVQ3hUUVVGVE8xRkJRMVFzVlVGQlZUdFJRVU5XTEZGQlFWRTdPenM3VVVGSFNDeFpRVUZaSWl3aVptbHNaU0k2SW5CdmNHMXZkR2x2Ymk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRGQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk4dklFRmpkR2x2Ym5OY2JtVjRjRzl5ZENCQlkzUnBiMjRnWm5KdmJTQW5MaTloWTNScGIyNXpMMEZqZEdsdmJpYzdYRzVwYlhCdmNuUWdRV04wYjNJZ1puSnZiU0FuTGk5aFkzUnZjaTlCWTNSdmNpYzdYRzVwYlhCdmNuUWdWSGRsWlc0Z1puSnZiU0FuTGk5aFkzUnBiMjV6TDFSM1pXVnVKenRjYm1sdGNHOXlkQ0JRYUhsemFXTnpJR1p5YjIwZ0p5NHZZV04wYVc5dWN5OVFhSGx6YVdOekp6dGNibWx0Y0c5eWRDQlVjbUZqYXlCbWNtOXRJQ2N1TDJGamRHbHZibk12VkhKaFkyc25PMXh1WEc0dkx5QlFjbTlqWlhOelhHNXBiWEJ2Y25RZ1VISnZZMlZ6Y3lCbWNtOXRJQ2N1TDNCeWIyTmxjM012VUhKdlkyVnpjeWM3WEc1Y2JpOHZJRWx1Y0hWMFhHNXBiWEJ2Y25RZ1NXNXdkWFFnWm5KdmJTQW5MaTlwYm5CMWRDOUpibkIxZENjN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCaFkzUnZjaUE5SUNod2NtOXdjeWtnUFQ0Z2JtVjNJRUZqZEc5eUtIQnliM0J6S1R0Y2JtVjRjRzl5ZENCamIyNXpkQ0IwZDJWbGJpQTlJQ2h3Y205d2N5a2dQVDRnYm1WM0lGUjNaV1Z1S0hCeWIzQnpLVHRjYm1WNGNHOXlkQ0JqYjI1emRDQndhSGx6YVdOeklEMGdLSEJ5YjNCektTQTlQaUJ1WlhjZ1VHaDVjMmxqY3lod2NtOXdjeWs3WEc1bGVIQnZjblFnWTI5dWMzUWdkSEpoWTJzZ1BTQW9MaTR1WVhKbmN5a2dQVDRnYm1WM0lGUnlZV05yS0M0dUxtRnlaM01wTzF4dVpYaHdiM0owSUdOdmJuTjBJR2x1Y0hWMElEMGdLQzR1TG1GeVozTXBJRDArSUc1bGR5QkpibkIxZENndUxpNWhjbWR6S1R0Y2JtVjRjRzl5ZENCamIyNXpkQ0J3Y205alpYTnpJRDBnS0M0dUxtRnlaM01wSUQwK0lHNWxkeUJRY205alpYTnpLQzR1TG1GeVozTXBPMXh1Wlhod2IzSjBJSE4wWVdkblpYSWdabkp2YlNBbkxpOXBibU12YzNSaFoyZGxjaWM3WEc1bGVIQnZjblFnZEdsdFpXeHBibVVnWm5KdmJTQW5MaTlwYm1NdmRHbHRaV3hwYm1Vbk8xeHVYRzR2THlCQlpHRndkR1Z5YzF4dVpYaHdiM0owSUdGa1lYQjBaWElnWm5KdmJTQW5MaTloWkdGd2RHVnlMMkZrWVhCMFpYSW5PMXh1Wlhod2IzSjBJR0YwZEhKQlpHRndkR1Z5SUdaeWIyMGdKeTR2WVdSaGNIUmxjaTloZEhSeUxXRmtZWEIwWlhJbk8xeHVaWGh3YjNKMElHTnpjMEZrWVhCMFpYSWdabkp2YlNBbkxpOWhaR0Z3ZEdWeUwyTnpjeTFoWkdGd2RHVnlKenRjYm1WNGNHOXlkQ0J6ZG1kQlpHRndkR1Z5SUdaeWIyMGdKeTR2WVdSaGNIUmxjaTl6ZG1jdFlXUmhjSFJsY2ljN1hHNWxlSEJ2Y25RZ2MzWm5VR0YwYUVGa1lYQjBaWElnWm5KdmJTQW5MaTloWkdGd2RHVnlMM04yWnkxd1lYUm9MV0ZrWVhCMFpYSW5PMXh1Wlhod2IzSjBJR0pwYm1SQlpHRndkR1Z5SUdaeWIyMGdKeTR2YVc1akwySnBibVF0WVdSaGNIUmxjaWM3WEc1Y2JpOHZJRVZoYzJsdVoxeHVaWGh3YjNKMElHVmhjMmx1WnlCbWNtOXRJQ2N1TDJGamRHbHZibk12WldGemFXNW5MM0J5WlhObGRDMWxZWE5wYm1jbk8xeHVYRzR2THlCVmRHbHNjMXh1Wlhod2IzSjBJQ29nWVhNZ1kyRnNZeUJtY205dElDY3VMMmx1WXk5allXeGpKenRjYm1WNGNHOXlkQ0FxSUdGeklIVjBhV3h6TENCN0lHTnZiV0pwYm1WVWNtRnVjMlp2Y20xbGNuTWdmU0JtY205dElDY3VMMmx1WXk5MWRHbHNjeWM3WEc1bGVIQnZjblFnZXlCelpYUkhiRzlpWVd4RWFXeGhkR2x2YmlCOUlHWnliMjBnSnk0dmNISnZZMlZ6Y3k5MGFXMWxjaWM3WEc1Y2JpOHZJRlpoYkhWbElIUjVjR1Z6WEc1bGVIQnZjblFnWVd4d2FHRlVlWEJsSUdaeWIyMGdKeTR2ZG1Gc2RXVXRkSGx3WlhNdllXeHdhR0VuTzF4dVpYaHdiM0owSUdGdVoyeGxWSGx3WlNCbWNtOXRJQ2N1TDNaaGJIVmxMWFI1Y0dWekwyRnVaMnhsSnp0Y2JtVjRjRzl5ZENCaGVHVnpWSGx3WlNCbWNtOXRJQ2N1TDNaaGJIVmxMWFI1Y0dWekwyRjRaWE1uTzF4dVpYaHdiM0owSUdOdmJHOXlWSGx3WlNCbWNtOXRJQ2N1TDNaaGJIVmxMWFI1Y0dWekwyTnZiRzl5Snp0Y2JtVjRjRzl5ZENCamIyMXdiR1Y0Vkhsd1pTQm1jbTl0SUNjdUwzWmhiSFZsTFhSNWNHVnpMMk52YlhCc1pYZ25PMXh1Wlhod2IzSjBJR2hsZUZSNWNHVWdabkp2YlNBbkxpOTJZV3gxWlMxMGVYQmxjeTlvWlhnbk8xeHVaWGh3YjNKMElHaHpiRlI1Y0dVZ1puSnZiU0FuTGk5MllXeDFaUzEwZVhCbGN5OW9jMnduTzF4dVpYaHdiM0owSUhCdmMybDBhVzl1YzFSNWNHVWdabkp2YlNBbkxpOTJZV3gxWlMxMGVYQmxjeTl3YjNOcGRHbHZibk1uTzF4dVpYaHdiM0owSUhCNFZIbHdaU0JtY205dElDY3VMM1poYkhWbExYUjVjR1Z6TDNCNEp6dGNibVY0Y0c5eWRDQnlaMkpVZVhCbElHWnliMjBnSnk0dmRtRnNkV1V0ZEhsd1pYTXZjbWRpSnp0Y2JtVjRjRzl5ZENCelkyRnNaVlI1Y0dVZ1puSnZiU0FuTGk5MllXeDFaUzEwZVhCbGN5OXpZMkZzWlNjN1hHNWxlSEJ2Y25RZ2MyaGhaRzkzVkhsd1pTQm1jbTl0SUNjdUwzWmhiSFZsTFhSNWNHVnpMM05vWVdSdmR5YzdYRzVsZUhCdmNuUWdkVzVwZEZSNWNHVWdabkp2YlNBbkxpOTJZV3gxWlMxMGVYQmxjeTkxYm1sMEp6dGNibHh1THk4Z1ZISmhibk5tYjNKdFpYSnpYRzVsZUhCdmNuUWdLaUJoY3lCMGNtRnVjMlp2Y20xbGNuTWdabkp2YlNBbkxpOXBibU12ZEhKaGJuTm1iM0p0WlhKekp6c2lYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9wb3Btb3Rpb24uanNcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgQ0FNRUxfQ0FTRV9QQVRURVJOID0gLyhbYS16XSkoW0EtWl0pL2c7XG52YXIgUkVQTEFDRV9URU1QTEFURSA9ICckMS0kMic7XG52YXIgSEFTX1BFUkZPUk1BTkNFX05PVyA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCcgJiYgcGVyZm9ybWFuY2Uubm93O1xuXG4vKlxuICAgIEdldCB2YXIgdHlwZSBhcyBzdHJpbmdcbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtzdHJpbmddOiBSZXR1cm5zLCBmb3IgaW5zdGFuY2UgJ09iamVjdCcgaWYgW29iamVjdCBPYmplY3RdXG4qL1xudmFyIHZhclR5cGUgPSBmdW5jdGlvbiAodmFyaWFibGUpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhcmlhYmxlKS5zbGljZSg4LCAtMSk7XG59O1xuXG4vKlxuICAgIENvbnZlcnQgY2FtZWxDYXNlIHRvIGRhc2gtY2FzZVxuXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHJldHVybiBbc3RyaW5nXVxuKi9cbnZhciBjYW1lbFRvRGFzaCA9IGV4cG9ydHMuY2FtZWxUb0Rhc2ggPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKENBTUVMX0NBU0VfUEFUVEVSTiwgUkVQTEFDRV9URU1QTEFURSkudG9Mb3dlckNhc2UoKTtcbn07XG5cbi8qXG4gICAgQ29tYmluZSB0cmFuc2Zvcm1lcnMgaW50byBvbmUgZnVuY3Rpb24gdGhhdCBjYWxscyBldmVyeVxuICAgIHRyYW5zZm9ybWVyIGluIHRoZSBhcnJheSBhbmQgcmV0dXJucyB0aGUgcmVzdWx0XG5cbiAgICBAcGFyYW0gW2FycmF5XVxuICAgIEByZXR1cm4gW2Z1bmN0aW9uXVxuKi9cbnZhciBjb21iaW5lVHJhbnNmb3JtZXJzID0gZXhwb3J0cy5jb21iaW5lVHJhbnNmb3JtZXJzID0gZnVuY3Rpb24gKHRyYW5zZm9ybWVycykge1xuICAgIHZhciBudW1UcmFuc2Zvcm1lcnMgPSB0cmFuc2Zvcm1lcnMubGVuZ3RoO1xuICAgIHZhciBpID0gMDtcblxuICAgIC8qXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgICAgICBAcGFyYW0gW3N0cmluZ11cbiAgICAgICAgQHBhcmFtIFtBY3Rpb25dXG4gICAgICAgIEByZXR1cm4gW251bWJlcl1cbiAgICAqL1xuICAgIHJldHVybiBmdW5jdGlvbiAodiwga2V5LCBhKSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBudW1UcmFuc2Zvcm1lcnM7IGkrKykge1xuICAgICAgICAgICAgdiA9IHRyYW5zZm9ybWVyc1tpXSh2LCBrZXksIGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHY7XG4gICAgfTtcbn07XG5cbnZhciBjcmVhdGVEZWxpbWl0ZWQgPSBleHBvcnRzLmNyZWF0ZURlbGltaXRlZCA9IGZ1bmN0aW9uICh2YWx1ZXMsIHRlcm1zLCBkZWxpbWl0ZXIsIGNob3ApIHtcbiAgICB2YXIgbnVtVGVybXMgPSB0ZXJtcy5sZW5ndGg7XG4gICAgdmFyIGNvbWJpbmVkID0gJyc7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVRlcm1zOyBpKyspIHtcbiAgICAgICAgdmFyIHRlcm0gPSB0ZXJtc1tpXTtcbiAgICAgICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eSh0ZXJtKSkge1xuICAgICAgICAgICAgY29tYmluZWQgKz0gdmFsdWVzW3Rlcm1dICsgZGVsaW1pdGVyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNob3ApIHtcbiAgICAgICAgY29tYmluZWQgPSBjb21iaW5lZC5zbGljZSgwLCAtY2hvcCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbWJpbmVkO1xufTtcblxuLypcbiAgICBDcmVhdGUgYSBmdW5jdGlvbiBzdHJpbmdcblxuICAgICcyMHB4JywgJ3RyYW5zbGF0ZScgLT4gJ3RyYW5zbGF0ZSgyMHB4KSdcblxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEByZXR1cm4gW3N0cmluZ11cbiovXG52YXIgY3JlYXRlRnVuY3Rpb25TdHJpbmcgPSBleHBvcnRzLmNyZWF0ZUZ1bmN0aW9uU3RyaW5nID0gZnVuY3Rpb24gKHZhbHVlLCBwcmVmaXgpIHtcbiAgICByZXR1cm4gcHJlZml4ICsgJygnICsgdmFsdWUgKyAnKSc7XG59O1xuXG4vKlxuICAgIEdlbmVyYXRlIGN1cnJlbnQgdGltZXN0YW1wXG4gICAgXG4gICAgQHJldHVybiBbdGltZXN0YW1wXTogQ3VycmVudCBVTklYIHRpbWVzdGFtcFxuKi9cbnZhciBjdXJyZW50VGltZSA9IGV4cG9ydHMuY3VycmVudFRpbWUgPSBIQVNfUEVSRk9STUFOQ0VfTk9XID8gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBwZXJmb3JtYW5jZS5ub3coKTtcbn0gOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xufTtcblxuLypcbiAgICBTcGxpdCBjb2xvciBzdHJpbmcgaW50byBtYXAgb2YgY29sb3IgcHJvcGVydGllc1xuXG4gICAgXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDApXCIsIFtcIlJlZFwiLCAnR3JlZW5cIiwgXCJCbHVlXCIsIFwiQWxwaGFcIl1cblxuICAgIHsgUmVkOiAyNTUuLi4gfVxuKi9cbnZhciBnZXRDb2xvclZhbHVlcyA9IGV4cG9ydHMuZ2V0Q29sb3JWYWx1ZXMgPSBmdW5jdGlvbiAodmFsdWUsIGNvbG9yVGVybXMpIHtcbiAgICB2YXIgbnVtQ29sb3JUZXJtcyA9IGNvbG9yVGVybXMubGVuZ3RoO1xuICAgIHZhciBjb2xvclZhbHVlcyA9IHt9O1xuICAgIHZhciBjb2xvcnMgPSBzcGxpdENvbW1hRGVsaW1pdGVkKGdldFZhbHVlRnJvbUZ1bmN0aW9uU3RyaW5nKHZhbHVlKSk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bUNvbG9yVGVybXM7IGkrKykge1xuICAgICAgICBjb2xvclZhbHVlc1tjb2xvclRlcm1zW2ldXSA9IGNvbG9yc1tpXSAhPT0gdW5kZWZpbmVkID8gY29sb3JzW2ldIDogMTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29sb3JWYWx1ZXM7XG59O1xuXG4vKlxuICAgIEdldCB2YWx1ZSBmcm9tIGZ1bmN0aW9uIHN0cmluZ1xuXG4gICAgXCJ0cmFuc2xhdGVYKDIwcHgpXCIgLT4gXCIyMHB4XCJcbiovXG52YXIgZ2V0VmFsdWVGcm9tRnVuY3Rpb25TdHJpbmcgPSBleHBvcnRzLmdldFZhbHVlRnJvbUZ1bmN0aW9uU3RyaW5nID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLnN1YnN0cmluZyh2YWx1ZS5pbmRleE9mKCcoJykgKyAxLCB2YWx1ZS5sYXN0SW5kZXhPZignKScpKTtcbn07XG5cbi8qXG4gICAgQ2hlY2sgaWYgdHdvIG9iamVjdHMgaGF2ZSBjaGFuZ2VkIGZyb20gZWFjaCBvdGhlclxuICAgIFxuICAgIEBwYXJhbSBbb2JqZWN0XTogSW5wdXQgQVxuICAgIEBwYXJhbSBbb2JqZWN0XTogSW5wdXQgQlxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBUcnVlIGlmIGRpZmZlcmVudFxuKi9cbnZhciBoYXNDaGFuZ2VkID0gZXhwb3J0cy5oYXNDaGFuZ2VkID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICB2YXIgY2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgZm9yICh2YXIga2V5IGluIGEpIHtcbiAgICAgICAgaWYgKGEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgaWYgKGhhc1Byb3BlcnR5KGIsIGtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoYVtrZXldICE9PSBiW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjaGFuZ2VkO1xufTtcblxuLypcbiAgICBDaGVjayBpZiBvYmplY3QgaGFzIHByb3BlcnR5IGFuZCBpdCBpc24ndCB1bmRlZmluZWRcblxuICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEByZXR1cm4gW2Jvb2xlYW5dXG4qL1xudmFyIGhhc1Byb3BlcnR5ID0gZXhwb3J0cy5oYXNQcm9wZXJ0eSA9IGZ1bmN0aW9uIChvYmplY3QsIHByb3BlcnR5TmFtZSkge1xuICAgIHJldHVybiBvYmplY3QuaGFzT3duUHJvcGVydHkocHJvcGVydHlOYW1lKSAmJiBvYmplY3RbcHJvcGVydHlOYW1lXSAhPT0gdW5kZWZpbmVkO1xufTtcblxuLypcbiAgICBJcyB1dGlscyB2YXIgYW4gYXJyYXkgPyBcbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHV0aWxzLnZhclR5cGUgPT09ICdBcnJheSdcbiovXG52YXIgaXNBcnJheSA9IGV4cG9ydHMuaXNBcnJheSA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgICByZXR1cm4gdmFyVHlwZShhcnIpID09PSAnQXJyYXknO1xufTtcblxuLypcbiAgICBJcyB1dGlscyB2YXIgYSBmdW5jdGlvbiA/IFxuICAgIFxuICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdXRpbHMudmFyVHlwZSA9PT0gJ0Z1bmN0aW9uJ1xuKi9cbnZhciBpc0Z1bmMgPSBleHBvcnRzLmlzRnVuYyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdmFyVHlwZShvYmopID09PSAnRnVuY3Rpb24nO1xufTtcblxuLypcbiAgICBJcyB1dGlscyB2YXIgYSBudW1iZXI/XG4gICAgXG4gICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2YgPT09ICdudW1iZXInXG4qL1xudmFyIGlzTnVtID0gZXhwb3J0cy5pc051bSA9IGZ1bmN0aW9uIChudW0pIHtcbiAgICByZXR1cm4gdHlwZW9mIG51bSA9PT0gJ251bWJlcic7XG59O1xuXG4vKlxuICAgIElzIHV0aWxzIHZhciBhbiBvYmplY3Q/XG4gICAgXG4gICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2YgPT09ICdvYmplY3QnXG4qL1xudmFyIGlzT2JqID0gZXhwb3J0cy5pc09iaiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ29iamVjdCc7XG59O1xuXG4vKlxuICAgIElzIHV0aWxzIGEgcmVsYXRpdmUgdmFsdWUgYXNzaWdubWVudD9cbiAgICBcbiAgICBAcGFyYW0gW3N0cmluZ106IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogSWYgdXRpbHMgbG9va3MgbGlrZSBhIHJlbGF0aXZlIHZhbHVlIGFzc2lnbm1lbnRcbiovXG52YXIgaXNSZWxhdGl2ZVZhbHVlID0gZXhwb3J0cy5pc1JlbGF0aXZlVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgJiYgdmFsdWUuaW5kZXhPZiAmJiB2YWx1ZS5pbmRleE9mKCc9JykgPiAwID8gdHJ1ZSA6IGZhbHNlO1xufTtcblxuLypcbiAgICBJcyB1dGlscyB2YXIgYSBzdHJpbmcgPyBcbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnXG4qL1xudmFyIGlzU3RyaW5nID0gZXhwb3J0cy5pc1N0cmluZyA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICByZXR1cm4gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZyc7XG59O1xuXG4vKlxuICAgIEBwYXJhbSBbc3RyaW5nIHx8IE5vZGVMaXN0XTpcbiAgICAgICAgSWYgc3RyaW5nLCB0cmVhdGVkIGFzIHNlbGVjdG9yLlxuICAgICAgICBJZiBub3QsIHRyZWF0ZWQgYXMgcHJlZXhpc3RpbmcgTm9kZUxpc3RcblxuICAgIEByZXR1cm4gW0FycmF5XVxuKi9cbnZhciBzZWxlY3REb20gPSBleHBvcnRzLnNlbGVjdERvbSA9IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgIHZhciBub2RlcyA9IHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSA6IHNlbGVjdG9yO1xuICAgIHJldHVybiBub2Rlcy5sZW5ndGggPyBbXS5zbGljZS5jYWxsKG5vZGVzKSA6IFtdLnB1c2gobm9kZXMpO1xufTtcblxuLypcbiAgICBTcGxpdCBjb21tYS1kZWxpbWl0ZWQgc3RyaW5nXG5cbiAgICBcImZvbyxiYXJcIiAtPiBbXCJmb29cIiwgXCJiYXJcIl1cblxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEByZXR1cm4gW2FycmF5XVxuKi9cbnZhciBzcGxpdENvbW1hRGVsaW1pdGVkID0gZXhwb3J0cy5zcGxpdENvbW1hRGVsaW1pdGVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHZhbHVlKSA/IHZhbHVlLnNwbGl0KC8sXFxzKi8pIDogW3ZhbHVlXTtcbn07XG5cbi8qXG4gICAgU3BsaXQgc3BhY2UtZGVsaW1pdGVkIHN0cmluZ1xuXG4gICAgXCJmb28gYmFyXCIgLT4gW1wiZm9vXCIsIFwiYmFyXCJdXG5cbiAgICBAcGFyYW0gW3N0cmluZ11cbiAgICBAcmV0dXJuIFthcnJheV1cbiovXG52YXIgc3BsaXRTcGFjZURlbGltaXRlZCA9IGV4cG9ydHMuc3BsaXRTcGFjZURlbGltaXRlZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiBpc1N0cmluZyh2YWx1ZSkgPyB2YWx1ZS5zcGxpdCgnICcpIDogW3ZhbHVlXTtcbn07XG5cbi8qXG4gICAgQ29udmVydCBudW1iZXIgdG8geCBkZWNpbWFsIHBsYWNlc1xuXG4gICAgQHBhcmFtIFtudW1iZXJdXG4gICAgQHBhcmFtIFtudW1iZXJdXG4gICAgQHJldHVybiBbbnVtYmVyXVxuKi9cbnZhciB0b0RlY2ltYWwgPSBleHBvcnRzLnRvRGVjaW1hbCA9IGZ1bmN0aW9uIChudW0pIHtcbiAgICB2YXIgcHJlY2lzaW9uID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gMiA6IGFyZ3VtZW50c1sxXTtcblxuICAgIHByZWNpc2lvbiA9IE1hdGgucG93KDEwLCBwcmVjaXNpb24pO1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG51bSAqIHByZWNpc2lvbikgLyBwcmVjaXNpb247XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1NdmRYUnBiSE11YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN08wRkJRVUVzU1VGQlRTeHJRa0ZCYTBJc1IwRkJSeXhwUWtGQmFVSXNRMEZCUXp0QlFVTTNReXhKUVVGTkxHZENRVUZuUWl4SFFVRkhMRTlCUVU4c1EwRkJRenRCUVVOcVF5eEpRVUZOTEcxQ1FVRnRRaXhIUVVGSkxFOUJRVThzVjBGQlZ5eExRVUZMTEZkQlFWY3NTVUZCU1N4WFFVRlhMRU5CUVVNc1IwRkJSeXhCUVVGRE96czdPenM3T3p0QlFVRkRMRUZCVVhCR0xFbEJRVTBzVDBGQlR5eEhRVUZITEZWQlFVRXNVVUZCVVR0WFFVRkpMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPME5CUVVFN096czdPenM3TzBGQlFVTXNRVUZSTTBVc1NVRkJUU3hYUVVGWExGZEJRVmdzVjBGQlZ5eEhRVUZITEZWQlFVTXNUVUZCVFR0WFFVRkxMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zYTBKQlFXdENMRVZCUVVVc1owSkJRV2RDTEVOQlFVTXNRMEZCUXl4WFFVRlhMRVZCUVVVN1EwRkJRVHM3T3pzN096czdPMEZCUVVNc1FVRlRia2NzU1VGQlRTeHRRa0ZCYlVJc1YwRkJia0lzYlVKQlFXMUNMRWRCUVVjc1ZVRkJReXhaUVVGWkxFVkJRVXM3UVVGRGFrUXNVVUZCVFN4bFFVRmxMRWRCUVVjc1dVRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF6dEJRVU0xUXl4UlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRE96czdPenM3T3p0QlFVRkRMRUZCVVZZc1YwRkJUeXhWUVVGRExFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNRMEZCUXl4RlFVRkxPMEZCUTJ4Q0xHRkJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1pVRkJaU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzBGQlEyeERMR0ZCUVVNc1IwRkJSeXhaUVVGWkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRWRCUVVjc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFRRVU5zUXpzN1FVRkZSQ3hsUVVGUExFTkJRVU1zUTBGQlF6dExRVU5hTEVOQlFVTTdRMEZEVEN4RFFVRkRPenRCUVVWTExFbEJRVTBzWlVGQlpTeFhRVUZtTEdWQlFXVXNSMEZCUnl4VlFVRkRMRTFCUVUwc1JVRkJSU3hMUVVGTExFVkJRVVVzVTBGQlV5eEZRVUZGTEVsQlFVa3NSVUZCU3p0QlFVTXZSQ3hSUVVGTkxGRkJRVkVzUjBGQlJ5eExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRPMEZCUXpsQ0xGRkJRVWtzVVVGQlVTeEhRVUZITEVWQlFVVXNRMEZCUXpzN1FVRkZiRUlzVTBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExGRkJRVkVzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0QlFVTXZRaXhaUVVGTkxFbEJRVWtzUjBGQlJ5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRkRkRUlzV1VGQlNTeE5RVUZOTEVOQlFVTXNZMEZCWXl4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRk8wRkJRemRDTEc5Q1FVRlJMRWxCUVVrc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEZOQlFWTXNRMEZCUXp0VFFVTjRRenRMUVVOS096dEJRVVZFTEZGQlFVa3NTVUZCU1N4RlFVRkZPMEZCUTA0c1owSkJRVkVzUjBGQlJ5eFJRVUZSTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzB0QlEzWkRPenRCUVVWRUxGZEJRVThzVVVGQlVTeERRVUZETzBOQlEyNUNPenM3T3pzN096czdPenRCUVVGRExFRkJWMHNzU1VGQlRTeHZRa0ZCYjBJc1YwRkJjRUlzYjBKQlFXOUNMRWRCUVVjc1ZVRkJReXhMUVVGTExFVkJRVVVzVFVGQlRUdFhRVUZSTEUxQlFVMHNVMEZCU1N4TFFVRkxPME5CUVVjN096czdPenM3UVVGQlF5eEJRVTkwUlN4SlFVRk5MRmRCUVZjc1YwRkJXQ3hYUVVGWExFZEJRVWNzYlVKQlFXMUNMRWRCUVVjN1YwRkJUU3hYUVVGWExFTkJRVU1zUjBGQlJ5eEZRVUZGTzBOQlFVRXNSMEZCUnp0WFFVRk5MRWxCUVVrc1NVRkJTU3hGUVVGRkxFTkJRVU1zVDBGQlR5eEZRVUZGTzBOQlFVRTdPenM3T3pzN096dEJRVUZETEVGQlV5OUdMRWxCUVUwc1kwRkJZeXhYUVVGa0xHTkJRV01zUjBGQlJ5eFZRVUZETEV0QlFVc3NSVUZCUlN4VlFVRlZMRVZCUVVzN1FVRkRha1FzVVVGQlRTeGhRVUZoTEVkQlFVY3NWVUZCVlN4RFFVRkRMRTFCUVUwc1EwRkJRenRCUVVONFF5eFJRVUZOTEZkQlFWY3NSMEZCUnl4RlFVRkZMRU5CUVVNN1FVRkRka0lzVVVGQlRTeE5RVUZOTEVkQlFVY3NiVUpCUVcxQ0xFTkJRVU1zTUVKQlFUQkNMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF6czdRVUZGZEVVc1UwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMR0ZCUVdFc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdEJRVU53UXl4dFFrRkJWeXhEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRUZCUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEZOQlFWTXNSMEZCU1N4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzB0QlF6RkZPenRCUVVWRUxGZEJRVThzVjBGQlZ5eERRVUZETzBOQlEzUkNPenM3T3pzN08wRkJRVU1zUVVGUFN5eEpRVUZOTERCQ1FVRXdRaXhYUVVFeFFpd3dRa0ZCTUVJc1IwRkJSeXhWUVVGRExFdEJRVXM3VjBGQlN5eExRVUZMTEVOQlFVTXNVMEZCVXl4RFFVRkRMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRXRCUVVzc1EwRkJReXhYUVVGWExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdRMEZCUVRzN096czdPenM3TzBGQlFVTXNRVUZUT1Vjc1NVRkJUU3hWUVVGVkxGZEJRVllzVlVGQlZTeEhRVUZITEZWQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJTenRCUVVOb1F5eFJRVUZKTEU5QlFVOHNSMEZCUnl4TFFVRkxMRU5CUVVNN08wRkJSWEJDTEZOQlFVc3NTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJReXhGUVVGRk8wRkJRMllzV1VGQlNTeERRVUZETEVOQlFVTXNZMEZCWXl4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRk8wRkJRM1pDTEdkQ1FVRkpMRmRCUVZjc1EwRkJReXhEUVVGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVWQlFVVTdRVUZEY2tJc2IwSkJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJUdEJRVU51UWl3eVFrRkJUeXhIUVVGSExFbEJRVWtzUTBGQlF6dHBRa0ZEYkVJN1lVRkRTaXhOUVVGTk8wRkJRMGdzZFVKQlFVOHNSMEZCUnl4SlFVRkpMRU5CUVVNN1lVRkRiRUk3VTBGRFNqdExRVU5LT3p0QlFVVkVMRmRCUVU4c1QwRkJUeXhEUVVGRE8wTkJRMnhDT3pzN096czdPenM3UVVGQlF5eEJRVk5MTEVsQlFVMHNWMEZCVnl4WFFVRllMRmRCUVZjc1IwRkJSeXhWUVVGRExFMUJRVTBzUlVGQlJTeFpRVUZaTzFkQlFVc3NUVUZCVFN4RFFVRkRMR05CUVdNc1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeE5RVUZOTEVOQlFVTXNXVUZCV1N4RFFVRkRMRXRCUVVzc1UwRkJVenREUVVGQk96czdPenM3T3p0QlFVRkRMRUZCVVhoSUxFbEJRVTBzVDBGQlR5eFhRVUZRTEU5QlFVOHNSMEZCUnl4VlFVRkRMRWRCUVVjN1YwRkJTeXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NUMEZCVHp0RFFVRkJPenM3T3pzN096dEJRVUZETEVGQlVXeEVMRWxCUVUwc1RVRkJUU3hYUVVGT0xFMUJRVTBzUjBGQlJ5eFZRVUZETEVkQlFVYzdWMEZCU3l4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzVlVGQlZUdERRVUZCT3pzN096czdPenRCUVVGRExFRkJVWEJFTEVsQlFVMHNTMEZCU3l4WFFVRk1MRXRCUVVzc1IwRkJSeXhWUVVGRExFZEJRVWM3VjBGQlN5eFBRVUZQTEVkQlFVY3NTMEZCU3l4UlFVRlJPME5CUVVFN096czdPenM3TzBGQlFVTXNRVUZSTDBNc1NVRkJUU3hMUVVGTExGZEJRVXdzUzBGQlN5eEhRVUZITEZWQlFVTXNSMEZCUnp0WFFVRkxMRTlCUVU4c1IwRkJSeXhMUVVGTExGRkJRVkU3UTBGQlFUczdPenM3T3pzN1FVRkJReXhCUVZFdlF5eEpRVUZOTEdWQlFXVXNWMEZCWml4bFFVRmxMRWRCUVVjc1ZVRkJReXhMUVVGTE8xZEJRVXNzUVVGQlF5eExRVUZMTEVsQlFVa3NTMEZCU3l4RFFVRkRMRTlCUVU4c1NVRkJTU3hMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJTU3hKUVVGSkxFZEJRVWNzUzBGQlN6dERRVUZCT3pzN096czdPenRCUVVGRExFRkJVWEpITEVsQlFVMHNVVUZCVVN4WFFVRlNMRkZCUVZFc1IwRkJSeXhWUVVGRExFZEJRVWM3VjBGQlN5eFBRVUZQTEVkQlFVY3NTMEZCU3l4UlFVRlJPME5CUVVFN096czdPenM3T3p0QlFVRkRMRUZCVTJ4RUxFbEJRVTBzVTBGQlV5eFhRVUZVTEZOQlFWTXNSMEZCUnl4VlFVRkRMRkZCUVZFc1JVRkJTenRCUVVOdVF5eFJRVUZOTEV0QlFVc3NSMEZCUnl4QlFVRkRMRTlCUVU4c1VVRkJVU3hMUVVGTExGRkJRVkVzUjBGQlNTeFJRVUZSTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zVVVGQlVTeERRVUZETEVkQlFVY3NVVUZCVVN4RFFVRkRPMEZCUXpsR0xGZEJRVThzUVVGQlF5eExRVUZMTEVOQlFVTXNUVUZCVFN4SFFVRkpMRVZCUVVVc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdRMEZEYWtVN096czdPenM3T3pzN1FVRkJReXhCUVZWTExFbEJRVTBzYlVKQlFXMUNMRmRCUVc1Q0xHMUNRVUZ0UWl4SFFVRkhMRlZCUVVNc1MwRkJTenRYUVVGTExGRkJRVkVzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRPME5CUVVFN096czdPenM3T3pzN1FVRkJReXhCUVZWMlJpeEpRVUZOTEcxQ1FVRnRRaXhYUVVGdVFpeHRRa0ZCYlVJc1IwRkJSeXhWUVVGRExFdEJRVXM3VjBGQlN5eFJRVUZSTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1MwRkJTeXhEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJRenREUVVGQk96czdPenM3T3pzN1FVRkJReXhCUVZOd1JpeEpRVUZOTEZOQlFWTXNWMEZCVkN4VFFVRlRMRWRCUVVjc1ZVRkJReXhIUVVGSExFVkJRVzlDTzFGQlFXeENMRk5CUVZNc2VVUkJRVWNzUTBGQlF6czdRVUZEZUVNc1lVRkJVeXhaUVVGSExFVkJRVVVzUlVGQlNTeFRRVUZUTEVOQlFVRXNRMEZCUXp0QlFVTTFRaXhYUVVGUExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4SFFVRkhMRk5CUVZNc1EwRkJReXhIUVVGSExGTkJRVk1zUTBGQlF6dERRVU5zUkN4RFFVRkRJaXdpWm1sc1pTSTZJblYwYVd4ekxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBVR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaVkyOXVjM1FnUTBGTlJVeGZRMEZUUlY5UVFWUlVSVkpPSUQwZ0x5aGJZUzE2WFNrb1cwRXRXbDBwTDJjN1hHNWpiMjV6ZENCU1JWQk1RVU5GWDFSRlRWQk1RVlJGSUQwZ0p5UXhMU1F5Snp0Y2JtTnZibk4wSUVoQlUxOVFSVkpHVDFKTlFVNURSVjlPVDFjZ1BTQW9kSGx3Wlc5bUlIQmxjbVp2Y20xaGJtTmxJQ0U5UFNBbmRXNWtaV1pwYm1Wa0p5QW1KaUJ3WlhKbWIzSnRZVzVqWlM1dWIzY3BPMXh1WEc0dktseHVJQ0FnSUVkbGRDQjJZWElnZEhsd1pTQmhjeUJ6ZEhKcGJtZGNiaUFnSUNCY2JpQWdJQ0JBY0dGeVlXMDZJRlpoY21saFlteGxJSFJ2SUhSbGMzUmNiaUFnSUNCQWNtVjBkWEp1SUZ0emRISnBibWRkT2lCU1pYUjFjbTV6TENCbWIzSWdhVzV6ZEdGdVkyVWdKMDlpYW1WamRDY2dhV1lnVzI5aWFtVmpkQ0JQWW1wbFkzUmRYRzRxTDF4dVkyOXVjM1FnZG1GeVZIbHdaU0E5SUhaaGNtbGhZbXhsSUQwK0lFOWlhbVZqZEM1d2NtOTBiM1I1Y0dVdWRHOVRkSEpwYm1jdVkyRnNiQ2gyWVhKcFlXSnNaU2t1YzJ4cFkyVW9PQ3dnTFRFcE8xeHVYRzR2S2x4dUlDQWdJRU52Ym5abGNuUWdZMkZ0Wld4RFlYTmxJSFJ2SUdSaGMyZ3RZMkZ6WlZ4dVhHNGdJQ0FnUUhCaGNtRnRJRnR6ZEhKcGJtZGRYRzRnSUNBZ1FISmxkSFZ5YmlCYmMzUnlhVzVuWFZ4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCallXMWxiRlJ2UkdGemFDQTlJQ2h6ZEhKcGJtY3BJRDArSUhOMGNtbHVaeTV5WlhCc1lXTmxLRU5CVFVWTVgwTkJVMFZmVUVGVVZFVlNUaXdnVWtWUVRFRkRSVjlVUlUxUVRFRlVSU2t1ZEc5TWIzZGxja05oYzJVb0tUdGNibHh1THlwY2JpQWdJQ0JEYjIxaWFXNWxJSFJ5WVc1elptOXliV1Z5Y3lCcGJuUnZJRzl1WlNCbWRXNWpkR2x2YmlCMGFHRjBJR05oYkd4eklHVjJaWEo1WEc0Z0lDQWdkSEpoYm5ObWIzSnRaWElnYVc0Z2RHaGxJR0Z5Y21GNUlHRnVaQ0J5WlhSMWNtNXpJSFJvWlNCeVpYTjFiSFJjYmx4dUlDQWdJRUJ3WVhKaGJTQmJZWEp5WVhsZFhHNGdJQ0FnUUhKbGRIVnliaUJiWm5WdVkzUnBiMjVkWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdOdmJXSnBibVZVY21GdWMyWnZjbTFsY25NZ1BTQW9kSEpoYm5ObWIzSnRaWEp6S1NBOVBpQjdYRzRnSUNBZ1kyOXVjM1FnYm5WdFZISmhibk5tYjNKdFpYSnpJRDBnZEhKaGJuTm1iM0p0WlhKekxteGxibWQwYUR0Y2JpQWdJQ0JzWlhRZ2FTQTlJREE3WEc1Y2JpQWdJQ0F2S2x4dUlDQWdJQ0FnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDFjYmlBZ0lDQWdJQ0FnUUhCaGNtRnRJRnR6ZEhKcGJtZGRYRzRnSUNBZ0lDQWdJRUJ3WVhKaGJTQmJRV04wYVc5dVhWeHVJQ0FnSUNBZ0lDQkFjbVYwZFhKdUlGdHVkVzFpWlhKZFhHNGdJQ0FnS2k5Y2JpQWdJQ0J5WlhSMWNtNGdLSFlzSUd0bGVTd2dZU2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQm1iM0lnS0drZ1BTQXdPeUJwSUR3Z2JuVnRWSEpoYm5ObWIzSnRaWEp6T3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIWWdQU0IwY21GdWMyWnZjbTFsY25OYmFWMG9kaXdnYTJWNUxDQmhLVHRjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMk8xeHVJQ0FnSUgwN1hHNTlPMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdZM0psWVhSbFJHVnNhVzFwZEdWa0lEMGdLSFpoYkhWbGN5d2dkR1Z5YlhNc0lHUmxiR2x0YVhSbGNpd2dZMmh2Y0NrZ1BUNGdlMXh1SUNBZ0lHTnZibk4wSUc1MWJWUmxjbTF6SUQwZ2RHVnliWE11YkdWdVozUm9PMXh1SUNBZ0lHeGxkQ0JqYjIxaWFXNWxaQ0E5SUNjbk8xeHVYRzRnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQnVkVzFVWlhKdGN6c2dhU3NyS1NCN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUhSbGNtMGdQU0IwWlhKdGMxdHBYVHRjYmlBZ0lDQWdJQ0FnYVdZZ0tIWmhiSFZsY3k1b1lYTlBkMjVRY205d1pYSjBlU2gwWlhKdEtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyOXRZbWx1WldRZ0t6MGdkbUZzZFdWelczUmxjbTFkSUNzZ1pHVnNhVzFwZEdWeU8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2FXWWdLR05vYjNBcElIdGNiaUFnSUNBZ0lDQWdZMjl0WW1sdVpXUWdQU0JqYjIxaWFXNWxaQzV6YkdsalpTZ3dMQ0F0WTJodmNDazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NtVjBkWEp1SUdOdmJXSnBibVZrTzF4dWZUdGNibHh1THlwY2JpQWdJQ0JEY21WaGRHVWdZU0JtZFc1amRHbHZiaUJ6ZEhKcGJtZGNibHh1SUNBZ0lDY3lNSEI0Snl3Z0ozUnlZVzV6YkdGMFpTY2dMVDRnSjNSeVlXNXpiR0YwWlNneU1IQjRLU2RjYmx4dUlDQWdJRUJ3WVhKaGJTQmJjM1J5YVc1blhWeHVJQ0FnSUVCd1lYSmhiU0JiYzNSeWFXNW5YVnh1SUNBZ0lFQnlaWFIxY200Z1czTjBjbWx1WjExY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ1kzSmxZWFJsUm5WdVkzUnBiMjVUZEhKcGJtY2dQU0FvZG1Gc2RXVXNJSEJ5WldacGVDa2dQVDRnWUNSN2NISmxabWw0ZlNna2UzWmhiSFZsZlNsZ08xeHVYRzR2S2x4dUlDQWdJRWRsYm1WeVlYUmxJR04xY25KbGJuUWdkR2x0WlhOMFlXMXdYRzRnSUNBZ1hHNGdJQ0FnUUhKbGRIVnliaUJiZEdsdFpYTjBZVzF3WFRvZ1EzVnljbVZ1ZENCVlRrbFlJSFJwYldWemRHRnRjRnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JqZFhKeVpXNTBWR2x0WlNBOUlFaEJVMTlRUlZKR1QxSk5RVTVEUlY5T1QxY2dQeUFvS1NBOVBpQndaWEptYjNKdFlXNWpaUzV1YjNjb0tTQTZJQ2dwSUQwK0lHNWxkeUJFWVhSbEtDa3VaMlYwVkdsdFpTZ3BPMXh1WEc0dktseHVJQ0FnSUZOd2JHbDBJR052Ykc5eUlITjBjbWx1WnlCcGJuUnZJRzFoY0NCdlppQmpiMnh2Y2lCd2NtOXdaWEowYVdWelhHNWNiaUFnSUNCY0luSm5ZbUVvTWpVMUxDQXlOVFVzSURJMU5Td2dNQ2xjSWl3Z1cxd2lVbVZrWENJc0lDZEhjbVZsYmx3aUxDQmNJa0pzZFdWY0lpd2dYQ0pCYkhCb1lWd2lYVnh1WEc0Z0lDQWdleUJTWldRNklESTFOUzR1TGlCOVhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHZGxkRU52Ykc5eVZtRnNkV1Z6SUQwZ0tIWmhiSFZsTENCamIyeHZjbFJsY20xektTQTlQaUI3WEc0Z0lDQWdZMjl1YzNRZ2JuVnRRMjlzYjNKVVpYSnRjeUE5SUdOdmJHOXlWR1Z5YlhNdWJHVnVaM1JvTzF4dUlDQWdJR052Ym5OMElHTnZiRzl5Vm1Gc2RXVnpJRDBnZTMwN1hHNGdJQ0FnWTI5dWMzUWdZMjlzYjNKeklEMGdjM0JzYVhSRGIyMXRZVVJsYkdsdGFYUmxaQ2huWlhSV1lXeDFaVVp5YjIxR2RXNWpkR2x2YmxOMGNtbHVaeWgyWVd4MVpTa3BPMXh1WEc0Z0lDQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0J1ZFcxRGIyeHZjbFJsY20xek95QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ1kyOXNiM0pXWVd4MVpYTmJZMjlzYjNKVVpYSnRjMXRwWFYwZ1BTQW9ZMjlzYjNKelcybGRJQ0U5UFNCMWJtUmxabWx1WldRcElEOGdZMjlzYjNKelcybGRJRG9nTVR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J5WlhSMWNtNGdZMjlzYjNKV1lXeDFaWE03WEc1OU8xeHVYRzR2S2x4dUlDQWdJRWRsZENCMllXeDFaU0JtY205dElHWjFibU4wYVc5dUlITjBjbWx1WjF4dVhHNGdJQ0FnWENKMGNtRnVjMnhoZEdWWUtESXdjSGdwWENJZ0xUNGdYQ0l5TUhCNFhDSmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdaMlYwVm1Gc2RXVkdjbTl0Um5WdVkzUnBiMjVUZEhKcGJtY2dQU0FvZG1Gc2RXVXBJRDArSUhaaGJIVmxMbk4xWW5OMGNtbHVaeWgyWVd4MVpTNXBibVJsZUU5bUtDY29KeWtnS3lBeExDQjJZV3gxWlM1c1lYTjBTVzVrWlhoUFppZ25LU2NwS1R0Y2JseHVMeXBjYmlBZ0lDQkRhR1ZqYXlCcFppQjBkMjhnYjJKcVpXTjBjeUJvWVhabElHTm9ZVzVuWldRZ1puSnZiU0JsWVdOb0lHOTBhR1Z5WEc0Z0lDQWdYRzRnSUNBZ1FIQmhjbUZ0SUZ0dlltcGxZM1JkT2lCSmJuQjFkQ0JCWEc0Z0lDQWdRSEJoY21GdElGdHZZbXBsWTNSZE9pQkpibkIxZENCQ1hHNGdJQ0FnUUhKbGRIVnliaUJiWW05dmJHVmhibDA2SUZSeWRXVWdhV1lnWkdsbVptVnlaVzUwWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdoaGMwTm9ZVzVuWldRZ1BTQW9ZU3dnWWlrZ1BUNGdlMXh1SUNBZ0lHeGxkQ0JqYUdGdVoyVmtJRDBnWm1Gc2MyVTdYRzVjYmlBZ0lDQm1iM0lnS0d4bGRDQnJaWGtnYVc0Z1lTa2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb1lTNW9ZWE5QZDI1UWNtOXdaWEowZVNoclpYa3BLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvYUdGelVISnZjR1Z5ZEhrb1lpd2dhMlY1S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hoVzJ0bGVWMGdJVDA5SUdKYmEyVjVYU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmphR0Z1WjJWa0lEMGdkSEoxWlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR05vWVc1blpXUWdQU0IwY25WbE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WMGRYSnVJR05vWVc1blpXUTdYRzU5TzF4dVhHNHZLbHh1SUNBZ0lFTm9aV05ySUdsbUlHOWlhbVZqZENCb1lYTWdjSEp2Y0dWeWRIa2dZVzVrSUdsMElHbHpiaWQwSUhWdVpHVm1hVzVsWkZ4dVhHNGdJQ0FnUUhCaGNtRnRJRnR2WW1wbFkzUmRYRzRnSUNBZ1FIQmhjbUZ0SUZ0emRISnBibWRkWEc0Z0lDQWdRSEpsZEhWeWJpQmJZbTl2YkdWaGJsMWNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdhR0Z6VUhKdmNHVnlkSGtnUFNBb2IySnFaV04wTENCd2NtOXdaWEowZVU1aGJXVXBJRDArSUc5aWFtVmpkQzVvWVhOUGQyNVFjbTl3WlhKMGVTaHdjbTl3WlhKMGVVNWhiV1VwSUNZbUlHOWlhbVZqZEZ0d2NtOXdaWEowZVU1aGJXVmRJQ0U5UFNCMWJtUmxabWx1WldRN1hHNWNiaThxWEc0Z0lDQWdTWE1nZFhScGJITWdkbUZ5SUdGdUlHRnljbUY1SUQ4Z1hHNGdJQ0FnWEc0Z0lDQWdRSEJoY21GdE9pQldZWEpwWVdKc1pTQjBieUIwWlhOMFhHNGdJQ0FnUUhKbGRIVnliaUJiWW05dmJHVmhibDA2SUZKbGRIVnlibk1nZEhKMVpTQnBaaUIxZEdsc2N5NTJZWEpVZVhCbElEMDlQU0FuUVhKeVlYa25YRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR2x6UVhKeVlYa2dQU0FvWVhKeUtTQTlQaUIyWVhKVWVYQmxLR0Z5Y2lrZ1BUMDlJQ2RCY25KaGVTYzdYRzVjYmk4cVhHNGdJQ0FnU1hNZ2RYUnBiSE1nZG1GeUlHRWdablZ1WTNScGIyNGdQeUJjYmlBZ0lDQmNiaUFnSUNCQWNHRnlZVzA2SUZaaGNtbGhZbXhsSUhSdklIUmxjM1JjYmlBZ0lDQkFjbVYwZFhKdUlGdGliMjlzWldGdVhUb2dVbVYwZFhKdWN5QjBjblZsSUdsbUlIVjBhV3h6TG5aaGNsUjVjR1VnUFQwOUlDZEdkVzVqZEdsdmJpZGNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdhWE5HZFc1aklEMGdLRzlpYWlrZ1BUNGdkbUZ5Vkhsd1pTaHZZbW9wSUQwOVBTQW5SblZ1WTNScGIyNG5PMXh1WEc0dktseHVJQ0FnSUVseklIVjBhV3h6SUhaaGNpQmhJRzUxYldKbGNqOWNiaUFnSUNCY2JpQWdJQ0JBY0dGeVlXMDZJRlpoY21saFlteGxJSFJ2SUhSbGMzUmNiaUFnSUNCQWNtVjBkWEp1SUZ0aWIyOXNaV0Z1WFRvZ1VtVjBkWEp1Y3lCMGNuVmxJR2xtSUhSNWNHVnZaaUE5UFQwZ0oyNTFiV0psY2lkY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2FYTk9kVzBnUFNBb2JuVnRLU0E5UGlCMGVYQmxiMllnYm5WdElEMDlQU0FuYm5WdFltVnlKenRjYmx4dUx5cGNiaUFnSUNCSmN5QjFkR2xzY3lCMllYSWdZVzRnYjJKcVpXTjBQMXh1SUNBZ0lGeHVJQ0FnSUVCd1lYSmhiVG9nVm1GeWFXRmliR1VnZEc4Z2RHVnpkRnh1SUNBZ0lFQnlaWFIxY200Z1cySnZiMnhsWVc1ZE9pQlNaWFIxY201eklIUnlkV1VnYVdZZ2RIbHdaVzltSUQwOVBTQW5iMkpxWldOMEoxeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnBjMDlpYWlBOUlDaHZZbW9wSUQwK0lIUjVjR1Z2WmlCdlltb2dQVDA5SUNkdlltcGxZM1FuTzF4dVhHNHZLbHh1SUNBZ0lFbHpJSFYwYVd4eklHRWdjbVZzWVhScGRtVWdkbUZzZFdVZ1lYTnphV2R1YldWdWREOWNiaUFnSUNCY2JpQWdJQ0JBY0dGeVlXMGdXM04wY21sdVoxMDZJRlpoY21saFlteGxJSFJ2SUhSbGMzUmNiaUFnSUNCQWNtVjBkWEp1SUZ0aWIyOXNaV0Z1WFRvZ1NXWWdkWFJwYkhNZ2JHOXZhM01nYkdsclpTQmhJSEpsYkdGMGFYWmxJSFpoYkhWbElHRnpjMmxuYm0xbGJuUmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdhWE5TWld4aGRHbDJaVlpoYkhWbElEMGdLSFpoYkhWbEtTQTlQaUFvZG1Gc2RXVWdKaVlnZG1Gc2RXVXVhVzVrWlhoUFppQW1KaUIyWVd4MVpTNXBibVJsZUU5bUtDYzlKeWtnUGlBd0tTQS9JSFJ5ZFdVZ09pQm1ZV3h6WlR0Y2JseHVMeXBjYmlBZ0lDQkpjeUIxZEdsc2N5QjJZWElnWVNCemRISnBibWNnUHlCY2JpQWdJQ0JjYmlBZ0lDQkFjR0Z5WVcwNklGWmhjbWxoWW14bElIUnZJSFJsYzNSY2JpQWdJQ0JBY21WMGRYSnVJRnRpYjI5c1pXRnVYVG9nVW1WMGRYSnVjeUIwY25WbElHbG1JSFI1Y0dWdlppQnpkSElnUFQwOUlDZHpkSEpwYm1jblhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHbHpVM1J5YVc1bklEMGdLSE4wY2lrZ1BUNGdkSGx3Wlc5bUlITjBjaUE5UFQwZ0ozTjBjbWx1WnljN1hHNWNiaThxWEc0Z0lDQWdRSEJoY21GdElGdHpkSEpwYm1jZ2ZId2dUbTlrWlV4cGMzUmRPbHh1SUNBZ0lDQWdJQ0JKWmlCemRISnBibWNzSUhSeVpXRjBaV1FnWVhNZ2MyVnNaV04wYjNJdVhHNGdJQ0FnSUNBZ0lFbG1JRzV2ZEN3Z2RISmxZWFJsWkNCaGN5QndjbVZsZUdsemRHbHVaeUJPYjJSbFRHbHpkRnh1WEc0Z0lDQWdRSEpsZEhWeWJpQmJRWEp5WVhsZFhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElITmxiR1ZqZEVSdmJTQTlJQ2h6Wld4bFkzUnZjaWtnUFQ0Z2UxeHVJQ0FnSUdOdmJuTjBJRzV2WkdWeklEMGdLSFI1Y0dWdlppQnpaV3hsWTNSdmNpQTlQVDBnSjNOMGNtbHVaeWNwSUQ4Z1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZja0ZzYkNoelpXeGxZM1J2Y2lrZ09pQnpaV3hsWTNSdmNqdGNiaUFnSUNCeVpYUjFjbTRnS0c1dlpHVnpMbXhsYm1kMGFDa2dQeUJiWFM1emJHbGpaUzVqWVd4c0tHNXZaR1Z6S1NBNklGdGRMbkIxYzJnb2JtOWtaWE1wTzF4dWZUdGNibHh1THlwY2JpQWdJQ0JUY0d4cGRDQmpiMjF0WVMxa1pXeHBiV2wwWldRZ2MzUnlhVzVuWEc1Y2JpQWdJQ0JjSW1admJ5eGlZWEpjSWlBdFBpQmJYQ0ptYjI5Y0lpd2dYQ0ppWVhKY0lsMWNibHh1SUNBZ0lFQndZWEpoYlNCYmMzUnlhVzVuWFZ4dUlDQWdJRUJ5WlhSMWNtNGdXMkZ5Y21GNVhWeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnpjR3hwZEVOdmJXMWhSR1ZzYVcxcGRHVmtJRDBnS0haaGJIVmxLU0E5UGlCcGMxTjBjbWx1WnloMllXeDFaU2tnUHlCMllXeDFaUzV6Y0d4cGRDZ3ZMRnhjY3lvdktTQTZJRnQyWVd4MVpWMDdYRzVjYmk4cVhHNGdJQ0FnVTNCc2FYUWdjM0JoWTJVdFpHVnNhVzFwZEdWa0lITjBjbWx1WjF4dVhHNGdJQ0FnWENKbWIyOGdZbUZ5WENJZ0xUNGdXMXdpWm05dlhDSXNJRndpWW1GeVhDSmRYRzVjYmlBZ0lDQkFjR0Z5WVcwZ1czTjBjbWx1WjExY2JpQWdJQ0JBY21WMGRYSnVJRnRoY25KaGVWMWNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdjM0JzYVhSVGNHRmpaVVJsYkdsdGFYUmxaQ0E5SUNoMllXeDFaU2tnUFQ0Z2FYTlRkSEpwYm1jb2RtRnNkV1VwSUQ4Z2RtRnNkV1V1YzNCc2FYUW9KeUFuS1NBNklGdDJZV3gxWlYwN1hHNWNiaThxWEc0Z0lDQWdRMjl1ZG1WeWRDQnVkVzFpWlhJZ2RHOGdlQ0JrWldOcGJXRnNJSEJzWVdObGMxeHVYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkWEc0Z0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZFhHNGdJQ0FnUUhKbGRIVnliaUJiYm5WdFltVnlYVnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0IwYjBSbFkybHRZV3dnUFNBb2JuVnRMQ0J3Y21WamFYTnBiMjRnUFNBeUtTQTlQaUI3WEc0Z0lDQWdjSEpsWTJsemFXOXVJRDBnTVRBZ0tpb2djSEpsWTJsemFXOXVPMXh1SUNBZ0lISmxkSFZ5YmlCTllYUm9Mbkp2ZFc1a0tHNTFiU0FxSUhCeVpXTnBjMmx2YmlrZ0x5QndjbVZqYVhOcGIyNDdYRzU5TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy91dGlscy5qc1xuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuc2V0R2xvYmFsRGlsYXRpb24gPSB1bmRlZmluZWQ7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxudmFyIE1BWF9FTEFQU0VEID0gMzM7XG5cbnZhciBjdXJyZW50ID0gMDtcbnZhciBlbGFwc2VkID0gMTYuNztcbnZhciBkaWxhdGlvbiA9IDE7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChmcmFtZXN0YW1wKSB7XG4gICAgICAgIGVsYXBzZWQgPSBNYXRoLm1heChNYXRoLm1pbihmcmFtZXN0YW1wIC0gY3VycmVudCwgTUFYX0VMQVBTRUQpLCAxKSAqIGRpbGF0aW9uO1xuICAgICAgICBjdXJyZW50ID0gZnJhbWVzdGFtcDtcbiAgICB9LFxuXG4gICAgc3RhcnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnQgPSAoMCwgX3V0aWxzLmN1cnJlbnRUaW1lKSgpO1xuICAgIH0sXG5cbiAgICBnZXRFbGFwc2VkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBlbGFwc2VkO1xuICAgIH1cbn07XG52YXIgc2V0R2xvYmFsRGlsYXRpb24gPSBleHBvcnRzLnNldEdsb2JhbERpbGF0aW9uID0gZnVuY3Rpb24gKG5ld0RpbGF0aW9uKSB7XG4gICAgcmV0dXJuIGRpbGF0aW9uID0gbmV3RGlsYXRpb247XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl3Y205alpYTnpMM1JwYldWeUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN1FVRkZRU3hKUVVGTkxGZEJRVmNzUjBGQlJ5eEZRVUZGTEVOQlFVTTdPMEZCUlhaQ0xFbEJRVWtzVDBGQlR5eEhRVUZITEVOQlFVTXNRMEZCUXp0QlFVTm9RaXhKUVVGSkxFOUJRVThzUjBGQlJ5eEpRVUZKTEVOQlFVTTdRVUZEYmtJc1NVRkJTU3hSUVVGUkxFZEJRVWNzUTBGQlF5eERRVUZET3p0clFrRkZSanRCUVVOWUxGVkJRVTBzUlVGQlJTeFZRVUZETEZWQlFWVXNSVUZCU3p0QlFVTndRaXhsUVVGUExFZEJRVWNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExGVkJRVlVzUjBGQlJ5eFBRVUZQTEVWQlFVVXNWMEZCVnl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFZEJRVWNzVVVGQlVTeERRVUZETzBGQlF6bEZMR1ZCUVU4c1IwRkJSeXhWUVVGVkxFTkJRVU03UzBGRGVFSTdPMEZCUlVRc1UwRkJTeXhGUVVGRk8yVkJRVTBzVDBGQlR5eEhRVUZITEZkQlpHeENMRmRCUVZjc1IwRmpiMEk3UzBGQlFUczdRVUZGY0VNc1kwRkJWU3hGUVVGRk8yVkJRVTBzVDBGQlR6dExRVUZCTzBOQlF6VkNPMEZCUlUwc1NVRkJUU3hwUWtGQmFVSXNWMEZCYWtJc2FVSkJRV2xDTEVkQlFVY3NWVUZCUXl4WFFVRlhPMWRCUVVzc1VVRkJVU3hIUVVGSExGZEJRVmM3UTBGQlFTeERRVUZESWl3aVptbHNaU0k2SW5ScGJXVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwVUdWeWNua3ZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElIc2dZM1Z5Y21WdWRGUnBiV1VnZlNCbWNtOXRJQ2N1TGk5cGJtTXZkWFJwYkhNbk8xeHVYRzVqYjI1emRDQk5RVmhmUlV4QlVGTkZSQ0E5SURNek8xeHVYRzVzWlhRZ1kzVnljbVZ1ZENBOUlEQTdYRzVzWlhRZ1pXeGhjSE5sWkNBOUlERTJMamM3WEc1c1pYUWdaR2xzWVhScGIyNGdQU0F4TzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCN1hHNGdJQ0FnZFhCa1lYUmxPaUFvWm5KaGJXVnpkR0Z0Y0NrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0JsYkdGd2MyVmtJRDBnVFdGMGFDNXRZWGdvVFdGMGFDNXRhVzRvWm5KaGJXVnpkR0Z0Y0NBdElHTjFjbkpsYm5Rc0lFMUJXRjlGVEVGUVUwVkVLU3dnTVNrZ0tpQmthV3hoZEdsdmJqdGNiaUFnSUNBZ0lDQWdZM1Z5Y21WdWRDQTlJR1p5WVcxbGMzUmhiWEE3WEc0Z0lDQWdmU3hjYmx4dUlDQWdJSE4wWVhKME9pQW9LU0E5UGlCamRYSnlaVzUwSUQwZ1kzVnljbVZ1ZEZScGJXVW9LU3hjYmx4dUlDQWdJR2RsZEVWc1lYQnpaV1E2SUNncElEMCtJR1ZzWVhCelpXUmNibjA3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0J6WlhSSGJHOWlZV3hFYVd4aGRHbHZiaUE5SUNodVpYZEVhV3hoZEdsdmJpa2dQVDRnWkdsc1lYUnBiMjRnUFNCdVpYZEVhV3hoZEdsdmJqc2lYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9wcm9jZXNzL3RpbWVyLmpzXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX1Byb2Nlc3MyID0gcmVxdWlyZSgnLi4vcHJvY2Vzcy9Qcm9jZXNzJyk7XG5cbnZhciBfUHJvY2VzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Qcm9jZXNzMik7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxudmFyIF9iaW5kQWRhcHRlciA9IHJlcXVpcmUoJy4uL2luYy9iaW5kLWFkYXB0ZXInKTtcblxudmFyIF9iaW5kQWRhcHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9iaW5kQWRhcHRlcik7XG5cbnZhciBfY29sb3IgPSByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9jb2xvcicpO1xuXG52YXIgX2NvbG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbG9yKTtcblxudmFyIF9jb21wbGV4ID0gcmVxdWlyZSgnLi4vdmFsdWUtdHlwZXMvY29tcGxleCcpO1xuXG52YXIgX2NvbXBsZXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcGxleCk7XG5cbnZhciBfdW5pdCA9IHJlcXVpcmUoJy4uL3ZhbHVlLXR5cGVzL3VuaXQnKTtcblxudmFyIF91bml0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3VuaXQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIERFRkFVTFRfUFJPUCA9ICdjdXJyZW50JztcbnZhciBOVU1FUklDQUxfVkFMVUVTID0gW0RFRkFVTFRfUFJPUCwgJ2Zyb20nLCAndG8nLCAncHJldicsICd2ZWxvY2l0eSddO1xudmFyIE5VTV9OVU1FUklDQUxfVkFMVUVTID0gTlVNRVJJQ0FMX1ZBTFVFUy5sZW5ndGg7XG5cbnZhciBBY3Rpb24gPSAoZnVuY3Rpb24gKF9Qcm9jZXNzKSB7XG4gICAgX2luaGVyaXRzKEFjdGlvbiwgX1Byb2Nlc3MpO1xuXG4gICAgZnVuY3Rpb24gQWN0aW9uKHByb3BzKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBY3Rpb24pO1xuXG4gICAgICAgIHByb3BzLnN0YXRlID0ge307XG4gICAgICAgIHByb3BzLnZhbHVlS2V5cyA9IFtdO1xuICAgICAgICBwcm9wcy5wYXJlbnRLZXlzID0gW107XG4gICAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUHJvY2Vzcy5jYWxsKHRoaXMsIHByb3BzKSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgIyBTZXQgQWN0aW9uIHByb3BlcnRpZXNcbiAgICAgICAgIyMgU2V0IHVzZXItZGVmaW5lZCBBY3Rpb24gcHJvcGVydGllc1xuICAgICAgICAgQHBhcmFtIFtvYmplY3RdXG4gICAgICAgIEByZXR1cm4gW0FjdGlvbl1cbiAgICAqL1xuXG4gICAgQWN0aW9uLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiBzZXQoKSB7XG4gICAgICAgIHZhciBwcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzBdO1xuICAgICAgICB2YXIgdmFsdWVzID0gcHJvcHMudmFsdWVzO1xuICAgICAgICB2YXIgb24gPSBwcm9wcy5vbjtcblxuICAgICAgICB2YXIgcHJvcHNUb1NldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgWyd2YWx1ZXMnLCAnb24nXSk7XG5cbiAgICAgICAgdmFyIGN1cnJlbnRWYWx1ZXMgPSB0aGlzLnZhbHVlcyA9IHRoaXMudmFsdWVzIHx8IHt9O1xuICAgICAgICB2YXIgZGVmYXVsdFZhbHVlID0gdGhpcy5nZXREZWZhdWx0VmFsdWUoKTtcbiAgICAgICAgdmFyIGluaGVyaXRhYmxlID0ge307XG5cbiAgICAgICAgLy8gMSkgU2V0IG5vbi1jb25zdW1lZCBwcm9wZXJ0aWVzXG4gICAgICAgIF9Qcm9jZXNzLnByb3RvdHlwZS5zZXQuY2FsbCh0aGlzLCBwcm9wc1RvU2V0KTtcblxuICAgICAgICAvLyAyKSBCaW5kIGBvbmAgdG8gYW4gYWRhcHRlciwgaWYgbm90IGFscmVhZHlcbiAgICAgICAgaWYgKG9uKSB7XG4gICAgICAgICAgICAvLyBEdWNrdHlwaXNoIGNoZWNrIGZvciBBZGFwdGVyXG4gICAgICAgICAgICB0aGlzLm9uID0gIW9uLnNldHRlciA/ICgwLCBfYmluZEFkYXB0ZXIyLmRlZmF1bHQpKG9uKSA6IG9uO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gMykgUHJpbWUgYW4gb2JqZWN0IHRvIGluaGVyaXQgZnJvbSwgd2l0aCBvbmx5IGB2YWx1ZWAgcHJvcGVydGllc1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoZGVmYXVsdFZhbHVlLmhhc093blByb3BlcnR5KGtleSkgJiYgcHJvcHNUb1NldC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgaW5oZXJpdGFibGVba2V5XSA9IHByb3BzVG9TZXRba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIDQpIFVwZGF0ZSBleGlzdGluZyB2YWx1ZXMgd2l0aCBpbmhlcml0YWJsZSBwcm9wZXJ0aWVzXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBjdXJyZW50VmFsdWVzKSB7XG4gICAgICAgICAgICAvLyBFeGNsdWRlIHZhcmlhYmxlcyB0byBiZSBzZXQsIGFzIHdlJ2xsIGRlYWwgd2l0aCB0aG9zZSBzZXBlcmF0ZWx5XG4gICAgICAgICAgICBpZiAoY3VycmVudFZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFZhbHVlc1trZXldID0gX2V4dGVuZHMoe30sIGN1cnJlbnRWYWx1ZXNba2V5XSwgaW5oZXJpdGFibGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gNSkgVXBkYXRlXG4gICAgICAgIGlmICh2YWx1ZXMpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0VmFsdWVzKHZhbHVlcywgaW5oZXJpdGFibGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIEFjdGlvbi5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gZ2V0KGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZVtrZXldO1xuICAgIH07XG5cbiAgICBBY3Rpb24ucHJvdG90eXBlLnNldFZhbHVlcyA9IGZ1bmN0aW9uIHNldFZhbHVlcyh2YWx1ZXMsIGluaGVyaXRGcm9tKSB7XG4gICAgICAgIHZhciBjdXJyZW50VmFsdWVzID0gdGhpcy52YWx1ZXM7XG4gICAgICAgIHZhciBkZWZhdWx0VmFsdWUgPSB0aGlzLmdldERlZmF1bHRWYWx1ZSgpO1xuICAgICAgICB2YXIgZGVmYXVsdFZhbHVlUHJvcCA9IHRoaXMuZ2V0RGVmYXVsdFZhbHVlUHJvcCgpO1xuXG4gICAgICAgIC8vIDIpIExvb3Agb3ZlciBldmVyeSBpbmNvbWluZyBgdmFsdWVgIGFuZCBzZXRcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHZhbHVlcykge1xuICAgICAgICAgICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0ge307XG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkcmVuID0ge307XG4gICAgICAgICAgICAgICAgdmFyIGhhc0NoaWxkcmVuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdmFyIGJhc2UgPSBjdXJyZW50VmFsdWVzW2tleV0gPyBjdXJyZW50VmFsdWVzW2tleV0gOiBkZWZhdWx0VmFsdWU7XG5cbiAgICAgICAgICAgICAgICAvLyBJZiB2YWx1ZXMgb3MgYW4gb2JqZWN0LCB1c2UgaXQgZGlyZWN0bHlcbiAgICAgICAgICAgICAgICBpZiAoKDAsIF91dGlscy5pc09iaikodmFsdWVzW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWVzW2tleV07XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gT1Igc2V0IHRvIGEgdGhlIGRlZmF1bHQgdmFsdWUgcHJvcGVydHkgb2YgYSBibGFuayBvYmplY3RcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVbZGVmYXVsdFZhbHVlUHJvcF0gPSB2YWx1ZXNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIG5ld1ZhbHVlID0gX2V4dGVuZHMoe30sIGJhc2UsIGluaGVyaXRGcm9tLCB2YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICAvLyBHZXQgY3VycmVudCB2YWx1ZSBpZiBub25lIGlzIGRlZmluZWRcbiAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUuY3VycmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHdlIGhhdmUgYSBgZnJvbWAgdmFsdWUgc2V0LCB0YWtlIHRoYXRcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlLmZyb20gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUuY3VycmVudCA9IG5ld1ZhbHVlLmZyb207XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE9yIGlmIHdlIGhhdmUgYW4gQWRhcHRlciwgZ2V0IGl0IGZyb20gdGhhdFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMub24gJiYgdGhpcy5vbi5nZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS5jdXJyZW50ID0gdGhpcy5vbi5nZXQoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBJZiBpdCdzIHN0aWxsIHVuZGVmaW5lZCBtYWtlIGl0IGVxdWFsIDA/P1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUuY3VycmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS5jdXJyZW50ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZS5mcm9tID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUuZnJvbSA9IG5ld1ZhbHVlLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gSWYgb3VyIEFkYXB0ZXIgaGFzIGEgYGdldFZhbHVlVHlwZWAgZnVuY3Rpb24sIHRyeSB0byBnZXQgYSBgdHlwZWAgd2l0aCB0aGUgdmFsdWUga2V5XG4gICAgICAgICAgICAgICAgaWYgKCFuZXdWYWx1ZS50eXBlICYmIHRoaXMub24gJiYgdGhpcy5vbi5nZXRWYWx1ZVR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUudHlwZSA9IHRoaXMub24uZ2V0VmFsdWVUeXBlKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gYykgTG9vcCB0aHJvdWdoIGFsbCBudW1lcmljYWwgcHJvcGVydHkgdHlwZXNcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IE5VTV9OVU1FUklDQUxfVkFMVUVTOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb3BOYW1lID0gTlVNRVJJQ0FMX1ZBTFVFU1tpXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlUHJvcCA9IG5ld1ZhbHVlW3Byb3BOYW1lXTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSBoYXZlIHRoaXMga2luZCBvZiBwcm9wZXJ0eSwgcHJvY2Vzc1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVQcm9wICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHdlIGRvbid0IGhhdmUgYSB0eXBlIHNldCB0byB0aGlzIHZhbHVlLCBmaW5kIG9uZSAodW5sZXNzIGl0J3MgYSByYXcgbnVtYmVyKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFuZXdWYWx1ZS50eXBlICYmICgwLCBfdXRpbHMuaXNTdHJpbmcpKHZhbHVlUHJvcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX3VuaXQyLmRlZmF1bHQudGVzdCh2YWx1ZVByb3ApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLnR5cGUgPSBfdW5pdDIuZGVmYXVsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKF9jb2xvcjIuZGVmYXVsdC50ZXN0KHZhbHVlUHJvcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUudHlwZSA9IF9jb2xvcjIuZGVmYXVsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKF9jb21wbGV4Mi5kZWZhdWx0LnRlc3QodmFsdWVQcm9wKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS50eXBlID0gX2NvbXBsZXgyLmRlZmF1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHdlJ3JlIGdvaW5nIHRvIHNwbGl0IHRoaXMgdmFsdWUgaW50byBjaGlsZCB2YWx1ZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUudHlwZS5oYXNPd25Qcm9wZXJ0eSgnc3BsaXQnKSAmJiAoMCwgX3V0aWxzLmlzU3RyaW5nKSh2YWx1ZVByb3ApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzcGxpdFByb3AgPSBuZXdWYWx1ZS50eXBlLnNwbGl0KHZhbHVlUHJvcCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgc3BsaXRLZXkgaW4gc3BsaXRQcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3BsaXRQcm9wLmhhc093blByb3BlcnR5KHNwbGl0S2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb21iaW5lZEtleSA9IGtleSArIHNwbGl0S2V5O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjaGlsZHJlbltjb21iaW5lZEtleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9kZWZhdWx0VmFsdWUgPSBuZXdWYWx1ZS50eXBlLmRlZmF1bHRQcm9wcyAmJiBuZXdWYWx1ZS50eXBlLmRlZmF1bHRQcm9wc1tzcGxpdEtleV0gPyBuZXdWYWx1ZS50eXBlLmRlZmF1bHRQcm9wc1tzcGxpdEtleV0gOiB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW5bY29tYmluZWRLZXldID0gX2V4dGVuZHMoe30sIG5ld1ZhbHVlLCBfZGVmYXVsdFZhbHVlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkS2V5OiBzcGxpdEtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbltjb21iaW5lZEtleV1bcHJvcE5hbWVdID0gc3BsaXRQcm9wW3NwbGl0S2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHRoaXMgaGFzIGEgYHRlbXBsYXRlYCBmdW5jdGlvbiwgZ2VuZXJhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFuZXdWYWx1ZS50ZW1wbGF0ZSAmJiBuZXdWYWx1ZS50eXBlLnRlbXBsYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS50ZW1wbGF0ZSA9IG5ld1ZhbHVlLnR5cGUudGVtcGxhdGUobmV3VmFsdWVbcHJvcE5hbWVdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc0NoaWxkcmVuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5ld1ZhbHVlLnR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gX2V4dGVuZHMoe30sIG5ld1ZhbHVlLCBuZXdWYWx1ZS50eXBlLmRlZmF1bHRQcm9wcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlLnR5cGUucGFyc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWVbcHJvcE5hbWVdID0gbmV3VmFsdWUudHlwZS5wYXJzZShuZXdWYWx1ZVtwcm9wTmFtZV0sIG5ld1ZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IC8vIEVuZCBudW1lcmljYWwgcHJvcGVydHkgaXRlcmF0aW9uXG5cbiAgICAgICAgICAgICAgICAvLyBTZXQgYHByZXZgIHRvIGBjdXJyZW50YCBpZiBpdCBpc24ndCBhbHJlYWR5IGRlZmluZWRcbiAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUucHJldiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLnByZXYgPSBuZXdWYWx1ZS5jdXJyZW50O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGN1cnJlbnRWYWx1ZXNba2V5XSA9IG5ld1ZhbHVlO1xuXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhpcyB2YWx1ZSBkb2Vzbid0IGhhdmUgY2hpbGRyZW4sIGFkZCB0byB2YWx1ZUtleXNcbiAgICAgICAgICAgICAgICBpZiAoIWhhc0NoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlS2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlS2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBPciBhZGQgdG8gcGFyZW50S2V5c1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS5jaGlsZHJlbiA9IG5ld1ZhbHVlLmNoaWxkcmVuIHx8IHt9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJlbnRLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudEtleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFZhbHVlcyhjaGlsZHJlbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSAvLyBFbmQgdmFsdWUgaXRlcmF0aW9uXG5cbiAgICAgICAgLy8gMykgUHJlY29tcHV0ZSB2YWx1ZSBrZXkgYW5kIHBhcmVudCBrZXkgbGVuZ3RoIHRvIHByZXZlbnQgcGVyLWZyYW1lIG1lYXN1cmVtZW50XG4gICAgICAgIHRoaXMubnVtVmFsdWVLZXlzID0gdGhpcy52YWx1ZUtleXMubGVuZ3RoO1xuICAgICAgICB0aGlzLm51bVBhcmVudEtleXMgPSB0aGlzLnBhcmVudEtleXMubGVuZ3RoO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICAvKlxuICAgICAgICBEZWNpZGUgd2hldGhlciB0aGlzIEFjdGlvbiB3aWxsIHJlbmRlciBvbiBuZXh0IGZyYW1lXG4gICAgICAgICBAcGFyYW0gW0FjdGlvbl1cbiAgICAgICAgQHBhcmFtIFtudW1iZXJdXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJuIHRydWUgdG8gcmVuZGVyXG4gICAgKi9cblxuICAgIEFjdGlvbi5wcm90b3R5cGUud2lsbFJlbmRlciA9IGZ1bmN0aW9uIHdpbGxSZW5kZXIoYWN0aW9uLCBmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgICAgIHZhciBoYXNDaGFuZ2VkID0gZmFsc2U7XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgYmFzZSB2YWx1ZXMgaGF2ZSB1cGRhdGVkXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMudmFsdWVLZXlzW2ldO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcblxuICAgICAgICAgICAgLy8gUnVuIHRyYW5zZm9ybSBmdW5jdGlvbiAoaWYgcHJlc2VudClcbiAgICAgICAgICAgIGlmICh2YWx1ZS50cmFuc2Zvcm0pIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gdmFsdWUudHJhbnNmb3JtKHZhbHVlLmN1cnJlbnQsIGtleSwgdGhpcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENhcCBtaW5pbXVtXG4gICAgICAgICAgICBpZiAoKDAsIF91dGlscy5pc051bSkodmFsdWUubWluKSkge1xuICAgICAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSBNYXRoLm1heCh2YWx1ZS5jdXJyZW50LCB2YWx1ZS5taW4pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDYXAgbWF4aW11bVxuICAgICAgICAgICAgaWYgKCgwLCBfdXRpbHMuaXNOdW0pKHZhbHVlLm1heCkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gTWF0aC5taW4odmFsdWUuY3VycmVudCwgdmFsdWUubWF4KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUm91bmQgbnVtYmVyXG4gICAgICAgICAgICBpZiAodmFsdWUucm91bmQpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gTWF0aC5yb3VuZCh2YWx1ZS5jdXJyZW50KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFsdWUuZnJhbWVDaGFuZ2UgPSB2YWx1ZS5jdXJyZW50IC0gdmFsdWUucHJldjtcblxuICAgICAgICAgICAgLy8gVXBkYXRlIHZlbG9jaXR5XG4gICAgICAgICAgICBpZiAoIXRoaXMuY2FsY3VsYXRlc1ZlbG9jaXR5KSB7XG4gICAgICAgICAgICAgICAgdmFsdWUudmVsb2NpdHkgPSAoMCwgX2NhbGMuc3BlZWRQZXJTZWNvbmQpKHZhbHVlLmZyYW1lQ2hhbmdlLCBlbGFwc2VkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgdGhpcyB2YWx1ZSBoYXMgY2hhbmdlZFxuICAgICAgICAgICAgaWYgKHZhbHVlLnByZXYgIT09IHZhbHVlLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICBoYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB2YWx1ZS5wcmV2ID0gdmFsdWUuY3VycmVudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQXBwZW5kIHVuaXRcbiAgICAgICAgICAgIHZhciB2YWx1ZUZvclN0YXRlID0gdmFsdWUudHlwZSAmJiB2YWx1ZS50eXBlLnNlcmlhbGl6ZSA/IHZhbHVlLnR5cGUuc2VyaWFsaXplKHZhbHVlLmN1cnJlbnQsIHZhbHVlKSA6IHZhbHVlLmN1cnJlbnQ7XG5cbiAgICAgICAgICAgIC8vIEFkZCB0byBzdGF0ZSBpZiB0aGlzIGlzIG5vdCBhIGNoaWxkIHZhdWVcbiAgICAgICAgICAgIGlmICghdmFsdWUucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZVtrZXldID0gdmFsdWVGb3JTdGF0ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZXNbdmFsdWUucGFyZW50XS5jaGlsZHJlblt2YWx1ZS5jaGlsZEtleV0gPSB2YWx1ZUZvclN0YXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMub25GcmFtZSkge1xuICAgICAgICAgICAgdGhpcy5vbkZyYW1lKHRoaXMuc3RhdGUsIHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMub25DbGVhbnVwID8gdHJ1ZSA6IGhhc0NoYW5nZWQ7XG4gICAgfTtcblxuICAgIC8qXG4gICAgICAgIElmIHdlIGFyZSByZW5kZXJpbmcsIHJlY29tYmluZSBwYXJlbnQgdmFsdWVzIGZpcnN0XG4gICAgKi9cblxuICAgIEFjdGlvbi5wcm90b3R5cGUub25QcmVSZW5kZXIgPSBmdW5jdGlvbiBvblByZVJlbmRlcigpIHtcbiAgICAgICAgLy8gVXBkYXRlIHBhcmVudCB2YWx1ZXNcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm51bVBhcmVudEtleXM7IGkrKykge1xuICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMucGFyZW50S2V5c1tpXTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG5cbiAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSB2YWx1ZS50eXBlLmNvbWJpbmUodmFsdWUuY2hpbGRyZW4sIHZhbHVlLnRlbXBsYXRlKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGVba2V5XSAhPT0gdmFsdWUuY3VycmVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVba2V5XSA9IHZhbHVlLmN1cnJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgQWN0aW9uLnByb3RvdHlwZS5vblJlbmRlciA9IGZ1bmN0aW9uIG9uUmVuZGVyKF9yZWYpIHtcbiAgICAgICAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZTtcbiAgICAgICAgdmFyIG9uID0gX3JlZi5vbjtcblxuICAgICAgICBpZiAob24gJiYgb24uc2V0KSB7XG4gICAgICAgICAgICBvbi5zZXQoc3RhdGUpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIEFjdGlvbi5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbiBwYXVzZSgpIHtcbiAgICAgICAgX1Byb2Nlc3MucHJvdG90eXBlLnN0b3AuY2FsbCh0aGlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIEFjdGlvbi5wcm90b3R5cGUucmVzdW1lID0gZnVuY3Rpb24gcmVzdW1lKCkge1xuICAgICAgICBfUHJvY2Vzcy5wcm90b3R5cGUuc3RhcnQuY2FsbCh0aGlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIEFjdGlvbi5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgICAgdmFyIHZhbHVlcyA9IHRoaXMudmFsdWVzO1xuICAgICAgICBfUHJvY2Vzcy5wcm90b3R5cGUuc3RhcnQuY2FsbCh0aGlzKTtcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZXNba2V5XS5wcmV2ID0gdmFsdWVzW2tleV0ub3JpZ2luID0gdmFsdWVzW2tleV0uY3VycmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKlxuICAgICAgICAjIEdldCBkZWZhdWx0IEFjdGlvbiB2YWx1ZSBwcm9wZXJ0aWVzXG4gICAgICAgICBAcmV0dXJuIFtvYmplY3RdXG4gICAgKi9cblxuICAgIEFjdGlvbi5wcm90b3R5cGUuZ2V0RGVmYXVsdFZhbHVlID0gZnVuY3Rpb24gZ2V0RGVmYXVsdFZhbHVlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmVsb2NpdHk6IDAsXG4gICAgICAgICAgICByb3VuZDogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgIyBHZXQgZGVmYXVsdCBBY3Rpb24gdmFsdWUgcHJvcGVydHkgbmFtZVxuICAgICAgICAjIyBTZXQgdGhpcyBgdmFsdWVgIHByb3BlcnR5IHdoZW4gc2V0IGFzIHZhbHVlIGluc3RlYWQgb2Ygb2JqZWN0XG4gICAgICAgICBAcmV0dXJuIFtzdHJpbmddXG4gICAgKi9cblxuICAgIEFjdGlvbi5wcm90b3R5cGUuZ2V0RGVmYXVsdFZhbHVlUHJvcCA9IGZ1bmN0aW9uIGdldERlZmF1bHRWYWx1ZVByb3AoKSB7XG4gICAgICAgIHJldHVybiBERUZBVUxUX1BST1A7XG4gICAgfTtcblxuICAgIHJldHVybiBBY3Rpb247XG59KShfUHJvY2VzczMuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEFjdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDBGamRHbHZiaTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN08wRkJVVUVzU1VGQlRTeFpRVUZaTEVkQlFVY3NVMEZCVXl4RFFVRkRPMEZCUXk5Q0xFbEJRVTBzWjBKQlFXZENMRWRCUVVjc1EwRkJReXhaUVVGWkxFVkJRVVVzVFVGQlRTeEZRVUZGTEVsQlFVa3NSVUZCUlN4TlFVRk5MRVZCUVVVc1ZVRkJWU3hEUVVGRExFTkJRVU03UVVGRE1VVXNTVUZCVFN4dlFrRkJiMElzUjBGQlJ5eG5Ra0ZCWjBJc1EwRkJReXhOUVVGTkxFTkJRVU03TzBsQlJXaERMRTFCUVUwN1kwRkJUaXhOUVVGTk96dEJRVU4yUWl4aFFVUnBRaXhOUVVGTkxFTkJRMWdzUzBGQlN5eEZRVUZGT3poQ1FVUkdMRTFCUVUwN08wRkJSVzVDTEdGQlFVc3NRMEZCUXl4TFFVRkxMRWRCUVVjc1JVRkJSU3hEUVVGRE8wRkJRMnBDTEdGQlFVc3NRMEZCUXl4VFFVRlRMRWRCUVVjc1JVRkJSU3hEUVVGRE8wRkJRM0pDTEdGQlFVc3NRMEZCUXl4VlFVRlZMRWRCUVVjc1JVRkJSU3hEUVVGRE8yZEVRVU4wUWl4dlFrRkJUU3hMUVVGTExFTkJRVU03UzBGRFpqczdPenM3T3pzN1FVRkJRVHRCUVU1blFpeFZRVUZOTEZkQlpYWkNMRWRCUVVjc2EwSkJRV0U3V1VGQldpeExRVUZMTEhsRVFVRkhMRVZCUVVVN1dVRkRSaXhOUVVGTkxFZEJRWGRDTEV0QlFVc3NRMEZCYmtNc1RVRkJUVHRaUVVGRkxFVkJRVVVzUjBGQmIwSXNTMEZCU3l4RFFVRXpRaXhGUVVGRk96dFpRVUZMTEZWQlFWVXNORUpCUVVzc1MwRkJTenM3UVVGRE0wTXNXVUZCVFN4aFFVRmhMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4SlFVRkpMRVZCUVVVc1EwRkJRenRCUVVOMFJDeFpRVUZOTEZsQlFWa3NSMEZCUnl4SlFVRkpMRU5CUVVNc1pVRkJaU3hGUVVGRkxFTkJRVU03UVVGRE5VTXNXVUZCVFN4WFFVRlhMRWRCUVVjc1JVRkJSVHM3TzBGQlFVTXNRVUZIZGtJc01rSkJRVTBzUjBGQlJ5eExRVUZCTEU5QlFVTXNWVUZCVlN4RFFVRkRPenM3UVVGQlF5eEJRVWQwUWl4WlFVRkpMRVZCUVVVc1JVRkJSVHM3UVVGRlNpeG5Ra0ZCU1N4RFFVRkRMRVZCUVVVc1IwRkJSeXhCUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEUxQlFVMHNSMEZCU1N3eVFrRkJXU3hGUVVGRkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTTdVMEZEYWtRN096dEJRVUZCTEVGQlIwUXNZVUZCU3l4SlFVRkpMRWRCUVVjc1NVRkJTU3haUVVGWkxFVkJRVVU3UVVGRE1VSXNaMEpCUVVrc1dVRkJXU3hEUVVGRExHTkJRV01zUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4VlFVRlZMRU5CUVVNc1kwRkJZeXhEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTzBGQlEzQkZMREpDUVVGWExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NWVUZCVlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8yRkJRM1JETzFOQlEwbzdPenRCUVVGQkxFRkJSMFFzWVVGQlN5eEpRVUZKTEVkQlFVY3NTVUZCU1N4aFFVRmhMRVZCUVVVN08wRkJSVE5DTEdkQ1FVRkpMR0ZCUVdFc1EwRkJReXhqUVVGakxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVTdRVUZEYmtNc05rSkJRV0VzUTBGQlF5eEhRVUZITEVOQlFVTXNaMEpCUVZFc1lVRkJZU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZMTEZkQlFWY3NRMEZCUlN4RFFVRkRPMkZCUTJ4Rk8xTkJRMG83T3p0QlFVRkJMRUZCUjBRc1dVRkJTU3hOUVVGTkxFVkJRVVU3UVVGRFVpeG5Ra0ZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhOUVVGTkxFVkJRVVVzVjBGQlZ5eERRVUZETEVOQlFVTTdVMEZEZGtNN08wRkJSVVFzWlVGQlR5eEpRVUZKTEVOQlFVTTdTMEZEWmpzN1FVRnVSR2RDTEZWQlFVMHNWMEZ4UkhaQ0xFZEJRVWNzWjBKQlFVTXNSMEZCUnl4RlFVRkZPMEZCUTB3c1pVRkJUeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMHRCUXpGQ096dEJRWFpFWjBJc1ZVRkJUU3hYUVhsRWRrSXNVMEZCVXl4elFrRkJReXhOUVVGTkxFVkJRVVVzVjBGQlZ5eEZRVUZGTzBGQlF6TkNMRmxCUVUwc1lVRkJZU3hIUVVGSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTTdRVUZEYkVNc1dVRkJUU3haUVVGWkxFZEJRVWNzU1VGQlNTeERRVUZETEdWQlFXVXNSVUZCUlN4RFFVRkRPMEZCUXpWRExGbEJRVTBzWjBKQlFXZENMRWRCUVVjc1NVRkJTU3hEUVVGRExHMUNRVUZ0UWl4RlFVRkZPenM3UVVGQlF5eEJRVWR3UkN4aFFVRkxMRWxCUVVrc1IwRkJSeXhKUVVGSkxFMUJRVTBzUlVGQlJUdEJRVU53UWl4blFrRkJTU3hOUVVGTkxFTkJRVU1zWTBGQll5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZPMEZCUXpWQ0xHOUNRVUZKTEV0QlFVc3NSMEZCUnl4RlFVRkZMRU5CUVVNN1FVRkRaaXh2UWtGQlNTeFJRVUZSTEVkQlFVY3NSVUZCUlN4RFFVRkRPMEZCUTJ4Q0xHOUNRVUZKTEZkQlFWY3NSMEZCUnl4TFFVRkxMRU5CUVVNN1FVRkRlRUlzYjBKQlFVa3NTVUZCU1N4SFFVRkhMR0ZCUVdFc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eGhRVUZoTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1dVRkJXVHM3TzBGQlFVTXNRVUZIYkVVc2IwSkJRVWtzVjBGcVJrb3NTMEZCU3l4RlFXbEdTeXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlR0QlFVTndRaXg1UWtGQlN5eEhRVUZITEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNN096dEJRVUZETEdsQ1FVZDJRaXhOUVVGTk8wRkJRMGdzTmtKQlFVc3NRMEZCUXl4blFrRkJaMElzUTBGQlF5eEhRVUZITEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenR4UWtGRGVrTTdPMEZCUlVRc2IwSkJRVWtzVVVGQlVTeG5Ra0ZCVVN4SlFVRkpMRVZCUVVzc1YwRkJWeXhGUVVGTExFdEJRVXNzUTBGQlJUczdPMEZCUVVNc1FVRkhja1FzYjBKQlFVa3NVVUZCVVN4RFFVRkRMRTlCUVU4c1MwRkJTeXhUUVVGVExFVkJRVVU3TzBGQlJXaERMSGRDUVVGSkxGRkJRVkVzUTBGQlF5eEpRVUZKTEV0QlFVc3NVMEZCVXl4RlFVRkZPMEZCUXpkQ0xHZERRVUZSTEVOQlFVTXNUMEZCVHl4SFFVRkhMRkZCUVZFc1EwRkJReXhKUVVGSk96czdRVUZCUXl4eFFrRkhjRU1zVFVGQlRTeEpRVUZKTEVsQlFVa3NRMEZCUXl4RlFVRkZMRWxCUVVrc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVWQlFVVTdRVUZETDBJc2IwTkJRVkVzUTBGQlF5eFBRVUZQTEVkQlFVY3NTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdlVUpCUTNaRE96czdRVUZCUVN4QlFVZEVMSGRDUVVGSkxGRkJRVkVzUTBGQlF5eFBRVUZQTEV0QlFVc3NVMEZCVXl4RlFVRkZPMEZCUTJoRExHZERRVUZSTEVOQlFVTXNUMEZCVHl4SFFVRkhMRU5CUVVNc1EwRkJRenR4UWtGRGVFSTdhVUpCUTBvN08wRkJSVVFzYjBKQlFVa3NVVUZCVVN4RFFVRkRMRWxCUVVrc1MwRkJTeXhUUVVGVExFVkJRVVU3UVVGRE4wSXNORUpCUVZFc1EwRkJReXhKUVVGSkxFZEJRVWNzVVVGQlVTeERRVUZETEU5QlFVOHNRMEZCUXp0cFFrRkRjRU03T3p0QlFVRkJMRUZCUjBRc2IwSkJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4SlFVRkpMRWxCUVVrc1EwRkJReXhGUVVGRkxFbEJRVWtzU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4WlFVRlpMRVZCUVVVN1FVRkRia1FzTkVKQlFWRXNRMEZCUXl4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eFpRVUZaTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN2FVSkJRemRET3pzN1FVRkJRU3hCUVVkRUxIRkNRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzYjBKQlFXOUNMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3UVVGRE0wTXNkMEpCUVUwc1VVRkJVU3hIUVVGSExHZENRVUZuUWl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJRM0pETEhkQ1FVRk5MRk5CUVZNc1IwRkJSeXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZET3pzN1FVRkJReXhCUVVkeVF5eDNRa0ZCU1N4VFFVRlRMRXRCUVVzc1UwRkJVeXhGUVVGRk96dEJRVVY2UWl3MFFrRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVsQlFVa3NWMEUzU0haQ0xGRkJRVkVzUlVFMlNIZENMRk5CUVZNc1EwRkJReXhGUVVGRk8wRkJRM1pETEdkRFFVRkpMR1ZCUVZNc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eEZRVUZGTzBGQlF6RkNMSGREUVVGUkxFTkJRVU1zU1VGQlNTeHBRa0ZCVnl4RFFVRkRPelpDUVVVMVFpeE5RVUZOTEVsQlFVa3NaMEpCUVZVc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eEZRVUZGTzBGQlEyeERMSGREUVVGUkxFTkJRVU1zU1VGQlNTeHJRa0ZCV1N4RFFVRkRPelpDUVVVM1FpeE5RVUZOTEVsQlFVa3NhMEpCUVZrc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eEZRVUZGTzBGQlEzQkRMSGREUVVGUkxFTkJRVU1zU1VGQlNTeHZRa0ZCWXl4RFFVRkRPelpDUVVNdlFqdDVRa0ZEU2pzN1FVRkZSQ3cwUWtGQlNTeFJRVUZSTEVOQlFVTXNTVUZCU1N4RlFVRkZPenRCUVVWbUxHZERRVUZKTEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1kwRkJZeXhEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEZkQk0wbHNSQ3hSUVVGUkxFVkJNa2x0UkN4VFFVRlRMRU5CUVVNc1JVRkJSVHRCUVVNNVJDeHZRMEZCVFN4VFFVRlRMRWRCUVVjc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNN08wRkJSV3BFTEhGRFFVRkxMRWxCUVVrc1VVRkJVU3hKUVVGSkxGTkJRVk1zUlVGQlJUdEJRVU0xUWl4M1EwRkJTU3hUUVVGVExFTkJRVU1zWTBGQll5eERRVUZETEZGQlFWRXNRMEZCUXl4RlFVRkZPMEZCUTNCRExEUkRRVUZOTEZkQlFWY3NSMEZCUnl4SFFVRkhMRWRCUVVjc1VVRkJVU3hEUVVGRE96dEJRVVZ1UXl3MFEwRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTXNSVUZCUlR0QlFVTjRRaXhuUkVGQlRTeGhRVUZaTEVkQlFVY3NRVUZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExGbEJRVmtzU1VGQlNTeFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhSUVVGUkxFTkJRVU1zUjBGQlNTeFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhSUVVGUkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTTdRVUZEZEVrc2IwUkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTXNaMEpCUTJRc1VVRkJVU3hGUVVOU0xHRkJRVms3UVVGRFppeHpSRUZCVFN4RlFVRkZMRWRCUVVjN1FVRkRXQ3gzUkVGQlVTeEZRVUZGTEZGQlFWRTdRVUZEYkVJc2IwUkJRVWtzUlVGQlJTeFRRVUZUT3poRFFVTnNRaXhEUVVGRE8zbERRVU5NT3p0QlFVVkVMR2RFUVVGUkxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTXNVVUZCVVN4RFFVRkRMRWRCUVVjc1UwRkJVeXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzNGRFFVTjZSRHRwUTBGRFNqczdPMEZCUVVFc1FVRkhSQ3h2UTBGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRWxCUVVrc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVWQlFVVTdRVUZET1VNc05FTkJRVkVzUTBGQlF5eFJRVUZSTEVkQlFVY3NVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNN2FVTkJRMnhGT3p0QlFVVkVMREpEUVVGWExFZEJRVWNzU1VGQlNTeERRVUZET3paQ1FVVjBRaXhOUVVGTkxFbEJRVWtzVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4WlFVRlpMRVZCUVVVN1FVRkRia01zZDBOQlFWRXNaMEpCUVZFc1VVRkJVU3hGUVVGTExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkZMRU5CUVVNN05rSkJRemRFT3p0QlFVVkVMR2REUVVGSkxGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RlFVRkZPMEZCUTNKQ0xIZERRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWRCUVVjc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZET3paQ1FVTXhSVHQ1UWtGRFNqdHhRa0ZEU2p0cFFrRkRTanM3TzBGQlFVRXNRVUZIUkN4dlFrRkJTU3hSUVVGUkxFTkJRVU1zU1VGQlNTeExRVUZMTEZOQlFWTXNSVUZCUlR0QlFVTTNRaXcwUWtGQlVTeERRVUZETEVsQlFVa3NSMEZCUnl4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRE8ybENRVU53UXpzN1FVRkZSQ3cyUWtGQllTeERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRkZCUVZFN096dEJRVUZETEVGQlJ6bENMRzlDUVVGSkxFTkJRVU1zVjBGQlZ5eEZRVUZGTzBGQlEyUXNkMEpCUVVrc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFVkJRVVU3UVVGRGNFTXNORUpCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPM0ZDUVVNMVFqczdPMEZCUVVFc2FVSkJSMG9zVFVGQlRUdEJRVU5JTEdkRFFVRlJMRU5CUVVNc1VVRkJVU3hIUVVGSExGRkJRVkVzUTBGQlF5eFJRVUZSTEVsQlFVa3NSVUZCUlN4RFFVRkRPenRCUVVVMVF5dzBRa0ZCU1N4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1JVRkJSVHRCUVVOeVF5eG5RMEZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdlVUpCUXpkQ096dEJRVVZFTERSQ1FVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzNGQ1FVTTFRanRoUVVOS08xTkJRMG83T3p0QlFVRkJMRUZCUjBRc1dVRkJTU3hEUVVGRExGbEJRVmtzUjBGQlJ5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTFCUVUwc1EwRkJRenRCUVVNeFF5eFpRVUZKTEVOQlFVTXNZVUZCWVN4SFFVRkhMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zVFVGQlRTeERRVUZET3p0QlFVVTFReXhsUVVGUExFbEJRVWtzUTBGQlF6dExRVVZtT3pzN096czdPenM3TzBGQmVrMW5RaXhWUVVGTkxGZEJiVTUyUWl4VlFVRlZMSFZDUVVGRExFMUJRVTBzUlVGQlJTeFZRVUZWTEVWQlFVVXNUMEZCVHl4RlFVRkZPMEZCUTNCRExGbEJRVWtzVlVGQlZTeEhRVUZITEV0QlFVczdPenRCUVVGRExFRkJSM1pDTEdGQlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8wRkJRM2hETEdkQ1FVRk5MRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUXpsQ0xHZENRVUZOTEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF6czdPMEZCUVVNc1FVRkhMMElzWjBKQlFVa3NTMEZCU3l4RFFVRkRMRk5CUVZNc1JVRkJSVHRCUVVOcVFpeHhRa0ZCU3l4RFFVRkRMRTlCUVU4c1IwRkJSeXhMUVVGTExFTkJRVU1zVTBGQlV5eERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRVZCUVVVc1IwRkJSeXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzJGQlF6ZEVPenM3UVVGQlFTeEJRVWRFTEdkQ1FVRkpMRmRCTTA5UUxFdEJRVXNzUlVFeVQxRXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRk8wRkJRMnhDTEhGQ1FVRkxMRU5CUVVNc1QwRkJUeXhIUVVGSExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRTlCUVU4c1JVRkJSU3hMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdZVUZEZEVRN096dEJRVUZCTEVGQlIwUXNaMEpCUVVrc1YwRm9VRkFzUzBGQlN5eEZRV2RRVVN4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVU3UVVGRGJFSXNjVUpCUVVzc1EwRkJReXhQUVVGUExFZEJRVWNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1QwRkJUeXhGUVVGRkxFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0aFFVTjBSRHM3TzBGQlFVRXNRVUZIUkN4blFrRkJTU3hMUVVGTExFTkJRVU1zUzBGQlN5eEZRVUZGTzBGQlEySXNjVUpCUVVzc1EwRkJReXhQUVVGUExFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03WVVGRE4wTTdPMEZCUlVRc2FVSkJRVXNzUTBGQlF5eFhRVUZYTEVkQlFVY3NTMEZCU3l4RFFVRkRMRTlCUVU4c1IwRkJSeXhMUVVGTExFTkJRVU1zU1VGQlNUczdPMEZCUVVNc1FVRkhMME1zWjBKQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc2EwSkJRV3RDTEVWQlFVVTdRVUZETVVJc2NVSkJRVXNzUTBGQlF5eFJRVUZSTEVkQlFVY3NWVUU1VUhoQ0xHTkJRV01zUlVFNFVIbENMRXRCUVVzc1EwRkJReXhYUVVGWExFVkJRVVVzVDBGQlR5eERRVUZETEVOQlFVTTdZVUZETDBRN096dEJRVUZCTEVGQlIwUXNaMEpCUVVrc1MwRkJTeXhEUVVGRExFbEJRVWtzUzBGQlN5eExRVUZMTEVOQlFVTXNUMEZCVHl4RlFVRkZPMEZCUXpsQ0xEQkNRVUZWTEVkQlFVY3NTVUZCU1N4RFFVRkRPMEZCUTJ4Q0xIRkNRVUZMTEVOQlFVTXNTVUZCU1N4SFFVRkhMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU03WVVGRE9VSTdPenRCUVVGQkxFRkJSMFFzWjBKQlFVMHNZVUZCWVN4SFFVRkhMRUZCUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzU1VGQlNTeExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1IwRkJTU3hMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1QwRkJUeXhGUVVGRkxFdEJRVXNzUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXl4UFFVRlBPenM3UVVGQlF5eEJRVWQ0U0N4blFrRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eE5RVUZOTEVWQlFVVTdRVUZEWml4dlFrRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4aFFVRmhMRU5CUVVNN1lVRkRia01zVFVGQlRUdEJRVU5JTEc5Q1FVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRExGRkJRVkVzUTBGQlF5eEhRVUZITEdGQlFXRXNRMEZCUXp0aFFVTjBSVHRUUVVOS096dEJRVVZFTEZsQlFVa3NTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSVHRCUVVOa0xHZENRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdVMEZEYkVNN08wRkJSVVFzWlVGQlR5eEJRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRWRCUVVrc1NVRkJTU3hIUVVGSExGVkJRVlVzUTBGQlF6dExRVU12UXpzN096czdPMEZCTlZGblFpeFZRVUZOTEZkQmFWSjJRaXhYUVVGWExEQkNRVUZIT3p0QlFVVldMR0ZCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1lVRkJZU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzBGQlEzcERMR2RDUVVGTkxFZEJRVWNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJReTlDTEdkQ1FVRk5MRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPenRCUVVVdlFpeHBRa0ZCU3l4RFFVRkRMRTlCUVU4c1IwRkJSeXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1VVRkJVU3hGUVVGRkxFdEJRVXNzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXpzN1FVRkZia1VzWjBKQlFVa3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eExRVUZMTEVOQlFVTXNUMEZCVHl4RlFVRkZPMEZCUTI1RExHOUNRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTTdZVUZEYmtNN1UwRkRTanRMUVVOS096dEJRVGRTWjBJc1ZVRkJUU3hYUVN0U2RrSXNVVUZCVVN3eVFrRkJaMEk3V1VGQllpeExRVUZMTEZGQlFVd3NTMEZCU3p0WlFVRkZMRVZCUVVVc1VVRkJSaXhGUVVGRk96dEJRVU5vUWl4WlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFTkJRVU1zUjBGQlJ5eEZRVUZGTzBGQlEyUXNZMEZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dFRRVU5xUWp0TFFVTktPenRCUVc1VFowSXNWVUZCVFN4WFFYRlRka0lzUzBGQlN5eHZRa0ZCUnp0QlFVTktMREpDUVVGTkxFbEJRVWtzUzBGQlFTeE5RVUZGTEVOQlFVTTdRVUZEWWl4bFFVRlBMRWxCUVVrc1EwRkJRenRMUVVObU96dEJRWGhUWjBJc1ZVRkJUU3hYUVRCVGRrSXNUVUZCVFN4eFFrRkJSenRCUVVOTUxESkNRVUZOTEV0QlFVc3NTMEZCUVN4TlFVRkZMRU5CUVVNN1FVRkRaQ3hsUVVGUExFbEJRVWtzUTBGQlF6dExRVU5tT3p0QlFUZFRaMElzVlVGQlRTeFhRU3RUZGtJc1MwRkJTeXh2UWtGQlJ6dEJRVU5LTEZsQlFVMHNUVUZCVFN4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU03UVVGRE0wSXNNa0pCUVUwc1MwRkJTeXhMUVVGQkxFMUJRVVVzUTBGQlF6czdRVUZGWkN4aFFVRkxMRWxCUVVrc1IwRkJSeXhKUVVGSkxFMUJRVTBzUlVGQlJUdEJRVU53UWl4blFrRkJTU3hOUVVGTkxFTkJRVU1zWTBGQll5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZPMEZCUXpWQ0xITkNRVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1NVRkJTU3hIUVVGSExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4TlFVRk5MRWRCUVVjc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXp0aFFVTXZSRHRUUVVOS08wdEJRMG83T3pzN096czdRVUY0VkdkQ0xGVkJRVTBzVjBFclZIWkNMR1ZCUVdVc09FSkJRVWM3UVVGRFpDeGxRVUZQTzBGQlEwZ3NiMEpCUVZFc1JVRkJSU3hEUVVGRE8wRkJRMWdzYVVKQlFVc3NSVUZCUlN4TFFVRkxPMU5CUTJZc1EwRkJRenRMUVVOTU96czdPenM3T3p0QlFYQlZaMElzVlVGQlRTeFhRVFJWZGtJc2JVSkJRVzFDTEd0RFFVRkhPMEZCUTJ4Q0xHVkJRVThzV1VGQldTeERRVUZETzB0QlEzWkNPenRYUVRsVlowSXNUVUZCVFRzN08ydENRVUZPTEUxQlFVMGlMQ0ptYVd4bElqb2lRV04wYVc5dUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBVR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUZCeWIyTmxjM01nWm5KdmJTQW5MaTR2Y0hKdlkyVnpjeTlRY205alpYTnpKenRjYm1sdGNHOXlkQ0I3SUhOd1pXVmtVR1Z5VTJWamIyNWtJSDBnWm5KdmJTQW5MaTR2YVc1akwyTmhiR01uTzF4dWFXMXdiM0owSUhzZ2FYTk9kVzBzSUdselQySnFMQ0JwYzFOMGNtbHVaeUI5SUdaeWIyMGdKeTR1TDJsdVl5OTFkR2xzY3ljN1hHNXBiWEJ2Y25RZ1ltbHVaRUZrWVhCMFpYSWdabkp2YlNBbkxpNHZhVzVqTDJKcGJtUXRZV1JoY0hSbGNpYzdYRzVwYlhCdmNuUWdZMjlzYjNKVWVYQmxJR1p5YjIwZ0p5NHVMM1poYkhWbExYUjVjR1Z6TDJOdmJHOXlKenRjYm1sdGNHOXlkQ0JqYjIxd2JHVjRWSGx3WlNCbWNtOXRJQ2N1TGk5MllXeDFaUzEwZVhCbGN5OWpiMjF3YkdWNEp6dGNibWx0Y0c5eWRDQjFibWwwVkhsd1pTQm1jbTl0SUNjdUxpOTJZV3gxWlMxMGVYQmxjeTkxYm1sMEp6dGNibHh1WTI5dWMzUWdSRVZHUVZWTVZGOVFVazlRSUQwZ0oyTjFjbkpsYm5Rbk8xeHVZMjl1YzNRZ1RsVk5SVkpKUTBGTVgxWkJURlZGVXlBOUlGdEVSVVpCVlV4VVgxQlNUMUFzSUNkbWNtOXRKeXdnSjNSdkp5d2dKM0J5WlhZbkxDQW5kbVZzYjJOcGRIa25YVHRjYm1OdmJuTjBJRTVWVFY5T1ZVMUZVa2xEUVV4ZlZrRk1WVVZUSUQwZ1RsVk5SVkpKUTBGTVgxWkJURlZGVXk1c1pXNW5kR2c3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdOc1lYTnpJRUZqZEdsdmJpQmxlSFJsYm1SeklGQnliMk5sYzNNZ2UxeHVJQ0FnSUdOdmJuTjBjblZqZEc5eUtIQnliM0J6S1NCN1hHNGdJQ0FnSUNBZ0lIQnliM0J6TG5OMFlYUmxJRDBnZTMwN1hHNGdJQ0FnSUNBZ0lIQnliM0J6TG5aaGJIVmxTMlY1Y3lBOUlGdGRPMXh1SUNBZ0lDQWdJQ0J3Y205d2N5NXdZWEpsYm5STFpYbHpJRDBnVzEwN1hHNGdJQ0FnSUNBZ0lITjFjR1Z5S0hCeWIzQnpLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQXZLbHh1SUNBZ0lDQWdJQ0FqSUZObGRDQkJZM1JwYjI0Z2NISnZjR1Z5ZEdsbGMxeHVJQ0FnSUNBZ0lDQWpJeUJUWlhRZ2RYTmxjaTFrWldacGJtVmtJRUZqZEdsdmJpQndjbTl3WlhKMGFXVnpYRzVjYmlBZ0lDQWdJQ0FnUUhCaGNtRnRJRnR2WW1wbFkzUmRYRzRnSUNBZ0lDQWdJRUJ5WlhSMWNtNGdXMEZqZEdsdmJsMWNiaUFnSUNBcUwxeHVJQ0FnSUhObGRDaHdjbTl3Y3lBOUlIdDlLU0I3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJSHNnZG1Gc2RXVnpMQ0J2Yml3Z0xpNHVjSEp2Y0hOVWIxTmxkQ0I5SUQwZ2NISnZjSE03WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJR04xY25KbGJuUldZV3gxWlhNZ1BTQjBhR2x6TG5aaGJIVmxjeUE5SUhSb2FYTXVkbUZzZFdWeklIeDhJSHQ5TzF4dUlDQWdJQ0FnSUNCamIyNXpkQ0JrWldaaGRXeDBWbUZzZFdVZ1BTQjBhR2x6TG1kbGRFUmxabUYxYkhSV1lXeDFaU2dwTzF4dUlDQWdJQ0FnSUNCamIyNXpkQ0JwYm1obGNtbDBZV0pzWlNBOUlIdDlPMXh1WEc0Z0lDQWdJQ0FnSUM4dklERXBJRk5sZENCdWIyNHRZMjl1YzNWdFpXUWdjSEp2Y0dWeWRHbGxjMXh1SUNBZ0lDQWdJQ0J6ZFhCbGNpNXpaWFFvY0hKdmNITlViMU5sZENrN1hHNWNiaUFnSUNBZ0lDQWdMeThnTWlrZ1FtbHVaQ0JnYjI1Z0lIUnZJR0Z1SUdGa1lYQjBaWElzSUdsbUlHNXZkQ0JoYkhKbFlXUjVYRzRnSUNBZ0lDQWdJR2xtSUNodmJpa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdSSFZqYTNSNWNHbHphQ0JqYUdWamF5Qm1iM0lnUVdSaGNIUmxjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV2YmlBOUlDZ2hiMjR1YzJWMGRHVnlLU0EvSUdKcGJtUkJaR0Z3ZEdWeUtHOXVLU0E2SUc5dU8xeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnTHk4Z015a2dVSEpwYldVZ1lXNGdiMkpxWldOMElIUnZJR2x1YUdWeWFYUWdabkp2YlN3Z2QybDBhQ0J2Ym14NUlHQjJZV3gxWldBZ2NISnZjR1Z5ZEdsbGMxeHVJQ0FnSUNBZ0lDQm1iM0lnS0d4bGRDQnJaWGtnYVc0Z1pHVm1ZWFZzZEZaaGJIVmxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvWkdWbVlYVnNkRlpoYkhWbExtaGhjMDkzYmxCeWIzQmxjblI1S0d0bGVTa2dKaVlnY0hKdmNITlViMU5sZEM1b1lYTlBkMjVRY205d1pYSjBlU2hyWlhrcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhVzVvWlhKcGRHRmliR1ZiYTJWNVhTQTlJSEJ5YjNCelZHOVRaWFJiYTJWNVhUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQzh2SURRcElGVndaR0YwWlNCbGVHbHpkR2x1WnlCMllXeDFaWE1nZDJsMGFDQnBibWhsY21sMFlXSnNaU0J3Y205d1pYSjBhV1Z6WEc0Z0lDQWdJQ0FnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUJqZFhKeVpXNTBWbUZzZFdWektTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QkZlR05zZFdSbElIWmhjbWxoWW14bGN5QjBieUJpWlNCelpYUXNJR0Z6SUhkbEoyeHNJR1JsWVd3Z2QybDBhQ0IwYUc5elpTQnpaWEJsY21GMFpXeDVYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9ZM1Z5Y21WdWRGWmhiSFZsY3k1b1lYTlBkMjVRY205d1pYSjBlU2hyWlhrcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZM1Z5Y21WdWRGWmhiSFZsYzF0clpYbGRJRDBnZXlBdUxpNWpkWEp5Wlc1MFZtRnNkV1Z6VzJ0bGVWMHNJQzR1TG1sdWFHVnlhWFJoWW14bElIMDdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0F2THlBMUtTQlZjR1JoZEdWY2JpQWdJQ0FnSUNBZ2FXWWdLSFpoYkhWbGN5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV6WlhSV1lXeDFaWE1vZG1Gc2RXVnpMQ0JwYm1obGNtbDBZV0pzWlNrN0lDQWdYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnSUNCOVhHNWNiaUFnSUNCblpYUW9hMlY1S1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpMbk4wWVhSbFcydGxlVjA3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjMlYwVm1Gc2RXVnpLSFpoYkhWbGN5d2dhVzVvWlhKcGRFWnliMjBwSUh0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnWTNWeWNtVnVkRlpoYkhWbGN5QTlJSFJvYVhNdWRtRnNkV1Z6TzF4dUlDQWdJQ0FnSUNCamIyNXpkQ0JrWldaaGRXeDBWbUZzZFdVZ1BTQjBhR2x6TG1kbGRFUmxabUYxYkhSV1lXeDFaU2dwTzF4dUlDQWdJQ0FnSUNCamIyNXpkQ0JrWldaaGRXeDBWbUZzZFdWUWNtOXdJRDBnZEdocGN5NW5aWFJFWldaaGRXeDBWbUZzZFdWUWNtOXdLQ2s3WEc1Y2JpQWdJQ0FnSUNBZ0x5OGdNaWtnVEc5dmNDQnZkbVZ5SUdWMlpYSjVJR2x1WTI5dGFXNW5JR0IyWVd4MVpXQWdZVzVrSUhObGRGeHVJQ0FnSUNBZ0lDQm1iM0lnS0d4bGRDQnJaWGtnYVc0Z2RtRnNkV1Z6S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RtRnNkV1Z6TG1oaGMwOTNibEJ5YjNCbGNuUjVLR3RsZVNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnNaWFFnZG1Gc2RXVWdQU0I3ZlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCc1pYUWdZMmhwYkdSeVpXNGdQU0I3ZlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCc1pYUWdhR0Z6UTJocGJHUnlaVzRnUFNCbVlXeHpaVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JzWlhRZ1ltRnpaU0E5SUdOMWNuSmxiblJXWVd4MVpYTmJhMlY1WFNBL0lHTjFjbkpsYm5SV1lXeDFaWE5iYTJWNVhTQTZJR1JsWm1GMWJIUldZV3gxWlR0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDOHZJRWxtSUhaaGJIVmxjeUJ2Y3lCaGJpQnZZbXBsWTNRc0lIVnpaU0JwZENCa2FYSmxZM1JzZVZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDaHBjMDlpYWloMllXeDFaWE5iYTJWNVhTa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnNkV1VnUFNCMllXeDFaWE5iYTJWNVhUdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzh2SUU5U0lITmxkQ0IwYnlCaElIUm9aU0JrWldaaGRXeDBJSFpoYkhWbElIQnliM0JsY25SNUlHOW1JR0VnWW14aGJtc2diMkpxWldOMFhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZzZFdWYlpHVm1ZWFZzZEZaaGJIVmxVSEp2Y0YwZ1BTQjJZV3gxWlhOYmEyVjVYVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCc1pYUWdibVYzVm1Gc2RXVWdQU0I3SUM0dUxtSmhjMlVzSUM0dUxtbHVhR1Z5YVhSR2NtOXRMQ0F1TGk1MllXeDFaU0I5TzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0x5OGdSMlYwSUdOMWNuSmxiblFnZG1Gc2RXVWdhV1lnYm05dVpTQnBjeUJrWldacGJtVmtYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0c1bGQxWmhiSFZsTG1OMWNuSmxiblFnUFQwOUlIVnVaR1ZtYVc1bFpDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdkx5QkpaaUIzWlNCb1lYWmxJR0VnWUdaeWIyMWdJSFpoYkhWbElITmxkQ3dnZEdGclpTQjBhR0YwWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2h1WlhkV1lXeDFaUzVtY205dElDRTlQU0IxYm1SbFptbHVaV1FwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUc1bGQxWmhiSFZsTG1OMWNuSmxiblFnUFNCdVpYZFdZV3gxWlM1bWNtOXRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdMeThnVDNJZ2FXWWdkMlVnYUdGMlpTQmhiaUJCWkdGd2RHVnlMQ0JuWlhRZ2FYUWdabkp2YlNCMGFHRjBYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0JwWmlBb2RHaHBjeTV2YmlBbUppQjBhR2x6TG05dUxtZGxkQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYm1WM1ZtRnNkV1V1WTNWeWNtVnVkQ0E5SUhSb2FYTXViMjR1WjJWMEtHdGxlU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdkx5QkpaaUJwZENkeklITjBhV3hzSUhWdVpHVm1hVzVsWkNCdFlXdGxJR2wwSUdWeGRXRnNJREEvUDF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvYm1WM1ZtRnNkV1V1WTNWeWNtVnVkQ0E5UFQwZ2RXNWtaV1pwYm1Wa0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnVaWGRXWVd4MVpTNWpkWEp5Wlc1MElEMGdNRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNodVpYZFdZV3gxWlM1bWNtOXRJRDA5UFNCMWJtUmxabWx1WldRcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYm1WM1ZtRnNkV1V1Wm5KdmJTQTlJRzVsZDFaaGJIVmxMbU4xY25KbGJuUTdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1NXWWdiM1Z5SUVGa1lYQjBaWElnYUdGeklHRWdZR2RsZEZaaGJIVmxWSGx3WldBZ1puVnVZM1JwYjI0c0lIUnllU0IwYnlCblpYUWdZU0JnZEhsd1pXQWdkMmwwYUNCMGFHVWdkbUZzZFdVZ2EyVjVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0NGdVpYZFdZV3gxWlM1MGVYQmxJQ1ltSUhSb2FYTXViMjRnSmlZZ2RHaHBjeTV2Ymk1blpYUldZV3gxWlZSNWNHVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JtVjNWbUZzZFdVdWRIbHdaU0E5SUhSb2FYTXViMjR1WjJWMFZtRnNkV1ZVZVhCbEtHdGxlU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0x5OGdZeWtnVEc5dmNDQjBhSEp2ZFdkb0lHRnNiQ0J1ZFcxbGNtbGpZV3dnY0hKdmNHVnlkSGtnZEhsd1pYTmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQm1iM0lnS0d4bGRDQnBJRDBnTURzZ2FTQThJRTVWVFY5T1ZVMUZVa2xEUVV4ZlZrRk1WVVZUT3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnY0hKdmNFNWhiV1VnUFNCT1ZVMUZVa2xEUVV4ZlZrRk1WVVZUVzJsZE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQjJZV3gxWlZCeWIzQWdQU0J1WlhkV1lXeDFaVnR3Y205d1RtRnRaVjA3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdMeThnU1dZZ2QyVWdhR0YyWlNCMGFHbHpJR3RwYm1RZ2IyWWdjSEp2Y0dWeWRIa3NJSEJ5YjJObGMzTmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIWmhiSFZsVUhKdmNDQWhQVDBnZFc1a1pXWnBibVZrS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdkx5QkpaaUIzWlNCa2IyNG5kQ0JvWVhabElHRWdkSGx3WlNCelpYUWdkRzhnZEdocGN5QjJZV3gxWlN3Z1ptbHVaQ0J2Ym1VZ0tIVnViR1Z6Y3lCcGRDZHpJR0VnY21GM0lHNTFiV0psY2lsY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDZ2hibVYzVm1Gc2RXVXVkSGx3WlNBbUppQnBjMU4wY21sdVp5aDJZV3gxWlZCeWIzQXBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFZ1YVhSVWVYQmxMblJsYzNRb2RtRnNkV1ZRY205d0tTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnVaWGRXWVd4MVpTNTBlWEJsSUQwZ2RXNXBkRlI1Y0dVN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5SUdWc2MyVWdhV1lnS0dOdmJHOXlWSGx3WlM1MFpYTjBLSFpoYkhWbFVISnZjQ2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYm1WM1ZtRnNkV1V1ZEhsd1pTQTlJR052Ykc5eVZIbHdaVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMGdaV3h6WlNCcFppQW9ZMjl0Y0d4bGVGUjVjR1V1ZEdWemRDaDJZV3gxWlZCeWIzQXBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRzVsZDFaaGJIVmxMblI1Y0dVZ1BTQmpiMjF3YkdWNFZIbHdaVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2h1WlhkV1lXeDFaUzUwZVhCbEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1NXWWdkMlVuY21VZ1oyOXBibWNnZEc4Z2MzQnNhWFFnZEdocGN5QjJZV3gxWlNCcGJuUnZJR05vYVd4a0lIWmhiSFZsYzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2h1WlhkV1lXeDFaUzUwZVhCbExtaGhjMDkzYmxCeWIzQmxjblI1S0NkemNHeHBkQ2NwSUNZbUlHbHpVM1J5YVc1bktIWmhiSFZsVUhKdmNDa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2MzQnNhWFJRY205d0lEMGdibVYzVm1Gc2RXVXVkSGx3WlM1emNHeHBkQ2gyWVd4MVpWQnliM0FwTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdadmNpQW9iR1YwSUhOd2JHbDBTMlY1SUdsdUlITndiR2wwVUhKdmNDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tITndiR2wwVUhKdmNDNW9ZWE5QZDI1UWNtOXdaWEowZVNoemNHeHBkRXRsZVNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0JqYjIxaWFXNWxaRXRsZVNBOUlHdGxlU0FySUhOd2JHbDBTMlY1TzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tDRmphR2xzWkhKbGJsdGpiMjFpYVc1bFpFdGxlVjBwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnWkdWbVlYVnNkRlpoYkhWbElEMGdLRzVsZDFaaGJIVmxMblI1Y0dVdVpHVm1ZWFZzZEZCeWIzQnpJQ1ltSUc1bGQxWmhiSFZsTG5SNWNHVXVaR1ZtWVhWc2RGQnliM0J6VzNOd2JHbDBTMlY1WFNrZ1B5QnVaWGRXWVd4MVpTNTBlWEJsTG1SbFptRjFiSFJRY205d2MxdHpjR3hwZEV0bGVWMGdPaUI3ZlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyaHBiR1J5Wlc1YlkyOXRZbWx1WldSTFpYbGRJRDBnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdMaTR1Ym1WM1ZtRnNkV1VzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXVMaTVrWldaaGRXeDBWbUZzZFdVc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J3WVhKbGJuUTZJR3RsZVN4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR05vYVd4a1MyVjVPaUJ6Y0d4cGRFdGxlU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUjVjR1U2SUhWdVpHVm1hVzVsWkZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOU8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOb2FXeGtjbVZ1VzJOdmJXSnBibVZrUzJWNVhWdHdjbTl3VG1GdFpWMGdQU0J6Y0d4cGRGQnliM0JiYzNCc2FYUkxaWGxkTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0x5OGdTV1lnZEdocGN5Qm9ZWE1nWVNCZ2RHVnRjR3hoZEdWZ0lHWjFibU4wYVc5dUxDQm5aVzVsY21GMFpWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9JVzVsZDFaaGJIVmxMblJsYlhCc1lYUmxJQ1ltSUc1bGQxWmhiSFZsTG5SNWNHVXVkR1Z0Y0d4aGRHVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUc1bGQxWmhiSFZsTG5SbGJYQnNZWFJsSUQwZ2JtVjNWbUZzZFdVdWRIbHdaUzUwWlcxd2JHRjBaU2h1WlhkV1lXeDFaVnR3Y205d1RtRnRaVjBwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYUdGelEyaHBiR1J5Wlc0Z1BTQjBjblZsTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmU0JsYkhObElHbG1JQ2h1WlhkV1lXeDFaUzUwZVhCbExtUmxabUYxYkhSUWNtOXdjeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J1WlhkV1lXeDFaU0E5SUhzZ0xpNHVibVYzVm1Gc2RXVXNJQzR1TG01bGQxWmhiSFZsTG5SNWNHVXVaR1ZtWVhWc2RGQnliM0J6SUgwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLRzVsZDFaaGJIVmxMblI1Y0dVdWNHRnljMlVwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYm1WM1ZtRnNkV1ZiY0hKdmNFNWhiV1ZkSUQwZ2JtVjNWbUZzZFdVdWRIbHdaUzV3WVhKelpTaHVaWGRXWVd4MVpWdHdjbTl3VG1GdFpWMHNJRzVsZDFaaGJIVmxLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5SUM4dklFVnVaQ0J1ZFcxbGNtbGpZV3dnY0hKdmNHVnlkSGtnYVhSbGNtRjBhVzl1WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdkx5QlRaWFFnWUhCeVpYWmdJSFJ2SUdCamRYSnlaVzUwWUNCcFppQnBkQ0JwYzI0bmRDQmhiSEpsWVdSNUlHUmxabWx1WldSY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9ibVYzVm1Gc2RXVXVjSEpsZGlBOVBUMGdkVzVrWldacGJtVmtLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHNWxkMVpoYkhWbExuQnlaWFlnUFNCdVpYZFdZV3gxWlM1amRYSnlaVzUwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTjFjbkpsYm5SV1lXeDFaWE5iYTJWNVhTQTlJRzVsZDFaaGJIVmxPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1NXWWdkR2hwY3lCMllXeDFaU0JrYjJWemJpZDBJR2hoZG1VZ1kyaHBiR1J5Wlc0c0lHRmtaQ0IwYnlCMllXeDFaVXRsZVhOY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9JV2hoYzBOb2FXeGtjbVZ1S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMblpoYkhWbFMyVjVjeTVwYm1SbGVFOW1LR3RsZVNrZ1BUMDlJQzB4S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMblpoYkhWbFMyVjVjeTV3ZFhOb0tHdGxlU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzh2SUU5eUlHRmtaQ0IwYnlCd1lYSmxiblJMWlhselhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdibVYzVm1Gc2RXVXVZMmhwYkdSeVpXNGdQU0J1WlhkV1lXeDFaUzVqYUdsc1pISmxiaUI4ZkNCN2ZUdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9kR2hwY3k1d1lYSmxiblJMWlhsekxtbHVaR1Y0VDJZb2EyVjVLU0E5UFQwZ0xURXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWNHRnlaVzUwUzJWNWN5NXdkWE5vS0d0bGVTazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxuTmxkRlpoYkhWbGN5aGphR2xzWkhKbGJpazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlJQzh2SUVWdVpDQjJZV3gxWlNCcGRHVnlZWFJwYjI1Y2JseHVJQ0FnSUNBZ0lDQXZMeUF6S1NCUWNtVmpiMjF3ZFhSbElIWmhiSFZsSUd0bGVTQmhibVFnY0dGeVpXNTBJR3RsZVNCc1pXNW5kR2dnZEc4Z2NISmxkbVZ1ZENCd1pYSXRabkpoYldVZ2JXVmhjM1Z5WlcxbGJuUmNiaUFnSUNBZ0lDQWdkR2hwY3k1dWRXMVdZV3gxWlV0bGVYTWdQU0IwYUdsekxuWmhiSFZsUzJWNWN5NXNaVzVuZEdnN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Ym5WdFVHRnlaVzUwUzJWNWN5QTlJSFJvYVhNdWNHRnlaVzUwUzJWNWN5NXNaVzVuZEdnN1hHNWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE03WEc1Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0F2S2x4dUlDQWdJQ0FnSUNCRVpXTnBaR1VnZDJobGRHaGxjaUIwYUdseklFRmpkR2x2YmlCM2FXeHNJSEpsYm1SbGNpQnZiaUJ1WlhoMElHWnlZVzFsWEc1Y2JpQWdJQ0FnSUNBZ1FIQmhjbUZ0SUZ0QlkzUnBiMjVkWEc0Z0lDQWdJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVnh1SUNBZ0lDQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMWNiaUFnSUNBZ0lDQWdRSEpsZEhWeWJpQmJZbTl2YkdWaGJsMDZJRkpsZEhWeWJpQjBjblZsSUhSdklISmxibVJsY2x4dUlDQWdJQ292WEc0Z0lDQWdkMmxzYkZKbGJtUmxjaWhoWTNScGIyNHNJR1p5WVcxbFUzUmhiWEFzSUdWc1lYQnpaV1FwSUh0Y2JpQWdJQ0FnSUNBZ2JHVjBJR2hoYzBOb1lXNW5aV1FnUFNCbVlXeHpaVHRjYmx4dUlDQWdJQ0FnSUNBdkx5QkRhR1ZqYXlCcFppQmlZWE5sSUhaaGJIVmxjeUJvWVhabElIVndaR0YwWldRZ1hHNGdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2dkR2hwY3k1dWRXMVdZV3gxWlV0bGVYTTdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdhMlY1SUQwZ2RHaHBjeTUyWVd4MVpVdGxlWE5iYVYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQjJZV3gxWlNBOUlIUm9hWE11ZG1Gc2RXVnpXMnRsZVYwN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUM4dklGSjFiaUIwY21GdWMyWnZjbTBnWm5WdVkzUnBiMjRnS0dsbUlIQnlaWE5sYm5RcFhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RtRnNkV1V1ZEhKaGJuTm1iM0p0S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnNkV1V1WTNWeWNtVnVkQ0E5SUhaaGJIVmxMblJ5WVc1elptOXliU2gyWVd4MVpTNWpkWEp5Wlc1MExDQnJaWGtzSUhSb2FYTXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QkRZWEFnYldsdWFXMTFiVnh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLR2x6VG5WdEtIWmhiSFZsTG0xcGJpa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IyWVd4MVpTNWpkWEp5Wlc1MElEMGdUV0YwYUM1dFlYZ29kbUZzZFdVdVkzVnljbVZ1ZEN3Z2RtRnNkV1V1YldsdUtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1EyRndJRzFoZUdsdGRXMWNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaHBjMDUxYlNoMllXeDFaUzV0WVhncEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZzZFdVdVkzVnljbVZ1ZENBOUlFMWhkR2d1YldsdUtIWmhiSFZsTG1OMWNuSmxiblFzSUhaaGJIVmxMbTFoZUNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUZKdmRXNWtJRzUxYldKbGNseHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIWmhiSFZsTG5KdmRXNWtLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVXVZM1Z5Y21WdWRDQTlJRTFoZEdndWNtOTFibVFvZG1Gc2RXVXVZM1Z5Y21WdWRDazdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUhaaGJIVmxMbVp5WVcxbFEyaGhibWRsSUQwZ2RtRnNkV1V1WTNWeWNtVnVkQ0F0SUhaaGJIVmxMbkJ5WlhZN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUM4dklGVndaR0YwWlNCMlpXeHZZMmwwZVZ4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0NGMGFHbHpMbU5oYkdOMWJHRjBaWE5XWld4dlkybDBlU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhaaGJIVmxMblpsYkc5amFYUjVJRDBnYzNCbFpXUlFaWEpUWldOdmJtUW9kbUZzZFdVdVpuSmhiV1ZEYUdGdVoyVXNJR1ZzWVhCelpXUXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QkpaaUIwYUdseklIWmhiSFZsSUdoaGN5QmphR0Z1WjJWa1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RtRnNkV1V1Y0hKbGRpQWhQVDBnZG1Gc2RXVXVZM1Z5Y21WdWRDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2hoYzBOb1lXNW5aV1FnUFNCMGNuVmxPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFpoYkhWbExuQnlaWFlnUFNCMllXeDFaUzVqZFhKeVpXNTBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QkJjSEJsYm1RZ2RXNXBkRnh1SUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnZG1Gc2RXVkdiM0pUZEdGMFpTQTlJQ2gyWVd4MVpTNTBlWEJsSUNZbUlIWmhiSFZsTG5SNWNHVXVjMlZ5YVdGc2FYcGxLU0EvSUhaaGJIVmxMblI1Y0dVdWMyVnlhV0ZzYVhwbEtIWmhiSFZsTG1OMWNuSmxiblFzSUhaaGJIVmxLU0E2SUhaaGJIVmxMbU4xY25KbGJuUTdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJRUZrWkNCMGJ5QnpkR0YwWlNCcFppQjBhR2x6SUdseklHNXZkQ0JoSUdOb2FXeGtJSFpoZFdWY2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNnaGRtRnNkV1V1Y0dGeVpXNTBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXpkR0YwWlZ0clpYbGRJRDBnZG1Gc2RXVkdiM0pUZEdGMFpUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NTJZV3gxWlhOYmRtRnNkV1V1Y0dGeVpXNTBYUzVqYUdsc1pISmxibHQyWVd4MVpTNWphR2xzWkV0bGVWMGdQU0IyWVd4MVpVWnZjbE4wWVhSbE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdhV1lnS0hSb2FYTXViMjVHY21GdFpTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV2YmtaeVlXMWxLSFJvYVhNdWMzUmhkR1VzSUhSb2FYTXBPMXh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUNoMGFHbHpMbTl1UTJ4bFlXNTFjQ2tnUHlCMGNuVmxJRG9nYUdGelEyaGhibWRsWkR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0F2S2x4dUlDQWdJQ0FnSUNCSlppQjNaU0JoY21VZ2NtVnVaR1Z5YVc1bkxDQnlaV052YldKcGJtVWdjR0Z5Wlc1MElIWmhiSFZsY3lCbWFYSnpkRnh1SUNBZ0lDb3ZYRzRnSUNBZ2IyNVFjbVZTWlc1a1pYSW9LU0I3WEc0Z0lDQWdJQ0FnSUM4dklGVndaR0YwWlNCd1lYSmxiblFnZG1Gc2RXVnpYRzRnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnZEdocGN5NXVkVzFRWVhKbGJuUkxaWGx6T3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUd0bGVTQTlJSFJvYVhNdWNHRnlaVzUwUzJWNWMxdHBYVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUhaaGJIVmxJRDBnZEdocGN5NTJZV3gxWlhOYmEyVjVYVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdkbUZzZFdVdVkzVnljbVZ1ZENBOUlIWmhiSFZsTG5SNWNHVXVZMjl0WW1sdVpTaDJZV3gxWlM1amFHbHNaSEpsYml3Z2RtRnNkV1V1ZEdWdGNHeGhkR1VwTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RHaHBjeTV6ZEdGMFpWdHJaWGxkSUNFOVBTQjJZV3gxWlM1amRYSnlaVzUwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV6ZEdGMFpWdHJaWGxkSUQwZ2RtRnNkV1V1WTNWeWNtVnVkRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lHOXVVbVZ1WkdWeUtIc2djM1JoZEdVc0lHOXVJSDBwSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLRzl1SUNZbUlHOXVMbk5sZENrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYjI0dWMyVjBLSE4wWVhSbEtUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lIQmhkWE5sS0NrZ2UxeHVJQ0FnSUNBZ0lDQnpkWEJsY2k1emRHOXdLQ2s3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhKbGMzVnRaU2dwSUh0Y2JpQWdJQ0FnSUNBZ2MzVndaWEl1YzNSaGNuUW9LVHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYzNSaGNuUW9LU0I3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJSFpoYkhWbGN5QTlJSFJvYVhNdWRtRnNkV1Z6TzF4dUlDQWdJQ0FnSUNCemRYQmxjaTV6ZEdGeWRDZ3BPMXh1WEc0Z0lDQWdJQ0FnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUIyWVd4MVpYTXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2gyWVd4MVpYTXVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2EyVjVLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhaaGJIVmxjMXRyWlhsZExuQnlaWFlnUFNCMllXeDFaWE5iYTJWNVhTNXZjbWxuYVc0Z1BTQjJZV3gxWlhOYmEyVjVYUzVqZFhKeVpXNTBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5cGNiaUFnSUNBZ0lDQWdJeUJIWlhRZ1pHVm1ZWFZzZENCQlkzUnBiMjRnZG1Gc2RXVWdjSEp2Y0dWeWRHbGxjMXh1WEc0Z0lDQWdJQ0FnSUVCeVpYUjFjbTRnVzI5aWFtVmpkRjFjYmlBZ0lDQXFMMXh1SUNBZ0lHZGxkRVJsWm1GMWJIUldZV3gxWlNncElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhabGJHOWphWFI1T2lBd0xGeHVJQ0FnSUNBZ0lDQWdJQ0FnY205MWJtUTZJR1poYkhObFhHNGdJQ0FnSUNBZ0lIMDdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5cGNiaUFnSUNBZ0lDQWdJeUJIWlhRZ1pHVm1ZWFZzZENCQlkzUnBiMjRnZG1Gc2RXVWdjSEp2Y0dWeWRIa2dibUZ0WlZ4dUlDQWdJQ0FnSUNBakl5QlRaWFFnZEdocGN5QmdkbUZzZFdWZ0lIQnliM0JsY25SNUlIZG9aVzRnYzJWMElHRnpJSFpoYkhWbElHbHVjM1JsWVdRZ2IyWWdiMkpxWldOMFhHNWNiaUFnSUNBZ0lDQWdRSEpsZEhWeWJpQmJjM1J5YVc1blhWeHVJQ0FnSUNvdlhHNGdJQ0FnWjJWMFJHVm1ZWFZzZEZaaGJIVmxVSEp2Y0NncElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlFUkZSa0ZWVEZSZlVGSlBVRHRjYmlBZ0lDQjlYRzU5WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvQWN0aW9uLmpzXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX0FjdGlvbjIgPSByZXF1aXJlKCcuLi9hY3Rpb25zL0FjdGlvbicpO1xuXG52YXIgX0FjdGlvbjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BY3Rpb24yKTtcblxudmFyIF9nZW5lcmF0ZUJsZW5kQ3VydmUgPSByZXF1aXJlKCcuL2luYy9nZW5lcmF0ZS1ibGVuZC1jdXJ2ZScpO1xuXG52YXIgX2dlbmVyYXRlQmxlbmRDdXJ2ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZW5lcmF0ZUJsZW5kQ3VydmUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8qXG4gICAgTWV0aG9kcyBhbmQgcHJvcGVydGllcyB0byBhZGQgdG8gYm91bmQgQWN0aW9uc1xuKi9cbnZhciBib3VuZE9uU3RhcnQgPSBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgcmV0dXJuIGFjdGlvbi5hY3Rvci5hY3RpdmF0ZUFjdGlvbihhY3Rpb24uaWQsIGFjdGlvbik7XG59O1xudmFyIGJvdW5kT25TdG9wID0gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgIHJldHVybiBhY3Rpb24uYWN0b3IuZGVhY3RpdmF0ZUFjdGlvbihhY3Rpb24uaWQpO1xufTtcbnZhciBib3VuZFByb3BzID0gZnVuY3Rpb24gKGFjdG9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWN0b3I6IGFjdG9yLFxuICAgICAgICBpc1ByaW9yaXR5OiB0cnVlLFxuICAgICAgICBvbjogYWN0b3Iub24sXG4gICAgICAgIF9vblN0YXJ0OiBib3VuZE9uU3RhcnQsXG4gICAgICAgIF9vblN0b3A6IGJvdW5kT25TdG9wLFxuICAgICAgICBvblJlbmRlcjogdW5kZWZpbmVkXG4gICAgfTtcbn07XG5cbnZhciBBY3RvciA9IChmdW5jdGlvbiAoX0FjdGlvbikge1xuICAgIF9pbmhlcml0cyhBY3RvciwgX0FjdGlvbik7XG5cbiAgICBmdW5jdGlvbiBBY3Rvcihwcm9wcykge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQWN0b3IpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgICAgIF90aGlzLmFjdGl2ZUFjdGlvbnMgPSB7fTtcbiAgICAgICAgX3RoaXMubnVtQWN0aXZlQWN0aW9ucyA9IDA7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBBY3Rvci5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gc2V0KHByb3BzLCBpbnN0YW50KSB7XG4gICAgICAgIGlmIChpbnN0YW50IHx8ICF0aGlzLmJlaGF2aW91cikge1xuICAgICAgICAgICAgX0FjdGlvbi5wcm90b3R5cGUuc2V0LmNhbGwodGhpcywgcHJvcHMpO1xuICAgICAgICAgICAgdGhpcy5vbmNlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgYWN0aW9uID0gdGhpcy5yZWR1Y2VyKHByb3BzKTtcbiAgICAgICAgICAgIGlmIChhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0KGFjdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgQmluZCBBY3Rpb24gdG8gQWN0b3JcbiAgICAqL1xuXG4gICAgQWN0b3IucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiBiaW5kKGFjdGlvbikge1xuICAgICAgICB2YXIgaW5oZXJpdGVkQWN0aW9uID0gYWN0aW9uLmluaGVyaXQoKTtcbiAgICAgICAgdmFyIG5ld1ZhbHVlcyA9IHt9O1xuICAgICAgICB2YXIgaGFzTmV3VmFsdWVzID0gZmFsc2U7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHZhbHVlcyBvbiBhY3RvciB0aGF0IGRvbid0IGV4aXN0XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBpbmhlcml0ZWRBY3Rpb24udmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAoaW5oZXJpdGVkQWN0aW9uLnZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmICF0aGlzLnZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgbmV3VmFsdWVzW2tleV0gPSBpbmhlcml0ZWRBY3Rpb24udmFsdWVzW2tleV07XG4gICAgICAgICAgICAgICAgaGFzTmV3VmFsdWVzID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoYXNOZXdWYWx1ZXMpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KHsgdmFsdWVzOiBuZXdWYWx1ZXMgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5oZXJpdGVkQWN0aW9uLnNldChib3VuZFByb3BzKHRoaXMsIGluaGVyaXRlZEFjdGlvbikpO1xuICAgIH07XG5cbiAgICAvKlxuICAgICAgICBTdGFydCBBY3RvclxuICAgICAgICAgSWYgQWN0aW9uIGlzIHByb3ZpZGVkLCBiaW5kIGl0IHRvIHRoaXMgQWN0b3IgYW5kIHN0YXJ0XG4gICAgICAgICBAcGFyYW0gKG9wdGlvbmFsKSBbQWN0aW9uXVxuICAgICovXG5cbiAgICBBY3Rvci5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiBzdGFydChhY3Rpb24pIHtcbiAgICAgICAgX0FjdGlvbi5wcm90b3R5cGUuc3RhcnQuY2FsbCh0aGlzKTtcblxuICAgICAgICBpZiAoYWN0aW9uKSB7XG4gICAgICAgICAgICB2YXIgYm91bmRBY3Rpb24gPSB0aGlzLmJpbmQoYWN0aW9uKTtcbiAgICAgICAgICAgIGJvdW5kQWN0aW9uLnN0YXJ0KCk7XG5cbiAgICAgICAgICAgIHJldHVybiBib3VuZEFjdGlvbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLmFjdGl2ZUFjdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVBY3Rpb25zLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9hY3Rpb24gPSB0aGlzLmFjdGl2ZUFjdGlvbnNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFfYWN0aW9uLmlzQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYWN0aW9uLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgQWN0b3IucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICBfQWN0aW9uLnByb3RvdHlwZS5zdG9wLmNhbGwodGhpcyk7XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMuYWN0aXZlQWN0aW9ucykge1xuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlQWN0aW9ucy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVBY3Rpb25zW2tleV0uc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIEFjdG9yLnByb3RvdHlwZS53aWxsUmVuZGVyID0gZnVuY3Rpb24gd2lsbFJlbmRlcihhY3RvciwgZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSB0aGlzLnZhbHVlS2V5c1tpXTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG4gICAgICAgICAgICB2YXIgZHJpdmVyID0gdmFsdWUubnVtRHJpdmVycyA/IHRoaXMuYWN0aXZlQWN0aW9uc1t2YWx1ZS5kcml2ZXJzWzBdXSA6IGZhbHNlO1xuICAgICAgICAgICAgdmFyIG5ld0N1cnJlbnQgPSB2YWx1ZS5udW1Ecml2ZXJzID8gZHJpdmVyLnZhbHVlc1trZXldLmN1cnJlbnQgOiB2YWx1ZS5jdXJyZW50O1xuXG4gICAgICAgICAgICBpZiAoZHJpdmVyLmJsZW5kQ3VydmUpIHtcbiAgICAgICAgICAgICAgICBuZXdDdXJyZW50ID0gZHJpdmVyLmJsZW5kQ3VydmUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IG5ld0N1cnJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gX0FjdGlvbi5wcm90b3R5cGUud2lsbFJlbmRlci5jYWxsKHRoaXMsIGFjdG9yLCBmcmFtZVN0YW1wLCBlbGFwc2VkKTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgQWRkIGFjdGl2ZSBhY3Rpb25zXG4gICAgICAgICBAcGFyYW0gW251bWJlcl1cbiAgICAgICAgQHBhcmFtIFtBY3Rpb25dXG4gICAgKi9cblxuICAgIEFjdG9yLnByb3RvdHlwZS5hY3RpdmF0ZUFjdGlvbiA9IGZ1bmN0aW9uIGFjdGl2YXRlQWN0aW9uKGlkLCBhY3Rpb24pIHtcbiAgICAgICAgdGhpcy5hY3RpdmVBY3Rpb25zW2lkXSA9IGFjdGlvbjtcbiAgICAgICAgdGhpcy5udW1BY3RpdmVBY3Rpb25zKys7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhY3Rpb24ubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBhY3Rpb24udmFsdWVLZXlzW2ldO1xuICAgICAgICAgICAgdmFyIGFjdGlvblZhbHVlID0gYWN0aW9uLnZhbHVlc1trZXldO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcblxuICAgICAgICAgICAgLy8gSWYgd2UncmUgYmxlbmRpbmcgdGhpcyBhY3Rpb24sIGFuZCB0aGVyZSdzIG9uIGFscmVhZHkgaW4gcHJvZ3Jlc3NcbiAgICAgICAgICAgIGlmIChhY3Rpb24uYmxlbmQgJiYgdmFsdWUubnVtRHJpdmVycykge1xuICAgICAgICAgICAgICAgIGFjdGlvbi5ibGVuZEN1cnZlID0gKDAsIF9nZW5lcmF0ZUJsZW5kQ3VydmUyLmRlZmF1bHQpKHRoaXMuYWN0aXZlQWN0aW9uc1t2YWx1ZS5kcml2ZXJzWzBdXSwgYWN0aW9uLCBrZXkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBQYXNzIEFjdG9yIHZhbHVlIHByb3BlcnRpZXMgdG8gQWN0aW9uXG4gICAgICAgICAgICAgICAgYWN0aW9uVmFsdWUudmVsb2NpdHkgKz0gdmFsdWUudmVsb2NpdHk7XG4gICAgICAgICAgICAgICAgYWN0aW9uVmFsdWUuZnJvbSA9IGFjdGlvblZhbHVlLmN1cnJlbnQgPSB2YWx1ZS5jdXJyZW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YWx1ZS5kcml2ZXJzID0gW2lkXTtcbiAgICAgICAgICAgIHZhbHVlLm51bURyaXZlcnMgPSB2YWx1ZS5kcml2ZXJzLmxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm51bUFjdGl2ZUFjdGlvbnMpIHtcbiAgICAgICAgICAgIF9BY3Rpb24ucHJvdG90eXBlLnN0YXJ0LmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgUmVtb3ZlIGFjdGl2ZSBhY3Rpb25zXG4gICAgICAgICBAcGFyYW0gW251bWJlcl1cbiAgICAqL1xuXG4gICAgQWN0b3IucHJvdG90eXBlLmRlYWN0aXZhdGVBY3Rpb24gPSBmdW5jdGlvbiBkZWFjdGl2YXRlQWN0aW9uKGlkKSB7XG4gICAgICAgIHZhciBhY3Rpb24gPSB0aGlzLmFjdGl2ZUFjdGlvbnNbaWRdO1xuXG4gICAgICAgIGlmIChhY3Rpb24pIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWN0aW9uLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGtleSA9IGFjdGlvbi52YWx1ZUtleXNbaV07XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcbiAgICAgICAgICAgICAgICB2YXIgZHJpdmVySW5kZXggPSB2YWx1ZS5kcml2ZXJzLmluZGV4T2YoaWQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGRyaXZlckluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5kcml2ZXJzLnNwbGljZShkcml2ZXJJbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLm51bURyaXZlcnMtLTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmFjdGl2ZUFjdGlvbnNbaWRdO1xuICAgICAgICAgICAgdGhpcy5udW1BY3RpdmVBY3Rpb25zLS07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMubnVtQWN0aXZlQWN0aW9ucyAmJiB0aGlzLmlzQWN0aXZlKSB7XG4gICAgICAgICAgICBfQWN0aW9uLnByb3RvdHlwZS5zdG9wLmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgQWN0b3IucHJvdG90eXBlLmdldERlZmF1bHRWYWx1ZSA9IGZ1bmN0aW9uIGdldERlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBfQWN0aW9uLnByb3RvdHlwZS5nZXREZWZhdWx0VmFsdWUuY2FsbCh0aGlzKSwge1xuICAgICAgICAgICAgZHJpdmVyczogW10sXG4gICAgICAgICAgICBudW1Ecml2ZXJzOiAwXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gQWN0b3I7XG59KShfQWN0aW9uMy5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQWN0b3I7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1J2Y2k5QlkzUnZjaTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPMEZCVFVFc1NVRkJUU3haUVVGWkxFZEJRVWNzVlVGQlF5eE5RVUZOTzFkQlFVc3NUVUZCVFN4RFFVRkRMRXRCUVVzc1EwRkJReXhqUVVGakxFTkJRVU1zVFVGQlRTeERRVUZETEVWQlFVVXNSVUZCUlN4TlFVRk5MRU5CUVVNN1EwRkJRU3hEUVVGRE8wRkJRMmhHTEVsQlFVMHNWMEZCVnl4SFFVRkhMRlZCUVVNc1RVRkJUVHRYUVVGTExFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zVFVGQlRTeERRVUZETEVWQlFVVXNRMEZCUXp0RFFVRkJMRU5CUVVNN1FVRkRla1VzU1VGQlRTeFZRVUZWTEVkQlFVY3NWVUZCUXl4TFFVRkxPMWRCUVUwN1FVRkRNMElzWVVGQlN5eEZRVUZGTEV0QlFVczdRVUZEV2l4clFrRkJWU3hGUVVGRkxFbEJRVWs3UVVGRGFFSXNWVUZCUlN4RlFVRkZMRXRCUVVzc1EwRkJReXhGUVVGRk8wRkJRMW9zWjBKQlFWRXNSVUZCUlN4WlFVRlpPMEZCUTNSQ0xHVkJRVThzUlVGQlJTeFhRVUZYTzBGQlEzQkNMR2RDUVVGUkxFVkJRVVVzVTBGQlV6dExRVU4wUWp0RFFVRkRMRU5CUVVNN08wbEJSV3RDTEV0QlFVczdZMEZCVEN4TFFVRkxPenRCUVVOMFFpeGhRVVJwUWl4TFFVRkxMRU5CUTFZc1MwRkJTeXhGUVVGRk96aENRVVJHTEV0QlFVczdPM0ZFUVVWc1FpeHRRa0ZCVFN4TFFVRkxMRU5CUVVNN08wRkJRMW9zWTBGQlN5eGhRVUZoTEVkQlFVY3NSVUZCUlN4RFFVRkRPMEZCUTNoQ0xHTkJRVXNzWjBKQlFXZENMRWRCUVVjc1EwRkJReXhEUVVGRE96dExRVU0zUWpzN1FVRk1aMElzVTBGQlN5eFhRVTkwUWl4SFFVRkhMR2RDUVVGRExFdEJRVXNzUlVGQlJTeFBRVUZQTEVWQlFVVTdRVUZEYUVJc1dVRkJTU3hQUVVGUExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZPMEZCUXpWQ0xEaENRVUZOTEVkQlFVY3NTMEZCUVN4UFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8wRkJRMnBDTEdkQ1FVRkpMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU03VTBGRFppeE5RVUZOTzBGQlEwZ3NaMEpCUVUwc1RVRkJUU3hIUVVGSExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1FVRkRia01zWjBKQlFVa3NUVUZCVFN4RlFVRkZPMEZCUTFJc2IwSkJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1lVRkRkRUk3VTBGRFNqdExRVU5LT3pzN096czdRVUZxUW1kQ0xGTkJRVXNzVjBGelFuUkNMRWxCUVVrc2FVSkJRVU1zVFVGQlRTeEZRVUZGTzBGQlExUXNXVUZCVFN4bFFVRmxMRWRCUVVjc1RVRkJUU3hEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETzBGQlEzcERMRmxCUVVrc1UwRkJVeXhIUVVGSExFVkJRVVVzUTBGQlF6dEJRVU51UWl4WlFVRkpMRmxCUVZrc1IwRkJSeXhMUVVGTE96czdRVUZCUXl4QlFVZDZRaXhoUVVGTExFbEJRVWtzUjBGQlJ5eEpRVUZKTEdWQlFXVXNRMEZCUXl4TlFVRk5MRVZCUVVVN1FVRkRjRU1zWjBKQlFVa3NaVUZCWlN4RFFVRkRMRTFCUVUwc1EwRkJReXhqUVVGakxFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExHTkJRV01zUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlR0QlFVTm9SaXg1UWtGQlV5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMR1ZCUVdVc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdRVUZETjBNc05FSkJRVmtzUjBGQlJ5eEpRVUZKTEVOQlFVTTdZVUZEZGtJN1UwRkRTanM3UVVGRlJDeFpRVUZKTEZsQlFWa3NSVUZCUlR0QlFVTmtMR2RDUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNUVUZCVFN4RlFVRkZMRk5CUVZNc1JVRkJSU3hEUVVGRExFTkJRVU03VTBGRGJrTTdPMEZCUlVRc1pVRkJUeXhsUVVGbExFTkJRVU1zUjBGQlJ5eERRVUZETEZWQlFWVXNRMEZCUXl4SlFVRkpMRVZCUVVVc1pVRkJaU3hEUVVGRExFTkJRVU1zUTBGQlF6dExRVU5xUlRzN096czdPenM3UVVGNFEyZENMRk5CUVVzc1YwRnBSSFJDTEV0QlFVc3NhMEpCUVVNc1RVRkJUU3hGUVVGRk8wRkJRMVlzTUVKQlFVMHNTMEZCU3l4TFFVRkJMRTFCUVVVc1EwRkJRenM3UVVGRlpDeFpRVUZKTEUxQlFVMHNSVUZCUlR0QlFVTlNMR2RDUVVGTkxGZEJRVmNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8wRkJRM1JETEhWQ1FVRlhMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU03TzBGQlJYQkNMRzFDUVVGUExGZEJRVmNzUTBGQlF6dFRRVU4wUWl4TlFVRk5PMEZCUTBnc2FVSkJRVXNzU1VGQlNTeEhRVUZITEVsQlFVa3NTVUZCU1N4RFFVRkRMR0ZCUVdFc1JVRkJSVHRCUVVOb1F5eHZRa0ZCU1N4SlFVRkpMRU5CUVVNc1lVRkJZU3hEUVVGRExHTkJRV01zUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlR0QlFVTjRReXgzUWtGQlRTeFBRVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRMR0ZCUVdFc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dEJRVU4yUXl4M1FrRkJTU3hEUVVGRExFOUJRVTBzUTBGQlF5eFJRVUZSTEVWQlFVVTdRVUZEYkVJc0swSkJRVTBzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXp0eFFrRkRiRUk3YVVKQlEwbzdZVUZEU2p0VFFVTktPenRCUVVWRUxHVkJRVThzU1VGQlNTeERRVUZETzB0QlEyWTdPMEZCY2tWblFpeFRRVUZMTEZkQmRVVjBRaXhKUVVGSkxHMUNRVUZITzBGQlEwZ3NNRUpCUVUwc1NVRkJTU3hMUVVGQkxFMUJRVVVzUTBGQlF6czdRVUZGWWl4aFFVRkxMRWxCUVVrc1IwRkJSeXhKUVVGSkxFbEJRVWtzUTBGQlF5eGhRVUZoTEVWQlFVVTdRVUZEYUVNc1owSkJRVWtzU1VGQlNTeERRVUZETEdGQlFXRXNRMEZCUXl4alFVRmpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVU3UVVGRGVFTXNiMEpCUVVrc1EwRkJReXhoUVVGaExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN1lVRkRiRU03VTBGRFNqczdRVUZGUkN4bFFVRlBMRWxCUVVrc1EwRkJRenRMUVVObU96dEJRV3BHWjBJc1UwRkJTeXhYUVcxR2RFSXNWVUZCVlN4MVFrRkJReXhMUVVGTExFVkJRVVVzVlVGQlZTeEZRVUZGTEU5QlFVOHNSVUZCUlR0QlFVTnVReXhoUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExGbEJRVmtzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0QlFVTjRReXhuUWtGQlRTeEhRVUZITEVkQlFVY3NTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU01UWl4blFrRkJUU3hMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRCUVVNdlFpeG5Ra0ZCVFN4TlFVRk5MRWRCUVVjc1MwRkJTeXhEUVVGRExGVkJRVlVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNZVUZCWVN4RFFVRkRMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4TFFVRkxMRU5CUVVNN1FVRkRMMFVzWjBKQlFVa3NWVUZCVlN4SFFVRkhMRXRCUVVzc1EwRkJReXhWUVVGVkxFZEJRVWNzVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhQUVVGUExFZEJRVWNzUzBGQlN5eERRVUZETEU5QlFVOHNRMEZCUXpzN1FVRkZMMFVzWjBKQlFVa3NUVUZCVFN4RFFVRkRMRlZCUVZVc1JVRkJSVHRCUVVOdVFpd3dRa0ZCVlN4SFFVRkhMRTFCUVUwc1EwRkJReXhWUVVGVkxFVkJRVVVzUTBGQlF6dGhRVU53UXpzN1FVRkZSQ3hwUWtGQlN5eERRVUZETEU5QlFVOHNSMEZCUnl4VlFVRlZMRU5CUVVNN1UwRkRPVUk3TzBGQlJVUXNaVUZCVHl4clFrRkJUU3hWUVVGVkxFdEJRVUVzVDBGQlF5eExRVUZMTEVWQlFVVXNWVUZCVlN4RlFVRkZMRTlCUVU4c1EwRkJReXhEUVVGRE8wdEJRM1pFT3pzN096czdPenRCUVd4SFowSXNVMEZCU3l4WFFUQkhkRUlzWTBGQll5d3lRa0ZCUXl4RlFVRkZMRVZCUVVVc1RVRkJUU3hGUVVGRk8wRkJRM1pDTEZsQlFVa3NRMEZCUXl4aFFVRmhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzVFVGQlRTeERRVUZETzBGQlEyaERMRmxCUVVrc1EwRkJReXhuUWtGQlowSXNSVUZCUlN4RFFVRkRPenRCUVVWNFFpeGhRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzVFVGQlRTeERRVUZETEZsQlFWa3NSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRCUVVNeFF5eG5Ra0ZCVFN4SFFVRkhMRWRCUVVjc1RVRkJUU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0QlFVTm9ReXhuUWtGQlRTeFhRVUZYTEVkQlFVY3NUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dEJRVU4yUXl4blFrRkJUU3hMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNN096dEJRVUZETEVGQlJ5OUNMR2RDUVVGSkxFMUJRVTBzUTBGQlF5eExRVUZMTEVsQlFVa3NTMEZCU3l4RFFVRkRMRlZCUVZVc1JVRkJSVHRCUVVOc1F5eHpRa0ZCVFN4RFFVRkRMRlZCUVZVc1IwRkJSeXhyUTBGQmJVSXNTVUZCU1N4RFFVRkRMR0ZCUVdFc1EwRkJReXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1RVRkJUU3hGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETzJGQlF6ZEdMRTFCUVUwN08wRkJSVWdzTWtKQlFWY3NRMEZCUXl4UlFVRlJMRWxCUVVrc1MwRkJTeXhEUVVGRExGRkJRVkVzUTBGQlF6dEJRVU4yUXl3eVFrRkJWeXhEUVVGRExFbEJRVWtzUjBGQlJ5eFhRVUZYTEVOQlFVTXNUMEZCVHl4SFFVRkhMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU03WVVGRE1VUTdPMEZCUlVRc2FVSkJRVXNzUTBGQlF5eFBRVUZQTEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenRCUVVOeVFpeHBRa0ZCU3l4RFFVRkRMRlZCUVZVc1IwRkJSeXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEUxQlFVMHNRMEZCUXp0VFFVTXpRenM3UVVGRlJDeFpRVUZKTEVsQlFVa3NRMEZCUXl4blFrRkJaMElzUlVGQlJUdEJRVU4yUWl3NFFrRkJUU3hMUVVGTExFdEJRVUVzVFVGQlJTeERRVUZETzFOQlEycENPMHRCUTBvN096czdPenM3UVVGdVNXZENMRk5CUVVzc1YwRXdTWFJDTEdkQ1FVRm5RaXcyUWtGQlF5eEZRVUZGTEVWQlFVVTdRVUZEYWtJc1dVRkJUU3hOUVVGTkxFZEJRVWNzU1VGQlNTeERRVUZETEdGQlFXRXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenM3UVVGRmRFTXNXVUZCU1N4TlFVRk5MRVZCUVVVN1FVRkRVaXhwUWtGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFMUJRVTBzUTBGQlF5eFpRVUZaTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1FVRkRNVU1zYjBKQlFVMHNSMEZCUnl4SFFVRkhMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdRVUZEYUVNc2IwSkJRVTBzUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03UVVGREwwSXNiMEpCUVUwc1YwRkJWeXhIUVVGSExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNUMEZCVHl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE96dEJRVVU1UXl4dlFrRkJTU3hYUVVGWExFdEJRVXNzUTBGQlF5eERRVUZETEVWQlFVVTdRVUZEY0VJc2VVSkJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRMRmRCUVZjc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU55UXl4NVFrRkJTeXhEUVVGRExGVkJRVlVzUlVGQlJTeERRVUZETzJsQ1FVTjBRanRoUVVOS096dEJRVVZFTEcxQ1FVRlBMRWxCUVVrc1EwRkJReXhoUVVGaExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdRVUZET1VJc1owSkJRVWtzUTBGQlF5eG5Ra0ZCWjBJc1JVRkJSU3hEUVVGRE8xTkJRek5DT3p0QlFVVkVMRmxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zWjBKQlFXZENMRWxCUVVrc1NVRkJTU3hEUVVGRExGRkJRVkVzUlVGQlJUdEJRVU42UXl3NFFrRkJUU3hKUVVGSkxFdEJRVUVzVFVGQlJTeERRVUZETzFOQlEyaENPMHRCUTBvN08wRkJhRXRuUWl4VFFVRkxMRmRCYTB0MFFpeGxRVUZsTERoQ1FVRkhPMEZCUTJRc05FSkJRMDhzYTBKQlFVMHNaVUZCWlN4TFFVRkJMRTFCUVVVN1FVRkRNVUlzYlVKQlFVOHNSVUZCUlN4RlFVRkZPMEZCUTFnc2MwSkJRVlVzUlVGQlJTeERRVUZETzFkQlEyWTdTMEZEVERzN1YwRjRTMmRDTEV0QlFVczdPenRyUWtGQlRDeExRVUZMSWl3aVptbHNaU0k2SWtGamRHOXlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwVUdWeWNua3ZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElFRmpkR2x2YmlCbWNtOXRJQ2N1TGk5aFkzUnBiMjV6TDBGamRHbHZiaWM3WEc1cGJYQnZjblFnWjJWdVpYSmhkR1ZDYkdWdVpFTjFjblpsSUdaeWIyMGdKeTR2YVc1akwyZGxibVZ5WVhSbExXSnNaVzVrTFdOMWNuWmxKenRjYmx4dUx5cGNiaUFnSUNCTlpYUm9iMlJ6SUdGdVpDQndjbTl3WlhKMGFXVnpJSFJ2SUdGa1pDQjBieUJpYjNWdVpDQkJZM1JwYjI1elhHNHFMMXh1WTI5dWMzUWdZbTkxYm1SUGJsTjBZWEowSUQwZ0tHRmpkR2x2YmlrZ1BUNGdZV04wYVc5dUxtRmpkRzl5TG1GamRHbDJZWFJsUVdOMGFXOXVLR0ZqZEdsdmJpNXBaQ3dnWVdOMGFXOXVLVHRjYm1OdmJuTjBJR0p2ZFc1a1QyNVRkRzl3SUQwZ0tHRmpkR2x2YmlrZ1BUNGdZV04wYVc5dUxtRmpkRzl5TG1SbFlXTjBhWFpoZEdWQlkzUnBiMjRvWVdOMGFXOXVMbWxrS1R0Y2JtTnZibk4wSUdKdmRXNWtVSEp2Y0hNZ1BTQW9ZV04wYjNJcElEMCtJQ2g3WEc0Z0lDQWdZV04wYjNJNklHRmpkRzl5TEZ4dUlDQWdJR2x6VUhKcGIzSnBkSGs2SUhSeWRXVXNYRzRnSUNBZ2IyNDZJR0ZqZEc5eUxtOXVMRnh1SUNBZ0lGOXZibE4wWVhKME9pQmliM1Z1WkU5dVUzUmhjblFzWEc0Z0lDQWdYMjl1VTNSdmNEb2dZbTkxYm1SUGJsTjBiM0FzWEc0Z0lDQWdiMjVTWlc1a1pYSTZJSFZ1WkdWbWFXNWxaRnh1ZlNrN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHTnNZWE56SUVGamRHOXlJR1Y0ZEdWdVpITWdRV04wYVc5dUlIdGNiaUFnSUNCamIyNXpkSEoxWTNSdmNpaHdjbTl3Y3lrZ2UxeHVJQ0FnSUNBZ0lDQnpkWEJsY2lod2NtOXdjeWs3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZV04wYVhabFFXTjBhVzl1Y3lBOUlIdDlPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtNTFiVUZqZEdsMlpVRmpkR2x2Ym5NZ1BTQXdPMXh1SUNBZ0lIMWNibHh1SUNBZ0lITmxkQ2h3Y205d2N5d2dhVzV6ZEdGdWRDa2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb2FXNXpkR0Z1ZENCOGZDQWhkR2hwY3k1aVpXaGhkbWx2ZFhJcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhOMWNHVnlMbk5sZENod2NtOXdjeWs3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG05dVkyVW9LVHRjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUdGamRHbHZiaUE5SUhSb2FYTXVjbVZrZFdObGNpaHdjbTl3Y3lrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb1lXTjBhVzl1S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV6ZEdGeWRDaGhZM1JwYjI0cE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHlwY2JpQWdJQ0FnSUNBZ1FtbHVaQ0JCWTNScGIyNGdkRzhnUVdOMGIzSmNiaUFnSUNBcUwxeHVJQ0FnSUdKcGJtUW9ZV04wYVc5dUtTQjdYRzRnSUNBZ0lDQWdJR052Ym5OMElHbHVhR1Z5YVhSbFpFRmpkR2x2YmlBOUlHRmpkR2x2Ymk1cGJtaGxjbWwwS0NrN1hHNGdJQ0FnSUNBZ0lHeGxkQ0J1WlhkV1lXeDFaWE1nUFNCN2ZUdGNiaUFnSUNBZ0lDQWdiR1YwSUdoaGMwNWxkMVpoYkhWbGN5QTlJR1poYkhObE8xeHVYRzRnSUNBZ0lDQWdJQzh2SUVOeVpXRjBaU0IyWVd4MVpYTWdiMjRnWVdOMGIzSWdkR2hoZENCa2IyNG5kQ0JsZUdsemRGeHVJQ0FnSUNBZ0lDQm1iM0lnS0d4bGRDQnJaWGtnYVc0Z2FXNW9aWEpwZEdWa1FXTjBhVzl1TG5aaGJIVmxjeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0dsdWFHVnlhWFJsWkVGamRHbHZiaTUyWVd4MVpYTXVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2EyVjVLU0FtSmlBaGRHaHBjeTUyWVd4MVpYTXVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2EyVjVLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUc1bGQxWmhiSFZsYzF0clpYbGRJRDBnYVc1b1pYSnBkR1ZrUVdOMGFXOXVMblpoYkhWbGMxdHJaWGxkTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdoaGMwNWxkMVpoYkhWbGN5QTlJSFJ5ZFdVN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQnBaaUFvYUdGelRtVjNWbUZzZFdWektTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbk5sZENoN0lIWmhiSFZsY3pvZ2JtVjNWbUZzZFdWeklIMHBPMXh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUdsdWFHVnlhWFJsWkVGamRHbHZiaTV6WlhRb1ltOTFibVJRY205d2N5aDBhR2x6TENCcGJtaGxjbWwwWldSQlkzUnBiMjRwS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0F2S2x4dUlDQWdJQ0FnSUNCVGRHRnlkQ0JCWTNSdmNseHVYRzRnSUNBZ0lDQWdJRWxtSUVGamRHbHZiaUJwY3lCd2NtOTJhV1JsWkN3Z1ltbHVaQ0JwZENCMGJ5QjBhR2x6SUVGamRHOXlJR0Z1WkNCemRHRnlkRnh1WEc0Z0lDQWdJQ0FnSUVCd1lYSmhiU0FvYjNCMGFXOXVZV3dwSUZ0QlkzUnBiMjVkWEc0Z0lDQWdLaTljYmlBZ0lDQnpkR0Z5ZENoaFkzUnBiMjRwSUh0Y2JpQWdJQ0FnSUNBZ2MzVndaWEl1YzNSaGNuUW9LVHRjYmx4dUlDQWdJQ0FnSUNCcFppQW9ZV04wYVc5dUtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0JpYjNWdVpFRmpkR2x2YmlBOUlIUm9hWE11WW1sdVpDaGhZM1JwYjI0cE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWW05MWJtUkJZM1JwYjI0dWMzUmhjblFvS1R0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJR0p2ZFc1a1FXTjBhVzl1TzF4dUlDQWdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdabTl5SUNoc1pYUWdhMlY1SUdsdUlIUm9hWE11WVdOMGFYWmxRV04wYVc5dWN5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbUZqZEdsMlpVRmpkR2x2Ym5NdWFHRnpUM2R1VUhKdmNHVnlkSGtvYTJWNUtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0JoWTNScGIyNGdQU0IwYUdsekxtRmpkR2wyWlVGamRHbHZibk5iYTJWNVhUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tDRmhZM1JwYjI0dWFYTkJZM1JwZG1VcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHRmpkR2x2Ymk1emRHRnlkQ2dwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYzNSdmNDZ3BJSHRjYmlBZ0lDQWdJQ0FnYzNWd1pYSXVjM1J2Y0NncE8xeHVYRzRnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR3RsZVNCcGJpQjBhR2x6TG1GamRHbDJaVUZqZEdsdmJuTXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxtRmpkR2wyWlVGamRHbHZibk11YUdGelQzZHVVSEp2Y0dWeWRIa29hMlY1S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WVdOMGFYWmxRV04wYVc5dWMxdHJaWGxkTG5OMGIzQW9LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhkcGJHeFNaVzVrWlhJb1lXTjBiM0lzSUdaeVlXMWxVM1JoYlhBc0lHVnNZWEJ6WldRcElIdGNiaUFnSUNBZ0lDQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0IwYUdsekxtNTFiVlpoYkhWbFMyVjVjenNnYVNzcktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0JyWlhrZ1BTQjBhR2x6TG5aaGJIVmxTMlY1YzF0cFhUdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJSFpoYkhWbElEMGdkR2hwY3k1MllXeDFaWE5iYTJWNVhUdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJR1J5YVhabGNpQTlJSFpoYkhWbExtNTFiVVJ5YVhabGNuTWdQeUIwYUdsekxtRmpkR2wyWlVGamRHbHZibk5iZG1Gc2RXVXVaSEpwZG1WeWMxc3dYVjBnT2lCbVlXeHpaVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHeGxkQ0J1WlhkRGRYSnlaVzUwSUQwZ2RtRnNkV1V1Ym5WdFJISnBkbVZ5Y3lBL0lHUnlhWFpsY2k1MllXeDFaWE5iYTJWNVhTNWpkWEp5Wlc1MElEb2dkbUZzZFdVdVkzVnljbVZ1ZER0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHUnlhWFpsY2k1aWJHVnVaRU4xY25abEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdibVYzUTNWeWNtVnVkQ0E5SUdSeWFYWmxjaTVpYkdWdVpFTjFjblpsS0NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJSFpoYkhWbExtTjFjbkpsYm5RZ1BTQnVaWGREZFhKeVpXNTBPMXh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhOMWNHVnlMbmRwYkd4U1pXNWtaWElvWVdOMGIzSXNJR1p5WVcxbFUzUmhiWEFzSUdWc1lYQnpaV1FwTzF4dUlDQWdJSDFjYmx4dUlDQWdJQzhxWEc0Z0lDQWdJQ0FnSUVGa1pDQmhZM1JwZG1VZ1lXTjBhVzl1YzF4dVhHNGdJQ0FnSUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFZ4dUlDQWdJQ0FnSUNCQWNHRnlZVzBnVzBGamRHbHZibDFjYmlBZ0lDQXFMMXh1SUNBZ0lHRmpkR2wyWVhSbFFXTjBhVzl1S0dsa0xDQmhZM1JwYjI0cElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1aFkzUnBkbVZCWTNScGIyNXpXMmxrWFNBOUlHRmpkR2x2Ymp0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV1ZFcxQlkzUnBkbVZCWTNScGIyNXpLeXM3WEc1Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQmhZM1JwYjI0dWJuVnRWbUZzZFdWTFpYbHpPeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJR3RsZVNBOUlHRmpkR2x2Ymk1MllXeDFaVXRsZVhOYmFWMDdYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0JoWTNScGIyNVdZV3gxWlNBOUlHRmpkR2x2Ymk1MllXeDFaWE5iYTJWNVhUdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJSFpoYkhWbElEMGdkR2hwY3k1MllXeDFaWE5iYTJWNVhUdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdTV1lnZDJVbmNtVWdZbXhsYm1ScGJtY2dkR2hwY3lCaFkzUnBiMjRzSUdGdVpDQjBhR1Z5WlNkeklHOXVJR0ZzY21WaFpIa2dhVzRnY0hKdlozSmxjM05jYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hoWTNScGIyNHVZbXhsYm1RZ0ppWWdkbUZzZFdVdWJuVnRSSEpwZG1WeWN5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR0ZqZEdsdmJpNWliR1Z1WkVOMWNuWmxJRDBnWjJWdVpYSmhkR1ZDYkdWdVpFTjFjblpsS0hSb2FYTXVZV04wYVhabFFXTjBhVzl1YzF0MllXeDFaUzVrY21sMlpYSnpXekJkWFN3Z1lXTjBhVzl1TENCclpYa3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdkx5QlFZWE56SUVGamRHOXlJSFpoYkhWbElIQnliM0JsY25ScFpYTWdkRzhnUVdOMGFXOXVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZV04wYVc5dVZtRnNkV1V1ZG1Wc2IyTnBkSGtnS3owZ2RtRnNkV1V1ZG1Wc2IyTnBkSGs3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWVdOMGFXOXVWbUZzZFdVdVpuSnZiU0E5SUdGamRHbHZibFpoYkhWbExtTjFjbkpsYm5RZ1BTQjJZV3gxWlM1amRYSnlaVzUwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQjJZV3gxWlM1a2NtbDJaWEp6SUQwZ1cybGtYVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmhiSFZsTG01MWJVUnlhWFpsY25NZ1BTQjJZV3gxWlM1a2NtbDJaWEp6TG14bGJtZDBhRHRjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxtNTFiVUZqZEdsMlpVRmpkR2x2Ym5NcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhOMWNHVnlMbk4wWVhKMEtDazdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmlBZ0lDQXZLbHh1SUNBZ0lDQWdJQ0JTWlcxdmRtVWdZV04wYVhabElHRmpkR2x2Ym5OY2JseHVJQ0FnSUNBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wxY2JpQWdJQ0FxTDF4dUlDQWdJR1JsWVdOMGFYWmhkR1ZCWTNScGIyNG9hV1FwSUh0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnWVdOMGFXOXVJRDBnZEdocGN5NWhZM1JwZG1WQlkzUnBiMjV6VzJsa1hUdGNibHh1SUNBZ0lDQWdJQ0JwWmlBb1lXTjBhVzl1S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUdGamRHbHZiaTV1ZFcxV1lXeDFaVXRsZVhNN0lHa3JLeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJR3RsZVNBOUlHRmpkR2x2Ymk1MllXeDFaVXRsZVhOYmFWMDdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2RtRnNkV1VnUFNCMGFHbHpMblpoYkhWbGMxdHJaWGxkTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJR1J5YVhabGNrbHVaR1Y0SUQwZ2RtRnNkV1V1WkhKcGRtVnljeTVwYm1SbGVFOW1LR2xrS1R0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hrY21sMlpYSkpibVJsZUNBaFBUMGdMVEVwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZzZFdVdVpISnBkbVZ5Y3k1emNHeHBZMlVvWkhKcGRtVnlTVzVrWlhnc0lERXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMllXeDFaUzV1ZFcxRWNtbDJaWEp6TFMwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0JrWld4bGRHVWdkR2hwY3k1aFkzUnBkbVZCWTNScGIyNXpXMmxrWFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWJuVnRRV04wYVhabFFXTjBhVzl1Y3kwdE8xeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnYVdZZ0tDRjBhR2x6TG01MWJVRmpkR2wyWlVGamRHbHZibk1nSmlZZ2RHaHBjeTVwYzBGamRHbDJaU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjM1Z3WlhJdWMzUnZjQ2dwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnWjJWMFJHVm1ZWFZzZEZaaGJIVmxLQ2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdMaTR1YzNWd1pYSXVaMlYwUkdWbVlYVnNkRlpoYkhWbEtDa3NYRzRnSUNBZ0lDQWdJQ0FnSUNCa2NtbDJaWEp6T2lCYlhTeGNiaUFnSUNBZ0lDQWdJQ0FnSUc1MWJVUnlhWFpsY25NNklEQmNiaUFnSUNBZ0lDQWdmVHRjYmlBZ0lDQjlYRzU5SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0b3IvQWN0b3IuanNcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfQWN0aW9uMiA9IHJlcXVpcmUoJy4vQWN0aW9uJyk7XG5cbnZhciBfQWN0aW9uMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0FjdGlvbjIpO1xuXG52YXIgX3ByZXNldEVhc2luZyA9IHJlcXVpcmUoJy4vZWFzaW5nL3ByZXNldC1lYXNpbmcnKTtcblxudmFyIF9wcmVzZXRFYXNpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlc2V0RWFzaW5nKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBDT1VOVCA9ICdDb3VudCc7XG52YXIgTkVYVF9TVEVQUyA9IHtcbiAgICBsb29wOiAncmVzdGFydCcsXG4gICAgeW95bzogJ3JldmVyc2UnLFxuICAgIGZsaXA6ICdmbGlwVmFsdWVzJ1xufTtcblxudmFyIFR3ZWVuID0gKGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gICAgX2luaGVyaXRzKFR3ZWVuLCBfQWN0aW9uKTtcblxuICAgIGZ1bmN0aW9uIFR3ZWVuKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHdlZW4pO1xuXG4gICAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgIFR3ZWVuLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgICBfQWN0aW9uLnByb3RvdHlwZS5zdGFydC5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLmVsYXBzZWQgPSAwO1xuICAgICAgICB0aGlzLmZsaXBDb3VudCA9IHRoaXMueW95b0NvdW50ID0gdGhpcy5sb29wQ291bnQgPSAwO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBUd2Vlbi5wcm90b3R5cGUub25VcGRhdGUgPSBmdW5jdGlvbiBvblVwZGF0ZSh0d2VlbiwgZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgICAgICB2YXIgcHJvZ3Jlc3NUYXJnZXQgPSB0aGlzLnBsYXlEaXJlY3Rpb24gPT09IDEgPyAxIDogMDtcblxuICAgICAgICB0aGlzLmVuZGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5lbGFwc2VkICs9IGVsYXBzZWQgKiB0aGlzLmRpbGF0ZSAqIHRoaXMucGxheURpcmVjdGlvbjtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSB0aGlzLnZhbHVlS2V5c1tpXTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG5cbiAgICAgICAgICAgIHZhciBwcm9ncmVzcyA9ICgwLCBfY2FsYy5yZXN0cmljdCkoKDAsIF9jYWxjLmdldFByb2dyZXNzRnJvbVZhbHVlKSh0aGlzLmVsYXBzZWQgLSB2YWx1ZS5kZWxheSwgMCwgdmFsdWUuZHVyYXRpb24pLCAwLCAxKTtcblxuICAgICAgICAgICAgLy8gTWFyayBUd2VlbiBhcyBOT1QgZW5kZWQgaWYgc3RpbGwgaW4gcHJvZ3Jlc3NcbiAgICAgICAgICAgIGlmIChwcm9ncmVzcyAhPT0gcHJvZ3Jlc3NUYXJnZXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFN0ZXAgcHJvZ3Jlc3MgaWYgd2UncmUgc3RlcHBpbmdcbiAgICAgICAgICAgIGlmICh2YWx1ZS5zdGVwcykge1xuICAgICAgICAgICAgICAgIHByb2dyZXNzID0gKDAsIF9jYWxjLnN0ZXBQcm9ncmVzcykocHJvZ3Jlc3MsIHZhbHVlLnN0ZXBzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRWFzZSBwcm9ncmVzc1xuICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9ICgwLCBfY2FsYy5lYXNlKShwcm9ncmVzcywgdmFsdWUuZnJvbSwgdmFsdWUudG8sIHZhbHVlLmVhc2UpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIFR3ZWVuLnByb3RvdHlwZS5vbkZyYW1lRW5kID0gZnVuY3Rpb24gb25GcmFtZUVuZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZW5kZWQpIHtcbiAgICAgICAgICAgIHZhciBzdGVwVGFrZW4gPSBmYWxzZTtcblxuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIE5FWFRfU1RFUFMpIHtcbiAgICAgICAgICAgICAgICBpZiAoTkVYVF9TVEVQUy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXhTdGVwcyA9IHRoaXNba2V5XTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAobWF4U3RlcHMgPT09IHRydWUgfHwgKDAsIF91dGlscy5pc051bSkobWF4U3RlcHMpICYmIG1heFN0ZXBzID4gdGhpc1trZXkgKyBDT1VOVF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNba2V5ICsgQ09VTlRdKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGVwVGFrZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tORVhUX1NURVBTW2tleV1dKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghc3RlcFRha2VuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIFR3ZWVuLnByb3RvdHlwZS5mbGlwVmFsdWVzID0gZnVuY3Rpb24gZmxpcFZhbHVlcygpIHtcbiAgICAgICAgdmFyIHZhbHVlcyA9IHRoaXMudmFsdWVzO1xuXG4gICAgICAgIHRoaXMuZWxhcHNlZCA9IHRoaXMuZHVyYXRpb24gLSB0aGlzLmVsYXBzZWQ7XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHZhbHVlcykge1xuICAgICAgICAgICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gdmFsdWVzW2tleV07XG4gICAgICAgICAgICAgICAgdmFyIF9yZWYgPSBbdmFsdWUuZnJvbSwgdmFsdWUudG9dO1xuICAgICAgICAgICAgICAgIHZhbHVlLnRvID0gX3JlZlswXTtcbiAgICAgICAgICAgICAgICB2YWx1ZS5mcm9tID0gX3JlZlsxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBUd2Vlbi5wcm90b3R5cGUucmV2ZXJzZSA9IGZ1bmN0aW9uIHJldmVyc2UoKSB7XG4gICAgICAgIHRoaXMucGxheURpcmVjdGlvbiAqPSAtMTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIFR3ZWVuLnByb3RvdHlwZS5yZXN0YXJ0ID0gZnVuY3Rpb24gcmVzdGFydCgpIHtcbiAgICAgICAgdGhpcy5lbGFwc2VkID0gdGhpcy5wbGF5RGlyZWN0aW9uID09PSAxID8gMCA6IHRoaXMuZHVyYXRpb247XG4gICAgICAgIHRoaXMuc3RhcnRlZCA9ICgwLCBfdXRpbHMuY3VycmVudFRpbWUpKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBUd2Vlbi5wcm90b3R5cGUuc2VlayA9IGZ1bmN0aW9uIHNlZWsocHJvZ3Jlc3MpIHtcbiAgICAgICAgdGhpcy5zZWVrVGltZSh0aGlzLmR1cmF0aW9uICogcHJvZ3Jlc3MpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgVHdlZW4ucHJvdG90eXBlLnNlZWtUaW1lID0gZnVuY3Rpb24gc2Vla1RpbWUoZWxhcHNlZCkge1xuICAgICAgICB0aGlzLm9uY2UoKTtcbiAgICAgICAgdGhpcy5lbGFwc2VkID0gZWxhcHNlZDtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgVHdlZW4ucHJvdG90eXBlLmdldERlZmF1bHRQcm9wcyA9IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBfQWN0aW9uLnByb3RvdHlwZS5nZXREZWZhdWx0UHJvcHMuY2FsbCh0aGlzKSwge1xuICAgICAgICAgICAgYmxlbmQ6IHRydWUsXG4gICAgICAgICAgICBkZWxheTogMCxcbiAgICAgICAgICAgIGRpbGF0ZTogMSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgICAgICAgICBsb29wOiBmYWxzZSxcbiAgICAgICAgICAgIHlveW86IGZhbHNlLFxuICAgICAgICAgICAgZmxpcDogZmFsc2UsXG4gICAgICAgICAgICBwbGF5RGlyZWN0aW9uOiAxLFxuICAgICAgICAgICAgZW5kZWQ6IGZhbHNlLFxuICAgICAgICAgICAgZWxhcHNlZDogMFxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgVHdlZW4ucHJvdG90eXBlLmdldERlZmF1bHRWYWx1ZSA9IGZ1bmN0aW9uIGdldERlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBfQWN0aW9uLnByb3RvdHlwZS5nZXREZWZhdWx0VmFsdWUuY2FsbCh0aGlzKSwge1xuICAgICAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgICAgICBkdXJhdGlvbjogMzAwLFxuICAgICAgICAgICAgZWFzZTogX3ByZXNldEVhc2luZzIuZGVmYXVsdC5lYXNlT3V0LFxuICAgICAgICAgICAgZWxhcHNlZDogMCxcbiAgICAgICAgICAgIHN0YWdnZXI6IDAsXG4gICAgICAgICAgICBzdGVwczogMCxcbiAgICAgICAgICAgIHRvOiAwLFxuICAgICAgICAgICAgcm91bmQ6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBUd2Vlbi5wcm90b3R5cGUuZ2V0RGVmYXVsdFZhbHVlUHJvcCA9IGZ1bmN0aW9uIGdldERlZmF1bHRWYWx1ZVByb3AoKSB7XG4gICAgICAgIHJldHVybiAndG8nO1xuICAgIH07XG5cbiAgICByZXR1cm4gVHdlZW47XG59KShfQWN0aW9uMy5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gVHdlZW47XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwxUjNaV1Z1TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3TzBGQlZVRXNTVUZCVFN4TFFVRkxMRWRCUVVjc1QwRkJUeXhEUVVGRE8wRkJRM1JDTEVsQlFVMHNWVUZCVlN4SFFVRkhPMEZCUTJZc1VVRkJTU3hGUVVGRkxGTkJRVk03UVVGRFppeFJRVUZKTEVWQlFVVXNVMEZCVXp0QlFVTm1MRkZCUVVrc1JVRkJSU3haUVVGWk8wTkJRM0pDTEVOQlFVTTdPMGxCUlcxQ0xFdEJRVXM3WTBGQlRDeExRVUZMT3p0aFFVRk1MRXRCUVVzN09FSkJRVXdzUzBGQlN6czdPenM3UVVGQlRDeFRRVUZMTEZkQlEzUkNMRXRCUVVzc2IwSkJRVWM3UVVGRFNpd3dRa0ZCVFN4TFFVRkxMRXRCUVVFc1RVRkJSU3hEUVVGRE8wRkJRMlFzV1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4RFFVRkRMRU5CUVVNN1FVRkRha0lzV1VGQlNTeERRVUZETEZOQlFWTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1UwRkJVeXhIUVVGSExFbEJRVWtzUTBGQlF5eFRRVUZUTEVkQlFVY3NRMEZCUXl4RFFVRkRPenRCUVVWeVJDeGxRVUZQTEVsQlFVa3NRMEZCUXp0TFFVTm1PenRCUVZCblFpeFRRVUZMTEZkQlUzUkNMRkZCUVZFc2NVSkJRVU1zUzBGQlN5eEZRVUZGTEZWQlFWVXNSVUZCUlN4UFFVRlBMRVZCUVVVN1FVRkRha01zV1VGQlRTeGpRVUZqTEVkQlFVY3NRVUZCUXl4SlFVRkpMRU5CUVVNc1lVRkJZU3hMUVVGTExFTkJRVU1zUjBGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPenRCUVVVeFJDeFpRVUZKTEVOQlFVTXNTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJRenRCUVVOc1FpeFpRVUZKTEVOQlFVTXNUMEZCVHl4SlFVRkpMRUZCUVVNc1QwRkJUeXhIUVVGSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVa3NTVUZCU1N4RFFVRkRMR0ZCUVdFc1EwRkJRenM3UVVGRk4wUXNZVUZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4WlFVRlpMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3UVVGRGVFTXNaMEpCUVUwc1IwRkJSeXhIUVVGSExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRkRPVUlzWjBKQlFVMHNTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdPMEZCUlM5Q0xHZENRVUZKTEZGQlFWRXNSMEZCUnl4VlFTOUNka0lzVVVGQlVTeEZRU3RDZDBJc1ZVRTVRbWhETEc5Q1FVRnZRaXhGUVRoQ2FVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhMUVVGTExFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTXNSVUZCUlN4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXpzN08wRkJRVU1zUVVGSGJrY3NaMEpCUVVrc1VVRkJVU3hMUVVGTExHTkJRV01zUlVGQlJUdEJRVU0zUWl4dlFrRkJTU3hEUVVGRExFdEJRVXNzUjBGQlJ5eExRVUZMTEVOQlFVTTdZVUZEZEVJN096dEJRVUZCTEVGQlIwUXNaMEpCUVVrc1MwRkJTeXhEUVVGRExFdEJRVXNzUlVGQlJUdEJRVU5pTEhkQ1FVRlJMRWRCUVVjc1ZVRjBRM1pDTEZsQlFWa3NSVUZ6UTNkQ0xGRkJRVkVzUlVGQlJTeExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1lVRkRiRVE3T3p0QlFVRkJMRUZCUjBRc2FVSkJRVXNzUTBGQlF5eFBRVUZQTEVkQlFVY3NWVUUzUTNoQ0xFbEJRVWtzUlVFMlEzbENMRkZCUVZFc1JVRkJSU3hMUVVGTExFTkJRVU1zU1VGQlNTeEZRVUZGTEV0QlFVc3NRMEZCUXl4RlFVRkZMRVZCUVVVc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFOQlEzQkZPMHRCUTBvN08wRkJiRU5uUWl4VFFVRkxMRmRCYjBOMFFpeFZRVUZWTEhsQ1FVRkhPMEZCUTFRc1dVRkJTU3hKUVVGSkxFTkJRVU1zUzBGQlN5eEZRVUZGTzBGQlExb3NaMEpCUVVrc1UwRkJVeXhIUVVGSExFdEJRVXNzUTBGQlF6czdRVUZGZEVJc2FVSkJRVXNzU1VGQlNTeEhRVUZITEVsQlFVa3NWVUZCVlN4RlFVRkZPMEZCUTNoQ0xHOUNRVUZKTEZWQlFWVXNRMEZCUXl4alFVRmpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVU3UVVGRGFFTXNkMEpCUVUwc1VVRkJVU3hIUVVGSExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXpzN1FVRkZNMElzZDBKQlFVa3NVVUZCVVN4TFFVRkxMRWxCUVVrc1NVRkJTeXhYUVRORWVFSXNTMEZCU3l4RlFUSkVlVUlzVVVGQlVTeERRVUZETEVsQlFVa3NVVUZCVVN4SFFVRkhMRWxCUVVrc1EwRkJReXhIUVVGSExFZEJRVWNzUzBGQlN5eERRVUZETEVGQlFVTXNSVUZCUlR0QlFVTjRSU3cwUWtGQlNTeERRVUZETEVkQlFVY3NSMEZCUnl4TFFVRkxMRU5CUVVNc1JVRkJSU3hEUVVGRE8wRkJRM0JDTEdsRFFVRlRMRWRCUVVjc1NVRkJTU3hEUVVGRE8wRkJRMnBDTERSQ1FVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXp0eFFrRkRNMEk3YVVKQlEwbzdZVUZEU2pzN1FVRkZSQ3huUWtGQlNTeERRVUZETEZOQlFWTXNSVUZCUlR0QlFVTmFMRzlDUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTTdZVUZEYmtJN1UwRkRTanRMUVVOS096dEJRWGhFWjBJc1UwRkJTeXhYUVRCRWRFSXNWVUZCVlN4NVFrRkJSenRCUVVOVUxGbEJRVTBzVFVGQlRTeEhRVUZITEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNN08wRkJSVE5DTEZsQlFVa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1NVRkJTU3hEUVVGRExGRkJRVkVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRPenRCUVVVMVF5eGhRVUZMTEVsQlFVa3NSMEZCUnl4SlFVRkpMRTFCUVUwc1JVRkJSVHRCUVVOd1FpeG5Ra0ZCU1N4TlFVRk5MRU5CUVVNc1kwRkJZeXhEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTzBGQlF6VkNMRzlDUVVGTkxFdEJRVXNzUjBGQlJ5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN01rSkJRMFFzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RlFVRkZMRXRCUVVzc1EwRkJReXhGUVVGRkxFTkJRVU03UVVGQk9VTXNjVUpCUVVzc1EwRkJReXhGUVVGRk8wRkJRVVVzY1VKQlFVc3NRMEZCUXl4SlFVRkpPMkZCUTNoQ08xTkJRMG83TzBGQlJVUXNaVUZCVHl4SlFVRkpMRU5CUVVNN1MwRkRaanM3UVVGMlJXZENMRk5CUVVzc1YwRjVSWFJDTEU5QlFVOHNjMEpCUVVjN1FVRkRUaXhaUVVGSkxFTkJRVU1zWVVGQllTeEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUTNwQ0xHVkJRVThzU1VGQlNTeERRVUZETzB0QlEyWTdPMEZCTlVWblFpeFRRVUZMTEZkQk9FVjBRaXhQUVVGUExITkNRVUZITzBGQlEwNHNXVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhCUVVGRExFbEJRVWtzUTBGQlF5eGhRVUZoTEV0QlFVc3NRMEZCUXl4SFFVRkpMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETzBGQlF6bEVMRmxCUVVrc1EwRkJReXhQUVVGUExFZEJRVWNzVjBFdlJtUXNWMEZCVnl4SFFTdEdaMElzUTBGQlF6dEJRVU0zUWl4bFFVRlBMRWxCUVVrc1EwRkJRenRMUVVObU96dEJRV3hHWjBJc1UwRkJTeXhYUVc5R2RFSXNTVUZCU1N4cFFrRkJReXhSUVVGUkxFVkJRVVU3UVVGRFdDeFpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzVVVGQlVTeERRVUZETEVOQlFVTTdRVUZEZUVNc1pVRkJUeXhKUVVGSkxFTkJRVU03UzBGRFpqczdRVUYyUm1kQ0xGTkJRVXNzVjBGNVJuUkNMRkZCUVZFc2NVSkJRVU1zVDBGQlR5eEZRVUZGTzBGQlEyUXNXVUZCU1N4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRE8wRkJRMW9zV1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4UFFVRlBMRU5CUVVNN08wRkJSWFpDTEdWQlFVOHNTVUZCU1N4RFFVRkRPMHRCUTJZN08wRkJPVVpuUWl4VFFVRkxMRmRCWjBkMFFpeGxRVUZsTERoQ1FVRkhPMEZCUTJRc05FSkJRMDhzYTBKQlFVMHNaVUZCWlN4TFFVRkJMRTFCUVVVN1FVRkRNVUlzYVVKQlFVc3NSVUZCUlN4SlFVRkpPMEZCUTFnc2FVSkJRVXNzUlVGQlJTeERRVUZETzBGQlExSXNhMEpCUVUwc1JVRkJSU3hEUVVGRE8wRkJRMVFzYjBKQlFWRXNSVUZCUlN4SFFVRkhPMEZCUTJJc1owSkJRVWtzUlVGQlJTeExRVUZMTzBGQlExZ3NaMEpCUVVrc1JVRkJSU3hMUVVGTE8wRkJRMWdzWjBKQlFVa3NSVUZCUlN4TFFVRkxPMEZCUTFnc2VVSkJRV0VzUlVGQlJTeERRVUZETzBGQlEyaENMR2xDUVVGTExFVkJRVVVzUzBGQlN6dEJRVU5hTEcxQ1FVRlBMRVZCUVVVc1EwRkJRenRYUVVOYU8wdEJRMHc3TzBGQk9VZG5RaXhUUVVGTExGZEJaMGgwUWl4bFFVRmxMRGhDUVVGSE8wRkJRMlFzTkVKQlEwOHNhMEpCUVUwc1pVRkJaU3hMUVVGQkxFMUJRVVU3UVVGRE1VSXNhVUpCUVVzc1JVRkJSU3hEUVVGRE8wRkJRMUlzYjBKQlFWRXNSVUZCUlN4SFFVRkhPMEZCUTJJc1owSkJRVWtzUlVGQlJTeDFRa0ZCVHl4UFFVRlBPMEZCUTNCQ0xHMUNRVUZQTEVWQlFVVXNRMEZCUXp0QlFVTldMRzFDUVVGUExFVkJRVVVzUTBGQlF6dEJRVU5XTEdsQ1FVRkxMRVZCUVVVc1EwRkJRenRCUVVOU0xHTkJRVVVzUlVGQlJTeERRVUZETzBGQlEwd3NhVUpCUVVzc1JVRkJSU3hMUVVGTE8xZEJRMlE3UzBGRFREczdRVUUxU0dkQ0xGTkJRVXNzVjBFNFNIUkNMRzFDUVVGdFFpeHJRMEZCUnp0QlFVTnNRaXhsUVVGUExFbEJRVWtzUTBGQlF6dExRVU5tT3p0WFFXaEpaMElzUzBGQlN6czdPMnRDUVVGTUxFdEJRVXNpTENKbWFXeGxJam9pVkhkbFpXNHVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFJRWlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1FXTjBhVzl1SUdaeWIyMGdKeTR2UVdOMGFXOXVKenRjYm1sdGNHOXlkQ0JsWVhOcGJtY2dabkp2YlNBbkxpOWxZWE5wYm1jdmNISmxjMlYwTFdWaGMybHVaeWM3WEc1cGJYQnZjblFnZXlCamRYSnlaVzUwVkdsdFpTd2dhWE5PZFcwZ2ZTQm1jbTl0SUNjdUxpOXBibU12ZFhScGJITW5PMXh1YVcxd2IzSjBJSHRjYmlBZ0lDQmxZWE5sTEZ4dUlDQWdJSEpsYzNSeWFXTjBMRnh1SUNBZ0lHZGxkRkJ5YjJkeVpYTnpSbkp2YlZaaGJIVmxMRnh1SUNBZ0lITjBaWEJRY205bmNtVnpjMXh1ZlNCbWNtOXRJQ2N1TGk5cGJtTXZZMkZzWXljN1hHNWNibU52Ym5OMElFTlBWVTVVSUQwZ0owTnZkVzUwSnp0Y2JtTnZibk4wSUU1RldGUmZVMVJGVUZNZ1BTQjdYRzRnSUNBZ2JHOXZjRG9nSjNKbGMzUmhjblFuTEZ4dUlDQWdJSGx2ZVc4NklDZHlaWFpsY25ObEp5eGNiaUFnSUNCbWJHbHdPaUFuWm14cGNGWmhiSFZsY3lkY2JuMDdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR05zWVhOeklGUjNaV1Z1SUdWNGRHVnVaSE1nUVdOMGFXOXVJSHRjYmlBZ0lDQnpkR0Z5ZENncElIdGNiaUFnSUNBZ0lDQWdjM1Z3WlhJdWMzUmhjblFvS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVsYkdGd2MyVmtJRDBnTUR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVtYkdsd1EyOTFiblFnUFNCMGFHbHpMbmx2ZVc5RGIzVnVkQ0E5SUhSb2FYTXViRzl2Y0VOdmRXNTBJRDBnTUR0Y2JseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjenRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnZibFZ3WkdGMFpTaDBkMlZsYml3Z1puSmhiV1ZUZEdGdGNDd2daV3hoY0hObFpDa2dlMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQndjbTluY21WemMxUmhjbWRsZENBOUlDaDBhR2x6TG5Cc1lYbEVhWEpsWTNScGIyNGdQVDA5SURFcElEOGdNU0E2SURBN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1bGJtUmxaQ0E5SUhSeWRXVTdYRzRnSUNBZ0lDQWdJSFJvYVhNdVpXeGhjSE5sWkNBclBTQW9aV3hoY0hObFpDQXFJSFJvYVhNdVpHbHNZWFJsS1NBcUlIUm9hWE11Y0d4aGVVUnBjbVZqZEdsdmJqdGNibHh1SUNBZ0lDQWdJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUhSb2FYTXViblZ0Vm1Gc2RXVkxaWGx6T3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUd0bGVTQTlJSFJvYVhNdWRtRnNkV1ZMWlhselcybGRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnZG1Gc2RXVWdQU0IwYUdsekxuWmhiSFZsYzF0clpYbGRPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQnNaWFFnY0hKdlozSmxjM01nUFNCeVpYTjBjbWxqZENoblpYUlFjbTluY21WemMwWnliMjFXWVd4MVpTaDBhR2x6TG1Wc1lYQnpaV1FnTFNCMllXeDFaUzVrWld4aGVTd2dNQ3dnZG1Gc2RXVXVaSFZ5WVhScGIyNHBMQ0F3TENBeEtUdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdUV0Z5YXlCVWQyVmxiaUJoY3lCT1QxUWdaVzVrWldRZ2FXWWdjM1JwYkd3Z2FXNGdjSEp2WjNKbGMzTmNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaHdjbTluY21WemN5QWhQVDBnY0hKdlozSmxjM05VWVhKblpYUXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtVnVaR1ZrSUQwZ1ptRnNjMlU3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJRk4wWlhBZ2NISnZaM0psYzNNZ2FXWWdkMlVuY21VZ2MzUmxjSEJwYm1kY2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMllXeDFaUzV6ZEdWd2N5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEJ5YjJkeVpYTnpJRDBnYzNSbGNGQnliMmR5WlhOektIQnliMmR5WlhOekxDQjJZV3gxWlM1emRHVndjeWs3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJRVZoYzJVZ2NISnZaM0psYzNOY2JpQWdJQ0FnSUNBZ0lDQWdJSFpoYkhWbExtTjFjbkpsYm5RZ1BTQmxZWE5sS0hCeWIyZHlaWE56TENCMllXeDFaUzVtY205dExDQjJZV3gxWlM1MGJ5d2dkbUZzZFdVdVpXRnpaU2s3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0J2YmtaeVlXMWxSVzVrS0NrZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvZEdocGN5NWxibVJsWkNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYkdWMElITjBaWEJVWVd0bGJpQTlJR1poYkhObE8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNCbWIzSWdLR3hsZENCclpYa2dhVzRnVGtWWVZGOVRWRVZRVXlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hPUlZoVVgxTlVSVkJUTG1oaGMwOTNibEJ5YjNCbGNuUjVLR3RsZVNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdiV0Y0VTNSbGNITWdQU0IwYUdselcydGxlVjA3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0cxaGVGTjBaWEJ6SUQwOVBTQjBjblZsSUh4OElDaHBjMDUxYlNodFlYaFRkR1Z3Y3lrZ0ppWWdiV0Y0VTNSbGNITWdQaUIwYUdselcydGxlU0FySUVOUFZVNVVYU2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTmJhMlY1SUNzZ1EwOVZUbFJkS3lzN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCemRHVndWR0ZyWlc0Z1BTQjBjblZsTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGMxdE9SVmhVWDFOVVJWQlRXMnRsZVYxZEtDazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNnaGMzUmxjRlJoYTJWdUtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1amIyMXdiR1YwWlNncE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnWm14cGNGWmhiSFZsY3lncElIdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2RtRnNkV1Z6SUQwZ2RHaHBjeTUyWVd4MVpYTTdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NWxiR0Z3YzJWa0lEMGdkR2hwY3k1a2RYSmhkR2x2YmlBdElIUm9hWE11Wld4aGNITmxaRHRjYmx4dUlDQWdJQ0FnSUNCbWIzSWdLR3hsZENCclpYa2dhVzRnZG1Gc2RXVnpLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvZG1Gc2RXVnpMbWhoYzA5M2JsQnliM0JsY25SNUtHdGxlU2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0IyWVd4MVpTQTlJSFpoYkhWbGMxdHJaWGxkTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUZ0MllXeDFaUzUwYnl3Z2RtRnNkV1V1Wm5KdmJWMGdQU0JiZG1Gc2RXVXVabkp2YlN3Z2RtRnNkV1V1ZEc5ZE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjbVYyWlhKelpTZ3BJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXdiR0Y1UkdseVpXTjBhVzl1SUNvOUlDMHhPMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3p0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J5WlhOMFlYSjBLQ2tnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbVZzWVhCelpXUWdQU0FvZEdocGN5NXdiR0Y1UkdseVpXTjBhVzl1SUQwOVBTQXhLU0EvSURBZ09pQjBhR2x6TG1SMWNtRjBhVzl1TzF4dUlDQWdJQ0FnSUNCMGFHbHpMbk4wWVhKMFpXUWdQU0JqZFhKeVpXNTBWR2x0WlNncE8xeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjenRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnpaV1ZyS0hCeWIyZHlaWE56S1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YzJWbGExUnBiV1VvZEdocGN5NWtkWEpoZEdsdmJpQXFJSEJ5YjJkeVpYTnpLVHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYzJWbGExUnBiV1VvWld4aGNITmxaQ2tnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbTl1WTJVb0tUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1bGJHRndjMlZrSUQwZ1pXeGhjSE5sWkR0Y2JseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjenRjYmlBZ0lDQjlYRzRnSUNBZ1hHNGdJQ0FnWjJWMFJHVm1ZWFZzZEZCeWIzQnpLQ2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdMaTR1YzNWd1pYSXVaMlYwUkdWbVlYVnNkRkJ5YjNCektDa3NYRzRnSUNBZ0lDQWdJQ0FnSUNCaWJHVnVaRG9nZEhKMVpTeGNiaUFnSUNBZ0lDQWdJQ0FnSUdSbGJHRjVPaUF3TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdaR2xzWVhSbE9pQXhMRnh1SUNBZ0lDQWdJQ0FnSUNBZ1pIVnlZWFJwYjI0NklETXdNQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lHeHZiM0E2SUdaaGJITmxMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2VXOTViem9nWm1Gc2MyVXNYRzRnSUNBZ0lDQWdJQ0FnSUNCbWJHbHdPaUJtWVd4elpTeGNiaUFnSUNBZ0lDQWdJQ0FnSUhCc1lYbEVhWEpsWTNScGIyNDZJREVzWEc0Z0lDQWdJQ0FnSUNBZ0lDQmxibVJsWkRvZ1ptRnNjMlVzWEc0Z0lDQWdJQ0FnSUNBZ0lDQmxiR0Z3YzJWa09pQXdYRzRnSUNBZ0lDQWdJSDA3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdaMlYwUkdWbVlYVnNkRlpoYkhWbEtDa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0xpNHVjM1Z3WlhJdVoyVjBSR1ZtWVhWc2RGWmhiSFZsS0Nrc1hHNGdJQ0FnSUNBZ0lDQWdJQ0JrWld4aGVUb2dNQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lHUjFjbUYwYVc5dU9pQXpNREFzWEc0Z0lDQWdJQ0FnSUNBZ0lDQmxZWE5sT2lCbFlYTnBibWN1WldGelpVOTFkQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lHVnNZWEJ6WldRNklEQXNYRzRnSUNBZ0lDQWdJQ0FnSUNCemRHRm5aMlZ5T2lBd0xGeHVJQ0FnSUNBZ0lDQWdJQ0FnYzNSbGNITTZJREFzWEc0Z0lDQWdJQ0FnSUNBZ0lDQjBiem9nTUN4Y2JpQWdJQ0FnSUNBZ0lDQWdJSEp2ZFc1a09pQm1ZV3h6WlZ4dUlDQWdJQ0FnSUNCOU8xeHVJQ0FnSUgxY2JseHVJQ0FnSUdkbGRFUmxabUYxYkhSV1lXeDFaVkJ5YjNBb0tTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQW5kRzhuTzF4dUlDQWdJSDFjYm4xY2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL1R3ZWVuLmpzXG4gKiogbW9kdWxlIGlkID0gNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX0FjdGlvbjIgPSByZXF1aXJlKCcuL0FjdGlvbicpO1xuXG52YXIgX0FjdGlvbjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BY3Rpb24yKTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBQaHlzaWNzID0gKGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gICAgX2luaGVyaXRzKFBoeXNpY3MsIF9BY3Rpb24pO1xuXG4gICAgZnVuY3Rpb24gUGh5c2ljcygpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBoeXNpY3MpO1xuXG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5jYWxsLmFwcGx5KF9BY3Rpb24sIFt0aGlzXS5jb25jYXQoYXJncykpKTtcblxuICAgICAgICBfdGhpcy5pbmFjdGl2ZUZyYW1lcyA9IDA7XG4gICAgICAgIF90aGlzLmNhbGN1bGF0ZXNWZWxvY2l0eSA9IHRydWU7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBQaHlzaWNzLnByb3RvdHlwZS5vblVwZGF0ZSA9IGZ1bmN0aW9uIG9uVXBkYXRlKHBoeXNpY3MsIGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gZmFsc2U7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gdGhpcy52YWx1ZUtleXNbaV07XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuICAgICAgICAgICAgdmFyIHByZXZpb3VzVmFsdWUgPSB2YWx1ZS5wcmV2O1xuXG4gICAgICAgICAgICAvLyBBcHBseSBhY2NlbGVyYXRpb25cbiAgICAgICAgICAgIHZhbHVlLnZlbG9jaXR5ICs9ICgwLCBfY2FsYy5zcGVlZFBlckZyYW1lKSh2YWx1ZS5hY2NlbGVyYXRpb24sIGVsYXBzZWQpO1xuXG4gICAgICAgICAgICAvLyBBcHBseSBmcmljdGlvblxuICAgICAgICAgICAgdmFsdWUudmVsb2NpdHkgKj0gTWF0aC5wb3coMSAtIHZhbHVlLmZyaWN0aW9uLCBlbGFwc2VkIC8gMTAwKTtcblxuICAgICAgICAgICAgLy8gQXBwbHkgc3ByaW5nXG4gICAgICAgICAgICBpZiAodmFsdWUuc3ByaW5nICYmICgwLCBfdXRpbHMuaXNOdW0pKHZhbHVlLnRvKSkge1xuICAgICAgICAgICAgICAgIHZhciBkaXN0YW5jZVRvVGFyZ2V0ID0gdmFsdWUudG8gLSB2YWx1ZS5jdXJyZW50O1xuICAgICAgICAgICAgICAgIHZhbHVlLnZlbG9jaXR5ICs9IGRpc3RhbmNlVG9UYXJnZXQgKiAoMCwgX2NhbGMuc3BlZWRQZXJGcmFtZSkodmFsdWUuc3ByaW5nLCBlbGFwc2VkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQXBwbHkgbGF0ZXN0IHZlbG9jaXR5XG4gICAgICAgICAgICB2YWx1ZS5jdXJyZW50ICs9ICgwLCBfY2FsYy5zcGVlZFBlckZyYW1lKSh2YWx1ZS52ZWxvY2l0eSwgZWxhcHNlZCk7XG5cbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHZhbHVlIGhhcyBjaGFuZ2VkXG4gICAgICAgICAgICBpZiAodmFsdWUuY3VycmVudCAhPT0gcHJldmlvdXNWYWx1ZSB8fCBNYXRoLmFicyh2YWx1ZS52ZWxvY2l0eSkgPj0gdmFsdWUuc3RvcFNwZWVkIHx8IHZhbHVlLnNwcmluZyAmJiB2YWx1ZS5jdXJyZW50ICE9PSB2YWx1ZS50bykge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgUGh5c2ljcy5wcm90b3R5cGUub25GcmFtZUVuZCA9IGZ1bmN0aW9uIG9uRnJhbWVFbmQoKSB7XG4gICAgICAgIGlmICh0aGlzLmF1dG9Db21wbGV0ZSkge1xuICAgICAgICAgICAgdGhpcy5pbmFjdGl2ZUZyYW1lcyA9IHRoaXMuaGFzQ2hhbmdlZCA/IDEgOiB0aGlzLmluYWN0aXZlRnJhbWVzICsgMTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuaW5hY3RpdmVGcmFtZXMgPj0gdGhpcy5tYXhJbmFjdGl2ZUZyYW1lcykge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcGxldGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKlxuICAgICAgICAjIEdldCBkZWZhdWx0IFNpbXVsYXRlIHByb3BzXG4gICAgICAgICBAcmV0dXJuIFtvYmplY3RdXG4gICAgKi9cblxuICAgIFBoeXNpY3MucHJvdG90eXBlLmdldERlZmF1bHRQcm9wcyA9IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBfQWN0aW9uLnByb3RvdHlwZS5nZXREZWZhdWx0UHJvcHMuY2FsbCh0aGlzKSwge1xuICAgICAgICAgICAgYXV0b0NvbXBsZXRlOiB0cnVlLFxuICAgICAgICAgICAgbWF4SW5hY3RpdmVGcmFtZXM6IDNcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8qXG4gICAgICAgICMgR2V0IGRlZmF1bHQgU2ltdWxhdGUgdmFsdWUgcHJvcHNcbiAgICAgICAgIEByZXR1cm4gW29iamVjdF1cbiAgICAqL1xuXG4gICAgUGh5c2ljcy5wcm90b3R5cGUuZ2V0RGVmYXVsdFZhbHVlID0gZnVuY3Rpb24gZ2V0RGVmYXVsdFZhbHVlKCkge1xuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIF9BY3Rpb24ucHJvdG90eXBlLmdldERlZmF1bHRWYWx1ZS5jYWxsKHRoaXMpLCB7XG4gICAgICAgICAgICBhY2NlbGVyYXRpb246IDAsIC8vIFtudW1iZXJdOiBBY2NlbGVyYXRpb24gdG8gYXBwbHkgdG8gdmFsdWUsIGluIHVuaXRzIHBlciBzZWNvbmRcbiAgICAgICAgICAgIGJvdW5jZTogMCwgLy8gW251bWJlcl06IEZhY3RvciB0byBtdWx0aXBseSB2ZWxvY2l0eSBieSBvbiBib3VuY2VcbiAgICAgICAgICAgIHNwcmluZzogMCwgLy8gW251bWJlcl06IFNwcmluZyBzdHJlbmd0aCBkdXJpbmcgJ3N0cmluZydcbiAgICAgICAgICAgIHN0b3BTcGVlZDogMC4wMDAxLCAvLyBbbnVtYmVyXTogU3RvcCBzaW11bGF0aW9uIHVuZGVyIHRoaXMgc3BlZWRcbiAgICAgICAgICAgIGZyaWN0aW9uOiAwIC8vIFtudW1iZXJdOiBGcmljdGlvbiB0byBhcHBseSBwZXIgZnJhbWUsIDAtMVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgIyBHZXQgZGVmYXVsdCBTaW11bGF0ZSB2YWx1ZSBwcm9wZXJ0eSBuYW1lXG4gICAgICAgICMjIFNldCB2YWx1ZXMgdG8gdGhpcyB3aGVuIGEgYHZhbHVlYCBpcyBub3QgcHJvdmlkZWQgYXMgYW4gb2JqZWN0XG4gICAgICAgICBAcmV0dXJuIFtzdHJpbmddXG4gICAgKi9cblxuICAgIFBoeXNpY3MucHJvdG90eXBlLmdldERlZmF1bHRWYWx1ZVByb3AgPSBmdW5jdGlvbiBnZXREZWZhdWx0VmFsdWVQcm9wKCkge1xuICAgICAgICByZXR1cm4gJ3ZlbG9jaXR5JztcbiAgICB9O1xuXG4gICAgcmV0dXJuIFBoeXNpY3M7XG59KShfQWN0aW9uMy5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUGh5c2ljcztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDFCb2VYTnBZM011YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3T3pzN096czdPenM3T3pzN096dEpRVWx4UWl4UFFVRlBPMk5CUVZBc1QwRkJUenM3UVVGRmVFSXNZVUZHYVVJc1QwRkJUeXhIUVVWSU96aENRVVpLTEU5QlFVODdPekJEUVVWVUxFbEJRVWs3UVVGQlNpeG5Ra0ZCU1RzN08zRkVRVU5tTERCRFFVRlRMRWxCUVVrc1JVRkJRenM3UVVGRFpDeGpRVUZMTEdOQlFXTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1FVRkRlRUlzWTBGQlN5eHJRa0ZCYTBJc1IwRkJSeXhKUVVGSkxFTkJRVU03TzB0QlEyeERPenRCUVU1blFpeFhRVUZQTEZkQlVYaENMRkZCUVZFc2NVSkJRVU1zVDBGQlR5eEZRVUZGTEZWQlFWVXNSVUZCUlN4UFFVRlBMRVZCUVVVN1FVRkRia01zV1VGQlNTeERRVUZETEZWQlFWVXNSMEZCUnl4TFFVRkxMRU5CUVVNN08wRkJSWGhDTEdGQlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8wRkJRM2hETEdkQ1FVRk5MRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUXpsQ0xHZENRVUZOTEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzBGQlF5OUNMR2RDUVVGTkxHRkJRV0VzUjBGQlJ5eExRVUZMTEVOQlFVTXNTVUZCU1RzN08wRkJRVU1zUVVGSGFrTXNhVUpCUVVzc1EwRkJReXhSUVVGUkxFbEJRVWtzVlVGd1FuSkNMR0ZCUVdFc1JVRnZRbk5DTEV0QlFVc3NRMEZCUXl4WlFVRlpMRVZCUVVVc1QwRkJUeXhEUVVGRE96czdRVUZCUXl4QlFVYzNSQ3hwUWtGQlN5eERRVUZETEZGQlFWRXNZVUZCU3l4RFFVRkRMRWRCUVVjc1MwRkJTeXhEUVVGRExGRkJRVkVzUlVGQlRTeFBRVUZQTEVkQlFVY3NSMEZCUnl4RFFVRkRPenM3UVVGQlF5eEJRVWN4UkN4blFrRkJTU3hMUVVGTExFTkJRVU1zVFVGQlRTeEpRVUZKTEZkQmVrSjJRaXhMUVVGTExFVkJlVUozUWl4TFFVRkxMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVU3UVVGRGFrTXNiMEpCUVUwc1owSkJRV2RDTEVkQlFVY3NTMEZCU3l4RFFVRkRMRVZCUVVVc1IwRkJSeXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETzBGQlEyeEVMSEZDUVVGTExFTkJRVU1zVVVGQlVTeEpRVUZKTEdkQ1FVRm5RaXhIUVVGSExGVkJOVUkxUXl4aFFVRmhMRVZCTkVJMlF5eExRVUZMTEVOQlFVTXNUVUZCVFN4RlFVRkZMRTlCUVU4c1EwRkJReXhEUVVGRE8yRkJRemRGT3pzN1FVRkJRU3hCUVVkRUxHbENRVUZMTEVOQlFVTXNUMEZCVHl4SlFVRkpMRlZCYUVOd1FpeGhRVUZoTEVWQlowTnhRaXhMUVVGTExFTkJRVU1zVVVGQlVTeEZRVUZGTEU5QlFVOHNRMEZCUXpzN08wRkJRVU1zUVVGSGVFUXNaMEpCUVVrc1MwRkJTeXhEUVVGRExFOUJRVThzUzBGQlN5eGhRVUZoTEVsQlFVa3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NTMEZCU3l4RFFVRkRMRk5CUVZNc1NVRkJTeXhMUVVGTExFTkJRVU1zVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl4UFFVRlBMRXRCUVVzc1MwRkJTeXhEUVVGRExFVkJRVVVzUVVGQlF5eEZRVUZGTzBGQlEyaEpMRzlDUVVGSkxFTkJRVU1zVlVGQlZTeEhRVUZITEVsQlFVa3NRMEZCUXp0aFFVTXhRanRUUVVOS08wdEJRMG83TzBGQmNFTm5RaXhYUVVGUExGZEJjME40UWl4VlFVRlZMSGxDUVVGSE8wRkJRMVFzV1VGQlNTeEpRVUZKTEVOQlFVTXNXVUZCV1N4RlFVRkZPMEZCUTI1Q0xHZENRVUZKTEVOQlFVTXNZMEZCWXl4SFFVRkhMRWxCUVVrc1EwRkJReXhWUVVGVkxFZEJRVWNzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4alFVRmpMRWRCUVVjc1EwRkJReXhEUVVGRE96dEJRVVZ3UlN4blFrRkJTU3hKUVVGSkxFTkJRVU1zWTBGQll5eEpRVUZKTEVsQlFVa3NRMEZCUXl4cFFrRkJhVUlzUlVGQlJUdEJRVU12UXl4dlFrRkJTU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzJGQlEyNUNPMU5CUTBvN1MwRkRTanM3T3pzN096dEJRVGxEWjBJc1YwRkJUeXhYUVhGRWVFSXNaVUZCWlN3NFFrRkJSenRCUVVOa0xEUkNRVU5QTEd0Q1FVRk5MR1ZCUVdVc1MwRkJRU3hOUVVGRk8wRkJRekZDTEhkQ1FVRlpMRVZCUVVVc1NVRkJTVHRCUVVOc1FpdzJRa0ZCYVVJc1JVRkJSU3hEUVVGRE8xZEJRM1JDTzB0QlEwdzdPenM3T3pzN1FVRXpSR2RDTEZkQlFVOHNWMEZyUlhoQ0xHVkJRV1VzT0VKQlFVYzdRVUZEWkN3MFFrRkRUeXhyUWtGQlRTeGxRVUZsTEV0QlFVRXNUVUZCUlR0QlFVTXhRaXgzUWtGQldTeEZRVUZGTEVOQlFVTTdRVUZEWml4clFrRkJUU3hGUVVGRkxFTkJRVU03UVVGRFZDeHJRa0ZCVFN4RlFVRkZMRU5CUVVNN1FVRkRWQ3h4UWtGQlV5eEZRVUZGTEUxQlFVMDdRVUZEYWtJc2IwSkJRVkVzUlVGQlJTeERRVUZETzBGQlFVRXNWMEZEWWp0TFFVTk1PenM3T3pzN096dEJRVE5GWjBJc1YwRkJUeXhYUVcxR2VFSXNiVUpCUVcxQ0xHdERRVUZITzBGQlEyeENMR1ZCUVU4c1ZVRkJWU3hEUVVGRE8wdEJRM0pDT3p0WFFYSkdaMElzVDBGQlR6czdPMnRDUVVGUUxFOUJRVThpTENKbWFXeGxJam9pVUdoNWMybGpjeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEZCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQkJZM1JwYjI0Z1puSnZiU0FuTGk5QlkzUnBiMjRuTzF4dWFXMXdiM0owSUhzZ2MzQmxaV1JRWlhKR2NtRnRaU0I5SUdaeWIyMGdKeTR1TDJsdVl5OWpZV3hqSnp0Y2JtbHRjRzl5ZENCN0lHbHpUblZ0SUgwZ1puSnZiU0FuTGk0dmFXNWpMM1YwYVd4ekp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdZMnhoYzNNZ1VHaDVjMmxqY3lCbGVIUmxibVJ6SUVGamRHbHZiaUI3WEc1Y2JpQWdJQ0JqYjI1emRISjFZM1J2Y2lndUxpNWhjbWR6S1NCN1hHNGdJQ0FnSUNBZ0lITjFjR1Z5S0M0dUxtRnlaM01wTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbWx1WVdOMGFYWmxSbkpoYldWeklEMGdNRHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWpZV3hqZFd4aGRHVnpWbVZzYjJOcGRIa2dQU0IwY25WbE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUc5dVZYQmtZWFJsS0hCb2VYTnBZM01zSUdaeVlXMWxVM1JoYlhBc0lHVnNZWEJ6WldRcElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1b1lYTkRhR0Z1WjJWa0lEMGdabUZzYzJVN1hHNWNiaUFnSUNBZ0lDQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0IwYUdsekxtNTFiVlpoYkhWbFMyVjVjenNnYVNzcktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0JyWlhrZ1BTQjBhR2x6TG5aaGJIVmxTMlY1YzF0cFhUdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJSFpoYkhWbElEMGdkR2hwY3k1MllXeDFaWE5iYTJWNVhUdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJSEJ5WlhacGIzVnpWbUZzZFdVZ1BTQjJZV3gxWlM1d2NtVjJPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJCY0hCc2VTQmhZMk5sYkdWeVlYUnBiMjVjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmhiSFZsTG5abGJHOWphWFI1SUNzOUlITndaV1ZrVUdWeVJuSmhiV1VvZG1Gc2RXVXVZV05qWld4bGNtRjBhVzl1TENCbGJHRndjMlZrS1R0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1FYQndiSGtnWm5KcFkzUnBiMjVjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmhiSFZsTG5abGJHOWphWFI1SUNvOUlDZ3hJQzBnZG1Gc2RXVXVabkpwWTNScGIyNHBJQ29xSUNobGJHRndjMlZrSUM4Z01UQXdLVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnUVhCd2JIa2djM0J5YVc1blhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RtRnNkV1V1YzNCeWFXNW5JQ1ltSUdselRuVnRLSFpoYkhWbExuUnZLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJR1JwYzNSaGJtTmxWRzlVWVhKblpYUWdQU0IyWVd4MVpTNTBieUF0SUhaaGJIVmxMbU4xY25KbGJuUTdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZzZFdVdWRtVnNiMk5wZEhrZ0t6MGdaR2x6ZEdGdVkyVlViMVJoY21kbGRDQXFJSE53WldWa1VHVnlSbkpoYldVb2RtRnNkV1V1YzNCeWFXNW5MQ0JsYkdGd2MyVmtLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdRWEJ3YkhrZ2JHRjBaWE4wSUhabGJHOWphWFI1WEc0Z0lDQWdJQ0FnSUNBZ0lDQjJZV3gxWlM1amRYSnlaVzUwSUNzOUlITndaV1ZrVUdWeVJuSmhiV1VvZG1Gc2RXVXVkbVZzYjJOcGRIa3NJR1ZzWVhCelpXUXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCRGFHVmpheUJwWmlCMllXeDFaU0JvWVhNZ1kyaGhibWRsWkZ4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0haaGJIVmxMbU4xY25KbGJuUWdJVDA5SUhCeVpYWnBiM1Z6Vm1Gc2RXVWdmSHdnVFdGMGFDNWhZbk1vZG1Gc2RXVXVkbVZzYjJOcGRIa3BJRDQ5SUhaaGJIVmxMbk4wYjNCVGNHVmxaQ0I4ZkNBb2RtRnNkV1V1YzNCeWFXNW5JQ1ltSUhaaGJIVmxMbU4xY25KbGJuUWdJVDA5SUhaaGJIVmxMblJ2S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YUdGelEyaGhibWRsWkNBOUlIUnlkV1U3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmlBZ0lDQnZia1p5WVcxbFJXNWtLQ2tnZTF4dUlDQWdJQ0FnSUNCcFppQW9kR2hwY3k1aGRYUnZRMjl0Y0d4bGRHVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YVc1aFkzUnBkbVZHY21GdFpYTWdQU0IwYUdsekxtaGhjME5vWVc1blpXUWdQeUF4SURvZ2RHaHBjeTVwYm1GamRHbDJaVVp5WVcxbGN5QXJJREU3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbWx1WVdOMGFYWmxSbkpoYldWeklENDlJSFJvYVhNdWJXRjRTVzVoWTNScGRtVkdjbUZ0WlhNcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG1OdmJYQnNaWFJsS0NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0F2S2x4dUlDQWdJQ0FnSUNBaklFZGxkQ0JrWldaaGRXeDBJRk5wYlhWc1lYUmxJSEJ5YjNCelhHNWNiaUFnSUNBZ0lDQWdRSEpsZEhWeWJpQmJiMkpxWldOMFhWeHVJQ0FnSUNvdlhHNGdJQ0FnWjJWMFJHVm1ZWFZzZEZCeWIzQnpLQ2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdMaTR1YzNWd1pYSXVaMlYwUkdWbVlYVnNkRkJ5YjNCektDa3NYRzRnSUNBZ0lDQWdJQ0FnSUNCaGRYUnZRMjl0Y0d4bGRHVTZJSFJ5ZFdVc1hHNGdJQ0FnSUNBZ0lDQWdJQ0J0WVhoSmJtRmpkR2wyWlVaeVlXMWxjem9nTTF4dUlDQWdJQ0FnSUNCOU8xeHVJQ0FnSUgxY2JseHVJQ0FnSUM4cVhHNGdJQ0FnSUNBZ0lDTWdSMlYwSUdSbFptRjFiSFFnVTJsdGRXeGhkR1VnZG1Gc2RXVWdjSEp2Y0hOY2JseHVJQ0FnSUNBZ0lDQkFjbVYwZFhKdUlGdHZZbXBsWTNSZFhHNGdJQ0FnS2k5Y2JpQWdJQ0JuWlhSRVpXWmhkV3gwVm1Gc2RXVW9LU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQXVMaTV6ZFhCbGNpNW5aWFJFWldaaGRXeDBWbUZzZFdVb0tTeGNiaUFnSUNBZ0lDQWdJQ0FnSUdGalkyVnNaWEpoZEdsdmJqb2dNQ3dnTHk4Z1cyNTFiV0psY2wwNklFRmpZMlZzWlhKaGRHbHZiaUIwYnlCaGNIQnNlU0IwYnlCMllXeDFaU3dnYVc0Z2RXNXBkSE1nY0dWeUlITmxZMjl1WkZ4dUlDQWdJQ0FnSUNBZ0lDQWdZbTkxYm1ObE9pQXdMQ0F2THlCYmJuVnRZbVZ5WFRvZ1JtRmpkRzl5SUhSdklHMTFiSFJwY0d4NUlIWmxiRzlqYVhSNUlHSjVJRzl1SUdKdmRXNWpaVnh1SUNBZ0lDQWdJQ0FnSUNBZ2MzQnlhVzVuT2lBd0xDQXZMeUJiYm5WdFltVnlYVG9nVTNCeWFXNW5JSE4wY21WdVozUm9JR1IxY21sdVp5QW5jM1J5YVc1bkoxeHVJQ0FnSUNBZ0lDQWdJQ0FnYzNSdmNGTndaV1ZrT2lBd0xqQXdNREVzSUM4dklGdHVkVzFpWlhKZE9pQlRkRzl3SUhOcGJYVnNZWFJwYjI0Z2RXNWtaWElnZEdocGN5QnpjR1ZsWkZ4dUlDQWdJQ0FnSUNBZ0lDQWdabkpwWTNScGIyNDZJREFnTHk4Z1cyNTFiV0psY2wwNklFWnlhV04wYVc5dUlIUnZJR0Z3Y0d4NUlIQmxjaUJtY21GdFpTd2dNQzB4WEc0Z0lDQWdJQ0FnSUgwN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHlwY2JpQWdJQ0FnSUNBZ0l5QkhaWFFnWkdWbVlYVnNkQ0JUYVcxMWJHRjBaU0IyWVd4MVpTQndjbTl3WlhKMGVTQnVZVzFsWEc0Z0lDQWdJQ0FnSUNNaklGTmxkQ0IyWVd4MVpYTWdkRzhnZEdocGN5QjNhR1Z1SUdFZ1lIWmhiSFZsWUNCcGN5QnViM1FnY0hKdmRtbGtaV1FnWVhNZ1lXNGdiMkpxWldOMFhHNWNiaUFnSUNBZ0lDQWdRSEpsZEhWeWJpQmJjM1J5YVc1blhWeHVJQ0FnSUNvdlhHNGdJQ0FnWjJWMFJHVm1ZWFZzZEZaaGJIVmxVSEp2Y0NncElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlDZDJaV3h2WTJsMGVTYzdYRzRnSUNBZ2ZWeHVmVnh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9QaHlzaWNzLmpzXG4gKiogbW9kdWxlIGlkID0gN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX0FjdGlvbjIgPSByZXF1aXJlKCcuL0FjdGlvbicpO1xuXG52YXIgX0FjdGlvbjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BY3Rpb24yKTtcblxudmFyIF9Qb2ludGVyID0gcmVxdWlyZSgnLi4vaW5wdXQvUG9pbnRlcicpO1xuXG52YXIgX1BvaW50ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUG9pbnRlcik7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLypcbiAgICBTY3JhcGUgeC95IGNvb3JkaW5hdGVzIGZyb20gcHJvdmlkZWQgZXZlbnRcblxuICAgIEBwYXJhbSBbZXZlbnRdXG4gICAgQHJldHVybiBbb2JqZWN0XVxuKi9cbnZhciBtb3VzZUV2ZW50VG9Qb2ludCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogZS5wYWdlWCxcbiAgICAgICAgeTogZS5wYWdlWVxuICAgIH07XG59O1xuXG52YXIgdG91Y2hFdmVudFRvUG9pbnQgPSBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBjaGFuZ2VkVG91Y2hlcyA9IF9yZWYuY2hhbmdlZFRvdWNoZXM7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCxcbiAgICAgICAgeTogY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WVxuICAgIH07XG59O1xuXG52YXIgY3JlYXRlUG9pbnRlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgcmV0dXJuIGUudG91Y2hlcyA/IG5ldyBfUG9pbnRlcjIuZGVmYXVsdCh0b3VjaEV2ZW50VG9Qb2ludChlKSwgJ3RvdWNobW92ZScsIHRvdWNoRXZlbnRUb1BvaW50KSA6IG5ldyBfUG9pbnRlcjIuZGVmYXVsdChtb3VzZUV2ZW50VG9Qb2ludChlKSwgJ21vdXNlbW92ZScsIG1vdXNlRXZlbnRUb1BvaW50KTtcbn07XG5cbnZhciBnZXRBY3R1YWxFdmVudCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgcmV0dXJuIGUub3JpZ2luYWxFdmVudCB8fCBlO1xufTtcblxudmFyIFRyYWNrID0gKGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gICAgX2luaGVyaXRzKFRyYWNrLCBfQWN0aW9uKTtcblxuICAgIGZ1bmN0aW9uIFRyYWNrKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHJhY2spO1xuXG4gICAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgIFRyYWNrLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uIHN0YXJ0KGlucHV0KSB7XG4gICAgICAgIF9BY3Rpb24ucHJvdG90eXBlLnN0YXJ0LmNhbGwodGhpcyk7XG5cbiAgICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0ID0gaW5wdXQuc3RhdGUgPyBpbnB1dCA6IGNyZWF0ZVBvaW50ZXIoZ2V0QWN0dWFsRXZlbnQoaW5wdXQpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW5wdXRPZmZzZXQgPSB7fTtcbiAgICAgICAgdGhpcy5pbnB1dE9yaWdpbiA9IF9leHRlbmRzKHt9LCB0aGlzLmlucHV0LnN0YXRlKTtcbiAgICAgICAgdGhpcy5pbnB1dC5zdGFydCgpO1xuICAgIH07XG5cbiAgICBUcmFjay5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAgIF9BY3Rpb24ucHJvdG90eXBlLnN0b3AuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5pbnB1dC5zdG9wKCk7XG4gICAgfTtcblxuICAgIFRyYWNrLnByb3RvdHlwZS5vblVwZGF0ZSA9IGZ1bmN0aW9uIG9uVXBkYXRlKHRyYWNrLCBmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgICAgIHRoaXMuaW5wdXRPZmZzZXQgPSAoMCwgX2NhbGMub2Zmc2V0KSh0aGlzLmlucHV0T3JpZ2luLCB0aGlzLmlucHV0LnN0YXRlKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSB0aGlzLnZhbHVlS2V5c1tpXTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuaW5wdXRPZmZzZXQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmRpcmVjdCkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gdGhpcy5pbnB1dC5zdGF0ZVtrZXldO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSB2YWx1ZS5vcmlnaW4gKyB0aGlzLmlucHV0T2Zmc2V0W2tleV07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gU21vb3RoIHZhbHVlIGlmIHdlIGhhdmUgc21vb3RoaW5nXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLnNtb290aCkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gKDAsIF9jYWxjLnNtb290aCkodmFsdWUuY3VycmVudCwgdmFsdWUucHJldiwgZWxhcHNlZCwgdmFsdWUuc21vb3RoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgVHJhY2sucHJvdG90eXBlLmdldERlZmF1bHRWYWx1ZSA9IGZ1bmN0aW9uIGdldERlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBfQWN0aW9uLnByb3RvdHlwZS5nZXREZWZhdWx0VmFsdWUuY2FsbCh0aGlzKSwge1xuICAgICAgICAgICAgYW1wOiAxLFxuICAgICAgICAgICAgZXNjYXBlQW1wOiAwLFxuICAgICAgICAgICAgZGlyZWN0OiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFRyYWNrO1xufSkoX0FjdGlvbjMuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFRyYWNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMVJ5WVdOckxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenRCUVZWQkxFbEJRVTBzYVVKQlFXbENMRWRCUVVjc1ZVRkJReXhEUVVGRE8xZEJRVTA3UVVGRE9VSXNVMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhMUVVGTE8wRkJRMVlzVTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4TFFVRkxPMHRCUTJJN1EwRkJReXhEUVVGRE96dEJRVVZJTEVsQlFVMHNhVUpCUVdsQ0xFZEJRVWM3VVVGQlJ5eGpRVUZqTEZGQlFXUXNZMEZCWXp0WFFVRlJPMEZCUXk5RExGTkJRVU1zUlVGQlJTeGpRVUZqTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1QwRkJUenRCUVVNMVFpeFRRVUZETEVWQlFVVXNZMEZCWXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFOUJRVTg3UzBGREwwSTdRMEZCUXl4RFFVRkRPenRCUVVWSUxFbEJRVTBzWVVGQllTeEhRVUZITEZWQlFVTXNRMEZCUXp0WFFVRkxMRU5CUVVNc1EwRkJReXhQUVVGUExFZEJRMnhETEhOQ1FVRlpMR2xDUVVGcFFpeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRmRCUVZjc1JVRkJSU3hwUWtGQmFVSXNRMEZCUXl4SFFVTnFSU3h6UWtGQldTeHBRa0ZCYVVJc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeFhRVUZYTEVWQlFVVXNhVUpCUVdsQ0xFTkJRVU03UTBGQlFTeERRVUZET3p0QlFVVjBSU3hKUVVGTkxHTkJRV01zUjBGQlJ5eFZRVUZETEVOQlFVTTdWMEZCU3l4RFFVRkRMRU5CUVVNc1lVRkJZU3hKUVVGSkxFTkJRVU03UTBGQlFTeERRVUZET3p0SlFVVTVRaXhMUVVGTE8yTkJRVXdzUzBGQlN6czdZVUZCVEN4TFFVRkxPemhDUVVGTUxFdEJRVXM3T3pzN08wRkJRVXdzVTBGQlN5eFhRVU4wUWl4TFFVRkxMR3RDUVVGRExFdEJRVXNzUlVGQlJUdEJRVU5VTERCQ1FVRk5MRXRCUVVzc1MwRkJRU3hOUVVGRkxFTkJRVU03TzBGQlJXUXNXVUZCU1N4TFFVRkxMRVZCUVVVN1FVRkRVQ3huUWtGQlNTeERRVUZETEV0QlFVc3NSMEZCUnl4TFFVRkxMRU5CUVVNc1MwRkJTeXhIUVVGSExFdEJRVXNzUjBGQlJ5eGhRVUZoTEVOQlFVTXNZMEZCWXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03VTBGRE0wVTdPMEZCUlVRc1dVRkJTU3hEUVVGRExGZEJRVmNzUjBGQlJ5eEZRVUZGTEVOQlFVTTdRVUZEZEVJc1dVRkJTU3hEUVVGRExGZEJRVmNzWjBKQlFWRXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVVVzUTBGQlF6dEJRVU16UXl4WlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETzB0QlEzUkNPenRCUVZoblFpeFRRVUZMTEZkQllYUkNMRWxCUVVrc2JVSkJRVWM3UVVGRFNDd3dRa0ZCVFN4SlFVRkpMRXRCUVVFc1RVRkJSU3hEUVVGRE8wRkJRMklzV1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJRenRMUVVOeVFqczdRVUZvUW1kQ0xGTkJRVXNzVjBGclFuUkNMRkZCUVZFc2NVSkJRVU1zUzBGQlN5eEZRVUZGTEZWQlFWVXNSVUZCUlN4UFFVRlBMRVZCUVVVN1FVRkRha01zV1VGQlNTeERRVUZETEZkQlFWY3NSMEZCUnl4VlFUTkRWaXhOUVVGTkxFVkJNa05YTEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXpzN1FVRkZPVVFzWVVGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eFpRVUZaTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1FVRkRlRU1zWjBKQlFVMHNSMEZCUnl4SFFVRkhMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdPMEZCUlRsQ0xHZENRVUZKTEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNc1kwRkJZeXhEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTzBGQlEzUkRMRzlDUVVGTkxFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8wRkJReTlDTEc5Q1FVRkpMRXRCUVVzc1EwRkJReXhOUVVGTkxFVkJRVVU3UVVGRFpDeDVRa0ZCU3l4RFFVRkRMRTlCUVU4c1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRwUWtGRGVrTXNUVUZCVFR0QlFVTklMSGxDUVVGTExFTkJRVU1zVDBGQlR5eEhRVUZITEV0QlFVc3NRMEZCUXl4TlFVRk5MRWRCUVVjc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0cFFrRkRlRVE3T3p0QlFVRkJMRUZCUjBRc2IwSkJRVWtzUzBGQlN5eERRVUZETEUxQlFVMHNSVUZCUlR0QlFVTmtMSGxDUVVGTExFTkJRVU1zVDBGQlR5eEhRVUZITEZWQk1VUXpRaXhOUVVGTkxFVkJNRVEwUWl4TFFVRkxMRU5CUVVNc1QwRkJUeXhGUVVGRkxFdEJRVXNzUTBGQlF5eEpRVUZKTEVWQlFVVXNUMEZCVHl4RlFVRkZMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dHBRa0ZETlVVN1lVRkRTanRUUVVOS08wdEJRMG83TzBGQmRFTm5RaXhUUVVGTExGZEJkME4wUWl4bFFVRmxMRGhDUVVGSE8wRkJRMlFzTkVKQlEwOHNhMEpCUVUwc1pVRkJaU3hMUVVGQkxFMUJRVVU3UVVGRE1VSXNaVUZCUnl4RlFVRkZMRU5CUVVNN1FVRkRUaXh4UWtGQlV5eEZRVUZGTEVOQlFVTTdRVUZEV2l4clFrRkJUU3hGUVVGRkxFdEJRVXM3VjBGRFpqdExRVU5NT3p0WFFTOURaMElzUzBGQlN6czdPMnRDUVVGTUxFdEJRVXNpTENKbWFXeGxJam9pVkhKaFkyc3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFJRWlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1FXTjBhVzl1SUdaeWIyMGdKeTR2UVdOMGFXOXVKenRjYm1sdGNHOXlkQ0JRYjJsdWRHVnlJR1p5YjIwZ0p5NHVMMmx1Y0hWMEwxQnZhVzUwWlhJbk8xeHVhVzF3YjNKMElIc2djMjF2YjNSb0xDQnZabVp6WlhRZ2ZTQm1jbTl0SUNjdUxpOXBibU12WTJGc1l5YzdYRzVjYmk4cVhHNGdJQ0FnVTJOeVlYQmxJSGd2ZVNCamIyOXlaR2x1WVhSbGN5Qm1jbTl0SUhCeWIzWnBaR1ZrSUdWMlpXNTBYRzVjYmlBZ0lDQkFjR0Z5WVcwZ1cyVjJaVzUwWFZ4dUlDQWdJRUJ5WlhSMWNtNGdXMjlpYW1WamRGMWNiaW92WEc1amIyNXpkQ0J0YjNWelpVVjJaVzUwVkc5UWIybHVkQ0E5SUNobEtTQTlQaUFvZTF4dUlDQWdJSGc2SUdVdWNHRm5aVmdzWEc0Z0lDQWdlVG9nWlM1d1lXZGxXVnh1ZlNrN1hHNWNibU52Ym5OMElIUnZkV05vUlhabGJuUlViMUJ2YVc1MElEMGdLSHNnWTJoaGJtZGxaRlJ2ZFdOb1pYTWdmU2tnUFQ0Z0tIdGNiaUFnSUNCNE9pQmphR0Z1WjJWa1ZHOTFZMmhsYzFzd1hTNWpiR2xsYm5SWUxGeHVJQ0FnSUhrNklHTm9ZVzVuWldSVWIzVmphR1Z6V3pCZExtTnNhV1Z1ZEZsY2JuMHBPMXh1WEc1amIyNXpkQ0JqY21WaGRHVlFiMmx1ZEdWeUlEMGdLR1VwSUQwK0lHVXVkRzkxWTJobGN5QS9YRzRnSUNBZ2JtVjNJRkJ2YVc1MFpYSW9kRzkxWTJoRmRtVnVkRlJ2VUc5cGJuUW9aU2tzSUNkMGIzVmphRzF2ZG1VbkxDQjBiM1ZqYUVWMlpXNTBWRzlRYjJsdWRDa2dPaUJjYmlBZ0lDQnVaWGNnVUc5cGJuUmxjaWh0YjNWelpVVjJaVzUwVkc5UWIybHVkQ2hsS1N3Z0oyMXZkWE5sYlc5MlpTY3NJRzF2ZFhObFJYWmxiblJVYjFCdmFXNTBLVHRjYmx4dVkyOXVjM1FnWjJWMFFXTjBkV0ZzUlhabGJuUWdQU0FvWlNrZ1BUNGdaUzV2Y21sbmFXNWhiRVYyWlc1MElIeDhJR1U3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdOc1lYTnpJRlJ5WVdOcklHVjRkR1Z1WkhNZ1FXTjBhVzl1SUh0Y2JpQWdJQ0J6ZEdGeWRDaHBibkIxZENrZ2UxeHVJQ0FnSUNBZ0lDQnpkWEJsY2k1emRHRnlkQ2dwTzF4dVhHNGdJQ0FnSUNBZ0lHbG1JQ2hwYm5CMWRDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVwYm5CMWRDQTlJR2x1Y0hWMExuTjBZWFJsSUQ4Z2FXNXdkWFFnT2lCamNtVmhkR1ZRYjJsdWRHVnlLR2RsZEVGamRIVmhiRVYyWlc1MEtHbHVjSFYwS1NrN1hHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0IwYUdsekxtbHVjSFYwVDJabWMyVjBJRDBnZTMwN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YVc1d2RYUlBjbWxuYVc0Z1BTQjdJQzR1TG5Sb2FYTXVhVzV3ZFhRdWMzUmhkR1VnZlR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVwYm5CMWRDNXpkR0Z5ZENncE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhOMGIzQW9LU0I3WEc0Z0lDQWdJQ0FnSUhOMWNHVnlMbk4wYjNBb0tUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1cGJuQjFkQzV6ZEc5d0tDazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2IyNVZjR1JoZEdVb2RISmhZMnNzSUdaeVlXMWxVM1JoYlhBc0lHVnNZWEJ6WldRcElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1cGJuQjFkRTltWm5ObGRDQTlJRzltWm5ObGRDaDBhR2x6TG1sdWNIVjBUM0pwWjJsdUxDQjBhR2x6TG1sdWNIVjBMbk4wWVhSbEtUdGNibHh1SUNBZ0lDQWdJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUhSb2FYTXViblZ0Vm1Gc2RXVkxaWGx6T3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUd0bGVTQTlJSFJvYVhNdWRtRnNkV1ZMWlhselcybGRPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvZEdocGN5NXBibkIxZEU5bVpuTmxkQzVvWVhOUGQyNVFjbTl3WlhKMGVTaHJaWGtwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnZG1Gc2RXVWdQU0IwYUdsekxuWmhiSFZsYzF0clpYbGRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMllXeDFaUzVrYVhKbFkzUXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnNkV1V1WTNWeWNtVnVkQ0E5SUhSb2FYTXVhVzV3ZFhRdWMzUmhkR1ZiYTJWNVhUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IyWVd4MVpTNWpkWEp5Wlc1MElEMGdkbUZzZFdVdWIzSnBaMmx1SUNzZ2RHaHBjeTVwYm5CMWRFOW1abk5sZEZ0clpYbGRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM4dklGTnRiMjkwYUNCMllXeDFaU0JwWmlCM1pTQm9ZWFpsSUhOdGIyOTBhR2x1WjF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDaDJZV3gxWlM1emJXOXZkR2dwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZzZFdVdVkzVnljbVZ1ZENBOUlITnRiMjkwYUNoMllXeDFaUzVqZFhKeVpXNTBMQ0IyWVd4MVpTNXdjbVYyTENCbGJHRndjMlZrTENCMllXeDFaUzV6Ylc5dmRHZ3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lHZGxkRVJsWm1GMWJIUldZV3gxWlNncElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIdGNiaUFnSUNBZ0lDQWdJQ0FnSUM0dUxuTjFjR1Z5TG1kbGRFUmxabUYxYkhSV1lXeDFaU2dwTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdZVzF3T2lBeExGeHVJQ0FnSUNBZ0lDQWdJQ0FnWlhOallYQmxRVzF3T2lBd0xGeHVJQ0FnSUNBZ0lDQWdJQ0FnWkdseVpXTjBPaUJtWVd4elpWeHVJQ0FnSUNBZ0lDQjlPMXh1SUNBZ0lIMWNibjFjYmlKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvVHJhY2suanNcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfbG9vcCA9IHJlcXVpcmUoJy4vbG9vcCcpO1xuXG52YXIgbG9vcCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9sb29wKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgUHJvY2VzcyA9IChmdW5jdGlvbiAoKSB7XG4gICAgLypcbiAgICAgICAgW29iamVjdF06IFByb3BlcnRpZXNcbiAgICAqL1xuXG4gICAgZnVuY3Rpb24gUHJvY2Vzcyhwcm9wcykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQcm9jZXNzKTtcblxuICAgICAgICB0aGlzLmlkID0gbG9vcC5nZXRQcm9jZXNzSWQoKTtcblxuICAgICAgICB0aGlzLl9vbkNsZWFudXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5zdG9wKCk7XG4gICAgICAgICAgICBfdGhpcy5vbkNsZWFudXAgPSB1bmRlZmluZWQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fb25BY3RpdmF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5vbkNsZWFudXAgPSBfdGhpcy5fb25DbGVhbnVwO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc2V0KHRoaXMuZ2V0RGVmYXVsdFByb3BzKCkpO1xuICAgICAgICB0aGlzLnNldChwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIFByb2Nlc3MucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIHNldChwcm9wcykge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICAgICAgICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhpc1trZXldID0gcHJvcHNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBQcm9jZXNzLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgICBsb29wLmFjdGl2YXRlKHRoaXMuaWQsIHRoaXMpO1xuXG4gICAgICAgIHRoaXMub25DbGVhbnVwID0gdGhpcy5vbkFjdGl2YXRlID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmlzQ29tcGxldGUgPSBmYWxzZTtcblxuICAgICAgICAvLyBQcml2YXRlIGBvblN0YXJ0YFxuICAgICAgICBpZiAodGhpcy5fb25TdGFydCkge1xuICAgICAgICAgICAgdGhpcy5fb25TdGFydCh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFB1YmxpYyBgb25TdGFydGBcbiAgICAgICAgaWYgKHRoaXMub25TdGFydCkge1xuICAgICAgICAgICAgdGhpcy5vblN0YXJ0KHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIFByb2Nlc3MucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICBsb29wLmRlYWN0aXZhdGUodGhpcy5pZCk7XG5cbiAgICAgICAgLy8gUHJpdmF0ZSBgb25TdG9wYFxuICAgICAgICBpZiAodGhpcy5fb25TdG9wKSB7XG4gICAgICAgICAgICB0aGlzLl9vblN0b3AodGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQdWJsaWMgYG9uU3RvcGBcbiAgICAgICAgaWYgKHRoaXMub25TdG9wKSB7XG4gICAgICAgICAgICB0aGlzLm9uU3RvcCh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBQcm9jZXNzLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gb25jZSgpIHtcbiAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgICAgICB0aGlzLm9uQWN0aXZhdGUgPSB0aGlzLl9vbkFjdGl2YXRlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgUHJvY2Vzcy5wcm90b3R5cGUuY29tcGxldGUgPSBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICAgICAgdGhpcy5zdG9wKCk7XG5cbiAgICAgICAgaWYgKHRoaXMub25Db21wbGV0ZSkge1xuICAgICAgICAgICAgdGhpcy5vbkNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgIyBHZXQgZGVmYXVsdCBBY3Rpb24gcHJvcGVydGllc1xuICAgICAgICAgQHJldHVybiBbb2JqZWN0XVxuICAgICovXG5cbiAgICBQcm9jZXNzLnByb3RvdHlwZS5nZXREZWZhdWx0UHJvcHMgPSBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgIyBFeHRlbmQgdGhpcyBQcm9jZXNzIHdpdGggbmV3IHByb3BlcnRpZXNcbiAgICAgICAgIyMgUmV0dXJucyBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBQcm9jZXNzJ3MgYHByb3RvdHlwZWAgd2l0aCBleGlzdGluZyBhbmQgbmV3IHByb3BlcnRpZXNcbiAgICAgICAgIEBwYXJhbSBbb2JqZWN0XSAob3B0aW9uYWwpXG4gICAgICAgIEByZXR1cm4gW1Byb2Nlc3NdXG4gICAgKi9cblxuICAgIFByb2Nlc3MucHJvdG90eXBlLmluaGVyaXQgPSBmdW5jdGlvbiBpbmhlcml0KHByb3BzKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXMuaWQ7XG5cbiAgICAgICAgdmFyIGluaGVyaXRlZFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHRoaXMsIFsnaWQnXSk7XG5cbiAgICAgICAgdmFyIG5ld1Byb2Nlc3MgPSBuZXcgdGhpcy5jb25zdHJ1Y3Rvcihpbmhlcml0ZWRQcm9wcyk7XG4gICAgICAgIHJldHVybiBuZXdQcm9jZXNzLnNldChwcm9wcyk7XG4gICAgfTtcblxuICAgIHJldHVybiBQcm9jZXNzO1xufSkoKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUHJvY2Vzcztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5d2NtOWpaWE56TDFCeWIyTmxjM011YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPMGxCUVZrc1NVRkJTVHM3T3pzN096czdTVUZGU3l4UFFVRlBPenM3T3p0QlFVbDRRaXhoUVVwcFFpeFBRVUZQTEVOQlNWb3NTMEZCU3l4RlFVRkZPenM3T0VKQlNrWXNUMEZCVHpzN1FVRkxjRUlzV1VGQlNTeERRVUZETEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1dVRkJXU3hGUVVGRkxFTkJRVU03TzBGQlJUbENMRmxCUVVrc1EwRkJReXhWUVVGVkxFZEJRVWNzV1VGQlRUdEJRVU53UWl4clFrRkJTeXhKUVVGSkxFVkJRVVVzUTBGQlF6dEJRVU5hTEd0Q1FVRkxMRk5CUVZNc1IwRkJSeXhUUVVGVExFTkJRVU03VTBGRE9VSXNRMEZCUXpzN1FVRkZSaXhaUVVGSkxFTkJRVU1zVjBGQlZ5eEhRVUZITzIxQ1FVRk5MRTFCUVVzc1UwRkJVeXhIUVVGSExFMUJRVXNzVlVGQlZUdFRRVUZCTEVOQlFVTTdPMEZCUlRGRUxGbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMR1ZCUVdVc1JVRkJSU3hEUVVGRExFTkJRVU03UVVGRGFrTXNXVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6czdRVUZGYUVJc1dVRkJTU3hEUVVGRExGRkJRVkVzUjBGQlJ5eExRVUZMTEVOQlFVTTdTMEZEZWtJN08wRkJiRUpuUWl4WFFVRlBMRmRCYjBKNFFpeEhRVUZITEdkQ1FVRkRMRXRCUVVzc1JVRkJSVHRCUVVOUUxHRkJRVXNzU1VGQlNTeEhRVUZITEVsQlFVa3NTMEZCU3l4RlFVRkZPMEZCUTI1Q0xHZENRVUZKTEV0QlFVc3NRMEZCUXl4alFVRmpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVU3UVVGRE0wSXNiMEpCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1lVRkRNVUk3VTBGRFNqczdRVUZGUkN4bFFVRlBMRWxCUVVrc1EwRkJRenRMUVVObU96dEJRVFZDWjBJc1YwRkJUeXhYUVRoQ2VFSXNTMEZCU3l4dlFrRkJSenRCUVVOS0xGbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6czdRVUZGTjBJc1dVRkJTU3hEUVVGRExGTkJRVk1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNWVUZCVlN4SFFVRkhMRk5CUVZNc1EwRkJRenRCUVVNM1F5eFpRVUZKTEVOQlFVTXNWVUZCVlN4SFFVRkhMRXRCUVVzN096dEJRVUZETEVGQlIzaENMRmxCUVVrc1NVRkJTU3hEUVVGRExGRkJRVkVzUlVGQlJUdEJRVU5tTEdkQ1FVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFOQlEzWkNPenM3UVVGQlFTeEJRVWRFTEZsQlFVa3NTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSVHRCUVVOa0xHZENRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xTkJRM1JDT3p0QlFVVkVMR1ZCUVU4c1NVRkJTU3hEUVVGRE8wdEJRMlk3TzBGQkwwTm5RaXhYUVVGUExGZEJhVVI0UWl4SlFVRkpMRzFDUVVGSE8wRkJRMGdzV1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRE96czdRVUZCUXl4QlFVZDZRaXhaUVVGSkxFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVTdRVUZEWkN4blFrRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0VFFVTjBRanM3TzBGQlFVRXNRVUZIUkN4WlFVRkpMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVU3UVVGRFlpeG5Ra0ZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFRRVU55UWpzN1FVRkZSQ3hsUVVGUExFbEJRVWtzUTBGQlF6dExRVU5tT3p0QlFTOUVaMElzVjBGQlR5eFhRV2xGZUVJc1NVRkJTU3h0UWtGQlJ6dEJRVU5JTEZsQlFVa3NRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJRenRCUVVOaUxGbEJRVWtzUTBGQlF5eFZRVUZWTEVkQlFVY3NTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJRenRCUVVOdVF5eGxRVUZQTEVsQlFVa3NRMEZCUXp0TFFVTm1PenRCUVhKRlowSXNWMEZCVHl4WFFYVkZlRUlzVVVGQlVTeDFRa0ZCUnp0QlFVTlFMRmxCUVVrc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF6czdRVUZGV2l4WlFVRkpMRWxCUVVrc1EwRkJReXhWUVVGVkxFVkJRVVU3UVVGRGFrSXNaMEpCUVVrc1EwRkJReXhWUVVGVkxFVkJRVVVzUTBGQlF6dFRRVU55UWp0TFFVTktPenM3T3pzN08wRkJOMFZuUWl4WFFVRlBMRmRCYjBaNFFpeGxRVUZsTERoQ1FVRkhPMEZCUTJRc1pVRkJUeXhGUVVGRkxFTkJRVU03UzBGRFlqczdPenM3T3pzN08wRkJkRVpuUWl4WFFVRlBMRmRCSzBaNFFpeFBRVUZQTEc5Q1FVRkRMRXRCUVVzc1JVRkJSVHRaUVVOSUxFVkJRVVVzUjBGQmQwSXNTVUZCU1N4RFFVRTVRaXhGUVVGRk96dFpRVUZMTEdOQlFXTXNORUpCUVVzc1NVRkJTVHM3UVVGRGRFTXNXVUZCVFN4VlFVRlZMRWRCUVVjc1NVRkJTU3hKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEdOQlFXTXNRMEZCUXl4RFFVRkRPMEZCUTNoRUxHVkJRVThzVlVGQlZTeERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRMUVVOb1F6czdWMEZ1UjJkQ0xFOUJRVTg3T3p0clFrRkJVQ3hQUVVGUElpd2labWxzWlNJNklsQnliMk5sYzNNdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUlFaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnS2lCaGN5QnNiMjl3SUdaeWIyMGdKeTR2Ykc5dmNDYzdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR05zWVhOeklGQnliMk5sYzNNZ2UxeHVJQ0FnSUM4cVhHNGdJQ0FnSUNBZ0lGdHZZbXBsWTNSZE9pQlFjbTl3WlhKMGFXVnpYRzRnSUNBZ0tpOWNiaUFnSUNCamIyNXpkSEoxWTNSdmNpaHdjbTl3Y3lrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG1sa0lEMGdiRzl2Y0M1blpYUlFjbTlqWlhOelNXUW9LVHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbDl2YmtOc1pXRnVkWEFnUFNBb0tTQTlQaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG5OMGIzQW9LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YjI1RGJHVmhiblZ3SUQwZ2RXNWtaV1pwYm1Wa08xeHVJQ0FnSUNBZ0lDQjlPMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVYMjl1UVdOMGFYWmhkR1VnUFNBb0tTQTlQaUIwYUdsekxtOXVRMnhsWVc1MWNDQTlJSFJvYVhNdVgyOXVRMnhsWVc1MWNEdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxuTmxkQ2gwYUdsekxtZGxkRVJsWm1GMWJIUlFjbTl3Y3lncEtUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1elpYUW9jSEp2Y0hNcE8xeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdWFYTkJZM1JwZG1VZ1BTQm1ZV3h6WlR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J6WlhRb2NISnZjSE1wSUh0Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2EyVjVJR2x1SUhCeWIzQnpLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvY0hKdmNITXVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2EyVjVLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTmJhMlY1WFNBOUlIQnliM0J6VzJ0bGVWMDdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3p0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J6ZEdGeWRDZ3BJSHRjYmlBZ0lDQWdJQ0FnYkc5dmNDNWhZM1JwZG1GMFpTaDBhR2x6TG1sa0xDQjBhR2x6S1R0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG05dVEyeGxZVzUxY0NBOUlIUm9hWE11YjI1QlkzUnBkbUYwWlNBOUlIVnVaR1ZtYVc1bFpEdGNiaUFnSUNBZ0lDQWdkR2hwY3k1cGMwTnZiWEJzWlhSbElEMGdabUZzYzJVN1hHNWNiaUFnSUNBZ0lDQWdMeThnVUhKcGRtRjBaU0JnYjI1VGRHRnlkR0JjYmlBZ0lDQWdJQ0FnYVdZZ0tIUm9hWE11WDI5dVUzUmhjblFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVgyOXVVM1JoY25Rb2RHaHBjeWs3WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQXZMeUJRZFdKc2FXTWdZRzl1VTNSaGNuUmdYRzRnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbTl1VTNSaGNuUXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YjI1VGRHRnlkQ2gwYUdsektUdGNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhOMGIzQW9LU0I3WEc0Z0lDQWdJQ0FnSUd4dmIzQXVaR1ZoWTNScGRtRjBaU2gwYUdsekxtbGtLVHRjYmx4dUlDQWdJQ0FnSUNBdkx5QlFjbWwyWVhSbElHQnZibE4wYjNCZ1hHNGdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxsOXZibE4wYjNBcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVYMjl1VTNSdmNDaDBhR2x6S1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQzh2SUZCMVlteHBZeUJnYjI1VGRHOXdZRnh1SUNBZ0lDQWdJQ0JwWmlBb2RHaHBjeTV2YmxOMGIzQXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YjI1VGRHOXdLSFJvYVhNcE8xeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYjI1alpTZ3BJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXpkR0Z5ZENncE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG05dVFXTjBhWFpoZEdVZ1BTQjBhR2x6TGw5dmJrRmpkR2wyWVhSbE8xeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjenRjYmlBZ0lDQjlYRzVjYmlBZ0lDQmpiMjF3YkdWMFpTZ3BJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXpkRzl3S0NrN1hHNWNiaUFnSUNBZ0lDQWdhV1lnS0hSb2FYTXViMjVEYjIxd2JHVjBaU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1dmJrTnZiWEJzWlhSbEtDazdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmlBZ0lDQXZLbHh1SUNBZ0lDQWdJQ0FqSUVkbGRDQmtaV1poZFd4MElFRmpkR2x2YmlCd2NtOXdaWEowYVdWelhHNWNiaUFnSUNBZ0lDQWdRSEpsZEhWeWJpQmJiMkpxWldOMFhWeHVJQ0FnSUNvdlhHNGdJQ0FnWjJWMFJHVm1ZWFZzZEZCeWIzQnpLQ2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZTMwN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHlwY2JpQWdJQ0FnSUNBZ0l5QkZlSFJsYm1RZ2RHaHBjeUJRY205alpYTnpJSGRwZEdnZ2JtVjNJSEJ5YjNCbGNuUnBaWE5jYmlBZ0lDQWdJQ0FnSXlNZ1VtVjBkWEp1Y3lCdVpYY2dhVzV6ZEdGdVkyVWdiMllnZEdocGN5QlFjbTlqWlhOekozTWdZSEJ5YjNSdmRIbHdaV0FnZDJsMGFDQmxlR2x6ZEdsdVp5QmhibVFnYm1WM0lIQnliM0JsY25ScFpYTmNibHh1SUNBZ0lDQWdJQ0JBY0dGeVlXMGdXMjlpYW1WamRGMGdLRzl3ZEdsdmJtRnNLVnh1SUNBZ0lDQWdJQ0JBY21WMGRYSnVJRnRRY205alpYTnpYVnh1SUNBZ0lDb3ZYRzRnSUNBZ2FXNW9aWEpwZENod2NtOXdjeWtnZTF4dUlDQWdJQ0FnSUNCamIyNXpkQ0I3SUdsa0xDQXVMaTVwYm1obGNtbDBaV1JRY205d2N5QjlJRDBnZEdocGN6dGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2JtVjNVSEp2WTJWemN5QTlJRzVsZHlCMGFHbHpMbU52Ym5OMGNuVmpkRzl5S0dsdWFHVnlhWFJsWkZCeWIzQnpLVHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJRzVsZDFCeWIyTmxjM011YzJWMEtIQnliM0J6S1R0Y2JpQWdJQ0I5WEc1OUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3Byb2Nlc3MvUHJvY2Vzcy5qc1xuICoqIG1vZHVsZSBpZCA9IDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9Qcm9jZXNzMiA9IHJlcXVpcmUoJy4uL3Byb2Nlc3MvUHJvY2VzcycpO1xuXG52YXIgX1Byb2Nlc3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUHJvY2VzczIpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIElucHV0ID0gKGZ1bmN0aW9uIChfUHJvY2Vzcykge1xuICAgIF9pbmhlcml0cyhJbnB1dCwgX1Byb2Nlc3MpO1xuXG4gICAgZnVuY3Rpb24gSW5wdXQoaW5pdGlhbFZhbHVlcywgcG9sbCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW5wdXQpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Qcm9jZXNzLmNhbGwodGhpcykpO1xuXG4gICAgICAgIF90aGlzLnN0YXRlID0gaW5pdGlhbFZhbHVlcztcblxuICAgICAgICBpZiAoKDAsIF91dGlscy5pc0Z1bmMpKHBvbGwpKSB7XG4gICAgICAgICAgICBfdGhpcy5vbkZyYW1lU3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLmxhdGVzdChfdGhpcy5wb2xsKCkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgTWFudWFsbHkgYWRkIGxhdGVzdCB2YWx1ZXNcbiAgICAgICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgICovXG5cbiAgICBJbnB1dC5wcm90b3R5cGUubGF0ZXN0ID0gZnVuY3Rpb24gbGF0ZXN0KHByb3BzKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBfZXh0ZW5kcyh7fSwgdGhpcy5zdGF0ZSwgcHJvcHMpO1xuICAgIH07XG5cbiAgICByZXR1cm4gSW5wdXQ7XG59KShfUHJvY2VzczMuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IElucHV0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm5CMWRDOUpibkIxZEM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3T3pzN096czdPenM3T3pzN096dEpRVWR4UWl4TFFVRkxPMk5CUVV3c1MwRkJTenM3UVVGRGRFSXNZVUZFYVVJc1MwRkJTeXhEUVVOV0xHRkJRV0VzUlVGQlJTeEpRVUZKTEVWQlFVVTdPRUpCUkdoQ0xFdEJRVXM3TzNGRVFVVnNRaXh0UWtGQlR6czdRVUZEVUN4alFVRkxMRXRCUVVzc1IwRkJSeXhoUVVGaExFTkJRVU03TzBGQlJUTkNMRmxCUVVrc1YwRlFTQ3hOUVVGTkxFVkJUMGtzU1VGQlNTeERRVUZETEVWQlFVVTdRVUZEWkN4clFrRkJTeXhaUVVGWkxFZEJRVWM3ZFVKQlFVMHNUVUZCU3l4TlFVRk5MRU5CUVVNc1RVRkJTeXhKUVVGSkxFVkJRVVVzUTBGQlF6dGhRVUZCTEVOQlFVTTdVMEZEZEVRN08wdEJRMG83T3pzN096dEJRVUZCTzBGQlVtZENMRk5CUVVzc1YwRmxkRUlzVFVGQlRTeHRRa0ZCUXl4TFFVRkxMRVZCUVVVN1FVRkRWaXhaUVVGSkxFTkJRVU1zUzBGQlN5eG5Ra0ZCVVN4SlFVRkpMRU5CUVVNc1MwRkJTeXhGUVVGTExFdEJRVXNzUTBGQlJTeERRVUZETzB0QlF6VkRPenRYUVdwQ1owSXNTMEZCU3pzN08ydENRVUZNTEV0QlFVc2lMQ0ptYVd4bElqb2lTVzV3ZFhRdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUlFaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnVUhKdlkyVnpjeUJtY205dElDY3VMaTl3Y205alpYTnpMMUJ5YjJObGMzTW5PMXh1YVcxd2IzSjBJSHNnYVhOR2RXNWpJSDBnWm5KdmJTQW5MaTR2YVc1akwzVjBhV3h6Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1kyeGhjM01nU1c1d2RYUWdaWGgwWlc1a2N5QlFjbTlqWlhOeklIdGNiaUFnSUNCamIyNXpkSEoxWTNSdmNpaHBibWwwYVdGc1ZtRnNkV1Z6TENCd2IyeHNLU0I3WEc0Z0lDQWdJQ0FnSUhOMWNHVnlLQ2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjM1JoZEdVZ1BTQnBibWwwYVdGc1ZtRnNkV1Z6TzF4dVhHNGdJQ0FnSUNBZ0lHbG1JQ2hwYzBaMWJtTW9jRzlzYkNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXViMjVHY21GdFpWTjBZWEowSUQwZ0tDa2dQVDRnZEdocGN5NXNZWFJsYzNRb2RHaHBjeTV3YjJ4c0tDa3BPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeXBjYmlBZ0lDQWdJQ0FnVFdGdWRXRnNiSGtnWVdSa0lHeGhkR1Z6ZENCMllXeDFaWE5jYmx4dUlDQWdJQ0FnSUNCQWNHRnlZVzBnVzI5aWFtVmpkRjFjYmlBZ0lDQXFMMXh1SUNBZ0lHeGhkR1Z6ZENod2NtOXdjeWtnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbk4wWVhSbElEMGdleUF1TGk1MGFHbHpMbk4wWVhSbExDQXVMaTV3Y205d2N5QjlPMXh1SUNBZ0lIMWNibjFjYmlKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lucHV0L0lucHV0LmpzXG4gKiogbW9kdWxlIGlkID0gMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHN0YWdnZXI7XG5cbnZhciBfVHdlZW4gPSByZXF1aXJlKCcuLi9hY3Rpb25zL1R3ZWVuJyk7XG5cbnZhciBfVHdlZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVHdlZW4pO1xuXG52YXIgX3ByZXNldEVhc2luZyA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvZWFzaW5nL3ByZXNldC1lYXNpbmcnKTtcblxudmFyIF9wcmVzZXRFYXNpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlc2V0RWFzaW5nKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIERFRkFVTFRfSU5URVJWQUwgPSAxMDA7XG5cbmZ1bmN0aW9uIHN0YWdnZXIoYXJyYXksIGNhbGxiYWNrLCBwcm9wcykge1xuICAgIHZhciBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgICB2YXIgcHJvcHNJc0ludGVydmFsID0gKDAsIF91dGlscy5pc051bSkocHJvcHMpO1xuICAgIHZhciBpbnRlcnZhbCA9IHByb3BzSXNJbnRlcnZhbCA/IHByb3BzIDogcHJvcHMuaW50ZXJ2YWwgfHwgREVGQVVMVF9JTlRFUlZBTDtcbiAgICB2YXIgcHJldkluZGV4ID0gLTE7XG5cbiAgICB2YXIgc3RhZ2dlclR3ZWVuID0gbmV3IF9Ud2VlbjIuZGVmYXVsdCh7XG4gICAgICAgIGR1cmF0aW9uOiBpbnRlcnZhbCAqIGFycmF5TGVuZ3RoLFxuICAgICAgICB2YWx1ZXM6IHtcbiAgICAgICAgICAgIGk6IHtcbiAgICAgICAgICAgICAgICBmcm9tOiAwLFxuICAgICAgICAgICAgICAgIHRvOiBhcnJheUxlbmd0aCAtIDEsXG4gICAgICAgICAgICAgICAgcm91bmQ6IHRydWUsXG4gICAgICAgICAgICAgICAgZWFzZTogcHJvcHNJc0ludGVydmFsID8gX3ByZXNldEVhc2luZzIuZGVmYXVsdC5saW5lYXIgOiBwcm9wcy5lYXNlIHx8IF9wcmVzZXRFYXNpbmcyLmRlZmF1bHQubGluZWFyXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9uUmVuZGVyOiBmdW5jdGlvbiAodHdlZW4pIHtcbiAgICAgICAgICAgIHZhciBpID0gdHdlZW4uc3RhdGUuaTtcbiAgICAgICAgICAgIHZhciBnYXBJbmRleCA9IHByZXZJbmRleCArIDE7XG5cbiAgICAgICAgICAgIGZvciAoOyBnYXBJbmRleCA8PSBpOyBnYXBJbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soYXJyYXlbZ2FwSW5kZXhdLCBnYXBJbmRleCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHByZXZJbmRleCA9IGk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ29tcGxldGU6IHByb3BzSXNJbnRlcnZhbCA/IHVuZGVmaW5lZCA6IHByb3BzLm9uQ29tcGxldGVcbiAgICB9KTtcblxuICAgIHN0YWdnZXJUd2Vlbi5zdGFydCgpO1xuXG4gICAgcmV0dXJuIHN0YWdnZXJUd2Vlbjtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJtTXZjM1JoWjJkbGNpNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3YTBKQlRYZENMRTlCUVU4N096czdPenM3T3pzN096czdPMEZCUmk5Q0xFbEJRVTBzWjBKQlFXZENMRWRCUVVjc1IwRkJSeXhEUVVGRE96dEJRVVZrTEZOQlFWTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1JVRkJSU3hSUVVGUkxFVkJRVVVzUzBGQlN5eEZRVUZGTzBGQlEzQkVMRkZCUVUwc1YwRkJWeXhIUVVGSExFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTTdRVUZEYWtNc1VVRkJUU3hsUVVGbExFZEJRVWNzVjBGT2JrSXNTMEZCU3l4RlFVMXZRaXhMUVVGTExFTkJRVU1zUTBGQlF6dEJRVU55UXl4UlFVRk5MRkZCUVZFc1IwRkJSeXhsUVVGbExFZEJRVWNzUzBGQlN5eEhRVUZITEV0QlFVc3NRMEZCUXl4UlFVRlJMRWxCUVVrc1owSkJRV2RDTEVOQlFVTTdRVUZET1VVc1VVRkJTU3hUUVVGVExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdPMEZCUlc1Q0xGRkJRVTBzV1VGQldTeEhRVUZITEc5Q1FVRlZPMEZCUXpOQ0xHZENRVUZSTEVWQlFVVXNVVUZCVVN4SFFVRkhMRmRCUVZjN1FVRkRhRU1zWTBGQlRTeEZRVUZGTzBGQlEwb3NZVUZCUXl4RlFVRkZPMEZCUTBNc2IwSkJRVWtzUlVGQlJTeERRVUZETzBGQlExQXNhMEpCUVVVc1JVRkJSU3hYUVVGWExFZEJRVWNzUTBGQlF6dEJRVU51UWl4eFFrRkJTeXhGUVVGRkxFbEJRVWs3UVVGRFdDeHZRa0ZCU1N4RlFVRkZMR1ZCUVdVc1IwRkJSeXgxUWtGQlR5eE5RVUZOTEVkQlFVY3NTMEZCU3l4RFFVRkRMRWxCUVVrc1NVRkJTU3gxUWtGQlR5eE5RVUZOTzJGQlEzUkZPMU5CUTBvN1FVRkRSQ3huUWtGQlVTeEZRVUZGTEZWQlFVTXNTMEZCU3l4RlFVRkxPMEZCUTJwQ0xHZENRVUZOTEVOQlFVTXNSMEZCUnl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU40UWl4blFrRkJTU3hSUVVGUkxFZEJRVWNzVTBGQlV5eEhRVUZITEVOQlFVTXNRMEZCUXpzN1FVRkZOMElzYlVKQlFVOHNVVUZCVVN4SlFVRkpMRU5CUVVNc1JVRkJSU3hSUVVGUkxFVkJRVVVzUlVGQlJUdEJRVU01UWl4M1FrRkJVU3hEUVVGRExFdEJRVXNzUTBGQlF5eFJRVUZSTEVOQlFVTXNSVUZCUlN4UlFVRlJMRU5CUVVNc1EwRkJRenRoUVVOMlF6czdRVUZGUkN4eFFrRkJVeXhIUVVGSExFTkJRVU1zUTBGQlF6dFRRVU5xUWp0QlFVTkVMR3RDUVVGVkxFVkJRVVVzWlVGQlpTeEhRVUZITEZOQlFWTXNSMEZCUnl4TFFVRkxMRU5CUVVNc1ZVRkJWVHRMUVVNM1JDeERRVUZETEVOQlFVTTdPMEZCUlVnc1owSkJRVmtzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXpzN1FVRkZja0lzVjBGQlR5eFpRVUZaTEVOQlFVTTdRMEZEZGtJaUxDSm1hV3hsSWpvaWMzUmhaMmRsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRGQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0JVZDJWbGJpQm1jbTl0SUNjdUxpOWhZM1JwYjI1ekwxUjNaV1Z1Snp0Y2JtbHRjRzl5ZENCbFlYTnBibWNnWm5KdmJTQW5MaTR2WVdOMGFXOXVjeTlsWVhOcGJtY3ZjSEpsYzJWMExXVmhjMmx1WnljN1hHNXBiWEJ2Y25RZ2V5QnBjMDUxYlNCOUlHWnliMjBnSnk0dmRYUnBiSE1uTzF4dVhHNWpiMjV6ZENCRVJVWkJWVXhVWDBsT1ZFVlNWa0ZNSUQwZ01UQXdPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JtZFc1amRHbHZiaUJ6ZEdGbloyVnlLR0Z5Y21GNUxDQmpZV3hzWW1GamF5d2djSEp2Y0hNcElIdGNiaUFnSUNCamIyNXpkQ0JoY25KaGVVeGxibWQwYUNBOUlHRnljbUY1TG14bGJtZDBhRHRjYmlBZ0lDQmpiMjV6ZENCd2NtOXdjMGx6U1c1MFpYSjJZV3dnUFNCcGMwNTFiU2h3Y205d2N5azdYRzRnSUNBZ1kyOXVjM1FnYVc1MFpYSjJZV3dnUFNCd2NtOXdjMGx6U1c1MFpYSjJZV3dnUHlCd2NtOXdjeUE2SUhCeWIzQnpMbWx1ZEdWeWRtRnNJSHg4SUVSRlJrRlZURlJmU1U1VVJWSldRVXc3WEc0Z0lDQWdiR1YwSUhCeVpYWkpibVJsZUNBOUlDMHhPMXh1WEc0Z0lDQWdZMjl1YzNRZ2MzUmhaMmRsY2xSM1pXVnVJRDBnYm1WM0lGUjNaV1Z1S0h0Y2JpQWdJQ0FnSUNBZ1pIVnlZWFJwYjI0NklHbHVkR1Z5ZG1Gc0lDb2dZWEp5WVhsTVpXNW5kR2dzWEc0Z0lDQWdJQ0FnSUhaaGJIVmxjem9nZTF4dUlDQWdJQ0FnSUNBZ0lDQWdhVG9nZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdaeWIyMDZJREFzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEc4NklHRnljbUY1VEdWdVozUm9JQzBnTVN4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeWIzVnVaRG9nZEhKMVpTeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmxZWE5sT2lCd2NtOXdjMGx6U1c1MFpYSjJZV3dnUHlCbFlYTnBibWN1YkdsdVpXRnlJRG9nY0hKdmNITXVaV0Z6WlNCOGZDQmxZWE5wYm1jdWJHbHVaV0Z5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDBzWEc0Z0lDQWdJQ0FnSUc5dVVtVnVaR1Z5T2lBb2RIZGxaVzRwSUQwK0lIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJR2tnUFNCMGQyVmxiaTV6ZEdGMFpTNXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2JHVjBJR2RoY0VsdVpHVjRJRDBnY0hKbGRrbHVaR1Y0SUNzZ01UdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ1ptOXlJQ2c3SUdkaGNFbHVaR1Y0SUR3OUlHazdJR2RoY0VsdVpHVjRLeXNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCallXeHNZbUZqYXloaGNuSmhlVnRuWVhCSmJtUmxlRjBzSUdkaGNFbHVaR1Y0S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdjSEpsZGtsdVpHVjRJRDBnYVR0Y2JpQWdJQ0FnSUNBZ2ZTeGNiaUFnSUNBZ0lDQWdiMjVEYjIxd2JHVjBaVG9nY0hKdmNITkpjMGx1ZEdWeWRtRnNJRDhnZFc1a1pXWnBibVZrSURvZ2NISnZjSE11YjI1RGIyMXdiR1YwWlZ4dUlDQWdJSDBwTzF4dVhHNGdJQ0FnYzNSaFoyZGxjbFIzWldWdUxuTjBZWEowS0NrN1hHNWNiaUFnSUNCeVpYUjFjbTRnYzNSaFoyZGxjbFIzWldWdU8xeHVmU0pkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL3N0YWdnZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdGltZWxpbmU7XG5cbnZhciBfVHdlZW4gPSByZXF1aXJlKCcuLi9hY3Rpb25zL1R3ZWVuJyk7XG5cbnZhciBfVHdlZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVHdlZW4pO1xuXG52YXIgX3ByZXNldEVhc2luZyA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvZWFzaW5nL3ByZXNldC1lYXNpbmcnKTtcblxudmFyIF9wcmVzZXRFYXNpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlc2V0RWFzaW5nKTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi9jYWxjJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qXG4gICAgQHBhcmFtIFthcnJheV1cbiAgICAgICAgU2VxdWVudGlhbCBhcnJheSBvZiB0d2VlbnMsIGVhY2ggaXRlbSBjYW4gYmUgYSB0d2VlbiBvciBkZWZpbml0aW9uIG9iajpcblxuICAgICAgICBbXG4gICAgICAgICAgICBuZXcgVHdlZW4oKSxcbiAgICAgICAgICAgIHN0YWdnZXIoKSxcbiAgICAgICAgICAgIHRpbWVsaW5lKCksXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHdlZW46IG5ldyBUd2VlbigpLFxuICAgICAgICAgICAgICAgIGF0OiAxMDAsXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiBcIis9MTAwXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuKi9cbnZhciBhbmFseXplID0gZnVuY3Rpb24gKGRlZnMpIHtcbiAgICB2YXIgdGltZWxpbmUgPSBbXTtcbiAgICB2YXIgbnVtRGVmcyA9IGRlZnMubGVuZ3RoO1xuICAgIHZhciBjdXJyZW50UGxheWhlYWQgPSAwO1xuXG4gICAgdmFyIF9sb29wID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgdmFyIGRlZiA9IGRlZnNbaV07XG4gICAgICAgIHZhciBkZWZJc09iaiA9IGRlZi50d2VlbiA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgdmFyIHR3ZWVuID0gZGVmSXNPYmogPyBkZWYudHdlZW4gOiBkZWY7XG5cbiAgICAgICAgY3VycmVudFBsYXloZWFkICs9IGRlZklzT2JqICYmIGRlZi5vZmZzZXQgPyBkZWYuYXQgfHwgKDAsIF9jYWxjLnJlbGF0aXZlVmFsdWUpKGN1cnJlbnRQbGF5aGVhZCwgZGVmLm9mZnNldCkgOiAwO1xuXG4gICAgICAgIHZhciBkdXJhdGlvbiA9IDA7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiB0d2Vlbi52YWx1ZXMpIHtcbiAgICAgICAgICAgIGlmICh0d2Vlbi52YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHR3ZWVuLnZhbHVlc1trZXldO1xuICAgICAgICAgICAgICAgIGR1cmF0aW9uID0gTWF0aC5tYXgoZHVyYXRpb24sIHZhbHVlLmR1cmF0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRpbWVsaW5lLnB1c2goe1xuICAgICAgICAgICAgZnJvbTogY3VycmVudFBsYXloZWFkLFxuICAgICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgICAgICAgZmlyZTogZnVuY3Rpb24gKHRpbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHdlZW4uc2Vla1RpbWUodGltZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGN1cnJlbnRQbGF5aGVhZCArPSB0d2Vlbi5kdXJhdGlvbjtcbiAgICB9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1EZWZzOyBpKyspIHtcbiAgICAgICAgX2xvb3AoaSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgdG90YWxUaW1lOiBjdXJyZW50UGxheWhlYWQsIHRpbWVsaW5lOiB0aW1lbGluZSB9O1xufTtcblxudmFyIHNldFR3ZWVucyA9IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIGVsYXBzZWQgPSBfcmVmLmVsYXBzZWQ7XG4gICAgdmFyIHRpbWVsaW5lID0gX3JlZi50aW1lbGluZTtcbiAgICB2YXIgdGltZWxpbmVMZW5ndGggPSBfcmVmLnRpbWVsaW5lTGVuZ3RoO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aW1lbGluZUxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBfdHdlZW4gPSB0aW1lbGluZVtpXTtcbiAgICAgICAgdmFyIHR3ZWVuVGltZSA9IGVsYXBzZWQgLSBfdHdlZW4uZnJvbTtcblxuICAgICAgICBpZiAodHdlZW5UaW1lID4gMCAmJiB0d2VlblRpbWUgPCBfdHdlZW4uZHVyYXRpb24pIHtcbiAgICAgICAgICAgIF90d2Vlbi5maXJlKHR3ZWVuVGltZSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5mdW5jdGlvbiB0aW1lbGluZShkZWYpIHtcbiAgICB2YXIgcHJvcHMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1sxXTtcblxuICAgIHZhciBfYW5hbHl6ZSA9IGFuYWx5emUoZGVmKTtcblxuICAgIHZhciB0b3RhbFRpbWUgPSBfYW5hbHl6ZS50b3RhbFRpbWU7XG4gICAgdmFyIHRpbWVsaW5lID0gX2FuYWx5emUudGltZWxpbmU7XG5cbiAgICByZXR1cm4gbmV3IF9Ud2VlbjIuZGVmYXVsdChfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgICAgZHVyYXRpb246IHRvdGFsVGltZSxcbiAgICAgICAgZWFzZTogX3ByZXNldEVhc2luZzIuZGVmYXVsdC5saW5lYXIsXG4gICAgICAgIHZhbHVlczoge1xuICAgICAgICAgICAgcDogMVxuICAgICAgICB9LFxuICAgICAgICB0aW1lbGluZTogdGltZWxpbmUsXG4gICAgICAgIHRpbWVsaW5lTGVuZ3RoOiB0aW1lbGluZS5sZW5ndGgsXG4gICAgICAgIG9uUmVuZGVyOiBzZXRUd2VlbnNcbiAgICB9KSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12ZEdsdFpXeHBibVV1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdhMEpCSzBSM1FpeFJRVUZST3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3p0QlFUVkRhRU1zU1VGQlRTeFBRVUZQTEVkQlFVY3NWVUZCUXl4SlFVRkpMRVZCUVVzN1FVRkRkRUlzVVVGQlRTeFJRVUZSTEVkQlFVY3NSVUZCUlN4RFFVRkRPMEZCUTNCQ0xGRkJRVTBzVDBGQlR5eEhRVUZITEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNN1FVRkROVUlzVVVGQlNTeGxRVUZsTEVkQlFVY3NRMEZCUXl4RFFVRkRPenN3UWtGRlppeERRVUZETzBGQlEwNHNXVUZCVFN4SFFVRkhMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBGQlEzQkNMRmxCUVUwc1VVRkJVU3hIUVVGSExFZEJRVWNzUTBGQlF5eExRVUZMTEVkQlFVY3NTVUZCU1N4SFFVRkhMRXRCUVVzc1EwRkJRenRCUVVNeFF5eFpRVUZOTEV0QlFVc3NSMEZCUnl4QlFVRkRMRkZCUVZFc1IwRkJTU3hIUVVGSExFTkJRVU1zUzBGQlN5eEhRVUZITEVkQlFVY3NRMEZCUXpzN1FVRkZNME1zZFVKQlFXVXNTVUZCU3l4QlFVRkRMRkZCUVZFc1NVRkJTU3hIUVVGSExFTkJRVU1zVFVGQlRTeEhRVU4yUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hKUVVGSkxGVkJOVUppTEdGQlFXRXNSVUUwUW1Nc1pVRkJaU3hGUVVGRkxFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRUZCUVVNc1EwRkJRenM3UVVGRk9VUXNXVUZCU1N4UlFVRlJMRWRCUVVjc1EwRkJReXhEUVVGRE8wRkJRMnBDTEdGQlFVc3NTVUZCU1N4SFFVRkhMRWxCUVVrc1MwRkJTeXhEUVVGRExFMUJRVTBzUlVGQlJUdEJRVU14UWl4blFrRkJTU3hMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEdOQlFXTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSVHRCUVVOc1F5eHZRa0ZCVFN4TFFVRkxMRWRCUVVjc1MwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0QlFVTm9ReXgzUWtGQlVTeEhRVUZITEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1VVRkJVU3hGUVVGRkxFdEJRVXNzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0aFFVTnFSRHRUUVVOS096dEJRVVZFTEdkQ1FVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRE8wRkJRMVlzWjBKQlFVa3NSVUZCUlN4bFFVRmxPMEZCUTNKQ0xHOUNRVUZSTEVWQlFVVXNVVUZCVVR0QlFVTnNRaXhuUWtGQlNTeEZRVUZGTEZWQlFVTXNTVUZCU1R0MVFrRkJTeXhMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXp0aFFVRkJPMU5CUTNaRExFTkJRVU1zUTBGQlF6czdRVUZGU0N4MVFrRkJaU3hKUVVGSkxFdEJRVXNzUTBGQlF5eFJRVUZSTEVOQlFVTTdPenRCUVhSQ2RFTXNVMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEU5QlFVOHNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRqUVVGNlFpeERRVUZETzB0QmRVSlVPenRCUVVWRUxGZEJRVThzUlVGQlJTeFRRVUZUTEVWQlFVVXNaVUZCWlN4RlFVRkZMRkZCUVZFc1JVRkJVaXhSUVVGUkxFVkJRVVVzUTBGQlF6dERRVU51UkN4RFFVRkRPenRCUVVWR0xFbEJRVTBzVTBGQlV5eEhRVUZITEdkQ1FVRXlRenRSUVVGNFF5eFBRVUZQTEZGQlFWQXNUMEZCVHp0UlFVRkZMRkZCUVZFc1VVRkJVaXhSUVVGUk8xRkJRVVVzWTBGQll5eFJRVUZrTEdOQlFXTTdPMEZCUTJ4RUxGTkJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhqUVVGakxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdRVUZEY2tNc1dVRkJUU3hOUVVGTExFZEJRVWNzVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUXpGQ0xGbEJRVTBzVTBGQlV5eEhRVUZITEU5QlFVOHNSMEZCUnl4TlFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRE96dEJRVVYyUXl4WlFVRkpMRk5CUVZNc1IwRkJSeXhEUVVGRExFbEJRVWtzVTBGQlV5eEhRVUZITEUxQlFVc3NRMEZCUXl4UlFVRlJMRVZCUVVVN1FVRkROME1zYTBKQlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU03VTBGRGVrSTdTMEZEU2p0RFFVTktMRU5CUVVNN08wRkJSV0VzVTBGQlV5eFJRVUZSTEVOQlFVTXNSMEZCUnl4RlFVRmpPMUZCUVZvc1MwRkJTeXg1UkVGQlJ5eEZRVUZGT3p0dFFrRkRXaXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZET3p0UlFVRndReXhUUVVGVExGbEJRVlFzVTBGQlV6dFJRVUZGTEZGQlFWRXNXVUZCVWl4UlFVRlJPenRCUVVVelFpeFhRVUZQTEdsRFFVTkJMRXRCUVVzN1FVRkRVaXhuUWtGQlVTeEZRVUZGTEZOQlFWTTdRVUZEYmtJc1dVRkJTU3hGUVVGRkxIVkNRVUZQTEUxQlFVMDdRVUZEYmtJc1kwRkJUU3hGUVVGRk8wRkJRMG9zWVVGQlF5eEZRVUZGTEVOQlFVTTdVMEZEVUR0QlFVTkVMR2RDUVVGUkxFVkJRVVVzVVVGQlVUdEJRVU5zUWl4elFrRkJZeXhGUVVGRkxGRkJRVkVzUTBGQlF5eE5RVUZOTzBGQlF5OUNMR2RDUVVGUkxFVkJRVVVzVTBGQlV6dFBRVU55UWl4RFFVRkRPME5CUTA0aUxDSm1hV3hsSWpvaWRHbHRaV3hwYm1VdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUlFaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnVkhkbFpXNGdabkp2YlNBbkxpNHZZV04wYVc5dWN5OVVkMlZsYmljN1hHNXBiWEJ2Y25RZ1pXRnphVzVuSUdaeWIyMGdKeTR1TDJGamRHbHZibk12WldGemFXNW5MM0J5WlhObGRDMWxZWE5wYm1jbk8xeHVhVzF3YjNKMElIc2djbVZzWVhScGRtVldZV3gxWlNCOUlHWnliMjBnSnk0dlkyRnNZeWM3WEc1Y2JpOHFYRzRnSUNBZ1FIQmhjbUZ0SUZ0aGNuSmhlVjFjYmlBZ0lDQWdJQ0FnVTJWeGRXVnVkR2xoYkNCaGNuSmhlU0J2WmlCMGQyVmxibk1zSUdWaFkyZ2dhWFJsYlNCallXNGdZbVVnWVNCMGQyVmxiaUJ2Y2lCa1pXWnBibWwwYVc5dUlHOWlhanBjYmx4dUlDQWdJQ0FnSUNCYlhHNGdJQ0FnSUNBZ0lDQWdJQ0J1WlhjZ1ZIZGxaVzRvS1N4Y2JpQWdJQ0FnSUNBZ0lDQWdJSE4wWVdkblpYSW9LU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lIUnBiV1ZzYVc1bEtDa3NYRzRnSUNBZ0lDQWdJQ0FnSUNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RIZGxaVzQ2SUc1bGR5QlVkMlZsYmlncExGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHRjBPaUF4TURBc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2IyWm1jMlYwT2lCY0lpczlNVEF3WENKY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnWFZ4dUtpOWNibU52Ym5OMElHRnVZV3g1ZW1VZ1BTQW9aR1ZtY3lrZ1BUNGdlMXh1SUNBZ0lHTnZibk4wSUhScGJXVnNhVzVsSUQwZ1cxMDdYRzRnSUNBZ1kyOXVjM1FnYm5WdFJHVm1jeUE5SUdSbFpuTXViR1Z1WjNSb08xeHVJQ0FnSUd4bGRDQmpkWEp5Wlc1MFVHeGhlV2hsWVdRZ1BTQXdPMXh1WEc0Z0lDQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0J1ZFcxRVpXWnpPeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ1pHVm1JRDBnWkdWbWMxdHBYVHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdaR1ZtU1hOUFltb2dQU0JrWldZdWRIZGxaVzRnUHlCMGNuVmxJRG9nWm1Gc2MyVTdYRzRnSUNBZ0lDQWdJR052Ym5OMElIUjNaV1Z1SUQwZ0tHUmxaa2x6VDJKcUtTQS9JR1JsWmk1MGQyVmxiaUE2SUdSbFpqdGNibHh1SUNBZ0lDQWdJQ0JqZFhKeVpXNTBVR3hoZVdobFlXUWdLejBnS0Noa1pXWkpjMDlpYWlBbUppQmtaV1l1YjJabWMyVjBLU0EvWEc0Z0lDQWdJQ0FnSUNBZ0lDQmtaV1l1WVhRZ2ZId2djbVZzWVhScGRtVldZV3gxWlNoamRYSnlaVzUwVUd4aGVXaGxZV1FzSUdSbFppNXZabVp6WlhRcElEb2dNQ2s3WEc1Y2JpQWdJQ0FnSUNBZ2JHVjBJR1IxY21GMGFXOXVJRDBnTUR0Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2EyVjVJR2x1SUhSM1pXVnVMblpoYkhWbGN5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFIzWldWdUxuWmhiSFZsY3k1b1lYTlBkMjVRY205d1pYSjBlU2hyWlhrcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2RtRnNkV1VnUFNCMGQyVmxiaTUyWVd4MVpYTmJhMlY1WFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCa2RYSmhkR2x2YmlBOUlFMWhkR2d1YldGNEtHUjFjbUYwYVc5dUxDQjJZV3gxWlM1a2RYSmhkR2x2YmlrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQjBhVzFsYkdsdVpTNXdkWE5vS0h0Y2JpQWdJQ0FnSUNBZ0lDQWdJR1p5YjIwNklHTjFjbkpsYm5SUWJHRjVhR1ZoWkN4Y2JpQWdJQ0FnSUNBZ0lDQWdJR1IxY21GMGFXOXVPaUJrZFhKaGRHbHZiaXhjYmlBZ0lDQWdJQ0FnSUNBZ0lHWnBjbVU2SUNoMGFXMWxLU0E5UGlCMGQyVmxiaTV6WldWclZHbHRaU2gwYVcxbEtWeHVJQ0FnSUNBZ0lDQjlLVHRjYmx4dUlDQWdJQ0FnSUNCamRYSnlaVzUwVUd4aGVXaGxZV1FnS3owZ2RIZGxaVzR1WkhWeVlYUnBiMjQ3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjbVYwZFhKdUlIc2dkRzkwWVd4VWFXMWxPaUJqZFhKeVpXNTBVR3hoZVdobFlXUXNJSFJwYldWc2FXNWxJSDA3WEc1OU8xeHVYRzVqYjI1emRDQnpaWFJVZDJWbGJuTWdQU0FvZXlCbGJHRndjMlZrTENCMGFXMWxiR2x1WlN3Z2RHbHRaV3hwYm1WTVpXNW5kR2dnZlNrZ1BUNGdlMXh1SUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2dkR2x0Wld4cGJtVk1aVzVuZEdnN0lHa3JLeWtnZTF4dUlDQWdJQ0FnSUNCamIyNXpkQ0IwZDJWbGJpQTlJSFJwYldWc2FXNWxXMmxkTzF4dUlDQWdJQ0FnSUNCamIyNXpkQ0IwZDJWbGJsUnBiV1VnUFNCbGJHRndjMlZrSUMwZ2RIZGxaVzR1Wm5KdmJUdGNibHh1SUNBZ0lDQWdJQ0JwWmlBb2RIZGxaVzVVYVcxbElENGdNQ0FtSmlCMGQyVmxibFJwYldVZ1BDQjBkMlZsYmk1a2RYSmhkR2x2YmlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEhkbFpXNHVabWx5WlNoMGQyVmxibFJwYldVcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVmVHRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnWm5WdVkzUnBiMjRnZEdsdFpXeHBibVVvWkdWbUxDQndjbTl3Y3lBOUlIdDlLU0I3WEc0Z0lDQWdZMjl1YzNRZ2V5QjBiM1JoYkZScGJXVXNJSFJwYldWc2FXNWxJSDBnUFNCaGJtRnNlWHBsS0dSbFppazdYRzVjYmlBZ0lDQnlaWFIxY200Z2JtVjNJRlIzWldWdUtIdGNiaUFnSUNBZ0lDQWdMaTR1Y0hKdmNITXNYRzRnSUNBZ0lDQWdJR1IxY21GMGFXOXVPaUIwYjNSaGJGUnBiV1VzWEc0Z0lDQWdJQ0FnSUdWaGMyVTZJR1ZoYzJsdVp5NXNhVzVsWVhJc1hHNGdJQ0FnSUNBZ0lIWmhiSFZsY3pvZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY0RvZ01WeHVJQ0FnSUNBZ0lDQjlMRnh1SUNBZ0lDQWdJQ0IwYVcxbGJHbHVaVG9nZEdsdFpXeHBibVVzWEc0Z0lDQWdJQ0FnSUhScGJXVnNhVzVsVEdWdVozUm9PaUIwYVcxbGJHbHVaUzVzWlc1bmRHZ3NYRzRnSUNBZ0lDQWdJRzl1VW1WdVpHVnlPaUJ6WlhSVWQyVmxibk5jYmlBZ0lDQjlLVHRjYm4waVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy90aW1lbGluZS5qc1xuICoqIG1vZHVsZSBpZCA9IDEyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLypcbiAgICAjIEFkYXB0ZXIgY2xhc3NcbiAgICAjIyBQcm92aWRlcyBhIGdldHRlci9zZXR0ZXIgd3JhcHBlciBhbmQgcHJvcGVydHkgY2FjaGUgZm9yIGRpZmZlcmVudCBlbGVtZW50IHR5cGVzXG5cbiAgICBPdmVycmlkZSBgZ2V0dGVyYCBhbmQgYHNldHRlcmAgdG8gcmVpbXBsZW1lbnQgdGhlIGludGVyZmFjZSBmb3IgbmV3IGVsZW1lbnQgdHlwZXMuXG5cbiAgICBTZXQgYEV4dGVuZGVkLnByb3RvdHlwZS5zdGF0ZU1hcGAgYXMgYW4gb2JqZWN0IGtleS92YWx1ZSBtYXAgdG8gdHJhbnNsYXRlIGluY29taW5nIGtleXMgdG9cbiAgICBBUEktc3BlY2lmaWMga2V5cy4gRm9yIGluc3RhbmNlLCB7IHg6ICd0cmFuc2xhdGVYJyB9LiBcblxuICAgIFNldCBgRXh0ZW5kZWQucHJvdG90eXBlLnZhbHVlVHlwZU1hcGAgYXMgYW4gb2JqZWN0IGtleS92YWx1ZSBtYXAgdG8gcmV0dXJuIGEgdmFsdWUgdHlwZSB3aXRoXG4gICAgYGdldFZhbHVlVHlwZShrZXkpYCAoa2V5IHdpbGwgYmUgbWFwcGVkIGFjY29yZGluZyB0byBgc3RhdGVNYXBgKVxuKi9cblxudmFyIEFkYXB0ZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEFkYXB0ZXIoZWxlbWVudCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQWRhcHRlcik7XG5cbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5jYWNoZSA9IHt9O1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIEdldCBlbGVtZW50IHByb3BlcnR5XG4gICAgICAgICBAcGFyYW0gW3N0cmluZ106IEtleSB0byByZWFkXG4gICAgICAgIEBwYXJhbSBbYm9vbGVhbl06IElmIGB0cnVlYCwgd2lsbCBvdmVycmlkZSBjYWNoZWQgcHJvcGVydHlcbiAgICAqL1xuXG4gICAgQWRhcHRlci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gZ2V0KGtleSwgcmVmcmVzaCkge1xuICAgICAgICB2YXIgbWFwcGVkS2V5ID0gdGhpcy5tYXBTdGF0ZUtleShrZXkpO1xuXG4gICAgICAgIGlmIChyZWZyZXNoIHx8ICF0aGlzLmNhY2hlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNhY2hlW21hcHBlZEtleV0gPSB0aGlzLmdldHRlcihtYXBwZWRLZXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVbbWFwcGVkS2V5XTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKlxuICAgICAgICBTZXQgZWxlbWVudCBwcm9wZXJ0aWVzXG4gICAgICAgICBAcGFyYW0gW29iamVjdF06IEtleS92YWx1ZSBwcm9wZXJ0aWVzIHRvIHNldFxuICAgICovXG5cbiAgICBBZGFwdGVyLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiBzZXQocHJvcHMpIHtcbiAgICAgICAgLy8gVHJhbnNsYXRlIHByb3BzXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wcykge1xuICAgICAgICAgICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWFwcGVkS2V5ID0gdGhpcy5tYXBTdGF0ZUtleShrZXkpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVbbWFwcGVkS2V5XSA9IHByb3BzW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5zZXR0ZXIodGhpcy5jYWNoZSk7XG4gICAgfTtcblxuICAgIC8qXG4gICAgICAgIE92ZXJyaWRhYmxlIGVsZW1lbnQgZ2V0dGVyIC0gZGVmYXVsdCBmb3IgcGxhaW4gb2JqZWN0IFxuICAgICovXG5cbiAgICBBZGFwdGVyLnByb3RvdHlwZS5nZXR0ZXIgPSBmdW5jdGlvbiBnZXR0ZXIoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnRba2V5XTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgT3ZlcnJpZGFibGUgZWxlbWVudCBzZXR0ZXIgLSBkZWZhdWx0IGZvciBwbGFpbiBvYmplY3RcbiAgICAqL1xuXG4gICAgQWRhcHRlci5wcm90b3R5cGUuc2V0dGVyID0gZnVuY3Rpb24gc2V0dGVyKHByb3BzKSB7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wcykge1xuICAgICAgICAgICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRba2V5XSA9IHByb3BzW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgTWFwIHN0YXRlIGtleSBhcyBwZXIgYHN0YXRlTWFwYCwgaWYgcHJlc2VudFxuICAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBLZXkgdG8gbWFwXG4gICAgICAgIEByZXR1cm4gW3N0cmluZ106IE1hcHBlZCBrZXksIG9yIG9yaWdpbmFsIGtleSBpZiBub25lIGZvdW5kXG4gICAgKi9cblxuICAgIEFkYXB0ZXIucHJvdG90eXBlLm1hcFN0YXRlS2V5ID0gZnVuY3Rpb24gbWFwU3RhdGVLZXkoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlTWFwID8gdGhpcy5zdGF0ZU1hcFtrZXldIHx8IGtleSA6IGtleTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgR2V0IHZhbHVlVHlwZSBvZiBwcm92aWRlZCBrZXlcbiAgICAgICAgIEBwYXJhbSBbc3RyaW5nXTogTmFtZSBvZiBwcm9wZXJ0eSB0byBtYXBcbiAgICAgICAgQHJldHVybiBbdmFsdWVUeXBlXTogVmFsdWUgdHlwZSBvZiBwcm9wZXJ0eVxuICAgICovXG5cbiAgICBBZGFwdGVyLnByb3RvdHlwZS5nZXRWYWx1ZVR5cGUgPSBmdW5jdGlvbiBnZXRWYWx1ZVR5cGUoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlVHlwZU1hcCA/IHRoaXMudmFsdWVUeXBlTWFwW3RoaXMubWFwU3RhdGVLZXkoa2V5KV0gOiBmYWxzZTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIEFkYXB0ZXI7XG59KSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIHJldHVybiBuZXcgQWRhcHRlcihlbGVtZW50KTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwyRmtZWEIwWlhJdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096czdPenM3T3pzN096dEpRVmxOTEU5QlFVODdRVUZEVkN4aFFVUkZMRTlCUVU4c1EwRkRSeXhQUVVGUExFVkJRVVU3T0VKQlJHNUNMRTlCUVU4N08wRkJSVXdzV1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4UFFVRlBMRU5CUVVNN1FVRkRka0lzV1VGQlNTeERRVUZETEV0QlFVc3NSMEZCUnl4RlFVRkZMRU5CUVVNN1MwRkRia0k3T3pzN096czdRVUZCUVR0QlFVcERMRmRCUVU4c1YwRlpWQ3hIUVVGSExHZENRVUZETEVkQlFVY3NSVUZCUlN4UFFVRlBMRVZCUVVVN1FVRkRaQ3haUVVGTkxGTkJRVk1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE96dEJRVVY0UXl4WlFVRkpMRTlCUVU4c1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNZMEZCWXl4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRk8wRkJRelZETEcxQ1FVRlBMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVTBGQlV5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF6dFRRVU42UkN4TlFVRk5PMEZCUTBnc2JVSkJRVThzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJRenRUUVVOb1F6dExRVU5LT3pzN096czdPMEZCY0VKRExGZEJRVThzVjBFeVFsUXNSMEZCUnl4blFrRkJReXhMUVVGTExFVkJRVVU3TzBGQlJWQXNZVUZCU3l4SlFVRkpMRWRCUVVjc1NVRkJTU3hMUVVGTExFVkJRVVU3UVVGRGJrSXNaMEpCUVVrc1MwRkJTeXhEUVVGRExHTkJRV01zUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlR0QlFVTXpRaXh2UWtGQlRTeFRRVUZUTEVkQlFVY3NTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dEJRVU40UXl4dlFrRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFRRVUZUTEVOQlFVTXNSMEZCUnl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03WVVGRGRFTTdVMEZEU2pzN1FVRkZSQ3hsUVVGUExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8wdEJRMnhET3pzN096czdRVUZ5UTBNc1YwRkJUeXhYUVRCRFZDeE5RVUZOTEcxQ1FVRkRMRWRCUVVjc1JVRkJSVHRCUVVOU0xHVkJRVThzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRMUVVNMVFqczdPenM3TzBGQk5VTkRMRmRCUVU4c1YwRnBSRlFzVFVGQlRTeHRRa0ZCUXl4TFFVRkxMRVZCUVVVN1FVRkRWaXhoUVVGTExFbEJRVWtzUjBGQlJ5eEpRVUZKTEV0QlFVc3NSVUZCUlR0QlFVTnVRaXhuUWtGQlNTeExRVUZMTEVOQlFVTXNZMEZCWXl4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRk8wRkJRek5DTEc5Q1FVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRoUVVOc1F6dFRRVU5LTzB0QlEwbzdPenM3T3pzN08wRkJka1JETEZkQlFVOHNWMEVyUkZRc1YwRkJWeXgzUWtGQlF5eEhRVUZITEVWQlFVVTdRVUZEWWl4bFFVRlBMRUZCUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUjBGQlNTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTTdTMEZETlVRN096czdPenM3TzBGQmFrVkRMRmRCUVU4c1YwRjVSVlFzV1VGQldTeDVRa0ZCUXl4SFFVRkhMRVZCUVVVN1FVRkRaQ3hsUVVGUExFRkJRVU1zU1VGQlNTeERRVUZETEZsQlFWa3NSMEZCU1N4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhMUVVGTExFTkJRVU03UzBGRGFrWTdPMWRCTTBWRExFOUJRVTg3T3p0clFrRTRSVVVzVlVGQlF5eFBRVUZQTzFkQlFVc3NTVUZCU1N4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRE8wTkJRVUVpTENKbWFXeGxJam9pWVdSaGNIUmxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEZCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaThxWEc0Z0lDQWdJeUJCWkdGd2RHVnlJR05zWVhOelhHNGdJQ0FnSXlNZ1VISnZkbWxrWlhNZ1lTQm5aWFIwWlhJdmMyVjBkR1Z5SUhkeVlYQndaWElnWVc1a0lIQnliM0JsY25SNUlHTmhZMmhsSUdadmNpQmthV1ptWlhKbGJuUWdaV3hsYldWdWRDQjBlWEJsYzF4dVhHNGdJQ0FnVDNabGNuSnBaR1VnWUdkbGRIUmxjbUFnWVc1a0lHQnpaWFIwWlhKZ0lIUnZJSEpsYVcxd2JHVnRaVzUwSUhSb1pTQnBiblJsY21aaFkyVWdabTl5SUc1bGR5QmxiR1Z0Wlc1MElIUjVjR1Z6TGx4dVhHNGdJQ0FnVTJWMElHQkZlSFJsYm1SbFpDNXdjbTkwYjNSNWNHVXVjM1JoZEdWTllYQmdJR0Z6SUdGdUlHOWlhbVZqZENCclpYa3ZkbUZzZFdVZ2JXRndJSFJ2SUhSeVlXNXpiR0YwWlNCcGJtTnZiV2x1WnlCclpYbHpJSFJ2WEc0Z0lDQWdRVkJKTFhOd1pXTnBabWxqSUd0bGVYTXVJRVp2Y2lCcGJuTjBZVzVqWlN3Z2V5QjRPaUFuZEhKaGJuTnNZWFJsV0NjZ2ZTNGdYRzVjYmlBZ0lDQlRaWFFnWUVWNGRHVnVaR1ZrTG5CeWIzUnZkSGx3WlM1MllXeDFaVlI1Y0dWTllYQmdJR0Z6SUdGdUlHOWlhbVZqZENCclpYa3ZkbUZzZFdVZ2JXRndJSFJ2SUhKbGRIVnliaUJoSUhaaGJIVmxJSFI1Y0dVZ2QybDBhRnh1SUNBZ0lHQm5aWFJXWVd4MVpWUjVjR1VvYTJWNUtXQWdLR3RsZVNCM2FXeHNJR0psSUcxaGNIQmxaQ0JoWTJOdmNtUnBibWNnZEc4Z1lITjBZWFJsVFdGd1lDbGNiaW92WEc1amJHRnpjeUJCWkdGd2RHVnlJSHRjYmlBZ0lDQmpiMjV6ZEhKMVkzUnZjaWhsYkdWdFpXNTBLU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaV3hsYldWdWRDQTlJR1ZzWlcxbGJuUTdYRzRnSUNBZ0lDQWdJSFJvYVhNdVkyRmphR1VnUFNCN2ZUdGNiaUFnSUNCOVhHNWNiaUFnSUNBdktseHVJQ0FnSUNBZ0lDQkhaWFFnWld4bGJXVnVkQ0J3Y205d1pYSjBlVnh1WEc0Z0lDQWdJQ0FnSUVCd1lYSmhiU0JiYzNSeWFXNW5YVG9nUzJWNUlIUnZJSEpsWVdSY2JpQWdJQ0FnSUNBZ1FIQmhjbUZ0SUZ0aWIyOXNaV0Z1WFRvZ1NXWWdZSFJ5ZFdWZ0xDQjNhV3hzSUc5MlpYSnlhV1JsSUdOaFkyaGxaQ0J3Y205d1pYSjBlVnh1SUNBZ0lDb3ZYRzRnSUNBZ1oyVjBLR3RsZVN3Z2NtVm1jbVZ6YUNrZ2UxeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCdFlYQndaV1JMWlhrZ1BTQjBhR2x6TG0xaGNGTjBZWFJsUzJWNUtHdGxlU2s3WEc1Y2JpQWdJQ0FnSUNBZ2FXWWdLSEpsWm5KbGMyZ2dmSHdnSVhSb2FYTXVZMkZqYUdVdWFHRnpUM2R1VUhKdmNHVnlkSGtvYTJWNUtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTXVZMkZqYUdWYmJXRndjR1ZrUzJWNVhTQTlJSFJvYVhNdVoyVjBkR1Z5S0cxaGNIQmxaRXRsZVNrN1hHNGdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1allXTm9aVnR0WVhCd1pXUkxaWGxkTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHlwY2JpQWdJQ0FnSUNBZ1UyVjBJR1ZzWlcxbGJuUWdjSEp2Y0dWeWRHbGxjMXh1WEc0Z0lDQWdJQ0FnSUVCd1lYSmhiU0JiYjJKcVpXTjBYVG9nUzJWNUwzWmhiSFZsSUhCeWIzQmxjblJwWlhNZ2RHOGdjMlYwWEc0Z0lDQWdLaTljYmlBZ0lDQnpaWFFvY0hKdmNITXBJSHRjYmlBZ0lDQWdJQ0FnTHk4Z1ZISmhibk5zWVhSbElIQnliM0J6WEc0Z0lDQWdJQ0FnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUJ3Y205d2N5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSEJ5YjNCekxtaGhjMDkzYmxCeWIzQmxjblI1S0d0bGVTa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQnRZWEJ3WldSTFpYa2dQU0IwYUdsekxtMWhjRk4wWVhSbFMyVjVLR3RsZVNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVqWVdOb1pWdHRZWEJ3WldSTFpYbGRJRDBnY0hKdmNITmJhMlY1WFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpMbk5sZEhSbGNpaDBhR2x6TG1OaFkyaGxLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQXZLbHh1SUNBZ0lDQWdJQ0JQZG1WeWNtbGtZV0pzWlNCbGJHVnRaVzUwSUdkbGRIUmxjaUF0SUdSbFptRjFiSFFnWm05eUlIQnNZV2x1SUc5aWFtVmpkQ0JjYmlBZ0lDQXFMMXh1SUNBZ0lHZGxkSFJsY2loclpYa3BJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNdVpXeGxiV1Z1ZEZ0clpYbGRPMXh1SUNBZ0lIMWNibHh1SUNBZ0lDOHFYRzRnSUNBZ0lDQWdJRTkyWlhKeWFXUmhZbXhsSUdWc1pXMWxiblFnYzJWMGRHVnlJQzBnWkdWbVlYVnNkQ0JtYjNJZ2NHeGhhVzRnYjJKcVpXTjBYRzRnSUNBZ0tpOWNiaUFnSUNCelpYUjBaWElvY0hKdmNITXBJSHRjYmlBZ0lDQWdJQ0FnWm05eUlDaHNaWFFnYTJWNUlHbHVJSEJ5YjNCektTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9jSEp2Y0hNdWFHRnpUM2R1VUhKdmNHVnlkSGtvYTJWNUtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVpXeGxiV1Z1ZEZ0clpYbGRJRDBnY0hKdmNITmJhMlY1WFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJQzhxWEc0Z0lDQWdJQ0FnSUUxaGNDQnpkR0YwWlNCclpYa2dZWE1nY0dWeUlHQnpkR0YwWlUxaGNHQXNJR2xtSUhCeVpYTmxiblJjYmx4dUlDQWdJQ0FnSUNCQWNHRnlZVzBnVzNOMGNtbHVaMTA2SUV0bGVTQjBieUJ0WVhCY2JpQWdJQ0FnSUNBZ1FISmxkSFZ5YmlCYmMzUnlhVzVuWFRvZ1RXRndjR1ZrSUd0bGVTd2diM0lnYjNKcFoybHVZV3dnYTJWNUlHbG1JRzV2Ym1VZ1ptOTFibVJjYmlBZ0lDQXFMMXh1SUNBZ0lHMWhjRk4wWVhSbFMyVjVLR3RsZVNrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z0tIUm9hWE11YzNSaGRHVk5ZWEFwSUQ4Z2RHaHBjeTV6ZEdGMFpVMWhjRnRyWlhsZElIeDhJR3RsZVNBNklHdGxlVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQXZLbHh1SUNBZ0lDQWdJQ0JIWlhRZ2RtRnNkV1ZVZVhCbElHOW1JSEJ5YjNacFpHVmtJR3RsZVZ4dVhHNGdJQ0FnSUNBZ0lFQndZWEpoYlNCYmMzUnlhVzVuWFRvZ1RtRnRaU0J2WmlCd2NtOXdaWEowZVNCMGJ5QnRZWEJjYmlBZ0lDQWdJQ0FnUUhKbGRIVnliaUJiZG1Gc2RXVlVlWEJsWFRvZ1ZtRnNkV1VnZEhsd1pTQnZaaUJ3Y205d1pYSjBlVnh1SUNBZ0lDb3ZYRzRnSUNBZ1oyVjBWbUZzZFdWVWVYQmxLR3RsZVNrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z0tIUm9hWE11ZG1Gc2RXVlVlWEJsVFdGd0tTQS9JSFJvYVhNdWRtRnNkV1ZVZVhCbFRXRndXM1JvYVhNdWJXRndVM1JoZEdWTFpYa29hMlY1S1YwZ09pQm1ZV3h6WlR0Y2JpQWdJQ0I5WEc1OVhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElDaGxiR1Z0Wlc1MEtTQTlQaUJ1WlhjZ1FXUmhjSFJsY2lobGJHVnRaVzUwS1RzaVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FkYXB0ZXIvYWRhcHRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDEzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmdldHRlciA9IGdldHRlcjtcbmV4cG9ydHMuc2V0dGVyID0gc2V0dGVyO1xuXG52YXIgX2FkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXInKTtcblxudmFyIF9hZGFwdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FkYXB0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBnZXR0ZXIoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoa2V5KTtcbn1cblxuZnVuY3Rpb24gc2V0dGVyKHByb3BzKSB7XG4gICAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgcHJvcHNba2V5XSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgdmFyIGF0dHJBZGFwdGVyID0gKDAsIF9hZGFwdGVyMi5kZWZhdWx0KShlbGVtZW50KTtcblxuICAgIGF0dHJBZGFwdGVyLmdldHRlciA9IGdldHRlcjtcbiAgICBhdHRyQWRhcHRlci5zZXR0ZXIgPSBzZXR0ZXI7XG5cbiAgICByZXR1cm4gYXR0ckFkYXB0ZXI7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMMkYwZEhJdFlXUmhjSFJsY2k1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdVVUZGWjBJc1RVRkJUU3hIUVVGT0xFMUJRVTA3VVVGSlRpeE5RVUZOTEVkQlFVNHNUVUZCVFRzN096czdPenM3UVVGS1ppeFRRVUZUTEUxQlFVMHNRMEZCUXl4SFFVRkhMRVZCUVVVN1FVRkRlRUlzVjBGQlR5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRmxCUVZrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dERRVU42UXpzN1FVRkZUU3hUUVVGVExFMUJRVTBzUTBGQlF5eExRVUZMTEVWQlFVVTdRVUZETVVJc1UwRkJTeXhKUVVGSkxFZEJRVWNzU1VGQlNTeExRVUZMTEVWQlFVVTdRVUZEYmtJc1dVRkJTU3hMUVVGTExFTkJRVU1zWTBGQll5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZPMEZCUXpOQ0xHZENRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRmxCUVZrc1EwRkJReXhIUVVGSExFVkJRVVVzUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1UwRkRPVU03UzBGRFNqdERRVU5LT3p0clFrRkZZeXhWUVVGRExFOUJRVThzUlVGQlN6dEJRVU40UWl4UlFVRk5MRmRCUVZjc1IwRkJSeXgxUWtGQlVTeFBRVUZQTEVOQlFVTXNRMEZCUXpzN1FVRkZja01zWlVGQlZ5eERRVUZETEUxQlFVMHNSMEZCUnl4TlFVRk5MRU5CUVVNN1FVRkROVUlzWlVGQlZ5eERRVUZETEUxQlFVMHNSMEZCUnl4TlFVRk5MRU5CUVVNN08wRkJSVFZDTEZkQlFVOHNWMEZCVnl4RFFVRkRPME5CUTNSQ0lpd2labWxzWlNJNkltRjBkSEl0WVdSaGNIUmxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEZCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQmhaR0Z3ZEdWeUlHWnliMjBnSnk0dllXUmhjSFJsY2ljN1hHNWNibVY0Y0c5eWRDQm1kVzVqZEdsdmJpQm5aWFIwWlhJb2EyVjVLU0I3WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE11Wld4bGJXVnVkQzVuWlhSQmRIUnlhV0oxZEdVb2EyVjVLVHRjYm4xY2JseHVaWGh3YjNKMElHWjFibU4wYVc5dUlITmxkSFJsY2lod2NtOXdjeWtnZTF4dUlDQWdJR1p2Y2lBb2JHVjBJR3RsZVNCcGJpQndjbTl3Y3lrZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvY0hKdmNITXVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2EyVjVLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1bGJHVnRaVzUwTG5ObGRFRjBkSEpwWW5WMFpTaHJaWGtzSUhCeWIzQnpXMnRsZVYwcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0FvWld4bGJXVnVkQ2tnUFQ0Z2UxeHVJQ0FnSUdOdmJuTjBJR0YwZEhKQlpHRndkR1Z5SUQwZ1lXUmhjSFJsY2lobGJHVnRaVzUwS1R0Y2JseHVJQ0FnSUdGMGRISkJaR0Z3ZEdWeUxtZGxkSFJsY2lBOUlHZGxkSFJsY2p0Y2JpQWdJQ0JoZEhSeVFXUmhjSFJsY2k1elpYUjBaWElnUFNCelpYUjBaWEk3WEc1Y2JpQWdJQ0J5WlhSMWNtNGdZWFIwY2tGa1lYQjBaWEk3WEc1OU8xeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hZGFwdGVyL2F0dHItYWRhcHRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDE0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfc3RhdGVNYXAgPSByZXF1aXJlKCcuL2Nzcy9zdGF0ZS1tYXAnKTtcblxudmFyIF9zdGF0ZU1hcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdGF0ZU1hcCk7XG5cbnZhciBfdmFsdWVUeXBlTWFwID0gcmVxdWlyZSgnLi9jc3MvdmFsdWUtdHlwZS1tYXAnKTtcblxudmFyIF92YWx1ZVR5cGVNYXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdmFsdWVUeXBlTWFwKTtcblxudmFyIF9idWlsZCA9IHJlcXVpcmUoJy4vY3NzL2J1aWxkJyk7XG5cbnZhciBfYnVpbGQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYnVpbGQpO1xuXG52YXIgX3ByZWZpeGVyID0gcmVxdWlyZSgnLi9jc3MvcHJlZml4ZXInKTtcblxudmFyIF9wcmVmaXhlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmVmaXhlcik7XG5cbnZhciBfdHJhbnNmb3JtUHJvcHMgPSByZXF1aXJlKCcuL2Nzcy90cmFuc2Zvcm0tcHJvcHMnKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2Zvcm1Qcm9wcyk7XG5cbnZhciBfYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcicpO1xuXG52YXIgX2FkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWRhcHRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGdldHRlcihrZXkpIHtcbiAgICByZXR1cm4gIV90cmFuc2Zvcm1Qcm9wczIuZGVmYXVsdFtrZXldID8gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5lbGVtZW50LCBudWxsKVsoMCwgX3ByZWZpeGVyMi5kZWZhdWx0KShrZXkpXSA6IF92YWx1ZVR5cGVNYXAyLmRlZmF1bHRba2V5XS5kZWZhdWx0UHJvcHMuY3VycmVudCB8fCAwO1xufVxuXG5mdW5jdGlvbiBzZXR0ZXIocHJvcHMpIHtcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUuY3NzVGV4dCArPSAoMCwgX2J1aWxkMi5kZWZhdWx0KShwcm9wcyk7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgdmFyIGNzc0FkYXB0ZXIgPSAoMCwgX2FkYXB0ZXIyLmRlZmF1bHQpKGVsZW1lbnQpO1xuICAgIGNzc0FkYXB0ZXIuc3RhdGVNYXAgPSBfc3RhdGVNYXAyLmRlZmF1bHQ7XG4gICAgY3NzQWRhcHRlci52YWx1ZVR5cGVNYXAgPSBfdmFsdWVUeXBlTWFwMi5kZWZhdWx0O1xuICAgIGNzc0FkYXB0ZXIuZ2V0dGVyID0gZ2V0dGVyO1xuICAgIGNzc0FkYXB0ZXIuc2V0dGVyID0gc2V0dGVyO1xuXG4gICAgcmV0dXJuIGNzc0FkYXB0ZXI7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMMk56Y3kxaFpHRndkR1Z5TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096dEJRVTlCTEZOQlFWTXNUVUZCVFN4RFFVRkZMRWRCUVVjc1JVRkJSVHRCUVVOc1FpeFhRVUZQTEVGQlFVTXNRMEZCUXl4NVFrRkJaU3hIUVVGSExFTkJRVU1zUjBGRGVFSXNUVUZCVFN4RFFVRkRMR2RDUVVGblFpeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU1zZDBKQlFWTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkRNVVFzZFVKQlFXRXNSMEZCUnl4RFFVRkRMRU5CUVVNc1dVRkJXU3hEUVVGRExFOUJRVThzU1VGQlNTeERRVUZETEVOQlFVTTdRMEZEYmtRN08wRkJSVVFzVTBGQlV5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RlFVRkZPMEZCUTI1Q0xGRkJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTlCUVU4c1NVRkJTU3h4UWtGQmIwSXNTMEZCU3l4RFFVRkRMRU5CUVVNN1EwRkROVVE3TzJ0Q1FVVmpMRlZCUVVNc1QwRkJUeXhGUVVGTE8wRkJRM2hDTEZGQlFVMHNWVUZCVlN4SFFVRkhMSFZDUVVGUkxFOUJRVThzUTBGQlF5eERRVUZETzBGQlEzQkRMR05CUVZVc1EwRkJReXhSUVVGUkxIRkNRVUZYTEVOQlFVTTdRVUZETDBJc1kwRkJWU3hEUVVGRExGbEJRVmtzZVVKQlFXVXNRMEZCUXp0QlFVTjJReXhqUVVGVkxFTkJRVU1zVFVGQlRTeEhRVUZITEUxQlFVMHNRMEZCUXp0QlFVTXpRaXhqUVVGVkxFTkJRVU1zVFVGQlRTeEhRVUZITEUxQlFVMHNRMEZCUXpzN1FVRkZNMElzVjBGQlR5eFZRVUZWTEVOQlFVTTdRMEZEY2tJaUxDSm1hV3hsSWpvaVkzTnpMV0ZrWVhCMFpYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFJRWlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2MzUmhkR1ZOWVhBZ1puSnZiU0FuTGk5amMzTXZjM1JoZEdVdGJXRndKenRjYm1sdGNHOXlkQ0IyWVd4MVpWUjVjR1ZOWVhBZ1puSnZiU0FuTGk5amMzTXZkbUZzZFdVdGRIbHdaUzF0WVhBbk8xeHVhVzF3YjNKMElHSjFhV3hrVUhKdmNHVnlkSGxUZEhKcGJtY2dabkp2YlNBbkxpOWpjM012WW5WcGJHUW5PMXh1YVcxd2IzSjBJSEJ5WldacGVHVnlJR1p5YjIwZ0p5NHZZM056TDNCeVpXWnBlR1Z5Snp0Y2JtbHRjRzl5ZENCMGNtRnVjMlp2Y20xUWNtOXdjeUJtY205dElDY3VMMk56Y3k5MGNtRnVjMlp2Y20wdGNISnZjSE1uTzF4dWFXMXdiM0owSUdGa1lYQjBaWElnWm5KdmJTQW5MaTloWkdGd2RHVnlKenRjYmx4dVpuVnVZM1JwYjI0Z1oyVjBkR1Z5SUNoclpYa3BJSHRjYmlBZ0lDQnlaWFIxY200Z0tDRjBjbUZ1YzJadmNtMVFjbTl3YzF0clpYbGRLU0EvWEc0Z0lDQWdJQ0FnSUhkcGJtUnZkeTVuWlhSRGIyMXdkWFJsWkZOMGVXeGxLSFJvYVhNdVpXeGxiV1Z1ZEN3Z2JuVnNiQ2xiY0hKbFptbDRaWElvYTJWNUtWMGdPbHh1SUNBZ0lDQWdJQ0IyWVd4MVpWUjVjR1ZOWVhCYmEyVjVYUzVrWldaaGRXeDBVSEp2Y0hNdVkzVnljbVZ1ZENCOGZDQXdPMXh1ZlZ4dVhHNW1kVzVqZEdsdmJpQnpaWFIwWlhJb2NISnZjSE1wSUh0Y2JpQWdJQ0IwYUdsekxtVnNaVzFsYm5RdWMzUjViR1V1WTNOelZHVjRkQ0FyUFNCaWRXbHNaRkJ5YjNCbGNuUjVVM1J5YVc1bktIQnliM0J6S1R0Y2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdLR1ZzWlcxbGJuUXBJRDArSUh0Y2JpQWdJQ0JqYjI1emRDQmpjM05CWkdGd2RHVnlJRDBnWVdSaGNIUmxjaWhsYkdWdFpXNTBLVHRjYmlBZ0lDQmpjM05CWkdGd2RHVnlMbk4wWVhSbFRXRndJRDBnYzNSaGRHVk5ZWEE3WEc0Z0lDQWdZM056UVdSaGNIUmxjaTUyWVd4MVpWUjVjR1ZOWVhBZ1BTQjJZV3gxWlZSNWNHVk5ZWEE3WEc0Z0lDQWdZM056UVdSaGNIUmxjaTVuWlhSMFpYSWdQU0JuWlhSMFpYSTdYRzRnSUNBZ1kzTnpRV1JoY0hSbGNpNXpaWFIwWlhJZ1BTQnpaWFIwWlhJN1hHNWNiaUFnSUNCeVpYUjFjbTRnWTNOelFXUmhjSFJsY2p0Y2JuMDdYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9jc3MtYWRhcHRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDE1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnNldHRlciA9IHNldHRlcjtcblxudmFyIF9zdGF0ZU1hcCA9IHJlcXVpcmUoJy4vY3NzL3N0YXRlLW1hcCcpO1xuXG52YXIgX3N0YXRlTWFwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0YXRlTWFwKTtcblxudmFyIF92YWx1ZVR5cGVNYXAgPSByZXF1aXJlKCcuL3N2Zy92YWx1ZS10eXBlLW1hcCcpO1xuXG52YXIgX3ZhbHVlVHlwZU1hcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF92YWx1ZVR5cGVNYXApO1xuXG52YXIgX2J1aWxkID0gcmVxdWlyZSgnLi9zdmcvYnVpbGQnKTtcblxudmFyIF9idWlsZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9idWlsZCk7XG5cbnZhciBfYXR0ckFkYXB0ZXIgPSByZXF1aXJlKCcuL2F0dHItYWRhcHRlcicpO1xuXG52YXIgX2FkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXInKTtcblxudmFyIF9hZGFwdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FkYXB0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBzZXR0ZXIocHJvcHMpIHtcbiAgICB0aGlzLmF0dHJTZXR0ZXIoKDAsIF9idWlsZDIuZGVmYXVsdCkocHJvcHMsIHRoaXMub3JpZ2luKSk7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgdmFyIHRyYW5zZm9ybU9yaWdpblggPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyA1MCA6IGFyZ3VtZW50c1sxXTtcbiAgICB2YXIgdHJhbnNmb3JtT3JpZ2luWSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMiB8fCBhcmd1bWVudHNbMl0gPT09IHVuZGVmaW5lZCA/IDUwIDogYXJndW1lbnRzWzJdO1xuXG4gICAgdmFyIHN2Z0FkYXB0ZXIgPSAoMCwgX2FkYXB0ZXIyLmRlZmF1bHQpKGVsZW1lbnQpO1xuICAgIHN2Z0FkYXB0ZXIuc3RhdGVNYXAgPSBfc3RhdGVNYXAyLmRlZmF1bHQ7XG4gICAgc3ZnQWRhcHRlci52YWx1ZVR5cGVNYXAgPSBfdmFsdWVUeXBlTWFwMi5kZWZhdWx0O1xuICAgIHN2Z0FkYXB0ZXIuZ2V0dGVyID0gX2F0dHJBZGFwdGVyLmdldHRlcjtcbiAgICBzdmdBZGFwdGVyLnNldHRlciA9IHNldHRlcjtcbiAgICBzdmdBZGFwdGVyLmF0dHJTZXR0ZXIgPSBfYXR0ckFkYXB0ZXIuc2V0dGVyO1xuXG4gICAgdmFyIGJCb3ggPSBlbGVtZW50LmdldEJCb3goKTtcblxuICAgIHN2Z0FkYXB0ZXIub3JpZ2luID0ge1xuICAgICAgICB4OiBiQm94LndpZHRoICogKHRyYW5zZm9ybU9yaWdpblggLyAxMDApICsgYkJveC54LFxuICAgICAgICB5OiBiQm94LmhlaWdodCAqICh0cmFuc2Zvcm1PcmlnaW5ZIC8gMTAwKSArIGJCb3gueVxuICAgIH07XG5cbiAgICByZXR1cm4gc3ZnQWRhcHRlcjtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwzTjJaeTFoWkdGd2RHVnlMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3p0UlFVMW5RaXhOUVVGTkxFZEJRVTRzVFVGQlRUczdPenM3T3pzN096czdPenM3T3pzN096czdPenRCUVVGbUxGTkJRVk1zVFVGQlRTeERRVUZETEV0QlFVc3NSVUZCUlR0QlFVTXhRaXhSUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZETEhGQ1FVRk5MRXRCUVVzc1JVRkJSU3hKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXp0RFFVTTVRenM3YTBKQlJXTXNWVUZCUXl4UFFVRlBMRVZCUVcxRU8xRkJRV3BFTEdkQ1FVRm5RaXg1UkVGQlJ5eEZRVUZGTzFGQlFVVXNaMEpCUVdkQ0xIbEVRVUZITEVWQlFVVTdPMEZCUTJwRkxGRkJRVTBzVlVGQlZTeEhRVUZITEhWQ1FVRlJMRTlCUVU4c1EwRkJReXhEUVVGRE8wRkJRM0JETEdOQlFWVXNRMEZCUXl4UlFVRlJMSEZDUVVGakxFTkJRVU03UVVGRGJFTXNZMEZCVlN4RFFVRkRMRmxCUVZrc2VVSkJRV1VzUTBGQlF6dEJRVU4yUXl4alFVRlZMRU5CUVVNc1RVRkJUU3huUWtGWVdpeE5RVUZOTEVGQlYyVXNRMEZCUXp0QlFVTXpRaXhqUVVGVkxFTkJRVU1zVFVGQlRTeEhRVUZITEUxQlFVMHNRMEZCUXp0QlFVTXpRaXhqUVVGVkxFTkJRVU1zVlVGQlZTeG5Ra0ZpVWl4TlFVRk5MRUZCWVdVc1EwRkJRenM3UVVGRmJrTXNVVUZCVFN4SlFVRkpMRWRCUVVjc1QwRkJUeXhEUVVGRExFOUJRVThzUlVGQlJTeERRVUZET3p0QlFVVXZRaXhqUVVGVkxFTkJRVU1zVFVGQlRTeEhRVUZITzBGQlEyaENMRk5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUzBGQlN5eEpRVUZKTEdkQ1FVRm5RaXhIUVVGSExFZEJRVWNzUTBGQlFTeEJRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNN1FVRkRha1FzVTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWxCUVVrc1owSkJRV2RDTEVkQlFVY3NSMEZCUnl4RFFVRkJMRUZCUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF6dExRVU55UkN4RFFVRkRPenRCUVVWR0xGZEJRVThzVlVGQlZTeERRVUZETzBOQlEzSkNJaXdpWm1sc1pTSTZJbk4yWnkxaFpHRndkR1Z5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMFVHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJR056YzFOMFlYUmxUV0Z3SUdaeWIyMGdKeTR2WTNOekwzTjBZWFJsTFcxaGNDYzdYRzVwYlhCdmNuUWdkbUZzZFdWVWVYQmxUV0Z3SUdaeWIyMGdKeTR2YzNabkwzWmhiSFZsTFhSNWNHVXRiV0Z3Snp0Y2JtbHRjRzl5ZENCaWRXbHNaQ0JtY205dElDY3VMM04yWnk5aWRXbHNaQ2M3WEc1cGJYQnZjblFnZXlCblpYUjBaWElzSUhObGRIUmxjaUJoY3lCaGRIUnlVMlYwZEdWeUlIMGdabkp2YlNBbkxpOWhkSFJ5TFdGa1lYQjBaWEluTzF4dWFXMXdiM0owSUdGa1lYQjBaWElnWm5KdmJTQW5MaTloWkdGd2RHVnlKenRjYmx4dVpYaHdiM0owSUdaMWJtTjBhVzl1SUhObGRIUmxjaWh3Y205d2N5a2dlMXh1SUNBZ0lIUm9hWE11WVhSMGNsTmxkSFJsY2loaWRXbHNaQ2h3Y205d2N5d2dkR2hwY3k1dmNtbG5hVzRwS1R0Y2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdLR1ZzWlcxbGJuUXNJSFJ5WVc1elptOXliVTl5YVdkcGJsZ2dQU0ExTUN3Z2RISmhibk5tYjNKdFQzSnBaMmx1V1NBOUlEVXdLU0E5UGlCN1hHNGdJQ0FnWTI5dWMzUWdjM1puUVdSaGNIUmxjaUE5SUdGa1lYQjBaWElvWld4bGJXVnVkQ2s3WEc0Z0lDQWdjM1puUVdSaGNIUmxjaTV6ZEdGMFpVMWhjQ0E5SUdOemMxTjBZWFJsVFdGd08xeHVJQ0FnSUhOMlowRmtZWEIwWlhJdWRtRnNkV1ZVZVhCbFRXRndJRDBnZG1Gc2RXVlVlWEJsVFdGd08xeHVJQ0FnSUhOMlowRmtZWEIwWlhJdVoyVjBkR1Z5SUQwZ1oyVjBkR1Z5TzF4dUlDQWdJSE4yWjBGa1lYQjBaWEl1YzJWMGRHVnlJRDBnYzJWMGRHVnlPMXh1SUNBZ0lITjJaMEZrWVhCMFpYSXVZWFIwY2xObGRIUmxjaUE5SUdGMGRISlRaWFIwWlhJN1hHNGdJQ0FnWEc0Z0lDQWdZMjl1YzNRZ1lrSnZlQ0E5SUdWc1pXMWxiblF1WjJWMFFrSnZlQ2dwTzF4dVhHNGdJQ0FnYzNablFXUmhjSFJsY2k1dmNtbG5hVzRnUFNCN1hHNGdJQ0FnSUNBZ0lIZzZJR0pDYjNndWQybGtkR2dnS2lBb2RISmhibk5tYjNKdFQzSnBaMmx1V0NBdklERXdNQ2tnS3lCaVFtOTRMbmdzWEc0Z0lDQWdJQ0FnSUhrNklHSkNiM2d1YUdWcFoyaDBJQ29nS0hSeVlXNXpabTl5YlU5eWFXZHBibGtnTHlBeE1EQXBJQ3NnWWtKdmVDNTVYRzRnSUNBZ2ZUdGNibHh1SUNBZ0lISmxkSFZ5YmlCemRtZEJaR0Z3ZEdWeU8xeHVmVHRjYmx4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FkYXB0ZXIvc3ZnLWFkYXB0ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2J1aWxkID0gcmVxdWlyZSgnLi9zdmctcGF0aC9idWlsZCcpO1xuXG52YXIgX2J1aWxkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2J1aWxkKTtcblxudmFyIF9zdGF0ZU1hcCA9IHJlcXVpcmUoJy4vY3NzL3N0YXRlLW1hcCcpO1xuXG52YXIgX3N0YXRlTWFwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0YXRlTWFwKTtcblxudmFyIF9zdmdBZGFwdGVyID0gcmVxdWlyZSgnLi9zdmctYWRhcHRlcicpO1xuXG52YXIgX3N2Z0FkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ZnQWRhcHRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHNldHRlcihwcm9wcykge1xuICAgIHRoaXMuc3ZnU2V0dGVyKCgwLCBfYnVpbGQyLmRlZmF1bHQpKHByb3BzLCB0aGlzLnBhdGhMZW5ndGgpKTtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICB2YXIgYWRhcHRlciA9ICgwLCBfc3ZnQWRhcHRlcjIuZGVmYXVsdCkoZWxlbWVudCk7XG5cbiAgICBhZGFwdGVyLnN0YXRlTWFwID0gX3N0YXRlTWFwMi5kZWZhdWx0O1xuICAgIGFkYXB0ZXIuc2V0dGVyID0gc2V0dGVyO1xuICAgIGFkYXB0ZXIuc3ZnU2V0dGVyID0gX3N2Z0FkYXB0ZXIuc2V0dGVyO1xuICAgIGFkYXB0ZXIucGF0aExlbmd0aCA9IGVsZW1lbnQuZ2V0VG90YWxMZW5ndGgoKTtcblxuICAgIHJldHVybiBhZGFwdGVyO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFpHRndkR1Z5TDNOMlp5MXdZWFJvTFdGa1lYQjBaWEl1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3T3pzN096czdPenM3TzBGQlNVRXNVMEZCVXl4TlFVRk5MRU5CUVVNc1MwRkJTeXhGUVVGRk8wRkJRMjVDTEZGQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc2NVSkJRVTBzUzBGQlN5eEZRVUZGTEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJReXhEUVVGRE8wTkJRMnBFT3p0clFrRkZZeXhWUVVGRExFOUJRVThzUlVGQlN6dEJRVU40UWl4UlFVRk5MRTlCUVU4c1IwRkJSeXd3UWtGQlZ5eFBRVUZQTEVOQlFVTXNRMEZCUXpzN1FVRkZjRU1zVjBGQlR5eERRVUZETEZGQlFWRXNjVUpCUVdNc1EwRkJRenRCUVVNdlFpeFhRVUZQTEVOQlFVTXNUVUZCVFN4SFFVRkhMRTFCUVUwc1EwRkJRenRCUVVONFFpeFhRVUZQTEVOQlFVTXNVMEZCVXl4bFFWaEJMRTFCUVUwc1FVRlhUU3hEUVVGRE8wRkJRemxDTEZkQlFVOHNRMEZCUXl4VlFVRlZMRWRCUVVjc1QwRkJUeXhEUVVGRExHTkJRV01zUlVGQlJTeERRVUZET3p0QlFVVTVReXhYUVVGUExFOUJRVThzUTBGQlF6dERRVU5zUWlJc0ltWnBiR1VpT2lKemRtY3RjR0YwYUMxaFpHRndkR1Z5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMFVHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJR0oxYVd4a0lHWnliMjBnSnk0dmMzWm5MWEJoZEdndlluVnBiR1FuTzF4dWFXMXdiM0owSUdOemMxTjBZWFJsVFdGd0lHWnliMjBnSnk0dlkzTnpMM04wWVhSbExXMWhjQ2M3WEc1cGJYQnZjblFnYzNablFXUmhjSFJsY2l3Z2V5QnpaWFIwWlhJZ1lYTWdjM1puVTJWMGRHVnlJSDBnWm5KdmJTQW5MaTl6ZG1jdFlXUmhjSFJsY2ljN1hHNWNibVoxYm1OMGFXOXVJSE5sZEhSbGNpaHdjbTl3Y3lrZ2UxeHVJQ0FnSUhSb2FYTXVjM1puVTJWMGRHVnlLR0oxYVd4a0tIQnliM0J6TENCMGFHbHpMbkJoZEdoTVpXNW5kR2dwS1R0Y2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdLR1ZzWlcxbGJuUXBJRDArSUh0Y2JpQWdJQ0JqYjI1emRDQmhaR0Z3ZEdWeUlEMGdjM1puUVdSaGNIUmxjaWhsYkdWdFpXNTBLVHRjYmx4dUlDQWdJR0ZrWVhCMFpYSXVjM1JoZEdWTllYQWdQU0JqYzNOVGRHRjBaVTFoY0R0Y2JpQWdJQ0JoWkdGd2RHVnlMbk5sZEhSbGNpQTlJSE5sZEhSbGNqdGNiaUFnSUNCaFpHRndkR1Z5TG5OMloxTmxkSFJsY2lBOUlITjJaMU5sZEhSbGNqdGNiaUFnSUNCaFpHRndkR1Z5TG5CaGRHaE1aVzVuZEdnZ1BTQmxiR1Z0Wlc1MExtZGxkRlJ2ZEdGc1RHVnVaM1JvS0NrN1hHNWNiaUFnSUNCeVpYUjFjbTRnWVdSaGNIUmxjanRjYm4wN1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hZGFwdGVyL3N2Zy1wYXRoLWFkYXB0ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2FkYXB0ZXIgPSByZXF1aXJlKCcuLi9hZGFwdGVyL2FkYXB0ZXInKTtcblxudmFyIF9hZGFwdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FkYXB0ZXIpO1xuXG52YXIgX2Nzc0FkYXB0ZXIgPSByZXF1aXJlKCcuLi9hZGFwdGVyL2Nzcy1hZGFwdGVyJyk7XG5cbnZhciBfY3NzQWRhcHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jc3NBZGFwdGVyKTtcblxudmFyIF9zdmdBZGFwdGVyID0gcmVxdWlyZSgnLi4vYWRhcHRlci9zdmctYWRhcHRlcicpO1xuXG52YXIgX3N2Z0FkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ZnQWRhcHRlcik7XG5cbnZhciBfc3ZnUGF0aEFkYXB0ZXIgPSByZXF1aXJlKCcuLi9hZGFwdGVyL3N2Zy1wYXRoLWFkYXB0ZXInKTtcblxudmFyIF9zdmdQYXRoQWRhcHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdmdQYXRoQWRhcHRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBTQVZFX1BST1AgPSAnX19wbV9hZGFwdGVyJztcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAvLyBSZXR1cm4gYm91bmQgYWRhcHRlciBpZiBwcmVzZW50XG4gICAgaWYgKGVsZW1lbnRbU0FWRV9QUk9QXSkge1xuICAgICAgICByZXR1cm4gZWxlbWVudFtTQVZFX1BST1BdO1xuXG4gICAgICAgIC8vIE9yIGRldGVjdCBhbmQgYmluZCBhZGFwdGVyXG4gICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBkZXRlY3RlZEFkYXB0ZXIgPSBfYWRhcHRlcjIuZGVmYXVsdDtcblxuICAgICAgICAgICAgLy8gSWYgSFRNTEVsZW1lbnQgbG9hZCBDU1NcbiAgICAgICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgZWxlbWVudC50YWdOYW1lID09PSAnc3ZnJykge1xuICAgICAgICAgICAgICAgIGRldGVjdGVkQWRhcHRlciA9IF9jc3NBZGFwdGVyMi5kZWZhdWx0O1xuXG4gICAgICAgICAgICAgICAgLy8gT3IgU1ZHXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBTVkdFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnRhZ05hbWUgPT09ICdwYXRoJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGV0ZWN0ZWRBZGFwdGVyID0gX3N2Z1BhdGhBZGFwdGVyMi5kZWZhdWx0O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGV0ZWN0ZWRBZGFwdGVyID0gX3N2Z0FkYXB0ZXIyLmRlZmF1bHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBib3VuZEFkYXB0ZXIgPSBkZXRlY3RlZEFkYXB0ZXIoZWxlbWVudCk7XG5cbiAgICAgICAgICAgIC8vIEJpbmQgYWRhcHRlciB0byBlbGVtZW50XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgU0FWRV9QUk9QLCB7XG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBib3VuZEFkYXB0ZXJcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gYm91bmRBZGFwdGVyO1xuICAgICAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1NdlltbHVaQzFoWkdGd2RHVnlMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN1FVRkxRU3hKUVVGTkxGTkJRVk1zUjBGQlJ5eGpRVUZqTEVOQlFVTTdPMnRDUVVWc1FpeFZRVUZETEU5QlFVOHNSVUZCU3pzN1FVRkZlRUlzVVVGQlNTeFBRVUZQTEVOQlFVTXNVMEZCVXl4RFFVRkRMRVZCUVVVN1FVRkRjRUlzWlVGQlR5eFBRVUZQTEVOQlFVTXNVMEZCVXl4RFFVRkRPenM3UVVGQlF5eExRVWMzUWl4TlFVRk5PMEZCUTBnc1owSkJRVWtzWlVGQlpTeHZRa0ZCVlRzN08wRkJRVU1zUVVGSE9VSXNaMEpCUVVrc1QwRkJUeXhaUVVGWkxGZEJRVmNzU1VGQlNTeFBRVUZQTEVOQlFVTXNUMEZCVHl4TFFVRkxMRXRCUVVzc1JVRkJSVHRCUVVNM1JDd3JRa0ZCWlN4MVFrRkJZVHM3TzBGQlFVTXNZVUZIYUVNc1RVRkJUU3hKUVVGSkxFOUJRVThzV1VGQldTeFZRVUZWTEVWQlFVVTdRVUZEZEVNc2QwSkJRVWtzVDBGQlR5eERRVUZETEU5QlFVOHNTMEZCU3l4TlFVRk5MRVZCUVVVN1FVRkROVUlzZFVOQlFXVXNNa0pCUVdsQ0xFTkJRVU03Y1VKQlEzQkRMRTFCUVUwN1FVRkRTQ3gxUTBGQlpTeDFRa0ZCWVN4RFFVRkRPM0ZDUVVOb1F6dHBRa0ZEU2pzN1FVRkZSQ3huUWtGQlRTeFpRVUZaTEVkQlFVY3NaVUZCWlN4RFFVRkRMRTlCUVU4c1EwRkJRenM3TzBGQlFVTXNRVUZIT1VNc2EwSkJRVTBzUTBGQlF5eGpRVUZqTEVOQlFVTXNUMEZCVHl4RlFVRkZMRk5CUVZNc1JVRkJSVHRCUVVOMFF5d3dRa0ZCVlN4RlFVRkZMRXRCUVVzN1FVRkRha0lzZDBKQlFWRXNSVUZCUlN4TFFVRkxPMEZCUTJZc2NVSkJRVXNzUlVGQlJTeFpRVUZaTzJGQlEzUkNMRU5CUVVNc1EwRkJRenM3UVVGRlNDeHRRa0ZCVHl4WlFVRlpMRU5CUVVNN1UwRkRka0k3UTBGRFNpSXNJbVpwYkdVaU9pSmlhVzVrTFdGa1lYQjBaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhSUVpYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdZV1JoY0hSbGNpQm1jbTl0SUNjdUxpOWhaR0Z3ZEdWeUwyRmtZWEIwWlhJbk8xeHVhVzF3YjNKMElHTnpjMEZrWVhCMFpYSWdabkp2YlNBbkxpNHZZV1JoY0hSbGNpOWpjM010WVdSaGNIUmxjaWM3WEc1cGJYQnZjblFnYzNablFXUmhjSFJsY2lCbWNtOXRJQ2N1TGk5aFpHRndkR1Z5TDNOMlp5MWhaR0Z3ZEdWeUp6dGNibWx0Y0c5eWRDQnpkbWRRWVhSb1FXUmhjSFJsY2lCbWNtOXRJQ2N1TGk5aFpHRndkR1Z5TDNOMlp5MXdZWFJvTFdGa1lYQjBaWEluTzF4dVhHNWpiMjV6ZENCVFFWWkZYMUJTVDFBZ1BTQW5YMTl3YlY5aFpHRndkR1Z5Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ0tHVnNaVzFsYm5RcElEMCtJSHRjYmlBZ0lDQXZMeUJTWlhSMWNtNGdZbTkxYm1RZ1lXUmhjSFJsY2lCcFppQndjbVZ6Wlc1MFhHNGdJQ0FnYVdZZ0tHVnNaVzFsYm5SYlUwRldSVjlRVWs5UVhTa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdaV3hsYldWdWRGdFRRVlpGWDFCU1QxQmRPMXh1WEc0Z0lDQWdMeThnVDNJZ1pHVjBaV04wSUdGdVpDQmlhVzVrSUdGa1lYQjBaWEpjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQnNaWFFnWkdWMFpXTjBaV1JCWkdGd2RHVnlJRDBnWVdSaGNIUmxjanRjYmx4dUlDQWdJQ0FnSUNBdkx5QkpaaUJJVkUxTVJXeGxiV1Z1ZENCc2IyRmtJRU5UVTF4dUlDQWdJQ0FnSUNCcFppQW9aV3hsYldWdWRDQnBibk4wWVc1alpXOW1JRWhVVFV4RmJHVnRaVzUwSUh4OElHVnNaVzFsYm5RdWRHRm5UbUZ0WlNBOVBUMGdKM04yWnljcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdSbGRHVmpkR1ZrUVdSaGNIUmxjaUE5SUdOemMwRmtZWEIwWlhJN1hHNWNiaUFnSUNBZ0lDQWdMeThnVDNJZ1UxWkhYRzRnSUNBZ0lDQWdJSDBnWld4elpTQnBaaUFvWld4bGJXVnVkQ0JwYm5OMFlXNWpaVzltSUZOV1IwVnNaVzFsYm5RcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaGxiR1Z0Wlc1MExuUmhaMDVoYldVZ1BUMDlJQ2R3WVhSb0p5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1JsZEdWamRHVmtRV1JoY0hSbGNpQTlJSE4yWjFCaGRHaEJaR0Z3ZEdWeU8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JrWlhSbFkzUmxaRUZrWVhCMFpYSWdQU0J6ZG1kQlpHRndkR1Z5TzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnWW05MWJtUkJaR0Z3ZEdWeUlEMGdaR1YwWldOMFpXUkJaR0Z3ZEdWeUtHVnNaVzFsYm5RcE8xeHVYRzRnSUNBZ0lDQWdJQzh2SUVKcGJtUWdZV1JoY0hSbGNpQjBieUJsYkdWdFpXNTBYRzRnSUNBZ0lDQWdJRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNobGJHVnRaVzUwTENCVFFWWkZYMUJTVDFBc0lIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdWdWRXMWxjbUZpYkdVNklHWmhiSE5sTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdkM0pwZEdGaWJHVTZJR1poYkhObExGeHVJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVTZJR0p2ZFc1a1FXUmhjSFJsY2x4dUlDQWdJQ0FnSUNCOUtUdGNibHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdZbTkxYm1SQlpHRndkR1Z5TzF4dUlDQWdJSDFjYm4wN1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvYmluZC1hZGFwdGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9jcmVhdGVFYXNpbmcgPSByZXF1aXJlKCcuL2NyZWF0ZS1lYXNpbmcnKTtcblxudmFyIF9jcmVhdGVFYXNpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlRWFzaW5nKTtcblxudmFyIF9jcmVhdGVCZXppZXIgPSByZXF1aXJlKCcuL2NyZWF0ZS1iZXppZXInKTtcblxudmFyIF9jcmVhdGVCZXppZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQmV6aWVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gVmFsdWVzXG4vKlxuICAgIEVhc2luZyBmdW5jdGlvbnNcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgXG4gICAgR2VuZXJhdGVzIGFuZCBwcm92aWRlcyBlYXNpbmcgZnVuY3Rpb25zIGJhc2VkIG9uIGJhc2VGdW5jdGlvbiBkZWZpbml0aW9uc1xuICAgIFxuICAgIEEgY2FsbCB0byBlYXNpbmdGdW5jdGlvbi5nZXQoJ2Z1bmN0aW9uTmFtZScpIHJldHVybnMgYSBmdW5jdGlvbiB0aGF0IGNhbiBiZSBwYXNzZWQ6XG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MgMC0xXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBBbXAgbW9kaWZpZXIsIG9ubHkgYWNjZXB0ZWQgaW4gc29tZSBlYXNpbmcgZnVuY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQgaXMgdXNlZCB0byBhZGp1c3Qgb3ZlcmFsbCBzdHJlbmd0aFxuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBFYXNlZCBwcm9ncmVzc1xuICAgICAgICBcbiAgICBXZSBjYW4gZ2VuZXJhdGUgbmV3IGZ1bmN0aW9ucyBieSBzZW5kaW5nIGFuIGVhc2luZyBmdW5jdGlvbiB0aHJvdWdoIGVhc2luZ0Z1bmN0aW9uLmV4dGVuZChuYW1lLCBtZXRob2QpLlxuICAgIFdoaWNoIHdpbGwgbWFrZSBuYW1lSW4sIG5hbWVPdXQgYW5kIG5hbWVJbk91dCBmdW5jdGlvbnMgYXZhaWxhYmxlIHRvIHVzZS5cbiAgICAgICAgXG4gICAgRWFzaW5nIGZ1bmN0aW9ucyBmcm9tIFJvYmVydCBQZW5uZXJcbiAgICBodHRwOi8vd3d3LnJvYmVydHBlbm5lci5jb20vZWFzaW5nL1xuICAgICAgICBcbiAgICBCZXppZXIgY3VydmUgaW50ZXJwcmV0b3IgY3JlYXRlZCBmcm9tIEdhw6t0YW4gUmVuYXVkZWF1J3Mgb3JpZ2luYWwgQmV6aWVyRWFzaW5nICBcbiAgICBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNpbmcvYmxvYi9tYXN0ZXIvaW5kZXguanMgIFxuICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9MSUNFTlNFXG5cbiAgICBBbnRpY2lwYXRlIGVhc2luZyBjcmVhdGVkIGJ5IEVsbGlvdCBHaW5vXG4gICAgaHR0cHM6Ly90d2l0dGVyLmNvbS9FbGxpb3RHZW5vXG4qL1xuLy8gSW1wb3J0c1xudmFyIERFRkFVTFRfQkFDS19TVFJFTkdUSCA9IDEuNTI1O1xudmFyIERFRkFVTFRfUE9XX1NUUkVOR1RIID0gMjtcblxuLypcbiAgICBFYWNoIG9mIHRoZXNlIGJhc2UgZnVuY3Rpb25zIGlzIGFuIGVhc2VJblxuICAgIFxuICAgIE9uIGluaXQsIHdlIHVzZSAubWlycm9yIGFuZCAucmV2ZXJzZSB0byBnZW5lcmF0ZSBlYXNlSW5PdXQgYW5kXG4gICAgZWFzZU91dCBmdW5jdGlvbnMgcmVzcGVjdGl2ZWx5LlxuKi9cbnZhciBiYXNlRWFzaW5nID0ge1xuICAgIGVhc2U6IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICB2YXIgc3RyZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBERUZBVUxUX1BPV19TVFJFTkdUSCA6IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgcmV0dXJuIE1hdGgucG93KHByb2dyZXNzLCBzdHJlbmd0aCk7XG4gICAgfSxcbiAgICBjaXJjOiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgcmV0dXJuIDEgLSBNYXRoLnNpbihNYXRoLmFjb3MocHJvZ3Jlc3MpKTtcbiAgICB9LFxuICAgIGJhY2s6IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICB2YXIgc3RyZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBERUZBVUxUX0JBQ0tfU1RSRU5HVEggOiBhcmd1bWVudHNbMV07XG4gICAgICAgIHJldHVybiBwcm9ncmVzcyAqIHByb2dyZXNzICogKChzdHJlbmd0aCArIDEpICogcHJvZ3Jlc3MgLSBzdHJlbmd0aCk7XG4gICAgfVxufTtcblxuLy8gVXRpbGl0eSBmdW5jdGlvbnNcbnZhciBnZW5lcmF0ZVBvd2VyRWFzaW5nID0gZnVuY3Rpb24gKHN0cmVuZ3RoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICByZXR1cm4gYmFzZUVhc2luZy5lYXNlKHByb2dyZXNzLCBzdHJlbmd0aCk7XG4gICAgfTtcbn07XG5cblsnY3ViaWMnLCAncXVhcnQnLCAncXVpbnQnXS5mb3JFYWNoKGZ1bmN0aW9uIChlYXNpbmdOYW1lLCBpKSB7XG4gICAgcmV0dXJuIGJhc2VFYXNpbmdbZWFzaW5nTmFtZV0gPSBnZW5lcmF0ZVBvd2VyRWFzaW5nKGkgKyAzKTtcbn0pO1xuXG4vLyBHZW5lcmF0ZSBpbi9vdXQvaW5PdXQgdmFyaWF0aW9uc1xuZm9yICh2YXIga2V5IGluIGJhc2VFYXNpbmcpIHtcbiAgICBpZiAoYmFzZUVhc2luZy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHZhciBlYXNpbmdGdW5jdGlvbiA9ICgwLCBfY3JlYXRlRWFzaW5nMi5kZWZhdWx0KShiYXNlRWFzaW5nW2tleV0pO1xuICAgICAgICBiYXNlRWFzaW5nW2tleSArICdJbiddID0gZWFzaW5nRnVuY3Rpb24uaW47XG4gICAgICAgIGJhc2VFYXNpbmdba2V5ICsgJ091dCddID0gZWFzaW5nRnVuY3Rpb24ub3V0O1xuICAgICAgICBiYXNlRWFzaW5nW2tleSArICdJbk91dCddID0gZWFzaW5nRnVuY3Rpb24uaW5PdXQ7XG4gICAgfVxufVxuXG5iYXNlRWFzaW5nLmxpbmVhciA9IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgIHJldHVybiBwcm9ncmVzcztcbn07XG5iYXNlRWFzaW5nLmFudGljaXBhdGUgPSBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICB2YXIgc3RyZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBERUZBVUxUX0JBQ0tfU1RSRU5HVEggOiBhcmd1bWVudHNbMV07XG4gICAgcmV0dXJuIChwcm9ncmVzcyAqPSAyKSA8IDEgPyAwLjUgKiBiYXNlRWFzaW5nLmJhY2tJbihwcm9ncmVzcywgc3RyZW5ndGgpIDogMC41ICogKDIgLSBNYXRoLnBvdygyLCAtMTAgKiAocHJvZ3Jlc3MgLSAxKSkpO1xufTtcblxuYmFzZUVhc2luZy5lYXNpbmdGdW5jdGlvbiA9IF9jcmVhdGVFYXNpbmcyLmRlZmF1bHQ7XG5iYXNlRWFzaW5nLmN1YmljQmV6aWVyID0gX2NyZWF0ZUJlemllcjIuZGVmYXVsdDtcbmJhc2VFYXNpbmcubW9kaWZ5RWFzZSA9IGZ1bmN0aW9uIChlYXNpbmcpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICByZXR1cm4gZWFzaW5nLmFwcGx5KHVuZGVmaW5lZCwgW3Byb2dyZXNzXS5jb25jYXQoYXJncykpO1xuICAgIH07XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBiYXNlRWFzaW5nO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMlZoYzJsdVp5OXdjbVZ6WlhRdFpXRnphVzVuTG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPMEZCT0VKQkxFbEJRVTBzY1VKQlFYRkNMRWRCUVVjc1MwRkJTeXhEUVVGRE8wRkJRM0JETEVsQlFVMHNiMEpCUVc5Q0xFZEJRVWNzUTBGQlF6czdPenM3T3pzN1FVRkJReXhCUVZFdlFpeEpRVUZOTEZWQlFWVXNSMEZCUnp0QlFVTm1MRkZCUVVrc1JVRkJSU3hWUVVGRExGRkJRVkU3V1VGQlJTeFJRVUZSTEhsRVFVRkhMRzlDUVVGdlFqdDNRa0ZCU3l4UlFVRlJMRVZCUVVrc1VVRkJVVHRMUVVGQk8wRkJRM3BGTEZGQlFVa3NSVUZCUlN4VlFVRkJMRkZCUVZFN1pVRkJTU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzB0QlFVRTdRVUZEYmtRc1VVRkJTU3hGUVVGRkxGVkJRVU1zVVVGQlVUdFpRVUZGTEZGQlFWRXNlVVJCUVVjc2NVSkJRWEZDTzJWQlFVc3NRVUZCUXl4UlFVRlJMRWRCUVVjc1VVRkJVU3hKUVVGTExFTkJRVU1zVVVGQlVTeEhRVUZITEVOQlFVTXNRMEZCUVN4SFFVRkpMRkZCUVZFc1IwRkJSeXhSUVVGUkxFTkJRVUVzUVVGQlF6dExRVUZCTzBOQlEzWklPenM3UVVGQlF5eEJRVWRHTEVsQlFVMHNiVUpCUVcxQ0xFZEJRVWNzVlVGQlF5eFJRVUZSTzFkQlFVc3NWVUZCUXl4UlFVRlJPMlZCUVVzc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVWQlFVVXNVVUZCVVN4RFFVRkRPMHRCUVVFN1EwRkJRU3hEUVVGRE96dEJRVVUxUml4RFFVRkRMRTlCUVU4c1JVRkJSU3hQUVVGUExFVkJRVVVzVDBGQlR5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRlZCUVVNc1ZVRkJWU3hGUVVGRkxFTkJRVU03VjBGQlN5eFZRVUZWTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWRCUVVjc2JVSkJRVzFDTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenREUVVGQkxFTkJRVU03T3p0QlFVRkRMRUZCUnpWSExFdEJRVXNzU1VGQlNTeEhRVUZITEVsQlFVa3NWVUZCVlN4RlFVRkZPMEZCUTNoQ0xGRkJRVWtzVlVGQlZTeERRVUZETEdOQlFXTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSVHRCUVVOb1F5eFpRVUZOTEdOQlFXTXNSMEZCUnl3MFFrRkJjVUlzVlVGQlZTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRkROMFFzYTBKQlFWVXNRMEZCU1N4SFFVRkhMRkZCUVVzc1IwRkJSeXhqUVVGakxFTkJRVU1zUlVGQlJTeERRVUZETzBGQlF6TkRMR3RDUVVGVkxFTkJRVWtzUjBGQlJ5eFRRVUZOTEVkQlFVY3NZMEZCWXl4RFFVRkRMRWRCUVVjc1EwRkJRenRCUVVNM1F5eHJRa0ZCVlN4RFFVRkpMRWRCUVVjc1YwRkJVU3hIUVVGSExHTkJRV01zUTBGQlF5eExRVUZMTEVOQlFVTTdTMEZEY0VRN1EwRkRTanM3UVVGRlJDeFZRVUZWTEVOQlFVTXNUVUZCVFN4SFFVRkhMRlZCUVVFc1VVRkJVVHRYUVVGSkxGRkJRVkU3UTBGQlFTeERRVUZETzBGQlEzcERMRlZCUVZVc1EwRkJReXhWUVVGVkxFZEJRVWNzVlVGQlF5eFJRVUZSTzFGQlFVVXNVVUZCVVN4NVJFRkJSeXh4UWtGQmNVSTdWMEZETDBRc1FVRkJReXhEUVVGRExGRkJRVkVzU1VGQlJTeERRVUZETEVOQlFVRXNSMEZCU1N4RFFVRkRMRWRCUVVrc1IwRkJSeXhIUVVGSExGVkJRVlVzUTBGQlF5eE5RVUZOTEVOQlFVTXNVVUZCVVN4RlFVRkZMRkZCUVZFc1EwRkJReXhIUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVsQlFVa3NVVUZCVVN4SFFVRkhMRU5CUVVNc1EwRkJRU3hCUVVGRExFTkJRVU1zUTBGQlFTeEJRVUZETzBOQlFVRXNRMEZCUXpzN1FVRkZka2dzVlVGQlZTeERRVUZETEdOQlFXTXNlVUpCUVhWQ0xFTkJRVU03UVVGRGFrUXNWVUZCVlN4RFFVRkRMRmRCUVZjc2VVSkJRV01zUTBGQlF6dEJRVU55UXl4VlFVRlZMRU5CUVVNc1ZVRkJWU3hIUVVGSExGVkJRVU1zVFVGQlRUdHpRMEZCU3l4SlFVRkpPMEZCUVVvc1dVRkJTVHM3TzFkQlFVc3NWVUZCUXl4UlFVRlJPMlZCUVVzc1RVRkJUU3h0UWtGQlF5eFJRVUZSTEZOQlFVc3NTVUZCU1N4RlFVRkRPMHRCUVVFN1EwRkJRU3hEUVVGRE96dHJRa0ZGZEVVc1ZVRkJWU0lzSW1acGJHVWlPaUp3Y21WelpYUXRaV0Z6YVc1bkxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBVR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUx5cGNiaUFnSUNCRllYTnBibWNnWm5WdVkzUnBiMjV6WEc0Z0lDQWdMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFZ4dUlDQWdJRnh1SUNBZ0lFZGxibVZ5WVhSbGN5QmhibVFnY0hKdmRtbGtaWE1nWldGemFXNW5JR1oxYm1OMGFXOXVjeUJpWVhObFpDQnZiaUJpWVhObFJuVnVZM1JwYjI0Z1pHVm1hVzVwZEdsdmJuTmNiaUFnSUNCY2JpQWdJQ0JCSUdOaGJHd2dkRzhnWldGemFXNW5SblZ1WTNScGIyNHVaMlYwS0NkbWRXNWpkR2x2Yms1aGJXVW5LU0J5WlhSMWNtNXpJR0VnWm5WdVkzUnBiMjRnZEdoaGRDQmpZVzRnWW1VZ2NHRnpjMlZrT2x4dUlDQWdJQ0FnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZCeWIyZHlaWE56SURBdE1WeHVJQ0FnSUNBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwZ0tHOXdkR2x2Ym1Gc0tUb2dRVzF3SUcxdlpHbG1hV1Z5TENCdmJteDVJR0ZqWTJWd2RHVmtJR2x1SUhOdmJXVWdaV0Z6YVc1bklHWjFibU4wYVc5dWMxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZVzVrSUdseklIVnpaV1FnZEc4Z1lXUnFkWE4wSUc5MlpYSmhiR3dnYzNSeVpXNW5kR2hjYmlBZ0lDQWdJQ0FnUUhKbGRIVnliaUJiYm5WdFltVnlYVG9nUldGelpXUWdjSEp2WjNKbGMzTmNiaUFnSUNBZ0lDQWdYRzRnSUNBZ1YyVWdZMkZ1SUdkbGJtVnlZWFJsSUc1bGR5Qm1kVzVqZEdsdmJuTWdZbmtnYzJWdVpHbHVaeUJoYmlCbFlYTnBibWNnWm5WdVkzUnBiMjRnZEdoeWIzVm5hQ0JsWVhOcGJtZEdkVzVqZEdsdmJpNWxlSFJsYm1Rb2JtRnRaU3dnYldWMGFHOWtLUzVjYmlBZ0lDQlhhR2xqYUNCM2FXeHNJRzFoYTJVZ2JtRnRaVWx1TENCdVlXMWxUM1YwSUdGdVpDQnVZVzFsU1c1UGRYUWdablZ1WTNScGIyNXpJR0YyWVdsc1lXSnNaU0IwYnlCMWMyVXVYRzRnSUNBZ0lDQWdJRnh1SUNBZ0lFVmhjMmx1WnlCbWRXNWpkR2x2Ym5NZ1puSnZiU0JTYjJKbGNuUWdVR1Z1Ym1WeVhHNGdJQ0FnYUhSMGNEb3ZMM2QzZHk1eWIySmxjblJ3Wlc1dVpYSXVZMjl0TDJWaGMybHVaeTljYmlBZ0lDQWdJQ0FnWEc0Z0lDQWdRbVY2YVdWeUlHTjFjblpsSUdsdWRHVnljSEpsZEc5eUlHTnlaV0YwWldRZ1puSnZiU0JIWWNPcmRHRnVJRkpsYm1GMVpHVmhkU2R6SUc5eWFXZHBibUZzSUVKbGVtbGxja1ZoYzJsdVp5QWdYRzRnSUNBZ2FIUjBjSE02THk5bmFYUm9kV0l1WTI5dEwyZHlaUzlpWlhwcFpYSXRaV0Z6YVc1bkwySnNiMkl2YldGemRHVnlMMmx1WkdWNExtcHpJQ0JjYmlBZ0lDQm9kSFJ3Y3pvdkwyZHBkR2gxWWk1amIyMHZaM0psTDJKbGVtbGxjaTFsWVhOcGJtY3ZZbXh2WWk5dFlYTjBaWEl2VEVsRFJVNVRSVnh1WEc0Z0lDQWdRVzUwYVdOcGNHRjBaU0JsWVhOcGJtY2dZM0psWVhSbFpDQmllU0JGYkd4cGIzUWdSMmx1YjF4dUlDQWdJR2gwZEhCek9pOHZkSGRwZEhSbGNpNWpiMjB2Uld4c2FXOTBSMlZ1YjF4dUtpOWNiaTh2SUVsdGNHOXlkSE5jYm1sdGNHOXlkQ0JqY21WaGRHVkZZWE5wYm1kR2RXNWpkR2x2YmlCbWNtOXRJQ2N1TDJOeVpXRjBaUzFsWVhOcGJtY25PMXh1YVcxd2IzSjBJR04xWW1salFtVjZhV1Z5SUdaeWIyMGdKeTR2WTNKbFlYUmxMV0psZW1sbGNpYzdYRzVjYmk4dklGWmhiSFZsYzF4dVkyOXVjM1FnUkVWR1FWVk1WRjlDUVVOTFgxTlVVa1ZPUjFSSUlEMGdNUzQxTWpVN1hHNWpiMjV6ZENCRVJVWkJWVXhVWDFCUFYxOVRWRkpGVGtkVVNDQTlJREk3WEc1Y2JpOHFYRzRnSUNBZ1JXRmphQ0J2WmlCMGFHVnpaU0JpWVhObElHWjFibU4wYVc5dWN5QnBjeUJoYmlCbFlYTmxTVzVjYmlBZ0lDQmNiaUFnSUNCUGJpQnBibWwwTENCM1pTQjFjMlVnTG0xcGNuSnZjaUJoYm1RZ0xuSmxkbVZ5YzJVZ2RHOGdaMlZ1WlhKaGRHVWdaV0Z6WlVsdVQzVjBJR0Z1WkZ4dUlDQWdJR1ZoYzJWUGRYUWdablZ1WTNScGIyNXpJSEpsYzNCbFkzUnBkbVZzZVM1Y2Jpb3ZYRzVqYjI1emRDQmlZWE5sUldGemFXNW5JRDBnZTF4dUlDQWdJR1ZoYzJVNklDaHdjbTluY21WemN5d2djM1J5Wlc1bmRHZ2dQU0JFUlVaQlZVeFVYMUJQVjE5VFZGSkZUa2RVU0NrZ1BUNGdjSEp2WjNKbGMzTWdLaW9nYzNSeVpXNW5kR2dzWEc0Z0lDQWdZMmx5WXpvZ2NISnZaM0psYzNNZ1BUNGdNU0F0SUUxaGRHZ3VjMmx1S0UxaGRHZ3VZV052Y3lod2NtOW5jbVZ6Y3lrcExGeHVJQ0FnSUdKaFkyczZJQ2h3Y205bmNtVnpjeXdnYzNSeVpXNW5kR2dnUFNCRVJVWkJWVXhVWDBKQlEwdGZVMVJTUlU1SFZFZ3BJRDArSUNod2NtOW5jbVZ6Y3lBcUlIQnliMmR5WlhOektTQXFJQ2dvYzNSeVpXNW5kR2dnS3lBeEtTQXFJSEJ5YjJkeVpYTnpJQzBnYzNSeVpXNW5kR2dwWEc1OU8xeHVYRzR2THlCVmRHbHNhWFI1SUdaMWJtTjBhVzl1YzF4dVkyOXVjM1FnWjJWdVpYSmhkR1ZRYjNkbGNrVmhjMmx1WnlBOUlDaHpkSEpsYm1kMGFDa2dQVDRnS0hCeWIyZHlaWE56S1NBOVBpQmlZWE5sUldGemFXNW5MbVZoYzJVb2NISnZaM0psYzNNc0lITjBjbVZ1WjNSb0tUdGNibHh1V3lkamRXSnBZeWNzSUNkeGRXRnlkQ2NzSUNkeGRXbHVkQ2RkTG1admNrVmhZMmdvS0dWaGMybHVaMDVoYldVc0lHa3BJRDArSUdKaGMyVkZZWE5wYm1kYlpXRnphVzVuVG1GdFpWMGdQU0JuWlc1bGNtRjBaVkJ2ZDJWeVJXRnphVzVuS0drZ0t5QXpLU2s3WEc1Y2JpOHZJRWRsYm1WeVlYUmxJR2x1TDI5MWRDOXBiazkxZENCMllYSnBZWFJwYjI1elhHNW1iM0lnS0d4bGRDQnJaWGtnYVc0Z1ltRnpaVVZoYzJsdVp5a2dlMXh1SUNBZ0lHbG1JQ2hpWVhObFJXRnphVzVuTG1oaGMwOTNibEJ5YjNCbGNuUjVLR3RsZVNrcElIdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ1pXRnphVzVuUm5WdVkzUnBiMjRnUFNCamNtVmhkR1ZGWVhOcGJtZEdkVzVqZEdsdmJpaGlZWE5sUldGemFXNW5XMnRsZVYwcE8xeHVJQ0FnSUNBZ0lDQmlZWE5sUldGemFXNW5XMkFrZTJ0bGVYMUpibUJkSUQwZ1pXRnphVzVuUm5WdVkzUnBiMjR1YVc0N1hHNGdJQ0FnSUNBZ0lHSmhjMlZGWVhOcGJtZGJZQ1I3YTJWNWZVOTFkR0JkSUQwZ1pXRnphVzVuUm5WdVkzUnBiMjR1YjNWME8xeHVJQ0FnSUNBZ0lDQmlZWE5sUldGemFXNW5XMkFrZTJ0bGVYMUpiazkxZEdCZElEMGdaV0Z6YVc1blJuVnVZM1JwYjI0dWFXNVBkWFE3WEc0Z0lDQWdmVnh1ZlZ4dVhHNWlZWE5sUldGemFXNW5MbXhwYm1WaGNpQTlJSEJ5YjJkeVpYTnpJRDArSUhCeWIyZHlaWE56TzF4dVltRnpaVVZoYzJsdVp5NWhiblJwWTJsd1lYUmxJRDBnS0hCeWIyZHlaWE56TENCemRISmxibWQwYUNBOUlFUkZSa0ZWVEZSZlFrRkRTMTlUVkZKRlRrZFVTQ2tnUFQ1Y2JpQWdJQ0FvS0hCeWIyZHlaWE56S2oweUtTQThJREVwSUQ4Z01DNDFJQ29nWW1GelpVVmhjMmx1Wnk1aVlXTnJTVzRvY0hKdlozSmxjM01zSUhOMGNtVnVaM1JvS1NBNklDQXdMalVnS2lBb01pQXRJRTFoZEdndWNHOTNLRElzSUMweE1DQXFJQ2h3Y205bmNtVnpjeUF0SURFcEtTazdYRzVjYm1KaGMyVkZZWE5wYm1jdVpXRnphVzVuUm5WdVkzUnBiMjRnUFNCamNtVmhkR1ZGWVhOcGJtZEdkVzVqZEdsdmJqdGNibUpoYzJWRllYTnBibWN1WTNWaWFXTkNaWHBwWlhJZ1BTQmpkV0pwWTBKbGVtbGxjanRjYm1KaGMyVkZZWE5wYm1jdWJXOWthV1o1UldGelpTQTlJQ2hsWVhOcGJtY3NJQzR1TG1GeVozTXBJRDArSUNod2NtOW5jbVZ6Y3lrZ1BUNGdaV0Z6YVc1bktIQnliMmR5WlhOekxDQXVMaTVoY21kektUdGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdZbUZ6WlVWaGMybHVaenNpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9lYXNpbmcvcHJlc2V0LWVhc2luZy5qc1xuICoqIG1vZHVsZSBpZCA9IDE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnN0ZXBQcm9ncmVzcyA9IGV4cG9ydHMuc3BlZWRQZXJTZWNvbmQgPSBleHBvcnRzLnNwZWVkUGVyRnJhbWUgPSBleHBvcnRzLnNtb290aCA9IGV4cG9ydHMucmVzdHJpY3QgPSBleHBvcnRzLnJlbGF0aXZlVmFsdWUgPSBleHBvcnRzLnJhbmRvbSA9IGV4cG9ydHMucmFkaWFuc1RvRGVncmVlcyA9IGV4cG9ydHMucG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZSA9IGV4cG9ydHMub2Zmc2V0ID0gZXhwb3J0cy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSA9IGV4cG9ydHMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MgPSBleHBvcnRzLmh5cG90ZW51c2UgPSBleHBvcnRzLmVhc2UgPSBleHBvcnRzLmRpc3RhbmNlID0gZXhwb3J0cy5kaWxhdGUgPSBleHBvcnRzLmRlZ3JlZXNUb1JhZGlhbnMgPSBleHBvcnRzLmFuZ2xlID0gdW5kZWZpbmVkO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgWkVST19QT0lOVCA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDAsXG4gICAgejogMFxufTtcblxudmFyIGRpc3RhbmNlMUQgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBNYXRoLmFicyhhIC0gYik7XG59O1xuXG4vKlxuICAgIEFuZ2xlIGJldHdlZW4gcG9pbnRzXG4gICAgXG4gICAgVHJhbnNsYXRlcyB0aGUgaHlwb3RoZXRpY2FsIGxpbmUgc28gdGhhdCB0aGUgJ2Zyb20nIGNvb3JkaW5hdGVzXG4gICAgYXJlIGF0IDAsMCwgdGhlbiByZXR1cm4gdGhlIGFuZ2xlIHVzaW5nIC5hbmdsZUZyb21DZW50ZXIoKVxuICAgIFxuICAgIEBwYXJhbSBbb2JqZWN0XTogWCBhbmQgWSBjb29yZGluYXRlcyBvZiBmcm9tIHBvaW50XG4gICAgQHBhcmFtIFtvYmplY3RdOiBYIGFuZCBZIGNvcmRpbmF0ZXMgb2YgdG8gcG9pbnRcbiAgICBAcmV0dXJuIFtyYWRpYW5dOiBBbmdsZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzIGluIHJhZGlhbnNcbiovXG52YXIgYW5nbGUgPSBleHBvcnRzLmFuZ2xlID0gZnVuY3Rpb24gKGEpIHtcbiAgICB2YXIgYiA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IFpFUk9fUE9JTlQgOiBhcmd1bWVudHNbMV07XG4gICAgcmV0dXJuIHJhZGlhbnNUb0RlZ3JlZXMoTWF0aC5hdGFuMihhLnggLSBiLngsIGEueSAtIGIueSkpO1xufTtcblxuLypcbiAgICBDb252ZXJ0IGRlZ3JlZXMgdG8gcmFkaWFuc1xuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgaW4gZGVncmVlc1xuICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGluIHJhZGlhbnNcbiovXG52YXIgZGVncmVlc1RvUmFkaWFucyA9IGV4cG9ydHMuZGVncmVlc1RvUmFkaWFucyA9IGZ1bmN0aW9uIChkZWdyZWVzKSB7XG4gICAgcmV0dXJuIGRlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xufTtcblxuLypcbiAgICBEaWxhdGVcbiAgICBcbiAgICBDaGFuZ2UgdGhlIHByb2dyZXNzaW9uIGJldHdlZW4gYSBhbmQgYiBhY2NvcmRpbmcgdG8gZGlsYXRpb24uXG4gICAgXG4gICAgU28gZGlsYXRpb24gPSAwLjUgd291bGQgY2hhbmdlXG4gICAgXG4gICAgYSAtLS0tLS0tLS0gYlxuICAgIFxuICAgIHRvXG4gICAgXG4gICAgYSAtLS0tIGJcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFByZXZpb3VzIHZhbHVlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBEaWxhdGUgcHJvZ3Jlc3MgYnkgeFxuICAgIEByZXR1cm4gW251bWJlcl06IFByZXZpb3VzIHZhbHVlIHBsdXMgdGhlIGRpbGF0ZWQgZGlmZmVyZW5jZVxuKi9cbnZhciBkaWxhdGUgPSBleHBvcnRzLmRpbGF0ZSA9IGZ1bmN0aW9uIChhLCBiLCBkaWxhdGlvbikge1xuICAgIHJldHVybiBhICsgKGIgLSBhKSAqIGRpbGF0aW9uO1xufTtcblxuLypcbiAgICBEaXN0YW5jZVxuICAgIFxuICAgIFJldHVybnMgdGhlIGRpc3RhbmNlIGJldHdlZW4gdHdvIG4gZGltZW5zaW9uYWwgcG9pbnRzLlxuICAgIFxuICAgIEBwYXJhbSBbb2JqZWN0L251bWJlcl06IHggYW5kIHkgb3IganVzdCB4IG9mIHBvaW50IEFcbiAgICBAcGFyYW0gW29iamVjdC9udW1iZXJdOiAob3B0aW9uYWwpOiB4IGFuZCB5IG9yIGp1c3QgeCBvZiBwb2ludCBCXG4gICAgQHJldHVybiBbbnVtYmVyXTogVGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIHR3byBwb2ludHNcbiovXG52YXIgZGlzdGFuY2UgPSBleHBvcnRzLmRpc3RhbmNlID0gZnVuY3Rpb24gKGEpIHtcbiAgICB2YXIgYiA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IFpFUk9fUE9JTlQgOiBhcmd1bWVudHNbMV07XG5cbiAgICAvLyAxRCBkaW1lbnNpb25zXG4gICAgaWYgKCgwLCBfdXRpbHMuaXNOdW0pKGEpKSB7XG4gICAgICAgIHJldHVybiBkaXN0YW5jZTFEKGEsIGIpO1xuXG4gICAgICAgIC8vIE11bHRpLWRpbWVuc2lvbmFsXG4gICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciB4RGVsdGEgPSBkaXN0YW5jZTFEKGEueCwgYi54KTtcbiAgICAgICAgICAgIHZhciB5RGVsdGEgPSBkaXN0YW5jZTFEKGEueSwgYi55KTtcbiAgICAgICAgICAgIHZhciB6RGVsdGEgPSAoMCwgX3V0aWxzLmlzTnVtKShhLnopID8gZGlzdGFuY2UxRChhLnosIGIueikgOiAwO1xuXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHhEZWx0YSwgMikgKyBNYXRoLnBvdyh5RGVsdGEsIDIpICsgTWF0aC5wb3coekRlbHRhLCAyKSk7XG4gICAgICAgIH1cbn07XG5cbi8qXG4gICAgRWFzZSB2YWx1ZSB3aXRoaW4gcmFuZ2VkIHBhcmFtZXRlcnNcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzIGJldHdlZW4gMCBhbmQgMVxuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgb2YgMCBwcm9ncmVzc1xuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgb2YgMSBwcm9ncmVzc1xuICAgIEBwYXJhbSBbc3RyaW5nIHx8IGZ1bmN0aW9uXTogTmFtZSBvZiBwcmVzZXQgZWFzaW5nXG4gICAgICAgIHRvIHVzZSBvciBnZW5lcmF0ZWQgZWFzaW5nIGZ1bmN0aW9uXG4gICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgb2YgZWFzZWQgcHJvZ3Jlc3MgaW4gcmFuZ2VcbiovXG52YXIgZWFzZSA9IGV4cG9ydHMuZWFzZSA9IGZ1bmN0aW9uIChwcm9ncmVzcywgZnJvbSwgdG8sIGVhc2UpIHtcbiAgICB2YXIgcHJvZ3Jlc3NMaW1pdGVkID0gcmVzdHJpY3QocHJvZ3Jlc3MsIDAsIDEpO1xuICAgIHZhciBlYXNlZFByb2dyZXNzID0gZWFzZShwcm9ncmVzc0xpbWl0ZWQpO1xuXG4gICAgcmV0dXJuIGdldFZhbHVlRnJvbVByb2dyZXNzKGVhc2VkUHJvZ3Jlc3MsIGZyb20sIHRvKTtcbn07XG5cbi8qXG4gICAgSHlwb3RlbnVzZVxuICAgIFxuICAgIFJldHVybnMgdGhlIGh5cG90ZW51c2UsIHNpZGUgQywgZ2l2ZW4gdGhlIGxlbmd0aHMgb2Ygc2lkZXMgQSBhbmQgQi5cbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IExlbmd0aCBvZiBBXG4gICAgQHBhcmFtIFtudW1iZXJdOiBMZW5ndGggb2YgQlxuICAgIEByZXR1cm4gW251bWJlcl06IExlbmd0aCBvZiBDXG4qL1xudmFyIGh5cG90ZW51c2UgPSBleHBvcnRzLmh5cG90ZW51c2UgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBNYXRoLnNxcnQoYSAqIGEgKyBiICogYik7XG59O1xuXG4vKlxuICAgIFZhbHVlIGluIHJhbmdlIGZyb20gcHJvZ3Jlc3NcbiAgICBcbiAgICBHaXZlbiBhIGxvd2VyIGxpbWl0IGFuZCBhbiB1cHBlciBsaW1pdCwgd2UgcmV0dXJuIHRoZSB2YWx1ZSB3aXRoaW5cbiAgICB0aGF0IHJhbmdlIGFzIGV4cHJlc3NlZCBieSBwcm9ncmVzcyAoYSBudW1iZXIgZnJvbSAwLTEpXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBUaGUgcHJvZ3Jlc3MgYmV0d2VlbiBsb3dlciBhbmQgdXBwZXIgbGltaXRzIGV4cHJlc3NlZCAwLTFcbiAgICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IG9mIHJhbmdlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBVcHBlciBsaW1pdCBvZiByYW5nZVxuICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGFzIGNhbGN1bGF0ZWQgZnJvbSBwcm9ncmVzcyB3aXRoaW4gcmFuZ2UgKG5vdCBsaW1pdGVkIHdpdGhpbiByYW5nZSlcbiovXG52YXIgZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MgPSBleHBvcnRzLmdldFZhbHVlRnJvbVByb2dyZXNzID0gZnVuY3Rpb24gKHByb2dyZXNzLCBmcm9tLCB0bykge1xuICAgIHJldHVybiAtcHJvZ3Jlc3MgKiBmcm9tICsgcHJvZ3Jlc3MgKiB0byArIGZyb207XG59O1xuXG4vKlxuICAgIFByb2dyZXNzIHdpdGhpbiBnaXZlbiByYW5nZVxuICAgIFxuICAgIEdpdmVuIGEgbG93ZXIgbGltaXQgYW5kIGFuIHVwcGVyIGxpbWl0LCB3ZSByZXR1cm4gdGhlIHByb2dyZXNzXG4gICAgKGV4cHJlc3NlZCBhcyBhIG51bWJlciAwLTEpIHJlcHJlc2VudGVkIGJ5IHRoZSBnaXZlbiB2YWx1ZSwgYW5kXG4gICAgbGltaXQgdGhhdCBwcm9ncmVzcyB0byB3aXRoaW4gMC0xLlxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgdG8gZmluZCBwcm9ncmVzcyB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiAgICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXRcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBQcm9ncmVzcyBvZiB2YWx1ZSB3aXRoaW4gcmFuZ2UgYXMgZXhwcmVzc2VkIDAtMVxuKi9cbnZhciBnZXRQcm9ncmVzc0Zyb21WYWx1ZSA9IGV4cG9ydHMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUsIGZyb20sIHRvKSB7XG4gICAgcmV0dXJuICh2YWx1ZSAtIGZyb20pIC8gKHRvIC0gZnJvbSk7XG59O1xuXG4vKlxuICAgIE9mZnNldCBiZXR3ZWVuIHR3byBvYmplY3RzIG9mIG51bWJlcnNcblxuICAgIElmIHByb3BlcnR5IGlzIGZvdW5kIGluIGIgbm90IHByZXNlbnQgaW4gYSwgaXQgd2lsbCByZXR1cm4gYDBgIGZvciB0aGF0IHByb3AuXG4gICAgXG4gICAgQHBhcmFtIFtQb2ludF06IEZpcnN0IG9iamVjdFxuICAgIEBwYXJhbSBbUG9pbnRdOiBTZWNvbmQgb2JqZWN0XG4gICAgQHJldHVybiBbT2Zmc2V0XTogRGlzdGFuY2UgbWV0cmljcyBiZXR3ZWVuIHR3byBwb2ludHNcbiovXG52YXIgb2Zmc2V0ID0gZXhwb3J0cy5vZmZzZXQgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgIHZhciBvZmZzZXQgPSB7fTtcblxuICAgIGZvciAodmFyIGtleSBpbiBiKSB7XG4gICAgICAgIGlmIChiLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIG9mZnNldFtrZXldID0gKDAsIF91dGlscy5oYXNQcm9wZXJ0eSkoYSwga2V5KSA/IGJba2V5XSAtIGFba2V5XSA6IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2Zmc2V0O1xufTtcblxuLypcbiAgICBQb2ludCBmcm9tIGFuZ2xlIGFuZCBkaXN0YW5jZVxuICAgIFxuICAgIEBwYXJhbSBbb2JqZWN0XTogMkQgcG9pbnQgb2Ygb3JpZ2luXG4gICAgQHBhcmFtIFtudW1iZXJdOiBBbmdsZSBmcm9tIG9yaWdpblxuICAgIEBwYXJhbSBbbnVtYmVyXTogRGlzdGFuY2UgZnJvbSBvcmlnaW5cbiAgICBAcmV0dXJuIFtvYmplY3RdOiBDYWxjdWxhdGVkIDJEIHBvaW50XG4qL1xudmFyIHBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UgPSBleHBvcnRzLnBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UgPSBmdW5jdGlvbiAob3JpZ2luLCBhbmdsZSwgZGlzdGFuY2UpIHtcbiAgICBhbmdsZSA9IGRlZ3JlZXNUb1JhZGlhbnMoYW5nbGUpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogZGlzdGFuY2UgKiBNYXRoLmNvcyhhbmdsZSkgKyBvcmlnaW4ueCxcbiAgICAgICAgeTogZGlzdGFuY2UgKiBNYXRoLnNpbihhbmdsZSkgKyBvcmlnaW4ueVxuICAgIH07XG59O1xuXG4vKlxuICAgIENvbnZlcnQgcmFkaWFucyB0byBkZWdyZWVzXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBpbiByYWRpYW5zXG4gICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgaW4gZGVncmVlc1xuKi9cbnZhciByYWRpYW5zVG9EZWdyZWVzID0gZXhwb3J0cy5yYWRpYW5zVG9EZWdyZWVzID0gZnVuY3Rpb24gKHJhZGlhbnMpIHtcbiAgICByZXR1cm4gcmFkaWFucyAqIDE4MCAvIE1hdGguUEk7XG59O1xuXG4vKlxuICAgIFJldHVybiByYW5kb20gbnVtYmVyIGJldHdlZW4gcmFuZ2VcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogT3V0cHV0IG1pbmltdW1cbiAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogT3V0cHV0IG1heGltdW1cbiAgICBAcmV0dXJuIFtudW1iZXJdOiBSYW5kb20gbnVtYmVyIHdpdGhpbiByYW5nZSwgb3IgMCBhbmQgMSBpZiBub25lIHByb3ZpZGVkXG4qL1xudmFyIHJhbmRvbSA9IGV4cG9ydHMucmFuZG9tID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBtaW4gPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyAwIDogYXJndW1lbnRzWzBdO1xuICAgIHZhciBtYXggPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyAxIDogYXJndW1lbnRzWzFdO1xuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XG59O1xuXG4vKlxuICAgIENhbGN1bGF0ZSByZWxhdGl2ZSB2YWx1ZVxuICAgIFxuICAgIFRha2VzIHRoZSBvcGVyYXRvciBhbmQgdmFsdWUgZnJvbSBhIHN0cmluZywgaWUgXCIrPTVcIiwgYW5kIGFwcGxpZXNcbiAgICB0byB0aGUgY3VycmVudCB2YWx1ZSB0byByZXNvbHZlIGEgbmV3IHRhcmdldC5cbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcbiAgICBAcGFyYW0gW3N0cmluZ106IFJlbGF0aXZlIHZhbHVlXG4gICAgQHJldHVybiBbbnVtYmVyXTogTmV3IHZhbHVlXG4qL1xudmFyIHJlbGF0aXZlVmFsdWUgPSBleHBvcnRzLnJlbGF0aXZlVmFsdWUgPSBmdW5jdGlvbiAoY3VycmVudCwgcmVsYXRpdmUpIHtcbiAgICB2YXIgbmV3VmFsdWUgPSBjdXJyZW50O1xuICAgIHZhciBlcXVhdGlvbiA9IHJlbGF0aXZlLnNwbGl0KCc9Jyk7XG4gICAgdmFyIG9wZXJhdG9yID0gZXF1YXRpb25bMF07XG5cbiAgICB2YXIgX3NwbGl0VmFsdWVVbml0ID0gKDAsIF91dGlscy5zcGxpdFZhbHVlVW5pdCkoZXF1YXRpb25bMV0pO1xuXG4gICAgdmFyIHVuaXQgPSBfc3BsaXRWYWx1ZVVuaXQudW5pdDtcbiAgICB2YXIgdmFsdWUgPSBfc3BsaXRWYWx1ZVVuaXQudmFsdWU7XG5cbiAgICB2YWx1ZSA9IHBhcnNlRmxvYXQodmFsdWUpO1xuXG4gICAgc3dpdGNoIChvcGVyYXRvcikge1xuICAgICAgICBjYXNlICcrJzpcbiAgICAgICAgICAgIG5ld1ZhbHVlICs9IHZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJy0nOlxuICAgICAgICAgICAgbmV3VmFsdWUgLT0gdmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnKic6XG4gICAgICAgICAgICBuZXdWYWx1ZSAqPSB2YWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICcvJzpcbiAgICAgICAgICAgIG5ld1ZhbHVlIC89IHZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKHVuaXQpIHtcbiAgICAgICAgbmV3VmFsdWUgKz0gdW5pdDtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3VmFsdWU7XG59O1xuXG4vKlxuICAgIFJlc3RyaWN0IHZhbHVlIHRvIHJhbmdlXG4gICAgXG4gICAgUmV0dXJuIHZhbHVlIHdpdGhpbiB0aGUgcmFuZ2Ugb2YgbG93ZXJMaW1pdCBhbmQgdXBwZXJMaW1pdFxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgdG8ga2VlcCB3aXRoaW4gcmFuZ2VcbiAgICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IG9mIHJhbmdlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBVcHBlciBsaW1pdCBvZiByYW5nZVxuICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGFzIGxpbWl0ZWQgd2l0aGluIGdpdmVuIHJhbmdlXG4qL1xudmFyIHJlc3RyaWN0ID0gZXhwb3J0cy5yZXN0cmljdCA9IGZ1bmN0aW9uICh2YWx1ZSwgbWluLCBtYXgpIHtcbiAgICByZXR1cm4gTWF0aC5tYXgoTWF0aC5taW4odmFsdWUsIG1heCksIG1pbik7XG59O1xuXG4vKlxuICAgIEZyYW1lcmF0ZS1pbmRlcGVuZGVudCBzbW9vdGhpbmdcblxuICAgIEBwYXJhbSBbbnVtYmVyXTogTmV3IHZhbHVlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBPbGQgdmFsdWVcbiAgICBAcGFyYW0gW251bWJlcl06IEZyYW1lIGR1cmF0aW9uXG4gICAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IFNtb290aGluZyAoMCBpcyBub25lKVxuKi9cbnZhciBzbW9vdGggPSBleHBvcnRzLnNtb290aCA9IGZ1bmN0aW9uIChuZXdWYWx1ZSwgb2xkVmFsdWUsIGR1cmF0aW9uKSB7XG4gICAgdmFyIHNtb290aGluZyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMyB8fCBhcmd1bWVudHNbM10gPT09IHVuZGVmaW5lZCA/IDAgOiBhcmd1bWVudHNbM107XG4gICAgcmV0dXJuICgwLCBfdXRpbHMudG9EZWNpbWFsKShvbGRWYWx1ZSArIGR1cmF0aW9uICogKG5ld1ZhbHVlIC0gb2xkVmFsdWUpIC8gTWF0aC5tYXgoc21vb3RoaW5nLCBkdXJhdGlvbikpO1xufTtcblxuLypcbiAgICBDb252ZXJ0IHggcGVyIHNlY29uZCB0byBwZXIgZnJhbWUgdmVsb2NpdHkgYmFzZWQgb24gZnBzXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBVbml0IHBlciBzZWNvbmRcbiAgICBAcGFyYW0gW251bWJlcl06IEZyYW1lIGR1cmF0aW9uIGluIG1zXG4qL1xudmFyIHNwZWVkUGVyRnJhbWUgPSBleHBvcnRzLnNwZWVkUGVyRnJhbWUgPSBmdW5jdGlvbiAoeHBzLCBmcmFtZUR1cmF0aW9uKSB7XG4gICAgcmV0dXJuICgwLCBfdXRpbHMuaXNOdW0pKHhwcykgPyB4cHMgLyAoMTAwMCAvIGZyYW1lRHVyYXRpb24pIDogMDtcbn07XG5cbi8qXG4gICAgQ29udmVydCB2ZWxvY2l0eSBpbnRvIHZlbGljaXR5IHBlciBzZWNvbmRcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFVuaXQgcGVyIGZyYW1lXG4gICAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvbiBpbiBtc1xuKi9cbnZhciBzcGVlZFBlclNlY29uZCA9IGV4cG9ydHMuc3BlZWRQZXJTZWNvbmQgPSBmdW5jdGlvbiAodmVsb2NpdHksIGZyYW1lRHVyYXRpb24pIHtcbiAgICByZXR1cm4gdmVsb2NpdHkgKiAoMTAwMCAvIGZyYW1lRHVyYXRpb24pO1xufTtcblxuLypcbiAgICBDcmVhdGUgc3RlcHBlZCB2ZXJzaW9uIG9mIDAtMSBwcm9ncmVzc1xuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICAgIEBwYXJhbSBbaW50XTogTnVtYmVyIG9mIHN0ZXBzXG4gICAgQHJldHVybiBbbnVtYmVyXTogU3RlcHBlZCB2YWx1ZVxuKi9cbnZhciBzdGVwUHJvZ3Jlc3MgPSBleHBvcnRzLnN0ZXBQcm9ncmVzcyA9IGZ1bmN0aW9uIChwcm9ncmVzcywgc3RlcHMpIHtcbiAgICB2YXIgc2VnbWVudCA9IDEgLyAoc3RlcHMgLSAxKTtcbiAgICB2YXIgdGFyZ2V0ID0gMSAtIDEgLyBzdGVwcztcbiAgICB2YXIgcHJvZ3Jlc3NPZlRhcmdldCA9IE1hdGgubWluKHByb2dyZXNzIC8gdGFyZ2V0LCAxKTtcblxuICAgIHJldHVybiBNYXRoLmZsb29yKHByb2dyZXNzT2ZUYXJnZXQgLyBzZWdtZW50KSAqIHNlZ21lbnQ7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1NdlkyRnNZeTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPMEZCVDBFc1NVRkJUU3hWUVVGVkxFZEJRVWM3UVVGRFppeExRVUZETEVWQlFVVXNRMEZCUXp0QlFVTktMRXRCUVVNc1JVRkJSU3hEUVVGRE8wRkJRMG9zUzBGQlF5eEZRVUZGTEVOQlFVTTdRMEZEVUN4RFFVRkRPenRCUVVWR0xFbEJRVTBzVlVGQlZTeEhRVUZITEZWQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNN1YwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1EwRkJRVHM3T3pzN096czdPenM3TzBGQlFVTXNRVUZaZEVNc1NVRkJUU3hMUVVGTExGZEJRVXdzUzBGQlN5eEhRVUZITEZWQlFVTXNRMEZCUXp0UlFVRkZMRU5CUVVNc2VVUkJRVWNzVlVGQlZUdFhRVUZMTEdkQ1FVRm5RaXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBOQlFVRTdPenM3T3pzN08wRkJRVU1zUVVGUmVFWXNTVUZCVFN4blFrRkJaMElzVjBGQmFFSXNaMEpCUVdkQ0xFZEJRVWNzVlVGQlF5eFBRVUZQTzFkQlFVc3NUMEZCVHl4SFFVRkhMRWxCUVVrc1EwRkJReXhGUVVGRkxFZEJRVWNzUjBGQlJ6dERRVUZCT3pzN096czdPenM3T3pzN096czdPenM3T3p0QlFVRkRMRUZCYjBJNVJDeEpRVUZOTEUxQlFVMHNWMEZCVGl4TlFVRk5MRWRCUVVjc1ZVRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEZGQlFWRTdWMEZCU3l4RFFVRkRMRWRCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZCTEVkQlFVa3NVVUZCVVN4QlFVRkRPME5CUVVFN096czdPenM3T3pzN08wRkJRVU1zUVVGWE5VUXNTVUZCVFN4UlFVRlJMRmRCUVZJc1VVRkJVU3hIUVVGSExGVkJRVU1zUTBGQlF5eEZRVUZ4UWp0UlFVRnVRaXhEUVVGRExIbEVRVUZITEZWQlFWVTdPenRCUVVWMFF5eFJRVUZKTEZkQmFFVktMRXRCUVVzc1JVRm5SVXNzUTBGQlF5eERRVUZETEVWQlFVVTdRVUZEVml4bFFVRlBMRlZCUVZVc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZET3pzN1FVRkJReXhMUVVjelFpeE5RVUZOTzBGQlEwZ3NaMEpCUVUwc1RVRkJUU3hIUVVGSExGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU53UXl4blFrRkJUU3hOUVVGTkxFZEJRVWNzVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBGQlEzQkRMR2RDUVVGTkxFMUJRVTBzUjBGQlJ5eEJRVUZETEZkQmRrVndRaXhMUVVGTExFVkJkVVZ4UWl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWtzVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXpzN1FVRkZka1FzYlVKQlFVOHNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGRExFMUJRVTBzUlVGQlNTeERRVUZETEdGQlFVc3NUVUZCVFN4RlFVRkpMRU5CUVVNc1EwRkJReXhaUVVGSkxFMUJRVTBzUlVGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMU5CUTI1Rk8wTkJRMG83T3pzN096czdPenM3T3p0QlFVRkRMRUZCV1Vzc1NVRkJUU3hKUVVGSkxGZEJRVW9zU1VGQlNTeEhRVUZITEZWQlFVTXNVVUZCVVN4RlFVRkZMRWxCUVVrc1JVRkJSU3hGUVVGRkxFVkJRVVVzU1VGQlNTeEZRVUZMTzBGQlF6bERMRkZCUVUwc1pVRkJaU3hIUVVGSExGRkJRVkVzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJRMnBFTEZGQlFVMHNZVUZCWVN4SFFVRkhMRWxCUVVrc1EwRkJReXhsUVVGbExFTkJRVU1zUTBGQlF6czdRVUZGTlVNc1YwRkJUeXh2UWtGQmIwSXNRMEZCUXl4aFFVRmhMRVZCUVVVc1NVRkJTU3hGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzBOQlEzaEVPenM3T3pzN096czdPenRCUVVGRExFRkJWMHNzU1VGQlRTeFZRVUZWTEZkQlFWWXNWVUZCVlN4SFFVRkhMRlZCUVVNc1EwRkJReXhGUVVGRkxFTkJRVU03VjBGQlN5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRUZCUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4QlFVRkRMRU5CUVVNN1EwRkJRVHM3T3pzN096czdPenM3T3p0QlFVRkRMRUZCWVRGRUxFbEJRVTBzYjBKQlFXOUNMRmRCUVhCQ0xHOUNRVUZ2UWl4SFFVRkhMRlZCUVVNc1VVRkJVU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEZRVUZGTzFkQlFVc3NRVUZCUXl4RFFVRkZMRkZCUVZFc1IwRkJSeXhKUVVGSkxFZEJRVXNzVVVGQlVTeEhRVUZITEVWQlFVVXNRVUZCUXl4SFFVRkhMRWxCUVVrN1EwRkJRVHM3T3pzN096czdPenM3T3pzN1FVRkJReXhCUVdOc1J5eEpRVUZOTEc5Q1FVRnZRaXhYUVVGd1FpeHZRa0ZCYjBJc1IwRkJSeXhWUVVGRExFdEJRVXNzUlVGQlJTeEpRVUZKTEVWQlFVVXNSVUZCUlR0WFFVRkxMRU5CUVVNc1MwRkJTeXhIUVVGSExFbEJRVWtzUTBGQlFTeEpRVUZMTEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVFc1FVRkJRenREUVVGQk96czdPenM3T3pzN096dEJRVUZETEVGQlZ5OUZMRWxCUVUwc1RVRkJUU3hYUVVGT0xFMUJRVTBzUjBGQlJ5eFZRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVzN1FVRkROVUlzVVVGQlRTeE5RVUZOTEVkQlFVY3NSVUZCUlN4RFFVRkRPenRCUVVWc1FpeFRRVUZMTEVsQlFVa3NSMEZCUnl4SlFVRkpMRU5CUVVNc1JVRkJSVHRCUVVObUxGbEJRVWtzUTBGQlF5eERRVUZETEdOQlFXTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSVHRCUVVOMlFpeHJRa0ZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExGZEJia3AwUWl4WFFVRlhMRVZCYlVwMVFpeERRVUZETEVWQlFVVXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03VTBGRE0wUTdTMEZEU2pzN1FVRkZSQ3hYUVVGUExFMUJRVTBzUTBGQlF6dERRVU5xUWpzN096czdPenM3T3p0QlFVRkRMRUZCVlVzc1NVRkJUU3g1UWtGQmVVSXNWMEZCZWtJc2VVSkJRWGxDTEVkQlFVY3NWVUZCUXl4TlFVRk5MRVZCUVVVc1MwRkJTeXhGUVVGRkxGRkJRVkVzUlVGQlN6dEJRVU5zUlN4VFFVRkxMRWRCUVVjc1owSkJRV2RDTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN08wRkJSV2hETEZkQlFVODdRVUZEU0N4VFFVRkRMRVZCUVVVc1VVRkJVU3hIUVVGSExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1RVRkJUU3hEUVVGRExFTkJRVU03UVVGRGVFTXNVMEZCUXl4RlFVRkZMRkZCUVZFc1IwRkJSeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRTFCUVUwc1EwRkJReXhEUVVGRE8wdEJRek5ETEVOQlFVTTdRMEZEVERzN096czdPenM3UVVGQlF5eEJRVkZMTEVsQlFVMHNaMEpCUVdkQ0xGZEJRV2hDTEdkQ1FVRm5RaXhIUVVGSExGVkJRVU1zVDBGQlR6dFhRVUZMTEU5QlFVOHNSMEZCUnl4SFFVRkhMRWRCUVVjc1NVRkJTU3hEUVVGRExFVkJRVVU3UTBGQlFUczdPenM3T3pzN08wRkJRVU1zUVVGVE9VUXNTVUZCVFN4TlFVRk5MRmRCUVU0c1RVRkJUU3hIUVVGSE8xRkJRVU1zUjBGQlJ5eDVSRUZCUnl4RFFVRkRPMUZCUVVVc1IwRkJSeXg1UkVGQlJ5eERRVUZETzFkQlFVc3NTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hKUVVGSkxFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVRXNRVUZCUXl4SFFVRkhMRWRCUVVjN1EwRkJRVHM3T3pzN096czdPenM3TzBGQlFVTXNRVUZaZGtVc1NVRkJUU3hoUVVGaExGZEJRV0lzWVVGQllTeEhRVUZITEZWQlFVTXNUMEZCVHl4RlFVRkZMRkZCUVZFc1JVRkJTenRCUVVOb1JDeFJRVUZKTEZGQlFWRXNSMEZCUnl4UFFVRlBMRU5CUVVNN1FVRkRka0lzVVVGQlRTeFJRVUZSTEVkQlFVY3NVVUZCVVN4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dEJRVU55UXl4UlFVRk5MRkZCUVZFc1IwRkJSeXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdPekJDUVVOUUxGZEJlRTEwUWl4alFVRmpMRVZCZDAxMVFpeFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN08xRkJRVE5ETEVsQlFVa3NiVUpCUVVvc1NVRkJTVHRSUVVGRkxFdEJRVXNzYlVKQlFVd3NTMEZCU3pzN1FVRkZha0lzVTBGQlN5eEhRVUZITEZWQlFWVXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenM3UVVGRk1VSXNXVUZCVVN4UlFVRlJPMEZCUTJoQ0xHRkJRVXNzUjBGQlJ6dEJRVU5LTEc5Q1FVRlJMRWxCUVVrc1MwRkJTeXhEUVVGRE8wRkJRMnhDTEd0Q1FVRk5PMEZCUVVFc1FVRkRWaXhoUVVGTExFZEJRVWM3UVVGRFNpeHZRa0ZCVVN4SlFVRkpMRXRCUVVzc1EwRkJRenRCUVVOc1FpeHJRa0ZCVFR0QlFVRkJMRUZCUTFZc1lVRkJTeXhIUVVGSE8wRkJRMG9zYjBKQlFWRXNTVUZCU1N4TFFVRkxMRU5CUVVNN1FVRkRiRUlzYTBKQlFVMDdRVUZCUVN4QlFVTldMR0ZCUVVzc1IwRkJSenRCUVVOS0xHOUNRVUZSTEVsQlFVa3NTMEZCU3l4RFFVRkRPMEZCUTJ4Q0xHdENRVUZOTzBGQlFVRXNTMEZEVkRzN1FVRkZSQ3hSUVVGSkxFbEJRVWtzUlVGQlJUdEJRVU5PTEdkQ1FVRlJMRWxCUVVrc1NVRkJTU3hEUVVGRE8wdEJRM0JDT3p0QlFVVkVMRmRCUVU4c1VVRkJVU3hEUVVGRE8wTkJRMjVDT3pzN096czdPenM3T3pzN1FVRkJReXhCUVZsTExFbEJRVTBzVVVGQlVTeFhRVUZTTEZGQlFWRXNSMEZCUnl4VlFVRkRMRXRCUVVzc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ6dFhRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEVWQlFVVXNSMEZCUnl4RFFVRkRMRVZCUVVVc1IwRkJSeXhEUVVGRE8wTkJRVUU3T3pzN096czdPenM3UVVGQlF5eEJRVlV4UlN4SlFVRk5MRTFCUVUwc1YwRkJUaXhOUVVGTkxFZEJRVWNzVlVGQlF5eFJRVUZSTEVWQlFVVXNVVUZCVVN4RlFVRkZMRkZCUVZFN1VVRkJSU3hUUVVGVExIbEVRVUZITEVOQlFVTTdWMEZCU3l4WFFYSlFia1VzVTBGQlV5eEZRWEZRYjBVc1VVRkJVU3hIUVVGSkxGRkJRVkVzU1VGQlNTeFJRVUZSTEVkQlFVY3NVVUZCVVN4RFFVRkJMRUZCUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEZOQlFWTXNSVUZCUlN4UlFVRlJMRU5CUVVNc1FVRkJReXhEUVVGRE8wTkJRVUU3T3pzN096czdPMEZCUVVNc1FVRlJla29zU1VGQlRTeGhRVUZoTEZkQlFXSXNZVUZCWVN4SFFVRkhMRlZCUVVNc1IwRkJSeXhGUVVGRkxHRkJRV0U3VjBGQlN5eEJRVUZETEZkQkwxQnNSQ3hMUVVGTExFVkJLMUJ0UkN4SFFVRkhMRU5CUVVNc1IwRkJTU3hIUVVGSExFbEJRVWtzU1VGQlNTeEhRVUZITEdGQlFXRXNRMEZCUVN4QlFVRkRMRWRCUVVjc1EwRkJRenREUVVGQk96czdPenM3T3p0QlFVRkRMRUZCVVRsR0xFbEJRVTBzWTBGQll5eFhRVUZrTEdOQlFXTXNSMEZCUnl4VlFVRkRMRkZCUVZFc1JVRkJSU3hoUVVGaE8xZEJRVXNzVVVGQlVTeEpRVUZKTEVsQlFVa3NSMEZCUnl4aFFVRmhMRU5CUVVFc1FVRkJRenREUVVGQk96czdPenM3T3pzN1FVRkJReXhCUVZOMFJpeEpRVUZOTEZsQlFWa3NWMEZCV2l4WlFVRlpMRWRCUVVjc1ZVRkJReXhSUVVGUkxFVkJRVVVzUzBGQlN5eEZRVUZMTzBGQlF6ZERMRkZCUVUwc1QwRkJUeXhIUVVGSExFTkJRVU1zU1VGQlNTeExRVUZMTEVkQlFVY3NRMEZCUXl4RFFVRkJMRUZCUVVNc1EwRkJRenRCUVVOb1F5eFJRVUZOTEUxQlFVMHNSMEZCUnl4RFFVRkRMRWRCUVVrc1EwRkJReXhIUVVGSExFdEJRVXNzUVVGQlF5eERRVUZETzBGQlF5OUNMRkZCUVUwc1owSkJRV2RDTEVkQlFVY3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhSUVVGUkxFZEJRVWNzVFVGQlRTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPenRCUVVWNFJDeFhRVUZQTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1owSkJRV2RDTEVkQlFVY3NUMEZCVHl4RFFVRkRMRWRCUVVjc1QwRkJUeXhEUVVGRE8wTkJRek5FTEVOQlFVTWlMQ0ptYVd4bElqb2lZMkZzWXk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRGQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3WEc0Z0lDQWdhR0Z6VUhKdmNHVnlkSGtzWEc0Z0lDQWdhWE5PZFcwc1hHNGdJQ0FnYzNCc2FYUldZV3gxWlZWdWFYUXNYRzRnSUNBZ2RHOUVaV05wYldGc1hHNTlJR1p5YjIwZ0p5NHZkWFJwYkhNbk8xeHVYRzVqYjI1emRDQmFSVkpQWDFCUFNVNVVJRDBnZTF4dUlDQWdJSGc2SURBc1hHNGdJQ0FnZVRvZ01DeGNiaUFnSUNCNk9pQXdYRzU5TzF4dVhHNWpiMjV6ZENCa2FYTjBZVzVqWlRGRUlEMGdLR0VzSUdJcElEMCtJRTFoZEdndVlXSnpLR0VnTFNCaUtUdGNibHh1THlwY2JpQWdJQ0JCYm1kc1pTQmlaWFIzWldWdUlIQnZhVzUwYzF4dUlDQWdJRnh1SUNBZ0lGUnlZVzV6YkdGMFpYTWdkR2hsSUdoNWNHOTBhR1YwYVdOaGJDQnNhVzVsSUhOdklIUm9ZWFFnZEdobElDZG1jbTl0SnlCamIyOXlaR2x1WVhSbGMxeHVJQ0FnSUdGeVpTQmhkQ0F3TERBc0lIUm9aVzRnY21WMGRYSnVJSFJvWlNCaGJtZHNaU0IxYzJsdVp5QXVZVzVuYkdWR2NtOXRRMlZ1ZEdWeUtDbGNiaUFnSUNCY2JpQWdJQ0JBY0dGeVlXMGdXMjlpYW1WamRGMDZJRmdnWVc1a0lGa2dZMjl2Y21ScGJtRjBaWE1nYjJZZ1puSnZiU0J3YjJsdWRGeHVJQ0FnSUVCd1lYSmhiU0JiYjJKcVpXTjBYVG9nV0NCaGJtUWdXU0JqYjNKa2FXNWhkR1Z6SUc5bUlIUnZJSEJ2YVc1MFhHNGdJQ0FnUUhKbGRIVnliaUJiY21Ga2FXRnVYVG9nUVc1bmJHVWdZbVYwZDJWbGJpQjBhR1VnZEhkdklIQnZhVzUwY3lCcGJpQnlZV1JwWVc1elhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHRnVaMnhsSUQwZ0tHRXNJR0lnUFNCYVJWSlBYMUJQU1U1VUtTQTlQaUJ5WVdScFlXNXpWRzlFWldkeVpXVnpLRTFoZEdndVlYUmhiaklvWVM1NElDMGdZaTU0TENCaExua2dMU0JpTG5rcEtUdGNibHh1THlwY2JpQWdJQ0JEYjI1MlpYSjBJR1JsWjNKbFpYTWdkRzhnY21Ga2FXRnVjMXh1SUNBZ0lGeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVm1Gc2RXVWdhVzRnWkdWbmNtVmxjMXh1SUNBZ0lFQnlaWFIxY200Z1cyNTFiV0psY2wwNklGWmhiSFZsSUdsdUlISmhaR2xoYm5OY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ1pHVm5jbVZsYzFSdlVtRmthV0Z1Y3lBOUlDaGtaV2R5WldWektTQTlQaUJrWldkeVpXVnpJQ29nVFdGMGFDNVFTU0F2SURFNE1EdGNibHh1THlwY2JpQWdJQ0JFYVd4aGRHVmNiaUFnSUNCY2JpQWdJQ0JEYUdGdVoyVWdkR2hsSUhCeWIyZHlaWE56YVc5dUlHSmxkSGRsWlc0Z1lTQmhibVFnWWlCaFkyTnZjbVJwYm1jZ2RHOGdaR2xzWVhScGIyNHVYRzRnSUNBZ1hHNGdJQ0FnVTI4Z1pHbHNZWFJwYjI0Z1BTQXdMalVnZDI5MWJHUWdZMmhoYm1kbFhHNGdJQ0FnWEc0Z0lDQWdZU0F0TFMwdExTMHRMUzBnWWx4dUlDQWdJRnh1SUNBZ0lIUnZYRzRnSUNBZ1hHNGdJQ0FnWVNBdExTMHRJR0pjYmlBZ0lDQmNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZCeVpYWnBiM1Z6SUhaaGJIVmxYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCRGRYSnlaVzUwSUhaaGJIVmxYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCRWFXeGhkR1VnY0hKdlozSmxjM01nWW5rZ2VGeHVJQ0FnSUVCeVpYUjFjbTRnVzI1MWJXSmxjbDA2SUZCeVpYWnBiM1Z6SUhaaGJIVmxJSEJzZFhNZ2RHaGxJR1JwYkdGMFpXUWdaR2xtWm1WeVpXNWpaVnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JrYVd4aGRHVWdQU0FvWVN3Z1lpd2daR2xzWVhScGIyNHBJRDArSUdFZ0t5QW9LR0lnTFNCaEtTQXFJR1JwYkdGMGFXOXVLVHRjYmx4dUx5cGNiaUFnSUNCRWFYTjBZVzVqWlZ4dUlDQWdJRnh1SUNBZ0lGSmxkSFZ5Ym5NZ2RHaGxJR1JwYzNSaGJtTmxJR0psZEhkbFpXNGdkSGR2SUc0Z1pHbHRaVzV6YVc5dVlXd2djRzlwYm5SekxseHVJQ0FnSUZ4dUlDQWdJRUJ3WVhKaGJTQmJiMkpxWldOMEwyNTFiV0psY2wwNklIZ2dZVzVrSUhrZ2IzSWdhblZ6ZENCNElHOW1JSEJ2YVc1MElFRmNiaUFnSUNCQWNHRnlZVzBnVzI5aWFtVmpkQzl1ZFcxaVpYSmRPaUFvYjNCMGFXOXVZV3dwT2lCNElHRnVaQ0I1SUc5eUlHcDFjM1FnZUNCdlppQndiMmx1ZENCQ1hHNGdJQ0FnUUhKbGRIVnliaUJiYm5WdFltVnlYVG9nVkdobElHUnBjM1JoYm1ObElHSmxkSGRsWlc0Z2RHaGxJSFIzYnlCd2IybHVkSE5jYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnWkdsemRHRnVZMlVnUFNBb1lTd2dZaUE5SUZwRlVrOWZVRTlKVGxRcElEMCtJSHRjYmlBZ0lDQXZMeUF4UkNCa2FXMWxibk5wYjI1elhHNGdJQ0FnYVdZZ0tHbHpUblZ0S0dFcEtTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQmthWE4wWVc1alpURkVLR0VzSUdJcE8xeHVYRzRnSUNBZ0x5OGdUWFZzZEdrdFpHbHRaVzV6YVc5dVlXeGNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNCamIyNXpkQ0I0UkdWc2RHRWdQU0JrYVhOMFlXNWpaVEZFS0dFdWVDd2dZaTU0S1R0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnZVVSbGJIUmhJRDBnWkdsemRHRnVZMlV4UkNoaExua3NJR0l1ZVNrN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUhwRVpXeDBZU0E5SUNocGMwNTFiU2hoTG5vcEtTQS9JR1JwYzNSaGJtTmxNVVFvWVM1NkxDQmlMbm9wSURvZ01EdGNibHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdUV0YwYUM1emNYSjBLQ2g0UkdWc2RHRWdLaW9nTWlrZ0t5QW9lVVJsYkhSaElDb3FJRElwSUNzZ0tIcEVaV3gwWVNBcUtpQXlLU2s3WEc0Z0lDQWdmVnh1ZlR0Y2JseHVMeXBjYmlBZ0lDQkZZWE5sSUhaaGJIVmxJSGRwZEdocGJpQnlZVzVuWldRZ2NHRnlZVzFsZEdWeWMxeHVJQ0FnSUZ4dUlDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dVSEp2WjNKbGMzTWdZbVYwZDJWbGJpQXdJR0Z1WkNBeFhHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJXWVd4MVpTQnZaaUF3SUhCeWIyZHlaWE56WEc0Z0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQldZV3gxWlNCdlppQXhJSEJ5YjJkeVpYTnpYRzRnSUNBZ1FIQmhjbUZ0SUZ0emRISnBibWNnZkh3Z1puVnVZM1JwYjI1ZE9pQk9ZVzFsSUc5bUlIQnlaWE5sZENCbFlYTnBibWRjYmlBZ0lDQWdJQ0FnZEc4Z2RYTmxJRzl5SUdkbGJtVnlZWFJsWkNCbFlYTnBibWNnWm5WdVkzUnBiMjVjYmlBZ0lDQkFjbVYwZFhKdUlGdHVkVzFpWlhKZE9pQldZV3gxWlNCdlppQmxZWE5sWkNCd2NtOW5jbVZ6Y3lCcGJpQnlZVzVuWlZ4dUtpOGdYRzVsZUhCdmNuUWdZMjl1YzNRZ1pXRnpaU0E5SUNod2NtOW5jbVZ6Y3l3Z1puSnZiU3dnZEc4c0lHVmhjMlVwSUQwK0lIdGNiaUFnSUNCamIyNXpkQ0J3Y205bmNtVnpjMHhwYldsMFpXUWdQU0J5WlhOMGNtbGpkQ2h3Y205bmNtVnpjeXdnTUN3Z01TazdYRzRnSUNBZ1kyOXVjM1FnWldGelpXUlFjbTluY21WemN5QTlJR1ZoYzJVb2NISnZaM0psYzNOTWFXMXBkR1ZrS1R0Y2JseHVJQ0FnSUhKbGRIVnliaUJuWlhSV1lXeDFaVVp5YjIxUWNtOW5jbVZ6Y3lobFlYTmxaRkJ5YjJkeVpYTnpMQ0JtY205dExDQjBieWs3WEc1OU8xeHVJRnh1THlwY2JpQWdJQ0JJZVhCdmRHVnVkWE5sWEc0Z0lDQWdYRzRnSUNBZ1VtVjBkWEp1Y3lCMGFHVWdhSGx3YjNSbGJuVnpaU3dnYzJsa1pTQkRMQ0JuYVhabGJpQjBhR1VnYkdWdVozUm9jeUJ2WmlCemFXUmxjeUJCSUdGdVpDQkNMbHh1SUNBZ0lGeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVEdWdVozUm9JRzltSUVGY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRXhsYm1kMGFDQnZaaUJDWEc0Z0lDQWdRSEpsZEhWeWJpQmJiblZ0WW1WeVhUb2dUR1Z1WjNSb0lHOW1JRU5jYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYUhsd2IzUmxiblZ6WlNBOUlDaGhMQ0JpS1NBOVBpQk5ZWFJvTG5OeGNuUW9LR0VnS2lCaEtTQXJJQ2hpSUNvZ1lpa3BPMXh1WEc0dktseHVJQ0FnSUZaaGJIVmxJR2x1SUhKaGJtZGxJR1p5YjIwZ2NISnZaM0psYzNOY2JpQWdJQ0JjYmlBZ0lDQkhhWFpsYmlCaElHeHZkMlZ5SUd4cGJXbDBJR0Z1WkNCaGJpQjFjSEJsY2lCc2FXMXBkQ3dnZDJVZ2NtVjBkWEp1SUhSb1pTQjJZV3gxWlNCM2FYUm9hVzVjYmlBZ0lDQjBhR0YwSUhKaGJtZGxJR0Z6SUdWNGNISmxjM05sWkNCaWVTQndjbTluY21WemN5QW9ZU0J1ZFcxaVpYSWdabkp2YlNBd0xURXBYRzRnSUNBZ1hHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJVYUdVZ2NISnZaM0psYzNNZ1ltVjBkMlZsYmlCc2IzZGxjaUJoYm1RZ2RYQndaWElnYkdsdGFYUnpJR1Y0Y0hKbGMzTmxaQ0F3TFRGY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRXh2ZDJWeUlHeHBiV2wwSUc5bUlISmhibWRsWEc0Z0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQlZjSEJsY2lCc2FXMXBkQ0J2WmlCeVlXNW5aVnh1SUNBZ0lFQnlaWFIxY200Z1cyNTFiV0psY2wwNklGWmhiSFZsSUdGeklHTmhiR04xYkdGMFpXUWdabkp2YlNCd2NtOW5jbVZ6Y3lCM2FYUm9hVzRnY21GdVoyVWdLRzV2ZENCc2FXMXBkR1ZrSUhkcGRHaHBiaUJ5WVc1blpTbGNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdaMlYwVm1Gc2RXVkdjbTl0VUhKdlozSmxjM01nUFNBb2NISnZaM0psYzNNc0lHWnliMjBzSUhSdktTQTlQaUFvTFNCd2NtOW5jbVZ6Y3lBcUlHWnliMjBwSUNzZ0tIQnliMmR5WlhOeklDb2dkRzhwSUNzZ1puSnZiVHRjYmx4dUx5cGNiaUFnSUNCUWNtOW5jbVZ6Y3lCM2FYUm9hVzRnWjJsMlpXNGdjbUZ1WjJWY2JpQWdJQ0JjYmlBZ0lDQkhhWFpsYmlCaElHeHZkMlZ5SUd4cGJXbDBJR0Z1WkNCaGJpQjFjSEJsY2lCc2FXMXBkQ3dnZDJVZ2NtVjBkWEp1SUhSb1pTQndjbTluY21WemMxeHVJQ0FnSUNobGVIQnlaWE56WldRZ1lYTWdZU0J1ZFcxaVpYSWdNQzB4S1NCeVpYQnlaWE5sYm5SbFpDQmllU0IwYUdVZ1oybDJaVzRnZG1Gc2RXVXNJR0Z1WkZ4dUlDQWdJR3hwYldsMElIUm9ZWFFnY0hKdlozSmxjM01nZEc4Z2QybDBhR2x1SURBdE1TNWNiaUFnSUNCY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRlpoYkhWbElIUnZJR1pwYm1RZ2NISnZaM0psYzNNZ2QybDBhR2x1SUdkcGRtVnVJSEpoYm1kbFhHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJNYjNkbGNpQnNhVzFwZENCY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRlZ3Y0dWeUlHeHBiV2wwWEc0Z0lDQWdRSEpsZEhWeWJpQmJiblZ0WW1WeVhUb2dVSEp2WjNKbGMzTWdiMllnZG1Gc2RXVWdkMmwwYUdsdUlISmhibWRsSUdGeklHVjRjSEpsYzNObFpDQXdMVEZjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnWjJWMFVISnZaM0psYzNOR2NtOXRWbUZzZFdVZ1BTQW9kbUZzZFdVc0lHWnliMjBzSUhSdktTQTlQaUFvZG1Gc2RXVWdMU0JtY205dEtTQXZJQ2gwYnlBdElHWnliMjBwTzF4dVhHNHZLbHh1SUNBZ0lFOW1abk5sZENCaVpYUjNaV1Z1SUhSM2J5QnZZbXBsWTNSeklHOW1JRzUxYldKbGNuTmNibHh1SUNBZ0lFbG1JSEJ5YjNCbGNuUjVJR2x6SUdadmRXNWtJR2x1SUdJZ2JtOTBJSEJ5WlhObGJuUWdhVzRnWVN3Z2FYUWdkMmxzYkNCeVpYUjFjbTRnWURCZ0lHWnZjaUIwYUdGMElIQnliM0F1WEc0Z0lDQWdYRzRnSUNBZ1FIQmhjbUZ0SUZ0UWIybHVkRjA2SUVacGNuTjBJRzlpYW1WamRGeHVJQ0FnSUVCd1lYSmhiU0JiVUc5cGJuUmRPaUJUWldOdmJtUWdiMkpxWldOMFhHNGdJQ0FnUUhKbGRIVnliaUJiVDJabWMyVjBYVG9nUkdsemRHRnVZMlVnYldWMGNtbGpjeUJpWlhSM1pXVnVJSFIzYnlCd2IybHVkSE5jYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYjJabWMyVjBJRDBnS0dFc0lHSXBJRDArSUh0Y2JpQWdJQ0JqYjI1emRDQnZabVp6WlhRZ1BTQjdmVHRjYmx4dUlDQWdJR1p2Y2lBb2JHVjBJR3RsZVNCcGJpQmlLU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDaGlMbWhoYzA5M2JsQnliM0JsY25SNUtHdGxlU2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJRzltWm5ObGRGdHJaWGxkSUQwZ2FHRnpVSEp2Y0dWeWRIa29ZU3dnYTJWNUtTQS9JR0piYTJWNVhTQXRJR0ZiYTJWNVhTQTZJREE3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0J5WlhSMWNtNGdiMlptYzJWME8xeHVmVHRjYmx4dUx5cGNiaUFnSUNCUWIybHVkQ0JtY205dElHRnVaMnhsSUdGdVpDQmthWE4wWVc1alpWeHVJQ0FnSUZ4dUlDQWdJRUJ3WVhKaGJTQmJiMkpxWldOMFhUb2dNa1FnY0c5cGJuUWdiMllnYjNKcFoybHVYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCQmJtZHNaU0JtY205dElHOXlhV2RwYmx4dUlDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dSR2x6ZEdGdVkyVWdabkp2YlNCdmNtbG5hVzVjYmlBZ0lDQkFjbVYwZFhKdUlGdHZZbXBsWTNSZE9pQkRZV3hqZFd4aGRHVmtJREpFSUhCdmFXNTBYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJSEJ2YVc1MFJuSnZiVUZ1WjJ4bFFXNWtSR2x6ZEdGdVkyVWdQU0FvYjNKcFoybHVMQ0JoYm1kc1pTd2daR2x6ZEdGdVkyVXBJRDArSUh0Y2JpQWdJQ0JoYm1kc1pTQTlJR1JsWjNKbFpYTlViMUpoWkdsaGJuTW9ZVzVuYkdVcE8xeHVYRzRnSUNBZ2NtVjBkWEp1SUh0Y2JpQWdJQ0FnSUNBZ2VEb2daR2x6ZEdGdVkyVWdLaUJOWVhSb0xtTnZjeWhoYm1kc1pTa2dLeUJ2Y21sbmFXNHVlQ3hjYmlBZ0lDQWdJQ0FnZVRvZ1pHbHpkR0Z1WTJVZ0tpQk5ZWFJvTG5OcGJpaGhibWRzWlNrZ0t5QnZjbWxuYVc0dWVWeHVJQ0FnSUgwN1hHNTlPMXh1WEc0dktseHVJQ0FnSUVOdmJuWmxjblFnY21Ga2FXRnVjeUIwYnlCa1pXZHlaV1Z6WEc0Z0lDQWdYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCV1lXeDFaU0JwYmlCeVlXUnBZVzV6WEc0Z0lDQWdRSEpsZEhWeWJpQmJiblZ0WW1WeVhUb2dWbUZzZFdVZ2FXNGdaR1ZuY21WbGMxeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnlZV1JwWVc1elZHOUVaV2R5WldWeklEMGdLSEpoWkdsaGJuTXBJRDArSUhKaFpHbGhibk1nS2lBeE9EQWdMeUJOWVhSb0xsQkpPMXh1WEc0dktseHVJQ0FnSUZKbGRIVnliaUJ5WVc1a2IyMGdiblZ0WW1WeUlHSmxkSGRsWlc0Z2NtRnVaMlZjYmlBZ0lDQmNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDBnS0c5d2RHbHZibUZzS1RvZ1QzVjBjSFYwSUcxcGJtbHRkVzFjYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwZ0tHOXdkR2x2Ym1Gc0tUb2dUM1YwY0hWMElHMWhlR2x0ZFcxY2JpQWdJQ0JBY21WMGRYSnVJRnR1ZFcxaVpYSmRPaUJTWVc1a2IyMGdiblZ0WW1WeUlIZHBkR2hwYmlCeVlXNW5aU3dnYjNJZ01DQmhibVFnTVNCcFppQnViMjVsSUhCeWIzWnBaR1ZrWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUhKaGJtUnZiU0E5SUNodGFXNGdQU0F3TENCdFlYZ2dQU0F4S1NBOVBpQk5ZWFJvTG5KaGJtUnZiU2dwSUNvZ0tHMWhlQ0F0SUcxcGJpa2dLeUJ0YVc0N1hHNWNiaThxWEc0Z0lDQWdRMkZzWTNWc1lYUmxJSEpsYkdGMGFYWmxJSFpoYkhWbFhHNGdJQ0FnWEc0Z0lDQWdWR0ZyWlhNZ2RHaGxJRzl3WlhKaGRHOXlJR0Z1WkNCMllXeDFaU0JtY205dElHRWdjM1J5YVc1bkxDQnBaU0JjSWlzOU5Wd2lMQ0JoYm1RZ1lYQndiR2xsYzF4dUlDQWdJSFJ2SUhSb1pTQmpkWEp5Wlc1MElIWmhiSFZsSUhSdklISmxjMjlzZG1VZ1lTQnVaWGNnZEdGeVoyVjBMbHh1SUNBZ0lGeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nUTNWeWNtVnVkQ0IyWVd4MVpWeHVJQ0FnSUVCd1lYSmhiU0JiYzNSeWFXNW5YVG9nVW1Wc1lYUnBkbVVnZG1Gc2RXVmNiaUFnSUNCQWNtVjBkWEp1SUZ0dWRXMWlaWEpkT2lCT1pYY2dkbUZzZFdWY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2NtVnNZWFJwZG1WV1lXeDFaU0E5SUNoamRYSnlaVzUwTENCeVpXeGhkR2wyWlNrZ1BUNGdlMXh1SUNBZ0lHeGxkQ0J1WlhkV1lXeDFaU0E5SUdOMWNuSmxiblE3WEc0Z0lDQWdZMjl1YzNRZ1pYRjFZWFJwYjI0Z1BTQnlaV3hoZEdsMlpTNXpjR3hwZENnblBTY3BPMXh1SUNBZ0lHTnZibk4wSUc5d1pYSmhkRzl5SUQwZ1pYRjFZWFJwYjI1Yk1GMDdYRzRnSUNBZ2JHVjBJSHNnZFc1cGRDd2dkbUZzZFdVZ2ZTQTlJSE53YkdsMFZtRnNkV1ZWYm1sMEtHVnhkV0YwYVc5dVd6RmRLVHRjYmx4dUlDQWdJSFpoYkhWbElEMGdjR0Z5YzJWR2JHOWhkQ2gyWVd4MVpTazdYRzVjYmlBZ0lDQnpkMmwwWTJnZ0tHOXdaWEpoZEc5eUtTQjdYRzRnSUNBZ1kyRnpaU0FuS3ljNlhHNGdJQ0FnSUNBZ0lHNWxkMVpoYkhWbElDczlJSFpoYkhWbE8xeHVJQ0FnSUNBZ0lDQmljbVZoYXp0Y2JpQWdJQ0JqWVhObElDY3RKenBjYmlBZ0lDQWdJQ0FnYm1WM1ZtRnNkV1VnTFQwZ2RtRnNkV1U3WEc0Z0lDQWdJQ0FnSUdKeVpXRnJPMXh1SUNBZ0lHTmhjMlVnSnlvbk9seHVJQ0FnSUNBZ0lDQnVaWGRXWVd4MVpTQXFQU0IyWVd4MVpUdGNiaUFnSUNBZ0lDQWdZbkpsWVdzN1hHNGdJQ0FnWTJGelpTQW5MeWM2WEc0Z0lDQWdJQ0FnSUc1bGQxWmhiSFZsSUM4OUlIWmhiSFZsTzF4dUlDQWdJQ0FnSUNCaWNtVmhhenRjYmlBZ0lDQjlYRzRnSUNBZ1hHNGdJQ0FnYVdZZ0tIVnVhWFFwSUh0Y2JpQWdJQ0FnSUNBZ2JtVjNWbUZzZFdVZ0t6MGdkVzVwZER0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J5WlhSMWNtNGdibVYzVm1Gc2RXVTdYRzU5TzF4dVhHNHZLbHh1SUNBZ0lGSmxjM1J5YVdOMElIWmhiSFZsSUhSdklISmhibWRsWEc0Z0lDQWdYRzRnSUNBZ1VtVjBkWEp1SUhaaGJIVmxJSGRwZEdocGJpQjBhR1VnY21GdVoyVWdiMllnYkc5M1pYSk1hVzFwZENCaGJtUWdkWEJ3WlhKTWFXMXBkRnh1SUNBZ0lGeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVm1Gc2RXVWdkRzhnYTJWbGNDQjNhWFJvYVc0Z2NtRnVaMlZjYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklFeHZkMlZ5SUd4cGJXbDBJRzltSUhKaGJtZGxYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCVmNIQmxjaUJzYVcxcGRDQnZaaUJ5WVc1blpWeHVJQ0FnSUVCeVpYUjFjbTRnVzI1MWJXSmxjbDA2SUZaaGJIVmxJR0Z6SUd4cGJXbDBaV1FnZDJsMGFHbHVJR2RwZG1WdUlISmhibWRsWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUhKbGMzUnlhV04wSUQwZ0tIWmhiSFZsTENCdGFXNHNJRzFoZUNrZ1BUNGdUV0YwYUM1dFlYZ29UV0YwYUM1dGFXNG9kbUZzZFdVc0lHMWhlQ2tzSUcxcGJpazdYRzVjYmk4cVhHNGdJQ0FnUm5KaGJXVnlZWFJsTFdsdVpHVndaVzVrWlc1MElITnRiMjkwYUdsdVoxeHVYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCT1pYY2dkbUZzZFdWY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRTlzWkNCMllXeDFaVnh1SUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1JuSmhiV1VnWkhWeVlYUnBiMjVjYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwZ0tHOXdkR2x2Ym1Gc0tUb2dVMjF2YjNSb2FXNW5JQ2d3SUdseklHNXZibVVwWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUhOdGIyOTBhQ0E5SUNodVpYZFdZV3gxWlN3Z2IyeGtWbUZzZFdVc0lHUjFjbUYwYVc5dUxDQnpiVzl2ZEdocGJtY2dQU0F3S1NBOVBpQjBiMFJsWTJsdFlXd29iMnhrVm1Gc2RXVWdLeUFvWkhWeVlYUnBiMjRnS2lBb2JtVjNWbUZzZFdVZ0xTQnZiR1JXWVd4MVpTa2dMeUJOWVhSb0xtMWhlQ2h6Ylc5dmRHaHBibWNzSUdSMWNtRjBhVzl1S1NrcE8xeHVYRzR2S2x4dUlDQWdJRU52Ym5abGNuUWdlQ0J3WlhJZ2MyVmpiMjVrSUhSdklIQmxjaUJtY21GdFpTQjJaV3h2WTJsMGVTQmlZWE5sWkNCdmJpQm1jSE5jYmlBZ0lDQmNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZWdWFYUWdjR1Z5SUhObFkyOXVaRnh1SUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1JuSmhiV1VnWkhWeVlYUnBiMjRnYVc0Z2JYTmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdjM0JsWldSUVpYSkdjbUZ0WlNBOUlDaDRjSE1zSUdaeVlXMWxSSFZ5WVhScGIyNHBJRDArSUNocGMwNTFiU2g0Y0hNcEtTQS9JSGh3Y3lBdklDZ3hNREF3SUM4Z1puSmhiV1ZFZFhKaGRHbHZiaWtnT2lBd08xeHVYRzR2S2x4dUlDQWdJRU52Ym5abGNuUWdkbVZzYjJOcGRIa2dhVzUwYnlCMlpXeHBZMmwwZVNCd1pYSWdjMlZqYjI1a1hHNGdJQ0FnWEc0Z0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQlZibWwwSUhCbGNpQm1jbUZ0WlZ4dUlDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dSbkpoYldVZ1pIVnlZWFJwYjI0Z2FXNGdiWE5jYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYzNCbFpXUlFaWEpUWldOdmJtUWdQU0FvZG1Wc2IyTnBkSGtzSUdaeVlXMWxSSFZ5WVhScGIyNHBJRDArSUhabGJHOWphWFI1SUNvZ0tERXdNREFnTHlCbWNtRnRaVVIxY21GMGFXOXVLVHRjYmx4dUx5cGNiaUFnSUNCRGNtVmhkR1VnYzNSbGNIQmxaQ0IyWlhKemFXOXVJRzltSURBdE1TQndjbTluY21WemMxeHVJQ0FnSUZ4dUlDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dRM1Z5Y21WdWRDQjJZV3gxWlZ4dUlDQWdJRUJ3WVhKaGJTQmJhVzUwWFRvZ1RuVnRZbVZ5SUc5bUlITjBaWEJ6WEc0Z0lDQWdRSEpsZEhWeWJpQmJiblZ0WW1WeVhUb2dVM1JsY0hCbFpDQjJZV3gxWlZ4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCemRHVndVSEp2WjNKbGMzTWdQU0FvY0hKdlozSmxjM01zSUhOMFpYQnpLU0E5UGlCN1hHNGdJQ0FnWTI5dWMzUWdjMlZuYldWdWRDQTlJREVnTHlBb2MzUmxjSE1nTFNBeEtUdGNiaUFnSUNCamIyNXpkQ0IwWVhKblpYUWdQU0F4SUMwZ0tERWdMeUJ6ZEdWd2N5azdYRzRnSUNBZ1kyOXVjM1FnY0hKdlozSmxjM05QWmxSaGNtZGxkQ0E5SUUxaGRHZ3ViV2x1S0hCeWIyZHlaWE56SUM4Z2RHRnlaMlYwTENBeEtUdGNibHh1SUNBZ0lISmxkSFZ5YmlCTllYUm9MbVpzYjI5eUtIQnliMmR5WlhOelQyWlVZWEpuWlhRZ0x5QnpaV2R0Wlc1MEtTQXFJSE5sWjIxbGJuUTdYRzU5T3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy9jYWxjLmpzXG4gKiogbW9kdWxlIGlkID0gMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9kZWZhdWx0UHJvcHMgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RlZmF1bHQtcHJvcHMnKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGRlZmF1bHRQcm9wczogX2RlZmF1bHRQcm9wcy5vcGFjaXR5XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5aGJIQm9ZUzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdhMEpCUldVN1FVRkRXQ3huUWtGQldTeG5Ra0ZJVUN4UFFVRlBMRUZCUjFNN1EwRkRlRUlpTENKbWFXeGxJam9pWVd4d2FHRXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFJRWlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2V5QnZjR0ZqYVhSNUlIMGdabkp2YlNBbkxpOXpaWFIwYVc1bmN5OWtaV1poZFd4MExYQnliM0J6Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2UxeHVJQ0FnSUdSbFptRjFiSFJRY205d2N6b2diM0JoWTJsMGVWeHVmVHNpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvYWxwaGEuanNcbiAqKiBtb2R1bGUgaWQgPSAyMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3VuaXQgPSByZXF1aXJlKCcuL3VuaXQnKTtcblxudmFyIF91bml0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3VuaXQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIHVuaXQ6ICdkZWcnLFxuICAgICAgICB0eXBlOiBfdW5pdDIuZGVmYXVsdFxuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTloYm1kc1pTNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN096czdPMnRDUVVWbE8wRkJRMWdzWjBKQlFWa3NSVUZCUlR0QlFVTldMRmxCUVVrc1JVRkJSU3hMUVVGTE8wRkJRMWdzV1VGQlNTeG5Ra0ZCVlR0TFFVTnFRanREUVVOS0lpd2labWxzWlNJNkltRnVaMnhsTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMFVHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSFZ1YVhSVWVYQmxJR1p5YjIwZ0p5NHZkVzVwZENjN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElIdGNiaUFnSUNCa1pXWmhkV3gwVUhKdmNITTZJSHRjYmlBZ0lDQWdJQ0FnZFc1cGREb2dKMlJsWnljc1hHNGdJQ0FnSUNBZ0lIUjVjR1U2SUhWdWFYUlVlWEJsWEc0Z0lDQWdmVnh1ZlRzaVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2FuZ2xlLmpzXG4gKiogbW9kdWxlIGlkID0gMjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG52YXIgX3B4ID0gcmVxdWlyZSgnLi9weCcpO1xuXG52YXIgX3B4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3B4KTtcblxudmFyIF9kaWN0aW9uYXJ5ID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kaWN0aW9uYXJ5Jyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IF9weDIuZGVmYXVsdC5kZWZhdWx0UHJvcHMsXG5cbiAgICAvKlxuICAgICAgICBTcGxpdCBwb3NpdGlvbnMgaW4gZm9ybWF0IFwiWCBZIFpcIlxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBQb3NpdGlvbiB2YWx1ZXNcbiAgICAgICAgICAgIFwiMjAlIDMwJSAwXCIgLT4gezIwJSwgMzAlLCAwfVxuICAgICAgICAgICAgXCIyMCUgMzAlXCIgLT4gezIwJSwgMzAlfVxuICAgICAgICAgICAgXCIyMCVcIiAtPiB7MjAlLCAyMCV9XG4gICAgKi9cbiAgICBzcGxpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBzcGxpdFZhbHVlcyA9ICgwLCBfdXRpbHMuc3BsaXRTcGFjZURlbGltaXRlZCkodmFsdWUpO1xuICAgICAgICB2YXIgbnVtQXhlcyA9IHNwbGl0VmFsdWVzLmxlbmd0aDtcbiAgICAgICAgdmFyIHNwbGl0VmFsdWUgPSB7XG4gICAgICAgICAgICBYOiBzcGxpdFZhbHVlc1swXSxcbiAgICAgICAgICAgIFk6IG51bUF4ZXMgPiAxID8gc3BsaXRWYWx1ZXNbMV0gOiBzcGxpdFZhbHVlc1swXVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChudW1BeGVzID4gMikge1xuICAgICAgICAgICAgc3BsaXRWYWx1ZS5aID0gc3BsaXRWYWx1ZXNbMl07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3BsaXRWYWx1ZTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICByZXR1cm4gKDAsIF91dGlscy5jcmVhdGVEZWxpbWl0ZWQpKHZhbHVlcywgX2RpY3Rpb25hcnkuYXhlcywgJyAnKTtcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5aGVHVnpMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdPenM3T3pzN08ydENRVWxsTzBGQlExZ3NaMEpCUVZrc1JVRkJSU3hoUVVGWkxGbEJRVms3T3pzN096czdPenM3UVVGVmRFTXNVMEZCU3l4RlFVRkZMRlZCUVVNc1MwRkJTeXhGUVVGTE8wRkJRMlFzV1VGQlRTeFhRVUZYTEVkQlFVY3NWMEZvUWtZc2JVSkJRVzFDTEVWQlowSkhMRXRCUVVzc1EwRkJReXhEUVVGRE8wRkJReTlETEZsQlFVMHNUMEZCVHl4SFFVRkhMRmRCUVZjc1EwRkJReXhOUVVGTkxFTkJRVU03UVVGRGJrTXNXVUZCVFN4VlFVRlZMRWRCUVVjN1FVRkRaaXhoUVVGRExFVkJRVVVzVjBGQlZ5eERRVUZETEVOQlFVTXNRMEZCUXp0QlFVTnFRaXhoUVVGRExFVkJRVVVzUVVGQlF5eFBRVUZQTEVkQlFVY3NRMEZCUXl4SFFVRkpMRmRCUVZjc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eFhRVUZYTEVOQlFVTXNRMEZCUXl4RFFVRkRPMU5CUTNKRUxFTkJRVU03TzBGQlJVWXNXVUZCU1N4UFFVRlBMRWRCUVVjc1EwRkJReXhGUVVGRk8wRkJRMklzYzBKQlFWVXNRMEZCUXl4RFFVRkRMRWRCUVVjc1YwRkJWeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFOQlEycERPenRCUVVWRUxHVkJRVThzVlVGQlZTeERRVUZETzB0QlEzSkNPenRCUVVWRUxGZEJRVThzUlVGQlJTeFZRVUZETEUxQlFVMDdaVUZCU3l4WFFUbENhRUlzWlVGQlpTeEZRVGhDYVVJc1RVRkJUU3hqUVRWQ2RFTXNTVUZCU1N4RlFUUkNNRU1zUjBGQlJ5eERRVUZETzB0QlFVRTdRMEZETVVRaUxDSm1hV3hsSWpvaVlYaGxjeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEZCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQjdJR055WldGMFpVUmxiR2x0YVhSbFpDd2djM0JzYVhSVGNHRmpaVVJsYkdsdGFYUmxaQ0I5SUdaeWIyMGdKeTR1TDJsdVl5OTFkR2xzY3ljN1hHNXBiWEJ2Y25RZ2NIaFdZV3gxWlZSNWNHVWdabkp2YlNBbkxpOXdlQ2M3WEc1cGJYQnZjblFnZXlCaGVHVnpJSDBnWm5KdmJTQW5MaTl6WlhSMGFXNW5jeTlrYVdOMGFXOXVZWEo1Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2UxeHVJQ0FnSUdSbFptRjFiSFJRY205d2N6b2djSGhXWVd4MVpWUjVjR1V1WkdWbVlYVnNkRkJ5YjNCekxGeHVJQ0FnSUNBZ0lDQmNiaUFnSUNBdktseHVJQ0FnSUNBZ0lDQlRjR3hwZENCd2IzTnBkR2x2Ym5NZ2FXNGdabTl5YldGMElGd2lXQ0JaSUZwY0lseHVJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdRSEJoY21GdElGdHpkSEpwYm1kZE9pQlFiM05wZEdsdmJpQjJZV3gxWlhOY2JpQWdJQ0FnSUNBZ0lDQWdJRndpTWpBbElETXdKU0F3WENJZ0xUNGdlekl3SlN3Z016QWxMQ0F3ZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdYQ0l5TUNVZ016QWxYQ0lnTFQ0Z2V6SXdKU3dnTXpBbGZWeHVJQ0FnSUNBZ0lDQWdJQ0FnWENJeU1DVmNJaUF0UGlCN01qQWxMQ0F5TUNWOVhHNGdJQ0FnS2k5Y2JpQWdJQ0J6Y0d4cGREb2dLSFpoYkhWbEtTQTlQaUI3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJSE53YkdsMFZtRnNkV1Z6SUQwZ2MzQnNhWFJUY0dGalpVUmxiR2x0YVhSbFpDaDJZV3gxWlNrN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUc1MWJVRjRaWE1nUFNCemNHeHBkRlpoYkhWbGN5NXNaVzVuZEdnN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUhOd2JHbDBWbUZzZFdVZ1BTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCWU9pQnpjR3hwZEZaaGJIVmxjMXN3WFN4Y2JpQWdJQ0FnSUNBZ0lDQWdJRms2SUNodWRXMUJlR1Z6SUQ0Z01Ta2dQeUJ6Y0d4cGRGWmhiSFZsYzFzeFhTQTZJSE53YkdsMFZtRnNkV1Z6V3pCZFhHNGdJQ0FnSUNBZ0lIMDdYRzVjYmlBZ0lDQWdJQ0FnYVdZZ0tHNTFiVUY0WlhNZ1BpQXlLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnpjR3hwZEZaaGJIVmxMbG9nUFNCemNHeHBkRlpoYkhWbGMxc3lYVHRjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCemNHeHBkRlpoYkhWbE8xeHVJQ0FnSUgwc1hHNWNiaUFnSUNCamIyMWlhVzVsT2lBb2RtRnNkV1Z6S1NBOVBpQmpjbVZoZEdWRVpXeHBiV2wwWldRb2RtRnNkV1Z6TENCaGVHVnpMQ0FuSUNjcFhHNTlPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvYXhlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDIzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfcmdiID0gcmVxdWlyZSgnLi9yZ2InKTtcblxudmFyIF9yZ2IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmdiKTtcblxudmFyIF9oc2wgPSByZXF1aXJlKCcuL2hzbCcpO1xuXG52YXIgX2hzbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oc2wpO1xuXG52YXIgX2hleCA9IHJlcXVpcmUoJy4vaGV4Jyk7XG5cbnZhciBfaGV4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hleCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBjb2xvclR5cGVzID0gW19yZ2IyLmRlZmF1bHQsIF9oc2wyLmRlZmF1bHQsIF9oZXgyLmRlZmF1bHRdO1xudmFyIG51bUNvbG9yVHlwZXMgPSBjb2xvclR5cGVzLmxlbmd0aDtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGRlZmF1bHRQcm9wczogX2V4dGVuZHMoe30sIF9yZ2IyLmRlZmF1bHQuZGVmYXVsdFByb3BzLCBfaHNsMi5kZWZhdWx0LmRlZmF1bHRQcm9wcyksXG5cbiAgICB0ZXN0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIF9yZ2IyLmRlZmF1bHQudGVzdCh2YWx1ZSkgfHwgX2hleDIuZGVmYXVsdC50ZXN0KHZhbHVlKSB8fCBfaHNsMi5kZWZhdWx0LnRlc3QodmFsdWUpO1xuICAgIH0sXG5cbiAgICBzcGxpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtQ29sb3JUeXBlczsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY29sb3JUeXBlc1tpXS50ZXN0KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb2xvclR5cGVzW2ldLnNwbGl0KHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBjb21iaW5lOiBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZXMuUmVkICE9PSB1bmRlZmluZWQgPyBfcmdiMi5kZWZhdWx0LmNvbWJpbmUodmFsdWVzKSA6IF9oc2wyLmRlZmF1bHQuY29tYmluZSh2YWx1ZXMpO1xuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTlqYjJ4dmNpNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN096czdPenM3T3pzN096czdPenRCUVVsQkxFbEJRVTBzVlVGQlZTeEhRVUZITERaRFFVRmxMRU5CUVVNN1FVRkRia01zU1VGQlRTeGhRVUZoTEVkQlFVY3NWVUZCVlN4RFFVRkRMRTFCUVUwc1EwRkJRenM3YTBKQlJYcENPMEZCUTFnc1owSkJRVmtzWlVGQlR5eGpRVUZKTEZsQlFWa3NSVUZCU3l4alFVRkpMRmxCUVZrc1EwRkJSVHM3UVVGRk1VUXNVVUZCU1N4RlFVRkZMRlZCUVVNc1MwRkJTenRsUVVGTExHTkJRVWtzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMR05CUVVrc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEdOQlFVa3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJRenRMUVVGQk96dEJRVVYwUlN4VFFVRkxMRVZCUVVVc1ZVRkJReXhMUVVGTExFVkJRVXM3UVVGRFpDeGhRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzWVVGQllTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMEZCUTNCRExHZENRVUZKTEZWQlFWVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVWQlFVVTdRVUZETTBJc2RVSkJRVThzVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dGhRVU55UXp0VFFVTktPMHRCUTBvN08wRkJSVVFzVjBGQlR5eEZRVUZGTEZWQlFVTXNUVUZCVFR0bFFVRkxMRUZCUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUzBGQlN5eFRRVUZUTEVkQlFVa3NZMEZCU1N4UFFVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzWTBGQlNTeFBRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRPMHRCUVVFN1EwRkRPVVlpTENKbWFXeGxJam9pWTI5c2IzSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFJRWlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2NtZGlJR1p5YjIwZ0p5NHZjbWRpSnp0Y2JtbHRjRzl5ZENCb2Myd2dabkp2YlNBbkxpOW9jMnduTzF4dWFXMXdiM0owSUdobGVDQm1jbTl0SUNjdUwyaGxlQ2M3WEc1Y2JtTnZibk4wSUdOdmJHOXlWSGx3WlhNZ1BTQmJjbWRpTENCb2Myd3NJR2hsZUYwN1hHNWpiMjV6ZENCdWRXMURiMnh2Y2xSNWNHVnpJRDBnWTI5c2IzSlVlWEJsY3k1c1pXNW5kR2c3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUh0Y2JpQWdJQ0JrWldaaGRXeDBVSEp2Y0hNNklIc2dMaTR1Y21kaUxtUmxabUYxYkhSUWNtOXdjeXdnTGk0dWFITnNMbVJsWm1GMWJIUlFjbTl3Y3lCOUxGeHVYRzRnSUNBZ2RHVnpkRG9nS0haaGJIVmxLU0E5UGlCeVoySXVkR1Z6ZENoMllXeDFaU2tnZkh3Z2FHVjRMblJsYzNRb2RtRnNkV1VwSUh4OElHaHpiQzUwWlhOMEtIWmhiSFZsS1N4Y2JseHVJQ0FnSUhOd2JHbDBPaUFvZG1Gc2RXVXBJRDArSUh0Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQnVkVzFEYjJ4dmNsUjVjR1Z6T3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hqYjJ4dmNsUjVjR1Z6VzJsZExuUmxjM1FvZG1Gc2RXVXBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJR052Ykc5eVZIbHdaWE5iYVYwdWMzQnNhWFFvZG1Gc2RXVXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZTeGNibHh1SUNBZ0lHTnZiV0pwYm1VNklDaDJZV3gxWlhNcElEMCtJQ2gyWVd4MVpYTXVVbVZrSUNFOVBTQjFibVJsWm1sdVpXUXBJRDhnY21kaUxtTnZiV0pwYm1Vb2RtRnNkV1Z6S1NBNklHaHpiQzVqYjIxaWFXNWxLSFpoYkhWbGN5bGNibjA3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2NvbG9yLmpzXG4gKiogbW9kdWxlIGlkID0gMjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG52YXIgRkxPQVRfUkVHRVggPSAvKC0pPyhcXGRbXFxkXFwuXSopL2c7XG52YXIgZ2VuZXJhdGVUb2tlbiA9IGZ1bmN0aW9uICh0b2tlbikge1xuICAgIHJldHVybiAnJHsnICsgdG9rZW4gKyAnfSc7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG5cbiAgICB0ZXN0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIG1hdGNoZXMgPSB2YWx1ZS5tYXRjaChGTE9BVF9SRUdFWCk7XG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzLmlzQXJyYXkpKG1hdGNoZXMpICYmIG1hdGNoZXMubGVuZ3RoID4gMTtcbiAgICB9LFxuXG4gICAgdGVtcGxhdGU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgY291bnRlciA9IDA7XG4gICAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKEZMT0FUX1JFR0VYLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2VuZXJhdGVUb2tlbihjb3VudGVyKyspO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgc3BsaXRWYWx1ZSA9IHt9O1xuXG4gICAgICAgIHZhbHVlLm1hdGNoKEZMT0FUX1JFR0VYKS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwgaSkge1xuICAgICAgICAgICAgcmV0dXJuIHNwbGl0VmFsdWVbaV0gPSB2YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHNwbGl0VmFsdWU7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMsIHRlbXBsYXRlKSB7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiB2YWx1ZXMpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlID0gdGVtcGxhdGUucmVwbGFjZShnZW5lcmF0ZVRva2VuKGtleSksIHZhbHVlc1trZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICB9XG5cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTlqYjIxd2JHVjRMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096dEJRVVZCTEVsQlFVMHNWMEZCVnl4SFFVRkhMR3RDUVVGclFpeERRVUZETzBGQlEzWkRMRWxCUVUwc1lVRkJZU3hIUVVGSExGVkJRVU1zUzBGQlN6dFhRVUZMTEVsQlFVa3NSMEZCUnl4TFFVRkxMRWRCUVVjc1IwRkJSenREUVVGQkxFTkJRVU03TzJ0Q1FVVnlRenM3UVVGRldDeFJRVUZKTEVWQlFVVXNWVUZCUXl4TFFVRkxMRVZCUVVzN1FVRkRZaXhaUVVGTkxFOUJRVThzUjBGQlJ5eExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRE8wRkJRM3BETEdWQlFWRXNWMEZVVUN4UFFVRlBMRVZCVTFFc1QwRkJUeXhEUVVGRExFbEJRVWtzVDBGQlR5eERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVVN1MwRkRia1E3TzBGQlJVUXNXVUZCVVN4RlFVRkZMRlZCUVVNc1MwRkJTeXhGUVVGTE8wRkJRMnBDTEZsQlFVa3NUMEZCVHl4SFFVRkhMRU5CUVVNc1EwRkJRenRCUVVOb1FpeGxRVUZQTEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1YwRkJWeXhGUVVGRk8yMUNRVUZOTEdGQlFXRXNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenRUUVVGQkxFTkJRVU1zUTBGQlF6dExRVU55UlRzN1FVRkZSQ3hUUVVGTExFVkJRVVVzVlVGQlF5eExRVUZMTEVWQlFVczdRVUZEWkN4WlFVRk5MRlZCUVZVc1IwRkJSeXhGUVVGRkxFTkJRVU03TzBGQlJYUkNMR0ZCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRlZCUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU03YlVKQlFVc3NWVUZCVlN4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFdEJRVXM3VTBGQlFTeERRVUZETEVOQlFVTTdPMEZCUlhSRkxHVkJRVThzVlVGQlZTeERRVUZETzB0QlEzSkNPenRCUVVWRUxGZEJRVThzUlVGQlJTeFZRVUZETEUxQlFVMHNSVUZCUlN4UlFVRlJMRVZCUVVzN1FVRkRNMElzWVVGQlN5eEpRVUZKTEVkQlFVY3NTVUZCU1N4TlFVRk5MRVZCUVVVN1FVRkRjRUlzWjBKQlFVa3NUVUZCVFN4RFFVRkRMR05CUVdNc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJUdEJRVU0xUWl4M1FrRkJVU3hIUVVGSExGRkJRVkVzUTBGQlF5eFBRVUZQTEVOQlFVTXNZVUZCWVN4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMkZCUTJoRk8xTkJRMG83TzBGQlJVUXNaVUZCVHl4UlFVRlJMRU5CUVVNN1MwRkRia0k3TzBOQlJVb2lMQ0ptYVd4bElqb2lZMjl0Y0d4bGVDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkRkJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCN0lHbHpRWEp5WVhrZ2ZTQm1jbTl0SUNjdUxpOXBibU12ZFhScGJITW5PMXh1WEc1amIyNXpkQ0JHVEU5QlZGOVNSVWRGV0NBOUlDOG9MU2svS0Z4Y1pGdGNYR1JjWEM1ZEtpa3ZaenRjYm1OdmJuTjBJR2RsYm1WeVlYUmxWRzlyWlc0Z1BTQW9kRzlyWlc0cElEMCtJQ2NrZXljZ0t5QjBiMnRsYmlBcklDZDlKenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnZTF4dVhHNGdJQ0FnZEdWemREb2dLSFpoYkhWbEtTQTlQaUI3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJRzFoZEdOb1pYTWdQU0IyWVd4MVpTNXRZWFJqYUNoR1RFOUJWRjlTUlVkRldDazdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQW9hWE5CY25KaGVTaHRZWFJqYUdWektTQW1KaUJ0WVhSamFHVnpMbXhsYm1kMGFDQStJREVwTzF4dUlDQWdJSDBzWEc1Y2JpQWdJQ0IwWlcxd2JHRjBaVG9nS0haaGJIVmxLU0E5UGlCN1hHNGdJQ0FnSUNBZ0lHeGxkQ0JqYjNWdWRHVnlJRDBnTUR0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhaaGJIVmxMbkpsY0d4aFkyVW9Sa3hQUVZSZlVrVkhSVmdzSUNncElEMCtJR2RsYm1WeVlYUmxWRzlyWlc0b1kyOTFiblJsY2lzcktTazdYRzRnSUNBZ2ZTeGNibHh1SUNBZ0lITndiR2wwT2lBb2RtRnNkV1VwSUQwK0lIdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2MzQnNhWFJXWVd4MVpTQTlJSHQ5TzF4dVhHNGdJQ0FnSUNBZ0lIWmhiSFZsTG0xaGRHTm9LRVpNVDBGVVgxSkZSMFZZS1M1bWIzSkZZV05vS0NoMllXeDFaU3dnYVNrZ1BUNGdjM0JzYVhSV1lXeDFaVnRwWFNBOUlIWmhiSFZsS1R0Y2JseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2MzQnNhWFJXWVd4MVpUdGNiaUFnSUNCOUxGeHVYRzRnSUNBZ1kyOXRZbWx1WlRvZ0tIWmhiSFZsY3l3Z2RHVnRjR3hoZEdVcElEMCtJSHRjYmlBZ0lDQWdJQ0FnWm05eUlDaHNaWFFnYTJWNUlHbHVJSFpoYkhWbGN5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFpoYkhWbGN5NW9ZWE5QZDI1UWNtOXdaWEowZVNoclpYa3BLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdWdGNHeGhkR1VnUFNCMFpXMXdiR0YwWlM1eVpYQnNZV05sS0dkbGJtVnlZWFJsVkc5clpXNG9hMlY1S1N3Z2RtRnNkV1Z6VzJ0bGVWMHBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJsYlhCc1lYUmxPMXh1SUNBZ0lIMWNibHh1ZlRzaVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2NvbXBsZXguanNcbiAqKiBtb2R1bGUgaWQgPSAyNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3JnYiA9IHJlcXVpcmUoJy4vcmdiJyk7XG5cbnZhciBfcmdiMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JnYik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IF9yZ2IyLmRlZmF1bHQuZGVmYXVsdFByb3BzLFxuXG4gICAgdGVzdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mKCcjJykgPiAtMTtcbiAgICB9LFxuXG4gICAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgciA9IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGcgPSB1bmRlZmluZWQsXG4gICAgICAgICAgICBiID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIC8vIElmIHdlIGhhdmUgNiBjaGFyYWN0ZXJzLCBpZSAjRkYwMDAwXG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiA0KSB7XG4gICAgICAgICAgICByID0gdmFsdWUuc3Vic3RyKDEsIDIpO1xuICAgICAgICAgICAgZyA9IHZhbHVlLnN1YnN0cigzLCAyKTtcbiAgICAgICAgICAgIGIgPSB2YWx1ZS5zdWJzdHIoNSwgMik7XG5cbiAgICAgICAgICAgIC8vIE9yIHdlIGhhdmUgMyBjaGFyYWN0ZXJzLCBpZSAjRjAwXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgciA9IHZhbHVlLnN1YnN0cigxLCAxKTtcbiAgICAgICAgICAgICAgICBnID0gdmFsdWUuc3Vic3RyKDIsIDEpO1xuICAgICAgICAgICAgICAgIGIgPSB2YWx1ZS5zdWJzdHIoMywgMSk7XG4gICAgICAgICAgICAgICAgciArPSByO1xuICAgICAgICAgICAgICAgIGcgKz0gZztcbiAgICAgICAgICAgICAgICBiICs9IGI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFJlZDogcGFyc2VJbnQociwgMTYpLFxuICAgICAgICAgICAgR3JlZW46IHBhcnNlSW50KGcsIDE2KSxcbiAgICAgICAgICAgIEJsdWU6IHBhcnNlSW50KGIsIDE2KSxcbiAgICAgICAgICAgIEFscGhhOiAxXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuIF9yZ2IyLmRlZmF1bHQuY29tYmluZSh2YWx1ZXMpO1xuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTlvWlhndWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096dHJRa0ZGWlR0QlFVTllMR2RDUVVGWkxFVkJRVVVzWTBGQlNTeFpRVUZaT3p0QlFVVTVRaXhSUVVGSkxFVkJRVVVzVlVGQlF5eExRVUZMTzJWQlFVMHNTMEZCU3l4SlFVRkpMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMHRCUVVNN08wRkJSVzVFTEZOQlFVc3NSVUZCUlN4VlFVRkRMRXRCUVVzc1JVRkJTenRCUVVOa0xGbEJRVWtzUTBGQlF5eFpRVUZCTzFsQlFVVXNRMEZCUXl4WlFVRkJPMWxCUVVVc1EwRkJReXhaUVVGQk96czdRVUZCUXl4QlFVZGFMRmxCUVVrc1MwRkJTeXhEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVWQlFVVTdRVUZEYkVJc1lVRkJReXhIUVVGSExFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJRM1pDTEdGQlFVTXNSMEZCUnl4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0QlFVTjJRaXhoUVVGRExFZEJRVWNzUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE96czdRVUZCUXl4VFFVY3hRaXhOUVVGTk8wRkJRMGdzYVVKQlFVTXNSMEZCUnl4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0QlFVTjJRaXhwUWtGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzBGQlEzWkNMR2xDUVVGRExFZEJRVWNzUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRGRrSXNhVUpCUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03UVVGRFVDeHBRa0ZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRCUVVOUUxHbENRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMkZCUTFZN08wRkJSVVFzWlVGQlR6dEJRVU5JTEdWQlFVY3NSVUZCUlN4UlFVRlJMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF6dEJRVU53UWl4cFFrRkJTeXhGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRPMEZCUTNSQ0xHZENRVUZKTEVWQlFVVXNVVUZCVVN4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU03UVVGRGNrSXNhVUpCUVVzc1JVRkJSU3hEUVVGRE8xTkJRMWdzUTBGQlF6dExRVU5NT3p0QlFVVkVMRmRCUVU4c1JVRkJSU3hWUVVGRExFMUJRVTA3WlVGQlN5eGpRVUZKTEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNN1MwRkJRVHREUVVNelF5SXNJbVpwYkdVaU9pSm9aWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhSUVpYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdjbWRpSUdaeWIyMGdKeTR2Y21kaUp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdlMXh1SUNBZ0lHUmxabUYxYkhSUWNtOXdjem9nY21kaUxtUmxabUYxYkhSUWNtOXdjeXhjYmx4dUlDQWdJSFJsYzNRNklDaDJZV3gxWlNrZ1BUNGdLSFpoYkhWbElDWW1JSFpoYkhWbExtbHVaR1Y0VDJZb0p5TW5LU0ErSUMweEtTeGNibHh1SUNBZ0lITndiR2wwT2lBb2RtRnNkV1VwSUQwK0lIdGNiaUFnSUNBZ0lDQWdiR1YwSUhJc0lHY3NJR0k3WEc1Y2JpQWdJQ0FnSUNBZ0x5OGdTV1lnZDJVZ2FHRjJaU0EySUdOb1lYSmhZM1JsY25Nc0lHbGxJQ05HUmpBd01EQmNiaUFnSUNBZ0lDQWdhV1lnS0haaGJIVmxMbXhsYm1kMGFDQStJRFFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSElnUFNCMllXeDFaUzV6ZFdKemRISW9NU3dnTWlrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JuSUQwZ2RtRnNkV1V1YzNWaWMzUnlLRE1zSURJcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWWlBOUlIWmhiSFZsTG5OMVluTjBjaWcxTENBeUtUdGNibHh1SUNBZ0lDQWdJQ0F2THlCUGNpQjNaU0JvWVhabElETWdZMmhoY21GamRHVnljeXdnYVdVZ0kwWXdNRnh1SUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NpQTlJSFpoYkhWbExuTjFZbk4wY2lneExDQXhLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHY2dQU0IyWVd4MVpTNXpkV0p6ZEhJb01pd2dNU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmlJRDBnZG1Gc2RXVXVjM1ZpYzNSeUtETXNJREVwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdjaUFyUFNCeU8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWnlBclBTQm5PMXh1SUNBZ0lDQWdJQ0FnSUNBZ1lpQXJQU0JpTzF4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIdGNiaUFnSUNBZ0lDQWdJQ0FnSUZKbFpEb2djR0Z5YzJWSmJuUW9jaXdnTVRZcExGeHVJQ0FnSUNBZ0lDQWdJQ0FnUjNKbFpXNDZJSEJoY25ObFNXNTBLR2NzSURFMktTeGNiaUFnSUNBZ0lDQWdJQ0FnSUVKc2RXVTZJSEJoY25ObFNXNTBLR0lzSURFMktTeGNiaUFnSUNBZ0lDQWdJQ0FnSUVGc2NHaGhPaUF4WEc0Z0lDQWdJQ0FnSUgwN1hHNGdJQ0FnZlN4Y2JseHVJQ0FnSUdOdmJXSnBibVU2SUNoMllXeDFaWE1wSUQwK0lISm5ZaTVqYjIxaWFXNWxLSFpoYkhWbGN5bGNibjA3SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvaGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9kZWZhdWx0UHJvcHMgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RlZmF1bHQtcHJvcHMnKTtcblxudmFyIF9kaWN0aW9uYXJ5ID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kaWN0aW9uYXJ5Jyk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBIdWU6IHtcbiAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgIG1heDogMzYwXG4gICAgICAgIH0sXG4gICAgICAgIFNhdHVyYXRpb246IF9kZWZhdWx0UHJvcHMucGVyY2VudCxcbiAgICAgICAgTGlnaHRuZXNzOiBfZGVmYXVsdFByb3BzLnBlcmNlbnQsXG4gICAgICAgIEFscGhhOiBfZGVmYXVsdFByb3BzLm9wYWNpdHlcbiAgICB9LFxuXG4gICAgdGVzdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mKCdoc2wnKSA+IC0xO1xuICAgIH0sXG5cbiAgICBzcGxpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzLmdldENvbG9yVmFsdWVzKSh2YWx1ZSwgX2RpY3Rpb25hcnkuaHNsKTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICByZXR1cm4gKDAsIF91dGlscy5jcmVhdGVGdW5jdGlvblN0cmluZykoKDAsIF91dGlscy5jcmVhdGVEZWxpbWl0ZWQpKHZhbHVlcywgX2RpY3Rpb25hcnkuaHNsLCAnLCAnLCAyKSwgJ2hzbGEnKTtcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5b2Myd3Vhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenRyUWtGSlpUdEJRVU5ZTEdkQ1FVRlpMRVZCUVVVN1FVRkRWaXhYUVVGSExFVkJRVVU3UVVGRFJDeGxRVUZITEVWQlFVVXNRMEZCUXp0QlFVTk9MR1ZCUVVjc1JVRkJSU3hIUVVGSE8xTkJRMWc3UVVGRFJDeHJRa0ZCVlN4blFrRldWQ3hQUVVGUExFRkJWVmM3UVVGRGJrSXNhVUpCUVZNc1owSkJXRklzVDBGQlR5eEJRVmRWTzBGQlEyeENMR0ZCUVVzc1owSkJXa3NzVDBGQlR5eEJRVmxJTzB0QlEycENPenRCUVVWRUxGRkJRVWtzUlVGQlJTeFZRVUZETEV0QlFVczdaVUZCVFN4TFFVRkxMRWxCUVVrc1MwRkJTeXhEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1MwRkJRenM3UVVGRmNrUXNVMEZCU3l4RlFVRkZMRlZCUVVNc1MwRkJTenRsUVVGTExGZEJaakJDTEdOQlFXTXNSVUZsZWtJc1MwRkJTeXhqUVdoQ2FrTXNSMEZCUnl4RFFXZENlVU03UzBGQlFUczdRVUZGYWtRc1YwRkJUeXhGUVVGRkxGVkJRVU1zVFVGQlRUdGxRVUZMTEZkQmFrSkRMRzlDUVVGdlFpeEZRV2xDUVN4WFFXcENja01zWlVGQlpTeEZRV2xDYzBNc1RVRkJUU3hqUVd4Q00wUXNSMEZCUnl4RlFXdENiMFVzU1VGQlNTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRTFCUVUwc1EwRkJRenRMUVVGQk8wTkJRMmhISWl3aVptbHNaU0k2SW1oemJDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkRkJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCN0lIQmxjbU5sYm5Rc0lHOXdZV05wZEhrZ2ZTQm1jbTl0SUNjdUwzTmxkSFJwYm1kekwyUmxabUYxYkhRdGNISnZjSE1uTzF4dWFXMXdiM0owSUhzZ2FITnNJR0Z6SUdoemJGUmxjbTF6SUgwZ1puSnZiU0FuTGk5elpYUjBhVzVuY3k5a2FXTjBhVzl1WVhKNUp6dGNibWx0Y0c5eWRDQjdJR055WldGMFpVUmxiR2x0YVhSbFpDd2dZM0psWVhSbFJuVnVZM1JwYjI1VGRISnBibWNzSUdkbGRFTnZiRzl5Vm1Gc2RXVnpJSDBnWm5KdmJTQW5MaTR2YVc1akwzVjBhV3h6Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2UxeHVJQ0FnSUdSbFptRjFiSFJRY205d2N6b2dlMXh1SUNBZ0lDQWdJQ0JJZFdVNklIdGNiaUFnSUNBZ0lDQWdJQ0FnSUcxcGJqb2dNQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lHMWhlRG9nTXpZd1hHNGdJQ0FnSUNBZ0lIMHNYRzRnSUNBZ0lDQWdJRk5oZEhWeVlYUnBiMjQ2SUhCbGNtTmxiblFzWEc0Z0lDQWdJQ0FnSUV4cFoyaDBibVZ6Y3pvZ2NHVnlZMlZ1ZEN4Y2JpQWdJQ0FnSUNBZ1FXeHdhR0U2SUc5d1lXTnBkSGxjYmlBZ0lDQjlMRnh1WEc0Z0lDQWdkR1Z6ZERvZ0tIWmhiSFZsS1NBOVBpQW9kbUZzZFdVZ0ppWWdkbUZzZFdVdWFXNWtaWGhQWmlnbmFITnNKeWtnUGlBdE1Ta3NYRzVjYmlBZ0lDQnpjR3hwZERvZ0tIWmhiSFZsS1NBOVBpQm5aWFJEYjJ4dmNsWmhiSFZsY3loMllXeDFaU3dnYUhOc1ZHVnliWE1wTEZ4dVhHNGdJQ0FnWTI5dFltbHVaVG9nS0haaGJIVmxjeWtnUFQ0Z1kzSmxZWFJsUm5WdVkzUnBiMjVUZEhKcGJtY29ZM0psWVhSbFJHVnNhVzFwZEdWa0tIWmhiSFZsY3l3Z2FITnNWR1Z5YlhNc0lDY3NJQ2NzSURJcExDQW5hSE5zWVNjcFhHNTlPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvaHNsLmpzXG4gKiogbW9kdWxlIGlkID0gMjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9kaWN0aW9uYXJ5ID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kaWN0aW9uYXJ5Jyk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxudmFyIF9weCA9IHJlcXVpcmUoJy4vcHgnKTtcblxudmFyIF9weDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9weCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IF9weDIuZGVmYXVsdC5kZWZhdWx0UHJvcHMsXG5cbiAgICAvKlxuICAgICAgICBTcGxpdCBkaW1lbnNpb25zIGluIGZvcm1hdCBcIlRvcCBSaWdodCBCb3R0b20gTGVmdFwiXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW3N0cmluZ106IFBvc2l0aW9uIHZhbHVlc1xuICAgICAgICAgICAgXCIyMHB4IDAgMzBweCA0MHB4XCIgLT4gezIwcHgsIDAsIDMwcHgsIDQwcHh9XG4gICAgICAgICAgICBcIjIwcHggMCAzMHB4XCIgLT4gezIwcHgsIDAsIDMwcHgsIDB9XG4gICAgICAgICAgICBcIjIwcHggMFwiIC0+IHsyMHB4LCAwLCAyMHB4LCAwfVxuICAgICAgICAgICAgXCIyMHB4XCIgLT4gezIwcHgsIDIwcHgsIDIwcHgsIDIwcHh9XG4gICAgICAgIFxuICAgICAgICBAcmV0dXJuIFtvYmplY3RdOiBPYmplY3Qgd2l0aCBUL1IvQi9MIG1ldHJpY3NcbiAgICAqL1xuICAgIHNwbGl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIHNwbGl0VmFsdWUgPSB7fTtcbiAgICAgICAgdmFyIHNwbGl0UG9zaXRpb25zID0gKDAsIF91dGlscy5zcGxpdFNwYWNlRGVsaW1pdGVkKSh2YWx1ZSk7XG4gICAgICAgIHZhciBudW1Qb3NpdGlvbnMgPSBzcGxpdFBvc2l0aW9ucy5sZW5ndGg7XG4gICAgICAgIHZhciBqdW1wQmFjayA9IG51bVBvc2l0aW9ucyAhPT0gMSA/IDIgOiAxO1xuICAgICAgICB2YXIgaiA9IDA7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgIHNwbGl0VmFsdWVbX2RpY3Rpb25hcnkucG9zaXRpb25zW2ldXSA9IHNwbGl0UG9zaXRpb25zW2pdO1xuXG4gICAgICAgICAgICAvLyBKdW1wIGJhY2sgKHRvIHN0YXJ0KSBjb3VudGVyIGlmIHdlJ3ZlIHJlYWNoZWQgdGhlIGVuZCBvZiBvdXIgdmFsdWVzXG4gICAgICAgICAgICBqKys7XG4gICAgICAgICAgICBqID0gaiA9PT0gbnVtUG9zaXRpb25zID8gaiAtIGp1bXBCYWNrIDogajtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzcGxpdFZhbHVlO1xuICAgIH0sXG5cbiAgICBjb21iaW5lOiBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzLmNyZWF0ZURlbGltaXRlZCkodmFsdWVzLCBfZGljdGlvbmFyeS5wb3NpdGlvbnMsICcgJyk7XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OXdiM05wZEdsdmJuTXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenM3T3pzN2EwSkJTV1U3UVVGRFdDeG5Ra0ZCV1N4RlFVRkZMR0ZCUVZrc1dVRkJXVHM3T3pzN096czdPenM3T3p0QlFXRjBReXhUUVVGTExFVkJRVVVzVlVGQlF5eExRVUZMTEVWQlFVczdRVUZEWkN4WlFVRk5MRlZCUVZVc1IwRkJSeXhGUVVGRkxFTkJRVU03UVVGRGRFSXNXVUZCVFN4alFVRmpMRWRCUVVjc1YwRnVRa3dzYlVKQlFXMUNMRVZCYlVKTkxFdEJRVXNzUTBGQlF5eERRVUZETzBGQlEyeEVMRmxCUVUwc1dVRkJXU3hIUVVGSExHTkJRV01zUTBGQlF5eE5RVUZOTEVOQlFVTTdRVUZETTBNc1dVRkJUU3hSUVVGUkxFZEJRVWNzUVVGQlF5eFpRVUZaTEV0QlFVc3NRMEZCUXl4SFFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03UVVGRE9VTXNXVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE96dEJRVVZXTEdGQlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1FVRkRlRUlzYzBKQlFWVXNRMEZCUXl4WlFURkNaQ3hUUVVGVExFTkJNRUpsTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1kwRkJZeXhEUVVGRExFTkJRVU1zUTBGQlF6czdPMEZCUVVNc1FVRkhOME1zWVVGQlF5eEZRVUZGTEVOQlFVTTdRVUZEU2l4aFFVRkRMRWRCUVVjc1FVRkJReXhEUVVGRExFdEJRVXNzV1VGQldTeEhRVUZKTEVOQlFVTXNSMEZCUnl4UlFVRlJMRWRCUVVjc1EwRkJReXhEUVVGRE8xTkJReTlET3p0QlFVVkVMR1ZCUVU4c1ZVRkJWU3hEUVVGRE8wdEJRM0pDT3p0QlFVVkVMRmRCUVU4c1JVRkJSU3hWUVVGRExFMUJRVTA3WlVGQlN5eFhRVzVEYUVJc1pVRkJaU3hGUVcxRGFVSXNUVUZCVFN4alFYQkRkRU1zVTBGQlV5eEZRVzlETUVNc1IwRkJSeXhEUVVGRE8wdEJRVUU3UTBGREwwUWlMQ0ptYVd4bElqb2ljRzl6YVhScGIyNXpMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwVUdWeWNua3ZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElIc2djRzl6YVhScGIyNXpJSDBnWm5KdmJTQW5MaTl6WlhSMGFXNW5jeTlrYVdOMGFXOXVZWEo1Snp0Y2JtbHRjRzl5ZENCN0lHTnlaV0YwWlVSbGJHbHRhWFJsWkN3Z2MzQnNhWFJUY0dGalpVUmxiR2x0YVhSbFpDQjlJR1p5YjIwZ0p5NHVMMmx1WXk5MWRHbHNjeWM3WEc1cGJYQnZjblFnY0hoV1lXeDFaVlI1Y0dVZ1puSnZiU0FuTGk5d2VDYzdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJSHRjYmlBZ0lDQmtaV1poZFd4MFVISnZjSE02SUhCNFZtRnNkV1ZVZVhCbExtUmxabUYxYkhSUWNtOXdjeXhjYmx4dUlDQWdJQzhxWEc0Z0lDQWdJQ0FnSUZOd2JHbDBJR1JwYldWdWMybHZibk1nYVc0Z1ptOXliV0YwSUZ3aVZHOXdJRkpwWjJoMElFSnZkSFJ2YlNCTVpXWjBYQ0pjYmlBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUVCd1lYSmhiU0JiYzNSeWFXNW5YVG9nVUc5emFYUnBiMjRnZG1Gc2RXVnpYRzRnSUNBZ0lDQWdJQ0FnSUNCY0lqSXdjSGdnTUNBek1IQjRJRFF3Y0hoY0lpQXRQaUI3TWpCd2VDd2dNQ3dnTXpCd2VDd2dOREJ3ZUgxY2JpQWdJQ0FnSUNBZ0lDQWdJRndpTWpCd2VDQXdJRE13Y0hoY0lpQXRQaUI3TWpCd2VDd2dNQ3dnTXpCd2VDd2dNSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lGd2lNakJ3ZUNBd1hDSWdMVDRnZXpJd2NIZ3NJREFzSURJd2NIZ3NJREI5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmNJakl3Y0hoY0lpQXRQaUI3TWpCd2VDd2dNakJ3ZUN3Z01qQndlQ3dnTWpCd2VIMWNiaUFnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJRUJ5WlhSMWNtNGdXMjlpYW1WamRGMDZJRTlpYW1WamRDQjNhWFJvSUZRdlVpOUNMMHdnYldWMGNtbGpjMXh1SUNBZ0lDb3ZYRzRnSUNBZ2MzQnNhWFE2SUNoMllXeDFaU2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCemNHeHBkRlpoYkhWbElEMGdlMzA3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJSE53YkdsMFVHOXphWFJwYjI1eklEMGdjM0JzYVhSVGNHRmpaVVJsYkdsdGFYUmxaQ2gyWVd4MVpTazdYRzRnSUNBZ0lDQWdJR052Ym5OMElHNTFiVkJ2YzJsMGFXOXVjeUE5SUhOd2JHbDBVRzl6YVhScGIyNXpMbXhsYm1kMGFEdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2FuVnRjRUpoWTJzZ1BTQW9iblZ0VUc5emFYUnBiMjV6SUNFOVBTQXhLU0EvSURJZ09pQXhPMXh1SUNBZ0lDQWdJQ0JzWlhRZ2FpQTlJREE3WEc1Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQTBPeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhOd2JHbDBWbUZzZFdWYmNHOXphWFJwYjI1elcybGRYU0E5SUhOd2JHbDBVRzl6YVhScGIyNXpXMnBkTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCS2RXMXdJR0poWTJzZ0tIUnZJSE4wWVhKMEtTQmpiM1Z1ZEdWeUlHbG1JSGRsSjNabElISmxZV05vWldRZ2RHaGxJR1Z1WkNCdlppQnZkWElnZG1Gc2RXVnpYRzRnSUNBZ0lDQWdJQ0FnSUNCcUt5czdYRzRnSUNBZ0lDQWdJQ0FnSUNCcUlEMGdLR29nUFQwOUlHNTFiVkJ2YzJsMGFXOXVjeWtnUHlCcUlDMGdhblZ0Y0VKaFkyc2dPaUJxTzF4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlITndiR2wwVm1Gc2RXVTdYRzRnSUNBZ2ZTeGNibHh1SUNBZ0lHTnZiV0pwYm1VNklDaDJZV3gxWlhNcElEMCtJR055WldGMFpVUmxiR2x0YVhSbFpDaDJZV3gxWlhNc0lIQnZjMmwwYVc5dWN5d2dKeUFuS1Z4dWZUc2lYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9wb3NpdGlvbnMuanNcbiAqKiBtb2R1bGUgaWQgPSAyOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3VuaXQgPSByZXF1aXJlKCcuL3VuaXQnKTtcblxudmFyIF91bml0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3VuaXQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIHVuaXQ6ICdweCcsXG4gICAgICAgIHR5cGU6IF91bml0Mi5kZWZhdWx0XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OXdlQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3TzJ0Q1FVVmxPMEZCUTFnc1owSkJRVmtzUlVGQlJUdEJRVU5XTEZsQlFVa3NSVUZCUlN4SlFVRkpPMEZCUTFZc1dVRkJTU3huUWtGQlZUdExRVU5xUWp0RFFVTktJaXdpWm1sc1pTSTZJbkI0TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMFVHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSFZ1YVhSVWVYQmxJR1p5YjIwZ0p5NHZkVzVwZENjN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElIdGNiaUFnSUNCa1pXWmhkV3gwVUhKdmNITTZJSHRjYmlBZ0lDQWdJQ0FnZFc1cGREb2dKM0I0Snl4Y2JpQWdJQ0FnSUNBZ2RIbHdaVG9nZFc1cGRGUjVjR1ZjYmlBZ0lDQjlYRzU5T3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3B4LmpzXG4gKiogbW9kdWxlIGlkID0gMjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG52YXIgX2RpY3Rpb25hcnkgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RpY3Rpb25hcnknKTtcblxudmFyIF9kZWZhdWx0UHJvcHMgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RlZmF1bHQtcHJvcHMnKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBSZWQ6IF9kZWZhdWx0UHJvcHMucmdiLFxuICAgICAgICBHcmVlbjogX2RlZmF1bHRQcm9wcy5yZ2IsXG4gICAgICAgIEJsdWU6IF9kZWZhdWx0UHJvcHMucmdiLFxuICAgICAgICBBbHBoYTogX2RlZmF1bHRQcm9wcy5vcGFjaXR5XG4gICAgfSxcblxuICAgIHRlc3Q6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgJiYgdmFsdWUuaW5kZXhPZigncmdiJykgPiAtMTtcbiAgICB9LFxuXG4gICAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gKDAsIF91dGlscy5nZXRDb2xvclZhbHVlcykodmFsdWUsIF9kaWN0aW9uYXJ5LnJnYik7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMuY3JlYXRlRnVuY3Rpb25TdHJpbmcpKCgwLCBfdXRpbHMuY3JlYXRlRGVsaW1pdGVkKSh2YWx1ZXMsIF9kaWN0aW9uYXJ5LnJnYiwgJywgJywgMiksICdyZ2JhJyk7XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OXlaMkl1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3T3p0clFrRkpaVHRCUVVOWUxHZENRVUZaTEVWQlFVVTdRVUZEVml4WFFVRkhMR2RDUVVwR0xFZEJRVWNzUVVGSlZ6dEJRVU5tTEdGQlFVc3NaMEpCVEVvc1IwRkJSeXhCUVV0aE8wRkJRMnBDTEZsQlFVa3NaMEpCVGtnc1IwRkJSeXhCUVUxWk8wRkJRMmhDTEdGQlFVc3NaMEpCVUdVc1QwRkJUeXhCUVU5T08wdEJRM2hDT3p0QlFVVkVMRkZCUVVrc1JVRkJSU3hWUVVGRExFdEJRVXM3WlVGQlRTeExRVUZMTEVsQlFVa3NTMEZCU3l4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdTMEZCUXpzN1FVRkZja1FzVTBGQlN5eEZRVUZGTEZWQlFVTXNTMEZCU3p0bFFVRkxMRmRCWkRCQ0xHTkJRV01zUlVGamVrSXNTMEZCU3l4alFXSnFReXhIUVVGSExFTkJZWGxETzB0QlFVRTdPMEZCUldwRUxGZEJRVThzUlVGQlJTeFZRVUZETEUxQlFVMDdaVUZCU3l4WFFXaENReXh2UWtGQmIwSXNSVUZuUWtFc1YwRm9RbkpETEdWQlFXVXNSVUZuUW5ORExFMUJRVTBzWTBGbU0wUXNSMEZCUnl4RlFXVnZSU3hKUVVGSkxFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNUVUZCVFN4RFFVRkRPMHRCUVVFN1EwRkRhRWNpTENKbWFXeGxJam9pY21kaUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBVR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhzZ1kzSmxZWFJsUkdWc2FXMXBkR1ZrTENCamNtVmhkR1ZHZFc1amRHbHZibE4wY21sdVp5d2daMlYwUTI5c2IzSldZV3gxWlhNZ2ZTQm1jbTl0SUNjdUxpOXBibU12ZFhScGJITW5PMXh1YVcxd2IzSjBJSHNnY21kaUlHRnpJSEpuWWxSbGNtMXpJSDBnWm5KdmJTQW5MaTl6WlhSMGFXNW5jeTlrYVdOMGFXOXVZWEo1Snp0Y2JtbHRjRzl5ZENCN0lISm5ZaUJoY3lCa1pXWmhkV3gwVWtkQ0xDQnZjR0ZqYVhSNUlHRnpJR1JsWm1GMWJIUlBjR0ZqYVhSNUlIMGdabkp2YlNBbkxpOXpaWFIwYVc1bmN5OWtaV1poZFd4MExYQnliM0J6Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2UxeHVJQ0FnSUdSbFptRjFiSFJRY205d2N6b2dlMXh1SUNBZ0lDQWdJQ0JTWldRNklHUmxabUYxYkhSU1IwSXNYRzRnSUNBZ0lDQWdJRWR5WldWdU9pQmtaV1poZFd4MFVrZENMRnh1SUNBZ0lDQWdJQ0JDYkhWbE9pQmtaV1poZFd4MFVrZENMRnh1SUNBZ0lDQWdJQ0JCYkhCb1lUb2daR1ZtWVhWc2RFOXdZV05wZEhsY2JpQWdJQ0I5TEZ4dVhHNGdJQ0FnZEdWemREb2dLSFpoYkhWbEtTQTlQaUFvZG1Gc2RXVWdKaVlnZG1Gc2RXVXVhVzVrWlhoUFppZ25jbWRpSnlrZ1BpQXRNU2tzWEc1Y2JpQWdJQ0J6Y0d4cGREb2dLSFpoYkhWbEtTQTlQaUJuWlhSRGIyeHZjbFpoYkhWbGN5aDJZV3gxWlN3Z2NtZGlWR1Z5YlhNcExGeHVYRzRnSUNBZ1kyOXRZbWx1WlRvZ0tIWmhiSFZsY3lrZ1BUNGdZM0psWVhSbFJuVnVZM1JwYjI1VGRISnBibWNvWTNKbFlYUmxSR1ZzYVcxcGRHVmtLSFpoYkhWbGN5d2djbWRpVkdWeWJYTXNJQ2NzSUNjc0lESXBMQ0FuY21kaVlTY3BYRzU5T3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3JnYi5qc1xuICoqIG1vZHVsZSBpZCA9IDMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgY3VycmVudDogMVxuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTl6WTJGc1pTNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3YTBKQlFXVTdRVUZEV0N4blFrRkJXU3hGUVVGRk8wRkJRMVlzWlVGQlR5eEZRVUZGTEVOQlFVTTdTMEZEWWp0RFFVTktJaXdpWm1sc1pTSTZJbk5qWVd4bExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBVR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaVpYaHdiM0owSUdSbFptRjFiSFFnZTF4dUlDQWdJR1JsWm1GMWJIUlFjbTl3Y3pvZ2UxeHVJQ0FnSUNBZ0lDQmpkWEp5Wlc1ME9pQXhYRzRnSUNBZ2ZWeHVmVHNpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvc2NhbGUuanNcbiAqKiBtb2R1bGUgaWQgPSAzMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2NvbG9yID0gcmVxdWlyZSgnLi9jb2xvcicpO1xuXG52YXIgX2NvbG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbG9yKTtcblxudmFyIF9weCA9IHJlcXVpcmUoJy4vcHgnKTtcblxudmFyIF9kaWN0aW9uYXJ5ID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kaWN0aW9uYXJ5Jyk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHNoYWRvd1dpdGhvdXRDb2xvclRlcm1zID0gX2RpY3Rpb25hcnkuc2hhZG93LnNsaWNlKDAsIDQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgZGVmYXVsdFByb3BzOiBfZXh0ZW5kcyh7fSwgX2NvbG9yMi5kZWZhdWx0LmRlZmF1bHRQcm9wcywge1xuICAgICAgICBYOiBfcHguZGVmYXVsdFByb3BzLFxuICAgICAgICBZOiBfcHguZGVmYXVsdFByb3BzLFxuICAgICAgICBSYWRpdXM6IF9weC5kZWZhdWx0UHJvcHMsXG4gICAgICAgIFNwcmVhZDogX3B4LmRlZmF1bHRQcm9wc1xuICAgIH0pLFxuXG4gICAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgYml0cyA9ICgwLCBfdXRpbHMuc3BsaXRTcGFjZURlbGltaXRlZCkodmFsdWUpO1xuICAgICAgICB2YXIgaGFzUmVhY2hlZENvbG9yID0gZmFsc2U7XG4gICAgICAgIHZhciBjb2xvclByb3AgPSAnJztcbiAgICAgICAgdmFyIHNwbGl0VmFsdWUgPSB7fTtcblxuICAgICAgICBiaXRzLmZvckVhY2goZnVuY3Rpb24gKGJpdCwgaSkge1xuICAgICAgICAgICAgLy8gSWYgd2UndmUgcmVhY2hlZCB0aGUgY29sb3IgcHJvcHMsIGFwcGVuZCB0byBjb2xvciBzdHJpbmdcbiAgICAgICAgICAgIGlmIChoYXNSZWFjaGVkQ29sb3IgfHwgX2NvbG9yMi5kZWZhdWx0LnRlc3QoYml0KSkge1xuICAgICAgICAgICAgICAgIGhhc1JlYWNoZWRDb2xvciA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29sb3JQcm9wICs9IGJpdDtcblxuICAgICAgICAgICAgICAgIC8vIEVsc2UgcHJvY2VzcyBzaGFkb3cgdmFsdWVcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNwbGl0VmFsdWVbX2RpY3Rpb25hcnkuc2hhZG93W2ldXSA9IGJpdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBzcGxpdENvbG9yUHJvcHMgPSBfY29sb3IyLmRlZmF1bHQuc3BsaXQoY29sb3JQcm9wKTtcblxuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHNwbGl0VmFsdWUsIHsgc3BsaXRDb2xvclByb3BzOiBzcGxpdENvbG9yUHJvcHMgfSk7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMuY3JlYXRlRGVsaW1pdGVkKSh2YWx1ZXMsIHNoYWRvd1dpdGhvdXRDb2xvclRlcm1zLCAnICcpICsgX2NvbG9yMi5kZWZhdWx0LmNvbWJpbmUodmFsdWVzKTtcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5emFHRmtiM2N1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3T3pzN096czdPenM3TzBGQlMwRXNTVUZCVFN4MVFrRkJkVUlzUjBGQlJ5eFpRVWgyUWl4TlFVRk5MRU5CUnpaQ0xFdEJRVXNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN08ydENRVVY2UXp0QlFVTllMR2RDUVVGWkxHVkJRMHdzWjBKQlFVMHNXVUZCV1R0QlFVTnlRaXhUUVVGRExFMUJWRUVzV1VGQldTeEJRVk5KTzBGQlEycENMRk5CUVVNc1RVRldRU3haUVVGWkxFRkJWVWs3UVVGRGFrSXNZMEZCVFN4TlFWaE1MRmxCUVZrc1FVRlhVenRCUVVOMFFpeGpRVUZOTEUxQldrd3NXVUZCV1N4QlFWbFRPMDFCUTNwQ096dEJRVVZFTEZOQlFVc3NSVUZCUlN4VlFVRkRMRXRCUVVzc1JVRkJTenRCUVVOa0xGbEJRVTBzU1VGQlNTeEhRVUZITEZkQlpGb3NiVUpCUVcxQ0xFVkJZMkVzUzBGQlN5eERRVUZETEVOQlFVTTdRVUZEZUVNc1dVRkJTU3hsUVVGbExFZEJRVWNzUzBGQlN5eERRVUZETzBGQlF6VkNMRmxCUVVrc1UwRkJVeXhIUVVGSExFVkJRVVVzUTBGQlF6dEJRVU51UWl4WlFVRkpMRlZCUVZVc1IwRkJSeXhGUVVGRkxFTkJRVU03TzBGQlJYQkNMRmxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVlVGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXl4RlFVRkxPenRCUVVWeVFpeG5Ra0ZCU1N4bFFVRmxMRWxCUVVrc1owSkJRVTBzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZPMEZCUTNCRExDdENRVUZsTEVkQlFVY3NTVUZCU1N4RFFVRkRPMEZCUTNaQ0xIbENRVUZUTEVsQlFVa3NSMEZCUnpzN08wRkJRVU1zWVVGSGNFSXNUVUZCVFR0QlFVTklMRGhDUVVGVkxFTkJRVU1zV1VFMVFteENMRTFCUVUwc1EwRTBRbmRDTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRE8ybENRVU53UXp0VFFVTktMRU5CUVVNc1EwRkJRenM3UVVGRlNDeFpRVUZOTEdWQlFXVXNSMEZCUnl4blFrRkJUU3hMUVVGTExFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTTdPMEZCUlM5RExEUkNRVUZaTEZWQlFWVXNTVUZCUlN4bFFVRmxMRVZCUVdZc1pVRkJaU3hKUVVGSE8wdEJRemRET3p0QlFVVkVMRmRCUVU4c1JVRkJSU3hWUVVGRExFMUJRVTA3WlVGQlN5eFhRWEJEU3l4bFFVRmxMRVZCYjBOS0xFMUJRVTBzUlVGQlJTeDFRa0ZCZFVJc1JVRkJSU3hIUVVGSExFTkJRVU1zUjBGQlJ5eG5Ra0ZCVFN4UFFVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRE8wdEJRVUU3UTBGRGNrY2lMQ0ptYVd4bElqb2ljMmhoWkc5M0xtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBVR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUdOdmJHOXlJR1p5YjIwZ0p5NHZZMjlzYjNJbk8xeHVhVzF3YjNKMElIc2daR1ZtWVhWc2RGQnliM0J6SUdGeklIQjRSR1ZtWVhWc2RGQnliM0J6SUgwZ1puSnZiU0FuTGk5d2VDYzdYRzVwYlhCdmNuUWdleUJ6YUdGa2IzY2dZWE1nYzJoaFpHOTNWR1Z5YlhNZ2ZTQm1jbTl0SUNjdUwzTmxkSFJwYm1kekwyUnBZM1JwYjI1aGNua25PMXh1YVcxd2IzSjBJSHNnYzNCc2FYUlRjR0ZqWlVSbGJHbHRhWFJsWkN3Z1kzSmxZWFJsUkdWc2FXMXBkR1ZrSUgwZ1puSnZiU0FuTGk0dmFXNWpMM1YwYVd4ekp6dGNibHh1WTI5dWMzUWdjMmhoWkc5M1YybDBhRzkxZEVOdmJHOXlWR1Z5YlhNZ1BTQnphR0ZrYjNkVVpYSnRjeTV6YkdsalpTZ3dMQ0EwS1R0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2UxeHVJQ0FnSUdSbFptRjFiSFJRY205d2N6b2dlMXh1SUNBZ0lDQWdJQ0F1TGk1amIyeHZjaTVrWldaaGRXeDBVSEp2Y0hNc1hHNGdJQ0FnSUNBZ0lGZzZJSEI0UkdWbVlYVnNkRkJ5YjNCekxGeHVJQ0FnSUNBZ0lDQlpPaUJ3ZUVSbFptRjFiSFJRY205d2N5eGNiaUFnSUNBZ0lDQWdVbUZrYVhWek9pQndlRVJsWm1GMWJIUlFjbTl3Y3l4Y2JpQWdJQ0FnSUNBZ1UzQnlaV0ZrT2lCd2VFUmxabUYxYkhSUWNtOXdjMXh1SUNBZ0lIMHNYRzVjYmlBZ0lDQnpjR3hwZERvZ0tIWmhiSFZsS1NBOVBpQjdYRzRnSUNBZ0lDQWdJR052Ym5OMElHSnBkSE1nUFNCemNHeHBkRk53WVdObFJHVnNhVzFwZEdWa0tIWmhiSFZsS1R0Y2JpQWdJQ0FnSUNBZ2JHVjBJR2hoYzFKbFlXTm9aV1JEYjJ4dmNpQTlJR1poYkhObE8xeHVJQ0FnSUNBZ0lDQnNaWFFnWTI5c2IzSlFjbTl3SUQwZ0p5YzdYRzRnSUNBZ0lDQWdJR3hsZENCemNHeHBkRlpoYkhWbElEMGdlMzA3WEc1Y2JpQWdJQ0FnSUNBZ1ltbDBjeTVtYjNKRllXTm9LQ2hpYVhRc0lHa3BJRDArSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUVsbUlIZGxKM1psSUhKbFlXTm9aV1FnZEdobElHTnZiRzl5SUhCeWIzQnpMQ0JoY0hCbGJtUWdkRzhnWTI5c2IzSWdjM1J5YVc1blhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2FHRnpVbVZoWTJobFpFTnZiRzl5SUh4OElHTnZiRzl5TG5SbGMzUW9ZbWwwS1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHaGhjMUpsWVdOb1pXUkRiMnh2Y2lBOUlIUnlkV1U3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5c2IzSlFjbTl3SUNzOUlHSnBkRHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnUld4elpTQndjbTlqWlhOeklITm9ZV1J2ZHlCMllXeDFaVnh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCemNHeHBkRlpoYkhWbFczTm9ZV1J2ZDFSbGNtMXpXMmxkWFNBOUlHSnBkRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmU2s3WEc1Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnYzNCc2FYUkRiMnh2Y2xCeWIzQnpJRDBnWTI5c2IzSXVjM0JzYVhRb1kyOXNiM0pRY205d0tUdGNibHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdleUF1TGk1emNHeHBkRlpoYkhWbExDQnpjR3hwZEVOdmJHOXlVSEp2Y0hNZ2ZUdGNiaUFnSUNCOUxGeHVYRzRnSUNBZ1kyOXRZbWx1WlRvZ0tIWmhiSFZsY3lrZ1BUNGdZM0psWVhSbFJHVnNhVzFwZEdWa0tIWmhiSFZsY3l3Z2MyaGhaRzkzVjJsMGFHOTFkRU52Ykc5eVZHVnliWE1zSUNjZ0p5a2dLeUJqYjJ4dmNpNWpiMjFpYVc1bEtIWmhiSFZsY3lsY2JuMDdYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvc2hhZG93LmpzXG4gKiogbW9kdWxlIGlkID0gMzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG4vKlxuICAgIFNwbGl0IGEgdmFsdWUgaW50byBhIHZhbHVlL3VuaXQgb2JqZWN0XG4gICAgXG4gICAgICAgIFwiMjAwcHhcIiAtPiB7IHZhbHVlOiAyMDAsIHVuaXQ6IFwicHhcIiB9XG4gICAgICAgIFxuICAgIEBwYXJhbSBbc3RyaW5nXTogVmFsdWUgdG8gc3BsaXRcbiAgICBAcmV0dXJuIFtvYmplY3RdOiBPYmplY3Qgd2l0aCB2YWx1ZSBhbmQgdW5pdCBwcm9wc1xuKi9cbnZhciBmaW5kVmFsdWVBbmRVbml0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlLm1hdGNoKSB7XG4gICAgICAgIHZhciBzcGxpdFZhbHVlID0gdmFsdWUubWF0Y2goLygtP1xcZCpcXC4/XFxkKikoLiopLyk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiBwYXJzZUZsb2F0KHNwbGl0VmFsdWVbMV0pLFxuICAgICAgICAgICAgdW5pdDogc3BsaXRWYWx1ZVsyXVxuICAgICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB7IHZhbHVlOiB2YWx1ZSB9O1xuICAgIH1cbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICB0ZXN0OiBmdW5jdGlvbiAodW5wYXJzZWQpIHtcbiAgICAgICAgdmFyIF9maW5kVmFsdWVBbmRVbml0ID0gZmluZFZhbHVlQW5kVW5pdCh1bnBhcnNlZCk7XG5cbiAgICAgICAgdmFyIHZhbHVlID0gX2ZpbmRWYWx1ZUFuZFVuaXQudmFsdWU7XG5cbiAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMuaXNOdW0pKHZhbHVlKSAmJiAhaXNOYU4odmFsdWUpID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH0sXG5cbiAgICBwYXJzZTogZnVuY3Rpb24gKHVucGFyc2VkLCBwYXJlbnQpIHtcbiAgICAgICAgdmFyIF9maW5kVmFsdWVBbmRVbml0MiA9IGZpbmRWYWx1ZUFuZFVuaXQodW5wYXJzZWQpO1xuXG4gICAgICAgIHZhciB2YWx1ZSA9IF9maW5kVmFsdWVBbmRVbml0Mi52YWx1ZTtcbiAgICAgICAgdmFyIHVuaXQgPSBfZmluZFZhbHVlQW5kVW5pdDIudW5pdDtcblxuICAgICAgICBpZiAodW5pdCAmJiB1bml0ICE9PSB1bml0KSB7XG4gICAgICAgICAgICBwYXJlbnQudW5pdCA9IHVuaXQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSxcblxuICAgIHNlcmlhbGl6ZTogZnVuY3Rpb24gKHBhcnNlZCwgcGFyZW50KSB7XG4gICAgICAgIHJldHVybiBwYXJzZWQgKyAocGFyZW50LnVuaXQgfHwgJycpO1xuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTkxYm1sMExtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN096czdPenM3TzBGQlUwRXNTVUZCVFN4blFrRkJaMElzUjBGQlJ5eFZRVUZETEV0QlFVc3NSVUZCU3p0QlFVTm9ReXhSUVVGSkxFdEJRVXNzUTBGQlF5eExRVUZMTEVWQlFVVTdRVUZEWWl4WlFVRk5MRlZCUVZVc1IwRkJSeXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEcxQ1FVRnRRaXhEUVVGRExFTkJRVU03TzBGQlJYQkVMR1ZCUVU4N1FVRkRTQ3hwUWtGQlN5eEZRVUZGTEZWQlFWVXNRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRGFFTXNaMEpCUVVrc1JVRkJSeXhWUVVGVkxFTkJRVU1zUTBGQlF5eERRVUZETzFOQlEzWkNMRU5CUVVNN1MwRkRUQ3hOUVVGTk8wRkJRMGdzWlVGQlR5eEZRVUZGTEV0QlFVc3NSVUZCVEN4TFFVRkxMRVZCUVVVc1EwRkJRenRMUVVOd1FqdERRVU5LTEVOQlFVTTdPMnRDUVVWaE8wRkJRMWdzVVVGQlNTeEZRVUZGTEZWQlFWVXNVVUZCVVN4RlFVRkZPMmREUVVOS0xHZENRVUZuUWl4RFFVRkRMRkZCUVZFc1EwRkJRenM3V1VGQmNFTXNTMEZCU3l4eFFrRkJUQ3hMUVVGTE96dEJRVU5pTEdWQlFVOHNRVUZCUXl4WFFYcENVQ3hMUVVGTExFVkJlVUpSTEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZKTEVsQlFVa3NSMEZCUnl4TFFVRkxMRU5CUVVNN1MwRkRla1E3TzBGQlJVUXNVMEZCU3l4RlFVRkZMRlZCUVZVc1VVRkJVU3hGUVVGRkxFMUJRVTBzUlVGQlJUdHBRMEZEVUN4blFrRkJaMElzUTBGQlF5eFJRVUZSTEVOQlFVTTdPMWxCUVRGRExFdEJRVXNzYzBKQlFVd3NTMEZCU3p0WlFVRkZMRWxCUVVrc2MwSkJRVW9zU1VGQlNUczdRVUZGYmtJc1dVRkJTU3hKUVVGSkxFbEJRVWtzU1VGQlNTeExRVUZMTEVsQlFVa3NSVUZCUlR0QlFVTjJRaXhyUWtGQlRTeERRVUZETEVsQlFVa3NSMEZCUnl4SlFVRkpMRU5CUVVNN1UwRkRkRUk3TzBGQlJVUXNaVUZCVHl4TFFVRkxMRU5CUVVNN1MwRkRhRUk3TzBGQlJVUXNZVUZCVXl4RlFVRkZMRlZCUVVNc1RVRkJUU3hGUVVGRkxFMUJRVTA3WlVGQlN5eE5RVUZOTEVsQlFVa3NUVUZCVFN4RFFVRkRMRWxCUVVrc1NVRkJTU3hGUVVGRkxFTkJRVUVzUVVGQlF6dExRVUZCTzBOQlF6bEVJaXdpWm1sc1pTSTZJblZ1YVhRdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUlFaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZXlCcGMwNTFiU0I5SUdaeWIyMGdKeTR1TDJsdVl5OTFkR2xzY3ljN1hHNHZLbHh1SUNBZ0lGTndiR2wwSUdFZ2RtRnNkV1VnYVc1MGJ5QmhJSFpoYkhWbEwzVnVhWFFnYjJKcVpXTjBYRzRnSUNBZ1hHNGdJQ0FnSUNBZ0lGd2lNakF3Y0hoY0lpQXRQaUI3SUhaaGJIVmxPaUF5TURBc0lIVnVhWFE2SUZ3aWNIaGNJaUI5WEc0Z0lDQWdJQ0FnSUZ4dUlDQWdJRUJ3WVhKaGJTQmJjM1J5YVc1blhUb2dWbUZzZFdVZ2RHOGdjM0JzYVhSY2JpQWdJQ0JBY21WMGRYSnVJRnR2WW1wbFkzUmRPaUJQWW1wbFkzUWdkMmwwYUNCMllXeDFaU0JoYm1RZ2RXNXBkQ0J3Y205d2MxeHVLaTljYm1OdmJuTjBJR1pwYm1SV1lXeDFaVUZ1WkZWdWFYUWdQU0FvZG1Gc2RXVXBJRDArSUh0Y2JpQWdJQ0JwWmlBb2RtRnNkV1V1YldGMFkyZ3BJSHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdjM0JzYVhSV1lXeDFaU0E5SUhaaGJIVmxMbTFoZEdOb0tDOG9MVDljWEdRcVhGd3VQMXhjWkNvcEtDNHFLUzhwTzF4dVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IyWVd4MVpUb2djR0Z5YzJWR2JHOWhkQ2h6Y0d4cGRGWmhiSFZsV3pGZEtTeGNiaUFnSUNBZ0lDQWdJQ0FnSUhWdWFYUTZJQ0J6Y0d4cGRGWmhiSFZsV3pKZFhHNGdJQ0FnSUNBZ0lIMDdYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhzZ2RtRnNkV1VnZlR0Y2JpQWdJQ0I5WEc1OU8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQjdYRzRnSUNBZ2RHVnpkRG9nWm5WdVkzUnBiMjRnS0hWdWNHRnljMlZrS1NCN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUhzZ2RtRnNkV1VnZlNBOUlHWnBibVJXWVd4MVpVRnVaRlZ1YVhRb2RXNXdZWEp6WldRcE8xeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z0tHbHpUblZ0S0haaGJIVmxLU0FtSmlBaGFYTk9ZVTRvZG1Gc2RXVXBLU0EvSUhSeWRXVWdPaUJtWVd4elpUdGNiaUFnSUNCOUxGeHVYRzRnSUNBZ2NHRnljMlU2SUdaMWJtTjBhVzl1SUNoMWJuQmhjbk5sWkN3Z2NHRnlaVzUwS1NCN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUhzZ2RtRnNkV1VzSUhWdWFYUWdmU0E5SUdacGJtUldZV3gxWlVGdVpGVnVhWFFvZFc1d1lYSnpaV1FwTzF4dVhHNGdJQ0FnSUNBZ0lHbG1JQ2gxYm1sMElDWW1JSFZ1YVhRZ0lUMDlJSFZ1YVhRcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhCaGNtVnVkQzUxYm1sMElEMGdkVzVwZER0Y2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjJZV3gxWlR0Y2JpQWdJQ0I5TEZ4dVhHNGdJQ0FnYzJWeWFXRnNhWHBsT2lBb2NHRnljMlZrTENCd1lYSmxiblFwSUQwK0lIQmhjbk5sWkNBcklDaHdZWEpsYm5RdWRXNXBkQ0I4ZkNBbkp5bGNibjA3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3VuaXQuanNcbiAqKiBtb2R1bGUgaWQgPSAzM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5jaXJjdWxhck1vdGlvbiA9IGV4cG9ydHMuY3JlYXRlTWFwcGVyID0gdW5kZWZpbmVkO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpO1xuXG52YXIgY3JlYXRlTWFwcGVyID0gZXhwb3J0cy5jcmVhdGVNYXBwZXIgPSBmdW5jdGlvbiAoZnJvbSwgdG8pIHtcbiAgICB2YXIgbWFwTGVuZ3RoID0gZnJvbS5sZW5ndGg7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbWFwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA8IGZyb21baV0gfHwgaSA9PT0gbWFwTGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgwLCBfY2FsYy5nZXRWYWx1ZUZyb21Qcm9ncmVzcykoKDAsIF9jYWxjLnJlc3RyaWN0KSgoMCwgX2NhbGMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUpKHZhbHVlLCBmcm9tW2kgLSAxXSwgZnJvbVtpXSksIDAsIDEpLCB0b1tpIC0gMV0sIHRvW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG59O1xuXG52YXIgY2lyY3VsYXJNb3Rpb24gPSBleHBvcnRzLmNpcmN1bGFyTW90aW9uID0gZnVuY3Rpb24gKHYsIGtleSwgX3JlZikge1xuICAgIHZhciB2YWx1ZXMgPSBfcmVmLnZhbHVlcztcbiAgICByZXR1cm4gKDAsIF9jYWxjLnBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UpKHtcbiAgICAgICAgeDogdmFsdWVzLm9yaWdpblguY3VycmVudCxcbiAgICAgICAgeTogdmFsdWVzLm9yaWdpblkuY3VycmVudFxuICAgIH0sIHZhbHVlcy5hbmdsZS5jdXJyZW50LCB2YWx1ZXMuZGlzdGFuY2UuY3VycmVudClba2V5XTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12ZEhKaGJuTm1iM0p0WlhKekxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN1FVRkZUeXhKUVVGTkxGbEJRVmtzVjBGQldpeFpRVUZaTEVkQlFVY3NWVUZCUXl4SlFVRkpMRVZCUVVVc1JVRkJSU3hGUVVGTE8wRkJRM1JETEZGQlFVMHNVMEZCVXl4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU03TzBGQlJUbENMRmRCUVU4c1ZVRkJReXhMUVVGTExFVkJRVXM3UVVGRFpDeGhRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzVTBGQlV5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMEZCUTJoRExHZENRVUZKTEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEZOQlFWTXNSVUZCUlR0QlFVTndReXgxUWtGQlR5eFZRVkpSTEc5Q1FVRnZRaXhGUVZGUUxGVkJVbE1zVVVGQlVTeEZRVkZTTEZWQlVqVkRMRzlDUVVGdlFpeEZRVkUyUXl4TFFVRkxMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dGhRVU53U0R0VFFVTktPMHRCUTBvc1EwRkJRenREUVVOTUxFTkJRVU03TzBGQlJVc3NTVUZCVFN4alFVRmpMRmRCUVdRc1kwRkJZeXhIUVVGSExGVkJRVU1zUTBGQlF5eEZRVUZGTEVkQlFVYzdVVUZCU1N4TlFVRk5MRkZCUVU0c1RVRkJUVHRYUVVNelF5eFZRV1l5UkN4NVFrRkJlVUlzUlVGbE1VUTdRVUZEZEVJc1UwRkJReXhGUVVGRkxFMUJRVTBzUTBGQlF5eFBRVUZQTEVOQlFVTXNUMEZCVHp0QlFVTjZRaXhUUVVGRExFVkJRVVVzVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4UFFVRlBPMHRCUXpWQ0xFVkJRVVVzVFVGQlRTeERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRVZCUVVVc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNN1EwRkJRU3hEUVVGRElpd2labWxzWlNJNkluUnlZVzV6Wm05eWJXVnljeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEZCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQjdJR2RsZEZCeWIyZHlaWE56Um5KdmJWWmhiSFZsTENCblpYUldZV3gxWlVaeWIyMVFjbTluY21WemN5d2djbVZ6ZEhKcFkzUXNJSEJ2YVc1MFJuSnZiVUZ1WjJ4bFFXNWtSR2x6ZEdGdVkyVWdmU0JtY205dElDY3VMaTlwYm1NdlkyRnNZeWM3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JqY21WaGRHVk5ZWEJ3WlhJZ1BTQW9abkp2YlN3Z2RHOHBJRDArSUh0Y2JpQWdJQ0JqYjI1emRDQnRZWEJNWlc1bmRHZ2dQU0JtY205dExteGxibWQwYUR0Y2JseHVJQ0FnSUhKbGRIVnliaUFvZG1Gc2RXVXBJRDArSUh0Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREU3SUdrZ1BDQnRZWEJNWlc1bmRHZzdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIWmhiSFZsSUR3Z1puSnZiVnRwWFNCOGZDQnBJRDA5UFNCdFlYQk1aVzVuZEdncElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z1oyVjBWbUZzZFdWR2NtOXRVSEp2WjNKbGMzTW9jbVZ6ZEhKcFkzUW9aMlYwVUhKdlozSmxjM05HY205dFZtRnNkV1VvZG1Gc2RXVXNJR1p5YjIxYmFTQXRJREZkTENCbWNtOXRXMmxkS1N3Z01Dd2dNU2tzSUhSdlcya2dMU0F4WFN3Z2RHOWJhVjBwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVHRjYm4wN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCamFYSmpkV3hoY2sxdmRHbHZiaUE5SUNoMkxDQnJaWGtzSUhzZ2RtRnNkV1Z6SUgwcElEMCtJRnh1SUNBZ0lIQnZhVzUwUm5KdmJVRnVaMnhsUVc1a1JHbHpkR0Z1WTJVb2UxeHVJQ0FnSUNBZ0lDQjRPaUIyWVd4MVpYTXViM0pwWjJsdVdDNWpkWEp5Wlc1MExGeHVJQ0FnSUNBZ0lDQjVPaUIyWVd4MVpYTXViM0pwWjJsdVdTNWpkWEp5Wlc1MElGeHVJQ0FnSUgwc0lIWmhiSFZsY3k1aGJtZHNaUzVqZFhKeVpXNTBMQ0IyWVd4MVpYTXVaR2x6ZEdGdVkyVXVZM1Z5Y21WdWRDbGJhMlY1WFR0Y2JseHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvdHJhbnNmb3JtZXJzLmpzXG4gKiogbW9kdWxlIGlkID0gMzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi4vLi4vaW5jL2NhbGMnKTtcblxudmFyIEJMRU5EX0FDQ1VSQUNZID0gMTA7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvdXRBY3Rpb24sIGluQWN0aW9uLCBrZXkpIHtcbiAgICB2YXIgb3V0VmFsdWUgPSBvdXRBY3Rpb24udmFsdWVzW2tleV07XG5cbiAgICBpZiAob3V0QWN0aW9uLmVsYXBzZWQgPT09IHVuZGVmaW5lZCB8fCAhb3V0VmFsdWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBpblZhbHVlID0gaW5BY3Rpb24udmFsdWVzW2tleV07XG4gICAgdmFyIG91dFRvdGFsRHVyYXRpb24gPSBvdXRWYWx1ZS5kZWxheSArIG91dFZhbHVlLmR1cmF0aW9uO1xuICAgIHZhciB0aW1lVW50aWxPdXRFbmQgPSBvdXRUb3RhbER1cmF0aW9uIC0gb3V0QWN0aW9uLmVsYXBzZWQ7XG4gICAgdmFyIGluUG9zaXRpb25BdE91dEVuZCA9ICgwLCBfY2FsYy5lYXNlKSgoMCwgX2NhbGMucmVzdHJpY3QpKCgwLCBfY2FsYy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSkodGltZVVudGlsT3V0RW5kLCAwLCBpblZhbHVlLmRlbGF5ICsgaW5WYWx1ZS5kdXJhdGlvbiksIDAsIDEpLCBpblZhbHVlLmZyb20sIGluVmFsdWUudG8sIGluVmFsdWUuZWFzZSk7XG4gICAgdmFyIGluQmlnZ2VyVGhhbk91dEF0U3RhcnQgPSBpblZhbHVlLmZyb20gPiBvdXRWYWx1ZS5jdXJyZW50O1xuICAgIHZhciBpbkJpZ2dlclRoYW5PdXRBdEVuZCA9IGluUG9zaXRpb25BdE91dEVuZCA+IG91dFZhbHVlLnRvO1xuICAgIHZhciB0d2VlbnNJbnRlcnNlY3QgPSBpbkJpZ2dlclRoYW5PdXRBdFN0YXJ0ICE9PSBpbkJpZ2dlclRoYW5PdXRBdEVuZDtcblxuICAgIHZhciBibGVuZEN1cnZlID0gW1swLCBvdXRWYWx1ZS5jdXJyZW50XSwgW3RpbWVVbnRpbE91dEVuZCwgaW5Qb3NpdGlvbkF0T3V0RW5kXV07XG5cbiAgICAvLyBJZiB0d2VlbnMgaW50ZXJzZWN0LCByZXNvbHZlIHR3ZWVucyBhdCBhIHJlc29sdXRpb24gdG8gZmluZCBleGFjdGx5IHdoZXJlXG4gICAgaWYgKHR3ZWVuc0ludGVyc2VjdCkge1xuICAgICAgICB2YXIgdGltZVN0ZXBUb1Rlc3QgPSB0aW1lVW50aWxPdXRFbmQgLyBCTEVORF9BQ0NVUkFDWTtcbiAgICAgICAgdmFyIGZvdW5kUDEgPSBmYWxzZTtcbiAgICAgICAgdmFyIGZvdW5kUDIgPSBmYWxzZTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8PSBCTEVORF9BQ0NVUkFDWTsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdGltZVN0ZXAgPSBpICogdGltZVN0ZXBUb1Rlc3Q7XG4gICAgICAgICAgICB2YXIgb3V0QXRUaW1lID0gKDAsIF9jYWxjLmVhc2UpKCgwLCBfY2FsYy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSkob3V0QWN0aW9uLmVsYXBzZWQgKyB0aW1lU3RlcCwgb3V0VmFsdWUuZGVsYXksIG91dFZhbHVlLmR1cmF0aW9uKSwgb3V0VmFsdWUuZnJvbSwgb3V0VmFsdWUudG8sIG91dFZhbHVlLmVhc2UpO1xuICAgICAgICAgICAgdmFyIGluQXRUaW1lID0gKDAsIF9jYWxjLmVhc2UpKCgwLCBfY2FsYy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSkoaW5BY3Rpb24uZWxhcHNlZCArIHRpbWVTdGVwLCBpblZhbHVlLmRlbGF5LCBpblZhbHVlLmR1cmF0aW9uKSwgaW5WYWx1ZS5mcm9tLCBpblZhbHVlLnRvLCBpblZhbHVlLmVhc2UpO1xuXG4gICAgICAgICAgICBpZiAoIWZvdW5kUDEgJiYgKGluQmlnZ2VyVGhhbk91dEF0U3RhcnQgJiYgaW5BdFRpbWUgPCBvdXRBdFRpbWUgfHwgIWluQmlnZ2VyVGhhbk91dEF0U3RhcnQgJiYgaW5BdFRpbWUgPiBvdXRBdFRpbWUpKSB7XG4gICAgICAgICAgICAgICAgYmxlbmRDdXJ2ZS5zcGxpY2UoMSwgMCwgW3RpbWVTdGVwLCBpbkF0VGltZV0pO1xuICAgICAgICAgICAgICAgIGZvdW5kUDEgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZm91bmRQMSAmJiAoaW5CaWdnZXJUaGFuT3V0QXRTdGFydCAmJiBpbkF0VGltZSA8IG91dFZhbHVlLmN1cnJlbnQgfHwgIWluQmlnZ2VyVGhhbk91dEF0U3RhcnQgJiYgaW5BdFRpbWUgPiBvdXRWYWx1ZS5jdXJyZW50KSkge1xuICAgICAgICAgICAgICAgIGJsZW5kQ3VydmVbMl0gPSBbdGltZVN0ZXAsIGluQXRUaW1lXTtcbiAgICAgICAgICAgICAgICBmb3VuZFAyID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGZvdW5kUDIpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChibGVuZEN1cnZlLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAvLyBQYXNzIGJldHdlZW4gdHdlZW5zIHVzaW5nIGluY29taW5nIGVhc2luZyBpZiBqdXN0IHR3byBwb2ludHNcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBibGVuZFByb2dyZXNzID0gKDAsIF9jYWxjLnJlc3RyaWN0KSgoMCwgX2NhbGMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUpKGluQWN0aW9uLmVsYXBzZWQsIGJsZW5kQ3VydmVbMF1bMF0sIGJsZW5kQ3VydmVbMV1bMF0pLCAwLCAxKTtcblxuICAgICAgICAgICAgaWYgKGJsZW5kUHJvZ3Jlc3MgPT09IDEpIHtcbiAgICAgICAgICAgICAgICBpbkFjdGlvbi5ibGVuZEN1cnZlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gKDAsIF9jYWxjLmVhc2UpKGJsZW5kUHJvZ3Jlc3MsIG91dFZhbHVlLmN1cnJlbnQsIGluVmFsdWUuY3VycmVudCwgaW5WYWx1ZS5lYXNlKTtcbiAgICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBQYXNzIGJldHdlZW4gdHdlZW5zIHVzaW5nIGJlemllciBpbnRlcnBvbGF0aW9uXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYmxlbmRQcm9ncmVzcyA9ICgwLCBfY2FsYy5yZXN0cmljdCkoKDAsIF9jYWxjLmdldFByb2dyZXNzRnJvbVZhbHVlKShpbkFjdGlvbi5lbGFwc2VkLCBibGVuZEN1cnZlWzBdWzBdLCBibGVuZEN1cnZlWzJdWzBdKSwgMCwgMSk7XG4gICAgICAgICAgICB2YXIgYVAgPSAoMCwgX2NhbGMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MpKGJsZW5kUHJvZ3Jlc3MsIGJsZW5kQ3VydmVbMF1bMV0sIGJsZW5kQ3VydmVbMV1bMV0pO1xuICAgICAgICAgICAgdmFyIGJQID0gKDAsIF9jYWxjLmdldFZhbHVlRnJvbVByb2dyZXNzKShibGVuZFByb2dyZXNzLCBibGVuZEN1cnZlWzFdWzFdLCBibGVuZEN1cnZlWzJdWzFdKTtcblxuICAgICAgICAgICAgaWYgKGJsZW5kUHJvZ3Jlc3MgPT09IDEpIHtcbiAgICAgICAgICAgICAgICBpbkFjdGlvbi5ibGVuZEN1cnZlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHJldHVybiBpblZhbHVlLmN1cnJlbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiAoMCwgX2NhbGMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MpKGJsZW5kUHJvZ3Jlc3MsIGFQLCBiUCk7XG4gICAgICAgIH07XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnZjaTlwYm1NdloyVnVaWEpoZEdVdFlteGxibVF0WTNWeWRtVXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN08wRkJSVUVzU1VGQlRTeGpRVUZqTEVkQlFVY3NSVUZCUlN4RFFVRkRPenRyUWtGRldDeFZRVUZETEZOQlFWTXNSVUZCUlN4UlFVRlJMRVZCUVVVc1IwRkJSeXhGUVVGTE8wRkJRM3BETEZGQlFVMHNVVUZCVVN4SFFVRkhMRk5CUVZNc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdPMEZCUlhaRExGRkJRVWtzVTBGQlV5eERRVUZETEU5QlFVOHNTMEZCU3l4VFFVRlRMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVU3UVVGRE9VTXNaVUZCVHp0TFFVTldPenRCUVVWRUxGRkJRVTBzVDBGQlR5eEhRVUZITEZGQlFWRXNRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03UVVGRGNrTXNVVUZCVFN4blFrRkJaMElzUjBGQlJ5eFJRVUZSTEVOQlFVTXNTMEZCU3l4SFFVRkhMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU03UVVGRE5VUXNVVUZCVFN4bFFVRmxMRWRCUVVjc1owSkJRV2RDTEVkQlFVY3NVMEZCVXl4RFFVRkRMRTlCUVU4c1EwRkJRenRCUVVNM1JDeFJRVUZOTEd0Q1FVRnJRaXhIUVVGSExGVkJaSE5DTEVsQlFVa3NSVUZqY2tJc1ZVRmtkVUlzVVVGQlVTeEZRV04wUWl4VlFXUndReXh2UWtGQmIwSXNSVUZqY1VNc1pVRkJaU3hGUVVGRkxFTkJRVU1zUlVGQlJTeFBRVUZQTEVOQlFVTXNTMEZCU3l4SFFVRkhMRTlCUVU4c1EwRkJReXhSUVVGUkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1QwRkJUeXhEUVVGRExFbEJRVWtzUlVGQlJTeFBRVUZQTEVOQlFVTXNSVUZCUlN4RlFVRkZMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dEJRVU53U3l4UlFVRk5MSE5DUVVGelFpeEhRVUZITEU5QlFVOHNRMEZCUXl4SlFVRkpMRWRCUVVjc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF6dEJRVU12UkN4UlFVRk5MRzlDUVVGdlFpeEhRVUZITEd0Q1FVRnJRaXhIUVVGSExGRkJRVkVzUTBGQlF5eEZRVUZGTEVOQlFVTTdRVUZET1VRc1VVRkJUU3hsUVVGbExFZEJRVWNzYzBKQlFYTkNMRXRCUVVzc2IwSkJRVzlDTEVOQlFVTTdPMEZCUlhoRkxGRkJRVTBzVlVGQlZTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eEZRVUZGTEVOQlFVTXNaVUZCWlN4RlFVRkZMR3RDUVVGclFpeERRVUZETEVOQlFVTTdPenRCUVVGRExFRkJSMnhHTEZGQlFVa3NaVUZCWlN4RlFVRkZPMEZCUTJwQ0xGbEJRVTBzWTBGQll5eEhRVUZITEdWQlFXVXNSMEZCUnl4alFVRmpMRU5CUVVNN1FVRkRlRVFzV1VGQlNTeFBRVUZQTEVkQlFVY3NTMEZCU3l4RFFVRkRPMEZCUTNCQ0xGbEJRVWtzVDBGQlR5eEhRVUZITEV0QlFVc3NRMEZCUXpzN1FVRkZjRUlzWVVGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxHTkJRV01zUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0QlFVTjBReXhuUWtGQlRTeFJRVUZSTEVkQlFVY3NRMEZCUXl4SFFVRkhMR05CUVdNc1EwRkJRenRCUVVOd1F5eG5Ra0ZCVFN4VFFVRlRMRWRCUVVjc1ZVRTNRblZDTEVsQlFVa3NSVUUyUW5SQ0xGVkJOMEl4UWl4dlFrRkJiMElzUlVFMlFqSkNMRk5CUVZNc1EwRkJReXhQUVVGUExFZEJRVWNzVVVGQlVTeEZRVUZGTEZGQlFWRXNRMEZCUXl4TFFVRkxMRVZCUVVVc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eEZRVUZGTEZGQlFWRXNRMEZCUXl4SlFVRkpMRVZCUVVVc1VVRkJVU3hEUVVGRExFVkJRVVVzUlVGQlJTeFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1FVRkRla29zWjBKQlFVMHNVVUZCVVN4SFFVRkhMRlZCT1VKM1FpeEpRVUZKTEVWQk9FSjJRaXhWUVRsQ2VrSXNiMEpCUVc5Q0xFVkJPRUl3UWl4UlFVRlJMRU5CUVVNc1QwRkJUeXhIUVVGSExGRkJRVkVzUlVGQlJTeFBRVUZQTEVOQlFVTXNTMEZCU3l4RlFVRkZMRTlCUVU4c1EwRkJReXhSUVVGUkxFTkJRVU1zUlVGQlJTeFBRVUZQTEVOQlFVTXNTVUZCU1N4RlFVRkZMRTlCUVU4c1EwRkJReXhGUVVGRkxFVkJRVVVzVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPenRCUVVWc1NpeG5Ra0ZCU1N4RFFVRkRMRTlCUVU4c1MwRkJTeXhCUVVGRExITkNRVUZ6UWl4SlFVRkpMRkZCUVZFc1IwRkJSeXhUUVVGVExFbEJRVTBzUTBGQlF5eHpRa0ZCYzBJc1NVRkJTU3hSUVVGUkxFZEJRVWNzVTBGQlV5eERRVUZETEVGQlFVTXNSVUZCUlR0QlFVTnlTQ3d3UWtGQlZTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zVVVGQlVTeEZRVUZGTEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRkRPVU1zZFVKQlFVOHNSMEZCUnl4SlFVRkpMRU5CUVVNN1lVRkRiRUk3TzBGQlJVUXNaMEpCUVVrc1QwRkJUeXhMUVVGTExFRkJRVU1zYzBKQlFYTkNMRWxCUVVrc1VVRkJVU3hIUVVGSExGRkJRVkVzUTBGQlF5eFBRVUZQTEVsQlFVMHNRMEZCUXl4elFrRkJjMElzU1VGQlNTeFJRVUZSTEVkQlFVY3NVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhCUVVGRExFVkJRVVU3UVVGRGJFa3NNRUpCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEZGQlFWRXNSVUZCUlN4UlFVRlJMRU5CUVVNc1EwRkJRenRCUVVOeVF5eDFRa0ZCVHl4SFFVRkhMRWxCUVVrc1EwRkJRenRoUVVOc1FqczdRVUZGUkN4blFrRkJTU3hQUVVGUExFVkJRVVU3UVVGRFZDeHpRa0ZCVFR0aFFVTlVPMU5CUTBvN1MwRkRTanM3UVVGRlJDeFJRVUZKTEZWQlFWVXNRMEZCUXl4TlFVRk5MRXRCUVVzc1EwRkJReXhGUVVGRk96dEJRVVY2UWl4bFFVRlBMRmxCUVUwN1FVRkRWQ3huUWtGQlRTeGhRVUZoTEVkQlFVY3NWVUZ1UkhsQ0xGRkJRVkVzUlVGdFJIaENMRlZCYmtSc1F5eHZRa0ZCYjBJc1JVRnRSRzFETEZGQlFWRXNRMEZCUXl4UFFVRlBMRVZCUVVVc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6czdRVUZGYWtnc1owSkJRVWtzWVVGQllTeExRVUZMTEVOQlFVTXNSVUZCUlR0QlFVTnlRaXgzUWtGQlVTeERRVUZETEZWQlFWVXNSMEZCUnl4VFFVRlRMRU5CUVVNN1lVRkRia003TzBGQlJVUXNiVUpCUVU4c1ZVRjZSR3RETEVsQlFVa3NSVUY1UkdwRExHRkJRV0VzUlVGQlJTeFJRVUZSTEVOQlFVTXNUMEZCVHl4RlFVRkZMRTlCUVU4c1EwRkJReXhQUVVGUExFVkJRVVVzVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMU5CUXk5RkxFTkJRVU03UzBGRFRDeE5RVUZOT3p0QlFVVklMR1ZCUVU4c1dVRkJUVHRCUVVOVUxHZENRVUZOTEdGQlFXRXNSMEZCUnl4VlFUbEVlVUlzVVVGQlVTeEZRVGhFZUVJc1ZVRTVSR3hETEc5Q1FVRnZRaXhGUVRoRWJVTXNVVUZCVVN4RFFVRkRMRTlCUVU4c1JVRkJSU3hWUVVGVkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzBGQlEycElMR2RDUVVGTkxFVkJRVVVzUjBGQlJ5eFZRUzlFVVN4dlFrRkJiMElzUlVFclJGQXNZVUZCWVN4RlFVRkZMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4VlFVRlZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0QlFVTnVSaXhuUWtGQlRTeEZRVUZGTEVkQlFVY3NWVUZvUlZFc2IwSkJRVzlDTEVWQlowVlFMR0ZCUVdFc1JVRkJSU3hWUVVGVkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN08wRkJSVzVHTEdkQ1FVRkpMR0ZCUVdFc1MwRkJTeXhEUVVGRExFVkJRVVU3UVVGRGNrSXNkMEpCUVZFc1EwRkJReXhWUVVGVkxFZEJRVWNzVTBGQlV5eERRVUZETzBGQlEyaERMSFZDUVVGUExFOUJRVThzUTBGQlF5eFBRVUZQTEVOQlFVTTdZVUZETVVJN08wRkJSVVFzYlVKQlFVOHNWVUYyUlZrc2IwSkJRVzlDTEVWQmRVVllMR0ZCUVdFc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTTdVMEZEZEVRc1EwRkJRenRMUVVOTU8wTkJRMG9pTENKbWFXeGxJam9pWjJWdVpYSmhkR1V0WW14bGJtUXRZM1Z5ZG1VdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUlFaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZXlCblpYUlFjbTluY21WemMwWnliMjFXWVd4MVpTd2daMlYwVm1Gc2RXVkdjbTl0VUhKdlozSmxjM01zSUdWaGMyVXNJSEpsYzNSeWFXTjBJSDBnWm5KdmJTQW5MaTR2TGk0dmFXNWpMMk5oYkdNbk8xeHVYRzVqYjI1emRDQkNURVZPUkY5QlEwTlZVa0ZEV1NBOUlERXdPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0FvYjNWMFFXTjBhVzl1TENCcGJrRmpkR2x2Yml3Z2EyVjVLU0E5UGlCN1hHNGdJQ0FnWTI5dWMzUWdiM1YwVm1Gc2RXVWdQU0J2ZFhSQlkzUnBiMjR1ZG1Gc2RXVnpXMnRsZVYwN1hHNWNiaUFnSUNCcFppQW9iM1YwUVdOMGFXOXVMbVZzWVhCelpXUWdQVDA5SUhWdVpHVm1hVzVsWkNCOGZDQWhiM1YwVm1Gc2RXVXBJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHTnZibk4wSUdsdVZtRnNkV1VnUFNCcGJrRmpkR2x2Ymk1MllXeDFaWE5iYTJWNVhUdGNiaUFnSUNCamIyNXpkQ0J2ZFhSVWIzUmhiRVIxY21GMGFXOXVJRDBnYjNWMFZtRnNkV1V1WkdWc1lYa2dLeUJ2ZFhSV1lXeDFaUzVrZFhKaGRHbHZianRjYmlBZ0lDQmpiMjV6ZENCMGFXMWxWVzUwYVd4UGRYUkZibVFnUFNCdmRYUlViM1JoYkVSMWNtRjBhVzl1SUMwZ2IzVjBRV04wYVc5dUxtVnNZWEJ6WldRN1hHNGdJQ0FnWTI5dWMzUWdhVzVRYjNOcGRHbHZia0YwVDNWMFJXNWtJRDBnWldGelpTaHlaWE4wY21samRDaG5aWFJRY205bmNtVnpjMFp5YjIxV1lXeDFaU2gwYVcxbFZXNTBhV3hQZFhSRmJtUXNJREFzSUdsdVZtRnNkV1V1WkdWc1lYa2dLeUJwYmxaaGJIVmxMbVIxY21GMGFXOXVLU3dnTUN3Z01Ta3NJR2x1Vm1Gc2RXVXVabkp2YlN3Z2FXNVdZV3gxWlM1MGJ5d2dhVzVXWVd4MVpTNWxZWE5sS1R0Y2JpQWdJQ0JqYjI1emRDQnBia0pwWjJkbGNsUm9ZVzVQZFhSQmRGTjBZWEowSUQwZ2FXNVdZV3gxWlM1bWNtOXRJRDRnYjNWMFZtRnNkV1V1WTNWeWNtVnVkRHRjYmlBZ0lDQmpiMjV6ZENCcGJrSnBaMmRsY2xSb1lXNVBkWFJCZEVWdVpDQTlJR2x1VUc5emFYUnBiMjVCZEU5MWRFVnVaQ0ErSUc5MWRGWmhiSFZsTG5Sdk8xeHVJQ0FnSUdOdmJuTjBJSFIzWldWdWMwbHVkR1Z5YzJWamRDQTlJR2x1UW1sbloyVnlWR2hoYms5MWRFRjBVM1JoY25RZ0lUMDlJR2x1UW1sbloyVnlWR2hoYms5MWRFRjBSVzVrTzF4dVhHNGdJQ0FnWTI5dWMzUWdZbXhsYm1SRGRYSjJaU0E5SUZ0Yk1Dd2diM1YwVm1Gc2RXVXVZM1Z5Y21WdWRGMHNJRnQwYVcxbFZXNTBhV3hQZFhSRmJtUXNJR2x1VUc5emFYUnBiMjVCZEU5MWRFVnVaRjFkTzF4dVhHNGdJQ0FnTHk4Z1NXWWdkSGRsWlc1eklHbHVkR1Z5YzJWamRDd2djbVZ6YjJ4MlpTQjBkMlZsYm5NZ1lYUWdZU0J5WlhOdmJIVjBhVzl1SUhSdklHWnBibVFnWlhoaFkzUnNlU0IzYUdWeVpWeHVJQ0FnSUdsbUlDaDBkMlZsYm5OSmJuUmxjbk5sWTNRcElIdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2RHbHRaVk4wWlhCVWIxUmxjM1FnUFNCMGFXMWxWVzUwYVd4UGRYUkZibVFnTHlCQ1RFVk9SRjlCUTBOVlVrRkRXVHRjYmlBZ0lDQWdJQ0FnYkdWMElHWnZkVzVrVURFZ1BTQm1ZV3h6WlR0Y2JpQWdJQ0FnSUNBZ2JHVjBJR1p2ZFc1a1VESWdQU0JtWVd4elpUdGNibHh1SUNBZ0lDQWdJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4UFNCQ1RFVk9SRjlCUTBOVlVrRkRXVHNnYVNzcktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0IwYVcxbFUzUmxjQ0E5SUdrZ0tpQjBhVzFsVTNSbGNGUnZWR1Z6ZER0Y2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElHOTFkRUYwVkdsdFpTQTlJR1ZoYzJVb1oyVjBVSEp2WjNKbGMzTkdjbTl0Vm1Gc2RXVW9iM1YwUVdOMGFXOXVMbVZzWVhCelpXUWdLeUIwYVcxbFUzUmxjQ3dnYjNWMFZtRnNkV1V1WkdWc1lYa3NJRzkxZEZaaGJIVmxMbVIxY21GMGFXOXVLU3dnYjNWMFZtRnNkV1V1Wm5KdmJTd2diM1YwVm1Gc2RXVXVkRzhzSUc5MWRGWmhiSFZsTG1WaGMyVXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnYVc1QmRGUnBiV1VnUFNCbFlYTmxLR2RsZEZCeWIyZHlaWE56Um5KdmJWWmhiSFZsS0dsdVFXTjBhVzl1TG1Wc1lYQnpaV1FnS3lCMGFXMWxVM1JsY0N3Z2FXNVdZV3gxWlM1a1pXeGhlU3dnYVc1V1lXeDFaUzVrZFhKaGRHbHZiaWtzSUdsdVZtRnNkV1V1Wm5KdmJTd2dhVzVXWVd4MVpTNTBieXdnYVc1V1lXeDFaUzVsWVhObEtUdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLQ0ZtYjNWdVpGQXhJQ1ltSUNnb2FXNUNhV2RuWlhKVWFHRnVUM1YwUVhSVGRHRnlkQ0FtSmlCcGJrRjBWR2x0WlNBOElHOTFkRUYwVkdsdFpTa2dmSHdnS0NGcGJrSnBaMmRsY2xSb1lXNVBkWFJCZEZOMFlYSjBJQ1ltSUdsdVFYUlVhVzFsSUQ0Z2IzVjBRWFJVYVcxbEtTa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JpYkdWdVpFTjFjblpsTG5Od2JHbGpaU2d4TENBd0xDQmJkR2x0WlZOMFpYQXNJR2x1UVhSVWFXMWxYU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWm05MWJtUlFNU0E5SUhSeWRXVTdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaG1iM1Z1WkZBeElDWW1JQ2dvYVc1Q2FXZG5aWEpVYUdGdVQzVjBRWFJUZEdGeWRDQW1KaUJwYmtGMFZHbHRaU0E4SUc5MWRGWmhiSFZsTG1OMWNuSmxiblFwSUh4OElDZ2hhVzVDYVdkblpYSlVhR0Z1VDNWMFFYUlRkR0Z5ZENBbUppQnBia0YwVkdsdFpTQStJRzkxZEZaaGJIVmxMbU4xY25KbGJuUXBLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdKc1pXNWtRM1Z5ZG1WYk1sMGdQU0JiZEdsdFpWTjBaWEFzSUdsdVFYUlVhVzFsWFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCbWIzVnVaRkF5SUQwZ2RISjFaVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLR1p2ZFc1a1VESXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JpY21WaGF6dGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JseHVJQ0FnSUdsbUlDaGliR1Z1WkVOMWNuWmxMbXhsYm1kMGFDQTlQVDBnTWlrZ2UxeHVJQ0FnSUNBZ0lDQXZMeUJRWVhOeklHSmxkSGRsWlc0Z2RIZGxaVzV6SUhWemFXNW5JR2x1WTI5dGFXNW5JR1ZoYzJsdVp5QnBaaUJxZFhOMElIUjNieUJ3YjJsdWRITmNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlDZ3BJRDArSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElHSnNaVzVrVUhKdlozSmxjM01nUFNCeVpYTjBjbWxqZENoblpYUlFjbTluY21WemMwWnliMjFXWVd4MVpTaHBia0ZqZEdsdmJpNWxiR0Z3YzJWa0xDQmliR1Z1WkVOMWNuWmxXekJkV3pCZExDQmliR1Z1WkVOMWNuWmxXekZkV3pCZEtTd2dNQ3dnTVNrN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaGliR1Z1WkZCeWIyZHlaWE56SUQwOVBTQXhLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVc1QlkzUnBiMjR1WW14bGJtUkRkWEoyWlNBOUlIVnVaR1ZtYVc1bFpEdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJR1ZoYzJVb1lteGxibVJRY205bmNtVnpjeXdnYjNWMFZtRnNkV1V1WTNWeWNtVnVkQ3dnYVc1V1lXeDFaUzVqZFhKeVpXNTBMQ0JwYmxaaGJIVmxMbVZoYzJVcE8xeHVJQ0FnSUNBZ0lDQjlPMXh1SUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDOHZJRkJoYzNNZ1ltVjBkMlZsYmlCMGQyVmxibk1nZFhOcGJtY2dZbVY2YVdWeUlHbHVkR1Z5Y0c5c1lYUnBiMjVjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJQ2dwSUQwK0lIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJR0pzWlc1a1VISnZaM0psYzNNZ1BTQnlaWE4wY21samRDaG5aWFJRY205bmNtVnpjMFp5YjIxV1lXeDFaU2hwYmtGamRHbHZiaTVsYkdGd2MyVmtMQ0JpYkdWdVpFTjFjblpsV3pCZFd6QmRMQ0JpYkdWdVpFTjFjblpsV3pKZFd6QmRLU3dnTUN3Z01TazdYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0JoVUNBOUlHZGxkRlpoYkhWbFJuSnZiVkJ5YjJkeVpYTnpLR0pzWlc1a1VISnZaM0psYzNNc0lHSnNaVzVrUTNWeWRtVmJNRjFiTVYwc0lHSnNaVzVrUTNWeWRtVmJNVjFiTVYwcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdZbEFnUFNCblpYUldZV3gxWlVaeWIyMVFjbTluY21WemN5aGliR1Z1WkZCeWIyZHlaWE56TENCaWJHVnVaRU4xY25abFd6RmRXekZkTENCaWJHVnVaRU4xY25abFd6SmRXekZkS1R0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHSnNaVzVrVUhKdlozSmxjM01nUFQwOUlERXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwYmtGamRHbHZiaTVpYkdWdVpFTjFjblpsSUQwZ2RXNWtaV1pwYm1Wa08xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCcGJsWmhiSFZsTG1OMWNuSmxiblE3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCblpYUldZV3gxWlVaeWIyMVFjbTluY21WemN5aGliR1Z1WkZCeWIyZHlaWE56TENCaFVDd2dZbEFwTzF4dUlDQWdJQ0FnSUNCOU8xeHVJQ0FnSUgxY2JuMDdYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0b3IvaW5jL2dlbmVyYXRlLWJsZW5kLWN1cnZlLmpzXG4gKiogbW9kdWxlIGlkID0gMzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9JbnB1dDIgPSByZXF1aXJlKCcuL0lucHV0Jyk7XG5cbnZhciBfSW5wdXQzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfSW5wdXQyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgUG9pbnRlciA9IChmdW5jdGlvbiAoX0lucHV0KSB7XG4gICAgX2luaGVyaXRzKFBvaW50ZXIsIF9JbnB1dCk7XG5cbiAgICBmdW5jdGlvbiBQb2ludGVyKGluaXRpYWxTdGF0ZSwgbW92ZUV2ZW50LCBldmVudFRvUG9pbnQpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBvaW50ZXIpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9JbnB1dC5jYWxsKHRoaXMsIGluaXRpYWxTdGF0ZSkpO1xuXG4gICAgICAgIF90aGlzLmV2ZW50VG9Qb2ludCA9IGV2ZW50VG9Qb2ludDtcbiAgICAgICAgX3RoaXMubW92ZUV2ZW50ID0gbW92ZUV2ZW50O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgUG9pbnRlci5wcm90b3R5cGUubGF0ZXN0ID0gZnVuY3Rpb24gbGF0ZXN0KGUpIHtcbiAgICAgICAgX0lucHV0LnByb3RvdHlwZS5sYXRlc3QuY2FsbCh0aGlzLCB0aGlzLmV2ZW50VG9Qb2ludChlKSk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9O1xuXG4gICAgUG9pbnRlci5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgX0lucHV0LnByb3RvdHlwZS5zdGFydC5jYWxsKHRoaXMpO1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLm1vdmVFdmVudCwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczIubGF0ZXN0KGUpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgUG9pbnRlci5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgIF9JbnB1dC5wcm90b3R5cGUuc3RvcC5jYWxsKHRoaXMpO1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLm1vdmVFdmVudCwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczMubGF0ZXN0KGUpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFBvaW50ZXI7XG59KShfSW5wdXQzLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBQb2ludGVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm5CMWRDOVFiMmx1ZEdWeUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN096czdPenM3T3pzN1NVRkZjVUlzVDBGQlR6dGpRVUZRTEU5QlFVODdPMEZCUTNoQ0xHRkJSR2xDTEU5QlFVOHNRMEZEV2l4WlFVRlpMRVZCUVVVc1UwRkJVeXhGUVVGRkxGbEJRVmtzUlVGQlJUczRRa0ZFYkVNc1QwRkJUenM3Y1VSQlJYQkNMR3RDUVVGTkxGbEJRVmtzUTBGQlF6czdRVUZEYmtJc1kwRkJTeXhaUVVGWkxFZEJRVWNzV1VGQldTeERRVUZETzBGQlEycERMR05CUVVzc1UwRkJVeXhIUVVGSExGTkJRVk1zUTBGQlF6czdTMEZET1VJN08wRkJUR2RDTEZkQlFVOHNWMEZQZUVJc1RVRkJUU3h0UWtGQlF5eERRVUZETEVWQlFVVTdRVUZEVGl4NVFrRkJUU3hOUVVGTkxFdEJRVUVzVDBGQlF5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRGJrTXNVMEZCUXl4RFFVRkRMR05CUVdNc1JVRkJSU3hEUVVGRE8wdEJRM1JDT3p0QlFWWm5RaXhYUVVGUExGZEJXWGhDTEV0QlFVc3NiMEpCUVVjN096dEJRVU5LTEhsQ1FVRk5MRXRCUVVzc1MwRkJRU3hOUVVGRkxFTkJRVU03UVVGRFpDeG5Ra0ZCVVN4RFFVRkRMR1ZCUVdVc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhGUVVGRkxGVkJRVU1zUTBGQlF6dHRRa0ZCU3l4UFFVRkxMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU03VTBGQlFTeERRVUZETEVOQlFVTTdTMEZEY0VZN08wRkJabWRDTEZkQlFVOHNWMEZwUW5oQ0xFbEJRVWtzYlVKQlFVYzdPenRCUVVOSUxIbENRVUZOTEVsQlFVa3NTMEZCUVN4TlFVRkZMRU5CUVVNN1FVRkRZaXhuUWtGQlVTeERRVUZETEdWQlFXVXNRMEZCUXl4dFFrRkJiVUlzUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZMRlZCUVVNc1EwRkJRenR0UWtGQlN5eFBRVUZMTEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNN1UwRkJRU3hEUVVGRExFTkJRVU03UzBGRGRrWTdPMWRCY0VKblFpeFBRVUZQT3pzN2EwSkJRVkFzVDBGQlR5SXNJbVpwYkdVaU9pSlFiMmx1ZEdWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBVR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUVsdWNIVjBJR1p5YjIwZ0p5NHZTVzV3ZFhRbk8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQmpiR0Z6Y3lCUWIybHVkR1Z5SUdWNGRHVnVaSE1nU1c1d2RYUWdlMXh1SUNBZ0lHTnZibk4wY25WamRHOXlLR2x1YVhScFlXeFRkR0YwWlN3Z2JXOTJaVVYyWlc1MExDQmxkbVZ1ZEZSdlVHOXBiblFwSUh0Y2JpQWdJQ0FnSUNBZ2MzVndaWElvYVc1cGRHbGhiRk4wWVhSbEtUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1bGRtVnVkRlJ2VUc5cGJuUWdQU0JsZG1WdWRGUnZVRzlwYm5RN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Ylc5MlpVVjJaVzUwSUQwZ2JXOTJaVVYyWlc1ME8xeHVJQ0FnSUgxY2JseHVJQ0FnSUd4aGRHVnpkQ2hsS1NCN1hHNGdJQ0FnSUNBZ0lITjFjR1Z5TG14aGRHVnpkQ2gwYUdsekxtVjJaVzUwVkc5UWIybHVkQ2hsS1NrN1hHNGdJQ0FnSUNBZ0lHVXVjSEpsZG1WdWRFUmxabUYxYkhRb0tUdGNiaUFnSUNCOVhHNWNiaUFnSUNCemRHRnlkQ2dwSUh0Y2JpQWdJQ0FnSUNBZ2MzVndaWEl1YzNSaGNuUW9LVHRjYmlBZ0lDQWdJQ0FnWkc5amRXMWxiblF1Wkc5amRXMWxiblJGYkdWdFpXNTBMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9kR2hwY3k1dGIzWmxSWFpsYm5Rc0lDaGxLU0E5UGlCMGFHbHpMbXhoZEdWemRDaGxLU2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjM1J2Y0NncElIdGNiaUFnSUNBZ0lDQWdjM1Z3WlhJdWMzUnZjQ2dwTzF4dUlDQWdJQ0FnSUNCa2IyTjFiV1Z1ZEM1a2IyTjFiV1Z1ZEVWc1pXMWxiblF1Y21WdGIzWmxSWFpsYm5STWFYTjBaVzVsY2loMGFHbHpMbTF2ZG1WRmRtVnVkQ3dnS0dVcElEMCtJSFJvYVhNdWJHRjBaWE4wS0dVcEtUdGNiaUFnSUNCOVhHNTlYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5wdXQvUG9pbnRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDM2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlYWN0aXZhdGUgPSBleHBvcnRzLmdldFByb2Nlc3NJZCA9IHVuZGVmaW5lZDtcbmV4cG9ydHMuYWN0aXZhdGUgPSBhY3RpdmF0ZTtcblxudmFyIF90aW1lciA9IHJlcXVpcmUoJy4vdGltZXInKTtcblxudmFyIF90aW1lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90aW1lcik7XG5cbnZhciBfdGljayA9IHJlcXVpcmUoJy4vdGljaycpO1xuXG52YXIgX3RpY2syID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdGljayk7XG5cbnZhciBfbWFuYWdlciA9IHJlcXVpcmUoJy4vbWFuYWdlcicpO1xuXG52YXIgX21hbmFnZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWFuYWdlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBwcm9jZXNzU3RlcE9yZGVyID0gW3sgbmFtZTogJ29uRnJhbWVTdGFydCcgfSwgeyBuYW1lOiAnb25VcGRhdGUnIH0sIHsgbmFtZTogJ3dpbGxSZW5kZXInLCBkZWNpZGVSZW5kZXI6IHRydWUgfSwgeyBuYW1lOiAnb25QcmVSZW5kZXInLCBpc1JlbmRlcjogdHJ1ZSB9LCB7IG5hbWU6ICdvblJlbmRlcicsIGlzUmVuZGVyOiB0cnVlIH0sIHsgbmFtZTogJ29uUG9zdFJlbmRlcicsIGlzUmVuZGVyOiB0cnVlIH0sIHsgbmFtZTogJ29uRnJhbWVFbmQnIH0sIHsgbmFtZTogJ29uQ2xlYW51cCcgfV07IC8qXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29yZSByZW5kZXIgbG9vcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU29tZSBkZWNpY2lzb25zIGhlcmUgaGF2ZSBiZWVuIHRha2VuIGluIHRoZSBuYW1lIG9mIHBlcmZvcm1hbmNlLiBBbGwgaGFpbCBwZXJmb3JtYW5jZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoSXQgdHVybnMgb3V0IG1pY3Jvb3B0aW1pc2F0aW9ucyBkbyBtYXR0ZXIgd2hlbiB5b3UgaGF2ZSAxNm1zKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cblxudmFyIG51bVByb2Nlc3NTdGVwcyA9IHByb2Nlc3NTdGVwT3JkZXIubGVuZ3RoO1xuXG4vLyBbYm9vbGVhbl06IElzIGxvb3AgcnVubmluZz9cbnZhciBpc1J1bm5pbmcgPSBmYWxzZTtcblxuLypcbiAgICBbdGltZXN0YW1wXTogRnJhbWUgdGltZXN0YW1wXG4gICAgW2ludF06IFRpbWUgc2luY2UgbGFzdCBmcmFtZVxuKi9cbmZ1bmN0aW9uIGZpcmVBbGwoZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgIHZhciBhY3RpdmVJZHMgPSBfbWFuYWdlcjIuZGVmYXVsdC5nZXRBY3RpdmVJZHMoKTtcbiAgICB2YXIgYWN0aXZlUHJvY2Vzc0NvdW50ID0gYWN0aXZlSWRzLmxlbmd0aDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtUHJvY2Vzc1N0ZXBzOyBpKyspIHtcbiAgICAgICAgdmFyIHN0ZXAgPSBwcm9jZXNzU3RlcE9yZGVyW2ldO1xuXG4gICAgICAgIGZvciAodmFyIGkyID0gMDsgaTIgPCBhY3RpdmVQcm9jZXNzQ291bnQ7IGkyKyspIHtcbiAgICAgICAgICAgIHZhciBwcm9jZXNzID0gX21hbmFnZXIyLmRlZmF1bHQuYWN0aXZlUHJvY2Vzc2VzW2FjdGl2ZUlkc1tpMl1dO1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAvLyBDaGVjayBpZiB0aGlzIHByb2Nlc3MgaGFzIHRoaXMgc3RlcCwgb3IgaWYgaXQncyBhIHJlbmRlciBzdGVwIHRoYXQgd2UncmUgcmVuZGVyaW5nIHRoaXMgZnJhbWVcbiAgICAgICAgICAgIGlmIChwcm9jZXNzICYmIHByb2Nlc3Nbc3RlcC5uYW1lXSAmJiAoIXN0ZXAuaXNSZW5kZXIgfHwgc3RlcC5pc1JlbmRlciAmJiBwcm9jZXNzLl9yZW5kZXJUaGlzRnJhbWUgPT09IHRydWUpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcHJvY2Vzc1tzdGVwLm5hbWVdLmNhbGwocHJvY2VzcywgcHJvY2VzcywgZnJhbWVTdGFtcCwgZWxhcHNlZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIHRoaXMgaXMgYSBkZWNpZGUgcmVuZGVyIHN0ZXAgYW5kIGl0IHJldHVybnMgYGZhbHNlYCwgc2V0IHdpbGxSZW5kZXIgdG8gZmFsc2VcbiAgICAgICAgICAgIGlmIChzdGVwLmRlY2lkZVJlbmRlcikge1xuICAgICAgICAgICAgICAgIHByb2Nlc3MuX3JlbmRlclRoaXNGcmFtZSA9IHByb2Nlc3Nbc3RlcC5uYW1lXSAmJiByZXN1bHQgIT09IHRydWUgPyBmYWxzZSA6IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gX21hbmFnZXIyLmRlZmF1bHQuZ2V0Tm9uQmFja2dyb3VuZFJ1bm5pbmdDb3VudCgpO1xufVxuXG4vLyBGdW5jdGlvbiB0byBmaXJlIGV2ZXJ5IGZyYW1lXG5mdW5jdGlvbiBmcmFtZShmcmFtZVN0YW1wKSB7XG4gICAgX3RpbWVyMi5kZWZhdWx0LnVwZGF0ZShmcmFtZVN0YW1wKTtcbiAgICBpc1J1bm5pbmcgPSBmaXJlQWxsKGZyYW1lU3RhbXAsIF90aW1lcjIuZGVmYXVsdC5nZXRFbGFwc2VkKCkpO1xuXG4gICAgaWYgKGlzUnVubmluZykge1xuICAgICAgICAoMCwgX3RpY2syLmRlZmF1bHQpKGZyYW1lKTtcbiAgICB9XG59XG5cbi8vIFN0YXJ0IGxvb3BcbmZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgIGlmICghaXNSdW5uaW5nKSB7XG4gICAgICAgIF90aW1lcjIuZGVmYXVsdC5zdGFydCgpO1xuICAgICAgICBpc1J1bm5pbmcgPSB0cnVlO1xuICAgICAgICAoMCwgX3RpY2syLmRlZmF1bHQpKGZyYW1lKTtcbiAgICB9XG59XG5cbi8vIEV4cG9ydHNcbnZhciBnZXRQcm9jZXNzSWQgPSBleHBvcnRzLmdldFByb2Nlc3NJZCA9IF9tYW5hZ2VyMi5kZWZhdWx0LmdldFByb2Nlc3NJZDtcblxuLypcbiAgICBbaW50XTogUHJvY2VzcyBJRCB0byBhY3RpdmF0ZVxuICAgIFtQcm9jZXNzXTogUHJvY2VzcyB0byBhY3RpdmF0ZVxuKi9cbmZ1bmN0aW9uIGFjdGl2YXRlKGlkLCBwcm9jZXNzKSB7XG4gICAgX21hbmFnZXIyLmRlZmF1bHQuYWN0aXZhdGUoaWQsIHByb2Nlc3MpO1xuXG4gICAgaWYgKCFpc1J1bm5pbmcpIHtcbiAgICAgICAgc3RhcnQoKTtcbiAgICB9XG59XG5cbi8qXG4gICAgW2ludF06IFByb2Nlc3MgSUQgdG8gZGVhY3RpdmF0ZVxuKi9cbnZhciBkZWFjdGl2YXRlID0gZXhwb3J0cy5kZWFjdGl2YXRlID0gX21hbmFnZXIyLmRlZmF1bHQuZGVhY3RpdmF0ZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5d2NtOWpaWE56TDJ4dmIzQXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0UlFXbEdaMElzVVVGQlVTeEhRVUZTTEZGQlFWRTdPenM3T3pzN096czdPenM3T3pzN1FVRjJSWGhDTEVsQlFVMHNaMEpCUVdkQ0xFZEJRVWNzUTBGRGNrSXNSVUZCUlN4SlFVRkpMRVZCUVVVc1kwRkJZeXhGUVVGRkxFVkJRM2hDTEVWQlFVVXNTVUZCU1N4RlFVRkZMRlZCUVZVc1JVRkJSU3hGUVVOd1FpeEZRVUZGTEVsQlFVa3NSVUZCUlN4WlFVRlpMRVZCUVVVc1dVRkJXU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEZRVU14UXl4RlFVRkZMRWxCUVVrc1JVRkJSU3hoUVVGaExFVkJRVVVzVVVGQlVTeEZRVUZGTEVsQlFVa3NSVUZCUlN4RlFVTjJReXhGUVVGRkxFbEJRVWtzUlVGQlJTeFZRVUZWTEVWQlFVVXNVVUZCVVN4RlFVRkZMRWxCUVVrc1JVRkJSU3hGUVVOd1F5eEZRVUZGTEVsQlFVa3NSVUZCUlN4alFVRmpMRVZCUVVVc1VVRkJVU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEZRVU40UXl4RlFVRkZMRWxCUVVrc1JVRkJSU3haUVVGWkxFVkJRVVVzUlVGRGRFSXNSVUZCUlN4SlFVRkpMRVZCUVVVc1YwRkJWeXhGUVVGRkxFTkJRM2hDT3pzN096czdRVUZCUXp0QlFVTkdMRWxCUVUwc1pVRkJaU3hIUVVGSExHZENRVUZuUWl4RFFVRkRMRTFCUVUwN096dEJRVUZETEVGQlIyaEVMRWxCUVVrc1UwRkJVeXhIUVVGSExFdEJRVXM3T3pzN096dEJRVUZETEVGQlRYUkNMRk5CUVZNc1QwRkJUeXhEUVVGRExGVkJRVlVzUlVGQlJTeFBRVUZQTEVWQlFVVTdRVUZEYkVNc1VVRkJUU3hUUVVGVExFZEJRVWNzYTBKQlFWRXNXVUZCV1N4RlFVRkZMRU5CUVVNN1FVRkRla01zVVVGQlRTeHJRa0ZCYTBJc1IwRkJSeXhUUVVGVExFTkJRVU1zVFVGQlRTeERRVUZET3p0QlFVVTFReXhUUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1pVRkJaU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzBGQlEzUkRMRmxCUVUwc1NVRkJTU3hIUVVGSExHZENRVUZuUWl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE96dEJRVVZxUXl4aFFVRkxMRWxCUVVrc1JVRkJSU3hIUVVGSExFTkJRVU1zUlVGQlJTeEZRVUZGTEVkQlFVY3NhMEpCUVd0Q0xFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVTdRVUZETlVNc1owSkJRVTBzVDBGQlR5eEhRVUZITEd0Q1FVRlJMR1ZCUVdVc1EwRkJReXhUUVVGVExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0QlFVTjJSQ3huUWtGQlNTeE5RVUZOTEVkQlFVY3NTMEZCU3pzN08wRkJRVU1zUVVGSGJrSXNaMEpCUVVrc1QwRkJUeXhKUVVGSkxFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeEpRVUZMTEVsQlFVa3NRMEZCUXl4UlFVRlJMRWxCUVVrc1QwRkJUeXhEUVVGRExHZENRVUZuUWl4TFFVRkxMRWxCUVVrc1EwRkJReXhCUVVGRExFVkJRVVU3UVVGRE0wY3NjMEpCUVUwc1IwRkJSeXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFVkJRVVVzVDBGQlR5eEZRVUZGTEZWQlFWVXNSVUZCUlN4UFFVRlBMRU5CUVVNc1EwRkJRenRoUVVNelJUczdPMEZCUVVFc1FVRkhSQ3huUWtGQlNTeEpRVUZKTEVOQlFVTXNXVUZCV1N4RlFVRkZPMEZCUTI1Q0xIVkNRVUZQTEVOQlFVTXNaMEpCUVdkQ0xFZEJRVWNzUVVGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFMUJRVTBzUzBGQlN5eEpRVUZKTEVkQlFVa3NTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJRenRoUVVOeVJqdFRRVU5LTzB0QlEwbzdPMEZCUlVRc1YwRkJUeXhyUWtGQlVTdzBRa0ZCTkVJc1JVRkJSU3hEUVVGRE8wTkJRMnBFT3pzN1FVRkJRU3hCUVVkRUxGTkJRVk1zUzBGQlN5eERRVUZETEZWQlFWVXNSVUZCUlR0QlFVTjJRaXh2UWtGQlRTeE5RVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNN1FVRkRla0lzWVVGQlV5eEhRVUZITEU5QlFVOHNRMEZCUXl4VlFVRlZMRVZCUVVVc1owSkJRVTBzVlVGQlZTeEZRVUZGTEVOQlFVTXNRMEZCUXpzN1FVRkZjRVFzVVVGQlNTeFRRVUZUTEVWQlFVVTdRVUZEV0N3MFFrRkJTeXhMUVVGTExFTkJRVU1zUTBGQlF6dExRVU5tTzBOQlEwbzdPenRCUVVGQkxFRkJSMFFzVTBGQlV5eExRVUZMTEVkQlFVYzdRVUZEWWl4UlFVRkpMRU5CUVVNc1UwRkJVeXhGUVVGRk8wRkJRMW9zZDBKQlFVMHNTMEZCU3l4RlFVRkZMRU5CUVVNN1FVRkRaQ3hwUWtGQlV5eEhRVUZITEVsQlFVa3NRMEZCUXp0QlFVTnFRaXcwUWtGQlN5eExRVUZMTEVOQlFVTXNRMEZCUXp0TFFVTm1PME5CUTBvN096dEJRVUZCTEVGQlIwMHNTVUZCVFN4WlFVRlpMRmRCUVZvc1dVRkJXU3hIUVVGSExHdENRVUZSTEZsQlFWazdPenM3T3p0QlFVRkRMRUZCVFRGRExGTkJRVk1zVVVGQlVTeERRVUZETEVWQlFVVXNSVUZCUlN4UFFVRlBMRVZCUVVVN1FVRkRiRU1zYzBKQlFWRXNVVUZCVVN4RFFVRkRMRVZCUVVVc1JVRkJSU3hQUVVGUExFTkJRVU1zUTBGQlF6czdRVUZGT1VJc1VVRkJTU3hEUVVGRExGTkJRVk1zUlVGQlJUdEJRVU5hTEdGQlFVc3NSVUZCUlN4RFFVRkRPMHRCUTFnN1EwRkRTanM3T3pzN1FVRkJRU3hCUVV0TkxFbEJRVTBzVlVGQlZTeFhRVUZXTEZWQlFWVXNSMEZCUnl4clFrRkJVU3hWUVVGVkxFTkJRVU1pTENKbWFXeGxJam9pYkc5dmNDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkRkJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpOHFYRzRnSUNBZ1EyOXlaU0J5Wlc1a1pYSWdiRzl2Y0Z4dVhHNGdJQ0FnVTI5dFpTQmtaV05wWTJsemIyNXpJR2hsY21VZ2FHRjJaU0JpWldWdUlIUmhhMlZ1SUdsdUlIUm9aU0J1WVcxbElHOW1JSEJsY21admNtMWhibU5sTGlCQmJHd2dhR0ZwYkNCd1pYSm1iM0p0WVc1alpTNWNiaUFnSUNBb1NYUWdkSFZ5Ym5NZ2IzVjBJRzFwWTNKdmIzQjBhVzFwYzJGMGFXOXVjeUJrYnlCdFlYUjBaWElnZDJobGJpQjViM1VnYUdGMlpTQXhObTF6S1Z4dUtpOWNibWx0Y0c5eWRDQjBhVzFsY2lCbWNtOXRJQ2N1TDNScGJXVnlKenRjYm1sdGNHOXlkQ0IwYVdOcklHWnliMjBnSnk0dmRHbGpheWM3WEc1cGJYQnZjblFnYldGdVlXZGxjaUJtY205dElDY3VMMjFoYm1GblpYSW5PMXh1WEc1amIyNXpkQ0J3Y205alpYTnpVM1JsY0U5eVpHVnlJRDBnVzF4dUlDQWdJSHNnYm1GdFpUb2dKMjl1Um5KaGJXVlRkR0Z5ZENjZ2ZTeGNiaUFnSUNCN0lHNWhiV1U2SUNkdmJsVndaR0YwWlNjZ2ZTeGNiaUFnSUNCN0lHNWhiV1U2SUNkM2FXeHNVbVZ1WkdWeUp5d2daR1ZqYVdSbFVtVnVaR1Z5T2lCMGNuVmxJSDBzWEc0Z0lDQWdleUJ1WVcxbE9pQW5iMjVRY21WU1pXNWtaWEluTENCcGMxSmxibVJsY2pvZ2RISjFaU0I5TEZ4dUlDQWdJSHNnYm1GdFpUb2dKMjl1VW1WdVpHVnlKeXdnYVhOU1pXNWtaWEk2SUhSeWRXVWdmU3hjYmlBZ0lDQjdJRzVoYldVNklDZHZibEJ2YzNSU1pXNWtaWEluTENCcGMxSmxibVJsY2pvZ2RISjFaU0I5TEZ4dUlDQWdJSHNnYm1GdFpUb2dKMjl1Um5KaGJXVkZibVFuSUgwc1hHNGdJQ0FnZXlCdVlXMWxPaUFuYjI1RGJHVmhiblZ3SnlCOVhHNWRPMXh1WTI5dWMzUWdiblZ0VUhKdlkyVnpjMU4wWlhCeklEMGdjSEp2WTJWemMxTjBaWEJQY21SbGNpNXNaVzVuZEdnN1hHNWNiaTh2SUZ0aWIyOXNaV0Z1WFRvZ1NYTWdiRzl2Y0NCeWRXNXVhVzVuUDF4dWJHVjBJR2x6VW5WdWJtbHVaeUE5SUdaaGJITmxPMXh1WEc0dktseHVJQ0FnSUZ0MGFXMWxjM1JoYlhCZE9pQkdjbUZ0WlNCMGFXMWxjM1JoYlhCY2JpQWdJQ0JiYVc1MFhUb2dWR2x0WlNCemFXNWpaU0JzWVhOMElHWnlZVzFsWEc0cUwxeHVablZ1WTNScGIyNGdabWx5WlVGc2JDaG1jbUZ0WlZOMFlXMXdMQ0JsYkdGd2MyVmtLU0I3WEc0Z0lDQWdZMjl1YzNRZ1lXTjBhWFpsU1dSeklEMGdiV0Z1WVdkbGNpNW5aWFJCWTNScGRtVkpaSE1vS1R0Y2JpQWdJQ0JqYjI1emRDQmhZM1JwZG1WUWNtOWpaWE56UTI5MWJuUWdQU0JoWTNScGRtVkpaSE11YkdWdVozUm9PMXh1WEc0Z0lDQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0J1ZFcxUWNtOWpaWE56VTNSbGNITTdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCemRHVndJRDBnY0hKdlkyVnpjMU4wWlhCUGNtUmxjbHRwWFR0Y2JseHVJQ0FnSUNBZ0lDQm1iM0lnS0d4bGRDQnBNaUE5SURBN0lHa3lJRHdnWVdOMGFYWmxVSEp2WTJWemMwTnZkVzUwT3lCcE1pc3JLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCd2NtOWpaWE56SUQwZ2JXRnVZV2RsY2k1aFkzUnBkbVZRY205alpYTnpaWE5iWVdOMGFYWmxTV1J6VzJreVhWMDdYRzRnSUNBZ0lDQWdJQ0FnSUNCc1pYUWdjbVZ6ZFd4MElEMGdabUZzYzJVN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUM4dklFTm9aV05ySUdsbUlIUm9hWE1nY0hKdlkyVnpjeUJvWVhNZ2RHaHBjeUJ6ZEdWd0xDQnZjaUJwWmlCcGRDZHpJR0VnY21WdVpHVnlJSE4wWlhBZ2RHaGhkQ0IzWlNkeVpTQnlaVzVrWlhKcGJtY2dkR2hwY3lCbWNtRnRaVnh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSEJ5YjJObGMzTWdKaVlnY0hKdlkyVnpjMXR6ZEdWd0xtNWhiV1ZkSUNZbUlDZ2hjM1JsY0M1cGMxSmxibVJsY2lCOGZDQW9jM1JsY0M1cGMxSmxibVJsY2lBbUppQndjbTlqWlhOekxsOXlaVzVrWlhKVWFHbHpSbkpoYldVZ1BUMDlJSFJ5ZFdVcEtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsYzNWc2RDQTlJSEJ5YjJObGMzTmJjM1JsY0M1dVlXMWxYUzVqWVd4c0tIQnliMk5sYzNNc0lIQnliMk5sYzNNc0lHWnlZVzFsVTNSaGJYQXNJR1ZzWVhCelpXUXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QkpaaUIwYUdseklHbHpJR0VnWkdWamFXUmxJSEpsYm1SbGNpQnpkR1Z3SUdGdVpDQnBkQ0J5WlhSMWNtNXpJR0JtWVd4elpXQXNJSE5sZENCM2FXeHNVbVZ1WkdWeUlIUnZJR1poYkhObFhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2MzUmxjQzVrWldOcFpHVlNaVzVrWlhJcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQndjbTlqWlhOekxsOXlaVzVrWlhKVWFHbHpSbkpoYldVZ1BTQW9jSEp2WTJWemMxdHpkR1Z3TG01aGJXVmRJQ1ltSUhKbGMzVnNkQ0FoUFQwZ2RISjFaU2tnUHlCbVlXeHpaU0E2SUhSeWRXVTdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNCeVpYUjFjbTRnYldGdVlXZGxjaTVuWlhST2IyNUNZV05yWjNKdmRXNWtVblZ1Ym1sdVowTnZkVzUwS0NrN1hHNTlYRzVjYmk4dklFWjFibU4wYVc5dUlIUnZJR1pwY21VZ1pYWmxjbmtnWm5KaGJXVmNibVoxYm1OMGFXOXVJR1p5WVcxbEtHWnlZVzFsVTNSaGJYQXBJSHRjYmlBZ0lDQjBhVzFsY2k1MWNHUmhkR1VvWm5KaGJXVlRkR0Z0Y0NrN1hHNGdJQ0FnYVhOU2RXNXVhVzVuSUQwZ1ptbHlaVUZzYkNobWNtRnRaVk4wWVcxd0xDQjBhVzFsY2k1blpYUkZiR0Z3YzJWa0tDa3BPMXh1WEc0Z0lDQWdhV1lnS0dselVuVnVibWx1WnlrZ2UxeHVJQ0FnSUNBZ0lDQjBhV05yS0daeVlXMWxLVHRjYmlBZ0lDQjlYRzU5WEc1Y2JpOHZJRk4wWVhKMElHeHZiM0JjYm1aMWJtTjBhVzl1SUhOMFlYSjBLQ2tnZTF4dUlDQWdJR2xtSUNnaGFYTlNkVzV1YVc1bktTQjdYRzRnSUNBZ0lDQWdJSFJwYldWeUxuTjBZWEowS0NrN1hHNGdJQ0FnSUNBZ0lHbHpVblZ1Ym1sdVp5QTlJSFJ5ZFdVN1hHNGdJQ0FnSUNBZ0lIUnBZMnNvWm5KaGJXVXBPMXh1SUNBZ0lIMWNibjFjYmx4dUx5OGdSWGh3YjNKMGMxeHVaWGh3YjNKMElHTnZibk4wSUdkbGRGQnliMk5sYzNOSlpDQTlJRzFoYm1GblpYSXVaMlYwVUhKdlkyVnpjMGxrTzF4dVhHNHZLbHh1SUNBZ0lGdHBiblJkT2lCUWNtOWpaWE56SUVsRUlIUnZJR0ZqZEdsMllYUmxYRzRnSUNBZ1cxQnliMk5sYzNOZE9pQlFjbTlqWlhOeklIUnZJR0ZqZEdsMllYUmxYRzRxTDF4dVpYaHdiM0owSUdaMWJtTjBhVzl1SUdGamRHbDJZWFJsS0dsa0xDQndjbTlqWlhOektTQjdYRzRnSUNBZ2JXRnVZV2RsY2k1aFkzUnBkbUYwWlNocFpDd2djSEp2WTJWemN5azdYRzVjYmlBZ0lDQnBaaUFvSVdselVuVnVibWx1WnlrZ2UxeHVJQ0FnSUNBZ0lDQnpkR0Z5ZENncE8xeHVJQ0FnSUgxY2JuMWNibHh1THlwY2JpQWdJQ0JiYVc1MFhUb2dVSEp2WTJWemN5QkpSQ0IwYnlCa1pXRmpkR2wyWVhSbFhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHUmxZV04wYVhaaGRHVWdQU0J0WVc1aFoyVnlMbVJsWVdOMGFYWmhkR1U3SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcHJvY2Vzcy9sb29wLmpzXG4gKiogbW9kdWxlIGlkID0gMzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBUUkFOU0xBVEUgPSAndHJhbnNsYXRlJztcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIHg6IFRSQU5TTEFURSArICdYJyxcbiAgICB5OiBUUkFOU0xBVEUgKyAnWScsXG4gICAgejogVFJBTlNMQVRFICsgJ1onXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMMk56Y3k5emRHRjBaUzF0WVhBdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPMEZCUVVFc1NVRkJUU3hUUVVGVExFZEJRVWNzVjBGQlZ5eERRVUZET3p0clFrRkZaanRCUVVOWUxFdEJRVU1zUlVGQlJTeFRRVUZUTEVkQlFVY3NSMEZCUnp0QlFVTnNRaXhMUVVGRExFVkJRVVVzVTBGQlV5eEhRVUZITEVkQlFVYzdRVUZEYkVJc1MwRkJReXhGUVVGRkxGTkJRVk1zUjBGQlJ5eEhRVUZITzBOQlEzSkNJaXdpWm1sc1pTSTZJbk4wWVhSbExXMWhjQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEZCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbU52Ym5OMElGUlNRVTVUVEVGVVJTQTlJQ2QwY21GdWMyeGhkR1VuTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCN1hHNGdJQ0FnZURvZ1ZGSkJUbE5NUVZSRklDc2dKMWduTEZ4dUlDQWdJSGs2SUZSU1FVNVRURUZVUlNBcklDZFpKeXhjYmlBZ0lDQjZPaUJVVWtGT1UweEJWRVVnS3lBbldpZGNibjA3SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9jc3Mvc3RhdGUtbWFwLmpzXG4gKiogbW9kdWxlIGlkID0gMzhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9hbmdsZSA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL2FuZ2xlJyk7XG5cbnZhciBfYW5nbGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYW5nbGUpO1xuXG52YXIgX2FscGhhID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvYWxwaGEnKTtcblxudmFyIF9hbHBoYTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hbHBoYSk7XG5cbnZhciBfYXhlcyA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL2F4ZXMnKTtcblxudmFyIF9heGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2F4ZXMpO1xuXG52YXIgX2NvbG9yID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvY29sb3InKTtcblxudmFyIF9jb2xvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb2xvcik7XG5cbnZhciBfc2NhbGUgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9zY2FsZScpO1xuXG52YXIgX3NjYWxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NjYWxlKTtcblxudmFyIF9zaGFkb3cgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9zaGFkb3cnKTtcblxudmFyIF9zaGFkb3cyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2hhZG93KTtcblxudmFyIF9wb3NpdGlvbnMgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9wb3NpdGlvbnMnKTtcblxudmFyIF9wb3NpdGlvbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zaXRpb25zKTtcblxudmFyIF9weCA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL3B4Jyk7XG5cbnZhciBfcHgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgLy8gQ29sb3IgcHJvcHNcbiAgICBjb2xvcjogX2NvbG9yMi5kZWZhdWx0LFxuICAgIGJhY2tncm91bmRDb2xvcjogX2NvbG9yMi5kZWZhdWx0LFxuICAgIG91dGxpbmVDb2xvcjogX2NvbG9yMi5kZWZhdWx0LFxuICAgIGZpbGw6IF9jb2xvcjIuZGVmYXVsdCxcbiAgICBzdHJva2U6IF9jb2xvcjIuZGVmYXVsdCxcblxuICAgIC8vIEJvcmRlciBwcm9wc1xuICAgIGJvcmRlckNvbG9yOiBfY29sb3IyLmRlZmF1bHQsXG4gICAgYm9yZGVyVG9wQ29sb3I6IF9jb2xvcjIuZGVmYXVsdCxcbiAgICBib3JkZXJSaWdodENvbG9yOiBfY29sb3IyLmRlZmF1bHQsXG4gICAgYm9yZGVyQm90dG9tQ29sb3I6IF9jb2xvcjIuZGVmYXVsdCxcbiAgICBib3JkZXJMZWZ0Q29sb3I6IF9jb2xvcjIuZGVmYXVsdCxcbiAgICBib3JkZXJSYWRpdXM6IF9weDIuZGVmYXVsdCxcblxuICAgIC8vIFBvc2l0aW9uaW5nXG4gICAgbWFyZ2luOiBfcG9zaXRpb25zMi5kZWZhdWx0LFxuICAgIHBhZGRpbmc6IF9wb3NpdGlvbnMyLmRlZmF1bHQsXG4gICAgd2lkdGg6IF9weDIuZGVmYXVsdCxcbiAgICBoZWlnaHQ6IF9weDIuZGVmYXVsdCxcblxuICAgIC8vIEF4ZXNcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246IF9heGVzMi5kZWZhdWx0LFxuICAgIHBlcnNwZWN0aXZlT3JpZ2luOiBfYXhlczIuZGVmYXVsdCxcbiAgICB0cmFuc2Zvcm1PcmlnaW46IF9heGVzMi5kZWZhdWx0LFxuXG4gICAgLy8gU2hhZG93c1xuICAgIHRleHRTaGFkb3c6IF9zaGFkb3cyLmRlZmF1bHQsXG4gICAgYm94U2hhZG93OiBfc2hhZG93Mi5kZWZhdWx0LFxuXG4gICAgLy8gVHJhbnNmb3JtIHByb3BlcnRpZXNcbiAgICByb3RhdGU6IF9hbmdsZTIuZGVmYXVsdCxcbiAgICByb3RhdGVYOiBfYW5nbGUyLmRlZmF1bHQsXG4gICAgcm90YXRlWTogX2FuZ2xlMi5kZWZhdWx0LFxuICAgIHJvdGF0ZVo6IF9hbmdsZTIuZGVmYXVsdCxcbiAgICBzY2FsZTogX3NjYWxlMi5kZWZhdWx0LFxuICAgIHNjYWxlWDogX3NjYWxlMi5kZWZhdWx0LFxuICAgIHNjYWxlWTogX3NjYWxlMi5kZWZhdWx0LFxuICAgIHNjYWxlWjogX3NjYWxlMi5kZWZhdWx0LFxuICAgIHNrZXdYOiBfYW5nbGUyLmRlZmF1bHQsXG4gICAgc2tld1k6IF9hbmdsZTIuZGVmYXVsdCxcbiAgICBkaXN0YW5jZTogX3B4Mi5kZWZhdWx0LFxuICAgIHRyYW5zbGF0ZVg6IF9weDIuZGVmYXVsdCxcbiAgICB0cmFuc2xhdGVZOiBfcHgyLmRlZmF1bHQsXG4gICAgdHJhbnNsYXRlWjogX3B4Mi5kZWZhdWx0LFxuICAgIHBlcnNwZWN0aXZlOiBfcHgyLmRlZmF1bHQsXG4gICAgb3BhY2l0eTogX2FscGhhMi5kZWZhdWx0XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMMk56Y3k5MllXeDFaUzEwZVhCbExXMWhjQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3p0clFrRlRaVHM3UVVGRldDeFRRVUZMTEdsQ1FVRlBPMEZCUTFvc2JVSkJRV1VzYVVKQlFVODdRVUZEZEVJc1owSkJRVmtzYVVKQlFVODdRVUZEYmtJc1VVRkJTU3hwUWtGQlR6dEJRVU5ZTEZWQlFVMHNhVUpCUVU4N096dEJRVWRpTEdWQlFWY3NhVUpCUVU4N1FVRkRiRUlzYTBKQlFXTXNhVUpCUVU4N1FVRkRja0lzYjBKQlFXZENMR2xDUVVGUE8wRkJRM1pDTEhGQ1FVRnBRaXhwUWtGQlR6dEJRVU40UWl4dFFrRkJaU3hwUWtGQlR6dEJRVU4wUWl4blFrRkJXU3hqUVVGSk96czdRVUZIYUVJc1ZVRkJUU3h4UWtGQlZ6dEJRVU5xUWl4WFFVRlBMSEZDUVVGWE8wRkJRMnhDTEZOQlFVc3NZMEZCU1R0QlFVTlVMRlZCUVUwc1kwRkJTVHM3TzBGQlIxWXNjMEpCUVd0Q0xHZENRVUZOTzBGQlEzaENMSEZDUVVGcFFpeG5Ra0ZCVFR0QlFVTjJRaXh0UWtGQlpTeG5Ra0ZCVFRzN08wRkJSM0pDTEdOQlFWVXNhMEpCUVZFN1FVRkRiRUlzWVVGQlV5eHJRa0ZCVVRzN08wRkJSMnBDTEZWQlFVMHNhVUpCUVU4N1FVRkRZaXhYUVVGUExHbENRVUZQTzBGQlEyUXNWMEZCVHl4cFFrRkJUenRCUVVOa0xGZEJRVThzYVVKQlFVODdRVUZEWkN4VFFVRkxMR2xDUVVGUE8wRkJRMW9zVlVGQlRTeHBRa0ZCVHp0QlFVTmlMRlZCUVUwc2FVSkJRVTg3UVVGRFlpeFZRVUZOTEdsQ1FVRlBPMEZCUTJJc1UwRkJTeXhwUWtGQlR6dEJRVU5hTEZOQlFVc3NhVUpCUVU4N1FVRkRXaXhaUVVGUkxHTkJRVWs3UVVGRFdpeGpRVUZWTEdOQlFVazdRVUZEWkN4alFVRlZMR05CUVVrN1FVRkRaQ3hqUVVGVkxHTkJRVWs3UVVGRFpDeGxRVUZYTEdOQlFVazdRVUZEWml4WFFVRlBMR2xDUVVGUE8wTkJRMnBDSWl3aVptbHNaU0k2SW5aaGJIVmxMWFI1Y0dVdGJXRndMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwVUdWeWNua3ZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElHRnVaMnhsSUdaeWIyMGdKeTR1THk0dUwzWmhiSFZsTFhSNWNHVnpMMkZ1WjJ4bEp6dGNibWx0Y0c5eWRDQmhiSEJvWVNCbWNtOXRJQ2N1TGk4dUxpOTJZV3gxWlMxMGVYQmxjeTloYkhCb1lTYzdYRzVwYlhCdmNuUWdZWGhsY3lCbWNtOXRJQ2N1TGk4dUxpOTJZV3gxWlMxMGVYQmxjeTloZUdWekp6dGNibWx0Y0c5eWRDQmpiMnh2Y2lCbWNtOXRJQ2N1TGk4dUxpOTJZV3gxWlMxMGVYQmxjeTlqYjJ4dmNpYzdYRzVwYlhCdmNuUWdjMk5oYkdVZ1puSnZiU0FuTGk0dkxpNHZkbUZzZFdVdGRIbHdaWE12YzJOaGJHVW5PMXh1YVcxd2IzSjBJSE5vWVdSdmR5Qm1jbTl0SUNjdUxpOHVMaTkyWVd4MVpTMTBlWEJsY3k5emFHRmtiM2NuTzF4dWFXMXdiM0owSUhCdmMybDBhVzl1Y3lCbWNtOXRJQ2N1TGk4dUxpOTJZV3gxWlMxMGVYQmxjeTl3YjNOcGRHbHZibk1uTzF4dWFXMXdiM0owSUhCNElHWnliMjBnSnk0dUx5NHVMM1poYkhWbExYUjVjR1Z6TDNCNEp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdlMXh1SUNBZ0lDOHZJRU52Ykc5eUlIQnliM0J6WEc0Z0lDQWdZMjlzYjNJNklHTnZiRzl5TEZ4dUlDQWdJR0poWTJ0bmNtOTFibVJEYjJ4dmNqb2dZMjlzYjNJc1hHNGdJQ0FnYjNWMGJHbHVaVU52Ykc5eU9pQmpiMnh2Y2l4Y2JpQWdJQ0JtYVd4c09pQmpiMnh2Y2l4Y2JpQWdJQ0J6ZEhKdmEyVTZJR052Ykc5eUxGeHVYRzRnSUNBZ0x5OGdRbTl5WkdWeUlIQnliM0J6WEc0Z0lDQWdZbTl5WkdWeVEyOXNiM0k2SUdOdmJHOXlMRnh1SUNBZ0lHSnZjbVJsY2xSdmNFTnZiRzl5T2lCamIyeHZjaXhjYmlBZ0lDQmliM0prWlhKU2FXZG9kRU52Ykc5eU9pQmpiMnh2Y2l4Y2JpQWdJQ0JpYjNKa1pYSkNiM1IwYjIxRGIyeHZjam9nWTI5c2IzSXNYRzRnSUNBZ1ltOXlaR1Z5VEdWbWRFTnZiRzl5T2lCamIyeHZjaXhjYmlBZ0lDQmliM0prWlhKU1lXUnBkWE02SUhCNExGeHVYRzRnSUNBZ0x5OGdVRzl6YVhScGIyNXBibWRjYmlBZ0lDQnRZWEpuYVc0NklIQnZjMmwwYVc5dWN5eGNiaUFnSUNCd1lXUmthVzVuT2lCd2IzTnBkR2x2Ym5Nc1hHNGdJQ0FnZDJsa2RHZzZJSEI0TEZ4dUlDQWdJR2hsYVdkb2REb2djSGdzWEc1Y2JpQWdJQ0F2THlCQmVHVnpYRzRnSUNBZ1ltRmphMmR5YjNWdVpGQnZjMmwwYVc5dU9pQmhlR1Z6TEZ4dUlDQWdJSEJsY25Od1pXTjBhWFpsVDNKcFoybHVPaUJoZUdWekxGeHVJQ0FnSUhSeVlXNXpabTl5YlU5eWFXZHBiam9nWVhobGN5eGNibHh1SUNBZ0lDOHZJRk5vWVdSdmQzTmNiaUFnSUNCMFpYaDBVMmhoWkc5M09pQnphR0ZrYjNjc1hHNGdJQ0FnWW05NFUyaGhaRzkzT2lCemFHRmtiM2NzSUNBZ1hHNWNiaUFnSUNBdkx5QlVjbUZ1YzJadmNtMGdjSEp2Y0dWeWRHbGxjMXh1SUNBZ0lISnZkR0YwWlRvZ1lXNW5iR1VzWEc0Z0lDQWdjbTkwWVhSbFdEb2dZVzVuYkdVc1hHNGdJQ0FnY205MFlYUmxXVG9nWVc1bmJHVXNYRzRnSUNBZ2NtOTBZWFJsV2pvZ1lXNW5iR1VzWEc0Z0lDQWdjMk5oYkdVNklITmpZV3hsTEZ4dUlDQWdJSE5qWVd4bFdEb2djMk5oYkdVc1hHNGdJQ0FnYzJOaGJHVlpPaUJ6WTJGc1pTeGNiaUFnSUNCelkyRnNaVm82SUhOallXeGxMRnh1SUNBZ0lITnJaWGRZT2lCaGJtZHNaU3hjYmlBZ0lDQnphMlYzV1RvZ1lXNW5iR1VzWEc0Z0lDQWdaR2x6ZEdGdVkyVTZJSEI0TEZ4dUlDQWdJSFJ5WVc1emJHRjBaVmc2SUhCNExGeHVJQ0FnSUhSeVlXNXpiR0YwWlZrNklIQjRMRnh1SUNBZ0lIUnlZVzV6YkdGMFpWbzZJSEI0TEZ4dUlDQWdJSEJsY25Od1pXTjBhWFpsT2lCd2VDeGNiaUFnSUNCdmNHRmphWFI1T2lCaGJIQm9ZVnh1ZlRzaVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FkYXB0ZXIvY3NzL3ZhbHVlLXR5cGUtbWFwLmpzXG4gKiogbW9kdWxlIGlkID0gMzlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wcyA9IHJlcXVpcmUoJy4vdHJhbnNmb3JtLXByb3BzJyk7XG5cbnZhciBfdHJhbnNmb3JtUHJvcHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNmb3JtUHJvcHMpO1xuXG52YXIgX3ByZWZpeGVyID0gcmVxdWlyZSgnLi9wcmVmaXhlcicpO1xuXG52YXIgX3ByZWZpeGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ByZWZpeGVyKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uLy4uL2luYy91dGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgVFJBTlNMQVRFX1ogPSAndHJhbnNsYXRlWic7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChzdGF0ZSwgZGlzYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uKSB7XG4gICAgdmFyIHByb3BlcnR5U3RyaW5nID0gJyc7XG4gICAgdmFyIHRyYW5zZm9ybVN0cmluZyA9ICcnO1xuICAgIHZhciB0cmFuc2Zvcm1IYXNaID0gZmFsc2U7XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc3RhdGUpIHtcbiAgICAgICAgaWYgKHN0YXRlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHN0YXRlW2tleV07XG5cbiAgICAgICAgICAgIGlmIChfdHJhbnNmb3JtUHJvcHMyLmRlZmF1bHRba2V5XSkge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybVN0cmluZyArPSBrZXkgKyAnKCcgKyB2YWx1ZSArICcpICc7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtSGFzWiA9IGtleSA9PT0gVFJBTlNMQVRFX1ogPyB0cnVlIDogdHJhbnNmb3JtSGFzWjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJvcGVydHlTdHJpbmcgKz0gJzsnICsgKDAsIF9wcmVmaXhlcjIuZGVmYXVsdCkoKDAsIF91dGlscy5jYW1lbFRvRGFzaCkoa2V5KSkgKyAnOicgKyB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0cmFuc2Zvcm1TdHJpbmcgIT09ICcnKSB7XG4gICAgICAgIGlmICghdHJhbnNmb3JtSGFzWiAmJiAhZGlzYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm1TdHJpbmcgKz0gVFJBTlNMQVRFX1ogKyAnKDBweCknO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJvcGVydHlTdHJpbmcgKz0gJzsnICsgKDAsIF9wcmVmaXhlcjIuZGVmYXVsdCkoJ3RyYW5zZm9ybScpICsgJzonICsgdHJhbnNmb3JtU3RyaW5nO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0eVN0cmluZztcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwyTnpjeTlpZFdsc1pDNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN096czdPenM3T3pzN08wRkJTVUVzU1VGQlRTeFhRVUZYTEVkQlFVY3NXVUZCV1N4RFFVRkRPenRyUWtGRmJFSXNWVUZCUXl4TFFVRkxMRVZCUVVVc01rSkJRVEpDTEVWQlFVczdRVUZEYmtRc1VVRkJTU3hqUVVGakxFZEJRVWNzUlVGQlJTeERRVUZETzBGQlEzaENMRkZCUVVrc1pVRkJaU3hIUVVGSExFVkJRVVVzUTBGQlF6dEJRVU42UWl4UlFVRkpMR0ZCUVdFc1IwRkJSeXhMUVVGTExFTkJRVU03TzBGQlJURkNMRk5CUVVzc1NVRkJTU3hIUVVGSExFbEJRVWtzUzBGQlN5eEZRVUZGTzBGQlEyNUNMRmxCUVVrc1MwRkJTeXhEUVVGRExHTkJRV01zUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlR0QlFVTXpRaXhuUWtGQlRTeExRVUZMTEVkQlFVY3NTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE96dEJRVVY2UWl4blFrRkJTU3g1UWtGQlpTeEhRVUZITEVOQlFVTXNSVUZCUlR0QlFVTnlRaXdyUWtGQlpTeEpRVUZKTEVkQlFVY3NSMEZCUnl4SFFVRkhMRWRCUVVjc1MwRkJTeXhIUVVGSExFbEJRVWtzUTBGQlF6dEJRVU0xUXl3MlFrRkJZU3hIUVVGSExFRkJRVU1zUjBGQlJ5eExRVUZMTEZkQlFWY3NSMEZCU1N4SlFVRkpMRWRCUVVjc1lVRkJZU3hEUVVGRE8yRkJSV2hGTEUxQlFVMDdRVUZEU0N3NFFrRkJZeXhKUVVGSkxFZEJRVWNzUjBGQlJ5eDNRa0ZCVXl4WFFXeENlRU1zVjBGQlZ5eEZRV3RDZVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NTMEZCU3l4RFFVRkRPMkZCUTNCRk8xTkJRMG83UzBGRFNqczdRVUZGUkN4UlFVRkpMR1ZCUVdVc1MwRkJTeXhGUVVGRkxFVkJRVVU3UVVGRGVFSXNXVUZCU1N4RFFVRkRMR0ZCUVdFc1NVRkJTU3hEUVVGRExESkNRVUV5UWl4RlFVRkZPMEZCUTJoRUxESkNRVUZsTEVsQlFVa3NWMEZCVnl4SFFVRkhMRTlCUVU4c1EwRkJRenRUUVVNMVF6czdRVUZGUkN4elFrRkJZeXhKUVVGSkxFZEJRVWNzUjBGQlJ5eDNRa0ZCVXl4WFFVRlhMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzWlVGQlpTeERRVUZETzB0QlEzcEZPenRCUVVWRUxGZEJRVThzWTBGQll5eERRVUZETzBOQlEzcENJaXdpWm1sc1pTSTZJbUoxYVd4a0xtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBVR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhSeVlXNXpabTl5YlZCeWIzQnpJR1p5YjIwZ0p5NHZkSEpoYm5ObWIzSnRMWEJ5YjNCekp6dGNibWx0Y0c5eWRDQndjbVZtYVhobGNpQm1jbTl0SUNjdUwzQnlaV1pwZUdWeUp6dGNibWx0Y0c5eWRDQjdJR05oYldWc1ZHOUVZWE5vSUgwZ1puSnZiU0FuTGk0dkxpNHZhVzVqTDNWMGFXeHpKenRjYmx4dVkyOXVjM1FnVkZKQlRsTk1RVlJGWDFvZ1BTQW5kSEpoYm5Oc1lYUmxXaWM3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUNoemRHRjBaU3dnWkdsellXSnNaVWhoY21SM1lYSmxRV05qWld4bGNtRjBhVzl1S1NBOVBpQjdYRzRnSUNBZ2JHVjBJSEJ5YjNCbGNuUjVVM1J5YVc1bklEMGdKeWM3WEc0Z0lDQWdiR1YwSUhSeVlXNXpabTl5YlZOMGNtbHVaeUE5SUNjbk8xeHVJQ0FnSUd4bGRDQjBjbUZ1YzJadmNtMUlZWE5hSUQwZ1ptRnNjMlU3WEc1Y2JpQWdJQ0JtYjNJZ0tHeGxkQ0JyWlhrZ2FXNGdjM1JoZEdVcElIdGNiaUFnSUNBZ0lDQWdhV1lnS0hOMFlYUmxMbWhoYzA5M2JsQnliM0JsY25SNUtHdGxlU2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElIWmhiSFZsSUQwZ2MzUmhkR1ZiYTJWNVhUdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFJ5WVc1elptOXliVkJ5YjNCelcydGxlVjBwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGNtRnVjMlp2Y20xVGRISnBibWNnS3owZ2EyVjVJQ3NnSnlnbklDc2dkbUZzZFdVZ0t5QW5LU0FuTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSeVlXNXpabTl5YlVoaGMxb2dQU0FvYTJWNUlEMDlQU0JVVWtGT1UweEJWRVZmV2lrZ1B5QjBjblZsSURvZ2RISmhibk5tYjNKdFNHRnpXanRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQndjbTl3WlhKMGVWTjBjbWx1WnlBclBTQW5PeWNnS3lCd2NtVm1hWGhsY2loallXMWxiRlJ2UkdGemFDaHJaWGtwS1NBcklDYzZKeUFySUhaaGJIVmxPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2FXWWdLSFJ5WVc1elptOXliVk4wY21sdVp5QWhQVDBnSnljcElIdGNiaUFnSUNBZ0lDQWdhV1lnS0NGMGNtRnVjMlp2Y20xSVlYTmFJQ1ltSUNGa2FYTmhZbXhsU0dGeVpIZGhjbVZCWTJObGJHVnlZWFJwYjI0cElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSeVlXNXpabTl5YlZOMGNtbHVaeUFyUFNCVVVrRk9VMHhCVkVWZldpQXJJQ2NvTUhCNEtTYzdYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCd2NtOXdaWEowZVZOMGNtbHVaeUFyUFNBbk95Y2dLeUJ3Y21WbWFYaGxjaWduZEhKaGJuTm1iM0p0SnlrZ0t5QW5PaWNnS3lCMGNtRnVjMlp2Y20xVGRISnBibWM3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjbVYwZFhKdUlIQnliM0JsY25SNVUzUnlhVzVuTzF4dWZUc2lYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hZGFwdGVyL2Nzcy9idWlsZC5qc1xuICoqIG1vZHVsZSBpZCA9IDQwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgY2FjaGUgPSB7fTtcbnZhciBwcmVmaXhlcyA9IFsnV2Via2l0JywgJ01veicsICdPJywgJ21zJywgJyddO1xudmFyIG51bVByZWZpeGVzID0gcHJlZml4ZXMubGVuZ3RoO1xudmFyIHRlc3RFbGVtZW50ID0gdW5kZWZpbmVkO1xuXG4vKlxuICAgIFRlc3Qgc3R5bGUgcHJvcGVydHkgZm9yIHByZWZpeGVkIHZlcnNpb25cbiAgICBcbiAgICBAcGFyYW0gW3N0cmluZ106IFN0eWxlIHByb3BlcnR5XG4gICAgQHJldHVybiBbc3RyaW5nXTogQ2FjaGVkIHByb3BlcnR5IG5hbWVcbiovXG52YXIgdGVzdFByZWZpeCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICB0ZXN0RWxlbWVudCA9IHRlc3RFbGVtZW50IHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgaWYgKGNhY2hlW2tleV0gPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjYWNoZVtrZXldID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1QcmVmaXhlczsgaSsrKSB7XG4gICAgICAgIHZhciBwcmVmaXggPSBwcmVmaXhlc1tpXSxcbiAgICAgICAgICAgIHByZWZpeGVkID0gcHJlZml4ID09PSAnJyA/IGtleSA6IHByZWZpeCArIGtleS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGtleS5zbGljZSgxKTtcblxuICAgICAgICBpZiAocHJlZml4ZWQgaW4gdGVzdEVsZW1lbnQuc3R5bGUpIHtcbiAgICAgICAgICAgIGNhY2hlW2tleV0gPSBwcmVmaXhlZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjYWNoZVtrZXldO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBjYWNoZVtrZXldIHx8IHRlc3RQcmVmaXgoa2V5KTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwyTnpjeTl3Y21WbWFYaGxjaTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN1FVRkJRU3hKUVVGTkxFdEJRVXNzUjBGQlJ5eEZRVUZGTEVOQlFVTTdRVUZEYWtJc1NVRkJUU3hSUVVGUkxFZEJRVWNzUTBGQlF5eFJRVUZSTEVWQlFVTXNTMEZCU3l4RlFVRkRMRWRCUVVjc1JVRkJReXhKUVVGSkxFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTTdRVUZETDBNc1NVRkJUU3hYUVVGWExFZEJRVWNzVVVGQlVTeERRVUZETEUxQlFVMHNRMEZCUXp0QlFVTndReXhKUVVGSkxGZEJRVmNzV1VGQlFUczdPenM3T3pzN1FVRkJReXhCUVZGb1FpeEpRVUZOTEZWQlFWVXNSMEZCUnl4VlFVRkRMRWRCUVVjc1JVRkJTenRCUVVONFFpeGxRVUZYTEVkQlFVY3NWMEZCVnl4SlFVRkpMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdPMEZCUlRORUxGRkJRVWtzUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRXRCUVVzc1JVRkJSVHRCUVVOMFFpeGxRVUZQTEV0QlFVc3NRMEZCUXp0TFFVTm9RaXhOUVVGTk8wRkJRMGdzWVVGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRXRCUVVzc1EwRkJRenRMUVVOMFFqczdRVUZGUkN4VFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NWMEZCVnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8wRkJRMnhETEZsQlFVa3NUVUZCVFN4SFFVRkhMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGNFSXNVVUZCVVN4SFFVRkhMRUZCUVVNc1RVRkJUU3hMUVVGTExFVkJRVVVzUjBGQlNTeEhRVUZITEVkQlFVY3NUVUZCVFN4SFFVRkhMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNWMEZCVnl4RlFVRkZMRWRCUVVjc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXpzN1FVRkZNMFlzV1VGQlNTeFJRVUZSTEVsQlFVa3NWMEZCVnl4RFFVRkRMRXRCUVVzc1JVRkJSVHRCUVVNdlFpeHBRa0ZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExGRkJRVkVzUTBGQlF6dFRRVU42UWp0TFFVTktPenRCUVVWRUxGZEJRVThzUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPME5CUTNKQ0xFTkJRVU03TzJ0Q1FVVmhMRlZCUVVNc1IwRkJSenRYUVVGTExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4VlFVRlZMRU5CUVVNc1IwRkJSeXhEUVVGRE8wTkJRVUVpTENKbWFXeGxJam9pY0hKbFptbDRaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhSUVpYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpqYjI1emRDQmpZV05vWlNBOUlIdDlPMXh1WTI5dWMzUWdjSEpsWm1sNFpYTWdQU0JiSjFkbFltdHBkQ2NzSjAxdmVpY3NKMDhuTENkdGN5Y3NJQ2NuWFR0Y2JtTnZibk4wSUc1MWJWQnlaV1pwZUdWeklEMGdjSEpsWm1sNFpYTXViR1Z1WjNSb08xeHViR1YwSUhSbGMzUkZiR1Z0Wlc1ME8xeHVYRzR2S2x4dUlDQWdJRlJsYzNRZ2MzUjViR1VnY0hKdmNHVnlkSGtnWm05eUlIQnlaV1pwZUdWa0lIWmxjbk5wYjI1Y2JpQWdJQ0JjYmlBZ0lDQkFjR0Z5WVcwZ1czTjBjbWx1WjEwNklGTjBlV3hsSUhCeWIzQmxjblI1WEc0Z0lDQWdRSEpsZEhWeWJpQmJjM1J5YVc1blhUb2dRMkZqYUdWa0lIQnliM0JsY25SNUlHNWhiV1ZjYmlvdlhHNWpiMjV6ZENCMFpYTjBVSEpsWm1sNElEMGdLR3RsZVNrZ1BUNGdlMXh1SUNBZ0lIUmxjM1JGYkdWdFpXNTBJRDBnZEdWemRFVnNaVzFsYm5RZ2ZId2daRzlqZFcxbGJuUXVZM0psWVhSbFJXeGxiV1Z1ZENnblpHbDJKeWs3WEc1Y2JpQWdJQ0JwWmlBb1kyRmphR1ZiYTJWNVhTQTlQVDBnWm1Gc2MyVXBJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR1poYkhObE8xeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUdOaFkyaGxXMnRsZVYwZ1BTQm1ZV3h6WlR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JtYjNJZ0tIWmhjaUJwSUQwZ01Ec2dhU0E4SUc1MWJWQnlaV1pwZUdWek95QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ2RtRnlJSEJ5WldacGVDQTlJSEJ5WldacGVHVnpXMmxkTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdjSEpsWm1sNFpXUWdQU0FvY0hKbFptbDRJRDA5UFNBbkp5a2dQeUJyWlhrZ09pQndjbVZtYVhnZ0t5QnJaWGt1WTJoaGNrRjBLREFwTG5SdlZYQndaWEpEWVhObEtDa2dLeUJyWlhrdWMyeHBZMlVvTVNrN1hHNWNiaUFnSUNBZ0lDQWdhV1lnS0hCeVpXWnBlR1ZrSUdsdUlIUmxjM1JGYkdWdFpXNTBMbk4wZVd4bEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCallXTm9aVnRyWlhsZElEMGdjSEpsWm1sNFpXUTdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzRnSUNBZ1hHNGdJQ0FnY21WMGRYSnVJR05oWTJobFcydGxlVjA3WEc1OU8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQW9hMlY1S1NBOVBpQmpZV05vWlZ0clpYbGRJSHg4SUhSbGMzUlFjbVZtYVhnb2EyVjVLVHNpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9jc3MvcHJlZml4ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA0MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2RpY3Rpb25hcnkgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9zZXR0aW5ncy9kaWN0aW9uYXJ5Jyk7XG5cbnZhciB0cmFuc2Zvcm1Qcm9wcyA9IHt9O1xuXG52YXIgU0NBTEUgPSAnc2NhbGUnO1xudmFyIFJPVEFURSA9ICdyb3RhdGUnO1xudmFyIFRSQU5TRk9STV9QRVJTUEVDVElWRSA9ICd0cmFuc2Zvcm1QZXJzcGVjdGl2ZSc7XG52YXIgVEVSTVMgPSBbJ3RyYW5zbGF0ZScsIFNDQUxFLCBST1RBVEUsICdza2V3JywgVFJBTlNGT1JNX1BFUlNQRUNUSVZFXTtcblxudHJhbnNmb3JtUHJvcHNbUk9UQVRFXSA9IHRyYW5zZm9ybVByb3BzW1NDQUxFXSA9IHRyYW5zZm9ybVByb3BzW1RSQU5TRk9STV9QRVJTUEVDVElWRV0gPSB0cnVlO1xuXG5URVJNUy5mb3JFYWNoKGZ1bmN0aW9uICh0ZXJtKSB7XG4gIHJldHVybiBfZGljdGlvbmFyeS5heGVzLmZvckVhY2goZnVuY3Rpb24gKGF4aXMpIHtcbiAgICByZXR1cm4gdHJhbnNmb3JtUHJvcHNbdGVybSArIGF4aXNdID0gdHJ1ZTtcbiAgfSk7XG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gdHJhbnNmb3JtUHJvcHM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwyTnpjeTkwY21GdWMyWnZjbTB0Y0hKdmNITXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN08wRkJSVUVzU1VGQlNTeGpRVUZqTEVkQlFVY3NSVUZCUlN4RFFVRkRPenRCUVVWNFFpeEpRVUZOTEV0QlFVc3NSMEZCUnl4UFFVRlBMRU5CUVVNN1FVRkRkRUlzU1VGQlRTeE5RVUZOTEVkQlFVY3NVVUZCVVN4RFFVRkRPMEZCUTNoQ0xFbEJRVTBzY1VKQlFYRkNMRWRCUVVjc2MwSkJRWE5DTEVOQlFVTTdRVUZEY2tRc1NVRkJUU3hMUVVGTExFZEJRVWNzUTBGQlF5eFhRVUZYTEVWQlFVVXNTMEZCU3l4RlFVRkZMRTFCUVUwc1JVRkJSU3hOUVVGTkxFVkJRVVVzY1VKQlFYRkNMRU5CUVVNc1EwRkJRenM3UVVGRk1VVXNZMEZCWXl4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExHTkJRV01zUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4alFVRmpMRU5CUVVNc2NVSkJRWEZDTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNN08wRkJSVGxHTEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1ZVRkJReXhKUVVGSk8xTkJRVXNzV1VGWVppeEpRVUZKTEVOQlYyZENMRTlCUVU4c1EwRkJReXhWUVVGRExFbEJRVWs3VjBGQlN5eGpRVUZqTEVOQlFVTXNTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJReXhIUVVGSExFbEJRVWs3UjBGQlFTeERRVUZETzBOQlFVRXNRMEZCUXl4RFFVRkRPenRyUWtGRmNrVXNZMEZCWXlJc0ltWnBiR1VpT2lKMGNtRnVjMlp2Y20wdGNISnZjSE11YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhSUVpYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdleUJoZUdWeklIMGdabkp2YlNBbkxpNHZMaTR2ZG1Gc2RXVXRkSGx3WlhNdmMyVjBkR2x1WjNNdlpHbGpkR2x2Ym1GeWVTYzdYRzVjYm14bGRDQjBjbUZ1YzJadmNtMVFjbTl3Y3lBOUlIdDlPMXh1WEc1amIyNXpkQ0JUUTBGTVJTQTlJQ2R6WTJGc1pTYzdYRzVqYjI1emRDQlNUMVJCVkVVZ1BTQW5jbTkwWVhSbEp6dGNibU52Ym5OMElGUlNRVTVUUms5U1RWOVFSVkpUVUVWRFZFbFdSU0E5SUNkMGNtRnVjMlp2Y20xUVpYSnpjR1ZqZEdsMlpTYzdYRzVqYjI1emRDQlVSVkpOVXlBOUlGc25kSEpoYm5Oc1lYUmxKeXdnVTBOQlRFVXNJRkpQVkVGVVJTd2dKM05yWlhjbkxDQlVVa0ZPVTBaUFVrMWZVRVZTVTFCRlExUkpWa1ZkTzF4dVhHNTBjbUZ1YzJadmNtMVFjbTl3YzF0U1QxUkJWRVZkSUQwZ2RISmhibk5tYjNKdFVISnZjSE5iVTBOQlRFVmRJRDBnZEhKaGJuTm1iM0p0VUhKdmNITmJWRkpCVGxOR1QxSk5YMUJGVWxOUVJVTlVTVlpGWFNBOUlIUnlkV1U3WEc1Y2JsUkZVazFUTG1admNrVmhZMmdvS0hSbGNtMHBJRDArSUdGNFpYTXVabTl5UldGamFDZ29ZWGhwY3lrZ1BUNGdkSEpoYm5ObWIzSnRVSEp2Y0hOYmRHVnliU0FySUdGNGFYTmRJRDBnZEhKMVpTa3BPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0IwY21GdWMyWnZjbTFRY205d2N6c2lYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hZGFwdGVyL2Nzcy90cmFuc2Zvcm0tcHJvcHMuanNcbiAqKiBtb2R1bGUgaWQgPSA0MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2FscGhhID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvYWxwaGEnKTtcblxudmFyIF9hbHBoYTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hbHBoYSk7XG5cbnZhciBfYXhlcyA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL2F4ZXMnKTtcblxudmFyIF9heGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2F4ZXMpO1xuXG52YXIgX2NvbG9yID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvY29sb3InKTtcblxudmFyIF9jb2xvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb2xvcik7XG5cbnZhciBfY29tcGxleCA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL2NvbXBsZXgnKTtcblxudmFyIF9jb21wbGV4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbXBsZXgpO1xuXG52YXIgX3NjYWxlID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvc2NhbGUnKTtcblxudmFyIF9zY2FsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zY2FsZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBmaWxsOiBfY29sb3IyLmRlZmF1bHQsXG4gICAgc3Ryb2tlOiBfY29sb3IyLmRlZmF1bHQsXG4gICAgc2NhbGU6IF9zY2FsZTIuZGVmYXVsdCxcbiAgICBzY2FsZVg6IF9zY2FsZTIuZGVmYXVsdCxcbiAgICBzY2FsZVk6IF9zY2FsZTIuZGVmYXVsdCxcbiAgICB0cmFuc2Zvcm1PcmlnaW46IF9heGVzMi5kZWZhdWx0LFxuICAgIGQ6IF9jb21wbGV4Mi5kZWZhdWx0LFxuICAgIHBvaW50czogX2NvbXBsZXgyLmRlZmF1bHQsXG4gICAgb3BhY2l0eTogX2FscGhhMi5kZWZhdWx0LFxuICAgIGZpbGxPcGFjaXR5OiBfYWxwaGEyLmRlZmF1bHQsXG4gICAgc3Ryb2tlT3BhY2l0eTogX2FscGhhMi5kZWZhdWx0XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMM04yWnk5MllXeDFaUzEwZVhCbExXMWhjQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenRyUWtGTlpUdEJRVU5ZTEZGQlFVa3NhVUpCUVU4N1FVRkRXQ3hWUVVGTkxHbENRVUZQTzBGQlEySXNVMEZCU3l4cFFrRkJUenRCUVVOYUxGVkJRVTBzYVVKQlFVODdRVUZEWWl4VlFVRk5MR2xDUVVGUE8wRkJRMklzYlVKQlFXVXNaMEpCUVUwN1FVRkRja0lzUzBGQlF5eHRRa0ZCVXp0QlFVTldMRlZCUVUwc2JVSkJRVk03UVVGRFppeFhRVUZQTEdsQ1FVRlBPMEZCUTJRc1pVRkJWeXhwUWtGQlR6dEJRVU5zUWl4cFFrRkJZU3hwUWtGQlR6dERRVU4yUWlJc0ltWnBiR1VpT2lKMllXeDFaUzEwZVhCbExXMWhjQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEZCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQmhiSEJvWVNCbWNtOXRJQ2N1TGk4dUxpOTJZV3gxWlMxMGVYQmxjeTloYkhCb1lTYzdYRzVwYlhCdmNuUWdZWGhsY3lCbWNtOXRJQ2N1TGk4dUxpOTJZV3gxWlMxMGVYQmxjeTloZUdWekp6dGNibWx0Y0c5eWRDQmpiMnh2Y2lCbWNtOXRJQ2N1TGk4dUxpOTJZV3gxWlMxMGVYQmxjeTlqYjJ4dmNpYzdYRzVwYlhCdmNuUWdZMjl0Y0d4bGVDQm1jbTl0SUNjdUxpOHVMaTkyWVd4MVpTMTBlWEJsY3k5amIyMXdiR1Y0Snp0Y2JtbHRjRzl5ZENCelkyRnNaU0JtY205dElDY3VMaTh1TGk5MllXeDFaUzEwZVhCbGN5OXpZMkZzWlNjN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElIdGNiaUFnSUNCbWFXeHNPaUJqYjJ4dmNpeGNiaUFnSUNCemRISnZhMlU2SUdOdmJHOXlMRnh1SUNBZ0lITmpZV3hsT2lCelkyRnNaU3hjYmlBZ0lDQnpZMkZzWlZnNklITmpZV3hsTEZ4dUlDQWdJSE5qWVd4bFdUb2djMk5oYkdVc1hHNGdJQ0FnZEhKaGJuTm1iM0p0VDNKcFoybHVPaUJoZUdWekxGeHVJQ0FnSUdRNklHTnZiWEJzWlhnc1hHNGdJQ0FnY0c5cGJuUnpPaUJqYjIxd2JHVjRMRnh1SUNBZ0lHOXdZV05wZEhrNklHRnNjR2hoTEZ4dUlDQWdJR1pwYkd4UGNHRmphWFI1T2lCaGJIQm9ZU3hjYmlBZ0lDQnpkSEp2YTJWUGNHRmphWFI1T2lCaGJIQm9ZVnh1ZlRzaVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FkYXB0ZXIvc3ZnL3ZhbHVlLXR5cGUtbWFwLmpzXG4gKiogbW9kdWxlIGlkID0gNDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGJ1aWxkO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vLi4vaW5jL3V0aWxzJyk7XG5cbnZhciBfdHJhbnNmb3JtUHJvcHMgPSByZXF1aXJlKCcuLi9jc3MvdHJhbnNmb3JtLXByb3BzJyk7XG5cbnZhciBfdHJhbnNmb3JtUHJvcHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNmb3JtUHJvcHMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgWkVST19OT1RfWkVSTyA9IDAuMDAwMTtcblxuZnVuY3Rpb24gYnVpbGQoc3RhdGUsIG9yaWdpbikge1xuICAgIHZhciBwcm9wcyA9IHt9LFxuICAgICAgICBoYXNUcmFuc2Zvcm0gPSBmYWxzZSxcbiAgICAgICAgc2NhbGUgPSBzdGF0ZS5zY2FsZSAhPT0gdW5kZWZpbmVkID8gc3RhdGUuc2NhbGUgfHwgWkVST19OT1RfWkVSTyA6IHN0YXRlLnNjYWxlWCB8fCAxLFxuICAgICAgICBzY2FsZVkgPSBzdGF0ZS5zY2FsZVkgIT09IHVuZGVmaW5lZCA/IHN0YXRlLnNjYWxlWSB8fCBaRVJPX05PVF9aRVJPIDogc2NhbGUgfHwgMSxcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luWCA9IG9yaWdpbi54LFxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW5ZID0gb3JpZ2luLnksXG4gICAgICAgIHNjYWxlVHJhbnNmb3JtWCA9IC10cmFuc2Zvcm1PcmlnaW5YICogKHNjYWxlICogMSksXG4gICAgICAgIHNjYWxlVHJhbnNmb3JtWSA9IC10cmFuc2Zvcm1PcmlnaW5ZICogKHNjYWxlWSAqIDEpLFxuICAgICAgICBzY2FsZVJlcGxhY2VYID0gdHJhbnNmb3JtT3JpZ2luWCAvIHNjYWxlLFxuICAgICAgICBzY2FsZVJlcGxhY2VZID0gdHJhbnNmb3JtT3JpZ2luWSAvIHNjYWxlWSxcbiAgICAgICAgdHJhbnNmb3JtID0ge1xuICAgICAgICB0cmFuc2xhdGU6ICd0cmFuc2xhdGUoJyArIHN0YXRlLnRyYW5zbGF0ZVggKyAnLCAnICsgc3RhdGUudHJhbnNsYXRlWSArICcpICcsXG4gICAgICAgIHNjYWxlOiAndHJhbnNsYXRlKCcgKyBzY2FsZVRyYW5zZm9ybVggKyAnLCAnICsgc2NhbGVUcmFuc2Zvcm1ZICsgJykgc2NhbGUoJyArIHNjYWxlICsgJywgJyArIHNjYWxlWSArICcpIHRyYW5zbGF0ZSgnICsgc2NhbGVSZXBsYWNlWCArICcsICcgKyBzY2FsZVJlcGxhY2VZICsgJykgJyxcbiAgICAgICAgcm90YXRlOiAncm90YXRlKCcgKyBzdGF0ZS5yb3RhdGUgKyAnLCAnICsgdHJhbnNmb3JtT3JpZ2luWCArICcsICcgKyB0cmFuc2Zvcm1PcmlnaW5ZICsgJykgJyxcbiAgICAgICAgc2tld1g6ICdza2V3WCgnICsgc3RhdGUuc2tld1ggKyAnKSAnLFxuICAgICAgICBza2V3WTogJ3NrZXdZKCcgKyBzdGF0ZS5za2V3WSArICcpICdcbiAgICB9O1xuXG4gICAgZm9yICh2YXIga2V5IGluIHN0YXRlKSB7XG4gICAgICAgIGlmIChzdGF0ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICBpZiAoX3RyYW5zZm9ybVByb3BzMi5kZWZhdWx0W2tleV0pIHtcbiAgICAgICAgICAgICAgICBoYXNUcmFuc2Zvcm0gPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcm9wc1soMCwgX3V0aWxzLmNhbWVsVG9EYXNoKShrZXkpXSA9IHN0YXRlW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaGFzVHJhbnNmb3JtKSB7XG4gICAgICAgIHByb3BzLnRyYW5zZm9ybSA9ICcnO1xuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiB0cmFuc2Zvcm0pIHtcbiAgICAgICAgICAgIGlmICh0cmFuc2Zvcm0uaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHZhciBkZWZhdWx0VmFsdWUgPSBrZXkgPT09ICdzY2FsZScgPyAnMScgOiAnMCc7XG4gICAgICAgICAgICAgICAgcHJvcHMudHJhbnNmb3JtICs9IHRyYW5zZm9ybVtrZXldLnJlcGxhY2UoL3VuZGVmaW5lZC9nLCBkZWZhdWx0VmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BzO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMM04yWnk5aWRXbHNaQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN2EwSkJTM2RDTEV0QlFVczdPenM3T3pzN096czdRVUZHTjBJc1NVRkJUU3hoUVVGaExFZEJRVWNzVFVGQlRTeERRVUZET3p0QlFVVmtMRk5CUVZNc1MwRkJTeXhEUVVGRExFdEJRVXNzUlVGQlJTeE5RVUZOTEVWQlFVVTdRVUZEZWtNc1VVRkJTU3hMUVVGTExFZEJRVWNzUlVGQlJUdFJRVU5XTEZsQlFWa3NSMEZCUnl4TFFVRkxPMUZCUTNCQ0xFdEJRVXNzUjBGQlJ5eExRVUZMTEVOQlFVTXNTMEZCU3l4TFFVRkxMRk5CUVZNc1IwRkJSeXhMUVVGTExFTkJRVU1zUzBGQlN5eEpRVUZKTEdGQlFXRXNSMEZCUnl4TFFVRkxMRU5CUVVNc1RVRkJUU3hKUVVGSkxFTkJRVU03VVVGRGNFWXNUVUZCVFN4SFFVRkhMRXRCUVVzc1EwRkJReXhOUVVGTkxFdEJRVXNzVTBGQlV5eEhRVUZITEV0QlFVc3NRMEZCUXl4TlFVRk5MRWxCUVVrc1lVRkJZU3hIUVVGSExFdEJRVXNzU1VGQlNTeERRVUZETzFGQlEyaEdMR2RDUVVGblFpeEhRVUZITEUxQlFVMHNRMEZCUXl4RFFVRkRPMUZCUXpOQ0xHZENRVUZuUWl4SFFVRkhMRTFCUVUwc1EwRkJReXhEUVVGRE8xRkJRek5DTEdWQlFXVXNSMEZCUnl4RFFVRkZMR2RDUVVGblFpeEpRVUZKTEV0QlFVc3NSMEZCUnl4RFFVRkRMRU5CUVVFc1FVRkJRenRSUVVOc1JDeGxRVUZsTEVkQlFVY3NRMEZCUlN4blFrRkJaMElzU1VGQlNTeE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkJMRUZCUVVNN1VVRkRia1FzWVVGQllTeEhRVUZITEdkQ1FVRm5RaXhIUVVGSExFdEJRVXM3VVVGRGVFTXNZVUZCWVN4SFFVRkhMR2RDUVVGblFpeEhRVUZITEUxQlFVMDdVVUZEZWtNc1UwRkJVeXhIUVVGSE8wRkJRMUlzYVVKQlFWTXNhVUpCUVdVc1MwRkJTeXhEUVVGRExGVkJRVlVzVlVGQlN5eExRVUZMTEVOQlFVTXNWVUZCVlN4UFFVRkpPMEZCUTJwRkxHRkJRVXNzYVVKQlFXVXNaVUZCWlN4VlFVRkxMR1ZCUVdVc1owSkJRVmNzUzBGQlN5eFZRVUZMTEUxQlFVMHNiMEpCUVdVc1lVRkJZU3hWUVVGTExHRkJRV0VzVDBGQlNUdEJRVU53U1N4alFVRk5MR05CUVZrc1MwRkJTeXhEUVVGRExFMUJRVTBzVlVGQlN5eG5Ra0ZCWjBJc1ZVRkJTeXhuUWtGQlowSXNUMEZCU1R0QlFVTTFSU3hoUVVGTExHRkJRVmNzUzBGQlN5eERRVUZETEV0QlFVc3NUMEZCU1R0QlFVTXZRaXhoUVVGTExHRkJRVmNzUzBGQlN5eERRVUZETEV0QlFVc3NUMEZCU1R0TFFVTnNReXhEUVVGRE96dEJRVVZPTEZOQlFVc3NTVUZCU1N4SFFVRkhMRWxCUVVrc1MwRkJTeXhGUVVGRk8wRkJRMjVDTEZsQlFVa3NTMEZCU3l4RFFVRkRMR05CUVdNc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJUdEJRVU16UWl4blFrRkJTU3g1UWtGQlpTeEhRVUZITEVOQlFVTXNSVUZCUlR0QlFVTnlRaXcwUWtGQldTeEhRVUZITEVsQlFVa3NRMEZCUXp0aFFVTjJRaXhOUVVGTk8wRkJRMGdzY1VKQlFVc3NRMEZCUXl4WFFUZENZaXhYUVVGWExFVkJOa0pqTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzJGQlEzaERPMU5CUTBvN1MwRkRTanM3UVVGRlJDeFJRVUZKTEZsQlFWa3NSVUZCUlR0QlFVTmtMR0ZCUVVzc1EwRkJReXhUUVVGVExFZEJRVWNzUlVGQlJTeERRVUZET3p0QlFVVnlRaXhoUVVGTExFbEJRVWtzUjBGQlJ5eEpRVUZKTEZOQlFWTXNSVUZCUlR0QlFVTjJRaXhuUWtGQlNTeFRRVUZUTEVOQlFVTXNZMEZCWXl4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRk8wRkJReTlDTEc5Q1FVRk5MRmxCUVZrc1IwRkJSeXhCUVVGRExFZEJRVWNzUzBGQlN5eFBRVUZQTEVkQlFVa3NSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJRenRCUVVOdVJDeHhRa0ZCU3l4RFFVRkRMRk5CUVZNc1NVRkJTU3hUUVVGVExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRmxCUVZrc1JVRkJSU3haUVVGWkxFTkJRVU1zUTBGQlF6dGhRVU42UlR0VFFVTktPMHRCUTBvN08wRkJSVVFzVjBGQlR5eExRVUZMTEVOQlFVTTdRMEZEYUVJaUxDSm1hV3hsSWpvaVluVnBiR1F1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhSUVpYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdleUJqWVcxbGJGUnZSR0Z6YUNCOUlHWnliMjBnSnk0dUx5NHVMMmx1WXk5MWRHbHNjeWM3WEc1cGJYQnZjblFnZEhKaGJuTm1iM0p0VUhKdmNITWdabkp2YlNBbkxpNHZZM056TDNSeVlXNXpabTl5YlMxd2NtOXdjeWM3WEc1Y2JtTnZibk4wSUZwRlVrOWZUazlVWDFwRlVrOGdQU0F3TGpBd01ERTdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR1oxYm1OMGFXOXVJR0oxYVd4a0tITjBZWFJsTENCdmNtbG5hVzRwSUh0Y2JpQWdJQ0JzWlhRZ2NISnZjSE1nUFNCN2ZTeGNiaUFnSUNBZ0lDQWdhR0Z6VkhKaGJuTm1iM0p0SUQwZ1ptRnNjMlVzWEc0Z0lDQWdJQ0FnSUhOallXeGxJRDBnYzNSaGRHVXVjMk5oYkdVZ0lUMDlJSFZ1WkdWbWFXNWxaQ0EvSUhOMFlYUmxMbk5qWVd4bElIeDhJRnBGVWs5ZlRrOVVYMXBGVWs4Z09pQnpkR0YwWlM1elkyRnNaVmdnZkh3Z01TeGNiaUFnSUNBZ0lDQWdjMk5oYkdWWklEMGdjM1JoZEdVdWMyTmhiR1ZaSUNFOVBTQjFibVJsWm1sdVpXUWdQeUJ6ZEdGMFpTNXpZMkZzWlZrZ2ZId2dXa1ZTVDE5T1QxUmZXa1ZTVHlBNklITmpZV3hsSUh4OElERXNYRzRnSUNBZ0lDQWdJSFJ5WVc1elptOXliVTl5YVdkcGJsZ2dQU0J2Y21sbmFXNHVlQ3hjYmlBZ0lDQWdJQ0FnZEhKaGJuTm1iM0p0VDNKcFoybHVXU0E5SUc5eWFXZHBiaTU1TEZ4dUlDQWdJQ0FnSUNCelkyRnNaVlJ5WVc1elptOXliVmdnUFNBdElIUnlZVzV6Wm05eWJVOXlhV2RwYmxnZ0tpQW9jMk5oYkdVZ0tpQXhLU3hjYmlBZ0lDQWdJQ0FnYzJOaGJHVlVjbUZ1YzJadmNtMVpJRDBnTFNCMGNtRnVjMlp2Y20xUGNtbG5hVzVaSUNvZ0tITmpZV3hsV1NBcUlERXBMRnh1SUNBZ0lDQWdJQ0J6WTJGc1pWSmxjR3hoWTJWWUlEMGdkSEpoYm5ObWIzSnRUM0pwWjJsdVdDQXZJSE5qWVd4bExGeHVJQ0FnSUNBZ0lDQnpZMkZzWlZKbGNHeGhZMlZaSUQwZ2RISmhibk5tYjNKdFQzSnBaMmx1V1NBdklITmpZV3hsV1N4Y2JpQWdJQ0FnSUNBZ2RISmhibk5tYjNKdElEMGdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RISmhibk5zWVhSbE9pQmdkSEpoYm5Oc1lYUmxLQ1I3YzNSaGRHVXVkSEpoYm5Oc1lYUmxXSDBzSUNSN2MzUmhkR1V1ZEhKaGJuTnNZWFJsV1gwcElHQXNYRzRnSUNBZ0lDQWdJQ0FnSUNCelkyRnNaVG9nWUhSeVlXNXpiR0YwWlNna2UzTmpZV3hsVkhKaGJuTm1iM0p0V0gwc0lDUjdjMk5oYkdWVWNtRnVjMlp2Y20xWmZTa2djMk5oYkdVb0pIdHpZMkZzWlgwc0lDUjdjMk5oYkdWWmZTa2dkSEpoYm5Oc1lYUmxLQ1I3YzJOaGJHVlNaWEJzWVdObFdIMHNJQ1I3YzJOaGJHVlNaWEJzWVdObFdYMHBJR0FzWEc0Z0lDQWdJQ0FnSUNBZ0lDQnliM1JoZEdVNklHQnliM1JoZEdVb0pIdHpkR0YwWlM1eWIzUmhkR1Y5TENBa2UzUnlZVzV6Wm05eWJVOXlhV2RwYmxoOUxDQWtlM1J5WVc1elptOXliVTl5YVdkcGJsbDlLU0JnTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdjMnRsZDFnNklHQnphMlYzV0Nna2UzTjBZWFJsTG5OclpYZFlmU2tnWUN4Y2JpQWdJQ0FnSUNBZ0lDQWdJSE5yWlhkWk9pQmdjMnRsZDFrb0pIdHpkR0YwWlM1emEyVjNXWDBwSUdCY2JpQWdJQ0FnSUNBZ2ZUdGNibHh1SUNBZ0lHWnZjaUFvYkdWMElHdGxlU0JwYmlCemRHRjBaU2tnZTF4dUlDQWdJQ0FnSUNCcFppQW9jM1JoZEdVdWFHRnpUM2R1VUhKdmNHVnlkSGtvYTJWNUtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFJ5WVc1elptOXliVkJ5YjNCelcydGxlVjBwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCb1lYTlVjbUZ1YzJadmNtMGdQU0IwY25WbE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J3Y205d2MxdGpZVzFsYkZSdlJHRnphQ2hyWlhrcFhTQTlJSE4wWVhSbFcydGxlVjA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmlBZ0lDQnBaaUFvYUdGelZISmhibk5tYjNKdEtTQjdYRzRnSUNBZ0lDQWdJSEJ5YjNCekxuUnlZVzV6Wm05eWJTQTlJQ2NuTzF4dVhHNGdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHdGxlU0JwYmlCMGNtRnVjMlp2Y20wcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaDBjbUZ1YzJadmNtMHVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2EyVjVLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJR1JsWm1GMWJIUldZV3gxWlNBOUlDaHJaWGtnUFQwOUlDZHpZMkZzWlNjcElEOGdKekVuSURvZ0p6QW5PMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEJ5YjNCekxuUnlZVzV6Wm05eWJTQXJQU0IwY21GdWMyWnZjbTFiYTJWNVhTNXlaWEJzWVdObEtDOTFibVJsWm1sdVpXUXZaeXdnWkdWbVlYVnNkRlpoYkhWbEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JseHVJQ0FnSUhKbGRIVnliaUJ3Y205d2N6dGNibjBpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9zdmcvYnVpbGQuanNcbiAqKiBtb2R1bGUgaWQgPSA0NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gYnVpbGQ7XG4vKlxuICAgIENvbnZlcnQgcGVyY2VudGFnZSB0byBwaXhlbHNcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFBlcmNlbnRhZ2Ugb2YgdG90YWwgbGVuZ3RoXG4gICAgQHBhcmFtIFtudW1iZXJdOiBUb3RhbCBsZW5ndGhcbiovXG52YXIgcGVyY2VudFRvUGl4ZWxzID0gZnVuY3Rpb24gKHBlcmNlbnQsIGxlbmd0aCkge1xuICAgIHJldHVybiBwYXJzZUZsb2F0KHBlcmNlbnQpIC8gMTAwICogbGVuZ3RoICsgJ3B4Jztcbn07XG5cbmZ1bmN0aW9uIGJ1aWxkKHN0YXRlLCBsZW5ndGgpIHtcbiAgICB2YXIgc3R5bGVzID0ge307XG4gICAgdmFyIGRhc2hBcnJheVN0eWxlcyA9IHtcbiAgICAgICAgbGVuZ3RoOiAwLFxuICAgICAgICBzcGFjaW5nOiBsZW5ndGggKyAncHgnXG4gICAgfTtcbiAgICB2YXIgaGFzRGFzaEFycmF5ID0gZmFsc2U7XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc3RhdGUpIHtcbiAgICAgICAgaWYgKHN0YXRlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHN0YXRlW2tleV07XG5cbiAgICAgICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnbGVuZ3RoJzpcbiAgICAgICAgICAgICAgICBjYXNlICdzcGFjaW5nJzpcbiAgICAgICAgICAgICAgICAgICAgaGFzRGFzaEFycmF5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgZGFzaEFycmF5U3R5bGVzW2tleV0gPSBwZXJjZW50VG9QaXhlbHModmFsdWUsIGxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ29mZnNldCc6XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlc1snc3Ryb2tlLWRhc2hvZmZzZXQnXSA9IHBlcmNlbnRUb1BpeGVscygtdmFsdWUsIGxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlc1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaGFzRGFzaEFycmF5KSB7XG4gICAgICAgIHN0eWxlc1snc3Ryb2tlLWRhc2hhcnJheSddID0gZGFzaEFycmF5U3R5bGVzLmxlbmd0aCArICcgJyArIGRhc2hBcnJheVN0eWxlcy5zcGFjaW5nO1xuICAgIH1cblxuICAgIHJldHVybiBzdHlsZXM7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwzTjJaeTF3WVhSb0wySjFhV3hrTG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096dHJRa0ZSZDBJc1MwRkJTenM3T3pzN096dEJRVVkzUWl4SlFVRk5MR1ZCUVdVc1IwRkJSeXhWUVVGRExFOUJRVThzUlVGQlJTeE5RVUZOTzFkQlFVc3NRVUZCUXl4VlFVRlZMRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZKTEUxQlFVMHNSMEZCUnl4SlFVRkpPME5CUVVFc1EwRkJRenM3UVVGRk1VVXNVMEZCVXl4TFFVRkxMRU5CUVVNc1MwRkJTeXhGUVVGRkxFMUJRVTBzUlVGQlJUdEJRVU42UXl4UlFVRk5MRTFCUVUwc1IwRkJSeXhGUVVGRkxFTkJRVU03UVVGRGJFSXNVVUZCVFN4bFFVRmxMRWRCUVVjN1FVRkRjRUlzWTBGQlRTeEZRVUZGTEVOQlFVTTdRVUZEVkN4bFFVRlBMRVZCUVVVc1RVRkJUU3hIUVVGSExFbEJRVWs3UzBGRGVrSXNRMEZCUXp0QlFVTkdMRkZCUVVrc1dVRkJXU3hIUVVGSExFdEJRVXNzUTBGQlF6czdRVUZGZWtJc1UwRkJTeXhKUVVGSkxFZEJRVWNzU1VGQlNTeExRVUZMTEVWQlFVVTdRVUZEYmtJc1dVRkJTU3hMUVVGTExFTkJRVU1zWTBGQll5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZPMEZCUXpOQ0xHZENRVUZOTEV0QlFVc3NSMEZCUnl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03TzBGQlJYcENMRzlDUVVGUkxFZEJRVWM3UVVGRFdDeHhRa0ZCU3l4UlFVRlJMRU5CUVVNN1FVRkRaQ3h4UWtGQlN5eFRRVUZUTzBGQlExWXNaME5CUVZrc1IwRkJSeXhKUVVGSkxFTkJRVU03UVVGRGNFSXNiVU5CUVdVc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eGxRVUZsTEVOQlFVTXNTMEZCU3l4RlFVRkZMRTFCUVUwc1EwRkJReXhEUVVGRE8wRkJRM1JFTERCQ1FVRk5PMEZCUVVFc1FVRkRWaXh4UWtGQlN5eFJRVUZSTzBGQlExUXNNRUpCUVUwc1EwRkJReXh0UWtGQmJVSXNRMEZCUXl4SFFVRkhMR1ZCUVdVc1EwRkJReXhEUVVGRExFdEJRVXNzUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXp0QlFVTTVSQ3d3UWtGQlRUdEJRVUZCTEVGQlExWTdRVUZEU1N3d1FrRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXp0QlFVRkJMR0ZCUTNaQ08xTkJRMG83UzBGRFNqczdRVUZGUkN4UlFVRkpMRmxCUVZrc1JVRkJSVHRCUVVOa0xHTkJRVTBzUTBGQlF5eHJRa0ZCYTBJc1EwRkJReXhIUVVGSExHVkJRV1VzUTBGQlF5eE5RVUZOTEVkQlFVY3NSMEZCUnl4SFFVRkhMR1ZCUVdVc1EwRkJReXhQUVVGUExFTkJRVU03UzBGRGRrWTdPMEZCUlVRc1YwRkJUeXhOUVVGTkxFTkJRVU03UTBGRGFrSWlMQ0ptYVd4bElqb2lZblZwYkdRdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUlFaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJdktseHVJQ0FnSUVOdmJuWmxjblFnY0dWeVkyVnVkR0ZuWlNCMGJ5QndhWGhsYkhOY2JpQWdJQ0JjYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklGQmxjbU5sYm5SaFoyVWdiMllnZEc5MFlXd2diR1Z1WjNSb1hHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJVYjNSaGJDQnNaVzVuZEdoY2Jpb3ZYRzVqYjI1emRDQndaWEpqWlc1MFZHOVFhWGhsYkhNZ1BTQW9jR1Z5WTJWdWRDd2diR1Z1WjNSb0tTQTlQaUFvY0dGeWMyVkdiRzloZENod1pYSmpaVzUwS1NBdklERXdNQ2tnS2lCc1pXNW5kR2dnS3lBbmNIZ25PMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JtZFc1amRHbHZiaUJpZFdsc1pDaHpkR0YwWlN3Z2JHVnVaM1JvS1NCN1hHNGdJQ0FnWTI5dWMzUWdjM1I1YkdWeklEMGdlMzA3WEc0Z0lDQWdZMjl1YzNRZ1pHRnphRUZ5Y21GNVUzUjViR1Z6SUQwZ2UxeHVJQ0FnSUNBZ0lDQnNaVzVuZEdnNklEQXNYRzRnSUNBZ0lDQWdJSE53WVdOcGJtYzZJR3hsYm1kMGFDQXJJQ2R3ZUNkY2JpQWdJQ0I5TzF4dUlDQWdJR3hsZENCb1lYTkVZWE5vUVhKeVlYa2dQU0JtWVd4elpUdGNibHh1SUNBZ0lHWnZjaUFvYkdWMElHdGxlU0JwYmlCemRHRjBaU2tnZTF4dUlDQWdJQ0FnSUNCcFppQW9jM1JoZEdVdWFHRnpUM2R1VUhKdmNHVnlkSGtvYTJWNUtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnZG1Gc2RXVWdQU0J6ZEdGMFpWdHJaWGxkTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0J6ZDJsMFkyZ2dLR3RsZVNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWTJGelpTQW5iR1Z1WjNSb0p6cGNiaUFnSUNBZ0lDQWdJQ0FnSUdOaGMyVWdKM053WVdOcGJtY25PbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2hoYzBSaGMyaEJjbkpoZVNBOUlIUnlkV1U3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWkdGemFFRnljbUY1VTNSNWJHVnpXMnRsZVYwZ1BTQndaWEpqWlc1MFZHOVFhWGhsYkhNb2RtRnNkV1VzSUd4bGJtZDBhQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWW5KbFlXczdYRzRnSUNBZ0lDQWdJQ0FnSUNCallYTmxJQ2R2Wm1aelpYUW5PbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSE4wZVd4bGMxc25jM1J5YjJ0bExXUmhjMmh2Wm1aelpYUW5YU0E5SUhCbGNtTmxiblJVYjFCcGVHVnNjeWd0ZG1Gc2RXVXNJR3hsYm1kMGFDazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZbkpsWVdzN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JrWldaaGRXeDBPbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSE4wZVd4bGMxdHJaWGxkSUQwZ2RtRnNkV1U3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmlBZ0lDQnBaaUFvYUdGelJHRnphRUZ5Y21GNUtTQjdYRzRnSUNBZ0lDQWdJSE4wZVd4bGMxc25jM1J5YjJ0bExXUmhjMmhoY25KaGVTZGRJRDBnWkdGemFFRnljbUY1VTNSNWJHVnpMbXhsYm1kMGFDQXJJQ2NnSnlBcklHUmhjMmhCY25KaGVWTjBlV3hsY3k1emNHRmphVzVuTzF4dUlDQWdJSDFjYmx4dUlDQWdJSEpsZEhWeWJpQnpkSGxzWlhNN1hHNTlJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hZGFwdGVyL3N2Zy1wYXRoL2J1aWxkLmpzXG4gKiogbW9kdWxlIGlkID0gNDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciByZ2IgPSBleHBvcnRzLnJnYiA9IHtcbiAgICBtaW46IDAsXG4gICAgbWF4OiAyNTUsXG4gICAgcm91bmQ6IHRydWVcbn07XG5cbnZhciBvcGFjaXR5ID0gZXhwb3J0cy5vcGFjaXR5ID0ge1xuICAgIG1pbjogMCxcbiAgICBtYXg6IDFcbn07XG5cbnZhciBwZXJjZW50ID0gZXhwb3J0cy5wZXJjZW50ID0ge1xuICAgIG1pbjogMCxcbiAgICBtYXg6IDEwMCxcbiAgICB1bml0OiAnJSdcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTl6WlhSMGFXNW5jeTlrWldaaGRXeDBMWEJ5YjNCekxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenRCUVVGUExFbEJRVTBzUjBGQlJ5eFhRVUZJTEVkQlFVY3NSMEZCUnp0QlFVTm1MRTlCUVVjc1JVRkJSU3hEUVVGRE8wRkJRMDRzVDBGQlJ5eEZRVUZGTEVkQlFVYzdRVUZEVWl4VFFVRkxMRVZCUVVVc1NVRkJTVHREUVVOa0xFTkJRVU03TzBGQlJVc3NTVUZCVFN4UFFVRlBMRmRCUVZBc1QwRkJUeXhIUVVGSE8wRkJRMjVDTEU5QlFVY3NSVUZCUlN4RFFVRkRPMEZCUTA0c1QwRkJSeXhGUVVGRkxFTkJRVU03UTBGRFZDeERRVUZET3p0QlFVVkxMRWxCUVUwc1QwRkJUeXhYUVVGUUxFOUJRVThzUjBGQlJ6dEJRVU51UWl4UFFVRkhMRVZCUVVVc1EwRkJRenRCUVVOT0xFOUJRVWNzUlVGQlJTeEhRVUZITzBGQlExSXNVVUZCU1N4RlFVRkZMRWRCUVVjN1EwRkRXaXhEUVVGRElpd2labWxzWlNJNkltUmxabUYxYkhRdGNISnZjSE11YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhSUVpYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpsZUhCdmNuUWdZMjl1YzNRZ2NtZGlJRDBnZTF4dUlDQWdJRzFwYmpvZ01DeGNiaUFnSUNCdFlYZzZJREkxTlN4Y2JpQWdJQ0J5YjNWdVpEb2dkSEoxWlZ4dWZUdGNibHh1Wlhod2IzSjBJR052Ym5OMElHOXdZV05wZEhrZ1BTQjdYRzRnSUNBZ2JXbHVPaUF3TEZ4dUlDQWdJRzFoZURvZ01WeHVmVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJSEJsY21ObGJuUWdQU0I3WEc0Z0lDQWdiV2x1T2lBd0xGeHVJQ0FnSUcxaGVEb2dNVEF3TEZ4dUlDQWdJSFZ1YVhRNklDY2xKMXh1ZlRzaVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3NldHRpbmdzL2RlZmF1bHQtcHJvcHMuanNcbiAqKiBtb2R1bGUgaWQgPSA0N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIFggPSAnWCc7XG52YXIgWSA9ICdZJztcbnZhciBBTFBIQSA9ICdBbHBoYSc7XG5cbnZhciBheGVzID0gZXhwb3J0cy5heGVzID0gW1gsIFksICdaJ107XG52YXIgcmdiID0gZXhwb3J0cy5yZ2IgPSBbJ1JlZCcsICdHcmVlbicsICdCbHVlJywgQUxQSEFdO1xudmFyIGhzbCA9IGV4cG9ydHMuaHNsID0gWydIdWUnLCAnU2F0dXJhdGlvbicsICdMaWdodG5lc3MnLCBBTFBIQV07XG52YXIgcG9zaXRpb25zID0gZXhwb3J0cy5wb3NpdGlvbnMgPSBbJ1RvcCcsICdSaWdodCcsICdCb3R0b20nLCAnTGVmdCddO1xudmFyIHNoYWRvdyA9IGV4cG9ydHMuc2hhZG93ID0gW1gsIFksICdSYWRpdXMnLCAnU3ByZWFkJywgJ0NvbG9yJ107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTl6WlhSMGFXNW5jeTlrYVdOMGFXOXVZWEo1TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096dEJRVUZCTEVsQlFVMHNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJRenRCUVVOa0xFbEJRVTBzUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXp0QlFVTmtMRWxCUVUwc1MwRkJTeXhIUVVGSExFOUJRVThzUTBGQlF6czdRVUZGWml4SlFVRk5MRWxCUVVrc1YwRkJTaXhKUVVGSkxFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRE8wRkJRM3BDTEVsQlFVMHNSMEZCUnl4WFFVRklMRWRCUVVjc1IwRkJSeXhEUVVGRExFdEJRVXNzUlVGQlJTeFBRVUZQTEVWQlFVVXNUVUZCVFN4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8wRkJRelZETEVsQlFVMHNSMEZCUnl4WFFVRklMRWRCUVVjc1IwRkJSeXhEUVVGRExFdEJRVXNzUlVGQlJTeFpRVUZaTEVWQlFVVXNWMEZCVnl4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8wRkJRM1JFTEVsQlFVMHNVMEZCVXl4WFFVRlVMRk5CUVZNc1IwRkJSeXhEUVVGRExFdEJRVXNzUlVGQlJTeFBRVUZQTEVWQlFVVXNVVUZCVVN4RlFVRkZMRTFCUVUwc1EwRkJReXhEUVVGRE8wRkJRM0pFTEVsQlFVMHNUVUZCVFN4WFFVRk9MRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNVVUZCVVN4RlFVRkZMRkZCUVZFc1JVRkJSU3hQUVVGUExFTkJRVU1zUTBGQlF5SXNJbVpwYkdVaU9pSmthV04wYVc5dVlYSjVMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwVUdWeWNua3ZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lZMjl1YzNRZ1dDQTlJQ2RZSnp0Y2JtTnZibk4wSUZrZ1BTQW5XU2M3WEc1amIyNXpkQ0JCVEZCSVFTQTlJQ2RCYkhCb1lTYzdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQmhlR1Z6SUQwZ1cxZ3NJRmtzSUNkYUoxMDdYRzVsZUhCdmNuUWdZMjl1YzNRZ2NtZGlJRDBnV3lkU1pXUW5MQ0FuUjNKbFpXNG5MQ0FuUW14MVpTY3NJRUZNVUVoQlhUdGNibVY0Y0c5eWRDQmpiMjV6ZENCb2Myd2dQU0JiSjBoMVpTY3NJQ2RUWVhSMWNtRjBhVzl1Snl3Z0oweHBaMmgwYm1WemN5Y3NJRUZNVUVoQlhUdGNibVY0Y0c5eWRDQmpiMjV6ZENCd2IzTnBkR2x2Ym5NZ1BTQmJKMVJ2Y0Njc0lDZFNhV2RvZENjc0lDZENiM1IwYjIwbkxDQW5UR1ZtZENkZE8xeHVaWGh3YjNKMElHTnZibk4wSUhOb1lXUnZkeUE5SUZ0WUxDQlpMQ0FuVW1Ga2FYVnpKeXdnSjFOd2NtVmhaQ2NzSUNkRGIyeHZjaWRkT3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3NldHRpbmdzL2RpY3Rpb25hcnkuanNcbiAqKiBtb2R1bGUgaWQgPSA0OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVFYXNpbmdGdW5jdGlvbjtcbi8qXG4gICAgTWlycm9yIGVhc2luZ1xuICAgIFxuICAgIE1pcnJvcnMgdGhlIHByb3ZpZGVkIGVhc2luZyBmdW5jdGlvbiwgdXNlZCBoZXJlIGZvciBtaXJyb3JpbmcgYW5cbiAgICBlYXNlSW4gaW50byBhbiBlYXNlSW5PdXRcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzLCBmcm9tIDAgLSAxLCBvZiBjdXJyZW50IHNoaWZ0XG4gICAgQHBhcmFtIFtmdW5jdGlvbl06IFRoZSBlYXNpbmcgZnVuY3Rpb24gdG8gbWlycm9yXG4gICAgQHJldHVybnMgW251bWJlcl06IFRoZSBlYXNpbmctYWRqdXN0ZWQgZGVsdGFcbiovXG52YXIgbWlycm9yRWFzaW5nID0gZnVuY3Rpb24gKG1ldGhvZCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAocHJvZ3Jlc3MsIHN0cmVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBwcm9ncmVzcyA8PSAwLjUgPyBtZXRob2QoMiAqIHByb2dyZXNzLCBzdHJlbmd0aCkgLyAyIDogKDIgLSBtZXRob2QoMiAqICgxIC0gcHJvZ3Jlc3MpLCBzdHJlbmd0aCkpIC8gMjtcbiAgICB9O1xufTtcblxuLypcbiAgICBSZXZlcnNlIGVhc2luZ1xuICAgIFxuICAgIFJldmVyc2VzIHRoZSBvdXRwdXQgb2YgdGhlIHByb3ZpZGVkIGVhc2luZyBmdW5jdGlvbiwgdXNlZCBmb3IgZmxpcHBpbmcgZWFzZUluXG4gICAgY3VydmUgdG8gYW4gZWFzZU91dC5cbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzLCBmcm9tIDAgLSAxLCBvZiBjdXJyZW50IHNoaWZ0XG4gICAgQHBhcmFtIFtmdW5jdGlvbl06IFRoZSBlYXNpbmcgZnVuY3Rpb24gdG8gcmV2ZXJzZVxuICAgIEByZXR1cm5zIFtudW1iZXJdOiBUaGUgZWFzaW5nLWFkanVzdGVkIGRlbHRhXG4qL1xudmFyIHJldmVyc2VFYXNpbmcgPSBmdW5jdGlvbiAobWV0aG9kKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwcm9ncmVzcywgc3RyZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIDEgLSBtZXRob2QoMSAtIHByb2dyZXNzLCBzdHJlbmd0aCk7XG4gICAgfTtcbn07XG5cbi8qXG4gICAgRWFzaW5nIGNsYXNzXG5cbiAgICBJZiBwcm92aWRlZCBlYXNpbmcgZnVuY3Rpb24sIHJldHVybnMgZWFzaW5nIGZ1bmN0aW9uIHdpdGggXG4gICAgaW4vb3V0L2luT3V0IHZhcmlhdGlvbnNcblxuICAgIElmIHByb3ZpZGVkIGZvdXIgYXJndW1lbnRzLCByZXR1cm5zIG5ldyBCZXppZXIgY2xhc3MgaW5zdGVhZC5cbiovXG5mdW5jdGlvbiBjcmVhdGVFYXNpbmdGdW5jdGlvbihtZXRob2QpIHtcbiAgICB2YXIgZWFzaW5nRnVuY3Rpb24gPSBmdW5jdGlvbiAocHJvZ3Jlc3MsIHN0cmVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBtZXRob2QocHJvZ3Jlc3MsIHN0cmVuZ3RoKTtcbiAgICB9O1xuXG4gICAgZWFzaW5nRnVuY3Rpb24uaW4gPSBmdW5jdGlvbiAocHJvZ3Jlc3MsIHN0cmVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBtZXRob2QocHJvZ3Jlc3MsIHN0cmVuZ3RoKTtcbiAgICB9O1xuICAgIGVhc2luZ0Z1bmN0aW9uLm91dCA9IHJldmVyc2VFYXNpbmcobWV0aG9kKTtcbiAgICBlYXNpbmdGdW5jdGlvbi5pbk91dCA9IG1pcnJvckVhc2luZyhtZXRob2QpO1xuXG4gICAgcmV0dXJuIGVhc2luZ0Z1bmN0aW9uO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMlZoYzJsdVp5OWpjbVZoZEdVdFpXRnphVzVuTG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096dHJRa0ZuUTNkQ0xHOUNRVUZ2UWpzN096czdPenM3T3pzN1FVRjBRalZETEVsQlFVMHNXVUZCV1N4SFFVRkhMRlZCUVVNc1RVRkJUVHRYUVVGTExGVkJRVU1zVVVGQlVTeEZRVUZGTEZGQlFWRTdaVUZCU3l4QlFVRkRMRkZCUVZFc1NVRkJTU3hIUVVGSExFZEJRVWtzVFVGQlRTeERRVUZETEVOQlFVTXNSMEZCUnl4UlFVRlJMRVZCUVVVc1VVRkJVU3hEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRTFCUVUwc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEZGQlFWRXNRMEZCUVN4QlFVRkRMRVZCUVVVc1VVRkJVU3hEUVVGRExFTkJRVUVzUjBGQlNTeERRVUZETzB0QlFVRTdRMEZCUVRzN096czdPenM3T3pzN08wRkJRVU1zUVVGWmFrc3NTVUZCVFN4aFFVRmhMRWRCUVVjc1ZVRkJReXhOUVVGTk8xZEJRVXNzVlVGQlF5eFJRVUZSTEVWQlFVVXNVVUZCVVR0bFFVRkxMRU5CUVVNc1IwRkJSeXhOUVVGTkxFTkJRVU1zUTBGQlF5eEhRVUZITEZGQlFWRXNSVUZCUlN4UlFVRlJMRU5CUVVNN1MwRkJRVHREUVVGQk96czdPenM3T3pzN08wRkJRVU1zUVVGVk9VVXNVMEZCVXl4dlFrRkJiMElzUTBGQlF5eE5RVUZOTEVWQlFVVTdRVUZEYWtRc1VVRkJTU3hqUVVGakxFZEJRVWNzVlVGQlF5eFJRVUZSTEVWQlFVVXNVVUZCVVR0bFFVRkxMRTFCUVUwc1EwRkJReXhSUVVGUkxFVkJRVVVzVVVGQlVTeERRVUZETzB0QlFVRXNRMEZCUXpzN1FVRkZlRVVzYTBKQlFXTXNRMEZCUXl4RlFVRkZMRWRCUVVjc1ZVRkJReXhSUVVGUkxFVkJRVVVzVVVGQlVUdGxRVUZMTEUxQlFVMHNRMEZCUXl4UlFVRlJMRVZCUVVVc1VVRkJVU3hEUVVGRE8wdEJRVUVzUTBGQlF6dEJRVU4yUlN4clFrRkJZeXhEUVVGRExFZEJRVWNzUjBGQlJ5eGhRVUZoTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1FVRkRNME1zYTBKQlFXTXNRMEZCUXl4TFFVRkxMRWRCUVVjc1dVRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZET3p0QlFVVTFReXhYUVVGUExHTkJRV01zUTBGQlF6dERRVU42UWlJc0ltWnBiR1VpT2lKamNtVmhkR1V0WldGemFXNW5MbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwVUdWeWNua3ZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lMeXBjYmlBZ0lDQk5hWEp5YjNJZ1pXRnphVzVuWEc0Z0lDQWdYRzRnSUNBZ1RXbHljbTl5Y3lCMGFHVWdjSEp2ZG1sa1pXUWdaV0Z6YVc1bklHWjFibU4wYVc5dUxDQjFjMlZrSUdobGNtVWdabTl5SUcxcGNuSnZjbWx1WnlCaGJseHVJQ0FnSUdWaGMyVkpiaUJwYm5SdklHRnVJR1ZoYzJWSmJrOTFkRnh1SUNBZ0lGeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVUhKdlozSmxjM01zSUdaeWIyMGdNQ0F0SURFc0lHOW1JR04xY25KbGJuUWdjMmhwWm5SY2JpQWdJQ0JBY0dGeVlXMGdXMloxYm1OMGFXOXVYVG9nVkdobElHVmhjMmx1WnlCbWRXNWpkR2x2YmlCMGJ5QnRhWEp5YjNKY2JpQWdJQ0JBY21WMGRYSnVjeUJiYm5WdFltVnlYVG9nVkdobElHVmhjMmx1WnkxaFpHcDFjM1JsWkNCa1pXeDBZVnh1S2k5Y2JtTnZibk4wSUcxcGNuSnZja1ZoYzJsdVp5QTlJQ2h0WlhSb2IyUXBJRDArSUNod2NtOW5jbVZ6Y3l3Z2MzUnlaVzVuZEdncElEMCtJQ2h3Y205bmNtVnpjeUE4UFNBd0xqVXBJRDhnYldWMGFHOWtLRElnS2lCd2NtOW5jbVZ6Y3l3Z2MzUnlaVzVuZEdncElDOGdNaUE2SUNneUlDMGdiV1YwYUc5a0tESWdLaUFvTVNBdElIQnliMmR5WlhOektTd2djM1J5Wlc1bmRHZ3BLU0F2SURJN1hHNGdJQ0FnSUNBZ0lGeHVMeXBjYmlBZ0lDQlNaWFpsY25ObElHVmhjMmx1WjF4dUlDQWdJRnh1SUNBZ0lGSmxkbVZ5YzJWeklIUm9aU0J2ZFhSd2RYUWdiMllnZEdobElIQnliM1pwWkdWa0lHVmhjMmx1WnlCbWRXNWpkR2x2Yml3Z2RYTmxaQ0JtYjNJZ1pteHBjSEJwYm1jZ1pXRnpaVWx1WEc0Z0lDQWdZM1Z5ZG1VZ2RHOGdZVzRnWldGelpVOTFkQzVjYmlBZ0lDQmNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZCeWIyZHlaWE56TENCbWNtOXRJREFnTFNBeExDQnZaaUJqZFhKeVpXNTBJSE5vYVdaMFhHNGdJQ0FnUUhCaGNtRnRJRnRtZFc1amRHbHZibDA2SUZSb1pTQmxZWE5wYm1jZ1puVnVZM1JwYjI0Z2RHOGdjbVYyWlhKelpWeHVJQ0FnSUVCeVpYUjFjbTV6SUZ0dWRXMWlaWEpkT2lCVWFHVWdaV0Z6YVc1bkxXRmthblZ6ZEdWa0lHUmxiSFJoWEc0cUwxeHVZMjl1YzNRZ2NtVjJaWEp6WlVWaGMybHVaeUE5SUNodFpYUm9iMlFwSUQwK0lDaHdjbTluY21WemN5d2djM1J5Wlc1bmRHZ3BJRDArSURFZ0xTQnRaWFJvYjJRb01TQXRJSEJ5YjJkeVpYTnpMQ0J6ZEhKbGJtZDBhQ2s3WEc1Y2JpOHFYRzRnSUNBZ1JXRnphVzVuSUdOc1lYTnpYRzVjYmlBZ0lDQkpaaUJ3Y205MmFXUmxaQ0JsWVhOcGJtY2dablZ1WTNScGIyNHNJSEpsZEhWeWJuTWdaV0Z6YVc1bklHWjFibU4wYVc5dUlIZHBkR2dnWEc0Z0lDQWdhVzR2YjNWMEwybHVUM1YwSUhaaGNtbGhkR2x2Ym5OY2JseHVJQ0FnSUVsbUlIQnliM1pwWkdWa0lHWnZkWElnWVhKbmRXMWxiblJ6TENCeVpYUjFjbTV6SUc1bGR5QkNaWHBwWlhJZ1kyeGhjM01nYVc1emRHVmhaQzVjYmlvdlhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCbWRXNWpkR2x2YmlCamNtVmhkR1ZGWVhOcGJtZEdkVzVqZEdsdmJpaHRaWFJvYjJRcElIdGNiaUFnSUNCc1pYUWdaV0Z6YVc1blJuVnVZM1JwYjI0Z1BTQW9jSEp2WjNKbGMzTXNJSE4wY21WdVozUm9LU0E5UGlCdFpYUm9iMlFvY0hKdlozSmxjM01zSUhOMGNtVnVaM1JvS1R0Y2JseHVJQ0FnSUdWaGMybHVaMFoxYm1OMGFXOXVMbWx1SUQwZ0tIQnliMmR5WlhOekxDQnpkSEpsYm1kMGFDa2dQVDRnYldWMGFHOWtLSEJ5YjJkeVpYTnpMQ0J6ZEhKbGJtZDBhQ2s3WEc0Z0lDQWdaV0Z6YVc1blJuVnVZM1JwYjI0dWIzVjBJRDBnY21WMlpYSnpaVVZoYzJsdVp5aHRaWFJvYjJRcE8xeHVJQ0FnSUdWaGMybHVaMFoxYm1OMGFXOXVMbWx1VDNWMElEMGdiV2x5Y205eVJXRnphVzVuS0cxbGRHaHZaQ2s3WEc1Y2JpQWdJQ0J5WlhSMWNtNGdaV0Z6YVc1blJuVnVZM1JwYjI0N1hHNTlYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9lYXNpbmcvY3JlYXRlLWVhc2luZy5qc1xuICoqIG1vZHVsZSBpZCA9IDQ5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBjdWJpY0Jlemllcjtcbi8qXG4gICAgQmV6aWVyIGZ1bmN0aW9uIGdlbmVyYXRvclxuICAgICAgICBcbiAgICBHYcOrdGFuIFJlbmF1ZGVhdSdzIEJlemllckVhc2luZ1xuICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9pbmRleC5qcyAgXG4gICAgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAgICBZb3UncmUgYSBoZXJvXG4gICAgXG4gICAgVXNlXG4gICAgXG4gICAgICAgIHZhciBlYXNlT3V0ID0gbmV3IEJlemllciguMTcsLjY3LC44MywuNjcpLFxuICAgICAgICAgICAgeCA9IGVhc2VPdXQoMC41KTsgLy8gcmV0dXJucyAwLjYyNy4uLlxuKi9cblxuLy8gQ29uc3RhbnRzXG52YXIgTkVXVE9OX0lURVJBVElPTlMgPSA4O1xudmFyIE5FV1RPTl9NSU5fU0xPUEUgPSAwLjAwMTtcbnZhciBTVUJESVZJU0lPTl9QUkVDSVNJT04gPSAwLjAwMDAwMDE7XG52YXIgU1VCRElWSVNJT05fTUFYX0lURVJBVElPTlMgPSAxMDtcbnZhciBLX1NQTElORV9UQUJMRV9TSVpFID0gMTE7XG52YXIgS19TQU1QTEVfU1RFUF9TSVpFID0gMS4wIC8gKEtfU1BMSU5FX1RBQkxFX1NJWkUgLSAxLjApO1xudmFyIEZMT0FUXzMyX1NVUFBPUlRFRCA9IHR5cGVvZiBGbG9hdDMyQXJyYXkgIT09ICd1bmRlZmluZWQnO1xuXG4vLyBIZWxwZXIgbWV0aG9kc1xudmFyIGEgPSBmdW5jdGlvbiAoYTEsIGEyKSB7XG4gICAgcmV0dXJuIDEuMCAtIDMuMCAqIGEyICsgMy4wICogYTE7XG59O1xudmFyIGIgPSBmdW5jdGlvbiAoYTEsIGEyKSB7XG4gICAgcmV0dXJuIDMuMCAqIGEyIC0gNi4wICogYTE7XG59O1xudmFyIGMgPSBmdW5jdGlvbiAoYTEpIHtcbiAgICByZXR1cm4gMy4wICogYTE7XG59O1xuXG52YXIgZ2V0U2xvcGUgPSBmdW5jdGlvbiAodCwgYTEsIGEyKSB7XG4gICAgcmV0dXJuIDMuMCAqIGEoYTEsIGEyKSAqIHQgKiB0ICsgMi4wICogYihhMSwgYTIpICogdCArIGMoYTEpO1xufTtcblxudmFyIGNhbGNCZXppZXIgPSBmdW5jdGlvbiAodCwgYTEsIGEyKSB7XG4gICAgcmV0dXJuICgoYShhMSwgYTIpICogdCArIGIoYTEsIGEyKSkgKiB0ICsgYyhhMSkpICogdDtcbn07XG5cbi8qXG4gICAgQ3JlYXRlIGEgY3ViaWMgYmV6aWVyIHJlc29sdmVyXG4qL1xuZnVuY3Rpb24gY3ViaWNCZXppZXIobVgxLCBtWTEsIG1YMiwgbVkyKSB7XG4gICAgdmFyIHNhbXBsZVZhbHVlcyA9IEZMT0FUXzMyX1NVUFBPUlRFRCA/IG5ldyBGbG9hdDMyQXJyYXkoS19TUExJTkVfVEFCTEVfU0laRSkgOiBuZXcgQXJyYXkoS19TUExJTkVfVEFCTEVfU0laRSk7XG4gICAgdmFyIF9wcmVjb21wdXRlZCA9IGZhbHNlO1xuXG4gICAgdmFyIGJpbmFyeVN1YmRpdmlkZSA9IGZ1bmN0aW9uIChhWCwgYUEsIGFCKSB7XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgdmFyIGN1cnJlbnRYID0gdW5kZWZpbmVkO1xuICAgICAgICB2YXIgY3VycmVudFQgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgY3VycmVudFQgPSBhQSArIChhQiAtIGFBKSAvIDIuMDtcbiAgICAgICAgICAgIGN1cnJlbnRYID0gY2FsY0JlemllcihjdXJyZW50VCwgbVgxLCBtWDIpIC0gYVg7XG4gICAgICAgICAgICBpZiAoY3VycmVudFggPiAwLjApIHtcbiAgICAgICAgICAgICAgICBhQiA9IGN1cnJlbnRUO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhQSA9IGN1cnJlbnRUO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IHdoaWxlIChNYXRoLmFicyhjdXJyZW50WCkgPiBTVUJESVZJU0lPTl9QUkVDSVNJT04gJiYgKytpIDwgU1VCRElWSVNJT05fTUFYX0lURVJBVElPTlMpO1xuXG4gICAgICAgIHJldHVybiBjdXJyZW50VDtcbiAgICB9O1xuXG4gICAgdmFyIG5ld3RvblJhcGhzb25JdGVyYXRlID0gZnVuY3Rpb24gKGFYLCBhR3Vlc3NUKSB7XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgdmFyIGN1cnJlbnRTbG9wZSA9IDA7XG4gICAgICAgIHZhciBjdXJyZW50WCA9IHVuZGVmaW5lZDtcblxuICAgICAgICBmb3IgKDsgaSA8IE5FV1RPTl9JVEVSQVRJT05TOyArK2kpIHtcbiAgICAgICAgICAgIGN1cnJlbnRTbG9wZSA9IGdldFNsb3BlKGFHdWVzc1QsIG1YMSwgbVgyKTtcblxuICAgICAgICAgICAgaWYgKGN1cnJlbnRTbG9wZSA9PT0gMC4wKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFHdWVzc1Q7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGN1cnJlbnRYID0gY2FsY0JlemllcihhR3Vlc3NULCBtWDEsIG1YMikgLSBhWDtcbiAgICAgICAgICAgIGFHdWVzc1QgLT0gY3VycmVudFggLyBjdXJyZW50U2xvcGU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYUd1ZXNzVDtcbiAgICB9O1xuXG4gICAgdmFyIGNhbGNTYW1wbGVWYWx1ZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgS19TUExJTkVfVEFCTEVfU0laRTsgKytpKSB7XG4gICAgICAgICAgICBzYW1wbGVWYWx1ZXNbaV0gPSBjYWxjQmV6aWVyKGkgKiBLX1NBTVBMRV9TVEVQX1NJWkUsIG1YMSwgbVgyKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgZ2V0VEZvclggPSBmdW5jdGlvbiAoYVgpIHtcbiAgICAgICAgdmFyIGludGVydmFsU3RhcnQgPSAwLjA7XG4gICAgICAgIHZhciBjdXJyZW50U2FtcGxlID0gMTtcbiAgICAgICAgdmFyIGxhc3RTYW1wbGUgPSBLX1NQTElORV9UQUJMRV9TSVpFIC0gMTtcbiAgICAgICAgdmFyIGRpc3QgPSAwLjA7XG4gICAgICAgIHZhciBndWVzc0ZvclQgPSAwLjA7XG4gICAgICAgIHZhciBpbml0aWFsU2xvcGUgPSAwLjA7XG5cbiAgICAgICAgZm9yICg7IGN1cnJlbnRTYW1wbGUgIT0gbGFzdFNhbXBsZSAmJiBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0gPD0gYVg7ICsrY3VycmVudFNhbXBsZSkge1xuICAgICAgICAgICAgaW50ZXJ2YWxTdGFydCArPSBLX1NBTVBMRV9TVEVQX1NJWkU7XG4gICAgICAgIH1cblxuICAgICAgICAtLWN1cnJlbnRTYW1wbGU7XG5cbiAgICAgICAgZGlzdCA9IChhWCAtIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSkgLyAoc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGUgKyAxXSAtIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSk7XG4gICAgICAgIGd1ZXNzRm9yVCA9IGludGVydmFsU3RhcnQgKyBkaXN0ICogS19TQU1QTEVfU1RFUF9TSVpFO1xuXG4gICAgICAgIGluaXRpYWxTbG9wZSA9IGdldFNsb3BlKGd1ZXNzRm9yVCwgbVgxLCBtWDIpO1xuXG4gICAgICAgIC8vIElmIHNsb3BlIGlzIGdyZWF0ZXIgdGhhbiBtaW5cbiAgICAgICAgaWYgKGluaXRpYWxTbG9wZSA+PSBORVdUT05fTUlOX1NMT1BFKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3dG9uUmFwaHNvbkl0ZXJhdGUoYVgsIGd1ZXNzRm9yVCk7XG4gICAgICAgICAgICAvLyBTbG9wZSBpcyBlcXVhbCB0byBtaW5cbiAgICAgICAgfSBlbHNlIGlmIChpbml0aWFsU2xvcGUgPT09IDAuMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBndWVzc0ZvclQ7XG4gICAgICAgICAgICAgICAgLy8gU2xvcGUgaXMgbGVzcyB0aGFuIG1pblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJpbmFyeVN1YmRpdmlkZShhWCwgaW50ZXJ2YWxTdGFydCwgaW50ZXJ2YWxTdGFydCArIEtfU0FNUExFX1NURVBfU0laRSk7XG4gICAgICAgICAgICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgcHJlY29tcHV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3ByZWNvbXB1dGVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKG1YMSAhPSBtWTEgfHwgbVgyICE9IG1ZMikge1xuICAgICAgICAgICAgY2FsY1NhbXBsZVZhbHVlcygpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHZhciByZXNvbHZlciA9IGZ1bmN0aW9uIChhWCkge1xuICAgICAgICB2YXIgcmV0dXJuVmFsdWUgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgaWYgKCFfcHJlY29tcHV0ZWQpIHtcbiAgICAgICAgICAgIHByZWNvbXB1dGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGxpbmVhciBncmFkaWVudCwgcmV0dXJuIFggYXMgVFxuICAgICAgICBpZiAobVgxID09PSBtWTEgJiYgbVgyID09PSBtWTIpIHtcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gYVg7XG5cbiAgICAgICAgICAgIC8vIElmIGF0IHN0YXJ0LCByZXR1cm4gMFxuICAgICAgICB9IGVsc2UgaWYgKGFYID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSAwO1xuXG4gICAgICAgICAgICAgICAgLy8gSWYgYXQgZW5kLCByZXR1cm4gMVxuICAgICAgICAgICAgfSBlbHNlIGlmIChhWCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IDE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSBjYWxjQmV6aWVyKGdldFRGb3JYKGFYKSwgbVkxLCBtWTIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmV0dXJuVmFsdWU7XG4gICAgfTtcblxuICAgIHJldHVybiByZXNvbHZlcjtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDJWaGMybHVaeTlqY21WaGRHVXRZbVY2YVdWeUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenRyUWtGdFEzZENMRmRCUVZjN096czdPenM3T3pzN096czdPenM3UVVGd1FtNURMRWxCUVUwc2FVSkJRV2xDTEVkQlFVY3NRMEZCUXl4RFFVRkRPMEZCUXpWQ0xFbEJRVTBzWjBKQlFXZENMRWRCUVVjc1MwRkJTeXhEUVVGRE8wRkJReTlDTEVsQlFVMHNjVUpCUVhGQ0xFZEJRVWNzVTBGQlV5eERRVUZETzBGQlEzaERMRWxCUVUwc01FSkJRVEJDTEVkQlFVY3NSVUZCUlN4RFFVRkRPMEZCUTNSRExFbEJRVTBzYlVKQlFXMUNMRWRCUVVjc1JVRkJSU3hEUVVGRE8wRkJReTlDTEVsQlFVMHNhMEpCUVd0Q0xFZEJRVWNzUjBGQlJ5eEpRVUZKTEcxQ1FVRnRRaXhIUVVGSExFZEJRVWNzUTBGQlFTeEJRVUZETEVOQlFVTTdRVUZETjBRc1NVRkJUU3hyUWtGQmEwSXNSMEZCU1N4UFFVRlBMRmxCUVZrc1MwRkJTeXhYUVVGWExFRkJRVU03T3p0QlFVRkRMRUZCUjJwRkxFbEJRVTBzUTBGQlF5eEhRVUZITEZWQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVN1YwRkJTeXhIUVVGSExFZEJRVWNzUjBGQlJ5eEhRVUZITEVWQlFVVXNSMEZCUnl4SFFVRkhMRWRCUVVjc1JVRkJSVHREUVVGQkxFTkJRVU03UVVGRGFFUXNTVUZCVFN4RFFVRkRMRWRCUVVjc1ZVRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJUdFhRVUZMTEVkQlFVY3NSMEZCUnl4RlFVRkZMRWRCUVVjc1IwRkJSeXhIUVVGSExFVkJRVVU3UTBGQlFTeERRVUZETzBGQlF6RkRMRWxCUVUwc1EwRkJReXhIUVVGSExGVkJRVU1zUlVGQlJUdFhRVUZMTEVkQlFVY3NSMEZCUnl4RlFVRkZPME5CUVVFc1EwRkJRenM3UVVGRk0wSXNTVUZCVFN4UlFVRlJMRWRCUVVjc1ZVRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVTdWMEZCU3l4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRPME5CUVVFc1EwRkJRenM3UVVGRmRFWXNTVUZCVFN4VlFVRlZMRWRCUVVjc1ZVRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVTdWMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUVN4SFFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVRXNSMEZCU1N4RFFVRkRPME5CUVVFN096czdPMEZCUVVNc1FVRkxha1VzVTBGQlV5eFhRVUZYTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTzBGQlEzQkVMRkZCUVUwc1dVRkJXU3hIUVVGSExHdENRVUZyUWl4SFFVRkhMRWxCUVVrc1dVRkJXU3hEUVVGRExHMUNRVUZ0UWl4RFFVRkRMRWRCUVVjc1NVRkJTU3hMUVVGTExFTkJRVU1zYlVKQlFXMUNMRU5CUVVNc1EwRkJRenRCUVVOcVNDeFJRVUZKTEZsQlFWa3NSMEZCUnl4TFFVRkxMRU5CUVVNN08wRkJSWHBDTEZGQlFVMHNaVUZCWlN4SFFVRkhMRlZCUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVczdRVUZEY0VNc1dVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzBGQlExWXNXVUZCU1N4UlFVRlJMRmxCUVVFc1EwRkJRenRCUVVOaUxGbEJRVWtzVVVGQlVTeFpRVUZCTEVOQlFVTTdPMEZCUldJc1YwRkJSenRCUVVORExHOUNRVUZSTEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlFTeEhRVUZKTEVkQlFVY3NRMEZCUXp0QlFVTm9ReXh2UWtGQlVTeEhRVUZITEZWQlFWVXNRMEZCUXl4UlFVRlJMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXp0QlFVTXZReXhuUWtGQlNTeFJRVUZSTEVkQlFVY3NSMEZCUnl4RlFVRkZPMEZCUTJoQ0xHdENRVUZGTEVkQlFVY3NVVUZCVVN4RFFVRkRPMkZCUTJwQ0xFMUJRVTA3UVVGRFNDeHJRa0ZCUlN4SFFVRkhMRkZCUVZFc1EwRkJRenRoUVVOcVFqdFRRVU5LTEZGQlFWRXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhSUVVGUkxFTkJRVU1zUjBGQlJ5eHhRa0ZCY1VJc1NVRkJTU3hGUVVGRkxFTkJRVU1zUjBGQlJ5d3dRa0ZCTUVJc1JVRkJSVHM3UVVGRmVrWXNaVUZCVHl4UlFVRlJMRU5CUVVNN1MwRkRia0lzUTBGQlF6czdRVUZGUml4UlFVRk5MRzlDUVVGdlFpeEhRVUZITEZWQlFVTXNSVUZCUlN4RlFVRkZMRTlCUVU4c1JVRkJTenRCUVVNeFF5eFpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1FVRkRWaXhaUVVGSkxGbEJRVmtzUjBGQlJ5eERRVUZETEVOQlFVTTdRVUZEY2tJc1dVRkJTU3hSUVVGUkxGbEJRVUVzUTBGQlF6czdRVUZGWWl4bFFVRlBMRU5CUVVNc1IwRkJSeXhwUWtGQmFVSXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSVHRCUVVNdlFpeDNRa0ZCV1N4SFFVRkhMRkZCUVZFc1EwRkJReXhQUVVGUExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRPenRCUVVVelF5eG5Ra0ZCU1N4WlFVRlpMRXRCUVVzc1IwRkJSeXhGUVVGRk8wRkJRM1JDTEhWQ1FVRlBMRTlCUVU4c1EwRkJRenRoUVVOc1FqczdRVUZGUkN4dlFrRkJVU3hIUVVGSExGVkJRVlVzUTBGQlF5eFBRVUZQTEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF6dEJRVU01UXl4dFFrRkJUeXhKUVVGSkxGRkJRVkVzUjBGQlJ5eFpRVUZaTEVOQlFVTTdVMEZEZEVNN08wRkJSVVFzWlVGQlR5eFBRVUZQTEVOQlFVTTdTMEZEYkVJc1EwRkJRenM3UVVGRlJpeFJRVUZOTEdkQ1FVRm5RaXhIUVVGSExGbEJRVTA3UVVGRE0wSXNZVUZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEcxQ1FVRnRRaXhGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTzBGQlF6RkRMSGRDUVVGWkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NWVUZCVlN4RFFVRkRMRU5CUVVNc1IwRkJSeXhyUWtGQmEwSXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU03VTBGRGJFVTdTMEZEU2l4RFFVRkRPenRCUVVWR0xGRkJRVTBzVVVGQlVTeEhRVUZITEZWQlFVTXNSVUZCUlN4RlFVRkxPMEZCUTNKQ0xGbEJRVWtzWVVGQllTeEhRVUZITEVkQlFVY3NRMEZCUXp0QlFVTjRRaXhaUVVGSkxHRkJRV0VzUjBGQlJ5eERRVUZETEVOQlFVTTdRVUZEZEVJc1dVRkJTU3hWUVVGVkxFZEJRVWNzYlVKQlFXMUNMRWRCUVVjc1EwRkJReXhEUVVGRE8wRkJRM3BETEZsQlFVa3NTVUZCU1N4SFFVRkhMRWRCUVVjc1EwRkJRenRCUVVObUxGbEJRVWtzVTBGQlV5eEhRVUZITEVkQlFVY3NRMEZCUXp0QlFVTndRaXhaUVVGSkxGbEJRVmtzUjBGQlJ5eEhRVUZITEVOQlFVTTdPMEZCUlhaQ0xHVkJRVThzWVVGQllTeEpRVUZKTEZWQlFWVXNTVUZCU1N4WlFVRlpMRU5CUVVNc1lVRkJZU3hEUVVGRExFbEJRVWtzUlVGQlJTeEZRVUZGTEVWQlFVVXNZVUZCWVN4RlFVRkZPMEZCUTNSR0xIbENRVUZoTEVsQlFVa3NhMEpCUVd0Q0xFTkJRVU03VTBGRGRrTTdPMEZCUlVRc1ZVRkJSU3hoUVVGaExFTkJRVU03TzBGQlJXaENMRmxCUVVrc1IwRkJSeXhEUVVGRExFVkJRVVVzUjBGQlJ5eFpRVUZaTEVOQlFVTXNZVUZCWVN4RFFVRkRMRU5CUVVFc1NVRkJTeXhaUVVGWkxFTkJRVU1zWVVGQllTeEhRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRmxCUVZrc1EwRkJReXhoUVVGaExFTkJRVU1zUTBGQlFTeEJRVUZETEVOQlFVTTdRVUZETVVjc2FVSkJRVk1zUjBGQlJ5eGhRVUZoTEVkQlFVY3NTVUZCU1N4SFFVRkhMR3RDUVVGclFpeERRVUZET3p0QlFVVjBSQ3h2UWtGQldTeEhRVUZITEZGQlFWRXNRMEZCUXl4VFFVRlRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF6czdPMEZCUVVNc1FVRkhOME1zV1VGQlNTeFpRVUZaTEVsQlFVa3NaMEpCUVdkQ0xFVkJRVVU3UVVGRGJFTXNiVUpCUVU4c2IwSkJRVzlDTEVOQlFVTXNSVUZCUlN4RlFVRkZMRk5CUVZNc1EwRkJRenM3UVVGQlF5eFRRVVU1UXl4TlFVRk5MRWxCUVVrc1dVRkJXU3hMUVVGTExFZEJRVWNzUlVGQlJUdEJRVU0zUWl4MVFrRkJUeXhUUVVGVE96dEJRVUZETEdGQlJYQkNMRTFCUVUwN1FVRkRTQ3d5UWtGQlR5eGxRVUZsTEVOQlFVTXNSVUZCUlN4RlFVRkZMR0ZCUVdFc1JVRkJSU3hoUVVGaExFZEJRVWNzYTBKQlFXdENMRU5CUVVNc1EwRkJRenRwUWtGRGFrWTdTMEZEU2l4RFFVRkRPenRCUVVWR0xGRkJRVTBzVlVGQlZTeEhRVUZITEZsQlFVMDdRVUZEY2tJc2IwSkJRVmtzUjBGQlJ5eEpRVUZKTEVOQlFVTTdRVUZEY0VJc1dVRkJTU3hIUVVGSExFbEJRVWtzUjBGQlJ5eEpRVUZKTEVkQlFVY3NTVUZCU1N4SFFVRkhMRVZCUVVVN1FVRkRNVUlzTkVKQlFXZENMRVZCUVVVc1EwRkJRenRUUVVOMFFqdExRVU5LTEVOQlFVTTdPMEZCUlVZc1VVRkJUU3hSUVVGUkxFZEJRVWNzVlVGQlF5eEZRVUZGTEVWQlFVczdRVUZEY2tJc1dVRkJTU3hYUVVGWExGbEJRVUVzUTBGQlF6czdRVUZGYUVJc1dVRkJTU3hEUVVGRExGbEJRVmtzUlVGQlJUdEJRVU5tTEhOQ1FVRlZMRVZCUVVVc1EwRkJRenRUUVVOb1FqczdPMEZCUVVFc1FVRkhSQ3haUVVGSkxFZEJRVWNzUzBGQlN5eEhRVUZITEVsQlFVa3NSMEZCUnl4TFFVRkxMRWRCUVVjc1JVRkJSVHRCUVVNMVFpeDFRa0ZCVnl4SFFVRkhMRVZCUVVVN096dEJRVUZETEZOQlIzQkNMRTFCUVUwc1NVRkJTU3hGUVVGRkxFdEJRVXNzUTBGQlF5eEZRVUZGTzBGQlEycENMREpDUVVGWExFZEJRVWNzUTBGQlF6czdPMEZCUVVNc1lVRkhia0lzVFVGQlRTeEpRVUZKTEVWQlFVVXNTMEZCU3l4RFFVRkRMRVZCUVVVN1FVRkRha0lzSzBKQlFWY3NSMEZCUnl4RFFVRkRMRU5CUVVNN2FVSkJSVzVDTEUxQlFVMDdRVUZEU0N3clFrRkJWeXhIUVVGSExGVkJRVlVzUTBGQlF5eFJRVUZSTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETzJsQ1FVTndSRHM3UVVGRlJDeGxRVUZQTEZkQlFWY3NRMEZCUXp0TFFVTjBRaXhEUVVGRE96dEJRVVZHTEZkQlFVOHNVVUZCVVN4RFFVRkRPME5CUTI1Q0lpd2labWxzWlNJNkltTnlaV0YwWlMxaVpYcHBaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhSUVpYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUl2S2x4dUlDQWdJRUpsZW1sbGNpQm1kVzVqZEdsdmJpQm5aVzVsY21GMGIzSmNiaUFnSUNBZ0lDQWdYRzRnSUNBZ1IySERxM1JoYmlCU1pXNWhkV1JsWVhVbmN5QkNaWHBwWlhKRllYTnBibWRjYmlBZ0lDQm9kSFJ3Y3pvdkwyZHBkR2gxWWk1amIyMHZaM0psTDJKbGVtbGxjaTFsWVhOcGJtY3ZZbXh2WWk5dFlYTjBaWEl2YVc1a1pYZ3Vhbk1nSUZ4dUlDQWdJR2gwZEhCek9pOHZaMmwwYUhWaUxtTnZiUzluY21VdlltVjZhV1Z5TFdWaGMybHVaeTlpYkc5aUwyMWhjM1JsY2k5TVNVTkZUbE5GWEc0Z0lDQWdXVzkxSjNKbElHRWdhR1Z5YjF4dUlDQWdJRnh1SUNBZ0lGVnpaVnh1SUNBZ0lGeHVJQ0FnSUNBZ0lDQjJZWElnWldGelpVOTFkQ0E5SUc1bGR5QkNaWHBwWlhJb0xqRTNMQzQyTnl3dU9ETXNMalkzS1N4Y2JpQWdJQ0FnSUNBZ0lDQWdJSGdnUFNCbFlYTmxUM1YwS0RBdU5TazdJQzh2SUhKbGRIVnlibk1nTUM0Mk1qY3VMaTVjYmlvdlhHNWNiaTh2SUVOdmJuTjBZVzUwYzF4dVkyOXVjM1FnVGtWWFZFOU9YMGxVUlZKQlZFbFBUbE1nUFNBNE8xeHVZMjl1YzNRZ1RrVlhWRTlPWDAxSlRsOVRURTlRUlNBOUlEQXVNREF4TzF4dVkyOXVjM1FnVTFWQ1JFbFdTVk5KVDA1ZlVGSkZRMGxUU1U5T0lEMGdNQzR3TURBd01EQXhPMXh1WTI5dWMzUWdVMVZDUkVsV1NWTkpUMDVmVFVGWVgwbFVSVkpCVkVsUFRsTWdQU0F4TUR0Y2JtTnZibk4wSUV0ZlUxQk1TVTVGWDFSQlFreEZYMU5KV2tVZ1BTQXhNVHRjYm1OdmJuTjBJRXRmVTBGTlVFeEZYMU5VUlZCZlUwbGFSU0E5SURFdU1DQXZJQ2hMWDFOUVRFbE9SVjlVUVVKTVJWOVRTVnBGSUMwZ01TNHdLVHRjYm1OdmJuTjBJRVpNVDBGVVh6TXlYMU5WVUZCUFVsUkZSQ0E5SUNoMGVYQmxiMllnUm14dllYUXpNa0Z5Y21GNUlDRTlQU0FuZFc1a1pXWnBibVZrSnlrN1hHNWNiaTh2SUVobGJIQmxjaUJ0WlhSb2IyUnpYRzVqYjI1emRDQmhJRDBnS0dFeExDQmhNaWtnUFQ0Z01TNHdJQzBnTXk0d0lDb2dZVElnS3lBekxqQWdLaUJoTVR0Y2JtTnZibk4wSUdJZ1BTQW9ZVEVzSUdFeUtTQTlQaUF6TGpBZ0tpQmhNaUF0SURZdU1DQXFJR0V4TzF4dVkyOXVjM1FnWXlBOUlDaGhNU2tnUFQ0Z015NHdJQ29nWVRFN1hHNWNibU52Ym5OMElHZGxkRk5zYjNCbElEMGdLSFFzSUdFeExDQmhNaWtnUFQ0Z015NHdJQ29nWVNoaE1Td2dZVElwSUNvZ2RDQXFJSFFnS3lBeUxqQWdLaUJpS0dFeExDQmhNaWtnS2lCMElDc2dZeWhoTVNrN1hHNWNibU52Ym5OMElHTmhiR05DWlhwcFpYSWdQU0FvZEN3Z1lURXNJR0V5S1NBOVBpQW9LR0VvWVRFc0lHRXlLU0FxSUhRZ0t5QmlLR0V4TENCaE1pa3BJQ29nZENBcklHTW9ZVEVwS1NBcUlIUTdYRzVjYmk4cVhHNGdJQ0FnUTNKbFlYUmxJR0VnWTNWaWFXTWdZbVY2YVdWeUlISmxjMjlzZG1WeVhHNHFMMXh1Wlhod2IzSjBJR1JsWm1GMWJIUWdablZ1WTNScGIyNGdZM1ZpYVdOQ1pYcHBaWElvYlZneExDQnRXVEVzSUcxWU1pd2diVmt5S1NCN1hHNGdJQ0FnWTI5dWMzUWdjMkZ0Y0d4bFZtRnNkV1Z6SUQwZ1JreFBRVlJmTXpKZlUxVlFVRTlTVkVWRUlEOGdibVYzSUVac2IyRjBNekpCY25KaGVTaExYMU5RVEVsT1JWOVVRVUpNUlY5VFNWcEZLU0E2SUc1bGR5QkJjbkpoZVNoTFgxTlFURWxPUlY5VVFVSk1SVjlUU1ZwRktUdGNiaUFnSUNCc1pYUWdYM0J5WldOdmJYQjFkR1ZrSUQwZ1ptRnNjMlU3WEc1Y2JpQWdJQ0JqYjI1emRDQmlhVzVoY25sVGRXSmthWFpwWkdVZ1BTQW9ZVmdzSUdGQkxDQmhRaWtnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQnNaWFFnYVNBOUlEQTdYRzRnSUNBZ0lDQWdJR3hsZENCamRYSnlaVzUwV0R0Y2JpQWdJQ0FnSUNBZ2JHVjBJR04xY25KbGJuUlVPMXh1WEc0Z0lDQWdJQ0FnSUdSdklIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOMWNuSmxiblJVSUQwZ1lVRWdLeUFvWVVJZ0xTQmhRU2tnTHlBeUxqQTdYRzRnSUNBZ0lDQWdJQ0FnSUNCamRYSnlaVzUwV0NBOUlHTmhiR05DWlhwcFpYSW9ZM1Z5Y21WdWRGUXNJRzFZTVN3Z2JWZ3lLU0F0SUdGWU8xeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHTjFjbkpsYm5SWUlENGdNQzR3S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1lVSWdQU0JqZFhKeVpXNTBWRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1lVRWdQU0JqZFhKeVpXNTBWRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmU0IzYUdsc1pTQW9UV0YwYUM1aFluTW9ZM1Z5Y21WdWRGZ3BJRDRnVTFWQ1JFbFdTVk5KVDA1ZlVGSkZRMGxUU1U5T0lDWW1JQ3NyYVNBOElGTlZRa1JKVmtsVFNVOU9YMDFCV0Y5SlZFVlNRVlJKVDA1VEtUdGNibHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdZM1Z5Y21WdWRGUTdYRzRnSUNBZ2ZUdGNibHh1SUNBZ0lHTnZibk4wSUc1bGQzUnZibEpoY0doemIyNUpkR1Z5WVhSbElEMGdLR0ZZTENCaFIzVmxjM05VS1NBOVBpQjdYRzRnSUNBZ0lDQWdJR3hsZENCcElEMGdNRHRjYmlBZ0lDQWdJQ0FnYkdWMElHTjFjbkpsYm5SVGJHOXdaU0E5SURBN1hHNGdJQ0FnSUNBZ0lHeGxkQ0JqZFhKeVpXNTBXRHRjYmx4dUlDQWdJQ0FnSUNCbWIzSWdLRHNnYVNBOElFNUZWMVJQVGw5SlZFVlNRVlJKVDA1VE95QXJLMmtwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR04xY25KbGJuUlRiRzl3WlNBOUlHZGxkRk5zYjNCbEtHRkhkV1Z6YzFRc0lHMVlNU3dnYlZneUtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0dOMWNuSmxiblJUYkc5d1pTQTlQVDBnTUM0d0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHRkhkV1Z6YzFRN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdJQ0FnSUdOMWNuSmxiblJZSUQwZ1kyRnNZMEpsZW1sbGNpaGhSM1ZsYzNOVUxDQnRXREVzSUcxWU1pa2dMU0JoV0R0Y2JpQWdJQ0FnSUNBZ0lDQWdJR0ZIZFdWemMxUWdMVDBnWTNWeWNtVnVkRmdnTHlCamRYSnlaVzUwVTJ4dmNHVTdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJoUjNWbGMzTlVPMXh1SUNBZ0lIMDdYRzVjYmlBZ0lDQmpiMjV6ZENCallXeGpVMkZ0Y0d4bFZtRnNkV1Z6SUQwZ0tDa2dQVDRnZTF4dUlDQWdJQ0FnSUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElFdGZVMUJNU1U1RlgxUkJRa3hGWDFOSldrVTdJQ3NyYVNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYzJGdGNHeGxWbUZzZFdWelcybGRJRDBnWTJGc1kwSmxlbWxsY2locElDb2dTMTlUUVUxUVRFVmZVMVJGVUY5VFNWcEZMQ0J0V0RFc0lHMVlNaWs3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5TzF4dVhHNGdJQ0FnWTI5dWMzUWdaMlYwVkVadmNsZ2dQU0FvWVZncElEMCtJSHRjYmlBZ0lDQWdJQ0FnYkdWMElHbHVkR1Z5ZG1Gc1UzUmhjblFnUFNBd0xqQTdYRzRnSUNBZ0lDQWdJR3hsZENCamRYSnlaVzUwVTJGdGNHeGxJRDBnTVR0Y2JpQWdJQ0FnSUNBZ2JHVjBJR3hoYzNSVFlXMXdiR1VnUFNCTFgxTlFURWxPUlY5VVFVSk1SVjlUU1ZwRklDMGdNVHRjYmlBZ0lDQWdJQ0FnYkdWMElHUnBjM1FnUFNBd0xqQTdYRzRnSUNBZ0lDQWdJR3hsZENCbmRXVnpjMFp2Y2xRZ1BTQXdMakE3WEc0Z0lDQWdJQ0FnSUd4bGRDQnBibWwwYVdGc1UyeHZjR1VnUFNBd0xqQTdYRzRnSUNBZ0lDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ1ptOXlJQ2c3SUdOMWNuSmxiblJUWVcxd2JHVWdJVDBnYkdGemRGTmhiWEJzWlNBbUppQnpZVzF3YkdWV1lXeDFaWE5iWTNWeWNtVnVkRk5oYlhCc1pWMGdQRDBnWVZnN0lDc3JZM1Z5Y21WdWRGTmhiWEJzWlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVc1MFpYSjJZV3hUZEdGeWRDQXJQU0JMWDFOQlRWQk1SVjlUVkVWUVgxTkpXa1U3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lDMHRZM1Z5Y21WdWRGTmhiWEJzWlR0Y2JpQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lHUnBjM1FnUFNBb1lWZ2dMU0J6WVcxd2JHVldZV3gxWlhOYlkzVnljbVZ1ZEZOaGJYQnNaVjBwSUM4Z0tITmhiWEJzWlZaaGJIVmxjMXRqZFhKeVpXNTBVMkZ0Y0d4bEt6RmRJQzBnYzJGdGNHeGxWbUZzZFdWelcyTjFjbkpsYm5SVFlXMXdiR1ZkS1R0Y2JpQWdJQ0FnSUNBZ1ozVmxjM05HYjNKVUlEMGdhVzUwWlhKMllXeFRkR0Z5ZENBcklHUnBjM1FnS2lCTFgxTkJUVkJNUlY5VFZFVlFYMU5KV2tVN1hHNGdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQnBibWwwYVdGc1UyeHZjR1VnUFNCblpYUlRiRzl3WlNobmRXVnpjMFp2Y2xRc0lHMVlNU3dnYlZneUtUdGNiaUFnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJQzh2SUVsbUlITnNiM0JsSUdseklHZHlaV0YwWlhJZ2RHaGhiaUJ0YVc1Y2JpQWdJQ0FnSUNBZ2FXWWdLR2x1YVhScFlXeFRiRzl3WlNBK1BTQk9SVmRVVDA1ZlRVbE9YMU5NVDFCRktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnYm1WM2RHOXVVbUZ3YUhOdmJrbDBaWEpoZEdVb1lWZ3NJR2QxWlhOelJtOXlWQ2s3WEc0Z0lDQWdJQ0FnSUM4dklGTnNiM0JsSUdseklHVnhkV0ZzSUhSdklHMXBibHh1SUNBZ0lDQWdJQ0I5SUdWc2MyVWdhV1lnS0dsdWFYUnBZV3hUYkc5d1pTQTlQVDBnTUM0d0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnWjNWbGMzTkdiM0pVTzF4dUlDQWdJQ0FnSUNBdkx5QlRiRzl3WlNCcGN5QnNaWE56SUhSb1lXNGdiV2x1WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z1ltbHVZWEo1VTNWaVpHbDJhV1JsS0dGWUxDQnBiblJsY25aaGJGTjBZWEowTENCcGJuUmxjblpoYkZOMFlYSjBJQ3NnUzE5VFFVMVFURVZmVTFSRlVGOVRTVnBGS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgwN1hHNWNiaUFnSUNCamIyNXpkQ0J3Y21WamIyMXdkWFJsSUQwZ0tDa2dQVDRnZTF4dUlDQWdJQ0FnSUNCZmNISmxZMjl0Y0hWMFpXUWdQU0IwY25WbE8xeHVJQ0FnSUNBZ0lDQnBaaUFvYlZneElDRTlJRzFaTVNCOGZDQnRXRElnSVQwZ2JWa3lLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpZV3hqVTJGdGNHeGxWbUZzZFdWektDazdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlPMXh1WEc0Z0lDQWdZMjl1YzNRZ2NtVnpiMngyWlhJZ1BTQW9ZVmdwSUQwK0lIdGNiaUFnSUNBZ0lDQWdiR1YwSUhKbGRIVnlibFpoYkhWbE8xeHVYRzRnSUNBZ0lDQWdJR2xtSUNnaFgzQnlaV052YlhCMWRHVmtLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQndjbVZqYjIxd2RYUmxLQ2s3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lDOHZJRWxtSUd4cGJtVmhjaUJuY21Ga2FXVnVkQ3dnY21WMGRYSnVJRmdnWVhNZ1ZGeHVJQ0FnSUNBZ0lDQnBaaUFvYlZneElEMDlQU0J0V1RFZ0ppWWdiVmd5SUQwOVBTQnRXVElwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJsWmhiSFZsSUQwZ1lWZzdYRzRnSUNBZ0lDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ0x5OGdTV1lnWVhRZ2MzUmhjblFzSUhKbGRIVnliaUF3WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0JwWmlBb1lWZ2dQVDA5SURBcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnlibFpoYkhWbElEMGdNRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQXZMeUJKWmlCaGRDQmxibVFzSUhKbGRIVnliaUF4WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0JwWmlBb1lWZ2dQVDA5SURFcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnlibFpoYkhWbElEMGdNVHRjYmx4dUlDQWdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdVZtRnNkV1VnUFNCallXeGpRbVY2YVdWeUtHZGxkRlJHYjNKWUtHRllLU3dnYlZreExDQnRXVElwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2NtVjBkWEp1Vm1Gc2RXVTdYRzRnSUNBZ2ZUdGNibHh1SUNBZ0lISmxkSFZ5YmlCeVpYTnZiSFpsY2p0Y2JuMWNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9lYXNpbmcvY3JlYXRlLWJlemllci5qc1xuICoqIG1vZHVsZSBpZCA9IDUwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vKlxuICAgIERldGVjdCBhbmQgbG9hZCBhbiBhcHByb3ByaWF0ZSBjbG9jayBzZXR0aW5nIGZvciB0aGUgZW52aXJvbm1lbnRcbiovXG5cbnZhciBoYXNSQUYgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID8gdHJ1ZSA6IGZhbHNlO1xuXG52YXIgdGljayA9IHVuZGVmaW5lZDtcblxuaWYgKGhhc1JBRikge1xuICAgIHRpY2sgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spO1xuICAgIH07XG59IGVsc2Uge1xuICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8qXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgRm9yIElFOC85IEZsaW5zdG9uZXMgYW5kIG5vbi1icm93c2VyIGVudmlyb25tZW50c1xuICAgICAgICAgICAgIFRha2VuIGZyb20gUGF1bCBJcmlzaC4gV2UndmUgc3RyaXBwZWQgb3V0IGNhbmNlbEFuaW1hdGlvbkZyYW1lIGNoZWNrcyBiZWNhdXNlIHdlIGRvbid0IGZveCB3aXRoIHRoYXRcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaHR0cDovL3BhdWxpcmlzaC5jb20vMjAxMS9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWFuaW1hdGluZy9cbiAgICAgICAgICAgIGh0dHA6Ly9teS5vcGVyYS5jb20vZW1vbGxlci9ibG9nLzIwMTEvMTIvMjAvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1lci1hbmltYXRpbmdcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbCBieSBFcmlrIE3DtmxsZXIuIGZpeGVzIGZyb20gUGF1bCBJcmlzaCBhbmQgVGlubyBaaWpkZWxcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgIE1JVCBsaWNlbnNlXG4gICAgICAgICovXG4gICAgICAgIHZhciBsYXN0VGltZSA9IDA7XG5cbiAgICAgICAgdGljayA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICB2YXIgdGltZVRvQ2FsbCA9IE1hdGgubWF4KDAsIDE2IC0gKGN1cnJlbnRUaW1lIC0gbGFzdFRpbWUpKTtcblxuICAgICAgICAgICAgbGFzdFRpbWUgPSBjdXJyZW50VGltZSArIHRpbWVUb0NhbGw7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhsYXN0VGltZSk7XG4gICAgICAgICAgICB9LCB0aW1lVG9DYWxsKTtcbiAgICAgICAgfTtcbiAgICB9KSgpO1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSB0aWNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl3Y205alpYTnpMM1JwWTJzdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3p0QlFVbEJMRWxCUVUwc1RVRkJUU3hIUVVGSExFRkJRVU1zVDBGQlR5eE5RVUZOTEV0QlFVc3NWMEZCVnl4SlFVRkpMRTFCUVUwc1EwRkJReXh4UWtGQmNVSXNSMEZCU1N4SlFVRkpMRWRCUVVjc1MwRkJTeXhEUVVGRE96dEJRVVU1Uml4SlFVRkpMRWxCUVVrc1dVRkJRU3hEUVVGRE96dEJRVVZVTEVsQlFVa3NUVUZCVFN4RlFVRkZPMEZCUTFJc1VVRkJTU3hIUVVGSExGVkJRVU1zVVVGQlVUdGxRVUZMTEUxQlFVMHNRMEZCUXl4eFFrRkJjVUlzUTBGQlF5eFJRVUZSTEVOQlFVTTdTMEZCUVN4RFFVRkRPME5CUlM5RUxFMUJRVTA3T3pzN096czdPenM3T3pzN096dEJRV1ZJTEZsQlFVa3NVVUZCVVN4SFFVRkhMRU5CUVVNc1EwRkJRenM3UVVGRmFrSXNXVUZCU1N4SFFVRkhMRlZCUVVNc1VVRkJVU3hGUVVGTE8wRkJRMnBDTEdkQ1FVRk5MRmRCUVZjc1IwRkJSeXhKUVVGSkxFbEJRVWtzUlVGQlJTeERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRPMEZCUTNwRExHZENRVUZOTEZWQlFWVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVsQlFVa3NWMEZCVnl4SFFVRkhMRkZCUVZFc1EwRkJRU3hCUVVGRExFTkJRVU1zUTBGQlF6czdRVUZGT1VRc2IwSkJRVkVzUjBGQlJ5eFhRVUZYTEVkQlFVY3NWVUZCVlN4RFFVRkRPenRCUVVWd1F5eHpRa0ZCVlN4RFFVRkRPM1ZDUVVGTkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTTdZVUZCUVN4RlFVRkZMRlZCUVZVc1EwRkJReXhEUVVGRE8xTkJRM0JFTEVOQlFVTTdPME5CUTB3N08ydENRVVZqTEVsQlFVa2lMQ0ptYVd4bElqb2lkR2xqYXk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRGQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk4cVhHNGdJQ0FnUkdWMFpXTjBJR0Z1WkNCc2IyRmtJR0Z1SUdGd2NISnZjSEpwWVhSbElHTnNiMk5ySUhObGRIUnBibWNnWm05eUlIUm9aU0JsYm5acGNtOXViV1Z1ZEZ4dUtpOWNibHh1WTI5dWMzUWdhR0Z6VWtGR0lEMGdLSFI1Y0dWdlppQjNhVzVrYjNjZ0lUMDlJQ2QxYm1SbFptbHVaV1FuSUNZbUlIZHBibVJ2ZHk1eVpYRjFaWE4wUVc1cGJXRjBhVzl1Um5KaGJXVXBJRDhnZEhKMVpTQTZJR1poYkhObE8xeHVYRzVzWlhRZ2RHbGphenRjYmx4dWFXWWdLR2hoYzFKQlJpa2dlMXh1SUNBZ0lIUnBZMnNnUFNBb1kyRnNiR0poWTJzcElEMCtJSGRwYm1SdmR5NXlaWEYxWlhOMFFXNXBiV0YwYVc5dVJuSmhiV1VvWTJGc2JHSmhZMnNwTzF4dVhHNTlJR1ZzYzJVZ2UxeHVJQ0FnSUM4cVhHNGdJQ0FnSUNBZ0lISmxjWFZsYzNSQmJtbHRZWFJwYjI1R2NtRnRaU0J3YjJ4NVptbHNiRnh1SUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnUm05eUlFbEZPQzg1SUVac2FXNXpkRzl1WlhNZ1lXNWtJRzV2YmkxaWNtOTNjMlZ5SUdWdWRtbHliMjV0Wlc1MGMxeHVYRzRnSUNBZ0lDQWdJRlJoYTJWdUlHWnliMjBnVUdGMWJDQkpjbWx6YUM0Z1YyVW5kbVVnYzNSeWFYQndaV1FnYjNWMElHTmhibU5sYkVGdWFXMWhkR2x2YmtaeVlXMWxJR05vWldOcmN5QmlaV05oZFhObElIZGxJR1J2YmlkMElHWnZlQ0IzYVhSb0lIUm9ZWFJjYmlBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUdoMGRIQTZMeTl3WVhWc2FYSnBjMmd1WTI5dEx6SXdNVEV2Y21WeGRXVnpkR0Z1YVcxaGRHbHZibVp5WVcxbExXWnZjaTF6YldGeWRDMWhibWx0WVhScGJtY3ZYRzRnSUNBZ0lDQWdJR2gwZEhBNkx5OXRlUzV2Y0dWeVlTNWpiMjB2WlcxdmJHeGxjaTlpYkc5bkx6SXdNVEV2TVRJdk1qQXZjbVZ4ZFdWemRHRnVhVzFoZEdsdmJtWnlZVzFsTFdadmNpMXpiV0Z5ZEMxbGNpMWhibWx0WVhScGJtZGNiaUFnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0J5WlhGMVpYTjBRVzVwYldGMGFXOXVSbkpoYldVZ2NHOXNlV1pwYkd3Z1lua2dSWEpwYXlCTnc3WnNiR1Z5TGlCbWFYaGxjeUJtY205dElGQmhkV3dnU1hKcGMyZ2dZVzVrSUZScGJtOGdXbWxxWkdWc1hHNGdJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdUVWxVSUd4cFkyVnVjMlZjYmlBZ0lDQXFMMXh1SUNBZ0lHeGxkQ0JzWVhOMFZHbHRaU0E5SURBN1hHNWNiaUFnSUNCMGFXTnJJRDBnS0dOaGJHeGlZV05yS1NBOVBpQjdYRzRnSUNBZ0lDQWdJR052Ym5OMElHTjFjbkpsYm5SVWFXMWxJRDBnYm1WM0lFUmhkR1VvS1M1blpYUlVhVzFsS0NrN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUhScGJXVlViME5oYkd3Z1BTQk5ZWFJvTG0xaGVDZ3dMQ0F4TmlBdElDaGpkWEp5Wlc1MFZHbHRaU0F0SUd4aGMzUlVhVzFsS1NrN1hHNWNiaUFnSUNBZ0lDQWdiR0Z6ZEZScGJXVWdQU0JqZFhKeVpXNTBWR2x0WlNBcklIUnBiV1ZVYjBOaGJHdzdYRzVjYmlBZ0lDQWdJQ0FnYzJWMFZHbHRaVzkxZENnb0tTQTlQaUJqWVd4c1ltRmpheWhzWVhOMFZHbHRaU2tzSUhScGJXVlViME5oYkd3cE8xeHVJQ0FnSUgwN1hHNTlYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJSFJwWTJzN0lsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3Byb2Nlc3MvdGljay5qc1xuICoqIG1vZHVsZSBpZCA9IDUxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8vIFtpbnRdOiBJbmNyZW1lbnRlZCBmb3IgZWFjaCBuZXcgcnVubmluZyBwcm9jZXNzXG52YXIgY3VycmVudFByb2Nlc3NJZCA9IDA7XG5cbi8vIFtpbnRdOiBOdW1iZXIgb2YgYWxsIHJ1bm5pbmcgcHJvY2Vzc2VzXG52YXIgdG90YWxSdW5uaW5nQ291bnQgPSAwO1xuXG4vLyBbaW50XTogTnVtYmVyIG9mIHJ1bm5pbmcgcHJvY2Vzc2VzIGV4Y2x1ZGluZyBiYWNrZ3JvdW5kIHByb2Nlc3Nlc1xudmFyIG5vbkJhY2tncm91bmRSdW5uaW5nQ291bnQgPSAwO1xuXG4vLyBbYXJyYXldOiBBcnJheSBvZiBydW5uaW5nIHByb2Nlc3MgSURzXG52YXIgcnVubmluZ0lkcyA9IFtdO1xuXG4vLyBbb2JqZWN0XTogTWFwIG9mIHJ1bm5pbmcgcHJvY2Vzc2VzXG52YXIgYWN0aXZlUHJvY2Vzc2VzID0ge307XG5cbi8vIFthcnJheV06IEFycmF5IG9mIHByb2Nlc3MgSURzIHF1ZXVlZCBmb3IgYWN0aXZhdGlvblxudmFyIGFjdGl2YXRlUXVldWUgPSBbXTtcblxuLy8gW2FycmF5XTogQXJyYXkgb2YgcHJvY2VzcyBJRHMgcXVldWVkIGZvciBkZWFjdGl2YXRpb25cbnZhciBkZWFjdGl2YXRlUXVldWUgPSBbXTtcblxuLypcbiAgICBVcGRhdGUgYWN0aXZhdGUvZGVhY3RpdmF0ZSBxdWV1ZXNcblxuICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgIEBwYXJhbSBbYXJyYXldXG4gICAgQHBhcmFtIFthcnJheV1cbiovXG52YXIgdXBkYXRlUXVldWVzID0gZnVuY3Rpb24gKGlkLCBpbkxpc3QsIG91dExpc3QpIHtcbiAgICB2YXIgaW5Qb3NpdGlvbiA9IGluTGlzdC5pbmRleE9mKGlkKTtcbiAgICB2YXIgb3V0UG9zaXRpb24gPSBvdXRMaXN0LmluZGV4T2YoaWQpO1xuXG4gICAgaWYgKGluUG9zaXRpb24gPT09IC0xKSB7XG4gICAgICAgIGluTGlzdC5wdXNoKGlkKTtcbiAgICB9XG5cbiAgICBpZiAob3V0UG9zaXRpb24gPiAtMSkge1xuICAgICAgICBvdXRMaXN0LnNwbGljZShvdXRQb3NpdGlvbiwgMSk7XG4gICAgfVxufTtcblxuLypcbiAgICBVcGRhdGUgcnVubmluZ1xuXG4gICAgW2Jvb2xlYW5dOiBgdHJ1ZWAgdG8gYWRkXG4gICAgW2Jvb2xlYW5dOiBgdHJ1ZWAgaWYgbGF6eVxuKi9cbnZhciB1cGRhdGVSdW5uaW5nQ291bnQgPSBmdW5jdGlvbiAoYWRkLCBpc0xhenkpIHtcbiAgICB2YXIgbW9kaWZ5ID0gYWRkID8gMSA6IC0xO1xuXG4gICAgdG90YWxSdW5uaW5nQ291bnQgKz0gbW9kaWZ5O1xuXG4gICAgaWYgKCFpc0xhenkpIHtcbiAgICAgICAgbm9uQmFja2dyb3VuZFJ1bm5pbmdDb3VudCArPSBtb2RpZnk7XG4gICAgfVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGFjdGl2ZVByb2Nlc3NlczogYWN0aXZlUHJvY2Vzc2VzLFxuXG4gICAgLy8gQWN0aXZhdGUgYSBwcm9jZXNzXG4gICAgYWN0aXZhdGU6IGZ1bmN0aW9uIChpZCwgcHJvY2Vzcykge1xuICAgICAgICBhY3RpdmVQcm9jZXNzZXNbaWRdID0gcHJvY2VzcztcbiAgICAgICAgcHJvY2Vzcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIHVwZGF0ZVF1ZXVlcyhpZCwgYWN0aXZhdGVRdWV1ZSwgZGVhY3RpdmF0ZVF1ZXVlKTtcbiAgICB9LFxuXG4gICAgLy8gRGVhY3RpdmF0ZSBhIHByb2Nlc3NcbiAgICBkZWFjdGl2YXRlOiBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgcHJvY2Vzcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB1cGRhdGVRdWV1ZXMoaWQsIGRlYWN0aXZhdGVRdWV1ZSwgYWN0aXZhdGVRdWV1ZSk7XG4gICAgfSxcblxuICAgIC8vIE51bWJlciBiYWNrZ3JvdW5kIHByb2Nlc3Nlc1xuICAgIGdldE5vbkJhY2tncm91bmRSdW5uaW5nQ291bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5vbkJhY2tncm91bmRSdW5uaW5nQ291bnQ7XG4gICAgfSxcblxuICAgIC8vIEluY3JlbWVudCBjdXJyZW50IHByb2Nlc3MgSUQgYW5kIHJldHVyblxuICAgIGdldFByb2Nlc3NJZDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gY3VycmVudFByb2Nlc3NJZCsrO1xuICAgIH0sXG5cbiAgICAvLyBSZXNvbHZlIGFjdGl2YXRlL2RlYWN0aXZhdGUgcHJvY2Vzc2VzIGFuZCByZXR1cm4gYWN0aXZlIGlkc1xuICAgIGdldEFjdGl2ZUlkczogZnVuY3Rpb24gKCkge1xuICAgICAgICAvKlxuICAgICAgICAgICAgUHJvY2VzcyBkZWFjdGl2YXRlIHF1ZXVlXG4gICAgICAgICovXG4gICAgICAgIHZhciBkZWFjdGl2YXRlUXVldWVMZW5ndGggPSBkZWFjdGl2YXRlUXVldWUubGVuZ3RoO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGVhY3RpdmF0ZVF1ZXVlTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBpZCA9IGRlYWN0aXZhdGVRdWV1ZVtpXTtcbiAgICAgICAgICAgIHZhciBhY3RpdmVJZEluZGV4ID0gcnVubmluZ0lkcy5pbmRleE9mKGlkKTtcbiAgICAgICAgICAgIHZhciBfcHJvY2VzcyA9IGFjdGl2ZVByb2Nlc3Nlc1tpZF07XG5cbiAgICAgICAgICAgIC8vIElmIHRoaXMgaXMgYSBydW5uaW5nIHByb2Nlc3MsIGRlYWN0aXZhdGVcbiAgICAgICAgICAgIGlmIChhY3RpdmVJZEluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICBydW5uaW5nSWRzLnNwbGljZShhY3RpdmVJZEluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVSdW5uaW5nQ291bnQoZmFsc2UsIF9wcm9jZXNzLmlzTGF6eSk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGFjdGl2ZVByb2Nlc3Nlc1tpZF07XG5cbiAgICAgICAgICAgICAgICBpZiAoX3Byb2Nlc3Mub25EZWFjdGl2YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIF9wcm9jZXNzLm9uRGVhY3RpdmF0ZShfcHJvY2Vzcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLypcbiAgICAgICAgICAgIEVtcHR5IGRlYWN0aXZhdGUgcXVldWUuIFdlIHVzZSBgQXJyYXkuc3BsaWNlYCBiZWNhdXNlIGl0IGRvZXNuJ3RcbiAgICAgICAgICAgIHdvcmtzIG9uIHRoZSBvcmlnaW5hbCBhcnJheSBzbyB3ZSBkb24ndCBoYXZlIHRvIGdhcmJhZ2UgY29sbGVjdCBhbnl0aGluZ1xuICAgICAgICAqL1xuICAgICAgICBkZWFjdGl2YXRlUXVldWUuc3BsaWNlKDAsIGRlYWN0aXZhdGVRdWV1ZUxlbmd0aCk7XG5cbiAgICAgICAgLypcbiAgICAgICAgICAgIFByb2Nlc3MgYWN0aXZhdGUgcXVldWVcbiAgICAgICAgKi9cbiAgICAgICAgdmFyIGFjdGl2YXRlUXVldWVMZW5ndGggPSBhY3RpdmF0ZVF1ZXVlLmxlbmd0aDtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFjdGl2YXRlUXVldWVMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGlkID0gYWN0aXZhdGVRdWV1ZVtpXTtcbiAgICAgICAgICAgIHZhciBhY3RpdmVJZEluZGV4ID0gcnVubmluZ0lkcy5pbmRleE9mKGlkKTtcbiAgICAgICAgICAgIHZhciBfcHJvY2VzczIgPSBhY3RpdmVQcm9jZXNzZXNbaWRdO1xuXG4gICAgICAgICAgICAvLyBJZiBwcm9jZXNzIGlzbid0IGFscmVhZHkgcnVubmluZywgYWN0aXZhdGVcbiAgICAgICAgICAgIGlmIChhY3RpdmVJZEluZGV4ID09PSAtMSAmJiBfcHJvY2VzczIpIHtcbiAgICAgICAgICAgICAgICBpZiAoX3Byb2Nlc3MyLmlzUHJpb3JpdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ0lkcy51bnNoaWZ0KGlkKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBydW5uaW5nSWRzLnB1c2goaWQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHVwZGF0ZVJ1bm5pbmdDb3VudCh0cnVlLCBfcHJvY2VzczIuaXNMYXp5KTtcblxuICAgICAgICAgICAgICAgIGlmIChfcHJvY2VzczIub25BY3RpdmF0ZSkge1xuICAgICAgICAgICAgICAgICAgICBfcHJvY2VzczIub25BY3RpdmF0ZShfcHJvY2VzczIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGFjdGl2YXRlUXVldWUuc3BsaWNlKDAsIGFjdGl2YXRlUXVldWVMZW5ndGgpO1xuXG4gICAgICAgIHJldHVybiBydW5uaW5nSWRzO1xuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXdjbTlqWlhOekwyMWhibUZuWlhJdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenRCUVVOQkxFbEJRVWtzWjBKQlFXZENMRWRCUVVjc1EwRkJRenM3TzBGQlFVTXNRVUZIZWtJc1NVRkJTU3hwUWtGQmFVSXNSMEZCUnl4RFFVRkRPenM3UVVGQlF5eEJRVWN4UWl4SlFVRkpMSGxDUVVGNVFpeEhRVUZITEVOQlFVTTdPenRCUVVGRExFRkJSMnhETEVsQlFVMHNWVUZCVlN4SFFVRkhMRVZCUVVVN096dEJRVUZETEVGQlIzUkNMRWxCUVUwc1pVRkJaU3hIUVVGSExFVkJRVVU3T3p0QlFVRkRMRUZCUnpOQ0xFbEJRVTBzWVVGQllTeEhRVUZITEVWQlFVVTdPenRCUVVGRExFRkJSM3BDTEVsQlFVMHNaVUZCWlN4SFFVRkhMRVZCUVVVN096czdPenM3T3p0QlFVRkRMRUZCVXpOQ0xFbEJRVTBzV1VGQldTeEhRVUZITEZWQlFVTXNSVUZCUlN4RlFVRkZMRTFCUVUwc1JVRkJSU3hQUVVGUExFVkJRVXM3UVVGRE1VTXNVVUZCVFN4VlFVRlZMRWRCUVVjc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXp0QlFVTjBReXhSUVVGTkxGZEJRVmNzUjBGQlJ5eFBRVUZQTEVOQlFVTXNUMEZCVHl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE96dEJRVVY0UXl4UlFVRkpMRlZCUVZVc1MwRkJTeXhEUVVGRExFTkJRVU1zUlVGQlJUdEJRVU51UWl4alFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzB0QlEyNUNPenRCUVVWRUxGRkJRVWtzVjBGQlZ5eEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZPMEZCUTJ4Q0xHVkJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8wdEJRMnhETzBOQlEwbzdPenM3T3pzN08wRkJRVU1zUVVGUlJpeEpRVUZOTEd0Q1FVRnJRaXhIUVVGSExGVkJRVU1zUjBGQlJ5eEZRVUZGTEUxQlFVMHNSVUZCU3p0QlFVTjRReXhSUVVGTkxFMUJRVTBzUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE96dEJRVVUxUWl4eFFrRkJhVUlzU1VGQlNTeE5RVUZOTEVOQlFVTTdPMEZCUlRWQ0xGRkJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVTdRVUZEVkN4cFEwRkJlVUlzU1VGQlNTeE5RVUZOTEVOQlFVTTdTMEZEZGtNN1EwRkRTaXhEUVVGRE96dHJRa0ZGWVR0QlFVTllMRzFDUVVGbExFVkJRV1lzWlVGQlpUczdPMEZCUjJZc1dVRkJVU3hGUVVGRkxGVkJRVU1zUlVGQlJTeEZRVUZGTEU5QlFVOHNSVUZCU3p0QlFVTjJRaXgxUWtGQlpTeERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRTlCUVU4c1EwRkJRenRCUVVNNVFpeGxRVUZQTEVOQlFVTXNVVUZCVVN4SFFVRkhMRWxCUVVrc1EwRkJRenRCUVVONFFpeHZRa0ZCV1N4RFFVRkRMRVZCUVVVc1JVRkJSU3hoUVVGaExFVkJRVVVzWlVGQlpTeERRVUZETEVOQlFVTTdTMEZEY0VRN096dEJRVWRFTEdOQlFWVXNSVUZCUlN4VlFVRkRMRVZCUVVVc1JVRkJTenRCUVVOb1FpeGxRVUZQTEVOQlFVTXNVVUZCVVN4SFFVRkhMRXRCUVVzc1EwRkJRenRCUVVONlFpeHZRa0ZCV1N4RFFVRkRMRVZCUVVVc1JVRkJSU3hsUVVGbExFVkJRVVVzWVVGQllTeERRVUZETEVOQlFVTTdTMEZEY0VRN096dEJRVWRFTEdkRFFVRTBRaXhGUVVGRk8yVkJRVTBzZVVKQlFYbENPMHRCUVVFN096dEJRVWMzUkN4blFrRkJXU3hGUVVGRk8yVkJRVTBzWjBKQlFXZENMRVZCUVVVN1MwRkJRVHM3TzBGQlIzUkRMR2RDUVVGWkxFVkJRVVVzV1VGQlRUczdPenRCUVVsb1FpeFpRVUZOTEhGQ1FVRnhRaXhIUVVGSExHVkJRV1VzUTBGQlF5eE5RVUZOTEVOQlFVTTdPMEZCUlhKRUxHRkJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXh4UWtGQmNVSXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRCUVVNMVF5eG5Ra0ZCVFN4RlFVRkZMRWRCUVVjc1pVRkJaU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBGQlF6bENMR2RDUVVGTkxHRkJRV0VzUjBGQlJ5eFZRVUZWTEVOQlFVTXNUMEZCVHl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8wRkJRemRETEdkQ1FVRk5MRkZCUVU4c1IwRkJSeXhsUVVGbExFTkJRVU1zUlVGQlJTeERRVUZET3pzN1FVRkJReXhCUVVkd1F5eG5Ra0ZCU1N4aFFVRmhMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVU3UVVGRGNFSXNNRUpCUVZVc1EwRkJReXhOUVVGTkxFTkJRVU1zWVVGQllTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUTNCRExHdERRVUZyUWl4RFFVRkRMRXRCUVVzc1JVRkJSU3hSUVVGUExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdRVUZETVVNc2RVSkJRVThzWlVGQlpTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPenRCUVVVelFpeHZRa0ZCU1N4UlFVRlBMRU5CUVVNc1dVRkJXU3hGUVVGRk8wRkJRM1JDTERSQ1FVRlBMRU5CUVVNc1dVRkJXU3hEUVVGRExGRkJRVThzUTBGQlF5eERRVUZETzJsQ1FVTnFRenRoUVVOS08xTkJRMG83T3pzN096dEJRVUZCTEVGQlRVUXNkVUpCUVdVc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eEZRVUZGTEhGQ1FVRnhRaXhEUVVGRE96czdPenRCUVVGRExFRkJTMnBFTEZsQlFVMHNiVUpCUVcxQ0xFZEJRVWNzWVVGQllTeERRVUZETEUxQlFVMHNRMEZCUXpzN1FVRkZha1FzWVVGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExHMUNRVUZ0UWl4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8wRkJRekZETEdkQ1FVRk5MRVZCUVVVc1IwRkJSeXhoUVVGaExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdRVUZETlVJc1owSkJRVTBzWVVGQllTeEhRVUZITEZWQlFWVXNRMEZCUXl4UFFVRlBMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03UVVGRE4wTXNaMEpCUVUwc1UwRkJUeXhIUVVGSExHVkJRV1VzUTBGQlF5eEZRVUZGTEVOQlFVTTdPenRCUVVGRExFRkJSM0JETEdkQ1FVRkpMR0ZCUVdFc1MwRkJTeXhEUVVGRExFTkJRVU1zU1VGQlNTeFRRVUZQTEVWQlFVVTdRVUZEYWtNc2IwSkJRVWtzVTBGQlR5eERRVUZETEZWQlFWVXNSVUZCUlR0QlFVTndRaXc0UWtGQlZTeERRVUZETEU5QlFVOHNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenRwUWtGRE1VSXNUVUZCVFR0QlFVTklMRGhDUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMmxDUVVOMlFqczdRVUZGUkN4clEwRkJhMElzUTBGQlF5eEpRVUZKTEVWQlFVVXNVMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE96dEJRVVY2UXl4dlFrRkJTU3hUUVVGUExFTkJRVU1zVlVGQlZTeEZRVUZGTzBGQlEzQkNMRFpDUVVGUExFTkJRVU1zVlVGQlZTeERRVUZETEZOQlFVOHNRMEZCUXl4RFFVRkRPMmxDUVVNdlFqdGhRVU5LTzFOQlEwbzdPMEZCUlVRc2NVSkJRV0VzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RlFVRkZMRzFDUVVGdFFpeERRVUZETEVOQlFVTTdPMEZCUlRkRExHVkJRVThzVlVGQlZTeERRVUZETzB0QlEzSkNPME5CUTBvaUxDSm1hV3hsSWpvaWJXRnVZV2RsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRGQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk4dklGdHBiblJkT2lCSmJtTnlaVzFsYm5SbFpDQm1iM0lnWldGamFDQnVaWGNnY25WdWJtbHVaeUJ3Y205alpYTnpYRzVzWlhRZ1kzVnljbVZ1ZEZCeWIyTmxjM05KWkNBOUlEQTdYRzVjYmk4dklGdHBiblJkT2lCT2RXMWlaWElnYjJZZ1lXeHNJSEoxYm01cGJtY2djSEp2WTJWemMyVnpYRzVzWlhRZ2RHOTBZV3hTZFc1dWFXNW5RMjkxYm5RZ1BTQXdPMXh1WEc0dkx5QmJhVzUwWFRvZ1RuVnRZbVZ5SUc5bUlISjFibTVwYm1jZ2NISnZZMlZ6YzJWeklHVjRZMngxWkdsdVp5QmlZV05yWjNKdmRXNWtJSEJ5YjJObGMzTmxjMXh1YkdWMElHNXZia0poWTJ0bmNtOTFibVJTZFc1dWFXNW5RMjkxYm5RZ1BTQXdPMXh1WEc0dkx5QmJZWEp5WVhsZE9pQkJjbkpoZVNCdlppQnlkVzV1YVc1bklIQnliMk5sYzNNZ1NVUnpYRzVqYjI1emRDQnlkVzV1YVc1blNXUnpJRDBnVzEwN1hHNWNiaTh2SUZ0dlltcGxZM1JkT2lCTllYQWdiMllnY25WdWJtbHVaeUJ3Y205alpYTnpaWE5jYm1OdmJuTjBJR0ZqZEdsMlpWQnliMk5sYzNObGN5QTlJSHQ5TzF4dVhHNHZMeUJiWVhKeVlYbGRPaUJCY25KaGVTQnZaaUJ3Y205alpYTnpJRWxFY3lCeGRXVjFaV1FnWm05eUlHRmpkR2wyWVhScGIyNWNibU52Ym5OMElHRmpkR2wyWVhSbFVYVmxkV1VnUFNCYlhUdGNibHh1THk4Z1cyRnljbUY1WFRvZ1FYSnlZWGtnYjJZZ2NISnZZMlZ6Y3lCSlJITWdjWFZsZFdWa0lHWnZjaUJrWldGamRHbDJZWFJwYjI1Y2JtTnZibk4wSUdSbFlXTjBhWFpoZEdWUmRXVjFaU0E5SUZ0ZE8xeHVYRzR2S2x4dUlDQWdJRlZ3WkdGMFpTQmhZM1JwZG1GMFpTOWtaV0ZqZEdsMllYUmxJSEYxWlhWbGMxeHVYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkWEc0Z0lDQWdRSEJoY21GdElGdGhjbkpoZVYxY2JpQWdJQ0JBY0dGeVlXMGdXMkZ5Y21GNVhWeHVLaTljYm1OdmJuTjBJSFZ3WkdGMFpWRjFaWFZsY3lBOUlDaHBaQ3dnYVc1TWFYTjBMQ0J2ZFhSTWFYTjBLU0E5UGlCN1hHNGdJQ0FnWTI5dWMzUWdhVzVRYjNOcGRHbHZiaUE5SUdsdVRHbHpkQzVwYm1SbGVFOW1LR2xrS1R0Y2JpQWdJQ0JqYjI1emRDQnZkWFJRYjNOcGRHbHZiaUE5SUc5MWRFeHBjM1F1YVc1a1pYaFBaaWhwWkNrN1hHNWNiaUFnSUNCcFppQW9hVzVRYjNOcGRHbHZiaUE5UFQwZ0xURXBJSHRjYmlBZ0lDQWdJQ0FnYVc1TWFYTjBMbkIxYzJnb2FXUXBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHbG1JQ2h2ZFhSUWIzTnBkR2x2YmlBK0lDMHhLU0I3WEc0Z0lDQWdJQ0FnSUc5MWRFeHBjM1F1YzNCc2FXTmxLRzkxZEZCdmMybDBhVzl1TENBeEtUdGNiaUFnSUNCOVhHNTlPMXh1WEc0dktseHVJQ0FnSUZWd1pHRjBaU0J5ZFc1dWFXNW5YRzVjYmlBZ0lDQmJZbTl2YkdWaGJsMDZJR0IwY25WbFlDQjBieUJoWkdSY2JpQWdJQ0JiWW05dmJHVmhibDA2SUdCMGNuVmxZQ0JwWmlCc1lYcDVYRzRxTDF4dVkyOXVjM1FnZFhCa1lYUmxVblZ1Ym1sdVowTnZkVzUwSUQwZ0tHRmtaQ3dnYVhOTVlYcDVLU0E5UGlCN1hHNGdJQ0FnWTI5dWMzUWdiVzlrYVdaNUlEMGdZV1JrSUQ4Z01TQTZJQzB4TzF4dVhHNGdJQ0FnZEc5MFlXeFNkVzV1YVc1blEyOTFiblFnS3owZ2JXOWthV1o1TzF4dVhHNGdJQ0FnYVdZZ0tDRnBjMHhoZW5rcElIdGNiaUFnSUNBZ0lDQWdibTl1UW1GamEyZHliM1Z1WkZKMWJtNXBibWREYjNWdWRDQXJQU0J0YjJScFpuazdYRzRnSUNBZ2ZWeHVmVHRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnZTF4dUlDQWdJR0ZqZEdsMlpWQnliMk5sYzNObGN5eGNibHh1SUNBZ0lDOHZJRUZqZEdsMllYUmxJR0VnY0hKdlkyVnpjMXh1SUNBZ0lHRmpkR2wyWVhSbE9pQW9hV1FzSUhCeWIyTmxjM01wSUQwK0lIdGNiaUFnSUNBZ0lDQWdZV04wYVhabFVISnZZMlZ6YzJWelcybGtYU0E5SUhCeWIyTmxjM003WEc0Z0lDQWdJQ0FnSUhCeWIyTmxjM011YVhOQlkzUnBkbVVnUFNCMGNuVmxPMXh1SUNBZ0lDQWdJQ0IxY0dSaGRHVlJkV1YxWlhNb2FXUXNJR0ZqZEdsMllYUmxVWFZsZFdVc0lHUmxZV04wYVhaaGRHVlJkV1YxWlNrN1hHNGdJQ0FnZlN4Y2JseHVJQ0FnSUM4dklFUmxZV04wYVhaaGRHVWdZU0J3Y205alpYTnpYRzRnSUNBZ1pHVmhZM1JwZG1GMFpUb2dLR2xrS1NBOVBpQjdYRzRnSUNBZ0lDQWdJSEJ5YjJObGMzTXVhWE5CWTNScGRtVWdQU0JtWVd4elpUdGNiaUFnSUNBZ0lDQWdkWEJrWVhSbFVYVmxkV1Z6S0dsa0xDQmtaV0ZqZEdsMllYUmxVWFZsZFdVc0lHRmpkR2wyWVhSbFVYVmxkV1VwTzF4dUlDQWdJSDBzWEc1Y2JpQWdJQ0F2THlCT2RXMWlaWElnWW1GamEyZHliM1Z1WkNCd2NtOWpaWE56WlhOY2JpQWdJQ0JuWlhST2IyNUNZV05yWjNKdmRXNWtVblZ1Ym1sdVowTnZkVzUwT2lBb0tTQTlQaUJ1YjI1Q1lXTnJaM0p2ZFc1a1VuVnVibWx1WjBOdmRXNTBMRnh1WEc0Z0lDQWdMeThnU1c1amNtVnRaVzUwSUdOMWNuSmxiblFnY0hKdlkyVnpjeUJKUkNCaGJtUWdjbVYwZFhKdVhHNGdJQ0FnWjJWMFVISnZZMlZ6YzBsa09pQW9LU0E5UGlCamRYSnlaVzUwVUhKdlkyVnpjMGxrS3lzc1hHNWNiaUFnSUNBdkx5QlNaWE52YkhabElHRmpkR2wyWVhSbEwyUmxZV04wYVhaaGRHVWdjSEp2WTJWemMyVnpJR0Z1WkNCeVpYUjFjbTRnWVdOMGFYWmxJR2xrYzF4dUlDQWdJR2RsZEVGamRHbDJaVWxrY3pvZ0tDa2dQVDRnZTF4dUlDQWdJQ0FnSUNBdktseHVJQ0FnSUNBZ0lDQWdJQ0FnVUhKdlkyVnpjeUJrWldGamRHbDJZWFJsSUhGMVpYVmxYRzRnSUNBZ0lDQWdJQ292WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJR1JsWVdOMGFYWmhkR1ZSZFdWMVpVeGxibWQwYUNBOUlHUmxZV04wYVhaaGRHVlJkV1YxWlM1c1pXNW5kR2c3WEc1Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQmtaV0ZqZEdsMllYUmxVWFZsZFdWTVpXNW5kR2c3SUdrckt5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnYVdRZ1BTQmtaV0ZqZEdsMllYUmxVWFZsZFdWYmFWMDdYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0JoWTNScGRtVkpaRWx1WkdWNElEMGdjblZ1Ym1sdVowbGtjeTVwYm1SbGVFOW1LR2xrS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElIQnliMk5sYzNNZ1BTQmhZM1JwZG1WUWNtOWpaWE56WlhOYmFXUmRPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJKWmlCMGFHbHpJR2x6SUdFZ2NuVnVibWx1WnlCd2NtOWpaWE56TENCa1pXRmpkR2wyWVhSbFhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb1lXTjBhWFpsU1dSSmJtUmxlQ0ErSUMweEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjblZ1Ym1sdVowbGtjeTV6Y0d4cFkyVW9ZV04wYVhabFNXUkpibVJsZUN3Z01TazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkWEJrWVhSbFVuVnVibWx1WjBOdmRXNTBLR1poYkhObExDQndjbTlqWlhOekxtbHpUR0Y2ZVNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1pHVnNaWFJsSUdGamRHbDJaVkJ5YjJObGMzTmxjMXRwWkYwN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvY0hKdlkyVnpjeTV2YmtSbFlXTjBhWFpoZEdVcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY0hKdlkyVnpjeTV2YmtSbFlXTjBhWFpoZEdVb2NISnZZMlZ6Y3lrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdMeXBjYmlBZ0lDQWdJQ0FnSUNBZ0lFVnRjSFI1SUdSbFlXTjBhWFpoZEdVZ2NYVmxkV1V1SUZkbElIVnpaU0JnUVhKeVlYa3VjM0JzYVdObFlDQmlaV05oZFhObElHbDBJR1J2WlhOdUozUmNiaUFnSUNBZ0lDQWdJQ0FnSUhkdmNtdHpJRzl1SUhSb1pTQnZjbWxuYVc1aGJDQmhjbkpoZVNCemJ5QjNaU0JrYjI0bmRDQm9ZWFpsSUhSdklHZGhjbUpoWjJVZ1kyOXNiR1ZqZENCaGJubDBhR2x1WjF4dUlDQWdJQ0FnSUNBcUwxeHVJQ0FnSUNBZ0lDQmtaV0ZqZEdsMllYUmxVWFZsZFdVdWMzQnNhV05sS0RBc0lHUmxZV04wYVhaaGRHVlJkV1YxWlV4bGJtZDBhQ2s3WEc1Y2JpQWdJQ0FnSUNBZ0x5cGNiaUFnSUNBZ0lDQWdJQ0FnSUZCeWIyTmxjM01nWVdOMGFYWmhkR1VnY1hWbGRXVmNiaUFnSUNBZ0lDQWdLaTljYmlBZ0lDQWdJQ0FnWTI5dWMzUWdZV04wYVhaaGRHVlJkV1YxWlV4bGJtZDBhQ0E5SUdGamRHbDJZWFJsVVhWbGRXVXViR1Z1WjNSb08xeHVYRzRnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnWVdOMGFYWmhkR1ZSZFdWMVpVeGxibWQwYURzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCcFpDQTlJR0ZqZEdsMllYUmxVWFZsZFdWYmFWMDdYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0JoWTNScGRtVkpaRWx1WkdWNElEMGdjblZ1Ym1sdVowbGtjeTVwYm1SbGVFOW1LR2xrS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElIQnliMk5sYzNNZ1BTQmhZM1JwZG1WUWNtOWpaWE56WlhOYmFXUmRPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJKWmlCd2NtOWpaWE56SUdsemJpZDBJR0ZzY21WaFpIa2djblZ1Ym1sdVp5d2dZV04wYVhaaGRHVmNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaGhZM1JwZG1WSlpFbHVaR1Y0SUQwOVBTQXRNU0FtSmlCd2NtOWpaWE56S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSEJ5YjJObGMzTXVhWE5RY21sdmNtbDBlU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlkVzV1YVc1blNXUnpMblZ1YzJocFpuUW9hV1FwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISjFibTVwYm1kSlpITXVjSFZ6YUNocFpDazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZFhCa1lYUmxVblZ1Ym1sdVowTnZkVzUwS0hSeWRXVXNJSEJ5YjJObGMzTXVhWE5NWVhwNUtUdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNod2NtOWpaWE56TG05dVFXTjBhWFpoZEdVcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY0hKdlkyVnpjeTV2YmtGamRHbDJZWFJsS0hCeWIyTmxjM01wTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lHRmpkR2wyWVhSbFVYVmxkV1V1YzNCc2FXTmxLREFzSUdGamRHbDJZWFJsVVhWbGRXVk1aVzVuZEdncE8xeHVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnlkVzV1YVc1blNXUnpPMXh1SUNBZ0lIMWNibjA3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3Byb2Nlc3MvbWFuYWdlci5qc1xuICoqIG1vZHVsZSBpZCA9IDUyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcblxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IHRydWU7XG4gICAgdmFyIGN1cnJlbnRRdWV1ZTtcbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgdmFyIGkgPSAtMTtcbiAgICAgICAgd2hpbGUgKCsraSA8IGxlbikge1xuICAgICAgICAgICAgY3VycmVudFF1ZXVlW2ldKCk7XG4gICAgICAgIH1cbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xufVxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICBxdWV1ZS5wdXNoKGZ1bik7XG4gICAgaWYgKCFkcmFpbmluZykge1xuICAgICAgICBzZXRUaW1lb3V0KGRyYWluUXVldWUsIDApO1xuICAgIH1cbn07XG5cbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG4vLyBUT0RPKHNodHlsbWFuKVxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcHJvY2Vzcy9icm93c2VyLmpzXG4gKiogbW9kdWxlIGlkID0gNTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIiwiZmlsZSI6InBvcG1vdGlvbi5nbG9iYWwuanMifQ==